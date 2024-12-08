/*слайдер*/
const sliderContainer = document.querySelector('.catalog-card');
const rangeInput = document.querySelector('.slider-range');

rangeInput.addEventListener('input', (event) => {
  const value = parseInt(event.target.value);
  const itemWidth = document.querySelector('.catalog-card-with-text').offsetWidth + 20; // Ширина + отступ
  const offset = -(value * itemWidth);
  sliderContainer.style.transform = `translateX(${offset}px)`;
});