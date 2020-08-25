import config from './config'
import store from '../store/index'
import axios from 'axios'
import md5 from 'js-md5'
import {setCookie, getCookie, delCookie} from './cookie'
import _ from 'lodash'
import URI from "urijs"
import {eventBus} from '@/eventBus'
import vm from '../main'
import Url from './url'
const { userTokenExpire } = config;

// class 会无法判定实例归属，手动继承
function BusinessError(errorResponseData, message, code) {
    Error.call(this, message);
    this.code = code || errorResponseData.code;
    this.message = message || errorResponseData.message || '';
    this.data = errorResponseData;
}
BusinessError.prototype.toString = () => {
    try {
        return this.message;
    } catch (error) {
        return error;
    }
};

const ERROR_CODE_MESSAGE = {
    "400": "错误请求",
    "401": "未授权，请重新登录",
    "402": "未加入公司",
    "403": "拒绝访问",
    "404": "请求错误，未找到该资源",
    "405": "请求方法未允许",
    "408": "请求超时",
    "500": "服务器端出错",
    "501": "网络未实现",
    "502": "网络错误",
    "503": "服务不可用",
    "504": "网络超时",
    "505": "http版本不支持该请求"
};

function onHandlePay(){
    vm.$alert("公司余额不足，请联系销售充值。联系方式：400-789-0789", "余额不足", {
        confirmButtonText: '知道了'
    })
};

