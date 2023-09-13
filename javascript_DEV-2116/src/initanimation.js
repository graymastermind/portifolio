const InitAnimation = () =>{
	let i, objTemp;			
	appMc.mcMain.visible=true;			
	document.getElementById('main').style.visibility = "visible";
	document.getElementById('progress').style.display = "none";	

	gsap.set(appMc.selectAvatar, {delay:0.2, overwrite:"none", visible:true});
	gsap.set(appMc.arrows, {delay:0.2, overwrite:"none", visible:true});
	gsap.set(appMc.caption, {delay:0.2, overwrite:"none", visible:true});
	gsap.set(appMc.shadow, {delay:0.2, overwrite:"none", visible:true});

	gsap.from(appMc.selectAvatar.scale, 0.2,{delay:0.2, overwrite:"none", x:0, y:0, ease:Sine.easeOut});
	gsap.from(appMc.arrows.scale, 0.2,{delay:0.2, overwrite:"none", x:0, y:0, ease:Sine.easeOut});
	gsap.from(appMc.shadow.scale, 0.2,{delay:0.2, overwrite:"none", x:0, y:0, ease:Sine.easeOut});

	appSounds["bg"].play();
	stateGame = 0;	
}