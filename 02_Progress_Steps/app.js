const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('#progress');

let currentActive = 1;
const numberOfCircles = circles.length;
const updateCircles = () => {
    if (currentActive === numberOfCircles) {
        btnNext.disabled = true;
    } else if (currentActive === 1) {
        btnPrev.disabled = true;
    } else {
        btnNext.disabled = false;
        btnPrev.disabled = false;
    }

    circles.forEach((circle, idx) => {
        idx < currentActive
            ? circle.classList.add('active')
            : circle.classList.remove('active');
    });

    progress.style.width = `${
        ((currentActive - 1) / (numberOfCircles - 1)) * 100
    }%`;
};

btnNext.addEventListener('click', () => {
    currentActive++;

    updateCircles();
});

btnPrev.addEventListener('click', () => {
    currentActive--;

    updateCircles();
});
