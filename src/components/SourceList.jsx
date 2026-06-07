import { Icon } from './Icon.jsx'

export function SourceList({ sources }) {
  return (
    <div className="source-list">
      {sources.map((source) => (
        <article className="source-item" key={source.id}>
          <div>
            <strong>{source.title}</strong>
            {source.note ? <p>{source.note}</p> : null}
          </div>
          <div className="source-actions">
            {source.status && source.status !== 'Требует уточнения' ? (
              <span className="status source-status">{source.status}</span>
            ) : null}
            {source.url ? (
              <a href={source.url} target="_blank" rel="noreferrer">
                <Icon name="arrowRight" size={15} />
                Открыть
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  )
}
