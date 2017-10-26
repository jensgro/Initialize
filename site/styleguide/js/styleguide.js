
		$(document).ready(function(){
		  var animTime = 300,
		      clickPolice = false;

		  $(document).on('touchstart click', '.acc-btn', function(){
		    if(!clickPolice){
		       clickPolice = true;

		      var currIndex = $(this).index('.acc-btn'),
		          targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();

		      $('.acc-btn h1').removeClass('selected');
		      $(this).find('h1').addClass('selected');

		      $('.acc-content').stop().animate({ height: 0 }, animTime);
		      $('.acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

		      setTimeout(function(){ clickPolice = false; }, animTime);
		    }

		  });

		});

    // FAQ - Akkordeon
    (function($) {
    var allPanels = $('.sg-source-infos__data').hide();

    $('.sg-source-infos__headline').on("touchstart click", function() {
         $this = $(this);
         $target =  $this.next();
   	 		 $allheadlines = $(".sg-source-infos__headline");
   			// $headline = $this.find("h3");

         if(!$target.hasClass('open')){
            allPanels.slideUp().removeClass('open');
   				 $allheadlines.removeClass("selected");
            $target.addClass('open').slideDown();
   				 $this.addClass("selected");
         } else {
           $this.removeClass("selected");
           $target.slideUp().removeClass("open");
         }

       return false;
     });

   })(jQuery);

// Tabs - die Alternative zum Akkordeon
$(".sg-tab").hide();

// Wenn kein Inhalt, dann ausblenden
// if($(".source-infos__data code:empty")){
//   var $that = $(this);
//   var $codeCnt = $that.parent().parent();
//   var $target = $codeCnt.attr("data-target");
//   var $btn = $codeCnt.parent().parent().prev(".sg-tab-links").find("button["+$target+"]");
//
//   $btn.hide();
// }

$('.sg-tab-links button').on('click', function(event) {
	$that = $(this);
	var target = $that.attr('data-target');
	var $showme = $that.parent().parent().next().find('[data-target="'+target+'"]');

  // Show/Hide Tabs
  $($showme).show().siblings().hide();

	if (!$that.parent('li').hasClass("active")) {
		// Change/remove current tab to active
	  $that.parent('li').addClass('active').siblings().removeClass('active');
	} else {
		// Change/remove current tab to active
		$that.parent('li').removeClass('active');
		$showme.hide();
	}


  event.preventDefault();

});

// Change the widths of the modules.
$(document).ready(function() {

	if ($(".sg-preview-buttons").length) {

		$(".sg-preview-buttons > button").on("click", function() {
			var $that = $(this);
			var width = $that.attr("data-width");
			var nextWrapper = $that.parent().next(".sg-preview");

	    $that.siblings().removeClass("selected");
	    $that.addClass("selected");

	    nextWrapper.css("width", width);
		});

	}
});

// Switch styles

$(document).ready(function() {

	if ($(".sg-styles-buttons").length) {

		var $stylesButton = $(".sg-styles-buttons > button");
		var $stylesMatch = $stylesButton.attr("data-style");
		var $key = "cssfile";
		var $myValue = window.localStorage.getItem($key);
		var $changeme = $("#projectStyle");

		if($myValue != undefined){
			$changeme.attr("href", "css/" + $myValue + ".css");
			$stylesButton.removeClass("selected");
			$(".sg-styles-buttons > button[data-style='"+ $myValue +"']").addClass("selected");

		}

		$stylesButton.on("click", function(){
			var $that = $(this);
			var $mysiblings = $that.siblings();
			// var $key = "cssfile";
			// var $changeme = $("#projectStyle");
			var $newCSS = $that.attr("data-style");

			$changeme.attr("href", "css/" + $newCSS + ".css");
			$mysiblings.removeClass("selected");
			$that.addClass("selected");

			localStorage.setItem($key, $newCSS);
		});

	}

});
