(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the articles section! */
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.articleController = articleController;
})(window);


// $('.main-nav').on('click', '.tab', function() {
//   $('.tab-content').hide();
//   $('#' + $(this).data('content')).fadeIn();
// });
// $('.main-nav .tab:first').click();
// };
