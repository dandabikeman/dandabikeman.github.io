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


(lib.squint2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiVgJIBGAAQCLATBaAA");
	this.shape.setTransform(15,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.squint2, new cjs.Rectangle(-1,-1,32,4), null);


(lib.squint = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiaAeQBZgKBigDQBDgHA3gn");
	this.shape.setTransform(15.5,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.squint, new cjs.Rectangle(-1,-1,33,8), null);


(lib.snake = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHKp9QABgBABAAQAIgHABgHIADgIQgGAHgHAPQgBAAAAABgAFym4QAAgBABgBQAIg6AEgbQAFgmgBgoQgBgOgBgMIALggQABABABAAQATATAEANQADAIgFAMIAIADQAIgQASgLQADgBACgCQgKASgMAhQgHAQgIAUQgeBTgSAdIAdALQgHA5AiAwQAPAVADANQAGAWgMAeQgMAggcAeQgdAegTA0QgMAegVBBQgSA5gSAcQgQAbgfATQgMAjgTALQgYANgtgOQgmgNgUAEQgEABgEACQgNAFgLAQQgKAMgYAjQgVAegbAZIACgFQgPAPgTABQgGAAgDAAQgIABgGABQgNACgHADQgQAIgSAXQASgLAWgFQAHgLAHgJQARgYAMgQQAkgwAtgcQAVgOAXgKQAFgCAGgDQAKgFAPgKQgKAAgKABQgdAAgGADAFym4IADACQgCAEgDADQABgEABgFgADIj+QACgIADgIQAPgoAzgsQAAgBABAAQA8gzAZgnIANAFAFWkNQAEAOAHAaQAHATANAGIAiAMQgVgjgXgzADIj+QgHADgGACIgFAPIAPAGQAAgNADgNgAEKhaIAMgeQg2gugOgUQAAgCgBgBQgLgSgBgVIAfALQAJgNARgLQAPgLAOgVAEYk2QgTAPgRAMQgCABgCACQgYASgQAIAhMEzQAEgHAEgJQARggA/gvQAagUAigVQAQgLATgKQAIgFAIgFQA4ghAggVQAPgKAKgHQAOgKAKgJQAggcAJgWQAKgbgBgsQgBgUAAgKQgBgKABgBQACgGARgQQATgRADgCAD5gtQAKgMAHgIQAHgIAFgFQAIgHAXgQQADgCADgDAD5gtIARgtQgIgDgKgVAEVhfQgBADgKAbQgEALgEAOQgIAXgMAfQgJAcgJAXQAjgaAOgNQAHgHABgCQADgJAAgIQgBgKgFgJQgHgOgJgHQgEgDgFgCAEEAyQgBADgBAEQgIAcgMAwQgBAAAAABQgFACgFADQgRAKg4AWQgJADgIAFQg0AWgkAgQgbAXgSAcQgqBChGAsQggAVhgAtQhQAngqAjQgaAVgUAcQAOgaAWghQA0hQAVgGQAigJAegTQAAAAgBAAQABgBABAAQAMgIAKgJQADgDADgCQAcgaAegQQgMAPgOAWQgBACgBABQAOgGAHgEQAQgJAMgKQAcgVATgcAENAaQgEALgFANAEYAAQgGAMgFAOAEmgcQgIANgGAPAmiIWQAEgLAFgNQAGgQAKgPQAKgSAPgOQAKgKALgIQAegWA7gZQBGgdAXgNQAvgcAXgnQAmhVBig8QAGgDA1gdQAOgIARgJQA4geAkgbIAahDADTBWQgIAQgGAOQgRAigzgBQgMAAgKABQgEgBgDAAQAhgUA0gnQATgNAQgMQgFALgEAKgAAcCsQgEALgEAKQgEAJgEAKQgUAygSAVQAAAAgBABQAAAAAAABIABgCAgbEdQgDADgDADAgjEoQgGAGgHAFQguAvgdARQgHAFgIAEQAIgMAHgMQAKgOAJgNAiXGOQAHgKAGgIQgSAIgVADQgFAAgFAAQgKABgLAAQgQAAgSgDQg0gJg+BPQgFAHgJAMQgIALgMARQgFAIgIAKQgLARgKAMQgDAFgEAEQgEAFgEADQgBACgBAAIgegLIAXg9QALgEATgMQAGgEAIgGAjnGaIAAAAAlQHHQAegRArgQQAQgHAPgFQg3ACgUANQgKAHgTAXQgLAOgNAUQgiAxgGAQIgHgDAjnGaQABgBAAAAQAZgKASgIQAIgDAHgDQgCADgDADQgRARglACgAmiIWQAOgYAUgTQAGgHAHgFQAAAAABgBQAOgMAUgLAmoIpQADgJADgKAmvIyQAGgPAHgNAm3I6QAHgzAOgjAmvJ8QAIgVATggQgYAegRAnQgDAGgCAGIgHgDQAJgYAGgwQABgGABgHQABgDAAgDAmwJRQABgPAHgZAm6JNQAFgOAGgNAgxFMIAOgk");
	this.shape.setTransform(47.175,66.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake, new cjs.Rectangle(-1,-1,96.4,134.7), null);


(lib.smurk = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AF1h5QA4gCBMgGACliVQA0AfB4gCQARgBATAAQAHgJAFgJAn4BkQBUAnBbAIQAgADCFAAQB1AAAugEQBNgHA5gYQB5gzB3i5");
	this.shape.setTransform(50.5,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,103,32);


(lib.smalleye2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABLAAQAAAfgWAWQgWAWgfAAQgeAAgWgWQgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeg");
	this.shape.setTransform(7.5,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_1.setTransform(7.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smalleye2, new cjs.Rectangle(-1,-1,17,17), null);


(lib.smalleye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABLAAQAAAfgWAWQgWAWgfAAQgeAAgWgWQgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeg");
	this.shape.setTransform(7.5,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_1.setTransform(7.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smalleye, new cjs.Rectangle(-1,-1,17,17), null);


(lib.shoe = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAXlsQg9AMh6AoQiXAxghAKQAFA2gRBLQgSBVAAAjQAAAZANBUQAPBgACAYQAEAuAzAQQBIANArAPQAxAQCcASQCSAQBJAAQBNAAAcgUQAUgPAAgjQAAhohJgUQgbgHgwABQgcAAg7ABQhtgBg0g4QhJhPAAjMQAAgeASgVQAKgKAggVQA7goAAg6");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9966").s().p("AAfFdQicgSgxgQQgrgPhIgNQgzgQgEguQgCgYgPhgQgNhUAAgZQAAgjAThVQAQhLgFg2IC5g7QB5goA9gMIACAKQAAA6g7AoQgfAVgLAKQgSAVAAAeQAADMBJBPQA0A4BtABIBXgBQAwgBAaAHQBKAUAABoQAAAjgUAPQgcAUhNAAQhJAAiSgQg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoe, new cjs.Rectangle(-38.5,-37.4,77,74.9), null);


(lib.scream = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ajeh3QArgeBrhQQBvhLBMAAQAbAAArApQACABBJBOAjeh3QAFgtAFgWQAWhlA5gxQBFg6CGAAQB9AAAtBkQASAoAIBFQAEAtAAA4QAACCgMBZQAAADAAACQgCAJgBAIQgMBNgXApQhAB4jIAAQhVAAgmgJQgtgKgTgdQgTgcgGg8QgCgWAAgtQAHghAFgoQAAgCABgCQAAgFABgFQABgFABgFIAAAAQAEgkADgrQAHhSAGg1gAjlhyQADgCAEgDAj0BpIAFgKIENAAQAJADBkAVQBMAQAjAUQAEgHAEgIAkCDAQgBggAAgtQAAgFAAgFAj2B3QAyAyAWAxIAWBAQAIAaAXAIQAcAJBPAAQBhAABBgtQA7gpArhUAkNDrQABgFABgEQAFgQAEgS");
	this.shape.setTransform(27,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ah6BpQgXgHgJgaIgVhAQgWgwgygyIAAgEIACgKIAEgKIENAAQAJADBkAVQBMAQAjAUQgrBTg7AoQhBAuhhAAQhPAAgbgKg");
	this.shape_1.setTransform(27.175,60.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiqGCQgtgLgTgcQgTgcgGg8QgCgWAAgtQAHghAFgoQAyAyAWAxIAWBAQAIAaAXAHQAcAKBPAAQBgAABCguQA6goAshUIAFACQgNBMgWAqQhAB4jIAAQhVAAgmgJgAjXi6QAWhlA5gxQBFg6CGAAQB8AAAuBkQASApAHBFIgFAAIhLhPQgsgpgaAAQhNAAhuBLQhrBQgrAeQAFgsAFgXg");
	this.shape_2.setTransform(27.325,39.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA0000").s().p("AB9DCQhjgVgKgDIkNAAIgCAAIAHhPQAGhTAHg0QAqgeBshQQBuhLBNAAQAaAAAsApIBLBPIAFAAQAEAsABA4QAACCgMBZIgBAFIgHAPQgjgUhNgQg");
	this.shape_3.setTransform(28.35,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,56,81);


(lib.resetbutton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA2FYQAAgNgEADQgFAGgIADQgRAAggAAQhWACg6gFQjTgQAAhnQAAhVAyhLQAagmBQhRQAUgUASgzQAUhAALgfQAph3BDAAQAvAAAWAKQAdAOAAAjQAAAagsAdQgsAcAAAnQAABDByAdQA6APA/ADQAcAMBABdQBBBeAAAeQAABthsAiQg6ASiUACgAi1DEQANhZAqgwQAxg5BSAIQgUAsgrARQgzAMgXAGIgKAKQALAWA6ASQAfAJAmAJ");
	this.shape.setTransform(36.75,34.3786);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF8C58").s().p("AicFUQjTgQAAhnQAAhVAzhLQAZgmBQhRQAUgUATgzQAThAALgfQAph3BDAAQAvAAAWAKQAcAOABAjQgBAagrAdQgsAcAAAnQAABDByAdQA6APA/ADQAcAMBBBdQA/BeABAeQAABthsAiQg6ASiUACQAAgNgEADQgFAGgIADIgxAAIguABQg4AAgqgEgAh+A7QgqAwgMBZQAMhZAqgwIACgCIABgCIABAAQAqguBDAAIAAAAIAAAAIASABQgVAsgrARIhJASIgKAKQALAWA7ASIBEASIhEgSQg7gSgLgWIAKgKIBJgSQArgRAVgsIgSgBIAAAAIAAAAQhDAAgqAuIgBAAIgBACIgCACg");
	this.shape_1.setTransform(36.75,34.3786);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,75.5,70.8);


(lib.nervous = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AMDgMIAOAAAMDgMQAOgnAAguQAAhDiHgcQg8gMhVgFQAACHgDA+QgBAcgCANQgMBaguBCQAXgEAWgEQBPgRA6gbQABAAABgBQAIgDAHgEQBkg0AfhVgAJ7isIAKAAIAACgIB+AAAH5jRQgOgBgPAAQhEgDhTACQgjABgmABQgQABgNABQgRABgNABQg6ADgKAAQgoAGhjAFQgwACg8ACQgUABgTABQAOBXgTBQQBTACBiAEIAUAAIDGAAICEAAQAAAUAAAdQAAAjgKAwQgKAwAAAdQAzgFAtgHAKFgMIAABtQgIAAgGAMQgFALgBAMAH2gMICPAAADDjAIAeAAQAAA1AFBKQACAiABATQACAVAAADQAABBAMAlQgBAQhHBDAFFjTQAgBVAGAyQABANABAzICJAAAgOi2QAlAmAJA0QADASAAA+QAAACAAADQAABUgDAOQgGAZgoBRAkYDVQAagBAbAAQBNgCBqgDQAPAAAPAAIAAAAQB/AAA+gBIAAAAQAZgBAPAAQBAgCA4gFQAEgBAEAAIACAAAligTQAAAOAAARQAAA/gUAtQgGAQgsBKQBAADBQAAAmficQAuALALBDQADAPABAsQBQgBBsACQgJAigPAhQgQAkgmBBQgWAkgOAbAihi5QikAHhbAKIAAAAQgEAAgDABQhkALhIAWIABCGIAACxApTiGQi9A3AAB5QAAAQAFAPQA+gyB7gXQBPgOBpgEQAagBAeAAAsQBNQACgCADgCQAXBTCfAhQAAAAABABQA1ALBFAGQAYACAaAB");
	this.shape.setTransform(78.525,21.3136);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmpDSQAthKAGgQQAUgtAAg/IAAgfIAQAAIAfAAIABAAIAAAAICBABIALAAQgJAigPAhQgRAkgmBBQgVAkgPAbIgWAAQhCAAg4gDgAj1CWQAmhBARgkQAPghAJgiIgLAAIiBgBIAAAAIgBAAIgfAAIgQAAQgBgsgDgPQgMhDgtgLQAtALAMBDQADAPABAsIg4ABQhpAEhQAOQh6AXg+AyQgFgPAAgQQAAh5C9g3IAACGIAAiGQBIgWBjgLIAIgBIABAMIgBgMQBbgKCjgHQAHAlAAAlQAAAwgLAtQBTACBiAEIATAAIAAAFQAABUgCAOQgGAZgoBRQAohRAGgZQACgOAAhUIAAgFQAAg+gCgSQgKg0gkgmQAkAmAKA0QACASAAA+IgTAAQhigEhTgCQALgtAAgwQAAglgHglIAogCIBsgEQBjgFAogGIBEgDIACANIAdAAIgCgPIAdgCIBKgCQBSgCBEADIAdABQBWAFA8AMQCHAcAABDQAAAugOAnIh+AAIAAigIgKAAIAKAAIAACgIB+AAQgfBVhlA0IgIgQQAGgMAIAAIAAhtIiPAAQACg+AAiHQAACHgCA+IiJAAQgBgzgBgNQgHgygfhVQAfBVAHAyQABANABAzIiEAAICEAAIAAAxQgBAjgJAwQgKAwAAAdIgDAAIgIABQg3AFhBACIgnABIAAgJQBHhDABgQQgNglAAhBIgBgYIABAYQAABBANAlQgBAQhHBDIAAAJIi9ABIAAAAIgeAAIi3AFIg2ABQAPgbAVgkgADpgMIgDg1QgGhKAAg1QAAA1AGBKIADA1IjHAAIDHAAIAAAAgAmpDSIgxgDQhFgGg1gLIgBgBQifghgXhTQA+gyB6gXQBQgOBpgEIA4gBIAAAfQAAA/gUAtQgGAQgtBKIAAAAgApTCxIAAixgAFjB4QAJgwABgjIAAgxICJAAIgDApQgMBagvBCQgsAHgzAFQAAgdAKgwgAHzAdIADgpICPAAIAABtQgIAAgGAMQgGALAAAMIgCABQg6AbhQARIgtAIQAvhCAMhagAH2gMgAFtgMgADpgMgAimgSIAAAAgAligTIAAAAg");
	this.shape_1.setTransform(78.55,21.3136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,159.1,44.6);


(lib.moneybag = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACRlEQhGBFgdAQQgGADgJAFQgHAIgJAJABLlOQAAAlgUAhQgIAOgQATQgWAKgrARAiohzQhpAvgsAtQhDBDAAB0QAAAqBNBZQBOBbAtADQBGAFCQADQBoACAuAAQB7AAA1iqQAdhfAAhpQAAhKgQgjQgQgfgogOQgWgIhSgNQhdgPhHgTQBag+AogfQBFg1AfhAABVAPQAKgFAAgYQAAgzghgVQghgVhOgKQgIBEgQB2QAGAAAIAAQA/gFAPAFQAkALAAA3QAAAygYAYQgTATgqAFQgiAAgdACQgBASAAAMAh8ikIBQAAQgCATgDAcQgigDgpgDQgMAAgNgBQgIAAgHAAQgCAEgCAFQgDAKgCAOQgBAMAAAZQAABRAkAbQAGAFAIACIAACxQg2AFgkAMAgilOQgGAwgJAhQgFATgKAeAholsQAABLABAeQADAwAGAbAiGikIAKAAIAAAeQgNAFgMAFQgKAEgJAFAjgmAQAkAbASA1QAhBfANAZIAAAUAh8iGIAAALIAAC4QATAJAggBQgBAHgBAHQgOBkgEA0QgQAAgPADIAAAHAgsikIB3AA");
	this.shape.setTransform(38.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.moneybag, new cjs.Rectangle(-1,-1,79,81), null);


(lib.hat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AN/DmQFBAKBFAAQAAAJAFATQAFATAAANQAAAMgVAMQgRAKgWAEQgKACgKAAMgktAAAArBBmQAZgjAYgwQBEiIADgDQAshMA7glQBIguBvAAQA9AABYAtQBYAtBXAAQBRAACfhLQCfhLBWAAQCLAABfDMQAYAxAzCIQAtB4AfA8AQ9FKIAAgKAroCWQAFgFAFgGQAJgKAJgMQAKgHAGgFQADgDADgCAr4CRQgFADgEACQgSAOgbAQAzmFKQgogZAAgUQAAhQD6gPQBSgFB7ACQAMAAANABQAzAABFABQACgCARgBIABAAQBtgHLVAZQHMARETAJAxuFKIAAAAQACAAABAAQgCAAgBAAQgMABAFAIAxuFMIAAgCAzmFUIBxAAAqiC+QgOAAgGAJQAAABAAgKIAAgB");
	this.shape.setTransform(129.5,34.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AxuFUIAAgIIAAgCIAEAAIgEAAIAAAAQgLABAEAIIAAABIhxAAIAAgKQgogZAAgUQAAhQD6gPQBTgFB6ACIAZABIAAgIQAbgQATgOIAJgFIAPAFIAKgLIATgWIAQgMIAFgFIgFAFIgGgDQAZgjAYgwIBHiLQAshMA7glQBIguBvAAQA9AABYAtQBYAtBXAAQBRAACfhLQCfhLBWAAQCLAABfDMQAYAxAyCIQAuB4AfA8IrfgaIgLAAIgCAAIgDAAIgYgBIgBAAIgegBIgCAAIhJgDIgXgBIgBAAIhAgCIgCAAIAAAAIgBAAIgUAAIhFgDIAAAAIgDAAIAAAAIh3gDIgOAAIiNgEIgIAAIiDgBIgKAAIAAAAQg4AAgZABIgBAAIgBAAQgRABgCACIh4gBIB4ABIAAABIAAAJQAHgJANAAIgBgEIABAAIABAAQAZgBA4AAIAAAAIAKAAICDABIAIAAICNAEIAOAAIB3ADIAAAAIADAAIAAAAIBFADIAUAAIABAAIAAAAIACAAIBAACIABAAIAXABIBJADIACAAIAeABIABAAIAYABIADAAIACAAIALAAILfAaQFBAKBFAAQAAAJAFATQAFATAAANQAAAMgVAMQgRAKgWAEIgUACgAQ9FKIAAgKg");
	this.shape_1.setTransform(129.5,34.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,261,70.1);


(lib.eye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmNALQgBgDAAgDQAHgFAJgHQAhgZAygmQASgOAPgKIABAAQAcgUATgJQAjgQA0gFQAqgEBsAAQAoAAAyAMQAcAGAgALIABAAQAjALAoARQBNAfAlAdQAgAZAAAWQAAAKgCAKQAAADgCAEQAAACgBABQgDAKgGAKQgHALgLALQgpAohbAgQgKACgLAEQgOAEgOAEQgkAKghAHQhGAPg3AAQg0AAhUgjQgrgTgzgaQhFglgmgcQgSgPgLgMQAAAAgBgBQgKgMgEgKQAHgDAHgEQABACAAACQADALAFAKQAJARAPAMQAsAoBmANQAjAFBkABQAIAAAJAAQATAAAVAAQAIAAAHAAQAKAAAKAAQASAAATAAQAYgBAZgDQAAAAABAAQA1gGA7gMQAGgCAFgBQBDgPA7gVQAGgCAHgCIAAAAQAHgDAHgDAgshTQAQgBAQAAQAIAAAHABQABgBAAABQARAAAQABQAlADAjAGQAnAIAlAMQAGACAFACQA/AXBkA6QADACAEACAAkhMQAGADAHADQAJAFAKAIQABABACABIgLADIgIAAIAAALIAAAOAA0gpQgEAHgFAGIABAZAgkAEIAwAAIAAAJIAAAoQgLgEgIgDQgFgCgFgBIAAAAQgRgFgHgBIgBAAQgBgBgBAAIAAggIAIAAQAAgBgBAAQgBgEgCgFQAAgBgBgBQAAgBAAgBQgBgBAAAAQgBgCgBgDQgBgCgBgCQgGgNgJgLQgBgBgBgBIAAAAQgGgHgHgHIgxAAQAAAUgQAZQgEAHgDAGQgJAPAAAIQAAAYAGANQAIAUAaAPABAAQIgVgCIgPgBAAUANQAAgJABgHQAAgEABgEQAAgBAAAAQADgdALgTABcgSIgIAAIgYAAABUgLQgDAGgKANQgBAAAAAAQAAABgBAAQgDAEgCADIAAAAQgHAIgFAEABcAcIAAgHIgYAAAANgcQACAKAGAPAArgcQgHAJgIAIAA8g0QgEAGgEAFABHg3QAPAMAWAIIAAAwIggAAACVhkIAoAgABsANIAAA/IAAAZIggAAAClCdQACAAAGgBQACgBACAAQAFgDAIgCQAWgIAJAAAA8BVIAAgfIAAgBIgGAAIgaAAABcBMQgSgGgGgLQgDgDgFgCQgDgBgDAAAA0BMIggAAQAEAEAIAFQAIAEAEAEAA8AsIggAAAhEB+QAHABAHACQA3AOAVgBQAIAAAegJABUCOIBZAAADtBuQAZgJAoAAAClhsQAoATAYANAGFAkQAFAEAFAEAgshTIAAgJIAgAAIAYAAAi1hsIBAAAAl2AdQAngQAigPQAAgBAAAAQBCgeAwgeQAVgKAngFIABAAQAigEAwgBAh9AEIARAAAiFAEIAIAAQADACAEACQAOAIASALIAAAAQADgEgBgCAADgSIAAgKIAAgoIgHAAAhMgjIACAIIAAAJQACAFADADQAEAFAFACAhEg8IgIAAAhkgSIAUATIAIAHIAEAFAgUANIgQAAQAAgFAAgEAhKgbIAFARAgcg0IAAApAgsg0IAAAkAgshMIAAgHAh1hkIBBAAAhxAxQAGgGAMgJQAGgEADgDAkOhkIAAgIQgHAAgOgEQgOgEgNAAAlGiMQgMgPgPgIQgPgHgHgDAlejNIAEAJQAEAKAAAFAl/AhQABAAAAAAQAEgCAEgCAmHAkQAEgBAEgCAlOgLQAPAAAMgFQAMgFAJgLQAIgJAIgTAADBlQgHgQAAgJAgcBMIAIgXAgMBlIAAgZIAAgPAhaBEIAIgFQAKgHAJgIAhoA7QAIAEADADQABABACABQAIAHAJAGQACACADACAg8BdQAAgDABgEIAAgBQAAgCAAgDQACgOAFgFAg0BlQAAgIABgHQABgMAEgMQABgFABgEAhxAxQACACACADQACACADADAhxAxQgCACgCACQAIADAFADQAJAJAWANAiVCdQBJAJBAAAAh9AVQADAPAJAN");
	this.shape.setTransform(39.925,20.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AAMBlIAAgQQgHgRgBgIIgHAAIAAgQIAEgPIAUAHIARAAIAaAAIAGABIAAAfIAAgfQAFACACAEQAGAKASAHIARAAIAAAZIAAAMIgxADIglABIgUAAgAB2BVIghAAgAApBEQAIAFAFAEQgFgEgIgFQgIgEgEgEIAhAAIghAAQAEAEAIAEgAgyBFIAAgGQADgOAEgFQgEAFgDAOIAAAGIgJgBIgFgEIgRgMIAJgGQAJgHAJgHQgJAHgJAHIgJAGIgDgCIgLgHIgEgGIgFgEQAGgHAMgJIAJgHIAAAAQADgDgBgDIANgLIADAEIgDgEIgIgIIAKgLQAEAEAFADIARAIIAAAfIABAAIgBAQIgDAJQgDAMgCANgAA0gBIACgSIgCgZIAKgNIAAAOIAIAIIAXAAIAAAIIgNATIAAABIgBABIgGAGgAAVgDIAAgIIgwAAIAAgCIgEgJIgBgDIAAgCIgBAAIgBgGIAAgjIAAAjIgCgEQgHgNgJgLIgBgCIgBAAIgNgNIAIAAIgIAAIgwAAIgCgSQAigEAxgCIAfAAIAPAAIAAAQIgIAAIAIAAIAAAoIAAAJIAAgJIAKAAQACAKAGAPIgBAQgAgSgbIAAgpgAgihcIAAgIgAhDhMgAAMhUg");
	this.shape_1.setTransform(39,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDBjQhkgBgjgEQhmgOgtgnQgPgNgIgQIBIgfIABgBQBBgfAxgdQAVgKAngFIAAAAIACASQAAAUgQAZIgIANQgIAQAAAGQAAAZAFANQAJATAaAQQgagQgJgTQgFgNAAgZQAAgGAIgQIAQAHIAIAAIAGADIAgASIgIAHQgMAJgHAHQgJgNgCgQQACAQAJANIgDADIANAHQAJAJAVAMIAGAEIAIABIAAAAIAAAIIAAgIIAJABIgBAPIAAAQIgRgBgABuBgIAAgMIAAgZIAAg/IAAgwQgWgIgQgMIgDgCQgJgIgKgFIgMgGIAAgGQAlACAjAHQAoAHAlANIAKAEQA/AWBkA7IAIAEIAFAPIgNAFQg7AUhCAQIgMACQg6AMg2AHIgBAAg");
	this.shape_2.setTransform(39.775,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AiUCkQgrgTgzgaQhFglgmgcIADgDQAsAoBmANQAjAEBkACIABAJIAOADQA3AOAVAAQAIgBAegIIAAgRIAxgEIABAAQA1gGA7gNIALgCQBDgPA7gVIASAJQgHAMgLALQgpAohbAgIgGgSQgJAAgWAHIgNAGIgEAAIgIACIAIgCIAFATQgkAKghAHQhGAPg3AAQg0gBhUgigAgICeQhAABhJgJQBJAJBAgBgACxCHIhZAAgADxBnQAZgJAoAAQgoAAgZAJgAF4AtIgGgPIgHgFQhkg6g/gXIgHgTIgogfIAoAfIgEAQQglgNgngHQgjgHglgCQgQgCgRAAIgBAAIgPgBIAAgHIAYAAIgYAAIggAAIgIgIIAIAQQgwABgiAEIgBAAQgnAFgVALQgwAchCAfIAAABIhJAfQgFgJgDgLIgBgEIgOAGIgBgFIAQgNIBTg/IAhgYIABAAQAcgUATgJQAjgQA0gEQAqgFBsAAQAoAAAyAMQAcAHAgAKIgEAMIAFgMQAjAMAoAQQBNAfAlAdQAgAaAAAWQAAAJgCAKIgCAIIgBACIgOAGgAkagnQgJALgMAFQgMAFgPABQAPgBAMgFQAMgFAJgLQAIgIAIgUQgIAUgIAIgADphTQgYgNgogSQAoASAYANgAgwhqIhBAAgAhxhyIhAAAgADBhLgADsjFIAFAAIAAAEIgFgEg");
	this.shape_3.setTransform(39.525,21.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,81.9,43.1);


(lib.btn2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiIBmQAagjAhgQQAngOAVgOIA6AAQAAADAEAGQAFAGAAAOQAAAcgmAzQgVAegwA7IAAAeQA2AAAWgBQAjgCAagHAA2FYQAAgNgEADQgFAGgIADQgRAAggAAQhWACg6gFQjTgQAAhnQAAhVAyhLQAagmBQhRQAUgUASgzQAUhAALgfQAph3BDAAQAvAAAWAKQAdAOAAAjQAAAagsAdQgsAcAAAnQAABDByAdQA6APA/ADQAcAMBABdQBBBeAAAeQAABthsAiQg6ASiUACg");
	this.shape.setTransform(36.75,34.3786);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF8C58").s().p("AicFUQjTgQAAhnQAAhVAzhLQAZgmBQhRQAUgUATgzQAThAALgfQAph3BDAAQAvAAAWAKQAcAOABAjQgBAagrAdQgsAcAAAnQAABDByAdQA6APA/ADQAcAMBBBdQA/BeABAeQAABthsAiQg6ASiUACQAAgNgEADQgFAGgIADIgxAAIguABQg4AAgqgEgAg5D6IBMgBQAigCAbgHQgbAHgiACIhMABIAAgeQAwg7AVgeQAmgzAAgcQAAgOgEgGQgFgGAAgDIg5AAQgWAOgnAOQghAQgZAjQAZgjAhgQQAngOAWgOIA5AAQAAADAFAGQAEAGAAAOQAAAcgmAzQgVAegwA7IAAAeg");
	this.shape_1.setTransform(36.75,34.3786);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,75.5,70.8);


(lib.btn1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA2FYQAAgNgEADQgFAGgIADQgRAAggAAQhWACg6gFQjTgQAAhnQAAhVAyhLQAagmBQhRQAUgUASgzQAUhAALgfQAph3BDAAQAvAAAWAKQAdAOAAAjQAAAagsAdQgsAcAAAnQAABDByAdQA6APA/ADQAcAMBABdQBBBeAAAeQAABthsAiQg6ASiUACgAgtgEIAADM");
	this.shape.setTransform(36.75,34.3786);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF8C58").s().p("AicFUQjTgQAAhnQAAhVAzhLQAZgmBQhRQAUgUATgzQAThAALgfQAph3BDAAQAvAAAWAKQAcAOABAjQgBAagrAdQgsAcAAAnQAABDByAdQA6APA/ADQAcAMBBBdQA/BeABAeQAABthsAiQg6ASiUACQAAgNgEADQgFAGgIADIgxAAIguABQg4AAgqgEgAgtDIIAAjMg");
	this.shape_1.setTransform(36.75,34.3786);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,75.5,70.8);


(lib.beanie = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ATFFmIgDAHQAIADAHADQBtArARADQAGgmASgzQAQgrAAgQQAAhUkxjIQgpgbhbgoQhWgng5goQgcgTgjhDQghg/gggSQg2ggjKgdQjlghgPgEQhPgYh9hAQhFgihIgGQgOgBgOAAQgKAAgKABQhNAIhmA9QhoBAgUAsQgPAggOBOQgXBDhMATQgmAKhLAKQhLAJgmAKQi2AyhDA7QgaAXgaAlQgwBHgEAFQglAyg9BYQgIALgIAMQhIBnAAAFQAAAuAdAIQABABArAAQAbAAATgIQASgHANgFQAXgJADgBAJkCrQgCABgCABQhQAtgmAxQguA7ALBIQAAAEABAFQAFAAAFABQAAgBAAAAQAAgOgKAEQgBAAAAABQgTAIgJABQAOAAAPAAAFJCrIgHAOQAFgCAFgCQBXgdBRAAQCXAAFcCAQBKAbCRA6IhUCpAFCC5IgxBgQgEALAABGQAAAgADAXQC7ABAHgKQCuAHD3BCQBFASByAgQBVAXAfAAQAyAAA5ACQAigBAJgJQAIgHADggQAGg6AGggAMfDnQg6A2gNArQgDAHgOBlAPQErIAKAAIAACnAEQGhQADARAEAMAkECiQgCADgCADQgeAwgRBPQgEASgNBUAm7GQQAGADAAADQAAgMgDADQgBACgCABQgIAHgJAAQATAADXAKQCHAGA6ACQAlACAFAAQgIAAgXAJQgMAFAAgOQAAgBABgBQAPgLDqADQAeAAAaAAApgDNQBJAQArAAQBTAABAgeQAigPAvgIQApgGAzAAQAmAACHAYQACAAACAAQCMAZAjAAQA+AABQgaAAEC1QgBACgCADQgdA9gFAQQgLAjAAA7QAAAWABAKQACAOAHAOAwvCrIgFAAQAEAGABgGQABgDAAgFA0oDxQAEAAAGAAQASABAoADQA0AEAMAAQBAAAC1giQBbgRBSgRQA2AABYAUQAKACAKACQgmBcgJAXQgaBBgHAaQgEALAAAFAwjGXQgEAKgCAKAwjGXIAEAAQAuAWA1AFQARACA3AAQACAADCgZQAOgCAPgCQC5gUAfANAu9DdQgmA2gWAmQgbAwgPAuAzgGXIC9AAAqBhCQgGAIgFAHQgKAHgPAJQAAABgBAAQgJACgJAIIAAAAQgEADgFADAp2AUQAKABAKAAApbC/QgDAHgCAH");
	this.shape.setTransform(139.875,55.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009933").s().p("AS2DIQgfAAhVgWQhyghhFgSQj3hCiugHIAAgBQAAgOgKAFIgBAAQgTAIgJABIAdAAIAKABQgHAKi7gBIg4AAQjrgDgOALIjBgIIjqgKQAJAAAIgHQAGADAAAEQAAgMgDADIgDACQgfgMi5ATIgdAEQAHgaAahAIAvhyIgvByQgaBAgHAaIjEAZQg3AAgRgCQg1gFgugWIgEAAQAPguAbgvQAWgmAmg2QgmA2gWAmQgbAvgPAuIi9AAIAagKIgaAKIgfAMQgTAIgbAAIgsgBQgdgIAAguQAAgFBIhmIAQgWQASAAAoADIBAAEQBAAAC1ghICtgjQA2AABYAUIAUAFQBJAPArAAQBTAABAgeQAigPAvgIQApgGAzAAQAmAACHAYQgdA9gFAQQgLAjAAA6QAAAXABAJQACAPAHANQgHgNgCgPQgBgJAAgXQAAg6ALgjQAFgQAdg9IAEAAQCMAZAjAAQA+AABQgaIgxBgQgEAMAABEQAAAgADAXQgDgXAAggQAAhEAEgMIAxhgIAKgDQBXgeBRAAQCXAAFcCBQBKAbCRA4IAPAGQBtArARADQgGAggGA6QgDAggIAHQgJAKgiAAIhrgCgASCC0IBUipgAPuBwIAAimIgKAAIAKAAgALsgZQgDAHgOBkQAOhkADgHQANgqA6g3Qg6A3gNAqgAHbAsQgCgNAAgNQAAg4AlgwQAmgxBQgsIAEgDIgEADQhQAsgmAxQglAwAAA4QAAANACANgAkjg5QgEARgNBTQANhTAEgRQARhQAegwQgeAwgRBQgAHmA2IAAAAg");
	this.shape_1.setTransform(137.875,90.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("ASlG4IgOgGQiSg5hKgbQlbiBiYAAQhRAAhXAeIgKADIAHgOIgHAOQhPAag/AAQgjAAiLgYIgDgBIACgFIgCAFQiJgYgmAAQgzAAgpAHIAEgHIgEAHQgvAHgiAQQhAAdhSAAQgsAAhJgPIAFgPIgFAPIgUgFQhXgUg3AAIisAjQi2AihAAAIhAgEQgngEgTAAQA9hZAmgxIAzhMQAagnAagXQBDg6C2gyQAmgKBLgJQBLgJAmgKQBMgUAXhCQAOhPAPggQAUgsBog/QBmg+BNgHIAUgBIAcABQBJAFBFAjQB8BABQAYQAOAEDmAhQDJAcA2AgQAhASAgBAQAkBCAbAUQA5AoBWAmQBbAoApAbQExDJAABUQAAAPgQArQgSAzgGAmQgRgDhtgrgASXGyIACgGgAxbDxIABgJIgBAJIgFAAQAEAGABgGgAqOBaIgUAAIAUAAgArtAzIAJgHIAAAAQAJgHAJgDIABAAIAagQIAKgPIgKAPIgaAQIgBAAQgJADgJAHIAAAAIgJAHgAk0DuIAAAAg");
	this.shape_2.setTransform(144.25,48.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.beanie, new cjs.Rectangle(-1,-1,281.8,113.2), null);


(lib.armtype2r = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJShdIBRAAQAAACADAEQADAEAAAJQAAAFgkAiQgnAjgGAGIAAAHQAHgFASgOIA+AAIAAAlQgjAVgQAIQgbAMgcgEQAKAagSAlQgRAmgWAAQgQAAgxgoQgzgogMgBQgfgFg9AFQg5AGgIAAQg3AAg2gTQg2gTg0AAQgfAAg3AZQg4AZggAAQgjAAgxgNQgygMgcAAQgmAAhFAZQhFAZgfAAQgRAAgTgJQgXgNgMgHQgbgNgdgBQgKgBgKABQgPACgPAEApRh8QAPgEASgEQAUgFAWgFQAhgHAkAAQAfAAAzAMQAzANAOAAQAcAAAkgTQAjgTA2AAQAUAAAjAHQAqAIAPALQALAIArAAQAuABAGADQATAIBUAmQBLAjAFAAQAfAAALgfQAGgRAAgeQAAgVAMgEQASgGAHgQIBLAAIAAAmQgGAFgDADQgFAFgFALIAAAmIA5AAQALgXAggVQAHgFA4ggIA+AAQABARgLASQgMARgCAEIgNAAAqaBMIAKAAQAKhkAVgoQARghAxgg");
	this.shape.setTransform(68.725,16.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#997D46").s().p("AHGCBQgzgogMgBQgfgFg9AFIhBAGQg3AAg2gTQg2gTg0AAQgeAAg4AZQg4AZggAAQgjAAgxgNQgygMgcAAQgmAAhFAZQhFAZgfAAQgRAAgTgJIgjgUQgbgNgdgBIgUAAIAAgMQAKhkAVgoQARghAxggIgBgDIAqgKQAhgHAkAAQAfAAAzAMQAzANAOAAQAcAAAkgTQAjgTA2AAQAUAAAjAHQAqAIAPALQALAIArAAQAuABAGADIBnAuQBLAjAFAAQAfAAALgfQAGgRAAgeQAAgVAMgEQASgGAHgQIBLAAIAAAmIgJAIQgFAFgFALIAAAmIA5AAQALgXAggVIA/glIA+AAQABARgLASIgOAVIBRAAQAAACADAEQADAEAAAJQAAAFgkAiIgtApIAAAHQAHgFASgOIA+AAIAAAlQgjAVgQAIQgbAMgcgEQAKAagSAlQgRAmgWAAQgQAAgxgogAJDhdIgNAAg");
	this.shape_1.setTransform(70.225,16.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.armtype2r, new cjs.Rectangle(-1,-1,139.5,35.8), null);


(lib.armtype2l = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AKiBfQgVgfgigWQgUgNAAgpQAAgUAPgvQACgHACgIQAUg7AAgTQgcASgIAkQgEASABAPApRhZIhRAAQAAACgDAEQgDAEAAAJQAAAFAkAiQAnAjAGAGIAAAHQgHgEgSgPIg+AAIAAAlQAjAWAQAHQAbANAcgEQgKAZASAmQARAlAWAAQAQAAAxgnQAzgoAMgCQAfgEA9AFQA5AFAIAAQA3AAA2gSQA2gTA0AAQAfAAA3AZQA4AYAgAAQAjAAAxgMQAygNAcAAQAmAABFAaQBFAZAfAAQARAAATgKQAXgNAMgGQAqgWAzAKQACAAADABQAEABAEABAJSh4QgfgHgsgLQghgHgkAAQgfAAgzAMQgzANgOAAQgcAAgkgTQgjgTg2AAQgUAAgjAHQgqAIgPALQgLAIgrAAQguABgGADQgTAIhUAmQhLAjgFAAQgfAAgLgfQgGgRAAgeQAAgVgMgEQgSgGgHgQIhLAAIAAAmQAGAGADACQAFAFAFALIAAAmIg5AAQgLgXgggVQgHgFg4ggIg+AAQgBARALATQAMAQACAEIANAA");
	this.shape.setTransform(68.725,16.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#997D46").s().p("Ao2CDQgRglAKgaQgdAEgagMQgRgIgjgVIAAglIA+AAQASAOAIAFIAAgHIgtgpQgkgiAAgFQAAgJADgEQADgEAAgCIBRAAIgPgVQgLgSABgRIA+AAIBAAlQAgAVALAXIA4AAIAAgmQgEgLgFgFIgKgIIAAgmIBLAAQAIAQARAGQANAEAAAVQAAAeAGARQALAfAeAAQAFAABMgjIBnguQAFgDAugBQArAAALgIQAPgLArgIQAjgHAUAAQA1AAAkATQAjATAdAAQAOAAAygNQAzgMAgAAQAjAAAiAHIBLASIAHACQgEASABAPIAPAFQgPAwAAATQAAApAUANQAiAXAWAfQgzgKgqAVIgjAUQgUAJgRAAQgeAAhFgZQhGgZglAAQgdAAgxAMQgyANgjAAQgfAAg4gZQg5gZgeAAQgzAAg3ATQg2ATg3AAIhBgGQg9gFgfAFQgLABgzAoQgyAogQAAQgWAAgRgmgAo9hdIgNAAg");
	this.shape_1.setTransform(68.0625,16.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.armtype2l, new cjs.Rectangle(-1,-1.8,139.5,36.599999999999994), null);


(lib.arm2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEHgDQACgCACgCQA3gvAWgWQAZgZBGhRIAAhGIgyAAQgGAPgVATQgCADgkAdQAOgmAjhPQAuhnAUg4IgyAAQgvAiglAxQgcAlgIAfIAAgfQgBgRAEgSQAIgkAdgTIAAiCIhuAAQgdAsgNAVQgHALgFAMQgCAFgCAFQgJAZgDAbQgFAAgFACQgKACAAAGIAAgUQAAgOAHgOQAFgMAEgIQADgIABgEIAAiqQgJAAgJgFQgJgFgNAAQgFAAgFACQglAPgQB4QgFAmgDAeQgFA/AGAgIhFAAQAAgCgCgDQgFgFgNAAQAAgegBgMQgCgVgHgHIg8AAQgKAUAAA3QAAAwAKAVQAIAPAUAJQAiAPAHAEQAUANATAXQAEAGAEAFQgIgCgIgCIAAAEIAABWQAUAAAbAOQAVALAHAEABtmIIAAgKAEHgDQgegVgjgfQgwgtgYgVQhLhBhGgUQgCgBgDgBAFEi6QgCACgDACIAAAKQACgGADgIgAENk3QgFAVAFASgAC9BYQgLAAgFgDQAJAOAAABQAKAMAbAQIA8AAIAAh4QgIgGgIgFAD5AIQAHgGAHgFAAehTIAAAVIAAAmAmuJ+QDMAmC/jpQCCigBIjJQAHgRAFgRAloHAQAsggBWg7QBKg1AsguQB4h8AWjEAlzHAQADBFgiAuQgJAMgQATQgLARAAARQAAAGABAFQADAHAFAFQAJAIAAAE");
	this.shape.setTransform(43.075,66.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996633").s().p("AleGkIgHACQgBgFAAgHQAAgQALgRIAZggQAigugDhFIALAAQAsgfBWg7QBKg1AsguQB4h7AWjFIAAAmIAAgmIAAgVIAGgKIgdgPQgcgOgUAAIAAhWIAQAAIAFACQBHAUBLBBIBIBBQAjAfAeAWIAQALIAAB4Ig8AAQgbgQgKgMIgJgPQAFADALAAQgLAAgFgDIgGgCIAMgjIgMAjQhIDIiDCgQijDIiuAAQgcAAgdgGgAFJjRIAOgLIgOALg");
	this.shape_1.setTransform(35.075,87.9669);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-1,89.8,134.5);


(lib.arm1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhomIIAAgUQAAgOgGgOQgGgMgDgIQgEgIgBgEIAAiqQAJAAAJgFQAJgFANAAQAFAAAFACQAlAPARB4QAFAmACAeQAFA/gGAgIBFAAQAAgCADgDQAFgFAMAAQAAgeABgMQADgVAGgHIA8AAQAKAUAAA3QAAAwgKAVQgHAPgUAJQgjAPgHAEQgZAQgWAfQAIgCAIgCIAAAEIAABWQgUAAgbAOQgXAMgHADAkCAGQAegVAjgfQAwgsAZgVQBKhBBGgUQACgBADgBAkIktIAAgfQABgRgEgSQgIgkgdgTIAAiCIBuAAQAdAsANAVQAKAQAGARQAJAYADAcQAFAAAFACQAKACAAAGAk/iwQgOgngjhOQguhngUg4IAyAAQAvAiAlAxQAcAlAIAfQAFAVgFASIAAgnAkCAGQgCgCgCgCQg3gugWgWQgZgZhGhRIAAhGIAyAAQAGAPAVATQACADAkAdQACACADACIAAAKQgCgGgDgIAhol+IAAgKAgXgsQgEAAgFAAIAAgnIAAgKAi4BhQALAAAFgDQgJAPAAAAQgKAMgbAQIg8AAIAAh4QAIgFAIgGAj0ARQgHgGgHgFAGzKHQgIACgIABQjDAai4jfQiCighIjJQgGgRgGgSAgXgsQgBgEAAgEAgWgfQAAgGgBgHAgWgfQAGgDAEAAQAAgHgGgCQgCAAgDgBAFtHJQgrgfhXg7QhJg1gtguQhyh1gYi1QAAAAgBgBAGYKCIAKAAIAAhFQgLgYgMgjQgPgpAAgRIgKAA");
	this.shape.setTransform(43.5,65.2654);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996633").s().p("AgfDiQiDighIjIIgMgjIAMAjIgGACQgFADgLAAQALAAAFgDIgJAPQgKAMgbAQIg8AAIAAh4IAQgLQAegWAjgfIBIhBQBLhBBHgUIAFgCIAQAAIAABWQgUAAgcAOIgeAPIAAgKIAAAKIAAAnIAJAAIABANIABABQAZC2BxB0QAsAuBKA1QBWA7AsAfIAFgBIAKAAQAAARAOApQAMAjAMAYIAABFIgKAAIAKAAIABAIQgVADgUAAQitAAikjIgAk8jRIgOgLIAOALgAjqiGIAAAAgAhok2g");
	this.shape_1.setTransform(50.7125,87.9654);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,89,132.6);


// stage content:
(lib.MPH3GGarcia = function(mode,startPosition,loop,reversed) {
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
		this.nervous.on("pressmove", dragMe);
		this.scream.on("pressmove", dragMe);
		this.smurk.on("pressmove", dragMe);
		this.eye.on("pressmove", dragMe);
		this.eye2.on("pressmove", dragMe);
		this.squint1.on("pressmove", dragMe);
		this.squint2.on("pressmove", dragMe);
		this.smalleye.on("pressmove", dragMe);
		this.smalleye2.on("pressmove", dragMe);
		this.shoe1.on("pressmove", dragMe);
		this.shoe2.on("pressmove", dragMe);
		this.beanie.on("pressmove", dragMe);
		this.arm1.on("pressmove", dragMe);
		this.arm2.on("pressmove", dragMe);
		this.arm2r.on("pressmove", dragMe);
		this.arm2l.on("pressmove", dragMe);
		this.snake.on("pressmove", dragMe);
		this.moneybag.on("pressmove", dragMe);
		this.hat.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX / stage.scaleX;
			evt.currentTarget.y = evt.stageY / stage.scaleY;
		}
		
		this.resetbutton.addEventListener("click", Clickreset.bind(this));
		
		function Clickreset() {
			this.nervous.x = 77.55;
			this.nervous.y = 126.00;
			this.scream.x = 84.70;
			this.scream.y = 199.85;
			this.smurk.x = 87.80;
			this.smurk.y = 274.50;
			this.eye.x = 49.00;
			this.eye.y = 385.15;
			this.eye2.x = 130.00;
			this.eye2.y = 385.50;
			this.arm1.x = 731.60;
			this.arm1.y = 426.60;
			this.arm2.x = 879.85;
			this.arm2.y = 422.60;
			this.arm2r.x = 833.15;
			this.arm2r.y = 527.50;
			this.arm2l.x = 747.80;
			this.arm2l.y = 583.30;
			this.snake.x = 610.70;
			this.snake.y = 563.65;
			this.moneybag.x = 486.15;
			this.moneybag.y = 557.40;
			this.smalleye2.x = 58.15;
			this.smalleye2.y = 518.15;
			this.smalleye.x = 123.05;
			this.smalleye.y = 518.15;
			this.squint1.x = 115.05;
			this.squint1.y = 462.95;
			this.squint2.x = 60.55;
			this.squint2.y = 464.95;
			this.hat.x = 808.60;
			this.hat.y = 90.80;
			this.beanie.x = 797.75;
			this.beanie.y = 225.05;
			this.shoe2.x = 387.00;
			this.shoe2.y = 88.35;
			this.shoe1.x = 481.20;
			this.shoe1.y = 88.35;
		}
		
		this.btn1.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eye.x = 341;
			this.eye.y = 266;
			this.eye2.x = 454;
			this.eye2.y = 266;
			this.scream.x = 427.50;
			this.scream.y = 364.35;
			this.arm2.x = 571.45;
			this.arm2.y = 248.35;
			this.arm1.x = 217.60;
			this.arm1.y = 246.85;
			this.beanie.x = 388.60;
			this.beanie.y = 188.35;
		}
		
		this.btn2.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.smalleye.x = 334.50;
			this.smalleye.y = 280.45;
			this.smalleye2.x = 458;
			this.smalleye2.y = 280.45;
			this.smurk.x = 407.00;
			this.smurk.y = 324.45;
			this.hat.x = 377.05;
			this.hat.y = 174.05;
			this.shoe1.x = 481.21;
			this.shoe1.y = 435.95;
			this.shoe2.x = 314.00;
			this.shoe2.y = 439.95;	
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.shoe2 = new lib.shoe();
	this.shoe2.name = "shoe2";
	this.shoe2.setTransform(387,88.35,1,1,0,0,180);

	this.shoe1 = new lib.shoe();
	this.shoe1.name = "shoe1";
	this.shoe1.setTransform(481.2,88.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF8C58").s().p("AgCAuIgSg3QgCgHAAgGQAAgJAGgHQAHgHAJAAQALAAAGAHQAGAIAAAJQAAAFgCAHIgSA3g");
	this.shape.setTransform(786.75,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF8C58").s().p("AhGBaIAAgFQAAgZALgTQAFgLAJgKQALgJANgLQAWgQAHgIQAHgIAAgHQAAgIgEgFQgFgFgJAAQgTAAAAAZIgtgCQABgeATgMQATgNAcAAQAfAAATAPQAUAOAAAXQAAAPgKANQgKAMgcAPQgXAMgIAFQgIAHgEAIIA3AAIAAgPIAlAAIgCA3g");
	this.shape_1.setTransform(774,27.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF8C58").s().p("AhGBaIAAgFQAAgZALgTQAFgLAKgKQAJgJAOgLQAWgQAHgIQAHgIAAgHQAAgIgEgFQgFgFgJAAQgTAAAAAZIgugCQACgeATgMQATgNAcAAQAfAAATAPQAUAOAAAXQAAAPgKANQgKAMgdAPQgWAMgHAFQgIAHgFAIIA3AAIAAgPIAlAAIgCA3g");
	this.shape_2.setTransform(756.1,27.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF8C58").s().p("AgNBUQgKgGgGgIIgEgIIgCgJIgBggIAAgVIgQAAIAAglIAQAAIAAgTIA/gfIAAAyIAaAAIAAAlIgaAAIAAAYQAAALACAFQACADAHAAQAGAAAJgDIAAAmQgHADgLAEQgNADgLAAQgOAAgKgEg");
	this.shape_3.setTransform(734.625,27.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF8C58").s().p("AhBA/IAAgnIAQAAIAAgtIgQAAIAAgmIBMAAIAAAeQAEgLAIgIQAJgJAJgCQAIgDARAAIAAA3IgFgBQgUAAgJAEQgKAEgDAGQgFAHAAALIATAAIAAAng");
	this.shape_4.setTransform(721.55,29.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF8C58").s().p("AhJA1QgOgLAAgQQAAgSARgKQAQgLAaABQAYAAANAFIAAgDQAAgMgCgEQgCgFgFgDQgGgDgIAAQgQgBgIAMIgygFQAIgSATgHQASgIAjAAIAXABIASACQARAEAIAHQAIAGADAIQAEAIAAARIAAAjIAQAAIAAAmIhQAAIAAgJQgQALgbAAQgaABgNgMgAgVAIQgFAEAAAIQAAAIAFAEQAFAFAHAAQALAAAHgGIAAgXQgJgFgIABQgIgBgFAFg");
	this.shape_5.setTransform(704.525,29.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF8C58").s().p("AhdBbIAAgmIAPAAIAAhmIgPAAIAAgmIBPAAIAAAIQAUgLAVAAQAbAAAUASQATASAAAdQAAAcgTARQgTARgeAAQgYAAgPgKIAAAaIAQAAIAAAmgAgIgvQgGAHAAAPQAAANAGAGQAGAHAIAAQAWAAAAgbQAAgbgVAAQgJAAgGAGg");
	this.shape_6.setTransform(677.55,32.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF8C58").s().p("ABCA/IAAg1QAAgUgCgFQgDgFgJAAQgKAAgLAIIAAAkIARAAIAAAnIhQAAIAAg1QAAgTgCgGQgDgFgJAAQgKAAgLAIIAAAkIASAAIAAAnIhgAAIAAgnIAOAAIAAgtIgPAAIAAgmIBPAAIAAAQQAKgHAOgGQAQgGANAAQAeAAALAYQAcgYAdAAQAQAAALAHQALAHAEAMQAFAMgBAVIAAAbIARAAIAAAng");
	this.shape_7.setTransform(651.9,29.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF8C58").s().p("Ag+AuQgXgSgBgcQAAgbAYgSQAXgTAmAAQAnAAAYASQAZASAAAcQAAAcgYASQgXATgnAAQgoAAgXgTgAgPgVQgFAHAAAOQgBAdAVAAQAVAAAAgdQAAgOgEgHQgHgIgKABQgIgBgHAIg");
	this.shape_8.setTransform(626.35,30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF8C58").s().p("AhDBBQgZgaAAgmQAAgmAYgbQAZgaAmAAQAeAAAUAOIAAgLIAqAAIAABAIgsAAQgDgLgJgIQgHgGgLgBQgcABAAAwQAAAxAdAAQAaAAAHgmIAuAQQgHAcgUASQgVATgmAAQgyAAgYgbg");
	this.shape_9.setTransform(606.25,27.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BF8C58").s().p("AgfAXIAAgtIA+AAIAAAtg");
	this.shape_10.setTransform(587.1,33.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BF8C58").s().p("AhJA1QgOgLAAgQQAAgSARgKQAQgLAaABQAYAAANAFIAAgDQAAgMgCgEQgCgFgFgDQgGgDgIAAQgQgBgIAMIgygFQAIgSATgHQASgIAjAAIAXABIASACQARAEAIAHQAIAGADAIQAEAIAAARIAAAjIAQAAIAAAmIhQAAIAAgJQgQALgbAAQgaABgNgMgAgVAIQgFAEAAAIQAAAIAFAEQAFAFAHAAQALAAAHgGIAAgXQgJgFgIABQgIgBgFAFg");
	this.shape_11.setTransform(572.375,29.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BF8C58").s().p("AgrBaIAAgmIANAAIAAguIgNAAIAAgmIBMAAIAABUIALAAIAAAmgAgZgzQgKgFAAgLQAAgKAKgGQAKgGAPAAQAPAAAJAGQAJAGAAAKQAAAKgJAGQgKAGgOAAQgPAAgKgGg");
	this.shape_12.setTransform(557.175,27.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BF8C58").s().p("Ag4AvQgWgRAAgeQAAgbAVgTQAUgRAggBQAZAAAOALIAAgIIAnAAIAAA0IgnAAQgHgUgRgBQgLAAgGAJQgHAKAAAMQAAAOAHAIQAHAJAKAAQASgBAEgUIAvAKQgGAVgTALQgUAMgeAAQgmgBgWgRg");
	this.shape_13.setTransform(543.075,30.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BF8C58").s().p("AhBA/IAAgnIAQAAIAAgtIgQAAIAAgmIBLAAIAAAeQAEgLAKgIQAIgJAJgCQAJgDAQAAIAAA3IgFgBQgTAAgKAEQgKAEgDAGQgEAHAAALIASAAIAAAng");
	this.shape_14.setTransform(527.35,29.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BF8C58").s().p("AhJA1QgOgLAAgQQAAgSARgKQAQgLAaABQAYAAANAFIAAgDQAAgMgCgEQgCgFgFgDQgGgDgIAAQgQgBgIAMIgygFQAIgSATgHQASgIAjAAIAXABIASACQARAEAIAHQAIAGADAIQAEAIAAARIAAAjIAQAAIAAAmIhQAAIAAgJQgQALgbAAQgaABgNgMgAgVAIQgFAEAAAIQAAAIAFAEQAFAFAHAAQALAAAHgGIAAgXQgJgFgIABQgIgBgFAFg");
	this.shape_15.setTransform(510.325,29.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BF8C58").s().p("AgsBSQgZgLgNgWQgOgVAAgcQAAgoAcgaQAbgYAnAAQAfAAATAPIAAgMIAqAAIAAA+IgqAAQgGgMgJgGQgJgFgMgBQgPAAgIAMQgIAKAAAcQAAAdAIALQAIALAPAAQAYAAAAgYIgSAAIAAghIBPAAQAAAcgEAOQgEAOgNAOQgMANgRAHQgSAGgUABQgdAAgYgKg");
	this.shape_16.setTransform(489.375,27.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BF8C58").s().p("AgsBSQgZgLgNgWQgOgVAAgcQAAgoAcgaQAbgYAnAAQAfAAATAPIAAgMIAqAAIAAA+IgqAAQgGgMgJgGQgJgFgMgBQgPAAgIAMQgIAKAAAcQAAAdAIALQAIALAPAAQAYAAAAgYIgSAAIAAghIBPAAQAAAcgEAOQgEAOgNAOQgMANgRAHQgSAGgUABQgdAAgYgKg");
	this.shape_17.setTransform(467.425,27.3);

	this.snake = new lib.snake();
	this.snake.name = "snake";
	this.snake.setTransform(610.65,563.6,1,1,0,0,0,47.1,66.3);

	this.btn2 = new lib.btn2();
	this.btn2.name = "btn2";
	this.btn2.setTransform(633.55,457.05,1,1,0,0,0,36.8,34.4);
	new cjs.ButtonHelper(this.btn2, 0, 1, 1);

	this.btn1 = new lib.btn1();
	this.btn1.name = "btn1";
	this.btn1.setTransform(550.8,457.05,1,1,0,0,0,36.8,34.4);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.resetbutton = new lib.resetbutton();
	this.resetbutton.name = "resetbutton";
	this.resetbutton.setTransform(193.9,457.4,1,1,0,0,0,36.8,34.4);
	new cjs.ButtonHelper(this.resetbutton, 0, 1, 1);

	this.beanie = new lib.beanie();
	this.beanie.name = "beanie";
	this.beanie.setTransform(797.7,225.1,1,1,0,0,0,139.8,55.6);

	this.moneybag = new lib.moneybag();
	this.moneybag.name = "moneybag";
	this.moneybag.setTransform(486.15,557.4,1,1,0,0,0,38.5,39.5);

	this.smalleye2 = new lib.smalleye2();
	this.smalleye2.name = "smalleye2";
	this.smalleye2.setTransform(58.15,518.15,1,1,0,0,0,7.5,7.5);

	this.smalleye = new lib.smalleye();
	this.smalleye.name = "smalleye";
	this.smalleye.setTransform(123.05,518.15,1,1,0,0,0,7.5,7.5);

	this.squint2 = new lib.squint2();
	this.squint2.name = "squint2";
	this.squint2.setTransform(60.55,464.95,1,1,0,0,0,15,1);

	this.squint1 = new lib.squint();
	this.squint1.name = "squint1";
	this.squint1.setTransform(115.05,462.95,1,1,0,0,0,15.5,3);

	this.arm2l = new lib.armtype2l();
	this.arm2l.name = "arm2l";
	this.arm2l.setTransform(747.8,583.35,1,1,0,0,0,68.7,16.9);

	this.arm2r = new lib.armtype2r();
	this.arm2r.name = "arm2r";
	this.arm2r.setTransform(833.15,527.55,1,1,0,0,0,68.7,16.9);

	this.eye2 = new lib.eye("synched",0);
	this.eye2.name = "eye2";
	this.eye2.setTransform(130,385.55,1,1,0,0,180,39.9,20.6);

	this.eye = new lib.eye("synched",0);
	this.eye.name = "eye";
	this.eye.setTransform(49,385.2,1,1,0,0,0,39.9,20.6);

	this.nervous = new lib.nervous("synched",0);
	this.nervous.name = "nervous";
	this.nervous.setTransform(77.55,126,1,1,0,0,0,78.5,21.3);

	this.scream = new lib.scream("synched",0);
	this.scream.name = "scream";
	this.scream.setTransform(84.7,199.85,1,1,0,0,0,27,39.5);

	this.smurk = new lib.smurk("synched",0);
	this.smurk.name = "smurk";
	this.smurk.setTransform(87.8,274.5,1,1,0,0,0,50.5,15);

	this.hat = new lib.hat("synched",0);
	this.hat.name = "hat";
	this.hat.setTransform(808.6,90.8,1,1,0,0,0,129.5,34);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#996600").s().p("Ag5AvQgVgSAAgcQAAgcAVgSQAVgTAkAAQAiAAAWASQAWARABAkIhgAAQABAdAVAAQANAAAGgOIA0AHQgDAJgGAGQgHAHgJAEQgSAKgaAAQgqAAgWgSgAgLgdQgFAHAAAKIAAAEIAjAAIAAgFQAAgKgFgHQgFgGgIAAQgIAAgEAHg");
	this.shape_18.setTransform(372.275,30);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#996600").s().p("AgrBaIAAgmIANAAIAAguIgNAAIAAgmIBMAAIAABUIALAAIAAAmgAgZgzQgKgFAAgLQAAgKAKgGQAKgGAPAAQAPAAAJAGQAJAGAAAKQAAAKgJAGQgKAGgOAAQgPAAgKgGg");
	this.shape_19.setTransform(357.925,27.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#996600").s().p("AArBYIgyg1IAngnIgXAAIAAgeIBPAAIAAAhIgOAAIgXAWIAbAdIAKAAIAAAmgAhXBYIAAgmIAQAAIAAhjIgQAAIAAgmIBQAAIAAB6IAAA1g");
	this.shape_20.setTransform(342.825,27.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#996600").s().p("Ag+AuQgYgSABgcQgBgbAYgSQAWgTAnAAQAmAAAZASQAZASgBAcQABAcgYASQgYATglAAQgpAAgXgTgAgOgVQgHAHAAAOQAAAdAVAAQAVAAAAgdQABgOgGgHQgGgIgJABQgKgBgFAIg");
	this.shape_21.setTransform(323.65,30);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#996600").s().p("Ag+AuQgXgSgBgcQAAgbAYgSQAXgTAmAAQAnAAAYASQAZASAAAcQAAAcgYASQgXATgnAAQgoAAgXgTgAgPgVQgFAHAAAOQgBAdAVAAQAWAAgBgdQAAgOgEgHQgHgIgKABQgIgBgHAIg");
	this.shape_22.setTransform(304.15,30);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#996600").s().p("AhkBYIAAgqIAOAAIAAhbIgOAAIAAgqIBVAAQAcAAASADQATAEAQALQAQALAJATQAEAJADALQADAKAAAKQAAAXgKATQgKATgOAKQgPAKgSADQgQADgkAAgAgSAuIAHAAQAXAAAIgNQAGgNAAgTQAAgLgDgLQgDgMgIgGQgHgGgUAAIgDAAg");
	this.shape_23.setTransform(283.05,27.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#996600").s().p("Ag5AvQgVgSAAgcQAAgcAVgSQAVgTAkAAQAiAAAWASQAWARABAkIhgAAQABAdAVAAQANAAAGgOIA0AHQgDAJgGAGQgHAHgJAEQgSAKgaAAQgqAAgWgSgAgLgdQgFAHAAAKIAAAEIAjAAIAAgFQAAgKgFgHQgFgGgIAAQgIAAgEAHg");
	this.shape_24.setTransform(256.075,30);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#996600").s().p("AgrBaIAAgmIANAAIAAguIgNAAIAAgmIBMAAIAABUIALAAIAAAmgAgZgzQgKgFAAgLQAAgKAKgGQAKgGAPAAQAPAAAJAGQAJAGAAAKQAAAKgJAGQgKAGgOAAQgPAAgKgGg");
	this.shape_25.setTransform(241.725,27.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#996600").s().p("AArBYIgyg1IAngnIgXAAIAAgeIBPAAIAAAhIgOAAIgXAWIAbAdIAKAAIAAAmgAhXBYIAAgmIAQAAIAAhjIgQAAIAAgmIBQAAIAAB6IAAA1gAgHAjg");
	this.shape_26.setTransform(226.625,27.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#996600").s().p("Ag+AuQgYgSABgcQAAgbAWgSQAXgTAnAAQAnAAAYASQAZASgBAcQABAcgYASQgYATglAAQgpAAgXgTgAgOgVQgHAHAAAOQABAdAUAAQAWAAAAgdQAAgOgGgHQgGgIgJABQgKgBgFAIg");
	this.shape_27.setTransform(207.45,30);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#996600").s().p("Ag+AuQgXgSgBgcQAAgbAYgSQAWgTAnAAQAmAAAZASQAYASAAAcQAAAcgXASQgXATgnAAQgoAAgXgTgAgPgVQgFAHgBAOQAAAdAVAAQAVAAAAgdQAAgOgEgHQgHgIgJABQgJgBgHAIg");
	this.shape_28.setTransform(187.95,30);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#996600").s().p("AhDBBQgYgagBgmQAAgmAZgbQAXgaAnAAQAeAAATAOIAAgLIArAAIAABAIgsAAQgDgLgIgIQgJgGgKgBQgcABAAAwQAAAxAdAAQAaAAAHgmIAuAQQgHAcgUASQgVATgmAAQgxAAgZgbg");
	this.shape_29.setTransform(167.85,27.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#996600").s().p("AhBA/IAAgnIAQAAIAAgtIgQAAIAAgmIBMAAIAAAeQAEgLAIgIQAJgJAJgCQAIgDARAAIAAA3IgFgBQgUAAgJAEQgKAEgDAGQgFAHAAALIATAAIAAAng");
	this.shape_30.setTransform(144.2,29.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#996600").s().p("AAoBYIAAgqIAPAAIAAhiIg2CMIgZAAIg1iKIAABgIAOAAIAAAqIhEAAIAAgqIANAAIAAhbIgOAAIAAgqIBrAAIAZBEIAahEIBqAAIAAAqIgOAAIAABbIAPAAIAAAqg");
	this.shape_31.setTransform(122.425,27.325);

	this.arm2 = new lib.arm2("synched",0);
	this.arm2.name = "arm2";
	this.arm2.setTransform(879.85,422.55,1,1,0,0,0,43.5,65.2);

	this.arm1 = new lib.arm1("synched",0);
	this.arm1.name = "arm1";
	this.arm1.setTransform(731.6,426.55,1,1,0,0,0,43.5,65.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CC9966").ss(1,1,1).p("Ai5AtQADgBADAAQA3gKBwgQQBsgSBags");
	this.shape_32.setTransform(447.575,410.5125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("EAyXgFZIAKAAAd4kxIgKAAEgyYAFYQgEABgEABQANAAAMAAQAAgCgRAAg");
	this.shape_33.setTransform(551.425,457.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC99").s().p("AgBgFQAGAJgGACg");
	this.shape_34.setTransform(125.1646,391.7375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.arm1},{t:this.arm2},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.hat},{t:this.smurk},{t:this.scream},{t:this.nervous},{t:this.eye},{t:this.eye2},{t:this.arm2r},{t:this.arm2l},{t:this.squint1},{t:this.squint2},{t:this.smalleye},{t:this.smalleye2},{t:this.moneybag},{t:this.beanie},{t:this.resetbutton},{t:this.btn1},{t:this.btn2},{t:this.snake},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shoe1},{t:this.shoe2}]}).wait(1));

	// Character
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#996633").s().p("AgDAIIAAgBIAAgBIAAgBIgBgCIAAgHIABAAIAAAAIgBgBIAAAAIABAAIgBgBIAAgCIABgBIAAAAIAAABIABABIAAABIAAgBIABABIAAAAIABgBIAAACIABgBIAAABIgBAAIABABIABAAIABgBIACgBIAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAAAgBIgBAAIAAABIACAAIABAAIABAAIgBABIAAABIAAAAIgBABIABAAIAAAAIAAAAIAAABIABAAIgBAAIgBABIgBABIABAAIAAAAIABAAIgBABIgBABIAAgBIgBABIAAABIACgBIgBACIgBACIgDABIAAAAIgBgCgAgDgGIABAAIgBAAg");
	this.shape_35.setTransform(453.975,249.205);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#996633").s().p("AgDAIIAAgCIAAgBIAAAAIgBgCIAAgHIABAAIAAgBIgBAAIAAgBIABAAIAAgBIAAAAIABABIgBgBIAAgBIAAAAIAAAAIABABIAAAAIAAAAIABABIAAgBIABAAIAAABIABAAIAAAAIgBABIABAAIABAAIABgBIACgBIAAABQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIgBAAIAAAAIACAAIABABIABgBIgBABIAAABIAAABIgBAAIABAAIAAABIAAAAIAAAAIABAAIgBABIgBAAIgBACIABgBIAAABIABgBIgBACIgBAAIAAAAIgBABIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIgBACIgBACIgDABIAAAAIgBgBg");
	this.shape_36.setTransform(452.975,248.38);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#996633").s().p("AgKALQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAAAIAAABIgCgBIAAAAIgCgCIAAAAIgBgBIAAgCIgBAAIAAgBIAAgBIgCAAIAAgBIgBAAIAAgBIACAAIAAAAIgBAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAIgBAAIgBAAIgBAAIAAAAIAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIADAAIABAAIACAAIABAAIAEgBIAAAAIABgBIAAAAIABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAAAAAIAGgCIAAAAIgEACIAEAAIAAgBIABAAIAFgBIACgBIACAAIADgBIADgBIABAAIAAABIgOAEIgBAAIAAAAIABAAIADgBIACAAIAEAAIAEgBIAAAAIgDABIAAABIAAAAIABAAIAAABIgCAAIgCABIAEgBIABAAIAAABIAAAAIgCABIgBAAIAAAAIAEAAIAAAAIAAAAIgHACIgCABIABAAIAGgCIgFACIAFgBIgFACIgBAAIgDAAIgCACIAAAAIABAAIABAAIAHgDIgCACIgCABIgGADIgGADIgHADIgCAAIgBgBgAgQgCIADAAIABgBIgDAAIgBABg");
	this.shape_37.setTransform(451.271,247.845);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#996633").s().p("AgHAVIAAgCIgBAAIgCAAIgDgBIgBAAIgBAAIAAgBIAAgBIAAgBIgBgBIAAAAIgBAAIAAAAIgBAAIAAgBIgBAAIAAgBIABABIAAgBIAAAAIAAAAIABgBIABAAIAAAAIAAgBIAAAAIgBABIAAAAIgBAAIAAAAIAAAAIAAABIAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBgBIABgBIAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIABgCIABAAIAAAAIABAAIAAgBIABAAIABAAIAAAAIABAAIAAAAIADgBIABgBIABAAIAAAAIABgBIACgBIAAAAIABgCIAAAAIABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAEgGIABAAIgCACIgCADIAAAAIAAABIABgCIgBABIAIgHIADgGIABgBIACgDIABgBIAAAAIAAAAIABAAIAAABIgDAFIADgCIABgDIAAACIABAAIAAABIAAgBIAAAAIAAABIABgEIAAACIABAAIAAABIAAgBQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgBADIAAAAIABgBIABgDIABAAIAAAAIgCAFIgCAEIAAAAIAAACIADgGIABgBIAAABIgDAFIgBABIAAABIAAAAIAAABIgDACIgCADIAAAAIABAAIAAAAIABgBIAFgHIgBAAIACgCIgBADIAAAAIgCAEIgEAHIgHAHIgKAJIgDABIgBAAgAgPAHIAAAAIgBABIADgBIACgBIAAAAIgBAAIgDABg");
	this.shape_38.setTransform(447.35,250.5167);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#996633").s().p("AgDAIIAAgBIAAgBIAAgBIgBgCIAAgHIABAAIAAAAIgBgBIAAAAIABAAIgBgBIAAgCIABgBIAAAAIAAABIABABIAAABIAAgBIABABIAAAAIABgBIAAACIABgBIAAABIgBAAIABABIABAAIABgBIACgBIAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAAAgBIgBAAIAAABIACAAIABAAIABAAIgBABIAAABIAAAAIgBABIABAAIAAAAIAAAAIAAABIABAAIgBAAIgBABIgBABIABAAIAAAAIABAAIgBABIgBABIAAgBIgBABIAAABQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIgBACIgBACIgDABIAAAAIgBgCgAgDgGIABAAIgBAAg");
	this.shape_39.setTransform(445.075,252.205);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#996633").s().p("AgDAIIAAgBIAAgBIAAgBIgBgCIAAgHIABAAIAAAAIgBgBIAAAAIABAAIgBgBIAAgCIABgBIAAAAIAAABIABABIAAABIAAgBIABABIAAAAIABgBIAAACIABgBIAAABIgBAAIABABIABAAIABgBIACgBIAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAAAgBIgBAAIAAABIACAAIABAAIABAAIgBABIAAABIAAAAIgBABIABAAIAAAAIAAAAIAAABIABAAIgBAAIgBABIgBABIABAAIAAAAIABAAIgBABIgBABIAAgBIgBABIAAABQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIgBACIgBACIgDABIAAAAIgBgCgAgDgGIABAAIgBAAg");
	this.shape_40.setTransform(445.075,252.205);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#996633").s().p("AgOAIIAAgBIAAAAIgBgCIgBgCIAAAAIgBgBIAAgBIABgBIAAAAIgBgBIABAAIgBAAIAAgBIgBgBIAAgBIABAAIACAAIAAAAIgBAAIgBAAIAAgBIAAABIAAAAIgBgBIAAgBIABAAIAAAAIAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIACgBIAAAAIAAAAIABABIAEABIAAABIAAgBIABABIAAgBIACABIACAAIgBAAIABgBQABAAABAAQAAABABAAQAAAAAAAAQAAAAABABIAEgBIAAABIgDAAIADABIAGAAIAKgCIAAAAIAAABQgJACgDgBIgCAAIAAABIAFAAIADAAIAFAAIgDABIAAAAIgBABIACAAIAAAAIgGAAIAAABIACAAIgBAAIADAAIgCAAIAFAAIAAAAIAAAAIAAAAIgEAAIAEABIABAAIgBAAIgGABIgCABIABAAIAFAAIgFABIgBABIgCgBIAAAAIgDABIAAABIABAAIAIgCIgEADIgHACIgFAAIgJABIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBgAgKgFIgBgBIgDAAIAAAAIAAAAIABAAIACABIABAAg");
	this.shape_41.setTransform(442.65,252.2143);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#996633").s().p("AAHAQIAAAAIgBAAIAAAAIgDgCIAAgBIgDAAIAAAAIABABIAJADIgGAAIgEgBIgLgHIgJgIQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAABgBIACAAIgBAAIAAAAIAAgEIAAgCIAAAAIABgBIABgBIACgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAgBIABAAIAAAAIAAABIABABIAAAAIABAAIgBgCIAAAAIAAABIABAAIAAABIAAAAIABABIgBgCIAAAAIgBgBIAAAAIAAAAIAAAAIgBAAIABgBIAAgBIABABIABgCIACAAIAAABIABABIAAACIABABIAAAAIACADIAAABIAAgBIACAEIABAAIABABIAAgBIABABIABADIAGADIAAAAIgDgBIgCgBIAFAEIAFADIAEABIAEABIADACIABABIgBAAIgOgGIgCgBIAAAAIABABIAFACIADADIAFACIgEgBIAAABIAAAAIABABIgBAAIgEgCIAFADIAAAAIABABIgBAAIgDgBIADACIAAAAIgIgDIgCAAIAHADIgHgCIAHACIAAABgAACABIgCgBIAAgBgAgKgLIABABIABABIgCgDIgBAAgAARAPIAAAAIABAAIAAAAg");
	this.shape_42.setTransform(438.7333,250.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#996633").s().p("AAKAQIAAgBIgCgEIABAEIAAABIAAAAIgBAAIgBgDIABAEIAAAAIgBAAIgCgGIgCgBIAAAAIADAGIgDgFIACAEIAAABIAAAAIgDgFIAAAAIgBAAIAAgCIgBAAIAAAAIAAAAIAAAAIABACIACADIAAAAIgFgEIABABIgCgBIgLgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIACgBIAAgBIAAgBIAAAAIABgCIAAgBIAAgBIABAAIABAAIABgCIABAAIAAgCIAAAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAAAIAAAAIAAgBIgBAAIAAgBIAAAAIAAABIgBgBIABgBIAAAAIABAAIAAAAIABgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIABACIAAABIAAACIAAABIAAAAIAAAAIACACIABABIAAgBIAAABIABADIAEAEIAAAAIgDgCIACACIAAAAIAAABIABAAIAAABIAFAHIACAGIAAAAIAAAAIgGgMIgBgBIAAgBIgBAAIAAABIABACQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIABADIACADIgBABIgBgDIgBAAIAAAAIAAABIgDgEIAAAAIAEAIgAgBgKIAAABIAAgBIgBgCIAAgBIABADg");
	this.shape_43.setTransform(439.8375,251.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#996633").s().p("AAIAPIgBgCIgCgDIAAABIABACIABAAIgBAAIAAABIgBgBIgBgBIABACIAAABIAAAAIgDgFIgCgBIAAABIABABIgBgBIABACIACACIgBAAIgCgEIgBgCIgBgBIgBAAIAAAAIAAABIADAFIgDgCIgDgFIgDgFIgCgGQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIABABIAAgBIABgBIACgBIABgBIAAAAIABAAIACAAIABgBIABAAIAAABIAAgBIAAAAIAAgBIABAAIAAAAIAAAAIAAACIABAAIAAAAIAAAAIABgBIgBAAIAAgBIAAAAIAAAAIABAAIABAAIAAAAIACAAIABAAIAAABIgBAAIABAAIgBACIgBAAIAAACIAAADIABABIAAAAIgBADIACADIgCgCIAAAAIABACIAAAAIABACIAFAIIAAAAIAAAAIgGgIIAAgBIgBAAIABACIABADIABACIACACIgBAAIgBgBIgBAAIAAAAIAAABIgBgCIgBgCIgBABIAEAGgAAEgIIAAgCIAAgBgAABgKIAAABIABgBgAADgMIAAAAIgBAAgAADAOIgBgCIACACg");
	this.shape_44.setTransform(439.0583,249.6917);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#996633").s().p("AgBASIgCgBIgCgCIgBAAIAAgBIAAAAIgBAAIgBgBIgBgEIgDgDIgFgIIAAgDIACAAIAAAAIAAgBIAAgBIAAAAIACgDIAAAAIAAgBIABAAIAAgBIABAAIABAAIABgBIAAAAIAAgBIABAAIAAgBIABAAIAAAAIAAABIABAAIAAABIAAAAIABAAIAAABIAAgBIAAgBIAAAAIgBgBIABAAIABABIgBgBIAAAAIABgBIABgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAAACIAAABIAAAAIAAADIABABIAAABIAAADIABABIAAAAIABAAIAAADIABACIAAABIABABIAAAAIABABIgBAAIAAAAIgBgBIAAgBIAAABIAAABIABABIAAAAIAAAAIAFABIADADIAFAAIgEAAIAAABIAAAAIABABIAAAAIgDgBIgEAAIABAAIAAAAIAKACIgDAAIAAAAIAAABIgBAAIgCgBIgBAAIAEABIAAABIAAAAIgHgBIgDAAIAAAAIAIABIAAAAIgEAAIgDAAIAGABIgHAAIgDgBIgCAAIAAAAIAAAAIAAABIAJAAIAAABIgGABgAgCgKIAAABIAAAAIgBgDIAAAAIAAgBIABADgAgGgOIAAgBIAAABg");
	this.shape_45.setTransform(437.9625,249.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#996633").s().p("AgLAZIgBAAIAAABIgBgBIAAgFIAAAHIgBgBIgCgQIAAAAIABAKIgCgIIABAKIAAAAQgBgFAAgFIgBAAIAAgCIACgFIAAAAIAAgBIABgBIABgDIAAAAIAAAAIgDADIAAABIAAAAIgBAIIABAGIAAAAIgBAAIgBgEIgBgGIABgFIABgBIAEgIIAAgBIAAgBIABgBIACgGIAFgHIAEgDIAEgCIgBAAIAFgCIADAAQAFgBABADIgBABIAAAAIAAAAIABAAIACABIABABIACADIAAABIABABIAAAAIgCABIAAACIAAABIAAAAIABAAIAAABIgBABIABAAIAAAAIgBABIgBgBIAAAAIgBgBIgCAAIACABIABAAIAAABIgCAAIABABIAAAAIAAAAIAAABIAAABIgBAAIgBAAIAAAAIgBgBIgCAAIAAgBIgDAAIgCAAIAAgBIAAAAIAAABIgCAAIAAABIgBABIABAAIgBABIgDACIgBACIAAABIAAABIAAABIAAAAIAAABIgDAFIgBAAIADgFIAAAAIAAgBIABAAIAAgBIgBABIgBABIgCADIgBACIgDAEIABgBIAAADIAAAGIACAKIAAABIgBAAIgCgLIAAgFIAAgEIAAABIAAgBIAAAAIACgCIgBgBIgBADIgBACIAAAJIABAHIAAAAIgCgFIAAABIgBgBIAAACIAAgBIABAIgAANgMIAAAAIABAAIgBAAIgBAAg");
	this.shape_46.setTransform(438.125,247.2107);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#996633").s().p("AgDAIIAAgCIAAgBIAAAAIgBgCIAAgHIABAAIAAgBIgBAAIAAgBIAAAAIABgBIAAAAIABABIgBgBIAAgBIAAAAIAAAAIABABIAAAAIAAAAIABABIAAgBIABAAIAAABIABAAIAAAAIgBABIABAAIABAAIABgBIACgBIAAABQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIgBAAIAAAAIACAAIABABIABgBIgBABIAAABIAAABIgBAAIABAAIAAABIAAAAIAAAAIABAAIgBABIgBAAIgBACIABgBIAAABIABgBIgBACIgBAAIAAAAIgBABIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIgBACIgBACIgDABIAAAAIgBgBg");
	this.shape_47.setTransform(436.225,248.38);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#996633").s().p("AgoAbIgBAAIgBgEIABgCIACgDIgBABIAGgFIACgCIACAAIgCAAIgCACIgHAEIgCAEIAAACIAAACIgBgDIABgCIgBAAIAAgBIAAABIAAAAIgBABIAAgBIADgFIAAAAIgBAAIgDAHIAAAAIgBABIAAABIAAgBIAAgBIABgDIACgEIAAgBIgDAFIgBAGIAAgGIADgGIAAAAIAAAAIgDAGIABgDIACgDIAIgJIgJAIIAKgKIABAAIABgBIABAAIAAAAIABAAIAAgBIAAAAIAEgBIABgBIAFgDIAAAAIgBAAIAAAAIgIAEIgCAAIgBABIgBABIgBABIgJAIIAAAAIAEgGIADgDIACgBIABgBIABAAIAZgPIgBAAIAJgGIAKgDIAKgDIAMAAIAAABIADAAIACACQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIABABIADAAIABABIAEACIAAAAIABABIAAAAIgBACIAAABIAAABIAAAAIAAAAIAAABIACAAIACAAIAAABIAAAAIABAAIAAABIAAAAIgBAAIgBAAIgCAAIAAAAIACAAIAAAAIAAABIAAAAIgBAAIgBABIABAAIgBAAIABAAIAAAAIACAAIAAABIABAAIAAAAIgBABIAAAAQgDACgEgBIAAAAIgCAAIABAAIgGgCIgCAAIgBAAIgBAAIgCgBIgCAAIgBAAIgCAAIgBgBIAAABIgIAAIAAABIgCAAIgCABIABAAIgDABIgHACIgDACIAAAAIgMAHIgBAAIAAgBIAMgGIgKAFIgCAAIgNAIIgBAAIgBABIgIAGIgBACIAAAAIgBACIAAABIAAACIAAABIAAABgAAjgJIABAAIgCAAIgCgBIgBAAgAAsgKIABAAIAAAAIAAgBgAAngLIAEABIAAAAIgCgBIgDAAgAApgLIAEAAIgCAAIgCAAg");
	this.shape_48.setTransform(438.4167,246.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#996633").s().p("Ag2AmIgCgBIABgCIgDAAIAAAAIgDgDIgBgBIAAAAIAAgBIAAgBIAAgBIAAAAIgBAAIgBgBIAAgBIgBAAIAAAAIAAAAIAAgBIABABIABAAIAAgBIACAAIAAgBIgBAAIgBAAIAAAAIAAAAIAAABIAAAAIgBAAIAAAAIgBAAIAAgBIABgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBABAAIABgBIABAAIABAAIAAgBIABABIABAAIABAAIAAAAIAFAAIAAgBIAEAAIABgBIAAAAIABgBIAEgBIAHgFIAAABIgFAEIAFgDIABgBIAFgDIAAAAIgBAAIAAgQIADgBIAFgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAACIABAAIAAAAIADABIACAAIABAAIAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIABgBIAEAAIAFAAIAAAAIACAAIgCAAIAIABIABAAIABAAIAHAAIgCgCIgCgBIgDgEIgDgDIgDgFIADgEIAAgBIgBAAIAAAAIgBgBIAAAAIAAAAIADgHIAOAAIACABIAUAAIAggDIgFALIAAACIAAADIABABIACADIAAABQAAAAAAAAQAAABAAAAQAAAAgBgBQAAAAAAAAIgCgEIgBAAIgBgEIAFgMIgJABQgOACgRAAIgGgBIAAABIAGAAIAfgBIAHgBIgDAHQgCADACAFIAAABIABACIAAAAIgCgGIgBgCIAAAAIgBgBIAAACIAAABIABAEIgBAAIAAAAIgBgGIADgHIgDABIACAAIgBACIAAACIAAABIgBABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIABACIAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBgBIAAgBIgBgFIAAgCIgCAAIAAgBIAAAAIgBAAIAAABIgMABIAAAAIgDABIgUAAIgCABIAGAAQAOAAARgCIAAAAIgSADIgPACIAFADIAFAHIACADIACAOIgaADQgIABgBgCQgBAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAIgDAAIgEAAIgHgEIABAAIgBAAIgCgBIACgCIAAgBIABAAIgBAAIgDAAIgBAAIAAAAIAAAAIgBAAIgCABIAAAAIgBAAIgBAAIABABIAAAAIAAABIAAAAIABACIAAAAIAAgBIABABIAAADIABgEIAAAEIAAABIgEADIgCAEIAAAAIAHgHIAAgBIAAABIgGAGIAGgFIgFAGIAAAAIgBABIAAAAIgDACIgDACIABAAIgBABIABgBIAAAAIABgBIAIgHIABAAIgEAGIgFAFIgLAHQgFADgIADIgBABgAg8AWIACAAIACgBIAAAAIAAAAIgCAAIgBAAgAgYAHIABABIAAAAIAAgBIgBAAgAgXABIAAAAIAAAAgAgRgDIACAAIADABIACAAIAAgBIAEAAIgBAAIgGAAIAAAAIgBAAIAAAAIAAAAIgDAAgAgEgEIANgBIgBAAIgJAAIgDABgAgFgVIABACIgBgCgAAkgZIABAAIAPgBIAAgBgAA1gbIAAABIAAAAIAAAAIABgBgAA3gaIABAAIAAgBIAAAAgAgDgaIAAAAIAAgBgAA1geIABAAIAAgBgAgRAIIAAABIAAAAgAA1gYIAAAAIAAACIAAgCg");
	this.shape_49.setTransform(333.3438,189.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#996633").s().p("AgWAeIAAAAIADgGIAHgFIAAgBIgBAAIAAABIgGADIgEAFIADgEIgBAAIAAgBIgBABIAAgBIgBACIgBAAIAAgBIgBABIAAgBIAEgEIgGAEIAAAAIAKgKIgBAAIADgCIgBAAIgCABIAAAAIgGAHIAFgHIAAAAIABgCIAEgEIABAAIACgEIgBAAIABAAIgBAAIgBACIgGAHIgDADIACgEIAAABIACgEIAXgfQAAgBAAgBQABAAAAgBQABAAAAAAQABAAAAAAIABACIABgBIACgBIAAgBIADgBIAAAAIABAAIABAAIABACIAAAAIACAAIAAABIABAAIAAgBIABgBIABABIAAgBIABAAIAAABIgBAAIAAABIAAABIgBABIAAAAIAAAAIABgBIAAAAIAAABIgBABIAAgBIgBACIAAAAIAAAAIABgBIABgBIABgBIAAgBIAAAAIAAgBIABABIAAABQAAAAABgBQAAAAAAAAQABAAAAABQAAAAAAABIAAABIgBABIgBABIgBABIABAAIgCADIgBAAIgBABIgFAEIgDAGIgBAAIgBADIgGADIgHAKIABgCIAEgGIgSAUIgGAIgAABAEIADgDIABgBgAARgOIABAAIAEgFIAAgCgAgWAOIAAAAIAAABgAAXgZIABgBIgBABg");
	this.shape_50.setTransform(329.75,185.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#996633").s().p("AgOAMIAAgBIAJgEIACgBIgBAAIAAAAIgEACIgDAAIgCABIAAAAIABgBIAAgCIAAABIgBgBIACAAIADgBIgBgBIAAAAIgCABIgCABIgBAAIAAgBIAAAAIACgBIAAAAIgDAAIAFgCIABgCIAAAAIgFADIAEgDIgDACIgBAAIAEgCIAAAAIAAgBIACAAIACgBIAAgBIgBAAIgFADIgBAAIADgDIAEgDIAFgCIAGgDQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIABAAIADADIAAABIABABIAAABIAAACIAAAAIABAAIABABIAAAAIAAAAIgBAAIAAABIgBAAIAAAAIAAAAIABABIAAgBIABAAIAAAAIAAAAIABAAIAAABIAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAgBIAAABIgCgBIAAAAIgBAAIgCAAIgBAAIgCAAIgBABIAAAAIgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgEACIAAgBIACgBIgCAAIAAABIgEABIgHAEgAAAAGIABgBIAAAAgAAJAEIADAAIAAAAIgCgBIgBAAgAgLAFIABAAIgDABgAgLAFg");
	this.shape_51.setTransform(322.5174,193.7583);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#996633").s().p("AguBNIgBgCIABgDIABgBIAAgBIAAgBIgDADIAAADIAAACIgBAAIAAgDIAAAAIgBgBIAAABIAAAAIAAgBIAAgBIABgDIgCAGIAAAAIgBABIAAgBIABgEIAAgBIgCAGIAAAAIgBAAIABgGIADgDIAAgCIAAgBIABgBIgBAAIgBACIAAgBQgCACgBAFIAAABIgBgBIAEgIIAAgBIAAAAIADgDIABgCIAAgBIgBACIgDAEIAAAAIgBAAIgCAGIABgFIAAgBIAAgBIABAAIAAAAIAFgJIABgBIABgBIAAgBIAAAAIABABIADABIgEgCIAAAAIAAgBIABgBIAAgBIADgKIABgCIABgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIACgCIADgBIAAAAIABgBIABAAIABABIACAAIAAABIAAgBIAAAAIAAgBIAAAAIABAAIABABIABgBIAAACIgBAAIAAABIAAAAIABABIgBAAIABAAIAAgCIAAAAIABAAIAAAAIgBgBIAAgBIABAAIAAAAIAAAAIAAAAIABAAIAAAAIABAAIgBABIAAABIABgCIABAAIABACIgBACIAAAAIgBADIAAABIgBAAIgCADIAAABIAAAAIAAABIgCAFIgBADIABgBIgBABQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgBACIAAAAIAAABIgBABIgBABIgDADIAAAAIADgEIgJAKIAAAAIgBABIAAAAIgBACIAAABIgBADIAAABgAgZAnIgBACIAAAAIABAAIABgEIAAgBIgBADgAgzBBIAAAAIgBADIABgDgAgXAaIABgCIgCABIAAgBIAAgCIAAAAIgBAAIgBgBIAAgBIAAABIAAABIgCACIgCAAIgBABIAAgBIgCACIAAAAIABgCIABgBIAAAAIACgCIABgBIACgDIABgBIAAgBIABgBIABgCIAAABIgBABIAAgCIAAABIgBABIAAAAIAAAAIgBABIgBACIAAAAIAAAAIAAAAIABgCIgBAAIgBACIgCADIgBABIgBABQAAABABAAIABgBIAAgBIAAABIgBABIgCABIgBAAIACgEQgFAFACgFIAHgIIABgBIABgBIAAgBIABgBIAFgLIgEALIAAgBQAEgKAHgKIADgGIABgBIAAAAIAAAAIAAgBIAAABIAAAAIgBAAIAAABIgCACIgBACIgFAIIABgCIAHgLQgJANgFAMIgBABIAAgBQAEgJAKgQIAAgBIABAAIABgCIAJgKIACgDIAIgIIgBAAIABgBIgCACIAAAAIgCACIgCACIgOAQIgEAGIgGAMIgBAAIAHgPIABgBIAAAAIABgBIAAAAIACgDIACgDIALgNIANgMIAOgJIAagOIgUAkIgGAJQgLARgTAVQgFAIgDAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAgBIgBABIgBACIgEADIgIAGIgBACQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAgAgUADIABgBIAAAAIAGgLIgHAMgAgCgQIgDAEIABAAIABgCIABgBIAAgBgAgaAPIACgBIAAAAIgBABIABgBIgCACg");
	this.shape_52.setTransform(322.325,195.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#996633").s().p("AgBASQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAAAIgBAAIgBAAIgDgBIgBAAIAAAAIgBgCIAAAAIgBgBIAAAAIgBAAIAAAAIgBAAIgBAAIAAgBIAAAAIAAAAIAAgBIABAAIAAAAIAAgBIABAAIAAgBIgCABIAAAAIAAAAIAAABIAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgBAAIABgBIgBAAIgBgBQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAAAAIAAgBIAAAAIACAAIABgBIACgBIABAAIADgDIAAAAIABgBIgBAAIABAAIADgBIADgFIABAAIgCAEIACgCIABgBIAJgNIABAAIAAABIgIAKIgBABIAAABIAAAAIAEgFIADgCIADgDIgCADIABAAIAAAAIABAAIAAAAIADgDIgCACIAAABIgDAEIADgEIAAAAIABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgCACIAAAAIADgCIAAAAIgEAFIgBADIABAAIADgGIABAAIgEAFIAEgEQgBACgCADIAAAAIAAABIgCABIgBABIgBABIABAAIAAAAIgBABIABgBIAAAAIABgBIAEgGIgBAGIgDAFIgFAFIgGAHIgBACIgBgBgAgLAGIgBABIAAABIACgCIABAAIAAgBg");
	this.shape_53.setTransform(326.925,192.7571);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#996633").s().p("AAGAKIAAABIAAgCIAAAAIgCgCIAAAAIAAAAIgCgBIgBAAIABAAIgBAAIgBgCIgDgBIAAAAIADAAIgCgBIAAAAIgDgBIgDAAIgDgBIAAAAIAAAAIAIABIABAAIgBgBIgDAAIgBgBIgDAAIACAAIAAgBIABAAIgBgBIABAAIABABIACAAIAAgBIgBAAIgBAAIABAAIgDAAIAAAAIAAgBIAAAAIACABIgCgBIAAgBIABAAIABABIAAAAIAAgBIgCgBIABAAIADABIACgBIgEAAIACAAIACgBIgEAAIAAAAIAEAAIAAgBIAAAAIACABIAAAAIAAAAIABAAIgBgBIAAAAIgEAAIAEgCIADAAIADABIAGABIAAACIgBACIABAAIAAAEIgBAAIAAACIgBAAIAAABIAAABIAAAAIAAABIAAABIAAABIgBAAIAAgBIAAAAIAAAAIgBAAIAAAAIABABIAAAAIAAAAIAAABIgBABIAAACIgBAAIgBgBgAAFAHIABABIABgBIgBAAIgBgBg");
	this.shape_54.setTransform(321.825,201.8833);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#996633").s().p("Ai8AvIAwgKIACAAIABgBIAcgDIgeACIgBABIgBAAIglAGIgBABIAAgBIAYgEIgCgBIACgBIgHACIABgBIAJgCIAAAAIAKgCIACAAIABAAIAAgBIgBAAIgCABIgFAAIgYAFIgBAAIAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIAegGIggAGIgCAAIACgBIAjgHIACAAIABgBIABAAIASgBIARgCQgOAAgQACIgEABIgCAAIgBAAIACAAIAEgBIAEgBIgJACIgCAAIgBAAIgQADIABgBIARgDIAAAAIAAAAIADAAIACgBIAYgDIABAAIAGgBIAPABIADAAIACAAIADABIAFAAIAJABIAIAAIABgBIgUgCIgJAAIgRAAQgPABgTADIgBAAIAUgEQANgCAJAAIApABIALgCIAEgCIAAgBIAAAAIAGgGIAEgHIABgBIABgBIAAgBIABgBIACgCIAJgKIAIgEIgBAAIAKgCIAJAAIAEAAIAAAAIAEAAIAHABIAHAAIAIgBIAEgCIACgBIABAAIABgBIAAAAIABAAIABgBIACgBIAPgIIAAAAIABAAIAIgDQAFgCAJgBIAFAAIADAAIgBACIgFABIADAAIACAAIACgBIAJABIAQADIAEABIAAAAIgEABIAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAgCABIgBAAIABAAIACAAIAEABIAEAAIAAgMIAAgBIABADIAAABIABgBIACACIACgBIAAgCIABgCIAAgBIAAgBIABAAIABABIAAAAIABABIAAAAIABAAIAAAAIACgBIAAAAIABgBIAAAAIABgBIABAAIABAAIAAAAIAAgBIABAAIABgCIAAABIABABIAAAAIAAAAIAAAAIAAgBIAAAAIAAABIABABIAAgCIgBAAIAAgBIAAAAIAAAAIABAAIAAgBIAAAAIACgBIABAAIABACIAAADIgBABIAAABIAAACIgBABIABAAIAAABIAAAAIABABIAAgBIABABIAAgBIADABIACAAIgBAAIACgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAHgBIAAABIgFAAIAEABIAHAAIALgCIABAAIgBABQgKABgEAAIgCAAIAAABIAHAAIAEAAIAEAAIgDAAIAAABIAAAAIAAAAIABABIgBAAIgCAAIgBAAIAFAAIAAABIAAAAIAAABIgDAAIAEABIAAAAIgIABIgCABIAAAAIAIgBIgEABIgDAAIAGAAIAAAAIgGABIgBAAIgCAAIgBAAIgCABIgBAAIACAAIAJgBIgGACIgHACIgHABIgKABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBIABgCIgBAAIgBgBIgCgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAACIgBAAIAAAAIAAAAIABgCIAAAAIgCABIAAACIAAAAIAAABIAAABIAAABIAAgBIgBAAIAAABIABAAIAAABIAAABIAAAAIAAACIgBABIgBgCIAAAAIAAgBIgBgBIAAABIAAgBIgBABIAAgBIgBAAIgEACIAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAgBgBAAIAAABIgBgBIAAAAIgDABIAAgCIgBAAIgCAAIgCAAIghAAIgFAAIgRAEIABAAIgCABIgHADIACgBIgFACIABAAIgHAEIAAABIgBAAIAAAAIgBAAIgCABIAAAAIgBAAIgCABQgIADgJABIgBAAIgDAAIgQgBIgBAAIgBgBIgNABIgBABIgDAAIgGAFIgCAEIgBACIgBABIgBABIgGAIIgIAJIAAgBIgJAGIgFABIgFABIgCAAIACAAQAHgBACgCIAKgFIAFgFIAHgKIgIAKIgFAFIAAAAQgFADgHACIgFACIgEAAIgtgCIgSABIgTACIgBABIgCAAIg1AKIAEgBgABegWIgKABIgKAEIABAAIALgEIAKAAIAFgBgACTgVIAAgBIgBAAIAAAAgACCgWIACAAIABABIAAgBIgCAAIgBAAgABQgXIgCABIAXgCIgDgBIgCAAgACNgXIAAAAIABAAIAAAAIABAAIgBAAgAB6gYIADAAIABAAIAEAAIADAAIAAAAIgBAAIgFAAIgCgBIAAABIgGgBIAAAAgABsgYIAOAAIgDAAIgFAAIgBgBgACMgiIgBABIABAAIAAgBIAAgBIABAAIAAAAIABgBIgBAAIAAAAIgBABIAAAAgACKgiIABAAIAAAAgACcgjIABABIAAAAIAAgBIgBAAgACcgqIAAADIAAgCIAAgBIgBgBgAisAmIAAAAIAAABgAijAhIAWgEIAAAAIgVAEIgBABQgBgBABAAgACZgsIAAgBIAAAAIAAABgACZgtg");
	this.shape_55.setTransform(344.6722,187.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#996633").s().p("AgbAMQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIgCAAIgCgBIgDgDIAAAAIgBgBIAAgBIABgBIAAAAIAAgCIAAAAIAAAAIgBgBIgBAAIAAAAIgBAAIAAgBIABAAIABAAIACAAIAAABIABgBIACAAIAAAAIgCgBIgDAAIAAAAIAAAAIAAABIgBgBIAAgBIABAAQgBAAAAgBQAAAAgBAAQAAAAABgBQAAAAAAAAIACgBIADAAIADABIABAAIABABIAEABIAJAAIACgBIgBAAIACAAQAFAAABABIALgCIgIACIACAAIgEAAIABAAIADAAIABAAIAEgBIABAAIABAAIANgDIAJgEIACAAIADgBIABAAIgBAAQgPAGgIACIgCAAIgBABIASgEIADgBIAEgBIAAAAIgFACIABABIgBAAIABAAIgKADIABABIABgBIAGgCIgEACIAIgCIABgBIAAAAIAAABIABAAIgBABIgEABIgBAAIAHgBIAAAAIAAAAIgMAEIgEABIAAAAIAHgBIgFABIAKgCIAAAAIAAAAIgKADIAAAAIgBABIgFAAIgFACIAAABIABAAIACgBIAOgEIgCABIgCABIgEACIgMAEIgMADIgTABQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAgAgbgDIABAAIACABIACAAIAAgBIgEAAIAAAAIgBAAgAAigFIAAAAIAAAAg");
	this.shape_56.setTransform(356.025,184.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#996633").s().p("AgzAXIABgCIgBAAIgBAAIgCAAIgBAAIgEgCIAAgBIgBAAIAAgBIAAgBIAAgBIAAgBIAAAAIAAAAIAAgBIgCABIgBgBIAAgBIgBAAIAAAAIAAAAIABgBIAAABIABAAIgBgBIABAAIgCAAIAAgBIACgBIAAAAQgFAAADgCQACgBADAAIACAAIgBgBIACAAIACABIABAAIABAAIAAAAIAJgBIgBAAIAIgCIAEgBIgCAAIADgBIAEgBIADABIAOgFIAAAAIAAAAIgKAEIAJgCIABgBIABAAIAJgEIAAAAIgJACIgBgBIABAAQAHgCADAAIABAAIgDAAIgDgBIgEABIADgBIgBgBIABAAIgBAAIAAgBIAGAAIgBgBIAAAAIgCABIABAAIgDAAIACAAIgEAAIAAgBIgBAAIABgBIADAAIgEAAIAAAAIAAgBIAHAAIABgCIAAAAIgGACIAGgCIgFABIgBAAIAGgCIAAAAIACAAIAAAAIACgBIABAAIgCAAIgGABIgBAAIAEgCIAGgCIAHgBIAJAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIgBACIABAAIAAAAIABAAIACAAIgCABIAAAAIACACIAAABIAAABIABAAIgBAAIAAAAIAAABIAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAABIAAAAIABAAIAAABIAAACIAAgBIgCAAIgBABIABAAIABAAIAAAAIABAAIAAAAIAAABIgBAAIAAABIABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAgBAAAAIgBAAIABABIgCgCIgBAAIgCgBIgBAAIAAAAIgDgBIgGAEIgBABIgCABIAAAAIgBAAIgBAAIgKAFIAAABIABAAIAAAAIAQgIIACgCIAAAAIgFAEIgCABIgCACQgGAFgHACIgQAHIgWAGIgEABgAg+ALIAAAAIADAAIAAAAIABAAIACgBIAAAAIgEAAIgBABIAAgBIAAAAIAAAAIAAAAgAg2AHIgBAAIAFAAIADAAIgEAAgAAJgEIgDADIAEgCIADgCIAAAAIgBAAIgDABgAAKgDIAAABIAEgDIgBAAIAAAAgAAVgGIADABIAAAAIgCgBIgBAAIAAAAgAAPgFIAAAAIABgBgAA7gBIACgDIgCAAIgVABQgBAAgBAAQAAABgBgBQAAAAAAAAQgBgBAAAAIABgCIgBAAIgDgDIAAgBIgBgBIAAAAIABgBIAAgCIAAgBIgBAAIAAAAIgBAAIAAgBIAAgBIAAAAIAAgBIAAABIADAAIABgBIAAAAIgCAAIAAAAIgBAAIAAAAIAAAAIgBAAIAAAAIABgBIAAAAIAAAAIABAAIgBAAIAAgBIAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAABIABAAIACABIAAAAIAEABIABAAIAAAAIABAAIAAAAIAEABIACgBIgBAAIACAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAIAIAAIABAAIgBAAIgGABIAFAAIACAAIABgBIACgBIAAABIAAABIABAAIAAAAIAAAAIAAABIAAAAIAAgBIgBAAIAAABIABAAIABAJIAAABIAAAAIgBAAIgBABIgBABIgBAAIAAAAIgCAFIgBAAgAA9gHIAAAAIABAAIABAAIACgBIAAAAIAAAAIgBAAgAA4gSIgDAAIgBAAgAAlgTIACAAIAAAAIgBAAIgDgBIAAAAIAAAAIAAAAIACABg");
	this.shape_57.setTransform(349.94,184.83);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#996633").s().p("AgIALIgQgCQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIABgBIgBAAIAAgBIgCAAIAAgBIgCgDIAAAAIgBgBIABgBIAAgCIAAAAIAAAAIgBAAIgBgBIAAgBIAAAAIAAgBIAAAAIABABIAAAAIABAAIAAgBIABABIADAAIAAgBIgDAAIAAAAIgBAAIgBAAIAAAAIAAgBIAAAAIABAAIABAAIgBgBIAAAAIAAAAQgBAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABIABAAIgBAAIADABIABAAIAAABIAFABIABABIAAgBIABABIgBgBIAGACIADAAIgBgBIACABQADAAACACIAKABIAAAAIgHAAIAFABIACAAIAaACIABAAIgBABIgWgCIgCAAIgBAAIALABIAFACIAHAAIgFAAIAAABIAAAAIABABIAAAAIAAAAIAHABIgFAAIAAAAIgJgBIAIABIABAAIAAABIgBAAIgEAAIgBAAIAHABIgMgBIgDABIAAAAIAMABIgLAAIAJAAIABAAIgBABIgJgBIAAABIgBAAIgEgBIgFAAIAAAAIABABIAPAAIgJACgAgagHIAEABIACAAIAAAAIgFgBIAAAAIgBAAgAgfgGIABAAIgBgBg");
	this.shape_58.setTransform(347.975,183.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#996633").s().p("AgWAbIABgCIgBABIgBAAIgCAAIgFAAIAAAAIgCAAIAAgDIgBgBIAAAAIAAgBIAAAAIAAABIgCAAIgBAAIAAAAIgBAAIAAgBIABAAIABgBIAAAAIACgBIABAAIAAgBIABgBIABAAIgBAAIgDABIAAAAIgBAAIAAABIgBABIgCAAIAAAAIABgCIgCAAIAAgBIACgCIADgBIgBAAIABgBIAEgBIABAAIABgBIAGgBIABgBIABAAIAAgBIAHgDIABAAIACgCIABAAIAAAAIAAgBQAFgCACABIAMgHIAAAAIAAABIgJAFIAPgIIADgBIABgBIABAAIAQgRIgBABQgCAFgGAGIgFAEIgCABIgBABIAAAAIABAAIAAAAIAKgHIAFgGIABgBIAAABIgEAEIABAAIAAABIABgBIAAAAIAAABIgGAGIAIgHIABgBIAAAAIABAAIgBABIgEAEIAGgFQgFAIgGADIgDAEIAAAAIAHgFIgFAEQAFgDAEgFIABgBIAAABQgEAFgFAEIAAAAIgBABIgBAAIgFADIgBAAIgEADIAAAAIgBABIACgBIAAAAIACgBIAEgCIABAAIABAAIAAgBIABgBIABAAIAHgHIAAAAIgEAFIgBACIgDACIAAAAIgBAAIAAAAIAAAAIgBABIgBABIgDACIgVAOIgBAAIAAAAIgBAAIgBABIgOAHIgEACIgBgBgAgXALIgGACIgBABIAFgCIACgBIABAAIgBAAg");
	this.shape_59.setTransform(348.0875,186.94);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#996633").s().p("AgHAIIABgBIgBAAIAAgBIAAgBIgBgCIAAgEIgBgBIAAgCIABAAIABAAIgBgBIAAAAIgBAAIAAgBIABAAIAAAAIgBgCIABgBIABAAIAAABIABAAIAAAAIABABIAAABIAAgBIABABIAAgBIABABIABgBIACACIACgBIAAABIgCAAIACABIADAAIACgBIADgBIAAABQgEACgDgBIAAAAIgBABIAEAAIABAAIACAAIgBABIAAABIAAAAIgDAAIAAABIABAAIAAAAIADAAIAAAAIgCAAIACABIAAAAIAAAAIgDABIgBABIAAAAIAAAAIADAAIgDABIAAABIgBgBIgBAAIgBABIAAABIABAAIAEgCIgDADIgDACIgHABIAAAAIgBgCgAgGgGIABABIAAgBIgCAAIABAAg");
	this.shape_60.setTransform(345.475,188.481);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#996633").s().p("AgyAbIgEgCIgCgCIgBgBIgBgBIgBgCIABACQgDgEAAgEIAAgBIAAgDIAAgIIABAAIAAgGIAGAAIACAAIAAAAIABAAIAAAAIAKAAIAEgBIgCAAIADAAQAGAAACABIASgBIABABIgOABIAaAAIABAAIABgBIgCABIAEgCIAAAAIAEgCIAHgFIABgBIABAAIAAgBIAAAAIABAAIAEgDIACAAIgBABIgDACIgCABIAAAAIgBABIgLAHIgBABIgBAAIgBAAIAAABIABAAIAMgGIABgBIABgBIAAABIAAAAIgDACIABAAIgBABIACgBIAAAAIAAAAIADgBIAAAAIAAAAIgDACIAAgBIgDACIADgBIgDACIgGADIALgGIABgBIAAABIABgBIgBACIgFADIAIgEIAAAAIAAAAIgBABIgBAAIgFAEIgIAEIgCABIAAAAIgBAAIgCACIACgBIABAAIAAAAIAAAAIABAAIAAAAIABgBIABAAIAJgFIABAAIAAAAIgKAGIgBAAIgBAAIAAABIgBAAIgBAAIAAABIgBAAIgBAAIgBABIgGgBIgBABIgGAAIgBABIAFAAIAJgBIACAAIACgBIABAAIAHgEIAAAAIAAAAIgFADIgBABIAAAAIgBABIAAAAIgDABIgCABIgCAAIgQACIgSABIgPABIAAAEIAAAAIAAABIAAABIgCAAIAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAAAAIAAAAIAAAAIACADIAAABIABAAIAAABIgBAAIgBgBIAAAAIgBgBIgBAAIgCgCIAAAAIgBgBIAAAAIAAgBIgCgBIAAgBIgBAAIAEAFIAAAAIABABIAAAAIABAAIABABIAAABIAAAAIgBAAIAAAAIgBgBIgBAAIABABIgBgBIABABIAAABIACABIAAAAIAAAAIAAABIAAAAgAg7AMIABACIgBgCIAAgCIgBgBgAAEgDIABgBIgBAAgAALABIAEgBIgDABIgBAAgAAegGIABAAIAHgCIAAgBIgBAAIgFABIAEgBIgCgCIAFgBIgFABIgBAAIgBgBIAAgBIAAgBIgBgBIAAAAIgBAAIgBgBIgBAAIAAgBIABAAIAAAAIAAAAIABgBIABAAIAAAAIAAgBIAAAAIgBAAIgBAAIAAABIAAAAIAAAAIgBAAIAAgBIABAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIABgBIABAAIAAgBIADAAIABAAIADAAIABAAIAAgBIAAABIAAgBIAGgBIgBAAIACgBQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABABIAQAAIgIAKIgEAEIADgEIgDADIgBAAIAAAAIgBABIAAABIgCABIgGACIgCAAIgBABIgHABgAAggTIABABIABgBIABAAIAAgBgAAfgVIAAAAIADAAIABgBIAAAAIAAAAgAAxgYIABAAIAJABIABAAIgKgBIgCgBIgBAAg");
	this.shape_61.setTransform(336.2417,190.33);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#996633").s().p("AgSAIIABgBIgBAAIgCgCIgBgCIAAAAIgBgBIAAgBIAAgBIABAAIgBgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAIADAAIABAAIgCAAIAAAAIgBgBIAAAAIAAAAIgBAAIAAABIABAAIgBAAIAAAAIAAgBIAAgBIABAAIAAAAIAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIABAAIgBAAIACABIABAAIADABIABABIAAgBIABABIAAgBIAEABIABAAIAAAAIABgBQABAAABABQAAAAABAAQAAAAAAAAQABABAAAAIAGgBIABAAIAAABIgFAAIALABIAMgCIABAAIAAABQgLACgFgBIgCAAIAAABIAIAAIADAAIAFAAIgDABIAAAAIAAABIABAAIAAAAIgDABIgBAAIAFAAIAAAAIABAAIgBAAIgDAAIAEABIAAAAIAAAAIgIABIgDABIABAAIABAAIAGAAIAAAAIgGABIgBAAIAAABIgBAAIgCgBIgBAAIgDABIABAAIgBABIACAAQAFAAAEgCIgFADIgIACIgSABIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBgAgOgFIAAgBIgDAAIAAAAIgBAAIACAAIACABIAAAAg");
	this.shape_62.setTransform(329.275,192.305);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#996633").s().p("AhTA7IACgDQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIgBABIgBAAIgCABIgCABIgBAAIAAgBIgBABIgBAAIAAAAIAAgBIABAAIACgBIAAAAIAHgFIABgBIACgBIAAAAIABAAIACgCIACgBIgBAAIgIAEIgBABIAAAAIAAABIAAAAIgDACIgBABQgBABgBAAQgBAAAAABQAAAAgBAAQAAAAAAgBIAAAAIACgCIABgBQgFADACgDIADgEIAIgEIAAAAIADgDIgCACIAJgFIACAAIABgBIADgBIABAAIADgCIAEgBIADgCIABAAIAAAAIAHgCIgPAAIABgGQABgFADgEIADgEIABgBIABgBIABgBIABgBIAAAAIABgBIABAAIACgCIAKgEIACAAIAAAAIAegHIAAAAIgQAEIACAAIgCABIAEgBIABAAIgBABIgDAAIADAAIAAAAIAFgBIABAAIgOADIAEgBIgLACIgCABIgBAAIAAAAIgBAAIgFACIgIAFIACAAIAIgGIADAAIABgBIABAAIAJgCIgGABIAVgFIABAAIgBABIADgBIgDACIgOADIgDABIAWgFIABAAIgBABIgYAFIgCABIgDABQgDAAgFAEIgGAEIgDAFIADgEIABgBIAAAAIACgBIABgBIACgBQADgDAFgBIAAgBIABAAIAAABIgBAAQgHACgFAFQAFgEAHgDIABAAIABAAIACgBIALgDIABAAIAAAAIAAAAIgNAEIgBAAIgBAAIAAABIAAAAIgHADIgGAEIAAAAIgBABIgBACIgBABIABAAIABgBIABgCIAAAAIAAAAIABgBIACgBIAIgFIACAAIAAAAIAAAAIAAAAIgDABIgJAIIgBAAIAwgCIABATIgGABQgaAFgXAKIgEADIgCAAIgCABIgFABIADgDIgCABIgHADIgKADIAAgBIgBAAIgDABgAg1AhIgBABIgIAEIgCAAIgFACIgCACIAEgCIAOgGIAAAAIACgBgAggACIAAAAIACAAgAAGAPQgEAAgCgBIgDgCIgBgBIACAAIACAAIgDgCIgCgFIgBgCIACgCIABgCIAEgDIAAAAIABAAIACgBIAAADIABABIABAAIAAAAIACAAIABAAIABgBIgBAAIABgBIAAgBIAAAAIgBgBIAAAAIAAgBIAAAAIgBgBIAAAAIAAAAIAAgBIAAAAIgBAAIgBgCIAAgBIAAAAIABAAIAAAAIAAgBIgBAAIAAABIAAgBIAAAAIgBAAIAAgBIAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIABAAIAAAAIABAAIAAABIAAAAIACAAIAAAAIABgBIACgFIABAAIABgBIAAgBIAAAAIAEgDQAAgBABAAQAAAAAAAAQAAAAABAAQAAABAAAAIABACIAAAAIABgBIAAAAIAAgBIgCgBQAAgBABAAIgBgBIACABIAAAAIABAAIABAAIgBgBIACAAIAAgBIgBAAIAAAAIACAAIABgCIAAAAIAAAAIAAACIABgBIAAAAIABgCIAAgBIAAgCIABAAIAAAAIgBAEIAAABIABAAIAAgCIABAAIAAgBIABAAIAAABIAAAAIABAAIgBACIABAAIAAgBIAAAAIAAAAIABgCIAAAAIAAABIAAAAIABAAIAAABIABAAIAAAAIAAACIAAABIAAgCIABABIAAgBIAAAAIAAADIABAAIAAABIgBAAIAAABIAAAAIABAAIAAgDIAAAAIABADIAOgGIAAAAIABgBIABAAIgBABIgBAAIAAAAIgNAGIANgFIAAAAIABAAIACgBIAAAAIgDgCIgBgBIgBgCIgLgNIAUgBIABAAIAKgBIABAAIACAAIgBACIADAAIAAgBIABAAIAAABIgBABIABAAIALgKIABABIgLAKIABAAIAAAAIAAABIAIgGIADgEIAAABIgCADIABAAIgBABIACgCIABAAIAAAAIABABIAAAAIAAAAIABAAIABABIgBAAIABABIAAAAIAAAAIAAAAIgBABIgBAAIAAABIgCACIAEgDIABAAIgFADIAAABIAAAAIgGAFIAAAAIgBABIgBABIACgBIAAAAIADgDIABAAIgEAEQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAABIgBABIgBAAIgBABIAAAAIgCAAIgEAEIgRANIAAABIgDABIgKADIgDACIgCABIgFADQgDABgCADIABgBIgFAHIgGAIIgBAAIAAAAIgIAEIgEAAgAAHAFIAAAAIABAAIgBgBgAAGADIAAgBIAAAAIAAAAIAAAAgAAHgOIABAAIAAAAIAAgBIgBAAgAAZgWIAAAAIAAABIACgBIgBgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBAAIABAAIgBABIABAAIACABIAAAAIAAAAIABABIAAgBgABMghIgIAEIgBACIgGAEIAAAAIgCABIADgBIAAAAIADgCIANgKIAAAAgAAWgbIAAAAIABAAIAAAAIAAAAgABZgvIAAABIAAgBgABagyIAAAAIABgBgABZgzIgBABIABAAIABgBgABbg0IgBABIAAAAIABAAIAAAAIABgBgAgfAFIADgBIAPgEIAAAAIgQAFIgBAAgAAGgMIAAAAIAAAAg");
	this.shape_63.setTransform(321.0359,197.75);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#996633").s().p("AgOAkIgBgBIAAAAIgCgBIAAgBIAAABIgBABIAAAAIgBAAIAAABIgBAAIAAgBIAAAAIAAgCIABgBIAAAAIgBACIgBAAIAAAAIAAAAIAAgBIgBAAIAAAAIAAAAQgBABAAAAQAAABAAAAQgBAAAAgBQAAAAAAgBIAAgDIAAgBIAAABIACgCIAAgBIACgEIABgBIAAAAIAAAAIACgEIAAgBIAAgCIAAAAIAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIACgKIABAAIgCAHIACgFIAAgBIABgBIAIgVIABgBIAAABIgHATIgBABIAAAAIAAAAIABgBIADgGIACgFIADgFIAAAAIgBAEIAAAAIABAAIAAAAIgDAHIABAAIAAAAQACgIACgEIABAAIgCADIgBAAIgBAIIACgHIAAAAIABgBQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCADIAAACIADgFIAAgBIAAABIgDAJIAAADIAAAAIADgKIgDAJIADgHIAAgBIAAABIgCAHIAAABIgBADIAAACIAAAAIAAABIAAAAIAAAAIAAAAIAAgBIADgJIgCAOIgBAJIgDANQgBABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBgBIAAABIgCABIAAABIgDABIAAAAIgBABgAgUAgIABgBIAAgBgAgVAcIAAABIACgDIAAgCgAANgPIgCgBIAAAAIgBAAIgCAAIAAABIAAAAIAAgBIgBAAIAAgBIgBAAIAAAAIAAAAIgCgBIgBgBIAAgBIgBAAIAAABIAAAAIgBgBIgBAAIAAAAIAAAAIAAgBIABAAIAAAAIAAgBIAAAAIgBABIAAAAIAAAAIAAAAIAAAAIgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQABAAAAAAQAAAAABAAIAAAAIAAAAIABgBIABAAIABgBIAAAAIACgCIAAgCIAAABIAAgBIABgBIABgBIABgBIAAABIABgBIAKgBIgFABIAJACIACgDIADAAIgDADIACAAIgGAGIgDADIAAABIAAgBIABgCIgCABIAAABIAAAAIgCACIgBACIABgBIAFgDIAAABIgDAGIgCAAIAAAAgAANgWIgBACIAAABIABgCIABgBIAAAAgAAAgVIAAAAIAAAAgAAAgYIAAAAIABAAIABgBIgBAAg");
	this.shape_64.setTransform(316.7417,199.55);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#996633").s().p("AAPAJIAAAAIgDgBIgBgBIAAABIgEgBIgBAAIABAAIgCABQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAgBIgGABIAAgBIAEAAIgDgBIgGAAIgKACIAAAAIAAgBQAIgCAFABIABAAIAAgBIgGAAIgDAAIgEAAIADgBIAAAAIAAgBIgBAAIAAAAIAGAAIAAgBIgBAAIgCAAIgEAAIAAAAIAAgBIAAAAIADAAIgDAAIgBAAIABAAIAGgBIACgBIAAAAIgHABIADgBIADAAIgFAAIAFgBIAAAAIABgBIACABIABAAIACgBIAAgBIgCAAQgEAAgDACIAAAAIAEgDIAHgCIAFAAIAJgBIABAAIABACIAAABIAAAAIABABIAAABIACACIAAAAIAAABIAAABIAAAAIAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAAIAAAAIABABIAAABIAAABIAAAAIgCAAIgBAAIABABIABgBIAAAAIAAAAIAAABIAAAAIAAgBIABAAIAAABIAAABIgBAAIAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIABAAgAAMAHIADAAIgCAAIgBgBIAAAAgAACAGIAAAAIgCgBgAgMABIABAAIgCAAIABAAg");
	this.shape_65.setTransform(329.775,205.0875);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#996633").s().p("AgJAIIABgBIgBAAIgCgBIgDgDIAAAAIAAAAIgBgBIAAgBIABgBIAAgBIgBgBIgBAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAAAIADAAIABAAIAAAAIgBgBIgBAAIAAAAIAAABIAAgBIgBABIgBgBIAAgBIACAAIgBAAIAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAEgBIABAAIACABIABAAIAAAAIABAAIAAABIACAAIABABIABAAIgBgBIABABIAAgBIABAAIgCgBIABAAIADACIABAAIgBgBIgBAAIABAAIACABIABAAIAAAAIgBAAIABgBIABAAIAEABIACABIAAAAIADABIABAAIAAgBIgDAAIADAAIAAAAIgBAAIgKgCIAOgBIgBARIgWABIgCAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBgAgFgFIgBgBIgDAAIAAAAIACAAIACABIAAAAg");
	this.shape_66.setTransform(336.45,206.081);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#996633").s().p("AAGAhIAAAAIgFgBIgBgBIAAABIAAgBIAAABIgFgCIgBAAIgDABIABAAIgCABQgDAAgBgCIgMAAIAAAAIAAAAIAIgBIgRAAIgSACIgBgBIAAAAQAQgCAHAAIADAAIAAAAIgRgBIgHABIAFgBIAAgBIAAAAIAAAAIgBAAIAKAAIAAgBIgMAAIABAAIgBgBIABAAIADAAIgFgBIgBAAIABAAIAMgBIADgCIAAAAIgMACIAKgCIgIABIgCAAIgJAAIgFgBIgCAAIAAAAIgBgBIAAAAIgIgCIgKgGIgBgBIgCgBIgCgBIgEgGIgBgCIAAgCIAAgBIACABIAAgBIgBgBIAAgCIAAgBIAAgBIABgBIABgCIAAAAIAAAAIABgBIAAAAIACAAIABAAIABAAIAAAAIAAAAIABAAIAAgCIABgBIAAgKIAJgEIABAAQAFgCAEgBIgBAAIACgBIACAAIACAAIALAAIAJACIAEABIADAAIACABIABAAIARADIABABIABAAIAJACIABAAIgBAAIgGgBIgCAAIgCgBIAAAAIgBAAIgCAAIgCgBIAEACIABAAIAAAAIASAEIAYAAIABgBIAMAAIAPABIABAAIAAABIABAAIAQAFIACAAIAAABIACAAIAEABIAKABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAIgIgBIgFgBIgBAAIgDgCIgPgEIAAAAIgCAAIgDgBIgLgBIgKAAIATABIADABIABAAIABAAIABAAIAEACIAMAEIACACIgBAAIgCgBIgEgBIABABIgCgBIAEACIABABIgLgEIgCgBIANAFIADABIABAAIABABIABAAIAAAAIACABIgEAAIgJgDIAGACIABAAIAAABIABAAIAGABIACABIgCAAIgFgBIgBgBIgBAAIgEgBIgNgEIgCgBIgBAAIAAAAIgCAAIgKgCIgKACIgCAAIAAAAIAJAAIgDAAIAPABIAPAEIABAAIgBAAIgLgDIgBAAIAAAAIgDAAIgPgBIgBAAIgCAAIgCABIggAAIAAAAIABAAIABABIAFAAIAHAAIAMAAIAEgBIANAAIAJAAIgRABIgEABIgBAAIgCAAIgVABIgDgBIgCAAIgPgBIgCgBIgBAAIgBAAIgCAAIgOgEQgIgCgLAAQgIAAgGABIAIAEQAMAGAAABQABAAAAABQgBAAAAAAQgBAAAAAAQgBgBgBAAIABABIACABIAGACIAJAGIAHAAIABAAIAAAAIAAABIgBAAIgHAAIACACIAAAAIACAAIABAAIgBAAIgFABIABAAIAAABIgBAAIACAAIAAAAIADAAIACAAIgDAAIgBAAIgDABIAEAAIABAAIgCABIAAAAIABABIACAAIgBAAIAAAAIAAABIABAAIAFAAIgBAAIAAgBIABgBIAAgDIgBAAIAAAAIAAgCIAAAAIACAAIAAAAIAAgBIgBAAIAAAAIAAAAIgBABIAAgBIAAgBIABAAIAAAAIgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAAAQABABAAAAIACABIAAABIAAAAIADABIAAAAIADABIABgBIABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACAAIADAAIAGABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIAFABIABACIgCAAIgEgCIABABIAAABIAAAAIACABIAAAAIgCAAIAAAAIAAABIAAABIACABIAAAAIAAAAIAAgBIABgBIAAAAIAAgBIABAAIABAAIgBgBIAAAAIABAAIAAgBIAAAAIAAAAIABgCIAAAAIAAgBIABABIAAABIgBAAIABACIAAABIABAAIAAgBIAAAAIAAACIABAAIAAgBIADgBIACAAIgBAAIAEABIACAAIAKgBIAIABIgCASIgQABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAIABgCIgBAAIgBgBIgDgCIgDAAIAAABIAAAAIAAAAIAAABIgBgBIgEAAIgBABIADAAIABAAIAAAAIABAAIAAAAIAAAAIgBABIABAAIgBAAIABAAIgBAAIAAABIABAAQAAAAAAAAQABABAAAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAIABAAgAACAeIAEABIABAAIgDgBIgCAAIgBAAgAARAaIAAAAIAAgBIAAgBIgBAAIgDAAIAAABIABAAIgBAAIAAAAIAAAAIAAABIAEAAgAAOAYIABAAIAAgBIgBAAgAAPAWIADABIgBgBIAAgBIgBAAIAAABIgBAAIAAAAgAgnAUIABgBIACAAIAFAAIAAAAIgEgBgAg1ASIAAABIADAAIAIAAIABAAIAEgCIAAAAIgDABIgBAAIgBAAIgFAAIgBAAgAATATIABAAIABgBIgCAAgAAQATIAAAAIACAAIABAAIgDgBIAAAAIAAAAIAAABIAAgBgAgbASIAAAAIgBAAIABAAgAATASIAFAAIgEgBgAAQARIABAAIAAAAIAAAAIgBgBIAAABIgBAAgAgrARIACAAIACAAIgBgBIgBABIgBAAgAgdAPIAAAAIABABIAAAAIABAAIgBAAIAAgBIAAAAIgCAAIgBAAIABAAIgCAAIABABIABAAIAAgBIABAAgAAKAQIABAAIAAgBgAAMANIABABIAAABIAAAAIAAgBIAAgBgAg2AIIAAAAIgCgBIAAAAgAgRAGIACABIABAAIgCgBgAhBACIAGADIAAAAIAAAAIABABIAAAAIgBgBIgGgDIAAAAgABLgFIgEgBIgBgBIAFABIABABgABJgGIgHgDIAHACIABABgABQgIIAAAAIABAAIAAABgABOgIIAAAAIAAAAIAAAAIABAAIABAAgAA+gKIACABIACAAgAA3gJIgBgBIADABgAA7gKIgBgBIAAAAIgBAAIABAAIABAAIADABgAA5gLIgDgBIAAAAIADABgAAzgMIgFAAIAIAAgAhBggIAAAAIgCAAgAhBggg");
	this.shape_67.setTransform(317.05,205.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#996633").s().p("AAYAKIgDgBIgBAAIgEgBIgBgBIAAABIgBgBIAAABIgEgBIgDABIgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgGAAIgCABIAAgBIAAAAIACAAIACAAIAAgBIADABIABAAIgEgBIgLAAIgHABIgHADIgBgBIABAAIAIgDIAJgBIACAAIAAAAIgNAAIgFABIAEgBIgBgBIABAAIgCAAIAAAAIABgBIAAAAIAEgBIgGABIAAAAIAAAAIgBAAQgBgBACAAIADgBIgFABIAAgBIAJgBIAEgBIAAAAIgKACIAAAAIAEgBIAEgCIgHACIgBAAIgBABIAAgBIABAAIAIgCIAAgBIAGAAIADAAIAAgBIABAAIgBAAIgCAAIgGABIgGABIAAAAIAAAAIAIgDIAEgBIAagCQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBABIABAAIABABIABAAIACADIAAAAIABABIAAAAIgBABIAAABIAAABIAAAAIADAAIAAACIAAAAIABAAIgBAAIAAABIAAgBIgCAAIAAABIgBgBIgBAAIAAABIgBAAIACABIAAAAIgBgBIACAAIACAAIAAABIAAABIgBAAIABAAIAAAAIAAABIAAABIgCABgAARAHIAEAAIABAAIgDAAIgCgBIgBAAgAASAEIACAAIgCAAIAAAAg");
	this.shape_68.setTransform(312.3,202.1107);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#996633").s().p("AgDAIIAAgBIgBAAIAAgBIgBABIAAAAIAAAAIABAAIgBABIgBgBIAAAAIAAAAIAAABIgCAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAIgBAAIABgBIABgBIABgBIgBAAIABgBIAAAAIgBgBIAAABIAAgBIABgBIAAgCIAAAAIABABIAAAAIAAgBIAAgCIgBgBIgBgDIABAAIACAFIAAABIABAAIAAgBIgBgCIABgBIgBgBIABABIABgBIAAABIAAgBIABAAIAAABIAAABIABAAIgBgBIAAgBIABAAIAAgBIAAABIAAABIAAgCIAAAAIABADIABABIgBgDIABABIABABIgBgCIAAAAIABACIABAAIAAACIABAAIABAAIAAAAIgDgDIABAAIAEAEIABACIABADQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBAAIgBABIAAAAIgDABIgDAAIgBAAIAAAAIAAAAIgBABgAgGAGIAAABIAAgCIABAAIgBAAg");
	this.shape_69.setTransform(321.8,203.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#996633").s().p("AAGAYQgCgLABgFIAAgCIgBAAIAAAIIAAAEIAAAFIgBgEIAAABIgBgBIAAABIAAAAIAAABIgBgEIAAAFIAAgBIgBABIAAgBIAAgDIAAAEIAAABIAAgBIgBgIIgBgDIAAABIAAABIAAAAIAAAGIgBgGIgBgBIABgDIAAgBIgBgCIgBgBIAAACQAAAFACAFIgDgGIgCgIIgBgTIAAgBIACgBIABAAIAAgBIACgBIACgCIAAAAIABgBIABABIAAAAIAAAAIACAAIAAAAIABgBIAAAAIABgBIABAAIAAABIAAACIAAABIABgBIgBgBIAAAAIAAAAIABAAIAAAAIgBAAIAAgBIAAAAIAAAAIABgBIABAAIAAACIAAAAIAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABIAAAAIAAAAIgBACIAAAAIgBAEIgBABIABAAIgBAAIABAAIgBAEIAAABIAAABIAAAAIABABQAAABAAAAQgBABAAAAQAAABAAAAQAAAAgBABIABAHIgBAAIAAgFIgBALIACANIAAABgAAFAAIABgBIAAgBgAAHgQIgBABIAAABIABgBIAAgDIAAAAIAAACgAAEgQIAAAAIAAgBg");
	this.shape_70.setTransform(362.2375,185.975);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#996633").s().p("AAJAcIgBgBIABAAIAAgDIAAAAIAAgBIAAAAIAAAAIgBADIAAABIAAAAIgBAAIgBgBQAAABAAAAQgBABAAAAQAAAAAAgBQgBAAAAgBIAAgEIAAgBIAAABIABgEIAAgBIAAAAIABgFIABgBIAAgFIAAgDIAAAAIAAgDIAAABIgBgBIABgEIAAgBIAAgBIAAgCIgCgCIABAAIABACIAAgBIABABIgCgDIAAAAIgBgBIgBAAQgEgCgCAAIgEAAIgCAAIgCAAIgMABIgBAAIABgBIAMgBIADAAIADAAIAFABIACABIAAgBIgCgBIgHgBIgDAAIgDAAIgIAAIAFgBIAAAAIAAgBIgBAAIAAAAIAAAAIADAAIABAAIACgBIgIAAIAAAAIgBgBIABAAIAFAAIgHgBIAAAAIAOgBIAEgBIAAAAIgEAAIgDABIgHAAIAJgBIgDAAIgFAAIAFgBIADAAIABAAIACAAIACgBIAAABIAEABIABAAIAFABIAAAAIABAAIgDgCIgIgBIgIABIgBAAIADgBIABAAIABgBIAGgBIAHABIAEACIADACIABAAIABABIAEAFIAAABIABABQACAEAAAEIAAACIABAJIAAAEIAAABIAAAFQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAIgBgBIgBABIAAACIgBABIgCADIgBAAIgBABIAAAAIgBgBIgCAAIgBgBIAAABIAAABIAAABIgBAAIgBABgAAIAZIAAgBIAAAAgAAIAYIAAAAIAAAAIABgCIAAgBIgBAAIAAACIAAABgAAHANIgBAFIABABIAAgEIABgCIAAgBg");
	this.shape_71.setTransform(362.725,183.675);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#996633").s().p("AgNAzIAAgBIAAAAIAAgCIABgBIgBAAIABgCIAAgBIgBADIAAACIAAgCIAAAAIAAAAIAAAAIgBAAIAAACIABAAIgBABIAAAAIgBgBIAAgBIAAABIgBAAIAAABIgBAAIAAgBIAAgCIACgHIACgFIADgHIACgCIgBAAIABgBIAAAAIAEgJIAAgCIAAAAIAAgBIAAgCQACgGACgBIADgQIABgBIAAABIgCAMIACgKIAAgCIAAgBIABgGIAAgGQAAgFgDgGIgGgNIAAgBIAAABQAEAHAEAHQACAIAAAIIAAAEIAAgEIAAAAIgBgMIgBgIIgFgJIAEAGIAAgBIABABIAFANIAAgDIgCgDIAAgCIAAABIAAAAIgDgKIgBgBIAAAAIAAgBIAAgBQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAABIABACIABACIAAABIAAABIABABIgEgKIAAAAIABAAQAEAHADAKIABACIAAABIABADIAAgBQAAgFgCgEIgFgJIAAAAIAFAJIgBgEIgCgDIAAgBIABAAIAEALIABAEIAAAAIABACIAAAJIAAAAIAAABIAAAGIAAgBIAAACIABgCIAAAAIAAgDIAAgDQABgJgFgLIADAGIADAHIABAHIAAAHIgGAYIgCAHIAAABIAAABIgGAQQgBAFgCAAIgBgCIAAABIgCADIgDAEIAAAAIgBAAIgBABIgCgCIgBAAIgBAAIAAAAIAAAAIAAABIgBABIAAABIgBAAIgBABIAAAAgAgMApIgBAFIAAABIACgFIAAgBIAAAAIgBAAgAgMAjIAAABIAAACIACgFIACgDIgBAAgAAEgqgAADgsIAAAAIABAAIAAACg");
	this.shape_72.setTransform(364.15,191.025);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#996633").s().p("AABAjIgBAAIgBAAIgBAAIgCAAIAAgBIAAAAIAAAAIAAABIAAAAIgCAAIAAAAIAAAAIAAAAIgCAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAAAIABAAIAAgBIABAAIAAgBIABAAIAAAAIgBAAIABgBIAAgBIAAAAIgBAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIgBgDIAAAAIABAAIAAACIABgCIAAgCIgBgCIgBgCIABAAQACADgBACIAAAAIABABIAAgDIAAgBIAAgCIABABIABAAIABABIAAgBIAAAAIAAgBIAAABIAAABIABgCIAAAAIABADIABABIgBgDIABABIAAABIAAgCIABACIABABIgBABIABABIABAAIAAgBIgCgDIADACIACADIABAGQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgBgBIAAABIgBAAIgBAAIgCABIAAAAIgBAAgAgGAhIAAABIAAAAIAAgBIABAAIAAgBIgBAAgAgEATIAAAAIAAgBIAAgFIAAAEIAAABIAAAAIgBABIgBAAIAAgDIAAAAIAAABQAAABgBAAQAAABAAAAQAAAAgBAAQAAgBAAAAQgCgDABgDIAAgCIAAACIABgGIAAgBIABgGIABgCIgBAAIABgBIgBAAIABgEIgBgCIgBgRIAAgHIARABIABAiQABAGgDAAIgBgBIAAACIgBACIAAABIgBAAIgBACIgBACIAAAAIgBABIgBAAIgBgBIgBAAIAAAAIAAABIgBABIAAABIgBABIAAgBIAAABgAgFAPIAAABIABAAIAAgCgAgEAOIAAgCIAAAAIAAgBgAgGAAIAAAAIAAAGIAAAAIAAABIAAgEIABgDIAAgBg");
	this.shape_73.setTransform(363.2143,187.775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#996633").s().p("AgGA8QAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAAAIgBAAIgCABIgBAAIgDgBIAAAAIgCAAIAAgBIAAgBIAAgBIgBgBIAAAAIAAAAIgBAAIAAAAIgBAAIgBAAIgBAAIAAgBIAAAAIABAAIABgBIAAAAIABgBIABAAIAAAAIABgBIAAAAIAAgBIgCACIgBAAIAAAAIAAAAIAAAAIAAAAIAAAAIgBAAIABABIgBAAIAAAAIgBAAIABgBIAAAAIAAAAIABgBIgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIACgBIABgBIAAgBIABAAIADgBIAAAAIAFgCIABgBIAAAAIABAAIAEgEIABgCIAAABIABgCQAAgBABAAQABAAAAgBQAAAAAAAAQAAAAABAAIAAgBIABgBIAFgIIAAAAIAAAAIgEAHIAEgFIABgBIAAgBIADgHIAAgFIAAgBIAAgBIgBgBIgBgBIABAAIACABIAAAAIABAAIAAABIgBgBIAAACIABAAIACAAIAAABIAAABIABAAIAAAAIAAgBIgBAAIAAgBIABAAIAAgBIAAABIAAgBIAAAAIgBgBIAAAAIAAAAIAAgBIAAAAIgBAAIABAAIAAgBIAAAAIAAABIABAAIAAgBIgBAAIAAAAIgCAAIAAAAIgBgBIABAAIgBAAIABgBIABAAIgCgBIAAAAIAAAAIAEABIACgBIAAACIABAFIABACIAAADIgBgKQACADAAAHIAAAAIAAACIAAAAIgBACIgBADIAAABIAAABIAAABIgBABIAAABIAAAAIAAAAIABAAIABgCIACgIIgBgJQACAGAAAFIgBAHIgDAHIgGAIIABgBIgCAEQgDAFgEADIgGAGIgDACIgCAAgAgPAvIAAAAIADgBIACgCIAAAAgAAPAJIgCAAIAAgBIAAgBIACACIABAAIAAAAgAAQAJIAAgBIAAABgAANAIgAABAHIAAgBIgBAAIAAAAIgBgBIgBgCIgDgGIAAgDIgBgCIABgBIgCgCIgBgBIgGgMIAAABIgBgGIgCgeIANAFIAGAEIAEAEIAEAJIABAIIAAgCIACAOQABAGgDABIgBgCIAAADIgBABIAAAAIAAABIgBACIAAAAIABACIAAAAIAAAAIgBABIAAABIgDAAIAAAAIAAAAIgBABIAAAAIgBgBIAAABIABAAIABABIAAABIAAABIAAAAIAAABIAAABIAAAAIgBgBIAAAAIAAAAIAAgBIgBAAIAAgBIgBAAIgBgCIAAgBIgBAAIAAgBIAAAAIAAgBIgBgCIABACIAAAAIAAAAIAAADIABAAIgBAAIABAAIAAAAIAAABIAAAAIAAABIABABIAAABIABAAIAAgBIgBgBIABABIAAAAIAAAAIAAABIABAAIAAABIgBABIgBgBIAAAAIgCgDIABACIAAABIAAABIABAAIAAABgAgMgYIAEAMIABABIACABIAAAAIgCgCIAAgBIgDgHIgBgCIAAAAIAAgCIAAAAgAgGgMIAAAAIAAgBgAAMAGIgDgCIADACIABAAIAAAAgAATACIAAAAIAAADgAAQACIAAAAIACgBIABABg");
	this.shape_74.setTransform(362.9175,189.4893);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#996633").s().p("Ag5AfIAAgBIAAAAIgCgCIgBgCIAAAAIgBgBIAAgBIABgBIAAgCIgBAAIAAgBIgBgBIAAgBIABAAIACAAIAAAAIABAAIgCgBIAAAAIABABIAAAAIgCAAIgBgBIAAgBIACAAIgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQABAAAAAAIACgBIABAAIgBAAIACABIADABIABABIAAgBIABABIgBgBIAEABIAAAAIACAAIgBAAIABgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIAHgBIAAABIgFAAIAEABIAGAAIAEgBIABgBIABAAIACgCIABgBIgBAAIADgCIAAAAIABgCIgBABIABgBIABgBIACAAIAEgEIAAAAIgDADIADgCIABAAIABgBIADgBIAGgEIABAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIABgBIABgBIAAAAIABgBIABAAIgBAAIADgCIAAAAIABAAIAEgCIACgBIgBAAIABAAIAAAAIABgBIACgBIACgBIABAAIACgCIgBAAIACgBQACgCADAAIALgFIgIAEIAEgBIADgBIABgBIABAAIAYgJIADgBIABABIgBAAIgDABIgDABIgTAHIAAAAIAAAAIAHgCIACgBIACgBIAFAAIAEgCIADgBIAAABIgBAAIgDABIAAABIAAABIABgBIAAAAIAAABIgFABIgFACIACAAIAKgEIAAABIABAAIgBABIgDABIAFgBIAAAAIAAABIgLADIgDADIAAAAIADgCIAHgCIAAAAIgJAFIgBAAIgEABIAAABIgDABIAAABIgBAAIADgBIADgBIADgBIADgCIABgBIACAAIAAAAIgCABIgBABIgCABIgCACIgCABIgEACIgBABIgCABIgDABIgFAEIAAAAIACAAIAHABIAFAAIABAAIAFAAIAEANIgCAAIAAACIgBABIgLAAIgJADIgCAAIgQADIgDAAIAAAIIAAABIgBAAIAAADIgSABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIAAgBIgHABIgFAAIAFgBIAGgBIgBAAIgCgDIAAAAIAAAAIAEgBIgDAAIgBAAIAAAAIgBgBIABAAIAEAAIgEgBIgCAAIABAAIgCgBIAAAAIgBgBIgBAAIAAABIgBAAIAAAAIAAABIAAAAIgDAAIAEABIAAAAIgFAAIAAACIACAAIgCAAIAAAEIgBAAIAAgCIgEACIgGACIgHAAIgKABIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBgAgkAcIgBABIACAAIAHgCIAAgBIgCABIgBABIAAAAIgDgBIAAAAgAgdAZIgCABIABAAIACAAIAAgCgAgeAWIABAAIACAAIgBAAIABgBIAAAAIgDAAgAgaAWIACAAIAAgBIAAAAIAAgBIAAgBIgBABIAAABIABAAIAAAAIgCAAgAAVASIgLABIAAAAIALgBIAEgBIABAAgAgZATIABAAIAAAAIAAAAgAgkATIAHAAIAAgBIgFAAIgCAAgAg9ARIABAAIgBAAgAg2ARIAAgBIgDAAIAAAAIACAAIABABIAAAAgAgZAQIAAAAIABAAIAAAAIABgBIgBAAgAgEAPIABABIAEAAIgFgBgAgGAOIAAAAIAAAAIAAAAgAgGANIABAAIAAgBIABAAIABAAIgBAAIgBAAIAAAAIAAAAgAgCAMIgBAAIAJAAIAAAAIACgBgAgCALIAAAAIAKAAIAAgBIAHAAIABAAIgBAAIgBgBIgDAAIAAAAIgBgBIAAAAIgBAAIgBgBIgCAAIAAgBIgCAAIAAgBIAAAAIgBAAIAAgCIAAAAIgCgBIAAgBIgBABIAAAAIgBAAIgBAAIgBABIABAAIgBABIABAAIAAAAIgCABIgCABIABAAIAEgCIAAAAIAAABIABAAIgBABIgBAAIAAABIACgBIgEADIAAABIgBAAIABAAIADgDIAAABIgDADIADgDIABAAIAAAAIgBABIgDACIABAAIABgBgAgQAIIgBAAIACgBgAgKAFIACgBIABgBgAgEABIAAABIgCABIACAAIACgCIAAAAIABAAIAAAAIABgBIAAAAIAAAAIAAAAIAAAAIAAgBIAAABIAAAAIAAAAIAAAAIAAAAIgBAAIAAAAIgBAAgAABgCIgBABIAAAAIABAAIABgBIAAAAIAAAAgAACgFIAAAAIADgBIACgCIAAAAgAgBAAIAAAAIABAAIgBAAgAAAAAg");
	this.shape_75.setTransform(359.625,192.9393);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#996633").s().p("AgPAWIABgCIgCAAIgCAAIAAgBIgBgBIgCgBIABgBIgBAAIAAgBIAAAAIAAgBIABgBIgBgBIABAAIAAgBIgBAAIgBAAIAAgBIAAgBIgBAAIAAAAIADAAIgBgBIgBAAIAAAAIAAgBIABAAIAAgBIAAAAIAAAAIgBgBIABgBIAAAAIAAAAIABAAIABAAIAAAAIADABIADAAIACAAIAEgBIAAAAIAAAAIABAAIAAgBIAAAAIABgBIAEAAIAFgEIAAgBIAAABIgEADIAAABIAAAAIAAgBIAEgCIACgBIAAgBIAGgKIABgBIAEgEIAFgDIABgBIAAABIgGAEIgEAFIgFAIIgBABIAAAAIAAABIABgCIAEgGIACgBIAAgBIACgBQACgDADgCIgDAEIAAAAIAAAAIABAAIABAAIgEAEIAFgEIAAgBIABAAIAAABIAAAAIAAABIgDACIAAAAIAAABIAEgEIABAAIAAABIgCACIAAAAIABAAIAAAAIgBABIAAAAIgCAEIAAgBIgCADIAAACIAAAAIgDACIAAAAIgBACIAAABIgBAAIABAAIAAABIABgCIAGgIIgCAGIgCAEIgBAAIAAABIgCAEIgKAIIgEACIAAAAIAAABIgBAAIgCABIgIACIgCAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAgAgUAJIABAAIAAAAIgBAAgAgUAIIABABIABAAIAAgBIgBAAgAgUAIIAAAAIgBAAIAAAAIABAAIAAAAIAAAAgAgRAHIAFAAIgBgBIgDAAgAATgHIgBADIACgDIgBAAIADgDIAAAAIAAgBIgDAEg");
	this.shape_76.setTransform(353.725,193.8917);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#996633").s().p("AgSAUIAAgCIAAABIgDAAIgEgCIgBgCIAAAAIAAgBIAAgBIAAgBIgBAAIABgBIgBAAIgBABIgBgBIAAAAIAAAAIgBAAIAAgBIABAAIABAAIAAAAIABgBIABAAIAAAAIABgBIABAAIAAAAIgEABIgBAAIAAAAIAAABIgBgBIAAAAIABgBQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIABgBIAEAAIAEAAIABAAIAAAAIABAAIAFgCIACgBIAAAAIAEgBIACAAIAJgFIAAAAIAAAAIgGAEIAGgCIAAgBIAJgEIANgLIABAAIAAABQgLAJgHAEIgCABIAAAAIAOgIIAFgDIAAAAIgDADIABAAIgBABIABgBIABAAIAAABIABgBIABAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBABIgDADIgBAAIAGgDIAAAAIAAAAIgJAHIgDADIAAAAIAKgHIgEADIADgCIABAAIgEADIgEADIAAAAIgBABIAAABIgEAAIgBABIgDADIABgBIACAAIALgIIAAAAIAAAAIgDADQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAIgJAHIgZAMIgCABIgCgBgAgTAEIgEABIgBABIAEgBIACgBIAAAAIAAAAgAgdAJIABAAIgBABgAgcAJIAAAAIAAAAIAAAAIAAAAIAAAAgAgcAJg");
	this.shape_77.setTransform(351.2579,197.75);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#996633").s().p("AgmAdIgCAAIAAgCIgBAAIgBgBIAAAAIAAgBIAAAAIgCACIgBAAIgBAAIgBAAIAAAAIAAAAIAAAAIAAgBQAAABAAgBIgBgBIABgCQgEACACgDIACgCIADgCIgBAAIACgBIgBAAIAEgDIABAAIAHgFIACgCIgBAAIAIgHIAAAAIAEgFIAGgFIAIgKIAEgIIACABIAAAAIAFAEIADgBIAJgCIAJgBIABAKIAAABIAAABIAAABIALABIAAAAIAAAAIgFgBIgEAAIADABIgEgBIgBABIAAAAIAFAAIAEABIABAAIABAAQAEACADADIABABIABABIAAABIABAGIACAJIgBABIAAgBIgDgPIAAgCIgBAAIABACIABANIgBgEIgBABIAAgBIAAABIgBAAIAAgEIgBgDIAAABIAAAAIABAIIgBgHIAAAGIABABIAAAAIgBAAIAAAAIAAABIgBgBIAAgEIAAAFIAAAAIgBAAIgBgJIgBgCIABAEIgCgDIACAHIgBAAIgBgGIgBAAIABAAIgBAAIAAAAIABADIAAAAIgCgDIgBgBIABACIgCgBIgCAAIgDAAIgCAAIgFACIgBAAIgJAAQgBABAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIABgBIgBAAIgCAAIAAgBIgCgCIAAgBIgBAAIgBACIgBgBIACgDIAAAAIAAgBIgBABIAAAAIgBABIgBAAIAAABIAAABIgBgBIABgBIgBAAIAAAAIAAABIgFAGIgBACQgHAJgKAKQgEAFgCgBIAAgCIgCABIgDACIgFABgAgvAaIABAAIADgDIABAAIAAgBIAAAAIABAAIABgDIAAABIgEADIAAAAIgBABIgBABIABAAIgBAAIgBABIAAAAgAgnAPIgCADIAJgIIgBAAgAAlgBIABAAIAAABIAAgBIAAAAIgBgBgAgBgZIgEAFIgCADIAAABIAGgJIAAgBgAAhgNg");
	this.shape_78.setTransform(346.9917,197.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#996633").s().p("AgIAeIgBAAIgBgBIgBACIgBAAIAAAAIgBAAIAAAAIAAgBIAAAAIAAAAIgBAAIgBAAIAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgCIABgCIgBAAIABgBIgBAAIADgDIABAAIACgEIAAgBIABgBIgBAAIADgFIABgDIgBACIABgDIADgDIAEgJIgCAGIACgFIABAAIAMgZIABAAIAAABIgLAWIAAAAIAFgJIADgFIADgFIgCAEIABAAIAAAAIABgBIAAABIgCADIgCAFIAAAAIABAAIACgFIAAgBIACgDIgCAEIgBADIAEgHIAAAAIAAAAIAAAAIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCADIADgDIAAAAIgFAKIAAADIAEgLIABAAIgDAGIgBAEIAEgIIgDAIIAAAAIgBABIgCAEIAAABIgBADIAAAAIAAABIAAgBIABAAIAAgCIAFgLIgDAMIgKAcQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBgBIAAAAIAAABIgBABIgBAAIgBABIgCABIAAAAIgBAAgAgNAbIAAAAIAAABIAAAAIAAABIAAAAIAAABIABgBIAAAAIAAgBIAAgDIABAAIgBAAgAgLASIAAABIgCADIAAAAIAAABIADgFIAAAAg");
	this.shape_79.setTransform(342.525,199);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#996633").s().p("AgSAzIgDAAIAAgBIgBAAIAAAAIACgBIAAgBQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAAAIAAAAIABgBIgEAAIAAAAIAAgCIgBAAIAAAAIAAAAIAAgBIABAAIAAABIACAAIABgBIACAAIAAAAIgCAAIgDAAIAAAAIAAAAIAAgBIAAAAIABgBIAAAAIgBAAIAAgBIABAAIAAgBIAAAAIABAAIABgBIACgBIABgDIABAAIAHgLIgBABIABgBIAAAAIABgDIAAgBIABAAIADgIIAAgCIAAgBIAEAAIACgBIgEAAIgBAAIgBAAIgBgBIAAAAIgBgBIAAgBIgDgHIABACIgCgEIgBgEIABgGIAEgMIAAAAIAAAAIgCAIIgBADIABgDIADgIIAAAAIAAgBIABgCIAHgKIAEgDIAFgEQADgCAFgBIAEAAIACAEQABAGABAGIAAAHIgBACIAAABIgBADQgCAHgDAGIgCACIABgDQAFgHABgLQABgIgCgLIgBgDIgEAAIgGABIAKgBIACANIgBAGQAAAIgEAHIADgJIgBAAIgBgBIAAACIgBABIAAAAIgBAEIAAAAIAAgBIAAAAIAAgBIACgJIABgCIgBgHIAAAJIgCAJIAAABIgCACIACgGIgDAGQACgFABgHIAAgGIAAgCIgBAAIgBAAIAAABIgBAAIAAAAIgFAHIgGAJIAAgBIgCAJIAAADIgBAAIAAABIgFAEIADgBIADgBIAAgBIABAAIABACIABABIAEAEIABAHIAAAEIAAAAIAAACIgFANIgBAAIAAACIgGAOIgDAEIABgDIgCACIAAgBIAAgCIgBABIAAABIAAAAIgBACIgCADIgCAAIgCABIgCABIgEAAgAgVArIACgBIAAAAIABgBIAAAAIgCABIgBAAgAgMAdIgFAGIgBADIAAABIAAgBIABgBIAAgCIABAAIAEgHgAAUgXIAAABIABgDIABgEgAALgiIgCABIgEAGIAAABIAEgEIAGgHIAAgBgAASgoIAAAAIABAAIAAAAIABAAIgBAAIgBgBgAARgpIAAABIABAAIgBgBIABAAIAAAAIgBAAgAARgpIAAAAIAAgBIgBgBgAASgdIAAAAIgBAFg");
	this.shape_80.setTransform(342.3,200.25);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#996633").s().p("AgRAkIAAAAIgBgBIABAAIAAgJIgBAAIAAAGIAAAAIAAAAIAAABIAAgBIAAACIAAAAIAAACIgBAAIgBgDIAAAAQAAABAAABQgBABAAAAQAAAAAAAAQgBAAAAgBIAAgDIAAgEIAAgEIABgCIAAgBIABgCQAAgEABgDIABgCIgBAAIABgBIAAgFIACgEIAAgFIAAACIAAgEQACgGACgCQADgJAGgKIAAAAIgGAOIAGgLIABgCIAAAAIACgCIAPAAIABADIACADIAEAQIABAJIAAAJIgBACIAAgCQABgHgCgLQgBgJgEgKIgBgDIgJAAIgBABIAJAAIABACQAEAHAAAFIABAKIABALIgBABIAAgIIgBABIAAgBIAAACIgBAAIAAgDIAAgCIAAAIIgBAAIAAABIgBgIIAAAIIgBABIAAgBQABgGgDgMIgCgEIAAAAIACAJIgCgHIADAOIgEgOIAAAAIgBgCIAAAAIAAAAIADAKIAAABIgFgLIgBAAIgBADIgEANIgCARIAAADIgBACIAAABQAAAGgCABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAABIgBABIAAABIAAACIgBABIgCAEIgBgBIAAABIgBABIgBgBIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBAAIAAAAIAAACIAAABIgBAAIgBAAIAAABgAgSAOIgCAIIABADIAAgEIAAgCIABgBIAAgEgAAJgYIgBgCIgBABIABAAIAAAAIAAAAIABABgAAIgZIAAAAIAAAAIAAAAg");
	this.shape_81.setTransform(338.9333,202.425);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#996633").s().p("AgLAfIgBAAIAAAAIgBgBIgBgCIAAAAIgBAAIgBABIgBAAIgBgBIgBAAIAAAAIABgBIAAAAIABAAIAAgBIABAAIAAgBIAAAAIABgBIgCABIgBABIABAAIgBABIAAAAIgBgBIABAAIgBAAIABgBIAAAAIgBAAIAAAAIAAAAIgBAAIAAAAIgBgBIABAAIAAgBIAAgBIABgBIABgBIACAAIAAgBIABAAIAEgDIAAgBIAAAAIADgEIAAgBIABgCIAAABIADgEIACgCIABgCIACgHIABAAIgDAHIAEgFIAAgBIAIgPIAGgKIABgBIgNAYIAAAAIAAABIAFgKIAIgLIAAAAIgCAFIAAAAIAAABIABgBIABAAIgBAAIgCAEIgCAFIABgBIADgHIgCAFIAEgHIABgBIAAAAIABAAIAAACIgDADIAEgEIAAAAIAAAAIgGAKIgBAEIABgBIAFgKIAAAAIgDAFIADgEIAAAAIgEAJIAAABIgBAAIgCAEIAAABIgBADIAAAAIAAABIACgDIAFgMIgCAIIgGAPIgCADIgBADQgEAIgFAGQgCAEgBgBIgBgCIgBABIgCABIgCAAIgCABgAgPAUIgBACIAFgEIgBAAgAAAAAIAAAAIAAAAgAASgWIABgCIAAABIgBABg");
	this.shape_82.setTransform(338.2,206.825);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#996633").s().p("AAAAeIAAgCIAAAAIAAAAIAAgDIgBgBIgBAAIAAABIABAAIAAACIgBAAIAAABIAAAAIAAAAIAAABIAAAAIAAAAQAAABABAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAAABIgBgBIAAgBIgBgBIgBAAIgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDABIgCAAQgBABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgCIgCABIAAgBIAAAAIABAAIAAgBIAAgBIAAAAIAAAAIAAAAIgCAAIABAAIAAABIgBAAIAAgBIgBABIAAAAIAAAAIAAAAIABABIAAgBIgBAAIAAAAIABAAIAAABIgBAAIABAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAgBIgBgBIAAAAIgCgBIAAgBIAAABIgBgBIAAAAIAAAAIgBABIgCgBIgDAAIAAAAIACgBIgCAAIgCAAIgGABIAAAAQAEgCADAAIAAAAIABAAIgEAAIgBgBIgCABIABgBIAAgCIAAAAIADAAIAAgBIgBAAIAAAAIgDAAIAAgBIACAAIgCgBIAAAAIAAAAIADAAIABgCIgDACIADgCIgDABIADgCIAAAAIABAAIABAAIABgBIAAAAIgBAAIgEABIADgDIADgCIADAAIACgBIAEAAIABABIAAAAIABgBIABgBIACgBIgBgBIACgBIABAAIABgEIABAAIgBgCIAAAAIABgBIAAgCIgBACIACgEQABgDACgCIADgEIADgFIACgCIAAgBIABgBIABAAIACgCIACgBIAFgDIABgBIAAABIgHAEIgCABIgCACIgBACIAAAAIABgBIABgBIAAgBIAIgEIACgBIAKgEIADAAIACADIACAFIABAHIgBAFIAAABIgBAAIgGAMIgBgBIAHgLIAAgBIgBABIgBACIgHAJIgCgBIAAAAIAEgHIgEAHIgBAAIAAABIgBAAIgBADIgBABIAAAAIgBABIABgCIABgDIABgBIABAAIgBAAIgEAHIgBAAIAAgBIACgEIACgCIAAAAIAAAAIABgBIAAAAIgBAAIAAAAIAHgOIgHAOIgBABIAAAAIgBABIgBAAIABgBIAAAAIABgBIAAgBIAHgNIgBAAIABgBIgBAAIAAABIAAAAIgEABIgGAGIgEAHIgCAEIAAAGIgBABIAAAAIAAABIABAAIACAAIAAABIABAAIABgBIABABIAAAAIABAAIAAAAIABAAIAAgBIABAAIAAAAIAAAAIAAgBIACABIAAAAIABgBIAAgBIABAAIAAAAIAAAAIAAAAIAAAAIgDABIgBAAIAFgCIAAgBIACAAIAAgBIgFACIAAAAIAAAAIAEgEIAAAAIABgDIgBABIAAgBIgBABIAAABIAAgBIABgBIAAAAIAAgBIAAAAIABABIABAAIAAAAIAAABIgBABIgBABIADgBIAAAAIAAgBIAAAAIABAAIAAABIANgEIgDAIIgDAAIgCAGIgBABIABAAIAAAAIAAAAIAEgFIgDAJIgGAHQgCACgDABIgFABIAAAAIABAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAgBIgBAAIgBgBIAAAAIgCgCIAAgBIgBAAIAAAAIgBAAIgBAAIgBAAIAAACIABgCIgBACIABgBIAAABIgBABIAAAAIgBAAIAAABIAAABIAAAAIACgCIAAAAIgCAEIgCABIgBABgAgEAdIABAAIgBgBIAAAAgAgUAcIABABIAAgBIgBAAIAAAAgAgZAbIAAAAIgBAAgAgCAWIAAAAIABAAIAAAAIgBAAgAAFATIABAAIAAAAIgBAAgAAWAHIACgBIABAAIgBgBIgBAAgAAWgTIAAAAIAAABIABAAIAEgBIgDgBIgDgCgAAOAKIAAAAIADAAIgDAAgAATABIABAAIgBABgAAPABIABgBIAAABIgBAAgAAUAAIAAAAIAAABgAAUAAgAAUAAgAAXgTIAAgBIAAABg");
	this.shape_83.setTransform(333.925,206.85);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#996633").s().p("AgLAIIABgBIgBAAIAAgBIgBgBIgBgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIgBAAIAAgCIACAAIAAAAIABAAIgBgBIgBAAIAAAAIAAAAIAAgBIAAAAIAAAAIAAAAIgBgCIACgBIABAAIABABIACABIABABIAAgBIACABIABAAIAAAAIABgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAEgBIAAABIgDAAIACABIAFAAIADgBIAEgBIABAAIgBABQgGACgDgBIgBAAIAAABIAEAAIADAAIADAAIgCABIAAAAIgBABIABAAIAAAAIgEAAIAAABIAAAAIACAAIADAAIAAAAIAAAAIAAAAIgCAAIACABIABAAIgBAAIgEABIgCABIABAAIAEAAIgEABIgBABIgCgBIAAAAIgCABIAAABIABAAQAEAAACgCIAAAAIgDADIgFACIgLABIgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBgAgJgGIABABIAAgBIgCAAIAAAAIgBAAIABAAIABAAg");
	this.shape_84.setTransform(330.225,208.981);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#996633").s().p("AgaAdQgBAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIgCABIgEAAIgHAAIAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAgBIABgBIAAgBIAAgBIgBAAIABgBIgBAAIAAABIgCAAIgCAAIgBAAIgBAAIABgCIABAAIACgBIABAAIAAAAIACgBIABAAIABAAIAAgBIAAAAIADgBIAAAAIAAAAIgEABIgBAAIgBABIAAAAIgBAAIgBAAIgBABIgBAAQgCABACgBIABgBIgBAAIABAAIAFgCIgEABIAAAAIgBAAIgBAAQgEACACgDQAFgDADAAIAAAAIABgBIAHgCIABAAIAAAAIACgBIAJgCIADAAIAAAAIACgBIgBAAIANgEIABAAIAEgBIgCAAIAFgBIABgBIgBABIAKgCIAMgDIAEgGIABAAIAAAAIgFAHIAFgFIAAgBIAAAAIABgBIAAAAIABgEIAAAAIAAgCIAAAAIAAAAIAAgBIgBAAIgEgBIgCAAIgHgBIgCAAIgGABIgGACIgBABIAAAAIAAgBIAAAAIADgBIgBgBIABgBIAHgCIADgBIAIAAIgBgBIgGAAIgEABIgIADIgDACIAAAAIgBAAIAAAAIgBABIgCABIgHAFIAAAAIAAgBIAFgCIAEgDIgBAAIAAAAIgBAAIABgBIACgCIgBABIgBAAIgCABIAAAAIAAAAIACgBIAAgBIABAAIAAAAIAAAAIABgBIAAgBIAKgEIADgBIACgBIADAAIABAAIgDAAIgBAAIgCAAIgKAEIgBAAIAAAAIAAAAQAFgDAGgBIAPAAIAAAAIAKAEIABABIACABIAAAEQABAEgCAFIABgBIgBACIAAABIABgBIAAgBIAAgBIABAAIAAgCIAAgDIABgEIAAgDIgDgCQgGgEgIgBIgJAAIgCAAIgEABIAAAAIAFgBIABgBIABAAIADAAIALABIAJADIADACIABAKIgEALIgDADIgGAHIgCABIgWAIIgCAAIgbAKIgIACIgBgBgAgeANIgDACIAIgDIAFgBIgBAAgAAcgDIgBABIACgCgAAkgOIAAAAIAAgBIAAAAgAACgPIABgBIgBAAgAAHgRIACgBIgDACg");
	this.shape_85.setTransform(327.6304,208.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#996633").s().p("AAnAdIgBgGIACgEIACgDIAAAAIgBABIgBABIgDAGIAAAEIAAAAIgBgDIAAAAIgBAAIAAAAIAAABIAAgBIACgGIgBAAIAAABIgBAEIAAgDIgCAFIABABIgBAAIAAAAIgBgBIABgDIAAAAIgBAEIAAABIgBgBQABgFABgDIAAgDQAAABgBAAQAAAAAAABQAAAAAAABQgBABAAAAIAAAFIAAgEIABgEIgCAHIAAABIAAgBIABgIIAAAAIAAgBIABgBIABgBIAAAAIABAAIAAgBIABgBIAAAAIAAgCIAAAAIgCACIAAAAIgBABIgBACIgCAHIABgIIAAgBIAFgHIgIAAIAAgBIAAAAIAIAAIABgBIgCAAIgDgBIgCAAIgBAAIACAAIAAgBIABAAIgBgBIAAAAIADAAIgDAAIgBAAIABAAIgBgBIADAAIgCAAIgBgBIgBAAIAAAAIgCAAIgBAAIgCAAIAAgBIgBAAIAAABIgBAAIAAgBIgBAAIAAAAIgGABIABABIgBABIACgBIABAAIgBABIgPAAIABABIABAAIAMgBIgGAAIADAAIAHAAIABAAIABAAIgBAAIgHABIgBAAIAAABIAKgCQgIADgLABIgFABIABAAIAHgBIgFABIAHAAIAHgCIABAAIAAABIgPACIgBAAIAAABIgBgBIgFAAIgCAAIgHAAIAAABIgCAAIACAAIAPAAIAKgBIAAAAQgIACgFABIgDAAIAAAAIgmABIgEABIgSAAQgGABAAgDQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIgCAAIgEgBIgEgDIAAAAIAAAAIgCgBIAAgBIACgBIAAAAIgBgBIABAAIgBAAIgCgBIgBAAIgBgBIABAAIgBAAIAAgBIABAAIAAAAIAHAAIABAAIgEgBIgBAAIgBAAIAAAAIgCAAIABAAIgCAAIAAgBIAEAAIAAAAIgCAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQABAAAAAAIAHgBIABAAIgBAAIAGABIABAAIAAAAIAIABIACABIAAgBIABABIgBgBIAKABIAAAAIABAAIgBAAIAEgBIACAAIAJABIASAAIABABIgJAAIgBAAIAAABIAYAAIALgBIALgDIAAAAIABAAIgBAAIgBAAIgBgBIAAAAIACAAIABABIABAAIAAgBIgBAAIAAAAIgBgBIAAgBIAAAAIABgBIAAAAIABAAIABABIAAAAIAAgBIAAAAIgBAAIAAgBIAAgBIAAAAIABABIAAAAIAAgCIABABIAAgBIAAAAIAAAAIAAgBIABAAIAAAAIgBAAIgBgBIAAAAIAAgBIAAAAIgBABIAAABIAAAAIgBABIAAAAIgBABIAAAAIAAAAIAAABIAAAAIAAAAIgBABIAAAAIAAABIgBAAIAAgBIAAABIgBAAIABAAIAAABIAAAAIAAAAIAAAAIgBgBIAAABIAAAAIAAAAIAAAAIABAAIgBAAIgBAAIAAAAIgBAAIABABIgBAAIAAAAIgBgBIAAABIgEABIgGAAIgBgBIgBAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIgBgCIAAAAIAAgBIAAAAIAAAAIAAAAIAAAAIAAgEIABAAIgBAAIAAgBIAAAAIAAgCIABAAIgBAAIAAAAIAAgCIAAAAIAAgBIAAgBIABgBIABAAIABACIABAAIABABIAAgBIABAAIAFgBIAGAAIAGACQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgBABIAAAAIAAABIAAAAIAAAAIAAAAIACAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABIABAAIAAAAIACACIABAAIAFACIAAABIAAgBIAFACIADAAIgBgBIACAAIADACIAKABIgGAAIAFABIAJABIASgCIABAMIgBABQAAAAAAgBIgCgLIgFABIgOAAIgCAAIgBABIADAAIAHAAIAEABIADgBIAFAAIAAAFIAAACIgBgGIgEAAIgBAAIABABIgBAAIABAAIAAABIgDAAIADAAIACABIAAACIAAAAIgBABIgBgBIAAAAIAAAAIAAAAIAAAAIgBAAIABAAIgBgBIAAABIAAgBIgBAAIAAAAIABABIAAABIAAAAIAAAAIAAABIAAAAIABABIAAACIAAAAIAAAAIAAAAIAAABIAAAAIABAAIAAACIABAAIAAAAIgBABIAAgBIgBAAIAAABIgBAAIABAAIABAAIAAAAIAAAAIABAAIAAABIgBAAIAAABQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAgBgBAAIAAABIgBgBIAAgBIgBAAIgCABIgEACQAAAAAAABQgBAAAAgBQAAAAAAAAQAAgBAAAAIgBgCIAAAAIAAgBIAAgBIgCABIgBAAIAAAAIAAAAIAAABIAAAAIAAgBIAAABIAAgBIADABIgCAAIAAABIgBAAIAAAAIABABIgBABIAAABIAAAAIAAAAIgBAAIAAAAIgBAAIgBgBIgBABQAAAAgBgBIAAAAIgBABIgBAAIAAAAIgBAAIABAAIgCgBIAAAAIgCAAIgBABIABAAIgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIgEAEIAAAAIACgDIgDACIAAAAIgCACIAAAAIAAABIgBABIAAABIgBAAIgBAEIAAAEIAAABgAA8AJIAAAAIAAAAIgBgBgABMAGIABAAIAAgBIAAAAgABBAEIAAABIACAAIAAAAIAAgBIgBAAgAAIgDIgIABIALAAIAJgCIAAAAIAAAAIABgBIgBgBQgGADgGAAgABAgDIAAAAIAAAAgAg/gEIAAgBIgIAAIAAAAIgBAAIAEAAIAEABIABAAgAAVgGIAAABIAAgBIAAAAgABNgGIAAAAIAAAAgAAMgKIAAAAIACAAIgBgBIgBAAIAAABIAAAAgAAPgKIAAAAIAAAAgAAYgOIAAAAIAAAAgAAdgRIgCgBIgBAAIAAAAIgBAAIAAgBIgBAAIAAAAIAAABIgBgBIAAABIAAAAIABAAIABAAIABABIADAAIAAAAgAAXgRIAAAAIAAgBgAAfgSIABAAIgBgBIAAAAIgBAAgAABgXIAAAAIABAAIAAAAIgBgBIAAAAIAAABIAAgBgAAIgYIABAAIAAAAIAAgBIgEAAgAAEgYIAAAAIABAAIgBAAgAACgZIACABIAAAAIgBgBIgBAAgABNgFgAAAgIIgBAAIAAAAIgBgBIgCgBIgBAAIgBgBIgBABIAAAAIgBAAIgBgBIgFAAIAAAAIADgBIgCAAIgDAAIgDABIgEAAIgBAAIABgBIAIgBIABAAIAAAAIgEAAIgCgBIgCAAIABAAIAAgBIABgBIABAAIACAAIAAgBIgGABIACAAIADgBIgDAAIgBAAIABgBIABAAIgCgBIAFAAIABgCIgFACIAAgBIADAAIABgBIgDABIAAgBIADgBIABAAIABAAIAAAAIABgBIAAAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAIAAAAIACgDIADgBIAEgBIAFgBQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAABIABABIAAABIACADIAAAFIAAAAIAAABIAAABIAAAAIgBAAIgBAAIABABIABgBIAAABIAAAAIAAABIAAAAIAAAAIAAACIAAABIAAAAgAgCgKIAAgBIgBAAIgBAAgAAUgMIABAAIAAAAIACABIgDgBgAA8gOIAIABIAAAAg");
	this.shape_86.setTransform(319.7,207.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#996633").s().p("AAuAMQgEgHgDgDIgLgGIAAAAIAAAAIACABIAGAFQAFAFACADIgFgFIAAAAIgBAAIABABIAAABIgFgFIgGgDIAAABIABAAQAGACADAEIABABQgDgEgFgCQAGADACAFIABABIAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBgBIgEgFIAAAAIAEAHIAAAAIAAAAIgFgGIgGgEIgCgBIAAAAIgDAAIABAAIACABIAFADIADACIgEgCIgFgDIABAAIgBAAQAFACAFAEIAAABIgBAAQgEgEgFgCIgCAAIgFgCIgGAAIABAAIgCAAIACABIACAAIAKACIAAgBIAFADIAAABIgGgCIABAAIgEgBIgNAAIglADQgFAAgBgCIABgBIgBAAIgDgBIgBgBIgDgCIAAAAIAAAAIgBgBIABgBIAAgBIAAgBIAAAAIAAgBIgCAAIAAAAIgBgBIAAgBIgBAAIAAAAIABAAIABAAIAAAAIABAAIABAAIABAAIACAAIABAAIABAAIgEgBIAAAAIgBAAIAAAAIgCAAIAAAAIgBAAIAAgBIABAAIABgBQgBAAAAAAQgBgBAAAAQAAAAAAAAQABgBAAAAIABAAIACAAIACAAIACAAIgBAAIAEABIABAAIAAAAIAGACIALAAIAEgBIgCAAIADAAIAHABIALgBIAEAAIABAAIgFAAIgGABIALAAIARAEIABAAIAHAEQADABADAEQADADACAFQAAAAAAAAQABABAAAAQAAAAgBAAQAAAAAAAAIgBgBgAgkgJIAEABIADAAIAAgBIgGAAIAAAAgAAnAKIAAgBIABABg");
	this.shape_87.setTransform(311.8625,205.425);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#996633").s().p("AACAcIgCACIgCAAIgBAAIAAgCIAAAAIgBgBIAAgBIgBAAIgBgBIAAAAIAAgBIAAABIAAgBIAAAAIAAAAIAAgBIAAAAIgBAAIgBAAIAAgBIACgBIgBgBIAAAAIgBAAIABAAIABgDIgBAAIABAAIgBAAIABgEIAAgCIAAAAIgBgBQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIAAgHIAAgDIAAAAIAAACIAAAEIAAAAIAAgBIABgCIAAgCIAAgBIACgIIAFgQIAAAAIABABIgGATIgBADIABAAIAAgDIACgHIADgEIABgFIAAgBIABABIgBACIgBABIABAAIAAABIABgBIAAAAIAAAAIABgBIABAAIAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAIgBADIAAAAIADgEIgEAJIAAADIABAAIADgKIgDAJIADgHIABAAIgDAHIAAACIgBADIAAAEIAAAAIAAAAIAAAAIAAgBIABgBIACgKIABAAIgBAOIAAABIAAADIAAAAIAAAUIgBADIABgDIgBACIgCABIgBgBIAAABIgCADIgBABIgBAAgAgFAaIABAAIgBAAIAAgBIAAAAgAgFAZIAAAAIAAAAgAgFAXIAAAAIAAAAgAgFAXIAAAAIAAAAIgBAAgAgFADIAAABIAAAAIAAgBg");
	this.shape_88.setTransform(391.6,370.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#996633").s().p("AALAJIAAAAIgDgBIAAgBIAAABIgDgBIAAAAIAAAAIgBABIgCgCIgEABIAAAAIAAgBIADAAIgCgBIgEAAIgIACIAAAAIAAgBQAGgCADABIABAAIAAgBIgEAAIgCAAIgDAAIACgBIAAgBIgBAAIAAAAIAFAAIAAgBIgBAAIgBAAIABAAIgCABIABgBIgEAAIABAAIgBgBIABAAIACAAIgDAAIAAAAIAAAAIAFgBIACgBIgGABIAFgBIgEAAIAEgBIAAgBIABAAIABABIAAAAIACgBIAAgBIgBAAIgGACIAEgDIAEgCIALgBQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAAABIAAAAIABABIAAABIABACIAAAAIABABIAAABIgBAAIAAACIABABIAAAAIAAACIgBAAIgBAAIABAAIAAAAIAAAAIABAAIAAABIAAAAIAAABIAAAAIAAACIgBABIgBAAIAAAAgAAJAHIACAAIAAAAIgBAAIgBgBIgBAAgAgLACIACAAIgCAAg");
	this.shape_89.setTransform(390.15,374.975);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#996633").s().p("AgOAiIAAAAIAFgLIgBADIgCACIgCADIgBAAIABgCIAAgBIAAAAIgBAAIAAAAIAAAAIAAAAIAAAAIgBABIAAAAIgBAAIAAgBIABgCIAAAAIgCACIAAAAIACgGIAAgCIgCAGIAAAAIACgFIgCAEIgBABIAAgBIACgFIAAAAIABgCIAAgDIAAAAIgCAEIABgBIgCAFIAAgGIAAABIABgGIACgDIgMAEIgUACIAGgNIAHgJIAHgIIAIgGIAKgGIAKgGIABAAIAFAAQAGgBABACQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIACAAIADABIABABIAEADIABABIAAABIgBAAIAAABIAAAAIAAABIABABIAAABIAAABIAFgDIAAAAIABAAIACgCIAAAAIABAAIAAAAIABgBIgGACIAAAAIAAAAIAKgEIAAgBIABAAIAEADIgBAAIgCgEIABACIgBgCIgBAAIgDABIgBAAIgBABIgDABIAHgEIACAAIACACIABABIABABIAAAAIADAHIgFACIgDADIAAABIABgBIAJgGIgJgLIAEACIAHAIIgNALIgJAGIgMAHQgBAAgBABQAAAAgBAAQAAAAgBAAQAAgBAAAAIAAgCIgBAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIAAAAIgBABIAAAAIgBAAIAAgBIgBgBIgCAAIAAgCIgBAAIAAAAIABgBIgBAAIgBABIABgCIgBAAIgBABIAAgBIAAAAIgBAAIAAAAIAAAAIAAgBIABAAIAAAAIAAgBIABAAIAAAAIAAgBIABAAIgBAAIABgBIgBABIAAAAIgBAAIAAAAIAAAAIAAAAIAAABIAAAAIAAAAIgCABIAAgBQgIAEgIACIgEAAIABAAIASgGIABgBIABgBIgCABIAAgCIADgCIABAAIAAgBIABgDIgCABIgCABIgBABIgBAAIgBABIgCABIACgBIgDACIgHADIgBABIgFAEIAAABIgBAAIADgEIgDAEIAAAAIgBAAIABAAIgBABIABAAIAIgBIADAAIABgBQAAgBAAAAQABAAAAAAQABgBAAAAQAAABABAAIABAAIACgBIgCABIAAABIAAAAIABgBIABAAIADABIAAAAIABAAIAAABIAAAAIAAAAIACABIAAAAIAAAAIABAAIABAAIABAAIAAABIgBAAIAAAAIABAAIAAAAIABABIAAABIACABIAAABIgBABIgCABIgBAAIgCABIAAAAIgBAAIABABIgCACIAAABIAAAAIAAABIgCABIgDAFIABgEIgCADIAAAAIAAABIgCADIAAABIAAAAIgDAHIgCADIgBABIAAgBgAgNAYIgBAEIACgEIgBgBgAgmAAIgBACIgBABIgGAJIALAAQAJAAAKgEIABAAIgBAAIgHABIgBABIgBAAIgJAAIgBABIgIABIAEgIIABgDIACgBIgBAAIAAgBIAAABIgBAAgAgYAJIAJgCIAAgBIAAAAIAAAAIABgBIgHACIgGACIABAAIAHgCgAACAHIAAABIACgBIAAgBgAADAEIAAAAIABAAIAAAAIABgBIgBABIAAgBIAAgBIAAAAIAAABIAAAAIAAABIgBAAIAAgBgAgYAEIABAAIABAAIADgBIAGgBIABgBgAACgHIAAAAIAAABIAAAAIAAgBIAAAAIAAAAgAAEgNIgBAAIAAABIABAAIAAAAIABgBIgBAAIAAgBIAAAAgAAYgTIAAAAIABAAIADgCIAAAAgAAkgVIAAAAIABAAIgBgBgAAggWIABAAIgBgBgAAjgYIABAAIAAgBgAgWAAgAAcgXIACgBIgDACgAAkgfIABgBIABABIgGACg");
	this.shape_90.setTransform(393.075,373.4708);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#996633").s().p("AgSAQIAAgCIgBAAIgBAAIgBAAIgCgCIAAgBIgBAAIAAgDIgBgBIAAAAIgBAAIgBgBIAAgBIgBAAIAAAAIABAAIABgBIACAAIAAAAIABgBIABAAIgBAAIgCAAIAAAAIABAAIAAABIgBAAIgBAAIgBAAIgBAAIAAgBIABgBIAAAAIAAAAIgBAAIAAgBIAAgBIABAAIACAAIABAAIADAAIAAAAIAFAAIACAAIAFAAIAAAAIABgBIACAAQABgBABAAQAAAAABAAQAAAAABAAQAAABABAAIAGgDIgFADIAEgCIABAAIABAAIAGgEIABgBIANgIIABAAIAAABIgNAIIACAAIAKgFIgEACIABABIgBAAIABAAIABAAIgBAAIgHAFIABAAIAGgEIAGgDIgEACIABAAIAAAAIAAAAIAAABIgDACIgBAAIAFgCIAAABIgIAFIgCACIAAAAIADgBIgCABIAHgEIgGAEIgBABIgBAAIAAAAIAAAAIgBABIgCAAIAAABIgDACIAAAAIgBABIACgBIABAAIADgCIABgBIAAAAIABAAIAFgEIAAABIgDADIgCABIAAAAQgEAEgEACIgJAEIgBABIgOADIgCAAIgCgBgAgaAEIABgBIgBAAIAAAAgAgVABIgBAAIAEAAIACAAIAAgBIgBAAg");
	this.shape_91.setTransform(392.475,373.0333);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#996633").s().p("Ag0AxQgIgMgCgKIgEgMIAIACIgFgGIgDgEIgBgCIAAgBIAAAAIgBgBIAAgBIAAAAIAAgBIgBgBIAAgDIAAgNIgBgFIAAgCIAAgBIgCgDIgMgPIB3AAIgEgDIgCgCIgHgFIAAAAIAAAAIgFgDIABAAQAAgBABAAQAAAAAAAAQABAAABABQAAAAABAAIABAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABAAIABABIgCgCIgGgCIgDgCIgBgCIAAAAIgEgBIAAgBIACAAIAEADIABAAIABAAIgBAAIAOAGIAAAAIACABIgMgGIADABIAAAAIgGgDQgBAAABAAIADACIgCgBIgEgCIgBgBIAAgBIAKAEIgJgFIABAAIACAAIAFACIAFACQAGACAGAEIAAAAIACABIAAAAIABABIAQALIAGAEIABABIACACIATAQIgZgBIgUgBIgNgBIABABIg5gBIgagBIgBAAIAAABIAAATIABADIAAACIAAgBIAAABIAAAAIAAAAIAAAAIABgBIAAABIAAAAIABAAIAAABIABAAIADAEIACADIACABIAAAAIABABIgBAAIgCgCIgHgHIAAAAIAAAAIAAAAIADAEIAPAOIABAAIAAABIAMANIgMAAIgGgBIAAAAIgBAAIgEgBIgCAAIgBAAIABABIAAABIAFAKIAAAAIABgBIABAAIACgBIAIgBIAIgBIAUABIADABIADAAIABgBIABAAIACAAIAEgCIAAgBIABAAIAAgBIABgBIAAgBIAAAAIABABIgBABIgBACIgBAAIgEADIgFABIgYgBQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBABgBAAIgHAAIgHACIAAAAIgBABIAAABIABACIABgBIABAAIADgBQAHgBAHAAIgFAAIgDABIgBAAIgFABIAFgBIAKAAIAUABIABAAIAAAAIABAAIAAAAIADAAIgBABIAEgBIgCABIgDABIgbgCIgDAAIAfACIAHgBIACgBIgBABIgHACIgggCIgHABIgBABIAAAAIAAAAIAAAAIABAAIABAAIgBAAIADgBIAGAAIgGABIgCAAIAAAAIAAABIAAAAIAGAMIgBAAIABACIgJAGQgJgJgGgLgAgkBCIABACIAGgEIgBgCIAAABIAAABIAAgBIAAAAIgBAAIAAAAIABABIgDACIgBgBIAAAAIABABIACgCIAAAAIAAAAIgBAAIABAAIgCABIAAAAIgBAAIAAAAIgBAAIABAAIgCABIACABIgCgBgAg8AbQADANAHAJQAFAKAHAHIgBgCIgEgFIgEgFQgHgLgEgMIgDgMIAHACIAAAAIgCgCIgHgBgAggA6IgCgDIAAgBIgDgDIABAAIABABIgBgBIABgBIACAFIAAAAIACADIgDgIIgBAAIgBAAIABAAIAAAAIAAgBIgBAAIgBAAIABABIgBABIAAAAIAAAAIABADIABABIADADgAgmAyIAAAAIAAgBgAgmAxIgBAAIAAAAIABAAIAAAAIABAAIAAAAIAAgBIgBAAIgBABIAAgBIAAABIAAAAgAgnAvIgBABIABAAIAAAAIAAAAIAAgBIAAAAgAgpAuIAAABIABgBIAAAAgAgmAtIABABIAAgBgAgyAYIABABIAAgBIAAAAgAA7gqIAAAAIgEgCgAAig3IABABIAIAEIgBAAIgKgHIgGgDIgBAAgAAgg3IABAAIABABIAAAAIgDgCgAgiBBgAADAtIAFgBIgEABIgBAAIAAAAgAgIAsIACAAIAAAAIAFABg");
	this.shape_92.setTransform(387.9,371.325);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#996633").s().p("Ag2AXIAAABIAAgBIAAABIgBgIIAAgBIACABIACABIAFAAIABAAIACAAIAFgBIAGgBIABgBIAAAAIADgBIACgBIABgBIAAAAIABAAIAAgBIABAAIAEgGIAAgBIAAAAIAAAAIABgBIACgCIABgBIgBAAIAAAAIACgBIACgCIAJgHIACABIAAAAIAAAAIABABIAAAAIAAAAIAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIAAAAIAAAAIAAABIAAABIAAAAIABABIABAAIABAAIABABIgBAAIABABIABAAIAAAAIgDAAIgBAAIgDAAIAAgBIgBAAIABAAIgBAAIgBAAIAAAAIAAAAIAAAAIABAAIgBABIABAAIAAABIABAAIACAAIAAAAIABAAIABAAQABAAgBAAIgBgBIAAAAIADABIAAABIgEAAIABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAIgBABIgGAAIgBgBIABABIgBAAIAAAAIgBAAIAAgBIAAAAIAAABIAAAAIgCgBIgDAEIABgBIACgDIgBAAIgDADIgBACIgCABIgEAGIgBABIgBAAIABgBIABgBIACgCIACgDIABgBIAEgFIAAAAIgDAAIgKALIAAAAIAAAAIgLAFIgBAAIACAAIgEACIgDABIgHABIgDACIgCACgAgEgBIAAAAIAAAAgAgyAQIgFgBIAAAAIAFABIAGAAIAAAAgAgNAKIAAgBIABAAIAAgBIAAAAIAAAAIACgCIADgEIgEAFIgBABIAAABIAAAAIgBABIgDAEgAAHAAIAAAAIAAAAIgCAAIgBAAIgBAAIABAAIACgBIAAAAIAAgCIgCABIABgBIAAgBIAAgBIAAgCIgBAAIAAgCIAAAAIAAAAIgBgBIAAgBIAAAAIABAAIAAgBIgBgBIAAAAIAAAAIAAgBIgBgCQAAgBABABIABABIABABIABAAIAAgBIABABIABAAIABgBIABAAIAAgBIAAAAIAAAAIABABIAAAAIABAAIAAAAIgBAAIAAABIAAAAIABAAIABgBIACgBIABAAIAAAAIAAgBIgBAAIgBgCIADgBIACABIAAAAIADAAIABAAIAAAAIABAAIgBAAIAEAAIABgBIAAAAIABgBIADABIAGgCIABAAIAAABIgDAAIgCABIAEAAIABAAIAAgBIADAAIACAAIAFgCIAHgBIAAABIAAAAIgOADIgCAAIAAAAIACAAIAFgBIADABIAEgBIgDABIAAABIAAAAIABAAIAAABIAEAAIgDAAIgFABIAFgBIAAAAIABABIgBAAIgCABIgBAAIAEAAIgHACIgBABIADgBIgCABIAEgBIABAAIgFACIgBABIgDAAIgCABIAAAAIACAAIAHgCIgEADIgGADIgGACIgIACQgBAAAAABQAAAAAAAAQgBgBAAAAQAAAAgBAAIAAgBIAAABIAAAAIgBAAIgBAAIgBABIgCAAIAAAAIAAAAIgBABIgCAAIAAAAIAAAAIAAAAIgCAAIAAAAIgBABIgBAAIgDABgAASgCIABAAIABgBIAAAAIABAAIAAgBIgBABIgBAAgAAUgFIABgBIgBAAIAAAAgAAOgKIABAAIABAAIAAABIAAAAIABAAIABABIAAAAIABAAIgBAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIAAgCIgBAAIABAAIgCAAIAAgBIgBgBIAAAAIACAAIgBgBIAAAAIAAgBIgBAAIgDADIAAAAIABAAIABAAIABgBIAAABIgBAAIABABIAAABIgBAAIAAABIAAAAIABgBgAAEgOIABABIgBgBIAAAAgAARgPIABAAIAAAAIAAAAIAAgBIgBAAgAASgRIACgBIgBAAgAAAgCIAAAAIAAABg");
	this.shape_93.setTransform(384.975,366.825);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#996633").s().p("AgPASIgCgBIABgCIgBAAIgBAAIgBAAIgBgBIgBgBIgBgBIAAgBIAAgBIAAAAIABgBIAAgDIgBgBIAAgCIAAAAIAAABIACAAIAAAAIAAAAIABAAIAAgBIAAAAIgBAAIgBAAIAAAAIAAAAIgBgBIAAAAIABgBIAAgBIABAAIAAAAIAAAAIABAAIAAAAIABAAIABAAIACABQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAgBIAAAAIAEAAIABgBIgBAAIABAAIACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIACgBIABgBIADgDIAAAAIgBADIgDABIACAAIABgBIABgBIAAgBIABAAIALgHIAIgEIABAAIgBAAIgRALIAAAAIACgBIAFgDIAJgEIgDACIAAABIAAAAIABAAIAAAAIgHAEIABAAIABAAIAKgGIgDACIgGADIAFgCIABgBIABABIgBAAIgDACIAAAAIAEgBIABAAIgIAEIgCADIABAAIAHgGIgGAFIAFgDIABAAIgGAEIAAABIgBAAIgCABIgDACIAAAAIAAABIABgBIABgBIAIgFIgEAEIgHAHIgBAAIAAABIgBAAIgBABIgCABIgBABIgBABIgFADIgJADgAgSAFIABgBIAAAAIgBAAgAgSACIADAAIgCgBIgBAAgAgDgCIgBABIACgBIAAgBg");
	this.shape_94.setTransform(388.175,367.275);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#996633").s().p("AgGAYIAAAAIABgBIgBAAIABAAIAAgBIAAAAIAAAAIAAAAIAAgBIAAgBIgBACIAAAAIAAAAIAAAAIgBAAIAAABIAAgBIAAAAIgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAAAAIAAgBIACgCIACgDIAAgBIAAgBIAAABIABgEIAAgCIAAAAIAAgBIACgDIABgHIAAAAIAAAFIABgEIAAgBIABgGIAAgNIAAAAIABAAIgBAQIAAACIAAAAIAAgCIABgGIABgDIAAgFIABAAIAAAEIAAgBIABABIAAgBIAAADIAAAEIAAgBIAAAAIAAgBIABgGIAAgBIABAAIAAABIAAAEIABgFIABAAIgBAIIABADIAAgJIAAABIAAAHIABgGIAAgBIAAAAIAAAHIABABIgBAAIAAADIAAADIAAAAIAAABIABgBIAAgBIAAgKIAAAAIACAHIgBAOIgCAMQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgBgBIAAAAIgCABIgDACIAAgBIAAAAIgBABIAAAAIgBgBIAAAAQAAAAAAAAQAAABAAAAQgBAAAAgBQAAAAAAAAIgBAAIAAAAIgBABIgBAAIAAAAgAgGAPIgBADIAAABIABgDIABgBIAAgBgAgGAXIAAgBIAAABgAAFgXIAAADIAAABIgBAGIABgKg");
	this.shape_95.setTransform(379.03,370.45);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#996633").s().p("AAWCfIAAgJIgEgqIgDgaIgBAAIAAgBIAEAbIABAhIABALIgBgLIAAgEIgBACIAAgCIAAADIAAACIAAgCIgBgFIgCgZIAAAFIABALIAAABIgBgHIABAMIABADIAAAKIAAACIAAAAIAAADIgBgHIgBgLIAAgBIAAAUIAAgEIAAgFIgDgaIgCgLIAAABIABAKIgBgGIADAcIAAABIABAEIAAABIgBgBIAAgDIAAgBIAAAAIgEgcIAAgBIgBgDIAAgBIgBgNIgBgDIgCgKIAAAAIAAgCIgBgBIABAEIAAABIABAEIAGApIAAAAIgaiMQgCgKABgCQAAAAABAAQAAAAAAAAQABABAAAAQAAABABABIgBgCIAAgCQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgCIACgIIAAAAIAAAAIABgDIACACIAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAABIABAAIAAgGIABgBIAAgCIAAAAIAAAAIABABIAAABIgBABIABABIAAACIAAABIABAEIgBAAIABABIAAABIAAABIAAAAIABADIAAACIAAgBIgBgJIAAAAIAAgBIgBAAIAAgDIAAgEIABAAIABAEIABgEQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIABALIABAMIAAADIABANIABAEIAAACIAAgBIADARIAAABIABAGIAAgCIABADIgBgBIABAEQACANAAADIAFAiQAAAAAAAAQABAAAAAAQAAABgBAAQAAAAAAAAIAAgBIgEgYIADAXIAAADIAJBKIAAAIIAAADIgBAAIAAgCgAAAgSIAAAHIABgBIAAAAIgBgOIgBgDIABALgAARCMIgBgLIABAGIAAADIABAFgAARCHgAgPgzIAAgCIAAgBIAAgBIABgCIAAgBIAAgEIAAgIIgBAHIAAACIAAABIAAAAIAAAAIAAAAIAAgCIgBAEIAAADIABAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAIgBAAQgBgCABgDIAAABQgCAHAAgFIAAgFIABgGIgBAAIABgDIgBACIACgKIAAgBIgCgZIAAAAIAAgEIAAgbIAAgBIAAACIgBAAIAAALIACAkIAAABIAAgBIgDgZQgCgRACgSIACgOIARABIACAXQADAZgBAZIAAAEIgBAEQAAAAAAABQgBABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAABIAAACIgBAEIgBACIgDAJIgBgBIAAABIgBACIAAAAIgBgCIgBgBIAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgBAAIAAABIAAACIgBACIgBABIAAAAIgBABIAAABgAgOhHIAAAAIgBgEgAgQhPIAAgCIAAgBIgCgVIACAYg");
	this.shape_96.setTransform(493.1375,247.7292);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#996633").s().p("AAGAOQgCgGABgDIAAgBIgBAAIAAAEIAAADIAAADIgBgCIAAAAIgBgBIAAABIAAAAIAAgEIgBAAIAAAAIAAACIAAADIAAAAIgBAAIAAAAIAAgCIAAACIAAABIAAgBIgBgEIgBgCIAAABIAAAEIgBgEIgBgBIABgCIAAAAIgBgCIgBAAIAAABQAAAEACACIAAAAIgDgDIgCgFIgBgLQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIABABIAAgBIABAAIABgBIACgBIAAAAIABAAIABAAIAAAAIACAAIABAAIAAgBIACAAIAAACIAAAAIAAABIAAgBIAAgBIAAAAIAAAAIABAAIAAAAIAAAAIABAAIAAAAIAAAAIACgBQABABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAABIgCABIAAACIgBABIABAAIgBACIAAABIAAAAIABABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIABAEIgBAAIAAgDIgBACIAAAFIACAHIAAABgAAHgJIgBABIABAAIAAgCIAAgBIAAAAIAAACg");
	this.shape_97.setTransform(492.7307,239.975);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#996633").s().p("AAYBdQgBgBAAgEIAAgBIAAgFIAAgBQAAAAgBgBQAAgBAAAAQAAAAAAAAQABAAAAAAIAAgFIAAgEIAAABIgBgJIgBgEIAAABIAAgDQgBgFABgCIgDgRIADAMIgBgKIAAgCIgBgBIgBgHIAAgBIAAgBIgHAAIgBABIgBgCIAAgCIgBAAIAAgBIgBgCIAAAAIgBgBIAAgCIAAAAIAAgBIgBAAIAAAAIAAgBIAAAAIgBAAIAAAAIAAABIAAAAIAAAAIgCgEIgBAAIAAAAIABADIgCgCIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAACIAAAAIAAAAIAAAAIABABIAAAAIAAABIgBAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAAAIgBAAIgBgCIAAAAIACAGIgCgDIAAgBIgBgCIgDgGIgDgDIADAGIgDgFIAGALIAAAAIgBAAIgFgLIgBAAIAAgBIAAAAIgBgCIgBgDIgCgFIgBAAIAAgBIABAEQACAHAFAIIAAAAIgGgIIgGgOIgDgPIgDgVQAAgEACgBIACABIAAgBIABgDIAAAAIABgBIAAgBIgCgDIAAAAIABAAIABADIACgBIgBgBIAAgBIAAAAIABABIABAAIAAgBIgCgBIgCgCIAAAAIgBAAIABAAIgBgBIABAAIAAABIAAAAIABAAIAAgBIgCgCIgBAAIACACIgEgCIgEgDIgDgFIgJgRIARABQADAAAEACQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgBABIAAAAIAAAAIABACIAAAAIgBADIAAAAIAAABIgBABIAAABIACAAIABgBIABABIAAAAIAAgBIABAAIAAAAIgBAAIAAgBIABAAIACABIAAgBIAAAAIAAAAIACAAIABAAIABAAIAFAEIACAFIABACIABACQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAIgBABIABAAIABAAIABABIAAgBIABAAIABABIAAABIAAABIAAAAIABACIAAAAIACACIABAAIABACIAAAAIAAABIAEACIAAAAIAAAAIgDgBIACACIAAAAIAAAAIAEACIAOAEIgMAFIABAFIAAABIAAABIABAGIAAACIABABIAAABIAAACIAAACIAAABIgBABIgIgBIABABIACABIACAFQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCAAIAAAAIgBABIgCABIgBABIgBABIABAAIgBAAIABAAIgBABIACADIAAABIABABIAAgBIAAAAIAAgBIAAAAIgBgCIAAAAIABABIACACIAAAAIAAAAIgBgBIAAgBIABABIABABIAAgBIABACIABACIACACIgBgBIADAEIADAHQgBgGgEgFIAAAAIgBgCIgBAAIABAAIACACQADAFACAGIAAAAIABACIAAAIIACAFIAAABIAAgCIgBgEIgBgJQgCgGgCgEIAAAAIAEAGIACAHIABAGIAAgBIAKA0QABAGgCABIgCgCIAAABIABABIgBADIgCAFIgBABIgBAAIgBgBIAAAAIgCABIAAAAIAAACIgCABIAAABIAAAAIAAAAIgBgBIABgBIgBgBIAAgDIAAgBIgBgCIAAAEIAAABIAAAAIAAAAIAAACIAAAAIgBgBIAAAAIAAAAIAAABIAAAAIgBADIgBgCgAAYBKIAAABIABAHIAAABIAAgFIAAgEgAAVAuIABACIgBgHgAATAXIAAACIABADIAAAAIAAgEIgBgBIAAgBIAAAAIAAABgAAUADIAAACIAGAKIgCgHIgEgGgAgCAIIABABIABABIAAAAIAAAAIAAgBIgBAAIAAgBIAAAAgAAAAJIAAgBIgBAAgAABAHIAAAAIABAAIgBgBgAAQAAIABABIAAAAIAAgBIAAAAIgBgBgAAKgCIAAABIAAAAIAAgBIAAAAgAAPgCIAAAAIAAAAgAALgFIAAABIAAgBgAgEgKIAAgBIgBAAgAgFgQIAAABIABABIAAABIAAAAIAAgCIgBgEIgBgFgAAAgNIAAAAIAAgBIAAAAgAgDgOIAAAAIABAAIAAgBIABgBIgBAAIAAAAIAAAAIABgBIgBAAIABgBIgBAAIAAgBIAAgCIABAAIABABIAAgBIgBgBIAAAAIABAAIgBgBIAAABIgCABIgBgBIAAAAIAAgCIAAAAIAAAAIAAgCIAAgBIAAgBIgBgBIgBAAIAAAAIAAABIAAAEIABADIABADIABADIAAAAgAgCgOIABAAIAAgBgAANgQIABgBIgBAAgAAAgVIAAAAIAAAAgAAAgWIAAABIAAgBIAAAAgAADgXIAAAAIAAAAgAACgYIgBABIAAAAIABAAIABgBIgBgBgAAFgYIAAAAIAAAAgAADgYIABAAIAAAAIgBAAIAAgBIAAAAIAAABgAgDgYIABAAIAAgBIgBAAgAgDgZIAAAAIABgBIAAAAIgBAAgAgGgeIAAgBIAAAAgAgHgkIABAAIgBgBgAASgpIAAACIAAAAIABACIAAgCIAAgBIgBgBgAANgzIgBABIABAAIAAAAIAAgCgAAFg9IABABIgBgBgAABhBIAAgBIAAAAgAgShDIAAgBIAAAAIgBgCIgCAAIADADgAgThDIABAAIgBgBgAgPhGIgBgBIAAAAgAgQhHIgBAAIAAAAgAgGhPIgBAAIABAAIAAAAIACACIAAgBIgCgBgAgOhOIABgBIAAAAIAAAAgAgKhPIABgBIAAAAgAgLhQIABAAIAAAAIAAAAgAgJhQIABAAIAAAAIAAAAIAAAAIAAgBIgBABIABAAgAAAAOIgBgDIABABIAAABIAAAAIAAABIAAAAQAAAAAAAAQABABAAAAQAAAAgBAAQAAAAAAAAgAADAMIgBgBIACABIgBAAgAACAKIABABIAAAAgAABAKIAAgBIAAABgAgVhCIAAAAIAAAAg");
	this.shape_98.setTransform(492.2417,225.2111);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#996633").s().p("AgGBAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIACABIAAgBIAAgBIADgDIAAAAIAAAAIADAAIABAAIAAgBIAAgBIABAAIABAAIAAgBIAAAAIABABIgBAAIAAABIABAAIgBAAIAAABIABAAIAAgBIAAgBIAAABIAAABIAAAAIAAAAIAAAAIAAgBIAAAAIAAAAIAAAAIABAAIgBgBIAAAAIAAgBIABAAIABABQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIABADIgBACIABAAIACADIACACIABADIAAAGIgBABIgBADIgPAQgAALA8IAAAAIABACIABACIAAADIABABIAAAEIAAABIAAAAIAAgBIABgBIAAgFIgCgDIgBgDIgBgBgAAHA3gAAHAzQgGgiAAgMIgBgFIAAAAIAFAvIgCgJIgBABIAAgBIAAADIgBgBIgBgOIABARIAAACIAAABIgBgCIAAgJIAAgBIAAANIAAABIAAgBIgDgYIgCgIIAAABIAEAZIAAAAIAAAAIgEgWIADATIAAABIgEgTIAAgBIAAgCIgBgJIgCgJIAAgBIAAACIAEAfIAAAAIgEgRIgEgWIgDg7QAAgHACgCQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIAAAAIABgCIAAgEIADgGIABAAIABgCIAAAAIABACIABAAIABAAIABABIAAgCIAAgCIAAgBIABgBIAAABIABgBIAAgBIAAAAIAAABIABAAIgBABIAAAGIAAAAIAAABIAAABIAAADIABAAIAAgDIAAgBIAAgCIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAgBIAAgCIAAAAIABADQABgFABADQABAEgBAFIAAgBIAAADIAAgCIgBAHIAAABIAAAAIgBAKIgBADIABAAIgBACIABgBIgBANIABAFIAAgCIAAAEQAAAJgBACIACAXIAAABIgCgRIACAQIAAABIAAAAIAAAAIAGA3IAAACIgBgCgAAAhKIAAAKIAAAAIAAgBIABgJIAAAAIgBgCgAACgEg");
	this.shape_99.setTransform(497.375,243.875);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#996633").s().p("AAMBIIAAgSIAAgCIgBAAIABAJIgBAEIAAAGIgBgBIAAgDIAAAAIgBgBIgBABIAAgIIAAABIAAAAQABAHgCAGIABgEIAAgHIgBAGIAAABIgBAAIAAgEIgBAEIAAABIAAgBIAAgCIgBAAIAAgCIAAgCIAAgEIAAAHIAAAAIgBgHIAAgFIgBgDIAAABIgBgBIAAACIACAKIgDgGIgBgIIgBgEIgBgEIAAgBIAAgBIAAAAIgBgEIgBgGQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIACABIAAgBIAAgBIAAgBIACgCIAAAAIABgBIACAAIAAAAIABAAIABAAIAAgBIABgBIAAAAIAAgBIABAAIAAABIAAAAIAAABIgBgBIAAABIABAAIAAAAIAAACIABABIAAAAIAAgCIAAAAIAAgBIAAAAIAAAAIAAAAIAAAAIAAgBIgBAAIABgBIABAAIABABIAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABADIAAABIAAgBIgBADIAAAEIAAACIAAAAIAAAFIABABIAAABIABABIAAABIgBABIAAACIABAJIAAAAIgBAAIgBgHIABAVIAAAIIAAABgAAKAZIAAACIABAAIAAgEIgBAAIAAACgAANA6IABgHIAAAHgAgGATQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAABAAIgBAAIABgCIAAgBIABgCIAAgBIAAAAIAAAAIAAAAIAAgCIAAAAIgBgDIgBgBIAAgBIgBAAIAAgBIgCgEIgBgJQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIACAAIAAAAIAAgBIgBgCIAAgBIABABIABACIAAgBIACgBIABAAIAAAAIAAgBIAEAAIAAgBIABAAIACAAIgBAAIAAACIABAAIAAABIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIABAAIABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIAAgBIAAABIAAAAIgBABIAAABIgBACIAAADIADAGIAEANQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAAAIgCgBIAAABIAAAAIABADIAAABIgBgBIgBgCIAAAAIgBABIAAABIAAgBIgBABIgBAAIAAABIgEAAIAAABIgBAAIAAAAIAAABIgBAAIAAgBIAAAAIAAgCIAAAAIAAgBIgBABIAAABIAAAAIAAABIAAAAIABgBIAAABIAAAAIAAAAIgBABIgBAAIAAgBIAAAAIgBABIgBAAgAgEAPIAAAAIAAAAIAAgCIAAgBgAAEgMIAAABIAAAAIABgCIAAAAIgBABgAACgLIAAgCIABgBIgBABIAAAAIAAACIAAAAIAAAAgAgCASgAAEgTQgDgJAAgIIAAgCIgBACIABAGIAAAFIABAFIgBAAIgBgEIAAABIAAgBIAAACIgBgBIAAgDIAAgEIgBAAIAAABIABAIIgBgHIABAGIAAABIgBABIAAgBIgBgDIAAAEIAAAAIgBgJIgCgDIAAABIABAEIgBgDIABAHIAAAAIgCgHIAAgBIAAgBIAAgDIAAgBIgBgCIgBAAIAAAAIAAABQABAFACAGIAAAAIgBAAIgCgDIgDgMIgBgXQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIACABIAAgBIABgBIABgBIACgBIABAAIAAgBIABAAIABABIACAAIAAAAIAAAAIAAgBIAAgBIACAAIAAAAIAAAAIAAACIAAABIAAABIAAAAIAAABIABgCIAAgBIAAAAIAAAAIAAAAIgBAAIABgBIAAAAIAAAAIAAgBIABAAIAAACQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIABAAIgCADIAAAAIAAAAIgBAEIAAABIAAAAIAAAAIAAAAIgBAFIABACIAAgBIAAACIgBAEIAAAIIgBgGIACAbIAAABIAAAAIAAgBgAADg/IAAABIABgDIAAgBg");
	this.shape_100.setTransform(495,227.825);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#996633").s().p("AgOA5IAAgBIAAAAIAAgEIAAAAIAAgBIAAAAIgBADIABAAIAAABIAAAAIgBgBIAAABIAAAAIAAABIABAAIgBABIgBAAIAAgCIAAAAIAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABgBIAAgBIgBABIACgEIAAAAIAAgFIABgBIgBAAIABgBIgBAAIABgEIAAgBIAAgCIAAAAIgBgCQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgBgLIABABIAAAHIABgQIgCgQIAAgBQABAAAAABQACAMgBAHIAAADIABAAIAAgKIABgFIgBgFIABAEIABgBIAAABIAAgBIABgBIAAABIAAAAIAAgCIABAAIAAgBIABABIAAAAIAAAAIAAgBIAAAAIAAAAIAAACIABAAIABgBIAAAAIABABIAAgBIgBgCIAAgBIABgBIAAgCIABAAIAAABIABABIgBABIABAAIAAACIAAAAIABACIAAABIAAABIABAAIABACIAAAAIAAAAIgBgEIgBgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAgDIABAAIABACIAAABIAAgCIABgBIAAABIACAIIAAgCIABAEIAAAAIgBABIgEACIACAAIAAgBIAAABIAAAAIAAgBIABAAIAAAAIABAAIAAgBIABAAIABAAIAAABIABABIAAABIgCgeIgBgWIAAgCIAAABQAEAfAAARIAAAFIAAAAIgBgwIABAKIABgBIAAABIAAgCIABgBIAAAWIABgBIgBgPIAAAJIAAgSIAAAJIAAgKIAAgCIABACIAAAKIABABIAAgNQABAMAAAMIACAJIAAgCIgCgZIADAWIgCgTIAAgBIAAAAIACAUIABAAIAAAOIABAHIAAACIgCgiIAFAoIAAAZIABACIgUAAIAAgEIAAAHQAAAAAAABQAAABAAAAQAAAAAAABQAAAAAAAAIgCgBIAAABIgBACIAAAAIgDADIAAAAIgBABIgBAAIAAgBIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgBAAIAAABIAAABIAAAAIgCAAIAAABgAgQAtIAAADIAAABIAAgCIABgCIAAgBIgBAAgAgPAbIAAABIABgFgAgKAGIAAAAIAAgBgAgOgJIAAgBIAAAAIAAgFIAAgBIgBACIAAACIAAAAIAAABIAAgBIAAgBIgBABIAAAAIAAAAIAAABQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAgBIAAgFIAAgBIgBABIACgFIAAgBIAAgGIABgCIgBAAIABgBIgBAAIABgBIgBgEIgBgPIABgGIARABIAAAfQABAEgBABIgCgCIAAACIgBACIABAFIAAABIgBgBIgBgDIgCACIAAAAIAAAAIgBABIgBAAIAAgBIgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgBAAIAAABIAAABIAAABIgBAAIgBAAIAAABgAgQgaIAAABIAAAFIAAAAIAAABIAAgEIABgDIAAAAgAgOgLIAAAAIAAABgAgOgMIgBAAIABgBIAAABgAgPgMg");
	this.shape_101.setTransform(493.7,226.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#996633").s().p("AgGA/IAAgBIABgBIgBAAIABgBIAAgDIAAgBIAAAAIAAgBIAAAAIAAgDIgBAEIAAACIABgDIAAAAIgBAFIAAAAIgBACIAAAAIgBgDIAAAAIAAABQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgBgDABgEIAAAAIAAgCIAAABIABgGIABAAIAAgCIACgHIAAgDIAAABIAAgCIAAAAIABgKIAAgHIACgJIACgTIgBANIACgLIAAgCIAAgBIABgxIAAgBIABABIgCApIAAAEIAAAAIADgdIAAgMIABAAIAAAIIAAAAIABABIAAgCIgBASIABgBIABgVIABgBIAAABIAAAKIABgMIAAgBIABABIgBAVIABAHIAAgXIAAAAIAAATIABgRIAAAAIAAAUIgBAIIAAABIABAHIAAAAIAAgBIAAAAIABgDIgBA8QAAAHgCAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAABIAAABIgBADIgBABIgEAGIAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgBAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIgBAAIAAABIAAABIgBACIgBAAIAAAAIAAABIAAAAgAgGAnIgBAJIAAACIABgHIABgEIAAAAgAALgpIAAgBIAAAAIAAAHIAAgGg");
	this.shape_102.setTransform(491.905,231.125);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#996633").s().p("AAAAXIgBABIAAAAIgCgCIgBAAIAAAAIgBAAIAAABIgDAAIAAgBIABAAIAAAAIAAgBIABgBIAAgCIgCACIAAAAIAAAAIAAAAIABAAIAAABIgBAAIABAAIAAABIgBAAIgBAAIgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAAgBIACgCIACgCIABgBIAAgBIAAAAIACgDIAAgDQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIABgDIABgDIgBAEIABgDIAAgBIAAgBIABgCIgBgQIABABIABAHIgBAIIAAABIAAAAIAAABIABgCIAAgDIABgGIAAgDIAAgCIAAAAIAAAAIABADIAAAAIABAAIAAAAIAAgBIAAAHIABAAIAAgCIAAgDIAAgCIAAgBIAAAAIAAAAIABAAIAAAAIAAADIABgEIAAAAIAAAAIABAJIAAABIAAABIABgCIAAgGIAAAAIABAHIAAABIAAABIgBADIAAADIABAAIAAABIAAgBIAAgBQABgFgBgGIACAHIAAAIIgBAIIgEAMQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBAAIAAABIgBABIgBAAIgCABgAgIARIAAABIACgEgAgBACIAAgBIABgBgAAFgUIABAAIAAAGgAAGgUg");
	this.shape_103.setTransform(490.1429,233.025);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#996633").s().p("AAOA9IgBgBIgCAAIgBAAIgEgDIgBgBIgBgBIABABIgFgGIAAgBIgBgCIgDgFIAAgDIgCgDIAAgBIAAAAIgDgKIAAAAIgBgDIgCgEIAAgKIgEgTIAAAAIAAAAIAEAOIgDgMIAAgBIAAgCIgCgQIAAgCIAAgDIABgJIgBgNIgBgEIAAAAIABgBIAAABIACAMIgBAOIAAABIABARIABAAIgCgRIAAgBIADgMIgBgMIABAIIABAAIAAABIABgCIgBARIAAgBIAAgBIABgOIAAADIABgHIgBgBIABgBIAAgBIABACIAAAIIAAgLIAAABIABAKIgBALIAAADIAAAAIABADIAAgDIABgRIAAAAIAAAAIAAARIAAACIAAAHIADAIIAAABIAAgCIgCgQIAAgKIAAAAIABAKIABACIAJAuIAHAUIABABIAAACIAAABIgCAAIABABIACACIAAABIACAEIgBAAIABABIAAABIgBAAIgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAAAIgBAAIABABIAAAAIAAAAIACABIAAAAIABAAIAAACIABAAIAAAAIAAABIgBAAIgBgBIgBAAIgBAAIgDgCIgBAAIAAAAIgBgBIAAAAIgBgBIgBAAIACACIACABIAAAAIABABIACAAIABAAIABAAIAAABIABAAIAAAAIAAABIgDAAIABABIABAAIAAABIAAAAIAAABgAgCAqIAAABIACAGIABABIgCgFIAAgCIgBgBgAAMAkIAAAAIgBgCgAgLAWIAAgBIABABIAAABgAgKAWgAgIgzIAAAAIAAAKg");
	this.shape_104.setTransform(493.8,234.125);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#996633").s().p("AgEA/IAAAAIAAgBIAAAAIAAgHIAAgCIAAgBIgBAFIABABIgBABIABAAIAAACIAAAAIAAAAIgBACIgBAAIAAgEIAAAAIAAABQgBAFgBgDIgBgHIAAgCIAAABIABgGIAAgBIABgJIABgCIgBAAIABgCIgBABIABgLIAAAAIAAgFIAAACIgBgEQAAgGACgDIgBgUIABABIAAAFIgBg2IAAgCIABABQACAbgBAOIAAAEIABABIAAgqIABAJIAAgBIABABIAAgCIAAgBIAAATIABgBIAAgCIAAgFIAAgOIAAAAIAAgBIAAABIAAAIIABgLIAAABIABAVIABAHIAAgBIgBgWIABATIAAgQIABAQIABACIgBAKIABAHIAAgBIABABIAAgEQAAgNgCgMIAAAAIAFAjIABAxQABAGgDABIgBgCIAAADIgBADIgDAFIAAAAIAAAAIgBACIgBAAIgBgCIAAAAIgBABIAAgBIAAABIgBACIAAABIgBAAIAAAAIAAABgAgGAnIAAAJIAAABIAAgFIABgEIAAgBgAAAgsIAAAEIAAACgAAAgoIAAAAg");
	this.shape_105.setTransform(498.5643,242.8938);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#996633").s().p("AgLA6IAAgEIAAgBIAAAAIAAgCIAAAAIABgBIgBAAIAAAAIgBAFIAAACIAAAAIgBAAIAAgBIAAgCIgBABIAAAAIAAABIgBABIgBgBIAAgCIAAgCIABgEIgBABIABgCIgBABIADgHIAAgBIACgHIABgCIAAAAIABgBIgBAAIADgKIAAAAIABgEIgBABIABgDQACgHABgBIACgJIABgCIABgHIgBAHIAAADIgBADIABgCIABgJIABgBIAAgBIADgPIgBgcIABgCIAAACIABARQAAAKgCAJIgBAEIABAAIAAAAIABgEIADgWIgBgLIAAgBIABAAIAAACIAAABIAAADIABACIAAAAIABAAIAAgCIAAABIAAALIABgPIAAgBIABABIAAAIIAAABIAAgLIABgBIAAABQABAGgBAOIAAADIAAACIABgUIAAASIAAgQIABAAQABAIgBAIIAAAAIAAACIAAABIgBADIgBAEIAAABIAAAEIAAADIAAAAIAAgBIABAAIABgGIAAgDIABgGIAAgMIAAAAIABAPIgBAKIgBAFIAAACIAAADIgCAEIgIAoQgBAFgCABIgBgCIAAABIgBAEIAAABIgCABIgBACIgBAAIgBACIgCgCIgBAAIAAAAIAAAAIgBAAIAAACIAAABIAAAAIgBABIgBAAIAAABgAgMAyIAAACIABgBIAAgCIAAgCIABAAIgBAAgAgMArIAAABIABgGg");
	this.shape_106.setTransform(498.4583,253.275);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#996633").s().p("AAEBDIgBgBIgDgGIAAAAIAAgBIgBgGIgBgBIAAgCIgCgIIgBgDIAAABIAAgCIAAAAIgBgDIgCgIIAAgBIgBgCIAAgCIAAABIgBgDIgBgLIgBgKIAAgCIgBgGIAAgDIAAAAIABAIIAAACIABACIgChBIAAgCIABACIAAArIABAFIAAABIAAgtIABAAIAAAJIAAgBIABABIAAgDIAAABIABAAIAAANIAAgRIABAAIAAgBIAAACIAAAJIABgMIAAgBIABABIAAAWIABAHIAAgBIgBgWIABAUIAAgVIAAACIABATIABACIAAABIgBAEIAAAFIABAHIABAAIAAABIAAABIAAgDIAAgDIgCgaIAFAtIAAAAIABABIACALQAFAVADAHQADAFgCACIgCgBIAAABIABAEIAAAEIAAADIAAACIgBAAIgCgBIAAAAIgBABIgBAAIAAAAIABABIAAACIABABIgBABIAAABIAAAAIAAAAIgBAAIAAgBIAAgBIgBgBIAAgBIgBAAIAAgCIgBAAIAAgBIAAAAIAAgBIgCgCIAAgBIAAABIACAGIABABIAAAAIAAgBIAAAAIABACIAAABIABAAIgBABIAAAAIgCgCIAAABQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgBgBgAgDArIADAJIAAABIAAgBIAAgDIgBgCIgBgEIAAAAIgBgBgAgLABIAAACIAAgCIAAgBg");
	this.shape_107.setTransform(499.29,249.6583);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#996633").s().p("AAGAdQgCgMABgHIAAgCIgBgBIAAAKIAAAEIAAAGIgBgEIAAAAIgBAAIAAABIAAAAIAAgIIgBAAIAAABIAAADIAAAGIAAAAIgBAAIAAAAIAAgEIAAAFIAAAAIAAAAIgBgKIgBgDIAAAAIAAABIAAACIAAAGIgBgIIgBgBIABgDIAAgBIgBgDIgBgBIAAADQAAAGACAFIAAAAIgDgHIgCgJIgBgXQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIABABIAAgBIABgCIADgCIAAAAIABgBIABAAIAAAAIAAABIACgBIAAAAIABgBIAAAAIABAAIAAAAIAAgBIABAAIAAABIAAAAIAAADIAAAAIAAABIAAAAIABgCIAAAAIgBgBIABAAIgBgBIABgBIABAAIAAACIAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAABIABADIAAABIgBACIAAABIAAAAIgBAEIgBABIABAAIgBABIABAAIgBAEIAAABIAAACIAAgBIABACQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAIABAJIgBAAIAAgGIgBAOIACAPIAAABgAAFABIABgDIAAgBgAAHgUIgBACIAAABIABgBIAAgEIAAAAIAAACgAABAUIAAgCIABAEIgBgCgAABAUIAAAAg");
	this.shape_108.setTransform(500.569,253.225);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#996633").s().p("AAAAmIgBAAIgBAAIAAAAIgBgBIAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBgBIgBAAIAAACIgBAAIgBAAIAAAAIgBAAIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAAAIAAgCIABAAIgBAAIgBACIAAABIgBAAIABAAIAAAAIAAABIgBAAIAAAAIAAgBIAAgBIAAABIAAgBIgBABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIAAgBIABgBIAAAAIAAAAIABgBIgBAAIABgBIABgBIAAAAIABgCIACgDIAAgBIABAAIAAgBIgBAAIADgGIAAgDIAAgEIACgCIAAgFIAAgFIAAgBIAAABIABAGIAAgFIAAgUIAAgNIAAgBIAAABIAAAaIAAADIAAAAIAAAAIAAgDIAAgKIACgNIAAAFIAAAAIABAAIABgBIAAAAIAAAAIAAAIIABgJIAAgBIAAAAIABAAIAAAAIAAAFIAAABIABgHIAAAAIAAAMIAAAFIAAAAIAAgOIABAMIAAgLIAAAAIABALIAAACIAAAEIAAABIAAAEIABABIgBgSIAEAVIAAANQgBAJgDAKIgBADIgCABIgBgCIAAABIgBABIgCACIAAAAIgCABIAAABgAgHAbIAAABIgBABIAAAAIADgFIgBAAg");
	this.shape_109.setTransform(495.15,233.55);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#996633").s().p("AAGArQgCgTABgKIAAgDIgBAAIAAAdIgBgFIAAAAIgBAAIAAABIAAAAIAAgNIgBABIAAABIAAAEIAAAJIAAAAIgBABIAAgBIAAgFIAAAHIAAAAIAAAAIgBgOIgBgGIAAABIAAACIAAAMIgBgMIgBgCIAAAAIABgFIAAgCIgBgEIAAABIgBgBIAAADQAAAJACAIIgDgLIgDgvQgBgEADgBIABABIAAgBIACgDIACgEIAAAAIABgBIABAAIAAABIAAAAIACAAIAAAAIAAAAIABgCIAAAAIABgBIAAAAIAAAAIABAAIAAAAIAAABIAAAFIAAAAIAAABIAAgDIAAAAIABgBIgBAAIAAgBIAAgBIABgBIABAAIAAADIAAgBIAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAABAAAAQACADgBACIAAABIAAAAIgBADIAAABIgBAHIgBABIABAAIgBABIABAAIgBAHIAAAAIAAADIAAgBIABADQAAAEgCACIABAOIgBAAIAAgJIAAAJIABAiIAAABgAAHgeIgBAEIAAAAIABAAIAAgBIAAgFIAAAAIAAgBIAAADgAAEghIAAABIAAAEIAAAAIAAgDIABgDgAABAdIAAgBIAAAEIAAgDg");
	this.shape_110.setTransform(495.7357,237);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#996633").s().p("AgEA5IAAgBIAAgBIAAgGIAAgBIAAAFIAAABIgBAAIAAAAIAAAAIAAABIABAAIAAgBIAAABIAAAAIgBABIgBAAIAAgDIAAABIAAAAQAAABgBABQAAABAAAAQAAAAgBAAQAAgBAAgBIgBgGIAAgCIAAACIABgFIAAgBIABgIIABgDIgBABIABgCIgBAAIABgJIAAgBIAAgDIAAABIgBgDQAAgGACgCIgBgSIABAAIAAAGIgBgyIAAgCIABACQACAYgBAMIAAAEIABAAIAAgmIABAJIAAgBIABABIAAgCIAAAAIAAAQIABgBIAAgBIAAgFIAAgNIAAAAIAAgBIAAABIAAAHIABgJIAAAAIABATIABAGIAAAAIgBgTIABARIAAgPIABAOIAAABIABABIAAABIgBAHIAAABIABAGIAAgBIABACIAAgFQAAgLgCgKIAAgBIAFAfIABAsQABAHgDABQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAACIgBACIgDAGIAAgBIAAABIgBABIgBAAIgBgBIAAAAIgBAAIAAAAIAAAAIgBABIAAABIgBABIAAAAIAAABgAgGAkIAAAAIAAAHIAAAAIAAABIAAgFIABgDIAAgBgAgFAEIAAADIABgHgAAAgoIAAAEIAAACg");
	this.shape_111.setTransform(495.7143,235.75);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#996633").s().p("AgHBJIAAgBIABgBIgBAAIABgCIAAgDIAAgBIAAAAIAAgCIAAgCIAAgBIAAAAIgCAIIABAAIAAgBIABgEIAAABIgBAGIAAAAIgBACIAAAAIgBgDIAAgBIAAABQAAABgBABQAAABAAAAQAAAAgBAAQAAgBAAAAQgBgEABgFIAAABIAAgDIAAACIACgHIAAgBIAAgCIACgIIAAgDIAAAAIAAgCIAAABIACgMIAAgGIgBACIAAgEQABgIACgDIABgWIAAAPIABgNIAAgCIABgCIABg3IABgCIAAABIgCA1IAAAAIABgGIABgRIABgLIABgOIAAAKIAAgBIABABIAAgCIAAgBIABABIgCAUIABgBIAAgBIABgNIgBAJIACgRIgBgCIABAAIAAABIAAgCIABACIgBALIACgOIgBAYIAAAIIABgBIAAgZIAAAWIABgUIAAABIAAATIAAAAIAAAEIgBARIABACIAAgDIAAgDIABgcIABARIgBAvIgCAhQAAAIgCABQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIAAAAIgCAHIgCAFIgBgBIAAABIAAABIAAAAIgBgBIgBgBIgBABIgBgBIAAABIAAACIgBABIgBABIAAABIAAAAgAgIA3IAAACIABgHIABgEg");
	this.shape_112.setTransform(495.855,242.875);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#996633").s().p("AAMBlIAAgBIAAABIgBgBIAAgCIAAgBIgBAAIAAAAIgBAAIgBAAIABgBIAAgBIAAAAIgBAAIABAAIgBAAIAAgBIgHAFIgBgDIgBAAIgBgBIAAAAIgCgDIgBAAIgDgDIAAABIAAgBIgBAAIABABIACADIACABIABABIACACIADADIACgDIADgCIgEAGIgIgFIgIgIIgFgLIgDgIIAAgBIAAgBIAAgIIAAgBIACgBIABABIAAgBIABgCIgBgCIgBgEIgDgJQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACABIAAgBIAAgBIABgBIACgCIAAAAIABgBIgBAAIAAABIAAAAIgBgBIABAAIAAgBIgBgBIgBABIAAAAIABABIAAAAIAAgBIAAABIAAABIgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBIgBAAIABgBIAAgBIABAAIAAgCIAAgBIAAAAIAAAAIAAAAIAAgCIgBgCIgDgEIgBgGIgBgIQAAAAgBAAQAAgBABAAQAAAAAAAAQABAAAAAAIACAAIAAgBIgBgCIAAgBIABABIABABIABgBIABAAIABAAIAAgBIAFAAIAAAAIABgBIABAAIAAABIAAABIAAAAIABAAIAAgBIAAAAIAAAAIAAAAIAAgBIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIgBACIgBACIAAABIAAACIAAAAIADAGIACAFIABAIQAAAAABABQAAAAgBAAQAAABAAAAQAAAAgBAAIgCAAIAAABIAAABIgBAAIAAAAIAAABIAAAAIAAAAIgBgBIgBABIABAAIgBABIAAABIABAAIAAAAIABAAIgBgBIAAAAIAAgBIABAAIABABIACgBIABABIAAAAIABABIABAAIABAAIAAAAIABABIAFAFIAEAHIADAJIAAABIAAAAIAAABIAAAAIABAAIACACIAAABIAAAAIADAEIABABIAAAAIABAAIAEADIACACIgBgBIACABIADAEIAJAGIAAABIAAAAIgHgFIAFAFIABABIAFADIgDAIIgEADIgDADIgEABIABAAIgCAAIgHABIgHgCIADABIgEgCIABAAIABAAIAHACIAIgBIgBAAIADgBIADgCIAFgEIADgGIgDgCIgBAAIABAAIACACIgBACIgBADIgEAEIgFACIgBABIgFAAQgDAAgFgBIAGAAIAAAAIAAgBIgBAAIAAAAIAAAAIAHgBIgJAAIAAAAIAAgBIAAAAIgBAAIABAAIAEAAIgFgBIABAAQAEAAAEgBIABAAIgBgBIAAAAIACgBIgCABIgBAAIABAAQgCABgEABIAAgBIABAAIAAAAIAEgBIgBgBIAAAAIAAAAIgGgEIAAAAIAAAAIAAAAIgBABIgBADIgBABIAAAAIgBAAIAAABIgBAAIAAABIAAABIgBABIgBAAIAAABIAAAAIAAABIAAAAIAAAAIAAACIgBABIgBABIAAAAgAAMBhIABAAIgCgBgAACBhIAAAAIgBAAIAAAAIAFgEIgEAEIABgBIAFgDIAAAAIgBgBIgEACIAAABIgBABIgDgCIABABIABACIAAAAgAABBcIABABIAAgBIAAAAgAACBYIAAACIAAAAIABAAIAAAAIAAABIAAgBIACAAIgBAAIABgBIAAAAIAAAAIAAAAIAAAAIgBAAIAAAAIgCgBIAAgBIAAAAIAAABIAAAAgAABBZIAAgBIgBABIAAAAgAAFBYIABABIAAgBIAAAAIAAAAIAAAAIAAgBgAAfBXIABABIAAAAIABgBIAAgCIgBAAgAAFBYIgBgBIABAAIAAAAIABAAIgBgBIAAAAIgBgBIAAABIAAABIAAAAIAAAAgAACBVIAAABIABgBIAAAAIAAAAIgBAAgAAFBUIAAABIABABIAAgBIABAAIgBAAIgBgBgAAIBTIABAAIgBAAIgBAAgAAABSIAAAAIAAAAIAAAAIAAgBIgBAAIAAAAgAAKBQIABAAIABAAIgBgBgAgBBPIgBgBIAAgBIAAAAgAgBBOIAAAAIAAgBIAAAAgAAABNIAAgBIAAAAIAAAAIAAgBIgBAAIAAAAIgBAAIAAAAIAAAAIAAAAIAAAAIAAABIAAAAIABAAIABABIAAgBgAAABLIAAAAIAAAAgAAABKIAAgBIAAAAgAAQA/IACACIAAgBIgDgDIgBgBIACADgAAHA/IAAAAIAAgBIABAAIgCgCIABAAIgBAAIAAAAIAAABIgCAAgAgBA9IAAAAIABAAIAAACIAAgCIAAAAgAAIA7IAAAAIABAAIAAABIABAAIAAABIABAAIABAAIAAAAIgCgCIAAAAIAAAAIgBAAIgBAAgAAJA6IABAAIAAgBgAgDAiIACABIAAAAIABABIAAACIAAAAIACABIAAAAIAAgBQgCgDgDgCgAgEAjIABAAIABABIgCgCgAgLAhIAAAAIAAgBIgBABIAAAAIABAAIAAAAgAgOAgIAAABIgBAAIABAAIAAgBIABAAIAAAAIgBAAgAgKAgIABAAIAAgBgAgTAfIAAgCIAAgBIAAAAgAgVAVIABgBIgBAAgAgKAEIAAAAIAAAAIAAAAIABgCIgBAAIAAACgAgNADIAAAAIABABIAAAAIAAgBIAAgBgAAEBaIAAgBIAAABgAAEBXgAAJA7IABAAIAAAAgAAKA7gAgRAhgAgWAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgEIgBgBIAAADIAAAAIAAACIgBgBIAAgBIgBAAIAAACQAAAEgCgDIAAgBIAAgCIgBgEIAAgCIAAgBIAAgFIAAgBIAAgBIAAgKIAAgBIABgCIgBAAIABgCIgBABIABgNIAAgFIAAABIgBgDIAAgGIABgEIAAgBIgJAdIgBANIAAgJIgBABIAAgBIAAACIgBABIAAgBIABgBIgBABIAAAAIAAACIAAgEIACgLQgCAIgBAIIAAABIAAACIgBgCIABgJIAAgCIgCAOQgBgDABgEIABgFIADgNIABgGIgCAFIAAgBIgBACIAAABIgDAOIAAAEIAAAAIAAgDIABgKIABgCIAAgCIABgCIAAgCIABgCIgBAAIABgCIAAgBIADgIIAAgCIABgHIgBAAIAAgCIAAADIAAAAIgBACIAAABIgFAWIAAACIgBADIAAgEIABgCIAAgCIAAAAIAEgZIgBgEIAAgBIgBgWIAQAOQAGAFADAHQADAGABAJIABAEIAAAZIAAAEQABAHgCACIgBgDIAAADIgBAEIAAABIgCAFIAAAAIAAACIgBAAIgBAAIgBgBIAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBAAIAAACIAAACIgBABIAAABgAgYgNIAAAHIABABIAAgFIAAAAIAAgCIAAgBgAgagSIAAADIAAgIIAAgEgAgXgXIAAABIABgBgAgoguIAAACIgBADg");
	this.shape_113.setTransform(501.675,250.75);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#996633").s().p("AAoAZIgCgCIAAgCIgBgBIAAABIgBgBIgBgDIgBgBIAAgBIgEgFIAAABIgBgBIAAAAIgBAAIgCgBIgFgEIAAAAIgEgCIACABIgEgCIgBgBIgCgBIgCgBIgHgDIAAAAIgBgBIAAAAIAAAAIAAAAIAAgBIAAAAIAAgBIgCABIgEgDIgBAAIAAAAIAAgCIAAAAIgCABIgLgBIgFAAIgCAAIgEABIgIAAIgEABIgFgBIgCAAIABgBIATAAIADgBIACAAIADAAIgIAAIgDgBIgLABIAHgBIgBgBIABgBIgCAAIAAAAIACAAIAFgBIgKAAIgBAAIABgBIAHAAIABAAIgJgBIAIAAIAJAAIAGgCIgFAAIgDABIgBAAIADgBIgEAAIgHABIgDAAIACAAIAAAAIAHgBIAEAAIABgBIADAAIAAAAIADAAIAHABIABAAIAGABIgBgBIAAAAIABAAIgCgBQgHgCgGABIgFABIgDAAIgDAAIADgBIABAAIABgBIACAAQADgBAEAAIAGAAIAGABIgBAAIACAAIABAAIACABIAEACIACABIAAAAIABABIAAAAIADAAIADABIAQAIIAIAFIAGAEIAFADIABADIgBAAIgCAAIABAAIACAFIAAAHIgDAAIAAABIgBAAIgBgBIAAABIABAAIABABIAAABIgBACIgBAAIABAAIAAABIgBAAIAAAAIAAAAIAAgCIgBAAIAAgBIAAgBIgBgBIAAgBIgBAAIAAAAIAAAAIgBgBIAAAAIABACIAAABIAAAAIABAAIAAAAIAAAAIgBgCIAAAAIABACIAAABIAAAAIgBgBIABADIABAAIAAgBIAAABIAAAAIgBABIgBgBIAAACIgBAAIAAAAgAApAUIAAAAIAAAAgAAgALIAFAFIABABIgEgEIgBgBIgBgBgAAJgCIgCgBIAAAAgAgcgTIABAAIgBAAIgJABg");
	this.shape_114.setTransform(504.45,257.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#996633").s().p("AgaAXIgBgBIgBAAIgCgCIgCgDIgBgDIAAgEIAAgCIACgDIAAAAIgBAAIABgBIABgBIAAgBIAAAAIACgCIAAgBIAAAAIAAgBIACgEIAAAAIAAgCIABgCIAGgEIgBABIADgCIABgBIAAAAIABgBIAHgEIgCABIAFgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIAAABIACgBIAFABIAAABIgBAAIgEgBIAAABIAAABIAAAAIACAAIgCABIABABIAAAAIABABIAAACIgBAAIABACIAAAAIABABIAAgBIABADIAAgBIABgBIgBAAIAAgBIgBAAIADgBIAAAAIAAgCIABAAIgBAAIgBgBIAAgBIAAgBIgBAAIAAgBIABAAIABABIABAAIAAABIAAgBIACABIAAABIAAAAIAAgBIgBgBIACABIABAAIgCgBIAAgBIgBAAIAAgBIgBAAIgBgCIABgBIACABIADABIADADIAJgCIAKACIAAAHIAAAFIgCAFIgEAFIgEACIgCADIgEADIgEACIgFAAIgCgBIgFgCIgCgNIgBgEIAAAAIgCABIgBAAIgBAAIAAABIgCgBIgBACIgCACIABgDIgBABIAAABIgBABIAAAAIAAADIgCACIAAAAIgBADIAAAAIgBACIAAAAIAAgCIABgEIAAAAIgBAAIAAAAIgBABIgBACIABAAIgBABIAAABIAAgBIAAgBIAAAAIAAgBIAAAAIgBAAIgCABIAAAAIgBAAIgCAAIgBAAIAAAAIAAAAIABABIAAAAIAAABIABAAIAAABIABAAIAAAAIAAAAIABAAIAAAAIAAAAIABABIABABIgBgCIAAAAIAAAAIAAABIABABIAAAAIAAAAIABAAIAAAAIgBAAIAAgBIABAAIACABIAHAEIgNAHgAgbAOIAAABIABgBIAAAAIgBgBIAAABgAgYAKIABAAIAAAAIAAgBIgBABgAgcAGIABAAIABABIAAgBIgBgBgAgcAAIgBADIAAABIACgEIAAAAgAAOgGIABACIAAgDIgBAAgAAXgRIAEACIABAAIACABIABAEIAAAEIAAAAIAAABIABgBIAAgBIAAgIIgDgBQgHgCgGABIAAAAIAFABIAAgBgAARgFIADgCIgBAAIgCACgAAQgHIAAACIACgBIAAgBIABAAIgDgBIAAABgAAAgGIAAAAIABAAIAAAAgAgBgGIABAAIAAAAIgBAAgAAAgIIAAAAIABABIAAAAIAAgBIAAAAIAAAAgAgUgNIgBABIACgCgAAMgOIAAAAIAAABIAAAAIAAgBIAAAAIAAAAIABAAIAAgBIgBAAIAAAAIAAABgAALgNIAAAAIAAgBIAAAAIgBAAgAAMgPIABAAIgBgBgAgDgTIAAAAIABAAIACgBIgDABgAAIgRIgCgBIAAAAIACAAIAAABIAAAAg");
	this.shape_115.setTransform(519.425,260.4583);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#996633").s().p("AABArIgBAAIgCgBIgBAAIgDgCIgCgCIgDgGIAAABIgBgBIgBgBQgCgEAAgDIgBgBIAAgCIgBgBIABgGIgBgBIgBgCIACgBIAAgDIADAAIgDAAIAAADIAAgDIAFgBIgBAAIgDgCIgDAAIgBgBIAAABIgBgBIgFAAIgEgCIgGgBIgEgEIgBgEIgCgFIgBgFIAAgCIgKgCIgFgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBABAAIgBAAIgBAAIgDgBIgGgDIABAAIgBAAIgBgBIAAgBIABgBIAAAAIAAgCIABgBIgBAAIgCAAIgBAAIAAgBIgBgBIAAAAIAAAAIAAAAIABgBIABABIAEAAIAAAAIACAAIAAAAIADAAIgGgBIADABIAAAAIgGgBIgBAAIgBAAIAAgBIADAAIgBAAQAAgBgBAAQgBAAAAAAQAAgBAAAAQABAAABAAIACgBIACAAIADABIAAgBIACABIgCgBIADABIADABIACAAIAAAAIAFABIAHACIgBgBIABABIAAAAIALACIAAABIAFAAIgBAAIADABIADABIABAAIACABIADACQAKADAIAFIABAAIgBAAIgGgDIgDgBIgCgBIACABIACABIAGADIACABIAEACIACABIAFADIAEACIAJAEIgCAGIACgFIgCgBIgBAAIACACIgDAHIgCAAIAAAAIgKgDIAAABIADAGIACACIAAAAIABADIgEAAIAEAFIAAABIgBgBIgDgEIACAEIAAAAIABABIAAACIACgFIABgCIAAgDIAAACIAAgCIACgDIACgCIAGgDIABgBIAFgCIALgEIAAAAIAAABIgHACIgGACIALgDIACAAIAAAAIAEAAIACgBIABAAIADgBIAIgCIADgCIAAgBIAAACIAAACIABgCIABAAIAAgIIABAAIAAAHIAAAAIABAAIAAgBIAAAAIAAAAIAAAEIABgHIAAABIgBAFIABgFIAAgCIABAAIAAABIAAgBIAAACIAAAFIAAACIABgKIAAAAIAAAKIgBABIgKAGIAIgDIADgCIgDACIADgCIABgBIAAgBIAAgDIAAAFIgBABIgKAFIAAAAIgBAAIgBAAIgGABIgHACIgBABIACAAIADgBIACAAIABAAIAAAAIAHgDQAGAAAEgDIAAAAIgGADIgGADIgEABIgCABIgBAAIgBAAIgIACIgGACIAAAAIgBABIgCADIAAAAIAAABIgBACIAAAAIgBABIAAABIgBACIgEAUIgFABIgEgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIgCAAIgCAAIgDACIgFABIgBAAIAAAAIAGgCIABgBIgDgBIgCABIAAAAIACgBIgBgBIgBAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAAAIgBAAIABAAIAAAAIAAgBIAAgBIAAABIAAgBIAAAAIAAAAIgBAAIAAABIAAAAIgBgBIAAgBIAAAAIgBAAIAAAAIgBAAIABAAIAAgBIAAAAIgCAAIACgBIAAABIAAgBIAAAAIAAgBIgBAAIgBAAIAAgBIgBAAIAAABIgBAAIABAAIAAABIgBAAIABADIAAABIABABIAAAAIgBABIAAABIgBABIAAAAIACAAIAAABIABABIABABIAAAAIgBABIgBgBIgBAAIgBAAIAAAAIgBAAIAAAAIAAgBIgCAAIABABIABABIAEAAIAAABIgBAAIgBAAIACABIgBABIgBABIgCgBgAgJAhIAEAFIADABIgFgEIgCgCgAADAgIAAABIAAgBgAAIAdIAAAAIABAAIAAAAIAAAAIAAgBIAAABIgBAAgAAHAcIAAgBIAAAAgAAHAbIAAAAIAAAAgAABAWIABABIAAABIABABIABABIAAgBIABAAIgBgBIgEgFgAAEAUIAAABIABABIAAABIABABIABAAIAAgCIgBAAIgBgCgAAPAUIAAgCIAAgBIAAAAIgBAAgAgQADIAAAAIABgBIgCAAgAAVgBIAAAAIAAAAIAAgBIAAAAIAAABIAAAAIgCgBIgBAAgAAJgDIAAABIgBgCIAAAAIABABgAAWgCIABgBIABgBgAgKgLIgCABIACAAIACABIAAAAIADADIABABIAAABIgBABIAAAAIABABIAEgDIAAgBIAAgBIgFgDIgCAAIAAAAIAAAAIgBAAIgCgBgAABgGIAAAAIABAAIABABIAAAAIAAAAIABABIgBgCIAAAAIAAAAIgCAAIAAgBgAAXgFIAAAAIABgBIgBAAgAAJgGIAAABIABAAIgCgCgAAUgHIAAABIABAAIABAAIABAAIgDgBIgCgBIABABIAAAAIABAAgAADgIIAAAAIAAgBIgDgBIABABIAAAAgAgqgMIAAgIIAAAAgAg8gnIADAAIAIABIAAAAIgJgCgAhFgnIABAAIAAAAIgBAAIgBAAIAAAAIACAAgAAIAgIABAAIAAAAIAAAAgAAGAgIAAgBIACABIgBAAgAAIAggAAJAggABJgNIABAAIgBAFg");
	this.shape_116.setTransform(512.95,264.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#996633").s().p("AAiAbIgIgCIgHgDIgCgBIgBgCIACABIgBAAIAAgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBgBIgBgCIAAgBIABAAIAAgCIAAgBIAAgBIABAAIAAAAIABgBIABAAIABgBIABAAIgBgBIAAgBIABAAIAAAAIAAgBIAAAAIAAAAIABAAIAAAAIAAABIABABIAAAAIABAAIAAAAIAAgBIgBAAIAAgBIAAABIgBgBIAAAAIABgBIABAAIAAABIAAgBIAAgBIACAAIAAABIABAAIAAABIgCABIAAAAIAAAAIAAABIAAAAIgBABIADgCIABABIgBAAIABABIAAgBIAEAAIAJACIABACIgDAQgAAjAKIABABIABAAIABABIAAgBIgBgBIgHgCIAAAAIAAABIABAAIAAgBIAAABIAAAAIAAgBIACADIABgBIAAAAgAAQAFIgGgEIgDgBIgEAAIABAAIAFACIAAAAIgBAAIgDgCIAEADIAAAAIADABIAAAAIgDgBQgCgBgDAAIgBAAIgBgBIgCgBIgEAAIAAAAIgCAAIACAAIACAAIAKAEIgKgBIgBAAIgGAAIgMgDIgQgEQgBAAgBgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAAgBIgBAAIgCgCIAAAAIgCgDIABAAIgBgBIAAgBIACgBIAAgBIAAgBIAAAAIABAAIgCgBIAAgCIAAAAIAAAAIABAAIAAAAIAAABIACAAIABAAIAAABIACAAIAAAAIAAAAIgBgBIgBgBIAAAAIgBAAIAAAAIgBAAIAAAAIAAgBIABAAIABAAIAAAAIgBAAIABAAIgBgBQgBgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIACAAIABABIACADIABAAIAAABIAEABIABABIAAAAIAAAAIAGACIAAABIADAAIgBgBIACABIAEADIALABIAAABIAAAAIgIgBIAGACIACAAIABAAIACAAIAOAFIAEADIAFACIAAACIABAAIAAABIgBAAIgBgBIAAAAIgEgDIgFgDIABABIgHgDIgHgCIAAgBIgBAAIAAABIABAAIAAAAIAJADIAEACIABABIAGAEIAAABIAAAAIgEgDIAAAAIgBAAIABAAIAAABIAAAAIABACIAAAAIAAABIgBgBIABABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgDgDIgBAAIAEAEIAAAAgAgegTIAAAAIgFgCIAAgBIgBAAg");
	this.shape_117.setTransform(508.65,262.25);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#996633").s().p("AAiAOIgMgFIgEAAIAHACIgGgBIAKADIABABIgBAAIgCgBIgCgBIgGgBIAAAAIgCAAIAAAAIgEgCIgCAAIgEgBIgBAAIATAFIgFAAIgCAAIgSgDIgBgBIgCAAIgDAAIgWgCIgCgBIgCgBQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIgBAAIgBAAIgCgBIgBAAIgCgCIAAAAIAAAAIgBgBIAAgBIABgBIAAAAIAAgCIAAAAIgCgBIAAAAIgBgBIAAAAIAAAAIAAgBIAAAAIABAAIAFAAIAAAAIgCgBIgBAAIAAAAIgBABIAAgBIABAAIgBAAIAAAAIgBABIgBgBIAAgBIACAAIAAAAIAAAAQgBgBgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAIACgBIACAAIAFABIABABIABAAIAHACIgBgBIABABIAHABIAFAAIADABIADABIAMADIAAAAIAAABIgJgCIAHACIABAAIABABIAIABIAFABIACABIALADIAGADIABABIgBAAIgagJIgEAAIAAAAIAEABIAHABIAFADIACABIAIADIAAABIgFgCIAAABIgBAAIACAAIAAABIAAAAIgEgBIAFACIAAAAIAAABIABAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgFgCIgBAAIABABIAGADIAAAAIgBAAgAgggKIACAAIAFABIgFgBIAAAAg");
	this.shape_118.setTransform(508.65,259.4875);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#996633").s().p("AgLAgIAAgBIgEgCIgBACIgBgBIgFgIIAAgCIAAgBIABAAIgBAAIgBgDIAAgBIgBAAIAAAAIgBAAIAAgBIABAAIAAgBIgBAAIAAAAIAAgBIAAABIgBAAIABAAIAAABIAAAAIgBABIAAAAIAAACIgBAAIAAAAIAAAAIgBgBIAAAAIAAgCIgBgBIgBAAIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIABABIAAgBIgBAAIAAgBIgEgCIgBgBIgFgEIAHgBIAAgBIAAAAIAAAAIgBgCIgBgCIAAABIgBgBIAAgCIgBAAIABgBIgEgEIAAAAIABAAIADACIgBAAIAAgBIgCgCIgBgBIACAAIgBgBIAAABIAAAAIgBgBIgCAAIABgCIABgBIgDgBIgGgHQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAIACgBIAAgBIAAgBIACgCIAAAAIABgBIAAAAIABAAIABAAIABgBIABAAIAAgBIgBAAIABgBIACAAIAAAAIAAAAIAAABIABAAIgBgCIABAAIABAAIAAAAIABgCIABABIAAACIAAAAIAAABIAAABIAAABIAAAAIABACIAAAAIAAAAIABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIACADIAAABIgCgCIAAACIABAAIAAAAIABADIACABIABABIAAAAIABgCIABAAIABABIAAgBIABACIAAABIABABIAAABIABAAIAAAAIACACIABAAIAAAAIABAAIABADIAEACIAAABIgDgCIACACIAAAAIABABIAGAEIgBAAIABgBIABgBIACAAIAAAAIABAAIAAAAIADABIAAAAIAAAAIAEABIACABIAAAAIAGAAIAAABIABgBIADAAQADABABACIALABIAAAAIAAAAIgIgBIAGACIABAAIABAAIACABIABAAIABAAIABABIAAAAIAEACIAHAGIADAGQACADAAADIAAABIgBgBIgCgGIgEgGIgCgCIAFAIIABAEIgDgFIAAABIgBAAIABABIAAAAIAAAAIAAACIgBAAIAAABIgBgBIgBgDIAAgBIgBAAIACAGIAAAAQgCgFgEgDIgBgBIgCgBIAAABIAEADIgDgCIAFAFIAAAAIAAAAIgFgFIgBAAIAAAAIgBAAIgCgCIgCAAIgBgBIAAABIgBAAIACABIABAAIAAgBIAHAFIgJgDIABABIAAAAIgCgBIgDAAIgXgCIgBAAIABAFIgCAAIAAAAIgDAAIABAAIgCABIABAAIAAAAIAAABIABADIgGARgAgOAdIABABIgBgCgAgbAPIABgBIgBAAgAgZANIAAgBIAAAAgAgNAIIAAABIACgBIAAAAIABAAIgBAAIAAAAIgBAAgAgLAGIABAAIABgBIAAAAIAAAAIABgBIABAAIAAgBIABgBIAAAAIAAgBIABgBIgCAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIgBAAIABAAIAAAAIAAABIAAAAIgBABIABAAIAAABIgBAAIABABIAAAAIgCABIAAABgAgbAEIABgBIAAAAgAgVACIAAABIAAAAIABAAIgBgBIAAgBIAAAAgAgKACIAAAAIAAgBgAAZABIgDgBIgBAAgAgiAAIABAAIgBAAgAgNAAIABAAIABAAIgBgBIAAAAIgBAAgAgIAAIAAgBIgBAAgAgEgCQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIABAAIABAAIAAgBIgCAAgAgEgBIgCgBIgBAAIAAAAIAAABIAAAAIAAAAIAAAAIgBgBIAAgBIABAAIgFgDIgBgBIgBAAIABABIADACIABABIABAAIAAABIgBAAIABABIAAAAIAAAAIABAAIADAAgAgBgDIACAAIACABIABAAIAAgBIgBAAIgDgBIgBABgAgZgSIAAAAIAAgBIAAAAIAAABgAgdgTIAAAAIAAAAIABAAIgBAAgAgqgTIABAAIgBAAgAghgXIABABIABABIAAAAIgBgCIAAgBIgBAAgAglgiIABAAIAAgBIAAAAIgBABgAAuAVIAAAAIAAABgAApAVIAAgBIABABIAAAAgAgLAGgAgJAFIgBABIgBAAg");
	this.shape_119.setTransform(502.9708,260.725);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#996633").s().p("AAGAJQgCgEABgCIAAAAIgBAAIAAACIAAABIAAADIgBgCIgBAAIAAAAIAAAAIAAgCIgBAAIAAABIAAACIgBAAIAAgCIAAACIAAABIAAAAIgBgEIgBgBIAAAAIAAADIgBgCIAAgBIgBAAIABAAIAAgBIgBgBIgBAAIAAABQAAAAAAAAQAAABABAAQAAABAAAAQAAABABAAIgDgCIgCgDIgBgGQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIABAAIABAAIABgBIACAAIAEAAIABgBIACAAIAAABIAAABIABgBIAAgBIAAABIABAAIAAAAIAAAAIAAgBIACAAIABABIAAAAIgBABIgBACIgBAAIABAAIgBABIABABIgCACIABACIAAAAIgBAAIAAgCIgBACIAAACIABACIABADgAAHgFIgBAAIAAABIABgBIAAgBIAAABgAABAGIAAgBIABACIgBgBgAABAGg");
	this.shape_120.setTransform(497.569,256.15);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#996633").s().p("AgDA9IgFgCIgDgCIgBgEIgBgMQAAgKADgJIABgDIACgBIABABIABgBIAAAAIAAgBIAAAAIAAgCIABgBIABAAIABgBIgBABIABgBIgBAAIABgEIAAAAIAAgCIAAABIgBgCIABgDIAAgBIgCgEIgBgPQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIACAAIAAAAIgBgDIABgBIAAABIABACIAAgBIABgBIABAAIABAAIAAgBIAAABIAAAAIABAAIABAAIABAAIABAAIAAgBIABAAIACAAIgBAAIAAACIABAAIAAABIAAgCIAAAAIAAAAIAAAAIAAAAIAAgBIAAAAIABAAIABABIAAAAIAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAAACIAAABIABgBIgCACIgBADIAAABIAAAAIgBADIABABIAAAAIAAABIAAACIABAEIABABIABATQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgBgBIAAACIgBACIAAAAIABABIgBAAIAAgBIAAABIgDACIgCAEIAAALIABAFIAAgBIgBgNIABAAIABAMIgBgLIABABIAAAKIABAAIAAABIgBAFIAAABIABADIAAADIAAgDIAAgCIAAgOIACAJIABAOIgJABgAAEAeIABAAIAAgBgAAFAaIAAACIABgCIABgCIAAgBgAgBACIAAABIABgDgAgBABIABgBIgBgBIAAAAgAAJgFIABAAIgBgBgAAKgSIAAACIAAAAIAAgBIABgCIAAAAIAAAAIgBABgAAHgTIABAAIgBACIABAAIAAgBIAAgCgAgFgYIAAgCIAAgBIABgBIAAAAIAAgBIAAgBIABgBIAAAAIAAAAIAAgBIAAAAIAAgDIABAAIgBgBIAAAAIAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIAAgGIABAEIAAgJIgCgKIABAAIAAAAIACAMIAAACIAAAAIAAgCIAAgEIAAgDIAAgDIAAACIABAAIAAAAIAAgBIABABIAAgEIAAADIAAAEIAAgEIABgBIAAABIAAACIABAAIAAgDIABAGIABACIAAgDIABACIgBgFIAAgBIAAABIAAAAIABAFIABAAIAAADIAAACIABAAIAAABIAAgBIAAgBIgBgHIACAEIADAMIAAAIIABAAIAAABIgBAAIAAABIgBAAIgCAAIAAAAIgBACIgCABIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAIAAABIAAAAIgCAAIABAAIAAgCIAAAAIgBgBIAAACIAAAAIAAABIAAAAIgBAAIAAgBIgBAAIAAABIgBAAIgBAAgAAAgbIAAgBIAAAAgAgDgcIABAAIAAAAgAgCgyIAAAAIAAAEg");
	this.shape_121.setTransform(497.205,249.925);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#996633").s().p("AAKAdQgFgCgFgEIgBgBIgBgBIAAAAIACADIgBgBIABABIAFAEIABAAIABABIAAAAIAAAAIgBAAIgBAAQgFgDgCgDIAAAAIgBAAIAAgBIgDgEIgBgBIgCgDIAAAAIAAgBIAAABIgBgBIAAABIABABIAAACIAFAGIAFAEIgDgBIgEgDIgGgHIAAgBIgBgFIgCgJIAAgSQAAgBAAgBQAAgBAAAAQABgBAAAAQAAAAABAAIABABIAAgBIABgCIABgBIACgCIABAAIABgBIABABIACAAIAAABIABgBIAAgBIAAAAIABgBIAAABIABgBIAAAAIAAAAIAAABIAAAAIAAAAIAAABIAAABIAAABIAAABIAAABIAAgDIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIABABIABABIABgBIABAAIAAACIAAACIAAABIAAgBIgBADIAAABIAAAAIgCAEIAAACIAAgBIAAABIAAAAIgBAGIABACIAAgBIAAACIAAADIgBABIAAAFIABAEIAAABIAAgBIgBgGIAAAGIAAABIAAABIAAAAIADAEIAJAGIAEACIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgCgBIgGgDQgFgEgCgDIAAgCIAAAAIAAACIAHAJIAGADIgEgCIAAABIgBAAIABABIAAAAIgCgBIACABIgGgDIAGAEIABABIAAABIgBAAIgDgDIgBAAIAFAEIAAAAgAAAgSIAAACIABgEIAAAAIAAgBIgBADg");
	this.shape_122.setTransform(496.225,245.225);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#996633").s().p("AgDATIgBAAIABAAIAAgCIgBgBIAAAAIAAAAIgBABIABABIgBAAIAAAAIABAAIAAAAIAAAAIAAABIAAAAIAAAAIgBAAIgBgBQAAABgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAAAIABgCIAAAAIAAgBIACgCIAAgFIgBgBIAAgBIABgCIAAgGIAAAAIABAEIAAgDIAAgBIAAgFIgDgKIABAAIABAAIACANIAAABIAAAAIAAgBIAAgFIAAgDIAAgEIABADIAAAAIABAAIAAgBIAAAAIAAADIAAADIABAAIAAgBIgBgGIABAAIAAAAIABAAIAAADIAAgDIAAgBIAAABIAAAGIACACIgCgHIADAGIgBgFIABAFIABAAIAAADIABACIAAABIAAgCIgCgHIADAEIACAGIACAOQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgCAAIAAAAIAAABIAAABIgEACIAAAAIgCgBIgBABIgBAAIAAABIgBAAIAAAAgAgGAPIAAAAIABgCIAAgBg");
	this.shape_123.setTransform(496.7,242.425);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#996633").s().p("AAABGIAAgBIAAgLIAAAMIAAABIAAgBIgBgGIAAgBIAAgBIAAAKIAAAAQgCgIAAgJIAAgCIAAgDIgBAAIACASIgBgFIAAgCIgBgCIAAgDIAAgEIAAAHIABAHIAAAAIgBAAIgBgOIAAAAIAAgCIABgGIAAgHIAAABIAAAAIgBACIgBALIABAKIgCgNIABgRIACgEIAAgBIAIgZIABAAIAAgBIAAAAIACgEQABgFABAAQABAAAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIABgDIACgCIABgBIAAAAIABAAIAAgBIAAAAIAAAAIABgBIAAABIABAAIAEgEIAAAAIgEAEIAAgDIABgBIgBAAIAAAAIAAAAIAAABIgBAAIAAgBIgCAAIABABIgCgBIAAAAIAAAAIgCAAIAAAAIACABIgDAAIgBgBIgBgBIgBgCIABAAIACgBIgBgBIgBgCIADAAIAAAAIAAAAIABgDIAAgBIgEgDIgBgGIAAAAIgLAhQgBAGgDAAIgBgBIAAABIgCABIgBABIgEADIAAAAIAAAAIgCABIgBgCIAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgBgBIAAABIgBABIgCABIAAAAIAAABIgBAAIAAgBIABgBIAAAAIABgCIAAgCIABAAIAAgBIAAAAIAAgCIABAAIgBAAIgBACIgBABIAAACIAAAAIAAgCIAAABIAAAAIAAABIAAAAIAAABIgCACIAAgBIAAgCQgBABAAAAQgBABAAAAQAAAAAAgBQAAAAAAgBQAAgDACgCIgBAAIABgBIAAABIADgFIAAgBIABgBIADgGIACgCIgBAAIABgBIAAAAIAEgJIABgFIAAgBIAFgIIAGgSIAAAAIAAAAIgEANIALgdIAFAAIAKgBIADAgIAAACIgBgCIgBgLIAAAAIgCgTIAAAEIABACIgBANIABAHIAAABIAAAAIgBgIIAAAAIgBAAIAAAAIAAACIgBgBIAAgBIAAgPIgBgBIgCAAIABAAIABABIAAABIAAABIABANIgBgKIABAPIgBABIAAgBIgBgEIAAAHIAAgBIgBgGIAAgBIAAgHIgBACIAAAAIgBACIABADIAAAAIgBgCIAAgBIAAgFIgBAAIAAAAIAAAAIAAAAIAAACIAAAAIAAgCIgCAGIAAABIABgBIAAAAIACgEIAAAEIgGASIACgBIABAAIABAAIABAAIACgBIAAAAIABAAIABAAIABAAIACAAIABAAIABAAIABgBIAAABIAAAAIAAAAIAAABIAAAAIAAgBIAAAAIABAAIAAAAIABAAIAAAAIAAAAIACAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAAIgBAAIgBACIgBABIAAABIABgBIAAABIgCABIABACIAAABIAAgBIABAAIAAAAIAAACIAAABIAAADIABAAQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAAACIAAAAIAAAAIgBAAIAAgBIAAgBIAAAAIAAABIAAAAIAAAAIAAAAIAAABIABABIgCAAIAAAAIADAAIgBABIAAAAIAAAAIAAAAIgBABIAAAAIAAAAIgBABIABAAIABAAIgBAAIgBAAIAAACIgBAAIAAAAIAAAAIAAAEIAAAAIAAABIAAAAIAAABIAAAAIAAABIAAABIAAAAIABgDIAAgDIAAAAIAAgCIAAAAIAAgBIABAAIABADIAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABABAAAAIAAABIAAAFIAAABIAAgBIAAACIAAgBIgCAFIAAABIgBABIgCAFIgBACIAAAAIgBABIABAAIgBABIAAABIAAAAIgDAGIAAAAIgCAFQgCAFgCABIgDAIIAAAAIgCAGIACgHIgBABIAAgBIgBADIAAACIgBABIAAACQgCAFAAAGIAAAKIACAOIAAABIgBgBIgCgPIAAgHIACgLIgBAAIgBADIgBASIABAKIAAAAIAAgCIgBgBIAAgEIgBABIgBgBIABACIgBAAIABAJIAAABgAAXgBIgBACIgBAAIAAABIABgBIADgHIAAgCIgCAHgAgRgNIgEAHIAAACIACgGIACgEgAAUgOIAAgBIABAAIAAgBgAAWgTIABAAIgBAAgAAXgUIAAAAIAAAAgAAXgWIAAAAIABAAIAAgBgAAUgWIAAAAIAAAAgAASgWIABAAIAAAAIgBAAgAASgaIABAAIAAgBIAAAAIABgBIAAAAIAAAAIgBAAIAAABIgBAAgAAVgeIAAABIAAAAIAAAAIAAgBgAAYgeIAAABIABAAIAAgCgAAWgdIABAAIAAgCIAAAAIAAAAIABAAIAAgBIAAAAIAAAAIAAgCIgBABIABAAIgBAAIAAABIAAAAIAAABIgBAAgAAMggIABACIAAAAIAAgBIABAAIAAAAIgBgBIgBAAgAANhAIAAgBIAAAAgAAOhBIAAAAIAAAAIAAAAgAAPhBIAAAAIAAAAgAAOhCIABABIAAgBIAAAAIgBAAIAAAAIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAABIAAAAgAAQhCIABAAIgBgBIgBABIAAgBIAAAAIAAABgAANhCIABAAIgBAAgAAOg5gAAOhDg");
	this.shape_124.setTransform(496.775,238.625);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#996633").s().p("AgDARIAAgBIAAAAIAAAHIAAgGgAAAgNIAAgCIAAAAIAAgBIAAACIAAABgAACgPIAAAAIAAgBIgBgBIAAAAIAAgBIgBgBIAAAAIAAgBIAAACIAAgDIAAAAIAAAAIABAAIAAAAIABgBIACABIAAAAIAAAAIABABIAAACIgBADIAAAAIgBABg");
	this.shape_125.setTransform(495.15,234.6625);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#996633").s().p("AgEANIAAgCIAAAAIgBABIAAAAIAAAAIAAABIgBAAIAAgBIAAAAIgCABIgBgCIAAAAIABgBIABgCIABgBIgBAAIABgCIgBgBIACgCIgBgDIAAgBIABABIAAACIABgCIAAgEIgCgGIAAgBIABAAQACAGgBADIAAABIABAAIAAgEIAAgCIAAgDIABACIAAAAIABAAIAAAAIAAgBIAAACIABABIAAgDIAAAAIAAACIABgDIAAAAIABAFIABABIAAAAIgBgEIAAgBIABAEIAAgDIABADIABABIgBABIAAABIABABIABAAIAAgBIgCgFIADADIACAEIABAKQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgBAAIAAAAIgBABIgBAAIgCABIAAAAIgBAAIgBAAIgBAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAIAAAAIgBAAIAAABgAgGAIIAAACIAAAAIAAgBIABgBIAAAAgAgFANIABgBIAAABg");
	this.shape_126.setTransform(492.7417,232.275);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#996633").s().p("AAGANQgCgFABgEIAAgBIgBAAIAAAFIAAACIAAADIgBgCIgBAAIAAABIAAAAIAAAAIgBgCIAAgBIAAADIAAAAIgBAAIAAAAIAAgCIAAACIAAABIAAgBIgBgEIgBgCIAAADIAAgCIAAAEIgBgEIgBAAIAAgBIABgBIAAgBIgBgBIgBAAIAAABIACAGIgDgEIgCgEIgBgKQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIABAAIAAAAIABgBIABAAIACgBIAAAAIABgBIABAAIAAABIACAAIABgBIAAAAIACAAIAAABIAAABIABgBIAAAAIAAgBIgBAAIABAAIABAAIAAABIAAgBIACAAIABABIAAABIAAAAIgBABIAAAAIAAABIgBACIgBAAIABAAIgBACIAAABIAAAAIABABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIABAEIAAAAIgBAAIAAgDIgBACIAAAEIACAHIAAABgAAFABIABgBIAAgBgAAHgJIgBABIAAABIABgBIAAgCIAAAAIAAABg");
	this.shape_127.setTransform(494.725,229.15);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#996633").s().p("AAEAJIgBgBIAAgBIAAABIgBgBIAAAAIgBABIAAgCIgBABIAAgBIAAAAIAAgBIgBAAIgBABIgCABIAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAABIABAAIAAgBIgCAAIgBAAIgBAAIABgBIAAgBIAAAAIABgBIgBAAIAAgBIAAAAIAAAAIgBAAIABAAIABgBIABgBIgCABIABgBIgBAAIABgBIABgBIAAABIABgBIAAgBIgCACIABgDIABgCIADgBIABACIAAABIAAABIAAABIABACIAAAHIgBAAIAAAAIABABIAAAAIgBABIABAAIAAACIgBABIAAAAgAAEAHIAAAAIgBAAg");
	this.shape_128.setTransform(495.225,226.745);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#996633").s().p("AgHAeIgBABIAAAAIAAgDIAAAAIAAgBIAAAAIgBgBIABAAIgBAAIAAACIAAAAIAAAAIAAABIAAAAIAAAAIAAAAIAAAAIAAABIAAAAIgBAAIgBgBIAAAAIAAABIAAAAIgBAAIgBAAIAAgDIAAAAIABgDIAAgDIAAgBIAAgCIABgBIgBAAIAAgGIAAgCIAAABIgBgCIAAgCIABgBIAAgBIABgCIACgMIABAAIAAAAIgCAJIACgHIABgCQACgEAEgEIAAAAIACgDIACgBIAAAAIAAgBIABAAIAAAAIAAAAIAFgGIABgBIAAABIgEAGIgBAAIAAABIgBAAIgBABIgBAAIgCADIACgCIABgBIABAAIAAAAIABAAIACgBIADgEIgCADIABAAIAAABIABgBIAAAAIAEgEIAAAAIgDADIABAAIAAABIABgBIgBABIgCADIAEgDIAAAAIAAAAIgGAHIgBAAIAAAAIgBABIgCADIAAAAIAEgDIgCACIABgBIADgCIABgBIABgCIABAAIgCACIgGAGIgBABIAAgBIgBACIAAAAIgBACIAAAAIAAABIAAAAIABgBIACgDIAAAAIAEgEIAAAAIAAAAIABgBIAAAAIABAAIgBABIgBAAIAAABIgDAFIAAgBIgDAKIAAADIABABIAAADIABALQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAIgCgBIAAACIgBABIAAABIgBADIgBAAIgBABIAAAAIgBgBIgDAAIAAABIAAAAIgBABgAgLAYIABgCIAAgDIgBAAgAgJAdgAAIgPIAFgFIgFAFg");
	this.shape_129.setTransform(520.675,261.825);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#996633").s().p("AgNAUIgBgBIABgBIgBAAIABgBIgBAAIABgCIABAAIABgEIAAgBIAAgBIAAABIABgFIAAAAIAAgCIAAABIAAgCIABgCIABgBIABAAIAAABIABgBIABgCIAAgCIABAAIAFgGIABgCIABgBIADgCQACgCAEgCIABAAIgBABIgGAEIgDADIABAAIAAgBIAEgBIAEgDIgDACIABABIAAABIAAgBIABAAIAAABIAEgCIgDABIAAAAIgFADIAFgCIAAAAIABAAIAAABIgDABIAAAAIAEgBIAAAAIgDACIgDACIAAABIAAAAIgBABIABAAIABgBIAAABIADgDIAAAAIAAAAIgCACIgBABIAAABIAAAAIgCACIgCADIABAAIAAAAIABgBIADgEIAAAAIABgCIAAAAIgBADIABgBIgBADIgDAEIAAgCIgCAEIABgBIABgBIAAACIgDACIABABIAAAGQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBgBIAAABIgBABIAAAAIgCACIAAAAIgBABIAAAAIgCgBIAAAAIgBAAIgBAAIAAAAIAAACIgBAAIgBAAIAAAAIgBAAIABAAIAAgDIgBAAIAAgBIAAABIAAABIgBABIAAABIAAgBIAAAAIgBAAIAAABIgBABIgBgBgAgLAOIAAABIAAABIABgDIAAgBIgBAAgAgJATIAAgCIAAADg");
	this.shape_130.setTransform(519.675,262.97);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#996633").s().p("AAAAVIAAAAIgBABIgBAAIgBAAIgEAAIAAAAIgBgBIAAAAIgBgBIgBAAIgBABIgCAAIgBgBIABgBIABgBIAAgBIAAgBIgBACIAAABIAAAAIgBABIgBgBIAAgCIAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIABgDIAAAAIACgBIAEgCIAAgBIABAAIgBgBIADgDIAAgCIAAAAIAAAAQABgBAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIAEgGIgCAFIACgDIABgBIAAAAIAAgBIAAgBIAGgGIAAgBIAEgGIAFgCIABgBIAAABIgGAFIgDAEIAIgGIgDADIAAABIAAAAIABAAIAAAAIAAAAIABAAIgEADIAFgDIAAAAIABAAIAAABIgDABIAAABIAEgCIAAAAIAAAAIgBABIgEAGIAAAAIAAAAIAAAAIAEgFIAAABIgEAEIABAAIgBABIAAAAIAAABIAAAAIgDACIAAACIAAAAIAAAAIAAAAIABAAIADgFIAAAAIACgCIAAAAIgBADIABgBIgCADIgCADIgBADIgJARQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIAAgBgAgNAOIAAAAIACgBgAAQgPIAAAAIgBABg");
	this.shape_131.setTransform(518.25,263.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#996633").s().p("AgRAmIgBgBIABAAIAAgDIAAgBIAAAAIAAAAIAAgBIAAAAIAAgCIgBAAIAAACIAAACIAAAAIAAABIAAABIAAABIgBAAIAAgBQgBABAAAAQAAAAAAABQgBAAAAgBQAAAAAAAAIgBgDIAAgBIABgBIgBAAIABgCIgBABIACgEIAAgBIAAgBIAAAAIACgHIAAgBIAAAAIABgDIABgEIAAAAIABgDIgBABIABgDIACgDIACgCIAGgNIAAAAIAAAAIgFAKIAGgJIAAgBIABgCIADgGIAAABIADgHIABgBIAEgDIAHgEIAHgCIABABIAAAAIgJADIgJAGIgBAAIgEAHIAFgHIAAAAIAPgGIABAAIgGACIAAABIAAAAIABAAIAAAAIgFACIgEADIAAAAIAAABIgBABIABAAIAAgBIAAAAIACgCIAGgDIACgBIABAAIABAAIgCAAIgDACIgFACIAJgDIABgBIABABIgFACIgBAAIAAABIAHgCIgGACIgGADIgBAFIAAgBIABgCIABgBIAAABIAGgEIABAAIAAAAIgDACIgDADIgBAAIAAABIAAABIAAAAIgCADIAAAAIgBACIgBABIgBAEIAAgBIAAABIAAABIACgDIAAgCIACgCIAAgBIADgFIACgCIAAAAIgBACIAAgBIgBACIABgBIgCAFIgBABIAAABIgJAVIgBACIAAABIAAAFIAAABIgBABIAAADIgBAHIgBABIgCgBIAAAAIAAABIgBACIgDADIgBAAIgBABIAAAAIgBAAIAAgBIgCABIAAAAIgBABIAAABIgBAAIgBAAIAAABgAgTAYIAAAEIAAABIAAAAIABgIgAAMgVIAAABIgBAAg");
	this.shape_132.setTransform(519.55,261.175);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#996633").s().p("AgLAgIgBgCIAAgCIgBAAIABgEIAAgBIABgFIAAgFIAAgDIAAgCIAAAAIgBgCQAAgDACgCIABgKIABgCIABAAIgBACIgBAHIAAACIAAABIACgJIAAgBIAAgBIAAgBIABAAIABgEIABgCIAEgGIADgCIABgBIAAgBIAHgEIAAAAIAAABIgGAEIAAABIgFADIAAACIABgCIAEgCIABAAIAAgBIAFgDIAAAAIgDADIABAAIgBABIABgBIABAAIgBABIgCABIgFAEIAAABIADgDIAGgDIABgBIAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABIgBAAIgDADIAEgDIABAAIAAABIgGADIgDADIgCADIAEgEIgCADIAEgEIAAAAIACgBIAAAAIAAAAIgCACIAAAAIgEAEIAAAAIAAABIAAAAIgCACIABgCIgBABIAAABIAAAAIgBAEIAAABIABgBIAAAAIACgEIgBAAIABgBIAAABIABgDIADgDIAAAAIgCADIgCAEIACgCIgCAGIAAAbIgBACIgCgBIAAABIAAACIAAAAIgCADIAAAAIgBABIAAAAIgBgBIgBAAIgBABIgBAAIAAABIAAABIgBAAIAAAAIAAABIgBAAIAAgBIAAAAIAAgBIAAAAIAAgDIgBgBIAAAAIAAAAIAAACIAAABIAAAAIAAABIABAAIgBACIgBAAIgBgCIAAABIAAABIgBAAgAgKATIgBAFIABABIAAgEIAAgCgAADgLgAAJgTIACgCIABAAIgDACIgCABgAAHgWIAEgDIACgBIgCABIAAAAIgEADIgCABIgBABg");
	this.shape_133.setTransform(516.625,267.7281);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#996633").s().p("AgIAgQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIAAABIABgDIAAgBIABgEIABgCIgBABIABgBIgBAAIABgGIAAgCIAAABIgBgCQAAgDACgCIgBgJIABAAIAAAGIABgPIgCgQIAAgBQABAAAAABQACAOgBAGIAAADIABAAIAAgPIAAgGIABAEIAAAAIABAAIAAgBIAAAAIAAAJIABAAIAAgBIAAgDIAAgHIAAAAIAAgBIAAABIAAAEIABgFIAAAAIAAAAIABALIABADIAAAAIgBgLIABAJIAAgIIABAIIABABIAAABIgBAEIAAAAIABAEIABAAIAAgCQAAgHgCgGIADAIIACAKIABAYQAAABAAABQAAABAAAAQAAABgBAAQAAAAgBAAIgBgBIAAABIgBACIgBAAIgCADIAAAAIgBABIgBAAIgBgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAAIAAAAIgBABIAAABIgBAAIAAAAIAAAAIgBAAIAAAAIAAgBIAAgDIAAgBIAAAAIgBACIABAAIAAABIAAAAIAAABIgBAAIAAAAIAAAAIAAAAIAAgBIgBABIAAgBIAAAAIAAABIgBABIgBAAgAgFAeIABAAIgBAAgAgGAUIAAABIAAADIAAAAIAAABIAAgDIABgCIAAAAgAAAgWIAAACIAAABgAAAgUIAAAAgAADgYIAAAAIAAAAg");
	this.shape_134.setTransform(516.2143,266.7448);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#996633").s().p("ABGCAIgGgDIgFgDIABAAIgEgDIgDgEIgEgHIAAAAIgHgJIgBgBIAAAAIgBgBIgBAAIgGgCIgQAAIgBAAIgsgGIgBgBIgVgGIgCgBIgBAAIgBgBIAAAAIgBAAIAAgBIgBAAIgBAAIgDgCIgDgCIgDgCIgMgJQgGgGgFgIIgBAAIgEgBIgCgCIgEgDIgCgEIgCgDIAAgCIAAgBIAAgQIAAgHQAAgLgDgQIgCgPIAAgIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIACAFIgFgVIgKAAIAAAAIgBAAIAAAAIgDAAIgBgTQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAIABAAIABABIAAgCIAAgBIABgBIAAAAIAAgBIAAgGIABAEIAAgBIABABIAAgBIAAgBIAAADIABAAIAAAAIAAgDIAAgBIAAAAIABgBIAAABIAAADIABABIABAAIAAAAIABAAIAAgBIAAgBIAAAAIAAACIABAAIAAAAIAAgBIAAgBIABAAIABAAIAAAAIAAgBIAAgBIAAABIABAAIAAABIABAAIAAAAIAAgBIAAAAIgBgIIgBAAIAAgBIAAABIAAAAIgBACIAAACIAAAAIABACIgBgCIAAAAIAAgBIgBABIAAgBIAAABIgBAAIAAABIAAAAIAAAAIgBAAIAAABIgBgBIAAgDIAAACIAAACIgBAAIAAgEIAAgBIAAgCIgBgDIAAADIgBgCIAAADIABADIgBgDIAAgBIgBgCIAAgBIABgDIgBAAIAAgDIAAABIgBAAIAAAAIAAAFIABACIAAACIAAABIAAAAIgBgBIAAgBIAAgBIgBgDIgCgYQgBgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIACABIAAgBIABgBIAAAAIACgCIABAAIAAAAIABgBIAAAAIABABIADAAIAAgBIAAAAIABgBIACAAIgBABIAAACIABgCIAAAAIAAgBIABAAIAAACIABAAIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAABIABgBIgCADIAAAAIgBADIAAABIAAAAIAAAAIAAAAIgBAEIABACIAAgBIAAABQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAIAAAHIgBgEIAAAEIAAAAIgBABIAAAJIABAAIAAABIABAHIgBAAIABACIABgBIAAAAQAAgBABAAQAAAAAAAAQAAABABAAQAAABAAABIABACIACACIAFARIAAgBIACAHIgBgFQAEANAAAHIABAEIABAEIABAKIAAADIABALIAAACIABACIAAAHIAAgBIAAAUIAAACIAAADIADgDIALARQADAGAGAGIAIAIIAIAEIAAAAIAAAAIABAAIACABIAVAHIgBAAIAbAEIACAAIgCAAIgbgEIABAAIgRgFIARAGIgBAAIAeAFIAMABIAKABIAKABIAFABIAGADIABABIAAAAIABABIAAABIACABIADAEIAEAHIABABIADAGIACACIACACIAAAAIAGAEIAIACIAIAAIAHgBIABAAQAIAAAJgCIADgCIABgBIAAAAIACgBQACgDABgCIAAgBIAAgCIAAgCIABACIAAABIAAACQgBAEgCACIgCABIAAAAIgFADQgFACgMABIgBAAIgQAAQgJgBgFgFQAFAFAGABQAEACAJAAIADAAIAEgBIAAAAQAJAAAGgCIAGgDIAFgEIgBACIgCACIgGADQgGACgGAAIACABIgBAAIgCABIADAAIgHAAIAKAAIAGgCIgFACIgLABQALAAAHgDIAFgCIACgBIABAAIgBABIgEACQgEACgGABIgLABQAKAAAFgBIAHgDIAGgEIACgBIgBABQgDADgEACIgHADIgPABQgKACgIgBQgGgBgDgCQgEgBgEgEIAAAAIgDgDIgKgPIADAGIAAgBIAEAHIACAEIADADIgDgDIADADIAAAAIAHAFIADABIAFABIADAAIAJABIAJgBIANgCIABAAIgBABIgNABIgKABIABAAIAJAAIAGgBIACAAIgBABIgHAAQgKACgIgBIgKgDIgIgFIgBgBIgEgEIgDgEIAAgBIgFgHQAAgCgDgDIgBgCIgBgBIAAAAIAAAAIgJgEIgGAAIgLgBIAAAAIgJAAIAAAAIACABIAZACIAEABIACABIABAAIAAABIAAAAIADADIAFAIIAAgBIAEAHIACAEIAEADIAAAAQAEAEAGACIALADQgGAAgFgCgAgxBCIAAABIABAAIAAAAIAAAAIAAAAIgBgBIgCgBgAhbgZIAAAEIABABIAAACIABAGIAAgBIgEgaIgCgGIAEAUgAhrhMIAAABIAAAAIADAJIAAABIABABIAAAAIABACIAAABIAAABIAAAAIABACIACAEIAAADIAAgBIAAgDIgFgOIAAABIAAgBIAAAAIgBgFIAAAAIgBgDgAhshGIgBAAIABABIABABIAAgBIgBgCIAAAAIAAABgAhthJIgBACIAAAAIABAAIAAgCIAAgBIAAABgAhqhOIABABIABADIgCgFgAhvhPIAAABIABAAIAAgBIgBgBgAhvhPIAAAAIAAgBIAAAAIAAAAIAAAAgAhsh6IAAACIAAAAIAAgBIABgCIAAgBIgBAAIAAACgAhth9IAAgBIAAAAIgBAAgAhth/IAAAAIAAAAg");
	this.shape_135.setTransform(506.2813,255.325);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#996633").s().p("AgDAwIAEgjIAAAAIgBADIAAALIgDAIIgBAJIAAAAIABgGIgBAAIgBAAIAAABIAAABIAAgBIACgOIgBABIAAABIgCAOIAAAAIAAAAIgBABIAAgBIAAABIgBgBIABgGIgCAIIACgQIAAgFIgBAJIAAADIgBAFIABgIIAAgHIgBAMIAAADIgBABIAAgDIABgKIAAgDIAAgBIAAgBIACgGQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAAgFIgBAAIAAgCIAAADIAAACQgCAJAAAKIAAAAIAAgbIABgQIABgVQAAgEACgCQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIAAgCIABgCIAAgBIACgDIABAAIAAgCIAAAAIACACIABgBIABAAIAAgBIAAgBIABgBIABAAIAAAAIAAAAIABAAIgBABIAAAGIABABIgBABIABAAIAAgDIAAgBIAAgBIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIABAAIABADIAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAAABABAAIAAADIAAADIgBAFIAAAAIAAACIgCAFIAAACIAAABIAAAAIgBAIIAAAGIAAAEIgCADIgBAOIgBABIAAgBIABgKIgCAJIAAADIgCAeIgCAHIAAABIgBgBgAADACIABgFIAAgBgAAHgeIABAAIABgHIgBgCg");
	this.shape_136.setTransform(495.575,237.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#996633").s().p("AgIAgIgBgEIAAgBIAAABIABgDIAAgBIABgEIABgCIgBABIABgBIgBAAIABgGIAAgCIAAABIgBgCQAAgDACgCIgBgJIABAAIAAAGIABgPIgCgQIAAgBQABAAAAABQACAOgBAGIAAADIABAAIAAgPIAAgGIABAEIAAAAIABAAIAAgBIAAAAIAAAJIABAAIAAgBIAAgDIAAgHIAAAAIAAgBIAAABIAAAEIABgFIAAAAIAAAAIABALIABADIAAAAIgBgLIABAJIAAgIIABAIIABABIAAABIgBAEIAAAAIABAEIABAAIAAgCQAAgHgCgGIADAIIACAKIABAYQAAABAAABQAAABAAAAQAAABgBAAQAAAAgBAAIgBgBIAAABIgBACIgBAAIgCADIAAAAIgBABIgBAAIgBgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAAIAAAAIgBABIAAABIgBAAIAAAAIAAAAIgBAAIAAAAIAAgBIAAgDIAAgBIAAAAIgBACIABAAIAAgBIAAAAIAAADIgBgBIAAABIAAAAIAAAAIAAgBIgBABIAAgBIAAAAIAAABIgBABIgBAAgAgGAUIAAABIAAADIAAAAIAAABIAAgDIABgCIAAAAgAAAgWIAAACIAAABgAADgYIAAAAIAAAAg");
	this.shape_137.setTransform(498.5643,226.4948);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#996633").s().p("AgEAjIgBgBIABAAIAAgEIgBgBIABAAIgBAAIAAADIAAAAIAAABIAAAAIAAAAIgBAAIABABIAAAAIAAABIgBAAIgBgCIAAAAIAAAAQAAABAAAAQgBABAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABgBIAAAAIABgEIAAAAIAAgBIAAAAIABgEIABgBIAAgBIgBABIABgBIgBAAIABgGIAAgDIAAABIAAgCIACgFIABgKIAAAAIAAAAIAAAEIAAADIABgFIAAgBIAAgBIADgbIAAgBIABABIgCATIABgHIABgDIABgGIAAAEIAAAAIABABIAAgBIAAgBIABABIgBACIAAAEIACgHIAAgBIABgBIAAABIgBAEIAAABIACgGIAAAAIgCALIABAEIAAAAIABgGIAAAFIABgJIgBAJIABAAIAAABIgBAEIAAAFIAAAAIAAgBIABgBIAAgNIABgBIABAJIgBAkIgBACIgBABIgCgBIAAACIgBABIAAABIgCACIgBAAIAAAAIgBABIAAAAIgBgBIgCAAIAAABIAAAAIAAABIgCAAIAAABgAgHAaIAAABIABACIAAgFIAAgCgAgFAiIAAgBIAAABgAgFAig");
	this.shape_138.setTransform(496.78,228.075);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#996633").s().p("AgMAQIgBgCIAAgCIgBAAIACgDIAAAAIAAgBIABgDIABgBIAAAAIAAAAIABgEIABAAIAAgBIAAAAIAAgBIACgCIABgCIgBgBIAAgFIAGgCIAAAAIgBACIABgBIABAAIAAABIAAABIABAAIAAABIAAgCIAFgCIADAAIAEgBIgDABIAAABIAAAAIABAAIAAAAIACAAIAAABIAAABIAAAAIgDABIAEAAIgBAAIgGACIgBACIAAAAIABgBIAAABIAEgCIAAAAIABgBIAAABIgBAAIAAAAIgDACIAAABIABgBIgBACIgBABIAAAAIgBAGIgCAFIABgCIAAACQAAABgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCAAIAAAAIgBABIAAAAIgBACIAAAAIgBAAIAAABIgCgBIAAAAIgCABIgBAAIAAABIgBABIAAAAIAAAAIgBAAIAAgBIAAAAIAAgCIAAAAIAAgBIgBACIAAAAIAAABIAAAAIABAAIAAABIAAAAIgBABIAAgBIgBgBIAAABIAAAAIAAAAIAAABIgBAAIAAAAIgBAAgAgKAGIgBAEIABABIAAgEIABgBIAAgBgAgGgKIABAFIABgCIAAAAIgBgEg");
	this.shape_139.setTransform(495.95,229.925);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#996633").s().p("AAGArQgCgTABgKIAAgDIgBAAIAAAdIgBgFIAAAAIgBAAIAAABIAAAAIAAgNIgBABIAAABIAAAEIAAAJIAAAAIgBABIAAgBIAAgFIAAAHIAAAAIAAAAIgBgOIgBgGIAAABIAAACIAAAMIgBgMIgBgCIAAAAIABgFIAAgCIgBgEIAAABIgBgBIAAADQAAAJACAIIgDgLIgDgvQgBgEADgBIABABIAAgBIACgDIACgEIAAAAIABgBIABAAIAAABIAAAAIACAAIAAAAIAAAAIABgCIAAAAIABgBIAAAAIAAAAIABAAIAAAAIAAABIAAAFIAAAAIAAABIAAgDIAAAAIABgBIgBAAIAAgBIAAgBIABgBIABAAIAAADIAAgBIAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAABAAAAQACADgBACIAAABIAAAAIgBADIAAABIgBAHIgBABIABAAIgBABIABAAIgBAHIAAAAIAAADIAAgBIABADQAAAEgCACIABAOIgBAAIABAiIAAABgAAHgeIgBAEIAAAAIABAAIAAgBIAAgFIAAAAIAAgBIAAADgAAEghIAAABIAAAEIAAAAIAAgDIABgDgAABAdIAAgBIAAAEIAAgDgAABAdg");
	this.shape_140.setTransform(495.7357,237);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#996633").s().p("AgMANIgBgBIgCAAIAAAAIAAAAIAAAAIgBABIgBAAIAAAAIgBAAIAAAAIAAgBIAAgBIABAAIAAgCIgBACIAAAAIAAAAIAAABIgBABIgBgBIAAgBIAAAAQgBABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIAAgCIAAAAIAAgBIAAAAIACgCIAAgBIACgCIABgBIgBAAIABgCIAAAAIABgCIAAgBIACgDIACgBIgBAAIAAAAIABAAIADgDIADAAIAEgCIAEgBIABAAIgBABIAAAAIgGACIADgBIABAAIAQgBIAGgBIABABIgBAAIgIABIgJAAIAAABIACAAIAGAAIABAAIADABIAFAAIgDABIAAAAIgBABIABAAIAAAAIgFABIAHAAIAAAAIAAAAIAAABIgEAAIAFAAQgEACgFgBIAAAAIgDABIADAAIAAAAIAFAAIgFABIgCAAIAAABIgBgBIgDAAIgDABIAAABIAAAAIAAAAIACAAIAHgBIAAAAIACgBIAAABIgCABIAAAAIgJACIgBAAIgBgCIAAAAIAAACIgBAAIgBABIAAAAIAAABIgBAFQgBABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBgBIAAABIgCABIgDABgAgRADIgCADIAAAAIAAABIACgCIAAgCIAAAAgAgRAAIAAABIABgBgAgGgJIABAAIADgBgAATgHgAATgHIAFAAIgFAAgAAHgNIAEAAIAAABg");
	this.shape_141.setTransform(500.0417,375.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#996633").s().p("AgNgFIAEgHIACgCIABgBIAEgEIACAAIAAAAIAAADIABgBIAEgBIABABIABAAIABAAIACABIAAABIABABIAAAAIgBABIAAACIAAAAIABABIABAAIAAACIAAAAIAAABIgBAAIAAABIAAAAIAAAAIAAABIgBAAIAAAAIABAAIAAAAIgBABIAAABIAAAAIgCgBIgBABIgCABIgBAAIgBABIABAAIgBABIgBABIAigBIABAAIgBABIgeAAIAAABIAcAAIAAABIgGAAIAAAAIAAABIABAAIAAAAIACAAIAAABIABAAIAAAAIgBAAIABABIgBAAIgFAAIAAAAIgBAAIAIABIAAAAIgOAAIgFACIABAAIAHAAIgFAAIALAAIAAAAIAAAAIgLABIgCABIAAAAIgFgBIgBABIgEAAIgBABIADAAIAQgCIAAABIgJACIgyAHgAAGgFIgCACIADgBIAAgBIABAAgAAKgHIAAAAIAAAAIAAAAIABAAIAAgBIgCAAIABABIAAAAgAAIgHIACAAIAAAAIgBAAIAAgBIgBABIAAAAg");
	this.shape_142.setTransform(495.225,376.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#996633").s().p("AAEAJIgBgBIAAgBIAAABIgBgBIAAAAIgBABIAAgCIgBABIAAgBIAAAAIAAgBIgBAAIgBABIgCABIAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAABIABAAIAAgBIgCAAIgBAAIgBAAIABgBIAAgBIAAAAIABgBIgBAAIAAgBIAAAAIAAAAIgBAAIABAAIABgBIABgBIgCABIABgBIgBAAIABgBIABgBIAAABIABgBIAAgBIgCACIABgDIABgCIADgBIABACIAAABIAAABIAAABIABACIAAAHIgBAAIAAAAIABABIAAAAIAAABIAAAAIAAACIgBABIAAAAgAAEAHIAAAAIgBAAg");
	this.shape_143.setTransform(499.075,374.995);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#996633").s().p("AgFAJIAAgDIgBgBIgBgCIAAgBIAAgDIgBgBIAAgBIAAgBIABAAIAAAAIgBgBIABAAIgBAAIAAgBIAAAAIAAgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAABIAAgBIABACIAAAAIABABIABAAIABAAIABgBIACACIACgBIAAAAIgCABIACAAIAEgBIADgBIAAABIgGABIAAAAIAAABIAAAAIACgBIACABIACgBIgBABIAAABIAAABIgBABIACgBIAAAAIAAACIgCAAIACAAIAAAAIgDABIgBABIADgBIgBABIgBABIACgBIAAAAIgCABIgBABIgBgBIAAAAIgBABIAAABIABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABgBAAAAIAAAAIgCADIgDACIgGACQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_144.setTransform(501.475,374.95);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#996633").s().p("AAFAKIgBgBIgCAAIgCAAIAAAAIgBAAIgBgBIgBgBIgBAAIgCAAIAAgBIAAAAIAAAAIAAgBIAAgBIgBABIAAAAIAAAAIAAABIgBgCIgCAAIAAgBIAAgBIAAAAIABAAIAAAAIACgBIACgBIABgBIgBAAIABAAIADgCIACgCIgBACIABgBIABAAIACgCIACgCIABAAIADgCIABABIAAAAIgDABIgFADIgBABIABAAIAAAAIACgCIACAAIADgBIAAAAIgCABIAAABIABAAIAAAAIAAABIgBAAIgCACIABAAIAAAAIACgCIACgBIgBABIgDACIADgCIAAABIAAABIgBAAIACAAIAAABIgDABIAAAAIACgBIAAABIgBAAIAAABIABgBIAAAAIgBABIAAAAIAAABIgBAAIAAAAIgBABIAAABIABAAIACgDIAAADIgCADIAAABIAAAAIAAABIgBABIAAABIgCgBgAgIACIABAAIAAABIABgBIAAAAIAAgBg");
	this.shape_145.setTransform(501.325,374.35);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#996633").s().p("AgMALQAAAAgBgBQAAAAAAAAQAAAAABgBQAAAAAAAAIAAAAIgBABIgCgBIgCgDIAAAAIgBgBIAAAAIAAgCIAAAAIAAgBIAAAAIAAAAIAAgBIgBAAIgBgBIAAAAIABAAIABAAIAAAAIABgBIgCAAIAAAAIAAgBIAAACIgBgBIAAgCIABAAIgBgBIAAgBIAAAAIABAAIABAAIAAAAIABAAIAAAAIABABIABgBIABAAIACAAIAAgBIABgBIABAAIAAAAIABgBIACgBIABAAIABABIAHgDIgEADIAEgBIATgCIAAABIAAABIgLAAIABABIACAAIACAAIAEAAIAAABIgDAAIAAABIAAAAIABAAIgBABIACAAIAAAAIAAABIgBAAIgCAAIgBAAIAEABIAAAAIgHAAIgCACIAAAAIAEgBIABAAIACAAIgDAAIgBABIgCAAIABAAIABAAIADgBIABABIgBAAIgFABIgBAAIgCAAIgBAAIgCAAIAAABIABAAIAIgBIAAAAIgOAFIgDAEIgDACIgBAAIgDAAIgBAAgAgQgDIABAAIABAAIAAgBIgBABIgCgBIAAABIABAAIAAAAgAALgFIAAAAIACAAIACAAIABAAIgCgBIgEAAgAgEgIIACAAIgBAAgAAQgCIAAAAIAAABg");
	this.shape_146.setTransform(499.525,376.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#996633").s().p("AgDARIAAgCIgCAAIgEgDIAAgCIAAgCIAAAAIgBAAIgBgBIAAgBIAAAAIABAAIAAgBIABAAIAAAAIgBgBIAAABIgBAAIAAgBIABAAIgBAAIAAgBIAAAAIgBgCIAAAAIABAAIAAgBIABABIACAAIABAAIABAAIAAgBIAAAAIAAAAIACgBIABAAIABAAIACgCIgBAAIABgBIAAAAIAAAAIAAACIgBABIABgCIAAAAIAAgBIAFgIIAEgEIABAAIAAAAIgFAHIAFgEIgBACIAAAAIAAABIABgBIAAAAIAAAAIAAABIAAAAIAAgBIADgBIAAAAIgCABIAAAAIgDAEIADgDIABAAIAAABIgCABIADgBIAAAAIgDAEIAAACIABgCIAAACIACgEIAAAAIAAAAIAAAAIAAABIgCADIAAABIgBABIAAABIgBAAIABAAIAAABIAAAAIAAgBIADgEIAAAEIgBADIAAABIgBAAIAAABIgCADIgGAGIgDADIgBABIgCgBgAgJADIACAAIAAgBIgCAAgAACgFIgBABIABAAIADgFg");
	this.shape_147.setTransform(493.825,378.7825);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#996633").s().p("AgGAIIAAgBIgBgBIAAgBIAAgCIAAgEIgBgBIAAgCIABAAIAAAAIAAgBIgBAAIAAAAIAAgBIABAAIAAAAIgBAAIAAgCIABgBIAAAAIABABIABABIABABIAAgBIABABIACgBIABACIABgBIABAAIgBABIgBAAIABABIADAAIACgBIADgBIAAABQgEACgCgBIgBAAIAAABIADAAIACAAIACAAIgCABIAAABIABAAIAAAAIgDAAIAAABIABAAIgBAAIACgBIgBABIACAAIAAAAIgBAAIABABIABAAIAAAAIgEABIgBABIAAAAIADAAIgCABIgBAAIAAABIgBgBIAAAAIgBABIAAABIAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAIgCADIgDACIgGABIAAAAIgBgCgAgGgGIAAAAIABABIAAAAIAAgBIgBAAg");
	this.shape_148.setTransform(496.65,377.8393);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#996633").s().p("AgMAWIgCgBIAAAAIgCgBIAAAAIAAAAIgBABIAAABIgCAAIAAgBIABAAIAAgBIAAgBIAAgBIAAAAIAAgBIgBACIAAACIAAAAIgBAAIAAAAIgBgBIAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIgBgBIAAAAIABgBIAAgBIABgBIgBAAIABgBIACgCIAAgBIABAAIACgDIABgBIAAAAIABAAIgBAAIACgDIACgCIABgCIAAAAIACgCIACgBIAGgGIACADIAAgBIAAgBIAAAAIAAACIgBgDIAAgBIACgBIADgCIABgBIACgBIAFgDIAJgEIABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgNAFIgEADIgBABIABAAIABgBIADgDIAGgBIAFgCIAAAAIgEACIABAAIAAABIAAAAIAAAAIgHAEIABAAIADgBIgBAAIAGgDIAAAAIAFgBIgHACIgDACIAFgCIAAgBIABABQAAAAgBAAIgCACIgBAAIAAABIAFgCIAAABIgCABIAAAAIgEACIgEACIAHgDIAAAAIABgBIAAABIgBAAIgGAEIAAAAIgBABIAAAAIgBAAIgBACIgCACIAAABIABAAIABgBIACgDIgCABIACgCIAAABIAFgEIgFAGIACgBIgDADIgCACIgEACIABAAIAAgBIABAAIABAAIgFAGIgFAJIAAABIgBABIgCAAIgBgBIAAAAIgCABIAAABIgBAAIgCAAIgBABgAgSANIAAABIgBABIAAABIABgCIABgCIABgCgAABgFg");
	this.shape_149.setTransform(493.25,378.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#996633").s().p("AABAKIgBgBIAAAAIAAAAIAAAAIgBgBIgCAAIgBgBIAAAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBAAIgBAAIAAgBIABgBIAAAAIAAAAIAAgBIgBABIAAAAIAAAAIAAABIgBAAIAAgBIAAgBIgBAAIgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgBIABAAIACAAIABgCIACAAIAAgBIAAAAIAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIABgCIACgBIgCACIABAAIABAAIAAgBIAEgBIABgBIACAAIACgBIABAAIABgBIAAABIAAAAIgCABIgHACIgBABIABAAIACgBIABAAIAEAAIABgBIgCABIABABIAAAAIAAABIgCAAIgBABIAAAAIAAAAIABAAIAAAAIADgBIAAAAIgDABIADAAIAAAAIAAABIgCAAIAAAAIACAAIAAABIgDABIgBAAIAAAAIABAAIAAAAIABAAIABAAIAAAAIgBAAIgBABIAAABIgCAAIAAABIAAABIAAgBIADgCIAAAAIAAACIgBABIgBABIgBACIgCABIgCADIAAAAIgCgBgAgJAAIAAAAIACAAIAAAAg");
	this.shape_150.setTransform(490.3667,380.195);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#996633").s().p("AgUAMIABgBIgBAAIgCgBIAAgBIgCgDIAAAAIAAgBIABgBIAAgDIgBAAIAAAAIAAgBIgBAAIAAgBIABAAIAAABIAAgBIABABIAAgBIABABIAAAAIABAAIAAgBIgBAAIgBgBIAAABIABAAIgBAAIgBAAIAAgBIAAAAIAAgBIABAAIAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAAAAIABAAIABAAIADABIAAABIADAAIAAAAIABABIAAgBIAEABIACgBIgBAAIACgBIABABIADgBIgBAAIAEgCIgDADIADgCIAAAAIABAAIACgCIAAgBIABAAIAJgEIAGgBIAGABIABABQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAIgGgBIgGABIgJAEIgBAAIgBABIAAABIACgBIAAgBIAHgDIAEAAIAGAAIABAAIgFAAIABABIgBABIABAAIAAAAIAFACIgEgBIgFAAIAFAAIABABIgBAAIgDAAIAEABIgIABIgBABIAAABIADgCIAEAAIgEAAIgDACIADgBIADgBIgDABIgCACIgBAAIAAAAIgBABIgBAAIgCACIAAAAIACAAIAAgBIAGgDIAAAAIgMALIgBAAIgFADIAAAAIgCAAQgFACgGAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAgAgWgCIABAAIABAAIADAAIABAAIgDgBIgCABIAAAAIAAAAg");
	this.shape_151.setTransform(489.45,384.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#996633").s().p("AAAAZIAAgCIAAAAIAAABIgCAAIgBAAIgDAAIgBAAIAAgBIgBgBIAAAAIgBgBIAAgBIgBAAIAAABIgBAAIgBgBIgBAAIAAAAIABAAIAAgBIAAAAIAAAAIABgBIAAAAIABAAIAAgBIAAAAIAAgBIgCABIAAABIAAAAIAAAAIAAAAIAAABIgBAAIAAAAIAAgBIAAAAIAAgBIgBAAQAAAAgBABQAAAAAAgBQgBAAAAAAQAAAAAAgBIABAAIAAgBIABgBIAAAAIABAAIgBAAIACgBIABAAIAAgBIADgBIABgBIgBAAIABAAIAAAAIADgDIABgCIgBAAIABgBIABgCIAAAAIABAAIADgHIgCAFIACgEIABgBIABgBIAAgBIAAAAIAAgCIABgBIgBgFIgBgGIAAgBIABAAIACALIAAgBIABgEIgBgFIABAEIABgBIAAABIAAgCIABAAIgBgEIAAgBIABAEIAAAAIAAAHIAAgGIAAgBIAAAAIAAAAIABgBIAAABIAAACIABABIAAgEIAAAAIABAJIABADIAAAAIAAgFIgBgFIAAAAIAAAAIACAJIgBgIIAAAAIABAIIABAAIAAABIgCAEIAAADIAAAAIAAABIAAAAIABAAIAAgBIAAgBQACgGgBgGIAAAAIACAIIAAADIgBABIAAACIAAAAIAAABIgBAAIAAACIgDAIIgBABIAAABIgIALIgDACIAAAAgAgKAOIgBABIACgCIACgBIgBAAgAANgSIAAgBIAAABg");
	this.shape_152.setTransform(485.875,387.23);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#996633").s().p("AgEATIAAgBIAAgBIAAgBIAAABIAAABIgBAAIABAAIAAAAIgBABIgBAAIAAgBIAAAAIAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIgBgBIAAgBIAAABIABgCIABgEIABAAIgBAAIABgBIgBAAIABgCIAAgCIAAABIgBgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABgBIgBgEIABAAIAAADIABgDIAAgGIgCgKIAAAAIABAAQACAJgBADIAAACIABAAIAAgFIAAgDIAAgFIABADIAAAAIABAAIAAgBIAAAAIAAAGIABAAIAAgCIAAgFIAAAAIAAAAIAAAAIAAAEIABgEIAAgBIAAABIABAGIABACIgBgHIABAEIAAACIAAgFIABAFIABABIgBACIAAAAIABADIABAAIAAgCIgCgHIADAEIACAHIABANQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBAAIAAAAIgCACIgCAAIAAAAIgBABIgBAAIgBgBIAAAAIgBABIAAgBIAAABIgBAAIgBABgAgGAMIAAADIAAAAIAAAAIAAgBIABgCIAAgBgAAAgNIAAACIAAABgAAAgLIAAAAg");
	this.shape_153.setTransform(483.8143,390.65);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#996633").s().p("AgDAIIAAgBIAAgBIAAgBIgBgCIAAgHIABAAIAAAAIgBgBIAAAAIAAAAIAAgBIAAgCIABgBIAAAAIAAABIABABIAAABIAAgBIABABIAAAAIABgBIAAACIABgBIAAABIgBAAIABABIABAAIABgBIACgBIAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAAAgBIgBAAIAAABIACAAIABAAIABAAIgBABIAAABIAAAAIgBABIABAAIAAAAIAAAAIAAABIABAAIgBAAIgBABIgBABIABAAIAAAAIABAAIgBABIgBABIAAgBIgBABIAAABQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIgBACIgBACIgDABIAAAAIgBgCgAgDgGIABAAIgBAAg");
	this.shape_154.setTransform(488.325,381.805);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#996633").s().p("AgIAKQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIABgBIAAAAIAAAAIACgBIAAgBIAAgCIAAgBIAAABIgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAAgDIAAACIABgBIAAgBIAAgCIAAgDIAAgDIABgBIAAABIAAAEIAAADIAAABIAAAAIAAgDIABgCIAAgCIABACIAAAAIABAAIAAAAIAAAAIAAABIAAACIAAAAIAAgDIAAACIAAgCIAAAAIABAAIABAAIgBABIAAABIABgBIAAgBIABAAIAAABIAAACIABABIgBgDIAAAAIABACIAAgBIAAAAIABACIAAAAIAAABIAAABIABAAIAAAAIAAAAIAAAAIgBgDIADADIABADIABADIgCABIgCAAIAAAAIAAAAIgDABIgBABIgCAAIgBAAIgBAAIAAABIgBAAIAAAAIAAAAIgBAAIABAAIAAgBIgBAAIgBABIAAgBIAAABIgBAAIgBABIgBgBgAgGAIIAAABIABgCIAAAAgAgDAHIABAAIAAAAgAgFABIAAABIABgCgAADgFgAAAgGg");
	this.shape_155.setTransform(486.8,384.77);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#996633").s().p("AgEAZIAAgBIAAgCIAAgBIgBACIABAAIAAAAIAAAAIAAAAIgBAAIAAABIAAAAIAAgBIgBABIAAgBIAAAAIAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAAAIABgCIAAAAIABgEIABgBIgBAAIABAAIgBAAIABgEIAAgBIAAgBIAAAAIgBgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABgBIgBgHIABAAIAAAFIABgLIgCgNIAAgBIABABQACALgBAFIAAACIABAAIAAgIIAAgEIAAgFIABAEIAAgBIABABIAAgBIAAAAIAAgBIABAEIAAgFIAAABIAAgBIAAABIAAADIABgEIAAgBIAAABIABAIIABADIAAgBIgBgIIABAHIAAgGIABAGIABABIgBADIAAABIABACIABABIAAgCQAAgFgCgFIADAGIACAIIABATIAAABIgCABIgBAAIAAABIgCABIgCACIAAAAIgBABIgBgBIgBAAIAAAAIgBAAIAAAAIgBABIAAAAIgBABgAgGAQIAAADIAAAAIAAABIAAgDIABgBIAAgBgAgFACIAAABIABgDgAgEAYIAAAAIAAAAg");
	this.shape_156.setTransform(486.8125,387.225);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#996633").s().p("AgEAYIAAgBIAAgCIAAAAIAAgBIAAACIAAgBIAAAAIAAACIAAAAIgBAAIAAAAIAAgBIgBABIAAgBIAAAAIAAABQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAgBIAAABIABgCIAAgBIABgEIABgBIgBABIABgBIgBAAIABgDIAAgBIAAgCIAAABIgBgCQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIgBgHIABAAIAAAFIABgEIAAgHIgCgMIAAgBIABAAQACAMgBAEIAAACIABAAIAAgIIAAgDIAAgFIABAEIAAgBIABABIAAgCIAAAAIABADIAAACIAAgGIAAAAIAAgBIAAABIAAAEIABgFIAAAAIAAAAIABAIIABADIAAgBIgBgIIABAHIAAgFIAAgBIABAGIABABIgBAEIAAAAIABADIABAAIAAgCIgCgJIAAAAIADAFIACAIIABASQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIgBgBIAAABIgCACIgCABIAAAAIgBABIgBAAIgBgBIAAAAIgBAAIAAAAIgBABIAAAAIgBABgAgGAPIAAADIAAAAIAAgCIABgBIgBAAgAgFACIAAABIABgDg");
	this.shape_157.setTransform(487.805,391.15);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#996633").s().p("AgIATIgBgCIAAgBIAAABIABgCIAAgBIABgCIABgBIgBAAIABgEIAAgBIAAABIgBgCQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABAAIgBgGIABAAIAAAEIABgDIAAgGIgCgKIAAAAIABAAQACAIgBAFIAAABIABAAIAAgGIAAgDIAAgEIABADIAAAAIABAAIAAgBIAAAAIAAAGIABAAIAAgBIAAgCIAAgEIAAAAIAAAAIAAAAIAAADIABgDIAAgBIAAABIABAGIABACIAAAAIgBgHIABADIAAADIAAgFIABAFIAAAAIABABIgBACIAAABIABACIABAAIAAgCQAAgEgCgDIAAAAIADAEIACAHIABAOIAAABIgCABIgBAAIAAAAIgBABIgBAAIgCACIAAAAIgBAAIgBAAIgBAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAAIAAAAIgBABIgBAAIgBAAIAAAAIAAgCIAAgBIAAACIAAAAIgBAAIABAAIAAABIgBAAIgBAAIAAgBIAAAAIAAABIgBAAIgBAAgAgGAMIAAADIAAgCIABgBIAAAAgAAAgNIAAABIAAABgAAAgMIAAAAg");
	this.shape_158.setTransform(487.8125,394.525);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#996633").s().p("AgDAaIABgCIgDAAIAAAAIgDgBIAAgBIgBAAIAAgDIgBgBIAAAAIgBAAIgBAAIAAAAIgBgBIgBAAIAAgBIABABIAAAAIAAgBIABAAIAAAAIAAAAIABgBIABAAIABgBIgDABIAAAAIAAAAIAAAAIgBABIAAAAIgBgBIABAAIAAAAIAAgBIAAAAIgCAAIAAgCIABgBIACgBIABAAIADAAIABAAIAEgBIAAABIABAAIAAAAIACADIACABIABgBIgBgBIgBgBIAAgBIgBgBIAAAAIAAgBIAAAAIgBAAIABgDIACgIIAAAFIABgEIAAgIIgCgOIAAgBIAAAAIACAJIABAJIAAACIAAABIAAgJIABgFIgBgFIABAEIAAgBIABABIAAgBIAAgBIAAABIABADIAAADIAAACIABgBIAAAAIgBgDIAAgFIAAgBIAAgBIABABIAAADIAAABIABAAIAAgFQABAEAAAFIABACIABACIAAgBIgCgKIABAFIAAgEIAAAAIAAAAIACAIIAAAAIAAABIAAAEIAAABIAAADIABAAIAAABIAAgBIAAgCQAAgGgBgGIADAHIABAKIgCALIgBAEIgBABIgCADIAAAAIgBABIAAAAIgCADIgDACIgBAAIgBABIgDAAIgBABIgCgBgAgIALIAAABIADgBIACAAIAAAAIAAgBgAgCAKIAAgBIABAAIgBABgAgBAHIAAABIAAAAgAAGgWIAAAAIAAgEIABAKIAAABg");
	this.shape_159.setTransform(487.0875,391.4571);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#996633").s().p("AgEAPIAAgCIAAAAIAAgBIgBABIAAABIAAAAIABAAIgBABIgBAAIAAgBIAAAAIgCABIgBgCIAAgBIABgBIABgCIABgBIgBAAIABgCIAAgBIAAAAIgBgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIgBgEIABAAIAAADIABgCIAAgFIgCgHIAAgBIABABQACAGgBADIAAABIABAAIAAgEIAAgDIAAgDIABACIAAAAIABABIAAgBIAAAAIAAAEIABAAIAAAAIAAgCIAAgDIAAAAIAAAAIAAAAIAAACIABgCIAAgBIAAABIABAEIABACIAAAAIgBgFIABACIAAACIAAgEIABAEIABABIgBACIAAAAIABACIABAAIAAgBQAAgDgCgDIAAAAIADADIACAFIABALQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBgBIAAABIgBAAIgBABIgCABIAAAAIgBAAIgBAAIgBAAIgBAAIgBAAIAAABgAgGAMIAAgCIABgBIgBAAIAAACIAAABIAAAAIAAAAg");
	this.shape_160.setTransform(485.831,394.075);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#996633").s().p("AhHBhIAAgBIgBgCIABgBIAAgSIgBgFIAAAKIAAACIAAADIAAAAIAAABIAAAAIAAABIgBACIABACIAAABIAAADIgBAAIgBgJIAAAAIAAADQgBALgBgIIAAgRIAAgFIgBADIACgPIAAgDIABgWIAAgGIAAgBIAAACIAAgEIAAAAIAAgXIABgBIAAgDIABgJIABgEIgCAFIACgEQAAgDADgCIAAgBIAAAAIADgCIAIgEIADAAIABAAIAAgBIACAAIAKgBIABAAIABABQAKgBALgHQAJgFAIgKIABgCIgBABIgFAHIgGAGIgCABIAAABIgBAAIgBABIAAAAIgCABIgIAEIAGgCIADgCIABgBIABAAIABgBIALgKIADgGIAAAAIABgBIACgEIAMgQQAEgFAEgBIgBAAIAFgCIAIgCIAAAAIABAAIAAAAIAFgCIACgBIABAAIAAAAIAGgDIAFgDIAAAAIABgBIAHgCIAFABIAFACIACABIAAADQAEAWgBAVIgBAEIAAgDIAAgSQgBgOgCgMIAAgCIgCgBIgEgCIgFgBIgHACIAAABIgBAAIgKAGIABgBIAKgFIAAAAIAHgCIAEABIAEACIACABIAAABIAAACIABAOIAAgEIgBACIAAgCIAAAHIgBgCIAAgDIAAADIgBgIIAAgCIgBgGIACAWIAAAEIAAABIgBACIAAgEIgBgTIgBgEQACAOgBAPIAAACIAAgCQAAgRgDgMIAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIAAABIAAAAIAAgBIgCAAIgFABIABAAIgGAEIgFACIgDACIgDABIgBABIgFABIgCAAIgIACIAAABIgDABIgDADIgBABIgBACIgIANIAAAAIgBADIABgBIABgBIAAgCIABgBIAJgNIADgDIACgBIABgBIAEgBIAFgBIABAAIAAgBIACAAIADgBIAMgGIAFgDIAAAAIAEgBIABAAIgEABIgGAEIgDACIgDACIABgBIgFADIgFABIgBABIgBAAIgBAAIgCAAIgDABIgDACIgBAAIgDACIgDAEIgHALIgBACIgBADIgBAAIAAABIAAAAIgBACIgIAKIgIAIIgDACIgBABIAAAAIgBABIgFADIgMAEIgMACIgFABIgEABIgBAAIgCAAIAAABIgDAAIgBABIgBADIAAACIgBADIAAArQABAQgCADIgCgFIAAAGIgDAVIgBAAIAAAAIgBAEIAAAAIgBgDIgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAABgBgBIAAACIAAAEIAAADIgBABIgBAAIAAADgAhJAkIgBAVIAAABIAAACIABgNIAAgNgAgggdIAFgBIAGgCIgLADgAAwhPIAMgGIgBAAIAFgBIACAAIAAAAIAAAAIAAgBIAAAAIAAABIgBgBIgEABIgCABIAAgBgABChXIABAAIgBAAgAhIBaIAAABIAAABgABIhAIAAgBIABAAIAAABIgBAAIAAAAgABIhIIAAAAIABAHIgBgHgABEhEIAAgDIAAgCIAAgBIABAFIAAABg");
	this.shape_161.setTransform(492.5955,384.875);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#996633").s().p("AAjBIIgXg1IgBAAIAVAxIgFgJIAAAAIgBgBIABADIAAABIgBgBIgIgVIAAABIAAACIADAGIAAABIABADIAGAMIAAABIAAAAIAAAAIAAAAIAAAAIAAACIgCgCIgDgJIgBgCIAFAOIAAABIgBgBIgKgYIgFgIIAMAaIAAAAIgKgWIAIAUIABAAIABADIAAAAIgBgCIgBgBIgJgTIAAAAIgBgDIgBAAIgIgSIAAAAIgBgCIABADIAAAAIABAEIAOAbIAAABIgxhfIgCgFQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAABQAAAAABABIgBgBIgCgGIAAgBIAAgGIAAgCIAAgBIACABIABAAIAAgBIABAAIAAABIAAgBIgBgDIAAgBIAAgBIAAgBIAAgBIAAAAIAAABIABAAIAAAAIAAACIABAAIAAABIACAEIAAAAIABABIAAABIACACIAAABIAAgBIgCgFIgBgBIAAAAIgBgBIgBgCIAAgCQAAgBAAAAIACACQgBgEACACQADADACAFIABABIAAAAIACAHIAAABIABACIAEAIIABAEIAAAAIABABIAAAAIAFAMIAAAAIADAFIgBgCIADAEQACAGABAGIALAWIAAABIgBgBIgIgPIAGANIABACIABACIAEAJIACAFIATAqIAAACgAgQgsIAAgBIgEgLIgCgCIAGANIAAgBgAgdhDIABABIAAgBIAAgBg");
	this.shape_162.setTransform(272.6667,327.0091);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#996633").s().p("AAxBFIAAAAIAAAAIgEgHIADAHIAAABIAAAAIgBAAIgBgEIgBgBIACAGIAAABQgDgEgCgGIgBgCIgBgCIAAAAIAFALIAAAAIgFgJIAEAIIAAABIgFgIIAAgBIgBgBIAAgCIAAgCIgCgEIAAABIgBgBIAAABIABABIACAHIADAFIgEgEIgIgSIgBgBIgBgCIgGgLQgBAAAAAAQAAgBgBAAQAAAAAAgBQABAAAAAAIABgBIAAAAIAAgBIAAgBIgBgBIAAgBIAAgDIgBAAIAAAAIgBAAIABAAIgCAAIAAAAIgCgBIgEAAIgBAAIAAAAIAFACIAAgBIAAAAIABABIAAAAIAAAAIABAAIAAgBIAAAAIABAAIAAABIAAAAIAAAAIAAABIgBAAIgCAAIABAAIAAAAIABAAQABABABAAQAAABAAAAQAAAAAAAAQAAABgBAAIgEAAIgBAAIgCgBIABABIgCgBIgFgCIAAgBIgCAAIAAgBIAAAAIgGgDIgCgBIABAAIgGgEIgEgEIAAAAIgBgBIgBgBIgCgDIABACIgCgEQgDgEABgDIAAgBIgBAAIgCgIIgBgCIAAgBIgBgDIAAgBIgBgBIAAAAIABABIABAEIABABIACAFIgBgEIgBgCIAAAAIAAgBIgBgDIAAgBIgBgBIgEgIIgKgMQgEgEABgCIABAAIgGgIIgBgBIABAAIAGAIIgBgCIAAgBIAAgBIgBgCIAAAAIABAAIgBgCIABAAIAAgBIACAAIABgCIAAAAIAAAAIgBgBIAAgBIABgCIgBAAIAAgBIABAAIABABIABACIAAAAIAAAAIABACIAAAAIABAAIACACIAAAAIgCgDIgBgBIAAAAIAAgBIAAAAIgBAAIgBgBIAAgBIAAgBIADACIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAIAFAGIACADIAAABIAAAAIABABIADAFIABACIAAgBIABACIAAgBIAFAIIAAAAIACABIACACIAEAHIAKAMIAAABIgIgJIAGAIIAbAfIABABIgBgBIgWgYIgDgCIAAAAIACADIATAWIAAABIgFgGIAAABIgBAAIABABIAAABIAAAAIgCgDIgFgEIAHAJIABABIAAgBIABABIAAAAIgCAAIgFgGIAGAHIAAABIAAAAIgHgIIgJgIIAAABIAGAFIADACIABABIAAACIgBAAIACABIACABIADADIAAAAIABABIAAABIgCACQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIAAABIABAAIABAAIABABIABAAIgBAAIABABIABgBIAAAAIAAgBIACAAIAAAAIABgBIABAAIgBgBIAAgCIAAgBIAAAAIABAAIAAAAIABABIAAAAIABACIAAAAIAAAAIACACIAAgBIgCgDIgBgBIAAgBIAAAAIACAAQAAAAAAAAQgBgBABAAQAAAAAAAAQAAgBABAAQABABAAAAQAAABABAAQAAAAAAABQAAAAAAAAIABAAIAAABIAAgBIAAACIABABIAAAAQACADAAACIABACIAAAAIABAAIACAGIABAAIABACIABABIABAEIAAgBIAAACIACAGIACAEIAAABIgDgIIABAHIABABIAAAAIABAHIABABIAAAAIABAEIAGAKIAAAAIgBAAIgCgDIgDgEIgCgIIgBgFIgBAAIACAGIAAABIAAABIABACIABAFIADAFIgDgDIAAAAIgBAAIAAABIADAGgAAsA8IABAAIADAFIgDgGgAAeAQIADACIABACIAAABIAAgBIgCgEIgBgBIAAABIgBgBgAgBAQIAHADIACAAIgIgCIgCgCgAAKAGIABABIgBgBIgBAAgAAHABIAAAAIgFgDgAgFgIIAIAIIACABIgDgCIgCgBIAAgBIgCgFIgEgEgAgagcIAAABIgBgCgAgdg4IACACIABABIAAgBIgBAAIgDgGIAAAAIgCgBIADAFgAAsBFIAAAAIABABIAAAAgAg1g9IgBAAIABgBIABgBIABgBIACgCIABAAIAAAAIAAgBIAAAAIACgBIAAAAIABgBIAAAAIABAAIAAgBIABAAIABAAIAAgBIAAAAIAAAAIABAAIABAAIAAAAIgBAAIABAAIAAABIgBAAIAAAAIAAABIgBAAIAAAAIABAAIgBABIABAAIgCABIgBAAIAAACIgBAAIAAABIgBAAIAAAAIAAABIAAAAIgCABIAAAAIgCABIgCAAg");
	this.shape_163.setTransform(266.8125,313.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#996633").s().p("AgGAJIgLgRQgDgFACgBIABABIAAgBIAAgBIgBgCIAAgBIABgEIAAAAIAAgCIADAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAIAAgBIgBgBIAAgBIABgBIAAABIAAgBIAAgBIAAABIABAAIAAABIAAAAIAAABIABAAIAAACIABAAIAAABIAAAAIABABIAAAAIgBgDIAAAAIAAAAIAAAAIAAAAIgBgCIAAAAIAAgBIAAABIABAAIABABIgBgBIABAAIAAgBQgBgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAABIACABIACAEIAAgBIABAFIAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAgBAAIADAEIAAACIAAAAIAAABIAAAAIACAGIABABIAAAAIgBgBIgBgEQgDgIAAgGQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAAABIAGAUIABABIgBgDIgCgHIgCgJIAAAAIAAAAIACAGIAAgBIABABIAAgBIAAgBIAAAAIAEAJIgEgLIAAgBIAAAAIAAgBIACABIABAGIAAAAIABABIgCgJIAAAAIAAAAIAFAPIACAFIAAgBIgFgPIAAAAIAAAAIAFANIgEgMIAFAMIABABIAAABIABAEIABABIABADIAAACIAAABIAAAAIAAAAIAAgFIgGgPIAGAKIACAFIAAACIABACIAAADIgBABIAAABIgBACIAAABIgKASgAgDgSIABADIAAAAIgDgGIgBgBIADAEg");
	this.shape_164.setTransform(274.55,335.5636);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#996633").s().p("AAHAsQgEgDgDgFIgCgGIAAAAIgBgBIAAgBIAAgBQgHgPgEgQQgDgIACgBIACACIAAgBIAAgCIAAgFIAAgBIABgCIAAgDIABAAIAAgCIABAAIABABIABABQAAgBAAAAQAAAAAAAAQAAgBAAAAQABABAAAAIAAAAIAAABIABgBIAAgBIgBgCIABAAIAAgBIABgBIAAgBIAAAAIAAABIABAAIgBABIABAAIgBABIABAAIAAACIAAACIAAACIABAAIAAADIABABIAAgBIgBgEIAAgCIAAAAIAAgBIAAAAIgBgCIAAgBIAAgBIAAAAIABAAIABADIAAgCIABgBIABABIAAAAIAAABIAAABIAAABIAAACIABACIAAAAIAAAEIAAAEIAAACIgBgCIAAAAIAAgCIAAAEIAHANIABABIAAABIACAEIADAGIAAAAIAAAAIABABIABACIABACIABABIABABIAAACIgBgEIAAAAIgBgCIgBgBIgNgXQAGAHADAFIAFAHIABABIAAACIADAGIADAHIAAAHIgDAIIgEAIgAADgFIADAFIgEgGgAgDgbIAAABIAAADgAgDgagAgTgdIAAAAIAAgBIABAAIAAgCIAAgBIAAAAIAAgBIgBgBIAAAAIABgCIgBgCIAAgBIABACIAAgCIAAAAIgBgCIgDgEIABgBIAAAAIADAGIAAAAIABAAIAAgBIgBgBIAAgCIgBgCIABABIABAAIAAAAIABAAIgBgCIABABIABACIgBgCIAAAAIABAAIABABIAAgCIAAAAIACADIABAAIgCgCIACACIgBgCIACACIABAAIAAABIABABIAAAAIAAgBIgCgDIADABIACACIAEAGIgBACIgCAAIAAAAIgBABIAAAAIgCACIAAAAIgBAAIgCABIAAAAIgBAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAAAIAAAAIAAgBIgBAAIAAAAIAAAAIAAABIABAAIgBABIgBAAIgBAAIgBABQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAgAgRgfIAAAAIAAgBIAAAAgAgEgeg");
	this.shape_165.setTransform(274.325,337.675);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#996633").s().p("AAZBAIgBgBIAAAAIgGgJIAGAKIABABIgBAAIAAgBIABACIgCgBIgFgIIgBgBIAAgBIAHANIgTgdIAAABIACADIAAABIACACIAIAPIABAAIgBAAIgLgSIAGALIAAABIgLgQIgIgRIgBgDIgCgDIAAgCIgBAAIAAgBIgHgOIgOgpIgBgGIAAgEQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAAAIAAgBIAAgBIAAgGIABgGIABAAIAAAAIAAgCIABAAIACACIABgBIAAAAIAAABIABgBIAAgBIgBgCIABgBIABgBIAAgBIAAgBIAAABIABABIgBABIABAAIAAADIAAACIAAACIABABIABADIAAAAIgBgHIAAAAIAAgBIAAgDIgBAAIAAgCIABAAIABADQAAgGACAEIABAEIABANQAAAAAAABQABAAAAABQAAAAgBAAQAAAAAAAAIACAJIABADIAAABIAAAAIADAMIABABIACAFIgBgCIAEAKIABAFIADAKIACAEIAAABIABAAIAAAAIAAABIACAGIABABIgBgBIgDgGIAAgBIAAAAIAAAAIgCgGIAAAEIABABIAAABIABABIAAAAIACAGIABACIAHARIAPAYIAGAJQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBgBIgOgUIgGgLIAHAQIAJAMIAAABIgHgJIAAABIgBAAIABACIAJANgAgEAXIAAABIAGAMIgFgOIgBABIAAgCIgBgBgAALAhIgDgHIgCgFIgBAAgAgRg1IAAAFIABAEIABABIAAAAIgBgBIgBgKIgBgBgAAOA3IAGAHIAAABg");
	this.shape_166.setTransform(268.8417,327.175);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#996633").s().p("ABECdIgGgDIgCgCIgBgCIAAgBIgIgLIAAAAIAAAAIgHgTIAAABIAGASIAAABIAAgBIAAgBIgFgMIAFANIAAABIAHAKIAAABIAAAAIgHgLIAAAAIgBgBIgEgNIgBAAIgBgEIAAgBIgDgLIgBgDIAAgCIAAAAIgFgGIAAAAIgBgCIgBgBIABACIABACIAAABIABACIABABIACACIgBgBIAMAjIgOgiIAAAAIgDgGIgQgVIgTgTIgFgEIgCgCIgTgVIgEgGIgCgEIABgBIADACIgBgBIgCgBIgDgGIgBgFIgBgGIAAAAIAAAAIAAAAIAAAAIAAAAIgBAAIgBAKIgBACIgEgKIAAgCIAAgBIgBAAIABAAIAAAAIAAAAIAAAAIABAAIgBgBIAAAAIAAABIgBgDIAAACIAAABIAAAAIAAAAIgCAAIAAgBIgCgCIgEgJIgCgKQgBgGAAgHQAAgBAAgBQAAgBAAAAQAAAAAAgBQAAAAABAAIABgBIABAAIAAgBIAEgDIAAAAIABgBIACAAIABAAIAAAAIAAAAIABgBIAAABIABgBIAAAAIAAgCIAAgBIgBgBIgBAAIAAAAIAAAAIAAgBIAAAAIAAAAIAAADIgBAAIAAAAIgBgBIAAABIgBAAIAAgBIgBgBIAAgBIgBgCIABADIAAAAIAAABIAAAAIgBgBIAAAAIAAgBIgBAAIgBgDIAAgBIAAABIAAABIABABIgBgBIAAABIABACIgDgEIAAAAIgBgCIgBgCIAAAAIAAABIAAAAIADAGIgDgDIgLgPQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIABAAIAAgBIAAgBIAAAAIABgDIAAAAIAAgCIABAAIABAAIABgCIgCAAIgBABIAAAAIAAAAIgBAAIgBABIACgBIgBABIgBAAIABAAIAAAAIgBABIAAAAIgFADIgCgHIAAgCIAAgCIAAgDIAAAAIAAgBIAAABIAAgDIABgBIABgEIAAgIIgBgCIAAgBIABgEIAAgLIABAHIAAgDIAAAAIgBgEIgDgNQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIgCgIIABgCIAAABIABAGIAAgBIABAAIABgBIgBgCIABACIABgCIABAAIAAgBIABAAIABABIABAAIAAAAIABAAIAAAAIAAAAIAAgDIABAAIABAAIAAgBIAAAAIABABIgBAAIAAACIABAAIgBABIAAABIABAAIAAABIABgBIAAgBIAAAAIAAgBIAAAAIgBgCIAAAAIAAAAIACgBIAAADIAAgBQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIABACIAAADIAAACIAAABIgBAAIAAAFIAAABIAAAAIAAABIAAAAIABAGIAAADIAAgBIABAEIAAADIADAKIAAABIAAAAIgDgIIACAHIAAABIAAAAIAEAJIAFAJIACACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIABABIABACIAAADIgBAAIAAAAIAAgBIgBgCIgBgBIAAgBIgBAAIAAACIgBAAIgBACIAAABIgBAAIgBAAIAAABIgBAAIgBABIAAAAIABAAIAAAAIABAAIACAAIABAAIABAAIAAgBIABAAIAAABIAAAAIAAABIgBAAIABAAIAAACIAAAAIABgCIgBAAIABgBIABAAIgBAAIABAAIABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQgBABAAAAIgBACIgBAAIAAACIADAJIABAAIAAABIgCgHIAAAAIAFAIIAEAMIACAKIAAAEQABAGgBAMQAAABAAABQAAABAAABQAAAAgBAAQAAABgBAAIgBgCIAAACIgBACIgBAAIgBABIABABIAAABIgCgCIAAAAIgBABIgBAAIgBABIAAAAIgBgCIAAABIAAADIACAFIAAABIAAAAIAAAAIABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIABABIAAgBIgBgBIAAgBIgBgBIAAAAIAAgBIAAgBIAAgCIABAAIAAABIAAACIABAAIADAFIAAAAIABABIAAABIAAAAIABACIABABIABABIAAAAIgDgHIgBgBIABAAIgBgBIgBgBIAAAAIgBgCIAAABIgBgCIAAgBIABAAIABABIAAABIAAAAIABACIAAgDIAAgBIAAAAIABABIABABIABACIADAEIAAAAIABABIAAABIAEAIIACACIAAABIAGAJIADADIABABIAAAAIALAMIAAABIAFAEIAJAJIAEAGIALAMIAKAOIABABIgBAAIgPgUIANAQIACAGIAGAKIAAAAIALAjIAAAAIADAFIAFAFQAFAFAFACIABAAIAAABIgBAAQgHgCgEgFIgFgGIgDgFIAAABIgEgKIADAKIAAgBIABACIABACQAFAIAHAGIgEgEIgGgEIABABIgCgBIABABIABABIABABIgBAAIABABIACACIABABIAAAAIABABIAAAAIgBAAIACACIgDgCIgFgFIgEgFIgBgBIAFAHIAIAHIAAAAgAgOAYIgHgKIgCgCgAgqAFIAAgBIAAAAgAgtAEIABAAIAAAAIAAAAgAguAEIABAAIAAgBIgBAAgAgqADIAAABIAAAAIAAgBIAAAAgAgtgwIABAFIAAAAIAAAAIAAABIAAAAIAAAAIAAAAIABgBIAAAAIgBAAIAAAAIABAAIgBgEIgBgDgAglg7IABAFIADAEIAAABIAAgBIAAgCIgEgHgAgtg2IABACIgBgCIAAgCgAgphAIACAEIABACIAAgBIgCgGIABADIgDgGIAAACIAAABIABAAgAgrg7IABgBIgBAAgAgsg8IAAAAIAAgBIAAAAgAgrhFIABAAIABgCIgBgBIAAACIAAABIgBgBgAg6hNIAAAAIgBAAgAhAhQIAAABIABAAIAAgBIAAAAIgBAAIABAAIAAAAIgBAAIAAgBIABgBIgCABIAAgBIABgBIgCAAQAAAAAAAAQAAABAAAAQAAAAgBgBQAAAAAAAAIAAAAIgBAAIAAABIABAAIAAAAIABABIAAABIABAAIAAAAIAAAAgAhHhUIAAAAIAAAAIAAAAIAAAAIAAgBIABABIAAgBIgBgBIAAAAIAAAAgAhJhYIAAAAIAAABIABgDIAAgCgAg7hXIAAgBIAAAAgAg2hkIAEAHIABAEIACAAIgGgMIgBgCIAAAAIAAAAgAhFhaIABAAIAAAAgAg5hyIABADIAAgCIgBgCgAg7iGIAAgEIAAAAIAAgCgAA3CSIgFgHIAKANgAgfACIgBgBIABAAIAAABgAg+iSIAAAAIAAABgAg+iSgAhEiTIgBgCIgCAAIABABIgBgBIABACIgBAAIgBgCIAAAAIAAgBIgBAAIAAAAIgBAAIACACIAAAAIgDgBIgBgBIgBgFIABAAIABAAIABgBIABAAIACAAIAHAAIAAgBIABAAIAAABIAAAAIABAAIAAAAIABAAIAAAAIADAAIAAAAIABAAIgCABIgBAAIAAABIAAAAIgBABIABAAIAAAAIgCABIABACIgBgBIgBAAIABABIgBAAIABAAIABABIABACIgBAAIgCgDIAAAAIgBAAIAAAAIABABIgBABIABABIgBgBIgCAAIAAAAIAAgBIAAAAIAAACIgBAAIAAgBIgBABgAhCiTIAAgCIAAACg");
	this.shape_167.setTransform(264.95,310.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#996633").s().p("ABXCvIgBgBIABABIAHAHIABAAIgBgBIAAAAIABgBIgCgCIAAABIgDgEIACADIACADIgFgHIgBgCIAAABIgBAAIAAgBIAAAAIAAAAIgBAAIAAgBIAAAAIAAABIAAAAIAAABIABAAIAAAAIgBABIgBgBIAAABIgBABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAABgBIgBAAIABgCIAAAAIgBgBIAAAAIgFgDIgDgDIgCgDIgEAAIgFgBIgBgBIgBAAIAAAAIgCgBIAAAAQgCgCgBgEIgBgBIgCgEIAAAAIgBgBIAAABIABADIACAEIAEAEIABABIABABIAAAAIABABIACAAIACABIADAAIAAAAIgHAAIAAgBIgBAAIgBAAIAAAAIAAgBIgBAAIgDgCIgEgFIgCgGIAAACIgBgHIAAgJIABgHIADgMIgBgDIgBgCIAAAAIgGgOIAAgBIgDgGIAAACIgCgFQgDgGgBgHIgBgCIAAAAIgNgaIAAABIALATIgVgrIgCgCIAAAAIAAgBIgBgBIgBgBIAEALIAGAhIAAAmIgQgbQgHgLgHgQIgIgWIgFgXIgBgCIAAgCIAAgEIABgFQAAAAAAAAQABAAAAABQAAAAAAABQABABAAABIAAgJIAAgCIAAAAIgBgCIABAAIgEgIIAAABIgBgDIAAACIgBgCIAAgBIAAgBIAAgBIgCgEIgBgBIgGgPIABABIgBgCIAAAAIgHgNIAAgBIgDgFIABACIgDgFIgDgHIgBgBIAAgBIAAAAIAAgBIgBgCIgNgaIAAgBIAAABIAKASIgIgQIgMgYIgBgCIgBgBIAAgBIgCgFIgTgdQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAGAGIAPAYIgFgMIgJgOIgBAAIABAAIAHAJIAAgBIABABIAFAHIgFgIIgMgQIAAAAIABAAIAHAJIAAABIAEAGIgCgFIgCgCIABAAIgBgCIACACIAEAHIgGgKIAJAMIAKASIAAABIABAAIAAAAIABACIgBgDIAAAAIgEgIIAEAHQgGgMgGgJIAAgBQAGAIAGAOIABAAIAAAAIAAAAIAAABIABABIAAABIAFAKIABACIAFAIIAAgBIAAAAIAAgBIAAAAIgKgTIgBgCIgIgNIAAgBIAAAAIAJAOIAAAAIAAABIABABIAbAvIABAEIABAAIAAAAIAAABIABACIAUAkQAEAIgBACQAAAAAAAAQAAABgBgBQAAAAAAAAQAAAAgBgBIABACIABAEIAAABIABABIABAHIgBAAIAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIAAABIgBgBIAAAAIgCAAIAAABIgBAAIAAAAIABABIAAAAIAAAAIAAABIAAAAIAEgCIABAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAABIACgBQABADgBADIABABIgBAJIABACIACACIgCgFIAAgBIAAABIADAHIAAgBIABABIAAAAIAAAAIABACIAAgBIgBgCIACADIABAAIgCgCIgBgBIABAAIABACIABAAIAHALIgKgQIgCgCIAAAAIAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQABAAAAAAIACACIAFAJIABABIgIgNIgBgBIABAAQAHAKAKAPIAGAHIAAgBIgBAAIgBgCIgQgWIAAgBIAAAAIAJAMIgHgJIAAgBIgBAAIABAAIAAAAIAPAUIABABIAAABIABABIAAAAIAGALIABADIAFAIIAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIABABIgCgDIAAgBIgMgVIAAAAIAAgBIgKgNIAAAAIALAMIACADIAbAxIAAAAIAAABIAAAAIARAlIABAAIAAgBIABAAIAAAAIABgBIABAAIABAAIABAAIAAgBIABgBIAAAAIABAAIgBAAIABAAIAAABIAAAAIABABIAAgCIgBAAIAAgBIABAAIABAAIAAAAIACgBIABABIAAABIgBABIAAACIAAABIAAAAIAAACIABABIAAAAIABAAIgBADIACADIAAABIgBgBIgBgCIAAACIAAABIADAFIACAEIAAAAIAAAAIgFgHIAAgBIAAAAIAAABIABADIAAACIACACIgBAAIgBgBIgBAAIAAABIAAgBIgBgBIgBgCIAAABIAAAAIACACIABADIgBgCIgBAAIAAABIgBAAIAAgCIgBAAIABACIAAABIgDgEIAAAAIABACIABABIgBAAIAAgBIAAABIgBACIABAAIAAAAIAAAAIACAAIABAAIAAABIACAAIAAAAIAAAAIAAAAIABgBIAAABIABgBIAAAAIABAAIAAgBIAAAAIAAABIABABIABAAIAAAAIgBgBIAAAAIAAAAIABAAIAAAAIAAAAIABABIAAgCQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABABIAAADIAAAAIAAAFIAAABIABAAIAAABIABAFIAAABIACACIAAABIABAFIAEAKIAAABIgBgBIgDgHIACAGIAAABIABABIAAAAIADAIIADAHIgLAGIgGgIgABeCxIABADIABAAIAAAAIAAAAIAAAAIAAABIABgBIABAAIABgBIAAAAIAAAAIAAAAIgBABIgBAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIAAAAIgBAAIgBgDgABgC0IABAAIgBAAgABfCxIABAAIABACIABAAIABgBIgBAAIgEgFIADAFIAAAAIgDgEIgBAAIABABIgBAAgABkCxIABAAIgDgCIAAAAIAAAAIgBAAIABAAIAAABIABABIAAgBgABbCsIAAAAIgBgBgABUCsIAAAAIAAgBIgBAAgABUCqIAAAAIgBAAIABAAgABRCoIABABIgBgBIAAgBIgBAAgAA/CgIAFACIAEgBIgBAAIgDAAIgDAAIgCgBIgBAAgABGCeIABgBIgEAAIADABgABICdIAAAAIABAAIAAgBIAAgBIAAAAIgBgBIAAAAIgBABIAAABIABgBIABAAIgBAAIABAAIAAABgABGCbIAAAAIABgBIgBAAIABgBIgBAAgABLCZIgBAAIAAABIAAAAIABgBIAAAAIAAAAIABAAIABAAIABgBIAAAAIgBAAIgBAAIAAABIgBAAIAAAAgABKCaIAAgBIAAAAIAAABIgBAAIABAAgABHCaIAAAAIAAAAIAAAAIAAAAIABgBIgBAAIAAABgABECaIABAAIgCgBIABABgABFCZIgBgBIAAgBIAAAAIgCgBIgBgCIAAAAIgBgBIAAABIgBgEIAAgBIAAABIAAABIAAABIADAFIABABIAAAAIABAAIABABgAA/CVIACADIABABIAAAAIgBgCIgCgCIAAgCIgBAAgABHCWIgBAAIgBgBIABAAIAAAAIABAAIAAgBIAAABIAAgBIAAAAIAAAAIAAABIgBAAIAAAAIAAAAIgBAAIgBgBIABABIAAABIAAAAIACAAgABICVIAAABIABAAIgBgBIABAAIABgBIABAAIAAAAIgBAAIgBAAIAAgBIAAAAIAAgBIAAAAIgBAAIABABIAAAAIAAABIgBABIAAAAgABLCUIABgBIgBAAgABGCTIAAAAIAAAAgABFCRIAAAAIAAAAgABYCFIABACIAAAAIAAAAIAAgBIAAgEIgBAAIAAgBIAAAEgABUB/IAAAAIAAAAgABIB8IABAAIgBgCgABNBlIAAABIAAgCIgBgBIABACgAAOA1IAAgEIAAgCIAAgCQgDgQgEgPIgCgCIADAJIAAABIABABIAAACIAAABIAFAZIAAAAgAAMAWIAJARIAAAAIgDgHIgFgJIgBgDgAAAAeQgBgIgEgMIgBgDIACAKIAAABIABABIAAAEIABAAIACAHIAAgDgAgIAAIAAABIACACIAFAPIAAADIABAEIAAgDIgBgDIAAgEIgDgLIgFgIIAAgBIAAAAgAAHAMIADAFIgEgGgAADAKIAAgCIgBAAgAADAHIACADIgBgEIgDgEIACAFgAAAADIABABIgBgEIgBgCgAgFgGIAAAAIAAgBgAgIgKIABAAIgBgBgAgIgLIAAAAIAAgBgAgKgOIABABIgBgEgAgWgZIAAABIAAgBIAAAAgAgWgZIABAAIgBAAgAgZgiIADAFIAAAAIABADIAAgBIAAgBIAAAAIABABIAAAAIgBgCIAAgBIgBgBIAAAAIgCgDIAAAAIgBgBgAgigyIAFALIABABIgGgMgABhCyIAAAAIAAAAgABiCvIAAAAIABABgABJCbgABQB8IABgBIgBABgABQB6IABAAIgBAAgAgWgcIAAAAIABAAgAhXiqIAAgBIABABIAIAMIABADg");
	this.shape_168.setTransform(267.925,323.775);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#996633").s().p("AgFAKIgBgBIgDgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAIABgCIABgDIAAAAIABgBIABAAIAAAAIABgCIAAAAIAAgBIABgBIAAAAIAAgBIABAAIAAABIABAAIAAgBIgBAAIABAAIAAgBIAAAAIAAAAIAAAAIAAgCQAAAAABAAQAAgBAAAAQAAAAAAABQAAAAAAAAIAAADIABAAIAAABIACAAIAAACIACACIAAAAIgCAAIABAAIABACIACAAIACACIAAABIgFgDIAAgBIgBAAIACACIAAABIACABIgCAAIAAAAIgBAAIABABIgBAAIAAgBIgBgBIgBABQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIAAAAIgBgCIgBgBIABABIAAABIgBABIAAAAIgBgCIABACIgBAAIgCgBIgBAAIACABIgBAAIgBAAIABABIgBgBIAAABIAAgBIgCAAIAAAAIAAAAIAAAAIACABIgCABgAAAgFIABABIAAgBIgBAAIAAAAg");
	this.shape_169.setTransform(276.28,335.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#996633").s().p("AAXBCIgHgEIgDgEIgCgCIgBgBIAAgBIAAAAIgBAAIgBAAIgBAAIAAAAIAAAAIgBAAIAAABIAAABIAAAAIAEgBIgGACIgFgKIgVgrIgOgxIABgEQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAABIAAgDIgBgDIAAgCIABgBIABgGIABgCIACABIAAAAIACAAIAAAAIAAgFIABgBIAAgBIABAAIAAAAIAAABIAAABIAAABIAAABIABABIAAAEIAAAAIAAACIABACIAAABIABAAIgBgGIAAgBIAAAAIAAgCIAAAAIgBgDIAAABIAAgCIABgBIABADQAAgFACAEIABAEIAAABIAAADIABAAIAAABIAAAJIAAABIAAABIACAMIABAFIABADIAAABIAMAAIADAUQACADgCACIgBgBIAAACIAAABIAAABIgBADIACAFIACAAIACAAIAAABIABAAIAAAAIABABIABACIgBABIABABQABAAAAAAQABABAAAAQABAAAAABQAAABABAAIAKAGIABABIAAAAIAGAHIAGAJQABAFAAAFQABAEgCAFIgDAJgAgHAfIAAABIABADIAIARIAAgCIgBgBIAAAAIgIgTIgBgBgAAeAnIgBgCIAAgBIgBgCIgGgHIgBgBIgJgGIAAAAIAAABIABAAIAEAEIABAAIABABIAAAAIACABIADAFIABABIACACIABABIABACIAAgBIABABIAAABgAANAWIAEADIgEgDgAAFATIABABIAAABIADADIgBgDIgDgCIAAgCIgBAAIAAAAIAAABIAAAAIABABIAAgBgAACAXIAAAAIABgBIgDgCIABACIABABIgBAAIgBgDIAAgBIAAAAIABAEIAAAAIABAAgAAAATIACACIAAgBIABAAIAAgBIAAAAIAAgBIgBAAIAAAAIgBABIAAAAgAAFAQIACACIAAAAIAAAAIgBgCIAAAAIABAAIgBAAIAAAAIAAAAIgBAAgAACALIABAAIgBAAgAAAALIAAAAIgBAAgAgBALIABAAIgCgBgAAAALIAAgBIAAAAIAAAAIgCgEIAAABIgBAAIABACIABABIAAAAIAAAAIABABgAgCALIAAAAIAAgBIgBAAIABABgAgEAKIABABIAAgBIgBgCgAgSgnIAAgBIgCgLIAAAAIgBgFgAACAXgAAGAQgAgXhAIAAAAIAAABgAgXhAg");
	this.shape_170.setTransform(271.0563,327.925);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#996633").s().p("AAlAwIgGgMIgIgLIAAgBIgBAAIAAABIABAAIAFAIIAGANIAAAAIgDgFIAAABIgBAAIABABIAAAAIgBAAIABACIgFgJIAFAJIAAABIgBgBIgDgDIAAgBIADAGIAAABIgBgBIgGgLIgDgCIAHAKIAAABIgBgBIgBAAIgGgIIgBgBIAAgBIgCgDIAAgBIgBgBIAAAAIgBAAIgCgCIAAAAIABABIAAAAIABABIAJAMIgHgGIgCgCIgBgBIgBgBIgFgFIgMgQIAAgBIgBAAIAAAAIgBgBIgEgIQgCgDABgBIACABIgBgBIAAgBIAAgDIABgDIAAAAIAAgCIABAAIAAgBIAAABIAAgBIgCgEIgBgBIAAAAIABACIAAAAIAAAAIgFgEIgCgBIAAABIAEACIgEgBIAFACIAAABIgBAAIgEgDIgBAAIgBgCIAAgBIgCgBIAAAAIgBgBIABABIAAABIAGAFIAAAAIgFgBIgFgFIgCgDIgEgDIgEgIIgBgCIABgCIACABIAAgBIABgCIAAAAIADgCIABAAIAAAAIABAAIAAAAIACAAIABAAIAAgBIACAAIAAgBIAAAAIAAACIABAAIAAAAIAAAAIABgBIABAAIAAAAIABAAIABAAIAAABIAAAAIAGgBIAAAAIACgBIACADIADAFIACADIAHALIACAFIACAGIAAAFIgBAJIAAABIAAAAIAAABIABAAIABACIAAgBIABACQADACAAADIAIAKIAAAAIgGgGIAEAFIAAABIABABIACACIABABIAAABIABABIAIALQADAFACAGIAAACgAgNgWIABAAIgBgBIAAgBIAAACg");
	this.shape_171.setTransform(270.7,324.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#996633").s().p("AgFAOIAAAAIAAgCIABAAIAAgBIAAgCIAAgBIgBgCIAAgBIAAAAIgBgBIABgCIgCgEIACACIgBgCIAAAAIgBgEIgEgHIABgBIAAABIAEAJIABABIAAAAIAAgCIgCgDIAAgCIgBgDIAAAAIACACIAAgBIABABIAAgBIAAAAIAAgBIAAAAIAAAAIABAAIAAgBIABABIAAABIAAgCIACAEIABACIAAgBIgCgEIABAAIABACIAAACIgBgEIAAAAIAAgBIAAAAIAAABIABAAIABADIABABIAAACIABABIABAAIAAgBIgEgFIABAAIADADIADAEIACAEIADAFQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgCAAIAAAAIAAABIgBABIgCABIgBABIgCAAIgBABIAAAAIAAAAIgBAAIAAABIgBABIAAAAIAAgCIAAAAIgBAAIAAACIABAAIgBAAIAAAAIgBAAIAAAAIgCABIgBgBgAgDAJIAAACIAAABIAAgCIAAgBg");
	this.shape_172.setTransform(261.5917,300.975);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#996633").s().p("AgEAKIAAAAIgBAAIABgBIAAAAIAAgBIAAgBIAAgBIAAgCIgBAAIAAAAIAAgCIgCgCIABAAIABABIAAgBIgBAAIAAgBIgBgCIgCgBIgCgDIABAAIAEAFIABABIAAgBIAAAAIgCgCIAAgCIgBgBIAAgBIABABIABAAIAAAAIAAgBIABAAIABACIgBgCIAAgBIAAAAIABAAIAAABIABAAIgBgCIAAAAIADADIABAAIgDgDIABAAIACACIgCgCIABAAIABACIABAAIAAABIAAABIACAAIAAAAIAAAAIAAgBIgDgDIAAAAIADABIADACIACADIADAEQABAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgBABIgBABIAAAAIgCACIAAAAIAAAAIgBABIAAAAIgBAAIgBAAIgBABIgBAAIAAABIgBABIAAAAIAAAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAABIgBAAIgBABQgBAAAAAAQAAAAAAAAQgBAAABAAQAAAAAAgBgAgBAIIABABIAAgBIAAAAIAAAAIAAAAIAAAAIgBAAgAgDAHIAAABIABAAIAAgBIAAgBgAgFgIgAgGgIIAAgBIABABIAAAAg");
	this.shape_173.setTransform(265.5667,307.375);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#996633").s().p("ABDC1IAAABIgOAEIgkhFQgDgGABgCQAAgBAAAAQAAAAABAAQAAABAAAAQABABAAAAIAAgBIgBgDIgEgEQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAAAIACAAIAAgBIAAgBIAAgBIgBAAIAAgBIABAAIAAABIAAgBIABgBIABAAIAAgBIgBABIAAAAIAAAAIgBAAIAAAAIgBABIAAAAIgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIAAAAIgDACIgKgWQgGgLABgDQAAAAAAAAQAAAAAAAAQABAAAAABQABABABABIgBgBIgBgDIgCgGIgDgLIABAAIAAAAIgBgDIABAAIACABIABAAQgBgBAAAAQAAAAAAgBQAAAAAAABQABAAAAAAIABAAIAAABIAAgBIgCgEIAAgCIAAgCIAAAAIAAgBIAAAAIgBAAIgBAAIgBAAIAAAAIgBAAIgDAAIAAAAIgBAAIgBABIAAAAIAAgCIAAAAIAAAAIAAAAIAAgBIgBAAIAAABIAAAAIAAAAIAAABIAAAAIAAAAIgBAAIABAAIgBAAIgBgBIAAAAIAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIAAgCIAAAAIABgBIAAAAIAAgBIABgBIABgBIgBAAIAAgBIABgBIAAAAIAAAAIAAgBIgBAAIAAgBIgBgDIgCgCIgBAAIAAAAIADAFIgDgEIAEAHIgEgGIgBAAIgDgGIgCgDIgBgBIAAABIABACIAEAHIAAgBIAEAGIAAAAIgFgFIAAAAIgBgBIgHgKIgFgIIgBgEIgCgEIAAgBIAAgBIgBgDQgBgEAAgFIgBgCIABgBIABgCIABAAIABgBIAAgBIABgBIADgDIABgBIAAAAIAAAAIgCgDIgCgBIgBABIgBgBIABgBIgBgBIgDgDIgBgEIAAAAIgKghIAJAJIgGgTIgEgFIgBgBIgCgDIgCgBIgBgCIgBAAIgHgGIgBAAIgCgDIgFgGQgDgEgDgJIAAgEIgBgBIAAgBIAAgBIgBgHIACgsIAiAmIADAEIACACIAQAZIAGAMIAAABIAAAAIABACIABADQADAIACAKQAEAOgCAEQgBABgBgFIAAACIABADIAAACIADARIAAABIgBAAIABAAIAAABIAAADIAAAAIgCgCIgBgBIABAEIAAAAIgBgBIgBgBIAAAAIABABIgCgBIAAAAIABABIACAEIAAADIAAABIABACIAAABIAAAAIgBAAIAAgBIgBgBIAAgCIgBgBIgEgJIAAgBIgBgBIAAgBIgBAAIAAgBIAAACIgBgBIAAAAIABABIAAAAIABADIAAAAIABABIgBAAIAEAGIAAAAIABABQABAFgCgEIgEgJIgBAAIACAEIAAABIABACIABAEIADAFIABABIABgBIAAAAIgCgBIACABIgCAAIgBgDIAAgBIABABIACADIgBgCIABABIACgBIgBgBIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIACgCIABAAIABgBIAAAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAgCIAAAAIABgBIABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAACIAAACIAAABIABABIAAgBIAAABIAAABIABAAIADAEIgBABIgBABIAAAAIAAAAIABADIAAAAIAAAAIgCgCIgBABIAAAAIABABIAAAAIgBgBIgBAAIAAABIAAAAIgBAAIAAAAIgBABIgBAAIgBABIAAAAIAAABIgBAAIAAAAIgBAAIAAABIAAAAIAAgBIgBAAIABABIAFAGIAIANIAAAAIACADIADAGIAAAAIAOAdIgBgFIgFgKIABADIgOgcIgBAAIAAAAIAAAAIgBgCIABABIgCgDQAAAAABAAQAAAAAAAAQABABAAAAQAAABABABIAIANIACADIgMgVIgBgCIABABIADAFIAAABIAAAAIADADIAWAqIgJgUIAHAPQgHgQgJgQIgBgCIgBgBIABABIAAABQAGAIAMAYIAAABIACAEIAOAhIAAgBIABADIABABIgCgFIgBgBIgKgYIAAgCIATApIAEAJIAAABIAAAAIAMAeIACACIgBAAIAVAyIgSAJgAAyCxIABAAIABADIACAFIALgDIAAgCIAAgBIAAgBIgBgCIAAADIAAABIAAAAIAAAAIAAABIAAAAIAAABIgIACIgBAAIAAgBIgBAAIAAgBIgDgGIgBAAIgBgCgAA+CuIAAAAIAAgBgAA+CoIABABIgBgBgAA8CmIAAAAIAAgBIAAAAIgBgDIABAEgAA3CeIgCgLIgBgCIAAAAIABAAIAAAAIAAAAIAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAAABIAAgBIAAAAIAEACIAAgCIgEgKIAAAAIgBAAIAAABIgCAAIgBAAIAAAAIAAAAIgBABIAAAAIAAAAIgBABIgBAAIAAAAIAAAAIADAHIAAABIABAEIACAEIAAgBIABABIAAgCQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAIABAGIABACIAAABgAAuCHIAAAAIAAABIAAgBIgBAAgAASBcIAAAAIABAAgAAlBbIABAAIABABIAAAAIAAgBIgBAAIgBgBgAAbBZIACABIABAAIAAAAIACACIgCgDIgBAAIgCAAgAAnBbIgBgCIgOgjIgBgCIAAgBIgMgZIACAOIgDgCIAAAAIgBgBIAAACIAAABIAAAAIABAEIAAABIABADIADAHIACADIAFAJIAKAQIAFAFIgCgEIACAEIACACIABABgAAkBaIABAAIgBgBIAAAAIAAABgAAgBYIAAAAIACABIgKgLIgBgBIgBgCIAKANgAAdBYIgFgGIgBABIAFAFIgFgFIAAAAIAAAAIgBABIAAAAIAAAAIACAEIABgBIABAAIABABIAAAAIABAAIABAAIAAAAgAAKAWIACADIALAZIgNgggAgIAfIgBABIABABIAAACIABAAIABACIABACIAAABIAAgBIAAgBIgBgCIAAAAIAAAAIgBgBIAAgBIgBgCIABAAIAAgBgAgVAdIABABIAAgCIAAgBIABAAIgBAAgAgTATIAAAAIAAgBgAgUASIAAABIAAgDgAgRAJIABACIABgBIgBgBIAAgBIAAgCIgBAAIABAAIAAgBIABABIAAABIAAgCIABACIABAAIgBgBIABAAIAAgBIgBgEIgBABIgCAAIgBAAIgBAAIAAACIgBAAIAAABIgBAAIAAgCIAAAAIAAgBIgBgBIAAABIABABIgBAAIAAABIAAgBIAAABIAAAAIABAAIAAAAIgBAAIAAABIAAAAIADAGIAAgCIAAgBIgBgCIAAAAIACACIAAgBIABAAIAAAAIAAAAgAgNAGIAAAAIAAAAIAAAAgAgZgBIABABIAAAAIgBgBgAgagiIABACIABAAIAAADIABAAIABACIABABIAAAAIAAgBIAAgBIgFgHgAgagfIAAAAIAAAAIAAgBIAAABgAgGghIABAAIAAgBIgBAAgAgjgiIAAAAIgBgBgAglgiIAAgCIgBgBIgBgBIAAABIAAgBIABABIAAABIgCgCIADAEgAgagjIABAAIgBgBgAgjgjIAAgBIAAAAgAgdgjIAAAAIAAgBgAgdgkIAAAAIAAAAIAAAAIAAgBIgBAAIABABgAgkgkIAAAAIAAAAgAgbgmIABABIgBgBgAgdglIABAAIAAAAIgBAAgAgcgmIAAAAIABABIAAAAIABAAIgBgBIgBAAgAgdgmIAAAAIAAgBgAgdgrIABAEIAAAAIAAAAIAAABIAAgBIABAAIAAAAIgDgHIAAAAIgBAAIAAABIAAABIABAEIAAAAIAAAAIAAABIABAAIAAgBIgBgDIAAgBgAghgpIAAgCIgBAAgAgdg1IACABIgBgBIgBgBgAghg4IAAgBIgCgCIABACIgBAAgAgkg9IACADIAAgCIgCgCIAAgBIAAAAIgBAAIABAAIgBgCIgEgQIgDgLQgCgFgEgFIABABIgEgGIgDgCIgBgBIgBgBIgFgEIgEgEIgFgIIAAABQADAGACACIABABIAAAAIADADIAFADIAEAEIAEAFIACADIAEAKIACAHIAAABIAAACIADAOIABADIAAgBgAgng+IAAABIAAgBgAgog/IAAABIgBgEgAgthfIAFAPIABAEIACAIIABADIABABIAAABIABABIAAAAIAAgDIAAgBIgBgFIgFgWIAAABIAAgEIgBABIgCgGIgHgRIgBAAIgGgJIACADIgRgZIgDgDIABANIAAACIAAACIABABQABAKAGAFIABABIAAAAIACACIAEADIACACIAAAAIAGAFIACAFIAAgCIAEAIgAguhEIgEgQIAAgBIgDgHIACAHIgDgHIAAAAIgDgEIgBgBIAAAAIgFgGIAAAAIAAgBIgBAAIgHgHIgBAAIAAAAIAAAAIgBgBQgGgGgEgKIAAABIAAgBIAAADIABAAIADAIIAGAHIAAAAIACABIABABIAGAFIAAAAIACACIAEAEIAAABIAEAFIACAHIADANIABABIgDgPIAEAQIABABgAAcBYgAAgAuIgBgCIACADgAgTAgIAAAAIAAAAgAATATIgBgBIABAAIAEAKgAgQAIIgBgBIAAgBIAAAAIAAAAIABACIAAABIAAAAg");
	this.shape_174.setTransform(265.025,310.975);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#996633").s().p("AgEAKIAAgBIAAgBIgBABIAAAAIABABIgBAAIAAAAIAAAAIAAgBIgBAAIAAAAIAAAAIgCABIgBgBIAAAAIABgBIAAgBIAAAAIABgBIABAAIgBAAIABgBIgBAAIABgBIgBgBIACgCIgBgCIABAAIAAABIABgBIAAgDIgBgCIgBgDIABAAQACAEgBADIAAAAIABABIAAgEIAAgBIAAgCIABABIABAAIAAAAIAAADIABAAIAAgBIAAAAIAAgDIAAAAIAAACIABgCIAAAAIAAAAIABADIABABIgBgDIABADIAAgDIABADIABAAIgBABIAAABIABABIABAAIAAgBIgCgEIADADIACADIABAHQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgBgBIAAABIgBAAIgBAAIgCABIgEAAIgBABgAgGAIIAAgBIABgBIgBAAg");
	this.shape_175.setTransform(261.981,309.225);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#996633").s().p("AAaAtIgDABIAAgEIgIABIgGgBIgEgCIgHgHIgDgFIgCgFQgBgFACgFIABgEIACgCIgDgGIgBgBIAAgBIgEgJIAAgBIgBgBIAAgDIAAABIAAgCIAAAAIgCgIIAAgBIAAAAIAAgBIgDgDIgDgCIgDgBIABgBIgCABIABAAIgDACIAAABIAAABIAAACIAAAAIAAAEIABACIAAABIgBgBIAAgBIAAgCIAAgCIgBgBIAAgDIAAAAIAAAEIAAAEIAAACIABABIAEAQIAAABIAAAAIABABIAAAAIAIARIABAAIADALQABAIgBAEIgBADIAAgDQABgGgCgGIgBgFIgCgFIAAgBIgGgNIgDgFIgCgHIgBgGIAAABIgBgBIACAGIABAEIABADIAAABIAIASIAAAAIAAABIACAHIABAIIgCgLIAAABIgBgBIABADIgBABIgCgIIACAKIAAACIAAACIgBgCIgCgJIgBgCQADAHAAAHIgBAAIAAAAIgDgOIAAAAIgJgQQADAGAGAKIACAHIgDgHIAAABIgHgOIAHAOIAAgBIABAFIAAAAIgKgUIAAgBIgBgBIAAgBIAAgBIgBgBIgBgEIgBgCIgCgIIgBgBIAAACIAAABIAEAMIABABIAAAAIABACIAAACIAHANIABABIgBAAIgHgMIgCgFIgBAAIAAgBIgBgBIgDgJIgCgGIAAgCIAAgCIgBAAIAAgDIAAgCIAAgEIAAgEIAAgBIABgBIAAAAIABgCIAEgHQADgDAEgBIABAAIABgBIAJAAIABABIABAAIAFACIAEADIAGAIIgBgBIACAFIAAABIACAFIABAHIACAEQADAGAAACQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAIAAABIABABIACAEIAAAAIAAACIABAAIAAAEIgBAAIABADIgBAAIgBgBIABABIAAABIAAABIgBABIAAABIgBABIAAABIABAAIAAABIgBAAIAAABIABAAIAAAAIgBACIAAAAIAAAAIAAABIAAgBIABABIAAgBIABABIAAAAIAAgCIABAAIAAAAIABAAIAAgBIABAAIABADIAAAAIgBgEIAAAAIAAAAIABAAIACADIABAAIAAABIAAAAIgDgFIAAAAIAAAAIADACIAAABIABABIADAEIADACIAAgBIgEgEIADADIgFgGIAAAAIgBgBIABAAIAAABIAAAAIAGAGIAAAAIABAAIACAEIAAAAIABgBIgHgHIAAgBIAGAFIADACIAAAAIAAAAIABgBIABAAIABAAIAAABIACgBIAAAAIABgBIAAAAIABAAIAAAAIAAgBIABAAIAAABIAAAAIAAADIAAABIAAAAIABgCIAAAAIAAgBIgBgBIABgBIABAAIAAACQABgBAAAAQAAAAAAAAQABgBAAAAQAAABAAAAIABADIAAABIgBACIAAABIAAAAIgBAEIAAABIgBABIABgBIAAADIABABIgBAAIAAABIgBAAIABACIAAAAIABABIgOAGQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAgAAWApIAAgCIgHABIAAAAIgBAAIABAAIAHABgAAVAiIAAAAIgBgBgAAnAfIgBACIABAAIABgEIAAAAIgBgBIAAADgAANAcIgCgCIAAAAgAASAaIAAgBIAAgBIAAACgAAQAXIABABIgBgBIAAgBgAAOAUIABACIAAgCIgCgBgAAGATIABAAIAAAAgAANARIAAAAIgBgBgAABAHIAAgBIAAAAIAAABgAAAAEIAAAAIAAAAgAgJgIIAEAIIAAAAIACADIgEgHIgCgFIAAABIAAgCgAgbgeIAAABIACgCgAARATIgBgBIAAgBIAAAAIAAgBIABABIAAABIACACgAgXgBg");
	this.shape_176.setTransform(262.7583,301.025);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#996633").s().p("ABKEUIAAgCIgBAAIAAABIAAAAIAAAAIAAABIAAAAIAAgBIgBAAIAAAAIAAAAIgCABIgBgCIAAAAIABgBIABgCIABgBIgBAAIABgCIAAgBIAAAAIgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIgBgFIABAAIAAADIAAgCIAAgEIAAgDIgBgEIAAAAIABAAQACAGgBACIAAABIAAAAIAAgEIABgCIgBgCIABACIABgBIAAAAIAAgDIgBAAIAAABIAAgBIgBAAIAAgBIgBgBIAAAAIAAABIAAAAIABAAIgBABIAAAAIgBAAIAAAAIAAgBIAAABIgCAAIgBgCIgBAAIACgBIABgCIAAAAIgCgGIgBgMQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIACAAIAAAAIAAgDIAAAAIABAAIAAACIABgBIAAAAIABAAIAAAAIABAAIABgBIAAAAIACABIACAAIABgBIABAAIAAAAIAAAAIAAAAIABAAIgBAAIAAABIAAAAIAAABIAAABIABAAIAAgBIAAgBIAAAAIAAAAIAAAAIAAgBIAAAAIABAAIABABIACgBIAAABIABAAIAAAAIACgDIAAgDIAAgCIAAgCIAAgBIgBgDIAAgBIgBgCIAAAAIAAgBIAAABIABgDIAAAAIAAgBIABgCIAAgBIAAAAIAAgBIAAAAIABgDIAAgBIgBgBIAAAAIAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAAgDIAAgBIAAABIgBgBIAAgCIAAgCIACAAIAAAAIAFAAIABAAIABAAIAAAAIAAgBIAAgDIAAAAIABAAIAAACIAAABIABgBIABAAIAAAAIABgBIAAgEIgBAAIAAgBIAAAAIAAAAIgBAAIgBgBIABAAIAAgBIgCAAIAAAAIACgBIgCgBIAAgCIgCgCIgDgDIgBgBIAAgCIAAgEIAAgCIAAgBIABgBIACgDIAAgCIgBAAIAAgBIgBgEIAAgBIAAgBIgCgDIAAAAIAAABIAAAAIgBABIgJAEIAAAAIgBAAIAAgBIAAAAIgBAAIgCABIgCgFIAAgFIABAAIAAgBIgCgFIgFgZIgBgKIAAgGIAAgCIgCAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAgBIAAABIABgDIAAgBIAAgFIAAgBIAAAAIAAgBIAAAAIgBgFIgBgEIAAgFIgCgKIAAAAIACAHIgBgGIAAgBIAAgBIgDgLIgGgNIAAgBIABABIAHAQIgFgPIAAAAIADAEIAAAAIABAAIAAgBIADAJIAAgCIgEgKIABAAIAAABIACAIIgCgIIAAgBIAAAAIAAAAIABAAIABAEIAAABIgBgGIAAgBIAAABIAEAKIACACIgEgKIAFAKIgCgFIgCgEIAAAAIAAAAIAFAJIAAABIABAEIACAEIAAAAIAAgBIgFgOIAAAAIADADIABAEQADAFACAFIAHAbQAAABAAABQAAABAAAAQAAABAAAAQAAAAgBABIgCgBIAAABIACABIAAAAIAAAAIAAABIABAAIADAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIAAAAIgBADIAAAAIABACIAAgBIAAABQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAIABAHIgBAAIABABIAAAAIAAAAIABADIgCAAIgBgCIAAACIgDAAIACAKIAAAAIAAACIAAAAIABAGIABACIABAAIgEgSIAAAAIAGAQIACgCIAIgEIALARQADAGgBABIgCgBIAAABIAAABIABADIAAABIgBAEIAAAAIAFABIABAAIADABIAAADIAAABIAAABIgBAAIgCAAIgBABIACAAIABAAIABABIABABIgBAAIgBAAIAAABIgBAAIgCAAIAAAAIABAAIABABIAAABIACAAIAAABIAAAAIACAEIAAAFIAAgDQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBgBIgBABIgEAAIAAABIAAABIABABIgBAAIABABIABABIAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBIACACIABACIAAACQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIAAAAIAAAGIAAAHIgJgCIABAKIAAACIgCABIAAABIACAAIAAABIgBABIgBAAIgBACIAAAFIACACIABAGQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIAAABIAAABIgBgBIAAgBIgBAAIAAAAIgCABIAAABIABAAIAAAAIABABIAAgBIAAAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAIACAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAAIgBAAIgBABIgBABIABAAIgBABIAAABIAAgBIABABIgCABIABACIgBAAIgBgBIAAABIAAACIABACIABACIgBAAQgCgDAAgCIAAAAIAAAAIAAACIgBABIABACIgBgBIgBAAIgBAAIAAAAIAAgBIAAABIAAAAIgBABIAAgBIAAAAIgBACQgCAEgFAGIAAACIgCAAIgBgCIgBABIgBAAIgBAAIgBAAIAAABIgBAAIAAgBIgCAAIAAAAIAAAAIAAAAIgBAAIgBgBIAAAAIAAAAIAAAAIAAABIAAAAIAAAAIAAAAIAAABIgBAAIABAAIAAgBIgCgBIAAABIAAAAIAAAAIgBAAIAAAAIABABIAAAAIAAAAIACAAIAAACIABgCIAAAAIABAEIABACIAAgBIgBgEIABACIAAACIAAgDIAAgBIABAEIAAAAIAAABIAAABIABACIAAAAIAAgBIgBgFIACADIADAEIABALIgCABIgCAAIAAAAIgBABIAAAAIgCABIAAAAIgBAAIgBAAIgBAAIAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIAAAAIAAAAIAAABgABIEPIAAACIAAAAIAAgBIABgBIAAAAIgBAAgABND9IAAADIABAAIAAgBIgBgBIAAgCgABQD5IAAAAIAAAAgABMD5IAAAAIAAAAIABAAIAAAAIgBAAgABID2IAAAAIAAAAgABZDfIgBACIgBAAIAAABIgBACIABgBIABgCIABgBIAAAAIAAgBgABVDiIgBABIABAAIABgCIgBgBIAAACgABjDgIABAAIAAgBIAAAAgABZDfIAAgBIAAAAgABaDdIAAABIAAAAIABgBIAAgCIAAgBIAAAAIgBADgABbDZIABAAIAAAAIAAgBIAAAAIAAgBIgBACgABnDWIABAAIAAgBIgBAAgABoDUIACAAIgBgDgABcDHIAAADIAAgBIAAgCIAAAAgAByC1IAAAAIAAABIABgCIAAAAIgBAAIAAABgABwCyIAAAAIAAAAIAAABIABgBIAAgBIAAAAIgBAAIAAgBIAAAAIAAABIABAAgABwCyIAAgBIAAAAgABsCwIABAAIAAgBIAAAAIgBAAgABpCwIABgBIAAgBIAAgBIgBAAIAAADgABwCqIAAABIAAgCgABwCpIAAABIAAgCIgBAAgABmCpIABAAIAAgBIgBAAgAB1CeIABAAIgBgBIAAAAIAAAAgABvCaIACAAIAAABIAAABIAAAAIAAAAIAAAAIABgBIAAAAIgBgBIgBAAIAAAAgABwCZIAAABIADAAIAAABIABAAIAAAAIgBgBIAAAAIgCgBgABrCVIAAgBIAAAAIAAgBIgCAAIgBAAIAAABIABAAIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAABIAAgBgABsCUIAAAAIAAAAgABkCRIABAAIgBgBIAAgBIAAgCIAAAAgABhCLIABACIgDgFIAAgBIAAAAIACAEgABJBlIACASIABADIABAAIgEgQIAAgJIgBAAIABAEgABQBoIACAGIAAgBIgBgEIABACIgCgKIAAAAIAAABIAAACIgBgDIAAAAgABGBKIAAAAIAAgCIAAgCgABIBJIABAAIAAgCIgBAAgABND9IAAABIAAABgABND+IAAAAgABPD7gABKD4gABVDcIgCgBIAAAAIAAABIAAAAIAAAAIgBAAIAAAAIgBAAIAAAAIAAAAIAAgBIgBAAIAAABIAAAAIAAAAIgBAAIAAAAIgBAAIgBAAIAAAAIgCgBIABABIgCgBIAAAAIgBAAIABABIgEgBIgBgCIADAAIAAgBIALAAIACAAIABAAIgBABIABAAIAAAAIgBAAIABABIgBAAIAAABIAAAAIgBgBIAAAAIAAAAIAAAAIAAABIAAAAIACABgABTDZIAAAAIAAgBgAA1ARIAAgBIgCAAIgCgBIgCgCIgBgCQgCgCgBgDQgBAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAIABAAIAAgBIABgBIAAAAIACgBIABgBIAAAAIAAAAIgBAAIgBgCIAAABIAAgCIAAABIgBACIAAAAIAAAAIAAAAIAAgCIgBAAIgCgGIAAgBIAAgBIAAAAIgBgBIgCgDIAAAAIABACIAAADIABABIABABIACAEIAAABQgBABAAgBIAAgBIAAABIgBgCIAAgBIgBAAIABACIgBgBIABABQABAGgDgDIgCgDIgCgHIAAABIgBgDIgBgHIAAAAIgBgBIAAgBIgBgBIAAgBIgGgNIAAAAIAAgCIgBABIgIgNIAAgBIgCgCIgFgFIgJgLIgFgGIAAAAIgDgBIgDgCIAFgFIgDACIgDgFIAAgBIghg/IgCAAIgBAAIgBgBIgFgEIgBgBIgEgDIgCgBIABABIgCgBIgBgCIAAgCIgHgGIAAgBIAFAFIgDgEIgBgBIAAAAIgCgDIAAgBIgBgBIAAgBIAAAAIgBgCQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgCIgEgDIgBgBIABABIgDgFIgBgBIgBgCIgFgFIgBgCIAAABIgJgJIgDgCIABABIgDgCIgNgNIAAAAIgBgBIgBAAIgBAAIgCgBIABgCIgBgBIABgBIAAAAIAFgGIABAAIAAgBIgBgBIAAAAIABgBIACgBIAAAAIAAAAIACgCIAAAAIABAAIAAAAIAJgDIAAAAIgFgHIAEAEIgDgEIgBgBIgCgGIgEgEIgEgHIAAgBIABAAIAJAQIABAAIgEgHIgBgEIgDgEIADADIAAgBIABAAIAAgBIADAHIAAgBIAAAAIgCgEIABACIgCgFIAAAAIAAAAIAAgBIABAAIABADIAAABIgBgFIAEAHIACABIgFgGIABAAIAFAGIgEgGIAAAAIAEAFIABAAIAAABIABADIABAAIABACIABAAIAAAAIgBgCIgFgHIAEAEIAGAFIALAPIABABIAAACIgBAAIAAABIAAABIAAABIgBADIAAAAIAAABIgCABIgCABIAAAAIAAABIAAAAIAAABIAAABIABAAIAAAAIABAAIAAgBIAAAAIABAAIABgBIABgBIAAAAIAAgBIABgBIABAAIAAAAIAAAAIAAABIABAAIAAgBIAAgBIAAAAIAAAAIABAAIACgCIABABIAAABQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAIAAABIABABIABAAIACABIAHAFIAaAYIAAAAIAAgBIAAgBIABAEIABAAIgBAAIACAFIAAABIAAABIgCgMIAAAAQAAgBAAABIAGAUIADAHIAAgBIgFgQIAFANIgGgQIAAAAIABAAIAGAQIAAACIAAABIACAHIABACIABAEIACABIAAAAIgCgDIgHgXIAAgBIAGAOIAGAQIgOAHIAFAFIgOgBIAEAAIAAgBIgBAAIAEAAIgCgBIgCAAIAAAAIAAAAIAAgBIAAABIAAAAIAAAAIgBAAIABAAIgBAAIAAAAIAAAAIAAgBIgDgCIADADIAAABIAAAAIgBgBIABAAIAAAAIgBAAIgCAAIABAAIgCgBIABABIgCgCIAAABIgBAAIACABIgBABIABAAIAAABIgBAAIAAAAIgBAAIAAgBIgBAAIAAAAIABABIABABIAAABIgBAAIAAABIAdA3IADAGIABAAIAAAAIgOgbQgEgHgCgHIgJgRIgBAAIABAAIAGAMIAAgCIABABIgBgEIAOAaIgBgCIgPgdIABABIgBgDIACADIAFAKIABABIgHgPIAAgBIAPAdIAGAJIgBgBIgQgdIAPAZIgMgXIAAAAIAMAXIABAAIAJASIABgBIgRgfIgBAAIABAAIATAfIABAAIACABIABAAIAEACIADADIABADIAAABIABACIAAADIgBACIAJAJIAQASIAMAUIACAEIACAGIAAABIADgBIACAFIAMAWQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAIgBAAIAAACIgBABIAAABIAAAAIAAAAIgBACIAAAAIAAABIgCAAIAAABIAAAAIAAgBIgBAAIAAABIABAAIAAAAIgBABIgBgBIgBAAIACABIAAABIgCgBIAAABIAAAAIAAAAIAAABIAAAAIgBAAIAAAAIgBAAIAAgBIAAAAIAAAAIAAABIAAAAIAAAAIgCAAIgBABIgBAAgAA4AOIABAAIgBAAgAAugDIAAAAIgBAAgAAugGIABABIAAAAIgBgBgAAegfIABAAIABADIABACIABACIABAEIABAAIABADIgBgDIgEgIIgCgEgAAwgZIABABIABgBIgCgCgAgzicIACABIABABIABAAIgEgCgAgtibIABABIABAAIAAAAIgBgBIgBAAIAAAAgAgiifIgBAAIABAAIAAAAIAAAAIAAgBIgBAAgAg/inIAAAAIABACIABAAIgCgDgAg4i0IACACQABACADACIABAAIACgBIgHgJIgBADIAAgDIAAAAIAAgBIAAAAIgDADIADABgAg9i0IACACIABAAIAAAAIgBgCIgCgBgAhIi2IACACIgBgEIAAAAIgBAAgAhBi3IACABIAAAAIgBgBIgBgBIAAAAIAAABgAhCi4IACAAIAAAAIAAAAIAAAAIAAgBIgBgBIAAAAIgBAAIAAACgAgii4IAAgBIgCgKIgEgJIgMgDIABAAIABAEIAAgBIAEAEIADAFIAAAAIADADIgBgBIACADIACABIABABIACAEgAhCi6IABAAIABgBIAAgBIABAAIAAAAIAAgBIAAAAIAAAAIAAAAIAAgFIgCgCIAAAAIAAABIgBAAIABACIgCAAIgBAAIAAABIgBABIABAAIABABIAAABIABAAIgBABIAAAAIABAAIABAAIAAAAIgBAAIAAAAIAAABIAAgBIAAACgAhFi7IABAAIAAAAIgBgBgAhGi8IAAAAIABAAIAAAAIAAAAIgBgBgAhIi/IAAABIABABIABgBIgCgBgAghi+IgDgNIgDgBIACAFIAAgBIABABIAAgCIAAgBIAAABIADALgAhLjBIACACIAAgBIAAAAIgCgBIAAAAgAhVjIIAGAGIABABIgEgFIgDgDgAhBjEIAAAAIgBgBgAg1jPIAAABIAAgBIAAgBIgBAAgAg7jQIAAgBIAAAAgAhGjRIgBgDIAAAAIgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIABgCIAAAAIAAgBIgBgCIAAABIgBAAIABgBIAAgBIgCAEIAAgCIgBABIAAgCIgCAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBgBIgBAAIgEgBIgCgCIgCgCIAAAAIgHgEIAHAFIABAAIgGgDIAVASIACACgAhOjfIAAAAIgBAAIAAgBIAAAAIgBgBIAAABIAAAAIAAAAIAAAAIAAAAgAhwjiIgCgBIAAAAgAhjjrIAEAEIAHAEIABgBQgGgDgEgEIgCgBgAhYjlIACABIAAgBIgBAAgAhVjmIAAgBIAAAAgAhUjnIAAAAIAAgBIAAAAgAhIjoIAAAAIAAAAgAhXjqIAAAAIABABIAAgBIgBAAIgBAAgAhKjsIABgBIgBAAIAAABgAgkicgAhokSIAAAAIABABg");
	this.shape_177.setTransform(269.85,320.875);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#996633").s().p("AAEAJIgBgBIAAgBIAAABIgBgBIAAAAIgBABIAAgCIgBABIAAgBIAAAAIAAgBIgBAAIgBABIgCABIAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAABIABAAIAAgBIgCAAIgBAAIgBAAIABgBIAAgBIAAAAIABgBIgBAAIAAgBIAAAAIAAAAIgBAAIABAAIABgBIABgBIgCABIABgBIgBAAIABgBIABgBIAAABIABgBIAAgBIgCACIABgDIABgCIADgBIABACIAAABIAAABIAAABIABACIAAAHIgBAAIAAAAIABABIAAAAIgBABIABAAIAAACIgBABIAAAAgAAEAHIAAAAIgBAAg");
	this.shape_178.setTransform(278.225,346.495);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#996633").s().p("AgHAKIAAgBIgBAEIAAABIAAACgAgGAMIgBAAIAAABIAAgBIABgFIgBAAIAAABIAAACIgBADIAAABIgBgBIAAABIAAgEIgBAEIgBAAIABgHIAAgCIgBAAIAAAHIAAAAIAAgGIgBAFQgBgDABgCIAAgBIAAAAIABgDIAAAAIAAgCIAAAAIAAAAIgBAAIAAABIgBAIIgBgGIAAgGIACgEIAWgIIAFAMQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgCAAIAAAAIAAABIAAAAIgDADIgBAAIgBAAIAAABIgCAAIAAAAIAAABIgBABIAAAAIgBAAIAAABIAAAAIAAgCIgBAAIAAABIAAAAIAAAAIAAAAIAAgBIAAgBIAAAAIAAAAIAAgBIAAAAIgBABIAAABIABAAIAAABIgBAAIAAAAIAAAAIAAAAIAAAAIgBAAIAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgBgCIABgDIAAgBIAAAAIAAABIgBAAIAAgBIAAABIgBAAIAAABIgBAEIgBACIAAAEIgBAAgAAAAEIAAACIAAgCIAAAAg");
	this.shape_179.setTransform(279.8167,344.875);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#996633").s().p("AgEAXIAAgBIAAgCIAAgBIAAACIAAAAIgBAAIABABIAAAAIAAAAIgBABIgBAAIAAgCIAAAAIAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAAgBIAAABIABgDIAAAAIABgDIABgBIgBAAIABgEIAAgCIAAABIgBgCQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAABgBIgBgGIABAAIAAAEIABgDIAAgHIgCgMIAAgBIABABQACAKgBAFIAAABIABAAIAAgHIAAgDIAAgFIABADIABAAIAAAAIAAgBIAAAHIABAAIAAgBIAAgCIAAgFIAAAAIAAAAIAAAAIAAADIABgEIAAAAIABAIIABACIgBgIIABAHIAAgGIABAGIABABIAAAAIgBADIAAABIABACIABAAIAAgCIgCgIIADAFIACAHIABARQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgBgBIAAABIgBABIgBAAIgCACIAAAAIAAAAIgBABIgBAAIgBgBIgBAAIgBABIAAAAIgBABgAgGAPIAAACIAAABIAAAAIAAgCIABgCIgBAAgAAAgQIAAACIAAABgAAAgOIAAAAg");
	this.shape_180.setTransform(277.7143,345.775);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#996633").s().p("AgIAgIgBgEIAAgBIAAABIABgDIAAgBIABgEIABgCIgBABIABgBIgBAAIABgGIAAgCIAAABIgBgCQAAgDACgCIgBgJIABAAIAAAGIABgPIgCgQIAAgBQABAAAAABQACAOgBAGIAAADIABAAIAAgPIAAgGIABAEIAAAAIABAAIAAgBIAAAAIAAAJIABAAIAAgBIAAgDIAAgHIAAAAIAAgBIAAABIAAAEIABgFIAAAAIAAAAIABALIABADIAAAAIgBgLIABAJIAAgIIABAIIABABIAAABIgBAEIAAAAIABAEIABAAIAAgCQAAgHgCgGIADAIIACAKIABAYQAAABAAABQAAABAAAAQAAABgBAAQAAAAgBAAIgBgBIAAABIgBACIgBAAIgCADIAAAAIgBABIgBAAIgBgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAAIAAAAIgBABIAAABIgBAAIAAAAIAAAAIgBAAIAAAAIAAgBIAAgDIAAgBIAAAAIgBACIABAAIAAgBIAAAAIAAADIAAgBIgBAAIAAABIAAAAIAAAAIAAgBIgBABIAAgBIAAAAIAAABIgBABIgBAAgAgGAUIAAABIAAADIAAAAIAAABIAAgDIABgCIAAAAgAAAgWIAAACIAAABgAADgYIAAAAIAAAAg");
	this.shape_181.setTransform(278.7143,341.8448);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#996633").s().p("AAGANQgCgGABgCIAAgCIgBAAIAAAFIAAABIAAADIgBgCIAAAAIgBAAIAAAAIAAAAIAAgDIgBAAIAAABIAAABIAAACIgBAAIAAgCIAAADIAAAAIgBgEIgBgCIAAABIAAADIAAAAIgBgDIgBAAIAAgBIABgBIgBgCIgBAAIAAABIACAFIgDgDIgCgFIgBgJIACgBIABAAIAAAAIABgBIABAAIACgBIAAAAIABAAIABAAIAAAAIAAAAIACAAIAAAAIAAAAIABAAIAAgBIACAAIAAACIAAAAIABgBIAAAAIAAAAIAAAAIABAAIAAAAIACgBIABACIAAAAIgBABIgBACIgBAAIABAAIgBADIAAABIAAAAIABABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIABADIgBAAIAAgCIgBACIAAAEIABADIABADIAAABgAAFAAIABAAIAAAAgAAHgIIgBAAIAAABIABAAIAAgBIAAgBIAAAAIAAABgAABAJIAAgBIAAACIAAgBgAABAJIAAAAg");
	this.shape_182.setTransform(278.7283,338.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#996633").s().p("AAPAmIgCgbIAAgDIAAAAIAAAEIABAJIAAADIgBAEIAAAIIAAgGIgBABIAAgBIAAABIgBABIAAgJIAAgCIAAgBIgBAAIAAABQACAIgBAKIAAgLIgBAFIAAABIAAABIgBgCIAAgEIAAAGIgBAAIAAgNIgCgFIAAABIABAHIgBgFIABAKIAAABIgBgBIgBgKIAAAAIAAgHIgBgBIgBgEIAAABIAAgBIAAADIACAPIAAAAIgFgVQgBgGgDgEIAAAAIABABIgBgCIAAABIgIgMIAAgBIgBAAIAAgBQgDgFACgBIACABIAAgBIgBgBIAAgCIAAgBIABgEIABAAIAAgBIACAAIAAAAIACgBIAAABIAAgBIAAgBIABgBIAAAAIAAgBIABAAIAAAAIAAAAIABAAIABAAIAAAAIAAAAIAAABIAAAAIABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABAAIAAAAIAAABIAAACIAAgBIAAACIAAgBIABADIAAACIABACIAAABIAAAAIAAABIAAgBIAAABIABABIAAAAIADAHIABAAIABACIAAgBIABACIACADIABADIgBACIAEAMIAAABIgBgBIgCgIIABAHIAAACIADAgIAAABgAAAgcIABACIAAgBIgBgDIAAgBIgCgCIACAFgAgFglIAAABIAAAAIABABIAAABIAAAAIABABIAAABIAAgBIgBgCIAAgBIAAAAIAAAAIgBgBIAAgBgAAPARIAAgLIABALg");
	this.shape_183.setTransform(277.835,331.6188);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#996633").s().p("AAMAcQgDgIgDgKIAAgCIAAAAIAAACIABAHIABAEIABAGIgBgDIgCAAIABABIgBAAIABABIAAAAIAAAAIgBAAIAAABIgBgBIgBgCIABAEIAAAAIgEgKIgBgCIAAAAIADAKIgDgJIACAIIAAAAIgCgEIgBgEIAAAAIAAgFIAAAAIgCgDIAAAAIAAACIADALIgDgGIgEgJIgFgXQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIACABIAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIADgDIAAAAIABgBIAAAAIACABIACAAIAAgCIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAADIAAAAIAAABIABAAIAAgBIAAgBIAAAAIAAAAIgBgCIABAAIABAAIABABQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAAABIAAABIAAABIAAAAIAAAAIAAADIAAACIgBACIAAACIAAgBIAAABIAAAAIAAAGIABABIAAgBIAAACIAAAFIABAIIAAAAIAAAAIgCgGIABAFIAAACIAHAUIAAABgAAEgRIAAgEIAAAAIAAgBg");
	this.shape_184.setTransform(276.1,327.65);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#996633").s().p("AAGAOQgCgGABgDIAAgBIgBAAIAAAEIAAADIAAADIgBgCIAAAAIgBgBIAAABIAAAAIAAgEIgBAAIAAAAIAAACIAAADIAAAAIgBAAIAAAAIAAgCIAAACIAAABIAAgBIgBgEIgBgCIAAABIAAAEIgBgEIgBgBIABgCIAAAAIgBgCIgBAAIAAABQAAAEACACIAAAAIgDgDIgCgFIgBgLQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIABABIAAgBIABAAIABgBIACgBIAAAAIABAAIABAAIAAAAIACAAIABAAIAAgBIACAAIAAACIAAAAIAAABIAAgCIABAAIgBAAIABAAIgBAAIABgBIABAAIAAABIAAAAIACgBQABABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAABIgCABIAAACIgBABIABAAIgBACIAAABIAAAAIABABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIABAEIgBAAIAAgDIgBACIAAAFIACAHIAAABgAAFAAIABAAIAAgBgAAHgJIgBABIABAAIAAgCIAAAAIAAgBIAAACg");
	this.shape_185.setTransform(275.7307,327.325);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#996633").s().p("AANA6IgBgCIgBgCIAAAAIgBgDIgBgDIAAgEIgCgGIgDgEIAEAKIABAEIABAFIAAABIAAgBIgBgFIgBgEIAAAAIAAAHIACADIAAABIgBgDIgBAAIAAgBIgBgHIAAAAIgDgIIgBAAIgBgCIAAAAIgBgEIgBgBIAAgBIAAgBIgBgBIgDgGIgCgBIABACIABAAIABADIACADIAAABIAAAAIABAAIACAHIAEAJIgGgLIgBgCIgBgBIAAgBIAAAAIgDgEIgGgJIgBgEIgBAAIAAgBIAAgBIgCgGIgCgKQgDgMABgSIABgFIABgDQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAgBIABgEIABgBIACgEIABAAIABgBIAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIABAAIABAAIABAAIAAgBIAAgBIABgBIABgBIAAABIAAgBIAAgBIABAAIAAACIgBAAIABABIgBAAIAAAAIABAAIgBABIAAACIAAABIAAABIAAADIAAABIAAgBIABgEIABgDIAAgBIAAABIAAABIABAAIAAgBIAAAAIAAAAQAAgBAAgBQAAAAAAAAQABgBAAABQAAAAAAABIAAADIAAAEIAAgBIAAACIAAgBIgBAFIAAABIAAABIgCALIABgBIgBACIABAAIgBAKIABAEIAAgCIAAAEIAAAFIAAADIABAIIAAACIABAAIAAABIADAFIAAABIAAAAIgCgDIgCgDIAAAAIAAgBIAAAAIgBgFIABACIAAAEIAAAAIAAABIACADIABACIAFAKIAAABIAAAAIABABIAFAKIADAHIAAACIAAADIABACIAAABIgBABIAAAAIAAgCIgBgBIAAgEIAAgBIgBgBIgBgEIAAAFIABAAIAAABIgBACIABADIAAACIAAAAIABAAIAAACIABABIAAABIgCgCIAAgBIgBgDIAAABIgBgBIAAACIAAABIABABIAAAAIAAACIAAAAIAAAAIAAABIgCgCIAAABIACACIAAABgAgBgtIgCAMIABgBIAAgEIABgEIAAgDgAASA1IgBgBIgBgBIADABIAAAAIABAAIAAABIgBAAgAgCg1IAAAAIAAABgAgCg1gAgCg1IAAgBIAAABg");
	this.shape_186.setTransform(273.7607,319.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#996633").s().p("AAGAbIgCgSIAAgCIAAAAIAAACIAAAHIAAAEIAAAGIgBgEIAAAAIgBAAIAAABIAAAAIAAgEIAAgEIgBAAIAAABIABAIIAAgDIgBADIABAAIAAABIgBgBIAAABIgBgBIAAgDIAAAEIAAABIAAgBIAAgJIgCgDIAAAAIAAAFIgBgEIABAIIAAAAIgBgIIgBAAIAAgBIABgDIgBgBIAAgDIgBAAIAAgBIAAACIAAABIACALIAAAAIgDgHIgCgJIgBgNIAAgJQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAAIAAgBIABgCIABAAIADgCIAAABIABgBIAAAAIABABIABAAIAAABIABAAIAAgBIABAAIABAAIAAABIAAAAIAAAAIAAABIAAABIAAABIABgCIAAAAIAAAAIAAAAIAAAAIAAgBIABAAIABAAIAAABIABAAIABABIABAAIAAAAIgBABIAAAAIgBACIgBAAIgBAEIgBABIABgBIgBABIABAAIgBAEIABACIAAABQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAIAAAJIgBgGIAAAOIADAOIgBABgAAGgTIAAACIABgEIAAAAIgBACgAAHgWIAAgBIAAAAgAAGgYg");
	this.shape_187.setTransform(273.8,317.125);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#996633").s().p("AAcBBIgDgJIAAgBIgIgPIAHAOIAAACIAAACIgFgLIAAAAIAFAMIAAAAIgBAAIgJgVIgEgGIAAABIADAHIAGAMIAAAAIgBAAIgIgQIAAAAIgBgCIgBgBIgDgIIgFgIIAAgBIABADIANAaIAAABIgJgOIgihCQgEgGABgCIACAAIgBgFIgBgBIAAgFIABAAIAAgBIgBgCIABAAIACABIAAAAIABgBIABAAIAAgBIgCgDIABgBIAAgBIAAAAIAAAAIABABIAAABIABABIABABIABACIAAABIABABIABACIAAAAIABAAIgDgGIAAAAIgBgBIAAABIgBgCIAAAAIAAgBIAAgBIAAAAIACABQAAgBAAAAQAAgBAAAAQAAgBAAAAQABABAAAAIAEAHIABACIAAgCIACAHIAAABIAEAJIABADIAAgBIAAACIABgBIAEALIABAAIACAFIgBgCIACADQADAGAAAEIAKATIAAABIgBgBIgHgNIAFAMIABABIABACIAWAwIABACIgBgBIgTgpIgCgEIgBgBIACAGIAHAOIAJAXIgEgJIAAABIgBgBIABACIAAABIAAAAIgCgDIABADIABAAIAFAMIAAABgAgOgoIAAAAIgDgIIAAAAIgBgCg");
	this.shape_188.setTransform(270.1139,309.4448);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#996633").s().p("AARAbIAAABIgBABIAAgBIgDgDIAAAAIgBgBIAEAGIgIgJIgDgCIAAAAIAJAJIAAAAIgIgHIAGAHIgBAAIgHgIIgDgDIgBgBIAAgBIgBgCIgBAAIABABIAAAAIABABIAIALIgHgFIgIgJIgBgCIgFgIIgJgOIgBgCIABgCIACAAIAAAAIgBgBIAAgDIABgDIABAAIAAgBIAAAAIACAAIAAAAIABgBIABAAIAAgCIAAgBIAAgBIACAAIAAABIAAABIAAAAIABABIAAABIAAAAIABABIgBgCIAAgBIAAAAIAAAAIAAAAIABACIgBAAIgBgDIAAAAIABgBIAAAAIABABQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIABgBIAAABIAAADIAAABIACAGIAAAAIABAAIACAFIAAABIABABIAAAAIABABIAAAFIAHAIIAAABIAAAAIgGgGIAEAFIABABIAAABIAFAHIAJAIIACACIACACIAAABIgBAAIgCgCIgGgGIgIgKIgBAAIAIAKIACADIAEAFIgEgDIAAAAIAAAAIAAABIAAABIAEAFgAgHgSIAAABIAAgBIgBgEIAAAAIgBgBg");
	this.shape_189.setTransform(267.9,306.0201);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#996633").s().p("AACAOIgCgBIgBgBIgBAAIAAAAIAAAAIgBgBIgKgGQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAABAAIABgBIAAgBIgBgBIAAgDIABAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAgBIABgBIABgBIAAgCIgBAAIAAAAIABgBIAAgBIAAAAIAAAAIABAAIAAABIABAAIAAAAIABAAIAAAAIgBgBIgBAAIAAgBIAAAAIAAABQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAAgBIABAAQgBAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIABAAIABACIAAAAIAAAAIACACIABABIAAAAIACADIABAAIgBAAIABAAIACADIAEACIAAACIgDgDIACADIABAAIABABIAAABIAFACIADAAIAAABIgBAAIgBAAIgCgBIgEgCIgBgBIAAABIABABIAFADIACABIgCAAIgBABIABABIgEgDIgBABIABAAIADACIgCgCIADADIABAAIgBAAIABABIgBAAIgCgBIACACIAAAAIgGgCIgCAAIACABIgBAAIAEACIgFgCIgBAAIAAAAIgBgCIgBAAIgCgBIAAABIAAAAIAAAAIAAAAIABABIADACIAEABIAAAAIgGgBgAgFgJIABABIAAAAIgCgCIgBAAIACABg");
	this.shape_190.setTransform(268.2833,305.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#996633").s().p("AgEAKIAAgBIAAgBIgBABIAAAAIABABIgBAAIAAAAIAAAAIAAgBIgBAAIAAAAIAAAAIgCABIgBgBIAAgBIABAAIAAgBIAAAAIABgBIABAAIgBAAIABgBIgBAAIABgBIgBgBIACgCIgBgCIABAAIAAABIABgBIAAgDIgBgCIgBgDIABAAQACAEgBADIAAAAIABABIAAgEIAAgBIAAgCIABABIABAAIAAAAIAAABIABABIAAgDIAAAAIAAACIABgCIAAAAIAAAAIABADIABABIgBgDIABADIAAgDIABADIABAAIgBABIAAABIABABIABAAIAAgBIgCgEIADADIACADIABAHQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgBgBIAAABIgBAAIgBAAIgCABIgEAAIgBABgAgGAIIAAgBIABgBIgBAAg");
	this.shape_191.setTransform(267.981,306.225);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#996633").s().p("AAeAmIgEgHIgLgPIADAEIAIAOIAAABIgEgGIAAABIgBAAIABABIAAABIAAgBIABADIAAAAIAAgBIgHgJIAGAJIABABIAAAAIgBAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgBgBIgCgEIgBgCIAEAIIgBAAIgCgCIgGgKIgDgCIgBAAIAFAFIgEgEIAHAKIgJgLIgDgDIgCAAIgDgDIAAAAIAAABIAAAAIABABIAHAGIAGAGIgBAAIgHgGIABABIgBgBIgMgIIgFgEIgBgBIgCgCIAAgBIgEgFIgGgKIgEgKQgDgFACgBIACABIAAgBIAAgBIAAgDIABgEIABAAIAAgBIABAAIABAAIABAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAABIAAgBIAAgDIABAAIAAgBIABAAIAAAAIABAAIAAAAIACACIAAgBQAAAAAAgBQAAAAAAAAQABgBAAABQAAAAAAAAIACACIAAADIABABIAAAEIAAABIABAFIAAACIAAAAIABABIAAgBIABAEIABAEIACACIACAFIABACIABABIABABIAAAAIAAAAIABABIAFAFIABAAIgBAAIgEgCIADADIABAAIAJAIIABAAIAAAAIABABIAKANIAEAHIAAADgAAWAfIgBgBIAAAAgAgCABIACACIgCgDgAgOgbIABAGIABABIAAgBIgCgHIAAgBgAgTgkIAAAAIAAACIABAAIAAACIAAABIAAAAIABABIAAgCIgBgCIABAAIAAgBIgBAAIABABIgBgBIAAAAIgBgCgAATAiIgFgHIAFAHg");
	this.shape_192.setTransform(263.5556,298.15);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#996633").s().p("AAtAxIgFgKIgJgLIgIgIIgBAAIAAAAIABAAIABACIABABIADADIAHAJIAEAFIADAGIgFgIIAAABIgCAAIACACIAAAAIgBAAIgFgHIgHgIIABABIAEAFIgBgBIADADIgCgCIAEAFIAFAIIAAABIgFgHIAEAJIAAAAIAAAAQgHgLgGgGIgEgDIgBgBIgBAAIAJAIIAHAIIgOgOIAMANIAAAAIgMgMIgCgBIgCgDIAAAAIgBgBIgDgDIgBgBIgFgEIgBgBIgBAAIACACIAAAAIACACIATASIgJgHIgCgBIgBgCIgFgDIgwguQgFgFABgBQAAgBAAAAQAAAAAAAAQABAAAAAAQABABAAAAIAAgBIgBgBIgCgCIgBgBIgCgFIABAAIAAgBIgBgCIADAAIAAgBIABAAIAAgBIAAAAIgCgBIAAgBIAAgCIAAAAIAAgBIAAAAIABABIAAABIABABIABAAIACACIAAAAIAAAAIABABIACABIgCgDIgBAAIgBgBIgBAAIABgBIgCAAIAAgBIgBgBIABgBIACABQgDgEADACQAEABACAEIABABIAAgBIADAFIABABIABABIAFAGIACADIgBgBIABABIABAAIAHAIIAAAAIAEADIgBgBIADADQAEAEABAEIAOANIABABIgMgKIAJAJIABABIAMAMIAAAAIABABIABABIAQASIAFAKQABAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAgAAEAAIgEgFIgBgBgAgZgfIAAAAIAAAAIgFgGIAAgBIgCgBgAgfggIABABIgBgBg");
	this.shape_193.setTransform(260.925,295.9417);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#996633").s().p("AAJAKIgBAAIAAgBIgBAAIAAAAIgBgBIAAgBIAAABIgBgBIAAABIgBgBIgBABIgCgCIgCABIAAgBIABAAIgBgBIgDAAIgCABIgDABIAAgBQAEgCADABIAAAAIABgBIgEAAIgBAAIgCAAIABgBIAAgBIAAAAIABAAIABgBIgDAAIAAgBIACAAIgCAAIAAAAIAAAAIADgBIABgBIgDABIADgBIgDAAIADgBIAAgBIABABIABAAIABgBIAAgBIgBAAIgEACIADgDIADgCIAHgBQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABIgBABIABAAIAAABIAAABIABACIAAAEIABABIAAACIgBAAIgBAAIABABIAAAAIABgBIAAABIAAAAIAAAAIgBAAIAAABIAAAAIAAAAIABACIgBABIAAAAgAAGAHIACAAIAAAAIgBAAIgBgBgAAHAEIAAAAIAAAAg");
	this.shape_194.setTransform(290.475,233.569);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgYA3IAAAIIgnAAIAAgnIAlAAQAOAPAPAAQARAAAAgHQAAgEgDgCQgEgBgQgFIgdgIQgOgDgHgHQgJgEgCgHQgEgFAAgKQAAgUAPgKQAOgJAXAAQAVAAAPAJIAAgHIAnAAIAAAkIgkAAQgNgMgRAAQgPAAAAAHQAAAEAFABIAWAGQAYAFAOAFQANAEAGAHQAHAJgBAMQAAAUgPALQgQAKgXAAQgWAAgQgJg");
	this.shape_195.setTransform(269.4,534.75);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("Ag+AuQgYgSAAgcQAAgbAYgTQAWgSAnAAQAmAAAZASQAZASgBAcQABAcgYASQgYATglAAQgpAAgXgTgAgOgVQgHAIAAANQAAAdAVAAQAVAAABgdQAAgNgGgIQgGgHgJAAQgKAAgFAHg");
	this.shape_196.setTransform(251.65,534.75);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("Ag+AuQgXgSgBgcQAAgbAYgTQAXgSAmAAQAnAAAYASQAZASAAAcQAAAcgYASQgXATgnAAQgoAAgXgTgAgPgVQgFAIAAANQgBAdAVAAQAWAAgBgdQAAgNgEgIQgHgHgKAAQgIAAgHAHg");
	this.shape_197.setTransform(232.15,534.75);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgNBUQgKgFgGgJIgEgIIgCgJIgBggIAAgVIgQAAIAAgmIAQAAIAAgTIA/geIAAAxIAaAAIAAAmIgaAAIAAAYQAAAMACADQACAEAHAAQAGAAAJgEIAAAmQgHAFgLADQgNADgLAAQgOAAgKgEg");
	this.shape_198.setTransform(216.175,532.45);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AhJA1QgOgMAAgPQAAgRARgLQAQgKAagBQAYAAANAHIAAgEQAAgMgCgEQgCgFgFgDQgGgEgIAAQgQAAgIANIgygGQAIgSATgIQASgGAjgBIAXABIASADQARADAIAHQAIAGADAIQAEAIAAAQIAAAjIAQAAIAAAnIhQAAIAAgIQgQAKgbABQgaAAgNgMgAgVAIQgFAEAAAIQAAAHAFAFQAFAFAHAAQALAAAHgHIAAgWQgJgEgIgBQgIABgFAEg");
	this.shape_199.setTransform(200.925,534.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgxBYIAAgqIAQAAIAAhbIgUAAIAAAgIgiAAIAAhKICvAAIAABKIghAAIAAggIgVAAIAABbIAQAAIAAAqg");
	this.shape_200.setTransform(182.55,532.075);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgYA4IAAAHIgnAAIAAgnIAkAAQAOAPAQAAQASAAgBgHQAAgEgDgCQgEgCgPgDIgegJQgNgEgJgFQgIgGgCgGQgDgFgBgJQAAgVAPgKQAOgJAWAAQAWAAAPAIIAAgFIAoAAIAAAjIgkAAQgOgNgSAAQgOABAAAHQAAAEAFABIAXAFQAXAFAOAFQANAFAGAIQAHAHAAANQAAAUgQALQgQAKgXAAQgWAAgQgIg");
	this.shape_201.setTransform(648.05,118.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("Ag5AvQgVgRAAgeQAAgaAVgUQAVgSAkAAQAiAAAWARQAWASABAjIhgAAQABAeAVAAQANAAAGgNIA0AGQgDAIgGAHQgHAGgJAFQgSAKgaAAQgqAAgWgSgAgLgdQgFAHAAAKIAAADIAjAAIAAgEQAAgKgFgGQgFgHgIAAQgIAAgEAHg");
	this.shape_202.setTransform(630.975,118.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("Ag+AvQgXgTAAgcQgBgbAXgTQAYgSAmAAQAmAAAZASQAYASABAcQgBAbgXAUQgYASgmAAQgoAAgXgSgAgPgVQgFAHAAAOQAAAdAUAAQAWAAAAgdQgBgOgFgHQgFgHgLgBQgJABgGAHg");
	this.shape_203.setTransform(612.15,118.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AARBYIAAgyQAAgXgCgGQgDgGgJAAQgIAAgKAHIAAAoIAQAAIAAAmIhgAAIAAgmIAQAAIAAhjIgQAAIAAgmIBQAAIAABEQAZgRAYAAQAWAAANAMQAMANAAAfIAAAeIAPAAIAAAmg");
	this.shape_204.setTransform(591.975,116.025);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgdBNIAAALIgnAAIAAg4IAnAAQAHAXAUAAQANAAAAgMQAAgGgFgEQgFgEgQgIQgWgJgKgHQgJgGgHgLQgHgMAAgNQAAgZAQgOQAQgOAXAAQAWAAARAOIAAgLIAoAAIAAAyIgoAAQgHgVgSAAQgMAAAAALQAAAFADADIAWAMQAaANAJAGQAEADAFAFQAFAFADAFQAHANAAAOQAAAXgRAPQgQAQgZAAQgXAAgTgOg");
	this.shape_205.setTransform(573.675,116.025);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgYA4IAAAHIgnAAIAAgnIAkAAQAOAPAQAAQASAAgBgHQAAgDgDgDQgEgCgPgDIgegJQgNgEgIgFQgJgGgCgGQgEgFAAgJQAAgVAPgKQAOgJAWAAQAWAAAPAIIAAgFIAoAAIAAAjIgkAAQgOgNgSAAQgOAAAAAIQAAAEAEABIAYAFQAXAGAOAEQANAFAGAIQAHAHAAANQAAAVgQAKQgQAKgXAAQgWAAgQgIg");
	this.shape_206.setTransform(764.15,343.35);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("ABDA/IAAg1QAAgUgDgFQgEgFgIAAQgLAAgKAIIAAAkIARAAIAAAnIhQAAIAAg1QAAgTgCgGQgEgFgIAAQgKAAgLAIIAAAkIASAAIAAAnIhhAAIAAgnIAPAAIAAgtIgPAAIAAgmIBPAAIAAAQQAKgHAPgGQAOgGAOAAQAeAAALAYQAcgYAeAAQAQAAAKAHQALAHAEAMQAEAMAAAVIAAAbIARAAIAAAng");
	this.shape_207.setTransform(740.8,343.225);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AhBA/IAAgnIAQAAIAAgtIgQAAIAAgmIBMAAIAAAeQADgLAJgIQAKgJAIgCQAIgDARAAIAAA3IgFgBQgUAAgJAEQgKAEgDAGQgFAHAAALIATAAIAAAng");
	this.shape_208.setTransform(717.3,343.225);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AAEBYIAAgmIAPAAIgGgXIgtAAIgHAXIAOAAIAAAmIhGAAIAAgqIAOAAIAhhbIgOAAIAAgqIB9AAIAAAqIgOAAIAiBbIANAAIAAAqgAgZAFIAfAAIgOgwg");
	this.shape_209.setTransform(699.975,340.675);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgYA4IAAAHIgoAAIAAgnIAlAAQAOAPARAAQARAAAAgHQgBgEgEgBQgDgDgPgDIgdgJQgOgEgJgFQgHgGgEgFQgCgGAAgJQAAgVAOgJQAOgKAWAAQAWAAAQAIIAAgFIAnAAIAAAjIgkAAQgOgNgSAAQgOAAAAAIQAAAEAEABIAYAFQAXAGAOAEQAMAFAHAIQAGAHABAMQgBAWgQAKQgPAKgXAAQgWAAgQgIg");
	this.shape_210.setTransform(101.5,339.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("Ag5AvQgVgRAAgdQAAgbAVgUQAVgSAkAAQAiAAAWARQAWASABAjIhgAAQABAeAVAAQANAAAGgOIA0AHQgDAJgGAGQgHAGgJAFQgSAKgaAAQgqAAgWgSgAgLgdQgFAHAAAKIAAAEIAjAAIAAgFQAAgKgFgHQgFgGgIAAQgIAAgEAHg");
	this.shape_211.setTransform(84.425,339.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgzBaIAAgmIAVAAIAGgMIgvhaIgKAAIAAgnIBTAAIAAAnIgMAAIAUAwIAUgwIgMAAIAAgnIBAAAIAAAnIgNAAIhDCMg");
	this.shape_212.setTransform(67.225,342.225);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AhTBYIAAgqIANAAIAAhbIgOAAIAAgqICoAAIAAA4IguAAIAAgOIgnAAIAAAbIAhAAIAAAjIghAAIAAAdIAnAAIAAgOIAuAAIAAA4g");
	this.shape_213.setTransform(48.9,336.725);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgYA3IAAAIIgnAAIAAgnIAlAAQAOAPAPAAQASAAgBgHQAAgDgDgCQgEgDgPgEIgegIQgOgEgHgGQgJgEgCgGQgEgGAAgKQAAgUAPgJQAOgKAWAAQAWAAAPAJIAAgGIAoAAIAAAjIgkAAQgOgMgSAAQgOgBAAAIQAAAEAFABIAXAGQAXAEAOAGQANAEAGAHQAHAJAAALQAAAWgQAKQgQAKgXAAQgWAAgQgJg");
	this.shape_214.setTransform(863.5,30);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgNBUQgKgGgGgIIgEgIIgCgJIgBggIAAgVIgQAAIAAglIAQAAIAAgTIA/gfIAAAyIAaAAIAAAlIgaAAIAAAYQAAALACAFQACADAHAAQAGAAAJgDIAAAmQgHADgLAEQgNADgLAAQgOAAgKgEg");
	this.shape_215.setTransform(849.275,27.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AhJA1QgOgLAAgQQAAgSARgKQAQgLAaABQAYAAANAFIAAgDQAAgMgCgEQgCgFgFgDQgGgDgIAAQgQgBgIAMIgygFQAIgSATgHQASgIAjAAIAXABIASACQARAEAIAHQAIAGADAIQAEAIAAARIAAAjIAQAAIAAAmIhQAAIAAgJQgQALgbAAQgaABgNgMgAgVAIQgFAEAAAIQAAAIAFAEQAFAFAHAAQALAAAHgGIAAgXQgJgFgIABQgIgBgFAFg");
	this.shape_216.setTransform(834.025,29.95);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AAJBYIAAgqIALAAIAAgdIgnAAIAAAdIALAAIAAAqIhdAAIAAgqIANAAIAAhbIgNAAIAAgqIBdAAIAAAqIgLAAIAAAbIAnAAIAAgbIgLAAIAAgqIBdAAIAAAqIgNAAIAABbIANAAIAAAqg");
	this.shape_217.setTransform(812.725,27.325);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AARBYIAAgyQAAgXgCgGQgDgGgJAAQgIAAgKAHIAAAoIAQAAIAAAmIhgAAIAAgmIAQAAIAAhjIgQAAIAAgmIBQAAIAABEQAZgRAYAAQAWAAANAMQAMANAAAfIAAAeIAPAAIAAAmg");
	this.shape_218.setTransform(124.275,61.875);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgNBTQgKgEgGgJIgEgIIgCgJIgBggIAAgVIgQAAIAAglIAQAAIAAgTIA/gfIAAAyIAaAAIAAAlIgaAAIAAAYQAAALACAFQACADAHAAQAGAAAJgDIAAAmQgHAEgLADQgNADgLAAQgOAAgKgFg");
	this.shape_219.setTransform(107.875,62.25);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AhCAyQgOgMAAghIAAgcIgPAAIAAgnIBPAAIAAA7QAAAOADAFQACAFAJAAQAKAAAJgGIAAgmIgRAAIAAgnIBRAAIAABUIAPAAIAAAmIhPAAIAAgPQgYASgbAAQgTAAgNgNg");
	this.shape_220.setTransform(91.775,64.675);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("Ag+AvQgXgTgBgcQAAgbAYgSQAWgTAnAAQAmAAAZASQAYASAAAcQAAAbgXAUQgXASgmAAQgpAAgXgSgAgPgVQgFAHgBAOQAAAdAVAAQAVAAAAgdQAAgOgEgHQgGgIgKAAQgJAAgHAIg");
	this.shape_221.setTransform(71.85,64.55);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAoBYIAAgqIAPAAIAAhiIg2CMIgZAAIg1iKIAABgIAOAAIAAAqIhEAAIAAgqIANAAIAAhbIgOAAIAAgqIBrAAIAZBEIAahEIBqAAIAAAqIgOAAIAABbIAPAAIAAAqg");
	this.shape_222.setTransform(47.775,61.875);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("rgba(153,102,51,0.247)").ss(6,1,1).p("AjNvBIAAgBIADAAQgCABgBAAIAAAAAjNvBIgBAAQgLABAFAIQAHALAAgUAC5i2Qg1g9g3gwQgXgThchIIgKAAQANAWAdARQAPAKAUAKIAAAUQiBhYgjgaQg0gmgLgaQgKgWAFg7QAIhlAAg/QAAhfgDgWQgJhEglgzIAmAAIABAAAiJs/IAAgPIAAgHIAAgnQADAAACACQADABACACQAFAEAFAAQALANASAbIAAgKQgLgXgmgdIAAAAQgJgHgKgGQgGgFgGgEQgFgEgFgDQgagUgBgHAiUtQQgCgFgCgEQgBgDgBgCQgBgEgCgDQgIgVAAgCQAAANAIAQQADAFACAFQACACACADgAiJszQgEgLgFgNQAAgBgBgBQAAgBgBgCQABABAAABQACADACADQADAFADAEIAAAMIAAAtIAHAAIADAAIAAgBQAAgHgBgIQgBAHgBAJQgBAKgBALQAAAHgBAFQAAAHgBAGQgBAHAAAGAiJqbQgDgHgDgNQgBgEgBgFQgCgKgCgOQgCgMgGABQgDAAgFAFIAABzIAAAoAiIq/IgBgDIACgJQAAAGgBAGQAAAMgBAIIAAgXAiJqrIAAAGQAAAAAAAAIAAAKIAJAHIABABQAEAEADAEQgBgJgBgLQAAgDAAgDQgCgigBgZQAAAAAAgBQgBgKAAgIQAAgKgBgJAiJpNIAAg6IAAgUAilo4IAAAMIAAAvIASAKQAAgEgFgHQgFgHAAgMQAAAEAFAHQAFAIAAALIAMAFQAMAFAGAAIAAgoIAAgWIAAgIIAAgIQAAAEABAHQAAgBgBgCAiOKxQADgBACAAAi5LEIAPgNQASgOAWgMQACgBABAAIAHgMQACgCABgDQABgBABgBQAEgHAEgDAj1McQgBAegIAJIAAAKQAFgfAdgjQACgDADgCIAAgEQAAgMAQgZQAVgiAkgKQgOAZgOAeQgaA+gdAdIAAAKQAMgGAKgHQAJgKALgIQABAAAAgBQAVgXAOgOIAAgBQABACABABQAAACAAABQABAAAAAAQAAAAgBAAQgBACgBADQgGAKgKAOQgBABgBACQgBABgBABQgBACgBACQgCABgBADQgBABgCACQAAABgBABQgCADgCADQgDADgCACIAAABIAAAEIAAACQADgHAEgIQACgCABgDQADgFAEgGQAAAAABgBQAAgBAAAAQABgBABgBQAEgHAFgIQAFgFAEgHIAAgEIAAgEIAAgBIAAAAQADgDADgCQACgCACgCQgCAGgFAJQAMgQAOgQQgKAbgTAnIAAgBQgDAKgFALQgRAigNAFIAAAKQAUgUAAgKIAIAAQACAggUASQgIAGgFAHQgFAIgCAJQAAAEAAAFQgFAAgFABQgKACAAAGIAAgHIAAgDIAAgJIAAgKQgKAAgKAKIgOAHIgFADQABgCABAAQANgNAKgYQACgFACgEQABgBAAgBIABAAQAIANAAAGQAAgLAKgaQAEgMADgHQADgJAAgCIAKgUIAAAKIAAAFQgIAJgFAHQgLANgGAFAiRMNIAAAAQAEAOgGATIAAgcIAAgCQABgBABgCgAjXMGQAcgjACgDQgKAbgUAggAj0MRIAAAEQAAADgBAEQABgBAAAAIAAgGAkfNWQAEgPAIgHQAFgEALgHQAKgJAEgQAk2N0QgBAFAAAFQgBAIgBAQIgBAGQAAABAAABIAAAAQAAABgBABIAAABIAAADQgCAPgGAQAk5OHIAAgJIADgKAkfNWIgQAAQgFAPgCAPAkSNgIAAgKIgNAAAjgN9QAFgJAEAAQgEAAgDAAQgBADgCADQAAAAAAABQABABAAABgAi5NOIAAASIgKAKQADgNAHgPgAhxLPQgmA0gYAYQAMgQARguQAMgVAWgSQABgBABAAQgEAHgDAHQACgHADgGQAFgNAJgMQAIgOALgMQAIgJALgMQgMAOgGAMQAJgNAOgQQAAgBAAAAQAIgJAGgHQACgCABgBQABgCACgBQgDACgCADQgGAGgGAGQAAAAgBABQAGgGAGgHQACgBABgBAhrskIAAgOIAAgjIgMAAIgIAAQACAFABAFQADAIADAHQAFAOAGANgAhTr5QgFgQAAgHQgFAAgFgKQgEgKgFAAAhtsUQABACABACIAAgRQAEAJAFAIIAAABQAHALAIALQADAEACADIAAAIQgDgIgCgHAh1qaIAKATIAAhZQAAAAAAgBIAAgGIAAglIAAgEAh1qaIAFhGIACgqIABgKAh/sHIAAgmQAAAFgBASQgDgMgGgRAh6qlIgIgQIgGgKAh1p9IAAgGIAAgXIgFgLAhdpaQgCgEgDgCIAAgKQACAIADAIgAh1p9IAAATIAAAlQAAgJgBgbQgBgOgBgUQADAGAAAIgAhYnWIAKAAIAAg7QgNgOgEgLQgDgHAAgRIAAgUQAEAPAQAmQANAfAKAPQgHgZgGgTQgCgFgCgFQAFAJAFAIQAEAHAFAGQgCgKgDgNQgKgxAAggQgKAAAAgJIAAANQAAAZAPA6QABACAAACQAIAeAEAOQACALAAABIAAgCQAAgDAAgFQgBgMgEgVQAFAJAHAIQAWAfAdAjIAKAAQAAgFgKgWQgKgVAAgLQACAOAQAiQAPAhALANQADACACABIAKAKIAKAKQgFAAgFgBQgBAAAAAAQgIgCgJgCQgYgIgcgRQgBAAAAAAQgKgGgJgFQgDgCgDgCQgIgGgIgGQgIgGgHgGQgLgJgJgKIgDgCIgCgBIgOgHQAEAEAEAGIAGAAIADAAgAByl1QgCgIgDgNQgEgSgGAAIAAgKQANANAtAoQACABABABQAGAGAGAEQgHgHgIgIQAAACAAABQABAJAFASQAAABABABQADAKADAGQAAABAAAAQADAHADADQgFAAgCgDQgCgDgBgDQAAgBAAAAIAAAAQgCAAgEgCQgBgBgCgBQAAAAgBgBQgHgFgMAAQAAABABACQAAADABAEQABAGAEAJQAGARAHAHIAAgnIAAgDIAAgBIAAgQQACABABAAQACABACABQASAHAOAGQgLgPgNgPQAQAPAJAJQAAAEABADQABAAABABQADABACABQANAGAIAEQgSAOgHgYQAAgBgBgBQAAgCgBgCQAAgBAAgBQAFAFACADQAAgRgBgFQgCgGgFgBQgBAAgBAAQAAALABAIQABABABABQgBgMAAgJQgCgNAAgCQAAgOAIADQASAGAEAAQAAgKgKAAIAAgeQAGAGADAEQABABAAAAQAKAMAAAHIAJAAIAAgWIAAgDIAAghQAkAkAEApIAAA6IAAANIAAABIAAABIAAADIAAADIAAAoIAAAOQAAgGAAgIQAAgOABgSQAAgGgBgFQAAgBAAgCQAAAAABABQAFAJAHANIABAAQAAACABACQANAaAKAdQAAABABACIAAgSIAAgfAB0lEQgBgBgBgCQgFgFgFgKQgBgBAAgBQgBgBgDgHQgDgFgDgGQgFgLgJgSIgKgKIgKgKQAdAZAaAOQABABACAAIAAAKQgBgDgCgIAgCmQQAOAFAdAWQABABAAAAQAHAFAHAFQAGAGAGAFQALAJAKAJIAMAFQAFACAFABQACAAADABQAFABAFAAIABAAQgDAHgHgHQAAAAgBgBAEJlgIAAAFAEKlDQgBAAAAAAIAAgMIAAgMQAAAGAAAHQAAAFABAGQABAVADAZQAEAnABASIAAgOIAAhFQAEAFAGAIIAAAAIAAAAQAAgBAAAAAh1pAQAAAIACAQQgBgCAAgCQABAHABAJQAAAHABAIIABACQAAACAAACQADAWABANQABADAAACQAAgCgBgDQgBgYgCgUQgCgNgCgLQAAAGABAHQABAHAAAHAh1o3IAAgJAhwoLQAAACAAADQACATACAOQAAALABAHQAAAGAAAFQAAgFAAgFQAAgHAAgGQAAAGAAADIAIAAQAFAFAFAHQAHAHAHAHQABABABABQACACADADQAJAIAJAJQABABACABQAGAGAGAEQAFAEAEAEQAKAHAIAFQAHADAEACQgEgCABgHQABgFgDgDQgCgBgFgBAhrnIIAAADQABABAAABAg3nzQACAEADADQABABABABQAAABAAAAIAAAHAgwngIAAAKQgEgQgDgNAD+kRQABAAAAgBIAAgJQAAADgBAHQAAAHgBALQgBATgCAdQgCAagCASQAAAIAAAHQgBgEAAgDQgCgRAAgUQAAgCAAgBQAAgnAIgcQABgFACgGgADElHQABAAABABQAAACABABQgCgCgBgCgADHlDQAAABAAAAQAEATANATIAKAUQgDgVgUgfQgCgEgCgDgAC6j0IAAAVIAAAaQAAgZgQghQAIAPAIARQAFAKAGAKQAJAUAAAIIAAASQgKgMgKgLQACASAIAZQADAJACAIQgGgHgFgFQgFgFgFgLQACgSADgQQABgCAAgBQAAACAAADQAAgBgBgBAC6j0QAGgCAEABQAGADACALQACAHABAGQAFAYAEAJIAAA7IAAAdAC6j0IACgVACdkcIAAAKAD1jBIgCgCAD1ibIAAgmQAAAKABAUQACANABASQgCgIgBgIQgBAOAAAGgAETivIgKAAIAAASIAAAUIAAAdAC0iUQgCgEgCgFIAAA2IAAAQADOhxQgCgDgDgEQAFASAAANIAAACADOhZIAAgSIACAFQACAFAGAAQgFgIgFgIIAAAGAD6h6QABAFAAAEQgDgCgDgCIAAgKgAD5iEQAAADABADQAAACAAACIADADQgCgGgCgHgAD1h/IAAgBAEJhrQgBAAAAgBQgDAAgEgCQgDgBgDgCQAAADAAADQAEAmAAALIAFADQAAAAABABQAEAFAAAKQAAgGAFgNQAFgPAAgFIAHAAIACAAIAJAAIACAAIAAAAQAAgmADgfQAAgFABgGQACgVADgQAEJhrIAAAKQgBgBgBgBQgDgFgDgGQgCgEgCgFIAJAIQABABABAAQAAABABABAEJhrIAAgBAD1h1IAGAKADihrIAAgKQgJAAgBgJADOhxIAAgsACwhnQABgZADgUAEdj0IAAAAAEdj0IAKAAIAAALIAAASIAAAMIAAAEQAAACAAACIAAAAIAAAwIAAASQAAgIABgKQABgFACgGAFEjfQAAAFgBAKQgBATgDAkQgBAOgBAMQgDAnAAAUIgTAAIAAAAQAAgCAAgCQAAgDAAgDAEdjmIAAAjIAAACIAAAcQgDAAgCAAQgFADAAAFIAAgRIAAgBIAAgUAEwjBQgBAOgEASQAAABAAACAFEjNIAAAPIgHA/AEThhIAAg8AETjIIAAgUAEdkkQgEgVgPgKAhIopQgLgjgKgOAh1pFIAAAFAEnggQgDACgDADQgCADgCACQgBABgBABQgIANAAARIgKAUIAAgoIAAgTQAAADgHAaQgCADgBAFQgDAIgBAIQgFAXgBARQACgCACgCQAGgFAAgFIAAANIAABBIAACTQAAgGgFgXQgFgYAAgGQAAA6gDApQgCAcgEAVIAAhFQgJAZgOAWQgCADgCADQgBACgCACQgIAPgCAQIAAgXIAAgdIAAgHIAAgSIAAgBIAAgKIAFAAIAFAAIAAAAIAKAAIAAgKIAEgJIAGgLQgGAegEAZQAAADgBACQgBAJgBAIQgGApgBAeIAAAKAEnggQAAgJAEgGQAFgHAAgEIAAATQgFADgEAEgAEnhEIAAAUIAAAQAEJgmIAAAAADYgwIAAANQAAAkgBAfQAFgBADgBIAAAAQACAAABAAQAAAOAFAjQABAFABAFQABAMABAJQgBgHgCgOQgCgPgEgXQgBgLgCgKQAAAAAAgBQgGgsgBgUADEBFIAAgdIAMgFQAEgCADgBQAAATgBARQgCAzgFAjQAAACgBACAC3AfQACgHABgKQAGgdAEgOQAAAZAAACQgDARgKAQQgDAFgEAEQAAATgKAAQAAgKAdhMQAbhHAEgJIAAAdAD/AyIAAAAAD0BAQAAAAABAAQAAACAAACQAAgCgBgCgADsBFQAEgDADgCQABAAAAAAQAAgBgBgBQgBgCgBgBQgFgFAAgEgADsB2IAAgeIAAgTADEBFIAAAUQAHgQADgEIAAAdIAAAUQgDADgEAFQgBACgCABIAAgVIgGAAIgLAAIgDAAIAAg6QAEgGADgNACmC8QABgaAIgkQACgKACgIQAIgeAJgJACqCuQAFgTAIgbQAEgMADgIQADgLADgIIAAATADECTQAEgEAEgDQgBAEgCAFQgDAKgBAJQgBAFAAAFQgHAAgFADQgEADgCAEQgHANgFAFQAAgJADgNQAMgSAKgNQADgDACgDIAAgLIAAgHQgGAJgHAMQgIANgFALQgCAHgBAHQABgCABgCQAAgEABgGADOCfQAAgBAAAAIAKAAQgWBEgIAYIgEANQgNAggRASQgEAEgEADQgEARgDALQgDAFgDAFQgBACgBACQACgLAFgQQADgGACgHQACgFADgGQAAgBAAAAQgBADAAADQAHgSAFgNIAAgCIAAgLIAAgHQABACAAADQAAAGAAAFQAEgJAFgLQALgZAIgTQABgBABgCQAGgIAGgZQAGgPAAgHQAAADgBACQgDADgFABQAAAAgBAAIAAgVADMCMQABgBABgBIAAgKQAAADgCAJgADsB2QAAgBgBgHQABAJAAAGIAAADIAAAJADsB9IAAgHACnC8QgBABAAABQAAgBAAgBAB1FOIAAg7QAJgMAcg2QAGgLAGgKQABAAAAAAACdD2QAAgBAAAAIAAgIQAAAEAAAFQgCAUgJArQAAAAAAAAIAAABQAFgMAGgPQABgBAAgBQgBAPgFARQgBADgCAEQgFAQgHAMQgGAVgEAEQAAgBAAgBQAAgEACgFQgBABgBABIAAgHQADgIADgHQACgEABgDQAEgHADgHQABgCABgDQgBACAAACQgBABAAAAQgBABgBAAQgHAFgHADIAAgtQAMgGAHgOQAIgQADgDgAB/FKQgFACgFACABtF1QgCANgBAKQABgCACgBgABNG6QAAgQAGgZQAJglARgKIAAATABtGJIAAALABJJHQAIgiAbg9QAHgPAFgMQANgeAHgRQAHgTAAgCIAJAAIABAAQAAAdgIAkQgCAFgBAGQADgGAFgFQABgCABgCQABgBAAAAIAAgJQAAAEgBAGQAAACgBACABtFiIAIgUAB/FlIAAgbADOGTIAAgKQAAADgCAJQgCALgGAUQAAAAAAAAQAAABgBABQAAABAAAAQgEAQgCAPQgBACAAADQgBAIAAAHQAAABAAAAQAAAAAAABQAAABgBABQAAgBAAgBAA4GdQACgFACgFQANglAGgMADiGvIAAgHIAAgBIAAgJQAAAEgBAGQAAABAAAAQgBAFAAAFQABgBABgBACSH8QADgHADgIQAYg+AAgIIAKgKQAAABgYBAQgIAUgGARQAAACgBACQAAABgBABQAAABAAACQgBAAAAAAQgBABgBABQgBACAAACQgBABAAAAQAAABAAACQgBAAAAACQgBADgBAEQgDAKgEAPQgBADgBADQgBADgBADQAAgCABgDIgCABIgJAEIgIATQAAgCAAgCQAAAAAAgBQAAgDAAgDQAAAAAAgBQAAgFABgGQABgFAAgEQABgEABgEQAAgDABgEQgGALgGALQgBABAAABIAAAAQADgDAEgCQAAgBABAAQgBAAAAABQgDABgEAEQgBABAAAAQAAAAABgBQgBACgBACIAAAJIAAABIAAAJIAAAIIAAACIgBAAIgLAFIgBABIgDABIAAABIgCAAIgBABIgBABQAAgBABABQgBABAAACQAAAAAAABQAAACAAADIAAAAIAAABQAAADgBAEQgCABgCABQACgCAAgCQgBAAAAAAQAAgBAAAAQgBgBgBgCQgBgBgBAAQgBgCgBgBIAAgHQABAAAEAAQACAAADAAQABgFABgFIgEAAQgEAEgEAFQgCACgBACQgEADgDAEQACgKAEgJQABgCAAgCQACgDABgCQAAgBAAAAQABgBABgBQACgFADgFQgBAEgBAEQgBACgBADQAAABgBABQAIgHAFgFQADgDACgCQAAAAAAAAQgDACgDADQgFAFgGAFQgBABgCACIAAAAQgBABgCABQgIAHgJAIQgCACgCACQgJAHgHAHQgEAAgFAAQgOAAADAKQABAEABADQgNANgIAIQgIAIgBADIgJAUQAEgQAGgOQAHgQALgOQANgTAQgKIAAgUQgHAEgHAGQgFAEgFAFQgFAEgEAEQAFgGAFgGQAIgIAIgIQASgSATgUADEHPQAAgBAAgBQgCAEgCAEQACgDACgDQAEgFAGgHQAIgHAKgJQgFAagNAxQgFAAgFgCQgHgEgCgGQAAgCgBgCQAAADAAACIAAgHAC6HrIAAgKQAAgDACgDQgKAQgBABQgJANgPANQgCABgCACQgBABgBAAQAAABgBABQgBADgBADQAAABAAABQgBABAAABQgDAKgBAJQgBADAAAEQgBAFAAAEIAAABIAAAAIgEADIgEABIgBABQAAgBAAgBQAAgIADgJQAAgDABgEQABgBAAgCQACgFABgFQABgDACgEQgBABgBAAQAAgHACgHQACgOAGgBQgBADAAAEQgBAIgCAKQgCACgCABQADgKAEgLAC6HrIAAABAC6HrQAAAAABgBQAIgSABgJAC8HbQABgDADgDABbHSQAFgIAFgGQACgCACgDQACgCABgBQAIgKABgBIAAgKIAAAAQgCACgCADQgCADgDAEQgBACgCADQgBACgCADQgDAGgDAGIgBABQgCAEgCAEQgCADgCAEQgDAFgDAHQAEgGAEgFQAEgGAFgFQAFgHAEgGQABAAAAgBQAbgiACgCIAAgKQgGADgOARQgCACgCADQgCADgDADQgBABgBACQgCADgDAEQgGAIgGAJQgIAOgKAQQgFAGgEAHQgBABAAAAQABgBABgBQAIgKAGgJQABgBABgCQAGgIAGgHgABtGdIAAAAABsGeQAAgBABAAIAAgJQAAAEgBAGQgEATgPAcQgNASgPAXQABgFABgGQgEAIgEAJQgBADgCADQAAAAAAAAQgBACAAABQgCACgBACQgCAEgCADQADgDACgEQgBAEgCADQAAACAAABQAFgHAGgIQgEAHgEAHIAFAAQgHALgIAJIAAgJIAAgCIAAgCQgGAJgEAEIAAgBIAAgBIAAgDIAAgCIAAgDIAAgCIAAgOQABgDACgCQAZgjALgMQAAgBABAAIAKgSQgCADgBAEQAGgKAFgIQgEACgEgBQADgIADgGQACgEACgEQAIgQAJgJQgCAQgCAGQAAACgBACQAEgFADgDgABNG6QACgDACgDQACgEACgDQACgDACgDIAAgCIAAgSQAAAJgIAYQgBAEgCAFQAAAAAAABQgEALgGAPQgBADgBADQgBACgBADQgHARgFAOABPHFQgBgEAAgDQgBgCAAgCABPG7IAAAKABlGmQgFARgJADQAIgMAGgIgABOG9QAAgBABgBABfHKIgKAPQgDAEgDAEABNHkQABgCABgBIAGgIABRHlQgBACgCADQgJATgKAPQgCADgDADIACAAIADAAQAAgDAAgDQAAgGABgGQAEgGAFgGQACgCABgBQAEgGAFgGgACTHuQAAADAAAEIAAAAIAAgHIAAgDACbHNQgGAagXApQgBADgCADQAAABgBABQgBABAAABQgDAFgCAFQAAgBABgBQABgBABgBQACgBABgCQAHgGAIgFQgCAEgBAEQgGANgEAKQgGANgEAKQgDAFgCAFQgBACgBACQgBACgBACQgBABgBACQAAAAAAABQgHAMgHAIQgGAHgFADQgCALgIAGQgHAEgKABQgBAAgBAAIAAgNIAAgTIAAgFIAAgMIAKgUIAOgGIAGgDQgBAEgCAEQAGgJAHgJIAKgUIAAATIAAAJQAAgBABAAQgBABAAABIAAABQgCAFgCAEQgGAMAAAGQAAABAAABIgBAAIgCAAIgBAAIgEAAQABgEABgEQACgGADgGQABgBAAgCQAEgEAEgDIACgBIAAABQgDAFgEAFQgCACgBADQgDADgDAEQgDAEgDAEIgHAAIgBAAIAAgDQAAgBAAgBQAAgCAAgCQAAgBAAgBQACgHACgIACSHVQgFAQgGATQgCAEgBADQgDAHgCAGQgCAEgCAEQgBADgBADQgCAEgCAEQgCADgBADQAAgBAAgBQAAgBAAAAQADgMAEgNQAGgSAHgQQAFgMAHgJgABDHcQAAgCABgCABDHcQAFgIAEgIQgFAOgIARQACgHACgIgAByIlQABgBABAAQgBABgBABQgHANgFALQgBABgBACABZJKQACgEACgDQADgFADgFQAHgLAIgJABhJDQgDADgFAEABFJeQABgCABgBQAAADgBADQgBABAAABQgCAGgBAFQgKAcgCAAQgCgDgDgCQgGgDgIgCQAEgEAEgFQADgCADgDQAIgJAIgHQACgCACgCgABXJmQAAAAgBAAIAAAAQgBAAgBAAIAAAAQgBAAAAAAQgCABgBADQAAAAAAABQAAgBABABIAAAAQABgBABABQAAgBABAAQALgBgIgDgAAbHVQAJgRAIgQQAGgLAGgMQAKgTANgVAAbHVQAEgEADgCQAGgFAFgEQgEALgCAGQgGAOgNAQAAtHGQACgBACAAIAAgKQgCAGgCAFgAAiHPQAOgcAIgWAA2HzQAFgJAGgLQAAAAABgBQAAgBABgBAAvH/QABAAABgBIAKgTQgDAEgCAEQgFAIgEAHQABgCABgBQADgFAEgHAA9H5QAAAAABgBQAAgBABAAAA9H5QAAgBAAgCQgBACgCACQgCADgCADQAEgDADgEgAAUHrQACgEACgEQAFgLAFgJAAdIMIAAgOQAIgDAXgmQAIgMAJgPAAnIXIAAgBIAAgEQAAgBAAgBQAFgGAEgEQACgCACgCQABgBABgBQgCADgBACQgBACgBACQAEgFAEgFQACgDACgCQgBAAABgBAA9H6IAAAAQAAAAAAgBQAAABAAAAQgIAMgHAKQgBADgCADQABgCACgBQgHASAAABQgFAGgFAEIAAgBIAAgHIAAgCQgCACgCACQgDAEgDADQgBACgBABQABgBAAgBQAFgKAGgJQABgCABgBQgBACgBADQgCADgBAEIAAAAQgBABAAABQgBADAAACQgBACgBADIAGgDQgBAAAAAAQgDAEgDADAA8IAQAAAAAAgBQAAgCABgDAA8H/QgCADgBACQABgCACgCAA0ICQgCAEgCADQgFAHgEAGQgFAIgFAGQgCACgBACQgCADgCADIgEAEAAnIQQACgEAGgNAAnIXQACgDADgEQgDAFgCAEgAAtICQgEAFgCAFQgEAHgEAJQAEgHAEgFAgmI6QAXgqAPgWQAOgXANgOAhzKJQAFgfAEgPQAKghASAAQANAAgIAJQgHAKAMAAQAPAAABgRQACgaACgGIAUgKQgCAFgIATQgEAKgGAGIAAAIIAAALQAGgKAEgJQgFAEgFAEQgSARgMAYAh1KSQABgFABgEAgpJZQABAAAAAAQANgUAIgLIAKAAIADAAQgQAPgVAXQgDADgCACQAEgGADgFQAAAAAAgBgAg1JmQgBACgBACAg0JlQgBABgBACQgDADgDADQAEgEADgEAhQKJQABgBABAAQgBAAAAAAQgGALgCAJQgBADAAACQAAACAAABQACgCABgCQABgBABgBIAAAAQACgEADgEQAGgKAHgNQAJgOAIgMQgIAIgHAIQgIAKgHAJAhLKUQAEgCADAAIAAAAQgBABgBACQgBAAAAABQgGAEgGAEQAEgFAEgFQAKgNANgQQALgNAJgLQgCAFgDAGQgEAKgHAJQgJAOgNAKQgEAFgEAGQACgCADgBQgBABgBACQgCADgCADQAEgEAEgFQABgBABgBQACgCACgCQABgBAAgBQAHgHAHgIQAFgGAFgGQATgVAMgPQADgDACgEQAFgHAIgJQABgDACgCIAAAAIgCAAIAEgCQgBABgBABQgCACgCACQgCADgCACQACgCABgDQACgCABgCIgKAAIAAAAQACgFAFgIQgGAFgHAIIAGAAQgQAHgQAeQATgWANgPQAFgFAFgFIAQgRQAAgBABgBQgHAEgNAMQAIgNAOgUAg/J1QgGAJgJAJQAAABgBAAQAAAAgBABQgVAZgJATQAEgEAEgDQABAAABgBQAFgEAHgDQAAgBAAAAIAAABIAAAAQAAgBAAgBIAAABIABAAQABgDABgCQABgBABgBQgCABgDACQgFACgFADQAGgMAMgRQgKALgIAJQgNANgGAGQAMgPAyhAQAGgIAGgHQgDAJgGAKAg3JrQgDAFgFAFAAQI3IACgBIACgBIACgBQgBACAAACAAQI3QABgCAAgBQgBACgBABQgBACAAABIgBAAQAAgBABgBQAAAAAAgBQACgEACgEQAEgJAEgHIADgDQgBAAgBABQABgCABgBQAJgRAHgHAASI2QABgBABgBQACgDACgCQACgDADgEQAFgGAFgHQACgCACgDQgCAEgCADQgGAJgEAJQgBABAAABIABgBQgBABgBAAQgFAKgEAJQgFAKgDAJIgKAAQAAgBAJgTQAAgBABAAQAAgCABgCQAAAAAAAAQgBACAAACQAAABAAABIAAAAQABgCAAgCQABgCACgCQAAgBAAgBIAAAAQgCACgBACQACgCABgCQABgCABgBAAWIuQACgDACgDQABgCACgBQAFgHAFgHAASI6IABAAIABAAQAAgBABgBQgBAAAAAAIgBABQAAAAgBABIAAAAQgEADgDADQAAABAAAAQgBAAAAABIAAAAQgBAAAAABQgCACgCACQgGAHgFAFQAGgGAJgNQABgBABgBQABgCABgCIgBAAQABgBABgBIABgBIABAAAAAIcIAKAAQgKAGgKAGQgJAGgJAFQgFADgFAEAAAIdIAAgBAAOI4IAAAAQACgDACgDQgCADgCACQAAABAAAAgAgEJPQAEgGAEgGQgHAJgGAFQgGAFgEABIAAAKQAEgEAGgHQACgDADgEgAAAIdIgJAJQARgqATgnAgKIoQAHgIADgDAgEJyQgDADgDACQgZAYgSAWQgIAKgHALIgLAHIAAAAQAAgBAAAAQAFgXADgMQgEAJgIAPQgHANgFAKQgBABgBACQABABACABQAHgIAHgHIgPAKIgDACQABAAAAABQgCADgBACQgBADgBACQgEAQgLAVQAAgLABgJQAAgCAAgBQABgLABgIQABgDAAgCQACgFABgDQABgBACgCQAAACAAACQgBAAAAABQgCADgDADAAjKAQgDgBgDAAQgKAJgIAIQABAGgBAEQgBABAAABIgGAGIgFAFQABgCAEgDQADgEAEgEQAKgLAOgPgAASI6IgEAAQACgCACgCAgJI6QgOAOgMAMAgrJSQAWgcALgOAAKISIgKAKAhJKdQACgBACgBQAKgFALgEQgKABgHAEQgFACgDAEgAhPLBIgBABQABgBAAAAQAEgEAEgFQAJgJAJgKQAXgYAagbAhXKcIABAAQAEgEAEgCQABgBACgBAhmKuIAEgIIgCAHIgEANIgDAKIAAAAQADgDAEgFQACgCADgCQABgCABgBQAGgHAIgIQgSAdgKALQABgEACgFQABgCABgDQABgCABgCQAFgJAIgOQAEgDAFgCAhYKmIgKAAIALgKAhuLHQACgCABgBQAEgLAPgTAhrLIQgBACAAABQgCALgGARQgBACgBAEQABgCABgBQAEgFAFgGQABgBABAAQABgCACgDQAEgEAEgEQAJAGAGgWAhfK4QgEAEgDAEQgDAEgCAEAhoK6IACgMAhrLfIAAgJIAJgSQAAAHgCAJQgDAGgCAEQgBABgBABgAhUKoQgGAIgFAIAh1KLQgGAJgHAJQgGAJgGALABNHkQgJAOgIANABtGnQAHglALgdADOGdIAAgKAiJs/QAVAeAHANAk5OHQAAAMgBAIQAAAAAAABAk5OWIAAgPAklORQAAgmAGgV");
	this.shape_223.setTransform(499.625,305.25);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("rgba(153,102,51,0.498)").ss(6,1,1).p("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gTAFQgFABgFABQgBABgBAAQgJACgEAAQAGgHALgOQAKgLANgPQABgBAAgBQAEgFAEgFIAAgKQgCAFgEAFAMmP+QgFAIgGAJQgGAHgCACQgBAEgCABQgCACgFAAQALgOAbg4QAGgLAHgJAOmqMIAAgKIAAgUQgEgBgFgDQgCgBgDgCQgDgDgEgDQgFgGgFgHQgBgBAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAAPxpNQADAEACAEQAEAFAEAFQABABAAABQABAAAAABQABABABABQABACACACQABABAAAAQAAABAAAAQABAAAAABIABABQAAAAAAAAQABAAAAABIAAAAQAIALALANQADAFAEAFQAAAAAAAAIABABQAAAAABABQAAAAABABQAAAAAAAAIAAABQABABABAAQgBgBAAgBIAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIgBAAQAAgBAAAAQAAgBgBgBQAAgBgBgBQAAAAgBgBQAAgBAAAAQgBgBAAgBQgKgRgLgMQAAAAAAgBIgBAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQgDgCgBgEIAAAAQABABABABIABABIACACIAAAAQAAABABAAQAAAAAAAAQABABAAABIABAAQAAABAAAAQALALAOAPQAAAAABABQAAAAABABQAAAAABABQAAABABAAQABABAAABQABAAAAAAIAAAAQABABAAABQABABABAAQAAABABAAQAAABABAAIAAAAQARASAWAVQgGgJgJgKQgOgRgXgVQgMgMgLgJIAAAAQgBgBgBgCQgDgDgEgCQgBgBgBgBQgEgEgEgEQgFgGAAgFQAEAHALAOQABAAAAABAP5pGQgFgEgDgDQgLgKgEgEIAAgKQADAIAMAQAOWqCQgCAEgBAHQgFAUgEAGQAAABgBABIABAAIANAAIAGAAAOdpjQAAgKABgDQACgIAGAAIAAgTIAAgBAOWqCQABgCADgCQABgBACgBQAEgCAFgCIAAAAAOJptQAAgBABAAQAFgKAHgKAOBpbQABgDABgCQADgHADgGIAAgVAOJpbIAAgSAODpHQAAgGgBgGQgBgEAAgEAOJpbIgGAUAOLngQAAgIgBgHIAAgBQAAgHgBgHQAAgBAAgBQgBgIAAgHQgBgSgCgPQgBgMgBgLAOTnmQgBABgBAAQgDACgDADAOZnIIgBgHQAAgBAAgBQgDgRgBgOQgBgIAAgHAOMnSQgBgHAAgHAQAomQAIAKALAPQAAAAAAAAIAAAAQADAEACADQAAAAAAABIABAAQAAABABAAQABABAAABQAAAAAAABQABAAABABQAAAAAAABQABABABABQAAAAAAABQABAAAAAAIAAAAQAEAFADAFQAAAAAAAAQAQAUACACIAMANIAIAHIAAAAQgOAAAFgGQABgBAAAAQABgBAAAAQgJgOgOgbQgDgFgDgGQAAAAgBgBQABABAAAAQAZAeAJAPQAEAIABAEQABADgEAAAQooGQAAABAAAAAQAomQgBgCgBgCIgKgKQABABAAAAQABABAAAAQAAAAAAAAQAEAFAGAHgAQxncQgHgKgHgJQgDgFgEgEIgKgUQACAGADAGQAFANAIASQABACABACQAAAAAAAAQACADABACQAGAOAAACQAAgBgBAAQgFgKgFgJQgKgTgHgPQgPgcgEgMAQkncQgmgpAAgRIgSgUQAJAQAuBMQADAEADAFQACACABADQgFgNgCgFQAAACAEALQAEAMAHAYQAHASADAOQgEgIgFgJQgEgHgEgGQgGgLgCgBIAAgJQAFAMADAJQALAbAAABQADAFAGAIQAEAFAFAGQAFAGAGAHQgCgMgEgPQgEgQgIgWQgBgFgCgGQgHgNgJgRIgBAAIAAAAIABAAIAIAFIALAFQgHgGgHgHQgGgHgGgGQgDgCgCgCgAQ5m+QAIATAMAKIAUAUQgFgMgKgQIgBAAQgGgMgJgOQgCgDgDgEQgGgJgGgJAQ5m+QAAgDgBgCQgBgEgCgEQgDgKgBgHAOToWIAAgnARXnmQAFAFAFAFIAAAKQgCgFgEgHQAAgBAAgBQAAAAgBAAQgBgDgCgDgARLnXQACgDAAgCQABABAAABQAAABAAABIAAAAQACAHABAFQAFAUAGAIQAGAKAcAjQABAAABAAQAFARAIAUQADAGADAIQADAGADAHQgCgDgCgEQgCgCgCgCQgCgDgCgDQgNgRgLAAQAAAHAGASQAGAUAHAOIAUATQAAgLgFgbQgBgHgBgGQgBgDAAgCQAAgBgBAAQgBgKAAgCQACgEACgBQAFgBAGALQAFAHAFAKQACAEACAEIAAAUQgCgGgCgGQgBgFgCgFQAAAAAAAAQAAgBgBgBQgBgEgCgEQgDgIgEgFQgCgEgFgGQgFgGgJgIIAAgKQAGAEATARQAEAEAFAEQgCgDgDgEQgRgZgJgMQACADABACQAIAMALATQACAEADAEIATAUQgDgDgMgRQAQAOAWAUQAHARAAAIQgJgNgEgEQgGgHgZgNARGnQQADgEACgDARNnIQgDgDgEgFATFlUQADAGAFAMQACAEABAEQABABABABQADACACACIAAAKQgCgHgDgHQgEgOgFgMQAHAFAHAFIgSgSIgCgCQAAACACAGQACABACABQgCgEgCgEQgBgBAAgBQgRgigcgNQgCgBgDgBIAAgKQACAHADAFQAHANAKAOQANAPAQANgASFmNIgHAAQABAFABAFQAFgBAAgJQAAgKgHAAIAAgTQAAALANAWQAAAAAAABQAAAAAAAAASLmIQgCgDgBgCIgDAAARVleQABABABABIAAATQAAgJgCgMgARDmVQAKAVAAAHIACAAIAIAAQAAgEgUgmQgBgDgCgEQgEgLgDgJARhl5QAAgIgVgeQgCgDgDgDQAAAAAAgBQgCgCgCgDIAAAIIAAAEIAAAKIAAAcQgBgLgNgjQgFgPgEgKQAPAaAIARASZlDQACACABADIACABIADAAQAFADAAAGQgBgBgHgIQgCgDgDgDgASIjlQgYAAgKgCQgCAAgBAAIgBAAQgCgBgCgBQgCgBgCgDQgHgIgGgYIgKAAQAAACAAADQAAADAAACQAAADgBACQAAABAAAAQAAABgBAAQgCgCgCgCQgHgHgFgGIgCAAIABgBQgOgOgFgDQgMgJgSgCIABAFQACAEAGAAQAAAGgGADQgCABgEAAQgDAAgFAAIgLgMIgHgHQABACAAABQADAJADAHQgDABgBABQAAABAAABQABACADAEQAKAKgMAAQgGAAgLgGQgHgFgLgJQAAAAgBAAQgEgDgEgEQgBgBgBgBQgSgPgJgQASFjJQgLgEgKgFQgIgEgHgFIgFAAQADAAACAAQAGAAAEgBQACAAABAAQATgCAHgHIAAAAIAUAAQgLAAgJAAARNjaIAPgBASujAQgDgJgCgIQgCgFgBgFQgCABgCAAQgLAFgRALQAAABgBAAQgFAEgGADQgBABgCAAQgEACgDABIAOAAIAJAAASujAQgCAAgDgBQgBAAgCAAQgDgBgEgBQgHgBgGgCQgGgBgHgCATokCQADgHAAgDQAAgBAAAAQAAAAgBAAQgEAAgDgDQADAHACAHgAUAj8QADADAEAAIgGAAQAAgCgBgBQgCgMgBgLAT9kQQABAMABADQAAADABACAUBj5IgEAAAUHjcQAAgIgFgRQAAgCgBgCAUHj5IAAAAIAAAdIAAAKIAAAeQAAAAAAABQAKAkAAAVIAAAJQAAgMgGgYQgFgTgEgOQgCgKgCgIQAAAAgBAAQgPgQgDgKQADARADARQAHAfALAgQACADABAEQABAEACAEQAFANADAJIAAATQgJgCACgHIAHgKQAHATgCAAQgCAAgDAAIAAAeATsj5QAEAJAEAKQADAFADAGQADAFAAALQABACAAABATsj5QgHgBABgCQABgDABgDQACAEACAFgAT1j5IgCAAQgEAAgDAAAUliYQABgBAAgBQAAgBAAgCQACgHgDgIQgEgPgPgPQAAAAgBAAQgEgEgGgEAT9jLIAAgQQAAAEAKAjARBl2QACALAAAGIAKAAQgBgCgCgEQgFgJgHgNQACAGABAFgAOZnIIAEAUIAAAJQAAgHgEgWgAOklrQgHgbAFAIQgEgKgBgTIAAgQAOwlAQAAgDgBgDQgCgGgCgGQAAgBgBgCQAAgBgBgCQACACACACQAAABABABQAHAJAJATQAAAAAAAAQADAGADAGIAAAJIAUAUQAAgHgCgMQgBgDAAgEIAAAAQgBgFgCgHQgFgXgJglIAAAxIAAAJIAAADIAAACIAAAGAOVlSQAEACADACIABAAQAIAFALAJQAGAEAHAFQAAAAABABQADACADACQAFAEAFAEQgFgFgFgGQgLgNgJgQQgHgMgFgNAOdlAQgFgJgDgJAPElvIAAgKAOdl+IAAgdAPDkXIgJAAQAAgDgBgGQgCgLgHgVAPEkhIAAAKIgBAAAQxkNQgBAAAAgBIAFgDIAEgDQAJgDABAKIgKAAgAQvkDIABAAQABACABACQADAEACAGQADADACADQAHAGAKAEIgNAAIgzAAIgPAAIAAgQIAAgDIAAgBIgDAAQAAAAAAABQACAAABAAQADAAADAAQgCgEgCgEQgGgLgCgDQgEgJgIAAQgCAAgBAAQADAGACAFQACAEABACQAFAIAFAFIgGAAQADAAADABQACABABACQAFADAFADQgCgFgCgEQAIACALACQASAEAKAAQAEABACAAIADAAIARAAQ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sIsQABgPAHgUQACgDAAgDQAHgWAAgHIAKAAIAAgKATqIuQAAgBABgBQAAAAABAAQAKgLgLAUIAAgBQAAgEABgEATlIzQACgDACgCQgDAHgDAEQgDAFgJAJIAAABIAAAoIgKAAATNI1IAAADIAAABQAAABAAAAIAAAAIAAAAIAAAYATNI1QAAACAAACQAAAAAAABQAAAAgBABIABgBQgBAcgHAFQgBAAgBABQABgNADgMQgCAEgCACIgQAPIgEAEIAAgBQAAgDAFgEQACgCADgBQAKgHAAgLQADAAADgCQACgBABgBIAAAAQAAAAAAAAQgCAFgDADQABgDABgDQACgEACgEgATJIrIAEAAQAAAFAAAFAS/IzIAKgIAS/IzQACgEACgEIAGAAAS6I8QADgEACgFATDIrIAAgKIAAgWAS0JUQAAACgBACAS6I8QAAAEgBADQgCALgDAGATDJcIAAAAIAAAGQAAgDAAgDgATMJwIABAAIAAgKQgDAEgCAGIgFAAIAAAAATDJwQgBAKgJAAIACgFQADgDAFgCIAAAAQACAAACAAQgBADgCADQgBABAAABQgJAPgKAQIAJAAQgDAAgEAPQgBAHgEAEQgFAEgHAAQgDAAgCgBQgDAAgCgCQgCgBAAgCQgBACgBADQgDAGgDAHQgDAHgFAJQgRAggNANQAEgLAEgQQAAgBAAAAQgCACgCABQADgCACgDQACgDACgDQABgBAAgBQAEgHAFgIQACgEABgDQAEgHADgIQADgFACgEQACgEABgDQADgEACgDQABgBABgCQAAAAABgBQABAAAAAAQgBABAAACQgDAEgCAEQgEAHgEAGQgGALgEAHATIJwIgBAAQACAAADAAgASIJbQgDgFgEgEQgDgEgEgEQgDgCgCgCQAAAAgBgBQAAABAAABQgBAKgCAIQAEgHAFgIASIJbQAIgIALgEQABAAABAAQADgBACAAQABAAABAAQAAACAAABARwJCQAAAAgBAAQgBgBAAgBQgBAAgCgBQAKgTAAgKIAAAJQAAAEAAAEARwJCQABgDABgCQABgCAAgCQABgDABgDQAAACAAACQAAAAAAABQAAAEAAAEQgBADAAACQgBAAgBgBQgBgBgBgBgAQ6K1QAAAAgBAAQAAgMAIgSQABgEACgDQACgGAEgHQADgIADgGQAJgRAHgHQABgBAAAAIAAADIAAAOQAFgMAEgNQACgGACgFQABgDABgEARhJtIAAAgIgUAUIgBACQAJgUAMgigAShKKQAHgJAHgHIAAgKQgBAEgNAWQgBADgDAEQAAABgBABIAAgBIAAgDQAAABAAACQAAABgBABQgBACgBACQABgBABAAQABAAAAAAIAAgEQAAABgBAAQAAACAAABQgBAEgBAGQADgHAAgDASMKEQADgKAAgJQAAgBAAgCQgBgJgGgKARxLJQABgFACgEIAAgBQADgGACgFQAAAAAAgBQAEgHACgHQACgFACgEQAAgCABgBQACgGACgGQAAABAAACQAAACgBADQgBAFgDAIQgEALgHAOQgDAFgDAGQAAACgBABQgDAFgDAFQgHANgFALQAAAAgBABQgBABgBACQgCAFgDAFQgBADgCADQgEAHgDAGIAAgJIAAgDIAAgKASUKbQABgDABgBQACgEABgCQABgCABgBQABgBAAAAIAAgCIAAgIQABACAAADQAAADAAADQAAABAAABQABAAgBABQAAAPgGASQgCAGgDAGQAAAAAAABQgDAHgEAHQgQAfgIAQQgHAOgBACIgHAAIgDAAIgKAAQAGgLAFgKQAEgJAEgIQABgBAAgCQAEgHADgGQABgBAAgBQACgHABgIQABAAAAgBQAFgXASgOQACgBABgBQACgBABgBQABgBAAAAQABAAABgBQABgBABgBQABgDACgCIAAAAQABgBAAgBQACgDACgDAScKNIAAABQAAAAAAABASvKZQAAgBAAgBIABAAQAAABgBABQgJANgKAOARxJZQgCAJgEAEASYKkQABgCAAgBQgCAGgCAIQgBgCAAgCQAAABAAABQgEAHgEAIQgCADgCACQgBACgBABQAAABgBABQgMATgJAJQAAAAgBAAQABgBAAgBQABgFABgFQACgCAAgCIgBACIgIAHQADgJADgJASUKrQABgBAAgBQACgDABgCQgCADgCAEgAR0LSQABgBABgBQAHgOAHgMQAFgIAFgIQABgBABgCQACgFACgDARNLiIAAgCIAAgCIAAgDIABAAIABgBIADgBIAJgFIACgBIAEgCIAAAAQAAACAAADQAAAEgCAFQAAADgBADQAAADgBACQgBABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgCAFgCAEQgBAEgCACQgBABgBACQABgCAAgCQACgEADgGQAAgBABgBQgBABAAAAQgDAFgDAEQgCADgDACQgDAFgEAFQgGAGgEAGQgSAWgFAIIAAgUQgIAAgOAFQgBABgCAAIAAAAQgHACgHABQgEABgEAAQgBAAgBAAQgeAAg8BxQg2BxgCAAQgQAAAHAJQABABABABQAEADACAAQAAAAAAgBQABgBAAgDQgDABgEABQgFABgEABQgDABgDAAQgJgBgJgEIAAAUQgCAAgDABQgEADgBAGARhLRIAEAAIACAAIAEAAQgEAJgGAJQAAABAAABQgCADgCACQAAABgBABQAAABgBAAQAAABgBABQAAABgBABQAAgBABgBQAAgBAAAAQABgCAAgBIABgBQABgCABgDQABgDAAgDAR+LJIgEADIgEAFIgCABARNLwIAAgBIAAgHIAAgDARSMBQgCACgDAAARnL+QgDADgDACIAAAJQADgFADgJgARNMMQACgDADgIASvJbQAAgGALgZARCKwQAAABgBABQgCACgFABQAGgHADgDQAAADgBACgAQcK5IAAgBAQcK5QAAACAAACQAAABAAABAQcK/IAAgCIAAgEAQSLJIABgDIABgCQABgCABgCQACgBACAAQABAAABAAQgBAEgBAFQAAACgBACQgDAPgHAQQgBACAAABQgDAFgDAGIAAAKQAFgMALgRQADgGAEgFQADgGAEgFQAMgRAIgKARMKjIgKANAryt4QACgDADgDQAKgMAJgNIACgDQABgCABgCIAAAAQgMAIgPAIQgzAZgcgCQAAAEgFAFQgFAFAAAFIAyAAIAMAAIAHAAQAIgHAGgIA0iCYQABABAAABIAAgBQAAgBgBAAgA00B5QAHALAHAOQACADACADQgMgHgEgOQgBgEgBgGQgBgIAAgKIgKAAQAFAIAGAKgA0hCaQANASARATQAAgDAAgEIAUAtQACAGACAFIgFAAQAOAWAOAkQABACABACQAMAfANApQAZBUATASA01CxQACAEACAFQAKAWAGgHIAAgvAzVEkQgBgGgCgHQgHgZgHgOIgFAAQAQAlAGAPQACAFABADIAAACIAAAHQAAgEgCgHQAAgDgBgDgA0DC4QgBgNgJgIA09CwQgCgOAAgJQABABABACQADAHAFAOA08C2QAEABADAAIAAgGA08C2QAAgDgBgDQgFAFAGABgA01C3IAAAuQAAgPgFgWQgBgFgBgFAr7N5IAAgKIAKAAAr7N5IAKAAIAKAAIAAAnQAFAAAFAAIAAAJQgEAAgGgBQgEgBgGgBQgEAAgGgBIAAgBgArVOqIgIAAIAAAKIgKAAAsFOjQAAADAAAEQAEgEAFgCQgEgBgFAAQgSgDgMAAIAAgdQAdAPAAAJQABACAAAGgArxOqIgKAAAp7QQIAAAFIgTAAAqPQVQgCgSACgPAp7P0IAAAc");
	this.shape_224.setTransform(396.3504,292);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#996633").ss(2,1,1).p("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");
	this.shape_225.setTransform(380.875,297.925);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FFB75B").ss(1,1,1).p("AHwowIgnAAIgUAAQgKAPgMAPQgiAng1AjQgIAFgQAJQgBAAAAAAQgkAVhMAoQhVAtgsAnQg+A4gXBLQgOAqhyEAQhrEAAABNQAAAuA/CsQAAACAAABQAAAAAAAAQBACtAdAYQAqAkAUCKQANBZAECVQACBUBmBWQBhBRBlAOQB3ARBeAzQBLAoB9AAQAsAABXgYQBWgZBSAAQA7AABsAeQBrAdBUAAQDtAADohUQBOgdA+ggQABAAAAAAIAAgBQAKgFAKgFQAOgIANgIAfXXhQBNgwAqg2QA7hOBRhZQAHgIAHgHQAAgBAAAAQAmgqAZgdIABAAQAegjANgRQAog4AThAIAAAAQAAAAAAgBQAAAAAAAAQABgFABgEQAVhLAAh7QAAgMgKgpQgBgDAAgCQgJglAAgMQAAgvAJgXQAFgLAPgTQAegkAAhoQAAhNgQg/IAAAAQAAgBAAAAQgKgigOgfQgCgGgDgGQAAAAAAAAQAAAAAAAAQgfg7g+hEQhMhRgggjQgKgLgFgHQgEgEgBgCQhNhggxh0QgMgbhGgzIgBAAQgEgDgFgDQgggWgkgWQgBgBAAAAQg0gfg+ggQkCiEiMAAQguAAhPAoQhOAngSAAQgqAAgpgSQgwgagcgOQhyg7ilAAQgVAAgcAFQgBAAAAAAQgSADgWAFQgUAGgXAHQgBAAAAAAQgGACgFABQgFACgFABQAAAAAAAAQhYAahUAAEgnLgaNINCAA");
	this.shape_226.setTransform(282.2,246.425);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(1,1,1).p("EBr1gFrIB/AAAYjg+MAuBAAAEhqRAFsIjiAAEg3WgA+I5UAA");
	this.shape_227.setTransform(510.425,320.975);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFCC99").s().p("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AAgEIAAgFIAAAAIABgCIADgUQADgRAAgLIgDAGIADgGQAAALgDARIgDAUIgCABIAFglIAAAAIAAAAIAAgGIAAAGIAAAAIAAAAIgFAlIAAAAIAAAAIAAAAIAAABIAAAAIAAAAIAAAFIAAAAgArQPRIAFAOIgFgOIAAgBIgGgOIAGAOIAAABgAL0PVIAAgHQAAghAGgTQgGATAAAhIAAAHgApqPVIAAgFIgBABQgHAEgKAAQAKAAAHgEIABgBIAAAFIgSAAgAqSPVIAUAAIACAAIgCAAIgBgTIABgOIAKgGIAAgKIgIAEIAAgCQAEgSAMgPIACAVIAAAaIAAAcIAAgcQABgMACgHQACgHAFAAIAAgdIAKAAIABAGQAAAJgEAVQAAAFABACQgBgCAAgFQAEgVAAgJIgBgGIgKAAIAAAdQgFAAgCAHIgDgHIgCgVQAMgPAUgMQgUAMgMAPQgMAPgEASIAAACQgSAJgHAGIgBgFIgDgOIAbAAIAAhEIAKAAIAAgdIAAgSIAAgNQAEAEAGAEIAAADIAGAAIgGgDIAAhWIAABWIAGADIgGAAIAAgDQgGgEgEgEIAAgcIgUAAIAAgUIAAgQQAQgEAEAAIAAAoIAAgoQgEAAgQAEIAAgEIAAgKIAUAAIAAAKIAAgKIAKAAIAKAAIAAgOQASALAGAMQgGgMgSgLIAAgJIAEAAIACAAIACAAIAAAAIABAAIAKABIAAAAQANAEAHANIAAAPIAAgPQADAGADAJQgDgJgDgGIAAgFIAAAFQgHgNgNgEIAAAAIgKgBIgBAAIAAAAIgCAAIgCAAIgEAAIAAgaQAKAAAAgKIAdAAIAAAKIgKAAIAKAAIAAAeIAAgeIAaAAIASANIAAAAIABAAIAFAEIAJANIgJgNIATANIgTgNIgKgRIgOAAIgQgKIAQAKIgaAAIAAgKQgEgEgDgHIAAAAIgCgHIgBgKIABAKIACAHIAAAAQADAHAEAEIgdAAQAAAKgKAAIAAAaIgEABIgQADIAAATIgUAAIAAAKIgdAAIAAAKQAFAAAUgFIAEgBIAAAQQgIgFgJgCIgCgDIAAACIgKgBIAAgBIAAABIgKgBQgJATgBAjIAAgGQgGgOgMgEQAAANgGAIQgGAIgIgBIAAALIgKAAIAAAKIAAArIAAgrIAAgKIAKAAIAAgLQAIABAGgIQAGgIAAgNQAMAEAGAOIAAAGIAAAEIAAgEQABgjAJgTIAKABIgIAgQgCAFAAAQQAAAOAKAJIAAgIQAEAAAGgGIAAAQIAEAEIAGACIgBANIgBAAQgBgJgDgGIgCAAQgHgCgFgEQAFAEAHACIACAAQADAGABAJQgEAAgEAEQgFAFgFABIAAAAIAAgfIAAAfIgKAAQAAAFAKAEIAAAAIgIABQAMAAAIAFQAJAEAIAAIAAApIAAgpQgIAAgJgEQgIgFgMAAIAIgBIAAAAQgKgEAAgFIAKAAIAAAAIATAAIAAAKIAKAAIAAAJQAFABAFgKIAAAAIAAgCIAEgKIAEgSIACgRIAAASIgCgBIACABIAAAdIgKAAIAABEIgbAAIgCgSQgMgBgKAFIgBAAIADAOIAWAAIADAOIABAFIgDADQgDAEAAAJIAAAFIgoAAIAAhjIAAgJIgIAAIgKAAIgKABIAAgoIAKAAIAAAnIAAgnIAKAAIAAAnIAAgnIgKAAIAAgKIgKAAIAAAKIgKAAIAKAAIAAAoIgKADIAKgDIAAAGIgKgCIAAgBIgBAAIgJgCIAAAHQADgDAGgCIABABIAKACIAAACIgKAAIAAgEIAAAEIAKAAIAKAAIAAAKIgUAAIAAgKIAAAKIAUAAIAAgKIAKAAIgKAAIAAgBIAKABIgKgBIAAgIIAKAAIAAAJIAAAAIAAAKIgKAAIAKAAIAAgKIAAAAIAHAAIABAAIAABjIAoAAIAAgFQAAgJADgEIADgDIADAVIAAAJgAotPUIAIgIIgIAIgAtLOuQAMAJAZAOIAYANIgYgNQgZgOgMgJIgKgKgApgPMQgDAAgHAEQAHgEADAAIAHgbIANAHIAAgOIAJgGIgJAGIAAABIgBAAIgFACIgBAAIAAAAQgDAAgBgDIAFgYQAFgXABgRQgBARgFAXIgFAYIAAgCIgBAAIABAAIAAACIgCAHQgKgHgEgJQAEAJAKAHIgHAbgApMPCIAAgKgArVPCIgBAAIgTgLIgKgJQgNgNgOgEIgFgBIAAACIgCgDIACABIgCgBIACADIAAgCIAFABQAOAEANANIAKAJIABABQAMAKAGAAIABAAIAAAAgAskPCQAAgFgJgkIAJABIgIgHIAaANIABAEIgBgEIAIAFIgHgBIAHABIAGADIAEACQgHgGgLgGIgBAAIAAAAIgBAAIgYgLIgBgBIAFgLIgJABIgCgKIACAKIACAIIgJgJIAAAGIgKgGIAKAGIAJAFIAAgCIAAACIgJgFIAAgGIAJAJIACACIAAAAIgBACIAAgCIgBAAIABAAIABAAIgBAAIgBAAIABAAIAAACIgCAEIACgEIABAFIgBgFIABgCIABABIAAAAIAYALIABAAIABACIgagNIAIAHIgJgBIgDgBIADABQAJAkAAAFgAr5OMQASAKARAsQgRgsgSgKQgFgDgagBIgCgLIACALIAFAUIgFgUQAaABAFADgAq5OaIAAAeIAAgeIAHgEIgCgIQgEgSgBgQIAAAugArzO4QgEgHgJgHIAXANIgXgNQAJAHAEAHgAonOaIgBACIAAABIgBAHIAAABIgBAFIABgFIAAgBIABgHIAAgBIABgCIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAABIAAABIABgCIAAAAIACgEIAAgBIABgBIABgDIAAgBIABAAIAVgxQAMgeAGgZIAAgBQAGgYAAgVIAAgFIAAgJIAAAAIgKAKIABgEIABgEIABgBIAAAAIAAgBIABgCIAGgSIgGASIgBACIAAABIAAAAIgBABIgBAEIgBAEIAAAAIAAgGIAAgCIAAgCIAAACIAAACIgCAIIgIAIIgCAJIgEAEIABgEIACgGQADgPAAgIIAKAAIAAAAIAAgBIAAgDQAAgOAKgRIABgBIAFgIIAEgFIgEAFIgFAIIgBABQgKARAAAOIAAADIAAABIAAAAIgKAAQAAAIgDAPIgCAGIgBAEIAAABIAAAAIgBAAIABAAIAAAAIAAgBIgCAPIgBACIABACIgBgCIABgCIACgPIAEgEQAGgJAEgIIACgCIAAABIAAgBIAKgKIAAAAIAAAJIAAAFQAAAVgGAYIAAABQgGAZgMAeIgVAxIgBAAIAAABIgBADIgBABIAAABIgCAEIAAAAIgBACIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgEIAAgBIABgCIAAgBIAAAAIABgLIgBALIAAAAIAAABIgBACIAAABIAAAEIAAAAgApMOqIAAhBIAAgGIAAgLIAAgMIAAAMIAAALIAAAHIAAgBgApYOoIgIgOgAs4OkIAIgMIgJgDIABgIIgBAIIAJADIgIAMgAo/OSQACAFAEADQgEgDgCgFIAGAAIAAhZIAABZIgGAAQgEgIgDgMIgBgDQgEgTgBgQQABAQAEATIABADIADAUIAEAAIAAAAgAtVOHQADAAARAKIAIAEIgIgEQgRgKgDAAIAFgLQAFgCABgEIASARQABgNACgJIACANIgCgNQgEgVgBgRQABARAEAVQgCAJgBANIgSgRQAIgZAIgSQgIASgIAZIgCgDIgEAJIgFALgAovOSIAAhGIAUAAIgUAAgAsoOHIAQABIgQgBQAEgKAAgKQAAAKgEAKIAAAAgANhOHIgBAAIABAAgAsoNhIgEAQIgBABQgBAIgFAEQAFgEABgIIABgBIAEgQIACgFQAJgIAGgSIABgBIAFgSIgFASIgBABQgGASgJAIIACgGIAHgYQADgKAAgFQAAAFgDAKIgHAYIgCAGIgGAEQgFADgEAKIAAAEIAAgEQAEgKAFgDIAGgEIgCAFgArENpIgHAAgAsRNgQALgBATADIgBgIQgBgHgcgQIAAAdgAMlNZIgBAHIABAAIAAgHIAAAHIgBAAIABgHIAAgDgANCNgQAUghAKgbIgeAmIAAAWgAobNUIAAAJIAAgJIACgIIAIAAQAAgKACgGIARgNQgNgBgEAOIgGAFIgEAHQAFgJAGgPIAGgRIAKggIgKAgIgGARQgCgEAAgEIAGgXIgGAXQAAAEACAEQgGAPgFAJIAEgQIAFgQIgFAQIgEAQIAAAAQACgPAFgVIADgOIgMAOIAMgOIgDAOQgFAVgCAPIgBACIgBACIABAAIABgEIAAAAIAAAEIgBAAIABAAIgCAIIABgIIgBAIIAAAAgAsoMnIgIANIgKAXIAKgXIAIgNIAHgLIgHALgApaMzQATAFAOABQACgGAMgMQACgEACgEQACgGAAgJIAAgEIAAAAQgCgHgFgIIgEgHQgBgMgCgKIAAAAIACAIIAWAgIAAgoIAAgKIgKgTQgNAAgFAEIgBACIgBgGQAKAAAAgKIAeAAIAAAnIgKAAIAKAAIAAgnIgeAAQAAAKgKAAIAAAJIABgDIAFAXIAYAAIAAAoIgWggIgCgIIAAAAQACAKABAMIgJgLIAAgLIAGAAIgGAAIgNAAIANALIAAATIgOgdIAAgBIABAAIgCgBIABABIgZAAIAAgKIAKAAIAOAJIgOgJIgKAAIAAAKIAZAAIAAABIAOAdIAAAxIgrAAIAKAEgAn+MvIAAgwgAshMcIAKgOQA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AAABIAAABIgCAAIgFAUIACAXIgGgLIABgMIgCAKIAAgKIgGAcIgCgJQACgNADgLIAFgPIABAIIgBAMIABgMIACAMIgCgMIABgNIAGgNIgGANIABgMIACgVIgCAVIgBAMIgCAFIgCgKIgKAAIAKAAIACAKIgFAPQgDALgCANIgEgXQgCgLgEAAIgBgBIAAAAIAAAAIgBAAIAAgOIAKAAIgKAAIAAAOQgDABgFAFIAABzIgGANQgLAUgDASIAUgJIAAgCQAAgYAMgyIAAgCIAQAAIgQAAIAGgYIgGAYIgEAAQgDAVgFAPIAAhzQAFgFADgBIAAAtIAFADQAEAEABAJIAAgBIAAAEIAAgDIAAADIAAgEIACgZIACAJIgEAQIAEgQQADAOADAHIAJAHIABAPIAAABIAAABIABAPIAAAAIABAPIgCACQgJAKgBAMIAAAWIgKgMIgHAOIgEADIgBABIAAAAIgGAFIAAgNIAAANIgKAHIAABEIAAAAQAJgDAJAAIAAAAIABAAQARAAATAKIAAAAIACABIAAAAIAEACQgDgJAAgKIAIAFIACASIgHgEQACAJAFAIQgFgIgCgJIAHAEIAAAKIAAADIABACIgBgCIAAgDIAAgKIAUANIgCgFIAOAPIgMgKIAIAhQgRgPgKgQQAKAQARAPIABAJIAKAAIAAAAQALAJAIAEQAKAHAGAAQAHAAAAgDQAAgDgEgEQgEgEgBgCIAJAHIAEAHQAEAHAFAFQgFgFgEgHIgEgHIASAMIAFAIIgGAAIAAgBIgEAAIgGAAIAHAAIADAEIAAAQIAPAAIAFAKIgFgKIAzAAIAMALIAVASIAMAEIAKADIgIADIAOAAQAEADACAAQADAAABgDIgBAAIgKgBIAKABIgJAAIgBgBIABABIgOAAIAIgDIAFACIgCgDIALgHIgLAHIgKgQQAJAFAMAEQgMgEgJgFIgBgCIgFgIIAEAAQASgCAHgHIAUAAIgUAAIAAAAQgXAAgLgCIgOgcIgKgKIgKgKQAdAZAaANIADAMIAAgKIgDgCIgFgUQgEgSgGAAIAAgKIA6A1QABAJAFASIABABIgBgBQgFgSgBgJIADACIAMAKIgPgPIAAADIg6g1IAAAKQAGAAAEASIAFAUQgagNgdgZIAKAKIAKAKIAOAcIgDAAIgBAAIgDgCIgFgEQgGgIgGgYIgKA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AAIAHAJIABABIASAWIAMAMIgCADIgBACQAAADALAAIgBAAIgHgIIAAAAIAHAIIgHgIQgJgOgOgaIgGgMIAAgBIABABQAYAeAJAQIgFAGIAFgGQAFAHAAAEIAAABQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgBQAAgEgFgHIADgGIAAACIAAABIAAABIADANQAFATAGAJIAiAtIADgBQAFARAIAUIAGAOIAAABIABAFIgEgEIgEgGQgMgQgLgBQAAAIAFASQAGATAHAOIAUATIAAAAgATemCIAEAIIgEgIIgIgSIAEACIAOAKIgSgSIgBgCQgRgigcgNIgFgLIAAAKIAFABQAHANALAOQAMAPAQANIgCgIIACACIAEAIIgEgCIAIASgARpmJIAAgTIgDgCIgGgaIAJAAQAAgFgUgmIAAgIIADAGIABAAIAFAGQAVAeAAAJQAAgJgVgeIgFgGIgBAAIgDgGIAAAIQAUAmAAAFIgJAAIgLgmIALAmIgBAAQAAgIgKgUIAAgKIgEgMIAEAHIgEgHIAEAMIAAAKQgJgSgPgaIAKAZQAMAjACAMIAAgcQAKAUAAAIIABAAIAGAaIgLgNIgLgWIACALIgIgNIgLgcIAHANIAKARIgKghIgMgjIAMAjIAKAhIgKgRIgHgNIgIgVIAAAJIAIAMIALAcIAIANIAJALIAEAGIgKAAQAAgGgDgLQADALAAAGIAKAAIgEgGIALANQADAMAAAJgAPVmvIAAgJgARfngIAUAUIgQgdIAAAAIgQgZIgFgIIgMgSIgOgTIgGgJIgKgUIAEANIAOAeIACAEIAAAAIACAFIgFgEQglgpAAgRIgTgUQAJARAvBKIAFAKIADAFIgGgSIADANIgFgKQgvhKgJgRIATAUQAAARAlApIALASIABACIAAAAIAAAAIAQAeIgGgUIAGAUIgQgeIAAAAIgHgQIANANIgFgRIAMASIAFAIIAQAZIAAAAIAQAdIgUgUQgNgLgHgTQAHATANALgAH+nWQgEgEAAgHIgBgCIABgCIAAAAQAaAFAIAAQgIAAgagFIAAAAIAAgFIAAAAIAAgBIArAAQAAgKgKgIQgIgFgBgEIATAIIgTgIIAAgCIAdAAIgWgGQAOAAASAGIgKAAIAKAAQgSgGgOAAIAWAGIgdAAIgDAAIgBAAQgGgDgSgPIAjAMIgjgMQASAPAGADIABAAIgDAAQgUAAgUgEIgXgGIAAAKQAJAAALADIAAAHIAAgHIAIADQARAEAEAAQAAAFgEAOIgbAAIATAFIAIABIgBACIABACQAAAHAEAEIg7AAgARVneIAAgFgAG5nrIAmAAIgmgJIAAAJgAOunrIgDgdIADAUIAAAJIAAgJIgDgUIgCgHIAAgCIgEgfIgBgPIABAPIAEAfIAAACIACAHIADAdgARVn+IgOgNIACAIIgIgFIAIAFIACAFIgCgFgAJDoIIgKAAgAOQpCIAAA6IAAg6IAAgUgARsogIAAABIABABIAGAMIAAgKIgLgKIgOgTQgPgRgWgWIgXgUIAAAAIgDgCIgGgGIABABIAAAAQABAEACACIABABIAAAAIAAABIAAAAIACABIAAAAIABABQAKAMAKASIABABIABABIABABIAAACIABACIABABIAAAAIABABIABABIAAABIAAAAIABACIgBgBIAAgBIgBAAIgBgBIgBgBIAAgBIgBAAIgHgKIgTgYIAAAAIgBgBIAAAAIAAgBIgCgBIAAgBIgBgBIgDgEIgCgCIAAgBIgBgCIgIgKIgGgIIAIAHIAJAIIACACQgMgOgDgHQAAAFAEAGIgIgHQgLgQgEgIIAAAKIAPAOIAGAIIAIAKIABACIAAABIACACIADAEIABABIAAABIACABIAAABIAAAAIABABIAAAAIATAYIAHAKIABAAIAAABIABABIABABIABAAIAAABIABABIgBgCIAAAAIAAgBIgBgBIgBgBIAAAAIgBgBIgBgCIAAgCIgBgBIgBgBIgBgBQgKgSgKgMIgBgBIAAAAIgCgBIAAAAIAAgBIAAAAIgBgBQgCgCgBgEIAAAAIACACIAAABIACACIAAAAIABABIABAAIABACIAAAAIABABIAYAaIABABIABABIABABIABABIACACIAAAAIAAAAIABABIACACIABABIABABIAAABIAnAmIALAKIAAAKIgGgMIgBgBIAAgBIgEgGIAEAGgAHroeIAIADIADABIgDgBIgIgDIgUgHIAUAHgAQ6pFIgBgBIABABgAOGqlIAAgZIAAgYIAAAYgAN8tBQgIgQgJgMQAJAMAIAQQgIAAgegeIAKAAQAFAAAGACQgGgCgFAAIg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CAGIgEAAIACgIIgCAIIAEAAIgCAGQAAAAgBAAQAAAAgBABQAAAAAAABQgBABAAAAIABAAIAAABIgBAAgARqKvIAAAAgARqKvIgBAAIABgBIAAABIAAAAgARpKvIAAAAgARtKrIAAAAIgCADIgBAAQAAAAABgBQAAgBAAAAQABgBAAAAQABAAAAAAgAQgKrIAQgRIgHAMIgKAIIABgDgARrKuIACgDIAAAAIABgBIAAACIABgCIABABIAAAAIAAABIgDABIABgBIgBABIgCABIAAAAgARtKtIABgBIgBABIAAAAIAAAAgARuKsIAAAAgARuKqIABAAIgBACIAAgCgARwKsIAAgBIABAAIgBABIAAAAgAQgKrIAAAAgAQrKNIABgFIAJgSIgJASIABgJIABAAIABgDIAGgGIgGAGIABgEIgBAEIgBABIAAgEIACgBIgCABIAAgBIAEgEIgCAEIAFgDIAAABIACgBIAKgKQAIgJAHgLQgHALgIAJIAGgUIgGAUIgKAKIAAgCIgCACIACAAIgCABIAAgBIgFADIACgEIAFgHIAAAGIAKgRIAAAJIAAgJIAEgIIgEAGIAAgDQgGAJgEAFQAEgFAGgJIAAADIgKANIAAgCIgEAEIABgCIADgEIAAACIAAgCIAKgNIAAABIAFgJIgFAJIAAgBIAFgIIgFAIIAAgBIAJgNIgEAGIAFgGIgCAHIgEAFIACgDIAMgOIgIAOIAFAAIgFAAIAIgOIgMAOIACgCIANgWIAAAFIgDAFIADgEIgBALIgFAHIACAAQgHASAAAMIABAAIgVAbIgHAKIgQARQAHgQAEgOgARwKrIgBgBIADgFIABAAIAAgCIAKgSIAAACIgNAYgAPlKpIAMgMIgBABIgMANIABgCgARtKrIACgGIABAAIgCAFIgBABgARvKqgARuKqIACgFIACAAIgDAFgARfKogArCKmgArDKRQgEAAgJAKIgJAIIgFACIgBAAIAAgKQAAgNAFgDQAEgCATgBQAPAAAMAFQgMANgOAMgAR9KjIAAACIgCABIACgDgASBKgIAAACIAAAAIAAABIAAgBIgEADIAEgFgARyKlIABgCIAAACgARwKlIgBAAIACgGIgBAGgARvKlgARrKlgAQGKbQAEgBAGgEIAAAEIgKALgAo5KlgARzKjIAAAAgAR5KRIAEAAIgKASQA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CACIgCADIAEgFgATAJZIAAAAgATAJXIACAAIgCACIAAgCgASZJMIAAAEIgEAJIAEgNgASqJXIAAAAgASsJQIgCABIADgDIgBACIABgBIAAADIgDAFIACgHgASoJXIAAAAgASoJSIACgBIgCAGIAAgFgASjJXIAAAAgARSJXIADgHIAAAHgARSJXgARQJXIAFgHIgDAHgARJJVIACgHIgFAGIAEgGIADgEIgCAEIAIgLIADgEIAAAAIgNAWIAAAAgAStJSIAAAAgAStJPIAAADIAAAAIAAgDgAStJPIACgBIAAACIgCACgAStJOIAAgCIAAACIAAAAIAAABIgBABIABgCgARVJQIAAAAgARVJQIAAAAgARWJFIAJgNIADgDIgHANIgGAOIABgLgAQ3JCQAIgDAXglIARgcIABAEIgKAaIAKgaIAAgBIAAABIgBgEIAEgGIgDAJIABgCIAAAKIAAgKIgBACIADgJIAEgGIgGANIAGgNIAEgHIAAgBIgEAIIgEAGQAIgXAAgKIAAATQAIgQAJgKIgEAWIgBAFIAHgJQgEAUgQAcIANgSIABABIgHANIAAABIAAgBIAHgNIABABIgCAHIgLANIAFgHIgKAOIAKgOIgFAHIgLAQIAGgJIgGAJIgCACIACgDIAGgIIgGAIIgCADIgOATIgBACIAJgOIARgdIgbAoIAbgoIgRAdIgJAOIgCABIABgEIACgKIAEgPIAJgQIgJAQIgBABIACgGIgBAFIABgFIABAAIAKgTIgDAIIADgIIgBgHIABAHIgKATIgBAAQgLAMgZAjIgDAFgARZIwIANgfIgNAfgARmIRIALgSIAAAAIgBAAIgBAAIgCABIAAAAIgBgBIgBAAIgBAAIgBAAIAAAAIAAAAIABAAIABAAIABAAIABABIAAAAIACgBIABAAIABAAIAAAAIgLASgARxH/QAJgEAFgQIgOAUIAAAAgASvJOIAEgEIgEAGIAAgCgAStJPIAAAAgAStJOIAAAAIAAgCIAAgBIABgDIABAGIgCABIAAgBgASvJOIAAAAgAStJOIAAgDIAAABIAAACIAAAAgARNJKIADgFIgCACIAAgBIADgGIAIgQIgCAKIgDAFIgEAGIAGgHIAAAAIAAABIgDAEIgIALIACgEgARKJOIAAAAgAROJHIgBADIgDAEIAEgHgAStJCIABAGIgBADgASzJKIAAAAgASzJKIAAAAgATAIvIAAAKIgNARQAMgWABgFgAROJHIACgCIgDAFIABgDgARWJEIAAAAIAAABIgDAEIADgFgASuJIIAAAAgAROJHIAAAAgAROJGIAAAAgARaInIACgFIABgBIgEAPIgIAQIgDAGIAMgfgARQI3IgHANIgCACIAJgPgARWJEIAAAAIARgcIACgCIALgQIgDAHQgGAHgJARIgDADIgJANIAAgBgARUI/IADgFIgBAEIgGAHIAEgGgASgIxIAAgDIAMgVQgFARgGASIgDAIQACgKAAgJgARWI/IABgBIACgDIAOgTIgRAcIAAgFgARQI3IAFgIIgKATIgCACIAHgNgARWI/IABgBIgBABgARWI/IAAgBIAAAAIACgBIgBABIgBABgARXI+IAAAAgARYI9IABgCIgCADIABgBgARYI9IAAAAgARZI7IAAAAgATNI1QACgDAFgCQAAAJgKAAgATUI4gATUIwIAAACIAAAGgATUIyIAAgCIABAAIgBACIABgCIAEAAIgEAGIgBgEIABAEIgBACIAAgGgARQI3IAAAAgATVI2IAAAAgARiI1QAJgRAGgHIgGAMIAGgMIACgBIAAADIgIAKIgJAMIAAAAgATVIwgATVIwIAAAAIAAgBIAEAAIgEAAIAAAAIAAAAIABgQIAEgGIAEgGIAKgLIAAAnIgKAAIAAgKIgFAKIAEAAIgEABIAAgBIAAABIgEAAgATVIvQAIgSABgKQgBAKgIASgATUIwIAAgBIABAAIAAABIAAAAgATUIwIAAAAgATUIwgATUIwIAAAAgATeIvgATZIvgATUIvIABAAIAAAAIAAAAgATUIvIAAgKIACgGIgBAQIgBAAgASaIbQAHgIALgDIADgBIgDAKIADgKIAAAAIABgBIADAAIAAAAIAAAAIgHALIgMAVQgBgJgFgKgARzItgARzIfIAIgMIgIAagARnIoIAAAAgARpImIAAAAgARcIiIAAAAgATUIcIAAAAIAAAGgARzIfIAAgDIgCABIADgHIALgNIgEAKIgIAMgATUIcgATAIcgATAIbIAAAAgATMH8IgCAHIgEARQgGAEAAADQAAgGAMgZgASSISIAUgwIARgVIAAAAQAAAegIAkIgDABQgLADgHAIIgIgJgATeISIAAABIgEAGIAEgHgATeITIA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");
	this.shape_228.setTransform(394.625,298.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Frame
	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(1,1,1).p("EAn9geEIgTzJEAn9Aa1IAAU1EAn9Aa1MAAAg45Egn8geEIAAzJEgn8Aa1IAAU1IAABkEgn8geEMAAAA45MBP5AAAEgn8geEMBP5AAA");
	this.shape_229.setTransform(411.825,325.025);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbIW1AAMBPmAAAMAscAAAMAAABg3MgsJAAAMhP5AAAI21AAg");
	this.shape_230.setTransform(480,320);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#F0FFFF").s().p("EAdTAwcMhP5AAAI21AAMAAAhg3IW1AAMBPmAAAIATTKMhP5AAAIAAzKIAATKMAAAA44IAAU1IAA01MBP5AAAIAAU1IAA01MhP5AAAMAAAg44MBP5AAAMAAAA44MAAAg44IgTzKMAscAAAMAAABg3gEgymgdRgEAdAgwbg");
	this.shape_231.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(286.6,329,927.6999999999999,312.1);
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