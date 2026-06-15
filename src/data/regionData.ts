import type { RegionData } from '@/types';

export const regions: RegionData[] = [
  {
    id: 'us',
    name: '美国',
    flag: '\uD83C\uDDFA\uD83C\uDDF8',
    data: {
      1: {
        month: 1, monthName: '1月', climate: '冬季严寒', temperature: '-10\u2103 ~ 10\u2103', climateIcon: 'snow',
        holidays: [
          { name: '新年 (New Year\'s Day)', date: '1月1日', importance: 'S' },
          { name: '马丁·路德·金纪念日', date: '1月第3个周一', importance: 'A' },
        ],
        activities: [
          { name: 'CES 消费电子展', type: '展会', description: '全球最大消费电子展在拉斯维加斯举行' },
          { name: 'NFL 季后赛', type: '体育', description: '美式足球季后赛进入白热化阶段' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '健身器材', icon: 'dumbbell', reason: '新年健身热潮' },
          { name: '保暖用品', icon: 'thermometer', reason: '严寒天气需求' },
          { name: '情人节预热礼品', icon: 'heart', reason: '情人节前期备货' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      2: {
        month: 2, monthName: '2月', climate: '冬季转春', temperature: '-5\u2103 ~ 12\u2103', climateIcon: 'snow',
        holidays: [
          { name: '情人节 (Valentine\'s Day)', date: '2月14日', importance: 'S' },
          { name: '总统日', date: '2月第3个周一', importance: 'A' },
          { name: '超级碗 (Super Bowl)', date: '2月第1个周日', importance: 'S' },
        ],
        activities: [
          { name: 'NBA全明星周末', type: '体育', description: '篮球盛宴' },
          { name: '纽约时装周', type: '时尚', description: '秋冬系列发布' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '巧克力和糖果', icon: 'candy', reason: '情人节热卖' },
          { name: '派对零食', icon: 'cookie', reason: '超级碗派对需求' },
          { name: '春季服装', icon: 'shirt', reason: '换季采购' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      3: {
        month: 3, monthName: '3月', climate: '初春回暖', temperature: '0\u2103 ~ 18\u2103', climateIcon: 'sun',
        holidays: [
          { name: '圣帕特里克节 (St. Patrick\'s Day)', date: '3月17日', importance: 'A' },
          { name: '复活节 (Easter)', date: '3月/4月', importance: 'S' },
        ],
        activities: [
          { name: 'NCAA疯狂三月', type: '体育', description: '大学篮球锦标赛' },
          { name: 'SXSW音乐节', type: '文化', description: '奥斯汀音乐电影节' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '绿色主题商品', icon: 'palette', reason: '圣帕特里克节' },
          { name: '春季园艺用品', icon: 'flower', reason: '春季种植季' },
          { name: '户外装备', icon: 'tent', reason: '天气转暖' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      4: {
        month: 4, monthName: '4月', climate: '春季宜人', temperature: '5\u2103 ~ 22\u2103', climateIcon: 'sun',
        holidays: [
          { name: '复活节 (Easter)', date: '4月', importance: 'S' },
          { name: '地球日 (Earth Day)', date: '4月22日', importance: 'A' },
          { name: '税务截止日', date: '4月15日', importance: 'A' },
        ],
        activities: [
          { name: 'Coachella音乐节', type: '音乐', description: '加州沙漠音乐节' },
          { name: 'MLB开赛', type: '体育', description: '美国职棒大联盟开幕' },
          { name: '波士顿马拉松', type: '体育', description: '世界马拉松大满贯' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '复活节装饰品', icon: 'egg', reason: '节日装饰需求' },
          { name: '环保产品', icon: 'leaf', reason: '地球日热度' },
          { name: '春季运动服', icon: 'shirt', reason: '户外活动增加' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      5: {
        month: 5, monthName: '5月', climate: '春末夏初', temperature: '10\u2103 ~ 26\u2103', climateIcon: 'sun',
        holidays: [
          { name: '母亲节 (Mother\'s Day)', date: '5月第2个周日', importance: 'S' },
          { name: '阵亡将士纪念日', date: '5月最后周一', importance: 'A' },
          { name: 'Cinco de Mayo', date: '5月5日', importance: 'B' },
        ],
        activities: [
          { name: '印第500大赛', type: '体育', description: '赛车界顶级赛事' },
          { name: 'Met Gala', type: '时尚', description: '时尚界奥斯卡' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '母亲节礼品', icon: 'gift', reason: '表达感恩' },
          { name: '烧烤用品', icon: 'flame', reason: '户外烧烤季开始' },
          { name: '夏季服装', icon: 'shirt', reason: '气温升高' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      6: {
        month: 6, monthName: '6月', climate: '夏季开始', temperature: '15\u2103 ~ 30\u2103', climateIcon: 'sun',
        holidays: [
          { name: '父亲节 (Father\'s Day)', date: '6月第3个周日', importance: 'S' },
          { name: '骄傲月 (Pride Month)', date: '整个6月', importance: 'A' },
          { name: '六月节 (Juneteenth)', date: '6月19日', importance: 'A' },
        ],
        activities: [
          { name: 'NBA总决赛', type: '体育', description: '篮球巅峰对决' },
          { name: '美国公开赛(高尔夫)', type: '体育', description: '高尔夫大满贯' },
          { name: 'Prime Day预热', type: '电商', description: '亚马逊大促预热' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '烧烤用具', icon: 'flame', reason: '夏季烧烤高峰' },
          { name: '户外露营装备', icon: 'tent', reason: '露营旺季' },
          { name: '彩虹主题商品', icon: 'palette', reason: '骄傲月营销' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      7: {
        month: 7, monthName: '7月', climate: '盛夏炎热', temperature: '20\u2103 ~ 35\u2103', climateIcon: 'sun',
        holidays: [
          { name: '独立日 (Independence Day)', date: '7月4日', importance: 'S' },
          { name: 'Prime Day', date: '7月中旬', importance: 'S' },
        ],
        activities: [
          { name: '温布尔登网球赛', type: '体育', description: '网球四大满贯' },
          { name: 'MLB全明星赛', type: '体育', description: '棒球全明星周末' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '爱国主题装饰', icon: 'flag', reason: '独立日庆祝' },
          { name: '空调和风扇', icon: 'wind', reason: '高温天气' },
          { name: '泳池用品', icon: 'droplets', reason: '消暑需求' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      8: {
        month: 8, monthName: '8月', climate: '盛夏持续', temperature: '20\u2103 ~ 35\u2103', climateIcon: 'sun',
        holidays: [
          { name: '返校季 (Back to School)', date: '8月整月', importance: 'S' },
          { name: '劳动节预热', date: '8月末', importance: 'B' },
        ],
        activities: [
          { name: '美网公开赛预热', type: '体育', description: '网球赛季进入高潮' },
          { name: 'Burning Man', type: '文化', description: '内华达沙漠艺术节' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '学习用品', icon: 'book', reason: '返校季大促' },
          { name: '电子产品', icon: 'laptop', reason: '学生数码需求' },
          { name: '秋季服装', icon: 'shirt', reason: '换季提前备货' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      9: {
        month: 9, monthName: '9月', climate: '初秋凉爽', temperature: '12\u2103 ~ 28\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '劳动节 (Labor Day)', date: '9月第1个周一', importance: 'A' },
          { name: '祖父母节', date: '9月第1个周日', importance: 'B' },
          { name: '911纪念日', date: '9月11日', importance: 'A' },
        ],
        activities: [
          { name: 'NFL开赛', type: '体育', description: '美式足球新赛季' },
          { name: '纽约时装周', type: '时尚', description: '春夏系列发布' },
          { name: '苹果秋季发布会', type: '科技', description: 'iPhone新品发布' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },
          { name: '卫衣外套', icon: 'shirt', reason: '气温下降' },
          { name: '万圣节预热商品', icon: 'ghost', reason: '提前备货' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      10: {
        month: 10, monthName: '10月', climate: '秋季凉爽', temperature: '5\u2103 ~ 22\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '万圣节 (Halloween)', date: '10月31日', importance: 'S' },
          { name: '哥伦布日', date: '10月第2个周一', importance: 'B' },
        ],
        activities: [
          { name: 'MLB季后赛/世界大赛', type: '体育', description: '棒球赛季高潮' },
          { name: 'NBA开赛', type: '体育', description: '篮球新赛季' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '万圣节 costumes', icon: 'ghost', reason: '最大糖果和装扮节日' },
          { name: '南瓜装饰品', icon: 'pumpkin', reason: '秋季装饰' },
          { name: '感恩节预热食品', icon: 'utensils', reason: '提前采购' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      11: {
        month: 11, monthName: '11月', climate: '深秋转冬', temperature: '0\u2103 ~ 15\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '感恩节 (Thanksgiving)', date: '11月第4个周四', importance: 'S' },
          { name: '黑色星期五 (Black Friday)', date: '11月第4个周五', importance: 'S' },
          { name: '网络星期一', date: '11月最后周一', importance: 'S' },
          { name: '退伍军人节', date: '11月11日', importance: 'A' },
        ],
        activities: [
          { name: 'Macy\'s感恩节游行', type: '文化', description: '纽约年度盛典' },
          { name: 'NFL感恩节大战', type: '体育', description: '三场比赛连播' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '感恩节食品', icon: 'utensils', reason: '火鸡和节庆食材' },
          { name: '冬季保暖品', icon: 'thermometer', reason: '黑五大促' },
          { name: '圣诞装饰品', icon: 'tree', reason: '节后立即装饰' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      12: {
        month: 12, monthName: '12月', climate: '冬季严寒', temperature: '-10\u2103 ~ 10\u2103', climateIcon: 'snow',
        holidays: [
          { name: '圣诞节 (Christmas)', date: '12月25日', importance: 'S' },
          { name: '新年前夜 (New Year\'s Eve)', date: '12月31日', importance: 'S' },
          { name: '光明节 (Hanukkah)', date: '12月', importance: 'A' },
        ],
        activities: [
          { name: 'NFL常规赛收官', type: '体育', description: '季后赛席位争夺' },
          { name: 'NBA圣诞大战', type: '体育', description: '年度焦点赛事' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '圣诞礼品', icon: 'gift', reason: '全年最大购物季' },
          { name: '派对用品', icon: 'party', reason: '跨年庆祝' },
          { name: '冬季户外装备', icon: 'ski', reason: '滑雪季开始' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
    },
  },
  {
    id: 'europe',
    name: '欧洲',
    flag: '\uD83C\uDDEA\uD83C\uDDFA',
    data: {
      1: {
        month: 1, monthName: '1月', climate: '冬季寒冷', temperature: '-5\u2103 ~ 8\u2103', climateIcon: 'snow',
        holidays: [
          { name: '新年 (New Year)', date: '1月1日', importance: 'S' },
          { name: '主显节 (Epiphany)', date: '1月6日', importance: 'B' },
        ],
        activities: [
          { name: '巴黎时装周(男装)', type: '时尚', description: '男装系列发布' },
          { name: '米兰男装周', type: '时尚', description: '意大利时尚盛典' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '保暖服装', icon: 'shirt', reason: '寒冷天气' },
          { name: '健身器材', icon: 'dumbbell', reason: '新年决心' },
          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥寒冷' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      2: {
        month: 2, monthName: '2月', climate: '冬季持续', temperature: '-3\u2103 ~ 10\u2103', climateIcon: 'snow',
        holidays: [
          { name: '情人节 (Valentine\'s Day)', date: '2月14日', importance: 'S' },
          { name: '忏悔星期二 (Mardi Gras)', date: '2月/3月', importance: 'B' },
        ],
        activities: [
          { name: '威尼斯狂欢节', type: '文化', description: '面具与盛装' },
          { name: '伦敦时装周', type: '时尚', description: '秋冬系列' },
          { name: '欧冠淘汰赛', type: '体育', description: '足球巅峰对决' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '情人节礼品', icon: 'heart', reason: '浪漫节日' },
          { name: '狂欢节面具', icon: 'mask', reason: '威尼斯狂欢节' },
          { name: '滑雪装备', icon: 'ski', reason: '阿尔卑斯滑雪季' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      3: {
        month: 3, monthName: '3月', climate: '早春回暖', temperature: '2\u2103 ~ 15\u2103', climateIcon: 'rain',
        holidays: [
          { name: '圣帕特里克节', date: '3月17日', importance: 'A' },
          { name: '母亲节(英国)', date: '3月第4个周日', importance: 'A' },
        ],
        activities: [
          { name: '巴黎-鲁贝自行车赛', type: '体育', description: '古典赛车盛事' },
          { name: '巴塞尔钟表展', type: '展会', description: '钟表珠宝展' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '绿色主题商品', icon: 'palette', reason: '圣帕特里克节' },
          { name: '春季雨具', icon: 'umbrella', reason: '春雨季节' },
          { name: '园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      4: {
        month: 4, monthName: '4月', climate: '春季温和', temperature: '5\u2103 ~ 18\u2103', climateIcon: 'rain',
        holidays: [
          { name: '复活节 (Easter)', date: '4月', importance: 'S' },
          { name: '愚人节', date: '4月1日', importance: 'B' },
        ],
        activities: [
          { name: '伦敦马拉松', type: '体育', description: '世界级马拉松赛事' },
          { name: '米兰设计周', type: '设计', description: '全球最大设计展' },
          { name: '欧冠1/4决赛', type: '体育', description: '足球盛宴' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '复活节巧克力', icon: 'candy', reason: '节日传统' },
          { name: '春季户外装', icon: 'shirt', reason: '天气转暖' },
          { name: '自行车配件', icon: 'bike', reason: '骑行季开始' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      5: {
        month: 5, monthName: '5月', climate: '春末宜人', temperature: '10\u2103 ~ 22\u2103', climateIcon: 'sun',
        holidays: [
          { name: '五一劳动节', date: '5月1日', importance: 'A' },
          { name: '母亲节(多数国家)', date: '5月第2个周日', importance: 'S' },
          { name: '欧洲歌唱大赛', date: '5月', importance: 'A' },
        ],
        activities: [
          { name: '戛纳电影节', type: '文化', description: '电影界顶级盛会' },
          { name: '法网公开赛', type: '体育', description: '红土大满贯' },
          { name: '欧冠决赛', type: '体育', description: '欧洲足球之巅' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '母亲节礼品', icon: 'gift', reason: '感恩母亲' },
          { name: '户外用品', icon: 'tent', reason: '露营旺季' },
          { name: '夏季服装', icon: 'shirt', reason: '气温升高' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      6: {
        month: 6, monthName: '6月', climate: '初夏温暖', temperature: '15\u2103 ~ 28\u2103', climateIcon: 'sun',
        holidays: [
          { name: '父亲节 (Father\'s Day)', date: '6月第3个周日', importance: 'S' },
          { name: '夏至日 (Midsummer)', date: '6月21日', importance: 'A' },
          { name: '骄傲月 (Pride Month)', date: '整个6月', importance: 'A' },
        ],
        activities: [
          { name: '温布尔登网球赛', type: '体育', description: '草地大满贯赛事' },
          { name: 'Glastonbury音乐节', type: '音乐', description: '英国最大音乐节' },
          { name: '勒芒24小时', type: '体育', description: '耐力赛车巅峰' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '旅行收纳包', icon: 'briefcase', reason: '夏季度假季' },
          { name: '防晒护肤品', icon: 'sunscreen', reason: '日照增强' },
          { name: '运动户外服饰', icon: 'shirt', reason: '户外活动增加' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      7: {
        month: 7, monthName: '7月', climate: '盛夏炎热', temperature: '18\u2103 ~ 32\u2103', climateIcon: 'sun',
        holidays: [
          { name: '法国国庆日 (Bastille Day)', date: '7月14日', importance: 'A' },
          { name: '比利时国庆日', date: '7月21日', importance: 'B' },
        ],
        activities: [
          { name: '环法自行车赛', type: '体育', description: '自行车顶级赛事' },
          { name: '爱丁堡艺术节', type: '文化', description: '全球最大艺术节' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '游泳用品', icon: 'droplets', reason: '消暑需求' },
          { name: '便携式风扇', icon: 'wind', reason: '高温天' },
          { name: '户外烧烤装备', icon: 'flame', reason: '夏季聚会' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      8: {
        month: 8, monthName: '8月', climate: '盛夏持续', temperature: '18\u2103 ~ 32\u2103', climateIcon: 'sun',
        holidays: [
          { name: '夏季银行假日(英)', date: '8月最后周一', importance: 'A' },
          { name: '圣母升天节', date: '8月15日', importance: 'B' },
        ],
        activities: [
          { name: '美网公开赛预热', type: '体育', description: '网球赛季' },
          { name: '诺丁山嘉年华', type: '文化', description: '欧洲最大街头节庆' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '返校用品', icon: 'book', reason: '新学期准备' },
          { name: '秋季服装', icon: 'shirt', reason: '换季备货' },
          { name: '户外装备', icon: 'tent', reason: '夏末露营' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      9: {
        month: 9, monthName: '9月', climate: '初秋凉爽', temperature: '10\u2103 ~ 24\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '慕尼黑啤酒节 (Oktoberfest)', date: '9月末-10月初', importance: 'S' },
        ],
        activities: [
          { name: '欧冠小组赛', type: '体育', description: '足球赛季开启' },
          { name: '威尼斯电影节', type: '文化', description: '电影盛典' },
          { name: '伦敦时装周', type: '时尚', description: '春夏系列' },
          { name: '巴黎时装周', type: '时尚', description: '春夏系列发布' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '啤酒节用品', icon: 'beer', reason: 'Oktoberfest' },
          { name: '秋季外套', icon: 'shirt', reason: '天气转凉' },
          { name: '万圣节预热', icon: 'ghost', reason: '提前备货' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      10: {
        month: 10, monthName: '10月', climate: '深秋凉爽', temperature: '5\u2103 ~ 18\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '慕尼黑啤酒节', date: '10月初', importance: 'S' },
          { name: '万圣节 (Halloween)', date: '10月31日', importance: 'A' },
          { name: '德国国庆日', date: '10月3日', importance: 'B' },
        ],
        activities: [
          { name: 'F1欧洲收官战', type: '体育', description: '赛车赛季' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '啤酒杯和啤酒', icon: 'beer', reason: '啤酒节' },
          { name: '万圣节装扮', icon: 'ghost', reason: '节日装饰' },
          { name: '秋季食品', icon: 'pumpkin', reason: '南瓜和季节性食材' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      11: {
        month: 11, monthName: '11月', climate: '深秋寒冷', temperature: '0\u2103 ~ 12\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '停战日/国殇日', date: '11月11日', importance: 'A' },
          { name: '黑色星期五', date: '11月第4个周五', importance: 'S' },
          { name: '圣安德鲁日', date: '11月30日', importance: 'B' },
        ],
        activities: [
          { name: '圣诞集市开幕', type: '文化', description: '德国等国的传统集市' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '圣诞装饰品', icon: 'tree', reason: '节日准备' },
          { name: '保暖服装', icon: 'thermometer', reason: '气温骤降' },
          { name: '黑色星期五大促', icon: 'gift', reason: '全年最大折扣' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      12: {
        month: 12, monthName: '12月', climate: '冬季严寒', temperature: '-5\u2103 ~ 8\u2103', climateIcon: 'snow',
        holidays: [
          { name: '圣诞节 (Christmas)', date: '12月25日', importance: 'S' },
          { name: '节礼日 (Boxing Day)', date: '12月26日', importance: 'A' },
          { name: '新年前夜', date: '12月31日', importance: 'S' },
          { name: '圣尼古拉节', date: '12月6日', importance: 'B' },
        ],
        activities: [
          { name: '圣诞集市高峰', type: '文化', description: '欧洲传统市集' },
          { name: '欧冠淘汰赛', type: '体育', description: '足球盛宴' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '圣诞礼品', icon: 'gift', reason: '核心送礼季' },
          { name: '节日食品', icon: 'utensils', reason: '圣诞大餐' },
          { name: '冬季保暖品', icon: 'thermometer', reason: '严寒天气' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
    },
  },
  {
    id: 'russia',
    name: '俄罗斯',
    flag: '\uD83C\uDDF7\uD83C\uDDFA',
    data: {
      1: {
        month: 1, monthName: '1月', climate: '极寒冬季', temperature: '-25\u2103 ~ -10\u2103', climateIcon: 'snow',
        holidays: [
          { name: '新年 (New Year)', date: '1月1-8日', importance: 'S' },
          { name: '东正教圣诞节', date: '1月7日', importance: 'S' },
          { name: '旧新年', date: '1月14日', importance: 'B' },
        ],
        activities: [
          { name: '冰雕节', type: '文化', description: '莫斯科等地冰雕展' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '保暖冬装', icon: 'thermometer', reason: '极度寒冷' },
          { name: '新年礼品', icon: 'gift', reason: '新年长假期' },
          { name: '伏特加和酒具', icon: 'wine', reason: '传统庆祝' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      2: {
        month: 2, monthName: '2月', climate: '严寒持续', temperature: '-20\u2103 ~ -8\u2103', climateIcon: 'snow',
        holidays: [
          { name: '祖国保卫者日', date: '2月23日', importance: 'A' },
          { name: '谢肉节( Maslenitsa)', date: '2月/3月', importance: 'A' },
        ],
        activities: [
          { name: '冬奥会回忆', type: '体育', description: '冰雪运动热度' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '军事主题商品', icon: 'shield', reason: '祖国保卫者日' },
          { name: '薄饼制作工具', icon: 'utensils', reason: '谢肉节传统食品' },
          { name: '保暖用品', icon: 'thermometer', reason: '持续严寒' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      3: {
        month: 3, monthName: '3月', climate: '初春回暖', temperature: '-10\u2103 ~ 2\u2103', climateIcon: 'snow',
        holidays: [
          { name: '国际妇女节', date: '3月8日', importance: 'S' },
          { name: '谢肉节', date: '3月初', importance: 'A' },
        ],
        activities: [
          { name: '克里姆林宫仪仗队', type: '文化', description: '春季仪式' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '鲜花和礼品', icon: 'flower', reason: '妇女节' },
          { name: '春季换季服装', icon: 'shirt', reason: '气温渐升' },
          { name: '园艺工具', icon: 'sprout', reason: '春季准备' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      4: {
        month: 4, monthName: '4月', climate: '春季解冻', temperature: '0\u2103 ~ 12\u2103', climateIcon: 'rain',
        holidays: [
          { name: '复活节 (Paskha)', date: '4月', importance: 'S' },
          { name: '宇航员日', date: '4月12日', importance: 'B' },
        ],
        activities: [
          { name: '复活节彩蛋绘制', type: '文化', description: '传统手工艺' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '复活节彩蛋和食品', icon: 'egg', reason: '东正教传统' },
          { name: '雨具', icon: 'umbrella', reason: '融雪雨季' },
          { name: '春季户外装', icon: 'shirt', reason: '天气转暖' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      5: {
        month: 5, monthName: '5月', climate: '春季温和', temperature: '8\u2103 ~ 20\u2103', climateIcon: 'sun',
        holidays: [
          { name: '劳动节', date: '5月1日', importance: 'A' },
          { name: '胜利日 (Victory Day)', date: '5月9日', importance: 'S' },
        ],
        activities: [
          { name: '红场阅兵', type: '仪式', description: '二战胜利纪念' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '圣乔治丝带', icon: 'ribbon', reason: '胜利日纪念' },
          { name: '户外用品', icon: 'tent', reason: '天气转暖' },
          { name: '烧烤装备', icon: 'flame', reason: '户外烧烤季' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      6: {
        month: 6, monthName: '6月', climate: '初夏温暖', temperature: '15\u2103 ~ 25\u2103', climateIcon: 'sun',
        holidays: [
          { name: '俄罗斯日', date: '6月12日', importance: 'A' },
          { name: '白昼节', date: '6月21日', importance: 'B' },
        ],
        activities: [
          { name: '圣彼得堡白昼节', type: '文化', description: '不夜城庆典' },
          { name: '红帆节', type: '文化', description: '毕业生庆典' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '毕业礼品', icon: 'graduation', reason: '毕业季' },
          { name: '户外装备', icon: 'tent', reason: '户外活动' },
          { name: '爱国主题商品', icon: 'flag', reason: '俄罗斯日' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      7: {
        month: 7, monthName: '7月', climate: '夏季温暖', temperature: '18\u2103 ~ 28\u2103', climateIcon: 'sun',
        holidays: [
          { name: '渔民节', date: '7月第2个周日', importance: 'B' },
          { name: '圣徒彼得和保罗日', date: '7月12日', importance: 'B' },
        ],
        activities: [
          { name: 'VK Fest音乐节', type: '音乐', description: '圣彼得堡音乐节' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '钓鱼用品', icon: 'fish', reason: '渔民节' },
          { name: '露营装备', icon: 'tent', reason: '夏季露营' },
          { name: '游泳用品', icon: 'droplets', reason: '消暑需求' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      8: {
        month: 8, monthName: '8月', climate: '夏末温暖', temperature: '15\u2103 ~ 25\u2103', climateIcon: 'sun',
        holidays: [
          { name: '空军节', date: '8月第3个周日', importance: 'B' },
          { name: '马 respberry收获季', date: '8月', importance: 'B' },
        ],
        activities: [
          { name: '莫斯科城市日', type: '文化', description: '城市周年庆典' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '浆果和蘑菇采摘工具', icon: 'sprout', reason: '采摘季' },
          { name: '返校用品', icon: 'book', reason: '新学期准备' },
          { name: '户外烧烤', icon: 'flame', reason: '夏末聚会' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      9: {
        month: 9, monthName: '9月', climate: '初秋凉爽', temperature: '8\u2103 ~ 18\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '知识日', date: '9月1日', importance: 'A' },
          { name: '俄罗斯军械师日', date: '9月19日', importance: 'B' },
        ],
        activities: [
          { name: '莫斯科时装周', type: '时尚', description: '春夏系列' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '学习用品', icon: 'book', reason: '知识日开学' },
          { name: '秋季服装', icon: 'shirt', reason: '气温下降' },
          { name: '秋季食品', icon: 'apple', reason: '收获季' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      10: {
        month: 10, monthName: '10月', climate: '深秋寒冷', temperature: '0\u2103 ~ 10\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '教师节', date: '10月第1个周日', importance: 'A' },
          { name: '祖国统一日', date: '11月4日(邻近)', importance: 'B' },
        ],
        activities: [
          { name: '金秋艺术节', type: '文化', description: '秋季文化活动' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '教师礼品', icon: 'gift', reason: '教师节' },
          { name: '保暖服装', icon: 'thermometer', reason: '气温骤降' },
          { name: '万圣节商品', icon: 'ghost', reason: '西方节日影响' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      11: {
        month: 11, monthName: '11月', climate: '初冬严寒', temperature: '-8\u2103 ~ 2\u2103', climateIcon: 'snow',
        holidays: [
          { name: '祖国统一日', date: '11月4日', importance: 'A' },
          { name: ' Mother\'s Day', date: '11月最后周日', importance: 'B' },
        ],
        activities: [
          { name: '冰雪节准备', type: '文化', description: '冬季活动筹备' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '冬季装备', icon: 'thermometer', reason: '严寒来临' },
          { name: '新年预热商品', icon: 'gift', reason: '提前备货' },
          { name: '保暖家居用品', icon: 'home', reason: '室内保暖' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      12: {
        month: 12, monthName: '12月', climate: '严冬极寒', temperature: '-20\u2103 ~ -5\u2103', climateIcon: 'snow',
        holidays: [
          { name: '新年准备期', date: '12月全月', importance: 'S' },
          { name: '宪法日', date: '12月12日', importance: 'B' },
        ],
        activities: [
          { name: '红场圣诞集市', type: '文化', description: '节日市集' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '新年礼品', icon: 'gift', reason: '新年大采购' },
          { name: '冬季极端保暖品', icon: 'thermometer', reason: '极寒天气' },
          { name: '节日食品和酒水', icon: 'wine', reason: '新年庆祝' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
    },
  },
  {
    id: 'middle-east',
    name: '中东',
    flag: '\uD83C\uDDF8\uD83C\uDDE6',
    data: {
      1: {
        month: 1, monthName: '1月', climate: '冬季温和', temperature: '8\u2103 ~ 22\u2103', climateIcon: 'sun',
        holidays: [
          { name: '先知诞辰 (Mawlid)', date: '伊斯兰历3月', importance: 'A' },
          { name: '新年', date: '1月1日', importance: 'B' },
        ],
        activities: [
          { name: '迪拜购物节', type: '购物', description: 'DSS大型促销' },
          { name: '阿布扎比F1', type: '体育', description: '一级方程式收官战' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '传统服饰', icon: 'shirt', reason: '宗教节日' },
          { name: '香料和食品', icon: 'utensils', reason: '节日烹饪' },
          { name: '家居装饰品', icon: 'home', reason: '节日装饰' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      2: {
        month: 2, monthName: '2月', climate: '冬季温和', temperature: '10\u2103 ~ 24\u2103', climateIcon: 'sun',
        holidays: [
          { name: '阿联酋国庆(装饰延续)', date: '2月', importance: 'B' },
          { name: '先知诞辰', date: '伊斯兰历', importance: 'A' },
        ],
        activities: [
          { name: '迪拜珠宝展', type: '展会', description: '国际珠宝展' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '珠宝饰品', icon: 'gem', reason: '珠宝展热度' },
          { name: '传统甜品', icon: 'candy', reason: '节日食品' },
          { name: '香薰和香水', icon: 'sparkles', reason: '阿拉伯传统' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      3: {
        month: 3, monthName: '3月', climate: '春季温暖', temperature: '15\u2103 ~ 28\u2103', climateIcon: 'sun',
        holidays: [
          { name: '登宵节 (Isra and Mi\'raj)', date: '伊斯兰历7月27日', importance: 'A' },
          { name: '母亲结(部分国家)', date: '3月21日', importance: 'B' },
        ],
        activities: [
          { name: '迪拜世界杯赛马', type: '体育', description: '世界顶级赛马' },
          { name: 'ART迪拜艺术展', type: '文化', description: '当代艺术展' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '赛马观赛服饰', icon: 'shirt', reason: '迪拜世界杯' },
          { name: '艺术品', icon: 'palette', reason: 'ART Dubai' },
          { name: '春季户外用品', icon: 'tent', reason: '天气宜人' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      4: {
        month: 4, monthName: '4月', climate: '春末温暖', temperature: '18\u2103 ~ 32\u2103', climateIcon: 'sun',
        holidays: [
          { name: '斋月 (Ramadan)', date: '伊斯兰历9月', importance: 'S' },
          { name: '开斋节 (Eid al-Fitr)', date: '伊斯兰历10月初', importance: 'S' },
        ],
        activities: [
          { name: '斋月夜市', type: '文化', description: '夜间集市和美食' },
          { name: '伊斯兰艺术双年展', type: '文化', description: '吉达艺术盛会' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '开斋节礼品', icon: 'gift', reason: '最大节日之一' },
          { name: '传统服饰', icon: 'shirt', reason: '节日盛装' },
          { name: '甜品和干果', icon: 'candy', reason: '待客传统' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      5: {
        month: 5, monthName: '5月', climate: '初夏炎热', temperature: '22\u2103 ~ 38\u2103', climateIcon: 'sun',
        holidays: [
          { name: '开斋节 (Eid al-Fitr)', date: '伊斯兰历10月', importance: 'S' },
          { name: '阿拉伯团结日', date: '5月10日', importance: 'B' },
        ],
        activities: [
          { name: 'F1迈阿密站(区域关注)', type: '体育', description: '赛车运动' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '节日礼品盒', icon: 'gift', reason: '开斋节延续' },
          { name: '空调设备', icon: 'wind', reason: '气温升高' },
          { name: '夏季清凉用品', icon: 'droplets', reason: '高温天气' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      6: {
        month: 6, monthName: '6月', climate: '盛夏酷热', temperature: '28\u2103 ~ 45\u2103', climateIcon: 'sun',
        holidays: [
          { name: '朝觐季准备', date: '伊斯兰历12月', importance: 'A' },
          { name: '宰牲节 (Eid al-Adha)', date: '伊斯兰历12月', importance: 'S' },
        ],
        activities: [
          { name: '迪拜夏季惊喜', type: '购物', description: '夏季购物节' },
          { name: '室内避暑活动', type: '休闲', description: '商场和室内娱乐' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '空调和制冷设备', icon: 'wind', reason: '极端高温' },
          { name: '夏季服装', icon: 'shirt', reason: '轻薄透气' },
          { name: '宰牲节食品', icon: 'utensils', reason: '节日准备' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      7: {
        month: 7, monthName: '7月', climate: '盛夏极热', temperature: '30\u2103 ~ 48\u2103', climateIcon: 'sun',
        holidays: [
          { name: '伊斯兰新年', date: '伊斯兰历1月1日', importance: 'A' },
          { name: '阿舒拉日', date: '伊斯兰历1月10日', importance: 'A' },
        ],
        activities: [
          { name: '室内购物季', type: '购物', description: '避暑购物' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '极端防暑用品', icon: 'thermometer', reason: '极端高温' },
          { name: '室内娱乐产品', icon: 'gamepad', reason: '室内避暑' },
          { name: '伊斯兰新年礼品', icon: 'gift', reason: '新年庆祝' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      8: {
        month: 8, monthName: '8月', climate: '盛夏极热', temperature: '30\u2103 ~ 48\u2103', climateIcon: 'sun',
        holidays: [
          { name: '阿联酋国庆日预热', date: '11月(邻近)', importance: 'B' },
          { name: '先知登霄', date: '伊斯兰历', importance: 'B' },
        ],
        activities: [
          { name: '迪拜夏日惊喜节', type: '购物', description: 'DSS购物狂欢' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '防晒用品', icon: 'sunscreen', reason: '强烈日照' },
          { name: '室内健身设备', icon: 'dumbbell', reason: '户外运动受限' },
          { name: '返校用品', icon: 'book', reason: '新学期' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      9: {
        month: 9, monthName: '9月', climate: '夏末炎热', temperature: '25\u2103 ~ 42\u2103', climateIcon: 'sun',
        holidays: [
          { name: '沙特国庆日', date: '9月23日', importance: 'A' },
          { name: '先知诞辰', date: '伊斯兰历3月', importance: 'A' },
        ],
        activities: [
          { name: '国庆庆典', type: '文化', description: '沙特国庆庆祝' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '国庆主题商品', icon: 'flag', reason: '沙特国庆' },
          { name: '传统服饰', icon: 'shirt', reason: '庆典着装' },
          { name: '秋季过渡服装', icon: 'shirt', reason: '气温渐降' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      10: {
        month: 10, monthName: '10月', climate: '秋季转凉', temperature: '18\u2103 ~ 35\u2103', climateIcon: 'sun',
        holidays: [
          { name: '阿联酋国庆日', date: '12月2日(邻近)', importance: 'A' },
          { name: '万圣节前夜(外来)', date: '10月31日', importance: 'B' },
        ],
        activities: [
          { name: '迪拜健身挑战赛', type: '体育', description: '全城健身活动' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '健身器材', icon: 'dumbbell', reason: '健身挑战' },
          { name: '户外用品', icon: 'tent', reason: '天气转凉可外出' },
          { name: '万圣节商品', icon: 'ghost', reason: '外来节日' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      11: {
        month: 11, monthName: '11月', climate: '冬季温和', temperature: '12\u2103 ~ 28\u2103', climateIcon: 'sun',
        holidays: [
          { name: '阿联酋国庆日', date: '12月2日(邻近)', importance: 'A' },
          { name: '双十一(外来影响)', date: '11月11日', importance: 'B' },
        ],
        activities: [
          { name: 'F1阿布扎比站', type: '体育', description: 'F1赛季收官' },
          { name: '迪拜设计周', type: '设计', description: '创意设计展' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '国庆装饰品', icon: 'flag', reason: '阿联酋国庆' },
          { name: 'F1周边商品', icon: 'trophy', reason: 'F1赛事' },
          { name: '秋季服装', icon: 'shirt', reason: '舒适气温' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      12: {
        month: 12, monthName: '12月', climate: '冬季凉爽', temperature: '10\u2103 ~ 25\u2103', climateIcon: 'sun',
        holidays: [
          { name: '阿联酋国庆日', date: '12月2日', importance: 'A' },
          { name: '圣诞节(部分地区)', date: '12月25日', importance: 'B' },
          { name: '新年前夜', date: '12月31日', importance: 'A' },
        ],
        activities: [
          { name: '迪拜新年烟花', type: '文化', description: '世界最大烟花秀' },
          { name: '跨年庆典', type: '文化', description: '奢华跨年派对' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '跨年派对用品', icon: 'party', reason: '新年庆祝' },
          { name: '冬季温和服装', icon: 'shirt', reason: '舒适气温' },
          { name: '礼品和纪念品', icon: 'gift', reason: '旅游旺季' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
    },
  },
  {
    id: 'southeast-asia',
    name: '东南亚',
    flag: '\uD83C\uDDF8\uD83C\uDDEC',
    data: {
      1: {
        month: 1, monthName: '1月', climate: '旱季凉爽', temperature: '20\u2103 ~ 32\u2103', climateIcon: 'sun',
        holidays: [
          { name: '新年 (New Year)', date: '1月1日', importance: 'A' },
          { name: '春节 (Chinese New Year)', date: '1月/2月', importance: 'S' },
          { name: '泰国儿童节', date: '1月第2个周六', importance: 'B' },
        ],
        activities: [
          { name: '清迈鲜花节', type: '文化', description: '泰国传统花卉展' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '春节装饰品', icon: 'lantern', reason: '华人新年' },
          { name: '红色主题商品', icon: 'palette', reason: '春节传统色' },
          { name: '新年礼品', icon: 'gift', reason: '节日馈赠' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      2: {
        month: 2, monthName: '2月', climate: '旱季温暖', temperature: '22\u2103 ~ 34\u2103', climateIcon: 'sun',
        holidays: [
          { name: '春节 (Chinese New Year)', date: '1月/2月', importance: 'S' },
          { name: '万佛节 (Makha Bucha)', date: '2月/3月', importance: 'A' },
          { name: '越南新年(Tet)', date: '2月', importance: 'S' },
        ],
        activities: [
          { name: '春节庆典', type: '文化', description: '舞龙舞狮庆祝' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '红包和年货', icon: 'gift', reason: '华人传统' },
          { name: '传统服饰', icon: 'shirt', reason: '春节盛装' },
          { name: '节庆食品', icon: 'utensils', reason: '团圆饭' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      3: {
        month: 3, monthName: '3月', climate: '旱季炎热', temperature: '24\u2103 ~ 36\u2103', climateIcon: 'sun',
        holidays: [
          { name: '泼水节预热', date: '4月13-15日(邻近)', importance: 'B' },
          { name: '巴厘新年(Nyepi)', date: '3月', importance: 'A' },
        ],
        activities: [
          { name: 'F1新加坡站预热', type: '体育', description: '赛车赛事' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '水枪和防水袋', icon: 'droplets', reason: '泼水节准备' },
          { name: '夏季服装', icon: 'shirt', reason: '高温天气' },
          { name: '防晒用品', icon: 'sunscreen', reason: '强烈日照' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      4: {
        month: 4, monthName: '4月', climate: '最热旱季', temperature: '25\u2103 ~ 38\u2103', climateIcon: 'sun',
        holidays: [
          { name: '泼水节 (Songkran)', date: '4月13-15日', importance: 'S' },
          { name: '开斋节(部分国家)', date: '伊斯兰历', importance: 'A' },
        ],
        activities: [
          { name: '泼水节狂欢', type: '文化', description: '泰国最大节庆' },
          { name: '宋干节庆典', type: '文化', description: '老挝柬埔寨同庆' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '防水手机壳', icon: 'smartphone', reason: '泼水节必备' },
          { name: '水枪玩具', icon: 'droplets', reason: '泼水大战' },
          { name: '夏季清凉用品', icon: 'wind', reason: '极热天气' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      5: {
        month: 5, monthName: '5月', climate: '雨季开始', temperature: '24\u2103 ~ 35\u2103', climateIcon: 'rain',
        holidays: [
          { name: '卫塞节 (Vesak)', date: '5月满月日', importance: 'A' },
          { name: '国王诞辰(泰)', date: '7月28日(邻近)', importance: 'B' },
        ],
        activities: [
          { name: '佛诞庆典', type: '宗教', description: '佛教国家盛大庆祝' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '雨具', icon: 'umbrella', reason: '雨季来临' },
          { name: '防雨装备', icon: 'raincoat', reason: '降雨增多' },
          { name: '佛教用品', icon: 'prayer', reason: '卫塞节' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      6: {
        month: 6, monthName: '6月', climate: '雨季湿热', temperature: '24\u2103 ~ 33\u2103', climateIcon: 'rain',
        holidays: [
          { name: '开斋节 (Eid al-Fitr)', date: '伊斯兰历', importance: 'S' },
          { name: '端午节', date: '农历五月初五', importance: 'A' },
        ],
        activities: [
          { name: '龙舟赛', type: '体育', description: '华人传统节日活动' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '粽子材料', icon: 'utensils', reason: '端午节传统' },
          { name: '除湿用品', icon: 'wind', reason: '潮湿天气' },
          { name: '开斋节食品', icon: 'candy', reason: '穆斯林节日' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      7: {
        month: 7, monthName: '7月', climate: '雨季高峰', temperature: '23\u2103 ~ 32\u2103', climateIcon: 'rain',
        holidays: [
          { name: '阿舒拉节', date: '伊斯兰历', importance: 'A' },
          { name: '守夏节', date: '7月/8月', importance: 'B' },
        ],
        activities: [
          { name: '新加坡美食节', type: '美食', description: '东南亚美食盛会' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '除湿防霉用品', icon: 'wind', reason: '潮湿季节' },
          { name: '室内娱乐产品', icon: 'gamepad', reason: '雨天活动' },
          { name: '轻薄透气服装', icon: 'shirt', reason: '湿热天气' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      8: {
        month: 8, monthName: '8月', climate: '雨季持续', temperature: '23\u2103 ~ 32\u2103', climateIcon: 'rain',
        holidays: [
          { name: '泰国母亲节', date: '8月12日', importance: 'A' },
          { name: '新加坡国庆日', date: '8月9日', importance: 'A' },
          { name: '印尼独立日', date: '8月17日', importance: 'A' },
        ],
        activities: [
          { name: '国庆庆典', type: '文化', description: '各国国庆活动' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '国庆主题商品', icon: 'flag', reason: '国庆庆祝' },
          { name: '母亲节礼品', icon: 'gift', reason: '泰国母亲节' },
          { name: '防雨装备', icon: 'umbrella', reason: '雨季持续' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      9: {
        month: 9, monthName: '9月', climate: '雨季末期', temperature: '23\u2103 ~ 33\u2103', climateIcon: 'rain',
        holidays: [
          { name: '中秋节', date: '农历八月十五', importance: 'S' },
          { name: '九皇斋节', date: '农历九月初一', importance: 'A' },
        ],
        activities: [
          { name: 'F1新加坡站', type: '体育', description: '夜间街道赛' },
          { name: '中秋灯笼节', type: '文化', description: '华人传统庆祝' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '月饼和中秋礼品', icon: 'moon', reason: '中秋节' },
          { name: '灯笼装饰品', icon: 'lantern', reason: '中秋传统' },
          { name: 'F1周边商品', icon: 'trophy', reason: '新加坡大奖赛' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      10: {
        month: 10, monthName: '10月', climate: '雨季转旱', temperature: '22\u2103 ~ 32\u2103', climateIcon: 'sun',
        holidays: [
          { name: '排灯节 (Diwali)', date: '10月/11月', importance: 'S' },
          { name: '水灯节 (Loy Krathong)', date: '泰历12月', importance: 'A' },
          { name: '越南妇女节', date: '10月20日', importance: 'B' },
        ],
        activities: [
          { name: '排灯节灯光秀', type: '文化', description: '印度教光明节' },
          { name: '水灯节庆典', type: '文化', description: '泰国传统节庆' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '排灯节灯饰', icon: 'lightbulb', reason: '光明节装饰' },
          { name: '水灯和莲花灯', icon: 'lantern', reason: '水灯节' },
          { name: '传统服饰', icon: 'shirt', reason: '节日盛装' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      11: {
        month: 11, monthName: '11月', climate: '凉季开始', temperature: '20\u2103 ~ 30\u2103', climateIcon: 'sun',
        holidays: [
          { name: '排灯节 (Diwali)', date: '10月/11月', importance: 'S' },
          { name: '水灯节', date: '11月', importance: 'A' },
          { name: '光棍节/双十一', date: '11月11日', importance: 'A' },
        ],
        activities: [
          { name: '双十一大促', type: '购物', description: '跨境电商促销' },
          { name: '大湄公河次region旅游季', type: '旅游', description: '最佳旅游季节' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '双十一促销商品', icon: 'gift', reason: '购物狂欢' },
          { name: '旅游户外用品', icon: 'tent', reason: '旅游旺季' },
          { name: '凉季服装', icon: 'shirt', reason: '气温下降' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      12: {
        month: 12, monthName: '12月', climate: '凉季舒适', temperature: '18\u2103 ~ 28\u2103', climateIcon: 'sun',
        holidays: [
          { name: '圣诞节 (Christmas)', date: '12月25日', importance: 'S' },
          { name: '新年前夜', date: '12月31日', importance: 'S' },
          { name: '泰国父亲节', date: '12月5日', importance: 'A' },
          { name: '冬至', date: '12月21日', importance: 'B' },
        ],
        activities: [
          { name: '圣诞灯饰展', type: '文化', description: '城市灯光装饰' },
          { name: '跨年派对', type: '文化', description: '海滩和城市庆祝' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '圣诞装饰品', icon: 'tree', reason: '西方节日' },
          { name: '跨年派对用品', icon: 'party', reason: '新年庆祝' },
          { name: '冬季保暖品', icon: 'thermometer', reason: '凉季需求' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
    },
  },
  {
    id: 'australia',
    name: '澳洲',
    flag: '\uD83C\uDDE6\uD83C\uDDFA',
    data: {
      1: {
        month: 1, monthName: '1月', climate: '盛夏酷热', temperature: '20\u2103 ~ 40\u2103', climateIcon: 'sun',
        holidays: [
          { name: '新年 (New Year\'s Day)', date: '1月1日', importance: 'S' },
          { name: '澳洲国庆日 (Australia Day)', date: '1月26日', importance: 'S' },
        ],
        activities: [
          { name: '澳网公开赛 (AO)', type: '体育', description: '墨尔本网球大满贯' },
          { name: '悉尼艺术节', type: '文化', description: '最大艺术盛典' },
          { name: 'Big Day Out音乐节', type: '音乐', description: '全国巡回音乐节' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '防晒用品', icon: 'sunscreen', reason: '极端紫外线' },
          { name: '游泳用品', icon: 'droplets', reason: '海滩旺季' },
          { name: '澳洲国旗商品', icon: 'flag', reason: '国庆日' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      2: {
        month: 2, monthName: '2月', climate: '盛夏持续', temperature: '18\u2103 ~ 38\u2103', climateIcon: 'sun',
        holidays: [
          { name: '情人节 (Valentine\'s Day)', date: '2月14日', importance: 'S' },
          { name: '中国新年', date: '1月/2月', importance: 'A' },
        ],
        activities: [
          { name: '澳网收尾', type: '体育', description: '网球大满贯决赛' },
          { name: '悉尼同志狂欢节', type: '文化', description: 'Mardi Gras盛大游行' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '情人节礼品', icon: 'heart', reason: '浪漫节日' },
          { name: '派对服装', icon: 'shirt', reason: '狂欢节' },
          { name: '空调设备', icon: 'wind', reason: '持续高温' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      3: {
        month: 3, monthName: '3月', climate: '初秋转凉', temperature: '15\u2103 ~ 30\u2103', climateIcon: 'sun',
        holidays: [
          { name: '劳动节 (Labour Day)', date: '3月第2个周一', importance: 'A' },
          { name: '和谐日', date: '3月21日', importance: 'B' },
        ],
        activities: [
          { name: 'F1澳大利亚站', type: '体育', description: '墨尔本赛道' },
          { name: '墨尔本美食美酒节', type: '美食', description: '南半球最大美食节' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: 'F1周边商品', icon: 'trophy', reason: 'F1赛事' },
          { name: '秋季转换服装', icon: 'shirt', reason: '季节交替' },
          { name: '户外烧烤装备', icon: 'flame', reason: '烧烤季延续' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      4: {
        month: 4, monthName: '4月', climate: '秋季凉爽', temperature: '10\u2103 ~ 25\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '复活节 (Easter)', date: '4月', importance: 'S' },
          { name: '澳新军团日 (ANZAC Day)', date: '4月25日', importance: 'S' },
        ],
        activities: [
          { name: '悉尼皇家农展', type: '农业', description: '复活节农展' },
          { name: 'AFL赛季开始', type: '体育', description: '澳式足球联赛' },
          { name: 'NRL赛季开始', type: '体育', description: '橄榄球联赛' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '复活节巧克力蛋', icon: 'egg', reason: '复活节传统' },
          { name: '罂粟花纪念品', icon: 'flower', reason: 'ANZAC日纪念' },
          { name: '秋季运动装备', icon: 'shirt', reason: '足球赛季' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      5: {
        month: 5, monthName: '5月', climate: '深秋转凉', temperature: '5\u2103 ~ 20\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '母亲节 (Mother\'s Day)', date: '5月第2个周日', importance: 'S' },
        ],
        activities: [
          { name: 'Vivid Sydney灯光节', type: '文化', description: '悉尼灯光音乐节' },
          { name: '戛纳电影节关注', type: '文化', description: '电影界盛会' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '母亲节礼品', icon: 'gift', reason: '感恩母亲' },
          { name: '保暖服装', icon: 'thermometer', reason: '气温下降' },
          { name: '冬季家居用品', icon: 'home', reason: '季节准备' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      6: {
        month: 6, monthName: '6月', climate: '初冬寒冷', temperature: '0\u2103 ~ 15\u2103', climateIcon: 'snow',
        holidays: [
          { name: '女王诞辰日', date: '6月第2个周一', importance: 'A' },
          { name: '父亲节 (Father\'s Day)', date: '9月(邻近)', importance: 'B' },
        ],
        activities: [
          { name: 'State of Origin橄榄球', type: '体育', description: '昆士兰vs新南威尔士' },
          { name: '悉尼电影节', type: '文化', description: '国际电影节' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '冬季保暖品', icon: 'thermometer', reason: '进入冬季' },
          { name: '橄榄球周边', icon: 'trophy', reason: 'State of Origin' },
          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥寒冷' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      7: {
        month: 7, monthName: '7月', climate: '冬季寒冷', temperature: '0\u2103 ~ 15\u2103', climateIcon: 'snow',
        holidays: [
          { name: 'NAIDOC周', date: '7月第1周', importance: 'A' },
          { name: '圣诞 in July', date: '7月', importance: 'B' },
        ],
        activities: [
          { name: '滑雪季开始', type: '体育', description: '雪山度假村开放' },
          { name: '悉尼冰雪节', type: '文化', description: '冬季主题活动' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '滑雪装备', icon: 'ski', reason: '滑雪季' },
          { name: '冬季保暖服装', icon: 'thermometer', reason: '寒冷天气' },
          { name: '七月圣诞用品', icon: 'tree', reason: '冬季圣诞活动' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      8: {
        month: 8, monthName: '8月', climate: '冬季尾声', temperature: '2\u2103 ~ 16\u2103', climateIcon: 'snow',
        holidays: [
          { name: '皇家展览日(墨尔本)', date: '8月中旬', importance: 'B' },
          { name: '国家科学周', date: '8月', importance: 'B' },
        ],
        activities: [
          { name: 'AFL赛季高潮', type: '体育', description: '决赛前争夺' },
          { name: '雪山滑雪旺季', type: '体育', description: '冬季运动高峰' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '滑雪器材', icon: 'ski', reason: '滑雪旺季' },
          { name: 'AFL周边商品', icon: 'trophy', reason: '赛季高潮' },
          { name: '春季预热商品', icon: 'flower', reason: '冬末准备' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      9: {
        month: 9, monthName: '9月', climate: '初春回暖', temperature: '5\u2103 ~ 20\u2103', climateIcon: 'sun',
        holidays: [
          { name: '父亲节 (Father\'s Day)', date: '9月第1个周日', importance: 'S' },
          { name: ' AFL Grand Final', date: '9月末', importance: 'S' },
        ],
        activities: [
          { name: 'AFL总决赛', type: '体育', description: '澳式足球巅峰' },
          { name: '墨尔本皇家农展', type: '农业', description: '春季农展' },
          { name: 'NRL总决赛', type: '体育', description: '橄榄球巅峰' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '父亲节礼品', icon: 'gift', reason: '感恩父亲' },
          { name: '春季户外用品', icon: 'tent', reason: '天气转暖' },
          { name: '运动周边', icon: 'trophy', reason: '总决赛热度' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      10: {
        month: 10, monthName: '10月', climate: '春季温暖', temperature: '10\u2103 ~ 25\u2103', climateIcon: 'sun',
        holidays: [
          { name: '劳动节 (Labour Day)', date: '10月第1个周一', importance: 'A' },
          { name: '墨尔本杯预热', date: '11月第1个周二(邻近)', importance: 'B' },
        ],
        activities: [
          { name: '春季赛马嘉年华', type: '体育', description: '墨尔本杯预热赛事' },
          { name: ' Sculpture by the Sea', type: '艺术', description: '海边雕塑展' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '赛马服饰帽饰', icon: 'shirt', reason: '赛马嘉年华' },
          { name: '春季园艺用品', icon: 'flower', reason: '春季种植' },
          { name: '户外运动装备', icon: 'bike', reason: '天气转暖' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      11: {
        month: 11, monthName: '11月', climate: '春末夏初', temperature: '15\u2103 ~ 28\u2103', climateIcon: 'sun',
        holidays: [
          { name: '墨尔本杯 (Melbourne Cup)', date: '11月第1个周二', importance: 'S' },
          { name: '黑色星期五', date: '11月第4个周五', importance: 'S' },
          { name: 'Remembrance Day', date: '11月11日', importance: 'A' },
        ],
        activities: [
          { name: '墨尔本杯赛马', type: '体育', description: '全国停赛观赛' },
          { name: 'Spring Racing Carnival', type: '体育', description: '春季赛马嘉年华' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '赛马会时尚服饰', icon: 'shirt', reason: '墨尔本杯' },
          { name: '黑色星期五促销品', icon: 'gift', reason: '购物节' },
          { name: '夏季预热商品', icon: 'sunscreen', reason: '气温升高' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      12: {
        month: 12, monthName: '12月', climate: '盛夏开始', temperature: '18\u2103 ~ 35\u2103', climateIcon: 'sun',
        holidays: [
          { name: '圣诞节 (Christmas)', date: '12月25日', importance: 'S' },
          { name: '节礼日 (Boxing Day)', date: '12月26日', importance: 'S' },
          { name: '新年前夜', date: '12月31日', importance: 'S' },
          { name: ' Boxing Day Test', date: '12月26日起', importance: 'A' },
        ],
        activities: [
          { name: '悉尼港跨年烟花', type: '文化', description: '全球最早跨年' },
          { name: 'Boxing Day板球赛', type: '体育', description: '传统板球测试赛' },
          { name: '海滩圣诞', type: '文化', description: '澳洲特色夏日圣诞' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '圣诞礼品', icon: 'gift', reason: '主要送礼季' },
          { name: '海滩用品', icon: 'droplets', reason: '夏日圣诞' },
          { name: '烧烤装备', icon: 'flame', reason: '户外圣诞烧烤' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
    },
  },
  {
    id: 'japan',
    name: '日本',
    flag: '\uD83C\uDDEF\uD83C\uDDF5',
    data: {
      1: {
        month: 1, monthName: '1月', climate: '冬季寒冷', temperature: '0\u2103 ~ 10\u2103', climateIcon: 'snow',
        holidays: [
          { name: '正月/新年 (Oshogatsu)', date: '1月1-3日', importance: 'S' },
          { name: '成人之日', date: '1月第2个周一', importance: 'A' },
        ],
        activities: [
          { name: '初诣', type: '文化', description: '新年首次神社参拜' },
          { name: '箱根驿传', type: '体育', description: '大学马拉松接力' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '年节料理材料', icon: 'utensils', reason: '正月传统' },
          { name: '福袋', icon: 'gift', reason: '新年促销' },
          { name: '保暖用品', icon: 'thermometer', reason: '严寒天气' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      2: {
        month: 2, monthName: '2月', climate: '冬季寒冷', temperature: '0\u2103 ~ 10\u2103', climateIcon: 'snow',
        holidays: [
          { name: '节分 (Setsubun)', date: '2月3日', importance: 'A' },
          { name: '情人节 (Valentine\'s Day)', date: '2月14日', importance: 'S' },
          { name: '天皇诞辰日', date: '2月23日', importance: 'A' },
        ],
        activities: [
          { name: '札幌雪祭', type: '文化', description: '北海道冰雪节' },
          { name: '横滨中华街春节', type: '文化', description: '中国新年庆祝' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '情人节巧克力', icon: 'heart', reason: '日本特色义理巧克力' },
          { name: '节分豆子和鬼面具', icon: 'mask', reason: '传统驱鬼仪式' },
          { name: '冬季保暖品', icon: 'thermometer', reason: '持续寒冷' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      3: {
        month: 3, monthName: '3月', climate: '早春转暖', temperature: '5\u2103 ~ 15\u2103', climateIcon: 'rain',
        holidays: [
          { name: '女儿节/雏祭 (Hinamatsuri)', date: '3月3日', importance: 'A' },
          { name: '春分之日', date: '3月20日左右', importance: 'A' },
          { name: '白色情人节', date: '3月14日', importance: 'S' },
        ],
        activities: [
          { name: '樱花季预告', type: '自然', description: '樱花前线北上' },
          { name: '东京马拉松', type: '体育', description: '世界马拉松大满贯' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '白色情人节回礼', icon: 'heart', reason: '回赠巧克力' },
          { name: '雏人形和桃花装饰', icon: 'doll', reason: '女儿节' },
          { name: '春季雨具', icon: 'umbrella', reason: '春雨季节' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      4: {
        month: 4, monthName: '4月', climate: '春季宜人', temperature: '10\u2103 ~ 20\u2103', climateIcon: 'sun',
        holidays: [
          { name: '昭和之日', date: '4月29日', importance: 'B' },
          { name: '黄金周预热', date: '4月末', importance: 'A' },
        ],
        activities: [
          { name: '赏樱 (Hanami)', type: '文化', description: '全国樱花盛开' },
          { name: '入学式', type: '教育', description: '新学年开学' },
          { name: '新人就职季', type: '社会', description: '新社会人入职' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '赏樱用品', icon: 'flower', reason: '花见聚会' },
          { name: '入学/就职礼品', icon: 'gift', reason: '新生活开始' },
          { name: '春季服装', icon: 'shirt', reason: '换季' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      5: {
        month: 5, monthName: '5月', climate: '春季温暖', temperature: '15\u2103 ~ 25\u2103', climateIcon: 'sun',
        holidays: [
          { name: '黄金周 (Golden Week)', date: '4月末-5月初', importance: 'S' },
          { name: '宪法纪念日', date: '5月3日', importance: 'A' },
          { name: '儿童节/男孩节', date: '5月5日', importance: 'A' },
          { name: '母亲节', date: '5月第2个周日', importance: 'S' },
        ],
        activities: [
          { name: '黄金周旅行', type: '旅游', description: '年度最大出行潮' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '旅行用品', icon: 'briefcase', reason: '黄金周旅行' },
          { name: '鲤鱼旗装饰', icon: 'flag', reason: '男孩节传统' },
          { name: '母亲节礼品', icon: 'gift', reason: '感恩母亲' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      6: {
        month: 6, monthName: '6月', climate: '梅雨季节', temperature: '18\u2103 ~ 28\u2103', climateIcon: 'rain',
        holidays: [
          { name: '父亲节', date: '6月第3个周日', importance: 'S' },
          { name: '紫阳花观赏季', date: '6月全月', importance: 'B' },
        ],
        activities: [
          { name: '梅雨入り', type: '气候', description: '全国进入梅雨季' },
          { name: 'F1加拿大大奖赛关注', type: '体育', description: '赛车赛事' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '除湿用品', icon: 'wind', reason: '梅雨潮湿' },
          { name: '雨具', icon: 'umbrella', reason: '持续降雨' },
          { name: '室内娱乐产品', icon: 'gamepad', reason: '雨天消遣' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      7: {
        month: 7, monthName: '7月', climate: '夏季炎热', temperature: '25\u2103 ~ 35\u2103', climateIcon: 'sun',
        holidays: [
          { name: '七夕 (Tanabata)', date: '7月7日', importance: 'A' },
          { name: '海之日', date: '7月第3个周一', importance: 'A' },
          { name: '盂兰盆节预热', date: '8月(邻近)', importance: 'B' },
        ],
        activities: [
          { name: '花火大会', type: '文化', description: '各地烟火大会' },
          { name: '天神祭', type: '文化', description: '大阪传统祭典' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '浴衣和甚平', icon: 'shirt', reason: '夏日祭典' },
          { name: '扇子和团扇', icon: 'wind', reason: '纳凉' },
          { name: '夏季清凉用品', icon: 'droplets', reason: '炎热天气' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      8: {
        month: 8, monthName: '8月', climate: '盛夏酷暑', temperature: '25\u2103 ~ 37\u2103', climateIcon: 'sun',
        holidays: [
          { name: '盂兰盆节 (Obon)', date: '8月13-16日', importance: 'S' },
          { name: '山之日', date: '8月11日', importance: 'B' },
        ],
        activities: [
          { name: '回乡祭祖', type: '文化', description: '返乡高峰期' },
          { name: '隅田川花火大会', type: '文化', description: '东京最大花火' },
          { name: 'Comiket(夏)', type: '动漫', description: '同人志即卖会' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '御盆礼品', icon: 'gift', reason: '祭祖传统' },
          { name: '夏祭用品', icon: 'lantern', reason: '花火大会' },
          { name: '防暑降温用品', icon: 'thermometer', reason: '酷暑' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      9: {
        month: 9, monthName: '9月', climate: '初秋转凉', temperature: '20\u2103 ~ 28\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '敬老之日', date: '9月第3个周一', importance: 'A' },
          { name: '秋分之日', date: '9月23日左右', importance: 'A' },
          { name: 'Silver Week', date: '9月', importance: 'A' },
        ],
        activities: [
          { name: '赏月 (Tsukimi)', type: '文化', description: '中秋赏月' },
          { name: 'Rugby世界杯关注', type: '体育', description: '橄榄球赛事' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '敬老礼品', icon: 'gift', reason: '敬老日' },
          { name: '赏月团子', icon: 'moon', reason: '中秋传统' },
          { name: '秋季服装', icon: 'shirt', reason: '气温下降' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      10: {
        month: 10, monthName: '10月', climate: '秋季凉爽', temperature: '12\u2103 ~ 22\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '体育之日', date: '10月第2个周一', importance: 'A' },
          { name: '万圣节 (Halloween)', date: '10月31日', importance: 'S' },
        ],
        activities: [
          { name: '枫叶季 (Koyo)', type: '自然', description: '全国红叶观赏' },
          { name: '东京国际电影节', type: '文化', description: '电影盛会' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '万圣节装扮', icon: 'ghost', reason: '涩谷万圣节' },
          { name: '枫叶观赏用品', icon: 'leaf', reason: '赏枫季' },
          { name: '秋季限定食品', icon: 'utensils', reason: '食欲之秋' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      11: {
        month: 11, monthName: '11月', climate: '深秋转寒', temperature: '5\u2103 ~ 15\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '七五三 (Shichi-Go-San)', date: '11月15日', importance: 'A' },
          { name: '劳动节(勤劳感谢日)', date: '11月23日', importance: 'A' },
          { name: '黑色星期五', date: '11月第4个周五', importance: 'S' },
        ],
        activities: [
          { name: '七五三参拜', type: '文化', description: '儿童成长祈福' },
          { name: 'F1日本站', type: '体育', description: '铃鹿赛道' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '七五三和服', icon: 'shirt', reason: '传统儿童节日' },
          { name: '黑色星期五大促', icon: 'gift', reason: '年末促销' },
          { name: '保暖服装', icon: 'thermometer', reason: '气温骤降' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      12: {
        month: 12, monthName: '12月', climate: '冬季寒冷', temperature: '0\u2103 ~ 12\u2103', climateIcon: 'snow',
        holidays: [
          { name: '圣诞节 (Christmas)', date: '12月25日', importance: 'S' },
          { name: '大晦日/除夕', date: '12月31日', importance: 'S' },
          { name: '天皇诞生日', date: '2月23日(邻近)', importance: 'B' },
        ],
        activities: [
          { name: '忘年会季', type: '社会', description: '年末聚餐潮' },
          { name: '福袋预售', type: '购物', description: '新年福袋预订' },
          { name: '年末大掃除', type: '传统', description: '年终大扫除' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '圣诞蛋糕和炸鸡', icon: 'cake', reason: '日本特色圣诞' },
          { name: '年末礼品', icon: 'gift', reason: '送礼旺季' },
          { name: '新年装饰', icon: 'pine', reason: '正月准备' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
    },
  },
  {
    id: 'korea',
    name: '韩国',
    flag: '\uD83C\uDDF0\uD83C\uDDF7',
    data: {
      1: {
        month: 1, monthName: '1月', climate: '严寒冬季', temperature: '-15\u2103 ~ 2\u2103', climateIcon: 'snow',
        holidays: [
          { name: '新年 (New Year)', date: '1月1日', importance: 'A' },
          { name: '春节 (Seollal)', date: '1月/2月', importance: 'S' },
        ],
        activities: [
          { name: '春节返乡潮', type: '社会', description: '年度最大人口流动' },
          { name: '冰钓节', type: '文化', description: '平昌等地冰钓' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '新年礼品套装', icon: 'gift', reason: '春节送礼' },
          { name: '保暖用品', icon: 'thermometer', reason: '严寒天气' },
          { name: '传统食品', icon: 'utensils', reason: '春节料理' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      2: {
        month: 2, monthName: '2月', climate: '严寒持续', temperature: '-10\u2103 ~ 5\u2103', climateIcon: 'snow',
        holidays: [
          { name: '春节 (Seollal)', date: '1月/2月', importance: 'S' },
          { name: '元宵节 (Daeboreum)', date: '正月十五', importance: 'B' },
          { name: '情人节', date: '2月14日', importance: 'S' },
        ],
        activities: [
          { name: '平昌冰雪节', type: '文化', description: '冬季运动庆典' },
          { name: '南山塔情人节', type: '文化', description: '情侣打卡' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '情人节巧克力', icon: 'heart', reason: '浪漫节日' },
          { name: '保暖化妆品', icon: 'sparkles', reason: '干燥寒冷' },
          { name: '坚果和干果', icon: 'nut', reason: '元宵节传统' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      3: {
        month: 3, monthName: '3月', climate: '初春回暖', temperature: '0\u2103 ~ 12\u2103', climateIcon: 'rain',
        holidays: [
          { name: '三一节 (独立运动纪念日)', date: '3月1日', importance: 'A' },
          { name: '白色情人节', date: '3月14日', importance: 'S' },
        ],
        activities: [
          { name: '樱花季开始', type: '自然', description: '济州岛最早开花' },
          { name: '首尔时装周', type: '时尚', description: '秋冬系列发布' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '白色情人节回礼', icon: 'heart', reason: '回赠糖果' },
          { name: '春季化妆品', icon: 'sparkles', reason: '换季护肤' },
          { name: '赏樱用品', icon: 'flower', reason: '樱花季' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      4: {
        month: 4, monthName: '4月', climate: '春季宜人', temperature: '5\u2103 ~ 18\u2103', climateIcon: 'sun',
        holidays: [
          { name: '国会议员选举(如年份)', date: '4月', importance: 'B' },
          { name: '佛诞节', date: '农历四月初八', importance: 'A' },
        ],
        activities: [
          { name: '镇海军港节', type: '文化', description: '最大樱花庆典' },
          { name: '济州油菜花季', type: '自然', description: '黄色花海' },
          { name: '春香祭', type: '文化', description: '传统民俗庆典' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '樱花主题商品', icon: 'flower', reason: '樱花季' },
          { name: '春季户外装', icon: 'shirt', reason: '赏花郊游' },
          { name: '佛教用品', icon: 'prayer', reason: '佛诞节' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      5: {
        month: 5, monthName: '5月', climate: '春末温暖', temperature: '10\u2103 ~ 23\u2103', climateIcon: 'sun',
        holidays: [
          { name: '儿童节', date: '5月5日', importance: 'A' },
          { name: '父母节', date: '5月8日', importance: 'S' },
          { name: '佛诞节(浴佛节)', date: '5月', importance: 'A' },
          { name: '教师节', date: '5月15日', importance: 'A' },
        ],
        activities: [
          { name: '燃灯游行', type: '文化', description: '佛诞节传统活动' },
          { name: '玫瑰节', type: '文化', description: '各地玫瑰展' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '康乃馨', icon: 'flower', reason: '父母节' },
          { name: '儿童节礼物', icon: 'gift', reason: '六一准备' },
          { name: '燃灯和佛教用品', icon: 'lantern', reason: '佛诞节' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      6: {
        month: 6, monthName: '6月', climate: '梅雨季节', temperature: '18\u2103 ~ 28\u2103', climateIcon: 'rain',
        holidays: [
          { name: '显忠日', date: '6月6日', importance: 'A' },
          { name: '端午节', date: '农历五月初五', importance: 'A' },
        ],
        activities: [
          { name: '雨季开始', type: '气候', description: '韩国梅雨季节' },
          { name: '江陵端午祭', type: '文化', description: 'UNESCO文化遗产' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '除湿用品', icon: 'wind', reason: '梅雨潮湿' },
          { name: '雨具', icon: 'umbrella', reason: '持续降雨' },
          { name: '端午传统食品', icon: 'utensils', reason: '端午节' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      7: {
        month: 7, monthName: '7月', climate: '夏季炎热', temperature: '22\u2103 ~ 32\u2103', climateIcon: 'sun',
        holidays: [
          { name: '制宪节', date: '7月17日', importance: 'B' },
          { name: '暑假开始', date: '7月', importance: 'A' },
        ],
        activities: [
          { name: '保宁泥浆节', type: '文化', description: '全球泥浆庆典' },
          { name: '水上乐园旺季', type: '休闲', description: '避暑度假' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '游泳用品', icon: 'droplets', reason: '避暑需求' },
          { name: '防晒用品', icon: 'sunscreen', reason: '强烈日照' },
          { name: '夏季时尚', icon: 'shirt', reason: '炎热天气' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      8: {
        month: 8, monthName: '8月', climate: '盛夏酷暑', temperature: '23\u2103 ~ 35\u2103', climateIcon: 'sun',
        holidays: [
          { name: '光复节', date: '8月15日', importance: 'A' },
          { name: '父母节(邻近)', date: '5月', importance: 'B' },
        ],
        activities: [
          { name: '仲夏避暑', type: '休闲', description: '海边山区避暑' },
          { name: 'KCON(如举办)', type: '音乐', description: '韩流文化盛典' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '空调和风扇', icon: 'wind', reason: '极端高温' },
          { name: '夏季食品', icon: 'icecream', reason: '消暑需求' },
          { name: '爱国主题商品', icon: 'flag', reason: '光复节' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      9: {
        month: 9, monthName: '9月', climate: '初秋凉爽', temperature: '15\u2103 ~ 26\u2103', climateIcon: 'sun',
        holidays: [
          { name: '中秋节 (Chuseok)', date: '农历八月十五', importance: 'S' },
          { name: '教师节', date: '5月15日(已)', importance: 'B' },
        ],
        activities: [
          { name: '中秋返乡潮', type: '社会', description: '年度最大迁徙之一' },
          { name: '秋收庆典', type: '文化', description: '传统秋收仪式' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '中秋礼品套装', icon: 'gift', reason: '最大送礼节' },
          { name: '松饼/新米', icon: 'utensils', reason: '中秋传统食品' },
          { name: '秋装', icon: 'shirt', reason: '换季需求' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      10: {
        month: 10, monthName: '10月', climate: '秋季宜人', temperature: '8\u2103 ~ 20\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '开天节', date: '10月3日', importance: 'A' },
          { name: '韩文日', date: '10月9日', importance: 'A' },
        ],
        activities: [
          { name: '枫叶季', type: '自然', description: '内藏山等地赏枫' },
          { name: '首尔烟花节', type: '文化', description: '汉江烟花大会' },
          { name: '釜山国际电影节', type: '文化', description: '亚洲电影盛会' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '赏枫户外装', icon: 'shirt', reason: '枫叶季' },
          { name: '秋季食品', icon: 'utensils', reason: '食欲之秋' },
          { name: '电影节周边', icon: 'film', reason: '釜山电影节' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      11: {
        month: 11, monthName: '11月', climate: '深秋转寒', temperature: '0\u2103 ~ 12\u2103', climateIcon: 'leaf',
        holidays: [
          { name: ' pepero Day', date: '11月11日', importance: 'S' },
          { name: '教师节', date: '不一致', importance: 'B' },
        ],
        activities: [
          { name: '光棍节/Pepero日', type: '文化', description: '巧克力棒日' },
          { name: '初雪季', type: '自然', description: '首尔等地初雪' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: 'Pepero巧克力棒', icon: 'candy', reason: '11.11节日' },
          { name: '冬季保暖品', icon: 'thermometer', reason: '气温骤降' },
          { name: '黑色星期五大促', icon: 'gift', reason: '购物节' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      12: {
        month: 12, monthName: '12月', climate: '严冬严寒', temperature: '-10\u2103 ~ 5\u2103', climateIcon: 'snow',
        holidays: [
          { name: '圣诞节 (Christmas)', date: '12月25日', importance: 'S' },
          { name: '新年前夜', date: '12月31日', importance: 'S' },
        ],
        activities: [
          { name: '年末大促', type: '购物', description: '全年最大折扣季' },
          { name: '日出观赏', type: '文化', description: '正东津日出' },
          { name: '滑雪季', type: '体育', description: '芝山等滑雪场开放' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '圣诞礼品', icon: 'gift', reason: '年末送礼' },
          { name: '年末大促商品', icon: 'gift', reason: '打折季' },
          { name: '滑雪装备', icon: 'ski', reason: '滑雪季' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
    },
  },
  {
    id: 'latin-america',
    name: '拉丁美洲',
    flag: '\uD83C\uDDF7\uD83C\uDDFA',
    data: {
      1: {
        month: 1, monthName: '1月', climate: '夏季炎热', temperature: '22\u2103 ~ 38\u2103', climateIcon: 'sun',
        holidays: [
          { name: '新年 (Año Nuevo)', date: '1月1日', importance: 'S' },
          { name: '三王节 (Día de Reyes)', date: '1月6日', importance: 'A' },
        ],
        activities: [
          { name: '里约热内卢狂欢节预热', type: '文化', description: '桑巴彩排开始' },
          { name: '布宜诺斯艾利斯夏季艺术节', type: '文化', description: '户外艺术表演' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '狂欢节服装', icon: 'shirt', reason: '节前准备' },
          { name: '防晒用品', icon: 'sunscreen', reason: '强烈日照' },
          { name: '新年派对用品', icon: 'party', reason: '新年庆祝' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      2: {
        month: 2, monthName: '2月', climate: '盛夏酷热', temperature: '24\u2103 ~ 40\u2103', climateIcon: 'sun',
        holidays: [
          { name: '狂欢节 (Carnaval)', date: '2月/3月', importance: 'S' },
          { name: '情人节 (Día de San Valentín)', date: '2月14日', importance: 'S' },
        ],
        activities: [
          { name: '里约狂欢节', type: '文化', description: '世界最大狂欢节' },
          { name: '奥尔uro狂欢节(玻利维亚)', type: '文化', description: 'UNESCO遗产' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '狂欢节面具和服饰', icon: 'mask', reason: '核心节庆' },
          { name: '桑巴舞鞋', icon: 'music', reason: '舞蹈表演' },
          { name: '情人节礼品', icon: 'heart', reason: '浪漫节日' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      3: {
        month: 3, monthName: '3月', climate: '夏末初秋', temperature: '18\u2103 ~ 32\u2103', climateIcon: 'sun',
        holidays: [
          { name: '圣周 (Semana Santa)', date: '3月/4月', importance: 'S' },
          { name: '父亲节(部分国家)', date: '3月19日', importance: 'B' },
        ],
        activities: [
          { name: '圣周游行', type: '宗教', description: '天主教传统庆典' },
          { name: 'F1巴西站预热', type: '体育', description: '赛车赛事关注' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '宗教用品', icon: 'prayer', reason: '圣周' },
          { name: '传统食品', icon: 'utensils', reason: '复活节烹饪' },
          { name: '秋季过渡服装', icon: 'shirt', reason: '季节交替' },

          { name: '冬季热饮器具', icon: 'utensils', reason: '热饮需求增加' },

          { name: '室内加湿器', icon: 'wind', reason: '冬季干燥' },

          { name: '电热毯暖手宝', icon: 'thermometer', reason: '取暖需求' },

          { name: '冬季护肤品', icon: 'sparkles', reason: '干燥护肤' },

          { name: '节日装饰品', icon: 'tree', reason: '节日氛围' },

          { name: '冬季运动装备', icon: 'ski', reason: '冰雪运动' },

          { name: '年终清洁用品', icon: 'home', reason: '年末大扫除' },
        ],
      },
      4: {
        month: 4, monthName: '4月', climate: '秋季温和', temperature: '12\u2103 ~ 26\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '复活节 (Pascua)', date: '4月', importance: 'S' },
          { name: '愚人节 (Día de los Inocentes)', date: '12月28日(邻近)', importance: 'B' },
        ],
        activities: [
          { name: '复活节庆典', type: '宗教', description: '天主教国家盛大庆祝' },
          { name: 'Feria de Abril(西班牙影响)', type: '文化', description: '塞维利亚风格节庆' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '复活节彩蛋', icon: 'egg', reason: '复活节传统' },
          { name: '秋季户外装', icon: 'shirt', reason: '天气转凉' },
          { name: '传统饮品', icon: 'wine', reason: '节日庆祝' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      5: {
        month: 5, monthName: '5月', climate: '秋季凉爽', temperature: '8\u2103 ~ 22\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '劳动节 (Día del Trabajo)', date: '5月1日', importance: 'A' },
          { name: '母亲节 (Día de la Madre)', date: '5月10日(部分)', importance: 'S' },
          { name: 'Cinco de Mayo(墨西哥)', date: '5月5日', importance: 'A' },
        ],
        activities: [
          { name: '五月五日节庆典', type: '文化', description: '墨西哥传统' },
          { name: '秋季收获节', type: '农业', description: '葡萄酒收获季' },

          { name: '春季新品发布会', type: '电商', description: '春夏新品集中上市' },

          { name: '户外嘉年华', type: '文化', description: '春季户外活动庆典' },

          { name: '春季美食节', type: '美食', description: '季节性美食推广' },
        ],
        procurement: [
          { name: '母亲节礼品', icon: 'gift', reason: '感恩母亲' },
          { name: '五月五日节用品', icon: 'flag', reason: '墨西哥节日' },
          { name: '葡萄酒', icon: 'wine', reason: '收获季' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      6: {
        month: 6, monthName: '6月', climate: '初冬寒冷', temperature: '5\u2103 ~ 18\u2103', climateIcon: 'leaf',
        holidays: [
          { name: '父亲节 (Día del Padre)', date: '6月第3个周日', importance: 'S' },
          { name: 'Corpus Christi', date: '6月', importance: 'B' },
          { name: 'Inti Raymi(秘鲁)', date: '6月24日', importance: 'A' },
        ],
        activities: [
          { name: 'Inti Raymi太阳祭', type: '文化', description: '印加帝国庆典' },
          { name: 'FIFA世界杯(如年)', type: '体育', description: '足球狂热' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '父亲节礼品', icon: 'gift', reason: '感恩父亲' },
          { name: '印加传统服饰', icon: 'shirt', reason: 'Inti Raymi' },
          { name: '足球周边', icon: 'trophy', reason: '世界杯' },

          { name: '春季换季服装', icon: 'shirt', reason: '气温回升' },

          { name: '户外运动装备', icon: 'bike', reason: '户外活动增加' },

          { name: '防晒霜和墨镜', icon: 'sunscreen', reason: '日照增强' },

          { name: '野餐用品', icon: 'utensils', reason: '春游野餐' },

          { name: '春季大扫除用品', icon: 'home', reason: '春季清洁' },

          { name: '花卉和园艺工具', icon: 'flower', reason: '春季种植' },

          { name: '旅行箱和背包', icon: 'briefcase', reason: '春季出游' },
        ],
      },
      7: {
        month: 7, monthName: '7月', climate: '冬季寒冷', temperature: '2\u2103 ~ 15\u2103', climateIcon: 'snow',
        holidays: [
          { name: '独立日(多国)', date: '7月', importance: 'A' },
          { name: 'FIFA世界杯(如年)', date: '7月', importance: 'S' },
        ],
        activities: [
          { name: '智利国庆(冬季)', type: '文化', description: 'Fiestas Patrias' },
          { name: '滑雪季(智利阿根廷)', type: '体育', description: '安第斯滑雪' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '爱国主题商品', icon: 'flag', reason: '独立日' },
          { name: '冬季保暖品', icon: 'thermometer', reason: '南半球冬季' },
          { name: '滑雪装备', icon: 'ski', reason: '安第斯滑雪' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      8: {
        month: 8, monthName: '8月', climate: '冬季持续', temperature: '3\u2103 ~ 16\u2103', climateIcon: 'snow',
        holidays: [
          { name: '独立日(多国延续)', date: '8月', importance: 'A' },
        ],
        activities: [
          { name: '安第斯滑雪旺季', type: '体育', description: '南美滑雪胜地' },
          { name: '布宜诺斯艾利斯书展', type: '文化', description: '西语世界最大书展' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '滑雪器材', icon: 'ski', reason: '滑雪旺季' },
          { name: '书籍和文化用品', icon: 'book', reason: '书展' },
          { name: '冬季服装', icon: 'thermometer', reason: '寒冷天气' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      9: {
        month: 9, monthName: '9月', climate: '初春回暖', temperature: '8\u2103 ~ 22\u2103', climateIcon: 'sun',
        holidays: [
          { name: '独立日(多国)', date: '9月', importance: 'S' },
          { name: '智利国庆(Fiestas Patrias)', date: '9月18-19日', importance: 'S' },
        ],
        activities: [
          { name: 'Fiestas Patrias庆典', type: '文化', description: '智利最大节庆' },
          { name: '春节(初期)', type: '文化', description: '春天气息' },

          { name: '夏季大促', type: '电商', description: '年中最大折扣季' },

          { name: '音乐节季', type: '音乐', description: '户外音乐节集中期' },

          { name: '水上运动赛事', type: '体育', description: '冲浪帆船等水上项目' },
        ],
        procurement: [
          { name: '智利传统服饰', icon: 'shirt', reason: 'Fiestas Patrias' },
          { name: '传统食品', icon: 'utensils', reason: 'Empanada等' },
          { name: '春季户外用品', icon: 'tent', reason: '天气转暖' },

          { name: '便携风扇空调', icon: 'wind', reason: '高温防暑' },

          { name: '泳装和沙滩装备', icon: 'droplets', reason: '水上活动' },

          { name: '防蚊驱虫用品', icon: 'bug', reason: '蚊虫增多' },

          { name: '便携式冷藏箱', icon: 'thermometer', reason: '户外保鲜' },

          { name: '夏季运动鞋', icon: 'dumbbell', reason: '户外运动' },

          { name: '遮阳帽太阳镜', icon: 'sunscreen', reason: '防晒需求' },

          { name: '露营帐篷睡袋', icon: 'tent', reason: '露营旺季' },
        ],
      },
      10: {
        month: 10, monthName: '10月', climate: '春季温暖', temperature: '12\u2103 ~ 26\u2103', climateIcon: 'sun',
        holidays: [
          { name: '亡灵节预热(Día de Muertos)', date: '11月1-2日(邻近)', importance: 'A' },
          { name: '哥伦布日', date: '10月12日', importance: 'B' },
        ],
        activities: [
          { name: '亡灵节准备', type: '文化', description: '墨西哥传统' },
          { name: '春季节庆', type: '文化', description: '南美春季活动' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '亡灵节装饰品', icon: 'skull', reason: '骷髅和万寿菊' },
          { name: '春季服装', icon: 'shirt', reason: '气温升高' },
          { name: '户外活动用品', icon: 'tent', reason: '春季出游' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      11: {
        month: 11, monthName: '11月', climate: '春末夏初', temperature: '18\u2103 ~ 32\u2103', climateIcon: 'sun',
        holidays: [
          { name: '亡灵节 (Día de Muertos)', date: '11月1-2日', importance: 'S' },
          { name: '黑色星期五', date: '11月第4个周五', importance: 'S' },
          { name: '独立日(部分国家)', date: '11月', importance: 'A' },
        ],
        activities: [
          { name: '亡灵节庆典', type: '文化', description: '墨西哥最重要的节日' },
          { name: 'F1巴西站', type: '体育', description: '圣保罗大奖赛' },

          { name: '秋季新品发布', type: '电商', description: '秋冬新款集中上架' },

          { name: '美食收获季', type: '美食', description: '秋季食材推广活动' },

          { name: '黑五预热促销', type: '电商', description: '感恩节前促销活动' },
        ],
        procurement: [
          { name: '亡灵节祭坛用品', icon: 'skull', reason: '祭奠传统' },
          { name: '黑色星期五大促', icon: 'gift', reason: '购物节' },
          { name: 'F1周边商品', icon: 'trophy', reason: '巴西大奖赛' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
      12: {
        month: 12, monthName: '12月', climate: '盛夏开始', temperature: '22\u2103 ~ 38\u2103', climateIcon: 'sun',
        holidays: [
          { name: '圣诞节 (Navidad)', date: '12月25日', importance: 'S' },
          { name: '新年前夜 (Año Nuevo)', date: '12月31日', importance: 'S' },
          { name: 'Las Posadas(墨西哥)', date: '12月16-24日', importance: 'A' },
        ],
        activities: [
          { name: 'Las Posadas游行', type: '宗教', description: '圣诞前宗教庆典' },
          { name: '年终狂欢', type: '文化', description: '拉丁音乐舞蹈派对' },

          { name: '冬季促销季', type: '电商', description: '年末清仓和冬季大促' },

          { name: '室内娱乐展', type: '展会', description: '冬季室内活动展览' },

          { name: '温泉旅游季', type: '旅游', description: '冬季温泉度假高峰' },
        ],
        procurement: [
          { name: '圣诞装饰品', icon: 'tree', reason: '天主教传统' },
          { name: ' piñata和传统食品', icon: 'candy', reason: 'Las Posadas' },
          { name: '跨年派对用品', icon: 'party', reason: '新年庆祝' },

          { name: '秋季保湿护肤品', icon: 'sparkles', reason: '换季护肤' },

          { name: '秋季限定食品', icon: 'utensils', reason: '秋季食材' },

          { name: '保暖外套围巾', icon: 'shirt', reason: '气温下降' },

          { name: '万圣节装饰品', icon: 'ghost', reason: '节日准备' },

          { name: '感恩节食材', icon: 'utensils', reason: '感恩节采购' },

          { name: '秋季家居装饰', icon: 'home', reason: '换季装饰' },

          { name: '冬季预热用品', icon: 'thermometer', reason: '提前备货' },
        ],
      },
    },
  },
];

export const getRegionData = (regionId: string, month: number) => {
  const region = regions.find(r => r.id === regionId);
  if (!region) return null;
  return region.data[month] || null;
};
