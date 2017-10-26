<?php include "inc/templates/template-parts/head.inc"; ?>

    <?php include "inc/modules/navigations/main-navigation.inc"; ?>

    <?php 
        foreach($firstincludes as $first) {
             include 'inc/modules/'.$first;                       
        }
    ?>
                
    <?php 
        foreach($secondincludes as $second) {
             include 'inc/modules/'.$second;                       
        }
    ?>

    <?php 
        foreach($thirdincludes as $third) {
             include 'inc/modules/'.$third;                       
        }
    ?>

<?php include "inc/templates/template-parts/foot.inc"; ?>
