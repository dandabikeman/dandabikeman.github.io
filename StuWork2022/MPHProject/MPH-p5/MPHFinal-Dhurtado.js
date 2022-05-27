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


(lib.teal = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#0099CC").ss(2,1,1).p("ALsAAIg+AAArrAAIA9AA");
	this.shape.setTransform(103.45,134.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AquKiIAArAIlckWIIBltQIJFkIJlkIICFtIldEWIAALAg");
	this.shape_1.setTransform(103.45,67.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CCCC").s().p("AqtKiIAArAIldkWIIBltQIJFkIKlkIIBFtIldEWIAALAg");
	this.shape_2.setTransform(103.45,67.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.teal, new cjs.Rectangle(-1,-1,208.9,136.8), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAmAAQAAAQgLALQgLALgQAAQgPAAgLgLQgLgLAAgQQAAgOALgLQALgMAPAAQAQAAALAMQALALAAAOg");
	this.shape.setTransform(70.2,18.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAaQgLgLAAgPQAAgOALgMQAMgLAOAAQAPAAALALQALAMAAAOQAAAPgLALQgLALgPAAQgOAAgMgLg");
	this.shape_1.setTransform(70.2,18.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AArAAQAAASgMAMQgNANgSAAQgRAAgNgNQgMgMAAgSQAAgRAMgNQANgNARAAQASAAANANQAMANAAARg");
	this.shape_2.setTransform(65.8,8.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAfQgMgNAAgSQAAgRAMgNQANgNARAAQASAAAMANQAOANAAARQAAASgOANQgMANgSgBQgRABgNgNg");
	this.shape_3.setTransform(65.8,8.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AB/AAQAAA0glAlQglAmg1AAQg0AAglgmQglglAAg0QAAg0AlglQAlglA0AAQA1AAAlAlQAlAlAAA0g");
	this.shape_4.setTransform(63.65,12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhZBZQglglAAg0QAAg0AlglQAlglA0AAQA0AAAmAlQAlAlAAA0QAAA0glAlQgmAmg0AAQg0AAglgmg");
	this.shape_5.setTransform(63.65,12.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("AAmAAQAAAQgLALQgLALgQAAQgPAAgLgLQgLgLAAgQQAAgOALgLQALgMAPAAQAQAAALAMQALALAAAOg");
	this.shape_6.setTransform(19.25,18.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAaQgLgLAAgPQAAgOALgMQAMgLAOAAQAPAAALALQALAMAAAOQAAAPgLALQgLALgPAAQgOAAgMgLg");
	this.shape_7.setTransform(19.25,18.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,1,1).p("AArAAQAAASgMAMQgNANgSAAQgRAAgNgNQgMgMAAgSQAAgRAMgNQANgNARAAQASAAANANQAMANAAARg");
	this.shape_8.setTransform(14.85,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAfQgMgNAAgSQAAgRAMgNQANgNARAAQASAAAMANQAOANAAARQAAASgOANQgMANgSgBQgRABgNgNg");
	this.shape_9.setTransform(14.85,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,1,1).p("AB/AAQAAA0glAlQglAmg1AAQg0AAglgmQglglAAg0QAAg0AlglQAlglA0AAQA1AAAlAlQAlAlAAA0g");
	this.shape_10.setTransform(12.7,12.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhZBZQglglAAg0QAAg0AlglQAlglA0AAQA0AAAmAlQAlAlAAA0QAAA0glAlQgmAmg0AAQg0AAglgmg");
	this.shape_11.setTransform(12.7,12.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1.5,-1.5,79.4,28.5), null);


(lib.purple = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#252525").ss(2,1,1).p("AquKiIAArAIlckWIIBltQIJFkIJlkIICFtIldEWIAALAgALsKiIg+AAArrKiIA9AA");
	this.shape.setTransform(103.45,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC99FF").s().p("AqtKiIAArAIldkWIIBltQIJFkIKlkIIBFtIldEWIAALAg");
	this.shape_1.setTransform(103.45,67.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purple, new cjs.Rectangle(-1,-1,208.9,136.8), null);


(lib.pink = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#252525").ss(2,1,1).p("AquKiIAArAIlckWIIBltQIJFkIJlkIICFtIldEWIAALAgALsKiIg+AAArrKiIA9AA");
	this.shape.setTransform(103.45,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF99CC").s().p("AqtKiIAArAIldkWIIBltQIJFkIKlkIIBFtIldEWIAALAg");
	this.shape_1.setTransform(103.45,67.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pink, new cjs.Rectangle(-1,-1,208.9,136.8), null);


(lib.NECKLACE = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#252525").ss(1,1,1).p("AEfjOQAAALgIAHQgHAHgKAAQgLAAgHgHQgHgHAAgLQAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKgAEFicQAAAKgHAGQgHAIgKAAQgKAAgHgIQgHgGAAgKQAAgLAHgHQAHgHAKAAQAKAAAHAHQAHAHAAALgAD1heQAAAFgCAFQgCAGgFAEQgJAKgMAAQgMAAgJgKQgEgEgCgGQgCgFAAgFQAAgGACgGQACgFAEgEQAJgJAMAAQAMAAAJAJQAEAEACAFQADAGAAAGgADigfQAAAOgKAKQgKAJgOAAQgOAAgKgJQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOgADSAyQAAAPgKALQgLAKgPAAQgPAAgKgKQgLgLAAgPQAAgPALgKQAKgLAPAAQAPAAALALQAKAKAAAPgABnB/QABgHADgGQADgIAFgFQAMgMARAAQARAAAMAMQAGAFADAIQADAHAAAJQAAARgMAMQgHAHgIADABPDAQAAgIADgGQABgDACgDQACgEAEgEQAFgFAHgDQAHgDAJAAQAQAAAMALQALAMAAAQQAAADAAADQgCANgJAJQgMAMgQAAQgRAAgLgMQgEgDgCgEQgGgJAAgMIAAAAQgBABgBABQgNANgSAAQgSAAgNgNQgNgNAAgSQAAgSANgNQANgNASAAQASAAANANQAFAFADAGAjxgHQAAAIgGAHQgHAGgJAAQgKAAgGgGQgHgHAAgIQAAgKAHgGQAGgHAKAAQAJAAAHAHQAGAGAAAKgAjBAIQAAAKgIAHQgHAHgKAAQgKAAgHgHQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAIAHAAAKgAhHBaQAAAOgJAKIgBAAQgKAKgOAAQgOAAgKgKIAAAAQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOgAiIAuQAAAMgJAIQgJAJgMAAQgMAAgJgJQgIgIAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMgAAFCGQAAAQgLALQgLAMgQAAQgQAAgLgMQgLgLAAgQQAAgLAFgJQADgEADgEQALgKAQAAQAQAAALAKQAEAEACAEQAFAJAAALg");
	this.shape.setTransform(28.675,23.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ABbDcIgGgIQgGgJAAgLIAAgBQAAgHADgGIADgGQACgFAEgDQAFgGAHgCQAHgDAJAAQAQAAAMALQALALAAARIAAAGQgCANgJAJQgMAMgQgBQgRABgLgMgAAPDCQgNgNAAgSQAAgSANgNQANgNASAAQASAAANANQAFAFADAGQgGAJAAAMQAAAHADAHQgDAGAAAHIgCADQgNANgSAAQgSAAgNgNgABSCyIAAAAgAg8ChQgLgLAAgQQAAgMAFgJIAGgGQALgMAQAAQAQAAALAMIAGAGQAFAJAAAMQAAAQgLALQgLAMgQAAQgQAAgLgMgACeCkQAAgRgLgLQgMgMgQAAQgJAAgHADQABgHADgHQADgGAFgGQAMgMARAAQARAAAMAMQAGAGADAGQADAIAAAJQAAARgMAMQgHAHgIADIAAgFgAiBByIAAgBQgKgJAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOQAAAOgJAJIgBABQgKAKgOAAQgOAAgKgKgACVBLQgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLgAi7BCQgIgIAAgMQAAgMAIgKQAJgIAMAAQAMAAAJAIQAJAKAAAMQAAAMgJAIQgJAJgMAAQgMAAgJgJgAjrAYQgHgHAAgJQAAgJAHgIQAHgHAKAAQAKAAAHAHQAIAIAAAJQAAAJgIAHQgHAIgKAAQgKAAgHgIgAkXAIQgHgHAAgIQAAgKAHgHQAGgGAKAAQAJAAAHAGQAGAHAAAKQAAAIgGAHQgHAGgJAAQgKAAgGgGgACogHQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOQAAAOgKAKQgKAJgOAAQgOAAgKgJgADChKQgEgEgCgGQgCgFAAgFQAAgGACgGQACgFAEgEQAJgIAMAAQAMAAAJAIQAEAEACAFQADAGAAAGQAAAFgCAFQgCAGgFAEQgJAJgMAAQgMAAgJgJgADciMQgHgGAAgLQAAgKAHgHQAHgGAKAAQAKAAAHAGQAHAHAAAKQAAALgHAGQgHAIgKAAQgKAAgHgIgAD0i8QgHgHAAgKQAAgLAHgHQAHgIALAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAQgLAAgHgIg");
	this.shape_1.setTransform(28.675,23.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NECKLACE, new cjs.Rectangle(-1,-1,59.4,48.3), null);


(lib.mustache = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AryEKQhJA6EWoNQCoiWDyCWIBkCqIB3iqQD6iUCWCUIEiFdQlejGjSAxIkDB3Ii+h3QkCiDkBGOQgEAFgDAGAryEKQAVgRA2hH");
	this.shape.setTransform(77.017,27.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AoljGQCoiWDyCWIBkCqIB3iqQD6iVCWCVIEiFdQlejGjSAwIkDB4Ii+h4QkCiCkBGOQgHAFgEAAQgjAAD7nYg");
	this.shape_1.setTransform(77.017,27.4336);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mustache, new cjs.Rectangle(-1,-1,156.1,57.4), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhIgRQA7BVBWhb");
	this.shape.setTransform(39.525,32.9064);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ag9gSQA9BHA+g+");
	this.shape_1.setTransform(26,32.1829);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAAg+IAAB9");
	this.shape_2.setTransform(32.2,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ABaAAQAAAmgaAaQgaAagmAAQglAAgagaQgagaAAgmQAAglAagaQAagaAlAAQAmAAAaAaQAaAaAAAlg");
	this.shape_3.setTransform(33.3,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag/A/QgagaAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAaQgbAbglAAQgkAAgbgbg");
	this.shape_4.setTransform(33.3,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AFFAAQAABjhgBGQhfBHiGAAQiGAAhfhHQhfhGAAhjQAAhiBfhHQBfhGCGAAQCGAABfBGQBgBHAABig");
	this.shape_5.setTransform(32.5,24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#997242").s().p("AjlCqQhfhGAAhkQAAhjBfhGQBghGCFAAQCHAABfBGQBfBGAABjQAABkhfBGQhfBGiHAAQiFAAhghGg");
	this.shape_6.setTransform(32.5,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth3, new cjs.Rectangle(-1,-1,67,50), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhIADICRgF");
	this.shape.setTransform(39.525,30.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ag9gFQBcATAfgL");
	this.shape_1.setTransform(26,30.8973);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAAg+IAAB9");
	this.shape_2.setTransform(32.2,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ABaAAQAAAmgaAaQgaAagmAAQglAAgagaQgagaAAgmQAAglAagaQAagaAlAAQAmAAAaAaQAaAaAAAlg");
	this.shape_3.setTransform(33.3,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag/A/QgagaAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAaQgbAbglAAQgkAAgbgbg");
	this.shape_4.setTransform(33.3,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AFFAAQAABjhgBGQhfBHiGAAQiGAAhfhHQhfhGAAhjQAAhiBfhHQBfhGCGAAQCGAABfBGQBgBHAABig");
	this.shape_5.setTransform(32.5,24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#997242").s().p("AjlCqQhfhGAAhkQAAhjBfhGQBghGCFAAQCHAABfBGQBfBGAABjQAABkhfBGQhfBGiHAAQiFAAhghGg");
	this.shape_6.setTransform(32.5,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth2, new cjs.Rectangle(-1,-1,67,50), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAgpIAABT");
	this.shape.setTransform(31.9,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AA4gWQAAAlgQAaQgRAagXAAQgXAAgQgaQgRgaAAglQAAgkAUgEQATgDAXAAQAXAAAOADQANAEAAAkg");
	this.shape_1.setTransform(31.8,36.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9999").s().p("AgnApQgQgaAAgkQAAgmATgDQAUgDAWAAQAYAAANADQANADAAAmQAAAkgQAaQgQAagYAAQgWAAgRgag");
	this.shape_2.setTransform(31.8,36.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhIADICRgF");
	this.shape_3.setTransform(39.525,30.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Ag9gDIB7AH");
	this.shape_4.setTransform(26,30.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AAAg+IAAB9");
	this.shape_5.setTransform(32.2,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("ABaAAQAAAmgaAaQgaAagmAAQglAAgagaQgagaAAgmQAAglAagaQAagaAlAAQAmAAAaAaQAaAaAAAlg");
	this.shape_6.setTransform(33.3,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag/A/QgagaAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAaQgbAbglAAQgkAAgbgbg");
	this.shape_7.setTransform(33.3,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AFFAAQAABjhgBGQhfBHiGAAQiGAAhfhHQhfhGAAhjQAAhiBfhHQBfhGCGAAQCGAABfBGQBgBHAABig");
	this.shape_8.setTransform(32.5,24);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#997242").s().p("AjlCqQhfhGAAhkQAAhjBfhGQBghGCFAAQCHAABfBGQBfBGAABjQAABkhfBGQhfBGiHAAQiFAAhghGg");
	this.shape_9.setTransform(32.5,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth1, new cjs.Rectangle(-1,-1,67,50), null);


(lib.eyes3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#252525").ss(3,1,1).p("ACHAAQAAA3goAoQgoAng3AAQg2AAgognQgogoAAg3QAAg3AognQAogoA2AAQA3AAAoAoQAoAnAAA3g");
	this.shape.setTransform(75.5,24.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AheBfQgogoAAg3QAAg2AogoQAognA2AAQA3AAAoAnQAnAoAAA2QAAA3gnAoQgoAog3AAQg2AAgogog");
	this.shape_1.setTransform(75.5,24.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#252525").ss(3,1,1).p("ACEAAQAAA2gnAnQgnAng2AAQg2AAgngnQgmgnAAg2QAAg2AmgnQAngmA2AAQA2AAAnAmQAnAnAAA2g");
	this.shape_2.setTransform(17.85,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhcBdQgngnAAg2QAAg1AngoQAngmA1AAQA2AAAnAmQAnAoAAA1QAAA2gnAnQgnAng2AAQg1AAgngng");
	this.shape_3.setTransform(17.85,25.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#252525").ss(3,1,1).p("AiTAAIEnAA");
	this.shape_4.setTransform(76.85,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#252525").ss(3,1,1).p("AihAAIFDAA");
	this.shape_5.setTransform(16.2,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes3, new cjs.Rectangle(-1.5,-1.5,94.7,41.4), null);


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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAAhHIAACP");
	this.shape.setTransform(80.7789,10.4,0.7393,0.595);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AAkgyIhHBl");
	this.shape_1.setTransform(58.804,3.0363,0.7393,0.595);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AAfg3Ig9Bv");
	this.shape_2.setTransform(69.3756,8.8529,0.7393,0.595);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AgvgyIBfBl");
	this.shape_3.setTransform(96.8396,3.0363,0.7393,0.595);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AgcgxIA5Bj");
	this.shape_4.setTransform(88.837,7.2314,0.7393,0.595);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("AAAg1IAABr");
	this.shape_5.setTransform(80.7789,9.329,0.7393,0.595);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("AAAhHIAACP");
	this.shape_6.setTransform(24.6289,10.4,0.7393,0.595);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("AAkgyIhHBl");
	this.shape_7.setTransform(2.654,3.0363,0.7393,0.595);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,1,1).p("AAfg3Ig9Bv");
	this.shape_8.setTransform(13.2256,8.8529,0.7393,0.595);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3,1,1).p("AgvgyIBfBl");
	this.shape_9.setTransform(40.6896,3.0363,0.7393,0.595);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,1,1).p("AgcgxIA5Bj");
	this.shape_10.setTransform(32.687,7.2314,0.7393,0.595);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3,1,1).p("AAAg1IAABr");
	this.shape_11.setTransform(24.6289,9.329,0.7393,0.595);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,1,1).p("ApTg1QDeDWDRjWAClg1QDdDWDSjW");
	this.shape_12.setTransform(49.3552,3.2197,0.7394,0.5951);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes2, new cjs.Rectangle(-1.5,-1.5,103.4,17.7), null);


(lib.buttonshine = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.929)").s().p("AjRDnQgEgBgDgEIgBAAQgEgFABgFIAAAAQAjlAGCh+QAEgBAFABQAEABADAEIABAAQAEAFgBAFQAAAHgGADIgBAAQkzCahiESIAAAAQgCAGgHACIAAAAIgEAAIgFAAgADKjhQl+B9gjE8IAAAAQgBAEADADIAAAAQACACAEABQADABADgBQAEgBABgEIAAAAQBikUE2iaIAAAAQAEgCAAgEIAAAAQABgEgDgDIAAAAQgCgCgEgBIgDAAIgDAAg");
	this.shape.setTransform(-0.0164,0.0369);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.863)").s().p("AjSDsQgGgCgEgFIAAABQgGgHABgHIAAgBQAjlCGFh/QAGgCAGABIAAAAQAGACAEAEIAAABQAHAHgCAHIAAgBQAAAKgJAEIgBABQkxCYhhEQIgBABQgCAIgJADIAAgBIgGABIgGAAgADJjmQmCB+gjFAIAAAAQgBAFAEAFIABAAQADAEAEABQAFABAEgBIAAAAQAHgCACgGIAAAAQBikSEziaIABAAQAGgDAAgHQABgFgEgFIgBAAQgCgEgFgBIgFAAIgEAAg");
	this.shape_1.setTransform(-0.0231,0.0358);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.796)").s().p("AjTDwQgIgCgEgFIgBAAQgHgIABgJIAAgCQAjlFGIiAQAHgDAIADQAIACAEAFIABAAQAIAIgCAKQAAALgLAHIgBAAQkwCYhhEOIAAABQgDAKgLADIgBAAIgHABIgHgBgAjSDsQAHABAFgCIAAABQAJgDACgIIABgBQBhkQExiYIABgBQAJgEAAgKIAAABQACgHgHgHIAAgBQgEgEgGgCIAAAAQgHgBgFACQmFB/gjFCIAAABQgBAHAGAHIAAgBQAEAFAGACg");
	this.shape_2.setTransform(-0.0197,0.0365);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.729)").s().p("AjVD1QgJgCgGgHIABABQgKgKACgLIAAgCQAjlJGMiBQAIgDAKADIAAAAQAJACAGAHIgBgBQAKAKgCAMQAAAOgOAIIgBABQkuCWhgENIAAABQgEAMgOAEIgBAAIgIABIgJgBgADFjvQmICAgjFFIAAACQgBAJAHAIIABAAQAEAFAIACQAHACAHgCIABAAQALgDADgKIAAgBQBhkOEwiYIABAAQALgHAAgLQACgKgIgIIgBAAQgEgFgIgCIgHgBIgIABg");
	this.shape_3.setTransform(-0.016,0.0428);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.663)").s().p("AjWD6IAAAAQgKgDgHgHIAAAAQgLgMACgMIAAgDQAjlLGPiDQAKgDALADQALADAGAHQAMANgDANQgBARgPAIIgCABQksCWhfEKIgBACQgEAOgQAFQgFACgGAAIgKgCgAjVD1QAKADAHgDIABAAQAOgEAEgMIAAgBQBgkNEuiWIABgBQAOgIAAgOQACgLgKgLIABABQgGgHgJgCIAAAAQgKgDgIADQmMCBgjFJIAAACQgCALAKAKIgBgBQAGAHAJACg");
	this.shape_4.setTransform(-0.0113,0.0371);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.396)").s().p("AjbENIAAAAQgRgEgKgMQgRgSADgUIAAgEQAjlYGdiHQAPgFARAFIAAAAQAQAEAKALQAUAVgFAXQgDAZgYAOIgCABQkkCShdEDIgCADQgGAWgaAIIgCAAQgHADgIAAQgHAAgIgDgAC+kHQmaCGgjFVIAAADQgDASAQARQAJAKAPAFQAPAEANgFQAZgHAGgUIABgDQBekFEmiSIACgCQAXgNABgZQADgTgRgSIABABQgJgKgPgFQgIgCgGAAQgIAAgHADg");
	this.shape_5.setTransform(-0.0101,0.0351);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.063)").s().p("AjiEmQgYgHgPgRQgYgbAEgdIAAgGQAjlnGuiMIAAAAQAVgIAaAHIgBgBQAXAHAPAPQAdAegHAiQgDAmgkAUIgEADQkaCMhbD6IgCAFQgKAggnAMQgLAEgMAAQgKAAgMgDgAi3EgQAlgLAKgeIACgEQBbj8EciOIADgCQAigTADgkQAGgfgbgcIACACQgOgRgXgGIABAAQgYgGgUAHQmrCLgjFlIAAAFQgEAcAXAZQAOAQAXAGIgBAAQAXAGATgHg");
	this.shape_6.setTransform(-0.003,0.0406);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.129)").s().p("AjhEhIABAAQgXgGgOgQQgXgZAEgcIAAgFQAjlkGriMQAUgHAYAGIgBAAQAXAGAOARIgCgCQAbAcgGAfQgDAkgiATIgDACQkcCOhbD8IgCAEQgKAfglAKQgKAEgLAAQgKAAgLgDgAi5EcQAjgLAJgcIACgEQBcj9EeiPIADgCQAfgSADggQAHgegagbIABACQgNgPgVgGIAAAAQgWgGgTAHIABAAQmoCKgjFhIAAAFQgEAbAXAYQANANAUAGIAAAAQAVAGARgGg");
	this.shape_7.setTransform(-0.0024,0.0349);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.196)").s().p("AjfEcIAAAAQgUgGgNgNQgXgYADgbIABgFQAjlhGniKIAAAAQATgHAWAGIAAAAQAVAGANAPIgCgCQAbAbgIAeQgCAggfASIgEACQkdCPhcD9IgCAEQgJAcgjALQgJADgKAAQgJAAgKgDgAi4EWIgCABQAggKAIgaIACgEQBcj/EgiQIADgCQAdgQACgeQAHgcgYgYQgMgNgTgFIABAAQgVgGgRAHIAAAAQmkCJgjFeIgBAFQgDAYAWAWIgCgBQAMAOAUAFIAAAAQAUAGASgHg");
	this.shape_8.setTransform(0.0006,0.035);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.329)").s().p("AjcESQgTgFgLgNQgSgTADgWIAAgEQAjlbGhiIIgBAAQAQgGAUAFIgBAAQATAFALANQAUAWgFAYQgDAcgaAPIgDACQkiCQhdECIgBADQgHAYgdAIQgIAEgKAAQgIAAgIgDgAi9ENIACAAQAagIAGgWIACgDQBdkDEkiSIACgBQAYgOADgZQAFgXgUgVQgKgLgQgEIAAAAQgRgFgPAFQmdCHgjFYIAAAEQgDAUARASQAKAMARAEIAAAAQAQAFAOgFg");
	this.shape_9.setTransform(-0.0068,0.0341);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.263)").s().p("AjeEXIAAAAQgUgFgMgOIACABQgWgWAEgYIAAgFQAjleGkiJIAAAAQARgHAVAGIAAAAQASAFAMANQAYAYgGAcQgDAegdAQIgDACQkgCQhcD/IgBAEQgJAaggAKIACgBQgKAEgKAAQgJAAgJgDgAC6kQIABAAQmhCHgjFcIAAAEQgDAWASATQALANATAFQASAFAQgGQAdgIAHgYIABgDQBdkCEiiQIADgCQAagPADgcQAFgYgUgWQgLgNgTgFIABAAQgJgDgJAAQgJAAgJAEg");
	this.shape_10.setTransform(-0.001,0.0416);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.463)").s().p("AjaEJQgPgFgJgKQgQgRADgSIAAgDQAjlVGaiGQANgFAQAEQAPAEAJALIgBgBQARASgDATQgBAZgXANIgCACQkmCSheEFIgBADQgGAUgZAHQgHADgHAAQgHAAgHgCgAC/kCIAAAAQmWCEgjFSIAAADQgDARAOAOIABABQAIAJAOAEQAOAEAMgFIgCABQAXgHAFgSIABgCQBfkHEniUIACgBQAUgLACgVQAEgSgPgQQgJgKgOgEIABAAQgHgCgGAAQgIAAgGADg");
	this.shape_11.setTransform(-0.0135,0.037);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.596)").s().p("AjXD/IAAAAQgMgDgHgIIgBgBQgMgNACgPIAAgCQAjlPGTiDIAAAAQAKgEANADQANADAHAJQANAOgDAQQgCATgRAKIgCABQkqCUheEJIgBACQgFAQgTAFQgGACgGAAQgFAAgGgBgAjBD6QAQgFAEgOIABgCQBfkKEsiWIACgBQAPgIABgRQADgNgMgNQgGgHgLgDQgLgDgKADQmPCDgjFLIAAADQgCAMALAMIAAAAQAHAHAKADIAAAAQALADAKgDg");
	this.shape_12.setTransform(-0.0077,0.0368);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.529)").s().p("AjYEEQgOgEgIgJIgBgBQgOgOADgRIAAgDQAjlSGWiEIAAAAQAMgFAPAEIgBAAQAOAEAJAKQAPAQgEASQgCAVgUALIgCABQknCUhfEHIgBACQgFASgXAHIACgBQgHACgHAAQgGAAgGgBgAjAD+QATgFAFgQIABgCQBekJEqiUIACgBQARgKACgTQADgQgNgOQgHgJgNgDQgNgDgKAEIAAAAQmTCDgjFPIAAACQgCAPAMANIABABQAHAIAMADIAAAAQAMADALgEg");
	this.shape_13.setTransform(-0.0047,0.0348);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjPDiQgEgBgCgCIAAAAQgDgDABgEIAAAAQAjk8F+h9QADgBADABQAEABACACIAAAAQADADgBAEIAAAAQAAAEgEACIAAAAQk1CahjEUIAAAAQgBAEgEABIgDAAIgDAAg");
	this.shape_14.setTransform(-0.0221,0.0372);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buttonshine, new cjs.Rectangle(-28.7,-29.6,57.4,59.3), null);


(lib.buttonshadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AmjOWQmambhfnmQhfnmEVkVQEVkVHmBfQHlBfGbGbIAgAgI03U3Ighgfg");
	this.shape.setTransform(-29.6938,-22.5752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.949)").s().p("AmnOeQmemfhfnpQhgnrEYkXQEXkYHrBgQHpBfGeGeIAgAhIgGAGIggggQmbmbnlhfQnmhfkVEVQkVEVBfHmQBfHmGaGbIAhAfIgGAGIghgfg");
	this.shape_1.setTransform(-29.8958,-22.7772);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.749)").s().p("Am2O/Qmsmshin6Qhkn9EikiQEikiH9BkQH6BiGsGsIAgAgIgHAGIgfggQmpmpn2hiQn4hikfEgQkgEfBjH4QBiH2GoGpIAgAgIgGAGIggggg");
	this.shape_2.setTransform(-30.7978,-23.6694);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.698)").s().p("Am6PHQmvmvhjn/QhloAElkkQElkmIBBkQH+BkGvGvIAgAgIgGAGIggggQmsmsn6hiQn8hkkiEjQkjEiBkH8QBiH6GsGsIAgAgIgGAGIggggg");
	this.shape_3.setTransform(-31.0216,-23.8963);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.647)").s().p("Am+PQQmymzhkoCQhmoGEoknQEnkoIGBmQICBkGyGyIAgAhIgGAGIggghQmvmvn+hjQoBhkkkElQklEkBkIBQBjH+GvGvIAhAgIgHAGIgggfg");
	this.shape_4.setTransform(-31.2363,-24.1015);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.094)").s().p("AnpQrQnYnZhsovIAAABQhvo4FElDQFElFI4BvQIuBtHZHXIAfAhIgGAGIggghQnVnUoqhsQozhulBFCQlCFBBuIzQBsIrHUHVIAgAgIgGAGIggggg");
	this.shape_5.setTransform(-33.6463,-26.5265);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.043)").s().p("AntQzQnbnchtozIAAAAQhwo8FHlGQFGlHI9BvQIyBuHcHbIAgAhIgGAGIggghQnYnXovhtQo4hvlDFFQlFFDBvI4IAAgBQBtIvHXHZIAhAgIgGAGIghggg");
	this.shape_6.setTransform(-33.8801,-26.7471);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.247)").s().p("AndQSQnOnOhqojIAAAAQhsoqE8k7QE8k9IqBsQIiBrHPHNIAfAhIgGAGIgfghQnLnKofhqQolhrk5E6Qk6E5BrIlIAAABQBqIeHKHLIAgAgIgGAGIggggg");
	this.shape_7.setTransform(-32.9968,-25.8767);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.196)").s().p("AnhQaQnRnRhronIAAAAQhtouE/k+QE+lAIvBtQImBrHSHRIAgAgIgHAHIggghQnOnNoihrQoqhsk8E9Qk9E7BtIqIAAAAQBqIjHOHOIAgAgIgGAGIggggg");
	this.shape_8.setTransform(-33.1741,-26.0849);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.145)").s().p("AnlQjQnUnWhsoqQhuo0FClAQFBlCIzBuQIqBsHVHUIAgAhIgGAFIgfggQnSnRomhrQovhtk+FAQlAE+BuIuIAAABQBrImHQHRIAhAgIgHAGIgggfg");
	this.shape_9.setTransform(-33.4442,-26.312);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.396)").s().p("AnSP5QnDnEhooXQhqocE1k0QE0k1IdBqQIWBoHEHEIAgAgIgGAGIggggQnBnAoShoQoYhokxEyQkyEyBpIXIAAAAQBnITHAHAIAgAgIgGAGIghggg");
	this.shape_10.setTransform(-32.3308,-25.2209);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.345)").s().p("AnVQBQnHnHhpobIAAABQhrohE4k3QE2k3IiBqQIaBpHHHHIAgAgIgGAGIggggQnEnEoWhoQodhqk0E1Qk1E0BrIdQBnIWHEHEIAgAgIgGAGIggggg");
	this.shape_11.setTransform(-32.5516,-25.4322);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.294)").s().p("AnZQKQnKnLhqofIAAAAQhrolE6k5QE5k7IlBsQIfBqHLHKIAfAgIgGAGIgfggQnInHoahpQohhqk3E3Qk3E3BrIhIgBgBQBpIbHHHIIAgAfIgGAHIggggg");
	this.shape_12.setTransform(-32.7823,-25.6529);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.447)").s().p("AnOPxQnAnBhnoSIABAAQhqoYEzkxQExkyIYBoQISBoHBHAIAfAgIgGAGIggggQm9m9oOhnQoThnkvEvQkwEvBpITIAAAAQBmIOG8G+IAhAfIgGAGIghgfg");
	this.shape_13.setTransform(-32.1038,-24.9938);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.498)").s().p("AnKPpQm8m+hmoOIAAAAQhpoTEwkvQEvkwITBoQIOBnG9G9IAgAgIgGAGIggggQm5m6oKhlQoPhnksEtQkuEsBoIPIAAgBQBlILG6G6IAgAfIgGAGIghgfg");
	this.shape_14.setTransform(-31.9048,-24.7792);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.596)").s().p("AnCPYQm2m2hkoHIgBAAQhmoKErkpQEpkrILBmQIGBlG2G2IAgAhIgHAGIgfggQmzmzoChkQoGhlknEnQknEnBlIGQBkICGyGzIAhAgIgGAGIghggg");
	this.shape_15.setTransform(-31.4637,-24.338);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.545)").s().p("AnGPgQm5m6hloKIgBAAQhnoPEtksQEsktIPBnQIKBmG6G5IAgAhIgGAGIggghQm2m2oGhlQoLhmkpErQkqEpBmIKIAAAAQBlIHG1G2IAhAgIgGAGIghggg");
	this.shape_16.setTransform(-31.6903,-24.5493);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.796)").s().p("AmyO3Qmpmphhn2Qhjn4EgkfQEfkgH4BiQH2BiGpGpIAfAgIgGAGIgfggQmmmlnyhhQnzhhkcEdQkeEcBiH0IAAgBQBhHzGlGlIAgAfIgGAHIggggg");
	this.shape_17.setTransform(-30.5768,-23.4642);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.898)").s().p("AmqOmQmimihgnuIAAABQhhnvEbkaQEakbHvBhQHtBgGiGiIAgAgIgGAGIggggQmemenqhfQnqhgkYEXQkXEYBgHqQBfHqGeGeIAgAgIgGAGIggggg");
	this.shape_18.setTransform(-30.1384,-23.0103);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.847)").s().p("AmuOuQmlmlhhnyIAAAAQhinzEdkcQEdkeHzBiQHyBhGlGlIAgAgIgGAGIggggQmimhnthhQnvhgkaEaQkbEaBhHvIAAAAQBgHuGiGhIAgAgIgGAGIggggg");
	this.shape_19.setTransform(-30.3498,-23.2372);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buttonshadow, new cjs.Rectangle(-144.5,-137.4,221.3,221.4), null);


(lib.keyup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.263)").s().p("AipAxIgCAAQgGgBgDgBIgDgDIgBgCIAAgDQgEgHAOgFIAAAAQAOgGAJgBIAXAAIAAAAQAOAABTgEIAAAAQBKABAkgCQAigBANgDIAAAAQAPgDAKgJQAJgKADgVIABgEIABgCIABgDQABgEAEgCQADgBADAAQAEABACADQADACAAAEIAAAZQAAAZgTASIAAABIgCABQgSAQgYAAIkKAAIgBAAIgUABIgFAAgAiXAZQgIABgNAFQgJADACAEQgBAFAJABQAHAAAUgBIABAAIEKAAQAXAAAQgPIgBAAIADgBIAAgBQARgRAAgWIAAgZIgCgDIgCgCIgEABIgCACIgBAEIgBACIgBACQgDAXgLAKQgKALgRAEIAAAAQgNACgjACQgkAChKgBIAAAAQhTAEgOAAIgLAAIgMAAg");
	this.shape.setTransform(2.2657,16.6209);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("AiSDOQgJgBABgEQgCgEAIgEQAOgFAIgBIAXAAQAOABBTgFIAAAAQBJABAlgCQAjgBANgDIAAAAQAQgDALgLQALgLADgXIABgDIAAgCIACgDIACgDIADgBIADACIABADIAAAZQAAAYgQARIgBAAIgCACIABgBQgQAPgXAAIkLAAIAAAAIgVABIgGAAgAjMCXIAAgDIAAksQAAgVAPgQQAPgPAWAAIEiAAIgJABIAcgCQBDAViMgBQiKgCgzACQg0ABgNAOQgOAOAAATIAEDKQgKBngIAAQgDAAgDgRg");
	this.shape_1.setTransform(-0.2125,0.3843);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.129)").s().p("Ai8AnIAFAFIADADIAJAHQgVgCAEgNgAipAxIAagBIAAAAIELAAQAYAAARgQIACgBIABgBQASgSAAgZIAAgZQAAgEgCgCQgDgDgDgBQgEAAgDABQgDACgCAEIgBADIAAACIgCAEQgDAVgJAKQgKAJgOADIgBAAQgMADgjABQgkAChJgBIgBAAQhTAEgOAAIAAAAIgXAAQgJABgOAGIAAAAQgNAFAEAHIgBADIgEgDQgGgKASgHIAAAAQAPgGAKgBIAXAAIABAAQANAABTgEIABAAQBJABAkgCQAigBANgDIgBAAQAOgDAIgIQAJgJACgTIACgFIABgCIABgDQACgFAEgDQAFgDAGABQAFABADAFQAEAEAAAFIAAAZQAAAbgUATIgBABIgBABQgTASgaAAIkKAAIgBAAIgEAAQgLAAgLgEg");
	this.shape_2.setTransform(2.2375,16.6122);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AjNANIABAAIgBACIAAgCgADNgNIABgBIAAAEIgBgDg");
	this.shape_3.setTransform(60.7125,-48.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// dark edge
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.2)").s().p("AgcCxIABgBQAMgMAAgSIAAjyQAAgHgCgGIAAgBQAAgJACgIQgUAHBAg+QgjBEADALIACAFIgBAJIAADVIAAAGIAAAaQgDAPgFAEQgGAFgGADg");
	this.shape_4.setTransform(17.6,-2.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AgZCfIABgBQALgLAAgPIAAjaQAAgGgCgGIAAgBQgBgIACgHQgSAGA6g3QgfA9ACAKIACAEIgBAIIAADAIAAAFIAAAYQgCANgFAEQgFAEgGACg");
	this.shape_5.setTransform(15.5625,-2.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).wait(1));

	// arrows
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGBYQgCgDAAgEIAAhRIgTAAIAYhTQADgMADAMIAaBTIgTAAIAABRQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_6.setTransform(-10.6,0.1375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFBPQgCgDAAgDIAAhJIgSAAIAXhKQACgMADAMIAXBKIgSAAIAABJQABADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_7.setTransform(-9.825,0.1375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},2).wait(1));

	// hilites 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.302)").s().p("AgSAYQgIgFAAgGQgBgGAGgHIAWgUQALgLALALQAEAEAAAGIAAACQgGAMgNALIgLAJQgDACgEAAQgEAAgEgCg");
	this.shape_8.setTransform(-18.3317,17.4125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.149)").s().p("AgVAcIABAAQgLgGAAgIQgCgIAJgIIAWgVIAAAAQAPgOAOAOQAFAGAAAHIgBAEQgGAOgNALIgBABIgLAJIAAgBQgFADgFAAQgFAAgGgDgAABgTIgWAUQgGAGABAGQAAAGAIAFQAIAFAHgFIALgIQANgLAGgNIAAgCQAAgFgEgEQgFgGgGAAQgFAAgGAGg");
	this.shape_9.setTransform(-18.3432,17.3875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AAJAbQgMgGgLgNIgJgLQgEgHAEgIQAFgIAGAAQAGgBAGAGIAVAWQALALgLALQgEAEgGAAIgCAAg");
	this.shape_10.setTransform(-18.2625,-17.9317);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.149)").s().p("AAHAfQgOgGgLgNIgBgBIgJgLIABAAQgGgKAGgLIAAABQAGgLAIAAQAIgCAIAJIAVAWIAAAAQAOAPgOAOQgGAFgHAAIgEgBgAgMgaQgGAAgFAIQgFAIAFAHIAIALQALANANAGIACAAQAFAAAEgEQALgLgLgLIgUgWQgFgFgGAAIgBAAg");
	this.shape_11.setTransform(-18.2375,-17.9432);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.302)").s().p("AAJAbQgMgGgLgNIgJgLQgEgHAEgIQAFgIAGAAQAGgBAGAGIAVAWQALALgLALQgEAEgGAAIgCAAg");
	this.shape_12.setTransform(17.8875,17.9683);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.149)").s().p("AAHAfQgOgGgLgNIgBgBIgJgLIABAAQgGgKAGgLIAAABQAGgLAIAAQAIgCAIAJIAVAWIAAAAQAOAPgOAOQgGAFgHAAIgEgBgAgMgaQgGAAgFAIQgFAIAFAHIAIALQALANANAGIACAAQAFAAAEgEQALgLgLgLIgUgWQgFgFgGAAIgBAAg");
	this.shape_13.setTransform(17.9125,17.9568);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AB9C5A").s().p("AilC5IACAAIDyAAQAHAAAFgCQgCACgHAAIjyAAIAAAAIgFAAgACmi4IAAAAIgBABIABgBg");
	this.shape_14.setTransform(3.85,-2.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.302)").s().p("AAAAAIAAgFIAAALg");
	this.shape_15.setTransform(-16.85,-13.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiiB9QgHh0AHhmIAAgFIABgMQACgLAGgIIABgBQAJgKAHAFQgDAAgCAEIAAAAQgUAfAADxIgBgQgAClhaQgNgggNgHIgQgIIAAgBQAWgGALAMIADAEQADAEACAHQACAMAAARIgBgCg");
	this.shape_16.setTransform(-0.6253,-2.7786);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.302)").s().p("AgQAVQgHgEAAgGQgBgFAGgFIATgSQAKgLAKALQAEADAAAFIgBACQgFALgLAKIgKAHQgEADgDAAQgDAAgEgDg");
	this.shape_17.setTransform(-16.8071,15.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.149)").s().p("AgSAZIAAAAQgKgFAAgHQgBgHAIgIIAUgTIAAABQANgOAMAOQAFAEAAAHIgBAEQgFAMgMAKIgBABIgKAIIAAgBQgEADgFAAQgFAAgEgDgAABgRIgTASQgGAFABAGQAAAFAHAFQAHAEAHgEIAKgIQALgKAFgLIABgCQAAgFgEgDQgFgFgFAAQgFAAgFAFg");
	this.shape_18.setTransform(-16.8118,15.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.302)").s().p("AAIAYQgLgFgKgLIgHgKQgFgHAFgHQAEgHAGAAQAFgBAFAGIASATQALAKgLAKQgDAEgFAAIgCgBg");
	this.shape_19.setTransform(-16.7,-16.1071);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.149)").s().p("AAGAcQgMgFgKgMIgBgBIgIgKIABAAQgGgJAGgJIAAAAQAFgKAHAAQAHgBAIAIIATAUIgBAAQAOANgOAMQgEAFgHAAIgEgBgAgLgXQgFAAgFAHQgEAHAEAHIAIAKQAKALALAFIACABQAFAAADgEQAKgKgKgKIgSgTQgEgGgFAAIgCABg");
	this.shape_20.setTransform(-16.675,-16.1118);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.302)").s().p("AAIAYQgLgFgKgLIgHgKQgFgHAFgHQAEgHAGAAQAFgBAFAGIASATQALAKgLAKQgDAEgFAAIgCgBg");
	this.shape_21.setTransform(15.8,16.1929);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.149)").s().p("AAGAcQgMgFgKgMIgBgBIgIgKIABAAQgGgJAGgJIAAAAQAFgKAHAAQAHgBAIAIIATAUIgBAAQAOANgOAMQgEAFgHAAIgEgBgAgLgXQgFAAgFAHQgEAHAEAHIAIAKQAKALALAFIACABQAFAAADgEQAKgKgKgKIgSgTQgEgGgFAAIgCABg");
	this.shape_22.setTransform(15.825,16.1882);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AB9C5A").s().p("AiPCnIgFAAIABAAIDaAAQAGgBAFgBQgCACgGAAgACVimIAAABIgBAAIABgBg");
	this.shape_23.setTransform(3.1875,-2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.302)").s().p("AAAAAIABgEIgBAJg");
	this.shape_24.setTransform(-15.45,-11.9125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiSBxQgGhpAGhcIAAgEIABgLQACgKAFgHIABgBQAIgJAGAEQgCABgCADIAAAAQgSAcAADZIgBgOgACVhRQgMgdgMgGIgOgIIgBAAQAUgFAKAKIADAEQADAEABAGQADAKAAAQIgBgCg");
	this.shape_25.setTransform(-0.8453,-2.4674);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},2).wait(1));

	// hilites 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.2)").ss(1,1,1,3,true).p("AB+AAIj7AA");
	this.shape_26.setTransform(-1.375,-16.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.302)").s().p("AB3CnIjWAAIgGAAIgaAAQgOgCgEgDIgGgFIgFgIQgFgGgBgIIgBgQIgBgNIAAjWIAAgGIAAgaQADgOAFgFQAGgFAGgCIAGAGIgBAAQgMANAAARIAADyIAAALIAAAEIAEAPQANAMARAAIDyAAQAHAAACgCQADgCAAgDQABgDAQgNQAPgNgGAUQgGAVgMAEQgKAEgNAAIgDAAg");
	this.shape_27.setTransform(-0.4192,0.7292);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.2)").ss(1,1,1,3,true).p("AByAAIjjAA");
	this.shape_28.setTransform(-1.5125,-14.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.302)").s().p("ABrCWIjAAAIgGAAIgXAAQgNgCgEgCIgEgEIgGgHQgDgGgBgHIgCgPIAAgMIAAjAIAAgFIAAgYQACgNAFgEQAFgEAGgDIAFAGIgBABQgLALAAAPIAADaIAAAJIABAFIADANQALALAQAAIDaAAQAGAAACgCQACgCABgDQAAgCAOgMQAOgMgFASQgGATgLAEQgJAEgLAAIgDgBg");
	this.shape_29.setTransform(-0.6649,0.6795);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26}]}).to({state:[{t:this.shape_29},{t:this.shape_28}]},2).wait(1));

	// face
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],-25.2,0.7,14.9,-5.4).s().p("Ah4CkQgSAAgMgNQgNgMAAgSIAAjyQAAgRANgMQAMgNASAAIDyAAQARAAAMANQANAMAAARIAADyQAAASgNAMQgMANgRAAg");
	this.shape_30.setTransform(-0.425,-0.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],-22.7,0.6,13.4,-4.9).s().p("AhsCTQgQAAgLgLQgLgLAAgQIAAjZQAAgQALgLQALgLAQAAIDaAAQAPAAALALQALALAAAQIAADZQAAAQgLALQgLALgPAAg");
	this.shape_31.setTransform(-0.6625,-0.1875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},2).wait(1));

	// sides
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],20.9,0,-20.9,0).s().p("ACoBxIlNAAQgYAAgRgRIgCgBIDQjPIDRDQQgRARgYAAIAAAAg");
	this.shape_32.setTransform(-0.2875,11.2625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#807242","#AB9C5A","#AB9C5A"],[0,1,1],11.3,0,4.4,0).s().p("AhwAAIAAAAIAAAAIACgCIAAAAIAEgEIAEgDIgEADIAAAAIgDACIgDAEIADgEIACgCIABAAIADgEIAEgEICViVQAKgNAigfIAAAAIABgBIACACQARARAAAYIAAFNQAAAYgRARgAhwAAg");
	this.shape_33.setTransform(10.95,0.0125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],20.7,0,-20.7,0).s().p("AAABwIADgEIACgCIgDADIgBABIgBACgAjOheQARgRAYAAIFNAAQAXAAAQAQIgBABIAAgBQghAggLANIiVCUIgEAEIgEADIAAABIgCACIgDAEg");
	this.shape_34.setTransform(-0.3,-11.2625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E0CC76").s().p("AhvCoIAAlNQAAgYARgRIDODOIAAAAIjPDPQgQgQAAgXg");
	this.shape_35.setTransform(-11.55,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#91844C","#E0CC76"],[0,1],18.8,0,-18.8,0).s().p("ACXBmIksAAQgVAAgQgPIgBgCIC7i6IC8C8QgPAPgWAAIAAAAg");
	this.shape_36.setTransform(-0.5375,10.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#665A35","#AB9C5A","#AB9C5A"],[0,1,1],10.2,0,4,0).s().p("AhlAAIAAAAIAAAAIACgCIAAAAIAEgEIADgDIgDADIAAABIgDACIgDADIADgEIACgCIABAAIACgDIAEgDICFiGQAKgMAegdIABAAIAAAAIACABQAPAQAAAVIAAEsQAAAWgPAPgAhlAAg");
	this.shape_37.setTransform(9.575,0.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],18.5,-9.7,-18.8,-9.7).s().p("AgCADIADgDIACgCIgDADIAAAAIgBACg");
	this.shape_38.setTransform(-0.3625,-0.3125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#91844C","#E0CC76"],[0,1],18.7,0,-18.6,0).s().p("Ai5hUQAPgQAWAAIErAAQAVABAOAOIAAAAIgBAAQgeAcgJAMIiGCFIgEAEIgDADIAAAAIgCACIgDADg");
	this.shape_39.setTransform(-0.55,-10.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E0CC76").s().p("AhkCXIAAkrQAAgWAQgPIC4C5IABAAIi6C6QgOgOgBgVg");
	this.shape_40.setTransform(-10.675,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).wait(1));

	// Layer 23
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.898)").s().p("AiuD3QgeAAgVgVIgCgDQgTgUAAgcIAAleQAAgdAVgVQAVgVAeAAIFeAAQAbAAAUASIADADQAVAVAAAdIAAFeQAAAegVAVQgVAVgdAAgAjdDeQATAUAcAAIFeAAQAbAAATgUQAUgTAAgcIAAleQAAgbgUgTIgCgCIAAAAQgSgSgaAAIleAAQgcAAgTAUQgUATAAAbIAAFeQAAAbASASIAAAAIACACg");
	this.shape_41.setTransform(-0.2375,0.1125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.796)").s().p("AiuD8QggAAgXgXIgDgDIABABQgUgVAAgfIAAleQAAgfAWgXQAXgWAgAAIFeAAQAeAAAVAUIgBgBIAEADQAWAXAAAfIAAFeQAAAggWAWQgXAXgfAAgAjhjhQgVAVAAAdIAAFeQAAAcATAUIACADQAVAVAeAAIFeAAQAdAAAVgVQAVgVAAgeIAAleQAAgdgVgVIgDgDQgUgSgbAAIleAAQgeAAgVAVg");
	this.shape_42.setTransform(-0.2375,0.1124);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.698)").s().p("ACwEBIleAAQgiAAgYgYIgEgEQgUgXAAgfIAAleQAAgiAYgYQAYgYAiABIFeAAQAfAAAWAUIAFADQAYAYgBAiIAAFeQABAigYAYQgYAYgiAAIAAAAgAjlDlQAXAXAgAAIFeAAQAfAAAXgXQAWgWAAggIAAleQAAgfgWgXIgEgDIABABQgVgUgeAAIleAAQggAAgXAWQgWAXAAAfIAAFeQAAAfAUAVIgBgBIADADg");
	this.shape_43.setTransform(-0.2375,0.1125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.294)").s().p("AiuEWQgrAAgegeIgFgFQgZgdAAgnIAAleQAAgqAegeQAegeArAAIFeAAQAoAAAdAaIADAEQAeAeAAAqIAAFeQAAArgeAeQgeAegqAAgAjzj0QgdAdAAAoIAAFeQAAAlAXAaIACACIABACIADACQAcAdApAAIFeAAQAoAAAdgdQAcgcAAgpIAAleQAAgogcgdIgFgEQgbgYglAAIleAAIgBAAQgoAAgcAcg");
	this.shape_44.setTransform(-0.2375,0.1125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.596)").s().p("ACwEHIleAAQgkAAgagaIgCgCQgYgZAAgjIAAleQAAgkAagZQAagaAkAAIFeAAQAiAAAYAXIABABIACACQAaAZAAAkIAAFeQAAAkgaAaQgZAagkAAIAAAAgAjojpQgYAYAAAiIAAFeQAAAfAUAXIAEAEQAYAYAiAAIFeAAQAiAAAYgYQAYgYgBgiIAAleQABgigYgYIgFgDQgWgUgfAAIleAAIgBAAQghAAgYAXg");
	this.shape_45.setTransform(-0.2375,0.1124);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.498)").s().p("AiuEMQgnAAgbgbIgFgGQgWgZAAgjIAAleQAAgmAbgbQAbgbAnAAIFeAAQAiAAAZAWIAGAFQAbAbAAAmIAAFeQAAAngbAbQgbAbgmAAgACwEHQAkAAAZgaQAagaAAgkIAAleQAAgkgagZIgCgCIgBgBQgYgXgiAAIleAAQgkAAgaAaQgaAZAAAkIAAFeQAAAjAYAZIACACQAaAaAkAAg");
	this.shape_46.setTransform(-0.2375,0.1125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.396)").s().p("AiuERQgpAAgcgdIgDgCIgBgCIgCgCQgXgaAAglIAAleQAAgoAdgdQAcgcApAAIFeAAQAlAAAbAYIAFAEQAcAdAAAoIAAFeQAAApgcAcQgdAdgoAAgAjwjwQgbAbAAAmIAAFeQAAAjAWAZIAFAGQAbAbAnAAIFeAAQAmAAAbgbQAbgbAAgnIAAleQAAgmgbgbIgGgFQgZgWgiAAIleAAIgBAAQgmAAgbAbg");
	this.shape_47.setTransform(-0.2375,0.1125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.196)").s().p("AiuEcQgtAAggggIgEgFIACACQgegfAAgrIAAleQAAgsAgggQAgggAtAAIFeAAQAqAAAfAdIgBgBIAEAEQAgAgAAAsIAAFeQAAAtggAgQggAggsAAgAj3j3QgeAeAAAqIAAFeQAAAnAZAdIAFAFQAeAeArAAIFeAAQAqAAAegeQAegeAAgrIAAleQAAgqgegeIgDgEQgdgagoAAIleAAIgBAAQgqAAgeAeg");
	this.shape_48.setTransform(-0.2375,0.1125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.094)").s().p("AiuEhQgvAAghgiIgBAAIgFgFQgcggAAgrIAAleQAAguAigiQAhghAvAAIFeAAQArAAAgAdIAFAEQAhAiAAAuIAAFeQAAAvghAhQgiAiguAAgAj7D8QAgAgAtAAIFeAAQAsAAAgggQAgggAAgtIAAleQAAgsggggIgEgEIABABQgfgdgqAAIleAAQgtAAggAgQggAgAAAsIAAFeQAAArAeAfIgCgCIAEAFg");
	this.shape_49.setTransform(-0.2375,0.1125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AiuDyQgcAAgTgUIgCgCIAAAAQgSgSAAgbIAAleQAAgbAUgTQATgUAcAAIFeAAQAaAAASASIAAAAIACACQAUATAAAbIAAFeQAAAcgUATQgTAUgbAAg");
	this.shape_50.setTransform(-0.2375,0.1125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,-50.2,110.5,79.2);


(lib.keyright = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.263)").s().p("AipAxIgCAAQgGgBgDgBIgDgDIgBgCIAAgDQgEgHAOgFIAAAAQAOgGAJgBIAXAAIAAAAQAOAABTgEIAAAAQBKABAkgCQAigBANgDIAAAAQAPgDAKgJQAJgKADgVIABgEIABgCIABgDQABgEAEgCQADgBADAAQAEABACADQADACAAAEIAAAZQAAAZgTASIAAABIgCABQgSAQgYAAIkKAAIgBAAIgUABIgFAAgAiXAZQgIABgNAFQgJADACAEQgBAFAJABQAHAAAUgBIABAAIEKAAQAXAAAQgPIgBAAIADgBIAAgBQARgRAAgWIAAgZIgCgDIgCgCIgEABIgCACIgBAEIgBACIgBACQgDAXgLAKQgKALgRAEIAAAAQgNACgjACQgkAChKgBIAAAAQhTAEgOAAIgLAAIgMAAg");
	this.shape.setTransform(2.2657,16.6209);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("AiSDOQgJgBABgEQgCgEAIgEQAOgFAIgBIAXAAQAOABBTgFIAAAAQBJABAlgCQAjgBANgDIAAAAQAQgDALgLQALgLADgXIABgDIAAgCIACgDIACgDIADgBIADACIABADIAAAZQAAAYgQARIgBAAIgCACIABgBQgQAPgXAAIkLAAIAAAAIgVABIgGAAgAjMCXIAAgDIAAksQAAgVAPgQQAPgPAWAAIEiAAIgJABIAcgCQBDAViMgBQiKgCgzACQg0ABgNAOQgOAOAAATIAEDKQgKBngIAAQgDAAgDgRg");
	this.shape_1.setTransform(-0.2125,0.3843);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.129)").s().p("Ai8AnIAFAFIADADIAJAHQgVgCAEgNgAipAxIAagBIAAAAIELAAQAYAAARgQIACgBIABgBQASgSAAgZIAAgZQAAgEgCgCQgDgDgDgBQgEAAgDABQgDACgCAEIgBADIAAACIgCAEQgDAVgJAKQgKAJgOADIgBAAQgMADgjABQgkAChJgBIgBAAQhTAEgOAAIAAAAIgXAAQgJABgOAGIAAAAQgNAFAEAHIgBADIgEgDQgGgKASgHIAAAAQAPgGAKgBIAXAAIABAAQANAABTgEIABAAQBJABAkgCQAigBANgDIgBAAQAOgDAIgIQAJgJACgTIACgFIABgCIABgDQACgFAEgDQAFgDAGABQAFABADAFQAEAEAAAFIAAAZQAAAbgUATIgBABIgBABQgTASgaAAIkKAAIgBAAIgEAAQgLAAgLgEg");
	this.shape_2.setTransform(2.2375,16.6122);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AjNANIABAAIgBACIAAgCgADNgNIABgBIAAAEIgBgDg");
	this.shape_3.setTransform(60.7125,-48.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// dark edge
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.2)").s().p("AgcCxIABgBQAMgMAAgSIAAjyQAAgHgCgGIAAgBQAAgJACgIQgUAHBAg+QgjBEADALIACAFIgBAJIAADVIAAAGIAAAaQgDAPgFAEQgGAFgGADg");
	this.shape_4.setTransform(17.6,-2.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AgZCfIABgBQALgLAAgPIAAjaQAAgGgCgGIAAgBQgBgIACgHQgSAGA6g3QgfA9ACAKIACAEIgBAIIAADAIAAAFIAAAYQgCANgFAEQgFAEgGACg");
	this.shape_5.setTransform(15.5625,-2.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).wait(1));

	// arrows
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AACAKIhSAAQgEgBgDgCQgCgDAAgEQAAgDACgCQADgDAEAAIBSAAIAAgTIBSAZQAMADgMACIhSAag");
	this.shape_6.setTransform(4.7125,0.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AABAIIhJAAQgDAAgDgCQgCgDAAgDQAAgDACgCQADgDADABIBJAAIAAgSIBKAXQAMADgMACIhKAXg");
	this.shape_7.setTransform(3.7625,0.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},2).wait(1));

	// hilites 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.302)").s().p("AgSAYQgIgFAAgGQgBgGAGgHIAWgUQALgLALALQAEAEAAAGIAAACQgGAMgNALIgLAJQgDACgEAAQgEAAgEgCg");
	this.shape_8.setTransform(-18.3317,17.4125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.149)").s().p("AgVAcIABAAQgLgGAAgIQgCgIAJgIIAWgVIAAAAQAPgOAOAOQAFAGAAAHIgBAEQgGAOgNALIgBABIgLAJIAAgBQgFADgFAAQgFAAgGgDgAABgTIgWAUQgGAGABAGQAAAGAIAFQAIAFAHgFIALgIQANgLAGgNIAAgCQAAgFgEgEQgFgGgGAAQgFAAgGAGg");
	this.shape_9.setTransform(-18.3432,17.3875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AAJAbQgMgGgLgNIgJgLQgEgHAEgIQAFgIAGAAQAGgBAGAGIAVAWQALALgLALQgEAEgGAAIgCAAg");
	this.shape_10.setTransform(-18.2625,-17.9317);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.149)").s().p("AAHAfQgOgGgLgNIgBgBIgJgLIABAAQgGgKAGgLIAAABQAGgLAIAAQAIgCAIAJIAVAWIAAAAQAOAPgOAOQgGAFgHAAIgEgBgAgMgaQgGAAgFAIQgFAIAFAHIAIALQALANANAGIACAAQAFAAAEgEQALgLgLgLIgUgWQgFgFgGAAIgBAAg");
	this.shape_11.setTransform(-18.2375,-17.9432);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.302)").s().p("AAJAbQgMgGgLgNIgJgLQgEgHAEgIQAFgIAGAAQAGgBAGAGIAVAWQALALgLALQgEAEgGAAIgCAAg");
	this.shape_12.setTransform(17.8875,17.9683);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.149)").s().p("AAHAfQgOgGgLgNIgBgBIgJgLIABAAQgGgKAGgLIAAABQAGgLAIAAQAIgCAIAJIAVAWIAAAAQAOAPgOAOQgGAFgHAAIgEgBgAgMgaQgGAAgFAIQgFAIAFAHIAIALQALANANAGIACAAQAFAAAEgEQALgLgLgLIgUgWQgFgFgGAAIgBAAg");
	this.shape_13.setTransform(17.9125,17.9568);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AB9C5A").s().p("AilC5IACAAIDyAAQAHAAAFgCQgCACgHAAIjyAAIAAAAIgFAAgACmi4IAAAAIgBABIABgBg");
	this.shape_14.setTransform(3.85,-2.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.302)").s().p("AAAAAIAAgFIAAALg");
	this.shape_15.setTransform(-16.85,-13.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiiB9QgHh0AHhmIAAgFIABgMQACgLAGgIIABgBQAJgKAHAFQgDAAgCAEIAAAAQgUAfAADxIgBgQgAClhaQgNgggNgHIgQgIIAAgBQAWgGALAMIADAEQADAEACAHQACAMAAARIgBgCg");
	this.shape_16.setTransform(-0.6253,-2.7786);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.302)").s().p("AgQAVQgHgEAAgGQgBgFAGgFIATgSQAKgLAKALQAEADAAAFIgBACQgFALgLAKIgKAHQgEADgDAAQgDAAgEgDg");
	this.shape_17.setTransform(-16.8071,15.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.149)").s().p("AgSAZIAAAAQgKgFAAgHQgBgHAIgIIAUgTIAAABQANgOAMAOQAFAEAAAHIgBAEQgFAMgMAKIgBABIgKAIIAAgBQgEADgFAAQgFAAgEgDgAABgRIgTASQgGAFABAGQAAAFAHAFQAHAEAHgEIAKgIQALgKAFgLIABgCQAAgFgEgDQgFgFgFAAQgFAAgFAFg");
	this.shape_18.setTransform(-16.8118,15.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.302)").s().p("AAIAYQgLgFgKgLIgHgKQgFgHAFgHQAEgHAGAAQAFgBAFAGIASATQALAKgLAKQgDAEgFAAIgCgBg");
	this.shape_19.setTransform(-16.7,-16.1071);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.149)").s().p("AAGAcQgMgFgKgMIgBgBIgIgKIABAAQgGgJAGgJIAAAAQAFgKAHAAQAHgBAIAIIATAUIgBAAQAOANgOAMQgEAFgHAAIgEgBgAgLgXQgFAAgFAHQgEAHAEAHIAIAKQAKALALAFIACABQAFAAADgEQAKgKgKgKIgSgTQgEgGgFAAIgCABg");
	this.shape_20.setTransform(-16.675,-16.1118);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.302)").s().p("AAIAYQgLgFgKgLIgHgKQgFgHAFgHQAEgHAGAAQAFgBAFAGIASATQALAKgLAKQgDAEgFAAIgCgBg");
	this.shape_21.setTransform(15.8,16.1929);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.149)").s().p("AAGAcQgMgFgKgMIgBgBIgIgKIABAAQgGgJAGgJIAAAAQAFgKAHAAQAHgBAIAIIATAUIgBAAQAOANgOAMQgEAFgHAAIgEgBgAgLgXQgFAAgFAHQgEAHAEAHIAIAKQAKALALAFIACABQAFAAADgEQAKgKgKgKIgSgTQgEgGgFAAIgCABg");
	this.shape_22.setTransform(15.825,16.1882);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AB9C5A").s().p("AiPCnIgFAAIABAAIDaAAQAGgBAFgBQgCACgGAAgACVimIAAABIgBAAIABgBg");
	this.shape_23.setTransform(3.1875,-2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.302)").s().p("AAAAAIABgEIgBAJg");
	this.shape_24.setTransform(-15.45,-11.9125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiSBxQgGhpAGhcIAAgEIABgLQACgKAFgHIABgBQAIgJAGAEQgCABgCADIAAAAQgSAcAADZIgBgOgACVhRQgMgdgMgGIgOgIIgBAAQAUgFAKAKIADAEQADAEABAGQADAKAAAQIgBgCg");
	this.shape_25.setTransform(-0.8453,-2.4674);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},2).wait(1));

	// hilites 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.2)").ss(1,1,1,3,true).p("AB+AAIj7AA");
	this.shape_26.setTransform(-1.375,-16.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.302)").s().p("AB3CnIjWAAIgGAAIgaAAQgOgCgEgDIgGgFIgFgIQgFgGgBgIIgBgQIgBgNIAAjWIAAgGIAAgaQADgOAFgFQAGgFAGgCIAGAGIgBAAQgMANAAARIAADyIAAALIAAAEIAEAPQANAMARAAIDyAAQAHAAACgCQADgCAAgDQABgDAQgNQAPgNgGAUQgGAVgMAEQgKAEgNAAIgDAAg");
	this.shape_27.setTransform(-0.4192,0.7292);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.2)").ss(1,1,1,3,true).p("AByAAIjjAA");
	this.shape_28.setTransform(-1.5125,-14.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.302)").s().p("ABrCWIjAAAIgGAAIgXAAQgNgCgEgCIgEgEIgGgHQgDgGgBgHIgCgPIAAgMIAAjAIAAgFIAAgYQACgNAFgEQAFgEAGgDIAFAGIgBABQgLALAAAPIAADaIAAAJIABAFIADANQALALAQAAIDaAAQAGAAACgCQACgCABgDQAAgCAOgMQAOgMgFASQgGATgLAEQgJAEgLAAIgDgBg");
	this.shape_29.setTransform(-0.6649,0.6795);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26}]}).to({state:[{t:this.shape_29},{t:this.shape_28}]},2).wait(1));

	// face
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],-25.2,0.7,14.9,-5.4).s().p("Ah4CkQgSAAgMgNQgNgMAAgSIAAjyQAAgRANgMQAMgNASAAIDyAAQARAAAMANQANAMAAARIAADyQAAASgNAMQgMANgRAAg");
	this.shape_30.setTransform(-0.425,-0.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],-22.7,0.6,13.4,-4.9).s().p("AhsCTQgQAAgLgLQgLgLAAgQIAAjZQAAgQALgLQALgLAQAAIDaAAQAPAAALALQALALAAAQIAADZQAAAQgLALQgLALgPAAg");
	this.shape_31.setTransform(-0.6625,-0.1875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},2).wait(1));

	// sides
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],20.9,0,-20.9,0).s().p("ACoBxIlNAAQgYAAgRgRIgCgBIDQjPIDRDQQgRARgYAAIAAAAg");
	this.shape_32.setTransform(-0.2875,11.2625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#807242","#AB9C5A","#AB9C5A"],[0,1,1],11.3,0,4.4,0).s().p("AhwAAIAAAAIAAAAIACgCIAAAAIAEgEIAEgDIgEADIAAAAIgDACIgDAEIADgEIACgCIABAAIADgEIAEgEICViVQAKgNAigfIAAAAIABgBIACACQARARAAAYIAAFNQAAAYgRARg");
	this.shape_33.setTransform(10.95,0.0125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],20.7,0,-20.7,0).s().p("AAABwIADgEIACgCIgDADIgBABIgBACgAjOheQARgRAYAAIFNAAQAXAAAQAQIgBABIAAgBQghAggLANIiVCUIgEAEIgEADIAAABIgCACIgDAEg");
	this.shape_34.setTransform(-0.3,-11.2625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E0CC76").s().p("AhvCoIAAlNQAAgYARgRIDODOIAAAAIjPDPQgQgQAAgXg");
	this.shape_35.setTransform(-11.55,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#91844C","#E0CC76"],[0,1],18.8,0,-18.8,0).s().p("ACXBmIksAAQgVAAgQgPIgBgCIC7i6IC8C8QgPAPgWAAIAAAAg");
	this.shape_36.setTransform(-0.5375,10.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#665A35","#AB9C5A","#AB9C5A"],[0,1,1],10.2,0,4,0).s().p("AhlAAIAAAAIAAAAIACgCIAAAAIAEgEIADgDIgDADIAAABIgDACIgDADIADgEIACgCIABAAIACgDIAEgDICFiGQAKgMAegdIABAAIAAAAIACABQAPAQAAAVIAAEsQAAAWgPAPgAhlAAg");
	this.shape_37.setTransform(9.575,0.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],18.5,-9.7,-18.8,-9.7).s().p("AgCADIADgDIACgCIgDADIAAAAIgBACg");
	this.shape_38.setTransform(-0.3625,-0.3125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#91844C","#E0CC76"],[0,1],18.7,0,-18.6,0).s().p("Ai5hUQAPgQAWAAIErAAQAVABAOAOIAAAAIgBAAQgeAcgJAMIiGCFIgEAEIgDADIAAAAIgCACIgDADg");
	this.shape_39.setTransform(-0.55,-10.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E0CC76").s().p("AhkCXIAAkrQAAgWAQgPIC4C5IABAAIi6C6QgOgOgBgVg");
	this.shape_40.setTransform(-10.675,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).wait(1));

	// Layer 23
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.898)").s().p("AiuD3QgeAAgVgVIgCgDQgTgUAAgcIAAleQAAgdAVgVQAVgVAeAAIFeAAQAbAAAUASIADADQAVAVAAAdIAAFeQAAAegVAVQgVAVgdAAgAjdDeQATAUAcAAIFeAAQAbAAATgUQAUgTAAgcIAAleQAAgbgUgTIgCgCIAAAAQgSgSgaAAIleAAQgcAAgTAUQgUATAAAbIAAFeQAAAbASASIAAAAIACACg");
	this.shape_41.setTransform(-0.2375,0.1125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.796)").s().p("AiuD8QggAAgXgXIgDgDIABABQgUgVAAgfIAAleQAAgfAWgXQAXgWAgAAIFeAAQAeAAAVAUIgBgBIAEADQAWAXAAAfIAAFeQAAAggWAWQgXAXgfAAgAjhjhQgVAVAAAdIAAFeQAAAcATAUIACADQAVAVAeAAIFeAAQAdAAAVgVQAVgVAAgeIAAleQAAgdgVgVIgDgDQgUgSgbAAIleAAQgeAAgVAVg");
	this.shape_42.setTransform(-0.2375,0.1124);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.698)").s().p("ACwEBIleAAQgiAAgYgYIgEgEQgUgXAAgfIAAleQAAgiAYgYQAYgYAiABIFeAAQAfAAAWAUIAFADQAYAYgBAiIAAFeQABAigYAYQgYAYgiAAIAAAAgAjlDlQAXAXAgAAIFeAAQAfAAAXgXQAWgWAAggIAAleQAAgfgWgXIgEgDIABABQgVgUgeAAIleAAQggAAgXAWQgWAXAAAfIAAFeQAAAfAUAVIgBgBIADADg");
	this.shape_43.setTransform(-0.2375,0.1125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.294)").s().p("AiuEWQgrAAgegeIgFgFQgZgdAAgnIAAleQAAgqAegeQAegeArAAIFeAAQAoAAAdAaIADAEQAeAeAAAqIAAFeQAAArgeAeQgeAegqAAgAjzj0QgdAdAAAoIAAFeQAAAlAXAaIACACIABACIADACQAcAdApAAIFeAAQAoAAAdgdQAcgcAAgpIAAleQAAgogcgdIgFgEQgbgYglAAIleAAIgBAAQgoAAgcAcg");
	this.shape_44.setTransform(-0.2375,0.1125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.596)").s().p("ACwEHIleAAQgkAAgagaIgCgCQgYgZAAgjIAAleQAAgkAagZQAagaAkAAIFeAAQAiAAAYAXIABABIACACQAaAZAAAkIAAFeQAAAkgaAaQgZAagkAAIAAAAgAjojpQgYAYAAAiIAAFeQAAAfAUAXIAEAEQAYAYAiAAIFeAAQAiAAAYgYQAYgYgBgiIAAleQABgigYgYIgFgDQgWgUgfAAIleAAIgBAAQghAAgYAXg");
	this.shape_45.setTransform(-0.2375,0.1124);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.498)").s().p("AiuEMQgnAAgbgbIgFgGQgWgZAAgjIAAleQAAgmAbgbQAbgbAnAAIFeAAQAiAAAZAWIAGAFQAbAbAAAmIAAFeQAAAngbAbQgbAbgmAAgACwEHQAkAAAZgaQAagaAAgkIAAleQAAgkgagZIgCgCIgBgBQgYgXgiAAIleAAQgkAAgaAaQgaAZAAAkIAAFeQAAAjAYAZIACACQAaAaAkAAg");
	this.shape_46.setTransform(-0.2375,0.1125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.396)").s().p("AiuERQgpAAgcgdIgDgCIgBgCIgCgCQgXgaAAglIAAleQAAgoAdgdQAcgcApAAIFeAAQAlAAAbAYIAFAEQAcAdAAAoIAAFeQAAApgcAcQgdAdgoAAgAjwjwQgbAbAAAmIAAFeQAAAjAWAZIAFAGQAbAbAnAAIFeAAQAmAAAbgbQAbgbAAgnIAAleQAAgmgbgbIgGgFQgZgWgiAAIleAAIgBAAQgmAAgbAbg");
	this.shape_47.setTransform(-0.2375,0.1125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.196)").s().p("AiuEcQgtAAggggIgEgFIACACQgegfAAgrIAAleQAAgsAgggQAgggAtAAIFeAAQAqAAAfAdIgBgBIAEAEQAgAgAAAsIAAFeQAAAtggAgQggAggsAAgAj3j3QgeAeAAAqIAAFeQAAAnAZAdIAFAFQAeAeArAAIFeAAQAqAAAegeQAegeAAgrIAAleQAAgqgegeIgDgEQgdgagoAAIleAAIgBAAQgqAAgeAeg");
	this.shape_48.setTransform(-0.2375,0.1125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.094)").s().p("AiuEhQgvAAghgiIgBAAIgFgFQgcggAAgrIAAleQAAguAigiQAhghAvAAIFeAAQArAAAgAdIAFAEQAhAiAAAuIAAFeQAAAvghAhQgiAiguAAgAj7D8QAgAgAtAAIFeAAQAsAAAgggQAgggAAgtIAAleQAAgsggggIgEgEIABABQgfgdgqAAIleAAQgtAAggAgQggAgAAAsIAAFeQAAArAeAfIgCgCIAEAFg");
	this.shape_49.setTransform(-0.2375,0.1125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AiuDyQgcAAgTgUIgCgCIAAAAQgSgSAAgbIAAleQAAgbAUgTQATgUAcAAIFeAAQAaAAASASIAAAAIACACQAUATAAAbIAAFeQAAAcgUATQgTAUgbAAg");
	this.shape_50.setTransform(-0.2375,0.1125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,-50.2,110.5,79.2);


(lib.keyleft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.263)").s().p("AipAxIgCAAQgGgBgDgBIgDgDIgBgCIAAgDQgEgHAOgFIAAAAQAOgGAJgBIAXAAIAAAAQAOAABTgEIAAAAQBKABAkgCQAigBANgDIAAAAQAPgDAKgJQAJgKADgVIABgEIABgCIABgDQABgEAEgCQADgBADAAQAEABACADQADACAAAEIAAAZQAAAZgTASIAAABIgCABQgSAQgYAAIkKAAIgBAAIgUABIgFAAgAiXAZQgIABgNAFQgJADACAEQgBAFAJABQAHAAAUgBIABAAIEKAAQAXAAAQgPIgBAAIADgBIAAgBQARgRAAgWIAAgZIgCgDIgCgCIgEABIgCACIgBAEIgBACIgBACQgDAXgLAKQgKALgRAEIAAAAQgNACgjACQgkAChKgBIAAAAQhTAEgOAAIgLAAIgMAAg");
	this.shape.setTransform(2.2657,16.6209);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("AiSDOQgJgBABgEQgCgEAIgEQAOgFAIgBIAXAAQAOABBTgFIAAAAQBJABAlgCQAjgBANgDIAAAAQAQgDALgLQALgLADgXIABgDIAAgCIACgDIACgDIADgBIADACIABADIAAAZQAAAYgQARIgBAAIgCACIABgBQgQAPgXAAIkLAAIAAAAIgVABIgGAAgAjMCXIAAgDIAAksQAAgVAPgQQAPgPAWAAIEiAAIgJABIAcgCQBDAViMgBQiKgCgzACQg0ABgNAOQgOAOAAATIAEDKQgKBngIAAQgDAAgDgRg");
	this.shape_1.setTransform(-0.2125,0.3843);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.129)").s().p("Ai8AnIAFAFIADADIAJAHQgVgCAEgNgAipAxIAagBIAAAAIELAAQAYAAARgQIACgBIABgBQASgSAAgZIAAgZQAAgEgCgCQgDgDgDgBQgEAAgDABQgDACgCAEIgBADIAAACIgCAEQgDAVgJAKQgKAJgOADIgBAAQgMADgjABQgkAChJgBIgBAAQhTAEgOAAIAAAAIgXAAQgJABgOAGIAAAAQgNAFAEAHIgBADIgEgDQgGgKASgHIAAAAQAPgGAKgBIAXAAIABAAQANAABTgEIABAAQBJABAkgCQAigBANgDIgBAAQAOgDAIgIQAJgJACgTIACgFIABgCIABgDQACgFAEgDQAFgDAGABQAFABADAFQAEAEAAAFIAAAZQAAAbgUATIgBABIgBABQgTASgaAAIkKAAIgBAAIgEAAQgLAAgLgEg");
	this.shape_2.setTransform(2.2375,16.6122);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AjNANIABAAIgBACIAAgCgADNgNIABgBIAAAEIgBgDg");
	this.shape_3.setTransform(60.7125,-48.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// dark edge
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.2)").s().p("AgcCxIABgBQAMgMAAgSIAAjyQAAgHgCgGIAAgBQAAgJACgIQgUAHBAg+QgjBEADALIACAFIgBAJIAADVIAAAGIAAAaQgDAPgFAEQgGAFgGADg");
	this.shape_4.setTransform(17.6,-2.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AgZCfIABgBQALgLAAgPIAAjaQAAgGgCgGIAAgBQgBgIACgHQgSAGA6g3QgfA9ACAKIACAEIgBAIIAADAIAAAFIAAAYQgCANgFAEQgFAEgGACg");
	this.shape_5.setTransform(15.5625,-2.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).wait(1));

	// arrows
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhTADQgMgCAMgDIBTgZIAAATIBRAAQAEAAADADQACACAAADQAAAEgCADQgDACgEABIhRAAIAAATg");
	this.shape_6.setTransform(-5.2125,0.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhKADQgMgCAMgDIBKgXIAAASIBJAAQADgBADADQACACAAADQAAADgCADQgDACgDAAIhJAAIAAASg");
	this.shape_7.setTransform(-4.2625,0.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},2).wait(1));

	// hilites 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.302)").s().p("AgSAYQgIgFAAgGQgBgGAGgHIAWgUQALgLALALQAEAEAAAGIAAACQgGAMgNALIgLAJQgDACgEAAQgEAAgEgCg");
	this.shape_8.setTransform(-18.3317,17.4125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.149)").s().p("AgVAcIABAAQgLgGAAgIQgCgIAJgIIAWgVIAAAAQAPgOAOAOQAFAGAAAHIgBAEQgGAOgNALIgBABIgLAJIAAgBQgFADgFAAQgFAAgGgDgAABgTIgWAUQgGAGABAGQAAAGAIAFQAIAFAHgFIALgIQANgLAGgNIAAgCQAAgFgEgEQgFgGgGAAQgFAAgGAGg");
	this.shape_9.setTransform(-18.3432,17.3875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AAJAbQgMgGgLgNIgJgLQgEgHAEgIQAFgIAGAAQAGgBAGAGIAVAWQALALgLALQgEAEgGAAIgCAAg");
	this.shape_10.setTransform(-18.2625,-17.9317);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.149)").s().p("AAHAfQgOgGgLgNIgBgBIgJgLIABAAQgGgKAGgLIAAABQAGgLAIAAQAIgCAIAJIAVAWIAAAAQAOAPgOAOQgGAFgHAAIgEgBgAgMgaQgGAAgFAIQgFAIAFAHIAIALQALANANAGIACAAQAFAAAEgEQALgLgLgLIgUgWQgFgFgGAAIgBAAg");
	this.shape_11.setTransform(-18.2375,-17.9432);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.302)").s().p("AAJAbQgMgGgLgNIgJgLQgEgHAEgIQAFgIAGAAQAGgBAGAGIAVAWQALALgLALQgEAEgGAAIgCAAg");
	this.shape_12.setTransform(17.8875,17.9683);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.149)").s().p("AAHAfQgOgGgLgNIgBgBIgJgLIABAAQgGgKAGgLIAAABQAGgLAIAAQAIgCAIAJIAVAWIAAAAQAOAPgOAOQgGAFgHAAIgEgBgAgMgaQgGAAgFAIQgFAIAFAHIAIALQALANANAGIACAAQAFAAAEgEQALgLgLgLIgUgWQgFgFgGAAIgBAAg");
	this.shape_13.setTransform(17.9125,17.9568);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AB9C5A").s().p("AilC5IACAAIDyAAQAHAAAFgCQgCACgHAAIjyAAIAAAAIgFAAgACmi4IAAAAIgBABIABgBg");
	this.shape_14.setTransform(3.85,-2.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.302)").s().p("AAAAAIAAgFIAAALg");
	this.shape_15.setTransform(-16.85,-13.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiiB9QgHh0AHhmIAAgFIABgMQACgLAGgIIABgBQAJgKAHAFQgDAAgCAEIAAAAQgUAfAADxIgBgQgAClhaQgNgggNgHIgQgIIAAgBQAWgGALAMIADAEQADAEACAHQACAMAAARIgBgCg");
	this.shape_16.setTransform(-0.6253,-2.7786);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.302)").s().p("AgQAVQgHgEAAgGQgBgFAGgFIATgSQAKgLAKALQAEADAAAFIgBACQgFALgLAKIgKAHQgEADgDAAQgDAAgEgDg");
	this.shape_17.setTransform(-16.8071,15.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.149)").s().p("AgSAZIAAAAQgKgFAAgHQgBgHAIgIIAUgTIAAABQANgOAMAOQAFAEAAAHIgBAEQgFAMgMAKIgBABIgKAIIAAgBQgEADgFAAQgFAAgEgDgAABgRIgTASQgGAFABAGQAAAFAHAFQAHAEAHgEIAKgIQALgKAFgLIABgCQAAgFgEgDQgFgFgFAAQgFAAgFAFg");
	this.shape_18.setTransform(-16.8118,15.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.302)").s().p("AAIAYQgLgFgKgLIgHgKQgFgHAFgHQAEgHAGAAQAFgBAFAGIASATQALAKgLAKQgDAEgFAAIgCgBg");
	this.shape_19.setTransform(-16.7,-16.1071);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.149)").s().p("AAGAcQgMgFgKgMIgBgBIgIgKIABAAQgGgJAGgJIAAAAQAFgKAHAAQAHgBAIAIIATAUIgBAAQAOANgOAMQgEAFgHAAIgEgBgAgLgXQgFAAgFAHQgEAHAEAHIAIAKQAKALALAFIACABQAFAAADgEQAKgKgKgKIgSgTQgEgGgFAAIgCABg");
	this.shape_20.setTransform(-16.675,-16.1118);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.302)").s().p("AAIAYQgLgFgKgLIgHgKQgFgHAFgHQAEgHAGAAQAFgBAFAGIASATQALAKgLAKQgDAEgFAAIgCgBg");
	this.shape_21.setTransform(15.8,16.1929);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.149)").s().p("AAGAcQgMgFgKgMIgBgBIgIgKIABAAQgGgJAGgJIAAAAQAFgKAHAAQAHgBAIAIIATAUIgBAAQAOANgOAMQgEAFgHAAIgEgBgAgLgXQgFAAgFAHQgEAHAEAHIAIAKQAKALALAFIACABQAFAAADgEQAKgKgKgKIgSgTQgEgGgFAAIgCABg");
	this.shape_22.setTransform(15.825,16.1882);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AB9C5A").s().p("AiPCnIgFAAIABAAIDaAAQAGgBAFgBQgCACgGAAgACVimIAAABIgBAAIABgBg");
	this.shape_23.setTransform(3.1875,-2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.302)").s().p("AAAAAIABgEIgBAJg");
	this.shape_24.setTransform(-15.45,-11.9125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiSBxQgGhpAGhcIAAgEIABgLQACgKAFgHIABgBQAIgJAGAEQgCABgCADIAAAAQgSAcAADZIgBgOgACVhRQgMgdgMgGIgOgIIgBAAQAUgFAKAKIADAEQADAEABAGQADAKAAAQIgBgCg");
	this.shape_25.setTransform(-0.8453,-2.4674);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},2).wait(1));

	// hilites 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.2)").ss(1,1,1,3,true).p("AB+AAIj7AA");
	this.shape_26.setTransform(-1.375,-16.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.302)").s().p("AB3CnIjWAAIgGAAIgaAAQgOgCgEgDIgGgFIgFgIQgFgGgBgIIgBgQIgBgNIAAjWIAAgGIAAgaQADgOAFgFQAGgFAGgCIAGAGIgBAAQgMANAAARIAADyIAAALIAAAEIAEAPQANAMARAAIDyAAQAHAAACgCQADgCAAgDQABgDAQgNQAPgNgGAUQgGAVgMAEQgKAEgNAAIgDAAg");
	this.shape_27.setTransform(-0.4192,0.7292);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.2)").ss(1,1,1,3,true).p("AByAAIjjAA");
	this.shape_28.setTransform(-1.5125,-14.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.302)").s().p("ABrCWIjAAAIgGAAIgXAAQgNgCgEgCIgEgEIgGgHQgDgGgBgHIgCgPIAAgMIAAjAIAAgFIAAgYQACgNAFgEQAFgEAGgDIAFAGIgBABQgLALAAAPIAADaIAAAJIABAFIADANQALALAQAAIDaAAQAGAAACgCQACgCABgDQAAgCAOgMQAOgMgFASQgGATgLAEQgJAEgLAAIgDgBg");
	this.shape_29.setTransform(-0.6649,0.6795);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26}]}).to({state:[{t:this.shape_29},{t:this.shape_28}]},2).wait(1));

	// face
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],-25.2,0.7,14.9,-5.4).s().p("Ah4CkQgSAAgMgNQgNgMAAgSIAAjyQAAgRANgMQAMgNASAAIDyAAQARAAAMANQANAMAAARIAADyQAAASgNAMQgMANgRAAg");
	this.shape_30.setTransform(-0.425,-0.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],-22.7,0.6,13.4,-4.9).s().p("AhsCTQgQAAgLgLQgLgLAAgQIAAjZQAAgQALgLQALgLAQAAIDaAAQAPAAALALQALALAAAQIAADZQAAAQgLALQgLALgPAAg");
	this.shape_31.setTransform(-0.6625,-0.1875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},2).wait(1));

	// sides
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],20.9,0,-20.9,0).s().p("ACoBxIlNAAQgYAAgRgRIgCgBIDQjPIDRDQQgRARgYAAIAAAAg");
	this.shape_32.setTransform(-0.2875,11.2625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#807242","#AB9C5A","#AB9C5A"],[0,1,1],11.3,0,4.4,0).s().p("AhwAAIAAAAIAAAAIACgCIAAAAIAEgEIAEgDIgEADIAAAAIgDACIgDAEIADgEIACgCIABAAIADgEIAEgEICViVQAKgNAigfIAAAAIABgBIACACQARARAAAYIAAFNQAAAYgRARgAhwAAg");
	this.shape_33.setTransform(10.95,0.0125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],20.7,0,-20.7,0).s().p("AAABwIADgEIACgCIgDADIgBABIgBACgAjOheQARgRAYAAIFNAAQAXAAAQAQIgBABIAAgBQghAggLANIiVCUIgEAEIgEADIAAABIgCACIgDAEg");
	this.shape_34.setTransform(-0.3,-11.2625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E0CC76").s().p("AhvCoIAAlNQAAgYARgRIDODOIAAAAIjPDPQgQgQAAgXg");
	this.shape_35.setTransform(-11.55,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#91844C","#E0CC76"],[0,1],18.8,0,-18.8,0).s().p("ACXBmIksAAQgVAAgQgPIgBgCIC7i6IC8C8QgPAPgWAAIAAAAg");
	this.shape_36.setTransform(-0.5375,10.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#665A35","#AB9C5A","#AB9C5A"],[0,1,1],10.2,0,4,0).s().p("AhlAAIAAAAIAAAAIACgCIAAAAIAEgEIADgDIgDADIAAABIgDACIgDADIADgEIACgCIABAAIACgDIAEgDICFiGQAKgMAegdIABAAIAAAAIACABQAPAQAAAVIAAEsQAAAWgPAPgAhlAAg");
	this.shape_37.setTransform(9.575,0.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],18.5,-9.7,-18.8,-9.7).s().p("AgCADIADgDIACgCIgDADIAAAAIgBACg");
	this.shape_38.setTransform(-0.3625,-0.3125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#91844C","#E0CC76"],[0,1],18.7,0,-18.6,0).s().p("Ai5hUQAPgQAWAAIErAAQAVABAOAOIAAAAIgBAAQgeAcgJAMIiGCFIgEAEIgDADIAAAAIgCACIgDADg");
	this.shape_39.setTransform(-0.55,-10.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E0CC76").s().p("AhkCXIAAkrQAAgWAQgPIC4C5IABAAIi6C6QgOgOgBgVg");
	this.shape_40.setTransform(-10.675,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).wait(1));

	// Layer 23
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.898)").s().p("AiuD3QgeAAgVgVIgCgDQgTgUAAgcIAAleQAAgdAVgVQAVgVAeAAIFeAAQAbAAAUASIADADQAVAVAAAdIAAFeQAAAegVAVQgVAVgdAAgAjdDeQATAUAcAAIFeAAQAbAAATgUQAUgTAAgcIAAleQAAgbgUgTIgCgCIAAAAQgSgSgaAAIleAAQgcAAgTAUQgUATAAAbIAAFeQAAAbASASIAAAAIACACg");
	this.shape_41.setTransform(-0.2375,0.1125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.796)").s().p("AiuD8QggAAgXgXIgDgDIABABQgUgVAAgfIAAleQAAgfAWgXQAXgWAgAAIFeAAQAeAAAVAUIgBgBIAEADQAWAXAAAfIAAFeQAAAggWAWQgXAXgfAAgAjhjhQgVAVAAAdIAAFeQAAAcATAUIACADQAVAVAeAAIFeAAQAdAAAVgVQAVgVAAgeIAAleQAAgdgVgVIgDgDQgUgSgbAAIleAAQgeAAgVAVg");
	this.shape_42.setTransform(-0.2375,0.1124);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.698)").s().p("ACwEBIleAAQgiAAgYgYIgEgEQgUgXAAgfIAAleQAAgiAYgYQAYgYAiABIFeAAQAfAAAWAUIAFADQAYAYgBAiIAAFeQABAigYAYQgYAYgiAAIAAAAgAjlDlQAXAXAgAAIFeAAQAfAAAXgXQAWgWAAggIAAleQAAgfgWgXIgEgDIABABQgVgUgeAAIleAAQggAAgXAWQgWAXAAAfIAAFeQAAAfAUAVIgBgBIADADg");
	this.shape_43.setTransform(-0.2375,0.1125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.294)").s().p("AiuEWQgrAAgegeIgFgFQgZgdAAgnIAAleQAAgqAegeQAegeArAAIFeAAQAoAAAdAaIADAEQAeAeAAAqIAAFeQAAArgeAeQgeAegqAAgAjzj0QgdAdAAAoIAAFeQAAAlAXAaIACACIABACIADACQAcAdApAAIFeAAQAoAAAdgdQAcgcAAgpIAAleQAAgogcgdIgFgEQgbgYglAAIleAAIgBAAQgoAAgcAcg");
	this.shape_44.setTransform(-0.2375,0.1125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.596)").s().p("ACwEHIleAAQgkAAgagaIgCgCQgYgZAAgjIAAleQAAgkAagZQAagaAkAAIFeAAQAiAAAYAXIABABIACACQAaAZAAAkIAAFeQAAAkgaAaQgZAagkAAIAAAAgAjojpQgYAYAAAiIAAFeQAAAfAUAXIAEAEQAYAYAiAAIFeAAQAiAAAYgYQAYgYgBgiIAAleQABgigYgYIgFgDQgWgUgfAAIleAAIgBAAQghAAgYAXg");
	this.shape_45.setTransform(-0.2375,0.1124);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.498)").s().p("AiuEMQgnAAgbgbIgFgGQgWgZAAgjIAAleQAAgmAbgbQAbgbAnAAIFeAAQAiAAAZAWIAGAFQAbAbAAAmIAAFeQAAAngbAbQgbAbgmAAgACwEHQAkAAAZgaQAagaAAgkIAAleQAAgkgagZIgCgCIgBgBQgYgXgiAAIleAAQgkAAgaAaQgaAZAAAkIAAFeQAAAjAYAZIACACQAaAaAkAAg");
	this.shape_46.setTransform(-0.2375,0.1125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.396)").s().p("AiuERQgpAAgcgdIgDgCIgBgCIgCgCQgXgaAAglIAAleQAAgoAdgdQAcgcApAAIFeAAQAlAAAbAYIAFAEQAcAdAAAoIAAFeQAAApgcAcQgdAdgoAAgAjwjwQgbAbAAAmIAAFeQAAAjAWAZIAFAGQAbAbAnAAIFeAAQAmAAAbgbQAbgbAAgnIAAleQAAgmgbgbIgGgFQgZgWgiAAIleAAIgBAAQgmAAgbAbg");
	this.shape_47.setTransform(-0.2375,0.1125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.196)").s().p("AiuEcQgtAAggggIgEgFIACACQgegfAAgrIAAleQAAgsAgggQAgggAtAAIFeAAQAqAAAfAdIgBgBIAEAEQAgAgAAAsIAAFeQAAAtggAgQggAggsAAgAj3j3QgeAeAAAqIAAFeQAAAnAZAdIAFAFQAeAeArAAIFeAAQAqAAAegeQAegeAAgrIAAleQAAgqgegeIgDgEQgdgagoAAIleAAIgBAAQgqAAgeAeg");
	this.shape_48.setTransform(-0.2375,0.1125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.094)").s().p("AiuEhQgvAAghgiIgBAAIgFgFQgcggAAgrIAAleQAAguAigiQAhghAvAAIFeAAQArAAAgAdIAFAEQAhAiAAAuIAAFeQAAAvghAhQgiAiguAAgAj7D8QAgAgAtAAIFeAAQAsAAAgggQAgggAAgtIAAleQAAgsggggIgEgEIABABQgfgdgqAAIleAAQgtAAggAgQggAgAAAsIAAFeQAAArAeAfIgCgCIAEAFg");
	this.shape_49.setTransform(-0.2375,0.1125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AiuDyQgcAAgTgUIgCgCIAAAAQgSgSAAgbIAAleQAAgbAUgTQATgUAcAAIFeAAQAaAAASASIAAAAIACACQAUATAAAbIAAFeQAAAcgUATQgTAUgbAAg");
	this.shape_50.setTransform(-0.2375,0.1125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,-50.2,110.5,79.2);


(lib.keydown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.263)").s().p("AipAxIgCAAQgGgBgDgBIgDgDIgBgCIAAgDQgEgHAOgFIAAAAQAOgGAJgBIAXAAIAAAAQAOAABTgEIAAAAQBKABAkgCQAigBANgDIAAAAQAPgDAKgJQAJgKADgVIABgEIABgCIABgDQABgEAEgCQADgBADAAQAEABACADQADACAAAEIAAAZQAAAZgTASIAAABIgCABQgSAQgYAAIkKAAIgBAAIgUABIgFAAgAiXAZQgIABgNAFQgJADACAEQgBAFAJABQAHAAAUgBIABAAIEKAAQAXAAAQgPIgBAAIADgBIAAgBQARgRAAgWIAAgZIgCgDIgCgCIgEABIgCACIgBAEIgBACIgBACQgDAXgLAKQgKALgRAEIAAAAQgNACgjACQgkAChKgBIAAAAQhTAEgOAAIgLAAIgMAAg");
	this.shape.setTransform(2.2657,16.6209);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("AiSDOQgJgBABgEQgCgEAIgEQAOgFAIgBIAXAAQAOABBTgFIAAAAQBJABAlgCQAjgBANgDIAAAAQAQgDALgLQALgLADgXIABgDIAAgCIACgDIACgDIADgBIADACIABADIAAAZQAAAYgQARIgBAAIgCACIABgBQgQAPgXAAIkLAAIAAAAIgVABIgGAAgAjMCXIAAgDIAAksQAAgVAPgQQAPgPAWAAIEiAAIgJABIAcgCQBDAViMgBQiKgCgzACQg0ABgNAOQgOAOAAATIAEDKQgKBngIAAQgDAAgDgRg");
	this.shape_1.setTransform(-0.2125,0.3843);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.129)").s().p("Ai8AnIAFAFIADADIAJAHQgVgCAEgNgAipAxIAagBIAAAAIELAAQAYAAARgQIACgBIABgBQASgSAAgZIAAgZQAAgEgCgCQgDgDgDgBQgEAAgDABQgDACgCAEIgBADIAAACIgCAEQgDAVgJAKQgKAJgOADIgBAAQgMADgjABQgkAChJgBIgBAAQhTAEgOAAIAAAAIgXAAQgJABgOAGIAAAAQgNAFAEAHIgBADIgEgDQgGgKASgHIAAAAQAPgGAKgBIAXAAIABAAQANAABTgEIABAAQBJABAkgCQAigBANgDIgBAAQAOgDAIgIQAJgJACgTIACgFIABgCIABgDQACgFAEgDQAFgDAGABQAFABADAFQAEAEAAAFIAAAZQAAAbgUATIgBABIgBABQgTASgaAAIkKAAIgBAAIgEAAQgLAAgLgEg");
	this.shape_2.setTransform(2.2375,16.6122);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AjNANIABAAIgBACIAAgCgADNgNIABgBIAAAEIgBgDg");
	this.shape_3.setTransform(60.7125,-48.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// dark edge
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.2)").s().p("AgcCxIABgBQAMgMAAgSIAAjyQAAgHgCgGIAAgBQAAgJACgIQgUAHBAg+QgjBEADALIACAFIgBAJIAADVIAAAGIAAAaQgDAPgFAEQgGAFgGADg");
	this.shape_4.setTransform(17.6,-2.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AgZCfIABgBQALgLAAgPIAAjaQAAgGgCgGIAAgBQgBgIACgHQgSAGA6g3QgfA9ACAKIACAEIgBAIIAADAIAAAFIAAAYQgCANgFAEQgFAEgGACg");
	this.shape_5.setTransform(15.5625,-2.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).wait(1));

	// arrows
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDBUIgYhSIATAAIAAhSQAAgEACgDQADgCADAAQAEAAADACQADADAAAEIAABSIATAAIgaBSQgCAGgBAAQgBAAgCgGg");
	this.shape_6.setTransform(-10.6,0.0625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCBLIgXhKIASAAIAAhJQAAgDACgDQADgCACAAQAEAAACACQADADgBADIAABJIASAAIgXBKQgCAGgBAAQgBAAgBgGg");
	this.shape_7.setTransform(-9.825,0.0625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},2).wait(1));

	// hilites 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.302)").s().p("AgSAYQgIgFAAgGQgBgGAGgHIAWgUQALgLALALQAEAEAAAGIAAACQgGAMgNALIgLAJQgDACgEAAQgEAAgEgCg");
	this.shape_8.setTransform(-18.3317,17.4125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.149)").s().p("AgVAcIABAAQgLgGAAgIQgCgIAJgIIAWgVIAAAAQAPgOAOAOQAFAGAAAHIgBAEQgGAOgNALIgBABIgLAJIAAgBQgFADgFAAQgFAAgGgDgAABgTIgWAUQgGAGABAGQAAAGAIAFQAIAFAHgFIALgIQANgLAGgNIAAgCQAAgFgEgEQgFgGgGAAQgFAAgGAGg");
	this.shape_9.setTransform(-18.3432,17.3875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AAJAbQgMgGgLgNIgJgLQgEgHAEgIQAFgIAGAAQAGgBAGAGIAVAWQALALgLALQgEAEgGAAIgCAAg");
	this.shape_10.setTransform(-18.2625,-17.9317);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.149)").s().p("AAHAfQgOgGgLgNIgBgBIgJgLIABAAQgGgKAGgLIAAABQAGgLAIAAQAIgCAIAJIAVAWIAAAAQAOAPgOAOQgGAFgHAAIgEgBgAgMgaQgGAAgFAIQgFAIAFAHIAIALQALANANAGIACAAQAFAAAEgEQALgLgLgLIgUgWQgFgFgGAAIgBAAg");
	this.shape_11.setTransform(-18.2375,-17.9432);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.302)").s().p("AAJAbQgMgGgLgNIgJgLQgEgHAEgIQAFgIAGAAQAGgBAGAGIAVAWQALALgLALQgEAEgGAAIgCAAg");
	this.shape_12.setTransform(17.8875,17.9683);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.149)").s().p("AAHAfQgOgGgLgNIgBgBIgJgLIABAAQgGgKAGgLIAAABQAGgLAIAAQAIgCAIAJIAVAWIAAAAQAOAPgOAOQgGAFgHAAIgEgBgAgMgaQgGAAgFAIQgFAIAFAHIAIALQALANANAGIACAAQAFAAAEgEQALgLgLgLIgUgWQgFgFgGAAIgBAAg");
	this.shape_13.setTransform(17.9125,17.9568);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AB9C5A").s().p("AilC5IACAAIDyAAQAHAAAFgCQgCACgHAAIjyAAIAAAAIgFAAgACmi4IAAAAIgBABIABgBg");
	this.shape_14.setTransform(3.85,-2.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.302)").s().p("AAAAAIAAgFIAAALg");
	this.shape_15.setTransform(-16.85,-13.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiiB9QgHh0AHhmIAAgFIABgMQACgLAGgIIABgBQAJgKAHAFQgDAAgCAEIAAAAQgUAfAADxIgBgQgAClhaQgNgggNgHIgQgIIAAgBQAWgGALAMIADAEQADAEACAHQACAMAAARIgBgCg");
	this.shape_16.setTransform(-0.6253,-2.7786);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.302)").s().p("AgQAVQgHgEAAgGQgBgFAGgFIATgSQAKgLAKALQAEADAAAFIgBACQgFALgLAKIgKAHQgEADgDAAQgDAAgEgDg");
	this.shape_17.setTransform(-16.8071,15.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.149)").s().p("AgSAZIAAAAQgKgFAAgHQgBgHAIgIIAUgTIAAABQANgOAMAOQAFAEAAAHIgBAEQgFAMgMAKIgBABIgKAIIAAgBQgEADgFAAQgFAAgEgDgAABgRIgTASQgGAFABAGQAAAFAHAFQAHAEAHgEIAKgIQALgKAFgLIABgCQAAgFgEgDQgFgFgFAAQgFAAgFAFg");
	this.shape_18.setTransform(-16.8118,15.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.302)").s().p("AAIAYQgLgFgKgLIgHgKQgFgHAFgHQAEgHAGAAQAFgBAFAGIASATQALAKgLAKQgDAEgFAAIgCgBg");
	this.shape_19.setTransform(-16.7,-16.1071);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.149)").s().p("AAGAcQgMgFgKgMIgBgBIgIgKIABAAQgGgJAGgJIAAAAQAFgKAHAAQAHgBAIAIIATAUIgBAAQAOANgOAMQgEAFgHAAIgEgBgAgLgXQgFAAgFAHQgEAHAEAHIAIAKQAKALALAFIACABQAFAAADgEQAKgKgKgKIgSgTQgEgGgFAAIgCABg");
	this.shape_20.setTransform(-16.675,-16.1118);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.302)").s().p("AAIAYQgLgFgKgLIgHgKQgFgHAFgHQAEgHAGAAQAFgBAFAGIASATQALAKgLAKQgDAEgFAAIgCgBg");
	this.shape_21.setTransform(15.8,16.1929);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.149)").s().p("AAGAcQgMgFgKgMIgBgBIgIgKIABAAQgGgJAGgJIAAAAQAFgKAHAAQAHgBAIAIIATAUIgBAAQAOANgOAMQgEAFgHAAIgEgBgAgLgXQgFAAgFAHQgEAHAEAHIAIAKQAKALALAFIACABQAFAAADgEQAKgKgKgKIgSgTQgEgGgFAAIgCABg");
	this.shape_22.setTransform(15.825,16.1882);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AB9C5A").s().p("AiPCnIgFAAIABAAIDaAAQAGgBAFgBQgCACgGAAgACVimIAAABIgBAAIABgBg");
	this.shape_23.setTransform(3.1875,-2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.302)").s().p("AAAAAIABgEIgBAJg");
	this.shape_24.setTransform(-15.45,-11.9125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiSBxQgGhpAGhcIAAgEIABgLQACgKAFgHIABgBQAIgJAGAEQgCABgCADIAAAAQgSAcAADZIgBgOgACVhRQgMgdgMgGIgOgIIgBAAQAUgFAKAKIADAEQADAEABAGQADAKAAAQIgBgCg");
	this.shape_25.setTransform(-0.8453,-2.4674);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},2).wait(1));

	// hilites 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.2)").ss(1,1,1,3,true).p("AB+AAIj7AA");
	this.shape_26.setTransform(-1.375,-16.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.302)").s().p("AB3CnIjWAAIgGAAIgaAAQgOgCgEgDIgGgFIgFgIQgFgGgBgIIgBgQIgBgNIAAjWIAAgGIAAgaQADgOAFgFQAGgFAGgCIAGAGIgBAAQgMANAAARIAADyIAAALIAAAEIAEAPQANAMARAAIDyAAQAHAAACgCQADgCAAgDQABgDAQgNQAPgNgGAUQgGAVgMAEQgKAEgNAAIgDAAg");
	this.shape_27.setTransform(-0.4192,0.7292);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.2)").ss(1,1,1,3,true).p("AByAAIjjAA");
	this.shape_28.setTransform(-1.5125,-14.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.302)").s().p("ABrCWIjAAAIgGAAIgXAAQgNgCgEgCIgEgEIgGgHQgDgGgBgHIgCgPIAAgMIAAjAIAAgFIAAgYQACgNAFgEQAFgEAGgDIAFAGIgBABQgLALAAAPIAADaIAAAJIABAFIADANQALALAQAAIDaAAQAGAAACgCQACgCABgDQAAgCAOgMQAOgMgFASQgGATgLAEQgJAEgLAAIgDgBg");
	this.shape_29.setTransform(-0.6649,0.6795);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26}]}).to({state:[{t:this.shape_29},{t:this.shape_28}]},2).wait(1));

	// face
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],-25.2,0.7,14.9,-5.4).s().p("Ah4CkQgSAAgMgNQgNgMAAgSIAAjyQAAgRANgMQAMgNASAAIDyAAQARAAAMANQANAMAAARIAADyQAAASgNAMQgMANgRAAg");
	this.shape_30.setTransform(-0.425,-0.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],-22.7,0.6,13.4,-4.9).s().p("AhsCTQgQAAgLgLQgLgLAAgQIAAjZQAAgQALgLQALgLAQAAIDaAAQAPAAALALQALALAAAQIAADZQAAAQgLALQgLALgPAAg");
	this.shape_31.setTransform(-0.6625,-0.1875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},2).wait(1));

	// sides
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],20.9,0,-20.9,0).s().p("ACoBxIlNAAQgYAAgRgRIgCgBIDQjPIDRDQQgRARgYAAIAAAAg");
	this.shape_32.setTransform(-0.2875,11.2625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#807242","#AB9C5A","#AB9C5A"],[0,1,1],11.3,0,4.4,0).s().p("AhwAAIAAAAIAAAAIACgCIAAAAIAEgEIAEgDIgEADIAAAAIgDACIgDAEIADgEIACgCIABAAIADgEIAEgEICViVQAKgNAigfIAAAAIABgBIACACQARARAAAYIAAFNQAAAYgRARgAhwAAg");
	this.shape_33.setTransform(10.95,0.0125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],20.7,0,-20.7,0).s().p("AAABwIADgEIACgCIgDADIgBABIgBACgAjOheQARgRAYAAIFNAAQAXAAAQAQIgBABIAAgBQghAggLANIiVCUIgEAEIgEADIAAABIgCACIgDAEg");
	this.shape_34.setTransform(-0.3,-11.2625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E0CC76").s().p("AhvCoIAAlNQAAgYARgRIDODOIAAAAIjPDPQgQgQAAgXg");
	this.shape_35.setTransform(-11.55,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#91844C","#E0CC76"],[0,1],18.8,0,-18.8,0).s().p("ACXBmIksAAQgVAAgQgPIgBgCIC7i6IC8C8QgPAPgWAAIAAAAg");
	this.shape_36.setTransform(-0.5375,10.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#665A35","#AB9C5A","#AB9C5A"],[0,1,1],10.2,0,4,0).s().p("AhlAAIAAAAIAAAAIACgCIAAAAIAEgEIADgDIgDADIAAABIgDACIgDADIADgEIACgCIABAAIACgDIAEgDICFiGQAKgMAegdIABAAIAAAAIACABQAPAQAAAVIAAEsQAAAWgPAPgAhlAAg");
	this.shape_37.setTransform(9.575,0.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#AB9C5A","#E0CC76"],[0,1],18.5,-9.7,-18.8,-9.7).s().p("AgCADIADgDIACgCIgDADIAAAAIgBACg");
	this.shape_38.setTransform(-0.3625,-0.3125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#91844C","#E0CC76"],[0,1],18.7,0,-18.6,0).s().p("Ai5hUQAPgQAWAAIErAAQAVABAOAOIAAAAIgBAAQgeAcgJAMIiGCFIgEAEIgDADIAAAAIgCACIgDADg");
	this.shape_39.setTransform(-0.55,-10.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E0CC76").s().p("AhkCXIAAkrQAAgWAQgPIC4C5IABAAIi6C6QgOgOgBgVg");
	this.shape_40.setTransform(-10.675,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).wait(1));

	// Layer 23
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.898)").s().p("AiuD3QgeAAgVgVIgCgDQgTgUAAgcIAAleQAAgdAVgVQAVgVAeAAIFeAAQAbAAAUASIADADQAVAVAAAdIAAFeQAAAegVAVQgVAVgdAAgAjdDeQATAUAcAAIFeAAQAbAAATgUQAUgTAAgcIAAleQAAgbgUgTIgCgCIAAAAQgSgSgaAAIleAAQgcAAgTAUQgUATAAAbIAAFeQAAAbASASIAAAAIACACg");
	this.shape_41.setTransform(-0.2375,0.1125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.796)").s().p("AiuD8QggAAgXgXIgDgDIABABQgUgVAAgfIAAleQAAgfAWgXQAXgWAgAAIFeAAQAeAAAVAUIgBgBIAEADQAWAXAAAfIAAFeQAAAggWAWQgXAXgfAAgAjhjhQgVAVAAAdIAAFeQAAAcATAUIACADQAVAVAeAAIFeAAQAdAAAVgVQAVgVAAgeIAAleQAAgdgVgVIgDgDQgUgSgbAAIleAAQgeAAgVAVg");
	this.shape_42.setTransform(-0.2375,0.1124);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.698)").s().p("ACwEBIleAAQgiAAgYgYIgEgEQgUgXAAgfIAAleQAAgiAYgYQAYgYAiABIFeAAQAfAAAWAUIAFADQAYAYgBAiIAAFeQABAigYAYQgYAYgiAAIAAAAgAjlDlQAXAXAgAAIFeAAQAfAAAXgXQAWgWAAggIAAleQAAgfgWgXIgEgDIABABQgVgUgeAAIleAAQggAAgXAWQgWAXAAAfIAAFeQAAAfAUAVIgBgBIADADg");
	this.shape_43.setTransform(-0.2375,0.1125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.294)").s().p("AiuEWQgrAAgegeIgFgFQgZgdAAgnIAAleQAAgqAegeQAegeArAAIFeAAQAoAAAdAaIADAEQAeAeAAAqIAAFeQAAArgeAeQgeAegqAAgAjzj0QgdAdAAAoIAAFeQAAAlAXAaIACACIABACIADACQAcAdApAAIFeAAQAoAAAdgdQAcgcAAgpIAAleQAAgogcgdIgFgEQgbgYglAAIleAAIgBAAQgoAAgcAcg");
	this.shape_44.setTransform(-0.2375,0.1125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.596)").s().p("ACwEHIleAAQgkAAgagaIgCgCQgYgZAAgjIAAleQAAgkAagZQAagaAkAAIFeAAQAiAAAYAXIABABIACACQAaAZAAAkIAAFeQAAAkgaAaQgZAagkAAIAAAAgAjojpQgYAYAAAiIAAFeQAAAfAUAXIAEAEQAYAYAiAAIFeAAQAiAAAYgYQAYgYgBgiIAAleQABgigYgYIgFgDQgWgUgfAAIleAAIgBAAQghAAgYAXg");
	this.shape_45.setTransform(-0.2375,0.1124);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.498)").s().p("AiuEMQgnAAgbgbIgFgGQgWgZAAgjIAAleQAAgmAbgbQAbgbAnAAIFeAAQAiAAAZAWIAGAFQAbAbAAAmIAAFeQAAAngbAbQgbAbgmAAgACwEHQAkAAAZgaQAagaAAgkIAAleQAAgkgagZIgCgCIgBgBQgYgXgiAAIleAAQgkAAgaAaQgaAZAAAkIAAFeQAAAjAYAZIACACQAaAaAkAAg");
	this.shape_46.setTransform(-0.2375,0.1125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.396)").s().p("AiuERQgpAAgcgdIgDgCIgBgCIgCgCQgXgaAAglIAAleQAAgoAdgdQAcgcApAAIFeAAQAlAAAbAYIAFAEQAcAdAAAoIAAFeQAAApgcAcQgdAdgoAAgAjwjwQgbAbAAAmIAAFeQAAAjAWAZIAFAGQAbAbAnAAIFeAAQAmAAAbgbQAbgbAAgnIAAleQAAgmgbgbIgGgFQgZgWgiAAIleAAIgBAAQgmAAgbAbg");
	this.shape_47.setTransform(-0.2375,0.1125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.196)").s().p("AiuEcQgtAAggggIgEgFIACACQgegfAAgrIAAleQAAgsAgggQAgggAtAAIFeAAQAqAAAfAdIgBgBIAEAEQAgAgAAAsIAAFeQAAAtggAgQggAggsAAgAj3j3QgeAeAAAqIAAFeQAAAnAZAdIAFAFQAeAeArAAIFeAAQAqAAAegeQAegeAAgrIAAleQAAgqgegeIgDgEQgdgagoAAIleAAIgBAAQgqAAgeAeg");
	this.shape_48.setTransform(-0.2375,0.1125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.094)").s().p("AiuEhQgvAAghgiIgBAAIgFgFQgcggAAgrIAAleQAAguAigiQAhghAvAAIFeAAQArAAAgAdIAFAEQAhAiAAAuIAAFeQAAAvghAhQgiAiguAAgAj7D8QAgAgAtAAIFeAAQAsAAAgggQAgggAAgtIAAleQAAgsggggIgEgEIABABQgfgdgqAAIleAAQgtAAggAgQggAgAAAsIAAFeQAAArAeAfIgCgCIAEAFg");
	this.shape_49.setTransform(-0.2375,0.1125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AiuDyQgcAAgTgUIgCgCIAAAAQgSgSAAgbIAAleQAAgbAUgTQATgUAcAAIFeAAQAaAAASASIAAAAIACACQAUATAAAbIAAFeQAAAcgUATQgTAUgbAAg");
	this.shape_50.setTransform(-0.2375,0.1125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,-50.2,110.5,79.2);


(lib.BOW = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#252525").ss(1,1,1).p("AAHg+QAPgLAWgJQBKgfCIAAQCIAAhcAiQhbAhgNArQgMArBpApQBpApiCgLQh3gJhNgcAAHg+QAbACAUAUQABABABABQASATADAZQAAAEAAAEQAAAEAAAFQgCARgJAOQgFAHgHAHQgWAXggAAQgfAAgXgXQgHgHgFgHQgIgOgCgQQgBgFAAgFQAAgfAXgXQARgRAWgEQAEgBAFAAQADgBADAAQADAAAEABgAgGg+QgQgLgWgJQhJgfiIAAQiIAABbAiQBcAhANArQAMArhpApQhqApCDgLQB3gJBMgc");
	this.shape.setTransform(33.55,11.357);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AEFBvQh2gJhMgcQAKgSABgWIAAgIIgBgDQgCARgIAOQgGAHgHAHQgWAXggAAQgfAAgXgXQgHgHgEgHQgJgOgCgQIAAgKQAAgfAWgXQARgRAWgEIAJgBIgJABQgWAEgRARQgWAXAAAfIAAAKIAAAKQAAAWALASQhNAch3AJQiCALBpgpQBqgpgNgrQgNgrhcghQhbgiCIAAQCIAABJAfQAXAJAPALIAGgBIAHABQAcACATAUIADACQASATADAZIAAAIIgBAJIABgJIAAgIQgDgZgSgTIgDgCQgTgUgcgCQAQgLAVgJQBKgfCIAAQCIAAhcAiQhbAhgNArQgNArBqApQBUAhhCAAQgRAAgbgDg");
	this.shape_1.setTransform(33.55,11.357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BOW, new cjs.Rectangle(-1,-1,69.1,24.7), null);


(lib.black = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AquKiIAArAIlckWIIBltQIJFkIJlkIICFtIldEWIAALAgALsKiIg+AAArrKiIA9AA");
	this.shape.setTransform(103.45,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqtKiIAArAIldkWIIBltQIJFkIKlkIIBFtIldEWIAALAg");
	this.shape_1.setTransform(103.45,67.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(-1,-1,208.9,136.8), null);


(lib.bearbody = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIillQAACFhdBdQheBekdF/QkbGAjpg9Qjpg+EkokQEjokBdheQBdhdCFAAQCEAABeBdQBdBeAACEg");
	this.shape.setTransform(36.5593,221.4365,0.6691,0.6689);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996633").s().p("Am6KdQjpg+EkokQEjokBdheQBdhdCFAAQCEAABeBdQBdBeAACEQAACFhdBdQheBekdF/Qj0FLjPAAQghAAgggIg");
	this.shape_1.setTransform(36.5593,221.4365,0.6691,0.6689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ADrAAQAABihFBEQhEBFhiAAQhhAAhEhFQhFhEAAhiQAAhhBFhFQBEhEBhAAQBiAABEBEQBFBFAABhg");
	this.shape_2.setTransform(60.6,35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#997242").s().p("AilCmQhFhEAAhiQAAhhBFhEQBEhFBhAAQBhAABFBFQBFBEAABhQAABihFBEQhFBFhhAAQhhAAhEhFg");
	this.shape_3.setTransform(60.6,35.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ADrAAQAABihFBEQhEBFhiAAQhhAAhEhFQhFhEAAhiQAAhhBFhFQBEhEBhAAQBiAABEBEQBFBFAABhg");
	this.shape_4.setTransform(178.6,35.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#997242").s().p("AilCmQhFhFAAhhQAAhgBFhFQBFhFBgAAQBhAABFBFQBFBFAABgQAABhhFBFQhFBFhhAAQhgAAhFhFg");
	this.shape_5.setTransform(178.6,35.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("ACKAAQAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5QAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4g");
	this.shape_6.setTransform(86.85,330.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#997242").s().p("AhgBhQgpgoAAg5QAAg4ApgpQAogoA4ABQA5gBAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgogpg");
	this.shape_7.setTransform(86.85,330.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ACKAAQAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5QAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4g");
	this.shape_8.setTransform(153.35,330.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#997242").s().p("AhgBhQgogogBg5QABg4AogpQAogoA4ABQA5gBAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgogpg");
	this.shape_9.setTransform(153.35,330.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AHWAAQAAEeiKDKQiJDKjDAAQjCAAiKjKQiJjKAAkeQAAkdCJjKQCKjKDCAAQDDAACJDKQCKDKAAEdg");
	this.shape_10.setTransform(120.1,239.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#997242").s().p("AlLHoQiKjKAAkeQAAkdCKjKQCKjKDBAAQDCAACKDKQCKDKAAEdQAAEeiKDKQiKDKjCAAQjBAAiKjKg");
	this.shape_11.setTransform(120.1,239.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AFIAAQAACHhhBgQhfBhiIAAQiHAAhfhhQhhhgAAiHQAAiHBhhgQBfhgCHAAQCIAABfBgQBhBgAACHg");
	this.shape_12.setTransform(57.85,32.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996633").s().p("AjmDnQhghfgBiIQABiGBghgQBghgCGAAQCIAABfBgQBgBgABCGQgBCIhgBfQhfBgiIABQiGgBhghgg");
	this.shape_13.setTransform(57.85,32.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("ADzAAQAABkhIBHQhHBIhkAAQhjAAhHhIQhIhHAAhkQAAhjBIhHQBHhIBjAAQBkAABHBIQBIBHAABjg");
	this.shape_14.setTransform(154.1,327.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#996633").s().p("AirCrQhGhGAAhlQAAhkBGhGQBIhHBjgBQBkABBIBHQBGBGAABkQAABlhGBGQhIBHhkABQhjgBhIhHg");
	this.shape_15.setTransform(154.1,327.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("ADzAAQAABkhIBHQhGBIhlAAQhkAAhGhIQhIhHAAhkQAAhkBIhGQBGhIBkAAQBlAABGBIQBIBGAABkg");
	this.shape_16.setTransform(82.3,327.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#996633").s().p("AiqCsQhHhIgBhkQABhjBHhHQBGhIBkABQBlgBBGBIQBHBHABBjQgBBkhHBIQhGBHhlAAQhkAAhGhHg");
	this.shape_17.setTransform(82.3,327.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AE+AAQAACDhdBdQheBeiDAAQiCAAhdheQhehdAAiDQAAiDBehdQBdhdCCAAQCDAABeBdQBdBdAACDg");
	this.shape_18.setTransform(180.85,31.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#996633").s().p("AjgDhQhdhdABiEQgBiCBdhdQBeheCCAAQCDAABeBeQBcBdAACCQAACEhcBdQheBciDABQiCgBhehcg");
	this.shape_19.setTransform(180.85,31.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("ALQAAQAAEqjTDTQjTDTkqAAQkpAAjTjTQjTjTAAkqQAAkpDTjTQDTjTEpAAQEqAADTDTQDTDTAAEpg");
	this.shape_20.setTransform(120,98.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#996633").s().p("An8H9QjTjTAAkqQAAkpDTjTQDTjTEpAAQEqAADTDTQDTDTAAEpQAAEqjTDTQjTDTkqAAQkpAAjTjTg");
	this.shape_21.setTransform(120,98.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AIillQAACFhdBdQheBekdF/QkbGAjpg9Qjpg+EkokQEjokBdheQBdhdCFAAQCEAABeBdQBdBeAACEg");
	this.shape_22.setTransform(203.6407,221.4365,0.6691,0.6689,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#996633").s().p("Am6KdQjpg+EkokQEjokBdheQBdhdCFAAQCEAABeBdQBdBeAACEQAACFhdBdQheBekdF/Qj0FLjPAAQghAAgggIg");
	this.shape_23.setTransform(203.6407,221.4365,0.6691,0.6689,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("ALGAAQAAFhjPD5QjRD5kmAAQklAAjRj5QjQj5AAlhQAAlgDQj5QDRj6ElAAQEmAADRD6QDPD5AAFgg");
	this.shape_24.setTransform(119.05,239.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#996633").s().p("An1JaQjRj5ABlhQgBlfDRj6QDPj5EmgBQEnABDPD5QDRD6gBFfQABFhjRD5QjPD6kngBQkmABjPj6g");
	this.shape_25.setTransform(119.05,239.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bearbody, new cjs.Rectangle(-1,-1,242.2,353.5), null);


(lib.Necklace1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.NECKLACE();
	this.instance.setTransform(35.1,32.05,1,1,21.2121,0,0,28.7,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Necklace1, new cjs.Rectangle(-0.6,-0.6,71.5,65.19999999999999), null);


(lib.mustache1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mustache();
	this.instance.setTransform(49.2,13.7,0.6392,0.4946,0,0,0,77,27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mustache1, new cjs.Rectangle(-0.3,-0.2,99.1,27.8), null);


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
	this.eyes1 = new lib.Symbol1();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(38.1,12.7,1,1,0,0,0,38.1,12.7);

	this.timeline.addTween(cjs.Tween.get(this.eyes1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes1, new cjs.Rectangle(-1.5,-1.5,79.4,28.5), null);


(lib.pushbuttongreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 17
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.353)").s().p("AhhAnQgFgaAEgWQAEgYAgghQAggiAwAFQAxAEAiAhIgBABQgegXgoAAQguAAghAgQggAfgBArIAAADQAAAmAXAeIAAAAQghgggFgag");
	this.shape.setTransform(-0.6078,0.3222);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 16
	this.instance = new lib.buttonshine();
	this.instance.setTransform(-8.15,-7.8,0.2043,0.2043,0.0086);
	this.instance.alpha = 0.25;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#999999","#333333"],[0,0.89],-51.9,-47.9,37.4,30).s().p("AhnBkQgrgpAAg7QAAg6ArgqQArgpA8AAQA8AAArApQAsAqAAA6QAAA7gsApQgrAqg8AAQg8AAgrgqgABTBOQAighAAguQAAgvgigiQgjghgwAAQgwAAgiAhQgiAiAAAvQAAAuAiAhQAiAiAwAAQAwAAAjgig");
	this.shape_1.setTransform(0.8375,1.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#999999","#333333","#000000"],[0,0.482,1],-20.8,-20.9,21.7,21.6).s().p("AiCCHIgBgCQg3g2AAhLQAAhMA4g2QA4g2BOAAQBKAAA2AwIAHAGIAAAAQAlApAIA0IABACIACAcQAABMg4A2Qg0AyhIAEIgKAAQhJAAg2gugAhjh6QgrAqABA7QgBA6ArApQArAqA8AAQA9AAArgqQArgpAAg6QAAg7grgqQgrgpg9AAIAAAAQg8AAgrApg");
	this.shape_2.setTransform(0.425,3.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance}]},2).to({state:[]},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.buttonshine();
	this.instance_1.setTransform(4.5,6.15,0.1319,0.1319,-159.9189);
	this.instance_1.alpha = 0.25;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0,0.706],-4.2,-2.5,0,-4.2,-2.5,7.8).s().p("AgoA7QgZgRgFgdQgFgdARgYQARgZAdgFQAdgFAYARQAZARAFAeQAFAcgRAYQgRAZgdAFIgNABQgWAAgSgNg");
	this.shape_3.setTransform(-1.2881,-1.6263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{y:-1.6263}},{t:this.instance_1,p:{y:6.15}}]}).to({state:[{t:this.shape_3,p:{y:0.3737}},{t:this.instance_1,p:{y:8.15}}]},2).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.502)"],[0.847,1],-0.1,-0.7,0,-0.1,-0.7,10.8).s().p("AhPBOQgiggAAguIAAgCQABgsAhgfQAhggAuAAQAvAAAhAgQAhAfABAsIAAACQAAAugiAgQghAggvAAQguAAghggg");
	this.shape_4.setTransform(0.8375,-0.1625);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2).to({y:1.8375},0).to({_off:true},1).wait(1));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","#000000"],[0.447,1],-20.2,-20.5,19.3,18.9).s().p("AhPBOQgiggAAguIAAgCQABgsAhgfQAhggAuAAQAvAAAhAgQAhAfABAsIAAACQAAAugiAgQghAggvAAQguAAghggg");
	this.shape_5.setTransform(0.8375,-0.1625);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2).to({y:1.8375},0).to({_off:true},1).wait(1));

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AhPBOQgiggAAguQAAgtAiggQAhggAuAAQAvAAAhAgQAiAgAAAtQAAAugiAgQghAggvAAQguAAghggg");
	this.shape_6.setTransform(0.8375,-0.1625);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2).to({y:1.8375},0).to({_off:true},1).wait(1));

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.502)").s().p("AgKBfQgygGgighIgMgNIACgBQAiAhAxAAQAvAAAighQAjghAAguQAAgggQgaQAaAfABA0QABAzgiAfQgdAagoAAIgOgBg");
	this.shape_7.setTransform(3.0514,4.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(1,1,1,0)").ss(1,1,1).p("ABnhkQAsAqAAA6QAAA7gsApQgrAqg8AAQg8AAgrgqQgrgpAAg7QAAg6ArgqQArgpA8AAQA8AAArApgABQhPQAiAgAAAuQAAAtgiAgQghAggvABQgugBghggQgiggAAgtQAAguAiggQAhggAuAAQAvAAAhAggABThRQAiAhAAAvQAAAugiAiQgjAhgwAAQgwAAgighQgigiAAguQAAgvAighQAigiAwAAQAwAAAjAig");
	this.shape_8.setTransform(0.8375,1.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#999999","#333333"],[0,0.89],-51.9,-47.9,37.4,30).s().p("AhnBkQgrgpAAg7QAAg6ArgqQArgpA8AAQA8AAArApQAsAqAAA6QAAA7gsApQgrAqg8AAQg8AAgrgqgABTBOQAighAAguQAAgvgigiQgjghgwAAQgwAAgiAhQgiAiAAAvQAAAuAiAhQAiAiAwAAQAwAAAjgig");
	this.shape_9.setTransform(0.8375,1.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#999999","#333333","#000000"],[0,0.482,1],-20.8,-20.9,21.7,21.6).s().p("AiCCHIgBgCQg3g2AAhLQAAhMA4g2QA4g2BOAAQBKAAA2AwIAHAGIAAAAQAlApAIA0IABACIACAcQAABMg4A2Qg0AyhIAEIgKAAQhJAAg2gugAhjh6QgrAqABA7QgBA6ArApQArAqA8AAQA9AAArgqQArgpAAg6QAAg7grgqQgrgpg9AAIAAAAQg8AAgrApg");
	this.shape_10.setTransform(0.425,3.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[]},2).to({state:[]},1).wait(1));

	// Layer 18
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(0,0,0,0.4)","#000000"],[0,1],0,-8,0,0,-8,23.5).s().p("AhxBRIAAihIDjAAIAAChg");
	this.shape_11.setTransform(0.85,7.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},3).wait(1));

	// Layer 7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("AhxBRIAAihIDjAAIAAChg");
	this.shape_12.setTransform(0.85,7.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},3).wait(1));

	// Layer 8
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA2AAAnAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg1AAgngng");
	this.shape_13.setTransform(1.3,0.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(2).to({_off:true},1).wait(1));

	// Layer 6
	this.instance_2 = new lib.buttonshadow();
	this.instance_2.setTransform(2.25,6.3,0.1662,0.1662,180);
	this.instance_2.alpha = 0.5;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhnBkQgrgpAAg7QAAg6ArgqQArgpA8AAQA8AAArApQAsAqAAA6QAAA7gsApQgrAqg8AAQg8AAgrgqg");
	this.shape_14.setTransform(0.8375,1.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.shape_14}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-14.9,44.5,44.1);


(lib.bear = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bearbody();
	this.instance.setTransform(120.1,175.7,1,1,0,0,0,120.1,175.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bear, new cjs.Rectangle(-0.5,-0.5,241.2,352.5), null);


// stage content:
(lib.MPHFinalDhurtado = function(mode,startPosition,loop,reversed) {
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
			this.eyes1.x = 460;
			this.eyes1.y = 210;
			this.mouth1.x = 464;
			this.mouth1.y = 257;
			this.bow.x = 458;
			this.bow.y = 315;
			this.black.x = 458;
			this.black.y = 354;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.bow = new lib.BOW();
	this.bow.name = "bow";
	this.bow.setTransform(791.55,353.65,1,1,0,0,0,33.5,11.3);

	this.instance = new lib.mustache1();
	this.instance.setTransform(677.95,340.4,1,1,0,0,0,49.2,13.7);

	this.eyes1 = new lib.eyes1();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(736.7,168.65,1,1,0,0,0,38.1,12.7);

	this.instance_1 = new lib.keydown();
	this.instance_1.setTransform(816,450.15);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_2 = new lib.keyright();
	this.instance_2.setTransform(765.4,450.15);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.instance_3 = new lib.keyup();
	this.instance_3.setTransform(712.4,450.15);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.Face1_btn = new lib.keyleft();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(657.85,450.15);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 2);

	this.green = new lib.pushbuttongreen();
	this.green.name = "green";
	this.green.setTransform(146.9,553.1);
	new cjs.ButtonHelper(this.green, 0, 1, 2, false, new lib.pushbuttongreen(), 3);

	this.black = new lib.black();
	this.black.name = "black";
	this.black.setTransform(190.6,215.6,1,1,0,0,0,103.5,67.4);

	this.instance_4 = new lib.pink();
	this.instance_4.setTransform(190.6,181.4,1,1,0,0,0,103.5,67.4);

	this.instance_5 = new lib.teal();
	this.instance_5.setTransform(190.6,148.2,1,1,0,0,0,103.5,67.4);

	this.instance_6 = new lib.purple();
	this.instance_6.setTransform(190.6,114,1,1,0,0,0,103.5,67.4);

	this.instance_7 = new lib.Necklace1();
	this.instance_7.setTransform(790.05,294.7,1,1,0,0,0,35.1,31.9);

	this.instance_8 = new lib.eyes3();
	this.instance_8.setTransform(729.1,112.8,1,1,0,0,0,45.8,19.2);

	this.instance_9 = new lib.mouth3();
	this.instance_9.setTransform(840.45,224.8,1,1,0,0,0,32.5,24);

	this.instance_10 = new lib.mouth2();
	this.instance_10.setTransform(743.8,224.8,1,1,0,0,0,32.5,24);

	this.mouth1 = new lib.mouth1();
	this.mouth1.name = "mouth1";
	this.mouth1.setTransform(650.8,224.8,1,1,0,0,0,32.5,24);

	this.eyes2 = new lib.eyes2();
	this.eyes2.name = "eyes2";
	this.eyes2.setTransform(736.7,73.5,1,1,0,0,0,50.2,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes2},{t:this.mouth1},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.black},{t:this.green},{t:this.Face1_btn},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.eyes1},{t:this.instance},{t:this.bow}]}).wait(1));

	// Character
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhGBfIgEgmQAMAFAOAAQAJgBAGgEQAGgFAEgKIg7iMIA5AAIAcBdIAbhdIA1AAIg4CVQgKAagKAIQgNANgcABQgMgBgYgDg");
	this.shape.setTransform(505.9,84.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag9BNQgPgWAAgfQAAgiAQgSQASgTAZAAQAMAAAKAEQAKAFAIAIIAAhDIA2AAIAADAIgyAAIAAgUQgLANgIAEQgLAGgOAAQgdAAgPgVgAgQAAQgHAIAAASQAAARAHAIQAGAIAKAAQAJAAAIgIQAGgIABgSQgBgRgGgIQgIgHgJAAQgKAAgGAHg");
	this.shape_1.setTransform(488.2,79.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag9BNQgPgWAAgfQAAgiAQgSQASgTAZAAQAMAAAKAEQAKAFAIAIIAAhDIA2AAIAADAIgyAAIAAgUQgLANgIAEQgLAGgOAAQgdAAgPgVgAgQAAQgHAIAAASQAAARAHAIQAGAIAKAAQAJAAAIgIQAGgIABgSQgBgRgGgIQgIgHgJAAQgKAAgGAHg");
	this.shape_2.setTransform(470.2,79.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrBCQgQgJgKgQQgLgRAAgYQAAggAVgUQAVgUAlAAQAdAAARAJQASAJAJARQAJASAAAaIAAAHIhrAAQACAMAFAHQAJAJALAAQAIAAAHgFQAEgCAFgGIA1AEQgMAWgRAJQgRAJggAAQgbAAgQgHgAgTgeQgFAGgCANIA0AAQgBgQgHgHQgGgGgMAAQgMAAgHAKg");
	this.shape_3.setTransform(452.6,81.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdBhIAAiRIg9AAIAAgwIC1AAIAAAwIg9AAIAACRg");
	this.shape_4.setTransform(433.725,79.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAbIAAg1IA4AAIAAA1g");
	this.shape_5.setTransform(419.55,86);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag2BIIAAiMIAyAAIAAAYQAGgQAIgFQAIgGALABQAMAAAOAGIgQAnQgKgEgFAAQgLAAgGAIQgHANAAAgIAAAwg");
	this.shape_6.setTransform(410.225,81.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA8BhIAAiTIgmCTIgrAAIgmiTIAACTIgxAAIAAjBIBPAAIAdB1IAeh1IBPAAIAADBg");
	this.shape_7.setTransform(390.325,79.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag4A6QACgOAKgMQAKgNAbgRQAQgJAEgGQAFgFAAgFQAAgFgEgEQgFgDgHAAQgGAAgFADQgFAEgBAKIgmgDQACgNAGgIQAGgHALgEQALgEASAAQAUAAALAEQALADAHAIQAGAIAAAKQAAALgHAJQgIAJgTALIgPAJIgIAHIA6AAIAAAag");
	this.shape_8.setTransform(858.525,582.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag4A6QACgOAKgMQAKgNAbgRQAQgJAEgGQAFgFAAgFQAAgFgEgEQgFgDgHAAQgGAAgFADQgFAEgBAKIgmgDQACgNAGgIQAGgHALgEQALgEASAAQAUAAALAEQALADAHAIQAGAIAAAKQAAALgHAJQgIAJgTALIgPAJIgIAHIA6AAIAAAag");
	this.shape_9.setTransform(845.775,582.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbA3QgLgFgHgJQgEgGgEgLQgCgLAAgNQAAggAOgNQAOgNAcAAQANAAAKADQAJACAFAFQAFAFAEAFQADAFACAGQAEANAAAOQAAAegNAPQgMAOgfAAQgRAAgKgEgAgNgdQgFAIAAAVQAAAVAGAJQAEAHAIAAQAGAAAEgDQAEgDACgIQACgHAAgQQAAgVgEgIQgGgIgIAAQgJAAgEAIg");
	this.shape_10.setTransform(833.2,582.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag4A6QACgOAKgMQAKgNAbgRQAQgJAEgGQAFgFAAgFQAAgFgEgEQgFgDgHAAQgGAAgFADQgFAEgBAKIgmgDQACgNAGgIQAGgHALgEQALgEASAAQAUAAALAEQALADAHAIQAGAIAAAKQAAALgHAJQgIAJgTALIgPAJIgIAHIA6AAIAAAag");
	this.shape_11.setTransform(820.225,582.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgxA5IgDgXQAIADAKAAQAHAAAEgDQAEgDADgGIgqhSIApAAIATA3IATg3IAlAAIgnBXQgGAQgHAFQgJAHgVAAIgZgBg");
	this.shape_12.setTransform(801.85,585.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgvAkQgJgGAAgLQAAgJAHgGQAGgFASgDIAagFIAOgEQAAgGgCgCQgEgDgHAAQgIAAgFADQgEACgCAFIgkgDQACgIAEgEQAEgFAHgDQAFgCAKgCQAIgBALgBQARAAAKACQAKACAHAFQAFADADAHQACAGAAAGIAAAkIABAJQABADADAGIgjAAIgEgGIgBgEQgHAGgHACQgKADgNABQgSAAgJgIgAAAAHQgMACgDACQgDADAAADQAAAEADADQADACAHAAQAFgBAFgCQAGgCACgEQACgEAAgGIAAgFIgPAFg");
	this.shape_13.setTransform(789.55,584.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AArA5IAAhWIgbBWIgfAAIgbhWIAABWIgiAAIAAhxIA4AAIAUBEIAWhEIA3AAIAABxg");
	this.shape_14.setTransform(774.15,582.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJA3QgHgDgDgGQgDgGAAgOIAAgcIgOAAIAAgYIAOAAIAAgPIAlgQIAAAfIAVAAIAAAYIgVAAIAAAcQAAAFABACQACADAFAAIAMgCIACAWQgOACgMAAQgNAAgHgDg");
	this.shape_15.setTransform(716.125,582.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgmArIAAhTIAjAAIAAAOQAFgIAFgEQAFgDAIgBQAJABAKAEIgLAWIgLgCQgIAAgEAGQgFAGAAAUIAAAcg");
	this.shape_16.setTransform(708.5,584.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAeA5IgHgTIgvAAIgHATIgqAAIAzhxIAtAAIAzBxgAgPAOIAdAAIgOgpg");
	this.shape_17.setTransform(696,582.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag2A6IAAhxIAkAAIAAAMQAHgIAHgCQAHgEAKAAQAUAAALANQALAMAAATQAAAUgMALQgMALgSAAQgJAAgGgDQgHgCgGgFIAAAngAgLgdQgEAFAAAKQAAAKAFAEQAEAFAHAAQAHAAAEgFQAFgDAAgLQAAgKgFgFQgFgFgGAAQgHAAgFAFg");
	this.shape_18.setTransform(675.975,585.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAuArIAAgvQAAgGgDgCQgEgEgFgBQgHAAgEAEQgEAFAAAIIAAArIglAAIAAgtIgBgHQgBgEgDgCQgDgCgEAAQgGAAgFAEQgEAFAAAIIAAArIgmAAIAAhTIAjAAIAAANQAIgIAIgDQAHgDALgBQANABAFADQAIADAEAIQAJgJAHgCQAHgEALAAQAQAAAJAIQAJAJAAARIAAAzg");
	this.shape_19.setTransform(659.8,584.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgmAhQgSgNAAgUQAAgSAPgMQAPgNAaAAQAeAAAOAPQANALAAARQAAATgPAMQgQANgaAAQgXAAgPgLgAgMgPQgGAFAAAKQAAALAGAGQAEAFAIAAQAIAAAGgFQAEgGAAgLQAAgKgEgFQgGgGgIABQgHgBgFAGg");
	this.shape_20.setTransform(643.85,584.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfA2QgOgGgKgNQgLgOAAgVQAAgcASgPQASgPAhAAQAZAAAPAIQAPAJAHASIglAHIgEgHQgEgEgFgDQgFgCgGAAQgOAAgHAKQgGAHAAAPQAAASAHAIQAHAHALAAQAMAAAHgGQAGgGADgLIAlAKQgEANgIAJQgIAIgMAFQgMAEgSAAQgWAAgOgFg");
	this.shape_21.setTransform(630.125,582.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmAhQgSgNAAgUQAAgSAPgMQAQgNAZAAQAdAAAQAPQAMALAAARQAAATgQAMQgOANgbAAQgXAAgPgLgAgNgPQgFAFAAAKQAAALAFAGQAFAFAIAAQAIAAAFgFQAFgGABgLQgBgKgFgFQgFgGgIABQgHgBgGAGg");
	this.shape_22.setTransform(577.9,584.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgrAtQgLgNAAgSQAAgUAMgLQAMgLASAAQAJAAAHADQAHACAFAFIAAgnIAnAAIAABxIgkAAIAAgMQgHAIgGADQgIADgKAAQgUAAgLgNgAgLAAQgEAEAAALQAAAKAEAFQAFAFAGAAQAHAAAFgFQAFgFAAgKQAAgKgFgFQgFgEgHAAQgGAAgFAEg");
	this.shape_23.setTransform(564.825,582.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgvAkQgJgGAAgLQAAgJAGgGQAHgFASgDIAbgFIANgEQAAgGgDgCQgCgDgIAAQgIAAgFADQgDACgDAFIgkgDQACgIAEgEQAEgFAHgDQAFgCAJgCQAJgBALgBQARAAAJACQALACAHAFQAFADACAHQADAGABAGIAAAkIABAJQAAADADAGIgkAAIgCgGIgBgEQgIAGgIACQgJADgNABQgSAAgJgIgAAAAHQgMACgDACQgDADAAADQAAAEADADQADACAHAAQAFgBAFgCQAFgCADgEQACgEAAgGIAAgFIgPAFg");
	this.shape_24.setTransform(552.35,584.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJA3QgHgDgDgGQgDgGAAgOIAAgcIgOAAIAAgYIAOAAIAAgPIAlgQIAAAfIAVAAIAAAYIgVAAIAAAcQAAAFABACQACADAFAAIAMgCIACAWQgOACgMAAQgNAAgHgDg");
	this.shape_25.setTransform(541.675,582.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgmArIAAhTIAkAAIAAAOQADgIAGgEQAFgDAJgBQAIABAKAEIgMAWIgLgCQgHAAgEAGQgFAGAAAUIAAAcg");
	this.shape_26.setTransform(534.05,584.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgrAjQgIgJgBgQIAAg0IAnAAIAAAtQAAAIAEADQADADAGAAQAGAAAEgEQAEgEABgKIAAgpIAmAAIAABTIgkAAIAAgOQgIAIgIAEQgHADgMABQgPAAgKgIg");
	this.shape_27.setTransform(522.5,584.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPA5IAAgtQAAgIgEgDQgEgDgGAAQgGAAgEAEQgFAEAAALIAAAoIgmAAIAAhxIAmAAIAAAqQAJgHAGgDQAHgDALAAQAPAAAKAIQAIAIABAPIAAA1g");
	this.shape_28.setTransform(509.8,582.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag+A5IAAhxIA+AAQASAAAMAEQAMAEAHAIQAHAIAEAKQADALAAALQAAASgFAKQgFAKgJAHQgJAHgKACQgNADgMAAgAgUAfIALAAQAMAAAFgCQAHgDACgGQAEgGAAgOQgBgRgGgHQgIgGgPAAIgLAAg");
	this.shape_29.setTransform(496.25,582.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgxA5IgDgXQAIADAKAAQAHAAAEgDQAEgDADgGIgphSIAnAAIAUA3IATg3IAmAAIgoBXQgHAQgGAFQgKAHgTAAIgagBg");
	this.shape_30.setTransform(476.35,585.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag/A5IAAhxIBPAAQAUAAAKAIQALAIAAAMQAAAKgHAIQgGAEgKADQAPADAIAHQAGAHAAALQAAAJgEAHQgGAHgIAEQgGADgLABIgTABgAgTAhIAUAAQALAAAEgEQAFgDAAgFQAAgFgFgDQgEgEgLAAIgUAAgAgTgLIASAAQAIAAAFgDQADgDABgFQgBgFgDgDQgFgDgIAAIgSAAg");
	this.shape_31.setTransform(463.3,582.575);

	this.instance_11 = new lib.bear();
	this.instance_11.setTransform(460.25,307.7,1,1,0,0,0,120.1,175.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_32.setTransform(480,320);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
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