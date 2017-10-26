<?php
	$pagetitle 	= "Navigationen";

	// path to the includes
	$path = '../dev/inc/modules/';

	// shall there be previewbuttons?
	// configure them in json/standard--preview-buttons.json
	$previewbuttons = true;

	// Add multidimensional array for the page content.
	$moduleList = array();
	$moduleList[] = array(
		"title" => "Einfache Breadcrumb",
		"include" => "navigations/breadcrumb-simple-1.inc",
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
