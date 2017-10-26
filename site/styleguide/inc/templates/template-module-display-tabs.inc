<div class="sg-module-cnt">
	<h2 class="sg-title"><?php echo $title ?></h2>

	<?php if ($previewbuttons == true) { ?>
	<div class="sg-preview-buttons">
		<h3 class="sg-preview-buttons-headline">Das Modul skalieren</h3>
		<?php
	    foreach($width as $wi) {
				$w = $wi["width"];

	    	echo '<button data-width="'.$w.'">'.$w.'</button>';
	    }
		?>
	</div>
	<?php }?>

	<div class="sg-preview" style="width: 75%;">
		<?php
			include $path.$inc;
		?>
	</div>


  <div class="sg-tabs">
    <ul class="sg-tab-links">
			<?php
				if ($showhtml == true) {
					include "inc/templates/template-parts/button-html.inc";
				}
			?>
			<?php
				if ($showphp == true) {
					include "inc/templates/template-parts/button-php.inc";
				}
			?>
			<?php
				if ($showtemplate == true) {
					include "inc/templates/template-parts/button-template.inc";
				}
			?>
			<?php
				if ($showinfotext == true) {
					include "inc/templates/template-parts/button-infotext.inc";
				}
			?>
    </ul>

    <div class="sg-tab-content">
			<?php
				if ($showhtml == true) {
					include "inc/templates/template-parts/tab-content-html.inc";
				}
			?>
			<?php
				if ($showphp == true) {
					include "inc/templates/template-parts/tab-content-php.inc";
				}
			?>
			<?php
				if ($showtemplate == true) {
					include "inc/templates/template-parts/tab-content-template.inc";
				}
			?>
			<?php
				if ($showinfotext == true) {
					include "inc/templates/template-parts/tab-content-infotext.inc";
				}
			?>
    </div>
  </div>

</div>
