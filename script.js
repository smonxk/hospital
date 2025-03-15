function isOverlapping(element1, element2){
    const location1 = element1.getBoundingClientRect(); //position and size of element related to viewport
    const location2 = element2.getBoundingClientRect();

    return !(
        location1.bottom < location2.top || 
        location1.top > location2.bottom ||
        location1.right < location2.left || //right edge location of e1 is to the left edge of e2
        location1.left > location2.right
    );
}

function updateContactItems() {
    const hospitalHouse = document.querySelector('.hospital-house');
    const contactItems = document.querySelectorAll('.contact-item');

    contactItems.forEach(function(item) {
         if(!isOverlapping(item, hospitalHouse)) {
            item.classList.add('contact-item-body');
         }
         else {
            item.classList.remove('contact-item-body');
         }
    });
};

document.addEventListener('DOMContentLoaded', function() {
    updateContactItems();


    window.addEventListener('scroll', updateContactItems);
    window.addEventListener('resize', updateContactItems);
});

function handleSearch() {
    const searchInput = document.querySelector('.search-bar').value.toLowerCase();

    if(searchInput.includes('map'))
    {
        const mapSection = document.getElementById('map');
        if(mapSection) {
            mapSection.scrollIntoView({behavior: 'smooth'});
        }
    }
}

document.querySelector('.search-bar').addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        handleSearch(); 
    }
});