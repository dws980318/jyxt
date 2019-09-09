import { get, post, deletes, put, form, putForm } from './request.js' //导入axios实例文件中方法
// let bsae_api = process.env.BASE_API ? './'+process.env.BASE_API :'..' //获取项目api请求地址
import student from './student.js'

/* 根据id获取用户信息 */
let base_api = 'http://192.168.0.252:2807'

// 接口
const api = {
  /* 企业 */
  //企业基本信息提交接口
  updComInioByUser(data) {
    return post(base_api + '/CompanyController/companyInfo/updComInioByUser', data)
  },
  //企业营业执照提交接口
  insertBusinessLicense(data) {
    return post(base_api + '/CompanyController/companyInfo/insertBusinessLicense', data)
  },
  //企业发票信息提交接口
  insertInvoiceInfo(data) {
    return post(base_api + '/CompanyController/companyInfo/insertInvoiceInfo', data)
  },
  //查询全部职位信息列表
  selectPositionRecruitByList(data) {
    return post(base_api + '/CompanyController/positionRecruit/selectPositionRecruitByList', data)
  },
  //查询职位信息详情
  selePositionRecruitById(data) {
    return post(base_api + '/CompanyController/positionRecruit/selePositionRecruitById', data)
  },
  //修改职位接口
  updPositionRecruitById(data) {
    return post(base_api + '/CompanyController/positionRecruit/updPositionRecruitById', data)
  },
  //发布新职位接口
  insertPositionRecruit(data) {
    return post(base_api + '/CompanyController/positionRecruit/insertPositionRecruit', data)
  },
  //删除职位接口
  delePositionRecruitById(data) {
    return post(base_api + '/CompanyController/positionRecruit/delePositionRecruitById', data)
  },
  //查询所有收到的学生简历列表
  selectResumeDeliveryByList(data) {
    return post(base_api + '/CompanyController/positionRecruit/selectResumeDeliveryByList', data)
  },
  //查询学生简历详情
  selectStudentResumeById(data) {
    return post(base_api + '/CompanyController/positionRecruit/selectStudentResumeById', data)
  },
  //下载简历接口
  updResumeDeliveryByDownload(data) {
    return post(base_api + '/CompanyController/positionRecruit/updResumeDeliveryByDownload', data)
  },
  //删除下载的简历接口
  deleResumeDeliveryBySrId(data) {
    return post(base_api + '/CompanyController/positionRecruit/deleResumeDeliveryBySrId', data)
  },
  //面试邀请接口
  addInterviewInvitation(data) {
    return post(base_api + '/CompanyController/positionRecruit/addInterviewInvitation', data)
  },
  //查询全部面试邀请列表
  selectInterviewInvitationByList(data) {
    return post(base_api + '/CompanyController/positionRecruit/selectInterviewInvitationByList', data)
  },
  //删除面试邀请接口
  deleInterviewInvitationBySrId(data) {
    return post(base_api + '/CompanyController/positionRecruit/deleInterviewInvitationBySrId', data)
  },
  //收藏简历接口
  addResumeCollectionById(data) {
    return post(base_api + '/CompanyController/positionRecruit/addResumeCollectionById', data)
  },
  //查询全部收藏简历列表
  selectResumeCollectionByList(data) {
    return post(base_api + '/CompanyController/positionRecruit/selectResumeCollectionByList', data)
  },
  //删除收藏的简历接口
  deleResumeCollectionBySrId(data) {
    return post(base_api + '/CompanyController/positionRecruit/deleResumeCollectionBySrId', data)
  },
  //查询全部校园宣讲会列表
  selectPreachMeetingByList(data) {
    return post(base_api + '/CompanyController/recruitingPreach/selectPreachMeetingByList', data)
  },
  //查询校园宣讲会详情
  selePreachMeetingById(data) {
    return post(base_api + '/CompanyController/recruitingPreach/selePreachMeetingById', data)
  },
  //修改校园宣讲会接口
  updPreachMeetingById(data) {
    return post(base_api + '/CompanyController/recruitingPreach/updPreachMeetingById', data)
  },
  //删除校园宣讲会接口
  delePreachMeetingById(data) {
    return post(base_api + '/CompanyController/recruitingPreach/delePreachMeetingById', data)
  },
  //申请宣讲会接口
  addPreachMeeting(data) {
    return post(base_api + '/CompanyController/recruitingPreach/addPreachMeeting', data)
  },
  //查询校园招聘会列表
  selectMeetConferenceByList(data) {
    return post(base_api + '/CompanyController/recruitingPreach/selectMeetConferenceByList', data)
  },
  //查询已报名的校园招聘会列表
  selectMeetconferSigncomByList(data) {
    return post(base_api + '/CompanyController/recruitingPreach/selectMeetconferSigncomByList', data)
  },
  //查询调查问卷列表
  seleQuestionnaireByList(data) {
    return post(base_api + '/CompanyController/serviceSetting/seleQuestionnaireByList', data)
  },
  //查询我的投诉与建议列表
  seleProposalFeedbackByList(data) {
    return post(base_api + '/CompanyController/serviceSetting/seleProposalFeedbackByList', data)
  },
  //新增投诉与建议接口
  addProposalFeedback(data) {
    return post(base_api + '/CompanyController/serviceSetting/addProposalFeedback', data)
  },
  //删除我的投诉与建议接口
  deleProposalFeedbackById(data) {
    return post(base_api + '/CompanyController/serviceSetting/deleProposalFeedbackById', data)
  },
  //查询账户信息详情
  seleUserInioByUserId(data) {
    return post(base_api + '/CompanyController/CompanyAccount/seleUserInioByUserId', data)
  },
  //修改账户信息
  updUserInioBySuId(data) {
    return post(base_api + '/CompanyController/CompanyAccount/updUserInioBySuId', data)
  },
  /* 教师 */
  //查询教师账户信息详情
  seleTeacherAccountByUserId(data) {
    return post(base_api + '/TeacherController/TeacherAccount/seleTeacherAccountByUserId', data)
  },
  //修改教师账户信息
  updTeacherInioBySuId(data) {
    return post(base_api + '/TeacherController/TeacherAccount/updTeacherInioBySuId', data)
  },
  //查询就业指导课程列表
  seleCourseArrangementByList(data) {
    return post(base_api + '/TeacherController/CourseManage/seleCourseArrangementByList', data)
  },
  //查询课程信息详情
  seleProposalFeedbackById(data) {
    return post(base_api + '/TeacherController/CourseManage/seleProposalFeedbackById', data)
  },
  //查询所有学生对象列表
  selectClassSchoolByList(data) {
    return post(base_api + '/TeacherController/CourseManage/selectClassSchoolByList', data)
  },
  //查询班级信息详情
  seleCourseArrangementInioByCarId(data) {
    return post(base_api + '/TeacherController/CourseManage/seleCourseArrangementInioByCarId', data)
  },
  //编辑班级信息详情
  updCourseArrangementInioByCarId(data) {
    return post(base_api + '/TeacherController/CourseManage/updCourseArrangementInioByCarId', data)
  },
  //查询作业列表学生信息
  seleStudentCourseInioByList(data) {
    return post(base_api + '/TeacherController/CourseManage/seleStudentCourseInioByList', data)
  },
  //查询学生就业信息详情
  seleObtainEmploymentById(data) {
    return post(base_api + '/TeacherController/CourseManage/seleObtainEmploymentById', data)
  },
  //查询学生个人信息详情
  seleStudentInioById(data) {
    return post(base_api + '/TeacherController/CourseManage/seleStudentInioById', data)
  },
  //查询就业报表信息列表
  selectObtainEmploymentInioByList(data) {
    return post(base_api + '/TeacherController/ObtainEmploymentInio/selectObtainEmploymentInioByList', data)
  },
  //查询就业报表信息院系班级列表
  selectObtainEmploymentClassByList(data) {
    return post(base_api + '/TeacherController/ObtainEmploymentInio/selectObtainEmploymentClassByList', data)
  },
  /* 咨询师 */
  //查询咨询师账户信息详情
  seleConsultationAccountByUserId(data) {
    return post(base_api + '/ConsultationController/ConsultationAccount/seleConsultationAccountByUserId', data)
  },
  //修改咨询师账户信息
  updConsultationInioBySuId(data) {
    return post(base_api + '/ConsultationController/ConsultationAccount/updConsultationInioBySuId', data)
  },






  kaptcha() {
    return form(base_api + '/kaptcha?' + (Math.floor(Math.random() * 100)))
  },
  //登录
  login(data) {
    return form(base_api + '/go/login', data)
  },
  //登出
  logout() {
    return get(base_api + '/go/logout', {})
  },

  //咨询师
  //咨询信息管理
  counselor(data) {
    return form(base_api + '/counselor/course', data)
  },

  //企业
  //company-personal-information-basic
  //查看企业信息
  SeeInformation() {
    return get(base_api + '/enterprise/information/' + localStorage.connectMark, {})
  },
  //修改企业信息
  EditInformation(data) {
    return putForm(base_api + '/enterprise/information/', data)
  },
  //company-recruit-position-Index
  //查找全部招聘信息
  SeeRecruitment(data) {
    return get(base_api + '/enterprise/recruitment/informations/' + localStorage.connectMark, data)
  },
  //新增招聘信息
  AddRecruitment(data) {
    return form(base_api + '/enterprise/recruitment/information/', data)
  },
  //招聘信息查找一个
  AddOneRecruitment(data) {
    return get(base_api + '/enterprise/recruitment/information/' + data)
  },
  //招聘信息编辑
  EditRecruitment(data) {
    return putForm(base_api + '/enterprise/recruitment/information/', data)
  },
  //company-recruit-resume-Onlineresume
  //企业收藏简历
  CollectFavorite(data) {
    return get(base_api + '/enterprise/recruitment/favorite/', data)
  },
  session() {
    return post(base_api + 'sessionTimeOut')
  },

  ...student
}




// const api = {
//   enterprise,
//   student
// }
export default api





// import mock from './fetch'

// export default {
//   login (url, params) {
//     return mock.mockdata(url, params)
//   }
// }
