function mySubmit(){
    alert("Your reservation has been made!!!")
}
var y = 0;
var x = `${y} people`;

document.getElementById("output-area").innerHTML = x;

function Plus() {
    if (y >= 0) {
      ++y;
      if (y === 1) {
        document.getElementById("output-area").innerHTML = `${y} person`;
      } else {
        document.getElementById("output-area").innerHTML = `${y} people`;
      }
    }
  }

  function Minus() {
    if (y > 0) {
      --y;
      if (y === 0) {
        document.getElementById("output-area").innerHTML = `${y} people`;
      } else if (y === 1) {
        document.getElementById("output-area").innerHTML = `${y} person`;
      } else {
        document.getElementById("output-area").innerHTML = `${y} people`;
      }
    }
  }
  function mySubmit1(){
    swal({
   title: "Reservation Successful", 
   text: "Happy Dining!!!!", 
   type: "success"
 },
function(){ 
   location.reload();
}
);
} 