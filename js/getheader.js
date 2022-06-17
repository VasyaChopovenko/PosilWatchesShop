var header = `<section>
<div class="container">
    <div class="row">
        <div class="col-lg-2 col-md-6 col-sm-12">
            <div class="logo">
                <a href="catalog.html"><img src="img/logo.png" alt="logo"></a>
            </div>
            <img src="img/burger.png" id="burger">
        </div>
        <div class="col-lg-8 col-md-6 col-sm-12">
            <ul class="nav nav-menu">
                <li><a href="catalog.html">Каталог</a></li>
                <li><a href="about.html">Про нас</a></li>
                <li><a href="contacts.html">Контакти</a></li>
            </ul>
        </div>
        <div class="col-lg-2 col-md-10 col-sm-12 cart-end-search-wrapp">
            <div class="cart">
                <img src="img/cart.png" alt="cart" id='cart' data-toggle="modal" data-target=".bd-example-modal-lg">
                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="cart-message">Ваша корзина</h1>
                    <div class="close-modal" data-dismiss="modal">X</div>
                    </div>
                    <div class="modal-body">
                     <div class="products-in-cart">
                     <div class="products-in-cart-title">Ваша корзина порожня</div>
                     </div>
                     <div class="sum hidden">Всього до оплати:<span class="total-sum"></span></div>
                    <div class="buttons hidden">
                        <span class="clear-cart">Видалити всі</span>
                        <span class="send-order ">Оформити замовлення</span>
                    </div>

                     </div>
                     </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
</section>`;

$('#header').append(header);
