import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCrifpjLQkEkssL-ytJpt37Hm_KO3UL7AM",
  authDomain: "expensify-react-371ce.firebaseapp.com",
  databaseURL: "https://expensify-react-371ce.firebaseio.com",
  projectId: "expensify-react-371ce",
  storageBucket: "expensify-react-371ce.appspot.com",
  messagingSenderId: "194013643290"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Luis F. Bilecki',
  age: 25,
  isSingle: true,
  location: {
    city: 'Rio Negrinho',
    country: 'Brazil'
  }
});

// database.ref().set('This is my data.');

database.ref('age').set(25);
database.ref('location/city').set('Joinville');

database.ref('attributes').set({
  height: 173,
  weight: 69
});

console.log('I made a request to change the data.');
