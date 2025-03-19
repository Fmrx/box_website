# 网站盲盒 (Website Mystery Box)

## 项目介绍

网站盲盒是一个充满惊喜的网页应用，灵感来源于流行的盲盒概念。用户点击按钮即可随机开启神秘网站盲盒，探索未知的互联网精彩内容。

## 功能特点

- **随机开盲盒**：点击中央按钮，随机开启神秘网站盲盒
- **访问计数**：记录用户开启盲盒惊喜的次数
- **响应式设计**：完美适配电脑、平板和手机等各种设备
- **国内广告平台集成**：支持百度联盟、阿里妈妈、腾讯广告联盟等主流广告平台

## 技术栈

- HTML5
- CSS3 (动画、响应式设计)
- JavaScript (ES6+)

## 使用方法

### 本地运行
1. 克隆或下载本项目到本地
2. 直接打开 `index.html` 文件即可在浏览器中查看效果

### 部署到Coding.net
1. 登录[Coding.net](https://coding.net)并新建项目仓库
2. 初始化本地Git仓库并关联远程仓库：
```bash
git init
git remote add origin https://coding.net/你的账号/项目名.git
```
3. 提交并推送代码：
```bash
git add .
git commit -m "initial commit"
git push -u origin master
```
4. 进入仓库的"代码托管" → "Pages服务"
5. 开启Pages服务并选择"master分支"作为部署分支
6. 等待自动构建完成后即可通过提供的URL访问

### 服务器部署
3. 如需部署到独立服务器，可将整个项目文件夹上传到您的Web服务器

## 广告接入说明

本项目已集成主流广告平台系统，接入步骤如下：

1. **获取广告代码**
   - 登录Google AdSense后台
   - 创建"显示广告"单元，选择自适应广告格式
   - 复制提供的广告代码

2. **替换广告参数**
   - 在`index.html`头部找到`ca-pub-3191967139534902`，替换为您的发布商ID
   - 在浮动广告位的`data-ad-slot`属性中填入您的广告单元ID

3. **广告展示规则**
   - 浮动广告默认显示在页面右侧
   - 用户关闭广告后，24小时内不再重复显示
   - 请遵守Google AdSense的广告投放政策

注意：请勿在代码仓库中提交真实的AdSense账号信息！
## 自定义网站列表

如需修改随机跳转的网站列表，请编辑 `script.js` 文件中的 `websites` 数组，按照以下格式添加或删除网站：

```javascript
{
    url: '网站URL',
    name: '网站名称',
    description: '网站描述'
}
```

## 许可证

MIT License

## 联系方式

如有任何问题或建议，请发送邮件至：contact@wuliaoanniu.com