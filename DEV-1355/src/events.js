
function onDragStart(event)
{
    // storing reference to the data
    this.data = event.data;
    this.dragging = true;
	if(started === false){
		FirstTap()
	}
	started = true;

}

function onDragEnd()
{
    this.dragging = false;
    this.data = null;
}

function onDragMove()
{
    if (this.dragging)
    {
        var newPosition = this.data.getLocalPosition(this.parent);
		
		if(newPosition.x > -appObj.canvasWidth && newPosition.x <appObj.canvasWidth){
			appMc.bag.x = newPosition.x-25;
			appMc.avatar.x = newPosition.x;
		}
    }
}

const btnDown = (e) =>{			
	console.log("Gray Chiukuwa")
}	

const EndGame = () =>{
	let i, objTemp;
	if(stateGame !=10){
		stateGame = 10;	

		appMc.mcBgFS.visible = true;						
	}			
}			
const StageDown = (e) =>{			
	if(stateGame == 0){
		stateGame = 1;	
		if(!isGlobalActive){
			isGlobalActive = true;
			isGlobalSound = true;
			Howler.mute(!isGlobalSound);	
		}	
	}
	mouse.isDown = true;				
}
const StageMove = (e) =>{
	if(mouse.isDown){				
		mouse.x = e.data.getLocalPosition(appMc.mcWorldCamera).x;	
		mouse.y = e.data.getLocalPosition(appMc.mcWorldCamera).y;					
	}								
}			
const StageUp = (e) =>{
	mouse.isDown = false;	

//	appMc.mcConfetti = new Confetti({p:appMc.mcUI, count:100});	

	appMc.mcSparkle = new itemSparkle({p:appMc.mcUI, tex:"coin_2",count:100, t:10, dx:15, dy:15, s:0.5});	



	
}
const BtnGlobalSound =(e) =>{

	if(isGlobalSound){
		isGlobalSound = false;
		
		appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_off"];
		
		Howler.mute(true);
		
	}else{
		isGlobalSound = true;
	
		appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_on"];
		
		Howler.mute(false);
	}			
}