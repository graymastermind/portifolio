

const ArrowL =(e) =>{
	this.objTemp = e.target;							
	console.log(this.objTemp.id)

	if (true) {}

	if (selectedAvatar<9) {
		// appSounds["menu"].play();
		++selectedAvatar
		appMc["level1CharacterIcon_"+selectedAvatar].x = 0;
		for(let i = 0; i<selectedAvatar; i++){
			appMc["level1CharacterIcon_"+i].x = -Math.abs(i-selectedAvatar)*space;
			appMc["level1CharacterIcon_"+i].scale.set(1);
			if (selectedAvatar!=0) {
				appMc["level1CharacterIcon_"+0].x = appMc["level1CharacterIcon_"+1].x - space;
			}							
			appMc["level1CharacterIcon_"+i].filters = [appMc.mcUI.colorFilter];
		}
		for(let i = selectedAvatar+1; i<10; i++){
			appMc["level1CharacterIcon_"+i].x = (i-selectedAvatar)*space;
			appMc["level1CharacterIcon_"+i].scale.set(1);
			appMc["level1CharacterIcon_"+i].filters = [appMc.mcUI.colorFilter];
		}

		appMc.shadows.texture = moduleTexture.pixiTextures["shadow_"+selectedAvatar];
		appMc.caption.texture = moduleTexture.pixiTextures["caption_"+selectedAvatar];
	}
}	
const ArrowR =(e) =>{
	this.objTemp = e.target;						

	if (selectedAvatar>0) {
		// appSounds["menu"].play();	
		--selectedAvatar
		appMc["level1CharacterIcon_"+selectedAvatar].x = 0;
		for(let i = 0; i<selectedAvatar; i++){
			appMc["level1CharacterIcon_"+i].x = -Math.abs(i-selectedAvatar)*space;
			appMc["level1CharacterIcon_"+i].scale.set(1);
			if (selectedAvatar!=0) {
				appMc["level1CharacterIcon_"+0].x = appMc["level1CharacterIcon_"+1].x - space;
			}
			appMc["level1CharacterIcon_"+i].filters = [appMc.mcUI.colorFilter];
		}
		for(let i = selectedAvatar+1; i<10; i++){
			appMc["level1CharacterIcon_"+i].x = (i-selectedAvatar)*space;
			appMc["level1CharacterIcon_"+i].scale.set(1);
			appMc["level1CharacterIcon_"+i].filters = [appMc.mcUI.colorFilter];
		}
		
		appMc.shadows.texture = moduleTexture.pixiTextures["shadow_"+selectedAvatar];
		appMc.caption.texture = moduleTexture.pixiTextures["caption_"+selectedAvatar];
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