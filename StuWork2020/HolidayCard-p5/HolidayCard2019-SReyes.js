(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_SReyes_atlas_", frames: [[0,0,1501,1630]]},
		{name:"HolidayCard2019_SReyes_atlas_2", frames: [[0,0,1492,1630]]},
		{name:"HolidayCard2019_SReyes_atlas_3", frames: [[799,1074,506,206],[644,1345,506,206],[799,866,506,206],[0,1345,642,612],[0,0,797,1343],[799,0,720,864]]}
];


// symbols:



(lib.CachedTexturedBitmap_127 = function() {
	this.initialize(img.CachedTexturedBitmap_127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3100,1459);


(lib.CachedTexturedBitmap_128 = function() {
	this.initialize(ss["HolidayCard2019_SReyes_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_129 = function() {
	this.initialize(ss["HolidayCard2019_SReyes_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_130 = function() {
	this.initialize(ss["HolidayCard2019_SReyes_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_72 = function() {
	this.initialize(ss["HolidayCard2019_SReyes_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_73 = function() {
	this.initialize(ss["HolidayCard2019_SReyes_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_74 = function() {
	this.initialize(ss["HolidayCard2019_SReyes_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_75 = function() {
	this.initialize(ss["HolidayCard2019_SReyes_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_76 = function() {
	this.initialize(ss["HolidayCard2019_SReyes_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_77 = function() {
	this.initialize(img.CachedTexturedBitmap_77);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3364,502);


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
	this.instance = new lib.CachedTexturedBitmap_128();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_129();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_130();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


// stage content:
(lib.HolidayCard2019SReyes = function(mode,startPosition,loop) {
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
	this.frame_39 = function() {
		playSound("HappyHolidayswav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(13));

	// Holiday_Message
	this.text = new cjs.Text("Feliz Navidad", "48px 'Times New Roman'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 278;
	this.text.parent = this;
	this.text.setTransform(138.55,89.1,1.9492,1.9492);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(40).to({_off:false},0).wait(12));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(225,925,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(52));

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_72();
	this.instance.parent = this;
	this.instance.setTransform(617.65,40.45,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_73();
	this.instance_1.parent = this;
	this.instance_1.setTransform(612.75,40.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(51));

	// Layer_2
	this.instance_2 = new lib.CachedTexturedBitmap_74();
	this.instance_2.parent = this;
	this.instance_2.setTransform(818.75,396.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52));

	// Layer_6
	this.instance_3 = new lib.CachedTexturedBitmap_75();
	this.instance_3.parent = this;
	this.instance_3.setTransform(45.25,210,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52));

	// Layer_7
	this.instance_4 = new lib.CachedTexturedBitmap_76();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1294.9,476.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52));

	// Layer_3
	this.instance_5 = new lib.CachedTexturedBitmap_77();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1.5,799.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52));

	// Layer_4
	this.instance_6 = new lib.CachedTexturedBitmap_127();
	this.instance_6.parent = this;
	this.instance_6.setTransform(32.4,88.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({x:7.7,y:115.15},0).wait(1).to({x:30.3,y:146.15},0).wait(1).to({x:7.7,y:177},0).wait(1).to({x:28.25,y:207.85},0).wait(1).to({x:-1.5,y:246.15},0).wait(1).to({x:23.15,y:273.65},0).wait(1).to({x:-1.5,y:321.15},0).wait(1).to({x:21.15,y:387.55},0).wait(1).to({x:-1.5,y:411},0).wait(1).to({x:27.3,y:477.85},0).wait(1).to({x:12.9,y:455.25},0).wait(1).to({y:487.15},0).wait(1).to({x:27.3},0).wait(1).to({y:511.6},0).wait(1).to({x:41.05},0).wait(1).to({y:527.15},0).wait(1).to({x:14.3},0).wait(1).to({y:543.6},0).wait(1).to({x:30.75},0).wait(1).to({y:572.4},0).wait(1).to({y:593.7},0).wait(1).to({x:-22.05,y:681.7},0).wait(1).to({x:-59.1},0).wait(1).to({x:-24.15,y:729},0).wait(1).to({x:-24.2,y:852.2},0).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(780.9,565.5,899.6,1016.2);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#96CCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_127.png?1576632060247", id:"CachedTexturedBitmap_127"},
		{src:"images/CachedTexturedBitmap_77.png?1576632060247", id:"CachedTexturedBitmap_77"},
		{src:"images/HolidayCard2019_SReyes_atlas_.png?1576632060225", id:"HolidayCard2019_SReyes_atlas_"},
		{src:"images/HolidayCard2019_SReyes_atlas_2.png?1576632060225", id:"HolidayCard2019_SReyes_atlas_2"},
		{src:"images/HolidayCard2019_SReyes_atlas_3.png?1576632060225", id:"HolidayCard2019_SReyes_atlas_3"},
		{src:"sounds/HappyHolidayswav.mp3?1576632060247", id:"HappyHolidayswav"}
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