import { evaluationCriteria, project } from '../data/project.js'

const teamGoals = [
  {
    title: 'Объединение разрозненных материалов',
    text: 'В рамках проекта были собраны и структурированы материалы о национальных проектах, профилактике заболеваний, инновациях и медицинской помощи.',
  },
  {
    title: 'Понятное объяснение государственных мер',
    text: 'Материалы были переработаны в информационно-просветительский формат, чтобы показать содержание мер, их назначение и значение для населения.',
  },
  {
    title: 'Раскрытие социальной значимости',
    text: 'Проект направлен на повышение информированности студентов и пользователей без медицинского образования о современных изменениях в сфере здравоохранения.',
  },
  {
    title: 'Создание готового цифрового продукта',
    text: 'Результатом работы стал информационно-образовательный сайт, который можно представить на защите и опубликовать в открытом доступе.',
  },
]

const projectStages = [
  {
    title: 'Выбор темы',
    text: 'В качестве основного направления была выбрана тема здравоохранения в контексте национальных проектов и современной России.',
  },
  {
    title: 'Формулировка проблемы',
    text: 'Был выделен проблемный вопрос, связанный с доступностью и понятностью информации о мерах государства в сфере медицины.',
  },
  {
    title: 'Распределение разделов',
    text: 'Каждый участник команды подготовил отдельное тематическое направление для будущего сайта.',
  },
  {
    title: 'Обработка материалов',
    text: 'Факты, показатели и источники были приведены к единой структуре: меры, результаты, значение для человека и вывод.',
  },
  {
    title: 'Проектирование сайта',
    text: 'На основе собранных данных была разработана структура информационно-образовательного портала.',
  },
]

const criteriaDetails = [
  {
    title: 'Соответствие теме',
    text: 'Сайт раскрывает тему национальных проектов через конкретное направление — развитие здравоохранения в России.',
  },
  {
    title: 'Достоверность источников',
    text: 'В основу проекта положены официальные материалы, статистика, нормативные документы и профильные публикации.',
  },
  {
    title: 'Проблемный вопрос',
    text: 'В проекте сформулирован центральный вопрос о доступности, современности и понятности медицинской помощи.',
  },
  {
    title: 'Глубина проработки',
    text: 'Разделы включают не только описание мер, но и показатели, сравнения, выводы и объяснение практического значения.',
  },
  {
    title: 'Социальная значимость',
    text: 'Проект помогает пользователям ориентироваться в информации о здравоохранении и профилактике заболеваний.',
  },
  {
    title: 'Логика изложения',
    text: 'Материалы организованы по единой схеме: проблема, направления, данные, источники и итоговые выводы.',
  },
]

export function AboutProjectPage() {
  return (
    <section className="page-section">
      <div className="about-hero">
        <div>
          <span className="eyebrow">О проекте</span>
          <h1>Навигатор по современной медицине</h1>
          <p>
            Проект посвящен развитию здравоохранения в России и показывает, как национальные
            проекты связаны с профилактикой заболеваний, ранней диагностикой, экстренной помощью,
            инновационными технологиями и доступностью медицинской информации.
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
          <span className="eyebrow">Актуальность</span>
          <h2>Проблема, на которую отвечает проект</h2>
        </div>

        <div className="about-problem-card">
          <p>
            Информация о развитии здравоохранения часто представлена в разных источниках:
            государственных программах, паспортах проектов, отчетах, статистических материалах,
            научных статьях и публикациях. Из-за этого пользователю сложно быстро понять, какие
            меры реализуются, каких результатов они позволяют достигать и почему это важно для
            общества.
          </p>

          <strong>{project.problemQuestion}</strong>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Цели команды</span>
          <h2>Что было заложено в основу проекта</h2>
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
          <h2>Планируемый результат</h2>
        </div>

        <div className="text-stack">
          <p>{project.goal}</p>
          <p>{project.expectedResult}</p>
        </div>
      </section>

      <section className="content-section about-detail">
        <div>
          <span className="eyebrow">Этапы работы</span>
          <h2>Логика реализации проекта</h2>
        </div>

        <div className="project-timeline">
          {projectStages.map((stage, index) => (
            <article key={stage.title}>
              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="timeline-card">
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section about-detail">
        <div>
          <span className="eyebrow">Методы</span>
          <h2>На чем основана проектная работа</h2>
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
          <h2>Что было необходимо выполнить</h2>
        </div>

        <ul className="check-list">
          {project.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </section>

      <section className="content-section criteria-section">
        <div className="section-heading">
          <span className="eyebrow">Критерии ОРГ</span>
          <h2>Соответствие проекта требованиям методических указаний</h2>
          <p>
            Сайт был подготовлен не как набор отдельных текстов, а как целостный учебный проект:
            с проблемным вопросом, источниками, структурой, выводами и выраженной социальной
            значимостью.
          </p>
        </div>

        <div className="criteria-board">
          {criteriaDetails.map((criterion, index) => (
            <article key={criterion.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{criterion.title}</h3>
                <p>{criterion.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="criteria-tags">
          {evaluationCriteria.map((criterion) => (
            <span key={criterion}>{criterion}</span>
          ))}
        </div>
      </section>

      <section className="content-section team-section" id="team">
        <div>
          <span className="eyebrow">Команда</span>
          <h2>Распределение ответственности</h2>
          <p>Куратор проекта: {project.curator}</p>
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