
$(document).ready(function () {
    const settings = {
        fill: "#F36F21",
        background: "#d7dcdf"
    },
        sliders = document.querySelectorAll(".range-slider");

    function applyFill(t) {
        const e = 100 * (t.value - t.min) / (t.max - t.min),
            n = `linear-gradient(90deg, ${settings.fill} ${e}%, ${settings.background} ${e + .1}%)`;
        t.style.background = n
    }
    Array.prototype.forEach.call(sliders, t => {
        t.querySelector("input").addEventListener("input", e => {
            t.querySelector("span").innerHTML = e.target.value, applyFill(e.target)
        }), applyFill(t.querySelector("input"))
    });
    

    $('.tips-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        // navText: ["<p>prev</p>","<p>next</p>"],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })


    $('.become-partner-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        navText: ["<p>prev</p>","<p>next</p>"],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })
});