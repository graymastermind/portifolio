
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

        if(appObj.mainWidth<appObj.mainHeight){
        	if(newPosition.x+80 > -appObj.canvasWidth && newPosition.x+80 <appObj.canvasWidth){				

				if(newPosition.x<appMc.avatar.x){
					appMc.arrow_r.visible = false;
	                appMc.arrow_l.visible = true;
				}
				else{
		            appMc.arrow_l.visible = false;
	                appMc.arrow_r.visible = true;
				}

				appMc.avatar.x = newPosition.x
				appMc.box.x = newPosition.x+80	

			}
        }
        if(appObj.mainHeight<appObj.mainWidth){
        	if(newPosition.x+50 > -appObj.canvasWidth && newPosition.x+50 <appObj.canvasWidth){	

				if(newPosition.x<appMc.avatar.x){
					appMc.arrow_r.visible = false;
	                appMc.arrow_l.visible = true;
				}
				else{
		            appMc.arrow_l.visible = false;
	                appMc.arrow_r.visible = true;
				}

				appMc.avatar.x = newPosition.x
				appMc.box.x = newPosition.x+50
				
			}
        }

		
    }
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

	// appMc.mcSparkle = new itemSparkle({p:appMc.mcUI, tex:"flare",count:100, t:10, dx:15, dy:15, s:0.5});	



	
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