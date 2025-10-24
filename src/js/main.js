let currentIndex = 0;
const items = document.querySelectorAll('.feedback__carousel-item');
const inner = document.querySelector('.feedback__carousel-inner');
const nextBtn = document.querySelector('.feedback__carousel-nextBtn');
const prevBtn = document.querySelector('.feedback__carousel-prevBtn');
const totalItems = items.length;

function slide(index) {
    // ОБработка цикличности 
    if (index < 0) {
        index = totalItems - 1;
    }  else if (index >= totalItems) {
        index = 0;
    }
    
    inner.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;

     // Добавляем и удаляем класс active
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

// items[0].classList.add("active");

nextBtn.addEventListener('click', () => {
        slide(currentIndex + 1);    
});

prevBtn.addEventListener('click', () => {
        slide(currentIndex - 1);
});

// Автоматическое переключение (опционально)
// setInterval(() => {
//     if (currentIndex < items.length - 1) {
//         slide(currentIndex + 1);
//     } else {
//         slide(0);
//     }
// }, 3000);
