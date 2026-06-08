const getSourceStatusClass = (status = '') => {
  const normalizedStatus = status.toLowerCase()

  if (normalizedStatus.includes('официальный')) {
    return 'official'
  }

  if (normalizedStatus.includes('статистический')) {
    return 'statistic'
  }

  if (normalizedStatus.includes('международная')) {
    return 'international'
  }

  if (normalizedStatus.includes('нормативный')) {
    return 'normative'
  }

  if (normalizedStatus.includes('научная')) {
    return 'scientific'
  }

  if (normalizedStatus.includes('информационный')) {
    return 'info'
  }

  if (normalizedStatus.includes('социологическое')) {
    return 'sociology'
  }

  return ''
}

export function SourceList({ sources = [] }) {
  if (!sources.length) {
    return (
      <div className="source-list">
        <article className="source-item">
          <div>
            <strong>Источники не добавлены</strong>
            <p>Для этого раздела пока нет опубликованных источников.</p>
          </div>
        </article>
      </div>
    )
  }

  return (
    <div className="source-list">
      {sources.map((source) => {
        const statusClassName = getSourceStatusClass(source.status)

        return (
          <article className="source-item" key={source.id}>
            <div>
              <strong>{source.title}</strong>
              {source.note && <p>{source.note}</p>}
            </div>

            <div className="source-actions">
              {source.url ? (
                <a href={source.url} target="_blank" rel="noreferrer">
                  Открыть источник
                </a>
              ) : (
                <span className="source-status">Источник указан в материалах проекта</span>
              )}

              {source.status && (
                <span className={`source-status ${statusClassName}`}>{source.status}</span>
              )}
            </div>
          </article>
        )
      })}
    </div>
  )
}