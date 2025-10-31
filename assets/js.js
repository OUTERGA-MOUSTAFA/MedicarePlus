tailwind.config = {
    theme: {
      extend: {
        colors: {
          mainblue: '#1E40AF',
        },
      },
    },
}
// ----------------------- Burguer manu open----------------
function OpenNav(){
    let openMe = document.querySelector(".open")
    openMe.classList.remove("hidden")
    document.querySelector(".burger").classList.add("hidden")
}
//----------------------- Burguer manu close----------------
function CloseNav(){
    let closeMe = document.querySelector(".open")
    closeMe.classList.add("hidden")
    document.querySelector(".burger").classList.remove("hidden")
}
// ---------------owl carousel--------------
$(document).ready(function(){
  let my_carousel = $(".owl-carousel").owlCarousel({
    loop: true,
    dots:true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
  });

  $(".btn1").click(function() {
    my_carousel.trigger('prev.owl.carousel');
  });

  $(".btn2").click(function() {
    my_carousel.trigger('next.owl.carousel');
  });

});
//------------ event botton submet rendez-vous ------------
function handleFormSubmit(e) {
  e.preventDefault();

  array.forEach(element => {
    
  });
  alert("Votre demande de rendez-vous a été envoyée !");
}
//------------ Rendez vous ------------------------



console.log("test ok")