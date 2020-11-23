var firebaseConfig = {
    apiKey: "AIzaSyAflViTtW-0warQBj8nCL-uo6583QCi_94",
    authDomain: "contactform-4625a.firebaseapp.com",
    databaseURL: "https://contactform-4625a.firebaseio.com",
    projectId: "contactform-4625a",
    storageBucket: "contactform-4625a.appspot.com",
    messagingSenderId: "486376160117",
    appId: "1:486376160117:web:6b4149b12be4d878fbf13c",
    measurementId: "G-CYX11RZ6LC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


  var messagesRef = firebase.database().ref('messages');


document.getElementsByClassName('leave-comment').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  var name = getInputVal('name');
 

  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var message = getInputVal('message');

  
}
saveMessage(name, phone, email, message);

function getInputVal(id){
    return document.getElementById(id).value;
  }
  function saveMessage(name,  phone, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      phone:phone,
      email:email,
     
      message:message
    });
  }