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


(lib.winkingeyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACGgPQAPgtAlglQA/g/BZAAQBDAAA1AkQARAMAPAPQAcAcAQAiQAEAKAEAKAkUAUQAAATgJARQgFAJgIAIQgWAWgfAAQgfAAgWgWQgIgIgGgJQgIgRAAgTQAAgeAWgWQAWgWAfAAQAfAAAWAWQAWAWAAAegAhvAAQAABZg/A/Qg/A/hZAAQhZAAg/g/Qg/g/AAhZQAAhYA/g/QA/g/BZAAQBZAAA/A/QA/A/AABYg");
	this.shape.setTransform(54.225,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0A1QgIgIgGgJQgIgRAAgTQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAATgJARQgFAJgIAIQgWAWgfAAQgeAAgWgWg");
	this.shape_1.setTransform(19,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/gAhNggQgWAWAAAeQAAATAIARQAGAJAIAIQAWAWAfAAQAeAAAWgWQAIgIAFgJQAJgRAAgTQAAgegWgWQgWgWgeAAQgfAAgWAWg");
	this.shape_2.setTransform(21.5,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.winkingeyes, new cjs.Rectangle(-1,-1,110.5,45), null);


(lib.sunglasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AhEgFICJAL");
	this.shape.setTransform(58.925,26.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AJNAAQAABshMBMQhMBMhsAAQhrAAhNhMQhIhJgEhkQAAgFAAgGQAAhrBMhMQBNhMBrAAQBsAABMBMQBMBMAABrgAlBkDQBnACBKBKQBMBMAABrQAABshMBMQhNBMhrAAQhsAAhMhMQhMhMAAhsQAAhrBMhMQBKhKBngC");
	this.shape_1.setTransform(58.9,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FF0000"],[0,0.165,0.365,0.498,0.667,0.831,1],-26,0,26,0).s().p("Ai3C4QhMhNAAhrQAAhqBMhNQBKhKBogCIAMAAQBnACBKBKQBMBNAABqQAABrhMBNQhNBMhrAAQhqAAhNhMg");
	this.shape_2.setTransform(26,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FF0000"],[0,0.165,0.365,0.498,0.667,0.831,1],-26,0,26,0).s().p("Ai3C4QhIhJgDhkIgBgLQAAhqBMhNQBMhMBrAAQBrAABNBMQBMBNAABqQAABrhMBNQhNBMhrAAQhrAAhMhMg");
	this.shape_3.setTransform(91.8,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sunglasses, new cjs.Rectangle(-1,-1,119.8,54), null);


(lib.smilewithtounge = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFEjwQgaAzgsAsQgLAMgNAKQgeAZgfASQgwAZg2AJIAfBqAAAgoIANA1QAGAZAHAWQAKAjAMAdQAeBKAfAbQAiAeAjgaQACgCADgCQA7gwgXh1QgCgIgDgIQgKgrgTgsIgQglABDguQggAGgjAAQhzAAhZg/QgagTgYgXQgrgsgagz");
	this.shape.setTransform(32.35,24.084);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smilewithtounge, new cjs.Rectangle(-1,-1,66.7,50.2), null);


(lib.smilewithteeth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFYhFQgaBQg/BAQhSBRhrATQggAFgiAAQghAAgggFQhrgThShRQhDhDgYhUQgOgxAAg2ILPAAQAAA6gQA0gAlZhMIKxAH");
	this.shape.setTransform(36,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smilewithteeth, new cjs.Rectangle(-1,-1,74,38), null);


(lib.smile = function(mode,startPosition,loop,reversed) {
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


(lib.rightlegfoot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AEeEUQAAACAAADQAAABAAACQAAADAAAEQgIAqhMAeQgUAJgXAGQhGAThZAAQgbAAgZgBQg6gFgxgNQgWgHgVgIQhTgiAAgwQAAgxBTgiQBBgaBVgGQAZgCAbAAQB3AABTAiQBQAhAEAtgAEVmMIAJKg");
	this.shape.setTransform(28.6,39.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("Ag0BzQg6gEgwgOQgXgGgUgJQhUgiAAgwQAAgvBUgiQBAgaBVgHQAagBAaAAQB3gBBTAjQBQAgAEAtIAAAEIAAADIgBAHQgIAqhLAeQgUAJgXAGQhGAUhZAAQgagBgagBg");
	this.shape_1.setTransform(28.6,67.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightlegfoot, new cjs.Rectangle(-1,-1,59.2,81.5), null);


(lib.rightarm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApckwQAFgRAJgXQADgHADgIQASgrAWghQACgDACgDQAIgMAJgLQAFgFAEgFQAMgNAMgJQBGg4BPA4QAOAJAOANQACACACACQAMAMANAOQA9BHALAdQALAig2gTQgQgFgVgKQgVgKgagOIgtgaIAUBGIBQBGIAZA1QAFAjhkhYQhPhFgwgVQgNgFgKgCQgQgDgJAFIgFAFICtCBQCRBxiUhSQh2hBg+geQgQgIgNgGgAJdINQmYjPoBBxQhwAYh0AoIg8sf");
	this.shape.setTransform(60.5,52.5125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightarm, new cjs.Rectangle(-1,-1,123,107), null);


(lib.redbeenie = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlnCmQAThOAkhgQBHjBBQhhQBxiIBzBOQCQBhCNGpIisAAIgNDVIC5gDIAAjSAALCmIiyAAIiWAAIgqAAIAADcIA8gBICUgCICOgCIC4gCAk9CmIASDbAiXF/IgQjZAALCmIgUDXAC8CmIixAA");
	this.shape.setTransform(39,38.5401);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCCC").s().p("AgEAAQAAgDAJgCIAAALQgJgDAAgDg");
	this.shape_1.setTransform(0.5,67.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AlnCmIAqAAIgqAAQAUhOAjhgQBHjBBRhhQBwiIByBOQCRBhCNGpIisAAIixAAIiyAAIAQDZIiUACIgSjbICWAAIiWAAIASDbIg8ABgAinCmICyAAIgUDXIiOACgAgJF9IAUjXICxAAIgNDVIi4ACgAC8CmICsAAIAADSIi5ADgAFoCmgAinCmgAk9Cmg");
	this.shape_2.setTransform(39,38.5401);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redbeenie, new cjs.Rectangle(0,-1,76,79.1), null);


(lib.readingglasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABGAAIAABaIEiAAIAAizIkiAAgABxgpIDXAAIAABmIjXAAgAlEguIDhAAIAABoIjhAAgAhFAAIAAhZIkiAAIAACzIEiAAIAAhaICLAA");
	this.shape.setTransform(36,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AE7AAIAhAAAk9ABIgeAA");
	this.shape_1.setTransform(36,2.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABvA2IAAhmIDXAAIAABmgAlFAzIAAhoIDhAAIAABog");
	this.shape_2.setTransform(36.125,9.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ABGBaIAAhaIAAhZIEiAAIAACzgABxA8IDXAAIAAhlIjXAAgAFbhEIggAAgAlnBaIAAizIEiAAIAABZIAABagAlEA6IDhAAIAAhoIjhAAgAk9hCIgdAAg");
	this.shape_3.setTransform(36,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.readingglasses, new cjs.Rectangle(-1,-1,74,20), null);


(lib.partyhat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ai/AsIDGnKIFaM1AFhGfIrBAAICJk8");
	this.shape.setTransform(35.325,41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("AgxAxQgUgUAAgdQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVg");
	this.shape_1.setTransform(56,69.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	this.shape_2.setTransform(20.7,69.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC99FF").s().p("AgwAyQgVgVAAgdQAAgcAVgUQAUgVAcAAQAdAAAVAVQAUAUAAAcQAAAdgUAVQgVAUgdAAQgcAAgUgUg");
	this.shape_3.setTransform(34.7,65.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF66FF").s().p("AgwAyQgVgVAAgdQAAgcAVgUQAUgVAcAAQAdAAAVAVQAUAUAAAcQAAAdgUAVQgVAUgdAAQgcAAgUgUg");
	this.shape_4.setTransform(34.7,30.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6633").s().p("AgwAxQgUgTgBgcIAAgCQAAgcAVgVIADgDQATgRAaAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	this.shape_5.setTransform(20.7,51.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#99FF99").s().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVg");
	this.shape_6.setTransform(42.2,51.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.partyhat, new cjs.Rectangle(-1,-1,72.7,85), null);


(lib.openeyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFpA0QAAATgIARQgGAJgIAIQgWAWgfAAQgfAAgWgWQgIgIgFgJQgJgRAAgTQAAgfAWgVQAWgWAfAAQAfAAAWAWQAWAVAAAfgAIMAAQAABchCBBQhBBChcAAQhcAAhBhCQhBhBAAhcQAAhbBBhCQBBhBBcAAQBcAABBBBQBCBCAABbgAhOAAQAABchBBBQhBBChcAAQhcAAhChCQhBhBAAhcQAAhbBBhCQBChBBcAAQBcAABBBBQBBBCAABbgAibA2QAAAfgWAXQgXAWgfAAQggAAgWgWQgXgXAAgfQAAggAXgWQAWgWAgAAQAfAAAXAWQAWAWAAAgg");
	this.shape.setTransform(52.375,22.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ak3A2QgXgXAAgfQAAgfAXgWQAWgWAgAAQAfAAAXAWQAWAWAAAfQAAAfgWAXQgXAWgfABQgggBgWgWgADPA0QgIgJgGgJQgIgQAAgTQAAgeAWgXQAWgWAfABQAfgBAWAWQAWAXAAAeQAAATgIAQQgGAJgIAJQgWAWgfgBQgfABgWgWg");
	this.shape_1.setTransform(55,27.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACQCdQhBhBAAhcQAAhbBBhCQBBhBBcAAQBcAABBBBQBCBCAABbQAABchCBBQhBBChcgBQhcABhBhCgADpAAQgWAVAAAfQAAATAJAQQAFAKAIAIQAWAWAfAAQAfAAAWgWQAIgIAGgKQAIgQAAgTQAAgfgWgVQgWgWgfAAQgfAAgWAWgAnKCdQhBhBAAhcQAAhbBBhCQBChBBcAAQBcAABBBBQBBBCAABbQAABchBBBQhBBChcgBQhcABhChCgAkdAAQgXAWAAAgQAAAfAXAXQAWAWAgAAQAfAAAXgWQAWgXAAgfQAAgggWgWQgXgWgfAAQggAAgWAWg");
	this.shape_2.setTransform(52.375,22.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.openeyes, new cjs.Rectangle(-1,-1,106.8,46.5), null);


(lib.leftlegfoot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AkdEUQAAACAAADQAAABAAACQAAADAAAEQAIAqBMAeQAGADAHACQBPAdBtAAQAcAAAZgBQBMgGA8gWQAHgCAHgDQBTgiAAgwQAAgxhTgiQhBgahVgGQgZgCgcAAQh2AAhTAiQhQAhgEAtgAkUmMIgJKg");
	this.shape.setTransform(28.6,39.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("Ai8BYIgNgGQhLgegIgqIgBgHIAAgDIAAgEQAEgtBQggQBUgjB1ABQAcAAAZABQBVAHBBAaQBTAiAAAvQAAAwhTAiIgOAGQg8AVhMAGQgZABgcABQhsAAhQgdg");
	this.shape_1.setTransform(28.6,67.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftlegfoot, new cjs.Rectangle(-1,-1,59.2,81.5), null);


(lib.leftarm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJdkwQgFgRgJgXQgDgHgDgIQgBgBAAgBQgHgRgIgQQgLgWgNgTQgCgDgCgDQgBgBAAAAQgIgMgIgKQgFgFgEgFQgEgEgDgDQgFgFgFgFQgDgDgEgCQgKgIgLgGQgygcg3AcQgMAGgLAIQgEACgEADQgGAFgFAFQgFADgEAEQgCACgCACQgMAMgNAOQAAABgBABQgYAbgQAVQgYAhgHARQgLAiA2gTQAQgFAVgKQAVgKAagOIAtgaIgUBGIhQBGIgZA1QgDAXAsggQAWgPAggdQBPhFAwgVQANgFAKgCQAQgDAJAFIAFAFIitCBQgEADgDACQiHBqCRhQQAZgOAXgMQBTgtAxgYQAQgIANgGgApcINQAJgFAJgEQAEgCAEgCQAGgDAHgDQAhgQAjgNQAWgJAXgIQDJhGDhABQD0ABEQBVQAbAIAcAKIA8sf");
	this.shape.setTransform(60.5,52.5125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftarm, new cjs.Rectangle(-1,-1,123,107), null);


(lib.goldchain = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ACwkMQAAA+gPAsQgOAsgUAAQgUAAgOgsQgKgfgDgqQgBgJAAgKQgBgHAAgHQAAg/APgsQAHgXAKgLQAHgJAJgBIACAAQAJABAIAJQAIALAIAXQAPAsAAA/gAhOjhQAAA8gOArQgOAqgUAAQgUAAgPgqQgOgrAAg8QAAg9AOgqQAPgrAUAAQAUAAAOArQAOAqAAA9gAgdBFQAAA/gPAsQgOAsgUAAQgUAAgOgsQgOgsAAg/QAAg+AOgrQAOgsAUAAQAUAAAOAsQAPArAAA+gACDAgQAAA+gPAsQgOAsgUAAQgUAAgOgsQgPgsAAg+QAAg+APgsQAOgsAUAAQAUAAAOAsQAPAsAAA+gABOEZQAAAkgHAdQgFARgHAQQgGAPgJAKQgFAGgFADQgJAHgLAAQgKAAgJgHQgFgDgFgGQgIgKgHgPQgHgQgEgRQgIgdAAgkQAAg6ATgpQATgoAZAAQAbAAASAoQATApAAA6g");
	this.shape.setTransform(17.55,41.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("AgEGdQgGgDgEgGQgJgKgHgPQgHgQgEgRQgHgdgBgkQAAg6ATgpQATgoAZAAQAbAAASAoQAUApgBA6QABAkgIAdQgEARgIAQQgGAPgJAKQgEAGgGADQgJAHgLAAQgKAAgIgHgAhwCwQgOgsAAg/QAAg+AOgrQAPgsAUAAQAUAAAOAsQAOArAAA+QAAA/gOAsQgOAsgUAAQgUAAgPgsgAAwCKQgOgsgBg+QABg+AOgsQAOgsAUAAQAUAAAOAsQAOAsABA+QgBA+gOAsQgOAsgUAAQgUAAgOgsgAigh6QgOgrgBg8QABg9AOgqQAOgrAUAAQAUAAAOArQAPAqAAA9QAAA8gPArQgOAqgUAAQgUAAgOgqgABdiiQgKgfgEgqIAAgTIgBgOQABg/AOgsQAHgXAKgLQAHgJAKgBIABAAQAJABAIAJQAIALAIAXQAOAsAAA/QAAA+gOAsQgOAsgUAAQgUAAgOgsg");
	this.shape_1.setTransform(17.55,41.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.goldchain, new cjs.Rectangle(-1,-1,37.1,86), null);


(lib.frown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlnC+QAAgBAAgBQAAgJAAgJQAAhXAkhJQAXgsAkgnQAFgFAFgGQBKhKBfgWQAqgJArAAQAtAAAoAJQBfAWBLBKQBiBiAHCHQAAALAAAKQAAAJAAAJQAAABAAAB");
	this.shape.setTransform(36,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frown, new cjs.Rectangle(-1,-1,74,40), null);


(lib.eyebrows = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA7BkIAAjHILkAAIC0C9Ql/iroZC1gAg6BkIAAjHIrkAAIi0C9QBbgpBjgVQFAhCGaCKg");
	this.shape.setTransform(97.875,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA7hjILkAAIC0C9Ql/iroZC1gAsUAdQhjAUhbApIC0i9ILkAAIAADHQmaiKlABDg");
	this.shape_1.setTransform(97.875,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrows, new cjs.Rectangle(-1,-1,197.8,22), null);


(lib.shadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ArrLAQk3kkAAmcQAAmbE3kkQE2kjG1AAQG3AAE2EjQE2EkAAGbQAAGck2EkQk2Ejm3AAQm1AAk2kjg");
	this.shape.setTransform(0,-0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.949)").s().p("ArxLGQk6kmAAmgQAAmfE6knQE4klG5AAQG6AAE5ElQE5EnAAGfQAAGgk5EmQk5Emm6AAQm5AAk4kmgArrq/Qk3EkAAGbQAAGcE3EkQE1EjG2AAQG3AAE2kjQE2kkAAmcQAAmbk2kkQk2kjm3AAQm2AAk1Ejg");
	this.shape_1.setTransform(0.0125,-0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.749)").s().p("AsKLhQlFkxAAmwQAAmvFFkxQFDkvHHgBQHJABFDEvQFEExAAGvQAAGwlEExQlDEwnJAAQnHAAlDkwgAsEraQlCEvAAGrQAAGsFCEuQFAEtHEABQHFgBFBktQFCkugBmsQABmrlCkvQlBksnFAAQnEAAlAEsg");
	this.shape_2.setTransform(-0.0125,-0.0625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.698)").s().p("AsRLnQlIkzABm0QgBmzFIk0QFGkxHLgBQHMABFGExQFIE0gBGzQABG0lIEzQlGEynMABQnLgBlGkygAsKrgQlGExABGvQgBGwFGExQFCEvHIABQHJgBFDkvQFEkxAAmwQAAmvlEkxQlDkvnJgBQnIABlCEvg");
	this.shape_3.setTransform(0.025,-0.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.647)").s().p("AsXLuQlLk3ABm3QgBm3FLk3QFIkzHPgBQHQABFIEzQFLE3gBG3QABG3lLE3QlIE0nQABQnPgBlIk0gAsRrnQlIE0ABGzQgBG0FIEzQFGEyHLAAQHMAAFGkyQFIkzgBm0QABmzlIk0QlGkxnMgBQnLABlGExg");
	this.shape_4.setTransform(0.0125,-0.0375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.094)").s().p("AtbM3IAAAAQlrlVABniQgBnhFrlWQFklOH3gBQH4ABFlFOIAAAAQFqFWgBHhQABHilqFVQllFPn4ABQn3gBlklPgAtVswQloFTABHdQgBHfFoFRQFiFNHzABQH0gBFilNQFolRgBnfQABndlolTIAAAAQlilMn0gBQnzABliFMg");
	this.shape_5.setTransform(0,-0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.043)").s().p("AthM+IgBgBQltlXABnmQgBnlFtlYQFnlRH7gBQH8ABFnFRQFtFYgBHlQABHmltFXQlnFSn8ABQn6gBlnlRgAAASHQH4gBFllPQFqlVgBniQABnhlqlWIAAAAQlllOn4gBQn3ABlkFOQlrFWABHhQgBHiFrFVIAAAAQFkFPH3ABg");
	this.shape_6.setTransform(0,-0.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.247)").s().p("AtJMjIAAAAQlilMABnXQgBnWFilMQFdlIHsAAQHtAAFdFHIAAABQFiFMgBHWQABHXliFMQldFIntAAQnsAAldlIgAtDscQlfFKABHSQgBHTFfFJIABAAQFaFGHoABQHqgBFalGQFflJgBnTQABnSlflKIAAAAQlblFnpAAQnpAAlaFFg");
	this.shape_7.setTransform(0.0125,-0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.196)").s().p("AtOMqIgBgBQlllOABnbQgBnZFllQQFflKHwgBQHxABFfFKIAAAAQFlFQgBHZQABHbllFPQlfFKnxABQnvgBlflKgAtJsiQliFNABHVQgBHXFiFMIAAAAQFdFIHsABQHtgBFdlIQFilMgBnXQABnVlilNIAAAAQldlIntAAQnsABldFHg");
	this.shape_8.setTransform(0.0125,-0.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.145)").s().p("AtVMwQlolSABneQgBneFolSQFilMHzgBQH0ABFiFMIAAAAQFoFTgBHdQABHeloFSQliFNn0ABQnzgBlilNgAtPspQllFPABHaQgBHaFlFPIABABQFfFKHvAAQHxAAFflKQFllPgBnbQABnalllPIAAAAQlflKnxgBQnvABlgFKg");
	this.shape_9.setTransform(0,-0.0375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.396)").s().p("As2MPQlZlEAAnLQAAnKFZlEQFVlBHhAAQHiAAFVFBQFZFEAAHKQAAHLlZFEQlVFBniAAQnhAAlVlBgAAARHQHfAAFSk+QFWlCAAnHQAAnGlWlCIAAAAQlSk+nfAAQndAAlSE+QlXFCABHGQgBHHFXFCIAAAAQFSE+HdAAg");
	this.shape_10.setTransform(-0.0125,-0.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.345)").s().p("As8MWIAAAAQlclHAAnPQAAnOFclHQFXlDHlAAQHmAAFYFDIAAAAQFcFHgBHOQAAHPlbFHQlYFDnmAAQnlAAlXlDgAs2sOQlaFEABHKQgBHLFaFEQFVFBHhAAQHiAAFVlBQFZlEAAnLQAAnKlZlEQlVlBniAAQnhAAlVFBg");
	this.shape_11.setTransform(0,-0.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.294)").s().p("AtCMcIgBAAQlflJABnTQgBnSFflKQFalFHpAAQHpAAFbFFIAAAAQFfFKgBHSQABHTlfFJQlaFGnqAAQnoAAlalGgAAARZQHmAAFXlDQFclHAAnPQAAnOlblHIgBAAQlXlDnmAAQnlAAlXFDQldFHABHOQgBHPFdFHIAAAAQFXFDHlAAg");
	this.shape_12.setTransform(0.0125,-0.0375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.447)").s().p("AswMJIABAAQlXlCAAnHQAAnGFWlCQFTk+HdAAQHeAAFTE+IAAAAQFWFCAAHGQAAHHlWFCQlSE+nfAAQndAAlTk+gAAAQ+QHbAAFQk8QFTk/AAnDQAAnClTlAIAAAAQlQk7nbAAQnaAAlQE7QlTFAAAHCQAAHDFTE/IAAgBQFQE8HaABg");
	this.shape_13.setTransform(0.0125,-0.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.498)").s().p("AsqMBIAAABQlTk/AAnDQAAnCFTlAQFQk7HaAAQHbAAFQE7IAAAAQFTFAAAHCQAAHDlTE/QlQE7nbABQnagBlQk8gAAAQ1QHXAAFOk6QFQk8gBm/QABm+lQk9IAAAAQlOk5nXAAQnWAAlNE5QlRE8AAG/QAAG/FRE8IAAAAQFNE5HWABg");
	this.shape_14.setTransform(0.0125,-0.0375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.596)").s().p("AsdL1IAAAAQlOk5ABm8QgBm6FOk6QFLk3HSAAQHUABFKE2IABAAQFNE6gBG6QABG8lOE5IABAAQlLE3nUAAQnSAAlLk3gAsWrtQlME3ABG2QgBG4FME2QFHE1HPAAQHQAAFIk1QFLk2gBm4QABm2lLk3QlIk0nQAAQnPAAlHE0g");
	this.shape_15.setTransform(0,-0.0625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.545)").s().p("AsjL7IAAABQlRk8ABnAQgBm+FRk9QFNk5HWAAQHXAAFOE5IAAAAQFQE9gBG+QABHAlQE8QlNE5nYAAQnWAAlNk6gAsdr0QlOE5ABG7QgBG7FOE5IAAABQFLE2HSABQHUgBFLk3IgBAAQFOk5gBm7QABm7lNk5IgBAAQlKk3nUAAQnSAAlLE3g");
	this.shape_16.setTransform(0,-0.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.796)").s().p("AsELaQlCkuAAmsQAAmrFCkvQFAktHEAAQHFAAFBEtQFCEvgBGrQABGslCEuQlBEtnFABQnEgBlAktgAAAP+QHCAAE+kqQE+ksAAmoQAAmnk+ksIgBAAQk+kqnBgBQnAABk+EqQk/EsAAGnQAAGoE/EsIAAAAQE+EqHAAAg");
	this.shape_17.setTransform(0,-0.0375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.898)").s().p("Ar4LNIAAAAQk8kpAAmkQAAmjE8kpQE7koG9AAQG+AAE7EnIAAABQE8EpAAGjQAAGkk8EpQk7Eom+AAQm9AAk7kogArxrGQk6EnAAGfQAAGgE6EmQE4EmG5AAQG6AAE5kmQE5kmAAmgQAAmfk5knQk5klm6AAQm5AAk4Elg");
	this.shape_18.setTransform(0.0125,-0.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.847)").s().p("AAAP+QnAAAk+kqIAAAAQk/ksAAmoQAAmnE/ksQE+kqHAAAQHBAAE+EqIAAAAQE/EsAAGnQAAGok/EsQk+EqnBAAIAAAAgAAAP1QG+AAE7koQE8kpAAmkQAAmjk8kpIAAAAQk7kom+AAQm9AAk7EoQk8EpAAGjQAAGkE8EpIAAAAQE7EoG9AAg");
	this.shape_19.setTransform(0.0125,-0.0625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(-123.1,-116.8,246.3,233.6), null);


(lib.hazyring3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.396)").s().p("AnxMvQlljEhrl7Qgih6gCh2IAAAAQACh1Aih6QBrl7FljEQFmjEGNBlQGOBmDPFUQCIDhgBDyIAAAAQABDziIDhQjPFUmOBmQiIAiiCAAQj9AAjsiBgAnsslQlhDChqF3QgiB4gCB0IAAAAQACB1AiB4QBqF3FhDCQFiDDGJhlQGKhlDMlQQCHjfAAjwIAAAAQAAjviHjfQjMlQmKhlQiGgjiBAAQj7AAjpCBgAMnCxQAXhXAAhaIAAAAQAAjIhxi7QiskblLhUQlKhVkpCjQkpCkhZE6QgcBlgCBhIAAAAQACBRATBTQAEAmAHAlIgMgmQgchmgChjIAAAAQAChiAchmQBak/EtilQEtilFOBVQFPBWCuEeQBzC9gBDLIAAAAQAAB9grB4QAGghAEgjg");
	this.shape.setTransform(-0.0122,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.698)").s().p("AnhMwQlai/hnlvQghh2gDhxIAAgBQADhxAhh2QBnlvFai+QFai+GBBjQGBBiDIFJQCEDagBDqIAAABQABDqiEDbQizEllGBuQAjgQAhgUQEPhzCdkBQCDjYgBjoIAAgBQABjniDjYQjGlFl9hiQl8hhlXC8QlWC8hmFrQghB0gCBwIAAABQACBwAhB1QBmFrFWC8QAlAUAlARQApAZAqATQhSgchQgsgAtHDrQgehqgChmIAAgBQAChlAehqQBdlLE4isQE4irFbBYQFcBZC0EpQB4DFgBDSIAAABQABDTh4DFIgNAUQAOgeALgeQBhizgBi9IAAgBQABjQh2jCQiykllXhYQlXhYk1CqQk0CphcFHQgdBpgCBkIAAABQACBlAdBpQAaBdAsBRQAMAgAOAeQhGhpgkiBg");
	this.shape_1.setTransform(-0.0248,-2.6307);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.796)").s().p("AHEM6QDjhzCKjiQCBjWAAjlIAAAAQAAjliBjVQjElCl5hhQl4hglTC6QlSC6hlFnQghBzgCBvIAAAAQACBwAhBzQBlFnFSC6IAJAFQAeAWAeASQglgQglgVQlWi8hmlrQghh0gChxIAAAAQAChwAhh1QBmlrFWi8QFXi8F8BiQF9BhDGFGQCDDYgBDnIAAAAQABDoiDDYQidECkPBzQAbgRAbgUgAtRD9QgehrgChoIAAAAQAChnAehsQBelPE8itQE8iuFfBaQFgBaC2EtQB5DHgBDVIAAAAQABDWh5DHQgYAogbAkQAQgeANgeIANgVQB4jFgBjTIAAAAQABjTh4jEQi0kplchZQlbhZk4CsQk4CrhdFLQgeBqgCBmIAAAAQACBnAeBqQAkCBBGBpQAOAeARAeQhlh+guimg");
	this.shape_2.setTransform(-0.0247,-4.1831);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.898)").s().p("AH3MgQC6hwB3jDQCAjTgBjjIAAAAQABjiiAjTQjCk+l1hgQl0hflOC4QlPC4hkFjQggBygCBtIAAAAQACBuAgByQBdFKEoC3QAYAVAZATIgJgFQlSi6hllnQghhzgChwIAAAAQAChvAhhzQBllnFSi6QFTi6F4BgQF5BhDEFCQCBDVAADlIAAAAQAADmiBDVQiKDjjjBzQAagTAZgVgAtcENQgehtgChpIAAAAQAChoAehtQBglTFAivQE/iwFkBbQFjBbC5EwQB6DJAADYIAAAAQAADZh6DJQgrBIg1A7QATgdARgfQAbgkAYgoQB5jHgBjWIAAAAQABjVh5jHQi2ktlghaQlfhZk8CtQk8CuheFPQgfBrgBBnIAAAAQABBoAfBsQAuClBlB+QAPAcASAaQiGiPg5jIg");
	this.shape_3.setTransform(-0.0123,-5.5024);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AI/LpQA5g8ArhCQA1g8ArhHQB7jKgBjYIAAAAQABjYh7jJQi4kxlkhbQlkhak/CvQlACwhgFTQgeBsgCBpIAAAAQACBpAeBtQA5DICGCPQAqA+A1A4QAfAhAgAdQkoi3hdlKQgghygChuIAAAAQAChuAghxQBklkFPi3QFOi4F1BfQF0BfDCE/QCADTgBDiIAAAAQABDjiADTQh3DDi6BwQAlggAjgmg");
	this.shape_4.setTransform(-0.0247,-6.976);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.294)").s().p("An2M4QlpjHhsl/Qgjh7gCh3IAAAAQACh2Ajh7QBsl/FpjHQFpjGGSBmQGSBnDRFYQCKDkgBD0IAAAAQABD1iKDkQjRFYmSBnQiKAiiDAAQkAABjuiDgAnxsuQllDEhrF7QgiB6gCB1IAAAAQACB2AiB6QBrF7FlDEQFmDEGNhlQGOhmDPlUQCIjhgBjzIAAAAQABjyiIjhQjPlUmOhmQiIgiiCAAQj9AAjsCBgAMtBcQAGguAAguIAAAAQABjGhwi4QgWgkgZgiIAQANIgRgOQiljbkchJIABAAQlGhTkmChQklChhYE3QgcBkgBBfIAAAAQAAApAGApQAAAqAEAoQgThTgChRIAAAAQAChhAchlQBZk6EpikQEpijFKBVQFLBUCsEbQBxC7AADIIAAAAQAABagXBXQAFgqABgrg");
	this.shape_5.setTransform(-0.0122,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.498)").s().p("AnsMmQlhjChql3Qgih4gCh1IAAAAQACh0Aih4QBql3FhjCQFijDGJBlQGKBlDNFQQCHDfgBDvIAAAAQABDwiHDfQjNFQmKBlQiGAjiBAAQj6AAjqiBgAnmsdQleDAhoFzQgiB3gCBzIAAAAQACB0AiB3QBoFzFeDAQCZBUCgAcQBUASBZAAQBuAABkgbIAMgDIAegIIABAAQGFhjDLlNQCFjdgBjtIAAAAQABjsiFjdQjLlNmFhjIgBAAQiEgiiAAAQj4AAjmB+gAszDMQgdhogChkIAAAAQAChjAdhoQBblDExinQEwinFTBWIAAAAQFTBXCwEiQB0DAAADNIAAAAQAACfhECWQAIggAGggQAsh4gBh9IAAAAQABjLhzi9QiukelPhWQlOhVktClQktClhaE/QgcBmgCBiIAAAAQACBjAcBmIAMAmQAHAmAKAkQgXg0gQg5g");
	this.shape_6.setTransform(-0.0248,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.596)").s().p("AnmMlQlejAholzQgih3gCh0IAAAAQAChyAih4QBolyFejBQFdjAGFBkIABAAQGFBjDKFNQCGDdgBDsIAAAAQABDuiGDcQjKFNmFBkIgBAAIgeAHQA4gQA0gZQFGhuCzkmQCEjagBjrIAAAAQABjqiEjaQjIlJmBhjQmBhilaC+QlaC+hnFvQgiB2gCBxIAAAAQACByAiB2QBnFvFaC+QBQAsBSAdQBGAgBMAQQiggciZhUgAs9DVQgehogBhmIAAAAQABhkAehpQBclHE0ipQE1iqFXBYQFXBYCyElQB2DCgBDQIAAAAQABC+hiCyQALgdAIgeQBEiWAAifIAAAAQAAjNh0jAQiwkilThXIAAAAQlThWkwCnQkxCnhbFDQgdBogCBjIAAAAQACBkAdBoQAQA5AXA0QAJAjAMAgQgshQgaheg");
	this.shape_7.setTransform(-0.0121,-0.7196);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.094)").s().p("AoBNJQlwjKhumHQgkh+gCh6IAAAAQACh5Akh+QBumHFwjKQFxjLGaBpQGaBpDWFfIAAAAQCNDpgBD5IAAAAQABD6iNDpIAAAAQjWFfmaBpQiMAkiGAAQkGAAjziGgAn7tAQltDJhtGDQgjB8gCB4IAAAAQACB5AjB8QBtGDFtDJQFtDIGVhoIAAAAQGWhoDUlaIAAgBQCLjmgBj4IAAAAQABj3iLjmIAAgBQjUlamWhoIAAAAQiKgkiFAAQkDAAjwCEgALmknQA2B0AKB4QgPh9gxhvgAsKjAIABgEIgDALIACgHgAJAoIIgJgIQiSiOjXg3Qk9hSkeCdQhWAvhDA8QglAcgkAfQBahmCDhIQEhifFCBSIAAAAQD/BBCfC7Igvglg");
	this.shape_8.setTransform(-0.0122,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.196)").s().p("An7NBQltjJhtmDQgjh8gCh5IAAAAQACh4Ajh8QBtmDFtjJQFtjIGVBoIAAAAQGWBoDUFaIAAABQCLDmgBD3IAAAAQABD4iLDmIAAABQjUFamWBoIAAAAQiKAkiFAAQkDAAjwiEgAn2s3QlpDHhsF/QgjB7gCB2IAAAAQACB3AjB7QBsF/FpDHQFpDGGShmQGShnDRlYQCKjkgBj1IAAAAQABj0iKjkQjRlYmShnQiKgiiDAAQkAgBjuCDgAMuBAQAAg/gIg8QgKh4g2h0Qgnhag8hQIASANQAZAiAWAkQBwC4gBDGIAAAAQAAAugGAuIABgcgAsyAAIAAAAQABhfAchkQBYk3ElihQEmihFGBTIgBAAQEcBJClDbIgTgPIAAAAIgSgPQifi7j/hBIAAAAQlChSkhCfQiDBIhaBmIAAABIgHAGIgJAIQgaAjgWAkIgPAYIhLCyIgBAEIgCAHIgVBmQgLBIAABLIAAASQgGgpAAgpg");
	this.shape_9.setTransform(-0.0123,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hazyring3, new cjs.Rectangle(-103,-97.5,206,195), null);


(lib.hazyring2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.396)").s().p("AtdHrIAWARQDFEzFrBlIAWAQQmOhljOlUgAHsM9QFijCBql3QBpl2jMlQQjMlQmKhlQmJhlliDDQlhDChqF3QhpF2DMFQIAJAPIgSgKQjPlUBrl6QBrl7FljEQFmjEGNBlQGOBmDPFUQDNFUhqF5QhrF7llDFQgtAYg3ANQAwgUAugagALTGVQAxhVAchjQBYk5irkbQiskblLhUQlKhVkpCkQkpCjhZE7QhMENB0D2QAjBcA8BSQgggpgdgvQitkeBZk+QBak/EtilQEtilFOBVQFPBWCuEeQCtEehZE+Qg4DGiKCLQBAhKArhSg");
	this.shape.setTransform(-0.0166,-1.2104);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.796)").s().p("As5HXQjFlGBmlqQBmlrFWi8QFXi8F8BhQF9BiDGFFQDFFGhmFpQhmFrlWC8QhOArhuAGQgjACgngCQgygCg5gJQCogUCfhXQE4irBdlLQBdlKi0kpQi0kplchZQlbhYk4CrQk4CshdFLQhdFKC0EpQAqBFAyA5IgwgZIgwgiIARAIIAqAWQgigrgegxQi3ktBflOQBelPE8iuQE8itFfBaQFgBaC2EsQC2EtheFNQheFPk8CuQiBBHiIAbQAmADAiAAQAqAAAlgFQBTgKA+giQFTi6BllnQBllljDlDQjElCl5hgQl4hglTC5QlSC6hlFnQhlFnDDFCIATAJIAEAHIgXgQIAJAOIgSgJIAXAQQC8ElFaBhIAWAQQl9hhjGlFg");
	this.shape_1.setTransform(-0.0242,-1.1456);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkKNiQlVhfi6khIgEgHIgKgPIA0AlIAvAjIADACIAZAeQB8CQCyBNIAlAPIBlBJIgagHgADzNBQBngcBjg3QFAiwBglSQBflSi4kwQi5kwlkhbQlkhbk/CwQlACvhfFTQhgFSC5EwQATAgAVAdIgUgKIgmgVIgTgKQjBk+BkliQBkljFPi4QFOi4F1BfQF0BgDCE+QDBE/hkFhQhkFjlPC4QgrAXg1ANQgqAJgvACIgkABIgCAAg");
	this.shape_2.setTransform(-0.0283,-1.101);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.898)").s().p("AkMNtQlahhi8klIgFgHIgJgOIAXAQQC6EhFVBgIAXAQIgZgGgAD3NLQgiAAgmgDQCIgbCBhHQE8iuBelPQBelNi2ktQi2kslghaQlfhak8CtQk8CuheFPQhfFOC3EtQAeAxAiArIgqgWIgRgIIgzglIASAJIAnAVIAUAKQgVgdgTgfQi5kxBflSQBglTFAivQE/iwFkBbQFkBbC4EwQC5EwhfFSQhgFTlACvQhjA3hnAdIAmgBQAvgDAqgJQA1gMArgYQFPi4BkljQBklhjBk/QjCk+l1hfQl0hglOC4QlPC4hkFjQhkFiDBE/IAKAOIgTgJQjDlDBllmQBllnFSi6QFTi6F4BhQF5BgDEFCQDDFChlFmQhlFnlTC6Qg+AihTAKQglAFgpAAIgBAAgAqoI0IAqAfQAcAdAeAZIBZBBQAiAVAkATIArAfQiyhNh8iQg");
	this.shape_3.setTransform(-0.0242,-1.1274);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.698)").s().p("Aj5N2QmBhijIlJQjIlJBoluQBnlvFai+QFai+GBBiQGBBjDIFJQDIFJhoFtQhnFvlaC+QjkB+j1AAQh+AAiEgigAj2NsIgWgQIAZAHIgXgRIAaAHIhlhJIglgPIgrggQgkgSgigVIhZhBQgegagcgcIgqgfIgZgeIgDgCIAxAZQgzg6gqhFQi0kpBdlKQBdlLE4irQE4isFbBZQFcBZC1EpQCzEphdFJQhdFLk4CrQifBYinAUQA4AIAyADQAnACAjgCQBugHBOgqQFWi8BmlrQBmlqjFlFQjGlGl9hhQl8hilXC8QlWC8hmFrQhmFqDFFGQDGFGF9BggAmsrDQk1CqhcFHQhcFGCyElQB8DNDNBoQBgA6BsAcQBjAZBuAAQDnAAC5hxIAPgIQE0iqBclHQBclFiyklQiykmlXhYQh1gehwAAQjbAAjLBwgAs5HGIATAKIAEAGg");
	this.shape_4.setTransform(-0.0287,0.5208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.294)").s().p("AkEOdIAAAAQmShmjQlYQjRlYBsl+QBsl/FpjGQFpjGGSBmQGSBnDRFYQDQFXhsF+QhsF/lpDGQjuCDkAAAQiDAAiKgjgAj+OJQFVBYE3iHQA3gNAtgZQFljEBrl7QBql5jNlUQjPlUmOhmQmNhmlmDFQllDEhrF7QhrF6DPFUQDOFUGOBlIgWgQIAZAGgAtdHaIASAKIAEAGgAMYC+QBSkvimkSQiqkXlHhUIABAAQlGhTkmChQklChhYE3Qg1C+AqCxQAOBMAbBGQh0j3BMkNQBZk7EpijQEpijFKBUQFLBVCsEbQCrEahYE6QgcBjgxBUQAwhdAVhog");
	this.shape_5.setTransform(-0.0168,0.5168);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.196)").s().p("AkGOnIAAgBIgZgGQl4hojLk/IgEgGIgJgPQjTlbBtmCQBtmDFtjJQFtjIGWBoIAAAAQGWBoDTFaIAAABQDSFbhtGBQhtGDltDJQgvAagwAVQjEBVjQAAQiFAAiKgjgAH3M9QFpjGBsl/QBsl+jQlXQjRlYmShnQmShmlpDGQlpDGhsF/QhsF+DRFYQDQFYGTBmIAAAAQGRBmFpjGgAMqARIgBgkIgDgrQgNilheibQiokUlChSIAAAAQlChTkhCgQkiCfhWEzQgPA0gHA0IgFAAQgHA2AAA4QAABOANBIQgrixA2i+QBXk3ElihQEmihFGBTIgBAAQFHBUCqEXQCmEShREvQARhTAAhag");
	this.shape_6.setTransform(-0.0252,0.5223);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.094)").s().p("At5H7IAXAQQDLE/F3BnIAXARQmbhojVlfgAH8NXQFtjIBtmDQBtmBjSlcIAAAAQjTlamXhoIAAgBQmVhnltDIQltDJhtGDQhtGCDSFbIAJAPIgSgKQjUlfBumGQBumHFwjLQFxjKGaBpQGaBpDWFeIAAAAQDUFghuGFQhuGHlxDKQgtAZg3ANQAwgUAvgbgAMjhLIgLAAQgTiShTiLIgBAAQilkPk+hSQk9hRkeCdQkeCdhVEvQgPA0gHAyIgKAAQAHg0APg1QBWkzEiifQEhifFCBTIAAgBQFCBTCoETQBeCcANClIgDgfg");
	this.shape_7.setTransform(-0.0172,-1.2735);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.596)").s().p("Aj7OAIAAAAQmGhjjKlNQjKlNBplyQBolzFejAQFejAGEBjIABAAQGFBkDKFNQDKFNhpFxQhoFzleDAQjmB/j4AAQh/AAiFgigAnhsZQlaC+hnFvQhoFuDIFJQDIFJGBBiQGBBiFai+QFai+BnlvQBnltjHlJQjIlJmBhjQiEgih+AAQj1AAjkB+gArnGZQiyklBclGQBclHE0iqQE1ipFXBXQFXBYCyEmQCyElhcFFQhcFHk1CqIgOAIQA4giAzgsQDeihBMkMQBblBiwkiQiwkilThXIAAAAQlThXkwCoQkxCnhbFDQhbFCCwEiQBVCMB7BdQA2AuA6AjQjNhoh8jNg");
	this.shape_8.setTransform(-0.0164,0.5169);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.498)").s().p("Aj+OJIgZgGQlrhljEk0IgFgGIgJgPQjMlQBpl2QBql3FijDQFhjCGJBlQGKBkDNFRQDLFQhpF1QhqF3lhDDQgvAZgvAVQi+BSjIAAQiBAAiGgjgAHnMjQFejABplzQBolxjJlNQjLlNmFhkIAAAAQmFhjleDAQleDAhoFzQhpFyDKFNQDKFNGGBjIAAAAQGFBjFdjAgAI8JPQAXgXAVgYQCKiLA4jHQBZk9itkeQiukelPhWQlOhWktCmQktClhZE/QhaE+CtEeQAdAvAgApQAoA2AxAyQAYAYAaAWQh8hdhViMQiwkiBblCQBblDExinQEwioFTBXIAAAAQFTBXCwEiQCwEihbFBQhLEMjfChQAagXAYgYg");
	this.shape_9.setTransform(-0.0291,0.5131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hazyring2, new cjs.Rectangle(-103,-97.5,206,195), null);


(lib.haze = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.075)").s().p("AjTDxQgNgDgJgJQgIgJABgKQAklDGHh/QALgEANAEQAOADAJAJQAIAJgBAKQgBAJgKAFQkxCZhgEPQgEAJgLAEQgFABgGAAQgHAAgHgCgAC+jtQmFB/gkFBQgBAIAHAIQAIAIALADQAMADAJgDQAKgDACgHQBhkREyiZQAJgEABgIQABgJgHgHQgIgIgLgDIgLgCQgFAAgFACg");
	this.shape.setTransform(-0.0247,-0.0065);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.016)").s().p("AjVD8QgTgGgMgNQgMgMABgOQAklIGNiCQAQgFAUAFQATAGAMANQAMAMgBAOQgCAOgOAHQkuCWhfENQgFANgQAFQgIACgJAAQgJAAgJgCgAC1j3QmLCBgkFGQgBAMALAMQAKALASAFQARAFAPgFQAOgEAEgMQBgkNEviXQAMgHACgMQABgMgLgMQgLgLgRgFQgJgCgIAAQgIAAgHACg");
	this.shape_1.setTransform(-0.0135,-0.0129);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.055)").s().p("AjUD1QgPgEgKgLQgJgKABgLQAklEGJiBQANgEAPAEQAQAEAJALQAKAKgBALQgBALgMAFQkwCYhgEPQgDAKgNAEQgHACgGAAQgIAAgIgCgAC7jwQmHB/gkFDQgBAKAIAJQAJAJANADQAOAEALgDQALgEADgJQBhkPExiZQAKgFABgJQABgKgJgJQgIgJgOgDQgGgCgGAAQgHAAgFACg");
	this.shape_2.setTransform(-0.0135,-0.0128);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.035)").s().p("AjUD4QgSgFgKgLQgLgMABgMQAklGGLiBQAPgFARAFQARAFALALQALAMgBAMQgBAMgNAHQkvCXhgENQgEAMgOAEQgHADgIAAQgIAAgJgDgAC4j0QmJCAgkFFQgBALAJAKQAKAKAPAFQAQAEANgEQANgEADgKQBhkPEviYQAMgFABgLQABgLgKgKQgJgLgQgEQgIgCgHAAQgHAAgGACg");
	this.shape_3.setTransform(-0.0247,-0.0067);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.192)").s().p("AjODdIgDgCIgBgCQAjk5F7h8IADAAIADACIABACIgBACQk4CchiEVIgDACIgBAAIgCAAg");
	this.shape_4.setTransform(-0.024,-0.0126);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.173)").s().p("AjPDgQgEgBgCgCQgCgDAAgCQAjk7F9h8QADgCAEABQAEABACADQACADAAACQAAADgDACQk2CbhjEUQgBADgDABIgDAAIgEgBgADMjcQl8B8giE5IABACIADACIADAAIADgCQBikVE4icIABgCIgBgCIgDgCIgCAAIgBAAg");
	this.shape_5.setTransform(-0.0124,-0.0126);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.153)").s().p("AjPDkQgGgCgEgDQgEgEABgEQAjk9F/h9QAFgCAGACQAFACAEAEQAEADgBAEIgFAHQk1CbhiETQgBADgFACIgFABIgFgBgADJjfQl9B8gjE7QAAACACADQACACAEABQAEABADAAQAEgBAAgDQBjkUE2ibQADgCAAgDQABgCgDgDQgCgDgEgBIgDAAIgEABg");
	this.shape_6.setTransform(-0.0249,-0.0061);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.133)").s().p("AjQDnQgIgCgFgFQgFgFABgGQAjk+GBh9QAHgCAHACQAIACAFAFQAFAFgBAFQAAAGgGADQk0CahiESQgCAFgGACIgHABIgHgBgADGjjQl/B9gjE9QgBAEAEAEQAEAEAFABQAGACAFgCQAFgCABgDQBikTE0ibIAGgHQABgEgEgDQgEgEgFgCIgGgBIgFABg");
	this.shape_7.setTransform(-0.0124,-0.0128);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.114)").s().p("AjRDrQgKgDgGgGQgGgHABgHQAjk/GDh/QAIgCAKACQAKADAGAGQAGAHgBAHQgBAGgHAEQkzCZhhESQgCAGgJADIgHABIgKgBgADDjmQmBB9gjE+QgBAGAFAFQAFAFAIACQAHACAHgCQAGgCACgFQBikSE0iaQAGgDAAgGQABgFgFgFQgFgFgIgCIgHgBIgHABg");
	this.shape_8.setTransform(-0.0248,-0.0062);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.094)").s().p("AjSDuQgLgDgIgIQgHgHABgJQAklBGFh/QAJgDAMADQALADAIAIQAHAIgBAIQgBAIgJAEQkyCZhhERQgCAHgKADIgJACQgGAAgGgCgADAjqQmDB/gjE/QgBAHAGAHQAGAGAKADQAJACAIgCQAJgDACgGQBhkSEziZQAHgEABgGQABgHgGgHQgGgGgKgDIgJgBIgJABg");
	this.shape_9.setTransform(-0.0235,-0.0189);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.haze, new cjs.Rectangle(-25.6,-25.4,51.2,50.8), null);


(lib.bmouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Al8BSQiJiHgSi6IQvAAQgTC6iJCHQidCejfAAQjeAAieieg");
	this.shape.setTransform(53.575,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bmouth, new cjs.Rectangle(0,0,107.2,48), null);


(lib.bluebaseballhat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEDkEQBRAzAIA1QAZC4gUA0IiuAAIiuAAIkPAAAANlnIBWAaQBiAiA+AnQgHAJgKARQgTAjgPAmQgvB8ASB1AkjkGQA8gsCBgfQBAgPAzgHAlaBQQgjhvAsisQAHgfAngcIAgAlQAkAtAUAtQA+CMh9BLIhQAAIAAEYAAFBQIAIm3AlZFoQFckTFeETAFhFoIAAkY");
	this.shape.setTransform(36.2093,35.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3333FF").s().p("AFhFoQlekTlcETIgBAAIAAkYIBQAAIEPAAIAIm3IBWAaQBiAiA+AnQBRAzAIA1QAZC4gUA0IiuAAICuAAIAAEYgACzBQIiuAAgACzBQQgFghAAgiQAAhVAihZQAPgmATgjQAKgRAHgJQgHAJgKARQgTAjgPAmQgiBZAABVQAAAiAFAhgAkKBQQBUgyAAhPQAAgngVgvQgUgtgkgtIggglQA8gsCBgfQBAgPAzgHIgIG3gAlaBQQgjhvAsisQAHgfAngcIAgAlQAkAtAUAtQAVAvAAAnQAABPhUAygAkKBQg");
	this.shape_1.setTransform(36.2093,35.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluebaseballhat, new cjs.Rectangle(-1,-1,74.5,74), null);


(lib.bball = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AR0x0QHZHZAAKbQAABhgKBdQgsGajvFKQhPBuhlBkQgoApguAoQm9GIphAAQgSAAgTgBAAA5MQCqAACdAfQHNBZFgFgAx0x0QFhlgHNhZQCdgfCpAAQgJAPgLAQQhQB3hgC3QigEuhnEqQiVGxgVGdQgCAigBAoQgDGCCCFHQnNCsB0D4QiZhiiJiIQmfmggyo3QgHhNAAhQQAAqbHYnZIAVAsQAdA2AqA0QCFClDSBTQByAuCEARQDMAbD1goQH3hTKHltA5FCdIPQAKMAi4AAXAn5O6QEEHYDQC6QnEgJlpjlAQeTFQptliuqBX");
	this.shape.setTransform(161.25,161.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6600").s().p("AglZMQjPi6kFnZIAJAAQC0gRCoAAIABAAIAAAAQKzAAHuEUIAPAJQm9GHpgAAIglAAgAtRVeQgYgyAAgvQAAi6FwiKQh+k9gBl2IABgVQAAgoACgiMAi3AAXQgrGajvFKQhQBuhkBkQgoApgvAoIgPgJQnukUqzAAIAAAAIgBAAQioAAi0ARIgJAAQEFHZDPC6QnEgJlojlgAx0R0Qmfmfgxo4IPPAKQgCAiAAAoIgBAVQABF2B+E9QlwCKAAC6QAAAvAYAyQiahiiJiIgAp1CnQAVmdCVmwQBTAKBYAAIABAAIAAAAQB/AACMgWIAKgCQH3hTKHltQHYHZAAKbQAABhgKBdgA5ECdQgIhNAAhQQAAqbHYnZIAWAsQAcA2AqA0QCGCmDRBTQBzAtCDASQiVGwgVGdgA5ECdgAkgqcQhYAAhTgKQBnkrCgkuQBgi3BRh3IATgfIgTAfQhRB3hgC3QigEuhnErQiDgShzgtQjRhTiGimQgqg0gcg2IgWgsQFhlfHNhaQCdgeCpgBQCqABCdAeQHNBaFgFfQqHFtn3BTIgKACQiMAWh/AAIAAAAIgBAAgAnLqmIAAAAgAx0x0g");
	this.shape_1.setTransform(161.25,161.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bball, new cjs.Rectangle(-1,-1,324.5,324.5), null);


(lib.smilewithpinktounge = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.smilewithtounge();
	this.instance.setTransform(32.4,24.1,1,1,0,0,0,32.4,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smilewithpinktounge, new cjs.Rectangle(-0.5,-0.5,65.7,49.2), null);


(lib.legs = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.leftlegfoot();
	this.instance.setTransform(109.9,53,1,1.0008,0,-2.2326,0,28.6,39.7);

	this.instance_1 = new lib.rightlegfoot();
	this.instance_1.setTransform(28.65,53,1,1.0008,0,-2.2326,0,28.6,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legs, new cjs.Rectangle(-1.5,13.3,141.6,79.5), null);


(lib.arcadebuttonred = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// haze
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.173)").s().p("AANCTIgBgBIABgBIABAAIAAgCQgyiNAkiQIAAgCIAAgBIgCABIAAAAIgHARIAHgTIACAAIABABIAAADQgjCQAxCNIAAACIgBACIgBAAg");
	this.shape.setTransform(-36.5782,6.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.192)").s().p("AgTgRQAAg6AQg0IAGgRIAAAAIACgBIABABIAAACQgkCQAyCNIAAACIgBAAIgBABQglhLAAhYg");
	this.shape_1.setTransform(-37.1875,6.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.153)").s().p("AAMCVIgBgBIABAAIABgDIAAgCQgxiNAkiQIAAgDIgCgBIgCABIAAgDIADABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIAAAEQgjCQAxCLQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(-36.3952,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.133)").s().p("AAKCVIABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgyiLAkiQIAAgEQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgCgBIABgCIACABQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQABADgBACQgjCQAxCLQABADgBACQgBACgDACIgBgCg");
	this.shape_3.setTransform(-36.2157,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.114)").s().p("AAKCYIgBgBQADgBABgDQABgCgBgDQgxiLAkiQQAAgCAAgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCAAIAAgCIACAAQAEACAAACQACADgBAEQgjCOAxCLQABAEgBADQgCADgDABg");
	this.shape_4.setTransform(-36.041,6.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.094)").s().p("AAICYIABAAQADgCABgCQACgDgCgEQgwiLAjiPQAAgDAAgDQgCgCgDgCIgCgBIABgBIABAAQAEABABAFQACADgBAEQgjCOAxCLQABAEgBADQgCAEgEABIAAABIgBgCg");
	this.shape_5.setTransform(-35.8704,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.075)").s().p("AAICaIAAgBQAEgBABgEQACgDgCgEQgwiLAjiOQABgEgBgDQgCgFgEgBIgCAAIABgBIABAAQAFABABAFQADAEgBAFQgjCNAwCKQACAFgCAEQgCAFgEABIgBgBg");
	this.shape_6.setTransform(-35.7008,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.055)").s().p("AAHCcQAEgCACgFQACgEgCgFQgwiKAjiNQABgFgCgEQgCgEgFgCIgBAAIAAgCIACAAQAFACACAFQACAFgBAFQgiCNAwCKQACAFgDAFQgCAFgFACIAAgBg");
	this.shape_7.setTransform(-35.5135,6.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.035)").s().p("AAFCdQAFgCACgFQADgFgCgFQgwiKAjiNQAAgFgBgFQgDgFgFgCIgCAAIABgCIACABQAFACADAFQACAGgBAGQgjCMAwCJQADAGgDAGQgCAFgGADIgBgCg");
	this.shape_8.setTransform(-35.3332,6.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.016)").s().p("AAFCfQAFgDADgFQACgGgCgGQgwiJAjiMQABgGgCgGQgDgFgGgCIgBgBIAAgBIACAAQAGACADAGQADAGgCAHQgiCMAwCIQACAHgDAGQgCAGgHADIAAgBg");
	this.shape_9.setTransform(-35.1763,6.875);

	this.instance = new lib.haze();
	this.instance.setTransform(-15.8,31.55,0.4133,0.5505,0,-95.59,-100.0587);

	this.instance_1 = new lib.haze();
	this.instance_1.setTransform(21.4,11.3,0.3489,0.3489,178.7872);
	this.instance_1.alpha = 0.75;

	this.instance_2 = new lib.haze();
	this.instance_2.setTransform(26.55,24.9,0.35,0.35,180);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:11.3}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:15.5}},{t:this.instance},{t:this.shape_8},{t:this.shape_9},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// shine
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEyQgkgXgLgXQgEgKB4AwQhYgYBnBGQgwgPgkgXgAlRDPQgWgbgGgWIgCgKQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABABQAMADBTBHQhLgzBLBjQgogdgbghgAFMgLQgNA7goA/QAhhWADhKQAGiWh0hnQCLBzgGCGIAAAAQBAA8hHCUQAoiqgnAEgAAvkeIgLgHQgdgWgmgFQgogGhJAeQAAgGAJgIQAJgIAdgMQAcgMAGABQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAGgFAEIgGABQgLAAgRgLg");
	this.shape_10.setTransform(3.565,5.9499);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBkIgCAEIgCABQCWAeCcgLQBLgGBMgOIAFgCIAAgCQABhkgogdQAtAOAJB3IAAABIABABQgLC0iYAfQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgdQgugSApAZQgrAZhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_11.setTransform(0.9125,-1.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.251)").s().p("AgchGQAGBGA1BHQhHguAMhfg");
	this.shape_12.setTransform(-24.1831,6.6125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.353)").s().p("AgOBhQgWhLAWhKQANgpAbgqQg/CHAlCIQgIgUgGgTg");
	this.shape_13.setTransform(-31.5986,-1.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.6)").s().p("Ah/gTQBgAsBsgcQAZgHAagLQgaAQgZAJQgsASgoAAQg/AAg5gpg");
	this.shape_14.setTransform(0.5625,21.2423);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.502)").s().p("AhzAlIgCAAQAMgCgfgOQgegOAvABIBZADIASAAIAFAGQAHAIALAAIAGgBQAIgBAGgGQAGgGABgHIAWgFQAagGAYgJQAYgKAOgQIABAAQAAANgHAJIgLANIgKAHIgQALQgIAGgsAOQgSAFgSADIgdADIgdABQgmAAgkgGgAA1AfgAA1AfIAxgPIgRAGIggAJIAAAAg");
	this.shape_15.setTransform(6.5719,37.484);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEeQgkgYgLgXQgEgKB4AxQhYgZBnBGQgwgOgkgXgAlRC6QgWgbgGgWIgCgKQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAMADBTBHQhLgzBLBjQgogcgbgigAFMgfQgNA6goA/QAhhWADhKQAGiWh0hmQCLBzgGCFIAAAAQBAA+hHCSQAoipgnAEgAAvkJIgLgHQgdgVgmgGQgogFhJAdQAAgFAJgJQAJgIAdgMQAcgLAGAAQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAHgFADIgGABQgLAAgRgLg");
	this.shape_16.setTransform(3.565,8.0125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBjIgCAFIgCABQCWAeCcgLQBLgGBMgOIAFgBIAAgEQABhjgogdQAtAOAJB3IAAABIABABQgICsibAnQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgcQgugTApAaQgrAYhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_17.setTransform(0.9125,3.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:21.2423}},{t:this.shape_13},{t:this.shape_12,p:{y:6.6125}},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:25.4423}},{t:this.shape_12,p:{y:10.8125}},{t:this.shape_13},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[]},1).wait(1));

	// hazy ring
	this.instance_3 = new lib.hazyring3();
	this.instance_3.setTransform(1,1.3,0.35,0.35,180);
	this.instance_3.alpha = 0.5898;

	this.instance_4 = new lib.hazyring2();
	this.instance_4.setTransform(1,1.3,0.35,0.35,180);
	this.instance_4.alpha = 0.5898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).to({state:[]},1).wait(1));

	// ring
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.251)").s().p("AAAELQiGAAhfhaQhfhZAAh+QAAh/BghaIAAAAIABgBIAAgBIADgCIADgBIACABIABACIgBADIgDADIAAAAIgCABIAAAAQhdBYAAB8QAAB7BdBXQBdBYCDAAQAlAAAigHQBXgSBDg/QBdhXAAh7QAAh0hRhUIgMgMIgLgKIgCgCIABgDIADgBIACABIAMAKIAAAAIAMAMQBTBWAAB3QAAB+hfBZQhFBBhYASQgjAHgmAAIAAAAg");
	this.shape_18.setTransform(1.0625,4.549);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).to({_off:true},3).wait(1));

	// gradients
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(204,204,204,0.502)","rgba(102,102,102,0.502)"],[0.671,1],-19.8,20.7,0,-19.8,20.7,34.7).s().p("AADACIgWgRIgGgFIAFADIAgAXIAHAGIAHAJIgXgTg");
	this.shape_19.setTransform(20.7875,-22.9875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)"],[0.671,1],0,-0.8,0,0,-0.8,34.7).s().p("AAAEmQh1AAhThYQhUhZAAh8QAAhrA9hQIADgDIADgCQARgQATgNQBMhBBpAAQAnAAAiAJQA3ANAtAkQgugcg2gLQgigHgmAAQhmAAhQA1IgKAJQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhSgwhAQgOgRgQgQIgBgBIAhAaQA8BQAABqQAAB8hUBZQg4A8hIATQgiAJgmAAIgBAAg");
	this.shape_20.setTransform(0.9125,-1.4499);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgABGDbQBIgTA4g8QBThZAAh8QAAhqg7hQIALAKIgMgLIgHgIIgHgGIgggYIgFgDIgBAAQgtgkg2gNQgjgJglAAQhqAAhMBCQgTAMgSAQIAAAAIgCACIgEADQg8BQAABrQAAB8BTBZQBUBYB2AAQAlAAAjgJg");
	this.shape_21.setTransform(1.25,5.1499);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","#000000"],[0,1,1],0,26.6,0,-27.6).s().p("Ai/CuQhPhLAAhoQAAhqBPhKIAKgJQBQg2BmABQAmgBAiAHQA2ALAtAcIABABIAFAEIAYASIAWATIANAKIgMgJIghgaIABABQAQAPAOARQAwBAAABTQAABohPBLQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_22.setTransform(0.925,-4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1,1],0,27.1,0,-27.1).s().p("Ai/C0QhPhKAAhqQAAhoBPhLQBQhLBvAAQAnAAAiAJQBDARA0AxIABABQAQAQAOARQAwA/AABSQAABqhPBKQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_23.setTransform(0.925,-1.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0.671,1,1],0,0,0,0,0,34.7).s().p("AjIDKQhUhUAAh2QAAh1BUhTQBThUB1AAQAnAAAiAJQBIASA4A5QBUBTAAB1QAAB2hUBUQg4A4hIASQgiAJgnAAQh1AAhThTgAi/jBQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhTgwg/QgOgRgQgQIgBgBQg0gxhDgRQgigJgnAAQhvAAhQBLg");
	this.shape_24.setTransform(0.9125,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgAgClLQh2AAhUBTQhTBTAAB2QAAB1BTBUQBUBTB2AAQAlAAAjgJQBIgSA4g4QBThUAAh1QAAh2hThTQg4g4hIgTQgigIgmAAIAAAAg");
	this.shape_25.setTransform(1.25,5.1499);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_26.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_26}]},1).wait(1));

	// color
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D40000").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_27.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).to({_off:true},3).wait(1));

	// shadow
	this.instance_5 = new lib.shadow();
	this.instance_5.setTransform(3,8,0.35,0.35,180);
	this.instance_5.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-32.8,86.2,81.69999999999999);


(lib.arcadebuttongreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// haze
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.173)").s().p("AANCTIgBgBIABgBIABAAIAAgCQgyiNAkiQIAAgCIAAgBIgCABIAAAAIgHARIAHgTIACAAIABABIAAADQgjCQAxCNIAAACIgBACIgBAAg");
	this.shape.setTransform(-36.5782,6.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.192)").s().p("AgTgRQAAg6AQg0IAGgRIAAAAIACgBIABABIAAACQgkCQAyCNIAAACIgBAAIgBABQglhLAAhYg");
	this.shape_1.setTransform(-37.1875,6.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.153)").s().p("AAMCVIgBgBIABAAIABgDIAAgCQgxiNAkiQIAAgDIgCgBIgCABIAAgDIADABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIAAAEQgjCQAxCLQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(-36.3952,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.133)").s().p("AAKCVIABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgyiLAkiQIAAgEQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgCgBIABgCIACABQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQABADgBACQgjCQAxCLQABADgBACQgBACgDACIgBgCg");
	this.shape_3.setTransform(-36.2157,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.114)").s().p("AAKCYIgBgBQADgBABgDQABgCgBgDQgxiLAkiQQAAgCAAgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCAAIAAgCIACAAQAEACAAACQACADgBAEQgjCOAxCLQABAEgBADQgCADgDABg");
	this.shape_4.setTransform(-36.041,6.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.094)").s().p("AAICYIABAAQADgCABgCQACgDgCgEQgwiLAjiPQAAgDAAgDQgCgCgDgCIgCgBIABgBIABAAQAEABABAFQACADgBAEQgjCOAxCLQABAEgBADQgCAEgEABIAAABIgBgCg");
	this.shape_5.setTransform(-35.8704,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.075)").s().p("AAICaIAAgBQAEgBABgEQACgDgCgEQgwiLAjiOQABgEgBgDQgCgFgEgBIgCAAIABgBIABAAQAFABABAFQADAEgBAFQgjCNAwCKQACAFgCAEQgCAFgEABIgBgBg");
	this.shape_6.setTransform(-35.7008,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.055)").s().p("AAHCcQAEgCACgFQACgEgCgFQgwiKAjiNQABgFgCgEQgCgEgFgCIgBAAIAAgCIACAAQAFACACAFQACAFgBAFQgiCNAwCKQACAFgDAFQgCAFgFACIAAgBg");
	this.shape_7.setTransform(-35.5135,6.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.035)").s().p("AAFCdQAFgCACgFQADgFgCgFQgwiKAjiNQAAgFgBgFQgDgFgFgCIgCAAIABgCIACABQAFACADAFQACAGgBAGQgjCMAwCJQADAGgDAGQgCAFgGADIgBgCg");
	this.shape_8.setTransform(-35.3332,6.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.016)").s().p("AAFCfQAFgDADgFQACgGgCgGQgwiJAjiMQABgGgCgGQgDgFgGgCIgBgBIAAgBIACAAQAGACADAGQADAGgCAHQgiCMAwCIQACAHgDAGQgCAGgHADIAAgBg");
	this.shape_9.setTransform(-35.1763,6.875);

	this.instance = new lib.haze();
	this.instance.setTransform(-15.8,31.55,0.4133,0.5505,0,-95.59,-100.0587);

	this.instance_1 = new lib.haze();
	this.instance_1.setTransform(21.4,11.3,0.3489,0.3489,178.7872);
	this.instance_1.alpha = 0.75;

	this.instance_2 = new lib.haze();
	this.instance_2.setTransform(26.55,24.9,0.35,0.35,180);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:11.3}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:15.5}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// shine
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEyQgkgXgLgXQgEgKB4AwQhYgYBnBGQgwgPgkgXgAlRDPQgWgbgGgWIgCgKQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABABQAMADBTBHQhLgzBLBjQgogdgbghgAFMgLQgNA7goA/QAhhWADhKQAGiWh0hnQCLBzgGCGIAAAAQBAA8hHCUQAoiqgnAEgAAvkeIgLgHQgdgWgmgFQgogGhJAeQAAgGAJgIQAJgIAdgMQAcgMAGABQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAGgFAEIgGABQgLAAgRgLg");
	this.shape_10.setTransform(3.565,5.9499);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBkIgCAEIgCABQCWAeCcgLQBLgGBMgOIAFgCIAAgCQABhkgogdQAtAOAJB3IAAABIABABQgLC0iYAfQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgdQgugSApAZQgrAZhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_11.setTransform(0.9125,-1.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.251)").s().p("AgchGQAGBGA1BHQhHguAMhfg");
	this.shape_12.setTransform(-24.1831,6.6125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.353)").s().p("AgOBhQgWhLAWhKQANgpAbgqQg/CHAlCIQgIgUgGgTg");
	this.shape_13.setTransform(-31.5986,-1.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.6)").s().p("Ah/gTQBgAsBsgcQAZgHAagLQgaAQgZAJQgsASgoAAQg/AAg5gpg");
	this.shape_14.setTransform(0.5625,21.2423);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.502)").s().p("AhzAlIgCAAQAMgCgfgOQgegOAvABIBZADIASAAIAFAGQAHAIALAAIAGgBQAIgBAGgGQAGgGABgHIAWgFQAagGAYgJQAYgKAOgQIABAAQAAANgHAJIgLANIgKAHIgQALQgIAGgsAOQgSAFgSADIgdADIgdABQgmAAgkgGgAA1AfgAA1AfIAxgPIgRAGIggAJIAAAAg");
	this.shape_15.setTransform(6.5719,37.484);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEeQgkgYgLgXQgEgKB4AxQhYgZBnBGQgwgOgkgXgAlRC6QgWgbgGgWIgCgKQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAMADBTBHQhLgzBLBjQgogcgbgigAFMgfQgNA6goA/QAhhWADhKQAGiWh0hmQCLBzgGCFIAAAAQBAA+hHCSQAoipgnAEgAAvkJIgLgHQgdgVgmgGQgogFhJAdQAAgFAJgJQAJgIAdgMQAcgLAGAAQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAHgFADIgGABQgLAAgRgLg");
	this.shape_16.setTransform(3.565,8.0125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBjIgCAFIgCABQCWAeCcgLQBLgGBMgOIAFgBIAAgEQABhjgogdQAtAOAJB3IAAABIABABQgICsibAnQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgcQgugTApAaQgrAYhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_17.setTransform(0.9125,3.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:21.2423}},{t:this.shape_13},{t:this.shape_12,p:{y:6.6125}},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:25.4423}},{t:this.shape_12,p:{y:10.8125}},{t:this.shape_13},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[]},1).wait(1));

	// hazy ring
	this.instance_3 = new lib.hazyring3();
	this.instance_3.setTransform(1,1.3,0.35,0.35,180);
	this.instance_3.alpha = 0.5898;

	this.instance_4 = new lib.hazyring2();
	this.instance_4.setTransform(1,1.3,0.35,0.35,180);
	this.instance_4.alpha = 0.5898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).to({state:[]},1).wait(1));

	// ring
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.251)").s().p("AAAELQiGAAhfhaQhfhZAAh+QAAh/BghaIAAAAIABgBIAAgBIADgCIADgBIACABIABACIgBADIgDADIAAAAIgCABIAAAAQhdBYAAB8QAAB7BdBXQBdBYCDAAQAlAAAigHQBXgSBDg/QBdhXAAh7QAAh0hRhUIgMgMIgLgKIgCgCIABgDIADgBIACABIAMAKIAAAAIAMAMQBTBWAAB3QAAB+hfBZQhFBBhYASQgjAHgmAAIAAAAg");
	this.shape_18.setTransform(1.0625,4.549);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).to({_off:true},3).wait(1));

	// gradients
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(204,204,204,0.502)","rgba(102,102,102,0.502)"],[0.671,1],-19.8,20.7,0,-19.8,20.7,34.7).s().p("AADACIgWgRIgGgFIAFADIAgAXIAHAGIAHAJIgXgTg");
	this.shape_19.setTransform(20.7875,-22.9875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)"],[0.671,1],0,-0.8,0,0,-0.8,34.7).s().p("AAAEmQh1AAhThYQhUhZAAh8QAAhrA9hQIADgDIADgCQARgQATgNQBMhBBpAAQAnAAAiAJQA3ANAtAkQgugcg2gLQgigHgmAAQhmAAhQA1IgKAJQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhSgwhAQgOgRgQgQIgBgBIAhAaQA8BQAABqQAAB8hUBZQg4A8hIATQgiAJgmAAIgBAAg");
	this.shape_20.setTransform(0.9125,-1.4499);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgABGDbQBIgTA4g8QBThZAAh8QAAhqg7hQIALAKIgMgLIgHgIIgHgGIgggYIgFgDIgBAAQgtgkg2gNQgjgJglAAQhqAAhMBCQgTAMgSAQIAAAAIgCACIgEADQg8BQAABrQAAB8BTBZQBUBYB2AAQAlAAAjgJg");
	this.shape_21.setTransform(1.25,5.1499);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","#000000"],[0,1,1],0,26.6,0,-27.6).s().p("Ai/CuQhPhLAAhoQAAhqBPhKIAKgJQBQg2BmABQAmgBAiAHQA2ALAtAcIABABIAFAEIAYASIAWATIANAKIgMgJIghgaIABABQAQAPAOARQAwBAAABTQAABohPBLQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_22.setTransform(0.925,-4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1,1],0,27.1,0,-27.1).s().p("Ai/C0QhPhKAAhqQAAhoBPhLQBQhLBvAAQAnAAAiAJQBDARA0AxIABABQAQAQAOARQAwA/AABSQAABqhPBKQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_23.setTransform(0.925,-1.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0.671,1,1],0,0,0,0,0,34.7).s().p("AjIDKQhUhUAAh2QAAh1BUhTQBThUB1AAQAnAAAiAJQBIASA4A5QBUBTAAB1QAAB2hUBUQg4A4hIASQgiAJgnAAQh1AAhThTgAi/jBQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhTgwg/QgOgRgQgQIgBgBQg0gxhDgRQgigJgnAAQhvAAhQBLg");
	this.shape_24.setTransform(0.9125,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgAgClLQh2AAhUBTQhTBTAAB2QAAB1BTBUQBUBTB2AAQAlAAAjgJQBIgSA4g4QBThUAAh1QAAh2hThTQg4g4hIgTQgigIgmAAIAAAAg");
	this.shape_25.setTransform(1.25,5.1499);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_26.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_26}]},1).wait(1));

	// color
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009900").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_27.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).to({_off:true},3).wait(1));

	// shadow
	this.instance_5 = new lib.shadow();
	this.instance_5.setTransform(3,8,0.35,0.35,180);
	this.instance_5.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-32.8,86.2,81.69999999999999);


