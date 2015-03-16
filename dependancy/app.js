(function(){
    var app = angular.module('store', ['store-products']);
    
    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    var gems = [
        {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'some description text here ',
        images: [
            {
                full: 'dodecahedron-01-full.jpg',
                thumb: 'dodecahedron-01-thumb.jpg'
            },
            {
                full: 'dodecahedron-02-full.jpg',
                thumb: 'dodecahedron-02-thumb.jpg'
            }
        ],
        reviews: [
            {
                stars: 5,
                body: "I love this product!",
                author: "joe@thomas.com",
                terms: true,
                color: "red"
            },
            {
                stars: 1,
                body: "This product sucks",
                author: "tim@hater.com",
                terms: true,
                color: "red"
            }
        ],
        canPurchase: true,
        soldOut: false
        },
        {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'some description text here ',
        images: [
            {
                full: 'dodecahedron-01-full.jpg',
                thumb: 'dodecahedron-01-thumb.jpg'
            },
            {
                full: 'dodecahedron-02-full.jpg',
                thumb: 'dodecahedron-02-thumb.jpg'
            }
        ],
        reviews: [
            {
                stars: 5,
                body: "I love this product!",
                author: "joe@thomas.com",
                terms: true,
                color: "red"
            },
            {
                stars: 1,
                body: "This product sucks",
                author: "tim@hater.com",
                terms: true,
                color: "red"
            }
        ],
        canPurchase: false,
        soldOut: false
        }];
})();