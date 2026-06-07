import { evaluationCriteria, project } from '../data/project.js'

const teamGoals = [
  {
    title: 'Собрать разрозненную информацию',
    text: 'Мы хотели объединить материалы по национальным проектам, профилактике, инновациям и медицинской помощи в одном понятном месте.',
  },
  {
    title: 'Объяснить меры государства простым языком',
    text: 'Команда ставила задачу не переписать документы, а показать, что конкретно делается и почему это важно для человека.',
  },
  {
    title: 'Показать социальную значимость',
    text: 'Проект должен помочь студентам и людям без медицинского образования лучше ориентироваться в теме здравоохранения.',
  },
  {
    title: 'Сделать готовый сайт',
    text: 'Мы выбрали формат информационно-образовательного портала, потому что его можно открыть, показать на защите и опубликовать на GitHub Pages.',
  },
]

const projectLogic = [
  'выбрали тему здравоохранения',
  'сформулировали проблемный вопрос',
  'разделили четыре направления между участниками',
  'собрали факты и показатели из материалов',
  'сделали сайт с разделами, выводами и источниками',
]

export function AboutProjectPage() {
  return (
    <section className="page-section">
      <div className="about-hero">
        <div>
          <span className="eyebrow">О проекте</span>
          <h1>Мы сделали навигатор по современной медицине</h1>
          <p>
            Команда выбрала тему здравоохранения, потому что национальные проекты в этой сфере
            напрямую связаны с качеством жизни: профилактикой, ранней диагностикой, экстренной
            помощью, инновациями и доступностью медицинской информации.
          </p>
        </div>
        <aside>
          <span>Формат</span>
          <strong>информационно-образовательный сайт</strong>
          <p>Учебный проект по дисциплине «{project.discipline}»</p>
        </aside>
      </div>

      <section className="content-section about-problem">
        <div>
          <span className="eyebrow">С чего начали</span>
          <h2>Команда увидела проблему</h2>
        </div>
        <div className="about-problem-card">
          <p>
            Информации о здравоохранении много, но она часто находится в разных местах: в паспортах
            проектов, отчетах, новостях, статистике и научных статьях. Из-за этого человеку сложно
            быстро понять, какие меры реально реализуются и как они связаны с его жизнью.
          </p>
          <strong>{project.problemQuestion}</strong>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Цели команды</span>
          <h2>Что мы поставили перед собой</h2>
        </div>
        <div className="goal-board">
          {teamGoals.map((goal, index) => (
            <article key={goal.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{goal.title}</h3>
              <p>{goal.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section about-detail">
        <div>
          <span className="eyebrow">Цель проекта</span>
          <h2>Какой результат нужен</h2>
        </div>
        <div className="text-stack">
          <p>{project.goal}</p>
          <p>{project.expectedResult}</p>
        </div>
      </section>

      <section className="content-section about-detail">
        <div>
          <span className="eyebrow">Логика работы</span>
          <h2>Как команда двигалась</h2>
        </div>
        <div className="project-logic">
          {projectLogic.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="content-section about-detail">
        <div>
          <span className="eyebrow">Методы</span>
          <h2>На чем основан проект</h2>
        </div>
        <ul className="check-list">
          {project.methods.map((method) => (
            <li key={method}>{method}</li>
          ))}
        </ul>
      </section>

      <section className="content-section about-detail">
        <div>
          <span className="eyebrow">Задачи</span>
          <h2>Что нужно было сделать</h2>
        </div>
        <ul className="check-list">
          {project.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Критерии ОРГ</span>
          <h2>Почему проект подходит под методичку</h2>
          <p>
            Мы отдельно проверяли, чтобы сайт был не просто набором текста, а логичным учебным
            проектом с проблемным вопросом, источниками, выводами и социальной значимостью.
          </p>
        </div>
        <div className="criteria-grid">
          {evaluationCriteria.map((criterion) => (
            <span key={criterion}>{criterion}</span>
          ))}
        </div>
      </section>

      <section className="content-section team-section" id="team">
        <div>
          <span className="eyebrow">Команда</span>
          <h2>Кто за что отвечает</h2>
          <p>Куратор: {project.curator}</p>
        </div>
        <div className="team-grid">
          {project.team.map((member) => (
            <article key={member.name}>
              <strong>{member.name}</strong>
              <span>{member.role}</span>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
