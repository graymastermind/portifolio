const handShow = () =>{

    appMc.magnet.alpha = 1;
    gsap.from(appMc.magnet.scale, 0.5,{delay:0.5, overwrite:"none", x:0, y:0, ease:Back.easeOut});
    gsap.to(appMc.magnet, 1.5,{delay:0.5, yoyo:true, repeat:-1, overwrite:"none", x:'+=450', ease:Sine.easeInOut});
    gsap.to(appMc.arrow_l, 0.5,{delay:0.2, overwrite:"none", alpha:1, ease:"none"});
    gsap.to(appMc.arrow_r, 0.5,{delay:0.2, overwrite:"none", alpha:1, ease:"none"});
}


const Position = () =>{
    if (stateGame == 0) {
            if(appObj.mainWidth<appObj.mainHeight){
                appMc.avatar.x = 0;
                appMc.box.x = appMc.avatar.x+80; 
            }
            else{
                appMc.avatar.x = 0;
                appMc.box.x = appMc.avatar.x+50;
            }
    }
}


const Tutorial = () =>{
    count = 0

	gsap.set(appMc.drag_l, {delay:0.2, overwrite:"none", visible:true});
    gsap.set(appMc.drag_p, {delay:0.2, overwrite:"none", visible:true});

	gsap.from(appMc.drag_l.scale, 0.5,{delay:0.2, overwrite:"none", x:0, y:0, ease:Back.easeOut});
    gsap.from(appMc.drag_p.scale, 0.5,{delay:0.2, overwrite:"none", x:0, y:0, ease:Back.easeOut});

    handShow();

    appMc.avatarNbox.interactive = true;

}

const FirstTap = () =>{

    gsap.set(appMc.arrow_r, {delay:0, overwrite:"none", x:110-appObj.canvasWidth*0.5/appMc.mcUI.scale.y, y:0});
    gsap.set(appMc.arrow_l, {delay:0, overwrite:"none", x:-110+appObj.canvasWidth*0.5/appMc.mcUI.scale.y, y:0});

    TweenLite.killTweensOf(appMc.magnet);
	appMc.magnet.alpha = 0;

    gsap.to(appMc.tutorial, 0.5,{delay:0.0, overwrite:"none", alpha:1, ease:"none"});
    gsap.to(appMc.mcBgBlack, 0.5,{delay:0.0, overwrite:"none", alpha:0, ease:"none"});
    gsap.to(appMc.magnet, 0.5,{delay:0.0, overwrite:"none", alpha:0, ease:"none"});

	gsap.to(appMc.drag_l.scale, 0.5,{delay:2, overwrite:"none", x:0, y:0, ease:Back.easeIn});
    gsap.to(appMc.drag_p.scale, 0.5,{delay:2, overwrite:"none", x:0, y:0, ease:Back.easeIn});

    gsap.to(appMc.avatar, {delay:2, x: 0, duration: 1});
    gsap.to(appMc.box, {delay:2, x: boxPosition, duration: 1});

    gsap.to(appMc.avatar, {delay:2, x: 0, duration: 1});
    gsap.to(appMc.tutorial, 0.5,{delay:2, overwrite:"none", alpha:0, ease:"none"});

    setTimeout(()=>{
        appMc.avatarNbox.interactive = false;
    },2000);

    setTimeout(()=>{
        gsap.set(appMc.scoreBoardContainer, {delay:0, overwrite:"none", visible:true});
        gsap.to(appMc.scoreBoardContainer, 0.5,{delay:0, overwrite:"none", alpha:1, ease:"none"});
    },4000);
    
    setTimeout(()=>{
        Start()
    },5000);
     
}

const Start = () =>{

    stateGame = 1;

    appMc.avatarNbox.interactive = true;

    startClicked = true;

}

const createGem = () =>{
    appMc.mcUI.setChildIndex(appMc.GemsContainer, 4);
    appMc.mcUI.setChildIndex(appMc.scoreBoardContainer, 5);
	let tex = RandomInteger(1, 2);
	appMc["mcMyCoin"+gemCount] = new createContainer({p:appMc.GemsContainer});
    appMc["mcMyCoinSprite"+gemCount] = new createSprite({p:appMc["mcMyCoin"+gemCount],tex:"gem_"+tex});
    appMc["mcMyCoin"+gemCount].y	= -60-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
	appMc["mcMyCoin"+gemCount].x = RandomInteger( -appObj.canvasWidth*0.5/appMc.mcUI.scale.y, appObj.canvasWidth*0.5/appMc.mcUI.scale.y);		
	appMc["mcMyCoin"+gemCount]._dy = 2;
    appMc["mcMyCoin"+gemCount].id = tex;
    appMc["mcMyCoin"+gemCount].scale.set(0.25+Math.random()*0.10)
    appMc["mcMyCoin"+gemCount].visible = false;			
	gemData.push(appMc["mcMyCoin"+gemCount]);
	gemCount++;
    
}

