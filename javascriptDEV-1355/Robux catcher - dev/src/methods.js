const handShow = () =>{
    appMc.hand.alpha = 1;
    gsap.from(appMc.hand.scale, 0.5,{delay:3.0, overwrite:"none", x:0, y:0, ease:Back.easeOut});
    gsap.to(appMc.hand, 1.5,{delay:3.5, yoyo:true, repeat:-1, overwrite:"none", x:'+=500', ease:Sine.easeInOut});
    gsap.to(appMc.arrow, 0.5,{delay:3, overwrite:"none", alpha:1, ease:"none"});
}

const Tutorial = () =>{
    count = 0

    gsap.from(appMc.fall_l.scale, 0.5,{delay:0.5, overwrite:"none", x:0, y:0, ease:Back.easeOut});
	gsap.to(appMc.fall_l.scale, 0.5,{delay:2.5, overwrite:"none", x:0, y:0, ease:Back.easeIn});
    gsap.from(appMc.fall_p.scale, 0.5,{delay:0.5, overwrite:"none", x:0, y:0, ease:Back.easeOut});
	gsap.to(appMc.fall_p.scale, 0.5,{delay:2.5, overwrite:"none", x:0, y:0, ease:Back.easeIn});

	gsap.set(appMc.drag_l, {delay:3, overwrite:"none", visible:true});
    gsap.set(appMc.drag_p, {delay:3, overwrite:"none", visible:true});

	gsap.from(appMc.drag_l.scale, 0.5,{delay:3, overwrite:"none", x:0, y:0, ease:Back.easeOut});
    gsap.from(appMc.drag_p.scale, 0.5,{delay:3, overwrite:"none", x:0, y:0, ease:Back.easeOut});

    handShow();

    handTimeOut = setTimeout(()=>{
        appMc.avatarNbag.interactive = true;
    },3500);
}

timerAnimationF = () =>{
    called = true
        setInterval(function() {
                appMc.timer.update();
        }, 1000);
    }

const FirstTap = () =>{
    TweenLite.killTweensOf(appMc.hand);
	appMc.hand.alpha = 0;
    gsap.to(appMc.tutorial, 0.5,{delay:0.0, overwrite:"none", alpha:0, ease:"none"});
	gsap.to(appMc.drag_l.scale, 0.5,{delay:2, overwrite:"none", x:0, y:0, ease:Back.easeIn});
    gsap.to(appMc.drag_p.scale, 0.5,{delay:2, overwrite:"none", x:0, y:0, ease:Back.easeIn});

	gsap.set(appMc.excellent_l, {delay:2.0, overwrite:"none", visible:true});
	gsap.from(appMc.excellent_l.scale, 0.5,{delay:2.5, overwrite:"none", x:0, y:0, ease:Back.easeOut});
    gsap.set(appMc.excellent_p, {delay:2.0, overwrite:"none", visible:true});
	gsap.from(appMc.excellent_p.scale, 0.5,{delay:2.5, overwrite:"none", x:0, y:0, ease:Back.easeOut});

	gsap.to(appMc.excellent_l.scale, 0.5,{delay:3.5, overwrite:"none", x:0, y:0, ease:Back.easeIn});
    gsap.to(appMc.excellent_p.scale, 0.5,{delay:3.5, overwrite:"none", x:0, y:0, ease:Back.easeIn});

	gsap.set(appMc.collect_l, {delay:4, overwrite:"none", visible:true});
	gsap.from(appMc.collect_l.scale, 0.5,{delay:4, overwrite:"none", x:0, y:0, ease:Back.easeOut});
    gsap.set(appMc.collect_p, {delay:4, overwrite:"none", visible:true});
	gsap.from(appMc.collect_p.scale, 0.5,{delay:4, overwrite:"none", x:0, y:0, ease:Back.easeOut});

    gsap.to(appMc.bag, {delay:2, x: -25, duration: 1});
    gsap.to(appMc.avatar, {delay:2, x: 0, duration: 1});

    setTimeout(()=>{
        appMc.avatarNbag.interactive = false;
    },2000);
    
    setTimeout(()=>{
        Start()
    },5000);

    setTimeout(()=>{
        gsap.set(appMc.timerNpoints, {delay:0, overwrite:"none", visible:true});
        gsap.to(appMc.timerNpoints, 0.5,{delay:0, overwrite:"none", alpha:1, ease:"none"});
    },4000);
     
}

const Start = () =>{

    stateGame = 1;

    setTimeout(()=>{
        stateGame = 2;
    },10500);

    setTimeout(()=>{
        stateGame = 2;
        FinalCard()
    },12000);

    appMc.avatarNbag.interactive = true;

    timerAnimationF()

    startClicked = true;

}

const createScore = (type) =>{
    if(type === 10){
        appMc.plus_50 = new createSprite({p:appMc.avatarNbag,tex:"plus_10", alpha:1, visible:true, scale: 1, y: -60, x: appMc.bag.x});
    }

    if(type === 50){
        appMc.plus_50 = new createSprite({p:appMc.avatarNbag,tex:"plus_50", alpha:1, visible:true, scale: 1, y: -60, x: appMc.bag.x});
    }

    gsap.to(appMc.plus_50, {delay:0, y: -180, duration: 1.5});
    gsap.to(appMc.plus_50, 1.5,{delay:0, overwrite:"none", alpha:0, ease:"none"});
    
}

