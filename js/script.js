document.addEventListener('DOMContentLoaded', function() {
    // 初始化网站列表
    const websites = [
        {
            url: 'https://www.bilibili.com/',
            name: '哔哩哔哩',
            description: '国内知名的视频弹幕网站'
        },
        {
            url: 'https://www.zhihu.com/',
            name: '知乎',
            description: '中文互联网高质量的问答社区'
        },
        {
            url: 'https://www.douban.com/',
            name: '豆瓣',
            description: '书影音综合文化社区'
        },
        {
            url: 'https://www.xiaohongshu.com/',
            name: '小红书',
            description: '年轻人的生活方式平台'
        },
        {
            url: 'https://www.weibo.com/',
            name: '微博',
            description: '中国领先的社交媒体平台'
        },
        {
            url: 'https://www.hupu.com/',
            name: '虎扑',
            description: '体育迷的聚集地'
        },
        {
            url: 'https://www.douyin.com/',
            name: '抖音',
            description: '记录美好生活的短视频平台'
        },
        {
            url: 'https://www.ithome.com/',
            name: 'IT之家',
            description: '科技新闻和数码产品资讯'
        },
        {
            url: 'https://www.smzdm.com/',
            name: '什么值得买',
            description: '中国消费门户'
        },
        {
            url: 'https://www.mafengwo.cn/',
            name: '马蜂窝',
            description: '旅游攻略社区'
        },
        {
            url: 'https://www.xiachufang.com/',
            name: '下厨房',
            description: '美食菜谱分享平台'
        },
        {
            url: 'https://www.qidian.com/',
            name: '起点中文网',
            description: '网络文学平台'
        },
        {
            url: 'https://www.acfun.cn/',
            name: 'AcFun',
            description: 'A站，弹幕视频网站'
        },
        {
            url: 'https://www.guokr.com/',
            name: '果壳网',
            description: '科技资讯和科普平台'
        },
        {
            url: 'https://www.lofter.com/',
            name: 'LOFTER',
            description: '年轻人的创作社区'
        },
        {
            url: 'https://www.huxiu.com/',
            name: '虎嗅网',
            description: '科技媒体和创业资讯'
        },
        {
            url: 'https://www.36kr.com/',
            name: '36氪',
            description: '创业资讯和科技新闻'
        },
        {
            url: 'https://www.yxdown.com/',
            name: '游迅网',
            description: '游戏下载和资讯'
        },
        {
            url: 'https://www.meitu.com/',
            name: '美图秀秀',
            description: '图片处理工具'
        },
        {
            url: 'https://www.dianping.com/',
            name: '大众点评',
            description: '本地生活消费平台'
        }
    ];

    // 获取DOM元素
    const boredButton = document.getElementById('bored-button');
    const adCloseButton = document.getElementById('ad-close');

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
    
    // 关闭浮动广告
    adCloseButton.addEventListener('click', function() {
        const adFloat = document.getElementById('ad-float-right');
        adFloat.style.display = 'none';
        
        // 记录用户关闭广告的时间，24小时内不再显示
        localStorage.setItem('adClosedTime', Date.now());
    });

    // 检查是否应该显示浮动广告
    function checkAdDisplay() {
        const adFloat = document.getElementById('ad-float-right');
        const adClosedTime = localStorage.getItem('adClosedTime');
        
        // 如果用户在24小时内关闭过广告，则不显示
        if (adClosedTime && (Date.now() - adClosedTime < 24 * 60 * 60 * 1000)) {
            adFloat.style.display = 'none';
        } else {
            adFloat.style.display = 'flex';
        }
    }

    // 页面加载时检查广告显示
    checkAdDisplay();

    // 百度联盟广告集成示例（实际使用时需替换为真实代码）
    

    // 阿里妈妈广告集成示例（实际使用时需替换为真实代码）
    

    // 腾讯广告联盟集成示例（实际使用时需替换为真实代码）
    

    // 初始化各广告平台

}); // DOMContentLoaded 结束