export function SourceFilters({ categories, activeCategory, sources, onChange }) {
  const filters = [
    ['all', 'Все источники'],
    ...Object.entries(categories),
  ]

  const getCount = (category) => {
    if (category === 'all') {
      return sources.length
    }

    return sources.filter((source) => source.category === category).length
  }

  return (
    <div className="source-filters" aria-label="Фильтр источников">
      {filters.map(([category, title]) => {
        const isActive = activeCategory === category

        return (
          <button
            className={`source-filter-button${isActive ? ' active' : ''}`}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(category)}
            key={category}
          >
            <span>{title}</span>
            <strong>Источников: {getCount(category)}</strong>
          </button>
        )
      })}
    </div>
  )
}
