$("button").click(function(){
    $("h1").css("color","purple");
});

$("button.dont").text("DON'T YOU DARE CLICK ON ME");

$("button.dont").click(function(){
    $("h1").text("YOU HAVE BALLS, MOTHERFUCKER");
    $("h1").css("color","red");
    $("h1").css("fontSize","8rem");
});

// $("input").keypress(function(event){
//     $("h1").html(event.key);
// });
//PRAVO RJESENJE
$("body").keypress(function(event){
         $("h1").html(event.key);
     });    