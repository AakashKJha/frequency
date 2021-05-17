import React, { Component } from 'react'

export class DataContent extends Component {
   
  constructor() {
    super();
    this.state = {
      data: '',
    }
  }
  

  componentWillMount() {

    const request = require('request');
    request('https://raw.githubusercontent.com/invictustech/test/main/README.md',
     function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
    const ConsoleLog = ({ children }) => {
        console.log(children);
        return false;
      };
  }


    render() {
        return (
            <div>
                 <h1>Data List of Words</h1>
                 <input placeholder="number"></input>
                 <button onClick="">Submit</button>
                 <p> {} </p>
            </div>
        )
    }
}

export default DataContent
