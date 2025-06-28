document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  const projects = [
    { title: "F1 Race Prediction Dashboard", description: "Built using Python and Tableau to forecast Formula 1 race outcomes based on historical data.", link: "#" },
    { title: "California Homelessness Data Analysis", description: "Analyzed hospital encounter data using regression and geospatial mapping.", link: "#" },
    { title: "Disaster Tweet Classification (Kaggle)", description: "NLP project for identifying real vs. fake disaster tweets using TF-IDF and LSTM.", link: "#" }
  ];

  const freelance = [
    { title: "Sales Dashboard for Retail Client", description: "Designed an Excel-based dashboard summarizing monthly sales trends.", link: "#" },
    { title: "RFM Analysis for E-commerce Store", description: "Performed customer segmentation using R and RFM modeling.", link: "#" },
    { title: "Survey Insights Dashboard", description: "Created interactive visualizations from Qualtrics survey data.", link: "#" }
  ];

  const experience = [
    { title: "AI Tutor at Outlier.org", description: "Reviewed and verified AI-generated code and answers for programming support.", link: "#" },
    { title: "Search Quality Rater at RWS", description: "Evaluated Japanese-English web content for search result accuracy.", link: "#" },
    { title: "Clerk at Crescent Bakery", description: "Managed inventory, processed transactions, and supported operations.", link: "#" }
  ];

  function createCards(data, targetId) {
    const html = data.map(item => `
      <li class="card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.link}">View More</a>
      </li>
    `).join("");
    const container = document.getElementById(targetId);
    container.innerHTML = html;
    [...container.children].forEach(card => observer.observe(card));
  }

  createCards(projects, "project-cards");
  createCards(freelance, "freelance-cards");
  createCards(experience, "experience-cards");

  document.querySelectorAll("section").forEach(section => observer.observe(section));

  const themeToggle = document.getElementById("theme-toggle");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });
});


