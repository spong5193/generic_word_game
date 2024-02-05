import React from "react";
import './SpellingCee.scss';
import dictionary from './usa.txt.json';
//import dictionary2 from './english3.txt.json';
//import dictionary from './enable2k.txt.json';
import { getRatingLevels, getRating, wordContainsAll, getWords, scoreWords, getPuzzle, shuffleLetters } from './utils'
import Hive from './Hive.js';
import Input from './Input.js';
import FoundList from './FoundList.js';
import Modal from 'react-modal';
const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-45%',
    fontSize              : '14px',
    transform             : 'translate(-50%, -50%)'
  },
};
export default class SpellingCee extends React.Component {
  constructor(props) {
    super(props);
    var letters = window.location.pathname.substring(1).toLowerCase();
    if (letters === "") {
      const puzzle = getPuzzle(dictionary);
      window.location.href = `${window.location}${puzzle}`
    }
    const words = getWords(letters, dictionary);
    const wordSet = new Set(words)
    //const words2 = getWords(letters, dictionary2);
    const maxScore = scoreWords(words, letters);
    const foundWords = JSON.parse(localStorage.getItem(`foundWords-${letters}`)) || [];
    const ratingLevels = getRatingLevels(maxScore);
    //console.log("Got this from storage")
    //console.log(foundWords);
    this.state = {
      letters: letters,
      displayLetters: letters,
      words: words,
      wordSet: wordSet,
      foundWords: foundWords,
      maxScore: maxScore,
      currWord: "",
      message: "",
      showMessage: false,
      showAnswers: false,
      showModal: false,
      showFAQ: false,
      ratingLevels: ratingLevels,
      //words2: words2,
    };
  }
  newPuzzle = () => {
    window.location.href = window.location.protocol + "//" + window.location.host
  }
  toggleAnswers = () => {
    this.setState({showAnswers: !this.state.showAnswers})
  }
  backspace = () => {
    if (this.state.currWord.length > 0)
      this.setState({currWord: this.state.currWord.slice(0,-1)})
  }
  onWordSubmit = () => {
    const { letters, wordSet, foundWords, currWord } = this.state;
    var message = null;
    //console.log("In onWordSubmit. Curr word is:")
    //console.log(this.state.currWord);
    if (currWord.length < 4) {
      message = "Word is too short"
      this.setState({currWord: ""});
    } else if (currWord.indexOf(letters[0]) === -1) {
      message = "Word is missing center letter"
      this.setState({currWord: ""});
    } else if (!wordSet.has(currWord)) {
      message = "Not in our word list"
      this.setState({currWord: ""});
    } else if (foundWords.includes(currWord)) {
      message = "Already found that word"
      this.setState({currWord: ""});
    } else {
      foundWords.unshift(currWord);
      message = wordContainsAll(currWord, letters) ? "Ooh! Pangram!" : "Nice!"
      localStorage.setItem(`foundWords-${letters}`, JSON.stringify(foundWords));
      this.setState({currWord: "", foundWords});
    }
    this.displayMessage(message)
  };
  displayMessage = (message, duration=3500) => {
    console.log("Gonna display", message);
    this.setState({message, showMessage: true})
    setTimeout(() => {
      //console.log("We timed out!")
      this.setState({
        showMessage: false
      });
     }, duration);
  }
  letterClick = (uncasedLetter) => {
    //console.log("Got this letter:", uncasedLetter)
    const letter = uncasedLetter.toLowerCase();
    const validLetter = this.state.letters.indexOf(letter) > -1;
    if (letter === " ") {
      this.reorder()
    } else if (letter.length === 1 && letter >= "a" && letter <= "z" && validLetter) {
      //console.log("It's a valid letter")
      const newWord = this.state.currWord + letter;
      this.setState({currWord: newWord})
      console.log("Valid letter?", validLetter)
    } else if (letter.length === 1) {
      this.displayMessage("Invalid letter", 1500)
    } else if (letter === "backspace" && this.state.currWord.length > 0)
      this.setState({currWord: this.state.currWord.slice(0,-1)})
    else if (letter === "enter")
      this.onWordSubmit();
  }
  reorder = () => {
    this.setState({displayLetters: shuffleLetters(this.state.letters)})
  }
  openModal = (event) => {
    this.setState({ showModal: true });
    event.stopPropagation();
    event.preventDefault();
  }
  
  openFAQ = (event) => {
    this.setState({ showFAQ: true });
    event.stopPropagation();
    event.preventDefault();
  }
  
