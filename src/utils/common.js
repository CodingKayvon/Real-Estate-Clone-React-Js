export const sliderSettings = {
  slidesPerView : 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 1
    },
    600:  {
      slidesPerView: 2
    },
    750: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 4 //Normal Screen Size show 4 Slides center of screen (default is overflow)
    }
  }
}

/* 

          Code For The SWIPER SCROLL (ON - OFF Screen) (Showing all Cards)
          
        -After this you need to destructure the Swiper 
        -import this into jsx (page it will be on)
        -destructure by calling {...sliderSettings} inside of Swiper tag 
*/