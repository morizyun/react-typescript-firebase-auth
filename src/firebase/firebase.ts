import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  projectId: "YOUR PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
