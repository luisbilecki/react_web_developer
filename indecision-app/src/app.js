import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';

console.log(validator.isEmail('test@gmail.com'));

const template = React.createElement('p', {}, 'testing 123');

ReactDOM.render(template, document.getElementById('app'));