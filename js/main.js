function showSearch() {
    $('img#search').click(function () {
        $('.search-form > input').toggleClass('active');
    })
}
showSearch();

let products = [{
        productName: 'Bbblanco SO27M102',
        productPrice: 2500,
        productColor: 'Чорний',
        productMaterial: 'Силікон',
        productPhoto: 'img/catalog/1.jpg',
        category: 'Чоловічі годинники',
        categoryId: 'category0',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        discount: 5,
        isSale: true,
        identity:'Bbblanco SO27M102'
    },
    {
        productName: 'Black Grid YWS444',
        productPrice: 2350,
        discount: 5,
        productColor: 'Рожевий',
        productMaterial: 'Силікон',
        productPhoto: 'img/catalog/2.jpg',
        category: 'Жіночі годинники',
        categoryId: 'category1',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        isSale: true,
        identity:'Black Grid YWS444'
    },
    {
        productName: 'Bbblood SO27B102',
        productPrice: 1890,
        productColor: 'Чорний',
        productMaterial: 'Силікон',
        productPhoto: 'img/catalog/4.jpg',
        categoryId: 'category0',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Чоловічі годинники',
        identity:'Bbblood SO27B102'
    },
    {
        productName: 'Bbblue SO27B101',
        productPrice: 2400,
        productColor: 'Чорний',
        productMaterial: 'Силікон',
        productPhoto: 'img/catalog/5.jpg',
        categoryId: 'category1',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Жіночі годинники',
        discount: 5,
        isSale: true,
        identity:'Bbblue SO27B101'
    },
    {
        productName: 'Blue Icone YWS449MA',
        productPrice: 3800,
        productColor: 'Червоний',
        productMaterial: 'Силікон',
        productPhoto: 'img/catalog/6.jpg',
        categoryId: 'category1',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Жіночі годинники',
        identity: 'Blue Icone YWS449MA'
    },
    {
        productName: 'Brandy YWS445',
        productPrice: 1980,
        productColor: 'Коричневий',
        productMaterial: 'Силікон',
        productPhoto: 'img/catalog/7.jpg',
        categoryId: 'category1',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Жіночі годинники',
        identity:'Brandy YWS445'
    },
    {
        productName: 'Bricablue SUON711',
        productPrice: 2220,
        productColor: 'Синій',
        productMaterial: 'Шкіра',
        productPhoto: 'img/catalog/14.jpg',
        categoryId: 'category0',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Чоловічі годинники',
        identity:'Bricablue SUON711'
    },
    {
        productName: 'Bricagris SUOM708',
        productPrice: 2100,
        productColor: 'Синій',
        productMaterial: 'Шкіра',
        productPhoto: 'img/catalog/9.jpg',
        categoryId: 'category0',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Чоловічі годинники',
        identity:'Bricagris SUOM708'
    },
    {
        productName: 'Chic Sailor YVS448',
        productPrice: 2000,
        productColor: 'Рожевий',
        productMaterial: 'Шкіра',
        productPhoto: 'img/catalog/19.jpg',
        categoryId: 'category2',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Дитячі годинники',
        discount: 5,
        isSale: true,
        identity:'Chic Sailor YVS448'
    },
    {
        productName: 'Meiro SUOW164',
        productPrice: 1540,
        productColor: 'Рожевий',
        productMaterial: 'Шкіра',
        productPhoto: 'img/catalog/3.jpg',
        categoryId: 'category2',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Дитячі годинники',
        identity:'Meiro SUOW164'
    },
    {
        productName: 'Sistem Boreal YIS401G',
        productPrice: 3500,
        productColor: 'Чорний',
        productMaterial: 'Сталь',
        productPhoto: 'img/catalog/8.jpg',
        categoryId: 'category3',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Сталеві годинники',
        discount: 5,
        isSale: true,
        identity:'Sistem Boreal YIS401G'
    },
    {
        productName: 'Sistem Fly YIS404',
        productPrice: 2410,
        productColor: 'Чорний',
        productMaterial: 'Сталь',
        productPhoto: 'img/catalog/10.jpg',
        categoryId: 'category3',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Сталеві годинники',
        identity:'Sistem Fly YIS404'
    },
    {
        productName: 'Skinnature SYXS116',
        productPrice: 2050,
        productColor: 'Синій',
        productMaterial: 'Шкіра',
        productPhoto: 'img/catalog/11.jpg',
        categoryId: 'category0',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Чоловічі годинники',
        identity:'Skinnature SYXS116'
    },
    {
        productName: 'X-Dis Blue SUSB418',
        productPrice: 1600,
        productColor: 'Жовтий',
        productMaterial: 'Силікон',
        productPhoto: 'img/catalog/13.jpg',
        categoryId: 'category2',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Дитячі годинники',
        identity: 'X-Dis Blue SUSB418'
    },
    {
        productName: 'Uncle Charly YAS112G',
        productPrice: 1250,
        productColor: 'Чорний',
        productMaterial: 'Силікон',
        productPhoto: 'img/catalog/12.jpg',
        categoryId: 'category0',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Чоловічі годинники',
        identity:'Uncle Charly YAS112G'
    }
];

