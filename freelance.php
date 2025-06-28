<?php
$freelance = [
  ["title" => "Sales Dashboard for Retail Client", "description" => "Designed an Excel-based dashboard summarizing monthly sales trends for a small retail business.", "link" => "#"],
  ["title" => "RFM Analysis for E-commerce Store", "description" => "Performed customer segmentation using R and RFM modeling for targeted marketing.", "link" => "#"],
  ["title" => "Survey Insights Dashboard", "description" => "Created interactive visualizations from Qualtrics survey data using Tableau.", "link" => "#"]
];
?>

<ul class="cards">
  <?php foreach ($freelance as $item): ?>
    <li class="card">
      <h3><?php echo $item['title']; ?></h3>
      <p><?php echo $item['description']; ?></p>
      <a href="<?php echo $item['link']; ?>">View Work</a>
    </li>
  <?php endforeach; ?>
</ul>
