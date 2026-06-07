import { Icon } from './Icon.jsx'

export function StatCard({ stat }) {
  return (
    <article className="stat-card">
      <div className="stat-card-head">
        <Icon name={stat.icon} />
        <strong>{stat.value}</strong>
      </div>
      <span>{stat.label}</span>
      {stat.note ? <p>{stat.note}</p> : null}
    </article>
  )
}
