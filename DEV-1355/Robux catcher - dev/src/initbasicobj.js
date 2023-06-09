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
				appMc.avatarNbag = new createContainer({p:appMc.mcUI});

				// Avatar
					appMc.avatar = new createSprite({p:appMc.avatarNbag,tex:"character"});

				// Bag
					appMc.bag = new createSprite({p:appMc.avatarNbag,tex:"empty_bag"});

			// Random coins container
				appMc.CoinsContainer = new createContainer({p:appMc.mcUI});

			// Timer and Points Cointainer
				appMc.timerNpoints = new createContainer({p:appMc.mcUI, visible:false});

				// Score board
					appMc.scoreBoard = new createSprite({p:appMc.timerNpoints,tex:"score_board", visible: true});

				// Timer Sprite
					appMc.timer = new createSequence({
						p:appMc.timerNpoints,
						tex:"timer",
						data:timer,
						prefix:"fx_",
						frame:0,
						totalFrame:10,
						seq:0,
						slow:0,
						loop:false,
						reverse:false,	
							stopFrame:9,
						alpha:1,
						visible:true
						});

				// Coins
					appMc.coins = new createContainer({p:appMc.timerNpoints});

						appMc.plain_coin = new createSprite({p:appMc.coins,tex:"coin_0", visible: false});
						appMc.yellow_coin = new createSprite({p:appMc.coins,tex:"coin_1", visible: true});
						appMc.green_coin = new createSprite({p:appMc.coins,tex:"coin_2", visible: true});

					appMc.mcDigitY = new	createDigit({
						p:appMc.timerNpoints,
						tex: "score",
						data: aDataDigit,
						num: 0, 
						spacing:-60,									
						aling:"center",
						separate:false,
						snum:0, 
						pref:false,
						tint:true,
						tintColor:0xffff00									
					});

					appMc.mcDigitG = new	createDigit({
						p:appMc.timerNpoints,
						tex: "score",
						data: aDataDigit,
						num: 0, 
						spacing:-60,									
						aling:"center",
						separate:false,
						snum:0, 
						pref:false,
						tint:true,
						tintColor:0x00ff00										
					});

					appMc.mcDigitY.update(0);
					appMc.mcDigitG.update(0);

			// Final Points
			appMc.finalPoints = new createContainer({p:appMc.mcUI});

				// Final card numbers
				appMc.mcDigitF = new	createDigit({
					p:appMc.finalPoints,
					tex: "numbers",
					data: aDataDigitF,
					num: 0, 
					spacing:-80,									
					aling:"center",
					separate:false,
					snum:0, 
					pref:false,							
				});

				appMc.mcDigitF.visible = false
			
			// Tutorial
				appMc.tutorial = new createContainer({p:appMc.mcUI});

				// Arrow
					appMc.arrow = new createSprite({p:appMc.tutorial, tex:"arrow", alpha:0});

				// Hand
					appMc.hand = new createSprite({p:appMc.tutorial, tex:"hand", visible: true, alpha:0});

					appMc.mcBgBlack = new createRect({
						p:appMc.mcUI,
						x:-1280*0.5,
						y:-1280*0.5, 
						width:1280,
						height:1280,
						color:0x000000, 
						visible:true,								
						alpha : 0,
						});

			// Light
			appMc.light = new createSprite({p:appMc.mcUI,tex:"light", visible: false});

			// Final coins bag
			appMc.finalCoinsBag = new createSprite({p:appMc.mcUI,tex:"mixed_bag", alpha:0, visible:false});

			// You won text
			appMc.won = new createSequence({
				p:appMc.mcUI,
				tex:"won",
				data:won,
				prefix:"",
				frame:0,
				totalFrame:1,
				seq:0,
				slow:0,
				loop:false,
				reverse:false,	
					stopFrame:1,
				alpha:1,
				visible:true
				});

			appMc.won.visible = false

			// points text
			appMc.points = new createSequence({
				p:appMc.finalPoints,
				tex:"points",
				data:points,
				prefix:"",
				frame:0,
				totalFrame:1,
				seq:0,
				slow:0,
				loop:false,
				reverse:false,	
					stopFrame:1,
				alpha:1,
				visible:true
				});

			appMc.points.visible = false

			// Claim
			appMc.claim = new createSprite({p:appMc.mcUI,tex:"claim", visible: false});

			// Texts
			appMc.texts_l = new createContainer({p:appMc.mcUI});

				appMc.fall_l = new createSprite({p:appMc.texts_l,tex:"tFalling_l", visible: true});
				appMc.drag_l = new createSprite({p:appMc.texts_l,tex:"tDrag_l", visible: false});
				appMc.collect_l = new createSprite({p:appMc.texts_l,tex:"tCollect_l", visible: false});
				appMc.excellent_l = new createSprite({p:appMc.texts_l,tex:"tExcellent_l", visible: false});

			appMc.texts_p = new createContainer({p:appMc.mcUI});

				appMc.fall_p = new createSprite({p:appMc.texts_p,tex:"tFalling_p", visible: true});
				appMc.drag_p = new createSprite({p:appMc.texts_p,tex:"tDrag_p", visible: false});
				appMc.collect_p = new createSprite({p:appMc.texts_p,tex:"tCollect_p", visible: false});
				appMc.excellent_p = new createSprite({p:appMc.texts_p,tex:"tExcellent_p", visible: false});

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
			
			// Final card coins container
			appMc.finalCardCoins = new createContainer({p:appMc.mcUI, visible:false});

				appMc.coin_1 = new createSprite({p:appMc.finalCardCoins,tex:"coin_1"});
				appMc.coin_2 = new createSprite({p:appMc.finalCardCoins,tex:"coin_1"});
				appMc.coin_3 = new createSprite({p:appMc.finalCardCoins,tex:"coin_2"});
				appMc.coin_4 = new createSprite({p:appMc.finalCardCoins,tex:"coin_2"});

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
appMc.avatarNbag
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


