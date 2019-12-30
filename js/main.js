


// switch out font
$window = $(window);

// var distance = $('#1').offset().top;

// console.log(Math.floor($('#1').offset().top));
// console.log(Math.floor($("#1").offset().top + $("#1").outerHeight()))

// $(window).scroll(function() {
//     // console.log($(this).scrollTop());
//     var position = $(this).scrollTop();
//     var section1Top = Math.floor($('#section-1').offset().top);
//     var section1Bottom = Math.floor($("#section-1").offset().top + $("#section-1").outerHeight());
//     var section2Top = Math.floor($('#section-2').offset().top);
//     var section2Bottom = Math.floor($("#section-2").offset().top + $("#section-2").outerHeight());

//     if ( position >= section1Top && position <= section1Bottom) {
//         console.log('1 is in top');
//     }
// });

// sectionPositions = []

// for (let x = 1; x < 3; x++) {
//     var sectionTop = Math.floor($("#section-" + x).offset().top);
//     console.log("top:" + sectionTop);
//     var sectionBottom = Math.floor($("#section-" + x).offset().top + $("#section-" + x).outerHeight());
//     console.log(x);
//     sectionPositions.join()
// }

window.onscroll = function() {
    stickyNav()
};

var nav = document.getElementsByTagName("nav")[0];
var main = document.getElementsByTagName("main")[0];
var sticky = nav.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
    main.style.paddingTop = '200px';
  } else {
    nav.classList.remove("sticky");
    main.style.paddingTop = '0';
  }
}

// $(window).scroll(function() {
//     var position = $(this).scrollTop();
//     for (let x = 1; x < 10; x++) {
//         var sectionTop = Math.floor($("#section-" + x).offset().top);
//         // console.log("top:" + sectionTop);
//         var sectionBottom = Math.floor($("#section-" + x).offset().top + $("#section-" + x).outerHeight());
//         // console.log(x);
//         if (position >= sectionTop && position <= sectionBottom) {
//             console.log(x + ' is in top');
//             $('#title h1, #title h2').attr('id', 'font-' + x);
//         }
//     }
// });


function imageViewer(img) {
    // console.log('hello');
    // console.log(img.src);
    var image_viewer = document.getElementById("image-viewer");
    var image_viewer_img = document.getElementById("image-viewer-img");
    // var images = document.getElementsByTagName("img");

    // [].slice.call(images).forEach(function ( img ) {
    //     // var img = document.getElementById("myImg");
    //     var image_viewer_img = document.getElementById("image-full");
    //     // var caption_text = document.getElementById("caption");

    //     console.log(img);
    //     img.onclick = function() {
            // image_viewer.style.display = "block";
            // image_viewer_img.src = this.src;
            // caption_text.innerHTML = this.alt;
    //     }
    // });

    image_viewer.style.display = "block";
    image_viewer_img.src = img.src;
    // img.style.zIndex = "-1";

    img.onmouseout = function() { 
        image_viewer.style.display = "none";
        // img.style.zIndex = "1";
    }
}