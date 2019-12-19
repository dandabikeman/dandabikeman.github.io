(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_JBarreto_atlas_", frames: [[1105,1759,506,206],[1105,1551,506,206],[0,0,1103,1968],[1105,1141,702,408],[1105,597,565,542],[1105,0,531,595]]},
		{name:"HolidayCard2019_JBarreto_atlas_2", frames: [[0,0,506,206]]}
];


// symbols:



(lib.CachedTexturedBitmap_1377 = function() {
	this.initialize(img.CachedTexturedBitmap_1377);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2207,1038);


(lib.CachedTexturedBitmap_1378 = function() {
	this.initialize(ss["HolidayCard2019_JBarreto_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1379 = function() {
	this.initialize(ss["HolidayCard2019_JBarreto_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1380 = function() {
	this.initialize(ss["HolidayCard2019_JBarreto_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1381 = function() {
	this.initialize(ss["HolidayCard2019_JBarreto_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1382 = function() {
	this.initialize(img.CachedTexturedBitmap_1382);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3696,538);


(lib.CachedTexturedBitmap_1383 = function() {
	this.initialize(img.CachedTexturedBitmap_1383);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4636,3084);


(lib.CachedTexturedBitmap_1384 = function() {
	this.initialize(ss["HolidayCard2019_JBarreto_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1385 = function() {
	this.initialize(ss["HolidayCard2019_JBarreto_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1386 = function() {
	this.initialize(ss["HolidayCard2019_JBarreto_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1386();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.2,0.2166,0.2166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-0.2,-0.2,115,128.89999999999998), null);


(lib.snowman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1385();
	this.instance.parent = this;
	this.instance.setTransform(53.3,-0.95,0.6823,0.6823);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.3,-0.9,385.5,369.79999999999995);


(lib.lefth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1384();
	this.instance.parent = this;
	this.instance.setTransform(-0.15,-0.2,0.1895,0.1895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.2,133,77.3);


(lib.ButtonYellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.btnText = new cjs.Text("PLAY", "50px 'Times New Roman'");
	this.btnText.name = "btnText";
	this.btnText.textAlign = "center";
	this.btnText.lineHeight = 57;
	this.btnText.lineWidth = 212;
	this.btnText.parent = this;
	this.btnText.setTransform(125,21.25);

	this.timeline.addTween(cjs.Tween.get(this.btnText).wait(4));

	// Shape
	this.instance = new lib.CachedTexturedBitmap_1378();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_1379();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_1380();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


(lib.kitten = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.snowman();
	this.instance.parent = this;
	this.instance.setTransform(-115.65,-60.85,0.3174,0.3174,0,0,0,267.6,234.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:246.1,regY:184,scaleX:0.352,scaleY:0.3537,x:-112.6,y:-71.85},0).wait(1).to({scaleX:0.3866,scaleY:0.39,x:-102.7,y:-66.95},0).wait(1).to({scaleX:0.4211,scaleY:0.4263,x:-92.8,y:-62},0).wait(1).to({scaleX:0.4557,scaleY:0.4626,x:-82.95,y:-57.1},0).wait(1).to({scaleX:0.4903,scaleY:0.4989,x:-73.05,y:-52.15},0).wait(1).to({scaleX:0.5249,scaleY:0.5352,x:-63.2,y:-47.25},0).wait(1).to({scaleX:0.5594,scaleY:0.5715,x:-53.25,y:-42.3},0).wait(1).to({scaleX:0.594,scaleY:0.6078,x:-43.4,y:-37.35},0).wait(1).to({scaleX:0.6286,scaleY:0.6441,x:-33.5,y:-32.45},0).wait(1).to({scaleX:0.6632,scaleY:0.6803,x:-23.65,y:-27.5},0).wait(1).to({scaleX:0.6977,scaleY:0.7166,x:-13.75,y:-22.6},0).wait(1).to({scaleX:0.7323,scaleY:0.7529,x:-3.9,y:-17.7},0).wait(1).to({scaleX:0.7669,scaleY:0.7892,x:6.05,y:-12.8},0).wait(1).to({scaleX:0.8015,scaleY:0.8255,x:15.9,y:-7.85},0).wait(1).to({scaleX:0.836,scaleY:0.8618,x:25.8,y:-2.95},0).wait(1).to({scaleX:0.8706,scaleY:0.8981,x:35.65,y:2},0).wait(1).to({scaleX:0.9052,scaleY:0.9344,x:45.55,y:6.95},0).wait(1).to({scaleX:0.9398,scaleY:0.9707,x:55.4,y:11.85},0).wait(1).to({scaleX:0.9743,scaleY:1.007,x:65.35,y:16.8},0).wait(1).to({scaleX:1.0089,scaleY:1.0433,x:75.2,y:21.7},0).wait(1).to({scaleX:1.0435,scaleY:1.0796,x:85.1,y:26.65},0).wait(1).to({scaleX:1.0781,scaleY:1.1159,x:94.95,y:31.55},0).wait(1).to({scaleX:1.1126,scaleY:1.1522,x:104.85,y:36.5},0).to({_off:true},1).wait(32));

	// Layer_7
	this.instance_1 = new lib.lefth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-40.4,-21.95,1,1,0,0,0,68.8,43.5);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(1).to({regX:66.4,regY:38.5,scaleX:1.0103,scaleY:1.0103,rotation:-5.193,x:-41.8,y:-22.15},0).wait(1).to({scaleX:1.0206,scaleY:1.0206,rotation:-10.386,x:-40.75,y:-17.4},0).wait(1).to({scaleX:1.0309,scaleY:1.0309,rotation:-15.579,x:-39.7,y:-12.6},0).wait(1).to({scaleX:1.0412,scaleY:1.0412,rotation:-20.7719,x:-38.65,y:-7.75},0).wait(1).to({scaleX:1.0515,scaleY:1.0515,rotation:-25.9649,x:-37.55,y:-2.85},0).wait(1).to({scaleX:1.0618,scaleY:1.0618,rotation:-31.1579,x:-36.4,y:2},0).wait(1).to({scaleX:1.072,scaleY:1.072,rotation:-36.3509,x:-35.25,y:7},0).wait(1).to({scaleX:1.0823,scaleY:1.0823,rotation:-41.5439,x:-34,y:12},0).wait(1).to({scaleX:1.0926,scaleY:1.0926,rotation:-46.7369,x:-32.8,y:17},0).wait(1).to({scaleX:1.1029,scaleY:1.1029,rotation:-51.9299,x:-31.5,y:22.05},0).wait(1).to({scaleX:1.1132,scaleY:1.1132,rotation:-57.1228,x:-30.15,y:27.1},0).wait(1).to({scaleX:1.1235,scaleY:1.1235,rotation:-62.3158,x:-28.8,y:32.2},0).wait(1).to({scaleX:1.1338,scaleY:1.1338,rotation:-67.5088,x:-27.35,y:37.3},0).wait(1).to({scaleX:1.1441,scaleY:1.1441,rotation:-72.7018,x:-25.9,y:42.4},0).wait(1).to({regX:68.8,regY:43.5,scaleX:1.143,scaleY:1.143,rotation:-72.7208,x:-19.6,y:41.4},0).wait(17));

	// hand
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.2,-67.65,1,1,0,0,0,57.3,64.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({regY:64.2,rotation:-1.0824,x:234,y:-68.6},0).wait(1).to({rotation:-2.1648,x:232.8,y:-69.5},0).wait(1).to({rotation:-3.2473,x:231.7,y:-70.4},0).wait(1).to({rotation:-4.3297,x:230.5,y:-71.3},0).wait(1).to({rotation:-5.4121,x:229.35,y:-72.15},0).wait(1).to({rotation:-6.4945,x:228.2,y:-73.05},0).wait(1).to({rotation:-7.577,x:227,y:-73.9},0).wait(1).to({rotation:-8.6594,x:225.8,y:-74.85},0).wait(1).to({rotation:-9.7418,x:224.65,y:-75.7},0).wait(1).to({rotation:-10.8242,x:223.5,y:-76.55},0).wait(1).to({rotation:-11.9067,x:222.3,y:-77.45},0).wait(1).to({rotation:-12.9891,x:221.2,y:-78.35},0).wait(1).to({rotation:-9.2002,x:224.7,y:-74.25},0).wait(1).to({rotation:-5.4114,x:228.3,y:-70.2},0).wait(1).to({rotation:-1.6225,x:231.85,y:-66.1},0).wait(1).to({rotation:2.1663,x:235.35,y:-62},0).wait(1).to({rotation:5.9552,x:238.95,y:-57.9},0).wait(1).to({rotation:9.744,x:242.5,y:-53.85},0).wait(1).to({rotation:13.5329,x:246.1,y:-49.8},0).wait(1).to({rotation:17.3217,x:249.65,y:-45.65},0).wait(1).to({rotation:21.1106,x:253.2,y:-41.55},0).wait(1).to({rotation:24.8994,x:256.7,y:-37.5},0).wait(1).to({rotation:19.8143,x:252.1,y:-42.9},0).wait(1).to({rotation:14.7292,x:247.45,y:-48.25},0).wait(1).to({rotation:9.6441,x:242.8,y:-53.6},0).wait(1).to({rotation:4.559,x:238.1,y:-58.95},0).wait(1).to({rotation:-0.5262,x:233.45,y:-64.35},0).wait(1).to({rotation:-5.6113,x:228.8,y:-69.65},0).wait(1).to({rotation:-10.6964,x:224.1,y:-75.05},0).wait(1).to({rotation:-15.7815,x:219.45,y:-80.4},0).wait(2));

	// outline
	this.instance_3 = new lib.CachedTexturedBitmap_1381();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-13.9,-176.45,0.2166,0.2166);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(32));

	// outline
	this.instance_4 = new lib.CachedTexturedBitmap_1382();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-399.15,183.75,0.2166,0.2166);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(56));

	// background
	this.instance_5 = new lib.CachedTexturedBitmap_1383();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-503.85,-202.95,0.2166,0.2166);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-503.8,-202.9,1004,667.9);


// stage content:
(lib.HolidayCard2019JBarreto = function(mode,startPosition,loop) {
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
	this.frame_49 = function() {
		this.stop();
		// This makes the text on the playButton say "Play"
		this.playButton.btnText.text = "Rewind";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// Holiday_Message
	this.text = new cjs.Text("1", "48px 'Times New Roman'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(1592.65,960.35);

	this.text_1 = new cjs.Text("50", "48px 'Times New Roman'");
	this.text_1.lineHeight = 55;
	this.text_1.lineWidth = 67;
	this.text_1.parent = this;
	this.text_1.setTransform(1592.65,960.35);

	this.text_2 = new cjs.Text("Merry Christmas!!!", "144px 'Times New Roman'");
	this.text_2.lineHeight = 161;
	this.text_2.lineWidth = 1184;
	this.text_2.parent = this;
	this.text_2.setTransform(475.8,686.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:1592.65,y:960.35,text:"1",font:"48px 'Times New Roman'",color:"#000000",lineHeight:55.15,lineWidth:67}}]}).to({state:[]},1).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text,p:{x:-330.05,y:97.8,text:"",font:"144px '_serif'",color:"#FFFFFF",lineHeight:161.45,lineWidth:100}}]},38).wait(11));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(547.05,959.05,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(50));

	// Animation
	this.instance = new lib.kitten();
	this.instance.parent = this;
	this.instance.setTransform(918.1,731.85,2.3087,2.2555,0,0,0,-1.9,131.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// santa
	this.instance_1 = new lib.CachedTexturedBitmap_1377();
	this.instance_1.parent = this;
	this.instance_1.setTransform(491.6,-633.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(508,-108.9,1569.1999999999998,1593.8000000000002);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#000099",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_1377.png?1576530236845", id:"CachedTexturedBitmap_1377"},
		{src:"images/CachedTexturedBitmap_1382.png?1576530236845", id:"CachedTexturedBitmap_1382"},
		{src:"images/CachedTexturedBitmap_1383.png?1576530236845", id:"CachedTexturedBitmap_1383"},
		{src:"images/HolidayCard2019_JBarreto_atlas_.png?1576530236808", id:"HolidayCard2019_JBarreto_atlas_"},
		{src:"images/HolidayCard2019_JBarreto_atlas_2.png?1576530236808", id:"HolidayCard2019_JBarreto_atlas_2"}
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