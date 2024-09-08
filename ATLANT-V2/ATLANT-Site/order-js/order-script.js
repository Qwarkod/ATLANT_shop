document.getElementById('order-button').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phone-number').value;
    const promoCode = document.getElementById('promo-code').value;

    // Простенька валідація номеру телефону (тільки цифри)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert('Будь ласка, введіть дійсний номер телефону (10 цифр).');
        return;
    }

    // Перевірка наявності промокоду (опціонально)
    if (promoCode && promoCode.length < 3) {
        alert('Промокод має містити щонайменше 3 символи.');
        return;
    }

    // Якщо всі поля валідні, можна робити замовлення
    alert('Замовлення підтверджено!');
});
