(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_BRodriguez_atlas_", frames: [[0,0,1173,645],[162,855,161,69],[1016,797,133,132],[1641,823,156,93],[1491,823,148,116],[0,855,160,86],[1799,829,160,86],[1175,0,525,443],[325,855,134,39],[1491,445,70,18],[1999,471,40,25],[1016,647,148,148],[1891,679,148,148],[1491,679,398,142],[1702,0,314,469],[1175,445,314,469],[0,647,506,206],[508,647,506,206],[1491,471,506,206]]}
];


// symbols:



(lib.CachedTexturedBitmap_389 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_390 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_391 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_392 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_393 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_394 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_395 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_396 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_397 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_398 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_399 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_400 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_401 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_402 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_403 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_406 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_407 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_408 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_409 = function() {
	this.initialize(ss["HolidayCard2019_BRodriguez_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.ButtonYellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.btnText = new cjs.Text("Play", "50px 'Times New Roman'");
	this.btnText.name = "btnText";
	this.btnText.textAlign = "center";
	this.btnText.lineHeight = 57;
	this.btnText.lineWidth = 212;
	this.btnText.parent = this;
	this.btnText.setTransform(125,21.25);

	this.timeline.addTween(cjs.Tween.get(this.btnText).wait(4));

	// Shape
	this.instance = new lib.CachedTexturedBitmap_407();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_408();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_409();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


// stage content:
(lib.HolidayCard2019BRodriguez = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*This template will be used to create the Holiday Card Project
			It includes: 
				• A working Play button 
				• Some directions how to use
				• The Holiday Message on frame 40 / 4 seconds (place holder)
				• What else?
		*/ 
		this.stop();
		
		// The button instance is named playButton
		// The code below make a button named playButton play the animation
		this.playButton.addEventListener("click", Click_playButton.bind(this));
		
		function Click_playButton()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// Holiday_Message
	this.instance = new lib.CachedTexturedBitmap_389();
	this.instance.parent = this;
	this.instance.setTransform(538.15,49.85,0.5,0.5);

	this.text = new cjs.Text("1", "48px 'Times New Roman'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(1592.65,960.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(50));

	// Animation
	this.instance_1 = new lib.CachedTexturedBitmap_390();
	this.instance_1.parent = this;
	this.instance_1.setTransform(344.6,249.65,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_391();
	this.instance_2.parent = this;
	this.instance_2.setTransform(378.35,218.85,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_392();
	this.instance_3.parent = this;
	this.instance_3.setTransform(500.9,215.6,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_393();
	this.instance_4.parent = this;
	this.instance_4.setTransform(613.2,208.6,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_394();
	this.instance_5.parent = this;
	this.instance_5.setTransform(807.05,287.75,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_395();
	this.instance_6.parent = this;
	this.instance_6.setTransform(807.05,287.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[]},3).wait(34));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(225,925,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.instance_7 = new lib.CachedTexturedBitmap_397();
	this.instance_7.parent = this;
	this.instance_7.setTransform(16.05,558.5,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_396();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-96.95,-64.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playButton}]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.playButton}]},15).wait(34));

	// eyes
	this.instance_9 = new lib.CachedTexturedBitmap_398();
	this.instance_9.parent = this;
	this.instance_9.setTransform(369.4,284.1,0.5,0.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({_off:true},15).wait(34));

	// nose
	this.instance_10 = new lib.CachedTexturedBitmap_399();
	this.instance_10.parent = this;
	this.instance_10.setTransform(381.35,300.2,0.5,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({_off:true},15).wait(34));

	// head
	this.instance_11 = new lib.CachedTexturedBitmap_400();
	this.instance_11.parent = this;
	this.instance_11.setTransform(348.95,261.75,0.5,0.5);

	this.instance_12 = new lib.CachedTexturedBitmap_401();
	this.instance_12.parent = this;
	this.instance_12.setTransform(348.95,261.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},8).to({state:[]},7).wait(34));

	// arms
	this.instance_13 = new lib.CachedTexturedBitmap_402();
	this.instance_13.parent = this;
	this.instance_13.setTransform(285.9,302.4,0.5,0.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({_off:true},15).wait(34));

	// body
	this.instance_14 = new lib.CachedTexturedBitmap_403();
	this.instance_14.parent = this;
	this.instance_14.setTransform(313.7,319.6,0.5,0.5);

	this.instance_15 = new lib.CachedTexturedBitmap_406();
	this.instance_15.parent = this;
	this.instance_15.setTransform(313.7,319.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},1).to({state:[]},9).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(743.1,460.8,918.6,568.6000000000001);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#66CCFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HolidayCard2019_BRodriguez_atlas_.png?1576613445552", id:"HolidayCard2019_BRodriguez_atlas_"}
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
an.compositions['CF8A45ABEF2A40D18B1F2342EBAAC3DF'] = {
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;