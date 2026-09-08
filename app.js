/* =========================================
   AMAZON TUNISIE - JAVASCRIPT
========================================= */

let cartCount = 0;


/* =========================================
   CART
========================================= */

const cartCounter = document.getElementById("cartCount");

const cartButtons = document.querySelectorAll(".add-cart");

const toast = document.getElementById("toast");


cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;

        showToast(
            "تمت إضافة " +
            button.dataset.product +
            " إلى السلة 🛒"
        );

    });

});


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================================
   FAVORITES
========================================= */

const favoriteButtons =
    document.querySelectorAll(".favorite");


favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.textContent.trim() === "♡") {

            button.textContent = "♥";

            button.style.color = "#e63946";

            showToast("تمت إضافة المنتج إلى المفضلة ❤️");

        } else {

            button.textContent = "♡";

            button.style.color = "#555";

            showToast("تم حذف المنتج من المفضلة");

        }

    });

});


/* =========================================
   CATEGORY FILTER
========================================= */

const categoryLinks =
    document.querySelectorAll("[data-category]");

const productCards =
    document.querySelectorAll(".product-card");

const productsTitle =
    document.getElementById("productsTitle");


categoryLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const category =
            link.dataset.category;

        filterProducts(category);

    });

});


function filterProducts(category) {

    let visibleProducts = 0;

    productCards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

            visibleProducts++;

        } else {

            card.style.display = "none";

        }

    });


    const names = {

        phones: "الهواتف",

        computers: "الحواسيب",

        electronics: "الإلكترونيات",

        cameras: "الكاميرات",

        fashion: "الملابس",

        home: "المنزل",

        gaming: "الألعاب",

        beauty: "الجمال والعناية",

        all: "منتجات مميزة"

    };


    productsTitle.textContent =
        names[category] || "منتجات مميزة";


    if (visibleProducts === 0) {

        showToast("لا توجد منتجات في هذا القسم حالياً");

    }

}


/* =========================================
   SEARCH
========================================= */

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchBtn");


searchButton.addEventListener("click", searchProducts);


searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        searchProducts();

    }

});


function searchProducts() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    if (!search) {

        productCards.forEach(card => {

            card.style.display = "block";

        });

        productsTitle.textContent =
            "منتجات مميزة";

        return;

    }


    let found = 0;


    productCards.forEach(card => {

        const text =
            card.textContent.toLowerCase();


        if (text.includes(search)) {

            card.style.display = "block";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    productsTitle.textContent =
        "نتائج البحث عن: " + search;


    if (found === 0) {

        showToast("لم نجد أي منتج بهذا الاسم 🔎");

    }

}


/* =========================================
   CATEGORY SELECT
========================================= */

const categorySelect =
    document.getElementById("categorySelect");


categorySelect.addEventListener("change", () => {

    const category =
        categorySelect.value;

    filterProducts(category);

});


/* =========================================
   HERO BUTTON
========================================= */

const heroButton =
    document.querySelector(".hero-btn");


heroButton.addEventListener("click", () => {

    document
        .querySelector(".products-section")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================================
   SPONSORED BUTTON
========================================= */

const sponsoredButton =
    document.querySelector(".primary-btn");


sponsoredButton.addEventListener("click", () => {

    document
        .querySelector(".products-section")
        .scrollIntoView({
            behavior: "smooth"
        });

});
