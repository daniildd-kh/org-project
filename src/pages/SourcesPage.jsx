import { SourceList } from '../components/SourceList.jsx'
import { sourceCategories, sources } from '../data/sources.js'

export function SourcesPage() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <span className="eyebrow">Источники</span>
        <h1>Проверяемость как часть проекта</h1>
        <p>
          В списке отдельно отмечены материалы, где в приложенных файлах не было полной ссылки или
          встречались технические подписи вместо оформленного источника.
        </p>
      </div>

      {Object.entries(sourceCategories).map(([category, title]) => {
        const categorySources = sources.filter((source) => source.category === category)

        return (
          <section className="content-section source-category" key={category}>
            <div className="section-heading">
              <span className="eyebrow">{categorySources.length} поз.</span>
              <h2>{title}</h2>
            </div>
            <SourceList sources={categorySources} />
          </section>
        )
      })}
    </section>
  )
}
