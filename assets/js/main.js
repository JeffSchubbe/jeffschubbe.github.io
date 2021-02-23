/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/



// Additional modal scripts
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

let modal_videos = document.querySelectorAll('iframe.modal-video');
let buttons = document.querySelectorAll('button');
	let modals = document.querySelectorAll('.modal');
	
	function showModal(id) {
		let m = document.getElementById(id);
		m.classList.add('visible');
	  }
	  
	  function hideModals() {
		modals.forEach(m => {
		  if(m.classList.contains('visible')) console.log(m);
		  m.classList.remove('visible');
		});
	  }
	//   function printMessage() {
	// 	modals.forEach(m => {
	// 	  console.log(m);
	// 	});
	//   }
	  
	  buttons.forEach(b => {
		b.addEventListener('click', event => {
		  //hideModals();
		  showModal(b.dataset.modal);
		  console.log(b);
		});
	  });
	  
	  modals.forEach(m => {
		let x = m.querySelector('button.close');
		x.addEventListener('click', hideModals);
		// x.addEventListener('click', printMessage);
	  });


(function($) {

	var	$window = $(window),
		$body = $('body');

	// $('.modal').click(function(ev){
	// 	if(ev.target != this) return;
	// 	$('.modal').remove('visible');
	// }

	// var modal = modal[15];
	// var btn = btn[15];
	// var span = btn[15];

	// Get the modal
	
	// var i = 0;
	// //for(i; i < 14; i++){
	// var modal = document.getElementById("myModal");

	// // Get the button that opens the modal
	// var btn = document.getElementById("myBtn");

	// // Get the <span> element that closes the modal
	// var span = document.getElementsByClassName("close");

	// // When the user clicks the button, open the modal 
	// btn.onclick = function() {
	// 	modal.style.display = "block";
	// }

	// // When the user clicks on <span> (x), close the modal
	// span.onclick = function() {
	// 	modal.style.display = "none";
	// }


	// // When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		modals.forEach(m => {
			if (event.target == m) {
				m.classList.remove('visible');
				// stop embedded video from playing after modal is closed
				
				// $(m.getAttribute("id") + " iframe.modal-video").attr("src", $(m.getAttribute("id") + " iframe.modal-video").attr("src"));


				// var src=$('iframe.modal-video').attr('src');
				// $('iframe.modal-video').attr('src', '');
				// $('iframe.modal-video').attr('src', src);

				// modal_videos.forEach(vid => {
				// 	var src=vid.attr('src');
				// 	vid.attr('src', '');
				// 	vid.attr('src', src);
				// })
				// console.log("test successful!");
			}
		})
		// if (event.target == $('.modal')) {
		// 	hideModals();
		// 	window.alert("Test successful.");;
		// }
	}
	//}

	// window.onclick = function(event) {
	// 	console.log("test");
	// }

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);