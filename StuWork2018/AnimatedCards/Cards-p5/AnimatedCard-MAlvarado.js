(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"AnimatedCard_MAlvarado_atlas_", frames: [[0,0,724,1024],[0,1026,795,219]]}
];


// symbols:



(lib.KagamineRinandLen = function() {
	this.spriteSheet = ss["AnimatedCard_MAlvarado_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Vocaloid_Kagamine_rin_len_logo_2015 = function() {
	this.spriteSheet = ss["AnimatedCard_MAlvarado_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BasicButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag9BVIgFgiQALADANAAQAIABAFgEQAFgEAEgKIg0h7IAyAAIAZBTIAYhTIAuAAIgxCDQgIAXgJAJQgLALgagBQgKAAgVgCg");
	this.shape.setTransform(86.3,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag7A3QgMgLAAgPQAAgOAJgJQAIgIAWgFQAbgFAHgCIARgGQAAgJgEgDQgDgEgJAAQgLAAgGAEQgFADgCAIIgugFQADgMAFgGQAEgHAKgFQAGgEAMgCQALgCANAAQAVAAANACQANADAJAHQAGAGADAJQAEAKAAAJIAAA2IABAOQABAFAEAHIgtAAIgEgHIgBgIQgKAJgJAEQgMAFgQAAQgXAAgLgKgAAAAJQgPAEgEAEQgEAEAAAFQAAAFAEAEQAEAEAIAAQAHAAAGgEQAHgEADgGQADgFAAgJIAAgIIgTAGg");
	this.shape_1.setTransform(70.9,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBWIAAirIAvAAIAACrg");
	this.shape_2.setTransform(58.9,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhDBYIAAirIAtAAIAAASQAIgLAJgFQAIgFANgBQAZAAAOAUQAOATAAAcQAAAegPARQgPAQgXAAQgLAAgIgEQgJgDgHgIIAAA8gAgNgsQgHAHAAAQQAAAPAHAGQAGAHAJAAQAIAAAFgHQAGgGAAgQQAAgPgGgHQgGgHgIAAQgJAAgFAHg");
	this.shape_3.setTransform(47.2,30.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmA6QgOgHgJgPQgKgPAAgVQAAgcATgSQASgSAiAAQAZAAAPAIQAQAIAIAQQAIAPAAAXIAAAGIhfAAQACALAFAGQAGAIALAAQAGAAAHgDQAEgDAEgFIAwAEQgLATgPAIQgQAIgcAAQgYAAgOgHgAgRgbQgFAGgBALIAuAAQgBgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_4.setTransform(30.9,27.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAYBWIgbg0QgFgLgEgDQgHgDgHAAIgEAAIAABFIg1AAIAAirIBXAAQAZAAANAFQANADAHAMQAJAMgBAQQAAAOgGAKQgGALgKAFQgIAFgLACQAKADAEAEQACABAGAIIAIAKIAaAygAgegPIAWAAIANgCQAGgBADgFQADgFAAgFQAAgIgFgEQgGgFgNAAIgXAAg");
	this.shape_5.setTransform(15.1,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Rounded
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_7.setTransform(50,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_8.setTransform(50,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_9.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_8},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Squared
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_10.setTransform(50,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_11.setTransform(50,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_12.setTransform(50,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_13.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_12},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_10}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.AnimatedCardMAlvarado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on the current frame
		
		this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Reference
	this.instance = new lib.KagamineRinandLen();
	this.instance.parent = this;
	this.instance.setTransform(248,0,0.756,0.756);

	this.instance_1 = new lib.Vocaloid_Kagamine_rin_len_logo_2015();
	this.instance_1.parent = this;
	this.instance_1.setTransform(136,228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},10).to({state:[]},1).wait(9));

	// Rin and Len
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ATjkVIgMkgImdAAIANiKIktAAIAACKImdgNIATEgIg/gHIAAkGIjNAAIgNidIkygGIgTCcIjOANIAABeIkhkgIrDLEIAAG1IF4lSIAAKwMAjMAAAQHgjgkxndIH1AAIAZpYIlsgMIAAEgg");
	this.shape.setTransform(327,319.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20).to({_off:false},0).wait(10));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.parent = this;
	this.next_btn.setTransform(881.4,673.4);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(30));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EhKng2vMCVPAAAMAAABtfMiVPAAAg");
	this.shape_1.setTransform(512.6,384.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EhKnA2wMAAAhtfMCVPAAAMAAABtfg");
	this.shape_2.setTransform(512.6,384.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},20).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1392.4,1056.4,102,52);
// library properties:
lib.properties = {
	id: '5F3C63425C28F04E9DDA814376897F90',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFFF00",
	opacity: 1.00,
	manifest: [
		{src:"images/AnimatedCard_MAlvarado_atlas_.png?1525131636614", id:"AnimatedCard_MAlvarado_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5F3C63425C28F04E9DDA814376897F90'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;