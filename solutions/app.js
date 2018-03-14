$(document).ready(function() {

    // Color changes

    $("#change-red").on("click", function() {
        $("#red-div").css("background-color", "red");
    });

    $("#change-green").on("click", function() {
        $("#green-div").css("background-color", "green");
    });

    $("#change-blue").on("click", function() {
        $("#blue-div").css("background-color", "blue");
    });

    // Size changes

    $("#make-big").on("click", function() {
        $("#big-div").css({
            "width": "+=100px",
            "height": "+=100px"
        });
    });

    $("#make-small").on("click", function() {
        $("#small-div").css({
            "width": "-=100px",
            "height": "-=100px"
        });
    });

    $("#animate-div").on("click", function() {
        $("#animated-div").addClass("animate");
    });

    $("#create-overlay").on("click", function() {
        // $("#overlay").css("display", "block");
        $("#overlay").show();
    });

    $("#overlay").on("click", function() {
        // $("#overlay").css("display", "none");
        $(this).hide();
    });

});
