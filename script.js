const filters = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".archive-row");
const status = document.getElementById("filter-status");
filters.forEach((button) =>
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    let visible = 0;
    filters.forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle("is-active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    projects.forEach((project) => {
      const hidden =
        category !== "all" && project.dataset.category !== category;
      project.closest("li").hidden = hidden;
      if (!hidden) visible++;
    });
    status.textContent =
      category === "all"
        ? `Showing all ${visible} projects.`
        : `Showing ${visible} ${category} projects.`;
  }),
);
function openLinkedDetail(hash) {
  if (!hash) return;
  const target = document.getElementById(hash.slice(1));
  if (target instanceof HTMLDetailsElement) target.open = true;
}
document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) =>
    link.addEventListener("click", () =>
      openLinkedDetail(link.getAttribute("href")),
    ),
  );
window.addEventListener("hashchange", () => openLinkedDetail(location.hash));
openLinkedDetail(location.hash);
if ("IntersectionObserver" in window) {
  const nav = document.querySelectorAll(".main-nav a");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        nav.forEach((link) => {
          if (link.hash === `#${entry.target.id}`)
            link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-10% 0px -60% 0px" },
  );
  document
    .querySelectorAll(".hero, #work, #experience, #about, #contact")
    .forEach((section) => observer.observe(section));
}
