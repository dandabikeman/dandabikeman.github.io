(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_URodriguez_atlas_", frames: [[0,0,1390,1758]]},
		{name:"HolidayCard2019_URodriguez_atlas_2", frames: [[0,0,1381,1749]]},
		{name:"HolidayCard2019_URodriguez_atlas_3", frames: [[0,0,1381,1749]]},
		{name:"HolidayCard2019_URodriguez_atlas_4", frames: [[0,0,1381,1749]]},
		{name:"HolidayCard2019_URodriguez_atlas_5", frames: [[0,0,1381,1749]]},
		{name:"HolidayCard2019_URodriguez_atlas_6", frames: [[0,0,1381,1749]]},
		{name:"HolidayCard2019_URodriguez_atlas_7", frames: [[0,0,1381,1749]]},
		{name:"HolidayCard2019_URodriguez_atlas_8", frames: [[0,0,1381,1749]]},
		{name:"HolidayCard2019_URodriguez_atlas_9", frames: [[0,0,1381,1749]]},
		{name:"HolidayCard2019_URodriguez_atlas_10", frames: [[0,0,1381,1749],[0,1751,506,206],[508,1751,506,206],[1016,1751,506,206]]}
];


// symbols:



(lib.CachedTexturedBitmap_58 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_59 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_61 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_62 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_63 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_64 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_65 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_66 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_67 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_68 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_69 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_70 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_71 = function() {
	this.initialize(ss["HolidayCard2019_URodriguez_atlas_10"]);
	this.gotoAndStop(3);
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
	this.instance = new lib.CachedTexturedBitmap_69();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_70();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_71();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


// stage content:
(lib.HolidayCard2019URodriguez = function(mode,startPosition,loop) {
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
		playSound("merryxmasvoicewav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(15));

	// Holiday_Message
	this.text = new cjs.Text("1", "48px 'Times New Roman'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(1592.65,960.35);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(38).to({_off:false,x:446.35,y:17.2,text:"Merry Xmas!",font:"144px 'Times New Roman'",color:"#FF0000",lineHeight:161.45,lineWidth:784},0).wait(15));

	// Animation
	this.instance = new lib.CachedTexturedBitmap_58();
	this.instance.parent = this;
	this.instance.setTransform(437.25,178.15,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(437.25,178.15,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_61();
	this.instance_2.parent = this;
	this.instance_2.setTransform(437.25,178.15,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_62();
	this.instance_3.parent = this;
	this.instance_3.setTransform(437.25,178.15,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_63();
	this.instance_4.parent = this;
	this.instance_4.setTransform(437.25,178.15,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_64();
	this.instance_5.parent = this;
	this.instance_5.setTransform(437.25,178.15,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_65();
	this.instance_6.parent = this;
	this.instance_6.setTransform(437.25,178.15,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_66();
	this.instance_7.parent = this;
	this.instance_7.setTransform(437.25,178.15,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_67();
	this.instance_8.parent = this;
	this.instance_8.setTransform(437.25,178.15,0.5,0.5);

	this.instance_9 = new lib.CachedTexturedBitmap_68();
	this.instance_9.parent = this;
	this.instance_9.setTransform(434.9,175.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},5).wait(5));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(225,925,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(938.5,540.2,723.2,514.5999999999999);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#0099FF",
	opacity: 1.00,
	manifest: [
		{src:"images/HolidayCard2019_URodriguez_atlas_.png?1576631974174", id:"HolidayCard2019_URodriguez_atlas_"},
		{src:"images/HolidayCard2019_URodriguez_atlas_2.png?1576631974174", id:"HolidayCard2019_URodriguez_atlas_2"},
		{src:"images/HolidayCard2019_URodriguez_atlas_3.png?1576631974174", id:"HolidayCard2019_URodriguez_atlas_3"},
		{src:"images/HolidayCard2019_URodriguez_atlas_4.png?1576631974174", id:"HolidayCard2019_URodriguez_atlas_4"},
		{src:"images/HolidayCard2019_URodriguez_atlas_5.png?1576631974174", id:"HolidayCard2019_URodriguez_atlas_5"},
		{src:"images/HolidayCard2019_URodriguez_atlas_6.png?1576631974174", id:"HolidayCard2019_URodriguez_atlas_6"},
		{src:"images/HolidayCard2019_URodriguez_atlas_7.png?1576631974174", id:"HolidayCard2019_URodriguez_atlas_7"},
		{src:"images/HolidayCard2019_URodriguez_atlas_8.png?1576631974174", id:"HolidayCard2019_URodriguez_atlas_8"},
		{src:"images/HolidayCard2019_URodriguez_atlas_9.png?1576631974174", id:"HolidayCard2019_URodriguez_atlas_9"},
		{src:"images/HolidayCard2019_URodriguez_atlas_10.png?1576631974174", id:"HolidayCard2019_URodriguez_atlas_10"},
		{src:"sounds/merryxmasvoicewav.mp3?1576631974181", id:"merryxmasvoicewav"}
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