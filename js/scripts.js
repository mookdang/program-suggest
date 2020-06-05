$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const q1 = $("select#q1").val();
    const q2 = $("select#q2").val();

      if (q1 === 'a1' && q1 !== 'a2' && q1 !== 'a3') {
        answer = "Ruby";
      } else if (q1 !== 'a1' && q1 === 'a2' && q1 !== 'a3') {
        answer = "C";  
      } else if (q1 !== 'a1' && q1 !== 'a2' && q1 === 'a3') {
        answer = "Java";
      } 

      if (q2 === 'a1' && q2 !== 'a2' && q2 !== 'a3') {
        answer = "Ruby";
      } else if (q2 !== 'a1' && q2 === 'a2' && q2 !== 'a3') {
        answer = "C";  
      } else if (q2 !== 'a1' && q2 !== 'a2' && q2 === 'a3') {
        answer = "Java";
      } 

      $("#langauage").text(answer);
      $("#answer").show();

    event.preventDefault();
  });
});