// 引入 request.js
import axios from '../request'

// 按需导入 export
// 全部导入 export default
// 注册接口
// post 请求，并传入三个参数 phone pwd name
export const registerApi = (phone, pwd, name) => axios.post("/api/v1/pri/user/register",{
    "phone":phone,
    "pwd":pwd,
    "name":name
})

// 登录接口
// post 请求，并传入两个参数 phone pwd
export const loginApi = (phone, pwd) => axios.post("/api/v1/pri/user/login",{
    phone,
    pwd
})

// 轮播图接口
// get 请求，获取 banner 数据
export const getBanner = () => axios.get("/api/v1/pub/video/list_banner")

// 视频列表接口
// get 请求，获取视频列表数据
export const getVideoList = () => axios.get("/api/v1/pub/video/list")

// 视频详情
// 传入 video ID
export const getVideoDetail = (vid) => axios.get("/api/v1/pub/video/find_detail_by_id?",{
    params: {
        video_id:vid
    }
})

// 下单接口
// post 请求，传入 token，vid
export const saveOrder = (token, vid)=>axios.post("/api/v1/pri/order/save",{
    "video_id":vid
},{
    headers:{
        "token":token
    }
})

// 订单列表
// get 请求，获取 token 验证
export const getOrderList = (token)=>axios.get("/api/v1/pri/order/list",{
    params:{
        "token":token
    }
})

// 用户信息接口
// get 请求，获取 token 验证
export const getUserInfo = (token)=>axios.get("/api/v1/pri/user/find_by_token",{
    params:{
        "token":token
    }
})