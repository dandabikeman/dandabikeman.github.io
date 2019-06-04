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


(lib.bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.988)").ss(1,1,1).p("AGcAAQAACrh5B4Qh4B5irAAQipAAh5h5Qh5h4AAirQAAipB5h5QB5h5CpAAQCrAAB4B5QB5B5AACpg");
	this.shape.setTransform(41.2,41.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("AkiEjQh5h4AAirQAAipB5h5QB5h5CpAAQCrAAB4B5QB4B5AACpQAACrh4B4Qh4B4irAAQipAAh5h4g");
	this.shape_1.setTransform(41.2,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,84.3,84.3);


(lib.blueeyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.988)").ss(1,1,1).p("AHggPQAAAqg9AfQg9AehWAAQhWAAg9geQg9gfAAgqQAAgrA9gfQA9geBWAAQBWAAA9AeQA9AfAAArgAEkgvQAAAYgRASQgSARgYAAQgZAAgRgRQgSgSAAgYQAAgZASgRQARgSAZAAQAYAAASASQARARAAAZgAjogYQAAAYgRAQQgRASgYAAQgYAAgSgSQgRgQAAgYQAAgYARgSQASgRAYAAQAYAAARARQARASAAAYgAhfAQQAAArg4AfQg4AehQAAQhPAAg5geQg4gfAAgrQAAgqA4gfQA5geBPAAQBQAAA4AeQA4AfAAAqg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AkvA1QgRgRAAgYQAAgXARgSQARgQAZgBQAXABARAQQASASAAAXQAAAYgSARQgRARgXAAQgZAAgRgRgADbAfQgRgSAAgXQAAgZARgRQASgRAZAAQAYAAASARQARARAAAZQAAAXgRASQgSASgYAAQgZAAgSgSg");
	this.shape_1.setTransform(-2.8,-3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033CC").s().p("AmnBZQg4geAAgrQAAgqA4gfQA5geBPAAQBQAAA4AeQA4AfAAAqQAAArg4AeQg4AfhQAAQhPAAg5gfgAlMhCQgRASAAAYQAAAYARAQQASARAYAAQAYAAARgRQARgQAAgYQAAgYgRgSQgRgQgYgBQgYABgSAQgAB9A6Qg9gfAAgqQAAgrA9geQA9gfBWAAQBWAAA9AfQA9AeAAArQAAAqg9AfQg9AehWAAQhWAAg9gegAC/hZQgSARAAAZQAAAYASASQARARAZAAQAYAAASgRQARgSAAgYQAAgZgRgRQgSgRgYAAQgZAAgRARg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.blueeyes, new cjs.Rectangle(-48.9,-13,98,26), null);


// stage content:
(lib.MPHFinalCLevario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.Face1_btn.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eyes1.x = 100;
			this.eyes1.y = 100;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// botton
	this.Face1_btn = new lib.bottom1();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.parent = this;
	this.Face1_btn.setTransform(101.9,518.3,1,1,0,0,0,41.1,41.1);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Face1_btn).wait(1));

	// Body Parts
	this.eyes1 = new lib.blueeyes();
	this.eyes1.name = "eyes1";
	this.eyes1.parent = this;
	this.eyes1.setTransform(567.5,90.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.988)").ss(1,1,1).p("EA2ggVsQAADBiKCJQiICJjBAAQjBAAiJiJQiIiJAAjBQAAjBCIiJQCJiIDBAAQDBAACICIQCKCJAADBgAotB9QAALMmsH7QmuH7pfAAQpfAAmtn7Qmtn7AArMQAArMGtn7QGtn6JfAAQJfAAGuH6QGsH7AALMg");
	this.shape.setTransform(386.8,256.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlJFJQiIiIAAjBQAAjACIiJQCJiJDAABQDBgBCICJQCJCJAADAQAADBiJCIQiICJjBABQjAgBiJiJg");
	this.shape_1.setTransform(688.9,117.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663333").s().p("AwLTHQmtn7AArMQAArLGtn8QGtn6JeAAQJfAAGtH6QGtH8AALLQAALMmtH7QmtH7pfAAQpeAAmtn7g");
	this.shape_2.setTransform(184.5,269);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.eyes1}]}).wait(1));

	// Frame
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("Eg53gr7MBzvAAAMAAABX3MhzvAAAg");
	this.shape_3.setTransform(379,289);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0FFFF").s().p("Eg53Ar8MAAAhX3MBzvAAAMAAABX3g");
	this.shape_4.setTransform(379,289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(385.6,294.3,742.9,564.5);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 756,
	height: 575,
	fps: 24,
	color: "#999999",
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
an.compositions['EA2F94B9C7C4D14D9FC9A7C1DE351D47'] = {
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