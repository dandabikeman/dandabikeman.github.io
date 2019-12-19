(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_NVelez_atlas_", frames: [[671,0,669,679],[0,0,669,679],[1563,1115,330,262],[0,1484,835,439],[0,681,903,432],[905,681,903,432],[0,1115,1025,367],[1027,1115,534,702],[1342,416,506,206],[1342,0,506,206],[1342,208,506,206]]}
];


// symbols:



(lib.CachedTexturedBitmap_3996 = function() {
	this.initialize(ss["HolidayCard2019_NVelez_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3997 = function() {
	this.initialize(ss["HolidayCard2019_NVelez_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3998 = function() {
	this.initialize(ss["HolidayCard2019_NVelez_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3999 = function() {
	this.initialize(ss["HolidayCard2019_NVelez_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4001 = function() {
	this.initialize(ss["HolidayCard2019_NVelez_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4002 = function() {
	this.initialize(ss["HolidayCard2019_NVelez_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4003 = function() {
	this.initialize(ss["HolidayCard2019_NVelez_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4004 = function() {
	this.initialize(ss["HolidayCard2019_NVelez_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4005 = function() {
	this.initialize(ss["HolidayCard2019_NVelez_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4006 = function() {
	this.initialize(ss["HolidayCard2019_NVelez_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4007 = function() {
	this.initialize(ss["HolidayCard2019_NVelez_atlas_"]);
	this.gotoAndStop(10);
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
	this.instance = new lib.CachedTexturedBitmap_4005();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_4006();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_4007();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


// stage content:
(lib.HolidayCard2019NVelez = function(mode,startPosition,loop) {
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
		this.stop()
		playSound("merrychrithmathwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(11));

	// Holiday_Message
	this.text = new cjs.Text("1", "48px 'Times New Roman'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(1592.65,960.35);

	this.text_1 = new cjs.Text("Created in computer art by: Nvelez", "italic 90px 'Monotype Corsiva'", "#339900");
	this.text_1.lineHeight = 100;
	this.text_1.lineWidth = 951;
	this.text_1.parent = this;
	this.text_1.setTransform(816.15,842.55);

	this.text_2 = new cjs.Text("Merry Chrithmath :)", "144px 'Freestyle Script'");
	this.text_2.lineHeight = 172;
	this.text_2.lineWidth = 1238;
	this.text_2.parent = this;
	this.text_2.setTransform(438.3,618.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:1592.65,y:960.35,text:"1",font:"48px 'Times New Roman'",color:"#000000",lineHeight:55.15,lineWidth:67}}]}).to({state:[]},1).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text,p:{x:1801.15,y:261.95,text:"",font:"144px 'FreestyleScript-Regular'",color:"#006600",lineHeight:171.6,lineWidth:100}}]},38).wait(11));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(225,925,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(50));

	// Animation
	this.instance = new lib.CachedTexturedBitmap_3996();
	this.instance.parent = this;
	this.instance.setTransform(217.25,147.2,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_3997();
	this.instance_1.parent = this;
	this.instance_1.setTransform(217.25,147.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},44).wait(6));

	// star
	this.instance_2 = new lib.CachedTexturedBitmap_3998();
	this.instance_2.parent = this;
	this.instance_2.setTransform(288.9,10.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// first_tree_thing
	this.instance_3 = new lib.CachedTexturedBitmap_3999();
	this.instance_3.parent = this;
	this.instance_3.setTransform(180.75,68.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// _nd_tree_thing_
	this.instance_4 = new lib.CachedTexturedBitmap_4002();
	this.instance_4.parent = this;
	this.instance_4.setTransform(171.95,190.85,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_4001();
	this.instance_5.parent = this;
	this.instance_5.setTransform(171.95,190.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},43).to({state:[{t:this.instance_4}]},1).wait(6));

	// _rd_tree_thing
	this.instance_6 = new lib.CachedTexturedBitmap_4003();
	this.instance_6.parent = this;
	this.instance_6.setTransform(143.2,335.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// trunk
	this.instance_7 = new lib.CachedTexturedBitmap_4004();
	this.instance_7.parent = this;
	this.instance_7.setTransform(185.9,203.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(938.5,535.3,964.7,553.2);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#CC0000",
	opacity: 1.00,
	manifest: [
		{src:"images/HolidayCard2019_NVelez_atlas_.png?1576534188213", id:"HolidayCard2019_NVelez_atlas_"},
		{src:"sounds/merrychrithmathwav.mp3?1576534188220", id:"merrychrithmathwav"}
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