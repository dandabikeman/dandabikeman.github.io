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


(lib.whitesuit = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACPI4IqWrxQDJAZD6h+QH9kAFogdQFngdgkEuQgkEtlAEcQkUD0ldAlQg5AGg6ABQhLAAhJgHQlHgjkCjNQk8j7hXmnQgmi6AmghIPcRt");
	this.shape.setTransform(0.0138,-0.0005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AFqI3IvbxtQAxgqCtDQQCdC8DSAaIKWLxQg5AGg6ABIgJAAQhIAAhEgHg");
	this.shape_1.setTransform(-48.275,0.066);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoHi2QDJAZD6h+QH9kAFogdQFngdgkEuQgkEtlAEcQkUD0ldAlgArBFLQk8j7hXmnQgmi6AmghIPcRtQlHgjkCjNg");
	this.shape_2.setTransform(0.0138,-0.327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whitesuit, new cjs.Rectangle(-113.7,-58.4,227.5,116.9), null);


(lib.transparentlenses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AADHFIgBABQhhCjiKAAQiLAAhiijQhIh5gTifQgGg3AAg8QAAjmBhikQBiijCLAAQB0AABXBzQANgfAPgdQBhi3CLAAQCKAABiC3QBiC5AAECQAAAugDAsQgODKhRCXQhiC4iKAAQiHAAhgiug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.transparentlenses, new cjs.Rectangle(-56.8,-62.7,113.6,125.4), null);


(lib.suit3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AiwkEIB/DBIhxBlABSjdIiDCaIDiC7Ii5CN");
	this.shape.setTransform(-48,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACeihQA6AIBAgGQA9gFBBgSIggFtIgfFuIiajiIiajiIm4qF");
	this.shape_1.setTransform(-67.75,-2.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AkPjOQBhgaBqg2QH9kAFogdQFngdgkEuQgkEtlAEcQkUD0ldAlQg5AGg6ABQhLAAhJgHQhvgMhnggQjIg9iriHQk8j7hXmnQgmi6Amgh");
	this.shape_2.setTransform(0.0138,-0.0005);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiiAjIBxhmIh+jAQBBAbBHAJQA6AHA/gFIiDCaIDiC7Ii5CNg");
	this.shape_3.setTransform(-48,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ah4I4QhvgMhnggIAfltIAgltQBhgaBqg2QH9kAFogdQFngdgkEuQgkEtlAEcQkUD0ldAlQg5AGg6ABIgJAAQhHAAhEgHgArBFIQk8j7hXmnQgmi6AmghQAKgJAQACIG4KFICaDiICaDhQjIg9iriHg");
	this.shape_4.setTransform(0.0138,-0.0005);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AC9FDIC5iMIjji8ICFiaQA9gFBBgSIggFtIgfFtgAmUokQA7AICJClQBoB8B9A2IB+DAIhwBmg");
	this.shape_5.setTransform(-67.75,-2.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.suit3, new cjs.Rectangle(-113.7,-58.4,227.5,116.9), null);


(lib.suit2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABLg/QAAAigZAYQgYAXghAAQgiAAgYgXQgYgYAAgiQAAgiAYgZQAYgYAiAAQAhAAAYAYQAZAZAAAigAn9i0QDGAUDzh7QH9kAFogdQFngdgkEuQgPCAhCB8Qg1BjhWBjQg8BEhMBDQkADik+AxQgZAEgaACAASF6ICwC7AASF6IN2jfAwDhWQg0h3gdiKQgmi6AmghAoHi2QAFABAFABIFgF0ICvC6Ah4I7QgLgBgLgCQk5gnj6jGQhghMhLhdIIbCxIDDDlAoVBtIDEDmAtsCiQhbhwg8iIIHuDDAxTozII+KgAidDAISwjr");
	this.shape.setTransform(0.0138,-0.327);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("ArBFNQhghNhLhcIIbCwIDDDmQk5gnj6jGgAASF8IN2jgQg8BEhMBEQkADik+AwgAn9izQDGAVDzh7QH9kBFogcQFngdgkEuQgPB/hCB9IywDqgAhBh4QgYAYAAAiQAAAiAYAYQAYAYAiAAQAhAAAYgYQAZgYAAgiQAAgigZgYQgYgYghAAQgiAAgYAYgAwDhUQg0h4gdiJQgmi6AmghIABgBII+Kgg");
	this.shape_1.setTransform(0.0138,-0.477);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhYI3IgVgDIjEjlIjEjmIDEDmIobixQhbhwg8iIIHuDDIo9qgQAxgnCsDOQCdC8DRAaIAKACIFhF0ICvC6Iivi6ISvjrQg1BjhWBjIt1DfICwC7Ig0AGQg4AGg6ABIgKAAQhGAAhFgHgAghgJQgYgYAAgiQAAgiAYgZQAZgYAhAAQAiAAAYAYQAYAZAAAiQAAAigYAYQgYAXgiAAQghAAgZgXg");
	this.shape_2.setTransform(-3.2125,0.0627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.suit2, new cjs.Rectangle(-113.7,-58.4,227.5,116.19999999999999), null);


(lib.shoes1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFxgxQBlkOiqiWIjdAUQgHC+hwDwIk2D5Ih4CCQhJBoHFAGIIljIQBIkeiighgAleDmQEHh9DiClIDmk/");
	this.shape.setTransform(0.0451,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AnWCWIB4iCQEHh8DiCkIDmk/QCiAihIEdIolDIQnFgFBJhpg");
	this.shape_1.setTransform(0.0451,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Al6FKIE2j6QBwjvAHi+IDdgUQCqCWhlENIjmFAQjiilkHB9g");
	this.shape_2.setTransform(2.8286,-9.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoes1, new cjs.Rectangle(-49.1,-47.9,98.30000000000001,95.9), null);


(lib.shoe2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFxgxQBlkOiqiWIjdAUQgHC+hwDwIk2D5QEHh9DiClgAleDmIh4CCQhJBoHFAGIIljIQBIkeiigh");
	this.shape.setTransform(0.0451,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AnWCWIB4iCQEHh8DiCkIDmk/QCiAihIEdIolDIQnFgFBJhpg");
	this.shape_1.setTransform(0.0451,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Al6FKIE2j6QBwjvAHi+IDdgUQCqCWhlENIjmFAQjiilkHB9g");
	this.shape_2.setTransform(2.8286,-9.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoe2, new cjs.Rectangle(-49.1,-47.9,98.30000000000001,95.9), null);


(lib.sandals2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADcgdQA8ihhlhZIiEAMQgEBxhCCPIi5CUIhHBNQgsA+EOAEIBDg8IBFg7ADcgdIiJC+Ag1EYIFHh3QAqiqhggUAkXDWIElAGAjQCJQCdhKCGBi");
	this.shape.setTransform(-0.0086,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B29B6B").s().p("AALBfIBFg7IhFA7IkmgGIBIhNQCdhJCGBhICJi+QBgAUgqCqIlIB3g");
	this.shape_1.setTransform(0.2997,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AkBDWIElAGIhDA8QkOgEAsg+gAi6CJIC5iUQBCiPAEhxICEgMQBlBZg8ChIiJC+QiGhiidBKg");
	this.shape_2.setTransform(-2.2286,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sandals2, new cjs.Rectangle(-29.6,-28.9,59.3,57.9), null);


(lib.sandals1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADcgdQA8ihhlhZIiEAMQgEBxhCCPIi5CUIhHBNQgsA+EOAEIBDg8IBFg7ADcgdIiJC+Ag1EYIFHh3QAqiqhggUAkXDWIElAGAjQCJQCdhKCGBi");
	this.shape.setTransform(-0.0086,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B29B6B").s().p("AALBfIBFg7IhFA7IkmgGIBIhNQCdhJCGBhICJi+QBgAUgqCqIlIB3g");
	this.shape_1.setTransform(0.2997,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AkBDWIElAGIhDA8QkOgEAsg+gAi6CJIC5iUQBCiPAEhxICEgMQBlBZg8ChIiJC+QiGhiidBKg");
	this.shape_2.setTransform(-2.2286,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sandals1, new cjs.Rectangle(-29.6,-28.9,59.3,57.9), null);


(lib.rarmsuit3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHaoHQgMgdgSgZQgEgEgDgFQgIgKgJgJQgQgSgGAlQAAAEgBAFQgFAoAFBZQAKDAASAsQAJAVAOATQAiAxAvAHQAIABAcgIQAdgJAehMQAKgXAGgXQAKghACgfIAAgsQgDgqgWgnQgHgMgIgLQgpg6gqADQgbACgcgEIgQCYQgbA6gGBlQBojTB7A9AJzm3Qh5gkgwBsAKAj6QgNhfjKCJQlVDiA9EEQlLm/mNE4QiMCHCSDOQFeD2Haj2QD9jkAdlw");
	this.shape.setTransform(0.0044,0.0055);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AoDEdQiTjOCMiGQGNk5FLG/Qg8kDFVjjQAJAVANATQAjAxAvAHQgeFwj9DkQjtB7jNAAQjOAAivh7g");
	this.shape_1.setTransform(-6.1456,19.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AAGD3QgugHgjgxQgNgTgJgVIABgBIACgBIACgCIAGgEIABAAIAHgFIAAAAQBhhAAxgEIAGAAIAAAAQAlAAAFAnQgGAXgJAXQgfBMgcAJQgZAHgJAAIgCAAgAh+hUQgEhZAFgoIABgJQAFglARASIAQATIAHAJQASAZANAdQAcAEAZgCQArgDAoA6IAPAXQAWAnAEApQgcgMgbAAIAAAAIAAAAQhYAAhNCWIgBABIgBADIgCADIgBACIAAAAIgBADQAGhlAag5IABgBIABgDIABgBIAAAAQAkhMBJAAIAAAAIAAAAQAaAAAeAJQgegJgaAAIAAAAIAAAAQhJAAgkBMIAAAAIgBABIgBADIgBABIARiYIgRCYQgaA5gGBlQgSgsgLi/gAhhCXIAAAAgAhhCXIABgDIAAAAIABgCIACgDIABgDIABgBQBNiWBYAAIAAAAIAAAAQAbAAAcAMIAAAsQgDAfgKAhQgFgnglAAIAAAAIgGAAQgxAEhhBAIAAAAIgHAFIgBAAIgGAEIgCACIgCABIgBABIAAAAgACBABIAAAAgAhBgHg");
	this.shape_2.setTransform(52.3684,-35.9893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rarmsuit3, new cjs.Rectangle(-66.2,-61.7,132.5,123.5), null);


(lib.rarmsuit1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHaoHQgMgdgSgZQgEgEgDgFQgIgKgJgJQgQgSgGAlQAAAEgBAFQgFAoAFBZQAKDAASAsQAJAVAOATQAiAxAvAHQAIABAcgIQAdgJAehMQAKgXAGgXQgNhfjKCJQBojTB7A9AJzm3QgHgMgIgLQgpg6gqADQgbACgcgEIgQCYQgbA6gGBlQlVDiA9EEQlLm/mNE4QiMCHCSDOQFeD2Haj2QD9jkAdlwAKAj6QAKghACgfIAAgsQgDgqgWgnQh5gkgwBs");
	this.shape.setTransform(0.0044,0.0055);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoDEdQiTjOCMiGQGNk5FLG/Qg8kDFVjjQAJAVANATQAjAxAvAHQgeFwj9DkQjtB7jNAAQjOAAivh7g");
	this.shape_1.setTransform(-6.1456,19.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AAGD3QgugHgjgxQgNgTgJgVIABgBIACgBIACgCIAGgEIABAAIAHgFIAAAAQBhhAAxgEIAGAAIAAAAQAlAAAFAnQgGAXgJAXQgfBMgcAJQgZAHgJAAIgCAAgAh+hUQgEhZAFgoIABgJQAFglARASIAQATIAHAJQASAZANAdQAcAEAZgCQArgDAoA6IAPAXQgegJgaAAIAAAAIAAAAQhJAAgkBMIAAAAIgBABIgBADIgBABIARiYIgRCYQgaA5gGBlQgSgsgLi/gAhhCXIAAAAgAhhCXIABgDIAAAAIABgCIACgDIABgDIABgBQBNiWBYAAIAAAAIAAAAQAbAAAcAMIAAAsQgDAfgKAhQgFgnglAAIAAAAIgGAAQgxAEhhBAIAAAAIgHAFIgBAAIgGAEIgCACIgCABIgBABIAAAAgAhBgHIABgBIABgDIABgBIAAAAQAkhMBJAAIAAAAIAAAAQAaAAAeAJQAWAnAEApQgcgMgbAAIAAAAIAAAAQhYAAhNCWIgBABIgBADIgCADIgBACIAAAAIgBADQAGhlAag5gACBABIAAAAgAhBgHg");
	this.shape_2.setTransform(52.3684,-35.9893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rarmsuit1, new cjs.Rectangle(-66.2,-61.7,132.5,123.5), null);


(lib.rarm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJzm3QgHgMgIgLQgpg6gqADQgbACgcgEQgMgdgSgZQgEgEgDgFQgIgKgJgJQgQgSgGAlQAAAEgBAFQgFAoAFBZQAKDAASAsQAJAVAOATQAiAxAvAHQAIABAcgIQAdgJAehMQAKgXAGgXQAKghACgfIAAgsQgDgqgWgnQh5gkgwBsQgbA6gGBlQBojTB7A9AKAj6QgNhfjKCJQlVDiA9EEQlLm/mNE4QiMCHCSDOQFeD2Haj2QD9jkAdlwAHaoHIgQCY");
	this.shape.setTransform(13.0062,0.0055);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("ApBHkQiSjOCMiHQGNk4FLG/Qg9kEFVjiQAJAVAOATQAiAxAvAHQgdFwj9DkQjuB7jNAAQjOAAivh7gAIRhwQgvgHgigxQgOgTgJgVIACgBIABgBIACgBIAHgFIABAAIAGgFIAAAAQBgg+AxgFIAAAAIACgBIAGAAIABAAQAlAAAFAnQgGAXgKAXQgeBMgdAJQgZAIgJAAIgCgBgAIRhwIAAAAgAGpjQIAAAAgAGNm8QgFhZAFgoIABgJQAGglAQASIARATIAHAJQASAZAMAdQAcAEAbgCQAqgDApA6IAPAXQgegJgaAAIAAAAIgBAAQhKABgkBMIgCAEIAQiYIgQCYQgbA6gGBlQgSgsgKjAgAGpjQIACgDIABgBIAEgKIABgCIABgBQBMiSBXAAIABAAIAAAAQAbAAAbANIAAAsQgCAfgKAhQgFgnglAAIgBAAIgGAAIgCABIAAAAQgxAFhgA+IAAAAIgGAFIgBAAIgHAFIgCABIgBABIgCABIAAAAgAHKlvIACgEQAkhMBKgBIABAAIAAAAQAaAAAeAJQAWAnADAqQgbgNgbAAIAAAAIgBAAQhXAAhMCSIgBABIgBACIgEAKIgBABIgCADQAGhlAbg6gAHKlvg");
	this.shape_1.setTransform(13.0062,0.0055);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rarm, new cjs.Rectangle(-53.2,-61.7,132.5,123.5), null);


(lib.Orange = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aiu9TQAxAgAfgqIAFgbQg+hBgXBmgAlawjICjrtQADgnAGgcAFI8QQAhhPBIBFIgPAWAhjw4IGnrOQABgGADgEQAjA2A3gqACi2yQCOgoB6gUIDPCBAhBw4IC7kWQASBRCxA8QDFBDEWAAQEWAAEeErQEdErg+l4Qg/l5i2i6Qi3i6k+ggQk/ghiBBvQiBBvgqAZIDMktAL933QAfAFAdAIQAFABAHACICHhDAKG4BQBAABA3AJIB6CjAKG4BICDCUAH935QBJgIBAAAIDihMAH935ICuhFAGq3uQAqgHApgEARC2EICSAAARC2EQBBAiA3AoIBMCtAOT3OQBEAXA7AbIBFCxAQS2cQAZALAXANAOT3OIC6AAANF3nQAoAMAmANAhBw4QERACDvBYQBsAnBlA5QAbAQAcARQBhA9BbBPQAtAnAsAsQAYAYAYAaQAeAgAbAiIAAAAQDEEkApBrQBiD5ABC3QABIfjLFTQgJAPgJAPQgDAEgCAEQgHAKgGALQhNBzhlBpQgNANgMANQk4E4mRBcQiqAni4AAQmzAAlajWQiYheiHiHQgHgHgGgHQgHgGgFgGQhyh2hSiDQgcgrgXgtQhTiagqiqQgti1AAjHQAAkaAth6QCMl+DFjbIABABQD/jrBRgzQB+hPCKgyQB9guCHgXAj7wwQAxgFAzgCQAagBAaAAAlCq+IAAgBIBHlxICdstAlCq+IEBl6AlCq/IDfl5An2lXIADgNIAmiwIAmivIBNlgAq0mOQACAEACAEAq0mOQBYgWCPhwAkZkmQg9BqiXgEQjbgGAYjAQAfA5CegXQAwBLA6g0QBIApAogCgAq0mOIhPB9AlloGIBoDXQgEADgFACQgIAEgLAAAlloGIAji4QFhAcgaD3AmJlNIAki5Ar5oPQB0i9DeAJAuth2QINDPH6kBAS606QC8CKA+DS");
	this.shape.setTransform(158.9984,108.1444);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F68E51").s().p("AxRHHQCLl/DGjaIAAAAQD/jqBSgzQB+hPCJgzQB9guCGgWIhMFfIgCAAIgQAAIAAAAIAAAAQjOAAhvCwIgBACIgCADIACgDIABgCQBviwDOAAIAAAAIAAAAIAQAAIACAAIgmCwQiPBvhXAWIADAIQgXDADbAGQCWAEA8hqQALgBAJgEIAIgEIhojWIAki5IEAl6QETACDvBYQBsAoBkA5QBbFZpbJFQofC+miAAQmrAAkrjFgAglGTQEdAAEYiPQkYCPkdAAIAAAAIAAAAQjhAAjkhYIgFgCIgHgDIAHADIAFACQDkBYDhAAIAAAAIAAAAgAlNCcIBQh9gAG8ABQABgQAAgPQABjYlKgbQFKAbgBDYQAAAPgBAQgAAPkWIAAAAg");
	this.shape_1.setTransform(115.1335,65.1798);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F68645").s().p("A0RMmQgsi1AAjHQAAkZAth6QJRGGRGl/QJbpFhblZIA3AhQBiA9BaBOQAuAnArAsIAwAyQAeAhAcAhIAAAAQAiEEq7KtQg7A6g/AzQnKFwqfAAQlOAAmEhbg");
	this.shape_2.setTransform(134.2322,108.397);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF8F43").s().p("AgnizQAwgFAygCIA0gCIjdF5g");
	this.shape_3.setTransform(137.8625,18.8875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6F16").s().p("Ax4JZQPVgXIdm3QIem2DhoDQABIfjLFTIgSAdIgFAIIgNAVQhNBzhlBpIgZAaQk3E4mRBcQiqAni5AAQmyAAlbjWg");
	this.shape_4.setTransform(187.3756,220.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF8008").s().p("AxBN/IgNgNIgMgNQhxh2hTiDQgbgrgYgtQhSiagriqQSOESKsonQA/gyA7g6QK8qugjkEQDEElAqBqQBhD6ABC3QjhICoeG3QoeG3vUAXQiYheiHiHg");
	this.shape_5.setTransform(153.1625,168.2125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666600").s().p("AH1FvQkdkrkWAAQkWAAjFhDQixg7gShSQgCgJAAgKQAAgrAqgmQCPgoB5gUQh5AUiPAoQAVgTAfgRQAqgZCBhvQCBhvE/AgQE+AhC2C6QC2C6A/F3QAjDShJAAQg7AAh+iEgAJdDjQg+jSi8iJQg3gohBgiICSAAIiSAAIgwgXIAwAXQBBAiA3AoIBMCtIhMitQC8CJA+DSgAC7jZIBFCwIhFiwQg7gchDgXIC5AAIi5AAQBDAXA7AcgAAgiRIh5ikQAfAFAdAIIAMADQAnAMAnANQgngNgngMICGhDIiGBDIgMgDQgdgIgfgFQg3gJhAAAIDhhNIjhBNIgEAAIgEAAIAAAAIgBAAQg5AAhBAGIgGABICuhFIiuBFQgoAFgrAGIDPCCIjPiCQArgGAogFIAGgBQBBgGA5AAIABAAIAAAAIAEAAIAEAAICDCUIiDiUQBAAAA3AJgAlZk3gAjQk+IAAAAg");
	this.shape_6.setTransform(244.4734,-13.7113);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AnSMAIAnivIAmiwIBMlfICjrsQAEgoAGgbIAAAAIADACQATAMARAAIAAAAIAAAAQAXAAARgYIAAAAIAAAAQgRAYgXAAIAAAAIAAAAQgRAAgTgMIgDgCIAAAAQAXhnA+BBIgGAcIicMsIhHFxIAAAAIAAAAIDfl6IGmrMIAEgLIABABIAAABIABABQATAcAZAAIABAAIAAAAQAUAAAYgSQgYASgUAAIAAAAIgBAAQgZAAgTgcIgBgBIAAgBIgBgBQAihOBIBFIgPAWIjMEtQggARgVATQgqAmAAArQAAAKACAJIi7EVIkAF6IgkC5IgjC4QgYAWgWAAQggAAgdgtg");
	this.shape_7.setTransform(155.625,-4.4198);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTCqQjbgGAXi/IABABQAXAmBUAAIAAAAIABAAQAhAAArgGIAAAAIAEAAIgDANIADgNQAwBLA6g0IACABIADABIABABIAEACIACABIACACIACABQA5AeAiAAIABAAIAAAAIADAAIABAAIgBAAIgDAAIAAAAIgBAAQgiAAg5geIgCgBIgCgCIgCgBIgEgCIgBgBIgDgBIgCgBIAji4IBoDWIgIAFQgJADgKABQg7BmiOAAIgKAAgAhrAMQhUAAgXgmIgBgBIgDgIQBYgWCOhwIgmCvIgEAAIAAAAQgrAGghAAIgBAAIAAAAg");
	this.shape_8.setTransform(111.625,71.8568);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("ARMAgIAAAAQA1BAAtBDIADAFQgCAAhjiIgAywgUIAvgxIANgOQAsgsAtgnQAPgNijCfg");
	this.shape_9.setTransform(158.2897,52.5879);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Orange, new cjs.Rectangle(-1,-86.7,320,389.7), null);


(lib.nose1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AgUAZQgCgbAhgOQBZgjAsBPAiPAPQASg8AnAd");
	this.shape.setTransform(-2.025,14.4198);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AglCrQAXAKAWAFQA8AOA7gaQAmgRAmghQgIh6iJAGAhXADQgVAugWA5QAOANANAKQAhAbAhAPAhXADQhbACgYB5QAUAWAWANQA6AlBBgbABti7QhhgchjDa");
	this.shape_1.setTransform(-0.325,-0.2202);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAZAgQgXgFgWgLQgCgaAhgPQBZgiAsBOQgnARgnAAQgVAAgUgEgAgHAXQgIgDgFgEQAWALAXAFQgTgCgNgHgAiPAHQASg8AnAdQAhAZAhAPQgcAMgaAAQgkAAghgVgAgUAQIAAAAg");
	this.shape_2.setTransform(-2.025,15.2593);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9966").s().p("AgFCKQgiAOACAbQghgPghgaIgbgXQAWg6AVguQgVAugWA6IAbAXQgngdgSA9QgWgOgUgWQAYh4BbgDQBjjZBhAcIgzDDQCJgGAIB6QgmAhgmARQgshQhYAjg");
	this.shape_3.setTransform(-0.325,-1.0597);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose1, new cjs.Rectangle(-21.6,-20.3,42.6,40.2), null);


(lib.noise2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AARAsQgigqABgu");
	this.shape.setTransform(-12.666,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhCgKQACgGACgHQAXg/BRhGIBFDeAhFgKQACAAABAAQCSAFAfBHAhFgKQgOACgKALQgOAQgGAjQgFAoAFA/QAigsAqgVQBCghBXAZQgCgKgDgIAhFgKQgBAHAAAGQACgGACgH");
	this.shape_1.setTransform(-7.2458,0.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AhYAjIAEgNQAXg+BShGIBEDdQgfhIiSgEg");
	this.shape_2.setTransform(-5.05,-3.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhygSQAFgjAOgQQALgMAOgCIgBAOIAEgOQCSAFAeBHQAEAIACAKQhXgZhCAhQghgnAAgtIAAgEIAAAEQAAAtAhAnQgqAVgiAsg");
	this.shape_3.setTransform(-7.1,8.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.noise2, new cjs.Rectangle(-19.9,-15.9,25.299999999999997,33.4), null);


(lib.mustache2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIyEdQAfJXihoCQihoAimiRQgbgJgcgJQhYgbhgAVQhzAYiVH9QiVH9gRlgQgRlhBokUQBokVBdgnQBBgcBJgMIB2CrICIihQBGAUA/ArQAnAaB7BhQB7BhAgJWg");
	this.shape.setTransform(0.0133,0.0259);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("AGwFyQihoAimiRIg3gSQhYgbhgAVQhzAYiVH9QiVH9gRlgQgRlhBokUQBokVBdgnQBBgcBJgMIB2CrICIihQBGAUA/ArQAnAaB7BhQB7BhAgJWQARFCgnAAQghAAhLjtg");
	this.shape_1.setTransform(0.0133,0.0259);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mustache2, new cjs.Rectangle(-57.7,-61.7,115.4,123.5), null);


(lib.mouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkRgvQAJgvBRgWQBUgYBxASQByASBNAwQBMAwgGAzQgBAGgCAFQgNArhLAUQhVAYhxgSQhygRhMgxQhMgwAGgzQAAgCABgDQCygOFvBz");
	this.shape.setTransform(0.0001,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("AgOB7QhygShLgwQhNgwAGgyIABgGIAEAAIAAAAIAmgBIAAAAIAEAAQCpABEtBcIADABIACAAIAFACIAJADIALADIgLgDIgJgDIgFgCIgCAAIgDgBQkthcipgBIgEAAIAAAAIgmABIAAAAIgEAAQAJgvBRgWQBVgYBwASQBzASBMAwQBMAwgGAyQAAAHgCAFQgNAqhMAVQgwANg6AAQgsAAgwgHg");
	this.shape_1.setTransform(0.0001,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(-28.5,-14,57.1,28.1), null);


(lib.larmsuit1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmNoGQAPgiAWgdQAIgKAJgJQAQgSAGAlQAGAmgFBjQgKDAgSAsQgJAWgOASQgiAygvAHQgIABgcgJQgdgIgehMQgKgYgGgWQgKgigCgeIAAgsQADgqAWgnQAHgMAIgMQApg5AqADQAbACAcgEIAQCXQAbA7AGBkQFVDig9EEQDtlAEQBFQDwEji6D7QknBslyjAQj9jkgdlwAomm2QB5glAwBsAozj5QANhgDKCJQhojTh7A+");
	this.shape.setTransform(0.0308,-0.0005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnEdQj9jkgelwQAvgHAjgxQANgTAJgVQFVDjg8EDQDtlAEPBGQDxEhi6D7QhrAnh0AAQjOAAjsh7g");
	this.shape_1.setTransform(6.1808,19.919);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AgpDwQgcgJgfhMQgJgXgGgXQAFgnAlAAIAAAAIAGAAQAxAEBhBAIAAAAIAHAFIABAAIAGAEIACACIACABIABABQgJAVgNATQgjAxguAHIgCAAQgJAAgZgHgABiCXIAAAAgABhCUIAAAAIgBgCIgCgDIgBgDIgBgBQhNiWhYAAIAAAAIAAAAQgbAAgcAMQAEgpAWgnIAPgXQAog6ArADQAZACAcgEIARCYIgBgBIgBgDIgBgBIAAAAQgkhMhJAAIAAAAIAAAAQgaAAgeAJQAegJAaAAIAAAAIAAAAQBJAAAkBMIAAAAIABABIABADIABABIgRiYQAPgiAXgdIAQgTQARgSAFAlQAHAngFBjQgLC/gSAsQgGhlgag5QAaA5AGBlIgBgDgABhCWIgCgBIgCgCIgGgEIgBAAIgHgFIAAAAQhhhAgxgEIgGAAIAAAAQglAAgFAnQgKghgDgfIAAgsQAcgMAbAAIAAAAIAAAAQBYAABNCWIABABIABADIACADIABACIAAAAIABADIgBgBg");
	this.shape_2.setTransform(-44.7163,-35.9893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.larmsuit1, new cjs.Rectangle(-58.6,-61.7,117.30000000000001,123.5), null);


(lib.larmsuit3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmNoGQAPgiAWgdQAIgKAJgJQAQgSAGAlQAGAmgFBjQgKDAgSAsQhojTh7A+QADgqAWgnQAHgMAIgMQApg5AqADQAbACAcgEIAQCXQAbA7AGBkQgJAWgOASQgiAygvAHQgIABgcgJQgdgIgehMQgKgYgGgWQgKgigCgeIAAgsAozj5QANhgDKCJQFVDig9EEQDtlAEQBFQDwEji6D7QknBslyjAQj9jkgdlwAomm2QB5glAwBs");
	this.shape.setTransform(0.0308,-0.0005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("AgpDwQgcgJgfhMQgJgXgGgXQAFgnAlAAIAAAAIAGAAQAxAEBhBAIAAAAIAHAFIABAAIAGAEIACACIACABIABABQgJAVgNATQgjAxguAHIgCAAQgJAAgZgHgABiCXIAAAAgABiCXQgGhlgag5QAaA5AGBlIgBgDIAAAAIgBgCIgCgDIgBgDIgBgBQhNiWhYAAIAAAAIAAAAQgbAAgcAMQAEgpAWgnQAegJAaAAIAAAAIAAAAQBJAAAkBMIAAAAIABABIABADIABABIgRiYQAPgiAXgdIAQgTQARgSAFAlQAHAngFBjQgLC/gSAsIAAAAgABiCXIAAAAgABhCWIgCgBIgCgCIgGgEIgBAAIgHgFIAAAAQhhhAgxgEIgGAAIAAAAQglAAgFAnQgKghgDgfIAAgsQAcgMAbAAIAAAAIAAAAQBYAABNCWIABABIABADIACADIABACIAAAAIABADIgBgBgABCgHIAAAAgABBgIIgBgDIgBgBIAAAAQgkhMhJAAIAAAAIAAAAQgaAAgeAJIAPgXQAog6ArADQAZACAcgEIARCYIgBgBg");
	this.shape_1.setTransform(-44.7163,-35.9893);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjnEdQj9jkgelwQAvgHAjgxQANgTAJgVQFVDjg8EDQDtlAEPBGQDxEhi6D7QhrAnh0AAQjOAAjsh7g");
	this.shape_2.setTransform(6.1808,19.919);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.larmsuit3, new cjs.Rectangle(-58.6,-61.7,117.30000000000001,123.5), null);


(lib.larm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmNoGQAPgiAWgdQAIgKAJgJQAQgSAGAlQAGAmgFBjQgKDAgSAsQgJAWgOASQgiAygvAHQgIABgcgJQgdgIgehMQgKgYgGgWQgKgigCgeIAAgsQADgqAWgnQAHgMAIgMQApg5AqADQAbACAcgEIAQCXQAbA7AGBkQhojTh7A+Aomm2QB5glAwBsAozj5QANhgDKCJQFVDig9EEQDtlAEQBFQDwEji6D7QknBslyjAQj9jkgdlw");
	this.shape.setTransform(0.0308,-0.0005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("AiqHlQj9jkgdlwQAvgHAigyQAOgSAJgWQFVDig9EEQDtlAEQBFQDwEji6D7QhqAmh0AAQjOAAjth6gAnoh3QgdgIgehMQgKgYgGgWQAGgoAlAAIAAAAIAGABQAxADBiBAIAAAAIAGAFIABAAIAHAFIACABIABABIACABQgJAWgOASQgiAygvAHIgCAAQgJAAgZgIgAlejRIgBgBIgCgBIgHgFIgBAAIgGgFIAAAAQhihAgxgDIgGgBIAAAAQglAAgGAoQgKgigCgeIAAgsQADgqAWgnIAPgYQApg5AqADQAbACAcgEIAQCXIAAgBIgCgDIAAgBIAAAAQgkhMhKAAIgBAAIAAAAQgZAAgfAKQAfgKAZAAIAAAAIABAAQBKAAAkBMIAAAAIAAABIACADIAAABQAbA6AGBlIgCgCIAAgBIAAgBIgCgEIgCgDIAAgBQhOiXhYAAIgBAAIAAAAQgbAAgbAOQAbgOAbAAIAAAAIABAAQBYAABOCXIAAABIACADIACAEIAAABIAAABIACACIgCgBgAl9lvIgQiXQAPgiAWgdIARgTQAQgSAGAlQAGAmgFBjQgKDAgSAsQgGhlgbg6gAlcjQIAAAAg");
	this.shape_1.setTransform(0.0308,-0.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.larm, new cjs.Rectangle(-58.6,-61.7,117.30000000000001,123.5), null);


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
	this.shape.graphics.f().s("#CC9900").ss(6,1,1).p("AojFeIB4AAAojDGIAACYIhvAAAojFeIAACYAojDGQI2CMRDqPAxVn1QB6JOG4Bt");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.goldchain, new cjs.Rectangle(-114,-53.1,228,106.30000000000001), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkNBiQAABggpBEQgoBEg6AAQg6AAgphEQgphEAAhgQAAhgAphDQAphEA6AAQA6AAAoBEQApBDAABggAgel/QANgfAPgdQBii3CKAAQCLAABhC3QBiC4AAEDQAAEEhiC3QhhC4iLAAQiHAAhgiuQgDgFgCgFQhhi3AAkEQAAjaBFilgAADHFQAAAAgBABQhhCjiKAAQiLAAhiijQhhikAAjnQAAjmBhikQBiijCLAAQB0AABXBzAD7BBQAAB+gwBaQgwBZhDAAQhEAAgvhZQgwhaAAh+QAAh+AwhaQAvhZBEAAQBDAAAwBZQAwBaAAB+gAB5BaQAABBgbAtQgaAugmAAQglAAgaguQgbgtAAhBQAAhAAbgtQAaguAlAAQAmAAAaAuQAbAtAABAgAmYBzQAAAugTAgQgTAhgaAAQgbAAgTghQgSggAAguQAAguASggQATggAbAAQAaAAATAgQATAgAAAug");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("AB5DYQgwhaAAh+QAAh+AwhZQAwhaBDAAQBEAAAwBaQAwBZgBB+QABB+gwBaQgwBZhEAAQhDAAgwhZgABzhTQgbAtABBAQgBBAAbAtQAbAuAlAAQAlAAAbguQAagtABhAQgBhAgagtQgbguglAAQglAAgbAugAlmDFQgohEAAhfQAAhfAohEQAphEA6gBQA6ABAoBEQAqBEAABfQAABfgqBEQgoBFg6AAQg6AAgphFgAlwgbQgTAfAAAvQAAAtATAgQASAhAbAAQAaAAATghQATggAAgtQAAgvgTgfQgTgggaAAQgbAAgSAgg");
	this.shape_1.setTransform(-14.9,6.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADHFIgFgKQhhi3AAkEQAAjaBFilQANgfAPgdQBhi3CLAAQCKAABiC3QBiC5AAECQAAEEhiC3QhiC4iKAAQiHAAhgiugAgbiWQgwBZAAB+QAAB+AwBaQAvBZBDAAQBEAAAwhZQAwhagBh+QABh+gwhZQgwhahEAAQhDAAgvBagAnWHGQhhikAAjnQAAjmBhikQBiijCLAAQB0AABXBzQhFClAADaQAAEEBhC3IAFAKIgBABQhhCjiKAAQiLAAhiijgAn7hBQgoBDAABgQAABgAoBEQApBEA6AAQA6AAAohEQAqhEAAhgQAAhggqhDQgohEg6AAQg6AAgpBEgAADHFIAAAAgAghDIQgbgtABhBQgBhBAbgsQAbguAkAAQAlAAAbAuQAaAsABBBQgBBBgaAtQgbAuglAAQgkAAgbgugAoFDBQgTggAAguQAAguATggQASghAbAAQAaAAATAhQATAgAAAuQAAAugTAgQgTAhgaAAQgbAAgSghg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes2, new cjs.Rectangle(-57.8,-63.7,115.6,127.4), null);


(lib.eyebrows3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ARqkwIt6H9IAAiMIi+DwIDwAAIYEovgAxpkwIN6H9IAAiMIC+DwIjwAAI4Eovg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("AAyExIC+jwIAACMIN6n9IK8AyI4EIvgAkhExI4EovIK8gyIN6H9IAAiMIC+Dwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrows3, new cjs.Rectangle(-183.9,-31.5,367.9,63), null);


(lib.eyebrows2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AboAjQrUoOrTIOIjDgmIDpCkQKgm/JGIDgA7nAjQLUoOLTIOIDDgmIjpCkQqgm/pGIDg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AFnChIjpikIDCAmQLUoOLUIOIibDCQpGoDqgG/gA7nAjQLUoOLUIOIDCgmIjpCkQqgm/pGIDg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrows2, new cjs.Rectangle(-177.8,-23.8,355.6,47.7), null);


(lib.tubedoublerose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape.setTransform(11.925,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.925,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgMAbIgIgDIAAgKIAAAAQAEADAGACQAFACAFAAQAFAAADgCQAEgCAAgEQAAgEgCgBIgHgDIgEgBIgGgBQgHgCgDgDQgDgEAAgFQAAgDABgDIAEgGIAHgDQAFgCAEAAIAKACIAIACIAAAKIAAAAIgJgEIgKgCQgEAAgDACQgEACAAAEQAAADACACQACACAFABIAFABIAFABQAGABAEADQADAEAAAGQAAAHgGAFQgGAFgKAAQgGAAgFgCg");
	this.shape_2.setTransform(1.425,0.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_3.setTransform(-4.225,0.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AARAkIgXgdIgOAAIAAAdIgJAAIAAhHIAUAAIAKAAIAIADQAEADACAEQACAEAAAFQAAAIgEAGQgEAEgGACIAbAggAgUAAIAKAAIAIAAQACgBADgDIADgEIABgHQAAgDgBgDIgDgEIgFgCIgGAAIgMAAg");
	this.shape_4.setTransform(-9.9,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center tube
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#DA9494","#F2D9D9"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBaInSAAQgUAAgSgHQgRgHgNgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQANgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHAOAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgOAMgRAHQgSAHgTAAIgBAAg");
	this.shape_5.setTransform(0,-0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#DA9494","#F1DADA"],[0,1],33,5,19,-5.6).s().p("ADpBaInSAAQgUAAgSgHQgRgHgNgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQANgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHAOAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgOAMgRAHQgSAHgTAAIgBAAg");
	this.shape_6.setTransform(0,-0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#DA9494","#F2D9D9"],[0,1],-21,-8.8,0.8,7.7).s().p("ADqBaInSAAQgUAAgSgHQgRgHgOgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQAOgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHANAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgNAMgRAHQgSAHgUAAIAAAAg");
	this.shape_7.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// center tube border
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CB7070").s().p("ADwBkIngAAQgUAAgTgHQgSgJgNgNQgOgOgHgSQgIgTAAgUQAAgTAIgTQAHgSAOgOQANgOASgIQATgHAUAAIHgAAQAVAAATAHQARAIAOAOQAOAOAHASQAIATAAATQAAAUgIATQgHASgOAOQgOANgRAJQgTAHgUAAIgBAAg");
	this.shape_8.setTransform(0,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BD4A4A").s().p("ADwBkIngAAQgUAAgTgHQgSgJgNgNQgOgOgHgSQgIgTAAgUQAAgTAIgTQAHgSAOgOQANgOASgIQATgHAUAAIHgAAQAVAAATAHQARAIAOAOQAOAOAHASQAIATAAATQAAAUgIATQgHASgOAOQgOANgRAJQgTAHgUAAIgBAAg");
	this.shape_9.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#CA6868","#E7BABA"],[0,1],-9.3,-13,19.8,13.5).s().p("AjxCMQgcAAgZgLQgagLgSgUQgUgSgLgaQgKgaAAgcQAAgcAKgaQALgZAUgTQASgTAagMQAZgKAcAAIHjAAQAbAAAaAKQAZAMATATQATATALAZQALAaAAAcQAAAcgLAaQgLAagTASQgTAUgZALQgaALgbAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#C15757","#DB9B9B"],[0,1],-9.3,-13,19.8,13.5).s().p("AjxCMQgcAAgZgLQgagLgSgUQgUgSgLgaQgKgaAAgcQAAgcAKgaQALgZAUgTQASgTAagMQAZgKAcAAIHjAAQAbAAAaAKQAZAMATATQATATALAZQALAaAAAcQAAAcgLAaQgLAagTASQgTAUgZALQgaALgbAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D38989").s().p("AkuCKQgagMgTgVQgUgUgMgbQgKgcAAgeQAAgeAKgcQAMgbAUgUQATgVAagMQAagLAdAAIHvAAQAcAAAbALQAaAMATAVQAUAUALAbQALAcAAAeQAAAegLAcQgLAbgUAUQgTAVgaAMQgbAMgcAAInvAAIAAAAQgdAAgagMg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BD4A4A").s().p("AkuCKQgagMgTgVQgUgUgMgbQgKgcAAgeQAAgeAKgcQAMgbAUgUQATgVAagMQAagLAdAAIHvAAQAcAAAbALQAaAMATAVQAUAUALAbQALAcAAAeQAAAegLAcQgLAbgUAUQgTAVgaAMQgbAMgcAAInvAAIAAAAQgdAAgagMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-15,78,30);


(lib.tubedoublegreen = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgXAlIAAgKIAKgJIAJgJIAMgNQAEgFAAgHQAAgFgEgEQgEgDgGAAQgEAAgFACQgGACgEADIgBAAIAAgKIAKgEIAKgBQALAAAGAFQAHAGAAAJIgBAHIgEAHIgEAGIgHAGIgJAKIgKAIIAlAAIAAAJg");
	this.shape.setTransform(14.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_1.setTransform(9.025,0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgEAlIAAg2IAJAAIAAA2gAgEgaIAAgJIAJAAIAAAJg");
	this.shape_2.setTransform(5.675,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgLAmIAAguIgFAAIAAgHIAFAAIAAgCQABgKAEgFQAFgFAJAAIAFAAIAFABIAAAIIgBAAIgEgBIgEAAQgHAAgCACQgCADAAAHIAAACIAQAAIAAAHIgQAAIAAAug");
	this.shape_3.setTransform(2.9,-0.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_4.setTransform(-1.125,0.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgRAXQgFgFAAgKIAAgjIAKAAIAAAeIAAAHIACAFQAAABAAAAQABABAAAAQABABAAAAQABAAAAABIAGAAQADAAAEgBIAIgGIAAgnIAJAAIAAA2IgJAAIAAgHIgJAGQgEACgEAAQgJAAgFgFg");
	this.shape_5.setTransform(-6.375,0.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgCgHQgDgHAAgJQAAgIADgHQACgHAFgFQAEgFAGgCQAHgDAGAAQAIAAAGADQAGACAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgGADgIAAQgHAAgGgDgAgQgVQgHAIAAANQAAAOAHAIQAGAHAKAAQALAAAGgHQAHgIAAgOQAAgNgHgIQgGgIgLAAQgKAAgGAIg");
	this.shape_6.setTransform(-13.425,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center tube
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#80DD88","#D7F4DC"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBaInSAAQgUAAgSgHQgRgHgNgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQANgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHAOAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgOAMgRAHQgSAHgTAAIgBAAg");
	this.shape_7.setTransform(0,-0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A9E7AE","#EBFAEC"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBaInSAAQgUAAgSgHQgRgHgNgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQANgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHAOAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgOAMgRAHQgSAHgTAAIgBAAg");
	this.shape_8.setTransform(0,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#80DD88","#D7F4DC"],[0,1],-21,-8.8,0.8,7.7).s().p("ADqBaInSAAQgUAAgSgHQgRgHgOgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQAOgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHANAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgNAMgRAHQgSAHgUAAIAAAAg");
	this.shape_9.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(1));

	// center tube border
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4BCD58").s().p("ADwBkIngAAQgUAAgTgHQgSgJgNgNQgOgOgHgSQgIgTAAgUQAAgTAIgTQAHgSAOgOQANgOASgIQATgHAUAAIHgAAQAVAAATAHQARAIAOAOQAOAOAHASQAIATAAATQAAAUgIATQgHASgOAOQgOANgRAJQgTAHgUAAIgBAAg");
	this.shape_10.setTransform(0,-0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#30AD3C").s().p("ADwBkIngAAQgUAAgTgHQgSgJgNgNQgOgOgHgSQgIgTAAgUQAAgTAIgTQAHgSAOgOQANgOASgIQATgHAUAAIHgAAQAVAAATAHQARAIAOAOQAOAOAHASQAIATAAATQAAAUgIATQgHASgOAOQgOANgRAJQgTAHgUAAIgBAAg");
	this.shape_11.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#3ECA4B","#BCEDC0"],[0,1],-9.3,-13,19.8,13.5).s().p("AjxCMQgcAAgZgLQgagLgSgUQgUgSgLgaQgKgaAAgcQAAgcAKgaQALgZAUgTQASgTAagMQAZgKAcAAIHjAAQAbAAAaAKQAZAMATATQATATALAZQALAaAAAcQAAAcgLAaQgLAagTASQgTAUgZALQgaALgbAAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#45CB52","#8CE195"],[0,1],-9.3,-13,19.8,13.5).s().p("AjxCMQgcAAgZgLQgagLgSgUQgUgSgLgaQgKgaAAgcQAAgcAKgaQALgZAUgTQASgTAagMQAZgKAcAAIHjAAQAbAAAaAKQAZAMATATQATATALAZQALAaAAAcQAAAcgLAaQgLAagTASQgTAUgZALQgaALgbAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#3ECA4B","#3ECA4B"],[0,1],-39,0,39,0).s().p("AkuCKQgagMgTgVQgUgUgMgbQgKgcAAgeQAAgeAKgcQAMgbAUgUQATgVAagMQAagLAdAAIHvAAQAcAAAbALQAaAMATAVQAUAUALAbQALAcAAAeQAAAegLAcQgLAbgUAUQgTAVgaAMQgbAMgcAAInvAAIAAAAQgdAAgagMg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#30AD3C").s().p("AkuCKQgagMgTgVQgUgUgMgbQgKgcAAgeQAAgeAKgcQAMgbAUgUQATgVAagMQAagLAdAAIHvAAQAcAAAbALQAaAMATAVQAUAUALAbQALAcAAAeQAAAegLAcQgLAbgUAUQgTAVgaAMQgbAMgcAAInvAAIAAAAQgdAAgagMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-15,78,30);


(lib.tubedoubleblue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgTAlIAAgIIAPAAIAAgvIgPAAIAAgHIAHgBIAFgBIAEgEQABgCAAgCIAHAAIAABAIAPAAIAAAIg");
	this.shape.setTransform(14.275,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_1.setTransform(9.025,0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgEAlIAAg2IAJAAIAAA2gAgEgaIAAgJIAJAAIAAAJg");
	this.shape_2.setTransform(5.675,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgLAmIAAguIgFAAIAAgHIAFAAIAAgCQABgKAEgFQAFgFAJAAIAFAAIAFABIAAAIIgBAAIgEgBIgEAAQgHAAgCACQgCADAAAHIAAACIAQAAIAAAHIgQAAIAAAug");
	this.shape_3.setTransform(2.9,-0.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_4.setTransform(-1.125,0.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgRAXQgFgFAAgKIAAgjIAKAAIAAAeIAAAHIACAFQAAABAAAAQABABAAAAQABABAAAAQABAAAAABIAGAAQADAAAEgBIAIgGIAAgnIAJAAIAAA2IgJAAIAAgHIgJAGQgEACgEAAQgJAAgFgFg");
	this.shape_5.setTransform(-6.375,0.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgCgHQgDgHAAgJQAAgIADgHQACgHAFgFQAEgFAGgCQAHgDAGAAQAIAAAGADQAGACAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgGADgIAAQgHAAgGgDgAgQgVQgHAIAAANQAAAOAHAIQAGAHAKAAQALAAAGgHQAHgIAAgOQAAgNgHgIQgGgIgLAAQgKAAgGAIg");
	this.shape_6.setTransform(-13.425,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center tube
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#94C6DB","#DCEBF2"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBaInSAAQgUAAgSgHQgRgHgNgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQANgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHAOAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgOAMgRAHQgSAHgTAAIgBAAg");
	this.shape_7.setTransform(0,-0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#94C6DB","#DCEBF2"],[0,1],33,5,19,-5.6).s().p("ADpBaInSAAQgUAAgSgHQgRgHgNgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQANgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHAOAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgOAMgRAHQgSAHgTAAIgBAAg");
	this.shape_8.setTransform(0,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#94C6DB","#DCEBF2"],[0,1],2.4,-16.7,31.6,5.4).s().p("ADqBaInSAAQgUAAgSgHQgRgHgOgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQAOgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHANAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgNAMgRAHQgSAHgUAAIAAAAg");
	this.shape_9.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(1));

	// center tube border
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#47A4CB").s().p("ADwBkIngAAQgUAAgTgHQgSgJgNgNQgOgOgHgSQgIgTAAgUQAAgTAIgTQAHgSAOgOQANgOASgIQATgHAUAAIHgAAQAVAAATAHQARAIAOAOQAOAOAHASQAIATAAATQAAAUgIATQgHASgOAOQgOANgRAJQgTAHgUAAIgBAAg");
	this.shape_10.setTransform(0,-0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#317F9F").s().p("ADwBkIngAAQgUAAgTgHQgSgJgNgNQgOgOgHgSQgIgTAAgUQAAgTAIgTQAHgSAOgOQANgOASgIQATgHAUAAIHgAAQAVAAATAHQARAIAOAOQAOAOAHASQAIATAAATQAAAUgIATQgHASgOAOQgOANgRAJQgTAHgUAAIgBAAg");
	this.shape_11.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#47A4CB","#AED6E7"],[0,1],-9.3,-13,19.8,13.5).s().p("AjxCMQgcAAgZgLQgagLgSgUQgUgSgLgaQgKgaAAgcQAAgcAKgaQALgZAUgTQASgTAagMQAZgKAcAAIHjAAQAbAAAaAKQAZAMATATQATATALAZQALAaAAAcQAAAcgLAaQgLAagTASQgTAUgZALQgaALgbAAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#3083A5","#7CBDD8"],[0,1],-9.3,-13,19.8,13.5).s().p("AjxCMQgcAAgZgLQgagLgSgUQgUgSgLgaQgKgaAAgcQAAgcAKgaQALgZAUgTQASgTAagMQAZgKAcAAIHjAAQAbAAAaAKQAZAMATATQATATALAZQALAaAAAcQAAAcgLAaQgLAagTASQgTAUgZALQgaALgbAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#71BAD7").s().p("AkuCKQgagMgTgVQgUgUgMgbQgKgcAAgeQAAgeAKgcQAMgbAUgUQATgVAagMQAagLAdAAIHvAAQAcAAAbALQAaAMATAVQAUAUALAbQALAcAAAeQAAAegLAcQgLAbgUAUQgTAVgaAMQgbAMgcAAInvAAIAAAAQgdAAgagMg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C89A8").s().p("AkuCKQgagMgTgVQgUgUgMgbQgKgcAAgeQAAgeAKgcQAMgbAUgUQATgVAagMQAagLAdAAIHvAAQAcAAAbALQAaAMATAVQAUAUALAbQALAcAAAeQAAAegLAcQgLAbgUAUQgTAVgaAMQgbAMgcAAInvAAIAAAAQgdAAgagMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-15,78,30);


(lib.brows = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ANtgRIiFiLIplE1IAGhCIhuCeIgIBRILKlQIC1BrgAtVjbICehqIIXG8IAHhDIBLC1IgIBQIp0nsIjHA/g");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbD1IBuieIgGBCIJkk1ICGCLIAlByIi1hrIrKFQgArKizIjHA/IA8hnICehqIIYG8IAGhDIBMC1IgIBQg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.brows, new cjs.Rectangle(-92.4,-33.5,184.8,67.1), null);


(lib.blackmustache = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAPhIQgBgfAMgcQAXg1BKgGQBJgFBHAwQBHAvAhAkIALAKQAOAOAWArQAVAtgdAqQgdArgwAgQgwAggYAIQgBAAgcAMQgUAHgKABQgbADAkg1QArhAgQgmQgQgohMgDQhBgDgogyQgMgPgIgTgAADhKQAJgegFgdQgJg7hGgWQhGgYhQAeQhRAdgoAaIgOAIQgQAJggAnQggAlASAxQASAvAnArQAmArAWANQABABAYARQASANAIADQAbAJgWg8QgahJAYghQAZghBLAPQBAAMAygmQAQgNANgPg");
	this.shape.setTransform(-0.0017,0.0096);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADTCvQArhAgQgmQgQgohMgDQhBgDgogyQgMgPgIgTIgGgPQgBgfAMgcQAXg1BKgGQBJgFBHAwQBHAvAhAkIALAKQAOAOAWArQAVAtgdAqQgdArgwAgQgwAggYAIIgdAMQgUAHgKABIgCABQgYAAAjgzgAj7CpQgIgDgSgNIgZgSQgWgNgmgrQgngrgSgvQgSgxAgglQAggnAQgJIAOgIQAogaBRgdQBQgeBGAYQBGAWAJA7QAFAdgJAeIgIAOQgNAPgQANQgyAmhAgMQhLgPgZAhQgYAhAaBJQATA0gSAAIgGgBg");
	this.shape_1.setTransform(-0.0017,0.0096);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blackmustache, new cjs.Rectangle(-43.6,-23.5,87.30000000000001,47.1), null);


(lib.blackeyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AB5BOQgLBXgjA5QgkA6gogFQgpgFgVhAQgVhAAKhXQAKhVAkg5QAjg6ApAFQAoAEAVBBQAWBAgKBVgABNAeQAAAggSAXQgTAXgaAAQgaAAgSgXQgTgXAAggQABggASgWQASgXAaAAQAbAAASAXQASAWAAAggAAMkxQANgVANgUQBbh+BpANQBpAMA6CQQA6CPgWC+QgXC+haB/QhaB+hpgMQhmgNg5iIQAAAAgBAAQhYBwhpgNQhpgMg8iBQg8iBAUioQAUiqBYhwQBZhvBpANQBYAKA3BcgAjqAqQgJBIgiAvQgiAwgogFQgogFgWg2QgWg2AIhIQAJhHAigvQAigvAoAFQAoAEAWA2QAWA2gIBHgAksADQgBAagPATQgPATgWAAQgWAAgQgTQgPgSAAgbQAAgZAQgUQAQgTAVAAQAWAAAPATQAQATAAAagAgiE4QgCgEgBgEQg7iPAXi+QATihBChz");
	this.shape.setTransform(0.0125,-0.0042);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACXDRQgpgFgVhAQgVhBAKhVQAKhWAkg6QAkg6ApAFQAoAFAVBAQAWBBgKBVQgLBWgjA6QgiA1glAAIgGAAgAB6hbQgSAXgBAgQAAAhATAWQASAXAbgBQAaAAATgXQASgWAAggQAAgggSgXQgSgWgbgBQgbABgSAWgAjGCKQgogFgWg3QgWg1AIhHQAJhIAigwQAigvAoAFQAoAFAWA2QAWA1gIBIQgJBHgiAwQgfArgkAAIgHAAgAjthsQgQATAAAaQAAAbAPATQAQASAWAAQAWAAAPgSQAPgTABgbQAAgagQgTQgPgTgWAAQgVAAgQATg");
	this.shape_1.setTransform(-15.2847,6.6173);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB9HNQhmgNg5iIIgDgIQgqhoAAiAQAAgxAGg0QATihBChzIAagpQBbh+BpANQBpAMA6CQQA6CPgWC+QgXC+haB/QhSBzheAAIgTgBgAgchXQgkA5gKBVQgKBXAVBAQAVBAApAFQAoAFAkg6QAjg5ALhXQAKhVgWhAQgVhBgogEIgHgBQglAAggA2gAjkGbQhpgMg8iBQg8iBAUioQAUiqBYhwQBZhvBpANQBYAKA3BcQhCBzgTChQgGA0AAAxQAACAAqBoIADAIIgBAAQhPBkhdAAIgVgBgAmAhjQgiAvgJBHQgIBIAWA2QAWA2AoAFQAoAFAigwQAigvAJhIQAIhHgWg2QgWg2gogEIgIgBQgjAAgfArgAgeBVQgTgXAAggQABggASgWQASgXAaAAQAbAAASAXQASAWAAAgQAAAggSAXQgTAXgaAAIgBAAQgZAAgSgXgAmHAwQgPgSAAgbQAAgZAQgUQAQgTAVAAQAWAAAPATQAQATAAAaQgBAagPATQgPATgWAAQgWAAgQgTgAAMkxIAAAAg");
	this.shape_2.setTransform(0.0125,-0.0042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blackeyes, new cjs.Rectangle(-44.9,-47.1,89.9,94.30000000000001), null);


(lib.blacklenses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AADHFIgBABQhhCjiKAAQiLAAhiijQhhikAAjnQAAjmBhikQBiijCLAAQB0AABXBzQANgfAPgdQBhi3CLAAQCKAABiC3QBiC5AAECQAAAugDAsQgODKhRCXQhiC4iKAAQiHAAhgiug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blacklenses, new cjs.Rectangle(-56.8,-62.7,113.6,125.4), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AE5nJQgRAwhMBKQhFBEhgAiQASAYAQAsQAlBlAACNQAAAlgCAmQh1CqAJBxQAIBxgPAZQgQAagSigQgTighPh/QAEgFADhJQADhJAThlQAThnAQgYQg4gSgzg+QhehyhThlQhThmDABcQDBBcDchIQDdhJgjAoQgkAogQAwg");
	this.shape.setTransform(-0.0046,-0.0054);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("AgZG3QgTighPh/QAEgFADhJQADhJAThlQAThnAQgYQg4gSgzg+IixjXQhThmDABcQDBBcDchIQDdhJgjAoQgkAogQAwQgRAwhMBKQhFBEhgAiQASAYAQAsQAlBlAACNQAAAlgCAmQh1CqAJBxQAIBxgPAZQgDAEgCAAQgOAAgPiKg");
	this.shape_1.setTransform(-0.0046,-0.0054);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bear, new cjs.Rectangle(-37.9,-58.6,75.9,117.30000000000001), null);


(lib.glaseses = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.transparentlenses();
	this.instance.setTransform(-38.45,0);
	this.instance.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AuxCuQgHg3AAg8QAAjmBiikQBiijCKAAQB0AABYBzQANgfAPgdQBii3CKAAQCLAABhC3QBiC4AAEDQAAAugDAsQgPDKhQCXQhhC4iLAAQiHAAhgiuQAAAAgBABQhhCjiLAAQiKAAhiijQhJh5gSifIg/g5AC1BaQGej4GeBZ");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glaseses, new cjs.Rectangle(-102.8,-64.7,205.7,129.4), null);


(lib.aviatorglasses = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.blacklenses();
	this.instance.setTransform(-41.25,0);
	this.instance.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgOADIAcgF");
	this.shape.setTransform(13.8,9.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AuxCuQgHg3AAg8QAAjmBiikQBiijCKAAQB1AABXBzQANgfAPgdQBii3CLAAQCKAABhC3QBiC4AAEDQAAAugDAsQgPDKhQCXQhhC4iKAAQiIAAhgiuQAAAAAAABQhiCjiLAAQiKAAhiijQhIh6gTieIg/g5AC1BaQGej4GeBZ");
	this.shape_1.setTransform(-2.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aviatorglasses, new cjs.Rectangle(-105.6,-64.7,205.7,129.4), null);


// stage content:
(lib.MPHFinalBLopez = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3];
	// timeline functions:
	this.frame_0 = function() {
		this.outfit1.addEventListener("click", ClickFace1.bind(this));
		function ClickFace1() {
			this.goldeyes.x = 740.95;
			this.goldeyes.y = 244.15;
		
			this.blacksuit.x = 773.2;
			this.blacksuit.y = 348.95;
			this.goldchain.x = 770.4;
			this.goldchain.y = 336.05;
			this.mouth.x = 728.1;
			this.mouth.y = 318.95;
			this.glasses1.x = 776.5;
			this.glasses1.y = 234.65;
			this.black1.x = 884.75;
			this.black1.y = 292.2;
			this.black2.x = 615.2;
			this.black2.y = 292.2;
			this.shoes1.x = 761.2;
			this.shoes1.y = 427.25;
			this.shoes2.x = 729.1;
			this.shoes2.y = 425.3;
			}
		this.outfit1.addEventListener("click", ClickFace1.bind(this));
	}
	this.frame_1 = function() {
		this.outfit2.addEventListener("click", ClickFace1.bind(this));
		function ClickFace1() {
			this.whitesuit.x = 773.2;
			this.whitesuit.y =348.95;
			this.white1.x = 884.75;
			this.white1.y =292.2;
			this.white2.x = 615.2;
			this.white2.y =292.2;
			this.sandals1.x = 761.2;
			this.sandals1.y =427.25;
			this.sandals2.x = 729.1;
			this.sandals2.y =425.3;
			this.blackeyes.x =740.95;
			this.blackeyes.y =244.15;
			this.mouth.x =728.1
			this.mouth.y =318.95;
			}
		this.outfit2.addEventListener("click", ClickFace1.bind(this));
	}
	this.frame_2 = function() {
		this.reset.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.blacksuit.x = 174.2;
			this.blacksuit.y = 165.05;
			this.orangesuit.x = 148.2;
			this.orangesuit.y =158.45;
			this.whitesuit.x = 131.8;
			this.whitesuit.y = 158.45;
			this.goldeyes.x = 84.2;
			this.goldeyes.y = 315.65;
			this.blackeyes.x = 83.75;
			this.blackeyes.y = 294.8;
			this.mouth.x = 71.35;
			this.mouth.y = 399.55;
			this.glasses2.x = 162.3;
			this.glasses2.y = 536.6;
			this.glasses1.x = 133.9;
			this.glasses1.y = 536.6;
			this.goldchain.x = 372;
			this.goldchain.y = 534.4;
			this.shoes1.x = 305.75;
			this.shoes1.y = 396.8;
			this.shoes2.x = 276.2;
			this.shoes2.y = 396.4;
			this.sandals1.x = 220.45;
			this.sandals1.y = 396.35;
			this.sandals2.x = 191.75;
			this.sandals2.y = 396.35;
			this.gold.x = 251.4;
			this.gold.y = 325.15;
			this.eyebrows2.x = 259.2;
			this.eyebrows2.y = 302.15;
			this.eyebrows1.x = 263.5;
			this.eyebrows1.y = 280.45;
			this.nose1.x = 436.1;
			this.nose1.y = 465.35;
			this.nose2.x = 490.3;
			this.nose2.y = 450.75;
			this.blackmustache.x = 484.25;
			this.blackmustache.y = 399.3;
			this.goldbear.x = 485.65;
			this.goldbear.y = 336.85;
			this.goldmustache.x = 490.35;
			this.goldmustache.y = 307.65;
			this.white1.x = 400.15;
			this.white1.y = 161.75;
			this.white2.x = 376;
			this.white2.y = 161.75;
			this.black1.x = 430.15;
			this.black1.y = 147.8;
			this.black2.x = 376;
			this.black2.y = 147.8;
			this.skin1.x = 430.1;
			this.skin1.y = 144.7;
			this.skin2.x = 398.45;
			this.skin2.y = 147.8;
			}
		this.reset.addEventListener("click", ClickFace1.bind(this));
	}
	this.frame_3 = function() {
		this.blacksuit.on("pressmove", dragMe);
		this.orangesuit.on("pressmove", dragMe);
		this.whitesuit.on("pressmove", dragMe);
		this.goldeyes.on("pressmove", dragMe);
		this.blackeyes.on("pressmove", dragMe);
		this.mouth.on("pressmove", dragMe);
		this.glasses1.on("pressmove", dragMe);
		this.glasses2.on("pressmove", dragMe);
		this.goldchain.on("pressmove", dragMe);
		this.shoes1.on("pressmove", dragMe);
		this.shoes2.on("pressmove", dragMe);
		this.sandals1.on("pressmove", dragMe);
		this.sandals2.on("pressmove", dragMe);
		this.gold.on("pressmove", dragMe);
		this.eyebrows2.on("pressmove", dragMe);
		this.eyebrows1.on("pressmove", dragMe);
		this.nose1.on("pressmove", dragMe);
		this.nose2.on("pressmove", dragMe);
		this.blackmustache.on("pressmove", dragMe);
		this.goldbear.on("pressmove", dragMe);
		this.goldmustache.on("pressmove", dragMe);
		this.white1.on("pressmove", dragMe);
		this.white2.on("pressmove", dragMe);
		this.black1.on("pressmove", dragMe);
		this.black2.on("pressmove", dragMe);
		this.skin1.on("pressmove", dragMe);
		this.skin2.on("pressmove", dragMe);
		function dragMe(evt) {
		    evt.currentTarget.x = evt.stageX/stage.scaleX;
		    evt.currentTarget.y = evt.stageY/stage.scaleY;    
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// buttons
	this.reset = new lib.tubedoublerose();
	this.reset.name = "reset";
	this.reset.setTransform(583.9,559.75,1.5374,1.4684);
	new cjs.ButtonHelper(this.reset, 0, 1, 2, false, new lib.tubedoublerose(), 3);

	this.outfit2 = new lib.tubedoublegreen();
	this.outfit2.name = "outfit2";
	this.outfit2.setTransform(822.85,554.9,1.5011,1.795);
	new cjs.ButtonHelper(this.outfit2, 0, 1, 2, false, new lib.tubedoublegreen(), 3);

	this.outfit1 = new lib.tubedoubleblue();
	this.outfit1.name = "outfit1";
	this.outfit1.setTransform(708.35,559.05,1.2285,1.5177);
	new cjs.ButtonHelper(this.outfit1, 0, 1, 2, false, new lib.tubedoubleblue(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.outfit1},{t:this.outfit2},{t:this.reset}]}).wait(4));

	// Body Parts
	this.blackeyes = new lib.blackeyes();
	this.blackeyes.name = "blackeyes";
	this.blackeyes.setTransform(83.75,294.8);

	this.sandals2 = new lib.sandals2();
	this.sandals2.name = "sandals2";
	this.sandals2.setTransform(191.75,396.35);

	this.sandals1 = new lib.sandals1();
	this.sandals1.name = "sandals1";
	this.sandals1.setTransform(220.45,396.35);

	this.eyebrows1 = new lib.brows();
	this.eyebrows1.name = "eyebrows1";
	this.eyebrows1.setTransform(263.5,280.45);

	this.blackmustache = new lib.blackmustache();
	this.blackmustache.name = "blackmustache";
	this.blackmustache.setTransform(484.25,399.3);

	this.goldchain = new lib.goldchain();
	this.goldchain.name = "goldchain";
	this.goldchain.setTransform(372,534.4);

	this.nose2 = new lib.noise2();
	this.nose2.name = "nose2";
	this.nose2.setTransform(490.3,450.75,1.7052,1.7052);

	this.nose1 = new lib.nose1();
	this.nose1.name = "nose1";
	this.nose1.setTransform(436.1,465.35);

	this.glasses1 = new lib.aviatorglasses();
	this.glasses1.name = "glasses1";
	this.glasses1.setTransform(133.9,536.6);

	this.glasses2 = new lib.glaseses();
	this.glasses2.name = "glasses2";
	this.glasses2.setTransform(162.3,536.6);

	this.mouth = new lib.mouth();
	this.mouth.name = "mouth";
	this.mouth.setTransform(71.35,399.55);

	this.shoes1 = new lib.shoe2();
	this.shoes1.name = "shoes1";
	this.shoes1.setTransform(305.75,396.85,0.6054,0.6054,0,0,0,0,0.1);

	this.shoes2 = new lib.shoes1();
	this.shoes2.name = "shoes2";
	this.shoes2.setTransform(276.25,396.4,0.5638,0.5638,0,0,0,0.1,0);

	this.gold = new lib.eyebrows3();
	this.gold.name = "gold";
	this.gold.setTransform(251.45,325.15,0.6023,0.6023,4.9546,0,0,0.1,0);

	this.goldeyes = new lib.eyes2();
	this.goldeyes.name = "goldeyes";
	this.goldeyes.setTransform(84.4,315.8,0.7116,0.6905,0,0,0,0.3,0.2);

	this.goldbear = new lib.bear();
	this.goldbear.name = "goldbear";
	this.goldbear.setTransform(485.65,336.85,0.7572,0.7572,14.9991);

	this.goldmustache = new lib.mustache2();
	this.goldmustache.name = "goldmustache";
	this.goldmustache.setTransform(490.35,307.65);

	this.white1 = new lib.rarmsuit1();
	this.white1.name = "white1";
	this.white1.setTransform(400.15,161.75);

	this.white2 = new lib.larmsuit1();
	this.white2.name = "white2";
	this.white2.setTransform(376,161.75);

	this.black1 = new lib.rarmsuit3();
	this.black1.name = "black1";
	this.black1.setTransform(430.15,147.8);

	this.black2 = new lib.larmsuit3();
	this.black2.name = "black2";
	this.black2.setTransform(376,147.8);

	this.blacksuit = new lib.suit3();
	this.blacksuit.name = "blacksuit";
	this.blacksuit.setTransform(174.2,165.05);

	this.orangesuit = new lib.suit2();
	this.orangesuit.name = "orangesuit";
	this.orangesuit.setTransform(148.2,158.25,1,1,0,0,0,0,-0.2);

	this.eyebrows2 = new lib.eyebrows2();
	this.eyebrows2.name = "eyebrows2";
	this.eyebrows2.setTransform(259.35,302.25,0.5337,1,4.2467,0,0,0.3,0.1);

	this.skin1 = new lib.rarm();
	this.skin1.name = "skin1";
	this.skin1.setTransform(430.1,144.7,1.1105,1,7.2292);

	this.skin2 = new lib.larm();
	this.skin2.name = "skin2";
	this.skin2.setTransform(398.45,147.8);

	this.whitesuit = new lib.whitesuit();
	this.whitesuit.name = "whitesuit";
	this.whitesuit.setTransform(131.8,158.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.whitesuit},{t:this.skin2},{t:this.skin1},{t:this.eyebrows2},{t:this.orangesuit},{t:this.blacksuit},{t:this.black2},{t:this.black1},{t:this.white2},{t:this.white1},{t:this.goldmustache},{t:this.goldbear},{t:this.goldeyes},{t:this.gold},{t:this.shoes2},{t:this.shoes1},{t:this.mouth},{t:this.glasses2},{t:this.glasses1},{t:this.nose1},{t:this.nose2},{t:this.goldchain},{t:this.blackmustache},{t:this.eyebrows1},{t:this.sandals1},{t:this.sandals2},{t:this.blackeyes}]}).wait(4));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9999").s().p("AgaAjIAAgCQAAgKAEgHIAFgIIAJgIIALgIQADgDAAgDQAAgDgCgCQgCgCgCAAQgIAAAAAJIgRAAQAAgMAHgFQAIgFAKAAQAMAAAHAGQAIAGAAAJQAAAFgEAFQgEAEgLAGIgLAHIgEAFIAUAAIAAgFIAOAAIAAAVg");
	this.shape.setTransform(214.675,617.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("AgaAjIAAgCQAAgKAEgHIAFgIIAJgIIALgIQADgDAAgDQAAgDgCgCQgCgCgCAAQgIAAAAAJIgRAAQAAgMAHgFQAIgFAKAAQAMAAAHAGQAIAGAAAJQAAAFgEAFQgEAEgLAGIgLAHIgEAFIAUAAIAAgFIAOAAIAAAVg");
	this.shape_1.setTransform(207.775,617.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9999").s().p("AgUAZQgIgJAAgQQAAgPAJgKQAIgJALAAQANAAAIAJQAIAKAAAPQAAARgIAJQgJAJgMAAQgLAAgJgKgAgEgQQgCAFAAALQAAANACAEQACAEACAAQAEAAABgFQACgDAAgNQAAgLgCgFQgCgEgDAAQgCAAgCAEg");
	this.shape_2.setTransform(200.925,617.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9999").s().p("AgaAjIAAgCQAAgKAEgHIAFgIIAJgIIALgIQADgDAAgDQAAgDgCgCQgCgCgCAAQgIAAAAAJIgRAAQAAgMAHgFQAIgFAKAAQAMAAAHAGQAIAGAAAJQAAAFgEAFQgEAEgLAGIgLAHIgEAFIAUAAIAAgFIAOAAIAAAVg");
	this.shape_3.setTransform(193.975,617.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9999").s().p("AgLAJIAGgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIABgFIgJAAIAAgSIAXAAIAAAQIAAAKQgBADgDADQgDADgEABIgMABg");
	this.shape_4.setTransform(186.125,621.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9999").s().p("AgTAjIAAgPIAIAAIADgEIgTgjIgEAAIAAgPIAgAAIAAAPIgFAAIAIATIAHgTIgEAAIAAgPIAYAAIAAAPIgEAAIgbA2g");
	this.shape_5.setTransform(180.85,619.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9999").s().p("AgbAUQgGgEABgGQgBgHAHgDQAGgEAKAAQAJAAAEACIAAgBIAAgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBIgFgBQgFAAgEAFIgTgCQADgHAHgDQAHgDAOAAIAIAAIAHABQAGACADACIAFAGIABAJIAAANIAGAAIAAAPIgfAAIAAgDQgEAEgMAAQgKAAgEgFgAgHADQgCACAAADQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAEAAACgCIAAgJQgCgCgEAAQgDAAgBACg");
	this.shape_6.setTransform(173.9,618.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9999").s().p("AAQAiIAAgQIAFAAIAAglIgUA1IgKAAIgUg0IAAAkIAFAAIAAAQIgaAAIAAgQIAFAAIAAgiIgFAAIAAgRIApAAIAJAbIAKgbIApAAIAAARIgFAAIAAAiIAFAAIAAAQg");
	this.shape_7.setTransform(164.575,617.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9999").s().p("AgLAJIAGgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIABgFIgJAAIAAgSIAXAAIAAAQIAAAKQgBADgDADQgDADgEABIgMABg");
	this.shape_8.setTransform(154.575,621.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9999").s().p("AgEAgQgEgCgCgDIgCgDIgBgDIAAgNIAAgIIgGAAIAAgOIAGAAIAAgHIAXgMIAAATIAKAAIAAAOIgKAAIAAAJIABAGQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIAFgBIAAAPIgHACIgJACQgEAAgEgCg");
	this.shape_9.setTransform(150.175,617.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9999").s().p("AgYAYIAAgPIAGAAIAAgRIgGAAIAAgPIAcAAIAAANQACgFADgDQADgEAEgBIAJAAIAAAVIgCAAQgHAAgEABQgDABgCACIgCAHIAIAAIAAAPg");
	this.shape_10.setTransform(145.45,618.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9999").s().p("AACAiIAAgPIAGAAIgDgJIgRAAIgDAJIAGAAIAAAPIgbAAIAAgQIAFAAIANgiIgGAAIAAgRIAwAAIAAARIgFAAIANAiIAFAAIAAAQgAgJACIALAAIgFgSg");
	this.shape_11.setTransform(138.8,617.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9999").s().p("AgYAYIAAgPIAGAAIAAgRIgGAAIAAgPIAcAAIAAANQACgFADgDQADgEAEgBIAJAAIAAAVIgBAAQgIAAgDABQgFABgBACIgBAHIAHAAIAAAPg");
	this.shape_12.setTransform(129.95,618.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9999").s().p("AgWASQgHgHgBgLQABgKAHgHQAJgHANAAQANAAAIAGQAJAIAAANIgkAAQAAALAIAAQAFAAACgGIAUADIgDAFIgGAFQgIAEgKAAQgPAAgJgHgAgEgLQgBADgBAEIAAABIANAAIABgBQAAgEgDgDQgBgDgEABQgCAAgCACg");
	this.shape_13.setTransform(123.6,618.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9999").s().p("AgEAgQgEgCgCgDIgCgDIgBgDIAAgNIAAgIIgGAAIAAgOIAGAAIAAgHIAXgMIAAATIAKAAIAAAOIgKAAIAAAJIABAGQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIAFgBIAAAPIgHACIgJACQgEAAgEgCg");
	this.shape_14.setTransform(117.675,617.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9999").s().p("AgZATQgFgEAAgNIAAgKIgGAAIAAgPIAeAAIAAAWIABAHQABABAAAAQAAAAABABQAAAAABAAQABAAABAAQADAAADgCIAAgOIgGAAIAAgPIAfAAIAAAfIAGAAIAAAPIgfAAIAAgGQgIAHgKAAQgIAAgFgFg");
	this.shape_15.setTransform(111.525,618.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9999").s().p("AgjAjIAAgPIAGAAIAAgmIgGAAIAAgPIAeAAIAAADQAHgEAIAAQALAAAHAHQAIAHAAALQAAAKgHAHQgIAGgMAAQgJAAgFgEIAAAKIAFAAIAAAPgAgCgRQgCACgBAGQABAFACACQACACACAAQAJAAAAgKQAAgKgIAAQgDAAgCADg");
	this.shape_16.setTransform(103.55,619.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9999").s().p("AAaAYIAAgVQAAgGgCgDQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgEAAgEADIAAANIAHAAIAAAPIgfAAIAAgVQAAgGgBgCQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQgEAAgEADIAAANIAHAAIAAAPIglAAIAAgPIAGAAIAAgRIgGAAIAAgPIAeAAIAAAHQAEgDAFgCQAGgCAFAAQALAAAEAJQALgJAMAAQAGAAAEADQAEACACAEQABAFAAAJIAAAJIAGAAIAAAPg");
	this.shape_17.setTransform(93.675,618.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9999").s().p("AgYARQgIgGAAgLQAAgKAIgHQAKgHAOAAQAPAAAJAGQAJAHAAALQAAALgJAGQgJAIgPAAQgOAAgKgIgAgFgHQgCADgBAEQAAALAIAAQAIAAAAgLQAAgEgBgDQgDgEgEAAQgDAAgCAEg");
	this.shape_18.setTransform(83.85,618.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9999").s().p("AgZAZQgJgKAAgPQAAgNAJgLQAJgKAOAAQALAAAIAGIAAgFIAQAAIAAAZIgRAAQgBgFgDgCQgDgDgEAAQgKAAAAASQAAATAKAAQALAAACgPIASAHQgDAKgIAHQgIAHgOAAQgTAAgJgKg");
	this.shape_19.setTransform(76.15,617.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF9999").s().p("AgLAJIAGgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIABgFIgJAAIAAgSIAXAAIAAAQIAAAKQgBADgDADQgDADgEABIgMABg");
	this.shape_20.setTransform(67.625,621.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF9999").s().p("AgcAYIAAgNIAbgWIgQAAIAAAFIgKAAIAAgRIA4AAIAAAMIgbAXIAQAAIAAgFIAKAAIAAARg");
	this.shape_21.setTransform(62.375,618.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF9999").s().p("AgVASQgJgHABgLQgBgKAJgHQAIgHANAAQANAAAJAGQAIAIABANIglAAQABALAGAAQAGAAACgGIAVADIgFAFIgGAFQgHAEgJAAQgQAAgIgHgAgEgLQgBADAAAEIAAABIAMAAIAAgBQAAgEgBgDQgCgDgEABQgCAAgCACg");
	this.shape_22.setTransform(55.6,618.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF9999").s().p("AgjAjIAAgPIAGAAIAAgmIgGAAIAAgPIAfAAIAAADQAGgEAJAAQAKAAAIAHQAHAHAAALQAAAKgHAHQgHAGgNAAQgIAAgFgEIAAAKIAEAAIAAAPgAgCgRQgCACAAAGQAAAFACACQACACADAAQAIAAAAgKQAAgKgIAAQgDAAgCADg");
	this.shape_23.setTransform(48.05,619.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF9999").s().p("AgYARQgIgGAAgLQAAgKAIgHQAKgHAOAAQAOAAAKAGQAJAHAAALQAAALgJAGQgJAIgOAAQgPAAgKgIgAgFgHQgDADABAEQAAALAHAAQAJAAAAgLQAAgEgCgDQgDgEgEAAQgCAAgDAEg");
	this.shape_24.setTransform(40.35,618.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9999").s().p("AgfAiIAAgQIAGAAIAAgiIgGAAIAAgRIAmAAIAAARIgHAAIAAAiIAQAAIAAgLIAQAAIAAAbg");
	this.shape_25.setTransform(33.175,617.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF9999").s().p("AglAiIAAgQIAGAAIAAgiIgGAAIAAgRIAoAAQAMAAAHABQAHACADAFQAEAEAAAFQAAAGgDAEQgFADgEACQAGABAEAEQAEAFAAAFQABAHgFAGQgEAEgIABQgHACgPAAgAgGATIAGAAQAFAAADgBQACgCAAgEQAAgDgCgBQgDgDgFAAIgGAAgAgGgGIAGAAQAGAAABgBQAAgBABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBgEQgCgCgHAAIgFAAg");
	this.shape_26.setTransform(25.35,617.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F68E51").s().p("AhGA3QgagVAAghQAAggAagVQAagWAsAAQAqAAAbAVQAaATACApIh1AAQAAAjAaAAQAQAAAHgQIBBAHQgFAKgIAHQgHAIgMAGQgWALggAAQgzAAgbgUgAgOghQgGAHAAANIABADIArAAIAAgFQAAgMgHgHQgGgIgKAAQgKAAgFAJg");
	this.shape_27.setTransform(289.05,41.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F68E51").s().p("AhFA3QgbgVAAghQAAggAagVQAagWAsAAQAqAAAbAVQAbATABApIh2AAQABAjAZAAQARAAAHgQIBBAHQgFAKgHAHQgJAIgLAGQgWALggAAQgzAAgagUgAgOghQgGAHAAANIAAADIArAAIAAgFQABgMgHgHQgGgIgKAAQgJAAgGAJg");
	this.shape_28.setTransform(266.85,41.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F68E51").s().p("AhmBmIAAgxIATAAIAAhpIgTAAIAAgxIB6AAIAAAxIgUAAIAABpIAzAAIAAghIA0AAIAABSg");
	this.shape_29.setTransform(244.975,38.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F68E51").s().p("AhGA3QgagVAAghQAAggAagVQAagWAsAAQAqAAAbAVQAbATABApIh2AAQABAjAZAAQARAAAHgQIBAAHQgEAKgHAHQgJAIgKAGQgXALgfAAQg0AAgbgUgAgOghQgGAHAAANIABADIAqAAIAAgFQAAgMgFgHQgHgIgKAAQgJAAgGAJg");
	this.shape_30.setTransform(214.5,41.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F68E51").s().p("AgmBoIgagEQgZgDgMgFIAWgkQASAIAfgBQAUAAAKgEQAMgGADgHQADgIAAgMQgWALgdgBQgiAAgXgSQgYgRAAgfQAAgiAZgUQAYgTAigBQAdAAAUAMIAAgJIBhAAIAAAtIgTAAIAABMQAAAbgFAOQgFAOgOAJQgNALgUAEQgTAFggABIgagBgAgcg1QgHAKAAAOQAAANAHAIQAHAJANgBQANABAHgJQAGgJAAgMQAAgPgHgJQgHgJgLAAQgOAAgHAJg");
	this.shape_31.setTransform(191.075,45.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F68E51").s().p("AAWBIIAAg/QAAgUgEgGQgEgHgMAAQgJAAgMAIIAAAsIAVAAIAAAsIh2AAIAAgsIATAAIAAg0IgTAAIAAgtIBhAAIAAASQAcgUAhAAQAdAAAOAPQAPAPAAAhIAAAkIARAAIAAAsg");
	this.shape_32.setTransform(165.575,41.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F68E51").s().p("AhaA9QgQgNAAgSQAAgUAUgMQAUgMAgAAQAdAAAQAHIAAgEQAAgOgCgFQgCgGgHgDQgHgEgLAAQgSAAgKANIg+gGQALgUAWgJQAXgIAqAAIAcABQANAAAKACQAUAEAKAIQAKAHAFAJQADAKAAATIAAAoIATAAIAAAtIhhAAIAAgKQgTAMgiAAQgfAAgRgNgAgaAJQgGAGAAAIQAAAJAGAFQAGAGAJAAQAOAAAIgIIAAgaQgKgFgLAAQgKAAgGAFg");
	this.shape_33.setTransform(141,41.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F68E51").s().p("AhQBIIAAgsIAUAAIAAg0IgUAAIAAgtIBcAAIAAAkQAGgOALgJQALgKAKgDQALgCAUAAIAAA+IgHAAQgYAAgLAEQgMAFgFAHQgEAIAAANIAWAAIAAAsg");
	this.shape_34.setTransform(120.8,41.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F68E51").s().p("AhXBMQgigeAAguQAAgZANgYQANgXAcgQQAKgGAKgDIAWgGQAMgBANAAQA6AAAgAfQAPARAJASQAIATAAATQAAAqghAgQghAgg4gBQg1AAgigdgAgUgtQgHAMAAAhQAAAiAHAMQAHAMANAAQAOAAAHgLQAHgMAAgjQAAghgHgLQgHgMgOgBQgNAAgHAMg");
	this.shape_35.setTransform(97.975,38.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F68E51").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_36.setTransform(77.825,46.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F68E51").s().p("AhQBIIAAgsIAVAAIAAg0IgVAAIAAgtIBdAAIAAAkQAFgOALgJQAKgKALgDQALgCAUAAIAAA+IgGAAQgZAAgLAEQgMAFgFAHQgEAIAAANIAWAAIAAAsg");
	this.shape_37.setTransform(63.45,41.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F68E51").s().p("AAxBmIAAgxIASAAIAAhxIhBCiIggAAIhAigIAABvIARAAIAAAxIhUAAIAAgxIARAAIAAhpIgRAAIAAgxICCAAIAfBPIAghPICCAAIAAAxIgRAAIAABpIARAAIAAAxg");
	this.shape_38.setTransform(36.875,38.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Character
	this.orange = new lib.Orange();
	this.orange.name = "orange";
	this.orange.setTransform(774.35,292.65,0.7538,0.7538,0,0,0,151.1,151.1);

	this.timeline.addTween(cjs.Tween.get(this.orange).wait(4));

	// Frame
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("EALugwbIADMCIAFYFI55ADIsCABAuDFJIAAxaEg37AHzICqAAIABiqIAJxWI0UADEhJbAHzIRgAAIAAOiMAp4AAAIAAEYIREANIgPViEgaZgkZMgvCAAAEgaZgkZIAUYJI7CADEg37AWVIxggKADBa6II8AHAL2sUMAAHAnVEALxgkZMgmKAAAEg1QAFJMAnNAAAIAARMEBJcAbVMg9fgAU");
	this.shape_39.setTransform(480,320);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMBVJAAAMA9uAAAMAAABLwIAAVHMhGqAAAMhMNAAAIAA6RIAAuYIAAz9IAA4Pg");
	this.shape_40.setTransform(480,320);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F0FFFF").s().p("EACyAwcIAO1iIxDgNIAAkYIAAxLIAAxbIAARbMgnNAAAIAJxXIgJRXIgBCqIiqAAIxgAAIRgAAIAAOhMAp4AAAIAAEYIRDANIgOViMhMNAAAIAA6RIAAuXIAAz/IAA4OIAAsCMBVJAAAMA9uAAAMAAABLwMg9egAUMA9eAAUIAAVHgAL+bBMgAIgnVMAAIAnVIo+gHII+AHgEg37AWVIxggKgEg1HgMNI0UACIUUgCIbCgDIgU4JMAmJAAAIAGYFI55ADIsCABIMCgBIZ5gDIgG4FIgCsCIACMCMgmJAAAMgvCAAAMAvCAAAIAUYJgEBJcAbVgAL+bBgAuDWVgEg37AWVIAAuhICqAAIABiqMAnNAAAIAARLgEg37AH0gAuDFKg");
	this.shape_41.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]}).wait(4));

	// stageBackground
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhMjgzjMCZHAAAMAAABnHMiZHAAAg");
	this.shape_42.setTransform(480,320);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000099").s().p("EhMjAzkMAAAhnHMCZHAAAMAAABnHg");
	this.shape_43.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42}]}).wait(4));

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