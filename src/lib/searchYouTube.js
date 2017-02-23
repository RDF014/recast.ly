var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: JSON.stringify(Object),
    success: function (data) {
      console.log('Successs!', data);  
    },
    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('YouTube: Failed to receive message', data);
    }
  });// TODOs
};

window.searchYouTube = searchYouTube;