(lib.arcadebuttonblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// haze
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.173)").s().p("AANCTIgBgBIABgBIABAAIAAgCQgyiNAkiQIAAgCIAAgBIgCABIAAAAIgHARIAHgTIACAAIABABIAAADQgjCQAxCNIAAACIgBACIgBAAg");
	this.shape.setTransform(-36.5782,6.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.192)").s().p("AgTgRQAAg6AQg0IAGgRIAAAAIACgBIABABIAAACQgkCQAyCNIAAACIgBAAIgBABQglhLAAhYg");
	this.shape_1.setTransform(-37.1875,6.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.153)").s().p("AAMCVIgBgBIABAAIABgDIAAgCQgxiNAkiQIAAgDIgCgBIgCABIAAgDIADABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIAAAEQgjCQAxCLQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(-36.3952,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.133)").s().p("AAKCVIABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgyiLAkiQIAAgEQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgCgBIABgCIACABQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQABADgBACQgjCQAxCLQABADgBACQgBACgDACIgBgCg");
	this.shape_3.setTransform(-36.2157,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.114)").s().p("AAKCYIgBgBQADgBABgDQABgCgBgDQgxiLAkiQQAAgCAAgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCAAIAAgCIACAAQAEACAAACQACADgBAEQgjCOAxCLQABAEgBADQgCADgDABg");
	this.shape_4.setTransform(-36.041,6.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.094)").s().p("AAICYIABAAQADgCABgCQACgDgCgEQgwiLAjiPQAAgDAAgDQgCgCgDgCIgCgBIABgBIABAAQAEABABAFQACADgBAEQgjCOAxCLQABAEgBADQgCAEgEABIAAABIgBgCg");
	this.shape_5.setTransform(-35.8704,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.055)").s().p("AAHCcQAEgCACgFQACgEgCgFQgwiKAjiNQABgFgCgEQgCgEgFgCIgBAAIAAgCIACAAQAFACACAFQACAFgBAFQgiCNAwCKQACAFgDAFQgCAFgFACIAAgBg");
	this.shape_6.setTransform(-35.5135,6.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.075)").s().p("AAICaIAAgBQAEgBABgEQACgDgCgEQgwiLAjiOQABgEgBgDQgCgFgEgBIgCAAIABgBIABAAQAFABABAFQADAEgBAFQgjCNAwCKQACAFgCAEQgCAFgEABIgBgBg");
	this.shape_7.setTransform(-35.7008,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.016)").s().p("AAFCfQAFgDADgFQACgGgCgGQgwiJAjiMQABgGgCgGQgDgFgGgCIgBgBIAAgBIACAAQAGACADAGQADAGgCAHQgiCMAwCIQACAHgDAGQgCAGgHADIAAgBg");
	this.shape_8.setTransform(-35.1763,6.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.035)").s().p("AAFCdQAFgCACgFQADgFgCgFQgwiKAjiNQAAgFgBgFQgDgFgFgCIgCAAIABgCIACABQAFACADAFQACAGgBAGQgjCMAwCJQADAGgDAGQgCAFgGADIgBgCg");
	this.shape_9.setTransform(-35.3332,6.875);

	this.instance = new lib.haze();
	this.instance.setTransform(-15.8,31.55,0.4133,0.5505,0,-95.59,-100.0587);

	this.instance_1 = new lib.haze();
	this.instance_1.setTransform(21.4,11.3,0.3489,0.3489,178.7872);
	this.instance_1.alpha = 0.75;

	this.instance_2 = new lib.haze();
	this.instance_2.setTransform(26.55,24.9,0.35,0.35,180);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:11.3}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:15.5}},{t:this.instance},{t:this.shape_8},{t:this.shape_9},{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// shine
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEyQgkgXgLgXQgEgKB4AwQhYgYBnBGQgwgPgkgXgAlRDPQgWgbgGgWIgCgKQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABABQAMADBTBHQhLgzBLBjQgogdgbghgAFMgLQgNA7goA/QAhhWADhKQAGiWh0hnQCLBzgGCGIAAAAQBAA8hHCUQAoiqgnAEgAAvkeIgLgHQgdgWgmgFQgogGhJAeQAAgGAJgIQAJgIAdgMQAcgMAGABQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAGgFAEIgGABQgLAAgRgLg");
	this.shape_10.setTransform(3.565,5.9499);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBkIgCAEIgCABQCWAeCcgLQBLgGBMgOIAFgCIAAgCQABhkgogdQAtAOAJB3IAAABIABABQgLC0iYAfQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgdQgugSApAZQgrAZhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_11.setTransform(0.9125,-1.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.251)").s().p("AgchGQAGBGA1BHQhHguAMhfg");
	this.shape_12.setTransform(-24.1831,6.6125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.353)").s().p("AgOBhQgWhLAWhKQANgpAbgqQg/CHAlCIQgIgUgGgTg");
	this.shape_13.setTransform(-31.5986,-1.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.6)").s().p("Ah/gTQBgAsBsgcQAZgHAagLQgaAQgZAJQgsASgoAAQg/AAg5gpg");
	this.shape_14.setTransform(0.5625,21.2423);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.502)").s().p("AhzAlIgCAAQAMgCgfgOQgegOAvABIBZADIASAAIAFAGQAHAIALAAIAGgBQAIgBAGgGQAGgGABgHIAWgFQAagGAYgJQAYgKAOgQIABAAQAAANgHAJIgLANIgKAHIgQALQgIAGgsAOQgSAFgSADIgdADIgdABQgmAAgkgGgAA1AfgAA1AfIAxgPIgRAGIggAJIAAAAg");
	this.shape_15.setTransform(6.5719,37.484);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEeQgkgYgLgXQgEgKB4AxQhYgZBnBGQgwgOgkgXgAlRC6QgWgbgGgWIgCgKQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAMADBTBHQhLgzBLBjQgogcgbgigAFMgfQgNA6goA/QAhhWADhKQAGiWh0hmQCLBzgGCFIAAAAQBAA+hHCSQAoipgnAEgAAvkJIgLgHQgdgVgmgGQgogFhJAdQAAgFAJgJQAJgIAdgMQAcgLAGAAQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAHgFADIgGABQgLAAgRgLg");
	this.shape_16.setTransform(3.565,8.0125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBjIgCAFIgCABQCWAeCcgLQBLgGBMgOIAFgBIAAgEQABhjgogdQAtAOAJB3IAAABIABABQgICsibAnQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgcQgugTApAaQgrAYhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_17.setTransform(0.9125,3.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:21.2423}},{t:this.shape_13},{t:this.shape_12,p:{y:6.6125}},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:25.4423}},{t:this.shape_12,p:{y:10.8125}},{t:this.shape_13},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[]},1).wait(1));

	// hazy ring
	this.instance_3 = new lib.hazyring3();
	this.instance_3.setTransform(1,1.3,0.35,0.35,180);
	this.instance_3.alpha = 0.5898;

	this.instance_4 = new lib.hazyring2();
	this.instance_4.setTransform(1,1.3,0.35,0.35,180);
	this.instance_4.alpha = 0.5898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).to({state:[]},1).wait(1));

	// ring
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.251)").s().p("AAAELQiGAAhfhaQhfhZAAh+QAAh/BghaIAAAAIABgBIAAgBIADgCIADgBIACABIABACIgBADIgDADIAAAAIgCABIAAAAQhdBYAAB8QAAB7BdBXQBdBYCDAAQAlAAAigHQBXgSBDg/QBdhXAAh7QAAh0hRhUIgMgMIgLgKIgCgCIABgDIADgBIACABIAMAKIAAAAIAMAMQBTBWAAB3QAAB+hfBZQhFBBhYASQgjAHgmAAIAAAAg");
	this.shape_18.setTransform(1.0625,4.549);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).to({_off:true},3).wait(1));

	// gradients
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(204,204,204,0.502)","rgba(102,102,102,0.502)"],[0.671,1],-19.8,20.7,0,-19.8,20.7,34.7).s().p("AADACIgWgRIgGgFIAFADIAgAXIAHAGIAHAJIgXgTg");
	this.shape_19.setTransform(20.7875,-22.9875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)"],[0.671,1],0,-0.8,0,0,-0.8,34.7).s().p("AAAEmQh1AAhThYQhUhZAAh8QAAhrA9hQIADgDIADgCQARgQATgNIgKAJQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhSgwhAQgOgRgQgQIgBgBIAhAaQA8BQAABqQAAB8hUBZQg4A8hIATQgiAJgmAAIgBAAgAAAklQAnAAAiAJQA3ANAtAkQgugcg2gLQgigHgmAAQhmAAhQA1QBMhBBpAAg");
	this.shape_20.setTransform(0.9125,-1.4499);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgABGDbQBIgTA4g8QBThZAAh8QAAhqg7hQIALAKIgMgLIgHgIIgHgGIgggYIgFgDIgBAAQgtgkg2gNQgjgJglAAQhqAAhMBCQgTAMgSAQIAAAAIgCACIgEADQg8BQAABrQAAB8BTBZQBUBYB2AAQAlAAAjgJg");
	this.shape_21.setTransform(1.25,5.1499);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","#000000"],[0,1,1],0,26.6,0,-27.6).s().p("Ai/CuQhPhLAAhoQAAhqBPhKIAKgJQBQg2BmABQAmgBAiAHQA2ALAtAcIABABIAFAEIAYASIAWATIANAKIgMgJIghgaIABABQAQAPAOARQAwBAAABTQAABohPBLQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_22.setTransform(0.925,-4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1,1],0,27.1,0,-27.1).s().p("Ai/C0QhPhKAAhqQAAhoBPhLQBQhLBvAAQAnAAAiAJQBDARA0AxIABABQAQAQAOARQAwA/AABSQAABqhPBKQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_23.setTransform(0.925,-1.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0.671,1,1],0,0,0,0,0,34.7).s().p("AjIDKQhUhUAAh2QAAh1BUhTQBThUB1AAQAnAAAiAJQBIASA4A5QBUBTAAB1QAAB2hUBUQg4A4hIASQgiAJgnAAQh1AAhThTgAi/jBQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhTgwg/QgOgRgQgQIgBgBQg0gxhDgRQgigJgnAAQhvAAhQBLg");
	this.shape_24.setTransform(0.9125,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgAgClLQh2AAhUBTQhTBTAAB2QAAB1BTBUQBUBTB2AAQAlAAAjgJQBIgSA4g4QBThUAAh1QAAh2hThTQg4g4hIgTQgigIgmAAIAAAAg");
	this.shape_25.setTransform(1.25,5.1499);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_26.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_26}]},1).wait(1));

	// color
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003399").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_27.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).to({_off:true},3).wait(1));

	// shadow
	this.instance_5 = new lib.shadow();
	this.instance_5.setTransform(3,8,0.35,0.35,180);
	this.instance_5.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-32.8,86.2,81.69999999999999);


