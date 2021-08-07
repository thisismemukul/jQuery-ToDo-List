$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
    //  logic
    // // if li is gray 
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     // turn it black
    //     $(this).css({
    //         color: "#fcfcfc",
    //         textDecoration: "none"
    //     });
    // } else {
    //     // else
    //     // turn it gray
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
});

//deleting ToDo
// $("ul").on("click", "span", function(event) {
//     $(this).parent().fadeOut(500, function() {
//         $(this).remove();
//     });
//     event.stopPropagation();
// });
$("ul").on("click", "span", function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
});

//adding ToDos
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        $(this).val("");
    }
});

//toggle input
$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
});