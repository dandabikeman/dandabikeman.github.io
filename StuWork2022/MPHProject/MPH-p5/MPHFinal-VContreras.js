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


(lib.teethsmile = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADpilQggAaghAXQgeAUggARQgqAWgwAFQgPABgPAAQgrAAgpgRQgtgSgkgfQACAeAGAeQAHAoAKAnQAeANAfAJQAnALAoAIIAAhyADqilIA4BdADqilIAGgHIgjgogADpilIABAAACUAVQAQg7AZg3QASgmAagiAhtCMQAFAWAPAXQAPAWA3AQQBEgHAVgXIAeg0QgggMgigHQgdgHgcAEQgsAHgqAOgACUAVQgQANgSALQgaAPgcANIhKgKABkCNQAPgbALgcQANggAJghAipjeIg3AtIAtA8AjgixQgZAjgQAnQgRAngHAqAiaAWQAKAmAOAkQAIAXANAV");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA837A").s().p("AhTAOQgQgVgFgWQAqgOAsgHQAcgEAdAHQAiAHAgALIgeAzQgVAYhEAGQg2gQgPgWg");
	this.shape_1.setTransform(-0.5,17.0023);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B080C").s().p("AAlApQgdgHgcAEQgrAHgrAOQgMgVgJgXQgOgjgJgmQAdANAfAJQAnALAoAIIBKAKQAcgNAagPQASgLAQgNQgJAhgNAfQgLAcgPAbQgggMgigHg");
	this.shape_2.setTransform(-0.325,8.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBtIABhxIAegBQAvgFArgXQAfgRAegUQAigXAggZQgbAigSAmQgYA2gRA7QgQAOgSAKQgaAQgbAMgAh3BbQgfgKgegNQgKgogHgmQgGgegDgeQAkAfAuASQApARArAAIgBBxQgogHgmgLgAgogEIAAAAg");
	this.shape_3.setTransform(2.65,-4.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.teethsmile, new cjs.Rectangle(-30,-23.2,60,46.5), null);


(lib.teeth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACWgmQgnAWgrANQgpAMgpACQgUAAgVAAQgqgCgngMQgWgGgVgHIAKAHIg3B8QA3AXA5ALQAfAEAggIIAAhzQAogKAngKIAoBaIBzgyIgjhYICWhvQgTARgTAQQgSAQgUANQgkAZgmAYgAizgQQgegOgdgRQgfgRgegUQA8AiA8Aig");
	this.shape.setTransform(0.025,-0.0054);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcBdQg5gLg3gWIA3h8IgKgHIArANQAnANAqACIAogBQAqgCApgNQArgMAngWIAjBZIhzAxIgohZIhPAUIAAByQgVAEgUAAIgWgBg");
	this.shape_1.setTransform(-1.975,5.5446);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.teeth, new cjs.Rectangle(-30.9,-16,61.9,32), null);


(lib.smile2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ACZg0IAIA0IAKA1AChAAQilAuimgh");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smile2, new cjs.Rectangle(-19,-7.2,38.1,14.5), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AD0iQQggAXgiAPQgiAPgiAMQgiALgjAGQgjAGgiADQglACgjgHQgsgIgugPQgTgFgSgHQgdgMgcgOQgTgKgTgLQAXAcASAeQAFAIAAALQAlAiAqAbQAoAYAvAMQAXAIAZACQA3gFAxgTQBEgZA2gxQAsgpAkgxgAEKh7IA5AcQgJgDgHgDQgWgJgTgNIgWgVQgVgdAEgkQAAgFABgGADlgGIAEheIAhgXAjtCzQANAKAOAEQAkAOAmAEQA2AIA3ACQAyABAygDQA0gqApg0QAlguAUg4QAFgPABgOQgwAdg0AXQhWAkhcARQgeAFggAFQgpADgoAMgAkUg/QACAvAAAtQAAAwAKAsQAHAfAUAb");
	this.shape.setTransform(0,-0.0107);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA837A").s().p("AgWByQg3gCg2gIQgmgEgkgOQgPgEgMgKIAtg3QAogMApgDIA+gJQBbgRBWgkQA0gXAwgeQgBAPgEAPQgVA4glAtQgpA0g0AqQgkACgjAAIgcAAg");
	this.shape_1.setTransform(-0.45,10.6643);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B080C").s().p("AkCBoQgLgsABgwQAAgtgCgvQAlAiAqAbQAoAYAvAMQAXAIAZACQA3gFAxgTQBEgZA1gxQAsgpAkgxIAWAVIghAXIgEBeQgwAdg0AXQhWAkhbARIg+AKQgpADgoAMIgtA3QgUgbgHgfg");
	this.shape_2.setTransform(-0.55,1.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhHBVQgugNgogZQgqgaglghQgBgLgFgIQgSgfgWgbIAmAVQAcAOAcAMIAmAMQAtAPAtAIQAiAGAkgCQAjgDAjgFQAjgGAigMQAigLAigPQAigQAggXQgkAygsAoQg2AxhEAZQgxAUg2AFQgZgDgYgHg");
	this.shape_3.setTransform(-3.925,-5.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smile, new cjs.Rectangle(-33.2,-23.1,66.5,46.2), null);


(lib.smallnose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAUgPIAOAfIAgAdIAoAHIAOgZIgVggIgoguIgggHgAgTgvIgLA4IgcAoIgdAKIgggSIAHgZIBLhHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0500D").s().p("Ah3ApIAHgZIBLhHIASAIIgLA4IgcAoIgcAKgABCAsIgggcIgOgfIAHgrIAgAIIAnAuIAWAfIgPAZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smallnose, new cjs.Rectangle(-12.9,-6.9,25.9,13.8), null);


(lib.purpleeyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgUjgIA4AKQAigwAogqQAXgYAfgNQAVgJAYgFIA+AZIgagtIhegFQgiARgbAZQg7A1gzA9gAHLBnQgIg9gRg4QgOgxgcgqQgWgigdgaQgfgagkgRQgdgOgggBQgfgEgdAIQghAKgdATQglAYgfAfQgVAWgRAZQgggjglgcQgmgcgvgJQgvgIguANQgzARgmAlQgrApgbA2QgZAzgKA5QgFAaAEAcQAsAFArAFQArACArAAQArAAAsgBQArgFArgEAhtjRIAfgUIgVgjQhGgGhFAJQgsAEgpASQAegEAfgDQAOAAAPABQANABAOABQANACANADQAmAJAhAUgAglB1QgFgXAAgWQABgoAHgnQAIgpALgoAhHB7IAigGQAaACAaADQAbACAaACQAbABAaAAQAaABAaAAQAagBAaAAQAagBAagBQAZgCAagCQAZgDAZgDAgFDbQgNgkgLgjQgFgQgDgPAnJCAQAEAbAKAaQAUA3AlAsQAiAnAwAVQAwAUA0gBQA1gEAtgbQAsgaAfgpQAQgUAKgWAGmBtIAlgGQgDAYgHAXQgEAMgEANQAAABAAAAQgYA/gfA8QgeA6hkAXQhjAIhKgmQgigmgcgqQgQgYgKgb");
	this.shape.setTransform(0.0059,-0.0062);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("ABTBsQgjgmgbgqQgRgYgJgaIgZhHQgFgQgDgPQADAPAFAQIAZBHQgLAWgQATQgfApgrAaQguAbg0AEQg1ABgvgUQgxgVghgnQgmgrgUg3QgKgagDgbIBWAKQAsACArAAQArAAArgBIBWgJQgIAGgEAIQgGAKAAANQABAYAWALQAKAEANACQAaAAALgWQADgHACgHQABgIgBgHQgGgYgYgKIAigGIA0AFIA1AEIA1ABIA1ABIA0gBIAzgCIAzgEIAzgGQgVAQAEAcQABALAJAJQATAQAYgDQAQgDAKgNQgXA/ggA7QgeA6hkAXIghABQhOAAg9gfgAGliEIAmgGQgEAYgHAXQgBgegagLg");
	this.shape_1.setTransform(0.1,24.1938);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC99FF").s().p("AkcC2QgrAAgrgBIhXgLQgEgcAFgaQAKg5AZg0QAbg1ArgpQAmglAzgQQAugOAvAIQAvAKAmAcQAlAbAgAkQARgaAVgWQAfgfAlgYQAdgTAhgKQAdgHAfAEQAgABAdANQAkARAfAbQAdAaAWAhQAcArAOAvQARA6AIA8IglAGIgHgCQgUgCgRAKIgyAGIgzAEIg0ADIg0AAIg0AAIg1gCIg1gDIg0gGQgFgWAAgWQABgpAHgnQAIgoALgoQgLAogIAoQgHAngBApQAAAWAFAWIgiAGIgGgBQgTgBgPAJIhWAKIg6ABIgdgBg");
	this.shape_2.setTransform(0.0059,-4.2862);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiSEmQgNgBgKgFQgWgKAAgZQgBgNAGgKQAEgIAIgGQAQgJASABIAGABQAYAKAGAZQACAHgCAIQgBAHgEAGQgLAXgZAAIgBgBgAE1EJQgJgIgBgMQgEgbAVgRQARgKATACIAIACQAaAMABAdQAAAIgCAGQgDAHgEAGIAAgBIAJgaIgJAaIAAABQgJAMgRAEIgGAAQgVAAgQgOgAF6EHIAAAAgAjyiXIgbgGIgbgCIgcAAIg+AGQAqgSArgEQBFgIBHAFIAVAjIggAVQgggVgmgIgAhTiKQA0g8A6g2QAcgYAigSIBeAFIAaAuIg/gaQgXAFgWAKQgfANgWAYQgoAqghAwg");
	this.shape_3.setTransform(6.2792,-8.6995);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purpleeyes, new cjs.Rectangle(-46.9,-39.1,93.9,78.30000000000001), null);


(lib.pop_eyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AB8oEIAFA6IhwAeIgvA6IgFgzIA5hJgADEidIhRAAQg5AHg3AKQg8AMg7AUQgwAQgrAcQgXAQgQAYQgNAUgHAXQgKAdABAdQACA6AKA7QAfAkAjAiQAZAZAgARQAuAYAxASAh9jFIDwADIA+AAQgRgWgTgTQgkgjgnghIhcAHQgMAZgQAXQgPAVgWAPQgQAKgSAFQgSAGgTABQhVALhUAKQgvAIgsAQQhNAchLAhQgNAvgMAuAEOidIhKAAIgTglAIejAIgihLIhdgdQgnAPghAWQglAZgfAgIgFAtAIiGFQAMgYAIgZQAThBAIhDQAMhfgIheQgHhKgXhIQgLghgOggIkQAjAFvn1IAFBQIB0AmIBXB7IAVgrQgZg3gjgwQgfgogtgXQgsgVgxgLgAhSFfQAQAcAVAZQAbAgAfAeIBDgPIA7g7IB+gHQAVAsAfAlQAXAdAgAWIBOgIQAwg8Awg8AEJGBIEZAEApFCiQAIAXAQASQAnAuAuApIE3BBIBPgEIAlgDIC4As");
	this.shape.setTransform(0.6141,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("ABrFnQgfglgWgsIEaAEIhgB5IhPAHQgfgWgXgdgAj/EpQgVgZgQgcIAlgCIC4ArIg6A7IhEAPQgfgdgbghgABAk0QAgggAlgZQAhgWAngPIBcAdIAjBLIkQAjgAhfksIjwgDQASgFAPgKQAXgPAPgVQAQgXAMgZIBcgHQAnAhAlAjQATATARAWg");
	this.shape_1.setTransform(21.65,10.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtD7QgxgTgugYQgggQgZgZQgjgigfgkQgKg7gCg5IAAgGQAAgaAJgaQAHgYANgTQAQgYAXgRQArgbAwgRQA7gUA8gLQA3gLA5gHQg5AHg3ALQg8ALg7AUQgwARgrAbQgXARgQAYQgNATgHAYQgJAaAAAaIAAAGQACA5AKA7QAfAkAjAiQAZAZAgAQQAuAYAxATIglACIhPAFIk3hBQgugpgnguQgQgSgIgXQAQASAZABQAegEARgXQAZglAAgtQgBgwgagkQgLgRgUgGQgUgGgRAJQgZAQgLAaIAZheQBLghBNgcQAsgQAvgHICpgWQATgBASgFIDwACIAAAlIBRAAIBKAAIEQgjQAOAgALAhQAXBJAHBKQAIBdgMBfQgIBDgTBAQgIAZgMAZIkZgFIh+AHgAj7hJQgWAgAAAsQAAAtAWAgQAVAgAeAAQAeAAAVggQAVggAAgtQAAgsgVggQgVgggeAAQgeAAgVAggAgtD7IAAAAg");
	this.shape_2.setTransform(0.6141,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjzFLQgVggAAgtQAAgtAVggQAVggAeAAQAeAAAWAgQAVAgAAAtQAAAtgVAgQgWAggeAAQgeAAgVgggAo9E8QgcgjgCgtQgCgmAOgjQAMgaAZgQQARgKAUAHQATAGAMARQAaAkAAAwQABAugaAkQgRAYgdADQgZAAgRgSgAHxjlIh1gmIgFhQQAxALAsAVQAuAXAeAoQAjAwAZA3IgUArgAgbkLIA6hJIBmgWIAFA6IhwAeIgwA6g");
	this.shape_3.setTransform(-0.2371,-15.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pop_eyes, new cjs.Rectangle(-60.6,-52.6,122.30000000000001,105.30000000000001), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAhRQgDAWgFAVQgmDJijB2QgxAkhAAEQhIAFhBgcIgohLIAZg3IAogUIgPAeIAFBBIAZAUICHgeQAaiPAaiNIADhkQAcg/AzguQAygsBMgPQBHgNBJA4QBxBYACCUQABBmAdBlQAVBLBJAXQAcAKAhgDIAjgyIgUhBIAZAAIAoBkIgoAyQheAahfgZQiRgjhEiKQgdg7gNhAQgJgsgHgtg");
	this.shape.setTransform(0.025,0.0092);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnLEqIgohLIAZg3IAogUIgPAeIAFBBIAZAUICHgeIA0kcIADhkQAcg/AzguQAygsBMgPQBHgNBJA4QBxBYACCUQABBmAdBlQAVBLBJAXQAcAKAhgDIAjgyIgUhBIAZAAIAoBkIgoAyQheAahfgZQiRgjhEiKQgdg7gNhAQgJgsgHgtIgIArQgmDJijB2QgxAkhAAEIgUABQg9AAg4gYg");
	this.shape_1.setTransform(0.025,0.0092);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mustache2, new cjs.Rectangle(-50.9,-33.2,101.9,66.4), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgBBUIgnAbQhOAEhqgDQgxgEgZgEQgZgFgtgXQgtgYg7gsQgkgZgdghQgTgVgNgZQgFgJgBgLQAwAsAzAnQAyAlA4AeQAsAZAxAQQAUAGAWAAQAVAAAWgCQAWgFAUgIQAvgTAwgOQAQgFASADIARARIAJAMQAJgZAbgHQAhAJAhAMQAeANAfAHQA/ALA/gOQAugIAqgYQAegSAcgUQAsgjAtgiQAWgSAXgPIACATQhRBLhaA8Qg7AphHALQhiAQhkABQgIAAgIgBQgHgCgIgBQgGgCgHgBQgFgDgGgBQgEgDgEgDQgEgCgDgDQgFgFgDgGIgDgk");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA9BzIgPgCIgNgDIgLgFIgIgFIgHgFIgIgLIgDgkIAJALQAJgYAbgHQAhAJAhAMQAeANAfAGQA/AMA/gOQAugIAqgZQAegRAcgUIBZhFQAWgSAXgPIACAUQhRBKhaA8Qg7AohHAMQhiAQhkAAIgQgBgAjgBwQgxgEgZgFQgZgEgtgXQgtgYg7gsQgkgZgdghQgTgVgNgZQgFgJgBgKQAwArAzAoQAyAkA4AdQAsAaAxAQQAUAGAWAAQAVAAAWgCQAWgFAUgIQAvgTAwgPQAQgEASADIARARIADAkIgnAbQgsACg1AAIhXgBgAgEAwg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mustache, new cjs.Rectangle(-58.6,-12.6,117.30000000000001,25.299999999999997), null);


(lib.medium_nose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAXBQIAZASIAnAHIA9gHIAngVIAWggIgLgnIgngVIgSgZIgkgkIgngVIgygHIg1ADIhDAWIgZAVIgWAyIgnAVIgSAVIALAgIASAOIAcAIIAgAAIAZgIIBEALIAcAAgAAkBEIBJAMIAggVIgHgOIgdgEIg5AOIgMANIgNAMAh1AiIgiAAIgSASIAgAOIAPAAIAcAOIgXguIgJgS");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C3000").s().p("AAyALIANgMIA5gOIAcAEIAHANIggAVgAhsAJIgOAAIgggNIASgSIAiAAIAXAtg");
	this.shape_1.setTransform(-1.425,5.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDBC7A").s().p("AAwBiIgZgSIANgMIBJAMIAggVIgHgOIgdgEIg5AOIgMANIgNAMIgVALIgcAAIhEgLIgXguIgJgSIAJASIgiAAIgSASIAgAOIAPAAIAcAOIgZAIIggAAIgcgIIgSgOIgLggIASgVIAngVIAWgyIAZgVIBDgWIA1gDIAyAHIAnAVIAkAkIASAZIAnAVIALAnIgWAgIgnAVIg9AHgAheBQg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.medium_nose, new cjs.Rectangle(-21.8,-11.5,43.7,23.1), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGxBsQgHg2gFg2QgFgrgFgsQgJhVgRhUQgMg5gcgyQgdgzgpgsQgcgGgdAAQghAAggALQgkALgaAXQg+A3g2A/Ig/gNQg+hChCg9QgXgUgagQQghATgcAYQgWAUgOAbQgRAhgGAkQgLA9gGA/QgIBfgMBeIgTBqQgRAMgTAJQggARggAQQgsATgpAYQgaAQgWAUQgYAVgVAWIgFBGIAnArQBPAaBRAQQBgAWBiANIGzALIEPgFQBUgNBTgSQAqgHAngPQAegKAZgSQAZgRAWgWIAAhFQgigmgmggQgfgcgmgTQgigTgkgNQgogPgpgMgAmmgFIgTDoQAmAcArAQQBFAZBLAIQBtALBuAGQBMAABMgFQBGgHBFgPQAwgLAqgXQAigSAdgbIgOhr");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#445A5E").s().p("AlLDnQhigNhggWQhRgQhPgaIgngrIAFhGQAWgWAXgUQAWgUAagQQApgYAsgUQAhgPAfgRQATgJARgNIAThqIgTDoQAmAcArAPQBGAaBKAIQBuALBtAGQBLAABNgGQBGgGBEgPQAxgLAqgXQAigSAdgaIgOhrQApAMAoAPQAkANAiATQAlATAgAcQAmAfAhAmIAABEQgVAWgZASQgaARgdALQgoAOgpAIQhTAShUANIkQAFg");
	this.shape_1.setTransform(0,23.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66828A").s().p("AjaF+QhLgHhFgaQgrgPgmgdIASjoQAMheAJheQAGg/AKg+QAGgkASghQAOgbAWgTQAcgZAhgTQAaAQAXAVQBCA9A+BCIA+ANQA2g/A+g3QAbgYAjgLQAggLAhAAQAdAAAdAHQAoAsAdAzQAcAxAMA6QARBUAKBVIAJBXQAFA1AHA2IAPBrQgdAcgiASQgrAXgwALQhFAOhGAHQhMAGhMAAQhtgHhtgLg");
	this.shape_2.setTransform(0.25,-7.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat, new cjs.Rectangle(-73.4,-48.8,146.9,97.69999999999999), null);


(lib.eyebrowseyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHciHIAfgRIBzALIhJhCQg1gFg1gFQgZACgWAJQhaAhhXAmIkRBoIAJA1IC8ggAgtAWQAOAhASAeQAUAkAeAcQAeAdAmARQAoATAsAEQAsACAsgNQAkgJAhgTQAhgUAbgbQAjgkAWgtQATgoABgrQACgzgJg0IjoBXAhogPQhjgmhhgqQhTgjhSgmQgaAFgWAKQg3Acg1AhIBzAtIEAAuAhogPIAIhSAg6hxIAEBSAhlAJIgiADAn6gvQAEAuAJAtQAFAZAOAWQAPAYAXATQAXAUAbALQAlAQAngFQArAIArgMQAcgHAcgLQAig8Adg/QAFgKgBgMIgDgY");
	this.shape.setTransform(0,0.0138);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADICxQgsgEgogTQgmgRgegdQgdgcgUgkQgSgegOggIC7ghQgJAYAIAZQADAMAGALQAGALAIAIQAIAHALAFQAJAEAKADQALgCALgDQAcgIALgcQAFgMACgLQALgyglgiIDnhXQAJA0gBAzQgBAsgUAnQgVAtgjAkQgbAbghAUQghATglAJQglALgmAAIgNAAgAkqCHQgnAFglgQQgbgLgXgUQgXgTgPgYQgOgWgFgZQgJgtgEguIEAAuQgLASgCAXQgEAxApAdQAVAPAYgIQAXgHANgUQAOgUACgYQACgXgIgSIAigDQABAMgFAKQgdA+giA8QgcALgcAHQgZAHgZAAQgSAAgSgDg");
	this.shape_1.setTransform(-1.1893,4.1138);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjiCjQgpgcAEgyQACgYALgSIkAgtIhzgtQA1ggA3gdQAXgKAZgFQBSAmBTAjQBhAqBjAmIADAZIgiACQAIATgCAXQgCAZgOATQgNAUgXAHQgIADgHAAQgPAAgPgKgAC3CKQgKgEgIgIQgJgIgGgLQgFgLgEgMQgHgaAIgYIi7AiIgJg3IERhnQBXgmBZghQAXgJAZgCIBpAKIBKBCIhzgKIggAQIjnBXQAlAhgKAyQgDANgEALQgMAcgcAIQgKAEgLABQgLgCgJgFg");
	this.shape_2.setTransform(0,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrowseyes, new cjs.Rectangle(-63.1,-22.8,126.30000000000001,45.7), null);


(lib.confusedeyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACHiNIgJBeIFEAAIgTg2Qgwgdg0gQQg8gTg/AFQglAEgkAPgAAABRIIrAAQACAagCAaQgCAegNAaQgQAggbAXQgrAkgzAUQgsASgvgBQhSgChRgMQgtgmgmgsQgfgmgYgsQgOApgVAlQgVAngkAaQgpAegxANQg4AOg4gEQg/gIg2gfQg/glg3gyIgliAIEcAAAjCjaQg9ASg6AZQgsATgnAdQgQAMgOAOIgZAHQgCggAIgeQANg3AmgnQAwgxBCgZQAbgLAfAAgAjfBRIDfAAAALCLIgLg6");
	this.shape.setTransform(0.0194,0.035);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkbB/Qg/gJg2gfQg/gkg3gyIglh/IEcAAQgMAKgHAPQgNAcAPAfQAJATATAHQAWAIASgOQALgIAGgNQALgZgHgZQgFgXgTgKIDfAAIALA5QgOApgVAlQgVAngkAaQgpAegxAMQgtALgsAAIgXAAgAE4BsQhSgChRgLQgtgngmgsQgfglgYgsIgLg5IIrAAQACAagCAaQgCAdgNAaQgQAggbAXQgrAjgzAVQgqAQgsAAIgFAAgADNhpQgPARAAAaQAAAZAPASQAPASAUAAQAVAAAPgSQAOgSAAgZQAAgagOgRQgPgSgVAAQgUAAgPASgAAAh+g");
	this.shape_1.setTransform(0.0194,20.885);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADOD9QgPgRAAgaQAAgaAPgRQAPgSAUAAQAVAAAPASQAOARAAAaQAAAagOARQgPASgVAAQgUAAgPgSgAkDEAQgTgHgJgTQgPgfANgcQAHgPAMgKQAUgOAWAKIAGAEQATALAFAWQAHAZgLAZQgGANgLAJQgLAIgNAAQgIAAgIgDgAB/ARIAJhdQAkgPAlgEQA/gFA8ATQA0AQAwAdIATA1gAm8hbQANg3AmgnQAwgxBCgZQAbgLAfAAIAcB1Qg9ASg6AZQgsASgnAeQgQAMgOAOIgZAGQgCggAIgdg");
	this.shape_2.setTransform(-0.0961,-6.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.confusedeyes, new cjs.Rectangle(-56.6,-34.5,113.30000000000001,69.1), null);


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


(lib.bignose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FED0C0").ss(1,1,1).p("AgvgBIBfAD");
	this.shape.setTransform(-0.7,-22.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ACiATQgkgsgfgvQgagogPgtQgKgegDggAiJCpQA3ArBDAKQArAEAsgGQAcgFAsguQAfgbAYgfQAPgUAJgZIgLgvIgZgLIgZALQACAygGAxQgDAagLAZAg2jfIAAABQABAdgJAbQgTA7ggA3QgRAfgRAdIg5APIgSAuIARArQAGAJAIAHQAZAWAdATAiTAIQgaA+AVA/QAGASAJAS");
	this.shape_1.setTransform(0.025,0.0262);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDBC7A").s().p("AgPDeQhDgKg3grQgJgSgGgSQgKgcAAgcQAAgjAPgiIAig8QAgg3ATg7QAJgbgBgdIAAgBIBfAEQADAgAKAeQAPAtAaAoQAfAvAkAsIABAVQAAAngFAnQgDAagLAZQgsAugcAFQgbAEgbAAQgRAAgQgCgACQCpIAAAAgACeB2QAFgnAAgnIgBgVIAZgLIAZALIALAvQgJAZgPAUQgYAfgfAbQALgZADgagAi/CAQgIgHgGgJIgRgrIASguIA5gPQgPAiAAAjQAAAcAKAcQAGASAJASQgdgTgZgWgAiTAIIAAAAg");
	this.shape_2.setTransform(0.025,0.0262);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bignose, new cjs.Rectangle(-23.3,-23.3,46.7,46.7), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApbAwIAagRQAHgoAPgkQAOgeAPgeQAjhEAtg/QA3hOBHhAQAggeAngUQATgJATgIQAegLAfgHQADgBADgBQA6gNA8gCQBJgCBHAOQAHACAIABQAjAIAhAMQAbAKAaAOQA3AbAuAoQAuApAnAwQAjAqAZAyQARAhAOAjQALAdAJAdQANAtAHAuIAhARQgpAHgoAIQgpAGgoAGQgoAFgnAFQgoAEgoAEQgnADgnADQgnACgmACQgnABgmABQgmAAglAAQgmAAglgBQglgCglgCQglgDglgDQgkgEglgEQgkgFgjgEQgkgGgjgGQgkgHgjgHQgjgIgjgIgAJcA9IAhARQARAiAKAkQAeBiAXBlIgUAvIg8AaIkDAoIjNAVIk+AAIkXgbQhngRhigfQgQgFgOgGQgggOgdgVQAJg2ANg1QAOg9AVg7QACgFACgFQALgeAOgcIAbgR");
	this.shape.setTransform(0,0.0375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AiRDZIkXgcQhngRhigeQgQgFgOgHQgfgOgegUQAKg2AMg0QAOg9AVg7IAEgLQALgdAOgdIAbgRIBGAQIBHAOIBHAMIBIAKIBIAIIBKAGIBKAEIBLAAIBLAAIBNgBIBNgEIBOgHIBQgIIBPgKIBRgMIBRgOIAhARQAQAhALAkQAdBjAYBjIgUAvIg8AbIkEAoIjMAVg");
	this.shape_1.setTransform(0,26.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006633").s().p("AgYErIhLAAIhKgEIhKgGIhIgIIhIgKIhHgMIhHgOIhGgQIAagRQAHgoAQgkQANgfAPgdQAkhFAsg9QA3hOBHhBQAggdAngUQATgKATgHQAegMAfgHIAGgBQA7gOA8gBQBHgCBIAOIAPADQAiAHAiANQAbAKAaANQA2AbAvApQAuAoAnAwQAiArAaAwQARAiANAjQALAcAKAeQANAsAHAvIAhASIhRAOIhRAMIhPAKIhQAIIhOAHIhNAEIhNABIgmAAIglAAg");
	this.shape_2.setTransform(0,-18.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.beanie, new cjs.Rectangle(-72.7,-49.1,145.4,98.30000000000001), null);


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
	this.shape_4.graphics.f("rgba(255,255,255,0.094)").s().p("AAICYIABAAQADgCABgCQACgDgCgEQgwiLAjiPQAAgDAAgDQgCgCgDgCIgCgBIABgBIABAAQAEABABAFQACADgBAEQgjCOAxCLQABAEgBADQgCAEgEABIAAABIgBgCg");
	this.shape_4.setTransform(-35.8704,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.114)").s().p("AAKCYIgBgBQADgBABgDQABgCgBgDQgxiLAkiQQAAgCAAgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCAAIAAgCIACAAQAEACAAACQACADgBAEQgjCOAxCLQABAEgBADQgCADgDABg");
	this.shape_5.setTransform(-36.041,6.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.055)").s().p("AAHCcQAEgCACgFQACgEgCgFQgwiKAjiNQABgFgCgEQgCgEgFgCIgBAAIAAgCIACAAQAFACACAFQACAFgBAFQgiCNAwCKQACAFgDAFQgCAFgFACIAAgBg");
	this.shape_6.setTransform(-35.5135,6.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.075)").s().p("AAICaIAAgBQAEgBABgEQACgDgCgEQgwiLAjiOQABgEgBgDQgCgFgEgBIgCAAIABgBIABAAQAFABABAFQADAEgBAFQgjCNAwCKQACAFgCAEQgCAFgEABIgBgBg");
	this.shape_7.setTransform(-35.7008,6.9);

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


// stage content:
(lib.MPHFinalVContreras = function(mode,startPosition,loop,reversed) {
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
		this.Face1.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eyebrowseyes.x = 680;
			this.eyebrowseyes.y = 257;
			this.smile.x = 685;
			this.smile.y = 332;
		this.hat.x = 666;
			this.hat.y = 159;
		this.medium_nose.x = 672;
			this.medium_nose.y = 300;
		this.mustache.x = 674;
			this.mustache.y = 310;
		
		}
		
		this.pop_eyes.on("pressmove", dragMe);
		this.purpleeyes.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
		
		this.eyebrowseyes.on("pressmove", dragMe);
		this.confusedeyes.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
		
		this.smile.on("pressmove", dragMe);
		this.teethsmile.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
		
		this.teeth.on("pressmove", dragMe);
		this.smile2.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
		
		this.hat.on("pressmove", dragMe);
		this.beanie.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
		
		this.mustache.on("pressmove", dragMe);
		this.mustache2.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
		
		this.smallnose.on("pressmove", dragMe);
		this.medium_nose.on("pressmove", dragMe);
		this.bignose.on("pressmove", dragMe);
		
		this.Face2.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.beanie.x = 659;
			this.beanie.y = 159;
			this.purpleeyes.x = 673;
			this.purpleeyes.y = 252;
		this.bignose.x = 673;
			this.bignose.y = 300;
		this.mustache2.x = 673;
			this.mustache2.y = 327;
		this.smile2.x = 673;
			this.smile2.y = 362;
		}
		
		this.Reset.addEventListener("click", ClickReset.bind(this));
		
		function ClickReset() {
			this.eyebrowseyes.x = 92;
			this.eyebrowseyes.y = 268;
			this.smile.x = 80;
			this.smile.y = 417;
		this.hat.x = 265;
			this.hat.y = 74;
		this.medium_nose.x = 265;
			this.medium_nose.y = 344;
		this.mustache.x = 451;
			this.mustache.y = 162;
		this.beanie.x = 445;
			this.beanie.y = 75;
			this.purpleeyes.x = 93;
			this.purpleeyes.y = 185;
		this.bignose.x = 456;
			this.bignose.y = 245;
		this.mustache2.x = 266;
			this.mustache2.y = 183;
		this.smile2.x = 59;
			this.smile2.y = 579;
			this.pop_eyes.x = 93;
			this.pop_eyes.y = 78;
			this.eyebrowseyes.x = 92;
			this.eyebrowseyes.y = 268;
		this.confusedeyes.x = 92;
			this.confusedeyes.y = 338;
		this.teethsmile.x = 68;
			this.teethsmile.y = 484;
		this.smallnose.x = 265;
			this.smallnose.y = 273;
			this.teeth.x = 64;
			this.teeth.y = 536;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABIQgHgEgFgIQgFgHgCgJQgBgJAAgWIAAgWIgRAAIA6hCIAAAiIARAAIAAAgIgRAAIAAAPIABARQABAFAFABQAGAAAEgJIAAAvQgKAJgPAAQgHAAgGgEg");
	this.shape.setTransform(498.6,580.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAsQgMgRAAgdQgBgRAHgOQAGgOAJgHQAKgGAKAAQAIAAAHAEQAIAEAGAHQAGAIADALQADALABAHIAAAQIgqAAQADAJAFAFQAGAFAHAAQANAAAIgNIAAAVQgNAagZAAQgVAAgMgRgAABgZQgBAFgBAHIAAABIASAAQAAgIgCgFQgDgFgEAAQgEAAgDAFg");
	this.shape_1.setTransform(490.4,581.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRA5QgMgDgKgGIAJghQAEAIAGAFQAHAFAFAAQAIAAAAgJQAAgDgCgDQgBgCgEgCIgJgEQgKgEgFgJQgFgJAAgMQAAgRALgJQAKgKASAAQATAAAQAKIgKAeQgKgNgJAAQgDAAgCACQgCACAAADQAAAFADADQADACAHADQAQAFAEAJQAFAKAAALQAAASgKAKQgKALgRAAQgIAAgMgEg");
	this.shape_2.setTransform(481.375,581.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAsQgNgRAAgdQAAgRAHgOQAGgOAKgHQAIgGALAAQAIAAAIAEQAGAEAGAHQAHAIADALQADALABAHIABAQIgrAAQADAJAFAFQAFAFAHAAQAOAAAJgNIAAAVQgOAagaAAQgTAAgNgRgAABgZQgCAFABAHIAAABIARAAQAAgIgCgFQgDgFgEAAQgEAAgDAFg");
	this.shape_3.setTransform(472.55,581.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJBKIAAgBQAAgagFgOQgEgOgJAAIgBAAIAAA3IgtAAIAAiTIAtAAQAWgBAJACQAHACAGAFQAGAGAEAJQADAKABALQAAAWgMAKQAQAcAEArgAgKgOIABAAQAHAAACgDQADgEAAgIQAAgOgMAAIgBAAg");
	this.shape_4.setTransform(462.15,580.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgoBMIAWgpQALgWAAgNQAAgGgDgFQgCgEgFAAQgKAAgMAaIAAhDQAKgKAIgEQAIgFALAAQAKAAAKAIQALAIAEAOQAFAPAAARQAAAKgBAJIgIAZQgFAOgCADIgBABIATAAIAAAbg");
	this.shape_5.setTransform(389.45,582.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAsQgNgRABgdQAAgRAGgOQAGgOAJgHQAKgGALAAQAHAAAHAEQAHAEAHAHQAFAIAEALQAEALAAAHIAAAQIgpAAQACAJAGAFQAEAFAHAAQAOAAAIgNIAAAVQgOAagZAAQgTAAgNgRgAABgZQgBAFAAAHIAAABIASAAQgBgIgDgFQgCgFgEAAQgEAAgDAFg");
	this.shape_6.setTransform(372.35,584.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAsQgNgQAAgdQAAgVAMgTQAMgTAYAAQAMAAAPAHIAAA0QgMgJgKAAQgGAAgDADQgEADAAAEQAAALAOAAQANAAAIgGIAAAzQgMAFgOAAQgWAAgOgRg");
	this.shape_7.setTransform(363,584.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiAzQgGgJAAgNQAAgQAHgJQAIgIANAAQAGAAAGADQAAgRgPAAQgMAAgLAJIAAgkQAQgOAWAAQANAAAIAFQAIAEAFAIQAEAJACAJQABAIAAARIAAA6IgpAAIAAgJQgDAEgFADQgGADgFAAQgJAAgGgJgAgMARQgCADAAAEQAAAFACAEQADADADAAQAFAAABgDIAAgRIgGgBQgDAAgDACg");
	this.shape_8.setTransform(353.875,584.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgpBLIAAiVIBTAAIAAAmIgnAAIAAAbIAcAAIAAAkIgcAAIAAAwg");
	this.shape_9.setTransform(345.1,582.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWBMIAAiEIAsgTIAACXg");
	this.shape_10.setTransform(267.05,582.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAsQgNgRAAgdQAAgRAHgOQAGgOAKgHQAJgGAKAAQAIAAAIAEQAGAEAGAHQAHAIADALQADALABAHIABAQIgrAAQADAJAFAFQAFAFAHAAQAOAAAJgNIAAAVQgPAagYAAQgVAAgMgRgAABgZQgBAFgBAHIAAABIASAAQAAgIgCgFQgDgFgEAAQgEAAgDAFg");
	this.shape_11.setTransform(249.9,584.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAsQgOgQAAgdQAAgVAMgTQAMgTAYAAQAMAAAPAHIAAA0QgMgJgKAAQgGAAgEADQgDADAAAEQAAALAOAAQANAAAIgGIAAAzQgLAFgOAAQgXAAgNgRg");
	this.shape_12.setTransform(240.55,584.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiAzQgGgJAAgNQAAgQAHgJQAIgIANAAQAGAAAGADQAAgRgPAAQgMAAgLAJIAAgkQAQgOAWAAQANAAAIAFQAIAEAFAIQAEAJACAJQABAIAAARIAAA6IgpAAIAAgJQgDAEgFADQgGADgFAAQgJAAgGgJgAgMARQgCADAAAEQAAAFACAEQADADADAAQAFAAABgDIAAgRIgGgBQgDAAgDACg");
	this.shape_13.setTransform(231.425,584.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgpBLIAAiVIBTAAIAAAmIgnAAIAAAbIAdAAIAAAkIgdAAIAAAwg");
	this.shape_14.setTransform(222.65,582.55);

	this.Reset = new lib.arcadebuttonred();
	this.Reset.name = "Reset";
	this.Reset.setTransform(475.05,535.15,0.8265,0.6651);
	new cjs.ButtonHelper(this.Reset, 0, 1, 2, false, new lib.arcadebuttonred(), 3);

	this.Face2 = new lib.arcadebuttongreen();
	this.Face2.name = "Face2";
	this.Face2.setTransform(362.9,535.1,0.8482,0.6643,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.Face2, 0, 1, 2, false, new lib.arcadebuttongreen(), 3);

	this.Face1 = new lib.arcadebuttonblue();
	this.Face1.name = "Face1";
	this.Face1.setTransform(248.7,535.3,0.8265,0.666,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.Face1, 0, 1, 2, false, new lib.arcadebuttonblue(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Face1},{t:this.Face2},{t:this.Reset},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Body Parts
	this.smallnose = new lib.smallnose();
	this.smallnose.name = "smallnose";
	this.smallnose.setTransform(265.85,273.6);

	this.confusedeyes = new lib.confusedeyes();
	this.confusedeyes.name = "confusedeyes";
	this.confusedeyes.setTransform(92.55,338.25);

	this.pop_eyes = new lib.pop_eyes();
	this.pop_eyes.name = "pop_eyes";
	this.pop_eyes.setTransform(93.9,78.7,1,1,0,0,0,0.2,0);

	this.medium_nose = new lib.medium_nose();
	this.medium_nose.name = "medium_nose";
	this.medium_nose.setTransform(265.8,344.2);

	this.bignose = new lib.bignose();
	this.bignose.name = "bignose";
	this.bignose.setTransform(456.3,245.7);

	this.mustache2 = new lib.mustache2();
	this.mustache2.name = "mustache2";
	this.mustache2.setTransform(266.85,183.3);

	this.mustache = new lib.mustache();
	this.mustache.name = "mustache";
	this.mustache.setTransform(451.5,162.75);

	this.beanie = new lib.beanie();
	this.beanie.name = "beanie";
	this.beanie.setTransform(445.6,75.15);

	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(265.45,74.85);

	this.smile2 = new lib.smile2();
	this.smile2.name = "smile2";
	this.smile2.setTransform(59.8,579.95);

	this.teeth = new lib.teeth();
	this.teeth.name = "teeth";
	this.teeth.setTransform(64.25,536.4);

	this.teethsmile = new lib.teethsmile();
	this.teethsmile.name = "teethsmile";
	this.teethsmile.setTransform(68.85,484.45);

	this.smile = new lib.smile();
	this.smile.name = "smile";
	this.smile.setTransform(80.05,417.5);

	this.eyebrowseyes = new lib.eyebrowseyes();
	this.eyebrowseyes.name = "eyebrowseyes";
	this.eyebrowseyes.setTransform(92.2,268.65);

	this.purpleeyes = new lib.purpleeyes();
	this.purpleeyes.name = "purpleeyes";
	this.purpleeyes.setTransform(93.75,185.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.purpleeyes},{t:this.eyebrowseyes},{t:this.smile},{t:this.teethsmile},{t:this.teeth},{t:this.smile2},{t:this.hat},{t:this.beanie},{t:this.mustache},{t:this.mustache2},{t:this.bignose},{t:this.medium_nose},{t:this.pop_eyes},{t:this.confusedeyes},{t:this.smallnose}]}).wait(1));

	// Character
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AMTnLQgEi3ggi0QgXh/glh7QgzirhFilQg8iNhHiIQhTifhwicQhwidi5gWQi6gWimBMQilBMhTBEQhTBDg0BqQg1BqAWCsQAVCsAUCOQAZCxASCxQAEAigCAjQgLC1gWCzAC4WqQAKiRggiNQgEgWgFgVQD5hhCijWQBHheAkhtQBNjsAcj3QAVi1gBi3IgJjbAMnjxQCGA4CLAqQB3AiB8AUIAgiUQi2gaiphGQh1gvhkhPAUrhZIARADIAAAtQBTAMBNAcQC0A/CuBQIBIg1Ig5gzIBmgRIAYgwIgPgqIhrgNQBdgtBegtIg4gsIh+AOICHhmIglhMQhzA6hzA7IgdhRIhKgHIhEBLQhHAKhHALIgkAYIgqgGAkyW6QgKhkADhjQACg1APg1IEOgKQAWBxANBxQAEAhgFAhQBRBLBVg8QAFgDAFgFAI4fvIg8jhQgwgbgzgQQgugOgygDIhBg3IAehBIghgoIgggoIgoAAIALhgAhlYZIA8A8QBFAFBEgHQBLgKBKgXAngXGQBWBKBPhLQAFgFAEgGAoOYjIBBA8QB6AdBqg2QAWgLAUgQIgegXIg8gFIgZhVAhlYZIgeAZIAFBuIA3AZIgPCgIgyAPIAABpQBDBOBEBNQChAUCjgBQB6gBB7gXIAAh4IgeibAhMZBIgZgoAAIWjQgFAigLAgQgIAZgPAWIhGAFAoOYjIgoAoIAUBBQg0Amg6AYQg0AVg6AHIg8A3IgjBzIAUBGIgoAeIAABuQCPAeCPAIQCBAFCCgSQAXgZAQgcQALgTAFgXIBphBIAFhzIgogjIgFiCIA8gyIgFhQIgegWA07gtIAAAtQhSAMhNAcQi0BAivBPIhIg1IA5gyIhmgRIgYgyIAQgpIBqgMQhdguhdgtIA4gsIB+AOIiIhlIAlhNQBzA7BzA6IAehQIBJgHIBFBLQBGAKBHAKIAlAZIAYgDgAsxjCQiBA1iFAmQiAAliEAVAsxjCQgoCRgYCUQgZCdgBCgQgBBfAXBbQAgB3BEBlQBDBjBgBKQBPA9BXAyQgWBigHBiQgFBYAKBYIAJBOIg3APA1bjAQC9gZCwhIQCDg2BuhaIg0DvAnrZQIgjgt");
	this.shape_15.setTransform(684.6,377.085);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("Am2E3QiPgIiPgeIAAhuIAogeIgUhGIAjhyIA8g3QA6gHA0gVQA6gYA0gmIgUhBIAogoIBBA8QB6AdBqg2QAWgLAUgQIAeAWIAEBQIg7AyIAFCCIAoAiIgFBzIhpBBQgFAXgLATQgQAcgXAZQhnAOhnAAIg1gBgAlOkAIgjgtgACbEbIiHibIAAhpIAygPIAPifIg3gZIgFhuIAegZIA8A8QBGAFBEgHQBLgKBKgXIAhAoIgeBBIBBA3QAyADAuAOQAzAQAwAbIA8DgIAAB4Qh7AXh6ABIgXAAQiXAAiXgTgABQkPIgZgog");
	this.shape_16.setTransform(668.875,564.396);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AnNPpIhBg8IA3gPIgJhOQBWBKBPhLIAIgLIAaBVIA8AFIAeAXQgUAQgXALQhEAjhMAAQgpAAgqgKgAgpPfIg8g8IBGgFQAOgWAJgZQALggAEgiQBSBLBVg8IAKgIIgMBgIApAAIAgAoQhKAXhLAKQgoAEgoAAQgcAAgdgCgA+FnzIA5gyIhmgRIgYgyIAPgqIBrgMIi7hbIA5gsIB+AOIiIhlIAlhNIDmB1IAdhQIBKgHIBEBLICOAUIAlAZIAYgDIAgCTIAAAtQhTANhMAcQi1BAiuBPgAXcp3QhOgchSgMIAAgtIgSgDIAhiUIApAGIAlgYICNgVIBFhLIBKAHIAdBRIDmh1IAlBMIiHBmIB+gOIA3AsIi6BaIBqANIAQAqIgYAxIhmARIA5AzIhIA1QivhQizhAg");
	this.shape_17.setTransform(684.6,440.0816);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CA914C").s().p("AnXcVQgLhYAGhYQAGhiAXhiQhYgyhOg9QhghKhDhjQhEhlggh3QgYhbABhfQACigAZidQAYiVAniRQiAA1iFAmQiAAliEAVIggiTQC9gZCwhIQCCg1BvhaQAWizALi1QABgjgDgiQgSixgZixQgUiOgVisQgWisA1hqQA0hqBThDQBThEClhMQCmhMC6AWQC5AWBwCdQBwCcBTCfQBHCIA8CNQBFClAzCrQAkB7AYB/QAgC0AEC3IAJDaQAAC3gUC2QgdD3hMDsQgkBthHBeQiiDWj6BhIAKArQAgCNgKCRIgKAIQhVA8hShLQAFghgEghQgNhxgVhxIkOAKQgPA1gCA1QgDBjAJBkIgIALQgoAmgqAAQgoAAgrglgAspCMIA1jugARBC/QiLgqiGg4IgLABIgJjaQBkBPB1AuQCpBGC2AaIghCUQh7gUh3gig");
	this.shape_18.setTransform(683.7,343.5704);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Text
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaAxIAPgaQAHgPAAgIQAAgEgCgDQgCgCgDAAQgGAAgIAQIAAgrQAGgHAGgCQAFgDAHAAQAGAAAHAFQAGAFAEAJQADAKAAALQAAAHgBAFQgCAGgDAKIgEALIgBABIAMAAIAAARg");
	this.shape_19.setTransform(765.25,87.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaAxIAPgaQAHgPAAgIQAAgEgCgDQgCgCgDAAQgGAAgIAQIABgrQAFgHAGgCQAFgDAHAAQAGAAAHAFQAHAFADAJQADAKAAALQAAAHgCAFQgBAGgDAKIgFALIAAABIAMAAIAAARg");
	this.shape_20.setTransform(757.7,87.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgXAlQgKgOAAgYQAAgMAFgLQAEgLAIgHQAHgHAKAAQANAAAKAPQAKAOAAAUQAAAWgKAOQgKAOgOAAQgNAAgKgNgAgEgJQgCADAAAEQAAAEACACQACADACAAQADAAACgCQACgDAAgEQAAgEgCgDQgCgDgDAAQgCAAgCADg");
	this.shape_21.setTransform(750.225,87.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZAxIANgaQAIgPAAgIQAAgEgCgDQgCgCgDAAQgGAAgIAQIABgrQAGgHAEgCQAGgDAHAAQAGAAAHAFQAHAFACAJQAEAKAAALQAAAHgCAFQgBAGgDAKIgFALIAAABIANAAIAAARg");
	this.shape_22.setTransform(742.6,87.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOAwIAAgqIgZg2IAeAAIAJAXIAKgXIAdAAIgZA2IAAAqg");
	this.shape_23.setTransform(730.55,87.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAPAwIgFgQIgTAAIgEAQIgeAAIAYhgIAoAAIAXBggAgFAKIALAAIgGgXg");
	this.shape_24.setTransform(723.55,87.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AALAwIAAgwIgLATIgKgTIAAAwIgdAAIAAhgIAcAAIALAVIAMgVIAcAAIAABgg");
	this.shape_25.setTransform(714.425,87.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgNAwIAAg4IgPAAIAAgoIA5AAIAAAoIgOAAIAAA4g");
	this.shape_26.setTransform(702.275,87.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAGAwIAAAAQAAgRgEgJQgCgKgGAAIAAAAIAAAkIgdAAIAAhgIAdAAQAOAAAGABQAEACAFAEQADADACAGQADAGAAAHQAAAPgHAGQAKASACAcgAgGgJIABAAQAEAAABgCQACgCAAgGQAAgIgIgBIAAAAg");
	this.shape_27.setTransform(695.75,87.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAOAwIgDgQIgVAAIgDAQIgdAAIAXhgIApAAIAVBggAgEAKIAJAAIgFgXg");
	this.shape_28.setTransform(687.15,87.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AggAwIAAhgIAcAAQAPABAGACQAHACAFAIQAEAIAAAMQAAAPgHAHQgGAKgJAAQgHAAgHgIIAAAngAgDgFIABAAIABAAQADAAACgDQACgDAAgFQAAgGgCgCQgCgCgEAAIgBAAg");
	this.shape_29.setTransform(675.8,87.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AALAwIAAgwIgLATIgKgTIAAAwIgdAAIAAhgIAcAAIALAVIAMgVIAcAAIAABgg");
	this.shape_30.setTransform(667.125,87.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXAlQgKgOAAgYQAAgMAFgLQAEgLAIgHQAHgHAKAAQANAAAKAPQAKAOAAAUQAAAWgKAOQgKAOgOAAQgNAAgKgNgAgEgJQgCADAAAEQAAAEACACQACADACAAQADAAACgCQACgDAAgEQAAgEgCgDQgCgDgDAAQgCAAgCADg");
	this.shape_31.setTransform(658.675,87.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUAkQgLgOAAgVQAAgVALgOQAKgPAPAAQAHAAAHADQAIADAFAEIgNAiQgFgCgGAAQgJAAAAAHQAAACACACQACADAFAAQAGAAAFgEIANAlQgEAEgIADQgHADgJAAQgOAAgKgOg");
	this.shape_32.setTransform(651.625,87.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgeArIAHggQADAGAFAFQAEAEAEAAQABAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIgBgFIgEgDIgGgEQgJgFgDgFQgDgGAAgJQAAghAeAAQAOAAANAHIgHAeQgEgHgEgDQgEgEgFAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQAAAEACACIAIAFIAMAHQADAEACAEQADAGAAAIQAAAggfAAQgRAAgNgHg");
	this.shape_33.setTransform(640.4,87.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAPAwIgFgQIgUAAIgDAQIgeAAIAYhgIApAAIAWBggAgEAKIAKAAIgGgXg");
	this.shape_34.setTransform(632.85,87.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAGAwIAAAAQAAgRgEgJQgCgKgGAAIAAAAIAAAkIgdAAIAAhgIAdAAQAPAAAEABQAGACADAEQAEADADAGQACAGAAAHQAAAPgIAGQALASACAcgAgGgJIABAAQAEAAABgCQACgCAAgGQAAgIgIgBIAAAAg");
	this.shape_35.setTransform(624.8,87.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaAwIAAhgIA1AAIAAAZIgZAAIAAAMIASAAIAAAXIgSAAIAAAMIAZAAIAAAYg");
	this.shape_36.setTransform(617.575,87.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAGAwIAAAAQAAgRgDgJQgDgKgFAAIgBAAIAAAkIgdAAIAAhgIAdAAQAOAAAGABQAFACAEAEQADADADAGQACAGAAAHQAAAPgIAGQALASACAcgAgGgJIABAAQAEAAABgCQACgCAAgGQAAgIgHgBIgBAAg");
	this.shape_37.setTransform(610.55,87.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgNAwIAAg4IgPAAIAAgoIA5AAIAAAoIgOAAIAAA4g");
	this.shape_38.setTransform(603.175,87.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AALAxIgOgeIAAAdIgdAAIAAhgIAVAAIAPAhIAAghIAdAAIAABhg");
	this.shape_39.setTransform(596.175,87.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgXAlQgKgOAAgYQAAgMAFgLQAEgLAIgHQAHgHAKAAQANAAAKAPQAKAOAAAUQAAAWgKAOQgKAOgOAAQgNAAgKgNgAgEgJQgCADAAAEQAAAEACACQACADACAAQADAAACgCQACgDAAgEQAAgEgCgDQgCgDgDAAQgCAAgCADg");
	this.shape_40.setTransform(588.475,87.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUAkQgLgOAAgVQAAgVALgOQAKgPAPAAQAHAAAHADQAIADAFAEIgNAiQgFgCgGAAQgJAAAAAHQAAACACACQACADAFAAQAGAAAFgEIANAlQgEAEgIADQgHADgJAAQgOAAgKgOg");
	this.shape_41.setTransform(581.425,87.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgMAwIgYhgIAeAAIAGAhIAHghIAdAAIgWBgg");
	this.shape_42.setTransform(574.1,87.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAsDOIg6h/IAAB9Ih8AAIAAmZIBZAAIBACJIAAiJIB8AAIAAGbg");
	this.shape_43.setTransform(759.95,54.875);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AA9DNIgPhGIhZAAIgQBGIh9AAIBjmZICwAAIBeGZgAgVAnIAsAAIgWhjg");
	this.shape_44.setTransform(724.95,54.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhyDNIAAmZIDmAAIAABnIhsAAIAAAzIBLAAIAABmIhLAAIAAAyIBsAAIAABng");
	this.shape_45.setTransform(693.75,54.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AiQDNIAAmZICUAAQA0AAAZAJQAXAKARAbQAQAcAAAnQAAAigIASQgJATgTATQAXASALAVQAKAVAAAiQAAAzgaAeQgaAfgrAAgAgVBzIAEAAQAUAAAJgJQAJgKAAgXQAAgagJgKQgJgKgVAAIgDAAgAgVgqIAEAAQATABAIgKQAJgJAAgUQgBgXgHgJQgJgKgTAAIgEAAg");
	this.shape_46.setTransform(663.95,54.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgpA+QgRgZAAglQAAgjARgZQARgaAYAAQAYAAASAZQASAaAAAjQAAAlgSAZQgSAZgYAAQgYAAgRgZg");
	this.shape_47.setTransform(639.15,67.125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAYDNIAAgEQAAhIgNgmQgNglgZAAIgCAAIAACXIh6AAIAAmZIB6AAQBAAAAWAFQAVAEARAPQAPAPALAaQAJAbAAAdQAAA9gfAfQAtBLAIB5gAgdgpIAEAAQASAAAHgJQAIgKAAgVQAAgngiAAIgDAAg");
	this.shape_48.setTransform(616.05,54.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAuDNIAAjNIguBPIguhPIAADNIh7AAIAAmZIB3AAIAyBWIAxhWIB5AAIAAGZg");
	this.shape_49.setTransform(578.1,54.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Frame
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_50.setTransform(480,320);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_51.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,329,462,302);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#9900CC",
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