$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const q1 = $("select#q1").val();

    if (q1 === 'a1' && q1 !== 'a2' && q1 !== 'a3') {
      let answer = "Ruby";
   } else if (q1 !== 'a1' && q1 === 'a2' && q1 !== 'a3') {
      answer = "C";
    


      $("#langauage").text(answer);
      $("#answer").show();
    }
    event.preventDefault();
  });
});