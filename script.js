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
    container.classList.add("card-scroll-wrapper");
    const html = data.map(item => `
      <li class="card">
        ${item.image ? `<img src="${item.image}" alt="${item.title}">` : ''}
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </li>
    `).join('');
    container.innerHTML = html;
    [...container.children].forEach(card => observer.observe(card));
  };

  const projects = [
    { title: "F1 Race Prediction Dashboard", description: "Built using Python and Tableau to forecast Formula 1 race outcomes based on historical data.", image: "img/project_f1.png" },
    { title: "California Homelessness Data Analysis", description: "Analyzed hospital encounter data using regression and geospatial mapping.", image: "img/project_homeless.png" },
    { title: "Disaster Tweet Classification (Kaggle)", description: "NLP project for identifying real vs. fake disaster tweets using TF-IDF and LSTM.", image: "img/project_kaggle.png" }
  ];

  const freelance = [
    { title: "Sales Dashboard for Retail Client", description: "Designed an Excel-based dashboard summarizing monthly sales trends.", image: "img/freelance_sales.png" },
    { title: "RFM Analysis for E-commerce Store", description: "Performed customer segmentation using R and RFM modeling.", image: "img/freelance_rfm.png" },
    { title: "Survey Insights Dashboard", description: "Created interactive visualizations from Qualtrics survey data.", image: "img/freelance_survey.png" }
  ];

  const experience = [
    { title: "AI Tutor at Outlier.ai", description: "Reviewed and verified AI-generated code and answers for programming support.", image: "img/exp_outlier.png" },
    { title: "Search Quality Rater at RWS", description: "Evaluated Japanese-English web content for search result accuracy.", image: "img/exp_rws.png" },
    { title: "Clerk at Crescent Bakery", description: "Managed inventory, processed transactions, and supported operations.", image: "img/exp_bakery.png" }
  ];

  const certifications = [
    { title: "Responsive Web Design", description: "Built mobile-friendly websites using HTML and CSS.", image: "img/cert_web_design.png" },
    { title: "Foundational C# with Microsoft", description: "Completed beginner course in C# with .NET basics.", image: "img/cert_csharp.png" },
    { title: "Data Analysis with Python", description: "Used NumPy and Pandas to analyze datasets.", image: "img/cert_data_analysis.png" },
    { title: "Data Visualization", description: "Visualized data using Matplotlib and Seaborn.", image: "img/cert_data_vis.png" },
    { title: "Kaggle Python Certificate", description: "Python programming with functions and loops.", image: "img/cert_kaggle_python.png" },
    { title: "Advanced SQL Certificate", description: "Complex queries, joins, and SQL windows.", image: "img/cert_sql.png" },
    { title: "Microsoft AI-900", description: "Certified in Azure AI Fundamentals.", image: "img/cert_ai900.png" }
  ];

  createCards(projects, "project-cards");
  createCards(freelance, "freelance-cards");
  createCards(experience, "experience-cards");
  createCards(certifications, "certification-cards");

  const themeToggle = document.getElementById("theme-toggle");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");


