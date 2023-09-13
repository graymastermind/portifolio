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
				appMc.mcBg = new createSprite({p:appMc.mcWorldCamera,tex:"bg"});
		
			

		//UI							
			appMc.mcUI = new createContainer({p:appMc.mcMain});	
			
			// Avatar and Bag
			appMc.avatarNbox = new createContainer({p:appMc.mcUI});

			// Avatar
				appMc.avatar = new createSprite({p:appMc.avatarNbox,tex:"avatar"});

			// Bag
				appMc.box = new createSprite({p:appMc.avatarNbox,tex:"box", y:40, x:80, anchor:[0.5,0.5]});

		// Random Gems container
			appMc.GemsContainer = new createContainer({p:appMc.mcUI});

		// Score Board Bar container
			appMc.scoreBoardContainer = new createContainer({p:appMc.mcUI, alpha:0});

			// Score board bar
			appMc.scoreBoardBar = new createRect({
				p:appMc.scoreBoardContainer,
				x:-1280*0.5,
				y:-1280*0,
				width:1280,
				height:200,
				color:0x68a9f4, 
				fill:1,
				alpha:1,
				visible:true
				});			

			// Score board
				appMc.scoreBoard = new createSprite({p:appMc.scoreBoardContainer,tex:"progress", visible: true});

				// Score board bar
				appMc.fillRect = new createRect({
					p:appMc.scoreBoardContainer,
					x:-1280*0.5,
					y:-1280*0,
					width:1280,
					height:200,
					color:0x0B72EB, 
					fill:1,
					alpha:1,
					visible:true
					});

				// Score board bar
				appMc.timerRect = new createRect({
					p:appMc.scoreBoardContainer,
					width:640,
					height:100,
					color:0xFFFFFF, 
					fill:1,
					alpha:1,
					visible:true
					});

				appMc.fillRect.mask = appMc.timerRect;

			// Final Points
				appMc.finalPoints = new createContainer({p:appMc.mcUI});

			
		// Tutorial
			appMc.tutorial = new createContainer({p:appMc.mcUI});

			// Arrow

				appMc.arrow_r = new createSprite({p:appMc.tutorial, tex:"arrow", alpha:1});

				appMc.arrow_l = new createSprite({p:appMc.tutorial, tex:"arrow", alpha:1});
				appMc.arrow_l.rotation = 3.14159

				appMc.mcBgBlack = new createRect({
					p:appMc.mcUI,
					x:-1280*0.5,
					y:-1280*0.5, 
					width:1280,
					height:1280,
					color:0x000000, 
					visible:true,								
					alpha : 0.5,
					});

				appMc.magnet = new createSprite({p:appMc.tutorial, tex:"magnet", alpha:0});

				appMc.mcUI.setChildIndex(appMc.mcBgBlack, 1);
				appMc.mcUI.setChildIndex(appMc.avatarNbox, 2);
				appMc.mcUI.setChildIndex(appMc.tutorial, 3);
				appMc.mcUI.setChildIndex(appMc.scoreBoardContainer, 4);

		// Chest
		appMc.chest = new createSprite({p:appMc.mcUI,tex:"chest", alpha:0, visible:false});

		// You won text

		appMc.win_ls = new createSprite({p:appMc.finalPoints,tex:"win_ls", alpha:1, visible:false});
		appMc.win_p = new createSprite({p:appMc.finalPoints,tex:"win_p", alpha:1, visible:false});

		// Buttons
		appMc.buttons = new createContainer({p:appMc.mcUI});

			// Claim
			appMc.claim = new createSprite({p:appMc.buttons ,tex:"claim", visible: false});

			// Earn
			appMc.earn = new createSprite({p:appMc.buttons ,tex:"earn", visible: false});

		// Texts
		appMc.texts_l = new createContainer({p:appMc.mcUI});
		appMc.texts_p = new createContainer({p:appMc.mcUI});

			appMc.drag_l = new createSprite({p:appMc.texts_l,tex:"drag_l", visible: false});
			appMc.drag_p = new createSprite({p:appMc.texts_p,tex:"drag_p", visible: false});

			appMc.collect_l = new createSprite({p:appMc.texts_l,tex:"collect", visible: false});
			appMc.collect_p = new createSprite({p:appMc.texts_p,tex:"collect", visible: false});

			
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
appMc.mcBgOverlay.on('pointerdown', StageDown);	
appMc.mcBgOverlay.on('pointermove', StageMove);
appMc.mcBgOverlay.on('pointerup', StageUp);			
appMc.mcBgFS.interactive = true;	
appMc.mcBgFS.on('pointerup', ClickAd);

//- mcBtnSound			
appMc.mcBtnSound  = new createContainer({p:appMc.mcUI});			
	appMc.mcBtnSoundB = new createSprite({p:appMc.mcBtnSound,tex:"btn_sound_off"});

appMc.mcBtnSound.interactive = true;				
appMc.mcBtnSound.on('pointerup', BtnGlobalSound);

// setup events
appMc.avatarNbox
	// events for drag start
	.on('mousedown', onDragStart)
	.on('touchstart', onDragStart)
	// events for drag end
	.on('mouseup', onDragEnd)
	.on('mouseupoutside', onDragEnd)
	.on('touchend', onDragEnd)
	.on('touchendoutside', onDragEnd)
	// events for drag move
	.on('mousemove', onDragMove)
	.on('touchmove', onDragMove);

}