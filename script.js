function a() {
    e(".menu-toggle").animate({
        right: "0",
        height: "0%"
    }), e(".menu-toggle").css({
        left: "auto"
    }), sessionStorage.setItem("isSearchOpen", "false"), document.documentElement.style.overflowY = "scroll", document.getElementById("gray-screen").style.opacity = "0", setTimeout(() => {
        document.getElementById("gray-screen").style.display = "none"
    }, 500)
}

function s() {
    "use strict";
    var s = e("#menuBtnToggle"),
        n = e("#quik-search-remove");
    s.on("click", function() {
        "false" === sessionStorage.getItem("isSearchOpen") ? (e(".menu-toggle").animate({
            height: "70%"
        }), e(".menu-toggle").delay(0).css({
            left: "0"
        }), document.getElementById("searchBar").focus(), sessionStorage.setItem("isSearchOpen", "true"), document.documentElement.style.overflow = "hidden", document.getElementById("gray-screen").addEventListener("click", a), document.getElementById("gray-screen").style.display = "flex", setTimeout(() => {
            document.getElementById("gray-screen").style.opacity = "1"
        }, 0)) : a()
    }), n.on("click", a)
}