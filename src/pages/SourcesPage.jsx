import { useState } from 'react'
import { SourceFilters } from '../components/SourceFilters.jsx'
import { SourceList } from '../components/SourceList.jsx'
import { sourceCategories, sources } from '../data/sources.js'

export function SourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const categoryEntries =
    activeCategory === 'all'
      ? Object.entries(sourceCategories)
      : [[activeCategory, sourceCategories[activeCategory]]]

  return (
    <section className="page-section">
      <div className="page-heading">
        <span className="eyebrow">Источники</span>
        <h1>Источники и проверяемость данных</h1>
        <p>
          В этом разделе собраны официальные документы, статистические сборники, международные
          базы данных, нормативные акты, научные статьи и информационные материалы, на которые
          опирается сайт. Источники распределены по категориям, чтобы было понятно, откуда взяты
          показатели и выводы по каждому направлению проекта.
        </p>
      </div>

      <SourceFilters
        categories={sourceCategories}
        activeCategory={activeCategory}
        sources={sources}
        onChange={setActiveCategory}
      />

      {categoryEntries.map(([category, title]) => {
        const categorySources = sources.filter((source) => source.category === category)

        if (!categorySources.length && activeCategory === 'all') {
          return null
        }

        return (
          <section className="content-section source-category" key={category}>
            <div className="section-heading">
              <span className="eyebrow">Источников: {categorySources.length}</span>
              <h2>{title}</h2>
            </div>

            {categorySources.length ? (
              <SourceList sources={categorySources} />
            ) : (
              <div className="empty-state">Источники в этой категории пока не добавлены</div>
            )}
          </section>
        )
      })}
    </section>
  )
}
