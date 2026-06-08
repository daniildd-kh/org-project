import { useState } from 'react'
import { Icon } from './Icon.jsx'
import { quizQuestions } from '../data/quiz.js'

export function QuizBlock() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  if (!quizQuestions.length) {
    return null
  }

  const currentQuestion = quizQuestions[currentIndex]
  const hasAnswer = selectedOptionIndex !== null
  const isCorrect = selectedOptionIndex === currentQuestion.correctOptionIndex

  const handleAnswer = (optionIndex) => {
    if (hasAnswer) {
      return
    }

    setSelectedOptionIndex(optionIndex)

    if (optionIndex === currentQuestion.correctOptionIndex) {
      setCorrectAnswers((value) => value + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex === quizQuestions.length - 1) {
      setIsFinished(true)
      return
    }

    setCurrentIndex((value) => value + 1)
    setSelectedOptionIndex(null)
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelectedOptionIndex(null)
    setCorrectAnswers(0)
    setIsFinished(false)
  }

  return (
    <section className="content-section quiz-section">
      <div className="quiz-block">
        <div className="quiz-intro">
          <span className="eyebrow">Мини-квиз</span>
          <h2>Проверьте, насколько вы поняли проект</h2>
          <p>
            Ответьте на несколько вопросов по материалам сайта. Квиз помогает закрепить ключевые
            идеи проекта.
          </p>
        </div>

        {isFinished ? (
          <div className="quiz-result">
            <span>
              <Icon name="checkCircle" size={28} />
            </span>
            <div>
              <strong>
                Вы ответили правильно на {correctAnswers} из {quizQuestions.length}
              </strong>
              <p>Результат показывает, насколько хорошо усвоены основные идеи разделов.</p>
            </div>
            <button className="button secondary" type="button" onClick={handleRestart}>
              Пройти еще раз
            </button>
          </div>
        ) : (
          <div className="quiz-card">
            <div className="quiz-progress">
              Вопрос {currentIndex + 1} из {quizQuestions.length}
            </div>
            <h3>{currentQuestion.question}</h3>

            <div className="quiz-options">
              {currentQuestion.options.map((option, optionIndex) => {
                const isSelected = selectedOptionIndex === optionIndex
                const isRightAnswer = currentQuestion.correctOptionIndex === optionIndex
                const optionState =
                  hasAnswer && isRightAnswer ? ' correct' : hasAnswer && isSelected ? ' wrong' : ''

                return (
                  <button
                    className={`quiz-option${optionState}`}
                    type="button"
                    disabled={hasAnswer}
                    onClick={() => handleAnswer(optionIndex)}
                    key={option}
                  >
                    {option}
                  </button>
                )
              })}
            </div>

            {hasAnswer && (
              <div className={`quiz-feedback${isCorrect ? ' correct' : ' wrong'}`}>
                <strong>{isCorrect ? 'Правильно' : 'Неправильно'}</strong>
                <p>{currentQuestion.explanation}</p>
                <button className="button secondary" type="button" onClick={handleNext}>
                  {currentIndex === quizQuestions.length - 1 ? 'Показать результат' : 'Следующий вопрос'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
