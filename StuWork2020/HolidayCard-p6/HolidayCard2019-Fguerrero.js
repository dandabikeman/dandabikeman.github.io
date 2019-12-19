(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_Fguerrero_atlas_", frames: [[0,0,1847,1609]]},
		{name:"HolidayCard2019_Fguerrero_atlas_2", frames: [[0,0,1526,1329]]},
		{name:"HolidayCard2019_Fguerrero_atlas_3", frames: [[0,0,1226,1087]]},
		{name:"HolidayCard2019_Fguerrero_atlas_4", frames: [[0,1058,1696,597],[0,0,1191,1056]]},
		{name:"HolidayCard2019_Fguerrero_atlas_5", frames: [[904,0,890,1049],[0,0,902,1063],[0,1065,1648,580]]},
		{name:"HolidayCard2019_Fguerrero_atlas_6", frames: [[0,1021,1056,226],[0,0,865,1019],[867,0,506,206],[867,416,506,206],[867,208,506,206]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(img.CachedTexturedBitmap_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7485,1642);


(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_18 = function() {
	this.initialize(img.CachedTexturedBitmap_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3960,2976);


(lib.CachedTexturedBitmap_19 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(img.CachedTexturedBitmap_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7822,2328);


(lib.CachedTexturedBitmap_20 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_21 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(img.CachedTexturedBitmap_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7248,2016);


(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(img.CachedTexturedBitmap_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4882,2358);


(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(img.CachedTexturedBitmap_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7731,3371);


(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(img.CachedTexturedBitmap_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2245,1201);


(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(img.CachedTexturedBitmap_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2310,1236);


(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["HolidayCard2019_Fguerrero_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ButtonYellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.btnText = new cjs.Text("Text", "50px 'Times New Roman'");
	this.btnText.name = "btnText";
	this.btnText.textAlign = "center";
	this.btnText.lineHeight = 57;
	this.btnText.lineWidth = 212;
	this.btnText.parent = this;
	this.btnText.setTransform(125,21.25);

	this.timeline.addTween(cjs.Tween.get(this.btnText).wait(4));

	// Shape
	this.instance = new lib.CachedTexturedBitmap_19();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


// stage content:
(lib.HolidayCard2019Fguerrero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*This template will be used to create the Holiday Card Project
			It includes: 
				• A working Play button 
				• Some directions how to use
				• The Holiday Message on frame 40 / 4 seconds (place holder)
				• What else?
			VERSION 2 has a button whose text changes on frame 50 (where the animation stops)
		*/ 
		this.stop();
		
		// The button instance is named playButton
		// This makes the text on the playButton say "Play"
		this.playButton.btnText.text = "Play";
		// The code below make a button named playButton play the animation
		this.playButton.addEventListener("click", Click_playButton.bind(this));
		
		function Click_playButton()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}
	this.frame_39 = function() {
		playSound("MerryCHRISTMASwav");
	}
	this.frame_49 = function() {
		this.stop();
		// This makes the text on the playButton say "Play"
		this.playButton.btnText.text = "Rewind";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(10).call(this.frame_49).wait(1));

	// Holiday_Message
	this.text = new cjs.Text("1", "48px 'Times New Roman'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(1592.65,960.35);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(38).to({_off:false,x:338.05,y:129.05,text:"Merry Christmas",font:"144px 'Times New Roman'",lineHeight:161.45,lineWidth:1004},0).to({_off:true},10).wait(1));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(225,925,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(50));

	// Animation
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(-1069.55,-194.25,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1195.75,-251.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-972.25,-109.05,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1217.75,-280.15,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1254.25,-1074.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_4}]},5).wait(22));

	// Confetti
	this.instance_5 = new lib.CachedTexturedBitmap_6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1394.65,-907.9,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(372.75,-306.85,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(264.15,-58.85,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(396.15,191.5,0.5,0.5);

	this.instance_9 = new lib.CachedTexturedBitmap_10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(558.3,894.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},28).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},1).wait(17));

	// HEAD
	this.instance_10 = new lib.CachedTexturedBitmap_11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(2893.6,-205.7,0.5,0.5);

	this.instance_11 = new lib.CachedTexturedBitmap_12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(649.75,159.45,0.5,0.5);

	this.instance_12 = new lib.CachedTexturedBitmap_13();
	this.instance_12.parent = this;
	this.instance_12.setTransform(647.95,146,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},28).to({state:[{t:this.instance_12}]},7).wait(15));

	// ARMS
	this.instance_13 = new lib.CachedTexturedBitmap_14();
	this.instance_13.parent = this;
	this.instance_13.setTransform(2647,45.1,0.5,0.5);

	this.instance_14 = new lib.CachedTexturedBitmap_15();
	this.instance_14.parent = this;
	this.instance_14.setTransform(395.9,417.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},28).wait(22));

	// body
	this.instance_15 = new lib.CachedTexturedBitmap_16();
	this.instance_15.parent = this;
	this.instance_15.setTransform(2770.6,133.85,0.5,0.5);

	this.instance_16 = new lib.CachedTexturedBitmap_17();
	this.instance_16.parent = this;
	this.instance_16.setTransform(523.1,508.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},28).wait(22));

	// background
	this.instance_17 = new lib.CachedTexturedBitmap_18();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-200.75,-435.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-554.7,-549.4,4025.7,1601.9);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#CCFFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_1.png?1576614618116", id:"CachedTexturedBitmap_1"},
		{src:"images/CachedTexturedBitmap_18.png?1576614618116", id:"CachedTexturedBitmap_18"},
		{src:"images/CachedTexturedBitmap_2.png?1576614618116", id:"CachedTexturedBitmap_2"},
		{src:"images/CachedTexturedBitmap_3.png?1576614618116", id:"CachedTexturedBitmap_3"},
		{src:"images/CachedTexturedBitmap_4.png?1576614618116", id:"CachedTexturedBitmap_4"},
		{src:"images/CachedTexturedBitmap_5.png?1576614618116", id:"CachedTexturedBitmap_5"},
		{src:"images/CachedTexturedBitmap_6.png?1576614618116", id:"CachedTexturedBitmap_6"},
		{src:"images/CachedTexturedBitmap_7.png?1576614618116", id:"CachedTexturedBitmap_7"},
		{src:"images/HolidayCard2019_Fguerrero_atlas_.png?1576614618092", id:"HolidayCard2019_Fguerrero_atlas_"},
		{src:"images/HolidayCard2019_Fguerrero_atlas_2.png?1576614618092", id:"HolidayCard2019_Fguerrero_atlas_2"},
		{src:"images/HolidayCard2019_Fguerrero_atlas_3.png?1576614618092", id:"HolidayCard2019_Fguerrero_atlas_3"},
		{src:"images/HolidayCard2019_Fguerrero_atlas_4.png?1576614618092", id:"HolidayCard2019_Fguerrero_atlas_4"},
		{src:"images/HolidayCard2019_Fguerrero_atlas_5.png?1576614618092", id:"HolidayCard2019_Fguerrero_atlas_5"},
		{src:"images/HolidayCard2019_Fguerrero_atlas_6.png?1576614618092", id:"HolidayCard2019_Fguerrero_atlas_6"},
		{src:"sounds/MerryCHRISTMASwav.mp3?1576614618116", id:"MerryCHRISTMASwav"}
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