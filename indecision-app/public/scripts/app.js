'use strict';

function square(x) {
   return x * x;
};

console.log(square(3));

var squareArrow = function squareArrow(x) {
   return x * x;
};

console.log(squareArrow(4));

var squareArrow2 = function squareArrow2(x) {
   return x * x;
};

console.log(squareArrow2(4));

var getFirstName = function getFirstName(fullName) {
   return fullName.split(' ')[0];
};

console.log(getFirstName('Luis Bilecki'));

var getFirstNameArrow = function getFirstNameArrow(fullName) {
   return fullName.split(' ')[0];
};

console.log(getFirstNameArrow('Luis Bilecki'));
