import QUESTIONS from '../questions.js';
export default function Quiz1() {
    return(
        <div id = "question">
            <h2>{QUESTIONS[0].text}</h2>
            <button>{QUESTIONS.answers}</button>
            {/* <button>{QUESTIONS[0].answers[1]}</button>
            <button>{QUESTIONS[0].answers[2]}</button>
            <button>{QUESTIONS[0].answers[3]}</button> */}
        </div>
    );
}