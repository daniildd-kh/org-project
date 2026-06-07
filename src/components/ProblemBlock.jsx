export function ProblemBlock({ question }) {
  return (
    <section className="problem-block">
      <span className="eyebrow">Проблемный вопрос</span>
      <h2>{question}</h2>
    </section>
  )
}
