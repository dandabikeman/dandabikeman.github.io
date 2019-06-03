(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.timerDisplay = new cjs.Text("Time", "46px 'Adobe Caslon Pro'");
	this.timerDisplay.name = "timerDisplay";
	this.timerDisplay.textAlign = "center";
	this.timerDisplay.lineHeight = 80;
	this.timerDisplay.lineWidth = 122;
	this.timerDisplay.parent = this;
	this.timerDisplay.setTransform(0,-39.1);

	this.timeline.addTween(cjs.Tween.get(this.timerDisplay).wait(1));

}).prototype = getMCSymbolPrototype(lib.timer, new cjs.Rectangle(-63.1,-41.1,126.3,82.3), null);


(lib.Target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlIFIQiIiIAAjAQAAi/CIiIQCIiHDAAAQDBAACICHQCJCIgBC/QABDAiJCIQiICIjBAAQjAAAiIiIgAkSkTQhxBxAACiQAACfBxBzQByBxCgAAQCiAABxhxQByhzAAifQAAiihyhxQhxhyiiAAQigAAhyBygAjfDfQhehcAAiDQAAiDBehdQBchcCDAAQCEAABdBcQBdBdAACDQAACDhdBcQhdBdiEAAQiDAAhchdgAh5h6QgyAzAABHQAABGAyAzQAzAyBGAAQBIAAAygyQAzgzAAhGQAAhHgzgzQgygzhIABQhGgBgzAzg");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AmRGSQinimAAjsQAAjqCninQCninDqAAQDsAACmCnQCnCnAADqQAADsinCmQimCnjsAAQjqAAiningAlIlGQiICIAADAQAADACICHQCICIDAAAQDBAACIiIQCJiHgBjAQABjAiJiIQiIiHjBAAQjAAAiICHgAkSETQhxhyAAihQAAigBxhyQByhxCggBQCiABBxBxQByByAACgQAAChhyByQhxByiiAAQigAAhyhygAjfjeQheBdAACCQAACDBeBcQBcBeCDAAQCEAABdheQBdhcAAiDQAAiChdhdQhdhdiEAAQiDAAhcBdgAh5B6QgygzAAhHQAAhGAygzQAzgyBGAAQBIAAAyAyQAzAzAABGQAABHgzAzQgyAyhIABQhGgBgzgyg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-56.9,113.8,113.8);


(lib.StartBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIB7QgKgGgEgJQgEgKAAgVIAAh/IgfAAIAAgHQAMgFAMgKQAMgLAJgPQAFgIAIgVIAGAAIAAA+IAsAAIAAAPIgsAAIAAB7QAAASAFAHQAFAGAJAAQAHAAAHgEQAGgEADgJIAIAAQgHAVgNAKQgNAKgOAAQgKAAgIgFg");
	this.shape.setTransform(29.8,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhEBiIAAgHQAPgBAHgEQAFgDACgIQABgDAAgRIAAhIQAAgigBgGQgCgHgDgDQgEgCgFAAQgGAAgJACIgCgHIA6gXIAIAAIAAArQAYgrAZAAQALAAAIAHQAHAHAAAJQAAAIgGAGQgFAFgHABQgIgBgIgGQgKgIgEAAQgEAAgEAEQgKAJgJATIAABbQAAAQAEAHQACAGAHAEQAHADANABIAAAHg");
	this.shape_1.setTransform(16.9,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhJBXQgNgOABgWQAAgOAGgKQAJgPAVgMQAUgLAxgSIAAgHQAAgdgJgLQgKgLgPAAQgNAAgJAHQgHAIgBAJIABAMQAAAJgFAGQgEAFgIAAQgJAAgEgFQgFgGAAgJQAAgSATgPQASgPAgAAQAZAAAQAJQANAGAFANQAEAKAAAbIAABAQAAAbABAHQABAFADADQACABADAAQADABADgCQAEgCAMgNIAAAMQgXAegVABQgKAAgGgIQgGgGAAgRQgdAWgHAEQgMAFgMAAQgTAAgOgNgAgUAAQgRAJgHAKQgGALAAALQAAAPAJAKQAJAKALAAQAQAAAZgVIAAhIQgfANgJAEg");
	this.shape_2.setTransform(0.8,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJB7QgIgGgFgJQgEgKAAgVIAAh/IgeAAIAAgHQALgFAMgKQAMgLAKgPQAEgIAHgVIAHAAIAAA+IAsAAIAAAPIgsAAIAAB7QAAASAGAHQAEAGAJAAQAHAAAHgEQAGgEAEgJIAIAAQgIAVgNAKQgOAKgOAAQgJAAgJgFg");
	this.shape_3.setTransform(-15,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRCRQgHgBgUgGQgUgHgGABQgFAAgDADQgDADgBAJIgIAAIAAhgIAIAAQAFAeAJAQQAJAOATAKQATAKAWAAQAaAAAPgNQAPgOAAgTQAAgLgGgKQgGgKgMgJQgIgHgjgUQgkgTgPgNQgQgMgIgOQgIgOAAgSQAAgeAYgXQAXgWAkABQAVAAAaALQALAFAFAAQAFAAAEgEQADgDACgJIAIAAIAABhIgIAAQgDgcgKgRQgKgQgSgKQgSgKgSAAQgVAAgOAOQgPANAAAQQAAAOAJAKQANAQAwAZQAnAWAPAKQAOALAIAQQAIAPAAARQAAAggZAYQgZAWgnAAQgLAAgLgCg");
	this.shape_4.setTransform(-32.9,-3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AySnsMAklAAAIAAPZMgklAAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AySHsIAAvXMAklAAAIAAPXg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKCUQgMgHgFgLQgFgMAAgZIAAiZIgkAAIAAgIQAOgGAOgNQAPgNAKgSQAGgJAJgaIAIAAIAABMIA2AAIAAARIg2AAIAACTQABAXAGAHQAGAIAKAAQAJAAAHgFQAIgFAEgKIAKAAQgJAYgQANQgQAMgRAAQgLAAgKgGg");
	this.shape_7.setTransform(36.1,-1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhSB2IAAgJQASAAAIgGQAHgEACgIQABgFAAgUIAAhXQAAgogBgIQgCgHgEgEQgFgDgGAAQgIAAgKADIgCgJIBFgcIALAAIAAA0QAbg0AfAAQANAAAJAJQAJAIAAALQAAAKgGAHQgHAGgJAAQgIAAgLgIQgLgJgFAAQgFAAgFAFQgLAKgLAYIAABsQAAATAEAKQADAHAIAEQAIAFAQAAIAAAJg");
	this.shape_8.setTransform(20.5,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAfBvQgHgIgBgUQgiAbgIAEQgOAGgQAAQgXAAgQgQQgPgQAAgaQAAgSAHgMQALgQAZgPQAagOA5gWIAAgJQABgigLgNQgLgNgUAAQgQAAgJAJQgJAIAAALIAAAPQAAALgGAHQgFAFgKAAQgKABgFgHQgGgGAAgLQAAgWAWgSQAWgSAoAAQAdAAATALQAPAHAHAQQAEAMABAgIAABNQAAAhABAHQABAIADACQADADADAAQAFAAACgCQAGgDAPgQIAAAPQgcAlgaAAQgLAAgIgJgAgYABQgUAKgIAMQgJAMAAAOQAAATALAMQAKALAPABQASAAAegaIAAhWQgkAPgLAGg");
	this.shape_9.setTransform(1.2,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKCUQgMgHgFgLQgFgMAAgZIAAiZIgkAAIAAgIQANgGAPgNQAPgNAKgSQAGgJAJgaIAIAAIAABMIA2AAIAAARIg2AAIAACTQABAXAGAHQAGAIAKAAQAIAAAIgFQAIgFAEgKIAKAAQgJAYgQANQgQAMgRAAQgLAAgKgGg");
	this.shape_10.setTransform(-17.8,-1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVCvIgggJQgYgIgHAAQgGAAgDAEQgEADgCAMIgKAAIAAh0IAKAAQAGAlALASQAMASAWAMQAWAMAaAAQAgAAASgRQASgQAAgXQAAgMgHgNQgHgNgOgKQgKgIgqgZQgsgXgSgOQgTgPgJgRQgJgSAAgVQAAgkAbgbQAdgaArAAQAaAAAdAOQAOAFAGAAQAHABAEgEQAEgEACgMIAKAAIAAB1IgKAAQgEghgLgVQgMgTgVgMQgWgMgWAAQgaAAgRAQQgRAQAAAUQAAAPALANQAPATA6AgQAvAZASAMQARAOAJATQAKASAAAUQAAAmgeAcQgfAcguAAQgOAAgNgCg");
	this.shape_11.setTransform(-39.2,-3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("A13pNMArvAAAIAASbMgrvAAAg");
	this.shape_12.setTransform(-0.6,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("A13JOIAAybMArvAAAIAASbg");
	this.shape_13.setTransform(-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.1,-50.2,236.2,100.5);


(lib.SelectLevelBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsCUIAAgIQANAAAFgCQAFgDADgGQACgHAAgRIAAisQAAghgBgHQgBgHgEgDQgDgDgFAAQgGAAgIAEIgEgIIA5gXIAJAAIAAD8QAAASACAFQADAGAFADQAGADAOAAIAAAIg");
	this.shape.setTransform(92.1,-3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3BKQgZgaABgtQAAgwAZgcQAZgbAlAAQAfAAAVAVQAVAVAAAkIiDAAQAAApAUAYQAVAYAcAAQASAAAOgKQANgKAKgZIAHAEQgFAcgVAYQgVAXggAAQghAAgYgbgAgihIQgOAOgCAXIBXAAQgBgSgEgHQgEgMgLgHQgKgGgLAAQgRAAgNANg");
	this.shape_1.setTransform(76.8,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAABiIhEigQgFgLgEgFQgEgFgHgDQgDgCgLgCIAAgHIBaAAIAAAHIgGAAQgIAAgEAEQgFAEAAAHQAAAHAFAKIArBpIAthtQAEgLAAgGQAAgDgBgCQgDgDgDgBQgEgCgKAAIAAgHIA+AAIAAAHQgLABgEAEQgIAGgFAPIhECig");
	this.shape_2.setTransform(56.5,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag3BKQgZgaABgtQAAgwAZgcQAYgbAmAAQAfAAAVAVQAUAVABAkIiDAAQAAApAUAYQAVAYAcAAQASAAAOgKQAOgKAJgZIAHAEQgFAcgVAYQgVAXggAAQghAAgYgbgAgihIQgOAOgCAXIBXAAQgBgSgEgHQgEgMgLgHQgKgGgLAAQgRAAgNANg");
	this.shape_3.setTransform(36.7,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ah4CNIAAgHIAKAAQASgBAIgMQAEgGAAgYIAAi1QAAgbgGgGQgIgJgQAAIgKAAIAAgIIB+AAIAAAIQgVAAgJAEQgJAEgDAHQgEAGAAAZIAACxQAAARAEAHQACAEAFACQAFACAbAAIAUAAQAhAAANgFQANgEALgNQALgMAKgaIAHABIgYBNg");
	this.shape_4.setTransform(14.1,-3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIB7QgKgGgEgJQgEgKAAgVIAAh/IgeAAIAAgHQALgFAMgKQAMgLAKgPQAEgIAHgVIAHAAIAAA+IAtAAIAAAPIgtAAIAAB7QAAASAFAHQAGAGAIAAQAHAAAGgEQAHgEADgJIAIAAQgHAVgNAKQgNAKgPAAQgJAAgIgFg");
	this.shape_5.setTransform(-4.5,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag3BJQgYgbAAguQAAgsAbgcQAagcAlAAQAcAAASAPQASAPAAAQQAAAHgFAFQgFAGgJAAQgNAAgGgJQgDgEgCgMQgBgNgHgGQgHgGgNAAQgUAAgNAPQgRAVAAAhQAAAhARAbQARAaAbAAQAVAAAQgPQALgJALgaIAGAEQgHAlgXAUQgWAVgcAAQgfAAgYgcg");
	this.shape_6.setTransform(-20.1,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag3BKQgZgaAAgtQAAgwAZgcQAZgbAlAAQAhAAAUAVQAUAVAAAkIiCAAQgBApAVAYQAVAYAbAAQATAAAOgKQANgKAKgZIAGAEQgEAcgVAYQgVAXgfAAQgiAAgYgbgAgihIQgOAOgCAXIBXAAQgBgSgEgHQgEgMgLgHQgKgGgKAAQgRAAgOANg");
	this.shape_7.setTransform(-38.8,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsCUIAAgIQANAAAFgCQAFgDACgGQADgHAAgRIAAisQAAghgBgHQgBgHgDgDQgEgDgFAAQgGAAgIAEIgDgIIA3gXIAKAAIAAD8QAAASADAFQACAGAFADQAGADAPAAIAAAIg");
	this.shape_8.setTransform(-54.2,-3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag3BKQgZgaAAgtQAAgwAZgcQAZgbAlAAQAgAAAVAVQAVAVgBAkIiCAAQgBApAWAYQAUAYAbAAQATAAAOgKQANgKAKgZIAGAEQgEAcgVAYQgVAXgfAAQgiAAgYgbgAgihIQgOAOgCAXIBXAAQgBgSgDgHQgGgMgKgHQgKgGgKAAQgRAAgOANg");
	this.shape_9.setTransform(-69.5,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRCRQgHgBgUgGQgUgHgGABQgFAAgDADQgDADgBAJIgIAAIAAhgIAIAAQAFAeAJAQQAJAOATAKQATAKAWAAQAaAAAPgNQAPgOAAgTQAAgLgGgKQgGgKgMgJQgIgHgjgUQgkgTgPgNQgQgMgIgOQgIgOAAgSQAAgeAYgXQAXgWAkABQAVAAAaALQALAFAFAAQAFAAAEgEQADgDACgJIAIAAIAABhIgIAAQgDgcgKgRQgKgQgSgKQgSgKgSAAQgVAAgOAOQgPANAAAQQAAAOAJAKQANAQAwAZQAnAWAPAKQAOALAIAQQAIAPAAARQAAAggZAYQgZAWgnAAQgLAAgLgCg");
	this.shape_10.setTransform(-90.9,-3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AySnsMAklAAAIAAPZMgklAAAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AySHsIAAvXMAklAAAIAAPXg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag1CyIAAgJQAQgBAGgDQAFgDAEgHQADgIAAgVIAAjPQAAgngCgJQgCgIgDgEQgEgDgGAAQgHAAgKAEIgEgJIBDgcIALAAIAAEvQAAAVAEAIQADAGAGAEQAHAEARAAIAAAJg");
	this.shape_13.setTransform(111.6,-4.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhCBZQgeggAAg2QAAg6AeggQAeghAtAAQAmAAAZAZQAZAZAAArIidAAQgBAyAZAdQAZAdAhAAQAXAAAQgNQARgMALgeIAIAFQgGAigZAcQgZAcgmAAQgoAAgdgggAgphWQgRAQgCAcIBpAAQgCgWgEgJQgGgOgMgIQgNgIgMAAQgVAAgQARg");
	this.shape_14.setTransform(93.2,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBB2IhSjAQgFgOgFgFQgFgGgHgEQgFgDgMgCIAAgJIBsAAIAAAJIgHAAQgKAAgGAFQgEAFAAAIQAAAJAEAMIA1B9IA1iCQAGgOAAgHQAAgEgCgCQgDgEgEgBQgEgCgNAAIAAgJIBKAAIAAAJQgNABgFAFQgJAHgHASIhRDDg");
	this.shape_15.setTransform(68.8,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhCBZQgeggAAg2QAAg6AeggQAeghAtAAQAmAAAZAZQAZAZAAArIidAAQgBAyAZAdQAZAdAhAAQAXAAAQgNQARgMALgeIAIAFQgGAigZAcQgZAcgmAAQgoAAgdgggAgphWQgRAQgCAcIBpAAQgCgWgEgJQgGgOgMgIQgNgIgMAAQgVAAgQARg");
	this.shape_16.setTransform(45,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AiRCpIAAgJIANAAQAWAAAJgOQAFgIAAgdIAAjZQAAgggHgIQgKgLgTAAIgNAAIAAgJICZAAIAAAJQgaAAgLAFQgLAFgEAIQgEAIAAAeIAADUQAAAVAEAIQADAFAGACQAHADAfAAIAZAAQAnAAAQgGQAPgGANgOQANgPANgfIAJABIgdBcg");
	this.shape_17.setTransform(17.9,-3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLCUQgLgHgFgLQgFgMAAgZIAAiZIgkAAIAAgIQANgGAPgNQAPgNALgSQAFgJAKgaIAHAAIAABMIA2AAIAAARIg2AAIAACTQAAAXAHAHQAGAIAKAAQAJAAAHgFQAIgFAEgKIAKAAQgJAYgQANQgQAMgRAAQgLAAgLgGg");
	this.shape_18.setTransform(-4.5,-1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhCBZQgdghAAg4QAAg1AgghQAggiAsAAQAiAAAVASQAWASAAATQAAAJgGAGQgGAGgLAAQgPAAgHgKQgFgFgBgOQgBgPgJgIQgJgHgPAAQgYAAgQASQgUAZAAAoQAAAoAUAfQAUAfAiAAQAYAAATgQQAOgMANgeIAHADQgJAugbAYQgbAYggAAQgmAAgdggg");
	this.shape_19.setTransform(-23.2,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhCBZQgeggAAg2QAAg6AeggQAeghAtAAQAmAAAZAZQAZAZAAArIidAAQgBAyAZAdQAZAdAhAAQAXAAAQgNQARgMALgeIAIAFQgGAigZAcQgZAcgmAAQgoAAgdgggAgphWQgRAQgCAcIBpAAQgCgWgEgJQgGgOgMgIQgNgIgMAAQgVAAgQARg");
	this.shape_20.setTransform(-45.6,1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag1CyIAAgJQAQgBAGgDQAFgDAEgHQADgIAAgVIAAjPQAAgngCgJQgCgIgDgEQgEgDgGAAQgHAAgKAEIgEgJIBDgcIALAAIAAEvQAAAVAEAIQADAGAGAEQAHAEARAAIAAAJg");
	this.shape_21.setTransform(-64.1,-4.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhCBZQgeggAAg2QAAg6AeggQAeghAtAAQAmAAAZAZQAZAZAAArIidAAQgBAyAZAdQAZAdAhAAQAXAAAQgNQARgMALgeIAIAFQgGAigZAcQgZAcgmAAQgoAAgdgggAgphWQgRAQgCAcIBpAAQgCgWgEgJQgGgOgMgIQgNgIgMAAQgVAAgQARg");
	this.shape_22.setTransform(-82.5,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVCvIgggJQgYgIgHAAQgGAAgDAEQgEADgCAMIgKAAIAAh0IAKAAQAGAlALASQAMASAWAMQAWAMAaAAQAgAAASgRQASgQAAgXQAAgMgHgNQgHgNgOgKQgKgIgqgZQgsgXgSgOQgTgPgJgRQgJgSAAgVQAAgkAbgbQAdgaArAAQAaAAAdAOQAOAFAGAAQAHABAEgEQAEgEACgMIAKAAIAAB1IgKAAQgEghgLgVQgMgTgVgMQgWgMgWAAQgaAAgRAQQgRAQAAAUQAAAPALANQAPATA6AgQAvAZASAMQARAOAJATQAKASAAAUQAAAmgeAcQgfAcguAAQgOAAgNgCg");
	this.shape_23.setTransform(-108.1,-3.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("A13pNMArvAAAIAASbMgrvAAAg");
	this.shape_24.setTransform(-0.6,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("A13JOIAAybMArvAAAIAASbg");
	this.shape_25.setTransform(-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.1,-50.2,236.2,100.5);


(lib.score = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.scoreDisplay = new cjs.Text("Score", "46px 'Adobe Caslon Pro'");
	this.scoreDisplay.name = "scoreDisplay";
	this.scoreDisplay.textAlign = "center";
	this.scoreDisplay.lineHeight = 80;
	this.scoreDisplay.lineWidth = 107;
	this.scoreDisplay.parent = this;
	this.scoreDisplay.setTransform(0,-45.1);

	this.timeline.addTween(cjs.Tween.get(this.scoreDisplay).wait(1));

}).prototype = getMCSymbolPrototype(lib.score, new cjs.Rectangle(-55.7,-47.1,111.5,94.2), null);


(lib.LevelSelect4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAmDpIAAh4IjAAAIAAgrIDTkuIAlAAIAAEpIA9AAIAAAwIg9AAIAAB4gAh5BBICfAAIAAjig");
	this.shape.setTransform(-1.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AlYlYIKxAAIAAKxIqxAAg");
	this.shape_1.setTransform(0,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlYFZIAAqxIKxAAIAAKxg");
	this.shape_2.setTransform(0,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAmD2IAAh/IjAAAIAAguIDTk+IAlAAIAAE5IA9AAIAAAzIg9AAIAAB/gAh5BEICfAAIAAjug");
	this.shape_3.setTransform(-1.5,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Al2mAILtAAIAAMBIrtAAg");
	this.shape_4.setTransform(0.1,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Al2GBIAAsBILtAAIAAMBg");
	this.shape_5.setTransform(0.1,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-40.2,71,80.5);


(lib.LevelSelect3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhwDiQgRgMAAgNQAAgJAIgIQAIgHALAAQAJAAAIACQAGACAUALQAVAKAHACQANAEAOAAQAhAAAagbQAZgaAAglQAAgagMgZQgIgTgLgKQgOgOgagKQgYgLgaAAIgLAAIAAgKQAbgDAagQQAagQAMgWQAMgWAAgbQAAgigVgWQgWgVgfAAQg1AAgjA4IgLgGQAUguAegZQAdgZAsAAQA3AAAdAkQAWAaAAAfQAAAxg+A2QAqAQAVAeQAWAfAAApQAAA7gmAsQgxA4hcAAQguAAgRgLg");
	this.shape.setTransform(-2.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AlYlYIKxAAIAAKxIqxAAg");
	this.shape_1.setTransform(0,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlYFZIAAqxIKxAAIAAKxg");
	this.shape_2.setTransform(0,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhwDuQgRgMAAgOQAAgKAIgIQAIgHALgBQAJABAIADQAGABAUALQAVAMAHACQANADAOAAQAhAAAagcQAZgbAAgnQAAgcgMgbQgIgUgLgKQgOgOgagMQgYgMgaAAIgLAAIAAgJQAbgEAagQQAagRAMgYQAMgXAAgdQAAgkgVgWQgWgXgfAAQg1AAgjA7IgLgGQAUgxAegaQAdgbAsABQA3AAAdAlQAWAcAAAhQAAA0g+A4QAqARAVAgQAWAgAAAsQAAA/gmAuQgxA7hcABQguAAgRgNg");
	this.shape_3.setTransform(-2.4,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Al2mAILtAAIAAMBIrtAAg");
	this.shape_4.setTransform(0.1,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Al2GBIAAsBILtAAIAAMBg");
	this.shape_5.setTransform(0.1,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-40.2,71,80.5);


(lib.LevelSelect2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiWDpIAAgMQB3htAwhEQAwhEAAg5QAAgsgbgcQgagbgkAAQgiAAgbATQgbAUgMAmIgNAAQAJg+AjgiQAighA1AAQA2AAAmAkQAlAjAAAxQAAAjgRAiQgYA2g4A9QhTBcgVASIB2AAQAkAAAPgCQAPgDAMgIQALgJAJgPIANAAIggBYg");
	this.shape.setTransform(-1.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AlYlYIKxAAIAAKxIqxAAg");
	this.shape_1.setTransform(0,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlYFZIAAqxIKxAAIAAKxg");
	this.shape_2.setTransform(0,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiWD2IAAgNQB3hzAwhIQAwhIAAg8QAAgugbgdQgagegkAAQgiAAgbAVQgbAVgMAoIgNAAQAJhCAjgjQAigjA1AAQA2AAAmAlQAlAmAAAzQAAAlgRAlQgYA4g4BBQhTBhgVAUIB2AAQAkAAAPgDQAPgDAMgJQALgJAJgQIANAAIggBdg");
	this.shape_3.setTransform(-1.6,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Al2mAILtAAIAAMBIrtAAg");
	this.shape_4.setTransform(0.1,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Al2GBIAAsBILtAAIAAMBg");
	this.shape_5.setTransform(0.1,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-40.2,71,80.5);


(lib.LevelSelect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhRDpIAAgMQAhgBAIgFQAKgFAEgIQAEgIgBgpIAAj2QABgygEgOQgCgLgGgFQgGgFgKAAQgMAAgWALIgFgLIBug2IALAAIAAGBQAAAmAEAKQACAJAKAFQALAFAfABIAAAMg");
	this.shape.setTransform(-1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AlYlYIKxAAIAAKxIqxAAg");
	this.shape_1.setTransform(0,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlYFZIAAqxIKxAAIAAKxg");
	this.shape_2.setTransform(0,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhRD2IAAgNQAhgBAIgFQAKgFAEgIQAEgJgBgsIAAkDQABg1gEgPQgCgLgGgGQgGgFgKAAQgMAAgWALIgFgLIBug5IALAAIAAGWQAAApAEAKQACAKAKAFQALAFAfABIAAANg");
	this.shape_3.setTransform(-1,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Al2mAILtAAIAAMBIrtAAg");
	this.shape_4.setTransform(0.1,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Al2GBIAAsBILtAAIAAMBg");
	this.shape_5.setTransform(0.1,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-40.2,71,80.5);


(lib.BackBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANCUIAAgIQAJAAACgCQADgCAAgEQAAgFgIgLIg6hKIAwgsQAPgOADgDIABgFQAAgFgDgDQgDgDgJAAIAAgHIBTAAIAAAHQgRAAgLAFQgLAFgOAMIgwAsIAwA+QAUAaAHAHQAKAJAIADQAFACANAAIAAAIgAhpCUIAAgIQAOAAAIgDQAEgDACgEQADgHAAgRIAAisQAAgigBgHQgBgHgDgDQgEgDgFAAQgFAAgJAEIgDgIIA4gXIAKAAIAAC9IAAA/QAAASADAGQACAGAFADQAFACAQAAIAAAIg");
	this.shape.setTransform(59.1,-3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3BJQgYgbAAguQAAgsAbgcQAagcAlAAQAcAAASAPQASAPAAAQQAAAHgFAFQgFAGgJAAQgNAAgGgJQgDgEgCgMQgBgNgHgGQgHgGgNAAQgUAAgNAPQgRAVAAAhQAAAhARAbQARAaAbAAQAVAAAQgPQALgJALgaIAGAEQgHAlgXAUQgWAVgcAAQgfAAgYgcg");
	this.shape_1.setTransform(38.7,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhIBXQgNgOgBgWQABgOAGgKQAJgPAUgMQAVgLAwgSIAAgHQAAgdgIgLQgKgLgQAAQgNAAgHAHQgJAIABAJIAAAMQAAAJgFAGQgEAFgJAAQgIAAgEgFQgFgGAAgJQAAgSASgPQASgPAiAAQAYAAAQAJQANAGAFANQAEAKAAAbIAABAQAAAbABAHQABAFACADQADABADAAQAEABACgCQAEgCAMgNIAAAMQgWAegWABQgKAAgGgIQgGgGgBgRQgbAWgIAEQgLAFgNAAQgUAAgMgNgAgUAAQgRAJgGAKQgIALAAALQAAAPAJAKQAKAKALAAQAQAAAYgVIAAhIQgdANgKAEg");
	this.shape_2.setTransform(20.6,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah+CNIAAgHIALAAQASAAAHgMQAFgHAAgYIAAi1QAAgagGgHQgIgJgQAAIgLAAIAAgIIB6AAQAhAAAVAFQAfAHAQAUQARASAAAaQAAAUgNASQgNAQgZAIQAdAGAPANQAUATAAAcQAAAVgNATQgOATgXAKQgXAIgwAAgAgeADIgPACIAABzQAYAGAXAAQAlAAAUgRQAUgQAAgaQAAgQgJgPQgJgQgUgIQgUgJgdAAIgWAAgAgth6IAABtIASACIAVABQAeAAAPgHQAPgHAIgNQAIgNAAgRQAAgYgUgRQgUgSgmAAQgUAAgRAEg");
	this.shape_3.setTransform(-4.7,-3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhFBCQgWgcAAglQAAgZANgaQANgZAVgNQAWgMAWAAQArAAAbAhQAWAcAAAkQAAAZgMAaQgNAagVAOQgWANgZAAQgrAAgZgjgAgbhQQgMAGgGARQgHAQAAAaQAAApAQAeQARAeAaAAQAUAAANgQQANgRAAgpQAAgygWgcQgOgVgWAAQgLAAgLAHg");
	this.shape_4.setTransform(-28.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhuBfQgggnAAg0QAAgkASgiQAVgpAlgVQAfgTApABQAPAAANACQANADAXAIQALAFAEAAQAEAAADgEQADgEAAgKIAIAAIAHBYIgHAAQgLghgRgQQgagZgnAAQg1AAgcArQgXAkAAAxQAAAoAPAhQAQAhAZAQQAZAQAaAAQAPAAAPgFQAPgDANgIIAAhSQAAgVgDgGQgDgHgHgCQgHgEgRAAIAAgIIBtAAIAAAIIgFAAQgQAAgGAKQgEAIAAAWIAABXQgYAMgYAHQgXAFgcAAQhRAAgqg0g");
	this.shape_5.setTransform(-54.2,-3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AySnsMAklAAAIAAPZMgklAAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AySHsIAAvXMAklAAAIAAPXg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAQCyIAAgJQAKAAADgDQAEgDAAgFQAAgFgKgNIhGhaIA6g0QASgRADgFQACgCAAgEQAAgFgEgDQgEgDgKgBIAAgIIBkAAIAAAIQgVABgNAFQgOAGgQAOIg6A1IA6BLQAYAeAJAJQAMAMAJADQAGADAPAAIAAAJgAh+CyIAAgJQARgBAJgEQAFgDADgFQAEgJAAgUIAAjPQAAgogCgJQgCgIgEgEQgEgDgGAAQgFAAgLAEIgEgJIBEgcIALAAIAADjIAABMQAAAXAEAGQADAIAFACQAGADATABIAAAJg");
	this.shape_8.setTransform(70.3,-4.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhCBZQgdghAAg4QAAg1AgghQAggiAsAAQAiAAAVASQAWASAAATQAAAJgGAGQgGAGgLAAQgPAAgHgKQgFgFgBgOQgBgPgJgIQgJgHgPAAQgYAAgQASQgUAZAAAoQAAAoAUAfQAUAfAiAAQAYAAATgQQAOgMANgeIAHADQgJAugbAYQgbAYggAAQgmAAgdggg");
	this.shape_9.setTransform(45.9,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAfBvQgHgIgBgUQgiAbgIAEQgOAGgQAAQgXAAgPgQQgQgQAAgaQAAgSAHgMQALgQAZgPQAagOA5gWIAAgJQABgigLgNQgLgNgUAAQgPAAgKAJQgJAIAAALIAAAPQAAALgGAHQgFAFgKAAQgKABgFgHQgGgGAAgLQAAgWAWgSQAWgSAoAAQAdAAATALQAPAHAHAQQAEAMABAgIAABNQAAAhABAHQABAIADACQADADADAAQAFAAACgCQAGgDAPgQIAAAPQgcAlgaAAQgLAAgIgJgAgYABQgUAKgIAMQgJAMAAAOQAAATALAMQAKALAPABQASAAAegaIAAhWQgkAPgLAGg");
	this.shape_10.setTransform(24.2,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiXCpIAAgJIAMAAQAWAAAJgNQAGgJAAgdIAAjZQAAgggIgIQgJgLgUAAIgMAAIAAgJICSAAQAoAAAZAGQAlAJAUAXQAUAWAAAeQAAAagQAUQgPAUgfAJQAkAHARAQQAYAXAAAiQAAAZgQAXQgQAXgbALQgcAKg5AAgAglAEIgRACIAACLQAdAHAbAAQAtAAAYgVQAXgUAAgeQAAgUgKgSQgLgSgYgLQgZgKgiAAIgbAAgAg2iSIAACCIAVADIAaABQAjAAATgIQASgIAKgQQAJgRAAgTQAAgegYgVQgYgVgtAAQgZAAgUAGg");
	this.shape_11.setTransform(-6.1,-3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhTBQQgagjAAgrQgBgeARgfQAPgfAZgPQAagPAbAAQA0AAAfAnQAbAiAAAsQAAAdgOAgQgPAfgaAQQgaAQgeAAQg0AAgegpgAghhgQgOAIgHAUQgJATAAAfQAAAxAUAkQAUAlAfAAQAZAAAPgUQAQgUAAgxQAAg8gagjQgSgYgbAAQgNAAgNAIg");
	this.shape_12.setTransform(-35,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiFByQgmgvAAg+QAAgrAVgpQAagxAsgaQAmgWAxAAQATAAAPADQAPADAbALQAOAEAFAAQAFAAADgEQAEgEABgNIAJAAIAJBrIgJAAQgNgogWgUQgegdgvgBQg/AAgjA0QgcArAAA8QABAvASAoQATAoAfATQAdASAgABQASgBASgFQARgEARgKIAAhhQgBgagEgHQgEgJgHgCQgIgFgVAAIAAgJICDAAIAAAJIgHAAQgSAAgIAMQgFAKAAAbIAABnQgdAQgbAHQgcAHgjAAQhhAAgzg/g");
	this.shape_13.setTransform(-65.6,-3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("A13pNMArvAAAIAASbMgrvAAAg");
	this.shape_14.setTransform(-0.6,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("A13JOIAAybMArvAAAIAASbg");
	this.shape_15.setTransform(-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.1,-50.2,236.2,100.5);


// stage content:
(lib.ClickGame1BAlvarez = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start:0,LevelSelect:4,GameOver:12,GameLvL1:20,GameLvl3:34,GameFinished:86});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.LevelSelectBtn.addEventListener("click", fl_ClickLevelSelect.bind(this));
		
		function fl_ClickLevelSelect()
		{
			this.gotoAndStop("LevelSelect");
		}
	}
	this.frame_4 = function() {
		this.GoBackBtn.addEventListener("click", fl_ClickBack.bind(this));
		
		function fl_ClickBack()
		{
			this.gotoAndStop("Start");
		}
		
		this.Lvl1.addEventListener("click", fl_ClickLvl1.bind(this));
		
		function fl_ClickLvl1()
		{
			this.gotoAndStop("GameLvL1");
			this.StartBtn.visible = true;
		}
		
		this.Lvl2.addEventListener("click", fl_ClickLvl2.bind(this));
		
		function fl_ClickLvl2()
		{
			this.gotoAndStop("GameLvL2");
			this.StartBtn.visible = true;
		}
		
		this.Lvl2.visible = false;
		this.Lvl3.visible = false;
		this.Lvl4.visible = false;
	}
	this.frame_12 = function() {
		this.goBack.addEventListener("click", fl_ClickGoBack.bind(this));
		
		function fl_ClickGoBack()
		{
			this.gotoAndStop("LevelSelect");
		}
	}
	this.frame_20 = function() {
		var _this = this;
		var score = 0; // Create a variable to hold a number, set it to 0
		
		this.increaseScore = function() {
			score += 1;
			this.score.scoreDisplay.text = score;
		}
		
		
		function random(min, max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		};
		
		this.target.visible = false;
		
		var secondsLeft = 25;  
		this.timer.timerDisplay.text = secondsLeft;
		var timerId = setInterval(countdown.bind(this), 1000); 
		function countdown() {
			if (secondsLeft == 0) {
				clearInterval(timerId);
				this.gotoAndStop("GameOver");
			} else {
				secondsLeft--;
				this.timer.timerDisplay.text = secondsLeft;
			}
		}
		
		this.StartBtn.addEventListener("click", fl_ClickStart.bind(this));
		
		function fl_ClickStart()
		{
			this.target.visible = true;
			this.Level1.visible = false;
			this.StartBtn.visible = false;
			this.Directions.visible = false;
		}
		
		this.target.addEventListener("click", ClickToIncrease.bind(this));
		
		function ClickToIncrease()
		{
			this.increaseScore();
			this.target.x = random(0, stage.canvas.width * 0.6);
			this.target.y = random(0, stage.canvas.height * 0.6);
		}
	}
	this.frame_27 = function() {
		var secondsLeft = 25; // Creates a variable to store the seconds
		// Next line is optional - use if you have the time visible on screen
		this.countdownDisplay.text = secondsLeft; // Text field with Instance name countdownDisplay will display the seconds
		var timerId = setInterval(countdown.bind(this), 1000); // Use the setInterval to call the countdown function every 1000 ms
		
		function countdown() {
			if (secondsLeft == 0) {
				clearInterval(timerId); // Should stop the timer
				//clearInterval(moveTimer); // Should stop the timer
				this.gotoAndStop("GameOver");
			} else {
				secondsLeft--; // reduce seconds by 1
				// Next line is optional - same as above
				this.countdownDisplay.text = secondsLeft; // update the text field
			}
		}
		
		this.target.visible = false;
		
		this.StartBtn.addEventListener("click", fl_ClickStart.bind(this));
		
		function fl_ClickStart()
		{
			this.StartBtn.visible = false;
			this.target.visible = true;
			this.Level1.visible = false;
		}
		
		var _this = this;
		var score = 0; // Create a variable to hold a number, set it to 0
		
		this.increaseScore = function() {
			score += 1;
			this.scoreDisplay.text = score;
		}
		
		function random(min, max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		};
		
		this.target.addEventListener("click", ClickToIncrease.bind(this));
		
		function ClickToIncrease()
		{
			this.increaseScore();
			this.target.x = random(0, stage.canvas.width * 0.6);
			this.target.y = random(0, stage.canvas.height * 0.6);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(8).call(this.frame_12).wait(8).call(this.frame_20).wait(7).call(this.frame_27).wait(74));

	// Directions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwBWIAAgEQAQgBANgHQAOgHAMgSQANgSAFgVQgUAMgOAAQgRAAgNgNQgMgNAAgWQAAgWAMgRQAPgUAYAAQAUAAAOARQASAVAAAeQAAAbgOAYQgNAXgYAQQgTANgXAAgAgVhDQgJAJAAAUQAAAZALAOQAIAKALAAQAFAAAIgCQAIgDAGgFIACgYQAAgMgEgOQgEgOgIgHQgHgHgIAAQgLAAgIAKg");
	this.shape.setTransform(946.5,613.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdBUIAAgEQAMAAAEgCQADgCABgCQABgEAAgOIAAhZQAAgSgBgFQgBgEgCgCQgCgCgEAAQgEAAgIAEIgBgEIAmgUIAFAAIAACMQAAANABAEQABADADACQAEACAMAAIAAAEg");
	this.shape_1.setTransform(934,613.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnA6QgOgYABghQAAgbAIgVQAJgUAOgKQALgIAKAAQATAAAQAUQASAYABAoQAAAcgJAVQgIAUgNAJQgNAJgLAAQgYAAgPgcgAgOhGQgIAKgEAWQgCAWAAAVQgBAhAJAWQAHASANAAQAGAAAHgGQAIgFADgPQAFgVAAgkQAAgdgFgTQgEgOgIgGQgFgEgHAAQgHAAgHAHg");
	this.shape_2.setTransform(921.6,613.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag2BUIAAgEQArgnARgZQASgYAAgVQAAgPgKgLQgJgKgNAAQgMAAgKAHQgJAIgGANIgEAAQADgXANgLQANgNASAAQATAAAOAOQANAMAAASQAAAMgFANQgJATgVAWIglAoIArAAIASgBQAGgBADgDQAFgDADgGIAEAAIgLAgg");
	this.shape_3.setTransform(908.8,613.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyBPQgEgFAAgEQAAgGADgDQAEgDAFAAQAFAAAGACIAHACQADAAAFgDQAEgEAEgLIAIgTIgohTIgGgKIgFgGQgDgCgGgBIAAgFIA0AAIAAAFIgDAAQgFAAgCACQgEACAAAEQAAAFAFAIIAaA4IAZg9QACgFAAgFIgBgDIgDgCIgIgBIAAgFIAlAAIAAAFQgFAAgCACIgGAFIgDAJIgtBvQgGARgLAIQgLAIgKAAQgHAAgFgEg");
	this.shape_4.setTransform(890.3,619);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqAzQgIgIAAgNQAAgIAEgGQAFgJAMgHQANgGAbgLIAAgEQAAgRgFgGQgFgGgJAAQgIAAgFAEQgEAEAAAFIAAAHQAAAGgDADQgDADgEAAQgFAAgDgDQgDgDAAgGQAAgKALgJQALgJATAAQAOAAAKAFQAHAEADAIQADAFAAAQIAAAlIAAAUQAAABABABQAAABAAAAQAAABABAAQAAABAAAAIADABIAEgBIAKgJIAAAHQgOASgMAAQgGAAgEgEQgDgEgBgKIgUAQQgHADgHAAQgMAAgHgIgAgLAAQgKAFgEAGQgEAGAAAHQAAAJAFAGQAFAFAHAAQAJAAAOgMIAAgpQgRAHgFACg");
	this.shape_5.setTransform(878.9,616.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAkBTIAAgFIAGAAQAKAAAFgGQADgEgBgOIAAhuIg+CLIgEAAIhAiLIAABuQAAAPADAEQAFAFAJAAIAGAAIAAAFIg5AAIAAgFIAFAAQALAAAFgGQACgEAAgOIAAhrQAAgLgCgFQgCgDgFgDQgEgCgKAAIAAgFIAvAAIA7CBIA6iBIAvAAIAAAFIgFAAQgLAAgEAGQgDAEAAAOIAABrQAAAPADAEQAFAFAKAAIAFAAIAAAFg");
	this.shape_6.setTransform(861.8,613.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAcQAMgFAGgIQAHgJAAgIQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgCgBIgFADIgEABQgGAAgEgEQgDgDAAgGQAAgHAEgDQAFgFAGAAQAHAAAHAHQAGAHAAALQAAAMgJALQgIALgSAGg");
	this.shape_7.setTransform(841.4,622.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFBIQgFgDgDgGQgCgGAAgMIAAhKIgSAAIAAgEQAHgDAHgGQAHgHAFgIQADgFAEgMIAEAAIAAAkIAaAAIAAAJIgaAAIAABHQAAALADAEQADAEAFAAQAEAAAEgDQAEgCACgFIAFAAQgFAMgIAGQgHAGgJAAQgFAAgFgDg");
	this.shape_8.setTransform(834.9,614.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnA5IAAgEQAIAAAEgDQADgCACgEIAAgMIAAgqQAAgTgBgEQAAgEgDgCQgCgBgDAAQgEAAgEABIgCgEIAigOIAFAAIAAAZQANgZAPAAQAHAAAEAFQAFAEAAAFQAAAFgEADQgDADgEAAQgEAAgGgEQgFgEgDAAQgCAAgCACQgGAGgFALIAAA0QAAAJACAGQABADAEACQAEACAIAAIAAAEg");
	this.shape_9.setTransform(827.2,616.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAXBVIAAgFQAKAAADgDQAEgDAAgEQAAgFgFgMIgKgYIg/AAIgMAaQgEAKAAAFQAAAEAEADQADACAMABIAAAFIg0AAIAAgFQALgCADgDQAGgFAHgSIA7iIIADAAIA6CJQAHARAFAFQAGAFAKAAIAAAFgAgjAUIA4AAIgbhCg");
	this.shape_10.setTransform(813.8,613.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnA5IAAgEQAIAAAEgDQADgCACgEIAAgMIAAgqQAAgTgBgEQAAgEgDgCQgCgBgDAAQgEAAgEABIgCgEIAigOIAFAAIAAAZQANgZAPAAQAHAAAEAFQAFAEAAAFQAAAFgEADQgDADgEAAQgEAAgGgEQgFgEgDAAQgCAAgCACQgGAGgFALIAAA0QAAAJACAGQABADAEACQAEACAIAAIAAAEg");
	this.shape_11.setTransform(794.6,616.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggAsQgOgQAAgbQAAgbAOgQQAPgQAVAAQATAAAMAMQAMAMAAAVIhMAAQAAAYAMAOQAMAOAQAAQALAAAIgGQAIgGAFgOIAEACQgCARgNANQgMAOgTAAQgTAAgOgPgAgUgqQgIAIgBAOIAzAAQgBgLgCgEQgDgHgGgEQgGgEgGAAQgKAAgIAIg");
	this.shape_12.setTransform(784.8,616.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFBIQgFgDgDgGQgCgGAAgMIAAhKIgSAAIAAgEQAHgDAHgGQAHgHAFgIQADgFAEgMIAEAAIAAAkIAaAAIAAAJIgaAAIAABHQAAALADAEQADAEAFAAQAEAAAEgDQAEgCACgFIAFAAQgFAMgIAGQgHAGgJAAQgFAAgFgDg");
	this.shape_13.setTransform(775.8,614.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAXA6IAAgYQgOAQgIAEQgGAEgJAAQgJAAgHgGQgHgFgCgJQgDgIAAgQIAAgxQAAgIgCgDQgCgDgDgBQgDgCgJAAIAAgFIAnAAIAABKQAAAQAGAFQAFAFAIAAQAEAAAHgEQAGgDAJgJIAAg/QAAgJgDgDQgEgEgLAAIAAgFIAnAAIAABDQAAAUABAEQAAAEACACQACACADAAQAEAAAFgCIABAEIghAOg");
	this.shape_14.setTransform(765.9,616.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag6BUIAAgEIADAAQAHAAAFgDQACgBACgDQABgDAAgMIAAhpQAAgLgBgDQgBgDgCgBQgCgCgEAAIgIACIgBgEIAigOIAFAAIAAAaQAJgPAJgFQAHgGAKAAQARAAALANQAOAQAAAaQAAAcgRATQgOAPgUAAQgIAAgHgCQgFgCgGgGIAAAiQAAAMACADQABADADACQAEACAIAAIAAAEgAgDg/QgFACgKALIAAAqIABARQACAHAHAFQAGAGAJAAQANAAAHgKQAKgMAAgWQAAgZgLgOQgIgKgLAAQgGAAgEADg");
	this.shape_15.setTransform(753,618.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAoA5IAAgEIADAAQAHAAAEgDQADgCABgEIABgMIAAgvQAAgNgEgGQgFgIgKAAQgHAAgGADQgHADgJAKIAAABIAAAFIAAA0QAAALABAEQACACADACQAEACAIAAIAAAEIg3AAIAAgEQAJAAAEgCQADgCABgEIABgNIAAgvQAAgOgEgFQgFgJgKABQgHgBgGAEQgKAFgGAIIAAA6QAAALACAEQABADADABQADACAJAAIAAAEIg3AAIAAgEQAIAAADgCQADgBACgDQABgFAAgKIAAgqQAAgSgBgFQgBgFgCgBQgBgBgEAAQgDAAgFABIgCgEIAigOIAFAAIAAAYIAPgOQAFgFAHgCQAGgDAGAAQALAAAGAHQAIAFACAMQANgOAJgFQAIgEAJgBQAJABAHAEQAHAEAEALQADAHAAAPIAAAvQAAAKABAFQACACADACQADACAIAAIAAAEg");
	this.shape_16.setTransform(737.5,616.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoAnQgNgRAAgVQAAgOAHgQQAIgPAMgHQANgHANAAQAaAAAPATQANAQAAAWQAAAOgIAPQgGAQgNAHQgNAIgPAAQgZAAgOgUgAgQgvQgHAEgEAKQgDAKAAAPQAAAXAKASQAJASAPAAQALAAAJgKQAHgKAAgYQAAgdgNgRQgIgLgNAAQgGAAgHADg");
	this.shape_17.setTransform(721.5,616.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag5A4QgQgXgBgeQABgYAKgVQAMgVAUgLQASgMAXAAQARAAASAJIAHADQAEAAACgCQAEgEAAgGIAFAAIAEA5IgEAAQgHgagOgLQgPgLgTAAQgQAAgNAJQgOAIgHASQgIATAAAaQABAWAGARQAIAQAPAJQAOAJARAAQAQAAAMgHQANgHAPgVIAEADQgNAWgQAKQgRALgXAAQgoAAgXgfg");
	this.shape_18.setTransform(707,613.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAGA5IAAgEIACAAQAIAAADgCQADgCABgGIABgLIAAgtQAAgPgEgGQgEgIgJABQgOgBgOARIAAA5QAAALABAEQACADADABQADACAJAAIAAAEIg3AAIAAgEIACAAQAJAAADgEQADgFAAgMIAAgoQAAgUgBgFQgBgEgCgCQgCgBgDAAQgEAAgEABIgCgEIAhgOIAGAAIAAAYQATgXARgBQAJABAHAEQAGAEAEALQADAHAAAQIAAAuQAAALACAEQABACADACQADACAIAAIAAAEg");
	this.shape_19.setTransform(686.1,616.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZBXIAAgFQAHAAAEgBQADgCABgDQACgEAAgLIAAgrQAAgSgCgEIgCgGQgCgBgDAAQgDAAgFACIgCgFIAggNIAGAAIAABYQAAALACAEQABADADACQADABAIAAIAAAFgAgHhBQgEgDAAgGQAAgFAEgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAGgDADQgEAEgFAAQgFAAgDgEg");
	this.shape_20.setTransform(676.5,613.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgyA4IAAgFIBJhiIgkAAQgLAAgEACQgDACgDAEQgDAGAAAJIgFAAIAAgfIBdAAIAAAFIhKBiIAoAAQANAAAEgDQAEgCADgFQADgDABgNIAEAAIgCAig");
	this.shape_21.setTransform(952.1,586.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggAsQgOgQAAgbQAAgbAOgQQAPgQAVAAQATAAAMAMQAMAMAAAVIhMAAQAAAYAMAOQAMAOAQAAQALAAAIgGQAIgGAFgOIAEACQgCARgNANQgMAOgTAAQgTAAgOgPgAgUgqQgIAIgBAOIAzAAQgBgLgCgEQgDgHgGgEQgGgEgGAAQgKAAgIAIg");
	this.shape_22.setTransform(941,586.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgnA6IAAgFQAIAAAEgDQADgCACgEIAAgMIAAgqQAAgUgBgDQAAgEgDgCQgCgCgDAAQgEAAgEACIgCgEIAigOIAFAAIAAAaQANgaAPAAQAHAAAEAFQAFAEAAAFQAAAFgEADQgDADgEABQgEgBgGgEQgFgEgDAAQgCAAgCACQgGAGgFALIAAA0QAAAJACAGQABADAEACQAEACAIAAIAAAFg");
	this.shape_23.setTransform(931.3,586.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgqAzQgIgIAAgNQAAgIAEgGQAFgJAMgHQANgGAbgLIAAgEQAAgRgFgGQgFgGgJAAQgIAAgFAEQgEAEAAAFIAAAHQAAAGgDADQgDADgEAAQgFAAgDgDQgDgDAAgGQAAgKALgJQALgJATAAQAOAAAKAFQAHAEADAIQADAFAAAQIAAAlIAAAUQAAABABABQAAABAAAAQAAABABAAQAAABAAAAIADABIAEgBIAKgJIAAAHQgOASgMAAQgGAAgEgEQgDgEgBgKIgUAQQgHADgHAAQgMAAgHgIgAgLAAQgKAFgEAGQgEAGAAAHQAAAJAFAGQAFAFAHAAQAJAAAOgMIAAgpQgRAHgFACg");
	this.shape_24.setTransform(921.9,586.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAA6IgoheQgCgGgDgDQgCgDgEgCIgIgCIAAgFIA0AAIAAAFIgDAAQgFAAgCACQgDADAAADQAAAFADAGIAZA8IAag/QADgHAAgDIgBgDQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCgBgGAAIAAgFIAkAAIAAAFQgGAAgCADQgFADgDAJIgoBfg");
	this.shape_25.setTransform(909.6,586.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgaBXIAAgFQAIAAADgBQADgCACgDQABgEAAgLIAAhkQAAgTgBgEQgBgFgBgBQgDgCgCAAIgJACIgBgEIAggOIAFAAIAACTQABALABADQACAEADACQADABAIAAIAAAFg");
	this.shape_26.setTransform(900.1,583.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAXBVIAAgFQAKAAADgDQAEgDAAgEQAAgFgFgMIgKgYIg/AAIgMAaQgEAKAAAFQAAAEAEADQADACAMABIAAAFIg0AAIAAgFQALgCADgDQAGgFAHgSIA7iIIADAAIA6CJQAHARAFAFQAGAFAKAAIAAAFgAgjAUIA4AAIgbhCg");
	this.shape_27.setTransform(887.4,583.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhKBTIAAgFIAHAAQALAAAEgGQADgFAAgOIAAhpQAAgQgEgEQgFgFgJAAIgHAAIAAgFIBIAAQATAAANADQARAFAKALQAKALAAAOQAAANgHAKQgJAKgOAEQARADAIAIQANALAAAQQAAANgIALQgIALgOAGQgOAFgbAAgAgSACIgIABIAABEQAOADANAAQAWAAALgKQAMgKAAgOQABgKgGgJQgFgJgMgFQgMgFgQAAIgOAAgAgahHIAABAIAKABIANAAQARAAAJgDQAJgEAEgIQAGgIAAgKQgBgOgLgKQgMgLgWAAQgMAAgKADg");
	this.shape_28.setTransform(863.4,583.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgJA3QgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQADAEAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEgAgIgjQgFgEAAgGQAAgGAFgDQADgEAFAAQAGAAAEAEQAEADAAAGQAAAGgEAEQgEAEgGAAQgFAAgDgEg");
	this.shape_29.setTransform(845.8,586.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgyBPQgEgFAAgEQgBgGAEgDQAEgDAFAAQAEAAAHACIAGACQAEAAAEgDQAEgEAFgLIAIgTIgohTIgGgKIgFgGQgDgCgGgBIAAgFIA0AAIAAAFIgCAAQgGAAgCACQgEADAAADQABAFAEAIIAaA4IAZg9QACgFAAgFIgBgDIgDgCIgHgBIAAgFIAkAAIAAAFQgEAAgDACIgGAFIgDAJIgtBvQgGARgLAIQgLAIgKAAQgHAAgFgEg");
	this.shape_30.setTransform(836.1,589.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgSBVQgKgDgKgIIAAhzQAAgSgBgFQgCgEgCgCQgCgBgCAAQgEAAgFABIgBgEIAhgOIAGAAIAABRQAPgWATAAQAQAAANAOQAOAPAAAZQAAAegVASQgQAQgWAAQgIgBgKgDgAgGgJQgFADgHAGIAABDQAFAGAHAEQAGADAHAAQALgBAJgLQAKgNAAgXQAAgVgKgLQgJgMgMAAQgGAAgGADg");
	this.shape_31.setTransform(823.1,583.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAUBZIAAgRQgJAJgHAEQgHADgJABQgTAAgNgQQgOgPAAgYQABgYAPgTQAOgUAYAAQAOAAAKAJIAAgVQAAgSgBgFQgBgEgCgCQgCgBgDAAIgIABIgCgEIAigOIAFAAIAACBQAAATABAEQABAFACACQAAAAABAAQABABAAAAQABAAAAAAQABAAAAAAQAEAAAFgBIABADIggAPgAgYgMQgLAMAAAYQAAAYALAOQAKANAOAAQAJAAALgLIAAg5QgBgIgEgHQgEgGgFgEQgGgDgFAAQgLgBgIAKg");
	this.shape_32.setTransform(805.3,583.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AggAsQgOgQAAgbQAAgbAOgQQAPgQAVAAQATAAAMAMQAMAMAAAVIhMAAQAAAYAMAOQAMAOAQAAQALAAAIgGQAIgGAFgOIAEACQgCARgNANQgMAOgTAAQgTAAgOgPgAgUgqQgIAIgBAOIAzAAQgBgLgCgEQgDgHgGgEQgGgEgGAAQgKAAgIAIg");
	this.shape_33.setTransform(793.1,586.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFBIQgFgDgDgGQgCgGAAgMIAAhKIgSAAIAAgEQAHgDAHgGQAHgHAFgIQADgFAEgMIAEAAIAAAkIAaAAIAAAJIgaAAIAABHQAAALADAEQADAEAFAAQAEAAAEgDQAEgCACgFIAFAAQgFAMgIAGQgHAGgJAAQgFAAgFgDg");
	this.shape_34.setTransform(784.1,584.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgqAzQgIgIAAgNQAAgIAEgGQAFgJAMgHQANgGAbgLIAAgEQAAgRgFgGQgFgGgJAAQgIAAgFAEQgEAEAAAFIAAAHQAAAGgDADQgDADgEAAQgFAAgDgDQgDgDAAgGQAAgKALgJQALgJATAAQAOAAAKAFQAHAEADAIQADAFAAAQIAAAlIAAAUQAAABABABQAAABAAAAQAAABABAAQAAABAAAAIADABIAEgBIAKgJIAAAHQgOASgMAAQgGAAgEgEQgDgEgBgKIgUAQQgHADgHAAQgMAAgHgIgAgLAAQgKAFgEAGQgEAGAAAHQAAAJAFAGQAFAFAHAAQAJAAAOgMIAAgpQgRAHgFACg");
	this.shape_35.setTransform(775.4,586.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AggAsQgOgQAAgbQAAgbAOgQQAPgQAVAAQATAAAMAMQAMAMAAAVIhMAAQAAAYAMAOQAMAOAQAAQALAAAIgGQAIgGAFgOIAEACQgCARgNANQgMAOgTAAQgTAAgOgPgAgUgqQgIAIgBAOIAzAAQgBgLgCgEQgDgHgGgEQgGgEgGAAQgKAAgIAIg");
	this.shape_36.setTransform(764,586.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnA6IAAgFQAIAAAEgDQADgCACgEIAAgMIAAgqQAAgUgBgDQAAgEgDgCQgCgCgDAAQgEAAgEACIgCgEIAigOIAFAAIAAAaQANgaAPAAQAHAAAEAFQAFAEAAAFQAAAFgEADQgDADgEABQgEgBgGgEQgFgEgDAAQgCAAgCACQgGAGgFALIAAA0QAAAJACAGQABADAEACQAEACAIAAIAAAFg");
	this.shape_37.setTransform(754.3,586.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AggArQgOgQAAgbQAAgZAQgRQAPgQAVAAQARAAAKAIQALAJAAAJQAAAFgDADQgDADgFAAQgIAAgDgFQgCgCgBgIQgBgHgEgEQgEgDgIAAQgLAAgIAJQgJAMAAATQAAATAJAQQAKAPAQAAQAMAAAJgIQAHgGAGgOIAEABQgEAWgOAMQgNAMgQAAQgSAAgOgQg");
	this.shape_38.setTransform(744.4,586.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AggAsQgOgQAAgbQAAgbAOgQQAPgQAVAAQATAAAMAMQAMAMAAAVIhMAAQAAAYAMAOQAMAOAQAAQALAAAIgGQAIgGAFgOIAEACQgCARgNANQgMAOgTAAQgTAAgOgPgAgUgqQgIAIgBAOIAzAAQgBgLgCgEQgDgHgGgEQgGgEgGAAQgKAAgIAIg");
	this.shape_39.setTransform(727.2,586.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAoA6IAAgFIADAAQAHAAAEgDQADgCABgEIABgMIAAgvQAAgNgEgGQgFgIgKAAQgHAAgGADQgHADgJAKIAAABIAAAFIAAA0QAAAMABADQACACADACQAEACAIAAIAAAFIg3AAIAAgFQAJAAAEgCQADgCABgEIABgNIAAgvQAAgOgEgFQgFgJgKABQgHgBgGAEQgKAFgGAIIAAA6QAAALACAEQABADADABQADACAJAAIAAAFIg3AAIAAgFQAIAAADgCQADgBACgDQABgFAAgKIAAgqQAAgSgBgFQgBgFgCgBQgBgBgEgBQgDAAgFACIgCgEIAigOIAFAAIAAAYIAPgOQAFgFAHgCQAGgCAGgBQALAAAGAHQAIAFACAMQANgOAJgFQAIgEAJgBQAJABAHAEQAHAFAEAKQADAHAAAPIAAAvQAAAKABAFQACACADACQADACAIAAIAAAFg");
	this.shape_40.setTransform(711.8,586.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgqAzQgIgIAAgNQAAgIAEgGQAFgJAMgHQANgGAbgLIAAgEQAAgRgFgGQgFgGgJAAQgIAAgFAEQgEAEAAAFIAAAHQAAAGgDADQgDADgEAAQgFAAgDgDQgDgDAAgGQAAgKALgJQALgJATAAQAOAAAKAFQAHAEADAIQADAFAAAQIAAAlIAAAUQAAABABABQAAABAAAAQAAABABAAQAAABAAAAIADABIAEgBIAKgJIAAAHQgOASgMAAQgGAAgEgEQgDgEgBgKIgUAQQgHADgHAAQgMAAgHgIgAgLAAQgKAFgEAGQgEAGAAAHQAAAJAFAGQAFAFAHAAQAJAAAOgMIAAgpQgRAHgFACg");
	this.shape_41.setTransform(696.9,586.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhBA4QgSgXAAgeQAAgVAKgUQAMgYAWgNQASgLAZAAQAJAAAHACIAVAGIAJADQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABgCABgHIAEAAIAFA1IgFAAQgGgUgLgKQgOgOgXAAQgfAAgQAZQgOAVAAAdQAAAXAJAUQAJATAPAJQAPAJAOAAQAJAAAJgCQAIgCAIgFIAAgwQABgMgCgEQgCgEgEgBQgEgCgKAAIAAgFIBAAAIAAAFIgDAAQgKAAgDAFQgDAFABANIAAAzQgOAHgOAEQgOAEgRAAQguAAgagfg");
	this.shape_42.setTransform(682.2,583.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgKAMQgGgFAAgHQAAgGAGgEQAFgFAFAAQAHAAAEAFQAFAEABAGQgBAHgFAFQgEAEgHAAQgFAAgFgEg");
	this.shape_43.setTransform(535.8,281.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAYBqIAAgTQgKAKgJAFQgJAEgLAAQgVAAgRgSQgQgSAAgdQAAgdASgXQASgYAdAAQAQAAAMALIAAgZQAAgXgBgFQgBgFgDgCQgCgCgDAAQgEAAgHACIgCgFIAogQIAHAAIAACaQAAAYABAFQABAFADACQACACADAAQAEAAAHgCIABAFIgnAQgAgdgOQgNAOAAAdQAAAeAMAQQANAPAQAAQAMAAANgNIAAhFQgBgJgEgIQgFgJgHgEQgHgEgGAAQgNAAgKAMg");
	this.shape_44.setTransform(525.1,272.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_45.setTransform(510.5,276.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAYBqIAAgTQgKAKgJAFQgJAEgLAAQgVAAgRgSQgQgSAAgdQAAgdASgXQASgYAdAAQAQAAAMALIAAgZQAAgXgBgFQgBgFgDgCQgCgCgDAAQgEAAgHACIgCgFIAogQIAHAAIAACaQAAAYABAFQABAFADACQACACADAAQAEAAAHgCIABAFIgnAQgAgdgOQgNAOAAAdQAAAeAMAQQANAPAQAAQAMAAANgNIAAhFQgBgJgEgIQgFgJgHgEQgHgEgGAAQgNAAgKAMg");
	this.shape_46.setTransform(496.8,272.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAYBqIAAgTQgKAKgJAFQgJAEgLAAQgVAAgRgSQgQgSAAgdQAAgdASgXQASgYAdAAQAQAAAMALIAAgZQAAgXgBgFQgBgFgDgCQgCgCgDAAQgEAAgHACIgCgFIAogQIAHAAIAACaQAAAYABAFQABAFADACQACACADAAQAEAAAHgCIABAFIgnAQgAgdgOQgNAOAAAdQAAAeAMAQQANAPAQAAQAMAAANgNIAAhFQgBgJgEgIQgFgJgHgEQgHgEgGAAQgNAAgKAMg");
	this.shape_47.setTransform(481.8,272.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgzA9QgJgKAAgPQAAgKAFgHQAFgKAPgJQAQgIAhgNIAAgEQAAgVgGgHQgHgHgLAAQgJgBgGAGQgFAEAAAHIAAAIQAAAHgEAEQgDADgGAAQgFAAgDgDQgEgEABgHQAAgNAMgKQANgKAXAAQASgBALAHQAIAEAEAJQADAHAAATIAAAtQAAATABAFQABAEACABQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAIAEgCQAEgBAIgJIAAAIQgRAWgPAAQgHAAgEgFQgEgFAAgMQgUAQgFACQgIAEgJABQgOAAgJgKgAgOAAQgLAHgFAGQgFAIAAAIQAAAKAGAHQAHAIAHAAQAMgBARgPIAAgyIgcAMg");
	this.shape_48.setTransform(467.6,276.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_49.setTransform(446.4,276.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgWBmQgMgEgMgJIAAiKQAAgXgBgFQgBgFgDgCQgDgCgDAAQgEAAgGACIgCgFIAogQIAGAAIAABhQAUgbAVAAQAWAAAOASQAQARAAAeQAAAkgYAWQgUASgZAAQgLAAgMgEgAgIgKQgFADgKAIIAABQQAIAHAIAEQAHAEAIAAQAOAAAMgPQALgPAAgcQAAgZgLgNQgMgOgPAAQgHAAgIAEg");
	this.shape_50.setTransform(431.6,272.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgfBoIAAgFQAKAAADgCQADgCACgEQACgFAAgMIAAh5QAAgXgBgFQgBgFgCgCQgCgCgEAAIgKACIgCgFIAngQIAHAAIAACxQAAANABAEQACAEAEACQAEACAKAAIAAAFg");
	this.shape_51.setTransform(413.1,272.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgfBoIAAgFQAKAAADgCQADgCACgEQACgFAAgMIAAh5QAAgXgBgFQgBgFgCgCQgDgCgDAAIgKACIgCgFIAngQIAGAAIAACxQAAANACAEQACAEAEACQAEACAKAAIAAAFg");
	this.shape_52.setTransform(404.8,272.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgeBoIAAgFQAJAAADgCQAEgCACgEQACgFAAgMIAAg0QAAgWgBgFQgBgFgCgBQgDgCgEAAQgEAAgFACIgCgFIAmgRIAHAAIAABrQAAANACAEQACAEAEACQADACAJAAIAAAFgAgJhOQgEgEAAgGQAAgGAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_53.setTransform(396.4,272.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAlBFIgihUIgmBUIgGAAIgrhvQgEgMgEgDQgFgEgIgCIAAgFIA4AAIAAAFQgHABgDACQgCACAAAFQAAAEACAHIAdBLIAcg+IgHgTQgEgJgFgDQgEgCgIgBIAAgFIA+AAIAAAFQgKAAgEAEQgDADAAAFIABAFIAfBMIAchIQACgIAAgGQABgCgDgCQgDgCgIgBIAAgFIAqAAIAAAFQgNACgGAPIgtBzg");
	this.shape_54.setTransform(381.3,276.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgGBXQgGgEgEgHQgCgHAAgOIAAhaIgWAAIAAgFQAJgDAIgHQAIgIAHgLQAEgFAFgPIAEAAIAAAsIAfAAIAAAKIgfAAIAABWQAAANAEAFQAEAEAFAAQAFAAAFgCQAEgEADgFIAFAAQgFAOgJAHQgKAHgJAAQgHAAgGgDg");
	this.shape_55.setTransform(359,274.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_56.setTransform(348.1,276.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BZQgLgIAAgHIACgIQACgFAIgKIAPgPQgIgFgDgDQgDgEAAgFQAAgFAEgHQAEgHAQgLQgNgGgGgLQgHgLAAgNQAAgUAPgOQAPgOAXAAQATAAAOAJIAcAAIAHAAIACACQAAAAAAAAQAAABAAAAQABABAAABQAAAAAAABIgBAGIgBABIgIAAIgRAAQAIALAAAQQAAATgOANQgPAOgXAAQgKAAgKgDQgHAFgCADQgCAFAAACQAAADACACQADADAHABIAUABQAdAAAJACQAOACAIAIQAIAIAAAMQAAARgPAOQgXAVgkAAQgcAAgUgMgAgqAzQgEAGAAAGQAAAHAJAFQAOAJAbAAQAaAAANgJQAMgKAAgKQAAgIgHgDQgIgDgWgBQgggBgSgCQgHAHgDAHgAgXhVQgHAJAAASQAAAXAJANQAIAJAMAAQAKAAAHgIQAHgIAAgSQAAgYgKgNQgHgJgLAAQgLAAgHAIg");
	this.shape_57.setTransform(334,279.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgwBFIAAgGQALAAAEgCQAEgDACgFQABgDAAgLIAAgzQAAgYgBgEQgCgEgCgCQgDgCgEAAQgEAAgGACIgBgGIApgQIAFAAIAAAeQARgeARAAQAIAAAGAFQAFAEAAAHQAAAGgEAEQgEADgFABQgFgBgGgEQgHgGgDABQgCAAgDADQgIAFgGAOIAAA/QAAAMADAFQACAFAEACQAFADAJgBIAAAGg");
	this.shape_58.setTransform(321.5,276);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgyA9QgKgKAAgPQAAgKAEgHQAHgKAPgJQAOgIAigNIAAgEQAAgVgHgHQgGgHgLAAQgJgBgFAGQgGAEAAAHIAAAIQAAAHgDAEQgEADgFAAQgGAAgDgDQgEgEAAgHQAAgNANgKQANgKAYAAQAQgBALAHQAJAEAFAJQACAHAAATIAAAtQAAATABAFQAAAEACABQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIAEgCQADgBAJgJIAAAIQgQAWgPAAQgIAAgDgFQgFgFAAgMQgUAQgFACQgIAEgJABQgOAAgIgKgAgOAAQgLAHgFAGQgFAIAAAIQAAAKAGAHQAGAIAJAAQAKgBASgPIAAgyIgcAMg");
	this.shape_59.setTransform(310.2,276.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgqBjIAAgFIAHAAQANAAAFgIQADgEAAgRIAAiXIgXAAQgOAAgGACQgIADgGAIQgFAIgBANIgFAAIACguIChAAIACAuIgFAAQgCgMgDgFQgEgJgHgEQgIgEgMAAIgcAAIAACXQAAASADAFQAGAGAMAAIAHAAIAAAFg");
	this.shape_60.setTransform(293.9,273);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAkBFIghhUIgnBUIgFAAIgrhvQgEgMgEgDQgFgEgIgCIAAgFIA4AAIAAAFQgIABgCACQgDACAAAFQAAAEADAHIAdBLIAcg+IgHgTQgEgJgFgDQgDgCgJgBIAAgFIA+AAIAAAFQgKAAgFAEQgCADAAAFIABAFIAfBMIAchIQACgIAAgGQAAgCgCgCQgDgCgJgBIAAgFIArAAIAAAFQgNACgGAPIgtBzg");
	this.shape_61.setTransform(266.3,276.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_62.setTransform(249,276.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAHBFIAAgGIADAAQAJABAEgDQAEgDABgFIABgPIAAg2QAAgRgFgJQgFgIgLAAQgQAAgSATIAABFQAAAOACADQACAFAEACQADACALgBIAAAGIhCAAIAAgGIADAAQAKAAAEgEQADgFAAgQIAAgwQAAgYgBgFQgBgGgCgBQgDgCgDAAQgFAAgFACIgCgGIAogQIAGAAIAAAdQAYgdAUAAQALAAAIAFQAIAGAFAMQADAJAAASIAAA4QAAAOACAEQACADADACQAEACAJAAIAAAGg");
	this.shape_63.setTransform(234.7,276);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgyA9QgKgKAAgPQAAgKAEgHQAGgKAPgJQAPgIAigNIAAgEQAAgVgHgHQgGgHgLAAQgJgBgGAGQgFAEAAAHIAAAIQAAAHgEAEQgDADgGAAQgFAAgDgDQgDgEgBgHQAAgNANgKQANgKAYAAQAQgBAMAHQAIAEAEAJQADAHAAATIAAAtQAAATABAFQABAEACABQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAIAEgCQADgBAJgJIAAAIQgRAWgOAAQgHAAgFgFQgEgFAAgMQgUAQgFACQgIAEgJABQgOAAgIgKgAgNAAQgMAHgFAGQgFAIAAAIQAAAKAGAHQAHAIAIAAQAKgBASgPIAAgyIgbAMg");
	this.shape_64.setTransform(213.6,276.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgaBDIgIgCQgDAAgCAEIgFAAIAAgwIAFAAQAEAVALAKQAMAKANAAQALAAAGgFQAGgHAAgIQAAgKgHgHQgHgGgUgLQgVgKgHgIQgHgIAAgNQAAgRAMgLQALgLASAAQAHAAALADIAKACIAEgBIADgEIAFAAIAAAuIgFAAQgGgWgIgIQgJgHgMgBQgLAAgGAGQgGAFAAAHQAAAIAEAGQAFAGAOAGIAUALQAeANAAAZQAAARgOAMQgOALgRAAQgLAAgQgEg");
	this.shape_65.setTransform(193.3,276.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgeBoIAAgFQAIAAAEgCQADgCADgEQABgFAAgMIAAh5QAAgXgBgFQgBgFgCgCQgCgCgEAAIgJACIgDgFIAngQIAGAAIAACxQABANACAEQABAEAEACQAEACAKAAIAAAFg");
	this.shape_66.setTransform(183.2,272.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_67.setTransform(172.4,276.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAABFIgwhwIgGgMQgDgDgEgCIgKgDIAAgFIA/AAIAAAFIgEAAQgGAAgDADQgDADAAAFQAAAEADAIIAeBJIAghMQADgIAAgFQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgDIgKgBIAAgFIArAAIAAAFQgHABgDADQgFADgEALIgwByg");
	this.shape_68.setTransform(158.1,276.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_69.setTransform(144.1,276.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgeBoIAAgFQAIAAAEgCQADgCADgEQABgFAAgMIAAh5QAAgXgBgFQgBgFgCgCQgDgCgDAAIgJACIgDgFIAngQIAGAAIAACxQABANACAEQABAEAEACQAEACAKAAIAAAFg");
	this.shape_70.setTransform(133.3,272.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgxBfQgIgGAAgHQAAgFADgCQAEgEAFAAQAEAAADACIAJAFQALAIAMAAQAQAAANgNQANgNAAgTQAAgRgMgQQgLgPgUgIQgQgHgbgBIAmhNIBGAAIgLAZIg7AAIgNAaQAmAGAWAXQAUAUAAAaQAAAQgHANQgGANgKAKQgJAJgMAGQgQAIgSAAQgSAAgIgGg");
	this.shape_71.setTransform(113.7,273.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAHBoIAAgFIAEAAQAIAAAEgDQAEgDACgFIAAgOIAAgwQAAgWgCgFQgDgHgEgEQgGgDgHAAQgHAAgGAEQgJADgKALIAABHQAAAOACADQABADAEADQAEACAKAAIAAAFIhCAAIAAgFQAJAAAFgDQADgBACgEQABgEABgNIAAh5QAAgXgBgFQgCgFgCgCQgCgCgEAAIgKACIgCgFIAogQIAHAAIAABiQAQgSAJgFQAJgFAKAAQALAAAIAGQAJAHADANQADAJAAAYIAAAwQAAANACAEQACAEADACQAEACAJAAIAAAFg");
	this.shape_72.setTransform(91.5,272.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgnA0QgQgUAAggQAAgeASgUQATgUAaAAQATAAANALQANAKAAALQgBAFgDAEQgEADgGAAQgIABgFgGQgCgDgCgIQAAgKgFgEQgGgFgJABQgNAAgJALQgMAOAAAXQAAAYAMASQAMATASAAQAPgBAMgJQAIgHAHgSIAEACQgFAbgQAOQgPAOgUAAQgWAAgRgTg");
	this.shape_73.setTransform(77.4,276.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgzA9QgJgKAAgPQAAgKAFgHQAFgKAPgJQAQgIAhgNIAAgEQAAgVgGgHQgHgHgLAAQgJgBgGAGQgFAEAAAHIAAAIQAAAHgEAEQgDADgGAAQgFAAgDgDQgDgEAAgHQgBgNANgKQANgKAXAAQASgBALAHQAIAEAEAJQADAHAAATIAAAtQAAATABAFQABAEACABQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAIAEgCQAEgBAIgJIAAAIQgQAWgQAAQgGAAgFgFQgEgFAAgMQgUAQgFACQgIAEgJABQgOAAgJgKgAgNAAQgMAHgFAGQgFAIAAAIQAAAKAGAHQAHAIAHAAQAMgBARgPIAAgyIgbAMg");
	this.shape_74.setTransform(64.5,276.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhUBjIAAgFIAHAAQAHAAAGgEQAFgCACgFQABgEAAgPIAAiAQAAgTgDgEQgGgGgMAAIgHAAIAAgFICYAAIACArIgGAAQgDgQgDgFQgEgGgHgDQgGgDgPAAIg2AAIAABPIArAAQARAAAGgFQAHgHABgRIAGAAIAABEIgGAAQgCgOgCgEQgCgFgGgDQgGgDgNAAIgrAAIAABBQAAANACADQABADADACQADABAIAAIAhAAQAQAAAIgCQAIgCAHgHQAJgJAJgTIAGAAIgRAyg");
	this.shape_75.setTransform(48.1,273);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AglALIAAgVIBLAAIAAAVg");
	this.shape_76.setTransform(34,276.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAEgEQAGgFAFAAQAHAAAFAFQAEAEABAGQgBAHgEAFQgFAEgHAAQgFAAgGgEg");
	this.shape_77.setTransform(84.4,246.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAUALALQAMALANAAQALgBAGgGQAGgFAAgJQAAgKgHgGQgHgIgUgKQgVgJgHgJQgHgJAAgNQAAgQAMgLQALgLASAAQAHAAALADIAKACIAEgBIADgEIAFAAIAAAuIgFAAQgGgWgIgHQgJgJgMABQgLgBgGAGQgGAFAAAHQAAAIAEAGQAFAGAOAHIAUAKQAeANAAAYQAAASgOAMQgOALgRAAQgLAAgQgFg");
	this.shape_78.setTransform(75,241);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ag8BfQgFgFAAgHQAAgGADgEQAFgEAHAAQAEAAAJAEIAHACQAFAAAFgFQAFgEAFgNIAKgYIgwhkIgIgLQgDgFgDgCQgDgCgHgCIAAgFIA+AAIAAAFIgDAAQgGAAgDADQgEADAAAEQAAAGAFAKIAfBDIAfhKQACgGAAgGIgBgDQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgDgBgGAAIAAgFIArAAIAAAFIgIACIgGAHIgGALIg1CFQgIAUgNAKQgNAJgMAAQgIAAgGgEg");
	this.shape_79.setTransform(61.5,244.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgyA9QgKgKAAgQQAAgJAEgIQAHgJAPgJQAOgIAigMIAAgGQAAgUgHgHQgGgIgLAAQgJABgFAFQgGAFAAAFIAAAJQAAAHgDADQgEAFgFAAQgGAAgDgFQgEgEAAgGQAAgMANgLQANgLAYAAQAQABALAFQAJAFAFAKQACAGAAATIAAAtQAAATABAEQAAAFACABQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIAEgBQADgCAJgJIAAAIQgQAWgPAAQgIAAgDgFQgFgFAAgMQgUAQgFADQgIAEgJgBQgOAAgIgJgAgOAAQgLAGgFAIQgFAGAAAJQAAALAGAGQAGAIAJgBQAKABASgQIAAgxIgcALg");
	this.shape_80.setTransform(47.8,240.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAUALALQAMALANAAQALgBAGgGQAGgFAAgJQAAgKgHgGQgHgIgUgKQgVgJgHgJQgHgJAAgNQAAgQAMgLQALgLASAAQAHAAALADIAKACIAEgBIADgEIAFAAIAAAuIgFAAQgGgWgIgHQgJgJgMABQgLgBgGAGQgGAFAAAHQAAAIAEAGQAFAGAOAHIAUAKQAeANAAAYQAAASgOAMQgOALgRAAQgLAAgQgFg");
	this.shape_81.setTransform(35,241);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgeBoIAAgFQAIAAAEgCQADgCADgEQABgFAAgMIAAh5QAAgXgBgFQgBgFgCgCQgDgCgDAAIgJACIgDgFIAngQIAGAAIAACxQABANACAEQABAEAEACQAEACAKAAIAAAFg");
	this.shape_82.setTransform(937.9,202);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_83.setTransform(927,205.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAABFIgwhwIgGgMQgDgDgEgDIgKgCIAAgFIA/AAIAAAFIgEAAQgGAAgDADQgDADAAAEQAAAGADAHIAeBJIAghMQADgJAAgEQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgDIgKgBIAAgFIArAAIAAAFQgHABgDADQgFADgEALIgwByg");
	this.shape_84.setTransform(912.7,205.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_85.setTransform(898.7,205.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgeBoIAAgFQAIAAAEgCQADgCADgEQABgFAAgMIAAh5QAAgXgBgFQgBgFgCgCQgDgCgDAAIgJACIgDgFIAngQIAGAAIAACxQABANACAEQABAEAEACQAEACAKAAIAAAFg");
	this.shape_86.setTransform(887.9,202);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAHBoIAAgFIAEAAQAIAAAEgDQAEgDACgFIAAgOIAAgwQAAgWgCgFQgDgHgEgEQgGgDgHAAQgHAAgGAEQgJADgKALIAABHQAAAOACADQABADAEADQAEACAKAAIAAAFIhCAAIAAgFQAJAAAFgDQADgBACgEQABgEAAgNIAAh5QAAgXAAgFQgCgFgCgCQgCgCgEAAIgKACIgCgFIAogQIAHAAIAABiQAQgSAJgFQAJgFAKAAQALAAAIAGQAJAHADANQADAJAAAYIAAAwQAAANACAEQABAEAEACQADACAKAAIAAAFg");
	this.shape_87.setTransform(868.6,202);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgnA0QgQgTAAghQAAgfASgUQATgTAaAAQATAAANAKQANALAAALQgBAGgDADQgEADgGAAQgIAAgFgFQgDgDgBgJQAAgIgFgFQgGgEgJgBQgNABgJAKQgMAPAAAYQAAAWAMATQAMASASAAQAPAAALgKQAJgHAHgRIAEACQgFAagQAPQgPAOgUAAQgWAAgRgTg");
	this.shape_88.setTransform(854.5,205.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgzA9QgJgKAAgQQAAgJAFgHQAFgKAPgJQAQgIAhgNIAAgEQAAgVgHgHQgGgIgLABQgJAAgGAEQgFAGAAAFIAAAJQAAAHgEAEQgDADgGAAQgFAAgDgDQgDgFgBgGQAAgNANgKQANgKAXAAQASAAALAFQAIAFAEAKQADAGAAAUIAAAsQAAATABAEQABAFACABQAAAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIAEgBQAEgBAIgJIAAAIQgQAWgQAAQgHAAgEgFQgEgFAAgMQgUAQgFADQgIADgJAAQgOAAgJgJgAgNAAQgMAGgFAIQgFAHAAAIQAAAKAGAIQAHAGAHAAQAMAAARgOIAAgzIgbAMg");
	this.shape_89.setTransform(841.7,205.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_90.setTransform(828,205.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_91.setTransform(807.2,205.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAxBFIAAgFIACAAQAJAAAFgDQADgDACgFIAAgPIAAg4QAAgRgEgGQgFgKgNAAQgIAAgIAFQgHADgMALIAAABIAAAGIAAA/QAAAOACAEQABADAFADQAEACAKAAIAAAFIhDAAIAAgFQAMgBAEgCQAEgCACgGIAAgPIAAg4QAAgQgFgIQgGgJgMAAQgIAAgHAFQgMAFgHAJIAABGQAAAOACAEQACAEADACQAEABALABIAAAFIhDAAIAAgFQAKgBADgBQAEgCACgEQACgFAAgNIAAgyQAAgWgCgGQgBgFgCgBQgCgDgEAAQgEAAgGADIgCgGIApgQIAGAAIAAAcIARgRQAHgFAHgDQAIgDAIAAQAMAAAIAHQAJAHADAOQAPgRALgFQAKgGALAAQALAAAIAGQAJAFAEANQAEAIAAASIAAA4QAAANABAFQACADAEADQAEACAJAAIAAAFg");
	this.shape_92.setTransform(788.8,205.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgeBoIAAgFQAJAAADgCQAEgCACgEQACgFAAgMIAAg0QAAgWgCgFQAAgFgCgBQgDgCgEAAQgEAAgFACIgCgFIAmgRIAHAAIAABrQAAANACAEQACAEAEACQADACAJAAIAAAFgAgJhOQgEgEAAgGQAAgGAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_93.setTransform(773,202);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgGBXQgGgEgDgHQgDgHAAgOIAAhaIgWAAIAAgFQAJgDAIgHQAIgIAHgLQADgFAGgPIAEAAIAAAsIAfAAIAAAKIgfAAIAABWQAAANAEAFQAEAEAFAAQAFAAAFgCQAEgEADgFIAFAAQgFAOgJAHQgKAHgKAAQgGAAgGgDg");
	this.shape_94.setTransform(764.8,203.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_95.setTransform(746.4,205.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAHBoIAAgFIADAAQAJAAAFgDQADgDABgFIABgOIAAgwQAAgWgCgFQgDgHgFgEQgFgDgGAAQgIAAgHAEQgIADgKALIAABHQAAAOABADQACADAEADQAEACAKAAIAAAFIhCAAIAAgFQAJAAAFgDQADgBABgEQACgEAAgNIAAh5QAAgXgBgFQgBgFgCgCQgDgCgDAAIgKACIgCgFIAogQIAHAAIAABiQAQgSAJgFQAJgFAKAAQALAAAIAGQAIAHAFANQACAJAAAYIAAAwQAAANACAEQACAEADACQADACAKAAIAAAFg");
	this.shape_96.setTransform(732.1,202);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgGBXQgGgEgEgHQgDgHAAgOIAAhaIgUAAIAAgFQAHgDAJgHQAJgIAGgLQAEgFAEgPIAFAAIAAAsIAfAAIAAAKIgfAAIAABWQAAANADAFQAEAEAGAAQAFAAAEgCQAFgEACgFIAHAAQgGAOgJAHQgJAHgKAAQgHAAgGgDg");
	this.shape_97.setTransform(720.6,203.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgvBFIAAgFQAJAAAFgDQAFgDAAgFQABgCAAgMIAAgzQAAgYgBgEQgBgFgCgBQgDgDgDAAQgFAAgFADIgCgGIAogQIAHAAIAAAeQAQgeARAAQAJAAAEAFQAGAFAAAGQAAAGgEAEQgEADgFAAQgFABgHgFQgGgGgDAAQgCAAgEAEQgHAFgFAPIAAA/QAAALACAGQABADAFADQAFACAJABIAAAFg");
	this.shape_98.setTransform(704,205.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_99.setTransform(692.2,205.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAYBqIAAgTQgKAKgJAFQgJAEgLAAQgVAAgRgSQgQgSAAgdQAAgdASgXQASgYAdAAQAQAAAMALIAAgZQAAgXgBgFQgBgFgDgCQgCgCgDAAIgLACIgCgFIAogQIAHAAIAACaQAAAYABAFQABAFADACQACACADAAQAEAAAHgCIABAFIgnAQgAgdgOQgNAOAAAdQAAAeAMAQQANAPAQAAQAMAAANgNIAAhFQgBgJgEgIQgFgJgHgEQgHgEgGAAQgNAAgKAMg");
	this.shape_100.setTransform(678.5,202.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAHBFIAAgFIADAAQAJgBAEgCQAEgDABgFIABgPIAAg2QAAgSgFgIQgFgIgLAAQgQAAgSATIAABFQAAAPACADQACAEAEACQADABALABIAAAFIhCAAIAAgFIADAAQAKAAAEgGQADgFAAgPIAAgwQAAgYgBgGQgBgFgCgBQgDgDgDAAQgFAAgFADIgCgGIAogQIAGAAIAAAcQAYgcAUAAQALAAAIAGQAIAFAFANQADAIAAATIAAA3QAAANACAFQACAEADACQAEACAJAAIAAAFg");
	this.shape_101.setTransform(663,205.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAcBFIAAgcQgSASgJAFQgIAFgJAAQgMAAgIgHQgIgGgEgKQgDgLAAgSIAAg7QAAgKgCgEQgCgDgEgCQgEgCgKAAIAAgFIAvAAIAABZQAAASAGAGQAHAGAIAAQAGAAAIgEQAIgEALgLIAAhLQAAgMgEgDQgFgFgMAAIAAgFIAtAAIAABQQAAAXABAGQABAFACACQADACAEAAQAEAAAGgCIABAEIgnARg");
	this.shape_102.setTransform(648,205.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAHBFIAAgFIADAAQAJgBAEgCQAEgDABgFIABgPIAAg2QAAgSgFgIQgFgIgLAAQgQAAgSATIAABFQAAAPACADQACAEAEACQADABALABIAAAFIhCAAIAAgFIADAAQAKAAAEgGQADgFAAgPIAAgwQAAgYgBgGQgBgFgCgBQgDgDgDAAQgFAAgFADIgCgGIAogQIAGAAIAAAcQAYgcAUAAQALAAAIAGQAIAFAFANQADAIAAATIAAA3QAAANACAFQACAEADACQAEACAJAAIAAAFg");
	this.shape_103.setTransform(625.5,205.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgeBoIAAgFQAJAAADgCQAEgCACgEQACgFAAgMIAAg0QAAgWgBgFQgCgFgCgBQgCgCgDAAQgFAAgFACIgDgFIAogRIAGAAIAABrQAAANACAEQACAEADACQAEACAKAAIAAAFgAgJhOQgEgEAAgGQAAgGAEgFQAEgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_104.setTransform(613.9,202);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgGBXQgGgEgEgHQgCgHAAgOIAAhaIgVAAIAAgFQAHgDAJgHQAIgIAHgLQAEgFAEgPIAFAAIAAAsIAfAAIAAAKIgfAAIAABWQAAANAEAFQADAEAGAAQAFAAAEgCQAFgEADgFIAGAAQgGAOgJAHQgJAHgKAAQgHAAgGgDg");
	this.shape_105.setTransform(598.1,203.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_106.setTransform(587.2,205.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("Ag4BZQgLgIAAgHIACgIQACgFAIgKIAPgPQgIgFgDgDQgDgEAAgFQAAgFAEgHQAEgHAQgLQgNgGgGgLQgHgLAAgNQAAgUAPgOQAPgOAXAAQATAAAOAJIAcAAIAHAAIACACQAAAAAAAAQAAABAAAAQABABAAABQAAAAAAABIgBAGIgBABIgIAAIgRAAQAIALAAAQQAAATgOANQgPAOgXAAQgKAAgKgDQgHAFgCADQgCAFAAACQAAADACACQADADAHABIAUABQAdAAAJACQAOACAIAIQAIAIAAAMQAAARgPAOQgXAVgkAAQgcAAgUgMgAgqAzQgEAGAAAGQAAAHAJAFQAOAJAbAAQAaAAANgJQAMgKAAgKQAAgIgHgDQgIgDgWgBQgggBgSgCQgHAHgDAHgAgXhVQgHAJAAASQAAAXAJANQAIAJAMAAQAKAAAHgIQAHgIAAgSQAAgYgKgNQgHgJgLAAQgLAAgHAIg");
	this.shape_107.setTransform(573.1,208.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAHBFIAAgFIADAAQAJgBAEgCQAEgDABgFIABgPIAAg2QAAgSgFgIQgFgIgLAAQgQAAgSATIAABFQAAAPACADQACAEAEACQADABALABIAAAFIhCAAIAAgFIADAAQAKAAAEgGQADgFAAgPIAAgwQAAgYgBgGQgBgFgCgBQgDgDgDAAQgFAAgFADIgCgGIAogQIAGAAIAAAcQAYgcAUAAQALAAAIAGQAIAFAFANQADAIAAATIAAA3QAAANACAFQACAEADACQAEACAJAAIAAAFg");
	this.shape_108.setTransform(550.5,205.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgzA9QgJgKAAgQQAAgJAFgHQAFgKAQgJQAOgIAigNIAAgEQAAgVgGgHQgHgIgLABQgJAAgGAEQgFAGAAAFIAAAJQAAAHgEAEQgDADgGAAQgFAAgDgDQgEgFABgGQAAgNAMgKQANgKAXAAQASAAAKAFQAKAFAEAKQACAGAAAUIAAAsQAAATABAEQAAAFADABQAAAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIAEgBQAEgBAIgJIAAAIQgRAWgPAAQgGAAgFgFQgEgFAAgMQgUAQgFADQgIADgJAAQgOAAgJgJgAgOAAQgLAGgFAIQgFAHAAAIQAAAKAGAIQAHAGAHAAQAMAAARgOIAAgzIgcAMg");
	this.shape_109.setTransform(536.8,205.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgnA0QgQgTAAghQAAgfASgUQATgTAZAAQAUAAANAKQANALgBALQAAAGgDADQgEADgGAAQgJAAgEgFQgDgDAAgJQgBgIgFgFQgFgEgKgBQgNABgJAKQgMAPAAAYQAAAWAMATQAMASASAAQAPAAALgKQAJgHAHgRIAEACQgFAagQAPQgQAOgTAAQgWAAgRgTg");
	this.shape_110.setTransform(523.1,205.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAcBFIAAgcQgSASgJAFQgHAFgLAAQgLAAgIgHQgJgGgDgKQgDgLAAgSIAAg7QAAgKgCgEQgCgDgEgCQgEgCgKAAIAAgFIAvAAIAABZQAAASAGAGQAHAGAIAAQAGAAAIgEQAIgEALgLIAAhLQAAgMgEgDQgFgFgMAAIAAgFIAtAAIAABQQAAAXABAGQABAFACACQADACAEAAQAEAAAFgCIACAEIgnARg");
	this.shape_111.setTransform(501.4,205.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgxAvQgPgVAAgZQAAgRAKgTQAJgRAPgKQAPgIAPAAQAfAAASAXQAQAUAAAaQAAAQgJATQgIATgQAJQgPAJgRAAQgfAAgSgYgAgTg4QgIAFgFALQgEAMAAASQAAAcALAVQAMAWASAAQAOAAAJgMQAKgMAAgcQAAgjgQgUQgKgOgPgBQgIABgIAEg");
	this.shape_112.setTransform(486.3,205.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("Ag8BfQgGgFAAgHQAAgGAFgEQADgEAHAAQAFAAAJAEIAHACQAEAAAGgFQAFgEAGgNIAJgYIgxhkIgHgLQgDgFgCgCQgEgCgHgCIAAgFIA/AAIAAAFIgEAAQgHAAgDADQgDADAAAEQAAAGAFAKIAgBDIAdhKQADgGAAgGIgBgDQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQgCgBgHAAIAAgFIAsAAIAAAFIgIACIgHAHIgEALIg2CFQgIAUgNAKQgNAJgLAAQgJAAgGgEg");
	this.shape_113.setTransform(471.4,208.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_114.setTransform(449.8,205.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgvBFIAAgFQAJAAAFgDQAEgDACgFQABgCAAgMIAAgzQAAgYgBgEQgBgFgDgBQgCgDgEAAQgFAAgFADIgCgGIApgQIAGAAIAAAeQAQgeARAAQAIAAAGAFQAFAFAAAGQAAAGgEAEQgEADgFAAQgFABgGgFQgHgGgDAAQgDAAgDAEQgGAFgGAPIAAA/QAAALACAGQACADAEADQAFACAJABIAAAFg");
	this.shape_115.setTransform(438.3,205.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgxAvQgPgVAAgZQAAgRAKgTQAJgRAPgKQAPgIAPAAQAfAAASAXQAQAUAAAaQAAAQgJATQgIATgQAJQgPAJgRAAQgfAAgSgYgAgTg4QgIAFgFALQgEAMAAASQAAAcALAVQAMAWASAAQAOAAAJgMQAKgMAAgcQAAgjgQgUQgKgOgPgBQgIABgIAEg");
	this.shape_116.setTransform(425.5,205.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgnA0QgQgTAAghQAAgfASgUQATgTAZAAQAUAAANAKQAMALAAALQAAAGgDADQgEADgGAAQgJAAgEgFQgDgDAAgJQgBgIgFgFQgFgEgKgBQgNABgJAKQgMAPAAAYQAAAWAMATQAMASASAAQAPAAALgKQAJgHAHgRIAEACQgFAagQAPQgQAOgTAAQgWAAgRgTg");
	this.shape_117.setTransform(411.5,205.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAVALAKQAMAKANAAQALABAGgHQAGgFAAgJQAAgKgHgGQgHgIgUgKQgVgJgHgJQgHgIAAgOQAAgQAMgLQALgLASAAQAHAAALADIAKADIAEgBIADgFIAFAAIAAAtIgFAAQgGgVgIgHQgJgJgMAAQgLABgGAFQgGAGAAAGQAAAIAEAGQAFAGAOAGIAUALQAeAOAAAXQAAATgOALQgOALgRAAQgLAAgQgFg");
	this.shape_118.setTransform(399.1,205.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgFBXQgHgEgDgHQgEgHAAgOIAAhaIgVAAIAAgFQAJgDAIgHQAJgIAGgLQADgFAGgPIAEAAIAAAsIAfAAIAAAKIgfAAIAABWQAAANADAFQAFAEAFAAQAFAAAFgCQAEgEACgFIAGAAQgFAOgJAHQgKAHgKAAQgGAAgFgDg");
	this.shape_119.setTransform(381.6,203.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAVALAKQAMAKANAAQALABAGgHQAGgFAAgJQAAgKgHgGQgHgIgUgKQgVgJgHgJQgHgIAAgOQAAgQAMgLQALgLASAAQAHAAALADIAKADIAEgBIADgFIAFAAIAAAtIgFAAQgGgVgIgHQgJgJgMAAQgLABgGAFQgGAGAAAGQAAAIAEAGQAFAGAOAGIAUALQAeAOAAAXQAAATgOALQgOALgRAAQgLAAgQgFg");
	this.shape_120.setTransform(371.6,205.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_121.setTransform(359.1,205.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAHBoIAAgFIAEAAQAIAAAEgDQAEgDACgFIAAgOIAAgwQAAgWgCgFQgDgHgEgEQgGgDgHAAQgHAAgGAEQgJADgKALIAABHQAAAOACADQABADAEADQAEACAKAAIAAAFIhCAAIAAgFQAJAAAFgDQADgBACgEQABgEAAgNIAAh5QABgXgBgFQgCgFgCgCQgCgCgEAAIgKACIgCgFIAogQIAHAAIAABiQAQgSAJgFQAJgFAKAAQALAAAIAGQAJAHADANQADAJAAAYIAAAwQAAANACAEQACAEADACQAEACAJAAIAAAFg");
	this.shape_122.setTransform(344.8,202);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("Ag4BZQgLgIAAgHIACgIQACgFAIgKIAPgPQgIgFgDgDQgDgEAAgFQAAgFAEgHQAEgHAQgLQgNgGgGgLQgHgLAAgNQAAgUAPgOQAPgOAXAAQATAAAOAJIAcAAIAHAAIACACQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAGIgBABIgIAAIgRAAQAIALAAAQQAAATgOANQgPAOgXAAQgKAAgKgDQgHAFgCADQgCAFAAACQAAADACACQADADAHABIAUABQAdAAAJACQAOACAIAIQAIAIAAAMQAAARgPAOQgXAVgkAAQgcAAgUgMgAgqAzQgEAGAAAGQAAAHAJAFQAOAJAbAAQAaAAANgJQAMgKAAgKQAAgIgHgDQgIgDgWgBQgggBgSgCQgHAHgDAHgAgXhVQgHAJAAASQAAAXAJANQAIAJAMAAQAKAAAHgIQAHgIAAgSQAAgYgKgNQgHgJgLAAQgLAAgHAIg");
	this.shape_123.setTransform(330,208.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgeBoIAAgFQAJAAAEgCQADgCACgEQACgFAAgMIAAg0QAAgWgBgFQgCgFgCgBQgCgCgDAAQgFAAgFACIgDgFIAogRIAGAAIAABrQAAANACAEQACAEADACQAEACAKAAIAAAFgAgJhOQgEgEAAgGQAAgGAEgFQAEgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_124.setTransform(318.2,202);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAHBoIAAgFIAEAAQAIAAAEgDQAEgDACgFIAAgOIAAgwQAAgWgDgFQgCgHgEgEQgGgDgHAAQgHAAgGAEQgJADgKALIAABHQAAAOACADQABADAEADQAEACALAAIAAAFIhDAAIAAgFQAJAAAFgDQADgBACgEQACgEAAgNIAAh5QAAgXgBgFQgBgFgDgCQgDgCgDAAIgKACIgCgFIAogQIAHAAIAABiQAQgSAJgFQAJgFAKAAQALAAAIAGQAJAHADANQADAJAAAYIAAAwQAAANACAEQABAEAEACQADACAKAAIAAAFg");
	this.shape_125.setTransform(306.5,202);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_126.setTransform(284.9,205.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAHBoIAAgFIAEAAQAJAAADgDQAEgDACgFIAAgOIAAgwQAAgWgCgFQgDgHgEgEQgFgDgHAAQgIAAgGAEQgJADgKALIAABHQAAAOABADQACADAEADQAEACAKAAIAAAFIhCAAIAAgFQAJAAAFgDQADgBACgEQABgEAAgNIAAh5QAAgXAAgFQgCgFgCgCQgCgCgEAAIgKACIgCgFIAogQIAHAAIAABiQAQgSAJgFQAJgFAKAAQALAAAIAGQAJAHADANQADAJAAAYIAAAwQAAANACAEQACAEADACQAEACAJAAIAAAFg");
	this.shape_127.setTransform(270.7,202);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgGBXQgGgEgEgHQgCgHAAgOIAAhaIgWAAIAAgFQAIgDAJgHQAIgIAHgLQAEgFAEgPIAFAAIAAAsIAfAAIAAAKIgfAAIAABWQAAANAEAFQADAEAGAAQAFAAAEgCQAFgEADgFIAFAAQgFAOgJAHQgKAHgJAAQgHAAgGgDg");
	this.shape_128.setTransform(259.2,203.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgGBXQgGgEgEgHQgCgHAAgOIAAhaIgWAAIAAgFQAJgDAIgHQAIgIAHgLQAEgFAFgPIAEAAIAAAsIAfAAIAAAKIgfAAIAABWQAAANAEAFQAEAEAFAAQAFAAAFgCQAEgEADgFIAFAAQgFAOgJAHQgJAHgKAAQgHAAgGgDg");
	this.shape_129.setTransform(243.3,203.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_130.setTransform(232.4,205.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("Ag4BZQgLgIAAgHIACgIQACgFAIgKIAPgPQgIgFgDgDQgDgEAAgFQAAgFAEgHQAEgHAQgLQgNgGgGgLQgHgLAAgNQAAgUAPgOQAPgOAXAAQATAAAOAJIAcAAIAHAAIACACQAAAAAAAAQAAABAAAAQABABAAABQAAAAAAABIgBAGIgBABIgIAAIgRAAQAIALAAAQQAAATgOANQgPAOgXAAQgKAAgKgDQgHAFgCADQgCAFAAACQAAADACACQADADAHABIAUABQAdAAAJACQAOACAIAIQAIAIAAAMQAAARgPAOQgXAVgkAAQgcAAgUgMgAgqAzQgEAGAAAGQAAAHAJAFQAOAJAbAAQAaAAANgJQAMgKAAgKQAAgIgHgDQgIgDgWgBQgggBgSgCQgHAHgDAHgAgXhVQgHAJAAASQAAAXAJANQAIAJAMAAQAKAAAHgIQAHgIAAgSQAAgYgKgNQgHgJgLAAQgLAAgHAIg");
	this.shape_131.setTransform(218.3,208.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgxAvQgPgVAAgZQAAgRAKgTQAJgRAPgKQAPgIAPAAQAfAAASAXQAQAUAAAaQAAAQgJATQgIATgQAJQgPAJgRAAQgfAAgSgYgAgTg4QgIAFgFALQgEAMAAASQAAAcALAVQAMAWASAAQAOAAAJgMQAKgMAAgcQAAgjgQgUQgKgOgPgBQgIABgIAEg");
	this.shape_132.setTransform(195.6,205.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgFBXQgHgEgDgHQgDgHgBgOIAAhaIgVAAIAAgFQAJgDAIgHQAJgIAGgLQADgFAGgPIAEAAIAAAsIAfAAIAAAKIgfAAIAABWQAAANAEAFQAEAEAFAAQAFAAAFgCQAEgEACgFIAGAAQgFAOgJAHQgKAHgKAAQgGAAgFgDg");
	this.shape_133.setTransform(184.2,203.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAVALAKQAMAKANAAQALABAGgHQAGgFAAgJQAAgKgHgGQgHgIgUgKQgVgJgHgJQgHgIAAgOQAAgQAMgLQALgLASAAQAHAAALADIAKADIAEgBIADgFIAFAAIAAAtIgFAAQgGgVgIgHQgJgJgMAAQgLABgGAFQgGAGAAAGQAAAIAEAGQAFAGAOAGIAUALQAeAOAAAXQAAATgOALQgOALgRAAQgLAAgQgFg");
	this.shape_134.setTransform(166.7,205.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgfBoIAAgFQAKAAAEgCQADgCACgEQACgFAAgMIAAg0QAAgWgBgFQgCgFgCgBQgCgCgDAAQgFAAgGACIgCgFIAogRIAGAAIAABrQAAANACAEQACAEADACQAEACAKAAIAAAFgAgIhOQgFgEAAgGQAAgGAFgFQADgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_135.setTransform(156.6,202);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgeBoIAAgFQAJAAADgCQAEgCACgEQABgFAAgMIAAh5QAAgXgBgFQgBgFgCgCQgCgCgEAAIgJACIgDgFIAngQIAHAAIAACxQAAANABAEQACAEAEACQAEACAKAAIAAAFg");
	this.shape_136.setTransform(140.8,202);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgyA9QgKgKAAgQQAAgJAFgHQAFgKAPgJQAPgIAigNIAAgEQAAgVgHgHQgGgIgLABQgJAAgGAEQgFAGAAAFIAAAJQAAAHgEAEQgDADgGAAQgFAAgDgDQgDgFgBgGQAAgNANgKQANgKAYAAQAQAAAMAFQAIAFAEAKQADAGAAAUIAAAsQAAATABAEQABAFACABQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAIAEgBQADgBAJgJIAAAIQgRAWgOAAQgHAAgFgFQgEgFAAgMQgUAQgFADQgIADgJAAQgOAAgIgJgAgNAAQgMAGgFAIQgFAHAAAIQAAAKAGAIQAHAGAIAAQAKAAASgOIAAgzIgbAMg");
	this.shape_137.setTransform(130.3,205.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgxAvQgPgVAAgZQAAgRAKgTQAJgRAPgKQAPgIAPAAQAfAAASAXQAQAUAAAaQAAAQgJATQgIATgQAJQgPAJgRAAQgfAAgSgYgAgTg4QgIAFgFALQgEAMAAASQAAAcALAVQAMAWASAAQAOAAAJgMQAKgMAAgcQAAgjgQgUQgKgOgPgBQgIABgIAEg");
	this.shape_138.setTransform(115.6,205.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("Ag4BZQgLgIAAgHIACgIQACgFAIgKIAPgPQgIgFgDgDQgDgEAAgFQAAgFAEgHQAEgHAQgLQgNgGgGgLQgHgLAAgNQAAgUAPgOQAPgOAXAAQATAAAOAJIAcAAIAHAAIACACQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAGIgBABIgIAAIgRAAQAIALAAAQQAAATgOANQgPAOgXAAQgKAAgKgDQgHAFgCADQgCAFAAACQAAADACACQADADAHABIAUABQAdAAAJACQAOACAIAIQAIAIAAAMQAAARgPAOQgXAVgkAAQgcAAgUgMgAgqAzQgEAGAAAGQAAAHAJAFQAOAJAbAAQAaAAANgJQAMgKAAgKQAAgIgHgDQgIgDgWgBQgggBgSgCQgHAHgDAHgAgXhVQgHAJAAASQAAAXAJANQAIAJAMAAQAKAAAHgIQAHgIAAgSQAAgYgKgNQgHgJgLAAQgLAAgHAIg");
	this.shape_139.setTransform(100.8,208.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_140.setTransform(79.1,205.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAHBoIAAgFIADAAQAJAAAFgDQADgDABgFIABgOIAAgwQAAgWgCgFQgCgHgGgEQgFgDgGAAQgIAAgHAEQgIADgKALIAABHQAAAOABADQACADAEADQAEACALAAIAAAFIhDAAIAAgFQAJAAAFgDQADgBABgEQACgEAAgNIAAh5QAAgXgBgFQAAgFgDgCQgDgCgDAAIgKACIgCgFIAogQIAHAAIAABiQAQgSAJgFQAJgFAJAAQAMAAAIAGQAIAHAFANQACAJAAAYIAAAwQAAANACAEQACAEADACQADACAKAAIAAAFg");
	this.shape_141.setTransform(64.9,202);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgqBjIAAgFIAHAAQANAAAFgIQADgEAAgRIAAiXIgYAAQgNAAgHACQgHADgFAIQgGAIgBANIgGAAIADguIChAAIADAuIgHAAQgBgMgCgFQgFgJgIgEQgHgEgNAAIgcAAIAACXQAAASAFAFQAFAGALAAIAHAAIAAAFg");
	this.shape_142.setTransform(48.3,202.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AglALIAAgVIBLAAIAAAVg");
	this.shape_143.setTransform(34,205.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgKAMQgGgFAAgHQAAgGAGgEQAEgFAGAAQAHAAAEAFQAGAEAAAGQAAAHgGAFQgFAEgGAAQgGAAgEgEg");
	this.shape_144.setTransform(382.6,175.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgaBDIgIgCQgDAAgCAEIgFAAIAAgwIAFAAQAEAVALAKQAMAKANAAQALAAAGgFQAGgHAAgIQAAgKgHgHQgHgGgUgLQgVgKgHgIQgHgIAAgNQAAgRAMgLQALgLASAAQAHAAALADIAKACIAEAAIADgFIAFAAIAAAuIgFAAQgGgWgIgIQgJgHgMgBQgLAAgGAGQgGAFAAAHQAAAIAEAGQAFAGAOAGIAUALQAeANAAAZQAAARgOAMQgOALgRAAQgLAAgQgEg");
	this.shape_145.setTransform(373.2,170.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgfBoIAAgFQAKAAADgCQAEgCABgEQACgFAAgMIAAh5QAAgXgBgFQgBgFgCgCQgDgCgDAAIgKACIgCgFIAngQIAGAAIAACxQAAANADAEQABAEAEACQAEACAKAAIAAAFg");
	this.shape_146.setTransform(363.1,166.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_147.setTransform(352.3,170.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAABFIgwhwIgGgMQgDgDgEgCIgKgDIAAgFIA/AAIAAAFIgEAAQgGAAgDADQgDADAAAFQAAAEADAHIAeBKIAghMQADgIAAgFQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgDIgKgBIAAgFIArAAIAAAFQgHABgDADQgFADgEALIgwByg");
	this.shape_148.setTransform(338,170.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_149.setTransform(324,170.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgfBoIAAgFQAKAAADgCQAEgCABgEQACgFAAgMIAAh5QAAgXgBgFQgBgFgCgCQgDgCgDAAIgKACIgCgFIAngQIAGAAIAACxQAAANADAEQABAEAEACQAEACAKAAIAAAFg");
	this.shape_150.setTransform(313.2,166.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgFBXQgHgEgDgHQgEgHAAgOIAAhaIgUAAIAAgFQAHgDAJgHQAIgIAHgLQADgFAFgPIAFAAIAAAsIAfAAIAAAKIgfAAIAABWQAAANADAFQAEAEAGAAQAFAAAEgCQAFgEACgFIAHAAQgGAOgJAHQgJAHgLAAQgGAAgFgDg");
	this.shape_151.setTransform(297.4,168.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAHBFIAAgGIADAAQAJABAEgDQAEgDABgFIABgPIAAg2QAAgRgFgJQgFgIgLAAQgQAAgSATIAABFQAAAOACADQACAFAEACQADACALgBIAAAGIhCAAIAAgGIADAAQAKAAAEgEQADgFAAgQIAAgwQAAgYgBgFQgBgGgCgBQgDgCgDAAQgFAAgFACIgCgGIAogQIAGAAIAAAdQAYgdAUAAQALAAAIAFQAIAGAFAMQADAJAAASIAAA4QAAAOACAEQACADADACQAEACAJAAIAAAGg");
	this.shape_152.setTransform(285.5,170.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_153.setTransform(271.5,170.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgvBFIAAgGQAJAAAGgCQADgDABgFQABgDAAgLIAAgzQAAgYgBgEQgBgEgCgCQgDgCgEAAQgEAAgFACIgCgGIAogQIAHAAIAAAeQAPgeASAAQAJAAAEAFQAGAEAAAHQAAAGgEAEQgEADgFABQgFgBgHgEQgGgGgDABQgDAAgDACQgHAGgFAOIAAA/QAAAMACAFQABAFAFACQAFADAJgBIAAAGg");
	this.shape_154.setTransform(259.9,170.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_155.setTransform(248.2,170.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("Ag6BoIAAgGIAHAAQAFABAFgDQAFgDACgFQABgFABgOIAAhYIgaAAIAAgKIAaAAIAAgJQAAgUAGgOQAGgOAOgIQAMgJARAAQAPAAANAKQAIAHAAAHQAAAFgDAEQgEAEgEAAQgEAAgDgCQgEgDgGgIQgFgIgFgDQgEgCgGAAQgGAAgFADQgEADgCAJQgCAHAAAfIAAAKIAhAAIAAAKIghAAIAABYQAAASAEAGQAFAFAJAAIAMAAIAAAGg");
	this.shape_156.setTransform(238.5,166.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("Ag5BoIAAgGIAGAAQAGABAEgDQAFgDACgFQACgFAAgOIAAhYIgaAAIAAgKIAaAAIAAgJQgBgUAHgOQAGgOAOgIQAMgJARAAQAPAAANAKQAIAHAAAHQABAFgEAEQgEAEgEAAQgEAAgDgCQgEgDgGgIQgFgIgFgDQgEgCgGAAQgGAAgFADQgEADgCAJQgCAHAAAfIAAAKIAhAAIAAAKIghAAIAABYQAAASAEAGQAFAFAIAAIANAAIAAAGg");
	this.shape_157.setTransform(228.5,166.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgfBoIAAgFQAKAAAEgCQADgCACgEQACgFAAgMIAAg0QAAgWgBgFQgCgFgCgBQgCgCgDAAQgFAAgGACIgCgFIAogRIAGAAIAABrQAAANACAEQACAEADACQAEACAKAAIAAAFgAgIhOQgFgEAAgGQAAgGAFgFQADgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_158.setTransform(217.3,166.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAYBqIAAgTQgKAKgJAFQgJAEgLAAQgVAAgRgSQgQgSAAgdQAAgdASgXQASgYAdAAQAQAAAMALIAAgZQAAgXgBgFQgBgFgDgCQgCgCgDAAQgEAAgHACIgCgFIAogQIAHAAIAACaQAAAYABAFQABAFADACQACACADAAQAEAAAHgCIABAFIgnAQgAgdgOQgNAOAAAdQAAAeAMAQQANAPAQAAQAMAAANgNIAAhFQgBgJgEgIQgFgJgHgEQgHgEgGAAQgNAAgKAMg");
	this.shape_159.setTransform(206.1,166.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgvBFQgQgcAAgoQAAggAKgZQAKgYARgMQANgKANAAQAXAAASAXQAXAdAAAxQAAAigKAYQgKAYgPALQgQALgNAAQgdAAgSgigAgRhTQgKAMgEAZQgEAaAAAZQAAApAKAaQAJAWAQAAQAHAAAJgHQAIgHAFgRQAGgaAAgsQAAgigHgXQgFgRgIgHQgGgEgJAAQgJgBgIAKg");
	this.shape_160.setTransform(183.1,167.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AhBBlIAAgFQA0gvAUgeQAVgdABgZQAAgTgMgMQgMgMgPAAQgOAAgMAJQgMAIgGARIgFAAQAEgbAPgPQAPgOAXAAQAXAAARAPQAPAQAAAVQAAAPgGAPQgLAXgZAaIgsAwIAyAAQARAAAGgBQAGgBAFgEQAFgDAEgHIAGAAIgPAmg");
	this.shape_161.setTransform(167.8,167);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_162.setTransform(146.5,170.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgvBFIAAgGQAJAAAFgCQAFgDABgFQABgDAAgLIAAgzQAAgYgBgEQgBgEgDgCQgCgCgEAAQgFAAgFACIgCgGIApgQIAGAAIAAAeQAQgeARAAQAJAAAFAFQAFAEAAAHQAAAGgEAEQgEADgFABQgFgBgGgEQgHgGgDABQgDAAgDACQgGAGgGAOIAAA/QAAAMACAFQACAFAEACQAFADAJgBIAAAGg");
	this.shape_163.setTransform(135,170.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgzA9QgJgKAAgPQAAgKAFgHQAGgKAPgJQAOgIAigNIAAgEQAAgVgGgHQgHgHgLAAQgJgBgGAGQgFAEAAAHIAAAIQAAAHgDAEQgEADgFAAQgGAAgDgDQgEgEABgHQAAgNAMgKQANgLAXAAQASAAAKAHQAJAEAFAJQACAHAAATIAAAtQAAATABAFQABAEABABQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIAEgCQADgBAJgJIAAAIQgRAWgPAAQgGAAgEgFQgFgFAAgMQgUAQgFACQgIAFgJAAQgOAAgJgKgAgOAAQgLAHgFAGQgFAIAAAIQAAAKAGAIQAHAHAHAAQAMgBARgPIAAgyIgcAMg");
	this.shape_164.setTransform(123.6,170.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_165.setTransform(102.4,170.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgvBFIAAgGQAJAAAFgCQAFgDABgFQABgDAAgLIAAgzQAAgYgBgEQgBgEgDgCQgCgCgEAAQgFAAgFACIgCgGIApgQIAGAAIAAAeQAQgeARAAQAJAAAFAFQAFAEAAAHQAAAGgEAEQgEADgFABQgFgBgGgEQgHgGgDABQgDAAgDACQgGAGgGAOIAAA/QAAAMACAFQACAFAEACQAFADAJgBIAAAGg");
	this.shape_166.setTransform(90.9,170.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_167.setTransform(79.1,170.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAHBoIAAgFIADAAQAJAAAFgDQADgDABgFIABgOIAAgwQAAgWgCgFQgCgHgGgEQgFgDgGAAQgIAAgHAEQgIADgKALIAABHQAAAOABADQACADAEADQAEACALAAIAAAFIhDAAIAAgFQAJAAAFgDQADgBABgEQACgEAAgNIAAh5QAAgXgBgFQAAgFgDgCQgDgCgDAAIgKACIgCgFIAogQIAHAAIAABiQAQgSAJgFQAJgFAJAAQAMAAAIAGQAIAHAFANQACAJAAAYIAAAwQAAANACAEQACAEADACQADACAKAAIAAAFg");
	this.shape_168.setTransform(64.9,166.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgqBjIAAgFIAHAAQANAAAFgIQADgEAAgRIAAiXIgYAAQgNAAgHACQgHADgFAIQgGAIgBANIgGAAIADguIChAAIADAuIgHAAQgBgMgCgFQgFgJgIgEQgHgEgNAAIgcAAIAACXQAAASAFAFQAFAGALAAIAHAAIAAAFg");
	this.shape_169.setTransform(48.3,167.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AglALIAAgVIBLAAIAAAVg");
	this.shape_170.setTransform(34,170.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgLBDQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgFAFQgEAEgHAAQgGAAgFgEgAgKgqQgFgFAAgHQAAgHAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgFAEgHAAQgGAAgEgEg");
	this.shape_171.setTransform(158.2,135.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAUALALQAMALANAAQALgBAGgGQAGgFAAgJQAAgKgHgGQgHgIgUgKQgVgJgHgJQgHgJAAgNQAAgQAMgLQALgLASAAQAHAAALADIAKACIAEgBIADgEIAFAAIAAAuIgFAAQgGgWgIgHQgJgJgMABQgLgBgGAGQgGAFAAAHQAAAIAEAGQAFAGAOAHIAUAKQAeANAAAYQAAASgOAMQgOALgRAAQgLAAgQgFg");
	this.shape_172.setTransform(148.3,135.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAHBFIAAgFIADAAQAJAAAEgDQAEgDABgGIABgNIAAg2QAAgTgFgIQgFgIgLAAQgQAAgSATIAABGQAAANACAEQACAEAEACQADACALAAIAAAFIhCAAIAAgFIADAAQAKgBAEgFQADgEAAgPIAAgxQAAgZgBgFQgBgFgCgCQgDgCgDABQgFgBgFACIgCgEIAogRIAGAAIAAAcQAYgcAUAAQALAAAIAFQAIAGAFAMQADAJAAASIAAA5QAAANACAEQACADADACQAEACAJABIAAAFg");
	this.shape_173.setTransform(134.8,135);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgxAvQgPgUAAgaQAAgRAKgSQAJgTAPgIQAPgJAPAAQAfAAASAXQAQAUAAAZQAAASgJASQgIASgQAKQgPAJgRAAQgfAAgSgYgAgTg4QgIAEgFAMQgEAMAAASQAAAcALAVQAMAWASgBQAOABAJgMQAKgLAAgdQAAgjgQgVQgKgOgPABQgIAAgIAEg");
	this.shape_174.setTransform(119.8,135.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgfBoIAAgFQAKAAAEgCQADgCACgEQACgFAAgMIAAg0QAAgWgCgFQgBgFgBgBQgDgCgEAAQgEAAgGACIgCgFIAngRIAHAAIAABrQAAANACAEQACAEAEACQADACAJAAIAAAFgAgIhOQgFgEAAgGQAAgGAFgFQAEgEAFAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_175.setTransform(108.2,131.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgGBXQgGgEgEgHQgCgHAAgOIAAhaIgVAAIAAgFQAHgDAJgHQAJgIAGgLQAEgFAEgPIAFAAIAAAsIAfAAIAAAKIgfAAIAABWQAAANADAFQAEAEAGAAQAFAAAEgCQAFgEADgFIAGAAQgGAOgJAHQgJAHgKAAQgHAAgGgDg");
	this.shape_176.setTransform(100,133.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgnA0QgRgTAAghQAAgfATgTQATgUAZAAQAUAAANAKQAMALAAALQABAFgEAEQgDADgHABQgIgBgFgFQgCgDgBgIQgBgKgGgEQgFgEgIAAQgOgBgJALQgMAPAAAXQAAAXAMATQALASAUAAQAOABALgKQAIgIAIgRIAFACQgGAagQAPQgQAOgTAAQgWAAgRgTg");
	this.shape_177.setTransform(89,135.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_178.setTransform(75.8,135.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgwBFIAAgFQALgBAEgDQAEgCACgFQABgCAAgMIAAgzQAAgXgBgFQgBgFgDgCQgCgCgEABQgFgBgGACIgBgEIApgRIAFAAIAAAeQAQgeASAAQAIAAAGAFQAFAFAAAGQAAAGgEAEQgEADgFAAQgFAAgGgEQgHgFgDAAQgDAAgDACQgHAHgGAOIAAA/QABALACAGQACAEAEACQAFADAJAAIAAAFg");
	this.shape_179.setTransform(64.2,135);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgeBoIAAgFQAJAAADgCQAEgCACgEQACgFAAgMIAAg0QAAgWgCgFQgBgFgBgBQgDgCgEAAQgEAAgFACIgCgFIAmgRIAHAAIAABrQAAANACAEQACAEAEACQADACAJAAIAAAFgAgJhOQgEgEAAgGQAAgGAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_180.setTransform(54.9,131.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AhjBjIAAgFIAHAAQANAAAFgIQADgFAAgRIAAh/QAAgTgDgFQgGgGgMAAIgHAAIAAgFIBRAAQAsAAAXAKQAXAKAOAXQAOAYAAAfQAAAogZAcQgcAfg5AAgAgqhTIAACoQASAEANAAQAhAAAWgYQAXgYAAgpQAAgogXgYQgWgXgiAAQgOAAgQAEg");
	this.shape_181.setTransform(39.5,132);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AARCCIgqgBIgtABIgVABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgBgGIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQACgCADAAIAYAAQAHAAADgDQADgCAAgHIABgfIAAgoIAAg3QAAgQgCgIQgCgIgFgFQgFgEgIgFIgMgGIgDgCIgBgCIAAgEIABgDIADgCIA8gfIAFgCIADAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABAFIACArIADAAQANgWATgPQATgQAUAAQAPABAIAHQAHAIAAALQAAAMgIAIQgIAJgJAAQgFAAgEgBIgIgEIgJgEQgFgBgGAAQgIAAgJAFQgKAHgIAOIgEALIgBAIIAAB8QgBANAEAGQAEAGAIgBIAdAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAALIgBAFQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgVgBg");
	this.shape_182.setTransform(358,75.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgnB7QgZgJgSgYQgKgPgGgOQgGgOgCgQQgCgPAAgUQAAgMADgQQADgQAIgSQAIgRAQgQQATgUAWgGQAWgHAWABQAZAAARALQASAKAKAOQAKAPAEAOQAEAPAAAJQAAAGgFACQgFACgHAAIiTAAQgCAIAAAUQAAAdAMAXQALAXATAOQATANAXAAQAcAAASgMQATgNAIgPIACgDIADAAIAIAEQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAACgCAFQgFANgNAOQgMAPgTAMQgUALgaAAIgDAAQgYAAgYgJgAghhjQgRAPgJAhIBcAAQAJAAAEgCQAEgDAAgEQAAgHgEgNQgDgMgKgKQgKgLgUAAQgTAAgRAOg");
	this.shape_183.setTransform(334.6,75.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AB/DZIgigBIgsABIgVABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgBgFIAAgJIABgEIAGgBIADAAQAFAAACgDQABgCgBgFIgLgOIgZgbIgagcIgRgRQgFgEgHgBIgOgCIAAAbIAAAfIABAfQAAAHAEADQACADAHAAIARAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABIAAAKIgBAFQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgRgBIglgBIgoABIgSABQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBgBAAIgBgFIAAgKQAAAAABgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAABAAIAVAAQAGAAADgEQACgEAAgHIABguIAAhBIAAjFQABgNgCgIQgBgIgIgFQgGgFgPgEIgGgCQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgGQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBIAGgDIA9gaIAIgDIAFgCQABAAAAAAQABABAAAAQABAAAAABQAAAAABABIAAAHQgCAPgBAfIgBBFIAABKIAABeIAQgBQAJgCAEgDIAOgNIAVgVIARgVIAMgNQACgEAAgDQAAgEgCgCQgFgCgEgBIgHAAQgBAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBgBIAAgEIAAgLIAAgEIAEgBIASABIAmABIAigBIAOgBQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIABAEIAAALIgBAEIgEABIgEAAQgJAAgMAEQgLAEgKAGQgEACgPANIggAdIgbAaIAXAXIAmAmIAoAmIAVASQAIAEAKADIANACQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAEIAAALQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgQgBg");
	this.shape_184.setTransform(308.3,66.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgkB8QgYgJgWgZQgQgWgFgUQgGgUABgUQAAgiAPggQAQggAdgUQAcgVAnAAQAfAAASAJQASAKAHALQAIALAAAHQgBAKgGAGQgGAFgKAAQgKAAgIgGQgIgGgHgMQgJgSgKgEQgKgFgLABQgQAAgQAKQgQALgLAUQgKAVgBAfQABAYAJAYQAIAZANARQAPATARAGQARAGAQgBQAVABAPgGQAPgGAOgOIADgCIACACIAGAGQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgJALgOAJQgPAKgTAGQgTAGgUABIgDAAQgWAAgWgIg");
	this.shape_185.setTransform(280.2,75.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAyDEIgWAAIgYgBIgrABIgVABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgMQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAdAAQAFABACgDQADgDAAgHIAAgbIAAgbIAAhYQABgPgGgIQgGgJgWgDIgEgCIgBgCIAAgGIAAgCIAEgCIAfgNIAggQIAHgDIAFgBQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAIAAAFQgBAIAAAaIAAA/IAABBIAAAgIAAAUQABAIACAEQACADAFAAIAbAAQAEAAABACIABAEIAAAKIgBAFQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgLgBgAgdiFQgIgEgFgIQgGgIAAgKQAAgMAKgKQAJgKATgBQAQABAHAKQAIAKAAALQAAAMgIALQgJALgSABQgHAAgIgEg");
	this.shape_186.setTransform(259.2,68.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAuDZIgugBIgtABIgVABQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBgFIAAgKQAAAAABgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABgBAFAAIAdAAQAFAAADgEQAFgDAAgIIABgcIAAgsIAAgwIAAglIAAgkIAAgtIgBgpIgBgbQgBgPgHgJQgHgIgPgEIgMgEIgDgCIAAgBIAAgFIABgCIAEgCIAjgQQASgIAQgLIAHgEIAFgBQABAAABAAQABABAAAAQABAAAAABQAAAAABABQAAACAAAGIAAAnIgBA4IgBA4IAAAoIAAA0IAAAhIAAAqIAAAoIABAZQAAAIACAFQAEAGAJAAIAbAAQAEAAABABIABAEIAAAKIgBAFQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAIgWgBg");
	this.shape_187.setTransform(243.6,66.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AhFDOQglgPgagZQgWgVgOgcQgOgcgIgfQgHgfAAgcQAAgqAPgpQAOgpAhgjQAPgQAXgOQAWgOAcgIQAdgIAgAAQAbAAAYAGQAXAFASAHQASAIALAHQAGADACAAQABAAAAAAQABgBAAAAQABAAAAgBQAAgBABAAIAFgSQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAGAAQADgBACACQABACAAAGIACAVIAEAjIAFAlIAEAYQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgCADIgJACIgEAAQgBgBgBgEQgGgPgLgUQgLgTgTgUQgTgUgZgNQgZgNgjAAQgoAAgcAQQgdAQgSAaQgSAbgJAgQgIAgABAiQgBAQAFAbQAFAaAMAcQANAdAXAaQAUAXATALQATALATADQARADAUAAQAigBAdgKQAcgLAWgRQAWgRANgUIADgDIACABIAIAGIACACQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQgSAbgZAWQgaAXghAOQgiAOgrABQgzAAgkgPg");
	this.shape_188.setTransform(213.6,67.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgQCbQgNgIgIgMQgIgLgBgMIABggIAAgiIABgUIAAgNIAAgSIABgdIAAgdIgkAAQgEAAgDgCQgCgBAAgEQAAgEACgCIAIgFQAIgFAPgOQAOgNAOgQQANgQAFgLQABgDACgCIAFgBQADAAABADQABADAAADIgDA7IBUAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgGAVIgCAEQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIhNAAIgBAqIAAAqIAAA8QAAAWAFALQAFAMAHAEQAIAEAFgBQALAAALgBQALgCAHgEQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAIADAFQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIgCADQgDADgJAGQgJAFgOAFQgOAEgSABQgOgBgNgHg");
	this.shape_189.setTransform(182.1,72.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgnB7QgZgJgSgYQgKgPgGgOQgGgOgCgQQgCgPAAgUQAAgMADgQQADgQAIgSQAIgRAQgQQATgUAWgGQAWgHAWABQAZAAARALQASAKAKAOQAKAPAEAOQAEAPAAAJQAAAGgFACQgFACgHAAIiTAAQgCAIAAAUQAAAdAMAXQALAXATAOQATANAXAAQAcAAASgMQATgNAIgPIACgDIADAAIAIAEQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAACgCAFQgFANgNAOQgMAPgTAMQgUALgaAAIgDAAQgYAAgYgJgAghhjQgRAPgJAhIBcAAQAJAAAEgCQAEgDAAgEQAAgHgEgNQgDgMgKgKQgKgLgUAAQgTAAgRAOg");
	this.shape_190.setTransform(159.4,75.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AhADOQgYgDgWgMQgQgKgHgMQgIgMAAgPQABgRAJgOQAKgOAOgKQAPgLAOgGIAAgCQgTgFgKgMQgLgMAAgNQAAgPAJgLQAJgLANgHQAMgIALgEIAAgCQgMgFgNgLQgMgLgJgTQgJgSgBgbQAAgUAMgUQALgTAXgOQAXgNAiAAQAVAAAQAHQAQAHAJAIQAJAIADAEQAMgJAPgHQAPgHAPAAQAPAAAHAIQAHAHgBAKQAAAJgHAGQgGAHgKAAQgIAAgFgDQgFgCgDgEIgGgDQgDgCgEAAIgIAAQgFABgGACIAGAUQACALABAPQAAASgGAQQgFARgMAOQgIAJgMAGQgNAHgNAEQgMAEgKAAIgRgBIgOgCIgNAHQgIAEgFAHQgFAGAAAIQAAAMAJAFQAJAFAQAAQAPAAAVgBQAjgCAZAFQAZAEARAOQATAPAFAQQAGAQgBALQABAVgJASQgJASgXARQgMAJgaAJQgaAJglABIgFAAQgUAAgVgEgAAABGIg5AFQgJACgLAIQgMAHgIAMQgHAMgBAQQABAMAHAMQAGALAKAHQAOAKATADQATAEAfAAQAIAAAPgEQAOgDAPgHQAOgHAKgMQAJgMAAgRQAAgbgVgRQgTgPgmAAIgJAAgAgii+QgLADgKALQgPAQgEASQgEATABASQAAAPAFAOQAEANAKAKQAIAIAJADQAIAEALAAQAUgBALgNQAMgOAFgUQAFgUAAgUQAAgTgEgNQgEgNgIgJQgGgFgIgEQgHgEgHAAIgDAAQgJAAgJADg");
	this.shape_191.setTransform(132.2,83.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AARCCIgqgBIgtABIgVABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgBgGIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQACgCADAAIAYAAQAHAAADgDQADgCAAgHIABgfIAAgoIAAg3QAAgQgCgIQgCgIgFgFQgFgEgIgFIgMgGIgDgCIgBgCIAAgEIABgDIADgCIA8gfIAFgCIADAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABAFIACArIADAAQANgWATgPQATgQAUAAQAPABAIAHQAHAIAAALQAAAMgIAIQgIAJgJAAQgFAAgEgBIgIgEIgJgEQgFgBgGAAQgIAAgJAFQgKAHgIAOIgEALIgBAIIAAB8QgBANAEAGQAEAGAIgBIAdAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAALIgBAFQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgVgBg");
	this.shape_192.setTransform(107.7,75.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAmB5QgMgKgEgTIgBAAQgJAMgOAIQgPAKgUAHQgJACgIAAIgTABQgHAAgJgEQgIgFgGgLQgFgLgBgTQAAgUANgSQAMgTAjgPIAcgMIAXgMQALgFAFgFIAAgmIgCgSQgCgJgEgHQgFgGgIgDQgJgEgNAAQgKAAgLAEQgMADgGAGQgGAFABAHIACAPQAAAQgHAJQgHAJgSABQgHgBgEgEQgDgFAAgKQAAgPALgPQALgPATgLQATgMARgEQARgFATAAQAVAAAKAFQALAEAGAHQAJAKACAKQADAKgBANIAABbIAAAjQAAAZAFAKQAFAJAIABQAIAAAFgEQAGgCACgDIADgEQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAIAGAFQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAADgCAEIgIAMQgFAHgKAGQgJAEgPABQgRgBgKgKgAgDAFQgNAGgOAJQgNAHgKANQgJANAAASQAAARAJAHQAIAJAOAAQAJAAAMgGQAKgGAJgIQAIgJAAgJIAAhIQgIAGgMAFg");
	this.shape_193.setTransform(85.1,75.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("ABMDfIgaAAIgvgBIg/ABIgbABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgEIAAgLIABgFQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAoAAQAKgBAFgEQAFgEAAgGIABgcIABgzIAAg7IAAgxIAAgZIAAiaIgPAAIgbAAIglACQgSACgNADQgNAFgLANQgKANgHAOIgMAZQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBABIgDAAIgLgDIgCgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAHgZIAJghIAJgfIAEgRQABgFACgCQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIADAAIAEACIAIAGQAIAGAGACQAIACAMAAIAfABIAjACIAvAAIAcAAIA2AAIAlgCIAegBQAJAAAIgCQAGgCAIgFIALgHIAEgCIADAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABIACAHIACARIAGAeIAFAjIAFAbQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABIgJADQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIgJgUQgHgOgJgOQgIgNgKgGQgKgEgSgCQgUgDgUAAIgkgBIgRAAIAACrIAAAVIAAAsIAAA1IABAtIAAAXQAAALAFAGQAEAHAMAAIAlAAQAEAAABABIABAFIAAAMIgBAEQgBABgEAAIgLgBg");
	this.shape_194.setTransform(49.5,66.1);

	this.Level1 = new cjs.Text("Level 1", "85px 'Times New Roman'");
	this.Level1.name = "Level1";
	this.Level1.lineHeight = 96;
	this.Level1.lineWidth = 258;
	this.Level1.parent = this;
	this.Level1.setTransform(345.3,16.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AghCIIgCgDIABgCIACgDQAWgWAMgfQANggAAgrQAAgrgNgfQgMgggWgVIgCgDIgBgDIACgDIAEgBIADAAIADACQAKAJALANQALANAJAUQAJAQAEAVQAFAUAAAXQAAAXgGAUQgFAUgJATQgJASgKANQgKAOgKAJIgDACIgDAAIgEgCg");
	this.shape_195.setTransform(718.5,445.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgJgBg");
	this.shape_196.setTransform(706.3,447.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_197.setTransform(691.8,447.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_198.setTransform(679,447.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AAJBBIgVAAIgXAAIgKABIgBgBIAAgDIAAgEQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADAAIAMAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgGIgGgFIgGgDIgCgBIAAgBIAAgCIAAgCIACgBIAegPIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABADIABAUIACAAQAFgKAKgIQAKgHAKgBQAHAAAEAFQAEAEAAAFQgBAHgDAEQgEADgFAAIgEgBIgEgBIgFgBIgFgBQgEAAgFACQgFADgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEAAIAOAAIACABIABACIAAAEIgBADIgBABIgKgBg");
	this.shape_199.setTransform(667.6,447.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_200.setTransform(656.4,447.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgXA/QgIgEgCgCIgCgBIAAgDIgGgdIABgBIABgBIAFgBQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAIAPIAFAKQADADAFADQAEACAIAAQAFAAAGgCQAFgCAEgEQADgFAAgHQABgKgHgGQgGgHgQgEQgJgDgIgEQgIgEgFgHQgFgIAAgMQAAgKAGgIQAFgIAKgFQAJgFALAAQALAAAGACIALAEIADADIACADIAFAUIgBACIgCABIgEABIgBAAIgBgBIgKgNQgDgFgFgEQgFgEgIAAQgFAAgGADQgFACgDAEQgDAFgBAHQABAIADAEQAFAFAHADIAMAEQARAFAJAHQAKAIAAASQAAALgGAKQgGAJgKAEQgLAFgLAAQgLAAgJgDg");
	this.shape_201.setTransform(644.5,447.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_202.setTransform(625.3,447.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAAgGIAAgCIACAAIAHAAIAHgBQAEgBAAgEIABgHIAAgMIgBgLIAAgYQABgMgCgJQgCgKgHgGQgEgDgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAEIAABCIABAKQABACAEAAIAJAAIADAAIABACIAAAGIgBACIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgGIABgCIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgPIAAgSIAAgRIAAhaQAAgJgBgEQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABACAAAEIgBAJIAAARIAAAVIAAAUIAAAOIAAATIABAAQAIgJAMgGQAKgEAKAAQAKAAAHACQAHADAGAGQAHAHACAGQADAHABAHIAAAQIAAARIAAASIAAAOIABAKQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_203.setTransform(610.8,443);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_204.setTransform(598.2,446);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AA/BsIgQAAIgXAAIgKABIgCgBIAAgCIAAgFIAAgCIADgBIACAAIADgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgGgHIgMgOIgNgOIgIgIQgCgCgEgBIgHgBIAAAOIAAAPIABAPQAAAEABACQABAAAAAAQABAAAAABQABAAAAAAQABAAABAAIAIAAIACAAIABACIAAAGIgBACQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgJgBIgSAAIgUAAIgJABIgBgBIAAgCIAAgFIAAgDIADAAIALAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIABgFIABgXIAAghIAAhiIgBgKQgBgEgDgDQgEgDgHgBIgDgBIgBgCIAAgCIABgCIADgBIAegOIAEgBIADgBIACABIAAAFIgBAWIgBAiIAAAmIAAAuIAIgBIAHgCIAHgHIAKgKIAIgLIAGgGIABgDIgBgCIgEgDIgEAAIgCAAIgBgCIAAgGIABgCIABgBIAJABIATAAIARAAIAIgBIABABIAAADIAAAFIAAACIgCAAIgCAAQgFAAgFADQgGACgFACIgKAHIgPAPIgNANIAKALIAUAUIATATIALAJIAJADIAHABIACAAIAAADIAAAFIAAACIgDABIgIgBg");
	this.shape_205.setTransform(578.8,443);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_206.setTransform(564.7,447.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AAZBiIgLAAIgNAAIgUAAIgLABIgCgBIAAgCIAAgGIAAgCIADAAIAOAAIAEgCIACgEIAAgOIAAgNIAAgtQAAgHgDgDQgDgFgLgCIgCAAIgBgCIAAgDIABgBIABgBIAPgGIAQgIIAEgCIACAAIABABIAAADIAAARIAAAeIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABABABAAIANAAIACABIABACIAAAEIgBADIgCABIgFgBgAgOhDQgEgCgDgDQgDgEAAgFQABgGAEgFQAFgFAJAAQAHAAAFAFQAEAFgBAFQABAHgEAFQgFAGgJAAQgDAAgEgDg");
	this.shape_207.setTransform(554.3,444);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAXBsIgXAAIgWAAIgLABIgBgBIgBgCIAAgFIABgDIADAAIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAAAQACgCAAgFIAAgNIAAgXIAAgXIAAgSIAAgTIAAgWIAAgUIgBgOQAAgIgDgDQgEgFgHgCIgHgCIgBAAIAAgBIAAgDIABgBIABgBIASgIQAJgEAIgGIADgBIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAFIAAATIAAAcIgBAcIAAAUIAAAZIAAARIAAAVIAAAUIAAANIACAHQACACAEAAIANAAIADABIABACIAAAFIAAACIgCABIgLgBg");
	this.shape_208.setTransform(546.4,443);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_209.setTransform(536.7,447.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAJBBIgVAAIgXAAIgKABIgBgBIAAgDIAAgEQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADAAIAMAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgGIgGgFIgGgDIgCgBIAAgBIAAgCIAAgCIACgBIAegPIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABADIABAUIACAAQAFgKAKgIQAKgHAKgBQAHAAAEAFQAEAEAAAFQgBAHgDAEQgEADgFAAIgEgBIgEgBIgFgBIgFgBQgEAAgFACQgFADgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEAAIAOAAIACABIABACIAAAEIgBADIgBABIgKgBg");
	this.shape_210.setTransform(517.7,447.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_211.setTransform(504.8,447.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgJgBg");
	this.shape_212.setTransform(482,447.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_213.setTransform(466.3,447.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_214.setTransform(454.4,446);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_215.setTransform(444.9,446);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgaA/QgIgDgHgJQgGgIgCgHQgDgHAAgKIgBgaIAAgjQAAgGgDgCQgDgDgFAAIgFgBIgCgBIAAgGIABgCIADAAIAaAAIADAAIABgBIACAAIACAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABADIgBALIAAAXIAAAWIgBANIABAPQACAJAEAHQAGAHAGACQAGACAGAAQAGAAAHgFQAIgEAEgGIACgEIABgEIAAhHQAAgGgDgCQgEgCgGAAIgFgBIgBgBIAAgFIAAgDIADAAIAcAAIADAAIACgBIACAAIACAAIACABIABACIgBAFIgBAMIAAAXIAAAVIAAAVIAAAPQABAHACABQACACADAAIAEAAIAGgBIADAAIABABIABAEIgBACIgBABIgfALIgDAAIgDABIgCgBIgBgDIgCgRIgBAAQgHAJgLAGQgKAFgMABIgCAAQgFAAgGgCg");
	this.shape_216.setTransform(432.1,447.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgNBsQgJgCgGgEIgLAHIgCABIgCAAIgDgBIgCgBIAAgBIABgLIAAgSIAAgWIAAhuIgBgPQgCgGgDgCQgDgDgGgCIgCgBIgDgBIgCgBIAAgDIABgBIACgBIALgFIALgGIAKgFIADgCIADgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABgBAAIAAAMIAAAYIAAAbIAAAjQAHgHAMgEQAKgEAMAAQANAAANAHQAMAHAIAOQAIAOABAVQgBASgIAPQgJAQgOAJQgNAKgSAAQgLAAgJgCgAgNgEQgHADgGAEIAAAnIAAAUIACAOIADAKQACAFAIAFQAIAEAJABQAJAAAKgFQAJgFAGgLQAGgLAAgUQAAgPgEgNQgGgMgKgIQgKgHgPgBQgGAAgIADg");
	this.shape_217.setTransform(416.4,443.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAGgHAEQgHAFgKAEIgJAAIgJABQgEAAgEgCQgEgCgDgGQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgFIALgGIAIgGIAAgTIgBgJQgBgEgCgEQgDgDgDgBQgFgCgGAAIgLACQgFABgEADQgDADABADIABAIQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgCAAgFQAAgIAFgIQAGgHAJgFQAKgGAIgCQAJgDAJAAQAKAAAGADQAFACADADQAEAFACAFIABAMIAAAsIAAASQAAAMACAGQACAFAEgBQAEAAADgBIAEgDIABgCIACABIADACIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAKQABAIAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgFIAAgkIgKAGg");
	this.shape_218.setTransform(396,447.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_219.setTransform(375.2,447.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AA/BsIgQAAIgXAAIgKABIgCgBIAAgCIAAgFIAAgCIADgBIACAAIADgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgGgHIgMgOIgNgOIgIgIQgCgCgEgBIgHgBIAAAOIAAAPIABAPQAAAEABACQABAAAAAAQABAAAAABQABAAAAAAQABAAABAAIAIAAIACAAIABACIAAAGQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgJgBIgSAAIgUAAIgJABIgBgBIAAgCIAAgFIAAgDIADAAIALAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIABgFIABgXIAAghIAAhiIgBgKQgBgEgDgDQgEgDgHgBIgDgBIgBgCIAAgCIABgCIADgBIAegOIAEgBIADgBIACABIAAAFIgBAWIgBAiIAAAmIAAAuIAIgBIAHgCIAHgHIAKgKIAIgLIAGgGIABgDIgBgCIgEgDIgEAAIgCAAIgBgCIAAgGIABgCIABgBIAJABIATAAIARAAIAIgBIABABIAAADIAAAFIAAACIgCAAIgCAAQgFAAgFADQgGACgFACIgKAHIgPAPIgNANIAKALIAUAUIATATIALAJIAJADIAHABIACAAIAAADIAAAFIAAACIgDABIgIgBg");
	this.shape_220.setTransform(362,443);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AAZBiIgLAAIgNAAIgUAAIgKABIgCgBIgBgCIAAgGIABgCIACAAIAOAAIAEgCIABgEIAAgOIAAgNIAAgtQABgHgDgDQgDgFgLgCIgCAAIgBgCIAAgDIABgBIABgBIAQgGIAQgIIACgCIADAAIABABIAAADIAAARIAAAeIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAOAAIADABIAAACIAAAEIAAADIgCABIgGgBgAgOhDQgEgCgCgDQgDgEgBgFQAAgGAFgFQAFgFAKAAQAHAAAEAFQADAFAAAFQAAAHgDAFQgFAGgJAAQgDAAgEgDg");
	this.shape_221.setTransform(349.8,444);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAXBsIgXAAIgWAAIgLABIgCgBIAAgCIAAgFQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAgBIADAAIAOAAQABAAABAAQAAAAABAAQAAgBABAAQABAAAAAAQACgCAAgFIAAgNIABgXIAAgXIAAgSIAAgTIgBgWIAAgUIAAgOQgBgIgEgDQgDgFgIgCIgGgCIgBAAIgBgBIAAgDIABgBIACgBIARgIQAKgEAHgGIAEgBIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAFIAAATIgBAcIAAAcIAAAUIAAAZIAAARIAAAVIAAAUIAAANIACAHQABACAFAAIAOAAIACABIABACIAAAFIAAACIgCABIgLgBg");
	this.shape_222.setTransform(342,443);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AAbCKIgDgCQgKgJgLgNQgLgNgJgTQgJgSgEgUQgFgVAAgXQAAgXAGgTQAFgUAJgTQAJgSAKgOQAKgNAKgJIADgCIADAAIAEABIACADIgBADIgCACQgWAXgMAeQgNAgAAArQAAArANAgQAMAfAWAWIACADIABACIgCADIgEACIgDAAg");
	this.shape_223.setTransform(333.5,445.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAJBBIgVAAIgXAAIgKABIgBgBIAAgDIAAgEQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADAAIAMAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgGIgGgFIgGgDIgCgBIAAgBIAAgCIAAgCIACgBIAegPIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABADIABAUIACAAQAFgKAKgIQAKgHAKgBQAHAAAEAFQAEAEAAAFQgBAHgDAEQgEADgFAAIgEgBIgEgBIgFgBIgFgBQgEAAgFACQgFADgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEAAIAOAAIACABIABACIAAAEIgBADIgBABIgKgBg");
	this.shape_224.setTransform(315.7,447.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_225.setTransform(304,447.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgIA/IgCgEIgDgHIgFgOIgHgRIgGgQIgDgGIgCgHIgFgMIgFgOIgDgIQgDgHgCgCQgDgDgEAAIgGAAIgCgBIAAgCIAAgFIABgCIACgBIAIABIARAAIATAAIAIgBIADABIAAACIAAAFIAAACIgCABIgGAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIABAIIADAKIADALIADAHIADAJIAFANIAGAOIADAJIAAAAIAHgPIAJgVIAIgXIAFgOQACgHgCgDQgBgEgEAAIgGAAIgBgBIAAgCIAAgFIAAgCIABgBIAJABIAPAAIAPAAIAHgBIACABIABACIAAAFIAAADIgCAAIgFAAIgFABIgFADQgCABgDAHIgHANIgHAQIgFALIgFAMIgJAVIgJATIgEAJIgCAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_226.setTransform(291.1,447.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_227.setTransform(277,447.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_228.setTransform(257.5,446);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AAJBBIgVAAIgXAAIgKABIgBgBIAAgDIAAgEQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADAAIAMAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgGIgGgFIgGgDIgCgBIAAgBIAAgCIAAgCIACgBIAegPIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABADIABAUIACAAQAFgKAKgIQAKgHAKgBQAHAAAEAFQAEAEAAAFQgBAHgDAEQgEADgFAAIgEgBIgEgBIgFgBIgFgBQgEAAgFACQgFADgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEAAIAOAAIACABIABACIAAAEIgBADIgBABIgKgBg");
	this.shape_229.setTransform(247.6,447.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAGgHAEQgHAFgKAEIgJAAIgJABQgEAAgEgCQgEgCgDgGQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgFIALgGIAIgGIAAgTIgBgJQgBgEgCgEQgDgDgDgBQgFgCgGAAIgLACQgFABgEADQgDADABADIABAIQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgCAAgFQAAgIAFgIQAGgHAJgFQAKgGAIgCQAJgDAJAAQAKAAAGADQAFACADADQAEAFACAFIABAMIAAAsIAAASQAAAMACAGQACAFAEgBQAEAAADgBIAEgDIABgCIACABIADACIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAKQABAIAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgFIAAgkIgKAGg");
	this.shape_230.setTransform(236.3,447.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_231.setTransform(224.9,446);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgWA/QgIgEgEgCIgBgBIgBgDIgEgdIAAgBIACgBIADgBQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAHAPIAGAKQADADAFADQAFACAGAAQAGAAAGgCQAFgCAEgEQADgFAAgHQAAgKgGgGQgGgHgQgEQgJgDgIgEQgIgEgFgHQgFgIAAgMQAAgKAFgIQAHgIAJgFQAJgFALAAQAKAAAHACIALAEIAEADIABADIAFAUIgBACIgCABIgDABIgCAAIgBgBIgKgNQgDgFgFgEQgEgEgJAAQgFAAgFADQgFACgEAEQgDAFAAAHQAAAIADAEQAFAFAGADIAOAEQAQAFAKAHQAJAIABASQgBALgGAKQgGAJgKAEQgLAFgLAAQgMAAgHgDg");
	this.shape_232.setTransform(214.5,447.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_233.setTransform(194,447.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_234.setTransform(182.1,446);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("Ag/BkQgEgFAAgGQAAgFAEgEQAEgDAGAAIAIACIAFABIAEAAIADgBIAFgJIAHgPIAHgPIAFgNIgEgNIgJgZIgKgeIgIgZIgFgOIgFgJQgDgDgGAAIgIAAIgCAAIAAgCIAAgGIAAgCIACgBIAIABIAUAAIASAAIAKgBIACABIAAACIAAAGIAAACIgBAAIgGAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIAAAFIADAKIAFATIAHAVIAFATIAEAKIABAAIAEgJIAHgRIAJgVIAHgSIAEgKQABgFgBgDQgCgDgDAAIgFAAIgCAAIAAgCIAAgGIAAgCQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIABIAQAAIALAAIAHgBQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAACIAAAGIAAACIgBAAIgFAAIgFABIgGAEIgKAUIgRAkIgUAtIgMAeIgLAZIgIAQIgEAIQgDAEgFADQgFAEgIAAQgJAAgEgEg");
	this.shape_235.setTransform(163,451.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAGgHAEQgHAFgKAEIgJAAIgJABQgEAAgEgCQgEgCgDgGQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgFIALgGIAIgGIAAgTIgBgJQgBgEgCgEQgDgDgDgBQgFgCgGAAIgLACQgFABgEADQgDADABADIABAIQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgCAAgFQAAgIAFgIQAGgHAJgFQAKgGAIgCQAJgDAJAAQAKAAAGADQAFACADADQAEAFACAFIABAMIAAAsIAAASQAAAMACAGQACAFAEgBQAEAAADgBIAEgDIABgCIACABIADACIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAKQABAIAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgFIAAgkIgKAGg");
	this.shape_236.setTransform(150.5,447.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AAiBAIgCgEIgehVIgBAAIgkBVIgDAFIgDABQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgEIgohqQgBgDgDgCQgDgDgFAAIgHAAIgCAAIAAgCIAAgGIAAgCIACgBIAJABIASAAIAQAAIAJgBIACABIABACIAAAGIgBACIgCAAIgCAAQgBAAAAABQgBAAgBAAQAAAAAAABQgBAAAAABQgBACABADIAYBPIABAAIAfhIIgBgGIgCgDIgDgDIgFAAIgFAAIgBgBIgBgCIAAgGIABgCIACgBIAJABIARAAIAQAAIAHgBIACABIAAACIAAAGIAAABIgCACIgGAAQAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBABQgBACABADIAXBIIABAAIAYhBQADgIgBgEQgCgFgEAAIgFAAIgBAAIAAgCIAAgGIAAgCIACgBIAHABIAQAAIAOAAIAIgBIABABIABACIAAAGIgBACIgBAAIgIAAQgDAAgCACIgEAEIgGAMIgLAaIgMAeIgLAbIgGAOQAAABgBABQAAAAAAABQAAAAgBAAQAAAAAAABIgEABIgDgCg");
	this.shape_237.setTransform(133.2,447.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("ABmBvIgKAAIgTAAIgcAAIgPABIgBgBIgBgCIAAgHIABgCIACAAIAHAAQAGAAADgDQACgCgCgHIgDgMIgGgSIgFgSIgFgNIhIAAIgFAMIgHATIgGASIgEALIAAADIAAADQAAAEACABQADACAFAAIAOAAIACAAIABACIAAAHIgBACIgCABIgMgBIgWAAIgRAAIgKAAIgFABIgCgBIgBgCIAAgHIABgCIACAAIAKAAQAHAAAEgDQAEgEADgHIAFgMIAJgXIAKgbIAIgXIAEgIIAHgTIAIgVIAHgTIAEgKIABgFQAAgDgBgDIgCgBIAAgCIAAgCIACgBIAKgEIAIgGQAFgDABgCIACgCIACgBQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIACADIAFARIAIAXIAIAaIAIAXIAFARIAHAVIAKAbIAIAYIAGAOQAEAIAFADQAGADAFAAIAKAAIACAAIABACIAAAIIgBABIgCABIgHgBgAAZARIgEgNIgHgUIgIgYIgGgVIgDgKIgBgDIgBgBIgCABIgCADIgDAKIgIAVIgJAYIgIAVIgEAMIBCAAIAAAAg");
	this.shape_238.setTransform(104.1,442.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACAAIBSAAIAEAAIAAADIAAAKQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgDAAIhSAAIgBAAIgBAAg");
	this.shape_239.setTransform(79.3,445.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_240.setTransform(267.8,394.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKAAIgBAAIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAWIACAAQAFgLAKgHQAKgIAKAAQAHAAAEADQAEAFAAAFQgBAGgDAEQgEAFgFAAIgEgBIgEgCIgFgCIgFgBQgEAAgFAEQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEgBIAOAAIACABIABACIAAAGIgBABIgBABIgKAAg");
	this.shape_241.setTransform(256.5,394.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_242.setTransform(243.5,394.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_243.setTransform(230.3,394.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgWA+QgIgDgEgCIgBgCIgBgCIgEgdIAAgBIACgBIADAAQABgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAHAOIAGALQADAEAFACQAFADAGAAQAGAAAFgDQAGgCADgEQAEgFAAgHQAAgKgGgHQgGgGgQgFQgJgCgIgFQgIgDgFgIQgFgHAAgMQAAgKAFgIQAHgJAJgEQAJgFALAAQAKAAAHACIAKAEIAFADIABACIAFAWIgCABIgBACIgDAAIgCAAIgBgBIgLgOQgCgFgFgDQgEgDgJgBQgFABgFACQgFACgEAEQgDAFAAAGQAAAJADAFQAFAEAGACIAOAFQAQAFAKAHQAJAJABAQQgBAMgGAKQgGAIgKAFQgLAFgLAAQgMgBgHgDg");
	this.shape_244.setTransform(218.4,394.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgDIAAgEIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgLIgBgLIAAgYQABgNgCgJQgCgKgHgFQgEgDgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAEAAAEIAABBQAAAIABACQABADAEAAIAJAAIADABIABACIAAAEIgBADIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgPIAAgSIAAgQIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgFAKgBQAKABAHADQAHACAGAHQAHAGACAFQADAIABAIIAAAQIAAARIAAAQIAAAPIABAJQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_245.setTransform(197.5,389.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AggBnQgMgBgLgHQgIgFgDgGQgEgFAAgIQAAgIAFgHQAFgHAHgGIAOgIIAAgBQgJgDgFgFQgFgGgBgHQABgHAEgGQAFgEAGgEQAGgFAFgBIAAgBQgGgDgGgFQgGgGgFgJQgEgKAAgNQAAgJAFgKQAGgKALgHQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgDAIAAQAHAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgCgBIgEgDIgDgCIgEgBIgEAAIgFACIADAKQABAFAAAHQAAAKgCAIQgDAIgGAHQgEAFgGADIgNAFQgGACgFAAIgIgBIgHgBIgHAEIgGAFQgDADAAAEQAAAGAFADQAEACAIAAIASgBQASAAAMACQAMADAJAGQAJAIADAHQADAJAAAFQAAAKgFAKQgEAIgMAJQgGAFgNAEQgNAFgSAAIgXgCgAAAAkIgcACQgFABgFADQgGAEgEAGQgEAGAAAIQAAAGAEAGQADAFAFAEQAHAFAJACQAKACAPgBIALgBIAPgGQAHgDAFgGQAFgGgBgIQAAgOgKgJQgJgHgSAAIgGABgAgRhfQgFACgFAGQgHAIgCAJQgDAJABAJQAAAIACAGQADAHAEAFQAEAEAFACQAEABAFAAQAKAAAFgGQAGgIADgJQACgKAAgKQAAgKgCgGQgCgHgEgEIgHgFQgDgCgDAAIgLABg");
	this.shape_246.setTransform(182.2,398.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AAYBiIgKAAIgNgBIgUABIgKAAIgCAAIgBgCIAAgGIABgCIACgBIAPAAIADAAIABgGIAAgNIAAgOIAAgsQABgIgDgDQgDgEgLgBIgDgCIAAgBIAAgDIAAAAIACgBIAQgHIAQgJIACgBIADAAIACABIAAACIgBARIAAAgIAAAgIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAOAAIADABIAAACIAAAFIAAACIgCABIgHAAgAgOhCQgEgCgCgEQgDgEAAgFQgBgGAFgFQAFgGAKAAQAGAAAEAGQAEAFAAAFQAAAHgEAFQgEAFgJABQgDAAgEgCg");
	this.shape_247.setTransform(170.8,391);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgDIAAgEIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgLIgBgLIAAgYQABgNgCgJQgCgKgHgFQgEgDgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAEAAAEIAABBQAAAIABACQABADAEAAIAJAAIADABIABACIAAAEIgBADIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgPIAAgSIAAgQIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgFAKgBQAKABAHADQAHACAGAHQAHAGACAFQADAIABAIIAAAQIAAARIAAAQIAAAPIABAJQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_248.setTransform(158.8,389.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_249.setTransform(136.7,394.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgDIAAgEIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgLIgBgLIAAgYQABgNgCgJQgCgKgHgFQgEgDgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAEAAAEIAABBIABAKQABADAEAAIAJAAIADABIABACIAAAEIgBADIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgPIAAgSIAAgQIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgFAKgBQAKABAHADQAHACAGAHQAHAGACAFQADAIABAIIAAAQIAAARIAAAQIAAAPIABAJQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAEIAAADIgCABIgJAAg");
	this.shape_250.setTransform(122.2,389.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAmBwIgNAAIgYgBIgeABIgOAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAgGIAAgCIACgBIAUAAQAGAAACgCQADgCAAgDIAAgOIABgaIAAgdIAAgYIAAgMIAAhOIgIAAIgOAAIgSABQgJABgGACQgHACgGAHQgEAGgEAHIgGANIgBACIgCAAIgFgCIgBgBIAAgCIADgMIAEgRIAFgPIABgJIABgDIACgBIADAAIABABIAEACQADAEAEABIAKABIAQABIARAAIAXAAIAOAAIAbAAIASAAIAQgBIAIgBIAHgEIAFgDIACgBIADAAIABABIABADIABAJIACAPIAEARIACANIAAADIgCAAIgFABIgBAAIgBgCIgFgKIgHgOQgEgHgGgCQgEgCgKgCIgTgCIgSAAIgJAAIAABWIAAAJIAAAXIAAAaIAAAXIABALQgBAGADADQACADAGAAIASAAIADABIAAACIAAAHIAAACIgDAAIgFAAg");
	this.shape_251.setTransform(103.2,389.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACAAIBSAAIAEAAIAAADIAAAKQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAIgDAAIhSAAIgBAAIgBAAg");
	this.shape_252.setTransform(79.3,392.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_253.setTransform(483.3,341.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("ABlBAIgRAAIgTAAIgJABIgBgBIgBgCIAAgFQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIADAAIAHAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIAAgMIAAgMIAAgrQAAgIgBgGQgDgGgFgFQgEgDgFgBQgGgCgGAAQgIAAgHAFQgIAEgEAHQgDAGgBAHIAAARIAAAzQAAADABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIAAADIAAAEIAAADIgCABIgIgBIgTAAIgSAAIgJABIgBgBIAAgCIAAgFIAAgDIACAAIAJAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAAg9IgBgRQgCgHgCgDIgEgFQgDgDgGgBIgKgCQgHAAgIAEQgHAEgIAKIgDAJIgBALIAAA6QABAEABACQAAAAABABQAAAAABAAQAAABABAAQABAAABAAIALAAIACAAIAAADIAAAEIAAADIgCABIgJgBIgSAAIgTAAIgJABIgCgBIAAgCIAAgFIAAgDIADAAIAKAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAgBIACgGIAAgHIAAgIIAAg1QAAgEgCgEQgBgEgFgDIgHgDIgBgBIgBgCIAAgCIABgBIABgBIAbgOIACgBIADgBQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIABADIABARIABAAQAHgKALgGQAMgHAOAAQAMAAAIAGQAIAGAFALIACAAQAGgJAMgHQAMgHAOAAQAHAAAHACQAHACAGAFIAGAIQADAEACAHQACAHAAALIAABCQAAABABAAQAAABAAABQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIACAAIABADIAAAFIAAACIgCABIgIgBg");
	this.shape_254.setTransform(464.8,341.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AATA9QgGgGgCgJIgBAAQgEAFgHAFQgHAFgKAEIgJAAIgJABQgEAAgEgCQgEgDgDgFQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgFIALgHIAIgFIAAgTIgBgJQgBgEgCgEQgDgCgDgCQgFgCgGAAIgLACQgFABgEADQgDADABADIABAIQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgDAAgEQAAgIAFgIQAGgHAJgFQAKgGAIgCQAJgDAJAAQAKAAAGADQAFACADADQAEAFACAFIABAMIAAAsIAAASQAAAMACAGQACAEAEAAQAEAAADgCIAEgCIABgCIACABIADACIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDADgEADQgFADgIAAQgIAAgFgFgAgBACIgOAIQgGAEgFAGQgEAGgBAKQABAIAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgEIAAglIgKAFg");
	this.shape_255.setTransform(446.8,341.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AggBoQgMgCgLgGQgIgGgDgFQgEgHAAgHQAAgIAFgIQAFgHAHgFIAOgIIAAgBQgJgDgFgFQgFgGgBgHQABgHAEgGQAFgFAGgEQAGgDAFgDIAAAAQgGgCgGgHQgGgFgFgJQgEgJAAgOQAAgJAFgLQAGgKALgGQAMgHARAAQAKAAAIAEQAIADAEAEIAGAGIAOgIQAHgDAIgBQAHAAAEAFQADAEAAAEQAAAEgDAEQgEADgFAAQgEAAgCgBIgEgEIgDgBIgEgBIgEAAIgFACIADAJQABAGAAAIQAAAIgCAJQgDAIgGAHQgEAEgGAEIgNAFQgGACgFAAIgIAAIgHgBIgHADIgGAGQgDACAAAEQAAAGAFADQAEACAIAAIASAAQASgBAMACQAMADAJAHQAJAHADAIQADAHAAAGQAAAKgFAJQgEAJgMAJQgGAEgNAFQgNAEgSABIgXgBgAAAAjIgcACQgFACgFAEQgGADgEAGQgEAGAAAJQAAAFAEAGQADAGAFADQAHAFAJACQAKABAPABIALgCIAPgGQAHgDAFgGQAFgGgBgJQAAgNgKgIQgJgIgSAAIgGAAgAgRheQgFACgFAEQgHAJgCAJQgDAJABAJQAAAHACAIQADAGAEAFQAEAEAFACQAEABAFABQAKAAAFgIQAGgGADgLQACgJAAgKQAAgKgCgHQgCgGgEgEIgHgFQgDgCgDAAIgLACg");
	this.shape_256.setTransform(432.7,345.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_257.setTransform(411.4,341.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgDIAAgFIAAgCIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgMIgBgLIAAgXQABgNgCgKQgCgJgHgGQgEgDgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAKQABACAEAAIAJAAIADAAIABACIAAAFIgBADIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgGIABgCIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgJgBgEQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABACAAADIgBAKIAAARIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAHACAGQADAHABAHIAAAQIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_258.setTransform(396.9,336.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_259.setTransform(384.3,339.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AACBsIgZAAIgQAAIgMAAIgGABIgCgBIAAgBIAAgHIAAgCIACAAIAPAAQAEAAABgCQACgDAAgFIAAg5IAAghIgVAAIgBAAIAAgDIABgJIABgCIADgBIARAAIAAgFQAAgWAGgPQAFgPAJgKQAMgNALgFQAMgGANAAQAHAAAHACQAGACAEADQADAEAAAGQABAFgFAEQgEAEgEAAIgFgBIgDgBIgFgDIgDgEQgDgDgDgCQgDgCgEABQgHgBgFADQgGACgEAGQgGAHgCAKQgCAKAAAMIAAAWIAAAFIAjAAIACABIAAADIgBAKIgBABIgDAAIggAAIAAAaIAAAgIAAAXIAAALQAAAEABACQACACAFAAIAQAAIADAAIAAACIAAAFIAAADIgCABIgKgBg");
	this.shape_260.setTransform(369,336.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_261.setTransform(354.7,341.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgaBuQgGgBgGgDQgGgCgHgIQgLgKgEgMQgEgLAAgPQAAgOAFgNQAFgNALgKQAJgJALgFQAMgFANAAIAQABIAPAEIAAg7IgBgJQgCgDgEgCQgEgCgIgBIgCgBIAAgCIAAgFIAAgBIACgBIANgCIAMgDIAIgBIAEgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAYIgBAiIAAAnIAABBIABAMIAAAKIACAFQACADAEABIAIABIAEABIABACIABACIAAACIgCABIgiAMIgCAAIgCgDIgEgNQgFAFgHAEQgHADgIACQgIACgIAAIgKAAgAgVgIQgHACgGAGQgIAJgDAKQgDALAAAJQABARAGANQAHANAJAIQAJAHAJAAQAMAAAJgFQAIgFADgGIABgGIABgEIAAg0IgBgHQAAgEgCgDQgDgGgIgFQgHgEgMgBQgIAAgHADg");
	this.shape_262.setTransform(332.2,337);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9QAAAGABACQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgJgBg");
	this.shape_263.setTransform(316.3,341.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_264.setTransform(301.8,341.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_265.setTransform(281.4,341.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgDIAAgFIAAgCIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgMIgBgLIAAgXQABgNgCgKQgCgJgHgGQgEgDgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAKQABACAEAAIAJAAIADAAIABACIAAAFIgBADIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgGIABgCIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgJgBgEQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABACAAADIgBAKIAAARIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAHACAGQADAHABAHIAAAQIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_266.setTransform(266.9,336.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_267.setTransform(254.3,339.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_268.setTransform(237.2,339.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AATA9QgGgGgCgJIgBAAQgEAFgHAFQgHAFgKAEIgJAAIgJABQgEAAgEgCQgEgDgDgFQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgFIALgHIAIgFIAAgTIgBgJQgBgEgCgEQgDgCgDgCQgFgCgGAAIgLACQgFABgEADQgDADABADIABAIQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgDAAgEQAAgIAFgIQAGgHAJgFQAKgGAIgCQAJgDAJAAQAKAAAGADQAFACADADQAEAFACAFIABAMIAAAsIAAASQAAAMACAGQACAEAEAAQAEAAADgCIAEgCIABgCIACABIADACIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDADgEADQgFADgIAAQgIAAgFgFgAgBACIgOAIQgGAEgFAGQgEAGgBAKQABAIAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgEIAAglIgKAFg");
	this.shape_269.setTransform(226.2,341.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_270.setTransform(205.4,341.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AAJBBIgVAAIgXAAIgKABIgBgBIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADAAIAMAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgGIgGgFIgGgDIgCgBIAAgBIAAgCIAAgCIACgBIAegPIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABADIABAUIACAAQAFgKAKgIQAKgHAKgBQAHAAAEAFQAEAEAAAFQgBAHgDADQgEAEgFAAIgEgBIgEgBIgFgCIgFAAQgEAAgFACQgFADgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEAAIAOAAIACABIABABIAAAGIgBACIgBABIgKgBg");
	this.shape_271.setTransform(194,341.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_272.setTransform(181.1,341.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_273.setTransform(167.8,341.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgWA/QgIgDgEgDIgBgCIgBgCIgEgcIAAgCIACgBIADgBQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAHAOIAGAKQADAEAFADQAFADAGgBQAGABAGgDQAFgCAEgFQADgEAAgHQAAgKgGgGQgGgHgQgEQgJgDgIgFQgIgDgFgHQgFgIAAgLQAAgLAFgIQAHgJAJgEQAJgFALAAQAKAAAHACIALAEIAEADIABADIAFAUIgBACIgCABIgDACIgCAAIgBgCIgKgNQgDgFgFgEQgEgDgJAAQgFAAgFACQgFACgEAFQgDAEAAAHQAAAIADAEQAFAFAGADIAOAEQAQAFAKAHQAJAIABASQgBALgGAJQgGAKgKAEQgLAFgLAAQgMAAgHgDg");
	this.shape_274.setTransform(156,341.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_275.setTransform(136.7,341.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgDIAAgFIAAgCIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgMIgBgLIAAgXQABgNgCgKQgCgJgHgGQgEgDgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAKQABACAEAAIAJAAIADAAIABACIAAAFIgBADIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgGIABgCIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgJgBgEQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABACAAADIgBAKIAAARIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAHACAGQADAHABAHIAAAQIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACAAQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAIAAAEIAAADIgCABIgJgBg");
	this.shape_276.setTransform(122.2,336.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AAmBvIgNAAIgYAAIgeAAIgOABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgGIAAgCIACgBIAUAAQAGAAACgCQADgCAAgDIAAgOIABgZIAAgeIAAgYIAAgNIAAhMIgIAAIgOAAIgSABQgJAAgGACQgHADgGAFQgEAHgEAIIgGAMIgBABIgCAAIgFgBIgBgBIAAgBIADgNIAEgRIAFgPIABgJIABgDIACgBIADAAIABABIAEADQADACAEABIAKACIAQABIARABIAXAAIAOAAIAbAAIASgBIAQgBIAIgBIAHgEIAFgDIACgBIADAAIABABIABADIABAJIACAPIAEARIACANIAAACIgCABIgFABIgBAAIgBgCIgFgKIgHgOQgEgHgGgDQgEgBgKgCIgTgBIgSAAIgJAAIAABVIAAAKIAAAWIAAAaIAAAXIABALQgBAGADADQACADAGAAIASAAIADABIAAACIAAAGIAAACIgDABIgFgBg");
	this.shape_277.setTransform(103.2,336.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACAAIBSAAIAEAAIAAADIAAAKQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgDAAIhSAAIgBAAIgBAAg");
	this.shape_278.setTransform(79.3,339.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgaBuQgGgBgGgDQgGgCgHgIQgLgKgEgMQgEgLAAgPQAAgOAFgNQAFgNALgKQAJgJALgFQAMgFANAAIAQABIAPAEIAAg7IgBgJQgCgDgEgCQgEgCgIgBIgCgBIAAgCIAAgFIAAgBIACgBIANgCIAMgDIAIgBIAEgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAYIgBAiIAAAnIAABBIABAMIAAAKIACAFQACADAEABIAIABIAEABIABACIABACIAAACIgCABIgiAMIgCAAIgCgDIgEgNQgFAFgHAEQgHADgIACQgIACgIAAIgKAAgAgVgIQgHACgGAGQgIAJgDAKQgDALAAAJQABARAGANQAHANAJAIQAJAHAJAAQAMAAAJgFQAIgFADgGIABgGIABgEIAAg0IgBgHQAAgEgCgDQgDgGgIgFQgHgEgMgBQgIAAgHADg");
	this.shape_279.setTransform(632.9,283.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_280.setTransform(618.5,288.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgaBuQgGgBgGgDQgGgCgHgIQgLgKgEgMQgEgLAAgPQAAgOAFgNQAFgNALgKQAJgJALgFQAMgFANAAIAQABIAPAEIAAg7IgBgJQgCgDgEgCQgEgCgIgBIgCgBIAAgCIAAgFIAAgBIACgBIANgCIAMgDIAIgBIAEgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAYIgBAiIAAAnIAABBIABAMIAAAKIACAFQACADAEABIAIABIAEABIABACIABACIAAACIgCABIgiAMIgCAAIgCgDIgEgNQgFAFgHAEQgHADgIACQgIACgIAAIgKAAgAgVgIQgHACgGAGQgIAJgDAKQgDALAAAJQABARAGANQAHANAJAIQAJAHAJAAQAMAAAJgFQAIgFADgGIABgGIABgEIAAg0IgBgHQAAgEgCgDQgDgGgIgFQgHgEgMgBQgIAAgHADg");
	this.shape_281.setTransform(604.5,283.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9QAAAGABACQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgJgBg");
	this.shape_282.setTransform(588.6,288.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_283.setTransform(574.1,288.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgXA+QgHgDgDgCIgCgBIAAgDIgGgdIABgBIABgBIAFAAQAAgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAIAPIAGAKQADAEAEACQAEADAIAAQAFAAAFgDQAGgCADgEQAEgFAAgHQABgKgHgGQgGgHgQgFQgJgCgIgEQgIgEgFgIQgFgHAAgMQAAgKAGgIQAFgJAKgEQAKgFAKAAQALAAAGACIAKAEIAEADIACACIAEAWIAAABIgCABIgEABIgBAAIgBgBIgLgOQgCgFgFgDQgFgDgIgBQgFABgGACQgFACgDAEQgDAFgBAGQABAJAEAFQAEAEAHADIAMAEQARAEAJAIQAKAJAAAQQAAAMgGAKQgGAIgKAFQgKAFgMAAQgLAAgJgEg");
	this.shape_284.setTransform(554.6,288.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAFgHAFQgHAFgKAEIgJABIgJAAQgEAAgEgCQgEgCgDgGQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgFIAIgFIAAgTIgBgJQgBgFgCgEQgDgCgDgCQgFgCgGAAIgLABQgFADgEACQgDADABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDADgEADQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgkIgKAGg");
	this.shape_285.setTransform(543.4,288.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgCIAAgFIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgMIgBgKIAAgZQABgMgCgJQgCgKgHgGQgEgCgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAFAAADIAABBIABAKQABADAEAAIAJAAIADABIABACIAAAFIgBACIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgOIAAgSIAAgRIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQABACAAAEIgBAJIAAARIAAAVIAAAUIAAAOIAAATIABAAQAIgJAMgGQAKgEAKAAQAKAAAHADQAHACAGAHQAHAFACAGQADAIABAIIAAAQIAAARIAAARIAAAOIABAJQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_286.setTransform(528.5,283.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_287.setTransform(506.4,288.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("ABmBAIgRAAIgTAAIgJABIgCgBIgBgCIAAgFIABgDIADAAIAIAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIAAgMIAAgMIAAgrQABgIgDgGQgCgGgEgFQgFgDgFgBQgGgCgHAAQgHAAgHAFQgIAEgEAHQgDAGAAAHIgBARIAAAzQAAADABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIAAADIAAAEIAAADIgBABIgIgBIgTAAIgTAAIgIABIgCgBIgBgCIAAgFIABgDIADAAIAIAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg9IgBgRQgBgHgCgDIgEgFQgEgDgFgBIgLgCQgGAAgHAEQgIAEgIAKIgDAJIAAALIAAA6QAAAEABACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIAMAAIACAAIABADIAAAEIgBADIgCABIgIgBIgTAAIgUAAIgJABIgBgBIgBgCIAAgFIABgDIADAAIAKAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgGIABgHIAAgIIAAg1QAAgEgCgEQgBgEgGgDIgFgDIgDgBIAAgCIAAgCIABgBIABgBIAbgOIADgBIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAADIACARIABAAQAHgKAMgGQAMgHANAAQALAAAKAGQAHAGAEALIADAAQAGgJAMgHQALgHAOAAQAIAAAHACQAHACAFAFIAHAIQAEAEACAHQACAHAAALIAABCQgBABABAAQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIADAAIAAADIAAAFIAAACIgCABIgHgBg");
	this.shape_288.setTransform(487.9,288.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAFgHAFQgHAFgKAEIgJABIgJAAQgEAAgEgCQgEgCgDgGQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgFIAIgFIAAgTIgBgJQgBgFgCgEQgDgCgDgCQgFgCgGAAIgLABQgFADgEACQgDADABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDADgEADQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgkIgKAGg");
	this.shape_289.setTransform(469.9,288.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AggBnQgMgBgLgHQgIgEgDgHQgEgFAAgIQAAgIAFgHQAFgIAHgEIAOgJIAAgBQgJgCgFgGQgFgGgBgHQABgHAEgGQAFgEAGgEQAGgFAFgCIAAAAQgGgDgGgGQgGgFgFgJQgEgKAAgNQAAgKAFgJQAGgKALgHQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgEAIABQAHAAAEADQADAEAAAFQAAAEgDAEQgEADgFAAQgEAAgCgCIgEgCIgDgCIgEgBIgEAAIgFACIADAKQABAFAAAHQAAAKgCAIQgDAIgGAHQgEAFgGADIgNAFQgGACgFAAIgIgBIgHgBIgHAEIgGAFQgDADAAAEQAAAGAFACQAEADAIAAIASgBQASAAAMACQAMACAJAIQAJAHADAHQADAJAAAFQAAAKgFAKQgEAJgMAIQgGAFgNAEQgNAFgSAAIgXgCgAAAAkIgcACQgFAAgFAEQgGAEgEAGQgEAGAAAIQAAAGAEAGQADAFAFAEQAHAFAJACQAKABAPAAIALgBIAPgFQAHgEAFgGQAFgGgBgIQAAgOgKgJQgJgHgSAAIgGABgAgRhfQgFACgFAGQgHAHgCAKQgDAJABAJQAAAIACAGQADAHAEAFQAEAEAFACQAEACAFAAQAKgBAFgGQAGgIADgJQACgLAAgJQAAgKgCgGQgCgHgEgEIgHgFQgDgCgDAAIgLABg");
	this.shape_290.setTransform(455.8,292.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_291.setTransform(434.5,288.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAAgFIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgMIgBgKIAAgZQABgMgCgJQgCgKgHgGQgEgCgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAFAAADIAABBIABAKQABADAEAAIAJAAIADABIABACIAAAFIgBACIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgOIAAgSIAAgRIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQABACAAAEIgBAJIAAARIAAAVIAAAUIAAAOIAAATIABAAQAIgJAMgGQAKgEAKAAQAKAAAHADQAHACAGAHQAHAFACAGQADAIABAIIAAAQIAAARIAAARIAAAOIABAJQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_292.setTransform(420,283.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_293.setTransform(407.4,286.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgXA+QgIgDgDgCIgBgBIgBgDIgFgdIABgBIACgBIADAAQABgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAHAPIAHAKQADAEAEACQAFADAGAAQAGAAAFgDQAGgCADgEQAEgFAAgHQAAgKgGgGQgGgHgQgFQgJgCgIgEQgIgEgFgIQgFgHAAgMQAAgKAFgIQAHgJAJgEQAKgFAKAAQALAAAGACIAKAEIAFADIABACIAEAWIgBABIgBABIgDABIgCAAIgBgBIgLgOQgCgFgFgDQgEgDgJgBQgFABgFACQgFACgEAEQgDAFgBAGQABAJAEAFQAEAEAGADIAOAEQAQAEAKAIQAJAJABAQQgBAMgGAKQgGAIgKAFQgKAFgMAAQgMAAgIgEg");
	this.shape_294.setTransform(389.3,288.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_295.setTransform(377.7,288.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_296.setTransform(366.7,286.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAFgHAFQgHAFgKAEIgJABIgJAAQgEAAgEgCQgEgCgDgGQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgFIAIgFIAAgTIgBgJQgBgFgCgEQgDgCgDgCQgFgCgGAAIgLABQgFADgEACQgDADABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDADgEADQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgkIgKAGg");
	this.shape_297.setTransform(355.8,288.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_298.setTransform(343,288.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AAZBiIgLAAIgNgBIgUABIgKAAIgDAAIAAgCIAAgGIAAgCIADgBIAOAAIAEgBIACgEIAAgOIAAgNIAAgtQAAgHgDgEQgDgEgLgBIgCgBIgBgCIAAgDIABgBIABAAIAQgHIAPgJIAEgBIACAAIABABIAAACIAAARIAAAgIAAAgIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAIANAAIADABIAAADIAAAEIAAACIgDABIgFAAgAgOhCQgEgDgCgDQgEgEAAgFQABgGAEgFQAFgGAJABQAHgBAFAGQADAFAAAFQAAAHgDAFQgFAGgJAAQgDAAgEgCg");
	this.shape_299.setTransform(332.5,284.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgaBuQgGgBgGgDQgGgCgHgIQgLgKgEgMQgEgLAAgPQAAgOAFgNQAFgNALgKQAJgJALgFQAMgFANAAIAQABIAPAEIAAg7IgBgJQgCgDgEgCQgEgCgIgBIgCgBIAAgCIAAgFIAAgBIACgBIANgCIAMgDIAIgBIAEgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAYIgBAiIAAAnIAABBIABAMIAAAKIACAFQACADAEABIAIABIAEABIABACIABACIAAACIgCABIgiAMIgCAAIgCgDIgEgNQgFAFgHAEQgHADgIACQgIACgIAAIgKAAgAgVgIQgHACgGAGQgIAJgDAKQgDALAAAJQABARAGANQAHANAJAIQAJAHAJAAQAMAAAJgFQAIgFADgGIABgGIABgEIAAg0IgBgHQAAgEgCgDQgDgGgIgFQgHgEgMgBQgIAAgHADg");
	this.shape_300.setTransform(321,283.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9QAAAGABACQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgJgBg");
	this.shape_301.setTransform(305.1,288.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AAZBiIgLAAIgNgBIgUABIgKAAIgDAAIAAgCIAAgGIAAgCIADgBIAOAAIAEgBIACgEIAAgOIAAgNIAAgtQAAgHgDgEQgDgEgLgBIgCgBIgBgCIAAgDIABgBIABAAIAQgHIAPgJIAEgBIACAAIABABIAAACIAAARIAAAgIAAAgIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAIANAAIADABIAAADIAAAEIAAACIgDABIgFAAgAgOhCQgEgDgCgDQgEgEAAgFQABgGAEgFQAFgGAJABQAHgBAFAGQADAFAAAFQAAAHgDAFQgFAGgJAAQgDAAgEgCg");
	this.shape_302.setTransform(292.9,284.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_303.setTransform(276.8,286.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAFgHAFQgHAFgKAEIgJABIgJAAQgEAAgEgCQgEgCgDgGQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgFIAIgFIAAgTIgBgJQgBgFgCgEQgDgCgDgCQgFgCgGAAIgLABQgFADgEACQgDADABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDADgEADQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgkIgKAGg");
	this.shape_304.setTransform(265.9,288.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgCIAAgFIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgMIgBgKIAAgZQABgMgCgJQgCgKgHgGQgEgCgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAFAAADIAABBIABAKQABADAEAAIAJAAIADABIABACIAAAFIgBACIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgOIAAgSIAAgRIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQABACAAAEIgBAJIAAARIAAAVIAAAUIAAAOIAAATIABAAQAIgJAMgGQAKgEAKAAQAKAAAHADQAHACAGAHQAHAFACAGQADAIABAIIAAAQIAAARIAAARIAAAOIABAJQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACABQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAIAAAEIAAADIgCABIgJAAg");
	this.shape_305.setTransform(250.9,283.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_306.setTransform(238.3,286.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AggBnQgMgBgLgHQgIgEgDgHQgEgFAAgIQAAgIAFgHQAFgIAHgEIAOgJIAAgBQgJgCgFgGQgFgGgBgHQABgHAEgGQAFgEAGgEQAGgFAFgCIAAAAQgGgDgGgGQgGgFgFgJQgEgKAAgNQAAgKAFgJQAGgKALgHQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgEAIABQAHAAAEADQADAEAAAFQAAAEgDAEQgEADgFAAQgEAAgCgCIgEgCIgDgCIgEgBIgEAAIgFACIADAKQABAFAAAHQAAAKgCAIQgDAIgGAHQgEAFgGADIgNAFQgGACgFAAIgIgBIgHgBIgHAEIgGAFQgDADAAAEQAAAGAFACQAEADAIAAIASgBQASAAAMACQAMACAJAIQAJAHADAHQADAJAAAFQAAAKgFAKQgEAJgMAIQgGAFgNAEQgNAFgSAAIgXgCgAAAAkIgcACQgFAAgFAEQgGAEgEAGQgEAGAAAIQAAAGAEAGQADAFAFAEQAHAFAJACQAKABAPAAIALgBIAPgFQAHgEAFgGQAFgGgBgIQAAgOgKgJQgJgHgSAAIgGABgAgRhfQgFACgFAGQgHAHgCAKQgDAJABAJQAAAIACAGQADAHAEAFQAEAEAFACQAEACAFAAQAKgBAFgGQAGgIADgJQACgLAAgJQAAgKgCgGQgCgHgEgEIgHgFQgDgCgDAAIgLABg");
	this.shape_307.setTransform(218.5,292.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgJgBg");
	this.shape_308.setTransform(203.3,288.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AAYBiIgKAAIgMgBIgVABIgLAAIgBAAIgBgCIAAgGIABgCIACgBIAPAAIADgBIABgEIAAgOIAAgNIAAgtQABgHgDgEQgDgEgLgBIgDgBIAAgCIAAgDIAAgBIACAAIAPgHIARgJIACgBIAEAAIABABIAAACIgBARIAAAgIAAAgIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAOAAIACABIABADIAAAEIgBACIgBABIgHAAgAgOhCQgEgDgCgDQgDgEAAgFQgBgGAFgFQAFgGAKABQAGgBAEAGQAEAFABAFQgBAHgEAFQgEAGgIAAQgEAAgEgCg");
	this.shape_309.setTransform(191.2,284.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgCIAAgFIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgMIgBgKIAAgZQABgMgCgJQgCgKgHgGQgEgCgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAFAAADIAABBIABAKQABADAEAAIAJAAIADABIABACIAAAFIgBACIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgOIAAgSIAAgRIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQABACAAAEIgBAJIAAARIAAAVIAAAUIAAAOIAAATIABAAQAIgJAMgGQAKgEAKAAQAKAAAHADQAHACAGAHQAHAFACAGQADAIABAIIAAAQIAAARIAAARIAAAOIABAJQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_310.setTransform(179.1,283.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_311.setTransform(166.5,286.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_312.setTransform(155.1,288.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("ABmBAIgRAAIgTAAIgJABIgDgBIAAgCIAAgFIABgDIADAAIAIAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIABgMIAAgMIAAgrQAAgIgCgGQgBgGgGgFQgDgDgHgBQgFgCgGAAQgIAAgIAFQgHAEgEAHQgDAGAAAHIgBARIAAAzQAAADACACQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIABADIAAAEIgBADIgCABIgHgBIgUAAIgSAAIgJABIgBgBIgBgCIAAgFIABgDIACAAIAJAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg9IgBgRQgBgHgCgDIgEgFQgEgDgFgBIgKgCQgGAAgJAEQgIAEgGAKIgEAJIgBALIAAA6QAAAEACACQAAAAABABQAAAAABAAQAAABABAAQABAAABAAIAKAAIADAAIABADIAAAEIgBADIgCABIgJgBIgTAAIgTAAIgJABIgBgBIAAgCIAAgFIAAgDIADAAIAKAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABgBIABgGIAAgHIAAgIIAAg1QAAgEgBgEQgCgEgGgDIgGgDIgCgBIAAgCIAAgCIABgBIABgBIAagOIAEgBIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAADIACARIABAAQAHgKALgGQAMgHAOAAQAMAAAJAGQAHAGAFALIABAAQAHgJAMgHQAMgHANAAQAJAAAGACQAHACAFAFIAHAIQAEAEABAHQADAHAAALIAABCQAAABAAAAQAAABAAABQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIADAAIABADIAAAFIgBACIgCABIgHgBg");
	this.shape_313.setTransform(136.6,288.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_314.setTransform(116.9,288.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgXBqQgLgEgKgHIgEgDIgDgBIgCACIgCAEIgDADIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgBgEIACgKIABgQIACgRIABgLIABgBIABgBIAEABIACAAIAAACQAAAHACAIQACAJAHALQAHAKALAGQAMAGALAAQAJAAAJgEQAKgEAGgIQAGgJABgNQgBgPgGgKQgGgKgLgGQgKgGgLgEIgNgFIgQgGQgJgFgGgHQgIgHgDgLQgEgLAAgPQAAgLAGgKQAFgKAHgHQAJgIAKgDQALgEAMAAQANABAIACIAOAFQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIADgBIADgEIACgBIACgBIACACIABADIABALIABAPIABANIABAJIgBACIAAAAIgEABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBgGgEgJQgFgIgJgKQgFgGgJgDQgIgEgJAAQgNAAgJAGQgHAFgEAIQgEAIABAIQgBAHACAHQACAGAGAGQAEAFAHADIAMAGIAKAEIAcAKQAMAGAIAIQAGAHAEAKQADAJAAAPQAAASgGAPQgIAOgOAJQgNAJgUABQgOgBgMgEg");
	this.shape_315.setTransform(101.4,284);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACAAIBSAAIAEAAIAAADIAAAKQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAIgDAAIhSAAIgBAAIgBAAg");
	this.shape_316.setTransform(79.3,286.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgGBAQgEgBgEgEQgDgDAAgIIACgGQABgFAEgCQAEgDAHgBQAGABAFAEQAFAFABAIQgBAIgEAFQgFAEgHAAIgHgCgAgGggQgEgBgEgEQgDgEAAgIIACgGQABgEAEgDQAEgDAHAAQAGAAAFAEQAFAFABAJQgBAIgEAEQgFAFgHgBIgHgBg");
	this.shape_317.setTransform(237,235.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_318.setTransform(227,235.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgaBuQgGgBgGgDQgGgCgHgIQgLgKgEgMQgEgLAAgPQAAgOAFgNQAFgNALgKQAJgJALgFQAMgFANAAIAQABIAPAEIAAg7IgBgJQgCgDgEgCQgEgCgIgBIgCgBIAAgCIAAgFIAAgBIACgBIANgCIAMgDIAIgBIAEgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAYIgBAiIAAAnIAABBIABAMIAAAKIACAFQACADAEABIAIABIAEABIABACIABACIAAACIgCABIgiAMIgCAAIgCgDIgEgNQgFAFgHAEQgHADgIACQgIACgIAAIgKAAgAgVgIQgHACgGAGQgIAJgDAKQgDALAAAJQABARAGANQAHANAJAIQAJAHAJAAQAMAAAJgFQAIgFADgGIABgGIABgEIAAg0IgBgHQAAgEgCgDQgDgGgIgFQgHgEgMgBQgIAAgHADg");
	this.shape_319.setTransform(213,230.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgaA/QgIgDgHgJQgGgIgCgHQgDgHAAgKIgBgaIAAgjQAAgGgDgCQgDgDgFAAIgFgBIgCgBIAAgGIABgCIADAAIAaAAIADAAIABgBIACAAIACAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABADIgBALIAAAXIAAAWIgBANIABAPQACAJAEAHQAGAHAGACQAGACAGAAQAGAAAHgFQAIgEAEgGIACgEIABgEIAAhHQAAgGgDgCQgEgCgGAAIgFgBIgBgBIAAgFIAAgDIADAAIAcAAIADAAIACgBIACAAIACAAIACABIABACIgBAFIgBAMIAAAXIAAAVIAAAVIAAAPQABAHACABQACACADAAIAEAAIAGgBIADAAIABABIABAEIgBACIgBABIgfALIgDAAIgDABIgCgBIgBgDIgCgRIgBAAQgHAJgLAGQgKAFgMABIgCAAQgFAAgGgCg");
	this.shape_320.setTransform(197.2,235.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAXBsIgXAAIgWAAIgLABIgCgBIAAgCIAAgFQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIADAAIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgBAAgFIAAgNIABgXIAAgXIAAgSIAAgSIgBgXIAAgUIAAgOQgBgIgEgEQgDgEgIgCIgGgCIgBgBIgBAAIAAgDIABgBIACgBIARgIQAKgEAHgFIAEgCIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAFIAAATIgBAcIAAAcIAAAUIAAAZIAAARIAAAVIAAAUIAAANIACAHQABACAFAAIAOAAIACABIABACIAAAFIAAACIgCABIgLgBg");
	this.shape_321.setTransform(185.8,230.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_322.setTransform(176.1,235.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgJgBg");
	this.shape_323.setTransform(161.8,235.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAYBiIgKAAIgNAAIgUAAIgKAAIgCAAIgBgCIAAgGIABgCIACAAIAPAAIADgBIABgGIAAgNIAAgOIAAgsQABgIgDgCQgDgFgLgCIgDgBIAAgBIAAgCIAAgBIACgCIAQgGIAQgIIACgBIADgBIACABIAAADIgBARIAAAeIAAAhIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAOAAIADABIAAABIAAAGIAAACIgCAAIgHAAgAgOhCQgEgDgCgDQgDgEAAgFQgBgGAFgFQAFgFAKgBQAGABAFAFQADAFAAAFQAAAGgDAGQgFAFgJABQgDAAgEgCg");
	this.shape_324.setTransform(149.7,231.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AAXBsIgXAAIgWAAIgLABIgBgBIgBgCIAAgFIABgDIADAAIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgBAAgFIAAgNIAAgXIAAgXIAAgSIAAgSIAAgXIAAgUIgBgOQAAgIgDgEQgEgEgHgCIgHgCIgBgBIAAAAIAAgDIABgBIABgBIASgIQAJgEAIgFIADgCIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAFIAAATIAAAcIgBAcIAAAUIAAAZIAAARIAAAVIAAAUIAAANIACAHQACACAEAAIANAAIADABIABACIAAAFIAAACIgCABIgLgBg");
	this.shape_325.setTransform(134.2,230.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AAXBsIgXAAIgWAAIgLABIgCgBIAAgCIAAgFIABgDIADAAIAOAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQACgBAAgFIAAgNIABgXIAAgXIAAgSIAAgSIgBgXIAAgUIAAgOQgBgIgEgEQgDgEgIgCIgGgCIgBgBIgBAAIAAgDIABgBIADgBIAQgIQAKgEAHgFIAEgCIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAFIAAATIgBAcIAAAcIAAAUIAAAZIAAARIAAAVIAAAUIAAANIACAHQABACAFAAIAOAAIACABIABACIAAAFIAAACIgCABIgLgBg");
	this.shape_326.setTransform(126.5,230.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AAZBiIgLAAIgNAAIgUAAIgLAAIgCAAIAAgCIAAgGIAAgCIADAAIAOAAIAEgBIACgGIAAgNIAAgOIAAgsQAAgIgDgCQgDgFgLgCIgCgBIgBgBIAAgCIABgBIABgCIAPgGIAQgIIAEgBIACgBIABABIAAADIAAARIAAAeIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABABABAAIANAAIACABIABABIAAAGIgBACIgCAAIgFAAgAgOhCQgEgDgDgDQgDgEAAgFQABgGAEgFQAFgFAJgBQAHABAFAFQADAFAAAFQAAAGgDAGQgFAFgIABQgEAAgEgCg");
	this.shape_327.setTransform(118.7,231.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AAiBAIgCgFIgehUIgBAAIgkBVIgDAFIgDABQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgFIgohpQgBgDgDgCQgDgCgFAAIgHAAIgCgBIAAgCIAAgGIAAgCIACgBIAJABIASAAIAQAAIAJgBIACABIABACIAAAGIgBACIgCABIgCAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAABQgBACABADIAYBPIABAAIAfhIIgBgGIgCgEIgDgCIgFAAIgFAAIgBgBIgBgBIAAgHIABgCIACAAIAJAAIARABIAQgBIAHAAIACAAIAAACIAAAGIAAACIgCABIgGAAQAAAAgBAAQgBAAAAAAQAAAAgBABQAAAAgBAAQgBADABADIAXBIIABAAIAYhBQADgIgBgEQgCgFgEABIgFAAIgBgBIAAgCIAAgGIAAgCIACgBIAHABIAQAAIAOAAIAIgBIABABIABACIAAAGIgBACIgBABIgIAAQgDAAgCABIgEADIgGAOIgLAZIgMAeIgLAbIgGAOQAAABgBABQAAAAAAABQAAAAgBAAQAAAAAAABIgEABIgDgCg");
	this.shape_328.setTransform(104.3,235.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_329.setTransform(82,233.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAfBrIgdgBIgfABIgMAAIgCAAIgBgCIAAgIIABgBIACgBIAQAAQAFABAEgCQAEgCABgFIAAgJIABgTIAAgWIAAgVIAAgOIAAgUIAAgKIAAgPIAAgSIgBgPIAAgIQAAgFgDgDQgDgCgJAAIgRAAIgCgBIgBgBIAAgIIABgCIABAAIAPAAIAfABIAdgBIAMAAIABABIABABIAAAIIgBABIgCABIgOAAQgEAAgDACQgDACAAAEIAAAJIgBARIAAAVIAAARIAAAJIAAAWIAAAJIAAASIAAAVIABATIAAAJQAAAGADADQAEACAHgBIAMAAIACABIABABIAAAIQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgNAAg");
	this.shape_330.setTransform(70.9,230.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgXA+QgIgCgCgDIgCgBIAAgDIgFgdIAAgBIABgBIAFAAQAAgBAAAAQABAAAAABQAAAAAAAAQABABAAAAIAIAPIAFAKQADAEAFACQAEACAIABQAFgBAGgCQAFgCAEgEQADgFAAgHQABgKgHgGQgGgHgQgFQgJgCgIgEQgIgEgFgIQgFgHAAgMQAAgKAGgIQAFgIAKgFQAJgFALAAQALAAAGACIALAEIADADIACACIAEAWIAAABIgCABIgEABIgBAAIgBgBIgKgNQgDgGgFgDQgFgDgIgBQgFABgGACQgFACgDAEQgDAFgBAGQABAJADAFQAFAEAHADIAMAEQARAEAJAIQAKAJAAAQQAAAMgGAKQgGAIgKAFQgLAFgLAAQgLAAgJgEg");
	this.shape_331.setTransform(616.2,182.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgaBuQgGgBgGgDQgGgCgHgIQgLgKgEgMQgEgLAAgPQAAgOAFgNQAFgNALgKQAJgJALgFQAMgFANAAIAQABIAPAEIAAg7IgBgJQgCgDgEgCQgEgCgIgBIgCgBIAAgCIAAgFIAAgBIACgBIANgCIAMgDIAIgBIAEgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAYIgBAiIAAAnIAABBIABAMIAAAKIACAFQACADAEABIAIABIAEABIABACIABACIAAACIgCABIgiAMIgCAAIgCgDIgEgNQgFAFgHAEQgHADgIACQgIACgIAAIgKAAgAgVgIQgHACgGAGQgIAJgDAKQgDALAAAJQABARAGANQAHANAJAIQAJAHAJAAQAMAAAJgFQAIgFADgGIABgGIABgEIAAg0IgBgHQAAgEgCgDQgDgGgIgFQgHgEgMgBQgIAAgHADg");
	this.shape_332.setTransform(603.3,177.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgJgBg");
	this.shape_333.setTransform(587.4,182.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_334.setTransform(572.9,182.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_335.setTransform(552.5,182.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("ABlBAIgRAAIgTAAIgJABIgBgBIgBgCIAAgFIABgDIADAAIAHAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIAAgMIAAgMIAAgrQAAgIgBgGQgCgGgFgFQgEgDgGgBQgGgCgHAAQgHAAgHAFQgIAEgEAHQgDAGgBAHIAAARIAAAzQAAADABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIAAADIAAAEIAAADIgCABIgIgBIgTAAIgSAAIgIABIgCgBIAAgCIAAgFIAAgDIADAAIAIAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAAg9IgBgRQgCgHgCgDIgEgFQgDgDgGgBIgKgCQgGAAgJAEQgIAEgHAKIgDAJIAAALIAAA6QgBAEACACQAAAAABABQAAAAABAAQAAABABAAQABAAABAAIALAAIACAAIAAADIAAAEIAAADIgCABIgIgBIgTAAIgTAAIgJABIgCgBIgBgCIAAgFIABgDIADAAIAKAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgGIABgHIAAgIIAAg1QAAgEgCgEQgBgEgFgDIgGgDIgCgBIgBgCIAAgCIABgBIABgBIAbgOIACgBIADgBQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIABADIABARIABAAQAHgKALgGQAMgHAOAAQALAAAJAGQAIAGAFALIACAAQAGgJAMgHQAMgHAOAAQAHAAAHACQAHACAGAFIAGAIQADAEACAHQACAHAAALIAABCQAAABABAAQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIACAAIABADIAAAFIAAACIgCABIgIgBg");
	this.shape_336.setTransform(534,182.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAGgHAEQgHAFgKAEIgJABIgJAAQgEAAgEgCQgEgCgDgGQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgGIALgFIAIgGIAAgTIgBgJQgBgEgCgEQgDgDgDgBQgFgCgGAAIgLACQgFACgEACQgDADABAEIABAHQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgCAAgGQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAFAEAAQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgFIAAgkIgKAGg");
	this.shape_337.setTransform(516,182.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AggBnQgMgBgLgHQgIgEgDgHQgEgFAAgIQAAgIAFgIQAFgHAHgEIAOgJIAAgBQgJgCgFgGQgFgGgBgHQABgHAEgGQAFgEAGgEQAGgFAFgCIAAAAQgGgDgGgGQgGgFgFgJQgEgKAAgNQAAgJAFgKQAGgKALgHQAMgHARAAQAKAAAIAEQAIADAEAEIAGAGIAOgIQAHgEAIABQAHAAAEADQADAFAAAEQAAAEgDAEQgEADgFAAQgEAAgCgCIgEgCIgDgCIgEgBIgEAAIgFACIADAKQABAFAAAHQAAAJgCAJQgDAIgGAHQgEAFgGADIgNAFQgGACgFAAIgIAAIgHgCIgHAEIgGAFQgDADAAAEQAAAGAFACQAEADAIAAIASgBQASgBAMADQAMACAJAIQAJAHADAHQADAJAAAFQAAAKgFAJQgEAKgMAIQgGAFgNAEQgNAFgSAAIgXgCgAAAAkIgcABQgFABgFAFQgGADgEAGQgEAGAAAIQAAAGAEAGQADAFAFAEQAHAFAJACQAKABAPAAIALgBIAPgFQAHgEAFgGQAFgGgBgJQAAgNgKgIQgJgIgSAAIgGABgAgRhfQgFADgFAFQgHAIgCAJQgDAJABAJQAAAHACAIQADAGAEAFQAEAEAFACQAEACAFAAQAKgBAFgGQAGgIADgJQACgLAAgJQAAgKgCgHQgCgGgEgEIgHgFQgDgCgDAAIgLABg");
	this.shape_338.setTransform(501.9,186.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_339.setTransform(480.6,182.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgCIAAgGIAAgBIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgMIgBgKIAAgZQABgMgCgJQgCgJgHgHQgEgCgFgDQgFgCgFAAQgGAAgHADQgIADgGAGIgEAGQgCAFAAADIAABBIABALQABACAEAAIAJAAIADABIABABIAAAGIgBACIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgGIABgBIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgOIAAgSIAAgRIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgCIgFgBIgCgBIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAQABACAAAEIgBAJIAAARIAAAVIAAAUIAAAOIAAATIABAAQAIgJAMgGQAKgEAKAAQAKAAAHACQAHADAGAGQAHAGACAGQADAIABAHIAAARIAAARIAAARIAAAOIABAJQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_340.setTransform(466.1,177.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_341.setTransform(453.5,180.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgJgBg");
	this.shape_342.setTransform(433,182.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_343.setTransform(418.5,182.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgCIAAgGIAAgBIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgMIgBgKIAAgZQABgMgCgJQgCgJgHgHQgEgCgFgDQgFgCgFAAQgGAAgHADQgIADgGAGIgEAGQgCAFAAADIAABBQAAAIABADQABACAEAAIAJAAIADABIABABIAAAGIgBACIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgGIABgBIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgOIAAgSIAAgRIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgCIgFgBIgCgBIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQABACAAAEIgBAJIAAARIAAAVIAAAUIAAAOIAAATIABAAQAIgJAMgGQAKgEAKAAQAKAAAHACQAHADAGAGQAHAGACAGQADAIABAHIAAARIAAARIAAARIAAAOIABAJQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_344.setTransform(404,177.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AAiBAIgCgEIgehVIgBAAIgkBWIgDADIgDABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgEIgohpQgBgFgDgCQgDgCgFAAIgHAAIgCAAIAAgCIAAgGIAAgCIACAAIAJAAIASAAIAQAAIAJAAIACAAIABACIAAAGIgBACIgCAAIgCAAQgBAAAAABQgBAAgBAAQAAAAAAABQgBAAAAAAQgBACABAFIAYBPIABAAIAfhJIgBgGIgCgDIgDgDIgFgBIgFAAIgBAAIgBgCIAAgGIABgCIACgBIAJABIARAAIAQAAIAHgBIACABIAAABIAAAHIAAABIgCABIgGAAQAAAAgBABQgBAAAAAAQAAAAgBABQAAAAgBABQgBABABAEIAXBIIABAAIAYhBQADgIgBgEQgCgEgEgBIgFAAIgBAAIAAgCIAAgGIAAgCIACAAIAHAAIAQAAIAOAAIAIAAIABAAIABACIAAAGIgBACIgBAAIgIAAQgDABgCABIgEAEIgGAMIgLAaIgMAeIgLAbIgGAPQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEABIgDgBg");
	this.shape_345.setTransform(385.6,182.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_346.setTransform(360.1,182.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AggBnQgMgBgLgHQgIgEgDgHQgEgFAAgIQAAgIAFgIQAFgHAHgEIAOgJIAAgBQgJgCgFgGQgFgGgBgHQABgHAEgGQAFgEAGgEQAGgFAFgCIAAAAQgGgDgGgGQgGgFgFgJQgEgKAAgNQAAgJAFgKQAGgKALgHQAMgHARAAQAKAAAIAEQAIADAEAEIAGAGIAOgIQAHgEAIABQAHAAAEADQADAFAAAEQAAAEgDAEQgEADgFAAQgEAAgCgCIgEgCIgDgCIgEgBIgEAAIgFACIADAKQABAFAAAHQAAAJgCAJQgDAIgGAHQgEAFgGADIgNAFQgGACgFAAIgIAAIgHgCIgHAEIgGAFQgDADAAAEQAAAGAFACQAEADAIAAIASgBQASgBAMADQAMACAJAIQAJAHADAHQADAJAAAFQAAAKgFAJQgEAKgMAIQgGAFgNAEQgNAFgSAAIgXgCgAAAAkIgcABQgFABgFAFQgGADgEAGQgEAGAAAIQAAAGAEAGQADAFAFAEQAHAFAJACQAKABAPAAIALgBIAPgFQAHgEAFgGQAFgGgBgJQAAgNgKgIQgJgIgSAAIgGABgAgRhfQgFADgFAFQgHAIgCAJQgDAJABAJQAAAHACAIQADAGAEAFQAEAEAFACQAEACAFAAQAKgBAFgGQAGgIADgJQACgLAAgJQAAgKgCgHQgCgGgEgEIgHgFQgDgCgDAAIgLABg");
	this.shape_347.setTransform(345.6,186.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgCgBIAAgCIAAgFIABgCIADgBIAOAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQACgCAAgEIAAgOIABgXIAAgYIAAgSIAAgSIgBgWIAAgVIAAgNQgBgHgEgEQgDgFgIgCIgGgCIgBAAIgBgBIAAgDIABgBIADgBIAQgIQAKgEAHgGIAEgBIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAEIAAAUIgBAcIAAAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAHQABACAFAAIAOAAIACABIABACIAAAFIgBACIgBABIgLAAg");
	this.shape_348.setTransform(326.8,177.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgBgBIgBgCIAAgFIABgCIADgBIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAAAQACgCAAgEIAAgOIAAgXIAAgYIAAgSIAAgSIAAgWIAAgVIgBgNQAAgHgDgEQgFgFgGgCIgGgCIgCAAIAAgBIAAgDIABgBIABgBIASgIQAJgEAIgGIADgBIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAEIAAAUIAAAcIgBAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAHQACACAEAAIANAAIADABIABACIAAAFIgBACIgBABIgLAAg");
	this.shape_349.setTransform(319.1,177.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AAYBiIgKAAIgNgBIgUABIgKABIgCgBIgBgCIAAgGIABgCIACgBIAPAAIADgBIABgEIAAgOIAAgNIAAgtQABgHgDgEQgDgEgLgBIgCgBIgBgCIAAgDIABgBIABAAIAQgHIAQgJIACgBIADAAIACABIAAADIgBAQIAAAfIAAAhIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAOAAIADABIAAADIAAAEIAAACIgCACIgHgBgAgOhDQgEgCgCgDQgDgEAAgFQgBgGAFgFQAFgGAKABQAGgBAFAGQADAFAAAFQAAAGgDAGQgFAGgJAAQgDAAgEgDg");
	this.shape_350.setTransform(311.2,178.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AAiBAIgCgEIgehVIgBAAIgkBWIgDADIgDABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgEIgohpQgBgFgDgCQgDgCgFAAIgHAAIgCAAIAAgCIAAgGIAAgCIACAAIAJAAIASAAIAQAAIAJAAIACAAIABACIAAAGIgBACIgCAAIgCAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBACABAFIAYBPIABAAIAfhJIgBgGIgCgDIgDgDIgFgBIgFAAIgBAAIgBgCIAAgGIABgCIACgBIAJABIARAAIAQAAIAHgBIACABIAAABIAAAHIAAABIgCABIgGAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBABQgBABABAEIAXBIIABAAIAYhBQADgIgBgEQgCgEgEgBIgFAAIgBAAIAAgCIAAgGIAAgCIACAAIAHAAIAQAAIAOAAIAIAAIABAAIABACIAAAGIgBACIgBAAIgIAAQgDABgCABIgEAEIgGAMIgLAaIgMAeIgLAbIgGAPQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEABIgDgBg");
	this.shape_351.setTransform(296.9,182.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgaA/QgIgDgHgJQgGgIgCgHQgDgHAAgKIgBgaIAAgjQAAgGgDgCQgDgDgFAAIgFgBIgCgBIAAgGIABgCIADAAIAaAAIADAAIABgBIACAAIACAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABADIgBALIAAAXIAAAWIgBANIABAPQACAJAEAHQAGAHAGACQAGACAGAAQAGAAAHgFQAIgEAEgGIACgEIABgEIAAhHQAAgGgDgCQgEgCgGAAIgFgBIgBgBIAAgFIAAgDIADAAIAcAAIADAAIACgBIACAAIACAAIACABIABACIgBAFIgBAMIAAAXIAAAVIAAAVIAAAPQABAHACABQACACADAAIAEAAIAGgBIADAAIABABIABAEIgBACIgBABIgfALIgDAAIgDABIgCgBIgBgDIgCgRIgBAAQgHAJgLAGQgKAFgMABIgCAAQgFAAgGgCg");
	this.shape_352.setTransform(271.3,182.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_353.setTransform(256.2,182.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("Ag/BkQgEgFAAgGQAAgFAEgDQAEgDAGgBIAIACIAFACIAEgBIADgBIAFgJIAHgPIAHgQIAFgLIgEgOIgJgZIgKgeIgIgaIgFgNIgFgIQgDgEgGAAIgIAAIgCAAIAAgDIAAgFIAAgCIACgBIAIAAIAUABIASgBIAKAAIACABIAAACIAAAFIAAADIgBAAIgGAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABIAAAEIADALIAFATIAHAVIAFATIAEAKIABAAIAEgJIAHgRIAJgVIAHgSIAEgJQABgGgBgDQgCgDgDAAIgFAAIgCAAIAAgDIAAgFIAAgCQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIAAIAQABIALgBIAHAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAACIAAAFIAAADIgBAAIgFAAIgFABIgGAEIgKAUIgRAkIgUAsIgMAgIgLAYIgIAPIgEAJQgDAEgFADQgFAEgIAAQgJAAgEgEg");
	this.shape_354.setTransform(242.4,186.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_355.setTransform(221.8,182.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKABIgBgBIAAgDIAAgEQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgGIgGgFIgGgDIgCgBIAAgBIAAgCIAAgCIACAAIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABADIABAVIACAAQAFgLAKgHQAKgIAKgBQAHAAAEAEQAEAFAAAFQgBAGgDAFQgEADgFAAIgEgBIgEgBIgFgBIgFgBQgEAAgFADQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABACAEAAIAOAAIACABIABADIAAAEIgBACIgBACIgKgBg");
	this.shape_356.setTransform(210.5,182.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_357.setTransform(198.8,182.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgCIAAgGIAAgBIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgMIgBgKIAAgZQABgMgCgJQgCgJgHgHQgEgCgFgDQgFgCgFAAQgGAAgHADQgIADgGAGIgEAGQgCAFAAADIAABBIABALQABACAEAAIAJAAIADABIABABIAAAGIgBACIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgGIABgBIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgOIAAgSIAAgRIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgCIgFgBIgCgBIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAQABACAAAEIgBAJIAAARIAAAVIAAAUIAAAOIAAATIABAAQAIgJAMgGQAKgEAKAAQAKAAAHACQAHADAGAGQAHAGACAGQADAIABAHIAAARIAAARIAAARIAAAOIABAJQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_358.setTransform(184.3,177.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AAiBAIgCgEIgehVIgBAAIgkBWIgDADIgDABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgEIgohpQgBgFgDgCQgDgCgFAAIgHAAIgCAAIAAgCIAAgGIAAgCIACAAIAJAAIASAAIAQAAIAJAAIACAAIABACIAAAGIgBACIgCAAIgCAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBACABAFIAYBPIABAAIAfhJIgBgGIgCgDIgDgDIgFgBIgFAAIgBAAIgBgCIAAgGIABgCIACgBIAJABIARAAIAQAAIAHgBIACABIAAABIAAAHIAAABIgCABIgGAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBABQgBABABAEIAXBIIABAAIAYhBQADgIgBgEQgCgEgEgBIgFAAIgBAAIAAgCIAAgGIAAgCIACAAIAHAAIAQAAIAOAAIAIAAIABAAIABACIAAAGIgBACIgBAAIgIAAQgDABgCABIgEAEIgGAMIgLAaIgMAeIgLAbIgGAPQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEABIgDgBg");
	this.shape_359.setTransform(165.8,182.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgWA+QgJgCgCgDIgCgBIgBgDIgEgdIAAgBIABgBIAEAAQABgBAAAAQABAAAAABQAAAAAAAAQABABAAAAIAIAPIAFAKQADAEAFACQAFACAGABQAGgBAGgCQAFgCAEgEQADgFAAgHQAAgKgGgGQgGgHgQgFQgJgCgIgEQgIgEgFgIQgFgHAAgMQAAgKAGgIQAFgIAKgFQAJgFALAAQALAAAGACIALAEIADADIACACIAFAWIgBABIgCABIgEABIgBAAIgBgBIgKgNQgDgGgFgDQgEgDgJgBQgFABgGACQgEACgEAEQgDAFAAAGQAAAJADAFQAFAEAGADIANAEQARAEAKAIQAJAJAAAQQAAAMgGAKQgGAIgKAFQgLAFgLAAQgLAAgIgEg");
	this.shape_360.setTransform(142.6,182.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AAZBiIgLAAIgNgBIgUABIgKABIgDgBIAAgCIAAgGIAAgCIADgBIAOAAIAEgBIACgEIAAgOIAAgNIAAgtQAAgHgDgEQgDgEgLgBIgCgBIgBgCIAAgDIABgBIABAAIAQgHIAQgJIADgBIACAAIABABIAAADIAAAQIAAAfIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAIANAAIADABIAAADIAAAEIAAACIgDACIgFgBgAgOhDQgEgCgCgDQgEgEAAgFQAAgGAFgFQAFgGAJABQAHgBAFAGQADAFAAAFQAAAGgDAGQgFAGgJAAQgDAAgEgDg");
	this.shape_361.setTransform(133.3,178.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgWA+QgIgCgEgDIgBgBIgBgDIgEgdIAAgBIACgBIADAAQABgBAAAAQABAAAAABQAAAAAAAAQABABAAAAIAHAPIAGAKQADAEAFACQAFACAGABQAGgBAFgCQAGgCADgEQAEgFAAgHQAAgKgGgGQgGgHgQgFQgJgCgIgEQgIgEgFgIQgFgHAAgMQAAgKAFgIQAHgIAJgFQAJgFALAAQAKAAAHACIAKAEIAFADIABACIAFAWIgCABIgBABIgDABIgCAAIgBgBIgLgNQgCgGgFgDQgEgDgJgBQgFABgFACQgFACgEAEQgDAFAAAGQAAAJADAFQAFAEAGADIAOAEQAQAEAKAIQAJAJABAQQgBAMgGAKQgGAIgKAFQgLAFgLAAQgMAAgHgEg");
	this.shape_362.setTransform(116.3,182.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AAZBiIgLAAIgNgBIgUABIgLABIgCgBIAAgCIAAgGIAAgCIADgBIAOAAIAEgBIACgEIAAgOIAAgNIAAgtQAAgHgDgEQgDgEgLgBIgCgBIgBgCIAAgDIABgBIABAAIAPgHIAQgJIAEgBIACAAIABABIAAADIAAAQIAAAfIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAIANAAIACABIABADIAAAEIgBACIgCACIgFgBgAgOhDQgEgCgDgDQgDgEAAgFQABgGAEgFQAFgGAJABQAHgBAFAGQADAFAAAFQAAAGgDAGQgFAGgJAAQgDAAgEgDg");
	this.shape_363.setTransform(107,178.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgCIAAgGIAAgBIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgMIgBgKIAAgZQABgMgCgJQgCgJgHgHQgEgCgFgDQgFgCgFAAQgGAAgHADQgIADgGAGIgEAGQgCAFAAADIAABBIABALQABACAEAAIAJAAIADABIABABIAAAGIgBACIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgGIABgBIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgOIAAgSIAAgRIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgCIgFgBIgCgBIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQABACAAAEIgBAJIAAARIAAAVIAAAUIAAAOIAAATIABAAQAIgJAMgGQAKgEAKAAQAKAAAHACQAHADAGAGQAHAGACAGQADAIABAHIAAARIAAARIAAARIAAAOIABAJQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_364.setTransform(94.9,177.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AAmBwIgNAAIgYgBIgfABIgNAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBABAAIAAgGIAAgCIACgBIATAAQAFAAADgCQADgCgBgDIABgOIAAgZIAAgeIAAgYIAAgNIAAhMIgHAAIgOAAIgSABQgJAAgHACQgGADgFAGQgFAGgEAHIgGANIgBABIgCAAIgGgBIgBgBIAAgBIAEgNIAEgRIAFgPIACgIIABgEIABgBIACAAIACABIAEADQAEADADAAIAKACIAQAAIARABIAXAAIAOAAIAbAAIATgBIAOAAIAJgBIAHgDIAGgEIABgBIACAAIACABIABAEIACAIIACAPIACARIACAOIAAACIgBAAIgFABIgBAAIgCgCIgEgKIgHgOQgFgHgFgDQgEgCgKgBIgUgBIgSAAIgIAAIAABVIAAAJIAAAXIAAAbIAAAWIAAALQAAAGADADQACADAGAAIATAAIACABIAAACIAAAHIAAACIgCAAIgGAAg");
	this.shape_365.setTransform(75.9,177.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AB4CBIgogBIglABIgRABQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQgCgCABgEIAAgJQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQACgCAFAAIARAAQAFABADgEQADgCABgIIABgaIAAgZIAAhNQABgTgDgNQgDgNgMgJQgLgJgLgBQgLgCgKAAQgIAAgNAFQgNAFgPAOQgIAKgDALQgDALAAAIIAAB8QAAALADAFQACAEAKgBIAPAAQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIAAAKIgBAFQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgQgBIglgBIgkABIgRABQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBgFIAAgKIABgEQABgCAEAAIARAAQAGABADgDQAEgCAAgIIAAiLQgBgNgGgJQgHgIgLgFIgFgDIgEgCIgBgDIAAgDIACgEIADgCIA0gcIAHgEIAEgBQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAIABAGIAEAkIABAAQAOgRAXgNQAWgNAXgBQANABANACQANADALAIQAKAFAGALQAIALAEALQAFALAAAIIAACZQAAAHADADQAFADAFgBIAUAAQAEAAABACIABAEIAAAJIgBAGQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAIgSgBg");
	this.shape_366.setTransform(511.7,101.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AARCCIgqgBIgtABIgVABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgBgEIAAgKQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBADAAIAYAAQAHAAADgCQADgEAAgFIABggIAAgoIAAg4QAAgPgCgIQgCgIgFgFQgFgEgIgFIgMgGIgDgBIgBgEIAAgDIABgDIADgCIA8gfIAFgBIADgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABAFIACAqIADAAQANgVATgPQATgQAUAAQAPAAAIAIQAHAHAAALQAAANgIAJQgIAHgJABQgFAAgEgCIgIgDIgJgDQgFgCgGAAQgIAAgJAFQgKAGgIAOIgEAMIgBAHIAAB8QgBAOAEAGQAEAFAIAAIAdAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAKIgBAEQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgVgBg");
	this.shape_367.setTransform(434.5,101.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgvDUQgXgIgSgOIgIgGIgGgBQgCAAgDADIgEAHQgDAFgCABQgDABgDAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgCgDABgEIACgWIADggIADghIACgWIABgDIADgBIAJABQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAIABAEQgBAOAEAQQAEARAOAWQAOAVAWAMQAXAMAYAAQATAAASgIQATgIANgRQAMgRABgbQAAgegNgTQgNgUgVgMQgVgMgYgIIgZgJQgPgGgRgJQgRgKgNgNQgPgPgIgWQgHgVAAgeQAAgXAMgUQAKgUAPgOQAQgPAWgHQAVgGAZAAQAZAAASAGQATAEAIAFIAGACQADgBACgCIAIgHIAEgDIAEgBQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQACADAAAEIABAWIACAdIADAbIACASIAAADIgDACIgHABQgBAAAAABQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgOgIgRQgIgRgSgTQgMgNgQgGQgQgHgUAAQgbABgQALQgQALgHAQQgHAQAAAPQAAANADAOQAEANAMANQAIAIANAHQANAIAMAFIAVAIQAfAJAZAKQAYALARASQAMAOAHATQAHATAAAeQAAAkgOAdQgOAegbASQgcARgoABQgeAAgXgJg");
	this.shape_368.setTransform(382.9,93.2);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AARCCIgqgBIgtABIgVABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgBgEIAAgKQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBADAAIAYAAQAHAAADgCQADgEAAgFIABggIAAgoIAAg4QAAgPgCgIQgCgIgFgFQgFgEgIgFIgMgGIgDgBIgBgEIAAgDIABgDIADgCIA8gfIAFgBIADgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABAFIACAqIADAAQANgVATgPQATgQAUAAQAPAAAIAIQAHAHAAALQAAANgIAJQgIAHgJABQgFAAgEgCIgIgDIgJgDQgFgCgGAAQgIAAgJAFQgKAGgIAOIgEAMIgBAHIAAB8QgBAOAEAGQAEAFAIAAIAdAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAKIgBAEQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgVgBg");
	this.shape_369.setTransform(341.3,101.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgnB7QgZgJgSgYQgKgPgGgOQgGgOgCgQQgCgPAAgUQAAgMADgQQADgQAIgSQAIgRAQgQQATgUAWgGQAWgHAWABQAZAAARALQASAKAKAOQAKAPAEAOQAEAPAAAJQAAAGgFACQgFACgHAAIiTAAQgCAIAAAUQAAAdAMAXQALAXATAOQATANAXAAQAcAAASgMQATgNAIgPIACgDIADAAIAIAEQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAACgCAFQgFANgNAOQgMAPgTAMQgUALgaAAIgDAAQgYAAgYgJgAghhjQgRAPgJAhIBcAAQAJAAAEgCQAEgDAAgEQAAgHgEgNQgDgMgKgKQgKgLgUAAQgTAAgRAOg");
	this.shape_370.setTransform(317.9,101.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgQB/QgDgDgCgGIgFgOIgMgdIgNgjIgMgeIgFgNIgFgNIgJgaIgKgcIgHgQQgFgNgGgFQgFgEgIAAIgMAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgBgEIAAgLQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAGgBIAPABIAjABIAlgBIARgBIAFABIABAEIAAALIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgMAAQgFAAgDADQgDACAAAGQAAAFADAJIAFAWIAHAWIAEAOIAHARIAKAcIALAcIAHASIACAAIAMgeIASgsIASgsIAKgeQADgNgDgGQgDgHgIAAIgMAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIAAgEIAAgLIAAgEIADgBIARABIAfABIAdgBIAOgBQABAAABAAQABAAAAAAQABABAAAAQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABIAAAKIAAAEQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgMAAQgFAAgFABQgEACgEADQgEAEgGAMIgOAbIgOAfIgKAXIgLAZIgSApIgRAlIgIATIgGAKQgDAEgFAAQgEAAgDgEg");
	this.shape_371.setTransform(292.1,102.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgjDaQgVgEgYgJQgYgIgYgPQgWgNgUgZQgUgZgNgkQgNgjgBgsQAAgSAFgYQAEgYAMgbQANgbAWgcQAbggAcgRQAbgQAcgGQAcgGAYABQATgBAWAEQAWAEAYAKQAXAKAYAUQAWATATAaQATAaALAhQALAiABAoQAAAhgLAiQgLAhgYAfQgbAmgqAXQgqAXg9ABQgOAAgVgDgAgTjGQgOABgUAHQgUAHgWAVQgUATgOAZQgNAZgHAbQgGAbAAAZQAAA6ASApQARApAaAZQAaAZAbALQAbALATAAQAnAAAbgOQAcgOARgXQARgWAKgaQAJgZADgYQAEgXAAgRQgBgwgPgnQgPgmgYgbQgZgbgbgOQgcgOgZAAIgKgBIgIAAg");
	this.shape_372.setTransform(254.1,93.2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgnB7QgZgJgSgYQgKgPgGgOQgGgOgCgQQgCgPAAgUQAAgMADgQQADgQAIgSQAIgRAQgQQATgUAWgGQAWgHAWABQAZAAARALQASAKAKAOQAKAPAEAOQAEAPAAAJQAAAGgFACQgFACgHAAIiTAAQgCAIAAAUQAAAdAMAXQALAXATAOQATANAXAAQAcAAASgMQATgNAIgPIACgDIADAAIAIAEQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAACgCAFQgFANgNAOQgMAPgTAMQgUALgaAAIgDAAQgYAAgYgJgAghhjQgRAPgJAhIBcAAQAJAAAEgCQAEgDAAgEQAAgHgEgNQgDgMgKgKQgKgLgUAAQgTAAgRAOg");
	this.shape_373.setTransform(201.8,101.9);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("ADLCBIgigBIglABIgTABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgFIAAgKQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgBAEAAIAPAAQAFAAAEgDQADgCAAgHIACgYIAAgYIAAhYQAAgPgEgMQgEgNgKgIQgIgGgLgDQgMgDgNAAQgOAAgQAJQgOAJgIANQgHANgBANQgBAOAAAUIAABnQAAAGADAEQACAEAHAAIAVAAQADAAACABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAKIgBAFQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIgQgBIglgBIgmABIgSABQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBgFIAAgJIABgFQABgBAEAAIARAAQAIAAADgCQADgDAAgFIAAh7QAAgWgDgMQgCgNgEgHIgJgLQgHgFgKgDQgLgCgLAAQgMgBgQAIQgQAIgNAUQgGAIgBAKQgCAJAAANIAAB1QAAAIADAEQADAEAGAAIAWAAQAEAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAKQAAADgBACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgRgBIglgBIgnABIgRABQgBAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgLQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQACgBAEAAIAUAAQAFAAACgDQACgEABgIIAAgQIAAgPIAAhqQAAgJgDgIQgDgIgLgGIgMgGQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgCgCIAAgFIACgDIACgCIA1gbIAGgCIAFgBQADAAABADQACACAAADIACAjIACAAQAOgTAYgNQAXgNAbAAQAYAAARAMQAQAMAKAWIADAAQAOgTAXgNQAYgOAbAAQAQgBANAEQAOAEALAKIANAQQAHAIAEAOQAEANABAXIAACFQAAAHADACQAEADAFAAIAQAAQAEAAACABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAKQAAAEgBABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgQgBg");
	this.shape_374.setTransform(164.8,101.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AAmB5QgMgLgEgSIgBAAQgJALgOAKQgPAJgUAHQgJACgIABIgTAAQgHAAgJgFQgIgEgGgLQgFgLgBgTQAAgVANgSQAMgRAjgQIAcgMIAXgLQALgHAFgEIAAgnIgCgRQgCgKgEgGQgFgFgIgFQgJgDgNAAQgKAAgLADQgMAEgGAFQgGAHABAGIACAPQAAAQgHAJQgHAJgSAAQgHABgEgFQgDgFAAgKQAAgPALgPQALgPATgLQATgLARgFQARgFATAAQAVAAAKAFQALAEAGAHQAJAKACAKQADAKgBAMIAABbIAAAjQAAAZAFAKQAFALAIgBQAIAAAFgCQAGgDACgEIADgCQABgBAAAAQAAAAABAAQAAAAABAAQAAABAAAAIAGAFQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAACgCAFIgIALQgFAHgKAFQgJAGgPAAQgRgBgKgKgAgDAFQgNAGgOAIQgNAIgKANQgJAMAAATQAAAQAJAJQAIAIAOAAQAJgBAMgFQAKgGAJgIQAIgJAAgIIAAhJQgIAGgMAFg");
	this.shape_375.setTransform(128.8,102);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("Ag2DWQgfgHgdgPQgdgPgVgYQgbgfgOgoQgOgogBg1QAAgqASgoQARgoAigeQAfgcAqgOQApgPA1AAQAnABAgAKQAfALARANQAEADADAAQAEgBACgDIAJgLIAEgDQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABIABAFIACByIAAAEQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgLABIgDgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgEgNgJgTQgIgTgPgTQgKgMgPgLQgPgLgWgIQgVgHgbgBQgeAAgcAKQgdALgaAcQgaAagNAjQgOAkgBApQAAA0APAsQAOArAcAcQAXAVAbAKQAbALAcAAQAkAAAYgGQAXgFAQgJQAKgGADgMQADgMAAgXIAAgsQABgQgHgGQgFgGgOAAIgZAAIgDgBIgBgDIAAgPIABgDQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAIAaAAIAzABIAwgBIAXAAIAEABIAAADIAAAOIAAAEIgEABIgYAAQgIAAgEAEQgGAFAAAOIAABPIABALIABAIQABAEgDACIgIAEQgjASgnAKQgnAKgyAAQgaAAgfgHg");
	this.shape_376.setTransform(90.6,93.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190,p:{x:159.4,y:75.8}},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:280.2,y:75.8}},{t:this.shape_184},{t:this.shape_183,p:{x:334.6,y:75.8}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},4).to({state:[{t:this.Level1}]},37).to({state:[{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_185,p:{x:412.1,y:102}},{t:this.shape_367},{t:this.shape_190,p:{x:457.1,y:101.9}},{t:this.shape_183,p:{x:482.7,y:101.9}},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195}]},45).to({state:[]},14).wait(1));

	// Game Content
	this.LevelSelectBtn = new lib.SelectLevelBtn();
	this.LevelSelectBtn.name = "LevelSelectBtn";
	this.LevelSelectBtn.parent = this;
	this.LevelSelectBtn.setTransform(497.4,446.9);
	new cjs.ButtonHelper(this.LevelSelectBtn, 0, 1, 2, false, new lib.SelectLevelBtn(), 3);

	this.Lvl4 = new lib.LevelSelect4();
	this.Lvl4.name = "Lvl4";
	this.Lvl4.parent = this;
	this.Lvl4.setTransform(341,221);
	new cjs.ButtonHelper(this.Lvl4, 0, 1, 2, false, new lib.LevelSelect4(), 3);

	this.Lvl3 = new lib.LevelSelect3();
	this.Lvl3.name = "Lvl3";
	this.Lvl3.parent = this;
	this.Lvl3.setTransform(245.2,221);
	new cjs.ButtonHelper(this.Lvl3, 0, 1, 2, false, new lib.LevelSelect3(), 3);

	this.Lvl2 = new lib.LevelSelect2();
	this.Lvl2.name = "Lvl2";
	this.Lvl2.parent = this;
	this.Lvl2.setTransform(149.3,221);
	new cjs.ButtonHelper(this.Lvl2, 0, 1, 2, false, new lib.LevelSelect2(), 3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("Ag2CTQgSgIgHgGQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgBgGIgMhCQgBgBAAAAQAAgBAAgBQABAAAAgBQAAAAAAgBIAEgBIAJgCQAEgBACAFIASAiQAGANAIAKQAGAJALAGQALAFASABQAMAAANgGQAMgEAJgLQAIgLABgQQAAgXgPgPQgOgPgmgLQgVgFgTgLQgSgKgMgRQgMgRgBgbQABgZANgTQANgUAXgLQAWgLAZAAQAZAAAPAFQAQAFAJAFIAKAGQACADAAADIALAxIgBAEIgEACIgIAEIgEgBIgDgDIgXggQgHgLgLgIQgLgIgUAAQgNAAgMAEQgNAGgHAKQgIALAAAPQAAATAJALQAKALAPAGQAPAGARAEQAmAKAXAUQAWATABAoQgBAdgOAUQgOAVgYALQgXALgeAAQgagBgTgGg");
	this.shape_377.setTransform(561.2,68.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AA2D9Ig2gBIg1ABIgYABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgFIAAgLQAAgFACgBQACgBAGAAIAiAAQAFAAAEgFQAFgDABgJIAAghIABg0IAAg4IAAgqIAAgrIgBg1IAAgwIgCgfQgBgSgJgJQgIgKgQgFIgPgFIgDgBIgBgCIAAgGQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAEgDIApgSQAVgKATgMIAIgFIAHgBQAEAAAAADQACADAAAHIgCAtIgBBCIAABBIgBAuIAAA9IAAAnIAAAxIABAuIAAAeQAAAJAEAGQAEAHAKAAIAgAAQAEAAADABIABAGIAAALIgBAFQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgZgBg");
	this.shape_378.setTransform(539.9,57.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AguCQQgdgLgVgcQgLgSgHgQQgHgQgDgSQgCgTAAgXQAAgOADgSQADgTAKgVQAKgUASgTQAXgWAZgIQAagIAZABQAeAAAUAMQAUAMAMARQALASAFAQQAFARAAALQAAAHgGACQgFACgJAAIisAAQgCAKAAAXQABAiANAbQANAbAWAQQAWAPAcABQAggBAVgOQAWgPAJgSIADgDIAEAAIAJAFQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAABQAAACgCAGQgHAPgOARQgOASgXANQgWANgfAAIgDAAQgcAAgdgKgAgmhzQgUAQgLAnIBsAAQAKAAAEgCQAFgDAAgFQAAgIgEgPQgEgOgMgMQgMgMgWgBIgBAAQgWAAgTARg");
	this.shape_379.setTransform(516.2,68.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgTCUQgEgEgCgHIgGgPIgNgjIgQgoIgNgjIgHgQIgFgQIgMgeIgLgfIgHgUQgHgPgGgFQgHgGgJABIgOAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBIAAgEIAAgNQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQACgBAFAAIASABIAoAAIArAAIAUgBIAGABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABIAAANIgBAEQAAABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAIgPAAQgFAAgEADQgDADAAAHIADARIAHAZIAHAZIAFAQIAHAVIANAfIANAiIAIAVIACAAIAPgjIAVgzIATg0IANgjQADgOgDgJQgEgHgJAAIgOAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAgBIgBgEIAAgNIABgEIAEgBIATABIAkAAIAiAAIARgBIAFABIABAFIAAAMIgBAFQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAIgOAAQgGAAgGABQgFACgEAEQgEAEgIAOIgQAgIgRAkIgLAbIgOAdIgUAwIgTArIgKAWIgHAMQgEAFgFAAQgGAAgDgFg");
	this.shape_380.setTransform(486.2,68.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AguCQQgdgLgVgcQgLgSgHgQQgHgQgDgSQgCgTAAgXQAAgOADgSQADgTAKgVQAKgUASgTQAXgWAZgIQAagIAZABQAeAAAUAMQAUAMAMARQALASAFAQQAFARAAALQAAAHgGACQgFACgJAAIisAAQgCAKAAAXQABAiANAbQANAbAWAQQAWAPAcABQAggBAVgOQAWgPAJgSIADgDIAEAAIAJAFQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAABQAAACgCAGQgHAPgOARQgOASgXANQgWANgfAAIgDAAQgcAAgdgKgAgmhzQgUAQgLAnIBsAAQAKAAAEgCQAFgDAAgFQAAgIgEgPQgEgOgMgMQgMgMgWgBIgBAAQgWAAgTARg");
	this.shape_381.setTransform(456.1,68.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("ACbD5IgtAAIg7gBIg+AAIg7AAIguAAIgkAAIgbAAIgQABIgLABQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAAAIgBgEIAAgSIABgEIAEgBIAhAAQATAAAGgGQAGgFgBgHIABgZIAAgyIABg8IAAg4IAAgnIAAgnIAAgzIgBgzIgBgdQAAgOgFgGQgFgGgQAAIggAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIAAgFIAAgPQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABgBQAAAAABAAQABAAABAAIAaABIBAABIBLgBIAdgBQAEAAABABIABAFIAAAQQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgGABIgqAAQgPAAgFAHQgFAGABAPIgBAWIAAAtIgBAzIAAAuIAAA7IAAAWIAAAqIAAAzIABAvIABAdIAWABIAoABIAuAAIApAAIAZgCQAQgCAPgPQAPgOANgUQAMgTAKgSQAJgSAEgLIACgDIADAAIALAEIACACIAAAFIgGAVIgLArIgLAuIgHAdIgWgBg");
	this.shape_382.setTransform(418.4,58);

	this.Lvl1 = new lib.LevelSelect();
	this.Lvl1.name = "Lvl1";
	this.Lvl1.parent = this;
	this.Lvl1.setTransform(53.5,221);
	new cjs.ButtonHelper(this.Lvl1, 0, 1, 2, false, new lib.LevelSelect(), 3);

	this.GoBackBtn = new lib.BackBtn();
	this.GoBackBtn.name = "GoBackBtn";
	this.GoBackBtn.parent = this;
	this.GoBackBtn.setTransform(807.1,558.2);
	new cjs.ButtonHelper(this.GoBackBtn, 0, 1, 2, false, new lib.BackBtn(), 3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(1,1,1).p("EA+AgMhIKyAAIAAKyIqyAAgEAgEgMhIKxAAIAAKyIqxAAgARFBwIKxAAIAAKyIqxAAgEAvCABwIKyAAIAAKyIqyAAgEAgEABwIKxAAIAAKyIqxAAgEA+AABwIKyAAIAAKyIqyAAgARFshIKxAAIAAKyIqxAAgEAvCgMhIKyAAIAAKyIqyAAgACGshIKyAAIAAKyIqyAAgAs3shIKyAAIAAKyIqyAAgA72BwIKyAAIAAKyIqyAAgAs3BwIKyAAIAAKyIqyAAgACGBwIKyAAIAAKyIqyAAgA72shIKyAAIAAKyIqyAAgEgq0gMhIKxAAIAAKyIqxAAgEhIxgMhIKxAAIAAKyIqxAAgEg5zABwIKyAAIAAKyIqyAAgEhIxABwIKxAAIAAKyIqxAAgEgq0ABwIKxAAIAAKyIqxAAgEg5zgMhIKyAAIAAKyIqyAAg");
	this.shape_383.setTransform(484.8,265.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("EA+AAMiIAAqyIKyAAIAAKygEAvCAMiIAAqyIKxAAIAAKygEAgDAMiIAAqyIKyAAIAAKygARFMiIAAqyIKxAAIAAKygACGMiIAAqyIKyAAIAAKygAs3MiIAAqyIKxAAIAAKygA72MiIAAqyIKyAAIAAKygEgq0AMiIAAqyIKxAAIAAKygEg5zAMiIAAqyIKyAAIAAKygEhIxAMiIAAqyIKxAAIAAKygEA+AgBvIAAqyIKyAAIAAKygEAvCgBvIAAqyIKxAAIAAKygEAgDgBvIAAqyIKyAAIAAKygARFhvIAAqyIKxAAIAAKygACGhvIAAqyIKyAAIAAKygAs3hvIAAqyIKxAAIAAKygA72hvIAAqyIKyAAIAAKygEgq0gBvIAAqyIKxAAIAAKygEg5zgBvIAAqyIKyAAIAAKygEhIxgBvIAAqyIKxAAIAAKyg");
	this.shape_384.setTransform(484.8,265.7);

	this.text = new cjs.Text("#", "70px 'Adobe Caslon Pro'");
	this.text.textAlign = "center";
	this.text.lineHeight = 121;
	this.text.lineWidth = 108;
	this.text.parent = this;
	this.text.setTransform(475.5,116.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AATCYIgwgBIg1ABIgYABQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAIgBgGIAAgLQgBgEACgCIAGgBIAcAAQAIAAADgDQAEgDAAgHIABglIAAgvIAAhAQAAgSgCgKQgDgJgFgGQgGgGgKgFIgNgHIgEgCQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgFQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgDIBGgkIAFgCIAEgBQABAAABABQAAAAABAAQAAAAABABQAAAAAAABIABAGIAEAxIACAAQAPgZAXgRQAWgSAXAAQASgBAJAKQAJAJAAAMQgBAPgJAJQgJAKgKAAQgGAAgFgBIgKgEQgEgDgGgCQgGgBgHAAQgJgBgLAIQgMAGgIAQIgFAOIgCAJIAACRQAAAPAEAHQAFAGAJAAIAiAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIABAFIAAAMIAAAFQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABgBAAIgZgBg");
	this.shape_385.setTransform(512.9,81.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("Ag6CQQgdgMgXgaQgQgTgIgQQgJgRgDgSQgDgTAAgYQAAgbAPgeQAPgfAfgYQAbgVAYgHQAZgGAQAAQAeABAaALQAaAMAQAQQAYAYAMAdQAMAcAAAhQgBAngUAiQgVAjgiAXQgjAWgrAAIgCAAQgZAAgbgKgAgciAQgOAFgMANQgUAVgJAZQgJAZABAnQgBAcAGAXQAFAXAQAXQAMASARAJQAQAKAXAAQAbgBAUgTQATgTALggQALgfAAglQgBgngPgdQgPgcgWgPQgVgQgRAAIgDAAQgNAAgMAEg");
	this.shape_386.setTransform(482.6,81.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgrCRQgcgKgYgeQgTgZgHgXQgGgYAAgXQABgpASglQASglAhgYQAigYAtAAQAkAAAVALQAVALAJANQAJAOgBAHQAAAMgHAHQgHAGgMAAQgMAAgJgHQgJgHgIgOQgMgVgLgFQgLgFgNAAQgTAAgTAMQgTAMgMAYQgMAZgBAkQABAcAKAcQAKAdAPAUQASAWAUAHQATAHATgBQAZABARgHQARgHASgRIACgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIAHAIQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAACgDADQgKAMgSAMQgRALgWAHQgWAIgYAAIgFAAQgYAAgagJg");
	this.shape_387.setTransform(451.8,81.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("Ag3D4QgbgKgVgRIgKgGIgGgCQgDAAgDAEIgFAIQgDAGgDABQgDACgEgBQgDAAgCgCQgCgDABgGIADgYIADgmIADgmIADgaIABgEIAEAAIAKAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABAEQAAAQAEATQAFAUAQAaQARAZAaANQAaAOAcAAQAWAAAWgJQAWgJAOgUQAPgUABgfQgBgkgPgWQgPgXgYgOQgZgOgbgJIgegLQgSgIgTgKQgUgLgPgQQgSgRgIgZQgJgaAAgiQAAgbANgXQANgYARgQQATgRAZgIQAZgIAdAAQAdABAWAGQAVAGAKAEQAEADADAAQAEgBACgCIAJgJIAFgDQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQADAAABAEQACADAAAFIABAaIADAhIAEAgIACAUIgBAEIgDACIgIACQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBgBAAAAQgEgQgJgTQgKgUgVgXQgOgPgTgHQgTgIgXAAQgfABgTANQgTAMgIATQgIASAAATQAAAPAEAQQAFAQANAOQAKAKAPAIQAOAJAPAGIAYAJQAlALAdAMQAcAMATAWQAOAQAIAWQAJAXAAAiQAAAqgQAiQgRAjggAUQgfAVgvABQgjAAgbgKg");
	this.shape_388.setTransform(417.8,71.6);

	this.goBack = new lib.SelectLevelBtn();
	this.goBack.name = "goBack";
	this.goBack.parent = this;
	this.goBack.setTransform(476.9,329.2);
	new cjs.ButtonHelper(this.goBack, 0, 1, 2, false, new lib.SelectLevelBtn(), 3);

	this.score = new lib.score();
	this.score.name = "score";
	this.score.parent = this;
	this.score.setTransform(865.1,77.6);

	this.timer = new lib.timer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(872.6,568.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AhkEfIAAgPQAogBAMgGQALgGAFgKQAFgKAAgzIAAkvQAAg9gFgSQgDgNgHgGQgIgGgLAAQgPAAgbANIgHgNICIhDIAOAAIAAHaQAAAvAEAMQAEAMAMAGQANAGAmABIAAAPg");
	this.shape_389.setTransform(577.5,79.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AhYEnIAAgPQAZAAAKgGQAJgEAGgNQAFgNABgjIAAlYQAAhAgDgPQgEgPgFgFQgIgGgJAAQgLAAgQAHIgHgPIBvguIAUAAIAAH3QAAAkAEALQAFAMAMAGQALAGAcAAIAAAPg");
	this.shape_390.setTransform(523.9,78.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AhvCVQgxg2AAhaQAAhgAzg3QAxg3BLAAQBAAAApArQApAqAABGIkGAAQAABUApAwQAqAwA3AAQAlAAAcgUQAbgVATgyIANAJQgJA4gqAvQgqAvg/AAQhDAAgxg1gAhFiQQgbAagFAwICvAAQgCgkgHgPQgKgYgUgNQgVgNgVAAQgjAAgbAbg");
	this.shape_391.setTransform(493.2,89.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgCDEIiHlAQgJgWgJgKQgJgKgMgHQgHgDgVgEIAAgPICzAAIAAAPIgLAAQgRAAgIAIQgJAIAAANQAAAPAJAUIBXDRIBZjZQAKgXAAgMQAAgGgEgEQgEgGgIgCQgGgDgWAAIAAgPIB8AAIAAAPQgVACgJAHQgOANgMAdIiHFFg");
	this.shape_392.setTransform(452.7,89.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AhvCVQgxg2AAhaQAAhgAzg3QAxg3BLAAQBAAAApArQApAqAABGIkGAAQAABUApAwQAqAwA3AAQAlAAAcgUQAbgVATgyIANAJQgJA4gqAvQgqAvg/AAQhDAAgxg1gAhFiQQgbAagFAwICvAAQgCgkgHgPQgKgYgUgNQgVgNgVAAQgjAAgbAbg");
	this.shape_393.setTransform(412.9,89.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AjxEZIAAgPIAVAAQAkAAAPgXQAJgNAAgxIAAlpQAAg2gLgNQgRgSggAAIgVAAIAAgPID+AAIAAAPQgsAAgSAIQgSAJgGAOQgIANAAAyIAAFgQAAAjAIANQAFAIAJAFQALAEA2AAIAoAAQBBAAAagKQAbgKAVgYQAWgYAVg0IAOADIgwCYg");
	this.shape_394.setTransform(367.7,80.1);

	this.target = new lib.Target();
	this.target.name = "target";
	this.target.parent = this;
	this.target.setTransform(474.3,489.4);
	new cjs.ButtonHelper(this.target, 0, 1, 1);

	this.StartBtn = new lib.StartBtn();
	this.StartBtn.name = "StartBtn";
	this.StartBtn.parent = this;
	this.StartBtn.setTransform(474.2,330.3);
	new cjs.ButtonHelper(this.StartBtn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.countdownDisplay = new cjs.Text("Timer", "39px 'Adobe Caslon Pro'");
	this.countdownDisplay.name = "countdownDisplay";
	this.countdownDisplay.textAlign = "center";
	this.countdownDisplay.lineHeight = 68;
	this.countdownDisplay.parent = this;
	this.countdownDisplay.setTransform(891.4,559.4);

	this.scoreDisplay = new cjs.Text("Score", "39px 'Adobe Caslon Pro'");
	this.scoreDisplay.name = "scoreDisplay";
	this.scoreDisplay.textAlign = "center";
	this.scoreDisplay.lineHeight = 68;
	this.scoreDisplay.lineWidth = 104;
	this.scoreDisplay.parent = this;
	this.scoreDisplay.setTransform(892.6,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.LevelSelectBtn}]}).to({state:[{t:this.shape_384},{t:this.shape_383},{t:this.GoBackBtn},{t:this.Lvl1},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379,p:{x:516.2,y:68.2}},{t:this.shape_378},{t:this.shape_377},{t:this.Lvl2},{t:this.Lvl3},{t:this.Lvl4}]},4).to({state:[{t:this.goBack},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_379,p:{x:539.2,y:81.7}},{t:this.text,p:{x:475.5,y:116.1,text:"#",font:"70px 'Adobe Caslon Pro'",textAlign:"center",lineHeight:121.15,lineWidth:108}}]},8).to({state:[{t:this.StartBtn},{t:this.target,p:{x:474.3,y:489.4}},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.timer},{t:this.score}]},8).to({state:[{t:this.scoreDisplay},{t:this.countdownDisplay},{t:this.StartBtn},{t:this.target,p:{x:474.3,y:489.4}},{t:this.text,p:{x:340.3,y:32.5,text:"Level 2",font:"85px 'Times New Roman'",textAlign:"",lineHeight:96.15,lineWidth:257}}]},7).to({state:[]},7).to({state:[{t:this.StartBtn},{t:this.target,p:{x:476.7,y:471.7}}]},7).to({state:[]},45).to({state:[]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(507,346.2,933,603.1);
// library properties:
lib.properties = {
	id: 'F4E4B4EE79E64232B3FD75D33E0487F3',
	width: 960,
	height: 640,
	fps: 10,
	color: "#BBFFFF",
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
an.compositions['F4E4B4EE79E64232B3FD75D33E0487F3'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;