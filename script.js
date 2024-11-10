document.getElementById('webinar-registration').addEventListener('submit', function (event) {
    event.preventDefault();  // Останавливаем отправку формы

    // Получаем значения из формы
    var name = document.getElementById('name').value;
    var webinar = document.getElementById('webinar-select').selectedOptions[0].text;  // Получаем текст выбранного вебинара

    // Показываем alert с информацией
    alert('Привет, ' + name + '! Вы зарегистрированы на вебинар: ' + webinar);
});

const progressDone = document.querySelectorAll('.progress-done');

progressDone.forEach(progress => {
    progress.style.width = progress.getAttribute('data-done') + '%';
});

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.review-form button');
    const reviewTextarea = document.querySelector('.review-form .review');

    // Проверяем, существует ли кнопка и текстовое поле отзыва
    if (!button || !reviewTextarea) {
        console.error("Элементы не найдены!");
        return;
    }

    button.addEventListener('click', function () {
        // Получаем выбранную звезду
        const stars = document.querySelectorAll('input[name="rating"]');
        let rating = 0;

        stars.forEach(function (star, index) {
            if (star.checked) {
                rating = index + 1; // Считаем оценку от 1 до 5
            }
        });

        // Получаем текст отзыва
        const reviewText = reviewTextarea.value.trim();

        // Проверка, выбрана ли оценка и есть ли текст отзыва
        if (rating === 0 || reviewText === "") {
            alert("Пожалуйста, выберите оценку и напишите отзыв.");
        } else {
            // Показываем результат в alert
            alert(`Ваш отзыв: "${reviewText}"\nОценка: ${rating} звезд.`);
        }
    });
});

