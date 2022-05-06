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


(lib.Beam = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.012,1],0,350.9,0,-350.9).s().p("EgDgA3PMgIIhudIXRAAMgIJBudg");
	this.shape.setTransform(74.5,353.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149,707);


(lib.LePhone = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(31,1,1).p("EgbagqBMA21AAAMAAABUDMg21AAAg");
	this.shape.setTransform(175.5,268.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("ADaAAQAABahBBAQg/BAhaAAQhZAAhAhAQhAhAAAhaQAAhZBAhAQBAhABZAAQBaAAA/BAQBBBAAABZg");
	this.shape_1.setTransform(171.75,485.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(8,1,1).p("A0Y/UMAoxAAAMAAAA+pMgoxAAAg");
	this.shape_2.setTransform(176.5,250.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AiZCZQg/g/AAhaQAAhZA/hAQBAhABZAAQBaAABABAQBABAAABZQAABahAA/QhABAhaAAQhZAAhAhAg");
	this.shape_3.setTransform(171.75,485.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("A0YfVMAAAg+pMAoxAAAMAAAA+pg");
	this.shape_4.setTransform(176.5,250.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1D").s().p("EgbaAqCMAAAhUDMA21AAAMAAABUDgAi/fdQg/BAAABaQAABaA/BAQBBBABZAAQBZAABAhAQBAhAAAhaQAAhahAhAQhAg/hZAAQhZAAhBA/gA0OccMAoxAAAMAAAg+pMgoxAAAg");
	this.shape_5.setTransform(175.5,268.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,382,569);


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


(lib.Group_89 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_89, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_88 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E7DFD9").s().p("AABAJQAXgnAshRQg0B5hTBmQAigrAig8g");
	this.shape.setTransform(7.7875,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_88, new cjs.Rectangle(1,0,13.6,22.4), null);


(lib.Group_87 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E7DFD9").s().p("AgjArQAfgzAagiIAOA7QgMgCgYAPQgVANgLAAIgDAAg");
	this.shape.setTransform(3.6,4.2871);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_87, new cjs.Rectangle(0,0,7.2,8.6), null);


(lib.Group_86 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_86, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_85 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_85, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_84 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_84, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_83 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_83, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_82 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_82, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_81 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_81, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_80 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_80, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_79 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E7DFD9").s().p("AhEABQhEgBgyAEQBLgIBcABQArAACjAFQg2ADgrAAIiegEg");
	this.shape.setTransform(22.7375,0.4491);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_79, new cjs.Rectangle(4.1,0,37.4,0.9), null);


(lib.Group_78 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_78, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_77 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_77, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_76 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_76, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_75 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_75, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_74 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_74, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_73 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_73, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_72 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_72, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_71 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_71, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_70 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_70, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_69 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_69, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_68 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_68, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_67 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_67, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_66 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_66, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_65 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E7DFD9").s().p("AgEgDIAMgIQgIALgHAMg");
	this.shape.setTransform(0.825,1.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_65, new cjs.Rectangle(0,0,1.7,2.4), null);


(lib.Group_64 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_64, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_63 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_63, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_62 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_62, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_61 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_61, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_60 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E7DFD9").s().p("AgHgCIBOh3IhDCCQgzBkgXANQAUg5ArhDg");
	this.shape.setTransform(7.125,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_60, new cjs.Rectangle(0,0,14.3,24.4), null);


(lib.Group_59 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_59, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_58 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_58, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_57 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_57, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_56 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_56, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_55 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_55, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_54 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_54, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_53 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_53, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_52 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_52, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_51 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_51, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_50 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_50, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_49 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_49, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_48 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_48, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_47 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_47, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_46 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_46, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_45 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_45, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_44 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_44, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_43 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_43, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_42 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_42, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_33 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AhZBRQgigOArgdIgIAEQAQglAbglQAjgyAXgFQgBAIgKAWQgHATgBAMIAMgKIAMgLIgEAOIANgGQAKgEAEgEIgCADQgBABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAIgFAVgSQATgPAIgFIgSAVQgLAMgEAKIAOgCQAHgCAGgEQgZARgVAeQASACAQgNQgEADgCAEIgEAHQATgCAUABQgHAIgNAGIgYAMQgJAFgiAZQgaAUgTAHQgOAFgOAAQgRAAgRgHg");
	this.shape.setTransform(10.4117,8.8395);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_33, new cjs.Rectangle(-0.1,0,21,17.7), null);


(lib.Group_32 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_32, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_31 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_31, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_30 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_30, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_29 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_29, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_28 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_28, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_27 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_27, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_26 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_25 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_24 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_23 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_22 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_21 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_20 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_19 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_18 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_17 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_16_0 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_16_0, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AgoBLQhLgIgogBQg6gBg0AJQgeglgVggQBNgeBXgVQCCgeB8AAQBxAABmAZQgzAkg8AfQhbAkhnAYQgNABgPAAg");
	this.shape.setTransform(31.675,7.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0,0,63.4,15.5), null);


(lib.Group_15 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_14 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_13_0 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_13_0, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AgCECQhrgRhzglQgcgMgcgRIgDgCQg7g7hOgWQgbgOgegHIgEiFQgBhSAOgsQgDAKEQATQEMATAqgEQBagHA0gNQA5gOAhgRQAsgXAWgnQA1B5AUBPQhpA5hCBtIgKAQQgdAjgfAdQgdAVgkAUQgmAOgoAKQgmAEgtAAIgRAAg");
	this.shape.setTransform(48.1677,25.8083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,96.4,51.6), null);


(lib.Group_12 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_11_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AhABNQg0gmAAg1QAAhWBWgXQA2gOBdAMQgogEg0AXQg5AZgOAjQgQAsAfA2QAUAjAqAtQhCghgdgWg");
	this.shape.setTransform(11.6749,13.1369);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_11_1, new cjs.Rectangle(0,0,23.4,26.3), null);


(lib.Group_11_0 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_11_0, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AhcDFQg4gEhWgdQhjgjgngHQgRgDgHgDQgJgDgEgFQgEgEgHgSQgDgHgshHQgdgtAIgiIACgLQACgHgBgEQgBgJgJgJIgPgPQgLgMgCgSQgCgRAIgPQAGgLAJgGQAnAuAxAlQBmBNAtAcQBWA3BLAVQCSArC/hKQC5hHBgh/IAKgNIgBAJQgCAXAEAxQADAsgFAYQgGAdgPAXQgUAggpAiQgQAOg5ApQhSA9iMAGIgPAAQg2AAingJg");
	this.shape.setTransform(52.365,20.6398);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,104.8,41.3), null);


(lib.Group_10_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AiQAXQACgfALgPQAagkA+gKQA0gIA0ASQA0ATAiAoQgfgcgrgKQgrgKgoALQgpAKghAgQgSATgmArIgGAGIACgyg");
	this.shape.setTransform(14.675,7.2412);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_10_0, new cjs.Rectangle(0,0,29.4,14.5), null);


(lib.Group_10 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("Ah9BtQgsgfgMgxQgKglARg7QAShCAmACIgTAmQgLAWgCASQgEAbAMAZQAMAYAXAJQAXAIAggMQATgHAjgRQAugQAyAHQAyAHAmAeQgwgIhBAvIgyAkQgcASgaAFQgMACgLAAQgkAAgjgXg");
	this.shape.setTransform(18.4764,13.2348);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(-0.1,0,37.2,26.5), null);


(lib.Group_8_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AiMA6QgggUgRggQgSgiAGghIgDAFQgEgKAKgIQAKgIALABQAOACAYATQAmAdAvAOQAuAOAvgEQAvgDAsgWQAsgVAggiQACAqgVAnQgVAngkAWQgyAghTABIgKAAQhPAAgwgeg");
	this.shape.setTransform(20.6347,8.8059);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8_1, new cjs.Rectangle(0,0,41.3,17.6), null);


(lib.Group_8_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("ACvLLQhhAAhugDQjkgLjpgiQlAgvkuhZIgBAAIgMgEIgbgWQhAiggUkEQgEg1gDhKIgEiqQgFijAMhdQALhbAbhKQANgkAWguQBAA8BfAVQBYAVBfgRQAegFAXgGQB4DvC3DGQCrC4D1CnQD/CvEfBwIAGACIhPAUQgKADgYAEIgjAGIggAEIgdACIgXACIhdAEQggABgpgEQg3gFgygNQgZgGgggLQgbgJgbgMIgNgFIgCgBIgEABIgBAAIgIACQgdALgFAVQgEARANAUIAFAEQAlARAeALQAgAMAnAKQBAAQBCAFIAtACIBegCIAmgHQAngJAcgIIAOgEQAugOAmgSQAVgJABgCIAegRIAAgBIAMgIIABAAIACgCIAJgGIABgBIAJgIQFlCEFxAUIjLAmIAAAAItpBMgAt+B5Qg4APgdAiQggAoATAwQAGAOAKAOQAJAOAOAKQAZAUAjAGIABAAIACABQATACANgBQAlgBAggRQAigSASgeQASghgGglQgGgngdgWQgagSglgFQgMgCgMAAQgXAAgYAFgAssjXQhbAIhQAnQhTApgTAzQgVA6BLAyIAKAHQAjAVBAAOIAvAIQAmAHByAXQBmALAqgtIARgWQAXgogNg1QgJgqgbgpQgagngigYIgMgIQgrgahFAAQgTAAgVACg");
	this.shape.setTransform(125.2617,71.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8_0, new cjs.Rectangle(0,0,250.5,143.1), null);


(lib.Group_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AhmB4QhAgMglgYQgqgbgZg1QhFiPCQAOQAkAEBbAVQBNASAagCQAQgBA+gIQA/gIAmACQB2AIg6BlQgnBGiEAfQhGAQg8AAQgnAAgkgHg");
	this.shape.setTransform(29.4103,12.6821);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0.1,0,58.699999999999996,25.4), null);


(lib.Group_7_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AACCaQgOgBgLgKQgMgLABgOQABgMAQgQQBBg/AZglQAthEhAgnQgagQgrgFQgzgIg2AFIAogIQAkgFAcABQBEADA6A5QA+A+gXBCQgSA1hLAwQgfASgVAAIgCAAgAibiJIAjgEIgWAFg");
	this.shape.setTransform(15.5612,15.4364);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7_0, new cjs.Rectangle(0,0,31.1,30.9), null);


(lib.Group_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("Ag9AaQgQjyBSjeIgWgDIAjglQgiHhBQHcQhtjRgQj0g");
	this.shape.setTransform(6.4207,47.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,12.9,95.8), null);


(lib.Group_6_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AAKBQIhTAHQAMgSAUgLQASgLAVgCIh4gDIB2gsIhjgPIB3gNIhjgqIB0AFIiSgqQARAEAogFQAsgFASAFQAmAJAyAgIAcATQghALgLAwIgIAoQgGAWgKANQgOAPgYAHQgQAFgdADg");
	this.shape.setTransform(12.25,11.381);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6_0, new cjs.Rectangle(0,0,24.5,22.8), null);


(lib.Group_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AgnCuQgGirALhdQARiGA6h1IABABQgWAugNAkQgaBKgLBbQgMBdAFCiIAECqIABAKIgHiog");
	this.shape.setTransform(4.2721,34.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0.1,0,8.4,68.3), null);


(lib.Group_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AA8AyQgSAXgYACIAAgPQAAgLACgFIgXATQgOAKgMACQAFgWAKgYIgXAPQgNAJgKACQgBgLAGgPIANgYIgtAYQgbAPgSAHQACgVAcgYQAIgGAlgaQgNAAgZAIQgaAHgOAAQBhhKAlAIIAAgJIAHAMIgHgDQABANAMAKIAfAUIAtAkQAeAaASAAQgKANgcARQgmAYgGAFQgBgYAHgNg");
	this.shape.setTransform(13.575,8.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,27.2,17.4), null);


(lib.Group_4_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("Ag1BcQgZgGgRgNQgOgCgJgZIgCgGQgEgPgDgWQgGgxAFgxQAcA5ATAQQAFgSgKgSQAGAJAJAVQAJASAMAGQAGgLAEgXQAEgYAFgKQAGAoAJAUIANgbQAHgQAHgJIgDAhQAAATAHAMQAKgNAIgaQAKgeAFgKQgGAuACA4QAPgKARgZIAYgsQgKAWgDAXQAPgCASgoQAHgQAEgOQgNA4gJAbQgTA9g3AZQgYAKgbAAQgSAAgTgEg");
	this.shape.setTransform(13.0786,11.178);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_1, new cjs.Rectangle(0,1.6,26.2,19.2), null);


(lib.Group_4_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("ABfCkQhwgXgngHIgugIQhAgOgjgVIgLgHQhKgzAVg5QATgzBTgpQBPgnBagIQBigJA3AhIAMAIQAhAYAbAnQAbApAJApQAMA2gXAoIgQAWQgiAkhJAAQgSAAgUgCg");
	this.shape.setTransform(27.0892,16.5876);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_0, new cjs.Rectangle(0,0,54.2,33.2), null);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AgwkKIgCAMIgBghQBGCDAXCVQAXCUgcCTQgBkdhUkNg");
	this.shape.setTransform(5.1936,28.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,10.4,57.5), null);


(lib.Group_3_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AhbBjQgZgVgIghQgJgjAOgcQATgkBdgtQBRgnAZARQAAAHgFAIQgGAKgMAHIAFAAQgRAHgJACQATAJAQgCIgjAIQgWAFgNAFQAOAEApAIQAiAGATAIQgpAMgvgBQAMAEAQAAIAYAAQhDADg/ARIAiAMQAWAIAMAGQgJAFgRgBIgbgDQALAFAWAHQATAIAKAKIgrACQgbACgPAFQATAPAoAIIBBAOQg2ARggABIgFAAQguAAgggcg");
	this.shape.setTransform(12.8144,12.5711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(0,-0.1,25.7,25.400000000000002), null);


(lib.Group_3_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E7DFD9").s().p("AAPDgIARhtIAHg3QAEgngGgUQgGgTgUgOQgQgMgXgFQgfgHgUARQgHAGgHANIgNAUQgQAWgfAEQgdAEgYgPQgYgPgLgaQgKgaAFgYQAFgZATgKQAVgLAgAOQAGADAQAKQANAIAIACQAcAHAEgcQgCgjABgMQADhmAngVQAogYBUBAQBjBLAoBAQA2BXgWBoQgSBZg1AqQgbAWg1AOQg9AOgaAIg");
	this.shape.setTransform(24.8628,28.3576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_0, new cjs.Rectangle(0,0,49.8,56.7), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AhlDrQhEgSgfg3QAiAbAxgEQAvgEAmgcQBkhKA+hlQBBhqAGhxQgFCJgRBUQgcCKhABEQgaAcgmAOQgjAOgmAAQgZAAgagHg");
	this.shape.setTransform(20.125,25.0861);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0.9,40.3,48.4), null);


(lib.Group_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AhIB7QgqgcgbgpQgcgrACgnQAEgtAsgcIgwATQAegSAxgiQAqgXAwAIQA9ALAyA9QAuA5AJBAQgFgHgIgSIgNgYQgMgTgXgRQgbgSgOgLQgEAKABAPIACAaIgMgMQgIgHgDgEQACAUAMAQQgJgEgQgNQgPgMgKgDQABAMAGAOIANAXQgYgIgagWQABAPAIAMQAHAOAKAJQgNgEgUgKIghgRQAKAaAOAVQgNgBgQgHQgIgEgSgLQgHAuBvBSQgmAAgrgdg");
	this.shape.setTransform(16.7649,15.2121);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(0,0,33.6,30.4), null);


(lib.Group_2_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AhIBIQhCgFhAgQQgogKgfgLQgegLgmgRIgEgEQgNgUAEgRQAFgVAcgKIAJgDIAAAAIAFgBIACABIANAGQAaALAcAKQAfAKAZAHQA0AMA2AGQApADAgAAIA2gCIBagGIAggEIAjgHQAZgDAKgEIBOgUIAiANIABABIgKAIIgBABIgJAGIgCACIAAAAIgNAIIAAABIgeAQQAAACgVAJQgmASguANIgPAFQgcAIgmAJIgmAGIhdADIgugDg");
	this.shape.setTransform(35.5529,7.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0,71.2,14.9), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AgZBdQgwgFghgJQgrgMgegWQgjgZgQglQgSgpAMglQAgAwAxAiQA/AqBIAJQBHAJBHgbQBHgZAxg2QACAqgdAlQgaAkgqATQgvAVhGAAQgaAAgdgDg");
	this.shape.setTransform(25.2856,12.1307);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(1.1,2.6,48.4,19.099999999999998), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AheAGQAPgrAfgSQAHgEAHgDQAmgRAkgDQAzgEAMAgIg6ApQgjAYgWgWQgBAFgGAIIgIAOQgEgGgDgLQgGAFgHAQQgIAQgFAFQAAgEgBgDIgTAmIAEghQgIAYgMAUQgOgiAQgrg");
	this.shape.setTransform(10.3108,8.3031);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,20.7,16.7), null);


(lib.Group_1_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CECBC7").s().p("AA5CEIhug7QhFgngUgpQgNgdAYgfQAPgVAjgYQANgJANgFQAVgHAUADQAKACARAIQAwAUATADQAkAHAggTQgHAEgGAtIgGA2QgFAhgEAQQgGAZgMAWIgDAqg");
	this.shape.setTransform(14.7435,13.2167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0.1,29.5,26.299999999999997), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AghEiQgegJgVgUIAGAIIgJgKIADACQhXhzgYiTQgZiaAyiNIAEAZIgBgFIABA7IAGBpQAGA7AOAqIAVBGQANArANAbQAVAsAuAdIATALQALAGAIgFQAFgDAEgOQAHgXAEglIAHg8IAZBrIAOhCIAiBLIBai7QAKBjghBJQgTApggAeQgiAggpALQgUAFgUAAQgWAAgYgHg");
	this.shape.setTransform(20.4185,29.7324);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,40.9,59.5), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("AgcBtIgCAAIgBAAQgjgHgZgTQgOgLgJgNQgKgOgGgOQgTgvAggoQAdgjA4gOQAjgIAjAEQAlAFAaATQAdAVAGAnQAGAlgSAgQgSAfgiASQggARglABIgEAAQgLAAgQgCg");
	this.shape.setTransform(13.7578,11.1263);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,27.6,22.3), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333555").s().p("Ag3HSQgngHgvgRIgdgNIAQADQApADAhgWQAfgUASglQARgiAEgpQAEgigGgrQgDgagLgyIBGD3IAKgtQAHgbAGgRIAGgVQADgMgBgJQgDgSgFgLIAHAHQAHAJADAHQAFALAAAXIAEAPIACAJIACgIIAFgOQAKgjADgXQADgXgDgeIgEgPIgDgKIACADIAFAIQAHAUAFAbQAHAvgKAUQAEgCADgRQAKgkABgcQABghgGgQIgIgQQgDgKADgIQAHABAFAJIAHANIAKARQAFAJgBAJQAFgbgEgkIgIg/Igrn0QBXEgAVEoQAEA3gBAkQgBAxgJAoQgLAugYAlQgZApgkAXQgyAghCAAQgaAAgegGgAjfGWIADgHQAHAJAKAHIgUgJgAA+DQIgDgIQgCgEgDgDQAHAEAGASIgFgHg");
	this.shape.setTransform(22.3531,47.1798);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,44.7,94.4), null);


(lib.Beams = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Beam("synched",0);
	this.instance.setTransform(791.25,637.6,0.934,1.145,-107.7009,0,0,74.5,706);

	this.instance_1 = new lib.Beam("synched",0);
	this.instance_1.setTransform(791.1,638.15,0.3008,0.8574,76.493,0,0,74.2,705.9);

	this.instance_2 = new lib.Beam("synched",0);
	this.instance_2.setTransform(791.2,638,0.3008,0.7216,-157.738,0,0,74.4,706.1);

	this.instance_3 = new lib.Beam("synched",0);
	this.instance_3.setTransform(791.1,638,0.5817,0.9172,163.3459,0,0,74.7,706.1);

	this.instance_4 = new lib.Beam("synched",0);
	this.instance_4.setTransform(791.2,638.05,0.5817,0.9172,-14.4621,0,0,74.8,706.1);

	this.instance_5 = new lib.Beam("synched",0);
	this.instance_5.setTransform(791.1,638.05,0.3669,1.1303,-46.1935,0,0,74.5,706.2);

	this.instance_6 = new lib.Beam("synched",0);
	this.instance_6.setTransform(791.1,638.05,0.3669,1.1303,-76.1932,0,0,74.5,706.2);

	this.instance_7 = new lib.Beam("synched",0);
	this.instance_7.setTransform(791.3,637.7,0.934,1.1451,102.4872,0,0,74.5,706);

	this.instance_8 = new lib.Beam("synched",0);
	this.instance_8.setTransform(791.35,637.75,0.934,1.1451,-53.5497,0,0,74.5,706);

	this.instance_9 = new lib.Beam("synched",0);
	this.instance_9.setTransform(791.3,637.7,1.0831,0.9281,-143.5499,0,0,74.5,706.1);

	this.instance_10 = new lib.Beam("synched",0);
	this.instance_10.setTransform(791.25,637.85,0.4456,0.9281,-117.5526,0,0,74.4,706.1);

	this.instance_11 = new lib.Beam("synched",0);
	this.instance_11.setTransform(791.3,637.95,0.4456,1.0843,42.752,0,0,74.5,706.1);

	this.instance_12 = new lib.Beam("synched",0);
	this.instance_12.setTransform(791.15,638.05,0.5481,0.8577,123.7506,0,0,74.4,706.4);

	this.instance_13 = new lib.Beam("synched",0);
	this.instance_13.setTransform(790.6,637.85,0.9108,0.9108,15.9515,0,0,74.5,707.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1595.7,1270.9);


(lib.LeButton7 = function(mode,startPosition,loop,reversed) {
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
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


(lib.LeButton6 = function(mode,startPosition,loop,reversed) {
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
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


(lib.LeButton5 = function(mode,startPosition,loop,reversed) {
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
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


(lib.LeButton4 = function(mode,startPosition,loop,reversed) {
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
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


(lib.LeButton3 = function(mode,startPosition,loop,reversed) {
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
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


(lib.LeButton2 = function(mode,startPosition,loop,reversed) {
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
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


(lib.LeButton1 = function(mode,startPosition,loop,reversed) {
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
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


(lib.Trunk = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group();
	this.instance.setTransform(188.05,155.9,0.7929,0.7929,0,0,0,24.4,49.2);
	this.instance.alpha = 0.2813;
	this.instance.compositeOperation = "overlay";

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(36.55,173.05,0.7929,0.7929,0,0,0,22.3,31.7);
	this.instance_1.alpha = 0.3281;
	this.instance_1.compositeOperation = "overlay";

	this.instance_2 = new lib.Group_2();
	this.instance_2.setTransform(182.95,197.15,0.7929,0.7929,0,0,0,26.8,14.1);
	this.instance_2.alpha = 0.2813;
	this.instance_2.compositeOperation = "overlay";

	this.instance_3 = new lib.Group_3();
	this.instance_3.setTransform(52.3,186.6,0.7929,0.7929,0,0,0,22.2,27.1);
	this.instance_3.alpha = 0.2813;
	this.instance_3.compositeOperation = "overlay";

	this.instance_4 = new lib.Group_4();
	this.instance_4.setTransform(160.25,132,0.7929,0.7929,0,0,0,7.5,30.9);
	this.instance_4.alpha = 0.2813;
	this.instance_4.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5E5DC").s().p("AADBMIgSgTIgZgjQgQgYgLggQgBAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQA1gjA4gJIAVgCIgCASQgDAaAEAXIAGAWIgBACQglAbgVAvg");
	this.shape.setTransform(166.6391,162.5851,0.7922,0.7921);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5E5DC").s().p("Ag+BFQgRg/AKg/IADgMIAaAMQAdALAfABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQANAoAkAhIACABIgDACIgLAGQgkATgiAGIgiAEIgQACIgBAAIgBgBg");
	this.shape_1.setTransform(173.9945,178.4122,0.7922,0.7921);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E5DC").s().p("AgKAhIgZgMQAAAAAAAAQAAAAAAAAQgBgBABAAQAAgBAAAAQANggAYgYIAGgFIABgBIABABQAGAOASAWQADAEgBADIAAArQgYgBgWgKg");
	this.shape_2.setTransform(172.3153,168.902,0.7922,0.7921);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5E5DC").s().p("AgsgWIAsgPQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAYAKAUAEQgOAhgfAcQgfgagNgig");
	this.shape_3.setTransform(181.7757,176.4666,0.7922,0.7921);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5E5DC").s().p("AgdA1QgIgDgXgMIgNgGIALgMQAbgaAMgjQAAgBAAgBQABAAAAAAQABgBAAAAQABAAABAAQArgBApgXIADgCIAFAdQAGA2gQA4QgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQg0gDgmgPg");
	this.shape_4.setTransform(189.6124,178.3874,0.7922,0.7921);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5E5DC").s().p("AgLBQIgHgNQgPgagVgTIgMgJQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQALghgDgcIgEgdIAAgCIALACIAbAEQAwALAsAeQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQgSAxglApIgQASIgHAGg");
	this.shape_5.setTransform(196.9857,162.5058,0.7922,0.7921);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5E5DC").s().p("AABBIQgmgcgygEIAIgSQAcg3AzgmQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQA8AwAaA/IABAAIgCAAIgKACQgoAHggAXIgCAAIgBAAg");
	this.shape_6.setTransform(181.7955,150.5293,0.7922,0.7921);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5E5DC").s().p("AgkAgIgCgUQgDgXAGgYQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAIABAAQApAEAgAUIgJAKIgTAYIgCACQgWAFgWAKg");
	this.shape_7.setTransform(176.9517,158.981,0.7922,0.7921);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5E5DC").s().p("AAfAlIgKgEIgbgJQgEgCgDgEIgYghQARgLASgFIAigHIABAAIAAABQAKApgKAiIAAABg");
	this.shape_8.setTransform(186.8955,159.0998,0.7922,0.7921);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5E5DC").s().p("AgjgCIABgDIAcgkQAZAUARAnQgkAXgkABg");
	this.shape_9.setTransform(191.2826,169.0803,0.7922,0.7921);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5E5DC").s().p("AgKAeQgDgIgEgDQgDgCgIgBQgMAAgIgFQAFgJAIgFQAMgHgFgOQgDgLACgLQAFAAAHAFIAGADIACABIADACQAFACADgBQAGAAADgEQAFgFALgCIAEgBQACAMgEAKQgFANALAIQAJAEAGALQgLAEgKAAQgJABgEACQgDADgDAJQgDAJgHAHQgHgIgDgJg");
	this.shape_10.setTransform(181.8549,166.8822,0.7922,0.7921);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5E5DC").s().p("AADBMIgSgTIgZgjQgQgWgMgiQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQA0giA5gJIAVgDIgCASQgDAYAEAZIADAOIACAIQABAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQglAbgVAug");
	this.shape_11.setTransform(28.9652,109.3956,0.7922,0.7921);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5E5DC").s().p("Ag+BFQgRhBAKg9IADgMIAaAMQAcALAgABQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAOAqAjAfIACACIgOAIQghASglAHIgiAEIgQABIgCgBg");
	this.shape_12.setTransform(36.3038,125.2376,0.7922,0.7921);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5E5DC").s().p("AgKAhIgYgLQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAgBABAAQAPgiAWgVIAHgHIABABQAIASAQASQADACAAAGIAAAeIAAAMQgYAAgXgLg");
	this.shape_13.setTransform(34.6525,115.7126,0.7922,0.7921);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F5E5DC").s().p("AgsgWIAsgPIACAAQAUAJAXAFQgNAiggAbQgggcgMggg");
	this.shape_14.setTransform(44.1049,123.2969,0.7922,0.7921);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F5E5DC").s().p("AgdA0IgfgOIgNgGIgBgBIADgCIAJgJQAbgbAMgjQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQApAAArgXIACgCIAFAdQAHA3gQA3QAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQgzgDgngQg");
	this.shape_15.setTransform(51.9316,125.2376,0.7922,0.7921);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F5E5DC").s().p("AgSBDQgOgZgXgUIgIgHIgDgCQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAKgkgCgZIgEgeIAAgBIAKABIAbAFQAxAKAsAeQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQgTAxgkApIgXAYg");
	this.shape_16.setTransform(59.3224,109.356,0.7922,0.7921);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F5E5DC").s().p("AABBIQgmgbgxgFIAHgSQAcg1AygoIADAAQA7AxAaA+IAAAAIgBABIgKABQgpAIgfAWIgCAAIgBAAg");
	this.shape_17.setTransform(44.1247,97.359,0.7922,0.7921);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F5E5DC").s().p("AgjAfQgDgLAAgIQgCgZAFgWIABgCIABAAQAqADAfAVIgdAkQgaAGgTAJg");
	this.shape_18.setTransform(39.2783,105.8312,0.7922,0.7921);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F5E5DC").s().p("AAfAmIgKgFQgOgFgMgEQgGgBgCgEIgSgZIgGgIQARgLATgGIAhgHIABAAIAAABQAKApgKAiIAAABg");
	this.shape_19.setTransform(49.2247,105.9104,0.7922,0.7921);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F5E5DC").s().p("AgigCIAAgDIAcgkQAaAWARAlQglAWgkACg");
	this.shape_20.setTransform(53.6117,115.9106,0.7922,0.7921);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F5E5DC").s().p("AgLAeQgCgIgDgDQgEgCgJAAQgJAAgLgGQAGgJAJgFQAGgEACgFQABgEgDgIQgDgLACgLQAEAAAJAFIAIAEIACACQAJAFAIgIQAEgDAMgEIAEgBQACALgEALQgEAOALAGQAHAEAGALQgJAFgKAAQgKABgEACQgDADgDAJQgDAIgHAIQgGgHgFgKg");
	this.shape_21.setTransform(44.2039,113.7107,0.7922,0.7921);

	this.instance_5 = new lib.Group_7();
	this.instance_5.setTransform(26.35,159.75,0.7929,0.7929,0,0,0,8.2,49.8);
	this.instance_5.alpha = 0.2813;
	this.instance_5.compositeOperation = "overlay";

	this.instance_6 = new lib.Group_8();
	this.instance_6.setTransform(111.4,197.8,0.7929,0.7929,0,0,0,31.3,14.8);
	this.instance_6.alpha = 0.2813;
	this.instance_6.compositeOperation = "overlay";

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2D1B17").s().p("ABICSQgwgPgYgMQgogTgVgcQgOgSgKgcQgFgPgJgjIgfh+IAZAWQAUBBAvA1QAuAzA/AbIAaALQAOAHAIAIQAKALACAOQABAPgJAJQgIAIgPAAQgLAAgRgFg");
	this.shape_22.setTransform(24.478,200.3391,0.7924,0.7923);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2D1B17").s().p("AibCrQBwgmBMhgQBOhhAJh0QASAGAKAUQAKASgCAVQgBASgIAUQgGANgNAXQghA3geAlQgmAugpAdQhAAthIACg");
	this.shape_23.setTransform(162.4335,63.6717,0.7922,0.7921);

	this.instance_7 = new lib.Group_11();
	this.instance_7.setTransform(110.3,104.7,0.7929,0.7929,0,0,0,54.6,22.4);
	this.instance_7.alpha = 0.5703;
	this.instance_7.compositeOperation = "overlay";

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F5E5DC").s().p("AhdEYQg3gDhWgeQhjgigogHQgRgDgHgDQgIgEgFgFQgDgDgHgSQgDgIgshHQgdguAHgiIADgLQABgFgBgFQgBgIgIgJIgPgPQgLgNgCgRQgCgSAIgOQAIgPAPgIQAQgJAQACQgVgKgLgWQgLgXAHgWQAMggBXgPQAkgGBVgGQA9gDBVAnQBkAvAnAGQA4AJBJgaQAqgPBSgnQA0gXAhgIQA8gOAaATQAOAKADAVQAEAZAFAHQANAWALAJIAgAXQANAKgBAWQgBAMgEAaQgCAXAEAyQADAqgEAZQgGAdgPAXQgUAggpAjQgQANg5AqQhSA8iMAHIgQAAQg2AAingKg");
	this.shape_24.setTransform(108.5658,96.559,0.7924,0.7923);

	this.instance_8 = new lib.Group_13();
	this.instance_8.setTransform(114.05,122.75,0.7929,0.7929,0,0,0,50.1,27.6);
	this.instance_8.alpha = 0.5703;
	this.instance_8.compositeOperation = "overlay";

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2D1B17").s().p("AvvLDQgXgEgrgJQCDgfAegMQBXghAphDQArhHAah7QAOg9ATiQIAgj+QARiQAHhvQABgPgEiCQgDhcAPgvQgDAJEQAUQENATAqgEQBZgIA0gMQA5gOAhgRQAsgYAWgnQAnBaAUA9QAZBQAHBNIAzHqQAIBLAQCfQARCMAhBZICnAuQBkAbBHgJQBBgHBHhDQBShNAqgSQgkAQgsBNQgxBUgiAUQg7AihfACQhUAChKgWQhRgYhHhBQgegdhXhnQgfgngVgVQgfgfgegTQg8glhVAPQhgAZgxAIQhkAQhkgTIhRgSQgygMgfgEQhigNg9AqQglAZgbAyQgMAWgeBIQgjBWg4A4QhEBEhQACIgKABQgaAAgggFg");
	this.shape_25.setTransform(124.0396,157.1155,0.7924,0.7923);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2D1B17").s().p("ACUEiQgogGgmgOQgqgRgcgXQgrgkgwhJQgyhVgaglQgshAgNgRQghgsgjgaQAPgXA4g6QAwgxgBgIQAUDCCDCdQCCCeC6A4QgQgFg0AMQgsAJgWAAIgLgBg");
	this.shape_26.setTransform(67.4454,54.5719,0.7924,0.7923);

	this.instance_9 = new lib.Group_16();
	this.instance_9.setTransform(110,17.45,0.7929,0.7929,0,0,0,33.5,9.7);
	this.instance_9.alpha = 0.9297;
	this.instance_9.compositeOperation = "overlay";

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F5E5DC").s().p("AhcCcQhEgUg/gmQhzhFhOh6QBMgfBYgUQCCgfB8AAQDIAACpBQIArAXIADACQgtBQhCA6QhJBAhVAaQg3ASg7AAQg9AAhBgUg");
	this.shape_27.setTransform(116.3042,23.6496,0.7924,0.7923);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EE7768").s().p("AjAWFQoZg8kZlIQjQj0galeQgVkgBllcQBMkFCFkJQBEiFA6hbQBaiMBphrQCKiNCVhFIAdgMQBOB6BzBFQA+AnBEAUQB+AlBzgjQBVgaBIhAQBDg7AthRQDCBuCADxQBOCTB4FnQBLDjAnCQQBFEBAVDUQAKBfAABbQAAGyjmDoQh3B4i1A8QhrAkjiAjQixAbirAAQh0AAhygMg");
	this.shape_28.setTransform(108.4893,129.0121,0.7922,0.7921);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2D1B17").s().p("AjOYrQkkggjihtQjihsici2QjqkSgemJQgWk3BrlxQBPkQCLkVQBHiLA9hfQBzizCJiAQCIiACThEIAagMQCjhDC5gUQEughD3B2QARAIAhASQB0BBBaBgQBaBgBKCJQA5BpA5CVQAiBaA/C/QBNDoApCWQBHEIAWDdQAfE7hADwQhADvifCgQiLCLjMBGQhRAbhmAUQg7AMh3ATQi5Aci3AAQh7AAh4gNgAia2bQhYAVhMAfIgdAMQiVBFiKCNQhpBrhaCMQg6BbhECFQiFEJhMEFQhlFcAVEgQAaFeDQD0QEZFIIZA8QEYAfEqguQDigjBrgkQC1g8B3h4QDmjoAAmyQAAhbgKhfQgVjUhFkBQgniQhLjjQh4lnhOiTQiAjxjChuIgDgCIgsgWQiohQjIAAQh8AAiCAeg");
	this.shape_29.setTransform(108.4931,125.7517,0.7922,0.7921);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_9},{t:this.shape_26},{t:this.shape_25},{t:this.instance_8},{t:this.shape_24},{t:this.instance_7},{t:this.shape_23},{t:this.shape_22},{t:this.instance_6},{t:this.instance_5},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.3,217.8,252.3);


(lib.Head = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_33();
	this.instance.setTransform(91.6,139.9,0.7932,0.7932,0,0,0,11.7,10);
	this.instance.alpha = 0.1914;
	this.instance.compositeOperation = "overlay";

	this.instance_1 = new lib.Group_1_1();
	this.instance_1.setTransform(68.15,197.7,0.7932,0.7932,0,0,0,11.7,9.4);
	this.instance_1.alpha = 0.1914;
	this.instance_1.compositeOperation = "overlay";

	this.instance_2 = new lib.Group_2_1();
	this.instance_2.setTransform(89,186.85,0.7932,0.7932,0,0,0,17.9,16.4);
	this.instance_2.alpha = 0.2813;
	this.instance_2.compositeOperation = "overlay";

	this.instance_3 = new lib.Group_3_1();
	this.instance_3.setTransform(87,161.35,0.7932,0.7932,0,0,0,14.1,13.6);
	this.instance_3.alpha = 0.2813;
	this.instance_3.compositeOperation = "overlay";

	this.instance_4 = new lib.Group_4_1();
	this.instance_4.setTransform(72.05,140.05,0.7932,0.7932,0,0,0,14.6,12.3);
	this.instance_4.alpha = 0.2813;
	this.instance_4.compositeOperation = "overlay";

	this.instance_5 = new lib.Group_5();
	this.instance_5.setTransform(52.55,180,0.7932,0.7932,0,0,0,15.2,9.9);
	this.instance_5.alpha = 0.2813;
	this.instance_5.compositeOperation = "overlay";

	this.instance_6 = new lib.Group_6_0();
	this.instance_6.setTransform(45.95,156.75,0.7932,0.7932,0,0,0,13.8,12.8);
	this.instance_6.alpha = 0.2813;
	this.instance_6.compositeOperation = "overlay";

	this.instance_7 = new lib.Group_7_0();
	this.instance_7.setTransform(97.7,159.95,0.7932,0.7932,0,0,0,16.9,16.8);
	this.instance_7.alpha = 0.2813;
	this.instance_7.compositeOperation = "overlay";

	this.instance_8 = new lib.Group_8_1();
	this.instance_8.setTransform(89.3,195.3,0.7932,0.7932,0,0,0,21.8,10.2);
	this.instance_8.alpha = 0.2813;
	this.instance_8.compositeOperation = "overlay";

	this.instance_9 = new lib.Group_9();
	this.instance_9.setTransform(50.05,188,0.7932,0.7932,0,0,0,19.8,14.5);
	this.instance_9.alpha = 0.2813;
	this.instance_9.compositeOperation = "overlay";

	this.instance_10 = new lib.Group_10_0();
	this.instance_10.setTransform(67.95,130.25,0.7932,0.7932,0,0,0,16.1,8.4);
	this.instance_10.alpha = 0.2813;
	this.instance_10.compositeOperation = "overlay";

	this.instance_11 = new lib.Group_11_1();
	this.instance_11.setTransform(35.25,154.8,0.7932,0.7932,0,0,0,13.3,14.7);
	this.instance_11.alpha = 0.2813;
	this.instance_11.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#180F0D").s().p("AgfAoQgRgHgIgOQgUghAXgSQAVgPAkAEQAmADAQASQATAVgbAbIgCACQgRAQgdABIgDAAQgQAAgOgFg");
	this.shape.setTransform(66.5426,164.2972,0.7924,0.7923);

	this.instance_12 = new lib.Group_1_0();
	this.instance_12.setTransform(62.15,178.5,0.7929,0.7929,0,0,0,17.1,15.2);
	this.instance_12.alpha = 0.6289;
	this.instance_12.compositeOperation = "overlay";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D655C").s().p("AAAAYIgkgRQAKgVAPgNQAUgTASANQAFAEADAIQADALgDAUIgEAeQAAgCgfgOg");
	this.shape_1.setTransform(58.3509,152.8843,0.7924,0.7923);

	this.instance_13 = new lib.Group_3_0();
	this.instance_13.setTransform(71.5,164.7,0.7929,0.7929,0,0,0,26.8,30.4);
	this.instance_13.alpha = 0.5508;
	this.instance_13.compositeOperation = "overlay";

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE7768").s().p("ABcHgQgsgpgLhQQgagEggAWQgPAKgjAfQgcAagJAGQgUARgUAKQhDAihNgJQhTgKgug2QgagegIgoQgKgnAKgmQANg6AagqQAggzAvgUQguAEgrgUQgYgMgzglQgsgggRg2QgSg1ANg1QANgyAzgiQAuggA4gGQA9gIBFAIQA0AFAVAEQAxAKAPARQhHhVAbhoQAchsBzgLQAigEAzAQQApAMAoAUQAvAWAXAaQAbAfAFAtQAFAxgQAvQgPAwghAiQAggfBJgLQA6gIA7AGQA4AFAhAQQAsAWARAsQAWA5AEAqQAHA2gXAsQgJAVgRASQguA0hDAJIAAAAIAAAAQAGgBAdAeQAXAYAKANQAXAbANAwQALAjgDAjQgCAmgSAeQgYArg2AZQgtAVg9AHQggADgdAAQh0AAg4g1g");
	this.shape_2.setTransform(65.2688,160.838,0.7924,0.7923);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D655C").s().p("AiNBxQgMgYARgdQAKgZAYgmQA7hjAegRQAlgVAnAHQAlAGAXAcQAYAcAAAjQgBAnggAiQgUAWgoAQQguAQgVAJIgnAVQgZANgRACIgIAAQgbAAgMgXg");
	this.shape_3.setTransform(90.574,137.8351,0.7926,0.7925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D655C").s().p("AhJB4QgVgFgMgpQgKggAAgcQABg/A4gnQAzgkBAAEQAQAGANAIQAlAYgGAhQgDASgOAJIgcAPQgtAZgjAsQgQAZgKANQgRAVgPAAIgGgBg");
	this.shape_4.setTransform(64.3395,196.3867,0.7926,0.7925);

	this.instance_14 = new lib.Group_0();
	this.instance_14.setTransform(92.9,281.35,0.7932,0.7932,0,0,0,15.2,12.4);
	this.instance_14.alpha = 0.5703;
	this.instance_14.compositeOperation = "overlay";

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DE758B").s().p("AgcBtIgCAAIgBAAQgjgHgZgTQgOgLgJgNQgKgOgGgOQgTgvAggoQAdgjA4gOQAjgIAjAEQAlAFAaATQAdAVAGAnQAGAlgSAgQgSAfgiASQggARglABIgEAAQgLAAgQgCg");
	this.shape_5.setTransform(91.2416,280.0896,0.7926,0.7925);

	this.instance_15 = new lib.Group_2_0();
	this.instance_15.setTransform(174.75,302.3,0.7932,0.7932,0,0,0,36.8,8.8);
	this.instance_15.alpha = 0.5703;
	this.instance_15.compositeOperation = "overlay";

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D1B17").s().p("AhIBIQhCgFhAgQQgogKgfgMQgegKgmgRIgEgDQgNgVAEgRQAFgVAcgKIAJgDIAAAAIAFAAIACAAIANAFQAaAMAcAKQAfAKAZAHQA0AMA2AGQApAEAggBICQgIIAggEIAjgHQAZgEAKgDIBOgUIAiANIABAAIgKAIIgBABIgJAHIgCACIAAAAIgNAIIAAAAIgeARQAAABgVAKQgmARguAPIgPAEQgcAIgmAIIgmAHIhdACIgugCg");
	this.shape_6.setTransform(173.0723,300.9522,0.7926,0.7925);

	this.instance_16 = new lib.Group_4_0();
	this.instance_16.setTransform(96.55,259.25,0.7932,0.7932,0,0,0,28.8,17.9);
	this.instance_16.alpha = 0.5703;
	this.instance_16.compositeOperation = "overlay";

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#332521").s().p("ABfCkQhwgXgngHIgugIQhAgOgjgVIgLgHQhKgzAVg5QATgzBTgpQBPgnBagIQBigJA3AhIAMAIQAhAYAbAnQAbApAJApQAMA2gXAoIgQAWQgiAkhJAAQgSAAgUgCg");
	this.shape_7.setTransform(94.6349,257.947,0.7926,0.7925);

	this.instance_17 = new lib.Group_6();
	this.instance_17.setTransform(65.1,233.5,0.7932,0.7932,0,0,0,5.9,35.4);
	this.instance_17.alpha = 0.5703;
	this.instance_17.compositeOperation = "overlay";

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D1B17").s().p("AgnCuQgGiqALhfQARiGA6h0IABACQgWAtgNAkQgaBLgLBaQgMBcAFCiIAECrIABAJIgHing");
	this.shape_8.setTransform(63.4331,232.3577,0.7926,0.7925);

	this.instance_18 = new lib.Group_8_0();
	this.instance_18.setTransform(161.25,263.4,0.7932,0.7932,0,0,0,126.8,73);
	this.instance_18.alpha = 0.5703;
	this.instance_18.compositeOperation = "overlay";

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5E5DC").s().p("ACvLMQhhgBhugEQjkgKjpgiQlAgvkuhZIgBAAIgMgDIgbgYQhAifgUkDQgEg2gDhKIgEirQgFijAMhcQALhaAbhLQANgkAWgtQBAA7BfAWQBYATBfgQQAegEAXgHQB4DvC3DFQCrC5D1CmQD/CwEfBvIAGACIhPAVQgKADgYAEIgjAGIggAFIiRAIQggAAgpgEQg3gGgygMQgZgGgggLQgbgJgbgMIgNgGIgCAAIgEAAIgBAAIgIAEQgdAJgFAVQgEARANAVIAFAFQAlARAeAKQAgALAnAKQBAAQBCAGIAtACIBegCIAmgHQAngIAcgJIAOgEQAugOAmgSQAVgJABgBIAegSIAAAAIAMgIIABAAIACgCIAJgHIABgBIAJgIQFlCDFxAWIjLAlIAAAAItpBNgAt+B6Qg4ANgdAjQggAoATAwQAGAOAKAPQAJAMAOALQAZATAjAHIABAAIACAAQATADANAAQAlgCAggRQAigSASgfQASgfgGgnQgGgmgdgVQgagUglgFQgMgBgMAAQgXAAgYAGgAssjXQhbAIhQAnQhTApgTAzQgVA6BLAyIAKAGQAjAWBAAOIAvAIQAmAHByAWQBmAMAqgtIARgWQAXgogNg1QgJgqgbgpQgagngigYIgMgIQgrgahFAAQgTAAgVACg");
	this.shape_9.setTransform(159.5657,262.078,0.7926,0.7925);

	this.instance_19 = new lib.Group_10();
	this.instance_19.setTransform(201.6,299.5,0.7932,0.7932,0,0,0,1.3,1.2);
	this.instance_19.alpha = 0.5703;
	this.instance_19.compositeOperation = "overlay";

	this.instance_20 = new lib.Group_11_0();
	this.instance_20.setTransform(90.3,272.45,0.7932,0.7932,0,0,0,1.3,1.2);
	this.instance_20.alpha = 0.5703;
	this.instance_20.compositeOperation = "overlay";

	this.instance_21 = new lib.Group_12();
	this.instance_21.setTransform(197.85,302.35,0.7932,0.7932,0,0,0,1.2,1.2);
	this.instance_21.alpha = 0.5703;
	this.instance_21.compositeOperation = "overlay";

	this.instance_22 = new lib.Group_13_0();
	this.instance_22.setTransform(62.15,226.3,0.7932,0.7932,0,0,0,1.9,1.6);
	this.instance_22.alpha = 0.5703;
	this.instance_22.compositeOperation = "overlay";

	this.instance_23 = new lib.Group_14();
	this.instance_23.setTransform(90.4,289.95,0.7932,0.7932,0,0,0,1.3,1.2);
	this.instance_23.alpha = 0.5703;
	this.instance_23.compositeOperation = "overlay";

	this.instance_24 = new lib.Group_15();
	this.instance_24.setTransform(65.55,206.7,0.7932,0.7932,0,0,0,1.4,1.5);
	this.instance_24.alpha = 0.5703;
	this.instance_24.compositeOperation = "overlay";

	this.instance_25 = new lib.Group_16_0();
	this.instance_25.setTransform(188.3,303.35,0.7932,0.7932,0,0,0,1.2,1.3);
	this.instance_25.alpha = 0.5703;
	this.instance_25.compositeOperation = "overlay";

	this.instance_26 = new lib.Group_17();
	this.instance_26.setTransform(72.7,305.55,0.7932,0.7932,0,0,0,1.4,1.2);
	this.instance_26.alpha = 0.5703;
	this.instance_26.compositeOperation = "overlay";

	this.instance_27 = new lib.Group_18();
	this.instance_27.setTransform(82.35,284,0.7932,0.7932,0,0,0,1.2,1.5);
	this.instance_27.alpha = 0.5703;
	this.instance_27.compositeOperation = "overlay";

	this.instance_28 = new lib.Group_19();
	this.instance_28.setTransform(150.4,296.55,0.7932,0.7932,0,0,0,1.5,1.6);
	this.instance_28.alpha = 0.5703;
	this.instance_28.compositeOperation = "overlay";

	this.instance_29 = new lib.Group_20();
	this.instance_29.setTransform(151.55,296.85,0.7932,0.7932,0,0,0,1.4,1.4);
	this.instance_29.alpha = 0.5703;
	this.instance_29.compositeOperation = "overlay";

	this.instance_30 = new lib.Group_21();
	this.instance_30.setTransform(197.95,298.5,0.7932,0.7932,0,0,0,1.2,1.4);
	this.instance_30.alpha = 0.5703;
	this.instance_30.compositeOperation = "overlay";

	this.instance_31 = new lib.Group_22();
	this.instance_31.setTransform(79.6,266.05,0.7932,0.7932,0,0,0,1.8,1.4);
	this.instance_31.alpha = 0.5703;
	this.instance_31.compositeOperation = "overlay";

	this.instance_32 = new lib.Group_23();
	this.instance_32.setTransform(115.65,268.3,0.7932,0.7932,0,0,0,1.2,0.9);
	this.instance_32.alpha = 0.5703;
	this.instance_32.compositeOperation = "overlay";

	this.instance_33 = new lib.Group_24();
	this.instance_33.setTransform(179.1,307.55,0.7932,0.7932,0,0,0,1.2,1.2);
	this.instance_33.alpha = 0.5703;
	this.instance_33.compositeOperation = "overlay";

	this.instance_34 = new lib.Group_25();
	this.instance_34.setTransform(185.55,298.85,0.7932,0.7932,0,0,0,1.7,1.4);
	this.instance_34.alpha = 0.5703;
	this.instance_34.compositeOperation = "overlay";

	this.instance_35 = new lib.Group_26();
	this.instance_35.setTransform(109.7,248.8,0.7932,0.7932,0,0,0,1.2,1.4);
	this.instance_35.alpha = 0.5703;
	this.instance_35.compositeOperation = "overlay";

	this.instance_36 = new lib.Group_27();
	this.instance_36.setTransform(200.35,300.35,0.7932,0.7932,0,0,0,1.3,1.2);
	this.instance_36.alpha = 0.5703;
	this.instance_36.compositeOperation = "overlay";

	this.instance_37 = new lib.Group_28();
	this.instance_37.setTransform(153.05,304.6,0.7932,0.7932,0,0,0,1.4,1.1);
	this.instance_37.alpha = 0.5703;
	this.instance_37.compositeOperation = "overlay";

	this.instance_38 = new lib.Group_29();
	this.instance_38.setTransform(168.55,301.4,0.7932,0.7932,0,0,0,1.2,1.3);
	this.instance_38.alpha = 0.5703;
	this.instance_38.compositeOperation = "overlay";

	this.instance_39 = new lib.Group_30();
	this.instance_39.setTransform(176.9,301.6,0.7932,0.7932,0,0,0,1.2,1.5);
	this.instance_39.alpha = 0.5703;
	this.instance_39.compositeOperation = "overlay";

	this.instance_40 = new lib.Group_31();
	this.instance_40.setTransform(172.65,308.15,0.7932,0.7932,0,0,0,1.2,1.2);
	this.instance_40.alpha = 0.5703;
	this.instance_40.compositeOperation = "overlay";

	this.instance_41 = new lib.Group_32();
	this.instance_41.setTransform(149.6,296.65,0.7932,0.7932,0,0,0,1.9,1.7);
	this.instance_41.alpha = 0.5703;
	this.instance_41.compositeOperation = "overlay";

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DE758B").s().p("AhYBSQhDgsAZhCQAFgOALgQQATgbAhgOQAfgNAiABQAiACAdAOQAmARAUAiIAIARQALAegIAfQgIAhgZASQgXARgdAGQgUAEgTAAQg0AAgvgeg");
	this.shape_10.setTransform(258.7729,280.126,0.7926,0.7925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D1B17").s().p("AAKAKIghgMIAZgGIADgBIAFgBQAPgCgBAIIgCADIAAABIgEADIgHAIg");
	this.shape_11.setTransform(200.4395,296.7945,0.7926,0.7925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#332521").s().p("AjoCJIgHgHQgKgLgGgLQgUgkAHgwIAAgBIAEgSIABgBIACgHIAAgBIADgIIAAAAQAGgQAKgSIADgGIABgDIALgQIAAAAIAGgJIALgNQAYgdAcgRQAtgbBLABQBEABBJAYQBIAXAuAlQAyAnAAApIAAABIgBAGQgFAtg/AnIgXAMQgXAKgWAGIhNAPQhbAWg3AHQgYADgUAAQhCAAghgdg");
	this.shape_12.setTransform(258.7682,257.9308,0.7926,0.7925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D1B17").s().p("EAXEAh6IgugDQitgOgVg2IgBgDQgFgPAQhOQAQhPAUg5QARg0ALgCQhVAKhzAaIjHAuQklBBldAMQk8ALlJgiQkpgViigSQkhghiahDIgTgJQgegPgZgSIBnEsQADAKjpAUQjsAVgigKQgmgKgZgSQgcgTgZgiQgggqgdhFQgKgVgihbIgCgHQhlkLhHl1QiCqhBQonQBhqfGSmxQByh6CRhlIAggWQhihvgfiGQgiiPA3h8QA5h9BxhAQBog6CFACQB/ACB6A3QB8A4BTBfQBWBjAIB8QJMh3IOB0QAIgnARgoQAHg1AXgzQA6iBB2hAQBsg6CKAGQB/gGB2BEQB1A4BOBaQB2CGgbCvQgZChiBB6QDoCpCmD3QCYDiBmEvIAZBNQCJG2gCGkIgBAuQgKHpibHpQhND2hyDsQgzBshuAhQg6AShdAAQgmAAgqgDgA2wKcQgLBfAGCqQAHDMAGBTQALCgAdB7QAQBCAXA7IABACQAGAPAGAIIAGAFIACABIALADIASAOQIMCUIqAWQBrAFBeAAIABAAQBuABB7gFQE7gMFEgzIABAAQBhgPBqgVQCLgaCNgiIAEgFIAOgRQAIgKABgIIAMhJQAvkoANkkQAEhZABhkIAAgDQgBjpgfjxQgcjUg5j6IgOg8QgaAiggAzIgSAfQgsBRgYAnQgoBFgmAuIgNAPIgCADIgeAfIgSATIgYAWIgnAjIiQBpIhaA1IAAAAIAAAAQAXgOAzhiIBDiDQAUgfAchGQAchFATgdQAIgNAIgLIgNAIQlVC5lRAeQhgAJicgGQijgGgsAAQh1gBhaAOIgBAAQgqAGg1AaQgoAUhYA6Qg2AkgUALIhCAmIgDACIghARIgBAAIghAQIgCACIglAQIhHAaIgiAKIg4AMQhfAPhYgVQhfgXhAg9IgGANIgBgBQg7B0gRCGg");
	this.shape_13.setTransform(176.1405,172.1757,0.7926,0.7925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F5E5DC").ss(1,1,1,3,true).p("AAAgWIAAAt");
	this.shape_14.setTransform(352.4721,214.268,0.7926,0.7925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F5E5DC").s().p("Ag8PlIAAAAIhhgCIBoAAIAAAAINohMIABAAIDLgmQlygVlkiDIAHgIIAEgEIAAgBIACgDQABgIgPACIgFABIgDABIgaAGIgFgCQkehvkBiwQj0iniri5Qi3jEh5jvQgWAGgfAFQheAQhYgUQhfgVhAg8IAGgMQBAA9BfAXQBYAVBfgQIAxgKIAHgCIAhgJIBHgaIAlgRIADgBIAhgQIAAgBIAhgRIADgCIBDglQAUgMA2gkQBYg6AngTQA2gaAqgHIABAAQA9gJBhABICfAEQArAAA2gCQCcAFBfgJQFRgeFWi6IgEAQQgTAegcBGQgcBFgTAfQg2BPgZAoQgsBEgUA5IBbg2IB/haIBjhaIAdggIADgCIAMgPQBbhrA3iBIATgfQAKACAZgPQAZgPAMACQA4D8AcDUQAgDxAADpIAAADQgBBigEBaQgMEjgvEpIgMBIQgCAIgIALIgOARIgEAFQiMAhiLAbQhqAUhhAPIgBAAQlEAzk7ANQhvAEhkAAIgXAAgAO/GYQghAOgTAaQgLAQgFAPQgZBCBDAsQBAApBLgPQAdgGAXgQQAZgTAIggQAIgggLgfIgIgQQgUgigmgSQgdgOgigBIgFAAQggAAgdAMgANfBYQgcARgYAcIgLAOIgGAIIAAABIgLAQIgBACIgDAGQgKATgGAPIAAABIgDAIIAAABIgCAIIgBABIgEASIAAAAQgHAxAUAkQAHAMAJAKIAHAGQAsAmBjgMQA3gGBcgWIBNgQQAWgFAXgLIAXgMQA/gmAFgtIABgHIAAAAQAAgqgygoQgugkhIgYQhJgXhFgBIgGAAQhHAAgrAag");
	this.shape_15.setTransform(177.7661,239.8949,0.7926,0.7925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F5E5DC").s().p("AAfBsIgCgBIgGgFQgGgHgGgQIgBgCQgWg7gQhBQgHgegGghQAWBxAiBVIAbAXg");
	this.shape_16.setTransform(66.7741,295.0577,0.7926,0.7925);

	this.instance_42 = new lib.Group_42();
	this.instance_42.setTransform(239.1,261.3,0.7932,0.7932,0,0,0,1.3,1.7);
	this.instance_42.alpha = 0.5508;
	this.instance_42.compositeOperation = "overlay";

	this.instance_43 = new lib.Group_43();
	this.instance_43.setTransform(274.7,259.95,0.7932,0.7932,0,0,0,1.4,1.7);
	this.instance_43.alpha = 0.5508;
	this.instance_43.compositeOperation = "overlay";

	this.instance_44 = new lib.Group_44();
	this.instance_44.setTransform(243.75,251.7,0.7932,0.7932,0,0,0,1,1);
	this.instance_44.alpha = 0.5508;
	this.instance_44.compositeOperation = "overlay";

	this.instance_45 = new lib.Group_45();
	this.instance_45.setTransform(242.85,252.9,0.7932,0.7932,0,0,0,1.2,1.4);
	this.instance_45.alpha = 0.5508;
	this.instance_45.compositeOperation = "overlay";

	this.instance_46 = new lib.Group_46();
	this.instance_46.setTransform(290.4,236.55,0.7932,0.7932,0,0,0,1.7,1.4);
	this.instance_46.alpha = 0.5508;
	this.instance_46.compositeOperation = "overlay";

	this.instance_47 = new lib.Group_47();
	this.instance_47.setTransform(282,259.35,0.7932,0.7932,0,0,0,1.2,1.6);
	this.instance_47.alpha = 0.5508;
	this.instance_47.compositeOperation = "overlay";

	this.instance_48 = new lib.Group_48();
	this.instance_48.setTransform(250.15,272.45,0.7932,0.7932,0,0,0,1.2,1.2);
	this.instance_48.alpha = 0.5508;
	this.instance_48.compositeOperation = "overlay";

	this.instance_49 = new lib.Group_49();
	this.instance_49.setTransform(264.6,279.25,0.7932,0.7932,0,0,0,1.3,1.4);
	this.instance_49.alpha = 0.5508;
	this.instance_49.compositeOperation = "overlay";

	this.instance_50 = new lib.Group_50();
	this.instance_50.setTransform(239.15,260.15,0.7932,0.7932,0,0,0,1.2,1.7);
	this.instance_50.alpha = 0.5508;
	this.instance_50.compositeOperation = "overlay";

	this.instance_51 = new lib.Group_51();
	this.instance_51.setTransform(267.9,268.5,0.7932,0.7932,0,0,0,1.2,1);
	this.instance_51.alpha = 0.5508;
	this.instance_51.compositeOperation = "overlay";

	this.instance_52 = new lib.Group_52();
	this.instance_52.setTransform(282.65,298.4,0.7932,0.7932,0,0,0,1.2,1.4);
	this.instance_52.alpha = 0.5508;
	this.instance_52.compositeOperation = "overlay";

	this.instance_53 = new lib.Group_53();
	this.instance_53.setTransform(193.1,314.8,0.7932,0.7932,0,0,0,0.9,1.4);
	this.instance_53.alpha = 0.5508;
	this.instance_53.compositeOperation = "overlay";

	this.instance_54 = new lib.Group_54();
	this.instance_54.setTransform(240.05,258.1,0.7932,0.7932,0,0,0,1.3,1.2);
	this.instance_54.alpha = 0.5508;
	this.instance_54.compositeOperation = "overlay";

	this.instance_55 = new lib.Group_55();
	this.instance_55.setTransform(241.65,254.7,0.7932,0.7932,0,0,0,1.5,1.3);
	this.instance_55.alpha = 0.5508;
	this.instance_55.compositeOperation = "overlay";

	this.instance_56 = new lib.Group_56();
	this.instance_56.setTransform(241.4,254.95,0.7932,0.7932,0,0,0,1.6,1.2);
	this.instance_56.alpha = 0.5508;
	this.instance_56.compositeOperation = "overlay";

	this.instance_57 = new lib.Group_57();
	this.instance_57.setTransform(242.4,253.55,0.7932,0.7932,0,0,0,1.2,1.5);
	this.instance_57.alpha = 0.5508;
	this.instance_57.compositeOperation = "overlay";

	this.instance_58 = new lib.Group_58();
	this.instance_58.setTransform(239.55,259.7,0.7932,0.7932,0,0,0,1.3,1.6);
	this.instance_58.alpha = 0.5508;
	this.instance_58.compositeOperation = "overlay";

	this.instance_59 = new lib.Group_59();
	this.instance_59.setTransform(239.75,258.95,0.7932,0.7932,0,0,0,1.3,1.5);
	this.instance_59.alpha = 0.5508;
	this.instance_59.compositeOperation = "overlay";

	this.instance_60 = new lib.Group_60();
	this.instance_60.setTransform(239.5,197.9,0.7932,0.7932,0,0,0,8.2,13.3);
	this.instance_60.alpha = 0.5508;
	this.instance_60.compositeOperation = "overlay";

	this.instance_61 = new lib.Group_61();
	this.instance_61.setTransform(119.8,203.1,0.7932,0.7932,0,0,0,1,0.9);
	this.instance_61.alpha = 0.5508;
	this.instance_61.compositeOperation = "overlay";

	this.instance_62 = new lib.Group_62();
	this.instance_62.setTransform(117.2,204.55,0.7932,0.7932,0,0,0,1.4,1);
	this.instance_62.alpha = 0.5508;
	this.instance_62.compositeOperation = "overlay";

	this.instance_63 = new lib.Group_63();
	this.instance_63.setTransform(128.5,191.8,0.7932,0.7932,0,0,0,1.2,1.3);
	this.instance_63.alpha = 0.5508;
	this.instance_63.compositeOperation = "overlay";

	this.instance_64 = new lib.Group_64();
	this.instance_64.setTransform(238.55,203.45,0.7932,0.7932,0,0,0,1.4,1.1);
	this.instance_64.alpha = 0.5508;
	this.instance_64.compositeOperation = "overlay";

	this.instance_65 = new lib.Group_65();
	this.instance_65.setTransform(253.55,171.65,0.7932,0.7932,0,0,0,2.4,2.5);
	this.instance_65.alpha = 0.5508;
	this.instance_65.compositeOperation = "overlay";

	this.instance_66 = new lib.Group_66();
	this.instance_66.setTransform(114.7,206.2,0.7932,0.7932,0,0,0,1.8,1.4);
	this.instance_66.alpha = 0.5508;
	this.instance_66.compositeOperation = "overlay";

	this.instance_67 = new lib.Group_67();
	this.instance_67.setTransform(70.6,304.9,0.7932,0.7932,0,0,0,1.4,1.2);
	this.instance_67.alpha = 0.5508;
	this.instance_67.compositeOperation = "overlay";

	this.instance_68 = new lib.Group_68();
	this.instance_68.setTransform(242.35,201.25,0.7932,0.7932,0,0,0,1.4,1.3);
	this.instance_68.alpha = 0.5508;
	this.instance_68.compositeOperation = "overlay";

	this.instance_69 = new lib.Group_69();
	this.instance_69.setTransform(97.85,212.2,0.7932,0.7932,0,0,0,1.3,1.2);
	this.instance_69.alpha = 0.5508;
	this.instance_69.compositeOperation = "overlay";

	this.instance_70 = new lib.Group_70();
	this.instance_70.setTransform(111.65,207.8,0.7932,0.7932,0,0,0,1.4,1.9);
	this.instance_70.alpha = 0.5508;
	this.instance_70.compositeOperation = "overlay";

	this.instance_71 = new lib.Group_71();
	this.instance_71.setTransform(108.75,208.85,0.7932,0.7932,0,0,0,1.2,1.5);
	this.instance_71.alpha = 0.5508;
	this.instance_71.compositeOperation = "overlay";

	this.instance_72 = new lib.Group_72();
	this.instance_72.setTransform(102.95,211.05,0.7932,0.7932,0,0,0,1.1,1.4);
	this.instance_72.alpha = 0.5508;
	this.instance_72.compositeOperation = "overlay";

	this.instance_73 = new lib.Group_73();
	this.instance_73.setTransform(105.9,210.05,0.7932,0.7932,0,0,0,1.4,1.4);
	this.instance_73.alpha = 0.5508;
	this.instance_73.compositeOperation = "overlay";

	this.instance_74 = new lib.Group_74();
	this.instance_74.setTransform(203.8,298.05,0.7932,0.7932,0,0,0,1.3,1.5);
	this.instance_74.alpha = 0.5508;
	this.instance_74.compositeOperation = "overlay";

	this.instance_75 = new lib.Group_75();
	this.instance_75.setTransform(68.4,205.6,0.7932,0.7932,0,0,0,1.3,1.3);
	this.instance_75.alpha = 0.5508;
	this.instance_75.compositeOperation = "overlay";

	this.instance_76 = new lib.Group_76();
	this.instance_76.setTransform(70.2,304.5,0.7932,0.7932,0,0,0,1.3,1.1);
	this.instance_76.alpha = 0.5508;
	this.instance_76.compositeOperation = "overlay";

	this.instance_77 = new lib.Group_77();
	this.instance_77.setTransform(99.9,211.75,0.7932,0.7932,0,0,0,1.4,1.3);
	this.instance_77.alpha = 0.5508;
	this.instance_77.compositeOperation = "overlay";

	this.instance_78 = new lib.Group_78();
	this.instance_78.setTransform(245.85,198.7,0.7932,0.7932,0,0,0,0.9,0.9);
	this.instance_78.alpha = 0.5508;
	this.instance_78.compositeOperation = "overlay";

	this.instance_79 = new lib.Group_79();
	this.instance_79.setTransform(164.4,188.65,0.7932,0.7932,0,0,0,24,1.9);
	this.instance_79.alpha = 0.5508;
	this.instance_79.compositeOperation = "overlay";

	this.instance_80 = new lib.Group_80();
	this.instance_80.setTransform(203.55,298.45,0.7932,0.7932,0,0,0,1.3,1.4);
	this.instance_80.alpha = 0.5508;
	this.instance_80.compositeOperation = "overlay";

	this.instance_81 = new lib.Group_81();
	this.instance_81.setTransform(202.6,297.35,0.7932,0.7932,0,0,0,1.7,1.6);
	this.instance_81.alpha = 0.5508;
	this.instance_81.compositeOperation = "overlay";

	this.instance_82 = new lib.Group_82();
	this.instance_82.setTransform(66,292.7,0.7932,0.7932,0,0,0,1.2,1.4);
	this.instance_82.alpha = 0.5508;
	this.instance_82.compositeOperation = "overlay";

	this.instance_83 = new lib.Group_83();
	this.instance_83.setTransform(252.6,193.8,0.7932,0.7932,0,0,0,1.3,1.4);
	this.instance_83.alpha = 0.5508;
	this.instance_83.compositeOperation = "overlay";

	this.instance_84 = new lib.Group_84();
	this.instance_84.setTransform(249.3,196.3,0.7932,0.7932,0,0,0,1.2,1.3);
	this.instance_84.alpha = 0.5508;
	this.instance_84.compositeOperation = "overlay";

	this.instance_85 = new lib.Group_85();
	this.instance_85.setTransform(233.85,205.7,0.7932,0.7932,0,0,0,1.1,1.4);
	this.instance_85.alpha = 0.5508;
	this.instance_85.compositeOperation = "overlay";

	this.instance_86 = new lib.Group_86();
	this.instance_86.setTransform(255.85,190.8,0.7932,0.7932,0,0,0,1.7,1.5);
	this.instance_86.alpha = 0.5508;
	this.instance_86.compositeOperation = "overlay";

	this.instance_87 = new lib.Group_87();
	this.instance_87.setTransform(278.45,160.75,0.7932,0.7932,0,0,0,4.9,5.7);
	this.instance_87.alpha = 0.5508;
	this.instance_87.compositeOperation = "overlay";

	this.instance_88 = new lib.Group_88();
	this.instance_88.setTransform(268.8,175.45,0.7932,0.7932,0,0,0,9,12.4);
	this.instance_88.alpha = 0.5508;
	this.instance_88.compositeOperation = "overlay";

	this.instance_89 = new lib.Group_89();
	this.instance_89.setTransform(259.1,186.55,0.7932,0.7932,0,0,0,1.6,1);
	this.instance_89.alpha = 0.5508;
	this.instance_89.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.shape_9},{t:this.instance_18},{t:this.shape_8},{t:this.instance_17},{t:this.shape_7},{t:this.instance_16},{t:this.shape_6},{t:this.instance_15},{t:this.shape_5},{t:this.instance_14},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_13},{t:this.shape_1},{t:this.instance_12},{t:this.shape},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,353.8,344.5);


(lib.AnimatedDoll = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Head
	this.instance = new lib.Head("synched",0);
	this.instance.setTransform(122.15,230.35,0.6734,0.6735,14.9921,0,0,172.7,315.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:315.6,rotation:14.9846},0).wait(1).to({regY:315.4,rotation:14.9241,x:122.25,y:230.25},0).wait(1).to({regX:172.8,rotation:14.7588,x:122.45},0).wait(1).to({regX:172.7,rotation:14.438,x:122.7},0).wait(1).to({regX:172.8,rotation:13.9081,x:123.3,y:230.2},0).wait(1).to({regX:172.7,regY:315.6,rotation:13.1191,x:123.95},0).wait(1).to({regY:315.4,rotation:12.0177,x:125.1,y:230},0).wait(1).to({rotation:10.551,x:126.5,y:229.95},0).wait(1).to({regX:172.8,rotation:8.6682,x:128.5,y:229.8},0).wait(1).to({regX:172.7,regY:315.5,rotation:6.3165,x:130.75,y:229.85},0).wait(1).to({regX:172.8,regY:315.4,rotation:3.4447,x:133.7,y:229.75},0).wait(1).to({regX:172.7,rotation:0.0013,x:137.15},0).wait(1).to({rotation:-3.4422,x:140.45},0).wait(1).to({rotation:-6.314,x:143.3,y:229.85},0).wait(1).to({regY:315.5,rotation:-8.6656,x:145.6,y:230.1},0).wait(1).to({rotation:-10.5472,x:147.5,y:230.2},0).wait(1).to({regX:172.6,regY:315.4,rotation:-12.0136,x:148.85},0).wait(1).to({regX:172.7,rotation:-13.1165,x:150,y:230.35},0).wait(1).to({regX:172.6,regY:315.3,rotation:-13.9068,x:150.7,y:230.3},0).wait(1).to({regY:315.4,rotation:-14.4358,x:151.25,y:230.4},0).wait(1).to({rotation:-14.7563,x:151.55,y:230.5},0).wait(1).to({rotation:-14.9216,x:151.75,y:230.45},0).wait(1).to({regY:315.5,rotation:-14.9821,x:151.8,y:230.5},0).wait(1).to({regX:172.3,regY:315.4,rotation:-14.9921,x:151.75,y:230.65},0).wait(1).to({rotation:-14.9859,x:151.85,y:230.7},0).to({_off:true},1).wait(24));

	// Trunk
	this.instance_1 = new lib.Trunk("synched",0);
	this.instance_1.setTransform(136.85,399.65,0.6736,0.6737,-4.9988,0,0,109,252.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.9975},24,cjs.Ease.cubicInOut).to({rotation:4.9949,y:399.7},1).to({_off:true},1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.2,9.3,248.10000000000002,390.59999999999997);


(lib.GlobeaniCORRECT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.Beams("synched",0);
	this.instance.setTransform(255,81.55,1,1,116.0012,0,0,795.7,633.8);

	
	var _tweenStr_0 = cjs.Tween.get(this.instance).wait(1).to({regX:797.8,regY:635.4,rotation:117.803,x:252.6,y:82.7},0).wait(1).to({rotation:119.605,x:252.55,y:82.6},0).wait(1).to({rotation:121.407,x:252.5,y:82.55},0).wait(1).to({rotation:123.209,y:82.45},0).wait(1).to({rotation:125.011,y:82.35},0).wait(1).to({rotation:126.813,x:252.4,y:82.25},0).wait(1).to({rotation:128.615,y:82.2},0).wait(1).to({rotation:130.417,y:82.15},0).wait(1).to({rotation:132.219,x:252.35,y:82.1},0).wait(1).to({rotation:134.0211,y:81.95},0).wait(1).to({rotation:135.8231,y:81.9},0).wait(1).to({rotation:137.6251,y:81.75},0).wait(1).to({rotation:139.4271,y:81.65},0).wait(1).to({rotation:141.2291,x:252.3,y:81.6},0).wait(1).to({rotation:143.0311,x:252.35,y:81.55},0).wait(1).to({rotation:144.8331,x:252.3,y:81.45},0).wait(1).to({rotation:146.6351,x:252.35,y:81.35},0).wait(1).to({rotation:148.4371,y:81.25},0).wait(1).to({rotation:150.2391,y:81.15},0).wait(1).to({rotation:152.0411,x:252.4,y:81.1},0).wait(1).to({rotation:153.8431,x:252.35,y:81.05},0).wait(1).to({rotation:155.6451,y:80.95},0).wait(1).to({rotation:157.4471,x:252.4,y:80.9},0).wait(1).to({rotation:159.2491,x:252.45,y:80.75},0).wait(1).to({rotation:161.0511,y:80.7},0).wait(1).to({rotation:162.8531,y:80.6},0).wait(1).to({rotation:164.6551,x:252.5,y:80.5},0).wait(1).to({rotation:166.4571,x:252.55,y:80.45},0).wait(1).to({rotation:168.2591,x:252.6,y:80.4},0).wait(1).to({rotation:170.0612,x:252.65,y:80.35},0).wait(1).to({rotation:171.8632,y:80.25},0).wait(1).to({rotation:173.6652,x:252.75,y:80.2},0).wait(1).to({rotation:175.4672,y:80.1},0).wait(1).to({rotation:177.2692,x:252.8,y:80.05},0).wait(1).to({rotation:179.0712,x:252.85,y:80},0).wait(1).to({rotation:180.8732,x:252.9,y:79.95},0).wait(1).to({rotation:182.6752,x:252.95,y:79.85},0).wait(1).to({rotation:184.4772,x:253,y:79.8},0).wait(1).to({rotation:186.2792,x:253.05,y:79.7},0).wait(1).to({rotation:188.0812,y:79.65},0).wait(1).to({rotation:189.8832,x:253.15,y:79.6},0).wait(1).to({rotation:191.6852,x:253.25,y:79.55},0).wait(1).to({rotation:193.4872,x:253.3},0).wait(1).to({rotation:195.2892,x:253.35,y:79.45},0).wait(1).to({rotation:197.0912,x:253.45,y:79.4},0).wait(1).to({rotation:198.8932,x:253.5},0).wait(1).to({rotation:200.6952,x:253.6,y:79.3},0).wait(1).to({rotation:202.4972,y:79.25},0).wait(1).to({rotation:204.2992,x:253.7,y:79.2},0).wait(1).to({rotation:206.1013,x:253.75,y:79.15},0).wait(1).to({rotation:207.9033,x:253.85},0).wait(1).to({rotation:209.7053,x:253.9,y:79.1},0).wait(1).to({rotation:211.5073,x:253.95},0).wait(1).to({rotation:213.3093,x:254.1,y:79.05},0).wait(1).to({rotation:215.1113,x:254.2},0).wait(1).to({rotation:216.9133,y:79},0).wait(1).to({rotation:218.7153,x:254.3,y:78.95},0).wait(1).to({rotation:220.5173,x:254.4},0).wait(1).to({rotation:222.3193,x:254.5,y:79},0).wait(1).to({rotation:224.1213,x:254.6,y:78.9},0).wait(1).to({rotation:225.9233,x:254.65},0).wait(1).to({rotation:227.7253,x:254.75,y:78.95},0).wait(1).to({rotation:229.5273,x:254.8,y:78.9},0).wait(1).to({rotation:231.3293,x:254.9},0).wait(1).to({rotation:233.1313,x:254.95},0).wait(1).to({rotation:234.9333,x:255.05},0).wait(1).to({rotation:236.7353,x:255.15,y:78.95},0).wait(1).to({rotation:238.5373,x:255.2,y:78.9},0).wait(1).to({rotation:240.3393,x:255.3},0).wait(1).to({rotation:242.1414,x:255.4,y:78.95},0).wait(1).to({rotation:243.9434,x:255.45},0).wait(1).to({rotation:245.7454,x:255.55},0).wait(1).to({rotation:247.5474,x:255.7,y:79},0).wait(1).to({rotation:249.3494,x:255.75},0).wait(1).to({rotation:251.1514,x:255.8,y:79.05},0).wait(1).to({rotation:252.9534,x:255.95},0).wait(1).to({rotation:254.7554,x:256.05,y:79.15},0).wait(1).to({rotation:256.5574,x:256.1,y:79.1},0).wait(1).to({rotation:258.3594,x:256.2,y:79.15},0).wait(1).to({rotation:260.1614,x:256.25,y:79.25},0).wait(1).to({rotation:261.9634,x:256.3,y:79.2},0).wait(1).to({rotation:263.7654,x:256.35,y:79.25},0).wait(1).to({rotation:265.5674,x:256.45,y:79.35},0).wait(1).to({rotation:267.3694,x:256.5,y:79.4},0).wait(1).to({rotation:269.1714,x:256.6},0).wait(1).to({rotation:270.9734,x:256.65,y:79.45},0).wait(1).to({rotation:272.7754,x:256.7,y:79.5},0).wait(1).to({rotation:274.5774,x:256.75,y:79.55},0).wait(1).to({rotation:276.3794,x:256.8,y:79.65},0).wait(1).to({rotation:278.1815,x:256.9,y:79.7},0).wait(1).to({rotation:279.9835,y:79.75},0).wait(1).to({rotation:281.7855,x:257},0).wait(1).to({rotation:283.5875,y:79.85},0).wait(1).to({rotation:285.3895,x:257.05,y:79.9},0).wait(1).to({rotation:287.1915,x:257.15,y:80},0).wait(1).to({rotation:288.9935,x:257.2,y:80.1},0).wait(1).to({rotation:290.7955,x:257.25,y:80.15},0).wait(1).to({rotation:292.5975,y:80.2},0).wait(1).to({rotation:294.3995,x:257.3,y:80.25},0).wait(1).to({rotation:296.2015,x:257.35,y:80.4},0).wait(1).to({rotation:298.0035,x:257.4,y:80.45},0).wait(1).to({rotation:299.8055,x:257.45,y:80.55},0).wait(1).to({rotation:301.6075},0).wait(1).to({rotation:303.4095,x:257.5,y:80.65},0).wait(1).to({rotation:305.2115,x:257.55,y:80.75},0).wait(1).to({rotation:307.0135,x:257.5,y:80.8},0).wait(1).to({rotation:308.8155,x:257.55,y:80.9},0).wait(1).to({rotation:310.6175,y:80.95},0).wait(1).to({rotation:312.4195,x:257.6,y:81.05},0).wait(1).to({rotation:314.2216,y:81.15},0).wait(1).to({rotation:316.0236,y:81.25},0).wait(1).to({rotation:317.8256,x:257.65,y:81.3},0).wait(1).to({rotation:319.6276,y:81.35},0).wait(1).to({rotation:321.4296,y:81.45},0).wait(1).to({rotation:323.2316,y:81.55},0).wait(1).to({rotation:325.0336,y:81.65},0).wait(1).to({rotation:326.8356,y:81.75},0).wait(1).to({rotation:328.6376,y:81.85},0).wait(1).to({rotation:330.4396,x:257.6,y:81.95},0).wait(1).to({rotation:332.2416,x:257.65,y:82.05},0).wait(1).to({rotation:334.0436,x:257.55,y:82.1},0).wait(1).to({rotation:335.8456,x:257.6,y:82.15},0).wait(1).to({rotation:337.6476,x:257.55,y:82.25},0).wait(1).to({rotation:339.4496,x:257.5,y:82.35},0).wait(1).to({rotation:341.2516,x:257.45,y:82.45},0).wait(1).to({rotation:343.0536,y:82.5},0).wait(1).to({rotation:344.8556,y:82.55},0).wait(1).to({rotation:346.6576,x:257.4,y:82.65},0).wait(1).to({rotation:348.4596,x:257.35,y:82.75},0).wait(1).to({rotation:350.2617,x:257.3,y:82.8},0).wait(1).to({rotation:352.0637,x:257.25,y:82.85},0).wait(1).to({rotation:353.8657,y:82.95},0).wait(1).to({rotation:355.6677,x:257.2,y:83.05},0).wait(1).to({rotation:357.4697,x:257.15,y:83.15},0).wait(1).to({rotation:359.2717},0).wait(1).to({rotation:361.0737,x:257.1,y:83.25},0).wait(1).to({rotation:362.8757,x:257.05},0).wait(1).to({rotation:364.6777,x:257,y:83.35},0).wait(1).to({rotation:366.4797,x:256.9,y:83.4},0).wait(1).to({rotation:368.2817,x:256.85,y:83.45},0).wait(1).to({rotation:370.0837,x:256.75,y:83.55},0).wait(1).to({rotation:371.8857},0).wait(1).to({rotation:373.6877,x:256.7,y:83.6},0).wait(1).to({rotation:375.4897,x:256.6,y:83.65},0).wait(1).to({rotation:377.2917,x:256.55,y:83.75},0).wait(1).to({rotation:379.0937,x:256.45},0).wait(1).to({rotation:380.8957,x:256.4,y:83.8},0).wait(1).to({rotation:382.6977,x:256.3,y:83.9},0).wait(1).to({rotation:384.4997,x:256.25,y:83.95},0).wait(1).to({rotation:386.3018,x:256.15,y:83.9},0).wait(1).to({rotation:388.1038,y:84},0).wait(1).to({rotation:389.9058,x:256},0).wait(1).to({rotation:391.7078,x:255.95},0).wait(1).to({rotation:393.5098,x:255.85,y:84.1},0).wait(1).to({rotation:395.3118,x:255.8},0).wait(1).to({rotation:397.1138,x:255.65,y:84.15},0).wait(1).to({rotation:398.9158,x:255.6},0).wait(1).to({rotation:400.7178,x:255.45,y:84.2},0).wait(1).to({rotation:402.5198,x:255.4,y:84.15},0).wait(1).to({rotation:404.3218,x:255.3,y:84.2},0).wait(1).to({rotation:406.1238,y:84.15},0).wait(1).to({rotation:407.9258,x:255.15,y:84.25},0).wait(1).to({rotation:409.7278,x:255.1,y:84.2},0).wait(1).to({rotation:411.5298,x:255},0).wait(1).to({rotation:413.3318,x:254.9},0).wait(1).to({rotation:415.1338,x:254.8,y:84.25},0).wait(1).to({rotation:416.9358,x:254.75,y:84.2},0).wait(1).to({rotation:418.7378,x:254.65},0).wait(1).to({rotation:420.5398,x:254.55},0).wait(1).to({rotation:422.3419},0).wait(1).to({rotation:424.1439,x:254.45},0).wait(1).to({rotation:425.9459,x:254.4,y:84.15},0).wait(1).to({rotation:427.7479,x:254.25},0).wait(1).to({rotation:429.5499,x:254.2,y:84.1},0).wait(1).to({rotation:431.3519,x:254.1,y:84.05},0).wait(1).to({rotation:433.1539,x:254},0).wait(1).to({rotation:434.9559,x:253.95,y:84},0).wait(1).to({rotation:436.7579,x:253.9},0).wait(1).to({rotation:438.5599,x:253.85,y:83.95},0).wait(1).to({rotation:440.3619,x:253.75},0).wait(1).to({rotation:442.1639,x:253.65,y:83.9},0).wait(1).to({rotation:443.9659,x:253.6,y:83.8},0).wait(1).to({rotation:445.7679,x:253.5},0).wait(1).to({rotation:447.5699,x:253.4,y:83.75},0).wait(1).to({rotation:449.3719,y:83.7},0).wait(1).to({rotation:451.1739,x:253.35},0).wait(1).to({rotation:452.9759,x:253.25,y:83.55},0).wait(1).to({rotation:454.7779,x:253.2},0).wait(1).to({rotation:456.5799,x:253.15,y:83.5},0).wait(1).to({rotation:458.382,x:253.1,y:83.4},0).wait(1).to({rotation:460.184,x:253,y:83.35},0).wait(1).to({rotation:461.986,y:83.3},0).wait(1).to({rotation:463.788,x:252.9,y:83.2},0).wait(1).to({rotation:465.59},0).wait(1).to({rotation:467.392,x:252.8,y:83.1},0).wait(1).to({rotation:469.194,y:83.05},0).wait(1).to({rotation:470.996,x:252.75,y:82.95},0).wait(1).to({rotation:472.798,x:252.65,y:82.9},0).wait(1).to({rotation:474.6,y:82.85},0).wait(1).to({rotation:476.402,x:252.6,y:82.75},0).wait(1).to({rotation:478.204,x:252.55,y:82.65},0).wait(1).to({rotation:480.006,y:82.6},0).wait(1).to({rotation:481.808,x:252.5,y:82.55},0).wait(1).to({rotation:483.61,y:82.45},0).wait(1).to({rotation:485.412,x:252.45,y:82.4},0).wait(1).to({rotation:487.214,y:82.25},0).wait(1).to({rotation:489.016,x:252.4,y:82.2},0).wait(1).to({rotation:490.818,y:82.1},0).wait(1).to({rotation:492.62,y:82},0).wait(1).to({rotation:494.4221,x:252.35,y:81.95},0).wait(1).to({rotation:496.2241,y:81.85},0).wait(1).to({rotation:498.0261,y:81.7},0).wait(1).to({rotation:499.8281,x:252.3},0).wait(1).to({rotation:501.6301,x:252.35,y:81.55},0).wait(1).to({rotation:503.4321,y:81.5},0).wait(1).to({rotation:505.2341,y:81.4},0).wait(1).to({rotation:507.0361,y:81.35},0).wait(1).to({rotation:508.8381,x:252.3,y:81.3},0).wait(1).to({rotation:510.6401,x:252.4,y:81.15},0).wait(1).to({rotation:512.4421,x:252.35,y:81.1},0).wait(1).to({rotation:514.2441,y:81},0).wait(1).to({rotation:516.0461,x:252.4,y:80.95},0).wait(1).to({rotation:517.8481,y:80.8},0).wait(1).to({rotation:519.6501,x:252.45,y:80.75},0).wait(1).to({rotation:521.4521,x:252.5,y:80.65},0).wait(1).to({rotation:523.2541,x:252.55,y:80.6},0).wait(1).to({rotation:525.0561,y:80.5},0).wait(1).to({rotation:526.8581,y:80.45},0).wait(1).to({rotation:528.6601,x:252.6,y:80.35},0).wait(1).to({rotation:530.4622,x:252.65,y:80.3},0).wait(1).to({rotation:532.2642,x:252.7,y:80.25},0).wait(1).to({rotation:534.0662,y:80.2},0).wait(1).to({rotation:535.8682,x:252.8,y:80.05},0).wait(1).to({rotation:537.6702,x:252.75},0).wait(1).to({rotation:539.4722,x:252.85,y:79.95},0).wait(1).to({rotation:541.2742,x:252.9,y:79.85},0).wait(1).to({rotation:543.0762,x:252.95,y:79.8},0).wait(1).to({rotation:544.8782,x:253.05,y:79.75},0).wait(1).to({rotation:546.6802,y:79.7},0).wait(1).to({rotation:548.4822,x:253.1,y:79.65},0).wait(1).to({rotation:550.2842,x:253.15,y:79.55},0).wait(1).to({rotation:552.0862,x:253.25},0).wait(1).to({rotation:553.8882,y:79.5},0).wait(1).to({rotation:555.6902,x:253.4,y:79.45},0).wait(1).to({rotation:557.4922,x:253.45,y:79.4},0).wait(1).to({rotation:559.2942,x:253.5,y:79.35},0).wait(1).to({rotation:561.0962,x:253.6,y:79.3},0).wait(1).to({rotation:562.8982,x:253.65},0).wait(1).to({rotation:564.7002,x:253.7,y:79.25},0).wait(1).to({rotation:566.5023,x:253.8,y:79.15},0).wait(1).to({rotation:568.3043,x:253.9,y:79.1},0).wait(1).to({rotation:570.1063,x:253.95},0).wait(1).to({rotation:571.9083,x:254,y:79.05},0).wait(1).to({rotation:573.7103,x:254.1},0).wait(1).to({rotation:575.5123,x:254.2},0).wait(1).to({rotation:577.3143,x:254.25,y:79},0).wait(1).to({rotation:579.1163,x:254.3},0).wait(1).to({rotation:580.9183,x:254.4,y:78.95},0).wait(1).to({rotation:582.7203,x:254.5},0).wait(1).to({rotation:584.5223,x:254.55},0).wait(1).to({rotation:586.3243,x:254.65,y:78.9},0).wait(1).to({rotation:588.1263,x:254.8,y:78.95},0).wait(1).to({rotation:589.9283,x:254.9,y:78.9},0).wait(1).to({rotation:591.7303,x:254.95},0).wait(1).to({rotation:593.5323,x:255},0).wait(1).to({rotation:595.3343,x:255.05,y:78.95},0).wait(1).to({rotation:597.1363,x:255.15,y:78.9},0).wait(1).to({rotation:598.9383,x:255.3},0).wait(1).to({rotation:600.7403,x:255.35,y:78.95},0).wait(1).to({rotation:602.5424,x:255.4},0).wait(1).to({rotation:604.3444,x:255.5},0).wait(1).to({rotation:606.1464,x:255.65},0).wait(1).to({rotation:607.9484,x:255.7,y:79},0).wait(1).to({rotation:609.7504,x:255.8},0).wait(1).to({rotation:611.5524,x:255.85,y:79.05},0).wait(1).to({rotation:613.3544,x:255.95,y:79.1},0).wait(1).to({rotation:615.1564,x:256},0).wait(1).to({rotation:616.9584,x:256.1,y:79.15},0).wait(1).to({rotation:618.7604,x:256.15},0).wait(1).to({rotation:620.5624,x:256.25,y:79.2},0).wait(1).to({rotation:622.3644,x:256.3,y:79.3},0).wait(1).to({rotation:624.1664,x:256.35},0).wait(1).to({rotation:625.9684,x:256.4,y:79.35},0).wait(1).to({rotation:627.7704,x:256.5,y:79.4},0).wait(1).to({rotation:629.5724,x:256.6},0).wait(1).to({rotation:631.3744,y:79.5},0).wait(1).to({rotation:633.1764,x:256.7,y:79.55},0).wait(1).to({rotation:634.9784,x:256.8,y:79.6},0).wait(1).to({rotation:636.7804,x:256.85,y:79.65},0).wait(1).to({rotation:638.5825,x:256.9,y:79.7},0).wait(1).to({rotation:640.3845,x:256.95,y:79.75},0).wait(1).to({rotation:642.1865,x:257,y:79.85},0).wait(1).to({rotation:643.9885,x:257.05,y:79.9},0).wait(1).to({rotation:645.7905,x:257.1,y:79.95},0).wait(1).to({rotation:647.5925,y:80},0).wait(1).to({rotation:649.3945,x:257.2,y:80.05},0).wait(1).to({rotation:651.1965,x:257.25,y:80.2},0).wait(1).to({rotation:652.9985,x:257.3},0).wait(1).to({rotation:654.8005,x:257.35,y:80.3},0).wait(1).to({rotation:656.6025,x:257.4,y:80.35},0).wait(1).to({rotation:658.4045,y:80.45},0).wait(1).to({rotation:660.2065,x:257.45,y:80.55},0).wait(1).to({rotation:662.0085,y:80.6},0).wait(1).to({rotation:663.8105,x:257.55,y:80.7},0).wait(1).to({rotation:665.6125,x:257.5,y:80.75},0).wait(1).to({rotation:667.4145,y:80.85},0).wait(1).to({rotation:669.2165,x:257.6,y:80.95},0).wait(1).to({rotation:671.0185},0).wait(1).to({rotation:672.8205,y:81.1},0).wait(1).to({rotation:674.6226,x:257.65},0).wait(1).to({rotation:676.4246,x:257.6,y:81.25},0).wait(1).to({rotation:678.2266,x:257.65,y:81.3},0).wait(1).to({rotation:680.0286,y:81.4},0).wait(1).to({rotation:681.8306,x:257.6,y:81.5},0).wait(1).to({rotation:683.6326,y:81.6},0).wait(1).to({rotation:685.4346,x:257.65,y:81.7},0).wait(1).to({rotation:687.2366,y:81.75},0).wait(1).to({rotation:689.0386,x:257.6,y:81.85},0).wait(1).to({rotation:690.8406,x:257.65,y:81.95},0).wait(1).to({rotation:692.6426,x:257.6,y:82.05},0).wait(1).to({rotation:694.4446,y:82.15},0).wait(1).to({rotation:696.2466,x:257.55,y:82.2},0).wait(1).to({rotation:698.0486,x:257.5,y:82.3},0).wait(1).to({rotation:699.8506,y:82.35},0).wait(1).to({rotation:701.6526,y:82.4},0).wait(1).to({rotation:703.4546,x:257.45,y:82.5},0).wait(1).to({rotation:705.2566,y:82.6},0).wait(1).to({rotation:707.0586,y:82.7},0).wait(1).to({rotation:708.8606,x:257.35,y:82.75},0).wait(1).to({rotation:710.6627,x:257.3,y:82.8},0).wait(1).to({rotation:712.4647,x:257.25,y:82.9},0).wait(1).to({rotation:714.2667,x:257.2,y:82.95},0).wait(1).to({rotation:716.0687,y:83.05},0).wait(1).to({rotation:717.8707,x:257.15,y:83.1},0).wait(1).to({rotation:719.6727,y:83.2},0).wait(1).to({rotation:721.4747,x:257.1},0).wait(1).to({rotation:723.2767,x:257.05,y:83.3},0).wait(1).to({rotation:725.0787,x:256.95,y:83.35},0).wait(1).to({rotation:726.8807,x:256.9},0).wait(1).to({rotation:728.6827,x:256.85,y:83.45},0).wait(1).to({rotation:730.4847,x:256.8,y:83.5},0).wait(1).to({rotation:732.2867,x:256.7,y:83.55},0).wait(1).to({rotation:734.0887,y:83.65},0).wait(1).to({rotation:735.8907,x:256.6,y:83.7},0).wait(1).to({rotation:737.6927,x:256.5,y:83.75},0).wait(1).to({rotation:739.4947,x:256.45},0).wait(1).to({rotation:741.2967,x:256.4,y:83.8},0).wait(1).to({rotation:743.0987,x:256.35,y:83.9},0).wait(1).to({rotation:744.9007,x:256.25},0).wait(1).to({rotation:746.7028,x:256.2,y:83.95},0).wait(1).to({rotation:748.5048,x:256.15,y:84},0).wait(1).to({rotation:750.3068,x:256},0).wait(1).to({rotation:752.1088,x:255.9,y:84.05},0).wait(1).to({rotation:753.9108,x:255.85},0).wait(1).to({rotation:755.7128,x:255.75,y:84.1},0).wait(1).to({rotation:757.5148,x:255.65,y:84.15},0).wait(1).to({rotation:759.3168,x:255.55,y:84.2},0).wait(1).to({rotation:761.1188,x:255.45,y:84.15},0).wait(1).to({rotation:762.9208,x:255.4,y:84.2},0).wait(1).to({rotation:764.7228,x:255.35},0).wait(1).to({rotation:766.5248,x:255.2,y:84.25},0).wait(1).to({rotation:768.3268,y:84.2},0).wait(1).to({rotation:770.1288,x:255.1},0).wait(1).to({rotation:771.9308,x:255,y:84.25},0).wait(1).to({rotation:773.7328,x:254.9,y:84.2},0).wait(1).to({rotation:775.5348,x:254.85},0).wait(1).to({rotation:777.3368,x:254.75},0).wait(1).to({rotation:779.1388,x:254.65,y:84.25},0).wait(1).to({rotation:780.9408,x:254.6,y:84.15},0).wait(1).to({rotation:782.7429,x:254.45},0).wait(1).to({rotation:784.5449},0).wait(1).to({rotation:786.3469,x:254.35,y:84.1},0).wait(1).to({rotation:788.1489,x:254.25,y:84.15},0).wait(1).to({rotation:789.9509,x:254.15,y:84.1},0).wait(1).to({rotation:791.7529,x:254.1},0).wait(1).to({rotation:793.5549,x:254,y:84.05},0).wait(1).to({rotation:795.3569,x:253.95,y:84},0).wait(1).to({rotation:797.1589,x:253.85,y:83.95},0).wait(1).to({rotation:798.9609,x:253.75},0).wait(1).to({rotation:800.7629,x:253.7,y:83.9},0).wait(1).to({rotation:802.5649,x:253.65,y:83.85},0).wait(1).to({rotation:804.3669,x:253.55,y:83.8},0).wait(1).to({rotation:806.1689,y:83.75},0).wait(1).to({rotation:807.9709,x:253.45},0).wait(1).to({rotation:809.7729,x:253.35,y:83.65},0).wait(1).to({rotation:811.5749},0).wait(1).to({rotation:813.3769,x:253.25,y:83.6},0).wait(1).to({rotation:815.1789,x:253.2,y:83.55},0).wait(1).to({rotation:816.9809,x:253.1,y:83.5},0).wait(1).to({rotation:818.783,x:253.05,y:83.45},0).wait(1).to({rotation:820.585,x:253,y:83.35},0).wait(1).to({rotation:822.387,x:252.95,y:83.25},0).wait(1).to({rotation:824.189,x:252.9,y:83.2},0).wait(1).to({rotation:825.991,x:252.85,y:83.15},0).wait(1).to({rotation:827.793,x:252.8,y:83.1},0).wait(1).to({rotation:829.595,x:252.75,y:83},0).wait(1).to({rotation:831.397,x:252.7,y:82.95},0).wait(1).to({rotation:833.199,y:82.9},0).wait(1);
	this.timeline.addTween(_tweenStr_0.to({rotation:835.001,x:252.65,y:82.8},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Beams("synched",0);
	this.instance_1.setTransform(255,81.5,1,1,0,0,0,797.8,635.4);

	
	var _tweenStr_1 = cjs.Tween.get(this.instance_1).wait(1).to({rotation:0.9023,x:255.05},0).wait(1).to({rotation:1.8045},0).wait(1).to({rotation:2.7068,x:255},0).wait(1).to({rotation:3.609},0).wait(1).to({rotation:4.5113},0).wait(1).to({rotation:5.4135,x:255.05},0).wait(1).to({rotation:6.3158,x:255},0).wait(1).to({rotation:7.218},0).wait(1).to({rotation:8.1203,x:255.05},0).wait(1).to({rotation:9.0226},0).wait(1).to({rotation:9.9248,y:81.55},0).wait(1).to({rotation:10.8271,y:81.5},0).wait(1).to({rotation:11.7293},0).wait(1).to({rotation:12.6316},0).wait(1).to({rotation:13.5338,x:255},0).wait(1).to({rotation:14.4361,y:81.55},0).wait(1).to({rotation:15.3383,y:81.5},0).wait(1).to({rotation:16.2406},0).wait(1).to({rotation:17.1429},0).wait(1).to({rotation:18.0451,x:255.05},0).wait(1).to({rotation:18.9474,x:255},0).wait(1).to({rotation:19.8496,x:255.05,y:81.55},0).wait(1).to({rotation:20.7519,x:255,y:81.5},0).wait(1).to({rotation:21.6541,x:255.05,y:81.55},0).wait(1).to({rotation:22.5564,x:255},0).wait(1).to({rotation:23.4586},0).wait(1).to({rotation:24.3609,y:81.5},0).wait(1).to({rotation:25.2632,x:255.05},0).wait(1).to({rotation:26.1654,x:255,y:81.55},0).wait(1).to({rotation:27.0677,y:81.5},0).wait(1).to({rotation:27.9699,y:81.45},0).wait(1).to({rotation:28.8722,y:81.5},0).wait(1).to({rotation:29.7744,x:255.05},0).wait(1).to({rotation:30.6767,x:255},0).wait(1).to({rotation:31.5789,y:81.55},0).wait(1).to({rotation:32.4812,x:255.05},0).wait(1).to({rotation:33.3835},0).wait(1).to({rotation:34.2857,x:255,y:81.5},0).wait(1).to({rotation:35.188,y:81.55},0).wait(1).to({rotation:36.0902,y:81.5},0).wait(1).to({rotation:36.9925,y:81.55},0).wait(1).to({rotation:37.8947,x:254.95,y:81.5},0).wait(1).to({rotation:38.797},0).wait(1).to({rotation:39.6992},0).wait(1).to({rotation:40.6015,x:255,y:81.55},0).wait(1).to({rotation:41.5038,x:254.95,y:81.5},0).wait(1).to({rotation:42.406},0).wait(1).to({rotation:43.3083},0).wait(1).to({rotation:44.2105,x:255,y:81.55},0).wait(1).to({rotation:45.1128,x:254.95},0).wait(1).to({rotation:46.015,y:81.5},0).wait(1).to({rotation:46.9173,x:255},0).wait(1).to({rotation:47.8195,y:81.55},0).wait(1).to({rotation:48.7218,x:254.95},0).wait(1).to({rotation:49.6241,y:81.5},0).wait(1).to({rotation:50.5263,y:81.55},0).wait(1).to({rotation:51.4286,x:255,y:81.5},0).wait(1).to({rotation:52.3308,y:81.55},0).wait(1).to({rotation:53.2331,y:81.5},0).wait(1).to({rotation:54.1353},0).wait(1).to({rotation:55.0376},0).wait(1).to({rotation:55.9398,x:254.95},0).wait(1).to({rotation:56.8421},0).wait(1).to({rotation:57.7444,x:255,y:81.55},0).wait(1).to({rotation:58.6466,y:81.5},0).wait(1).to({rotation:59.5489,x:254.95},0).wait(1).to({rotation:60.4511,x:255,y:81.55},0).wait(1).to({rotation:61.3534,y:81.5},0).wait(1).to({rotation:62.2556},0).wait(1).to({rotation:63.1579,x:254.95,y:81.55},0).wait(1).to({rotation:64.0602,x:255,y:81.5},0).wait(1).to({rotation:64.9624},0).wait(1).to({rotation:65.8647,x:254.95},0).wait(1).to({rotation:66.7669,x:255},0).wait(1).to({rotation:67.6692,x:254.95},0).wait(1).to({rotation:68.5714,x:255,y:81.55},0).wait(1).to({rotation:69.4737},0).wait(1).to({rotation:70.3759,y:81.5},0).wait(1).to({rotation:71.2782,x:254.95,y:81.55},0).wait(1).to({rotation:72.1805,x:255,y:81.5},0).wait(1).to({rotation:73.0827},0).wait(1).to({rotation:73.985,x:254.95,y:81.55},0).wait(1).to({rotation:74.8872,x:255,y:81.5},0).wait(1).to({rotation:75.7895,y:81.55},0).wait(1).to({rotation:76.6917,x:254.95,y:81.5},0).wait(1).to({rotation:77.594,x:255},0).wait(1).to({rotation:78.4962,x:254.95},0).wait(1).to({rotation:79.3985,x:255,y:81.55},0).wait(1).to({rotation:80.3008},0).wait(1).to({rotation:81.203,y:81.5},0).wait(1).to({rotation:82.1053,x:254.95},0).wait(1).to({rotation:83.0075,x:255},0).wait(1).to({rotation:83.9098},0).wait(1).to({rotation:84.812,y:81.55},0).wait(1).to({rotation:85.7143,y:81.5},0).wait(1).to({rotation:86.6165,x:254.95},0).wait(1).to({rotation:87.5188,x:255},0).wait(1).to({rotation:88.4211,x:254.95},0).wait(1).to({rotation:89.3233,y:81.55},0).wait(1).to({rotation:90.2256},0).wait(1).to({rotation:91.1278,x:255},0).wait(1).to({rotation:92.0301},0).wait(1).to({rotation:92.9323,y:81.5},0).wait(1).to({rotation:93.8346},0).wait(1).to({rotation:94.7368},0).wait(1).to({rotation:95.6391},0).wait(1).to({rotation:96.5414},0).wait(1).to({rotation:97.4436},0).wait(1).to({rotation:98.3459,y:81.55},0).wait(1).to({rotation:99.2481},0).wait(1).to({rotation:100.1504},0).wait(1).to({rotation:101.0526},0).wait(1).to({rotation:101.9549},0).wait(1).to({rotation:102.8571,x:254.95,y:81.5},0).wait(1).to({rotation:103.7594,x:255,y:81.55},0).wait(1).to({rotation:104.6617},0).wait(1).to({rotation:105.5639,y:81.5},0).wait(1).to({rotation:106.4662,x:254.95,y:81.55},0).wait(1).to({rotation:107.3684,x:255},0).wait(1).to({rotation:108.2707},0).wait(1).to({rotation:109.1729},0).wait(1).to({rotation:110.0752,x:254.95},0).wait(1).to({rotation:110.9774},0).wait(1).to({rotation:111.8797},0).wait(1).to({rotation:112.782,y:81.5},0).wait(1).to({rotation:113.6842,x:255},0).wait(1).to({rotation:114.5865,x:254.95,y:81.55},0).wait(1).to({rotation:115.4887,x:255,y:81.5},0).wait(1).to({rotation:116.391},0).wait(1).to({rotation:117.2932},0).wait(1).to({rotation:118.1955,x:254.95,y:81.55},0).wait(1).to({rotation:119.0977,x:255,y:81.5},0).wait(1).to({rotation:120},0).wait(1).to({rotation:120.9023,y:81.55},0).wait(1).to({rotation:121.8045},0).wait(1).to({rotation:122.7068,y:81.5},0).wait(1).to({rotation:123.609,x:254.95,y:81.55},0).wait(1).to({rotation:124.5113,x:255,y:81.5},0).wait(1).to({rotation:125.4135,x:254.95},0).wait(1).to({rotation:126.3158,y:81.55},0).wait(1).to({rotation:127.218},0).wait(1).to({rotation:128.1203,y:81.5},0).wait(1).to({rotation:129.0226,x:255,y:81.55},0).wait(1).to({rotation:129.9248,y:81.5},0).wait(1).to({rotation:130.8271,x:254.95,y:81.55},0).wait(1).to({rotation:131.7293,x:255},0).wait(1).to({rotation:132.6316,x:254.95,y:81.5},0).wait(1).to({rotation:133.5338,x:255},0).wait(1).to({rotation:134.4361,x:254.95},0).wait(1).to({rotation:135.3383,y:81.55},0).wait(1).to({rotation:136.2406,x:255,y:81.5},0).wait(1).to({rotation:137.1429,y:81.45},0).wait(1).to({rotation:138.0451,x:254.95},0).wait(1).to({rotation:138.9474,x:255,y:81.5},0).wait(1).to({rotation:139.8496},0).wait(1).to({rotation:140.7519},0).wait(1).to({rotation:141.6541,y:81.45},0).wait(1).to({rotation:142.5564,y:81.5},0).wait(1).to({rotation:143.4586,y:81.45},0).wait(1).to({rotation:144.3609},0).wait(1).to({rotation:145.2632,y:81.5},0).wait(1).to({rotation:146.1654,x:254.95,y:81.45},0).wait(1).to({rotation:147.0677},0).wait(1).to({rotation:147.9699},0).wait(1).to({rotation:148.8722,x:255},0).wait(1).to({rotation:149.7744,y:81.5},0).wait(1).to({rotation:150.6767,x:255.05,y:81.45},0).wait(1).to({rotation:151.5789,x:255,y:81.5},0).wait(1).to({rotation:152.4812,x:254.95,y:81.45},0).wait(1).to({rotation:153.3835,x:255,y:81.5},0).wait(1).to({rotation:154.2857,x:254.95},0).wait(1).to({rotation:155.188},0).wait(1).to({rotation:156.0902,x:255},0).wait(1).to({rotation:156.9925,x:254.95,y:81.45},0).wait(1).to({rotation:157.8947,x:255},0).wait(1).to({rotation:158.797},0).wait(1).to({rotation:159.6992,x:254.95},0).wait(1).to({rotation:160.6015,y:81.5},0).wait(1).to({rotation:161.5038,x:255},0).wait(1).to({rotation:162.406,x:254.95},0).wait(1).to({rotation:163.3083},0).wait(1).to({rotation:164.2105},0).wait(1).to({rotation:165.1128,x:255},0).wait(1).to({rotation:166.015},0).wait(1).to({rotation:166.9173},0).wait(1).to({rotation:167.8195,y:81.45},0).wait(1).to({rotation:168.7218,y:81.5},0).wait(1).to({rotation:169.6241,x:254.95},0).wait(1).to({rotation:170.5263,x:255.05,y:81.45},0).wait(1).to({rotation:171.4286,x:254.95},0).wait(1).to({rotation:172.3308,x:255},0).wait(1).to({rotation:173.2331,y:81.5},0).wait(1).to({rotation:174.1353},0).wait(1).to({rotation:175.0376},0).wait(1).to({rotation:175.9398,x:254.95},0).wait(1).to({rotation:176.8421,y:81.45},0).wait(1).to({rotation:177.7444,y:81.5},0).wait(1).to({rotation:178.6466,x:255},0).wait(1).to({rotation:179.5489},0).wait(1).to({rotation:180.4511},0).wait(1).to({rotation:181.3534},0).wait(1).to({rotation:182.2556,x:254.95},0).wait(1).to({rotation:183.1579,y:81.45},0).wait(1).to({rotation:184.0602,x:255},0).wait(1).to({rotation:184.9624,x:254.95,y:81.5},0).wait(1).to({rotation:185.8647},0).wait(1).to({rotation:186.7669},0).wait(1).to({rotation:187.6692,x:255},0).wait(1).to({rotation:188.5714,x:254.95},0).wait(1).to({rotation:189.4737,y:81.45},0).wait(1).to({rotation:190.3759,x:255},0).wait(1).to({rotation:191.2782,x:254.95},0).wait(1).to({rotation:192.1805,y:81.5},0).wait(1).to({rotation:193.0827,y:81.45},0).wait(1).to({rotation:193.985,y:81.5},0).wait(1).to({rotation:194.8872,x:255},0).wait(1).to({rotation:195.7895},0).wait(1).to({rotation:196.6917,x:254.95},0).wait(1).to({rotation:197.594},0).wait(1).to({rotation:198.4962},0).wait(1).to({rotation:199.3985,x:255,y:81.55},0).wait(1).to({rotation:200.3008,x:254.95,y:81.45},0).wait(1).to({rotation:201.203},0).wait(1).to({rotation:202.1053,y:81.5},0).wait(1).to({rotation:203.0075},0).wait(1).to({rotation:203.9098},0).wait(1).to({rotation:204.812,x:255,y:81.45},0).wait(1).to({rotation:205.7143,y:81.5},0).wait(1).to({rotation:206.6165,x:254.95,y:81.45},0).wait(1).to({rotation:207.5188,x:255,y:81.5},0).wait(1).to({rotation:208.4211,x:254.95},0).wait(1).to({rotation:209.3233,y:81.45},0).wait(1).to({rotation:210.2256,y:81.5},0).wait(1).to({rotation:211.1278,x:255},0).wait(1).to({rotation:212.0301},0).wait(1).to({rotation:212.9323},0).wait(1).to({rotation:213.8346},0).wait(1).to({rotation:214.7368},0).wait(1).to({rotation:215.6391},0).wait(1).to({rotation:216.5414},0).wait(1).to({rotation:217.4436},0).wait(1).to({rotation:218.3459,x:254.95,y:81.45},0).wait(1).to({rotation:219.2481,x:255,y:81.5},0).wait(1).to({rotation:220.1504,x:254.95},0).wait(1).to({rotation:221.0526,x:255},0).wait(1).to({rotation:221.9549,y:81.45},0).wait(1).to({rotation:222.8571,x:254.9},0).wait(1).to({rotation:223.7594,x:254.95,y:81.55},0).wait(1).to({rotation:224.6617,x:255,y:81.45},0).wait(1).to({rotation:225.5639,y:81.5},0).wait(1).to({rotation:226.4662},0).wait(1).to({rotation:227.3684},0).wait(1).to({rotation:228.2707},0).wait(1).to({rotation:229.1729,x:254.95,y:81.45},0).wait(1).to({rotation:230.0752,y:81.5},0).wait(1).to({rotation:230.9774,x:255},0).wait(1).to({rotation:231.8797,y:81.45},0).wait(1).to({rotation:232.782,y:81.5},0).wait(1).to({rotation:233.6842,y:81.45},0).wait(1).to({rotation:234.5865},0).wait(1).to({rotation:235.4887,x:254.95},0).wait(1).to({rotation:236.391,x:255},0).wait(1).to({rotation:237.2932},0).wait(1).to({rotation:238.1955,y:81.5},0).wait(1).to({rotation:239.0977},0).wait(1).to({rotation:240,x:254.95},0).wait(1).to({rotation:240.9023,x:255},0).wait(1).to({rotation:241.8045,x:254.95,y:81.45},0).wait(1).to({rotation:242.7068,x:255,y:81.5},0).wait(1).to({rotation:243.609,x:254.95,y:81.45},0).wait(1).to({rotation:244.5113,x:255},0).wait(1).to({rotation:245.4135,x:254.95,y:81.5},0).wait(1).to({rotation:246.3158,x:255.05,y:81.45},0).wait(1).to({rotation:247.218,x:255,y:81.5},0).wait(1).to({rotation:248.1203,x:255.05,y:81.45},0).wait(1).to({rotation:249.0226,y:81.5},0).wait(1).to({rotation:249.9248,y:81.45},0).wait(1).to({rotation:250.8271,y:81.5},0).wait(1).to({rotation:251.7293,x:255,y:81.45},0).wait(1).to({rotation:252.6316,y:81.55},0).wait(1).to({rotation:253.5338,y:81.45},0).wait(1).to({rotation:254.4361,x:255.05},0).wait(1).to({rotation:255.3383,y:81.5},0).wait(1).to({rotation:256.2406,x:255},0).wait(1).to({rotation:257.1429,y:81.45},0).wait(1).to({rotation:258.0451,y:81.5},0).wait(1).to({rotation:258.9474},0).wait(1).to({rotation:259.8496},0).wait(1).to({rotation:260.7519,x:255.05,y:81.45},0).wait(1).to({rotation:261.6541,x:255,y:81.5},0).wait(1).to({rotation:262.5564,x:255.05},0).wait(1).to({rotation:263.4586,y:81.45},0).wait(1).to({rotation:264.3609,x:255},0).wait(1).to({rotation:265.2632,x:255.1,y:81.5},0).wait(1).to({rotation:266.1654,x:255},0).wait(1).to({rotation:267.0677},0).wait(1).to({rotation:267.9699,x:255.05},0).wait(1).to({rotation:268.8722,x:255},0).wait(1).to({rotation:269.7744,y:81.45},0).wait(1).to({rotation:270.6767},0).wait(1).to({rotation:271.5789},0).wait(1).to({rotation:272.4812,x:255.05},0).wait(1).to({rotation:273.3835,x:255,y:81.5},0).wait(1).to({rotation:274.2857},0).wait(1).to({rotation:275.188,x:255.05,y:81.45},0).wait(1).to({rotation:276.0902,x:255},0).wait(1).to({rotation:276.9925,y:81.5},0).wait(1).to({rotation:277.8947,x:254.95,y:81.45},0).wait(1).to({rotation:278.797,x:255},0).wait(1).to({rotation:279.6992},0).wait(1).to({rotation:280.6015,x:255.05},0).wait(1).to({rotation:281.5038,y:81.5},0).wait(1).to({rotation:282.406,x:255},0).wait(1).to({rotation:283.3083,x:255.05},0).wait(1).to({rotation:284.2105,x:255},0).wait(1).to({rotation:285.1128,y:81.45},0).wait(1).to({rotation:286.015,x:255.05},0).wait(1).to({rotation:286.9173,x:255,y:81.5},0).wait(1).to({rotation:287.8195},0).wait(1).to({rotation:288.7218,y:81.45},0).wait(1).to({rotation:289.6241,x:255.05,y:81.5},0).wait(1).to({rotation:290.5263},0).wait(1).to({rotation:291.4286,x:255},0).wait(1).to({rotation:292.3308,y:81.45},0).wait(1).to({rotation:293.2331,y:81.5},0).wait(1).to({rotation:294.1353,y:81.45},0).wait(1).to({rotation:295.0376,x:255.05,y:81.5},0).wait(1).to({rotation:295.9398},0).wait(1).to({rotation:296.8421,x:255,y:81.45},0).wait(1).to({rotation:297.7444,x:255.05,y:81.5},0).wait(1).to({rotation:298.6466,x:255,y:81.45},0).wait(1).to({rotation:299.5489},0).wait(1).to({rotation:300.4511},0).wait(1).to({rotation:301.3534},0).wait(1).to({rotation:302.2556,x:255.05},0).wait(1).to({rotation:303.1579},0).wait(1).to({rotation:304.0602,x:255},0).wait(1).to({rotation:304.9624,y:81.5},0).wait(1).to({rotation:305.8647,y:81.45},0).wait(1).to({rotation:306.7669,x:255.05},0).wait(1).to({rotation:307.6692,y:81.5},0).wait(1).to({rotation:308.5714,x:255,y:81.45},0).wait(1).to({rotation:309.4737,x:254.95},0).wait(1).to({rotation:310.3759,x:255,y:81.5},0).wait(1).to({rotation:311.2782},0).wait(1).to({rotation:312.1805,x:255.05,y:81.45},0).wait(1).to({rotation:313.0827,x:255},0).wait(1).to({rotation:313.985,x:255.05},0).wait(1).to({rotation:314.8872},0).wait(1).to({rotation:315.7895,x:255,y:81.5},0).wait(1).to({rotation:316.6917,x:255.05},0).wait(1).to({rotation:317.594,x:255},0).wait(1).to({rotation:318.4962},0).wait(1).to({rotation:319.3985,x:255.05},0).wait(1).to({rotation:320.3008,x:254.95,y:81.45},0).wait(1).to({rotation:321.203,y:81.5},0).wait(1).to({rotation:322.1053,x:255,y:81.45},0).wait(1).to({rotation:323.0075},0).wait(1).to({rotation:323.9098,x:255.05},0).wait(1).to({rotation:324.812,x:255,y:81.5},0).wait(1).to({rotation:325.7143},0).wait(1).to({rotation:326.6165},0).wait(1).to({rotation:327.5188},0).wait(1).to({rotation:328.4211},0).wait(1).to({rotation:329.3233,x:255.05,y:81.45},0).wait(1).to({rotation:330.2256,y:81.55},0).wait(1).to({rotation:331.1278,x:255},0).wait(1).to({rotation:332.0301,y:81.5},0).wait(1).to({rotation:332.9323,y:81.55},0).wait(1).to({rotation:333.8346,x:255.05},0).wait(1).to({rotation:334.7368,x:255,y:81.5},0).wait(1).to({rotation:335.6391,y:81.6},0).wait(1).to({rotation:336.5414,y:81.55},0).wait(1).to({rotation:337.4436,y:81.5},0).wait(1).to({rotation:338.3459},0).wait(1).to({rotation:339.2481,x:255.05,y:81.6},0).wait(1).to({rotation:340.1504,x:255,y:81.5},0).wait(1).to({rotation:341.0526},0).wait(1).to({rotation:341.9549,y:81.55},0).wait(1).to({rotation:342.8571,x:255.05,y:81.5},0).wait(1).to({rotation:343.7594,x:255,y:81.55},0).wait(1).to({rotation:344.6617,x:254.95,y:81.5},0).wait(1).to({rotation:345.5639,x:255,y:81.55},0).wait(1).to({rotation:346.4662,x:255.05,y:81.5},0).wait(1).to({rotation:347.3684},0).wait(1).to({rotation:348.2707,x:255,y:81.6},0).wait(1).to({rotation:349.1729,y:81.55},0).wait(1).to({rotation:350.0752},0).wait(1).to({rotation:350.9774,x:255.05},0).wait(1).to({rotation:351.8797,x:255,y:81.5},0).wait(1).to({rotation:352.782},0).wait(1).to({rotation:353.6842,y:81.55},0).wait(1).to({rotation:354.5865,x:255.05},0).wait(1).to({rotation:355.4887,x:254.95,y:81.5},0).wait(1).to({rotation:356.391,x:255,y:81.55},0).wait(1).to({rotation:357.2932},0).wait(1).to({rotation:358.1955},0).wait(1).to({rotation:359.0977,y:81.5},0).wait(1);
	this.timeline.addTween(_tweenStr_1.to({rotation:360},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-563.2,-736.6,1636.4,1636.3000000000002);


(lib.Shine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	mask.setTransform(1140.7,764.2);

	// Globe_ani_CORRECT
	this.instance = new lib.GlobeaniCORRECT("synched",0);
	this.instance.setTransform(1114.95,1001.95,1.2294,0.8693,0,0,0,239.3,239.4);
	this.instance.alpha = 0.7383;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(400));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFF2B5","rgba(255,242,181,0)"],[0,1],-12.8,-108.8,-12.8,300.2).s().p("Eg0EAv1Qp3u1AAy6QAA5pSJyJQSJyIZpAAQZqAASJSIQSJSJAAZpQAAS6p2O1g");
	this.shape.setTransform(1144.8,835.425);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(400));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape_1.setTransform(1140.7,764.2);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(400));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500.7,404.2,1280,720);


(lib.LeButton8 = function(mode,startPosition,loop,reversed) {
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
	this.LeButton7 = new lib.LeButton7();
	this.LeButton7.name = "LeButton7";
	this.LeButton7.setTransform(50,25,1,1,0,0,0,50,25);
	new cjs.ButtonHelper(this.LeButton7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.LeButton7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.PracticeCardESoto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,18,20,25,29,33,39,59,104];
	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		
		this.LeButton1.addEventListener("click", fl_ClickToPlay1.bind(this));
		
		function fl_ClickToPlay1()
		{
			// Actions you want the button to do go here
			this.gotoAndPlay(1);
		}
		
		this.LeButton2.addEventListener("click", fl_ClickToPlay19.bind(this));
		
		function fl_ClickToPlay19()
		{
			// Actions you want the button to do go here
			this.gotoAndPlay(19);
			
		}
		
		this.LeButton3.addEventListener("click", fl_ClickToPlay21.bind(this));
		
		function fl_ClickToPlay21()
		{
			// Actions you want the button to do go here
			this.gotoAndPlay(21); 
		}
		
		this.stop()
		
		this.LeButton4.addEventListener("click", fl_ClickToPlay26.bind(this));
		
		function fl_ClickToPlay26()
		{
			// Actions you want the button to do go here
			this.gotoAndPlay(26);
		}
		
		this.LeButton5.addEventListener("click", fl_ClickToPlay30.bind(this));
		
		function fl_ClickToPlay30()
		{
			// Actions you want the button to do go here
			this.gotoAndPlay(30);
			
		}
		
		this.LeButton6.addEventListener("click", fl_ClickToPlay34.bind(this));
		
		function fl_ClickToPlay34()
		{
			// Actions you want the button to do go here
			this.gotoAndPlay(34); 
		}
		
		this.LeButton7.addEventListener("click", fl_ClickToPlay40.bind(this));
		
		function fl_ClickToPlay40()
		{
			// Actions you want the button to do go here
			this.gotoAndPlay(40); 
		}
		this.LeButton8.addEventListener("click", fl_ClickToPlay60.bind(this));
		
		function fl_ClickToPlay60()
		{
			// Actions you want the button to do go here
			this.gotoAndPlay(60); 
		}
	}
	this.frame_18 = function() {
		this.stop()
	}
	this.frame_20 = function() {
		this.stop()
	}
	this.frame_25 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.stop()
	}
	this.frame_33 = function() {
		this.stop()
	}
	this.frame_39 = function() {
		this.stop()
	}
	this.frame_59 = function() {
		this.stop()
	}
	this.frame_104 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(2).call(this.frame_20).wait(5).call(this.frame_25).wait(4).call(this.frame_29).wait(4).call(this.frame_33).wait(6).call(this.frame_39).wait(20).call(this.frame_59).wait(45).call(this.frame_104).wait(1));

	// Animated Doll
	this.instance = new lib.AnimatedDoll("synched",0);
	this.instance.setTransform(538.95,535.5,0.4107,0.4107,0,0,0,111.7,134.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).wait(7).to({regX:111.5,regY:134.3,scaleX:0.2348,scaleY:0.2348,x:543.8,y:467.5,startPosition:7},0).wait(6).to({regX:111.7,regY:134.5,scaleX:0.2543,scaleY:0.2543,x:651.55,y:495.8,startPosition:13},0).to({_off:true},13).wait(45));

	// MESSAGES
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBzQgFgFAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgLAyIgDiqIAcAAIgDCqg");
	this.shape.setTransform(590.075,633.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABdBXIAAhhQAAgcgIgMQgJgNgVAAQgRAAgMAQQgMAQAAAWIAABgIgbAAIAAhkQAAgygmAAQgSAAgMAPQgLAPAAAYIAABgIgcAAIAAipIAcAAIAAAbIAAAAQASgfAjAAQARAAANAKQAMAKAFAPQATgjAmAAQA4AAAABFIAABog");
	this.shape_1.setTransform(570.775,636.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag8BBQgXgXAAgoQAAgqAYgYQAXgYAnAAQAmAAAVAXQAWAYAAApQAAAogXAZQgXAYgmAAQgmAAgWgYgAgogvQgPARAAAfQAAAeAQARQAPASAZAAQAaAAAPgRQAOgRAAgfQAAgggOgRQgPgRgaAAQgZAAgQASg");
	this.shape_2.setTransform(546.025,636.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABdBXIAAhhQAAgcgIgMQgJgNgVAAQgRAAgMAQQgMAQAAAWIAABgIgbAAIAAhkQAAgygmAAQgSAAgMAPQgLAPAAAYIAABgIgcAAIAAipIAcAAIAAAbIAAAAQASgfAjAAQARAAANAKQAMAKAFAPQATgjAmAAQA4AAAABFIAABog");
	this.shape_3.setTransform(521.575,636.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNB8IAAipIAaAAIAACpgAgMhdQgFgFAAgIQAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHQAAAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_4.setTransform(493.375,632.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA+B3IAAhtIh6AAIAABtIgcAAIAAjtIAcAAIAABoIB6AAIAAhoIAcAAIAADtg");
	this.shape_5.setTransform(477.1,633.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMB2QgGgFAAgHQAAgJAGgFQAFgGAHABQAIgBAFAGQAGAFAAAJQAAAHgGAFQgFAGgIAAQgHAAgFgGgAgLA0IgDivIAcAAIgDCvg");
	this.shape_6.setTransform(695.225,631.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhLB+IAAgZQAIADAIAAQAVAAALgZIAOghIhEiuIAeAAIAwCGIADANIAAAAIAEgNIAxiGIAdAAIhQDKQgVA3gmAAQgMAAgGgDg");
	this.shape_7.setTransform(681.8,638.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag1BOQgPgOAAgXQAAgwA5gIIA0gHQAAgtgkAAQgfAAgZAVIAAgcQAagRAhAAQA9ABAABAIAABxIgcAAIAAgbIgBAAQgSAggjAAQgaAAgOgOgAAAAFQgTACgLAHQgJAHgBASQAAANAKAIQAJAIAPAAQAUAAAOgPQANgOAAgXIAAgQg");
	this.shape_8.setTransform(663.95,634.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhiB6IAAjzIBEAAQCBAAAAB3QAAA3gkAjQgkAig8AAgAhFBgIAlAAQAvAAAbgaQAbgZAAgvQAAhehkABIgmAAg");
	this.shape_9.setTransform(644.025,631.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag5BRIAAgeQAXARAbAAQAkAAAAgZQAAgGgDgFQgDgFgFgEQgGgEgHgDIgPgGQgMgEgIgGQgJgDgGgGQgGgGgDgHQgDgIAAgKQAAgNAGgJQAFgJAKgGQAJgHAMgDQAMgEAMAAQAXABASAHIAAAcQgUgMgZAAQgGAAgHACQgGACgEADQgFADgCAEQgDAFAAAGQAAAGADAFQACAFAFADQAFAEAGACIAPAHQALAFAKAEQAJAEAHAGQAGAFAEAJQADAHAAALQAAAMgGAKQgFAKgKAGQgKAGgNADQgLADgNABQgcAAgTgLg");
	this.shape_10.setTransform(614.1,634.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgsBZIAAiuIAcAAIAAAkIAAAAQAGgTALgKQAMgKAQAAQALAAAGACIAAAdQgIgFgNAAQgTgBgLASQgMARABAcIAABZg");
	this.shape_11.setTransform(601.5,634.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag2BEQgVgYAAgsQAAgnAXgaQAXgZAhgBQAjAAASAXQATAWAAAoIAAANIh6AAQAAAdAPAQQAPAQAaAAQAdAAAZgTIAAAaQgXAQgmABQgkAAgVgYgAgdg1QgOAPgDAXIBeAAQgBgZgLgOQgMgNgUAAQgTAAgOAOg");
	this.shape_12.setTransform(585.075,634.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAsCBIAAhkQAAg2goAAQgTAAgPAQQgNAOAAAZIAABjIgdAAIAAkCIAdAAIAAByIAAAAQAUgiAlAAQA6AAABBGIAABsg");
	this.shape_13.setTransform(566.1,630.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUBAIAAhnIgeAAIAAgXIAeAAIAAgrIAbgJIAAA0IAsAAIAAAXIgsAAIAABiQAAARAGAIQAGAHAOABQALgBAHgFIAAAYQgKAGgQAAQgtAAAAg0g");
	this.shape_14.setTransform(550,632.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag+BDQgXgYAAgpQAAgrAYgZQAYgYAogBQAnAAAXAZQAVAYAAAqQAAApgXAaQgYAZgnAAQgnAAgXgZgAgpgwQgQASAAAfQAAAfAQASQAQASAaAAQAbAAAPgSQAOgRAAghQAAgfgOgSQgPgSgbAAQgaAAgQATg");
	this.shape_15.setTransform(533.9,634.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABhB6IAAijQAAgTACgcIgBAAQgEAQgDAHIhUC7IgNAAIhTi6QgEgHgEgRIAAAAQABAOAAAiIAACiIgcAAIAAjzIAmAAIBMCqQAIATACAJIABAAIALgdIBNipIAkAAIAADzg");
	this.shape_16.setTransform(507.9,631.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhMB+IAAgZQAJADAIAAQAVAAALgZIAOghIhEiuIAeAAIAwCGIADANIABAAIADgNIAyiGIAcAAIhQDKQgVA3gnAAQgLAAgHgDg");
	this.shape_17.setTransform(474.15,638.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhPCCIAAj/IAcAAIAAAfIAAAAQAVgjAnAAQAhAAATAYQAUAXAAAoQgBArgVAaQgWAagkAAQghAAgTgdIAAAAIAABqgAglhYQgPARABAZIAAAZQgBAVAOAPQAPAPAVAAQAZAAAPgUQANgSAAgjQAAgdgNgRQgOgQgWAAQgYAAgPARg");
	this.shape_18.setTransform(455.95,638.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhPCCIAAj/IAcAAIAAAfIAAAAQAVgjAnAAQAhAAAUAYQATAXAAAoQgBArgVAaQgVAaglAAQgiAAgSgdIAAAAIAABqgAgkhYQgQARABAZIAAAZQgBAVAOAPQAOAPAWAAQAZAAAPgUQANgSAAgjQAAgdgNgRQgNgQgXAAQgYAAgOARg");
	this.shape_19.setTransform(435.35,638.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag1BOQgPgOAAgXQAAgwA5gIIA0gHQAAgtgkAAQgfAAgZAVIAAgcQAagRAhAAQA9ABAABAIAABxIgcAAIAAgbIgBAAQgSAggjAAQgaAAgOgOgAAAAFQgTACgLAHQgJAHgBASQAAANAKAIQAJAIAPAAQAUAAAOgPQANgOAAgXIAAgQg");
	this.shape_20.setTransform(415.1,634.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AA/B6IAAhvIh9AAIAABvIgdAAIAAjzIAdAAIAABrIB9AAIAAhrIAdAAIAADzg");
	this.shape_21.setTransform(394.225,631.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgOCIQgHgHAAgJQAAgJAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAJQAAAJgHAHQgGAGgJAAQgIAAgGgGgAgNA7IgDjIIAgAAIgDDIg");
	this.shape_22.setTransform(695.825,552.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABuBmIAAhyQAAghgLgPQgKgOgYAAQgVAAgOASQgOATAAAaIAABxIgfAAIAAh1QAAg7guAAQgUAAgPARQgNASAAAcIAABxIggAAIAAjHIAgAAIAAAgIABAAQAVgkApAAQAVAAAPALQAOALAFATQAXgpAsAAQBCAAAABRIAAB6g");
	this.shape_23.setTransform(673.15,555.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhHBNQgagdAAguQAAgxAbgdQAcgcAtAAQAtABAZAbQAZAcAAAwQAAAvgbAdQgbAcgsAAQgtAAgagbgAgvg3QgSAVAAAjQAAAjASAVQATAUAdAAQAfABARgVQARgTAAglQAAglgRgVQgRgTgfgBQgeAAgSAWg");
	this.shape_24.setTransform(643.975,556.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABuBmIAAhyQAAghgKgPQgLgOgYAAQgUAAgPASQgOATAAAaIAABxIgfAAIAAh1QAAg7gtAAQgWAAgNARQgOASAAAcIAABxIggAAIAAjHIAgAAIAAAgIAAAAQAWgkApAAQAUAAAPALQAPALAGATQAWgpAsAAQBCAAAABRIAAB6g");
	this.shape_25.setTransform(615.25,555.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgaAwIAXhfIAeAAIgeBfg");
	this.shape_26.setTransform(581.65,566.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgPCSIAAjHIAeAAIAADHgAgOhtQgGgGAAgJQAAgJAGgGQAGgGAIAAQAIAAAHAGQAGAGAAAJQAAAIgGAGQgHAGgIAAQgIAAgGgFg");
	this.shape_27.setTransform(573.4,551.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ABICMIAAh/IiQAAIAAB/IggAAIAAkXIAgAAIAAB7ICQAAIAAh7IAhAAIAAEXg");
	this.shape_28.setTransform(554.3,552.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2,1,1).p("AOngkQgUDOgbAmQgcAmn8ATQn8ATmCgkQmCgjgHjrQgHjsGjgHQGigICvAEQCwAEFjALQFiALgUDPg");
	this.shape_29.setTransform(611.5702,553.2973);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCF5FF").s().p("AoeD4QmCgjgHjrQgHjsGjgHQGigICvAEQCwAEFjALQFiALgUDPQgUDOgbAmQgcAmn8ATQivAGifAAQkyAAj+gXg");
	this.shape_30.setTransform(611.5702,553.2973);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhEBuIAAgdQAYATAfAAQANAAAJgDQAKgEAHgFQAHgHAEgIQAEgJAAgKQAAgvhBABIgUAAIAAgXIATAAQA5ABAAgtQAAgogrAAQgaAAgWARIAAgaQAXgOAfAAQAOAAAMAEQANAFAIAGQAJAIAFAKQAEALAAANQAAAugvAOIAAABQAMABAKAEQALAFAHAGQAHAIAFAKQAEAKAAAMQAAAQgGANQgGANgLAKQgLAJgQAFQgPAFgSAAQgiAAgUgNg");
	this.shape_31.setTransform(644.675,632.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhGAJIAAgJICNhQIAAAZIhpA6IAAABIBpA0IAAAZg");
	this.shape_32.setTransform(624.15,634.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgMBzQgFgFAAgIQAAgIAFgEQAFgGAHAAQAIAAAFAGQAFAEAAAIQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgLAyIgDiqIAcAAIgDCqg");
	this.shape_33.setTransform(598.375,632.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhFAPIAAhlIAbAAIAABgQgBA2ApAAQAUAAAMgOQANgQAAgXIAAhhIAbAAIAACpIgbAAIAAgbIgBAAQgQAfgjAAQg8AAAAhIg");
	this.shape_34.setTransform(583.75,635.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag8BBQgXgYAAgnQAAgqAYgYQAXgYAnAAQAmAAAVAYQAWAXAAApQAAAogXAYQgXAZgmAAQgmAAgWgYgAgogvQgPARAAAfQAAAeAQARQAPASAZAAQAaAAAPgRQAOgRAAgfQAAgggOgRQgPgRgaAAQgZAAgQASg");
	this.shape_35.setTransform(564.375,635.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhKB7IAAgZQAJADAHABQAVAAAKgZIAOghIhCioIAeAAIAuCCIADANIAAAAIAEgNIAwiCIAcAAIhODEQgUA1gmAAQgKAAgIgCg");
	this.shape_36.setTransform(546.375,639.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag1BCQgUgYAAgpQAAgnAXgZQAWgZAhAAQAhAAASAVQASAWAAAnIAAANIh3AAQABAcAPAPQAOAQAYAAQAdAAAYgTIAAAaQgWAQglAAQgjAAgVgXgAgcgzQgOANgDAWIBbAAQAAgXgLgNQgLgNgUAAQgSAAgOAOg");
	this.shape_37.setTransform(520,635.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgOBVIhAipIAdAAIAsB6QAEAOABALIAAAAQACgOAEgKIAth7IAcAAIhDCpg");
	this.shape_38.setTransform(503.075,635.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag8BBQgXgYAAgnQAAgqAYgYQAXgYAnAAQAmAAAVAYQAWAXAAApQAAAogXAYQgXAZgmAAQgmAAgWgYgAgogvQgPARAAAfQAAAeAQARQAPASAZAAQAaAAAPgRQAOgRAAgfQAAgggOgRQgPgRgaAAQgZAAgQASg");
	this.shape_39.setTransform(484.975,635.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgNB+IAAj7IAbAAIAAD7g");
	this.shape_40.setTransform(470.875,631.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgkB3IAAgYIAXAAIAAi9IgXAAIAAgYIBJAAIAAAYIgXAAIAAC9IAXAAIAAAYg");
	this.shape_41.setTransform(452.925,632.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgKBfQgEgFAAgGQAAgGAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAQgFAAgFgEgAgJAqIgCiMIAXAAIgDCMg");
	this.shape_42.setTransform(711.125,530.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag8BlIAAgUQAHACAGAAQARAAAIgTIALgbIg2iLIAZAAIAlBqIADALIABAAIACgKIAohrIAXAAIhAChQgQAsgfAAQgKAAgFgCg");
	this.shape_43.setTransform(700.4,536.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgrA+QgLgLAAgSQAAgmAugHIApgGQAAgkgdAAQgYAAgVASIAAgXQAVgNAaAAQAxgBAAA1IAABaIgWAAIAAgWIgBAAQgOAZgcAAQgVAAgMgLgAAAAEQgQACgIAFQgHAGAAAOQAAAKAHAHQAHAGAMAAQAQAAALgLQALgMAAgSIAAgNg");
	this.shape_44.setTransform(686.125,532.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhOBiIAAjDIA3AAQBmAAAABgQAAAsgdAcQgcAbgwAAgAg3BNIAeAAQAlAAAVgVQAWgUAAglQAAhLhPgBIgfAAg");
	this.shape_45.setTransform(670.15,530.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AguBBIAAgYQATANAWAAQAcAAAAgTQABgGgDgDQgDgFgEgDIgKgFIgLgFIgQgIQgIgCgFgFQgEgFgCgGQgDgGAAgIQAAgJAFgIQAEgIAHgFQAIgFAKgDQAKgCAIAAQATAAAOAGIAAAWQgQgKgUAAQgEABgGABQgFACgDACQgEACgCAEQgCAEAAAEQAAAGACADQACAEAEADQAEADAFACIALAFIARAIQAIACAFAFQAFAFADAGQADAGAAAJQAAAKgFAIQgFAHgHAFQgIAFgKADQgKADgKgBQgWAAgQgIg");
	this.shape_46.setTransform(646.2,532.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgkBHIAAiLIAXAAIAAAdIABAAQAFgPAIgIQAKgIANAAQAIAAAEACIAAAXQgFgFgLAAQgOAAgJAOQgKAOAAAWIAABHg");
	this.shape_47.setTransform(636.1,532.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgrA2QgRgTAAgjQAAgfASgVQATgUAbAAQAbAAAPASQAPASAAAfIAAALIhhAAQAAAXAMANQAMANAUgBQAXAAAVgPIAAAVQgTANgfAAQgcAAgRgTgAgWgqQgMALgCATIBKAAQAAgUgJgLQgKgLgQAAQgPAAgKAMg");
	this.shape_48.setTransform(622.95,532.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAkBoIAAhRQAAgrghAAQgPAAgLANQgMAMAAATIAABQIgWAAIAAjPIAWAAIAABbIABAAQAQgbAdAAQAvAAAAA4IAABXg");
	this.shape_49.setTransform(607.775,529.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgQAzIAAhSIgYAAIAAgTIAYAAIAAgiIAWgHIAAApIAjAAIAAATIgjAAIAABOQAAAOAEAGQAFAGALAAQAJAAAGgEIAAATQgIAEgNAAQgkAAAAgpg");
	this.shape_50.setTransform(594.875,530.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgxA2QgTgUAAghQAAghAUgVQASgTAgAAQAggBASAUQARATAAAiQAAAhgTAUQgTAUgfAAQgfAAgSgTgAghgmQgMAOAAAZQAAAYANAPQAMAOAVAAQAVABANgOQALgOAAgbQAAgZgLgOQgNgPgVAAQgVABgNAPg");
	this.shape_51.setTransform(582,532.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("ABOBiIAAiDIABgmIAAAAQgDAOgEAFIhCCWIgLAAIhCiVIgGgUIgBAAIABAnIAACCIgWAAIAAjDIAeAAIA8CHQAIARABAHIAAAAIAKgYIA9iHIAdAAIAADDg");
	this.shape_52.setTransform(561.2,530.05);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag8BlIAAgUQAHACAGAAQARAAAIgTIALgbIg2iLIAZAAIAlBqIADALIABAAIACgKIAohrIAXAAIhAChQgRAsgfAAQgIAAgGgCg");
	this.shape_53.setTransform(534.25,536.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag/BoIAAjLIAWAAIAAAYIAAAAQARgcAfAAQAbAAAPATQAQATgBAfQAAAjgRAUQgRAWgeAAQgaAAgPgYIAAAAIAABVgAgdhGQgMAOAAAUIAAATQAAARAMAMQAKAMASAAQAUAAALgPQAMgPAAgcQAAgXgMgNQgKgOgTAAQgSAAgMAOg");
	this.shape_54.setTransform(519.7,535.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhABoIAAjLIAXAAIAAAYIABAAQAQgcAfAAQAbAAAQATQAOATAAAfQABAjgSAUQgRAWgeAAQgZAAgPgYIgBAAIAABVgAgdhGQgMAOAAAUIAAATQAAARAMAMQALAMARAAQAUAAALgPQAMgPAAgcQgBgXgKgNQgLgOgTAAQgSAAgMAOg");
	this.shape_55.setTransform(503.25,535.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgrA+QgLgLAAgSQAAgmAugHIApgGQAAgkgdAAQgYAAgVASIAAgXQAVgNAaAAQAxgBAAA1IAABaIgWAAIAAgWIgBAAQgOAZgcAAQgVAAgMgLgAAAAEQgQACgIAFQgHAGAAAOQAAAKAHAHQAHAGAMAAQAQAAALgLQALgMAAgSIAAgNg");
	this.shape_56.setTransform(487.075,532.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAzBiIAAhZIhlAAIAABZIgXAAIAAjDIAXAAIAABWIBlAAIAAhWIAXAAIAADDg");
	this.shape_57.setTransform(470.325,530.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgMBzQgFgFAAgIQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIQAAAIgFAFQgFAGgIAAQgHAAgFgGgAgLAzIgDiqIAcAAIgDCqg");
	this.shape_58.setTransform(679.675,453.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("ABdBXIAAhgQAAgdgIgNQgJgMgVAAQgRAAgMAQQgMAQAAAWIAABgIgbAAIAAhkQAAgygmAAQgSAAgMAPQgLAPAAAYIAABgIgcAAIAAipIAcAAIAAAbIAAAAQASgfAjAAQARAAANAKQAMAKAFAPQATgjAmAAQA4AAAABFIAABog");
	this.shape_59.setTransform(660.375,456.35);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag8BBQgXgYAAgnQAAgqAYgYQAXgYAnAAQAmAAAVAYQAWAXAAApQAAAogXAYQgXAZgmAAQgmAAgWgYgAgogvQgPASAAAeQAAAeAQASQAPARAZAAQAaAAAPgRQAOgRAAggQAAgegOgSQgPgRgaAAQgZAAgQASg");
	this.shape_60.setTransform(635.625,456.55);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("ABdBXIAAhgQAAgdgIgNQgJgMgVAAQgRAAgMAQQgMAQAAAWIAABgIgbAAIAAhkQAAgygmAAQgSAAgMAPQgLAPAAAYIAABgIgcAAIAAipIAcAAIAAAbIAAAAQASgfAjAAQARAAANAKQAMAKAFAPQATgjAmAAQA4AAAABFIAABog");
	this.shape_61.setTransform(611.175,456.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgWApIAThRIAaAAIgaBRg");
	this.shape_62.setTransform(582.65,465.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AA+B3IAAhsIh6AAIAABsIgcAAIAAjtIAcAAIAABpIB6AAIAAhpIAbAAIAADtg");
	this.shape_63.setTransform(559.35,453.15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(2,1,1).p("ASumnQgUDQgbAmQgcAmn8ATQn9ASmBgjQmCgkgHjrQgHjsGjgIQGhgHCwAEQCwAEFjAKQFiAMgUDOgAUmFdQgcDPgnAmQgnAmrMATQrNATofgkQoggjgKjsQgKjsJOgHQJOgID2AEQD4AEH0ALQHzALgbDPg");
	this.shape_64.setTransform(585.2635,491.9723);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CCF5FF").s().p("Ar8J6QoggjgKjsQgKjsJOgHQJOgID2AEQD4AEH0ALQHzALgbDPQgcDPgnAmQgnAmrMATQj2AHjhAAQmwAAllgYgAkXiJQmCgkgHjrQgHjsGjgIQGhgHCwAEQCwAEFjAKQFiAMgUDOQgUDQgbAmQgcAmn8ATQiuAGigAAQkyAAj+gXg");
	this.shape_65.setTransform(585.2635,491.9723);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ag8BBQgXgYAAgnQAAgqAYgYQAXgYAnAAQAmAAAVAXQAWAYAAApQAAAogXAYQgXAZgmAAQgmAAgWgYgAgogvQgPASAAAeQAAAeAQASQAPARAZAAQAaAAAPgRQAOgRAAggQAAgegOgSQgPgRgaAAQgZAAgQASg");
	this.shape_66.setTransform(627.625,351.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AA+B3IAAhsIh6AAIAABsIgcAAIAAjtIAcAAIAABpIB6AAIAAhpIAcAAIAADtg");
	this.shape_67.setTransform(551.35,347.85);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("Ag8BlIAAgUQAHACAGAAQARAAAJgTIAKgbIg2iLIAZAAIAlBqIADAMIAAAAIADgLIAohrIAXAAIhAChQgRAsgfAAQgIAAgGgCg");
	this.shape_68.setTransform(697.85,432.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgrA+QgLgLAAgSQAAgmAugHIApgGQAAgkgdAAQgYAAgVASIAAgXQAVgNAagBQAxAAAAA1IAABaIgWAAIAAgWIgBAAQgOAZgcAAQgVAAgMgLgAAAAEQgQACgIAFQgHAGAAAOQAAALAHAGQAHAGAMAAQAQAAALgLQALgMAAgSIAAgNg");
	this.shape_69.setTransform(683.575,429);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AhOBiIAAjDIA3AAQBmAAAABgQAAAsgcAcQgeAbgvAAgAg3BNIAdAAQAmAAAWgVQAVgUAAglQAAhLhPgBIgfAAg");
	this.shape_70.setTransform(667.6,426.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgtBBIAAgYQASANAWAAQAcAAABgUQgBgFgCgEQgCgEgEgDIgLgFIgMgFIgQgIQgHgDgFgEQgEgFgDgGQgCgFAAgJQAAgJAFgIQAEgIAIgFQAHgFAKgDQAJgCAJgBQATABAOAGIAAAWQgQgKgTAAQgGABgFABQgFACgEACQgDACgCAEQgCAEAAAEQAAAGACADQACAEAEADQAEADAFACIAMAFIAQAIQAHACAGAFQAFAFADAGQACAGAAAJQABAKgFAIQgEAHgJAFQgHAFgKADQgKACgKAAQgWABgPgJg");
	this.shape_71.setTransform(643.65,429);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgjBHIAAiLIAWAAIAAAdIAAAAQAFgPAJgIQAKgIANAAQAIAAAFACIAAAXQgGgFgLAAQgOAAgJAOQgKAOAAAWIAABHg");
	this.shape_72.setTransform(633.55,428.875);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgrA2QgRgTAAgjQAAgfASgVQATgUAagBQAcABAPARQAPASAAAgIAAALIhhAAQAAAXAMANQAMANAUgBQAXAAAVgPIAAAVQgTANgfAAQgcABgRgUgAgXgqQgLALgCATIBKAAQAAgUgJgLQgJgLgRAAQgOAAgMAMg");
	this.shape_73.setTransform(620.4,429);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgyA1QgSgTAAghQAAghATgVQAUgTAfgBQAgAAASAUQARAUAAAhQAAAhgTAUQgTAUgfAAQgfABgTgVgAghgmQgMAOAAAZQAAAZANAOQANAOAUAAQAWABAMgOQALgOAAgbQAAgZgLgOQgMgPgWAAQgUABgOAPg");
	this.shape_74.setTransform(579.45,429);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("ABNBiIAAiDIACgmIgBAAQgDAOgCAFIhDCWIgLAAIhCiVIgGgUIgBAAIABAnIAACCIgWAAIAAjDIAfAAIA8CHQAHARABAHIABAAIAJgYIA+iHIAcAAIAADDg");
	this.shape_75.setTransform(558.65,426.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Ag9BlIAAgUQAIACAGAAQARAAAJgTIAKgbIg2iLIAZAAIAmBqIACAMIAAAAIADgLIAohrIAXAAIhBChQgQAsgfAAQgJAAgGgCg");
	this.shape_76.setTransform(531.7,432.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AhABoIAAjLIAXAAIAAAYIABAAQAQgcAfAAQAbAAAPATQAPATABAfQgBAjgQAUQgRAWgeAAQgaAAgPgYIgBAAIAABVgAgdhGQgMAOAAAUIAAATQAAARALAMQAMAMARAAQAUAAALgQQALgOAAgcQABgYgLgNQgLgNgSAAQgTAAgMAOg");
	this.shape_77.setTransform(517.15,432.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Ag/BoIAAjLIAWAAIAAAYIAAAAQARgcAfAAQAbAAAPATQAPATAAAfQAAAjgRAUQgQAWgeAAQgbAAgPgYIAAAAIAABVgAgdhGQgMAOAAAUIAAATQAAARALAMQAMAMARAAQAUAAALgQQAMgOgBgcQAAgYgLgNQgKgNgSAAQgTAAgMAOg");
	this.shape_78.setTransform(500.7,432.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgrA+QgLgLAAgSQAAgmAugHIApgGQAAgkgdAAQgYAAgVASIAAgXQAVgNAagBQAxAAAAA1IAABaIgWAAIAAgWIgBAAQgOAZgcAAQgVAAgMgLgAAAAEQgQACgIAFQgHAGAAAOQAAALAHAGQAHAGAMAAQAQAAALgLQALgMAAgSIAAgNg");
	this.shape_79.setTransform(484.525,429);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAzBiIAAhaIhlAAIAABaIgXAAIAAjDIAXAAIAABWIBlAAIAAhWIAXAAIAADDg");
	this.shape_80.setTransform(467.775,426.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AhEBuIAAgdQAYATAfAAQANAAAJgDQAKgDAHgHQAHgFAEgJQAEgIAAgLQAAguhBgBIgUAAIAAgVIATAAQA5gBAAgrQAAgpgrAAQgaAAgWARIAAgbQAXgNAfAAQAOAAAMAEQANAEAIAIQAJAHAFALQAEAKAAAMQAAAwgvANIAAABQAMABAKAEQALAFAHAGQAHAIAFAKQAEAJAAAMQAAARgGANQgGANgLAJQgLAKgQAFQgPAFgSAAQgiAAgUgNg");
	this.shape_81.setTransform(710.625,509.05);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AhHAJIAAgJICOhQIAAAZIhpA6IAAABIBpA0IAAAZg");
	this.shape_82.setTransform(690.1,510.775);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgMBzQgFgFAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAIgFAFQgFAGgIAAQgHAAgFgGgAgLAzIgDiqIAcAAIgDCqg");
	this.shape_83.setTransform(664.325,509.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AhFAOIAAhkIAbAAIAABhQAAA1AoAAQAUAAANgPQANgOgBgYIAAhhIAbAAIAACpIgbAAIAAgbIgBAAQgRAfgiAAQg9AAABhJg");
	this.shape_84.setTransform(649.7,512.65);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("Ag8BBQgXgYAAgnQAAgqAYgYQAXgYAnAAQAmAAAVAXQAWAYAAApQAAAogXAZQgXAYgmAAQgmAAgWgYgAgogvQgPASAAAeQAAAeAQASQAPARAZAAQAaAAAPgRQAOgRAAggQAAgegOgSQgPgRgaAAQgZAAgQASg");
	this.shape_85.setTransform(630.325,512.45);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AhKB7IAAgYQAJACAHAAQAVABAKgZIAOggIhCipIAeAAIAuCCIADANIAAAAIAEgNIAwiCIAcAAIhODEQgUA1gmAAQgKAAgIgCg");
	this.shape_86.setTransform(612.325,516.45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("Ag1BCQgUgXAAgrQAAgmAWgZQAXgZAhAAQAgAAATAWQASAVAAAnIAAANIh3AAQABAcAPAPQAOAQAYAAQAdAAAZgTIAAAZQgXARglAAQgjAAgVgXgAgcgzQgOAOgDAWIBbAAQAAgYgLgNQgLgNgUAAQgSAAgOAOg");
	this.shape_87.setTransform(585.95,512.45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgOBVIhAipIAdAAIAsB7QAEANABAKIAAAAQACgNAEgKIAth7IAcAAIhDCpg");
	this.shape_88.setTransform(569.025,512.45);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("Ag8BBQgXgYAAgnQAAgqAYgYQAXgYAnAAQAmAAAVAXQAWAYAAApQAAAogXAZQgXAYgmAAQgmAAgWgYgAgogvQgPASAAAeQAAAeAQASQAPARAZAAQAaAAAPgRQAOgRAAggQAAgegOgSQgPgRgaAAQgZAAgQASg");
	this.shape_89.setTransform(550.925,512.45);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(2,1,1).p("ASUtKQgUDPgbAmQgcAmn8ATQn9ATmBgkQmCgjgHjsQgHjsGjgHQGhgICwAEQCwAEFjALQFiALgUDPgAUMhGQgcDPgnAmQgnAmrMATQrNASofgjQoggkgKjqQgKjsJOgIQJOgHD2AEQD4AEH0AKQHzAMgbDOgAVAMBQgYDPggAmQghAmpZATQpbATnHgkQnIgjgJjsQgIjsHvgHQHugIDQAEQDQAEGkALQGjALgXDPg");
	this.shape_90.setTransform(587.8516,428.6473);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CCF5FF").s().p("AmUQeQnIgjgJjsQgIjsHvgHQHugIDQAEQDQAEGkALQGjALgXDPQgYDPggAmQghAmpZATQjOAGi+AAQlqAAksgXgAsWDXQoggkgKjqQgKjsJOgIQJOgHD2AEQD4AEH0AKQHzAMgbDOQgcDPgnAmQgnAmrMATQj2AGjgAAQmxAAllgXgAkxotQmCgjgHjsQgHjsGjgHQGhgICwAEQCwAEFjALQFiALgUDPQgUDPgbAmQgcAmn8ATQiuAGigAAQkyAAj+gXg");
	this.shape_91.setTransform(587.8516,428.6473);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("Ag8BlIAAgUQAHADAGgBQARAAAJgUIAKgaIg2iLIAZAAIAlBqIADAMIAAAAIADgLIAohrIAXAAIhACiQgRArgfAAQgIAAgGgCg");
	this.shape_92.setTransform(697.85,344.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgrA+QgLgLAAgSQAAgmAugHIApgGQAAgjgdgBQgYAAgVASIAAgXQAVgOAaAAQAxABAAA0IAABaIgWAAIAAgWIgBAAQgOAZgcAAQgVABgMgMgAAAAEQgQACgIAGQgHAFAAAOQAAALAHAGQAHAHAMgBQAQAAALgLQALgMAAgSIAAgNg");
	this.shape_93.setTransform(683.575,340.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AhOBiIAAjDIA3AAQBmAAAABgQAAAsgcAbQgeAcgvAAgAg3BNIAdAAQAmAAAWgVQAVgUAAglQAAhLhPAAIgfAAg");
	this.shape_94.setTransform(667.6,338.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgtBBIAAgYQASANAWAAQAcABABgVQgBgFgCgEQgCgDgEgEIgLgFIgMgFIgQgIQgHgDgFgEQgEgEgDgHQgCgFAAgJQAAgKAFgHQAEgIAIgFQAHgFAKgDQAJgDAJAAQATABAOAGIAAAWQgQgJgTgBQgGABgFABQgFABgEADQgDACgCAFQgCADAAAEQAAAGACADQACAEAEADQAEADAFACIAMAFIAQAHQAHADAGAFQAFAFADAGQACAGAAAJQABAKgFAIQgEAHgJAFQgHAFgKADQgKACgKAAQgWABgPgJg");
	this.shape_95.setTransform(643.65,340.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgrA2QgRgTAAgjQAAgfASgVQATgUAagBQAcABAPARQAPASAAAgIAAALIhhAAQAAAXAMANQAMAMAUAAQAXAAAVgPIAAAVQgTANgfAAQgcABgRgUgAgXgqQgLALgCATIBKAAQAAgUgJgLQgJgKgRgBQgOAAgMAMg");
	this.shape_96.setTransform(620.4,340.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgyA1QgSgTAAghQAAghATgVQAUgTAfgBQAgAAASAUQARAUAAAhQAAAhgTAUQgTAUgfAAQgfABgTgVgAghgmQgMAOAAAZQAAAZANAOQANAOAUAAQAWAAAMgNQALgOAAgbQAAgZgLgOQgMgPgWAAQgUABgOAPg");
	this.shape_97.setTransform(579.45,340.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Ag9BlIAAgUQAIADAGgBQARAAAJgUIAKgaIg2iLIAZAAIAmBqIACAMIAAAAIADgLIAohrIAXAAIhBCiQgQArgfAAQgJAAgGgCg");
	this.shape_98.setTransform(531.7,344.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AhABoIAAjMIAXAAIAAAZIABAAQAQgcAfAAQAbAAAPATQAPATABAfQgBAjgQAVQgRAVgeAAQgaAAgPgYIgBAAIAABVgAgdhGQgMANAAAVIAAATQAAARALAMQAMAMARAAQAUAAALgQQALgOAAgcQABgYgLgNQgLgNgSAAQgTAAgMAOg");
	this.shape_99.setTransform(517.15,343.95);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("Ag/BoIAAjMIAWAAIAAAZIAAAAQARgcAfAAQAbAAAPATQAPATAAAfQAAAjgRAVQgQAVgeAAQgbAAgPgYIAAAAIAABVgAgdhGQgMANAAAVIAAATQAAARALAMQAMAMARAAQAUAAALgQQAMgOgBgcQAAgYgLgNQgKgNgSAAQgTAAgMAOg");
	this.shape_100.setTransform(500.7,343.95);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgrA+QgLgLAAgSQAAgmAugHIApgGQAAgjgdgBQgYAAgVASIAAgXQAVgOAaAAQAxABAAA0IAABaIgWAAIAAgWIgBAAQgOAZgcAAQgVABgMgMgAAAAEQgQACgIAGQgHAFAAAOQAAALAHAGQAHAHAMgBQAQAAALgLQALgMAAgSIAAgNg");
	this.shape_101.setTransform(484.525,340.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgMBzQgFgFAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAIgFAFQgFAFgIABQgHgBgFgFgAgLAyIgDipIAcAAIgDCpg");
	this.shape_102.setTransform(680.375,261.35);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("Ag8BBQgXgYAAgnQAAgqAYgYQAXgYAnAAQAmAAAVAXQAWAYAAApQAAAogXAZQgXAYgmAAQgmAAgWgYgAgogvQgPASAAAeQAAAeAQASQAPARAZAAQAaAAAPgRQAOgRAAgfQAAgggOgRQgPgRgaAAQgZAAgQASg");
	this.shape_103.setTransform(636.325,264.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgWApIAUhRIAZAAIgZBRg");
	this.shape_104.setTransform(583.35,273.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AA+B3IAAhsIh7AAIAABsIgcAAIAAjtIAcAAIAABoIB7AAIAAhoIAbAAIAADtg");
	this.shape_105.setTransform(560.05,261.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AhEBuIAAgdQAYATAfAAQANAAAJgDQAKgDAHgGQAHgHAEgIQAEgIAAgLQAAguhBAAIgUAAIAAgXIATAAQA5AAAAgsQAAgogrAAQgaAAgWARIAAgaQAXgOAfAAQAOAAAMAEQANAEAIAIQAJAHAFALQAEAKAAAMQAAAwgvANIAAABQAMABAKAEQALAFAHAGQAHAIAFAKQAEAJAAANQAAAPgGAOQgGANgLAJQgLAKgQAFQgPAFgSAAQgiAAgUgNg");
	this.shape_106.setTransform(710.625,422.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgMBzQgFgFAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAIgFAFQgFAFgIABQgHgBgFgFgAgLAyIgDiqIAcAAIgDCqg");
	this.shape_107.setTransform(664.325,422.55);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhFAOIAAhkIAbAAIAABgQAAA2AoAAQAUAAANgPQANgPgBgXIAAhhIAbAAIAACpIgbAAIAAgbIgBAAQgRAfgiAAQg9AAABhJg");
	this.shape_108.setTransform(649.7,426);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("Ag8BBQgXgXAAgoQAAgqAYgYQAXgYAnAAQAmAAAVAXQAWAYAAApQAAAogXAZQgXAYgmAAQgmAAgWgYgAgogvQgPASAAAeQAAAeAQARQAPASAZAAQAaAAAPgRQAOgRAAgfQAAgggOgRQgPgRgaAAQgZAAgQASg");
	this.shape_109.setTransform(630.325,425.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AhKB7IAAgZQAJADAHAAQAVAAAKgYIAOghIhCioIAeAAIAuCCIADANIAAAAIAEgNIAwiCIAcAAIhODEQgUA1gmAAQgKAAgIgCg");
	this.shape_110.setTransform(612.325,429.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("Ag1BCQgUgXAAgqQAAgnAWgZQAXgZAhAAQAgAAATAVQASAWAAAnIAAANIh3AAQABAcAPAPQAOAQAYAAQAdAAAZgTIAAAaQgXAQglAAQgjAAgVgXgAgcgzQgOANgDAXIBbAAQAAgYgLgNQgLgNgUAAQgSAAgOAOg");
	this.shape_111.setTransform(585.95,425.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgOBVIhAipIAdAAIAsB7QAEANABALIAAAAQACgNAEgLIAth7IAcAAIhDCpg");
	this.shape_112.setTransform(569.025,425.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("Ag8BBQgXgXAAgoQAAgqAYgYQAXgYAnAAQAmAAAVAXQAWAYAAApQAAAogXAZQgXAYgmAAQgmAAgWgYgAgogvQgPASAAAeQAAAeAQARQAPASAZAAQAaAAAPgRQAOgRAAgfQAAgggOgRQgPgRgaAAQgZAAgQASg");
	this.shape_113.setTransform(550.925,425.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4,p:{x:493.375,y:632.575}},{t:this.shape_3,p:{x:521.575,y:636.3}},{t:this.shape_2},{t:this.shape_1,p:{x:570.775,y:636.3}},{t:this.shape}]},20).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_4,p:{x:575.625,y:452.625}},{t:this.shape_62,p:{x:582.65,y:465.35}},{t:this.shape_61,p:{x:611.175,y:456.35}},{t:this.shape_60},{t:this.shape_59,p:{x:660.375,y:456.35}},{t:this.shape_58,p:{x:679.675,y:453.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:594.875,y:530.925}},{t:this.shape_49,p:{x:607.775,y:529.475}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:711.125,y:530.175}},{t:this.shape_41,p:{x:452.925,y:632.3}},{t:this.shape_40,p:{x:470.875,y:631.625}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},3).to({state:[{t:this.shape_91,p:{y:428.6473}},{t:this.shape_90,p:{y:428.6473}},{t:this.shape_41,p:{x:518.875,y:509.05}},{t:this.shape_40,p:{x:536.825,y:508.375}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{y:510.775}},{t:this.shape_81},{t:this.shape_80,p:{y:426.2}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{y:426.2}},{t:this.shape_74},{t:this.shape_50,p:{x:592.325,y:427.075}},{t:this.shape_49,p:{x:605.225,y:425.625}},{t:this.shape_73},{t:this.shape_72,p:{y:428.875}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_42,p:{x:708.575,y:426.325}},{t:this.shape_67},{t:this.shape_4,p:{x:567.625,y:347.325}},{t:this.shape_62,p:{x:574.65,y:360.05}},{t:this.shape_61,p:{x:603.175,y:351.05}},{t:this.shape_66},{t:this.shape_59,p:{x:652.375,y:351.05}},{t:this.shape_58,p:{x:671.675,y:348}}]},4).to({state:[{t:this.shape_91,p:{y:341.9973}},{t:this.shape_90,p:{y:341.9973}},{t:this.shape_41,p:{x:518.875,y:422.4}},{t:this.shape_40,p:{x:536.825,y:421.725}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_82,p:{y:424.125}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_4,p:{x:576.325,y:260.675}},{t:this.shape_104},{t:this.shape_3,p:{x:611.875,y:264.4}},{t:this.shape_103},{t:this.shape_1,p:{x:661.075,y:264.4}},{t:this.shape_102},{t:this.shape_80,p:{y:338.1}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_75,p:{y:338.1}},{t:this.shape_97},{t:this.shape_50,p:{x:592.325,y:338.975}},{t:this.shape_49,p:{x:605.225,y:337.525}},{t:this.shape_96},{t:this.shape_72,p:{y:340.775}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_42,p:{x:708.575,y:338.225}}]},4).to({state:[]},26).wait(45));

	// Layer_1
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("Ah9CGQhAgwAAhWQAAhQA5guQA3gtBYAAQAdAAAZAFQAZAFAhAMQARAHAGAAQAGAAAHgFIAGADIgnBQIgHgEQAAgIgCgEQgCgDgHgFQgPgLgdgIQgcgIgaAAQg0AAghAdQgoAiAAA1QAAA1AnAgQAiAdA4ABQAbAAAbgHQAbgGAUgLIAAguIhTAAQgHABgEADQgEADgCAJIgIAAIAAhNIAIAAQACAKADADQAFACAHAAICeAAIAAAIQgIADgEAEQgDAEAAAHIAABEQAAAIADAEQAEAEAIACIAAAGQhfA3hZgBQhQAAgzgmg");
	this.shape_114.setTransform(397.05,141.35);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgrBoQgRgGgLgOQgLgNgGgUIA8gIQADASAIAHQAHAHALAAQAMAAAIgJQAIgIAAgQQAAgPgIgHQgIgJgNABQgGgBgMAEIADgqIAIABQAKAAAIgHQAIgIAAgKQAAgKgGgGQgGgGgJAAQgLAAgGAGQgHAHgCAQIg4gKQAHgbAUgOQAUgPAkAAQApAAATAQQATAQAAAXQAAAOgIALQgIALgPAJQANADAGAEQALAGAGALQAGAKAAAQQAAASgKASQgKARgSAJQgTAJgeAAQgcAAgRgHg");
	this.shape_115.setTransform(619.725,391.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(8,1,1).p("EgiDg0EMBEHAAAMAAABoJMhEHAAAg");
	this.shape_116.setTransform(533.925,357.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("Ag/DqQgPAHgTAAQgiAAgZgYQgYgZAAgiQAAgjAYgYQAZgZAiAAQAgAACOBnQheBRgYABIgBAAQgZAAAEgZgAgKiSQgDgYgVBnQgZAQgfAAQgrAAgegeQgegeAAgrQAAgrAegfQAegeArAAQAeAAAYAPIBhgCQATAAAqBEQAqBDAaBTQAZBThzBlIgXAUQhUkrgDgYg");
	this.shape_117.setTransform(535.3671,148.5387);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#66FF33").s().p("AkoEpQh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7Qh7B7iuAAQitAAh7h7gAgbE3QAYAABehSQiOhmggAAQgigBgZAZQgYAZAAAiQAAAiAYAZQAZAYAiAAQATAAAPgGQgEAZAagBgAADheQADAYBVErIAXgUQBzhlgZhTQgahSgqhEQgqhEgTAAIhhACQgYgOgdAAQgsAAgeAdQgeAfAAArQAAArAeAeQAeAdAsABQAfgBAYgPQARhTAEAAQAAAAABAAQAAAAAAABQAAAAABABQAAABAAABg");
	this.shape_118.setTransform(533.95,143.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF0033").s().p("AiSCTQg8g8gBhUIAAgDQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A9AABVQAABWg9A9QggAggnAPQgjAOgpAAQhVAAg9g9g");
	this.shape_119.setTransform(619.4,392.75);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0099FF").s().p("ADvENQhrAsiEgBQjRABiVhvQiUhwAAibQAAieCUhvQCVhuDRAAQBdgBBRAWQABBUA8A8QA9A+BWgBQApABAjgOQAxBLAABbQAAB2hWBdIAhEsg");
	this.shape_120.setTransform(581.2,435.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#999999").s().p("AkqErQh8h7gBiwQABiuB8h8QB8h8CugBQCwABB7B8QB9B8gBCuQABCwh9B7Qh7B9iwgBQiuABh8h9g");
	this.shape_121.setTransform(398.3,139.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#99CCFF").s().p("EgiDA0FMAAAhoJMBEHAAAMAAABoJgAOfTKIghkrQBWhdAAh4QAAhagxhMQAngPAgggQA9g9AAhWQAAhWg9g9Qg9g9hWAAQhWAAg9A9Qg9A9AABWIAAADQhRgWhdAAQjSAAiVBvQiTBvAACdQAACdCTBvQCVBvDSAAQCDAABsgrgEgEogmEQh7B7AACuQAACuB7B7QB7B7CtAAQCuAAB7h7QB7h7AAiuQAAiuh7h7Qh7h7iuAAQitAAh7B7gEgZ3gmrQh8B8AACvQAACwB8B8QB8B8CwAAQCvAAB8h8QB8h8AAiwQAAivh8h8Qh8h8ivAAQiwAAh8B8g");
	this.shape_122.setTransform(533.925,357.325);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(2,1,1).p("AaPglQAyD2o8BIQo9BIqlgVQqmgWnDgqQnEgpgIkTQgJkTHqgJQHqgJKBAOQKAAPISAOQIRANAyD4g");
	this.shape_123.setTransform(537.2686,633.2749);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(17,1,1).p("EgiDg0EMBEHAAAMAAABoJMhEHAAAg");
	this.shape_124.setTransform(533.925,357.325);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFCCCC").s().p("EgiDA0FMAAAhoJMBEHAAAMAAABoJgEgSPAl6QnqAJAIEUQAJETHDAqQHDApKmAWQKlAWI9hIQI9hJgyj3Qgzj3oRgOQoRgOqAgOQmMgJlSAAQjSAAi7ADg");
	this.shape_125.setTransform(533.925,357.325);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AhdFMQqmgWnDgqQnEgpgIkTQgJkTHqgJQHqgJKBAOQKAAPISAOQIRANAyD4QAyD2o8BIQm5A4n4AAQiWAAibgFg");
	this.shape_126.setTransform(537.2686,633.2749);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(2,1,1).p("AfCh1QAsIyloENQh+BeiwA6QqmDdsghCQsihEoWh/QiLgihohSQkljpgIpyQgKtQJEgcQJDgbL2AsQL1AtJzArQJxAqA8L5g");
	this.shape_127.setTransform(538.0568,566.8324);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AhuP9QsihEoWh/QiLgihohSQkljpgIpyQgKtQJEgcQJDgbL2AsQL1AtJzArQJxAqA8L5QAsIyloENQh+BeiwA6QoKCqpUAAQixAAi3gPg");
	this.shape_128.setTransform(538.0568,566.8324);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFCCCC").s().p("EgiDA0FMAAAhoJMBEHAAAMAAABoJgA1jQtQpDAcAKNQQAHJzEmDpQBnBSCMAiQIVB/MiBEQMhBCKmjdQCvg6B/heQFnkNgsozQg7r5pygqQpygrr1gtQnVgbmQAAQj4AAjdAKg");
	this.shape_129.setTransform(533.925,357.325);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(2,1,1).p("AfChbQAsG4loDSQh+BJiwAuQi4AvjCAeQoGBSpGglQkegTj8gZQnGgtlYhBQiLgahohAQkBigglmLQgGg4gBg9QAAgRAAgQQAAgDAAgEQABgrADgoQArofILgUQJDgWL2AjQL1AjJzAiQJxAgA8JTQAAABAAABg");
	this.shape_130.setTransform(538.0649,587.7802);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AhuMgQkegTj8gZQnGgtlYhBQiLgahohAQkBigglmLQgGg4gBg9IAAghIAAgHQABgrADgoQArofILgUQJDgWL2AjQL1AjJzAiQJxAgA8JTIAAACQAsG4loDSQh+BJiwAuQi4AvjCAeQljA4mCAAQixAAi2gLg");
	this.shape_131.setTransform(538.0649,587.7802);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFCCCC").s().p("EgiDA0FMAAAhoJMBEHAAAMAAABoJgA1jXdQoLAUgrIgQgDAoAAArIAAAGIAAAhQABA9AFA5QAmGMEBCgQBnBACMAaQFXBAHGAtQD8AgEeAYQJHAwIFhoQDCgfC5gvQCvgtB/hKQFnjSgsm5IAAgBQg8pTpxghQpygir1giQnWgWmRAAQj2AAjdAIg");
	this.shape_132.setTransform(533.925,357.325);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(2,1,1).p("AfCg5QAsETloCEQh+AuiwAdQk6AylWAUQmKAXmsgRQhfgEhbgFQqnggnXg3QiLgQhogpQkBhkglj3QgGgjgBgmQAAgLAAgKQAAgCAAgCQAChaAfhGQBnjrGygKQJDgNL2AVQL1AWJzAVQHwAQCMDvQAlA+AMBNg");
	this.shape_133.setTransform(539.1649,618.1288);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AhuH1Ii6gJQqnggnXg3QiLgQhogpQkBhkglj3QgGgjgBgmIAAgVIAAgEQAChaAfhGQBnjrGygKQJDgNL2AVQL1AWJzAVQHwAQCMDvQAlA+AMBNQAsETloCEQh+AuiwAdQk6AylWAUQjhANjsAAQiyAAi3gHg");
	this.shape_134.setTransform(539.1649,618.1288);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFCCCC").s().p("EgiDA0FMAAAhoJMBEHAAAMAAABoJgEgVYAg5QmxAKhoDrQgfBGgBBaIAAAEIAAAVQABAmAFAkQAmD3EBBkQBnApCMAQQHWA3KoAhICuAPQGzAkGPgxQFVgUE7gyQCvgdB/guQFniEgskUQgMhNglg+QiMjunwgRQpygVr1gWQnZgNmTAAQj0AAjaAFg");
	this.shape_135.setTransform(533.925,357.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},15).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},4).to({state:[{t:this.shape_125},{t:this.shape_126},{t:this.shape_124},{t:this.shape_123}]},2).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_124},{t:this.shape_127}]},13).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_124},{t:this.shape_130}]},7).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_124}]},7).to({state:[]},12).wait(45));

	// Layer_2
	this.text = new cjs.Text("Happy Mothers Day  ", "60px 'Lucida Handwriting'");
	this.text.textAlign = "center";
	this.text.lineHeight = 79;
	this.text.lineWidth = 852;
	this.text.parent = this;
	this.text.setTransform(-342.95,74.35);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(60).to({_off:false},0).wait(1).to({x:-302.381},0).wait(1).to({x:-261.8119},0).wait(1).to({x:-221.2429},0).wait(1).to({x:-180.6738},0).wait(1).to({x:-140.1048},0).wait(1).to({x:-99.5357},0).wait(1).to({x:-58.9667},0).wait(1).to({x:-18.3976},0).wait(1).to({x:22.1714},0).wait(1).to({x:62.7405},0).wait(1).to({x:103.3095},0).wait(1).to({x:143.8786},0).wait(1).to({x:184.4476},0).wait(1).to({x:225.0167},0).wait(1).to({x:265.5857},0).wait(1).to({x:306.1548},0).wait(1).to({x:346.7238},0).wait(1).to({x:387.2929},0).wait(1).to({x:427.8619},0).wait(1).to({x:468.431},0).wait(1).to({x:509},0).wait(24));

	// Shine
	this.instance_1 = new lib.Shine();
	this.instance_1.setTransform(511.95,388.45,0.0087,0.0087,0,0,0,1127,855.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).wait(1).to({regX:1140.7,regY:764.2,scaleX:0.0524,scaleY:0.0626,x:512.6,y:382.7},0).wait(1).to({scaleX:0.0962,scaleY:0.1165,x:513.25,y:377.8},0).wait(1).to({scaleX:0.14,scaleY:0.1704,x:513.85,y:372.9},0).wait(1).to({scaleX:0.1838,scaleY:0.2244,x:514.4,y:368},0).wait(1).to({scaleX:0.2275,scaleY:0.2783,x:515.05,y:363.05},0).wait(1).to({scaleX:0.2713,scaleY:0.3322,x:515.65,y:358.15},0).wait(1).to({scaleX:0.3151,scaleY:0.3861,x:516.25,y:353.25},0).wait(1).to({scaleX:0.3589,scaleY:0.4401,x:516.85,y:348.35},0).wait(1).to({scaleX:0.4027,scaleY:0.494,x:517.45,y:343.5},0).wait(1).to({scaleX:0.4464,scaleY:0.5479,x:518.05,y:338.55},0).wait(1).to({scaleX:0.4902,scaleY:0.6018,x:518.75,y:333.65},0).wait(1).to({scaleX:0.534,scaleY:0.6557,x:519.3,y:328.7},0).wait(1).to({scaleX:0.5778,scaleY:0.7097,x:519.9,y:323.85},0).wait(1).to({scaleX:0.6215,scaleY:0.7636,x:520.5,y:318.9},0).wait(12));

	// Layer_3
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgYAjIAAgNQAKAHALAAQAQAAgBgKQABgEgCgCIgDgDIgGgDIgGgDIgJgDIgFgEIgFgGIgBgHQAAgGACgEQADgEAEgCQAEgDAFgCQAFgCAFAAQAJAAAIAEIAAAMQgIgFgLAAIgFAAIgEADIgDADIgCAFIACAEIADAEIAEADIAGACIAJAEQAEABADADIAEAGQACADAAAFQAAAFgDAEQgCAEgEADIgJAEQgGABgFAAQgMAAgIgEg");
	this.shape_136.setTransform(998.85,746.65);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgIAbIAAgrIgNAAIAAgKIANAAIAAgTIALgDIAAAWIATAAIAAAKIgTAAIAAApQAAAIACADQADADAGAAQAFAAADgCIAAAKQgFACgHAAQgSAAAAgWg");
	this.shape_137.setTransform(993,745.625);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgXAdQgJgKAAgSQAAgRAKgLQAKgMAOAAQAPABAIAJQAIAKAAAQIAAAGIg0AAQAAANAGAGQAHAHAKAAQANAAAKgIIAAALQgJAHgRAAQgPAAgJgKgAgMgWQgGAGgBAKIAnAAQAAgKgFgHQgFgFgIAAQgIAAgGAGg");
	this.shape_138.setTransform(986.625,746.65);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgYAjIAAgNQAKAHAMAAQAOAAABgKQgBgEgBgCIgEgDIgFgDIgFgDIgJgDIgHgEIgDgGIgBgHQAAgGACgEQACgEAEgCQAEgDAGgCQAEgCAFAAQAJAAAJAEIAAAMQgJgFgKAAIgFAAIgGADIgDADIgBAFIABAEIADAEIAGADIAGACIAJAEQAEABACADIAEAGQACADAAAFQAAAFgCAEQgDAEgEADIgKAEQgFABgFAAQgMAAgIgEg");
	this.shape_139.setTransform(979.55,746.65);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgYAjIAAgNQAKAHALAAQAQAAgBgKQAAgEgBgCIgDgDIgGgDIgGgDIgJgDIgFgEIgFgGIgBgHQAAgGACgEQADgEAEgCQAEgDAFgCQAFgCAFAAQAJAAAIAEIAAAMQgIgFgLAAIgFAAIgEADIgDADIgCAFIACAEIADAEIAEADIAGACIAJAEQAFABACADIAEAGQACADAAAFQAAAFgDAEQgCAEgEADIgJAEQgGABgFAAQgMAAgIgEg");
	this.shape_140.setTransform(973.2,746.65);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAhA1IgLgeIgrAAIgLAeIgOAAIAphpIALAAIApBpgAgBggIgQAsIAjAAIgQgsIgCgHIgBAHg");
	this.shape_141.setTransform(965.075,745.15);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgXAdQgJgKAAgSQAAgRAKgLQAKgMAOAAQAPABAIAJQAIAKAAAQIAAAGIg0AAQAAANAGAGQAHAHAKAAQANAAAKgIIAAALQgJAHgRAAQgPAAgJgKgAgMgWQgGAGgBAKIAnAAQAAgKgFgHQgFgFgIAAQgIAAgGAGg");
	this.shape_142.setTransform(952.275,746.65);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgVAsIAAAAIAAALIgNAAIAAhvIANAAIAAAyIAAAAQAJgPAQgBQAOAAAIALQAJAKAAAQQAAASgJAMQgKAMgQgBQgNABgIgNgAgPgEQgHAGABALIAAALQAAAJAFAGQAHAHAJAAQAKAAAGgIQAHgJAAgPQgBgMgFgGQgGgHgKAAQgKAAgGAHg");
	this.shape_143.setTransform(944.15,744.95);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgaAdQgKgLAAgRQAAgSALgLQAJgKASgBQAQAAAKALQAJAKAAASQAAARgKAMQgKALgRgBQgQAAgKgKgAgRgUQgHAHABAOQgBANAHAHQAHAIALAAQALAAAHgIQAFgHAAgOQAAgNgFgIQgHgHgLAAQgLAAgHAIg");
	this.shape_144.setTransform(935.1,746.65);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgZAuQgJgKAAgRQAAgTAKgKQAJgMAPAAQAQAAAGANIAAgvIANAAIAABvIgNAAIAAgNQgIAOgQAAQgPAAgIgKgAgPgDQgGAHAAAOQAAANAGAHQAGAIAJAAQAKAAAHgHQAFgIAAgLIAAgKQAAgKgFgFQgHgGgJAAQgKAAgGAIg");
	this.shape_145.setTransform(926.05,744.95);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAhA1IgLgeIgrAAIgLAeIgOAAIAphpIALAAIApBpgAgBggIgQAsIAjAAIgQgsIgCgHIgBAHg");
	this.shape_146.setTransform(917.025,745.15);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AApAnIAAgrQAAgMgDgGQgEgFgJAAQgIAAgFAHQgGAHAAAJIAAArIgLAAIAAgsQAAgWgRAAQgIAAgFAGQgFAHAAAKIAAArIgMAAIAAhLIAMAAIAAANIAAAAQAIgPAQAAQAHABAGAEQAFAFACAGQAIgQARAAQAYAAAAAgIAAAtg");
	this.shape_147.setTransform(901.725,746.55);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgaAdQgKgLAAgRQAAgSAKgLQALgKAQgBQARAAAJALQAKAKAAASQAAARgKAMQgLALgQgBQgQAAgKgKgAgRgUQgHAHABAOQgBANAHAHQAHAIAKAAQAMAAAGgIQAHgHAAgOQAAgNgHgIQgGgHgMAAQgKAAgHAIg");
	this.shape_148.setTransform(890.8,746.65);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgTAmIAAhKIAMAAIAAAQIABAAQACgIAFgFQAFgEAGAAIAIABIAAAMQgEgCgGAAQgHAAgEAHQgGAHAAAMIAAAmg");
	this.shape_149.setTransform(884.575,746.575);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgJA4IAAg/IgMAAIAAgLIAMAAIAAgMQAAgMAHgHQAGgGAKAAIAJABIAAALQgEgCgEAAQgNAAAAAQIAAALIARAAIAAALIgRAAIAAA/g");
	this.shape_150.setTransform(879.35,744.775);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgFA4IAAhvIALAAIAABvg");
	this.shape_151.setTransform(870.75,744.85);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgFA4IAAhvIALAAIAABvg");
	this.shape_152.setTransform(867.1,744.85);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgaAdQgKgLAAgRQAAgSAKgLQALgKAQgBQARAAAJALQAKAKAAASQAAARgKAMQgLALgQgBQgQAAgKgKgAgRgUQgHAHAAAOQAAANAHAHQAHAIAKAAQAMAAAGgIQAHgHAAgOQAAgNgHgIQgGgHgMAAQgKAAgHAIg");
	this.shape_153.setTransform(860.9,746.65);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgZAuQgJgKABgRQAAgTAJgKQAKgMAOAAQAPAAAHANIAAgvIAMAAIAABvIgMAAIAAgNQgIAOgRAAQgNAAgJgKgAgPgDQgGAHAAAOQAAANAGAHQAGAIAJAAQAKAAAGgHQAHgIgBgLIAAgKQABgKgHgFQgGgGgIAAQgKAAgHAIg");
	this.shape_154.setTransform(851.85,744.95);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgZAuQgJgKAAgRQAAgTAKgKQAKgMAOAAQAPAAAIANIAAgvIALAAIAABvIgLAAIAAgNQgJAOgQAAQgPAAgIgKgAgPgDQgGAHAAAOQAAANAGAHQAGAIAJAAQAKAAAGgHQAGgIABgLIAAgKQgBgKgGgFQgFgGgKAAQgKAAgGAIg");
	this.shape_155.setTransform(838.95,744.95);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgXAdQgJgKAAgSQAAgRAKgLQAKgMAOAAQAPABAIAJQAIAKAAAQIAAAGIg0AAQAAANAGAGQAHAHAKAAQANAAAKgIIAAALQgJAHgRAAQgPAAgJgKgAgMgWQgGAGgBAKIAnAAQAAgKgFgHQgFgFgIAAQgIAAgGAGg");
	this.shape_156.setTransform(830.925,746.65);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgIAbIAAgrIgNAAIAAgKIANAAIAAgTIALgDIAAAWIATAAIAAAKIgTAAIAAApQAAAIADADQACADAGAAQAEAAAEgCIAAAKQgEACgIAAQgSAAAAgWg");
	this.shape_157.setTransform(824.45,745.625);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgWAhQgHgGAAgJQAAgUAZgEIAWgDQAAgTgQAAQgMAAgLAJIAAgMQALgIANAAQAbAAAAAcIAAAxIgMAAIAAgMIgBAAQgIANgOAAQgLABgGgHgAAAACQgIABgEADQgEADAAAHQAAAGAEADQADAEAHAAQAIAAAGgGQAGgGAAgKIAAgHg");
	this.shape_158.setTransform(817.925,746.65);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AApAnIAAgrQAAgMgDgGQgEgFgJAAQgIAAgFAHQgGAHAAAJIAAArIgLAAIAAgsQAAgWgRAAQgIAAgFAGQgFAHAAAKIAAArIgMAAIAAhLIAMAAIAAANIAAAAQAIgPAQAAQAHABAGAEQAFAFACAGQAIgQARAAQAYAAAAAgIAAAtg");
	this.shape_159.setTransform(807.925,746.55);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgFA3IAAhKIALAAIAABKgAgEgoQgDgDAAgDQAAgDADgDQACgCACAAQADAAADACQACADAAADQAAADgCACQgDADgDAAQgCAAgCgCg");
	this.shape_160.setTransform(799.575,744.925);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AATAnIAAgrQAAgXgRAAQgIAAgGAGQgGAIAAAJIAAArIgMAAIAAhLIAMAAIAAANIAAAAQAJgPAPAAQAMABAHAHQAGAJAAAPIAAAtg");
	this.shape_161.setTransform(793.575,746.55);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAhA1IgLgeIgrAAIgLAeIgOAAIAphpIALAAIApBpgAgBggIgQAsIAjAAIgQgsIgCgHIgBAHg");
	this.shape_162.setTransform(784.375,745.15);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgZAuQgJgKAAgRQAAgTAKgKQAJgMAPAAQAQAAAGANIAAgvIANAAIAABvIgNAAIAAgNQgIAOgQAAQgPAAgIgKgAgPgDQgGAHAAAOQAAANAGAHQAGAIAJAAQAKAAAHgHQAFgIAAgLIAAgKQAAgKgFgFQgHgGgJAAQgKAAgGAIg");
	this.shape_163.setTransform(770.8,744.95);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AATAnIAAgrQAAgXgRAAQgIAAgGAGQgGAIAAAJIAAArIgMAAIAAhLIAMAAIAAANIAAAAQAJgPAPAAQAMABAHAHQAGAJAAAPIAAAtg");
	this.shape_164.setTransform(762.475,746.55);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgWAhQgHgGAAgJQAAgUAZgEIAWgDQAAgTgQAAQgMAAgLAJIAAgMQALgIANAAQAbAAAAAcIAAAxIgMAAIAAgMIgBAAQgIANgOAAQgLABgGgHgAAAACQgIABgEADQgEADAAAHQAAAGAEADQADAEAHAAQAIAAAGgGQAGgGAAgKIAAgHg");
	this.shape_165.setTransform(754.125,746.65);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgXAdQgJgKAAgSQAAgRAKgLQAKgMAOAAQAPABAIAJQAIAKAAAQIAAAGIg0AAQAAANAGAGQAHAHAKAAQANAAAKgIIAAALQgJAHgRAAQgPAAgJgKgAgMgWQgGAGgBAKIAnAAQAAgKgFgHQgFgFgIAAQgIAAgGAGg");
	this.shape_166.setTransform(742.525,746.65);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AATAnIAAgrQAAgXgRAAQgIAAgGAGQgGAIAAAJIAAArIgMAAIAAhLIAMAAIAAANIAAAAQAJgPAPAAQAMABAHAHQAGAJAAAPIAAAtg");
	this.shape_167.setTransform(734.375,746.55);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgFA3IAAhKIALAAIAABKgAgEgoQgDgDAAgDQAAgDADgDQACgCACAAQADAAADACQACADAAADQAAADgCACQgDADgDAAQgCAAgCgCg");
	this.shape_168.setTransform(728.225,744.925);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AATA4IAAgsQAAgWgRAAQgIAAgGAGQgGAHAAAKIAAArIgMAAIAAhvIAMAAIAAAxIAAAAQAJgPAPAAQAZAAAAAfIAAAug");
	this.shape_169.setTransform(722.225,744.85);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgLA2IgHgBIgHgCIgGgDIAAgOIAGADIAHADIAIADIAHAAQALAAAFgEQAGgEAAgIQAAgFgCgDIgFgFQgDgDgFgCIgJgGIgKgEIgIgGQgEgEgCgEQgCgFAAgFQAAgIADgEQAEgGAFgDQAFgEAGgCQAHgBAGAAQAPAAAHADIAAAPQgJgHgPAAIgHAAIgHAEIgFAEQgCADAAAFQAAADACAEIAEAFIAHAFIAJAEIALAGQAFACADAFQAEADADAFQACAEAAAGQAAAIgDAFQgDAGgFADQgGADgGACQgHABgHAAIgGAAg");
	this.shape_170.setTransform(714.075,745.15);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AhJB5IAAgMQAAgPAEgLQADgNAIgKQAHgKANgKIAegZQAMgJAJgHQAIgIAGgJQAFgIACgJQADgJAAgKQAAgKgEgJQgDgIgGgFQgGgFgIgDQgIgDgIAAQgIAAgIACIgPAGQgHAEgGAGQgIAFgFAGIAAgdQALgLAOgGQAOgGAVAAQAOAAAMAFQAMADAKAJQAJAHAFAMQAFAMABAQQgBAOgDALQgDAMgHAKQgGAKgKAJQgKAJgNAKIgbAUQgLAJgGAHQgHAHgCAHQgDAIAAAJIB2AAIAAAZg");
	this.shape_171.setTransform(154.9,726.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AhIB5IAAgMQAAgPADgLQADgNAIgKQAHgKANgKIAegZQAMgJAJgHQAIgIAGgJQAFgIADgJQACgJAAgKQAAgKgEgJQgDgIgGgFQgGgFgIgDQgIgDgIAAQgIAAgIACIgOAGQgIAEgHAGQgGAFgGAGIAAgdQALgLAOgGQAOgGAVAAQAOAAAMAFQANADAJAJQAJAHAFAMQAFAMABAQQgBAOgDALQgDAMgHAKQgGAKgKAJQgKAJgOAKIgaAUQgLAJgHAHQgGAHgCAHQgDAIAAAJIB2AAIAAAZg");
	this.shape_172.setTransform(136.55,726.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AghB0QgOgJgKgOQgKgQgFgVQgEgXAAgcQAAgfAEgYQAGgXAKgQQAKgRAPgIQAPgIATAAQBKAAABB6QgBAdgFAXQgGAXgJAQQgLAPgOAJQgPAIgTAAQgRAAgOgHgAgxADQAABhAxAAQAyAAAAhiQAAhlgxAAQgyAAAABmg");
	this.shape_173.setTransform(118.25,726.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AhIB5IAAgMQgBgPAEgLQADgNAIgKQAHgKANgKIAegZQAMgJAJgHQAJgIAFgJQAFgIADgJQABgJABgKQAAgKgDgJQgEgIgGgFQgGgFgIgDQgIgDgIAAQgIAAgIACIgOAGQgIAEgHAGQgGAFgGAGIAAgdQAMgLAOgGQANgGAVAAQAOAAAMAFQANADAJAJQAJAHAFAMQAFAMAAAQQAAAOgDALQgDAMgGAKQgHAKgKAJQgKAJgOAKIgaAUQgLAJgHAHQgGAHgDAHQgCAIAAAJIB1AAIAAAZg");
	this.shape_174.setTransform(99.85,726.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AhKB7IAAgYQAJACAHAAQAVABAKgZIAOggIhCipIAeAAIAuCCIADANIAAAAIAEgNIAwiCIAcAAIhODEQgUA1gmAAQgKAAgIgCg");
	this.shape_175.setTransform(73.225,733.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("Ag0BMQgOgOAAgWQAAgvA4gHIAygIQAAgrgjAAQgdAAgaAVIAAgcQAZgQAhAAQA7AAAABAIAABtIgbAAIAAgaIgBAAQgRAegiAAQgaAAgOgNgAAAAEQgTADgJAHQgKAHAAARQAAAMAJAJQAJAHAOAAQAUAAANgOQANgPAAgVIAAgQg");
	this.shape_176.setTransform(55.85,729.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("ABdB3IAAifQAAgSADgcIAAAAQgFAQgDAHIhRC2IgNAAIhRi0QgEgJgDgQIgBAAIABAuIAACfIgbAAIAAjtIAmAAIBJClQAIATACAJIAAAAIAMgcIBLilIAiAAIAADtg");
	this.shape_177.setTransform(32.35,726.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgTA+IAAhkIgeAAIAAgWIAeAAIAAgqIAagJIAAAzIArAAIAAAWIgrAAIAABgQAAAQAGAIQAFAHAOAAQAKAAAIgFIAAAXQgKAFgQAAQgrAAAAgyg");
	this.shape_178.setTransform(157.025,680.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgrBWIAAioIAbAAIAAAiIABAAQAGgRAKgLQAMgJAPgBQALABAFACIAAAcQgHgFgNgBQgSAAgKARQgMARAAAbIAABWg");
	this.shape_179.setTransform(145.725,682.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("ABLB3IgZhCIhkAAIgYBCIgfAAIBbjtIAcAAIBcDtgAgEhJIglBkIBRAAIglhkIgDgQIAAAAIgEAQg");
	this.shape_180.setTransform(127.55,679.25);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AhNB+IAAj3IAbAAIAAAeIABAAQAUgiAlAAQAhAAATAXQASAXAAAmQAAAqgVAaQgUAZgkAAQggAAgSgdIgBAAIAABngAgkhVQgOAQAAAZIAAAXQAAAVAOAOQANAPAWAAQAXAAAOgTQAOgSAAghQAAgdgNgQQgNgQgWAAQgXAAgPARg");
	this.shape_181.setTransform(97.875,686.35);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("ABdBXIAAhhQAAgcgIgMQgJgNgVAAQgRAAgMAQQgMAQAAAWIAABgIgbAAIAAhkQAAgygmAAQgSAAgMAPQgLAPAAAYIAABgIgcAAIAAipIAcAAIAAAbIAAAAQASgfAjAAQARAAANAKQAMAKAFAPQATgjAmAAQA4AAAABFIAABog");
	this.shape_182.setTransform(72.825,682.45);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("Ag8BBQgXgYAAgnQAAgqAYgYQAXgYAnAAQAmAAAVAXQAWAYAAApQAAAogXAZQgXAYgmAAQgmAAgWgYgAgogvQgPASAAAeQAAAeAQASQAPARAZAAQAaAAAPgRQAOgRAAgfQAAgggOgRQgPgRgaAAQgZAAgQASg");
	this.shape_183.setTransform(48.075,682.65);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("Ag5BbQgfgiAAg1QAAg3AjgkQAigjA0AAQAiAAAWAJIAAAeQgagOgeAAQgoAAgaAcQgZAbAAAtQAAArAXAaQAYAaAmAAQAkAAAagQIAAAbQgaAOgoAAQgyAAgeggg");
	this.shape_184.setTransform(27.525,679.25);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("Ag8BBQgXgYAAgnQAAgqAYgYQAXgYAnAAQAmAAAVAXQAWAYAAApQAAAogXAZQgXAYgmAAQgmAAgWgYgAgogvQgPASAAAeQAAAeAQASQAPARAZAAQAaAAAPgRQAOgRAAgfQAAgggOgRQgPgRgaAAQgZAAgQASg");
	this.shape_185.setTransform(93.425,635.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgTA+IAAhkIgeAAIAAgWIAeAAIAAgqIAagJIAAAzIArAAIAAAWIgrAAIAABgQAAAQAGAIQAFAHAOAAQAKAAAIgFIAAAXQgKAFgQAAQgrAAAAgyg");
	this.shape_186.setTransform(77.925,633.05);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("Ag8BBQgXgYAAgnQAAgqAYgYQAXgYAnAAQAmAAAVAXQAWAYAAApQAAAogXAZQgXAYgmAAQgmAAgWgYgAgogvQgPASAAAeQAAAeAQASQAPARAZAAQAaAAAPgRQAOgRAAgfQAAgggOgRQgPgRgaAAQgZAAgQASg");
	this.shape_187.setTransform(62.325,635.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgaB6IgQgCIgRgFQgIgCgEgDIAAgiQAFAGAIADIARAIIARADIARACQAYAAANgJQANgKAAgSQAAgJgEgIQgFgHgHgGQgIgGgKgFIgVgLIgXgNQgLgGgIgHQgIgJgEgJQgFgKAAgOQAAgPAHgNQAHgMAMgHQAMgJAPgDQAOgEAPAAQAjAAAQAIIAAAgQgVgPghAAQgIAAgJACQgJACgIAFQgHADgEAHQgFAHAAAKQAAAJAEAHQADAHAHAFQAGAGAKAEIAVAMIAYAMQAMAHAIAJQAJAIAFALQAFAJAAAOQAAARgHANQgHAMgLAIQgMAHgPAEQgQADgQAAIgOgBg");
	this.shape_188.setTransform(43.525,632);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("Ag+B3IAAjtIB4AAIAAAZIhcAAIAABPIBVAAIAAAZIhVAAIAABTIBhAAIAAAZg");
	this.shape_189.setTransform(26.525,632);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136}]},95).wait(10));

	// phonebody
	this.instance_2 = new lib.LePhone("synched",0);
	this.instance_2.setTransform(530,389.9,1,1,0,0,0,175.5,268.9);

	this.instance_3 = new lib.LePhone("synched",0);
	this.instance_3.setTransform(530,389.9,1,1,0,0,0,175.5,268.9);

	this.instance_4 = new lib.LePhone("synched",0);
	this.instance_4.setTransform(530,389.9,1,1,0,0,0,175.5,268.9);

	this.instance_5 = new lib.LePhone("synched",0);
	this.instance_5.setTransform(530,389.9,1,1,0,0,0,175.5,268.9);

	this.instance_6 = new lib.LePhone("synched",0);
	this.instance_6.setTransform(530,389.9,1,1,0,0,0,175.5,268.9);

	this.instance_7 = new lib.LePhone("synched",0);
	this.instance_7.setTransform(530,389.9,1,1,0,0,0,175.5,268.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},18).to({state:[]},41).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:530.5,y:390.85},0).to({scaleX:1.6618,scaleY:1.6618},18).to({_off:true},41).wait(45));

	// Button
	this.LeButton1 = new lib.LeButton1();
	this.LeButton1.name = "LeButton1";
	this.LeButton1.setTransform(940.15,709.65,1,1,0,0,0,50,25);
	new cjs.ButtonHelper(this.LeButton1, 0, 1, 1);

	this.LeButton2 = new lib.LeButton2();
	this.LeButton2.name = "LeButton2";
	this.LeButton2.setTransform(941.45,708.85,1,1,0,0,0,50,25);
	new cjs.ButtonHelper(this.LeButton2, 0, 1, 1);

	this.LeButton3 = new lib.LeButton3();
	this.LeButton3.name = "LeButton3";
	this.LeButton3.setTransform(941.45,708.85,1,1,0,0,0,50,25);
	new cjs.ButtonHelper(this.LeButton3, 0, 1, 1);

	this.LeButton4 = new lib.LeButton4();
	this.LeButton4.name = "LeButton4";
	this.LeButton4.setTransform(941.45,708.85,1,1,0,0,0,50,25);
	new cjs.ButtonHelper(this.LeButton4, 0, 1, 1);

	this.LeButton5 = new lib.LeButton5();
	this.LeButton5.name = "LeButton5";
	this.LeButton5.setTransform(941.45,708.85,1,1,0,0,0,50,25);
	new cjs.ButtonHelper(this.LeButton5, 0, 1, 1);

	this.LeButton6 = new lib.LeButton6();
	this.LeButton6.name = "LeButton6";
	this.LeButton6.setTransform(941.45,708.85,1,1,0,0,0,50,25);
	new cjs.ButtonHelper(this.LeButton6, 0, 1, 1);

	this.LeButton7 = new lib.LeButton7();
	this.LeButton7.name = "LeButton7";
	this.LeButton7.setTransform(941.45,708.85,1,1,0,0,0,50,25);
	new cjs.ButtonHelper(this.LeButton7, 0, 1, 1);

	this.LeButton8 = new lib.LeButton8();
	this.LeButton8.name = "LeButton8";
	this.LeButton8.setTransform(941.45,708.85,1,1,0,0,0,50,25);
	new cjs.ButtonHelper(this.LeButton8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.LeButton1}]}).to({state:[{t:this.LeButton2}]},18).to({state:[{t:this.LeButton3}]},2).to({state:[{t:this.LeButton4}]},5).to({state:[{t:this.LeButton5}]},4).to({state:[{t:this.LeButton6}]},4).to({state:[{t:this.LeButton7}]},6).to({state:[{t:this.LeButton8}]},20).to({state:[]},1).wait(45));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-258.9,302.3,1724.9,561.5);
// library properties:
lib.properties = {
	id: 'A7EF9C76D2DB2441924397DA1E8EACF8',
	width: 1024,
	height: 768,
	fps: 10,
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
an.compositions['A7EF9C76D2DB2441924397DA1E8EACF8'] = {
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