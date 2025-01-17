import React, {Component} from 'react';
let quizData = require('./quiz_data.json');

class QuizQuestion extends Component{
render(){
    return (<div>
        <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <li>{this.props.quiz_question.answer_options[0]}</li>
          </ul>
        </section>
      </main>
    </div>);
}
}

export default QuizQuestion;