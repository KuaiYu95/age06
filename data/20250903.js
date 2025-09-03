/**
 * 只改单引号内的文字，其他不动
 * 需要改哪些就保留哪些，不改的都删掉就好了。
 * 
 * 
 * 示例：
 * 本次只需要修改 Banner 6，只需要保留以下数据：
 * 
 * const data = [
 *  {
 *    img: 'banner_6',
 *    title: '修改后的标题',
 *    href: '修改后的链接',
 *  }
 * ]
 * 
 * 其他数据都删掉即可。
 */

const data = [
  // 头部轮播图，按照顺序 1/2/3/4/5/6
  {
    img: 'banner_1',
    title: '',
    href: 'https://age06.edu.sh.cn/age06web/home/06zhuanti/2025/0807/45686/index.html#/',
  },
  {
    img: 'banner_2',
    title: '',
    href: 'https://age06.edu.sh.cn/age06web/home/06zhuanti/2025/0731/54705/index.html#/',
  },
  {
    img: 'banner_3',
    title: '',
    href: 'https://age06.edu.sh.cn/age06web/home/06zhuanti/2025/kct/02/index.html#/',
  },
  {
    img: 'banner_4',
    title: '',
    href: 'https://age06.edu.sh.cn/age06web/home/06zhuanti/2025/kct/01/index.html#/',
  },
  {
    img: 'banner_5',
    title: '',
    href: 'https://age06.edu.sh.cn/age06web/home/06zhuanti/2024/kct/12/index.html#/',
  },
  {
    img: 'banner_6',
    title: '',
    href: 'https://age06.edu.sh.cn/age06web/home/content/2025/7350534183954944000.html',
  },
  // 主题图 - 左
  {
    img: 'topic_left',
    title: '',
    href: 'https://age06.edu.sh.cn/age06web/home/06zhuanti/2024/kct/05/index.html#/',
  },
  // 主题图 - 右上
  {
    img: 'topic_right_1',
    title: '',
    href: 'https://age06.edu.sh.cn/age06web/home/06zhuanti/2023/kct/11/index.html#/',
  },
  // 主题图 - 右下
  {
    img: 'topic_right_2',
    title: '',
    href: 'https://age06.edu.sh.cn/age06web/home/06zhuanti/2024/kct/10/index.html#/',
  },
  // 课程资源 - 生活板块 1/2/3
  {
    img: 'life_1',
    title: '小班家园共育：拥抱春天，探秘自然',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/26d48ef2-1017-4517-a0ef-a1246dad71ea',
  },
  {
    img: 'life_2',
    title: '中班生活活动：一起去郊游',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/117531b8-d7de-4692-a963-d57d9f33aef1',
  },
  {
    img: 'life_3',
    title: '大班生活活动：花园里有什么',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/ce3839b9-2ab4-42f5-8d7e-78288485dde4',
  },
  // 课程资源 - 运动板块 1/2/3
  {
    img: 'sport_1',
    title: '小班活动案例：捕小鱼',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/93607af2-dea4-479b-a7cf-2209e2881e4e',
  },
  {
    img: 'sport_2',
    title: '中班活动案例：纸棒变变变',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/f4991367-fe79-4b20-8a20-dcd45cab4267',
  },
  {
    img: 'sport_3',
    title: '大班自制运动器械：球的奇妙世界',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/f247c9b4-dfba-4907-9253-c14b458f0512',
  },
  // 课程资源 - 学习板块 1/2/3
  {
    img: 'learn_1',
    title: '小班语言活动：小红鱼找朋友',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/62c7ebdc-22e0-401c-a40a-6c73685c0a00',
  },
  {
    img: 'learn_2',
    title: '中班艺术活动：程十发爷爷和他的牛画',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/5bd9a0f2-f043-46fd-b00f-4b344183b0ba',
  },
  {
    img: 'learn_3',
    title: '大班科学活动：谁吃了半只柿子？',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/18a61958-b05d-4ba2-b057-a4ffaaf37d1c',
  },
  // 课程资源 - 游戏板块 1/2/3
  {
    img: 'game_1',
    title: '小班自制玩教具：巧玩鸡蛋托',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/b91f9ddc-2074-410c-9c8a-78e52c9455bb',
  },
  {
    img: 'game_2',
    title: '中班沙水区建构游戏：造桥记',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/13a39771-a3a8-4918-8db3-24b6603a157f',
  },
  {
    img: 'game_3',
    title: '大班沙水区角色游戏：地道战',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/812d938f-c79d-461e-9932-eb272f6d61f8',
  },
  // 素材资源 1/2/3
  {
    img: 'material_1',
    title: '主题素材包：四季之四季轮换',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/9c04c84a-62a6-4edd-aeb5-e6efffb734a9',
  },
  {
    img: 'material_2',
    title: '主题素材包：四季之四季特征（秋）',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/08dfa288-8194-4bb8-93ad-5d236cb319a2',
  },
  {
    img: 'material_3',
    title: '主题素材包：动物的本领之会唱歌的动物',
    href: 'https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/51adfcc5-95e1-487b-a78b-35a0531d7762',
  },
]