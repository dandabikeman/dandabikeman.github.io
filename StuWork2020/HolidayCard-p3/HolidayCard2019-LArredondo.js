(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_LArredondo_atlas_", frames: [[0,0,1369,1122]]},
		{name:"HolidayCard2019_LArredondo_atlas_2", frames: [[1784,330,215,181],[1299,703,590,354],[1727,1282,286,180],[0,1275,1086,298],[0,1575,1198,124],[0,999,1297,274],[1727,1059,280,221],[1784,513,209,133],[1170,0,749,328],[1170,330,612,371],[1299,1059,426,347],[0,0,1168,997],[1200,1408,506,206],[0,1701,506,206],[1200,1616,506,206]]}
];


// symbols:



(lib.CachedTexturedBitmap_2008 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2009 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2010 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2011 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2012 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2013 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2014 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2015 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2016 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2017 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2018 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2019 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2020 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2021 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2022 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2023 = function() {
	this.initialize(ss["HolidayCard2019_LArredondo_atlas_2"]);
	this.gotoAndStop(14);
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
	this.instance = new lib.CachedTexturedBitmap_2021();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_2022();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_2023();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


// stage content:
(lib.HolidayCard2019LArredondo = function(mode,startPosition,loop) {
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
		playSound("merrychristmaswav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(11));

	// Holiday_Message
	this.text = new cjs.Text("1", "48px 'Times New Roman'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(1592.65,960.35);

	this.text_1 = new cjs.Text("Created in comp. art by:larredondo", "50px 'Freestyle Script'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 61;
	this.text_1.lineWidth = 790;
	this.text_1.parent = this;
	this.text_1.setTransform(1077.35,973.05);

	this.text_2 = new cjs.Text("Merry Chrithmath!", "144px 'Freestyle Script'");
	this.text_2.lineHeight = 172;
	this.text_2.lineWidth = 1146;
	this.text_2.parent = this;
	this.text_2.setTransform(532.3,785.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:1592.65,y:960.35,text:"1",font:"48px 'Times New Roman'",color:"#000000",textAlign:"",lineHeight:55.15,lineWidth:67}}]}).to({state:[]},1).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text,p:{x:1953.35,y:269.35,text:"",font:"50px '_serif'",color:"#FF0000",textAlign:"center",lineHeight:57.35,lineWidth:100}}]},38).wait(11));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(225,925,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(50));

	// Animation
	this.instance = new lib.CachedTexturedBitmap_2008();
	this.instance.parent = this;
	this.instance.setTransform(321.15,640.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// spheres_3
	this.instance_1 = new lib.CachedTexturedBitmap_2009();
	this.instance_1.parent = this;
	this.instance_1.setTransform(219.45,437.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// eyes
	this.instance_2 = new lib.CachedTexturedBitmap_2010();
	this.instance_2.parent = this;
	this.instance_2.setTransform(294.5,406.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// _eyebrows_
	this.instance_3 = new lib.CachedTexturedBitmap_2011();
	this.instance_3.parent = this;
	this.instance_3.setTransform(348.1,300.3,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_2012();
	this.instance_4.parent = this;
	this.instance_4.setTransform(292.25,386.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},19).wait(31));

	// arms
	this.instance_5 = new lib.CachedTexturedBitmap_2013();
	this.instance_5.parent = this;
	this.instance_5.setTransform(41.2,297.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// spheres
	this.instance_6 = new lib.CachedTexturedBitmap_2014();
	this.instance_6.parent = this;
	this.instance_6.setTransform(294.2,228.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// mouth
	this.instance_7 = new lib.CachedTexturedBitmap_2015();
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.25,544.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// bottom_tree
	this.instance_8 = new lib.CachedTexturedBitmap_2016();
	this.instance_8.parent = this;
	this.instance_8.setTransform(176.85,483.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// middle_tree
	this.instance_9 = new lib.CachedTexturedBitmap_2017();
	this.instance_9.parent = this;
	this.instance_9.setTransform(214,325.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// tree_top_
	this.instance_10 = new lib.CachedTexturedBitmap_2018();
	this.instance_10.parent = this;
	this.instance_10.setTransform(258.1,196.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// star
	this.instance_11 = new lib.CachedTexturedBitmap_2019();
	this.instance_11.parent = this;
	this.instance_11.setTransform(356.15,102.6,0.5,0.5);

	this.instance_12 = new lib.CachedTexturedBitmap_2020();
	this.instance_12.parent = this;
	this.instance_12.setTransform(255.75,40.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},19).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(881.2,565.2,1124.2,568.5);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#99CCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/HolidayCard2019_LArredondo_atlas_.png?1576533480660", id:"HolidayCard2019_LArredondo_atlas_"},
		{src:"images/HolidayCard2019_LArredondo_atlas_2.png?1576533480661", id:"HolidayCard2019_LArredondo_atlas_2"},
		{src:"sounds/merrychristmaswav.mp3?1576533480673", id:"merrychristmaswav"}
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