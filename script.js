const scroller = document.querySelector("#bodySection");

var elementToAppear = document.getElementById("btnApp")
var section1 = document.getElementById("part1")
var heightPage = section1.offsetHeight + section1.offsetTop

elementToAppear.addEventListener('click', function() {
    scroller.scrollTop = 0
})

scroller.addEventListener('scroll', function() {
    if (heightPage > (scroller.scrollTop * 4)) {
        elementToAppear.style.opacity = '0';

    } else {
        elementToAppear.style.opacity = '1';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (heightPage > (scroller.scrollTop * 4)) {
        elementToAppear.style.opacity = '0';
    } else {
        elementToAppear.style.opacity = '1';
    }
});

// items shine homepage

let itemsArr = document.querySelectorAll(".itemAd")
let index = 0

setInterval(function() {
    itemsArr.forEach(function(itemsArrSingle) {
        itemsArrSingle.classList.remove('shineObj')
    });
    itemsArr[index].classList.add('shineObj');

    index = (index + 1) % itemsArr.length
}, 850);

// random images shine 

let itemsArrRev = document.querySelectorAll(".cardImg ")
let numImg;

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 9);

    while (randomNumber == numImg) {
        randomNumber = Math.floor(Math.random() * 9);
    }

    numImg = randomNumber;
    return randomNumber;
}

setInterval(function() {
    itemsArrRev.forEach(function(itemsArrSingleRev) {
        itemsArrSingleRev.classList.remove('cardRevShine')
    });

    let n = getRandomNumber()
    itemsArrRev[n].classList.add('cardRevShine');

}, 850);


// toggle menu on mobile

const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const bodyShadow = document.getElementById('shadow-sidebarID');

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
    bodyShadow.classList.toggle('is-active');
});

// button appears through window