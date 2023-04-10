const slider = tns({
    container: '.header-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    // mouseDrag: true,
});

const sliderPrev = document.querySelector('#sliderPrev');
const sliderNext = document.querySelector('#sliderNext');

sliderPrev.onclick = () => {
    slider.goTo('prev');
}; 

sliderNext.onclick = () => {
    slider.goTo('next');
};

// Инфа на старте


//  Блоки фракций
const currentSliderIndexEl = document.querySelector('#sliderCurrent');
const sliderTotalEl = document.querySelector('#sliderTotal');

function updateSliderFraction () {
    const sliderInfo = slider.getInfo();

    currentSliderIndexEl.innerText = '0' + (sliderInfo.navCurrentIndex + 1);

    sliderTotalEl.innerText = '0' + sliderInfo.pages
}

// На старте
updateSliderFraction();

// Инфа при перемещении

slider.events.on('indexChanged', () => {
    updateSliderFraction();
});

