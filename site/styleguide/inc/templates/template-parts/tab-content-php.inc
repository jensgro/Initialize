<div data-target="sg-tabphp" class="sg-tab">
  <h3 class="sg-tab-headline">PHP-Quellcode der Einzeldateien</h3>
  <div class="source-infos__data code-cnt">
    <?php
        echo '<pre><code class="language-html">';
        echo htmlspecialchars(file_get_contents($path.$inc));
        echo '</code></pre>';
    ?>
  </div>
</div>
