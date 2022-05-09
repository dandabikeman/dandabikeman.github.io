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


(lib.flap = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF9999").s().p("AgTBHIAAgjIAnAAIAAAjgAgMAaIgIhAIAAghIApAAIAAAhIgIBAg");
	this.shape.setTransform(53.425,149.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAPgPQAQgPAbAAQAWAAANAGQAMAHAHANQAHANAAATIAAAFIhPAAQABAJAFAFQAGAHAHAAQAHAAAFgDIAGgHIAoAEQgJAQgNAGQgMAHgYAAQgUAAgLgGgAgOgWQgDAEgCAKIAmAAQgBgMgEgFQgGgFgIAAQgIAAgGAIg");
	this.shape_1.setTransform(43.45,151.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9999").s().p("AgmAuQgMgIgEgPIAngEQADAHAEADQAEADAHAAQAIAAAFgDQADgDAAgDQAAgFgEgCIgRgEQgUgEgJgDQgHgDgGgGQgGgIAAgJQABgKAGgIQAFgHALgEQAKgDARAAQATAAAIADQAJACAGAGQAGAGAEAKIgmAEQgBgFgEgCQgEgDgGAAQgHAAgDACQgDACAAAEQAAAEAEACQADACANABQAUACAKAEQAJAEAFAHQAFAHAAAJQAAAJgFAJQgFAIgMAFQgMAFgUAAQgcAAgLgIg");
	this.shape_2.setTransform(30.55,151.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9999").s().p("AgTBHIAAhmIAnAAIAABmgAgTgsIAAgbIAnAAIAAAbg");
	this.shape_3.setTransform(21.225,149.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9999").s().p("AgoA1IAAhnIAlAAIAAARQAFgLAFgEQAGgEAJAAQAIAAALAFIgNAdQgHgDgEAAQgHAAgFAGQgFAJAAAYIAAAjg");
	this.shape_4.setTransform(14.325,150.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9999").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_5.setTransform(2.575,152.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9999").s().p("AgoA1IAAhnIAlAAIAAARQAFgLAFgEQAGgEAJAAQAIAAALAFIgNAdQgHgDgEAAQgHAAgFAGQgFAJAAAYIAAAjg");
	this.shape_6.setTransform(-7.925,150.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9999").s().p("AgsArQgKgKAAgUIAAhBIAoAAIAAA4QAAAJAEAEQAEAFAGAAQAGAAAEgGQAFgFAAgOIAAgxIAoAAIAABmIglAAIAAgRQgJALgIAFQgHAEgNAAQgQAAgJgKg");
	this.shape_7.setTransform(-19.95,151.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9999").s().p("AgmAuQgMgIgEgPIAngEQADAHAEADQAEADAHAAQAIAAAFgDQADgDAAgDQAAgFgEgCIgRgEQgUgEgIgDQgJgDgFgGQgGgIAAgJQABgKAFgIQAHgHAKgEQAKgDARAAQASAAAJADQAJACAGAGQAGAGAEAKIgmAEQgBgFgEgCQgFgDgFAAQgHAAgDACQgDACAAAEQAAAEAEACQAEACAMABQAUACAJAEQAKAEAFAHQAFAHAAAJQAAAJgFAJQgFAIgMAFQgMAFgUAAQgbAAgMgIg");
	this.shape_8.setTransform(-32.8,151.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9999").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_9.setTransform(57.325,120.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9999").s().p("AgoA1IAAhmIAlAAIAAAQQAFgLAFgEQAGgEAJAAQAIAAALAGIgNAbQgHgCgEAAQgHAAgFAGQgFAKAAAXIAAAjg");
	this.shape_10.setTransform(40.425,120.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9999").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_11.setTransform(28.425,120.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9999").s().p("AgZBJIAAhKIgPAAIAAgdIAPAAIAAgFIACgOQAAgHAFgFQADgFAHgDQAHgDAMAAQAKAAAUADIgEAYIgLgCQgGAAgCACQgDACgBAEIAAAJIASAAIAAAdIgSAAIAABKg");
	this.shape_12.setTransform(18.2,118.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9999").s().p("AAQBIIgUgqIgPAPIAAAbIgpAAIAAiOIApAAIAABJIAdgiIAxAAIgmAjIAoBEg");
	this.shape_13.setTransform(1.225,118.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9999").s().p("AgXAzQgLgDgIgHQgIgHgFgJQgEgJAAgQQAAgPAFgKQAFgIAHgGQAGgGAIgEQAMgEAQAAQAaAAAOAJQANAJAFARIglAFQgCgGgFgEQgEgDgIAAQgJAAgGAHQgGAHAAANQAAANAGAHQAGAGAJAAQAHAAAFgEQAFgEAEgIIAlAEQgDAMgHAJQgHAJgLAEQgMAFgQAAQgQAAgLgDg");
	this.shape_14.setTransform(-12.7,120.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9999").s().p("AgTBIIAAhnIAnAAIAABngAgTgrIAAgbIAnAAIAAAbg");
	this.shape_15.setTransform(-22.725,118.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9999").s().p("AgTBIIAAiOIAnAAIAACOg");
	this.shape_16.setTransform(-29.375,118.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9999").s().p("AgXAzQgLgDgIgHQgIgHgFgJQgEgJAAgQQAAgPAFgKQAFgIAGgGQAIgGAHgEQALgEARAAQAaAAAOAJQANAJAFARIglAFQgCgGgEgEQgFgDgIAAQgJAAgGAHQgGAHAAANQAAANAGAHQAGAGAIAAQAIAAAGgEQAFgEADgIIAlAEQgDAMgHAJQgHAJgLAEQgMAFgQAAQgQAAgLgDg");
	this.shape_17.setTransform(-39.35,120.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF9999").ss(5,1,1).p("AJZQFMAsIgqUMhrBAAAQCjCfCjCdQAhAfAgAfQJhJJJZIqQDkDRDiDNQHFGcHCGLQAQgMASgKQALgIANgHQDPhwEjAAQEQAADGBhQAOAHAPAIQAGAEAGADQDCBvAACbQAACfjOBxQjPBxkkAAQkjAAjPhxQjOhxAAifQAAiHCUhl");
	this.shape_18.setTransform(0,0.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCCCC").s().p("AnyEQQjOhwAAigQAAiGCUhlQAQgLASgLIAYgPQDPhwEjAAQEPAADHBhIAdAPIALAIQDDBuAACaQAACgjOBwQjPBxkkAAQkjAAjPhxg");
	this.shape_19.setTransform(9,129.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#99CC99").s().p("A1ZIzQjijOjjjRQpaoqphpIIhBg+IlGk8MBrBAAAMgsJAqUIgLgHIgdgPQjHhikPAAQkjAAjPBxIgYAOQgSALgQALQnCmKnFmcg");
	this.shape_20.setTransform(0,-31.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flap, new cjs.Rectangle(-345,-170.4,690,340.9), null);


(lib.btnopen = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF9999").ss(5,1,1).p("ALBAAQAACgjOBwQjPBxkkAAQkjAAjPhxQjOhwAAigQAAiVC2hsQALgIANgHQDPhwEjAAQEQAADGBhQAOAHAPAIQDOBxAACfg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("AnyEQQjOhwAAigQAAiVC2hsIAYgPQDPhwEjAAQEPAADHBiIAdAOQDOByAACeQAACgjOBwQjPBxkkAAQkjAAjPhxg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AnyEQQjOhwAAigQAAiVC2hsIAYgPQDPhwEjAAQEPAADHBiIAdAOQDOByAACeQAACgjOBwQjPBxkkAAQkjAAjPhxg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("AnyEQQjOhwAAigQAAiVC2hsIAYgPQDPhwEjAAQEPAADHBiIAdAOQDOByAACeQAACgjOBwQjPBxkkAAQkjAAjPhxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-41,146,82);


(lib.BasicButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBTQgIgFgEgJQgEgJAAgVIAAgrIgSAAIAAgjIASAAIAAgXIAvgYIAAAvIAaAAIAAAjIgaAAIAAArQAAAIABADQADADAFAAQAGAAAJgDIAEAiQgSADgPAAQgRAAgJgEg");
	this.shape.setTransform(74.825,25.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA+IgXgoIgaAoIg0AAIAthAIgqg7IA4AAIATAiIAXgiIA0AAIgqA7IAuBAg");
	this.shape_1.setTransform(61.525,27.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAuAEQgLATgPAIQgPAIgcAAQgYAAgOgHgAgRgbQgFAGAAALIAuAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_2.setTransform(46.15,27.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAgBWIg/hdIAABdIgyAAIAAirIAxAAIBABeIAAheIAyAAIAACrg");
	this.shape_3.setTransform(28.1,25.5);

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

	// Squared
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_8.setTransform(50,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_9.setTransform(50,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_10.setTransform(50,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_11.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_10},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_8}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.PracticeCardRSaiz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,33,51];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on the current frame
		
		this.surprise_button.addEventListener("click", fl_ClickToPlay.bind(this));
		this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_33 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33).call(this.frame_33).wait(18).call(this.frame_51).wait(1));

	// credits
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgQA7QgSgFgIAAQgFAAgGAFQgFADgCAAQgGAAAAgDQABgCADgEQAHgJAigfIAngkIAWgXQgNAEgLAAIgOgBIgMgBQgFAAgCACQgCACAAADQgBAFAGABQAGABABAFQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgDACgDAAQgEAAgFgFQgFgFABgIQgBgKAJgHQAIgHAMAAIARACQASACAIAAQAHAAAHgFQAEgCACAAIACABIABACIgBADIgWAXIgtArIghAeIANAAIAMABIARAFQAPAFAKAAQAGAAADgDQAEgDAAgEQgBgDgCgEIgCgHQAAgDADgDQACgCADAAQAFAAACADQADAEAAAFQAAAIgFAJQgHAJgJAFQgJAFgNAAQgLAAgUgGg");
	this.shape.setTransform(318,750.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgYBcQgDgDAAgGQAAgSAWhGIABgHQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgEACQgEACgNAMIgGgEQAPgRAMgGQALgHAIAAQAFAAACACQADACAAAEQAAAEgKAfQgOAzAAAMIABADQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAEAAATgSIAGAGQgUASgIAGQgKAFgGAAQgFAAgDgDgAAQhHQgDgDAAgEQAAgHAEgFQAEgEAGAAQAFAAACADQADADAAAEQAAAHgEAFQgFAFgFAAQgFAAgCgEg");
	this.shape_1.setTransform(309.125,747.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAEBAQgCgCAAgDIABgGIAGgUQgLAPgSALQgLAHgIAAQgJAAgEgGQgHgIAAgNQAAgQAJgTQAIgSAOgPQAOgQAOgHQAMgGATAAIAJABIAEgGIAJgCIgLAlQgGAWgGAcIgDAUQAAAFADAAQADAAAFgDQAJgGAIgIIAFAGIgVASQgKAHgIADQgGACgFAAQgEAAgCgCgAgKgjQgKAHgIATQgJASAAATQAAAKAEAEQADAFAGAAQAKAAALgLQALgLAFgVIAMgtIgNgBQgMAAgKAHg");
	this.shape_2.setTransform(298.675,750.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag+BYQgOgLAAgMQAAgHADgEQAEgEAFAAQAFAAADAEQACADACAHQACALAEAEQAEAEAFAEQAGACAHAAQAVAAAPgOQAPgOAAgRQAAgGgCgGQgCgFgFgIQgEgFgMgNQgMgLgCgFQgGgGgBgHQgCgHAAgGQAAgNAJgOQAIgOANgHQAPgJASAAQAJAAANADIAOADIgGASIgEAhIgIAAIABgXQABgLgHgHQgFgGgLgBQgQAAgMAMQgLAMAAAOQAAAIACAHQAEAFALAMQAUATAHALQAGAMABALQAAAQgKAOQgKAQgTAJQgSAKgVAAQgVAAgOgLg");
	this.shape_3.setTransform(285,749.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgKAOQgEgEAAgHQAAgIAFgGQAEgGAGAAQAGAAAEAEQAEAFAAAHQAAAIgFAFQgFAGgFAAQgGAAgEgEg");
	this.shape_4.setTransform(267.175,755.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAtBnQgMgGgNgQQgMgQgIgVQgEgLgKgeIgGgUIgEAAIgDAAIgUBMIAMABQAFAAAKgCIgCAHIgOACIgRgBIgRgBQgMABgPADIACgJQARgEAFgDQAHgHAEgQIAUhQIAEgTQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgBgGAAIACgHQAPAAAUgGIgFARIgKArIALACQASAAANgNQANgNAAgSQAAgNgLgJQgKgJgRAAQgXAAgWAMQgWALgLAQQgLARAAASQAAANALAKIAHAGQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAACgCADQgDACgDAAQgIABgGgKQgIgLAAgSQAAgWAMgUQANgTAZgNQAZgNAcAAQAZAAARAKQARAKAAATQAAATgQAPQgPAPgaAFIAIARIAJAbQAPArAPATQAMAMAOABQAOAAAEgNQADgIABgCQAEgCADgBQAEABACACQACACAAAEQAAAJgKAIQgKAIgQAAQgNABgOgIg");
	this.shape_5.setTransform(259.15,750.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgWAdQANgKAHgKQAEgHAAgDQAAgFgDgGQgDgHAAgEQAAgGAEgEQADgEAFAAQAHAAAEAFQAEAFAAAHQAAAIgFAKQgDAJgJAJQgMANgOAJg");
	this.shape_6.setTransform(235.15,757.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAIBXIgXgBIgtACIADgJQAOgUAagZQAZgYAIgKQALgOAFgMQAEgKAAgIQAAgOgHgHQgIgIgKAAQgJgBgHAHQgJAGgJARIgHgEQALgXANgJQALgJAQAAQASAAALAMQALAMAAAPQAAAKgEAKQgEAKgJALQgGAHgaAVQgjAfgOATIAmgBIAMABQALAAAEgDQAEgDAJgOIAKAAQgMARgJAYIgWgDg");
	this.shape_7.setTransform(227.375,748.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAIBXIgXgBIgtACIADgJQAOgUAagZQAZgYAIgKQALgOAFgMQAEgKAAgIQAAgOgHgHQgIgIgKAAQgJgBgHAHQgJAGgJARIgHgEQALgXANgJQALgJAQAAQASAAALAMQALAMAAAPQAAAKgEAKQgEAKgJALQgGAHgaAVQgjAfgOATIAmgBIAMABQALAAAEgDQAEgDAJgOIAKAAQgMARgJAYIgWgDg");
	this.shape_8.setTransform(214.175,748.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AguBKQgNgQABgbQAAggAMgfQANgfAQgNQAPgNAPAAQAVAAANAPQANAQgBAeQAAArgVAlQgXAmgdAAQgTAAgNgQgAgHhEQgJAMgIAgQgJAfABAeQgBAXAIALQAGAKAJAAQAHAAAHgHQALgMAJggQAJgfAAghQABgZgIgMQgFgJgKAAQgKAAgIAMg");
	this.shape_9.setTransform(201.7,748.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAIBXIgXgBIgtACIADgJQAOgUAagZQAZgYAIgKQALgOAFgMQAEgKAAgIQAAgOgHgHQgIgIgKAAQgJgBgHAHQgJAGgJARIgHgEQALgXANgJQALgJAQAAQASAAALAMQALAMAAAPQAAAKgEAKQgEAKgJALQgGAHgaAVQgjAfgOATIAmgBIAMABQALAAAEgDQAEgDAJgOIAKAAQgMARgJAYIgWgDg");
	this.shape_10.setTransform(187.775,748.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhDBgQgFgDAAgFQAAgEAEgEQADgCAHgBIAOACIANACQAIABAKgIQANgLAIgNQAIgPAAgOQAAgVgGgbQgGgcgKgQQgFgHgHAAQgGgBgOAKIgEgGIAKgIQAQgLAGgDIAHgCQADAAACAEQANAQAIAcQAKAcAAAYIgBALQAZgtAAgbQAAgFgDgKQgCgKAAgFQAAgDACgDQAEgEADAAQAGAAACAFQAEAEAAAHQAAATgJAcQgJAcgSAgQgSAggQAQQgOAPgPAIQgOAGgNABQgJgBgFgEg");
	this.shape_11.setTransform(167.3,754.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAEBAQgCgCAAgDIABgGIAGgUQgLAPgSALQgLAHgIAAQgJAAgEgGQgHgIAAgNQAAgQAJgTQAIgSAOgPQAOgQAOgHQAMgGATAAIAJABIAEgGIAJgCIgLAlQgGAWgGAcIgDAUQAAAFADAAQADAAAFgDQAJgGAIgIIAFAGIgVASQgKAHgIADQgGACgFAAQgEAAgCgCgAgKgjQgKAHgIATQgJASAAATQAAAKAEAEQADAFAGAAQAKAAALgLQALgLAFgVIAMgtIgNgBQgMAAgKAHg");
	this.shape_12.setTransform(156.525,750.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("Ah2BeQgEgEgBgEQAAgEADgDQAEgDAEAAIAKACIAKABQAIAAAHgFQALgIAMgTQAKgUAJgiQAJgjACgiQghAAgVARQgRANAAAQQABAHAHAKQAFAGgBADQAAAEgCABQgDADgDAAQgFAAgFgGQgGgIAAgMQAAgRAMgPQALgPATgIQAVgIAagBQAOAAAIgCIgBAOIABAGIAIBvQAkg9AigoQAYgcARgKQgJAbgNAuIgRBFIgEARIgEAQQAMADAIAAIAQgCIgBAJIgMABIgRgBIgQgCQgJAAgJADQAIgVAJgjIALgsQAIgdAFgLQgMANgYAkQgUAcgYAsIgNAWIgLidQgDAogLAiQgKAigNATQgOATgNAHQgOAIgNAAQgIAAgEgDg");
	this.shape_13.setTransform(137.45,748.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgKAOQgEgEAAgHQAAgIAFgGQAEgGAGAAQAGAAAEAEQAEAFAAAHQAAAIgFAFQgFAGgFAAQgGAAgEgEg");
	this.shape_14.setTransform(113.675,755.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgfBLQgEgEAAgIQAAgLAGgWIAPg5IgYAAIADgKIAYAAIAIghIAWgIIgLApIAfAAIgDAKIgeAAIgMAwQgGAWAAAJQAAAEACACQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQAEAAAIgFQANgHALgJIAFAGQggAZgJAFQgLAFgHAAQgFAAgDgEg");
	this.shape_15.setTransform(107.475,749.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgtBBIAKgnIANg2IABgIQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQgCAAgFADQgEADgMAMIgFgFQAOgPAOgIQAOgHAIAAQAAAAABAAQABAAAAAAQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgBAKIgGAbQAOgYATgQQAJgIAGAAQAEAAADADQADACAAAEQAAAEgDADQgDADgLAEQgLADgHAFQgHAGgIAKQgHALgDAHQgDAHgHAdIgHAcg");
	this.shape_16.setTransform(99.125,750.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AhiBqQgEgDAAgFQAAgEACgCQADgDADAAIAGABIAMACQAJAAAMgLQAUgSAkg7QArhAAageQgkADgJADQgMAEgGAIQgGAIAAAIIACAHIACAIQAAADgDADQgCACgDAAQgFAAgDgDQgDgEAAgIQAAgKAGgKQAFgKAKgHQAKgGAPgEQAIgCAUgBIAWgDQAHgCAGgFIgGAfIgMBUIgGA8QAKADAJAAIANgBIgCAIIgJABIgOgBIgRgCIgTACQAEgLADgNQADgJACgWIg1ABQgkA5gSAPQgRAOgQAAQgIAAgEgDgAAugrIglA3IAjAAIALAAQAHg7AHgbIgXAfg");
	this.shape_17.setTransform(81.575,749.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgmBhQgOAAgWACIABgHQAMgBAFgFQAFgFADgMIAbhvIAHgiQAAgFgEAAQgGABgTASIgFgFQANgQAOgIQANgIAIAAQAEAAACACQACACAAAEIgBAIIgGAVQAXgWAIgFQANgJAMAAQAIAAAFAHQAFAHAAAOQAAAkgWAgQgXAegaAAQgKABgKgGIgNAwIgBAHQAAAGAEACQAGAEAUACIgBAHIglgCgAAYhIQgNALgHALQgFAHgEATIgHAfQALALALAAQARAAAOgaQANgbAAgbQAAgIgDgEQgEgFgGAAQgIABgJAGg");
	this.shape_18.setTransform(60.1,754.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AAmA8QgDgFgBgHQAAgHACgJIANgqQAHgYAAgGQAAgFgEAAQgEAAgGAEQgMAHgJAMQgGAHgFAPIgNA7IgVAAIAWhYIACgLQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgEAAgJAGQgOAKgHAKQgFAKgFATIgLAxIgWAAIARhFIAIggQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgGAAgSARIgEgGQAPgPANgGQANgHAHAAIAFABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIgDALIgEATQAigjASAAQAFAAADADQACACAAAGQAAAGgFAPQARgSANgHQALgHAIAAQAFAAAEAEQADADAAAHIgBAKIgKAlQgMAlAAAHQAAAFAEABQADAAADgDQAIgGAJgIIAFAFIgLAKQgMALgFACQgIAFgGAAQgEAAgEgEg");
	this.shape_19.setTransform(45.7,750.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgqA1QgKgKAAgSQAAgdASgaQAVggAhgBQAOAAAJAMQAKALAAAUQAAAggXAaQgWAZgZAAQgQAAgJgKgAgQgiQgMASAAAeQABAUAGAKQAGAJAJgBQALAAAKgPQANgTAAgdQAAgWgGgJQgGgJgJAAQgMAAgLARg");
	this.shape_20.setTransform(30.25,750.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgtBeQgPgKgIgQQgJgRAAgXQAAgfARggQARggAZgRQAYgRAYAAQAJAAAJACIAeAKQgJAZgBAbIgIAAIABgSQAAgVgIgIQgJgIgNAAQgRAAgSAOQgTAOgNAeQgOAeAAAeQAAAfANAQQAMARATAAQAZAAAVgfQACgDADAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAEgJAMQgKALgPAIQgPAHgNAAQgSAAgOgIg");
	this.shape_21.setTransform(17.425,749.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},34).wait(18));

	// button
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF9999").s().p("AgTBIIAAgjIAnAAIAAAjgAgMAbIgIhBIAAggIApAAIAAAgIgIBBg");
	this.shape_22.setTransform(572.925,523);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF9999").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAQgPQAPgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhPAAQACAJAEAFQAFAHAJAAQAGAAAFgDIAHgHIAnAEQgJAQgNAGQgMAHgYAAQgUAAgLgGgAgOgWQgEAEgBAKIAnAAQgCgMgFgFQgEgFgIAAQgJAAgGAIg");
	this.shape_23.setTransform(562.95,524.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF9999").s().p("AgmAuQgMgIgEgPIAngEQADAHAEADQAFADAGAAQAIAAAFgDQADgDAAgDQAAgFgEgCIgRgEQgVgEgHgDQgJgDgFgGQgGgIABgJQAAgKAFgIQAHgHAKgEQAKgDARAAQASAAAJADQAJACAGAGQAGAGAEAKIgmAEQgCgFgDgCQgFgDgFAAQgHAAgDACQgDACAAAEQAAAEAEACQAEACAMABQAUACAJAEQAKAEAFAHQAFAHAAAJQAAAJgFAJQgFAIgMAFQgMAFgUAAQgbAAgMgIg");
	this.shape_24.setTransform(550.05,524.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9999").s().p("AgTBIIAAhnIAnAAIAABngAgTgrIAAgbIAnAAIAAAbg");
	this.shape_25.setTransform(540.725,523);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF9999").s().p("AgoA1IAAhmIAlAAIAAAQQAFgLAFgEQAGgEAJAAQAIAAALAGIgNAbQgHgCgEAAQgHAAgFAGQgFAKAAAXIAAAjg");
	this.shape_26.setTransform(533.825,524.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF9999").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_27.setTransform(522.075,526.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF9999").s().p("AgoA1IAAhmIAlAAIAAAQQAFgLAFgEQAGgEAJAAQAIAAALAGIgNAbQgHgCgEAAQgHAAgFAGQgFAKAAAXIAAAjg");
	this.shape_28.setTransform(511.575,524.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF9999").s().p("AgtArQgJgKAAgUIAAhBIAoAAIAAA4QAAAKAEAEQAEAEAGAAQAGAAAEgFQAFgGAAgNIAAgyIAoAAIAABnIgmAAIAAgRQgIAKgIAEQgIAFgMAAQgQAAgKgKg");
	this.shape_29.setTransform(499.55,525.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF9999").s().p("AgmAuQgNgIgDgPIAogEQACAHAEADQAFADAGAAQAIAAAFgDQADgDAAgDQAAgFgEgCIgRgEQgVgEgHgDQgJgDgFgGQgGgIABgJQAAgKAFgIQAGgHAKgEQALgDARAAQASAAAJADQAJACAGAGQAGAGAEAKIgmAEQgCgFgDgCQgFgDgFAAQgHAAgDACQgDACAAAEQAAAEAEACQADACANABQATACAKAEQAKAEAFAHQAFAHAAAJQAAAJgFAJQgFAIgMAFQgMAFgUAAQgbAAgMgIg");
	this.shape_30.setTransform(486.7,524.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9999").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_31.setTransform(576.825,494.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF9999").s().p("AgoA1IAAhmIAlAAIAAARQAFgMAFgEQAGgEAJAAQAIAAALAFIgNAcQgHgCgEAAQgHAAgFAHQgFAJAAAXIAAAjg");
	this.shape_32.setTransform(559.925,494.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF9999").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_33.setTransform(547.925,494.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF9999").s().p("AgZBJIAAhKIgPAAIAAgdIAPAAIAAgFIABgOQABgHAFgFQADgFAHgDQAHgDAMAAQAKAAAUADIgEAYIgLgCQgGAAgCACQgDACgBAEIAAAJIATAAIAAAdIgTAAIAABKg");
	this.shape_34.setTransform(537.7,492.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF9999").s().p("AAQBHIgUgpIgPAPIAAAaIgpAAIAAiOIApAAIAABJIAdghIAxAAIgmAjIAoBDg");
	this.shape_35.setTransform(520.725,492.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF9999").s().p("AgXAzQgLgDgIgHQgIgHgFgJQgEgJAAgQQAAgPAGgKQADgIAIgGQAGgGAIgEQALgEASAAQAZAAAOAJQAMAJAGARIglAFQgCgGgFgEQgEgDgIAAQgJAAgGAHQgGAHAAANQAAANAGAHQAGAGAJAAQAHAAAFgEQAGgEACgIIAmAEQgDAMgHAJQgHAJgMAEQgLAFgRAAQgPAAgLgDg");
	this.shape_36.setTransform(506.8,494.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF9999").s().p("AgTBHIAAhmIAnAAIAABmgAgTgsIAAgbIAnAAIAAAbg");
	this.shape_37.setTransform(496.775,492.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF9999").s().p("AgTBHIAAiOIAnAAIAACOg");
	this.shape_38.setTransform(490.125,492.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF9999").s().p("AgXAzQgLgDgIgHQgIgHgFgJQgEgJAAgQQAAgPAFgKQAFgIAHgGQAGgGAIgEQALgEASAAQAZAAAOAJQANAJAFARIglAFQgCgGgFgEQgEgDgIAAQgJAAgGAHQgGAHAAANQAAANAGAHQAGAGAJAAQAHAAAFgEQAFgEADgIIAmAEQgDAMgHAJQgHAJgMAEQgLAFgQAAQgQAAgLgDg");
	this.shape_39.setTransform(480.15,494.775);

	this.surprise_button = new lib.btnopen();
	this.surprise_button.name = "surprise_button";
	this.surprise_button.setTransform(528.5,503.4);
	new cjs.ButtonHelper(this.surprise_button, 0, 1, 2);

	this.btn_Next = new lib.BasicButton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.setTransform(888.9,698.95);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.surprise_button},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).to({state:[]},1).to({state:[{t:this.btn_Next}]},32).wait(19));

	// artwork
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("EhRPAAAMCifAAA");
	this.shape_40.setTransform(508,672.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("Eg+pADNIAAmZEhRPADNISmAAMCP5AAA");
	this.shape_41.setTransform(508,652.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("Eg+pgByQgfgDgXgXQgagZAAglQAAgkAagZQAagaAkAAQAkAAAZAaQAaAZAAAkQAAAlgaAZQgZAagkAAQgEAAgEAAIAAgFEg+pAEiIAAmUEhRPAEiISmAAMCP5AAA");
	this.shape_42.setTransform(508,643.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("Eg37gC4QiVAAhphEQhqhCAAhgQAAhfBqhEQBphDCVAAQCVAABqBDQBpBEAABfQAABghpBCQhqBEiVAAgEg+pADwQgfgDgXgXQgagZAAgkQAAglAagZQAagaAkAAQAkAAAZAaQAaAZAAAlQAAAkgaAZQgZAagkAAQgEAAgEAAIAAgFEg+pAKFIGuAAIAAs9Eg+pAKFIAAmVEhRPAKFISmAAEg37AKFMCJLAAA");
	this.shape_43.setTransform(508,608.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("Eg37gC4QiVAAhphEQhqhCAAhgQAAhfBqhEQBphDCVAAQCVAABqBDQBpBEAABfQAABghpBCQhqBEiVAAgEg+pADwQgfgDgXgXQgagZAAgkQAAglAagZQAagaAkAAQAkAAAZAaQAaAZAAAlQAAAkgaAZQgZAagkAAQgEAAgEAAIAAgFEg+pAKFIAAmVEg+pAKFIGuAAIAAs9EgwRACLQglgFgdgcQgigjAAgwQAAgwAigiQAjgjAwAAQAxAAAiAjQAjAiAAAwQAAAwgjAjQgiAigxAAQgIAAgJgBgEgwRAKFIAAn6Eg37AKFIHqAAMCBhAAAEhRPAKFISmAA");
	this.shape_44.setTransform(508,608.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("EAmmAakUAhFgRcgQ/gjrEAmmAakMAqqAAAEg37ANmQiVAAhphEQhqhDAAhfQAAhgBqhDQBphDCVAAQCVAABqBDQBpBDAABgQAABfhpBDQhqBEiVAAgEg+pAUPQgfgDgXgXQgagaAAgkQAAgkAagaQAagZAkAAQAkAAAZAZQAaAaAAAkQAAAkgaAaQgZAagkAAQgEAAgEAAIAAgFEg+pAakIGuAAIHqAAIAAn6QglgGgdgcQgigiAAgxQAAgwAigjQAjgiAwAAQAxAAAiAiQAjAjAAAwQAAAxgjAiQgiAjgxAAQgIAAgJgBEg+pAakIAAmVEg37AakIAAs+EgwRAakMBW3AAAEhRPAakISmAA");
	this.shape_45.setTransform(508,502.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("EA4HgVXQiBhPiEhxEAmmAcmMAqqAAAEAmmAcmUAfngQqgOGghTEBQUgclQq+PUtPoGEg37APoQiVAAhphEQhqhDAAhfQAAhgBqhDQBphDCVAAQCVAABqBDQBpBDAABgQAABfhpBDQhqBEiVAAgEg+pAWRQgfgDgXgXQgagaAAgkQAAgkAagaQAagZAkAAQAkAAAZAZQAaAaAAAkQAAAkgaAaQgZAagkAAQgEAAgEAAIAAgFEg+pAcmIGuAAIHqAAIAAn6QglgGgdgcQgigiAAgxQAAgwAigjQAjgiAwAAQAxAAAiAiQAjAjAAAwQAAAxgjAiQgiAjgxAAQgIAAgJgBEg+pAcmIAAmVEg37AcmIAAs+EgwRAcmMBW3AAAEhRPAcmISmAA");
	this.shape_46.setTransform(508,489.925);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("EA4HgNIQiBhPiEhxQrNHcm7r0QoM0WTmFCEAmmAk1MAqqAAAEAmmAk1UAfngQqgOGghTEBQUgUWQq+PTtPoFEg37AX3QiVAAhphEQhqhDAAhfQAAhgBqhDQBphDCVAAQCVAABqBDQBpBDAABgQAABfhpBDQhqBEiVAAgEg+pAefQgfgCgXgXQgagaAAgkQAAgkAagaQAagZAkAAQAkAAAZAZQAaAaAAAkQAAAkgaAaQgZAagkAAQgEAAgEgBIAAgEEg+pAk1IGuAAIHqAAIAAn7QglgFgdgcQgigiAAgxQAAgwAigjQAjgiAwAAQAxAAAiAiQAjAjAAAwQAAAxgjAiQgiAjgxAAQgIAAgJgCEg+pAk1IAAmWEg37Ak1IAAs+EgwRAk1MBW3AAAEhRPAk1ISmAA");
	this.shape_47.setTransform(508,437.2362);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("EA4HgFQQiBhOiEhyQrNHdm7r1QoM0VTmFBQwQmITipCQXWmFqORBEAmmAstMAqqAAAEAmmAstUAfngQqgOGghTEBQUgMeQq+PTtPoFEg37AfvQiVAAhphEQhqhDAAhfQAAhgBqhDQBphDCVAAQCVAABqBDQBpBDAABgQAABfhpBDQhqBEiVAAgEg+pAmYQgfgDgXgXQgagaAAgkQAAgkAagaQAagZAkAAQAkAAAZAZQAaAaAAAkQAAAkgaAaQgZAagkAAQgEAAgEAAIAAgFEg+pAstIGuAAIHqAAIAAn6QglgFgdgdQgigiAAgxQAAgwAigjQAjgiAwAAQAxAAAiAiQAjAjAAAwQAAAxgjAiQgiAjgxAAQgIAAgJgBEg+pAstIAAmVEg37AstIAAs+EgwRAstMBW3AAAEhRPAstISmAA");
	this.shape_48.setTransform(508,386.8055);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("EA/NgrbQEUhGGEAxQJ4BQiXEkEA3zgFQQiAhOiFhyQrMHdm8r1QoM0VTmFBQwPmIThpCQLojBDTCsEA9aggKQqKoML9jFEAmSAstMAqqAAAEAmSAstUAfngQqgOGghTEBQAgMeQq9PTtQoFEg4PAfvQiUAAhqhEQhphDAAhfQAAhgBphDQBqhDCVAAQCVAABpBDQBqBDAABgQAABfhqBDQhpBEiVAAgEg+8AmYQgfgDgYgXQgZgaAAgkQAAgkAZgaQAagZAkAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgDAAgEAAIAAgFEg+8AstIGtAAIHqAAIAAn6QglgFgcgdQgjgiAAgxQAAgwAjgjQAigiAxAAQAwAAAjAiQAiAjAAAwQAAAxgiAiQgjAjgwAAQgJAAgJgBEg+8AstIAAmVEg4PAstIAAs+EgwlAstMBW3AAAEhRiAstISmAA");
	this.shape_49.setTransform(509.9519,386.8054);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("EA/NgrbQEUhGGEAxQJ4BQiXEkEA3zgFQQiAhOiFhyQrMHdm8r1QoM0VTmFBQwPmIThpCQLojBDTCsEA9aggKQqKoML9jFEAoUgRtQAAA0gkAlQglAkg0AAQg0AAgkgkQglglAAg0QAAg0AlgkQAkglA0AAQA0AAAlAlQAkAkAAA0gEAmSAstMAqqAAAEAmSAstUAfngQqgOGghTEBQAgMeQq9PTtQoFEg4PAfvQiUAAhqhEQhphDAAhfQAAhgBphDQBqhDCVAAQCVAABpBDQBqBDAABgQAABfhqBDQhpBEiVAAgEg+8AmYQgfgDgYgXQgZgaAAgkQAAgkAZgaQAagZAkAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgDAAgEAAIAAgFEg+8AstIGtAAIHqAAIAAn6QglgFgcgdQgjgiAAgxQAAgwAjgjQAigiAxAAQAwAAAjAiQAiAjAAAwQAAAxgiAiQgjAjgwAAQgJAAgJgBEg+8AstIAAmVEg4PAstIAAs+EgwlAstMBW3AAAEhRiAstISmAA");
	this.shape_50.setTransform(509.9519,386.8054);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("EA+qgraQEDiCIXBLQGyA9goDmQgJA1giA+EAyyggqQAAA9grArQgrAsg9AAQg9AAgsgsQgrgrAAg9QAAg9ArgrQAsgrA9AAQA9AAArArQArArAAA9gEA83ggJQqLoNL+jEEA3QgFPQiBhPiEhxQrNHcm7r0QoM0WTmFCQwQmJTipBQLojCDTCtEAnxgRsQAAA0gkAkQglAlg0AAQg0AAgkglQglgkAAg0QAAg0AlglQAkgkA0AAQA0AAAlAkQAkAlAAA0gEBSGgOOQtmRDtQoEEAlvAstUAfngQpgOGghTEAlvAstMAqqAAAEg4yAfvQiUAAhqhDQhphDAAhgQAAhfBphEQBqhDCVAAQCVAABpBDQBqBEAABfQAABghqBDQhpBDiVAAgEg/fAmYQgfgCgYgYQgZgZAAgkQAAgkAZgaQAagaAkAAQAkAAAaAaQAaAaAAAkQAAAkgaAZQgaAagkAAQgEAAgDAAIAAgFEg/fAstIAAmVEg/fAstIGtAAIAAs+EgxIAkzQglgFgcgcQgjgjAAgwQAAgxAjgiQAigjAxAAQAwAAAjAjQAiAiAAAxQAAAwgiAjQgjAigwAAQgJAAgJgBgEgxIAstIAAn6Eg4yAstIHqAAMBW3AAAEhSFAstISmAA");
	this.shape_51.setTransform(513.475,386.7716);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("EA/NgrbQEUhGGEAxQJ4BQiXEkEAzVggqQAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEA3zgFQQiAhOiFhyQrMHdm8r1QoM0VTmFBQwPmIThpCQLojBDTCsEA9aggKQqKoML9jFEAoUgRtQAAA0gkAlQglAkg0AAQg0AAgkgkQglglAAg0QAAg0AlgkQAkglA0AAQA0AAAlAlQAkAkAAA0gEAyjgOdQAAAmgbAbQgbAbgmAAQgnAAgbgbQgbgbAAgmQAAgnAbgbQAbgbAnAAQAmAAAbAbQAbAbAAAngEAmSAstMAqqAAAEAmSAstUAfngQqgOGghTEBQAgMeQq9PTtQoFEg4PAfvQiUAAhqhEQhphDAAhfQAAhgBphDQBqhDCVAAQCVAABpBDQBqBDAABgQAABfhqBDQhpBEiVAAgEg+8AmYQgfgDgYgXQgZgaAAgkQAAgkAZgaQAagZAkAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgDAAgEAAIAAgFEg+8AstIGtAAIHqAAIAAn6QglgFgcgdQgjgiAAgxQAAgwAjgjQAigiAxAAQAwAAAjAiQAiAjAAAwQAAAxgiAiQgjAjgwAAQgJAAgJgBEg+8AstIAAmVEg4PAstIAAs+EgwlAstMBW3AAAEhRiAstISmAA");
	this.shape_52.setTransform(509.9519,386.8054);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("EA/NgrbQEUhGGEAxQJ4BQiXEkEAzVggqQAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEA3zgFQQiAhOiFhyQrMHdm8r1QoM0VTmFBQwPmIThpCQLojBDTCsEA9aggKQqKoML9jFEAoUgRtQAAA0gkAlQglAkg0AAQg0AAgkgkQglglAAg0QAAg0AlgkQAkglA0AAQA0AAAlAlQAkAkAAA0gEA5MgYHQAABJgzAzQgzAzhJAAQhIAAg0gzQgzgzAAhJQAAhIAzg0QA0gzBIAAQBJAAAzAzQAzA0AABIgEAyjgOdQAAAmgbAbQgbAbgmAAQgnAAgbgbQgbgbAAgmQAAgnAbgbQAbgbAnAAQAmAAAbAbQAbAbAAAngEAmSAstMAqqAAAEAmSAstUAfngQqgOGghTEBQAgMeQq9PTtQoFEg4PAfvQiUAAhqhEQhphDAAhfQAAhgBphDQBqhDCVAAQCVAABpBDQBqBDAABgQAABfhqBDQhpBEiVAAgEg+8AmYQgfgDgYgXQgZgaAAgkQAAgkAZgaQAagZAkAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgDAAgEAAIAAgFEg+8AstIGtAAIHqAAIAAn6QglgFgcgdQgjgiAAgxQAAgwAjgjQAigiAxAAQAwAAAjAiQAiAjAAAwQAAAxgiAiQgjAjgwAAQgJAAgJgBEg+8AstIAAmVEg4PAstIAAs+EgwlAstMBW3AAAEhRiAstISmAA");
	this.shape_53.setTransform(509.9519,386.8054);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("EA/NgrbQEUhGGEAxQJ4BQiXEkEAzVggqQAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEBIWge1QAABVg8A8Qg8A8hVAAQhVAAg8g8Qg8g8AAhVQAAhVA8g8QA8g8BVAAQBVAAA8A8QA8A8AABVgEA3zgFQQiAhOiFhyQrMHdm8r1QoM0VTmFBQwPmIThpCQLojBDTCsEA9aggKQqKoML9jFEAoUgRtQAAA0gkAlQglAkg0AAQg0AAgkgkQglglAAg0QAAg0AlgkQAkglA0AAQA0AAAlAlQAkAkAAA0gEA5MgYHQAABJgzAzQgzAzhJAAQhIAAg0gzQgzgzAAhJQAAhIAzg0QA0gzBIAAQBJAAAzAzQAzA0AABIgEAyjgOdQAAAmgbAbQgbAbgmAAQgnAAgbgbQgbgbAAgmQAAgnAbgbQAbgbAnAAQAmAAAbAbQAbAbAAAngEAmSAstMAqqAAAEAmSAstUAfngQqgOGghTEBQAgMeQq9PTtQoFEg4PAfvQiUAAhqhEQhphDAAhfQAAhgBphDQBqhDCVAAQCVAABpBDQBqBDAABgQAABfhqBDQhpBEiVAAgEg+8AmYQgfgDgYgXQgZgaAAgkQAAgkAZgaQAagZAkAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgDAAgEAAIAAgFEg+8AstIGtAAIHqAAIAAn6QglgFgcgdQgjgiAAgxQAAgwAjgjQAigiAxAAQAwAAAjAiQAiAjAAAwQAAAxgiAiQgjAjgwAAQgJAAgJgBEg+8AstIAAmVEg4PAstIAAs+EgwlAstMBW3AAAEhRiAstISmAA");
	this.shape_54.setTransform(509.9519,386.8054);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("EA/NgrbQEUhGGEAxQJ4BQiXEkEAzVggqQAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEBIWge1QAABVg8A8Qg8A8hVAAQhVAAg8g8Qg8g8AAhVQAAhVA8g8QA8g8BVAAQBVAAA8A8QA8A8AABVgEA9aggKQqKoML9jFEA3zgFQQiAhOiFhyQrMHdm8r1QoM0VTmFBQwPmIThpCQLojBDTCsEAoUgRtQAAA0gkAlQglAkg0AAQg0AAgkgkQglglAAg0QAAg0AlgkQAkglA0AAQA0AAAlAlQAkAkAAA0gEBE1gM+QAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEA5MgYHQAABJgzAzQgzAzhJAAQhIAAg0gzQgzgzAAhJQAAhIAzg0QA0gzBIAAQBJAAAzAzQAzA0AABIgEAyjgOdQAAAmgbAbQgbAbgmAAQgnAAgbgbQgbgbAAgmQAAgnAbgbQAbgbAnAAQAmAAAbAbQAbAbAAAngEBQAgMeQq9PTtQoFEAmSAstUAfngQqgOGghTEAmSAstMAqqAAAEg4PAfvQiUAAhqhEQhphDAAhfQAAhgBphDQBqhDCVAAQCVAABpBDQBqBDAABgQAABfhqBDQhpBEiVAAgEg+8AmYQgfgDgYgXQgZgaAAgkQAAgkAZgaQAagZAkAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgDAAgEAAIAAgFEg+8AstIAAmVEg+8AstIGtAAIAAs+EgwlAkzQglgFgcgdQgjgiAAgxQAAgwAjgjQAigiAxAAQAwAAAjAiQAiAjAAAwQAAAxgiAiQgjAjgwAAQgJAAgJgBgEgwlAstIAAn6Eg4PAstIHqAAMBW3AAAEhRiAstISmAA");
	this.shape_55.setTransform(509.9519,386.8054);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("EA/NgjpQEUhHGEAyQJ4BPiXElEAzVgY4QAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEBIWgXDQAABVg8A8Qg8A8hVAAQhVAAg8g8Qg8g8AAhVQAAhVA8g8QA8g8BVAAQBVAAA8A8QA8A8AABVgEA9agYYQqKoNL9jEEA3zAChQiAhPiFhwQrMHbm8rzQoM0WTmFCQwPmIThpCQLojBDTCsEAoUgJ7QAAA0gkAlQglAkg0AAQg0AAgkgkQglglAAg0QAAg0AlgkQAkglA0AAQA0AAAlAlQAkAkAAA0gEBE1gFMQAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEA5MgQVQAABJgzAzQgzAzhJAAQhIAAg0gzQgzgzAAhJQAAhIAzg0QA0gzBIAAQBJAAAzAzQAzA0AABIgEAyjgGrQAAAmgbAbQgbAbgmAAQgnAAgbgbQgbgbAAgmQAAgnAbgbQAbgbAnAAQAmAAAbAbQAbAbAAAngEBQAgEsQq9PTtQoGEAmSA0fUAfngQqgOGghUEAmSA0fMAqqAAAEhPrga7Qb5jSml2REg4PAnhQiUAAhqhEQhphDAAhfQAAhgBphDQBqhDCVAAQCVAABpBDQBqBDAABgQAABfhqBDQhpBEiVAAgEg+8AuKQgfgDgYgXQgZgaAAgkQAAgkAZgaQAagZAkAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgDAAgEAAIAAgFEg+8A0fIAAmVEg+8A0fIGtAAIAAs+EgwlAslQglgGgcgcQgjgiAAgxQAAgwAjgjQAigiAxAAQAwAAAjAiQAiAjAAAwQAAAxgiAiQgjAjgwAAQgJAAgJgBgEgwlA0fIAAn6Eg4PA0fIHqAAMBW3AAAEhRiA0fISmAA");
	this.shape_56.setTransform(509.9519,337.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("EA/NgjpQEUhHGEAyQJ4BPiXElEAzVgY4QAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEBIWgXDQAABVg8A8Qg8A8hVAAQhVAAg8g8Qg8g8AAhVQAAhVA8g8QA8g8BVAAQBVAAA8A8QA8A8AABVgEA9agYYQqKoNL9jEEA3zAChQiAhPiFhwQrMHbm8rzQoM0WTmFCQwPmIThpCQLojBDTCsEAoUgJ7QAAA0gkAlQglAkg0AAQg0AAgkgkQglglAAg0QAAg0AlgkQAkglA0AAQA0AAAlAlQAkAkAAA0gEBE1gFMQAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEA5MgQVQAABJgzAzQgzAzhJAAQhIAAg0gzQgzgzAAhJQAAhIAzg0QA0gzBIAAQBJAAAzAzQAzA0AABIgEAyjgGrQAAAmgbAbQgbAbgmAAQgnAAgbgbQgbgbAAgmQAAgnAbgbQAbgbAnAAQAmAAAbAbQAbAbAAAngEBQAgEsQq9PTtQoGEAmSA0fUAfngQqgOGghUEAmSA0fMAqqAAAEhERgdmIlPM5ImLqOQGtgzEth4QO6l9lAw7Eg4PAnhQiUAAhqhEQhphDAAhfQAAhgBphDQBqhDCVAAQCVAABpBDQBqBDAABgQAABfhqBDQhpBEiVAAgEg+8AuKQgfgDgYgXQgZgaAAgkQAAgkAZgaQAagZAkAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgDAAgEAAIAAgFEg+8A0fIAAmVEg+8A0fIGtAAIAAs+EgwlAslQglgGgcgcQgjgiAAgxQAAgwAjgjQAigiAxAAQAwAAAjAiQAiAjAAAwQAAAxgiAiQgjAjgwAAQgJAAgJgBgEgwlA0fIAAn6Eg4PA0fIHqAAMBW3AAAEhRiA0fISmAA");
	this.shape_57.setTransform(509.9519,337.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("EA/NgjpQEUhHGEAyQJ4BPiXElEAzVgY4QAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEBIWgXDQAABVg8A8Qg8A8hVAAQhVAAg8g8Qg8g8AAhVQAAhVA8g8QA8g8BVAAQBVAAA8A8QA8A8AABVgEA3zAChQiAhPiFhwQrMHbm8rzQoM0WTmFCQwPmIThpCQLojBDTCsEA9agYYQqKoNL9jEEAoUgJ7QAAA0gkAlQglAkg0AAQg0AAgkgkQglglAAg0QAAg0AlgkQAkglA0AAQA0AAAlAlQAkAkAAA0gEBE1gFMQAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEA5MgQVQAABJgzAzQgzAzhJAAQhIAAg0gzQgzgzAAhJQAAhIAzg0QA0gzBIAAQBJAAAzAzQAzA0AABIgEAyjgGrQAAAmgbAbQgbAbgmAAQgnAAgbgbQgbgbAAgmQAAgnAbgbQAbgbAnAAQAmAAAbAbQAbAbAAAngEAmSA0fMAqqAAAEAmSA0fUAfngQqgOGghUEBQAgEsQq9PTtQoGEhERgdmIAAAAQGdilCukoEhERgdmIlPM5ImLqOQGtgzEth4EhERgdmILUFUIiJshQDlmFi2pmEg4PAnhQiUAAhqhEQhphDAAhfQAAhgBphDQBqhDCVAAQCVAABpBDQBqBDAABgQAABfhqBDQhpBEiVAAgEg+8AuKQgfgDgYgXQgZgaAAgkQAAgkAZgaQAagZAkAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgDAAgEAAIAAgFEg+8A0fIGtAAIHqAAIAAn6QglgGgcgcQgjgiAAgxQAAgwAjgjQAigiAxAAQAwAAAjAiQAiAjAAAwQAAAxgiAiQgjAjgwAAQgJAAgJgBEg+8A0fIAAmVEg4PA0fIAAs+EgwlA0fMBW3AAAEhRiA0fISmAA");
	this.shape_58.setTransform(509.9519,337.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,1,1).p("EA/NgjpQEUhHGEAyQJ4BPiXElEAzVgY4QAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEBIWgXDQAABVg8A8Qg8A8hVAAQhVAAg8g8Qg8g8AAhVQAAhVA8g8QA8g8BVAAQBVAAA8A8QA8A8AABVgEA9agYYQqKoNL9jEEA3zAChQiAhPiFhwQrMHbm8rzQoM0WTmFCQwPmIThpCQLojBDTCsEAoUgJ7QAAA0gkAlQglAkg0AAQg0AAgkgkQglglAAg0QAAg0AlgkQAkglA0AAQA0AAAlAlQAkAkAAA0gEBE1gFMQAAA9grArQgrArg9AAQg9AAgsgrQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9gEA5MgQVQAABJgzAzQgzAzhJAAQhIAAg0gzQgzgzAAhJQAAhIAzg0QA0gzBIAAQBJAAAzAzQAzA0AABIgEAyjgGrQAAAmgbAbQgbAbgmAAQgnAAgbgbQgbgbAAgmQAAgnAbgbQAbgbAnAAQAmAAAbAbQAbAbAAAngEBQAgEsQq9PTtQoGEAmSA0fUAfngQqgOGghUEAmSA0fMAqqAAAEg5IgtlQgJjMhGjtEhERgdmIAAAAQGdilCukoQCMjvgOlDEhERgdmIlPM5ImLqOQGtgzEth4EhERgdmIMNHmIjCuzIMXiSIqZmgEg4PAnhQiUAAhqhEQhphDAAhfQAAhgBphDQBqhDCVAAQCVAABpBDQBqBDAABgQAABfhqBDQhpBEiVAAgEg+8AuKQgfgDgYgXQgZgaAAgkQAAgkAZgaQAagZAkAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgDAAgEAAIAAgFEg+8A0fIAAmVEg+8A0fIGtAAIAAs+EgwlAslQglgGgcgcQgjgiAAgxQAAgwAjgjQAigiAxAAQAwAAAjAiQAiAjAAAwQAAAxgiAiQgjAjgwAAQgJAAgJgBgEgwlA0fIAAn6Eg4PA0fIHqAAMBW3AAAEhRiA0fISmAA");
	this.shape_59.setTransform(509.9519,337.025);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("EA/NgjkQEUhGGEAyQJ4BPiXElEAzVgYzQAAA9grArQgrAsg9AAQg9AAgsgsQgrgrAAg9QAAg9ArgrQAsgrA9AAQA9AAArArQArArAAA9gEBIWgW+QAABVg8A8Qg8A8hVAAQhVAAg8g8Qg8g8AAhVQAAhVA8g8QA8g8BVAAQBVAAA8A8QA8A8AABVgEA3zACnQiAhPiFhwQrMHbm8rzQoM0WTmFCQwPmJThpBQLojCDTCsEA9agYSQqKoNL9jFEAoUgJ1QAAA0gkAkQglAlg0AAQg0AAgkglQglgkAAg0QAAg0AlglQAkgkA0AAQA0AAAlAkQAkAlAAA0gEBE1gFHQAAA9grArQgrAsg9AAQg9AAgsgsQgrgrAAg9QAAg9ArgrQAsgrA9AAQA9AAArArQArArAAA9gEA5MgQPQAABIgzAzQgzA0hJAAQhIAAg0g0QgzgzAAhIQAAhJAzgzQA0gzBIAAQBJAAAzAzQAzAzAABJgEAyjgGmQAAAngbAbQgbAbgmAAQgnAAgbgbQgbgbAAgnQAAgmAbgbQAbgbAnAAQAmAAAbAbQAbAbAAAmgEAmSA0kMAqqAAAEAmSA0kUAfngQpgOGghUEBQAgEmQq9PStQoFEg5IgtgIAAAAIIpnDEg5IgtgQgJjLhGjtEhERgdgIAAAAQGdilCukpIMXiRIqZmhEhERgdgIlPM4ImLqOQGtgyEth4EhERgdgIMNHmIjCu0QCMjugOlEEg4PAnmQiUAAhqhDQhphDAAhgQAAhfBphEQBqhDCVAAQCVAABpBDQBqBEAABfQAABghqBDQhpBDiVAAgEg+8AuPQgfgCgYgYQgZgZAAgkQAAgkAZgaQAagaAkAAQAkAAAaAaQAaAaAAAkQAAAkgaAZQgaAagkAAQgDAAgEAAIAAgFEg+8A0kIGtAAIHqAAIAAn6QglgFgcgcQgjgjAAgwQAAgxAjgiQAigjAxAAQAwAAAjAjQAiAiAAAxQAAAwgiAjQgjAigwAAQgJAAgJgBEg+8A0kIAAmVEg4PA0kIAAs+EgwlA0kMBW3AAAEhRiA0kISmAA");
	this.shape_60.setTransform(509.9519,336.475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("EBRfgnZQAKAqgPAxQgHAYgNAZEBRagl+IAFhbEA/NgqsQEUhHGEAyQHQA6AqCuEBQLgPGIgLDXQq9PStQoEQiAhPiFhxQrMHcm8r0QoM0WTmFCQwPmJThpBQLojCDTCtEBQLgPGIBP24EAzVgf8QAAA9grArQgrAsg9AAQg9AAgsgsQgrgrAAg9QAAg9ArgrQAsgrA9AAQA9AAArArQArArAAA9gEBIWgeHQAABVg8A8Qg8A8hVAAQhVAAg8g8Qg8g8AAhVQAAhVA8g8QA8g8BVAAQBVAAA8A8QA8A8AABVgEA9agfbQqKoNL9jEEAoUgQ+QAAA0gkAkQglAlg0AAQg0AAgkglQglgkAAg0QAAg0AlglQAkgkA0AAQA0AAAlAkQAkAlAAA0gEBE1gMQQAAA9grArQgrAsg9AAQg9AAgsgsQgrgrAAg9QAAg9ArgrQAsgrA9AAQA9AAArArQArArAAA9gEA5MgXYQAABIgzAzQgzA0hJAAQhIAAg0g0QgzgzAAhIQAAhJAzgzQA0gzBIAAQBJAAAzAzQAzAzAABJgEAyjgNvQAAAngbAbQgbAbgmAAQgnAAgbgbQgbgbAAgnQAAgmAbgbQAbgbAnAAQAmAAAbAbQAbAbAAAmgEBQ8AtbIgsO/MihyAAAIAAu/ISmAAIGtAAIHqAAIAAn6QglgFgcgcQgjgjAAgwQAAgxAjgiQAigjAxAAQAwAAAjAjQAiAiAAAxQAAAwgiAjQgjAigwAAQgJAAgJgBEAmSAtbUAfngQpgOGghTEAmSAtbMAqqAAAEBQLgPGMAAxA8hEg5Ig0pQgJjLhGjtEg5Ig0pIAAAAIIpnDIp4ALEhERgkpIAAAAQGdilCukpIMXiRIqZmhEhPrgh/QGtgyEth4EhERgkpIMNHmIjCu0QCMjugOlEEhERgkpIlPM4ImLqOIAA6aIVUA4Eg4PAgdQiUAAhqhDQhphDAAhgQAAhfBphEQBqhDCVAAQCVAABpBDQBqBEAABfQAABghqBDQhpBDiVAAgEg+8AnGQgfgCgYgYQgZgZAAgkQAAgkAZgaQAagaAkAAQAkAAAaAaQAaAaAAAkQAAAkgaAZQgaAagkAAQgDAAgEAAIAAgFEg+8AtbIAAmVEg4PAtbIAAs+EgwlAtbMBW3AAA");
	this.shape_61.setTransform(509.9523,382.175);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFCC99").s().p("ArRtMIVTA4QBGDtAJDLQAOFEiMDtQiuEpmdClQksB4mtAyg");
	this.shape_62.setTransform(72.203,80.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#009966").s().p("EhRgA0MIAAu/ISmAAIGuAAIHpAAMBW4AAAMAqpAAAIgsO/gEA31gMvQiAhPiFhxQrMHcm7r0QoN0WTnFCQwQmJTipBQLnjCDTCtQEUhHGEAyQHQA6AqCuIgFBbQgHAYgNAZQANgZAHgYIhOW4IgMDXQnLKBoJAAQkUAAklizgEBA7gWGQgrArAAA9QAAA9ArArQAsAsA9AAQA9AAArgsQArgrAAg9QAAg9grgrQgrgrg9AAQg9AAgsArgEAwIgW+QgbAbAAAmQAAAnAbAbQAaAbAnAAQAmAAAbgbQAbgbAAgnQAAgmgbgbQgbgbgmAAQgnAAgaAbgEAlBgalQglAlABA0QgBA0AlAkQAlAlAzAAQA0AAAlglQAkgkAAg0QAAg0gkglQglgkg0AAQgzAAglAkgEA0jghiQgzAzAABJQAABIAzAzQA0A0BJAAQBIAAAzg0QAzgzAAhIQAAhJgzgzQgzgzhIAAQhJAAg0AzgEBC6gomQg7A8AABVQAABVA7A8QA9A8BUAAQBWAAA7g8QA9g8gBhVQABhVg9g8Qg7g8hWAAQhUAAg9A8gEAvcgpyQgsArABA9QgBA9AsArQArAsA9AAQA9AAArgsQAsgrAAg9QAAg9gsgrQgrgrg9AAQg9AAgrArgEA9cgnpQkqjxgBisQAAjKGehqQmeBqAADKQABCsEqDxg");
	this.shape_63.setTransform(509.75,434.7554);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#663333").s().p("A1UeRUAfmgQpgOFghUQNPIGK9vTIALjXMAAxA8hg");
	this.shape_64.setTransform(891.475,479.1875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF66CC").s().p("AKhLeQgrgrAAg9QAAg9ArgsQAsgqA8AAQA+AAArAqQArAsAAA9QAAA9grArQgrArg+AAQg8AAgsgrgAmSJZQgbgbAAgnQAAgnAbgbQAbgbAmAAQAnAAAbAbQAbAbAAAnQAAAngbAbQgbAbgnAAQgmAAgbgbgAxZGgQgkglAAg0QAAg0AkgkQAlglA0AAQA0AAAlAlQAkAkAAA0QAAA0gkAlQglAkg0AAQg0AAglgkgAh2ApQgzgyAAhIQAAhJAzgzQA0g0BHAAQBIAAAzA0QA0AzAABJQAABIg0AyQgzA0hIgBQhHABg0g0gAMglvQg8g8AAhVQAAhVA8g8QA8g8BVAAQBVAAA8A8QA8A8AABVQAABVg8A8Qg8A8hVAAQhVAAg8g8gAm+oNQgrgrAAg9QAAg9ArgsQArgqA+AAQA8AAArAqQAsAsAAA9QAAA9gsArQgrArg8AAQg+AAgrgrg");
	this.shape_65.setTransform(858,240.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#33CCFF").s().p("AgHBXIAAgFIAAAFQgfgCgXgXQgZgaAAgkQAAgjAZgaQAagZAjgBQAkABAZAZQAaAaAAAjQAAAkgaAaQgZAagkAAIgHgBg");
	this.shape_66.setTransform(107.8,623.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF3399").s().p("AgRB0QglgFgcgcQgigigBgxQABgwAigiQAjgjAvAAQAwAAAjAjQAiAiAAAwQAAAxgiAiQgjAjgwAAIgRgCg");
	this.shape_67.setTransform(200.75,610.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFF66").s().p("EAG+AuFQiVAAhphDQhphDgBhgQABhfBphEQBphDCVAAQCVAABqBDQBqBEgBBfQABBghqBDQhqBDiVAAgAwd0XQGtgyEth4IAAAAIAAAAQGcilCukpIDBO0IsLnmIlQM4gAlD3BgEAGFgnBIAAAAIAAAAQgJjLhGjtIJ3gLIooHDIKZGhIsXCRQCMjugOlEg");
	this.shape_68.setTransform(105.4,294.975);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCCFF").s().p("AgjA5QgNgLgDgSIAcgEQAEAVATAAQAJAAAGgFQAGgFAAgIQAAgJgGgEQgFgEgOAAIgMAAIAAgXIAOAAQALAAAEgFQAFgFAAgFQAAgHgFgFQgFgFgIAAQgPAAgFARIgbgEQADgPANgKQANgLATAAQAUAAAOAKQANAKAAAQQAAAWgXAIQAbAGAAAZQAAARgNALQgOAMgYAAQgWAAgOgMg");
	this.shape_69.setTransform(727.725,565.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFCCFF").s().p("AgqALIAAgWIBVgsIAAAbIg4AcIA4AdIAAAbg");
	this.shape_70.setTransform(716.125,565.975);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQABALAFAFQAGAGAGAAQAPAAADgQIAaACQgKAigjAAQgNAAgLgGgAgQgLIAjAAQgCgUgPAAQgQAAgCAUg");
	this.shape_71.setTransform(705.1,567.725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFCCFF").s().p("AAUBDIgUg1IgWAAIAAA1IgfAAIAAiFIA5AAQAQAAAKAEQAKAEAHAKQAGAKAAAMQAAAYgXAKIAYA7gAgWgIIATAAQAJAAAEgBQAEgBADgFQAEgFAAgFQAAgGgEgEQgDgFgEgBIgNgBIgTAAg");
	this.shape_72.setTransform(693.375,565.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCCFF").s().p("AgOAeIAOgeIgOAAIAAgeIAdAAIAAAbIgSAhg");
	this.shape_73.setTransform(679,572.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFCCFF").s().p("AgaAzIAAhiIAaAAIAAASQAGgUAQAAIAEAAIAAAdQgIAAgFACQgFADgDAHQgEAHAAALIAAApg");
	this.shape_74.setTransform(673.35,567.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAFgLQAHgLAJgHQAKgGAPAAQAWAAANAOQAMAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgLgZQgFAGAAATQAAARAFAIQAEAHAHAAQAHAAAFgGQAEgHABgSQAAgTgFgGQgDgHgJAAQgHAAgEAGg");
	this.shape_75.setTransform(664.15,567.725);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFCCFF").s().p("AApAyIAAg1QAAgMgBgDQAAgEgDgCQgDgCgFAAQgFAAgEADQgFADgBARIAAA1IgcAAIAAg1QABgMgCgEQgBgDgDgCQgDgCgEAAQgIAAgDAEQgFAFAAAOIAAA1IgbAAIAAhhIAbAAIAAAPQAHgRAUAAQASAAAJARQAIgRAUAAQALAAAGAEQAIAEACAGQAEAGAAAQIAAA/g");
	this.shape_76.setTransform(650.55,567.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCCFF").s().p("AglAsQgIgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgPAAgBAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQACAFAAANIAAAsQAAANACAFIgcAAQgBgGgBgJQgHAKgHAEQgHADgJAAQgOAAgJgHgAgOAUQgBAGAEADQADAEAGAAQAHAAAFgGQAFgHAAgJIAAgJQgeADABAPg");
	this.shape_77.setTransform(636.65,567.725);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFCCFF").s().p("AghAlQgNgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgMgOgAgMgZQgDAGAAATQAAARADAIQAEAHAIAAQAIAAAEgGQAFgHgBgSQAAgTgEgGQgDgHgJAAQgHAAgFAGg");
	this.shape_78.setTransform(621.1,567.725);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCCFF").s().p("AANBDIAAg4IgBgNQgBgDgCgDQgDgCgEAAQgFAAgFAEQgFAEgBANIAAA4IgbAAIAAiFIAbAAIAAAwQAJgPARAAQAKAAAIAEQAGAFAEAHQACAGAAANIAABBg");
	this.shape_79.setTransform(610.3,565.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFCCFF").s().p("AggAmQgNgOAAgXQAAgXAOgOQANgOAVAAQASAAAMAKQAMALABARIgbABQgBgSgOAAQgQAAgBAdQAAASAGAFQAEAFAGAAQANAAADgRIAbABQgBASgNALQgLAKgUAAQgUAAgNgNg");
	this.shape_80.setTransform(599.85,567.725);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_81.setTransform(589.175,567.825);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFCCFF").s().p("AAqAyIAAg1QgBgMgBgDQAAgEgDgCQgDgCgFAAQgFAAgFADQgEADAAARIAAA1IgdAAIAAg1QAAgMgBgEQgBgDgDgCQgDgCgEAAQgIAAgDAEQgFAFAAAOIAAA1IgcAAIAAhhIAcAAIAAAPQAHgRAUAAQATAAAIARQAIgRAUAAQALAAAGAEQAIAEACAGQAEAGAAAQIAAA/g");
	this.shape_82.setTransform(575.5,567.625);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFCCFF").s().p("AANAyIAAg2IAAgOQgBgEgDgCQgDgDgEAAQgPAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAGgDQAGgDAIAAQANAAAJAHQAJAIAAAWIAAA+g");
	this.shape_83.setTransform(556.75,567.625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAFgLQAHgLAJgHQAKgGAPAAQAWAAANAOQAMAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgLgZQgFAGAAATQAAARAFAIQADAHAIAAQAIAAAEgGQAEgHABgSQAAgTgFgGQgEgHgIAAQgHAAgEAGg");
	this.shape_84.setTransform(545.9,567.725);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCCFF").s().p("AgnAzQgRgTAAggQAAgdAQgTQAQgUAbAAQAwAAAGA0IghACQAAgcgWAAQgYAAABAqQgBAZAIAJQAGAJALAAQAUAAADgZIAfACQgDAYgPAMQgPANgVAAQgaAAgQgSg");
	this.shape_85.setTransform(534.4,565.975);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFCCFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_86.setTransform(567.175,534.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_87.setTransform(559.175,530.875);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_88.setTransform(550.075,529.325);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQABALAFAFQAGAGAGAAQAPAAADgQIAaACQgKAigjAAQgNAAgLgGgAgQgLIAjAAQgCgUgPAAQgQAAgCAUg");
	this.shape_89.setTransform(536.35,530.775);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_90.setTransform(525.575,530.875);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCCFF").s().p("AAQBDIAAgsQgJAMgNAAQgSAAgLgNQgKgOAAgWQAAgYALgOQALgOATAAQASAAAJAQQAFgHACgHIAQAAIgBAOIAAB1gAgJgpQgFAGAAAVQAAAQAEAHQAEAGAGAAQAHAAAEgGQAFgHAAgIIAAgUQAAgJgEgGQgFgFgGgBQgFABgFAFg");
	this.shape_91.setTransform(514.475,532.35);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFCCFF").s().p("AgrAWIAYgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgKgHAAgOQAAgOAMgJQAKgJATAAQAQAAAJAGQAKAGAEANIgVAGQgEgNgPAAQgOAAAAAJQABADACACQACACALACQARACAIADQAIADAFAGQAEAHABAKQAAAPgMAKQgMAJgUAAQglAAgHgdg");
	this.shape_92.setTransform(499.35,530.775);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFCCFF").s().p("AglAsQgIgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgPAAgBAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQACAFAAANIAAAsQAAANACAFIgcAAQgCgGAAgJQgHAKgHAEQgHADgJAAQgOAAgJgHgAgOAUQgBAGAEADQADAEAGAAQAGAAAGgGQAFgHAAgJIAAgJQgeADABAPg");
	this.shape_93.setTransform(489.15,530.775);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFCCFF").s().p("AAqAyIAAg1QAAgMgBgDQgBgEgDgCQgDgCgFAAQgFAAgFADQgEADAAARIAAA1IgdAAIAAg1QAAgMgBgEQgBgDgDgCQgDgCgFAAQgHAAgDAEQgFAFAAAOIAAA1IgcAAIAAhhIAcAAIAAAPQAHgRAUAAQATAAAIARQAIgRAVAAQAJAAAHAEQAHAEAEAGQADAGAAAQIAAA/g");
	this.shape_94.setTransform(475.7,530.675);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAFgLQAHgLAJgHQAKgGAPAAQAWAAANAOQAMAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgMgZQgDAGgBATQABARADAIQAFAHAHAAQAHAAAFgGQAFgHAAgSQgBgTgEgGQgDgHgJAAQgHAAgFAGg");
	this.shape_95.setTransform(682.5,506.075);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFCCFF").s().p("AAOAyIAAg2IgBgOQgBgEgDgCQgDgDgFAAQgOAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAGgDQAGgDAIAAQAOAAAIAHQAJAIAAAWIAAA+g");
	this.shape_96.setTransform(671.65,505.975);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_97.setTransform(660.725,506.175);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFCCFF").s().p("AgmBBIAAgWIAOACQAJAAADgEQADgDABgGIgkhiIAfAAIASA7IATg7IAVAAIgfBeQgGAQgDAHQgEAHgGAEQgHAEgMAAIgOgBg");
	this.shape_98.setTransform(645.8,507.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAANAOQAMAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgLgZQgFAGAAATQAAARAFAIQADAHAIAAQAHAAAFgGQAEgHABgSQgBgTgDgGQgFgHgIAAQgHAAgEAGg");
	this.shape_99.setTransform(631.05,506.075);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_100.setTransform(622.025,504.625);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCCFF").s().p("AgNBEIAAhiIAbAAIAABigAgNgmIAAgdIAbAAIAAAdg");
	this.shape_101.setTransform(616.05,504.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFCCFF").s().p("AANAyIAAg2IAAgOQgBgEgDgCQgDgDgFAAQgOAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAHgDQAFgDAHAAQAPAAAIAHQAJAIAAAWIAAA+g");
	this.shape_102.setTransform(607.9,505.975);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFCCFF").s().p("AgOBEIAAhiIAdAAIAABigAgOgmIAAgdIAdAAIAAAdg");
	this.shape_103.setTransform(599.8,504.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFCCFF").s().p("AgSBFIAAhLIgLAAIAAgWIALAAQABgQACgHQACgHAIgFQAHgFAOAAIAOABIAAAWIgKAAQgGAAgCADQgCADAAAHIAAAEIASAAIAAAWIgSAAIAABLg");
	this.shape_104.setTransform(594,504.075);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCCFF").s().p("AAOAyIAAg2IgBgOQgBgEgDgCQgDgDgFAAQgOAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAGgDQAGgDAIAAQAOAAAIAHQAJAIAAAWIAAA+g");
	this.shape_105.setTransform(585.25,505.975);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFCCFF").s().p("AgNBEIAAhiIAcAAIAABigAgNgmIAAgdIAcAAIAAAdg");
	this.shape_106.setTransform(577.15,504.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFCCFF").s().p("AgNBDIAAiFIAbAAIAACFg");
	this.shape_107.setTransform(566.9,504.325);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFCCFF").s().p("AglAsQgIgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgOAAgCAOIgbgDQADgQANgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFACAFQABAFAAANIAAAsQABANABAFIgcAAQgBgGgBgJQgHAKgIAEQgFADgKAAQgOAAgJgHgAgPAUQAAAGAEADQADAEAGAAQAGAAAGgGQAFgHAAgJIAAgJQgeADAAAPg");
	this.shape_108.setTransform(558.6,506.075);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFCCFF").s().p("AghAlQgNgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgMgOgAgMgZQgDAGAAATQAAARADAIQAEAHAIAAQAHAAAFgGQAFgHgBgSQAAgTgDgGQgFgHgIAAQgHAAgFAGg");
	this.shape_109.setTransform(543.05,506.075);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFCCFF").s().p("AAqAyIAAg1QAAgMgBgDQgBgEgDgCQgDgCgFAAQgEAAgGADQgEADAAARIAAA1IgcAAIAAg1QAAgMgCgEQgBgDgDgCQgDgCgFAAQgHAAgEAEQgDAFAAAOIAAA1IgdAAIAAhhIAcAAIAAAPQAHgRAVAAQARAAAJARQAIgRAVAAQAKAAAHAEQAHAEADAGQACAGAAAQIAAA/g");
	this.shape_110.setTransform(529.45,505.975);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFCCFF").s().p("AgkAsQgJgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgOAAgCAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFACAFQACAFAAANIAAAsQgBANACAFIgcAAQgBgGAAgJQgIAKgHAEQgHADgJAAQgOAAgIgHgAgPAUQABAGADADQADAEAGAAQAHAAAFgGQAFgHAAgJIAAgJQgdADgBAPg");
	this.shape_111.setTransform(515.55,506.075);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgGgLQgHgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQABALAFAFQAGAGAGAAQAPAAADgQIAaACQgLAigiAAQgNAAgLgGgAgQgLIAiAAQgBgUgPAAQgPAAgDAUg");
	this.shape_112.setTransform(500,506.075);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFCCFF").s().p("AgPBDIAAhqIghAAIAAgbIBhAAIAAAbIghAAIAABqg");
	this.shape_113.setTransform(489.75,504.325);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFCCFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_114.setTransform(477.275,509.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFCCFF").s().p("AgOBDIAAiFIAdAAIAACFg");
	this.shape_115.setTransform(472.1,504.325);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFCCFF").s().p("AgOBDIAAiFIAcAAIAACFg");
	this.shape_116.setTransform(466.85,504.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXANgOQAOgOAUAAQATAAAOANQANANAAAdIg/AAIAAAEQABALAFAFQAGAGAGAAQAPAAADgQIAaACQgKAigjAAQgNAAgLgGgAgQgLIAjAAQgCgUgPAAQgQAAgCAUg");
	this.shape_117.setTransform(458.85,506.075);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFCCFF").s().p("AAPAxIgPg+IgPA+IgYAAIgfhhIAfAAIAQA7IAPg7IAZAAIAPA7IAQg7IAXAAIgeBhg");
	this.shape_118.setTransform(446.275,506.075);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFCCFF").s().p("AgsAWIAZgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgJgHAAgOQgBgOALgJQAMgJASAAQAPAAAKAGQAJAGAGANIgWAGQgDgNgQAAQgNAAAAAJQgBADADACQACACALACQARACAIADQAIADAFAGQAFAHgBAKQAAAPgLAKQgLAJgWAAQgkAAgIgdg");
	this.shape_119.setTransform(429.2,506.075);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFCCFF").s().p("AgkAsQgJgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgOAAgCAOIgbgDQADgQANgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFACAFQABAFAAANIAAAsQABANABAFIgcAAQgCgGABgJQgIAKgIAEQgFADgKAAQgOAAgIgHgAgPAUQAAAGAEADQADAEAGAAQAGAAAGgGQAFgHAAgJIAAgJQgeADAAAPg");
	this.shape_120.setTransform(419,506.075);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_121.setTransform(403.375,506.175);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFCCFF").s().p("AghAlQgNgPAAgWQAAgPAFgLQAHgLAJgHQAKgGAPAAQAWAAANAOQAMAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgMgOgAgMgZQgDAGAAATQAAARADAIQAFAHAHAAQAHAAAFgGQAFgHAAgSQgBgTgEgGQgDgHgJAAQgHAAgFAGg");
	this.shape_122.setTransform(392.6,506.075);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFCCFF").s().p("AgmBBIAAgWIAOACQAJAAADgEQADgDABgGIgkhiIAfAAIASA7IATg7IAUAAIgeBeQgGAQgDAHQgEAHgGAEQgGAEgNAAIgOgBg");
	this.shape_123.setTransform(382.75,507.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFCCFF").s().p("AgaAzIAAhiIAaAAIAAASQAGgUAQAAIAEAAIAAAdQgIAAgFACQgFADgDAHQgDAHAAALIAAApg");
	this.shape_124.setTransform(370.25,505.95);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgLgZQgFAGAAATQAAARAFAIQADAHAIAAQAHAAAFgGQAEgHAAgSQAAgTgDgGQgFgHgIAAQgHAAgEAGg");
	this.shape_125.setTransform(361.05,506.075);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFCCFF").s().p("AgRBFIAAhLIgMAAIAAgWIAMAAQAAgQACgHQACgHAIgFQAHgFAPAAIANABIAAAWIgKAAQgGAAgCADQgCADAAAHIAAAEIASAAIAAAWIgSAAIAABLg");
	this.shape_126.setTransform(352.55,504.075);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_127.setTransform(682.275,479.925);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_128.setTransform(673.475,481.475);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFCCFF").s().p("AgKBAQgFgDgHgKQgCACgFANIgPAAIAAiFIAdAAIAAAwQAIgPAPAAQASAAAJAOQAKAOAAAWQAAAXgKAPQgKAOgTAAQgJAAgHgEgAgLgIQgEAGAAAKIAAATQAAAKAEAFQAFAGAGAAQAGAAAFgHQAFgGgBgTQAAgUgEgFQgFgFgGAAQgGAAgFAGg");
	this.shape_129.setTransform(662.85,479.725);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFCCFF").s().p("AgWAtQgLgGgGgLQgHgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQAAALAGAFQAGAGAGAAQAPAAADgQIAaACQgKAigjAAQgNAAgKgGgAgQgLIAiAAQgBgUgPAAQgQAAgCAUg");
	this.shape_130.setTransform(646.8,481.375);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFCCFF").s().p("AAqAyIAAg1QAAgMgBgDQgBgEgDgCQgDgCgFAAQgFAAgFADQgEADAAARIAAA1IgdAAIAAg1QAAgMgBgEQgBgDgDgCQgDgCgEAAQgIAAgDAEQgFAFAAAOIAAA1IgcAAIAAhhIAcAAIAAAPQAHgRAUAAQATAAAIARQAIgRAVAAQAJAAAHAEQAHAEAEAGQADAGAAAQIAAA/g");
	this.shape_131.setTransform(633.2,481.275);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFCCFF").s().p("AgaAyIAAhhIAaAAIAAASQAGgVAQAAIAEABIAAAcQgIAAgFAEQgFACgDAIQgDAGAAAMIAAAng");
	this.shape_132.setTransform(616.85,481.25);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgLgZQgFAGAAATQAAARAFAIQADAHAIAAQAHAAAFgGQAEgHAAgSQABgTgEgGQgFgHgIAAQgHAAgEAGg");
	this.shape_133.setTransform(607.65,481.375);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFCCFF").s().p("AgRBFIAAhLIgMAAIAAgWIAMAAQAAgQACgHQACgHAIgFQAHgFAPAAIANABIAAAWIgKAAQgGAAgCADQgCADAAAHIAAAEIASAAIAAAWIgSAAIAABLg");
	this.shape_134.setTransform(599.15,479.375);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFCCFF").s().p("AgmBCIAAgXIAOABQAJABADgEQADgDABgGIgkhhIAfAAIASA6IATg6IAUAAIgeBdQgGAQgDAHQgEAHgGAEQgHAFgMAAIgOgBg");
	this.shape_135.setTransform(586.4,483.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFCCFF").s().p("AgNBDIAAiFIAcAAIAACFg");
	this.shape_136.setTransform(579.4,479.625);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFCCFF").s().p("AANAyIAAg2IAAgOQgBgEgDgCQgDgDgEAAQgPAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAGgDQAGgDAHAAQAOAAAJAHQAJAIAAAWIAAA+g");
	this.shape_137.setTransform(571.25,481.275);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgLgZQgFAGAAATQAAARAFAIQADAHAIAAQAHAAAFgGQAEgHAAgSQABgTgEgGQgFgHgIAAQgHAAgEAGg");
	this.shape_138.setTransform(560.4,481.375);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_139.setTransform(546.375,479.925);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFCCFF").s().p("AghAlQgNgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgMgOgAgMgZQgDAGAAATQAAARADAIQAEAHAIAAQAHAAAFgGQAFgHgBgSQAAgTgDgGQgFgHgIAAQgHAAgFAGg");
	this.shape_140.setTransform(537.65,481.375);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFCCFF").s().p("AANAyIAAg2IAAgOQgBgEgDgCQgDgDgEAAQgPAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAHgDQAFgDAHAAQAOAAAJAHQAJAIAAAWIAAA+g");
	this.shape_141.setTransform(526.8,481.275);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFCCFF").s().p("AgOAfIAOgfIgOAAIAAgeIAdAAIAAAbIgSAig");
	this.shape_142.setTransform(513.7,486.35);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFCCFF").s().p("AgrAWIAYgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgKgHABgOQgBgOALgJQAMgJASAAQAPAAAKAGQAKAGAEANIgVAGQgDgNgQAAQgNAAAAAJQgBADADACQACACALACQARACAIADQAIADAFAGQAFAHgBAKQABAPgMAKQgMAJgUAAQglAAgHgdg");
	this.shape_143.setTransform(506.25,481.375);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFCCFF").s().p("AgWAtQgLgGgHgLQgGgLAAgQQAAgXAOgOQANgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQgBALAGAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgKgGgAgPgLIAiAAQgCgUgPAAQgPAAgCAUg");
	this.shape_144.setTransform(496.35,481.375);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFCCFF").s().p("AAQBDIgTgtIgRAUIAAAZIgcAAIAAiFIAcAAIAABPIAEgFIAFgGIAbghIAdAAIgdAhIAhBBg");
	this.shape_145.setTransform(486.225,479.625);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFCCFF").s().p("AgkAsQgJgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgOAAgCAOIgbgDQADgQANgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQADAFAAANIAAAsQAAANABAFIgcAAQgBgGAAgJQgIAKgHAEQgHADgJAAQgOAAgIgHgAgPAUQABAGADADQADAEAGAAQAGAAAGgGQAFgHAAgJIAAgJQgdADgBAPg");
	this.shape_146.setTransform(474.5,481.375);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_147.setTransform(465.625,479.925);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFCCFF").s().p("AgsAWIAZgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgJgHAAgOQAAgOALgJQAKgJATAAQAPAAAKAGQAJAGAGANIgWAGQgDgNgQAAQgNAAAAAJQAAADACACQACACALACQARACAIADQAIADAFAGQAEAHAAAKQAAAPgLAKQgMAJgVAAQgkAAgIgdg");
	this.shape_148.setTransform(457.35,481.375);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFCCFF").s().p("AgOBEIAAhhIAcAAIAABhgAgOgmIAAgdIAcAAIAAAdg");
	this.shape_149.setTransform(450.2,479.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFCCFF").s().p("AApAyIAAg1QAAgMgBgDQAAgEgDgCQgDgCgFAAQgFAAgEADQgGADAAARIAAA1IgbAAIAAg1QgBgMgBgEQgBgDgDgCQgDgCgEAAQgIAAgEAEQgDAFAAAOIAAA1IgcAAIAAhhIAbAAIAAAPQAHgRAVAAQARAAAJARQAIgRAUAAQAKAAAHAEQAIAEACAGQADAGAAAQIAAA/g");
	this.shape_150.setTransform(439.3,481.275);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFCCFF").s().p("AgmBCIAAgXIAOABQAJABADgEQADgDABgGIgkhhIAfAAIASA6IASg6IAVAAIgeBdQgGAQgDAHQgEAHgGAEQgGAFgNAAIgOgBg");
	this.shape_151.setTransform(421.55,483.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFCCFF").s().p("AApAyIAAg1QAAgMgBgDQAAgEgDgCQgDgCgFAAQgFAAgEADQgFADgBARIAAA1IgcAAIAAg1QABgMgCgEQgBgDgDgCQgDgCgEAAQgIAAgDAEQgFAFAAAOIAAA1IgbAAIAAhhIAbAAIAAAPQAHgRAUAAQATAAAIARQAIgRAUAAQALAAAGAEQAIAEACAGQAEAGAAAQIAAA/g");
	this.shape_152.setTransform(408.9,481.275);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgLgZQgFAGAAATQAAARAFAIQADAHAIAAQAHAAAFgGQAEgHAAgSQAAgTgDgGQgFgHgIAAQgHAAgEAGg");
	this.shape_153.setTransform(390.3,481.375);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_154.setTransform(381.275,479.925);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFCCFF").s().p("AgrBDIAAiDIAbAAIAAAOQAHgQARAAQARAAAJANQALANAAAYQAAAZgLANQgKAOgRAAQgPAAgHgOIAAAtgAgLgpQgEAGAAAMIAAAPQgBAJACAEQACAEAEADQADADAFAAQAFAAAFgGQAFgGgBgUQAAgdgOAAQgFAAgGAFg");
	this.shape_155.setTransform(367.75,482.95);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_156.setTransform(356.675,481.475);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFCCFF").s().p("AgWAtQgLgGgGgLQgHgLAAgQQAAgXAOgOQANgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQgBALAGAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgKgGgAgPgLIAiAAQgCgUgPAAQgPAAgCAUg");
	this.shape_157.setTransform(675,456.675);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFCCFF").s().p("AgLAxIghhhIAeAAIASA9IATg9IAWAAIghBhg");
	this.shape_158.setTransform(665.1,456.675);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFCCFF").s().p("AgNBEIAAhiIAcAAIAABigAgNgmIAAgdIAcAAIAAAdg");
	this.shape_159.setTransform(658.05,454.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFCCFF").s().p("AgOBDIAAiFIAcAAIAACFg");
	this.shape_160.setTransform(652.8,454.925);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFCCFF").s().p("AgiA3QgKgOAAgXQAAgYAKgOQAJgOASAAQAPAAAIAMIAAgtIAdAAIAACFIgbAAIAAgQQgKASgQAAQgRAAgJgNgAgOASQAAAdAPAAQAGAAAFgFQAEgFAAgKIAAgTQAAgWgOAAQgQAAAAAgg");
	this.shape_161.setTransform(639.475,455.025);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFCCFF").s().p("AANAyIAAg2IAAgOQgBgEgDgCQgDgDgEAAQgPAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAGgDQAGgDAIAAQANAAAJAHQAJAIAAAWIAAA+g");
	this.shape_162.setTransform(628.85,456.575);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFCCFF").s().p("AgkAsQgJgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgPAAgBAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFACAFQACAFAAANIAAAsQgBANACAFIgcAAQgBgGAAgJQgIAKgIAEQgGADgJAAQgOAAgIgHgAgPAUQABAGADADQADAEAGAAQAHAAAFgGQAFgHAAgJIAAgJQgdADgBAPg");
	this.shape_163.setTransform(617.7,456.675);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFCCFF").s().p("AgSBFIAAhLIgLAAIAAgWIALAAQABgQACgHQACgHAIgFQAHgFAOAAIAOABIAAAWIgKAAQgGAAgCADQgCADAAAHIAAAEIASAAIAAAWIgSAAIAABLg");
	this.shape_164.setTransform(604.35,454.675);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFCCFF").s().p("AgNBDIAAiFIAbAAIAACFg");
	this.shape_165.setTransform(598.5,454.925);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXAOgOQANgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQgBALAGAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgLgGgAgPgLIAiAAQgCgUgPAAQgQAAgBAUg");
	this.shape_166.setTransform(590.5,456.675);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFCCFF").s().p("AgrAWIAYgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgKgHAAgOQABgOAKgJQAMgJASAAQAPAAAKAGQAKAGAEANIgVAGQgEgNgPAAQgOAAAAAJQABADACACQADACAKACQARACAIADQAIADAFAGQAFAHAAAKQAAAPgMAKQgMAJgUAAQglAAgHgdg");
	this.shape_167.setTransform(580.25,456.675);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFCCFF").s().p("AgmBBIAAgWIAOACQAJgBADgDQADgDABgGIgkhiIAfAAIASA7IATg7IAUAAIgeBeQgGAQgDAHQgEAHgGAEQgGAFgNgBIgOgBg");
	this.shape_168.setTransform(571.2,458.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFCCFF").s().p("AApAyIAAg1QAAgMgBgDQAAgEgDgCQgDgCgFAAQgFAAgEADQgGADAAARIAAA1IgcAAIAAg1QAAgMgBgEQgBgDgDgCQgDgCgEAAQgIAAgEAEQgDAFAAAOIAAA1IgcAAIAAhhIAbAAIAAAPQAHgRAVAAQARAAAJARQAIgRAUAAQAKAAAHAEQAHAEADAGQADAGAAAQIAAA/g");
	this.shape_169.setTransform(558.55,456.575);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFCCFF").s().p("AgSBFIAAhLIgLAAIAAgWIALAAQABgQACgHQACgHAIgFQAIgFANAAIAOABIAAAWIgKAAQgGAAgCADQgCADAAAHIAAAEIASAAIAAAWIgSAAIAABLg");
	this.shape_170.setTransform(542.15,454.675);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAFgLQAHgLAJgHQAKgGAPAAQAWAAANAOQAMAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgMgZQgEAGAAATQAAARAEAIQAFAHAHAAQAHAAAFgGQAFgHAAgSQgBgTgEgGQgDgHgJAAQgHAAgFAGg");
	this.shape_171.setTransform(533.55,456.675);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFCCFF").s().p("AANAyIAAg2IAAgOQgBgEgDgCQgDgDgEAAQgPAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAGgDQAGgDAHAAQAOAAAJAHQAJAIAAAWIAAA+g");
	this.shape_172.setTransform(517.7,456.575);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgLgZQgFAGAAATQAAARAFAIQADAHAIAAQAHAAAFgGQAEgHAAgSQAAgTgDgGQgFgHgIAAQgHAAgEAGg");
	this.shape_173.setTransform(506.85,456.675);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFCCFF").s().p("AgOBEIAAhiIAcAAIAABigAgOgmIAAgdIAcAAIAAAdg");
	this.shape_174.setTransform(498.9,454.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFCCFF").s().p("AgsAWIAZgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgKgHAAgOQAAgOAMgJQAKgJATAAQAQAAAJAGQAKAGAEANIgVAGQgDgNgQAAQgOAAAAAJQAAADADACQACACALACQARACAIADQAIADAFAGQAEAHABAKQAAAPgMAKQgLAJgWAAQgkAAgIgdg");
	this.shape_175.setTransform(491.35,456.675);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFCCFF").s().p("AgaAzIAAhiIAaAAIAAASQAHgUAOAAIAGAAIAAAdQgJAAgFACQgFADgDAHQgDAIgBAKIAAApg");
	this.shape_176.setTransform(483.7,456.55);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXANgOQAOgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQAAALAFAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgLgGgAgPgLIAiAAQgCgUgPAAQgQAAgBAUg");
	this.shape_177.setTransform(474.5,456.675);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFCCFF").s().p("AgLAxIghhhIAeAAIASA9IATg9IAWAAIgiBhg");
	this.shape_178.setTransform(464.6,456.675);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_179.setTransform(451.475,455.225);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFCCFF").s().p("AgrAWIAYgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgKgHAAgOQAAgOAMgJQAKgJATAAQAQAAAJAGQAKAGAEANIgVAGQgDgNgQAAQgOAAAAAJQAAADADACQACACALACQARACAIADQAIADAFAGQAEAHABAKQAAAPgMAKQgLAJgVAAQglAAgHgdg");
	this.shape_180.setTransform(443.2,456.675);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQABALAFAFQAGAGAGAAQAPAAADgQIAaACQgKAigjAAQgNAAgLgGgAgQgLIAiAAQgBgUgPAAQgQAAgCAUg");
	this.shape_181.setTransform(433.3,456.675);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFCCFF").s().p("AgJBAQgHgDgGgKQgDACgEANIgPAAIAAiFIAdAAIAAAwQAIgPAQAAQAQAAALAOQAJAOAAAWQAAAXgKAPQgKAOgTAAQgJAAgGgEgAgLgIQgEAGAAAKIAAATQAAAKAEAFQAFAGAGAAQAGAAAFgHQAFgGgBgTQAAgUgEgFQgFgFgGAAQgGAAgFAGg");
	this.shape_182.setTransform(422.75,455.025);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFCCFF").s().p("AgWAtQgLgGgGgLQgHgLAAgQQAAgXAOgOQAMgOAVAAQATAAANANQAOANAAAdIg+AAIAAAEQgBALAGAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgKgGgAgPgLIAhAAQgBgUgPAAQgPAAgCAUg");
	this.shape_183.setTransform(406.7,456.675);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFCCFF").s().p("AANBDIAAg4IAAgNQgBgDgDgDQgDgCgEAAQgFAAgFAEQgGAEABANIAAA4IgcAAIAAiFIAcAAIAAAwQAHgPATAAQAJAAAIAEQAHAFADAHQACAGAAANIAABBg");
	this.shape_184.setTransform(395.9,454.925);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_185.setTransform(386.775,455.225);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFCCFF").s().p("AgWAtQgLgGgHgLQgGgLAAgQQAAgXAOgOQANgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQgBALAGAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgKgGgAgPgLIAiAAQgCgUgPAAQgPAAgCAUg");
	this.shape_186.setTransform(373.05,456.675);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFCCFF").s().p("AgKBAQgFgDgHgKQgDACgEANIgPAAIAAiFIAdAAIAAAwQAIgPAPAAQARAAAKAOQAKAOAAAWQAAAXgKAPQgKAOgTAAQgJAAgHgEgAgKgIQgFAGAAAKIAAATQAAAKAFAFQAEAGAGAAQAGAAAFgHQAEgGAAgTQABgUgGgFQgEgFgGAAQgGAAgEAGg");
	this.shape_187.setTransform(362.5,455.025);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFCCFF").s().p("AghAlQgNgPAAgWQAAgPAFgLQAHgLAJgHQAKgGAPAAQAWAAANAOQAMAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgMgOgAgMgZQgEAGAAATQAAARAEAIQAFAHAHAAQAHAAAFgGQAFgHAAgSQAAgTgFgGQgDgHgJAAQgHAAgFAGg");
	this.shape_188.setTransform(681.15,431.975);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_189.setTransform(672.125,430.525);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgGgLQgHgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQABALAFAFQAGAGAGAAQAPAAADgQIAaACQgLAigiAAQgNAAgLgGgAgQgLIAiAAQgBgUgPAAQgPAAgDAUg");
	this.shape_190.setTransform(658.4,431.975);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFCCFF").s().p("AgiA3QgKgOAAgXQAAgYAKgOQAJgOASAAQAPAAAIAMIAAgtIAdAAIAACFIgbAAIAAgQQgKASgQAAQgRAAgJgNgAgOASQAAAdAPAAQAGAAAFgFQAEgFAAgKIAAgTQAAgWgOAAQgQAAAAAgg");
	this.shape_191.setTransform(647.375,430.325);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFCCFF").s().p("AgOBEIAAhiIAcAAIAABigAgOgmIAAgdIAcAAIAAAdg");
	this.shape_192.setTransform(639.65,430.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFCCFF").s().p("AggAmQgNgOAAgXQAAgXANgOQANgOAWAAQASAAAMAKQAMALABARIgbABQgCgSgOAAQgPAAgBAdQAAASAGAFQAEAFAGAAQAOAAACgRIAbABQgCASgMALQgLAKgUAAQgUAAgNgNg");
	this.shape_193.setTransform(632,431.975);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQABALAFAFQAGAGAGAAQAPAAADgQIAaACQgKAigjAAQgNAAgLgGgAgQgLIAiAAQgBgUgPAAQgQAAgCAUg");
	this.shape_194.setTransform(621.4,431.975);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFCCFF").s().p("AgiA3QgKgOAAgXQAAgYAKgOQAJgOASAAQAPAAAIAMIAAgtIAdAAIAACFIgbAAIAAgQQgKASgQAAQgRAAgJgNgAgOASQAAAdAPAAQAGAAAFgFQAEgFAAgKIAAgTQAAgWgOAAQgQAAAAAgg");
	this.shape_195.setTransform(610.375,430.325);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFCCFF").s().p("AgiA3QgKgOAAgXQAAgYAKgOQAJgOASAAQAPAAAIAMIAAgtIAdAAIAACFIgbAAIAAgQQgKASgQAAQgRAAgJgNgAgOASQAAAdAPAAQAGAAAFgFQAEgFAAgKIAAgTQAAgWgOAAQgQAAAAAgg");
	this.shape_196.setTransform(594.575,430.325);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFCCFF").s().p("AANAyIAAg2IAAgOQgBgEgDgCQgDgDgFAAQgOAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAHgDQAFgDAHAAQAOAAAJAHQAJAIAAAWIAAA+g");
	this.shape_197.setTransform(583.95,431.875);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFCCFF").s().p("AgkAsQgJgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgPAAgBAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFACAFQACAFAAANIAAAsQgBANACAFIgcAAQgCgGABgJQgIAKgIAEQgGADgJAAQgOAAgIgHgAgPAUQAAAGAEADQADAEAGAAQAHAAAFgGQAFgHAAgJIAAgJQgdADgBAPg");
	this.shape_198.setTransform(572.8,431.975);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFCCFF").s().p("AgsBDIAAiDIAbAAIAAAOQAHgQASAAQAQAAAKANQAKANAAAYQAAAZgKANQgKAOgRAAQgPAAgHgOIAAAtgAgLgpQgEAFAAANIAAAPQAAAJABAEQABAEAEADQAFADAEAAQAFAAAFgGQAEgGAAgUQAAgdgOAAQgGAAgFAFg");
	this.shape_199.setTransform(557.45,433.55);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_200.setTransform(546.375,432.075);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgGgLQgHgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQAAALAGAFQAGAGAGAAQAPAAADgQIAaACQgKAigjAAQgNAAgLgGgAgQgLIAiAAQgBgUgPAAQgPAAgDAUg");
	this.shape_201.setTransform(530.6,431.975);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFCCFF").s().p("AAQBDIgTgtIgRAUIAAAZIgcAAIAAiFIAcAAIAABPIAEgFIAFgGIAbghIAdAAIgdAhIAhBBg");
	this.shape_202.setTransform(520.475,430.225);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFCCFF").s().p("AglAsQgIgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgOAAgCAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFACAFQABAFAAANIAAAsQAAANACAFIgcAAQgBgGgBgJQgHAKgIAEQgFADgKAAQgOAAgJgHgAgOAUQAAAGADADQADAEAGAAQAGAAAGgGQAFgHAAgJIAAgJQgdADAAAPg");
	this.shape_203.setTransform(508.75,431.975);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFCCFF").s().p("AAPAxIgPg+IgPA+IgYAAIgfhhIAfAAIAQA7IAPg7IAZAAIAPA7IAQg7IAXAAIgeBhg");
	this.shape_204.setTransform(496.325,431.975);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFCCFF").s().p("AgPBDIAAiFIAeAAIAACFg");
	this.shape_205.setTransform(481.25,430.225);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFCCFF").s().p("AgmBCIAAgXIAOABQAJABADgEQADgDABgGIgkhiIAfAAIASA7IATg7IAVAAIggBeQgEAQgFAHQgDAHgGAEQgHAEgMABIgOgBg");
	this.shape_206.setTransform(468.85,433.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFCCFF").s().p("AglAsQgIgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgOAAgCAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQACAFAAANIAAAsQABANABAFIgcAAQgBgGgBgJQgHAKgIAEQgFADgKAAQgOAAgJgHgAgOAUQAAAGADADQADAEAGAAQAGAAAGgGQAFgHAAgJIAAgJQgdADAAAPg");
	this.shape_207.setTransform(458.8,431.975);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFCCFF").s().p("AgiA3QgKgOAAgXQAAgYAKgOQAJgOASAAQAPAAAIAMIAAgtIAdAAIAACFIgbAAIAAgQQgKASgQAAQgRAAgJgNgAgOASQAAAdAPAAQAGAAAFgFQAEgFAAgKIAAgTQAAgWgOAAQgQAAAAAgg");
	this.shape_208.setTransform(447.925,430.325);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFCCFF").s().p("AgmBCIAAgXIAOABQAJABADgEQADgDABgGIgjhiIAeAAIASA7IATg7IAVAAIggBeQgEAQgFAHQgDAHgGAEQgHAEgMABIgOgBg");
	this.shape_209.setTransform(433.3,433.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFCCFF").s().p("AgZAyIAAhhIAZAAIAAASQAHgVAOAAIAGABIAAAcQgJABgFADQgFACgDAIQgEAGABALIAAAog");
	this.shape_210.setTransform(425.8,431.85);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFCCFF").s().p("AgWAtQgLgGgGgLQgHgLAAgQQAAgXAOgOQAMgOAVAAQATAAANANQAOANAAAdIg+AAIAAAEQgBALAGAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgKgGgAgPgLIAhAAQgBgUgPAAQgPAAgCAUg");
	this.shape_211.setTransform(416.6,431.975);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFCCFF").s().p("AgLAxIghhhIAeAAIASA9IATg9IAWAAIghBhg");
	this.shape_212.setTransform(406.7,431.975);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFCCFF").s().p("AgWAtQgLgGgGgLQgHgLAAgQQAAgXAOgOQANgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQgBALAGAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgKgGgAgPgLIAiAAQgCgUgPAAQgPAAgCAUg");
	this.shape_213.setTransform(396.9,431.975);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_214.setTransform(382.875,430.525);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFCCFF").s().p("AglAsQgIgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgPAAgBAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQACAFAAANIAAAsQAAANACAFIgcAAQgBgGgBgJQgHAKgHAEQgHADgJAAQgOAAgJgHgAgOAUQgBAGAEADQADAEAGAAQAHAAAFgGQAFgHAAgJIAAgJQgeADABAPg");
	this.shape_215.setTransform(373.85,431.975);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFCCFF").s().p("AANBDIAAg4IgBgNQgBgDgCgDQgDgCgEAAQgFAAgFAEQgGAEAAANIAAA4IgcAAIAAiFIAcAAIAAAwQAJgPARAAQALAAAGAEQAIAFACAHQAEAGAAANIAABBg");
	this.shape_216.setTransform(363.2,430.225);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_217.setTransform(354.075,430.525);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFCCFF").s().p("AAPAxIgPg+IgPA+IgYAAIgfhhIAfAAIAQA7IAPg7IAZAAIAPA7IAQg7IAXAAIgeBhg");
	this.shape_218.setTransform(681.275,407.275);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAFgLQAHgLAJgHQAKgGAPAAQAWAAANAOQAMAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgLgZQgFAGAAATQAAARAFAIQADAHAIAAQAIAAAEgGQAEgHABgSQAAgTgFgGQgEgHgIAAQgHAAgEAGg");
	this.shape_219.setTransform(668.75,407.275);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFCCFF").s().p("AANAyIAAg2IAAgOQgBgEgDgCQgDgDgEAAQgPAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAGgDQAGgDAIAAQANAAAJAHQAJAIAAAWIAAA+g");
	this.shape_220.setTransform(657.9,407.175);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFCCFF").s().p("AAQBDIgTgtIgRAUIAAAZIgcAAIAAiFIAcAAIAABPIAEgFIAFgGIAbghIAdAAIgdAhIAhBBg");
	this.shape_221.setTransform(647.625,405.525);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_222.setTransform(632.875,405.825);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFCCFF").s().p("AgrAWIAYgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgKgHAAgOQAAgOALgJQAMgJASAAQAPAAAKAGQAKAGAEANIgVAGQgDgNgQAAQgNAAAAAJQgBADADACQACACALACQARACAIADQAIADAFAGQAFAHgBAKQABAPgMAKQgMAJgUAAQglAAgHgdg");
	this.shape_223.setTransform(624.6,407.275);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_224.setTransform(614.625,407.375);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFCCFF").s().p("AgXBUIAAgXIAHABQAGAAACgEQADgDAAgKIAAhcIAdAAIAABcIAAAOQAAAHgEAGQgDAHgIADQgHAEgJAAIgQgCgAgFg3IAAgeIAdAAIAAAeg");
	this.shape_225.setTransform(605.65,407.175);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_226.setTransform(595.175,405.825);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_227.setTransform(586.375,407.375);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFCCFF").s().p("AgJBAQgHgDgGgKQgDACgEANIgPAAIAAiFIAdAAIAAAwQAIgPAQAAQAQAAALAOQAJAOAAAWQAAAXgKAPQgKAOgTAAQgJAAgGgEgAgLgIQgEAGAAAKIAAATQAAAKAEAFQAFAGAGAAQAGAAAFgHQAFgGgBgTQAAgUgEgFQgFgFgGAAQgGAAgFAGg");
	this.shape_228.setTransform(575.75,405.625);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFCCFF").s().p("AgOAeIAOgeIgOAAIAAgdIAdAAIAAAbIgSAgg");
	this.shape_229.setTransform(562.45,412.25);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFCCFF").s().p("AgsAWIAZgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgKgHABgOQAAgOALgJQAKgJATAAQAPAAAKAGQAJAGAGANIgWAGQgDgNgQAAQgNAAAAAJQAAADACACQADACAKACQARACAIADQAIADAFAGQAEAHAAAKQAAAPgLAKQgMAJgVAAQgkAAgIgdg");
	this.shape_230.setTransform(555,407.275);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFCCFF").s().p("AgWAtQgLgGgGgLQgHgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQAAALAGAFQAGAGAGAAQAPAAADgQIAaACQgLAigiAAQgNAAgKgGgAgQgLIAiAAQgBgUgPAAQgQAAgCAUg");
	this.shape_231.setTransform(545.1,407.275);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFCCFF").s().p("AAQBDIgTgtIgRAUIAAAZIgcAAIAAiFIAcAAIAABPIAEgFIAFgGIAbghIAdAAIgdAhIAhBBg");
	this.shape_232.setTransform(534.975,405.525);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFCCFF").s().p("AglAsQgIgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgPAAgBAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQACAFAAANIAAAsQAAANACAFIgcAAQgBgGgBgJQgHAKgHAEQgHADgJAAQgOAAgJgHgAgOAUQgBAGAEADQADAEAGAAQAHAAAFgGQAFgHAAgJIAAgJQgeADABAPg");
	this.shape_233.setTransform(523.25,407.275);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_234.setTransform(514.375,405.825);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFCCFF").s().p("AgrAWIAYgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgKgHAAgOQAAgOAMgJQAKgJATAAQAQAAAJAGQAKAGAEANIgVAGQgEgNgPAAQgOAAAAAJQABADACACQACACALACQARACAIADQAIADAFAGQAEAHABAKQAAAPgMAKQgMAJgUAAQglAAgHgdg");
	this.shape_235.setTransform(506.1,407.275);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFCCFF").s().p("AgNBEIAAhhIAbAAIAABhgAgNgmIAAgdIAbAAIAAAdg");
	this.shape_236.setTransform(498.95,405.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFCCFF").s().p("AAqAyIAAg1QAAgMgBgDQgBgEgDgCQgDgCgFAAQgEAAgGADQgEADAAARIAAA1IgcAAIAAg1QAAgMgCgEQgBgDgDgCQgDgCgFAAQgHAAgEAEQgDAFAAAOIAAA1IgdAAIAAhhIAcAAIAAAPQAHgRAVAAQARAAAJARQAIgRAVAAQAKAAAHAEQAHAEADAGQACAGAAAQIAAA/g");
	this.shape_237.setTransform(488.05,407.175);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFCCFF").s().p("AgWAtQgLgGgHgLQgGgLAAgQQAAgXAOgOQANgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQgBALAGAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgKgGgAgPgLIAiAAQgCgUgPAAQgPAAgCAUg");
	this.shape_238.setTransform(469.45,407.275);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFCCFF").s().p("AAQBDIgTgtIgRAUIAAAZIgcAAIAAiFIAcAAIAABPIAEgFIAFgGIAbghIAdAAIgdAhIAhBBg");
	this.shape_239.setTransform(459.325,405.525);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFCCFF").s().p("AgkAsQgJgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgOAAgCAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFACAFQACAFAAANIAAAsQgBANACAFIgcAAQgBgGAAgJQgIAKgIAEQgGADgJAAQgOAAgIgHgAgPAUQABAGADADQADAEAGAAQAHAAAFgGQAFgHAAgJIAAgJQgdADgBAPg");
	this.shape_240.setTransform(447.6,407.275);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFCCFF").s().p("AApAyIAAg1QAAgMAAgDQgBgEgDgCQgDgCgFAAQgEAAgFADQgGADABARIAAA1IgcAAIAAg1QgBgMgBgEQgBgDgDgCQgDgCgFAAQgHAAgEAEQgDAFAAAOIAAA1IgcAAIAAhhIAbAAIAAAPQAHgRAVAAQASAAAIARQAIgRAVAAQAKAAAHAEQAGAEAEAGQACAGAAAQIAAA/g");
	this.shape_241.setTransform(434.15,407.175);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFCCFF").s().p("AgPBDIAAiFIAfAAIAACFg");
	this.shape_242.setTransform(418,405.525);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFCCFF").s().p("AgOAeIAOgeIgOAAIAAgdIAdAAIAAAbIgSAgg");
	this.shape_243.setTransform(407.5,412.25);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFCCFF").s().p("AgWAtQgLgGgHgLQgGgLAAgQQAAgXAOgOQANgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQgBALAGAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgKgGgAgPgLIAiAAQgCgUgPAAQgPAAgCAUg");
	this.shape_244.setTransform(399.6,407.275);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFCCFF").s().p("AApAyIAAg1QABgMgBgDQgBgEgDgCQgDgCgFAAQgEAAgFADQgGADAAARIAAA1IgbAAIAAg1QgBgMgBgEQgBgDgDgCQgDgCgFAAQgHAAgEAEQgDAFAAAOIAAA1IgcAAIAAhhIAbAAIAAAPQAHgRAVAAQASAAAIARQAIgRAVAAQAJAAAIAEQAGAEAEAGQACAGAAAQIAAA/g");
	this.shape_245.setTransform(386,407.175);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFCCFF").s().p("AgZAyIAAhhIAZAAIAAASQAHgVAOABIAGAAIAAAdQgJgBgFADQgFADgDAHQgEAIABALIAAAng");
	this.shape_246.setTransform(369.65,407.15);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFCCFF").s().p("AghAlQgNgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgMgOgAgMgZQgDAGAAATQAAARADAIQAEAHAIAAQAIAAAEgGQAFgHgBgSQAAgTgDgGQgEgHgJAAQgHAAgFAGg");
	this.shape_247.setTransform(360.45,407.275);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFCCFF").s().p("AgRBFIAAhLIgMAAIAAgWIAMAAQAAgQACgHQACgHAIgFQAHgFAPAAIANABIAAAWIgLAAQgFAAgCADQgCADAAAHIAAAEIASAAIAAAWIgSAAIAABLg");
	this.shape_248.setTransform(351.95,405.275);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFCCFF").s().p("AgsBDIAAiDIAbAAIAAAOQAHgQASAAQAQAAAKANQAKANAAAYQAAAZgKANQgKANgRABQgPgBgIgNIAAAtgAgLgpQgEAFgBAMIAAAQQAAAJACAEQABAEAEADQAEADAFAAQAFAAAFgGQAEgGABgUQAAgdgPAAQgGAAgFAFg");
	this.shape_249.setTransform(677.95,384.15);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_250.setTransform(666.875,382.675);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_251.setTransform(652.775,381.125);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFCCFF").s().p("AgWAtQgLgGgHgLQgGgLAAgQQAAgXAOgOQANgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQgBALAGAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgKgGgAgPgLIAiAAQgCgUgPAAQgQAAgBAUg");
	this.shape_252.setTransform(644.05,382.575);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFCCFF").s().p("AgrAWIAYgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgKgHAAgOQABgOAKgJQAMgJASAAQAPAAAKAGQAKAGAEANIgVAGQgEgNgPAAQgOAAAAAJQABADACACQADACAKACQARACAIADQAIADAFAGQAFAHAAAKQAAAPgMAKQgMAJgUAAQglAAgHgdg");
	this.shape_253.setTransform(633.8,382.575);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFCCFF").s().p("AgsAWIAZgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgKgHABgOQAAgOALgJQAKgJATAAQAPAAAKAGQAJAGAGANIgWAGQgEgNgPAAQgNAAAAAJQAAADACACQACACALACQARACAIADQAIADAFAGQAEAHAAAKQAAAPgLAKQgMAJgVAAQgkAAgIgdg");
	this.shape_254.setTransform(619.35,382.575);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFCCFF").s().p("AgiA3QgKgOAAgXQAAgYAKgOQAJgOASAAQAPAAAIAMIAAgtIAdAAIAACFIgbAAIAAgQQgKASgQAAQgRAAgJgNgAgOASQAAAdAPAAQAGAAAFgFQAEgFAAgKIAAgTQAAgWgOAAQgQAAAAAgg");
	this.shape_255.setTransform(609.125,380.925);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFCCFF").s().p("AgaAzIAAhiIAaAAIAAASQAGgUAQgBIAEABIAAAdQgIAAgFADQgFACgDAIQgEAHAAAKIAAApg");
	this.shape_256.setTransform(600.9,382.45);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFCCFF").s().p("AglAsQgIgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgPAAgBAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQACAFABANIAAAsQAAANABAFIgcAAQgCgGAAgJQgHAKgHAEQgHADgJAAQgOAAgJgHgAgOAUQAAAGADADQADAEAGAAQAGAAAGgGQAFgHAAgJIAAgJQgdADAAAPg");
	this.shape_257.setTransform(591.4,382.575);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFCCFF").s().p("AgiA3QgKgOAAgXQAAgYAKgOQAJgOASAAQAPAAAIAMIAAgtIAdAAIAACFIgbAAIAAgQQgKASgQAAQgRAAgJgNgAgOASQAAAdAPAAQAGAAAFgFQAEgFAAgKIAAgTQAAgWgOAAQgQAAAAAgg");
	this.shape_258.setTransform(580.525,380.925);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFCCFF").s().p("AANAyIAAg2IAAgOQgBgEgDgCQgDgDgEAAQgPAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAGgDQAGgDAHAAQAOAAAJAHQAJAIAAAWIAAA+g");
	this.shape_259.setTransform(569.9,382.475);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFCCFF").s().p("AgkAsQgJgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgOAAgCAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFACAFQACAFAAANIAAAsQgBANACAFIgcAAQgBgGAAgJQgIAKgIAEQgGADgJAAQgOAAgIgHgAgPAUQABAGADADQADAEAGAAQAHAAAFgGQAFgHAAgJIAAgJQgdADgBAPg");
	this.shape_260.setTransform(558.75,382.575);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_261.setTransform(549.875,381.125);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFCCFF").s().p("AgsAWIAZgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgJgHAAgOQgBgOALgJQALgJATAAQAPAAAKAGQAJAGAGANIgWAGQgDgNgQAAQgNAAAAAJQAAADACACQADACAKACQARACAIADQAIADAFAGQAFAHgBAKQAAAPgLAKQgLAJgWAAQgkAAgIgdg");
	this.shape_262.setTransform(541.6,382.575);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXANgOQAOgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQAAALAFAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgLgGgAgPgLIAiAAQgCgUgPAAQgQAAgBAUg");
	this.shape_263.setTransform(526.7,382.575);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFCCFF").s().p("AANBDIAAg4IgBgNQgBgDgCgDQgDgCgEAAQgEAAgGAEQgFAEgBANIAAA4IgcAAIAAiFIAcAAIAAAwQAJgPARAAQAKAAAHAEQAHAFADAHQADAGAAANIAABBg");
	this.shape_264.setTransform(515.9,380.825);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_265.setTransform(506.775,381.125);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFCCFF").s().p("AghAlQgNgPAAgWQAAgPAFgLQAHgLAJgHQAKgGAPAAQAWAAANAOQAMAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgMgOgAgMgZQgDAGgBATQABARADAIQAFAHAHAAQAHAAAFgGQAFgHAAgSQAAgTgFgGQgDgHgJAAQgHAAgFAGg");
	this.shape_266.setTransform(493.05,382.575);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_267.setTransform(484.025,381.125);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFCCFF").s().p("AgsBDIAAiDIAbAAIAAAOQAHgQASAAQAQAAAKANQALANgBAYQABAZgLANQgKANgRABQgPgBgIgNIAAAtgAgKgpQgFAFgBAMIAAAQQAAAJACAEQABAEAEADQAEADAFAAQAFAAAFgGQAEgGABgUQAAgdgPAAQgGAAgEAFg");
	this.shape_268.setTransform(470.5,384.15);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_269.setTransform(459.425,382.675);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQABALAFAFQAGAGAGAAQAPAAADgQIAaACQgKAigjAAQgNAAgLgGgAgQgLIAjAAQgCgUgPAAQgQAAgCAUg");
	this.shape_270.setTransform(443.65,382.575);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFCCFF").s().p("AgKAxIgihhIAeAAIASA9IAUg9IAVAAIgiBhg");
	this.shape_271.setTransform(433.75,382.575);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFCCFF").s().p("AgNBEIAAhiIAbAAIAABigAgNgmIAAgdIAbAAIAAAdg");
	this.shape_272.setTransform(426.7,380.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFCCFF").s().p("AgNBDIAAiFIAcAAIAACFg");
	this.shape_273.setTransform(421.45,380.825);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFCCFF").s().p("AgrAWIAYgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgKgHAAgOQAAgOAMgJQAKgJATAAQAQAAAJAGQAKAGAEANIgVAGQgEgNgPAAQgOAAAAAJQABADACACQACACALACQARACAIADQAIADAFAGQAEAHABAKQAAAPgMAKQgMAJgUAAQglAAgHgdg");
	this.shape_274.setTransform(408.9,382.575);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFCCFF").s().p("AgmBCIAAgXIAOABQAJAAADgDQADgDABgGIgkhiIAfAAIASA7IATg7IAUAAIgeBeQgGAQgDAHQgEAHgGAEQgGAEgNABIgOgBg");
	this.shape_275.setTransform(399.85,384.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFCCFF").s().p("AglAsQgIgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgPAAgBAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQACAFABANIAAAsQAAANABAFIgcAAQgCgGAAgJQgHAKgHAEQgHADgJAAQgOAAgJgHgAgOAUQAAAGADADQADAEAGAAQAGAAAGgGQAFgHAAgJIAAgJQgdADAAAPg");
	this.shape_276.setTransform(389.8,382.575);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFCCFF").s().p("AAPAxIgPg+IgPA+IgYAAIgfhhIAfAAIAQA7IAPg7IAZAAIAPA7IAQg7IAXAAIgeBhg");
	this.shape_277.setTransform(377.375,382.575);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFCCFF").s().p("AgOBDIAAiFIAdAAIAACFg");
	this.shape_278.setTransform(367.6,380.825);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFCCFF").s().p("AgkAsQgJgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgOAAgCAOIgbgDQADgQANgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQADAFAAANIAAAsQAAANABAFIgcAAQgBgGAAgJQgIAKgHAEQgHADgJAAQgOAAgIgHgAgOAUQAAAGADADQADAEAGAAQAGAAAGgGQAFgHAAgJIAAgJQgdADAAAPg");
	this.shape_279.setTransform(359.3,382.575);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_280.setTransform(677.175,356.425);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFCCFF").s().p("AgHAcIgEg3IAXAAIgEA3g");
	this.shape_281.setTransform(671.825,352.225);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFCCFF").s().p("AANAyIAAg2IAAgOQgBgEgDgCQgDgDgEAAQgPAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAGgDQAGgDAHAAQAOAAAJAHQAJAIAAAWIAAA+g");
	this.shape_282.setTransform(664.4,357.775);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFCCFF").s().p("AgkAsQgJgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgOAAgCAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFACAFQACAFAAANIAAAsQgBANACAFIgcAAQgBgGAAgJQgIAKgIAEQgGADgJAAQgOAAgIgHgAgPAUQABAGADADQADAEAGAAQAHAAAFgGQAFgHAAgJIAAgJQgdADgBAPg");
	this.shape_283.setTransform(653.25,357.875);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFCCFF").s().p("AggAmQgNgOAAgXQAAgXAOgOQANgOAVAAQASAAAMAKQAMALABARIgbABQgBgSgOAAQgQAAAAAdQgBASAGAFQAEAFAGAAQANAAADgRIAbABQgBASgNALQgLAKgUAAQgUAAgNgNg");
	this.shape_284.setTransform(643.05,357.875);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFCCFF").s().p("AgOBDIAAiFIAdAAIAACFg");
	this.shape_285.setTransform(629.9,356.125);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFCCFF").s().p("AgOAfIAOgfIgOAAIAAgdIAdAAIAAAbIgSAhg");
	this.shape_286.setTransform(619.4,362.85);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQABALAFAFQAGAGAGAAQAPAAADgQIAaACQgKAigjAAQgNAAgLgGgAgQgLIAiAAQgBgUgPAAQgQAAgCAUg");
	this.shape_287.setTransform(611.5,357.875);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFCCFF").s().p("AgJBAQgHgDgGgKQgDACgEANIgPAAIAAiFIAdAAIAAAwQAIgPAQAAQAQAAALAOQAJAOAAAWQAAAXgKAPQgKAOgTAAQgJAAgGgEgAgLgIQgEAGAAAKIAAATQAAAKAEAFQAFAGAGAAQAGAAAFgHQAFgGgBgTQAAgUgEgFQgFgFgGAAQgGAAgFAGg");
	this.shape_288.setTransform(600.95,356.225);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFCCFF").s().p("AghAlQgNgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgMgOgAgMgZQgDAGAAATQAAARADAIQAEAHAIAAQAHAAAFgGQAEgHAAgSQAAgTgDgGQgFgHgIAAQgHAAgFAGg");
	this.shape_289.setTransform(584.9,357.875);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_290.setTransform(575.875,356.425);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXAOgOQANgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQgBALAGAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgLgGgAgPgLIAiAAQgCgUgPAAQgQAAgBAUg");
	this.shape_291.setTransform(562.15,357.875);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFCCFF").s().p("AApAyIAAg1QAAgMgBgDQAAgEgDgCQgDgCgFAAQgEAAgFADQgGADAAARIAAA1IgbAAIAAg1QgBgMgBgEQgBgDgDgCQgDgCgFAAQgHAAgEAEQgDAFAAAOIAAA1IgcAAIAAhhIAbAAIAAAPQAHgRAVAAQASAAAIARQAIgRAUAAQAKAAAIAEQAGAEADAGQADAGAAAQIAAA/g");
	this.shape_292.setTransform(548.55,357.775);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_293.setTransform(531.625,356.425);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFCCFF").s().p("AggAmQgNgOAAgXQAAgXAOgOQANgOAVAAQASAAAMAKQAMALABARIgbABQgBgSgOAAQgQAAAAAdQAAASAEAFQAFAFAGAAQANAAADgRIAbABQgBASgMALQgNAKgTAAQgUAAgNgNg");
	this.shape_294.setTransform(523.25,357.875);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXAOgOQANgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQgBALAGAFQAFAGAIAAQAOAAADgQIAbACQgMAighAAQgOAAgLgGgAgPgLIAiAAQgCgUgPAAQgPAAgCAUg");
	this.shape_295.setTransform(512.65,357.875);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFCCFF").s().p("AgsBDIAAiDIAbAAIAAAPQAIgRARAAQARAAAKAMQAKANAAAZQAAAZgKAOQgLAMgQAAQgQAAgIgMIAAAsgAgKgpQgGAGAAAMIAAAOQABAKABAEQACAEAEADQAEADAEAAQAFAAAFgGQAFgGAAgUQgBgdgOAAQgFAAgFAFg");
	this.shape_296.setTransform(502.15,359.45);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFCCFF").s().p("AAQAxIgTgiIgUAiIgZAAIAgg0IgcgtIAhAAIAPAaIAQgaIAZAAIgdAtIAhA0g");
	this.shape_297.setTransform(491.575,357.875);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFCCFF").s().p("AgWAtQgLgGgGgLQgHgLAAgQQAAgXAOgOQANgOAUAAQATAAANANQAOANAAAdIg/AAIAAAEQAAALAGAFQAFAGAIAAQAOAAADgQIAaACQgKAigjAAQgNAAgKgGgAgQgLIAiAAQgBgUgPAAQgPAAgDAUg");
	this.shape_298.setTransform(481.3,357.875);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_299.setTransform(465.525,357.975);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgLgZQgEAGgBATQABARAEAIQADAHAIAAQAHAAAFgGQAEgHAAgSQAAgTgDgGQgFgHgIAAQgHAAgEAGg");
	this.shape_300.setTransform(454.75,357.875);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFCCFF").s().p("AgmBBIAAgWIAOABQAJAAADgDQADgDACgGIgkhhIAeAAIASA6IASg6IAWAAIggBdQgEAQgFAHQgDAHgGAEQgHAFgMgBIgOgBg");
	this.shape_301.setTransform(444.9,359.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFCCFF").s().p("AgZAyIAAhhIAZAAIAAASQAHgVAOABIAGAAIAAAcQgJAAgFADQgFADgDAIQgDAGgBAMIAAAng");
	this.shape_302.setTransform(432.4,357.75);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXAOgOQANgOAUAAQATAAANANQAOANAAAdIg+AAIAAAEQAAALAFAFQAFAGAHAAQAPAAADgQIAbACQgMAighAAQgOAAgLgGgAgPgLIAiAAQgCgUgPAAQgQAAgBAUg");
	this.shape_303.setTransform(423.2,357.875);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_304.setTransform(414.175,356.425);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFCCFF").s().p("AANBDIAAg4IAAgNQgBgDgDgDQgDgCgEAAQgFAAgFAEQgGAEABANIAAA4IgcAAIAAiFIAcAAIAAAwQAHgPATAAQAKAAAHAEQAHAFADAHQACAGAAANIAABBg");
	this.shape_305.setTransform(405.35,356.125);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFCCFF").s().p("AgrBEQgKgGAAgKQAAgNARgFQgNgGAAgLQAAgOAUgHQgSgIAAgQQAAgOANgJQAMgIAVAAQAMAAANAEQABgJAEgFQAEgFANAAIAIAAIAAATIgHgBQgKAAgCAIQAIAJAAAKQAAAOgLAIQgMAIgVAAIgPgBQgFACAAAFQAAAFAEACQAEABAPABQAXABAIACQAJACAGAGQAGAGAAAKQAAANgNAKQgMAJgfAAQgeAAgLgHgAgZAqQgDACAAAEQAAAGAJACQAIACALAAQAOAAAHgDQAFgCAAgFQAAgEgFgCQgFgCgUAAIgGAAIgHAAIgEAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAABgAgNgoQgEAEAAAHQAAAPAQAAQAGAAAFgEQAEgFAAgGQAAgGgEgEQgEgFgHAAQgIAAgEAEg");
	this.shape_306.setTransform(394.475,358.775);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFCCFF").s().p("AgeAuQgGgEgDgHQgCgHAAgOIAAg/IAcAAIAAA/QAAANALAAQAEAAAFgDQAEgDABgEIABgMIAAg2IAdAAIAABhIgbAAIAAgRQgIATgUAAQgLAAgGgEg");
	this.shape_307.setTransform(383.425,357.975);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFCCFF").s().p("AgkAsQgJgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgOAAgCAOIgbgDQADgQANgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQADAFAAANIAAAsQAAANABAFIgcAAQgBgGAAgJQgIAKgHAEQgHADgJAAQgOAAgIgHgAgPAUQABAGADADQADAEAGAAQAGAAAGgGQAFgHAAgJIAAgJQgdADgBAPg");
	this.shape_308.setTransform(372.35,357.875);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFCCFF").s().p("AgiA3QgKgOAAgXQAAgYAKgOQAJgOASAAQAPAAAIAMIAAgtIAdAAIAACFIgbAAIAAgQQgKASgQAAQgRAAgJgNgAgOASQAAAdAPAAQAGAAAFgFQAEgFAAgKIAAgTQAAgWgOAAQgQAAAAAgg");
	this.shape_309.setTransform(361.475,356.225);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgHgLQgGgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQABALAFAFQAGAGAGAAQAPAAADgQIAaACQgKAigjAAQgNAAgLgGgAgQgLIAiAAQgBgUgPAAQgQAAgCAUg");
	this.shape_310.setTransform(647.5,333.175);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFCCFF").s().p("AANBDIAAg4IgBgNQAAgDgDgDQgDgCgEAAQgFAAgFAEQgGAEAAANIAAA4IgcAAIAAiFIAcAAIAAAwQAJgPARAAQALAAAGAEQAIAFACAHQAEAGAAANIAABBg");
	this.shape_311.setTransform(636.7,331.425);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_312.setTransform(627.575,331.725);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFCCFF").s().p("AgXAtQgKgGgGgLQgHgLAAgQQAAgXANgOQANgOAVAAQATAAAOANQANANAAAdIg/AAIAAAEQAAALAGAFQAGAGAGAAQAPAAADgQIAaACQgKAigjAAQgNAAgLgGgAgQgLIAiAAQgBgUgPAAQgPAAgDAUg");
	this.shape_313.setTransform(613.85,333.175);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFCCFF").s().p("AgJBAQgHgDgGgKQgCACgEANIgQAAIAAiFIAdAAIAAAwQAIgPAQAAQAQAAALAOQAJAOAAAWQAAAXgKAPQgKAOgTAAQgJAAgGgEgAgKgIQgFAGAAAKIAAATQAAAKAFAFQAEAGAGAAQAGAAAFgHQAFgGAAgTQgBgUgFgFQgEgFgGAAQgHAAgDAGg");
	this.shape_314.setTransform(603.3,331.525);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFCCFF").s().p("AgrAWIAYgEQADAOASAAQAHAAAFgDQAFgCAAgFQAAgHgLgBQgdgEgJgHQgKgHAAgOQAAgOALgJQAMgJASAAQAPAAAKAGQAKAGAEANIgVAGQgEgNgPAAQgNAAAAAJQgBADADACQACACALACQARACAIADQAIADAFAGQAFAHgBAKQAAAPgLAKQgMAJgUAAQglAAgHgdg");
	this.shape_315.setTransform(587.7,333.175);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFCCFF").s().p("AgmBCIAAgXIAOACQAJAAADgEQADgDABgGIgjhiIAeAAIASA7IATg7IAVAAIggBeQgEAQgFAHQgDAHgGAEQgHAEgMAAIgOAAg");
	this.shape_316.setTransform(578.65,334.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFCCFF").s().p("AglAsQgIgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgOAAgCAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQACAFAAANIAAAsQABANABAFIgcAAQgBgGgBgJQgHAKgIAEQgFADgKAAQgOAAgJgHgAgOAUQAAAGADADQADAEAGAAQAGAAAGgGQAFgHAAgJIAAgJQgdADAAAPg");
	this.shape_317.setTransform(568.6,333.175);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFCCFF").s().p("AAPAxIgPg+IgPA+IgYAAIgfhhIAfAAIAQA7IAPg7IAZAAIAPA7IAQg7IAXAAIgeBhg");
	this.shape_318.setTransform(556.175,333.175);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFCCFF").s().p("AgNBDIAAiFIAbAAIAACFg");
	this.shape_319.setTransform(546.4,331.425);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFCCFF").s().p("AglAsQgIgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgPAAgBAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQACAFAAANIAAAsQAAANACAFIgcAAQgCgGAAgJQgHAKgHAEQgHADgJAAQgOAAgJgHgAgOAUQgBAGAEADQADAEAGAAQAHAAAFgGQAFgHAAgJIAAgJQgeADABAPg");
	this.shape_320.setTransform(538.1,333.175);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFCCFF").s().p("AgJA7QgIgHAAgSIAAgtIgQAAIAAgXIASAAIACgdIAYgCIAAAfIAVAAIAAAXIgVAAIAAAoQAAAIACADQADADAIAAIAKgBIAAAWIgTACQgRAAgHgHg");
	this.shape_321.setTransform(524.225,331.725);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgLgZQgEAGgBATQABARAEAIQADAHAIAAQAHAAAFgGQAEgHAAgSQAAgTgDgGQgFgHgIAAQgHAAgEAGg");
	this.shape_322.setTransform(515.5,333.175);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFCCFF").s().p("AANAyIAAg2IAAgOQgBgEgDgCQgDgDgEAAQgPAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAGgDQAGgDAHAAQAOAAAJAHQAJAIAAAWIAAA+g");
	this.shape_323.setTransform(504.65,333.075);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFCCFF").s().p("AgmBCIAAgXIAOACQAJAAADgEQADgDABgGIgkhiIAfAAIASA7IATg7IAVAAIgfBeQgGAQgDAHQgEAHgGAEQgHAEgMAAIgOAAg");
	this.shape_324.setTransform(489.65,334.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFCCFF").s().p("AglAsQgIgIAAgMQAAgKAFgIQAFgGALgFQALgEAcgCIAAgGQAAgOgOAAQgPAAgBAOIgbgDQACgQAOgHQANgHAQAAQAKAAAJACQAJACAFAFQAFAFABAFQACAFAAANIAAAsQAAANACAFIgcAAQgBgGgBgJQgHAKgHAEQgHADgJAAQgOAAgJgHgAgOAUQgBAGAEADQADAEAGAAQAHAAAFgGQAFgHAAgJIAAgJQgeADABAPg");
	this.shape_325.setTransform(479.6,333.175);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFCCFF").s().p("AAqAyIAAg1QAAgMgCgDQAAgEgDgCQgDgCgFAAQgFAAgFADQgEADAAARIAAA1IgdAAIAAg1QAAgMgBgEQgBgDgDgCQgDgCgEAAQgIAAgDAEQgFAFAAAOIAAA1IgcAAIAAhhIAcAAIAAAPQAHgRAUAAQATAAAIARQAIgRAUAAQALAAAGAEQAIAEACAGQAEAGAAAQIAAA/g");
	this.shape_326.setTransform(466.15,333.075);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFCCFF").s().p("AgOBDIAAiFIAdAAIAACFg");
	this.shape_327.setTransform(450,331.425);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFCCFF").s().p("AAPAxIgPg+IgPA+IgYAAIgfhhIAfAAIAQA7IAPg7IAZAAIAPA7IAQg7IAXAAIgeBhg");
	this.shape_328.setTransform(434.875,333.175);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFCCFF").s().p("AgiAlQgMgPAAgWQAAgPAGgLQAFgLAKgHQAKgGAPAAQAWAAAMAOQANAPAAAVQAAAWgNAPQgNAOgVAAQgVAAgNgOgAgLgZQgEAGgBATQABARAEAIQADAHAIAAQAHAAAFgGQAEgHAAgSQAAgTgDgGQgFgHgIAAQgHAAgEAGg");
	this.shape_329.setTransform(422.35,333.175);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFCCFF").s().p("AANAyIAAg2IAAgOQgBgEgDgCQgDgDgEAAQgPAAAAAXIAAA2IgdAAIAAhhIAbAAIAAAQQAHgMAGgDQAGgDAHAAQAOAAAJAHQAJAIAAAWIAAA+g");
	this.shape_330.setTransform(411.5,333.075);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFCCFF").s().p("AAQBDIgTgtIgRAUIAAAZIgcAAIAAiFIAcAAIAABPIAEgFIAFgGIAbghIAdAAIgdAhIAhBBg");
	this.shape_331.setTransform(401.225,331.425);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFCCFF").s().p("AgOBDIAAiFIAdAAIAACFg");
	this.shape_332.setTransform(387.25,331.425);

	this.text = new cjs.Text("", "20px 'BernardMT-Condensed'", "#FFCCFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.parent = this;
	this.text.setTransform(312,207.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFCCFF").s().p("AgYBcQgDgEAAgFQAAgSAWhGIABgGQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgEACQgEACgNAMIgGgEQAPgRAMgGQALgHAIAAQAFAAACACQADACAAADQAAAFgKAeQgOA1AAAKIABAEQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAEABATgTIAGAGQgUASgIAGQgKAFgGAAQgFAAgDgDgAAQhHQgDgCAAgGQAAgGAEgFQAEgEAGAAQAFAAACADQADADAAAFQAAAGgEAFQgFAFgFAAQgFAAgCgEg");
	this.shape_333.setTransform(548.025,249.55);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFCCFF").s().p("AAmA8QgDgEAAgIQAAgHABgJIAMgqQAIgYAAgGQAAgFgEAAQgEAAgGAEQgNAHgIAMQgGAHgFAPIgNA8IgVAAIAWhZIACgLQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgEAAgJAGQgOAKgGAKQgHAKgEATIgMAyIgVAAIARhGIAIghQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAQgFAAgRARIgFgGQAOgOANgHQAOgHAHAAIAFABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgCALIgEATQAjgjARAAQAFAAACACQADADAAAGQAAAGgFAPQARgRAMgIQANgHAGAAQAHAAADAEQADADABAHIgCALIgKAkQgMAlAAAHQAAAFAEABQACgBADgCQAJgGAJgIIAFAFIgLAKQgMALgFACQgIAFgGAAQgFAAgDgEg");
	this.shape_334.setTransform(534.65,252.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFCCFF").s().p("AAEBAQgCgCAAgDIABgGIAGgUQgLAPgSALQgLAHgIAAQgJAAgEgGQgHgIAAgNQAAgQAJgTQAIgSAOgPQAOgQAOgHQAMgGATAAIAJABIAEgGIAJgCIgLAlQgGAWgGAcIgDAUQAAAFADAAQADAAAFgDQAJgGAIgIIAFAGIgVASQgKAHgIADQgGACgFAAQgEAAgCgCgAgKgjQgKAHgIATQgJASAAATQAAAKAEAEQADAFAGAAQAKAAALgLQALgLAFgVIAMgtIgNgBQgMAAgKAHg");
	this.shape_335.setTransform(518.975,252.475);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFCCFF").s().p("Ah2BeQgEgEgBgEQAAgEAEgDQADgDAEAAIALACIAKABQAGAAAIgFQALgIAMgTQALgUAIgiQAJgjACgiQgiAAgUARQgRANAAAQQAAAHAIAKQAFAGAAADQAAAEgDABQgDADgDAAQgGAAgEgGQgGgIAAgMQAAgRALgPQALgPAVgIQATgIAbgBQAOAAAIgCIgBAOIABAGIAIBvQAkg9AigoQAYgcASgKQgLAbgMAuIgRBFIgEARIgEAQQAMADAJAAIAPgCIgBAJIgMABIgRgBIgRgCQgIAAgJADQAIgVAJgjIALgsQAIgdAFgLQgMANgYAkQgUAcgYAsIgNAWIgLidQgEAogKAiQgLAigNATQgMATgOAHQgNAIgOAAQgIAAgEgDg");
	this.shape_336.setTransform(499.9,249.975);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFCCFF").s().p("AgWAdQANgKAIgKQADgHAAgDQAAgFgDgGQgDgHAAgEQAAgGAEgEQADgEAFAAQAGAAAFAFQAEAFAAAHQAAAIgFAKQgEAJgIAJQgMANgNAJg");
	this.shape_337.setTransform(628.8,224.575);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFCCFF").s().p("AhDBgQgFgDAAgFQAAgEAEgDQAEgEAGAAIAOACIANADQAIAAAKgIQANgKAIgPQAIgOAAgOQAAgVgGgbQgGgcgKgPQgFgJgHABQgGAAgOAJIgFgHIALgHQAQgLAGgDIAHgBQADAAACADQANAQAJAcQAJAbAAAZIgBALQAZgtAAgbQAAgGgDgJQgCgKAAgEQAAgFACgCQAEgDADgBQAFABADAEQAEADAAAIQAAATgJAcQgJAcgSAgQgTAggPAQQgOAPgPAHQgOAIgNAAQgJAAgFgFg");
	this.shape_338.setTransform(620.35,221.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFCCFF").s().p("AAEBAQgCgCAAgDIABgGIAGgUQgLAPgSALQgLAHgIAAQgJAAgEgGQgHgIAAgNQAAgQAJgTQAIgSAOgPQAOgQAOgHQAMgGATAAIAJABIAEgGIAJgCIgLAlQgGAWgGAcIgDAUQAAAFADAAQADAAAFgDQAJgGAIgIIAFAGIgVASQgKAHgIADQgGACgFAAQgEAAgCgCgAgKgjQgKAHgIATQgJASAAATQAAAKAEAEQADAFAGAAQAKAAALgLQALgLAFgVIAMgtIgNgBQgMAAgKAHg");
	this.shape_339.setTransform(609.575,217.675);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFCCFF").s().p("AgbBYIgegBIgUAAIADgHQAOgBADgBQADgCADgEQAEgGAHgXIAKgmIAMgvIABgGQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAgBAAIgEAAIACgGQAQgBAUgFQgGAQgFAVIgJAnQgKAtgNAWQANADAJAAQAZAAATgLQATgLALgVQALgUAAgYQAAghgTgUQgTgTgfAAQgYAAgXAMQgXAMgOAVQgNAUAAASQAAATAQAIIAGAFQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAADgDADQgDADgDAAQgIAAgHgLQgKgOAAgPQAAgYAPgYQAPgXAagOQAbgOAgAAQAoAAAYAWQAYAVAAAhQAAAdgQAaQgRAZgYALQgXAKgXAAIgagBg");
	this.shape_340.setTransform(592.725,215.125);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFCCFF").s().p("AgOAkIALg4QACgLADgEQADgEAEAAQABAAABAAQAAAAABABQABAAAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIgDALIgSA4QgCAGgDAAQgEAAABgEg");
	this.shape_341.setTransform(576.015,210.275);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFCCFF").s().p("AgoA5QgIgIAAgKQAAgFAEgEQADgDAEAAQAEAAADADQADADAAADIAAADIAAAEQAAAFAEADQAEAEAHAAQAHAAAGgDQAFgDAEgGQADgFAAgGQAAgEgDgGQgDgFgKgNQgPgPAAgQQAAgOAMgLQAKgLASABQANAAAHAEQAHAFAAAHQAAAEgDADQgDADgEAAQgDAAgCgCIgGgFQgHgKgHAAQgGAAgFAEQgDAFgBAHQABAGACAGQADAFALANQARAQgBAPQABAQgNALQgNANgVAAQgRgBgJgGg");
	this.shape_342.setTransform(566.2,217.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFCCFF").s().p("AgtBBIAKgnIANg2IABgIQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQgCAAgFADQgEADgMAMIgFgFQAOgPAOgIQAOgHAIAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgBAKIgGAbQAOgYATgQQAJgIAGAAQAEAAADADQADACAAAEQAAAEgDADQgDADgLAEQgLADgHAFQgHAGgIAKQgHALgDAHQgDAHgHAdIgHAcg");
	this.shape_343.setTransform(558.125,217.325);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFCCFF").s().p("AgnA5QgGgIAAgPQAAgfATgeQAWgkAdAAQAKAAAGAGQAFAFAAAJQAAAJgHAJQgGAKgRAKQgJAFgbALIgBAPQAAALAEAEQADAEAGAAQAGAAAGgEQAKgEASgOIAFAGQgkAjgYAAQgLAAgFgHgAACguQgGAFgEALQgHAQgDAQQAXgKAMgMQAIgIAAgJQAAgGgDgEQgEgEgFAAQgGAAgFAFg");
	this.shape_344.setTransform(547.175,217.875);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFCCFF").s().p("AAIBlQgCgEAAgIQgBgGADgLQACgMAMglIAEgVQAAgEgEAAQgHAAgJAGQgMAIgKANQgGAJgEAQIgLAzIgXAAIAMgqIAVhdQAGgaAKgOQAJgOAPgIQAPgIAPAAQAGAAAEADQADADAAAFQAAAEgDADQgEADgGAAIgJgBIgRgCQgHAAgEAFQgEAGgEAUIgQBHQARgRATgMQAMgIAIAAQAGAAADADQADAEAAAGIgBAJIgJAfIgLAnQgCAIAAAGIABADIACABQAEAAAJgIIANgLIAFAGQgOAPgOAIQgKAGgGAAQgGAAgDgEg");
	this.shape_345.setTransform(535.65,213.725);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFCCFF").s().p("AgfBLQgEgEAAgIQAAgLAGgWIAPg5IgYAAIADgKIAYAAIAIghIAWgIIgLApIAfAAIgDAKIgeAAIgMAwQgGAWAAAJQAAAEACACQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQAEAAAIgFQANgHALgJIAFAGQggAZgJAFQgLAFgHAAQgFAAgDgEg");
	this.shape_346.setTransform(524.475,216.325);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFCCFF").s().p("AgrA2QgJgLAAgSQAAgdARgbQAXgfAfAAQAPAAAJALQAKALAAAUQAAAggXAaQgXAagYAAQgQgBgKgJgAgQgiQgMASAAAeQAAATAIAMQAFAHAIAAQAMAAAKgPQANgTAAgdQAAgWgGgJQgGgKgJABQgLAAgMARg");
	this.shape_347.setTransform(513.25,217.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFCCFF").s().p("Ah2BeQgEgEgBgEQAAgEAEgDQADgDAEAAIALACIAKABQAGAAAIgFQALgIAMgTQALgUAIgiQAJgjACgiQgiAAgUARQgRANAAAQQAAAHAIAKQAFAGAAADQAAAEgDABQgDADgDAAQgGAAgEgGQgGgIAAgMQAAgRALgPQALgPAVgIQATgIAbgBQAOAAAIgCIgBAOIABAGIAIBvQAkg9AigoQAYgcASgKQgLAbgMAuIgRBFIgEARIgEAQQAMADAJAAIAPgCIgBAJIgMABIgRgBIgRgCQgIAAgJADQAIgVAJgjIALgsQAIgdAFgLQgMANgYAkQgUAcgYAsIgNAWIgLidQgEAogKAiQgLAigNATQgMATgOAHQgNAIgOAAQgIAAgEgDg");
	this.shape_348.setTransform(494.5,215.175);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFCCFF").s().p("AhDBgQgFgDAAgFQAAgEAEgDQAEgEAGAAIAOACIAMADQAJAAAKgIQANgKAIgPQAIgOAAgOQAAgVgGgbQgGgcgKgPQgGgJgGABQgHAAgNAJIgFgHIALgHQAQgLAHgDIAGgBQADAAACADQANAQAJAcQAIAbABAZIgBALQAZgtAAgbQAAgGgDgJQgCgKAAgEQAAgFACgCQAEgDAEgBQAFABADAEQADADAAAIQAAATgJAcQgJAcgSAgQgTAggPAQQgOAPgPAHQgOAIgNAAQgJAAgFgFg");
	this.shape_349.setTransform(468.05,221.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFCCFF").s().p("AgmBhQgOAAgWADIABgIQAMgBAFgFQAFgFADgNIAbhuIAHgiQAAgEgEgBQgGAAgTAUIgFgGQAOgQANgIQAMgIAJAAQAEABACACQACABAAAEIgBAIIgGAWQAXgXAIgFQANgJAMAAQAIAAAFAHQAFAHAAAPQAAAigWAgQgXAfgaABQgJAAgLgGIgMAwIgCAHQAAAGAEACQAGAEAUACIgBAIIglgDgAAZhIQgOALgHALQgFAHgEATIgHAfQALAMALAAQARAAAOgbQANgcAAgZQAAgJgDgEQgFgFgFABQgHAAgJAGg");
	this.shape_350.setTransform(455.55,221.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFCCFF").s().p("AgmBhQgOAAgWADIABgIQAMgBAFgFQAFgFADgNIAbhuQAHgfAAgDQAAgEgEgBQgGAAgSAUIgGgGQAOgQANgIQANgIAJAAQADABACACQACABAAAEIgBAIIgFAWQAWgXAIgFQANgJAMAAQAHAAAGAHQAFAHAAAPQAAAigWAgQgXAfgaABQgJAAgLgGIgNAwIgBAHQAAAGAEACQAGAEAUACIgBAIIglgDgAAYhIQgNALgHALQgEAHgFATIgIAfQAMAMALAAQARAAAOgbQANgcAAgZQAAgJgEgEQgEgFgGABQgHAAgJAGg");
	this.shape_351.setTransform(442.35,221.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFCCFF").s().p("AAEBAQgCgCAAgDIABgGIAGgUQgLAPgSALQgLAHgIAAQgJAAgEgGQgHgIAAgNQAAgQAJgTQAIgSAOgPQAOgQAOgHQAMgGATAAIAJABIAEgGIAJgCIgLAlQgGAWgGAcIgDAUQAAAFADAAQADAAAFgDQAJgGAIgIIAFAGIgVASQgKAHgIADQgGACgFAAQgEAAgCgCgAgKgjQgKAHgIATQgJASAAATQAAAKAEAEQADAFAGAAQAKAAALgLQALgLAFgVIAMgtIgNgBQgMAAgKAHg");
	this.shape_352.setTransform(430.875,217.675);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFCCFF").s().p("Ah7BeQgGgDAAgHQAAgEADgCQACgCAEAAQAFgBAGAJIAGAGQACABADAAQAMAAAKgSQAKgTAThHIAOg2QgdAAgPAKQgOAJAAAMQAAAFAEAFQADAHAAADQAAAEgCADQgDADgEAAQgFAAgEgFQgEgFAAgKQAAgQAMgNQANgNAXgGQAOgDAoAAQgLAWgNA2QAmgBAWgCQANgrAJgRQAKgQAMgIQAMgHAPAAQANAAAHAFQAHAEAAAHQAAADgDADQgCADgEgBQgFAAgHgHQgGgIgFABQgLAAgLAUQgTAkgZB1IAHAAIANACIAOgCIgCAJIgLAAIgRAAIgTgBQgGAAgHABQAGgQAIgeIALgsIgnABIgVACQgKAngLATQgKATgOAJQgNAIgNAAQgMAAgJgGg");
	this.shape_353.setTransform(415.925,214.75);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(1,1,1).p("EgnFgzbMBOLAAAMAAABm3MhOLAAAgEgjvgvMMBHrAAAMAAABfcMhHrAAAg");
	this.shape_354.setTransform(516.275,404.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("Egj1AvvMAAAhfdMBHrAAAMAAABfdg");
	this.shape_355.setTransform(516.85,408.075);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#009966").s().p("EgnFAzcMAAAhm3MBOLAAAMAAABm3gEgjvAwQMBHrAAAMAAAhfcMhHrAAAg");
	this.shape_356.setTransform(516.275,404.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},12).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.text},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).wait(18));

	// flap
	this.instance = new lib.flap();
	this.instance.setTransform(519.5,373.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.7778,y:336.5778},0).wait(1).to({scaleY:0.5556,y:299.2556},0).wait(1).to({scaleY:0.3333,y:261.9333},0).wait(1).to({scaleY:0.1111,y:224.6111},0).wait(1).to({skewX:180,y:187.2889},0).wait(1).to({scaleY:0.3333,y:149.9667},0).wait(1).to({scaleY:0.5556,y:112.6444},0).wait(1).to({scaleY:0.7778,y:75.3222},0).wait(1).to({scaleY:1,y:38},0).to({_off:true},1).wait(42));

	// noflap
	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#FF9999").ss(5,1,1).p("ANxDJUAgmADRgNvAZPQgrBOgyBSMg71AAAEA1hgiIMAAABERI2WAAAs+CrIGsFXIHyGRIMRrKMAnwglRAs+CrUgiNAEAAQwAY+QA1BOA8BSI42AAMAAAhERgEg1ggiIMBrBAAA");
	this.shape_357.setTransform(519.5,424.425);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFF99").s().p("AmSR9ImslXMgoigkzMBrBAAAMgnwAlRIsRLKg");
	this.shape_358.setTransform(519.5,360.925);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#99CC99").s().p("EAfLAiJQAyhSArhOQEFngAAljQgBtK27iTMAnwglRMAAABERgEgcqAiJQg8hSg1hOQlhoOABl9QABsIW8irIGsFXIgGADQgMAHIEGHIMRrKQW7CTABNKQAAFjkFHgQgrBOgyBSgEg1gAiJMAAAhERMAoiAkzQ28CrgBMIQgBF9FhIOQA1BOA8BSg");
	this.shape_359.setTransform(519.5,424.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_359},{t:this.shape_358},{t:this.shape_357}]}).to({state:[]},10).wait(42));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1039.9,769.8);
// library properties:
lib.properties = {
	id: 'B7DCC1B37D0BF349B50F6421F82460CC',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFCCFF",
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
an.compositions['B7DCC1B37D0BF349B50F6421F82460CC'] = {
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