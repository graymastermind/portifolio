const InitBasicObj = () =>{

//- mcMain

appMc.mcMain = new createContainer({p:stage, visible:false});					
	appMc.mcGame = new createContainer({p:appMc.mcMain});					
	
	appMc.mcGame.twistFilter = new PIXI.filters.TwistFilter({
		angle:4,
		offset:{x:640,y:640},						
		radius:800,
		padding:20
		});
		 
		appMc.mcWorldShake = new createContainer({p:appMc.mcGame});						
		appMc.mcWorldShake.shakeAX = 0;
		appMc.mcWorldShake.shakeAY = 0;
		appMc.mcWorldShake.shakeD = 0;

		if(physics){
			appMc.p2world = new p2.World({ gravity: [0, -500]});

			// Add a plane
	        planeShape = new p2.Plane();
	        planeBody = new p2.Body({ position:[0,-100] });
	        planeBody.addShape(planeShape);
	        appMc.p2world.addBody(planeBody);
		}

              
		
		//Back
			appMc.mcWorldCamera = new createContainer({p:appMc.mcWorldShake});	
				appMc.mcBg = new createSprite({p:appMc.mcWorldCamera,tex:"bg_0"});
		
			

		//UI							
			appMc.mcUI = new createContainer({p:appMc.mcMain});	

			// Bush
				appMc.bush = new createSprite({p:appMc.mcUI,tex:"bush", scale:0.35, visible:true});

			// Bush
				appMc.bush2 = new createSprite({p:appMc.mcWorldCamera,tex:"bush2", scale:0.35, visible:false});

			// vfx Bush 2
			appMc.vfxBush = new createSequence({
				p:appMc.mcUI,
				tex:"vfx",
				data:vfxSpritesheet,
				prefix:"vfx_",
				frame:0,
				totalFrame:6,
				seq:0,
				slow:0,
				loop:false,
				reverse:false,	
					stopFrame:1,
				alpha:0,
				visible:true,
				scale: 0.5
				});
			
			appMc.vfxBush.rotation =1.5708

			appMc.characters2 = new createContainer({p:appMc.mcUI, alpha:1});

			// Telescope
				appMc.telescope = new createSprite({p:appMc.mcUI,tex:"telescope", scale:0.35, visible:true});
			
			// Select Avatar Text
				appMc.selectAvatar = new createSprite({p:appMc.mcUI,tex:"select_avatar", scale:0.5, visible:false});

					// Character Bar container
			appMc.CharacterBoardContainer = new createContainer({p:appMc.mcUI, alpha:1});

			// Shadows container
			appMc.shadow = new createContainer({p:appMc.mcUI, alpha:1, visible:false});
			appMc.shadows = new createSprite({p:appMc.shadow ,tex:"shadow_"+selectedAvatar, visible:true});

			// Names container
			appMc.name = new createContainer({p:appMc.mcUI, alpha:1});

			// Attributes
			appMc.attributes = new createContainer({p:appMc.mcUI, alpha:1});
			
			// Character Bar container
			appMc.abilities = new createContainer({p:appMc.mcUI, alpha:1});

			// Armour
			appMc.armour = new createContainer({p:appMc.mcUI, alpha:1});

			// Armour
			appMc.armour = new createContainer({p:appMc.mcUI, alpha:1});

				//Character Bar container
				appMc.CharacterBoardBar = new createRect({
					p:appMc.CharacterBoardContainer,
					x:-1280*0.5,
					y:-1280*0,
					width:1280,
					height:300,
					color:0x010101, 
					lineWeigth: 10,
					lineColor: 0xffffff,
					fill:1,
					alpha:0.9,
					visible:true
					});	

				appMc.characters = new createContainer({p:appMc.mcUI, alpha:1});

				//Set Filter
				appMc.mcUI.colorFilter = new PIXI.filters.ColorMatrixFilter();	
				appMc.mcUI.colorFilter.brightness(0.45);

				//Set Filter
				appMc.characters.colorFilter = new PIXI.filters.ColorMatrixFilter();	
				appMc.characters.colorFilter.brightness(1);


				for(let i = 0; i<10; i++){
					appMc["character"+i] = new createContainer({p:appMc.characters});
					appMc["level2character_"+i] = new createContainer({p:appMc.characters2});
					appMc["level1CharacterIcon_"+i] = new createSprite({p:appMc["character"+i],tex:"avatar_"+i, x:-250+250*i*5, y:0});
					appMc["level2CharacterIcon_"+i] = new createSprite({p:appMc["level2character_"+i],tex:"character_"+i, y:0, visible:false, anchor:[0.5,0.9]});
					appMc["level2CharacterIcon_"+i].a0 = RandomInteger(0,360);
					appMc["level2CharacterIcon_"+i].a1 = RandomInteger(0,360);	
					appMc["name_"+i] = new createSprite({p:appMc.name ,tex:"name_"+i, visible:false});
					appMc["attribute_"+i] = new createSprite({p:appMc.attributes,tex:"attribute_"+i, visible:false});
					appMc["ability_bar_"+i] = new createSprite({p:appMc.abilities,tex:"ability_bar_"+i, visible:false});
					appMc["armour_"+i] = new createSprite({p:appMc.armour,tex:"armour_"+i, visible:false});
					appMc["level1CharacterIcon_"+i].filters = [appMc.mcUI.colorFilter];
				}	

				appMc.caption = new createSprite({p:appMc.mcUI,tex:"caption_"+selectedAvatar, visible:false});

			// Buttons
			appMc.buttons = new createContainer({p:appMc.mcUI});
			appMc.buttons.interactive = true;

				// Select Avatar Text
				appMc.tapToSelect = new createSprite({p:appMc.buttons,tex:"tap_to_select", scale:0.5});

				// Select Avatar Text
				appMc.startBattle = new createSprite({p:appMc.buttons,tex:"start_battle", scale:0.5, visible:false});

			

			// Arrows
			appMc.arrows = new createContainer({p:appMc.mcUI, visible:false});

			// Arrow left
			appMc.arrow_r = new createSprite({p:appMc.arrows,tex:"arrow", scale:0.25, visible:true, id:1});

			// Arrow right
			appMc.arrow_l = new createSprite({p:appMc.arrows,tex:"arrow", scale:0.25, visible:true, id:2});
			appMc.arrow_l.rotation = 3.14159

			appMc.arrow_r.interactive = true;
			appMc.arrow_l.interactive = true;

				

				
			//- mcBgOverlay						
				appMc.mcBgOverlay = new createRect({
					p:appMc.mcUI,
					x:-1280*0.5,
					y:-1280*0.5, 
					width:1280,
					height:1280,
					color:0x000000, 
					alpha:0.0,
					fill:1,
					radius:0
				});	
			
			
			//- mcBgFS					
			appMc.mcBgFS = new createRect({
				p:appMc.mcUI,
				x:-1280*0.5,
				y:-1280*0.5, 
				width:1280,
				height:1280,
				color:0x121214, 
				alpha:0,
				visible:false
			});	

appMc.mcBgOverlay.interactive = false;		
appMc.mcBgOverlay.on('pointerdown', Buttons);	
// appMc.mcBgOverlay.on('pointermove', StageMove);
// appMc.mcBgOverlay.on('pointerup', StageUp);			
appMc.mcBgFS.interactive = true;	
appMc.mcBgFS.on('pointerup', ClickAd);

//- mcBtnSound			
appMc.mcBtnSound  = new createContainer({p:appMc.mcUI});			
	appMc.mcBtnSoundB = new createSprite({p:appMc.mcBtnSound,tex:"btn_sound_off"});

appMc.mcBtnSound.interactive = true;				
appMc.mcBtnSound.on('pointerup', BtnGlobalSound);

appMc.arrow_l.on("pointerdown", ArrowL);
appMc.arrow_r.on("pointerdown", ArrowR);
appMc.buttons.on("pointerdown", Buttons);

}