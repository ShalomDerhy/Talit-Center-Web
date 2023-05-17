// button appears through window

var elementToAppear = document.getElementById("btnApp")
var section1 = document.getElementById("part1")
var heightPage = section1.offsetHeight + section1.offsetTop

window.addEventListener('scroll', function() {
    if (heightPage > (window.scrollY * 4)) {
        elementToAppear.style.opacity = '0';

    } else {
        elementToAppear.style.opacity = '1';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (heightPage > (window.scrollY * 4)) {
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

// swiper settings

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        570: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        620: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 3,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 4,
        }

    }
});

// skeleton reviews

//Clone the card template
const containerRev = document.querySelector(".review-sec");
const cardTemplateRev = document.getElementById("card-template-review");
for (let i = 0; i < 4; i++) {
    containerRev.append(cardTemplateRev.content.cloneNode(true));
}

fetch("data-reviews.json")
    .then((response) => response.json())
    .then((posts) => {
        containerRev.innerHTML = "";
        posts.forEach((review) => {
            const div = cardTemplateRev.content.cloneNode(true);
            div.getElementById("review-desc").textContent = review.desc;
            div.getElementById("profile-pic").src = review.profilePic;
            div.getElementById("name-review").textContent = review.header;
            div.getElementById(
                "rating"
            ).innerHTML = `<i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                `;
            containerRev.append(div);
        });
    });

// skeleton branches

//Clone the card template
const container = document.querySelector(".branchesMain");
const cardTemplate = document.getElementById("card-template");
for (let i = 0; i < 3; i++) {
    container.append(cardTemplate.content.cloneNode(true));
}

fetch("data.json")
    .then((response) => response.json())
    .then((posts) => {
        container.innerHTML = "";
        posts.forEach((post) => {
            const div = cardTemplate.content.cloneNode(true);
            div.getElementById("street-address").textContent = post.street;
            div.getElementById("card-title").textContent = post.title;
            div.getElementById("card-details").textContent = post.details;
            div.getElementById("cover-img").src = post.coverImage;
            div.getElementById("card-link").href = post.footer;
            div.getElementById(
                "card-footer"
            ).innerHTML = `
                     ראה במפה<i class="fa fa-location-arrow" aria-hidden="true"></i>`;
            container.append(div);
        });
    });

// skeleton products

//Clone the card template
const containerShop = document.querySelector(".swiper-cont");
const cardTemplateShop = document.getElementById("shop-card-temp");
for (let i = 0; i < 6; i++) {
    containerShop.append(cardTemplateShop.content.cloneNode(true));
}

fetch("data-shop.json")
    .then((response) => response.json())
    .then((posts) => {
        containerShop.innerHTML = "";
        posts.forEach((post) => {
            const div = cardTemplateShop.content.cloneNode(true);
            div.getElementById("item-price").textContent = post.priceProduct;
            div.getElementById("header-item").textContent = post.titleProduct;
            div.getElementById("product-image").src = post.thumbImage;
            div.getElementById("card-link-product").href = post.footerShop;
            div.getElementById(
                "card-footer-product"
            ).innerHTML = `<i class="fa fa-shopping-bag"
                                             aria-hidden="true"></i>
                                         ראה בחנות`;
            containerShop.append(div);
        });
    });

// images skeleton

//Clone the card template
const containerHome = document.querySelector(".cont-home");
const cardTemplateHome = document.getElementById("home-page-temp");
for (let i = 0; i < 9; i++) {
    containerHome.append(cardTemplateHome.content.cloneNode(true));
}

fetch("home-page.json")
    .then((response) => response.json())
    .then((posts) => {
        containerHome.innerHTML = "";
        posts.forEach((post) => {
            const div = cardTemplateHome.content.cloneNode(true);
            div.getElementById("imgHomeIcon").src = post.imgProduct;
            div.getElementById("subImgText").textContent = post.textProduct;
            containerHome.append(div);
        });
    });

// swiper gallery

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    spinner: 'grid',
    ratio: '1x1',
    popup: true,
    navigation: true,
    navKeyboard: true,
    navSpeed: 200,
    titleStyle: 'bar'
});