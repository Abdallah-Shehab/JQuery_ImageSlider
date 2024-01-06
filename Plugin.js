$(function () {

    $.fn.Slider = function (imgs) {
        var slider = $(".slider")
        var index = 0;
        $(".circle").on("click", function () {
            $(slider).show()
            $(".window").css("background-image", "url(" + imgs[index] + ")");
        })
        $("#close").on("click", function () {
            $(slider).hide()
        })

        $("#next").on("click", function () {

            if (index >= imgs.length - 1) index = -1
            $(".window").css("background-image", "url(" + imgs[++index] + ")");
            console.log(index, imgs[index]);

        })

        $("#prev").on("click", function () {
            if (index <= 0) index = imgs.length
            $(".window").css("background-image", "url(" + imgs[--index] + ")");
            console.log(index, imgs[index]);

        })
    }
})