axios.interceptors.request.use(_config => {
    if (toolkit.getToken()) {
        _config.headers['AUTHORIZATION'] = `Bearer ${toolkit.getToken()}`
    }
    if(toolkit.getCompany()){
        _config.data && (_config.data['ucCompanyId'] = toolkit.getCompany())
    }
    _config.data && (_config.data['platform'] = "pc")
    return _config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use(res => {
    let headers = res.headers
    let code = res.data.code
    if(code == 409){
        onHandlePay()
        throw new BusinessError(res.data, res.data.message, res.data.code)
    }
    return res.data
}, err => {
    if (err instanceof BusinessError) {
        // 已经处理好了，则直接往外抛
        return Promise.reject(err)
    }

    let message = '连接到服务器失败';
    if (typeof err === 'string') {
        message = err
    } else if (err && err.response) {
        message = ERROR_CODE_MESSAGE[err.response.status] || `连接错误${err.response.status}`;
    }
    if (err instanceof Error) {
        // 代码异常
        message = err.message;
        err.response = {
            code: err.code
        }
    }
    return Promise.reject(new BusinessError(err.response, message));
});

let toolkit = {
    apiPath(url) {
      if(/^http[s]*:\/\//.test(url)) {
        return url
      } else {
        return _.trim("", '/') + '/' + _.trimStart(url, '/') //need to fix
      }
    },
    goApiPath(url){
        if(/^http[s]*:\/\//.test(url)) {
        return url
      } else {
        return _.trim(config.goApiHost, '/') + '/' + _.trimStart(url, '/')
      }
    },
    post(url, param) {
        return axios({
            method: 'post',
            url: this.apiPath(url),
            data: param
        })
    },
    // postAccount(url, param) {
    //     return axios({
    //         method: 'post',
    //         url: config.companyHost + url,
    //         data: param
    //     })
    // },
    get(url, param) {
        return axios({
            method: 'get',
            url: this.apiPath(url),
            params: param
        })
    },
    put(url, param) {
      return axios({
            method: 'put',
            url: this.apiPath(url),
            data: param,
            timeout: 10000,
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
    },
    upload(url, file) {
        const form = new FormData();
        form.append("file", file);
        return axios({
            method: 'post',
            url: this.apiPath(url),
            data: form,
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: (progressEvent) => {
                if (progressEvent.lengthComputable) {
                    file.percentage =
                    ((progressEvent.loaded / progressEvent.total) * 100) | 0;
                }
            }
        })
    },
    uploadParams(){
        let client = config.uploadClient
        let secret = config.uploadSecret
        let appCode = config.uploadAppCode
        let timestamp = parseInt(new Date().getTime()/1000)
        let sign =  md5(client + '|' + secret +'|'+ timestamp).toLocaleLowerCase()
        return `?sign=${sign}&appCode=${appCode}&client=${client}&secret=${secret}&timestamp=${timestamp}`
    },
    sendMsg(e, source=''){
      return this.post('/interview/login/sendCaptcha', {
        phone: e,
        source: source || ''
      })
    },
    format (date, format, monthNames) {
        var defMonthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        monthNames = monthNames || defMonthNames
        if (typeof date === 'string') {
            date = new Date(date.replace(/-/g, '/'))
        } else {
            date = new Date(date)
        }

        var map = {
            'M' : date.getMonth() + 1,
            'd' : date.getDate(),
            'h' : date.getHours(),
            'm' : date.getMinutes(),
            's' : date.getSeconds(),
            'q' : Math.floor((date.getMonth() + 3) / 3),
            'S' : date.getMilliseconds()
        }

        format = format.replace(/([yMdhmsqS])+/g, (all, t) => {
            var v = map[t]
            if (v !== undefined) {
                if (all === 'MMMM') {
                    return monthNames[v - 1]
                }
                if (all === 'MMM') {
                    return shortMonth[v - 1]
                }
                if (all.length > 1) {
                    v = '0' + v
                    v = v.substr(v.length - 2)
                }
                return v
            } else if (t === 'y') {
                return String(date.getFullYear()).substr(4 - all.length)
            }
            return all
        })
        return format
    },
    getTimeStamp (time) {
        time = time.replace(/-/g, '/')
        return Date.parse(time)
    },

    setToken(token){
        setCookie('saas-userToken', token, config.userTokenExpire)
    },
    delToken(){
        delCookie('saas-userToken')
    },
    getToken(){
        // 优先从url上取
        if(vm && vm.$route && vm.$route.query.token){
            let token = vm.$route.query.token
            this.setToken(token)
            return token
        }else{
            return getCookie('saas-userToken')
        }
    },
    setCompany(companyId){
        Boolean(Number(companyId)) && Url.setQuery("cid", companyId, true)
        companyId && setCookie('currentCompanyId', companyId, config.userTokenExpire)
    },
    delCompany(){
        delCookie('currentCompanyId')
    },
    getCompany(){
        // 优先从url上取
        if(Url.getQuery('cid')){
            let companyId = Url.getQuery('cid')
            this.setCompany(companyId)
            return companyId
        }else{
            let companyId = getCookie('currentCompanyId')
            Boolean(Number(companyId)) && Url.setQuery("cid", companyId, true)
            return companyId
        }
    },
    routeToSaas(path){
        return config.saasHost + path
    },
    getUserInfo(){
        return new Promise((resolve, reject) => {
            let user = store.state.userInfo
            if(user && user.id){
                resolve(user)
                return
            }
            this.post('/interview/user/info', {
                'saas-userToken': this.getToken()
            }).then(res => {
                if(res.code == 0){
                    store.commit('updateUser', res.data)
                    resolve(res.data)
                }else{
                    store.commit('updateUser', null)
                    reject('')
                }
            }).catch(err => {
                store.commit('updateUser', null)
                reject('')
            })
        })
    },
    getCompanyInfo(){
        return new Promise((resolve, reject) => {
            let company = store.state.company
            if(company && company.id){
                resolve(company)
                return
            }
            return this.refreshCompanyInfo().then(company=> {
                if(company){
                    resolve(company)
                }else{
                    reject()
                }
            }).catch(err => {
                reject(err)
            })
        })
    },
    refreshCompanyInfo(){
        return new Promise((resolve, reject)=>{
            this.post('/interview/user/getCompany', {
                'companyId': this.getCompany()
            }).then(res => {
                if(res.code == 0){
                    store.commit('updateCompany', res.data)
                    resolve(res.data)
                }else{
                    store.commit('updateCompany', null)
                    reject('')
                }
            }).catch(err => {
                store.commit('updateCompany', null)
                reject('')
            })

        })
    },
    getCompanyList(){
        return new Promise((resolve, reject) => {
            let companyList = store.state.companyList
            if(companyList && companyList.length){
                resolve(companyList)
                return
            }
            return toolkit.post("/interview/user/getCompanyList").then(res => {
                if(res.code == 0){
                    store.commit('updateCompanyList', res.data)
                    resolve(res.data)
                    return res.data                    
                }else{
                    reject()
                }
            }).catch(e => {
                store.commit('updateCompanyList', [])
                reject()
            })
        })        
    },
    logout(){
        store.commit('updateUser', null)
        store.commit('updateCompany', null)
        store.commit('updateCompanyList', [])
        this.delToken()
        this.delCompany()
    },
    isAndroid(){
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        return isAndroid
    },
    isPc(){
        return !/Android|webOS|iPhone|iPod|BlackBerry|XiaoMi/i.test(navigator.userAgent)
    },
    isMac(){
        var agent = navigator.userAgent.toLowerCase();
        return /macintosh|mac os x/i.test(navigator.userAgent);
    },
    identifyBrowser(u){
        const ua = u&&u.toLocaleLowerCase() || navigator.userAgent.toLocaleLowerCase();
        var browserType = null;
        if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
        browserType = "IE";
        } else if (ua.match(/firefox/) != null) {
        browserType = "火狐";
        } else if (ua.match(/ucbrowser/) != null) {
        browserType = "UC";
        } else if (ua.match(/opera/) != null) {
        browserType = "欧朋";
        } else if (ua.match(/bidubrowser/) != null) {
        browserType = "百度";
        } else if (ua.match(/metasr/) != null) {
        browserType = "搜狗";
        }else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
        browserType = "QQ";
        }else if(ua.match(/MicroMessenger/i) !== null){
        browserType = "微信";
        }  else if (ua.match(/maxthon/) != null) {
        browserType = "遨游";
        }else if (ua.match(/edge/) != null) {
        browserType = "Edge";
        } else if (ua.match(/chrome/) != null) {
            var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
            function _mime(option, value) {
                var mimeTypes = navigator.mimeTypes;
                for (var mt in mimeTypes) {
                if (mimeTypes[mt][option] == value) {
                    return true;
                }
                }
                return false;
            }
            if (is360) {
                browserType = '360';
            } else {
                browserType = "谷歌";
            }
        } else if (ua.match(/safari/) != null) {
        browserType = "Safari";
        }
        return browserType;
    },
    isSafri(){
        var ua = navigator.userAgent;
        if(ua.indexOf('applewebkit') > -1 && ua.indexOf('mobile') > -1 && ua.indexOf('safari') > -1 &&
            ua.indexOf('linux') === -1 && ua.indexOf('android') === -1 && ua.indexOf('chrome') === -1 &&
            ua.indexOf('ios') === -1 && ua.indexOf('browser') === -1){
            return true
        }else{
            return false
        }
    },
    checkPlatform(){
        if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){
            return 'ios'
        }else if(navigator.userAgent.match(/android/i)){
            return 'android'
        }else{
            return ''
        }
    },
    isWeiXin(){
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }else{
            return false;
        }
    },
    getSystemInfo(){
        var ua = navigator.userAgent.toLowerCase();
        return ua;
    },
    // 动作打点
    async logToBackend(action, info, extraData){
        let appCode = config.trailAppCode
        let user =  store.state.userInfo
        let content = JSON.stringify({
            userId: user && user.id,
            // companyId: 0,
            action: action,
            content: info,
            extraData: extraData
        })
        let time = new Date().getTime()
        let sign = md5(config.trailAppCode + config.trailSecret + content + time)
        let param = {
            appCode: appCode,
            content: content,
            timestamp: time,
            sign: sign
        }
        await this.get(config.trailHost, param)
    },
    ping(option){
        var ping, requestTime, responseTime ;
        var getUrl = function(url){    //保证url带http://
            var strReg="^((https|http)?://){1}"
            var re=new RegExp(strReg);
            return re.test(url)?url:"https://"+url;
        }
        $.ajax({
            url: getUrl(option.url)+'/'+ (new Date()).getTime() + '.html',  //设置一个空的ajax请求
            type: 'GET',
            dataType: 'html',
            timeout: 10000,
            beforeSend : function()
            {
                if(option.beforePing) option.beforePing();
                requestTime = new Date().getTime();
            },
            complete : function()
            {
                responseTime = new Date().getTime();
                ping = Math.abs(requestTime - responseTime);
                if(option.afterPing) option.afterPing(ping);
            }
        });

        let _this = this
        if(option.interval && option.interval > 0)
        {
            var interval = option.interval * 1000;
            setTimeout(function(){_this.ping(option)}, interval);
            // option.interval = 0;        // 阻止多重循环
            // setInterval(function(){$.ping(option)}, interval);
        }
    },
    showError(info){
        vm.$message({
            message: info,
            type: 'error',
            offset: 100,
            duration: 0
        })
    },
    showInfo(info){
        vm.$message({
            message: info,
            type: 'info',
            offset: 100,
            duration: 0
        })
    },
    dataURLtoFile(dataurl, filename) {//将base64转换为文件
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    },
    checkUa(){
        return new Promise((resolve, reject) => {
            toolkit.post("/interview/web/checkUa").then(res => {
                if(res.code == 0){
                    store.commit("updateUa", true)
                    resolve(res)
                }else{
                    reject(res)
                }
            }).catch(err => {
                reject(err)
            })
        })
    },
    checkExamUa(){
        return new Promise((resolve, reject) => {
            toolkit.post("/interview/web/checkExamUa").then(res => {
                if(res.code == 0){
                    resolve(res)
                }else{
                    reject(res)
                }
            }).catch(err => {
                reject(err)
            })
        })
    },

    copyUrl(url){
        let oInput = document.createElement('textarea')
        oInput.value = url
        document.body.appendChild(oInput)
        oInput.select()
        document.execCommand("Copy")
        oInput.style.display = 'none'
        document.body.removeChild(oInput)
    },
    goBoolFormat(value){
        if(typeof value == "number"){
            return value == 1 ? true : value == 2 ? false : false
        }else if(typeof value == "boolean"){
            return value ? 1 : 2
        }
    },
    openPage(url){
        let uri = new URI(url)
        let query = uri.search(true)
        if(!query.cid){
            uri.setQuery("cid", vm.$route.query.cid)
        }
        window.open(uri.href())
    },
    confirmAuth(){
        let user = store.state.userInfo
        let authLevel = user.threatDegree
        return new Promise((resolve, reject) => {
            if(authLevel >= 10 && authLevel <= 19){
                // 灰名单
                vm.$confirm("此功能需联系运营开通", "提示", {
                    cancelButtonText: "取消",
                    confirmButtonText: "发送申请"
                }).then(() => {
                    vm.$message.success("已收到您的申请，我们的运营会在24小时内联系您")
                    toolkit.post("/interview/common/message", {}).then(()=>{
                        
                    })
                }).catch(() => {
                    
                })
                reject()
            }else if(authLevel < 10){
                // 白名单
                resolve()
            }else{
                // 黑名单
            }
        })
    },
    hideMobile(platform){
        return Number(platform) >> 1 & 1 == 1
    }
}
export default toolkit
