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


(lib.picklebody = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(0.5,1,1).p("AAACPQAAgLgBgXQgBgtAAhAQAAg/ABgtQABgtAAAAQABAAABAtQABAtAAA/QAABAgBAtQgBAtgBAAQAAAAAAgI");
	this.shape.setTransform(71.6,15.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("AGi5gQAAAVgPAPQgPAPgVAAQgVAAgPgPQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAPAPAAAVgAhl5kQACAXAAAZQAABBgMAuQgMAugRAAQgRAAgMguQgLguAAhBQAAhBALguQAMgtARAAQARAAAMAtQAHAbADAiQAEgDAagCQAfgDAsAAQAsAAAfADQAZACAFADQACAAAAABQAAABgBABQgGACgZACQgfADgsAAQgsAAgfgDQgZgCgFgDQgBAAAAgBQAAAAABgBAAF2sQAAAXgPAQQgQAQgXAAQgWAAgQgQQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAPAQAAAWgAmxnGQAAAhgYAXQgXAYghAAQghAAgYgYQgNgNgGgSQgEgMAAgNQAAgVAJgSQAGgJAIgJQAYgXAhAAQAhAAAXAXQAYAYAAAhgAkzAlQAAALgIAIQgIAIgLAAQgLAAgIgIQgIgIAAgLQAAgLAIgIQAIgIALAAQALAAAIAIQAIAIAAALgAJSkbQAAAdgVAVQgVAVgdAAQgeAAgVgVQgVgVAAgdQAAgeAVgVQAVgVAeAAQAdAAAVAVQAVAVAAAegAEgFeQAAAWgQAQQgPAQgXAAQgWAAgQgQQgQgQAAgWQAAgXAQgQQAQgPAWAAQAXAAAPAPQAQAQAAAXgAIVMPQAAAcgUAUQgUAUgcAAQgcAAgUgUQgUgUAAgcQAAgcAUgUQAUgUAcAAQAcAAAUAUQAUAUAAAcgAirLEQAAAOgKAKQgKAKgOAAQgOAAgKgKQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOgABBVtQAAAQgLAKQgLALgPAAQgQAAgLgLQgJgKAAgQQAAgPAJgLQALgLAQAAQAPAAALALQALALAAAPgAgIabQAAAWgQAQQgQAQgWAAQgXAAgQgQQgQgQAAgWQAAgXAQgQQAQgQAXAAQAWAAAQAQQAQAQAAAXgAGNW7QAAAUgOAOQgOAOgTAAQgUAAgOgOQgOgOAAgUQAAgTAOgOQAOgOAUAAQATAAAOAOQAOAOAAATg");
	this.shape_1.setTransform(60.575,194.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArrnOQAwnzCcmFQDiovE9AAQE+AADhIvQDiIwAAMWQAAMXjiIwQjhIvk+AAQk9AAjiovQjhowAAsXQAAjOAQjA");
	this.shape_2.setTransform(76.875,191.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AhlchQgQgQAAgXQAAgXAQgQQAQgQAXAAQAWAAAQAQQAQAQAAAXQAAAXgQAQQgQAQgWAAQgXAAgQgQgAE8Y8QgOgOAAgTQAAgUAOgOQAOgOAUAAQATAAAOAOQAOAOAAAUQAAATgOAOQgOAOgTAAQgUAAgOgOgAABXnQgJgLAAgPQAAgQAJgLQALgKAQAAQAPAAALAKQALALAAAQQAAAPgLALQgLALgPgBQgQABgLgLgAGhOeQgUgUAAgcQAAgcAUgUQAUgUAcAAQAcAAAUAUQAUAUAAAcQAAAcgUAUQgUAUgcAAQgcAAgUgUgAjlM7QgKgKAAgOQAAgOAKgJQAKgKAOAAQAOAAAKAKQAKAJAAAOQAAAOgKAKQgKALgOgBQgOABgKgLgADEHjQgQgPAAgXQAAgXAQgQQAQgPAWAAQAXAAAPAPQAQAQAAAXQAAAXgQAPQgPAQgXAAQgWAAgQgQgAlhCYQgIgJAAgKQAAgMAIgHQAIgJALABQALgBAIAJQAIAHAAAMQAAAKgIAJQgIAHgLABQgLgBgIgHgAHYiJQgVgWAAgdQAAgeAVgVQAVgUAegBQAdABAVAUQAVAVAAAeQAAAdgVAWQgVAUgdABQgegBgVgUgAo6kvQgNgNgGgRQgEgMAAgOQAAgVAJgRQAGgKAIgIQAYgYAhAAQAhAAAXAYQAYAXAAAhQAAAhgYAXQgXAYghAAQghAAgYgYgAhX0mQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAPAQAAAWQAAAXgPAQQgQAQgXAAQgWAAgQgQgAip1mQgLgtAAhCQAAhBALgtQAMguARAAQARAAAMAuQAHAbADAhIgBACIABABIgBgBIABgCQAEgDAagCQAfgCAsAAQAsAAAfACQAZACAFADIgBgiIgBhtIABhsQABguABABQABgBABAuIABBsIgBBtQgBAtgBAAIgBgIIACgBIgCgCIACACIgCABQgFADgZABQgfAEgsAAQgsAAgfgEQgZgCgFgCQACAWAAAZQAABCgMAtQgMAugRAAQgRAAgMgugAFL3dQgPgOAAgWQAAgUAPgQQAPgOAVAAQAVAAAPAOQAPAQAAAUQAAAWgPAOQgPAPgVABQgVgBgPgPg");
	this.shape_3.setTransform(60.575,184.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336600").s().p("AofVHQjhowAAsXQAAjOAQjAQAGARANAOQAYAXAhAAQAhAAAXgXQAYgYAAghQAAghgYgXQgXgYghAAQghAAgYAYQgIAIgGAKQAwnzCcmFQDiovE9AAQE+AADhIvQDiIwAAMWQAAMXjiIwQjhIvk+AAQk9AAjiovgAkIaTQgQAQAAAWQAAAXAQAQQAQAQAXAAQAWAAAQgQQAQgQAAgXQAAgWgQgQQgQgQgWAAQgXAAgQAQgACZW4QgOAOAAAUQAAATAOAOQAOAOAUAAQATAAAOgOQAOgOAAgTQAAgUgOgOQgOgOgTAAQgUAAgOAOgAihVxQgKALAAAQQAAAPAKALQALALAQAAQAPAAALgLQALgLAAgPQAAgQgLgLQgLgKgPAAQgQAAgLAKgAD+L9QgUAUAAAcQAAAcAUAUQAUAUAcAAQAcAAAUgUQAUgUAAgcQAAgcgUgUQgUgUgcAAQgcAAgUAUgAmILLQgKAKAAAOQAAAOAKAKQAKAKAOAAQAOAAAKgKQAKgKAAgOQAAgOgKgKQgKgKgOAAQgOAAgKAKgAAhFWQgQAQAAAWQAAAXAQAPQAQAQAWAAQAXAAAPgQQAQgPAAgXQAAgWgQgQQgPgQgXAAQgWAAgQAQgAoEAxQgIAIAAALQAAALAIAIQAIAIALAAQALAAAIgIQAIgIAAgLQAAgLgIgIQgIgIgLAAQgLAAgIAIgAE1kvQgVAVAAAdQAAAeAVAVQAVAVAeAAQAdAAAVgVQAVgVAAgeQAAgdgVgVQgVgVgdAAQgeAAgVAVgAj620QgQAQAAAXQAAAWAQAQQAQAQAWAAQAXAAAQgQQAQgQAAgWQAAgXgQgQQgQgQgXAAQgWAAgQAQgAlM6EQgLAuAABBQAABBALAtQAMAuARAAQARAAAMguQAMgtAAhBQAAgagCgWQAFADAZACQAfADAtAAQAsAAAfgDQAZgCAFgDIABAIQABAAABgtIABhtIgBhsQgBgtgBAAQgBAAgBAtIgBBsIABBtIABAiQgFgCgZgDQgfgCgsAAQgtAAgfACQgaADgEADQgDgigHgbQgMgugRAAQgRAAgMAugACo5lQgPAPAAAVQAAAVAPAPQAPAPAVAAQAVAAAPgPQAPgPAAgVQAAgVgPgPQgPgPgVAAQgVAAgPAPg");
	this.shape_4.setTransform(76.875,191.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.picklebody, new cjs.Rectangle(-1,-1,155.8,384.1), null);


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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("ADaAAQAABpgpBQQgIAQgKAOQgCAEgDADQgXAhgaAVQgdAXghAJQgVAGgWAAQgVAAgVgGQghgJgegXQgagVgXghQgCgDgCgEQgKgOgIgQQgphQAAhpQAAhvAvhTQAHgOAJgNQAaglAegWQArggA0gBQACAAABAAQA2AAAtAhQAeAWAZAlQBABcAACBg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF00").s().p("AgpE0QgigJgdgYQgagUgYgiIgEgGQgKgPgHgQQgqhPAAhpQAAhuAvhUQAIgOAIgMQAagmAegWQArgfA0gBIADAAQA2AAAsAgQAfAWAZAmQBABbAACBQAABpgqBPQgHAQgLAPIgEAGQgXAigaAUQgdAYgiAJQgUAGgWgBQgVABgUgGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose_1, new cjs.Rectangle(-22.8,-32.3,45.6,64.69999999999999), null);


(lib.mouth_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AD8gFQgVABgVABQvrAogYnOQgDhBAQhMQCiBZCgA0QHUCbG6ibQCXg0CUhZQAIBMgEBBQgNDYiRBqQAiAyAhA5QBzDIAsCjQAXBXgEAxQgDArgZAPQguAahfhUQgQgOgQgRQh3h4h0jIQgyhXglhQIEWhY");
	this.shape.setTransform(-0.0023,-0.0087);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("ABcEPIgggeQh2h4h0jHQgyhYglhQIEVhZQAiAzAhA5QBzDIAsCjQAXBWgEAxQgDAsgZAOQgLAHgOAAQgsAAhIhBg");
	this.shape_1.setTransform(55.6541,23.1163);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AsGiNQgDhBAQhMQCiBZCgA0QHTCaG7iaQCXg0CUhZQAIBMgEBBQgNDXiRBqIkWBYIgrAKIgqACQhSADhMAAQtPAAgWmog");
	this.shape_2.setTransform(-4.3147,-28.4043);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth_1, new cjs.Rectangle(-82.8,-57.7,165.7,115.4), null);


(lib.hat_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AMajWQASAHARAHQCkBHAABaQAABaikBHQg3AXhIAVQkiBVmcAAQmbAAkjhVQiugzhGhAQgugrAAgvQAAgwAugqQAdgbAvgYQBCgiBmgeQAKgDAJgDAMajWQhEgVgZgIQgbgJAcAIQAyAOAqAQg");
	this.shape.setTransform(0,54.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AJ8k1QAAADgBAEQgVBTinA+Qi+BGkMAAQkNAAi/hGQimg+gVhTQgBgEgBgDIAALRIAABkAJ8lYIAAAjIAALHIAaCEAJ8lYQACAIAAAJQAAAJgCAJAqUlYQAPhYCuhBQAfgLAggJQCrgyDiAAQDhAACrAyQAgAJAeALQCuBBAPBYAqUlYIAAAjQgBgJAAgJQAAgIABgJgAqUGcQLBE9JPlH");
	this.shape_1.setTransform(3.975,-23.0606);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AqVBlIAAjHIAAhkQLBE7JPlFIAaCDIgBAAIgCAAQgVgGAUAHIAAAAIABAAIABAAIABABIABAAQh9CrguAFQkoBskfAAQkgAAkYhsgAKUhLIgBgBIgBAAIgBAAIAAAAQgUgHAVAGIACAAIABAAIAAACIgBAAgAKVhNIAAAAg");
	this.shape_2.setTransform(4.05,38.0625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Aq+LKQiugzhGhAQgugrAAgwQAAgwAugqQAdgbAwgYQBCgiBlgeIAUgGIA+gQIAADIQIvDZJQjZQAugFB8isIABgBQAyAOAqAQIhdgdIBdAdQASAHARAHQCkBHAABaQAABbikBHQg3AXhIAVQkjBVmbAAQmaAAkkhVgApsC1IAArRIACAHQAUBTCnA+QC/BGEMAAQEMAAC/hGQCmg+AVhTIACgHIAALHQksCmlKAAQk/AAlbicgAAck+QkMAAi/hGQing+gUhTIgCgHIAAgjQAPhYCuhBQAegLAggJQCsgyDhAAQDhAACsAyQAgAJAeALQCuBBAPBYIAAAjIAAgjQABAIABAJQgBAJgBAJIgCAHQgVBTimA+Qi/BGkMAAIAAAAgApuouIACgRIAAAjQgCgJAAgJgApso/g");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat_1, new cjs.Rectangle(-100.3,-80.8,200.6,161.7), null);


(lib.goofyface_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AgOhkQANgBALAAQBIgHBGgPQBrgXBngrQAEgCAFgCQAQgHAPgGQDghdBHgDQAFgBAEABQAUABADALQAKAkgdAwQgEAGgEAHQgIAMgLANQg8BJhAA9QgUATgUASQiBBxinBTQgmASgkAQQhIAehDASQgFABgEABQhkAYhagEQhMgDhCgRQjgg6hqjWQgKgTgIgVQgdhFgOhPIgJhVIBXAtQAMAGAMAFQAPAGAQAHQBYAkBjAXQB4AbByAIQAgACAfAAIAACzIg/AAIAAi1IAAgOACYh7IAAC8IimAAIAAilgAhphxIAAAQQAuAAAtgD");
	this.shape.setTransform(0.0032,0.0406);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai9EvQhMgDhCgRQjgg6hqjWQgKgTgIgVQgdhFgOhPIgJhVIBXAtIAYALIAfANQBYAkBjAXQB4AbByAIIAAC1IA/AAIAAizQAuAAAtgDIAAClICmAAIAAi8QBrgXBngrIAJgEIAfgNQDghdBHgDIAJAAQAUABADALQAKAkgdAwIgIANQgIAMgLANQg8BJhAA9IgoAlQiBBxinBTQgmASgkAQQhIAehDASIgJACQhVAVhPAAIgagBg");
	this.shape_1.setTransform(0.0032,0.0406);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.goofyface_1, new cjs.Rectangle(-74.2,-31.3,148.4,62.7), null);


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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AFVF+QgYgBgXgIQg8gXguhQQhAhwAAieQAAgxAHguQACgSAEgSQAPhGAeg5QADgGADgFQABgCABgBQAKgRALgPQA5hNBMAAQBMAAA5BNQAKAPALARQAAABABACQADAFADAGQAfA5APBGQAEASACASQAHAuAAAxQAACehBBwQgtBQg8AXQgXAIgYABAIkgyQAAA0gmAlQgmAmg1AAQg1AAgmgmQglglAAg0QAAgYAHgVQAHgTAOgRQAEgFAFgFQAmgmA1AAQA1AAAmAmQAFAFAEAFQAOARAHATQAIAVAAAYgAlaF+QgZgBgWgIQg8gXguhQQhAhwAAieQAAhGANg9QAPhGAeg5QADgGADgFQABgCABgBQAKgRALgPQA5hNBMAAQBMAAA5BNQAKAPALARQAAABABACQADAFADAGQAfA5APBGQAEASACASQAHAuAAAxQAACehBBwQgtBQg8AXQgXAIgYABAjGiSQAAAIgBAHQgEASgPAPQgCACgBABQgTARgaAAQgZAAgTgRQgCgBgCgCQgOgPgEgSQgCgHAAgIQAAgcAUgUQAUgUAcAAQAcAAAUAUQAUAUAAAcg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADeBsQgmglAAg1QAAgXAIgVQAHgTAOgRIAJgKQAmgmA1AAQA1AAAlAmIAKAKQANARAIATQAHAVAAAXQAAA1gmAlQglAmg1AAQg1AAgmgmgAmggaIgEgDQgPgPgEgSQgBgHAAgIQAAgcAUgUQAUgUAcAAQAcAAAUAUQAUAUAAAcQAAAIgCAHQgEASgOAPIgEADQgTARgZAAQgaAAgSgRg");
	this.shape_1.setTransform(10.675,-6.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes1, new cjs.Rectangle(-57.3,-39.1,114.69999999999999,78.30000000000001), null);


(lib.eyes_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AG9ASQAAAVgRAOQgQAPgXAAQgXAAgRgPQgQgOAAgVQAAgUAQgPQARgOAXAAQAXAAAQAOQARAPAAAUgAFVF+QhZgChAhuQhAhwAAieQAAidBAhwQABgCABgBQAKgRALgPQAIgKAIgKQA0g5BBAAQBBAAA0A5QAIAKAIAKQAKAPALARQAAABABACQBBBwAACdQAACehBBwQg/BuhZACAlaF+QhZgChAhuQhAhwAAieQAAidBAhwQABgCABgBQAKgRALgPQAIgKAIgKQA0g5BBAAQBBAAA0A5QAIAKAIAKQAKAPALARQAAABABACQBBBwAACdQAACehBBwQg/BuhZACAjyASQAAAVgRAOQgQAPgXAAQgXAAgRgPQgQgOAAgVQAAgUAQgPQARgOAXAAQAXAAAQAOQARAPAAAUg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AEwAjQgQgOAAgVQAAgUAQgOQARgPAXAAQAXAAAQAPQARAOAAAUQAAAVgRAOQgQAPgXAAQgXAAgRgPgAl/AjQgQgOAAgVQAAgUAQgOQARgPAXAAQAXAAAQAPQARAOAAAUQAAAVgRAOQgQAPgXAAQgXAAgRgPg");
	this.shape_1.setTransform(4.525,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes_2, new cjs.Rectangle(-57.3,-39.1,114.69999999999999,78.30000000000001), null);


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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AB3CGQHOgiFSBeIAAkqgAAGCpQnAhzldAhIh/kYg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB3CFIMgjsIAAEpQlShenOAhgAsXBWIh/kXIOcFpQnAhyldAgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrows_1, new cjs.Rectangle(-92.9,-20.4,185.8,40.8), null);


(lib.rectangleflathitarea = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E7F2F6").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-9,68,18);


(lib.rectangleflatpurple = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#484848").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape.setTransform(11.75,1.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#484848").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.175,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#484848").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_2.setTransform(1.275,0.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#484848").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_3.setTransform(-3.925,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#484848").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_4.setTransform(-10.025,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape_5.setTransform(11.75,1.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(6.175,1.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_7.setTransform(1.275,0.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_8.setTransform(-3.925,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_9.setTransform(-10.025,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// center outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E3BCF5").ss(1,1,1).p("AFZheIAAC9IqxAAIAAi9g");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// center box
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2C4F7").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_11.setTransform(0,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlYBfIAAi9IKxAAIAAC9g");
	this.shape_12.setTransform(0,-0.1184,0.9855,0.9474);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6F1595").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_13.setTransform(0,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// outer box
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#E3BCF5").ss(1,1,1).p("AF3h8IAAD5IrtAAIAAj5g");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFyh3IAADvIrjAAIAAjvg");
	this.shape_15.setTransform(0,0,1.0135,1.0417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#6F1595").ss(1,1,1).p("AF3h8IAAD5IrtAAIAAj5g");

	this.instance = new lib.rectangleflathitarea("synched",0);
	this.instance.setTransform(0,0,1.103,1.3889);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-36,-11,72,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-36, y:-11, w:72, h:22});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-13.5,77,27);


(lib.rectangleflatdarkblue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#484848").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape.setTransform(11.75,1.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#484848").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.175,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#484848").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_2.setTransform(1.275,0.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#484848").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_3.setTransform(-3.925,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#484848").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_4.setTransform(-10.025,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape_5.setTransform(11.75,1.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(6.175,1.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_7.setTransform(1.275,0.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_8.setTransform(-3.925,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_9.setTransform(-10.025,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// center outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFZBfIqxAAIAAi9IKxAAg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// center box
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9A9BFE").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_11.setTransform(0,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlYBfIAAi9IKxAAIAAC9g");
	this.shape_12.setTransform(0,-0.1184,0.9855,0.9474);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3637FC").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_13.setTransform(0,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// outer box
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#7878FE").ss(1,1,1).p("AF3B9IrtAAIAAj5ILtAAg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFyB4IrjAAIAAjvILjAAg");
	this.shape_15.setTransform(0,0,1.0135,1.0417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#3637FC").ss(1,1,1).p("AF3B9IrtAAIAAj5ILtAAg");

	this.instance = new lib.rectangleflathitarea("synched",0);
	this.instance.setTransform(0,0,1.103,1.3889);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-36,-11,72,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-36, y:-11, w:72, h:22});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-13.5,77,27);


(lib.rectangleflatblue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape.setTransform(11.75,1.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.175,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_2.setTransform(1.275,0.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_3.setTransform(-3.925,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_4.setTransform(-10.025,0.375);

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

	// center outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E7F2F6").ss(1,1,1).p("AFZheIAAC9IqxAAIAAi9g");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// center box
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F2F6").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_11.setTransform(0,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlYBfIAAi9IKxAAIAAC9g");
	this.shape_12.setTransform(0,-0.1184,0.9855,0.9474);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D8BB2").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_13.setTransform(0,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// outer box
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#B2D8E8").ss(1,1,1).p("AF3h8IAAD5IrtAAIAAj5g");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFyh3IAADvIrjAAIAAjvg");
	this.shape_15.setTransform(0,0,1.0135,1.0417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#2D8BB2").ss(1,1,1).p("AF3h8IAAD5IrtAAIAAj5g");

	this.instance = new lib.rectangleflathitarea("synched",0);
	this.instance.setTransform(0,0,1.103,1.3889);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-36,-11,72,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-36, y:-11, w:72, h:22});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-13.5,77,27);


// stage content:
(lib.MPHFinalMZarco = function(mode,startPosition,loop,reversed) {
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
	// timeline functions:
	this.frame_0 = function() {
		this.Face1_btn.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eyes1.x = 110;
			this.eyes1.y = 244;
			this.mouth_1.x = 113;
			this.mouth_1.y = 417;
			this.eyebrows_1.x = 101;
			this.eyebrows_1.y = 191;
		
		}
		 
		this.Face2_btn.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.hat_1.x = 109;
			this.hat_1.y = 146;
			this.eyes_2.x = 110;
			this.eyes_2.y = 252;
			this.nose_1.x = 106;
			this.nose_1.y = 303;
			this.goofyface_1.x = 110;
			this.goofyface_1.y = 400;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// title 
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7BJQACgSALgPQAKgQAdgVQAQgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgGAAgGAFQgFAFgBAMIgogDQACgRAHgJQAGgKALgFQAMgFATAAQAVAAALAFQAMAFAHAKQAGAKAAAMQAAANgHAMQgIALgUAOIgQAMIgJAIIA9AAIAAAhg");
	this.shape.setTransform(234.55,62.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6BJQACgSAKgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgEgFgIAAQgHAAgFAFQgEAFgCAMIgogDQADgRAGgJQAGgKAMgFQALgFATAAQAVAAAMAFQALAFAHAKQAGAKABAMQAAANgIAMQgHALgVAOIgQAMIgJAIIA+AAIAAAhg");
	this.shape_1.setTransform(221.2,62.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcBEQgLgFgIgMQgEgHgEgOQgDgOAAgQQABgoAPgRQAOgQAdAAQAOAAAKAEQAJADAGAGQAGAGADAGQAEAGACAJQADAPAAASQABAmgNASQgNASghAAQgRAAgLgGgAgNglQgFAKAAAbQAAAbAFAKQAFAKAIAAQAGAAAFgFQAEgDACgKQACgJAAgUQAAgbgFgKQgEgKgKAAQgJAAgEAKg");
	this.shape_2.setTransform(208,62.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BJQABgSALgPQAKgQAdgVQAQgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgGAAgGAFQgFAFgBAMIgogDQACgRAHgJQAGgKALgFQAMgFATAAQAVAAALAFQAMAFAHAKQAGAKAAAMQAAANgHAMQgIALgUAOIgQAMIgJAIIA9AAIAAAhg");
	this.shape_3.setTransform(194.5,62.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgzBGIgDgbQAIACALAAQAHAAAEgDQAEgDADgIIgrhnIAqAAIAUBFIAUhFIAnAAIgpBuQgHATgHAGQgKAKgVAAQgIAAgSgDg");
	this.shape_4.setTransform(175.325,66.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_5.setTransform(162.475,64.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAtBHIAAhsIgdBsIgfAAIgchsIAABsIgkAAIAAiOIA6AAIAWBWIAVhWIA7AAIAACOg");
	this.shape_6.setTransform(146.35,62.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKBFQgGgEgEgIQgDgIAAgRIAAgjIgPAAIAAgdIAPAAIAAgUIAmgUIAAAoIAWAAIAAAdIgWAAIAAAjQABAHAAACQADADAFAAQAEAAAIgCIADAbQgPAEgMAAQgPAAgHgEg");
	this.shape_7.setTransform(125.8,63.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoA1IAAhnIAlAAIAAARQAFgLAFgEQAGgEAJAAQAIAAALAGIgNAcQgHgDgEAAQgHAAgFAGQgFAKAAAXIAAAjg");
	this.shape_8.setTransform(116.775,64.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_9.setTransform(104.775,64.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_10.setTransform(85.025,66.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAwA1IAAg6QAAgHgDgEQgEgFgGAAQgGAAgFAFQgEAFAAALIAAA1IgnAAIAAg4IgBgKQgBgEgDgBQgEgDgEAAQgGAAgFAFQgFAGAAAKIAAA1IgnAAIAAhnIAlAAIAAAQQAIgKAIgEQAIgEAMAAQAMAAAGAFQAHADAGAKQAIgKAIgFQAIgDAMAAQAQAAAJAKQAKAKAAAVIAABAg");
	this.shape_11.setTransform(68.15,64.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_12.setTransform(51.425,64.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggBDQgPgHgLgRQgLgRAAgaQABgjASgTQAUgTAhAAQAbAAAQALQAPALAHAWIgnAJQgCgHgCgDQgEgEgFgEQgFgCgHAAQgOAAgIAMQgGAJAAATQAAAXAHAJQAIAJALAAQANAAAGgIQAHgGADgOIAmALQgDARgJALQgIALgMAGQgNAFgTAAQgWAAgPgHg");
	this.shape_13.setTransform(37.1,62.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAQgPQAPgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhPAAQACAJAEAFQAFAHAJAAQAGAAAFgDIAHgHIAnAEQgJAQgNAGQgMAHgYAAQgUAAgLgGgAgOgWQgEAEgBAKIAnAAQgCgMgFgFQgEgFgIAAQgJAAgGAIg");
	this.shape_14.setTransform(131.4,38.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTBHIAAiNIAnAAIAACNg");
	this.shape_15.setTransform(121.375,36.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAQBHIgUgpIgPAOIAAAbIgpAAIAAiNIApAAIAABJIAdgiIAxAAIgmAjIAoBDg");
	this.shape_16.setTransform(111.975,36.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAzQgLgDgIgHQgIgHgEgJQgFgJAAgQQAAgPAGgKQADgIAHgGQAIgGAHgEQAMgEARAAQAZAAANAJQANAJAGARIgmAFQgBgGgFgEQgFgDgHAAQgJAAgGAHQgGAHAAANQAAANAGAHQAGAGAIAAQAIAAAFgEQAGgEACgIIAmAEQgDAMgHAJQgHAJgMAEQgKAFgSAAQgPAAgLgDg");
	this.shape_17.setTransform(98.4,38.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTBHIAAhmIAnAAIAABmgAgTgrIAAgbIAnAAIAAAbg");
	this.shape_18.setTransform(88.375,36.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_19.setTransform(78.625,40.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAUIAAgnIApAAIAAAng");
	this.shape_20.setTransform(61.725,42.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgoA1IAAhnIAlAAIAAARQAFgLAFgEQAGgEAJAAQAIAAALAGIgNAcQgHgDgEAAQgHAAgFAGQgFAKAAAXIAAAjg");
	this.shape_21.setTransform(56.375,38.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAtBHIAAhsIgcBsIggAAIgchsIAABsIgkAAIAAiNIA6AAIAWBVIAVhVIA7AAIAACNg");
	this.shape_22.setTransform(41.6,36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Body Parts
	this.goofyface_1 = new lib.goofyface_1();
	this.goofyface_1.name = "goofyface_1";
	this.goofyface_1.setTransform(797.45,434.1);

	this.nose_1 = new lib.nose_1();
	this.nose_1.name = "nose_1";
	this.nose_1.setTransform(822.85,338.9);

	this.eyes_2 = new lib.eyes_2();
	this.eyes_2.name = "eyes_2";
	this.eyes_2.setTransform(814.25,252.15);

	this.hat_1 = new lib.hat_1();
	this.hat_1.name = "hat_1";
	this.hat_1.setTransform(822.3,89.85);

	this.mouth_1 = new lib.mouth_1();
	this.mouth_1.name = "mouth_1";
	this.mouth_1.setTransform(572,347.05);

	this.eyebrows_1 = new lib.eyebrows_1();
	this.eyebrows_1.name = "eyebrows_1";
	this.eyebrows_1.setTransform(561.95,85.75);

	this.instance = new lib.rectangleflatpurple();
	this.instance.setTransform(408.95,587.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.rectangleflatpurple(), 3);

	this.Face2_btn = new lib.rectangleflatblue();
	this.Face2_btn.name = "Face2_btn";
	this.Face2_btn.setTransform(305.6,587.6);
	new cjs.ButtonHelper(this.Face2_btn, 0, 1, 2, false, new lib.rectangleflatblue(), 3);

	this.Face1_btn = new lib.rectangleflatdarkblue();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(204.05,583.05);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 2, false, new lib.rectangleflatdarkblue(), 3);

	this.eyes1 = new lib.eyes1();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(573.6,179.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes1},{t:this.Face1_btn},{t:this.Face2_btn},{t:this.instance},{t:this.eyebrows_1},{t:this.mouth_1},{t:this.hat_1},{t:this.eyes_2},{t:this.nose_1},{t:this.goofyface_1}]}).to({state:[{t:this.eyes1},{t:this.Face1_btn},{t:this.Face2_btn},{t:this.instance},{t:this.eyebrows_1},{t:this.mouth_1},{t:this.hat_1},{t:this.eyes_2},{t:this.nose_1},{t:this.goofyface_1}]},1).wait(1));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);
	this.Face2_btn.addEventListener("tick", AdobeAn.handleFilterCache);
	this.Face1_btn.addEventListener("tick", AdobeAn.handleFilterCache);

	// Character
	this.instance_1 = new lib.picklebody();
	this.instance_1.setTransform(106.95,338.9,1,1,0,0,0,76.9,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Frame
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_23.setTransform(480,320);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_24.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(2));

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