    document.addEventListener('DOMContentLoaded', () => {
      const hireBtn = document.getElementById('hire-btn');
      if (hireBtn) {
        hireBtn.addEventListener('click', () => {
          hireBtn.classList.remove('hire-clicked');
          void hireBtn.offsetWidth; // restart animation if clicked again quickly
          hireBtn.classList.add('hire-clicked');
          setTimeout(() => hireBtn.classList.remove('hire-clicked'), 700);
        });
      }
    });
