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


(lib.Nose2d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("ABukCQgUAMgjANQgsAQgLAGQhGAegTAvQgIATgCAaQgCAQAAAgQgCAggGBBQgDA5ASAlQATAmArAdQAeATA2AX");
	this.shape.setTransform(0.0098,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-38.3,47.1,76.69999999999999);


(lib.Nose1d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("AhtkCQAUAMAjANQAsAQALAGQBGAeATAvQAIATACAaQACAQAAAgQACAgAGBBQADA5gSAlQgTAmgrAdQgeATg2AX");
	this.shape.setTransform(-0.0098,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-38.3,47.1,76.69999999999999);


(lib.Mouth3d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("AmLCPIgTAAQA6jBBfg1QAggRAngDQAVgBAfABQAdgDBBgJQA4gHAMAAQBuAAB7BMQBDApBbBJ");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-26.8,108,53.6);


(lib.Mouth2d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("AnnhgQB3CUChBiQA/AoAvAHQAgAEAcgIQAfgJATgVQAOgPALgcQAMggAHgPQANgaATgOQAXgSAWAEQAVAEAqAoQAkAiAagJQAPgGAQgWIDGkC");
	this.shape.setTransform(0.025,0.0029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.3,-32.3,122.69999999999999,64.69999999999999);


(lib.Mouth1d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("Aqpi0QCzDXEYBcQEXBdERhCQCAggBbhDQBqhNAbhr");
	this.shape.setTransform(0,0.0241);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,-30.6,161.4,61.3);


(lib.Hat3d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#003300").ss(25,1,1).p("Al2HlIAAvJIMLAAQABBmABBnIAML8IGCAAAskHlIGuAAIMZAAAGXkXIgCJm");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AmMHlIAAvJIMLAAIACDNIgCJmIACpmIAML8g");
	this.shape_1.setTransform(2.175,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-61,186,122);


(lib.Hat2d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#993300").ss(25,1,1).p("Al2HlIAAvJIMLAAQABBmABBnIgCJmAskHlIGuAAIMZAAIGCAAAGXkXIAML8");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AmMHlIAAvJIMLAAIACDNIgCJmIACpmIAML8g");
	this.shape_1.setTransform(2.175,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-61,186,122);


(lib.Hat1d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("Al2HlIAAvJIMLAAQABBmABBnIAML8IGCAAAskHlIGuAAIMZAAAGXkXIgCJm");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmMHlIAAvJIMLAAIACDNIgCJmIACpmIAML8g");
	this.shape_1.setTransform(2.175,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-61,186,122);


(lib.Hand2d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("ACvhjIiClKACvhjICWkEACvhjIEYAAACvhjIEiCfACvhjIDIGFACvhjIAAGPAnQGuIJ/oR");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.4,-47,100.9,94);


(lib.Hand1d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AiuhjICClKAiuhjIiWkEAiuhjIkYAAAiuhjIkiCfAHRGuIp/oRIjIGFAiuhjIAAGP");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.4,-47,100.9,94);


(lib.Glasses3d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(18,1,1).p("AjFAAIGLAA");
	this.shape.setTransform(-3.575,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(8,1,1).p("ADqlpILTAAIAALTIrTAAgAu8lpILTAAIAAFpIAAFqIrTAAg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADpFqIAArTILUAAIAALTgAu8FqIAArTILUAAIAAFpIAAFqg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.7,-40.1,199.4,80.30000000000001);


(lib.Glasses2d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#993300").ss(18,1,1).p("AjFAAIGLAA");
	this.shape.setTransform(-0.575,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#993300").ss(8,1,1).p("ADqlpILTAAIAALTIrTAAgAu8lpILTAAIAALTIrTAAg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.7,-40.1,199.4,80.30000000000001);


(lib.Feet2d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AkNDTIAAEmIIbAAQABjNochZgAkNn4IAALL");
	this.shape.setTransform(0.0001,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AkNCTIAAklQIcBZgBDMg");
	this.shape_1.setTransform(0.0001,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-54.5,62,109);


(lib.Feet1d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AEODTIAAEmIobAAQgBjNIchZgAEOn4IAALL");
	this.shape.setTransform(-0.0001,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AkNCTQgBjMIchZIAAElg");
	this.shape_1.setTransform(-0.0001,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-54.5,62,109);


(lib.Face2_btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AhHBXQADgVANgTQAMgSAigaQAUgOAGgIQAGgJAAgHQAAgIgGgFQgGgGgJAAQgHAAgGAGQgHAGgBAOIgwgEQADgUAHgLQAIgLANgGQAOgGAXAAQAaAAAOAFQANAGAJAMQAIAMAAAPQAAAPgKAPQgJANgZARIgTAOIgKAKIBJAAIAAAng");
	this.shape.setTransform(84.65,25.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmA6QgOgHgKgPQgJgPAAgVQAAgcASgSQAUgSAhAAQAZAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAvAEQgMATgOAIQgQAIgcAAQgYAAgOgHgAgRgbQgFAGAAALIAuAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_1.setTransform(60.9,27.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA9QgNgDgJgJQgKgIgGgLQgFgLAAgSQAAgTAGgMQAFgKAJgHQAIgIAJgDQAOgGAUAAQAfAAAQALQAQALAGAVIgtAGQgCgIgFgEQgGgEgJAAQgKAAgIAIQgIAJABAQQgBAPAIAIQAHAIALAAQAJAAAGgFQAGgFADgJIAuAFQgDAOgJAKQgJALgNAFQgNAGgVAAQgSAAgOgEg");
	this.shape_2.setTransform(44.9,27.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag7A3QgMgLAAgPQAAgOAJgJQAIgIAWgFQAbgFAHgCIARgGQAAgJgEgDQgDgEgJAAQgLAAgGAEQgFADgCAIIgugFQADgMAFgGQAEgHAKgFQAGgEAMgCQALgCANAAQAVAAANACQANADAJAHQAGAGADAJQAEAKAAAJIAAA2IABAOQABAFAEAHIgtAAIgEgHIgBgIQgKAJgJAEQgMAFgQAAQgXAAgLgKgAAAAJQgPAEgEAEQgEAEAAAFQAAAFAEAEQAEAEAIAAQAHAAAGgEQAHgEADgGQADgFAAgJIAAgIIgTAGg");
	this.shape_3.setTransform(28.875,27.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhABWIAAirICBAAIAAAlIhNAAIAAAeIBCAAIAAAiIhCAAIAABGg");
	this.shape_4.setTransform(13.8,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Rounded
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape_5.setTransform(50,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_7.setTransform(50,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_8.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_7},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_5}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// Squared
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_9.setTransform(50,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_10.setTransform(50,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_11.setTransform(50,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_12.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_11},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_9}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


(lib.Face1_btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AABBXIAAhxQgLAJgLAFQgLAGgQAFIAAgnQAYgIAOgLQAMgLAIgQIAnAAIAACtg");
	this.shape.setTransform(83.725,25.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmA6QgOgHgKgPQgJgPAAgVQAAgcASgSQAUgSAhAAQAZAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAvAEQgMATgOAIQgQAIgcAAQgYAAgOgHgAgRgbQgFAGAAALIAuAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_1.setTransform(60.9,27.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA9QgNgDgJgJQgKgIgGgLQgFgLAAgSQAAgTAGgMQAFgKAJgHQAIgIAJgDQAOgGAUAAQAfAAAQALQAQALAGAVIgtAGQgCgIgFgEQgGgEgJAAQgKAAgIAIQgIAJABAQQgBAPAIAIQAHAIALAAQAJAAAGgFQAGgFADgJIAuAFQgDAOgJAKQgJALgNAFQgNAGgVAAQgSAAgOgEg");
	this.shape_2.setTransform(44.9,27.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag7A3QgMgLAAgPQAAgOAJgJQAIgIAWgFQAbgFAHgCIARgGQAAgJgEgDQgDgEgJAAQgLAAgGAEQgFADgCAIIgugFQADgMAFgGQAEgHAKgFQAGgEAMgCQALgCANAAQAVAAANACQANADAJAHQAGAGADAJQAEAKAAAJIAAA2IABAOQABAFAEAHIgtAAIgEgHIgBgIQgKAJgJAEQgMAFgQAAQgXAAgLgKgAAAAJQgPAEgEAEQgEAEAAAFQAAAFAEAEQAEAEAIAAQAHAAAGgEQAHgEADgGQADgFAAgJIAAgIIgTAGg");
	this.shape_3.setTransform(28.875,27.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhABWIAAirICBAAIAAAlIhNAAIAAAeIBCAAIAAAiIhCAAIAABGg");
	this.shape_4.setTransform(13.8,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Rounded
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape_5.setTransform(50,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_7.setTransform(50,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_8.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_7},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_5}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// Squared
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_9.setTransform(50,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_10.setTransform(50,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_11.setTransform(50,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_12.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_11},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_9}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


(lib.Eyes2R = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("ADoh8Qi0Hukbni");
	this.shape.setTransform(0.025,0.0332);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-25,71.30000000000001,50.1);


(lib.Eyes2L = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("Aj4hzQE6HJC3m9");
	this.shape.setTransform(0.025,0.002);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.3,-24.1,74.69999999999999,48.2);


(lib.Eyes1R = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("AC4jYQigNdjPtT");
	this.shape.setTransform(0,0.0132);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-34.1,61.8,68.30000000000001);


(lib.Eyes1L = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("Ai8jJQCZNnDguA");
	this.shape.setTransform(0.025,-0.0081);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-35.2,62.9,70.5);


(lib.EyebrowsR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("ACsgaQkeiOg5D3");
	this.shape.setTransform(0,-0.0068);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.6,-20.4,59.3,40.8);


(lib.EyebrowsL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("Ai+gdQE3heBGC4");
	this.shape.setTransform(0.025,0.0055);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-18.6,63.3,37.3);


(lib.ButtonCharacter = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AUvAAQAAErhyD8QhhDTixCxQmFGEomAAQolAAmFmEQmEmFAAomQAAolGEmFQCGiFCYhYQEkinFoAAQAgAAAfABQFEAOEKCYQCYBYCGCFQGEGFAAIlgArEMHQglggglgkQhththJh9Qh6jOgWj3QgCgNAAgOQgEgrAAgtQAAnXFMlNQCxixDYhTQC/hJDcAAQA0AAAyAEQCkANCSA4QDXBTCwCxQFOFNAAHXQAAAwgEAvQAAAKgBAKQgSC+hMCmQgXAygdAvQhJB9huBtQglAlgnAhQgpA2gzAzQkHEIl1AAQl0AAkIkIQgzgzgqg4gALtMJQk1EHmiAAQmjAAk3kJ");
	this.shape.setTransform(132.725,132.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AqoNoQgmgggkglQhththKh8Qh5jPgXj2IgBgcQgEgsAAgtQgBnWFNlNQCxiwDXhTQDAhKDcAAQA0AAAxAEIOoZEQgWAygdAwQhJB8hvBtQgkAlgnAiQk1EHmiAAQmjAAk3kJg");
	this.shape_1.setTransform(129.95,123.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AtwOrQmFmFAAomQAAolGFmFQCFiFCYhYQEkinFoAAQAgAAAfABIA9BhQgygEg0AAQjcAAi/BJQjYBTiwCxQlNFNAAHXQAAAtAEArIACAbQAXD3B5DOQBKB9BtBtQAkAkAlAgQAqA4A0AzQEIEIFzAAQF1AAEHkIQA0gzAog2QAnghAlglQBvhtBJh9QAcgvAXgyICZCvQhhDTixCxQmFGEomAAQolAAmEmEgAotNyQg0gzgqg4QE3EJGjAAQGiAAE1kHQgoA2g0AzQkHEIl1AAQlzAAkIkIgAqLMHIAAAAg");
	this.shape_2.setTransform(127,132.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AoFshQCkANCTA4QDWBTCvCwQFPFOgBHWQABAvgEAwIgBAVQgSC9hNCmg");
	this.shape_3.setTransform(196.85,90.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AFtL7QBMimASi9IABgVQAEgwAAgwQAAnWlOlNQiviwjXhTQiSg4ikgOIg9hgQFEANEKCZQCXBXCGCGQGEGFAAIlQAAErhyD7g");
	this.shape_4.setTransform(202.225,93.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonCharacter, new cjs.Rectangle(-1,-1,267.5,267.5), null);


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
	this.shape.setTransform(81.475,25.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAvAEQgMATgPAIQgPAIgcAAQgYAAgOgHgAgRgbQgFAGAAALIAuAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_1.setTransform(68.2,27.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvA3QgOgJgEgSIAvgFQADAJAFADQAGAEAHAAQAKAAAFgEQAEgDAAgFQAAgFgFgDQgEgCgQgDQgYgEgKgEQgKgDgGgIQgHgJAAgLQAAgMAHgJQAHgJANgFQAMgEAVAAQAWAAAKADQALAEAHAHQAHAHAFAMIgtAFQgCgGgEgDQgGgEgHAAQgIAAgEADQgDADAAAEQAAAFAEACQAFACAPACQAYADALAFQAMAEAGAIQAGAJAAALQAAALgGAKQgHAKgOAGQgOAGgYAAQghAAgPgKg");
	this.shape_2.setTransform(52.725,27.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmA6QgPgHgIgPQgKgPAAgVQAAgcATgSQASgSAiAAQAZAAAPAIQAQAIAIAQQAIAPAAAXIAAAGIhfAAQABALAGAGQAGAIALAAQAGAAAHgDQAEgDAEgFIAvAEQgKATgPAIQgQAIgcAAQgYAAgOgHgAgRgbQgEAGgCALIAuAAQgBgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_3.setTransform(37.55,27.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZBWIgcg0QgFgLgEgDQgGgDgIAAIgEAAIAABFIg1AAIAAirIBXAAQAZAAANAFQANADAHAMQAJAMgBAQQAAAOgGAKQgGALgLAFQgGAFgMACQAKADAEAEQADABAFAIIAIAKIAaAygAgegPIAWAAIANgCQAFgBAEgFQADgFAAgFQAAgIgGgEQgEgFgOAAIgXAAg");
	this.shape_4.setTransform(21.75,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Rounded
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape_5.setTransform(50,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_7.setTransform(50,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_8.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_7},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_5}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// Squared
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_9.setTransform(50,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_10.setTransform(50,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_11.setTransform(50,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_12.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_11},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_9}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.MPHFinalJCarrillo = function(mode,startPosition,loop,reversed) {
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
		this.Face1_btn.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.Eyes1L.x = 186;
			this.Eyes1L.y = 192;
			this.Eyes1R.x = 273;
			this.Eyes1R.y = 193;
			this.Nose1.x = 225;
			this.Nose1.y = 259;
			this.Mouth1.x = 224;
			this.Mouth1.y = 311;
			this.Hat1.x = 227;
			this.Hat1.y = 79;
		}
		
		this.Face2_btn.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.Eyes2L.x = 172;
			this.Eyes2L.y = 183;
			this.Eyes2R.x = 291;
			this.Eyes2R.y = 187;
			this.Glasses2.x = 232;
			this.Glasses2.y = 186;
			this.Nose2.x = 232;
			this.Nose2.y = 256;
			this.Mouth2.x = 228;
			this.Mouth2.y = 309;
			this.Hat2.x = 222;
			this.Hat2.y = 79;
		}
		
		this.btn_reset.addEventListener("click", ClickToReset.bind(this));
		
		function ClickToReset() {
			this.Eyes1L.x = 809;
			this.Eyes1L.y = 192;
			this.Eyes1R.x = 888;
			this.Eyes1R.y = 194;
			this.Mouth1.x = 601;
			this.Mouth1.y = 182;
			this.Mouth2.x = 678;
			this.Mouth2.y = 235;
			this.Eyes2L.x = 806;
			this.Eyes2L.y = 245;
			this.Eyes2R.x = 890;
			this.Eyes2R.y = 246;
			this.Mouth3.x = 563;
			this.Mouth3.y = 245;
			this.Nose1.x = 640;
			this.Nose1.y = 339;
			this.Nose2.x = 575;
			this.Nose2.y = 339;
			this.EyebrowsL.x = 809;
			this.EyebrowsL.y = 319;
			this.EyebrowsR.x = 884;
			this.EyebrowsR.y = 321;
			this.Glasses2.x = 839;
			this.Glasses2.y = 417;
			this.Glasses1.x = 839;
			this.Glasses1.y = 506;
			this.Hat3.x = 622;
			this.Hat3.y = 485;
			this.Hat2.x = 589;
			this.Hat2.y = 485;
			this.Hat1.x = 571;
			this.Hat1.y = 485;
			this.Feet2.x = 445;
			this.Feet2.y = 569;
			this.Feet1.x = 347;
			this.Feet1.y = 569;
			this.Hand2.x = 183;
			this.Hand2.y = 577;
			this.Hand1.x = 65;
			this.Hand1.y = 576;
		}
		
		this.Mouth1.on("pressmove", dragMe);
		this.Mouth3.on("pressmove", dragMe);
		this.Mouth2.on("pressmove", dragMe);
		this.Nose2.on("pressmove", dragMe);
		this.Nose1.on("pressmove", dragMe);
		this.Eyes1L.on("pressmove", dragMe);
		this.Eyes1R.on("pressmove", dragMe);
		this.Eyes2L.on("pressmove", dragMe);
		this.Eyes2R.on("pressmove", dragMe);
		this.EyebrowsL.on("pressmove", dragMe);
		this.EyebrowsR.on("pressmove", dragMe);
		this.Glasses2.on("pressmove", dragMe);
		this.Glasses1.on("pressmove", dragMe);
		this.Hat3.on("pressmove", dragMe);
		this.Hat2.on("pressmove", dragMe);
		this.Hat1.on("pressmove", dragMe);
		this.Feet2.on("pressmove", dragMe);
		this.Feet1.on("pressmove", dragMe);
		this.Hand1.on("pressmove", dragMe);
		this.Hand2.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Buttons
	this.Face2_btn = new lib.Face2_btn();
	this.Face2_btn.name = "Face2_btn";
	this.Face2_btn.setTransform(715.05,564.45);
	new cjs.ButtonHelper(this.Face2_btn, 0, 1, 2, false, new lib.Face2_btn(), 3);

	this.Face1_btn = new lib.Face1_btn();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(605.95,564.45);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 2, false, new lib.Face1_btn(), 3);

	this.btn_reset = new lib.BasicButton();
	this.btn_reset.name = "btn_reset";
	this.btn_reset.setTransform(874.2,589.45,1,1,0,0,0,50,25);
	new cjs.ButtonHelper(this.btn_reset, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_reset},{t:this.Face1_btn},{t:this.Face2_btn}]}).wait(1));

	// Body Parts
	this.Hand1 = new lib.Hand1d();
	this.Hand1.name = "Hand1";
	this.Hand1.setTransform(65,576);
	new cjs.ButtonHelper(this.Hand1, 0, 1, 1);

	this.Hand2 = new lib.Hand2d();
	this.Hand2.name = "Hand2";
	this.Hand2.setTransform(183,577);
	new cjs.ButtonHelper(this.Hand2, 0, 1, 1);

	this.Feet1 = new lib.Feet1d();
	this.Feet1.name = "Feet1";
	this.Feet1.setTransform(347,569);
	new cjs.ButtonHelper(this.Feet1, 0, 1, 1);

	this.Feet2 = new lib.Feet2d();
	this.Feet2.name = "Feet2";
	this.Feet2.setTransform(445,569);
	new cjs.ButtonHelper(this.Feet2, 0, 1, 1);

	this.Mouth1 = new lib.Mouth1d();
	this.Mouth1.name = "Mouth1";
	this.Mouth1.setTransform(601,182);
	new cjs.ButtonHelper(this.Mouth1, 0, 1, 1);

	this.Mouth3 = new lib.Mouth3d();
	this.Mouth3.name = "Mouth3";
	this.Mouth3.setTransform(563,245);
	new cjs.ButtonHelper(this.Mouth3, 0, 1, 1);

	this.Mouth2 = new lib.Mouth2d();
	this.Mouth2.name = "Mouth2";
	this.Mouth2.setTransform(678,235);
	new cjs.ButtonHelper(this.Mouth2, 0, 1, 1);

	this.Nose2 = new lib.Nose2d();
	this.Nose2.name = "Nose2";
	this.Nose2.setTransform(575,339);
	new cjs.ButtonHelper(this.Nose2, 0, 1, 1);

	this.Nose1 = new lib.Nose1d();
	this.Nose1.name = "Nose1";
	this.Nose1.setTransform(640,339);
	new cjs.ButtonHelper(this.Nose1, 0, 1, 1);

	this.Hat3 = new lib.Hat3d();
	this.Hat3.name = "Hat3";
	this.Hat3.setTransform(622,485);
	new cjs.ButtonHelper(this.Hat3, 0, 1, 1);

	this.Hat2 = new lib.Hat2d();
	this.Hat2.name = "Hat2";
	this.Hat2.setTransform(589,485);
	new cjs.ButtonHelper(this.Hat2, 0, 1, 1);

	this.Hat1 = new lib.Hat1d();
	this.Hat1.name = "Hat1";
	this.Hat1.setTransform(571,485);
	new cjs.ButtonHelper(this.Hat1, 0, 1, 1);

	this.Glasses1 = new lib.Glasses3d();
	this.Glasses1.name = "Glasses1";
	this.Glasses1.setTransform(839,506);
	new cjs.ButtonHelper(this.Glasses1, 0, 1, 1);

	this.Glasses2 = new lib.Glasses2d();
	this.Glasses2.name = "Glasses2";
	this.Glasses2.setTransform(839,417);
	new cjs.ButtonHelper(this.Glasses2, 0, 1, 1);

	this.EyebrowsR = new lib.EyebrowsR();
	this.EyebrowsR.name = "EyebrowsR";
	this.EyebrowsR.setTransform(884,321);
	new cjs.ButtonHelper(this.EyebrowsR, 0, 1, 1);

	this.EyebrowsL = new lib.EyebrowsL();
	this.EyebrowsL.name = "EyebrowsL";
	this.EyebrowsL.setTransform(809,319);
	new cjs.ButtonHelper(this.EyebrowsL, 0, 1, 1);

	this.Eyes2R = new lib.Eyes2R();
	this.Eyes2R.name = "Eyes2R";
	this.Eyes2R.setTransform(890,246);
	new cjs.ButtonHelper(this.Eyes2R, 0, 1, 1);

	this.Eyes2L = new lib.Eyes2L();
	this.Eyes2L.name = "Eyes2L";
	this.Eyes2L.setTransform(806,245);
	new cjs.ButtonHelper(this.Eyes2L, 0, 1, 1);

	this.Eyes1R = new lib.Eyes1R();
	this.Eyes1R.name = "Eyes1R";
	this.Eyes1R.setTransform(888,194);
	new cjs.ButtonHelper(this.Eyes1R, 0, 1, 1);

	this.Eyes1L = new lib.Eyes1L();
	this.Eyes1L.name = "Eyes1L";
	this.Eyes1L.setTransform(809,192);
	new cjs.ButtonHelper(this.Eyes1L, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Eyes1L},{t:this.Eyes1R},{t:this.Eyes2L},{t:this.Eyes2R},{t:this.EyebrowsL},{t:this.EyebrowsR},{t:this.Glasses2},{t:this.Glasses1},{t:this.Hat1},{t:this.Hat2},{t:this.Hat3},{t:this.Nose1},{t:this.Nose2},{t:this.Mouth2},{t:this.Mouth3},{t:this.Mouth1},{t:this.Feet2},{t:this.Feet1},{t:this.Hand2},{t:this.Hand1}]}).wait(1));

	// Character
	this.Character = new lib.ButtonCharacter();
	this.Character.name = "Character";
	this.Character.setTransform(223.4,248.6,1,1,0,0,0,132.7,132.7);

	this.timeline.addTween(cjs.Tween.get(this.Character).wait(1));

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSB3QgMgGgFgOQgGgNAAgeIAAg/IgZAAIAAgxIAZAAIAAgiIBEgjIAABFIAmAAIAAAxIgmAAIAAA/QAAAMACADQADAHAJAAQAIgBAOgEIAFAwQgaAFgXAAQgYAAgNgHg");
	this.shape.setTransform(430.25,493.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4BUQgUgKgOgWQgNgWAAgdQAAgpAbgbQAbgaAvAAQAmAAAWAMQAXAMALAVQAMAXAAAjIAAAHIiJAAQACARAHAIQAKAMAPAAQAKgBAJgFQAGgCAGgJIBEAHQgPAbgWAMQgWALgpAAQgjAAgVgKgAgZgnQgGAIgCAQIBDAAQgCgUgJgIQgIgJgPAAQgPAAgKANg");
	this.shape_1.setTransform(411.075,496.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag4BUQgUgKgOgWQgNgWAAgdQAAgpAbgbQAbgaAvAAQAmAAAWAMQAXAMALAVQAMAXAAAjIAAAHIiJAAQACARAHAIQAKAMAPAAQAKgBAJgFQAGgCAGgJIBEAHQgPAbgWAMQgWALgpAAQgjAAgVgKgAgZgnQgGAIgCAQIBDAAQgCgUgJgIQgIgJgPAAQgPAAgKANg");
	this.shape_2.setTransform(387.975,496.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AheB8IAAj3IC9AAIAAA1IhwAAIAAAsIBfAAIAAAwIhfAAIAABmg");
	this.shape_3.setTransform(365.3,493.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag7BGQgTgMgFgXIA8gGQAEALAGAFQAIAFAJgBQANABAGgGQAGgEgBgFQAAgHgGgDQgFgDgVgEQgfgFgMgFQgMgFgJgKQgIgLAAgOQAAgQAJgLQAJgMAQgFQAQgGAaABQAcAAANADQAOAFAJAJQAJAJAGAPIg6AGQgCgHgFgEQgIgFgJAAQgJAAgFAEQgFADAAAGQAAAFAGAEQAGADATACQAeAEAPAFQAPAHAHAKQAIALAAANQAAAOgIAOQgJAMgRAIQgSAHgeAAQgrAAgSgMg");
	this.shape_4.setTransform(168.15,514.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhFBWQgRgYAAgjQAAgnATgVQATgUAdAAQAOAAALAEQALAFAJAKIAAhMIA9AAIAADZIg5AAIAAgXQgMAPgJAFQgNAHgPAAQghAAgRgZgAgSAAQgHAIAAAVQAAATAHAKQAIAIAKAAQALAAAIgJQAHgJABgUQAAgTgIgJQgJgIgKAAQgLAAgHAIg");
	this.shape_5.setTransform(148.45,511.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXBRIAAhWQgBgPgFgGQgGgGgJAAQgLAAgGAIQgHAIAAAVIAABMIg9AAIAAidIA4AAIAAAZQANgPANgHQANgHASAAQAZAAAOAPQAPAPAAAfIAABkg");
	this.shape_6.setTransform(128.6,514.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhMBGQgOgNAAgUQAAgSALgLQAKgLAcgFIArgKIAWgIQAAgLgFgEQgEgFgMABQgNgBgIAFQgGAEgDAKIg7gGQAEgPAGgJQAGgJAMgGQAIgEAPgDQAOgDARABQAaAAARACQAQADALAKQAJAHAEAMQAEAMAAALIAABFQABAMABAGQABAGAFAKIg5AAIgFgJIgBgKQgMALgMAFQgPAGgWAAQgcABgPgNgAgBAMQgTAFgFAEQgEAGgBAGQABAHAEAFQAFAEAKAAQAKAAAIgFQAJgFADgHQAEgHAAgMIAAgJIgZAIg");
	this.shape_7.setTransform(108.3,514.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAlBtIAAhYIhJAAIAABYIhEAAIAAjZIBEAAIAABMIBJAAIAAhMIBDAAIAADZg");
	this.shape_8.setTransform(85.35,511.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhMBdQADgWAOgUQANgUAkgcQAVgPAHgJQAGgIAAgIQAAgJgGgGQgGgGgJAAQgKAAgGAHQgGAGgCAPIgzgEQADgVAIgMQAIgNAOgGQAPgGAZAAQAbAAAPAGQAPAGAJANQAIAMAAAQQAAARgJAPQgKAOgaATIgVAPIgMALIBPAAIAAApg");
	this.shape_9.setTransform(929.25,84.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhLBdQACgWAOgUQANgUAkgcQAVgPAHgJQAGgIAAgIQAAgJgGgGQgGgGgJAAQgKAAgGAHQgGAGgCAPIgzgEQADgVAIgMQAIgNAOgGQAPgGAZAAQAbAAAPAGQAPAGAJANQAIAMAAAQQAAARgJAPQgKAOgaATIgVAPIgMALIBPAAIAAApg");
	this.shape_10.setTransform(912.15,84.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkBXQgPgHgJgOQgHgKgDgSQgEgSAAgUQAAg0ATgVQASgVAmAAQATAAAMAFQALAEAIAIQAHAHAFAIQAEAIADALQAFAUAAAXQAAAxgRAXQgRAXgpAAQgXAAgNgIgAgSgvQgFANgBAiQAAAiAHANQAGANALAAQAHAAAHgFQAFgGADgMQADgLAAgZQgBgkgGgMQgGgNgMAAQgMAAgGANg");
	this.shape_11.setTransform(895.2,84.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhMBdQADgWANgUQANgUAmgcQAUgPAHgJQAGgIAAgIQAAgJgGgGQgGgGgKAAQgJAAgGAHQgGAGgCAPIgzgEQADgVAIgMQAIgNAPgGQAOgGAZAAQAbAAAPAGQAPAGAIANQAJAMAAAQQAAARgKAPQgKAOgaATIgUAPIgLALIBOAAIAAApg");
	this.shape_12.setTransform(877.9,84.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhCBaIgEgjQALAEANAAQAJAAAGgFQAFgEAEgKIg3iEIA1AAIAbBYIAZhYIAyAAIg0CNQgJAYgKAIQgMANgbAAQgLgBgXgDg");
	this.shape_13.setTransform(853.225,89.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag/A7QgNgLAAgQQAAgQAJgJQAJgKAYgEIAkgIIASgGQAAgJgEgFQgDgDgKAAQgMAAgGAEQgFADgDAJIgxgFQADgOAFgGQAGgIAJgGQAHgDANgCQAMgCAOgBQAWAAAOADQAOACAJAJQAHAFADALQAEAKAAAKIAAA5IABAPIAGAOIgwAAIgEgIIgCgJQgKAKgKAEQgMAFgSABQgYgBgMgKgAgBAKQgPAEgEAEQgFAFAAAEQAAAHAFADQAEAEAIAAQAIAAAHgEQAHgEADgGQADgGAAgKIAAgHIgVAGg");
	this.shape_14.setTransform(836.775,87);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AA5BcIAAiLIgkCLIgpAAIgkiLIAACLIguAAIAAi3IBLAAIAbBvIAdhvIBKAAIAAC3g");
	this.shape_15.setTransform(816.075,84.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaAdQAOgHAGgHQAFgHABgIIgaAAIAAgyIA1AAIAAAqQAAAWgJAOQgKANgWAKg");
	this.shape_16.setTransform(791.175,93.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNBYQgJgFgEgJQgEgKAAgXIAAgtIgTAAIAAgmIATAAIAAgYIAygaIAAAyIAcAAIAAAmIgcAAIAAAuQAAAIACADQACAEAHAAQAFAAAKgDIAEAjQgTAEgRAAQgRAAgKgFg");
	this.shape_17.setTransform(781.2,84.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgzBEIAAiEIAvAAIAAAWQAGgPAIgEQAHgGALAAQALAAANAHIgPAlQgJgFgGAAQgKAAgFAJQgHAMAAAeIAAAtg");
	this.shape_18.setTransform(770.925,86.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAoBcIgJgfIg/AAIgJAfIg6AAIBFi3IA9AAIBFC3gAgUAWIAoAAIgUhBg");
	this.shape_19.setTransform(754.2,84.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhIBdIAAi2IAwAAIAAATQAKgMAIgEQAKgGANAAQAbAAAPAUQAOAVAAAeQAAAggQARQgPASgZAAQgMAAgIgEQgKgEgIgIIAAA/gAgOgvQgHAHAAASQAAAPAHAHQAGAIAJAAQAJAAAGgIQAGgGAAgSQAAgQgGgHQgGgIgJAAQgJAAgGAIg");
	this.shape_20.setTransform(727.375,89.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AA+BEIAAhLQAAgJgEgEQgFgHgIAAQgJAAgFAGQgGAHAAAOIAABEIgyAAIAAhIIgBgMQgBgFgEgDQgEgEgGAAQgJABgFAGQgGAHAAAOIAABEIgzAAIAAiEIAwAAIAAATQAKgLAKgGQALgFAPAAQAQAAAIAGQAJAGAGAKQAMgNAKgFQAKgEAOAAQAWAAAMANQAMANAAAbIAABSg");
	this.shape_21.setTransform(705.725,86.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgzA1QgZgUABghQgBgdAVgTQAVgVAiAAQAoAAAUAXQARATAAAbQAAAegVAUQgVAUgjAAQggAAgTgRgAgRgZQgIAIAAARQAAASAIAIQAHAJAKAAQALAAAHgJQAHgHAAgTQAAgRgHgIQgHgJgLAAQgKAAgHAJg");
	this.shape_22.setTransform(684.25,87);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgqBWQgTgJgNgVQgOgWAAgiQAAgtAYgZQAYgYAsAAQAiAAAUAOQAUAOAKAdIgyALQgDgIgDgEQgFgHgHgDQgGgEgJAAQgSAAgKAQQgIAMAAAYQAAAeAJALQAJALAQAAQAQAAAJgJQAIgJAEgRIAxAPQgFAVgKAOQgLAOgQAHQgQAHgZAAQgdAAgTgJg");
	this.shape_23.setTransform(665.925,84.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaAdQAOgHAGgHQAFgHABgIIgaAAIAAgyIA1AAIAAAqQAAAWgJAOQgKANgWAKg");
	this.shape_24.setTransform(642.975,93.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgzA1QgZgUAAghQAAgdAVgTQAUgVAjAAQAoAAAUAXQAQATAAAbQABAegVAUQgUAUgkAAQgfAAgUgRgAgRgZQgHAIAAARQAAASAHAIQAHAJAKAAQALAAAHgJQAHgHAAgTQAAgRgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_25.setTransform(630.1,87);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZBcIAAi3IAzAAIAAC3g");
	this.shape_26.setTransform(617.325,84.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZBcIAAi3IAzAAIAAC3g");
	this.shape_27.setTransform(608.775,84.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYBcIAAiEIAxAAIAACEgAgYg4IAAgjIAxAAIAAAjg");
	this.shape_28.setTransform(600.3,84.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgzBEIAAiEIAvAAIAAAWQAGgPAIgEQAHgGALAAQALAAANAHIgPAlQgJgFgGAAQgKAAgFAJQgHAMAAAeIAAAtg");
	this.shape_29.setTransform(591.425,86.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgzBEIAAiEIAvAAIAAAWQAGgPAIgEQAHgGALAAQALAAANAHIgPAlQgJgFgGAAQgKAAgFAJQgHAMAAAeIAAAtg");
	this.shape_30.setTransform(580.025,86.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag/A7QgNgLAAgQQAAgQAJgJQAJgKAYgEIAkgIIASgGQAAgJgEgFQgDgDgKAAQgMAAgGAEQgFADgDAJIgxgFQADgOAFgGQAGgIAJgGQAHgDANgCQAMgCAOgBQAWAAAOADQAOACAJAJQAHAFADALQAEAKAAAKIAAA5IABAPIAGAOIgwAAIgEgIIgCgJQgKAKgKAEQgMAFgSABQgYgBgMgKgAgBAKQgPAEgEAEQgFAFAAAEQAAAHAFADQAEAEAIAAQAIAAAHgEQAHgEADgGQADgGAAgKIAAgHIgVAGg");
	this.shape_31.setTransform(564.675,87);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgqBWQgTgJgNgVQgOgWAAgiQAAgtAYgZQAYgYAsAAQAiAAAUAOQAUAOAKAdIgyALQgDgIgDgEQgFgHgHgDQgGgEgJAAQgSAAgKAQQgIAMAAAYQAAAeAJALQAJALAQAAQAQAAAJgJQAIgJAEgRIAxAPQgFAVgKAOQgLAOgQAHQgQAHgZAAQgdAAgTgJg");
	this.shape_32.setTransform(546.275,84.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgnBWQgQgIgIgOQgIgPgCgVIA2gHQAAAMACAGQACAGAFADQAEADAGAAQAIAAAFgHQAEgHAAgRIAAhwIA5AAIAABiQAAAggGAQQgFARgRALQgRALgaAAQgbAAgPgHg");
	this.shape_33.setTransform(518.275,84.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhCBaIgEgjQALAEANAAQAJAAAGgFQAFgEAEgKIg3iEIA1AAIAbBYIAZhYIAyAAIg0CNQgJAYgKAIQgMANgbAAQgLgBgXgDg");
	this.shape_34.setTransform(494.125,89.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhUBcIAAi3IBpAAQAbAAAOANQAOANAAAUQAAAQgKAMQgHAIgNAEQAUAFAKAKQAJAMAAASQAAAOgHALQgGAMgMAGQgHAEgOACIgaADgAgbA0IAcAAQAPAAAGgFQAGgFAAgJQAAgIgGgFQgGgFgPAAIgcAAgAgbgTIAZAAQAMAAAGgEQAFgFAAgJQAAgIgFgEQgGgFgMAAIgZAAg");
	this.shape_35.setTransform(476.675,84.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag8BHQgTgMgFgXIA9gGQAEALAGAFQAHAEALAAQAMAAAHgFQAFgEAAgGQAAgGgHgEQgFgDgUgDQgggGgNgFQgMgFgJgKQgIgLAAgOQAAgQAJgMQAJgLAQgGQAQgGAbAAQAcAAAOAFQAOAEAJAJQAJAKAGAPIg6AGQgDgIgFgDQgHgFgJAAQgLAAgFADQgEAEAAAGQAAAFAGADQAGADATADQAfADAOAHQAPAGAIAKQAIALAAAOQAAAOgIANQgJANgRAIQgTAIgfAAQgrAAgSgNg");
	this.shape_36.setTransform(631.825,404.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgPBqQgLgFgFgMQgGgMAAgbIAAg3IgWAAIAAgtIAWAAIAAgeIA9gfIAAA9IAiAAIAAAtIgiAAIAAA3QAAAKACAEQADAFAIAAQAGAAANgEIAEAqQgXAFgTAAQgXAAgKgGg");
	this.shape_37.setTransform(615.7,401.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhMBHQgPgOAAgTQAAgSAKgMQALgLAdgGIAsgJIAWgIQAAgLgFgFQgFgEgMAAQgOAAgHAFQgGAEgEAKIg6gGQADgQAGgIQAGgJAMgHQAJgEAOgDQAPgDARAAQAbAAARAEQAQADAMAJQAHAHAFANQAFAMAAALIAABGQAAALABAHQABAGAFAKIg5AAIgFgJIgCgKQgMALgMAFQgPAHgWAAQgdAAgOgNgAgBAMQgTAFgFAFQgFAFAAAGQAAAIAFAEQAFAFAKAAQAKAAAIgFQAJgFAEgHQAEgIAAgLIAAgKIgaAIg");
	this.shape_38.setTransform(598.575,404.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAlBvIAAhaIhJAAIAABaIhFAAIAAjdIBFAAIAABOIBJAAIAAhOIBFAAIAADdg");
	this.shape_39.setTransform(575.375,401.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhABMQgUgOgGgYIBBgGQAEALAIAFQAHAFALAAQANAAAHgFQAGgFAAgGQAAgHgHgEQgGgCgWgFQgigFgNgFQgNgGgJgKQgJgNAAgPQAAgRAJgMQAKgMASgGQARgGAcAAQAeAAAPAEQAOAFAKAKQAKAKAGAQIg+AGQgCgIgGgEQgIgFgKAAQgLAAgFAEQgFAEAAAGQAAAGAHADQAGADAVADQAgAEAQAGQAQAHAJALQAIAMAAAPQAAAPgJAOQgJAOgTAIQgTAIghAAQguAAgUgNg");
	this.shape_40.setTransform(650.475,282.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag1BQQgUgKgMgVQgNgVAAgcQAAgnAagZQAZgYAuAAQAjAAAVALQAWALALAVQALAVAAAhIAAAHIiCAAQABAQAHAIQAKALAOAAQAJAAAJgFQAGgDAGgIIBAAGQgPAagUALQgWALgmAAQghAAgUgJgAgYglQgGAHgBAQIBAAAQgCgTgJgIQgIgJgOAAQgOAAgKANg");
	this.shape_41.setTransform(629.7,282.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhABMQgUgOgGgYIBBgGQAEALAIAFQAHAFALAAQANAAAHgFQAGgFAAgGQAAgHgHgEQgGgCgWgFQgigFgNgFQgNgGgJgKQgJgNAAgPQAAgRAJgMQAKgMASgGQARgGAcAAQAeAAAPAEQAOAFAKAKQAKAKAGAQIg+AGQgCgIgGgEQgIgFgKAAQgLAAgFAEQgFAEAAAGQAAAGAHADQAGADAVADQAgAEAQAGQAQAHAJALQAIAMAAAPQAAAPgJAOQgJAOgTAIQgTAIghAAQguAAgUgNg");
	this.shape_42.setTransform(608.425,282.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhCBEQgfgaAAgqQAAgmAagZQAbgZAsAAQAzAAAaAdQAVAYAAAjQAAAngaAZQgaAZguAAQgoAAgagVgAgWggQgJALAAAVQAAAXAJALQAJALANAAQAOAAAJgLQAJgLAAgXQAAgWgJgKQgJgLgNAAQgOAAgJALg");
	this.shape_43.setTransform(587.575,282.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAsB2IhXiBIAACBIhFAAIAAjrIBEAAIBYCBIAAiBIBFAAIAADrg");
	this.shape_44.setTransform(562.875,279.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag6BFQgSgMgFgXIA7gFQADAKAHAFQAGAFAKAAQAMgBAHgFQAFgDAAgGQAAgGgHgEQgEgDgUgDQgfgGgMgEQgMgFgIgKQgJgKAAgOQAAgQAJgLQAJgLAQgFQAPgGAaAAQAbAAAOAEQANAFAJAIQAIAKAGAPIg4AFQgCgIgFgDQgHgFgJABQgKgBgFAEQgFAEAAAEQAAAGAGADQAGADATADQAdADAPAGQAOAGAIAKQAHALAAANQAAANgIANQgIANgRAHQgSAIgeAAQgpAAgSgMg");
	this.shape_45.setTransform(656.575,144.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAWBrIAAhVQAAgPgFgGQgFgFgLAAQgJAAgHAHQgHAJABAUIAABLIg8AAIAAjVIA8AAIAABPQALgNALgFQANgGAQABQAYAAAOAOQAOAPAAAdIAABjg");
	this.shape_46.setTransform(637.7,141.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgPBnQgKgGgFgLQgFgMAAgaIAAg1IgWAAIAAgsIAWAAIAAgcIA6gfIAAA7IAhAAIAAAsIghAAIAAA2QAAAKACADQADAFAHAAQAHAAAMgEIAEApQgWAFgTAAQgVAAgLgGg");
	this.shape_47.setTransform(621.075,141.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhDBBQgOgPAAgfIAAhhIA7AAIAABUQABAPAFAGQAGAGAJAAQAKAAAGgIQAIgJgBgUIAAhKIA8AAIAACaIg3AAIAAgZQgNAPgMAHQgMAGgTAAQgZAAgNgOg");
	this.shape_48.setTransform(604.45,144.875);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag7A+QgdgYAAgmQAAgiAYgXQAYgXAoAAQAuAAAYAbQATAVAAAgQAAAkgXAWQgYAXgqAAQglAAgWgTgAgUgdQgJAKAAATQAAAVAJAKQAIAKAMAAQANAAAJgKQAHgJABgWQAAgTgJgKQgIgKgMAAQgNAAgIAKg");
	this.shape_49.setTransform(584.55,144.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("ABCBrIAAiiIgpCiIgxAAIgpiiIAACiIg3AAIAAjVIBXAAIAhCBIAiiBIBWAAIAADVg");
	this.shape_50.setTransform(560.55,141.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag/BKQgTgNgFgYIA/gGQAEALAHAFQAHAFALAAQANAAAGgFQAGgFAAgGQAAgHgHgDQgFgDgWgEQghgGgMgFQgNgFgKgKQgIgMgBgPQAAgQAKgMQAKgMAQgGQARgGAcAAQAeAAANAFQAPAEAJAKQAKAJAGAQIg9AGQgCgIgGgDQgHgFgKAAQgKAAgGADQgEAEAAAGQgBAGAHADQAGADAUADQAgADAQAHQAPAGAIALQAIAMAAAOQAAAPgIANQgJAOgTAIQgSAIggAAQguAAgTgNg");
	this.shape_51.setTransform(886.05,143.275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag0BOQgTgKgMgUQgMgUAAgcQAAgmAZgYQAZgYAsAAQAiAAAVALQAVALALAUQAKAVAAAgIAAAHIh/AAQACAPAHAIQAJALAOAAQAJAAAJgFQAFgDAGgIIA/AGQgPAZgUALQgUALgmAAQghAAgTgJgAgXgkQgGAHgBAPIA9AAQgBgSgIgIQgJgIgNAAQgOAAgJAMg");
	this.shape_52.setTransform(865.825,143.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhTByIgFgtQAOAEARAAQALAAAHgFQAHgFAFgOIhGilIBDAAIAhBvIAghvIA/AAIhCCxQgLAegMALQgQAPgiAAQgNAAgdgDg");
	this.shape_53.setTransform(845.375,146.65);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhgBzIAAjlIC9AAIAAAxIh2AAIAAAlIBuAAIAAAtIhuAAIAAAuIB6AAIAAA0g");
	this.shape_54.setTransform(824.275,140.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag3BBQgRgLgFgWIA4gFQADAKAHAEQAGAEAJABQALAAAHgFQAEgEAAgFQAAgHgGgDQgEgCgTgEQgdgEgMgFQgLgEgIgJQgIgKAAgOQAAgPAJgKQAIgLAPgEQAPgGAYAAQAaABAMADQANAFAIAIQAIAIAGAOIg1AGQgCgHgFgDQgHgFgIAAQgKAAgEAEQgEADAAAFQAAAFAFACQAGAEARABQAcAEAOAFQANAGAIAKQAHAKAAAMQAAANgIAMQgHAMgRAHQgQAIgdgBQgnAAgRgLg");
	this.shape_55.setTransform(913.075,285.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAdBJIgdhXIgcBXIgyAAIg2iRIA2AAIAXBbIAehbIAyAAIAfBbIAXhbIA2AAIg2CRg");
	this.shape_56.setTransform(891.325,285.275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4A6QgbgWAAgjQAAghAXgWQAWgWAmAAQAsAAAWAaQASAVAAAdQAAAhgWAWQgXAWgngBQgjAAgVgSgAgTgcQgHAKAAASQAAAUAHAJQAIAKALAAQAMAAAIgKQAIgJAAgUQAAgSgIgKQgIgJgLAAQgMAAgIAJg");
	this.shape_57.setTransform(868.6,285.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Ag4BLIAAiSIA0AAIAAAYQAHgPAHgGQAJgGALAAQANAAAOAIIgQAoQgLgEgFAAQgMAAgFAJQgIANAAAiIAAAxg");
	this.shape_58.setTransform(854.15,285.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgHBgQgJgFgLgNIAAAVIg1AAIAAjJIA5AAIAABGQAIgJALgEQAKgEANAAQAbAAARATQASATAAAjQAAAYgIASQgIATgPAJQgOAJgRAAQgPAAgLgHgAgQAAQgHAIAAASQAAATAHAIQAHAJAKAAQAKAAAHgJQAGgIAAgUQAAgRgGgIQgHgHgJAAQgLAAgHAHg");
	this.shape_59.setTransform(837.625,282.675);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgtBEQgRgIgLgSQgLgSAAgYQAAghAWgWQAWgUAngBQAeAAASAKQATAJAJASQAKASAAAcIAAAHIhwAAQACANAGAHQAIAJAMAAQAIABAHgFQAFgCAFgHIA3AFQgMAWgSAKQgSAJghAAQgdAAgQgIgAgUggQgFAHgCANIA3AAQgCgRgHgHQgHgGgMAAQgMAAgIAKg");
	this.shape_60.setTransform(818.525,285.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhJBjIgEgnQAMAEAPAAQAJABAHgFQAGgFAEgMIg9iRIA7AAIAdBiIAchiIA3AAIg6CbQgKAcgKAIQgOAOgeAAQgMAAgZgEg");
	this.shape_61.setTransform(800.575,288.25);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AhUBlIAAjJICmAAIAAArIhoAAIAAAhIBgAAIAAAnIhgAAIAAApIBrAAIAAAtg");
	this.shape_62.setTransform(782.075,282.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhCBPQgVgOgGgZIBDgHQAFAMAHAFQAIAGALgBQANAAAIgFQAGgFAAgHQAAgGgIgFQgGgCgWgFQgjgGgOgFQgNgGgKgLQgJgMAAgQQgBgSALgMQAKgNASgGQARgGAeAAQAfAAAPAEQAPAFAKAKQAKAKAHASIhBAHQgCgJgGgEQgIgFgKAAQgLAAgGADQgFAFAAAFQAAAHAHAEQAGADAVACQAiAEARAHQAQAGAKANQAIAMAAAPQAAAPgJAPQgJAOgUAJQgVAJghgBQgwAAgUgNg");
	this.shape_63.setTransform(907.55,360.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ag3BSQgUgJgNgWQgOgVAAgeQABgoAagZQAbgaAuAAQAlAAAXALQAVAMAMAWQAMAWAAAhIAAAIIiHAAQABAQAIAIQAJALAPABQAKAAAJgGQAGgCAGgJIBCAHQgPAbgWALQgVAMgogBQgjAAgUgKgAgYgmQgHAHgBAQIBBAAQgCgTgIgJQgJgIgOAAQgPAAgJANg");
	this.shape_64.setTransform(886.05,360.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhCBPQgVgOgGgZIBDgHQAEAMAIAFQAHAGAMgBQAOAAAHgFQAGgFAAgHQAAgGgIgFQgFgCgXgFQgjgGgOgFQgNgGgKgLQgKgMAAgQQAAgSALgMQAKgNASgGQASgGAdAAQAfAAAPAEQAPAFALAKQAKAKAGASIhAAHQgDgJgFgEQgJgFgKAAQgMAAgEADQgGAFAAAFQAAAHAHAEQAGADAVACQAjAEAQAHQAQAGAKANQAIAMAAAPQAAAPgJAPQgJAOgVAJQgTAJgjgBQgvAAgUgNg");
	this.shape_65.setTransform(864.05,360.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AhDBPQgUgOgGgZIBDgHQAEAMAIAFQAHAGAMgBQAOAAAHgFQAGgFAAgHQAAgGgIgFQgFgCgXgFQgjgGgOgFQgNgGgKgLQgKgMAAgQQABgSAJgMQALgNASgGQASgGAdAAQAfAAAPAEQAPAFALAKQAKAKAGASIhAAHQgDgJgFgEQgJgFgKAAQgMAAgEADQgGAFAAAFQAAAHAHAEQAGADAWACQAiAEAQAHQARAGAIANQAJAMAAAPQAAAPgJAPQgJAOgVAJQgTAJgjgBQgvAAgVgNg");
	this.shape_66.setTransform(843.25,360.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhVBOQgQgPAAgVQAAgVAMgNQAMgLAfgHIAxgKQALgDANgFQAAgNgFgFQgFgFgNAAQgQAAgIAFQgHAEgEAMIhAgHQADgRAHgKQAHgJANgIQAJgFAQgDQARgCATAAQAdAAATADQASADANAMQAIAHAFANQAGAOAAANIAABNQgBAMACAHQACAIAFAKIhAAAIgFgKIgCgLQgOANgNAFQgQAIgZgBQgfAAgRgOgAgBAOQgVAFgFAFQgGAGAAAGQAAAJAGAFQAFAFALAAQALAAAJgFQAKgGAEgIQAEgIAAgMIAAgLIgcAJg");
	this.shape_67.setTransform(821.7,360.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AghB6IAAjzIBDAAIAADzg");
	this.shape_68.setTransform(804.6,357.25);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AhCBwQgbgPgPgeQgPgdAAgmQAAgnAQgdQARgeAfgPQAagMAoAAQAoAAAVAHQAUAIANAPQANAPAHAYIhJANQgEgOgLgHQgLgHgRAAQgYAAgOARQgPARAAAlQAAAnAQARQAOARAZAAQANAAAMgEQALgDAPgJIAAgXIgzAAIAAgyIB1AAIAABnQghAXgaAIQgaAIgjAAQgrAAgbgOg");
	this.shape_69.setTransform(784.45,357.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAsCdIAAioQAAgdgLgMQgKgMgUAAQgUABgNAQQgOAPAAApIAACUIh1AAIAAkyIBtAAIAAAyQAZgfAZgNQAYgNAkAAQAxAAAcAdQAbAdAAA9IAADCg");
	this.shape_70.setTransform(851.675,52.35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Ah3B7Qg4gvAAhLQAAhGAvgtQAwgtBQgBQBbABAwA1QAlArAAA/QAABGguAuQgvAshTABQhJAAgugmgAgog7QgRAUAAAnQAAApARAVQAQATAYAAQAaAAAQgTQAQgUAAgqQAAgogQgTQgRgUgYAAQgZABgQATg");
	this.shape_71.setTransform(812.125,52.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgeDMQgVgLgKgXQgKgXAAgzIAAhsIgrAAIAAhWIArAAIAAg4IB1g8IAAB0IBBAAIAABWIhBAAIAABsQAAAUAEAGQAGAKAOAAQANAAAYgIIAIBSQgrAJgmAAQgrAAgVgLg");
	this.shape_72.setTransform(779.275,47.225);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgeDMQgVgLgKgXQgKgXAAgzIAAhsIgrAAIAAhWIArAAIAAg4IB1g8IAAB0IBBAAIAABWIhBAAIAABsQAAAUAEAGQAGAKAOAAQANAAAYgIIAIBSQgrAJgmAAQgrAAgVgLg");
	this.shape_73.setTransform(752.975,47.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AiGCAQgbgdAAg9IAAjCIB2AAIAACoQAAAdALAMQAKAMAUAAQAUAAANgQQAOgQAAgpIAAiUIB1AAIAAEyIhuAAIAAgyQgYAfgZANQgYANglAAQgwAAgcgdg");
	this.shape_74.setTransform(720.025,53.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AjDDUIAAmnID0AAQA+AAAhAeQAgAfAAAtQAAAlgXAbQgQASgeAKQAuALAWAaQAVAbAAAoQAAAhgPAaQgQAbgaAPQgRAKghAEQgsAGgPAAgAg/B5IBCAAQAiAAAOgMQAOgMAAgVQAAgSgOgMQgOgLgiAAIhCAAgAg/gtIA5AAQAeAAAMgKQAMgLAAgUQAAgSgMgLQgMgKgdAAIg6AAg");
	this.shape_75.setTransform(678.275,46.875);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Ag+A7IAAh1IB9AAIAAB1g");
	this.shape_76.setTransform(624.775,62.15);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("Ah4CdIAAkyIBvAAIAAAyQAOggASgNQAQgMAZAAQAaAAAfARIglBTQgUgIgMAAQgXAAgNATQgSAaABBJIAABng");
	this.shape_77.setTransform(604.4,52.35);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("ACDDUIAAlCIhTFCIhgAAIhSlCIAAFCIhrAAIAAmnICsAAIBBEBIBCkBICsAAIAAGng");
	this.shape_78.setTransform(560.825,46.875);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(0.1,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_79.setTransform(480,320);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_80.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,320,462,311);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#000099",
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