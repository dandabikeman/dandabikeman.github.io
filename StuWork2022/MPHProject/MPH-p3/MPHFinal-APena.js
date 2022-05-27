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


(lib.phone = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjbDfIG3gFAjbjeIG3AA");
	this.shape.setTransform(0,-1.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AjbEsIG3AAIAAhfIAAm3IAAhBIm3AAIAABBIAAG8g");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjbEsIAAhaIAAm8IAAhBIG3AAIAABBIm3AAIG3AAIAAG3Im3AFIG3gFIAABfgAgTDnQgHAHAAALQAAALAHAIQAIAHALAAQAKAAAHgHQAIgIAAgLQAAgLgIgHQgHgIgKAAQgLAAgIAIgAgDkMIgEACQgDACAAADIAAABQACAFAEABQAEAAACgEQACgDgBgDQgCgCgEgCgADcDNgADcjqg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgSATQgHgIAAgLQAAgKAHgHQAIgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAIQgHAHgLAAQgKAAgIgHg");
	this.shape_3.setTransform(-0.1,24.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGACIAAgCQAAgBACgDIAEgBIAAgBQAFACABACQACACgCADQgCAEgEAAQgFgBgBgEg");
	this.shape_4.setTransform(-0.3929,-26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.phone, new cjs.Rectangle(-23.5,-31.5,47,63.1), null);


(lib.panda = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AHLo4QAbBrgbAQAJcpCQALA6gQA1QgEANgGANACVHuQg4AqAOArAneGPIgZBDAomFuIg6BBAAVHrQgoAZAcAq");
	this.shape.setTransform(-3.1388,116.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AHE4LQgCAdgKAiQhwgPhvh4QAUgaAWgQQBBgvBWAuQAxAlgHBOQDBDFAZE5IBDGhIBiJgQAKBEAHBCQAeEgglDmQgGAigHAhQgSBRgbBJQBXAqAwh7QAAhchNgwADcARQAGCgAQB7ALnDBQgdE9h6DDQgSAKgRAGQhKAdg4ghQiJgSgwmPAhdYuQg8BPA8AiQAUAIAUAIQAPAFAQAFQAvAPAzAGQDbAcEEiAQAbi/AIkNQCBiGBEi7ALnDBQA3gQA2g3ANALDQkvCwlnA0QqzAql3kdQAxDaCMCzQAGDnByCfQhtA1A5A/QAxAXA4AMQC5AnEAhXALclsQAhE7gWDyAjn6ZQAnhFiMAOQhMA4ARBQAi26oQgZAHgYAIQhZAfhHAygAqRngQmVnUExjjIB4g3QAAgBAAAAQAJgiALgfQAHgUAIgSQABgDABgCQACgFACgFQAPgiARggQBDh2BqhLAtsBaQhQFLA8EPAhSUFQgGAkgBAkQgEBqAqBnQAAAAABABQAHASAJARAgyYfQgWAIgVAHArDRBQEEECFUAKAqRngQibExhAEJQFPErMPhZAD/6DQh0hMlBAnALhpsQs5GRo5kF");
	this.shape_1.setTransform(0.0143,0.0016);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtjQ5Qg8kPBQlLQFOErMPhZQAxGPCJASQA4AhBKgdQARgGASgKQB6jDAdk9QA2gQA3g3QAeEggmDmIgNBDQkuCwloA0QhZAFhVAAQo1AAlGj4gAp1hbQmUnUEwjjIB4g3IABgBQAJgiALgfIAOgmIACgFIAEgKQAPgiASggQBCh2BqhLIDShgQFAgnB0BMIAEAGQgWAQgTAaQBuB4BwAPQAKgiADgdQDBDFAYE5IBDGhQn0DymWAAQkIAAjghmg");
	this.shape_2.setTransform(-2.819,-38.8831);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66635E").s().p("AA/bOQgDgIAAgJQAAgiAtgiQgtAiAAAiQAAAJADAIQgygGgwgPQgMgRABgOQAAgVAYgOQgYAOAAAVQgBAOAMARIgfgKIgogQQg7giA7hPQkABXi5gnIAZhEIgZBEQg4gMgxgXIA6hBIg6BBQg5g/Btg1QhyifgGjnQEEECFVAKQlVgKkEkCQiMizgwjaQF2EdKzgqQFog0EuiwQgSBRgaBJQAahJAShRIANhDQBOAwAABcQgxB7hWgqQhFC7iBCGQgIENgbC/QjWBpi6AAQgoAAgngFgAgvZCIgQgjIgrAPIArgPIAQAjgAg/YeIAAABIAAgBQgnheAAhhIAAgSQABgkAGgkQgGAkgBAkIAAASQAABhAnBegAGfLNQANgIAAgeQAAgfgNg1QANA1AAAfQAAAegNAIQiKgSgwmPQgPh7gHigQAHCgAPB7QsPBZlPkrQBAkJCbkxQI5EFM5mRIBiJgQALBEAGBCQg2A3g3AQQAJhhAAhrQAAikgTi9QATC9AACkQAABrgJBhQgdE9h6DDIgYgJQAJgfAAghQAAgXgFgYQAFAYAAAXQAAAhgJAfQgFAMgGANQgiAOgfAAQgjAAgdgSgALaDBIAAAAgADN5TQATgaAWgQQBBgvBWAuQAxAlgGBOQgDAdgKAiQhwgPhuh4gAlY7QQCLgOgnBFQhZAfhHAyQgRhQBNg4g");
	this.shape_3.setTransform(1.3,0.0016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.7,-177.2,189.5,354.5);


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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ABKAAQAAAPgWAKQgVALgfAAQgdAAgXgLQgVgKAAgPQAAgOAVgLQAXgLAdAAQAfAAAVALQAWALAAAOg");
	this.shape.setTransform(-0.0053,0.0241,1,1,14.9992);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0AZQgVgKAAgPQAAgOAVgLQAXgLAdAAQAeAAAWALQAWALAAAOQAAAPgWAKQgWAMgeAAQgdAAgXgMg");
	this.shape_1.setTransform(-0.0053,0.0241,1,1,14.9992);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose, new cjs.Rectangle(-8.7,-5.5,17.4,11), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhpAGQAjAKAUgTQAlAPAdgeQAtAJAAgnQAOgEAPgFQAYALgJAaQgSA4g8AQAAXAwQACACACACAgQA6QAMAAALgCQALgBAJgDAgtA2QAOAEAPAAQASgBAVgJAgtA2QgRgGgNgOQA3gaArAoAhpAGQACAOALAIQAWATAZAHAhpAGQgCgIACgLQBTgKBTgZ");
	this.shape.setTransform(-0.0094,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE8C91").s().p("AgTANQgQgGgOgNQA3gaAsAnQgWAJgSABQgPAAgOgEg");
	this.shape_1.setTransform(-2.7,4.0667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#612928").s().p("AhcAeQgMgIgCgOQAkAKAUgTQAlAPAdgeQAtAJgBgnIAdgJQAYALgJAaQgSA4g8AQIgEgEQgrgpg3AaQAOAPAQAGQgZgIgVgSg");
	this.shape_2.setTransform(0.0227,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6F7").s().p("AhSAaQgCgJACgLQBSgJBUgZQAAAmgtgJQgeAfgkgQQgNANgUAAQgKAAgMgDg");
	this.shape_3.setTransform(-2.3319,-1.9555);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-6.8,23.4,13.6);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AANgcQAvgSApgdIAnBeQAFgFAFgEQAsgggIghQgGgUgOgHQgIgFgLABIggAAQgDACgCACQgFADgEAEAA4BCQAvgRAlgeAANgcIArBeAioAEQAFgEAHgCQAiABAggEIAqBcAioAEQgcATAPAkQAXAKAWAHAioAEIAgBIQAsANAsgCQALgBAKgBQAsgFAngOAhagFQA3gFAwgS");
	this.shape.setTransform(0.017,0.0305);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiIBMIgghIQAFgEAHgCQAiABAggEQA3gFAwgSIArBeIgrheQAvgSApgdIAnBeQglAegvARQgnAOgsAFIgVACIgqhcIAqBcIgJAAQgnAAgogLgAi1A7QgPgkAcgTIAgBIQgWgHgXgKgACMATIgnheIAJgHIAFgEIAgAAQALgBAIAFQAOAHAGAUQAIAhgsAgIgKAJgAioAEg");
	this.shape_1.setTransform(0.017,0.0305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth2, new cjs.Rectangle(-19.7,-9.7,39.5,19.5), null);


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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AhDAQQASgQASgIQAfgNAgANQASAIASAQ");
	this.shape.setTransform(0,0.0375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(-8.2,-3,16.5,6.1), null);


(lib.hotdog = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#0000CC").ss(1,1,1).p("AAAAAIAAAB");
	this.shape.setTransform(-5.75,-4.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgXhCQAdgOATgIQASgJARABQAhADAfAtAjAjBIAoAHIABAAIADABICRAaIABAAIABABIDQAkIAEgBIAtAIQAFACAGAEAEJgwQgfgggbABQgcAAgWAhAEVhlQAMALAJALQAYAfgCAlIgTAZAlfgiQAVg4A5AGQAIACAIAEQAVAIAWAHQBXAdBaATQADAAADABQAFAAAHABQBUAQBYAFIACAAQBEADBHgDQADADAEADAlmgSQAWDIEAA2QDgAnBqgnQBMglAbgmQADgKABgIQAMhMhEg1Aj5jFIAsADAlWjAQgOgdgCgiIBXA3IAGACAlmgSIAAgZIAAgZAkMhzIhOA0IgCAMIgDARAkLh1IAAADQAAgBgBAAQgJgHgIgFIASAKIgBACAkBhgQgCgNgIgFAlOidIAxAeQgagTgQgVAiNh/QAxgSAeAPQAdANAKAyAlmgSQADgJAEgH");
	this.shape_1.setTransform(-3.335,2.4125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C79C7A").s().p("AhrC7QkAg2gWjIQADgJAEgHQAVg4A5AGIAQAGQAVAIAWAHQBXAdBaATQADAAADABIAMABQBUARBYAFIACAAQBEADBHgDIAHAGIATgaQACglgYgfQgJgLgMgLIAOAEQAxALAoAaIAPAOQAHAIAEANQALAkgHAsIgFAWQgEAJgMAOIgkA9IALgdIgHALIgEAGQgBAGABAGQgbAmhMAlQg1AUhTAAQhSAAhwgUgAFKBeQACgLAAgLQAAg+g6gsQA6AsAAA+QAAALgCALgAFGBwIAAAAgAl1iVIACgLIACgKIAAgIIACgFIACgDIAEgUIAxAeIARAMIhOA0g");
	this.shape_2.setTransform(-0.6257,7.3125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC6600").s().p("AE5CBQhHADhEgDIgCAAQhYgFhUgRIgMgBQgDgBgDAAQhagThXgdQgWgHgVgIIAAgSQgCgNgIgFIAAgDIgSgJQgagTgQgVIAFgNQAAgOgOAAIgCABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgOgdgCgiIBXA3IAGACQAEAEAGgCQADgBADAAIAsADIgEAEIgDAJIgFAUIgDAKQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIAAABQACAFAGACQAEABAFgDIABgBIAPgqQADgGgGgDIAoAHIgRABIgDgDIgDgBIgJAEIAAADIgCABIABADIgBACIABADIgBACIAAAGIgGAIIAAAEIgCAEIgIAYIACAFIADACIAFAAQAEACADgEIABAAIAIgVIADgCIAIgXIgCgBIAAgLIgBgGIAUgBICQAaIALAaIgKgaIABABIDRAkIAEgBIAtAHIALAGIAGAHIAEABQAMALAJALQAYAfgCAlIgTAaIgHgGgADiApQgcAAgWAhQAWghAcAAIADAAIAAAAIAAAAQAZAAAcAcIABABIAAAAIAAABIABAAIAAABIAAgBIgBAAIAAgBIAAAAIgBgBQgcgcgZAAIAAAAIAAAAIgDAAIAAAAgABPAYQAhADAfAtQgfgtghgDIgBAAIgBAAIgCAAIAAAAIgBAAQgNAAgOAGIgBABIgCABIgwAWIAAgBQgKgygdgMIgBgBQgNgGgRAAIAAAAIAAAAQgUAAgaAJIgCABIACgBQAagJAUAAIAAAAIAAAAQARAAANAGIABABQAdAMAKAyIAAABIAwgWIACgBIABgBQAOgGANAAIABAAIAAAAIACAAIABAAIABAAgAkBgNQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAFAEAEABQAGABAFgGQADgDACgHIAJgdQgBgKgEgCIgCgCIgEgBQgHAAgBAHQgEgKgDgEIgEgBIgBAAIgDgBQgIABAAAMIADAQQAAADgDAFQgEAMABACQAAAIAKABIAAgBIABABgAj5AFIABgCIAAADQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAgAj5AFIgRgLIASAJIgBACIAAAAgAkKgGg");
	this.shape_3.setTransform(-5.2456,-9.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009933").s().p("AAUAsIgCgCIgBAAIiQgaIgCgBIgBAAIgogHQgCgCgEAAQgEgCgEADIgsgDIADgDQABgFgDgEQAHAGAMgHQAEgDAFgMIAEAGQACAEAHAEIAFALQADADAIAAQAFACADgGQABgFgDgHQgCgIgIgJQgIgEgDAAQgGgDgDAEIgDAEQADgPgBgGQAEgBAJACQAJAEAFgBIAIgHIAWgZQAFgCANACQATAFAGAIQAAADAFANIAIAMQAEACAQgEQANgEAPAGQAEAQgEAQIgCAFQgCAGAAAEIAAADIABAFQADAFAKAGQAKAEAEgCIAGgGQAAgEgDgEIALAEQAAAEACACQACAEAEABIACADIACAAIAEgCIABACQADAEAFgDIAEgBIABgEIAEgFIAKABIARAKIALAHIABAAIAIABIAEgBIADgBIADgIIAEgMIAEgEIACgIQADgCAHACIAQAHIADAAIABABIADAGQAIAEAGgHQAAgHAGgGQAGgHAGABIAGACIANAFIADABQAEADABAFQACAIgDAFIAAABQgBAGACAEQACAEAEABIgEABIgDADIgBADIgCAAQAAAAgBAAQAAABAAAAQAAABAAABQABABAAABIgBADIABACQADAFAFACIAJgEIAEgJIgBgEQgDgEgDgCIAHgBQADAAAKAFIgFALIABABQgCAFAFAEQAAABABAAQABAAAAABQAAAAABABQAAABAAAAgACbAtIgBAJQABADADABIAFADQAIAAADgIIABABIAFgOIgBgCQAAgGgHgEQgGgCgEAHIgCAAgABvAXIATAEIgCgDQgEgFgIAAQgFADAAABgAhfAPIABAAIAEAAIADAAIABgBIADgEIAAgCIABgHIAFgOQAAgEgEgFQgCgDgGABQgFACgEAKIgEALIAAADIgBAEQAAAEAEAEIABAAIAAABIABgBIACABgAiFghQgEAAgBADIgDACIAAAEIAEAMIAAALQADAHAFABQAGAHAGgIIABgCIAAgBQACgEgCgFIgEgTIgBgEQgDgFgEAAIgFABg");
	this.shape_4.setTransform(-5.475,-17.8125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AFHDrQgFgCgDgEIAkg9QAMgOAEgKIAGgVQAGgugKgjQgEgNgHgIIgQgOQgngZgxgLIgPgEIgEgCIgGgGQgEgFAEgGQAEgJASADQAzAKAnAXQAeASAMARQAWAfgDA5QAAArgQAbQgLASgaAeIgLAOQgFAFgHAAIgDAAgAE/DZIAEgGQgBAHgDALQgBgGABgGgAFDDTIAHgLIgLAdQADgLABgHgAFDDTIAAAAgAmTASQgDgDAAgKIAAgsIACgKIABgGIABgLIAIgZQADgNAFgKIADgCQABgHAHgBQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIABgBQAPAAAAAPIgGAMIgGALIgEAUIgDADIgBAFIAAAIIgDAJIgBAMIAAAkIgDAMQgCAFgGACQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIAAgZIAAAZIgDAAQgGAAgDgGgAl+AQgAl7AEIgBAHIgCAFgAl7AEgAjhgxIgGAAIgCgDIgDgFIAIgYIADgEIAAgEIAFgIIAAgGIABgDIgBgCIABgCIgBgEIADgBIAAgDIAJgDIADABIACACIACACIABAGIAAAKIABACIgIAXIgCACIgIAVIgCAAQgBADgDAAIgCAAgACrg6QgFgFACgEIgBgCIAFgLQgKgFgDAAIgHACQADABADAEIABAEIgEAJIgJAEQgFgBgDgFIgBgDIABgDQAAgBgBgBQAAgBAAAAQAAgBAAAAQABgBAAAAIACAAIABgDIADgCIAEgCQgEgBgCgEQgCgEABgGIAAAAQADgFgCgJQgBgEgEgDIgDgCIgNgFIgGgBQgGgCgGAHQgGAGAAAIQgGAGgIgEIgDgGIgBgBIgDAAIgQgGQgHgDgDADIgCAHIgEAFIgEALIgDAIIgDABIgEABIgIgBIgBAAIgLgHIgQgKIgKgBIgEAFIgBAEIgEABQgFADgDgEIgBgCIgEACIgCAAIgCgCQgEgCgCgEQgCgCAAgEIgMgEQADAEAAAEIgGAGQgEACgKgDQgKgGgDgGIgBgFIAAgDQAAgEACgGIACgFQAEgRgEgQQgPgGgNAEQgQAEgEgCIgIgLQgFgOAAgDQgGgIgTgFQgNgBgFABIgWAZIgIAHQgFABgJgDQgJgDgEACQABAFgDAPIADgDQADgFAGADQADABAIAEQAIAJACAIQADAGgBAFQgDAHgFgBQgIAAgDgEIgFgMQgHgEgCgEIgEgGQgFAMgEADQgMAHgHgGQADAFgBAFIgDAEQgDAAgCABQgHABgEgDQgDgDAAgCQgGgJAFgJQADgHAGgDQAIgDALADQADgDACgQQAAgOAHgFQAFgGAMABQAGAAALAFQAJgRAMgIQAHgGAIgCQAJgCANAFQARAFAKAGQAOAIACANQAAAEADACIAEAAQAMgGAUAIIAOAGQAEAGAFALQABANgBAPIARAHQAEABADADQAEABACACIACACIACAEIADgBIAEgDQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIADgBQAGgBAIACIAOAIQAHAAAHAEIABgCQAAgEAEgGIAMgPQAEABAIgFIAgAMQAHgOAMgCIAQgCIAUAHIAPAIQADAEACALIADAGIABAIIASAJIAJAJQAEAFAAADQABADgDAIQgDAAgCAEQgEAJgEACIgCAAIgEAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAgAksg6QgEgCgFgEQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAABQgJgCAAgHQgBgCAEgMQACgFAAgDIgCgRQAAgLAIgCIACABIABAAIAEACQADAEAEAKQABgIAHAAIAEACIADABQAEADABAKIgJAdQgDAHgDACQgEAGgEAAIgCAAgAj4hIQgGgBgBgFIAAgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgKIAFgVIACgJIAEgEQAEgCAEABQAEAAACACQAFADgDAHIgOAqIgCABQgDACgDAAIgDgBgABnhLQgDgCgBgDIABgJIAFgLIACAAQAEgIAGACQAHAEAAAGIABACIgFAOIgBgBQgDAIgIAAIgFgCgAA4huQAAgCAFgDQAIABAEAFIACACgAiRh2IgEAAIgBAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABIAAgCIgBAAQgEgEAAgEIABgEIAAgEIAEgKQAEgLAFgCQAGgBACADQAEAFAAAEIgFAPIgBAHIAAACIgDAEIgBACIgDAAgAi4h/QgFgBgDgIIAAgKIgEgNIAAgEIADgCQABgDAEAAQAIgEAEAJIABADIAEATQACAFgCAGIAAABIgBABQgDAEgEAAQgCAAgDgDg");
	this.shape_5.setTransform(0.018,-4.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.6,-27.9,81.30000000000001,56.9);


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
	this.shape.graphics.f().s("#993333").ss(3,1,1).p("AhrAwQgMjTCnhEQCHg+CbB/QBNB2gUBiQAHgUAGgWICbAZIAtBXApfgnIA/AAApfgnQAaiYB/grQCdgjBaBzQA+BpglBeIBLADAi2AtQhPCfiegTQiwgjgMi9AGLAyQhBC8i2APQjAgNg/jA");
	this.shape.setTransform(0,-0.0059);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses2, new cjs.Rectangle(-62.2,-26.7,124.5,53.5), null);


(lib.glasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ABYAAQAABKgbA0QgZA0gkAAQgjAAgag0Qgag0AAhKQAAhJAag0QAag0AjAAQAkAAAZA0QAbA0AABJg");
	this.shape.setTransform(-49.1,-7.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag9B9Qgag0AAhJQAAhJAag0QAag0AjABQAkgBAaA0QAaA0AABJQAABJgaA0QgaA1gkAAQgjAAgag1g");
	this.shape_1.setTransform(-49.1,-7.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AClAAQAABUgxA8QgvA8hFAAQhEAAgwg8Qgwg8AAhUQAAhUAwg8QAwg7BEAAQBFAAAvA7QAxA8AABUg");
	this.shape_2.setTransform(-12.6,5.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah0CQQgwg7AAhVQAAhUAwg7QAxg8BDAAQBEAAAxA8QAwA7AABUQAABVgwA7QgxA8hEAAQhDAAgxg8g");
	this.shape_3.setTransform(-12.6,5.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AgfBeIIci7AllAcIiXgw");
	this.shape_4.setTransform(7.025,-1.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses, new cjs.Rectangle(-60.3,-28.1,120.69999999999999,56.3), null);


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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ABggFQAkhWBtAaQA+AZADBbQgnBQhTgHQhsgaAUhngAApgeQAqh6BogdQAxgOA/AHQAIAEAIADQCIA/gHB8QgSDKjjgRQirgwANitgAm6grQAGgSAIgQQAmhPBLgZQAxgQBAAHQAKAFAKAEQB5A6gGBzQgRC7jTgQQhlgdgghMQgTgrAFg6gAksAAQAQhfBlAKQBAAQAQBAQgFBehIAHQh9gEAFhcg");
	this.shape.setTransform(0.0231,0.0095);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AC1BpQhrgaAUhnQAjhVBuAZQA+AaADBbQgkBJhJAAIgOgBgAkvgTQAQhfBmAKQA/ARARA/QgFBehJAIQh9gFAFhcg");
	this.shape_1.setTransform(0.2654,1.8845);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383E42").s().p("ADHC/QirgwANitQAqh6BogdQAxgOA/AHIAQAHQCIA/gHB8QgRC7jCAAIgigCgABggFQgUBnBsAaQBTAHAnhQQgDhbg+gZQgZgGgVAAQhHAAgcBCgAknCjQhlgdgghMQgTgrAFg6QAGgSAIgQQAmhPBLgZQAxgQBAAHIAUAJQB5A6gGBzQgQCsi0AAIgggBgAksAAQgFBcB9AEQBIgHAFheQgQhAhAgQIgSgBQhVAAgOBWg");
	this.shape_2.setTransform(0.0231,0.0095);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes2, new cjs.Rectangle(-45.9,-20.7,91.9,41.5), null);


(lib.eyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ABxDyQgdgGgQgLQgRgHgQgYQgMgRgNgeQgIgRgCgOQgEgQABgTQABgWAIgrIAOhCQAFgZAGgMQAGgOAUgYQATgWAPgIQALgGARgDIAdgDQAXgBALAAQASABANAHQAIAFANAMIAbAbQAhAnAVBNQAMAqgBAaQgBAPgGAVQgHAhgKATQgZAthLAfQgjAOgXAAQgLAAgUgEgACTiXIgWABQgMABgJAEQgNAFgVAWQgSASgHANQgGAMgGAaQgRBGgFAhQgFAfACAQQABAPAQAjQAKAWAHALQALASAOAJQAPALAjAHQAVAFANgBQAOgBATgIQAmgNAXgPQAggUANgcQAHgMAHgZQAKgpgCgTQgBgMgFgQIgKgbQgIgdgGgOQgQgsgrgpQgOgMgIgEQgLgEgPAAIgDgBIgZACgABaBKIgFAAIgHgCQgKgDgHgHQgEgDgBgDIgCgDQgCgDABgFIAAgGIABgGIACgEQAEgJAFgDIAGgEIAFgFQADgEAGgBIADgBIADABIANAEQALAGAIAPQADAFABAEQACAHgDAKQgBAFgDAEIgEAEIgGAEIgGABQgHACgHAAIgCAAgABxA5IAAABIABgCIgBABgABCAfIAAAAIABgCIgBACgAkPA1QgNgDgJgFQgIgFgJgIQgIgGgDgGQgCgEgBgKQgDglAHgmQAMg/AuhDQALgRALgJQAagXAhAEIALACIALAAIANgCQAFABAGAGQAJAJAIAPQAIARABAZQAAAPgDAdQgGA1gHAaQgNAsgZAYQgVAVgdAJQgRAFgRAAQgMAAgMgCgAjkjWQgHAGgLAOQghAtgSA3QgPAyACAqQABAJACAEQADAFAFAGQANAMAQAEQAIACAMAAQAeAAAbgPQAbgQANgaQAGgLAFgRIAJgiIAFglIACgRQADgagBgRQgDgZgMgPQgEgFgEgCQgEgCgJAAIgXgDIgFAAQgWAAgSAOgAkHgWIgNgEIgGgEQgOgOAGgQQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgHQgBgDAEgFQAEgEAGgBIAMgBQAEgBAEABQAFABAJAIIAEAEIAFAGQAFAIgBAOIgCAKQgEAKgKACg");
	this.shape.setTransform(0.0155,-0.0052);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes, new cjs.Rectangle(-32.6,-24.5,65.2,49.1), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhHAGIgZAGAAqgFQAggOAXAV");
	this.shape.setTransform(0.025,-0.0011);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-2.1,21.299999999999997,4.300000000000001);


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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAHhSQBkCcDUAJAk+AuQB6AlBQht");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrows, new cjs.Rectangle(-33.4,-9.8,66.8,19.6), null);


(lib.ears = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AkvFwIgCAAQgEAAgEgCQgFgCgBgGIABgFIgCgDQgdgrgdgyIhGiBIgNgYIgRgWQgKgOgMgaIgOggQgNgagBgNQgBgUALgUQAHgMAJgEQAJgFASAAQAiAAA3AQQAnAMBLAeIBpApQAbAMAOAFIATAEQAMADAHADIADACQAEgCAFADQAGAEAAAHQAAAFgFAHQgQAVgNAOIgeAgQghAlgaAkIgXAkQgQAYgJARIgFALQgHAOgNARIgIAMIgNARIgHAKQgFAGgEABIAAABIAFAAIgDABIgCgBgAi3BGQgEAcgJAPQgHAOgRATIgnArQgUAWgIAGIgYAOIgjASIgGADQAaAxAXAeIAUgcIAMgTIAJgQQARgiAjgxQAegpAUgWIAogqIAOgRIACgCIgcgJQgNgEgegMIgEgCQgBATgDARgAknA5IgMAOQgIAKgLARQgkA0goAMIAmBEIAJgFQAngQATgRQALgIASgUIAfgjQAOgQAFgJQAQgbgBgxIAAgEIhGgcQgFAogRAVgAl6gmQgMAagPAWQgNAUgIAKQgOAOgQAHIgFABIAMAPQAIAKAEAHQAFAJAHASIAJARIACAAQAbgEAZgdIATgZIASgZIAPgSIAHgRQAFgNABgLIABgKQgygVgdgJIgDAGgAnphAQgIAFgDALQgEALACAKQABAIAEAJIAJAQIAMAcIAEAIIAJgEQAKgFAHgHIAdgoQAGgMALgaIAAAAQgmgLgigDIgFAAQgHAAgFACgAEuEsQgtgEgWgIIgdgOIghgSQgTgNglgkQgSgTgGgKQgEgHgHgUIgLggQgEgNACgGQACgEAEgCIAqhqIABgDIACgHQAQgnAkhNIAYgxQAwhmAhgyIAEgGQAKgNAGgEQAMgIAPADQAOACANAJQAJAHAIAKQAMAPAJAXIANAmIBLENQADALgCAEIgBADIAFAUIAKAfQAFADABAEQABAFgBAFIAHAcQACAOACAFQACAIAIAOIAEAPIACADQADAEABAGQAAATgQASQgXAcgpAQQgbAJgNAFIgjAOQgOAEgYAAQgPAAgTgCgABfBkIAFALIAKAdQAFAPAFAJQAGAIASASIAZAaQARAOAhARQAUALAOAEQAJACAaACIAmAFQAWABAPgEIAhgNIAngOQAXgIAOgLQAOgLAMgTIgBgEIgCgOIgGgMIgGgLIgEgVIgDgQQglAWgtAFQgpAFgygGQhWgJg9ggQgegSgPgHIgFgCgACRgPQgEAKgEAEIgCABIgSAtIALAFQAeAUAXAKQA0AYBMAHQAxAFAlgFQApgGAegUIgBgCQgGgRgIgmQgEgRAAgIIAAgCQgCgKgFgPIgDgKIgBAAQhaATh+gVQgQgCgLgEQgLgFgOgIIgFgDIgSArgADYisIgqBaIANAKQASALAoAFQA6AGAVABQA2ACAxgKIACgBIgNgzIgYhXQgKAGgLAEQgMAEghAEIgVABIgRgDIgZgFQgXgFgMgGIgMAYgAE4lVIgDACIgHAIQgZAlglBJIACABQAHAEAMACIAUAFIATAFQAHABAOgBQAUgCALgCQARgEALgIIAEgDIgRg7QgHgUgGgLQgIgQgMgIIgDgCQgGgEgGAAQgDAAgEACg");
	this.shape.setTransform(0.0163,0.0021);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AleECIAGgCIAkgSIAXgPQAIgFAVgWIAmgsQASgTAHgNQAIgQAFgbQADgRAAgTIAEABQAeANAOADIAbAJIgBACIgPARIgnAqQgUAWgfAqQgiAwgSAjIgIAQIgNATIgUAbQgWgegbgxgAFJEVIgmgEQgbgDgIgCQgOgEgUgLQgigRgQgOIgagZQgSgSgFgIQgGgKgEgPIgKgdIgFgLIALgcIAEACQAQAIAdARQA9AhBWAJQAzAGAogGQAugFAlgVIADAQIAEAUIAGAMIAFAMIADAOIABAEQgMATgPALQgNAKgXAJIgoAOIggANQgLADgPAAIgLgBgAmPCpQAogMAjg0QAMgSAIgJIAMgOQAQgVAGgqIBGAeIgBAEQABAxgPAaQgGAKgOAQIgfAjQgSAUgKAIQgUARgnAPIgJAFIglhDgAmnCAQgHgTgEgIQgEgHgIgKIgMgPIAEgCQAQgGAOgPQAJgJANgUQAOgWANgaIADgHQAcAKAyAVIgBAIQAAAMgFAOIgIAQIgOASIgTAaIgTAZQgYAdgcADIgBABIgKgRgAE4B2QhMgHg0gYQgXgLgegTIgMgGIASgtIACgCQAEgEAEgJIATgrIAEADQAOAJALAEQALAEAQADQB+AVBbgTIAAAAIAEAKQAFAOABAKIABACQAAAJADAQQAJAmAGARIABACQgfAUgoAHQgTACgVAAQgWAAgYgCgAnZAoIgNgcIgIgPQgFgKgBgHQgBgKADgMQAEgLAHgFQAHgDALABQAhADAnALIgBAAQgKAagHAMIgcAoQgIAIgKAEIgIAFIgEgJgAFGgqQgVgBg6gHQgngFgSgKIgNgKIAqhbIALgXQAMAGAXAEIAZAGIARADIAWgBQAhgFALgDQAMgEAKgGIAXBXIAOAzIgDAAQgqAJguAAIgPAAgAEujGIgTgFIgTgEQgMgDgHgDIgCgBQAlhKAZglIAHgIIADgCQAIgEAKAGIADACQAMAJAJAQQAFAKAHAVIASA7IgEACQgMAJgQADQgLADgUABIgNABIgJgBg");
	this.shape_1.setTransform(-0.2475,-0.63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ears, new cjs.Rectangle(-52.8,-36.8,105.69999999999999,73.69999999999999), null);


(lib.roundeddoublegradviolet = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#A339BD","#D196E0"],[0,1],-0.4,12,0.1,-14.6).s().p("AluBqQgNgOAAgUIAAiPQAAgUANgOQAOgOAUAAIKaAAQATAAANAOQANAOABAUIAACPQAAAUgOAOQgNAOgTAAIqaAAIAAAAQgUAAgOgOg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-12,76,24);


(lib.roundeddoublegradpeach = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#B67616","#F2CD95"],[0,1],-0.4,12,0.1,-14.6).s().p("AluBqQgNgOAAgUIAAiPQAAgUANgOQAOgOAUAAIKaAAQATAAANAOQANAOABAUIAACPQAAAUgOAOQgNAOgTAAIqaAAIAAAAQgUAAgOgOg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-12,76,24);


(lib.roundeddoublegradgrey = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#595959","#BFBFBF"],[0,1],-0.4,12,0.1,-14.6).s().p("AluBqQgNgOAAgUIAAiPQAAgUANgOQAOgOAUAAIKaAAQATAAANAOQANAOABAUIAACPQAAAUgOAOQgNAOgTAAIqaAAIAAAAQgUAAgOgOg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-12,76,24);


(lib.roundeddoubleglowviolet = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AA5ECC").s().p("AlABkQgRAAgLgMQgLgMAAgQIAAh3QAAgRALgLQALgMARAAIKBAAQAQAAALAMQALALABARIAAB3QAAAQgMAMQgLALgQABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-10,72,20);


(lib.roundeddoubleglowpeach = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#DE8E18").s().p("AlABkQgRAAgLgMQgLgMAAgQIAAh3QAAgRALgLQALgMARAAIKBAAQAQAAALAMQALALABARIAAB3QAAAQgMAMQgLALgQABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-10,72,20);


(lib.roundeddoubleglowgrey = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#737373").s().p("AlABkQgRAAgLgMQgLgMAAgQIAAh3QAAgRALgLQALgMARAAIKBAAQAQAAALAMQALALABARIAAB3QAAAQgMAMQgLALgQABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-10,72,20);


(lib.bag = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CFA87F").s().p("AlAJrQgGgBglgWQglgVgJgJQgRgUgHgwQgOhqAAidQAEiwgChXQgChXgQgpQABgEAHgCIACACIAkAbQApAWBXADQCOACEZgFIBjgBQAXgCATADIAGABQADAPAGAMQAHANAWAWQANAVAMgBQAOgBAEgUQAEgJAAgmQAmABAmgGIAQgFQAFA+gGBfQgICRAAARQgCApAABRQgBBIgHAxQgKBMgkAkQgrAqhxAAIl3AGQg8AAgwAFQgYACgSAAQgWAAgKgEgAE1hjIgBgFIAjAGIAAAUQAAANgDAFQgYgYgHgPgAFuh5IAAg1QAnABAeAEQAYACAFAOQACAMgKAIQgKAGgNACIgwAEIgTAAgAE4h/IgJgCQgBgMAAgPIgBgVIAoACIACA1IgfgFgAkIiFIgBgHIgBgmIHCAAIBdABIAAAIQACANAAAWIgYgBIkbACIiAABIhsgBgAk4iGIgNAAIABgsIAiAAQAAAYADAVIgZgBgAmiijQgPgNgGgCIBcAAIAAAqQgwgHgXgUgAEqjHIgJg+QgGgigEgQQgUg6gBgGQgJgdgFgIIgWgUQgKgIgKgVQgNgWgIgJIgUgRQgVgbgNgKQgNgMgggMIhBgUQgSgJgTgBIgdgBQgkgCgYAGQgbAFgeAWQhRA7gWBgIgHAmQgNBkgBBKIgiAAQACgWAAgcQABhMAOguQALgpAuhQQAZgvAUgVQAPgPAKgGQAJgFAagLQAzgRASgDIB8gBIAOABIAPALQAIAGATAHQAlAQAjAkQAWAWAkAwQAwBGALASQApBEAGA8IABA9g");
	this.shape.setTransform(-0.076,-0.154);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ak5KIQgOgDgXgOIgngXQgegTgLgMQgTgYgHgyQgPhpAAiYQADiugBhVQAAhCgJgmIgHgjQAAgXALgKQAFgDAFgCQACgJAGgDQAFgDAKAAIBdAAQAAiFAWhAQARgsAmhDQAhg4AYgXQAMgMAKgGQAIgFARgEIAmgPQAWgKAQgCICLgBQAOAAAHACQAHACANAJIAiARQA/AhBCBeIAhAtQA6BYAOA6QAIAkAAA4IAAAIIBQAEIAPADQAFABAHAHQAQASgCATQgBAOgGAKIACALQAFBzgQDmIgDCZQgCBRgPArQgWBGg1AdQglAVhXACInCAHQg3ADgKACQgaAEgOAAIgJAAgAnQieQAQApACBXQACBXgECwQAACdAOBqQAHAwARAUQAJAJAlAVQAlAWAGABQATAHA3gFQAwgFA8AAIF3gGQBxAAArgqQAkgkAKhMQAHgxABhIQAAhRACgpQAAgRAIiRQAGhfgFg+IgQAFQgmAGgmgBQAAAmgEAJQgEAUgOABQgMABgNgVQgWgWgHgNQgGgMgDgPIgGgBQgTgDgXACIhjABQkZAFiOgCQhXgDgpgWIgkgbIgCgCQgHACgBAEgAE0hlQAHAPAYAYQADgFAAgNIAAgUIgjgGIABAFgAFth7IATAAIAwgEQANgCAKgGQAKgIgCgMQgFgOgYgCQgegEgngBIAAA1gAEtieQAAAPABAMIAJACIAfAFIgCg1IgogCIABAVgAkKiOIABAHQBiACCKgCIEbgCIAYABQAAgWgCgNIAAgIIhdgBInCAAIABAmgAlGiIIANAAIAZABQgDgVAAgYIgiAAIgBAsgAmjilQAXAUAwAHIAAgqIhcAAQAGACAPANgAFUjIIgBg9QgGg8gphEQgLgSgwhGQgkgwgWgWQgjgkglgQQgTgHgIgGIgPgLIgOgBIh8ABQgSADgzARQgaALgJAFQgKAGgPAPQgUAVgZAvQguBQgLApQgOAugBBMQAAAcgCAWIAiAAQABhKANhkIAHgmQAWhgBRg7QAegWAbgFQAYgGAkACIAdABQATABASAJIBBAUQAgAMANAMQANAKAVAbIAUARQAIAJANAWQAKAVAKAIIAWAUQAFAIAJAdQABAGAUA6QAEAQAGAiIAJA+IArABgAh8o4QgUAIgWASQg2AtgWBFQgJAegFAxQgLBRAAA/IIdADIgHgsIgKg2QgTgxgGgaIgEgUIgZgXQgHgHgJgPIgPgXQgHgMgTgTIgrgoIgTgKQhKgcgbgFQgXgEgTAAQglAAgcANg");
	this.shape_1.setTransform(0.0169,0.0267);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-64.8,97.30000000000001,129.7);


(lib.roundeddoubleviolet = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgXAlIAAgKIAKgJIAJgIIAMgOQADgGABgGQgBgFgDgEQgEgDgGAAQgEAAgFACQgGABgFADIAAAAIAAgKIAKgDIAKgBQALAAAGAFQAGAGABAJIgBAIIgEAHIgEAEIgHAHIgJAKIgKAIIAlAAIAAAJg");
	this.shape.setTransform(12.15,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(2.425,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_2.setTransform(-3.025,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.925,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgLAmIAAguIgGAAIAAgHIAGAAIAAgCQAAgKAGgFQAEgFAIAAIAGAAIAEABIAAAIIAAAAIgEgBIgFAAQgFAAgDACQgBADgBAHIAAACIAQAAIAAAHIgQAAIAAAug");
	this.shape_4.setTransform(-13.15,0.175);

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

	// center
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#D196E0","#FFFFFF"],[0,1],0,10,0,-9.9).s().p("AlSBPQgLgKAAgPIAAhrQAAgPALgKQALgLAQAAIJvAAQAQAAALALQALAKAAAPIAABrQAAAPgLAKQgLALgQAAIpvAAIgBAAQgPAAgLgLg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E4C5ED","#FFFFFF"],[0,1],0,10,0,-9.9).s().p("AlSBPQgLgKAAgPIAAhrQAAgPALgKQALgLAQAAIJvAAQAQAAALALQALAKAAAPIAABrQAAAPgLAKQgLALgQAAIpvAAIgBAAQgPAAgLgLg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#B963CF","#D196E0"],[0,1],0,10,0,-9.9).s().p("AlSBPQgLgKAAgPIAAhrQAAgPALgKQALgLAQAAIJvAAQAQAAALALQALAKAAAPIAABrQAAAPgLAKQgLALgQAAIpvAAIgBAAQgPAAgLgLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(1));

	// center border
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C078D3").s().p("AlABkQgRAAgLgMQgLgMAAgQIAAh3QAAgRALgLQALgMARAAIKBAAQAQAAALAMQALALABARIAAB3QAAAQgMAMQgLALgQABg");

	this.instance = new lib.roundeddoubleglowviolet();
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A451C8").s().p("AlABkQgRAAgLgMQgLgMAAgQIAAh3QAAgRALgLQALgMARAAIKBAAQAQAAALAMQALALABARIAAB3QAAAQgMAMQgLALgQABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).wait(1));

	// outer
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#D196E0","#FFFFFF"],[0,1],0,12.2,0,-12.1).s().p("AlJBuQgRAAgMgOQgLgMAAgSIAAiDQAAgTALgMQAMgNARAAIKTAAQARAAALANQALAMABATIAACDQAAASgMAMQgLANgRABg");
	this.shape_15.setTransform(-0.0125,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#E4C5ED","#FFFFFF"],[0,1],0,12.2,0,-12.1).s().p("AlJBuQgRAAgMgOQgLgMAAgSIAAiDQAAgTALgMQAMgNARAAIKTAAQARAAALANQALAMABATIAACDQAAASgMAMQgLANgRABg");
	this.shape_16.setTransform(-0.0125,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D9B8E9").s().p("AlJBuQgRAAgMgOQgLgMAAgSIAAiDQAAgTALgMQAMgNARAAIKTAAQARAAALANQALAMABATIAACDQAAASgMAMQgLANgRABg");
	this.shape_17.setTransform(-0.0125,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).wait(1));

	// outer border
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#B14FCA","#DEB8E9"],[0,1],-0.4,12,0.1,-14.6).s().p("AluBqQgNgOAAgUIAAiPQAAgUANgOQAOgOAUAAIKZAAQAUAAANAOQANAOABAUIAACPQAAAUgOAOQgNAOgUAAIqZAAIAAAAQgUAAgOgOg");
	this.shape_18.setTransform(0.025,0);

	this.instance_1 = new lib.roundeddoublegradviolet();
	this.instance_1.setTransform(0.05,0);
	this.instance_1.shadow = new cjs.Shadow("#FF5A0B",0,0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.instance_1}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,-25,105,54);


(lib.roundeddoublepeach = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(10.725,0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(5.725,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgMAbIgIgDIAAgKIAAAAQAEADAGACQAFACAFAAQAFAAADgCQAEgCAAgEQAAgEgCgBIgHgDIgEgBIgGgBQgHgCgDgDQgDgEAAgFQAAgDABgDIAEgGIAHgDQAFgCAEAAIAKACIAIACIAAAKIAAAAIgJgEIgKgCQgEAAgDACQgEACAAAEQAAADACACQACACAFABIAFABIAFABQAGABAEADQADAEAAAGQAAAHgGAFQgGAFgKAAQgGAAgFgCg");
	this.shape_2.setTransform(0.225,1.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_3.setTransform(-5.425,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape_4.setTransform(-10.05,1.275);

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

	// center
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E57D7D").s().p("AlSBPQgLgKAAgPIAAhrQAAgPALgKQALgLAQAAIJvAAQAQAAALALQALAKAAAPIAABrQAAAPgLAKQgLALgQAAIpvAAIgBAAQgPAAgLgLg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F7DBB3","#FFFFFF"],[0,1],0,10,0,-9.9).s().p("AlSBPQgLgKAAgPIAAhrQAAgPALgKQALgLAQAAIJvAAQAQAAALALQALAKAAAPIAABrQAAAPgLAKQgLALgQAAIpvAAIgBAAQgPAAgLgLg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#E3931C","#EDB767"],[0,1],0,10,0,-9.9).s().p("AlSBPQgLgKAAgPIAAhrQAAgPALgKQALgLAQAAIJvAAQAQAAALALQALAKAAAPIAABrQAAAPgLAKQgLALgQAAIpvAAIgBAAQgPAAgLgLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(1));

	// center border
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E9A238").s().p("AlABkQgRAAgLgMQgLgMAAgQIAAh3QAAgRALgLQALgMARAAIKBAAQAQAAALAMQALALABARIAAB3QAAAQgMAMQgLALgQABg");

	this.instance = new lib.roundeddoubleglowpeach();
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE8517").s().p("AlABkQgRAAgLgMQgLgMAAgQIAAh3QAAgRALgLQALgMARAAIKBAAQAQAAALAMQALALABARIAAB3QAAAQgMAMQgLALgQABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).wait(1));

	// outer
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#F2C684","#FFFFFF"],[0,1],0,12.2,0,-12.1).s().p("AlJBuQgRAAgMgOQgLgMAAgSIAAiDQAAgTALgMQAMgNARAAIKTAAQARAAALANQALAMABATIAACDQAAASgMAMQgLANgRABg");
	this.shape_15.setTransform(-0.0125,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#F7DBB3","#FFFFFF"],[0,1],0,12.2,0,-12.1).s().p("AlJBuQgRAAgMgOQgLgMAAgSIAAiDQAAgTALgMQAMgNARAAIKTAAQARAAALANQALAMABATIAACDQAAASgMAMQgLANgRABg");
	this.shape_16.setTransform(-0.0125,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F0BE75").s().p("AlJBuQgRAAgMgOQgLgMAAgSIAAiDQAAgTALgMQAMgNARAAIKTAAQARAAALANQALAMABATIAACDQAAASgMAMQgLANgRABg");
	this.shape_17.setTransform(-0.0125,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).wait(1));

	// outer border
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#BF7A15","#F2C684"],[0,1],-0.4,12,0.1,-14.6).s().p("AluBqQgNgOAAgUIAAiPQAAgUANgOQAOgOAUAAIKZAAQAUAAANAOQANAOABAUIAACPQAAAUgOAOQgNAOgUAAIqZAAIAAAAQgUAAgOgOg");
	this.shape_18.setTransform(0.025,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#CE8517","#F2CD95"],[0,1],-0.4,12,0.1,-14.6).s().p("AluBqQgNgOAAgUIAAiPQAAgUANgOQAOgOAUAAIKZAAQAUAAANAOQANAOABAUIAACPQAAAUgOAOQgNAOgUAAIqZAAIAAAAQgUAAgOgOg");
	this.shape_19.setTransform(0.025,0);

	this.instance_1 = new lib.roundeddoublegradpeach();
	this.instance_1.setTransform(0.05,0);
	this.instance_1.shadow = new cjs.Shadow("#0F8EFF",0,0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.instance_1}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,-25,105,54);


(lib.roundeddoublegrey = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(12.225,0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(2.425,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_2.setTransform(-3.025,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.925,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgLAmIAAguIgGAAIAAgHIAGAAIAAgCQAAgKAGgFQAEgFAIAAIAGAAIAEABIAAAIIAAAAIgEgBIgFAAQgFAAgDACQgBADgBAHIAAACIAQAAIAAAHIgQAAIAAAug");
	this.shape_4.setTransform(-13.15,0.175);

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

	// center
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#8C8C8C","#FFFFFF"],[0,1],0,10,0,-9.9).s().p("AlSBPQgLgKAAgPIAAhrQAAgPALgKQALgLAQAAIJvAAQAQAAALALQALAKAAAPIAABrQAAAPgLAKQgLALgQAAIpvAAIgBAAQgPAAgLgLg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BFBFBF","#FFFFFF"],[0,1],0,10,0,-9.9).s().p("AlSBPQgLgKAAgPIAAhrQAAgPALgKQALgLAQAAIJvAAQAQAAALALQALAKAAAPIAABrQAAAPgLAKQgLALgQAAIpvAAIgBAAQgPAAgLgLg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#6A6A6A","#AAAAAA"],[0,1],0,10,0,-9.9).s().p("AlSBPQgLgKAAgPIAAhrQAAgPALgKQALgLAQAAIJvAAQAQAAALALQALAKAAAPIAABrQAAAPgLAKQgLALgQAAIpvAAIgBAAQgPAAgLgLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(1));

	// center border
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737373").s().p("AlABkQgRAAgLgMQgLgMAAgQIAAh3QAAgRALgLQALgMARAAIKBAAQAQAAALAMQALALABARIAAB3QAAAQgMAMQgLALgQABg");

	this.instance = new lib.roundeddoubleglowgrey();
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#595959").s().p("AlABkQgRAAgLgMQgLgMAAgQIAAh3QAAgRALgLQALgMARAAIKBAAQAQAAALAMQALALABARIAAB3QAAAQgMAMQgLALgQABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).wait(1));

	// outer
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#8C8C8C","#FFFFFF"],[0,1],0,12.2,0,-12.1).s().p("AlJBuQgRAAgMgOQgLgMAAgSIAAiDQAAgTALgMQAMgNARAAIKTAAQARAAALANQALAMABATIAACDQAAASgMAMQgLANgRABg");
	this.shape_15.setTransform(-0.0125,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#BFBFBF","#FFFFFF"],[0,1],0,12.2,0,-12.1).s().p("AlJBuQgRAAgMgOQgLgMAAgSIAAiDQAAgTALgMQAMgNARAAIKTAAQARAAALANQALAMABATIAACDQAAASgMAMQgLANgRABg");
	this.shape_16.setTransform(-0.0125,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BFBFBF").s().p("AlJBuQgRAAgMgOQgLgMAAgSIAAiDQAAgTALgMQAMgNARAAIKTAAQARAAALANQALAMABATIAACDQAAASgMAMQgLANgRABg");
	this.shape_17.setTransform(-0.0125,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).wait(1));

	// outer border
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#595959","#BFBFBF"],[0,1],-0.4,12,0.1,-14.6).s().p("AluBqQgNgOAAgUIAAiPQAAgUANgOQAOgOAUAAIKZAAQAUAAANAOQANAOABAUIAACPQAAAUgOAOQgNAOgUAAIqZAAIAAAAQgUAAgOgOg");
	this.shape_18.setTransform(0.025,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#919191","#E1E1E1"],[0,1],-0.4,12,0.1,-14.6).s().p("AluBqQgNgOAAgUIAAiPQAAgUANgOQAOgOAUAAIKZAAQAUAAANAOQANAOABAUIAACPQAAAUgOAOQgNAOgUAAIqZAAIAAAAQgUAAgOgOg");
	this.shape_19.setTransform(0.025,0);

	this.instance_1 = new lib.roundeddoublegradgrey();
	this.instance_1.setTransform(0.05,0);
	this.instance_1.shadow = new cjs.Shadow("#66FF00",0,0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.instance_1}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,-25,105,54);


// stage content:
(lib.MPHFinalAPena = function(mode,startPosition,loop,reversed) {
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
		this.btn1.addEventListener("click", Clickbtn1.bind(this));
		
		function Clickbtn1() {
			this.glasses.x = 445;
			this.glasses.y = 230;
			this.nose.x = 388;
			this.nose.y = 255;
			this.mouth2.x = 414;
			this.mouth2.y = 279;
			this.bag.x = 503;
			this.bag.y = 435;
		}
		
		this.btn2.addEventListener("click", Clickbtn2.bind(this));
		
		function Clickbtn2() {
			this.eyebrows.x = 433;
			this.eyebrows.y = 198;
			this.eyes.x = 427;
			this.eyes.y = 234;
			this.nose.x = 388;
			this.nose.y = 255;
			this.mouth3.x = 407;
			this.mouth3.y = 281;
			this.selfiestick.x = 367;
			this.selfiestick.y = 352;
		}
		
		this.reset.addEventListener("click", Clickreset.bind(this));
		
		function Clickreset() {
			this.eyebrows.x = 702;
			this.eyebrows.y = 87;
			this.eyebrows2.x = 699;
			this.eyebrows2.y = 121;
			this.nose.x = 700;
			this.nose.y = 148;
			this.mouth.x = 699;
			this.mouth.y = 178;
			this.mouth3.x = 709;
			this.mouth3.y = 218;
			this.mouth2.x = 715;
			this.mouth2.y = 254;
			this.glasses.x = 883;
			this.glasses.y = 105;
			this.glasses2.x = 874;
			this.glasses2.y = 161;
			this.eyes2.x = 864;
			this.eyes2.y = 226;
			this.eyes.x = 858;
			this.eyes.y = 283;
			this.ears.x = 730;
			this.ears.y = 395;
			this.bag.x = 868;
			this.bag.y = 394;
			this.hotdog.x = 779;
			this.hotdog.y = 462;
			this.phone.x = 887;
			this.phone.y = 511;
			this.selfiestick.x = 784;
			this.selfiestick.y = 536;
			
		}
		
		this.eyebrows2.on("pressmove", dragMe);
		this.eyebrows.on("pressmove", dragMe);
		this.nose.on("pressmove", dragMe);
		this.mouth.on("pressmove", dragMe);
		this.mouth2.on("pressmove", dragMe);
		this.mouth3.on("pressmove", dragMe);
		this.glasses.on("pressmove", dragMe);
		this.glasses2.on("pressmove", dragMe);
		this.eyes2.on("pressmove", dragMe);
		this.eyes.on("pressmove", dragMe);
		this.ears.on("pressmove", dragMe);
		this.bag.on("pressmove", dragMe);
		this.hotdog.on("pressmove", dragMe);
		this.phone.on("pressmove", dragMe);
		this.selfiestick.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons
	this.btn2 = new lib.roundeddoubleviolet();
	this.btn2.name = "btn2";
	this.btn2.setTransform(300.95,590.25);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.roundeddoubleviolet(), 3);

	this.btn1 = new lib.roundeddoublegrey();
	this.btn1.name = "btn1";
	this.btn1.setTransform(184.45,590.25);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.roundeddoublegrey(), 3);

	this.reset = new lib.roundeddoublepeach();
	this.reset.name = "reset";
	this.reset.setTransform(68,590.25);
	new cjs.ButtonHelper(this.reset, 0, 1, 2, false, new lib.roundeddoublepeach(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.reset},{t:this.btn1},{t:this.btn2}]}).wait(1));

	// Body Parts
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBHQgFgDAAgJIABgFIABAAIAGABIADACIABAAQAFAFAMAAQAMAAAJgFQAJgEAFgJQAEgKAAgIQAAgLgIgHQgJgIgdgIIgGgBIgHgHQgFgFgCgEIgBgFQAAgYAOgJQANgLAhAAIAJABIADgBQACACAAAEQAAAGgCAEQgBAEgCABQgBgDgCgBIgCABIgBABQgHgJgLABQgTgBgHAJQgGAHAAAKQAAANAWAGQAPADAKAFQAKAEAAABQAMAKAAAOQAAAUgMAQQgMAPgSADIgLAAQgGADgGAAQgIAAgFgEg");
	this.shape.setTransform(817.825,338);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAoBKIgJAAIgJAAQgFAAgWgFQgWgFgLgIQgLgHgFgNQgFgMAAgMQAAgPAGgQQAGgQAIgJQAIgJAPgKIAFgDQADgCADAAIAFAAQACgCAIgCIAOgBQAJAAALAHQALAHACAVIACAGIAAADIAAACIABAEQAAAEgCACIAAABQAAACgHAAIgCAAIgCABIgBACIgBgBIgEgCIgCgBIgHAAIgGAAIgHgBIgHABIgJABIgOgBQgMAAgKADIgDABQgBAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAIgBALIACAPQADALADAEIANAKQAIAGAJADQAIADAMAAIALgBIAHgBIAKAAIAFgDQAEgCAFgBQACAEAAAEQAAAHgFAFQgEAFgGAAgAgCg8QgBABgIAEIgHAGIgHAIIgGAHIgEAFIgBACQAAABAAAAQAAABAAAAQABAAAAAAQABABAAAAIACABIALAAIA0gCQAKAAAAgJQAAgKgEgHQgDgHgQgEIgFAAIgFAAIgKACg");
	this.shape_1.setTransform(805.525,338.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPBiIgCgEIABgJQABgHADgDIABgjIgBg2IAAgKIgCgGQgDgEAAgGQAAgDACgCIAJgEIAHgDIACgBQAEAAAAAMIgCAjQgDAaAAASIABATIABAMIADAJQAEAHAAAHIABABQAAAAgHADIgHADIgBAAIgEABIgDAAQgDAAgCgCgAgChTIgFgFQAAgEAEgDQAEgEAEAAIAIAFQAFACAAAEQAAADgEADQgEAEgEAAQgEAAgEgFg");
	this.shape_2.setTransform(794.875,335.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBKIAAgBQgBgEADgIQACgIAAgEIABgkQAAgogEggIgBgDQAAgGAGgDQAFgDAFAAQADAAADACIABACIABACIAAABIgDAKQgCAJAAAMIAAASIAAADQAAACAEABQAGgOAJgIQAJgIANgEIAQgEQADAEABACIAAACIgCAEIgEAHQAAADgDAEIgEAAQgIgGgEAAQgCAAgHAEQgGADgEAIQgGAJgCAEQgBAEgEAGIAAAFQgCAHAAADIAAAGIAAADQAAABgBAAQAAAAgBABQAAAAAAABQAAAAAAABIACANQACAJADAGIAAABQAAAHgGAAIgCACIgJABQgFAAgEgBg");
	this.shape_3.setTransform(786.4,337.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AguBAQgOgGgJgNQgKgNAAgOIABgLIABgJIADgJIAEgJIAAgEQAXgtA9AAQAJAAAIACQAHAAAGADQAHACAFAFQAGADAFAHIAKAOQADAFAAAPQAAAhgYAYQgXAZgiAAIgBAAIgIgBIgBAAQgBACgIAAQgLAAgPgGgAgdgvQgLABgKAQQgLAQAAARIACAPQABANAIAIQAIAIAMAFQALAGAHAAIADAAIACAAIAGAAQATAAAHgHIABAAIADABQARgPAIgQQAIgQAAgFIAAgDQAAgZgQgQQgQgPgaAAQgEAAgFACIgGABIgDADIgCAEIgDAAIgIgBQAAAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABg");
	this.shape_4.setTransform(770.825,338.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBHQgFgDAAgJIABgFIABAAIAGABIADACIABAAQAFAFAMAAQAMAAAJgFQAJgEAFgJQAEgKAAgIQAAgLgIgHQgJgIgdgIIgGgBIgHgHQgFgFgCgEIgBgFQAAgYAOgJQANgLAhAAIAJABIADgBQACACAAAEQAAAGgCAEQgBAEgCABQgBgDgCgBIgCABIgBABQgHgJgLABQgTgBgHAJQgGAHAAAKQAAANAWAGQAPADAKAFQAKAEAAABQAMAKAAAOQAAAUgMAQQgMAPgSADIgLAAQgGADgGAAQgIAAgFgEg");
	this.shape_5.setTransform(756.375,338);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBHQgFgDAAgJIABgFIABAAIAGABIADACIABAAQAFAFAMAAQAMAAAJgFQAJgEAFgJQAEgKAAgIQAAgLgIgHQgJgIgdgIIgGgBIgHgHQgFgFgCgEIgBgFQAAgYAOgJQANgLAhAAIAJABIADgBQACACAAAEQAAAGgCAEQgBAEgCABQgBgDgCgBIgCABIgBABQgHgJgLABQgTgBgHAJQgGAHAAAKQAAANAWAGQAPADAKAFQAKAEAAABQAMAKAAAOQAAAUgMAQQgMAPgSADIgLAAQgGADgGAAQgIAAgFgEg");
	this.shape_6.setTransform(745.775,338);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAoBKIgJAAIgJAAQgFAAgWgFQgWgFgLgIQgLgHgFgNQgFgMAAgMQAAgPAGgQQAGgQAIgJQAIgJAPgKIAFgDQADgCADAAIAFAAQACgCAIgCIAOgBQAJAAALAHQALAHACAVIACAGIAAADIAAACIABAEQAAAEgCACIAAABQAAACgHAAIgCAAIgCABIgBACIgBgBIgEgCIgCgBIgHAAIgGAAIgHgBIgHABIgJABIgOgBQgMAAgKADIgDABQgBAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAIgBALIACAPQADALADAEIANAKQAIAGAJADQAIADAMAAIALgBIAHgBIAKAAIAFgDQAEgCAFgBQACAEAAAEQAAAHgFAFQgEAFgGAAgAgCg8QgBABgIAEIgHAGIgHAIIgGAHIgEAFIgBACQAAABAAAAQAAABAAAAQABAAAAAAQABABAAAAIACABIALAAIA0gCQAKAAAAgJQAAgKgEgHQgDgHgQgEIgFAAIgFAAIgKACg");
	this.shape_7.setTransform(733.525,338.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCBGIgMgEIgNgEIgIgHIgJgKIgHgMQgCgGgBgHQgCgGABgHQAAgUAHgPQAIgPAQgMIAIgEIAHgEQADgCANgDQANgCAOAAIAFAAIAGAAQAHAAAAAGIAAADIAAADIAAAMIgEABQgEAAgFgDQgFgGgFABIgCAAIgIgBIgMgCQgEAAgEAEIgEgBIgBAAIgCABQgFAFgIADQgHACgFAJQgEAJgFAEIgBASQAAARAFAJQADAIAIAHIAKAJIAFAAQABAEAFABIAJABIAJACIAFgBIADAAQAIAAAEgBIAKgDQAGgBACgEQAGAFAAAHQAAAJgEAAIgCAAIgKACQgJACgJAAIgEAAIgLABQgGAAgDgCg");
	this.shape_8.setTransform(720.15,338.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgCBGIgMgEIgNgEIgIgHIgJgKIgHgMQgCgGgBgHQgCgGABgHQAAgUAHgPQAIgPAQgMIAIgEIAHgEQADgCANgDQANgCAOAAIAFAAIAGAAQAHAAAAAGIAAADIAAADIAAAMIgEABQgEAAgFgDQgGgGgEABIgCAAIgIgBIgMgCQgEAAgEAEIgEgBIgBAAIgCABQgFAFgIADQgHACgFAJQgEAJgFAEIgBASQAAARAFAJQAEAIAHAHIAKAJIAFAAQABAEAFABIAJABIAJACIAFgBIADAAQAIAAAEgBIAKgDQAFgBADgEQAGAFAAAHQAAAJgEAAIgCAAIgKACQgJACgJAAIgEAAIgLABQgGAAgDgCg");
	this.shape_9.setTransform(707,338.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAeBaIgEgCIgBAAIgBgHQAAgHADgHIADgEIAAgJQAAgIgBAAIgCAAIgEABIgBAAIgCAEQgCgBgSAHQgIADgIAAQgJAAgHgCQgHgCgFgFIgGgHQgCgDAAgHIABgDIAAgCQAAgPAXgPQAYgSATgDIAJgBQADgCACgCQACgCAAgJQAAgbgdgJIgCgBIgCgBIgZABQgFAHgHAAQgFAAAAgEIADgHQACgGAIAAQAKgFAYAAQAUAAALAQQALAQAAAdIAAACIAFACQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIgCADIgDAEIgBAJIgBAUIABAUQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIAAAGIACAOIACAIIgBAHIABAHQgLALgGAAIgCgBgAgmAYQAAAKAKAHQAJAHANAAIAMgDQAJgDAIgIIAAgCQAJgNAAgLQAAgGgDgGQgDgHgJAAQgRgBgLAKIgEAAQgXALAAAPg");
	this.shape_10.setTransform(692.675,339.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgwBgQgGgFAAgNIAAgGIABAAQAFAAADACIAFADIABgBQAHAHAQgBQAQABALgGQANgFAHgNQAFgNAAgLQAAgOgLgLQgLgJgngLQgGgCgCgBIgKgIQgHgGgCgHIgCgGQAAggASgNQATgOAsAAIALABIAFgBQACADAAAGQAAAHgCAGQgCAFgDABQgBgDgCgCIgBAAIgCABIgBABQgKgLgOAAQgbAAgIALQgIAKgBAMQABATAcAHQAVAFANAFQAOAGAAACQAPANAAAUQAAAZgPAVQgQAVgYAEIgQABQgHADgIAAQgLAAgGgEg");
	this.shape_11.setTransform(730.5,43.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA1BiIgMAAIgLAAQgIAAgdgGQgegHgOgKQgOgLgHgQQgHgRAAgPQAAgUAIgWQAIgWALgLQAKgMAVgNIAGgEQAEgEAEAAIAHABQADgDALgCQALgCAHAAQAMAAAPAJQAOAJADAdIACAIIABAEIgBADQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAGgDADIAAABQAAADgJAAIgDAAIgCACIgCABIgCgBIgFgCIgCgCIgJABIgJgBIgIgBIgJACIgNABIgTgBQgQAAgNADIgFACQgBAAAAAAQgBAAgBABQAAAAAAAAQgBABAAABQAAACgEACQgCAIAAAGQAAAFADAPQADAOAFAHIARANQALAHAMAEQALAEAPAAIAQgBIAIgBIANAAQACAAAGgEQAFgDAGgBQADAGAAAEQAAAKgGAHQgGAHgHAAgAgDhRQgCACgKAFIgKAIIgJAKIgHAKIgGAGIgBAEQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIADABIAPAAIBFgCQAOAAAAgMQAAgNgFgJQgFgKgVgFIgHAAIgHgBIgNADg");
	this.shape_12.setTransform(714.175,44.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEBeIgPgGIgRgGIgLgJQgHgGgFgHQgFgHgDgJQgEgHgBgJQgCgJAAgKQAAgbAKgUQAKgTAXgQIAJgGIAKgGIAVgFQARgDASAAIAIAAIAIgBQAKAAAAAJIgBAEIgBAEIABAPIgFABQgFAAgHgDQgIgHgFAAIgCAAIgMgCIgPgBQgFgBgIAGIgEgCIAAAAIgDACQgHAGgMAEQgIADgGAMQgGAMgGAGIgCAXQAAAYAGALQAFAKAKAJQAKAJADAFIAGAAQACAFAIAAIALACIAMACIAGAAIAFAAQAKgBAGgCIANgDQAHgBADgGQAJAGAAAKQAAANgHAAIgBAAIgNACQgMACgNABIgFAAIgOAAQgIAAgGgBg");
	this.shape_13.setTransform(696.375,44);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAnB4IgFgCIgBAAQgCgFAAgFQAAgJAFgKIADgEQABgBAAgLQAAgMgCAAIgCABIgFABIgCAAQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAABQgCAAgYAKQgLADgLAAQgLAAgKgCQgJgEgHgGIgIgJQgCgDAAgLIAAgEIAAgCQAAgUAggVQAfgWAagFIALgCQAEgCADgDQADgDAAgLQAAgkgmgNIgDgBIgDgBQgUgBgNACQgHAIgJAAQgGAAAAgEIADgIQACgJAMAAQAMgHAhAAQAbAAAPAVQAPAVAAAnIAAACQABADAEACQAEABAAACIAAAAIgCAFIgEAFIgCAMIAAAbIAAAcQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgBAIQAAAHADAMIACAKIgBAKIABAIQgPAPgHAAIgEgBgAgzAgQAAAOANAIQANAKARAAQAEAAALgEQANgEALgLIAAgDQAMgRAAgNQAAgJgEgIQgEgKgMAAQgXAAgPAMIgFAAQgfAQAAATg");
	this.shape_14.setTransform(677.325,45.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgzC+IgFgGQgEgEgCgBIgCABQgDgGAAgCIAEgFQADgEAAgJIgBgEIABgTIABgqQAAgVgCgYIgBgcIAAgIQABgCgGAAIgCAAIgDAAIgDAAQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgEAAIgDgBIAAgBQAAgDAFgCIAGgEIAEAAQADgCAAgDIABAAQAEgBABgCQADgDACgOIADgZQAFggANgWQALgWAJgMQAJgLAOgJQAOgKAFAAIACAAQAHgGAJgBIAFgDQAagDACgDQAEABADAFQADAEAAADQAAAFgHACIAAABQAAAHgJABQgDgEgHAAQgBAAAAAAQAAAAgBABQAAAAAAABQgBAAAAABIgHgBQgKAAAAAFIgEAAQgNAAgDAEIgJAGQgHAEgFAFQgDAEgIAKQgHALgHAQQgGARgCALIgEAZIgEARQAAASAKAAIAEgBQACADACAAIADAAIAEAAIAHAAIAPgCQALgDAIABIAEAAQAFAAAAACIACAIIgBAAQgCAAgGAGIgCgDQgCADgEAAIgMgBIgSgBIgGABIgGAAIgGgBIgEABIgCgBQAAAAgBABQAAAAAAAAQAAAAAAAAQgBABAAAAIgBgBQgDAAgBAtIAAAWQAAAVAEAaIADAdQAAACADADIAAAFQAAADADAGIACAIIAAABIgOAJQgEAGgGAAg");
	this.shape_15.setTransform(666.85,35.7);

	this.bag = new lib.bag();
	this.bag.name = "bag";
	this.bag.setTransform(868,394);
	new cjs.ButtonHelper(this.bag, 0, 1, 1);

	this.eyebrows2 = new lib.eyebrows2();
	this.eyebrows2.name = "eyebrows2";
	this.eyebrows2.setTransform(699,121.7,3.5918,3.5918,0,0,0,0,0.2);
	new cjs.ButtonHelper(this.eyebrows2, 0, 1, 1);

	this.mouth3 = new lib.mouth3();
	this.mouth3.name = "mouth3";
	this.mouth3.setTransform(709.2,218.2,1.9346,1.9346,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.mouth3, 0, 1, 1);

	this.hotdog = new lib.hotdog();
	this.hotdog.name = "hotdog";
	this.hotdog.setTransform(779,462.2,1,1,0,0,0,0,0.2);
	new cjs.ButtonHelper(this.hotdog, 0, 1, 1);

	this.eyes2 = new lib.eyes2();
	this.eyes2.name = "eyes2";
	this.eyes2.setTransform(864,226);

	this.glasses2 = new lib.glasses2();
	this.glasses2.name = "glasses2";
	this.glasses2.setTransform(874,161);

	this.ears = new lib.ears();
	this.ears.name = "ears";
	this.ears.setTransform(730,395);

	this.mouth2 = new lib.mouth2();
	this.mouth2.name = "mouth2";
	this.mouth2.setTransform(715,254);

	this.eyebrows = new lib.eyebrows();
	this.eyebrows.name = "eyebrows";
	this.eyebrows.setTransform(702,87);

	this.phone = new lib.phone();
	this.phone.name = "phone";
	this.phone.setTransform(887,511,1,1,-74.9998);

	this.eyes = new lib.eyes();
	this.eyes.name = "eyes";
	this.eyes.setTransform(858,283);

	this.nose = new lib.nose();
	this.nose.name = "nose";
	this.nose.setTransform(700,148);

	this.mouth = new lib.mouth();
	this.mouth.name = "mouth";
	this.mouth.setTransform(699,178);

	this.glasses = new lib.glasses();
	this.glasses.name = "glasses";
	this.glasses.setTransform(883,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.glasses},{t:this.mouth},{t:this.nose},{t:this.eyes},{t:this.phone},{t:this.eyebrows},{t:this.mouth2},{t:this.ears},{t:this.glasses2},{t:this.eyes2},{t:this.hotdog},{t:this.mouth3},{t:this.eyebrows2},{t:this.bag},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Character
	this.instance = new lib.panda();
	this.instance.setTransform(454.75,354.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgvBXIAAgBQAAgEADgKQADgJAAgFIABgqQAAgwgFglIgBgFQAAgHAHgEQAGgDAFAAQAEAAAEACIACACIAAADIAAACIgDAMQgDAJAAAPIAAAWIAAADQAAACAFACQAIgRAKgKQAJgJAQgEQAQgFAEAAQAEADAAAEIAAABIgDAHQgCADAAAFQgBADgFAEIgEAAQgJgGgFAAQgDAAgHAEQgHADgHALQgGAJgCAFQgBAFgFAIIAAAFQgEAJACAEIAAAGIAAAEQgBABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIADAQQABALAEAGIAAACQAAAIgHAAIgDAEIgKAAQgGAAgFgCg");
	this.shape_16.setTransform(912.65,43.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAjBqIgFgBIgBAAIgBgJQgBgIAFgJIADgDQABgCAAgKQAAgJgDgBIgCABIgDABIgCAAIgDAEIgXAIQgKADgKAAQgKAAgIgCQgJgDgFgFIgIgJQgBgDAAgIIAAgFIAAgCQAAgRAcgTQAbgUAYgEIAKgCQADgCADgCQACgCAAgLQAAgfgigMIgCgBIgDgBQgRAAgMABQgGAIgIAAQgGgBAAgDIACgIQADgHAKAAQALgHAdAAQAYAAANATQAOASAAAjIAAACQABADADABQAEABABACQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBABIgEAEIgBAKIAAAYIABAZQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIAAAHQAAAHACAKIABAJIAAAJIAAAIQgNANgFgBIgEgBgAgtAcQgBAMAMAJQAMAHAPAAQAEAAAJgDQAMgEAJgIIAAgEQALgPABgMQAAgHgEgIQgEgJgLABQgUgBgOALIgEAAQgbAOAAARg");
	this.shape_17.setTransform(896.15,44.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAvBXIgLABIgJAAQgHAAgagGQgbgGgMgJQgNgKgGgOQgGgPAAgOQAAgRAHgUQAHgTAKgLQAJgKASgMIAGgDQADgDAEAAIAGAAQADgCAJgCIAQgCQALAAANAIQANAIADAaIABAHIABADIgBADQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAFgDADIAAABQAAADgHAAIgDAAIgCABIgCABIgBgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgCgDIgIACIgIgBIgHgBIgIABIgMABIgQAAQgOAAgMACIgEABQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAQAAADgEABIgBAMIACASQADANAFAGIAPALQAJAHALAEQAJADAOAAIAOgBIAIgBIALAAQACAAAFgDQAFgDAFgBQACAFAAAEQAAAIgFAHQgFAGgHAAgAgDhHQgBABgJAFIgJAHIgIAJIgHAIIgEAGIgCADQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAIACABIANAAIA+gCQAMAAAAgLQAAgLgFgIQgEgJgTgEIgGgBIgGAAIgMADg");
	this.shape_18.setTransform(880.625,43.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AA1BYQgFAAgDgJQAAgJgSgmIgZg4QgEgQgGAAIgDABIgXA5IgRAyIABACIgBABIgBADIABAEIgCgBIgBgBQgKAJgIAAQgDAAgCgEIgCgPQgGg2gMggIgCgJIgCgLIgEgJIgEgKQgEgFAAgDQAAgNAcgBQADAGAAAFIgBAHIAAAHQgBANAJAfIAPA6IAihMQALgcgBgEIAAgFQAAgEAEgFQAEgGAFAAQADAAACACIAFALIABAGIACAKIAHAPIAKAWIAJAVIAKAWQAIANACACIAHAEQANgjAGgaQAHgbAAgOQAAgIgEgFQAEgDABgFQABgFABAAIACAAIAGgCIAIgDIACACQAEACAAAFQAAAHgDAGIgLAeQgJAXgGAYIgJAmQgCAMgDAJQgEAIgHAHIgFAAIgBACg");
	this.shape_19.setTransform(860.35,43.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAvBXIgLABIgJAAQgHAAgagGQgbgGgMgJQgNgKgGgOQgGgPAAgOQAAgRAHgUQAHgTAKgLQAJgKASgMIAGgDQADgDAEAAIAGAAQADgCAJgCIAQgCQALAAANAIQANAIADAaIABAHIABADIgBADQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAFgDADIAAABQAAADgHAAIgDAAIgCABIgCABIgBgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgCgDIgIACIgIgBIgHgBIgIABIgMABIgQAAQgOAAgMACIgEABQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAQAAADgEABIgBAMIACASQADANAFAGIAPALQAJAHALAEQAJADAOAAIAOgBIAIgBIALAAQACAAAFgDQAFgDAFgBQACAFAAAEQAAAIgFAHQgFAGgHAAgAgDhHQgBABgJAFIgJAHIgIAJIgHAIIgEAGIgCADQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAIACABIANAAIA+gCQAMAAAAgLQAAgLgFgIQgEgJgTgEIgGgBIgGAAIgMADg");
	this.shape_20.setTransform(839.575,43.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgqCLQgGgCgKAAIgBAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIABgBQAAgCANgRQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgCAJgNQAVgfANgeIgBgEIgDgBIgBAAQgEABgBgKIgCgLQgIgNgJgUIgRgmIgNgcQgEgKgGgGQgGgHAAgFIAAgBIgCAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIAFgIQAGgIAHgEIAIAEQADABAEAQIAEAOIAAAGIASAkIAFAMIAGAMIAFAKIAGAIIAEAHIADAFIADAEIAEADIAOggQASgoAFgIQAGgJACgIIAFgRIADgLQACgDADAAIACAAIAFgCIAKACQAHACAAADQAAAFgGAEQgCAAgRAfIgdA1QgNAYgCAQQgCANgGAEIgBAFQgDABgCADIgeBJQgGAOgBAJQAAAHgHAAg");
	this.shape_21.setTransform(822.025,48.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAvBXIgLABIgJAAQgHAAgagGQgbgGgMgJQgNgKgGgOQgGgPAAgOQAAgRAHgUQAHgTAKgLQAJgKASgMIAGgDQADgDAEAAIAGAAQADgCAJgCIAQgCQALAAANAIQANAIADAaIABAHIABADIgBADQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAFgDADIAAABQAAADgHAAIgDAAIgCABIgCABIgBgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgCgDIgIACIgIgBIgHgBIgIABIgMABIgQAAQgOAAgMACIgEABQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAQAAADgEABIgBAMIACASQADANAFAGIAPALQAJAHALAEQAJADAOAAIAOgBIAIgBIALAAQACAAAFgDQAFgDAFgBQACAFAAAEQAAAIgFAHQgFAGgHAAgAgDhHQgBABgJAFIgJAHIgIAJIgHAIIgEAGIgCADQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAIACABIANAAIA+gCQAMAAAAgLQAAgLgFgIQgEgJgTgEIgGgBIgGAAIgMADg");
	this.shape_22.setTransform(804.475,43.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// text 
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AguBSIAzhfIABgEQACgEAAgDQAAgKgKABQgEAAgDADQgEADAAAEQAAAFAFAEIgVAkQgNgJgHgLQgHgMAAgPQAAgXARgRQAQgQAXAAQAWAAARAQQAQAQAAAYQAAANgGAMIgTAjIAbAAIAAAvg");
	this.shape_23.setTransform(294.375,88.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AguBSIAzhfIABgEQACgEAAgDQAAgKgKABQgEAAgDADQgEADAAAEQAAAFAFAEIgVAkQgNgJgHgLQgHgMAAgPQAAgXARgRQAQgQAXAAQAWAAARAQQAQAQAAAYQAAANgGAMIgTAjIAbAAIAAAvg");
	this.shape_24.setTransform(280.725,88.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgpBCQgPgSAAgeIAAgiQAAggAPgRQAPgSAaAAQAbAAAPASQAPARAAAgIAAAiQAAAegPASQgPASgbAAQgaAAgPgSgAgLgaIAAA1QAAAOALAAQALAAAAgOIAAg1QAAgPgLAAQgLAAAAAPg");
	this.shape_25.setTransform(267.05,88.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AguBSIAzhfIABgEQACgEAAgDQAAgKgKABQgEAAgDADQgEADAAAEQAAAFAFAEIgVAkQgNgJgHgLQgHgMAAgPQAAgXARgRQAQgQAXAAQAWAAARAQQAQAQAAAYQAAANgGAMIgTAjIAbAAIAAAvg");
	this.shape_26.setTransform(253.425,88.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgjBSIAAgnQAJAFAHAAQAUAAAGgZQgKAHgLAAQgQAAgLgMQgKgMAAgSIAAhKIArAAIAAA/QAAALAIAAQAIAAAAgLIAAg/IAsAAIAABoQAAAdgQASQgUAWgbgBQgMAAgMgEg");
	this.shape_27.setTransform(234.125,93.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgqArQgSgRAAgaQAAgZASgRQARgSAZAAQAcAAAQARQARAQAAAcIAAA5IgsAAIAAg2QAAgIgEgGQgFgFgIAAQgGAAgFAFQgEAFAAAGQgBAHAFAFQAFAEAGAAQAGAAAEgDIAAAuIgKABQgZAAgRgSg");
	this.shape_28.setTransform(220.4,90.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAlBSIAAhnQAAgIgBgCQgCgDgDAAQgHAAAAAMIAABoIgvAAIAAhnIgBgKQgCgDgDAAQgHAAAAANIAABnIgvAAIAAhyQAAgWAMgNQAOgOAUAAQAZAAAMAXQAIgNAJgEQAKgGANAAQAWAAALAOQAMANgBAaIAABug");
	this.shape_29.setTransform(203.9,88.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAABKQgNgHgIgMQgKgPAAgZIAAhfIArAAIAAAtIATAAIAAAtIgTAAQAAAOAEAFQAEAFAMABIAAAuIgFAAQgPAAgMgHg");
	this.shape_30.setTransform(184.125,88.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgfA8IAAg/QAAgZAOgPQANgQAWAAIAOACIAAAvQgEgDgEAAQgNAAAAARIAAA4g");
	this.shape_31.setTransform(176.9,90.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAKBSIAAhjQAAgJgCgEQgCgEgGAAQgKAAAAARIAAATIANAAIAAAqIgNAAIAAAmIgvAAIAAhlQAAgdAQgRQAQgQAcAAQAcAAAOAPQANAPAAAfIAABmg");
	this.shape_32.setTransform(165.325,88.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgfA8IAAg/QAAgZANgPQAOgQAWAAIAOACIAAAvQgEgDgEAAQgNAAAAARIAAA4g");
	this.shape_33.setTransform(149,90.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgqArQgSgRAAgaQAAgYASgSQASgSAZAAQAZAAASASQARAQAAAaIgBAHIhBAAIgCgIQAAgGADgGIAVAAQgDgMgMAAQgHAAgFAGQgFAIAAAKQAAALAFAGQAFAIAHgBQAGAAAGgGIAZAeQgRAOgWAAQgZAAgRgSg");
	this.shape_34.setTransform(137.925,90.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAABKQgNgHgIgMQgKgPAAgZIAAhfIArAAIAAAtIATAAIAAAtIgTAAQAAAOAEAFQAEAFAMABIAAAuIgFAAQgPAAgMgHg");
	this.shape_35.setTransform(127.175,88.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnApQgMgOAAgZIAAg9IArAAIAABCQAAAJAIAAQAIAAAAgJIAAhCIAsAAIAABAQAAAXgPAQQgQAPgVAAQgYABgPgTg");
	this.shape_36.setTransform(116.7,91.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag8BRIAAhhQAAgaAOgRQAIgKANgFQAMgGANAAQAZAAASARQASASAAAaQAAAXgSATQgRARgZABIgLgBIAAgwQAGAFAEAAQAHAAAFgGQAFgFAAgGQAAgHgFgFQgFgFgHAAQgQAAAAAYIAABeg");
	this.shape_37.setTransform(103.425,92.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAkA8IAAg/QAAgHgCgCQgBgDgEAAQgHAAAAAMIAAA/IgrAAIAAg/QAAgHgBgCQgCgDgEAAQgHAAgBAMIAAA/IgrAAIAAhIQAAgTANgOQANgNATAAQAUgBAOARQASgRAQABQAXgBANARQAKALAAAZIAABCg");
	this.shape_38.setTransform(87,90.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgqArQgTgSABgZQgBgZATgRQARgSAaAAQAZAAASASQARASAAAYQABAZgTASQgRASgaAAQgZAAgRgSgAgLgMQgFAFAAAHQAAAIAFAFQAFAEAGAAQAHAAAFgEQAFgFAAgIQAAgHgFgFQgFgEgHAAQgGAAgFAEg");
	this.shape_39.setTransform(71,90.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag7A8QgYgYAAgjQAAgjAZgZQAYgYAjAAQAkAAAXAYQARAQAGAeIgzADQgIgagYAAQgOAAgKALQgKAKAAAQQAAAQAKAKQAJAKAPAAQAOAAAJgJQAJgJACgRIAyABQgFAngWAVQgWAVgjAAQgjAAgYgYg");
	this.shape_40.setTransform(55.275,88.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgrArQgRgRAAgaQAAgZARgRQASgSAZAAQAcAAARARQAQAQAAAcIAAA5IgsAAIAAg2QAAgIgFgGQgEgFgHAAQgHAAgEAFQgGAFAAAGQABAHAEAFQAEAEAHAAQAFAAAFgDIAAAuIgJABQgaAAgSgSg");
	this.shape_41.setTransform(221.25,61.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAIA8IAAhBQAAgKgIAAQgIAAAAAKIAABBIgrAAIAAhAQAAgXAPgQQAPgQAVAAQAZAAAPATQAMAOAAAZIAAA9g");
	this.shape_42.setTransform(208.05,61.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgqArQgSgRAAgaQAAgYASgSQASgSAZAAQAZAAASASQARAQAAAaIgBAHIhBAAIgCgIQAAgGADgGIAVAAQgDgMgMAAQgHAAgFAGQgFAIAAAKQAAALAFAGQAFAIAHgBQAGAAAGgGIAZAeQgRAOgWAAQgZAAgRgSg");
	this.shape_43.setTransform(194.975,61.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag6BSIAAhiQAAgQADgKQADgKAHgIQAJgKAMgFQANgGAMAAQAZAAAQAQQARARAAAYQAAAYgPAOQgNANgcAAIgGgBIAAgoQANgBAAgKQAAgLgKAAQgLAAAAAOIAABog");
	this.shape_44.setTransform(181.975,59.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAKBSIAAhjQAAgKgCgDQgCgEgGAAQgKAAAAARIAAATIANAAIAAAqIgNAAIAAAmIgvAAIAAhlQAAgdAQgRQAQgQAcAAQAcAAAOAPQANAPAAAeIAABng");
	this.shape_45.setTransform(167.675,59.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgTA2QgIgIAAgMQAAgMAIgIQAJgIAKAAQALAAAJAIQAIAIAAAMQAAALgIAIQgIAIgMAAQgLAAgIgHgAgTgMQgIgIAAgMQAAgMAIgIQAJgIAKAAQALAAAJAIQAIAJAAALQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_46.setTransform(149.975,61.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgjBSIAAgmQAJADAHAAQAUAAAGgYQgKAHgLAAQgQAAgLgMQgKgMAAgSIAAhKIArAAIAAA/QAAALAIAAQAIAAAAgMIAAg+IAsAAIAABoQAAAdgQASQgUAVgbAAQgMAAgMgEg");
	this.shape_47.setTransform(138.975,64.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgDBQIAAgpIAHAAQAHAAAEgCQACgCAAgFQAAgHgLAAIgJAAIAAgpQANgBgBgIQABgJgLAAIgJAAIAAB0IgwAAIAAifIA6AAQAzAAAAAoQAAAVgSANQAaAKAAAdQAAAWgPANQgIAGgIACQgJADgOAAg");
	this.shape_48.setTransform(126.4,59.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgpA7IAAguIACAAQAKAAAFgEQAEgFABgKQABgSADgHQACgIAHgGQAMgNAXAAIANAAIAAAuQgJAAgDAEQgEADgBAJQgDAigWAOQgMAHgXAAg");
	this.shape_49.setTransform(289.725,33.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgfA8IAAg/QAAgZANgPQAOgQAXAAIANACIAAAvQgFgDgEAAQgMAAABARIAAA4g");
	this.shape_50.setTransform(282.15,33.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgrArQgRgRAAgaQAAgZARgRQASgSAZAAQAcAAARARQAQAQAAAcIAAA5IgsAAIAAg2QAAgIgFgGQgEgFgHAAQgHAAgEAFQgGAFAAAGQABAHAEAFQAEAEAHAAQAFAAAFgDIAAAuIgJABQgaAAgSgSg");
	this.shape_51.setTransform(270.3,33.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgSAZAAQAZAAASARQARASAAAZIgBAHIhBAAIgCgIQAAgGADgFIAVAAQgDgNgMgBQgHAAgFAIQgFAGAAAMQAAAJAFAIQAFAGAHABQAGAAAGgHIAZAeQgRAOgWAAQgZAAgRgRg");
	this.shape_52.setTransform(256.975,33.35);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDBQIAAgpIAHAAQAIAAADgCQACgCAAgEQAAgIgLAAIgJAAIAAgqQAMABAAgJQABgJgLAAIgJAAIAAB0IgwAAIAAifIA6AAQAzAAAAApQAAAUgSANQAaAKAAAdQAAAWgQANQgHAGgIADQgJACgOAAg");
	this.shape_53.setTransform(244.05,31.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgSAZAAQAZAAASARQARASAAAZIgBAHIhBAAIgCgIQAAgGADgFIAVAAQgDgNgMgBQgHAAgFAIQgFAGAAAMQAAAJAFAIQAFAGAHABQAGAAAGgHIAZAeQgRAOgWAAQgZAAgRgRg");
	this.shape_54.setTransform(223.975,33.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgfA8IAAg/QAAgZAOgPQANgQAXAAIANACIAAAvQgEgDgFAAQgLAAgBARIAAA4g");
	this.shape_55.setTransform(214.05,33.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgrArQgRgRAAgaQAAgZARgRQATgSAYAAQAcAAAQARQARAQAAAcIAAA5IgsAAIAAg2QAAgIgEgGQgFgFgIAAQgFAAgFAFQgFAFgBAGQAAAHAFAFQAFAEAGAAQAFAAAFgDIAAAuIgKABQgZAAgSgSg");
	this.shape_56.setTransform(202.2,33.375);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgDBQIAAgpIAHAAQAIAAADgCQACgCAAgEQAAgIgLAAIgJAAIAAgqQAMABAAgJQAAgJgLAAIgJAAIAAB0IgvAAIAAifIA6AAQAzAAAAApQAAAUgSANQAaAKAAAdQAAAWgQANQgGAGgJADQgJACgOAAg");
	this.shape_57.setTransform(189.25,31.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgSAZAAQAZAAASARQARASAAAZIgBAHIhBAAIgCgIQAAgGADgFIAVAAQgDgNgMgBQgHAAgFAIQgFAGAAAMQAAAJAFAIQAFAGAHABQAGAAAGgHIAZAeQgRAOgWAAQgZAAgRgRg");
	this.shape_58.setTransform(169.175,33.35);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAHBQIAAg+QAAgIgBgCQgCgDgEABQgHgBAAALIAABAIgrAAIAAifIArAAIAAAxQAKgIAMAAQAQAAAKAMQAKAMAAAUIAABKg");
	this.shape_59.setTransform(156.025,31.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgXBQIAAhxIgkAAIAAguIB3AAIAAAuIgkAAIAABxg");
	this.shape_60.setTransform(143.425,31.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgrArQgRgRAAgaQAAgZARgRQATgSAYAAQAcAAAQARQARAQAAAcIAAA5IgsAAIAAg2QAAgIgEgGQgFgFgIAAQgFAAgFAFQgFAFgBAGQAAAHAFAFQAFAEAGAAQAFAAAFgDIAAAuIgKABQgZAAgSgSg");
	this.shape_61.setTransform(123.9,33.375);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgqBAQgSgSAAgaQAAgXASgSQARgSAZAAIALAAIAAAwQgGgFgFAAQgGAAgFAFQgFAFAAAHQAAAHAFAFQAGAFAGAAQAQAAAAgXIAAhfIAsAAIAABgQAAAbgOARQgIAKgMAFQgNAGgNAAQgZAAgSgRg");
	this.shape_62.setTransform(110,31.325);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAIA8IAAhBQAAgKgIAAQgIAAAAAKIAABBIgrAAIAAhAQAAgXAPgQQAPgQAVAAQAZAAAPATQAMAOAAAZIAAA9g");
	this.shape_63.setTransform(96.8,33.225);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgrArQgRgRAAgaQAAgZARgRQATgSAYAAQAcAAAQARQARAQAAAcIAAA5IgsAAIAAg2QAAgIgEgGQgFgFgIAAQgFAAgFAFQgFAFgBAGQAAAHAFAFQAFAEAGAAQAFAAAFgDIAAAuIgKABQgZAAgSgSg");
	this.shape_64.setTransform(82.95,33.375);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ag6BSIAAhjQAAgPADgKQADgKAHgJQAJgJAMgGQANgFAMAAQAZAAAQARQARAQAAAYQAAAXgPAOQgNAOgcAAIgGAAIAAgqQANABAAgLQAAgLgKABQgLgBAAAOIAABog");
	this.shape_65.setTransform(69.925,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// Frame
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_66.setTransform(480,320);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_67.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66}]}).wait(1));

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