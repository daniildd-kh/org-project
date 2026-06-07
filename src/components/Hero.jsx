import { project } from '../data/project.js'
import { Icon } from './Icon.jsx'

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <span className="eyebrow">Здравоохранение и национальные проекты</span>
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
        <div className="hero-actions">
          <a className="button primary" href="#/sections">
            <Icon name="arrowRight" size={18} />
            Перейти к разделам
          </a>
        </div>
      </div>
      <div className="hero-visual simple" aria-label="Иллюстрация медицинского навигатора">
        <div className="simple-med-card">
          <div className="simple-med-icon" aria-hidden="true">
            <span />
          </div>
          <div className="simple-med-copy">
            <span>информационный портал</span>
            <strong>Здравоохранение понятно</strong>
            <p>Национальные проекты, профилактика, инновации и экстренная помощь в одной структуре.</p>
          </div>
          <svg className="simple-ecg" viewBox="0 0 260 76" role="img" aria-label="Линия ЭКГ">
            <polyline
              points="0,42 34,42 47,42 57,18 71,58 84,42 116,42 129,42 139,28 152,50 165,42 206,42 219,20 234,56 246,42 260,42"
            />
          </svg>
        </div>

        <div className="simple-metrics">
          <div>
            <strong>4</strong>
            <span>раздела</span>
          </div>
          <div>
            <strong>37</strong>
            <span>НМИЦ</span>
          </div>
          <div>
            <strong>более 500</strong>
            <span>ЦАОП</span>
          </div>
        </div>
      </div>
    </section>
  )
}
