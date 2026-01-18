const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close-menu');

toggle.onclick = () => menu.classList.add('open');
close.onclick = () => menu.classList.remove('open');

const buttons = document.querySelectorAll('.categories button');
const cards = document.querySelectorAll('.project-card');

buttons.forEach(btn => {
  btn.onclick = () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      card.style.display =
        filter === 'all' || card.dataset.category === filter
        ? 'block'
        : 'none';
    });
  };
});

const typingTexts = [
  "Into Real-World Impact",
  "Into Actionable Decisions",
  "Into Practical Solutions"
];

let textIndex = 0;
let charIndex = 0;
const typingEl = document.getElementById("typing-text");

function typeText() {
  if (!typingEl) return;

  if (charIndex < typingTexts[textIndex].length) {
    typingEl.textContent += typingTexts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 80);
  } else {
    setTimeout(() => {
      typingEl.textContent = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % typingTexts.length;
      typeText();
    }, 1400);
  }
}

document.addEventListener("DOMContentLoaded", typeText);
