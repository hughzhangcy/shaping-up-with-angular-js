(function(){
    var app = angular.module('store', []);
    
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
        canPurchase: false,
        soldOut: false
        }];
})();