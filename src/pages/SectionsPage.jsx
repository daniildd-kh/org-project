import { SectionCard } from '../components/SectionCard.jsx'
import { sections } from '../data/sections.js'

export function SectionsPage() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <span className="eyebrow">Разделы сайта</span>
        <h1>Направления современной медицины</h1>
        <p>
          Четыре раздела заполнены по приложенным материалам, два раздела сохранены как заготовки
          для финального наполнения.
        </p>
      </div>
      <div className="section-grid">
        {sections.map((section) => (
          <SectionCard section={section} key={section.id} />
        ))}
      </div>
    </section>
  )
}
