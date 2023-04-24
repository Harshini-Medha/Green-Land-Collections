function Logout() {
  localStorage.removeItem("user");
  window.location.href = "http://127.0.0.1:5500/";
}





function GST() {
  let a=Number(document.getElementById("base").value)
let b=Number(document.getElementById("Gst").value)
  let tax = a / 100;
  let deducted = tax * b;
   let tt= a + deducted;
   document.getElementById("H3").innerText="the Total Price is " +tt
}




function Discount() {
  

  let c=document.getElementById("total").value
let d=document.getElementById("dis").value


  let tax = c / 100;
  let deducted = tax * d;
  let td= c- deducted;
  document.getElementById("H4").innerText="the Discounted Price is " + td

 
}

