  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getDatabase,ref, set,get, child } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCqrkFuZp6hOmsy1BbbHHhTKK6kewG8Cxw",
    authDomain: "portfolio-email-6d7da.firebaseapp.com",
    projectId: "portfolio-email-6d7da",
    storageBucket: "portfolio-email-6d7da.firebasestorage.app",
    messagingSenderId: "446348281878",
    appId: "1:446348281878:web:4f760dddf91f953d334d37"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app)

  document.getElementById('submit').addEventListener('click',function(e){
    set(ref(db, 'contact/' + document.getElementById('username').value),
    {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,


    });
    alert('lasa le izy')
  })