const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBU9k_ma9XG7k1fVp-cRHck0hxLcj9BII4",
  authDomain: "fir-authentication-js.firebaseapp.com",
  projectId: "fir-authentication-js",
  storageBucket: "fir-authentication-js.appspot.com",
  messagingSenderId: "782333483666",
  appId: "1:782333483666:web:61ae26ec63ad5b0597e44b",
});

const auth = firebaseApp.auth();

const email = document.getElementById("emailInput");
const password = document.getElementById("passwordInput");
const signUpBtn = document.getElementById("signUpBtn");
const signInBtn = document.getElementById("signInBtn");

signUpBtn.addEventListener("click", () => {
  console.log(email.value);
  auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      alert(err.message);
    });
});

signInBtn.addEventListener("click", () => {
  auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      alert(err.message);
    });
});
