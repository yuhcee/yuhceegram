import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: 'AIzaSyDh24KwO_M6mgmew8GrSbFlrCiY3ANxCls',
  authDomain: 'yuhceegram.firebaseapp.com',
  projectId: 'yuhceegram',
  storageBucket: 'yuhceegram.appspot.com',
  messagingSenderId: '898422107696',
  appId: '1:898422107696:web:62782623906274504b47f5',
  measurementId: 'G-24YVTQMGD4',
};
// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

const { fieldValue } = Firebase.firestore;
// seedDatabase(firebase);

export { firebase, fieldValue };
