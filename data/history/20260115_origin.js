const data = [
  {
    img: "banner_1",
    title: "",
    href: "https://age06.edu.sh.cn/age06web/home/06zhuanti/2025/0807/45686/index.html#/"
  },
  {
    img: "banner_2",
    title: "",
    href: "https://age06.edu.sh.cn/age06web/home/06zhuanti/2025/1021/14666/index.html"
  },
  {
    img: "banner_3",
    title: "",
    href: "https://age06.edu.sh.cn/age06web/home/06zhuanti/2025/1223/00631/index.html"
  },
  {
    img: "banner_4",
    title: "",
    href: "https://age06.edu.sh.cn/age06web/home/06zhuanti/2025/0908/57441/index.html"
  },
  {
    img: "banner_5",
    title: "",
    href: "https://age06.edu.sh.cn/age06web/home/06zhuanti/2025/1211/12887/index.html"
  },
  {
    img: "banner_6",
    title: "",
    href: "https://age06.edu.sh.cn/age06web/home/content/2026/7414554043772571648.html"
  },
  {
    img: "topic_left",
    title: "",
    href: "https://age06.edu.sh.cn/age06web/home/06zhuanti/2025/0926/48600/index.html"
  },
  {
    img: "topic_right_1",
    title: "",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/ef88f434-78cc-42d3-b10a-3df26dcf2a45"
  },
  {
    img: "topic_right_2",
    title: "",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/7519dd99-6d6d-4454-9e5e-9d02041c0188"
  },
  {
    img: "news_1",
    title: "关于部分版权到期资源下线的公告",
    href: "https://age06.edu.sh.cn/age06web/home/content/2026/7413408773382868992.html?setOfId=5013828"
  },
  {
    img: "news_2",
    title: "教师生成式人工智能应用指引",
    href: "https://age06.edu.sh.cn/age06web/home/content/2025/7401442085846388736.html?setOfId=5013828"
  },
  {
    img: "news_3",
    title: "如何用课程通促师幼共长",
    href: "https://mp.weixin.qq.com/s/d2QvQg0JX8-wojnt99CPFQ"
  },
  {
    img: "life_1",
    title: "小班生活：我会自己穿衣服",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/1b9d7eb3-cea2-4fb1-8236-3eb7f4308220"
  },
  {
    img: "life_2",
    title: "中班生活活动：孝敬长辈",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/3832f6b1-e1b0-40e0-8081-12973f07549f"
  },
  {
    img: "life_3",
    title: "大班生活活动：礼仪",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/add6a787-8cb7-4a45-816c-49e2473b464e"
  },
  {
    img: "sport_1",
    title: "小班游戏玩法：送礼物",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/8ad08463-607e-4693-91d2-0e490241c7ec"
  },
  {
    img: "sport_2",
    title: "中班集体运动游戏：炒豆豆",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/51186a20-5e31-44f4-ac50-e33c5d63a7e5"
  },
  {
    img: "sport_3",
    title: "大班集体运动游戏：包春卷",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/1d9f1d37-14e4-4850-b1e3-a8d8622d2d9f"
  },
  {
    img: "learn_1",
    title: "小班艺术：新年到",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/20d0bcb5-0879-4473-8246-6eb213be49e3"
  },
  {
    img: "learn_2",
    title: "中班社会：生肖",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/f0ed3ff9-57f2-4772-90db-69c4fa621a29"
  },
  {
    img: "learn_3",
    title: "大班语言：年夜饭",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/e1c3210c-4354-47b9-a97b-13f4f803c1f9"
  },
  {
    img: "game_1",
    title: "小班环境材料：挂彩灯",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/8c7d9f3b-9b6c-4b9d-80ba-70247ce08d82"
  },
  {
    img: "game_2",
    title: "中班自制玩教具：拼拼乐",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/f64fc73f-6f8e-4a7e-b4a2-6d26e9647e56"
  },
  {
    img: "game_3",
    title: "大班游戏中的故事：我的家",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/cb655efa-8664-47aa-8e4e-d143184ba802"
  },
  {
    img: "material_1",
    title: "主题素材包：四季之节气",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/2dfb549f-4f26-4055-aafb-94979ad156c5"
  },
  {
    img: "material_2",
    title: "主题素材包：四季之四季特征（冬）",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/43edbba8-ef19-49eb-a022-9187cad3e2bb"
  },
  {
    img: "material_3",
    title: "保护伞与神秘感",
    href: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/4f6134cf-1355-4616-be6c-fcbad2e7f99a"
  }
];