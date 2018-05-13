var nameVar = 'Luis';
var nameVar = 'Felipe';
console.log('nameVar', nameVar);

let nameLet = 'Felipe';
nameLet = 'Júlio';
console.log('nameLet', nameLet);

const nameConst = 'Benjamin';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Johann Carlos';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
