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

		//Gem
		gemData.forEach((c,i)=>{
		
		c.visible = true;
		
		c.y +=c._dy;

		c._dy *=1.05;

		let _d = DistancePointToPoint(c.x, c.y, appMc.box.x, appMc.box.y);

		let yPos

		if(appObj.mainWidth<appObj.mainHeight){	
			yPos = appMc.avatarNbox.y+30
		}
		if(appObj.mainHeight<appObj.mainWidth){	
			yPos = -20;
		}

		if(((c.x < (appMc.box.x + appMc.box.width/2) ) && (c.x > (appMc.box.x - 0.4*appMc.box.width/2) )) && c.y>yPos){

			if(addToTimer<30){
				addToTimer++;
				appMc.timerRect.width = addToTimer*335/30;
			}

			c.visible = false;

			appSounds["cash_register"].play();
			lvlScore += 1;
			appMc.mcUI.removeChild(c);
			gemData = gemData.filter(item => item != c);
			collisions++
		}
		if(c.y > 1280){
			appMc.mcUI.removeChild(c);
			gemData = gemData.filter(item => item != c);
		}
		if(collisions==0){
			appMc.timerRect.width = 0;
		}
		});
				


		tmDebug++
		if(tmDebug==5){
			if (stateGame === 1 && lvlScore<30) {
				createGem();	
			}	
			if (lvlScore > 29) {
				stateGame = 2	
			}
			tmDebug = 0;						
		}		
		
		if(stateGame ===2 && finalStage===false){
			FinalCard()
			finalStage = true;

		}

		if(appObj.mainHeight<appObj.mainWidth){

			appMc.chest.scale.set(0.4)
			appMc.chest.y = 0

			appMc.claim.y=0.65 * appObj.canvasHeight/appMc.mcUI.scale.y;

			appMc.claim.scale.set(0.65)

			appMc.texts_l.y = 75-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.texts_l.scale.set(0.5)

			appMc.win_ls.scale.set(0.5);
			appMc.win_ls.x=0
			appMc.win_ls.y = -0.17*appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		}
		
		if(appObj.mainWidth<appObj.mainHeight){

			appMc.win_p.scale.set(0.6);
			appMc.claim.scale.set(1)
		}			
		//- PIXI RENDER
		
		renderer.render(stage);

		//- P2 World
		if(physics){
			appMc.p2world.step(1/60);
		}

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