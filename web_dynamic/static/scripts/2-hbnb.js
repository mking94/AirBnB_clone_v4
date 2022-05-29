$('document').ready(function () {
  const ApiUrl = 'http://' + window.location.hostname + ':5001/api/v1/status';
  $.get(ApiUrl, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
