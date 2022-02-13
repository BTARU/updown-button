"use strict";

window.addEventListener("scroll", function () {
    if (scrollY > document.documentElement.clientHeight) {
        arrowTop.hidden = false;
    } else arrowTop.hidden = true;
});

arrowTop.addEventListener("click", scrollToTop);

function scrollToTop(event) {
    let targetElem = event.target.closest("#arrowTop");

    if (targetElem) {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
}
