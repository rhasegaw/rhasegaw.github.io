// Sample data (add more as needed)
const data = {
  projects: [
    {
      title: "F1 Race Prediction Dashboard",
      desc: "Built using Python and Tableau to forecast Formula 1 race outcomes based on historical data.",
      img: "img/f1.png"
    },
    {
      title: "California Homelessness Data Analysis",
      desc: "Analyzed hospital encounter data using regression and geospatial mapping.",
      img: "img/homeless.png"
    },
    {
      title: "Disaster Tweet Classification (Kaggle)",
      desc: "NLP project for identifying real vs. fake disaster tweets using TF-IDF and LSTM.",
      img: "img/disaster.png"
    }
  ],
  freelance: [
    {
      title: "Sales Dashboard for Retail Client",
      desc: "Excel-based dashboard summarizing monthly sales trends.",
      img: "img/sales.png"
    },
    {
      title: "RFM Analysis for E-commerce Store",
      desc: "Performed customer segmentation using R and RFM modeling.",
      img: "img/rfm.png"
    },
    {
      title: "Survey Insights Dashboard",
      desc: "Created interactive visualizations from survey data using Tableau.",
      img: "img/survey.png"
    }
  ],
  experience: [],
  certifications: [
    {
      title: "FreeCodeCamp Responsive Web Design",
      desc: "Certificate in HTML, CSS, Flexbox and Responsive layout.",
      img: ""
    },
    {
      title: "Foundational C# with Microsoft",
      desc: "Certificate for C# fundamentals and logic building.",
      img: ""
    },
    {
      title: "Data Analysis with Python",
      desc: "Kaggle & FCC certificate using Pandas, NumPy, and Matplotlib.",
      img: ""
    }
  ]
};

function createCards(category, dataArr) {
  const container = document.getElementById(`${category}-cards`);
  dataArr.forEach(item => {
    const li = document.createElement("li");
    li.className = "card";
    li.innerHTML = `
      ${item.img ? `<img src="${item.img}" alt="${item.title}">` : ""}
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    `;
    container.appendChild(li);
  });
}

["projects", "freelance", "experience", "certifications"].forEach(key => {
  createCards(key, data[key]);
});

// Theme toggle with localStorage
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(dark) {
  root.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
  const isDark = root.classList.contains("dark");
  applyTheme(!isDark);
});

// Load saved theme
applyTheme(localStorage.getItem("theme") === "dark");




