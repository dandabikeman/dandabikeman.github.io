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


(lib.whiteshirt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAxnmIEdB1IAXAKIBzDHIitCDAgynwQgFADgFADQi4BghlA0Ih+C3IDMB6Ih+IRQFqhMHEBRIiAokQgbhogXh1AkIgkIAMg/IAhi1");
	this.shape.setTransform(0,0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AE4jZIABABAhdlhIAAACQABADACABQACACACADQAsA0Asg1IAAgMQgDAEgDAEQgmAogogoQgGgFgFgHIAAAGQgBABAAAAAgMBmQAEgJADgKIAAgEQgEAGgBADQgCAEAAAIQAAABAAABQAAAGACACQABADAFAAQAFAAANgjIABgBQAAACAAAIQAAAHAGAAQACAAABgBIABgBQAAAIAPAMQAQAMASAAQALAAAAgEAgdB9QACAEAAAEQAAAGgLAAQgHAAAAgDQAGgEAIgGQABAAABgBgAhXB7QAAAKACADQACADAHAAQAFAAAEgHQADgGAAgJQAAgMgFgBQgFABgCAAQADAAAJgFQALgHADgFQABABALARQAHALACAIQAKgIAHgPAD+ByQgCgLgDgLAAdCcIgKAAQgKAGhLARQgIACgRAHQgPAGgDACABzhIIkTAAIgnGfIgCARIAQAAIE4AAIANAAIgBgRgABpgzIj9AAIglGLIE4AAgAkpAsIgPA9QACABABAAAiXA/QACgFACgDQACgGAEAAIAGAFQAFAFALAAQAGAAAFgCQADgCADgDQAFgFAAgIQAAgJgFAAQgDAAgDAbQgDAPgCAYQgEAegHAWQgJAdgRANIgCAAIAAgOQACgQAIgIQAGgFAFAAIAHABIAEAAQAFAAALgHQAMgIAFgKQABgCABgCIAAgJIgBAAIgBALQAAABAAAB");
	this.shape_1.setTransform(4.45,-13.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmIHtIB9oRIjMh5IB+i4IEdiUIALgGIAAACIADAEIAFAFIAAABIAAAAQAWAZAUAAIAAAAIABAAQAWgBAWgaIAAAAIABgBIACABIEdB1IAWAJIABABIgXgKIAXAKIBzDIIitCCIgGgVICAIjQnEhRlpBMgACsDaIAMAAIAAgRIgYmfIkTAAIgnGfIAnmfIETAAIAYGfIgMABIgXmLIAXGLIk4AAIAlmLID8AAIj8AAIglGLIE4AAIAAAQIk4AAIAAgQIgOgBIgCARIAQAAgAgVAlQgIACgRAGIgTAJIATgJQARgGAIgCQBLgRAKgGIAKAAIgKAAQgKAGhLARgAhsAwIADAAQAQgNAKgdIADAAQAGAAALgHQAMgHAFgLQgFALgMAHQgLAHgGAAIgDAAQAHgVAEgfIAEgmIAHgFQAFgGAAgHQAAgJgFAAQgDAAgEAbQgEABgHAAQgKAAgGgEIgFgFQgEAAgDAGIgDAIIADgIQADgGAEAAIAFAFQAGAEAKAAQAHAAAEgBIgEAmQgEAfgHAVIgHgBQgFAAgGAEQgIAJgDAPIAAAPgAgBgFQAAADAHAAQAKAAAAgHIgBgIQAKgHAHgPQgHAPgKAHQgDgHgHgMIgKgSQgDAGgMAHQgJAFgCAAIAHgBQAEABAAALQAAAJgCAHQgEAHgFAAQgHAAgCgDQgCgEAAgKIACgDIAAgJIgBAAIgBALIAAABQAAAKACAEQACADAHAAQAFAAAEgHQACgHAAgJQAAgLgEgBIgHABQACAAAJgFQAMgHADgGIAKASQAHAMADAHIgCACIgOAKIAAAAgABVgdQAQAMASgBQAKABABgEQgBAEgKgBQgSABgQgMQgPgMAAgHIAAgBIgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgGAAgBgIIAAgJIgBABQgMAigGAAQgFAAgCgCQgBgDAAgFIAHgTIAAgEQgFAGgBADQgBADAAAJIAAACQAAAFABADQACACAFAAQAGAAAMgiIABgBIAAAJQABAIAGAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABgBIAAABQAAAHAPAMgAkLgkIADABIAMg/gAElgxQgbhpgYh1QAYB1AbBpgAj8hiIAhi1gAiMDagAC4DJgAhsAwIAAgPQADgPAIgJQAGgEAFAAIAHABQgKAdgQANgAgBgFIAOgKIACgCIABAIQAAAHgKAAQgHAAAAgDgAAPgRIAAAAgAAPgRIAAAAgAgqgTIAAAAgAgqgUIABgLIABAAIAAAJIgCADIAAgBgAAggnIAAAAgAAggpQAAgJABgDQABgDAFgGIAAAEIgHATIAAgCgAhAhUIAAAAgAg5hvQAFAAAAAJQAAAHgFAGIgHAFQAEgbADAAgAABnKQgUAAgWgZIAAAAIAAgBIADgFQAoAnAmgnIAHgIIAAALIgBABIAAAAQgWAagWABIgBAAIAAAAg");
	this.shape_2.setTransform(0,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whiteshirt, new cjs.Rectangle(-48.1,-50.9,96.30000000000001,101.9), null);


(lib.uniformtop = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAmtIAvADIAAAlIg1AqIgqglIgfDoQAjBCAzA3QADADADADIgcAWIgbHUQiggIidgpIBZmWIAdAAIAChkIAokPIALgGIApgXIAAABQANCEA3BpAAAmtIBKgmIAoAqIgQAJIgzAbABCh9QgXAwgZAtQgDADgCAEAAHgfQAFgBAGAAAEtAhIgagHIg0mEIgzgVQgvCKg7B4IgTkIABimgIEeB7IBZC5IisCNAAAmtIgwgfIhKAsIAKAFIBAAbIAAgxgAhymWIghARAi8lvIi8BiIhgCbIDKB8AgqHRIk9gxAgqHRQADAAADABQADAAADAAIAFAAQAHABAHAAQAyACAygCIEvgoIhbmK");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#70AFA4").s().p("AgaGsIgOgBIgFAAIgHAAIgFgBIAanUIAdgVIgdAVIgaHUIk+gxIBamUIAcAAIADhmIAnkPIALgGIAqgXIAAABQAMCEA4BpQAiBCA0A3IAGAHIAEgIQAZgtAXgvQA7h5AviKIAzAVIA0GFIAaAHIBbGJIkvAoIgyACIgxgCg");
	this.shape_1.setTransform(1.575,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0033").s().p("AhHBPIAejnIAqAmIA1gqIg1AqIgqgmIAAgwIAvADIAwAEIAAAlIATEHQgYAvgZAtIgKACQgzg3gihDg");
	this.shape_2.setTransform(-0.7,-23.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAEAEA").s().p("AlnGhIE+AyQiggIiegqgAESAbIg0mDIgygWQgvCKg7B5IgTkJIAygaIgyAaIAAgkIgvgEIBKgmIAnArIgQAJIEfB6IBZC5IisCOgAkOAMIjKh8IBhicIC7hiIgLAGIgnEPIgDBlgAAHgdIAKgCIgEAIIgGgGgAiTmEIAhgRIACgFIBAAbIhAgbIgKgEIBKgtIAwAfIgwgDIAAAwIgeDoQg4hpgNiEg");
	this.shape_3.setTransform(0,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uniformtop, new cjs.Rectangle(-48.2,-47.8,96.5,95.69999999999999), null);


(lib.uniformpants = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AARjDIgJAAIgnAAIAALyQizAUiygmQiAoHCApLQGQBaFehOQCLHzhJJlImbAAAAIIvIAAryAgfjDIiKAA");
	this.shape.setTransform(0.0098,0.0311);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#70AFA4").s().p("AmEIdQiAoHCApLQGQBaFehOQCLHzhJJlImbAAIgJAAIAAryIgnAAIiKAAICKAAIAALyQg+AHg+AAQh1AAh0gZgAARjDIgJAAg");
	this.shape_1.setTransform(0.0098,0.0311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uniformpants, new cjs.Rectangle(-46.3,-57.5,92.6,115.1), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABbgaQhbBshahsg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B35957").s().p("AhagaIC1AAQgtA1guAAQgsAAgug1g");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smile, new cjs.Rectangle(-10.1,-3.7,20.299999999999997,7.5), null);


(lib.shoes3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACchCIB2AAIglCKIjVAAQAKgRAKgNQAjgtAkgHQANgDANADQAvAIAxBKABthCIAGA4ACchCIgPA4AAsAqIgchsIBdAAIAvAAAiQhHIAHA3QgxAHgyBMIDVAAQgKgRgKgNQgigsgkgIQgMgDgMACAhshHIgkAAIiBAAIAlCKAhshHIgFA4AgrAlIAchsIhdAA");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("ADtBIQgxhKgvgIIAPg4IB2AAIglCKIAAAAgAAYBIQAKgRAKgNQAjgtAkgHIABAAIANgBIAAAAIAAAAIAMABIgMgBIAAAAIAAAAIgNABIgBAAIgGg4IAvAAIgPA4QAvAIAxBKgAjsBDQAyhMAxgHIAJgBIABAAIAAAAQAHABAHABIAAAAIAAAAQgHgBgHgBIAAAAIgBAAIgJABQgxAHgyBMIgliKICBAAIAHA3IgHg3IAkAAIBdAAIgcBsQgigsgkgIIAFg4IgFA4QAkAIAiAsQAKANAKARgAAQhCIBdAAIAGA4QgkAHgjAtgAhxgPIAAAAgABthCgAiQhHg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoes3, new cjs.Rectangle(-28.4,-8.1,56.9,16.299999999999997), null);


(lib.shoes2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAsAqIgchsIBdAAIAGA4QANgDANADQAvAIAxBKIjVAAQAKgRAKgNQAjgtAkgHABthCIAvAAIB2AAIglCKACchCIgPA4AiQhHIAHA3QgxAHgyBMIDVAAQgKgRgKgNIAchsIhdAAIgkAAIiBAAIAlCKAhshHIgFA4QgMgDgMACAgrAlQgigsgkgI");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ADtBIQgxhKgvgIIAPg4IgPA4IgMgBIAAAAIAAAAIgNABIgBAAIABAAIANgBIAAAAIAAAAIAMABQAvAIAxBKIjVAAQAKgRAKgNIgchsIBdAAIAGA4IgGg4IAvAAIB2AAIglCKIAAAAgAAsAqQAjgtAkgHQgkAHgjAtgAjsBDQAyhMAxgHQgxAHgyBMIgliKICBAAIAHA3IgHg3IAkAAIBdAAIgcBsQAKANAKARgAgrAlQgigsgkgIQAkAIAiAsgAhxgPIAFg4IgFA4IAAAAQgHgBgHgBIAAAAIgBAAIgJABIAJgBIABAAIAAAAQAHABAHABIAAAAgACNgKIAAAAg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoes2, new cjs.Rectangle(-28.4,-8.1,56.9,16.299999999999997), null);


(lib.shoes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAsAqIgchsIBdAAIAGA4QANgDANADQAvAIAxBKIjVAAQAKgRAKgNQAjgtAkgHABthCIAvAAIB2AAIglCKACchCIgPA4AiQhHIiBAAIAlCKIDVAAQgKgRgKgNIAchsIhdAAIgkAAIAHA3QgxAHgyBMAhxgPQgMgDgMACAhshHIgFA4AgrAlQgigsgkgI");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C17155").s().p("ADtBIQgxhKgvgIIAPg4IgPA4IgMgBIAAAAIAAAAIgNABIgBAAIgGg4IAvAAIB2AAIglCKIAAAAgAAYBIQAKgRAKgNIgchsIBdAAIAGA4QgkAHgjAtQAjgtAkgHIABAAIANgBIAAAAIAAAAIAMABQAvAIAxBKgAjsBDQAyhMAxgHIAJgBIABAAIAAAAQAHABAHABIAAAAQAkAIAiAsQAKANAKARgAjsBDIgliKICBAAIAHA3IgHg3IAkAAIBdAAIgcBsQgigsgkgIIAFg4IgFA4IAAAAQgHgBgHgBIAAAAIgBAAIgJABQgxAHgyBMgABzgKgACNgKIAAAAgAhxgPIAAAAg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoes, new cjs.Rectangle(-28.4,-8.1,56.9,16.299999999999997), null);


(lib.shockmouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADhgIQjrAmi+gmQgOgDgKAC");
	this.shape.setTransform(1.65,12.4557);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660000").s().p("Ai4BRQgOgDgLADIgCgGQgGABgHgCQgLgFgJgHQgOgMgKgSQgNgZgDghIIqhKIACAEQAMAYABAcQACAvgaA4IgBADQgEAIgGADIgHAEIgCADIAAABQh2AUhqAAQhqAAhfgUg");
	this.shape_1.setTransform(0.0571,3.4375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjhB9IgEgCQgPgHgLgMQgMgMgIgPQgQgegBgnQAAgVAFgNQAHgTAQgGQAIgEATAAIA0ACIA1AAIA5gFQAtgFAcgJQASgFAegNIAogRQAcgMAPgEQAWgFAZADQAkADAZAQIABAAQAXAPAOAaQAOAYADAeQAGAxgaA7IgDAHQgHANgIAGIgFADQgFABgBgCIgBgCIAAgBIACgDIAGgEQAGgDAEgIIABgDQAag4gCgvQgBgcgMgYIgCgEQgMgXgTgOQgIgGgKgFIgRgHQgWgGgVABQgZAAghAMIgHADQgqATgVAIQg4AXhLAGQgzAEhXgDQgSAAgHADQgPAGgGATQgEAOACATQADAiANAZQAKASAOAMQAJAHAMAFQAGACAGgBIADAGIAAAAQgCAEgGAAQgDAAgGgCg");
	this.shape_2.setTransform(0.0304,-0.7616);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkSAiQAGgTAPgHQAHgCASAAQBXACAygEQBMgEA4gXQAVgIApgTIAIgDQAggMAZgBQAWAAAWAGIARAHQAKAFAIAGQATAOAMAXIoqBIQgCgTAEgOg");
	this.shape_3.setTransform(-0.7333,-6.0019);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shockmouth, new cjs.Rectangle(-29.3,-13.5,58.7,28), null);


(lib.sharpbrows = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACcBoIH6i3IAABJgAhxBoIobjPIgJBjg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#936447").s().p("AKWhPIAABJIn6BugAqVgEIAJhjIIbDPg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sharpbrows, new cjs.Rectangle(-67.2,-11.3,134.4,22.700000000000003), null);


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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhuoVQEUHnApIFQgXBqg3hKQgWgcgZg3QgnBXhCijIi3q4IAvhbg");
	this.shape.setTransform(0.025,0.0048);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C79E76").s().p("ABpH3QAelqk9pIIAwhaQEUHnAqIFQgOA/gZAAQgRAAgXgfg");
	this.shape_1.setTransform(2.4,0.0048);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD5AB").s().p("AB4GGQgnBXhDiiIi2q5IAvhbQE9JIgdFqQgWgcgZg3g");
	this.shape_2.setTransform(-3.7748,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightarm, new cjs.Rectangle(-21.7,-54.3,43.5,108.69999999999999), null);


(lib.redhairmullet = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AC+sNQACgCABgDQA1hbCCAbQACAAADABQABAAACABQB8AZgFALQhLgXgvAEIgBAAQgCAAgBAAQgfADgUAPQgxAngYAUQCICbDPgBQAYAAAZACQAkAlAgAnQAaAeAXAgQBbB3A8CEQAJATAIATQADAHADAIAC6sXQg0iqiuAkQgGACgFACQAFABAEACQBxAlAqB3QADAIADAIQjQB3jwhoQgmgRgfALQhpBGhUBcQgcAfgcAfQiHBEhPBqQg+BTgbBqQgFARgDASQgHAjAIAiQABAEABAEIAMACAFboGQgBAAAAgBQgBAAAAgBIgBAAQhVhIBDA5QAJAIAJAHACSjAIAfBHAA9jaIAAA6IgNBfIACDIIABADAFboGQA2AuAqAjQAzApBzBRQCiCBAAE1QgejRhWhIQhXhJhoh2Qhph3AFgMQAFgLgWgbgAGHjoQAAAcBrBSQBqBSBAArQgQg5gZgXQgmgYgdgUQg3gfghgVQg5gkgNgcANggJQAAgFAAgEANggJIAAAAIAAAeQgDAKgEAJQgIAZgJAUQgYA2gjAXQgEACgCgDQgBgBAAgBIgBgBQgDgJABgaQgCAOgCAOQAAAEgBAEQgHAqgJAmAOfiqQAAANAPAmQAQAzAABOQAABggXAqQgcA0hhAAQASgRAThfQAAgBABAAQAFgbAEgUQAFggACgRIAAAAAOAjNIAIAAAKvC+IgBAAQAOgpARgXAEyAeQCXCHDKgcQAJgCAxgJIgeBAIAAA6QAUAjArgsQgVBWghBDQAVB9glB5IgBAAQgEANgEANQgSCJh2A5QgBAAAAAAQgKAFgLAEQgHADgHAEQgYAjgqAPQgCABgCABQgIADgIADQAHgHAGgHQA/hLAcheAMDB7QgKAOgKALQglArgbgBAEXgfQAJAhAPAeQgBAAABAAIAAABQAyBnByAyQATAJATAJQgVgDgUgFQhegWhWguQgGgEgGgDQABAFADAFIABABQABACABACQAMAUAGALQAAAAAAABQABACABABAA9igQAHDyDgBXQADABAEABAEuCxQgBgCgCgEQAEABADABAAwhBQgJBiALBkQAAAEABABAh9j2Qg3C6BgCqQACADAFACQAFAIAFAIQAwBLBIAHIgChLADULfQgQARgHAOQgHAIggAKAINLJQgFASgHAQQgrBph3AYQgIACgJACQgFACgFABIAKgEIALgKIBShPQgzAmg7ATQgZAJgaAJIjRhRIAAhDQHYgiCnkjAGUKqQhfA2gVAIQgTAEgeAKAKcIgQARAtgKAwIAAAAQgCANgCAOAJiIxQAAAIgGA0QgGA1gCADAIPNNIBBhlIAEAHQgBABAAABQgXA2gtAmIgcAdACyoyQhaFcIaE8QknkNiZmLgAuqiTQgMAxAIAyQABAGACAGQAPAuBDAVQAqAOBAADQhAgYgqgxQgOgQgLgTQgBAAAAgBQgDgFgDgGQAFAFAEAFQALALAMALQAzAuA+AeQAMAHANAFQgBB0AABYQgLhdAMhvApTmJIAAAWIAOAAArKhfQgBgTABgjQABgkAHgmQAHgkBdh4QAFgHAGgHArKhfIAZBEQgZgoAAgcgAg7o3Qi5A1jdCHQjeCGB8DbQACgGADgFQCJlIFqjKgAlLkrQgJANgHANQg3BfgFBbQgGBmBGAzQBFAzB+ALQgUgegNhCQgNg9BFjZAhskQIgJAAQgEANgEANABlo3QijE/gJBVQgJBVAIgmQAHgmAwESgAkIolQkMA4g/BkAgBohQk8EegiBtQgjBtCHBmQAGknD0k3gAqxgbIAgBhQgYgHgmgPAlhkVQigCLA5DiQg+AXg4gjQgKgGgKgFIg7gtQgWgZgOgWAq1HCIgIBBIgCARQAADODDBBQAGACAGACIAJAAIAMAAIgMgEIAAAAIgBAAIgIAEArQD8QABDcAKAqQADAJADAJAqMIkQACASADApQAJAhAnAGAnnMjIgBAAIgKgKIgVgWIgsgsAnnMnIAAgEAovLJQAWAbAZAZQAUATAVASQA5AvBFAgQANAGAMAFQAFACAEADIATgHQgNgBgLgFQgLgFgJgIQgFgEgEgFQgHgHgGgIAk5LbQATAaAPAMQAVATAiAOAk3OBIAmAEIDrh8IAAg3QpygRg4nFAn5KTQCxCyAcAP");
	this.shape.setTransform(0.0043,0.0032);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("AFUG4IAHAGIgDACgApSFFIALgKIAKAKIgIAEIgNgEgAJPCfIgBAAIAFABgADTk2IABABIgGABgADam9IADgCIgDACIAAAAg");
	this.shape_1.setTransform(8.55,47.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE1B1C").s().p("AhJCWQhDg4BVBHIgSgPgAgSiRIgBAAIgDAAIgBgTIAFABIADABQB7AagFAKQhLgXguAEg");
	this.shape_2.setTransform(40.01,-68.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AI9A/QhWhHhph3Qhph2AGgMQAFgMgXgaIBhBQQAyAqB0BRQCiCAAAE2QgfjShWhJgAiaBqQgIAmAKhVQAJhUCik/Ih2KvQgvkTgIAmgABglTQCaGJEmEPQoak9BalbgAmxBIQAihsE9kfQj0E3gHEoQiGhnAihtgAGgBkQhrhSABgbIAKgFQANAbA6AkQAhAVA3AfIBCArQAaAYAPA6QhAgshqhSgAojicQDeiHC4g1QlpDJiKFIIgFAKQh8jZDeiGg");
	this.shape_3.setTransform(8.153,-22.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("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");
	this.shape_4.setTransform(0.55,-0.3718);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redhairmullet, new cjs.Rectangle(-96.8,-94.2,193.6,188.4), null);


(lib.purpleshirt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACOmtQgUAIgTAGQgoANgmAFQgQACgOAAQgTABgSgCQgYgCgXgGQgXgGgWgJQgTgJgRgLACOmtIg0gXQgiANghAGQgSADgPAAQgOABgNgBACOmtIDDBRICWDDIjUCGADZkMIA6D5AkmgSIh0HdQGWg/GDA0IhsnTAglmuQgTgCgSgEQgfgHgegPIgjATIjIB0Ih0CuIDCB6IgCAJIA9j6");
	this.shape.setTransform(1.75,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AE5gwQgJAFgLAKQgKAKgEAAIgLABQgIABgBADQgEAIgJAFAGSBdQgIgPgPgHQgEgDgTgHQgNgEgPgIQgNgGgFgEQgJgGgQgHQgUgJgLABQgPABgOgKQgKgIgCgGAAFirQAAAMACAZAAriuQAAAEAEALQAEAKAAABAgcinQAAAVAFAOAA4izQABAAACACQAIAEASAVAhaixQAAACgBACQgDAJgNAXQAAABgBABAg3ioIABAAQAAALgCAJQgBAFgCAKAiBi1QgFADgFAGQgKALgCAEAmRAJQAKAGAEAGQADAFAFAQQABADAIAXQAHATADANQAHAgAKATQAGAKALAPIAGAG");
	this.shape_1.setTransform(3.525,-26.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0C5FF").s().p("AkmgSIA9j6Ig9D6IACgJIjCh6IB1iuIDHh0QASALASAJQAWAJAXAGIgBADIABgDQAXAGAYACIAFABIAWAAIAAAAIABAAIAEAAIAEAAIAfgCQAlgFAogNQAUgGAUgIIDDBRICWDDIjVCGIg6j5IA6D5IBtHTQmDg0mWA/gAlxjxQADAFAFAQIAJAaQAHATADANQAGAgALATQAGAKALAPIAGAGIgGgGQgLgPgGgKQgLgTgGggQgDgNgHgTIgJgaQgFgQgDgFQgFgGgKgFQAKAFAFAGgAEvjsQAQAHAIAGIASALQAQAHAMAFQAUAGAEADQAOAHAJAPQgJgPgOgHQgEgDgUgGQgMgFgQgHIgSgLQgIgGgQgHIgCgBIgBAAQgNgGgJgBIgEAAIAAAAIgBAAIAAAAIgBAAIgBAAIAAAAIgBAAIgBAAIAAAAQgNAAgLgIIgBgBIgBAAQgKgIgCgGQACAGAKAIIABAAIABABQALAIANAAIAAAAIABAAIABAAIAAAAIABAAIABAAIAAAAIABAAIAAAAIAEAAQAJABANAGIABAAIACABIAAAAgAE3koQgKAKgEABIgLABQgIAAgBADQgEAIgKAGQAKgGAEgIQABgDAIAAIALgBQAEgBAKgKQALgJAJgFQgJAFgLAJgAgPmLIgWAAIgFgBIAEgPQACgHAAgIIAAgEIAAAEQAAAIgCAHIgEAPQgYgCgXgGQAMgWAEgKQgEAKgMAWQgXgGgWgJIAMgPQAGgHAEgCQgEACgGAHIgMAPQgSgJgSgLIAkgTQAdAPAgAHQASAEASACIABAAQANABANgBQAPAAARgDQAigGAigNIA0AXQgUAIgUAGQgRgUgIgFIgEgBIAEABQAIAFARAUQgoANglAFIgDgkIADAkIgfACQgEgOAAgVQAAAVAEAOIgEAAIgEAAIgBAAIAAAAgABBmmIAEAMIgEgMQgFgLABgEQgBAEAFALgAgGmLIAAAAgAgqmMIAAAAgAAZmNIAAAAgABmmfIAAAAgAiqm3IAAAAg");
	this.shape_2.setTransform(1.75,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purpleshirt, new cjs.Rectangle(-47.9,-46.9,99.4,93.9), null);


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
	this.shape.graphics.f().s("#A67B50").ss(0.1,1,1).p("AgzhOIAACdQApgDAYgQQAjgVADgtQgChChlgGg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C79E76").s().p("AgzhOQBlAHACBBQgDAtgjAVQgYAQgpADg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose, new cjs.Rectangle(-6.1,-8.9,12.3,17.8), null);


(lib.mouthwithpiercing = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA7gYQALAPADAJQAGAPgUACABsgYIgxAAIimAAAAgAZIg5AA");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7A8F").s().p("AgZAYQg8gbgWgUICmAAQALAOADAJQgDgJgLgOIAxAAQgXAJgMAOQAGAPgUACQgNAAgOAHg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouthwithpiercing, new cjs.Rectangle(-11.8,-3.4,23.700000000000003,6.9), null);


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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABoocQj/HtgoIMQAdCVBXjIQAjBYA9ikICrrCg");
	this.shape.setTransform(0.025,0.0184);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD5AB").s().p("Ai/HdQAooMD/ntIBYC4IirLCQg9CkgjhYQgyBzgfAAQgWAAgNhAg");
	this.shape_1.setTransform(0.025,0.0184);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftarm, new cjs.Rectangle(-20.1,-55,40.3,110.1), null);


(lib.jumper = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFBAmQg+kZg2kZQAfhlgShZIgtgWQAKBogKBUIAAAmIBQHdIAQASIAYDnICKBmQAfDCgcDcQjBAMjugGIAAkyIgxAAIgyAAAB3lwIjlAAIAAD/IA8AvIBvAAIA+gmgAFBAmIA0A3QAoBsASB1AENgPIA0A1Ak0ADIBUomQgdhRAThZIAtgWQgIBqAWBQIAAArIhSHUIgTARIg7DoIhmBlAk0ADIhMBDQgmBzgPB7AguGwIAAEsIl7AAQgkjfAYjJAkUgZIggAcACtn+IlcAAACtokIlcgF");
	this.shape.setTransform(0.0031,0.0364);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9CC7FF").s().p("AADJwIAAkyIgxAAIgyAAIAyAAIAAErIl7AAQgkjfAYjJIBmhkIA7jpIATgQIBSnVIFcAAIBQHeIAQARIAYDoICKBlQAfDDgcDbQiEAJiaAAQhGAAhLgCgAhujkIA8AvIBvAAIA+gmIgEkHIjlAAgAguE+g");
	this.shape_1.setTransform(0.0031,11.4614);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#80A3D1").s().p("AEoGrIgYjoIA0A2IA0A3QAoBsASB1gAl8EZIBLhDIBUomQgchRAShZIAtgWQgHBqAVBQIAAArIhSHTIgSARIghAdIAhgdIg8DpIhlBlQAOh7AnhzgAEQDDIgQgSIhQncIAAgmQALhUgLhoIAuAWQASBZggBlQA2EZA+EZgAkQC5gAguCQIg9gvIAAj+IDlAAIAEEHIg+AmgACwkrIlcAAIAAgrIFcAFIAAAmgAislWIAAAAg");
	this.shape_2.setTransform(-0.3,-21.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumper, new cjs.Rectangle(-45.7,-74.9,91.5,149.9), null);


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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABigYQgJg8ADhEQDKg+EAA/QAGDLhIBPQgrAvhGADQiCALhGg9QgoglgUg9QgIgbgFgeQichThlBTQAGg4gGhHQj6g3jIA3QgCAcAAAaIiAhWAIqhcIC/hbIAKA3IjNByApfgaQgEghAAgmApfgaIiThrAisApQgkCNirACQjIADgcjVAifgYQgDAagKAnABvAhQimiPh1CX");
	this.shape.setTransform(0,0.0264);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADMgVQgDgCgCgBADAiYQAIBlAEAeQAEAeAJAaQASA8AlAkQA5A2BmgBQAVAAAUgDQBFgJArgpQA1gyANhfQAFgkgBgqQAAgcgDgfADZAjQgDgBgCgBAp+i3IgPAy");
	this.shape_1.setTransform(-10.0725,0.0259);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,153,255,0.318)").s().p("ApAgbQgEggAAgmQAAgaACgcQDIg3D6A3QAGBHgGA4QgDAagKAmQgkCOirACIgFAAQjEAAgbjTgADKCCQglgkgSg7QgJgbgEgeQgEgegIhkQDLg/EABAQAFDKhIBQQgrAohFAKQgUACgTAAQhmAAg7g1g");
	this.shape_2.setTransform(-3.0605,0.0513);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AieAvQBkhSCcBRQAFAgAIAbQimiPh1CXQALgnADgbgAIpgUIDAhbIAKA3IjNBxQAEgkgBgpgAryg+IAPgxICBBWQAAAlADAgg");
	this.shape_3.setTransform(0,-7.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,204,0,0.439)").s().p("Ai+ByQBFA+CCgLQgTACgVABIgEAAQhjAAg4g2gAB5BzQBIhQgFjKQADAfAAAcQABAqgFAkQgNBfg1AyQgqAuhGAEQBFgKArgog");
	this.shape_4.setTransform(36.2275,1.6509);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses2, new cjs.Rectangle(-76.5,-19.4,153,38.9), null);


(lib.glasses1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABigYQgJg8ADhEQDKg+EAA/QAGDLhIBPQgrAvhGADQiCALhGg9QgoglgUg9QgIgbgFgeQichThlBTQAGg4gGhHQj6g3jIA3QgCAcAAAaIiAhWAIqhcIC/hbIAKA3IjNByApfgaQgEghAAgmApfgaIiThrAisApQgkCNirACQjIADgcjVAifgYQgDAagKAnABvAhQimiPh1CX");
	this.shape.setTransform(0,0.0264);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADAiYQAIBlAEAeQgDgCgCgBADZAjQASA8AlAkQA5A2BmgBQAVAAAUgDQBFgJArgpQA1gyANhfQAFgkgBgqQAAgcgDgfADZAjQgDgBgCgBADMgVQAEAeAJAaAp+i3IgPAy");
	this.shape_1.setTransform(-10.0725,0.0259);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AieAvQBkhSCcBRQAFAgAIAbQimiPh1CXQALgnADgbgAIpgUIDAhbIAKA3IjNBxQAEgkgBgpgAryg+IAPgxICBBWQAAAlADAgg");
	this.shape_2.setTransform(0,-7.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,204,0,0.439)").s().p("ApBgbQgEggAAgmQgBgaACgcQDIg3D6A3QAHBHgGA4QgDAagKAmQgkCOisACIgFAAQjDAAgbjTgADICCQA7A1BnAAIAAAAIAAAAIAggCIAAAAIADAAIACAAIABAAQgTACgWABIgEAAQhjAAg4g2gAFqC3QhnAAg7g1QglgkgSg7QgIgbgEgeQgEgegIhkQDKg/EABAIAAAcQAAC0hCBKQBChKAAi0IAAgcQADAfABAcQAAAqgEAkQgNBfg1AyQgrAohGAKIgBAAIgCAAIgDAAIAAAAIggACIAAAAIAAAAgAGQC1IAAAAgAIBCDQgrAuhGAEQBGgKArgogAIBCDIAAAAgADICCIAAAAg");
	this.shape_3.setTransform(-2.9025,0.0513);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses1, new cjs.Rectangle(-76.5,-19.4,153,38.9), null);


(lib.foldedarms = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AETCIQDIgdgpkwIiBBdQgYB+hcAfIA6gGQAIAOAGAMQABABAAABQASAlgFAYQADAthBgDQglgGgcgKQghgLgXgPQAIgCAHgCACUCiIh3gJQAfgHAggKAh7A8IDeAAIAcgqQAwgNgsA2IA6gGAj1AJIggh5IijhiQABAIABAIQAVDpBZCNQCkBJDBhkAh7A8QhHhcgzApIALAxAkoBgQAXggAngGQAHgBAqADIA+AA");
	this.shape.setTransform(0.2431,1.3911);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C79E76").s().p("ABMimQApEwjHAdQCUhyAKjbg");
	this.shape_1.setTransform(36.0181,-1.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD5AB").s().p("AlFC0QhZiNgVjpIgBgQICiBiIAgB5IALAxQgnAGgWAgQAWggAngGIAAAAIAHAAIABAAIAGAAIAHAAIAFAAIAMABIAFABIABAAIAFAAIA+AAIDeAAIAdgqQAwgNgtA2IA7gGIA5gGIAPAaIABACQANAcAAAVIgBAMIABgMQAAgVgNgcIgBgCIgPgaIg5AGQBbgfAYh+ICBhdQgKDaiVBzQADAthBgDQglgGgcgKQghgLgXgPIAQgEIgQAEQAXAPAhALIh3gJQAggHAfgKQgfAKggAHQhvA6hmAAQhKAAhGgfgAi2A8IgFAAIgBAAIgFgBIgMgBIgFAAIgHAAIgGAAIgBAAIgHAAIAAAAIgLgxQA0gpBGBcgAjnA6g");
	this.shape_2.setTransform(-0.1,1.3911);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.foldedarms, new cjs.Rectangle(-44.8,-20.7,90.19999999999999,44.2), null);


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


(lib.bushybrows = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AD3A3Qg1gOghgaQghgYAFgXQAHgXAqgGQAqgGA1AOQA1APAhAaQAhAZgGAWQgGAXgqAGQgMABgMAAQghAAgmgKgAlVA+QgqgGgGgWQgGgXAhgZQAhgaA1gOQA1gOAqAFQAqAGAHAXQAFAXghAYQghAbg1AOQglAKggAAQgOAAgMgCg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bushybrows, new cjs.Rectangle(-39,-6.5,78.1,13.1), null);


(lib.brunettehair = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkmDLIgJgDIgBAAQgHAAgGgCQi8gehJguIgOgEAJRjKQghBJgxA8QhUBniBBCQgJADgJAFQgEABgEACQhcAqhyAZIgGAD");
	this.shape.setTransform(15.75,58.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("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");
	this.shape_1.setTransform(3.96,1.12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AktNMQhOgEgwgoQgQgNgSgVQgQgVgOgUQgCgDAAgDQAAgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAQADAAACAEIAFAHIAAABQAaAlAKALQAlAnA0AOQAXAGAcACQAWABAegCQAegBAlgFQg2gQg2gbIgFgEQgDgEAEgCQACgCAEADQAaAOAkAGQAWAEArACIACAAQAJAAAEgEIACgGIABgEIABgBIAAgBIAJADIgGAMQgFAHgDABQgEADgHgBIhEgGIBAAVQAEACAAACQAAACgFABQgtAHgWACQgYACgVAAIgXgBgAEDMuIAAgBIABgEIABgBIAEgEIACgCIAIgPQgDAGgNAIQgLAHgJACQgBABAAAAQAAABgBAAQAAAAgBABQgBAAAAAAQgGADgJgBIgPAAQgDgCABgDIACgGQAEgMADgGQAEgHABgEIABgHQACgEADABIAAAAQAEAAgBAIIgHARQgEAKgBAHIACAAIALgCQAQgCAQgLQAHgFAUgTIAEgDQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABIgBAEQgIARgJAOIgBABIgDAFIAgAAQAXgBAPgFQAagHAagaQAcgdAOglIgDgCIgDgDIAIgDIABAAIAAABIACgCQABAAAAAAQABABAAAAQABAAAAABQAAAAABABIARACQBIACBCgfQAxgZAZgiQAQgXANgsIADgEQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAQABADAAADQgEArgfAtQgTAbgrAtIgEADIgFAEIAKAAQBHgHAwgRQBHgZAogvQAXgbALggQALghgEghQgBgMgFgSIgIgfQgBgKACgEQADgEAKgCQBFgSA+geQglACgVgCQgggDgVgOQgXgPACgTIACgEQAEgCACAJQAEAVAZALQANAGAgACQAeACAPgBQAYgCASgJQAFgDADABIAEACQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAABQhbAthfAcQABANAGAXQAGAZABAMQAFAvgaAvQgXArgrAdQgmAagzAPQgpAMg4AHQgQACgGgEQgFgEAAgGQgBgEADgDIACgCIAEAGIABgCIACgCQAqglAeguQgoAsg6AWQg1AVg/AAQgLAAgIgCQgEAJgIAQQgSAegUATQgYAXgdAHQgQAFgYAAIgjAAIgCACIgEABQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAgADaMAIAFgDgAiIMWgAiRMTIAAAAQACgDAEgBQAEgBAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABgAnQLLIAAAAQgHAAgHgCIgKgCQgNgEgOgIQgMgHgWgPQgfAXg2gDQg8gIgeADIgSABQgLABgIgCQgHgCABgFQABgDAHAAQAyAEAYgVQATgSAAgZQAAgGADgCQgqgCgigRQgggQgVgaQgVgdgEghQgCgJAAgTIAAhTQAAgFADgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQABADAAADIAABPQAAAbADAOQAFATALARQAPAXAWAQQAWAQAaAHQAZAGAlgBQAagBAQgDQAYgEARgJQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQgBAAAAABQAAAAAAABQgCADgEABQgUAIgVAEQgbAEgZAAQACACAAAEQgBATgKARQgMASgRAIQAqAHAsAAQAigBAPgNQAIgHADAAQACAAAIAFQAkAbAdAFQALADAMgBIATgCIgEgBQgFgBAAgDQAAgCAGgBQAYgCAcgMQARgHAfgSQAfgSAJgHQAagSAVgZIAOgSQgmAQgjAJQggAJgaABIgOABQgXAAgUgGQgjgLgmgjQgEgEAAgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIADABIADAAQASgCAigMQAbgKANgGQAVgKANgOQAKgKAQgcIAEgGQgYASgtAAQgSAAgMgFQgKgEgNgKQgNgJgJgIQgPgPgIgVQgIgVABgVQgeAYgZAHIgDgFQAfgPAbgVIAbgXIAbgcQAxg3AYg2IADgHQgBgJAIgNQAZguAHgaQASg9gUhOQgIgdgOgmIgSgrIgJgWIgGgPQgNggAAgWQAAgTAIgQQAIgSAQgIQANgGASAAQAcAAAVAMQALAHANAOIgOgUIgEgGQgQgVgPgRQgagegcgVIgBAAIgEgBQgGgBgEgEIgCgFIgHgFQgRgKgSgHIAAgBIgBABQgBABgFgBIgigNQgggGgdAGQggAGgWAUQgIAGgGAIIgOAXIABABIABABIABADIgBABIgBABIgBABIgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgHA8gcA3QgJAVgNASQgWAggcAaQgrAog3AYIgDABQgfANggAHIgJACQgUADgUACIgGAAQAaAFAUABIAZABIAEAAQAdAAAXgJIAFgCIACAAIAEgDQAEgCACACQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAABIgFAEIgEACQgSAKgfAAQgTABgTgBQgXgBgYgDIgJgCQgegFgZgIQgWgHgUgJQgJgFADgFQAFgBAMAGQAOAIARAFQAfAJAngDQAUgCAVgFQBKgOA5gnQAzgjAjg0QAshAAKhNIgBgBQgCgCACgDIADgFIACgFQAOgbATgQQAOgNAQgIQAdgNAiABQghgPgXgSQgNgLgKgKQgagbAAgaIAAgHQACgOAJgSQAPgeAVgZQAFAFACAPQACANAHAYQAKAeAMAXQATAnAaATIAKAIIgGgKIgBAAIgEgIQgOgagBgYQAAgJABgIIABgIQADgLAFgLQAGgOALgPQAegmA4gVQATgGAKABQAGAAAAAEQAAACgDACQgOAKgLAOQgJANgGASIgFAUIAAACIgFAaIgGAuIAAABQgEAkAAAWQAAANADAJIgHADQgEgOAAgVQADg8ALg4QADgQAFgOQAMgkAUgPQg8AOgjArQgJALgIAOQgHANgDAMQgCAMABAMQABAWANAYQAKATAgAnIACACIAAABQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIgBABQAOAGAQAJIgBgBIAIgCIABABQACgFABgHIAAgQQgBgsAJggQALgpAbgZQAGgGAOgLIABAAIAVgOQAOgHAUgDQANgCAXAAQAcABAOADIAFACIABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQgBABgEAAQgRgDgiAAQggABgNAEQgOAEgTAOQgUAPgKAMQghAoAABLIAAAWIgBAHIgDAOIgCAFIABACIAPAKQAXARAVAWQAYAaAbAkIANAUIAMASQgDgJAAgJIAAgTIAAgHQAGgpAbgbQALgLANgHIAHgDQASgIARAEQAXAFARAWQALAPAJAcQAHAZAEAWIAAABIACAHIALApIABAAIADACQAAAAAAABQABAAgBABQAAAAAAABQAAAAgBABIgCAAQAVBLASAsQAnBmA+A4QAVATAXAOQA6AkBRAHQA/AGA9gNQAngJAjgPQARgIAQgJIACgBIgDgBIgagGQgWgGgVgJIgCgBIgBAAIAAgBQgQgHgOgIQgtgagdgmIgFgHQgDgEABgCQACgDAFAEQAFgCAHgBQAJgBAHAEQAIADANAOIAmAqIABABQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIAHALIAFAHIAEAFIABADQAoARAqAGQAWACAWAAQAigBATgLQAFgDACAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAACgDACQgsAVg9gJIgIAFQgOAJgSAIIgKAEIgNAGQhAAYhIACQhsAChQgxIgLgGQgSgMgQgPQg5gyglhVQgTgqgRg4IgNgvIAAgCIgCAAQhEADhCAOIAAACQAAADgDABQgDABgEgEQhMAQhIAfIgCABQAeBEALAsIABAGQARBGgOA3IgCALQgGARgJAVIgOAdQABACgCAFQgEAGgGAPIgDAIQgjBMhDA+IgZAXIABACQABACgBADQgBATAHATQAIASANAOIARAOQAPALAGADQAOAFAfAAIAQgBIASgFQATgGADgLQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAAABAAABIgBAFIgIAMQgLAUgIAKIgIAJQgPAPgVAKQgOAHgLAEIgkAMQgTAGgLACQATAUAaANQAeAOAgAAQAdABArgMIAtgOQAjgMANgQQADgDACgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgBACIgjArIgDADIgUAWQgMAMgTANQgpAbgsAVIgEACQgSALgRAGIgOgEIAOAEQgTAGgSAAIgHAAgAGPAcIgFgJQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgFgJgJgKIgRgRIgQgTQgLgMgMABIgKABIgBAAQAlAuA1AbgAmAk1QgIAGgFAMQgKAbAIAhIAIAYIAMAdIACgBIAAAAQA6gcBXgUIgFgFIgLgOIgQgYIgDgDQgZghgagIQgLgEgRAAIgDAAQgYAAgLAJgAi4mUQg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GkjvQgXgUgjgOQgXgJgqgMIhCgSIglgIIgdgIQgggMgegpQgLgPgDgLQgCgIABgUQABgEABgCQABgBAAgBQABAAAAAAQABgBAAAAQABAAABABIACAVQABASAEAHQACAFAJALQASAXAKAIQAMAJATAGQANAFAVAEIBFARQAkAJAmAOQAmAOAYARQAMAIAIAKQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgDAAgFgEgAIul6IgFgDQgbgZgtghQg9gugngUQg8gfg1gGIgSgCQgKgBgHgEQgEgCAAgCQAAgBAAAAQABgBAAAAQAAgBABAAQABAAABAAQADAAACABQAJADAMACIAUADQAyAHA2AcQAoAVA3AnQAyAlAgAdQADADgBADQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgBAAgABOpvQgbgBhkgNQhPgKgyAEQAHgIASgCQAcgDAmAFIBBALQDDAdC5g7QBYgcApgtIAAgFQABgCAFgEQAFgHAHgRIAJgXIAHgUQACgIAAgHIAAgEQACgDACgBQABAAAAAAQABABAAAAQABAAAAABQAAAAABABIABAFIABANQADAOAAAeQAAAXgCAMQgDANgKAUQgLAVgJALIgMANIgEAFIgBABQgEADgDgDQAAgFAHgHQAXgXAOghQAFgMABgHIABgaIAAggQABgFgCgDQgCACgBAFIgCAIIgEAKIgFAJIgFAOQgCAFgFAHIgIAMIgBAAQgBAFgGAGQgLAMgPALQgPAJgTAJQgbAOgqAMQiHAphwAAIgfgBg");
	this.shape_2.setTransform(-0.0129,0.0364);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.brunettehair, new cjs.Rectangle(-106.7,-84.4,213.4,168.9), null);


(lib.browneyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#0000FF").ss(0.1,1,1).p("AHFABIgLgBAnEABIAKgB");
	this.shape.setTransform(0,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AClgdQABACAAABIAKA4AikgdQAAACgBABIgKA4");
	this.shape_1.setTransform(-0.025,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996633").s().p("AEtBUQgbgFgbgTQgZgQgPgVQgcgmAGg5IABgNQAGAFAMAEQAnAKApgHQgDAOAAALQAAAKADAEQAEAHAHADQAJACAIAAQASgDAOgLQAOgNAEgRQATAJAUAAQATAAATgHQACAVgCATQgEAogYAcQgSAXgdALQgVAIgVAAQgKAAgLgCgAE8ABQgDABAAAGIAAAgQABAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQACAAACgCIABgFIAAgaIgBgFQAAgBAAAAQgBgBAAAAQgBgBAAAAQAAAAgBAAIgBAAgAGPgZQgDACADADIAEAEIAEAFIAFADQAEACABACIACAEQACACAEgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBIgCgEQgFgFgEgDIgEgDIgDgDQgCgEgFgCIgCAAIgCABgADlghQgCACgDAEIgGAFIgEAFIgEAFQgDADgBACQAAAEADABQACAAADgDIAKgKQAFgEAFgHQAEgEgCgDIgCgCIgFACgAlrBOQgdgLgSgXQgYgcgEgoQgCgTACgVQASAHAUAAQAUAAATgJQAEARAOANQAOALASADQAIAAAJgCQAHgDAEgHQADgEgBgKQABgLgDgOQApAHAngKQALgEAHgFIABANQAGA5gcAmQgPAVgZAQQgcATgbAFQgKACgKAAQgVAAgVgIgAk/AEIgBAFIAAAaIABAFQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIABgEIAAgcQAAgGgEgBIAAAAQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABgAmSgaQgFACgCAEIgDADIgEADQgFADgEAFIgCAEQAAACADABQAEABACgCIACgEQABgCAEgCIAEgDIAFgFIAEgEQADgDgDgCIgCgBIgCAAgAjrghQgCADADAEQAGAHAFAEIAKAKQADADACAAQADgBgBgEQAAgCgDgDIgEgFIgFgFIgFgFIgGgGIgEgCIgCACg");
	this.shape_2.setTransform(0,9.814);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F3F20").s().p("AEkBdQgCgDAAgGQgBgRAEgMIABgGQAAgFgEAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAgBABQgRAIglgEQgbgDgLgIIgFgCQAIglAWghQAcgrAngLQAGAAAAgDIAAgBIAHgFQAtAOAkAiQAkAiAPAtQAFAOADAOIgCAAQgUAGgVgBQgTAAgLgJQgFgFgDABQgDABgBAIQgBARgOALQgMAKgRABIgEAAQgKAAgDgFgAk0BiQgRgBgMgKQgOgLgCgRQAAgIgEgBQgDgBgEAFQgLAJgTAAQgVABgUgGIgCAAQADgOAFgOQAPgtAjgiQAkgiAugOIAHAFIAAABQABADAEAAQAoALAcArQAWAhAIAlIgFACQgLAIgbADQglAEgRgIQgBgBgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgEAAAAAFIABAGQAEAMgBARQAAAGgCADQgDAFgKAAIgEAAg");
	this.shape_3.setTransform(0,-3.1683);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AFPC5IAWgEQAagJAUgQQAVgTANgbQALgbABgeQACg2gjg2QgcgrgngXQgYgPgbgGQgBgBgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQABABAAAAIAEADIgHAFQAAAAAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgCgBgEABQgcAIgYAYQgTAWgPAeQgIATgFATQgFAQgCAQIgKg4IgBgCQgHgaABgxQADgBACgEQAcgrAzgWQAygXA1AGQA0AFAuAeQAtAdAeAsQAZAkALAnQALAqgKAmQgRBHheA/IgDADgAm9DGQhdg/gRhHQgKgmALgqQAKgnAagkQAegsAsgdQAwgeAygFQA2gGAyAXQAzAWAbArQADAEACABQACAxgHAaIgBACIgKA4QgCgQgFgQQgFgTgIgTQgPgegTgWQgYgYgcgIQgEgBgDABQAAAAgBAAQAAABAAAAQgBAAAAABQAAABAAAAIgHgFIAEgDQAAAAABgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAgBABQgcAGgXAPQgoAXgcArQgiA2ACA2QAAAeAMAbQANAbAVATQATAQAaAJIAXAEIhsAQIgDgDg");
	this.shape_4.setTransform(0,0.6368);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("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");
	this.shape_5.setTransform(0,0.0199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.browneyes, new cjs.Rectangle(-56.9,-21.2,113.9,43.099999999999994), null);


(lib.body = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALJBqQgCAIgDAJQgDARASACQAZACANACQANABAEAAQA6AAApgpQAngnACg4IAAgHQgBg3gogoQgpgog6AAIgIABIgKgBQgJAAgKABArvCDQgMACgOAAQg6AAgpgpQgpgpAAg5QAAg6ApgpQApgoA6AAIASABIACAAQAEAAADAB");
	this.shape.setTransform(-2.65,-91.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C69D75").ss(0.1,1,1).p("AiJpcQABABABAAAiSpVQADAEACAEQC2D3BDDYQCEGpk5Ey");
	this.shape_1.setTransform(42.216,-107.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("Ag/lvQqggBgKozQgCg2ACgyQAAgLABgKQAEhKAMhCQBeoFJYgMQCvgDCJAqQANADANAEQADACAEABQADABACABAE/6JQAEABAEACQEsBzBXFnQAZBmAIB5QAAADAAADIAAABALrvTIAAAAQAAADAAADQgDAagBAbIgVBoQAAABAAABIgDAIALKsVQhODij3BrQgDACgEABQgSAIgSAHQgFABgFACQgHACgHADQh+AqikARIAABCIBGAfIDdBgIhJC0ICpLYQAICGgHB/QgQEdhfDzIhmDPIggAAIhiAAIg4s0Ig9AAIg+AAADkhaIAWBcAAglzQgXACgWACQgZAAgZAAIAAA3IkLCOIBVCxAgoOKIAAMqIh9AAQjJmdgrk4QgXikAViIICmqsAjdhaIgYBh");
	this.shape_2.setTransform(-3.25,-0.0101);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD5AB").s().p("AAta+Ig4s0Ig9AAIg+AAIA+AAIAAMqIh+AAQjJmdgrk4QgXikAViIICnqsIhWixIEMiOIAAg3IBfA+IBFAfQFqS4kgMYgAkVAHIAXhhgAsKujIgBg1IABgzIgBAzIABA1IAACWQgMACgOAAQg6AAgpgpQgogpAAg6QAAg6AogpQApgoA6AAIASABIACAAIAGABIAAAVIABgVQAEhKAMhCQBfoFJYgMQCvgDCJAqIAZAHQAEACAEABIgEAJIAFAHQC3D3BDDZQCEGpk6EzIAIAIIgHADQgRAIgTAHIgKADIgNAFQh+AqikARIguAEIgxAAQqggBgLozgAOoqXIgKAAIASAAIgIAAgALer+IgmgEQgSgCADgRIAFgRQAZg4ADgtIAAg7IAAgBIAAgMIAAAAIAAhAIATgBIAKABIAIgBQA6AAApAoQAoAoABA4IAAAHQgCA4gnAnQgpApg6AAIgRgBgAOmuuIACAAIAIABg");
	this.shape_3.setTransform(0.025,-0.0101);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C79E76").s().p("AilamQEfsZlpy4IDeBhIhJC0ICnLYQAICGgHB/QgQEchdDzIhmDQgAhagWIgWhcgAmUmHIAxgBIAvgEIAABDgAAnnpQE6kyiEmqQhDjYi2j3IgFgHIAEgKIAFACIACABIAJAEQErBzBXFmQAZBmAHB6IAAAGIAAABIgEAtIAEg0IgEA0IgVBoIAAADIgDAHIgFASQhNDij4Bqg");
	this.shape_4.setTransform(30.925,2.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(-95.4,-173.6,189.9,347.2), null);


(lib.blueeyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AFKgJIAAAAQAAAJgHAHQgHAHgKAAQgKAAgHgHQgFgFgCgFQAAgDAAgDQAAgKAHgIQAHgHAKAAQAKAAAHAHQAHAIAAAKgAFjATQAAAHgFAEQgEAFgGAAQgHAAgEgFQgFgEAAgHQAAgGAFgEQAEgFAHAAQAGAAAEAFQAFAEAAAGgAlJgJIAAAAQAAAJAIAHQAHAHAJAAQAKAAAIgHQAEgFACgFQABgDAAgDQAAgJgFgGQgBgBgBgCQgCgCgCgBQgHgEgHAAQgHAAgFAEQgCABgCACQgCACgBABQgFAGAAAJgAliATQAAAHAFAEQAEAFAHAAQAGAAAEgFQAFgEAAgHQAAgGgFgEQgEgFgGAAQgHAAgEAFQgFAEAAAGg");
	this.shape.setTransform(-0.025,-0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADjgtQggAKgUAPQgDACgCACQgHAGgGAIQAGgBAHgCQAagFAZgEQABAOADAMQAQA4BOgMQBGgMALg2QADgOgCgSQBpgMBrgEADdgOQBagRBagLACigmIBBgHQDUgaCuANADEhPIBBgSADQBiIAGAAIDkAAQB/g+AsheAjPBiIgHAAIjjAAQhigwgxhCQgCgDgCgDQgMgRgIgTAjdgOQAAAOgDAMQgQA4hPgMQhGgMgKg2QgBgDAAgDQAAgDgBgDQAAgJABgLQhqgMhqgEAjdgOQgEgBgEgBQgRgDgQgDQhFgMhFgIAjigtQAeAJATAOQAEADADADQAIAGAGAIQgHgBgGgCQgagFgagEAjEhPIhAgSAihgmIhBgHQjUgaiuAN");
	this.shape_1.setTransform(0,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADQBMQgBgVgmhRIA0gKQABAPADAMQAQA3BOgMQBGgMALg1QACgOgCgSQBqgNBrgDQgsBdh/A+IjkAAIgGAAIAGAAQAAABAAABQgBABAAAAQAAABAAAAQgBAAAAAAQgCAAgCgEgAjVBMIjkAAQhhgwgyhCIgDgFQgMgSgJgSQBrADBpANIAAAUIAAAFIABAHQALA1BFAMQBPAMAQg3QADgMABgPIAzAKQglBRgBAVQgCAEgCAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBgAjPBMIgGAAgAFIARQgEgFAAgGQAAgGAEgEQAFgEAGAAQAHAAAEAEQAEAEABAGQgBAGgEAFQgEAEgHAAQgGAAgFgEgAldARQgFgFAAgGQAAgGAFgEQAEgEAHAAQAFAAAFAEQAFAEgBAGQABAGgFAFQgFAEgFAAQgHAAgEgEg");
	this.shape_2.setTransform(0,0.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("ADhgLIA5gHQACAGAFAEQAHAHAJAAQALAAAGgHQAIgHAAgJIBGgJQgLA1hGAMQgOACgMAAQg3AAgNgtgAFIgGQgEAFAAAFQAAAGAEAFQAFAEAGAAQAHAAAEgEQAEgFABgGQgBgFgEgFQgEgEgHAAQgGAAgFAEgAk/AgQhFgMgLg1IBGAJQAAAJAIAHQAGAHAKAAQAKAAAHgHQAFgEABgGIA6AHQgNAtg3AAQgMAAgPgCgAldgGQgFAFAAAFQAAAGAFAFQAEAEAHAAQAFAAAFgEQAFgFgBgGQABgFgFgFQgFgEgFAAQgHAAgEAEg");
	this.shape_3.setTransform(0,1.0632);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00476B").s().p("ADdABQBagQBagLQACASgDANIhGAJIAAgBQAAgJgHgHQgHgHgKAAQgKAAgHAHQgHAHAAAJIAAAHIg5AHQgDgMgBgOgAkZAUIABgHQAAgIgFgFIgCgDIgEgDQgHgEgHAAQgHAAgFAEIgEADIgDADQgFAFAAAIIAAABIhFgJIgBgFIgBgGIAAgUQBGAIBFAMIAgAGIAJABQgBAOgDAMg");
	this.shape_4.setTransform(-0.0183,-2.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AHfBcIgBgBIAAgDIABgBIACgBIAAAAIAFAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBACQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQgEAAgBgCgAEhgPQgFgEgCgGIAAgHQgBgKAIgHQAHgHAJAAQALAAAGAHQAIAHAAAKIAAABQAAAJgIAHQgGAHgLAAQgJAAgHgHgAlBgPQgIgHAAgJIAAgBQAAgIAFgHIADgCIADgDQAGgEAHAAQAHAAAGAEIAEADIADACQAEAHAAAIIgBAHQgBAGgFAEQgHAHgKAAQgKAAgGgHgACqgvIAFgDQAUgQAggKQDUgZCuANQhrADhqANQhaAKhZARIg0AKIgMADQAFgIAIgHgAipgjIgzgKIgJgCIghgFQhEgMhGgIQhpgNhrgDQCugNDUAZQAeAKATAOIAIAFQAHAHAGAIIgNgDg");
	this.shape_5.setTransform(0,1.7805);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueeyes, new cjs.Rectangle(-62.3,-12.1,124.6,23.299999999999997), null);


(lib.blondehair = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AsWHmQADgkBDhNIgEBDQAsiLAaAAIgahDIAYAAIAAgfIAaAAQAChNAqhHIgXEdQAkhyAdiRQAAgBAAAAQAAgEABgDQABgDAAgDQABgEABgDQAOhJANhTQAHBfABBEQAAADAAADQAAAEAAADQACBigKAnQA5hsASj7IA5g8IAAA5IBUhKIAmAmIBag8IBAAIIAcAAIBKgvIAAAyIAphCQAAAFAAAFIAAAAQgCAeAAAcQgJE/A1BeQgtiMAtlKIEGH3Ih6l8IgkhwAkCm5QBggYBegKQADAAACAAQCmgUCfANQDeBGBKBIICfApIhgAhIBnBdIAlAhIgvgVIgxgXALwgTIgggkALKihIA2CIIARAoIghgiQAzBcAQBQIBGBHIgwgUIAbCJIgigeIAfCdIg4g4IAABuIhMi2QhhhDgaAcAL2FLQAAAZgZgQAItEdIA+BgIg4joADziqQDUFGBQFQIAWjPIhCjMANJDMIgwgTANCE3Ighg/AMzCZIhGhFAmXnKQCEg3B7APIBRAAQgrACgkAIQhAANgsAiIgnAJAmXnKIgHASAsWFiIhABXIArh5IhNA5IB7jNIhmBSIBTjFIhOAqIBeiJQgqAhgcgNIBVh+IhMAjQBxjQCxhFIhzgxQA1gHBEAKQAAAAAAABQABAAABAAQAbAEAeAHQAMggAogcQAegVAugUIg9A/AsWFiIAACEIAAAHAsWFiIAOgT");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("ALdFKIABABIACABIAAAAQAHAEAFAAIABAAIAAAAQAJAAAAgPQAAAPgJAAIAAAAIgBAAQgFAAgHgEIAAAAIgCgBIgBgBQhhhCgaAcIgviYIA4DnIg+hfIhCjMIBCDMIgWDOQhQlQjUlFIgXAHIgkhwIAkBwIB6F8IkGn2QgtFJAtCMQg1heAJk/IACg5IAAgBIAAgKIgpBCIAAgxIhKAvIgcAAIhAgJIhaA8IgmglIhUBKIAAg5Ig5A8QgSD7g5BrQAKgmgChiIAAgHIAAgHQgBhEgHheQgNBSgOBKIgCAGIgBAGIgBAHIAAACQgdCRgkByIAXkeQgqBHgCBNIgaAAIAAAfIgYAAIAaBDQgaAAgsCMIAEhDQhDBMgDAkIAAiEIhABYIArh5IhNA5IB7jNIhmBSIBTjFIhOAqIBeiJQgqAggcgMIBVh/IhMAjQBxjPCxhFIhzgxQA1gIBEALIAAAAIACAAQAbAFAeAHQAMggAogcIAPAWIgHARIAHgRQCEg3B7AOIACAKQhAAOgsAhQBggXBegKIAFgBQCmgUCfANQDeBHBKBIICfApIhgAhIBnBcIgKAMIgxgWIAxAWIA2CIIgQAGIgggkIAgAkQAzBcAQBRIBGBGIgwgTIAbCJIgigfIAfCeIg4g4IAABtgAsWFYIAOgTgANCEtIghg+gANJDDIgwgUgAMzCQIhGhGgAkpm5IAngKg");
	this.shape_1.setTransform(0.025,0.9987);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blondehair, new cjs.Rectangle(-89.9,-53.1,179.9,106.30000000000001), null);


(lib.blackpants = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGklOQgShdgXhhQh4gNhygFQAEAtAFApQAAAJACAJQADAaADAYQAAABABABQAGAvAJAqQATBnAcA9IAAABQAAAAAAABQANAbAOATIAAABQAAAAABABQASAYAVALQAEAAADAAQABAAABAAQBfgFAahWIAAgBQAMgmgCg3QgBgVgCgXQgBgEAAgDQgBgLgCgLQAwEJAADlIgrA+IA7AAQgWCJg3CeQiyhxjbBoIAAsEIgoAAIgeAAIhVAAACgnJQACAEAJAMQAFAHAAANQAAAMgHAQIAAAEQARAKAGAJQAGAKAAATQAAAYgQATQAdAQAAAgQAAAPgDAHQgEAHAAAHQAAAJAPAEQAOAMgEAuIAAAJQACAAACgCQADgCACAAQAIAAAGANQAGALAAAMIgBANIAAACIgBAAQAAgBABgBQACgDAEAAQADgBAEAAQAMAAAIAIQAKAJgDATIACAAQgCgIAGgHQAFgIAHgBQAKgCAKgEQAIgDAMAAQAOAAADAFQACAAABABIAAgPQgCgIAAgBQAAgQAOgHQAHgDAcgGIAAgIQgEgFgDgMQgEgPAAgNQAAgKAHgNQAHgNAAgEQAAgKgEgIQgDgHgBgIQAAgBAAgBQAAgEADgFQAEgFAEgCAGklOIAAABQAAABABABIAEAZACRoeQAQA2AWAoQBQCTCdghAgGojQgXAAgWAAQhdABhaAGQgeDnjFAxAgGojIgTE3IAAMQQjQh1jgB1Qg9msA5l8AjqocQhXAFhUALQgjCBgVCHAgzojIgEE3ACRoeQhNgEhKgB");
	this.shape.setTransform(0.005,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#777777").s().p("AALDuIgIAJQgUgLgSgYIgBgBIAAgBQgOgSgMgcIgBgBIAAAAQgbg+gUhmQgIgpgHgwIAAgCIgHgyIgCgRIgJhXQARA2AWApIgNAGQAGAHAAAOQAAAMgIAPIAAAEQARALAGAIQAGAKAAAUQAAAXgQATQAdAPAAAgQAAAPgDAHQgDAHAAAIQAAAIAPAEQAOAMgFAuIAAAJIAFgCQACgCADAAQAIAAAGANQAFAMAAALIAAANQABgCAFgBIAGgBQAMABAHAHQALAJgEATIADAAQgCgIAGgHQAFgHAGgCQALgCAKgEQAHgDAMAAQAOAAADAFIADABIAAgPIgCgJQAAgQAOgGQAIgEAbgFIAAgJQgDgFgEgMQgEgPAAgNQAAgKAIgNQAHgNAAgEQAAgKgEgHQgEgIAAgHIAAgDQAAgEACgEQAEgGAFgCIAAAIIAEAsQABA2gLAnIAAAAQgbBWhfAFgAggDQIABAAIABgCIgCACgAh1iRIgLgPIALAPg");
	this.shape_1.setTransform(28.8837,-29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnJIjQg9mrA5l8QDFgxAejnQBagGBdAAIgEE2IhVAAIBVAAIAeAAIAAMPQjQh0jgB0gAAPIYIAAsEIgoAAIATk2QBKAABNAEIAJBXIACARIAGAyIABACQAGAwAJApQATBnAcA+IAAAAIAAABQANAcAOASIAAABIABABQASAYAVALIAHAAIACAAQBfgFAahWIAAAAQAMgngCg2IgDgsIgBgIIgDgWQAwEKAADjIgrA/IA7AAQgWCIg3CfQiyhxjbBogAEpg5QADgTgKgJQgIgHgMgBIgHABQgEABgCACIABgNQAAgLgGgMQgGgNgIAAQgCAAgDACIgEACIAAgJQAEgugOgMQgPgEAAgIQAAgIAEgHQADgHAAgPQAAgggdgQQAQgTAAgXQAAgUgGgKQgGgIgRgLIAAgEQAHgPAAgMQAAgOgFgHIAMgGQBQCTCdgiIAAABIABACIAEAZIADAWQgEACgEAGQgDAEAAAEIAAADQABAHADAIQAEAHAAAKQAAAEgHANQgHANAAAKQAAANAEAPQADAMAEAFIAAAJQgcAFgHAEQgOAGAAAQIACAJIAAAPIgDgBQgDgFgOAAQgMAAgIADQgKAEgKACQgHACgFAHQgGAHACAIgAgZjsgAGskcIAAAAg");
	this.shape_2.setTransform(0.005,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2F2F").s().p("AgiCbIADk1IAtAAIgSE1gAmAiEQBUgLBXgFQgeDmjFAxQAUiGAkiBgADMg3QgWgpgRg2QBzAFB3ANQAYBhASBcQgdAHgaAAQh1AAhBh3g");
	this.shape_3.setTransform(-2.05,-39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blackpants, new cjs.Rectangle(-49.9,-55.7,99.9,111.5), null);


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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AImhEIg1CJAolhEIA1CJ");
	this.shape.setTransform(0,-0.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AFWibQiOA0gpBsAG+iQQAIgBAIgBQBHgHANAjQAIAUgEAfQgDAXgJAeAHJhCIAAAHQgBABgLAmQgMAmgjA4QgGAKgHAIQgOASgRALQgTALgXADQgzAFgRgXQgRgXgPg8AHJhCIAAgCQAAgEgBgEQgCgGgFgGQgIgHgMAAQgMAAgIAHQgJAJAAAMQAAAMAJAIQAIAIAMAAQAMAAAIgIQAIgIAAgLgAG+iQIAKBEACeBxQACgEACgEIAAgBQABgEACgDQAAgBABgBQAFgLAFgLQA7h2BDgoQBQgwBAgLAH1BlQAGADAKAFQASAIAEAFAG0B+IABAGQADAJAFARAHUBxQACAHAIALQAHAJAAAFAHoCJQACACAFADAEgBvQAAAFADADQADACAEAAQAFAAADgCQADgDAAgFQAAgFgDgCQgDgDgFAAQgEAAgDADQgDACAAAFgAm9iQQgIgBgIgBQhHgHgNAjQgIAUAEAfQADAXAJAeAnHhMQACgGAFgGQAIgHAMAAQAMAAAIAHQAJAJAAAMQAAAMgJAIQgIAIgMAAQgMAAgIgIQgIgIAAgLIAAAHQABABALAmQAMAmAjA4QAGAKAHAIQAOASARALQATALAXADQAzAFARgXQARgXAPg8AnIhCIAAgCQAAgEABgEAm9iQIgKBEAidBxQhCiXhOgvQhQgwhAgLAkfBvQAAAFgDADQgDACgEAAQgFAAgDgCQgDgDAAgFQAAgFADgCQADgDAFAAQAEAAADADQADACAAAFgAmzB+IgBAGQgDAJgFARAnTBxQgCAHgIALQgHAJAAAFAn0BlQgGADgKAFQgSAIgEAFAnnCJQgCACgFADAikAKQgxiEiUgj");
	this.shape_1.setTransform(0,-0.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AD0B6QgRgXgQg8IgjAnQA6h2BDgoQBRgwBAgLIAJBEQgBgGgFgGQgJgIgMAAQgMAAgHAIQgJAJAAAMQAAAMAJAIQAHAIAMAAQAMAAAJgIQAHgIABgLIAAAHIgMAnQgMAlgjA4QgGAKgHAJQgOASgRAKQgUAMgWACIgRABQglAAgOgSgAEjBsQgDADgBAFQABAEADADQADADAEAAQAEAAADgDQAEgDAAgEQAAgFgEgDQgDgDgEAAQgEAAgDADgAk3CLQgWgCgUgMQgRgKgOgSQgHgJgGgKQgjg4gMglIgMgnIAAgHQABALAHAIQAJAIAMAAQAMAAAHgIQAJgIAAgMQAAgMgJgJQgHgIgMAAQgMAAgJAIQgFAGgBAGIAJhEQBAALBQAwQBOAvBCCWIgSgoIgkgmQgPA8gRAXQgOASglAAIgRgBgAkwBsQgEADAAAFQAAAEAEADQADADAEAAQAEAAADgDQADgDABgEQgBgFgDgDQgDgDgEAAQgEAAgDADgAChBtIAAABIAAABIgDAGIADgIgACmBkIAAABIgBABIABgCg");
	this.shape_2.setTransform(0,-1.4045);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AChBcIAAgBIAAgBIAAAAIAEgHIABgBIAAgBIAKgWIAjgnQAQA8ARAXQARAWAzgFQAWgCAUgMQARgKAOgSQAHgJAGgKQAjg4AMglIAMgnIAAgHIAAgCQAAgEgCgEQACAEAAAEIAAACQgBALgHAIQgJAIgMAAQgMAAgHgIQgJgIAAgMQAAgMAJgJQAHgIAMAAQAMAAAJAIQAFAGABAGIgJhEIAQgCQBHgHANAjQAIAUgEAfIg1CJIgMAJIgQANQgNAJgNAIQgpAagwAQQg4AThBAHQhDgXgFgwgAlhCJQgwgQgpgaQgNgIgNgJIgQgNIgMgJIg1iJQgEgfAIgUQANgjBHAHIAQACIgJBEQABgGAFgGQAJgIAMAAQAMAAAHAIQAJAJAAAMQAAAMgJAIQgHAIgMAAQgMAAgJgIQgHgIgBgLIAAgCQAAgEACgEQgCAEAAAEIAAACIAAAHIAMAnQAMAlAjA4QAGAKAHAJQAOASARAKQAUAMAWACQAzAFARgWQARgXAPg8IAkAmQAaBjhTAGQhBgHg4gTgAEjBoQgDgDgBgEQABgFADgDQADgDAEAAQAEAAADADQAEADAAAFQAAAEgEADQgDADgEAAQgEAAgDgDgAkwBoQgEgDAAgEQAAgFAEgDQADgDAEAAQAEAAADADQADADABAFQgBAEgDADQgDADgEAAQgEAAgDgDgACwA7IgKAWQAAgNAKgJgACwA7IAAAAg");
	this.shape_3.setTransform(0,0.4924);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blackeyes, new cjs.Rectangle(-56.1,-17.7,112.30000000000001,34.5), null);


(lib.blackbrows = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACuAAQE5heBuBwQAAAAABABQgBAAAAgBQiQg+j4BYgAitAAQk6hfhuByQCQhAD5BZg");
	this.shape.setTransform(0,0.0359);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACuAAQE5heBuBwIABABIgBgBQiQg+j5BYgApVATQBuhyE6BfIgeAsQj6hZiQBAg");
	this.shape_1.setTransform(0,0.0359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blackbrows, new cjs.Rectangle(-60.7,-5.3,121.5,10.7), null);


(lib.rectangleflatred = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#484848").s().p("AgXAlIAAgKIAKgJIAJgIIAMgOQADgGABgGQgBgFgDgEQgEgDgGAAQgEAAgFACQgGABgFADIAAAAIAAgKIAKgDIAKgBQALAAAGAFQAGAGABAJIgBAIIgEAHIgEAEIgHAHIgJAKIgKAIIAlAAIAAAJg");
	this.shape.setTransform(12.15,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#484848").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(2.425,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#484848").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_2.setTransform(-3.025,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#484848").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.925,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#484848").s().p("AgLAmIAAguIgGAAIAAgHIAGAAIAAgCQAAgKAGgFQAEgFAIAAIAGAAIAEABIAAAIIAAAAIgEgBIgFAAQgFAAgDACQgBADgBAHIAAACIAQAAIAAAHIgQAAIAAAug");
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

	// center outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FCBEBE").ss(1,1,1).p("AFZBfIqxAAIAAi9IKxAAg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// center box
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9A8A8").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_11.setTransform(0,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlYBfIAAi9IKxAAIAAC9g");
	this.shape_12.setTransform(0,-0.1184,0.9855,0.9474);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0909").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_13.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// outer box
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F9A8A8").ss(1,1,1).p("AF3B9IrtAAIAAj5ILtAAg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFyB4IrjAAIAAjvILjAAg");
	this.shape_15.setTransform(0,0,1.0135,1.0417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CC0909").ss(1,1,1).p("AF3B9IrtAAIAAj5ILtAAg");

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


(lib.rectangleflatgrey = function(mode,startPosition,loop,reversed) {
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
	this.shape_10.graphics.f().s("#EEEEEE").ss(1,1,1).p("AFZBfIqxAAIAAi9IKxAAg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// center box
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E1E1E1").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_11.setTransform(0,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlYBfIAAi9IKxAAIAAC9g");
	this.shape_12.setTransform(0,-0.1184,0.9855,0.9474);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6F6F6F").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_13.setTransform(0,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// outer box
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CCCCCC").ss(1,1,1).p("AF3B9IrtAAIAAj5ILtAAg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFyB4IrjAAIAAjvILjAAg");
	this.shape_15.setTransform(0,0,1.0135,1.0417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#6F6F6F").ss(1,1,1).p("AF3B9IrtAAIAAj5ILtAAg");

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
	this.shape.graphics.f("#484848").s().p("AgNAkIgKgDIAAgKIABAAQAEADAFACIAMABIAFgBQADgBADgCIADgEIABgHIgBgGIgDgFIgGgCIgFAAIgFAAIAAgHIAEAAQAGAAAEgDQAFgDgBgGIgBgFIgCgDIgFgCIgEgBQgFAAgFACIgKAFIAAgKQACgCAHgCIALgBIAIABQAEABAEACQADACABAEQACADAAAFQAAAGgEAEQgEAFgGABIAAABIAFABIAFACQADACABAEQACADAAAFQAAAFgCAEQgBAEgEADQgEADgEACQgFACgFAAQgHAAgFgCg");
	this.shape.setTransform(12.1,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#484848").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(2.425,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#484848").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_2.setTransform(-3.025,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#484848").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.925,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#484848").s().p("AgLAmIAAguIgGAAIAAgHIAGAAIAAgCQAAgKAGgFQAEgFAIAAIAGAAIAEABIAAAIIAAAAIgEgBIgFAAQgFAAgDACQgBADgBAHIAAACIAQAAIAAAHIgQAAIAAAug");
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
	this.shape_11.graphics.f("#66CCCC").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_11.setTransform(0,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2D8BB2").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_12.setTransform(0,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{y:-0.025}}]}).to({state:[{t:this.shape_11,p:{y:-0.1}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(1));

	// outer box
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B2D8E8").ss(1,1,1).p("AF3h8IAAD5IrtAAIAAj5g");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFyh3IAADvIrjAAIAAjvg");
	this.shape_14.setTransform(0,0,1.0135,1.0417);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#2D8BB2").ss(1,1,1).p("AF3h8IAAD5IrtAAIAAj5g");

	this.instance = new lib.rectangleflathitarea("synched",0);
	this.instance.setTransform(0,0,1.103,1.3889);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-36,-11,72,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-36, y:-11, w:72, h:22});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-13.5,77,27);


// stage content:
(lib.MPHFinalJJanairo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {softsong:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.Face1_btn.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.play();
			this.blkeyes.x = 237;
			this.blkeyes.y = 291;
			this.glasses2.x = 237;
			this.glasses2.y = 295;
			this.redhair.x = 236;
			this.redhair.y = 270;
			this.blkbrows.x = 236;
			this.blkbrows.y = 266;
			this.piercedmouth.x = 237;
			this.piercedmouth.y = 326;
			this.leftarm.x = 194;
			this.leftarm.y = 416;
			this.rightarm.x = 283;
			this.rightarm.y = 415;
			this.witeshirt.x = 237;
			this.witeshirt.y = 398;
			this.blackpants.x = 239;
			this.blackpants.y = 492;
			this.shoes2.x = 240;
			this.shoes2.y = 545;
		}
		this.reset_btn.addEventListener("click", ClickToReset.bind(this));
		
		function ClickToReset() {
			this.blkeyes.x = 859;
			this.blkeyes.y = 101;
			this.redhair.x = 843;
			this.redhair.y = 355;
			this.blkbrows.x = 723;
			this.blkbrows.y = 69;
			this.piercedmouth.x = 624;
			this.piercedmouth.y = 93;
			this.leftarm.x = 609;
			this.leftarm.y = 222;
			this.rightarm.x = 684;
			this.rightarm.y = 221;
			this.witeshirt.x = 558;
			this.witeshirt.y = 343;
			this.blackpants.x = 560;
			this.blackpants.y = 457;
			this.nose.x = 561;
			this.nose.y = 65;
			this.smile.x = 631;
			this.smile.y = 33;
			this.shock.x = 625;
			this.shock.y = 60;
			this.bushybrows.x = 731;
			this.bushybrows.y = 37;
			this.sharpbrows.x = 720;
			this.sharpbrows.y = 101;
			this.browneyes.x = 857;
			this.browneyes.y = 52;
			this.blueeyes.x = 858;
			this.blueeyes.y = 139;
			this.armfold.x = 523;
			this.armfold.y = 213;
			this.blonde.x = 836;
			this.blonde.y = 212;
			this.purpshirt.x = 448;
			this.purpshirt.y = 339;
			this.jumper.x = 450;
			this.jumper.y = 428;
			this.grntop.x = 675;
			this.grntop.y = 340;
			this.grnpants.x = 677;
			this.grnpants.y = 455;
			this.brown.x = 829;
			this.brown.y = 527;
			this.glasses1.x = 560;
			this.glasses1.y = 137;
			this.glasses2.x = 724;
			this.glasses2.y = 136;
			this.shoes1.x = 676;
			this.shoes1.y = 545;
			this.shoes2.x = 557;
			this.shoes2.y = 542;
			this.shoes3.x = 445;
			this.shoes3.y = 543;
			
		}
		this.Face2_btn.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.blonde.x = 238;
			this.blonde.y = 246;
			this.sharpbrows.x = 236;
			this.sharpbrows.y = 251;
			this.blueeyes.x = 236;
			this.blueeyes.y = 287;
			this.nose.x = 235;
			this.nose.y = 289;
			this.shock.x = 235;
			this.shock.y = 316;
			this.armfold.x = 237;
			this.armfold.y = 402;
			this.grntop.x = 236;
			this.grntop.y = 392;
			this.grnpants.x = 239;
			this.grnpants.y = 490;
			this.shoes1.x = 240;
			this.shoes.y = 545;
		}
		this.Face3_btn.addEventListener("click", ClickFace3.bind(this));
		
		function ClickFace3() {
			this.brown.x = 236;
			this.brown.y = 261;
			this.bushybrows.x = 243;
			this.bushybrows.y = 252;
			this.browneyes.x = 237;
			this.browneyes.y = 283;
			this.nose.x = 242;
			this.nose.y = 296;
			this.smile.x = 238;
			this.smile.y = 321;
			this.leftarm.x = 194;
			this.leftarm.y = 416;
			this.rightarm.x = 282;
			this.rightarm.y = 415;
			this.purpshirt.x = 235;
			this.purpshirt.y = 395;
			this.jumper.x = 238;
			this.jumper.y = 426;
			this.shoes3.x = 240;
			this.shoes3.y = 545;
			
		
		}
		
		this.nose.on("pressmove", dragMe);
		this.blkeyes.on("pressmove", dragMe);
		this.glasses2.on("pressmove", dragMe);
		this.redhair.on("pressmove", dragMe);
		this.blkbrows.on("pressmove", dragMe);
		this.piercedmouth.on("pressmove", dragMe);
		this.leftarm.on("pressmove", dragMe);
		this.rightarm.on("pressmove", dragMe);
		this.witeshirt.on("pressmove", dragMe);
		this.blackpants.on("pressmove", dragMe);
		this.blonde.on("pressmove", dragMe);
		this.sharpbrows.on("pressmove", dragMe);
		this.blueeyes.on("pressmove", dragMe);
		this.shock.on("pressmove", dragMe);
		this.armfold.on("pressmove", dragMe);
		this.grntop.on("pressmove", dragMe);
		this.grnpants.on("pressmove", dragMe);
		this.brown.on("pressmove", dragMe);
		this.bushybrows.on("pressmove", dragMe);
		this.browneyes.on("pressmove", dragMe);
		this.smile.on("pressmove", dragMe);
		this.purpshirt.on("pressmove", dragMe);
		this.jumper.on("pressmove", dragMe);
		this.glasses1.on("pressmove", dragMe);
		this.glasses2.on("pressmove", dragMe);
		this.shoes1.on("pressmove", dragMe);
		this.shoes2.on("pressmove", dragMe);
		this.shoes3.on("pressmove", dragMe);
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}
	this.frame_1 = function() {
		playSound("softsongbg");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(14));

	// buttons
	this.Face1_btn = new lib.rectangleflatblue();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(54.05,262.05);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 2, false, new lib.rectangleflatblue(), 3);

	this.reset_btn = new lib.rectangleflatgrey();
	this.reset_btn.name = "reset_btn";
	this.reset_btn.setTransform(54.05,396.3);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 2, false, new lib.rectangleflatgrey(), 3);

	this.Face3_btn = new lib.rectangleflatdarkblue();
	this.Face3_btn.name = "Face3_btn";
	this.Face3_btn.setTransform(54.05,351.1);
	new cjs.ButtonHelper(this.Face3_btn, 0, 1, 2, false, new lib.rectangleflatdarkblue(), 3);

	this.Face2_btn = new lib.rectangleflatred();
	this.Face2_btn.name = "Face2_btn";
	this.Face2_btn.setTransform(54.05,305.9);
	new cjs.ButtonHelper(this.Face2_btn, 0, 1, 2, false, new lib.rectangleflatred(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Face2_btn},{t:this.Face3_btn},{t:this.reset_btn},{t:this.Face1_btn}]}).wait(15));
	this.Face1_btn.addEventListener("tick", AdobeAn.handleFilterCache);
	this.reset_btn.addEventListener("tick", AdobeAn.handleFilterCache);
	this.Face3_btn.addEventListener("tick", AdobeAn.handleFilterCache);
	this.Face2_btn.addEventListener("tick", AdobeAn.handleFilterCache);

	// Body Parts
	this.glasses1 = new lib.glasses1();
	this.glasses1.name = "glasses1";
	this.glasses1.setTransform(559.55,137.3);

	this.glasses2 = new lib.glasses2();
	this.glasses2.name = "glasses2";
	this.glasses2.setTransform(723.95,136.4);

	this.armfold = new lib.foldedarms();
	this.armfold.name = "armfold";
	this.armfold.setTransform(527.85,222);

	this.grnpants = new lib.uniformpants();
	this.grnpants.name = "grnpants";
	this.grnpants.setTransform(680.35,459);

	this.jumper = new lib.jumper();
	this.jumper.name = "jumper";
	this.jumper.setTransform(444.9,441.6);

	this.blackpants = new lib.blackpants();
	this.blackpants.name = "blackpants";
	this.blackpants.setTransform(559.9,457.2);

	this.grntop = new lib.uniformtop();
	this.grntop.name = "grntop";
	this.grntop.setTransform(675.4,340.2);

	this.blkbrows = new lib.blackbrows();
	this.blkbrows.name = "blkbrows";
	this.blkbrows.setTransform(722.8,68.95);

	this.witeshirt = new lib.whiteshirt();
	this.witeshirt.name = "witeshirt";
	this.witeshirt.setTransform(558.1,343.55,1,1,0,0,0,0,0.2);

	this.purpshirt = new lib.purpleshirt();
	this.purpshirt.name = "purpshirt";
	this.purpshirt.setTransform(447.1,347.4);

	this.bushybrows = new lib.bushybrows();
	this.bushybrows.name = "bushybrows";
	this.bushybrows.setTransform(722.25,45);

	this.brown = new lib.brunettehair();
	this.brown.name = "brown";
	this.brown.setTransform(832.5,532.75);

	this.redhair = new lib.redhairmullet();
	this.redhair.name = "redhair";
	this.redhair.setTransform(843.4,355.1);

	this.blonde = new lib.blondehair();
	this.blonde.name = "blonde";
	this.blonde.setTransform(850.25,229.4);

	this.rightarm = new lib.rightarm();
	this.rightarm.name = "rightarm";
	this.rightarm.setTransform(705.05,219.6);

	this.leftarm = new lib.leftarm();
	this.leftarm.name = "leftarm";
	this.leftarm.setTransform(639.25,220.3);

	this.blueeyes = new lib.blueeyes();
	this.blueeyes.name = "blueeyes";
	this.blueeyes.setTransform(852.9,148.3,1,1,0,0,0,0,-0.2);

	this.blkeyes = new lib.blackeyes();
	this.blkeyes.name = "blkeyes";
	this.blkeyes.setTransform(859.05,101.05,1,1,0,0,0,0,-0.2);

	this.browneyes = new lib.browneyes();
	this.browneyes.name = "browneyes";
	this.browneyes.setTransform(860.85,43.3);

	this.sharpbrows = new lib.sharpbrows();
	this.sharpbrows.name = "sharpbrows";
	this.sharpbrows.setTransform(724.65,103.5);

	this.piercedmouth = new lib.mouthwithpiercing();
	this.piercedmouth.name = "piercedmouth";
	this.piercedmouth.setTransform(624.2,94.5,1,1,0,0,0,0,0.8);

	this.shock = new lib.shockmouth();
	this.shock.name = "shock";
	this.shock.setTransform(619.1,65.25,1,1,0,0,0,0,0.2);

	this.smile = new lib.smile();
	this.smile.name = "smile";
	this.smile.setTransform(617.95,30.15);

	this.nose = new lib.nose();
	this.nose.name = "nose";
	this.nose.setTransform(536.75,65.45);

	this.shoes3 = new lib.shoes3();
	this.shoes3.name = "shoes3";
	this.shoes3.setTransform(445.4,542.65);

	this.shoes2 = new lib.shoes2();
	this.shoes2.name = "shoes2";
	this.shoes2.setTransform(557,542.65);

	this.shoes1 = new lib.shoes();
	this.shoes1.name = "shoes1";
	this.shoes1.setTransform(675.85,544.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shoes1},{t:this.shoes2},{t:this.shoes3},{t:this.nose},{t:this.smile},{t:this.shock},{t:this.piercedmouth},{t:this.sharpbrows},{t:this.browneyes},{t:this.blkeyes},{t:this.blueeyes},{t:this.leftarm},{t:this.rightarm},{t:this.blonde},{t:this.redhair},{t:this.brown},{t:this.bushybrows},{t:this.purpshirt},{t:this.witeshirt},{t:this.blkbrows},{t:this.grntop},{t:this.blackpants},{t:this.jumper},{t:this.grnpants},{t:this.armfold},{t:this.glasses2},{t:this.glasses1}]}).wait(15));

	// Character
	this.instance = new lib.body();
	this.instance.setTransform(241.3,379.35,1,1,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// credits
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag0BSIAAgfQAsgmALgPQAKgQABgOQAAgUgPAAQgJAAgEAIQgEAIgCAOIgggGQAHg1AtAAQAZAAANAOQANANAAAUQAAAUgPATQgOAUgmAaIBFAAIgCAfg");
	this.shape.setTransform(272.5,610.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0BSIAAgfQAsgmAKgPQALgQAAgOQAAgUgOAAQgJAAgEAIQgFAIgBAOIgggGQAIg1AtAAQAYAAANAOQANANAAAUQAAAUgPATQgOAUgmAaIBFAAIgCAfg");
	this.shape_1.setTransform(260.05,610.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpA+QgMgWAAgmQAAgrAMgVQANgUAcgBQAeAAAMAWQAMAVAAAnQAAArgNAUQgMAWgdAAQgcgBgNgVgAgMgvQgDAIgBAnQABAoADAJQAEAIAIABQAJAAADgJQAFgIAAgpQAAgkgEgKQgDgKgKAAQgIgBgEAKg");
	this.shape_2.setTransform(247.8,610.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag0BSIAAgfQAsgmALgPQAKgQABgOQAAgUgPAAQgJAAgEAIQgEAIgCAOIgggGQAHg1AtAAQAZAAANAOQANANAAAUQAAAUgPATQgOAUgmAaIBFAAIgCAfg");
	this.shape_3.setTransform(235.15,610.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpBPIAAgaIAKABQAJAAAEgEQAEgDADgLIgjh0IAiAAIAPBJIAPhJIAdAAIgkB5QgFARgEAHQgDAHgHAFQgHAEgMAAQgGAAgIgCg");
	this.shape_4.setTransform(220.3,615.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnA2QgJgIAAgQQAAgUAOgKQANgLAigDIAAgEQAAgMgCgEQgDgFgGAAQgMAAgBASIghgDQADgSANgJQANgKATAAQARAAAKAGQALAHACAIQADAIAAASIAAAvQAAAWACAFIggAAQgBgFAAgOQgLAWgVAAQgOAAgJgJgAgGAJQgHAFAAALQAAAQALgBQAGAAAEgGQAFgHAAgSIAAgGQgOACgFAEg");
	this.shape_5.setTransform(210.05,613);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AArBRIAAiHIgiCHIgZAAIgeiHIAACHIgcAAIAAihIAzAAIAXBjIAZhjIAyAAIAAChg");
	this.shape_6.setTransform(195.25,610.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIBKQgIgGgCgIQgCgJAAgTIAAgvIgOAAIAAgbIAOAAIAAgkIAfgBIAAAlIAWAAIAAAbIgWAAIAAArIABAQQAAAEADACQADACAHABIAKgBIAAAaQgLACgKAAQgOAAgIgGg");
	this.shape_7.setTransform(178.075,611.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgfA9IAAh3IAdAAIAAAdQAHgfAVAAIAGABIAAAhIgGgBQgYAAAAAkIAAA0g");
	this.shape_8.setTransform(171.225,612.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAdBRIgIghIgtAAIgIAhIggAAIAwihIAjAAIAuChgAgRAUIAfAAIgPhCg");
	this.shape_9.setTransform(160.425,610.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvBRIAAigIAfAAIAAASQAKgTAQAAQARAAAKAPQALAOAAAfQAAAegKAQQgLAQgTAAQgNAAgKgKIAAAxgAgKg1QgEAFgBASIAAAWQAAARADAFQAEAFAIAAQAHAAADgHQAEgHgBgZQAAgWgDgIQgDgIgHAAQgGAAgEAFg");
	this.shape_10.setTransform(144.3,614.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAoA9IAAhKQAAgNgCgEQgCgEgGAAQgIgBgDAGQgCAFAAARIAABEIggAAIAAhLQAAgNgCgDQgCgEgHAAQgIAAgCAFQgDAFAAARIAABEIghAAIAAh3IAfAAIAAARQAJgTAUAAQAVAAAEATQAIgTAVAAQAMAAAHAEQAHAEADAIQACAHAAAVIAABNg");
	this.shape_11.setTransform(129.825,612.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgwAAQAAg9AwAAQAxAAAAA9QAAA+gxAAQgwAAAAg+gAgKgeQgDAHAAAXQAAAWADAIQADAJAHAAQAIAAADgJQADgIAAgWQAAgWgDgIQgDgIgIAAQgGAAgEAIg");
	this.shape_12.setTransform(115.675,613.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgqA9QgQgWAAgnQAAgmAQgWQAPgXAeAAQAzAAAEA/IggACQgCgjgVgBQgKAAgHAMQgGAMAAAhQAAAdAGALQAGALALAAQATABAEghIAhACQgCAagPARQgPAQgZABQgcAAgQgXg");
	this.shape_13.setTransform(103.675,610.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgwAAQAAg9AwAAQAxAAAAA9QAAA+gxAAQgwAAAAg+gAgKgeQgDAHAAAXQAAAWADAIQADAJAHAAQAIAAADgJQADgIAAgWQAAgWgDgIQgDgIgIAAQgGAAgEAIg");
	this.shape_14.setTransform(86.725,613.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfA9IAAh3IAdAAIAAAdQAHgfAVAAIAGABIAAAhIgGgBQgYAAAAAkIAAA0g");
	this.shape_15.setTransform(78.175,612.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgQBRIAAh3IAhAAIAAB3gAgQgvIAAghIAhAAIAAAhg");
	this.shape_16.setTransform(70.85,610.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmA2QgJgIAAgQQAAgUANgKQANgLAigDIAAgEQAAgMgCgEQgDgFgHAAQgLAAgBASIghgDQADgSANgJQANgKATAAQARAAAKAGQALAHACAIQADAIgBASIAAAvQAAAWACAFIgeAAQgCgFAAgOQgLAWgVAAQgOAAgIgJgAgHAJQgGAFAAALQAAAQAMgBQAFAAAFgGQAEgHAAgSIAAgGQgNACgHAEg");
	this.shape_17.setTransform(62.05,613);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AANA9IAAhNQAAgMgDgDQgDgDgGAAQgHAAgEAFQgCAGAAAPIAABFIgiAAIAAh3IAgAAIAAARQAJgTAUAAQAMAAAHAFQAIAFACAJQACAIAAARIAABNg");
	this.shape_18.setTransform(50.65,612.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnA2QgIgIgBgQQAAgUAOgKQANgLAigDIAAgEQAAgMgCgEQgDgFgGAAQgNAAgBASIgfgDQACgSANgJQANgKATAAQARAAAKAGQAKAHADAIQACAIABASIAAAvQAAAWABAFIgeAAQgCgFAAgOQgLAWgVAAQgOAAgJgJgAgGAJQgHAFAAALQAAAQALgBQAFAAAGgGQAEgHAAgSIAAgGQgOACgFAEg");
	this.shape_19.setTransform(38.9,613);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AggBQIAAgeQAJACAGAAQAJAAADgFQADgFAAgRIAAhqIAiAAIAABqQAAAVgCALQgDAMgKAGQgKAHgRAAQgIAAgOgCg");
	this.shape_20.setTransform(28.45,611.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfBQIAAgeQAIACAFAAQAKAAADgFQADgFAAgRIAAhqIAjAAIAABqQgBAVgCALQgEAMgJAGQgKAHgRAAQgIAAgNgCg");
	this.shape_21.setTransform(20.6,611.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

	// title
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9966FF").s().p("AgNDFQgJgIAAgNQgBgMAJgJQAIgJAMAAQANAAAIAIQAJAJAAANQAAAMgJAJQgJAJgMAAQgLAAgIgJgAAEBcIgKi7QgCgsgCgZQgDgagFgFQgFgEgOAAIAAgGIBLAAIgOCYIgFAhQgDARgDAjQgFAkAAAOIAAAKg");
	this.shape_22.setTransform(328.65,128.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9966FF").s().p("AiKDKIAAgDQATAAAFgIQAGgHAAgRIAAlLQAAgRgFgIQgEgIgWAAIAAgFIBtAAIAAAFQgPAAgHADQgGAEgBAFQgCAGAAASIAAEbQAAAlARAPQASAPApAAIAyAAQAjAAARgRQARgSACgxIAEAAIAABhg");
	this.shape_23.setTransform(308.725,128.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9966FF").s().p("AiKDKIAAgDQATAAAFgIQAGgHAAgRIAAlLQAAgRgFgIQgEgIgWAAIAAgFIBtAAIAAAFQgPAAgHADQgGAEgBAFQgCAGAAASIAAEbQAAAlARAPQASAPApAAIAyAAQAjAAARgRQARgSACgxIAEAAIAABhg");
	this.shape_24.setTransform(278.275,128.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9966FF").s().p("AibCaQg2g3AAhNQAAgzAag3QAag3A0giQA0gjBGAAQBVAAA2A0QA2A0AABNQAABjg+BEQg/BFhnAAQhUAAg1g3gAiBiNQgxAtAABEQAABVA8BBQA8BBBJAAQAqAAApgWQAogXAYgnQAXgnAAgqQAAg6gfgwQgggwgygbQgygbgqAAQg8AAgxAtg");
	this.shape_25.setTransform(240.675,128.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9966FF").s().p("AjZDKIAAgDIAFAAQAPgBAFgMQAEgLAAggIAAklQAAgigFgHQgGgGgSAAIAAgFIC6AAQBGAAApAMQApALAfAXQAeAYASAmQASAlAAAuQAAArgSArQgTArggAfQggAfgjALQgkALhJAAgAiNB4QAAAeAKAOQAKAPAYAGQAZAHAoAAQBxAAAug6QAug7AAhFQAAhQg/g7Qg/g8h+AAIg+AAg");
	this.shape_26.setTransform(194.175,128.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9966FF").s().p("AiADKIAAgDQAcAAAAgbIAAlOQAAgVgFgHQgGgIgRABIAAgFIBzAAQA9AAAcAPQAcANANAVQAMAUAAAiQAAAzgjAaQgkAZg7gBIAAgDQAlAAAYgYQAYgYAAgmQAAgegLgXQgMgYgVgMQgWgMgqABIgdAAIAAFYQAAAeAHAGQAGAFATABIAAADg");
	this.shape_27.setTransform(418.325,58.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9966FF").s().p("Ah6CqQgkgiAAg7IAAjyQAAgWgFgGQgFgGgTAAIAAgEIBrAAIAAAEQgRAAgHAGQgHAFAAAUIAADeQAABFAhAeQAhAeApAAQBBAAAzg7IAAkRQAAgkgHgHQgGgHgNAAIgEAAIAAgEIBqAAIAAAEQgTACgFAFQgGAGAAAPIAAFJQAAATACAGQACAGAGAEQAGAEAOAAIAAAEIhMAAIAAg+Qg7BBhQAAQg8AAgjgig");
	this.shape_28.setTransform(381.975,58.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9966FF").s().p("AiKDKIAAgDQAPgCAHgEQAHgFAAgSIAAlHQAAgVgEgJQgEgKgVAAIAAgFID+AAIAAA5IgEAAQgIgggGgFQgGgFgVAAIiFAAIAAC1IB7AAQASAAAFgDQAFgEABgGIADAAIAAAlIgDAAQgCgIgFgDQgFgDgOAAIh+AAIAAB9QAAAcAFAOQAFAMALADQAMADAXAAIBHAAQAiAAAJgCQAKgDAGgGQAGgIAEgXIAEAAIAAA3g");
	this.shape_29.setTransform(330.05,58.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9966FF").s().p("ACdDKIAAgDQASAAAAgSIgCgQIgpkpIiQFOIgDAAIiSlNIgpEqIgBAPQAAAQASABIAAADIg+AAIAAgDQAOgBAEgDQAEgEADgHIADgRIAulGQgLgcgMgFQgLgGgKABIAAgFIBMAAICOFLICOlLIBAAAIAAAFQggABAAAhIACATIAqEyQAEAWAFAGQAFAHAPACIAAADg");
	this.shape_30.setTransform(289.075,58.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9966FF").s().p("Ah5DNIAAh1IAEAAQABA7AbAWQAbAYA5AAQAygBAbgYQAbgZAAghQAAgWgJgOQgKgPgQgLQgRgMgvgPQgtgRgTgLQgTgMgNgYQgMgZAAgaQAAguAgghQAggfA0AAQAUgBAYAFIAaAGIACABIAUAzIgEAAIgPgQQgPgQgUgJQgUgJgYAAQgpAAgYAZQgYAXAAAhQAAAXALAQQALARAlAPQA9AUAXALQAXAKAVAZQAWAaAAAnQAAAQgEAPQgEAPgJAOQgIAOgMALQgMAMgMAFQgNAGgbAEIgiACg");
	this.shape_31.setTransform(234.425,58.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9966FF").s().p("Ah5DNIAAh1IAEAAQABA7AbAWQAbAYA5AAQAygBAbgYQAbgZAAghQAAgWgJgOQgKgPgQgLQgRgMgvgPQgtgRgTgLQgTgMgNgYQgMgZAAgaQAAguAgghQAggfA0AAQAUgBAYAFIAaAGIACABIAUAzIgEAAIgPgQQgPgQgUgJQgUgJgYAAQgpAAgYAZQgYAXAAAhQAAAXALAQQALARAlAPQA9AUAXALQAXAKAVAZQAWAaAAAnQAAAQgEAPQgEAPgJAOQgIAOgMALQgMAMgMAFQgNAGgbAEIgiACg");
	this.shape_32.setTransform(207.425,58.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9966FF").s().p("AiKDKIAAgDQAOgCAIgEQAHgFAAgSIAAlHQAAgVgEgJQgEgKgVAAIAAgFID+AAIAAA5IgEAAQgIgggGgFQgGgFgVAAIiFAAIAAC1IB7AAQASAAAFgDQAFgEABgGIADAAIAAAlIgDAAQgCgIgFgDQgFgDgOAAIh+AAIAAB9QAAAcAFAOQAFAMALADQAMADAXAAIBGAAQAjAAAJgCQAKgDAGgGQAHgIADgXIAEAAIAAA3g");
	this.shape_33.setTransform(179.4,58.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9966FF").s().p("ABAC3QgZgUg+hdIAAgBIgqg/IgkABIggAAIAACbQAAASAFAIQAFAJATAAIAAADIhpAAIAAgDQATgBAGgIQAEgHAAgXIAAlBQAAgQgEgKQgEgKgVAAIAAgFIBzAAQArAAAUADQAUABATALQAVALAKATQALASAAAbQAAAfgTAcQgTAcggATIAbArQAJARApA4QAoA3AWANQAWALAUABQAVAAAagQIACAGQghAbg1AAQgjAAgZgWgAiFgDIAqAAQAzAAAXgYQAYgXAAgnQAAglgXghQgYgig8ABIghAAg");
	this.shape_34.setTransform(142,59);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9966FF").s().p("AjZDKIAAgDIAFAAQAPgBAFgLQAEgMAAggIAAkmQAAgggFgHQgGgIgSABIAAgFIC6AAQBGAAApAMQApALAfAXQAeAYASAmQASAlAAAuQAAAsgSAqQgTArggAfQggAegjAMQgkALhJAAgAiNB4QAAAeAKAOQAKAPAYAGQAZAHAoAAQBxAAAug6QAug7AAhFQAAhQg/g7Qg/g8h+AAIg+AAg");
	this.shape_35.setTransform(95.175,58.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).wait(15));

	// Frame
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_36.setTransform(480,320);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_37.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(15));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,329,462,302);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FCE2FF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/softsongbg.mp3?1653663204624", id:"softsongbg"}
	],
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