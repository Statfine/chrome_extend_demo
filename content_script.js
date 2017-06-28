// 微博直播列表点击事件
$('.li_list_2').delegate('li', 'click', function (event) {
	var aObject = $(this).parents();
	var jumpUrl = aObject.attr('href');
	alert(jumpUrl);
});
