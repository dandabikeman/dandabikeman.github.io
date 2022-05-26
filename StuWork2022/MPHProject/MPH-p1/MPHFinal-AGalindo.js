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


(lib.nose2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAfA5QAngfAfAfAhmA5QABgBABgBQAmgdAfAfAiLA5QATgjAUgXQBuiGCCC+");
	this.shape.setTransform(0,0.0004);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose2, new cjs.Rectangle(-15.5,-7.2,31,14.4), null);


(lib.nose_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABLBcQAdgBAMgWQALgWgngtQgSgTgLgcQgIgWgDgaAhJBeQgdAAgMgWQgMgWAogtQAhglAIg9AhFA/QAEgNAYgBQAUABAMAMQALAMAQgIQAQgPAQACQAFABAEABQAKACAFAG");
	this.shape.setTransform(11.8412,9.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose_1, new cjs.Rectangle(-1,-1,25.7,20.9), null);


(lib.necklace = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("AEXiLQAAAPALALQAKALAQAAQAPAAALgLQALgLAAgPQAAgQgLgLQgLgKgPAAQgQAAgKAKQgLALAAAQgADUADQAAANAKAJQAJAJANAAQANAAAJgJQAJgJAAgNQAAgMgJgKQgJgJgNAAQgNAAgJAJQgKAKAAAMgADyhBQAAAQALALQALALAQAAQAPAAAMgLQALgLAAgQQAAgPgLgMQgMgLgPAAQgQAAgLALQgLAMAAAPgACfA3QAAANAJAJQAJAJANAAQANAAAJgJQAJgJAAgNQAAgNgJgJQgJgJgNAAQgNAAgJAJQgJAJAAANgABfBuQAAAPAKAKQALALAOAAQAPAAAKgLQALgKAAgPQAAgOgLgLQgKgKgPAAQgOAAgLAKQgKALAAAOgAgcCKQAEgOACgCQAJgKANAAQAOAAAJAKQAKAJAAAOQAAANgKAKQgJAJgOAAQgNAAgJgJQgHgHgCgKQgCADgDADQgLALgOAAQgPAAgKgLQgLgKAAgPQAAgOALgLQAKgKAPAAQAOAAALAKQAIAJAAAWgABhCDQAAAPgJAKQgIALgMAAQgMAAgJgLQgIgKAAgPQAAgPAIgLQAJgKAMAAQAMAAAIAKQAJALAAAPgAkWiLQAAAPgLALQgKALgQAAQgPAAgLgLQgLgLAAgPQAAgQALgLQALgKAPAAQAQAAAKAKQALALAAAQgAjxhBQAAAQgLALQgLALgQAAQgPAAgMgLQgLgLAAgQQAAgPALgMQAMgLAPAAQAQAAALALQALAMAAAPgAjTADQAAANgKAJQgJAJgNAAQgNAAgJgJQgJgJAAgNQAAgMAJgKQAJgJANAAQANAAAJAJQAKAKAAAMgAheBuQAAANgIAKQgBABgBABQgLALgOAAQgPAAgKgLQgBgBgBgBQgJgKAAgNQAAgOALgLQAKgKAPAAQAOAAALAKQAKALAAAOgAieA3QAAANgJAJQgJAJgNAAQgNAAgJgJQgJgJAAgNQAAgNAJgJQAJgJANAAQANAAAJAJQAJAJAAANg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.8,1,1).p("AAAAHQgBgDAAgDQAAgKADAE");
	this.shape_1.setTransform(-3.075,14.4313);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWCoQgHgHgCgKIgFAGQgLALgOAAQgPAAgKgLQgKgKAAgPQAAgOAKgLQAKgKAPAAQAOAAALAKQAJAJgBAWIAAAAIAAgBIgBAAIgBAAIAAAAQgBAAAAAIIAAAGIAAgGQAAgIABAAIAAAAIABAAIABAAIAAABIAAAAQAEgOACgCQAJgKANAAQANAAAKAKQAJAJAAAOQAAANgJAKQgKAJgNAAQgNAAgJgJgAAvCcQgIgKAAgPQAAgPAIgLQAJgKAMAAQALAAAJAKQAIALAAAPQAAAPgIAKQgJALgLAAQgMAAgJgLgABpCHQgLgKAAgPQAAgOALgLQAKgKAPAAQAPAAAKAKQALALAAAOQAAAPgLAKQgKALgPAAQgPAAgKgLgAiaCHIgCgCQgJgKAAgNQAAgOALgLQAKgKAPAAQAPAAAKAKQAKALAAAOQABANgJAKIgCACQgKALgPAAQgPAAgKgLgACnBNQgJgJAAgNQAAgNAJgJQAKgJANAAQAMAAAJAJQAKAJgBANQABANgKAJQgJAJgMAAQgNAAgKgJgAjTBNQgJgJAAgNQAAgNAJgJQAJgJANAAQANAAAKAJQAJAJAAANQAAANgJAJQgKAJgNAAQgNAAgJgJgADdAZQgJgJAAgNQAAgMAJgKQAKgJANAAQANAAAJAJQAJAKAAAMQAAANgJAJQgJAJgNAAQgNAAgKgJgAkJAZQgJgJAAgNQAAgMAJgKQAJgJANAAQANAAAKAJQAJAKAAAMQAAANgJAJQgKAJgNAAQgNAAgJgJgAD9gmQgMgLAAgQQAAgPAMgMQALgLAQAAQAPAAAMALQAKAMABAPQgBAQgKALQgMALgPAAQgQAAgLgLgAkygmQgKgLgBgQQABgPAKgMQAMgLAPAAQAQAAALALQAMAMAAAPQAAAQgMALQgLALgQAAQgPAAgMgLgAEihxQgMgLAAgPQAAgQAMgLQAKgKAQAAQAPAAALAKQALALAAAQQAAAPgLALQgLALgPAAQgQAAgKgLgAlVhxQgLgLAAgPQAAgQALgLQALgKAPAAQAQAAAKAKQAMALAAAQQAAAPgMALQgKALgQAAQgPAAgLgLg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.necklace, new cjs.Rectangle(-36.2,-18.7,72.5,37.5), null);


(lib.mouth3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#9D0000").ss(2,1,1).p("AiZADIALgIQAiggBSgOQBSgOBiBHQheA/hngUQhBgLgtgjg");
	this.shape.setTransform(-0.25,6.6179);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AD5iPQADAPACAOQATCSiBBIQiNBOiNhLQiOhLAeivIAKAAQDmAFDlgFIAXAAQgKAAABAB");
	this.shape_1.setTransform(-0.0068,0.1572);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("ABWgMIAAAbAAHgMIAAAbAAugMIAAAbAB9gMIAAAbACkgMIAAAbADLgMIAAAbADfgOIAAAdAjegOIAAAXAhvgMIAAAbAiXgMIAAAbAi/gMIAAAbAgfgMIAAAbAhIgMIAAAb");
	this.shape_2.setTransform(0.1,-9.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A60000").s().p("AgrAxQhAgLgugjIALgIQAjggBSgOQBRgOBiBHQhIAwhNAAQgXAAgZgFg");
	this.shape_3.setTransform(-0.25,6.6179);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AiKBtQiOhLAeiwIAKAAIAAAKIAgAAIATAbIAnAAIAoAAIAoAAIAoAAIAmAAIAnAAIAoAAIAAAdIAAgdIAnAAIAnAAIAnAAQAKgeAFgHQAIgEAPAEIgXAAIAXAAQgKABABABQAFAHAFAUIALAAQATCTiBBHQhIAohIAAQhFAAhFgkgAgcAOQhSAOgiAgIgLAJQAtAjBBALQBmAUBfg/QhTg8hGAAQgOAAgNACgADghMIAAgfgADMhMIAAgdgAClhMIAAgdgAB+hMIAAgdgAAvhMIAAgdgAAIhMIAAgdgAgehMIAAgdgAhGhMIAAgdgAhuhMIAAgdgAiWhMIAAgdgAi9hMIAAgdgAjdhTIAAgYgABXhpg");
	this.shape_4.setTransform(-0.0068,0.0447);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth3, new cjs.Rectangle(-27.1,-15.7,54.3,31.8), null);


(lib.mouth2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Aj1AWQAJgRAJgOQBgiqCMBHQBuhTByC2QAGAJAHALAj1AWQAggTAhgMQCvhJDGBJQAaAJAbALAj1AWQEJDnDijyAj1AWQEABBDrhM");
	this.shape.setTransform(0.025,0.0259);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Aj1AUQAggTAhgNQCvhIDGBIQAaAKAbALQh/AoiEAAQhyAAh2gdg");
	this.shape_1.setTransform(0.025,0.2983);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Aj1AWQEABBDrhMQh0B8h+AAQh3AAiChxgAjjgJQBgiqCMBHQBuhTByC2IANAUQgbgLgagJQjGhJivBJQghAMggATIASgfg");
	this.shape_2.setTransform(0.025,0.0259);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth2, new cjs.Rectangle(-25.5,-14.4,51.1,28.9), null);


(lib.mouth1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AlIgKQCbiEC4BPQCvhYCPCMAlIgKQFFATFMgUAlIgKQFTDaE+jb");
	this.shape.setTransform(0.025,0.0331);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AlIgKIAFAAIAWACIADAAQCOAICOAAIABAAIAAAAQCkAACngLIALAAQigBtilAAQijAAiphsgAgOAAQiOAAiOgIIgDAAIgWgCIgFAAQCbiEC4BPQCvhYCPCMIgLAAQinALikAAIAAAAIgBAAg");
	this.shape_1.setTransform(0.025,0.0331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth1, new cjs.Rectangle(-34.3,-11.3,68.69999999999999,22.700000000000003), null);


(lib.heartglasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF00CC").ss(3,1,1).p("AGiAgIBKAAIBGhUAmeA1IhVAAIg+hZ");
	this.shape.setTransform(42.025,12.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF00CC").ss(4,1,1).p("AAygfQAXCICgBnQCphtAQiSQAFgugKgxQgsiIiGCUADmiCQiGiUgsCIQgGAdAAAcQgBAWADAWQABAFABAFAjliCQCFiUAsCIQAHAeAAAcQAAAUgCAUQgBAIgBAHAjqiCQiGiUgtCIQgLA8AKA3QAZCFCdBmQCfhmAYiHIBjgC");
	this.shape_1.setTransform(42.0101,20.8311);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,51,153,0.2)").s().p("AAygfIgCgKQgDgWABgWQAAgcAGgdQAsiICGCUIAFAAQCGiUAsCIQAKAxgFAuQgQCSipBtQighngXiIgAmegbQgKg3ALg8QAtiICGCUIAFAAQCFiUAsCIQAHAeAAAcQAAAUgCAUIgCAPQgYCHifBmQidhmgZiFg");
	this.shape_2.setTransform(42.0101,20.8311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.heartglasses, new cjs.Rectangle(-15.7,-2,115.5,45.7), null);


(lib.glasses2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AFPgNQAAADAAAEQAABegtA1QgsA0g/gBQg/AAgsg0Qgtg0AAheQAAgBAAgBQAAhfAvgxQAvgxA/AAQA/AAApAwQApAwACBcIBCAAIAvhHAlMgIQAChcAogvQAogwBAgGQBAgGAvA3QAvA2AABgQAAADAAADQgBBbglAxQgmAzhBAGQhCAHgwg4Qgvg5gChbQAAgDAAgDQAAgDAAgDIhKAAIgphAAgeAEIACAAIA0gC");
	this.shape.setTransform(3.125,0.454);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,255,255,0.329)").s().p("AkcCYQgvg5gChbIAAgGIAAgGQAChcAogvQAogwBAgGQBAgGAvA3QAvA2AABgIAAAGIgCAAIACAAQgBBbglAxQgmAzhBAGIgOABQg5AAgrgygAC2DAQg/AAgsg0Qgtg0AAheIAAgCQAAhfAvgxQAvgxA/AAQA/AAApAwQApAwACBcIAAAHQAABegtA1QgsAzg+AAIgBAAg");
	this.shape_1.setTransform(3.225,0.454);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses2, new cjs.Rectangle(-43.1,-21.2,92.5,43.4), null);


(lib.feet = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AA6EIIAAoPIBaAAIAAGXQg+AZgcBfgACUCQQA+gZBOAZQAxA8gxA8IjmAAAhSEIIAcAAIAAoPIhbAAIAAGXQA7AuAEBKgAiRCQQhKgchBAcQg3A8A3A8IDKAA");
	this.shape.setTransform(0.05,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99AF77").s().p("AA6BDQAcheA/gZQA9gZBOAZQAwA7gwA8gAkcBDQg2g8A2g7QBBgcBLAcQA6AuAEBJg");
	this.shape_1.setTransform(0.05,19.6625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99CC66").s().p("AA4kHIBbAAIAAGWQg/AagcBfgAhUEIQgDhLg7guIAAmWIBaAAIAAIPg");
	this.shape_2.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.feet, new cjs.Rectangle(-32.7,-27.8,65.5,55.7), null);


(lib.eyes2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACqgIIAAAPAipgGIAAAP");
	this.shape.setTransform(-3.2,15.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADCAAQAAANgHAKQgHAKgKAAQgKAAgIgKQgHgKAAgNQAAgOAHgKQAIgKAKAAQAKAAAHAKQAHAKAAAOgAiQABQAAAOgHAKQgIAKgJAAQgKAAgIgKQgHgKAAgOQAAgNAHgKQAIgKAKAAQAJAAAIAKQAHAKAAANg");
	this.shape_1.setTransform(0.8,0.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AEhAAQAABDgjAwQgjAwgxAAQgWAAgTgJQgYgMgUgbQgigwAAhDQAAhEAigxQAjgvAyAAQAxAAAjAvQAjAxAABEgAgyABQAABEgjAwQgiAwgyAAQgVAAgTgJQgZgMgTgbQgjgwAAhEQAAhDAjgxQAjgvAxAAQAyAAAiAvQAjAxAABDg");
	this.shape_2.setTransform(0.85,-0.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai6AZQgHgKAAgOQAAgNAHgKQAIgKAKAAQAJAAAHAKQAIAKAAANQAAAOgIAKQgHAKgJAAQgKAAgIgKgACYAXQgHgKAAgNQAAgOAHgKQAHgKAKAAQALAAAGAKQAIAKAAAOQAAANgIAKQgGAKgLAAQgKAAgHgKg");
	this.shape_3.setTransform(0.8,0.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjRCcQgYgMgUgbQgigwAAhEQAAhDAigxQAjgvAxAAQAyAAAiAvQAjAxAABDQAABEgjAwQgiAwgyAAQgVAAgTgJgAi7gPQgGALgBANQABANAGAKQAIAKAKAAQAKAAAHgKQAIgKAAgNQAAgNgIgLQgHgJgKAAQgKAAgIAJgACBCaQgZgMgTgbQgjgwABhDQgBhEAjgxQAjgvAyAAQAxAAAiAvQAkAxgBBEQABBDgkAwQgiAwgxAAQgWAAgTgJgACYgRQgIALABANQgBANAIAKQAHAKAKAAQAKAAAHgKQAIgKgBgNQABgNgIgLQgHgJgKAAQgKAAgHAJg");
	this.shape_4.setTransform(0.85,-0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes2, new cjs.Rectangle(-29,-17.9,59.7,35.7), null);


(lib.eyes1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACZisIgbAmIAAgzAA+iGQAOgKARAAIAAgpAA+iGIAAgzAAGglQAHggAOgcQAEgKAIgFQAMgSALgEAAAgxQADAKAAAKQAAAdgNAUQgNAVgQAAQgQAAgPgVQgLgUAAgdQAAgeALgUQAPgUAQAAQAJAAAKAHAAAgxQADAFADAHAC5gQQgQhJgLgKIgBAAACZhjQACAAACAAABrgLQgBgBgBgCQgKgSAAgZQAAgZAKgUQAJgSAPAAQAOAAAKASIAAADIAABNABrgLQgCgLAAgMQAAgcAMgUQAMgUAQAAQAFAAADADABrgLQAAABAAABQADALAHALQAMATAQAAQARAAAMgTQAHgNAEgOQAAAOAAASQAABDgcAwQgaAwgmAAQgmAAgcgwQgMgXgHgZQgIggAAgjQAAgdAGgaACMh6QAHAKAKANABdiQQARAAAQAKQAHAEAHAIIAfghAAnhwIgfgeAhph9QAJgFAMAAQADAAACAAIAAgnAhph9IAAgsAichUQAPgUARgKQAJgIAKgDAg1h6QATAKAOAUQAEAFAGAIQAJAMABASAhPiCQAOAAAMAIAgbiYIgaAeIAAgvAichUIgcguAh8hyIgagpAAIBVQgIAcgQAZQgcAwgoAAQgoAAgggwQgcgtAAhBQAAhBAcgv");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah5A8QgLgUAAgeQAAgdALgUQAPgUAQAAQAJAAAKAHIAKANQAJAMACASQACAJAAAKQAAAegNAUQgNAVgQAAQgQAAgPgVgABBA1QgHgLgDgMIAAgCQgCgLAAgMQAAgbAMgUQAMgUAQAAQAFAAADADIAEAAIgEAAQgDgDgFAAQgQAAgMAUQgMAUAAAbQAAAMACALIgCgDQgJgSAAgYQAAgZAJgUQAJgSAPAAQAPAAAJASIAEADIABAAQALAKAQBIQgQhIgLgKQAJAHAHAKQALAUAAAbIAAASIAAACQgEAPgHANQgMATgRAAQgQAAgMgTgABlARIAAhMgABlg7IAAgDgABqg7IAAAAg");
	this.shape_1.setTransform(5.125,-3.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AicB2QgcguAAhAQAAhBAcgvQAPgUARgLQAKgHAJgDQAKgFALAAIAFAAQAOAAAMAIQATAKAOAUQgKgHgJAAQgQAAgPATQgLAVAAAeQAAAeALATQAPAVAQAAQARAAAMgVQANgTAAgeQgBgLgCgKIAFANQgFAaAAAdQAAAjAHAfQgHAdgPAZQgcAvgpABQgogBgggvgAAaBxQgLgXgIgaQgHgfAAgjQAAgdAFgaQAIggANgcQAFgKAIgGQAMgRAKgEQAPgKARAAQARAAAQAKQAHAEAHAIIARAXIgFgDQgJgSgOAAQgPAAgKASQgJAUAAAZQAAAZAJARIACAEIAAACQAEAMAGAKQAMATARAAQARAAAMgTQAGgMAEgQIAAAhQAABDgbAwQgbAwglgBQgmABgdgwgAAFg5IAAAAg");
	this.shape_2.setTransform(0,2.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes1, new cjs.Rectangle(-19.4,-19.5,38.9,39.1), null);


(lib.eyebrows_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(0,0,0,0.698)").ss(2,1,1).p("AA1gKIAKg2Ag0BBIgKg2");
	this.shape.setTransform(46.95,9.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AHCgCIAUAKAHCgCQg4g+hQgOQgvgJg5AJQgEAAgEABIiMAVAA1gCID2gkQBiALA1AZAnBBJQACgDADgCQAfgiAogSQAMgGANgFQALgDALgCQA4gNBFAMICLAUAg0BJIj2gkQheAKg0AXQgDABgCACIgUAL");
	this.shape_1.setTransform(46.975,8.3875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#473423").s().p("Ag9BHIgBgBQgGgIgNgLQgTgOgOgFIgCgBIgBgCIABgBIACAAIAMAFQAKAFAOALIAOANIAFAGIABACQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgBABIgBgBgAhRBDQgYgSgXgLIgHgEQgXgKgSgFIgHgCIgDgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAABAAIAAAAIACAAIACAAIATAFIAPAGQAmAPAgAZIABABIAAACIgCAAgAh+A8IgugZQgUgKgTgGQgXgIgXgCIgHgBIgCAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIADAAQAOABAOADIARAEIADABIAPAFIADABIAUAJIAKAEIArAYQABABAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCgBgAmWA1IgBAAIAAgCIABgBIAHgEQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIgCADIgGADIgBAAIAAAAgAhFA1IgBAAIAAgBIAAgBIAAAAIAAAAIAAgBIgBAAIAAgCIAAAAIAAgCIgBgBIAAAAIgBgBIAAgBIAAgBIAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAABIABAAIAAAAIAAABIABAAIAAACIABAAIAAAAIAAABIAAABIABAAIAAAEIAAAAIABABIgBABIAAABIAAAAgAi9AyQgogUgngLIgbgGQgBgBAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIABgBIACAAQAGAAALADIAVAGQAkALAhARQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgCgBgAmCAtIAAgBIABgBIAMgFIAIgDIAAABIACABIAAABIgCABIgJADIgJAEIgCABIgBgCgAhSAoIgBgBIgBAAIgBgBIAAgCIgBAAIAAAAIgBAAIAAgBIgBgBIAAAAIgBgBIAAAAIgBAAIgBgBIAAAAIgBgBIAAAAIgBgBIAAAAIAAgBIAAAAIAAgBIABgBIABAAIADACIABABIABABIABABIABAAIAAABIAAAAIAAAAIABABIAAgBIAAABIABABIAAAAIABAAIAAABIABABIAAABIAAAAIAAABIAAAAIgBABgAkIAiIgEgBQgUgFgTgBQgUgBgSAGIgDABIgBgCQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAPgEQAWgEAcAFIATAFIADABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABIgCAAIgCgBgAltAeIgBAAIAAgDIABAAIABgBIAAABIABAAIABAAIAAAAIAAAAIAAACIAAAAIgBABIgCAAgAlOAUIgBgBIAAgBIAEgCIABAAIADgBIABAAIALgDIAFAAIAEgBIABABIABACIgBABIgbAFgAA8gDQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgCIAFgGQAEgFAKgIQAOgLAKgEIALgGIADAAIABABIgBACIgDABQgOAFgSAOQgNALgGAIIgBABIgCABIAAAAgABOgHQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgBQAfgYAlgQQASgHASgEIADAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgCABQgUAEgcANIgIAEQgWALgYASIgCABIgBAAIgBAAgAB7gPIACgCIAsgZIAJgEIAUgJQAggMAigDIADAAIABABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAABIgDAAQgpADgyAYIguAZIgCABQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAgABFgWIAAAAIgCAAIAAgCIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgDQABAAgBAAIABAAIAAgCIABgBIAAAAIAAAAQAAAAABgBQAAAAAAAAQABABAAAAQAAAAABAAQgBABABAAIAAABIAAABIAAAAIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAACIgBAAIABAAIgBABIAAABIAAABIAAABIgBAAIAAABgAGVgWIgFgDQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAIAIAFIAAACIgBAAIgBAAIgBAAgAC6gZQgBgBABAAQAAAAAAgBQAAAAAAAAQABgBAAAAQArgVAwgNIARgDIACAAIABABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQg1ALg1AaIgDABQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAgAGAgdIgJgEIgJgDIgCgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAABAAIABgBIAAgBIAJADIALAFIACABIAAABIgBACIgCgBgABSgjIgBgBIAAAAIAAgCIABgBIABgBIAAAAIAAAAIAAgBIABAAIABgBIAAgBIABgBIABABIABgCIABgBIACgBIABgBIABAAIABABIAAADIgBAAIgBABIAAAAIgBABIAAAAIgBAAIAAABIgBAAIgBABIgBABIAAAAIgBABIAAgBIgBACIgBABIAAAAIgBABIAAAAIgBAAIAAAAgAEFgoQAAgBAAAAQgBAAAAAAQAAgBABAAQAAAAAAgBIADgBIATgFQAbgFAXAFIAOADQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBABIgCgBQgSgGgVABQgSABgUAFIgEACIgCAAIgCAAgAFtgtIgBAAIgBgBIgBgBIABAAIAAgBIAAAAIABAAIABAAIAAgBIACABIAAAAIAAADIgBAAgAFNg3IgbgFIAAgBIAAgCIABAAIAEAAIAGAAIALADIADABIAAAAIAFACIAAABIgBACg");
	this.shape_2.setTransform(46.9875,8.0375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(70,35,20,0.898)").s().p("AkqArQheAJg0AYIgFACIAFgFQAfghAogTQAMgGANgEIAWgGQA4gMBFAKICLAVIAKA2gAh1AfIABACIACABQAOAFATAOQANALAGAIIABABQAAAAAAAAQABABAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgBgCIgFgGIgOgNQgOgLgKgFIgMgFIgCAAIgBABgAi6ASIADABIAHACQASAFAXAKIAHAEQAXALAYASIACABIACAAIAAgCIgBgBQgggZgmgPIgPgGIgTgFIgCAAIgCAAIAAAAQAAAAgBAAQAAABAAAAQAAAAABABQAAAAAAAAgAkKAHQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAIACAAIAHABQAXACAXAIQATAGAUAKIAuAZIACABQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBIgrgYIgKgEIgUgJIgDgBIgPgFIgDgBIgRgEQgOgDgOgBIgCgBIgBABgAmWA0IgBABIAAACIABAAIABAAIAGgDIACgDQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAgAhJArIAAABIAAABIAAABIABABIAAAAIABABIAAACIAAAAIAAACIABAAIAAABIAAAAIAAAAIAAABIAAABIABAAIACAAIAAAAIAAgBIABgBIgBgBIAAAAIAAgEIgBAAIAAgBIAAgBIAAAAIgBAAIAAgCIgBAAIAAgBIAAAAIgBAAIgBgBIgBABgAkoAMIgBABQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABABIAbAGQAnALAoAUIACABQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQghgRgkgLIgVgGQgLgDgGAAIgBgBIgBABgAl1AoIgMAFIgBABIAAABIABACIACgBIAJgEIAJgDIACgBIAAgBIgCgBIAAgBIgIADgAhdAeIAAABIAAAAIAAABIAAAAIABABIAAAAIABABIAAAAIABABIABAAIAAAAIABABIAAAAIABABIAAABIABAAIAAAAIABAAIAAACIABABIABAAIABABIABAAIABgBIAAAAIAAgBIAAAAIAAgBIgBgBIAAgBIgBAAIAAAAIgBgBIAAgBIAAABIgBgBIAAAAIAAAAIAAgBIgBAAIgBgBIgBgBIgBgBIgDgCIgBAAIgBABgAkzAdQATABAUAFIAEABQAAAAABABQAAAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIgDgBIgTgFQgcgFgWAEIgPAEQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIABACIADgBQAQgFARAAIAFAAgAltAdIgBAAIAAADIABAAIAAAAIACAAIABgBIAAAAIAAgCIAAAAIAAAAIgBAAIgBAAIAAgBIgBABgAk2AOIgFAAIgLADIgBAAIgDABIgBAAIgEACIAAABIABABIACAAIAbgFIABgBIgBgCIgBgBIgEABgAErggIj2AiIAJg1ICMgVIAIgBQA5gIAvAIQBQAOA4A9Qg1gYhigKgABygtIgLAGQgKAEgOALQgKAIgEAFIgFAGIgBACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABABIACgBIABgBQAGgIANgLQASgOAOgFIADgBIABgCIgBgBIgBAAIgCAAgAC4g7QgSAEgSAHQglAQgfAYIgCABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIACAAIACgBQAYgSAWgLIAIgEQAcgNAUgEIACgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgBgBIgCABgAEIhEQgiADggAMIgUAJIgJAEIgsAZIgCACQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIACgBIAugZQAygYApgDIADAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIgBgBIgBgBIgCABgABDgWIAAACIACAAIAAAAIABABIAAgBIABAAIAAgBIAAgBIAAgBIABgBIgBAAIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIAAgBIAAgBQgBAAABgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAABgBAAIAAAAIAAAAIgBABIAAACIgBAAQABAAgBAAIAAADIgBABIAAABIAAAAIAAABIgBAAIAAABgAGOgaQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABABIAFADIACAAIABAAIAAgCIgIgFQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAgAEng/IgRADQgwANgrAVQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIADgBQA1gaA1gLQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAAAAAIgBgBIgBgBIgBABgAFtglIgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIACABIAJADIAJAEIACABIABgCIAAgBIgCgBIgLgFIgJgDgABTgmIgBABIgBABIAAACIAAAAIABABIABAAIAAAAIABgBIAAAAIABgBIABgCIAAABIABgBIAAAAIABgBIABgBIABAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIABAAIAAgDIgBgBIgBAAIgBABIgCABIgBABIgBACIgBgBIgBABIAAABIgBABIgBAAIAAABIAAAAgAEbgvIgTAFIgDABQAAABAAAAQgBAAAAABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAEgCQAUgFASgBQAVgBASAGIACABQABgBAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAgBAAIgOgDQgLgDgLAAQgOAAgOADgAFrguIAAABIgBAAIABABIABABIABAAIABAAIABAAIAAgDIAAAAIgCgBIAAABIgBAAIgBAAgAEzg9IgBAAIAAACIAAABIAbAFIACABIABgCIAAgBIgFgCIAAAAIgDgBIgLgDIgGAAIgCgBIgCABg");
	this.shape_3.setTransform(46.975,7.8375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrows_1, new cjs.Rectangle(-1,-1,96,18.8), null);


(lib.eyebrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAoATQCwhXCvBXAgbAZQi2hbi1Bb");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrow, new cjs.Rectangle(-40.6,-4,81.2,8), null);


(lib.circleflathitarea = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E7F2F6").s().p("AhbDYQgqgRggghQghghgSgqQgSgrAAgwQAAgvASgrQASgqAhghQAgghAqgRQAsgTAvAAQAwAAArATQAqARAhAhQAhAhARAqQATArAAAvQAAAwgTArQgRAqghAhQghAhgqARQgrATgwAAQgvAAgsgTg");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.5,47,47);


(lib.bow2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ABCAsQAZglgJgkQgHgZgTgRQgHgHgJgFQghgSgiAJQgkAKgSAgQiHgwiWAeQgJB7A5B3QAOAdATAeQBQgQBBgrQA5gmAug7QAbAMAagHQAcgGAWgggAA4hHQBAhlCjg8QBfCNgMCoQjOAphehKAhRgyQgTAgAKAjQAJAkAgASQAGAEAGAC");
	this.shape.setTransform(0.0059,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("Ak+CuQg5h4AJh5QCWgfCHAwQgTAhAKAiQAJAkAgASQAGAEAGACQguA6g5AnQhBAqhQAQQgTgdgOgdgABCArQAZgkgJgkQgHgZgTgQQBAhmCjg7QBfCMgMCoQhJAOg7AAQhrAAg9gwg");
	this.shape_1.setTransform(0.0059,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3333FF").s().p("AggBTQgGgCgGgEQgggSgJgkQgKgjATggQASggAkgKQAigJAhASQAJAFAHAHQATARAHAZQAJAjgZAlQgWAggcAHQgJACgKAAQgRAAgRgHg");
	this.shape_2.setTransform(-0.4935,-0.5688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bow2, new cjs.Rectangle(-38.2,-24.7,76.5,49.5), null);


(lib.bow1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ABSgyQCHgwCWAeQALCZhcCUQiWgfhih9QgbAMgagHQgcgGgWggQgZglAJgkQAHgZATgRQhAhlijg8QhfCNAMCoQDOApBehKAg3hHQAHgHAJgFQAhgSAiAJQAkAKASAgQATAggKAjQgJAkggASQgGAEgGAC");
	this.shape.setTransform(-0.0034,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9999FF").s().p("AAmBNQAGgCAGgEQAggSAJgkQAKgigTghQCHgwCWAfQALCYhcCTQiWgehih9gAltBNQgMioBfiMQCjA7BABmQgTAQgHAZQgJAkAZAkQg9AwhrAAQg7AAhJgOg");
	this.shape_1.setTransform(-0.0034,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC99FF").s().p("AgUBYQgcgHgWggQgZglAJgjQAHgZATgRQAHgHAJgFQAhgSAiAJQAkAKASAgQATAggKAjQgJAkggASQgGAEgGACQgRAHgRAAQgKAAgJgCg");
	this.shape_2.setTransform(0.4935,-0.5688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bow1, new cjs.Rectangle(-38.3,-24.7,76.6,49.5), null);


(lib.arms = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AcUjUQk5Dol5DBA8TjUQE5DoF5DB");
	this.shape.setTransform(0,-23.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("ACZGJILilpQDmnsFzgPQB0gFB+AlQAtANAhgRQANgKANgfIAABJQgCATgDAoQgMCKhUCBQhUB/inAuQinAumAgpIsOGQAiYGJIrilpQjmnslzgPQh0gFh+AlQgtANghgRQgNgKgNgfIAABJQACATADAoQAMCKBUCBQBUB/CnAuQCnAuGAgpIMOGQ");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99CC66").s().p("ACYGJILilpQDnnsFzgPQBzgFB/AlQAtANAhgRQANgKANgfIAABJIgFA7QgMCKhUCBQhUB/inAuQinAumAgpIsPGQgARhgWQF6jBE5joQk5Dol6DBgAumBZQmAApinguQinguhUh/QhUiBgMiKIgFg7IAAhJQANAfANAKQAhARAtgNQB/glBzAFQFzAPDnHsILiFpIAABggAxggWQl6jBk5joQE5DoF6DBg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arms, new cjs.Rectangle(-185.3,-50.4,370.6,100.9), null);


(lib.circleflatsalmon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape.setTransform(11.925,0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.925,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgMAbIgIgDIAAgKIAAAAQAEADAGACQAFACAFAAQAFAAADgCQAEgCAAgEQAAgEgCgBIgHgDIgEgBIgGgBQgHgCgDgDQgDgEAAgFQAAgDABgDIAEgGIAHgDQAFgCAEAAIAKACIAIACIAAAKIAAAAIgJgEIgKgCQgEAAgDACQgEACAAAEQAAADACACQACACAFABIAFABIAFABQAGABAEADQADAEAAAGQAAAHgGAFQgGAFgKAAQgGAAgFgCg");
	this.shape_2.setTransform(1.425,1.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_3.setTransform(-4.225,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AARAkIgXgdIgOAAIAAAdIgJAAIAAhHIAUAAIAKAAIAIADQAEADACAEQACAEAAAFQAAAIgEAGQgEAEgGACIAbAggAgUAAIAKAAIAIAAQACgBADgDIADgEIABgHQAAgDgBgDIgDgEIgFgCIgGAAIgMAAg");
	this.shape_4.setTransform(-9.9,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F2F6").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape_5.setTransform(11.75,1.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F2F6").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(6.175,1.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F2F6").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_7.setTransform(1.275,0.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F2F6").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_8.setTransform(-3.925,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F2F6").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_9.setTransform(-10.025,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// center circle outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FDCABD").ss(1,1,1).p("ADYhbQATAsAAAvQAAAwgTAsQgSAqggAgQggAhgqARQgtASgvABQgvAAgsgTQgqgRggghQghgggSgqQgSgsAAgwQAAgvASgsQASgqAhggQAgghAqgSQAsgSAvAAQAvAAAtASQAqASAgAhQAgAgASAqg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// center circle
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDCABD").s().p("AhaDYQgrgRggghQghghgSgqQgSgrAAgwQAAgvASgrQASgqAhghQAgghArgRQArgTAvAAQAwAAArATQAqARAhAhQAhAhARAqQATArAAAvQAAAwgTArQgRAqghAhQghAhgqARQgrATgwAAQgvAAgrgTg");
	this.shape_11.setTransform(-0.025,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhbDYQgqgRggghQghghgSgqQgSgrAAgwQAAgvASgrQASgqAhghQAgghAqgRQAsgTAvAAQAwAAArATQAqARAhAhQAhAhARAqQATArAAAvQAAAwgTArQgRAqghAhQghAhgqARQgrATgwAAQgvAAgsgTg");
	this.shape_12.setTransform(-0.025,-0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F85932").s().p("AhbDYQgqgRggghQghghgSgqQgSgrAAgwQAAgvASgrQASgqAhghQAgghAqgRQAsgTAvAAQAwAAArATQAqARAhAhQAhAhARAqQATArAAAvQAAAwgTArQgRAqghAhQghAhgqARQgrATgwAAQgvAAgsgTg");
	this.shape_13.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// outer circle
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FA8E74").ss(1,1,1).p("AD5hpQAVAzAAA2QAAA3gVAyQgVAwglAmQglAlgxAVQgyAUg3ABQg2AAgzgVQgwgVglglQgmgmgUgwQgVgyAAg3QAAg2AVgzQAUgwAmglQAlgmAwgUQAzgVA2AAQA3AAAyAVQAxAUAlAmQAlAlAVAwg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AD5hpQAVAzAAA2QAAA3gVAyQgVAwglAmQglAlgxAVQgyAUg3ABQg2AAgzgVQgwgVglglQgmgmgUgwQgVgyAAg3QAAg2AVgzQAUgwAmglQAlgmAwgUQAzgVA2AAQA3AAAyAVQAxAUAlAmQAlAlAVAwg");

	this.instance = new lib.circleflathitarea("synched",0);
	this.instance.setTransform(0,0,1.1489,1.1489);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-25,-25,51,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-25, y:-25, w:51, h:51});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-28,56,56);


(lib.circleflatpurple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgXAlIAAgKIAKgJIAJgIIAMgOQADgGABgGQgBgFgDgEQgEgDgGAAQgEAAgFACQgGABgFADIAAAAIAAgKIAJgDIALgBQALAAAGAFQAGAGABAJIgBAIIgEAHIgEAEIgHAHIgJAKIgKAIIAlAAIAAAJg");
	this.shape.setTransform(11.25,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(5.025,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_2.setTransform(-0.425,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-6.325,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAkIAAhHIAtAAIAAAIIgkAAIAAAVIAfAAIAAAHIgfAAIAAAjg");
	this.shape_4.setTransform(-11.05,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F2F6").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape_5.setTransform(11.75,1.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F2F6").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(6.175,1.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F2F6").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_7.setTransform(1.275,0.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F2F6").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_8.setTransform(-3.925,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F2F6").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_9.setTransform(-10.025,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// center circle outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#DEBCF5").ss(1,1,1).p("ADYhbQATAsAAAvQAAAwgTAsQgSAqggAgQggAhgqARQgtASgvABQgvAAgsgTQgqgRggghQghgggSgqQgSgsAAgwQAAgvASgsQASgqAhggQAgghAqgSQAsgSAvAAQAvAAAtASQAqASAgAhQAgAgASAqg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// center circle
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DEBCF5").s().p("AhaDYQgrgRggghQghghgSgqQgSgrAAgwQAAgvASgrQASgqAhghQAgghArgRQArgTAvAAQAwAAArATQAqARAhAhQAhAhARAqQATArAAAvQAAAwgTArQgRAqghAhQghAhgqARQgrATgwAAQgvAAgrgTg");
	this.shape_11.setTransform(-0.025,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhbDYQgqgRggghQghghgSgqQgSgrAAgwQAAgvASgrQASgqAhghQAgghAqgRQAsgTAvAAQAwAAArATQAqARAhAhQAhAhARAqQATArAAAvQAAAwgTArQgRAqghAhQghAhgqARQgrATgwAAQgvAAgsgTg");
	this.shape_12.setTransform(-0.025,-0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A445E4").s().p("AhaDYQgrgRggghQghghgSgqQgSgrAAgwQAAgvASgrQASgqAhghQAgghArgRQArgTAvAAQAwAAArATQAqARAhAhQAhAhARAqQATArAAAvQAAAwgTArQgRAqghAhQghAhgqARQgrATgwAAQgvAAgrgTg");
	this.shape_13.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// outer circle
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#C98FEF").ss(1,1,1).p("AD5hpQAVAzAAA2QAAA3gVAyQgVAwglAmQglAlgxAVQgyAUg3ABQg2AAgzgVQgwgVglglQgmgmgUgwQgVgyAAg3QAAg2AVgzQAUgwAmglQAlgmAwgUQAzgVA2AAQA3AAAyAVQAxAUAlAmQAlAlAVAwg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AD5hpQAVAzAAA2QAAA3gVAyQgVAwglAmQglAlgxAVQgyAUg3ABQg2AAgzgVQgwgVglglQgmgmgUgwQgVgyAAg3QAAg2AVgzQAUgwAmglQAlgmAwgUQAzgVA2AAQA3AAAyAVQAxAUAlAmQAlAlAVAwg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#A445E4").ss(1,1,1).p("AD5hpQAVAzAAA2QAAA3gVAyQgVAwglAmQglAlgxAVQgyAUg3ABQg2AAgzgVQgwgVglglQgmgmgUgwQgVgyAAg3QAAg2AVgzQAUgwAmglQAlgmAwgUQAzgVA2AAQA3AAAyAVQAxAUAlAmQAlAlAVAwg");

	this.instance = new lib.circleflathitarea("synched",0);
	this.instance.setTransform(0,0,1.1489,1.1489);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-25,-25,51,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-25, y:-25, w:51, h:51});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-28,56,56);


(lib.circleflatblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgTAkIAAgHIAPAAIAAgwIgPAAIAAgHIAHAAIAFgCIAEgCQABgCAAgEIAHAAIAABBIAPAAIAAAHg");
	this.shape.setTransform(11.325,0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(5.025,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_2.setTransform(-0.425,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-6.325,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAkIAAhHIAtAAIAAAIIgkAAIAAAVIAfAAIAAAHIgfAAIAAAjg");
	this.shape_4.setTransform(-11.05,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F2F6").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape_5.setTransform(11.75,1.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F2F6").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(6.175,1.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F2F6").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_7.setTransform(1.275,0.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F2F6").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_8.setTransform(-3.925,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F2F6").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_9.setTransform(-10.025,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// center circle outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E7F2F6").ss(1,1,1).p("ADYhbQATAsAAAvQAAAwgTAsQgSAqggAgQggAhgqARQgtASgvABQgvAAgsgTQgqgRggghQghgggSgqQgSgsAAgwQAAgvASgsQASgqAhggQAgghAqgSQAsgSAvAAQAvAAAtASQAqASAgAhQAgAgASAqg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// center circle
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F2F6").s().p("AhbDYQgqgRggghQghghgSgqQgSgrAAgwQAAgvASgrQASgqAhghQAgghAqgRQAsgTAvAAQAwAAArATQAqARAhAhQAhAhARAqQATArAAAvQAAAwgTArQgRAqghAhQghAhgqARQgrATgwAAQgvAAgsgTg");
	this.shape_11.setTransform(0.025,0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhbDYQgqgRggghQghghgSgqQgSgrAAgwQAAgvASgrQASgqAhghQAgghAqgRQAsgTAvAAQAwAAArATQAqARAhAhQAhAhARAqQATArAAAvQAAAwgTArQgRAqghAhQghAhgqARQgrATgwAAQgvAAgsgTg");
	this.shape_12.setTransform(0.025,0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D8BB2").s().p("AhbDYQgqgRggghQghghgSgqQgSgrAAgwQAAgvASgrQASgqAhghQAgghAqgRQAsgTAvAAQAwAAArATQAqARAhAhQAhAhARAqQATArAAAvQAAAwgTArQgRAqghAhQghAhgqARQgrATgwAAQgvAAgsgTg");
	this.shape_13.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// outer circle
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#B2D8E8").ss(1,1,1).p("AD5hpQAVAzAAA2QAAA3gVAyQgVAwglAmQglAlgxAVQgyAUg3ABQg2AAgzgVQgwgVglglQgmgmgUgwQgVgyAAg3QAAg2AVgzQAUgwAmglQAlgmAwgUQAzgVA2AAQA3AAAyAVQAxAUAlAmQAlAlAVAwg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AD5hpQAVAzAAA2QAAA3gVAyQgVAwglAmQglAlgxAVQgyAUg3ABQg2AAgzgVQgwgVglglQgmgmgUgwQgVgyAAg3QAAg2AVgzQAUgwAmglQAlgmAwgUQAzgVA2AAQA3AAAyAVQAxAUAlAmQAlAlAVAwg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#2D8BB2").ss(1,1,1).p("AD5hpQAVAzAAA2QAAA3gVAyQgVAwglAmQglAlgxAVQgyAUg3ABQg2AAgzgVQgwgVglglQgmgmgUgwQgVgyAAg3QAAg2AVgzQAUgwAmglQAlgmAwgUQAzgVA2AAQA3AAAyAVQAxAUAlAmQAlAlAVAwg");

	this.instance = new lib.circleflathitarea("synched",0);
	this.instance.setTransform(0,0,1.1489,1.1489);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-25,-25,51,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-25, y:-25, w:51, h:51});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-28,56,56);


// stage content:
(lib.MPHFinalAGalindo = function(mode,startPosition,loop,reversed) {
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
		this.btn1.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eyes1.x = 199;
			this.eyes1.y = 288;
			this.bow1.x = 224;
			this.bow1.y = 249;	
			this.nose2.x = 200;
			this.nose2.y = 311;	
			this.lips2.x = 201;
			this.lips2.y = 330;	
		}
		this.btn2.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.eyes2.x = 196;
			this.eyes2.y = 293;
			this.bow2.x = 172;
			this.bow2.y = 248;	
			this.nose1.x = 184;
			this.nose1.y = 324;	
			this.lips1.x = 198;
			this.lips1.y = 337;	
			this.necklace1.x = 197;
			this.necklace1.y = 366;	
			this.arms1.x = 197;
			this.arms1.y = 438;	
			this.feet1.x = 195;
			this.feet1.y = 596;	
			this.glasses2.x = 195;
			this.glasses2.y = 293;	
		}
		
		
		this.btn3.addEventListener("click", ClickFaceR.bind(this));
		
		function ClickFaceR() {
			this.eyes1.x = 634;
			this.eyes1.y = 53;
			this.eyes2.x = 633;
			this.eyes2.y = 133;
			this.hglasses1.x = 634;
			this.hglasses1.y = 217;
			this.glasses2.x = 631;
			this.glasses2.y = 313;	
			this.necklace1.x = 634;
			this.necklace1.y = 402;	
			this.arms1.x = 758;
			this.arms1.y = 519;	
			this.lips1.x = 753;
			this.lips1.y = 53;	
			this.lips2.x = 753;
			this.lips2.y = 125;	
			this.lips3.x = 753;
			this.lips3.y = 206;	
			this.bow1.x = 753;
			this.bow1.y = 300;	
			this.bow2.x = 753;
			this.bow2.y = 399;	
			this.brows1.x = 861;
			this.brows1.y = 51;	
			this.brows2.x = 861;
			this.brows2.y = 116;	
			this.nose2.x = 861;
			this.nose2.y = 204;
			this.nose1.x = 848;
			this.nose1.y = 290;	
			this.feet1.x = 861;
			this.feet1.y = 388;
		}
		
		
		
		this.eyes1.on("pressmove", dragMe);
		this.eyes2.on("pressmove", dragMe);
		this.hglasses1.on("pressmove", dragMe);
		this.glasses2.on("pressmove", dragMe);
		this.necklace1.on("pressmove", dragMe);
		this.arms1.on("pressmove", dragMe);
		this.lips1.on("pressmove", dragMe);
		this.lips2.on("pressmove", dragMe);
		this.lips3.on("pressmove", dragMe);
		this.bow1.on("pressmove", dragMe);
		this.bow2.on("pressmove", dragMe);
		this.brows1.on("pressmove", dragMe);
		this.brows2.on("pressmove", dragMe);
		this.nose2.on("pressmove", dragMe);
		this.nose1.on("pressmove", dragMe);
		this.feet1.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons
	this.btn3 = new lib.circleflatsalmon();
	this.btn3.name = "btn3";
	this.btn3.setTransform(463,548.4);
	new cjs.ButtonHelper(this.btn3, 0, 1, 2, false, new lib.circleflatsalmon(), 3);

	this.btn2 = new lib.circleflatpurple();
	this.btn2.name = "btn2";
	this.btn2.setTransform(374,548.4);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.circleflatpurple(), 3);

	this.btn1 = new lib.circleflatblue();
	this.btn1.name = "btn1";
	this.btn1.setTransform(289,548.4);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.circleflatblue(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.btn2},{t:this.btn3}]}).wait(1));
	this.btn3.addEventListener("tick", AdobeAn.handleFilterCache);
	this.btn2.addEventListener("tick", AdobeAn.handleFilterCache);
	this.btn1.addEventListener("tick", AdobeAn.handleFilterCache);

	// Body Parts
	this.lips3 = new lib.mouth3();
	this.lips3.name = "lips3";
	this.lips3.setTransform(753,205.95,0.7423,0.6133,0,0,0,0.2,0.1);

	this.necklace1 = new lib.necklace();
	this.necklace1.name = "necklace1";
	this.necklace1.setTransform(634,402,1,1,0,0,0,0,-0.3);

	this.brows1 = new lib.eyebrow();
	this.brows1.name = "brows1";
	this.brows1.setTransform(860.95,51,0.8913,1);

	this.glasses2 = new lib.glasses2();
	this.glasses2.name = "glasses2";
	this.glasses2.setTransform(631,313);

	this.nose2 = new lib.nose2();
	this.nose2.name = "nose2";
	this.nose2.setTransform(861,204.05,0.6171,0.4587,0,0,0,0.3,0.4);

	this.bow2 = new lib.bow2();
	this.bow2.name = "bow2";
	this.bow2.setTransform(753,399);

	this.bow1 = new lib.bow1();
	this.bow1.name = "bow1";
	this.bow1.setTransform(753,300);

	this.eyes2 = new lib.eyes2();
	this.eyes2.name = "eyes2";
	this.eyes2.setTransform(632.95,133,1.0052,0.8483,0,0,0,0.1,-0.2);

	this.eyes1 = new lib.eyes1();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(634,52.95,1,1,0,0,0,0,0.2);

	this.lips2 = new lib.mouth2();
	this.lips2.name = "lips2";
	this.lips2.setTransform(753,125,0.7543,0.5156,0,0,0,0.1,0.3);

	this.lips1 = new lib.mouth1();
	this.lips1.name = "lips1";
	this.lips1.setTransform(753,53,0.6656,0.7245,0,0,0,0.1,0.1);

	this.feet1 = new lib.feet();
	this.feet1.name = "feet1";
	this.feet1.setTransform(861,388);

	this.arms1 = new lib.arms();
	this.arms1.name = "arms1";
	this.arms1.setTransform(758,519);

	this.hglasses1 = new lib.heartglasses();
	this.hglasses1.name = "hglasses1";
	this.hglasses1.setTransform(634,217,0.8933,1,0,0,0,42,20.8);

	this.brows2 = new lib.eyebrows_1();
	this.brows2.name = "brows2";
	this.brows2.setTransform(861,116,0.7802,0.6144,0,0,0,47,8.4);

	this.nose1 = new lib.nose_1();
	this.nose1.name = "nose1";
	this.nose1.setTransform(848,289.95,0.7339,0.6734,0,0,0,-6.5,17.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF66").ss(1.8,1,1).p("AgJAAIASAA");
	this.shape.setTransform(947.15,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.nose1},{t:this.brows2},{t:this.hglasses1},{t:this.arms1},{t:this.feet1},{t:this.lips1},{t:this.lips2},{t:this.eyes1},{t:this.eyes2},{t:this.bow1},{t:this.bow2},{t:this.nose2},{t:this.glasses2},{t:this.brows1},{t:this.necklace1},{t:this.lips3}]}).wait(1));

	// text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC66").s().p("Ag4BEIAAgRQADgEAGgFIAOgKIALgHIAQgJQAJgEAFgFIAJgIQADgEACgGQABgFAAgLQAAgPgIgHQgIgIgMAAQgIABgHADQgHADgDAFIACAJIABALQAAAFgEAEQgEADgHAAQgGAAgEgEQgDgEAAgIQAAgGAEgGQADgIAHgFQAHgGAKgDQAKgDALgBQAYAAAPALQAPAMAAATQAAAIgDAIQgDAHgFAFQgHAGgJAEIgZANQgLAFgJAFQgJAFgGAFIBdAAIAAAWg");
	this.shape_1.setTransform(427.675,130.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99CC66").s().p("Ag4BEIAAgRQADgEAGgFIAOgKIALgHIAQgJQAJgEAFgFIAJgIQADgEACgGQABgFAAgLQAAgPgIgHQgIgIgMAAQgIABgHADQgHADgDAFIACAJIABALQAAAFgEAEQgEADgHAAQgGAAgEgEQgDgEAAgIQAAgGAEgGQADgIAHgFQAHgGAKgDQAKgDALgBQAYAAAPALQAPAMAAATQAAAIgDAIQgDAHgFAFQgHAGgJAEIgZANQgLAFgJAFQgJAFgGAFIBdAAIAAAWg");
	this.shape_2.setTransform(413.725,130.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99CC66").s().p("AgbBAQgMgFgIgJQgIgKgEgMQgEgOAAgOQAAgOAEgMQAEgMAIgKQAIgJAMgGQAMgFAPgBQARABAMAFQAMAGAIAJQAHAKAEANQAEAMAAANQAAAQgFANQgEAOgJAIQgIAKgMAEQgMAFgOgBQgPABgMgGgAgagsQgKAQAAAcQAAAbAJASQAKAQARAAQASAAAJgQQAKgSAAgbQAAgcgKgQQgKgQgRAAQgQAAgKAQg");
	this.shape_3.setTransform(398.975,130.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#99CC66").s().p("Ag4BEIAAgRQADgEAGgFIAOgKIALgHIAQgJQAJgEAFgFIAJgIQADgEACgGQABgFAAgLQAAgPgIgHQgIgIgMAAQgIABgHADQgHADgDAFIACAJIABALQAAAFgEAEQgEADgHAAQgGAAgEgEQgDgEAAgIQAAgGAEgGQADgIAHgFQAHgGAKgDQAKgDALgBQAYAAAPALQAPAMAAATQAAAIgDAIQgDAHgFAFQgHAGgJAEIgZANQgLAFgJAFQgJAFgGAFIBdAAIAAAWg");
	this.shape_4.setTransform(384.425,130.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#99CC66").s().p("Ag4BTQgGgFAAgFQAAgHAEgDQADgEAGAAQAEAAACABIAFAEIAEAFIAEAFQAFgDAJgOQAJgOADgKIgVgzIgUgvQgCgGgGgDQgFgDgGgBIAAgIIA3AAIAAAIIgIACQgGABABACIABADIABADIANAjIAOAjIAMgaIANghIACgGIACgHQAAgDgFgDQgGgDgFAAIAAgIIAsAAIAAAHIgJAFQgGADgDAHIgZA9IgSAoQgGARgHAKQgFAJgGAGQgGAFgEACQgFABgFAAQgKAAgFgEg");
	this.shape_5.setTransform(365.2,133.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#99CC66").s().p("AgvA3QgIgIgBgOQABgGABgGQACgGAEgEQADgDAFgDIAKgFIAWgHQAPgFAHgEIAAgMIgBgGIgDgIQgDgFgEgDQgDgDgJgBQgFAAgFACIgHAFIABAHIACAJQgBAEgEAEQgDADgHAAQgGAAgDgFQgDgEAAgFQAAgGAEgFQAEgFAGgEQAGgEAIgCQAHgCAIgBQAJABAIABQAHABAHAFQAGAFADAHQAEAIgBANIAAAdIgBAeQAAAEACADQACADADACIAGACIAJAAIAAAIIgLACQgEACgGAAQgJAAgFgEQgHgFgBgJIgBAAQgHAKgJAEQgJAFgNgBQgOAAgIgIgAgDAAQgJADgGAEQgGAEgEAGQgDAGAAAIQAAAJAFAFQAFAFAJAAQAIAAAGgEQAGgEAFgGIABgpIgRAFg");
	this.shape_6.setTransform(353.05,130.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#99CC66").s().p("AAfBXIAAgJIAKgBIAJgCQAEgDACgDQACgDAAgEIAAh9IgCAAIg6CTIgGAAIg5iWIgBAAIAABmQAAAQACAHQACAIADADQADADAJADIALACIAAAJIhGAAIAAgJIALgCQAGgCADgCQAFgDABgIQACgGAAgRIAAhYQAAgHgCgGQgCgEgDgEQgEgCgFgCQgGgCgFAAIAAgIIA7AAIAwCAIArhsIAEgMIABgIIA5AAIAAAIIgJABIgIACQgEACgBADQgCADAAAEIAAB8QAAAEACADQABADAEADIAIACIAJABIAAAJg");
	this.shape_7.setTransform(334.525,128.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#99CC66").s().p("AgTAdIAKgHIAIgHIAFgKQACgFABgFIgGAAQgHAAgFgFQgEgEAAgHQAAgFAEgFQAEgFAHAAQAKAAAFAIQAFAGAAAMQAAAKgEAHQgEAHgFAGIgKAKIgLAHg");
	this.shape_8.setTransform(313.625,137.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#99CC66").s().p("AgMBIQgGgHAAgOIAAhRIgWAAIAAgLIAXAAIAAgmIAVAAIAAAmIAiAAIAAALIgiAAIAABCIABAOQAAAEACAEQACAEAEABQAEADAHAAIAJgBIAIgCIAAAJIgPAGQgHACgKAAQgPAAgGgIg");
	this.shape_9.setTransform(305.975,129.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#99CC66").s().p("AgsA+IAAgIIAFgBIAGgBQADgBACgDQABgCAAgFIAAhJQAAgEgBgDQgCgEgDgCIgGgCIgHgBIAAgIIAogDIACACIAAARIABAAQAGgKAJgFQAKgGAHAAQAIAAAFAFQAFAFAAAJQAAAGgDAFQgDAFgHAAQgHAAgDgEQgEgDAAgFIABgEIAAgFQgFAAgIAFQgIAEgEAJIAABFQAAAEACADQABADADABIAIACIAIABIAAAIg");
	this.shape_10.setTransform(296.925,130.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#99CC66").s().p("AARBYIAAgJIAQgCQAGgCAAgDIAAgDIgBgCIgOgnIg8AAIgFAPIgEALIgCAJIgBAFQAAAFAIADQAHADAKAAIAAAJIhBAAIAAgJIAIgBIAHgDIAIgHIAFgKIAdhJIAchIIAJAAIA6CVIAEAHIAGAGIAIADIAHABIAAAJgAggARIA0AAIgahCg");
	this.shape_11.setTransform(283.175,128.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#99CC66").s().p("AhABZIAAgIIAHgBIAGgBQAEgBACgDQABgDABgEIAAh/QAAgEgCgEIgGgFQgBgCgFAAIgHgBIAAgIIApgDIACABIAAAOIAAAAQAHgHAJgFQAJgFAJAAQALAAAKAFQAJAFAHAIQAHAIAEAMQAEALAAAOQAAAPgFAKQgEAMgJAIQgHAJgLAEQgKAFgLAAQgKAAgGgDQgIgCgEgDIgBAAIAAAkQAAAEACADQABADAEACIAIACIAIABIAAAIgAgKhGQgGAEgFAFIAABGIAEAHIAFAGIAIAFQAEACAGAAQAHAAAGgEQAGgDAFgHQAFgHACgJQADgKgBgNQAAgJgCgJQgBgKgFgGQgEgIgHgEQgGgEgKAAQgHAAgHAEg");
	this.shape_12.setTransform(261.3,133.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#99CC66").s().p("AAtA+IAAgIIAGgBIAFgBQAEgBABgDQACgCAAgFIAAg9QAAgNgGgGQgGgHgIAAQgGAAgGABQgFACgEAEIgGAFIgEAGIAABEQAAAEACADQABADAEABIAFACIAGABIAAAIIg5AAIAAgIIAGgBIAFgBQADgBACgDQABgCAAgFIAAg9QAAgNgGgGQgFgHgJAAQgGAAgFACQgGABgEAEIgGAGIgEAFIAABEQAAAEACADQACADADABIAFACIAGABIAAAIIg6AAIAAgIIAGgBIAFgBQADgBACgDQACgCAAgFIAAhJQAAgEgCgEQgCgDgDgCIgGgCIgHgBIAAgIIAogDIACACIAAARIABAAIAHgHIAJgHQAEgDAGgCQAHgCAHAAQAMAAAIAGQAIAHADAJIAIgIQADgDAGgEQAFgDAGgCQAGgCAIAAQAPAAAJAKQAJAKAAAVIAAA8QAAAEABADQACADADABIAGACIAGABIAAAIg");
	this.shape_13.setTransform(243.475,130.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#99CC66").s().p("AgWA8QgKgFgIgIQgIgIgFgMQgFgMAAgOQAAgcARgSQAQgSAaAAQAZAAAQASQARARAAAcQAAAMgEAMQgEAMgIAJQgIAJgLAFQgLAFgNAAQgMAAgKgEgAgOgxQgHAFgEAIQgEAIgCAJIgBASQAAALACAKQABAKAEAIQAFAIAGAEQAGAFAJAAQAPAAAJgPQAJgPAAgZQAAgJgCgKQgCgKgEgIQgEgHgGgFQgGgEgJAAQgJAAgGAEg");
	this.shape_14.setTransform(225.625,130.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#99CC66").s().p("AgYBVQgOgHgLgLQgLgMgGgQQgHgRAAgUQAAgUAHgRQAGgRALgMQALgNAPgGQAQgHAQAAQAMAAALAEQAKADAKAGIAFgIIAJAAIACA9IgLAAQgBgJgEgLQgEgKgGgIQgFgIgIgFQgIgEgLAAQgLAAgKAFQgKAFgHALQgHAKgFAPQgEAPAAASQAAARAFAOQAEANAIALQAHAKALAGQAKAGANAAQAKAAAIgDQAIgDAHgFQAGgGAEgHQAFgHADgHIAJAEQgLAZgRALQgRALgYAAQgOAAgPgFg");
	this.shape_15.setTransform(211.175,128.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#99CC66").s().p("AgTAdIAKgHIAIgHIAFgKQACgFABgFIgGAAQgHAAgFgFQgEgEAAgHQAAgFAEgFQAEgFAHAAQAKAAAFAIQAFAGAAAMQAAAKgEAHQgEAHgFAGIgKAKIgLAHg");
	this.shape_16.setTransform(193.275,137.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#99CC66").s().p("AgWA8QgKgFgIgIQgIgIgFgMQgFgMAAgOQAAgcARgSQAQgSAaAAQAZAAAQASQARARAAAcQAAAMgEAMQgEAMgIAJQgIAJgLAFQgLAFgNAAQgMAAgKgEgAgOgxQgHAFgEAIQgEAIgCAJIgBASQAAALACAKQABAKAEAIQAFAIAGAEQAGAFAJAAQAPAAAJgPQAJgPAAgZQAAgJgCgKQgCgKgEgIQgEgHgGgFQgGgEgJAAQgJAAgGAEg");
	this.shape_17.setTransform(183.275,130.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#99CC66").s().p("AghBcQgJgFgHgIQgIgJgEgMQgEgLAAgPQAAgNAFgLQAEgLAIgJQAHgIALgFQALgFALAAQAIAAAIACQAIACAGAEIAAgqQAAgFgCgFQgCgEgDgCQgDgCgGgBIgMgCIAAgIIAxgCIACACIAAChQAAAEABADQACADADACQACACAFAAIAIAAIAAAJIgqACIgCgBIAAgMIgBAAQgGAHgKAFQgIAEgKAAQgKAAgKgEgAgTgRQgGAEgFAHQgEAGgDAKQgCALAAANQAAAKACAIQABAJAFAHQAEAHAHAEQAHAEAJAAQAIAAAHgEQAGgEAFgGIAAhFIgDgHIgGgHIgIgFQgFgCgFAAQgIAAgGAEg");
	this.shape_18.setTransform(169.675,127.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#99CC66").s().p("AAJA+IAAgIIAFgBIAGgBQAEgBABgDQACgCAAgFIAAg9QAAgMgGgHQgHgHgIAAQgGAAgFACQgGACgDADQgEACgDAEIgDAFIAABEQAAAEACADQABADAEABIAFACIAGABIAAAIIg7AAIAAgIIAGgBIAGgBQADgBABgDQACgCAAgFIAAhJQAAgEgCgEQgBgDgDgCIgGgCIgHgBIAAgIIAogDIACACIAAARIABAAIAHgHIAIgHQAEgDAGgCQAGgCAHAAQASAAAIALQAJALAAASIAAA9IABAHQACADADABIAFACIAGABIAAAIg");
	this.shape_19.setTransform(154.9,130.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#99CC66").s().p("AgaBdIAAgJIAGAAIAFgBQAEgBABgDQACgCAAgFIAAhJQAAgEgCgDIgFgGIgHgCIgIgBIAAgIIApgEIACADIAABhQABAEABACQACAEAEABIAFABIAFABIAAAJgAgJg/QgGgFAAgHQAAgHAGgFQAEgEAFgBQAHABAEAEQAFAFAAAGQAAAHgFAGQgEAEgHAAQgFAAgEgEg");
	this.shape_20.setTransform(143.75,127.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#99CC66").s().p("AgZBfIAAgJIAGAAIAFgBQADgBACgDQACgCAAgFIAAiLQAAgEgCgEQgCgEgDgCQgCgCgGgBIgJgBIAAgIIAsgCIABABIAAClQABAEABACQACAEAEABIAFABIAGABIAAAJg");
	this.shape_21.setTransform(136.25,127.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#99CC66").s().p("AgvA3QgIgIAAgOQgBgGACgGQACgGAEgEQADgDAFgDIAKgFIAWgHQAPgFAHgEIAAgMIgBgGIgDgIQgDgFgEgDQgDgDgJgBQgFAAgFACIgHAFIABAHIABAJQAAAEgEAEQgDADgHAAQgGAAgDgFQgDgEAAgFQAAgGAEgFQAEgFAGgEQAGgEAIgCQAHgCAIgBQAJABAIABQAHABAHAFQAGAFADAHQAEAIgBANIAAAdIgBAeQAAAEACADQACADAEACIAFACIAIAAIAAAIIgKACQgEACgGAAQgJAAgFgEQgHgFgBgJIgBAAQgHAKgJAEQgJAFgNgBQgOAAgIgIgAgDAAQgJADgGAEQgGAEgEAGQgDAGAAAIQAAAJAFAFQAFAFAJAAQAIAAAGgEQAGgEAFgGIABgpIgRAFg");
	this.shape_22.setTransform(127.05,130.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#99CC66").s().p("AggBVQgPgHgMgLQgLgMgHgQQgHgRAAgUQAAgTAHgSQAGgRAMgMQALgMARgHQAQgGARgBQAOAAAMAEQAKADAJAGIAEgIIAKAAIACA8IgLAAIgGgUQgEgJgFgJQgHgHgIgFQgIgEgMAAQgNAAgKAFQgLAGgHAKQgIAKgDAQQgEAPgBARQABAQAEAPQADAPAIALQAHAKAMAHQAMAGANAAQAKAAAJgDQAKgEADgEIABgMIAAgMIAAgJQAAgFgBgEQgBgEgFgBQgEgCgHgCIgLgBIAAgJIBMAAIAAAJIgIABIgIADQgDACgCADQgBADAAAFIAAAOIAAATIAAAJQgQAHgRAEQgPADgPAAQgQAAgQgFg");
	this.shape_23.setTransform(111.7,128.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#99CC66").s().p("AARBYIAAgJIAQgCQAGgCAAgDIAAgDIgBgCIgOgnIg8AAIgFAPIgEALIgCAJIgBAFQAAAFAIADQAHADAKAAIAAAJIhBAAIAAgJIAIgBIAHgDIAIgHIAFgKIAdhJIAchIIAJAAIA6CVIAEAHIAGAGIAIADIAHABIAAAJgAggARIA0AAIgahCg");
	this.shape_24.setTransform(87.875,128.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#99CC66").s().p("Ag4BTQgGgFAAgFQAAgHAEgDQADgEAGAAQAEAAACABIAFAEIAEAFIAEAFQAFgDAJgOQAJgOADgKIgVgzIgUgvQgCgGgGgDQgFgDgGgBIAAgIIA3AAIAAAIIgIACQgGABABACIABADIABADIANAjIAOAjIAMgaIANghIACgGIACgHQAAgDgFgDQgGgDgFAAIAAgIIAsAAIAAAHIgJAFQgGADgDAHIgZA9IgSAoQgGARgHAKQgFAJgGAGQgGAFgEACQgFABgFAAQgKAAgFgEg");
	this.shape_25.setTransform(67.3,133.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#99CC66").s().p("AgrBgIABgWIAAgYIAAh3IgCgIQgCgEgDgCIgIgCIgJgBIAAgIIAsgDIACACIAABPIABABQAIgIAJgEQAIgEAIAAQAXAAAOARQAPARABAcQgBAbgQASQgSATgWAAQgKAAgJgDQgJgDgJgFIgJAOgAgIgOQgGADgGAGIAABFQABADADADQABAEAEAEIAIAGQAEACAHAAQAOAAAKgPQAJgOAAgZQAAgJgCgKQgCgJgEgGQgEgHgHgEQgHgFgJAAQgIAAgGAEg");
	this.shape_26.setTransform(53.55,127.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#99CC66").s().p("Ag7C4QgbgMgMgKIgHAZIgdAAIgDiBIAaAAQADAPAJATQAKAUAOAQQAPAQAUAMQAVALAYAAQAkAAAUgRQAUgQAAgfQAAgPgHgMQgGgLgMgJQgMgJgSgGQgSgIgWgGQgRgGgWgJQgWgJgPgLQgQgOgLgTQgLgTAAgaQAAgtAiggQAigfA5AAQAVAAAXAFQAWAGAPAIIAIgUIAbAAIAGB3IgaAAQgIgogagZQgagZglAAQgfAAgRAPQgSAQAAAWQAAARAGALQAGAMALAHQAMAIARAHIApAOQAZAIAWALQAWAKAOAMQAPAOAJARQAIASAAAaQAAAzgmAhQgnAhg9AAQggAAgbgMg");
	this.shape_27.setTransform(389.275,76.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#99CC66").s().p("AhQEjIAAgZIATgCQAJgBAHgBQAKgDAFgKQAGgHgBgOIAAmtQAAgNgFgMQgGgMgJgHQgIgEgRgEQgSgEgLgBIAAgYICKgIIAGAFIAAH9QAAANAEAIQAGAJAKAEIARAFQAHADALAAIAAAZg");
	this.shape_28.setTransform(360.75,65.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#99CC66").s().p("AiSCqQgbgaAAgpQAAgWAGgRQAGgRAMgNQAKgLAPgJQAPgJAOgFIBEgXQAzgRATgKIAAglIgCgTQgDgOgGgMQgIgOgOgLQgNgKgZAAQgRAAgPAGQgPAGgGAGQAAAIAEAOQADAPABAMQgBANgLALQgNALgUAAQgTAAgJgNQgJgNAAgRQAAgRAMgQQANgQATgMQARgLAYgHQAYgHAXAAQAeAAAZAEQAWAEAUAOQATAOAKAYQAKAYAAAmIgBBeQgCAqAAAxQAAAOAGAJQAFAJALAGQAFADANABIAYAAIAAAYIgfALQgNADgRAAQgdAAgRgNQgTgOgEgaIgCAAQgZAbgbAOQgcAOgoAAQgpAAgbgZgAgMAAQgYAIgUANQgUANgLASQgKASgBAYQAAAfARAPQARAOAZAAQAaAAAUgNQAUgNAOgRIACiCQggAKgXAJg");
	this.shape_29.setTransform(332.25,76.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#99CC66").s().p("AgmDfQgUgYAAgrIAAj6IhDAAIAAgkIBFAAIAAhzIBDAAIAABzIBqAAIAAAkIhpAAIAADOQAAAYACAPQABAQAHALQAGALAMAGQAMAGAUAAIAcgCQASgCAIgCIAAAbQgZAKgVAHQgWAHggAAQgtAAgTgXg");
	this.shape_30.setTransform(298.3,71.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#99CC66").s().p("AhBC0QgigQgVgcQgWgagLglQgLgkAAgnQAAgkAMgiQALgkAWgbQAWgbAggQQAfgRAnAAQAoAAAdANQAdANASAWQASAVAIAcQAJAdAAAiIAAAZIj1AAQAAAjAHAeQAHAdAPAYQAPAVAXANQAXANAhgBQAhABAZgRQAYgPAWgpIAbARQgYArgnAbQgnAbgzAAQgrAAgigQgAg8iGQgbAhgCA7ICrAAQAAgVgEgYQgEgYgHgQQgJgSgPgKQgPgLgYAAQgmAAgaAgg");
	this.shape_31.setTransform(267.225,76.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#99CC66").s().p("AjJELIAAgbIAZgDQASgBAGgDQAMgFAFgKQAFgJAAgPIAAmAQAAgNgEgKQgEgLgOgFQgOgFgOgCIgZgDIAAgbIDzAAQBLAAAvAkQAtAkABA8QgBAqgQAgQgQAggdAVQgdAUgiAKQgiAKgnAAIg6AAIAAChQAAANAFAKQADAKAOAGQAHACARACQAQADAOAAIAAAbgAgyAAIAmAAQAoAAAZgMQAZgMANgTQANgSAEgTQAEgUABgPQgBgWgEgWQgGgWgMgRQgNgRgWgKQgVgKggAAIg0AAg");
	this.shape_32.setTransform(225.05,68.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#99CC66").s().p("AgjAlQgPgQAAgUQAAgVAPgPQAPgPAUAAQAVAAAQAPQAPAPgBAVQABAUgPAQQgQAOgVAAQgUAAgPgOg");
	this.shape_33.setTransform(190.8,90.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#99CC66").s().p("Ag7C4QgbgMgMgKIgHAZIgdAAIgDiBIAaAAQADAPAJATQAKAUAOAQQAPAQAUAMQAVALAYAAQAkAAAUgRQAUgQAAgfQAAgPgHgMQgGgLgMgJQgMgJgSgGQgSgIgWgGQgRgGgWgJQgWgJgPgLQgQgOgLgTQgLgTAAgaQAAgtAiggQAigfA5AAQAVAAAXAFQAWAGAPAIIAIgUIAbAAIAGB3IgaAAQgIgogagZQgagZglAAQgfAAgRAPQgSAQAAAWQAAARAGALQAGAMALAHQAMAIARAHIApAOQAZAIAWALQAWAKAOAMQAPAOAJARQAIASAAAaQAAAzgmAhQgnAhg9AAQggAAgbgMg");
	this.shape_34.setTransform(163.675,76.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#99CC66").s().p("ABfELIAAgbIAhgDQAUgCAHgEQAMgHAGgJQAFgKAAgNIAAmDIgGAAIi0HFIgTAAIiunPIgFAAIAAE+QAAAuAHAYQAFAYAMAKQAIAIAaAIQAaAHAIAAIAAAbIjYAAIAAgbQARgBATgFQASgEALgIQANgLAFgVQAFgWAAgzIAAkQQAAgYgGgPQgGgPgKgJQgMgLgRgEQgRgFgQgBIAAgbIC2AAICYGQICClOQAHgTAGgUQAEgUAAgHICvAAIAAAbQgLAAgQADQgQADgIADQgNAEgEALQgFALAAAMIAAGAQAAANAFAJQAEAJANAHQAHADARAEQARADALAAIAAAbg");
	this.shape_35.setTransform(110.55,68.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Character
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("ANMvVQDzgfD9BGQCsEtifEJQlNBvmjiSQGXCnBBFyQjxEwkdAMQl/jmgXlyAlv3PQgOjJBgjRQE7ivDoCvQCKECgtDtQCAjoEWiQQFvAfA/EHQgMA0gQAwQgJAWgIAUQhfDnjPCCAkdymQhEiKgNiOIgBgRAoWuSQAqhPBKhEQA+g4BHgjQB+hACbAAQCNAAB2A2QAJAEAIAEQBJAkA/A5QBTBLArBaQBIgXAWgIQAvgRAugNQAJgCAJgCQA0gNA1gHAsUvcQBlASCZA4ApsmLQlxCNlahqQhSiQgKh+QgDgkADgjQAKh6BShoQEdhvEGAyQkDiziFk4QCkk6EhAOQDuBzB6CxAoLm1QgxAXgwATQAlgVApgSAoLm1QhChwAAiIQAAh9A3hoAijitQiOgjhxhmQhBg7gohEAijitQgoHhmzCcQlah3htktQCJkdFQiaAFj16QgUBng/CRACMiqQhFAQhLAAQhUAAhLgTMAAAAhuIEwAAMAAAghfACMiqQAAAGABAGAIWuAQAuBhAAByQAACMhHBzQgJAPgKAOQgCADgCADQghAsgtApQh1BriXAhAIjnBQAcASAZATIAAABIABAAAJYmcIAAAAQgMgEglgO");
	this.shape_36.setTransform(196.8564,369.8625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#99CC66").s().p("AiXQ4MAAAghuQBKASBTAAQBMAABFgQIABAMMAAAAhgg");
	this.shape_37.setTransform(195.75,460.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCCFF").s().p("AxFMkQCJkdFQiaQAwgTAxgXQAoBDBBA7QBxBmCOAkQgoHhmzCdQlah3htkugACNJaIgBgMQCXgiB1hrQAtgoAhgtIAEgFQAKgPAJgPQBHhyAAiNQAAhxguhhQBIgWAWgIQAvgSAugNIASgEQA0gNA1gGQg1AGg0ANIgSAEQguANgvASQgWAIhIAWQgrhZhThLQg/g5hJglQA/iRAUhmQCAjoEWiRQFvAfA/EIQgMA0gQAwIgRAqQhfDnjPCCQDzgfD9BFQCsEtifEIQlNBvmjiSIgBAAIAAAAQgZgUgcgRQAcARAZAUIAAAAIgxgTIAxATIAAAAIAAAAIABAAQGXCoBBFyQjxExkdAMQl/jngXlygA03GPQhSiPgKh+QgDglADgjQAKh4BShoQEdhvEGAxQBlATCZA4Qg3BoAAB7QAACJBCBwQgxAXgwATQAlgWApgRQgpARglAWQjSBQjLAAQiZAAiVgugApsFtIAAAAgAJYFcgAsUjkQkDiziFk3QCkk7EhAPQDuBzB6CwQgOjJBgjQQE7iwDoCwQCKECgtDtQgUBmg/CRIgRgIQh2g2iNAAQibAAh+BAQhHAkg+A4QhKBEgqBPQiZg4hlgTgAlurGQANCOBECLQhEiLgNiOIgBgRg");
	this.shape_38.setTransform(196.8564,293.8125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF99").s().p("AidIBQiPgkhxhmQhBg7gnhEQhDhwAAiIQAAh7A3hpQAqhPBKhEQA+g3BIgkQB9hACaAAQCOAAB2A2IARAIQBJAlA/A4QBTBMArBZQAuBhAABxQAACNhHByQgJAPgKAOIgDAGQgiAtgtAoQh0BriYAhQhFAQhMAAQhTAAhKgSg");
	this.shape_39.setTransform(196.35,301.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Frame
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFF99").ss(3,1,1).p("EAAAAwBIAAgLMAAAhf1");
	this.shape_40.setTransform(567.4,318.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFF66").ss(1.8,1,1).p("A9sAAMA7ZAAA");
	this.shape_41.setTransform(757.5,624.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwWMBXFgAKMA7yAAKMAAABgAIAAA3MiS3AAAg");
	this.shape_42.setTransform(480,319.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFCC").s().p("EAdhAwGMg7ZAAAMAAAhf2IAAgVMA7xAALMAAABgAg");
	this.shape_43.setTransform(758.7,316.725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("EhJbAwhMAAAhg3MBXFgAKIAAAVMAAABf1MA7aAAAIAYAAIAAA3gEANqAv1IAAgLg");
	this.shape_44.setTransform(480,319.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(465.6,328,485.4,303);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
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