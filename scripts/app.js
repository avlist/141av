$.get('/db.json', function(data) {
  $.each(data.type, function(index, value) {
    html = '<div class="col-xl-3"><div class="card"><div class="card-body"><h5 class="card-title"><strong>' + value.name + '</strong></h5><ol class="scroll">';
    $.each(value.list, function(index, value) {
      html += '<li class="card-text">';
      if(value.favicon) {
        html += '<img src="' + value.favicon + '" height="16" width="16">';
      }
      html += '<a href="' + value.url + '" data-toggle="tooltip" data-placement="bottom" title="' + value.description + '" target="_blank">' + value.name + '</a>';
      if(value.feature === true) {
        html += '&nbsp;<span class="badge badge-pill badge-warning">💎AD</span>';
      }
      html += '</li>';
    });
    html += '</ol></div></div></div>';
    $('.row').append(html);
  });
  $('[data-toggle="tooltip"]').tooltip();
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}
