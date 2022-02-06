const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

//Codigo del mapa con los puntos especificos 

function iniciarMap(){
    var coord1 = {lat:13.705243 ,lng: -89.24231};
    var coord2 = {lat:13.696674 ,lng: -89.197927};
    var coord3 = {lat:14.692511 ,lng: -87.86136};
    var coord4 = {lat:12.022747 ,lng: -86.252007};
    var coord5 = {lat:8.103289 ,lng: -80.596013};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord1
    });

    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord2
    });

    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord3
    });

    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord4
    });

    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord5
    });


    var marker = new google.maps.Marker({
      position: coord1,
      map: map
    });
    var marker = new google.maps.Marker({
      position: coord2,
      map: map
    });
    var marker = new google.maps.Marker({
      position: coord3,
      map: map
    });
    var marker = new google.maps.Marker({
      position: coord4,
      map: map
    });
    var marker = new google.maps.Marker({
      position: coord5,
      map: map
    });


}