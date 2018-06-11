"use strict"


var url = "article.php";
var button = $("#run")


button.on("click",function() {

    $.get(url,function(html){

    $(".article").html(html);
    
    });
});



