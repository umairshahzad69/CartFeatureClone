const productsEl = document.querySelector(".products");
const popularEl = document.querySelector(".populars");
const carticonEl = document.querySelector(".carticon");
const cartExpEl = document.querySelector(".cartexpnd");
var products = [
    { name: "Classsic Watch", price: 999, image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D" },
    { name: "Premium Watch", price: 599, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D" },
    { name: "Men's Watch", price: 799, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww" },
];

function addProducts() {
    var clutter = "";
    products.forEach((product, index) => {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
        <img class="w-full h-full object-cover" src="${product.image}"/>
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">Hangup data.</h3>
                    <h4 class="font-semibold mt-2">Rs. ${product.price}</h4>
                </div>
                <button data-value="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i
                data-value="${index}"   class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`
    })
    productsEl.innerHTML = clutter;
}

function popularProducts() {
    var clutter = "";
    products.forEach((product) => {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">Bisco Do Lobo</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">Rs. ${product.price}</h4>
        </div>
    </div>`
    })
    popularEl.innerHTML = clutter
}

function showCart() {
    carticonEl.addEventListener("click", function () {
            cartExpEl.style.display = "block";
        
        var clutter = "";
        cart.forEach(function (product, index) {
            clutter += `<div class="flex flex-col gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg">
            <img class="h-full w-full object-cover" src="${product.image}"/>
            </div>
            <div>
            <h3 class="font-semibold">${product.name}</h3>
            <h5 class="text-sm font-semibold opacity-80">Rs. ${product.price}</h5>
            </div>
            <button class="bg-red-500 rounded-lg p-4 text-white">Proceed to CheckOut</button>
            </div>`
        })
        cartExpEl.innerHTML = clutter;

    })
}
var cart = [];
function addToCart() {
    document.querySelector(".products").addEventListener("click", function (details, index) {
        if (details.target.classList.contains('add')) {
            cart.push(products[details.target.dataset.value])
        }
    })
}
addProducts();
popularProducts();
showCart();
addToCart();