const finalCardCoinsFunc = () =>{
    appMc.mcUI.setChildIndex(appMc.GemsContainer, 3);
    for (var i = 0; i < 40; i++)
    {
        let tex = RandomInteger(1, 2);
        // create a new Sprite
        var gem = new createSprite({p:appMc.GemsContainer,tex:"gem_"+tex});
        gem.anchor.set(0.5);
        gem.scale.set(0.25+Math.random()*0.10)

        // scatter them all
        gem.x = Math.random() * RandomInteger( -appObj.canvasWidth*0.5/appMc.mcUI.scale.y, appObj.canvasWidth*0.5/appMc.mcUI.scale.y);
        gem.y = Math.random() *  RandomInteger( -appObj.canvasHeight*0.5/appMc.mcUI.scale.y, appObj.canvasHeight*0.5/appMc.mcUI.scale.y);

        // create a random direction in radians
        gem.direction = Math.random() * Math.PI * 2;


        gem.offset = Math.random() * 100;
        gemDataF.push(gem);
    }
}

const FinalCard = () =>{
   
    setTimeout(()=>{

        gsap.delayedCall(0.72, finalCardCoinsFunc);

        appSounds["final"].play();
        gsap.to(appMc.box, {delay:1, x: 0, duration: 1});
        gsap.to(appMc.avatar, {delay:1, x: 0, duration: 1});

        appMc.mcUI.blurFilter = new PIXI.filters.BlurFilter();
        appMc.mcUI.blurFilter.blur = 8;
        appMc.mcUI.blurFilter.quality = 3;
        appMc.mcBgBlack.filters = [appMc.mcUI.blurFilter];
        appMc.avatarNbox.filters = [appMc.mcUI.blurFilter];
        appMc.mcBg.filters = [appMc.mcUI.blurFilter];
        appMc.scoreBoardContainer.filters = [appMc.mcUI.blurFilter];

        appMc.avatarNbox.interactive = false;

        gsap.to(appMc.GemsContainer, 1.5,{delay:0.7, yoyo:true, repeat:-1, overwrite:"none", y:'30', ease:Sine.easeInOut});

        gsap.set(appMc.win_ls, {delay:0.7, overwrite:"none", visible:true});
        gsap.set(appMc.win_p, {delay:0.7, overwrite:"none", visible:true});

        gsap.from(appMc.win_ls.scale, 0.2,{delay:0.7, overwrite:"none", x:0.5, y:0.5, ease:Sine.easeOut});
        gsap.from(appMc.win_ls.scale, 0.5,{delay:0.9, overwrite:"none", x:"-=0.05", y:"-=0.05", ease:Sine.easeInOut});
        gsap.from(appMc.win_p.scale, 0.2,{delay:0.7, overwrite:"none", x:0.5, y:0.5, ease:Sine.easeOut});
        gsap.from(appMc.win_p.scale, 0.5,{delay:0.9, overwrite:"none", x:"-=0.05", y:"-=0.05", ease:Sine.easeInOut});

        gsap.set(appMc.chest, {delay:0.7, overwrite:"none", visible:true});
        gsap.to(appMc.chest, 0.5,{delay:0.7, overwrite:"none", alpha:1, ease:"none"});
        gsap.from(appMc.chest.scale, 0.2,{delay:0.7, overwrite:"none", x:0.5, y:0.5, ease:Sine.easeOut});
        gsap.from(appMc.chest.scale, 0.5,{delay:0.9, overwrite:"none", x:"-=0.05", y:"-=0.05", ease:Sine.easeInOut})

        gsap.to(appMc.mcBgBlack, 0.5,{delay:0.7, overwrite:"none", alpha:0.5, ease:"none"});

        gsap.set(appMc.claim, {delay:0.7, overwrite:"none", visible:true});
        gsap.from(appMc.claim.scale, 0.2,{delay:0.7, overwrite:"none", x:0.5, y:0.5, ease:Sine.easeOut});
        gsap.to(appMc.claim.scale, 0.5,{delay:0.9, yoyo:true, repeat:-1, overwrite:"none", x:"-=0.05", y:"-=0.05", ease:Sine.easeInOut});

        EndGame()
    },2500);
    
}