var buttonIsOpen1 = false;
var buttonIsOpen2 = false;
var buttonIsOpen3 = false;
var buttonIsOpen4 = false;

var Image1 = $("asteroid");

var openedTab = "";

//for html <div align = "center"><img src = "asteroid.png" align = "center"></img></div>

$(document).ready(function(){
	
	document.getElementById("left-side-bar").style.height = window.innerHeight;
	document.getElementById("thing1").style.height = 80;
	document.getElementById("thing2").style.height = 80;
	document.getElementById("thing3").style.height = 80;
	
	document.getElementById("thing1back").style.height = 80;
	document.getElementById("thing2back").style.height = 80;
	document.getElementById("thing3back").style.height = 80;

	//thing 1
	
	/*
	$(thing1).mouseenter(function(){
		$(thing1).fadeTo("fast", 0.5);
	});
	
	
	$(thing1).mouseleave(function(){
		$(thing1).fadeTo("fast", 1);
	});
	*/
	
	$(text1).hide();
	$(asteroid).hide();
	
	$(thing1).click(function(){
			if(!buttonIsOpen1 && openedTab == ""){	
			$(thing1).animate({
				"left" : "+=320px"
			}, "fast", function(){
				$(thing1).animate({
					height : "+=300"
				}, function(){
					$(text1).fadeTo("slow", 1);
					$(asteroid).fadeTo("fast", 1);
				});
			});
			openedTab = this;
			buttonIsOpen1 = true;
		}
		else if(openedTab === this && buttonIsOpen1){
			$(asteroid).hide();
			$(text1).hide();
			$(thing1).animate({
				height : "-=300px"
			}, "fast", function(){
				$(thing1).animate({
					"left" : "-=320px"
				}, "fast");
			});
			openedTab = "";
			buttonIsOpen1 = false;
		}
	});
	
	
	//thing2
	/*
	$(thing2).mouseenter(function(){
		$(thing2).fadeTo("fast", 0.5);
	});
	
	
	$(thing2).mouseleave(function(){
		$(thing2).fadeTo("fast", 1);
	});
	*/
	$(asteroid2).hide();
	$(text2).hide();
	
	$(thing2).click(function(){
		if(!buttonIsOpen2 && openedTab == ""){	
			$(thing2).animate({
				"left" : "+=320px"
			}, "fast", function(){
				$(thing2).animate({
					height : "+=300"
				}, function(){
					$(asteroid2).fadeTo("fast", 1);
					$(text2).fadeTo("fast", 1);
				});
			});
			openedTab = this;
			buttonIsOpen2 = true;
		}
		else if(openedTab === this && buttonIsOpen2){
			$(text2).hide();
			$(asteroid2).hide();
			$(thing2).animate({
				height : "-=300px"
			}, "fast", function(){
				$(thing2).animate({
					"left" : "-=320px"
				}, "fast");
			});
			openedTab = "";
			buttonIsOpen2 = false;
		}
	});
	
	//thing3
	/*
	$(thing3).mouseenter(function(){
		$(thing3).fadeTo("fast", 0.5);
	});
	
	
	$(thing3).mouseleave(function(){
		$(thing3).fadeTo("fast", 1);
	});
	*/
	$(asteroid3).hide();
	$(text3).hide();
	
	$(thing3).click(function(){
		if(!buttonIsOpen3 && openedTab == ""){	
			$(thing3).animate({
				"left" : "+=320px"
			}, "fast", function(){
				$(thing3).animate({
					height : "+=300"
				}, function(){
					$(text3).fadeTo("fast", 1);
					$(asteroid3).fadeTo("fast", 1);
				});
			});
			openedTab = this;
			buttonIsOpen3 = true;
		}
		else if(openedTab === this && buttonIsOpen3){
			$(text3).hide();
			$(asteroid3).hide();
			$(thing3).animate({
				height : "-=300px"
			}, "fast", function(){
				$(thing3).animate({
					"left" : "-=320px"
				}, "fast");
			});
			openedTab = "";
			buttonIsOpen3 = false;
		}
	});
	
	//thing4
	/*
	$(thing4).mouseenter(function(){
		$(thing4).fadeTo("fast", 0.5);
	});
	
	
	$(thing4).mouseleave(function(){
		$(thing4).fadeTo("fast", 1);
	});
	*/

	
	if(buttonIsOpen2 == true){
		
	}
	
});



function onWindowResize(){
	
	document.getElementById("left-side-bar").style.height = window.innerHeight;
	document.getElementById("left-side-bar").style.width = 320;
	document.getElementById("thing1").style.height = 80;
	document.getElementById("thing2").style.height = 80;
	document.getElementById("thing3").style.height = 80;
	
	document.getElementById("thing1back").style.height = 80;
	document.getElementById("thing2back").style.height = 80;
	document.getElementById("thing3back").style.height = 80;
	
}

window.addEventListener('resize', onWindowResize);