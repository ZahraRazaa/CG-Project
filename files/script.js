$(document).ready(function() {

  $("#s-button-one, #s-mail, .s-button-footer").click(function() {
    window.location.href = "contact.html";
  });

  $("#s-button-four").click(function(){
    window.location.href = "exploration.html";
  });

  AOS.init();

  let btn=document.getElementById("s-button-one");
  let mail=document.getElementById("s-mail");

  window.addEventListener("scroll", ()=> {
    let scrollTop= window.scrollY;
    let windowHeight= window.innerHeight;
    let docHeight= document.documentElement.scrollHeight;

    if(scrollTop + windowHeight >= docHeight - 4800){
        btn.style.display="none";
        mail.style.display="block";
    } else {
    btn.style.display = "block";
    mail.style.display = "none";
  }
  })

});

$(document).ready(function () {
    $("#contactForm").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            website: {
                required: true,
                url: true
            },
            message: {
                required: true
            }
        },
        messages: {
                name: {
                    required: "Name is required",
                },
                email: {
                    required: "Email is required",
                    email: "Enter a valid email",
                },
                website: {
                    required: "Website is required",
                    url: "Enter a valid url",
                },
                message: {
                    required: "Message is required",
                },
            },

        errorElement: "label",
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            alert("Form successfully submitted!");
        }
    });
});

$(document).ready(function () {
  $('.faq-question').click(function () {
    $(this).next('.faq-answer').slideToggle(300);
  });
});




