export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold text-ink mb-6">关于入坑地图</h1>

      <div className="prose prose-sm max-w-none space-y-6 text-ink-muted leading-relaxed">
        <section className="bg-card border border-paper-dark/60 rounded-xl p-6">
          <h2 className="font-serif text-lg text-ink mb-3">这是什么？</h2>
          <p>
            「长篇网络小说不剧透入坑地图」是一个<strong className="text-ink">读前决策助手</strong>，
            帮助你在面对一本长篇完结网络小说时，判断这本书适不适合自己、前期是否慢热、
            后面有什么值得期待、建议至少读到哪里再下判断。
          </p>
        </section>

        <section className="bg-card border border-paper-dark/60 rounded-xl p-6">
          <h2 className="font-serif text-lg text-ink mb-3">这不是什么</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>不是小说正文阅读器</li>
            <li>不是盗版小说站</li>
            <li>不是普通书单推荐站</li>
            <li>不提供章节正文、下载或付费内容</li>
          </ul>
        </section>

        <section className="bg-card border border-paper-dark/60 rounded-xl p-6">
          <h2 className="font-serif text-lg text-ink mb-3">数据来源</h2>
          <p>
            所有小说信息来自本地种子数据 <code className="text-xs bg-paper-dark/50 px-1 rounded">src/data/books.seed.json</code>（根目录同名文件仅为备份，不参与渲染），
            包含阅读体验评分、不剧透高光地图、弃文风险提示、阅读预期提醒等结构化字段。
            部分字段标注为「待核验」或低置信度时，前端会如实展示。
          </p>
        </section>

        <section className="bg-card border border-paper-dark/60 rounded-xl p-6">
          <h2 className="font-serif text-lg text-ink mb-3">隐私说明</h2>
          <p>
            收藏、阅读记录等个人数据仅保存在你的浏览器 localStorage 中，不会上传到任何服务器。
          </p>
        </section>
      </div>
    </div>
  );
}
