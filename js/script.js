document.addEventListener('DOMContentLoaded', function() {
    // 初始化网站列表
    const websites = [

            {
                url: 'https://zoom.earth/',
                name: '实时地球',
                description: '实时卫星图像每10分钟更新，提供风暴、降水、火警等动态数据，支持天气可视化'
            },
            {
                url: 'https://www.sxhm.com/online.html/',
                name: '陕西博物馆360°实景',
                description: '5大展厅100+场景，支持VR头盔浏览，沉浸式体验唐代文物精华'
            },
            {
                url: 'https://www.cyark.org/',
                name: 'CyArk古迹数字化',
                description: '3D激光扫描技术永久保存吴哥窟、金字塔等150+世界遗产，支持细节缩放'
            },
            {
                url: 'https://pianos.pub/',
                name: '全球公共钢琴地图',
                description: '8391架公共钢琴定位，支持按地点搜索，附钢琴类型与状态说明'
            },
            {
                url: 'https://platform.leolabs.space/visualization',
                name: '近地轨道可视化',
                description: '实时追踪2.7万+太空垃圾/卫星，支持时间轴回放与轨道碰撞预警'
            },
            {
                url: 'https://randomstreetview.com/',
                name: '随机谷歌街景',
                description: '全球随机街景探索，含360°视角+地理位置标签，支持连续随机跳转'
            },
            {
                url: 'https://www.gapminder.org/dollar-street/',
                name: 'Dollar Street收入分层',
                description: '按日收入$1-$100+展示50国生活场景，含家庭空间/物品对比图'
            },
            {
                url: 'https://neal.fun/deep-sea/',
                name: '深海生物深度指南',
                description: '2000-11000米深海生物图谱，附压力/温度/光照等环境数据可视化'
            },
            {
                url: 'https://scrapbox.io/MECHKEYS/',
                name: '机械键盘博物馆',
                description: '收录1984-2025年600+款稀有键盘，含轴体声音试听与拆解图解'
            },
            {
                url: 'https://pano.dpm.org.cn/',
                name: '全景故宫',
                description: '8K超清360°漫游，含72万㎡建筑群导航，重点建筑配专家语音导览'
            },
            {
                url: 'https://nuclearsecrecy.com/nukemap/',
                name: '核弹威力模拟器',
                description: '选择广岛/沙皇炸弹等型号，实时模拟冲击波/辐射/热辐射影响范围（含城市对比）'
            },
            {
                url: 'https://timelineofearth.com/',
                name: '地球46亿年时间线',
                description: '滚动式时间轴，含恐龙灭绝/人类进化等节点，配地质年代3D模型'
            },
            {
                url: 'https://www.ocearch.org/tracker/',
                name: '海洋巨兽追踪',
                description: '实时定位大白鲨/虎鲸等2000+海洋生物，附迁徙路径热力图与体长数据'
            },
            {
                url: 'https://www.littlebigworld.de/',
                name: '微型地球摄影集',
                description: '移轴摄影+无人机延时，将马丘比丘/大堡礁等景点转化为微缩模型视觉'
            },
            {
                url: 'https://www.sigoo.com/',
                name: '极像素世界',
                description: '10亿级像素城市全景，支持建筑纹理级缩放（如上海外滩每扇窗户可见）'
            },
            {
                url: 'https://persepolis.getty.edu/',
                name: '波斯波利斯3D重建',
                description: '交互式漫游古代波斯都城，含虚拟考古挖掘功能与历史场景还原'
            },
            {
                url: 'https://www.bluemarinefoundation.com/the-sea-we-breathe/',
                name: '海底互动之旅',
                description: '沉浸式海洋生态体验，含珊瑚礁声场模拟与海洋酸化影响互动实验'
            },
            {
                url: 'https://reddirect.ru/',
                name: '苏联海报档案馆',
                description: '5万+张政治宣传/电影海报，按年代/主题分类，附历史背景解读'
            },
            {
                url: 'http://www.chnmuseum.cn/Portals/0/web/vr/',
                name: '国博VR全景',
                description: '1:1还原古代中国展厅，支持文物3D拆解（如后母戊鼎铸造工艺演示）'
            },
            {
                url: 'https://earthclock.cwandt.com/',
                name: '地球时钟',
                description: 'Google Earth实时卫星影像叠加数字时钟，支持时区对比与晨昏线动画'
            },
            {
                url: 'http://www.famicn.com/',
                name: '模拟器博物馆',
                description: '在线运行红白机/小霸王等20+经典游戏机，含《魂斗罗》等百款怀旧游戏'
            },
            {
                url: 'https://www.lightpollutionmap.info/',
                name: '全球光污染地图',
                description: '实时展示夜空亮度等级，支持最佳观星地点推荐（附光污染影响指数）'
            },
            {
                url: 'https://neal.fun/ten-years-ago/',
                name: '十年前的网页',
                description: '对比2015年与2025年的Google/Facebook等12大网站界面，附技术演进说明'
            },
            {
                url: 'https://www.meteorshowers.org/',
                name: '流星雨太空视角',
                description: '3D模拟流星雨形成过程，支持自定义时间/地点的观赏预测（含ZHR值计算）'
            },
            {
                url: 'https://virtualmuseum.intel.com/',
                name: '英特尔虚拟博物馆',
                description: '3D漫游半导体发展史，含世界首块微处理器4004的全息投影展示'
            },
            {
                url: 'https://logisticsartproject.com/',
                name: '物流艺术项目',
                description: '追踪斯德哥尔摩→深圳的快递旅程，37天影像日记+全球运输网络可视化'
            },
            {
                url: 'http://savethesounds.info/',
                name: '濒危声音博物馆',
                description: '收录打字机/传呼机等40+消失声音，附声波图谱与设备历史故事'
            },
            {
                url: 'https://he.net/3d-map/',
                name: '全球海底光缆地图',
                description: '交互式3D地球展示120+海底光缆，支持断裂模拟与数据传输路径演示'
            },
            {
                url: 'https://www.skypixel.com/',
                name: '天空之城航拍社区',
                description: '50万+无人机作品库，含火山/极地等极限拍摄，附拍摄参数与飞行路线'
            },
            {
                url: 'https://www.rijksmuseum.nl/nl/',
                name: '荷兰国家博物馆',
                description: '在线浏览100万+藏品，支持《夜巡》等名画细节放大（像素级解析）'
            },
            {
                url: 'https://viewer.legacysurvey.org/',
                name: '10万亿像素夜空',
                description: '哈勃望远镜拼接图像，含10亿+星系，支持光谱分析与天体标注'
            },
            {
                url: 'https://www.allhistory.com/',
                name: '全历史',
                description: '时空图谱+关系图谱，支持文明演进对比（如同时期中国/罗马事件对照）'
            },
            {
                url: 'https://www.windy.com/',
                name: '风网',
                description: '全球台风/洋流实时动态，支持风速压力图与未来7天预测（动画演示）'
            },
            {
                url: 'https://www.loc.gov/collections/world-digital-library/',
                name: '世界数字图书馆',
                description: '5000+古籍/地图/手稿数字化，含敦煌遗书、古登堡圣经等珍品'
            },
            {
                url: 'https://www.e-dunhuang.com/',
                name: '数字敦煌',
                description: '30个经典洞窟高精度建模，支持壁画病害对比与临摹过程演示'
            },
            {
                url: 'https://www.kunstderfuge.com/',
                name: '古典音乐MIDI库',
                description: '10万+首免费古典音乐，支持乐器分离试听（如单独听贝多芬交响曲的小提琴声部）'
            },
            {
                url: 'https://animagraffs.com/',
                name: '产品原理动画',
                description: '拆解飞机发动机/芯片等200+产品，3D动画演示工作原理（含错误操作警示）'
            },
            {
                url: 'https://stars.chromeexperiments.com/',
                name: '10万恒星可视化',
                description: 'Google实验室作品，支持银河漫游与恒星生命周期模拟（从诞生到超新星爆发）'
            },
            {
                url: 'https://www.docuchina.cn/',
                name: '中国纪录片网',
                description: '央视纪录片全集，含《航拍中国》4K修复版，支持多机位视角切换'
            },
            {
                url: 'https://www.mobilephonemuseum.com/catalogue',
                name: '手机博物馆',
                description: '2200+款古董手机，含世界首部商用手机DynaTAC 8000X（1983年）'
            },
            {
                url: 'https://www.passportindex.org/',
                name: '护照指数',
                description: '全球199国护照含金量排名，附免签地图与签证办理智能指南'
            },
            {
                url: 'https://www.tfes.org/',
                name: '地平说协会',
                description: '地心说/地平说理论库，含"南极冰墙"等假说，提供辩论直播与实验教程'
            },
            {
                url: 'http://www.cbaigui.com/',
                name: '知妖网',
                description: '5000+中国妖怪图谱，含《山海经》等古籍考据，附妖怪战斗力排行榜'
            },
            {
                url: 'https://uniform.wingzero.tw/',
                name: '制服地图',
                description: '台湾地区2000+学校制服定位，附高清校服照片与设计理念解析'
            },
            {
                url: 'https://phonemica.net/',
                name: '乡音苑',
                description: '10万+条方言录音，含56个民族语言，支持语音对比与拼音标注'
            },
            {
                url: 'https://www.zhijianshang.com/',
                name: '指尖上VR旅游',
                description: '全球500+景区VR漫游，含珠穆朗玛峰登山路线与水下兵马俑遗址'
            },
            {
                url: 'https://ytenx.org/',
                name: '韵典网',
                description: '古代汉语语音数据库，支持《广韵》反切查询与诗词平仄检测'
            },
            {
                url: 'http://www.sdmz.cn/',
                name: '四大名著数字库',
                description: '《红楼梦》等古籍多版本对照，含87版电视剧分镜脚本与手稿影印'
            },
            {
                url: 'https://new.shuge.org/',
                name: '书格子',
                description: '10万+册古籍数字化，含《永乐大典》残卷，支持竖排/繁体切换'
            },
            {
                url: 'https://www.ants-china.com/',
                name: '蚂蚁网',
                description: '东亚地区蚂蚁百科，含500+种蚂蚁3D模型，支持巢穴结构分解'
            },
            {
                url: 'https://www.ipanda.com/',
                name: '熊猫频道',
                description: '大熊猫24小时直播，含繁育基地监控（幼崽成长慢镜头与饲养员日记）'
            },
            //游戏网站
            
{
    url: 'http://25xyx.helloh5.com/',
    name: '25小游戏',
    description: '免下载即点即玩的H5小游戏平台，涵盖射击、冒险、益智等多种类型，如枪魂启示录、俄罗斯方块、黄金矿工等'
  },
  {
    url: 'http://www.hxyou.cn/',
    name: '幻想游戏',
    description: '提供单机、独立游戏资源，包括星之卡比、植物大战僵尸2、老爹的快餐店等经典作品'
  },
  {
    url: 'https://www.yikm.net/',
    name: '小霸王其乐无穷',
    description: '经典FC在线游戏和街机游戏平台，支持魂斗罗、塞尔达传说等怀旧游戏在线畅玩'
  },
  {
    url: 'https://www.crazygames.com/',
    name: 'Crazy Games',
    description: '提供3D动作、赛车、多人对战游戏，如超低配地平线、高糊GTA类作品，支持浏览器即玩'
  },
  {
    url: 'https://kbhgames.com/',
    name: 'KBH Games',
    description: '专注音游和像素格斗游戏，提供大量HTML5游戏资源，如PokeMMO、周五夜放克等'
  },
  {
    url: 'https://poki.cn/',
    name: 'Poki',
    description: '界面友好的在线游戏平台，涵盖跑酷、解谜、联机游戏，如神庙逃亡、钢琴块等'
  },
  {
    url: 'https://www.kongregate.com/',
    name: 'Kongregate',
    description: '大型独立游戏社区，支持Flash/HTML5游戏，包含RPG、策略类作品，如冒险任务、塔防系列'
  },
  {
    url: 'https://armorgames.com/',
    name: 'Armor Games',
    description: '高质量策略与塔防游戏平台，代表作王国保卫战系列，提供完整游戏系列体验'
  },
  {
    url: 'https://www.miniclip.com/',
    name: 'Miniclip',
    description: '全球知名体育/动作游戏平台，支持多人对战，如8球台球、地铁跑酷等'
  },
  {
    url: 'https://zh.y8.com/',
    name: 'Y8 Games',
    description: '老牌HTML5游戏网站，提供街机经典（吃豆人、俄罗斯方块）及新派冒险游戏'
  },
  {
    url: 'https://www.addictinggames.com/',
    name: 'Addicting Games',
    description: '简单上瘾的小游戏集合，涵盖物理益智、冒险探索类，如愤怒的小鸟、神庙逃亡'
  },
  {
    url: 'https://www.agame.com/',
    name: 'Agame',
    description: '综合性休闲游戏平台，包含烹饪、拼图、冒险类游戏，更新频繁'
  },
  {
    url: 'https://www.newgrounds.com/',
    name: 'Newgrounds',
    description: '历史悠久的独立游戏社区，以创意搞笑、音乐类游戏著称，如超兄贵系列'
  },
  {
    url: 'https://www.coolmathgames.com/',
    name: 'Coolmath Games',
    description: '数学逻辑主题游戏平台，包含2048、数独等益智游戏，适合全年龄段'
  },
  {
    url: 'https://www.silvergames.com/',
    name: 'Silvergames',
    description: '经典小游戏合集，支持多语言，涵盖射击、策略类，如合金弹头、象棋'
  },
  {
    url: 'https://www.freeonlinegames.com/',
    name: 'FreeOnlineGames',
    description: '超过5000款免费游戏，无需下载，包含动作、解谜、模拟等类型'
  },
  {
    url: 'https://gamejolt.com/',
    name: 'Game Jolt',
    description: '独立游戏社交平台，提供Undertale、Celeste等创意作品，支持玩家互动'
  },
  {
    url: 'https://itch.io/',
    name: 'Itch.io',
    description: '独立游戏宝藏库，涵盖小众解谜、角色扮演类，支持免费/付费下载'
  },
  {
    url: 'https://fc.zhouxiaoben.info/',
    name: 'FC在线游戏',
    description: '红白机经典游戏合集，支持超级马里奥、魂斗罗等FC游戏在线玩'
  },
  {
    url: 'https://dos.zczc.cz/',
    name: 'DOS游戏中心',
    description: 'DOS经典游戏博物馆，提供命令与征服、毁灭公爵等复古游戏'
  },
  {
    url: 'https://play.wo1wan.com/',
    name: '畅玩空间',
    description: '多平台游戏联机平台，支持街机、FC、PS游戏在线对战'
  },
  {
    url: 'https://pvz.heheda.top/',
    name: '植物大战僵尸网页版',
    description: '经典塔防游戏网页复刻版，支持原版玩法及自定义关卡'
  },
  {
    url: 'https://classic.minecraft.net/',
    name: '我的世界经典网页版',
    description: '我的世界早期创造模式体验，支持浏览器直接建造'
  },
  {
    url: 'https://game.chronodivide.com/',
    name: '红警网页版',
    description: '红色警戒2在线复刻版，支持单人战役及多人联机'
  },
  {
    url: 'https://www.saolei123.com/',
    name: '在线扫雷',
    description: '经典扫雷游戏网页版，支持初级/中级/高级难度挑战'
  },
  {
    url: 'https://fn.heheda.top/',
    name: '水果忍者网页版',
    description: '经典切水果游戏在线版，支持多人高分榜挑战'
  },
  {
    url: 'https://ngu.heheda.top/',
    name: '永不言弃网页版',
    description: '虐心跳跃游戏在线版，考验反应与节奏控制'
  },
  {
    url: 'https://vw.heheda.top/',
    name: '维京战争网页版',
    description: '策略塔防游戏在线版，指挥维京战士抵御敌人进攻'
  },
  {
    url: 'https://emojia.glitch.me/',
    name: 'Emoji大战',
    description: '表情符号主题射击游戏，操控Emoji角色对抗敌人'
  },
  {
    url: 'https://rcr.heheda.top/',
    name: '红毯竞速',
    description: '3D跑酷游戏，操控角色在红毯上躲避障碍冲刺'
  },
  {
    url: 'https://bruno-simon.com/remote-control-car',
    name: '遥控车模拟',
    description: '浏览器操控3D遥控车，体验竞速与特技表演'
  },
  {
    url: 'https://pestgame.com/',
    name: '杀蟑螂苍蝇',
    description: '减压点击游戏，消灭房间内的害虫赚取积分'
  },
  {
    url: 'https://img.youquhome.com/wp-ziyuan/nanren20.htm',
    name: '是男人就坚持20秒',
    description: '经典像素挑战游戏，考验耐力与反应速度'
  },
  {
    url: 'https://www.gamesforthebrain.com/',
    name: '益智游戏大全',
    description: '脑力训练游戏集合，包含记忆、逻辑、数学类挑战'
  },
  {
    url: 'https://www.friv.com/',
    name: 'Friv游戏系列',
    description: '儿童向休闲游戏平台，提供简单操作的益智类游戏'
  },
  {
    url: 'https://iogames.space/',
    name: 'IO游戏中心',
    description: '多人联机IO游戏集合，如 Agar.io、Slither.io 等'
  },
  {
    url: 'https://lagged.com/',
    name: 'Lagged',
    description: '免下载3D游戏平台，支持赛车、射击类大作低配运行'
  },
  {
    url: 'https://www.pacogames.com/',
    name: 'Pacogames',
    description: '复古街机游戏合集，包含吃豆人、大金刚等经典作品'
  },
  {
    url: 'https://taiko.bui.pm/',
    name: '太鼓达人网页版',
    description: '音乐节奏游戏在线版，支持自定义曲目及难度'
  },
  {
    url: 'https://igroutka.ru/',
    name: 'Igroutka',
    description: '俄罗斯游戏平台，提供多语言小游戏，涵盖冒险、体育类'
  },
  {
    url: 'https://www.migufun.com/middleh5/',
    name: '咪咕快游',
    description: '云游戏平台，支持手机/电脑畅玩主机级游戏，无需下载'
  },
  {
    url: 'https://kiz10.com/',
    name: 'Kiz10',
    description: '儿童教育游戏平台，通过游戏学习数学、语言等知识'
  },
  {
    url: 'https://www.stickgames.com/',
    name: 'Stick Games',
    description: '火柴人主题游戏集合，包含动作、策略、塔防类作品'
  },
  {
    url: 'http://xyx.guguyu.com/',
    name: 'GuGuYu小游戏',
    description: '综合小游戏平台，提供停车、赛车、益智类等多样化游戏'
  },
  {
    url: 'https://armorgames.com/play/35078/kingdom-rush',
    name: '王国保卫战',
    description: '经典塔防游戏在线版，支持多难度关卡及英雄系统'
  },
  {
    url: 'https://www.addictinggames.com/arcade-games/flappy-bird',
    name: '像素鸟',
    description: '虐心点击游戏，操控小鸟穿越水管障碍'
  },
  {
    url: 'https://www.crazymonkeygames.com/',
    name: 'Crazy Monkey Games',
    description: '趣味休闲游戏平台，提供消除、体育类轻量游戏'
  },
  {
    url: 'https://www.kongregate.com/games/AlexWright/the-scale-of-the-universe-2',
    name: '宇宙的尺度2',
    description: '科普向益智游戏，探索宇宙层级与微观世界'
  },
  {
    url: 'https://www.foddy.net/',
    name: 'Foddy游戏系列',
    description: '魔性独立游戏集合，如和班尼特福迪一起攻克难关'
  },
  {
    url: 'https://www.aplay.com/',
    name: 'Aplay',
    description: '综合游戏平台，提供动作、冒险、角色扮演类小游戏'
  },
  {
    url: 'https://www.gamesgames.com/',
    name: 'GamesGames',
    description: '分类齐全的游戏库，支持家庭、儿童、成人不同类别'
  },
  {
    url: 'https://www.playfreeonlinegames.com/',
    name: 'PlayFreeOnlineGames',
    description: '免费在线游戏平台，包含射击、模拟、体育类作品'
  },
  {
    url: 'https://www.y8.com/games/block_puzzle',
    name: '方块拼图',
    description: '经典俄罗斯方块变体，支持六边形拼图玩法'
  },
  {
    url: 'https://www.primarygames.com/',
    name: 'Primary Games',
    description: '儿童教育游戏平台，通过游戏学习科学、数学知识'
  }
    ];

    // 获取DOM元素
    const boredButton = document.getElementById('bored-button');

    // 按钮点击事件
    boredButton.addEventListener('click', function() {
        // 生成粒子特效
        createParticles(20);

    
        // 随机选择一个网站
        const randomIndex = Math.floor(Math.random() * websites.length);
        const selectedWebsite = websites[randomIndex];
    
        // 在新标签页中打开选定的网站
        window.open(selectedWebsite.url, '_blank');
    });
    
    // 粒子生成函数
    function createParticles(count) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // 随机位置和大小
            const size = Math.random() * 10 + 5;
            const x = boredButton.offsetWidth * Math.random();
            const y = boredButton.offsetHeight * Math.random();
            
            // 随机颜色渐变
            const hue = Math.random() * 360;
            particle.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 70%) 20%, hsl(${hue + 30}, 100%, 50%) 80%)`;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            
            // 添加动画结束后移除
            particle.addEventListener('animationend', () => {
                particle.remove();
            });
            
            boredButton.appendChild(particle);
        }
    }
    
    // 浮动广告相关代码已移除

    // 浮动广告检查函数已移除

    // 百度联盟广告集成示例（实际使用时需替换为真实代码）
    

    // 阿里妈妈广告集成示例（实际使用时需替换为真实代码）
    

    // 腾讯广告联盟集成示例（实际使用时需替换为真实代码）
    

    // 初始化各广告平台

}); // DOMContentLoaded 结束