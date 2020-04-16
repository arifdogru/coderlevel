import React, { Fragment } from 'react'
import logo from './logo.svg';
import './App.css';

import AceEditor from "react-ace";
 
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

const exampleCode = "import java.util.*";
 
class App extends React.Component {
  state = { code: exampleCode }


  onValueChange = code => {
    this.setState({ code })
    console.log("Value Change");
  }



  render() {
  return (
    <div className="App">
      <div className="col-12" style = { {backgroundColor: '#b9a4a4'}}>
        <h1>CODER LEVEL</h1>

      </div>
        <div className = "row">
        <hr></hr>
        <br/>
        <div className="col-4"> 
          <div className = "App-leftMenu"> 
            <p> PROBLEM </p>
            <br/>
            <a>Most HackerRank challenges require you to read input from stdin (standard input) and write output to stdout (standard output).

              One popular way to read input from stdin is by using the Scanner class and specifying the Input Stream as System.in. For example:
              <br/>
              <a style = {{backgroundColor: '#e7eeef', color:'#0e141e'}}>
              Scanner scanner = new Scanner(System.in);
              String myString = scanner.next();
              int myInt = scanner.nextInt();
              scanner.close();
              

              System.out.println("myString is: " + myString);
              System.out.println("myInt is: " + myInt);
              </a>
              The code above creates a Scanner object named  and uses it to read a String and an int. It then closes the Scanner object because there is no more input to read, and prints to stdout using System.out.println(String). So, if our input is:

              Hi 5
              Our code will print:

              myString is: Hi
              myInt is: 5
              Alternatively, you can use the BufferedReader class.

              Task
              In this challenge, you must read  integers from stdin and then print them to stdout. Each integer must be printed on a new line. To make the problem a little easier, a portion of the code is provided for you in the editor below.

              Input Format

              There are  lines of input, and each line contains a single integer.

              Sample Input

              42
              100
              125
              Sample Output

              42
              100
              125</a>
          </div>
        </div>
        <div className="col" > 

          <AceEditor
            placeholder="Placeholder Text"
            mode="java"
            theme="monokai"
            name="blah2"
            onLoad={this.onLoad}
            onChange={this.onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={this.state.code}
            width={"900px"}
            setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: false,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 4,
          }}/>
          <br></br>
          <button type="button" className="btn">Run Code</button>
          <button type="button" className="btn btn-success">Submit Code</button>
        </div> 
      </div>
    </div>
  ); }
}
export default App;
