import { ImageSlot } from './ImageSlot.jsx'
import { Icon } from './Icon.jsx'

const cardNumbers = {
  oncology: '01',
  innovation: '02',
  cardio: '03',
  emergency: '04',
}

const cardIcons = {
  oncology: 'hospital',
  innovation: 'microscope',
  cardio: 'heart',
  emergency: 'stethoscope',
}

export function SectionCard({ section }) {
  return (
    <a className={`section-card accent-${section.accent}`} href={`#/sections/${section.id}`}>
      <span className="section-card-glow" />
      <div className="section-card-head">
        <span className="section-index">{cardNumbers[section.id]}</span>
        <span className={section.status === 'Готово' ? 'status ready' : 'status draft'}>
          {section.status}
        </span>
      </div>
      <div className="section-card-body">
        <div className="section-card-media">
          <ImageSlot image={section.image} variant="card" />
        </div>
        <div className="section-card-title">
          <span className="section-icon">
            <Icon name={cardIcons[section.id] ?? 'checkCircle'} size={24} />
          </span>
          <h3>{section.title}</h3>
        </div>
        <p>{section.lead}</p>
      </div>
      <div className="section-card-foot">
        <span>{section.owner}</span>
        <strong aria-hidden="true">
          <Icon name="arrowRight" size={18} />
        </strong>
      </div>
    </a>
  )
}
