# Extended Properties（Obsidian 插件 · 简体中文版）

[English](./README.md) | **简体中文**

> 一个数据驱动、可自由排布的属性侧边栏，把笔记元数据变成可交互的角色卡、资料面板或仪表盘。

本仓库是 [electroluminescent/obsidian-extended-properties](https://github.com/electroluminescent/obsidian-extended-properties) 的简体中文本地化版本，基于上游 **4.72.0**，版本号 **4.72.2**。界面通过 i18n 字典实现中英双语，默认跟随 Obsidian 语言，也可以在设置中固定为中文或英文。

汉化与维护：[allensky708](https://github.com/allensky708)。原项目版权归 electroluminescent 所有，按 MIT 协议发布。

---

## 安装

### 手动安装（推荐用于本中文版）

1. 从本仓库 Releases 下载 `main.js`、`manifest.json`、`styles.css`。
2. 复制到：

   ```text
   <你的仓库>/.obsidian/plugins/extended-properties/
   ```

3. 在 Obsidian 中打开 **设置 → 第三方插件**，启用 **Extended Properties**。
4. 建议先备份原来的 `data.json`（如果之前装过官方版）：

   ```bash
   cp <你的仓库>/.obsidian/plugins/extended-properties/data.json ~/Desktop/ep-data-backup.json
   ```

### BRAT

安装并启用 **BRAT**，执行 **BRAT: Add a beta plugin for testing**，输入：

```text
allensky708/Extended-Properties
```

BRAT 会从最新 Release 下载三个文件。

### 与官方版的关系

本中文版沿用官方插件 ID `extended-properties`，因此：

- 会覆盖官方插件同一目录下的 `main.js`、`manifest.json`、`styles.css`；
- 你的 `data.json`（类型、布局、设置）会保留；
- 笔记里的属性都是普通 frontmatter，不受影响；
- 不能同时启用官方版和中文版。

如果你希望回到官方版，重新安装官方插件即可；两者使用同一份数据。

---

## 快速开始

1. **打开侧边栏**：点击左侧功能区的 **Extended Properties** 图标，或执行命令 **Extended Properties: 打开属性侧边栏**。
2. **给笔记一个 Type**：在 frontmatter 中写：

   ```yaml
   ---
   Type: 角色
   ---
   ```

   侧边栏只对匹配已配置类型的笔记生效。没有 Type 时，面板会列出你定义过的类型，并提供一键 **设置类型**。
3. **编辑布局**：点击面板顶部的 **编辑**，添加分区和属性，拖动 ⠿ 手柄排序，点击分区标题重命名；用 ⋯ 或右键菜单配置属性的数据类型、选项和样式。完成后点 **完成** 保存，或撤销整个编辑会话。
4. **日常使用（锁定模式）**：勾选复选框、用 − / + 调整数字、拖动滑块、**双击**值就地编辑、右键任意条目打开快捷操作。全部支持键盘操作，详见 [ACCESSIBILITY.md](ACCESSIBILITY.md)。
5. **切换语言**：**设置 → Extended Properties → 常规 → 语言**，选择：
   - **跟随 Obsidian**（默认）
   - **English**
   - **简体中文**

   切换后侧边栏、设置、命令和提示会立即更新。

---

## 主要功能

### 侧边栏与编辑模式

- **锁定模式**：安全交互，避免误改布局。
- **编辑模式**：拖动排序、添加/删除分区和属性、插入空白间隔或目录条目、应用分区模板。
- **就地编辑**：双击值编辑；数字支持 − / +、滑块、长按/右键菜单。
- **滚动保持**：切换笔记或刷新时尽量保持滚动位置。

### 分区样式与布局

每个分区可以独立配置：

- 名称、图标、图标颜色
- 可折叠、透明、吸顶
- 高度预设与内部滚动
- 水平/垂直分隔线
- 强调色、背景色、控件颜色
- 标题字号
- 三种布局：**列表**、**分栏**、**网格**（网格支持行/列轨道、空白单元格和对齐）

### 丰富的数据类型

| 类型 | 说明 |
| --- | --- |
| **文本** | 支持仓库级属性补全、`[[笔记]]` 链接渲染、多行输入 |
| **数字** | 整数、− / + 步进、可选滑块（线性/平方根/指数）、最小值/最大值、越界钳制、掷骰按钮 |
| **小数** | 浮点数、步进、公式支持 |
| **派生** | 由影响引擎计算的只读数值；点击可写入单篇笔记的覆盖值 |
| **公式** | 输入 `sqrt(x)`、`level * 2 - 1` 等表达式；滑块和公式双向联动 |
| **列表** | 标签/chip 形式，支持行内编辑和弹窗编辑 |
| **复选框** | 布尔开关，锁定模式可编辑 |
| **颜色** | RGB / HSL / OKLCH / OKLab、取色器、越界提示、十六进制输入 |
| **图片** | URL 或 `![[图片]]` 嵌入，支持缩放查看器和高度预设 |
| **iframe** | 嵌入外部网页，可配置宽高和缩放 |
| **链接** | `[[笔记]]` 形式，编辑时支持 `[[` 自动补全 |
| **日期（自定义历法）** | 自定义格式、月/日/周、纪元池、时间精度、时间线参考点 |
| **评分 / 单位 / 日期时间** | 旧类型，仍可渲染；新属性请使用数字或日期类型 |

### 条目类型

- **属性**：普通 frontmatter 键值。
- **空白**：不可见间隔，用于布局。
- **目录（TOC）**：自动生成当前笔记的标题链接，随笔记动态更新。

### 派生值与影响引擎

数字/派生条目可以添加多个 **影响项**，每项由以下部分组成：

- **来源**：按名称引用另一个属性，支持派生链。
- **派生方式**：原值、设置中的命名公式块（内置 *属性调整值*、*熟练加值*，可改名/编辑/删除），或自定义公式。
- **表达式**：`floor((STR + DEX) / 2) + max(PB, 2)`，支持 `floor`、`ceil`、`round`、`min`、`max`、`clamp`、`abs`、`if`、比较和逻辑运算。
- **符号**：加或减。
- **开关**：用列表属性按笔记切换该项，例如熟练项。

行内会显示短名链（`INT + DEX - AGE`）、骰子分解和总值。短名按属性配置，并在全仓库保持唯一；属性名和短名可以互换使用，且都支持自动补全。

**跨笔记引用与聚合**：

- `[[笔记]].属性`
- `this.属性`
- `prop("链接属性", "键")`
- `sum` / `avg` / `count` / `min` / `max("类型", "键")`

跨笔记读取使用已存储的原始值，不产生循环，可在设置中关闭。

### 骰子与掷骰

在 **设置 → 功能** 中启用掷骰模块后：

- 数字/派生条目上的掷骰按钮；
- 骰子面板，支持 `2d6kh1 + DEX + 3` 等表达式；
- 优势/劣势、检定、掷骰历史；
- 可选 3D 骰子动画、音效、暴击/大失败规则；
- 掷骰结果可以分配回笔记属性。

### 行内掷骰与属性

在笔记正文（阅读模式 / 实时预览）中：

| 语法 | 效果 |
| --- | --- |
| `` `roll: 2d6+DEX` `` | 可点击的掷骰 |
| `` `prop: Strength` `` | 可实时编辑的属性值 |
| `` `val: INT` `` | 值 chip |
| `` `vals: HP` `` | 完整交互卡片 |
| `` `radar: STR, DEX, CON, INT, WIS, CHA` `` | 雷达图 |
| `ep-sheet` 代码块 | 投射某个类型的布局分区 |

### 类型表格

执行命令 **打开类型表格**，可查看某个类型的所有笔记，支持排序、筛选和就地编辑。

### 条件格式、校验与显隐

- 按数值/文本条件设置颜色、图标、背景；
- 校验规则（必填、范围、正则等）；
- 条件显示/隐藏；
- 空分区自动隐藏（锁定模式）。

### 导入 / 导出

- 导出/导入单个类型的布局与属性；
- 类型重命名、合并、删除；
- 布局可保存为仓库内的 JSON 文件，便于 Git 同步和分享。

### 本地化与文本覆盖

- 内置 **English** 与 **简体中文**，默认跟随 Obsidian。
- 可在 **设置 → Extended Properties → 界面文本** 中逐条覆盖任意 UI 文本，不必改代码。
- 缺失翻译自动回退英文；功能模块也可以注册自己的语言字典。

### D&D 5e 角色卡模块

在 **设置 → 功能** 中启用后，提供：

- 六大属性值及调整值（力量、敏捷、体质、智力、感知、魅力）
- 豁免检定、技能、熟练加值
- 先攻、生命值、护甲等级、速度
- 分区模板：目录、详情、生命状态、属性值、豁免、技能等
- 所有数据都存为普通笔记属性，可搜索、可移植

### 扩展 API

插件通过 `window.ExtendedProperties` 暴露稳定 API，第三方插件可以注册：

- 自定义值类型
- 条目类型
- 数字行附加组件
- 派生公式块
- 分区模板
- 布局预设
- 语言字典

---

## 设置概览

| 区域 | 内容 |
| --- | --- |
| **类型** | 类型列表、类型属性名、默认值、新建/重命名/删除 |
| **分区** | 新分区默认样式、布局、字号 |
| **调整值** | 命名公式块、影响链深度、属性短名 |
| **掷骰** | 骰子、掷骰面板、宏、音效、动画 |
| **界面** | 字体、尺寸、功能开关、Obsidian 集成、隐藏属性 |
| **界面文本** | **语言选择**、逐条文本覆盖 |
| **功能** | 模块和值类型开关 |
| **重置** | 重置设置/布局（会先备份） |

其他能力：

- **布局文件**：把布局存到仓库内的 JSON 文件夹，便于同步和版本管理。
- **配置快照**：手动/自动快照，随时恢复。
- **敏感属性**：AES-256-GCM 加密，口令只保存在内存中；丢失口令无法恢复。
- **冲突保护**：写入前检查文件修改时间，支持字段级三方合并。

---

## 主题与样式

所有界面使用 `--ep-*` CSS 变量，并回退到当前 Obsidian 主题；兼容 [Style Settings](https://github.com/mgmeyers/obsidian-style-settings)。例如：

```css
body {
  --ep-radius: 12px;
  --ep-accent-default: #c678dd;
}
```

内置 Style Settings 面板 **Extended Properties**，也可以用自己的 CSS 片段覆盖。

---

## 数据与兼容性

- 属性保存在笔记 frontmatter 中，是纯文本、可搜索、可移植的。
- 类型、布局、设置保存在 `.obsidian/plugins/extended-properties/data.json`。
- 禁用某个功能模块不会删除它的数据；重新启用后恢复显示。
- 升级前会自动备份 `data.json`（保留最近 5 份）。
- 与官方版使用同一插件 ID，安装本中文版会覆盖官方文件但保留数据。

---

## 开发

```bash
npm install --legacy-peer-deps
npm run dev        # 监听构建
npm run build      # 生产构建
npm run typecheck  # TypeScript 检查
npm test           # Vitest
npm run i18n       # 校验语言字典的 key / 占位符一致性
```

语言文件：

```text
src/i18n/locales/en.json                核心英文（schema）
src/i18n/locales/zh.json                核心中文
src/features/rolling/strings.json       掷骰模块英文
src/features/rolling/strings.zh.json    掷骰模块中文
src/features/dnd5e/strings.zh.json      D&D 5e 中文
src/features/inline/strings.zh.json     行内模块中文
```

新增或修改 UI 文本时，先改 `en.json`（或模块的 `strings.json`），再补对应 `zh.json`，最后运行 `npm run i18n`。占位符必须与英文完全一致。

---

## 致谢

- 原插件与全部核心代码：[electroluminescent](https://github.com/electroluminescent/obsidian-extended-properties)
- 词向量着色参考 **GloVe: Global Vectors for Word Representation**（Stanford NLP，PDDL v1.0）
- 简体中文本地化：[allensky708](https://github.com/allensky708)

## 许可证

[MIT](./LICENSE) © electroluminescent

简体中文本地化部分同样以 MIT 协议发布。
