import Firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD_fvTu1flIhKqIw_abDY5UM4HRLwTjNcI",
	authDomain: "khadyo-32bef.firebaseapp.com",
	projectId: "khadyo-32bef",
	storageBucket: "khadyo-32bef.appspot.com",
	messagingSenderId: "520430227358",
	appId: "1:520430227358:web:f09a7ced2bcfee8a32108f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export { firebase };
