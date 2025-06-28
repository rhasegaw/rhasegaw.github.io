<?php
$experiences = [
  ["title" => "AI Tutor at Outlier.org", "description" => "Reviewed and verified AI-generated code and answers, supporting students in programming and data science.", "link" => "#"],
  ["title" => "Search Quality Rater at RWS", "description" => "Evaluated Japanese-English web content for relevance and accuracy in search engine results.", "link" => "#"],
  ["title" => "Clerk at Crescent Bakery", "description" => "Managed inventory records, processed transactions, and supported back-office operations.", "link" => "#"]
];
?>

<ul class="cards">
  <?php foreach ($experiences as $exp): ?>
    <li class="card">
      <h3><?php echo $exp['title']; ?></h3>
      <p><?php echo $exp['description']; ?></p>
      <a href="<?php echo $exp['link']; ?>">Learn More</a>
    </li>
  <?php endforeach; ?>
</ul>
