<?php
	$pagetitle 	= "Elementübersicht";

	// path to the includes
	$path = 'inc/elements/';

	// shall there be previewbuttons?
	// configure them in json/standard--preview-buttons.json
	$previewbuttons = true;

	// Add multidimensional array for the page content.
	$moduleList = array();
	$moduleList[] = array(
		"title" => "Überschriften",
		"include" => "headlines.inc",
		"showhtml" => true,
		"showphp" => false,
		"showtemplate" => false,
		"showinfotext" => true,
		"infotext" => ""

	);
	$moduleList[] = array(
		"title" => "Absatz",
		"include" => "paragraph.inc",
		"showhtml" => true,
		"showphp" => false,
		"showtemplate" => false,
		"showinfotext" => true,
		"infotext" => ""
	);
	$moduleList[] = array(
		"title" => "Formularelemente",
    "include" => "form-select.inc",
    "showhtml" => true,
    "showphp" => false,
    "showtemplate" => false,
    "showinfotext" => true,
    "infotext" => ""
	);
	$moduleList[] = array(
		"title" => "Formularelemente",
    "include" => "form-input.inc",
    "showhtml" => true,
    "showphp" => false,
    "showtemplate" => false,
    "showinfotext" => true,
    "infotext" => ""
	);
	$moduleList[] = array(
		"title" => "Formularelemente",
    "include" => "form-buttons.inc",
    "showhtml" => true,
    "showphp" => false,
    "showtemplate" => false,
    "showinfotext" => true,
    "infotext" => ""
	);
	$moduleList[] = array(
		"title" => "Formularelemente",
    "include" => "form-textarea.inc",
    "showhtml" => true,
    "showphp" => false,
    "showtemplate" => false,
    "showinfotext" => true,
    "infotext" => ""
	);
	$moduleList[] = array(
		"title" => "Formularelemente",
    "include" => "form-datalist.inc",
    "showhtml" => true,
    "showphp" => false,
    "showtemplate" => false,
    "showinfotext" => true,
    "infotext" => ""
	);
	$moduleList[] = array(
		"title" => "Unsortierte Liste",
    "include" => "unsorted-lists.inc",
    "showhtml" => true,
    "showphp" => false,
    "showtemplate" => false,
    "showinfotext" => true,
    "infotext" => ""
	);
	$moduleList[] = array(
		"title" => "Sortierte Liste",
    "include" => "sorted-lists.inc",
    "showhtml" => true,
    "showphp" => false,
    "showtemplate" => false,
    "showinfotext" => true,
    "infotext" => ""
	);
	$moduleList[] = array(
		"title" => "Kurze Tabelle",
    "include" => "table-short.inc",
    "showhtml" => true,
    "showphp" => false,
    "showtemplate" => false,
    "showinfotext" => true,
    "infotext" => ""
	);
	$moduleList[] = array(
		"title" => "Komplexe Tabelle",
    "include" => "table-complex.inc",
    "showhtml" => true,
    "showphp" => false,
    "showtemplate" => false,
    "showinfotext" => true,
    "infotext" => ""
	);

	// ======  Don't touch
	$filename = basename(__FILE__, '.php'); // without extension!!!
	$navitem = $filename;
	include 'inc/templates/template-modules.inc';
?>
