const { replaceInUmiFile, renameStaticFiles } = require('./replace.js');

const replacements = [
  // banner 
  {
    a: 'banner_s_2504.08447550',
    b: 'banner_1',
  },
  {
    a: 'banner_s_2503.075c0206',
    b: 'banner_2',
  },
  {
    a: 'banner_s_2502.6e3229a0',
    b: 'banner_3',
  },
  {
    a: 'banner_s_2501.a785bc7f',
    b: 'banner_4',
  },
  {
    a: 'banner_s_12.f1e3f21a',
    b: 'banner_5',
  },
  {
    a: 'banner_s_4.a4cbd0ce',
    b: 'banner_6',
  },
  // 主题
  {
    a: 'special_topic_preview.7fc64206',
    b: 'topic_left',
  },
  {
    a: 'topic_right1.2f99ff70',
    b: 'topic_right_1',
  },
  {
    a: 'topic_right2.91c89ce1',
    b: 'topic_right_2',
  },
  // 课程资源 - 生活板块
  {
    a: 'img_b_1.79522922',
    b: 'life_1',
  },
  {
    a: 'img_b_2.bee73587',
    b: 'life_2',
  },
  {
    a: 'img_b_3.042eed49',
    b: 'life_3',
  },
  // 课程资源 - 运动板块
  {
    a: 'img_b_4.770bd43f',
    b: 'sport_1',
  },
  {
    a: 'img_b_5.15ebe09b',
    b: 'sport_2',
  },
  {
    a: 'img_b_6.4071fdc0',
    b: 'sport_3',
  },
  // 课程资源 - 学习板块
  {
    a: 'img_b_7.d2285cdd',
    b: 'learn_1',
  },
  {
    a: 'img_b_8.6fa97757',
    b: 'learn_2',
  },
  {
    a: 'img_b_9.b888981f',
    b: 'learn_3',
  },
  // 课程资源 - 游戏板块
  {
    a: 'img_b_10.56b6d6a7',
    b: 'game_1',
  },
  {
    a: 'img_b_11.0c479b29',
    b: 'game_2',
  },
  {
    a: 'img_b_12.0c468555',
    b: 'game_3',
  },
  // 素材资源
  {
    a: 'img_c_1.b1c77d35',
    b: 'material_1',
  },
  {
    a: 'img_c_2.19ed8d55',
    b: 'material_2',
  },
  {
    a: 'img_c_3.a2cafc58',
    b: 'material_3',
  },
];

console.log('\n1️⃣  开始执行替换操作...');
replaceInUmiFile(replacements);

console.log('\n2️⃣  开始执行重命名操作...');
renameStaticFiles(replacements);