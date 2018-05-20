import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  constructor() {
    this.name = "LUIS";
    this.getGreeting = this.getGreeting().bind(this);
  }

  getGreeting() {
    return `Hi. My name is ${this.name}`;  
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

// ----

class NewSyntax {
  name = 'Felipe'

  newGetGreeting = () => {
    return `Hi. My name is ${this.name}`;  
  }
}

const newSyntax = new NewSyntax();
console.log(newSyntax.newGetGreeting());
