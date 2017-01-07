$(function(){
    var lamp = $('.lamp');
    var nav=$('#nav');
	var lamp_big = $('.theme li:odd');
	var theme = $('.theme');
	var common=$('.theme li:even');
	var choose=$('.choose');
	var protect=$('.protected');
	var choose_two=$('.choose-two');
	var back=$('.back');
	var end=$('.main');
	console.log(protect.length);
	console.log(lamp_big.length);
	var flag=true;
	common.on('touchmove',function(){
		flag=false;
	})
	common.on('touchend',function(){
		if(flag){
			if($(this).hasClass('protect')){
	        	choose_two.css("display", "block");
	            choose_two.css('transform','translateY(-346px)');
	        }else{
	        	choose.css("display", "block");
	            choose.css('transform','translateY(30px)');
	        }
			$('.common').css("display", "none");
			nav.css("display", "block");
	        end.css("display", "none");
	        
	        $(this).next().css("display", "block").addClass('active');
		}
		flag=true;
        return false;
	});
//	back.on('touchend',function(){
//		common.css("display", "block");
//      nav.css("display", "none");
//      end.css("display", "block");
//      
//      choose.css('transform','translateY(430px)');
//      choose.css("display", "none");
//      lamp_big.css("display", "none");
//	})
// var scrollw=parseInt($('.microwave').position().left+$('.microwave').width()-$('.theme').width());
// 
// 	theme.scroll(function(){
// 		if(theme.scrollLeft()==scrollw){
// 			console.log(1);
// 		}
// 		if(theme.scrollLeft()==0){
// 			console.log(2);
// 		}

   	})

 