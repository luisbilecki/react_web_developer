import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
/*
// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 976123498763
});

// Setup "expenses" with three items (description, note, amount, createdAt)
/*
database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 976123498763
});

database.ref('expenses').push({
  description: 'Phone bill',
  note: '',
  amount: 5900,
  createdAt: 976123498763
});

database.ref('expenses').push({
  description: 'Food',
  note: '',
  amount: 1200,
  createdAt: 976123498763
});
*/

// Fetching data from firebase
// database.ref().on('value', (snapshot) => {
  // const val = snapshot.val();
  // console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

/*
database.ref().set({
  name: 'Luis F. Bilecki',
  age: 25,
  stressLevel: 6,
  job: {
    title: 'Fullstack developer',
  },
  isSingle: true,
  location: {
    city: 'Rio Negrinho',
    country: 'Brazil'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
});

 database.ref().set('This is my data.');

database.ref('age').set(25);
database.ref('location/city').set('Joinville');

database.ref('attributes').set({
  height: 175,
  weight: 69
}).then(() => {
  console.log('Second set call worked.');
}).catch((e) => {
  console.log('Things didnt for the second error', e);
});

database
  .ref('attributes')
  .remove()
  .then(() => {
    console.log('Attributes remove from database');
  }).catch((e) => {
    console.log('Did not remove data', e);
  });


database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

database
  .ref()
  .remove()
  .then(() => {
    console.log('Data was removed');
  }).catch((e) => {
    console.log('Did not remove data', e);
  });

// console.log('I made a request to change the data.');

*/