const createCoin = () =>{
	let tex = RandomInteger(1, 2);
	appMc["mcMyCoin"+coinCount] = new createContainer({p:appMc.CoinsContainer});
    appMc["mcMyCoinSprite"+coinCount] = new createSprite({p:appMc["mcMyCoin"+coinCount],tex:"coin_"+tex});
    appMc["mcMyCoin"+coinCount].y	= -60-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
	appMc["mcMyCoin"+coinCount].x = RandomInteger( -appObj.canvasWidth*0.5/appMc.mcUI.scale.y, appObj.canvasWidth*0.5/appMc.mcUI.scale.y);		
	appMc["mcMyCoin"+coinCount]._dy = 2;
    appMc["mcMyCoin"+coinCount].id = tex;
    appMc["mcMyCoin"+coinCount].visible = false;			
	coinData.push(appMc["mcMyCoin"+coinCount]);
	coinCount++;
    
}

const RotateLight = () =>{
		
    appMc.light.scale.set(0.6);
    appMc.light.alpha = 1;
    appMc.light.visible = true;			
    gsap.from(appMc.light.scale, 1,{delay:0.0, overwrite:"none", x:0, y:0, ease:Sine.easeOut});			
}

const FinalCard = () =>{
   
    setTimeout(()=>{

        appSounds["final"].play();

        const confetti = () =>{
            appMc.mcConfetti = new Confetti({p:appMc.mcUI, count:150});
        }

        gsap.delayedCall(0.9, confetti);
        gsap.delayedCall(1.2, confetti);
        gsap.delayedCall(3.2, confetti);
        gsap.delayedCall(0.7, RotateLight);

        appMc.mcUI.setChildIndex(appMc.finalCardCoins, 8);
        appMc.mcUI.setChildIndex(appMc.finalPoints, 12);
        appMc.mcUI.setChildIndex(appMc.texts_l, 2);
        appMc.mcUI.setChildIndex(appMc.texts_p, 3);

        appMc.mcDigitF.update(lvlScore);
        gsap.set(appMc.mcDigitF, {delay:0.7, overwrite:"none", visible:true});

        gsap.to(appMc.bag, {delay:1, x: -25, duration: 1});
        gsap.to(appMc.avatar, {delay:1, x: 0, duration: 1});
        gsap.to(appMc.timerNpoints, 0.5,{delay:0.0, overwrite:"none", alpha:0, ease:"none"});

        appMc.mcUI.blurFilter = new PIXI.filters.BlurFilter();
        appMc.mcUI.blurFilter.blur = 8;
        appMc.mcUI.blurFilter.quality = 3;
        appMc.mcBgBlack.filters = [appMc.mcUI.blurFilter];
        appMc.avatarNbag.filters = [appMc.mcUI.blurFilter];
        appMc.texts_p.filters = [appMc.mcUI.blurFilter];
        appMc.texts_l.filters = [appMc.mcUI.blurFilter];
        appMc.mcBg.filters = [appMc.mcUI.blurFilter];

        appMc.avatarNbag.interactive = false;

        gsap.set(appMc.mcDigitF, {delay:0.7, overwrite:"none", visible:true});
        gsap.set(appMc.won, {delay:0.7, overwrite:"none", visible:true});
        gsap.set(appMc.points, {delay:0.7, overwrite:"none", visible:true});
        gsap.set(appMc.finalCardCoins, {delay:0.7, overwrite:"none", visible:true});

        gsap.from(appMc.finalCardCoins.scale, 0.5,{delay:0.7, overwrite:"none", x:0, y:0, ease:Back.easeOut});
        gsap.to(appMc.finalCardCoins, 1.5,{delay:1.2, yoyo:true, repeat:-1, overwrite:"none", y:'-=15', ease:Sine.easeInOut});

        gsap.set(appMc.finalCoinsBag, {delay:0.7, overwrite:"none", visible:true});
        gsap.to(appMc.finalCoinsBag, 0.5,{delay:0.7, overwrite:"none", alpha:1, ease:"none"});
        gsap.from(appMc.finalCoinsBag.scale, 0.5,{delay:0.7, overwrite:"none", x:0, y:0, ease:Back.easeOut})

        gsap.to(appMc.mcBgBlack, 0.5,{delay:0.7, overwrite:"none", alpha:0.5, ease:"none"});

        gsap.set(appMc.claim, {delay:2.2, overwrite:"none", visible:true});
        gsap.from(appMc.claim.scale, 0.2,{delay:2.2, overwrite:"none", x:1, y:1, ease:Sine.easeOut});
        gsap.to(appMc.claim.scale, 0.5,{delay:2.4, yoyo:true, repeat:-1, overwrite:"none", x:"-=0.05", y:"-=0.05", ease:Sine.easeInOut});

        EndGame()
    },1500);
    
}