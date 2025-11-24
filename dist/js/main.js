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

// Modal 
const consultationBtn = document.querySelectorAll('[data-modal="consultation"]');
const orderBtn = document.querySelectorAll('[data-modal="order"]');
const overlay = document.querySelector('.overlay'); 
const consultationModal = document.getElementById('consultation');
const thanksModal = document.getElementById('thanks'); 
const closeModal = document.querySelector('.modal__close');


consultationBtn.forEach((item) => {
    item.addEventListener('click', function () {
        overlay.style.display = 'block';
        consultationModal.style.display = 'block';      
    })
});
orderBtn.forEach((item) => {
    item.addEventListener('click', function () {
        overlay.style.display = 'block';
        thanksModal.style.display = 'block';      
    })
});

closeModal.addEventListener('click', function () {
    overlay.style.display = 'none';
    consultationModal.style.display = "none";
    thanksModal.style.display = "none";
});


