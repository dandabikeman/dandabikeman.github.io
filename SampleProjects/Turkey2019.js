(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Turkey2019_atlas_", frames: [[0,0,1454,1373]]},
		{name:"Turkey2019_atlas_2", frames: [[356,1545,99,72],[0,899,576,216],[0,681,576,216],[0,1117,576,216],[457,1545,62,68],[356,1335,191,208],[0,0,728,679],[521,1545,11,5],[0,1335,354,288]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.CachedTexturedBitmap_54 = function() {
	this.initialize(ss["Turkey2019_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_55 = function() {
	this.initialize(ss["Turkey2019_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_56 = function() {
	this.initialize(ss["Turkey2019_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_57 = function() {
	this.initialize(ss["Turkey2019_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_58 = function() {
	this.initialize(ss["Turkey2019_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_59 = function() {
	this.initialize(ss["Turkey2019_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_60 = function() {
	this.initialize(ss["Turkey2019_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_61 = function() {
	this.initialize(ss["Turkey2019_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_62 = function() {
	this.initialize(ss["Turkey2019_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_63 = function() {
	this.initialize(ss["Turkey2019_atlas_"]);
	this.gotoAndStop(0);
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


(lib.Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.Action = new cjs.Text("Action", "normal 400 48px 'Bevan'");
	this.Action.name = "Action";
	this.Action.textAlign = "center";
	this.Action.lineHeight = 85;
	this.Action.lineWidth = 217;
	this.Action.parent = this;
	this.Action.setTransform(15.05,-41.55);
	if(!lib.properties.webfonts['Bevan']) {
		lib.webFontTxtInst['Bevan'] = lib.webFontTxtInst['Bevan'] || [];
		lib.webFontTxtInst['Bevan'].push(this.Action);
	}

	this.timeline.addTween(cjs.Tween.get(this.Action).wait(4));

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_55();
	this.instance.parent = this;
	this.instance.setTransform(-127.3,-56.65,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-127.75,-56.65,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_57();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-127.75,-56.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.7,-56.6,288.4,108);


(lib.BeakLower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_54();
	this.instance.parent = this;
	this.instance.setTransform(-22.1,-0.3,0.2288,0.2288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BeakLower, new cjs.Rectangle(-22.1,-0.3,22.700000000000003,16.5), null);


(lib.Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Eyebrow
	this.instance = new lib.CachedTexturedBitmap_58();
	this.instance.parent = this;
	this.instance.setTransform(-13.05,-170.35,0.2288,0.2288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Eye
	this.instance_1 = new lib.CachedTexturedBitmap_59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-44.1,-150.65,0.2288,0.2288);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Head
	this.instance_2 = new lib.CachedTexturedBitmap_60();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-105,-211.25,0.2288,0.2288);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Beak
	this.lowerBeak = new lib.BeakLower();
	this.lowerBeak.name = "lowerBeak";
	this.lowerBeak.parent = this;
	this.lowerBeak.setTransform(-75.2,-101.5);

	this.instance_3 = new lib.CachedTexturedBitmap_61();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-97.3,-102.2,0.2288,0.2288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.lowerBeak}]}).wait(1));

	// Neck
	this.instance_4 = new lib.CachedTexturedBitmap_62();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-41.75,-75.55,0.2288,0.2288);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-105,-211.2,166.6,201.6), null);


(lib.Turkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Eyebrow
	this.Head = new lib.Head();
	this.Head.name = "Head";
	this.Head.parent = this;
	this.Head.setTransform(-98.95,37.2);

	this.timeline.addTween(cjs.Tween.get(this.Head).wait(1));

	// Body
	this.instance = new lib.CachedTexturedBitmap_63();
	this.instance.parent = this;
	this.instance.setTransform(-148.9,-121,0.2288,0.2288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Turkey, new cjs.Rectangle(-203.9,-174,387.70000000000005,367.2), null);


// stage content:
(lib.Turkey2019 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// on the web @ https://tinyurl.com/dpTurkey2019
		this.Beak_btn.Action.text = "Beak";
		this.Head_btn.Action.text = "Head";
		this.Speak_btn.Action.text = "Speak";
		this.Text_btn.Action.text = "Text";
		var myTimer;
		var self = this;
		
		this.Beak_btn.addEventListener("click", fl_ClickToRotate.bind(this));
		var open = false;
		
		function fl_ClickToRotate() {
			if (open) {
				self.Turkey.Head.lowerBeak.rotation = 0;
				open = false;
			} else {
				self.Turkey.Head.lowerBeak.rotation = -30;
				open = true;
			}
		}
		
		this.Text_btn.addEventListener("click", fl_ClickToShow.bind(this));
		
		var fl_TF = new createjs.Text();
		var fl_TextToDisplay = "Happy Thanksgiving!";
		
		function fl_ClickToShow() {
			fl_TF.x = 100;
			fl_TF.y = 100;
			fl_TF.color = "#ff7700";
			fl_TF.font = "68px Bevan";
			fl_TF.text = fl_TextToDisplay;
			this.addChild(fl_TF);
		}
		
		this.Speak_btn.addEventListener("click", Speak.bind(this));
		
		function Speak() {
			clearInterval(myTimer);
			createjs.Sound.play("TurkeyGobble", "none", 0, 0, 0, 1);
			openCloseBeak();
		}
		
		function openCloseBeak() {
			for (var i = 1; i <= 12; i++) {
				setTimeout(fl_ClickToRotate.bind(this), i * 100);
			}
		}
		
		this.Head_btn.addEventListener("click", moveHead.bind(this));
		
		function moveHead() {
			this.Turkey.Head.rotation = -30;
			setTimeout(moveUpright, 1000);
		}
		
		function moveUpright() {
			self.Turkey.Head.rotation = 0;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Turkey
	this.Turkey = new lib.Turkey();
	this.Turkey.name = "Turkey";
	this.Turkey.parent = this;
	this.Turkey.setTransform(556.2,810.95,2.1852,2.1852);

	this.timeline.addTween(cjs.Tween.get(this.Turkey).wait(1));

	// Navigation
	this.text = new cjs.Text("Pearson Productions 2019", "normal 400 30px 'Open Sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.parent = this;
	this.text.setTransform(534.55,1620.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.Beak_btn = new lib.Button();
	this.Beak_btn.name = "Beak_btn";
	this.Beak_btn.parent = this;
	this.Beak_btn.setTransform(176.45,1404.3);
	new cjs.ButtonHelper(this.Beak_btn, 0, 1, 2, false, new lib.Button(), 3);

	this.Text_btn = new lib.Button();
	this.Text_btn.name = "Text_btn";
	this.Text_btn.parent = this;
	this.Text_btn.setTransform(843.35,1552.35);
	new cjs.ButtonHelper(this.Text_btn, 0, 1, 2, false, new lib.Button(), 3);

	this.Head_btn = new lib.Button();
	this.Head_btn.name = "Head_btn";
	this.Head_btn.parent = this;
	this.Head_btn.setTransform(509.9,1552.35);
	new cjs.ButtonHelper(this.Head_btn, 0, 1, 2, false, new lib.Button(), 3);

	this.Speak_btn = new lib.Button();
	this.Speak_btn.name = "Speak_btn";
	this.Speak_btn.parent = this;
	this.Speak_btn.setTransform(176.45,1552.35);
	new cjs.ButtonHelper(this.Speak_btn, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Speak_btn},{t:this.Head_btn},{t:this.Text_btn},{t:this.Beak_btn},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(573.7,1270.6,430.4,391.20000000000005);
// library properties:
lib.properties = {
	id: '983D12C6936C4EBBA517B2E360FA4238',
	width: 1050,
	height: 1680,
	fps: 30,
	color: "#FFFFCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Turkey2019_atlas_.png?1574969985422", id:"Turkey2019_atlas_"},
		{src:"images/Turkey2019_atlas_2.png?1574969985422", id:"Turkey2019_atlas_2"},
		{src:"sounds/TurkeyGobble.mp3?1574969985438", id:"TurkeyGobble"}
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
an.compositions['983D12C6936C4EBBA517B2E360FA4238'] = {
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