(lib.tounge = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.smilewithpinktounge();
	this.instance.setTransform(32.4,24.1,1,1,0,0,0,32.4,24.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AgDCRQgfgbgehKQgMgdgKgiIgNgvIgNg2QAjAAAggGQA2gJAvgZIAQAlQATAtALArIAEAQQAXB0g7AwIgFAEQgQAMgRAAQgSAAgRgQg");
	this.shape.setTransform(43.6077,32.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tounge, new cjs.Rectangle(-0.5,-0.5,65.7,49.2), null);


(lib.legsr = function(mode,startPosition,loop,reversed) {
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
	this.legs = new lib.legs();
	this.legs.name = "legs";
	this.legs.setTransform(70.7,26.4,1,1,0,0,0,69.2,39.7);

	this.timeline.addTween(cjs.Tween.get(this.legs).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legsr, new cjs.Rectangle(0,0,141.6,79.5), null);


// stage content:
(lib.MPHFinalMValdivia = function(mode,startPosition,loop,reversed) {
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
			this.eyes1.x = 271;
			this.eyes1.y = 316;
			this.mouth1.x = 267;
			this.mouth1.y = 401;
			this.armL.x = 491;
			this.armL.y = 362;
			this.armR.x = 70;
			this.armR.y = 362;
		}
		this.Face2_btn.addEventListener("click", ClickFace2_btn.bind(this));
		function ClickFace2_btn() {
			this.redbeanie.x = 273;
			this.redbeanie.y = 197;
			this.bmouth.x = 279.30;
			this.bmouth.y = 424.05;
			this.wink.x = 238.35;
			this.wink.y = 360.55;
			this.legs.x = 280.00;
			this.armL.x = 510.70;
			this.armL.y = 357.60;
			this.armR.x = 67.20;
			this.armR.y = 357.60;
		}
		
		this.eyes1.addEventListener("pressmove", dragMe.bind(this));
		this.wink.addEventListener("pressmove", dragMe.bind(this));
		this.eyebrows.addEventListener("pressmove", dragMe.bind(this));
		this.redbeanie.addEventListener("pressmove", dragMe.bind(this));
		this.partyhat.addEventListener("pressmove", dragMe.bind(this));
		this.rainbowglasses.addEventListener("pressmove", dragMe.bind(this));
		this.bluehat.addEventListener("pressmove", dragMe.bind(this));
		this.partyhat.addEventListener("pressmove", dragMe.bind(this));
		this.bmouth.addEventListener("pressmove", dragMe.bind(this));
		this.mouth1.addEventListener("pressmove", dragMe.bind(this));
		this.frown.addEventListener("pressmove", dragMe.bind(this));
		this.tounge.addEventListener("pressmove", dragMe.bind(this));
		this.armR.addEventListener("pressmove", dragMe.bind(this));
		this.armL.addEventListener("pressmove", dragMe.bind(this));
		this.legs.addEventListener("pressmove", dragMe.bind(this));
		this.goldchain.addEventListener("pressmove", dragMe.bind(this));
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.bmouth = new lib.bmouth();
	this.bmouth.name = "bmouth";
	this.bmouth.setTransform(639.5,297,1,1,0,0,0,53.6,24);

	this.tounge = new lib.tounge();
	this.tounge.name = "tounge";
	this.tounge.setTransform(903.25,285,1,1,0,0,0,32.4,24.1);

	this.reset = new lib.arcadebuttongreen();
	this.reset.name = "reset";
	this.reset.setTransform(138.05,199.6);
	new cjs.ButtonHelper(this.reset, 0, 1, 2, false, new lib.arcadebuttongreen(), 3);

	this.Face2_btn = new lib.arcadebuttonred();
	this.Face2_btn.name = "Face2_btn";
	this.Face2_btn.setTransform(195.55,117.85);
	new cjs.ButtonHelper(this.Face2_btn, 0, 1, 2, false, new lib.arcadebuttonred(), 3);

	this.Face1_btn = new lib.arcadebuttonblue();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(81.6,117.85);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 2, false, new lib.arcadebuttonblue(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghA4IAAgQIAOgNIANgNQALgOAFgHQAEgIAAgJQAAgEgBgEIgEgGIgGgDIgHgBIgHABIgIADIgGADIgFADIAAAAIAAgQQAEgCAIgCQAIgDAHAAQAPAAAIAJQAJAIAAANQAAAHgBAFIgFAKQgCAEgEAFIgIAJIgPAPIgNANIA1AAIAAANg");
	this.shape.setTransform(481.475,74.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghA4IAAgQIAOgNIANgNQALgOAFgHQAEgIAAgJQAAgEgBgEIgEgGIgGgDIgHgBIgHABIgIADIgGADIgFADIAAAAIAAgQQAEgCAIgCQAIgDAHAAQAPAAAIAJQAJAIAAANQAAAHgBAFIgFAKQgCAEgEAFIgIAJIgPAPIgNANIA1AAIAAANg");
	this.shape_1.setTransform(473.275,74.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaArQgIgOAAgdQAAgdAIgNQAJgOARAAQASAAAIAOQAJAOAAAcQAAAdgJAOQgJAOgRAAQgRAAgJgOgAgJgpQgEADgCAGQgCAFgBAJIgBASIAAATIADAOQADAFAEADQADAEAGAAQAGAAAEgDQAEgDACgGQACgFABgIIABgUIgBgSQgBgJgCgGQgCgFgEgDQgEgCgGAAQgFAAgEACg");
	this.shape_2.setTransform(465,74.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghA4IAAgQIAOgNIANgNQALgOAFgHQAEgIAAgJQAAgEgBgEIgEgGIgGgDIgHgBIgHABIgIADIgGADIgFADIAAAAIAAgQQAEgCAIgCQAIgDAHAAQAPAAAIAJQAJAIAAANQAAAHgBAFIgFAKQgCAEgEAFIgIAJIgPAPIgNANIA1AAIAAANg");
	this.shape_3.setTransform(456.875,74.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVA4IAOgiIgdhNIAPAAIAVA8IAXg8IAOAAIgsBvg");
	this.shape_4.setTransform(444.3,77.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQApQgFgCgDgDQgEgEgCgFQgCgEAAgGQAAgIAEgGQAEgFAHgEQAHgDAKgBIATgCIAAgDQAAgFgCgCIgEgFIgGgCIgHgBIgLACQgHABgGADIgBAAIAAgOIALgDIAOgBQAIAAAFABQAGACAFADQAEADACAGQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgFADIgHADQgDABgGAAQgFAAgEgCgAAHAAQgHAAgFABQgFACgEADQgDAEAAAGQAAAHAEAEQAEADAHAAQAGAAAFgCIAKgHIAAgWIgMABg");
	this.shape_5.setTransform(436.475,75.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAgA3IAAheIgcA/IgIAAIgcg/IAABeIgOAAIAAhsIAUAAIAaA7IAbg7IAUAAIAABsg");
	this.shape_6.setTransform(427.025,74.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQApQgFgCgDgDQgEgEgCgFQgCgEAAgGQAAgIAEgGQAEgFAHgEQAHgDAKgBIATgCIAAgDQAAgFgCgCIgEgFIgGgCIgHgBIgLACQgHABgGADIgBAAIAAgOIALgDIAOgBQAIAAAFABQAGACAFADQAEADACAGQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgFADIgHADQgDABgGAAQgFAAgEgCgAAHAAQgHAAgFABQgFACgEADQgDAEAAAGQAAAHAEAEQAEADAHAAQAGAAAFgCIAKgHIAAgWIgMABg");
	this.shape_7.setTransform(484.625,55.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_8.setTransform(479.225,54.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGApIgehRIAPAAIAVA/IAWg/IAPAAIgfBRg");
	this.shape_9.setTransform(473.8,55.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_10.setTransform(468.325,54.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPA3QgGgDgEgFQgEgFgCgIQgCgIAAgLQAAgKACgHQADgIAFgGQAFgFAGgDQAGgDAGAAQAGAAAFABQAEABAFADIAAgjIAOAAIAABxIgOAAIAAgJIgFAFIgGADIgGACIgGABQgHAAgFgDgAgNgHQgGAHAAAPQAAAPAEAHQAFAIAKAAQAFAAAFgDQAGgCAEgEIAAguIgJgEIgJgBQgJAAgGAIg");
	this.shape_11.setTransform(462.175,54.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_12.setTransform(456.575,54.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQApQgFgCgDgDQgEgEgCgFQgCgEAAgGQAAgIAEgGQAEgFAHgEQAHgDAKgBIATgCIAAgDQAAgFgCgCIgEgFIgGgCIgHgBIgLACQgHABgGADIgBAAIAAgOIALgDIAOgBQAIAAAFABQAGACAFADQAEADACAGQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgFADIgHADQgDABgGAAQgFAAgEgCgAAHAAQgHAAgFABQgFACgEADQgDAEAAAGQAAAHAEAEQAEADAHAAQAGAAAFgCIAKgHIAAgWIgMABg");
	this.shape_13.setTransform(450.675,55.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHA2IglhsIAPAAIAdBaIAfhaIAOAAIglBsg");
	this.shape_14.setTransform(443.225,54.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIAKIAAgUIARAAIAAAUg");
	this.shape_15.setTransform(431.775,58.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAgA2IAAhdIgcA/IgIAAIgcg/IAABdIgOAAIAAhsIAUAAIAaA8IAbg8IAUAAIAABsg");
	this.shape_16.setTransform(423.725,54.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIAvQgGgGAAgOIAAgsIgJAAIAAgMIAJAAIAAgXIAOAAIAAAXIAYAAIAAAMIgYAAIAAAlIAAAKQAAAEABADIAEADIAHABIAHgBIAEgBIABAAIAAANIgIABIgHABQgKgBgHgGg");
	this.shape_17.setTransform(495.325,34.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVApIAAhRIAOAAIAAANQAHgHAFgDQAGgDAFAAIADABIADAAIAAAOIgBAAIgDgBIgFAAQgFAAgGACQgEADgFAFIAAA5g");
	this.shape_18.setTransform(490.525,35.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAfA2IgKgeIgpAAIgKAeIgPAAIAlhsIARAAIAlBsgAgQALIAgAAIgQgyg");
	this.shape_19.setTransform(482.85,34.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVApIAAhRIAOAAIAAANQAHgHAFgDQAGgDAFAAIADABIADAAIAAAOIgBAAIgDgBIgFAAQgFAAgGACQgEADgFAFIAAA5g");
	this.shape_20.setTransform(471.425,35.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAgQgKgLAAgVQAAgSAKgMQALgMAPAAQAIAAAGACQAGACAEAFQAFAEACAIQACAGAAAKIAAAGIg3AAQAAAPAHAIQAHAHAMAAIAJgBIAHgDIAHgDIAEgDIABAAIAAAPIgGACIgHADIgHACIgIAAQgTAAgLgLgAgHgdQgEABgDADQgDAEgBAEIgCAJIAqAAIgBgKIgEgHQgCgDgEgBQgEgBgFAAQgFAAgEABg");
	this.shape_21.setTransform(464.325,35.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIAvQgGgGAAgOIAAgsIgJAAIAAgMIAJAAIAAgXIAOAAIAAAXIAYAAIAAAMIgYAAIAAAlIAAAKQAAAEABADIAEADIAHABIAHgBIAEgBIABAAIAAANIgIABIgHABQgKgBgHgGg");
	this.shape_22.setTransform(457.925,34.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQAoQgEgBgDgEQgEgEgCgGQgCgGAAgIIAAg0IANAAIAAAuIABAKQAAAFADADQABADADABQADACAFAAQAEAAAGgDIAKgHIAAg8IAOAAIAABRIgOAAIAAgJIgMAIQgFADgGAAQgGAAgFgCg");
	this.shape_23.setTransform(451.15,35.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghA5IAAhvIANAAIAAAJQAGgFAGgDQAGgDAHAAQAOAAAIALQAHALAAATQAAAUgJALQgKAMgPABQgFgBgFgBQgFgBgFgDIAAAigAgJgpQgGADgFAFIAAAtIAKADIAJABQAJAAAGgHQAGgJAAgOQAAgNgEgIQgFgIgKAAQgFAAgFACg");
	this.shape_24.setTransform(443.125,37);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAoAqIAAgvIgBgKIgCgIIgEgDQgDgCgEAAQgEAAgFACQgFADgFAFIAAADIAAAEIAAA1IgNAAIAAgvIAAgKIgCgIIgEgDQgDgCgFAAQgEAAgFADQgFADgFAEIAAA8IgNAAIAAhRIANAAIAAAKQAGgGAFgDQAGgDAGAAQAHAAAGADQAEADADAIQAHgHAFgDQAGgEAHAAQAGAAAEABQAEACADAEQAEADACAGQABAFAAAJIAAA1g");
	this.shape_25.setTransform(432.475,35.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgaAfQgKgLAAgUQAAgUALgLQAKgLAPAAQARAAAKALQAKALAAAUQAAAVgKALQgKALgRAAQgQAAgKgMgAgQgXQgFAIAAAPQAAAPAFAIQAGAIAKAAQALAAAGgIQAFgHAAgQQAAgPgFgIQgGgHgLAAQgKAAgGAHg");
	this.shape_26.setTransform(422.075,35.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgLA1QgJgDgHgIQgGgHgEgKQgDgLAAgOQAAgMADgLQAEgKAGgIQAHgHAJgEQAJgDAKAAIAKABIAJABIAHADIAHAEIAAARIgBAAIgFgEIgHgFIgJgEQgFgBgGAAQgHAAgGACQgGADgFAGQgEAGgDAIQgCAJAAAJQAAALACAIQADAJAFAFQAEAGAGACQAGADAHAAQAGAAAFgBQAGgCAEgDIAHgEIAEgEIABAAIAAARIgGAEIgIACIgJACIgLABQgJABgJgEg");
	this.shape_27.setTransform(413.625,34.25);

	this.goldchain = new lib.goldchain();
	this.goldchain.name = "goldchain";
	this.goldchain.setTransform(775,533.5,4.7981,1.8809,4.9751,0,0,18,42.1);

	this.armL = new lib.leftarm();
	this.armL.name = "armL";
	this.armL.setTransform(731,373.5,1,1,0,0,0,60.5,52.5);

	this.armR = new lib.rightarm();
	this.armR.name = "armR";
	this.armR.setTransform(593.2,373.5,1,1,0,0,0,60.5,52.5);

	this.frown = new lib.frown();
	this.frown.name = "frown";
	this.frown.setTransform(827.55,279.9,1,1,0,0,0,36,19);

	this.mouth1 = new lib.smilewithteeth();
	this.mouth1.name = "mouth1";
	this.mouth1.setTransform(745,291,1,1,0,0,0,36,18);

	this.instance = new lib.smile();
	this.instance.setTransform(376.95,405.9,1,1,0,0,0,36,17.5);

	this.bluehat = new lib.bluebaseballhat();
	this.bluehat.name = "bluehat";
	this.bluehat.setTransform(890.3,212.55,1,1,0,0,0,36.2,36);

	this.redbeanie = new lib.redbeenie();
	this.redbeanie.name = "redbeanie";
	this.redbeanie.setTransform(675.3,163.7,1.0519,1.1965,0,0,1.4006,38,39.2);

	this.partyhat = new lib.partyhat();
	this.partyhat.name = "partyhat";
	this.partyhat.setTransform(772.65,164.3,1,1,0,0,0,35.3,41.5);

	this.instance_1 = new lib.readingglasses();
	this.instance_1.setTransform(899.55,87.25,1,1,0,0,0,36,9);

	this.rainbowglasses = new lib.sunglasses();
	this.rainbowglasses.name = "rainbowglasses";
	this.rainbowglasses.setTransform(891.1,130.4,1,1,0,0,0,58.9,26);

	this.eyebrows = new lib.eyebrows();
	this.eyebrows.name = "eyebrows";
	this.eyebrows.setTransform(737.6,86.25,1,1,0,0,0,97.9,10);

	this.wink = new lib.winkingeyes();
	this.wink.name = "wink";
	this.wink.setTransform(881.3,44.2,1,1,0,0,0,54.2,21.5);

	this.eyes1 = new lib.openeyes();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(766.6,44.9,1,1,0,0,0,52.4,22.2);

	this.legs = new lib.legsr();
	this.legs.name = "legs";
	this.legs.setTransform(864.8,378.8,1,1,0,0,0,70.8,39.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgDAFIAFgJIACAJ");
	this.shape_28.setTransform(647.8,182.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AujgrIAEAIIgEAAADoAsIAAAAQAAAAABAAAOjAsQAAAAABAAIAAAA");
	this.shape_29.setTransform(813.825,304.6375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3333FF").s().p("AFdAAIABAAIAAAAIgBAAgAldAAIABAAIgBAAg");
	this.shape_30.setTransform(872,309.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.legs},{t:this.eyes1},{t:this.wink},{t:this.eyebrows},{t:this.rainbowglasses},{t:this.instance_1},{t:this.partyhat},{t:this.redbeanie},{t:this.bluehat},{t:this.instance},{t:this.mouth1},{t:this.frown},{t:this.armR},{t:this.armL},{t:this.goldchain},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.Face1_btn},{t:this.Face2_btn},{t:this.reset},{t:this.tounge},{t:this.bmouth}]}).wait(1));

	// Character
	this.instance_2 = new lib.bball();
	this.instance_2.setTransform(288.9,398.25,1,1,0,0,0,161.2,161.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYC3QgXgGgYAAQglAAgeATQgKAHgFAAQgEAAgEgEQgFgEAAgDQAAgEAIgHIAQgPIAlgmIA0g4IhYgnIAAh7QApgLAXgMQAYgOAVgXQAzASAfAIQAWAFAUAAQAXAAAMgIQAMgJAAgJQAAgGgIgGQgPgLAAgLQAAgKAHgGQAGgHAJAAQALAAAJAJQAJAIAAAOQAAAOgHAOQgHAOgUAVIhOBRIBdAnIAACMQgiADgaALQgbALgjAaQgdgPgVgFgABCCUIAAhgIg7gbIhfBrQASgEAPgDQAPgCANAAQAsAAAxAZgAg8gEIA2AXIBWhfQgaAGgUAAQgwAAgugbg");
	this.shape_31.setTransform(379.65,54.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgwDHQgPgJgMgPQgdAWgaAHIgFgGQARgOAHgOQAHgPAAgZIAAgxQgWgDgYAAIgHAAIAAgcQAdgFAYgCIAAilQAAgagJgLQgJgKgJAAQgIAAgLAJIgKgMIBUgzQAgATALAQQAKAQAAAcIBnhPQA0AgASAWQALAPAAAdIAAC4Qg0AUhBAzQgYgNgrgQIAAAXQAAAqAKARQAKASAZAOIgFAJQgrgNgWgMgAgXh/IAACqQAuAIARAEQARAEAXAJIAAi5QAAgPgCgDQgBgDgKgHIgkgYg");
	this.shape_32.setTransform(342.075,61.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhLCIQgdgIgkgCIgEgGQAPgLAEgIQAFgMAAgbIAAi1QBJgUA0glQA4AgBUARIAAD3Qg7AUgbANQgVAJgSAPQg6gdglgMgAgnBYIBnAjIAAjRQgxgUgTgGQgPgEgUgDg");
	this.shape_33.setTransform(305.775,57.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhLCIQgdgIgkgCIgEgGQAPgLAEgIQAFgMAAgbIAAi1QBJgUA0glQA4AgBUARIAAD3Qg7AUgbANQgVAJgSAPQg6gdglgMgAgnBYIBnAjIAAjRQgxgUgTgGQgPgEgUgDg");
	this.shape_34.setTransform(269.225,57.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AB7EaQgNgMABgSQgBgMAKgQQAKgQAngnQAngoALgUQALgVAFgdQgygTgoAAQg0AAgyATQgxAUhCAyIApgBQAfAAA0AEIAaABQAUAAAPgIQAQgIAQgTIASAIIhZBoQg3gTgogIQgogIgqAAQgvAAgkAKQgkAJgPAPQgLALAAAJQAAAGAJAMQAHAIAAAHQAAAJgGAFQgGAFgHAAQgKAAgKgJQgIgJgBgNQAAgPALgPQAKgPAjgeQAjgdALgQQAKgQAAgPQAAgMgIgGQgIgHgMAAQgYAAgPAdIgSAAQAEgbAKgNQAJgOATgJQAPgIAbgBQgCgogSgPQgSgPggAAQgTAAgMAGQgLAGgMARIgPgEQAFgVAIgLQANgQAWgKQAWgIAZAAIAjABIgBgaQAAgoAagkQATgaAtgcQgsAMgQAAQgNAAg7gJQgWgDgIAAQgOAAgLAKQgMAJgFAaIgVAAQAHgeALgRQASgYAZgNQAbgNAaAAQARAAAoAKQAnAJAYAAQAwAAA7gZIAHAOQhQAageAnQgUAZAAA6IAACaQAAApgKAXQgLAXgiAkQAxgXAZgXQAagYAIgUQAGgUAAgyIAAhwQAAg1APgZQAOgaAjgUQAkgTBcgYIAIAOQg2APgZAQQgZAPgIASQgHARAAAnIAABEICchnQAwAZAZAXQAaAXAIAXQAIAXAAA0IAAAwQAAAngGATQgFATgSASQgaAcg9AoQguAegKALQgKALAAAIQAAAEAEAEQAEADAHAAIAMgCIANgBQAKAAAFAEQAFAFAAAHQAAAKgJAFQgLAJgSAAQgSAAgOgMgAC3AdQAUADAgAKIAAhUQgfALgUAEQgUADgZAAQgtAAgygQIAABSQAxgRAsAAQAYAAAWAEgAAshIIAAAPQA0ASAtAAQAaAAAVgFQAUgEAbgLQgIgZgSgSQgTgTgpgTg");
	this.shape_35.setTransform(216.55,54.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag8AAIA8gyIA9AyIg9Azg");
	this.shape_36.setTransform(150.775,69.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhDCOQgWgLgagGIAAgHQASgKAFgKQAFgLAAgeIAAiGQAAgZgGgJQgIgIgIAAQgIAAgQANIgKgKIBTg8QAiAWANAQQAHAKAAARIBZhBIA9A9Ig9AsIgyg1IgnAeIAADAIAtAbIApgbIAJALIhlBEQgggYgXgLg");
	this.shape_37.setTransform(127.95,57.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AmMEZQgEgOgBgJQAAgSAMgQQALgQATgHQAOgGAngDQAlgDATgRQASgSAAgeQAAgvgbgfQgagegmAAQgeAAgSAXIgPgFQALgZAOgMQAOgNAYgIQASgGAiAAIgBgPQAAg3AbgnQAagmA6ggQA5ggBqgnQAnAQANARQANARACAgICchSIBgA7IAlgfIAMALQgaAYgIAQQgGAPAAAfIAAD/QAAAoAIAKQAHAKAOAAQALAAAUgPIAMANIhhA/QgjgPgMgTQgMgTAAgwIAAk8IhDgqIgbAOIAACkIAwAAIgwAyIAACLIAfgWIANALIiUBnQghghgUgQQgPgLgVgJIAAgLQATgGAGgLQAEgJAAggIAAhdIh5AAIAACOQAAA7gkAgQgkAgg6AAQgNAAgggEQgXgDgKAAQgUAAgKAIQgJAHAAASgAi0ifQgLAUAAAzIAAC6QAAAvgOASQgOATgpANIAfABQAdAAATgIQASgJAGgMQAFgNAAgfIAAj5QABgcAEgTQADgMAIgRQgiAWgKAVgABFBLQgBAtAIAMQAMAWATAAQAKAAASgNIAAiXIhCAAgAhmjYQgQAOgIATQgHATAAAjIAABpIAhgkIBYAAIAAhiQAAglgLgQQgLgQgdgKQgcAMgLAJgABFizIAAB3IBCAAIAAiag");
	this.shape_38.setTransform(69.8,52.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/gAhNggQgWAWAAAeQAAATAIAQQAGAKAIAIQAWAWAfAAQAeAAAWgWQAIgIAFgKQAJgQAAgTQAAgegWgWQgWgWgeAAQgfAAgWAWg");
	this.shape_39.setTransform(786.5,52.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.instance_2}]}).wait(1));

	// Frame
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_40.setTransform(480,320);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_41.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,320,462,311);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#CC6600",
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