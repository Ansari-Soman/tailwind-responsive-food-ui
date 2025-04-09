function onLoad() {
  circleItem();
  categoryItem();
  featureProduct_s();
  popularProduct_s();
  arriveProduct_s();
}

function circleItem() {
  const thumbContainer = document.querySelector(".thumb-container");
  thumbContainer.innerHTML = catogeryThumb
    .map(
      (thumb) =>
        `
    <div class="mr-0 mb-2">
        <div class="rounded-full overflow-hidden">
            <img src="${thumb.image}" alt="">
        </div>
        <p class="text-center mt-3 ">${thumb.title}</p>
    </div>
    `
    )
    .join("");
}

function categoryItem() {
  const productContainer = document.querySelector(".product-container");
  //   console.log(productContainer);
  productContainer.innerHTML = productThumb
    .map(
      (thumb) =>
        `
    <div class="flex flex-col justify-center items-center space-x-4 space-y-3 mb-10 mr-0  p-2 w-70    
        group hover:border hover:border-gray-300 hover:rounded-2xl hover:shadow-2xl hover:bg-gray-200">
            <div>
                <img src="${thumb.image}" alt="">
            </div>
            <h6 class="mr-0 text-center">${thumb.title}</h6>
            <p class="text-gray-400 mr-0"> ⭐⭐⭐⭐⭐(${thumb.rating})</p>
            <p class="space-x-2 mr-0">
                <span class="line-through text-gray-400">$${thumb.original_Price}</span>
                <span class="font-semibold">$${thumb.current_price}</span>
                <span class="text-gray-400 border border-gray-400 px-2">10% off</span>
            </p>
            <div class="items-center justify-center  space-x-2 hidden group-hover:flex my-3">
                    <input class="w-12 px-1 py-3 border border-gray-600 rounded-md text-gray-400 focus:outline-gray-600"
                        value="1" type="number">
                    <button style="color: white;" class="text-white py-3 px-4  bg-green-400 rounded-lg hover:bg-orange-400">&#128722;
                        Add to cart</button>
                    <button class=" py-3 px-1 hover:bg-green-300"><img src="images/heart.svg" alt=""></button>
                </div>
            </div>
    `
    )
    .join("");
}

function featureProduct_s() {
  const featureContainer = document.querySelector(".feature-container");
  featureContainer.innerHTML = featureProduct
    .map(
      (product) =>
        `
        <div class="flex flex-col justify-center items-center space-x-4 space-y-3 mb-10 mr-0  p-2 w-70    
            group hover:border hover:border-gray-300 hover:rounded-2xl hover:shadow-2xl hover:bg-gray-200">
                <div>
                    <img src="${product.image}" alt="">
                </div>
                <h6 class="mr-0 text-center">${product.title}</h6>
                <p class="text-gray-400 mr-0"> ⭐⭐⭐⭐⭐(${product.rating})</p>
                <p class="space-x-2 mr-0">
                    <span class="line-through text-gray-400">$${product.original_Price}</span>
                    <span class="font-semibold">$${product.current_price}</span>
                    <span class="text-gray-400 border border-gray-400 px-2">10% off</span>
                </p>
                <div class="items-center justify-center  space-x-2 hidden group-hover:flex my-3">
                        <input class="w-12 px-1 py-3 border border-gray-600 rounded-md text-gray-400 focus:outline-gray-600"
                            value="1" type="number">
                        <button style="color: white;" class="text-white py-3 px-4  bg-green-400 rounded-lg hover:bg-orange-400">&#128722;
                            Add to cart</button>
                        <button class=" py-3 px-1 hover:bg-green-300"><img src="images/heart.svg" alt=""></button>
                    </div>
                </div>
        `
    )
    .join("");
}

function popularProduct_s() {
  const popularContainer = document.querySelector(".popular-container");
  popularContainer.innerHTML = popularProduct
    .map(
      (product) =>
        `
        <div class="flex flex-col justify-center items-center space-x-4 space-y-3 mb-10 mr-0  p-2 w-70    
            group hover:border hover:border-gray-300 hover:rounded-2xl hover:shadow-2xl hover:bg-gray-200">
                <div>
                    <img src="${product.image}" alt="">
                </div>
                <h6 class="mr-0 text-center">${product.title}</h6>
                <p class="text-gray-400 mr-0"> ⭐⭐⭐⭐⭐(${product.rating})</p>
                <p class="space-x-2 mr-0">
                    <span class="line-through text-gray-400">$${product.original_Price}</span>
                    <span class="font-semibold">$${product.current_price}</span>
                    <span class="text-gray-400 border border-gray-400 px-2">10% off</span>
                </p>
                <div class="items-center justify-center  space-x-2 hidden group-hover:flex my-3">
                        <input class="w-12 px-1 py-3 border border-gray-600 rounded-md text-gray-400 focus:outline-gray-600"
                            value="1" type="number">
                        <button style="color: white;" class="text-white py-3 px-4  bg-green-400 rounded-lg hover:bg-orange-400">&#128722;
                            Add to cart</button>
                        <button class=" py-3 px-1 hover:bg-green-300"><img src="images/heart.svg" alt=""></button>
                    </div>
                </div>
        `
    )
    .join("");
}

function arriveProduct_s() {
  const arriveContainer = document.querySelector(".arrive-container");
  arriveContainer.innerHTML = arriveProduct
    .map(
      (product) =>
        `
        <div class="flex flex-col justify-center items-center space-x-4 space-y-3 mb-10 mr-0  p-2 w-70    
            group hover:border hover:border-gray-300 hover:rounded-2xl hover:shadow-2xl hover:bg-gray-200">
                <div>
                    <img src="${product.image}" alt="">
                </div>
                <h6 class="mr-0 text-center">${product.title}</h6>
                <p class="text-gray-400 mr-0"> ⭐⭐⭐⭐⭐(${product.rating})</p>
                <p class="space-x-2 mr-0">
                    <span class="line-through text-gray-400">$${product.original_Price}</span>
                    <span class="font-semibold">$${product.current_price}</span>
                    <span class="text-gray-400 border border-gray-400 px-2">10% off</span>
                </p>
                <div class="items-center justify-center  space-x-2 hidden group-hover:flex my-3">
                        <input class="w-12 px-1 py-3 border border-gray-600 rounded-md text-gray-400 focus:outline-gray-600"
                            value="1" type="number">
                        <button style="color: white;" class="text-white py-3 px-4  bg-green-400 rounded-lg hover:bg-orange-400">&#128722;
                            Add to cart</button>
                        <button class=" py-3 px-1 hover:bg-green-300"><img src="images/heart.svg" alt=""></button>
                    </div>
                </div>
        `
    )
    .join("");
}

onLoad();

const ham = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-menu");
const cross = document.querySelector("#cross");

ham.addEventListener("click", () => {
  cross.style.display = "block";
  navMenu.classList.add("active");
});

cross.addEventListener("click", () => {
  console.log("cross");
  navMenu.classList.remove("active");
});

// document.querySelectorAll(".nav-link").forEach((n) =>
//     n.addEventListener("click", (n) => {
//     console.log(n);
//     ham.classList.remove("active");
//     navMenu.classList.remove("active");
//   })
// );