  closeModals = () => {
    this.setState({ showModal: false, showFAQ: false });
  }
  onKeyPress = (event) => {
    event.stopPropagation();
    event.preventDefault();
    this.letterClick(event.key)
  };
  componentDidMount(){
    document.addEventListener("click", this._handleDocumentClick, false);
    document.addEventListener("keydown", this.onKeyPress);
  }
  render () {
    const { ratingLevels, showModal, showFAQ, displayLetters, maxScore, message, words, showAnswers, foundWords, currWord, showMessage } = this.state;
    const messageClass = showMessage ? '' : 'hide';
    const userScore = scoreWords(foundWords, displayLetters)
    const answerList = words.map((word) => {
      const missing = foundWords.includes(word) ? '' : 'missing'
      return(
        <li className={missing} key={word}>{word}</li>
      )}
    );
    const showLabel = showAnswers ? 'Hide Answers' : 'Show Answers'
    const wordLabel = foundWords.length === 1 ? "word" : "words"
    const pointLabel = userScore === 1 ? "point" : "points"
    const level = getRating(userScore, maxScore);
    return (
      <div id="SpellingCee" onKeyPress={this.onKeyPress} onClick={this.closeModals}>
        <div className="header">
          <div className="button showAnswers" onClick={this.toggleAnswers}>{showLabel}</div>
          <h1>
            Generic Word Game
          </h1>
          <div id="new-puzzle" className="button new-puzzle" onClick={this.newPuzzle}>New Puzzle</div>
        </div>
        <div className="main">
          <div className="mobile">
            <FoundList words={foundWords} />
          </div>
          <div className="message">
            <p className={messageClass}>{message}</p>
          </div>
          <Modal ariaHideApp={false} isOpen={showFAQ} style={modalStyle}>
            <div className="modal">
              <ul>
                <li>
                  <p className="question">Did this site change?</p>
                  <p className="answer">Yep! The NY Times sent me a letter that can best be described as cease-and-desisty. So, I've changed the offending bits.</p>
                </li>
                <li>
                  <p className="question">How does this game work?</p>
                  <p className="answer">The goal is to try to find as many words as possible from the given letters. You can use letters multiple times. Words must be at least 4 letters long and must contain the blue letter in the middle. You'll get 1 point for each 4 letter word, and for longer words you'll get as many points as there are letters in the word. You'll get 7 extra points for using all the letters in a word. That's a pangram, and there's always only one.</p>
                </li>
                <li>
                  <p className="question">Can I load today's NYT puzzle?</p>
                  <p className="answer">Yeah, just add the letters to the end of the url, starting with the center letter. You can make your own puzzles this way.</p>
                </li>
              </ul>
            </div>
          </Modal>
          <Modal isOpen={showModal} style={modalStyle}>
            <div className="modal">
                <p>Grand Poobah - {ratingLevels.queenBee}</p>
                <p>Genius - {ratingLevels.genius}</p>
                <p>Awesome - {ratingLevels.amazing}</p>
                <p>Superb - {ratingLevels.great}</p>
                <p>Nifty - {ratingLevels.nice}</p>
                <p>Satisfactory - {ratingLevels.solid}</p>
                <p>Promising - {ratingLevels.good}</p>
                <p>Adequate - {ratingLevels.movingUp}</p>
                <p>Getting there - {ratingLevels.goodStart}</p>
            </div>
          </Modal>
          <Input word={currWord} onWordSubmit={this.onWordSubmit} />
          <div className="score-container">
            <p className="score" >{userScore} {pointLabel} from {foundWords.length} {wordLabel} </p>
            <div className="rating" onClick={this.openModal}>
              <span className="level">{level}</span>
            </div>
          </div>
          <div className="side-by-side">
            <div className="left-column">
              <Hive letters={displayLetters.toUpperCase()} letterClick={this.letterClick}/>
              <div className="controls">
                <div className="button backspace" onClick={this.backspace}>Backspace</div>
                <div className="button reorder" onClick={this.reorder}></div>
                <div className="button enter" onClick={this.onWordSubmit}>  Enter  </div>
              </div>
              { showAnswers &&
                <div className="answers">
                  <p>Answers</p>
                  <ul>{answerList}</ul>
                </div>
              }
              <div className="more-controls">
                <div className="button faq" onClick={this.openFAQ}>FAQ</div>
                <div className="email">
                  <a href="mailto:genericwordgame@gmail.com" rel="noopener noreferrer" target="_blank" >Email Me</a>
                </div>
              </div>
            </div>
            <div className="desktop">
              <FoundList words={foundWords} open={true}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}