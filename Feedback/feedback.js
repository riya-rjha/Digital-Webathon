const container = document.querySelector('.container');
const emoji = document.querySelector('.emoji');
const textarea = document.querySelector('textarea');
const btn = document.querySelector('.btn');

emoji.addEventListener('click', (e) => {
    if (e.target.className.includes('emoji')) return;
    textarea.classList.add('textarea--active');
    btn.classList.add('btn--active');
});

container.addEventListener('mouseleave', () => {
    textarea.classList.remove('textarea--active');
    btn.classList.remove('btn--active');
});

btn.addEventListener('click', () => {
    const feedback = textarea.value.trim();
    if (feedback !== '') {
        const subject = encodeURIComponent('Feedback from Website');
        const body = encodeURIComponent(feedback);
        window.location.href = `mailto:your-isanjana32@gmail.com?subject=${subject}&body=${body}`;
    } else {
        alert('Please provide your feedback before sending.');
    }
});
