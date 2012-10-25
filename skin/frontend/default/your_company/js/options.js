/**
 * Use this file to add your own custom jQuery or JavaScript to
 * the theme! By default, there are only the options for the
 * various sliders that come automatically with this theme.
 */
// @link https://github.com/ProLoser/AnythingSlider/wiki

jQuery(document).ready( function () {
	
	// controller for arrows on sidebar dropdowns
	
	jQuery('.block-link').click( function () {
		// does .block-link have a parent that has the class closed?
		if (!jQuery(this).parent().hasClass('closed')) {
			// if not, then add it when clicked
			jQuery(this).parent().addClass('closed');
		} else {
			// if so, the remove it when clicked
			jQuery(this).parent().removeClass('closed');
		}
	});
	
	jQuery('li.over').hover(
		function () {
			jQuery('#nav ul li ul').slideDown(200);
		},
		function () {
			jQuery('#nav ul li ul').slideUp(200);
		}
	);
	
	jQuery('.cart-dropdown').hover(
		function () {
			jQuery('.dropdown').stop(true).slideDown(300);
			jQuery('.dropdown').addClass('open'); // for styling purposes
		},
		function () {
			jQuery('.dropdown').stop(true).slideUp(300);
			jQuery('.dropdown').removeClass('open'); // for styling purposes
	});
	
	// replaces the magento default animation for the password change
	// found in customer/account/edit/
	jQuery('.my-account li.control input:checkbox').click( function () {
		// is the input checked?
		if (jQuery('.my-account li.control input:checkbox').is(':checked')) {
			// if yes, fade me in, bro
			jQuery('.my-account .change_password').fadeIn(400);
		} else {
			// if not, hide me, bro
			jQuery('.my-account .change_password').hide();
		}
	});
	
	jQuery.fn.showHide = function (options) {
 
	//default vars for the plugin
	var defaults = {
		speed: 400,
		easing: '',
		changeText: 0,
		showText: 'Show',
		hideText: 'Hide'
	};
	
        var options = jQuery.extend(defaults, options);
 
        jQuery(this).click(function() {
		// optionally add the class .toggleDiv to each div you want to automatically close
		jQuery('.toggleDiv').slideUp(options.speed, options.easing);
		// this var stores which button you've clicked
		var toggleClick = jQuery(this);
		// this reads the rel attribute of the button to determine which div id to toggle
		var toggleDiv = jQuery(this).attr('rel');
		// here we toggle show/hide the correct div at the right speed and using which easing effect
		jQuery(toggleDiv).slideToggle(options.speed, options.easing, function() {
		// this only fires once the animation is completed
		if(options.changeText === 1) {
			jQuery(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
		}
	});
 
          return false;
 
        });
 
    };
});

jQuery(document).ready(function() {
	jQuery('#nivo_slider').nivoSlider();
	
	jQuery('#anything_slider').anythingSlider({
		// default functionality
		mode                : "horiz",   // Set mode to "horizontal", "vertical" or "fade" (only first letter needed); replaces vertical option 
		expand              : false,     // If true, the entire slider will expand to fit the parent element 
		resizeContents      : true,      // If true, solitary images/objects in the panel will expand to fit the viewport 
		showMultiple        : false,     // Set this value to a number and it will show that many slides at once 
		easing              : "swing",   // Anything other than "linear" or "swing" requires the easing plugin or jQuery UI
		buildArrows         : true,      // If true, builds the forwards and backwards buttons 
		buildNavigation     : true,      // If true, builds a list of anchor links to link to each panel 
		buildStartStop      : true,      // If true, builds the start/stop button
		toggleArrows        : false,     // If true, side navigation arrows will slide out on hovering & hide @ other times 
		toggleControls      : false,     // if true, slide in controls (navigation + play/stop button) on hover and slide change, hide @ other times
		enableArrows        : true,      // if false, arrows will be visible, but not clickable. 
		enableNavigation    : true,      // if false, navigation links will still be visible, but not clickable. 
		enableStartStop     : true,      // if false, the play/stop button will still be visible, but not clickable. Previously "enablePlay" 
		enableKeyboard      : true,      // if false, keyboard arrow keys will not work for this slider. 
		delay               : 3000,      // How long between slideshow transitions in AutoPlay mode (in milliseconds) 
		resumeDelay         : 15000,     // Resume slideshow after user interaction, only if autoplayLocked is true (in milliseconds). 
		animationTime       : 600,       // How long the slideshow transition takes (in milliseconds) 
		delayBeforeAnimate  : 0         // How long to pause slide animation before going to the desired slide (used if you want your "out" FX to show). 
	});
	
	jQuery('.flexslider').flexslider({
		animation: "slide"
	});
	
	/*
	 * Special note on this, there's an issue with the styling
	 * when the slide action is vertical. I haven't figured it out
	 * yet...
	 */
	jQuery('.flexslider_upsell').flexslider({
		animation: "slide",
		animationLoop: true,
		pauseOnHover: true,
		controlNav: false,
		slideshow: false,
		minItems: 1,
		maxItems: 1
	});
	
	jQuery('.flexslider_crosssell').flexslider({
		animation: "slide",
		animationLoop: true,
		pauseOnHover: true,
		controlNav: false,
		slideshow: false,
		minItems: 1,
		maxItems: 1
	});
	
	jQuery('.shopping_options').showHide({
		speed: 400,
		easing: '',
		changeText: 0
	});
	
	jQuery('.tags').showHide({
		speed: 400,
		easing: '',
		changetext: 0
	});
	
	jQuery('.account_nav').showHide({
		speed: 400,
		easing: '',
		changetext: 0
	});
	
	jQuery('.sidebar_cart').showHide({
		speed: 400,
		easing: '',
		changetext: 0
	});
	
	jQuery('.compare_sidebar').showHide({
		speed: 400,
		easing: '',
		changetext: 0
	});
});

