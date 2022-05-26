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
	this.shape.graphics.f().s("#3333CC").ss(4,1,1).p("ACphDQgJAUgMASQg9BjhXAAQhVAAg+hjQgEgHgEgGQgEgIgEgJQgBAAAAgBQgCgEgCgF");
	this.shape.setTransform(0.025,0.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3366CC").s().p("AiTgdIgIgNIgIgQIgBgCIgEgJIAIAAIAFADIAHACIAMAEQCWA1CQg8IALAAQgJAUgMASQg9BjhXAAQhVAAg+hjg");
	this.shape_1.setTransform(0.025,-0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose1, new cjs.Rectangle(-18.9,-8.4,37.9,18), null);


(lib.nose_side = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#3333CC").ss(4,1,1).p("Ag1i+QAAAOAFANQAVA5BHBUQA3A/gLAtQgDAOgKAMQg+BPhXAAQgIAAgHgB");
	this.shape.setTransform(1.8348,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252525").s().p("AAZAdQhIhSgUg5QgFgNgBgOIAEAAQABAKAEAIQAUA4BIBTQA8BHgTAwQAKgtg2hBg");
	this.shape_1.setTransform(3.7535,-5.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3366CC").s().p("AhCC6IgqlzIBKAAQABAOAFANQAUA5BIBUQA2A/gKAtQgEAIgGAIQg/BQhWgBIgIAAIgHAAg");
	this.shape_2.setTransform(-0.1152,-0.4625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose_side, new cjs.Rectangle(-11,-21.1,23.8,42.3), null);


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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AkTjXQAHgHAJgIQBuhiCVAAQCXAABuBiQAEAEAFAFQAEADADADIgHAAgAEVjXQAAABABAAQBIBIAbBaQAQA1AAA8QAACOhZBqQgJAKgJAKQgIgJgIgIQgEgFgFgEQgIgJgJgIQhthhiWAAQgaAAgYADQh3ANhbBRQgJAIgJAJQgEAEgDAEQgBgBgBgBQg0g9gVhKQgRg1AAg8QAAg8ARg1QAbhaBHhIQABAAABgB");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0033").s().p("Ag8D/QBukShuj8IAHAAIAAABQBHBHAcBbQAPA1AAA7QAACPhYBpIgSAUIgPgRg");
	this.shape_1.setTransform(33.125,5.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990066").s().p("AgCADIAAgFIAGAFg");
	this.shape_2.setTransform(27.35,-21.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6699").s().p("AhRB0Qg0g9gVhIQALghAegaIAGgGQAugjA9AAQA9AAAtAjIAHAGQAdAaANAyQh3ANhaBRIgRAQIgIAIIgCgCg");
	this.shape_3.setTransform(-22.15,19.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkQA4IAQgPQBuhgCVAAQCXAABuBgIAJAJIAAAGg");
	this.shape_4.setTransform(-0.325,-27.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AEnD/IgSgRQhthhiXAAQgZAAgYADQgNgzgdgZIgHgGQgtgkg+AAQg9AAguAkIgGAGQgeAZgLAhQgQg1AAg8QAAg7AQg2QAbhaBIhIIABgBIIiAAQBuD9huESIgJgJg");
	this.shape_5.setTransform(-3.35,4.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth3, new cjs.Rectangle(-40.2,-33.8,80.5,67.69999999999999), null);


(lib.mouth_smile = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABJCEIAAkHIDsAAIAAEHgAk0CEIAAkHIEBAAIAAEHg");
	this.shape.setTransform(0.3203,-12.9069,0.4968,0.5676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AOamlQAAFskOEBQkOECl+AAQl9AAkOkCQkOkBAAlsQAAgSABgSIcxAAQABASAAASg");
	this.shape_1.setTransform(0.9165,4.4673,0.4968,0.5676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990033").s().p("AqLDIQkOkBAAlsIABgkIcxAAIABAkQAAFskOEBQkOECl+AAQl9AAkOkCg");
	this.shape_2.setTransform(0.9165,4.4673,0.4968,0.5676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("AIkA9QgZgJgcgSQgugfgYgnQgIgMgEgMAl2g1QgYAngtAcQgvAfgpAEQgJAAgHAA");
	this.shape_3.setTransform(0,-24.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth_smile, new cjs.Rectangle(-56.8,-32.4,113.6,64.9), null);


(lib.mouth_rnd = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACxjhQADADADAEQAeAjASAqQAcBAAABNQAACAhMBbQgfAlgkAWQg1Agg/AAQgMAAgMgBQgNgBgNgEQgfgGgbgPQgDgCgCgCQgGgDgGgEQgegVgbggQhMhbAAiAQAAhNAchAQASgqAegjQADgEADgDACxjhIlhAAQBKhUBmAAQBnAABKBUg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AgXA4QgBgFgCACIgWAAQgfgHgbgPIgFgDIgMgHQAIgTAagXQAagYAUgGQATgHAiACQAiADAMAHQALAHAcAZQAcAXABAOIgGAEQg6AcglABIgtACIgBgCgAhqAfQAbAPAfAHIgBAAIgBAAQgTAAglgWgAhqAfIAAAAg");
	this.shape_1.setTransform(-0.225,25.1421);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiwAqQBKhTBmAAQBnAABKBTg");
	this.shape_2.setTransform(-0.025,-26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AgzEHIAXAAQACgCABAFIABABQgNgBgOgDgAB5DpQAAgOgcgZQgcgZgLgGQgMgIgigCQgigDgTAHQgVAHgZAXQgaAZgIASQgfgUgbghQhLhaAAh/QAAhOAchBQASgpAdgjIAGgHIFiAAIAGAHQAeAjARApQAdBBAABOQAAB/hMBaQgfAmgkAWIAFgEg");
	this.shape_3.setTransform(0,4.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth_rnd, new cjs.Rectangle(-26.9,-32,53.8,64), null);


(lib.hat_brwn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#663333").s().p("AnABEQgGgLAAgQIAAhsIONAAIAABsQAAAQgGALg");
	this.shape.setTransform(0.0365,1.2163,0.6298,0.7441);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("AmUEKQghAAgLgWIOBAAQgLAWghAAgAnGBrIAAlCQAAgyAyAAQGMCYGdiYQAyAAAAAyIAAFCg");
	this.shape_1.setTransform(0.0365,-11.8428,0.6298,0.7441);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AsNCXQlDg+AAhZQAAhXFDhAQFEg+HJAAQHJAAFEA+QFEBAAABXQAABZlEA+QlEA/nJAAQnJAAlEg/g");
	this.shape_2.setTransform(-0.0108,15.755,0.6298,0.7441);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat_brwn, new cjs.Rectangle(-69.6,-31.6,139.2,63.3), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ASsAAQAABMlfA2QleA2nvAAQnuAAleg2Qleg2AAhMQAAhLFeg2QFeg2HuAAQHvAAFeA2QFfA2AABLg");
	this.shape.setTransform(-0.0395,25.7608,0.6475,0.765);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AtNCCQleg2AAhMQAAhLFeg2QFfg2HuAAQHvAAFeA2QFfA2gBBLQABBMlfA2QleA2nvAAQnuAAlfg2g");
	this.shape_1.setTransform(-0.0395,25.7608,0.6475,0.765);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFZivIAABrAFZAmIAABsQAAAegeAAIp1AAQgeAAAAgeIAAhsAlYhEIAAhr");
	this.shape_2.setTransform(-1.4616,15.877,0.6476,0.7651);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AlYCoIAAoIQAAgeAeAAIJ1AAQAeAAAAAeIAAIIAFZEUIAABrAlYF/IAAhr");
	this.shape_3.setTransform(-1.4616,-10.5006,0.6476,0.7651);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ak6CwQgeAAAAgeIAAhsIKxAAIAABsQAAAegeAAgAlYhEIAAhrIKxAAIAABrg");
	this.shape_4.setTransform(-1.4616,15.877,0.6476,0.7651);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AlYF/IAAhrIKxAAIAABrgAlYCpIAAoJQAAgeAeAAIJ1AAQAeAAAAAeIAAIJg");
	this.shape_5.setTransform(-1.4616,-10.5006,0.6476,0.7651);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat, new cjs.Rectangle(-78.4,-40.8,156.8,81.69999999999999), null);


(lib.glasses_round = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AJOgEQAGgCAFgCQADgCADgBApegLQAGACAFACQADACADABAhjAGQBlgkBlAq");
	this.shape.setTransform(0.025,-0.7847,1,1.1711);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AJFAAQAAB1hHBUQhHBThkAAQhlAAhHhTQhHhUAAh1QAAh1BHhTQAvg3A9gTQAegJAiAAQAhAAAfAJQA8ATAvA3QBHBTAAB1gAhfAAQAABSgjBBQgPAcgVAaQhHBThlAAQhkAAhHhTQgWgagOgcQgjhBAAhSQAAh1BHhTQBHhTBkAAQBlAABHBTQBHBTAAB1g");
	this.shape_1.setTransform(0.125,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses_round, new cjs.Rectangle(-63.6,-30.4,127.30000000000001,60.8), null);


(lib.glasses_prpl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#994185").ss(8,1,1).p("AByASQhuhGh1BG");
	this.shape.setTransform(-0.25,-17.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#994185").ss(6,1,1).p("AsIgtIgsgbAsIgtIAAhPQAAgyAyAAIIlAAQAyAAAAAyIAAD5QAAAygyAAIolAAQgyAAAAgygAM2gtIgsAbACuiuIIlAAQAyAAAAAyIAAD5QAAAygyAAIolAAQgyAAAAgyIAAj5QAAgyAyAAg");
	this.shape_1.setTransform(0,1.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses_prpl, new cjs.Rectangle(-85.1,-22.8,170.3,44.7), null);


(lib.Eyes1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKAAQAAAFgCADQgEADgEAAQgDAAgEgDQgDgDAAgFQAAgEADgDQAEgDADAAQAEAAAEADQACADAAAEg");
	this.shape.setTransform(15.4616,-7.3426,1.7122,1.0048);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAIQgDgDAAgFQAAgEADgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_1.setTransform(15.4616,-7.3426,1.7122,1.0048);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKAAQAAAFgCADQgEADgEAAQgDAAgEgDQgDgDAAgFQAAgEADgDQAEgDADAAQAEAAAEADQACADAAAEg");
	this.shape_2.setTransform(-39.9384,-6.9926,1.7122,1.0048);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAIQgDgDAAgFQAAgEADgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_3.setTransform(-39.9384,-6.9926,1.7122,1.0048);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ABbAAQAABLgbA1QgaA1gmAAQglAAgag1Qgbg1AAhLQAAhKAbg1QAag0AlAAQAmAAAaA0QAbA1AABKg");
	this.shape_4.setTransform(-32.4718,3.1017,1.3734,1.1492);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhAB/Qgag0AAhLQAAhKAag1QAbg1AlABQAmgBAaA1QAbA1AABKQAABLgbA0QgaA2gmAAQglAAgbg2g");
	this.shape_5.setTransform(-32.4718,3.1017,1.3734,1.1492);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKAAQAAAFgCADQgEADgEAAQgDAAgEgDQgDgDAAgFQAAgEADgDQAEgDADAAQAEAAAEADQACADAAAEg");
	this.shape_6.setTransform(-40.9442,-6.787,0.8166,0.5101);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAIQgDgDAAgFQAAgEADgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_7.setTransform(-40.9442,-6.787,0.8166,0.5101);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AB9AAQAABWglA8QglA+gzAAQgyAAgmg+Qgkg8AAhWQAAhVAkg9QAmg9AyAAQAzAAAlA9QAlA9AABVg");
	this.shape_8.setTransform(22.55,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhXCSQglg8AAhWQAAhVAlg9QAkg9AzABQA0gBAkA9QAlA9AABVQAABWglA8QgkA+g0AAQgzAAgkg+g");
	this.shape_9.setTransform(22.55,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AABg2QARhfA5hKQBShoBzAAQByAABRBoQBSBpAACUQAACUhSBnQgDAFgDAEQgnAwgvAYQgwAYg3AAQg4AAgvgYQgwgYgngwQgEgEgDgFQg7hLgQhiQgQBfg6BIQgEAEgDAEQgtA3g3AYQgqASgvAAQgwAAgpgSQg3gYgtg3QgFgEgDgEQhRhoAAiUQAAiTBRhpQBShoBzAAQByAABSBoQA6BLARBkgAAckFQALgQAPgOQA1g1BFgVQApgMAwgBQA3gCAzAPQA/ATA0AsQAQAOAPAPAoBkMQAKgQAPgOQA2g0BEgVQApgNAwgBQA4gBAyAPQA/ASA0AtQAQANAPAQAAABsQgGglAAgpQAAgsAHgo");
	this.shape_10.setTransform(0,-2.5068);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ACdAyIgLgEQgdgLgagQQgUgMgSgOIgFgEIAAABQgRgPgNgQQgDgCACgDQACgDAEAAQACgCAGABQAEABACADQALAOARANIAOAMQAUAOAVAMQAiASAmAJIATAEQAgAFAiAAQAZgBAYgEIAUgEQAlgJAigSQAUgMATgOQAMgJALgMQAPgOANgPQABgDAFAAQADgBAEABQAEACABACQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQgNAQgPAOIgPAOQgRAOgSAMQgaAQgcALIgLAEQgxARg4AAIgKABQg6AAg0gSgAl4AuIgIgCQgjgMgggUQgPgJgOgKIgOgKIAAAAQgQgOgNgRQgDgBABgEQADgCAEgBQACgBAGAAQAEACACACQAMAOAPAOQAMAKAMAIQAPAKARAJQAqAXAxAJIATACQAXADAXgBIAdgCIAVgCQAwgJArgXQAQgJAPgKQAQgMAPgPQAOgOANgQQACgCAFAAQADgBAEABQAEABABADQAAAAABABQAAABAAAAQAAABAAAAQgBABAAAAQgOARgOAOQgLALgMAJQgNAKgOAJQgfAUgiAMIgIACQgtAOg1ABIgKAAQg1AAgwgPg");
	this.shape_11.setTransform(-0.775,34.4056);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACoFQQgvgZgngvIgHgJQg7hLgQhiQgGgmAAgpQAAgrAHgoQARhfA5hKQBRhoB0AAQBxAABRBoQBTBpAACTQAACVhTBnIgFAJQgoAvguAZQgwAYg3AAQg4AAgwgYgAlnFQQg3gYgtg3IgIgJQhRhnAAiTQAAiUBRhqQBThnByAAQBzAABRBnQA6BMARBkQgHAoAAArQAAApAGAmQgQBfg6BHIgHAJQgtA3g3AYQgpARgwABQgvgBgqgRgAABhQIAAAAg");
	this.shape_12.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyes1, new cjs.Rectangle(-55.9,-42.1,111.8,83.30000000000001), null);


(lib.eyes_smile = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABdArQgEAjgdgQQgcgRg4gtQg5gvgNgTQApAfBDAZQBEAZANAA");
	this.shape.setTransform(72.2573,-8.8507,0.37,0.3846,0,-6.4579,173.5426);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA6A+QgcgRg4gtQg6gvgNgTQAqAfBDAZQBEAZANAAQgJABAOABIgIAaQgCAYgOAAQgHAAgJgFg");
	this.shape_1.setTransform(72.1745,-8.8413,0.37,0.3846,0,-6.4579,173.5426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ABdArQgEAjgdgQQgcgRg4gtQg5gvgNgTQApAfBDAZQBEAZANAA");
	this.shape_2.setTransform(71.4058,-14.7635,0.4348,0.5455,0,-6.4586,173.5426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA6A+QgcgRg4gtQg6gvgNgTQAqAfBDAZQBEAZANAAQgJABAOABIgIAaQgCAYgOAAQgHAAgJgFg");
	this.shape_3.setTransform(71.3086,-14.7525,0.4348,0.5455,0,-6.4586,173.5426);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAxAAQAAAVgOAOQgPAOgUAAQgTAAgPgOQgOgOAAgVQAAgTAOgPQAPgOATAAQAUAAAPAOQAOAPAAATg");
	this.shape_4.setTransform(40.8937,3.9352,0.2527,0.2572,0,-6.4584,173.5414);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAjQgOgPAAgUQAAgUAOgOQAOgOAUAAQAUAAAOAOQAPAOAAAUQAAAUgPAPQgOAOgUAAQgUAAgOgOg");
	this.shape_5.setTransform(40.8937,3.9352,0.2527,0.2572,0,-6.4584,173.5414);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAxAAQAAAVgOAOQgPAOgUAAQgTAAgPgOQgOgOAAgVQAAgTAOgPQAPgOATAAQAUAAAPAOQAOAPAAATg");
	this.shape_6.setTransform(46.8417,-1.3778,0.6944,0.6944,0,-6.4582,173.5418);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAjQgOgPAAgUQAAgUAOgOQAOgOAUAAQAUAAAOAOQAPAOAAAUQAAAUgPAPQgOAOgUAAQgUAAgOgOg");
	this.shape_7.setTransform(46.8417,-1.3778,0.6944,0.6944,0,-6.4582,173.5418);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AhSCxQgegUgUgTQg3g2AAhNQAAhLA3g2QA3g2BNAAQBOAAA3A2QA3A2AABLQAABNg3A2QgTATgVAP");
	this.shape_8.setTransform(38.1195,7.4051,1,1,0,-6.4588,173.5412);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiDCKQg4g2AAhNQAAhLA4g2QA2g2BNAAQBOAAA3A2QA3A2AABLQAABNg3A2QgTATgVAPQg0gYh7AdQgegUgTgTg");
	this.shape_9.setTransform(38.1195,7.4051,1,1,0,-6.4588,173.5412);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("ABdArQgEAjgdgQQgcgRg4gtQg5gvgNgTQApAfBDAZQBEAZANAA");
	this.shape_10.setTransform(-72.2642,-9.3228,0.37,0.3846,7.2274);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA6A+QgcgRg4gtQg6gvgNgTQAqAfBDAZQBEAZANAAQgJABAOABIgIAaQgCAYgOAAQgHAAgJgFg");
	this.shape_11.setTransform(-72.1817,-9.3123,0.37,0.3846,7.2274);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("ABdArQgEAjgdgQQgcgRg4gtQg5gvgNgTQApAfBDAZQBEAZANAA");
	this.shape_12.setTransform(-71.3411,-15.1553,0.4348,0.5454,7.2288);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA6A+QgcgRg4gtQg6gvgNgTQAqAfBDAZQBEAZANAAQgJABAOABIgIAaQgCAYgOAAQgHAAgJgFg");
	this.shape_13.setTransform(-71.244,-15.143,0.4348,0.5454,7.2288);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAxAAQAAAVgOAOQgPAOgUAAQgTAAgPgOQgOgOAAgVQAAgTAOgPQAPgOATAAQAUAAAPAOQAOAPAAATg");
	this.shape_14.setTransform(-41.0905,3.8811,0.2527,0.2572,7.2292);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiAjQgOgPAAgUQAAgUAOgOQAOgOAUAAQAUAAAOAOQAPAOAAAUQAAAUgPAPQgOAOgUAAQgUAAgOgOg");
	this.shape_15.setTransform(-41.0905,3.8811,0.2527,0.2572,7.2292);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAxAAQAAAVgOAOQgPAOgUAAQgTAAgPgOQgOgOAAgVQAAgTAOgPQAPgOATAAQAUAAAPAOQAOAPAAATg");
	this.shape_16.setTransform(-46.9544,-1.4544,0.6944,0.6944,7.2292);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiAjQgOgPAAgUQAAgUAOgOQAOgOAUAAQAUAAAOAOQAPAOAAAUQAAAUgPAPQgOAOgUAAQgUAAgOgOg");
	this.shape_17.setTransform(-46.9544,-1.4544,0.6944,0.6944,7.2292);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AhSCxQgegUgUgTQg3g2AAhNQAAhLA3g2QA3g2BNAAQBOAAA3A2QA3A2AABLQAABNg3A2QgTATgVAP");
	this.shape_18.setTransform(-38.3527,7.4045,1,1,7.2292);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AiDCKQg4g2AAhNQAAhLA4g2QA2g2BNAAQBOAAA3A2QA3A2AABLQAABNg3A2QgTATgVAPQg0gYh7AdQgegUgTgTg");
	this.shape_19.setTransform(-38.3527,7.4045,1,1,7.2292);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AFMA7QgIBDgeA2QgKASgMAQQgJAMgKAMQgRASgUARQgEADgEADQgBACgCABIAAAAQgIAHgIAFQgEADgFADQgBABgBABQgDACgCABQgJAEgKAGQgDABgCACQgDgPhhgvQhhgviuA7QgIgHgIgIQgCgCgCgCQgBgCgBgBQgEgEgDgEQgGgHgGgIIgBgBQgBgBgCgCQgDgEgCgEQgKgOgJgNQgEgIgEgIQgHgOgFgOQgFgKgDgKQgDgIgCgIQAAgCAAAAQgGgVgCgVQgFgpAFgrQADgRADgRQAFgXAJgWQAAgCABgCQAIgVALgSQAEgIAFgHQASgeAZgZQARgQATgPQAVgQAVgNQA/gjBGgFQAjgDAkAFQAlAEAhAMQBDAWAzAyQATASAQAVQBVBtgSCJg");
	this.shape_20.setTransform(-36.7947,0.0554);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAxEAQhhgviuA7IgQgPIgEgEIgCgDIgHgIIgMgPIgBgBIgDgDIgFgIIgTgbIgIgQQgHgOgFgOIgIgUIgFgQIAAgCQgGgVgCgVQgFgpAFgrIAGgiQAFgXAJgWIABgEQAIgVALgSIAJgPQASgeAZgZQARgQATgPQAVgQAVgNQA/gjBGgFQAjgDAkAFQAlAEAhAMQBDAWAzAyQATASAQAVQBVBtgSCJQgIBDgeA2QgKASgMAQIgTAYQgRASgUARIgIAGIgDADIAAAAIgQAMIgJAGIgCACIgFADIgTAKIgFADQgDgPhhgvg");
	this.shape_21.setTransform(-36.7947,0.0554);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AlMA4QAIBDAdA2QAEAIAFAIQAFAKAHAJQAJAMAKAMQARATATARQAEADAEADQACABABABIAAABQAIAGAIAGQAEADAFADQABABABABQADABACACQAJAEAKAGQACABADACQAEgPBhguQBhguCtA/QAJgIAIgIQACgCABgCQACgBABgBQAEgEADgEQAHgIAFgHIABgBQABgCACgBQADgEACgEQAKgOAJgNQAFgIAEgIQAHgOAGgNQAEgKAEgKQACgJADgIQAAgBAAgBQAGgUACgVQAGgpgFgrQgCgSgEgQQgEgYgIgVQgBgCgBgCQgIgVgJgTQgFgIgEgHQgSgegZgZQgRgRgSgPQgVgRgWgNQg+gkhGgGQgigDglAEQgkAEgiALQhDAWg0AxQgTARgQAVQgnAxgSA3QgWBCAIBMg");
	this.shape_22.setTransform(36.6756,-0.0893);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AidE6IgTgKIgFgDIgCgCIgJgGIgQgMIAAgBIgDgCIgIgGQgTgRgRgTIgTgYIgMgTIgJgQQgdg2gIhDQgIhMAWhCQASg3AngxQAQgVATgRQA0gxBDgWQAigLAkgEQAlgEAiADQBGAGA+AkQAWANAVARQASAPARARQAZAZASAeIAJAPQAJATAIAVIACAEQAIAVAEAYQAEAQACASQAFArgGApQgCAVgGAUIAAACIgFARIgIAUQgGANgHAOIgJAQIgTAbIgFAIIgDADIgBABIgMAPIgHAIIgDACIgDAEIgRAQQitg/hhAuQhhAugEAPIgFgDg");
	this.shape_23.setTransform(36.6756,-0.0893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes_smile, new cjs.Rectangle(-76.4,-32.8,152.9,65.69999999999999), null);


(lib.eyebrowsblk = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ABbBVQgLgDgIgFQgFgEgDgGIgCgCIgFgKIgEgNIgIgZQgEgQAAgFQAAgMAHgHQAFgGAJgEIAOgEIAWgEIAXgCIBBgFIBBgHIAtgEIBggLIBXgLIAIgBIAjgEQAUgCARACQAKABALADIADABIAQAGIAtAQQA7AVBAAUIAtAOQAZAIAQAHIACABQAJAFAEADQAEAFgEAFQgCAFgJAEQgJADgNACQgNABgNgBQgMgBgTgFIiNgiIhagSIgbgEIgHgBIgJACIhqAcIgiAJIgpAKIgDABIgjAJIggAKIggAKIgbAHQgQAFgJAEIgCABIgIADIgKAEQgNAEgQAAIgEAAQgOAAgLgDgAh4BYQgQAAgMgEIgKgEIgIgDIgCgBQgJgEgQgFIgbgHIgggKIgggKIgjgJIgEgBIgogKIgigJIhrgcIgIgCIgIABIgbAEIhaASIiNAiQgTAFgLABQgMABgNgBIgBAAQgNgCgJgDQgJgEgDgFQgDgFAEgFQAEgDAIgFIACgBIAUgIIAWgHIAsgOQBBgUA6gVIAugQIAQgGIACgBQALgDALgBQARgCAUACIAjAEIAIABIBXALIBgALIAsAEIBBAHIBBAFIAYACIAWAEQAQAEAJAHIADADQAGAHAAAMQAAAFgEAQIgHAZIgEANIgHAMQgEAGgFAEQgHAFgMADQgLADgOAAIgEAAg");
	this.shape.setTransform(0.0174,0.0087);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrowsblk, new cjs.Rectangle(-87,-8.8,174,17.6), null);


(lib.eyebrows_brwn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("AnFgVQGYjaHqDYQAZAKAVAUQAVAVAAAeQAAAegVAVQgVAVgNAAQnTjgm0DiQgXgCgVgVQgVgVAAgeQAAgeAVgVQAVgUAQgIg");
	this.shape.setTransform(41.397,0.4493,0.6429,0.8087);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AnqBtQgVgVAAgeQAAgeAVgVQAVgUAQgIQGYjaHqDYQAZAKAVAUQAVAVAAAeQAAAegVAVQgVAVgNAAQnTjgm0DiQgXgCgVgVg");
	this.shape_1.setTransform(41.397,0.4493,0.6429,0.8087);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(1,1,1).p("AnFgVQGYjaHqDYQAZAKAVAUQAVAVAAAeQAAAegVAVQgVAVgNAAQnTjgm0DiQgXgCgVgVQgVgVAAgeQAAgeAVgVQAVgUAQgIg");
	this.shape_2.setTransform(-41.403,-0.4007,0.6429,0.8087);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AnqBtQgVgVAAgeQAAgeAVgVQAVgUAQgIQGYjaHqDYQAZAKAVAUQAVAVAAAeQAAAegVAVQgVAVgNAAQnTjgm0DiQgXgCgVgVg");
	this.shape_3.setTransform(-41.403,-0.4007,0.6429,0.8087);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrows_brwn, new cjs.Rectangle(-75.3,-12,150.7,24.1), null);


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


(lib.bargreen = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Face 2", "10px 'Verdana'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.parent = this;
	this.text.setTransform(-0.25,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},3).wait(1));

	// rules
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3DEC2").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_1.setTransform(-0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#557942").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_2.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// box
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DEE8D2","#618646","#DEE8D2"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_3.setTransform(-0.025,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#ECF0E3","#5F7942","#ECF0E3"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_4.setTransform(-0.025,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#5F7942","#ECF0E3","#5F7942"],[0,0.373,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_5.setTransform(-0.025,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AlnBuIAAjbILPAAIAADbg");
	this.shape_6.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-11,72,22);


(lib.barblue = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Face 1", "10px 'Verdana'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.parent = this;
	this.text.setTransform(-1.15,-7);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},3).wait(1));

	// rules
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AED8EA").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_1.setTransform(-0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D8BB2").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_2.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// box
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C9DBE4","#47A4CB","#DEE8EC"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_3.setTransform(-0.025,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#47A4CB","#FFFFFF"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_4.setTransform(-0.025,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#47A4CB","#C9E0E8","#47A4CB"],[0,0.353,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_5.setTransform(-0.025,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AlnBuIAAjbILPAAIAADbg");
	this.shape_6.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-11,72,22);


(lib.bow_pnk = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmKEcIAcoBIDYC6QAcgpAwgOQA9gSA5AmQAQAKAMANICqjkICZHwIkThMQgFAPgHAOQgeBAg+ASQg8ARg6glQgkgZgVglg");
	this.shape.setTransform(-10.15,-7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AlujkIDYC5QAdgpAvgOQA9gSA5AmQAQALAMAMICqjjICZHvIkUhNQgEAQgGAOQgeA/g+ATQg9AQg6gkQgjgZgWglIjrB2g");
	this.shape_1.setTransform(-10.15,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bow_pnk, new cjs.Rectangle(-50.6,-36.7,81,58.7), null);


(lib.arm_l = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CC3366").ss(2,1,1).p("AA3gUQhMgQghA8");
	this.shape.setTransform(-33.7848,45.1531,0.7168,0.7669,-2.4505);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC3366").ss(2,1,1).p("AAxAHQhUgfgMAh");
	this.shape_1.setTransform(-28.7485,45.4894,0.7318,0.7526,0,-33.4497,-36.9729);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC3366").ss(2,1,1).p("AABgPQAFAPgIAQ");
	this.shape_2.setTransform(-22.3725,45.3964,0.7168,0.7669,-2.4505);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CC3366").ss(2,1,1).p("ABPgFQhygcgrAx");
	this.shape_3.setTransform(-36.3931,42.251,0.7168,0.7669,-2.4505);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CC3366").ss(2,1,1).p("AgkgSQBJAMAAAZ");
	this.shape_4.setTransform(-34.5255,37.7915,0.7168,0.7669,-2.4505);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF6666").ss(10,1,1).p("AE3m8Qg1AEguAQQgrAOgkAbQhpBLgrCsQgQA9gIBGQgFAkgCAoQgFBPg6BXQhCBjiHBt");
	this.shape_5.setTransform(3.95,-3.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm_l, new cjs.Rectangle(-42.9,-52.6,82.9,101.80000000000001), null);


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
	this.text = new cjs.Text("Reset", "10px 'Verdana'", "#484848");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 28;
	this.text.parent = this;
	this.text.setTransform(0,-6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape.setTransform(11.75,1.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.175,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_2.setTransform(1.275,0.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_3.setTransform(-3.925,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_4.setTransform(-10.025,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// center outline
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E3BCF5").ss(1,1,1).p("AFZheIAAC9IqxAAIAAi9g");
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// center box
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2C4F7").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_6.setTransform(0,-0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlYBfIAAi9IKxAAIAAC9g");
	this.shape_7.setTransform(0,-0.1184,0.9855,0.9474);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6F1595").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_8.setTransform(0,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(1));

	// outer box
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E3BCF5").ss(1,1,1).p("AF3h8IAAD5IrtAAIAAj5g");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFyh3IAADvIrjAAIAAjvg");
	this.shape_10.setTransform(0,0,1.0135,1.0417);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#6F1595").ss(1,1,1).p("AF3h8IAAD5IrtAAIAAj5g");

	this.instance = new lib.rectangleflathitarea("synched",0);
	this.instance.setTransform(0,0,1.103,1.3889);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-36,-11,72,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-36, y:-11, w:72, h:22});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-13.5,77,27);


// stage content:
(lib.MPHFinalAAndrade = function(mode,startPosition,loop,reversed) {
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
		this.face1.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eyes1.x = 230;
			this.eyes1.y = 238;
			this.mouth3.x = 231;
			this.mouth3.y = 349;
			this.eyebrows1.x = 229;
			this.eyebrows1.y = 180;
			this.nose1.x = 232;
			this.nose1.y = 297;
			}
		
		
		this.reset.addEventListener("click", ClickReset.bind(this));
		
		function ClickReset() {
			this.eyes1.x = 675.3;
			this.eyes1.y = 65.5;
			this.eyes2.x = 842.2;
			this.eyes2.y = 74.4;
			this.eyebrows1.x = 674.2;
			this.eyebrows1.y = 120.25;
			this.eyebrows2.x = 843.85;
			this.eyebrows2.y = 118.35;
			this.glasses1.x = 670.3;
			this.glasses1.y = 181.6;
			this.glasses2.x = 848.15;
			this.glasses2.y = 183.2;
			this.nose1.x = 674.25;
			this.nose1.y = 239.55;
			this.nose2.x = 854.95;
			this.nose2.y = 229.55;
			this.mouth1.x = 675.4;
			this.mouth1.y = 305.5;
			this.mouth2.x = 776.05;
			this.mouth2.y = 301.8;
			this.mouth3.x = 869.4;
			this.mouth3.y = 303.4;
			this.bow1.x = 689;
			this.bow1.y = 390.75;
			this.hat1.x = 834.3;
			this.hat1.y = 374.5;
			this.hat2.x = 681.45;
			this.hat2.y = 471.25;
			this.arm1.x = 785.35;
			this.arm1.y = 528.8;
			this.arm2.x = 891.95;
			this.arm2.y = 526.05;
		}
		
		
		this.face2.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.eyes2.x = 230.85;
			this.eyes2.y = 250.45;
			this.mouth1.x = 229.5;
			this.mouth1.y = 364.1;
			this.eyebrows2.x = 228.2;
			this.eyebrows2.y = 200.2;
			this.nose2.x = 237.75;
			this.nose2.y = 308.65;
			this.glasses1.x = 230.7;
			this.glasses1.y = 254;
			}
		
		this.eyes1.on("pressmove", dragMe);
		this.eyes2.on("pressmove", dragMe);
		this.eyebrows1.on("pressmove", dragMe);
		this.eyebrows2.on("pressmove", dragMe);
		this.glasses1.on("pressmove", dragMe);
		this.glasses2.on("pressmove", dragMe);
		this.nose1.on("pressmove", dragMe);
		this.nose2.on("pressmove", dragMe);
		this.mouth1.on("pressmove", dragMe);
		this.mouth2.on("pressmove", dragMe);
		this.mouth3.on("pressmove", dragMe);
		this.bow1.on("pressmove", dragMe);
		this.hat1.on("pressmove", dragMe);
		this.hat2.on ("pressmove", dragMe);
		this.arm1.on("pressmove", dragMe);
		this.arm2.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.hat2 = new lib.hat_brwn();
	this.hat2.name = "hat2";
	this.hat2.setTransform(681.45,471.25);

	this.arm2 = new lib.arm_l();
	this.arm2.name = "arm2";
	this.arm2.setTransform(893.25,522.95,1.0964,1.7257,0,0,180,-1.2,-1.8);

	this.arm1 = new lib.arm_l();
	this.arm1.name = "arm1";
	this.arm1.setTransform(784.05,525.7,1.0964,1.7257,0,0,0,-1.2,-1.8);

	this.mouth2 = new lib.mouth_rnd();
	this.mouth2.name = "mouth2";
	this.mouth2.setTransform(776.15,301.9,0.8853,0.8614,0,0,0,0.1,0.1);

	this.glasses2 = new lib.glasses_prpl();
	this.glasses2.name = "glasses2";
	this.glasses2.setTransform(848.25,182.85,0.8853,0.8614,0,0,0,0.1,-0.4);

	this.hat1 = new lib.hat();
	this.hat1.name = "hat1";
	this.hat1.setTransform(834.4,374.6,0.8853,0.8614,0,0,0,0.1,0.1);

	this.bow1 = new lib.bow_pnk();
	this.bow1.name = "bow1";
	this.bow1.setTransform(689.15,390.9,0.8847,0.862,0,-9.2044,-8.7225,0.1,0.2);

	this.glasses1 = new lib.glasses_round();
	this.glasses1.name = "glasses1";
	this.glasses1.setTransform(670.5,181.75,0.9665,1.3051,0,0,0,0.2,0.1);

	this.eyes2 = new lib.eyes_smile();
	this.eyes2.name = "eyes2";
	this.eyes2.setTransform(842.3,74.5,0.8853,0.8614,0,0,0,0.1,0.1);

	this.nose2 = new lib.nose_side();
	this.nose2.name = "nose2";
	this.nose2.setTransform(855.85,229.65,0.8853,0.8614,0,0,0,1,0.1);

	this.mouth1 = new lib.mouth_smile();
	this.mouth1.name = "mouth1";
	this.mouth1.setTransform(675.4,305.5,0.8853,0.8614);

	this.eyebrows2 = new lib.eyebrows_brwn();
	this.eyebrows2.name = "eyebrows2";
	this.eyebrows2.setTransform(674.3,120.35,0.8853,0.8614,0,0,0,0.1,0.1);

	this.nose1 = new lib.nose1();
	this.nose1.name = "nose1";
	this.nose1.setTransform(674.25,239.55,0.8853,0.8614);

	this.mouth3 = new lib.mouth3();
	this.mouth3.name = "mouth3";
	this.mouth3.setTransform(869.5,303.5,0.8853,0.8614,0,0,0,0.1,0.1);

	this.eyebrows1 = new lib.eyebrowsblk();
	this.eyebrows1.name = "eyebrows1";
	this.eyebrows1.setTransform(843.85,118.35,0.8853,0.8614);

	this.eyes1 = new lib.Eyes1();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(675.4,65.4,0.8853,0.8614,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes1},{t:this.eyebrows1},{t:this.mouth3},{t:this.nose1},{t:this.eyebrows2},{t:this.mouth1},{t:this.nose2},{t:this.eyes2},{t:this.glasses1},{t:this.bow1},{t:this.hat1},{t:this.glasses2},{t:this.mouth2},{t:this.arm1},{t:this.arm2},{t:this.hat2}]}).wait(1));

	// Character
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(10,1,1).p("A4X9mMAwvAAAQCMAAAACMMAAAA21QAACMiMAAMgwvAAAQiMAAAAiMMAAAg21QAAiMCMAAg");
	this.shape.setTransform(229.9635,289.3906,0.617,0.705);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6666").s().p("A4XdnQiMAAAAiMMAAAg21QAAiMCMAAMAwvAAAQCMAAAACMMAAAA21QAACMiMAAg");
	this.shape_1.setTransform(229.9635,289.3906,0.617,0.705);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0033").ss(10,1,1).p("AKQAAQAAHVkYFMQkXFMmKAAQjAAAimhPIAPjoQBaAoBiAOQAJAAAXAEQAWADC3gFQC3gGDDkQQDEkQAHlzQAGlzjCjaQjAjalJAAQguAAgsAFQgKACgJAAQhiAOhaAoIgPkHQCmhPDAAAQGKAAEXFMQEYFLAAHUg");
	this.shape_2.setTransform(371.3442,289.2212,0.8495,0.8171);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6666").s().p("AqPQdIAPjnQBZAoBjAOIAfAEQAXADC3gFQC3gGDDkQQDEkQAGlzQAHlzjCjaQjAjalJAAQguAAgsAFIgTACQhjAOhZAnIgPkHQCmhPDAAAQGKABEXFLQEYFMAAHUQAAHVkYFLQkXFNmKgBQjAAAimhPg");
	this.shape_3.setTransform(371.3442,289.2212,0.8495,0.8171);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// buttons
	this.reset = new lib.rectangleflatpurple();
	this.reset.name = "reset";
	this.reset.setTransform(375.4,484.95,1.0808,1.8,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.reset, 0, 1, 2, false, new lib.rectangleflatpurple(), 3);

	this.face2 = new lib.bargreen();
	this.face2.name = "face2";
	this.face2.setTransform(235.15,484.95,1.0003,1.6364,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.face2, 0, 1, 2, false, new lib.bargreen(), 3);

	this.face1 = new lib.barblue();
	this.face1.name = "face1";
	this.face1.setTransform(89.1,484.95,1,1.6364);
	new cjs.ButtonHelper(this.face1, 0, 1, 2, false, new lib.barblue(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.face1},{t:this.face2},{t:this.reset}]}).wait(1));
	this.reset.addEventListener("tick", AdobeAn.handleFilterCache);

	// text
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag0DFQgXgLgMgRQgMgRAAgSQAAgOAHgJQAHgIAJAAQANAAAIAOIAKAPQAEAIAGAFQAGAFAIADQAIACAKAAQAVAAAMgHQALgJAFgOQAFgPAAgQIABg2QgMAZgRAMQgQANgWAAQgbAAgVgTQgVgUgLgiQgLgiAAgtQAAghAHgbQAGgcANgSQANgTAQgJQAQgKAUAAQAWAAARANQARAMAPAaIAAgKQgBgUAIgLQAHgKALAAQAPAAAGAOQAFAOAAAbIAADYQAAAlgFAbQgHAagMASQgNARgVAJQgVAIgeAAQgcAAgWgKgAglh+QgOAYAAAtQAAAuAPAWQAOAXAXAAQANAAANgKQALgKAIgTQAIgUAAgdQgBgtgOgaQgPgZgYAAQgXAAgOAYg");
	this.shape_4.setTransform(353.8,81.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA2CNQgIgLAAgVIAAgJQgJARgMALQgKAMgNAGQgMAFgRABQgTAAgQgMQgQgLgJgUQgKgYAAgsIAAiUQAAgWAHgLQAIgLAMAAQANAAAIALQAHALAAAWIAAB3QAAAaAEASQACASAJAJQAIAKAPAAQANAAALgLQANgLAFgSQAFgQAAg1IAAhbQAAgWAIgLQAIgLALAAQANAAAHALQAIALAAAWIAADYQAAAVgHALQgIALgLAAQgLAAgHgLg");
	this.shape_5.setTransform(329.1,76.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABfDBQgIgMAAgXIAAkUIgvD/IgIAkQgDAMgHAKQgIAJgOAAQgKAAgHgGQgHgGgEgKQgEgJgCgMIgFgYIgvj/IAAEUQAAAXgIAMQgHALgNAAQgMAAgIgLQgHgMAAgXIAAk8QAAgbAKgJQAKgJARAAIASAAQARAAAIAEQAHAEAEALQADALAFAYIAqDaIArjaQAEgYAEgLQAEgLAHgEQAIgEAQAAIATAAQARAAAKAJQAKAJAAAbIAAE8QAAAXgHAMQgIALgNAAQgMAAgHgLg");
	this.shape_6.setTransform(299.525,70.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhKBvQgdgpAAhGQAAggAHgdQAHgcAOgUQAOgVAUgKQAVgLAXAAQAhAAAXASQAXATALAdQALAdAAAfQAAAbgLAIQgMAJgWAAIhqAAQAAAZAIATQAHAUAMAKQAMAKAOAAQAKAAAIgDQAIgEAIgGIAOgPIAQgVQAFgFAHAAQAJAAAFAHQAFAGAAAMQAAAKgGANQgFAOgMAMQgMANgSAIQgRAIgYAAQgzAAgegpgAgfhQQgNATgDAmIBiAAQgCgmgNgTQgNgTgVAAQgUAAgNATg");
	this.shape_7.setTransform(259.775,76.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABsCMQgIgMAAgXIAAh9QAAgYgBgPQgCgOgGgKQgHgJgOAAQgKgBgKAJQgKAJgFAOQgGAUAAAvIAABjQAAAXgIAMQgIAMgNAAQgLAAgIgMQgIgMAAgXIAAh3QAAgcgBgPQgCgPgGgKQgGgKgOAAQgbAAgIAYQgJAZAAAvIAABlQAAAXgHAMQgIAMgNAAQgMAAgIgMQgIgMAAgXIAAjVQAAgVAHgLQAHgLAMAAQALAAAIAKQAHALAAARIAAAHQAOgWARgMQAQgKAUgBQAVAAAOAMQAOALAKAWQAOgWAQgLQAQgMATAAQAWABARAMQAQALAIAXQAHAUAAAsIAACRQAAAXgIAMQgIAMgMAAQgNAAgIgMg");
	this.shape_8.setTransform(229.375,76.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA/CNQgIgLgKgUQgUAVgSALQgSAKgXAAQgVAAgQgLQgQgMgJgTQgIgTAAgXQAAgfAOgVQAOgVAZgIIAagHIAjgKIAggMQgBgegIgNQgIgOgYAAQgUAAgKAIQgLAIgIAPIgKAWQgDAEgLAAQgJAAgHgHQgGgJAAgMQAAgUAKgTQAKgSAWgMQAWgMAfAAQAkAAAVALQAUAMAJAZQAJAZAAAqIAAAsIgBAoQAAAVAFAXQAFAXAAAHQAAALgHAKQgIAJgLAAQgIAAgIgLgAAHAPIgfAKQgJADgIAJQgIAJAAAQQAAARAJAMQAKAMAPAAQAPAAAOgJQAOgKAGgQQAIgRAAgnIAAgKQgMAGgXAHg");
	this.shape_9.setTransform(198.825,76.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA/DEQgHgLgBgUIAAgHQgLAQgKALQgLALgNAGQgLAGgPgBQgUABgQgMQgRgMgMgUQgMgVgHgdQgGgdgBghQAAhFAagnQAZgnApAAQAWAAARALQAQALAPAXIAAhuQAAgXAIgMQAGgMAMAAQANAAAHAMQAGAKABAVIAAFJQAAAVgIAKQgHALgMAAQgLAAgHgLgAgagcQgMAMgGAVQgHAVAAAdQAAAfAHAUQAHAWAMALQAMAKANABQAPAAAMgKQALgLAIgVQAHgWAAgfQAAgegHgVQgIgVgLgLQgNgLgOAAQgOAAgMALg");
	this.shape_10.setTransform(173.2,70.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA/CNQgIgLgKgUQgUAVgSALQgSAKgXAAQgVAAgQgLQgQgMgJgTQgIgTAAgXQAAgfAOgVQAOgVAZgIIAagHIAjgKIAggMQgBgegIgNQgIgOgYAAQgUAAgKAIQgLAIgIAPIgKAWQgDAEgLAAQgJAAgHgHQgGgJAAgMQAAgUAKgTQAKgSAWgMQAWgMAfAAQAkAAAVALQAUAMAJAZQAJAZAAAqIAAAsIgBAoQAAAVAFAXQAFAXAAAHQAAALgHAKQgIAJgLAAQgIAAgIgLgAAHAPIgfAKQgJADgIAJQgIAJAAAQQAAARAJAMQAKAMAPAAQAPAAAOgJQAOgKAGgQQAIgRAAgnIAAgKQgMAGgXAHg");
	this.shape_11.setTransform(148.575,76.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABfDBQgIgMAAgXIAAkUIgvD/IgIAkQgDAMgHAKQgIAJgOAAQgKAAgHgGQgHgGgEgKQgEgJgCgMIgFgYIgvj/IAAEUQAAAXgIAMQgHALgNAAQgMAAgIgLQgHgMAAgXIAAk8QAAgbAKgJQAKgJARAAIASAAQARAAAIAEQAHAEAEALQADALAFAYIAqDaIArjaQAEgYAEgLQAEgLAHgEQAIgEAQAAIATAAQARAAAKAJQAKAJAAAbIAAE8QAAAXgHAMQgIALgNAAQgMAAgHgLg");
	this.shape_12.setTransform(119.275,70.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AguBEIAAgOQA3gqAKgMQALgNAAgOQAAgMgJgIQgJgHgMAAQgLAAgJAIQgKAJgBAOIgPgFQAJgnAlAAQAVAAANALQANANAAAQQAAAMgGALQgGAJgRAQQgRAOgaATIBIAAIAAAOg");
	this.shape_13.setTransform(107.975,598.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AguBEIAAgOQA3gqAKgMQALgNAAgOQAAgMgJgIQgJgHgMAAQgLAAgJAIQgKAJgBAOIgPgFQAJgnAlAAQAVAAANALQANANAAAQQAAAMgGALQgGAJgRAQQgRAOgaATIBIAAIAAAOg");
	this.shape_14.setTransform(96.275,598.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkAxQgOgTAAgeQAAgcAOgUQANgUAXAAQAZAAANAVQANAVAAAbQAAAbgOAVQgNAUgYAAQgWAAgOgUgAgYgoQgJAPAAAZQAAAZAJAQQAJAPAPAAQARAAAJgPQAHgPABgXQAAgZgJgQQgIgRgRAAQgQAAgIAPg");
	this.shape_15.setTransform(84.65,598.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AguBEIAAgOQA3gqAKgMQALgNAAgOQAAgMgJgIQgJgHgMAAQgLAAgJAIQgKAJgBAOIgPgFQAJgnAlAAQAVAAANALQANANAAAQQAAAMgGALQgGAJgRAQQgRAOgaATIBIAAIAAAOg");
	this.shape_16.setTransform(72.875,598.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmBBIAAgMIAKABQAIAAAEgEQAFgEAFgRIgihfIAPAAIAaBJIAbhJIANAAIgoBtQgHAYgTAAQgGAAgHgCg");
	this.shape_17.setTransform(58,602.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghAsQgJgKAAgMQAAgPANgIQANgKAdAAIANABQAAgMgBgFQgDgGgFgDQgGgDgKAAQgWAAgEASIgOgDQAFgbAlAAQAVAAAJAJQAIAJAAAXIAAAoQAAALACAIIgPAAIgCgSQgKAVgYAAQgQAAgJgIgAgQAFQgKAHAAALQABAHAFAGQAGAEAJAAQANAAAKgKQAJgKgBgNIAAgHIgOAAQgRAAgLAFg");
	this.shape_18.setTransform(48.2,600.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAwBDIAAh0IgrB0IgLAAIgrh0IAAB0IgOAAIAAiFIAZAAIAmBqIAohqIAYAAIAACFg");
	this.shape_19.setTransform(35.15,598.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMAiIAAg6IgRAAIAAgMIARAAIABgZIAOgCIAAAbIAVAAIAAAMIgVAAIAAA9QAAAPAPAAIAMgBIAAAMIgOABQgbAAgBgeg");
	this.shape_20.setTransform(135.35,574.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgXAzIAAhiIANAAIAAAXQAHgQAGgFQAIgFAHAAIAGABIAAAOIgDAAQgNAAgIAKQgHAJgBAQIAAAzg");
	this.shape_21.setTransform(129.725,575.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAkBDIgNgnIgxAAIgMAnIgOAAIAriFIASAAIAsCFgAgVAPIAoAAIgUg/g");
	this.shape_22.setTransform(120.4,574.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgXAzIAAhiIANAAIAAAXQAHgQAGgFQAIgFAHAAIAGABIAAAOIgDAAQgNAAgIAKQgHAJgBAQIAAAzg");
	this.shape_23.setTransform(107.425,575.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgfAmQgNgOAAgXQABgXANgPQAMgOATAAQATAAANANQALAOAAAaIhHAAQAAAWAKAIQAJAHAKABQATAAAHgUIAPADQgEAMgMAJQgLAIgPAAQgUAAgMgOgAgRgfQgHAJgCANIA1AAQABgIgDgGQgDgHgFgFQgHgEgJAAQgJAAgJAIg");
	this.shape_24.setTransform(98.25,575.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLAiIAAg6IgSAAIAAgMIASAAIAAgZIAOgCIAAAbIAVAAIAAAMIgVAAIAAA9QAAAPAPAAIAMgBIAAAMIgOABQgbAAAAgeg");
	this.shape_25.setTransform(89.9,574.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdApQgJgKAAgTIAAg+IAPAAIAAA+QAAAPAHAGQAGAFAHAAQAGAAAGgEQAGgEAEgIQAEgIAAgJIAAg3IAQAAIAABiIgOAAIAAgTQgLAVgTABQgQAAgIgKg");
	this.shape_26.setTransform(81.475,576.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgpBDIAAiDIAOAAIAAAUQAKgXAUAAQARABALAPQALAOAAAXQAAAXgLANQgLAPgRAAQgSgBgLgRIAAAwgAgQguQgHAHgDAKIAAAcQACALAIAGQAIAIAIAAQAKAAAHgJQAIgIAAgVQAAgTgHgKQgHgKgLAAQgJAAgHAHg");
	this.shape_27.setTransform(71.075,577.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAzAzIAAg9IgBgOQgCgFgEgDQgGgEgGAAQgJAAgIAIQgIAIAAAQIAAA3IgOAAIAAhAQAAgNgGgGQgGgFgHAAQgKAAgIAIQgGAJgBANIAAA6IgOAAIAAhiIANAAIAAATQALgWAUAAQAKAAAIAHQAGAHACAKQAKgYAVAAQAKAAAIAGQAHAGACAHQADAIAAANIAAA9g");
	this.shape_28.setTransform(57.2,575.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AggAlQgLgPAAgWQAAgXANgOQAMgOASAAQAVAAAMAPQALAOAAAWQAAAXgMAPQgNAOgTAAQgUAAgMgPgAgSgdQgIAJAAAUQAAAVAIAKQAHAIALABQAMAAAIgKQAIgKAAgUQAAgUgJgJQgIgJgLAAQgLAAgHAJg");
	this.shape_29.setTransform(43.825,575.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgkAxQgPgUAAgdQAAgfAPgTQAPgSAYAAQAmAAALArIgQADQgJgggYAAQgQAAgKAPQgKAOAAAaQAAAZAKAPQAKAOAQAAQAZAAAIghIAQADQgLAsgnAAQgYAAgOgUg");
	this.shape_30.setTransform(33.075,574.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgfAmQgMgOAAgXQgBgXANgOQAOgPASAAQAUAAALAOQAMANABAZIhHAAQAAAXAJAHQAKAIAJAAQATAAAIgTIANADQgDANgLAIQgMAIgPAAQgTAAgNgOgAgQgfQgJAIAAAOIA1AAQgBgIgCgHQgCgGgGgFQgHgEgIAAQgLAAgHAIg");
	this.shape_31.setTransform(113.15,551.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgeA1QgMgOAAgWQAAgWAMgOQALgQASAAQARAAALAQIAAgwIAQAAIAACEIgPAAIAAgQQgKATgTAAQgSAAgLgPgAgRgMQgIAJAAASQAAAUAHAKQAHAKALAAQAKAAAJgJQAIgIAAgNIAAgUQAAgMgIgIQgIgIgLABQgKAAgHAKg");
	this.shape_32.setTransform(102.2,549.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AghAsQgJgKAAgMQAAgPANgIQAMgKAeAAIANABQAAgNgCgEQgBgFgHgEQgFgDgKAAQgWAAgEASIgOgDQAFgbAmAAQAUAAAJAJQAIAJAAAXIAAAoQAAALACAIIgPAAIgCgSQgKAVgYAAQgQAAgJgIgAgQAGQgJAFgBAMQAAAIAGAFQAGAEAKAAQANAAAIgKQAKgJgBgOIAAgHIgOAAQgRAAgLAGg");
	this.shape_33.setTransform(91.6,551.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgXAzIAAhiIANAAIAAAXQAHgQAGgFQAIgFAHAAIAGABIAAAOIgDAAQgNAAgIAKQgHAJgBAQIAAAzg");
	this.shape_34.setTransform(84.025,551.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeA1QgMgOAAgWQAAgWAMgOQALgQASAAQARAAALAQIAAgwIAQAAIAACEIgPAAIAAgQQgKATgTAAQgSAAgLgPgAgRgMQgIAJAAASQAAAUAHAKQAHAKALAAQAKAAAJgJQAIgIAAgNIAAgUQAAgMgIgIQgIgIgLABQgKAAgHAKg");
	this.shape_35.setTransform(74.3,549.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAYAzIAAg/QAAgNgFgGQgGgFgJAAQgLAAgIAJQgIAJAAAQIAAA1IgPAAIAAhiIAOAAIAAASQAMgVASAAQAMAAAHAGQAIAGADAHQADAHAAATIAAA4g");
	this.shape_36.setTransform(63.875,551.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAkBDIgOgnIgwAAIgMAnIgOAAIAriFIATAAIArCFgAgWAPIApAAIgUg/g");
	this.shape_37.setTransform(53.1,549.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_38.setTransform(40.25,555.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAkBDIgOgnIgwAAIgMAnIgOAAIAriFIATAAIArCFgAgWAPIApAAIgUg/g");
	this.shape_39.setTransform(32.4,549.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Frame
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_40.setTransform(480,320);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_41.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).wait(1));

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