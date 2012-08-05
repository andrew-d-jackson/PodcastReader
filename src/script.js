$('.card-common').live('hover', function(){
	if ($(this).find('audio').length > 0){
		if ($(this).find('.podcast_link').length > 0){
			$(this).find('.podcast_link').remove();
			$(this).find('.popout').show();
		} else {
			($(this).find('audio')).after("<a class='podcast_link' href='#'>Open as Podcast</a>");
			$(this).find('.popout').hide();
		}
	}
});
// function(){
//	$(this).find('.podcast_link').remove();
//	$(this).find('.popout').show();
//}

$('.podcast_link').live('click', function() {
  //window.location = chrome.extension.getURL('/player.html') + '?url=' + $(this).parent().find('audio').children("source:first").attr('src');
  url = chrome.extension.getURL('/player.html') + '?url=' + $(this).parent().find('audio').children("source:first").attr('src');
  window.open(url, "Podcast", "width=400, height=150");
  window.open('', '_self', ''); 
  window.close(); 
});