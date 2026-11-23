
/* =================================
   MINECRAFT ARAB - SCRIPT.JS
   ================================= */

document.addEventListener("DOMContentLoaded", () => {

  // 1. تحديث السنة تلقائياً
  const year = document.getElementById("currentYear");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // 2. قائمة الهاتف
  const menuButton = document.getElementById("menuToggle");
  const navigation = document.getElementById("mainNav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("active");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // 3. البحث عن المودات والخرائط
  const searchInput = document.getElementById("searchInput");
  const items = document.querySelectorAll("[data-search-item]");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();

      items.forEach(item => {
        const content = item.textContent.toLowerCase();
        const matches = content.includes(query);

        item.style.display = matches ? "" : "none";
      });
    });
  }

  // 4. تصفية التصنيفات
  const filterButtons = document.querySelectorAll("[data-filter]");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;

      items.forEach(item => {
        const itemCategory = item.dataset.category;
        const show =
          category === "all" || itemCategory === category;

        item.style.display = show ? "" : "none";
      });

      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
    });
  });

  // 5. زر العودة للأعلى
  const topButton = document.getElementById("backToTop");

  if (topButton) {
    topButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  console.log("Minecraft Arab is ready!");
});
