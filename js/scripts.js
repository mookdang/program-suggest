$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const q1 = $("select#q1").val();
    const q2 = $("select#q2").val();
    const q3 = $("select#q3").val();
    const q4 = $("select#q4").val();
    const q5 = $("select#q5").val();

    $("langauage").text(answer);
    $("#answer").show();

    event.preventDefault();
  });
});