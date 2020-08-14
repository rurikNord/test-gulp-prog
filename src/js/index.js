var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

var sideFide = false;

function generalFunc() {
    var gen = document.querySelector(".general").clientWidth;
    var page = document.querySelector(".page").clientWidth;
    var sideEl = document.querySelector(".sidenav");
    var side = sideEl.clientWidth;
    var wind = document.documentElement.clientWidth;
    if (((page - gen) / 2) < side) {
        sideEl.classList.add("shadow");
    } else {
        sideEl.classList.remove("shadow");
    }
    console.log(gen >= wind);
    if (gen >= wind && (sideFide != true)) {
        window.onresize = null;
        console.log(1)
        sideFide = true;
        hiddenSide(sideEl, 1, 0);
    }

    if (sideFide && gen < wind) {
        sideFide = false;
        console.log(2)
        window.onresize = null;
        wisibleSide(sideEl, 0, -325);
    }

}

function hiddenSide(elem, curent, position) {
    if (curent >= 0) {
        let newPos = position - 32.5;
        elem.style.right = newPos + "px";
        elem.style.opacity = curent - 0.1;
        setTimeout(() => { hiddenSide(elem, curent - 0.1, newPos) }, 50);
    } else {
        window.onresize = function() { generalFunc() };
    }
}

function wisibleSide(elem, curent, position) {
    if (curent <= 1) {
        let newPos = position + 32.5;
        elem.style.right = newPos + "px";
        elem.style.opacity = curent + 0.1;
        setTimeout(() => { wisibleSide(elem, curent + 0.1, newPos) }, 50);
    } else {
        window.onresize = function() { generalFunc() };
    }
}

window.onresize = function() { generalFunc() };