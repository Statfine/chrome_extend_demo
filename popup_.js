var laodUrl = '';

$(document).ready(function() {
	chrome.tabs.query({
	  active: true,
	  windowId: -2
	}, (tabs) => {
		console.log(tabs)
		laodUrl = tabs[0].url;

		$('.submit-btn').attr('disable', '');
		$(".submit-btn").css({ backgroundColor: "#007dfd" });

		chrome.tabs.sendMessage(tabs[0].id,{
                type: "url"
            }, function(response) {
                console.log(response);
            });

	});

	// encodeURIComponent decodeURIComponent
	$('.submit-btn').click(function(){
		console.log('click')
	})

});
