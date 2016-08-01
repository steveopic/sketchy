$(document).ready(function(){
var element = $("#html-content-holder"); // global variable
var getCanvas; // global variable
var imageUrl;
 

    
    $("#btn-Preview-Image").on('click', function () {
         html2canvas(element, {
         onrendered: function (canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas;
             }
         });
    });
    $("#change").click(function(){
        var imageUrl = prompt("Enter the URL of an image you want to color on.") 
        $('#SketchPad').css('background-image', 'url(' + imageUrl + ')');
    });

   $(function() {
        $.each(['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#000', '#fff', '#630',  '#d71'], function() {
          $('#myCanvas .tools #color').append("<div><a href='#SketchPad' data-color='" + this + "' style='width: 10px; background: " + this + ";'></a> </div>");
        });
        $.each([3, 5, 10, 15], function() {
          $('#myCanvas .tools #size').append("<a href='#SketchPad' data-size='" + this + "' style='background: #ccc'>" + this + "</a> ");
        });
        $('#SketchPad').sketch();
    });
    
});
