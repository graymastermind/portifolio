const StageEF = () => {				

	appObj.time_current = performance.now();				
	if(appObj.time_current - appObj.time_old > 25){
		appObj.time_old = appObj.time_current;
		// 33 - 30 fps
		// 16 - 60 fps
		
		let i,j,k;
		let objTemp;
		let objTempExtra;


	//- Camera

		if(appMc.mcWorldShake.shakeD != 0){
			appMc.mcWorldShake.shakeAX += 70;
			appMc.mcWorldShake.shakeAY += 90;
			if(appMc.mcWorldShake.shakeAX >= 360){ appMc.mcWorldShake.shakeAX -= 360; }
			if(appMc.mcWorldShake.shakeAY >= 360){ appMc.mcWorldShake.shakeAY -= 360; }						
			appMc.mcWorldShake.x = appMc.mcWorldShake.shakeD*Math.cos(appMc.mcWorldShake.shakeAX*toRAD);
			appMc.mcWorldShake.y = appMc.mcWorldShake.shakeD*Math.cos(appMc.mcWorldShake.shakeAY*toRAD);						
			appMc.mcWorldShake.shakeD *= 0.85;
			if(appMc.mcWorldShake.shakeD < 0.5){
				appMc.mcWorldShake.shakeD = 0;
				appMc.mcWorldShake.x = 0;
				appMc.mcWorldShake.y = 0;
			}			
		}

		if(appObj.mainWidth<appObj.mainHeight){
			space = 2*appObj.canvasHeight*0.5/appMc.mcUI.scale.y
			appMc.selectAvatar.y = appMc.CharacterBoardContainer.y- 0.25 *appMc.CharacterBoardContainer.height;
			appMc["level1CharacterIcon_"+selectedAvatar].scale.set(1.7)
			appMc.caption.y = appMc.characters.y+appMc.characters.height/1.6;

			for(let i = 0; i<10; i++){
				appMc["ability_bar_"+i].scale.set(0.5)
				appMc["ability_bar_"+i].x = 125-appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
				appMc["ability_bar_"+i].y = 200-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			}
		}

		if(appObj.mainHeight<appObj.mainWidth){
			space = 4*appObj.canvasHeight*0.5/appMc.mcUI.scale.y
			appMc.telescope.scale.set(0.3);
			appMc["level1CharacterIcon_"+selectedAvatar].scale.set(1.6)
			appMc.caption.y = appMc.characters.y+appMc.characters.height/1.6;
			appMc.selectAvatar.y = 0.4*((appMc.CharacterBoardContainer.y - appMc.CharacterBoardContainer.height/2)-appObj.canvasHeight*0.5/appMc.mcUI.scale.y);			

			for(let i = 0; i<10; i++){
				appMc["ability_bar_"+i].scale.set(0.5)
				appMc["ability_bar_"+i].x = 125-appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
				appMc["ability_bar_"+i].y = 200-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;	
			}

			appMc.vfxBush.visible = false;
		}

		tmDebug++
		if(tmDebug==2){	
			if(stateGame == 1){
				appMc.vfxBush.update();
			}				
			tmDebug = 0;						
		}					
					
		//- PIXI RENDER
		
		renderer.render(stage);

		//- P2 World
		if(physics){
			appMc.p2world.step(1/60);
		}

		appMc.caption.scale.set(0.5)

		appMc["level1CharacterIcon_"+selectedAvatar].filters = [appMc.characters.colorFilter];

		//- P2 World
		
		//- RESIZE
		
		objTemp = appObj;					
		objTemp.tm_resize++;
		if(objTemp.tm_resize == 10){
			objTemp.tm_resize = 0;
			
			if(objTemp.mainWidth != Math.ceil(window.innerWidth) || objTemp.mainHeight != Math.ceil(window.innerHeight)){
				AppResize();							
			}
		}
	}

	//- RAF
	window.requestAnimationFrame(StageEF);
}