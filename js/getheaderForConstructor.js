var header = `<section>
<div class="container">
    <div class="row">
        <div class="col-lg-2 col-md-6 col-sm-12">
            <div class="logo">
                <a href="index.html"><img src="img/logo.png" alt="logo"></a>
            </div>
        </div>
        <div class="col-lg-8 col-md-6 col-sm-12">
            <ul class="nav nav-menu">
                <li><a href="catalog.html">Каталог</a></li>
                <li><a href="about.html">Про нас</a></li>
                <li><a href="contacts.html">Контакти</a></li>
            </ul>
        </div>
        <div class="col-lg-2 col-md-10 col-sm-12 cart-end-search-wrapp">
            <div class="search">
                <form class="search-form">
                    <img src="img/search.png" alt="search" id="search">
                    <form class="search-form">
                        <input type="text" placeholder='Поиск'>
                    </form>
            </div>
        </div>
    </div>
</div>
</section>`;

$('#header').append(header);
