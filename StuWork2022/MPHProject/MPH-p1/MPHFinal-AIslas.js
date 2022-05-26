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


(lib.wing2r = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgOAoIACgBQB5AEBghLQBDg0AdhIIAAAAQAQgoAEguQAHhJgZg/QgBgBgBgCQgTgvgmgqQgfgjglgYQhEgshYgIQiGgNhqBSQhLA7gbBTQAeA3AZA4IG7kOADGCIQhMhUh0gKQgKgBgKgBAiIB0QAYBpALBoIEri9Ai4g0QAdBUATBUIB6hMAEOFBQADhmhIhQQgBgCgCgBAheH1QgBAkgCAkQAaAGAdADQB2ALBahIQBchHALhwQABgJAAgIAi4g0IHnlGAkLkDQAwBoAjBnAheH1IFsi0AhlFFQAIBYgBBY");
	this.shape.setTransform(32.2754,58.3596);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhlFuIEri9IADADQBIBQgDBmIlsC0QABhXgIhZgAi4gLIHnlFQAZA/gHBJQgEAtgQAoIAAABQgdBHhDA0QhgBLh5gEIgCACIh6BMQgThVgdhUgAlClJQAbhTBLg6QBqhSCGAMQBYAIBEAsIm7EOQgZg3geg4g");
	this.shape_1.setTransform(32.2754,54.2173);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("Ag8IsQgdgDgagHQADgkAAgkIFsi0IgBARQgKBwhcBIQhPA+hkAAIgegBgAiZBaIB5hMIAVABQB0ALBMBTIksC9QgKhogYhogAkckeIG6kOQAmAZAfAjQAlAqAUAvIABADInmFFQgjhngwhog");
	this.shape_2.setTransform(34.025,61.0422);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wing2r, new cjs.Rectangle(-1,-1,66.6,118.8), null);


