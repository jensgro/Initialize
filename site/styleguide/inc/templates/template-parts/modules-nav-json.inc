<?php
  $navJSON = 'json/sg-navigation.json';
  $navdata = file_get_contents($navJSON);
  $navitems = json_decode($navdata);

  foreach ($navitems as $navigationitem) {

    $navitem = $navigationitem -> item;
    $navtitle = $navigationitem -> title;

  }
?>

<nav id="sg-menu" class="sg-nav-container">
  <div class="sg-menu-close">
    <a href="#sg-menu-link">Navigation schliessen</a>
  </div>
  <ul class="sg-nav">
    <ul>
      <li><a href="index.php">zurück zur Übersicht</a></li>

    <?php
      foreach ($navitems as $navigationitems) {

        $navigationitem = $navigationitems -> item;
        $navtitle = $navigationitems -> title;

        if ($navigationitem == $navitem) {
          echo '<li class="active"><a href="'.$navigationitem.'.php">'.$navtitle.'</a></li>';
        } else {
          echo '<li><a href="'.$navigationitem.'.php">'.$navtitle.'</a></li>';
        }
      }
    ?>

  </ul>

  <div class="sg-menu-close">
    <a href="#sg-menu-link">Navigation schliessen</a>
  </div>
</nav>
