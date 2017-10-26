<div data-target="sg-tabtemplate" class="sg-tab">
  <h3 class="sg-tab-headline">Das Template</h3>
  <div class="source-infos__data code-cnt">
    <?php
      echo $path.$module_template;
      echo '<pre><code class="language-html">';
      echo htmlspecialchars(file_get_contents($path.$module_template));
      echo '</code></pre>';
    ?>
  </div>
</div>
