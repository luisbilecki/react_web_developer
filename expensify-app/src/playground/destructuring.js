/*
const person = {
    age: 24,
    location: {
        city: 'Rio Negrinho',
        temp: 23
    }
}

const { firstName:name = 'Anonymous', age } = person;

// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age} years old.`);

const { city, temp:temperature } = person.location;

if (temperature && city) {
    console.log(`It's ${temperature}°C in ${city}.`);
}
*/

const book = {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    publisher: {
        //name: 'Doubleday'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName);