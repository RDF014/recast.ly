

var searchYouTube = (options, callback) => {
  console.log('inside Search You Tube');
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: { 
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    timeout: 500,
    success: function (data) {
      console.log('Successs!', data);
      callback(data.items);
    },
    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('YouTube: Failed to receive message', data);
    }
  });// TODOs
};

// var searchYouTube = (options, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: options.key,
//     q: options.query,
//     maxResults: options.max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//   .done(function(data) {
//     console.log(data);
//     callback(data);
//   });
// };

window.searchYouTube = searchYouTube;