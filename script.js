
const navbar = document.getElementById('navbar');
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');
const searchContainer = document.querySelector('.search-bar');


function toggleScrollStyles() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}


function toggleSearchBar() {
    searchContainer.classList.toggle('visible');
    searchInput.focus(); 
}


window.addEventListener('scroll', toggleScrollStyles);


searchButton.addEventListener('click', function (e) {
    e.preventDefault(); 
    toggleSearchBar();
});
