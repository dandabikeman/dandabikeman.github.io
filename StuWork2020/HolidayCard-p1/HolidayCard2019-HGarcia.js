(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HolidayCard2019_HGarcia_atlas_", frames: [[0,0,2045,1732]]},
		{name:"HolidayCard2019_HGarcia_atlas_2", frames: [[0,0,2045,1732]]},
		{name:"HolidayCard2019_HGarcia_atlas_3", frames: [[0,0,2045,1732]]},
		{name:"HolidayCard2019_HGarcia_atlas_4", frames: [[508,1695,506,206],[0,1695,506,206],[1016,1695,506,206],[0,0,1986,1693]]}
];


// symbols:



(lib.CachedTexturedBitmap_784 = function() {
	this.initialize(ss["HolidayCard2019_HGarcia_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_785 = function() {
	this.initialize(ss["HolidayCard2019_HGarcia_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_786 = function() {
	this.initialize(ss["HolidayCard2019_HGarcia_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_787 = function() {
	this.initialize(ss["HolidayCard2019_HGarcia_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_788 = function() {
	this.initialize(ss["HolidayCard2019_HGarcia_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_789 = function() {
	this.initialize(ss["HolidayCard2019_HGarcia_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_790 = function() {
	this.initialize(img.CachedTexturedBitmap_790);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2170,1732);


(lib.CachedTexturedBitmap_791 = function() {
	this.initialize(ss["HolidayCard2019_HGarcia_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.HOLIDAY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_787();
	this.instance.parent = this;
	this.instance.setTransform(-392,-292.8,0.3437,0.3437);

	this.instance_1 = new lib.CachedTexturedBitmap_788();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-371,-281.4,0.3437,0.3437);

	this.instance_2 = new lib.CachedTexturedBitmap_789();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-392,-292.8,0.3437,0.3437);

	this.instance_3 = new lib.CachedTexturedBitmap_790();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-392,-292.8,0.3437,0.3437);

	this.instance_4 = new lib.CachedTexturedBitmap_791();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-392,-292.8,0.3437,0.3437);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-392,-292.8,745.9,595.3);


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
	this.instance = new lib.CachedTexturedBitmap_784();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_785();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_786();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,103);


// stage content:
(lib.HolidayCard2019HGarcia = function(mode,startPosition,loop) {
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

	this.text_1 = new cjs.Text("", "144px '_serif'");
	this.text_1.lineHeight = 161;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(180,823.4);

	this.text_2 = new cjs.Text("Happy Holidays", "144px 'Times New Roman'");
	this.text_2.lineHeight = 161;
	this.text_2.lineWidth = 1004;
	this.text_2.parent = this;
	this.text_2.setTransform(378.4,70.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:1592.65,y:960.35,text:"1",font:"48px 'Times New Roman'",lineHeight:55.15,lineWidth:67}}]}).to({state:[]},1).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text,p:{x:2,y:2,text:"H.Garcia\nDecember 2019 ",font:"50px 'Times New Roman'",lineHeight:57.35,lineWidth:274}}]},38).wait(11));

	// Animation
	this.instance = new lib.HOLIDAY();
	this.instance.parent = this;
	this.instance.setTransform(847.3,638.9,1.4547,1.3533,0,0,0,-40.6,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Button
	this.playButton = new lib.ButtonYellow();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(225,925,1,1,0,0,0,125,50);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.ButtonYellow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(840,525,821.7,517);
// library properties:
lib.properties = {
	id: 'CF8A45ABEF2A40D18B1F2342EBAAC3DF',
	width: 1680,
	height: 1050,
	fps: 10,
	color: "#CCFFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_790.png?1576614576312", id:"CachedTexturedBitmap_790"},
		{src:"images/HolidayCard2019_HGarcia_atlas_.png?1576614576296", id:"HolidayCard2019_HGarcia_atlas_"},
		{src:"images/HolidayCard2019_HGarcia_atlas_2.png?1576614576296", id:"HolidayCard2019_HGarcia_atlas_2"},
		{src:"images/HolidayCard2019_HGarcia_atlas_3.png?1576614576296", id:"HolidayCard2019_HGarcia_atlas_3"},
		{src:"images/HolidayCard2019_HGarcia_atlas_4.png?1576614576296", id:"HolidayCard2019_HGarcia_atlas_4"}
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