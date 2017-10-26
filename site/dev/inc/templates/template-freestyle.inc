<?php include "inc/templates/template-parts/head.inc"; ?>

    <?php include "inc/modules/navigations/main-navigation.inc"; ?>

    <?php 
        foreach($mainincludes as $main) {
             include 'inc/modules/'.$main;                       
        }
    ?>

<?php include "inc/templates/template-parts/foot.inc"; ?>
