import React, { Component } from 'react';
import Modal from 'react-modal';

const MODAL_A = 'modal_a';
const MODAL_B = 'modal_b';

const DEFAULT_TITLE = 'Default title';

window.myIndex = 0;

var QuestionArray = [{question: "Who is Snoopy's owner?", 
answerA: "Charlie Brown",
answerB: "Taylor Swift",
answerC:"Barack Obama",
answerD:"Yo Yo Ma",
correctAnswer:0,
timerInSeconds: 30},
{  question: "Who was the first man on the moon?", 
answerA: "Yuri Gagarin",
answerB: "Neil Armstrong",
answerC:"Buzz Aldrin",
answerD:"Michael Jackson",
correctAnswer:1,
timerInSeconds: 30}]

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, questionList: QuestionArray};
  }

  toggleModal = event => {
    console.log(event);
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;

    /*console.log(window.myIndex);

    console.log(this.state.questionList[window.myIndex]);

    console.log(this.state.questionList[window.myIndex].question);*/

    return (
      <div>
        <button className="btn btn-primary" onClick={this.toggleModal} id="Question Button">Answer Question</button>
        <Modal
          id="modal_with_forms"
          isOpen={isOpen}
          closeTimeoutMS={150}
          contentLabel="modalB"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.toggleModal}
          aria={{
            labelledby: "heading",
            describedby: "fulldescription"
          }}>
          <h1 id="heading">Question Time!</h1>
          <div id="fulldescription" tabIndex="0" role="document">
            <p>{this.state.questionList[window.myIndex].question}</p>
            <form>

              <fieldset>
                <legend>Radio buttons</legend>
                <label>
                  <input id="radio-a" name="radios" type="radio" /> A: {this.state.questionList[window.myIndex].answerA}
                </label>
                <br/>
                <label>
                  <input id="radio-b" name="radios" type="radio" /> B: {this.state.questionList[window.myIndex].answerB}
                </label>
                <br/>
                <label>
                  <input id="radio-c" name="radios" type="radio" /> C: {this.state.questionList[window.myIndex].answerC}
                </label>
                <br/>
                <label>
                  <input id="radio-d" name="radios" type="radio" /> D: {this.state.questionList[window.myIndex].answerD}
                </label>
              </fieldset>

              <fieldset>
                <input type="text"  />
                <input type="text"  />
              </fieldset>

            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default {
  label: "Login",
  app: Forms
};
