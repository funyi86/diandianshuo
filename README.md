# 点点说 · 图卡沟通板

**给语言发育迟缓 / 自闭症幼儿的免费开源 AAC 沟通工具。点图卡，说出来。**

一位爸爸为自己 3 岁多、刚开始说简单词语的自闭症儿子做的辅助沟通（AAC, Augmentative and Alternative Communication）网页应用。现在开源，希望能帮到更多的孩子和家庭。

**在线使用：https://funyi86.github.io/diandianshuo/**（手机浏览器打开，添加到主屏幕后即可完全离线使用，像普通 App 一样）

> A free, open-source AAC communication board for minimally-verbal autistic children, in Chinese. Tap a picture card to speak the word; chain cards into sentences. Works fully offline as a PWA. Photos and voice recordings never leave the device.

## 它能做什么

- 🗣️ **点图卡朗读**：孩子点图卡，设备用中文读出词语；连点几张组成"我 + 要 + 喝水"，按大喇叭整句朗读
- 🎤 **真人语音**：家长按住录音（像发微信语音），孩子点卡时听到的是爸爸妈妈的声音，比机器音动机强得多
- 📷 **照片图卡**：直接拍孩子自己的水杯、常吃的饼干——真实照片比卡通图更容易认
- 🖼️ **专业 AAC 图标**：21 个核心词（我/要/不要/还要/帮我……）使用 ARASAAC 专业辅助沟通符号
- 📊 **使用记录**：本地记录每次点卡和组句，家长面板显示词汇广度、平均句长、常用词、本周新词，可导出 CSV 给治疗师
- 🔒 **家长锁**：设置藏在长按 1.5 秒的锁后面，孩子不会误触
- 📴 **完全离线、完全本地**：无后端、无账号、无数据上传；照片、录音、记录只存在自己手机里
- 🌙 深色模式、六类词库按 AAC 惯例色彩编码（Fitzgerald key）、超大触摸目标、固定布局（自闭症孩子依赖位置记忆）

## 给家长的使用建议（重要）

1. **一起用，不要单独给孩子。** 大人先示范：自己点"我""要""饼干"，读出来，再把饼干拿给自己。孩子是看着学会的。
2. **制造表达机会。** 把他想要的东西放在看得见、够不着的地方，拿着手机等他。哪怕只点一张卡，也马上回应。
3. **点了就兑现。** 他点"喝水"，你说"哦！你要喝水呀"，然后立刻给水。"表达→有用"这个因果链是核心。
4. **不强迫开口仿说。** 点图表达和口语一样算数。研究一致表明图卡沟通（AAC）不会阻碍口语发展，反而常常带动口语。
5. ⚠️ **本工具不能替代言语治疗和康复干预。** 请在专业人员指导下作为家庭辅助使用，并把它给孩子的治疗师看，请他们建议词汇。

## 怎么部署自己的版本

这是一个纯静态单页应用（一个 HTML 文件 + 图标），没有任何后端：

1. Fork 本仓库
2. 在仓库 Settings → Pages 里选择从 `main` 分支根目录部署
3. 访问 `https://<你的用户名>.github.io/diandianshuo/`

也可以把整个目录放到任何静态服务器（必须 HTTPS，否则浏览器会禁用录音功能）。改词库、改样式都只需要编辑 `index.html`。修改后记得把 `sw.js` 里的 `CACHE` 版本号 +1，否则旧用户拿不到更新。

## 技术说明

- 单文件前端（原生 JS，无框架、无构建、无依赖），PWA + Service Worker 离线缓存
- 语音：Web Speech API（zh-CN TTS）+ MediaRecorder 真人录音（存 IndexedDB，优先于 TTS 播放）
- 照片：拍照后 canvas 压缩到 320px 方图存 IndexedDB
- 数据全部在本机（localStorage + IndexedDB）；清除浏览器网站数据会清空，请注意
- 兼容 iOS Safari 与 Android Chrome/系统浏览器

## 贡献

欢迎 Issue 和 PR：新词库模板、其他方言/语言、无障碍改进、把它介绍给需要的家庭。也欢迎康复领域的专业人士提改进建议。

## 许可与致谢

- 代码：[MIT](LICENSE)
- `pictos/` 目录图标：来自 [ARASAAC](https://arasaac.org)，作者 Sergio Palao，版权归西班牙阿拉贡政府所有，依 [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可，**仅限非商业使用**（详见 LICENSE 文件附注）。The pictographic symbols used are the property of the Government of Aragón and have been created by Sergio Palao for ARASAAC, that distributes them under Creative Commons License BY-NC-SA.
- 参考了 [Cboard](https://github.com/cboard-org/cboard)、[AsTeRICS Grid](https://github.com/asterics/Asterics-AAC) 等优秀开源 AAC 项目的设计思路

---

*送给每一个正在努力学着表达的孩子。*
