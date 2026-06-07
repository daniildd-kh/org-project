import { ComparisonTable } from '../components/ComparisonTable.jsx'
import { Icon } from '../components/Icon.jsx'
import { ImageSlot } from '../components/ImageSlot.jsx'
import { SourceList } from '../components/SourceList.jsx'
import { StatCard } from '../components/StatCard.jsx'
import { getSourcesByIds } from '../data/sources.js'

export function SectionPage({ section }) {
  const sectionSources = getSourcesByIds(section.sourceIds)

  return (
    <section className="page-section">
      <SectionHero section={section} />

      <section className="content-section section-summary">
        <article className={`national-project accent-${section.accent}`}>
          <span className="eyebrow">Связь с национальными проектами</span>
          <p>{section.nationalProject}</p>
        </article>
        <article className="human-note">
          <span className="eyebrow">Коротко о теме</span>
          <p>{section.lead}</p>
        </article>
      </section>

      <section className="content-section section-image-section">
        <ImageSlot image={section.image} variant="wide" />
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Что сделали в России</span>
          <h2>Меры и проекты</h2>
        </div>
        <div className="measure-grid">
          {section.measures.map((measure) => (
            <article key={measure}>
              <span />
              <p>{measure}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Показатели</span>
          <h2>Цифры из материалов</h2>
        </div>
        <div className="stats-grid compact">
          {section.stats.map((stat) => (
            <StatCard stat={stat} key={`${stat.value}-${stat.label}`} />
          ))}
        </div>
        <ComparisonTable
          columns={['Показатель', 'Было', 'Стало / цель']}
          rows={section.indicators}
          note="Если в материалах не было базового значения или полной ссылки, это явно отмечено."
        />
      </section>

      <section className="content-section meaning-section">
        <div>
          <span className="eyebrow">Что это значит для человека</span>
          <h2>Практический смысл</h2>
        </div>
        <div className="meaning-list">
          {section.meaning.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Сравнение</span>
          <h2>Россия и другие страны</h2>
        </div>
        <ComparisonTable {...section.comparison} />
      </section>

      <section className={`content-section conclusion accent-${section.accent}`}>
        <span className="eyebrow">Вывод</span>
        <p>{section.conclusion}</p>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Источники</span>
          <h2>Материалы раздела</h2>
        </div>
        <SourceList sources={sectionSources} />
      </section>
    </section>
  )
}

function SectionHero({ section }) {
  return (
    <header className={`section-page-hero accent-${section.accent}`}>
      <div>
        <a className="back-link" href="#/sections">
          Все разделы
        </a>
        <span className={section.status === 'Готово' ? 'status ready' : 'status draft'}>
          {section.status}
        </span>
        <h1>{section.title}</h1>
        <p>{section.lead}</p>
      </div>
      <aside>
        <span>Ответственный</span>
        <strong>{section.owner}</strong>
        {section.file ? <DownloadButton file={section.file} /> : null}
      </aside>
    </header>
  )
}

function DownloadButton({ file }) {
  const href = `${import.meta.env.BASE_URL}files/${encodeURIComponent(file.name)}`

  return (
    <a className="download-button" href={href} download>
      <Icon name="download" size={18} />
      {file.label}
    </a>
  )
}
