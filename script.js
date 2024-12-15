// Створюємо новий Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Додаємо клас 'visible', коли елемент потрапляє в область видимості
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Перестаємо спостерігати після появи
      }
    });
  },
  {
    threshold: 0.5, // Спрацьовує, коли 50% елемента виявляється на екрані
  }
);

// Спостерігаємо за кожним елементом всередині .about-content
const elementsToAnimate = document.querySelectorAll(
  ".about-content img, .about-content h2, .about-content p, .about-content a"
);
elementsToAnimate.forEach((element) => {
  observer.observe(element); // Спостерігаємо за кожним елементом
});
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".animate-right, .animate-left"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // Додаємо клас, щоб запустити анімацію
        } else {
          entry.target.classList.remove("active"); // При бажанні можна прибрати клас
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach((el) => observer.observe(el));
});
