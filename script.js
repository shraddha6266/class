
let cartCount = 0;

function addCart() {
    cartCount++;

    document.getElementById("count").innerText = cartCount;

    alert("Food added to cart successfully! 🍔");
}
