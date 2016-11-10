(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the articles section! */
    // DONE
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.articleController = articleController;
})(window);
