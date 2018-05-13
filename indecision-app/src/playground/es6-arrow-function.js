function square(x) {
   return x * x;
};

console.log(square(3));

const squareArrow = (x) => {
  return x * x;
};

console.log(squareArrow(4));

const squareArrow2 = (x) => x * x;

console.log(squareArrow2(4));

const getFirstName = (fullName) => {
   return fullName.split(' ')[0];
};

console.log(getFirstName('Luis Bilecki'));

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow('Luis Bilecki'));
