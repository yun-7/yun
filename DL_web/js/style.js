// 當加入購物車按鈕被點擊時，執行以下程式碼
var addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        alert('商品已加入購物車！');
    });
});