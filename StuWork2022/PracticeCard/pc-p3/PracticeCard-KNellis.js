(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"PracticeCard_KNellis_atlas_1", frames: [[0,0,3300,5100]]}
];


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



(lib.Myproject1 = function() {
	this.initialize(ss["PracticeCard_KNellis_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
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
	this.shape.graphics.f().s("#333333").ss(5,1,1).p("EhI5gYsMCRzAAAMhGrAxZg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9966CC").s().p("EhI5gYsMCRzAAAMhGrAxZg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flap, new cjs.Rectangle(-469.1,-160.5,938.2,321.1), null);


(lib.envelope = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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
(lib.PracticeCardKNellis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,19,29];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on the current frame
		
		
		this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// Label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAzIAWhlIANAAIgWBlg");
	this.shape.setTransform(531.425,737.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAxQgGgDgEgFQgEgGgCgIIAYgDQACAFACADQACADADgBQAFABAEgIQACgEACgQQgFAFgEACQgFADgGgBQgMAAgIgJQgIgIAAgOQAAgLAEgHQAEgJAIgEQAHgEALAAQANAAAIAFQAIAFAFALQAFAMAAARQAAAagLANQgKAMgRAAQgKAAgHgCgAgJgdQgEAFABAHQgBAJAEAEQAEAEAEAAQAFAAADgDQADgFAAgIQAAgIgDgFQgEgEgEAAQgFAAgDAEg");
	this.shape_1.setTransform(525.4,737.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAGAyIAAgSIgsAAIAAgXIAsg6IAWAAIAAA7IALAAIAAAWIgLAAIAAASgAgRAKIAXAAIAAgeg");
	this.shape_2.setTransform(517.025,737.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAwQgIgEgEgIQgEgHAAgIQAAgKAEgFQAEgGAHgDQgFgDgDgFQgEgFAAgHQAAgNALgIQAIgGAOAAQARAAAIAIQAJAHAAAMQAAAGgEAGQgCAFgGADQAIADADAGQAEAHAAAIQAAAHgDAGQgDAHgFADQgEAEgHACQgHABgHAAQgOAAgHgDgAgHAIQgEAFAAAHQAAAGAEAEQAEAFADgBQAFABADgFQAEgEAAgGQAAgHgEgFQgDgDgFAAQgEAAgDADgAgGgeQgDADAAAFQAAAFADAEQACACAEAAQAFAAACgCQADgEAAgFQAAgFgDgDQgDgDgEAAQgEAAgCADg");
	this.shape_3.setTransform(508.625,737.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAuQgIgFgGgLQgEgLAAgTQAAgZAKgNQALgMAQAAQALAAAHADQAFACAEAGQAFAFACAIIgZAEQgBgHgCgCQgCgCgEAAQgFAAgEAGQgCAFgBARQAEgFAGgDQADgCAGAAQAMgBAIAKQAJAJAAAOQAAAJgEAJQgFAIgHAEQgIAEgLAAQgMAAgIgFgAgHAFQgDAEAAAIQAAAIADAFQAEAEAEAAQAFAAAEgEQADgEAAgJQAAgHgEgFQgCgFgGAAQgEAAgEAFg");
	this.shape_4.setTransform(500.35,737.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAyQADgZAGgQQAHgQAMgSIgrAAIAAgXIBHAAIAAASQgJAJgHALQgHANgEARQgEAMgCASg");
	this.shape_5.setTransform(491.9,737.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkAyQABgMAGgLQAHgKASgPQAKgIADgFQADgEAAgFQAAgEgDgDQgDgDgFAAQgDAAgDADQgEADgBAJIgZgDQACgLAEgHQAEgGAHgEQAHgDAMAAQANAAAHADQAHADAFAHQAEAHAAAJQAAAJgFAIQgFAHgMAKIgKAIIgGAGIAmAAIAAAWg");
	this.shape_6.setTransform(483.375,737.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAxQgGgCgFgEIgHgIIgEgMIAZgDQABAHADADQAEAEADAAQAGAAADgFQADgEAAgJQAAgIgDgFQgEgDgFAAQgDAAgEABIgFAFIgVgDIAIg0IA6AAIAAAWIgnAAIgCAPIAIgEIAHgBQANAAAJAJQAIAIAAAOQAAAJgEAJQgEAJgIAFQgIAEgMAAQgJAAgGgBg");
	this.shape_7.setTransform(475.05,737.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVAyQADgZAHgQQAGgQANgSIgrAAIAAgXIBIAAIAAASQgKAJgGALQgIANgEARQgEAMgBASg");
	this.shape_8.setTransform(466.75,737.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAGAyIAAgSIgsAAIAAgXIAsg6IAWAAIAAA7IALAAIAAAWIgLAAIAAASgAgRAKIAXAAIAAgeg");
	this.shape_9.setTransform(458.325,737.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAwQgGgDgFgGQgFgGgCgJIAZgEQABAIAEAEQADACADAAQAGAAACgDQAEgFAAgGQAAgHgDgEQgEgEgFAAIgHACIACgTIACAAQAEAAAEgDQADgDAAgFQAAgEgDgDQgCgDgDAAQgFAAgDADQgCADgBAHIgYgEQADgNAJgHQAIgGAPAAQARAAAHAHQAJAIgBALQABAFgDAGQgEAFgGAEQAFABACACQAFACACAFQADAFAAAHQAAAJgEAHQgEAJgIAEQgHAEgNAAQgLAAgIgDg");
	this.shape_10.setTransform(449.9,737.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOAxQgGgCgFgEIgHgIIgEgMIAZgDQABAHADADQADAEAEAAQAFAAAEgFQADgEAAgJQAAgIgDgFQgEgDgFAAQgDAAgEABIgFAFIgVgDIAIg0IA6AAIAAAWIgnAAIgCAPIAIgEIAHgBQANAAAJAJQAIAIAAAOQABAJgFAJQgFAJgHAFQgIAEgNAAQgIAAgGgBg");
	this.shape_11.setTransform(441.5,737.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAwQgIgEgEgIQgEgHAAgIQAAgKAEgFQAEgGAHgDQgFgDgDgFQgEgFAAgHQAAgNALgIQAIgGAOAAQARAAAIAIQAJAHAAAMQAAAGgEAGQgCAFgGADQAIADADAGQAEAHAAAIQAAAHgDAGQgDAHgFADQgEAEgHACQgHABgHAAQgOAAgHgDgAgHAIQgEAFAAAHQAAAGAEAEQAEAFADgBQAFABADgFQAEgEAAgGQAAgHgEgFQgDgDgFAAQgEAAgDADgAgGgeQgDADAAAFQAAAFADAEQACACAEAAQAFAAACgCQADgEAAgFQAAgFgDgDQgDgDgEAAQgEAAgCADg");
	this.shape_12.setTransform(433.125,737.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAGAyIAAgSIgsAAIAAgXIAsg6IAWAAIAAA7IALAAIAAAWIgLAAIAAASgAgRAKIAXAAIAAgeg");
	this.shape_13.setTransform(424.775,737.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAxQgGgCgEgEIgIgIIgFgMIAagDQABAHADADQADAEAEAAQAGAAADgFQADgEAAgJQAAgIgDgFQgDgDgGAAQgDAAgDABIgGAFIgVgDIAIg0IA6AAIAAAWIgnAAIgCAPIAIgEIAHgBQAOAAAIAJQAJAIAAAOQgBAJgEAJQgFAJgHAFQgIAEgMAAQgIAAgHgBg");
	this.shape_14.setTransform(416.35,737.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAwQgGgDgFgGQgEgGgDgJIAZgEQACAIACAEQAEACADAAQAGAAACgDQAEgFAAgGQAAgHgDgEQgDgEgGAAIgHACIACgTIADAAQAEAAADgDQADgDAAgFQAAgEgCgDQgDgDgDAAQgEAAgEADQgCADgBAHIgYgEQADgNAJgHQAIgGAPAAQARAAAHAHQAJAIAAALQAAAFgDAGQgEAFgGAEQAFABACACQAFACACAFQADAFAAAHQAAAJgEAHQgEAJgIAEQgHAEgNAAQgLAAgIgDg");
	this.shape_15.setTransform(407.95,737.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRAwQgIgDgEgGQgEgGgDgJIAZgEQABAIADAEQAEACAEAAQAEAAAEgDQADgFAAgGQAAgHgDgEQgDgEgGAAIgHACIABgTIAEAAQADAAADgDQAEgDAAgFQAAgEgCgDQgDgDgDAAQgFAAgDADQgCADgBAHIgYgEQADgNAIgHQAJgGAPAAQARAAAIAHQAHAIABALQgBAFgDAGQgDAFgGAEQAFABACACQAFACADAFQACAFAAAHQAAAJgEAHQgEAJgIAEQgIAEgMAAQgMAAgGgDg");
	this.shape_16.setTransform(399.55,737.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSAwQgGgDgFgGQgEgGgDgJIAZgEQABAIADAEQAEACADAAQAGAAACgDQAEgFAAgGQAAgHgDgEQgEgEgFAAIgHACIABgTIAEAAQADAAAEgDQADgDAAgFQAAgEgCgDQgDgDgDAAQgFAAgDADQgCADgBAHIgYgEQADgNAIgHQAJgGAPAAQARAAAIAHQAHAIABALQAAAFgEAGQgDAFgGAEQAFABACACQAFACACAFQADAFAAAHQAAAJgEAHQgEAJgIAEQgIAEgMAAQgLAAgIgDg");
	this.shape_17.setTransform(391.2,737.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAzIAWhlIANAAIgWBlg");
	this.shape_18.setTransform(385.325,737.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAKAlIAAgnQAAgGgDgEQgCgCgEAAQgEAAgCAEQgDADgBAJIAAAjIgYAAIAAhHIAXAAIAAALQAFgGAFgEQAEgCAJAAQAKgBAGAHQAFAHAAAOIAAAtg");
	this.shape_19.setTransform(379.35,739.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAyIAAhHIAXAAIAABHgAgLgeIAAgSIAXAAIAAASg");
	this.shape_20.setTransform(373.1,737.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgjAyIAAhiIAXAAIAAALQAGgGADgDQAFgDAHAAQAMAAAIALQAHALAAAQQAAARgIAJQgHAKgMAAQgHgBgDgCQgFgCgDgEIAAAigAgGgZQgEAEAAAJQAAAJAEADQACAEAFAAQAEAAADgEQADgDAAgJQAAgJgDgEQgDgEgEAAQgFAAgCAEg");
	this.shape_21.setTransform(366.95,740.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgRAzIAWhlIANAAIgWBlg");
	this.shape_22.setTransform(360.875,737.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAeAlIAAgpQAAgEgBgCQgDgEgEAAQgEAAgDAEQgCADAAAHIAAAlIgYAAIAAgnIgBgGIgDgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgEABgDADQgDAEAAAHIAAAlIgZAAIAAhHIAXAAIAAAKQAFgGAFgDQAGgDAHABQAIAAADACQAFAEADAFQAFgGAFgDQAFgDAHABQALgBAGAHQAFAHAAAPIAAAsg");
	this.shape_23.setTransform(352.825,739.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAdQgMgLgBgSQABgPAJgLQALgKAQAAQAUAAAKAMQAHAKABAOQAAAQgLALQgJAKgSAAQgPAAgJgIgAgIgNQgDAFAAAIQAAAKADAEQADAFAFAAQAGAAADgFQADgEAAgKQAAgIgEgFQgDgFgFAAQgFAAgDAFg");
	this.shape_24.setTransform(342.35,739.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgOAjQgHgCgFgFQgFgEgDgHQgDgGAAgLQAAgKAEgHQACgGAFgEQAEgEAFgCQAHgDAKAAQAQAAAJAGQAIAGADAMIgXAEQgBgFgDgCQgDgDgFAAQgFAAgEAFQgEAFAAAJQAAAJAEAEQAEAFAFAAQAFAAADgDQADgDACgFIAYADQgCAIgFAGQgEAGgHADQgHADgLAAQgJAAgHgCg");
	this.shape_25.setTransform(333.975,739.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgNAOIAAgbIAaAAIAAAbg");
	this.shape_26.setTransform(327.7,741.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGAwQgEgDgCgFQgDgGAAgMIAAgYIgJAAIAAgUIAJAAIAAgNIAYgOIAAAbIAPAAIAAAUIgPAAIAAAZIABAGQABAAAAABQAAAAABAAQABABAAAAQABAAABAAIAIgCIACATQgKACgIAAQgIAAgFgCg");
	this.shape_27.setTransform(322.8,737.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAgQgHgGgDgKIAZgDQACAFACACQADACAEAAQAFAAADgCQAAgBABAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAAgDgDgCQgCgBgIgCIgSgEQgFgDgDgEQgEgFAAgGQAAgHAEgFQAEgFAGgDQAHgCAKAAQALAAAGABQAGACADAFQAEAEACAHIgXACQgBgDgCgCQgDgCgDAAQgFAAgCACQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABABQACABAIABQAMACAGACQAGADADAEQAEAFAAAGQAAAHgEAGQgDAFgHAEQgIADgMAAQgRAAgIgFg");
	this.shape_28.setTransform(316.125,739.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgUAhQgHgEgFgIQgFgJAAgMQAAgQAKgKQAKgKARAAQANAAAIAEQAIAFAEAJQAFAJAAANIAAADIgxAAQAAAGADAEQADAEAFAAQAEAAADgCIAFgEIAYACQgFALgIAFQgIAEgPAAQgMAAgIgEgAgJgPQgCADAAAHIAXAAQgBgIgDgEQgDgDgFAAQgFAAgEAFg");
	this.shape_29.setTransform(308.175,739.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZAlIAAhHIAYAAIAAALQACgHAEgDQADgDAGABQAFgBAHAEIgIATIgHgCQgFABgDAEQgDAHAAAPIAAAZg");
	this.shape_30.setTransform(301.55,739.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAhQgHgEgFgIQgFgJAAgMQAAgQAKgKQAKgKARAAQANAAAIAEQAIAFAEAJQAFAJAAANIAAADIgxAAQAAAGADAEQADAEAFAAQAEAAADgCIAFgEIAYACQgFALgIAFQgIAEgPAAQgMAAgIgEgAgJgPQgCADAAAHIAXAAQgBgIgDgEQgDgDgFAAQgFAAgEAFg");
	this.shape_31.setTransform(294.025,739.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAwQgFgDgCgFQgCgGAAgMIAAgYIgJAAIAAgUIAJAAIAAgNIAXgOIAAAbIAPAAIAAAUIgPAAIAAAZQAAAEACACQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAJgCIABATQgJACgIAAQgJAAgDgCg");
	this.shape_32.setTransform(287,737.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAKAlIAAgnQAAgGgDgEQgCgCgEAAQgEAAgCAEQgDADAAAJIAAAjIgZAAIAAhHIAXAAIAAALQAFgGAFgEQAEgCAJAAQAJgBAHAHQAFAHAAAOIAAAtg");
	this.shape_33.setTransform(280,739.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgLAyIAAhHIAYAAIAABHgAgLgeIAAgSIAYAAIAAASg");
	this.shape_34.setTransform(273.75,737.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgjAyIAAhiIAXAAIAAALQAGgGADgDQAFgDAHAAQAMAAAHALQAIALAAAQQAAARgIAJQgHAKgMAAQgHgBgDgCQgFgCgDgEIAAAigAgGgZQgEAEAAAJQAAAJAEADQADAEAEAAQAEAAADgEQADgDAAgJQAAgJgDgEQgDgEgEAAQgFAAgCAEg");
	this.shape_35.setTransform(267.6,740.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgNAOIAAgbIAaAAIAAAbg");
	this.shape_36.setTransform(261.2,741.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AANAkIgNgqIgMAqIgWAAIgYhHIAYAAIALAsIAMgsIAWAAIAOAsIAKgsIAYAAIgYBHg");
	this.shape_37.setTransform(254.25,739.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AANAkIgNgqIgMAqIgWAAIgZhHIAZAAIAKAsIAOgsIAVAAIAOAsIALgsIAXAAIgXBHg");
	this.shape_38.setTransform(242.4,739.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AANAkIgNgqIgMAqIgWAAIgYhHIAYAAIALAsIAMgsIAWAAIAOAsIALgsIAXAAIgXBHg");
	this.shape_39.setTransform(230.5,739.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgRAzIAWhlIANAAIgWBlg");
	this.shape_40.setTransform(222.825,737.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgRAzIAWhlIANAAIgWBlg");
	this.shape_41.setTransform(219.325,737.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgNAkIAAgcIAaAAIAAAcgAgNgHIAAgcIAaAAIAAAcg");
	this.shape_42.setTransform(215.5,739.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYAgQgHgGgDgKIAZgDQACAFACACQADACAEAAQAFAAADgCQAAgBABAAQAAgBAAAAQAAAAABgBQAAgBAAAAQAAgDgDgCQgCgBgIgCIgSgEQgFgDgDgEQgEgFAAgGQAAgHAEgFQAEgFAGgDQAHgCAKAAQALAAAGABQAGACADAFQAEAEACAHIgXACQgBgDgCgCQgDgCgDAAQgFAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABABQACABAIABQAMACAGACQAGADADAEQAEAFAAAGQAAAHgEAGQgDAFgHAEQgIADgMAAQgRAAgIgFg");
	this.shape_43.setTransform(209.525,739.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgjAyIAAhiIAXAAIAAALQAGgGADgDQAFgDAHAAQAMAAAIALQAHALAAAQQAAARgIAJQgIAKgLAAQgHgBgDgCQgFgCgEgEIAAAigAgGgZQgEAEAAAJQAAAJAEADQACAEAFAAQAEAAADgEQADgDAAgJQAAgJgDgEQgDgEgEAAQgFAAgCAEg");
	this.shape_44.setTransform(201.7,740.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGAwQgEgDgCgFQgCgGAAgMIAAgYIgKAAIAAgUIAKAAIAAgNIAYgOIAAAbIANAAIAAAUIgNAAIAAAZIABAGQAAAAAAABQAAAAABAAQAAABABAAQABAAAAAAIAIgCIACATQgJACgIAAQgJAAgEgCg");
	this.shape_45.setTransform(194.6,737.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAwQgFgDgCgFQgDgGABgMIAAgYIgJAAIAAgUIAJAAIAAgNIAYgOIAAAbIANAAIAAAUIgNAAIAAAZIABAGQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAJgCIABATQgJACgIAAQgJAAgDgCg");
	this.shape_46.setTransform(189,737.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAKAyIAAgoQgBgGgCgEQgCgBgEAAQgEAAgDADQgCADAAAKIAAAjIgZAAIAAhiIAZAAIAAAkQAEgFAFgDQAFgDAGABQAKgBAHAHQAFAHABANIAAAug");
	this.shape_47.setTransform(182,737.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgNAkIAAgcIAaAAIAAAcgAgNgHIAAgcIAaAAIAAAcg");
	this.shape_48.setTransform(171.55,739.275);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgYAgQgHgGgDgKIAZgDQACAFACACQADACAEAAQAFAAADgCQAAgBABAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAAgDgDgCQgCgBgIgCIgSgEQgFgDgDgEQgEgFAAgGQAAgHAEgFQAEgFAGgDQAHgCAKAAQALAAAGABQAGACADAFQAEAEACAHIgXACQgBgDgCgCQgDgCgDAAQgFAAgCACQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABABQACABAIABQAMACAGACQAGADADAEQAEAFAAAGQAAAHgEAGQgDAFgHAEQgIADgMAAQgRAAgIgFg");
	this.shape_49.setTransform(165.575,739.275);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgGAwQgEgDgCgFQgDgGAAgMIAAgYIgJAAIAAgUIAJAAIAAgNIAYgOIAAAbIAPAAIAAAUIgPAAIAAAZIABAGQABAAAAABQAAAAABAAQABABAAAAQABAAABAAIAIgCIACATQgKACgIAAQgIAAgFgCg");
	this.shape_50.setTransform(159,737.975);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgLAyIAAhHIAYAAIAABHgAgLgeIAAgSIAYAAIAAASg");
	this.shape_51.setTransform(154.15,737.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgcAnQgHgLAAgQQAAgRAIgJQAIgJAMAAQAFAAAEACQAFACAEAEIAAgiIAZAAIAABiIgYAAIAAgLQgEAHgEACQgFADgGAAQgOAAgHgLgAgHAAQgDAEAAAJQAAAJADAEQADAEAEAAQAEAAAEgEQADgEAAgJQAAgJgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_52.setTransform(147.675,737.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUAhQgHgEgFgIQgFgJAAgMQAAgQAKgKQAKgKARAAQANAAAIAEQAIAFAEAJQAFAJAAANIAAADIgxAAQAAAGADAEQADAEAFAAQAEAAADgCIAFgEIAYACQgFALgIAFQgIAEgPAAQgMAAgIgEgAgJgPQgCADAAAHIAXAAQgBgIgDgEQgDgDgFAAQgFAAgEAFg");
	this.shape_53.setTransform(139.475,739.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYAlIAAhHIAWAAIAAALQADgHADgDQAEgDAFABQAGgBAGAEIgHATIgHgCQgFABgDAEQgDAHAAAPIAAAZg");
	this.shape_54.setTransform(132.85,739.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgOAjQgHgCgFgFQgFgEgDgHQgDgGAAgLQAAgKAEgHQACgGAFgEQAEgEAFgCQAHgDAKAAQAQAAAJAGQAIAGADAMIgXAEQgBgFgDgCQgDgDgFAAQgFAAgEAFQgEAFAAAJQAAAJAEAEQAEAFAFAAQAFAAADgDQADgDACgFIAYADQgCAIgFAGQgEAGgHADQgHADgLAAQgJAAgHgCg");
	this.shape_55.setTransform(125.325,739.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgaAtQgHgHAAgLIAAgDIAYADQABADACACQACACAEAAQAFAAADgEQADgCgBgJIAAgKQgDAEgEADQgFADgGAAQgOAAgHgMQgGgIAAgPQAAgRAIgJQAGgIAMAAQAIAAAEADQAFADAEAGIAAgLIAXAAIAABDIABADQAAAHgDAGQgDAGgEAEQgEAEgGABQgIACgIAAQgTAAgHgGgAgHgaQgDADAAAJQAAAIADAEQADACAEABQAFgBADgCQADgFAAgHQAAgIgDgEQgEgFgEAAQgEABgDAEg");
	this.shape_56.setTransform(112.55,740.65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAJAlIAAgnQAAgGgCgEQgCgCgFAAQgDAAgCAEQgEADAAAJIAAAjIgYAAIAAhHIAXAAIAAALQAFgGAFgEQAFgCAIAAQAKgBAGAHQAFAHAAAOIAAAtg");
	this.shape_57.setTransform(104.3,739.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgLAyIAAhHIAXAAIAABHgAgLgeIAAgSIAXAAIAAASg");
	this.shape_58.setTransform(98.05,737.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AANAkIgNgqIgMAqIgWAAIgZhHIAZAAIAKAsIAOgsIAVAAIAOAsIAKgsIAZAAIgZBHg");
	this.shape_59.setTransform(90.05,739.275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgeAfQgHgFAAgJQABgIAEgGQAEgEAMgCIARgFIAJgDQAAgFgCgCQgCgCgFAAQgFAAgDACQgCACgCAEIgYgCQACgHADgEQACgEAFgDQADgCAGgBIANgBIARABQAHABAEAFQAEADACAFQABAGAAAFIAAAfIABAHIACAIIgXAAIgCgEIAAgFQgGAFgFACQgFADgJAAQgMAAgFgGgAAAAFQgIADgCACQgBACAAADQAAADABACQACACAFAAQADAAAEgCQADgCABgDQACgEAAgFIAAgEIgKADg");
	this.shape_60.setTransform(79.9,739.275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgYAlIAAhHIAWAAIAAALQADgHAEgDQADgDAGABQAFgBAGAEIgHATIgHgCQgFABgDAEQgDAHAAAPIAAAZg");
	this.shape_61.setTransform(73.25,739.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgcAnQgHgLAAgQQAAgRAIgJQAIgJAMAAQAFAAAEACQAFACAEAEIAAgiIAZAAIAABiIgYAAIAAgLQgEAHgEACQgFADgGAAQgOAAgHgLgAgHAAQgDAEAAAJQAAAJADAEQADAEAEAAQAEAAAEgEQADgEAAgJQAAgJgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_62.setTransform(65.525,737.975);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgaAtQgHgHAAgLIAAgDIAYADQABADACACQADACADAAQAFAAADgEQACgCAAgJIAAgKQgDAEgEADQgFADgGAAQgOAAgIgMQgFgIAAgPQAAgRAIgJQAGgIANAAQAHAAAEADQAFADAEAGIAAgLIAYAAIAABDIAAADQAAAHgDAGQgCAGgEAEQgFAEgGABQgIACgIAAQgSAAgIgGgAgHgaQgDADAAAJQAAAIADAEQADACAEABQAEgBAEgCQADgFAAgHQAAgIgDgEQgEgFgEAAQgEABgDAEg");
	this.shape_63.setTransform(52.95,740.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAKAlIAAgnQgBgGgCgEQgCgCgEAAQgEAAgDAEQgCADAAAJIAAAjIgZAAIAAhHIAXAAIAAALQAFgGAFgEQAFgCAHAAQAKgBAHAHQAFAHABAOIAAAtg");
	this.shape_64.setTransform(44.75,739.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgMAyIAAhHIAYAAIAABHgAgMgeIAAgSIAYAAIAAASg");
	this.shape_65.setTransform(38.45,737.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgZAlIAAhHIAYAAIAAALQACgHADgDQAEgDAFABQAGgBAHAEIgIATIgHgCQgFABgDAEQgDAHAAAPIAAAZg");
	this.shape_66.setTransform(34.15,739.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgjAyIAAhiIAXAAIAAALQAGgGADgDQAFgDAHAAQAMAAAIALQAHALAAAQQAAARgIAJQgHAKgMAAQgHgBgDgCQgFgCgDgEIAAAigAgGgZQgEAEAAAJQAAAJAEADQACAEAFAAQAEAAADgEQADgDAAgJQAAgJgDgEQgDgEgEAAQgFAAgCAEg");
	this.shape_67.setTransform(26.75,740.55);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgYAgQgHgGgDgKIAZgDQACAFACACQADACAEAAQAFAAADgCQAAgBABAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAAgDgDgCQgCgBgIgCIgSgEQgFgDgDgEQgEgFAAgGQAAgHAEgFQAEgFAGgDQAHgCAKAAQALAAAGABQAGACADAFQAEAEACAHIgXACQgBgDgCgCQgDgCgDAAQgFAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABABQACABAIABQAMACAGACQAGADADAEQAEAFAAAGQAAAHgEAGQgDAFgHAEQgIADgMAAQgRAAgIgFg");
	this.shape_68.setTransform(18.525,739.275);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgRAjIgIglIAAggIAzAAIAAAgIgIAlg");
	this.shape_69.setTransform(317.975,699.45);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AhOBhQACgYAOgVQAPgVAlgbQAWgRAHgIQAGgKABgHQgBgJgGgGQgGgHgKAAQgKAAgFAHQgHAGgCARIg1gFQADgXAIgMQAIgMAQgHQAOgHAaAAQAcAAAQAHQAPAGAJANQAJANAAARQAAARgKAQQgLAPgaASIgWAQIgLALIBRAAIAAAsg");
	this.shape_70.setTransform(305.15,705.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AhOBhQACgYAOgVQAOgVAmgbQAWgRAHgIQAGgKAAgHQAAgJgGgGQgHgHgJAAQgKAAgFAHQgHAGgCARIg1gFQADgXAIgMQAJgMAPgHQAPgHAaAAQAcAAAPAHQAPAGAJANQAJANAAARQAAARgKAQQgKAPgbASIgWAQIgLALIBRAAIAAAsg");
	this.shape_71.setTransform(287.45,705.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AhFBdIgEgkQAMADAOAAQAJAAAFgEQAGgEAFgLIg6iJIA3AAIAcBcIAahcIA0AAIg3CSQgJAZgKAJQgMANgdAAQgKAAgZgEg");
	this.shape_72.setTransform(262.05,710.875);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AhBA8QgNgLAAgRQAAgPAJgKQAJgKAZgEIAlgJIATgGQAAgKgEgEQgEgEgKAAQgMAAgHAFQgFADgDAJIgygGQADgNAFgHQAFgIALgFQAHgEAMgDQANgCAPAAQAXAAAOADQAOACAKAJQAHAGAEAKQADALAAAKIAAA7QAAAKACAGQABAFAEAJIgxAAIgEgIIgCgJQgKAKgLAEQgNAGgSAAQgZAAgMgMgAgBAKQgQAFgEAEQgEAEAAAFQAAAHAEAEQAEAEAJAAQAIAAAHgFQAIgEADgGQADgGAAgKIAAgJIgWAHg");
	this.shape_73.setTransform(245.025,708.075);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("ABABGIAAhNQAAgJgEgFQgFgHgIAAQgJAAgGAHQgGAGABAPIAABGIg0AAIAAhLIgBgMQgCgFgFgDQgDgDgGAAQgJAAgGAHQgGAGAAAPIAABGIg0AAIAAiIIAwAAIAAAUQALgNALgFQALgFAPAAQAQAAAJAFQAKAGAGAMQANgOAKgEQAKgFAPAAQAWAAAMANQANANAAAcIAABVg");
	this.shape_74.setTransform(222.95,707.925);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgNBcQgJgGgFgKQgFgKAAgXIAAgvIgTAAIAAgnIATAAIAAgZIA0gbIAAA0IAeAAIAAAnIgeAAIAAAvQAAAJACADQADAEAHAAQAFAAAKgDIAFAlQgUADgRAAQgSAAgKgEg");
	this.shape_75.setTransform(194.9,705.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Ag1BGIAAiIIAxAAIAAAWQAHgOAHgGQAHgFALAAQAMAAAOAHIgQAlQgKgDgFAAQgKAAgGAIQgHAMAAAgIAAAug");
	this.shape_76.setTransform(183,707.925);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AhBA8QgNgLAAgRQAAgPAJgKQAJgKAZgEIAlgJIATgGQAAgKgEgEQgEgEgKAAQgMAAgHAFQgFADgDAJIgygGQADgNAFgHQAFgIALgFQAHgEAMgDQANgCAPAAQAXAAAOADQAOACAKAJQAHAGAEAKQADALAAAKIAAA7QAAAKACAGQABAFAEAJIgxAAIgEgIIgCgJQgKAKgLAEQgNAGgSAAQgZAAgMgMgAgBAKQgQAFgEAEQgEAEAAAFQAAAHAEAEQAEAEAJAAQAIAAAHgFQAIgEADgGQADgGAAgKIAAgJIgWAHg");
	this.shape_77.setTransform(167.125,708.075);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Ag1BGIAAiIIAyAAIAAAWQAFgOAIgGQAIgFAKAAQAMAAAOAHIgQAlQgJgDgGAAQgKAAgGAIQgHAMAAAgIAAAug");
	this.shape_78.setTransform(144.7,707.925);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgrBAQgPgIgLgQQgJgRgBgXQABgfAUgUQAVgUAkAAQAdAAAQAJQARAJAJARQAKARAAAaIAAAGIhpAAQABANAGAGQAHAJALAAQAIAAAIgEQAEgCAFgHIA0AFQgNAVgQAJQgRAJgfAAQgaAAgRgIgAgTgeQgEAHgCAMIAzAAQgCgPgGgHQgHgHgLAAQgLAAgIAKg");
	this.shape_79.setTransform(128.85,708.075);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgNBcQgJgGgFgKQgFgKABgXIAAgvIgTAAIAAgnIATAAIAAgZIA0gbIAAA0IAdAAIAAAnIgdAAIAAAvQAAAJABADQADAEAHAAQAFAAALgDIAEAlQgUADgRAAQgSAAgKgEg");
	this.shape_80.setTransform(114.1,705.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("Ag7A5QgNgNAAgbIAAhWIA1AAIAABKQAAANAFAGQAFAFAIAAQAJAAAGgHQAGgHAAgSIAAhCIA1AAIAACIIgyAAIAAgWQgLAOgLAGQgKAFgQAAQgWAAgMgNg");
	this.shape_81.setTransform(99.325,708.225);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AhLBgIAAi9IAyAAIAAAVQAKgNAJgFQAKgFAOAAQAcAAAPAUQAPAWAAAfQAAAhgRASQgQASgZAAQgMAAgJgEQgKgEgIgIIAABBgAgPgxQgHAIAAASQAAAQAHAHQAHAIAJgBQAKABAGgIQAGgHAAgRQAAgRgGgIQgHgIgJAAQgJAAgHAIg");
	this.shape_82.setTransform(81.975,710.55);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("ABABGIAAhNQAAgJgEgFQgFgHgIAAQgJAAgGAHQgGAGABAPIAABGIg0AAIAAhLIgBgMQgCgFgFgDQgDgDgGAAQgJAAgGAHQgGAGAAAPIAABGIg0AAIAAiIIAwAAIAAAUQALgNALgFQALgFAPAAQAQAAAJAFQAKAGAGAMQANgOAKgEQAKgFAPAAQAWAAAMANQANANAAAcIAABVg");
	this.shape_83.setTransform(59.6,707.925);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("Ag1A3QgZgVAAgiQAAgeAVgUQAVgVAkAAQApAAAVAYQARATAAAcQAAAfgVAVQgVAUglAAQggAAgVgRgAgRgaQgIAJAAARQAAATAIAIQAGAJALAAQALAAAIgIQAHgJAAgTQAAgRgHgJQgIgJgKAAQgLAAgHAJg");
	this.shape_84.setTransform(37.45,708.075);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgfBEQgOgEgLgJQgLgKgFgMQgHgMAAgUQAAgVAIgOQAFgKAKgIQAJgJAJgEQAPgGAXAAQAjAAARAMQASAMAHAXIgyAHQgCgJgGgEQgHgFgKAAQgMAAgIAKQgIAJAAASQAAARAIAJQAIAJALAAQALAAAHgGQAHgFADgLIAzAGQgEAPgKAMQgKALgOAHQgPAGgWAAQgWAAgOgEg");
	this.shape_85.setTransform(19.85,708.075);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgxA6QgQgKgDgTIAxgEQADAIAFAEQAGAEAJAAQAKAAAFgFQAEgCAAgGQAAgFgFgDQgEgCgRgDQgagEgKgEQgKgEgHgJQgHgIAAgMQAAgOAHgIQAIgKANgFQANgFAWAAQAXAAALAEQALAEAHAHQAIAIAFAMIgwAGQgBgHgFgDQgGgEgHAAQgJAAgDADQgFADAAAFQABAFAFACQAFACAPACQAZADAMAFQANAFAGAIQAGAKAAALQABAMgIAKQgGALgPAGQgPAHgZAAQgjAAgPgLg");
	this.shape_86.setTransform(249.75,669.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgYBaIAAiCIAxAAIAACCgAgYg3IAAgiIAxAAIAAAig");
	this.shape_87.setTransform(237.9,666.725);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgYBaIAAizIAxAAIAACzg");
	this.shape_88.setTransform(229.5,666.725);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgYBaIAAizIAxAAIAACzg");
	this.shape_89.setTransform(221.1,666.725);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgoA9QgPgHgKgQQgKgQAAgWQAAgdAUgTQATgUAjAAQAbAAAQAJQARAIAIARQAJAQAAAZIAAAFIhkAAQABAMAGAGQAHAJALAAQAHAAAHgEQAEgCAEgGIAyAFQgLAUgQAIQgRAJgdAAQgZAAgPgIgAgSgcQgFAGgBAMIAxAAQgCgPgGgHQgGgFgLAAQgLAAgHAJg");
	this.shape_90.setTransform(208.525,669.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AATBDIAAhHQAAgNgFgEQgEgFgIgBQgJABgFAGQgGAIAAAQIAAA/IgyAAIAAiCIAvAAIAAAWQAKgOALgFQAKgGAPAAQAVAAAMAMQALANAAAaIAABSg");
	this.shape_91.setTransform(191.675,669.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAUBaIgZg0IgTASIAAAiIg0AAIAAizIA0AAIAABcIAkgrIA+AAIgvAtIAyBVg");
	this.shape_92.setTransform(175.575,666.725);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AhBBZIgEgjQALADANABQAJAAAGgFQAFgEAEgKIg3iCIA1AAIAaBXIAZhXIAxAAIgzCLQgJAYgKAIQgMAMgaAAQgLAAgXgDg");
	this.shape_93.setTransform(150.375,671.85);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgGBWQgJgEgJgNIAAAUIgvAAIAAi0IAzAAIAAA/QAHgIAJgEQAJgEAMAAQAYAAAPARQAQARAAAfQAAAWgHAQQgIARgMAIQgMAIgQAAQgNAAgKgGgAgPAAQgGAIAAAPQAAARAGAHQAHAIAJAAQAJAAAGgHQAGgIAAgSQAAgPgGgHQgGgHgJAAQgJAAgHAHg");
	this.shape_94.setTransform(134.5,666.875);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("Ag5BHQgOgUAAgdQAAggAPgRQAQgRAYAAQAMAAAIAEQAKAEAHAIIAAg/IAzAAIAAC0IgvAAIAAgUQgKANgIAEQgKAGgNAAQgbAAgOgVgAgPAAQgGAHAAARQAAAQAGAIQAGAHAJAAQAJAAAGgIQAGgHAAgRQAAgPgGgIQgHgHgIAAQgJAAgGAHg");
	this.shape_95.setTransform(108.65,666.875);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgoA9QgPgHgKgQQgKgQAAgWQAAgdAUgTQATgUAjAAQAbAAAQAJQARAIAIARQAJAQAAAZIAAAFIhkAAQABAMAGAGQAHAJALAAQAHAAAHgEQAEgCAEgGIAyAFQgLAUgQAIQgRAJgdAAQgZAAgPgIgAgSgcQgFAGgBAMIAxAAQgCgPgGgHQgGgFgLAAQgLAAgHAJg");
	this.shape_96.setTransform(92.175,669.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgMBXQgJgFgFgKQgDgJAAgWIAAgtIgTAAIAAglIATAAIAAgYIAwgaIAAAyIAdAAIAAAlIgdAAIAAAtQABAIACADQACAEAGAAQAGAAAJgDIAEAjQgSAEgQAAQgTAAgIgFg");
	this.shape_97.setTransform(78.1,666.875);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Ag+A5QgMgKAAgQQAAgPAIgJQAJgKAYgEIAjgIQAJgCAJgEQAAgJgEgEQgEgEgJABQgLAAgHADQgEADgDAJIgwgFQACgNAGgGQAFgIAJgGQAHgDAMgCQAMgDAOAAQAWABAOADQANABAJAJQAHAFADALQAEAJAAAKIAAA4IABAPIAFANIgvAAIgDgHIgCgIQgKAJgKAEQgMAGgSAAQgXAAgMgMgAAAAKQgQAEgEAEQgEAEAAAFQAAAGAEAEQAEAEAIAAQAIgBAHgEQAHgEADgGQADgFAAgKIAAgIIgUAHg");
	this.shape_98.setTransform(64.525,669.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgoA9QgPgHgKgQQgKgQAAgWQAAgdAUgTQATgUAjAAQAbAAAQAJQARAIAIARQAJAQAAAZIAAAFIhkAAQABAMAGAGQAHAJALAAQAHAAAHgEQAEgCAEgGIAyAFQgLAUgQAIQgRAJgdAAQgZAAgPgIgAgSgcQgFAGgBAMIAxAAQgCgPgGgHQgGgFgLAAQgLAAgHAJg");
	this.shape_99.setTransform(47.725,669.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgyBDIAAiCIAuAAIAAAWQAGgOAIgFQAHgGALAAQAKAAANAHIgPAkQgIgEgGAAQgKAAgFAIQgHALAAAfIAAAsg");
	this.shape_100.setTransform(34.4,669.05);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgdBAQgOgDgKgJQgKgJgGgLQgGgMAAgUQAAgSAHgOQAFgKAJgIQAJgIAJgEQAPgFAWgBQAgAAARAMQAQAMAHAVIgvAHQgCgJgGgDQgGgFgKAAQgLAAgIAJQgIAJAAARQAAAQAIAIQAIAJAKAAQAKAAAHgFQAHgGADgKIAwAFQgEAPgJALQgJAMgOAGQgOAFgWABQgUAAgNgFg");
	this.shape_101.setTransform(19.325,669.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).wait(10));

	// s1 flap
	this.instance = new lib.flap();
	this.instance.setTransform(500.55,74.65,1,1,0,0,0,0,-158.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:180,y:74.75},9).to({_off:true},1).wait(20));

	// Button
	this.btn_Next = new lib.BasicButton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.setTransform(890.15,684.65);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.instance_1 = new lib.Myproject1();
	this.instance_1.setTransform(292,0,0.1521,0.1521);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(4,1,1).p("EhQDg74MAAAB3xMCgHAAAMAAAh3lg");
	this.shape_102.setTransform(513.65,385.675);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FDD5F3").s().p("EhQDA75MAAAh3xMCgHAAMMAAAB3lg");
	this.shape_103.setTransform(513.65,385.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_Next}]}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.btn_Next},{t:this.instance_1}]},20).wait(10));

	// drawing
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(4,1,1).p("AI7jpIgGCVIBRAPIBKAOIAGABALEjPIARCNIABAMAKBjXIAFCSAIrpWIgEBGAJspOIgIBDALBpLIgEBGAm6q2IgIA6Aueg5IACgEIgBABIgBADIAAACIheExIBFAYApSkvICnAgIBAAMIBDANINdCiAmylnIAHBYAl6qzIgFBIAlEqvIAFBFAl0lfIAJBcAkwlaIAIBkACZDyIgBACIi/HDAAkDKIiuHbIBjASIB1g2ICCmIArqgjIiBEmIhMAPAPAFmIA9ghIjhjaALfCHIABACIDgDdAKTCqIEtC8AssgtIiLE/");
	this.shape_104.setTransform(768,597.5125);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1,1,1).p("EAWBgsZQAAEJi8C8Qi5C5kFACQgDAAgDAAQkJAAi8i7Qi7i8AAkJQAAiqBOiLQArhMBChDQC8i8EJAAQEJAAC7C8QC8C7AAEJgEhP+g47IAAdQIAAAGIAAYRIAAFKIABAWEhP+BP9IAAw/MAAAg8yIAAgWEhP6A++MBVbAAAMApCAAAMAhcAAAMAAAg6PMAAAg9qIAA3BEAj0g47IBpAAEA1Og47IatAAEhP+g47IAA3BEhP+g47MBsYAAAEBP/BP9IAAw/");
	this.shape_105.setTransform(512.125,364.65);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(2,1,1).p("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");
	this.shape_106.setTransform(517.625,438.5978);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#999999").s().p("AH4DUQgCgEAAgIQgBgEACgCQACgEAHAAIAKgBQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAgBgBIgRgCIAVAAIAGABQADACAAACIgDAGIgBAGIgEAFIgCAFIgGAEIgFACIgCABQgGAAgEgGgAn4B/IgIgEQgHgFgCgDQgBgDAAgHQAAgJACgEQAGgHAMACQABAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIACAIQAIACACADQAEAFgEALQgEAHgBABIgFACgAHnieQgBgGADgFIAEgFIABgEQABgBAFAAIAMABQADAAADABQADACABALQAAAJgEAEQgDACgEABIgYABgAoQjDIgDgBQgEgCgBgDIAAgEIAAgFIAAgDIADgCQACgCAGABIAAABIAHACQABACAEADQABACgCAEQgDAFABACg");
	this.shape_107.setTransform(775.85,536.6239);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#663333").s().p("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");
	this.shape_108.setTransform(768,587.1375);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#006600").s().p("ABPDdQhbAAhYgbIhXgcIgBAAIgIgDIgBAAIAAAAQgkgKgcgCIgBAAIgOAAIgIAAIgLgGIgCgBQgCgCgDgBIgFgCIABABIgCAAQgNgBgMgFQgMgEgLgIQgLgIgIgJQgJgKgGgMQgJgTAFgNQACgEAEgFQAFgFAHgFQAcgVAXgBQAMAAAWAGIABAAIAoAKQgGgIgJgHIgPgJIgHgEQgFgEgDgGQgEgFgCgHQgFgNABgNQACgYATgYQAJgKAIgEQAIgFAIABQALAAAPAMQAhAZAiAUQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQADgBgBgEQAAgBgDgDQgXgaABgUQAAgIAGgJQAFgKAKgLIAQgOQAYgTAXABIADAAIACAAIADgCIAFAEQAIACAJAEQAHAFAIAGQARANALASIACADQAHAMAFANQADAIADgCQAFgCgEgHQgEgQgBgQIgBgDQgBgRAEgJQACgGAEgHQAFgGAHgGQAPgQASgHIAKgDIADAAIABAAQA6ADAUAJIADABIAEADQAXANAEASQADALgIASQgFAOgJAOQgEAFAAADQAAAEADABQAEADAHgJQAHgJAKgFIABgBQAKgFAOgBQAQgBATAFIANAFQArAQApAhIABAAQANALALALQAKALAIALQALATgDAMQgDAJgQAMIgeATQgNAIgKABIgFABQgDACADADIAFAEIAIAEIAPAIQAgAWAXAtQg4Aeg8ATQg9AUhBAHIgDAAIgWACQgYACgYAAIgDAAgAiEADIABABIABgBIAAgBIAAgBIgBgBIgBAAgAhggJIABACIABAAIABAAIgDgCIAAAAIgBAAgACIhsIAFAAIgFgBg");
	this.shape_109.setTransform(157.1732,607.9129);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#669900").s().p("AgDABIgJgEIgEgEIABgBIAgARQgHgBgNgHg");
	this.shape_110.setTransform(117.9125,360.525);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#009900").s().p("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");
	this.shape_111.setTransform(512.125,539.1989);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("A65RdQhIgfg1g1Qg4g4gVhGQhwBTjGgLQhDgEg9gNQiKgchphIQg0gjgdgpQgjgxABgzQgWgOg0gMQg1gLgWgOQgsgcgRg8QgLgmAAhGQABg0AIgZQAPgsAhgPQgFhsB0hzQCHiDCzg8QBmgjBHAQQBBAPA7A7QAmAmA3BPQAIg/Ahg8QAhg4AygtQBYhOCPgrQDGg7CcAwQBZAcBCA+QBGBBAXBUQA5gPBJBIQBEBEA9BVQApA4AXAwQAdA7AJA4QAKBHgVBJQgVBHguA6QgdAkglAeQgVAQgWAOQg9AnhJAUQAWBDgRBIQgRBIgzAyQhcBcjJAHIglABQiYAAhpgtgAuSIuQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAEAAIAAgEIgDABgAevEQQhIgfg1g0Qg4g5gVhFQhwBSjGgLQhDgEg9gMQiKgdhphHQg0gjgdgoQgjgyABgyQgWgPg0gLQg1gMgWgOQgsgbgRg8QgLgnAAhFQABg1AIgZQAPgrAhgPQgFhtB0hzQBHhFBTgxQBLgtBVgdQBmgiBHAQQBBAOA7A7IARATQAhAlArA+QAGgzAXgwIAMgYQAhg5AygtQBYhOCPgqQDGg8CcAxQBZAbBCA+QBGBCAXBUQAlgKAtAcQAXAOAZAZQBEBEA9BVQApA5AXAvQAdA7AJA4QAKBHgVBJQgVBHguA6QgdAlglAdQgVAQgWAPQg9AmhJAVQAWBCgRBIQgRBIgzAyQhcBbjJAIIglAAQiYAAhpgtgEArWgEdQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIAEABIAAgEIgDABg");
	this.shape_112.setTransform(586.8973,88.5679);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF9900").s().p("A81KAQgBAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAEgBIAAAEIgEgBgAuMJ/QkJAAi8i8Qi7i7AAkIQAAirBOiKQArhNBChCQC8i8EJAAQEJAAC7C8QC8C7AAEJQAAEIi8C7Qi5C6kFACIgGAAgAczjLQgBAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBIAEgBIAAAEIgEAAg");
	this.shape_113.setTransform(679.93,80.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6699FF").s().p("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");
	this.shape_114.setTransform(512.125,204.8385);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#CEAE98").s().p("AMhePUgevgndgJkgG4Qo7maqKjwIgIgDIgfgQIAAAAIgbgNIgBgHIgHg/QgDgkADgbQADgnAPgoQCCgNCQAEQDtAGG5BFQDfAkBrAUQC4AjCOAqQBxAhB5AuIAAAAQC+BKDPBrQDRBtGCDqQC4BwBUA2QCUBeBwBTQB/BcEaDzIABAAIB6BrIKoJSIFREpIFKEiICaCHIBAA4IP/OEgEg1igc0QBDgXBHgSIADAAQAMAeAEAVQAEASABAWQhOgbhUgXg");
	this.shape_115.setTransform(467.3,574.1359);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#003300").s().p("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");
	this.shape_116.setTransform(485.3947,237.4728);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#663300").s().p("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OgkASgiIAKgVQAEgJAEgPIAEgOQADgOABgNIAAgBQABgQgGghIABAAIACAAIAAAAIACAAIAAAAIAXABQgBAmgDANQgCANAAASIAAAHIAAAAQgBAlgDANQgEAQgMAXIgFAIQgFgCgFAEIAGAHIgqBTIgTAjIgIAOQgOAWgQAPIgBACIgEgBIgBAFIgFAEIAAABIgBAAIgIAGIgTANIgGADIgBABIg1AhIgUAOQgTANgKALQgIAHgGAIIAAABQgGAHgDAJQgEAJgBAKQgDAQAGAVIAAABIAAABIAGAQIATA2QACAKACARIACAmQAAAbAEATIAAAAIABAEIgWAgIAAABIgIANIgGALIAAABQgJAUgFATIAAACIgBAEQgGAaABAxIAAADIABBAQAGgCAAgOIgBgzIABgkQABgXAFgUQAFgWAIgRIANgZIATgcIACAGIgBgJIABgBIAagkIAXgeQARgVAOgNIAZgXIARgUIAAAAIAJgLIABgBIAZgiQAJgMAIgIIAEgDQANgMAhgTIAfgSIgGAAIABAAIAGgCQAKgEAIgEIgKAJIgMALIgDAEIgCACIgBAFQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAIAIgIIAOgNQAKgKAHgEIAMgHQAKgFANgKIAQgQIARgPQAIgGAMgGIAVgKIABAAQAOgHALgIQANgIAKgJIAFgEIAEgFIAHgIIAVARIAAAAIADACIAAAAIACACIACACIADACIAAABIAFAEIggAQIgFAEIgDACIAAABQgMANgMAKIgRAOIgSAMIgmAaIgWAXIgLAMIgXAYIhcBTQgJAIgLAPIgFAHIgTAdQgKAPh8FbIgBABIAAACQARgEARgUIAeggQAFgFAggSQARgJAUgPIBAgsIAVgQIAOgKIABgBIADgDQARgNAJgLIABgBIATgZIAKgPIAIgLIAKgNIACgBQANgPAUgVIADgDQAngnAWgTIAAABIABgBIACgCIAEgFIAEgCIALgJQAXgLALgHQAHgEARgQIAIgIIAKgGIAJgGIAmgaIAkgcQALgIAngHIhqB0IgDACQgTAUgLAUIgCAGIABABQAAABAAAAQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBQAPgSAVgMIAKgFQAbgOAdgDIAVgCQAMgBAIgCQ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ABABIABgEIAAABIABADIABAAIABABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAIAAgBIAAAAIABgLIAAgJIgBgCIACgBIACADQADgCAAgFIAAgDIgBgrIACgJIgCAEIABgGIABgFIADgIIABgFIAAgCIABgDIALACIAAAAIAAADIgBAUIAAAUQAAAPABAIIABAEIAEANIADAGQACAKAAAVQACAMAEAPIAAADIAAAyQAAAWADAKQADAIAFAIQAGAIAJAJIAJAIIAfAXIAtAgIABABIABAAIAAACIgBABIgDAdQAEgGADgKIACgCQAJgBBJAUIAAAAQggALgfAIIgCABIgFABIgCABIgCAAIgGACIgCgCIgRgKIAAAAQgbgQgDgDIgEgEIgDgEQgagdgOgSIgMgRIgBgBIgJgNIguhKQgKACgLgCIgFgBIgaABIACgCIgEACIgDAAIgBABQgRAEgdAAQgfAAgQgCIgBACQAHAIAIARQARAlAMAUIALARQAPAZAEAcQAEAdgHAbIABABQAJAQADAJIADAGIAEAFQAEADAJADIAJACQAEACADAEIAPALQgOAHgaAJQgFgIgGgFgEhDugOLIAIAAIAAgBIgIABgEhCYgO0IABAAIgQgCIAPACgEgtSgLgIABgCIAFgOIAFgPQAFgZgBgsIgBhjQAAgRACgKIAEgDIAAgBIADgCIADgEIAIgJIAHAFIgBADQgIAjAGAjQABAMAFAGIACADIAFADQAFACAIAAIAHgCQAEgCAEgDIACgCQAFgGAEgJQADgIADgLIACgIIAAAAQAQg5AQgsIADgJIABAAIADgJQAGgSAAgKQAAgLgGgRIgIgWIgHgRIADgGQAPgdAEgTIABgEQADgNACgcIAQABQgBAEACADIAIANQADAGAAALIgBAGIAAANIAEAQQACAKAAAUQAAAegCAOIgGAjIgFAXIgFASIgBABIgBAEQgCAHgKAUIgdA1IgKAVIgGAQIgBAFIgBAJIAAADQAAAIADAIQADAKAIADIABABIABAAIABACIgBAAIgIAEIgEADQgiAUgMALIgIAIIgRATIgBABIgFAHIgLAOIgJALIgKANIAAAAgEAz1gY9QgbgIgMgGQgOgJgIgDQgOgGgKADIgDgNIAFgKIgKgHQgEgSAGgSQAzAfACADQAPALAXAHQANAFAcAGIAYAFQAjAHARAJIABABIAAAAIgZAeIgDAEgEBBWgZWQgJgJgDgFQgEgHACgQQAEggAAgpIgCgpQgFgCAAAKIgFAAIgCgYQAPAHASgCIADANIAIAZIAFASQAFAXgDAgIgCARIgFASQgFANADAGIgPAEQgBgEgCgDgEBCOgZVIAAgkQAJgLAKgQQAbguAYgyQALgYgJgLQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAABIgBgHQAOgCANgBIABAIQAGADAAAIIgBAPIAEATQAEAPgIASQgEAMgNATIgaAoQgQAYgCAOIgBAIQgMAEgGAAIgVABIABgEgEA2GgZtIgOgNIgMgTIgBgBIgKgMIgNgQQgYgcgfgdIAAgFIA0gDIAAAKQAAgBgBABQAAAAAAAAQAAABAAABQAAAAAAACIAsBFQAMATAJAHQAFAEAHADIgFAEIgOAKIgEgEgEA3nga2QgCgMgKgQQgHgJgGgGQgFgEgLgGQgOgIgLgMQAMgHAKgJIADADIAeAcQAIAIAHgCQAKgTACgLIABgWIgBg3QAAgQADgGQAEgIgDgCIgDAAQgDADgCAFIgDgCQATgjAZgJIAHgDQgBAmABANIAAAAIAAADIAAAAIAAANIADAAIABAGQAHAaAAAZQAAARgDAJQgDAHgFAIIgKANQgLASgEAVQgDAVAGAUQACAEADADIACABQgZAAgWAEQAGgVgEgRgEA8/gdFIgRghIAMgOQAFgDACgDIAAgFIgFgDQAQgdAJgfIAFgQIAFggIARADQgDANABANIACAXQABANgCAKQgBAJgHASIgEAXIgDAMIAAAAIgBABIgDAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAADgDAEQgEAFgJAIIgKAJIAAgBg");
	this.shape_117.setTransform(465.1932,390.1875);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("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SIABAAIANALQAIAFAHACQAHACAHgCQAHgCAHgFQANgKAGgQIAJgfQAGgSAGgLIAFgGQAOgQAZgJIADgBIACAAQAUgGAggDIBggIQgCgJAIgeQgEATACAAQAAAKADAJIAAAAIAEAAQAbgDALAKQADAEAEAHIACADIAHAOQAMAQAaABIAOAAQACgIgCgFIAFgCIABAOIAGAAIAAAAIACgBIACgFIABgDQAHgCgCAGIgBAEIAAAAIALgCQAhgEAeAHIAAgBIAAABIADAAQAZAGAXAMIABAAIAGADIAFADIAaAQIASALIAOAGQAVAHApABIAEAAIAXAAIAAAAQAYACALACQAuAKAdAqIAHAMIAHAPQAHAOACAPQADgEAAgEQABAHgDAIQACAOgKARIACgKIACgKIgGALIgPAaIgIAOIgBAAIgIANQgIAPgBANQgDAjAuAlIA8AuIAGAFIABAAIAMgIIgIAMIAYATIAAAAIADACIAKAKIAAAAIAIAIIALANIAKANIABABIAUAZQAZAfAUAQIAQALIALAGIAXAMIABABIAgARIAAAAIABABIADABIAOAKQAQALAYAZIAZAaIANAMQASAQAgARIAlATIABAAIgBAAIAUAKIAaALIgBABIABgBQAhAOAUACQAhAEA2gPQCDgiB5g9QAxgYAhgXQAqgdAagiQAegnAKgvQACgMABgMQACgkgOgfQgRgfgHgPIgCgGQgIgXAGgRQAHgSAWgNQANgHAbgNQAJgGAJgHQAagWAWgmQAdgzAKg0QAFgeAAgbIgDgbQgBgNgEgNQgNg3grgnQgtgog2gCIgUgBIgFgBQgIgCgFgEQgPgMADgkIAAgFQAOjChAi5QgGgQgHgMQgHgLgHgGQgHgGgJgDQgZgKglALIgnAOQgWAIgQACIgBABQgVACgYgGIgTgGIgHgDIgvgVIgGgDQgdgNgegMIAAAAIgegLIAAAAIADgIQAxAPAuAZIAuAXQANAFAMADQAMADALABQAJAAAMgCQALgCANgEQAPgFAdgLQAugQAeANQAHADAFAEIAEADQAIAIAHAMQAHAMAFAQQBEC6gQDEQgDAoARALIAHADIAJABIARAAQAhAAAgAQQAeAQAWAaQAdAjALAvIAFAbIABAQIABAMQABAdgFAcQgIArgUApIgMAWQgWAigcAZIgRAOQgNAKgPAJI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BgCIgDgEQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIADgGIADgFQAOgWAgggQAlgmANgVQASgdALgpQAGgaAIgzIACgXIAAgBIAAgBIAAgHIgCgKIgBgEIgBgDQgCgIgFgGQgEgGgGgEQgNgKgTgFQgSgEgcACIgUACIAUgEQAdgEAPACIADAAIALACIgCAAQgSgIglgHIgDAAIgFgBIgRABQgBAEgBADQgDgCgBgEIgBAAIhZAIIgDgDIAAgBIACAAIABAAIgBAAIgLgBIgDAAIgCgFIAIgCIAFgCIAIgCQAUgEAYgCIADAAIAWgBIAOAAIgHgXIgGgRIgJgXIgBgEIgCgDQgFgNgLgQQgMgWgMgPQgMgQgKgJIgkgbQgVgQgJgPIgDgGIgBgCIgGgTIgCgLQgCgHgDgCQgDgDgDACIgKAQIgJAKIgLANQgMAOgGAJQgKAQgJAfQgJAcAAASQABAMAFAXQAaBxAEAXIABABIAIgDIABgBIAAAAIApgSIAEAHIgJAEIghAOIgBABIgKADIggANIACgIIAagLIABAAIAAAAQgFgRgYhcIgHgfQgEgTAAgSQABgSAEgRIAMgkIAHgQIAGgJQAIgLATgVQAWgZACgVQAAgIAEAAQgCAKAHAPIAKAXIAGAXQAGAOAXAQQAiAZAKAKQAIAIAFAHIAFAGIAIANQAQAXAJARIAHAQIABADIABABIABAEIAAAAIAKAbIANAiIAAADIATAAIAFAAIABAAIgEgnQgDgSgEgQIgCgFIgBgFIgBgDQgIgSABgIIAUAOQAOALANAMIAGAGQAOAOAIAOIAKASQAEAIAGAHQAGAIAIAHQAOALADAGQACADADASIADAOIAFAGQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAIACAFIAAAAIAHAFIADACIADACIAAABIAWAKIAGAEQAMAHAHAMIABAAIAGAMQAEAKADATIABAGIAUCpIAAAKQgBAHgDADIgBgLIgBgIIgGgcQgFgVgKgdIgBAAQgDAHgCAJQgBAJAAAMIACAmIgBAEIgBAQIAAAAIgEAcQgBAMAAAkIABBEQAAAPgFAFIgHgPQgTgmgXgVIgKgJIgPgLIgzglQAKABAPAKQAdAUAQANIAEADIAHAGQAVAUALA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");
	this.shape_118.setTransform(325.9375,375.9278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104}]},10).to({state:[]},10).wait(10));

	// envelope
	this.instance_2 = new lib.envelope();
	this.instance_2.setTransform(497.2,422.55,1.4161,1.4161);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#333333").ss(5,1,1).p("EBI6gsBMAAABYDMg7wguTgAoQhhIKfG5IK7npEhIcAsCMBAMgtjEhIcAsCMgAdhYDMBApAqgEBI6AsCMiRWAAAEhI5gsBMCRzAAA");
	this.shape_119.setTransform(500.55,356.475);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#9966CC").s().p("EhIcAsCMBALgtjIKgG5IK7npMA7wgpwMAAABYDMg7wguTMA7wAuTgEhI5gsBMBAoAqgMhALAtjg");
	this.shape_120.setTransform(500.55,356.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.instance_2}]}).to({state:[]},10).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(263.5,140.1,774.4000000000001,737.3);
// library properties:
lib.properties = {
	id: '0C7B23F0E2AC9447970B469DE8A638DC',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/PracticeCard_KNellis_atlas_1.png?1651867556366", id:"PracticeCard_KNellis_atlas_1"}
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
an.compositions['0C7B23F0E2AC9447970B469DE8A638DC'] = {
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