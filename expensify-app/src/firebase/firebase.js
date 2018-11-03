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

firebase.database().ref().set({
  name: 'Luis F. Bilecki'
});