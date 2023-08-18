import { useParams, Link } from 'react-router-dom'

function Survey() {
    const { questionNumber } = useParams()
    const questionValue = parseInt(questionNumber)

    const prevQuestionNumber = questionValue > 1 ? questionValue - 1 : null
    const nextQuestionNumber = questionValue < 10 ? questionValue + 1 : null

    const prevQuestionLink = (
        <Link to={`/survey/${prevQuestionNumber}`}>Question précédente</Link>
    )

    const currentQuestionLink = (
        <Link to={`/survey/${questionValue}`}>Question précédente</Link>
    )

    const nextQuestionLink = (
        <Link to={`/survey/${nextQuestionNumber}`}>Question suivante</Link>
    )

    const resultsLink = <Link to="/results">Résultats</Link>

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionValue}</h2>

            <nav>
                {prevQuestionNumber !== null
                    ? prevQuestionLink
                    : currentQuestionLink}
                {nextQuestionNumber !== null ? nextQuestionLink : resultsLink}
            </nav>
        </div>
    )
}
export default Survey
