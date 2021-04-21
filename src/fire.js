import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAsAvE1e_3UcQJqVJF-Fh3iv5XHXkz_8-k",
	authDomain: "leafy-ripsaw-245107.firebaseapp.com",
	databaseURL: "https://leafy-ripsaw-245107.firebaseio.com",
	projectId: "leafy-ripsaw-245107",
	storageBucket: "leafy-ripsaw-245107.appspot.com",
	messagingSenderId: "937865852338",
	appId: "1:937865852338:web:6e581ce719bd5bcefb20ab",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const messaging = firebase.messaging();
export const db = firebase.firestore();
