import React, { Component } from 'react';

class FilterString extends Component {
    constructor () {
        super ();

            this.state = {
                sports: ['wakeboarding', 'snowboarding', 'paintball', 'football'],
                userInput: '',
                filteredSports: []
            };
          }

          handleChange(value) {
              this.setState({ userInput: value});
          }

          filterSports(userInput) {
              var sports = this.state.names;
              var filteredSports = [];

              for ( var i = 0; i < sports.length; i++ ) {
                  if (sports[i].includes(userInput)) {
                      filteredSports.push(sports[i]);
                  }
              }

              this.setState({ filteredSports: filteredSports });
            }

        render () {
            return (
                <div className="puzzleBox filterStringPB">
                    <h4> Filter String </h4>
                    <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value) }></input>
                    <button className="confirmationButton" onClick={ () => this.filterSports(this.state.userInput) }> Filter </button>
                    <span className="puzzleText"> Sports: { JSON.stringify(this.state.sports, null, 10) } </span>
                    <span className="resultsBox filterStringRB"> Filtered Sports: { JSON.stringify(this.state.filteredSports, null, 10) } </span>
                </div>    
                )
            }  
        }
    

export default FilterString; 