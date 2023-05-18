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