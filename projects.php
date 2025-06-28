$projects = [
  ["title" => "F1 Race Prediction Dashboard", "description" => "Built using Python and Tableau to forecast Formula 1 race outcomes based on historical data.", "link" => "#"],
  ["title" => "California Homelessness Data Analysis", "description" => "Analyzed hospital encounter data using regression and geospatial mapping.", "link" => "#"],
  ["title" => "Disaster Tweet Classification (Kaggle)", "description" => "NLP project for identifying real vs. fake disaster tweets using TF-IDF and LSTM.", "link" => "#"]
];
?>

<ul class="cards">
  <?php foreach ($projects as $project): ?>
    <li class="card">
      <h3><?php echo $project['title']; ?></h3>
      <p><?php echo $project['description']; ?></p>
      <a href="<?php echo $project['link']; ?>">View Project</a>
    </li>
  <?php endforeach; ?>
</ul>
