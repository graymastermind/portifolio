
const Buttons =() =>{
	stateGame++

	if(stateGame == 1){
		appMc.mcBg.texture = moduleTexture.pixiTextures["bg_1"];
		appMc.tapToSelect.visible = false;
		appMc.startBattle.visible = true;

		gsap.from(appMc.startBattle.scale, 0.2,{delay:0.2, overwrite:"none", x:0, y:0, ease:Sine.easeOut});
		gsap.to(appMc.startBattle.scale, 0.5,{delay:0.4, yoyo:true, repeat:-1, overwrite:"none", x:"-=0.05", y:"-=0.05", ease:Sine.easeInOut});
		
		for(let i = 0; i<10; i++){
			appMc["level1CharacterIcon_"+i].visible = false;
		}
		appMc.CharacterBoardBar.visible = false;
		appMc.telescope.visible = false;
		appMc.bush.visible = false;
		appMc.selectAvatar.visible = false;
		appMc.arrows.visible = false;
		appMc.caption.visible = false;
		appMc.shadow.visible = false;

		gsap.from(appMc.tapToSelect.scale, 0.2,{delay:0, overwrite:"none", x:0, y:0, ease:Sine.easeIn});
		gsap.from(appMc.selectAvatar.scale, 0.2,{delay:0, overwrite:"none", x:0, y:0, ease:Sine.easeIn});
		gsap.from(appMc.CharacterBoardBar.scale, 0.5,{delay:0, overwrite:"none", x:0, y:0, ease:Sine.easeIn});
		gsap.from(appMc.arrows.scale, 0.2,{delay:0, overwrite:"none", x:0, y:0, ease:Sine.easeIn});
		gsap.from(appMc.caption.scale, 0.2,{delay:0, overwrite:"none", x:0, y:0, ease:Sine.easeIn});
		gsap.from(appMc.shadow.scale, 0.2,{delay:0, overwrite:"none", x:0, y:0, ease:Sine.easeIn});

		gsap.delayedCall(0, myFunction);

		function myFunction() {
		  	gsap.to(appMc.vfxBush, 0.2,{delay:0.0, overwrite:"none", alpha:1, ease:"none"});
		  	appSounds["effect_2"].play();
		}

		appMc["level2CharacterIcon_"+selectedAvatar].visible = true;
		appMc["ability_bar_"+selectedAvatar].visible = true;
		appMc["attribute_"+selectedAvatar].visible = true;
		appMc["armour_"+selectedAvatar].visible = true;
		appMc["name_"+selectedAvatar].visible = true;

		gsap.from(appMc["level2CharacterIcon_"+selectedAvatar].scale, 0.2,{delay:0, overwrite:"none", x:0, y:0, ease:Back.easeOut});
		gsap.from(appMc["ability_bar_"+selectedAvatar].scale, 0.2,{delay:0.4, overwrite:"none", x:0, y:0, ease:Sine.easeOut});
		gsap.from(appMc["ability_bar_"+selectedAvatar].scale, 0.2,{delay:0.4, overwrite:"none", x:0, y:0, ease:Sine.easeOut});
		gsap.from(appMc["armour_"+selectedAvatar].scale, 0.2,{delay:0.4, overwrite:"none", x:0, y:0, ease:Sine.easeOut});
		gsap.from(appMc["name_"+selectedAvatar].scale, 0.2,{delay:0.4, overwrite:"none", x:0, y:0, ease:Sine.easeOut});

		appMc.mcBgOverlay.interactive = true;	
	}

	if(stateGame == 2){

		EndGame()
	}
}