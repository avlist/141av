$.get('/db.json', function(data) {
  $.each(data.type, function(index, value) {
    if(value.html) {
      html = '<div class="col-xl-' + value.size + '">' + value.html + '</div>';
    } else {
      html = '<div class="col-xl-3"><div class="card"><div class="card-body"><h5 class="card-title"><strong>' + value.name + '</strong></h5><ol class="scroll">';
      $.each(value.list, function(index, value) {
        html += '<li class="card-text">';
        if(value.favicon) {
          html += '<img src="' + value.favicon + '" alt="' + value.name + '" height="16" width="16">';
        }
        html += '<a href="' + value.url + '" data-toggle="tooltip" data-placement="bottom" title="' + value.description + '" target="_blank" rel="noopener">' + value.name + '</a>';
        if(value.feature === true) {
          html += '<span class="badge badge-pill badge-warning">💎AD</span>';
        }
        html += '</li>';
      });
      html += '</ol></div></div></div>';
    }
    $('.row').append(html);
  });
  $('[data-toggle="tooltip"]').tooltip();
  $('.row').append('<div class="col-xl-12 footer">&copy; <a href="https://141av.cf/" target="_blank" rel="noopener">141AV</a>. All rights reserved.</div>');
}).fail(function() {
  html = '<div class="col-xl-12">Error establishing a database connection</div>';
  $('.row').append(html);
});

if('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('Service worker registration succeeded:', registration);
    }, /*catch*/ function(error) {
      console.log('ServiceWorker registration failed:', error);
    });
  });
} else {
  console.log('Service workers are not supported.');
}
