(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg2hgU9MA2XAp7MA2sgp7g");
	this.shape.setTransform(349,134.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Eg2hgU9MBtDAAAMg2sAp6g");
	this.shape_1.setTransform(349,134.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,700,270.3), null);


(lib.BasicButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBTQgIgFgEgJQgEgJAAgVIAAgrIgSAAIAAgjIASAAIAAgXIAvgYIAAAvIAaAAIAAAjIgaAAIAAArQAAAIABADQADADAFAAQAGAAAJgDIAEAiQgSADgPAAQgRAAgJgEg");
	this.shape.setTransform(74.8,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA+IgXgoIgaAoIg0AAIAthAIgqg7IA4AAIATAiIAXgiIA0AAIgqA7IAuBAg");
	this.shape_1.setTransform(61.5,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAuAEQgLATgPAIQgPAIgcAAQgYAAgOgHgAAYgKQgCgOgGgGQgGgGgKAAQgKAAgHAJQgFAGAAALIAuAAIAAAAg");
	this.shape_2.setTransform(46.2,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAgBWIg/hdIAABdIgyAAIAAirIAyAAIA/BeIAAheIAyAAIAACrg");
	this.shape_3.setTransform(28.2,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Rounded
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape_4.setTransform(50,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_5.setTransform(50,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_7.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.PracticeCardCsilva = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on the current frame
		
		//this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(20));

	// flap 
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(539,290.2,1,1,0,0,0,349,134.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC00").ss(1,1,1).p("ApciHQBNgvhNhLAshiMQCYg+iYicAm3i8QBHhBgkhsAh+h8QAVg4gVg4AgDkRQAZgzgZhQAJFiSQAohTgohnAE1jhQA2gqgahaAGYGVQAsh9gRiAAhAEOQA3hAgZg4AsWGEQB7iEh7jIAosFoQCdh+iditAkogdQA6hdgchnACRA4QAmhygmidAMEBHQAngYgMhsAKECSQA6hfgXicAHVgXQAohrgoiK");
	this.shape.setTransform(88.7,597.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.78,y:260.4},0).wait(1).to({scaleY:0.56,y:230.5},0).wait(1).to({scaleY:0.33,y:200.7},0).wait(1).to({scaleY:0.11,y:170.8},0).wait(1).to({skewX:180,y:141},0).wait(1).to({scaleY:0.33,y:111.1},0).wait(1).to({scaleY:0.56,y:81.3},0).wait(1).to({scaleY:0.78,y:51.4},0).wait(1).to({scaleY:1,y:21.6},0).to({_off:true},1).wait(20));

	// envelope 
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EA2ighRMAAABCjMgrEghigEg2hAhSMAAAhCjMApzAgPEg2hAhSMApzgiUIMlJrILno5Eg2hghRMBtDAAAEA2iAhSMhtDAAA");
	this.shape_1.setTransform(538,367.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660000").s().p("AsuLRMgpzggNMBtDAAAMgrEAg/IroI7g");
	this.shape_2.setTransform(538,289.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Eg2hAhSMApzgiUIMkJrILoo6MArEAhjgALegRMArEghAMAAABCjgEg2hAhSMAAAhCjMApzAgPMgpzAiUg");
	this.shape_3.setTransform(538,367.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},10).wait(20));

	// Button
	this.btn_Next = new lib.BasicButton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.parent = this;
	this.btn_Next.setTransform(879.7,686.9);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Next).wait(30));

	// Background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#424242").ss(1,1,1).p("EBN7gq6QAAGOkZEZQkZEZmNAAQmNAAkZkZQkZkZAAmOQAAmMEZkaQEZkYGNAAQGNAAEZEYQEZEaAAGMgEAYEg63QFXFPEZhrQEZhrCzhCQCzhCDyBsEAXSgtvQAuFQSdk2EAu2gJMQJOAAEHwFAbw1IQjWkKWumkEBQCA6yIgCAAUhP+AADhP+AADIgFAAMAAAgiGIAFAAIFzAAIQ2AAQnDs1AjriQhIARhNAAQhOAAhGgQQi3gBjqA+QjqA9gWnvQgWnwEejaQEdjZGxAuQGwAuCEDYQCEDXgHGjQgGGhjyAHQjyAIjThHEBIagGoQmMAAG315EAJ5g1xQCMBwgTCrQA0j+BugFEAG2g3gQgFAZgNAZQAGgcAMgWQAmhLBggREAGkg48QAZAugHAuEADBgyMQAHAcgNAaQACgdAEgZQAZiGBvgFEAA4g0XQB6BKAPBBEgG/g1NQADAWgKAWQABgYAGgUQAahiB3gdEgJHg3kQB+BSAKBFEgZIgwKQgBAJgCAJEga5gymQB5BJgIBTQAVhSB4g0EgWpg1DQBnAlAABxQAohcBmgFEghPg1/QAQhQCDgbEgjYg3dQB4AvARAvQAHASgIASQgCgTADgREgr3gzaQB0BRAJBZQANiaBfgKEhKJAYyQGsqqg/tsEg5TAYyMCJTAAA");
	this.shape_4.setTransform(511.7,391.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AoaMLQGsqpg/tsQBHAQBNAAQBNAABHgQQgjLiHDMzg");
	this.shape_5.setTransform(91,472.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AtCDiQgWnvEejaQEdjZGwAuQGwAuCEDXQCEDYgHGhQgGGjjyAHQjyAIjThHQhHAQhNAAQhOAAhGgQQi3AAjqA9QgaAHgXAAQi7AAgUm5g");
	this.shape_6.setTransform(89.8,334.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009966").s().p("EhQBgRCIFzAAIQ2AAMCJTAAAIAFAAMAABAh/IgEAAIgBAAMif9AAGg");
	this.shape_7.setTransform(512.2,659.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AqlKmQkZkZAAmNQAAmMEZkZQEZkZGMAAQGNAAEZEZQEZEZAAGMQAAGNkZEZQkZEZmNAAQmMAAkZkZg");
	this.shape_8.setTransform(914.5,117.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AknnyQIcB+GTh+AmSCtQJEjDJVC8AkGjhQGWCaJ3jdAsNHzQO+jKJdB0");
	this.shape_9.setTransform(394.9,431.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},10).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_9}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(700,538,792.7,584);
// library properties:
lib.properties = {
	id: 'CA3D976C3CA4D74788304D55050D1F9F',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#00CCFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['CA3D976C3CA4D74788304D55050D1F9F'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;