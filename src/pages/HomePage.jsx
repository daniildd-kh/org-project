import { Hero } from '../components/Hero.jsx'
import { MethodBlock } from '../components/MethodBlock.jsx'
import { ProblemBlock } from '../components/ProblemBlock.jsx'
import { SectionCard } from '../components/SectionCard.jsx'
import { StatCard } from '../components/StatCard.jsx'
import { Icon } from '../components/Icon.jsx'
import { homeStats, sections } from '../data/sections.js'
import { project } from '../data/project.js'

export function HomePage() {
  return (
    <>
      <Hero />
      <ProblemBlock question={project.problemQuestion} />

      <section className="content-section split-section">
        <div>
          <span className="eyebrow">Социальная значимость</span>
          <h2>Зачем нужен этот сайт</h2>
        </div>
        <div className="text-stack">
          <p>
            Медицинская информация часто разбросана по отчетам, новостям, паспортам проектов и
            научным статьям. Человеку без медицинского образования сложно понять, какие меры уже
            реализуются и как они связаны с обычной жизнью.
          </p>
          <p>
            Навигатор собирает проверенные материалы в одном месте: без медицинских обещаний, без
            советов по лечению и без сомнительных цифр. Главная задача проекта - объяснить меры
            государства простым языком.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Направления проекта</span>
          <h2>Четыре направления в одной структуре</h2>
        </div>
        <div className="section-grid">
          {sections.map((section) => (
            <SectionCard section={section} key={section.id} />
          ))}
        </div>
      </section>

      <section className="content-section stats-section">
        <div className="stats-panel">
          <div className="section-heading stats-heading">
            <span className="eyebrow">Ключевые цифры</span>
            <h2>Показатели из приложенных материалов</h2>
            <p>
              В блок вынесены только те цифры, которые есть в материалах проекта. Каждая карточка
              ведет к разделу, где показатель объясняется в контексте.
            </p>
          </div>
          <div className="stats-grid">
            {homeStats.map((stat) => (
              <a className="stat-link" href={`#/sections/${stat.sectionId}`} key={`${stat.value}-${stat.label}`}>
                <StatCard stat={stat} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <MethodBlock methods={project.methods} />

      <section className="content-section site-map-section">
        <div>
          <span className="eyebrow">Логика сайта</span>
          <h2>От вопроса к понятному выводу</h2>
          <p>
            Каждый раздел построен как короткий маршрут: сначала объясняется проблема, затем
            показываются меры государства, показатели и практическое значение для человека.
          </p>
        </div>
        <div className="reader-route">
          {[
            ['target', 'Сначала объясняется проблема', 'Показывается, что именно меняется в системе здравоохранения и почему это важно.'],
            ['checkCircle', 'Затем описываются действия', 'Перечисляются проекты, центры, технологии и программы, запущенные в России.'],
            ['chart', 'Далее приводятся показатели', 'Используются цифры из материалов; спорные данные не выдаются за проверенный факт.'],
            ['users', 'После этого раскрывается смысл', 'Объясняется, как меры могут повлиять на доступность и понятность медицинской помощи.'],
            ['activity', 'Затем добавляется сравнение', 'Международный контекст приводится только там, где есть сопоставимые данные.'],
            ['source', 'В конце указываются источники', 'Показывается, откуда взяты факты и что можно проверить перед финальной сдачей.'],
          ].map(([icon, title, text], index) => (
            <article key={title}>
              <span>
                <Icon name={icon} size={20} />
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
