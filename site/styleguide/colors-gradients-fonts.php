<?php
  $pagetitle 	= "Farben, Verläufe";

  // path to the includes
	$path = 'inc/basics/';

	// shall there be previewbuttons?
  // configure them in json/standard--preview-buttons.json
	$previewbuttons = false;

  // Add multidimensional array for the page content.
	$moduleList = array();
	$moduleList[] = array(
    "title" => "Farben",
    "include" => "colors.inc",
    "showhtml" => true,
    "showphp" => false,
    "showtemplate" => false,
    "showinfotext" => true,
    "infotext" => ""
  );
	$moduleList[] = array(
    "title" => "Verläufe",
    "include" => "gradients.inc",
    "showhtml" => true,
    "showphp" => false,
    "showtemplate" => false,
    "showinfotext" => true,
    "infotext" => ""
  );

	// ======  Please don't touch
	$filename = basename(__FILE__, '.php'); // without extension!!!
	$navitem = $filename;
	include 'inc/templates/template-modules.inc';
?>
