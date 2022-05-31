(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Streetwing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACSlrIApAcIAghjIlpheIAqBrAAdIMIAFjTIghhqICRo6AAdIRIAAgFIikhNIhTkoIAHg6IBvoCID2A6AhfhfIgeB8IBugggAgBhCIAdh9IhuAhgAgplKIgdB9IBsgggAg3CpIAch9IhsAgg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhjGMIhTkoIAIg6IBuoCID3A6IiRI6IAhBqIgGDTgAhjAZIBQBdIAch8gAhYgVIBtghIhQhcgAgtjRIBQBcIAdh9gAgikAIBsggIhOhdg");
	this.shape_1.setTransform(-3.625,5.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ABsBEIj2g6IgqhpIFpBeIggBhg");
	this.shape_2.setTransform(3.85,-43.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Streetwing, new cjs.Rectangle(-22.9,-53.8,45.9,107.69999999999999), null);


(lib.StreetFT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AE1EDQgFgKgIgLIgng9QAKg0AEgxQABgKAAgJQAHhsgWhcQgXhlhLg+IhUhHIgjAyQBRAZAcAxQAcAygOAmQhPAcgHgcQg8hVhJg2IgdAkIiBgCIhvgCIArA6IhlAAQALAJAKAJQA0AtAfA2QAfA3AKA/QASBugFBzIBGACIgNCCIJdAAIiNgaQAfgxgSgsgAkajWQABACACACQBIBbAgByQAmB8gSB8IAAAFIHQALAjWkOQAIAkglAVIgngBAlFkQIhvgDIA1A9AjhD2QgDBBgKBDIBGAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AioE0IABgGQASh8gmh8QgghyhJhaIgDgEIAoAAQAlgUgJgkICCACIAcglQBJA3A8BVQAHAbBPgbQAOgngcgxQgcgyhRgYIAjgzIBUBIQBLA+AXBlQAWBbgHBsIgBATQgEAxgKA0IAnA9QAIALAFALg");
	this.shape_1.setTransform(1.275,-5.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AjDEoIAOiCIhGgCQAFhzgThtQgJhAgfg3Qgfg1g0guIgVgRIBlAAIADAEQBIBaAgBzQAmB7gSB8IAAAFIHPALQASAsgeAxICMAagAkJEoQALhDADhBIBGACIgOCCg");
	this.shape_2.setTransform(2.65,8.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAqAeIgqg5IBuACQAIAjglAVgAg6AeIg1g8IBvADIAqA5g");
	this.shape_3.setTransform(-32.4956,-24.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StreetFT, new cjs.Rectangle(-44.6,-38.8,89.30000000000001,77.6), null);


(lib.StreetEX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ag2hbIgeAaIgwAAIAACGIAtAAIApAXAg2hbIBjAAIBYC3IizAAAg2hbIAIC3");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AguBcIgogXIgtAAIAAiGIAvAAIAegaIAIC3IgIi3IBjAAIBXC3g");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StreetEX, new cjs.Rectangle(-14.2,-10.1,28.5,20.299999999999997), null);


(lib.Streetbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJBFQgIgEgDgIQgDgIgBgRIAAgjIgOAAIAAgdIAOAAIAAgUIAogUIAAAoIAVAAIAAAdIgVAAIAAAjQAAAHABACQACADAEAAQAFAAAIgCIADAbQgPAEgNAAQgOAAgGgEg");
	this.shape.setTransform(31.35,0.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAQgPQAPgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhPAAQACAJAEAFQAFAHAJAAQAGAAAFgDIAHgHIAnAEQgJAQgNAGQgMAHgYAAQgUAAgLgGgAgOgWQgEAEgBAKIAnAAQgCgMgEgFQgFgFgIAAQgJAAgGAIg");
	this.shape_1.setTransform(20.25,2.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAwQgNgGgHgMQgIgNAAgRQAAgXAPgPQAQgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhPAAQABAJAFAFQAGAHAHAAQAHAAAFgDIAGgHIAoAEQgJAQgNAGQgNAHgXAAQgUAAgLgGgAgOgWQgDAEgCAKIAmAAQgBgMgEgFQgGgFgIAAQgIAAgGAIg");
	this.shape_2.setTransform(6.9,2.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoA1IAAhmIAlAAIAAAQQAFgLAFgEQAGgEAJAAQAIAAALAGIgNAbQgHgCgEAAQgHAAgFAGQgFAKAAAXIAAAjg");
	this.shape_3.setTransform(-3.375,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKBFQgGgEgEgIQgEgIABgRIAAgjIgPAAIAAgdIAPAAIAAgUIAmgUIAAAoIAXAAIAAAdIgXAAIAAAjQAAAHABACQADADAEAAQAFAAAIgCIADAbQgPAEgMAAQgOAAgIgEg");
	this.shape_4.setTransform(-13.15,0.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwA8QgOgOgCgWIAqgCQABAKAEAFQAIAJALAAQAJAAAGgFQAFgEAAgGQAAgFgFgFQgFgEgQgEQgegHgMgKQgMgLAAgQQAAgLAGgKQAGgKANgGQANgFAVAAQAcAAAOAKQAOAKADAWIgqADQgBgJgFgFQgGgFgIAAQgIAAgEAEQgEADAAAFQAAADAEADQACADAMACQAdAGAMAHQAMAGAGAIQAGAKAAAMQAAANgIAMQgHAMgOAGQgOAGgUAAQgkAAgOgOg");
	this.shape_5.setTransform(-24.85,0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AphjUITDAAIAAGpIzDAAg");
	this.shape_6.setTransform(0.025,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AphDVIAAmpITDAAIAAGpg");
	this.shape_7.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-22.3,124.1,44.7);


(lib.stockgtrFT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AF6EFIgzhkQAjjEhEi2IAAAAQgdhPhzhJIgIAAIgjAoIBwBSQAiAZgiA7QgmATgtgTQgphOhSg6QgDAegegDIh3AAIh9AAIh0AAQAYARAVASQAlAhAfAlQAYAdAVAhQBZCggUCwIgOCCIBFAEQCoAMClgWQBJgJBJgQIgBgeAF6EFIh3gHQADAzAcgGIBaABgAlPjtIBtAAQBZBeAjB1QAnB+gXCFIAAACIhDgEAjijtIAxAAQAhgHAFgcAkIkQIAmAjAhWDrQAGBDgPA1QgCAFgBAFAEDD+IlZgT");
	this.shape.setTransform(0,0.0004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AC3E1IlYgTIAAgCQAWiGgmh+Qgjh0hZheIAwgBQAigGAFgdIB3AAQAeAEADgfQBRA7ApBNQAtAUAmgUQAig6gigZIhwhSIAjgoIAIAAQBzBJAdBOIAAABQBEC1gjDFIAzBjg");
	this.shape_1.setTransform(7.575,-5.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#252525").s().p("Ah5ErIADgKQAMgmAAgtQAAgSgCgTIFZATQACAuAWAAIAAAAIAAAAIAGgBIBaABIABAeQhJAQhJAJQhrAPhsAAQg7AAg7gFgAi+EnIAPiCQAUivhaihQgUghgYgdQgfglglghIBtAAQBZBeAjB2QAnB9gXCFIAAACQACATAAASQAAAtgMAmIgDAKgAhsCpIhDgEgAFlDqgAELDpIgGABIAAAAIAAAAQgWAAgCguIB2AHIACAngAhsCpg");
	this.shape_2.setTransform(2.25,6.6004);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAhASIglgjIB8AAQgEAcgiAGIgxABgAhLASQgVgSgYgRIB0AAIAlAjg");
	this.shape_3.setTransform(-26,-25.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stockgtrFT, new cjs.Rectangle(-39,-37.9,78.1,75.9), null);


(lib.Stockbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAQBHIgUgpIgPAOIAAAbIgpAAIAAiOIApAAIAABKIAdgiIAxAAIgmAjIAoBDg");
	this.shape.setTransform(25.025,-1.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgXAzQgLgDgIgHQgIgHgEgJQgFgJAAgQQAAgPAGgKQADgIAHgGQAIgGAHgEQAMgEARAAQAZAAANAJQANAJAGARIgmAFQgBgGgFgEQgFgDgHAAQgJAAgGAHQgGAHAAANQAAANAGAHQAGAGAIAAQAIAAAFgEQAGgEACgIIAmAEQgDAMgHAJQgHAJgMAEQgKAFgSAAQgPAAgLgDg");
	this.shape_1.setTransform(11.1,0.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_2.setTransform(-2.275,0.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgKBFQgGgEgEgIQgDgIAAgRIAAgjIgPAAIAAgdIAPAAIAAgUIAmgUIAAAoIAXAAIAAAdIgXAAIAAAjQAAAHABACQADADAEAAQAFAAAIgCIADAbQgPAEgMAAQgOAAgIgEg");
	this.shape_3.setTransform(-13.4,-1.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgwA8QgOgOgCgWIAqgCQABAKAFAFQAGAJAMAAQAKAAAFgEQAFgFAAgGQAAgFgFgFQgFgEgRgEQgdgGgMgKQgNgLAAgRQABgLAGgKQAGgKANgFQANgGAVAAQAbAAAPAKQAPALACAWIgpACQgCgKgFgEQgGgEgIgBQgIABgEADQgEADAAAFQAAADAEADQADADALACQAdAHAMAGQAMAGAGAJQAGAJAAAMQAAAOgIALQgHAMgOAGQgOAGgUAAQgkAAgOgOg");
	this.shape_4.setTransform(-25.1,-1.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AphjUITDAAIAAGpIzDAAg");
	this.shape_5.setTransform(0.025,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AphDVIAAmpITDAAIAAGpg");
	this.shape_6.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-22.3,124.1,44.7);


(lib.LB_walkwing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAIIAAgFIgBACIgBADIgEgBIAEgQIAEABIgCAIIADgDIAEABIgEADIABAJg");
	this.shape.setTransform(12.7,25.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDAIIADgQIAEABIgEAQg");
	this.shape_1.setTransform(11.825,25.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABAGIAAgBIAAAAIgBAAIgCAAIgDgBIAAgDQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIACAAIABAAIABgBIgBgBIgCAAIAAABIgDgBIABgCIABgBIABAAIACABIACABIACAAIAAACIAAACIgCAFIABABIgBABgAgBACIAAABIABAAIAAABIABgBIABgCIAAAAIgCAAIgBAAIAAABg");
	this.shape_2.setTransform(10.7875,25.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAJIAAgKIgFAJIgEgBIABgQIAFABIgCAIIAFgHIACABIAAAIIAEgHIAEABIgIAOg");
	this.shape_3.setTransform(9.5,24.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAJIgHgCIAFgPIAGACIADABIAAAEIgCABIgBABIACACIAAADIgCACIgBABIgCAAIgBAAgAgCAFIACAAIABAAIABgBIgBgBIgBgBIgBgBgAAAgBIAAABIACAAIABgBIAAgCIgBAAIgCgBg");
	this.shape_4.setTransform(7.0583,24.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAHIAFgQIADABIgDAMIAGACIgBADg");
	this.shape_5.setTransform(5.675,24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("ACABAQhOADhZgWQglAsgugBQgNhYAUhXQCBBcByA7g");
	this.shape_6.setTransform(14.2516,24.7261);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("Ah6BYQgNhYAUhXQCBBcByA7QhOADhZgWQgkArgtAAIgCAAg");
	this.shape_7.setTransform(14.2516,24.7261);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LB_walkwing, new cjs.Rectangle(0.5,14.9,27.6,19.700000000000003), null);


(lib.LB_walkFT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ahjh7IDHD3");
	this.shape.setTransform(28.675,23.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADvD6Qg3gvAChRIAAgGIAAjtQgThKggg1QgOgXgQgSQgvg4hEgYIgVAgQBdArArBXQAFApgtAHQg/AGgOghQglg5hOgqQhMAMhTADQg5ABg8gDQAXAXAUAYQBaBvAkCLQALBlgGBrgAAYCRIgTgNQgBgYAEACQAjAVAhAJIA3AVQhEACgngSgAABBfIgWgQQgCgeAGADQArAZApAMIBEAaQhVACgxgWgAgQAcIgagQQgCgdAHADQAwAZAvAMIBNAZQhgADg3gXgADzFjQANg7gRguADvFyIELAAIh3gHIiQgIADvFyQACgIACgHAn5kVQAdAWAaAZQBaBXAoB5QAeB3gKCGIBHACQgFBDgLBGIHkAAAn4kaQAzAHAyADAksDnQgDAzgKA0QgDASgEASIBLAA");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AiTElQAGhrgLhlQgkiLhahvQgUgYgWgXQA8ADA5gBQBSgCBMgNQBOAqAlA6QAPAgA+gFQAtgIgFgpQgqhWhegsIAVggQBEAZAwA3QAQATANAWQAhA2ATBJIAADsIAAAGQgDBSA3AugABXC/IATAOQAnARBEgCIg2gUQghgJgjgVIgBAAQgEAAABAVgAA8CKIAYAQQAxAXBVgDIhEgZQgqgMgrgaIgBAAQgFAAABAbgAAnBIIAbAQQA3AXBhgDIhNgZQgvgNgxgZIgBAAQgGAAABAbg");
	this.shape_2.setTransform(-8.225,-6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ADvFGIAEgPICQAIIB3AHgAj1FGQALhGAFhCIhHgDQAKiGgeh3Qgoh4hahYQgagZgdgVIABgFQAzAGAyAEQAXAXAUAYQBaBvAkCMQALBjgGBsIHUAQQARAvgNA6IgEAPgAlAFGIAHgkQAKg0ADgzIBHADQgFBCgLBGgAAYBlIgTgNQgBgYAEACQAjAVAhAKIA3AUIgOAAQg6AAgjgQgAABAzIgWgQQgCgeAGADQArAZApANIBEAZIgQAAQhKAAgsgUgAgQgPIgagQQgCgeAHADQAwAaAvAMIBNAYIgTABQhTAAgxgUg");
	this.shape_3.setTransform(0.025,4.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LB_walkFT, new cjs.Rectangle(-51.6,-37.9,103.30000000000001,75.9), null);


(lib.LB_walkEX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA0BXIhnAAIAAitIAVAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgzBXIAAitIAVAAIBSCtg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LB_walkEX, new cjs.Rectangle(-6.1,-9.7,12.3,19.5), null);


(lib.LB_walkbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAQBIIgUgqIgPAPIAAAbIgpAAIAAiOIApAAIAABJIAdgiIAxAAIgmAjIAoBEg");
	this.shape.setTransform(39.775,0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgTBIIAAiOIAnAAIAACOg");
	this.shape_1.setTransform(29.175,0.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_2.setTransform(19.175,2.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAZBIIgZhZIgYBZIgrAAIggiOIAqAAIAPBPIAWhPIApAAIAWBPIAQhPIApAAIgfCOg");
	this.shape_3.setTransform(2.5,0.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhBBIIAAiOIBSAAQAVAAALAKQALAKAAAPQAAAMgIAKQgGAGgKADQAQAEAHAIQAHAJAAAOQAAALgFAJQgFAIgJAGQgGADgLABIgUADgAgUAoIAVAAQAMAAAEgDQAFgFAAgGQAAgGgFgFQgEgDgMAAIgVAAgAgUgOIATAAQAJgBAEgDQAEgDAAgIQAAgFgEgEQgEgDgJAAIgTAAg");
	this.shape_4.setTransform(-21.625,0.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag4BIIAAiOIAtAAIAABqIBEAAIAAAkg");
	this.shape_5.setTransform(-35.925,0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AphjUITDAAIAAGpIzDAAg");
	this.shape_6.setTransform(0.025,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AphDVIAAmpITDAAIAAGpg");
	this.shape_7.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-22.3,124.1,44.7);


(lib.LB_Walkbodykit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AyzApQgvhnhXhdQjBh5h+ABQj6APh3CDQh5CagdDEIAbDIIhHgdIkohEQgDhMAKhGQAAAAABgBQARhzA1hfQAUgkAagiQBbh5CJhzQB4AaAQhgQDyhNCmAkQFWBdCjDGQBUBiAXEwQAIA5BEANMAhfAAYQA0gFAChAQAXlNETjbQFNiWEMB2QCLA2A/BSQBUB0AiCQQAsCSgQDVQAAACAAABIhrAAQArilgThmQgrjGiyiSQhahUi/gYQn1Arg0H/IAnCcIgBAeMgoVAAAQADgMACgMQAojVhNiz");
	this.shape.setTransform(25.9917,-187.9619);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AyQHPIAFgYQAojVhNizIAAAAIADAAIABAAIACgFQAAgDgDgBIgBgBIgBAAIgCABIgBAAIgBABIAAACQgvhnhXhdQjBh5h+ABQj6APh3CDQh5CagdDEIAbDIIhHgdIkohEQgDhMAKhGIABgBQARhzA1hfQAUgkAagiQBbh5CJhzQB4AaAQhgQDyhNCmAkQFWBdCjDGQBUBiAXEwQAIA5BEANMAhfAAYQA0gFAChAQAXlNETjbQFNiWEMB2QCLA2A/BSQBUB0AiCQQAsCSgQDVIAAADIhrAAQArilgThmQgrjGiyiSQhahUi/gYQn1Arg0H/IAnCcIgBAegEAmfABcIgBABIAAADIABACQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAgBABAAQABAAAAgBQAAAAABAAQAAgBAAAAIABgCIgBgCQgBgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAIAAABIgCAAgEgmbABPIgDABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIABADQABADAEAAIABgBIABgBIABgBIABgCIAAgCIgFgEgAwVBHQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAACIAAABIAAABIAAABIABABIACABQABAAAAAAQABABAAgBQABAAABAAQAAAAABAAQADgDgCgEIgBgBIgCgBIgFABgAUmBCIgCACIAAABIAAABIAAABIACADIADAAIABAAIADgCIAAgEQgBgDgDAAgAU1AlIgBABIAAABIABADQAAAAAAAAQAAABABAAQAAAAAAABQABAAABAAIABABIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgEgDIAAABIgBAAIgDABgEAmKAAZIAAACIgBABIACADIABABIACAAIADgBIABgDIAAgCQgBgDgDAAIAAAAIgDAAIgBACgEgmNAAQIgBABIABACQABADADABIACAAIADgDIAAgCIgBgDQAAAAAAgBQgBAAAAAAQAAgBgBAAQgBAAAAAAIAAAAIgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBABgAwngHIgCACIAAACIAAABIACACIACABIACAAIACgBIABAAQAAgBAAgBQABAAAAgBQAAgBgBAAQAAgBAAAAQgBgCgDgBIAAABIgBgBIgCABgAVIgHIgDABIgBABIAAACIgBABIACACIACAAIABABIABgBQADAAAAgDIAAgDIgEgCgEAlqgAvIAAABIgBACIACABIABACIABAAIADAAIABgBIABgEIAAgBIAAgBIgBgBIgDgBIAAAAIgCAAgAw4g2IgDAAIgCACIAAADIABACQAAAAAAAAQAAABABAAQAAAAAAABQABAAABAAIABABIABgBQAEgBAAgEIgBgBIAAgBIAAgBIgBAAIgDgCgAVjg1IgBABIAAABIAAADQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAIABABIABgBQABAAAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAgBgBQAAAAAAgBIgEgDIAAABIgBAAIgCABgEglugA7IAAACIABADQAAACAEAAIACAAIABgBIACgDIgCgEIgBgBIgCgBIAAABIgDAAIgCACgAWAhhIgBABIAAABIAAACIABACIABABIABAAQABAAAAAAQABAAAAAAQABAAABgBQAAAAABAAIABgBIAAgCIgBgDIgDgCIAAAAIgBAAIgDACgAxYhhIAAABIAAABIABADIADABQAAAAABAAQABABAAgBQABAAAAAAQABAAAAAAIACgCIgBgFQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAAAIgCAAgEAlEgBtIgBABIAAABIAAACQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABIABAAIABAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBAAQAAgBAAAAIgEgDIAAAAIgBAAIgCACgEglBgBwIgBACIAAACIAAABIAAACIACABIADABIADgCIACgCQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAIgEgCIAAAAIgBAAIgDABgAxkh/IgCABIgCACIgBABIAAABIAAABQAAABAAAAQABABAAAAQAAAAABABQAAAAABABIACAAIACgBQADgBAAgEIgBgBIAAAAIAAgBIgBgBIgDgBgAWuiVIgBACIAAABIgBAAIABABQAAAEAFAAIABgBIABgBIABgBIAAgDQgBgDgDAAIgBAAgEAkhgCZIgBABIAAABIABADQAAAAAAAAQAAABABAAQAAAAAAABQABAAABAAIABABIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgEgDIAAABIgBAAIgDABgAyKibQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIAAABIAAABIAAABIABABIADACIADAAIACgCIABgCIgBgCQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgBIgCABgEgkOgCqIgBABIACAEQABACAEAAIABAAIAAgBIABgBIABgCIgBgEIgDgCIAAAAIgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBABgEAj1gC6IgBABIgBABIAAAEIABABIABABIABAAIACABIABgBIABgBIACgCIgBgCIgBgCIgBgBIgCAAgAXQi9QgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAIgBABIAAABIAAABIABACIACACIABAAIADgBIABgCIABgBIgBgDIgEgCgAyrjJIgBACIgBADIAAACIABABIABABIABAAIADABIABgBQADgBAAgDQAAgDgDgCIgCAAIgDAAgEgjcgDdIgDAAIgCACIAAACIAAABIABACIABACIABAAIAEAAIACgDIABgDQgCgEgDAAgAX2jgIgBABIAAABIAAADQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAIABABIABgBQABAAAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAgBgBQAAAAAAgBIgEgDIAAABIgBAAIgCABgEAjEgDrIgBABIAAABIABADQAAAAAAAAQAAABABAAQAAAAAAABQABAAABAAIABABIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgEgDIAAABIgBAAIgDABgAztkBIgEABQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABIAAABIABACIABABIABAAIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIABgEIgBgCQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAgAYqkBIgBACIgBACIABABIADACIACABIABgBIABgBQACgCgBgDIgBgBIgDgCIAAABIgBgBQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAgEgirgEIIgEABIgBADIAAADQACADAEAAIABAAIABgBIABgBIABgCIAAgDIgFgDgEAiPgEPIAAABIAAABIgBABIABACIABACIACAAIABABIABgBIADgCQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgEgDIAAABIgBAAIgDABgAZ5klIAAABIgBABIABABIACADIADAAIABgBIABAAIABgDIAAgCIgBgCIgDgBIAAAAIgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAABgEgiIgEpIgBACIAAABIAAABIAAACIACACIADABQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAIACgCIAAgBQAAgFgFgBIAAABIgBAAIgDABgA0zkrIAAAEIABABIABACIABAAIAEAAIACgCIAAgCIgBgEIgDgCIAAABIgCgBQAAAAgBABQgBAAAAAAQAAAAgBABQAAAAAAABgEAhMgEvIAAABIAAABIAAACIADACIACABIACgBIABgBIABgCIgBgDIAAgBIgDgCIAAABIgCgBQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABgEgg9gE0IAAACIAAADIADACIAEAAIACgCIAAgCIgBgEQAAAAAAgBQgBAAAAAAQAAgBgBAAQgBAAAAAAIAAAAIgCAAQAAAAgBAAQgBAAAAABQAAAAgBAAQAAABAAABgAa2lBIAAABIgCABIAAACIAAABIAAABIACACQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAIADgDIAAgBQAAgDgCgCIgCAAgAf1lHIgBABIAAAAIAAACIABACQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAIADgBQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIgBgDIgDgBIAAAAIgBAAIgDACgAcElOIgBABIAAABIgBACIACACIABABIABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAgBIABgBIAAgBIAAgDIgEgDIAAABIgBAAIgCABgA/ulTIgBABIAAAFQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAABgBQAAAAABAAIABgBIABgBIAAgCIgBgDQAAgBAAAAQgBAAAAgBQAAAAgBAAQgBgBAAAAIAAABIgBgBIgDACgAeolYIgBABIgBABIAAABIAAADQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAIADAAIAAgBIACgCIAAgBIgCgEIgEgBgAdZlaIgDAAIAAABIgBABIgBABIAAACIABACIABABIACABIADgBIABgBIABgBIAAgBIgBgDIgDgDgA2FlbIgDABIgBABIgBACIAAACIAAABIABABIABABIABABIAEAAIABgBIACgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgEgCgA3jl/IgDABIgCACIAAABIABADQABAEAEgBIACgBIABgBIABgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBIgBgBIgCAAgA/bmAIAAABIAAABIABACIACACQAAAAABAAQAAABABAAQAAAAAAgBQABAAAAAAIACAAIACgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgEgCIAAABIgBgBQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAABgA+bmcIgBACIAAABIAAABIAAABIABACIACABIACABQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAIABgCIAAgDIAAgBIgBgBIgDgCIAAAAIgBAAIgDABgA48mjQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIgBACIABAAIAAACIAAAAIAEADIACgBIACgBIABgCIAAgDQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgDgCIgCABgA9ImsIgDAAIgCADIgBABIABABIAAABIABABIABACIABAAIACAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIABgEIgBgCQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAgA8OmyIgBACIAAABIABADQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIACgCQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBIgEgCIAAABIgDAAgA6Nm3IgCAAIgCACIgBACIABABIAAABIABABIABACIABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQADgDgBgCIgCgDIAAgBIgDgBgA7Um3IgBABIAAABIAAABIAAABIABACIACABIACABIADgBIABgCIABgBIAAgBQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgEgBIgDACg");
	this.shape_1.setTransform(25.9917,-187.9619);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EAmcAENIgBgCIAAgDIABAAIABgCIACAAIAAAAQABAAAAAAQAAAAABAAQAAAAABABQABAAAAABIABACIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAgEgmiAEBIgBgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIADgBIAAgBIAFAEIAAACIgBACIgBABIgBABIgBABQgEAAgBgDgAwWD6IgCgBIgBgBIAAgBIAAgBIAAgBIAAgBQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIAFgBIACABIABACQACADgDADIgDABIgCgBgAUmD2IgDgBIgCgCIAAgCIAAgBIAAgBIACgCIADAAQADAAABACIAAAEIgDADgAU1DYQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgBgDIAAAAIABgBQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAIAAAAIAEADQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABIgBAAgEAmJADLIgBgBIgCgDIABgBIAAgCIABgCIADAAIAAAAQADAAABAEIAAABIgBADIgDABgEgmMADCQgDgBgBgDIgBgBIABgCQACgDADAAIAAAAQAAAAABABQABAAAAAAQABAAAAABQAAAAAAAAIABAEIAAABIgDADgAwoCtIgCgBIgCgEIAAgBIAAgCIACgBIADgBIAAAAQADABABABQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABIgBABIgCACgAVECsIgCgBIgCgDIABgBIAAgCIABgBIADgBIAAAAIAEACIAAACQAAAEgDABIgBAAgEAlqACBIgBAAIgBgBIgCgCIABgCIAAgBIACgDIACAAIAAAAIADABIABABIAAABIAAABIgBAEIgBABgAw8B+QgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgBgCIAAgDIACgBIADgBIAAgBIADACIABABIAAABIAAAAIABABQAAAEgEACIgBAAgAViB8QAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIAAgCIAAgBIABgBQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAIAAgBIAEAEQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgBABgEglsAB3QgEgBAAgCIgBgDIAAgCIACgCIADAAIAAAAIACAAIABABIACAEIgCAEIgBABgAV/BQIgBAAIgBgBIgBgCIAAgCIAAgBIABgBQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABABIAAgBIADADIABACIAAACIgBABIgDABIgCAAgAxXBPIgDgBIgBgDIAAAAIAAgCIADgDIACAAIAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAABIABAEIgCACIgCABIgCgBgEAlDABEQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIAAgDIAAgBIABgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAIAAAAIAEADQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgBAAgEglDABCIgCgBIAAgCIAAgBIAAgCIABgCIAEgBIAAAAIAEACQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgCACIgDABgAxpA1QAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgBIAAAAIABgCIACgCIACgBIAAAAIADACIABAAIAAABIAAABIABABQAAADgDABIgCACgAWqAZIgBgBIABAAIAAgBIABgCIACgBIABAAQADAAABADIAAAEIgBABIgBABIgBAAQgFAAAAgEgEAkhAAYQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgBgCIAAgBIABgBQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAIAAgBIAEAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBABgAyOAWIgBgBIAAgBIAAAAIAAgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQADgBADABQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIABADIgBABIgCACIgDAAgEgkQAAFIgCgDIABgCQACgCADAAIAAAAIADACIABADIgBACIgBABIAAABIgBAAQgEAAgBgCgEAjzgAGIgBAAIgBgCIgBgBIAAgEIABgBIABAAIACgBIACABIABAAIABACIABACIgCADIgBABIgBAAgAXMgJIgCgCIgBgCIAAgBIAAAAIABgBQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAAgBIAEACIABADIgBABIgBACIgDACgAytgVIgBAAIgBgBIgBgBIAAgBIABgEIABgCQAEgBABABQADACAAADQAAADgDABIgBABgEgjhgApIgBAAIgBgBIgBgCIAAgCIAAgCIACgCIADAAIAAAAQADAAACADIgBAEIgCACgAX1guQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIAAgCIAAgBIABgBQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAIAAgBIAEAEQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgBABgEAjEgA5QgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgBgCIAAgBIABgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIAAgBIAEAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBABQAAAAAAAAQgBAAAAAAIgBABgAzyhNIgBAAIgBgBIgBgBIAAgBQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAIAEgBIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABACIgBAFQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAYphOIgDgCIgBgCIABgCIABgCQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAAAAIADABIABABQABAEgCABIgBACIgBAAgEgizgBWIAAgCIABgEIAEgBIAAAAIAFAEIAAACIgBACIgBABIgBABIgBAAQgEABgCgEgEAiPgBdIgCAAIgBgCIgBgBIABgBIAAgBIAAgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIAAgBIAEAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgDACIgBABgAZ4h0IgCgDIgBgBIABgBIAAgBQABgDADABIAAgBIADABIABACIAAACIgBADIgBABIgBABgEgiKgB2IgCgCIAAgCIAAAAIAAgCIABgBQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAIAAgBQAFABAAAFIAAABIgCACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAgA0zh5IgBAAIgBgBIgBgBIAAgFQABgDAEABIAAgBIADACIABAFIAAACIgCABgEAhMgB+IgDgCIAAgCIAAgBIAAAAQABgEAEABIAAAAIADABIAAABIABADIgBACIgBABIgCABgEgg9gCCIgDgCIAAgDIAAgCQABgDAEAAIAAAAQAAAAABABQABAAAAAAQABAAAAABQAAAAAAAAIABAEIAAACIgCACgAaziOIgCgCIAAgBIAAgBIAAgCIACgBIAAAAIADgBIACABQACABAAADIAAACIgDACIgBABIgDgCgAfyiWIgBgDIAAgCIAAAAIABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAAAAIADABIABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgDABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAcDicIgBAAIgBgBIgCgBIABgCIAAgBIABgCQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAIAAgBIAEADIAAADIAAABIgBABIgDACIgBgBgA/uifQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIAAgFIABgBIAEgBIAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAIABADIAAADIgBAAIgBACIgCAAIgBAAgAejinIAAgDIAAgBIABgBIABgBIABgBIAEABIACAEIAAACIgCABIAAABIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAdTinIgBgBIgBgBIAAgDIABgBIABgBIAAgBIADAAIAAgBIADADIABADIAAACIgBABIgBAAIgDABgA2KimIgBgBIgBgBIgBgBIAAgBIAAgCIABgCIABgBIADgBIAAAAIAEACQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgCADIgBABgA3qjMIgBgEIAAgBIACgCIADgBIAAAAIACAAIABABQABABAAABQAAABABAAQAAABAAAAQAAABAAAAIgBACIgBABIgCABIgCAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAgA/bjOIgCgDIgBgCIAAgBIAAgBQACgEADABIAAgBIAEADQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIgCAEIgCABIgBAAIgCAAgA+cjoIgCgCIgBgCIAAgBIAAgBIAAgBIABgBIAEgBIAAgBIADACIABABIAAABIAAADIgBACQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABgBAAgA5BjwIAAgBIAAgBIgBgBIABgCQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBADACQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIAAADIgBACIgCABIgCABgA9Nj4IgBAAIgBgBIgBgBIAAgBIgBgCIABgBIACgDIADAAIAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABACIgBAFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAgA8RkBIgBgCIAAgCIABgCIABgCIADAAIAAgBIAEACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABIgCACQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBABIgEgCgA6RkDIgBAAIgBgBIgBgCIAAgBIgBgBIABgCIACgBIACgBIAAAAIADAAIAAABIACADQABADgDACIgCAAIgCAAgA7VkEIgCgCIgBgCIAAgBIAAgBIAAAAIABgCIADgCIAEABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAABIgBABIgBACIgDABg");
	this.shape_2.setTransform(26.275,-205.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LB_Walkbodykit, new cjs.Rectangle(-226.7,-235.2,505.4,94.5), null);


(lib.Gtr_stockwing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiCAaIgUgjQgmgCgugsIBBANQAagfAaAHIDXAWQAqARAdAUQAXAPARASIAaAYQiEAmjUgqg");
	this.shape.setTransform(0.025,0.0178);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhtAuIgVgUIgUgjQgmgCgugsIBBANQAagfAaAHIDXAWQAqARAdAUQAXAPARASIAaAYQg/AShSAAQhZAAhugWg");
	this.shape_1.setTransform(0.025,0.0178);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Gtr_stockwing, new cjs.Rectangle(-24.5,-7.8,49.1,15.6), null);


(lib.Gtr_StockwheelF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgzlMQAagEAZAAQATAAATACQBaAJBIA0QAOALAOALQAHAHAHAHQAOANAMAPIg1AgAAlkhIABgtAAlkhIAUgBQAcAGAZALQATAJASANQAnAcAdAuAAlkhIAACtQAGAoAqgWICChPAEMjRQAYAdAQAgQACAEACAEAEHhuIAxgeQAdA9ABBHQAAABAAAAIAAAHQAAAAAAAAQgBBHgbA9Ig1gdIiPhNQgmgYAqggICNhQQAyBogyBfIgCAOADfC3IArAaQgLANgOAOQgQAQgRANQhJA6hcALIAAABQgQABgQABIgLAAQAAAAgCAAIgtgJIhVgQQgpgSglgdQgQgMgPgPQgNgMgLgNAE6CEQgDAGgDAGQgRAigZAfADfC3IiIhSQgmgSgIAhIABCuADfC3QgtA3g4AbQglATgrAGIABAsQgQACgQABAjki2QAkgqAsgbQAWgNAYgJQAagKAcgFIAACgQAAA2gkgXIiQhVIgqgYQAOgQAPgPQAHgHAIgHQANgLAOgLQBCgwBSgLIADATIAAAZAk9CAQgJgVgFgXQgKgoAAgsQAAgrAKgoQAFgWAJgVAkMhpIgagPIgXgGQACgFACgFQAEgJAFgJQAOgbAUgZAkPBoICOhMQAxgXgvgdIiNhRQgyBsAvBlIguAYAgqEgIAAimQgCgtgkASIiPBaIgqAcQgXgcgQgdQgFgJgEgKQgCgFgCgEAgqEgQgvgEgogTQg3gagng2AgqEgIAAAXIgFAR");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAAFRIgCAAIgtgJIAFgSIAAgWIAAinQgCgtgkATIiPBaQAnA2A3AaQAoATAvAEIAAAWIgFASIhVgQQgpgSglgdQgQgMgPgPQgNgMgLgOIAqgbIgqAbQgXgbgQgdIgJgTIgEgJIAugZICOhLQAxgYgvgcIiNhRIgagPIgXgGIAXAGIAaAPQgyBsAvBkIguAZQgJgWgFgWQgKgoAAgsQAAgrAKgoQAFgWAJgVIAEgKIAJgSQAOgbAUgYQAOgRAPgPIAPgNIAbgXQBCgvBSgMIADAUIAAAYIAAgYIgDgUQAagDAZgBQATAAATACIgBAtIABgtQBaAJBIA0IAcAXIAOANQAOAOAMAOIg1AgIA1ggQAYAdAQAgIAEAJIgxAdIAxgdQAdA8ABBIIAAABIAAAGIAAAAQgBBHgbA8Ig1gcIACgOQAyhfgyhoIiNBQQgqAfAmAZICPBNIA1AcIgGAMQgRAigZAgIgrgaIArAaQgLANgOAOQgQAPgRAOQhJA6hcALIgBgsIABAsIggADgAApBzIABCvQArgGAlgTQA4gcAtg2IiIhSQgNgHgKAAQgSAAgFAVgAjki2ICQBVQAkAXAAg2IAAigQgcAFgaAKQgYAKgWANQgsAagkAqIgqgXgAAlkhIAACuQAGAnAqgWICChPQgdgtgngcQgSgNgTgKQgZgLgcgGgAgqEgIAAAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Gtr_StockwheelF, new cjs.Rectangle(-35.2,-34.6,70.5,69.30000000000001), null);


(lib.Gtr_stockwheelB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgzlMQAagEAZAAQATAAATACQBaAJBIA0QAOALAOALQAHAHAHAHQAOANAMAPQAYAdAQAgQACAEACAEQAdA9ABBHQAAABAAAAIAAAHQAAAAAAAAQgBBHgbA9QgDAFgDAGQgRAjgZAeQgLAOgOANQgQARgRANQhJA6hcALIAAAAQgQACgQABIgLAAQAAAAgCAAIgtgJIhVgQQgpgSglgdQgQgMgPgPQgNgNgLgMQgXgcgQgdQgFgJgEgKQgCgFgCgFQgJgVgFgWQgKgoAAgsQAAgrAKgoQAFgWAJgVQACgFACgFQAEgJAFgJQAOgbAUgZQAOgQAPgPQAHgHAIgHQANgLAOgLQBCgwBSgLIADATIAAAZIAACgQAAA2gkgXIiQhVQAkgqAsgbQAWgNAYgJQAagKAcgFAAlkhIABgtAAlkhIAUgBQAcAGAZALQATAJASANQAnAcAdAuAAlkhIAACtQAGAoAqgWICChPAEMjRIg1AgAEHhuIAxgeAEFBnIiPhNQgmgZAqgfICNhQQAyBogyBfgADfC3IArAZAE6CEIg1gdADfC3IiIhSQgmgTgIAhIABCvAArFOQgQACgQABADfC3QgtA3g4AbQglATgrAGIABAsAjki2IgqgYAkMhpIgagPIgXgGAkPBnICOhLQAxgYgvgcIiNhRQgyBrAvBlIguAYAgqEgIAAinQgCgtgkATIiPBaIgqAcAgqEgIAAAXIgFARAgqEgQgvgEgogTQg3gagng2");
	this.shape.setTransform(0.025,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAAFRIgCAAIgtgJIAFgSIAAgWIAAinQgCgtgkATIiPBaQAnA2A3AaQAoATAvAEIAAAWIgFASIhVgQQgpgSglgdQgQgMgPgPQgNgMgLgOIAqgbIgqAbQgXgbgQgdIgJgTIgEgJIAugZIguAZQgJgWgFgWQgKgoAAgsQAAgrAKgoQAFgWAJgVIAXAGIAaAPQgyBsAvBkICOhLQAxgYgvgcIiNhRIgagPIgXgGIAEgKIAJgSQAOgbAUgYIAqAXICQBVQAkAXAAg2IAAigQgcAFgaAKQgYAKgWANQgsAagkAqIgqgXQAOgRAPgPIAPgNIAbgXQBCgvBSgMIADAUIAAAYIAAgYIgDgUQAagDAZgBQATAAATACIgBAtIABgtQBaAJBIA0IAcAXIAOANQAOAOAMAOQAYAdAQAgIAEAJQAdA8ABBIIAAABIAAAGIAAAAQgBBHgbA8Ig1gcIACgOQAyhfgyhoIAxgdIgxAdIiNBQQgqAfAmAZICPBNIA1AcIgGAMQgRAigZAgIgrgaIArAaQgLANgOAOQgQAPgRAOQhJA6hcALIgBgsQArgGAlgTQA4gcAtg2IiIhSQgmgSgIAgIABCvIABAsIggADgAAlkhIAACuQAGAnAqgWICChPIA1ggIg1AgQgdgtgngcQgSgNgTgKQgZgLgcgGgAAqEigAE6CDg");
	this.shape_1.setTransform(0.025,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Gtr_stockwheelB, new cjs.Rectangle(-35.2,-35.5,70.5,69.3), null);


(lib.Gtr_r35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAdAAQAAAmgJAaQgIAbgMAAQgLAAgJgbQgJgaAAgmQAAglAJgaQAJgaALAAQAMAAAIAaQAJAaAAAlg");
	this.shape.setTransform(-270.2422,-20.2988,1,1,29.9992);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgUBAQgJgbAAglQAAglAJgaQAJgaALAAQAMAAAJAaQAIAaABAlQgBAlgIAbQgJAbgMAAQgLAAgJgbg");
	this.shape_1.setTransform(-270.2422,-20.2988,1,1,29.9992);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ABhAAQAAAogcAcQgdAdgoAAQgnAAgdgdQgcgcAAgoQAAgnAcgdQAdgcAnAAQAoAAAdAcQAcAdAAAng");
	this.shape_2.setTransform(-215.8,-22.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AhEBEQgcgcAAgoQAAgnAcgcQAdgdAnAAQAoAAAdAdQAcAcAAAnQAAAogcAcQgdAdgoAAQgnAAgdgdg");
	this.shape_3.setTransform(-215.8,-22.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AbXgWQAAAGgFAEQgEAFgGAAQgCAAgBAAQgEgBgEgEIAAAAQgBgBgBgBQgCgEAAgEQAAgFACgDQABgBABgBIAAgBQAEgDAEgBQABAAACAAQAGAAAEAEQAFAFAAAGgAbXAeQAAAGgFAEQgEAFgGAAIAAAAQgGAAgFgFQgBgBgBAAQAAgBAAAAQgCgEAAgEQAAgEACgDQAAAAAAgBQABgBABgBQAAAAAAgBIABAAQAEgEAGAAIAAAAQAGAAAEAEIAAAAQAFAFAAAGgAdAgXQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGgAcLgyQAAAFgEAEQgDAEgFAAQgFAAgEgEQgEgEAAgFQAAgFAEgEQABgBABAAQADgCAEAAQAEAAADACQAAAAABABQAEAEAAAFgAdAAsQAAAFgEAEQgDAEgGAAQgFAAgEgEQgEgEAAgFQAAgFAEgFQAEgDAFAAQAGAAADADQAEAFAAAFgAcLBJQAAAGgEAFQgFAEgGAAQgHAAgEgEQgFgFAAgGQAAgHAFgFQAEgEAHAAQAGAAAFAEQAEAFAAAHgA7thLQAAAFgEAEQgDAEgFAAQgFAAgEgEQgEgEAAgFQAAgFAEgEQABgBABAAQADgCAEAAQAEAAADACQAAAAABABQAEAEAAAFgA64gwQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGgA8hgvQAAAGgFAEQgEAFgGAAQgCAAgBAAQgEgBgEgEIAAAAQgBgBgBgBQgCgEAAgEQAAgFACgDQABgBABgBIAAgBQAEgDAEgBQABAAACAAQAGAAAEAEQAFAFAAAGgA8hAFQAAAGgFAEQgEAFgGAAIAAAAQgGAAgFgFQgBgBgBAAQAAgBAAAAQgCgEAAgEQAAgEACgCQAAgBAAAAQABgBABgBQAAAAAAgBIABAAQAEgEAGAAIAAAAQAGAAAEAEIAAAAQAFAFAAAFgA64ATQAAAFgEAEQgDAEgGAAQgFAAgEgEQgEgEAAgFQAAgFAEgFQAEgDAFAAQAGAAADADQAEAFAAAFgA7tAwQAAAGgEAFQgFAEgGAAQgHAAgEgEQgFgFAAgGQAAgHAFgFQAEgEAHAAQAGAAAFAEQAEAFAAAHg");
	this.shape_4.setTransform(8.075,38.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AsjsIQG0hQHTA8QAPAFAPAGQBVAfBTAhQGnCoFoDSQAZACAYgIQAZgJAYgTQKCAwInCAQBsAeBeAqAFUlgQAGAGAMADQAoALApgLQA/AIA1gIQAVAjAEAjQhOAwhFgwQgKgjAQgjAIrlXQAjg0gjgzQg/gzhxgCIgsAiIAABjQAAAIAFAGAqorDQACgBABAAQA0gHA1gGQACAAACAAQETggEbgGQAsATAtATQFwCdEcDMQAPAIAOAJQBhA9AtBcIANAZQAAARgBAQQAAAYgBAYIDcAUIAvAEIAogtQAQgSASgPQBlhVC1gOQDsAMDYAnQBXAPBTAUIhggkIBAgDQgbgGgcgFQkMgxkrgTQjogFiOhLAIrlXIDNAAIDMAAIB1AAAOTilIFMAbIAHAAATEhpIkygbACCsRINCG6An2kAIScBJIDtASEAiFAAmQg3gnhFgjQgigNgjgHQiTgiiaA2Qj/BmhbEeQgLBoATBZQAKAzAUAtIAEADIAAAvMgq5AAAIgdgCAWtIdQgbhGAAhRQAAizCAh/QB/h+C1AAQBDAAA7ASQBlAcBRBQQB/B/AACzQAABSgbBIQgJAXgLAXQgGAKgGAKQgMAUgOASQgTAZgXAXQguAtg0AdQgoAWgsANQg8AShCAAQhDAAg8gSQhlgdhQhQQgagagVgdQgjgvgTg1gAT6IWQgIivBNieQBLibCkhpQCphWDgAjQAHABAGABQCrAeBxBgQANAKAMAKID0AAQAYAAAKgbQA/AvAlA1EAhugCXQBPASBLAWQCpAzBeBHEApsgARQhZg1h2gmQihgwiugiEApsgARIAmgsQg+glhGgfAVWlAQG9ArGfBMQCwAhCsAnEAqJACTQAkASAwgSQAdgYgdg7QgPgOgQgNIgBAwQgUAYg2ACQANASAJASgEAlqAINIDpAAIA3g4IgBlCEAiFAAmQBlBCBDB5QBDB8gGCwQgCAlgEAnIiagLEAiFAAmIB0AAAdLA4QCsACB1ClQBaCYhaDIQhRCRi/AUQj9gQhEi0Qg/iNA6iOQBHi9DngQAQZCGIgigSIgaAnIAfAXIh9DVIgeAAIgIghAQZCGIgdAsANFIhIAiiCIgGgYAPdCbIiEDLAmmIQIAQAjITQAYIALgqIG1AAQAAgGAAgFAXjKBIAbAAAUAIhIgGgLAUAIhIAEAIIAdB2IBBAAIABgeAT6IhIAGAAIA7AAAVFIhIBogEAnbGrIT5ARQA/gJAEgsAngGiIT6gYQAlAFAagpAScg8IiDDCARthAIh2C0EAq+AAlQgmgegsgYAORhUQgKDZguDhEgnzgF7QADABADAAQANABAOAAIAABBICCAAIgMAeIgkAAIhPDbIAnAVQgNAsAtAFIEqAxQgKAMgKAMQgVAdgQAhQgQAhgFAYQAAABggBmQgWBNgGAgQgCAMAAAGQAAAVAHBEQAGBEAPAOIBHAdIgHgzIBkATQg0hdAAhyQAAizCAh/QB/h+C1AAQC0AACAB+QB/B/AACzQAACYhcBzEgnzgF7QgCgLACgKQABgHAFgHQALgRAfgJQAsADArACQAtABArgBQBAgBA6gHQAUgDATgDQABAAAAgBQAfgEAdgHQAlgJAigLIA0AYIIijPQCCghB/gYQC/glC2gSIAbBSImuBfIiCChIKDAnIAMABIAeABIAoACID3ALIgYgYQgqgohRggIgBi6IHWggIGODUEgoigGfIAvAPEgoigGfIAogqIA3AREgpDgCMQgYAfgOgGQgOgGAFgnQAFgmAUgwQAVgxAYgeQAYgeAOAGQAOAGgFAmQgFAmgUAxQgVAwgYAegEgpUAE7IgGgMQgLkaB4kRQANgeAOgeEgn9gExQg1ADgUCEQgEARAHANEgrpAElIgBgFIAAlHQA4i5Bji5QAkAYA4AGEgpPgGZIAtgGEgljgGQIBPAAIAAgjEglQgE4QAZg2gsgiIiQAAAxXIHQAAgLAAgKQAAhog5igQg5ihhuhPIg7grQg0gchCgYQiEgxhnAOQhnANhpAvQhoAvgjAiQgiAjgOAQIBSAWQCeiKDmgIQFlBBBRD5QAzCMgBCIQgBBBgNA/QgCALgDAKIA9AAQAcg+ADhaIKxAJITrAREglcgEaIhMDwAuOpLIAkCAIkyAAIA8hYgAqorDIgUAQQgeAeAMAeIAGAMQAQglAZAAIBcgGIBDgEAsIq2QAwgHAwgGApDqWIgGAVQglB2AJBsIACAUAsdkTIBoh8AsdkTIB+AIAr7jCIBYAAQghgkAlglICpALAsdkTQARApARAoQCBE4CaEsAqjjCICsAAQAkgfgjgfAsIq2IBfEoAqLmNIg9jeA/vnhQE1hwEhhHEglQgE4IYzAlAnbGrIkigEIEdgFQADAEACAFQAaAyAbAzAyuKKIiFAAIggAHQgOAQgOAQQgEADgDAEQhRBQhlAdQg8AShCAAQhDAAg8gSQhlgdhQhQQgugugeg1IAvAJAygIKIBJgDEgiiAGtQAQhcAghRQAnhgA/hSEgjoAGbIBGASEgjOAJYIhzgaIjQAAIhrgdIgRglIhYi4EgiOAJCIgUiVEgqEAE9IAqgDIAGABIFsBgEgrpAElIAEAfIBhgHIA8CqQgQAkg1gPEgqEABNIAADYIhlAAEglBAI+Ii1gqIhejZAx2KfMAmXAAAAlsmAILAAg");
	this.shape_5.setTransform(0.0375,0.0311);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AxKLrQAdg+ADhaIAAgVQAAhog5igQg5ihhvhQIg7grQg0gbhCgYQiDgxhnAOQhoANhoAvQhpAugiAjQgjAjgNAQIkrgxQgigEAAgbQAAgIADgLIBMjvIAMgeIYzAlIBnh8IhnB8I4zglQAJgTAAgRQgBgegcgWQAcAWABAeQAAARgJATIiCAAICCAAIgMAeIglAAIhODaIAnAVQgDALAAAIQAAAbAiAEIErAxIgUAYQgWAdgPAhQgQAhgGAYIggBnQgWBNgGAgIlshgIgFgMIgBgwQAAkCBtj5QANgeAPgeQgPAegNAeQhtD5AAECIABAwIAFAMIgFgBIgqADIhhAHIgFgfIBlAAIAAjYIAADYIhlAAIgBgFIAAlIQA5i4Bii5IAugGIAuAPIgugPIAngqIA4ARQgfAJgMARQgEAHgCAHQACgHAEgHQAMgRAfgJQAsADAqACQAuABArgBQA/gBA7gHIAngGIABgBQAegEAegHQAkgJAjgLIAzAYIIijPQCDghB/gYQC/glC2gSQG0hQHSA8IAeALINCG6IB1AAQAZACAZgIQAYgJAYgTQKDAwImCAQBtAeBdAqQBHAfA+AkIgmAsQhZg1h2glQihgwiugiIg3gLQkNgxkrgTQjngFiOhLQCOBLDnAFQErATENAxIA3ALIhBADIBhAkQBOASBMAWQCoAyBeBIQgKAbgXAAIj0AAIgagUQhwhgirgeIgNgCQjhgjioBVQilBqhLCbQhMCeAHCvIABALIAFAAIAFAIIAcB2gAlpJ/ITPAYIALgqIG2AAIm2AAIAiiCIgGgYIAGAYIgiCCIzqgRIg1hlIT5ARQA+gJAEgsQgEAsg+AJIz5gRIgFgJIT6gYIAAAAIAIAAIAAAAIABAAQAdAAAVgfIABgBIAAgBIABgBIAAgBIABgBIgBABIAAABIgBABIAAABIgBABQgVAfgdAAIgBAAIAAAAIgIAAIAAAAIz6AYIkeAFIEjAEIA1BlIqxgJIKxAJgAmzHuQiaksiCk4IBYAAICsAAQAlgfgkgfISdBJIDtASIgBAhIgCAwIDdATIh3C1IgZAnIiFDLQAvjhAJjZQgJDZgvDhIAIAhIAfAAIB9jVIAdgsICCjDIApgsQAPgSASgPQBlhVC2gOQDrAMDZAnQBWAPBUAUQhUgUhWgPQjZgnjrgMQi2AOhlBVIgHAAIlLgbIgOgZQgthchgg9IDLAAIjLAAQBgA9AtBcIAOAZIjtgSIydhJIipgLIh9gIIAhBRIghhRIB9AIQglAlAhAkIhYAAQCCE4CaEsgEgn/gD5QgZAegUAxQgVAwgEAmQgFAnAOAGQANAGAZgfQAYgeAUgwQAVgxAFgmQAEgmgNgGIgFgBQgNAAgUAZgEAjegB9QCxAhCrAnQirgnixghQmfhMm8grQG8ArGfBMgAHejFQBFAwBOgwQgEgjgVgjQgbAEgdAAQgdAAgfgEQAfAEAdAAQAdAAAbgEQAVAjAEAjQhOAwhFgwQgEgNAAgOQAAgVAKgWQgKAWAAAVQAAAOAEANgEgmlgDsIAAhBIgcgBIgGgBIgBgLIABgKIgBAKIABALIAGABIAcABgAyJoLIiCChIKCAnIAMABIAfABIAoACID2ALILBAgQAGAGALADQAUAFAVAAQAUAAAVgFQgVAFgUAAQgVAAgUgFQgLgDgGgGQgGgGAAgIIAAhjIAsgiQBxACBAAzQAiAzgiA0IDNAAIgdgRQkcjMlwidIhbgmQkaAGkSAgIgFAAIhpANIgCABQgxAGgwAHIgahSIAaBSgEgnHgEvQg3gGglgYQAlAYA3AGgEgnHgFEICQAAgEgjngFEIAAgjIAAAjIhQAAgAlpJ/IgQgjITqARIgLAqgAl5JcgEgq9AFxgEggxACEgEgkjgDsgAMlkLgArcpqg");
	this.shape_6.setTransform(-4.425,-7.5689);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("EAnUABtQhehJipgyQhLgWhPgSIhggjIBAgEQCuAjChAvQB2AlBZA1QAsAaAmAeIgBAvQgUAZg2ACQglg2g/gugEgqBgBIQAUiFA1gDQgFAngUAwQgVAxgYAeQgHgNAEgRg");
	this.shape_7.setTransform(5.9023,-9.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","#000000"],[0,1],379.5,221.5,379.5,221.5).s().p("A1bBgQAAiyh/h+QiAh/i0AAQi1AAh/B/QiAB+AACyQAABzA0BdIhkgUIgUiUQAQhcAghQQAnhhA/hRQCeiLDmgIQFlBBBRD5QAzCLgBCJQgBBAgNBAIiFAAIggAHQBchzAAiZgEAhmAEoQALgWAJgYQAbhHAAhTQAAiyh/h+QhRhQhlgeQg7gRhDAAQi1AAh/B/QiAB+AACyQAABRAbBHIhoAEQgThZALhoQBbkeD/hmQCag2CTAhQAjAIAiANQBFAiA3ApQBlBBBDB5QBDB8gGCvQgCAlgEAog");
	this.shape_8.setTransform(10.0035,29.3837);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AxcK1IgdgCIAcggIAhgHICEAAQANhAABhAQABiJgziMQhRj4llhBQjlAIifCKIhSgXIBSAXQg/BSgnBgQggBRgPBcIhHgSQAGghAWhMIAghoQAGgYAPggQAQghAVgdIAUgZQAOgPAjgjQAigjBoguQBpgvBngNQBngOCEAxQBCAYA0AbIA7ArQBuBQA6CgQA4ChAABnIAAAWIhJADIBJgDQgCBZgdA/Ig8AAIAEgVIgEAVIA8AAMAmXAAAIBCAAIABgeIADADIAAAvgAYXKhIgdh3IgEgHIA7AAIg7AAIgGgMQgHiuBMifQBLiaCkhqQCphVDhAjIAMACQCsAeBwBgIAaAUIh0AAQg4gohFgiQgigNgjgHQiSgiiaA2QkABlhaEfQgMBoATBZQAKAyAVAuIgBAegA/YJaIhzgaIi1grIhejYIFsBgIgCASQABAUAGBFQAGBEAPAOQgPgOgGhEQgGhFgBgUIACgSIBHASIATCUIAHA0gEgkbAJAIhrgdIgRgmIADABQANAEAMAAIAAAAIAAAAQAdAAAMgYIAAgCIg8ipIAqgDIAGABIBeDYIC1ArgAX2IjgAthIJIAAAAgEgl7AICQgMAAgNgEIgDgBIhXi3IBggHIA8CpIAAACQgMAYgdAAIAAAAIAAAAgA/yGdgA8WBQgAm/mNIqDgnICCiiIGuheIBfEogAtqoiIg8BZIEyAAIgkiAg");
	this.shape_9.setTransform(-24.6,-0.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("EAkNAGUQAGiwhEh8QhCh4hlhBIB0AAID0AAQAXAAAKgbQBAAuAlA2QANAQAJATIABFCIg3A3gAMDEOIgIghICFjKIAfAWIh9DVgAOagEIB2i1IAuAEIgugEIjdgUIACgvIABgiIFMAbIAGAAQgSAPgPASIkygaIEyAaIgpAtIiCDCgEgosgC4IBPjbIAkAAIhMDxgAsAk6QghglAkgkICpAKQAkAfglAgg");
	this.shape_10.setTransform(9.35,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AZ6MTQhlgehQhQQgagagWgcIAbAAIgbAAQgigvgUg1QgahHAAhRQAAizCAh+QB/h+C1AAQBDAAA7ARQBlAeBQBPQCAB+AACzQAABTgbBHQgJAYgLAXIgMAUQgMAUgOASQgUAYgXAXQgtAug1AdQgnAWgsANQg8ARhCAAQhDAAg8gRgAXOINQBEC1D9APQC/gTBRiRQAthkAAhYQAAhYgthMQh1ilitgDQCtADB1ClQAtBMAABYQAABYgtBkQhRCRi/ATQj9gPhEi1QghhJAAhJQAAhEAchEQBHi+DngQQjnAQhHC+QgcBEAABEQAABJAhBJgAbwGzQAAAGAEAFQAFAEAGAAQAHAAAEgEQAFgFgBgGQABgHgFgEQgEgFgHABQgGgBgFAFQgEAEAAAHIAAAAgAcpGWQAAAGAEADQAEAFAGAAQAFAAAEgFQADgDAAgGQAAgFgDgEQgEgEgFABQgGgBgEAEQgEAEAAAFIAAAAgAa8GJQAAAEACADIAAABIADACQAEAFAGgBIABAAQAFABAEgFQAFgFAAgFQAAgHgFgEIAAgBQgEgEgFAAIgBAAQgFAAgFAEIAAABIgBABIgCACIAAABQgCACAAAFIAAAAgAa8FUQAAAEACAEIACACIABAAQADAEAEAAIADAAQAGABAEgFQAFgFAAgFQAAgHgFgEQgEgEgGgBIgDABQgEABgDADIgBABIgCACQgCADAAAFIAAAAgAcnFTQAAAFAFAFQADADAHAAQAFAAAFgDQADgFAAgFQAAgHgDgDQgFgFgFAAQgHAAgDAFQgFADAAAHIAAAAgAb2E4QAAAFADAEQAEADAFAAQAFAAAEgDQADgEAAgFQAAgFgDgEIgCgBQgDgDgEAAQgEAAgDADIgCABQgDAEAAAFIAAAAgA92MTQhlgehRhQQgugtgdg1IAvAJIgvgJQg0hdAAhzQAAizB/h+QCAh+C0AAQC1AACAB+QB/B+AACzQAACZhdBzIgcAgIgGAGQhRBQhlAeQg8ARhDAAQhCAAg8gRgA8JGaQAAAHAFAEQAFAFAGgBQAHABAEgFQAEgEABgHQgBgGgEgFQgEgEgHAAQgGAAgFAEQgFAFAAAGIAAAAgA7OF9QAAAGADADQAEAFAFAAQAGAAADgFQAFgDAAgGQAAgFgFgEQgDgDgGAAQgFAAgEADQgDAEAAAFIAAAAgA88FwQAAADACAEIAAABIACACQAFAFAGAAIAAAAQAGAAAFgFQAEgFAAgFQAAgGgEgFIgBAAQgEgFgGAAIAAAAQgGAAgEAFIgBAAIAAABIgCABIAAABQgCAEAAAEIAAAAgA88E6QAAAFACAEIACABIAAABQAEAEAEABIADAAQAGAAAFgFQAEgFAAgGQAAgFgEgFQgFgFgGAAIgDABQgEABgEADIAAABIgCABQgCAEAAAEIAAAAgA7QE6QAAAFADAFQAEADAGAAQAHAAADgDQAFgFAAgFQAAgHgFgDQgDgFgHAAQgGAAgEAFQgDADAAAHIAAAAgA8DEfQABAFADAEQAEADAFAAQAFAAADgDQAFgEAAgFQAAgFgFgEIgBgBQgDgCgEAAQgEAAgDACIgCABQgDAEgBAFIAAAAgEgh3AJDgAb0G+QgEgFAAgGQAAgHAEgEQAFgFAGABQAHgBAEAFQAFAEgBAHQABAGgFAFQgEAEgHAAQgGAAgFgEgAcOGzIAAAAgA8EGlQgFgEAAgHQAAgGAFgFQAFgEAGAAQAHAAAEAEQAEAFABAGQgBAHgEAEQgEAFgHgBQgGABgFgFgActGfQgEgDAAgGQAAgFAEgEQAEgEAGABQAFgBAEAEQADAEAAAFQAAAGgDADQgEAFgFAAQgGAAgEgFgA7pGaIAAAAgAbLGXQgGABgEgFIgDgCIAAgBQgCgDAAgEQAAgFACgCIAAgBIACgCIABgBIAAgBQAFgEAFAAIABAAQAFAAAEAEIAAABQAFAEAAAHQAAAFgFAFQgEAFgFgBgAdDGWIAAAAgA7LGGQgDgDAAgGQAAgFADgEQAEgDAFAAQAGAAADADQAFAEAAAFQAAAGgFADQgDAFgGAAQgFAAgEgFgAbaGJIAAAAgA8tF/QgGAAgFgFIgCgCIAAgBQgCgEAAgDQAAgEACgEIAAgBIACgBIAAgBIABAAQAEgFAGAAIAAAAQAGAAAEAFIABAAQAEAFAAAGQAAAFgEAFQgFAFgGAAgA60F9IAAAAgA8eFwIAAAAgAbIFiQgEAAgDgEIgBAAIgCgCQgCgEAAgEQAAgFACgDIACgCIABgBQADgDAEgBIADgBQAGABAEAEQAFAEAAAHQAAAFgFAFQgEAFgGgBIgDAAgAcsFdQgFgFAAgFQAAgHAFgDQADgFAHAAQAFAAAFAFQADADAAAHQAAAFgDAFQgFADgFAAQgHAAgDgDgAbaFUIAAAAgAdDFTIAAAAgA8wFKQgEgBgEgEIAAgBIgCgBQgCgEAAgFQAAgEACgEIACgBIAAgBQAEgDAEgBIADgBQAGAAAFAFQAEAFAAAFQAAAGgEAFQgFAFgGAAIgDAAgA7NFEQgDgFAAgFQAAgHADgDQAEgFAGAAQAHAAADAFQAFADAAAHQAAAFgFAFQgDADgHAAQgGAAgEgDgAb5FBQgDgEAAgFQAAgFADgEIACgBQADgDAEAAQAEAAADADIACABQADAEAAAFQAAAFgDAEQgEADgFAAQgFAAgEgDgA8eE6IAAAAgA60E6IAAAAgAcOE4IAAAAgA7/EoQgDgEgBgFQABgFADgEIACgBQADgCAEAAQAEAAADACIABABQAFAEAAAFQAAAFgFAEQgDADgFAAQgFAAgEgDgA7pEfIAAAAgAN2lpItCm6QBWAfBSAhQGoCnFnDTgAHelpQAjg0gjg0Qg/gyhygCIgsAiIAABiQABAJAFAGIrBggIgXgYQgqgohSggIAAi6IHWggIGODUImOjUInWAgIAAC6QBSAgAqAoIAXAYIj2gLIgCgUQgCgWAAgXQAAhXAeheIAGgVIBDgEIhDAEIgGAVQgeBeAABXQAAAXACAWIACAUIgogCIg9jeIAAgBIACgFQAPgfAXAAIAAAAIABAAIAAAAIBcgGIhcAGIAAAAIgBAAIAAAAQgXAAgPAfIgCAFIAAABIgGgMQgDgJAAgJQAAgVAVgWIAUgQIADAAIBogNIAFAAQETggEbgGIBZAmQFwCdEcDMIAdARgAr3mgIhekoQAvgHAxgHIgUAQQgVAWAAAVQAAAJADAJIAGAMIA9DegEgg8gHzQE1hwEhhIIojDQgAzpndIA8hZIDSgnIAkCAgAsVp9g");
	this.shape_11.setTransform(7.75,1.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AcLDyIAZgnIAjASIgdAsgA87gdQgOgFAFgnQAEgmAVgwQAUgxAZgeQAYgeAOAFQANAHgEAlQg1ADgUCFQgEARAHANQgVAZgNAAIgEgBg");
	this.shape_12.setTransform(-81.3158,-8.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280.5,-83.2,561.1,166.5);


(lib.BBSwheelF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AASAAQAAAIgFAFQgFAFgIAAQgGAAgGgFQgFgFAAgIQAAgHAFgFQAGgFAGAAQAIAAAFAFQAFAFAAAHg");
	this.shape.setTransform(0.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMANQgFgGAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAGAFAAAHQAAAHgGAGQgFAFgHAAQgGAAgGgFg");
	this.shape_1.setTransform(0.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ACuj+QgeghiJgRQgLBPALBJQAVAsAngQQA7gzAwhPgADOjmIhhB3QgjA0BGgBQAsACArgIQAigHAhgNAiqEmQAdAPAcAKQAeAMAcAFQAZAFAYAAQBFgCBCgUQAGgCAGgCQAzgYAngnQAhghAagrIAihqQACgHACgIQANg7gJhSQgThIgrgxIhQhKQh+hSiFAhQhxAThBBJQhRBwgGBvQgBAPABAOQAFBbAaApQABABABACQAWA8A1AuQAZAVAfASgAEzg0IgRABQgfAEgcAHQgxANgqAVQgmAUAmAhQAoAYAzAXQAYAKAbALQAnhAgHg7QgEgagDgSQgEgXgFgLQgJg7g6g8QgLgNgOgMQgFgMgbgMAESCNIAIgaACWEKQAsgQAlgtQAXgbAUglIiSg1QhEgSAaBIQAaBIAcAkgABzEbIAjgRABzEbIgziAQgphKgsBKIgsCOQAFABAFABQBVANBVgdgAkogyIgFAjAjWjUQhEBEgOBeICLAHQBZAKg2hIgAgakwIAHCQQAEBIg9ghIhwhwIgaAVAAAhXQhJAEgGBNQgGBLBUANQBRAEAEhWQADhYhXABgAgakwQhOAFhUBCAhoEbQACgCABgDQAHgMAFgLQAag3AEg0QAJhRhIAlQg7Agg2AlAj/CYIB7hcQAugfgugXQhSgShXgDQgHBRAuBLgAkDCYIAEAAQgCAQAWAFQgDACgCABQAdAxAuAeQAcASAhAKQASAOAVAAAAHkwIghAA");
	this.shape_2.setTransform(-0.0113,0.0367);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ag3FQQgcgFgegMQgcgKgdgPQgfgSgZgVQg1gugWg8IgCgDQgagpgFhbQgBgOABgPQAGhvBRhwQBBhJBxgTQCFghB+BSIBQBKQArAxATBIQAJBSgNA7IgEAPIgiBqQgaArghAhQgnAngzAYIgMAEQhCAUhFACQgYAAgZgFgAhBEpIAKACQBVANBVgdIAjgRQAsgQAlgtQAXgbAUglIiSg1QhEgSAaBIQAaBIAcAkIAKAQIgjARIgziAQgphKgsBKIgsCOQgVAAgSgOQASAOAVAAgAjwCwQAdAxAuAeQAcASAhAKIADgFIAMgXQAag3AEg0QAJhRhIAlQg7Agg2AlQgUgFAAgNIAAgDIB7hcQAugfgugXQhSgShXgDQgHBRAuBLIAHALIgEAAIAEAAIAAADQAAANAUAFIgFADgAESCNIAIgaQAnhAgHg7IgHgsQgEgXgFgLQgJg7g6g8QgLgNgOgMIhhB3QgjA0BGgBQAsACArgIQAigHAhgNQAFALAEAXIgRABQgfAEgcAHQgxANgqAVQgmAUAmAhQAoAYAzAXIAzAVgAAFBSQBIAAAGhMIABgGIAAgGQAAhRhUAAIAAAAIAAAAIAAAAIAAAAQBUAAAABRIAAAGIgBAGQgGBMhIAAIgBAAIAAAAIgFAAQhOgMAAhEIAAgIQAGhNBJgEQhJAEgGBNIAAAIQAABEBOAMIAFAAIAAAAIABAAgAktgPIAFgjICLAHQBZAKg2hIIhchrIAagVIBwBwQA9AhgEhIIgHiQIAhAAQgLBPALBJQAVAsAngQQA7gzAwhPQAbAMAFAMQgFgMgbgMQgeghiJgRIghAAQhOAFhUBCIgaAVQhEBEgOBegAj/CYgAj/CYgAgakwg");
	this.shape_3.setTransform(-0.0113,0.0367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BBSwheelF, new cjs.Rectangle(-34.5,-35,69.1,70.1), null);


(lib.BBSwheelB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAVAAQAAAJgGAGQgGAGgJAAQgIAAgGgGQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIg");
	this.shape.setTransform(0.25,-0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAPQgGgHAAgIQAAgHAGgHQAHgGAHAAQAIAAAHAGQAGAHAAAHQAAAIgGAHQgHAGgIAAQgHAAgHgGg");
	this.shape_1.setTransform(0.25,-0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ACuj+QgeghiJgRQgLBPALBJQAVAsAngQQA7gzAwhPgADOjmIhhB3QgjA0BGgBQBOAEBMgeQgLhHhRhJQgFgMgbgMAEzg0IgRABQhVAMhBAhQgmAUAmAhQA6AjBUAhQAnhAgHg7QgEgagDgSQgEgXgFgLAkuCRQAeBaBmA7QBaAvBKAAQBMgCBHgYQBdgsA4hfIAihqQACgHACgIQANg7gJhSQgThIgrgxIhQhKQh+hSiFAhQhxAThBBJQhRBwgGBvQgBAPABAOQAFBfAbAkgAESCNIAIgaAESCNIiSg1QhEgSAaBIQAaBIAcAkIAKAQABzEbIAjgRQBFgaA3hjABzEbIgziAQgphKgsBKIgsCOAkogyIgFAjQgHBRAuBLIAHALIB7hcQAugfgugXQhSgShXgDAjWjUQhEBEgOBeICLAHQBZAKg2hIgAAAhXQhJAEgGBNQgGBLBUANQBRAEAEhWQADhYhXABgAgakwIAHCQQAEBIg9ghIhwhwAgakwQhOAFhUBCIgaAVAhoEbQACgCABgDQAlhDAFg/QAJhRhIAlQg7Agg2AlQgDACgCABQAvBPBZAcQASAOAVAAQBaAQBageAkDCYIAEAAQgCAQAWAFAAHkwIghAA");
	this.shape_2.setTransform(-0.0113,0.0367);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AiqEmQhmg7gehaQgbgkgFhfQgBgOABgPQAGhvBRhwQBBhJBxgTQCFghB+BSIBQBKQArAxATBIQAJBSgNA7IgEAPIgiBqQg4BfhdAsQhHAYhMACQhKAAhagvgAjrCtIgFADQAvBPBZAcQASAOAVAAQBaAQBageIgziAQgphKgsBKIgsCOQgVAAgSgOIADgFQAlhDAFg/QAJhRhIAlQg7Agg2AlQgUgFAAgNIAAgDIB7hcQAugfgugXQhSgShXgDIAFgjICLAHQBZAKg2hIIhchrIAagVIgaAVQhEBEgOBeIgFAjQgHBRAuBLIAHALIgEAAIAEAAIAAADQAAANAUAFgABzEbIAjgRQBFgaA3hjIiSg1QhEgSAaBIQAaBIAcAkIAKAQgAESCNIAIgaQAnhAgHg7IgHgsQgEgXgFgLQAFALAEAXIgRABQhVAMhBAhQgmAUAmAhQA6AjBUAhgAAFBSQBIAAAGhMIABgGIAAgGQAAhRhUAAIAAAAIAAAAIAAAAIAAAAQBUAAAABRIAAAGIgBAGQgGBMhIAAIgBAAIAAAAIgFAAQhOgMAAhEIAAgIQAGhNBJgEQhJAEgGBNIAAAIQAABEBOAMIAFAAIAAAAIABAAgAEqhWQgLhHhRhJQgFgMgbgMQgeghiJgRIghAAQhOAFhUBCIBwBwQA9AhgEhIIgHiQIAhAAQgLBPALBJQAVAsAngQQA7gzAwhPQAbAMAFAMIhhB3QgjA0BGgBQBOAEBMgegAAHkwg");
	this.shape_3.setTransform(-0.0113,0.0367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BBSwheelB, new cjs.Rectangle(-34.5,-35,69.1,70.1), null);


// stage content:
(lib.MPHFinalLSams = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.Stock_btn.addEventListener("click", ClickStock.bind(this));
		
		function ClickStock() {
			this.stockgtrFT.x = 621.8;
			this.stockgtrFT.y = 225.2;
			this.Gtr_stockwing.x = 124;
			this.Gtr_stockwing.y = 144.6;
			this.Gtr_stockwheelB.y = 195.35;
			this.Gtr_stockwheelF.x = 553.15;
			
		}
		
		
		this.BBSwheelF.on("pressmove", dragMe);
		this.BBSwheelB.on("pressmove", dragMe);
		this.Gtr_stockwheelB.on("pressmove", dragMe);
		this.Gtr_stockwheelF.on("pressmove", dragMe);
		this.Gtr_stockwing.on("pressmove", dragMe);
		this.LB_Walkbodykit.on("pressmove", dragMe);
		this.LB_walkEX.on("pressmove", dragMe);
		this.LB_walkFT.on("pressmove", dragMe);
		this.LB_walkwing.on("pressmove", dragMe);
		this.stockgtrFT.on("pressmove", dragMe);
		this.StreetEX.on("pressmove", dragMe);
		this.StreetFT.on("pressmove", dragMe);
		this.Streetwing.on("pressmove", dragMe);
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyA+QACgPAJgNQAJgOAYgRQAOgLAEgGQAEgFAAgFQAAgFgEgEQgEgFgGAAQgGAAgEAFQgEADgBALIgigDQACgOAFgIQAFgIAKgFQAKgEAQAAQASAAAKAEQAJAFAGAIQAGAIAAALQAAALgHAKQgGAJgRAMIgOAKIgHAHIA0AAIAAAcg");
	this.shape.setTransform(521.975,70.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyA+QACgPAJgNQAJgOAYgRQAOgLAEgGQAEgFAAgFQAAgFgEgEQgEgFgGAAQgGAAgEAFQgEADgBALIgigDQACgOAFgIQAFgIAKgFQAKgEAQAAQASAAAKAEQAJAFAGAIQAGAIAAALQAAALgHAKQgGAJgRAMIgOAKIgHAHIA0AAIAAAcg");
	this.shape_1.setTransform(510.625,70.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYA6QgJgFgGgJQgFgHgCgLQgDgMAAgOQAAgiANgOQAMgOAZAAQAMAAAIADQAIADAFAFQAFAFADAFQADAFABAIQAEAOAAAOQAAAhgMAPQgLAPgbAAQgOAAgKgFgAgMgfQgDAJAAAWQAAAXAEAIQAEAJAHAAQAFAAAEgDQADgEACgIQACgIAAgQQAAgYgEgIQgEgJgIAAQgIABgEAIg");
	this.shape_2.setTransform(499.425,70.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyA+QACgPAJgNQAJgOAYgRQAOgLAEgGQAEgFAAgFQAAgFgEgEQgEgFgGAAQgGAAgEAFQgEADgBALIgigDQACgOAFgIQAFgIAKgFQAKgEAQAAQASAAAKAEQAJAFAGAIQAGAIAAALQAAALgHAKQgGAJgRAMIgOAKIgHAHIA0AAIAAAcg");
	this.shape_3.setTransform(487.925,70.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrA8IgDgYQAHACAJABQAGgBADgCQAEgDADgHIglhXIAkAAIARA6IARg6IAhAAIgjBdQgGAQgGAGQgIAIgSAAIgWgCg");
	this.shape_4.setTransform(471.6,73.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpAnQgJgIAAgKQAAgLAGgGQAGgGAQgDIAYgFIAMgEQAAgGgDgCQgDgDgGAAQgHAAgFADQgDABgCAHIgggEQACgJADgFQAEgEAGgEQAFgDAIAAQAIgCAKAAQAOAAAJACQAJACAGAEQAFAFACAHQADAGAAAGIAAAmIAAAKIAEAJIggAAIgCgFIgCgGQgGAGgHADQgIAEgMAAQgPAAgIgHgAAAAGQgKAEgDACQgDADAAADQAAAEADACQADADAFAAQAFAAAFgDQAEgCADgEQACgEAAgHIAAgFIgOAEg");
	this.shape_5.setTransform(460.675,72.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAlA9IAAhcIgXBcIgbAAIgYhcIAABcIgeAAIAAh5IAxAAIASBJIAThJIAyAAIAAB5g");
	this.shape_6.setTransform(447,70.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIA7QgGgEgDgGQgDgHAAgPIAAgeIgMAAIAAgYIAMAAIAAgRIAhgRIAAAiIATAAIAAAYIgTAAIAAAfIABAHQACADAEAAIALgCIACAXQgMADgLAAQgMAAgGgDg");
	this.shape_7.setTransform(406.925,70.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiAtIAAhXIAgAAIAAAOQADgJAFgDQAFgEAHAAQAIAAAJAEIgLAZQgGgDgDAAQgHAAgEAGQgEAIAAATIAAAeg");
	this.shape_8.setTransform(400.125,72);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbA9IgGgUIgqAAIgGAUIgmAAIAuh5IAoAAIAtB5gAgNAOIAaAAIgNgqg");
	this.shape_9.setTransform(389.025,70.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvA+IAAh5IAfAAIAAANQAHgIAFgDQAHgEAIAAQASAAAKAOQAKANgBAUQABAVgLAMQgLALgQAAQgHAAgGgCQgGgDgGgFIAAAqgAgJgfQgFAFAAALQAAALAFAEQAEAFAGAAQAFAAAEgFQAFgEAAgLQAAgLgFgFQgDgFgHAAQgFAAgEAFg");
	this.shape_10.setTransform(371.3,73.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AApAtIAAgxQAAgGgCgDQgEgFgFAAQgGABgDAEQgEAEAAAJIAAAtIghAAIAAgwIgBgIQgBgDgCgCQgDgCgEAAQgFAAgEAFQgEAEAAAJIAAAtIgiAAIAAhXIAgAAIAAAMQAHgHAHgDQAGgEAKAAQALAAAFAEQAGAEAEAGQAIgIAHgDQAGgDAKAAQAOAAAIAIQAIAJAAARIAAA3g");
	this.shape_11.setTransform(356.925,72);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiAjQgQgNAAgWQAAgTAOgNQAOgNAWAAQAaAAAOAPQALAMAAASQAAAUgOANQgNANgYAAQgUAAgOgLgAgLgQQgFAGAAAKQAAAMAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgMQAAgLgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_12.setTransform(342.725,72.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbA5QgNgFgJgPQgJgOAAgXQAAgdAQgQQAQgRAcAAQAXAAAOAKQANAJAGATIghAIQgCgGgCgCQgDgFgFgDQgEgBgGAAQgMgBgGAKQgGAIAAAQQAAAUAHAIQAGAHAKAAQALAAAFgGQAGgGACgMIAhAKQgDAOgHAKQgHAIgLAFQgLAFgQAAQgTAAgMgGg");
	this.shape_13.setTransform(330.575,70.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghAnQgKgHgDgMIAigEQACAHADACQAEADAFAAQAIAAADgEQADgCAAgDQAAgEgEgCQgCgBgLgCQgSgDgHgDQgHgCgEgGQgFgFAAgIQAAgKAFgFQAFgHAJgDQAJgDAOAAQAQAAAHADQAIABAFAGQAEAFAEAIIggADQgBgEgDgBQgEgDgFgBQgFABgDACQgDACAAACQAAAEAEACQADABAKABQARACAIAEQAIADAFAGQAEAGAAAHQAAAIgEAHQgGAHgJAFQgKAEgRAAQgXAAgLgHg");
	this.shape_14.setTransform(290.3,72.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AApAtIAAgxQAAgGgCgDQgEgFgFAAQgGABgDAEQgEAEAAAJIAAAtIghAAIAAgwIgBgIQgBgDgCgCQgDgCgEAAQgFAAgEAFQgEAEAAAJIAAAtIgiAAIAAhXIAgAAIAAAMQAHgHAHgDQAGgEAKAAQALAAAFAEQAGAEAEAGQAIgIAHgDQAGgDAKAAQAOAAAIAIQAIAJAAARIAAA3g");
	this.shape_15.setTransform(276.725,72);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgpAnQgJgIAAgKQAAgLAGgGQAGgGAQgDIAYgFIAMgEQAAgGgDgCQgDgDgGAAQgHAAgFADQgDABgCAHIgggEQACgJADgFQAEgEAGgEQAFgDAIAAQAIgCAKAAQAOAAAJACQAJACAGAEQAFAFACAHQADAGAAAGIAAAmIAAAKIAEAJIggAAIgCgFIgCgGQgGAGgHADQgIAEgMAAQgPAAgIgHgAAAAGQgKAEgDACQgDADAAADQAAAEADACQADADAFAAQAFAAAFgDQAEgCADgEQACgEAAgHIAAgFIgOAEg");
	this.shape_16.setTransform(262.525,72.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgpAzQgMgMgBgTIAjgBQACAIADAFQAGAHAKAAQAIAAAEgDQAFgFAAgEQAAgFgFgEQgEgDgOgEQgZgFgKgJQgLgJAAgOQAAgJAGgJQAFgIALgFQALgFASAAQAXAAANAJQAMAIACAUIgjABQgCgIgEgDQgFgEgHAAQgGAAgEADQgDADAAADQAAAEADACQACACAKACQAYAGALAFQAKAGAFAGQAFAIAAAKQAAAMgGAKQgHAKgMAFQgLAFgSAAQgeAAgMgMg");
	this.shape_17.setTransform(250.675,70.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgvA9IAAh5IAmAAIAABbIA5AAIAAAeg");
	this.shape_18.setTransform(233.6,70.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgvCQQgVgGgPgLQgOgLgJgNQgJgOgGgVIBSgJQADAUAMAKQAKALAPAAQAQAAAMgNQALgNAAgaQAAgagLgMQgMgLgRAAQgMAAgLAEQgIAFgKALIhGgKIAaidIDBAAIAABBIiCAAIgHAsQAOgHANgDQAMgDANAAQAsAAAbAbQAcAZAAApQAAAcgOAaQgPAbgZANQgaAOgoAAQgcAAgVgFg");
	this.shape_19.setTransform(544.95,42.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag7COQgXgJgPgSQgPgSgIgcIBRgLQAFAZAKAKQAKAJAPAAQAQAAALgMQALgMAAgUQAAgUgKgMQgLgLgSAAQgJAAgQAFIAEg5IAKABQAPAAALgKQALgLAAgOQAAgNgIgIQgIgIgNAAQgPAAgJAJQgJAIgDAWIhNgOQAKglAbgTQAbgUAyAAQA5AAAZAWQAaAVAAAhQAAATgKAPQgLAPgVAMQARAEAJAGQAPAIAIAPQAIAOAAAVQAAAZgNAYQgOAXgZANQgZANgpAAQgnAAgXgKg");
	this.shape_20.setTransform(517.625,42.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAqCTIgvhaQgKgRgHgGQgKgGgMAAIgIAAIAAB3IhbAAIAAklICWAAQAqAAAWAHQAXAIANATQANAUABAcQAAAYgLASQgKASgSAKQgMAHgVAEQARAGAIAFQAEAEAKALQAKAMADAHIAsBVgAg0gbIAmAAQAHAAAQgEQAJgCAGgHQAFgHABgKQAAgOgJgIQgKgHgYAAIgnAAg");
	this.shape_21.setTransform(489.7,42.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAqCTIgvhaQgKgRgHgGQgKgGgMAAIgIAAIAAB3IhcAAIAAklICXAAQAqAAAWAHQAXAIANATQAOAUAAAcQAAAYgLASQgKASgSAKQgMAHgUAEQAQAGAIAFQAEAEAKALQAJAMAEAHIAsBVgAg0gbIAmAAQAHAAAQgEQAJgCAGgHQAFgHABgKQgBgOgIgIQgKgHgYAAIgnAAg");
	this.shape_22.setTransform(444.15,42.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgsCTIAAjcIhdAAIAAhJIETAAIAABJIhdAAIAADcg");
	this.shape_23.setTransform(411.725,42.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhPCGQghgSgSgjQgSgjAAguQAAgvATgjQAUgkAmgTQAegOAyAAQAwAAAZAJQAYAJAQASQAPATAIAcIhXAQQgFgRgNgIQgNgJgUAAQgdAAgSAVQgSAUAAAtQAAAvASAUQASAUAfAAQAQAAANgEQAOgEASgLIAAgcIg9AAIAAg8ICMAAIAAB9QgoAbgfAKQgfAKgqAAQgzAAghgSg");
	this.shape_24.setTransform(379.675,42.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAeBtIAAh0QAAgUgHgIQgIgJgNAAQgNAAgKALQgJAMAAAcIAABmIhSAAIAAjUIBNAAIAAAjQARgVARgJQAQgKAZAAQAiAAATAVQAUAUgBAqIAACGg");
	this.shape_25.setTransform(335.55,46.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhlBdQgVgRAAgaQAAgYAPgQQAOgOAngIIA5gNQAOgEAQgGQgBgPgFgGQgHgGgQAAQgSAAgLAHQgHAFgFAOIhOgJQAEgUAJgMQAIgMAPgIQAMgGAUgEQATgDAXAAQAjAAAXAEQAWAEAPANQAKAJAGARQAGAQAAAPIAABdQAAAPACAJQACAIAHANIhNAAIgGgMIgDgOQgQAQgPAGQgVAJgdAAQgmAAgTgSgAgBAQQgaAHgGAGQgHAHAAAIQAAAKAHAGQAGAGANAAQAOAAALgHQAMgGAFgKQAFgJAAgQIAAgNQgSAGgQAFg");
	this.shape_26.setTransform(308.2,46.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhQBeQgZgQgHgfIBRgHQAFAOAJAGQAJAGAOAAQAQAAAKgHQAGgFAAgIQAAgIgJgFQgGgEgcgFQgqgHgQgGQgRgHgLgNQgMgPAAgUQAAgVANgPQAMgPAVgIQAVgHAkAAQAlAAATAGQASAFAMANQAMAMAIAVIhOAHQgCgKgIgFQgJgGgMAAQgOAAgHAFQgGAFAAAHQAAAIAIAEQAIAEAaADQApAEATAJQAUAIALAOQAKAPAAASQAAATgLARQgLARgYALQgYAKgpAAQg6AAgYgRg");
	this.shape_27.setTransform(281.75,46.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhQBeQgZgQgHgfIBRgHQAFAOAJAGQAJAGAOAAQARAAAIgHQAIgFgBgIQABgIgKgFQgHgEgbgFQgqgHgQgGQgRgHgMgNQgLgPAAgUQAAgVANgPQALgPAWgIQAVgHAkAAQAlAAATAGQASAFAMANQAMAMAIAVIhNAHQgEgKgGgFQgKgGgNAAQgOAAgFAFQgHAFAAAHQAAAIAIAEQAIAEAaADQAoAEAVAJQATAIALAOQAKAPAAASQAAATgLARQgLARgYALQgYAKgpAAQg5AAgZgRg");
	this.shape_28.setTransform(256.7,46.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgoCTIAAjUIBRAAIAADUgAgohaIAAg4IBRAAIAAA4g");
	this.shape_29.setTransform(237.575,42.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AA3CTIhtigIAACgIhWAAIAAklIBWAAIBtCiIAAiiIBWAAIAAElg");
	this.shape_30.setTransform(213.7,42.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Body Parts
	this.LB_walkEX = new lib.LB_walkEX();
	this.LB_walkEX.name = "LB_walkEX";
	this.LB_walkEX.setTransform(715.2,133.95);

	this.BBSwheelB = new lib.BBSwheelB();
	this.BBSwheelB.name = "BBSwheelB";
	this.BBSwheelB.setTransform(820,145.9);

	this.LB_Walkbodykit = new lib.LB_Walkbodykit();
	this.LB_Walkbodykit.name = "LB_Walkbodykit";
	this.LB_Walkbodykit.setTransform(301.3,590.75);

	this.StreetEX = new lib.StreetEX();
	this.StreetEX.name = "StreetEX";
	this.StreetEX.setTransform(716.35,169.1);

	this.LB_walkFT = new lib.LB_walkFT();
	this.LB_walkFT.name = "LB_walkFT";
	this.LB_walkFT.setTransform(887.4,412.1);

	this.StreetFT = new lib.StreetFT();
	this.StreetFT.name = "StreetFT";
	this.StreetFT.setTransform(775.15,411.25);

	this.stockgtrFT = new lib.stockgtrFT();
	this.stockgtrFT.name = "stockgtrFT";
	this.stockgtrFT.setTransform(672,412.1);

	this.LB_walkwing = new lib.LB_walkwing();
	this.LB_walkwing.name = "LB_walkwing";
	this.LB_walkwing.setTransform(872.95,305.95,1,1,0,0,0,0.2,0);

	this.Streetwing = new lib.Streetwing();
	this.Streetwing.name = "Streetwing";
	this.Streetwing.setTransform(769,286.6);

	this.Gtr_stockwing = new lib.Gtr_stockwing();
	this.Gtr_stockwing.name = "Gtr_stockwing";
	this.Gtr_stockwing.setTransform(686.5,332.7);

	this.BBSwheelF = new lib.BBSwheelF();
	this.BBSwheelF.name = "BBSwheelF";
	this.BBSwheelF.setTransform(903.15,144.2);

	this.Gtr_stockwheelF = new lib.Gtr_StockwheelF();
	this.Gtr_stockwheelF.name = "Gtr_stockwheelF";
	this.Gtr_stockwheelF.setTransform(897.7,66.25);

	this.Gtr_stockwheelB = new lib.Gtr_stockwheelB();
	this.Gtr_stockwheelB.name = "Gtr_stockwheelB";
	this.Gtr_stockwheelB.setTransform(819.3,67.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAFIgBAAIgBgDIgBgCIABgCIABgBIABAAIABgBIABAAIABABQADABAAACIgCAFIgBAAIgCAAg");
	this.shape_31.setTransform(172.475,309.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.Gtr_stockwheelB},{t:this.Gtr_stockwheelF},{t:this.BBSwheelF},{t:this.Gtr_stockwing},{t:this.Streetwing},{t:this.LB_walkwing},{t:this.stockgtrFT},{t:this.StreetFT},{t:this.LB_walkFT},{t:this.StreetEX},{t:this.LB_Walkbodykit},{t:this.BBSwheelB},{t:this.LB_walkEX}]}).wait(1));

	// Character
	this.Gtr_r35 = new lib.Gtr_r35();
	this.Gtr_r35.name = "Gtr_r35";
	this.Gtr_r35.setTransform(366.1,194.1);

	this.instance = new lib.LB_walkbtn();
	this.instance.setTransform(475.6,546.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Streetbtn();
	this.instance_1.setTransform(306.1,546.3);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.Stock_btn = new lib.Stockbtn();
	this.Stock_btn.name = "Stock_btn";
	this.Stock_btn.setTransform(136.6,546.3);
	new cjs.ButtonHelper(this.Stock_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Stock_btn},{t:this.instance_1},{t:this.instance},{t:this.Gtr_r35}]}).wait(1));

	// Frame
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_32.setTransform(480,320);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_33.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,329,462,302);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#333333",
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
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;