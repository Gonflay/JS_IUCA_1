document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы DOM
    const body = document.body;
    const counterDisplay = document.querySelector('.counter-display');
    const speedPlusBtn = document.querySelector('.speed-plus');
    const speedMinusBtn = document.querySelector('.speed-minus');
    const resetBtn = document.querySelector('.reset');
    
    // Переменные для работы счетчика
    let minutes = 0;
    let seconds = 0;
    let timerInterval = null;
    
    // Функция для обновления отображения счетчика
    function updateCounterDisplay() {
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        counterDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }
    
    // Функция для запуска счетчика
    function startCounter() {
        if (timerInterval) return;
        
        timerInterval = setInterval(function() {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            updateCounterDisplay();
        }, 1000);
    }
    
    // Функция для остановки счетчика
    function stopCounter() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }
    
    // Функция для сброса состояния
    function resetState() {
        stopCounter();
        minutes = 0;
        seconds = 0;
        updateCounterDisplay();
        body.style.backgroundColor = '#808080'; // Серый фон
        counterDisplay.style.color = '#000'; // Черные цифры
    }
    
    // Speed +
    speedPlusBtn.addEventListener('click', function() {
        startCounter();
        body.style.backgroundColor = '#90EE90'; // Светло-зеленый фон
        counterDisplay.style.color = '#FFB6C1'; // Светло-красные цифры
    });
    
    // Обработчик для кнопки Speed -
    speedMinusBtn.addEventListener('click', function() {
        startCounter();
        body.style.backgroundColor = '#FFB6C1'; // Светло-красный фон
        counterDisplay.style.color = '#90EE90'; // Светло-зеленые цифры
    });
    
    // Обработчик для кнопки Reset
    resetBtn.addEventListener('click', resetState);
    

    resetState();
});