
document.addEventListener("click", function(e) {
    'use strict';


    var cart = document.getElementById("cart");
    var search = document.getElementById("search");
    var searchBar = document.getElementById("search-bar");
    var searchInput = document.getElementById("search-input");
    var dropCart = document.getElementById("drop-cart");
    

    if (e.target === cart || e.target === dropCart) {
        dropCart.style.display = "block";
    } else  if (e.target !== cart || e.target !== dropCart) {
        dropCart.style.display = "none";
    };

    if (e.target === search || e.target === searchInput) {
        searchBar.style.display = "block";
        searchBar.style.Animation = "opensearch .3s ease-in-out";
        searchBar.style.webkitAnimation = "opensearch .3s ease-in-out";
        searchBar.style.width = "170px";
        
    } else  if (e.target !== search || e.target !== searchInput) {
        searchBar.style.Animation = "closesearch .3s ease-in-out";
        searchBar.style.webkitAnimation = "closesearch .3s ease-in-out";
        searchBar.style.width = "20px";
        setTimeout(function() {
            searchBar.style.display = "none";
        }, 200);        
    };

});