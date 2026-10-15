// ============================================================
// PackersDeal — script.js
// Small interactive bits, no framework used.
// 1. Mobile hamburger menu   |  2. Services dropdown
// 3. Quote form validation   |  4. Smooth scrolling
// 5. Mobile tip-card titles  |  6. Process bar scroll buttons
// ============================================================

// 1. Hamburger button: open/close the mobile menu
const burger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

// 2. Services dropdown (desktop): toggles an 'open' class on click
document.querySelectorAll('.has-drop').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    link.classList.toggle('open');
  });
});

// 3. Quote form: stop submit if name/mobile are empty, otherwise show a confirmation
const form = document.getElementById('quoteForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('input[placeholder="Your full name"]');
    const mobile = form.querySelector('input[placeholder="Mobile number"]');
    if (!name || !mobile || !name.value.trim() || !mobile.value.trim()) {
      alert('Please apna naam aur mobile number bharein.');
      return;
    }
    alert('Thanks ' + name.value.trim() + '! Aapki quote request mil gayi hai.');
    form.reset();
  });
}

// 4. Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const targetId = a.getAttribute('href');
    if (targetId && targetId !== '#') {
      const t = document.querySelector(targetId);
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// 5. Mobile tip card titles: 01 Packing Tips / 02 Moving Tips / 03 Relocation Tips
const tipCards = Array.from(document.querySelectorAll('.tip-card'));
const tipOrig = tipCards.map(c => [
  c.querySelector('.tip-badge')?.textContent || '',
  c.querySelector('.tip-text h3')?.textContent || ''
]);
const tipMobile = [['01', 'Packing Tips'], ['02', 'Moving Tips'], ['03', 'Relocation Tips']];
const tipMQ = window.matchMedia('(max-width: 599.98px)');

function applyTipCards() {
  const mob = tipMQ.matches;
  tipCards.forEach((c, i) => {
    const badge = c.querySelector('.tip-badge');
    const title = c.querySelector('.tip-text h3');
    if (badge && title && tipMobile[i]) {
      badge.textContent = mob ? tipMobile[i][0] : (tipOrig[i] ? tipOrig[i][0] : tipMobile[i][0]);
      title.textContent = mob ? tipMobile[i][1] : (tipOrig[i] ? tipOrig[i][1] : tipMobile[i][1]);
    }
  });
}

if (tipMQ.addEventListener) {
  tipMQ.addEventListener('change', applyTipCards);
} else if (tipMQ.addListener) {
  tipMQ.addListener(applyTipCards);
}
applyTipCards();

// 6. Process bar: the round side buttons scroll it left/right (tablet/mobile)
const pBar = document.querySelector('.process-bar');
document.querySelectorAll('.p-scroll').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!pBar) return;
    const dir = btn.classList.contains('p-next') ? 1 : -1;
    pBar.scrollBy({ left: dir * 220, behavior: 'smooth' });
  });
});
