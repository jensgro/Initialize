<?php
	$pagetitle 	= "Listen";

	// path to the includes
	$path = '../dev/inc/modules/lists/';

	// shall there be previewbuttons?
	// configure them in json/standard--preview-buttons.json
	$previewbuttons = true;

	// Add multidimensional array for the page content.
	$moduleList = array();
	$moduleList[] = array(
		"title" => "Nummerierte Liste",
		"include" => "numbered-list-1.inc",
		"showhtml" => true,
		"showphp" => false,
		"showtemplate" => false,
		"showinfotext" => true,
		"infotext" => ""
	);
	$moduleList[] = array(
		"title" => "Nummerierte Liste",
		"include" => "numbered-list-2.inc",
		"showhtml" => true,
		"showphp" => false,
		"showtemplate" => false,
		"showinfotext" => true,
		"infotext" => "Hier steht ganz viel tolles Zeug!"
	);
	$moduleList[] = array(
		"title" => ".no-list",
		"include" => "no-list.inc",
		"showhtml" => true,
		"showphp" => true,
		"showtemplate" => false,
		"showinfotext" => false,
		"infotext" => ""
	);

	// ======  Please don't touch
	$filename = basename(__FILE__, '.php'); // without extension!!!
	$navitem = $filename;
	include 'inc/templates/template-modules.inc';

?>
