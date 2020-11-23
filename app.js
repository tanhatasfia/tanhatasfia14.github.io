var firebaseConfig = {
    apiKey: "AIzaSyD82GY3MZ8tQMijOdMGaJv-D69hq13oc_c",
    authDomain: "test-34cf0.firebaseapp.com",
    databaseURL: "https://test-34cf0.firebaseio.com",
    projectId: "test-34cf0",
    storageBucket: "test-34cf0.appspot.com",
    messagingSenderId: "997964262836",
    appId: "1:997964262836:web:27620190aa0ef9e56296e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}