


$(function(){
	var heightArray=new Array(0, 1000, 2000); // 카테고리의 높이에 따른 구분입니다.
	heightArray.push($("main").height());
	// console.log("heightArray : "+heightArray.join(", "));

	$(window).scroll(function(){
		var h=$(window).scrollTop();

		/*
		if(h < 1000){
			$(".main_bg").removeClass("active");
			$("#area1").addClass("active");
		}else if(h < 2000){
			$(".main_bg").removeClass("active");
			$("#area2").addClass("active");
		}else if(h < $("body, html").height()){
			$(".main_bg").removeClass("active");
			$("#area1").addClass("active");
		}
		*/

		/*
		if(h >= 0 && h < 1000){
			$(".main_bg").removeClass("active");
			$("#area1").addClass("active");
		}else if(h >= 1000 && h < 2000){
			$(".main_bg").removeClass("active");
			$("#area2").addClass("active");
		}else if(h >= 2000 && h < $("body, html").height()){
			$(".main_bg").removeClass("active");
			$("#area3").addClass("active");
		}
		*/

		for(var i=0; i<heightArray.length; i++){
			if(h >= heightArray[i] && h < heightArray[i+1]){
				$(".main_bg").removeClass("active");
				$("#area"+(i+1)).addClass("active");
			}
		}
	});
	$(window).trigger("scroll");
});