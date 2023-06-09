//- Resize	

const AppResize = (e) =>{
	appObj.mainWidth		= Math.ceil(window.innerWidth);
	appObj.mainHeight		= Math.ceil(window.innerHeight); 
	appObj.canvasWidth		= Math.ceil(1.4*window.innerWidth);
	appObj.canvasHeight		= Math.ceil(1.4*window.innerHeight); 
	
	renderer.view.style.width	= appObj.mainWidth+"px";
	renderer.view.style.height	= appObj.mainHeight+"px";							
	renderer.view.width			= appObj.canvasWidth;
	renderer.view.height		= appObj.canvasHeight;
	
	renderer.resize(appObj.canvasWidth, appObj.canvasHeight);
	
	stage.position.set(Math.ceil(appObj.canvasWidth*0.5), Math.ceil(appObj.canvasHeight*0.5));
					
			
	//- POSITION OBJ
	
	appMc.mcGame.scale.set(1, 1);	
	appMc.mcUI.scale.set(1, 1);	
	
	if(appObj.mainWidth<appObj.mainHeight){	
		appMc.mcGame.scale.x = appObj.canvasWidth/1280;
		appMc.mcGame.scale.y = appMc.mcGame.scale.x;
		if(appMc.mcGame.scale.y*1280 < appObj.canvasHeight){
			appMc.mcGame.scale.y = appObj.canvasHeight/1280;
			appMc.mcGame.scale.x = appMc.mcGame.scale.y;
		}
		
		appMc.mcUI.scale.x = appObj.canvasWidth/720;
		appMc.mcUI.scale.y = appMc.mcUI.scale.x;
		if(appMc.mcUI.scale.y*1280 > appObj.canvasHeight){
			appMc.mcUI.scale.y = appObj.canvasHeight/1280;
			appMc.mcUI.scale.x = appMc.mcUI.scale.y;
		}
		
							
		appMc.mcBgFS.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.mcBgFS.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;
		
		appMc.mcBgOverlay.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.mcBgOverlay.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;
		
		appMc.mcBgBlack.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.mcBgBlack.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;

		appMc.mcBtnSound.x = -60+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.y = -70+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.scale.set(0.65);

		// avatar
		appMc.avatar.x=0
		appMc.avatar.y=140.79999999999995;
		appMc.avatar.scale.set(0.45);

		// Bag
		appMc.bag.x=-25
		appMc.bag.y=211.20000000000005;
		appMc.bag.scale.set(0.9);

		// Arrows
		appMc.arrow.x=-25
		appMc.arrow.y=appMc.mcBgFS.height/2-0.3*appMc.mcBgFS.height/2;
		appMc.arrow.scale.set(0.87);

		// Hand
		appMc.hand.x=-25
		appMc.hand.y=appMc.mcBgFS.height/2-0.3*appMc.mcBgFS.height/2;
		appMc.hand.scale.set(0.87);
					
		// Score Board
		appMc.scoreBoard.x = -130+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.scoreBoard.y=130-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.scoreBoard.scale.set(0.7);

		// Timer
		appMc.timer.x = 130-appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.timer.y=210-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.timer.scale.set(1);

		// Coins
		appMc.yellow_coin.x=-170+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.yellow_coin.y=90-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.yellow_coin.scale.set(0.30);

		appMc.green_coin.x=-170+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.green_coin.y=175-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.green_coin.scale.set(0.30);

		// Texts
		appMc.texts_l.visible = false

		appMc.texts_p.visible = true
		appMc.texts_p.y = -325
		
		// Avatar and Bag
		appMc.avatarNbag.y = -520+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;

		//  Hand
		appMc.hand.x = -220

		// Final coins bag
		appMc.finalCoinsBag.scale.set(1.75);
		appMc.finalCoinsBag.y = 80;

		// Claim button
		appMc.claim.y=0.7 * appObj.canvasHeight*0.50/appMc.mcUI.scale.y;

		// Digits Positioning and Sclae
		appMc.mcDigitY.x = -160+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcDigitY.y=120-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcDigitY.scale.set(0.3)

		appMc.mcDigitG.x = -160+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcDigitG.y=200-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcDigitG.scale.set(0.3)

		// Light
		appMc.light.scale.set(0.7);
		appMc.light.x = -45;
		appMc.light.y = -90;

		// Final card texts
		appMc.won.scale.set(1.4);
		appMc.won.y = -100;

		appMc.points.scale.set(1.4);
		appMc.points.x = 120;

		appMc.mcDigitF.scale.set(0.7);	
		appMc.finalPointsDigit.x = -330;

		appMc.finalPoints.x = 0;
		appMc.finalPoints.y = -160;
		appMc.finalPoints.scale.set(1);

		// Final card coins container

			appMc.finalCardCoins.y = 0

			appMc.coin_4.x = 110-appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
			appMc.coin_4.y = 190-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.coin_4.scale.set(0.5)

			appMc.coin_2.x = -180+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
			appMc.coin_2.y = 260-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.coin_2.scale.set(0.7)

			appMc.coin_3.x = 130-appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
			appMc.coin_3.y = 360-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.coin_3.scale.set(0.3)

			appMc.coin_1.x = -110+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
			appMc.coin_1.y = 500-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.coin_1.scale.set(0.3)

	}else{
		
		appMc.mcGame.scale.x = appObj.canvasWidth/1280;
		appMc.mcGame.scale.y = appMc.mcGame.scale.x;
		if(appMc.mcGame.scale.y*1280 < appObj.canvasHeight){
			appMc.mcGame.scale.y = appObj.canvasHeight/1280;
			appMc.mcGame.scale.x = appMc.mcGame.scale.y;
		}
		
		appMc.mcUI.scale.x = appObj.canvasWidth/1280;
		appMc.mcUI.scale.y = appMc.mcUI.scale.x;	
		if(appMc.mcUI.scale.y*720 > appObj.canvasHeight){
			appMc.mcUI.scale.y = appObj.canvasHeight/720;
			appMc.mcUI.scale.x = appMc.mcUI.scale.y;
		}
												
		appMc.mcBgFS.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.mcBgFS.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;
		
		appMc.mcBgOverlay.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.mcBgOverlay.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;

		appMc.mcBgBlack.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.mcBgBlack.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;
		
		appMc.mcBtnSound.x = -60+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.y = -60+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.scale.set(0.65);

		// avatar
		appMc.avatar.x=0
		appMc.avatar.y=appMc.mcBgFS.height/2-0.8*appMc.mcBgFS.height/2;
		appMc.avatar.scale.set(0.35);

		// Bag
		appMc.bag.x=-25
		appMc.bag.y=appMc.mcBgFS.height/2-0.7*appMc.mcBgFS.height/2;
		appMc.bag.scale.set(0.7);

		// Arrows
		appMc.arrow.x=-25
		appMc.arrow.y=appMc.mcBgFS.height/2-0.3*appMc.mcBgFS.height/2;
		appMc.arrow.scale.set(0.87);

		// Hand
		appMc.hand.x=-25
		appMc.hand.y=appMc.mcBgFS.height/2-0.3*appMc.mcBgFS.height/2;
		appMc.hand.scale.set(0.87);
					
		// Score Board
		appMc.scoreBoard.x=-120+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.scoreBoard.y=120-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.scoreBoard.scale.set(0.6);

		// Timer
		appMc.timer.x=120-appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.timer.y=200-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.timer.scale.set(0.9);

		// Coins
		appMc.yellow_coin.x=-160+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.yellow_coin.y=80-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.yellow_coin.scale.set(0.25);

		appMc.green_coin.x=-160+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.green_coin.y=165-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.green_coin.scale.set(0.25);

		// Texts
		appMc.texts_p.visible = false

		appMc.texts_l.visible = true
		appMc.texts_l.y = -appMc.mcBgFS.height/2+0.40*appMc.mcBgFS.height/2;
		
		// Avatar and Bag
		appMc.avatarNbag.y = -380+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;

		// Hand
		appMc.hand.x = -220

		// Final coins bag
		appMc.finalCoinsBag.scale.set(1.0);
		appMc.finalCoinsBag.y = 30;

		// Claim button
		appMc.claim.y=0.5 * appObj.canvasHeight*0.75/appMc.mcUI.scale.y;

		// Digits Positioning and Sclae
		appMc.mcDigitY.x = -160+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcDigitY.y=107.5-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcDigitY.scale.set(0.32)

		appMc.mcDigitG.x = -160+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcDigitG.y=190-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcDigitG.scale.set(0.32)

		// Light
		appMc.light.scale.set(0.7)
		appMc.light.x = -45
		appMc.light.y = -170

		// Final card texts

		appMc.won.scale.set(1.4);
		appMc.won.y = -100;

		appMc.points.scale.set(1.4);
		appMc.points.x = 120;

		appMc.mcDigitF.scale.set(0.7);	
		appMc.finalPointsDigit.x = -330;

		appMc.finalPoints.x = 0;
		appMc.finalPoints.y = -130;
		appMc.finalPoints.scale.set(0.8);

		
		// Final card coins container

			appMc.finalCardCoins.y = -100

			appMc.coin_4.x = -320;
			appMc.coin_4.y = 190-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.coin_4.scale.set(0.5)

			appMc.coin_2.x = 240;
			appMc.coin_2.y = 260-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.coin_2.scale.set(0.7)

			appMc.coin_3.x = -260;
			appMc.coin_3.y = 360-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.coin_3.scale.set(0.3)

			appMc.coin_1.x = 300
			appMc.coin_1.y = 500-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
			appMc.coin_1.scale.set(0.3)
	}
}			
// Resize	