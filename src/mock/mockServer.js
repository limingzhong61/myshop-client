/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'
// import indexCategory from './index_category.json'
// import shop from './shop.json'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
Mock.mock('/goods', {code:0, data: data.goods})
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', {
  longitude,
  latitude
})
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {
  geohash,
  keyword
})
// 6、用户名密码登陆
export const reqPwdLogin = ({
  name,
  pwd,
  captcha
}) => ajax(BASE_URL + '/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {
  phone
})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {
  phone,
  code
}, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
// 10、用户登出
export const reqLogout = () => ajax(BASE_URL + '/logout')

// 返回goods的接口
Mock.mock('/goods', {code:0, data: data.goods})
// 返回ratings的接口
Mock.mock('/ratings', {code:0, data: data.ratings})
// 返回info的接口
Mock.mock('/info', {code:0, data: data.info})

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可