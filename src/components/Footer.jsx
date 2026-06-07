import { project } from '../data/project.js'

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{project.title}</strong>
        <p>Учебный проект по дисциплине «{project.discipline}»</p>
      </div>
      <div>
        <a href="#/about/team">Команда проекта</a>
        <span>{project.year}</span>
      </div>
    </footer>
  )
}
