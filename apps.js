new Glide('.glide', {
    type: 'carousel',
    perView: 5,
    focusAt: 'center',
    autoplay: 3000,
    arrows: {
      prev: '.glide__arrow--left',
      next: '.glide__arrow--right',
    },
  }).mount();