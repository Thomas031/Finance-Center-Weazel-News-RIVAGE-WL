import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIN1hSz0V3bnq8yKVjZ6AFBh-NY08qN3I",
  authDomain: "weazel-news-finance-center.firebaseapp.com",
  projectId: "weazel-news-finance-center",
  storageBucket: "weazel-news-finance-center.firebasestorage.app",
  messagingSenderId: "1064069702125",
  appId: "1:1064069702125:web:cc68a97754de38e85987e4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
