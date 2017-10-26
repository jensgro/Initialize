<div data-target="sg-tabhtml" class="sg-tab">
  <h3 class="sg-tab-headline">HTML-Quellcode</h3>
  <div class="source-infos__data code-cnt">
    <?php
        ob_start();
        include $path.$inc;
        $source = ob_get_contents();
        ob_end_clean();

        echo '<pre><code class="language-html">';
        echo htmlentities($source, ENT_HTML5);
        echo '</code></pre>';
    ?>
  </div>
</div>
