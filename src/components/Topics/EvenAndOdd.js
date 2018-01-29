import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor () {
    super ();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
      }
      handleChange(value) {
          this.setState( {userInput: value });
      }
      assignEvenAndOdds (userInput) {
          var arr = userInput.split(',');
          var evens = [];
          var odds = [];

          for(var i = 0; i < arr.length; i++) {
              if(arr[i] % 2 === 0) {
                  evens.push(parseInt(arr[i], 10));
              } else {
                  odds.push(parseInt(arr[i], 10));
              }
          }
      this.setState( {evenArray: evens, oddArray: odds });
      }
    render () {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange= { (event) => this.handleChange(event.target.value) }></input>
                <button className="confirmationButton" onClick= { () => { this.assignEvenAndOdds(this.state.userInput ) }}> Split </button>
                <span className="resultsBox"> Evens: { this.state.oddArray } </span>
                <span className="resultsBox"> Odds: { this.state.evenArray } </span>
            </div>    
        )  
    }
}
    export default EvenAndOdd;