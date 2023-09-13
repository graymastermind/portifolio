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

		appMc.scoreBoardBar.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.scoreBoardBar.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;

		appMc.fillRect.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.fillRect.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;

		appMc.timerRect.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.timerRect.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;
		
		appMc.mcBtnSound.x = -60+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.y = -70+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.scale.set(0.65);
		
		// Avatar and Box
		appMc.avatarNbox.y = -545+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.avatarNbox.x = 70

		gsap.killTweensOf(appMc.avatar);
		gsap.killTweensOf(appMc.box);
		gsap.delayedCall(0, Position);

		// avatar
		appMc.avatar.scale.set(0.5);

		// Box
		appMc.box.scale.set(0.5);
		boxPosition = 80;
		appMc.box.x = appMc.avatar.x+80

		// Buttons
		appMc.buttons.scale.set(0.5);

		// Arrows
		appMc.arrow_r.x=150
		appMc.arrow_r.y=appMc.mcBgFS.height/2-0.3*appMc.mcBgFS.height/2;
		appMc.arrow_r.scale.set(0.5);

		appMc.arrow_l.x=-150
		appMc.arrow_l.y=appMc.mcBgFS.height/2-0.3*appMc.mcBgFS.height/2;
		appMc.arrow_l.scale.set(0.5);

		// Magnet
		appMc.magnet.x=-250
		appMc.magnet.y=appMc.mcBgFS.height/2-0.3*appMc.mcBgFS.height/2;
		appMc.magnet.scale.set(0.35);
					
		// Score Board
		appMc.scoreBoard.x = 0;
		appMc.scoreBoard.y=100;
		appMc.scoreBoard.scale.set(0.7);

		// Timer rect
		appMc.timerRect.x = -135;
		appMc.timerRect.width=335;
		appMc.timerRect.height=35;
		appMc.timerRect.y=82;

		appMc.timerRect.width = addToTimer*335/30

		// Texts
		appMc.texts_l.visible = false

		appMc.texts_p.visible = true
		appMc.texts_p.y = -400
		appMc.texts_p.scale.set(0.5)

		// Chest
		appMc.chest.scale.set(0.5)
		appMc.chest.y = 80

		// Claim button
		appMc.claim.y=0.7 * appObj.canvasHeight/appMc.mcUI.scale.y;


		// Final card texts
		appMc.win_ls.alpha = 0;
		appMc.win_p.alpha = 1;

		appMc.win_p.y=300-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.win_p.x = 0

		appMc.scoreBoardContainer.y=-200+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;

		appMc.finalPoints.y=0;
							
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

		appMc.scoreBoardBar.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.scoreBoardBar.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;

		appMc.fillRect.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.fillRect.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;
		
		appMc.timerRect.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.timerRect.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;

		appMc.mcBtnSound.x = -60+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.y = -60+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.scale.set(0.65);
		
		// Avatar and Box
		appMc.avatarNbox.y = -20;
		appMc.avatarNbox.x = 70

		gsap.killTweensOf(appMc.avatar);
		gsap.killTweensOf(appMc.box);
		gsap.delayedCall(0, Position);

		// avatar
		appMc.avatar.scale.set(0.35);

		// Box
		appMc.box.y = 35;
		boxPosition = 50;
		appMc.box.x = appMc.avatar.x+50;
		appMc.box.scale.set(0.35);

		// Buttons
		appMc.buttons.scale.set(0.5);

		// Arrows
		appMc.arrow_r.x=150
		appMc.arrow_r.y=appMc.mcBgFS.height/2-0.3*appMc.mcBgFS.height/2;
		appMc.arrow_r.scale.set(0.5);

		appMc.arrow_l.x=-150
		appMc.arrow_l.y=appMc.mcBgFS.height/2-0.3*appMc.mcBgFS.height/2;
		appMc.arrow_l.scale.set(0.5);

		// Magnet
		appMc.magnet.x=-250
		appMc.magnet.y=appMc.mcBgFS.height/2-0.35*appMc.mcBgFS.height/2;
		appMc.magnet.scale.set(0.25);
					
		// Score Board
		appMc.scoreBoard.x = 0;
		appMc.scoreBoard.y= 75;
		appMc.scoreBoard.scale.set(0.7);

		// Timer rect
		appMc.timerRect.x = -135;
		appMc.timerRect.width=335;
		appMc.timerRect.height=35;
		appMc.timerRect.y=57.8;

		appMc.timerRect.width = addToTimer*335/30

		// Texts
		appMc.texts_p.visible = false

		appMc.texts_l.visible = true
		appMc.texts_l.y = -300;
		appMc.texts_l.scale.set(0.5)

		// Chest
		appMc.chest.scale.set(0.4)
		appMc.chest.y = 30

		// Claim button
		appMc.claim.y=0.75 * appObj.canvasHeight/appMc.mcUI.scale.y;

		// Final card texts
		appMc.win_p.alpha = 0;
		appMc.win_ls.alpha = 1;


		appMc.win_ls.scale.set(0.5);
		appMc.win_ls.x=0
		appMc.win_ls.y = -10

		appMc.scoreBoardContainer.y=-appMc.scoreBoardContainer.height+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;

		appMc.finalPoints.y=-0.5*appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
	}
}			
// Resize	