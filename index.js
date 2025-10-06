class Counter {
    constructor() {
        this.counterElement = document.getElementById('counter');
        this.speedIncreaseBtn = document.getElementById('speedIncrease');
        this.speedDecreaseBtn = document.getElementById('speedDecrease');
        this.resetBtn = document.getElementById('reset');
        this.minutes = 0;
        this.seconds = 0;
        this.isRunning = false;
        
        this.initEventListeners();
        this.updateDisplay();
    }

    initEventListeners() {
        // Обработчик для кнопки Speed +
        this.speedIncreaseBtn.addEventListener('click', () => {
            this.increment();
            this.setSpeedPlusStyle();
        });

        // Обработчик для кнопки Speed -
        this.speedDecreaseBtn.addEventListener('click', () => {
            this.decrement();
            this.setSpeedMinusStyle();
        });

        // Обработчик для кнопки Reset
        this.resetBtn.addEventListener('click', () => {
            this.reset();
            this.setDefaultStyle();
        });
    }

    increment() {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
        }
        this.updateDisplay();
    }

    decrement() {
        this.seconds--;
        if (this.seconds < 0) {
            this.seconds = 59;
            this.minutes--;
            if (this.minutes < 0) {
                this.minutes = 0;
                this.seconds = 0;
            }
        }
        this.updateDisplay();
    }

    reset() {
        this.minutes = 0;
        this.seconds = 0;
        this.updateDisplay();
    }

    updateDisplay() {
        const formattedMinutes = this.minutes.toString().padStart(2, '0');
        const formattedSeconds = this.seconds.toString().padStart(2, '0');
        this.counterElement.textContent = ${formattedMinutes}:${formattedSeconds};
    }

    setSpeedPlusStyle() {
        document.body.classList.remove('speed-minus');
        document.body.classList.add('speed-plus');
    }

    setSpeedMinusStyle() {
        document.body.classList.remove('speed-plus');
        document.body.classList.add('speed-minus');
    }

    setDefaultStyle() {
        document.body.classList.remove('speed-plus', 'speed-minus');
    }
}

// Инициализация счетчика при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new Counter();
});