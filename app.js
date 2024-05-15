$(document).ready(function(){

    $("form").on("submit", function(e){
        //stop submitting form
        e.preventDefault();
        //show the result
        $(".display-data").show();
        $(".relation-derived").show();
        $(".rules-derived").show();
    });
  
  });