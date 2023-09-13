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

		TweenLite.killTweensOf(appMc.startBattle);
		appMc.startBattle.scale.set(0.5);
		gsap.from(appMc.startBattle.scale, 0.2,{delay:0.2, overwrite:"none", x:0, y:0, ease:Sine.easeOut});
		gsap.to(appMc.startBattle.scale, 0.5,{delay:0.4, yoyo:true, repeat:-1, overwrite:"none", x:"-=0.05", y:"-=0.05", ease:Sine.easeInOut});
	

		appMc.CharacterBoardBar.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.CharacterBoardBar.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;

		appMc.characters.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.characters.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;

		appMc.CharacterBoardContainer.y = -300;
		appMc.CharacterBoardContainer.height = 350;


		for(let i = 0; i<10; i++){
			
			appMc["level1CharacterIcon_"+i].scale.set(1)
			appMc["level2character_"+i].scale.set(0.25)

			appMc["name_"+i].scale.set(0.5)
			appMc["name_"+i].y = -360
			appMc["name_"+i].x = 0
		}
		
		appMc.mcBtnSound.x = -60+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.y = -70+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.scale.set(0.65);

		appMc.characters.y = appMc.CharacterBoardContainer.y+appMc.CharacterBoardContainer.height/2-appMc.caption.height/3;
		appMc.characters.scale.set(0.12)

		appMc.characters2.x = 190;
		appMc.characters2.y = 185;

		appMc.tapToSelect.y = appMc.CharacterBoardContainer.y+1.57*appMc.CharacterBoardContainer.height;
		appMc.tapToSelect.scale.set(0.7)

		appMc.armour.x = 0;
		appMc.armour.y = -140+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.armour.scale.set(0.7)

		appMc.attributes.scale.set(0.8)
		appMc.attributes.x = 215-appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.attributes.y = 0;

		appMc.startBattle.x = 0;
		appMc.startBattle.y = 330;

		appMc.bush.y = -670+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.bush.scale.set(0.5, 0.55);

		appMc.bush2.x = 110
		appMc.bush2.scale.set(0.45)

		appMc.vfxBush.y = -60
		appMc.vfxBush.x = -220
		appMc.vfxBush.scale.set(0.4);

		appMc.telescope.scale.set(0.3, 0.25);
		appMc.telescope.x=350
		appMc.telescope.y=-150+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;

		appMc.shadow.y=-217+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.shadow.x=40
		appMc.shadow.scale.set(0.15, 0.13);

		appMc.arrow_l.y=-213+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.arrow_r.y=-213+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;

		appMc.arrow_l.x=-60+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
    	appMc.arrow_r.x=60-appObj.canvasWidth*0.5/appMc.mcUI.scale.y;

		appMc.arrow_r.scale.set(0.15)
		appMc.arrow_l.scale.set(0.15)
		

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

		appMc.CharacterBoardBar.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.CharacterBoardBar.scale.y = 1

		appMc.characters.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.characters.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;

		appMc.CharacterBoardContainer.y = -215;		
		appMc.CharacterBoardContainer.height = 250;

		for(let i = 0; i<10; i++){
			
			appMc["level1CharacterIcon_"+i].scale.set(1)
			appMc["level2character_"+i].scale.set(0.18)

			appMc["name_"+i].scale.set(0.5)
			appMc["name_"+i].y = 100-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		}
		
		appMc.mcBtnSound.x = -60+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.y = -30+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.scale.set(0.65);
		
		appMc.selectAvatar.y = 0.4*((appMc.CharacterBoardContainer.y - appMc.CharacterBoardContainer.height/2)-appObj.canvasHeight*0.5/appMc.mcUI.scale.y);

		TweenLite.killTweensOf(appMc.startBattle);
		appMc.startBattle.scale.set(0.35)
		gsap.from(appMc.startBattle.scale, 0.2,{delay:0.2, overwrite:"none", x:0, y:0, ease:Sine.easeOut});
		gsap.to(appMc.startBattle.scale, 0.5,{delay:0.4, yoyo:true, repeat:-1, overwrite:"none", x:"-=0.05", y:"-=0.05", ease:Sine.easeInOut});

		appMc.characters.y = appMc.CharacterBoardContainer.y+appMc.CharacterBoardContainer.height/2-appMc.caption.height/3;
		appMc.characters.scale.set(0.1)
		
		appMc.characters2.y = 100;
		appMc.characters2.x = 0

		appMc.attributes.scale.set(0.8)
		appMc.attributes.x = -200+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.attributes.y = -60; 

		appMc.tapToSelect.y = appMc.CharacterBoardContainer.y+1.25*appMc.CharacterBoardContainer.height;
		appMc.tapToSelect.scale.set(0.45)

		appMc.startBattle.x = 0;
		appMc.startBattle.y = -185+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;

		appMc.armour.x = 0;
		appMc.armour.y = -80+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.armour.scale.set(0.4)


		appMc.bush.scale.set(0.3);
		appMc.bush.y = -340+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;

		appMc.vfxBush.y = -60
		appMc.vfxBush.x = -260
		appMc.vfxBush.scale.set(0.3);

		appMc.telescope.scale.set(1);
		appMc.telescope.x=400
		appMc.telescope.scale.set(0.2, 0.2)
		appMc.telescope.y=-50+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;

		appMc.shadow.y=-130+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.shadow.x=90
		appMc.shadow.scale.set(0.15);

		appMc.arrow_l.y=-130+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.arrow_r.y=-130+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;

		appMc.arrow_l.x=300
		appMc.arrow_r.x=-300

		appMc.arrow_r.scale.set(0.13)
		appMc.arrow_l.scale.set(0.13)

	}
}			
// Resize	