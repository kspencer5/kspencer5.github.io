$(document).ready(function() {

//Random Qoute    
  var quote;
  var author;
  
  function getNewQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'        
      },
      success: function(data){
        quote = data.quoteText;
        author = data.quoteAuthor;
        $(".quote").html('"' + quote + '"');
        if(author) {
          $(".author").text("~ " + author);
        }else {
          $(".author").text("~ unknown")
        }
      }
    });
  }
  getNewQuote();
  $(window).load("click", function(){
    getNewQuote();
  });
  $("#tweet").on("click", function(){
    window.open('https://twitter.com/intent/tweet?text=' + quote + author);
    
  });
    
    
});//end of jquery document ready function