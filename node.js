const sliderContainer = document.querySelector('.catalog-card');
const rangeInput = document.querySelector('.slider-range');

rangeInput.addEventListener('input', (event) => {
  const value = parseInt(event.target.value);
  sliderContainer.style.transform = `translateX(-${value * 20}%)`;
});
