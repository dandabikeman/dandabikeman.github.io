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


(lib.YE = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AFnAbQABgMAAgNQAAiVhphpQhqhpiVAAQiUAAhpBpQhqBpAACVQAACVBqBpQBUBVBxAR");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF6E").s().p("Aj9EAQhphpAAiVQAAiUBphqQBphpCUABQCVgBBqBpQBpBqgBCUIgBAYIhdAAQgNhEgxg1QhChHhdAAQhcAAhCBHQhCBGAABkQAABkBCBHQAbAcAfASIAABBQhxgQhUhVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFAA").s().p("AicC3QhChHAAhkQAAhjBChHQBChHBcAAQBdAABCBHQAyA1AMBGIlAAAIAAEJQgggSgbgdg");
	this.shape_2.setTransform(4.175,6.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.YE, new cjs.Rectangle(-37.9,-37.7,75.9,75.5), null);


(lib.tubeflathitarea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F2F6").s().p("AjyBkQgUAAgUgIQgRgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgOQAPgNARgIQAUgIAUAAIHlAAQAUAAATAIQASAIAPANQAOAOAHASQAJATAAATQAAAUgJATQgHASgOAOQgPANgSAIQgTAIgUAAg");
	this.shape.setTransform(0.025,0.0248,1,0.9975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,-9.9,68.9,19.9);


(lib.SS = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("Aj1o4QCSgdBxg4QCLhEBdhrQhxhxh3hJQh9hMiGghgAj1gNQADgBAEgBQAwgMAugPQBUgcBKgnQBxg9BZhWQAFgFAFgFQhlhhhvhJQh6hRiJgzIAAIrIAAAcIAAIrIAAIqQEDhhDUicQjUjMkDhhQERhODai2QjnjokEg/");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("Aj1I6IAAorQEEA/DnDoQjaC2kRBOQEDBhDUDMQjUCckDBhgAj1o4QCJAzB6BRQBvBJBlBhIgKAKQhZBWhxA9QhKAnhUAcQguAPgwAMIgHACgAj1o4IAAorQCGAhB9BMQB3BJBxBxQhdBriLBEQhxA4iSAdIAAAAg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SS, new cjs.Rectangle(-27.5,-115.3,55.1,230.7), null);


(lib.RYE = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AlmAbQgBgMAAgNQAAiVBphpQBqhpCUAAQCVAABpBpQBqBpAACVQAACVhqBpQhUBVhxAR");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFAA").s().p("ABigjIlAAAQAMhGAyg1QBChHBdAAQBcAABCBHQBCBHAABjQAABkhCBHQgbAdggASg");
	this.shape_1.setTransform(-4.175,6.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF6E").s().p("AA5EkQAfgSAbgcQBChHAAhkQAAhkhChGQhChHhcAAQhdAAhCBHQgxA1gNBEIhdAAIgBgYQgBiUBphqQBqhpCUABQCVgBBpBpQBpBqAACUQAACVhpBpQhUBVhxAQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RYE, new cjs.Rectangle(-37.9,-37.7,75.9,75.5), null);


(lib.RPE = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AsbhgQAGgcAJgaQBOkKD0igQCShgCngoQB9gfCJAAQFkAACzGkQCQFSAAH5QAABXgdA9QgjBMhCAAQg5AAg+icQhLjbgwh9QhZjkhjh0Qh9iTikgJQgHAAgGAAQgGgBgFAAQhhAAiBBBQg9AfhVBBQgpABgkAAQhWABg0gCIAAAAQgKgBgIAAQg5gDgkACQgLABgJABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF93FA").ss(3,1,1).p("AkxBvQAugtA2gwQACgDADgCQAjgeBXhLQBMhDBggvQAvgXAngMQAmgLAdAAQAyAAA1AyQAzAxAAAtQAAAjgMAXQgIAQgZAZQgWAWgbAIQgDABgHABQgRACgogBQAIACAIAAQAGABAGAAQAQAAANgEAkxBvQA3giBBgmQATgMAVgLQBSgsBHgZQAFgDAGgCAjpD9QgSgBgbAAQgcAAgeAAQgPAAgKAAQgKgBgEAAQgCgBgBAAQgJgBgNABQAWhDBJhIAjgD9QgBgXAmgrQAngtBHgsQBDgqAzgVQASgHAhgIQAggHAcAAQAcABADAAQACgBANADQAIABAJACQAOADALAC");
	this.shape_1.setTransform(-30.175,-37.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF93FA").s().p("AjpD9QgSgCgbABIg6AAIgZAAIgOgBIgDgBQgJgBgNABQAWhDBJhIQA3gjBBgmIAogWQBSgrBHgaIALgFIgLAFQhHAahSArIgoAWQhBAmg3AjQAugtA2gwIAFgGIB6hnQBMhEBggvQAvgXAngMQAmgLAdAAQAyAAA1AyQAzAyAAAsQAAAjgMAXQgIAQgZAZQgWAVgbAJIgKACQgRABgoAAIgZgFIgRgDQgNgEgCABIgfAAQgcgBggAIQghAIgSAHQgzAWhDApQhHAsgnAtQgmAqABAYg");
	this.shape_2.setTransform(-30.175,-37.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFA9FF").s().p("AIiJMQhKjbgwh9QhZjkhjh0Qh+iSijgKIgNAAIgKAAQhhgBiCBBQg8AfhVBCIhOABQhVAAg0gCIgBAAIgRgBQg6gDgkADIgUACQAHgcAIgbQBOkJD0ihQCShgCngoQB+gfCIAAQFkAACzGlQCQFRAAH4QgBBYgcA9QgjBMhCAAQg5AAg/icgAoOh8QgBgYAmgrQAngsBHgtQBDgpA1gWQARgHAhgHQAggIAdABIAeAAQADgBAMADIASAEIAYAEIAQADIAMAAQAQAAANgEIAJgBQAbgJAXgXQAYgZAIgPQANgXAAgkQAAgsg0gxQg0gzgyAAQgdAAgmAMQgmAMgwAWQhhAwhMBDIh5BpIgGAFQg2AwguAuQhJBHgWBDQANgBAKABIACABIAPABIAZAAIA5AAQAbAAASACIAJAAIAAAAgAgtlfIgQgDQAoABARgCQgNAEgQAAIgMAAgAgEljIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RPE, new cjs.Rectangle(-82.5,-77.4,165.1,154.8), null);


(lib.WMouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AACgWQBOBjA2hmAiFgWQBOBjA2hm");
	this.shape.setTransform(0.025,0.0195);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WMouth, new cjs.Rectangle(-15.9,-5.1,31.9,10.3), null);


(lib.StraightMouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AkHAAIIPAA");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StraightMouth, new cjs.Rectangle(-28.8,-2.5,57.7,5), null);


(lib.Smile = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjQgZQDGBoDbho");
	this.shape.setTransform(0,0.0375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Smile, new cjs.Rectangle(-23.3,-5.1,46.7,10.3), null);


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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AAOAIIAAB4AAOAIIB9iHAiKh/ICYCH");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose2, new cjs.Rectangle(-15.8,-14.8,31.700000000000003,29.6), null);


(lib.nose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AAziDQjJCWDGBx");
	this.shape.setTransform(2.2021,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose, new cjs.Rectangle(-4.9,-15.2,14.200000000000001,30.4), null);


(lib.Beak = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ACfAAQAAAXguAPQgvAQhCAAQhBAAgvgQQgugPAAgXQAAgWAugQQAvgPBBAAQBCAAAvAPQAuAQAAAWg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("AhwAmQgugPAAgXQAAgWAugQQAvgPBBAAQBCAAAvAPQAuAQAAAWQAAAXguAPQgvAQhCAAQhBAAgvgQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Beak, new cjs.Rectangle(-17.9,-7.4,35.8,14.8), null);


(lib.LPE = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AMchgQgGgcgJgaQhOkKj0igQiShgingoQh9gfiJAAQlkAAizGkQiQFSAAH5QAABXAdA9QAjBMBCAAQA5AAA+icQBLjbAwh9QBZjkBjh0QB9iTCkgJQAHAAAGAAQAGgBAFAAQBhAACBBBQA9AfBVBBQApABAkAAQBWABA0gCIAAAAQAKgBAIAAQA5gDAkACQALABAJABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF93FA").ss(3,1,1).p("AEyBvQgugtg2gwQgCgDgDgCQgjgehXhLQhMhDhggvQgvgXgngMQgmgLgdAAQgyAAg1AyQgzAxAAAtQAAAjAMAXQAIAQAZAZQAWAWAbAIQADABAHABAEyBvQg3gihBgmQgTgMgVgLQhSgshHgZQgFgDgGgCADhD9QABgXgmgrQgngthHgsQhDgqgzgVQgSgHghgIQgggHgcAAQgcABgDAAQgCgBgNADQgIABgJACQgOADgLACQgIACgIAAQgGABgGAAQgQAAgNgEQARACAogBADqD9QASgBAbAAQAcAAAeAAQAPAAAKAAQAKgBAEAAQACgBABAAQAJgBANABQgWhDhJhI");
	this.shape_1.setTransform(30.175,-37.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA9FF").s().p("Ar+KcQgcg9gBhYQAAn4CQlRQCzmlFkAAQCIAAB+AfQCnAoCSBgQD0ChBOEJQAIAbAHAcIgUgCQgkgDg6ADIgRABIgBAAQg0AChVAAIhOgBQhVhCg8gfQiChBhhABIgKAAIgNAAQijAKh+CSQhjB0hZDkQgwB9hKDbQg/Ccg5AAQhCAAgjhMgADSllQAhAHARAHQA1AWBDApQBHAtAnAsQAmArgBAYIAJAAQASgCAbAAIA5AAIAZAAIAPgBIACgBQAKgBANABQgWhDhJhHQgugug2gwIgGgFIh5hpQhMhDhhgwQgwgWgmgMQgmgMgdAAQgyAAg0AzQg0AxAAAsQAAAkANAXQAIAPAYAZQAXAXAbAJIAIABQAOAEAQAAIAMAAIAQgDIAYgEIASgEQAMgDADABIAeAAIAEgBQAbAAAeAIgAAEljQASACAogBIgQADIgMAAQgQAAgOgEg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF93FA").s().p("ADhD9QABgYgmgqQgngthHgsQhDgpgzgWQgSgHghgIQgggIgcABIgfAAQgCgBgNAEIgRADIgZAFQgoAAgRgBIgKgCQgbgJgWgVQgZgZgIgQQgMgXAAgjQAAgsAzgyQA1gyAyAAQAdAAAmALQAnAMAvAXQBgAvBMBEIB6BnIAFAGQA2AwAuAtQg3gjhBgmIgogWQhSgrhHgaIgLgFIALAFQBHAaBSArIAoAWQBBAmA3AjQBJBIAWBDQgNgBgJABIgDABIgOABIgZAAIg6AAQgbgBgSACg");
	this.shape_3.setTransform(30.175,-37.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LPE, new cjs.Rectangle(-82.5,-77.4,165.1,154.8), null);


(lib.YellowFill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFE477").s().p("AqUDtIgBgFIAAgDIAAgBIAAgFIAAgBIAAgCIAAgDIAKhKIADgKIABgEIC0jnQDCiGERAAQESAADBCGIAEADIAEADIAEADICpDeIABAEIANBaIAAAMIAAACg");
	this.shape.setTransform(0,102.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEB99").s().p("AKVTyIAAgEIAAgCIAAgMIgMhaIAAAAIgBgFIipjeIgEgDIgEgDIgEgDQjBiGkSAAQkRAAjCCGIi0DnIgBAFIgDAKIgKBKIAAACIAAADIAAABIAAAFIAAABIAAADIAAACIAAABIAAACIAAAEIpcAAMAAAgnjMAnjAAAMAAAAnjg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.YellowFill, new cjs.Rectangle(-126.5,-126.5,253.1,253.1), null);


(lib.PinkFill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFA9FF").s().p("AzxTyMAAAgnjMAnjAAAMAAAAnjg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PinkFill, new cjs.Rectangle(-126.5,-126.5,253.1,253.1), null);


(lib.GreenFill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A4FF8D").s().p("AzxTyMAAAgnjMAnjAAAMAAAAnjg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GreenFill, new cjs.Rectangle(-126.5,-126.5,253.1,253.1), null);


(lib.BlueFill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#63E0FF").s().p("AzxTyMAAAgnjMAnjAAAMAAAAnjg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BlueFill, new cjs.Rectangle(-126.5,-126.5,253.1,253.1), null);


(lib.PrettyEye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AgvgtQhFgNAGg3Al4hBQAwCcCXAXQAfg1AhgnQAhgoAhgbQDHihDhFAAiEAWQhQgPgZhi");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PrettyEye, new cjs.Rectangle(-40.7,-14.4,81.5,28.8), null);


(lib.HappyEye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AkBB2QD3nXEMHX");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HappyEye, new cjs.Rectangle(-28.7,-14.8,57.5,29.6), null);


(lib.Eye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgCgIQALgBATgBAgCgIIACAvAgbgIQAIAAARAAAgFgmIADAe");
	this.shape.setTransform(-4.3,-9.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQATQgCgDAAgDQAAgEACgCQACgCAEAAQADAAACACQACACAAAEIAAAAQAAADgCADIgCABIgDABQgEAAgCgCgAAGgGQgDgCAAgEQAAgDADgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_1.setTransform(-6.575,-14.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah/DKQg0hUAAh2QAAh1A0hUQA2hUBJABQBKgBA1BUQA1BUAAB1QAAB2g1BUQg1BThKAAQhJAAg2hTgAgthmIADAxIgDgxIAfgBIgfABIgDgdIADAdIgZAAIAZAAIAAAAgAhSiMQgCACAAADQAAADACADQACACAEAAIADgBIACgBQACgCAAgDIAAgBQAAgDgCgCQgCgCgDAAQgEAAgCACgAg7imQgDACAAAEQAAADADACQACACADAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgCgEAAQgDAAgCACgAgthmIAAAAg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eye, new cjs.Rectangle(-18,-28.5,36.1,57.1), null);


(lib.EXCITEDEye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("Ai/iuIF/CaIlbDD");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EXCITEDEye, new cjs.Rectangle(-22.1,-20.4,44.3,40.9), null);


(lib.TopSpikes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AIqDvQgMgwgPguQgchUgnhKQg9hxhWhZQgFgFgFgFQhhBlhJBvQhRB6gzCJIIpAAAABD2QgdiSg3hxQhEiLhrhdQhxBxhJB3QhNB9ggCGg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AABD2QAziJBQh6QBKhvBghlIAKAKQBXBZA9BxQAnBKAcBUQAPAuAMAwIAAAHgAopD2QAhiGBMh9QBJh3BxhxQBrBdBECLQA4BxAcCSg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TopSpikes, new cjs.Rectangle(-58.4,-27.5,116.8,55.1), null);


(lib.PinkPaw = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AClAAQAABegwBCQgwBChFAAQhEAAgwhCQgwhCAAheQAAhdAwhCQAwhCBEAAQBFAAAwBCQAwBCAABdg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA9FF").s().p("AgkCcQgTgKAAgOQAAgOATgKQATgKAZAAQAbAAASAKQATAKAAAOQAAAOgTAKQgSAKgbAAQgZAAgTgKgABJhBQgGgEAAgGQAAgHAGgEQAFgEAIgBQAHABAGAEQAFAEAAAHQAAAGgFAEQgGAFgHAAQgIAAgFgFgAhihGQgFgDAAgGQAAgGAFgDQAEgEAHAAQAHAAAEAEQAFADAAAGQAAAGgFADQgEAEgHAAQgHAAgEgEgAgTh5QgJgHAAgLQAAgMAJgGQAJgIAMAAQANAAAIAIQAJAGAAAMQAAALgJAHQgIAHgNAAQgMAAgJgHg");
	this.shape_1.setTransform(-0.725,1.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF93FA").s().p("Ah0CgQgwhCAAheQAAhdAwhCQAxhCBDAAQBFAAAvBCQAxBCAABdQAABegxBCQgvBChFAAQhDAAgxhCgAgrB3QgTAKAAAOQAAAOATAKQASAKAaAAQAbAAASgKQATgKAAgOQAAgOgTgKQgSgKgbAAQgaAAgSAKgABChLQgGAFAAAGQAAAHAGAEQAFAEAHAAQAIAAAGgEQAEgEAAgHQAAgGgEgFQgGgEgIAAQgHAAgFAEgAhphNQgFAEAAAFQAAAGAFAEQAEADAHAAQAGAAAFgDQAFgEAAgGQAAgFgFgEQgFgEgGAAQgHAAgEAEgAgbiSQgIAHAAALQAAALAIAHQAKAHANAAQALAAAJgHQAJgHAAgLQAAgLgJgHQgJgIgLAAQgNAAgKAIg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PinkPaw, new cjs.Rectangle(-18.5,-24.6,37,49.3), null);


(lib.handwheart = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AC+g0IglAAQgsALgVAFQgMAcgSAiQgHAOgGAMQgZAxgLAhQgCACgBADQgCAHgCAFQACAEABAEIAFABQABgDgCgFQgCgIgBgFAgUhdQABgCABgDQAKgdArgXQArgWARAFQAgAIgRBAQgGAXgQAkIgSAFQgdAPAAA0QAAAIAEAIQAKATAhAUQAsAaAfAAQARAAACgBQAHgBAJgGAgWhZQgMgEgWgQQgWgPgJgDQgzgNgMArQgHAaAqBAQADAEADAEQANAEAJANQAJAMADASQASAXAeAlQAQAUAIAOQABAAAAABQACAEACAEAhLAwQABAHAAAIQAAAugXAUQgOANgrAbAhtABQALAQAOATQAEAGAFAGAjFASQAggQAKgCQAFAAAbAAQAHAAAHAB");
	this.shape.setTransform(0.025,0.0368);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF4D4D").s().p("AgJB6Igwg9QgDgRgJgNQgJgNgNgEIgGgIQgqg/AHgbQAMgrAzAOQAJADAWAPQAWAPAMAFIACgEIACgFQAJgdAsgXQArgWARAEQAgAJgRA/QgGAYgQAkIgSAEQgdAQAAAzQAAAIAEAJQgZAxgLAgIgNAJQgIgOgPgUg");
	this.shape_1.setTransform(-1.7557,-1.3132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.handwheart, new cjs.Rectangle(-21.2,-18.4,42.5,36.9), null);


(lib.CircleLeg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ADxAAQAAAygSArQgSAqgjAjQhGBHhkAAQhjAAhGhHQgjgjgSgqQgSgrAAgyQAAhjBHhGQBGhHBjAAQBkAABGBHQBHBGAABjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7F14F").s().p("AipCqQgjgjgRgqQgTgrABgyQAAhiBGhHQBHhGBiAAQBjAABHBGQBGBHAABiQABAygTArQgRAqgjAjQhHBGhjAAQhiAAhHhGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleLeg, new cjs.Rectangle(-26,-26,52.1,52.1), null);


(lib.tubeflatsteelreset = function(mode,startPosition,loop,reversed) {
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
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_5.setTransform(11.925,0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(6.925,1.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAbIgIgDIAAgKIAAAAQAEADAGACQAFACAFAAQAFAAADgCQAEgCAAgEQAAgEgCgBIgHgDIgEgBIgGgBQgHgCgDgDQgDgEAAgFQAAgDABgDIAEgGIAHgDQAFgCAEAAIAKACIAIACIAAAKIAAAAIgJgEIgKgCQgEAAgDACQgEACAAAEQAAADACACQACACAFABIAFABIAFABQAGABAEADQADAEAAAGQAAAHgGAFQgGAFgKAAQgGAAgFgCg");
	this.shape_7.setTransform(1.425,1.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_8.setTransform(-4.225,1.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAkIgXgdIgOAAIAAAdIgJAAIAAhHIAUAAIAKAAIAIADQAEADACAEQACAEAAAFQAAAIgEAGQgEAEgGACIAbAggAgUAAIAKAAIAIAAQACgBADgDIADgEIABgHQAAgDgBgDIgDgEIgFgCIgGAAIgMAAg");
	this.shape_9.setTransform(-9.9,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// inner outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CBD3E7").ss(1,1,1).p("AEVhbQAVAHARAOQAQAOAJASQAJATABATQAAAUgKATQgJASgQANQgRAOgVAIQgWAIgZAAInMAAQgYAAgWgIQgWgIgQgOQgRgNgJgSQgJgTAAgUQAAgTAJgTQAJgSARgOQAQgOAWgHQAWgIAYAAIHMAAQAZAAAWAIg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// tube inner
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CBD3E7").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");
	this.shape_11.setTransform(-0.025,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");
	this.shape_12.setTransform(-0.025,-0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4E67A0").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");
	this.shape_13.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#92A4CB").ss(1,1,1).p("AEEiGQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAAIASAAQgFAAgEAAQgFAAgEAA");
	this.shape_14.setTransform(-0.05,-0.1125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B2D8E8").ss(1,1,1).p("ADyiGQAEAAAFAAQAEAAAFAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAAIASAA");
	this.shape_15.setTransform(-0.05,-0.1125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#4E67A0").ss(1,1,1).p("ADyiGQAEAAAFAAQAEAAAFAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAAIASAA");
	this.shape_16.setTransform(-0.05,-0.1125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(1));

	// tube outer
	this.instance = new lib.tubeflathitarea("synched",0);
	this.instance.setTransform(0,0,1.1022,1.3065);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-36,-12,73,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-36, y:-12, w:73, h:24});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-36, y:-12, w:73, h:24});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-14.6,79.1,29);


(lib.tubeflatsteel = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(13.075,0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(3.275,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_2.setTransform(-2.175,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.075,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAkIAAhHIAtAAIAAAIIgjAAIAAAVIAeAAIAAAHIgeAAIAAAjg");
	this.shape_4.setTransform(-12.8,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAkIAAgHIAPAAIAAgwIgPAAIAAgHIAHAAIAFgCIAEgCQABgCAAgEIAHAAIAABBIAPAAIAAAHg");
	this.shape_5.setTransform(13.075,0.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(3.275,1.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_7.setTransform(-2.175,1.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_8.setTransform(-8.075,1.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAkIAAhHIAtAAIAAAIIgjAAIAAAVIAeAAIAAAHIgeAAIAAAjg");
	this.shape_9.setTransform(-12.8,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// inner outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CBD3E7").ss(1,1,1).p("AEVhbQAVAHARAOQAQAOAJASQAJATABATQAAAUgKATQgJASgQANQgRAOgVAIQgWAIgZAAInMAAQgYAAgWgIQgWgIgQgOQgRgNgJgSQgJgTAAgUQAAgTAJgTQAJgSARgOQAQgOAWgHQAWgIAYAAIHMAAQAZAAAWAIg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// tube inner
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CBD3E7").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");
	this.shape_11.setTransform(-0.025,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");
	this.shape_12.setTransform(-0.025,-0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4E67A0").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");
	this.shape_13.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#92A4CB").ss(1,1,1).p("AEEiGQgFAAgEAAQgFAAgEAAIASAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAA");
	this.shape_14.setTransform(-0.05,-0.1125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B2D8E8").ss(1,1,1).p("ADyiGIASAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAAQAEAAAFAAQAEAAAFAA");
	this.shape_15.setTransform(-0.05,-0.1125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#4E67A0").ss(1,1,1).p("ADyiGIASAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAAQAEAAAFAAQAEAAAFAA");
	this.shape_16.setTransform(-0.05,-0.1125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(1));

	// tube outer
	this.instance = new lib.tubeflathitarea("synched",0);
	this.instance.setTransform(0,0,1.1022,1.3065);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-36,-12,73,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-36, y:-12, w:73, h:24});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-36, y:-12, w:73, h:24});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-14.6,79.1,29);


(lib.tubeflatpink = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgYAlIAAgKIAKgJIAKgIIAMgOQAEgGgBgGQABgFgEgEQgEgDgFAAQgFAAgFACQgFABgGADIAAAAIAAgKIAJgDIAMgBQAKAAAGAFQAHAGgBAJIgBAIIgCAHIgFAEIgGAHIgKAKIgLAIIAnAAIAAAJg");
	this.shape.setTransform(13,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(3.275,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_2.setTransform(-2.175,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.075,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAkIAAhHIAtAAIAAAIIgjAAIAAAVIAeAAIAAAHIgeAAIAAAjg");
	this.shape_4.setTransform(-12.8,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAlIAAgKIAKgJIAKgIIAMgOQAEgGgBgGQABgFgEgEQgEgDgFAAQgFAAgFACQgFABgGADIAAAAIAAgKIAJgDIAMgBQAKAAAGAFQAHAGgBAJIgBAIIgCAHIgFAEIgGAHIgKAKIgLAIIAnAAIAAAJg");
	this.shape_5.setTransform(13,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(3.275,1.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_7.setTransform(-2.175,1.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_8.setTransform(-8.075,1.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAkIAAhHIAtAAIAAAIIgjAAIAAAVIAeAAIAAAHIgeAAIAAAjg");
	this.shape_9.setTransform(-12.8,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// inner outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F2C7F3").ss(1,1,1).p("AEVhbQAVAHARAOQAQAOAJASQAJATABATQAAAUgKATQgJASgQANQgRAOgVAIQgWAIgZAAInMAAQgYAAgWgIQgWgIgQgOQgRgNgJgSQgJgTAAgUQAAgTAJgTQAJgSARgOQAQgOAWgHQAWgIAYAAIHMAAQAZAAAWAIg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// tube inner
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2C7F3").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");
	this.shape_11.setTransform(-0.025,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");
	this.shape_12.setTransform(-0.025,-0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E172E2").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");
	this.shape_13.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#E29DEA").ss(1,1,1).p("AEEiGQgFAAgEAAQgFAAgEAAIASAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAA");
	this.shape_14.setTransform(-0.05,-0.1125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B2D8E8").ss(1,1,1).p("ADyiGIASAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAAQAEAAAFAAQAEAAAFAA");
	this.shape_15.setTransform(-0.05,-0.1125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#E172E2").ss(1,1,1).p("ADyiGIASAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAAQAEAAAFAAQAEAAAFAA");
	this.shape_16.setTransform(-0.05,-0.1125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(1));

	// tube outer
	this.instance = new lib.tubeflathitarea("synched",0);
	this.instance.setTransform(0,0,1.1022,1.3065);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-36,-12,73,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-36, y:-12, w:73, h:24});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-36, y:-12, w:73, h:24});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-14.6,79.1,29);


// stage content:
(lib.MPHFinalYFlores = function(mode,startPosition,loop,reversed) {
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
		this.Reset.addEventListener("click", ClickReset.bind(this));
		
		function ClickReset() {
		//EYES
			this.LE1.x = 449;
			this.LE1.y = 110;
			this.RE1.x = 579;
			this.RE1.y = 110;
			this.LE2.x = 464;
			this.LE2.y = 157;
			this.RE2.x = 562;
			this.RE2.y = 159;
			this.LE3.x = 471;
			this.LE3.y = 200;
			this.RE3.x = 554;
			this.RE3.y = 200;
			this.LE4.x = 484;
			this.LE4.y = 256;
			this.RE4.x = 542;
			this.RE4.y = 256;
		//NOSE AND MOUTH
			this.N1.x = 472;
			this.N1.y = 346;
			this.N2.x = 517;
			this.N2.y = 346;
			this.N3.x = 556;
			this.N3.y = 346;
			this.M1.x = 520;
			this.M1.y = 415;
			this.M2.x = 520;
			this.M2.y = 435;
			this.M3.x = 520;
			this.M3.y = 451;
		//ARMS AND LEGS 
			this.LL1.x = 86;
			this.LL1.y = 522;
			this.RL1.x = 138;
			this.RL1.y = 522;
			this.LL2.x = 287;
			this.LL2.y = 524;
			this.RL2.x = 354;
			this.RL2.y = 524;
			this.Hands.x = 212;
			this.Hands.y = 516;
		//EARS AND SPIKES
		    this.LPE.x = 570;
			this.LPE.y = 553;
			this.RPE.x = 748;
			this.RPE.y = 553;
			this.LYE.x = 596;
			this.LYE.y = 592;
			this.RYE.x = 698;
			this.RYE.y = 592;
			this.TS.x = 800;
			this.TS.y = 434;
			this.SS.x = 890;
			this.SS.y = 522;
		//COLORS
			this.PB.x = 814;
			this.PB.y = 210;
			this.GB.x = 805;
			this.GB.y = 220;
			this.BB.x = 796;
			this.BB.y = 230;
			this.YB.x = 780;
			this.YB.y = 240;
		
		}
		
		
		//EYES
			this.LE1.on("pressmove", dragMe);
			this.RE1.on("pressmove", dragMe);
			this.LE2.on("pressmove", dragMe);
			this.RE2.on("pressmove", dragMe);
			this.LE3.on("pressmove", dragMe);
			this.RE3.on("pressmove", dragMe);
			this.LE4.on("pressmove", dragMe);
			this.RE4.on("pressmove", dragMe);
		//NOSE AND MOUTH
			this.N1.on("pressmove", dragMe);
			this.N2.on("pressmove", dragMe);
			this.N3.on("pressmove", dragMe);
			this.M1.on("pressmove", dragMe);
			this.M2.on("pressmove", dragMe);
			this.M3.on("pressmove", dragMe);
		//ARMS AND LEGS 
			this.LL1.on("pressmove", dragMe);
			this.RL1.on("pressmove", dragMe);
			this.LL2.on("pressmove", dragMe);
			this.RL2.on("pressmove", dragMe);
			this.Hands.on("pressmove", dragMe);
		//EARS AND SPIKES
		    this.LPE.on("pressmove", dragMe);
			this.RPE.on("pressmove", dragMe);
			this.LYE.on("pressmove", dragMe);
			this.RYE.on("pressmove", dragMe);
			this.TS.on("pressmove", dragMe);
			this.SS.on("pressmove", dragMe);
		//COLORS
			this.PB.on("pressmove", dragMe);
			this.GB.on("pressmove", dragMe);
			this.BB.on("pressmove", dragMe);
			this.YB.on("pressmove", dragMe);
		
				 //Draggable
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.SS = new lib.SS();
	this.SS.name = "SS";
	this.SS.setTransform(890,522);

	this.RPE = new lib.RPE();
	this.RPE.name = "RPE";
	this.RPE.setTransform(748,553);

	this.LPE = new lib.LPE();
	this.LPE.name = "LPE";
	this.LPE.setTransform(570,553);

	this.RYE = new lib.RYE();
	this.RYE.name = "RYE";
	this.RYE.setTransform(698,592);

	this.LYE = new lib.YE();
	this.LYE.name = "LYE";
	this.LYE.setTransform(596,592);

	this.Hands = new lib.handwheart();
	this.Hands.name = "Hands";
	this.Hands.setTransform(212,516);

	this.RE4 = new lib.Eye();
	this.RE4.name = "RE4";
	this.RE4.setTransform(542,256);

	this.LE4 = new lib.Eye();
	this.LE4.name = "LE4";
	this.LE4.setTransform(484,256);

	this.LL1 = new lib.PinkPaw();
	this.LL1.name = "LL1";
	this.LL1.setTransform(86,522);

	this.RL1 = new lib.PinkPaw();
	this.RL1.name = "RL1";
	this.RL1.setTransform(138,522);

	this.RL2 = new lib.CircleLeg();
	this.RL2.name = "RL2";
	this.RL2.setTransform(354,524,1.1875,1);

	this.LL2 = new lib.CircleLeg();
	this.LL2.name = "LL2";
	this.LL2.setTransform(287,524,1.1875,1);

	this.M1 = new lib.WMouth();
	this.M1.name = "M1";
	this.M1.setTransform(520,415);

	this.M2 = new lib.Smile();
	this.M2.name = "M2";
	this.M2.setTransform(520,435);

	this.TS = new lib.TopSpikes();
	this.TS.name = "TS";
	this.TS.setTransform(800,434);

	this.N2 = new lib.Beak();
	this.N2.name = "N2";
	this.N2.setTransform(517,346);

	this.N1 = new lib.nose2();
	this.N1.name = "N1";
	this.N1.setTransform(472,346);

	this.N3 = new lib.nose();
	this.N3.name = "N3";
	this.N3.setTransform(556,346);

	this.M3 = new lib.StraightMouth();
	this.M3.name = "M3";
	this.M3.setTransform(520,451);

	this.RE3 = new lib.EXCITEDEye();
	this.RE3.name = "RE3";
	this.RE3.setTransform(554,200,1,1,0,0,180);

	this.LE3 = new lib.EXCITEDEye();
	this.LE3.name = "LE3";
	this.LE3.setTransform(471,200);

	this.RE2 = new lib.HappyEye();
	this.RE2.name = "RE2";
	this.RE2.setTransform(562,157,1.0581,1);

	this.LE2 = new lib.HappyEye();
	this.LE2.name = "LE2";
	this.LE2.setTransform(464,157,1.0581,1);

	this.RE1 = new lib.PrettyEye();
	this.RE1.name = "RE1";
	this.RE1.setTransform(574,110,1,1,0,0,180);

	this.LE1 = new lib.PrettyEye();
	this.LE1.name = "LE1";
	this.LE1.setTransform(449,110);

	this.YB = new lib.YellowFill();
	this.YB.name = "YB";
	this.YB.setTransform(784,240);

	this.BB = new lib.BlueFill();
	this.BB.name = "BB";
	this.BB.setTransform(796,230);

	this.GB = new lib.GreenFill();
	this.GB.name = "GB";
	this.GB.setTransform(805,220);

	this.PB = new lib.PinkFill();
	this.PB.name = "PB";
	this.PB.setTransform(814,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PB},{t:this.GB},{t:this.BB},{t:this.YB},{t:this.LE1},{t:this.RE1},{t:this.LE2},{t:this.RE2},{t:this.LE3},{t:this.RE3},{t:this.M3},{t:this.N3},{t:this.N1},{t:this.N2},{t:this.TS},{t:this.M2},{t:this.M1},{t:this.LL2},{t:this.RL2},{t:this.RL1},{t:this.LL1},{t:this.LE4},{t:this.RE4},{t:this.Hands},{t:this.LYE},{t:this.RYE},{t:this.LPE},{t:this.RPE},{t:this.SS}]}).wait(1));

	// Character
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3CFF").s().p("AhOBqIgEgqQANAEAPAAQALAAAGgEQAHgFAEgNIhBiaIA/AAIAfBnIAehnIA7AAIg+ClQgLAcgLAKQgOAOggAAQgNAAgbgDg");
	this.shape.setTransform(578.875,36.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3CFF").s().p("AgwBJQgSgJgLgTQgMgTAAgaQAAgjAXgXQAYgWApAAQAhAAASAKQAUAKAKATQAKATAAAeIAAAHIh2AAQACAOAFAHQAJAKANAAQAJAAAIgEQAEgDAGgHIA7AFQgOAYgSAKQgUAKgjAAQgeAAgSgIgAgWgiQgFAHgBAOIA5AAQgBgRgIgIQgHgHgMAAQgOAAgJALg");
	this.shape_1.setTransform(559.65,33.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3CFF").s().p("AAYBrIgfg+IgWAWIAAAoIg9AAIAAjVIA9AAIAABtIAsgyIBJAAIg4A1IA7Blg");
	this.shape_2.setTransform(540.5,30.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3CFF").s().p("AgjBNQgRgFgMgKQgLgLgHgOQgHgNAAgXQAAgXAIgQQAGgMALgJQAKgKALgEQASgHAaAAQAmAAAUANQAUAOAIAaIg4AIQgDgKgHgFQgHgFgLAAQgOAAgJAKQgKALAAAUQAAATAJAKQAKAKANAAQALAAAIgGQAIgGAEgMIA5AGQgFASgKANQgLANgRAHQgQAHgaAAQgYAAgQgEg");
	this.shape_3.setTransform(519.675,33.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3CFF").s().p("AgdBrIAAiaIA7AAIAACagAgdhCIAAgoIA7AAIAAAog");
	this.shape_4.setTransform(504.6,30.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3CFF").s().p("AgPBoQgKgHgFgLQgGgLABgaIAAg2IgXAAIAAgsIAXAAIAAgcIA6gfIAAA7IAiAAIAAAsIgiAAIAAA2QAAAKADADQACAFAIAAQAGAAAMgEIAEApQgVAFgUAAQgVAAgLgFg");
	this.shape_5.setTransform(492.95,30.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3CFF").s().p("AhIBaQgWgVgCghIA/gDQACAPAGAIQAKANASAAQAPAAAHgHQAIgGAAgJQAAgIgHgHQgIgGgZgHQgsgJgTgQQgSgQAAgZQAAgRAJgPQAKgOATgIQATgJAhAAQApAAAWAQQAVAPAEAhIg+AEQgDgOgIgHQgIgHgNAAQgLAAgGAFQgGAFAAAHQAAAFAFAEQAFAEARAEQArAJATAKQASAJAJAOQAIAOAAARQAAAVgLASQgLARgVAJQgUAJggAAQg1AAgVgVg");
	this.shape_6.setTransform(475.425,30.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3CFF").s().p("AgfAeIAAg7IA/AAIAAA7g");
	this.shape_7.setTransform(449.65,38.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF3CFF").s().p("Ag6BFQgTgMgFgWIA7gGQAEALAHAEQAGAFAKAAQAMAAAHgGQAFgDAAgGQAAgGgHgEQgFgCgTgEQgfgGgMgEQgNgFgIgKQgIgLAAgOQAAgPAJgLQAJgLAPgGQAQgFAaAAQAbAAAOAEQANAEAJAJQAIAJAGAPIg4AGQgCgIgGgDQgHgFgJAAQgKAAgEAEQgFADAAAFQAAAGAGADQAGADASACQAeAEAPAGQAOAGAIAKQAIALAAANQAAAOgIAMQgJANgRAIQgSAHgeAAQgpAAgSgMg");
	this.shape_8.setTransform(435.325,33.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF3CFF").s().p("ABDBrIAAijIgrCjIgvAAIgrijIAACjIg2AAIAAjVIBYAAIAgCBIAhiBIBYAAIAADVg");
	this.shape_9.setTransform(412.2,30.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnAuQgMgIgDgPIAngEQADAHAFADQADADAHAAQAIAAAEgDQAEgDAAgDQAAgFgFgCIgQgEQgVgEgIgDQgHgDgGgGQgFgIgBgJQAAgKAHgIQAFgHALgEQAKgDARAAQATAAAIADQAJACAGAGQAGAGADAKIglAEQgCgFgDgCQgFgDgFAAQgHAAgDACQgDACAAAEQAAAEAEACQADACANABQATACALAEQAJAEAFAHQAFAHAAAJQAAAJgFAJQgGAIgLAFQgMAFgUAAQgcAAgMgIg");
	this.shape_10.setTransform(276.05,469.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgqBBQgLgKAAgQIAAgFIAmAFQACAFADACQAEADAGAAQAJAAAEgEQAEgFAAgLIAAgQQgGAHgGADQgIAFgKAAQgVAAgNgSQgJgNAAgUQAAgYAMgNQALgNATAAQAMAAAHAEQAIAEAHAJIAAgOIAlAAIAABgIAAAFQAAAJgEAJQgEAJgHAGQgHAFgKADQgLACgOAAQgeAAgMgJgAgMgnQgEAGAAAMQAAAMAEAFQAFAEAHABQAHAAAFgFQAFgFAAgMQAAgLgFgGQgFgGgHAAQgHAAgFAFg");
	this.shape_11.setTransform(263.125,471.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggAwQgMgGgHgMQgIgNAAgRQAAgXAQgPQAPgPAcAAQAVAAANAGQAMAHAIANQAGANAAATIAAAFIhOAAQABAJADAFQAHAHAIAAQAFAAAGgDIAHgHIAnAEQgJAQgNAGQgNAHgXAAQgUAAgMgGgAgOgWQgEAEAAAKIAlAAQAAgMgGgFQgFgFgHAAQgJAAgGAIg");
	this.shape_12.setTransform(250.05,469.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag4BIIAAiOIAtAAIAABqIBEAAIAAAkg");
	this.shape_13.setTransform(237.125,467.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbBKIAjiTIAUAAIgjCTg");
	this.shape_14.setTransform(227.25,467.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgnAuQgMgIgDgPIAogEQACAHAFADQAEADAGAAQAIAAAEgDQAEgDAAgDQAAgFgFgCIgQgEQgUgEgJgDQgIgDgFgGQgFgIAAgJQgBgKAHgIQAGgHAJgEQALgDARAAQASAAAJADQAJACAGAGQAGAGADAKIglAEQgCgFgDgCQgFgDgFAAQgHAAgDACQgDACAAAEQAAAEAEACQAEACAMABQAUACAJAEQAKAEAFAHQAFAHAAAJQAAAJgFAJQgFAIgMAFQgMAFgUAAQgbAAgNgIg");
	this.shape_15.setTransform(218.25,469.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAwA1IAAg6QAAgHgDgEQgEgFgGAAQgGAAgFAFQgFAFAAALIAAA1IgmAAIAAg4IgBgJQgBgFgEgCQgDgCgDAAQgIAAgEAFQgEAFAAALIAAA1IgoAAIAAhmIAlAAIAAAOQAIgJAIgEQAIgEAMAAQAMAAAHAFQAGAEAFAIQAJgJAIgEQAIgEALAAQARAAAJAKQAKAKAAAVIAABAg");
	this.shape_16.setTransform(202.3,469.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoA1IAAhmIAlAAIAAARQAFgMAFgEQAGgEAJAAQAIAAALAGIgNAbQgHgCgEAAQgHAAgFAHQgFAIAAAYIAAAjg");
	this.shape_17.setTransform(188.675,469.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAgBIIgIgYIgxAAIgHAYIgtAAIA2iOIAvAAIA2COgAgPARIAeAAIgPgyg");
	this.shape_18.setTransform(175.625,467.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmAuQgMgIgEgPIAngEQADAHAFADQADADAHAAQAIAAAFgDQADgDAAgDQAAgFgEgCIgRgEQgUgEgJgDQgHgDgGgGQgGgIAAgJQABgKAFgIQAGgHALgEQAKgDARAAQATAAAIADQAJACAGAGQAGAGAEAKIgmAEQgBgFgEgCQgEgDgGAAQgHAAgDACQgDACAAAEQAAAEAEACQADACANABQAUACAKAEQAJAEAFAHQAFAHAAAJQAAAJgFAJQgFAIgMAFQgMAFgUAAQgcAAgLgIg");
	this.shape_19.setTransform(552.55,394.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAPBIIAAg6QAAgJgEgEQgDgDgHgBQgGAAgEAFQgFAFAAAOIAAAzIgoAAIAAiOIAoAAIAAA0QAIgIAHgEQAIgDALgBQAQAAAKAKQAJAKAAATIAABDg");
	this.shape_20.setTransform(539.875,392.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKBFQgGgEgEgIQgEgIABgRIAAgjIgPAAIAAgdIAPAAIAAgUIAmgUIAAAoIAXAAIAAAdIgXAAIAAAjQAAAHABACQACADAFAAQAFAAAIgCIADAbQgPAEgMAAQgOAAgIgEg");
	this.shape_21.setTransform(528.75,392.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgsArQgKgKAAgUIAAhBIAoAAIAAA4QAAAKADADQAEAFAHAAQAGAAAFgGQAEgFAAgNIAAgyIAoAAIAABnIglAAIAAgRQgIAKgJAFQgHAEgNAAQgQAAgJgKg");
	this.shape_22.setTransform(517.6,394.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_23.setTransform(504.275,394.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAsBIIAAhsIgcBsIgfAAIgchsIAABsIglAAIAAiOIA7AAIAVBWIAXhWIA5AAIAACOg");
	this.shape_24.setTransform(488.15,392.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgmAuQgNgIgDgPIAogEQACAHAEADQAFADAGAAQAIAAAEgDQAEgDAAgDQAAgFgEgCIgRgEQgVgEgHgDQgJgDgFgGQgGgIABgJQAAgKAFgIQAHgHAJgEQALgDARAAQASAAAJADQAJACAGAGQAGAGADAKIglAEQgCgFgDgCQgFgDgFAAQgHAAgDACQgDACAAAEQAAAEAEACQADACANABQATACAKAEQAKAEAFAHQAFAHAAAJQAAAJgFAJQgGAIgLAFQgMAFgUAAQgbAAgMgIg");
	this.shape_25.setTransform(540.7,310.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AggAwQgMgGgHgMQgIgNAAgRQAAgXAQgPQAPgPAcAAQAVAAANAGQAMAHAIANQAGANAAATIAAAFIhOAAQABAJADAFQAHAHAIAAQAFAAAGgDIAHgHIAnAEQgJAQgNAGQgNAHgXAAQgUAAgMgGgAgOgWQgEAEAAAKIAmAAQgBgMgGgFQgFgFgHAAQgJAAgGAIg");
	this.shape_26.setTransform(528.05,310.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgmAuQgNgIgDgPIAogEQACAHAEADQAFADAGAAQAIAAAEgDQAEgDAAgDQAAgFgFgCIgQgEQgVgEgHgDQgJgDgFgGQgGgIABgJQAAgKAFgIQAGgHAKgEQALgDARAAQASAAAJADQAJACAGAGQAGAGADAKIglAEQgCgFgDgCQgEgDgGAAQgHAAgDACQgDACAAAEQAAAEAEACQAEACAMABQAUACAJAEQAKAEAFAHQAFAHAAAJQAAAJgFAJQgGAIgLAFQgMAFgUAAQgbAAgMgIg");
	this.shape_27.setTransform(515.15,310.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_28.setTransform(502.475,310.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAaBHIg0hNIAABNIgpAAIAAiOIApAAIA0BPIAAhPIArAAIAACOg");
	this.shape_29.setTransform(487.5,308.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgmAuQgMgIgEgPIAngEQADAHAEADQAEADAHAAQAIAAAFgDQADgDAAgDQAAgFgEgCIgRgEQgUgEgJgDQgHgDgGgGQgGgIAAgJQABgKAFgIQAGgHALgEQAKgDARAAQATAAAIADQAJACAGAGQAGAGAEAKIgmAEQgBgFgEgCQgEgDgGAAQgHAAgDACQgDACAAAEQAAAEAEACQADACANABQAUACAKAEQAJAEAFAHQAFAHAAAJQAAAJgFAJQgFAIgMAFQgMAFgUAAQgcAAgLgIg");
	this.shape_30.setTransform(530.95,80.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAPgPQAQgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhPAAQABAJAFAFQAGAHAHAAQAHAAAFgDIAGgHIAoAEQgJAQgNAGQgMAHgYAAQgUAAgLgGgAgOgWQgEAEgBAKIAnAAQgCgMgEgFQgGgFgIAAQgIAAgGAIg");
	this.shape_31.setTransform(518.3,80.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgzBGIgDgbQAIACALAAQAHAAAEgDQAEgDADgIIgrhnIAqAAIAUBFIAUhFIAnAAIgpBuQgHATgHAGQgKAKgVAAQgIAAgSgDg");
	this.shape_32.setTransform(505.575,82.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag8BHIAAiOIB2AAIAAAfIhJAAIAAAWIBDAAIAAAdIhDAAIAAAcIBMAAIAAAgg");
	this.shape_33.setTransform(492.45,78.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgmAuQgNgIgDgPIAogEQACAHAEADQAFADAGAAQAIAAAEgDQAEgDAAgDQAAgFgEgCIgRgEQgVgEgHgDQgJgDgFgGQgGgIABgJQAAgKAFgIQAGgHAKgEQALgDARAAQASAAAJADQAJACAGAGQAGAGADAKIglAEQgCgFgDgCQgFgDgFAAQgHAAgDACQgDACAAAEQAAAEAEACQADACANABQATACAKAEQAKAEAFAHQAFAHAAAJQAAAJgFAJQgGAIgLAFQgMAFgUAAQgbAAgMgIg");
	this.shape_34.setTransform(713.95,445.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AggAwQgMgGgHgMQgIgNAAgRQAAgXAQgPQAPgPAcAAQAVAAANAGQAMAHAIANQAGANAAATIAAAFIhOAAQABAJADAFQAHAHAIAAQAFAAAGgDIAHgHIAnAEQgJAQgNAGQgNAHgXAAQgUAAgMgGgAgOgWQgEAEAAAKIAmAAQgBgMgGgFQgFgFgHAAQgJAAgGAIg");
	this.shape_35.setTransform(701.3,445.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAQBIIgUgqIgPAPIAAAbIgpAAIAAiOIApAAIAABJIAdgiIAxAAIgmAjIAoBEg");
	this.shape_36.setTransform(688.525,443.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTBIIAAhnIAnAAIAABngAgTgrIAAgbIAnAAIAAAbg");
	this.shape_37.setTransform(677.925,443.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_38.setTransform(668.175,447.175);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgwA8QgOgOgCgWIAqgDQABALAEAFQAIAJALAAQAKAAAFgFQAFgEAAgGQAAgFgFgFQgFgEgQgEQgegHgMgKQgMgLAAgQQgBgLAHgKQAGgKANgGQANgFAVAAQAbAAAPAKQAOAKADAWIgqADQgBgJgGgFQgFgFgIAAQgIAAgEAEQgEADAAAFQAAADADADQAEADALACQAcAGANAHQANAGAFAIQAGAKAAAMQAAANgIAMQgIAMgNAGQgOAGgVAAQgjAAgOgOg");
	this.shape_39.setTransform(654,443.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgbBKIAjiTIAUAAIgjCTg");
	this.shape_40.setTransform(644.05,443.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgnAuQgMgIgDgPIAogEQACAHAFADQAEADAGAAQAIAAAEgDQAEgDAAgDQAAgFgFgCIgQgEQgVgEgIgDQgHgDgGgGQgFgIAAgJQgBgKAHgIQAGgHAJgEQALgDARAAQASAAAJADQAJACAGAGQAGAGADAKIglAEQgBgFgEgCQgFgDgFAAQgHAAgDACQgDACAAAEQAAAEAEACQADACANABQATACALAEQAJAEAFAHQAFAHAAAJQAAAJgFAJQgGAIgLAFQgMAFgUAAQgcAAgMgIg");
	this.shape_41.setTransform(635.05,445.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgoA1IAAhmIAlAAIAAAQQAFgLAFgEQAGgEAJAAQAIAAALAGIgNAcQgHgDgEAAQgHAAgFAGQgFAKAAAXIAAAjg");
	this.shape_42.setTransform(625.475,445.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_43.setTransform(613.475,445.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag7BIIAAiOIB1AAIAAAeIhJAAIAAAXIBDAAIAAAcIhDAAIAAAcIBLAAIAAAhg");
	this.shape_44.setTransform(599.85,443.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgmAuQgMgIgEgPIAngEQADAHAEADQAEADAHAAQAIAAAFgDQADgDAAgDQAAgFgEgCIgRgEQgUgEgJgDQgHgDgGgGQgGgIAAgJQABgKAFgIQAGgHALgEQAKgDARAAQATAAAIADQAJACAGAGQAGAGAEAKIgmAEQgBgFgEgCQgEgDgGAAQgHAAgDACQgDACAAAEQAAAEAEACQADACANABQATACALAEQAJAEAFAHQAFAHAAAJQAAAJgFAJQgFAIgMAFQgMAFgUAAQgcAAgLgIg");
	this.shape_45.setTransform(838.75,68.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgoA1IAAhmIAlAAIAAARQAFgMAFgEQAGgEAJAAQAIAAALAFIgNAcQgHgCgEAAQgHAAgFAHQgFAIAAAYIAAAjg");
	this.shape_46.setTransform(829.175,68.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_47.setTransform(817.175,68.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgTBIIAAiOIAnAAIAACOg");
	this.shape_48.setTransform(807.175,66.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_49.setTransform(797.175,68.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggBDQgPgHgLgQQgLgSAAgaQABgjASgTQAUgTAhAAQAbAAAQALQAPALAHAXIgnAIQgCgGgCgEQgEgEgFgDQgFgDgHAAQgOAAgIAMQgGAJAAATQAAAXAHAJQAIAJALgBQANAAAGgGQAHgIADgNIAnAMQgEAQgJALQgIALgMAFQgNAGgTAAQgXAAgOgHg");
	this.shape_50.setTransform(782.85,66.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF6CFF").s().p("AgmAuQgMgIgEgPIAngEQADAHAEADQAEADAHAAQAIAAAFgDQADgDAAgDQAAgFgEgCIgRgEQgUgEgIgDQgJgDgFgGQgGgIAAgJQABgKAFgIQAHgHAKgEQAKgDARAAQASAAAJADQAJACAGAGQAGAGAEAKIgmAEQgBgFgEgCQgFgDgFAAQgHAAgDACQgDACAAAEQAAAEAEACQAEACAMABQAUACAJAEQAKAEAFAHQAFAHAAAJQAAAJgFAJQgFAIgMAFQgMAFgUAAQgbAAgMgIg");
	this.shape_51.setTransform(95.9,85.275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF6CFF").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAQgPQAPgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhPAAQACAJAEAFQAFAHAJAAQAGAAAFgDIAHgHIAnAEQgJAQgNAGQgMAHgYAAQgUAAgLgGgAgOgWQgEAEgBAKIAnAAQgCgMgFgFQgEgFgIAAQgJAAgGAIg");
	this.shape_52.setTransform(83.25,85.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF6CFF").s().p("AgoA1IAAhnIAlAAIAAASQAFgMAFgEQAGgEAJAAQAIAAALAFIgNAcQgHgCgEAAQgHAAgFAHQgFAJAAAXIAAAjg");
	this.shape_53.setTransform(72.975,85.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF6CFF").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_54.setTransform(60.975,85.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF6CFF").s().p("AgTBHIAAiOIAnAAIAACOg");
	this.shape_55.setTransform(50.975,83.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF6CFF").s().p("Ag1BHIAAiOIBsAAIAAAfIhAAAIAAAZIA2AAIAAAcIg2AAIAAA6g");
	this.shape_56.setTransform(41.25,83.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF6CFF").s().p("AgUAUIAAgnIApAAIAAAng");
	this.shape_57.setTransform(24.325,88.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF6CFF").s().p("AgVBHIAAg8Ig4hSIAyAAIAbAwIAdgwIAxAAIg4BSIAAA8g");
	this.shape_58.setTransform(13.25,83.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF6CFF").s().p("Ag7BJQADgSAKgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgHAAgEAFQgFAFgCAMIgogDQACgRAHgJQAGgKAMgFQALgFATAAQAVAAAMAFQAMAFAGAKQAHAKAAAMQAAANgIAMQgHALgVAOIgQAMIgIAIIA9AAIAAAhg");
	this.shape_59.setTransform(103.1,52.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF6CFF").s().p("Ag7BJQACgSALgPQAKgQAdgVQAQgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgGAAgFAFQgGAFgBAMIgogDQACgRAHgJQAGgKALgFQAMgFATAAQAVAAALAFQANAFAGAKQAGAKAAAMQAAANgHAMQgIALgUAOIgQAMIgJAIIA9AAIAAAhg");
	this.shape_60.setTransform(89.75,52.975);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF6CFF").s().p("AgcBEQgLgGgHgLQgGgHgCgOQgDgOAAgQQAAgpAOgQQAPgQAdAAQAPAAAJAEQAJADAGAGQAGAGAEAGQADAGABAJQAEAQABARQAAAmgOASQgNASggAAQgRAAgLgGgAgOglQgEAKAAAbQAAAbAFAKQAFAKAIAAQAGAAAEgFQAFgDACgKQACgJAAgTQAAgcgEgKQgGgKgJAAQgJABgFAJg");
	this.shape_61.setTransform(76.55,53.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF6CFF").s().p("Ag7BJQADgSAKgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgHAAgEAFQgFAFgCAMIgogDQACgRAHgJQAGgKAMgFQALgFATAAQAVAAAMAFQAMAFAGAKQAHAKAAAMQAAANgIAMQgHALgVAOIgQAMIgIAIIA9AAIAAAhg");
	this.shape_62.setTransform(63.05,52.975);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF6CFF").s().p("AgzBGIgDgbQAIACALAAQAHAAAEgDQAEgDADgIIgrhnIAqAAIAUBFIAUhFIAnAAIgpBuQgHATgHAGQgKAKgVAAQgIAAgSgDg");
	this.shape_63.setTransform(43.875,57.175);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF6CFF").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_64.setTransform(31.025,55.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF6CFF").s().p("AAtBHIAAhsIgcBsIghAAIgbhsIAABsIglAAIAAiNIA7AAIAVBVIAXhVIA5AAIAACNg");
	this.shape_65.setTransform(14.9,53.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF6CFF").s().p("AgJBFQgIgEgDgIQgDgIgBgRIAAgjIgOAAIAAgdIAOAAIAAgUIAngUIAAAoIAXAAIAAAdIgXAAIAAAjQAAAHACACQACADAEAAQAFAAAIgCIADAbQgPAEgMAAQgPAAgGgEg");
	this.shape_66.setTransform(103.25,23.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF6CFF").s().p("AgoA1IAAhmIAlAAIAAARQAFgMAFgEQAGgEAJAAQAIAAALAFIgNAcQgHgCgEAAQgHAAgFAHQgFAIAAAYIAAAjg");
	this.shape_67.setTransform(95.225,24.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF6CFF").s().p("AAgBIIgIgYIgxAAIgHAYIgtAAIA2iOIAvAAIA2COgAgPARIAeAAIgPgzg");
	this.shape_68.setTransform(82.175,22.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF6CFF").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_69.setTransform(61.275,26.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF6CFF").s().p("AAwA1IAAg6QAAgHgDgDQgEgGgGAAQgGAAgFAFQgEAGgBAKIAAA1IgmAAIAAg4IgBgKQgBgEgEgCQgCgCgFAAQgGAAgFAFQgFAGAAAKIAAA1IgnAAIAAhmIAlAAIAAAPQAIgKAIgEQAIgEAMAAQANAAAFAEQAHAEAGAKQAIgLAJgEQAHgDAMAAQAQAAAKAKQAJAKAAAVIAABAg");
	this.shape_70.setTransform(44.4,24.75);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF6CFF").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_71.setTransform(27.675,24.875);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF6CFF").s().p("AggBDQgPgHgLgQQgLgSAAgaQABgjASgTQAUgTAhAAQAbAAAQALQAPALAHAXIgnAIQgCgGgCgDQgDgGgGgCQgGgDgGAAQgOAAgIAMQgGAJAAATQAAAXAHAJQAIAJALgBQANAAAGgGQAHgIADgNIAnAMQgEAQgJALQgIALgMAGQgNAFgTAAQgXAAgOgHg");
	this.shape_72.setTransform(13.35,22.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(8,1,1).p("AzxzxMAnjAAAMAAAAnjMgnjAAAg");
	this.shape_73.setTransform(220.825,297.875);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AzxTyMAAAgnjMAnjAAAMAAAAnjg");
	this.shape_74.setTransform(220.825,297.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Back
	this.Reset = new lib.tubeflatsteelreset();
	this.Reset.name = "Reset";
	this.Reset.setTransform(288.45,594.95);
	new cjs.ButtonHelper(this.Reset, 0, 1, 2, false, new lib.tubeflatsteelreset(), 3);

	this.Face1 = new lib.tubeflatsteel();
	this.Face1.name = "Face1";
	this.Face1.setTransform(79.55,594.95);
	new cjs.ButtonHelper(this.Face1, 0, 1, 2, false, new lib.tubeflatsteel(), 3);

	this.Face2 = new lib.tubeflatpink();
	this.Face2.name = "Face2";
	this.Face2.setTransform(184,594.95);
	new cjs.ButtonHelper(this.Face2, 0, 1, 2, false, new lib.tubeflatpink(), 3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FF33FF").ss(3,1,1).p("EhK/gx/MCV/AAAMAAABj/MiV/AAAg");
	this.shape_75.setTransform(480,320);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFEAFE").s().p("EhK/AyAMAAAhj/MCV/AAAMAAABj/g");
	this.shape_76.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.Face2},{t:this.Face1},{t:this.Reset}]}).wait(1));
	this.Reset.addEventListener("tick", AdobeAn.handleFilterCache);
	this.Face1.addEventListener("tick", AdobeAn.handleFilterCache);
	this.Face2.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(478.5,318.5,483,323);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFEAFE",
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