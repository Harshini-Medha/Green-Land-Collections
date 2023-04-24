function Login(event) {
  event.preventDefault();
  let a = document.getElementById("User").value;
  let b = document.getElementById("mail").value;
  let c = document.getElementById("pass").value;

  if (a == "Harshini_Medha" && b == "root123@gmail.com" && c == "12345") {
    localStorage.setItem("user", "harshini");
    window.location.href = "https://green-land-collections.vercel.app/dash.html";
  }
  else{
    alert("wrong Password or username")
  }
}

function Verify() {
  let x = localStorage.getItem("user") === "harshini";

  if (x) {
    window.location.href = "https://green-land-collections.vercel.app/dash.html";
  } else {
  }
}

Verify();

function Verifypas() {
  let a = document.getElementById("pass");



  if (a.type === "password") {
    a.type = "text";
  } else {
    a.type = "password";
  }
}
