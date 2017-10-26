<div data-target="sg-tabinfo" class="sg-tab">
  <h3 class="sg-tab-headline">Infos zum Modul</h3>
  <h4 class="sg-module-src">Pfad(e) des/der Includes</h4>
  <?php
      echo '<div><strong>'.$path.$inc.'</strong></div>';
  ?>
  <?php
    if (isset($infotext)) {
      echo '<div class="sg-module-info">'.$infotext.'</div>';
    }
  ?>

</div>
