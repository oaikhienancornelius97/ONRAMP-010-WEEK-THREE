// $(function() {

//     $("form div").append('<div class="inc button">+</div><div class="dec button">-</div>');

// });

// $(".button").on("click", function() {

//     var $button = $(this);
//     var oldValue = $button.parent().find("input").val();
  
//     if ($button.text() == "+") {
//         var newVal = parseFloat(oldValue) + 1;
//       } else {
//      // Don't allow decrementing below zero
//       if (oldValue > 0) {
//         var newVal = parseFloat(oldValue) - 1;
//       } else {
//         newVal = 0;
//       }
//     }
  
//     $button.parent().find("input").val(newVal);
  
//   });

//   var id = $button.attr("id");
// $.ajax({
//   type: "POST",
//   url: "dosomething.php?id=" + id + "&newvalue=" + newVal,
//   success: function() {
//     $button.parent().find("input").val(newVal);
//   }
// });


function Minus(){
    document.getElementById("demo").innerHTML = "4 Persons";
}