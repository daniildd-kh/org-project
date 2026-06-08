import { useState } from 'react'
import { Icon } from './Icon.jsx'

const meaningTitles = [
  'Для пациента',
  'Для доступности помощи',
  'Для качества диагностики',
  'Для системы здравоохранения',
]

export function MeaningAccordion({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!items.length) {
    return (
      <div className="meaning-accordion">
        <article className="meaning-card active">
          <div>
            <strong>Практический смысл</strong>
            <p>Для этого раздела смысловые выводы пока не добавлены.</p>
          </div>
        </article>
      </div>
    )
  }

  return (
    <div className="meaning-accordion">
      {items.map((item, index) => {
        const isActive = activeIndex === index
        const title = meaningTitles[index] ?? `Значение ${index + 1}`

        return (
          <article className={`meaning-card${isActive ? ' active' : ''}`} key={`${title}-${item}`}>
            <button
              type="button"
              aria-expanded={isActive}
              onClick={() => setActiveIndex(isActive ? -1 : index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{title}</strong>
              <Icon name="arrowRight" size={18} />
            </button>
            <div className="meaning-card-content">
              <p>{item}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
