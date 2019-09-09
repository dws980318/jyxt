import { get, post, form, deletes, put, putForm } from './request.js' //导入axios实例文件中方法
import mock from './fetch'
// let bsae_api = process.env.BASE_API ? './'+process.env.BASE_API :'..' //获取项目api请求地址

//根据id获取用户信息
let base_api = '';


const api = {
  // 就业学生端
  user(data) {
    // 账号资料
    return form(base_api + '/student/personal/account', data)
  },
  information(id) {
    // 查看个人基本资料
    return get(base_api + '/student/personal/information/' + id, {})
  },
  // 修改个人基本资料
  student(data) {
    // 账号资料
    return form(base_api + '/student/personal/information', data)
  },
  addresume(data) {
    // 新增个人履历
    return form(base_api + '/student/personal/recordInform', data)
  },
  Personalresume() {
    // 个人履历列表
    return get(base_api + '/student/personal/records', {})
  },
  watch(id) {
    // 个人履历查看
    return get(base_api + '/student/personal/recordInform/' + id, {})
  },
  edit(data) {
    // 个人履历编辑
    return putForm(base_api + '/student/personal/recordInform', data)
  },
  adddispatch(data) {
    // 派遣信息
    return form(base_api + '/student/personal/toSendInformation', data)
  },
  dispatch() {
    // 派遣信息
    return get(base_api + '/student/personal/toSendInformation', {})
  },
  addemployment(data) {
    // 新增就业信息
    return form(base_api + '/student/personal/jobApplication', data)
  },
  seeemployment(data) {
    // 查看就业信息
    return form(base_api + '/student/personal/jobApplication', data)
  },
  addarchives(data) {
    // 新增档案
    return form(base_api + '/student/personal/archivalReception', data)
  },
  active() {
    // 活动管理
    return get(base_api + '/student/employmentActivities', {})
  },
  lecture() {
    // 宣讲会
    return get(base_api + '/student/preachTalk', {})
  },
  //student-resument-children
  //新增个人简历
  AddResumeInform(data) {
    return form(base_api + '/student/resumeInform/', data)
  },
  //个人简历列表
  Resumes(data) {
    return get(base_api + '/student/resumes/', data)
  },
  //查看个人简历
  SeeResumeInform(data) {
    return get(base_api + '/student/resumeInform/' + data)
  },
  //修改个人简历
  EditResumeInform(data) {
    return putForm(base_api + '/student/resumeInform/', data)
  },
  //求职创业补贴申请
  subsidy(data) {
    return form(base_api + '/student/event/affjhaes', data)
  },
  //协议书申请
  agreement(data) { 
    return form(base_api + '/student/event/agreementApply', data)
  },
  //项目活动列表
  activity(data) {
    return get(base_api + '/student/event/projuctActivities', data)
  },
}
export default api
