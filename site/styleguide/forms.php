<?php
  $pagetitle 	= "Formulare";

  // path to the includes
  $path = '../dev/inc/modules/';

  // shall there be previewbuttons?
  // configure them in json/standard--preview-buttons.json
  $previewbuttons = true;

	// Add multidimensional array for the page content.
	$moduleList = array();
  $moduleList[] = array(
    "title" => "Registrieren-Formular",
    "include" => "forms/registrieren.inc",
    "showhtml" => true,
    "showphp" => false,
    "showtemplate" => false,
    "showinfotext" => true,
    "infotext" => "<p>Das Formular sollte selbsterklärend sein.</p>"
  );

  // ======  Please don't touch
  $filename = basename(__FILE__, '.php'); // without extension!!!
  $navitem = $filename;
  include 'inc/templates/template-modules.inc';
?>
