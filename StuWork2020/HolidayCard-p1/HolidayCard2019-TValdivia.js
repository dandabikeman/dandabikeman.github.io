(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_TValdivia_atlas_", frames: [[0,0,1885,1074]]},
		{name:"HolidayCard2019_TValdivia_atlas_2", frames: [[0,0,1885,1074]]},
		{name:"HolidayCard2019_TValdivia_atlas_3", frames: [[892,1076,506,206],[892,1284,506,206],[892,1492,506,206],[0,0,1885,1074],[1400,1126,218,48],[1400,1076,218,48],[1400,1176,218,48],[1400,1226,27,27],[0,1076,444,834],[446,1076,444,834]]}
];


// symbols:



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["HolidayCard2019_TValdivia_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["HolidayCard2019_TValdivia_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["HolidayCard2019_TValdivia_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_18 = function() {
	this.initialize(ss["HolidayCard2019_TValdivia_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_19 = function() {
	this.initialize(ss["HolidayCard2019_TValdivia_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_20 = function() {
	this.initialize(ss["HolidayCard2019_TValdivia_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_21 = function() {
	this.initialize(ss["HolidayCard2019_TValdivia_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_22 = function() {
	this.initialize(ss["HolidayCard2019_TValdivia_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_23 = function() {
	this.initialize(ss["HolidayCard2019_TValdivia_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_24 = function() {
	this.initialize(ss["HolidayCard2019_TValdivia_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_26 = function() {
	this.initialize(ss["HolidayCard2019_TValdivia_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_27 = function() {
	this.initialize(ss["HolidayCard2019_TValdivia_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.TREE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accesories_
	this.instance = new lib.CachedTexturedBitmap_19();
	this.instance.parent = this;
	this.instance.setTransform(-326,-271,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-432.35,-214.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-326,-271,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-432.35,-214.5,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_23();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-326,-271,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-432.35,-214.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},3).to({state:[{t:this.instance_5},{t:this.instance_4}]},2).wait(5));

	// body
	this.instance_6 = new lib.CachedTexturedBitmap_24();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-38,88.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// construction_lines_
	this.instance_7 = new lib.CachedTexturedBitmap_26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-134.5,-122.45,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_27();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-134.5,-122.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-432.3,-271,942.5,593.5);


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
	this.instance = new lib.CachedTexturedBitmap_15();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


// stage content:
(lib.HolidayCard2019TValdivia = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(38).to({_off:false,x:338.05,y:129.05,text:"Merry Christmas  ",font:"italic 144px 'Monotype Corsiva'",color:"#CC0000",lineHeight:159.35,lineWidth:1004},0).wait(11));

	// Animation
	this.instance = new lib.TREE();
	this.instance.parent = this;
	this.instance.setTransform(924.85,726.6,1,1,0,0,0,39,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(225,925,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(938.5,652.1,723.2,377.30000000000007);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#CCFFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/HolidayCard2019_TValdivia_atlas_.png?1576615211044", id:"HolidayCard2019_TValdivia_atlas_"},
		{src:"images/HolidayCard2019_TValdivia_atlas_2.png?1576615211044", id:"HolidayCard2019_TValdivia_atlas_2"},
		{src:"images/HolidayCard2019_TValdivia_atlas_3.png?1576615211044", id:"HolidayCard2019_TValdivia_atlas_3"}
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