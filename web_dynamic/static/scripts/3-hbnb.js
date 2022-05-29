$('document').ready(function () {
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    type: 'POST',
    data: '{}',
    contentType: 'application/json',
    dataType: 'json',
    success: function (data) {get_username(data);}
  });
  function get_username(data1){
    // console.log('hello from function 1');
    //console.log(data[0].user_id);
    endpoints = [];
    for (let i = 0; i < data1.length; i++)
    {
      endpoint = 'http://0.0.0.0:5001/api/v1/users/' + data1[i].user_id;
      endpoints[i] = endpoint;
    }
    console.log(endpoints);
    for (let i = 0; i < endpoints.length; i++)
    {
      $.ajax({
        url: endpoints[i],
        type: 'GET',
        dataType: 'json',
        success: function(response){
          //console.log(response.first_name);
          var name = response.first_name + ' ' + response.last_name;
          //console.log(name);
          //console.log(data1)
          render_html(name, data1, i);
        }
      });
    }
  }
  function render_html(name, data, i){
      //console.log(name);
      //console.log(data);
      $('section.places').append('<article>' + '<div class="title_box"><h2>' + data[i].name +
      '</h2>\n<div class="price_by_night">$' + data[i].price_by_night +
      '</div>\n</div>\n<div class="information"><div class="max_guest">' + data[i].max_guest +
      ' guests </div>\n<div class="number_rooms">' + data[i].number_rooms +
      ' Bedrooms</div><div class="number_bathrooms">' + data[i].number_bathrooms +
      ' Bathrooms</div>' + '</div>' +
      '<div class="user"><b>Owner: </b>' + name + // data[i].place.user.last_name//
      '</div>' + '<div class="description">' + data[i].description + '</div>'
      );
  }
});
