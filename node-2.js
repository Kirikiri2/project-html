
const focusButtons = document.querySelectorAll('.focus-button');
const texts = document.querySelectorAll('.color');
/*фокусировка кнопки при загрузке страницы*/
document.addEventListener('DOMContentLoaded', function() {
  const initialFocusButton = document.getElementById('button1');
  initialFocusButton.focus(); /* Устанавливаем фокус на первую кнопку*/
  initialFocusButton.classList.add('focused'); 
  document.getElementById('text1').style.display = 'block'; 
});

/* Изменения текста при фокусе*/
focusButtons.forEach((button, index) => {
  button.addEventListener('focus', function() {
    /* Скрываем все тексты*/
    texts.forEach(text => text.style.display = 'none');
    /* Показываем текст для текущей кнопки*/
    document.getElementById('text' + (index + 1)).style.display = 'block';
    /* Снимаем фокус с предыдущей кнопки*/
    focusButtons.forEach(btn => btn.classList.remove('focused'));
    /* Добавляем фокус на текущую кнопку*/
    button.classList.add('focused');
  });
});

/*счетчик*/
let data = 0;
document.getElementById('counting').innerText = data;
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
function decrement() {
  data = data - 1;
  if (data < 0) {
    data = 0;
    document.getElementById("counting").innerText = data;
  };
  document.getElementById("counting").innerText = data;
}


