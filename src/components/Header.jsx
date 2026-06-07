import { Icon } from './Icon.jsx'

const navItems = [
  { href: '#/', label: 'Главная', match: '/', icon: 'hospital' },
  { href: '#/about', label: 'О проекте', match: '/about', icon: 'target' },
  { href: '#/sections', label: 'Разделы', match: '/sections', icon: 'chart' },
  { href: '#/sources', label: 'Источники', match: '/sources', icon: 'source' },
]

export function Header({ route }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/" aria-label="Навигатор по современной медицине">
        <span className="brand-mark">Н</span>
        <span>
          <strong>Навигатор</strong>
          <small>современная медицина</small>
        </span>
      </a>
      <nav className="top-nav" aria-label="Основная навигация">
        {navItems.map((item) => (
          <a
            className={route === item.match || route.startsWith(`${item.match}/`) ? 'active' : ''}
            href={item.href}
            key={item.href}
          >
            <Icon name={item.icon} size={16} />
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
