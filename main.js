$(function () {

    // First 4 normal image 
    // last will be the center
    var imgs = [
        "./images/image1.jpeg",
        "./images/image6.jpg",
        "./images/image7.jpg",
        "./images/image8.jpg",
        "./images/image2.jpg",
        "./images/image5.png",
        "./images/image3.jpg",
        "./images/image4.jpg",
        "./images/image9.jpeg",
        "./images/center.jpg"
    ];

    // need to pass array of images to function 
    // there must be 4 Divs with class [square]
    // and one Div with class [circle]
    $.fn.Shape = function (imgs) {


        $(this).each(function (index, item) {
            $(item).css("background-image", "url(" + imgs[index] + ")")
        })
        $(".circle").css("background-image", "url(" + imgs[imgs.length - 1] + ")")

    }
    $(".square").Shape(imgs)

    // slider plugin
    $.fn.Slider(imgs);
})

