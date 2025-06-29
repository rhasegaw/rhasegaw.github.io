document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  const createCards = (data, targetId) => {
    const container = document.getElementById(targetId);
    const html = data.map(item => `
      <li class="card">
        ${item.image ? `<img src="${item.image}" alt="${item.title}">` : ''}
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        ${item.link ? `<a href="${item.link}" target="_blank">View More</a>` : ''}
      </li>
    `).join('');
    container.innerHTML = html;
    [...container.children].forEach(card => observer.observe(card));
  };

  // === 🔽 Add your cards here 🔽 ===

  const projects = [
    {
      title: "F1 Race Prediction Dashboard",
      description: "Built using Python and Tableau to forecast race outcomes.",
      link: "#",
      image: "img/f1.png"
    },
    {
      title: "Disaster Tweet Classification",
      description: "NLP project using LSTM to classify tweets during disasters.",
      link: "#"
    }
  ];

  const freelance = [
    {
      title: "Sales Dashboard",
      description: "Retail client Excel-based dashboard.",
      link: "#"
    }
  ];

  const experience = [
    {
      title: "AI Tutor at Outlier",
      description: "Reviewed and corrected AI-generated Python code."
    }
  ];

  const certifications = [
    {
      title: "Google Data Analytics",
      description: "Completed 8-course certificate in data analytics.",
      image: "img/google_cert.png"
    },
    {
      title: "Tableau Desktop Specialist",
      description: "Certified Tableau analyst for dashboard creation.",
      image: "img/tableau.png"
    }
  ];

  // === 🔼 End card data section ===

  createCards(projects, "project-cards");
  createCards(freelance, "freelance-cards");
  createCards(experience, "experience-cards");
  createCards(certifications, "certification-cards");

  // Dark mode toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });
});


