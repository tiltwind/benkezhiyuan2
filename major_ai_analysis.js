// 专业AI分析数据
const majorAiAnalysis = [
  {
    majorName: '学前教育(师范)',
    recommendationScore: 75,
    aiReplacementRisk: '低',
    aiRecommendationReason: '学前教育需要大量的情感交流、创造性教学和个性化关怀，这些都是AI难以完全替代的人类特质。师范类专业有稳定的就业前景。',
    risks: '薪资水平相对较低，工作压力较大，需要持续的耐心和爱心投入。'
  },
  {
    majorName: '网络与新媒体',
    recommendationScore: 82,
    aiReplacementRisk: '中',
    aiRecommendationReason: '数字化时代的热门专业，就业前景广阔，涵盖内容创作、数据分析、用户运营等多个方向。',
    risks: '行业变化快，需要持续学习新技术。部分基础工作可能被AI工具替代，需要向更高层次的策略和创意工作发展。'
  },
  {
    majorName: '土木类',
    recommendationScore: 78,
    aiReplacementRisk: '低',
    aiRecommendationReason: '基础设施建设需求稳定，专业技能要求高，现场施工管理和工程设计需要丰富的实践经验。',
    risks: '工作环境相对艰苦，项目周期长，受经济周期影响较大。'
  },
  {
    majorName: '土木工程',
    recommendationScore: 80,
    aiReplacementRisk: '低',
    aiRecommendationReason: '国家基础设施建设持续投入，专业需求稳定。工程设计和施工管理需要综合判断能力。',
    risks: '工作强度大，经常需要出差，职业发展初期薪资增长较慢。'
  },
  {
    majorName: '给排水科学与工程',
    recommendationScore: 76,
    aiReplacementRisk: '低',
    aiRecommendationReason: '城市化进程中的重要专业，环保要求提升带来更多机会，技术含量高。',
    risks: '专业面相对较窄，就业选择有限，需要考取相关执业资格证书。'
  },
  {
    majorName: '新闻传播学类',
    recommendationScore: 65,
    aiReplacementRisk: '高',
    aiRecommendationReason: '媒体行业仍需要专业的内容策划和深度报道能力，但需要适应数字化转型。',
    risks: 'AI写作工具发展迅速，传统媒体衰落，行业竞争激烈，需要转向新媒体和内容创作。'
  },
  {
    majorName: '民族学',
    recommendationScore: 60,
    aiReplacementRisk: '低',
    aiRecommendationReason: '文化研究和民族政策制定的重要专业，具有独特的学术价值和社会意义。',
    risks: '就业面较窄，主要集中在学术机构、政府部门和文化单位，薪资水平一般。'
  },
  {
    majorName: '日语',
    recommendationScore: 70,
    aiReplacementRisk: '中',
    aiRecommendationReason: '中日经贸往来密切，翻译、外贸、旅游等领域需求稳定，文化交流价值高。',
    risks: '机器翻译技术快速发展，基础翻译工作可能被替代，需要向专业领域和高端服务发展。'
  },
  {
    majorName: '旅游管理',
    recommendationScore: 68,
    aiReplacementRisk: '中',
    aiRecommendationReason: '服务业的重要组成部分，人际交往和个性化服务是核心竞争力。',
    risks: '受疫情等突发事件影响大，行业波动性强，部分标准化服务可能被数字化替代。'
  },
  {
    majorName: '社会工作',
    recommendationScore: 72,
    aiReplacementRisk: '低',
    aiReplacementReason: '社会问题日益复杂，需要专业的人文关怀和社会干预，政府政策支持力度加大。',
    risks: '薪资水平相对较低，工作情感负担重，职业发展路径相对单一。'
  },
  {
    majorName: '汉语言文学',
    recommendationScore: 66,
    aiReplacementRisk: '中',
    aiRecommendationReason: '文化传承的重要专业，教育、出版、文化创意等领域有稳定需求。',
    risks: 'AI写作能力提升，传统文字工作面临挑战，需要向创意写作和文化策划转型。'
  },
  {
    majorName: '审计学',
    recommendationScore: 85,
    aiReplacementRisk: '中',
    aiRecommendationReason: '财务监督需求持续增长，专业技能要求高，职业发展前景好。',
    risks: '部分基础审计工作可能被自动化，需要向风险管理和战略咨询发展。'
  },
  {
    majorName: '传播学',
    recommendationScore: 70,
    aiReplacementRisk: '中',
    aiRecommendationReason: '数字传播时代的核心专业，品牌营销和公关策划需求旺盛。',
    risks: '传播渠道变化快，需要持续学习新平台和新技术，创意要求高。'
  },
  {
    majorName: '国际经济与贸易',
    recommendationScore: 78,
    aiReplacementRisk: '中',
    aiRecommendationReason: '全球化背景下的热门专业，跨境电商和国际业务发展迅速。',
    risks: '贸易摩擦和政策变化影响大，部分标准化业务可能被数字化，需要向高端服务发展。'
  },
  {
    majorName: '财务管理',
    recommendationScore: 83,
    aiReplacementRisk: '中',
    aiRecommendationReason: '企业核心职能，数字化转型带来新机遇，专业技能要求高。',
    risks: '基础财务工作自动化程度提高，需要向战略财务和数据分析转型。'
  },
  {
    majorName: '汉语国际教育',
    recommendationScore: 74,
    aiReplacementRisk: '低',
    aiRecommendationReason: '中文国际化趋势明显，海外中文教育需求增长，文化交流价值高。',
    risks: '就业地域限制较大，需要较强的跨文化交流能力，职业发展依赖政策支持。'
  },
  {
    majorName: '人力资源管理',
    recommendationScore: 76,
    aiReplacementRisk: '中',
    aiRecommendationReason: '企业发展的重要支撑，人才管理和组织发展需求持续增长。',
    risks: '部分基础HR工作可能被系统化，需要向战略人力资源和组织发展转型。'
  },
  {
    majorName: '小学教育(师范)',
    recommendationScore: 77,
    aiReplacementRisk: '低',
    aiRecommendationReason: '基础教育的重要环节，需要专业的教学技能和育人能力，就业稳定。',
    risks: '工作压力大，薪资增长有限，需要持续的专业发展和学习。'
  },
  {
    majorName: '金融学类',
    recommendationScore: 84,
    aiReplacementRisk: '中',
    aiRecommendationReason: '金融行业发展迅速，数字金融带来新机遇，薪资水平较高。',
    risks: '行业监管严格，部分传统金融业务可能被金融科技替代，需要持续学习新技术。'
  },
  {
    majorName: '英语',
    recommendationScore: 72,
    aiReplacementRisk: '中',
    aiRecommendationReason: '国际交流的重要工具，教育、外贸、翻译等领域需求稳定。',
    risks: '机器翻译技术发展迅速，基础英语服务面临挑战，需要向专业领域和高端服务发展。'
  },
  {
    majorName: '工商管理类',
    recommendationScore: 80,
    aiReplacementRisk: '低',
    aiRecommendationReason: '企业管理的核心专业，适应性强，就业面广，管理技能需求持续增长。',
    risks: '专业门槛相对较低，竞争激烈，需要在特定领域建立专业优势。'
  },
  {
    majorName: '劳动与社会保障',
    recommendationScore: 71,
    aiReplacementRisk: '低',
    aiRecommendationReason: '社会保障体系完善需要专业人才，政府部门和企业都有需求。',
    risks: '专业面相对较窄，主要集中在政府部门和大型企业，职业发展路径有限。'
  },
  {
    majorName: '电子商务',
    recommendationScore: 86,
    aiReplacementRisk: '中',
    aiRecommendationReason: '数字经济的核心专业，电商行业快速发展，就业前景广阔。',
    risks: '技术更新快，竞争激烈，部分运营工作可能被自动化，需要向策略和创新方向发展。'
  },
  {
    majorName: '商务英语',
    recommendationScore: 74,
    aiReplacementRisk: '中',
    aiRecommendationReason: '国际商务交流的专业技能，外贸和跨国企业需求稳定。',
    risks: '机器翻译影响基础业务，需要向商务策划和跨文化管理发展。'
  },
  {
    majorName: '新闻学',
    recommendationScore: 67,
    aiReplacementRisk: '高',
    aiRecommendationReason: '信息传播的专业领域，深度报道和调查新闻仍需要专业技能。',
    risks: 'AI写作技术发展迅速，传统媒体衰落，需要适应新媒体和数字化转型。'
  },
  {
    majorName: '文化产业管理',
    recommendationScore: 73,
    aiReplacementRisk: '低',
    aiRecommendationReason: '文化创意产业发展迅速，政策支持力度大，具有良好发展前景。',
    risks: '行业发展不均衡，需要较强的创意和市场敏感度，收入波动性较大。'
  },
  {
    majorName: '学前教育',
    recommendationScore: 75,
    aiReplacementRisk: '低',
    aiRecommendationReason: '幼儿教育需求增长，专业性强，情感交流和个性化教育是核心。',
    risks: '工作强度大，薪资水平有限，需要持续的耐心和专业发展。'
  },
  {
    majorName: '广告学',
    recommendationScore: 75,
    aiReplacementRisk: '中',
    aiRecommendationReason: '创意产业的重要组成部分，数字营销发展带来新机遇。',
    risks: '创意要求高，工作压力大，部分执行工作可能被自动化，需要向策略创意发展。'
  },
  {
    majorName: '西班牙语',
    recommendationScore: 69,
    aiReplacementRisk: '中',
    aiRecommendationReason: '拉美市场发展潜力大，小语种专业具有独特优势。',
    risks: '就业面相对较窄，机器翻译技术发展对基础翻译工作有影响。'
  },
  {
    majorName: '葡萄牙语',
    recommendationScore: 68,
    aiReplacementRisk: '中',
    aiRecommendationReason: '巴西等葡语国家经贸往来增加，小语种人才稀缺。',
    risks: '就业机会有限，主要集中在特定行业和地区，需要较强的专业能力。'
  },
  {
    majorName: '小学教育',
    recommendationScore: 77,
    aiReplacementRisk: '低',
    aiRecommendationReason: '基础教育的重要环节，教学和育人工作需要专业技能和人文关怀。',
    risks: '工作压力较大，薪资增长有限，需要持续的专业发展。'
  },
  {
    majorName: '针灸推拿学',
    recommendationScore: 79,
    aiReplacementRisk: '极低',
    aiRecommendationReason: '传统医学的重要分支，手法治疗需要丰富经验，健康产业发展迅速。',
    risks: '学习周期长，需要大量实践经验，执业资格要求严格。'
  },
  {
    majorName: '健康服务与管理',
    recommendationScore: 81,
    aiReplacementRisk: '低',
    aiRecommendationReason: '健康产业快速发展，老龄化社会带来巨大需求，专业前景广阔。',
    risks: '新兴专业，行业标准尚未完全建立，需要跨学科知识整合能力。'
  },
  {
    majorName: '药事管理',
    recommendationScore: 78,
    aiReplacementRisk: '低',
    aiRecommendationReason: '医药行业监管需求增长，专业技能要求高，就业稳定。',
    risks: '专业面相对较窄，主要集中在医药企业和监管部门，需要持续学习新法规。'
  },
  {
    majorName: '护理学',
    recommendationScore: 82,
    aiReplacementRisk: '极低',
    aiReplacementReason: '医疗服务的重要组成部分，人文关怀和专业护理技能不可替代。',
    risks: '工作强度大，情感负担重，职业发展路径相对单一。'
  },
  {
    majorName: '中医养生学',
    recommendationScore: 76,
    aiReplacementRisk: '极低',
    aiRecommendationReason: '传统医学与现代养生结合，健康意识提升带来发展机遇。',
    risks: '新兴专业，市场认知度有待提高，需要较强的实践能力。'
  },
  {
    majorName: '市场营销',
    recommendationScore: 79,
    aiReplacementRisk: '中',
    aiRecommendationReason: '商业活动的核心环节，数字营销发展带来新机遇，就业面广。',
    risks: '竞争激烈，部分数据分析工作可能被自动化，需要向策略和创意方向发展。'
  },
  {
    majorName: '酒店管理(酒店数字化运营管理)',
    recommendationScore: 70,
    aiReplacementRisk: '中',
    aiRecommendationReason: '服务业数字化转型的重要方向，结合了传统服务和现代技术。',
    risks: '受疫情等因素影响大，行业波动性强，需要适应数字化变革。'
  },
  {
    majorName: '行政管理',
    recommendationScore: 74,
    aiReplacementRisk: '低',
    aiRecommendationReason: '政府和企业管理的重要专业，组织协调能力需求稳定。',
    risks: '专业门槛相对较低，竞争激烈，需要在特定领域建立专业优势。'
  },
  {
    majorName: '酒店管理',
    recommendationScore: 68,
    aiReplacementRisk: '中',
    aiRecommendationReason: '服务业的重要组成部分，个性化服务和管理技能是核心竞争力。',
    risks: '受外部环境影响大，行业波动性强，部分标准化服务可能被数字化。'
  },
  {
    majorName: '金融学',
    recommendationScore: 84,
    aiReplacementRisk: '中',
    aiRecommendationReason: '金融行业核心专业，数字金融发展带来新机遇，薪资水平较高。',
    risks: '监管严格，部分传统业务可能被金融科技替代，需要持续学习新技术。'
  },
  {
    majorName: '物流管理',
    recommendationScore: 80,
    aiReplacementRisk: '中',
    aiRecommendationReason: '电商发展推动物流行业快速增长，供应链管理需求旺盛。',
    risks: '自动化程度提高，部分操作工作可能被替代，需要向智能物流和供应链策略发展。'
  },
  {
    majorName: '朝鲜语',
    recommendationScore: 67,
    aiReplacementRisk: '中',
    aiRecommendationReason: '中韩经贸往来密切，小语种专业具有独特优势。',
    risks: '就业面相对较窄，受国际关系影响，机器翻译技术发展对基础工作有影响。'
  },
  {
    majorName: '俄语',
    recommendationScore: 69,
    aiReplacementRisk: '中',
    aiRecommendationReason: '中俄合作深化，能源、贸易等领域需求稳定。',
    risks: '就业机会相对有限，受国际政治影响，需要向专业领域发展。'
  },
  {
    majorName: '养老服务管理',
    recommendationScore: 83,
    aiReplacementRisk: '低',
    aiRecommendationReason: '老龄化社会的重要专业，政策支持力度大，发展前景广阔。',
    risks: '新兴专业，行业标准尚在建立，需要跨学科知识整合。'
  },
  {
    majorName: '应用中文',
    recommendationScore: 65,
    aiReplacementRisk: '中',
    aiRecommendationReason: '文字应用的专业技能，教育、媒体、文化等领域有需求。',
    risks: 'AI写作技术发展对传统文字工作有冲击，需要向创意和策划方向转型。'
  },
  {
    majorName: '财政学',
    recommendationScore: 77,
    aiReplacementRisk: '低',
    aiRecommendationReason: '财政政策制定和执行的专业领域，政府部门需求稳定。',
    risks: '就业主要集中在政府部门，竞争激烈，需要较强的政策分析能力。'
  },
  {
    majorName: '跨境电子商务',
    recommendationScore: 87,
    aiReplacementRisk: '中',
    aiRecommendationReason: '全球化和数字化结合的热门专业，发展前景广阔，政策支持力度大。',
    risks: '技术更新快，国际贸易政策变化影响大，需要持续学习新平台和新规则。'
  },
  {
    majorName: '信用风险管理与法律防控',
    recommendationScore: 82,
    aiReplacementRisk: '低',
    aiRecommendationReason: '金融风险管理的专业领域，监管要求提升带来更多机会。',
    risks: '专业性要求极高，需要法律和金融双重知识背景，学习难度大。'
  },
  {
    majorName: '互联网金融',
    recommendationScore: 81,
    aiReplacementRisk: '中',
    aiRecommendationReason: '金融科技发展的重要方向，创新性强，发展潜力大。',
    risks: '监管政策变化快，技术要求高，行业竞争激烈。'
  },
  {
    majorName: '会计学',
    recommendationScore: 79,
    aiReplacementRisk: '中',
    aiRecommendationReason: '企业财务管理的基础专业，需求稳定，专业技能要求高。',
    risks: '基础会计工作自动化程度提高，需要向管理会计和财务分析转型。'
  },
  {
    majorName: '资产评估',
    recommendationScore: 76,
    aiReplacementRisk: '低',
    aiRecommendationReason: '资产管理和投资决策的重要环节，专业技能要求高。',
    risks: '专业面相对较窄，需要考取执业资格，市场竞争激烈。'
  },
  {
    majorName: '时尚传播',
    recommendationScore: 72,
    aiReplacementRisk: '中',
    aiRecommendationReason: '时尚产业发展迅速，创意和传播需求增长。',
    risks: '行业变化快，创意要求高，就业竞争激烈，收入波动性大。'
  },
  {
    majorName: '工商管理',
    recommendationScore: 80,
    aiReplacementRisk: '低',
    aiRecommendationReason: '企业管理的核心专业，适应性强，就业面广。',
    risks: '专业门槛相对较低，竞争激烈，需要在特定领域建立优势。'
  },
  {
    majorName: '物业管理',
    recommendationScore: 71,
    aiReplacementRisk: '中',
    aiRecommendationReason: '城市化进程中的重要服务行业，智能化发展带来新机遇。',
    risks: '传统物业服务利润微薄，需要向智能化和增值服务转型。'
  },
  {
    majorName: '思想政治教育',
    recommendationScore: 70,
    aiReplacementRisk: '低',
    aiRecommendationReason: '思想教育和价值引导的重要专业，政府和教育部门需求稳定。',
    risks: '就业主要集中在教育和政府部门，竞争激烈，需要较强的理论功底。'
  },
  {
    majorName: '税收学',
    recommendationScore: 78,
    aiReplacementRisk: '中',
    aiRecommendationReason: '税务管理和筹划的专业领域，企业和政府都有需求。',
    risks: '税务政策变化频繁，需要持续学习，部分基础工作可能被自动化。'
  },
  {
    majorName: '融合教育',
    recommendationScore: 74,
    aiReplacementRisk: '低',
    aiRecommendationReason: '特殊教育的重要发展方向，社会关注度提升，专业性强。',
    risks: '新兴专业，就业面相对较窄，需要较强的专业技能和爱心。'
  },
  {
    majorName: '俄语(师范类)',
    recommendationScore: 68,
    aiReplacementRisk: '低',
    aiRecommendationReason: '外语教育的重要组成部分，师范类专业就业相对稳定。',
    risks: '小语种教学需求有限，就业机会相对较少，需要较强的教学能力。'
  },
  {
    majorName: '汉语言文学(师范)',
    recommendationScore: 73,
    aiReplacementRisk: '低',
    aiRecommendationReason: '语文教育的核心专业，文化传承价值高，就业稳定。',
    risks: '教师岗位竞争激烈，薪资增长有限，需要持续的专业发展。'
  },
  {
    majorName: '应用心理学',
    recommendationScore: 78,
    aiReplacementRisk: '低',
    aiRecommendationReason: '心理健康需求增长，教育、医疗、企业等领域应用广泛。',
    risks: '专业门槛高，需要考取执业资格，就业初期收入可能较低。'
  },
  {
    majorName: '英语(师范)',
    recommendationScore: 74,
    aiReplacementRisk: '中',
    aiRecommendationReason: '英语教育需求稳定，师范类专业就业相对稳定。',
    risks: '教师岗位竞争激烈，机器翻译技术发展对语言教学有一定影响。'
  },
  {
    majorName: '汉语国际教育(师范)',
    recommendationScore: 75,
    aiReplacementRisk: '低',
    aiRecommendationReason: '中文国际化趋势明显，师范类专业具有教学优势。',
    risks: '就业地域限制较大，需要较强的跨文化交流能力。'
  },
  {
    majorName: '财务管理(英才班)',
    recommendationScore: 85,
    aiReplacementRisk: '中',
    aiRecommendationReason: '精英培养模式，专业技能要求高，就业前景好。',
    risks: '学习压力大，竞争激烈，需要持续的专业发展和学习。'
  },
  {
    majorName: '投资学',
    recommendationScore: 83,
    aiReplacementRisk: '中',
    aiRecommendationReason: '金融投资的专业领域，资本市场发展带来机遇。',
    risks: '市场风险高，需要较强的分析能力和风险意识，收入波动性大。'
  },
  {
    majorName: '保险学',
    recommendationScore: 77,
    aiReplacementRisk: '中',
    aiRecommendationReason: '风险管理的重要工具，保险行业发展稳定。',
    risks: '传统保险业务面临挑战，需要向风险管理和金融服务转型。'
  },
  {
    majorName: '会展经济与管理',
    recommendationScore: 73,
    aiReplacementRisk: '中',
    aiRecommendationReason: '会展经济发展迅速，商务活动和文化交流需求增长。',
    risks: '受疫情等因素影响大，行业波动性强，需要较强的组织协调能力。'
  }
];

// 浏览器环境下直接暴露到全局
if (typeof module !== 'undefined' && module.exports) {
    module.exports = majorAiAnalysis;
} else {
    window.majorAiAnalysis = majorAiAnalysis;
}