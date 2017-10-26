<?php
	// the preview buttons
	$preview = 'json/standard--preview-buttons.json';
	$previewdata = file_get_contents($preview);
	$width = json_decode($previewdata, true);

	include "inc/templates/template-parts/modules-head.inc";
?>

<div class="sg-wrapper">
  <div class="sg-inner">
		<a href="#sg-menu" class="sg-menu-link"><span class="visuallyhidden">Das Menü öffnen</span></a>
    <?php
    	include "inc/templates/template-parts/modules-nav.inc";
    ?>
  </div> <!-- /.sg-inner -->
</div> <!-- /.sg-wrapper -->

<main class="sg-wrapper">
	<div class="sg-inner">
		<h1 class="sg-pagetitle"><?php echo $pagetitle; ?></h1>
		<?php
			foreach ($moduleList as $item ) {
				$title = $item["title"];
				$inc = $item["include"];

				$showhtml = $item["showhtml"];
				$showphp = $item["showphp"];
				$showtemplate = $item["showtemplate"];
				$showinfotext = $item["showinfotext"];

				$infotext = $item["infotext"];

				include "inc/templates/template-module-display-tabs.inc";
			}
		?>
	</div> <!-- /.sg-inner -->
</main> <!-- /.sg-wrapper -->

<?php
	include "inc/templates/template-parts/modules-footer.inc";
?>
