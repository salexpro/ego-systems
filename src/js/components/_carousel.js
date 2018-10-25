$('.partners_carousel').owlCarousel({
    
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    responsive: {
        0: {
            items: 3,
            margin: 16
        },
        640: {
            margin: 41,
            items: 4,
        },
        769: {
            items: 5,
            margin: 49,
            autoWidth: true,
        }
    }
});

$('.projects_carousel_inner').owlCarousel({
    smartSpeed: 500,
    navSpeed: 700,
    loop: true,
    responsive: {
        0: {
            items: 1,
            autoWidth: true,
            margin: 12,
            nav: false
        },
        640: {
            items: 2,
            nav: true,
            margin: 30,
            navContainer: '.owl-navigation',
            navText: [
                '<svg width="35" height="87" viewBox="0 0 35 87" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.9956 2.42554L33.3557 0.304199L1.63989 41.332L0 43.4534L1.63989 45.5747L33.3601 86.6083L35 84.4869L3.27979 43.4534L34.9956 2.42554Z" fill="white" fill-opacity="0.25"/></svg>',
                '<svg width="35" height="87" viewBox="0 0 35 87" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.3601 45.2762L1.64417 86.3041L0.00427246 84.1827L31.7202 43.1549L0 2.12134L1.63977 0L33.3601 41.0336L35 43.1549L33.3601 45.2762Z" fill="white" fill-opacity="0.25"/></svg>'
            ]
        }
    }
});