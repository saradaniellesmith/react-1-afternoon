import React, { Component } from 'react';

class FilterObject extends Component {
    constructor () {
        super ();

            this.state = {

                humans : [
                {
                    name: 'Sara Smith',
                    title: 'Why',
                    age: 10
                },
                {
                    name: 'Ashley Boucher',
                    age: 26,
                    hairColor: 'different everyday'
                },
                {
                    name: 'Brian Lawler',
                    title: 'Captain'
                }
                ],

                userInput: '',
                filteredHumans: []
            }
          }

          handleChange(value) {
              this.setState( { userInput: value });
          }
        
          filteredHumans(prop) {
              var humans = this.state.humans;
              var filteredHumans = [];

              for( var i = 0; i < humans.length; i++ ) {
                  if (humans[i].hasOwnProperty(prop) ) {
                      filteredHumans.push(humans[i]);
                  }
              }

            this.setState({ filteredHumans: filteredHumans });
          }

        render () {
            return (
                <div className="puzzleBox filterObjectPB">
                    <h4> Filter Object </h4>
                    <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value) }></input>
                    <button className="confirmationButton" onClick={ () => this.filterHumans(this.state.userInput) }> Filter </button>
                    <span className="puzzleText"> Original: { JSON.stringify(this.state.humans, null, 10) } </span>
                    <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredHumans, null, 10) } </span>
                </div>    
                )
            }  
        }
    

export default FilterObject; 