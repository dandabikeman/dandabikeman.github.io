(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_CRodas_atlas_", frames: [[1870,1301,132,164],[1524,1301,344,165],[1524,1468,400,111],[0,0,1978,1299],[508,1301,506,206],[1016,1301,506,206],[0,1301,506,206]]}
];


// symbols:



(lib.CachedTexturedBitmap_699 = function() {
	this.initialize(ss["HolidayCard2019_CRodas_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_700 = function() {
	this.initialize(ss["HolidayCard2019_CRodas_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_701 = function() {
	this.initialize(ss["HolidayCard2019_CRodas_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_702 = function() {
	this.initialize(ss["HolidayCard2019_CRodas_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_703 = function() {
	this.initialize(ss["HolidayCard2019_CRodas_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_704 = function() {
	this.initialize(ss["HolidayCard2019_CRodas_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_705 = function() {
	this.initialize(ss["HolidayCard2019_CRodas_atlas_"]);
	this.gotoAndStop(6);
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
	this.instance = new lib.CachedTexturedBitmap_703();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_704();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_705();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


// stage content:
(lib.HolidayCard2019CRodas = function(mode,startPosition,loop) {
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
	this.text = new cjs.Text("1", "48px 'Times New Roman'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(1592.65,960.35);

	this.text_1 = new cjs.Text("Merry Christmas !", "italic 144px 'Brush Script MT'");
	this.text_1.lineHeight = 179;
	this.text_1.lineWidth = 1004;
	this.text_1.parent = this;
	this.text_1.setTransform(338.05,129.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:1592.65,y:960.35,text:"1",font:"48px 'Times New Roman'",color:"#000000",lineHeight:55.15,lineWidth:67}}]}).to({state:[]},1).to({state:[{t:this.text_1},{t:this.text,p:{x:2000.55,y:400.2,text:"",font:"144px 'BrushScriptMT'",color:"#CC0033",lineHeight:178.6,lineWidth:100}}]},38).wait(11));

	// Layer_3
	this.instance = new lib.CachedTexturedBitmap_699();
	this.instance.parent = this;
	this.instance.setTransform(1342.9,764.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Layer_2
	this.instance_1 = new lib.CachedTexturedBitmap_700();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1285.1,715.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// Layer_1
	this.instance_2 = new lib.CachedTexturedBitmap_701();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1271.8,855.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// Animation
	this.instance_3 = new lib.CachedTexturedBitmap_702();
	this.instance_3.parent = this;
	this.instance_3.setTransform(483,331.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(225,925,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(938.5,652.1,1164.1,377.30000000000007);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#FFFF99",
	opacity: 1.00,
	manifest: [
		{src:"images/HolidayCard2019_CRodas_atlas_.png?1576771168881", id:"HolidayCard2019_CRodas_atlas_"}
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