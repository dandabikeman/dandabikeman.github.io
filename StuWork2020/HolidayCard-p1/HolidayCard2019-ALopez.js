(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_ALopez_atlas_", frames: [[0,0,1671,1539]]},
		{name:"HolidayCard2019_ALopez_atlas_2", frames: [[0,0,1671,1539]]},
		{name:"HolidayCard2019_ALopez_atlas_3", frames: [[0,0,1671,1539]]},
		{name:"HolidayCard2019_ALopez_atlas_4", frames: [[0,0,1648,1539]]},
		{name:"HolidayCard2019_ALopez_atlas_5", frames: [[0,0,1671,1081]]},
		{name:"HolidayCard2019_ALopez_atlas_6", frames: [[0,0,1648,1081]]},
		{name:"HolidayCard2019_ALopez_atlas_7", frames: [[1028,0,624,1385],[0,0,1026,1081],[0,1083,506,206],[0,1291,506,206],[508,1083,506,206]]}
];


// symbols:



(lib.CachedTexturedBitmap_122 = function() {
	this.initialize(ss["HolidayCard2019_ALopez_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_123 = function() {
	this.initialize(ss["HolidayCard2019_ALopez_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_124 = function() {
	this.initialize(ss["HolidayCard2019_ALopez_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_125 = function() {
	this.initialize(ss["HolidayCard2019_ALopez_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_126 = function() {
	this.initialize(ss["HolidayCard2019_ALopez_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_127 = function() {
	this.initialize(ss["HolidayCard2019_ALopez_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_128 = function() {
	this.initialize(ss["HolidayCard2019_ALopez_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_129 = function() {
	this.initialize(ss["HolidayCard2019_ALopez_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_130 = function() {
	this.initialize(ss["HolidayCard2019_ALopez_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_131 = function() {
	this.initialize(ss["HolidayCard2019_ALopez_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_132 = function() {
	this.initialize(ss["HolidayCard2019_ALopez_atlas_7"]);
	this.gotoAndStop(4);
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
	this.instance = new lib.CachedTexturedBitmap_130();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_131();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_132();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


// stage content:
(lib.HolidayCard2019ALopez = function(mode,startPosition,loop) {
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
	this.frame_40 = function() {
		playSound("sound1wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(11));

	// konya
	this.instance = new lib.CachedTexturedBitmap_122();
	this.instance.parent = this;
	this.instance.setTransform(704.4,277.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51));

	// Snowman_chararcter
	this.instance_1 = new lib.CachedTexturedBitmap_123();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1078.25,447.55,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_124();
	this.instance_2.parent = this;
	this.instance_2.setTransform(708.1,174.4,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_125();
	this.instance_3.parent = this;
	this.instance_3.setTransform(708.1,174.4,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_126();
	this.instance_4.parent = this;
	this.instance_4.setTransform(708.1,174.4,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_127();
	this.instance_5.parent = this;
	this.instance_5.setTransform(708.1,403.75,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_128();
	this.instance_6.parent = this;
	this.instance_6.setTransform(708.1,174.4,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_129();
	this.instance_7.parent = this;
	this.instance_7.setTransform(708.1,403.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},35).to({state:[{t:this.instance_7}]},1).wait(10));

	// Holiday_Message
	this.text = new cjs.Text("1", "48px 'Times New Roman'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(1592.65,960.35);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(39).to({_off:false,x:338.05,y:129.05,text:"Happy Holidays",font:"144px 'Times New Roman'",lineHeight:161.45,lineWidth:1004},0).wait(11));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(225,925,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(938.5,652.1,723.2,377.30000000000007);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#B9FFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HolidayCard2019_ALopez_atlas_.png?1576770989695", id:"HolidayCard2019_ALopez_atlas_"},
		{src:"images/HolidayCard2019_ALopez_atlas_2.png?1576770989696", id:"HolidayCard2019_ALopez_atlas_2"},
		{src:"images/HolidayCard2019_ALopez_atlas_3.png?1576770989696", id:"HolidayCard2019_ALopez_atlas_3"},
		{src:"images/HolidayCard2019_ALopez_atlas_4.png?1576770989696", id:"HolidayCard2019_ALopez_atlas_4"},
		{src:"images/HolidayCard2019_ALopez_atlas_5.png?1576770989696", id:"HolidayCard2019_ALopez_atlas_5"},
		{src:"images/HolidayCard2019_ALopez_atlas_6.png?1576770989696", id:"HolidayCard2019_ALopez_atlas_6"},
		{src:"images/HolidayCard2019_ALopez_atlas_7.png?1576770989696", id:"HolidayCard2019_ALopez_atlas_7"},
		{src:"sounds/sound1wav.mp3?1576770989702", id:"sound1wav"}
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