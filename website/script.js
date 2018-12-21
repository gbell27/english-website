$(document).ready(function(){ 
    //ISSUES: append to list_3
	//prices linked to schools in list 3, neither to counties nor cities 
    var city_list= ["Essex","Portsmouth","London","Palermo","Chichister","Hatfield"];     //list of Counties written in the first list

    for(i=0; i< city_list.length; i++){                       //REF 0: for every element in the list of counties, it creates a paragraphs and puts it into the div list, then it appends the text inside the paragraph 
        var optione= document.createElement("P"); 
        optione.setAttribute("id",city_list[i]);
        $(".list_1").append(optione);		
        optione.innerHTML= city_list[i];				
    }	
    $.fn.toggleClick = function(funcArray) {					//REF FUNCTION:just leave it here, it's a way to execute a function at first click, then another at second click ALL THE FUNCTIONS MUST BE ELEMENT AN ARRAY
		return this.click(function() {
			var elem = $(this);
			var index = elem.data('index') || 0;

			funcArray[index]();
			elem.data('index', (index + 1) % funcArray.length);
		});
	};
		
    var Restaurants={Essex:["Mac","Burger", "Wagamama","Angus"],Portsmouth:["Carluccio", "Don", "Sushi", "Italia"],London:["Chair","sofa", "armchair", "wardrobe"],Palermo:["Mamma","Papa", "Sorella","Fratello"],Chichister :["Cat","Dog", "Fish", "Elephant"], Hatfield:["Mango", "Papaya", "Banana","Coconut"] };
    //LIST of CITIES of the second list
	
    var price=0;  //DELETE IT	it should be only for schools	
    $(".list_1 p").on("click",function(e){		     //REF 1: if I click  on a pararaph it takes the ID of it that corresponds to what's written inside, if p it's not selected, then the id will be the key of the ARRAY of the restaurants so the values are the cities of a county  
		var key= e.target.id;
		alert(key);		
			if($(this).hasClass("clicked")){					
			price -= 1;									//every price before div#3 will be deleted					
			alert(price);
			$(this).removeClass("clicked");
			document.getElementById("chronology").innerText = document.getElementById("chronology").innerText.replace(key, "");   
			document.getElementById("chronology").innerText = document.getElementById("chronology").innerText.replace(" > ", "");   // if you click on a selected paragraph we won't show the county in the history
			var value= Restaurants[key];			
			for(i=0; i< value.length; i++){							//LOOK UP REF 0
				var removee = document.getElementById(value[i]);
				removee.remove();}        	
		}        
		else{
				$(this).addClass("clicked");
				$("#list_2").show();
				price += 1;
				alert(price);
				var chronology = document.createElement("P");				//TEXT INTO WELL PARAGRAPH 
				chronology.setAttribute("id","chronology");
				$("div.well#hist").append(chronology);
				document.getElementById("chronology").innerText += key + " > ";   
				var value= Restaurants[key];
				for(i=0; i< value.length; i++){
					var optione = document.createElement("P");
					optione.setAttribute("id",value[i]);
					$(".list_2").append(optione);
					document.getElementById(value[i]).innerHTML= value[i];}    
			}		
		});    
       
    var Menus={Mac:["1","2","3","4"],Burger:["5","6","7","8"],Wagamama:["9","10","11","12"], Angus:["13","14","15","16"], Carluccio:["17","18","19","20"],Don:["21","22","23","24"],Sushi:["25","26","27","28"], Italia:["29","30","31","32"],Chair:["64","65","66","67"],sofa:["69","70","71","72"],armchair:["73","74","75","76"], wardrobe:["77","78","79","80"], Mamma:["48","49","50","51"],Papa:["52","53","54","55"],Sorella:["56","57","58","59"],Fratello:["60","61","62","63"], Cat:["33","34","34","35"],Dog:["36","37","38","39"],Fish:["40","41","42","43"],Elephant:["44","45","46","47"], Mango:["81","82","83","84"],Papaya:["85","86","87","88"],Banana:["89","90","91","92"], Coconut:["93","94","95","96"]};
    //List of all the schools of the cities
	
    //var price=0
    $("#list_2 p").on("click",function(e){					//LOOK UP REF 1 but with cities as keys and schools as values
		var key= e.target.id;
		alert(key);		 
		if($(this).hasClass("clicked")){					
			price -= 1;
			alert(price);
			$(this).removeClass("clicked");	
			document.getElementById("chronology").innerText = document.getElementById("chronology").innerText.replace(key, "");   
			document.getElementById("chronology").innerText = document.getElementById("chronology").innerText.replace(" > ", "");		
			var value= Menus[key];
			$('p #hist').html(function(){return $(this).text().replace( key, "");});
			for(i=0; i< value.length; i++){
				var removee = document.getElementById(value[i]);
				removee.remove();				
			}        	
		}        
		else{
				$(this).addClass("clicked");
				$(".list_3").show();
				price += 1;
				alert(price);        
				var chronology = document.createElement("P");				
				chronology.setAttribute("id","chronology");
				$("div.well#hist").append(chronology);
				document.getElementById("chronology").innerText += key;	
				var value= Menus[key];
				for(i=0; i< value.length; i++){
					var optione = document.createElement("P");
					optione.setAttribute("id",value[i]);
					$(".list_3").append(optione);
					document.getElementById(value[i]).innerHTML= value[i];}    
			}			
		});
	/*					SCHOOL SELECTION PUT PRICE HERE
	$("div#list_3 p").on("click",function(e){			
		if($(this).hasClass("clicked")){					
			price -= 1;
			alert(price);
			$(this).removeClass("clicked");
			document.getElementById("chronology").innerText = document.getElementById("chronology").innerText.replace(key, "");   
			document.getElementById("chronology").innerText = document.getElementById("chronology").innerText.replace(" > " "");			
		}        
		else{
			$(this).addClass("clicked");
			$("#Advertise").show();
			price += 1;
			alert(price);        
			var chronology = document.createElement("P");				
			chronology.setAttribute("id","chronology");
			$("div.well#hist").append(chronology);
			document.getElementById("chronology").innerText += key + " " ;			
			}		
		});	
    */
    
    $("h2#1").toggleClick([function(){										//REF 2 LOOK UP REF FUNCTION,  if I click on JPEG just show the file browsing button and hides GIF because it's JPEG OR GIF  
			var chart = document.createElement("P");				
			chart.setAttribute("id","chart");
			$("div.well#Chart").append(chart);
			var target= "JPEG" + " X " + price.toString()+"Schools ";
			document.getElementById("Chart").innerText += target;         //this adds to the well what user' s chosen
            $("form#img").show();
            $("h2#2").hide();			
			} ,
        function(){
			var target= "JPEG" + " X " + price.toString()+"Schools ";	//TOGGLING JPEG, GIF APPEARS AGAIN 		
            $("form#img").hide();
            $("h2#2").show();
			document.getElementById("Chart").innerText = "";			
			}]);
			
	$("h2#2").toggleClick([function(){									//LOOK UP REF FUNCTION, REF 2, same thing with GIF, also multiplies price X 2 cause it's the cost 
			var chart = document.createElement("P");				
			chart.setAttribute("id","chart");
			$("div.well#Chart").append(chart);
			var target= "GIF" + " X " + price.toString()+"Schools ";
			document.getElementById("Chart").innerText += target;
            price *= 2;
            $("form#gif").show();
            $("h2#1").hide();						
			} ,
        function(){
            price /= 2;
			var target= "GIF" + " X " + price.toString()+"Schools ";
            $("form#gif").hide();
            $("h2#1").show();
			document.getElementById("Chart").innerText = "";
			}]);
			
	$("button#yes").toggleClick([function(){						//clicking on the button yes, user wants to add an html link so we multiply 1.5 pounds to the total
		price *= 1.5;
		alert(price);
		$("form#textbox").show();
		var target= " + Link" + " = " + price.toString()+"£";
		document.getElementById("Chart").innerText += target;} ,
	function(){
		var target= " + Link" + " = " + price.toString()+"£" ;
		document.getElementById("Chart").innerText = document.getElementById("Chart").innerText.replace(target, "");
		price /= 1.5;								//toggling the price		
		alert(price);
		$("form#textbox").hide();		
		}]);
		
	$("button#no").toggleClick([function(){							
		if($("form#textbox").is(":visible")){
			var target= " + Link" + " = " + price.toString()+"£";
			document.getElementById("Chart").innerText = document.getElementById("Chart").innerText.replace(target, "");
			price /= 1.5;											//this is just UX because user can make a mistake clicking on yes before and then on NO
			alert(price);
			$("form#textbox").hide();
			}
		var target= " w/out Link" + " = " + price.toString()+"£";
		document.getElementById("Chart").innerText += target;	
		},function(){
			var target= " w/out Link" + " = " + price.toString()+"£";
			document.getElementById("Chart").innerText = document.getElementById("Chart").innerText.replace(target, "")
		}]);
		
	$("#Advertise h2").click(function(){					
			alert(price);											//just to see if it works remove all alerts when you're done
		}); 
    
	
    //parallax
    $(window).scroll(function () {
        $("body").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");});
});
