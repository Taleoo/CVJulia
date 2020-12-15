$(document).ready(function () {
  $('#submitButton').click(function (e) {
    e.preventDefault();
    let nom = $('#nom').val();
    let message = $('#message').val();
    let email = $('#email').val();
    let telephone = $('#telephone').val();
    let prenom = $('#prenom').val();
    $.ajax
      ({
        type: "POST",
        url: "form.php",
        data: { "nom": nom, "prenom": prenom, "email": email, "telephone": telephone, "message": message },
        success: function (data) {
          $('#contactForm').remove();
          $('#contact').append("<h2 id='h1submit'>Merci d'avoir envoyé un message</h2>");
        },
        error: function () {
          alert("Problème d'envoi")
        }
      });
  });
});