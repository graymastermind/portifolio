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
		coinData.forEach((c,i)=>{
			
			c.visible = true;

			if(appObj.mainWidth<appObj.mainHeight){	
				c.scale.set(0.35)
			}
			if(appObj.mainHeight<appObj.mainWidth){	
				c.scale.set(0.35)
			}
			
			c.y +=c._dy;
			c._dy *=1.05;

			let _d = DistancePointToPoint(c.x, c.y, appMc.bag.x, appMc.bag.y);

			if(_d <50){
				appSounds["coins"].play();
				if (c.id == 1) {
					appMc.bag.texture = moduleTexture.pixiTextures["yellow_bag"];
					createScore(10)
					lvlScore += 10;
					yellow++
					appMc.mcDigitY.update(yellow*10);
				}
				if (c.id == 2) {
					appMc.bag.texture = moduleTexture.pixiTextures["green_bag"];
					createScore(50)
					lvlScore += 50;
					green++
					appMc.mcDigitG.update(green*50);
				}
				c.visible = false;
				appMc.mcUI.removeChild(c);
				coinData = coinData.filter(item => item != c);
				setTimeout(()=>{
					appMc.bag.texture = moduleTexture.pixiTextures["mixed_bag"];
				},500);
			}
			if(c.y > 1280){
				appMc.mcUI.removeChild(c);
				coinData = coinData.filter(item => item != c);
			}
		});

		if(appObj.mainWidth<appObj.mainHeight){ 
			appMc.mcDigitY.x = -140+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
			appMc.mcDigitY.y=115-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.mcDigitY.scale.set(0.3)

			appMc.mcDigitG.x = -140+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
			appMc.mcDigitG.y=195-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.mcDigitG.scale.set(0.3)

			
		}
		if(appObj.mainHeight<appObj.mainWidth){	
			appMc.mcDigitY.x = -140+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
			appMc.mcDigitY.y=102.5-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.mcDigitY.scale.set(0.3)

			appMc.mcDigitG.x = -140+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
			appMc.mcDigitG.y=185-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.mcDigitG.scale.set(0.3)

		}

		tmDebug++
		if(tmDebug==7){
			if (stateGame === 1) {
				createCoin();	
			}				
			tmDebug = 0;						
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