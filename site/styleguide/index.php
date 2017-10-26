<?php
	include "inc/templates/template-parts/index-head.inc";

  $navJSON = 'json/sg-navigation.json';
  $navdata = file_get_contents($navJSON);
  $navitems = json_decode($navdata, true);

?>
  <h1>Die Modulkategorien</h1>
  <ul>
  <?php
    foreach ($navitems as $navigationitems) {

      $navigationitem = $navigationitems['item'];
      $navtitle = $navigationitems['title'];
      echo '<li><a href="'.$navigationitem.'.php">'.$navtitle.'</a></li>';
    }
  ?>
  </ul>

  <?php
    	include "inc/templates/template-parts/index-footer.inc";
  ?>
