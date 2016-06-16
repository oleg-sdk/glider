$(document).ready(function(){

  $('#assessmentModal').on('show.bs.modal', function (event) {
	var trigger = $(event.relatedTarget); // Button that triggered the modal
	var videoTitle = trigger.data('video-title');
	var vidlink = trigger.data('video-link'); // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	var modal = $(this);
	var width = trigger.data('video-width') ? trigger.data('video-width') : 320 ;
	var height = trigger.data('video-height') ? trigger.data('video-height') : 240;

	modal.find('.modal-title').text(videoTitle);
	modal.find('.modal-body iframe').attr('src',vidlink);

	// modal.find('.modal-body iframe').attr('width',width);
	// modal.find('.modal-body iframe').attr('height',height);

	$(this).find('.modal-body,.modal-dialog').css({
	  'max-height':'100%',
	  'padding': 0
	 });
	});

	$('#assessmentModal').on('hide.bs.modal', function (event) {
	var modal = $(this);
	modal.find('.modal-body iframe').attr('src','');
	});

	$('.nano').nanoScroller({
		iOSNativeScrolling: true,
		preventPageScrolling: true
	});
  $('.carousel').carousel({
    pause: true,
    interval: false,
    wrap:false
  });
});
