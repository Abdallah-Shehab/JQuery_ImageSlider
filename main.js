$(function () {

    // First 4 normal image 
    // last will be the center
    var imgs = [
        "./images/image1.jpeg",
        "./images/image2.jpg",
        "./images/image3.jpg",
        "./images/image4.jpg",
        "./images/center.jpg"
    ];

    // need to pass array of images to function 
    // there must be 4 Divs with class [square]
    // and one Div with class [circle]
    $.fn.Shape = function (imgs) {


        $(this).each(function (index, item) {
            $(item).css("background-image", "url(" + imgs[index] + ")")
        })
        $(".circle").css("background-image", "url(" + imgs[4] + ")")

    }
    $(".square").Shape(imgs)

    $.fn.Slider = function (imgs) {
        var slider = this
        $(".circle").on("click", function () {
            $(slider).show()
            $(".window").css("background-image", "url(" + imgs[4] + ")");
        })
        $("#close").on("click", function () {
            $(slider).hide()
        })
        var index = 0;
        $("#next").on("click", function () {
            if (index < imgs.length) {
                console.log(index, imgs[index]);
                $(".window").css("background-image", "url(" + imgs[index] + ")");
                if (index == 4) index = -1
                index++;
            }
        })

        $("#prev").on("click", function () {
            if (index > -1) {
                console.log(index, imgs[index]);
                $(".window").css("background-image", "url(" + imgs[index] + ")");
                if (index == 0) index = 5
                index--;
            }
        })
    }
    $(".slider").Slider(imgs);
})