function getCatList2() {
    let catList = new Set();
    let count = 0;
    for (let i = 0; i < products.length; i++) {
        catList.add(products[i].category);
    }
    catList.forEach((value, valueAgain, set) => {
        $('.category-list-sidebar').append(`<li id='${'category' + count++}'>${value}</li>`)
    })

}
getCatList2();


function getProductsInCatalog(arr) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        $('.products-list').append(`
        <div class="product-item" data-id="${item.categoryId}" data-identity="${item.identity}">
    <img src="${item.productPhoto}" class="pruduct-img">
    <div class="product-name">${item.productName}</div>
    <div class="product-price">Ціна ${item.productPrice} грн</div>
    <div class="order-butt">Купити</div>
    <div class="details-butt" data-target="#${'exampleModal' + i}" data-toggle="modal">Детальніше</div>
    <div class="modal fade" id="${'exampleModal' + i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${item.productName}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="product-det">
                        <img src="${item.productPhoto}" class="pruduct-img">
                        <p id="product-description"> ${item.productDescription}</p>
                        <p>Характеристики:</p>
                        <ul>
                            <li>Колір: ${item.productColor}</li>
                            <li>Матеріал: ${item.productMaterial}</li>
                            <li>Категорія: ${item.category}</li>
                        </ul>
                        <p class="product-price">Ціна: ${item.productPrice} грн</p>
                    </div>
                    <div class="modal-footer">
                        <div class="close-mod-butt" data-dismiss="modal">Закрити</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `);
    }
}
getProductsInCatalog(products);

function filterProducts() {
    $('.category-list-sidebar > li').click(function () {
        let currentId = $(this).attr('id');
        let filteredList = products.filter(function (item) {
            return item.categoryId == currentId;
        });
        resetProducts();
        getProductsInCatalog(filteredList);
        addProductsToCart(filteredList);

    });
    $('#showAllCat').click(function () {
        resetProducts();
        getProductsInCatalog(products);
    });

}
filterProducts();

function resetProducts() {
    $('.products-list .product-item').hide(500).remove();
}

function sortProducts() {
    $('#lowPrice').click(function () {
        let lowRriceProduct = products.sort(function (a, b) {
            return a.productPrice - b.productPrice;
        });
        resetProducts();
        getProductsInCatalog(lowRriceProduct);
        addProductsToCart(lowRriceProduct)
    });
    $('#hightPrice').click(function () {
        let hightPriceProduct = products.sort(function (a, b) {
            return b.productPrice - a.productPrice;
        });
        resetProducts();
        getProductsInCatalog(hightPriceProduct);
        addProductsToCart(hightPriceProduct)
    });
    $('#resetSort').click(function () {
        location.reload();
    });

}
sortProducts();

function colorLink() {
    $('ul.sort li').click(function () {
        $('ul li').removeClass('active-link');
        $(this).addClass('active-link');
    });

    $('ul.category-list-sidebar li').click(function () {
        $('ul li').removeClass('active-link');
        $(this).addClass('active-link');
    });

};
colorLink();

let cart = [];

function addProductsToCart(arr) {
    $('.order-butt').click(function() {
        let identity = $(this).parent().attr('data-identity');
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (identity === item.identity) {
                cart.push(item);
                $('.products-in-cart-title').html(`
                <span></span>
                <span>Назва товару</span>
                <span>Вартість</span>
                `)
                $('.products-in-cart').append(`
                <div class="product">
	                <img class="product-in-cart-img" src=${item.productPhoto}>
	                <span class="product-in-cart-name">${item.productName}</span>
	                <span class="product-in-cart-price">${item.productPrice} грн</span>
	            </div>
                `)
            }
        }
        $('.hidden').css('display', 'flex');
        getTotalSum();
    });
}
addProductsToCart(products);

function getTotalSum() {
    let totalSum = 0;
    for (let i = 0; i < cart.length; i++) {
        totalSum += cart[i].productPrice;
      
        $('.total-sum').html(`${totalSum} грн`);
    }
};

function cleanCart() {
    $('.clear-cart').click(function cleanCart() {
        cart = [];
        $('.products-in-cart-title').html(`<div>Ваша корзина порожня</div>`);
        $('.product').remove();
        $('.hidden').css('display', 'none');
    })
}
cleanCart();

function orderConformation() {
    $('.send-order').click(function() {
        cart = [];
        $('.product').remove();
        $('.hidden').css('display', 'none');
        $('.products-in-cart-title').html(`<div>Ваше замовлення успішно відправлене. Наш спеціаліст зв'яжеться з Вами найближчим часом!</div>`);
        $('.close-modal').addClass('reload');
        $('.reload').click(function() {
            location.reload();
        })
    });

}
orderConformation();

$('#toggler-catList').click(function() {
    $('ul.category-list-sidebar').toggle('slow');
})

$('#tpggler-sort').click(function() {
    $('ul.sort').toggle('slow');
})

$('#burger').click(function() {
    $('.nav-menu').toggle('slow');
})
