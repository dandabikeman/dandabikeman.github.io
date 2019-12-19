(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_NEneran_atlas_", frames: [[0,0,1644,961],[0,963,1662,921]]},
		{name:"HolidayCard2019_NEneran_atlas_2", frames: [[0,923,1505,726],[0,0,1252,921]]},
		{name:"HolidayCard2019_NEneran_atlas_3", frames: [[0,947,1145,726],[1147,995,594,726],[0,0,995,945],[1147,0,474,993]]},
		{name:"HolidayCard2019_NEneran_atlas_4", frames: [[1340,880,383,409],[0,728,771,546],[0,0,719,599],[773,880,565,620],[0,1276,360,410],[1786,0,52,70],[721,0,593,726],[1316,0,468,878],[362,1502,506,206],[1340,1291,506,206],[1340,1499,506,206]]}
];


// symbols:



(lib.CachedTexturedBitmap_1955 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1957 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1959 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1961 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1963 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1964 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1965 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1966 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1967 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1968 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1970 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1971 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1972 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1973 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1974 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1975 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1976 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1977 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1978 = function() {
	this.initialize(ss["HolidayCard2019_NEneran_atlas_4"]);
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
	this.instance = new lib.CachedTexturedBitmap_1976();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_1977();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_1978();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


// stage content:
(lib.HolidayCard2019NEneran = function(mode,startPosition,loop) {
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
	this.frame_38 = function() {
		playSound("audioxmaswav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38).call(this.frame_38).wait(28));

	// Holiday_Message
	this.text = new cjs.Text(" Merry Christmas!", "144px 'Times New Roman'", "#FF0000");
	this.text.lineHeight = 161;
	this.text.lineWidth = 1081;
	this.text.parent = this;
	this.text.setTransform(324.15,38.95);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(39).to({_off:false},0).wait(27));

	// decos
	this.instance = new lib.CachedTexturedBitmap_1964();
	this.instance.parent = this;
	this.instance.setTransform(1745.95,517.15,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_1955();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1797.35,514.9,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_1957();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1809.4,452.95,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_1959();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1809.4,402.85,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_1961();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1756.35,370.85,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_1963();
	this.instance_5.parent = this;
	this.instance_5.setTransform(977.7,554.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:1797.35,y:514.9}},{t:this.instance,p:{x:1745.95,y:517.15}}]}).to({state:[{t:this.instance_1,p:{x:1809.4,y:452.95}},{t:this.instance,p:{x:1758,y:455.2}}]},9).to({state:[{t:this.instance_2},{t:this.instance,p:{x:2034.4,y:455.15}}]},10).to({state:[{t:this.instance_3},{t:this.instance,p:{x:1947.55,y:372.7}}]},10).to({state:[{t:this.instance_4},{t:this.instance,p:{x:1827.9,y:358.3}}]},10).to({state:[{t:this.instance_5},{t:this.instance,p:{x:928.3,y:554.95}}]},10).wait(17));

	// head
	this.instance_6 = new lib.CachedTexturedBitmap_1965();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1720.55,380.4,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_1966();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1342.4,321.65,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_1967();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1162.45,318.65,0.5,0.5);

	this.instance_9 = new lib.CachedTexturedBitmap_1968();
	this.instance_9.parent = this;
	this.instance_9.setTransform(900.95,418.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},10).wait(37));

	// ani
	this.instance_10 = new lib.CachedTexturedBitmap_1970();
	this.instance_10.parent = this;
	this.instance_10.setTransform(108.2,265.35,0.5,0.5);

	this.instance_11 = new lib.CachedTexturedBitmap_1971();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-222.45,245.65,0.5,0.5);

	this.instance_12 = new lib.CachedTexturedBitmap_1972();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-231.55,265.3,0.5,0.5);

	this.instance_13 = new lib.CachedTexturedBitmap_1973();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-26.85,265.3,0.5,0.5);

	this.instance_14 = new lib.CachedTexturedBitmap_1974();
	this.instance_14.parent = this;
	this.instance_14.setTransform(101.95,253.6,0.5,0.5);

	this.instance_15 = new lib.CachedTexturedBitmap_1975();
	this.instance_15.parent = this;
	this.instance_15.setTransform(540.5,324.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10,p:{x:108.2,y:265.35}}]},9).to({state:[{t:this.instance_10,p:{x:365.3,y:287.15}}]},10).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},7).to({state:[{t:this.instance_13}]},6).to({state:[{t:this.instance_14}]},8).to({state:[{t:this.instance_15}]},6).wait(16));

	// audio
	this.text_1 = new cjs.Text("Created in Computer Arts by\n N Eneran\nDecember 2019", "25px 'Rockwell'", "#FF0000");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 31;
	this.text_1.lineWidth = 374;
	this.text_1.parent = this;
	this.text_1.setTransform(1457.05,928.9);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(38).to({x:1474.1,y:924},0).wait(28));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(225,925,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(608.5,562,1586.4,466.5);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#CCFFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/HolidayCard2019_NEneran_atlas_.png?1576717303925", id:"HolidayCard2019_NEneran_atlas_"},
		{src:"images/HolidayCard2019_NEneran_atlas_2.png?1576717303925", id:"HolidayCard2019_NEneran_atlas_2"},
		{src:"images/HolidayCard2019_NEneran_atlas_3.png?1576717303926", id:"HolidayCard2019_NEneran_atlas_3"},
		{src:"images/HolidayCard2019_NEneran_atlas_4.png?1576717303926", id:"HolidayCard2019_NEneran_atlas_4"},
		{src:"sounds/audioxmaswav.mp3?1576717303940", id:"audioxmaswav"}
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