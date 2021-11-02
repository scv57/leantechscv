function visibilidad_dropdown() {
  $("#dropdown-ciudades").css("visibility", "visible");
};

var json_cities = '[{"name" : "miami"}, {"name" : "bogota"}, {"name" : "paris"}, {"name" : "londres"}, {"name" : "tokio"}, {"name" : "seul"}, {"name" : "lisboa"}]';

var json_cities_2 = JSON.parse(json_cities);

function createMenuItem(item) {
  var li = document.createElement('li');
  var tag = document.createElement('a');
  var city_name = item;
  var city = document.createTextNode(city_name);

  $(tag).attr('class', 'dropdown-item');
  var funcion_carta = "generacion_carta(";
  funcion_carta = funcion_carta + "'" + item.toLowerCase() + "'" + ")";
  $(tag).attr('onclick', funcion_carta);
  tag.appendChild(city);
  tag.title = city;

  li.appendChild(tag);

  return li;
}

var dropdown = document.getElementById('dropdown-menu-1');

for (var i = 0; i < json_cities_2.length; i++) {

  const str1 = json_cities_2[i].name;
  const str2 = str1.charAt(0).toUpperCase() + str1.slice(1);

  dropdown.appendChild(createMenuItem(str2));
}

var tamano_pantalla = $(window).height();

$(".barra-lateral").css("height", tamano_pantalla);
