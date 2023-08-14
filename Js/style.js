// preloader
$(window).on("load", function() {
    $("#status").fadeOut();
    $("#preloader").delay(250).fadeOut("slow");
  });

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

// MAP
 $(window).on('load',function(){
   // MAP VARIABLES
 var addressString ='230 Broadway, NY,New York 10007,USA';
 var myLatLong = {lat:40.712685, long:-74.005920};
 // 1. RENDER GOOGLE MAP
 var map = new google.maps.Map(document.getElementById('map'), {
   zoom:11,
   center:myLatLong
 });

 });