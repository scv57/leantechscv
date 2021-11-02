var city;
var um;

function generacion_carta(ciudad) {
  city = ciudad;
  carta(city);
  $(".tarjeta").css("visibility", "visible");
}

function carta(ciudad, um = "metric") {
  var requestcity = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + um + "&appid=589562f8513b3381d4270d0b44163d19";
  var requestcityfixed = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + "metric" + "&appid=589562f8513b3381d4270d0b44163d19";

  $.get(requestcity, function( data ) {
    //console.log(Object.values(data));
    var datos = Object.values(data);
    //console.log(datos[3].temp);

    const str1 = ciudad;
    const str2 = str1.charAt(0).toUpperCase() + str1.slice(1);

    var t = datos[3].temp;

    $('.nombre_ciudad').text(str2);
    $('.temperatura').text(datos[3].temp + "°");
  });

  $.get(requestcityfixed, function( data2 ) {
    var datos2 = Object.values(data2);

    var t2 = datos2[3].temp;

    if (t2 <= 19) {
      $('#timage').attr('src', 'img/icons/coldWeather.svg');
    } else if (t2 > 19 && t2 < 26) {
      $('#timage').attr('src', 'img/icons/warmWeather.svg');
    } else if (t2 >= 26){
      $('#timage').attr('src', 'img/icons/hotWeather.svg');
    }
  });
}

function temperatura(idcarta) {
  var unidadmedida = document.getElementById(idcarta);

  if (unidadmedida.value == "C") {
    carta(city, "metric");
  } else if (unidadmedida.value == "F") {
    carta(city, "imperial");
  } else if (unidadmedida.value == "K") {
    carta(city, "standard");
  }
}

function updateCart(idcarta) {
  var idelement = document.getElementById(idcarta);

  carta(city, um);
}
