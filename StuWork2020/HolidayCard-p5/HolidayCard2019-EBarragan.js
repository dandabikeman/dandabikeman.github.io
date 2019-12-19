(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_EBarragan_atlas_", frames: [[657,1388,225,538],[430,872,225,547],[1338,1388,225,531],[884,1388,225,535],[430,1421,225,527],[1111,1388,225,535],[1570,667,428,665],[0,872,428,665],[1570,0,428,665],[1570,1334,422,382],[785,0,783,692],[785,694,783,692],[0,0,783,870]]},
		{name:"HolidayCard2019_EBarragan_atlas_2", frames: [[0,0,225,515],[0,517,174,35],[0,554,174,35],[0,591,174,35],[227,208,506,206],[227,0,506,206],[227,416,506,206]]}
];


// symbols:



(lib.CachedTexturedBitmap_2811 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2812 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2813 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2814 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2815 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2816 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2817 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2818 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2819 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2820 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2821 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2822 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2823 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2828 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2829 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2830 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2831 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2832 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2833 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2834 = function() {
	this.initialize(ss["HolidayCard2019_EBarragan_atlas_2"]);
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
	this.instance = new lib.CachedTexturedBitmap_2832();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_2833();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_2834();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


// stage content:
(lib.HolidayCard2019EBarragan = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(38).to({_off:false,x:338.05,y:129.05,text:"Holiday Message",font:"144px 'Times New Roman'",lineHeight:161.45,lineWidth:1004},0).to({_off:true},8).wait(3));

	// Animation
	this.instance = new lib.CachedTexturedBitmap_2811();
	this.instance.parent = this;
	this.instance.setTransform(971.1,621.7,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_2812();
	this.instance_1.parent = this;
	this.instance_1.setTransform(918.35,599.25,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_2813();
	this.instance_2.parent = this;
	this.instance_2.setTransform(916.3,613,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_2814();
	this.instance_3.parent = this;
	this.instance_3.setTransform(351.35,158,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_2815();
	this.instance_4.parent = this;
	this.instance_4.setTransform(351.35,148.1,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_2816();
	this.instance_5.parent = this;
	this.instance_5.setTransform(352.8,161.2,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_2817();
	this.instance_6.parent = this;
	this.instance_6.setTransform(351.35,148.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},29).to({state:[]},2).wait(3));

	// Body
	this.instance_7 = new lib.CachedTexturedBitmap_2819();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1282.8,534.85,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_2818();
	this.instance_8.parent = this;
	this.instance_8.setTransform(976.35,595.65,0.5,0.5);

	this.instance_9 = new lib.CachedTexturedBitmap_2821();
	this.instance_9.parent = this;
	this.instance_9.setTransform(663.8,64.45,0.5,0.5);

	this.instance_10 = new lib.CachedTexturedBitmap_2820();
	this.instance_10.parent = this;
	this.instance_10.setTransform(924.35,582.75,0.5,0.5);

	this.instance_11 = new lib.CachedTexturedBitmap_2823();
	this.instance_11.parent = this;
	this.instance_11.setTransform(663.05,59.75,0.5,0.5);

	this.instance_12 = new lib.CachedTexturedBitmap_2822();
	this.instance_12.parent = this;
	this.instance_12.setTransform(356.6,120.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_10},{t:this.instance_9}]},8).to({state:[{t:this.instance_12},{t:this.instance_11}]},36).to({state:[]},2).wait(4));

	// Tail_Feathers
	this.instance_13 = new lib.CachedTexturedBitmap_2828();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1046.55,633.05,0.5,0.5);

	this.instance_14 = new lib.CachedTexturedBitmap_2829();
	this.instance_14.parent = this;
	this.instance_14.setTransform(272.05,50.4,0.5,0.5);

	this.instance_15 = new lib.CachedTexturedBitmap_2830();
	this.instance_15.parent = this;
	this.instance_15.setTransform(270.45,18.65,0.5,0.5);

	this.instance_16 = new lib.CachedTexturedBitmap_2831();
	this.instance_16.parent = this;
	this.instance_16.setTransform(270.45,18.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_13}]},18).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},6).to({state:[{t:this.instance_15}]},8).to({state:[{t:this.instance_16}]},2).to({state:[]},7).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(18).to({x:440.5,y:192.7},0).wait(2).to({x:450.75,y:173.6},0).wait(2).to({x:395.1,y:202.6},0).wait(2).to({x:450.75,y:173.6},0).to({_off:true},6).wait(20));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(225,925,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(938.5,543.7,723.2,485.70000000000005);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#CCFFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/HolidayCard2019_EBarragan_atlas_.png?1576635413417", id:"HolidayCard2019_EBarragan_atlas_"},
		{src:"images/HolidayCard2019_EBarragan_atlas_2.png?1576635413417", id:"HolidayCard2019_EBarragan_atlas_2"}
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