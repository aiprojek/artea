/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

//Kontak WhatsApp
function redirectToWhatsApp() {
  /* Isi Pesan Form */
  var name = document.getElementById("cName").value;
  var email = document.getElementById("cEmail").value;
  var subject = document.getElementById("cSubject").value;
  var massage = document.getElementById("cMessage").value;
  var postLink = window.location.href;
  
  /* validation */
  var error_name = document.getElementById("error_name"),
      error_email = document.getElementById("error_email"),
  	  error_message = document.getElementById("error_message");
  
  var text;
  if (name == "") {
    text = 'Please enter your name';
    error_name.setAttribute('data-text', text);
    return false;
  } 

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = 'Please enter valid email';
    error_email.setAttribute('data-text', text);
    return false;
  }

  if (massage == "") {
    text = 'Please enter your Massage';
    error_message.setAttribute('data-text', text);
    return false;
  }
  /* Pengaturan Pesan */
  var message = "Pesan baru dari " + name + "\n\n"; // Pesan Pembuka
  message += "*Nama:* " + name + "\n";
  message += "*Email:* " + email + "\n";
  message += "*Subjek:* " + subject + "\n";
  message += "*Pesan:* " + massage + "\n\n";
  message += "=============================" + "\n";
  message += "*Dari:* " + postLink + "\n";
  message += "=============================";
  /* Pengaturan Whatsapp */
  var walink = 'https://web.whatsapp.com/send',
      phoneNumber = '6281225879494'; // No Whatsapp
  
  var encodedMessage = encodeURIComponent(message);
  var whatsappUrl = walink + "?phone=" + phoneNumber + "&text=" + encodedMessage;
  window.open(whatsappUrl, '_blank');
  return true;
}

var inputs = document.querySelectorAll('.Fcontrol input[type=text], .Fcontrol input[type=email], .Fcontrol textarea');
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  input.addEventListener('input', function() {
    var bg = this.value ? 'show' : 'none';
    this.setAttribute('class', bg);
  });
}
