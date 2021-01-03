// Write your JavaScript code here.
// Remember to pay attention to page loading

window.addEventListener("load", function(){


	let takingoff = document.getElementById('takeoff');

	takeoff.addEventListener("click", function(event){


	let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");

	if(confirmation)
	{


		let fstat = document.getElementById("flightStatus");
		fstat.innerHTML="Shuttle in flight.";

		let colo=document.getElementById("shuttleBackground");
		colo.style.backgroundColor="blue";

		let sheight = document.getElementById("spaceShuttleHeight");
		sheight.innerHTML = "10, 000" ;

	}

	});

	let land = document.getElementById("landing");

	land.addEventListener("click", function(event){


		window.alert("The shuttle is landing. Landing gear engaged.")

		let fstat1 = document.getElementById("flightStatus");
		fstat1.innerHTML="The shuttle has landed.";


		let colo1=document.getElementById("shuttleBackground");
		colo1.style.backgroundColor="green";

		let sheight1 = document.getElementById("spaceShuttleHeight");
		sheight1.innerHTML = "0" ;


	});


	let abort = document.getElementById('missionAbort');

	abort.addEventListener("click", function(event){


	let abortConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");

	if(abortConfirmation)
	{


		let fstat2 = document.getElementById("flightStatus");
		fstat2.innerHTML="Mission aborted.";

		let colo2=document.getElementById("shuttleBackground");
		colo2.style.backgroundColor="green";

		let sheight2 = document.getElementById("spaceShuttleHeight");
		sheight2.innerHTML2 = "0" ;

	}

	});



let rocketObj = document.getElementById('rocket');
    rocketObj.style.position = 'absolute';
    rocketObj.style.left = '0px';
    rocketObj.style.bottom = '0px';

    let rockrelpos = document.getElementById("rocket");
	rockrelpos.style.position = 'absolute';
	rockrelpos.style.left='0px';
	rockrelpos.style.bottom='0px';	
    
	let upbutton = document.getElementById("up");
	upbutton.addEventListener("click", function(event){

	let uppos = parseInt(rockrelpos.style.bottom)+10+"px";
    rockrelpos.style.bottom = uppos;

    });
       
     let downbutton = document.getElementById("down");
	 downbutton.addEventListener("click", function(event){

	 let downs = parseInt(rockrelpos.style.bottom)-10+"px";
     rockrelpos.style.bottom = downs;


    });

     
     let rightbutton = document.getElementById("right");
	 rightbutton.addEventListener("click", function(event){
	
	 let rights = parseInt(rockrelpos.style.left)+10+"px";
     rockrelpos.style.left = rights;


    });

    let leftbutton = document.getElementById("left");
	leftbutton.addEventListener("click", function(event){

	let lefts = parseInt(rockrelpos.style.left)-10+"px";
    rockrelpos.style.left = lefts;

    });


	})
