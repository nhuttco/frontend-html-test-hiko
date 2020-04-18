/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Product Slider
5. Set Scroll to Top


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		if($(window).width() <= 768)
		{
			initProductSlider();
		}
	});

	$(document).on('scroll', function()
	{
		setHeader();
		setScrollToTop();
	});

	initMenu();
	initProductSlider();
	setScrollToTop();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		var header = $('.fixed_header');

		if($(window).scrollTop() > 180)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length && $('.hamburger').length)
		{
			var menu = $('.menu');
			var hamburger = $('.hamburger');
			var close = $('.menu_close');
			var door = $('.menu_door');
			var menuContent = $('.menu_content');
			var items = $('.menu_nav ul li');

			hamburger.on('click', function()
			{
				// menu.toggleClass('active');

				// Open menu
				TweenMax.to(menu, 0,
				{
					visibility:'visible',
					opacity:1
				});
				TweenMax.to(door, 1,
				{
					width:'50%',
					ease: Power3.easeOut
				});
				TweenMax.to(menuContent, 0.4,
				{
					opacity:1,
					delay:0.4
				});
				TweenMax.staggerFromTo(items,1,
				{
					y:10,
					opacity:0,
					ease:Power2.easeInOut
				},
				{
					y:0,
					opacity:1,
					delay:0.2
				},0.08)
			});

			close.on('click', function()
			{
				// menu.toggleClass('active');
				TweenMax.to(menuContent, 0.4,
				{
					opacity:0
				});
				TweenMax.to(door, 1,
				{
					width:0,
					ease: Power3.easeOut,
					delay:0.6
				});
				TweenMax.to(menu, 0,
				{
					visibility:'hidden',
					opacity:0,
					delay:1.5
				});
			});

			items.on('click', function()
			{
				// menu.toggleClass('active');
				TweenMax.to(menuContent, 0.4,
				{
					opacity:0
				});
				TweenMax.to(door, 1,
				{
					width:0,
					ease: Power3.easeOut,
					delay:0.6
				});
				TweenMax.to(menu, 0,
				{
					visibility:'hidden',
					opacity:0,
					delay:1.5
				});
			});
		}
	}

	/* 

	4. Init Product Slider

	*/

	function initProductSlider()
	{
		if($('#list_product').length && $(window).width() <= 768)
		{
			var productSlider = $('#list_product');
			productSlider.owlCarousel(
			{
				items:3,
				loop:false,
				autoplay:false,
				nav:false,
				dots:true,
				smartSpeed:1200,
				margin:30,
				responsive:
				{
					0:
					{
						items:1
					},
					768:
					{
						items:1
					},
					992:
					{
						items:3
					}
				}
			});
		}
	}

	/* 

	5. Set Scroll to Top

	*/

	function setScrollToTop()
	{
		var scrollUp = $('.scroll_up');

		if($(window).scrollTop() > 180)
		{
			scrollUp.addClass('scrolled');
		}
		else
		{
			scrollUp.removeClass('scrolled');
		}
	}

});
