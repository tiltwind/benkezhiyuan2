// 专业数据
const majors = [
  // 历史类专业
  // 5122 西华师范大学
  {
    schoolId: '5122',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '97',
    majorName: '学前教育(师范)',
    planCount: 2,
    tuition: 5760
  },
  // 5137 成都大学
  {
    schoolId: '5137',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0J',
    majorName: '网络与新媒体',
    planCount: 1,
    tuition: 5520
  },
  
  // 物理类专业
  // 5105 西南科技大学
  {
    schoolId: '5105',
    majorGroupId: '102',
    subject: '物理类',
    majorCode: '24',
    majorName: '土木类',
    planCount: 5,
    tuition: 6240
  },
  // 5109 西华大学
  {
    schoolId: '5109',
    majorGroupId: '102',
    subject: '物理类',
    majorCode: '39',
    majorName: '土木工程',
    planCount: 4,
    tuition: 5980
  },
  // 5112 四川农业大学
  {
    schoolId: '5112',
    majorGroupId: '101',
    subject: '物理类',
    majorCode: '65',
    majorName: '土木工程',
    planCount: 1,
    tuition: 6240
  },
  {
    schoolId: '5112',
    majorGroupId: '101',
    subject: '物理类',
    majorCode: '66',
    majorName: '给排水科学与工程',
    planCount: 1,
    tuition: 6240
  },
  // 5137 成都大学
  {
    schoolId: '5137',
    majorGroupId: '102',
    subject: '物理类',
    majorCode: '14',
    majorName: '土木工程',
    planCount: 3,
    tuition: 5980
  },
  
  // 历史类征集志愿专业
  // 0021 吉林大学
  {
    schoolId: '0021',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '10',
    majorName: '新闻传播学类',
    planCount: 1,
    tuition: 6000
  },
  // 0357 西南民族大学
  {
    schoolId: '0357',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '03',
    majorName: '民族学',
    planCount: 3,
    tuition: 5760
  },
  {
    schoolId: '0357',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '15',
    majorName: '学前教育(师范)',
    planCount: 1,
    tuition: 5760
  },
  // 0363 西北民族大学
  {
    schoolId: '0363',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'PP',
    majorName: '新闻传播学类',
    planCount: 2,
    tuition: 3800
  },
  // 0369 华北科技学院
  {
    schoolId: '0369',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '1Q',
    majorName: '日语',
    planCount: 1,
    tuition: 4900
  },
  // 0373 北方民族大学
  {
    schoolId: '0373',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '08',
    majorName: '旅游管理',
    planCount: 1,
    tuition: 4400
  },
  // 1161 民政职业大学
  {
    schoolId: '1161',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0R',
    majorName: '社会工作',
    planCount: 1,
    tuition: 6000
  },
  // 1181 首都师范大学科德学院
  {
    schoolId: '1181',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '03',
    majorName: '汉语言文学',
    planCount: 1,
    tuition: 79800
  },
  {
    schoolId: '1181',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '06',
    majorName: '审计学',
    planCount: 2,
    tuition: 79800
  },
  // 1183 北京邮电大学世纪学院
  {
    schoolId: '1183',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '14',
    majorName: '传播学',
    planCount: 1,
    tuition: 34000
  },
  // 1184 北京工业大学耿丹学院
  {
    schoolId: '1184',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'W1',
    majorName: '国际经济与贸易',
    planCount: 1,
    tuition: 46600
  },
  {
    schoolId: '1184',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'W2',
    majorName: '财务管理',
    planCount: 2,
    tuition: 46600
  },
  {
    schoolId: '1184',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'X5',
    majorName: '汉语国际教育',
    planCount: 1,
    tuition: 46600
  },
  // 1185 北京第二外国语学院中瑞酒店管理学院
  {
    schoolId: '1185',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '01',
    majorName: '酒店管理(酒店数字化运营管理)',
    planCount: 1,
    tuition: 49800
  },
  {
    schoolId: '1185',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '04',
    majorName: '财务管理',
    planCount: 8,
    tuition: 49800
  },
  {
    schoolId: '1185',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '05',
    majorName: '人力资源管理',
    planCount: 1,
    tuition: 49800
  },
  // 1207 天津师范大学
  {
    schoolId: '1207',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '16',
    majorName: '小学教育(师范)',
    planCount: 1,
    tuition: 4400
  },
  // 1251 天津天狮学院
  {
    schoolId: '1251',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '01',
    majorName: '金融学类',
    planCount: 5,
    tuition: 27800
  },
  {
    schoolId: '1251',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '03',
    majorName: '英语',
    planCount: 3,
    tuition: 29800
  },
  {
    schoolId: '1251',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '15',
    majorName: '工商管理类',
    planCount: 26,
    tuition: 27800
  },
  {
    schoolId: '1251',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '16',
    majorName: '劳动与社会保障',
    planCount: 4,
    tuition: 27800
  },
  {
    schoolId: '1251',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '17',
    majorName: '电子商务',
    planCount: 3,
    tuition: 27800
  },
  // 1289 天津仁爱学院
  {
    schoolId: '1289',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '31',
    majorName: '英语',
    planCount: 3,
    tuition: 31000
  },
  {
    schoolId: '1289',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '32',
    majorName: '商务英语',
    planCount: 2,
    tuition: 31000
  },
  // 1294 天津传媒学院
  {
    schoolId: '1294',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '16',
    majorName: '汉语言文学',
    planCount: 9,
    tuition: 30000
  },
  {
    schoolId: '1294',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '17',
    majorName: '新闻学',
    planCount: 9,
    tuition: 30000
  },
  {
    schoolId: '1294',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '18',
    majorName: '文化产业管理',
    planCount: 8,
    tuition: 24000
  },
  {
    schoolId: '1294',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '20',
    majorName: '学前教育',
    planCount: 10,
    tuition: 24000
  },
  {
    schoolId: '1294',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '29',
    majorName: '广告学',
    planCount: 6,
    tuition: 33000
  },
  {
    schoolId: '1294',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '28',
    majorName: '英语',
    planCount: 2,
    tuition: 24000
  },
  // 1295 天津外国语大学滨海外事学院
  {
    schoolId: '1295',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '17',
    majorName: '广告学',
    planCount: 1,
    tuition: 15000
  },
  // 1317 廊坊师范学院
  {
    schoolId: '1317',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '09',
    majorName: '学前教育(师范)',
    planCount: 1,
    tuition: 4600
  },
  // 1320 河北经贸大学
  {
    schoolId: '1320',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '44',
    majorName: '旅游管理',
    planCount: 2,
    tuition: 4600
  },
  // 1324 唐山师范学院
  {
    schoolId: '1324',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '51',
    majorName: '旅游管理',
    planCount: 1,
    tuition: 4600
  },
  // 1348 华北理工大学轻工学院
  {
    schoolId: '1348',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '01',
    majorName: '国际经济与贸易',
    planCount: 2,
    tuition: 19500
  },
  // 1368 河北传媒学院
  {
    schoolId: '1368',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '41',
    majorName: '电子商务',
    planCount: 1,
    tuition: 16000
  },
  {
    schoolId: '1368',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '42',
    majorName: '会展经济与管理',
    planCount: 1,
    tuition: 16000
  },
  {
    schoolId: '1368',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '45',
    majorName: '英语',
    planCount: 1,
    tuition: 16000
  },
  {
    schoolId: '1368',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '46',
    majorName: '西班牙语',
    planCount: 1,
    tuition: 16000
  },
  {
    schoolId: '1368',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '47',
    majorName: '葡萄牙语',
    planCount: 1,
    tuition: 16000
  },
  // 1381 河北东方学院
  {
    schoolId: '1381',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '03',
    majorName: '国际经济与贸易',
    planCount: 1,
    tuition: 18000
  },
  {
    schoolId: '1381',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '20',
    majorName: '财务管理',
    planCount: 1,
    tuition: 18000
  },
  // 1834 保定理工学院
  {
    schoolId: '1834',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '29',
    majorName: '小学教育',
    planCount: 2,
    tuition: 20000
  },
  // 1835 北京中医药大学东方学院
  {
    schoolId: '1835',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '02',
    majorName: '针灸推拿学',
    planCount: 2,
    tuition: null
  },
  {
    schoolId: '1835',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '18',
    majorName: '健康服务与管理',
    planCount: 1,
    tuition: null
  },
  {
    schoolId: '1835',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '05',
    majorName: '药事管理',
    planCount: 1,
    tuition: null
  },
  {
    schoolId: '1835',
    majorGroupId: '103',
    subject: '历史类',
    majorCode: '14',
    majorName: '护理学',
    planCount: 1,
    tuition: null
  },
  // 1421 山西中医药大学
  {
    schoolId: '1421',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '05',
    majorName: '中医养生学',
    planCount: 1,
    tuition: 5635
  },
  // 1474 晋中信息学院
  {
    schoolId: '1474',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '30',
    majorName: '财务管理',
    planCount: 1,
    tuition: 14980
  },
  {
    schoolId: '1474',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '32',
    majorName: '市场营销',
    planCount: 1,
    tuition: 14980
  },
  // 1490 山西工商学院
  {
    schoolId: '1490',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '48',
    majorName: '财务管理',
    planCount: 1,
    tuition: 14900
  },
  // 1509 内蒙古师范大学
  {
    schoolId: '1509',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'A4',
    majorName: '酒店管理(师范)',
    planCount: 1,
    tuition: 4600
  },
  // 2123 辽宁师范大学
  {
    schoolId: '2123',
    majorGroupId: '103',
    subject: '历史类',
    majorCode: 'U4',
    majorName: '行政管理',
    planCount: 1,
    tuition: 5200
  },
  // 2124 沈阳师范大学
  {
    schoolId: '2124',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '30',
    majorName: '酒店管理',
    planCount: 1,
    tuition: 5200
  },
  // 2160 辽宁对外经贸学院
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '01',
    majorName: '国际经济与贸易',
    planCount: 3,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '02',
    majorName: '金融学',
    planCount: 2,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '03',
    majorName: '物流管理',
    planCount: 2,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '04',
    majorName: '电子商务',
    planCount: 4,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '07',
    majorName: '日语',
    planCount: 2,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '09',
    majorName: '朝鲜语',
    planCount: 2,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0A',
    majorName: '西班牙语',
    planCount: 2,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0B',
    majorName: '会计学',
    planCount: 3,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0C',
    majorName: '财务管理',
    planCount: 2,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0F',
    majorName: '人力资源管理',
    planCount: 1,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0G',
    majorName: '旅游管理',
    planCount: 1,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0H',
    majorName: '会展经济与管理',
    planCount: 3,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0J',
    majorName: '养老服务管理',
    planCount: 1,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '05',
    majorName: '英语',
    planCount: 2,
    tuition: 30000
  },
  {
    schoolId: '2160',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '06',
    majorName: '商务英语',
    planCount: 1,
    tuition: 30000
  },
  // 2175 辽宁传媒学院
  {
    schoolId: '2175',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '14',
    majorName: '应用中文',
    planCount: 4,
    tuition: 27000
  },
  // 2183 大连财经学院
  {
    schoolId: '2183',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '2A',
    majorName: '财政学',
    planCount: 1,
    tuition: 29000
  },
  {
    schoolId: '2183',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '3C',
    majorName: '市场营销',
    planCount: 1,
    tuition: 29000
  },
  {
    schoolId: '2183',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '3D',
    majorName: '跨境电子商务',
    planCount: 1,
    tuition: 29000
  },
  {
    schoolId: '2183',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '5D',
    majorName: '信用风险管理与法律防控',
    planCount: 1,
    tuition: 29000
  },
  {
    schoolId: '2183',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '6C',
    majorName: '互联网金融',
    planCount: 1,
    tuition: 29000
  },
  // 2184 沈阳科技学院
  {
    schoolId: '2184',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0F',
    majorName: '金融学',
    planCount: 1,
    tuition: 29000
  },
  {
    schoolId: '2184',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0J',
    majorName: '会计学',
    planCount: 3,
    tuition: 29000
  },
  {
    schoolId: '2184',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0K',
    majorName: '资产评估',
    planCount: 2,
    tuition: 29000
  },
  {
    schoolId: '2184',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0L',
    majorName: '审计学',
    planCount: 2,
    tuition: 29000
  },
  // 2188 大连东软信息学院
  {
    schoolId: '2188',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'W3',
    majorName: '电子商务',
    planCount: 2,
    tuition: 28000
  },
  {
    schoolId: '2188',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'W8',
    majorName: '俄语',
    planCount: 4,
    tuition: 28000
  },
  // 2189 辽宁理工学院
  {
    schoolId: '2189',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '02',
    majorName: '汉语言文学',
    planCount: 1,
    tuition: 28000
  },
  {
    schoolId: '2189',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '21',
    majorName: '财务管理',
    planCount: 1,
    tuition: 28000
  },
  // 2190 大连科技学院
  {
    schoolId: '2190',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '20',
    majorName: '会计学',
    planCount: 5,
    tuition: 27000
  },
  {
    schoolId: '2190',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '24',
    majorName: '劳动与社会保障',
    planCount: 4,
    tuition: 26000
  },
  {
    schoolId: '2190',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '25',
    majorName: '社会工作',
    planCount: 3,
    tuition: 26000
  },
  {
    schoolId: '2190',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '26',
    majorName: '英语',
    planCount: 3,
    tuition: 26000
  },
  {
    schoolId: '2190',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '27',
    majorName: '日语',
    planCount: 2,
    tuition: 26000
  },
  // 2192 沈阳工学院
  {
    schoolId: '2192',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'B1',
    majorName: '会计学',
    planCount: 4,
    tuition: 28000
  },
  {
    schoolId: '2192',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'B2',
    majorName: '金融学',
    planCount: 4,
    tuition: 28000
  },
  {
    schoolId: '2192',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'B3',
    majorName: '市场营销',
    planCount: 2,
    tuition: 28000
  },
  {
    schoolId: '2192',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'B4',
    majorName: '人力资源管理',
    planCount: 1,
    tuition: 28000
  },
  {
    schoolId: '2192',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'B5',
    majorName: '物流管理',
    planCount: 2,
    tuition: 28000
  },
  {
    schoolId: '2192',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'D3',
    majorName: '时尚传播',
    planCount: 2,
    tuition: 28000
  },
  {
    schoolId: '2192',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'D4',
    majorName: '网络与新媒体',
    planCount: 2,
    tuition: 28000
  },
  // 2196 沈阳城市建设学院
  {
    schoolId: '2196',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '22',
    majorName: '工商管理',
    planCount: 2,
    tuition: 29000
  },
  {
    schoolId: '2196',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '23',
    majorName: '会计学',
    planCount: 2,
    tuition: 29000
  },
  {
    schoolId: '2196',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '26',
    majorName: '网络与新媒体',
    planCount: 4,
    tuition: 29000
  },
  // 2197 大连工业大学艺术与信息工程学院
  {
    schoolId: '2197',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '01',
    majorName: '国际经济与贸易',
    planCount: 5,
    tuition: 28000
  },
  {
    schoolId: '2197',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '02',
    majorName: '英语',
    planCount: 9,
    tuition: 27500
  },
  {
    schoolId: '2197',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '04',
    majorName: '网络与新媒体',
    planCount: 28,
    tuition: 27500
  },
  {
    schoolId: '2197',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '13',
    majorName: '工商管理',
    planCount: 7,
    tuition: 28000
  },
  {
    schoolId: '2197',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '25',
    majorName: '互联网金融',
    planCount: 11,
    tuition: 28000
  },
  {
    schoolId: '2197',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '2B',
    majorName: '汉语言文学',
    planCount: 11,
    tuition: 27500
  },
  // 2199 大连理工大学城市学院
  {
    schoolId: '2199',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'B5',
    majorName: '日语',
    planCount: 2,
    tuition: 29000
  },
  {
    schoolId: '2199',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'D3',
    majorName: '市场营销',
    planCount: 2,
    tuition: 29000
  },
  {
    schoolId: '2199',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'G3',
    majorName: '跨境电子商务',
    planCount: 2,
    tuition: 29000
  },
  // 2562 辽宁师范大学海华学院
  {
    schoolId: '2562',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '03',
    majorName: '学前教育',
    planCount: 1,
    tuition: 28000
  },
  {
    schoolId: '2562',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '04',
    majorName: '小学教育',
    planCount: 1,
    tuition: 28000
  },
  {
    schoolId: '2562',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '08',
    majorName: '英语',
    planCount: 3,
    tuition: 27500
  },
  {
    schoolId: '2562',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '09',
    majorName: '新闻学',
    planCount: 3,
    tuition: 27500
  },
  {
    schoolId: '2562',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '10',
    majorName: '广告学',
    planCount: 1,
    tuition: 27500
  },
  {
    schoolId: '2562',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '19',
    majorName: '会计学',
    planCount: 4,
    tuition: 28000
  },
  {
    schoolId: '2562',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '02',
    majorName: '思想政治教育',
    planCount: 1,
    tuition: 28000
  },
  // 2201 长春理工大学
  {
    schoolId: '2201',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: 'N6',
    majorName: '社会工作',
    planCount: 1,
    tuition: 5280
  },
  // 2283 长春财经学院
  {
    schoolId: '2283',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '04',
    majorName: '税收学',
    planCount: 4,
    tuition: 26000
  },
  {
    schoolId: '2283',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '11',
    majorName: '汉语国际教育',
    planCount: 3,
    tuition: 26000
  },
  {
    schoolId: '2283',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '13',
    majorName: '网络与新媒体',
    planCount: 3,
    tuition: 26000
  },
  {
    schoolId: '2283',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '19',
    majorName: '工商管理',
    planCount: 1,
    tuition: 26000
  },
  {
    schoolId: '2283',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '23',
    majorName: '人力资源管理',
    planCount: 3,
    tuition: 26000
  },
  {
    schoolId: '2283',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '24',
    majorName: '审计学',
    planCount: 1,
    tuition: 26800
  },
  // 2285 长春建筑学院
  {
    schoolId: '2285',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '33',
    majorName: '工商管理',
    planCount: 5,
    tuition: 25000
  },
  {
    schoolId: '2285',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '34',
    majorName: '财务管理',
    planCount: 4,
    tuition: 25000
  },
  {
    schoolId: '2285',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '36',
    majorName: '电子商务',
    planCount: 1,
    tuition: 25000
  },
  // 2288 长春工业大学人文信息学院
  {
    schoolId: '2288',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '26',
    majorName: '会计学',
    planCount: 2,
    tuition: 25000
  },
  {
    schoolId: '2288',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '28',
    majorName: '电子商务',
    planCount: 1,
    tuition: 25000
  },
  {
    schoolId: '2288',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '32',
    majorName: '金融学',
    planCount: 3,
    tuition: 25000
  },
  {
    schoolId: '2288',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '33',
    majorName: '英语',
    planCount: 2,
    tuition: 25000
  },
  {
    schoolId: '2288',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '34',
    majorName: '商务英语',
    planCount: 2,
    tuition: 25000
  },
  // 2290 长春光华学院
  {
    schoolId: '2290',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '02',
    majorName: '金融学',
    planCount: 1,
    tuition: 25000
  },
  {
    schoolId: '2290',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '10',
    majorName: '小学教育',
    planCount: 2,
    tuition: 26000
  },
  // 2291 长春人文学院
  {
    schoolId: '2291',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '26',
    majorName: '融合教育',
    planCount: 1,
    tuition: 25000
  },
  // 2293 长春大学旅游学院
  {
    schoolId: '2293',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '1A',
    majorName: '旅游管理',
    planCount: 1,
    tuition: 26000
  },
  {
    schoolId: '2293',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '2C',
    majorName: '会计学',
    planCount: 2,
    tuition: 26000
  },
  {
    schoolId: '2293',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '2D',
    majorName: '财务管理',
    planCount: 1,
    tuition: 26000
  },
  // 2317 哈尔滨商业大学
  {
    schoolId: '2317',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '61',
    majorName: '新闻学',
    planCount: 1,
    tuition: 8000
  },
  // 2322 黑龙江工业学院
  {
    schoolId: '2322',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '19',
    majorName: '俄语',
    planCount: 1,
    tuition: 4500
  },
  // 2324 哈尔滨石油学院
  {
    schoolId: '2324',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '31',
    majorName: '国际经济与贸易',
    planCount: 4,
    tuition: 25000
  },
  {
    schoolId: '2324',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '33',
    majorName: '跨境电子商务',
    planCount: 2,
    tuition: 25000
  },
  {
    schoolId: '2324',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '34',
    majorName: '英语',
    planCount: 6,
    tuition: 25000
  },
  // 2326 黑龙江财经学院
  {
    schoolId: '2326',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '10',
    majorName: '英语',
    planCount: 2,
    tuition: 25000
  },
  // 2327 哈尔滨理工大学
  {
    schoolId: '2327',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '34',
    majorName: '英语',
    planCount: 2,
    tuition: 4800
  },
  // 2336 齐齐哈尔工程学院
  {
    schoolId: '2336',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0F',
    majorName: '财务管理',
    planCount: 2,
    tuition: 26800
  },
  {
    schoolId: '2336',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0G',
    majorName: '互联网金融',
    planCount: 3,
    tuition: 26800
  },
  // 2339 黑河学院
  {
    schoolId: '2339',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '26',
    majorName: '俄语(师范类)',
    planCount: 1,
    tuition: 4000
  },
  // 2371 哈尔滨信息工程学院
  {
    schoolId: '2371',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '09',
    majorName: '电子商务',
    planCount: 6,
    tuition: 26000
  },
  {
    schoolId: '2371',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '11',
    majorName: '财务管理',
    planCount: 6,
    tuition: 26000
  },
  {
    schoolId: '2371',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '12',
    majorName: '网络与新媒体',
    planCount: 3,
    tuition: 26000
  },
  // 2385 哈尔滨远东理工学院
  {
    schoolId: '2385',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0A',
    majorName: '财务管理',
    planCount: 3,
    tuition: 25800
  },
  // 2386 黑龙江外国语学院
  {
    schoolId: '2386',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '29',
    majorName: '汉语言文学(师范)',
    planCount: 3,
    tuition: 26000
  },
  {
    schoolId: '2386',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '03',
    majorName: '英语',
    planCount: 4,
    tuition: 26000
  },
  {
    schoolId: '2386',
    majorGroupId: '102',
    subject: '历史类',
    majorCode: '18',
    majorName: '俄语',
    planCount: 4,
    tuition: 26000
  },
  {
    schoolId: '2386',
    majorGroupId: '103',
    subject: '历史类',
    majorCode: '30',
    majorName: '网络与新媒体',
    planCount: 2,
    tuition: 26000
  },
  // 2388 哈尔滨广厦学院
  {
    schoolId: '2388',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '02',
    majorName: '国际经济与贸易',
    planCount: 3,
    tuition: 25800
  },
  {
    schoolId: '2388',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '03',
    majorName: '学前教育(师范)',
    planCount: 2,
    tuition: 28800
  },
  {
    schoolId: '2388',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '04',
    majorName: '汉语言文学',
    planCount: 7,
    tuition: 25800
  },
  {
    schoolId: '2388',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '05',
    majorName: '应用心理学',
    planCount: 2,
    tuition: 25800
  },
  {
    schoolId: '2388',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '11',
    majorName: '会计学',
    planCount: 3,
    tuition: 25800
  },
  {
    schoolId: '2388',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '12',
    majorName: '财务管理',
    planCount: 3,
    tuition: 25800
  },
  {
    schoolId: '2388',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '13',
    majorName: '人力资源管理',
    planCount: 3,
    tuition: 25800
  },
  {
    schoolId: '2388',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '14',
    majorName: '审计学',
    planCount: 5,
    tuition: 25800
  },
  // 2389 黑龙江工程学院昆仑旅游学院
  {
    schoolId: '2389',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '01',
    majorName: '英语',
    planCount: 22,
    tuition: 21500
  },
  {
    schoolId: '2389',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '03',
    majorName: '网络与新媒体',
    planCount: 2,
    tuition: 21500
  },
  {
    schoolId: '2389',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '06',
    majorName: '市场营销',
    planCount: 4,
    tuition: 21500
  },
  {
    schoolId: '2389',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '07',
    majorName: '财务管理',
    planCount: 32,
    tuition: 21500
  },
  {
    schoolId: '2389',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '08',
    majorName: '文化产业管理',
    planCount: 9,
    tuition: 21500
  },
  {
    schoolId: '2389',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '09',
    majorName: '跨境电子商务',
    planCount: 2,
    tuition: 21500
  },
  {
    schoolId: '2389',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0A',
    majorName: '健康服务与管理',
    planCount: 3,
    tuition: 22500
  },
  {
    schoolId: '2389',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0D',
    majorName: '会展经济与管理',
    planCount: 2,
    tuition: 21500
  },
  // 2391 黑龙江东方学院
  {
    schoolId: '2391',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '29',
    majorName: '国际经济与贸易',
    planCount: 5,
    tuition: 24000
  },
  {
    schoolId: '2391',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '38',
    majorName: '汉语国际教育',
    planCount: 5,
    tuition: 24000
  },
  {
    schoolId: '2391',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '39',
    majorName: '新闻学',
    planCount: 4,
    tuition: 24000
  },
  // 2392 哈尔滨剑桥学院
  {
    schoolId: '2392',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '09',
    majorName: '学前教育(师范)',
    planCount: 2,
    tuition: 28000
  },
  {
    schoolId: '2392',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0A',
    majorName: '小学教育(师范)',
    planCount: 7,
    tuition: 32000
  },
  {
    schoolId: '2392',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0B',
    majorName: '英语(师范)',
    planCount: 1,
    tuition: 26000
  },
  {
    schoolId: '2392',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0D',
    majorName: '汉语国际教育(师范)',
    planCount: 9,
    tuition: 26000
  },
  // 2394 哈尔滨华德学院
  {
    schoolId: '2394',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0D',
    majorName: '财务管理(英才班)',
    planCount: 8,
    tuition: 28800
  },
  {
    schoolId: '2394',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0R',
    majorName: '国际经济与贸易',
    planCount: 4,
    tuition: 25800
  },
  {
    schoolId: '2394',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0S',
    majorName: '人力资源管理',
    planCount: 7,
    tuition: 25800
  },
  {
    schoolId: '2394',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0T',
    majorName: '英语',
    planCount: 4,
    tuition: 25800
  },
  // 2445 黑龙江工商学院
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '01',
    majorName: '国际经济与贸易',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '02',
    majorName: '金融学',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '03',
    majorName: '投资学',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '04',
    majorName: '保险学',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '05',
    majorName: '汉语言文学',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '06',
    majorName: '英语',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '07',
    majorName: '俄语',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '08',
    majorName: '日语',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '09',
    majorName: '朝鲜语',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0A',
    majorName: '新闻学',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0B',
    majorName: '广告学',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0C',
    majorName: '网络与新媒体',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0D',
    majorName: '工商管理',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0E',
    majorName: '市场营销',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0F',
    majorName: '会计学',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0G',
    majorName: '财务管理',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0H',
    majorName: '人力资源管理',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0J',
    majorName: '审计学',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0K',
    majorName: '资产评估',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0L',
    majorName: '物业管理',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0M',
    majorName: '文化产业管理',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0N',
    majorName: '劳动与社会保障',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0P',
    majorName: '电子商务',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0Q',
    majorName: '跨境电子商务',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0R',
    majorName: '旅游管理',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0S',
    majorName: '酒店管理',
    planCount: 2,
    tuition: 24000
  },
  {
    schoolId: '2445',
    majorGroupId: '101',
    subject: '历史类',
    majorCode: '0T',
    majorName: '会展经济与管理',
    planCount: 2,
    tuition: 24000
  }
];

// 浏览器环境下直接暴露到全局
if (typeof module !== 'undefined' && module.exports) {
    module.exports = majors;
} else {
    window.majors = majors;
}