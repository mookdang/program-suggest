$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const q1 = $("select#q1").val();

      if (q1 === 'a1' && q1 !== 'a2' && q1 !== 'a3') {
        answer = "Ruby. Ruby is"
      } else if (q1 !== 'a1' && q1 === 'a2' && q1 || 'a3') {
        answer = "Javascript";  
      } else if (q1 !== 'a1' && q1 !== 'a2' && q1 === 'a3') {
        answer = "C#"
      }

      $("#langauage").text(answer);
      $("#answer").show();

    event.preventDefault();
  });
});