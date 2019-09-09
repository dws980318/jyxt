import Mock from 'mockjs' // 引入mockjs

const user = [
  {username: 'admin', password: 'admin', role: 1, jurisdiction: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
  {username: 'admin123', password: 'admin123', role: 1, jurisdiction: [1, 2, 3, 4, 5]},
  {username: 'company', password: 'company', role: 2},
  {username: 'student', password: 'student', role: 3},
  {username: 'teacher', password: 'teacher', role: 4},
  {username: 'selor', password: 'selor', role: 5}
]

const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

let data = [] // 用于接受生成数据的数组

for (let i = 0; i < 10; i++) { // 可自定义生成的个数
  let template = {
    'Boolean': Random.boolean, // 可以生成基本数据类型
    'Natural': Random.natural(1, 10), // 生成1到100之间自然数
    'Integer': Random.integer(1, 100), // 生成1到100之间的整数
    'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
    'Character': Random.character(), // 生成随机字符串,可加参数定义规则
    'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
    'Range': Random.range(0, 10, 2), // 生成一个随机数组
    'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
    'Image': Random.image('#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
    'Color': Random.color(), // 生成一个颜色随机值
    'Paragraph': Random.paragraph(2, 5), // 生成2至5个句子的文本
    'Name': Random.name(), // 生成姓名
    'Url': Random.url(), // 生成web地址
    'Address': Random.province() // 生成地址
  }
  data.push(template)
}
const fileList = function (param) {
  param = param.body || ''
  // console.log(qs.parse(param));
  // 因为axios的post带参数被qs.stringfy()转换了，需要转回来。
  let paramObj = JSON.parse(param)
  console.log(paramObj)
  let files = []
  for (let i = 0; i < 3; i++) {
    let newFile = {
      name: paramObj.username + i + '.png',
      url: Random.dataImage('300x250', 'mock的图片') // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    }
    files.push(newFile)
  }
  return {
    fileList: files
  }
}
Mock.mock('/data/index', 'get', data) // 根据数据模板生成模拟数据
Mock.mock('/api/login', 'post', function (form) {
  const userForm = JSON.parse(form.body)
  var userIndex = 0
  const res = {}
  user.forEach((item, index) => {
    if (item.username === userForm.username && item.password === userForm.password) {
      userIndex = index + 1
    }
  })
  if (userIndex === 0) {
    res.role = 0
    res.info = '账号或密码错误！'
  } else if (user[userIndex - 1].role === 1) {
    res.role = user[userIndex - 1].role
    res.jurisdiction = user[userIndex - 1].jurisdiction
  } else {
    res.role = user[userIndex - 1].role
  }
  return res
})
Mock.mock('/fileupload', 'post', {}) // 文件上传
