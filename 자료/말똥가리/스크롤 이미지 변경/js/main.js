$(function(){
	var heightArray=new Array(0, 1000, 2000); // 카테고리의 높이에 따른 구분입니다.
	heightArray.push($("body, html").height());
	// console.log("heightArray : "+heightArray.join(", "));

	$(window).scroll(function(){
		var h=$(window).scrollTop();

	

		for(var i=0; i<heightArray.length; i++){
			if(h >= heightArray[i] && h < heightArray[i+1]){
				$(".main_bg").removeClass("active");
				$("#area"+(i+1)).addClass("active");
			}
		}
	});
	$(window).trigger("scroll");
});