(lib.wing2l = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AivoRQBEgsBYgIQCGgNBqBSQBLA7AbBTQgeA3gZA4gAAPAoIgCgBQh5AEhghLQhDg0gdhIIAAAAQgQgogEguQgHhJAZg/QABgBABgCQATgvAmgqQAfgjAlgYAkNFBQgDhmBIhQQABgCACgBQBMhUB0gKQAKgBAKgBABfH1QABAkACAkQgaAGgdADQh2ALhahIQhchHgLhwQgBgJAAgIAC5g0QgdBUgTBUQgYBpgLBoIkri9AC5g0InnlGACJB0Ih6hMAEMkDQgwBogjBnABfH1Ilsi0ABmFFQgIBYABBY");
	this.shape.setTransform(32.2746,58.3596);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AiUHvQhchIgKhwIgBgRIFsC0QAAAkADAkQgaAHgdADIgeABQhkAAhPg+gAi0BtQBMhTB0gLIAVgBIB5BMQgYBogKBogAkcmUIABgDQAUgvAlgqQAfgjAmgZIG6EOQgwBogjBng");
	this.shape_1.setTransform(30.525,61.0422);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AkNFqQgDhmBIhQIADgDIErC9QgIBZABBXgAAPBSIgCgCQh5AEhghLQhDg0gdhHIAAgBQgQgogEgtQgHhJAZg/IHnFFQgdBUgTBVgAivnoQBEgsBYgIQCGgMBqBSQBLA6AbBTQgeA4gZA3g");
	this.shape_2.setTransform(32.2746,54.2173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wing2l, new cjs.Rectangle(-1,-1,66.6,118.8), null);


(lib.wingright = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmFgcIhIkCQFgAvFBjYQAPgLAQgLQADgCACgCQASgMASgOQgHANgFANQgBACgBACQgBAEgCAEQgCAHgCAHQgjBmAhBpQAQAyAYAkQAGAJAHAIQADAFAEAEAEGhCQAggaAeggQgpAVgVAlQgOALgPAKQj/C2lvilIBLENAEGhCQgKASgFAVQgQBFAqA3QApA2AuARQgzA8ABBHQAAA6AhAsQAHAJAIAJQAxA0A3ARQgxAOgyAEQhBAFhCgFQhCgEhBgLQhBgLg/gPQhCgRhAgYQhAgYg3gnQgDgCgDgCIggh0AFoCoQkODzmUiq");
	this.shape.setTransform(46.175,50.8316);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ADoHrQhCgFhBgLQhBgKg/gQQhCgQhAgYQhAgYg3gnIgGgEIggh1QCnBHCPAAIABAAIAAAAQDKAACeiMIACgCIABgCQgzA9ABBHQAAA6AhArIAPATQAxAzA3ARQgxAOgyAEQgiADgjAAQgfAAgfgCgAgEEoQiPAAinhHIhLkNIACACIAGACQCqBKCSABIABAAIAAAAQCjgBCGheIAOASQgQBEAqA3QApA2AuARIgBACIgCACQieCMjKAAIAAAAIgBAAgAhBAjQiSgBiqhKIgGgCIgCgCIhIkBQFgAvFBjZIAfgVIAYAIIgEANQgjBmAhBpQAQAyAYAkIANASIAHAIIADAMQgpAVgVAlIgdAWQiGBeijABIAAAAIgBAAg");
	this.shape_1.setTransform(46.175,52.3566);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wingright, new cjs.Rectangle(-1,-1,94.4,103.7), null);


(lib.wingleft = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AGGgcIBIkCQlgAvlBjYQgPgLgQgLQgDgCgCgCQgSgMgSgOQAHANAFANQABACABACQABAEACAEQACAHACAHQAjBmghBpQgQAygYAkQgGAJgHAIQgDAFgEAEAkFhCQgggageggQApAVAVAlQAKASAFAVQAQBFgqA3QgpA2guARQAzA8gBBHQAAA6ghAsQgHAJgIAJQgxA0g3ARQAxAOAyAEQBBAFBCgFQBCgEBBgLQBBgLA/gPQBCgRBAgYQBAgYA3gnQADgCADgCIAgh0AkFhCQAOALAPAKQD/C2FvilIhLENAlnCoQEODzGUiq");
	this.shape.setTransform(46.175,50.8316);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AlqHqQgygEgxgOQA3gRAxgzIAPgTQAhgrAAg6QABhHgzg9IABACIACACQCeCMDKAAIAAAAIABAAQCPAACnhHIggB1IgGAEQg3AnhAAYQhAAYhCAQQg/AQhBAKQhBALhCAFQgfACgfAAQgjAAgigDgAAEEoQjKAAieiMIgCgCIgBgCQAugRApg2QAqg3gQhEIAOgSQCGBeCjABIAAAAIABAAQCOgBCmhGIAAAAIAIgEIAGgCIACgCIhLENQinBHiPAAIgBAAIAAAAgAE7DhgABBAjQijgBiGheIgdgWQgVglgpgVIADgMIAHgIIANgSQAYgkAQgyQAhhpgjhmIgEgNIAYgIIAfAVQFBDZFggvIhIEBIgCACIgGACIgIAEIAAAAQimBGiOABIgBAAIAAAAg");
	this.shape_1.setTransform(46.175,52.3566);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wingleft, new cjs.Rectangle(-1,-1,94.4,103.7), null);


(lib.sunflower = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AC2gjQADAAADAAQAgAAAWgUQAXgUAfgxQAegwgWgUQgWgVg+AVQg/AUgWAUQgKAJgFAKABpiQQAHgEAGgGQAXgUAAgcQAAgEgBgMQAAgMgIg2QgJg2gYgCQgYAAgYAZQgXAZgTAeQgUAeAAAcQAAAOAGAMQgEAAgDAAQgeABgaAIAC2gjQgLgygpgmQgFgFgFgFQgIgGgHgFQgwggg+AAACsBLQAPghAAgmQAAgMgCgMQgBgIgCgHACsBLQACADADADQAXAUAfAAQAgAAA3gJQA3gKgMggQgMgggrgaQgrgbggAAQgaAAgUAPABSCmQAAACAAABQAAAdAXAUQAWAUAnALQAnALAoAFQAnAFgZhBQgZhAgWgUQgWgUggAAQAAAAgBAAQAJgNAGgNABSCmQAagNAWgVQAQgOALgRAgMiwQABgGAAgGQAAgcgXgXQgXgXgvgnQgugogHA/QgGA+AAAcQAAAcAWAUQAFAFAEADQgBACgDACQgDACgCADQgpAmgLAxQgCAIgBAIQgCAMAAAMQAAAJAJAtQAGAUALARAhRijQgbALgYAUAiIiAQgFgNgMgLQgWgUgjgDQgigEgmgBQgmAAATA1QASA0AWAUQAXAUAfAAQAHAAAHgBAjEgUQgMgEgOAAQgfAAgbAUQgbATgoAeQgoAeBDATQBDASAfAAQAdAAAVgRQABACABACQgTAEgQANQgWAVgQA0QgQA0AWAUQAWAUAwgYQAvgYAXgTQATgSACgWQAIACAIACQAZAHAeAAQAoAAAigNQAHgDAGgDAiqBjQAMARARAQQAdAcAkAOAg8CyQgIAOAAASQAAAdAWA0QAWA0AfgCQAfgCAWgyQAWgyAAgdQAAgVgNgR");
	this.shape.setTransform(36.3098,34.0782);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("Ag2CuIgQgEQgkgOgdgcQgRgQgMgRIgCgEQgLgRgGgUQgJgtAAgJQAAgMACgMIADgQQALgxApgmIAFgFIAEgEQAYgUAbgLIANgEQAagIAegBIAGAAQA/AAAwAgIAPALIAKAKQApAmALAyIADAPQACAMAAAMQAAAmgPAhQgGANgJANQgLARgQAOQgWAVgaANIgNAGQgiANgpAAQgdAAgZgHg");
	this.shape_1.setTransform(35.725,34.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AguEjQgWg0AAgdQAAgSAIgOQAZAHAeAAQAoAAAigNQANARAAAVQAAAdgWAyQgWAygfACIgCAAQgeAAgVgygAjtEFQgWgUAQg0QAQg0AWgVQAQgNATgEQAMARARAQQAdAcAkAOQgCAWgTASQgXATgvAYQgaANgSAAQgQAAgKgJgAD1EJQgogFgngLQgngLgWgUQgXgUAAgdIAAgDQAagNAWgVQAQgOALgRIABAAQAgAAAWAUQAWAUAZBAQAXA8gfAAIgGAAgAlABeQhDgTAogeIBDgxQAbgUAfAAQAOAAAMAEQgCAMAAAMQAAAJAJAtQAGAUALARQgVARgdAAQgfAAhDgSgACxBRIgFgGQAPghAAgmQAAgMgCgMQAUgPAaAAQAgAAArAbQArAaAMAgQAMAgg3AKQg3AJggAAQgfAAgXgUgAC2gjQgLgygpgmIgKgKQAFgKAKgJQAWgUA/gUQA+gVAWAVQAWAUgeAwQgfAxgXAUQgWAUggAAIgGAAgAkFg3QgWgUgSg0QgTg1AmAAQAmABAiAEQAjADAWAUQAMALAFANIgFAFQgpAmgLAxIgOABQgfAAgXgUgAiNiMQgWgUAAgcQAAgcAGg+QAHg/AuAoQAvAnAXAXQAXAXAAAcIgBAMQgeABgaAIIgNAEQgbALgYAUIgJgIgAgFiwQgGgMAAgOQAAgcAUgeQATgeAXgZQAYgZAYAAQAYACAJA2QAIA2AAAMIABAQQAAAcgXAUQgGAGgHAEQgwggg+AAg");
	this.shape_2.setTransform(36.3098,34.0782);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sunflower, new cjs.Rectangle(-1.5,-1.5,75.6,71.2), null);


(lib.sadmouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AFEgJQgHArAzA/AFwhBQgmAXgGAhAlvhWQAbAmAEApQAGA1glA5AlQgHQE+i+FWC8");
	this.shape.setTransform(36.8,10.3562);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sadmouth, new cjs.Rectangle(-2.5,-2.5,78.6,25.7), null);


(lib.moutthh = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AjIBzQBDA0BaAMQCIATBuhVQAFgDAFgEAjIBzQAlgOAngNQA0gTA8gCQB6gEBlAqQABABABAAAjIBzQgjgbgcglQhUhtAPh7QAhBnCDAtQCGAuCKglQCPgmBYg5QgVCOhlBT");
	this.shape.setTransform(33.5614,18.2411);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkHBVQhUhtAPh8QAhBoCDAsQCGAuCKglQCPglBYg5QgVCNhlBTIgCAAIACAAIgKAIIAIgIQhlgrh6AFQg8ACg0ATIhMAaQgjgagcglg");
	this.shape_1.setTransform(33.5614,14.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCCFF").s().p("AgwA3QhagMhDg0IBMgbQA1gSA7gDQB6gEBlAqIgHAJQhbBEhsAAQgXAAgZgDg");
	this.shape_2.setTransform(34.05,30.6737);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,73.1,42.5);


(lib.mouthi = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AFUjGQg6BVATBcQAJAtAeAxAlTimQAsBSABA8QABA+guAoAhzDGQgHgBgFgDQgcgLgTgYIAAgBIgKgOQgKgSgHgXQgIgcAAgeQAAgJAAgKIDUA5QgDALgEALQgKAdgRAZQgMATgUAKQgGAEgIACQgRAGgQgCQgCABgBAAIgCgBQAAAAAAAAgAh7A7IAICLAkmgYQE2CtEdiq");
	this.shape.setTransform(34,19.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF99FF").s().p("AgHBWIgCAAIgCAAIgBgBIgHiJIAHCJIgLgDQgcgLgTgZIAAgBIgKgOQgKgRgHgWQgIgcAAgeIAAgTIDTA5IgHAVQgKAdgRAZQgNATgTAKQgGADgIADQgNAEgMAAIgIAAg");
	this.shape_1.setTransform(23.6486,31.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,73,44.7);


(lib.mouthhh = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAg+IAAB9");
	this.shape.setTransform(13.175,40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("ABoCNQAag9AAhQQAAgZgDgYQgHhCgcgyQgmhFg2AAQg1AAgmBFQgcAygHBCQgDAYAAAZQAABTAcA/QAzgkA0AAQAyAAA0AfgAhlCSQAFAKAFAKQAmBFA1AAQABAAABAAQA1gBAlhEQAGgMAGgNAh+gxID9AA");
	this.shape_1.setTransform(12.975,23.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AABA/gAAAA/Qg2AAgmhEIgKgVQAzgjA0AAQAygBA0AgIgMAZQglBCg1ACIAAh8IAAB8IgBAAg");
	this.shape_2.setTransform(13.075,40.7996);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah+BdQAHhCAcgxQAmhFA1gBQA2ABAlBFQAcAxAIBCg");
	this.shape_3.setTransform(13,9.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCCFF").s().p("AiBguQAAgbADgYID9AAQADAYAAAbQAABPgaA8Qg0gfgyABQg0AAgzAjQgcg+AAhSg");
	this.shape_4.setTransform(12.975,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouthhh, new cjs.Rectangle(-2.5,-2.5,31,52.1), null);


(lib.Head2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AMMo3QAAh8gxgyI22AAQgwAyAAB8QAAIKDwGLQDvGLFBgDQFBgEDbmIQDbmHAAoKg");
	this.shape.setTransform(77.975,74.1765);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCFF").s().p("AobFeQjwmLAAoKQAAh8AwgyIW2AAQAxAyAAB8QAAIKjbGHQjbGIlBAEIgGAAQk9AAjtmIg");
	this.shape_1.setTransform(77.975,74.1765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,161,153.4);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AMMo3QAAh8gxgyI22AAQgwAyAAB8QAAIKDwGLQDvGLFBgDQFBgEDbmIQDbmHAAoKg");
	this.shape.setTransform(77.975,74.1765);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AobFeQjwmLAAoKQAAh8AwgyIW2AAQAxAyAAB8QAAIKjbGHQjbGIlBAEIgGAAQk9AAjtmIg");
	this.shape_1.setTransform(77.975,74.1765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,161,153.4);


(lib.eyei = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAliGQAAgggXgWQgVgWggAAQggAAgWAWQgXAWAAAgQAAAfAXAWQAWAWAgAAQAgAAAVgWQAXgWAAgfgAgIC7QAxgEAkg+QAnhBAAhbQAAhcgnhBQgdgygmgMQgLgEgNAAQgNAAgMAEQgmAMgdAyQgnBBAABcQAABbAnBBQAiA6AuAHQAJAAAJABQAHAAAHAAQCmAMB0AyQB0AyAAikQAAijh3h0Qhchah6gUQgjgFgkAAQgjAAgiAFQh7AUhdBaQh2B0AACjQAACkB5g9QBug4CSAEQAGABAGAAQADAAADAAgABgAuQAAgmgWgZQgWgbgfAAQgfAAgWAbQgWAZAAAmQAAAlAWAbQAWAbAfAAQAfAAAWgbQAWgbAAglg");
	this.shape.setTransform(40.375,26.0355);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEgD5Qh0gyimgMIgOAAQAxgEAkg+QAnhBAAhbQAAhcgnhBQgdgygmgMQgLgEgNAAQgNAAgMAEQgmAMgdAyQgnBBAABcQAABbAnBBQAiA6AuAHQiSgEhuA4Qh5A9AAikQAAijB2h0QBdhaB7gUQAigFAjAAQAkAAAjAFQB6AUBcBaQB3B0AACjQAAB9hEAAQgVAAgbgLg");
	this.shape_1.setTransform(40.375,26.0355);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLDeQgugHgig6QgnhBAAhcQAAhbAnhBQAdgyAmgMQAMgEAMAAQANAAAMAEQAmAMAdAyQAnBBAABbQAABcgnBBQgkA+gyAEIgRgBgAgRASQgWAaAAAmQAAAlAWAbQAVAbAgAAQAfAAAWgbQAWgbAAglQAAgmgWgaQgWgagfAAQggAAgVAagAhOiYQgXAWAAAgQAAAfAXAWQAWAWAgAAQAfAAAWgWQAXgWAAgfQAAgggXgWQgWgWgfAAQggAAgWAWg");
	this.shape_2.setTransform(38.875,22.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6666").s().p("AgWCTQgVgbAAglQAAgmAVgaQAWgaAfAAQAfAAAWAaQAWAaABAmQgBAlgWAbQgWAbgfAAQgfAAgWgbgAhTgsQgXgWABgfQgBggAXgWQAXgWAfAAQAgAAAVAWQAXAWAAAgQAAAfgXAWQgVAWggAAQgfAAgXgWg");
	this.shape_3.setTransform(39.35,22.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyei, new cjs.Rectangle(-2.5,-2.5,85.8,57.1), null);


(lib.eyeeeeeee = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiJFiQgCgKgBgJQgGgwgFgxQgEgwgBgwQAAgwAFgwQAGgwAOguQAPgvAdglQAcglAqgLQAsgMAmAcQAlAbAYApQAZApASAsQATAuAMAyQALAvAIAwQAGAlAEAmQBFhtAAiSQAAikhXh1QhXh1h8AAQh6AAhYB1QhXB1AACkQAAClBXB1QAiAsAnAcQA+AtBLAAQB8AABXh1QAKgOAIgNAAzBrQAbgiAAgvQAAgwgdgiQgcgjgmAAQgoAAgcAjQgcAiAAAwQAAAxAcAiQAcAjAoAAQAUAAASgKAAzBrQgQAJgOASQAAAAAAAAQgdAmAAA2QAAA2AdAmQAdAmAqAAQAqAAAegmQAegmAAg2QAAg2gegmQgegmgqAAQgWAAgTALg");
	this.shape.setTransform(29.825,39.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AhHBcQgegmAAg2QAAg1AegmIABAAQANgSARgJQATgLAVAAQAqAAAdAmQAfAmAAA1QAAA2gfAmQgdAmgqAAQgpAAgegmg");
	this.shape_1.setTransform(39.05,62.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3366FF").s().p("AhDBTQgcgiAAgxQAAgwAcgiQAcgjAnAAQAnAAAcAjQAdAiAAAwQAAAvgbAiQgQAJgNASIgBAAQgSAKgVAAQgnAAgcgjg");
	this.shape_2.setTransform(28,42.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AitD3IgDgTQgGgwgFgxQgEgwgBgwQAAgvAFgwQAGgxAOguQAPgvAdglQAcglAqgLQAtgMAlAcQAlAbAYApQAZApASAsQATAvAMAyQALAuAIAwQAGAlAEAmIgSAbQhXB1h7AAQhMAAg+gtgAgsB3QAAA2AeAmQAcAmAqAAQAqAAAegmQAegmAAg2QAAg2gegmQgeglgqAAQgWAAgTAKQAbghAAgvQAAgxgdgiQgbgjgnAAQgoAAgcAjQgcAiAAAxQAAAxAcAhQAcAjAoAAQAVAAASgKQgeAmAAA2g");
	this.shape_3.setTransform(33.4479,50.5722);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjSEwQhXh1AAilQAAikBXh1QBYh0B6gBQB8ABBXB0QBXB1AACkQAACThFBtQgEgmgGgmQgIgwgLgvQgMgxgTgvQgSgsgZgpQgYgpglgbQgmgcgsAMQgqAMgcAkQgdAmgPAuQgOAugGAwQgFAwAAAwQABAxAEAwQAFAwAGAwIADAUQgngdgigsg");
	this.shape_4.setTransform(29.825,37.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeeeeeee, new cjs.Rectangle(-1,-1,61.7,81.8), null);


(lib.Eye3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ADSh8QgWgJgYgHQhegchAgkQhDAMg0A6QhBBKAABnQAABoBBBKQBCBKBbAAQBcAABBhKQBBhKAAhoQAAhgg4hHgAAGjMQhRgughg6Qg9hoiDCEQiECEAAC5QAAC7CEBMQCDBLC5gbQC6gbCEgwQCDgxgsiWQgniEishC");
	this.shape.setTransform(43.2516,35.483);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AksEsQiEhMAAi7QAAi5CEiEQCDiEA9BoQAhA6BRAuQhDAMg0A6QhBBKAABnQAABoBBBKQBCBKBbAAQBcAABBhKQBBhKAAhoQAAhgg4hHQCsBCAnCEQAsCWiDAxQiEAwi6AbQgwAHgtAAQh+AAhhg3g");
	this.shape_1.setTransform(43.2516,35.483);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AidCwQhAhJgBhoQABhoBAhKQA0g6BFgMQA/AkBdAdQAYAGAWAJQA5BHAABhQAABohCBJQhABKhdAAQhbAAhChKg");
	this.shape_2.setTransform(47.65,39.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eye3, new cjs.Rectangle(-2.5,-2.5,91.5,76), null);


(lib.Eye1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("Ai1naQgKgPgIgRQAAgCAAAAQgBgCAAAAQgBgCAAgBQgBgCgBgCQAAgCgBgDQgNgnAHgpQALg+ArguQAsgvA9gQQA+gQAyAqQAzAqAGBCQAEAxgIAvQgDAMgDAMQgIAfgKAYQAegoAZgiQAjgwAvglQA1grBDgOQBDgPA+AeQA2AaAOA7QANA4gdAzQg1BdhkAhQgNAFgMACAFhF3QCCiMAAjEQAAjLiMiQQgGgGgGgGQhqhmiJgXQgpgHgrAAQhGAAg/ATIgagLQgPgNgLgRQgMgPgNgOQgBgBAAAAQgBgBgBgBIAAAAQgBgCgBAAIAAgBQgCgBgBgBQgBgBAAAAQgagagfgWQgzglg/gIQg/gIg0AkQg3AmALBCQAJAuAkAdQAzAnA/AKQAcAFAaABQATABARgBQgTAQgSATQiMCQAADLQAADMCMCQQAmAnAqAcQBaA9BuAMIAAAAQAdAEAcAAQBLAABCgUQBugiBYhaQAFgGAFgGgAgehmQgBgVgGgVQgRg3gvgUQgwgTgzAaQgzAbgYA6QgYA6ARA3QAQA3AxATQAcAMAegEQgEAUAAAVQAABgBDBEQBCBEBcAAQBeAABChEQBDhEAAhgQAAhghDhDQhChEheAAQgyAAgqAUgAifBEQAUgEAUgLQAzgbAYg5QAPgkgBgjAiBmxQhbAahMBAAj9HGQhDARgyAqQgyAsgFBBQgEBAAvAuQAvAtBBABQBBAAAxgqQAwgpAcg5QAXguADgxQABAwAGAqQAIA6AkAuQAcAlAuACQArACAegfQAjgmADgzQADgtgMgmQANAVAPASQAnAvA8ALQAiAGAhgIQAMgFALgFQA3gZATg7QAPgwgWgvQgPgggagZQgRgQgUgOQgKgHgQgMACWIOQAJAaAOAX");
	this.shape.setTransform(54.7775,77.8027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AifCkQhChEAAhgQAAgUADgVQAUgDAVgLQAygbAYg6QAPgkAAgjQAqgUAyAAQBeAABCBDQBCBEAABgQAABghCBEQhCBEheAAQhdAAhChEg");
	this.shape_1.setTransform(61.025,88.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("Ag5HoIgBAAQhtgMhag9QgrgcgmgnQiMiQAAjMQAAjLCMiQQATgTATgQQBMhABagaQBAgTBGAAQArAAAoAHQCKAXBpBmIAMAMQCNCQAADLQAADEiCCMIgLAMQhYBahuAiQhCAUhKAAQgdAAgcgEgAinBGQAABgBCBEQBCBEBdAAQBeAABChEQBChEAAhgQAAhfhChEQhChEheAAQgzAAgpAUQgBgVgGgVQgRg3gwgUQgwgTgzAaQgzAbgYA6QgYA6ARA3QARA3AwATQAcAMAegEQgDAUAAAVg");
	this.shape_2.setTransform(55.225,81.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkOMKQhBgBgvgtQgvguAEhAQAFhBAygsQAygqBDgRQBaA9BuAMIAAAAQAdAEAcAAQBLAABCgUQBugiBYhaIAkAHQAUAOARAQQAaAZAPAgQAWAvgPAwQgTA7g3AZIgXAKQghAIgigGQg8gLgngvQgPgSgNgVQAMAmgDAtQgDAzgjAmQgeAfgrgCQgugCgcglQgkgugIg6QgGgqgBgwQgDAxgXAuQgcA5gwApQgxAqhAAAIgBAAgACtI/QgOgXgJgaQAJAaAOAXgAjZA8QgxgTgQg3QgRg3AYg6QAYg6AzgbQAzgaAwATQAvAUARA3QAGAVABAVQABAjgPAkQgYA5gzAbQgUALgUAEIgQABQgWAAgUgJgABYm9QgpgHgrAAQhGAAg/ATIgagLQgPgNgLgRQALARAPANIAaALQhbAahMBAIgkAAQgagBgcgFQg/gKgzgnQgkgdgJguQgLhCA3gmQA0gkA/AIQA/AIAzAlQAfAWAaAaIABABIADACIAAABIACACIAAAAIACACIABABIAZAdQgKgPgIgRIAAgCIgBgCIgBgDIgCgEIgBgFQgNgnAHgpQALg+ArguQAsgvA9gQQA+gQAyAqQAzAqAGBCQAEAxgIAvIgGAYQgIAfgKAYIA3hKQAjgwAvglQA1grBDgOQBDgPA+AeQA2AaAOA7QANA4gdAzQg1BdhkAhQgNAFgMACIgTAUQhqhmiJgXg");
	this.shape_3.setTransform(54.7775,77.8027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eye1, new cjs.Rectangle(-3,-3,115.6,161.6), null);


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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AiiiGQhBBOAABsQAABxBGBQQAKALAJAJQBBA9BWAAQAcAAAagHQBCgRAyg5QBHhQAAhxQAAhYgshFQgMgTgPgRQgLgMgLgKIBOhSAChijQhAg6hUAAQgJAAgIAAQhUAHg/BDQgDADgDADQgCAEgDADIhbg1AgClFIgCBoABdgaQgHgJgIgJQgggigtAAQgsAAggAiQgfAiAAAvQAAAwAfAiQAgAjAsAAQAEAAAEgBACCBXQACgBABgBQAPgTAAgbQAAgbgPgTQgQgTgVAAQgCAAgBAAQgUACgPARQgPATAAAbQAAAYAMARQgNAGgLALQgWAXAAAhIAAAAQAAAgAWAXQAXAXAgAAQAhAAAXgXQAXgXAAggQAAghgXgXQgFgFgHgFgAA3BQQACADABACQAQATAWAAQAUAAAOgR");
	this.shape.setTransform(25.375,32.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCFFFF").s().p("Ag2A1QgXgYAAgeIAAgBQAAggAXgYQAKgKANgGIAEAEQAPATAVAAQAVAAAOgRQAGAFAFAFQAXAYAAAgQAAAfgXAYQgXAWggAAQggAAgWgWg");
	this.shape_1.setTransform(34.05,48.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCFF").s().p("AgkAuIgEgEQgMgSAAgYQABgaAPgTQAOgSAUgBIACAAQAWAAAPATQAQATAAAaQAAAbgQATIgCADQgOAQgVAAQgVAAgPgTg");
	this.shape_2.setTransform(34.95,36.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99CCFF").s().p("AhDBSQgggiAAgwQAAgvAggjQAfghAsgBQAuABAfAhQAJAKAGAJQgUABgOASQgPATgBAaQAAAYAMASQgNAGgKALQgXAXAAAgIAAABIgIAAQgsAAgfgig");
	this.shape_3.setTransform(24.65,36.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiXDVIgTgUQhGhQAAhxQAAhsBBhOIAFgGIAGgHQA/hDBUgGIARgBQBUAABAA6QALAKALANQAPAQAMATQAsBFAABYQAABxhHBQQgyA5hCARQgaAHgcAAQhWAAhBg9gAASCcQAXAXAgAAQAhAAAXgXQAXgXAAggQAAghgXgXQgFgFgHgFIADgCQAPgTAAgaQAAgbgPgUQgQgTgVAAIgDAAQgHgJgIgJQgggigsAAQgtAAggAiQgfAiAAAwQAAAvAfAiQAgAjAtAAIAIgBQAAAgAVAXg");
	this.shape_4.setTransform(26.675,37.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,55.8,70.1);


(lib.btnR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFCC99").s().p("AgMBVIAAhxIgQAAIAAgUIAQAAIAAgkIAYAAIAAAkIARAAIAAAUIgRAAIAABxg");
	this.shape.setTransform(87.025,62.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgoADQAAhHApAAQARAAAMANQAMALAAAnIAAAJIg4AAQAAAWADALQADALALAAQAIABADgHQADgGAAgPIAXAAQgBAwgnAAQgoAAAAhCgAgLgqQgDAJAAATIAeAAQAAgUgDgJQgDgJgJAAQgIAAgEAKg");
	this.shape_1.setTransform(77.65,64.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgdBAIAAgVQAOAGAKAAQAGAAAEgEQAEgEAAgHQAAgGgFgHQgEgHgOgLQgTgOAAgUQAAgQALgLQAKgKAPAAQAJAAAPAFIAAAUQgMgEgIAAQgHAAgFAEQgEAEAAAGQAAAGAEAFQAEAGALALQANAKAFAIQAGAJAAALQAAAPgLALQgLAKgPAAQgLAAgPgFg");
	this.shape_2.setTransform(67.325,64.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AgoADQgBhHArAAQAQAAAMANQALALAAAnIAAAJIg3AAQAAAWADALQADALALAAQAIABADgHQADgGAAgPIAXAAQgBAwgnAAQgoAAAAhCgAgLgqQgDAJAAATIAeAAQABgUgEgJQgDgJgIAAQgKAAgDAKg");
	this.shape_3.setTransform(56.25,64.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AAQBiIgehcIgCAAIAABcIgaAAIAAjDIAkAAQAsAAAAAyQAAAXgHALQgGAMgPAFIAhBegAgQgLQAQAAAFgHQAHgHAAgTQAAgRgGgIQgGgHgOAAIgCAAg");
	this.shape_4.setTransform(46.075,61.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(6,1,1).p("AF7iFQARgHAQgJQAAgBABAAQAYgOATgSQArgoAQg8QAXhXgthOQgthOhXgXQhXgXhOAtQgMAGgLAIQgFgPgJgPQgthOhXgXQhWgXhPAtQhOAtgYBXQgMAsAGAqAC5mOQAJgzgPgxQgCgHgEgHADei+QgTgagYgTQATAaAYATgAG3D/QAGAAAHgBQAugEAsgZQBOgtAXhXQAYhXgthNQgthOhXgXQgPgEgOgCACzjrQgdgWghgOQgWgKgZgHQgugMgsACQgZAHgagBQgqAKgpAYQgDACgEACQgdASgXAWQg4A1gWBPQgBACgBACQgIAggCAfQgFBTAsBNQAUAiAZAaQAOAOAQAMQAtAjA8ARQAzANAwgEQAdgCAcgIQAjgKAhgTQA6ghAkgyQAGgKAGgKQAVgjAMgqQAZhegihWQgDgJgDgIQgHgNgIgOQgMgVgPgSABLHwQAtBNBXAXQBXAXBOgtQBPgtAXhXQAYhYgthOQgHgLgHgKQgKgOgMgMQgWgVgbgOQAWAVAbAOAi6lNQgCgCgBgDQgXgogigZQgMgJgOgIQgXgMgagHQhXgXhPAtQhOAtgYBXQgXBXAtBOQAbAvApAbQAXAOAaAJQAIACAHACQAGACAGABAnzgtQgWAHgUAMQhOAsgYBXQgXBXAtBOQAtBOBXAXQBIAUBDgcAlOFdQgFAOgFAQQgXBXAsBNQAuBPBXAXQBXAXBPguQBKgrAZhTQABgCAAgBIAAAAQABgCAAgBQABgFABgGQAShOgmhGAkpEjQgXAWgOAdQgCADgBACIAAAB");
	this.shape_5.setTransform(65.153,65.2472);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663333").s().p("AhMEeQg9gRgtgjQgQgMgNgOQgZgagUgiQgthNAFhTQACgfAJggIABgEQAWhPA4g1QAYgWAdgSIAGgEQApgYArgKQAaABAZgHQArgCAvAMQAYAHAWAKQAiAOAcAWQAUAaAYATQAPASAMAVIAOAbIAHARQAiBWgaBeQgLAqgVAjIgNAUQgkAyg5AhQgiATgjAKQgbAIgdACIgXABQglAAgngKg");
	this.shape_6.setTransform(64.4212,64.9121);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCCFF").s().p("Ai+KFQhXgXguhPQgshNAXhXIAKgeIgDgCIADgFQAOgdAXgWQgXAWgOAdIgDAFIAAABIgNAPQhDAchIgUQhXgXgthOQgthOAXhXQAYhXBOgsQAUgMAWgHIAAgBQAXAOAaAJIAPAEIAMADIgMgDIgPgEQgagJgXgOQgpgbgbgvQgthOAXhXQAYhXBOgtQBPgtBXAXQAaAHAXAMQAOAIAMAJQAiAZAXAoIADAFIgDgFQgXgogigZQgGgqAMgsQAYhXBOgtQBPgtBWAXQBXAXAtBOQAJAPAFAPIAXgOQBOgtBXAXQBXAXAtBOQAtBOgXBXQgQA8grAoIAFAEIAdAGQBXAXAtBOQAtBNgYBXQgXBXhOAtQgsAZguAEIgNABIAOAVQAtBOgYBYQgXBXhPAtQhOAthXgXQhXgXgthNIABgDIAAAAIAAAAIgBADQgZBThKArQg0Aeg4AAQgdAAgdgHgABMHtIABgDIACgLQAGgYAAgYQAAg0gagwQAaAwAAA0QAAAYgGAYIgDAOIAAAAgAiakCIgHAEQgdASgXAWQg4A1gWBPIgCAEQgIAggCAfQgFBTAsBNQAUAiAZAaQAOAOAQAMQAtAjA8ARQAzANAwgEQAdgCAcgIQAjgKAhgTQA6ghAkgyIAMgUQAVgjAMgqQAZhegihWIgGgRIgPgbQgMgVgPgSQgTgagYgTQgdgWghgOQgWgKgZgHQgugMgsACQgZAHgagBQgqAKgpAYgAG3D/QgKgOgMgMQAMAMAKAOgAGhDlQgWgVgbgOQAWAVAbAOgAGdiWIgBABQgQAJgRAHQARgHAQgJIABgBQAYgOATgSQgTASgYAOgAC5mOQAEgTAAgSQAAgggKgfQgCgHgEgHQAEAHACAHQAKAfAAAgQAAASgEATgAlRFbg");
	this.shape_7.setTransform(65.153,65.2472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,136.3,136.5);


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
	this.shape.graphics.f("#FFCC99").s().p("Ag5B+IAshWIADgHIADgHQAQggAHgVQAIgVAAgSQgBgOgFgIQgGgIgJAAQgPAAgDAOQgEAOAAAbIghAAQAAg1AOgPQAPgQAcAAQA1AAAAA3QAAAUgHAYQgHAXgSAjIgeBAIA3AAIAAAeg");
	this.shape.setTransform(63.6,63.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(6,1,1).p("AF7iFQARgHAQgJQAAgBABAAQAYgOATgSQArgoAQg8QAXhXgthOQgthOhXgXQhXgXhOAtQgMAGgLAIAC5mOQAJgzgPgxQgCgHgEgHQgFgPgJgPQgthOhXgXQhWgXhPAtQhOAtgYBXQgMAsAGAqADei+QgTgagYgTQATAaAYATgAG3D/QAGAAAHgBQAugEAsgZQBOgtAXhXQAYhXgthNQgthOhXgXQgPgEgOgCACzjrQgdgWghgOQgWgKgZgHQgugMgsACQgZAHgagBQgqAKgpAYQgDACgEACQgdASgXAWQg4A1gWBPQgBACgBACQgIAggCAfQgFBTAsBNQAUAiAZAaQAOAOAQAMQAtAjA8ARQAzANAwgEQARgBAQgDQAMgDAMgDQAjgKAhgTQA6ghAkgyQAGgKAGgKQAVgjAMgqQAZhegihWQgDgJgDgIQgHgNgIgOQgMgVgPgSAGhDlQgWgVgbgOQAWAVAbAOgABLHwQAtBNBXAXQBXAXBOgtQBPgtAXhXQAYhYgthOQgHgLgHgKQgKgOgMgMAi6lNQgCgCgBgDQgXgogigZQgMgJgOgIQgXgMgagHQhXgXhPAtQhOAtgYBXQgXBXAtBOQAbAvApAbQAXAOAaAJQAIACAHACQAGACAGABAnzgtQgWAHgUAMQhOAsgYBXQgXBXAtBOQAtBOBXAXQBIAUBDgcAlOFdQgFAOgFAQQgXBXAsBNQAuBPBXAXQBXAXBPguQBKgrAZhTQABgCAAgBIAAAAQABgCAAgBQABgFABgGQAShOgmhGAkpEjQgXAWgOAdQgCADgBACIAAAB");
	this.shape_1.setTransform(65.153,65.2472);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663333").s().p("AhMEeQg9gRgtgjQgQgMgNgOQgZgagUgiQgthNAFhTQACgfAJggIABgEQAWhPA4g1QAYgWAdgSIAGgEQApgYArgKQAaABAZgHQArgCAvAMQAYAHAWAKQAiAOAcAWQAUAaAYATQAPASAMAVIAOAbIAHARQAiBWgaBeQgLAqgVAjIgNAUQgkAyg5AhQgiATgjAKIgXAGQgQADgRABIgXABQglAAgngKg");
	this.shape_2.setTransform(64.4212,64.9121);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("Ai+KFQhXgXguhPQgshNAXhXIAKgeIgDgCIADgFQAOgdAXgWQgXAWgOAdIgDAFIAAABIgNAPQhDAchIgUQhXgXgthOQgthOAXhXQAYhXBOgsQAUgMAWgHIAAgBQAXAOAaAJIAPAEIAMADIgMgDIgPgEQgagJgXgOQgpgbgbgvQgthOAXhXQAYhXBOgtQBPgtBXAXQAaAHAXAMQAOAIAMAJQAiAZAXAoIADAFIgDgFQgXgogigZQgGgqAMgsQAYhXBOgtQBPgtBWAXQBXAXAtBOQAJAPAFAPQAEAHACAHQAKAfAAAgQAAASgEATQAEgTAAgSQAAgggKgfQgCgHgEgHIAXgOQBOgtBXAXQBXAXAtBOQAtBOgXBXQgQA8grAoIAFAEIAdAGQBXAXAtBOQAtBNgYBXQgXBXhOAtQgsAZguAEIgNABIAOAVQAtBOgYBYQgXBXhPAtQhOAthXgXQhXgXgthNIABgDIAAAAIAAAAIgBADQgZBThKArQg0Aeg4AAQgdAAgdgHgABMHtIABgDIACgLQAGgYAAgYQAAg0gagwQAaAwAAA0QAAAYgGAYIgDAOIAAAAgAiakCIgHAEQgdASgXAWQg4A1gWBPIgCAEQgIAggCAfQgFBTAsBNQAUAiAZAaQAOAOAQAMQAtAjA8ARQAzANAwgEQARgBAQgDIAYgGQAjgKAhgTQA6ghAkgyIAMgUQAVgjAMgqQAZhegihWIgGgRIgPgbQgMgVgPgSQgTgagYgTQgdgWghgOQgWgKgZgHQgugMgsACQgZAHgagBQgqAKgpAYgAGhDlQAMAMAKAOQgKgOgMgMQgWgVgbgOQAWAVAbAOgAGdiWIgBABQgQAJgRAHQARgHAQgJIABgBQAYgOATgSQgTASgYAOg");
	this.shape_3.setTransform(65.153,65.2472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,136.3,136.5);


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
	this.shape.graphics.f("#FFCC99").s().p("AgEB9IAAjeIgWAAIAAgbIA1AAIAAD5g");
	this.shape.setTransform(65.275,64.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(6,1,1).p("AF7iFQARgHAQgJQAAgBABAAQAYgOATgSQArgoAQg8QAXhXgthOQgthOhXgXQhXgXhOAtQgMAGgLAIQgFgPgJgPQgthOhXgXQhWgXhPAtQhOAtgYBXQgMAsAGAqAC5mOQAJgzgPgxQgCgHgEgHACzjrQATAaAYATQgTgagYgTQgdgWghgOQgWgKgZgHQgugMgsACQgZAHgagBQgqAKgpAYQgDACgEACQgdASgXAWQg4A1gWBPQgBACgBACQgIAggCAfQgFBTAsBNQAUAiAZAaQAOAOAQAMQAtAjA8ARQAzANAwgEQARgBAQgDQAMgDAMgDQAjgKAhgTQA6ghAkgyQAGgKAGgKQAVgjAMgqQAZhegihWQgDgJgDgIQgHgNgIgOQgMgVgPgSAlOFdQgFAOgFAQQgXBXAsBNQAuBPBXAXQBXAXBPguQBKgrAZhTQAtBNBXAXQBXAXBOgtQBPgtAXhXQAYhYgthOQgHgLgHgKQAGAAAHgBQAugEAsgZQBOgtAXhXQAYhXgthNQgthOhXgXQgPgEgOgCAGhDlQgWgVgbgOQAWAVAbAOgAi6lNQgCgCgBgDQgXgogigZQgMgJgOgIQgXgMgagHQhXgXhPAtQhOAtgYBXQgXBXAtBOQAbAvApAbQAXAOAaAJQAIACAHACQAGACAGABAnzgtQgWAHgUAMQhOAsgYBXQgXBXAtBOQAtBOBXAXQBIAUBDgcABMHtQABgCAAgBQABgFABgGQAShOgmhGAkpEjQgXAWgOAdQgCADgBAC");
	this.shape_1.setTransform(65.153,65.2472);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663333").s().p("AhMEeQg9gRgtgjQgQgMgNgOQgZgagUgiQgthNAFhTQACgfAJggIABgEQAWhPA4g1QAYgWAdgSIAGgEQApgYArgKQAaABAZgHQArgCAvAMQAYAHAWAKQAiAOAcAWQAUAaAYATQAPASAMAVIAOAbIAHARQAiBWgaBeQgLAqgVAjIgNAUQgkAyg5AhQgiATgjAKIgXAGQgQADgRABIgXABQglAAgngKg");
	this.shape_2.setTransform(64.4212,64.9121);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("Ai+KFQhXgXguhPQgshNAXhXIAKgeIgDgCIADgFQAOgdAXgWQgXAWgOAdIgDAFIAAABIgNAPQhDAchIgUQhXgXgthOQgthOAXhXQAYhXBOgsQAUgMAWgHIAAgBQAXAOAaAJIAPAEIAMADIgMgDIgPgEQgagJgXgOQgpgbgbgvQgthOAXhXQAYhXBOgtQBPgtBXAXQAaAHAXAMQAOAIAMAJQAiAZAXAoIADAFIgDgFQgXgogigZQgGgqAMgsQAYhXBOgtQBPgtBWAXQBXAXAtBOQAJAPAFAPIAXgOQBOgtBXAXQBXAXAtBOQAtBOgXBXQgQA8grAoIAFAEIAdAGQBXAXAtBOQAtBNgYBXQgXBXhOAtQgsAZguAEIgNABIAOAVQAtBOgYBYQgXBXhPAtQhOAthXgXQhXgXgthNQgZBThKArQg0Aeg4AAQgdAAgdgHgABMHtIABgDIACgLQAGgYAAgYQAAg0gagwQAaAwAAA0QAAAYgGAYgAiakCIgHAEQgdASgXAWQg4A1gWBPIgCAEQgIAggCAfQgFBTAsBNQAUAiAZAaQAOAOAQAMQAtAjA8ARQAzANAwgEQARgBAQgDIAYgGQAjgKAhgTQA6ghAkgyIAMgUQAVgjAMgqQAZhegihWIgGgRIgPgbQgMgVgPgSQgTgagYgTQgdgWghgOQgWgKgZgHQgugMgsACQgZAHgagBQgqAKgpAYgAGhDlQgWgVgbgOQAWAVAbAOgAGdiWIgBABQgQAJgRAHQARgHAQgJIABgBQAYgOATgSQgTASgYAOgAC5mOQAEgTAAgSQAAgggKgfQgCgHgEgHQAEAHACAHQAKAfAAAgQAAASgEATgAlRFbg");
	this.shape_3.setTransform(65.153,65.2472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,136.3,136.5);


(lib.babymouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADpCGQAJgQAJgSQAUgpAMgsQAMgtACgwQACgvgFgvQgDgZgEgZIAhgEQAaAjgRAoAE6kKQAVAPgPAZAA9jDIAABdICoAAIAAhxIA6gHAAZELQAKAAAJAAQAxgFArgZQApgWAbgnQAQgUANgWABRBOQALgCAMgBQAygDApAcQAVAPARATAjLiiIAABWICzAAIAAhsIBVgLICogUAlCiUIAjgEIBUgKICzgWAlCiUQgFAoAWAiAkfiYQABAKABAJQAHAuAMAsQAMAuAWAtQAVAqAbAnQAbAmAhAhQAaAZAfARQAEgjARggQAYgrAngbQAegUAigHQgfAogOAvQgPAvAEAwQAAAEAAADAhDDyQAJAFAKAFQAkAPAlAAAlLi+QgKAVATAV");
	this.shape.setTransform(33.537,26.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3366").s().p("Ag4BgIgBgHIAAgSQAAgnALglQAPgvAegoQgeAogPAvQgLAlAAAnIAAASIABAHQgmAAgkgPIgTgKQADgjASggQAXgqApgbQAegUAhgHIAXgDQAxgDAqAcQAVAPAQATQgMAWgQATQgcAngpAWQgrAZgvAFIgTAAIAAAAg");
	this.shape_1.setTransform(41.75,43.8306);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjXBGIAAhWICzgWIAABsgAAwArIAAhbICogVIAABwg");
	this.shape_2.setTransform(34.775,12.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6699").s().p("AiAC/QgighgbgmQgbgngUgrQgWgrgNgwQgMgsgGgtIgDgTIBVgLIAABXICzAAIAAhtIBUgKIAABcICoAAIAAhxIA7gHIAGAyQAFAvgBAvQgDAwgMAtQgLAtgVApIgSAiQgQgUgWgPQgpgcgyAEIgXADQgiAHgdATQgoAbgXArQgSAggEAkQgfgRgZgZg");
	this.shape_3.setTransform(33.9923,27.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.babymouth, new cjs.Rectangle(-1,-1,69.1,55.5), null);


(lib.Accesorie = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AENgEQAtgKAqgdQBDguAXhDQAYhDgigwQghgxhHgCQhHgChDAuQgtAfgZAoQAQgoAAgyQAAhRgqg5Qgqg5g6AAQg7AAgqA5QgqA5AABRQAAA9AXAvQgCACgDACQgFAFgGAFQg7A7AABTQAAAOACAOQABAFAAAEQALA7AtAtQAOANAPALQAKAGAKAGQgFAGgGAHQgrA4gCBRQgCBRApA6QAGAKAHAHQAlAqAxABQAzABAogsQAFgFAFgHQArg4ADhRQABhRgog7QgFgHgFgGABnCNQAFAUAMAVQAjA9BJAiQBKAhBGgOQBFgOAZg2QAYg2gjg+Qgjg9hKgiQgngRgmgEQghgEggAHQACgQAAgQQAAhTg7g7QgNgNgOgJQACgFACgFIgBABQgCAEgCAEIAAAAQgygjhBAAQhIAAg2AsAB4jFQAAgBgBAAADMAAQAHAAAIAAQAZABAZgFADMAAQAAgBAAAAAh/i5Qgcg5g+gmQhFgqhHAGQhGAGgfAyQgfAzAbBBQAbBCBFAqQBGApBGgFQARgBAOgEAjCAEQgZgFgfADQhHAJg6A4Qg7A4gMBGQgNBFApArQAoArBHgJQBGgKA7g4QA6g3ANhGQACgIAAgIAhZCQQAqAWAzAAQAvAAAogSQAGgDAGgEQAXgNAVgUQAvgvAKg9");
	this.shape.setTransform(47.583,49.3025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhdCyIgUgMQgPgLgOgNQgtgtgLg7IgBgKQgCgOAAgOQAAhSA7g7IALgKIAFgEQA2gsBIAAQBAAAAzAjIAAAAIABABQAOAJANANQA7A7AABSQAAAQgDAQIAAABQgKA+guAvQgVAUgXANIgNAHQgnASgvAAQgzAAgqgWg");
	this.shape_1.setTransform(48,45.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC99FF").s().p("AgHHtQgxgBglgqQgHgHgGgKQgpg6AChRQAChRArg4IALgNQAqAWAzAAQAvAAAogSIAKANQAoA7gBBRQgDBRgrA4IgKAMQgnArgwAAIgEAAgAmmExQgpgrANhFQAMhGA7g4QA6g4BHgJQAfgDAZAFQALA7AtAtQAOANAPALIgCAQQgNBGg6A3Qg7A4hGAKQgNACgLAAQg2AAghgkgADkEVQhJgigjg9QgMgVgFgUQAXgNAVgUQAvgvAKg9IAPAAQAZABAZgFQghgEggAHQACgQAAgQQAAhTg7g7QgNgNgOgJIAEgKIgBABIgEAIQgygjhBAAQhIAAg2AsQgXgvAAg9QAAhRAqg5QAqg5A7AAQA6AAAqA5QAqA5AABRQAAAygQAoQAZgoAtgfQBDguBHACQBHACAhAxQAiAwgYBDQgXBDhDAuQgqAdgtAKQAmAEAnARQBKAiAjA9QAjA+gYA2QgZA2hFAOQgVAFgVAAQgyAAg0gYgAlugkQhFgqgbhCQgbhBAfgzQAfgyBGgGQBHgGBFAqQA+AmAcA5IgLAKQg7A7AABTQAAAOACAOQgOAEgRABIgRAAQg+AAg9gkg");
	this.shape_2.setTransform(47.583,49.3025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Accesorie, new cjs.Rectangle(-2.5,-2.5,100.2,103.6), null);


// stage content:
(lib.MPHFinalAIslas = function(mode,startPosition,loop,reversed) {
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
		this.face1.addEventListener("click", Clickface1.bind(this));
		
		function Clickface1() {
			this.eyes1.x = 610;
			this.eyes1.y = 280;
			this.mouth4.x = 616;
			this.mouth4.y = 341.85;
			this.wing1l.x = 501.95;
			this.wing1l.y = 314.30;
			this.wing1r.x = 720.70;
			this.wing1r.y = 314.30;
		}
		
		this.face2.addEventListener("click", Clickface2.bind(this));
		
		function Clickface2() {
			this.eyes2.x = 419.60;
			this.eyes2.y = 497.40;
			this.mouthh.x = 423.60;
			this.mouthh.y = 561.00;
			this.wing2l.x = 334.15;
			this.wing2l.y = 520.30;
			this.wing2r.x = 512.65;
			this.wing2r.y =518.30;
		}
		
		this.reset.addEventListener("click", Clickreset.bind(this));
		
		function Clickreset() {
			this.eyes2.x = 471.85;
			this.eyes2.y = 82.80;
			this.mouthh.x = 474.80;
			this.mouthh.y = 161.55;
			this.wing2l.x = 63.20;
			this.wing2l.y = 500.50;
			this.wing2r.x = 164.75;
			this.wing2r.y =500.50;
		    this.eyes1.x = 348.10;
			this.eyes1.y = 75.20;
			this.mouth4.x = 351.85;
			this.mouth4.y = 153.00;
			this.wing1l.x = 73.35;
			this.wing1l.y = 378.30;
			this.wing1r.x = 170.50;
			this.wing1r.y = 378.30;
			this.eye.x = 57.20;
			this.eye.y = 71.30;
			this.mouth.x =61.50 ;
			this.mouth.y = 131.05;
			this.eyee.x = 237.40;
			this.eyee.y = 71.30
			;
			this.mouth1.x = 147.05;
			this.mouth1.y =138.60;
			this.sunflower.x = 63.80;
			this.sunflower.y = 280.05;
			this.flower.x = 175.00;
			this.flower.y = 274.15;
			this.mouth3.x = 235.45;
			this.mouth3.y =136.65;
			this.eyeee.x = 148.15;
			this.eyeee.y =71.30;
		}
		
		this.eyes2.addEventListener("pressmove", dragMe.bind(this));
		this.mouthh.addEventListener("pressmove", dragMe.bind(this));
		this.wing2l.addEventListener("pressmove", dragMe.bind(this));
		this.wing2r.addEventListener("pressmove", dragMe.bind(this));
		this.eyes1.addEventListener("pressmove", dragMe.bind(this));
		this.mouth4.addEventListener("pressmove", dragMe.bind(this));
		this.wing1l.addEventListener("pressmove", dragMe.bind(this));
		this.wing1r.addEventListener("pressmove", dragMe.bind(this));
		this.eye.addEventListener("pressmove", dragMe.bind(this));
		this.mouth.addEventListener("pressmove", dragMe.bind(this));
		this.mouth1.addEventListener("pressmove", dragMe.bind(this));
		this.sunflower.addEventListener("pressmove", dragMe.bind(this));
		this.flower.addEventListener("pressmove", dragMe.bind(this));
		this.mouth3.addEventListener("pressmove", dragMe.bind(this))
		this.eyeee.addEventListener("pressmove", dragMe.bind(this));
		this.eyee.addEventListener("pressmove", dragMe.bind(this));
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// button
	this.reset = new lib.btnR();
	this.reset.name = "reset";
	this.reset.setTransform(828.55,34.75);
	new cjs.ButtonHelper(this.reset, 0, 1, 1);

	this.face2 = new lib.btn2();
	this.face2.name = "face2";
	this.face2.setTransform(690.25,34.75);
	new cjs.ButtonHelper(this.face2, 0, 1, 1);

	this.face1 = new lib.btn1();
	this.face1.name = "face1";
	this.face1.setTransform(551.95,34.75);
	new cjs.ButtonHelper(this.face1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.face1},{t:this.face2},{t:this.reset}]}).wait(1));

	// Body Parts
	this.mouthh = new lib.moutthh("synched",0);
	this.mouthh.name = "mouthh";
	this.mouthh.setTransform(468.8,165.2,1,1,0,0,0,33.5,18.2);

	this.wing2l = new lib.wing2l();
	this.wing2l.name = "wing2l";
	this.wing2l.setTransform(63.15,500.55,1,1,0,0,0,32.2,58.4);

	this.wing2r = new lib.wing2r();
	this.wing2r.name = "wing2r";
	this.wing2r.setTransform(164.7,500.55,1,1,0,0,0,32.2,58.4);

	this.wing1l = new lib.wingleft();
	this.wing1l.name = "wing1l";
	this.wing1l.setTransform(73.3,378.3,1,1,0,0,0,46.1,50.8);

	this.wing1r = new lib.wingright();
	this.wing1r.name = "wing1r";
	this.wing1r.setTransform(170.45,378.3,1,1,0,0,0,46.1,50.8);

	this.sunflower = new lib.sunflower();
	this.sunflower.name = "sunflower";
	this.sunflower.setTransform(83.25,267.25,1,1,0,0,0,36.3,34);

	this.eyes1 = new lib.eyeeeeeee();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(348.1,75.25,1,1,0,0,0,29.8,39.9);

	this.mouth4 = new lib.babymouth();
	this.mouth4.name = "mouth4";
	this.mouth4.setTransform(351.8,153,1,1,0,0,0,33.5,26.7);

	this.mouth1 = new lib.mouthhh();
	this.mouth1.name = "mouth1";
	this.mouth1.setTransform(147.1,138.6,1,1,0,0,0,13,23.5);

	this.eyee = new lib.eyei();
	this.eyee.name = "eyee";
	this.eyee.setTransform(237.45,71.3,1,1,0,0,0,40.4,26);

	this.mouth3 = new lib.sadmouth();
	this.mouth3.name = "mouth3";
	this.mouth3.setTransform(235.45,136.6,1,1,0,0,0,36.8,10.3);

	this.eye = new lib.eye("synched",0);
	this.eye.name = "eye";
	this.eye.setTransform(57.25,71.25,1,1,0,0,0,25.4,32.5);

	this.mouth = new lib.mouthi("synched",0);
	this.mouth.name = "mouth";
	this.mouth.setTransform(61.5,131.1,1,1,0,0,0,34,19.9);

	this.flower = new lib.Accesorie();
	this.flower.name = "flower";
	this.flower.setTransform(175,274.15,0.6523,0.6523,0,0,0,47.5,49.3);

	this.eyeee = new lib.Eye3();
	this.eyeee.name = "eyeee";
	this.eyeee.setTransform(148.15,71.3,0.6607,0.6607,0,0,0,43.3,35.5);

	this.eyes2 = new lib.Eye1();
	this.eyes2.name = "eyes2";
	this.eyes2.setTransform(471.9,82.9,0.558,0.558,0,0,0,54.9,77.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes2},{t:this.eyeee},{t:this.flower},{t:this.mouth},{t:this.eye},{t:this.mouth3},{t:this.eyee},{t:this.mouth1},{t:this.mouth4},{t:this.eyes1},{t:this.sunflower},{t:this.wing1r},{t:this.wing1l},{t:this.wing2r},{t:this.wing2l},{t:this.mouthh}]}).wait(1));

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqCxQAaguAKguQALguAAghQAAgpgLgwQgLgxgZgrIAhgPQAYAqAOA2QAOA2AAApQAAApgPA5QgPA6gXAig");
	this.shape.setTransform(848.85,192.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRBGQgHgHAAgJQAAgKAHgHQAIgHAJAAIABAAQALAAAHAHQAHAGAAAKQAAAJgHAHQgHAHgLAAQgKAAgIgGgAgRgkQgIgGAAgKQAAgKAIgGQAHgHAKAAIAAAAQALAAAIAHQAHAGAAAKQAAAKgHAHQgHAGgMAAQgKAAgHgHg");
	this.shape_1.setTransform(838.975,195.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtCMQgOgKgGgRQgEgRAAgoQgBguAFgTQAFgVANgLQANgLAVAAQAZAAAQAbIABAAIAAh8IApAAIAAEoIgpAAIAAgbIgBAAQgPAdgbAAQgRABgOgKgAgTgEQgFAPAAAkQgBAnAGAQQAFAQAQABQAPgBAGgRQAGgQAAgnQAAglgFgOQgGgPgPAAQgPAAgHAQg");
	this.shape_2.setTransform(814.5,187.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUCUIAAknIApAAIAAEng");
	this.shape_3.setTransform(800.025,187.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgwBkIAAjEIArAAIAAAdIABAAQASggAgABIACAAIAAAfQgdABgMAJQgMAJAAAfIAAB1g");
	this.shape_4.setTransform(788.15,192.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag1BMQgTgYABgyQgBg+AVgUQAVgUAeAAIABAAQAgAAAUAVQAUAWgBA8QABA6gVAUQgUAUgfAAQglAAgRgZgAgUg5QgFANgBAeQABA7AGANQAGAOAOAAQAPAAAGgOQAFgNAAghQAAgxgFgQQgGgRgQAAQgPAAgFANg");
	this.shape_5.setTransform(770.8,192.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAcBiIgch3IAAAAIgcB3IgcAAIg5jDIAoAAIAfCCIACAAIAeiCIAVAAIAgCCIABAAIAdiCIApAAIg5DDg");
	this.shape_6.setTransform(749.2,192.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag6COIAlhpIg+iyIArAAIAlCHIABABIAtiIIApAAIhpEbg");
	this.shape_7.setTransform(716.05,197.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABKBkIAAiOQAAgdgZAAQgcAAAAAiIAACJIgpAAIAAiRQAAgLgHgHQgHgIgLAAQgcAAAAAfIAACMIgrAAIAAjEIAsAAIAAASQATgVAbAAQAeAAANAZQAWgYAeAAQAvAAAAAvIAACXg");
	this.shape_8.setTransform(691.8,192.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABKBkIAAiOQAAgdgZAAQgcAAAAAiIAACJIgpAAIAAiRQAAgLgHgHQgHgIgLAAQgcAAAAAfIAACMIgrAAIAAjEIAsAAIAAASQATgVAbAAQAeAAANAZQAWgYAeAAQAvAAAAAvIAACXg");
	this.shape_9.setTransform(662.55,192.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgzBVQgQgPAAghIAAiIIAqAAIAACJQAAAgAaAAQAOAAAGgIQAFgJAAgTIAAiFIAqAAIAACGQAAAjgPAPQgQAPgkAAQgkAAgQgPg");
	this.shape_10.setTransform(638.175,192.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhBB3QgUgcAAhRIADgxQACgpAEgOQAFgPALgMQAKgMAQgHQARgGAVAAQAfAAAWARQAXAQACAaIgqAOQgFgqgfAAQgXAAgKAWQgJAVAAAyIAAAPQAAAbACAbIAEAmQACAMAFAHQAGAHAGADQAHACAHAAQAQAAAJgIQAJgJADgQQAEgQAAgnIgpAAIAAggIBVAAIAAAvQAAAxgUAcQgTAbgwAAQgsAAgUgcg");
	this.shape_11.setTransform(617.925,188.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggAzIAAgCQAagYAKgPQAKgPAAgMQAAgKgGgGQgGgGgGAAQgIAAgGAFQgGAEgDAIIgDAAQACgOAIgHQAIgHALAAQALAAAJAIQAIAIAAAKQAAAIgEAHQgFALgNAOIgVAYIAYAAIAMgBIAFgCQAEgCABgDIADAAIgHATg");
	this.shape_12.setTransform(211.95,616.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggAzIAAgCQAagYAKgPQAKgPAAgMQAAgKgFgGQgGgGgIAAQgHAAgGAFQgGAEgCAIIgEAAQACgOAIgHQAIgHALAAQALAAAJAIQAIAIAAAKQAAAIgEAHQgFALgNAOIgVAYIAZAAIALgBIAFgCQAEgCABgDIADAAIgHATg");
	this.shape_13.setTransform(204.4,616.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAjQgHgOgBgUQAAgQAGgNQAFgMAIgGQAHgFAGAAQALAAAKAMQAMAOgBAZQAAARgEAMQgFAMgJAGQgIAFgGAAQgOAAgKgRgAgIgqQgFAGgCAOQgCANAAAMQAAAUAFANQAEALAIAAQAEAAAEgDQAEgEACgIQAEgNAAgWQAAgRgEgMQgDgIgDgEQgEgCgEAAQgEAAgEAEg");
	this.shape_14.setTransform(196.95,616.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AggAzIAAgCQAagYAJgPQALgPAAgMQAAgKgFgGQgHgGgHAAQgHAAgGAFQgGAEgCAIIgEAAQACgOAIgHQAIgHAMAAQAKAAAJAIQAIAIAAAKQAAAIgEAHQgFALgNAOIgVAYIAZAAIALgBIAGgCQACgCACgDIADAAIgHATg");
	this.shape_15.setTransform(189.2,616.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAwQgCgDAAgDQAAgDACgCQACgCADAAIAGACIAFABQABAAADgCQADgDADgGIAEgMIgYgyIgEgGIgCgDIgGgCIAAgDIAgAAIAAADIgCAAQgDAAgCABQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAABIABAIIAQAhIAQglIABgGIgBgCIgCgBIgEAAIAAgDIAWAAIAAADIgEABIgDADIgDAGIgbBDQgEAJgGAFQgHAFgFAAQgFAAgDgCg");
	this.shape_16.setTransform(178,619.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAJAhQgCgCAAgHIgMAKQgEACgFAAQgHAAgEgFQgFgFAAgIQAAgFACgDQADgFAIgFQAHgDARgHIAAgCQAAgKgDgEQgEgEgFAAQgEAAgDADQgDACAAADIAAAFQAAADgBACQgCACgDAAQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAQgCgCAAgEQAAgGAGgFQAHgGAMAAQAIAAAFAEQAFACACAFQABADAAAKIAAAWIAAAMIACADIACAAIACAAIAGgGIAAAEQgJAMgHAAQgEAAgCgDgAgHAAQgFADgDAEQgCADAAAFQAAAFADAEQADADAEAAQAGAAAIgHIAAgZIgOAFg");
	this.shape_17.setTransform(171.125,618.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWAyIAAgCIAEAAQAGAAADgEQABgDAAgIIAAhCIglBTIgDAAIgnhTIAABCQAAAJACACQADAEAGAAIAEAAIAAACIgjAAIAAgCIADAAQAGAAADgEQABgDAAgIIAAhBQAAgGgBgDIgDgEQgEgBgFAAIAAgDIAcAAIAjBNIAkhNIAcAAIAAADIgDAAQgGAAgDADQgBADAAAIIAABBQAAAJACACQACAEAGAAIADAAIAAACg");
	this.shape_18.setTransform(160.7,616.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgCAsQgDgCgCgEQgCgDAAgIIAAgsIgKAAIAAgCQADgCAFgEIAIgKIADgJIACAAIAAAVIAQAAIAAAGIgQAAIAAArQABAHACACQABACADAAIAFgCIADgEIADAAQgDAIgEADQgFADgFAAIgFgBg");
	this.shape_19.setTransform(148.2,617);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAjIAAgDQAGAAACgCIADgDIAAgHIAAgZIAAgPQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgBIgGABIAAgCIAUgJIADAAIAAAPQAIgPAJAAQAEAAADADQACACAAAEQAAACgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgDAAgDgCQgDgDgCAAIgDABQgDAEgDAGIAAAgQAAAGABADIADADQADABAEAAIAAADg");
	this.shape_20.setTransform(143.625,617.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAOAzIAAgCQAGgBACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgDgHIgGgOIgmAAIgHAPQgCAGAAADQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACACAIABIAAACIggAAIAAgCIAIgDQAEgEAEgLIAkhRIABAAIAjBSQAEAKAEADQADADAGABIAAACgAgUAMIAhAAIgQgng");
	this.shape_21.setTransform(135.475,616.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAFIAAgKIAlAAIAAAKg");
	this.shape_22.setTransform(127.525,618.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiAzIAAgDIABAAQAEAAAEgBIABgDIABgJIAAg/IgBgIIgBgDIgDgBIgGABIAAgCIAUgJIAEAAIAAAQQAFgJAFgDQAFgEAFAAQALAAAGAIQAJAKAAAPQgBARgJALQgJAKgNAAQgEAAgEgCQgDgBgDgDIAAAUQAAAHABACQAAABAAAAQAAABABAAQAAAAAAABQABAAABAAIAGABIAAADgAgBgmQgEACgFAGIAAAaIAAAKQABAEAEADQAFADAEAAQAIAAAFgFQAFgIAAgNQAAgPgGgJQgFgFgHAAIgFABg");
	this.shape_23.setTransform(120.9,619.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAZAjIAAgDIABAAQAEAAADgCIACgDIAAgHIAAgcQAAgJgCgDQgCgFgHAAQgEAAgEACQgEACgFAGIAAAAIAAADIAAAgQAAAGABADIACACQADABAFAAIAAADIghAAIAAgDQAFAAACgBIADgEIABgHIAAgcQAAgJgDgEQgDgEgGAAQgEAAgEACQgGADgDAFIAAAjQAAAGABADQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAIAIABIAAADIgiAAIAAgDIAHgBIACgDQABgCAAgGIAAgZIAAgPIgCgDIgDgBIgFABIgBgCIAUgJIAEAAIAAAOIAIgIIAIgEQADgCAEAAQAHAAADAEQAFAEABAGQAIgIAFgDQAFgDAGAAQAFAAAFADQAEADACAGQACAEAAAKIAAAcIABAJIACACQACABAFAAIAAADg");
	this.shape_24.setTransform(111.575,617.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAYQgIgLAAgMQAAgJAFgIQAFgKAHgFQAIgEAHAAQAQAAAJAMQAIAKAAANQAAAIgFAKQgEAIgIAFQgHAFgJAAQgPAAgJgMgAgJgbQgEACgCAFQgDAGAAAJQAAAPAGAKQAGALAJAAQAHAAAEgGQAFgGAAgPQAAgRgIgKQgFgHgHAAQgEAAgEADg");
	this.shape_25.setTransform(101.825,618.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiAiQgKgOAAgTQAAgOAGgMQAHgNAMgGQAMgIANAAQALAAAKAGIAFACQAAAAABgBQAAAAABAAQAAAAAAAAQABgBAAAAQACgCABgEIACAAIADAjIgDAAQgEgQgJgHQgIgGgMAAQgJgBgIAGQgIAFgFALQgEALAAAPQAAAOAEAKQAEAKAJAFQAJAGAKAAQAKAAAHgEQAIgFAJgMIACACQgHANgLAGQgKAGgNABQgYAAgOgTg");
	this.shape_26.setTransform(93.025,616.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgNAiIgDgBQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABIgDAAIAAgYIADAAQACAKAFAGQAGAEAHAAQAFAAADgCQADgEAAgEQAAgEgDgEQgEgEgKgFQgLgEgDgFQgDgDAAgHQAAgJAGgFQAFgGAKAAQADAAAFACIAFABIACAAIACgDIACAAIAAAXIgCAAQgDgLgEgDQgFgFgGAAQgFAAgDAEQgDACgBADQABAEACAEQACACAIAEIAJAFQAPAHAAALQAAAKgHAFQgHAGgIAAQgGAAgIgCg");
	this.shape_27.setTransform(81.3,618.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAJAhQgCgCAAgHIgMAKQgEACgFAAQgHAAgEgFQgFgFAAgIQAAgFACgDQADgFAIgFQAHgDARgHIAAgCQAAgKgDgEQgEgEgFAAQgEAAgDADQgDACAAADIAAAFQAAADgBACQgCACgDAAQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAQgCgCAAgEQAAgGAGgFQAHgGAMAAQAIAAAFAEQAFACACAFQABADAAAKIAAAWIAAAMIACADIACAAIACAAIAGgGIAAAEQgJAMgHAAQgEAAgCgDgAgHAAQgFADgDAEQgCADAAAFQAAAFADAEQADADAEAAQAGAAAIgHIAAgZIgOAFg");
	this.shape_28.setTransform(75.175,618.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgPA1IAAgDIAGgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQABgCAAgGIAAg9QAAgLgBgCIgBgEIgDgBIgFABIgBgDIATgIIADAAIAABZQAAAGABACIADAEQACABAFAAIAAADg");
	this.shape_29.setTransform(69.475,616.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgMAiIgFgBQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABIgDAAIAAgYIADAAQABAKAHAGQAGAEAFAAQAGAAADgCQADgEAAgEQAAgEgEgEQgDgEgJgFQgLgEgEgFQgDgDAAgHQAAgJAFgFQAHgGAJAAQACAAAGACIAFABIACAAIACgDIACAAIAAAXIgCAAQgDgLgFgDQgEgFgGAAQgFAAgDAEQgDACAAADQAAAEACAEQADACAHAEIAJAFQAPAHAAALQAAAKgHAFQgHAGgJAAQgFAAgHgCg");
	this.shape_30.setTransform(64.5,618.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgVAyIAAgCIAEAAQAGAAADgEQACgCAAgKIAAg/IgBgKQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBgBQgDgBgDAAIgEAAIAAgDIArAAIAAADIgFAAQgFAAgEADQgBADAAAJIAAA/QAAAIABADIADADQADACADAAIAFAAIAAACg");
	this.shape_31.setTransform(58.95,616.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgCACgDQADgCACAAQAEAAACACQACADAAACQAAAEgCACQgCACgEAAQgCAAgDgCg");
	this.shape_32.setTransform(54.475,620.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAOAzIAAgCQAGgBACgBQABgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgDgDgHIgGgOIgmAAIgHAPQgCAGAAADQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACACAIABIAAACIggAAIAAgCIAIgDQAEgEAEgLIAkhRIABAAIAjBSQAEAKAEADQADADAGABIAAACgAgUAMIAhAAIgQgng");
	this.shape_33.setTransform(47.075,616.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAhQgCgBAAgEQAAgDACgDQADgDACABQADgBADADQACADAAADQAAAEgCABQgDADgDAAQgCAAgDgDgAgFgVQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQACACAAAEQAAADgCACQgCADgEAAQgCAAgDgDg");
	this.shape_34.setTransform(36.625,618.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeAwQgDgDABgDQAAgDABgCQACgCAEAAIAGACIAFABQACAAACgCQADgDACgGIAFgMIgYgyIgEgGIgDgDIgFgCIAAgDIAfAAIAAADIgBAAQgDAAgCABQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABIACAIIAQAhIAQglIAAgGIAAgCIgBgBIgFAAIAAgDIAWAAIAAADIgFABIgCADIgDAGIgbBDQgEAJgGAFQgHAFgFAAQgFAAgDgCg");
	this.shape_35.setTransform(30.7,619.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgsAyIAAgCIAEAAQAGAAADgEQABgDAAgJIAAg/QAAgKgCgCQgDgDgFAAIgEAAIAAgDIArAAQALAAAIACQALACAGAHQAFAHAAAJQAAAHgEAGQgFAGgJADQALABAFAFQAHAHAAAKQAAAHgFAHQgEAHgJADQgIADgRAAgAgQACIAAApQAJACAHAAQAOAAAHgGQAHgGAAgJQAAgGgDgFQgDgGgIgDQgHgDgJAAIgIAAIgGABgAgQgrIAAAnIAHABIAHAAQAKAAAGgCQAFgDADgEQADgFAAgGQAAgJgHgGQgHgGgNAAQgIAAgGABg");
	this.shape_36.setTransform(21.575,616.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(6,1,1).p("EgpagQFIAAgeIAA6RMBS1AAAIAAavgEgo8gNbMAg/AAAMAAAA4QMgg/AAAg");
	this.shape_37.setTransform(284.075,302.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFCC").s().p("EgpaANXIAAgeIAA6PMBS1AAAIAAatg");
	this.shape_38.setTransform(284.075,113.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF99").s().p("AgENXIAA6tIAJAAIAAatg");
	this.shape_39.setTransform(549.65,113.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFCCCC").s().p("AwecJMAAAg4QMAg9AAAMAAAA4Qg");
	this.shape_40.setTransform(127.525,396.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC66").s().p("AgENXIAA6tIAJAAIAAAeIAAaPg");
	this.shape_41.setTransform(18.5,110.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Character
	this.instance = new lib.Head();
	this.instance.setTransform(765.95,519,1,1,180,0,0,78,74.2);
	var instanceFilter_1 = new cjs.ColorFilter(0.57,0.57,0.57,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-4,-4,165,157);

	this.instance_1 = new lib.Head2("synched",0);
	this.instance_1.setTransform(612.15,307.4,1,1,180,0,0,78,74.2);

	this.instance_2 = new lib.Head("synched",0);
	this.instance_2.setTransform(424.4,516.3,1,1,180,0,0,78,74.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(496,345,519.4,280.5);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#CC9999",
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