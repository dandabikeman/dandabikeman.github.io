(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_IGarcia_atlas_", frames: [[374,1401,372,420],[1720,422,277,323],[1720,747,277,323],[1720,1236,242,62],[748,1401,393,234],[0,0,1562,552],[860,554,858,845],[0,554,858,845],[1720,1072,235,162],[1564,0,372,420],[0,1401,372,420]]}
];


// symbols:



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["HolidayCard2019_IGarcia_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["HolidayCard2019_IGarcia_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["HolidayCard2019_IGarcia_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["HolidayCard2019_IGarcia_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["HolidayCard2019_IGarcia_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_52 = function() {
	this.initialize(ss["HolidayCard2019_IGarcia_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_54 = function() {
	this.initialize(img.CachedTexturedBitmap_54);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2242,1215);


(lib.CachedTexturedBitmap_55 = function() {
	this.initialize(ss["HolidayCard2019_IGarcia_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_56 = function() {
	this.initialize(ss["HolidayCard2019_IGarcia_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["HolidayCard2019_IGarcia_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["HolidayCard2019_IGarcia_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["HolidayCard2019_IGarcia_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.HolidayCard2019IGarcia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(394.6,274.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:true},1).wait(2));

	// eyesbrows
	this.instance_1 = new lib.CachedTexturedBitmap_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(391.2,257.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({x:390.9,y:253.35},0).wait(45).to({x:391.2,y:257.1},0).to({_off:true},1).wait(2));

	// gifts_
	this.instance_2 = new lib.CachedTexturedBitmap_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(622.3,307.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:true},1).wait(2));

	// tree
	this.instance_3 = new lib.CachedTexturedBitmap_8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(538.6,135.5,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(548.5,136.55,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(538.6,135.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_5}]},41).wait(3));

	// camera
	this.instance_6 = new lib.CachedTexturedBitmap_11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(89.3,263.45,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_14();
	this.instance_7.parent = this;
	this.instance_7.setTransform(89.3,263.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7,p:{x:89.3}}]},4).to({state:[{t:this.instance_7,p:{x:90.2}}]},3).to({state:[{t:this.instance_7,p:{x:89.3}}]},42).to({state:[]},1).wait(2));

	// snow
	this.instance_8 = new lib.CachedTexturedBitmap_52();
	this.instance_8.parent = this;
	this.instance_8.setTransform(7.05,149.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({x:9.55},0).wait(1).to({x:27.55},0).wait(34).to({_off:true},2).wait(1).to({_off:false,y:165.5},0).wait(1).to({x:7.05,y:149.55},0).to({_off:true},1).wait(1));

	// sky
	this.instance_9 = new lib.CachedTexturedBitmap_54();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-4.35,0.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({_off:true},1).wait(2));

	// body
	this.instance_10 = new lib.CachedTexturedBitmap_55();
	this.instance_10.parent = this;
	this.instance_10.setTransform(371.35,1.55,0.5,0.5);

	this.instance_11 = new lib.CachedTexturedBitmap_56();
	this.instance_11.parent = this;
	this.instance_11.setTransform(371.35,1.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},49).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(395.7,300.7,721,307.50000000000006);
// library properties:
lib.properties = {
	id: '43464152D2E4463DAC69988D89CCFCCA',
	width: 800,
	height: 600,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_54.png?1576547586341", id:"CachedTexturedBitmap_54"},
		{src:"images/HolidayCard2019_IGarcia_atlas_.png?1576547586313", id:"HolidayCard2019_IGarcia_atlas_"}
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
an.compositions['43464152D2E4463DAC69988D89CCFCCA'] = {
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