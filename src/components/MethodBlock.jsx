import { Icon } from './Icon.jsx'

const methodIcons = ['fileText', 'chart', 'target', 'source']

export function MethodBlock({ methods }) {
  return (
    <section className="content-section method-section">
      <div>
        <span className="eyebrow">Методы проекта</span>
        <h2>Как команда работала с материалами</h2>
      </div>
      <div className="method-grid">
        {methods.map((method, index) => (
          <article key={method}>
            <span>
              <Icon name={methodIcons[index] ?? 'checkCircle'} size={20} />
              {String(index + 1).padStart(2, '0')}
            </span>
            <p>{method}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
