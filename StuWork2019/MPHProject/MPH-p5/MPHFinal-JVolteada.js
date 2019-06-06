(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"MPHFinal_JVolteada_atlas_", frames: [[0,0,900,900],[1499,902,518,120],[902,0,900,900],[0,902,649,648],[651,902,846,242]]}
];


// symbols:



(lib.Hat = function() {
	this.spriteSheet = ss["MPHFinal_JVolteada_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.spriteSheet = ss["MPHFinal_JVolteada_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["MPHFinal_JVolteada_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.purepngcombaseballbatbaseballballgameteamsbaseballsbaseballbat17015280889667isuj = function() {
	this.spriteSheet = ss["MPHFinal_JVolteada_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.skateboardhdpngskateboardpngimage1339 = function() {
	this.spriteSheet = ss["MPHFinal_JVolteada_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
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


(lib.Skateboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer2();
	this.instance.parent = this;
	this.instance.setTransform(-10.9,-67,0.308,0.308,82.5);

	this.instance_1 = new lib.skateboardhdpngskateboardpngimage1339();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20,-134.1,0.308,0.308,82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Skateboard, new cjs.Rectangle(-54,-134.1,108.1,268.3), null);


(lib.shoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AOiQVI2PgRQgkAAgigKQglAGgrAAQgfAAg/gEQjPgQipgjQhhgThbgzQhNgrhYhKQidiEg8ioQgihgAMhtQAMhlAxhgQBPiXCrhgQBng5CXgrQAdgZAdgSQBmhBB2AIQBFAFBnAVICqAiICjAbIBfANQCbATCYALQCjAMCSACIArADIAMAAIAMgEIARgGIAEgCIATgLQASgKAfgWIATgPIACgBQAagXAUgTQAqgpAhgnIAMgQIAAgBIABgBIACgCQAPgVATgeQAegxAZg0IAAgCQAAABAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQgCgDAPgXIAQgvQAQgzAMg9QAZh9BahLQBchNB/AFICjAHIBgADQA5AEAlANQBcAfA0BNQAvBGAJBmQAEAqAEBvQATIWhwIYQAPBdgjBWQgYA7grAtIgKAUQgXApgjApQg5BDhXAmQhRAjheAEQgoACgjgKQg8AmhIAAIgCAAgArTD0IAIAKIgGgKIgCgBIAAABgAGsjfIgNADQASAAADgEIgBAAIgHABg");
	this.shape.setTransform(71.8,1.4,0.311,0.247,0,10.8,-172.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AOiQVI2PgRQgkAAgigKQglAGgrAAQgfAAg/gEQjPgQipgjQhhgThbgzQhNgrhYhKQidiEg8ioQgihgAMhtQAMhlAxhgQBPiXCrhgQBng5CXgrQAdgZAdgSQBmhBB2AIQBFAFBnAVICqAiICjAbIBfANQCbATCYALQCjAMCSACIArADIAMAAIAMgEIARgGIAEgCIATgLQASgKAfgWIATgPIACgBQAagXAUgTQAqgpAhgnIAMgQIAAgBIABgBIACgCQAPgVATgeQAegxAZg0IAAgCQAAABAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQgCgDAPgXIAQgvQAQgzAMg9QAZh9BahLQBchNB/AFICjAHIBgADQA5AEAlANQBcAfA0BNQAvBGAJBmQAEAqAEBvQATIWhwIYQAPBdgjBWQgYA7grAtIgKAUQgXApgjApQg5BDhXAmQhRAjheAEQgoACgjgKQg8AmhIAAIgCAAgArTD0IAIAKIgGgKIgCgBIAAABgAGsjfIgNADQASAAADgEIgBAAIgHABg");
	this.shape_1.setTransform(-71.8,1.4,0.311,0.247,0,-10.8,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shoes, new cjs.Rectangle(-123.1,-29.5,246.2,59.2), null);


(lib.Reset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBNIAAh/IgmAAIAAgaIBpAAIAAAaIgmAAIAAB/g");
	this.shape.setTransform(22.9,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBNIAAiZIBSAAIAAAZIg0AAIAAAlIAxAAIAAAXIgxAAIAAArIA3AAIAAAZg");
	this.shape_1.setTransform(12.3,-1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBGIAGgZQAOAJATAAQALAAAHgFQAGgFAAgJQAAgIgGgGQgFgGgMgFQgmgPAAgcQAAgUAOgMQAPgNAXAAQATAAAOAHIgGAYQgNgHgPAAQgJAAgHAGQgFAFAAAGQAAAJAGAFQAFAFAOAGQAkAPAAAeQAAAVgOAMQgPANgaAAQgXAAgPgJg");
	this.shape_2.setTransform(1.1,-1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBNIAAiZIBSAAIAAAZIg1AAIAAAlIAyAAIAAAXIgyAAIAAArIA4AAIAAAZg");
	this.shape_3.setTransform(-9.5,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVBNQgEgIgFgcQgDgOgGgHQgEgFgKAAIgKAAIAAA+IgeAAIAAiWQASgEAWAAQA5AAAAAsQAAANgHALQgIAJgLAEIAAABQAPAFAFAZQAKAmACAEgAgVg0IAAAuIAMAAQALAAAIgHQAHgGAAgMQAAgXgZAAQgKAAgDACg");
	this.shape_4.setTransform(-20.9,-1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0099CC").ss(1,1,1).p("AldiXIK7AAIAAEvIq7AAg");
	this.shape_5.setTransform(0,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66CCFF").s().p("AlcCYIAAkvIK5AAIAAEvg");
	this.shape_6.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Reset, new cjs.Rectangle(-35.9,-16.3,71.9,32.4), null);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ApJKwQgvgkAdg1IATgiIAFgcIAIg4IAVhyIAGgiIgGgMQgPggAHg1QAEgbANguIABgMIAMhIQACgSAOgNQAFhmAEg2QAKiFAThrQARhXAFgRIAHgSIAAgBIgJABQghgBgSgUQgRgTAAgbQABgcARgUQASgWAggDIATgBQADgVANgQQATgWAgAAIKygGQBQgBAZgCQA6gEAsgQQA0gSAYAxQAYAwggAmIhVBnQg2A6gyAYQgSAJgWAGIgOAaQgqBKhMBFQgZAXhrBsQgqAqgkAgIgBAPQgDAfgWATQgNAKgQAFQhRCCiOBNIgFADIgOAWQhZCVhfCqQgOAogYAVQgXAVgYAAQgWAAgXgRg");
	this.shape.setTransform(-6.1,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgfLDQgTgFADgTQA3kxArk7QhJgUhHgaIg7gSQgmgOgPgRQgNgOABgSQAAgMAJgVQAMgfAVgpIAlhGQBei0AthHQBZiJBjhMQAQgLAKARQAKARgPAMQhTA/hMByQgmA5hRCWQgcAygdA4IgZAyIgUAnQgKAXAQANQARAPAnAMIA9ASQA0ARBJATQAGACAFAGQAFAGgBAGQgrFDg6FCQgDAPgMAAIgIgBg");
	this.shape_1.setTransform(-65.4,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAxDbIAYisQh8ggh7gzQgSgIgEgIQgHgNAMgXQBbjABmioQAxhRAngwQA1hEA4gpIiWOJQgiDogqDsg");
	this.shape_2.setTransform(-65.4,-2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiDLwQjZgJmngwQgTgCAAgUQAAgUATACQDcAZB3ALQC7ASCYAEQFHALEHgvIAagEQASgCAGgEQAJgGAJgTQAHgQADgNQACgNgBgVIgBgjIgBkyIgCg4QAAgiAHgVQAHgTASgOQAJgGAbgOIA3gcIAbgLQASgHAFgHQANgRgOgzIgWhIQgVhGgTg2QhZj/ifjiQgLgQASgKQARgKALAQQC9EPBdE2QAYBTAMA9QAFAWgBAMQgCATgNANQgSARglARQgqASgSAJQgmATgHApQgCAHAABJIABFFIABA5QgCAjgQASQgNAQgdAHIgwAJQjcAokJAAQhLAAhPgDg");
	this.shape_3.setTransform(8.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhwLdQjfgIm0gyITH2BQBzCjBRC5QBQC5AqDDQAEATgEAJQgEALgVAKIhuA4QgYAMgHAKQgKAOAAAiIABHGQAAAggLANQgLAPggAGQjpAukdAAQhCAAhFgCg");
	this.shape_4.setTransform(8.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAOA2IkpgDQhLgBgigFQg8gJgqgcQgQgJAKgRQAKgSAQALQAtAcBHAGIB7ACID5ADQDAACAtgEQCGgLBagzQARgKAKARQAKASgRAJQhfA2iLANQgnADhtAAIhjAAg");
	this.shape_5.setTransform(4,-69.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("ABlAiImUgEQg+gBgggFQg1gJgigXIPJgZQhLAthtAOQg9AIhnAAIgkAAg");
	this.shape_6.setTransform(4,-69.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(-87.2,-75.4,174.5,151), null);


(lib.orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7931E").s().p("ApJKwQgvgkAdg1IATgiIAFgcIAIg4IAVhyIAGgiIgGgMQgPggAHg1QAEgbANguIABgMIAMhIQACgSAOgNQAFhmAEg2QAKiFAThrQARhXAFgRIAHgSIgJAAQghgBgSgUQgRgTAAgbQABgcARgUQASgWAggDIATgBQADgVANgQQATgWAgAAIKygGQBQgBAZgCQA6gEAsgQQA0gSAYAxQAYAwggAmIhVBnQg2A6gyAYQgSAJgWAGIgOAaQgqBKhMBFQgZAXhrBsQgqAqgkAgIgBAPQgDAfgWATQgNAKgQAFQhRCCiOBNIgFADIgOAWQhZCVhfCqQgOAogYAVQgXAVgYAAQgWAAgXgRg");
	this.shape.setTransform(-6.1,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7931E").s().p("AoNJWQgGAcgNAIIATgkgAoMJQIA1kbIACgLQgLACgGgFQgIgGACgSQAFg6ARg3IgEALIAhjtQAKiTAciQIAYizIgRgDIARAAIAIg9ILagGQA/AAAggEQA0gFAngPQgsA3g7A+QgVAWgMAKQgUARgSAHQgTAIggAEQgVA6goAxQgVAagiAgIg6A2QgXAWhBBEQg2A5gkAfIgKAIIAEglIgIAZIAAAPIAEgDIgFAwIABgtIgJAHQgnBfhJBFQg3AzhSAqIgFADIgTAgQhnCqheCoIABgGgAh3AQIgGAEIAAA1QAOgjAMglIgUAPgAnIodQAZgEAhAEIACAAg");
	this.shape_1.setTransform(-5.8,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7931E").s().p("AgfLDQgTgFADgTQA3kxArk7QhJgUhHgaIg7gSQgmgOgPgRQgNgOABgSQAAgMAJgVQAMgfAVgpIAlhGQBei0AthHQBZiJBjhMQAQgLAKARQAKARgPAMQhTA/hMByQgmA5hRCWQgcAygdA4IgZAyIgUAnQgKAXAQANQARAPAnAMIA9ASQA0ARBJATQAGACAFAGQAFAGgBAGQgrFDg6FCQgDAPgMAAIgIgBg");
	this.shape_2.setTransform(-65.4,-3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7931E").s().p("AAxDbIAYisQh8ggh7g0QgSgGgEgJQgHgNAMgXQBbjABmioQAxhRAngxQA1hDA4gpIiWOJQgiDogqDsg");
	this.shape_3.setTransform(-65.4,-2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7931E").s().p("AiDLwQjZgJmngwQgTgCAAgUQAAgUATACQDcAZB3ALQC7ASCYAEQFHALEHgvIAagEQASgCAGgEQAJgGAJgTQAHgQADgNQACgNgBgVIgBgjIgBkyIgCg4QAAgiAHgVQAHgTASgOQAJgGAbgOIA3gcIAbgLQASgHAFgHQANgRgOgzIgWhIQgVhGgTg2QhZj/ifjiQgLgQASgKQARgKALAQQC9EPBdE2QAYBTAMA9QAFAWgBAMQgCATgNANQgSARglARQgqASgSAJQgmATgHApQgCAHAABJIABFFIABA5QgCAjgQASQgNAQgdAHIgwAJQjcAokJAAQhLAAhPgDg");
	this.shape_4.setTransform(8.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7931E").s().p("AhwLdQjfgIm0gyITH2BQBzCjBRC5QBQC5AqDDQAEATgEAJQgEALgVAKIhuA4QgYAMgHAKQgKAOAAAiIABHGQAAAggLANQgLAPggAGQjpAukdAAQhCAAhFgCg");
	this.shape_5.setTransform(8.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7931E").s().p("AAOA2IkpgDQhLgBgigFQg8gJgqgcQgQgJAKgRQAKgSAQALQAtAcBHAGIB7ACID5ADQDAACAtgEQCGgLBagzQARgKAKARQAKASgRAJQhfA2iLANQgnADhtAAIhjAAg");
	this.shape_6.setTransform(4,-69.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7931E").s().p("ABlAiImTgEQg/gBghgFQg0gJgigXIPJgZQhMAthsAOQg8AIhoAAIgkAAg");
	this.shape_7.setTransform(4,-69.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.orange, new cjs.Rectangle(-87.2,-75.4,174.5,151), null);


(lib.hat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Hat();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-53,0.143,0.143,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hat, new cjs.Rectangle(-73.5,-73.5,147.1,147.1), null);


(lib.hair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4B436").s().p("AgcAAQAAgdAcAAQAdAAAAAdQAAAegdAAQgcAAAAgeg");
	this.shape.setTransform(9.6,-6.3,0.868,0.868);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4B436").s().p("AgPAgQgLgDgHgKQgHgKACgLQACgPAPgJQAIgEAMAAQAHgDAKADQAMADAHAKQAGAKgDAMQgEAMgKAGIgFADIgJAEQgHADgHAAIgLgBg");
	this.shape_1.setTransform(6.2,-8.2,0.868,0.868);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4B436").s().p("AgKArQgQgIgHgSQgFgPACgSQABgLAGgIQAHgJAMgBQAKgCAJAGQAKAHACAKIAEAOQAJAGADAKQACAMgFALQgDAGgGADQgFAGgIACIgIABQgHAAgHgEgAAWgCIAAgCIAAgBg");
	this.shape_2.setTransform(12.6,-3.8,0.868,0.868);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4B436").s().p("AgJAkQgNgDgHgMQgGgLAEgKIADgJIAAANIABgHIAAACIADgHIAJgKIAHgDIgBAAIAHgBIAAAAIAOAEIALALIgBgBQgFgKgNgEQgMgDgKAGQgGAEgEAGIABgBQADgOAOgIQAKgGAMADQALADAHALQAGAKgDAMIgDAHIAAAEQgDANgMAHQgIAFgIAAIgIgBgAAMgSIAAAAIABAAg");
	this.shape_3.setTransform(21.5,1,0.868,0.868);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E4B436").s().p("AgGAsQgMgDgGgLIgCgFQgHgJABgKIABgIQABgKAFgHIAAgDQACgKALgHQAJgGAKACQALABAIAJQAHAIAAALQABAQgEAVQgCAMgMAGQgIAEgHAAIgHgBg");
	this.shape_4.setTransform(15.1,-11.2,0.868,0.868);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E4B436").s().p("AgMCAQgMgJAAgPIAAgEQgNABgJgCQgWgEgagPIgVgOQgGgCgGgFIgKgIQgXgRAOgZQAOgYAZAPIAMAHQADgTARgaQAZgnAcgMIAAgCQAAgdAcAAQAGgGAGgEQAKgGANADQAJACAFAGQAIgHANAAQAXgCAFAXIACALQAIgEAKABQATABAFAUQAOAyggAsIgUAiQAEAHgBAHQgFAngbAOQgIAEg8AQIgIACQgIAAgJgHgAgcAHQAJAFgDgHQgEgDgCgCQgEAGAEABg");
	this.shape_5.setTransform(17.2,-11.3,0.868,0.868);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E4B436").s().p("AgiB2QgTgFAEgTIAEgPIACgGIANg/QALgyAPgfQADgFACgDIAJgaQAHgSATAGQATAFgGASQghBdgXBeIgDAMQgEAPgMAAIgIgCg");
	this.shape_6.setTransform(25.1,1.9,0.868,0.868);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E4B436").s().p("AhvBoQgQgLAKgRQAKgSAQALQAsAbAGgFIANgiQAHgJALAAQAKAAAGAJIACAFQAGgKAHgVIARgyQASgpAdg8QAJgRARAKQARALgIARQgbA1gUAvIgRAsQgKAdgKAOQgVAggWgRIANgaIgiAAQALASAKAIIgDAFQgMASgOAEIgJABQgXAAgrgbg");
	this.shape_7.setTransform(23.7,-7.8,0.868,0.868);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E4B436").s().p("AgYC7QAEgkgHg9QgIhHAAgaQAChPAehoQAEgTAUAFQATAGgFASQghBwACBOQABATAIBGQAGA2gEAiQgCATgTAAQgUAAACgTg");
	this.shape_8.setTransform(23.4,15.8,0.868,0.868);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E4B436").s().p("AhFD0QgUgFAGgSQAHgWAdhQQAXg+AKgoQAOgxAQhKIAeh8QAEgTAUAGQATAFgFATIgdB8IgfB7QgLAngVA/QgdBOgHAXQgEAPgNAAIgIgCg");
	this.shape_9.setTransform(14.3,17.6,0.868,0.868);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E4B436").s().p("AhcDoQgRgKAJgRQBpjMA8jdQAFgTATAFQATAGgFASQg9DihsDRQgFALgJAAQgFAAgHgEg");
	this.shape_10.setTransform(8.5,13.4,0.868,0.868);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E4B436").s().p("AihCvQgKgSARgJQAngUAsgsQAXgXAvg3QAzg7AUgaQAmgyAVgtQAIgRARAKQARAKgIASQgVAtgpA2QgQAVg7BEQgvA4gaAZQgtAtgqAWQgGADgFAAQgJAAgHgLg");
	this.shape_11.setTransform(2.5,7.8,0.868,0.868);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E4B436").s().p("AAKA3QgKgDgMgGQgNgIgFgJQgFgIAGgPIALgVQAEgJAJAFQAFADAAAFIACgMIACgVIAAgDQABgIAJABQAEABACACIAEAAQAJABAAAKQAAAKgIgBQACAegBANIgBADQADATgFAOQgDAHgHAAIgDAAgAgIAWIAFAFIADgiIAAACIgKAUIgCAGIAAAAIAAAAIABAAIADABg");
	this.shape_12.setTransform(8.7,-10,0.868,0.868);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E4B436").s().p("AgoBHQgJgFAFgJQAXgpANgRQAPgVAFgJQALgRAEgQQADgJAJACQAKADgDAJQgGAbgbAiQgOASgaAvQgDAFgEAAQgDAAgDgBg");
	this.shape_13.setTransform(7.8,-2.4,0.868,0.868);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E4B436").s().p("AgrBbQgJgFAFgJQAHgNAQgVIAYgiQAKgSAIgbQAFgPAHghQACgKAKADQAKADgDAJQgNA9gPAbQgIAPgQAZQgUAagHAMQgDAGgEAAQgDAAgDgCg");
	this.shape_14.setTransform(6.1,-6.1,0.868,0.868);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E4B436").s().p("AjHDqQgKgRAQgLQBQg6AigeQA6g0Ajg5IBMh4IBMh7QAKgQARAKQARAKgKAQIhTCKQgyBRglA1QgiAzg7AxQgXAThXA/QgGAFgFAAQgJAAgGgLg");
	this.shape_15.setTransform(-8.1,6.2,0.868,0.868);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E4B436").s().p("AlmDuQgKgSARgHQCAg3A+ggQBog2BGg7IBMhCQAvgqAegXIBUg6QA0gkAbgdQANgPAOAPQAOAOgNAOQgcAegzAkIhVA7QgfAXg0AvQg4AxgaAVQhHA6hlA0Qg/Agh8A1QgFADgFAAQgKAAgHgMg");
	this.shape_16.setTransform(-13.5,-1.3,0.868,0.868);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E4B436").s().p("Al3DRQgKgRAQgKQAzggCHhAQB4g5A/grQBqhKBBgnQBfg5BZgiQATgGAFATQAFATgSAHQhYAhhjA9QgvAch/BXQg7Aoh0A3Qh/A7g0AgQgGAEgFAAQgJAAgGgLg");
	this.shape_17.setTransform(-15.2,-6.4,0.868,0.868);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E4B436").s().p("AlJCIQgFgTASgHIBaghQA2gUAjgQQAYgLAogZQArgcATgKQB4g+DFg1QASgFAGATQAFATgSAFQhrAdhEAYQhfAjhFApIg7AkQgiAVgcALIijA9QgEACgEAAQgLAAgEgOg");
	this.shape_18.setTransform(-14.5,-12.5,0.868,0.868);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E4B436").s().p("AgEAvQitgFiLgwQgSgHAGgTQAFgTASAGQCIAwCpAFQB9ADC7gVQATgCAAATQAAAUgTACQigATh0AAIgogBg");
	this.shape_19.setTransform(-16.6,-25.6,0.868,0.868);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E4B436").s().p("AgUAvQhSgLg0gNQhKgRg1gcQgRgJAKgRQALgSARAKQA0AcBMARQA3ALBQAKQB5ANCVgCQATgBAAAUQAAAUgTABIgsAAQiPAAhqgOg");
	this.shape_20.setTransform(-13,-30.6,0.868,0.868);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E4B436").s().p("AE8BVQhGgRhygGQiTgHgmgFQimgVhwhLQgPgLAKgRQAKgSAPALQBxBODGAPQA2AFBuAFQBgAHBDARQASAFgFATQgEAQgOAAIgGgBg");
	this.shape_21.setTransform(0.4,-31.4,0.868,0.868);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E4B436").s().p("AhyADIhHgpQhGgrAGAAQElgGCFAXQBCALAHAMQhIADg6A9QgTATgPAWIgLATg");
	this.shape_22.setTransform(26.5,-22,0.868,0.868);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hair2, new cjs.Rectangle(-48.1,-38.8,96.4,77.7), null);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009245").s().p("ApJKwQgvgkAdg1IATgiIAFgcIAIg4IAVhyIAGgiIgGgMQgPggAHg1QAEgbANguIABgMIAMhIQACgSAOgNQAFhmAEg2QAKiFAThrQARhXAFgRIAHgSIgJAAQghgBgSgUQgRgTAAgbQABgcARgUQASgWAggDIATgBQADgVANgQQATgWAgAAIKygGQBQgBAZgCQA6gEAsgQQA0gSAYAxQAYAwggAmIhVBnQg2A6gyAYQgSAJgWAGIgOAaQgqBKhMBFQgZAXhrBsQgqAqgkAgIgBAPQgDAfgWATQgNAKgQAFQhRCCiOBNIgFADIgOAWQhZCVhfCqQgOAogYAVQgXAVgYAAQgWAAgXgRg");
	this.shape.setTransform(-6.1,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009245").s().p("AoMJWQgHAcgOAHIAVgjgAoLJRIA0kcIACgLQgLACgGgFQgIgGACgSQAFg6ARg3IgFALIAijtQAKiTAciQIAYizIgRgDIARABIAJg+ILagGQA9AAAhgEQA1gFAngPQguA3g6A+QgVAWgNAKQgTAQgTAJQgSAHggAEQgVA6goAxQgUAagjAgIg7A2QgXAWhBBEQg2A5gjAfIgKAIIAEglIgIAZIAAAPIAEgDIgEAwIAAgtIgJAHQgnBfhJBFQg2AyhTArIgFADIgUAgQhmCqhdCoIABgFgAh2AQIgHAEIAAA1QAOgjAMglIgTAPgAnJodQAbgFAgAFIACAAg");
	this.shape_1.setTransform(-5.8,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009245").s().p("AgfLDQgTgFADgTQA3kxArk7QhJgUhHgaIg7gSQgmgOgPgRQgNgOABgSQAAgMAJgVQAMgfAVgpIAlhGQBei0AthHQBZiJBjhMQAQgLAKARQAKARgPAMQhTA/hMByQgmA5hRCWQgcAygdA4IgZAyIgUAnQgKAXAQANQARAPAnAMIA9ASQA0ARBJATQAGACAFAGQAFAGgBAGQgrFDg6FCQgDAPgMAAIgIgBg");
	this.shape_2.setTransform(-65.4,-3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009245").s().p("AAxDbIAYisQh8gfh7g1QgSgGgEgJQgHgMAMgYQBbjABmioQAxhQAngyQA1hDA4gpIiWOJQgiDogqDsg");
	this.shape_3.setTransform(-65.4,-2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009245").s().p("AiDLwQjZgJmngwQgTgCAAgUQAAgUATACQDcAZB3ALQC7ASCYAEQFHALEHgvIAagEQASgCAGgEQAJgGAJgTQAHgQADgNQACgNgBgVIgBgjIgBkyIgCg4QAAgiAHgVQAHgTASgOQAJgGAbgOIA3gcIAbgLQASgHAFgHQANgRgOgzIgWhIQgVhGgTg2QhZj/ifjiQgLgQASgKQARgKALAQQC9EPBdE2QAYBTAMA9QAFAWgBAMQgCATgNANQgSARglARQgqASgSAJQgmATgHApQgCAHAABJIABFFIABA5QgCAjgQASQgNAQgdAHIgwAJQjcAokJAAQhLAAhPgDg");
	this.shape_4.setTransform(8.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009245").s().p("AhwLdQjfgIm0gyITH2BQBzCjBRC5QBQC5AqDDQAEATgEAJQgEALgVAKIhuA4QgYAMgHAKQgKAOAAAiIABHGQAAAggLANQgLAPggAGQjpAukdAAQhCAAhFgCg");
	this.shape_5.setTransform(8.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009245").s().p("AAOA2IkpgDQhLgBgigFQg8gJgqgcQgQgJAKgRQAKgSAQALQAtAcBHAGIB7ACID5ADQDAACAtgEQCGgLBagzQARgKAKARQAKASgRAJQhfA2iLANQgnADhtAAIhjAAg");
	this.shape_6.setTransform(4,-69.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009245").s().p("ABlAiImUgEQg+gBgggFQg1gJgigXIPJgZQhLAthuAOQg7AIhoAAIgkAAg");
	this.shape_7.setTransform(4,-69.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(-87.2,-75.4,174.5,151), null);


(lib.eye2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.3).p("AgHAAQAAAIAHAAQAIAAAAgIQAAgHgIAAQgHAAAAAHg");
	this.shape.setTransform(0.6,0,0.705,0.705);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_1.setTransform(0.6,0,0.705,0.705);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2).p("AAfAAQAAAKgIAGQgKAHgNAAQgMAAgKgHQgIgGAAgKQAAgJAIgHQAKgHAMAAQANAAAKAHQAIAHAAAJg");
	this.shape_2.setTransform(0,0,0.705,0.705);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVARQgJgHAAgKQAAgIAJgIQAJgGAMgBQANABAKAGQAIAIABAIQgBAKgIAHQgKAGgNABQgMgBgJgGg");
	this.shape_3.setTransform(0,0,0.705,0.705);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("ABPAAQAAAdgXAVQgXAVghAAQggAAgXgVQgXgVAAgdQAAgcAXgVQAXgVAgAAQAhAAAXAVQAXAVAAAcg");
	this.shape_4.setTransform(0,0,0.705,0.705);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCEE21").s().p("Ag3AyQgXgVAAgdQAAgcAXgVQAXgVAgAAQAhAAAWAVQAYAVAAAcQAAAdgYAVQgWAVghAAQggAAgXgVg");
	this.shape_5.setTransform(0,0,0.705,0.705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye2, new cjs.Rectangle(-10.1,-6,18.1,12), null);


(lib.eye1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGQgDgCAAgEQAAgDADgDQADgCADgBQAEABACACQAEADAAADQAAAEgEACQgCADgEAAQgDAAgDgDg");
	this.shape.setTransform(0.2,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCEE21").s().p("Ag3AWQgYgSAAgaQAAgEABgDIACADQAFAGAPADQAUAFAQACQgEAFAAAFQAAAJAHAHQAIAGAKAAQALAAAIgGQAIgHAAgJQAAgFgEgEQAYgEARgMQAKgFACgIIAAgCQADAJAAAJQAAAagXASQgYASghAAQggAAgXgSg");
	this.shape_1.setTransform(0,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag7AuQgZgSAAgcQAAgaAZgUQAZgTAiAAQAjAAAZATQAZAUAAAaQAAAcgZASQgZAUgjAAQgiAAgZgUgAhPAAQAAAaAYASQAXASAgAAQAhAAAYgSQAXgSAAgaQAAgJgDgJIAAACQgCAIgKAFQgRALgYADQAEAFAAAGQAAAJgIAGQgIAHgLAAQgKAAgIgHQgHgGAAgJQAAgGAEgFQgQgCgUgFQgPgDgFgGIgCgDQgBAEAAAEgAgEAZQgDADAAAEQAAAEADACQADADADAAQADAAADgDQADgCAAgEQAAgEgDgDQgDgDgDAAQgDAAgDADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye1, new cjs.Rectangle(-8.4,-6.6,17,13.3), null);


(lib.bowtie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ACtIRQgvAAgrgsQgug3gbgVQgagVhFgtQg/gqgggbQiAhqAyjGQgQgHgOgOQgbgagBgqQgBgrAdgXQDdixDhiXQAvgfAvAfQArAdAGA1QAGA1ACA/IADALQALAygPBEIAAATQgEBYgNCuQgHCTAFBoIAEA7QgBAigLAYQgOAfgeASQgcARgiAAIgCAAg");
	this.shape.setTransform(15.1,0.1,0.232,0.232);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhNFxQhigXh4hnQg4gxgUg8QgWhCAchAQATgrArgsIgIgHQgdgYACgrQABgoAagbQBfhiBrgiQBBgVBEAEQBSAFAqApIAAAAQAUAJAPALQAugCAnALQBPAWAXBIQATA8gMBLQgKBAgfBCQgxBrh0BrQhBA9gwAVQgoASgqAAQgaAAgbgGg");
	this.shape_1.setTransform(0.6,1.6,0.232,0.232);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AjVFOQgngWgMgqQgIgbgBgrIgBhHQgChWAHhQQADgsAJgYQANgjAegSIAXgOQgfgYgKgfQgLglAUgjQATggAogMQAqgNAdAXQArAhBLAOIB/AWQAxANAaARQAlAYAJAoQAHAfgOAqQgIAXgTAuQgIAWgGAqQgGAsgHAVQgVA9g6AnQgaASgqAWIhEAlQgpAZgWAMQgmAWgcAIQgOAEgOAAQgbAAgagPg");
	this.shape_2.setTransform(-14.6,2.8,0.232,0.232);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AjrHBQgYgJgIgaQhol2AZmLQACgjAfgNIACgLQAGgVARgLQASgLAYAIQCMA1BDAXQBzApBeAcQCEAnAlAxQAYAegTA1QgZBLAAAKQgBAUAQBIQAMA7gMAiQgMAhgzAjQg7AjgWAPQhOA0hqA0QgqAViWBDQgPAGgNAAQgLAAgKgEgAiBj2QAEA+AAB8QAACtgNDAQA+gcAjgSQBtg2BSg4IBJgxIAGgFQgBgSgFgZIgKg0QgIg5AJgnQACgKAOghIAGgPQg1gfgqgNIhCgSQgngMgagJIiPg0IgBgBQAEAUABAYg");
	this.shape_3.setTransform(-15.2,2.5,0.232,0.232);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Al1HDQgMgugGhDIgJhyQgLh+gDhrQgIjnASjsQABgaAVgSQAWgTAZAKQFnCIFsCjQAXAKAFAVQAEATgLATQgMATgUAIQgWAJgWgKQkxiJlHh+QgUFmAmFfQABAOABAoQACAjAIAPQAEAIAAACIAHgBQALABAlgSQBWggBSgnQCchJCZhmQAVgOAVAHQATAGALATQALAUgDAUQgEAXgVAOQi5B7jFBVQgzAYgfAMQg3AXgnAHQgSADgQAAQhSAAgVhSg");
	this.shape_4.setTransform(-14.5,1.8,0.232,0.232);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("ADLJKQgVgJg/glQjFh1iuilQgSgSABgWQABgUAQgQQAQgQAVgBQAXgCASARQCMCECcBlQAyAfAgASIAgAUQAZAOAIgEQADgBABglIABgrIAEhjQAIjigCjJQAAhYgChuQABhEAAgkQgBgXgCgUQkgC2kuCYQgWALgWgIQgUgIgLgTQgLgTAEgUQAEgVAXgLQFNinE9jNQARgMAZAGQAZAGAIATQAVAyAGBFQACARACBpQAECWAABsQAAEBgNENQgEA+gNAfQgTAugyAKQgMACgLAAQghAAglgQg");
	this.shape_5.setTransform(15.1,-0.2,0.232,0.232);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhMGLQgwgPhNgqQg+gigogfQg0gogegvQgkg5gDhIQgChBAZhFQAth5BehPQA2gtA9gXQAJgWAXgJQCBg0CMApQCNApBQByQBNBtgpCNQghB0hlBvQhuB4htAgQgeAJgeAAQgkAAgmgLgAAIklQgDAIgFAHQgOASgZACQhxAHhaBsQhcBtAWBvQAKA0AwArQAhAdA/AjIAxAbQAdAPAXAIQAlANAggGQAegEAkgWQBog9BDhmQAshDAPgyQAVhHgcg5Qgwhmh4gkQgygPgxAAIgaABg");
	this.shape_6.setTransform(1.1,2.1,0.232,0.232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bowtie, new cjs.Rectangle(-24.2,-14.1,48.5,28.3), null);


(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("ApJKwQgvgkAdg1IATgiIAFgcIAIg4IAVhyIAGgiIgGgMQgPggAHg1QAEgbANguIABgMIAMhIQACgSAOgNQAFhmAEg2QAKiFAThrQARhXAFgRIAHgSIAAgBIgJABQghgBgSgUQgRgTAAgbQABgcARgUQASgWAggDIATgBQADgVANgQQATgWAgAAIKygGQBQgBAZgCQA6gEAsgQQA0gSAYAxQAYAwggAmIhVBnQg2A6gyAYQgSAJgWAGIgOAaQgqBKhMBFQgZAXhrBsQgqAqgkAgIgBAPQgDAfgWATQgNAKgQAFQhRCCiOBNIgFADIgOAWQhZCVhfCqQgOAogYAVQgXAVgYAAQgWAAgXgRg");
	this.shape.setTransform(-6.1,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0071BC").s().p("AoMJWQgHAcgNAHIAUgjgAoMJRIA1kcIACgLQgLACgGgFQgIgGACgSQAFg6ARg3IgFALIAijtQAKiTAciQIAYizIgRgDIARABIAIg+ILagGQA/AAAggEQA0gFAogPQgtA3g8A+QgUAWgMAKQgUAQgTAIQgSAIggAEQgVA6goAxQgVAagiAgIg7A2QgXAWhABEQg2A5gkAfIgKAIIAEglIgIAZIAAAPIAEgDIgFAwIABgtIgJAHQgnBfhJBFQg3AyhTArIgEADIgTAgQhnCqhdCoIAAgFgAh3AQIgGAEIAAA1QAOgjAMglIgUAPgAnJodQAagFAhAFIACAAg");
	this.shape_1.setTransform(-5.8,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0071BC").s().p("AgfLDQgTgFADgTQA3kxArk7QhJgUhHgaIg7gSQgmgOgPgRQgNgOABgSQAAgMAJgVQAMgfAVgpIAlhGQBei0AthHQBZiJBjhMQAQgLAKARQAKARgPAMQhTA/hMByQgmA5hRCWQgcAygdA4IgZAyIgUAnQgKAXAQANQARAPAnAMIA9ASQA0ARBJATQAGACAFAGQAFAGgBAGQgrFDg6FCQgDAPgMAAIgIgBg");
	this.shape_2.setTransform(-65.4,-3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071BC").s().p("AAxDbIAYisQh8gfh7g1QgSgGgEgJQgHgMAMgYQBbjABmioQAxhQAngyQA1hDA4gpIiWOJQgiDogqDsg");
	this.shape_3.setTransform(-65.4,-2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0071BC").s().p("AiDLwQjZgJmngwQgTgCAAgUQAAgUATACQDcAZB3ALQC7ASCYAEQFHALEHgvIAagEQASgCAGgEQAJgGAJgTQAHgQADgNQACgNgBgVIgBgjIgBkyIgCg4QAAgiAHgVQAHgTASgOQAJgGAbgOIA3gcIAbgLQASgHAFgHQANgRgOgzIgWhIQgVhGgTg2QhZj/ifjiQgLgQASgKQARgKALAQQC9EPBdE2QAYBTAMA9QAFAWgBAMQgCATgNANQgSARglARQgqASgSAJQgmATgHApQgCAHAABJIABFFIABA5QgCAjgQASQgNAQgdAHIgwAJQjcAokJAAQhLAAhPgDg");
	this.shape_4.setTransform(8.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0071BC").s().p("AhwLdQjfgIm0gyITH2BQBzCjBRC5QBQC5AqDDQAEATgEAJQgEALgVAKIhuA4QgYAMgHAKQgKAOAAAiIABHGQAAAggLANQgLAPggAGQjpAukdAAQhCAAhFgCg");
	this.shape_5.setTransform(8.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0071BC").s().p("AAOA2IkpgDQhLgBgigFQg8gJgqgcQgQgJAKgRQAKgSAQALQAtAcBHAGIB7ACID5ADQDAACAtgEQCGgLBagzQARgKAKARQAKASgRAJQhfA2iLANQgnADhtAAIhjAAg");
	this.shape_6.setTransform(4,-69.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0071BC").s().p("ABlAiImUgEQg+gBgggFQg1gJgigXIPJgZQhLAthtAOQg8AIhoAAIgkAAg");
	this.shape_7.setTransform(4,-69.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.blue, new cjs.Rectangle(-87.2,-75.4,174.5,151), null);


(lib.Bat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.purepngcombaseballbatbaseballballgameteamsbaseballsbaseballbat17015280889667isuj();
	this.instance.parent = this;
	this.instance.setTransform(124.6,-21.9,0.276,0.276,0,35,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bat, new cjs.Rectangle(-124.6,-124.5,249.2,249.2), null);


// stage content:
(lib.MPHFinalJVolteada = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.skateboard.addEventListener("pressmove", dragMe.bind(this));
		this.bat.addEventListener("pressmove", dragMe.bind(this));
		this.eye2.addEventListener("pressmove", dragMe.bind(this));
		this.eye1.addEventListener("pressmove", dragMe.bind(this));
		this.hair.addEventListener("pressmove", dragMe.bind(this));
		this.hat.addEventListener("pressmove", dragMe.bind(this));
		this.red.addEventListener("pressmove", dragMe.bind(this));
		this.green.addEventListener("pressmove", dragMe.bind(this));
		this.blue.addEventListener("pressmove", dragMe.bind(this));
		this.orange.addEventListener("pressmove", dragMe.bind(this));
		this.shoes.addEventListener("pressmove", dragMe.bind(this));
		this.bowtie.addEventListener("pressmove", dragMe.bind(this));
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX;
			evt.currentTarget.y = evt.stageY;
		}
		
		this.reset.addEventListener("click", Clickreset.bind(this));
		
		function Clickreset() {
			this.eye1.x = 458.5;
			this.eye1.y = 112.6;
			this.eye2.x = 495;
			this.eye2.y = 113;
			this.hair.x = 378;
			this.hair.y = 135;
			this.hat.x = 382.35;
			this.hat.y = 214.50;
			this.shoes.x = 436.65;
			this.shoes.y = 318.60;
			this.bowtie.x = 474.30;
			this.bowtie.y = 160.10;
			this.skateboard.x = 582.35;
			this.skateboard.y = 195;
			this.bat.x = 671.90;
			this.bat.y = 191.95;
			this.red.x = 646.25;
			this.red.y = 436.75;
			this.blue.x = 630.30;
			this.blue.y = 435.25;
			this.green.x = 611.35;
			this.green.y = 435.25;
			this.orange.x = 592.45;
			this.orange.y = 435.25;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.bowtie = new lib.bowtie();
	this.bowtie.name = "bowtie";
	this.bowtie.parent = this;
	this.bowtie.setTransform(474.3,160.1);

	this.reset = new lib.Reset();
	this.reset.name = "reset";
	this.reset.parent = this;
	this.reset.setTransform(485,542.8,1,1,0,0,0,0,-0.1);

	this.eye1 = new lib.eye1();
	this.eye1.name = "eye1";
	this.eye1.parent = this;
	this.eye1.setTransform(458.5,112.6);

	this.shoes = new lib.shoes();
	this.shoes.name = "shoes";
	this.shoes.parent = this;
	this.shoes.setTransform(436.7,318.6);

	this.red = new lib.red();
	this.red.name = "red";
	this.red.parent = this;
	this.red.setTransform(646.3,436.8);

	this.blue = new lib.blue();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(630.3,435.3);

	this.green = new lib.green();
	this.green.name = "green";
	this.green.parent = this;
	this.green.setTransform(611.4,435.3);

	this.orange = new lib.orange();
	this.orange.name = "orange";
	this.orange.parent = this;
	this.orange.setTransform(592.5,435.3);

	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.parent = this;
	this.hat.setTransform(382.4,214.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglAyIAGgVQANAIANgBQAOAAAAgLQAAgEgDgEQgDgDgJgEQgcgLAAgUQAAgQALgKQALgKASAAQAQAAALAHIgFAUQgLgGgKAAQgNAAAAALQAAAEAEADQACAEAKAEQAcAKAAAXQAAAQgMAKQgMAJgTAAQgTAAgNgIg");
	this.shape.setTransform(458.5,265.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghArQgOgPAAgaQAAgYANgRQAPgSAWAAQAVAAAMAPQAMAOAAAaIgBALIhCAAQABANAJAIQAIAGAMAAQAOAAANgFIAEAUQgPAHgVAAQgYAAgPgPgAgNgcQgFAIgBAJIAnAAQABgKgFgHQgFgIgKAAQgIAAgGAIg");
	this.shape_1.setTransform(448.6,265.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkArQgPgPAAgbQAAgaAPgQQAPgQAWAAQAXAAAOAQQAOAQAAAZQAAAdgRAPQgOAOgVAAQgWAAgOgPgAgQgXQgFAJAAAOQAAAQAGAJQAGALAJAAQAKAAAGgLQAGgKAAgPQAAgOgFgJQgGgMgLAAQgKAAgGAMg");
	this.shape_2.setTransform(437.1,265.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASBQIAAhAQAAgYgRAAQgGAAgGAFQgGAEAAAMIAABDIgeAAIAAigIAeAAIAAA/IAAAAQAMgQARAAQAQAAAKAMQAJAMABAXIAABCg");
	this.shape_3.setTransform(425.2,263.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AguBHIAGgaQAOAJATAAQALAAAHgFQAGgFAAgJQAAgIgGgGQgFgGgMgFQgmgPAAgdQAAgTAOgMQAPgNAXAAQATAAAOAHIgGAYQgNgGgOgBQgLABgGAFQgFAEAAAIQAAAHAGAGQAFAFAOAGQAkAPAAAeQAAAUgOANQgPANgaAAQgYAAgOgIg");
	this.shape_4.setTransform(413.6,263.8);

	this.eye2 = new lib.eye2();
	this.eye2.name = "eye2";
	this.eye2.parent = this;
	this.eye2.setTransform(493.7,113.1,1.231,1.231,0,0,0,-1.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglAzIAGgWQANAHANAAQAOABAAgLQAAgFgDgEQgDgEgJgDQgcgLAAgUQAAgQALgJQALgLASAAQAQAAALAGIgFAVQgLgFgKgBQgNAAAAALQAAAFAEACQACADAKAFQAcAKAAAXQAAAQgMAJQgMAKgTAAQgTAAgNgHg");
	this.shape_5.setTransform(646.7,333.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAfIAAgyIgOAAIAAgWIAOAAIAAgVIAdgIIAAAdIAYAAIAAAWIgYAAIAAAvQAAATANAAIAJgBIABAXQgHACgNAAQggAAAAgog");
	this.shape_6.setTransform(638.4,331.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdA5IAAhLIgBgjIAaAAIABATIABAAQADgKAIgHQAHgFAIAAIAHABIAAAcIgIAAQgKgBgGAIQgHAGAAAOIAAA5g");
	this.shape_7.setTransform(631.2,333);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOBPIAAhvIAdAAIAABvgAgKgzQgFgEAAgHQAAgHAFgEQAEgFAGAAQAHAAAEAFQAFAEAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_8.setTransform(624.1,330.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASBRIAAhAQAAgZgRAAQgGAAgGAEQgGAGAAALIAABEIgeAAIAAigIAeAAIAAA/IABAAQAKgQASgBQAQAAAKAMQAKAMAAAXIAABDg");
	this.shape_9.setTransform(615.3,330.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguBHIAGgZQAPAIASAAQALAAAHgFQAGgFAAgJQAAgIgFgGQgGgFgMgGQgmgPAAgcQAAgUAOgMQAPgNAXAAQATAAAOAHIgGAYQgNgHgPABQgJgBgHAGQgFAEAAAIQAAAHAGAGQAFAEAPAHQAjAPAAAdQAAAWgOAMQgPANgaAAQgXAAgPgIg");
	this.shape_10.setTransform(603.7,331);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdA5IAAhLIgBgjIAaAAIABATIABAAQADgKAIgHQAHgFAIAAIAHABIAAAcIgIAAQgKAAgGAGQgHAIAAANIAAA5g");
	this.shape_11.setTransform(396.2,81.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOBPIAAhvIAdAAIAABvgAgKgzQgFgEAAgHQAAgHAFgEQAEgFAGAAQAHAAAEAFQAFAEAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_12.setTransform(389.1,79.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgkAwQgJgJAAgOQAAgVASgKQAQgKAaAAQAAgUgTAAQgPAAgNAIIgFgTQAQgKAWAAQArAAABAvIAAAnQgBASACAJIgaAAIgCgMIgBAAQgKAOgTAAQgPAAgJgKgAgQAWQAAAHAEAEQAEAEAGAAQAGAAAFgEQAHgGAAgJIAAgQQggAAAAAUg");
	this.shape_13.setTransform(380.6,81.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAaBNIAAhCIgzAAIAABCIgeAAIAAiZIAeAAIAAA+IAzAAIAAg+IAeAAIAACZg");
	this.shape_14.setTransform(368.3,79.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglAzIAGgWQANAHANABQAOAAAAgLQAAgFgDgEQgDgDgJgEQgcgKAAgWQAAgPALgJQALgLASAAQAQAAALAGIgFAVQgLgFgKAAQgNAAAAAKQAAAFAEADQACADAKAEQAcAKAAAXQAAAQgMAJQgMAKgTAAQgTAAgNgHg");
	this.shape_15.setTransform(493.9,82.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghArQgOgPAAgaQAAgZANgQQAPgSAWAAQAVAAAMAOQAMAPAAAbIgBAKIhCAAQABAOAJAGQAIAHAMAAQAOAAANgFIAEAVQgPAGgVAAQgYAAgPgPgAgNgbQgFAHgBAKIAnAAQABgLgFgGQgFgJgKAAQgIAAgGAJg");
	this.shape_16.setTransform(484,82.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgrA4QAHgCAJgHQAHgEAEgIQADgGABgCIgBgFIgmhmIAgAAIARA7IAEAUIABAAIAEgUIAPg7IAeAAIgZBOQgSAygQARQgNANgQADg");
	this.shape_17.setTransform(473.2,85.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgqBNIAAiZIBSAAIAAAZIg1AAIAAAlIAyAAIAAAYIgyAAIAAAqIA4AAIAAAZg");
	this.shape_18.setTransform(462.8,80.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.eye2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.hat},{t:this.orange},{t:this.green},{t:this.blue},{t:this.red},{t:this.shoes},{t:this.eye1},{t:this.reset},{t:this.bowtie}]}).wait(1));

	// hair
	this.hair = new lib.hair2();
	this.hair.name = "hair";
	this.hair.parent = this;
	this.hair.setTransform(378,135);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// Skateboard
	this.skateboard = new lib.Skateboard();
	this.skateboard.name = "skateboard";
	this.skateboard.parent = this;
	this.skateboard.setTransform(582.4,195);

	this.timeline.addTween(cjs.Tween.get(this.skateboard).wait(1));

	// Basball Bat
	this.bat = new lib.Bat();
	this.bat.name = "bat";
	this.bat.parent = this;
	this.bat.setTransform(671.9,192);

	this.timeline.addTween(cjs.Tween.get(this.bat).wait(1));

	// Character
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").p("AgTipQAQBFAJBXQAJBKAFBt");
	this.shape_19.setTransform(277.7,281.3,0.868,0.868);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").p("Ag/pWQBkC/AVFUQAQD+gcGe");
	this.shape_20.setTransform(272,214.4,0.868,0.868);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").p("AAGFZQAwlWhNlb");
	this.shape_21.setTransform(281.5,326,0.868,0.868);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F6F7").s().p("AgzCAQgcgKgKgiQgPgwASg7QARg6AngjQAfgeAgAgQAfAgggAdQgUATgKAhIgCAJIgCAFIANgQIAKgLQALgNAUAAQAUABAMAMQAOAOgBARQgBARgMAPIgCACIgCADIgfAlQgVAXgWAJQgTAIgSAAQgKAAgKgDg");
	this.shape_22.setTransform(427.9,446.6,0.868,0.868);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F6F7").s().p("AhTB8QgiggAAgyQAAgwAggjQAUgWAcANQAbAMACAdQAAAIgBAIIAJgLQAigvgHgeQgIgqArgMQAsgMAIAqQAPBIgzBJQgaAlgdATQgMAIgUAIIgBAAIgJALQgQAQgRAAQgPAAgQgPg");
	this.shape_23.setTransform(430,445.5,0.868,0.868);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F6F7").s().p("AgtBRQgGgXAGghIACgHIACgUQACgNgEgVQgEgYAAgJQgBgsAtAAQAsABABArQAAAKAEAYQADAVgBANIgFBGQgDAlgmAGIgKACQgdAAgIghg");
	this.shape_24.setTransform(425.7,439.8,0.868,0.868);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F6F7").s().p("AhABzQgggRgJglQgIglARgfIAPgZIALgTIADgJQAKgkAggSQAfgRAkAIQAjAIATAjQATAigKAiQgJAegPAbQgQAZgHANQgRAgglAJQgLADgMAAQgXAAgWgMg");
	this.shape_25.setTransform(430.7,441.9,0.868,0.868);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2F6F7").s().p("AAIC8QghgQgLgnQgJg8gGgcQgKgvghgZQgggXgJggQgLgjATghQASgeAmgLQAngMAcAVQBKA3AeA5QAOAeAIAuQAKBAAEAPQALAngUAfQgTAcgjAKQgOADgNAAQgUAAgSgIg");
	this.shape_26.setTransform(411.2,385,0.868,0.868);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F6F7").s().p("AghEVQgsgwgQg2QgNgwAEhGQAHhUABgrQABhJgRgzQgOgnAUgeQARgcAjgJQAkgKAeAOQAjAPANAnQASAxADA/QACAsgEBHQgBAYgIA+QgCA1AXAaQAcAegEAmQgDAigaAaQgaAaghACIgEAAQghAAgZgdg");
	this.shape_27.setTransform(417.3,397.8,0.868,0.868);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F6F7").s().p("AAHEzQglgGgWgiQg7hZgFiTQgDhPASiqQAEgmAXgZQAZgbAmAAQAiAAAdAbQAdAcgDAjQgLBtgBBtQgBA6AGAhQAIAyAXAkQAXAigLAiQgKAfggATQgYAOgZAAIgQgCg");
	this.shape_28.setTransform(418,397,0.868,0.868);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F6F7").s().p("AgODkQgigKgUghIgEgHQgIgMgDgPIgFglIgGgPQgHgWgEgTQgIguAEgjQADghANgnQAIgVAUgwQAPgkAbgRQAegUAlAKQAjAKATAhQAVAjgMAhQgRAvgEA+QgDAnADAlIAGARQARAugNAhQgOAkgdASQgUAMgXAAQgLAAgNgDg");
	this.shape_29.setTransform(417.7,401.1,0.868,0.868);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F6F7").s().p("AgODFQgpgJgNggQgZg5gDhKQgCg3ALhPQAFgnAWgYQAYgbAmAAQAjAAAdAbQAeAcgEAjQgHAzgBAzIgCAlQAAAYAEALQAQAkgHAhQgIAjghATQgUAMgYAAQgLAAgNgDg");
	this.shape_30.setTransform(419.1,403.3,0.868,0.868);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgCAPQgEgBAAgFIADgTQABgFAEABQAFABgBAFIgDAUQAAADgDAAIgCAAg");
	this.shape_31.setTransform(236.9,414.6,0.868,0.868);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAAIQgFgBABgFIAAgEQAAgFAEAAQAFAAAAAFIAAAHQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgBAAg");
	this.shape_32.setTransform(236.8,414.5,0.868,0.868);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgBAJQgFgBABgFIACgIQABgFAEACQAFABgBAFIgCAIQgBADgDAAIgBAAg");
	this.shape_33.setTransform(236.7,414.5,0.868,0.868);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgIABQAAgEAFAAIAGgBQAFgBABAFQABAEgEAAQgFACgEAAQgFAAAAgFg");
	this.shape_34.setTransform(236.6,434.2,0.868,0.868);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAAAFIgDgBQgEgDADgDQACgEADACIACABQAFABgCAEQgBAEgDAAIgCgBg");
	this.shape_35.setTransform(236.6,434.1,0.868,0.868);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("ABOTXQgmgigXhZIgQhSQgLhQAFhHQADgyAKglQAFgRAPgHQA7gfAhhLQAEgKAYhSIACgFQAUiAh3odQhonbgth3QgDgJABgIQAGhdhPjoIhRjWIAbA2IAJAJQBxCbBND8QAlB9AYBqQCSHEA1IcQATC/ADCfQADCGgJAbIgBAHQgfCjgsBJQgdAxghAEIgGABQgOAAgMgMg");
	this.shape_36.setTransform(282.2,259.7,0.868,0.868);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").p("Ah4gCQB4ALB5gL");
	this.shape_37.setTransform(250.7,394.1,0.868,0.868);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").p("Ah4gCQB4ALB5gL");
	this.shape_38.setTransform(168.9,395.7,0.868,0.868);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").p("Ai+PDQCLmVBurEQAzldAViMQAkjuAYhV");
	this.shape_39.setTransform(158.3,253.9,0.868,0.868);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F15A24").s().p("AAAgbIj4hmQFvAWBiBsQA2A9gkBEQAMguj3hvg");
	this.shape_40.setTransform(304.3,88.5,0.868,0.868);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F15A24").s().p("AgfBYQgtgPg8gLQh3gWh9AMIAPgkQAXgqAmgdQB5heDfBDQAKAFCXA4QCYA9AcAnQgSAShTAKQgoAEgsAAQhlAAh+gXg");
	this.shape_41.setTransform(290.8,92.2,0.868,0.868);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AxnbeQg/gSgDhVQgCgtABgiIABgPQgHkaBXlPIABgIQBwqRDinKQCAkGCUijQAXgZABgiQAOlhBNkCQAghqA3hvQBNitDOhCQBnggBZABQCuARC1BNQB6AzAsAjIASAJIGJCjQATAHAPAPIAHAHIAdAlQAGgIAFAUQAFAWgEgDQgGgGiJgxImEiMIgPgEQhjgVhXgJQgtgEgfAAQkVgQh2EjQhCCggEDIQAAAOgFAMQgPAtgrAbQghAVgVAAQg/AAhBAgQgpAVgTASQghAWhcCsIhbCuQkUGwh0JjQhAFPgBEJQgBAHACAJQAKA2AmASQAaANAkgGQAIgCARAMQASAMgCAIQgXBngjBRQgWA0giA1QgjA5gvAAQgMAAgNgEg");
	this.shape_42.setTransform(221.2,213.7,0.868,0.868);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgWgXQgJgKAGgSQAGgVAXANQAMAMAHAbQALAmgMAvQgahHgSgRg");
	this.shape_43.setTransform(184.8,433.8,0.868,0.868);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYgTQARgbAYgNQAHgDAHACQAHADADAHQAGAPgIAQQgGANgQAFQgRAEgSAcQgUAdgEACQgFgvAXgig");
	this.shape_44.setTransform(233.7,415.9,0.868,0.868);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAJAhQgJgfgQgKQgOgKgCgOQgDgRALgNQAFgGAHAAQAIgBAEAGQAUATAJAfQALAogSArQgDgDgKgig");
	this.shape_45.setTransform(188.4,416.1,0.868,0.868);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgWghQAIghANAAQAfAAgEAkQAAAGgFAGQgRASgOBDQgXg6ALgqg");
	this.shape_46.setTransform(164.4,435.9,0.868,0.868);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgQgWQASgfANAAQAOAAADAOQADALgKAHQgUAOgSAfQgKARgFANQgMgpAYgjg");
	this.shape_47.setTransform(146.6,433.2,0.868,0.868);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgBAYQAEgVgOgLQgKgIgDgLQgEgVASAAQAKAAALANQAOARAAAWQAAANgEAHQgIAOgXALQAGgNADgMg");
	this.shape_48.setTransform(275,433.6,0.868,0.868);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgWgSQACgeAIgIQARgGAKANQAIAJAAALQgSA9gRAbQgMgqACgjg");
	this.shape_49.setTransform(256.5,435.9,0.868,0.868);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgYgYQAMgaARgJQAZgIAEAUQAEATgLAIIgaAkQgYAjgFALQgOgxASglg");
	this.shape_50.setTransform(237,432.2,0.868,0.868);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").p("EACsAhTQAegEASgJQAIgEAJgJQAEgEAGACQAhAMAcgKQAHgDAEAHQAIAOAGAFQAfAvAqgKQALgDAmgXQACgCAFABQAeAIAVgKQAOgGAJgNQADgFAHABQAKADAMgCQAHgCAJgBQAeAAAHgSQAEgLgEgOIgCgEQgGgQhNhTQhIhOgdgZQgDgCAAgFQAAiWAIgdQABgFAGgBQBkgUA8iUQABgCAIgRQAYgsAWhbQAHgbAVhpQACgHAHAAQAIAAACAHQAiCfA5AAQAtgGAfg4QAQgcAHgbQASgpAPg9QAgh8gMhqQAAg9gOinQgUjkgchKQhaorhIj7QgmiJgoiBQhQj/hChIQgTgSgahCQgohigFhyQAAgyAKgzQAUhmAzgnIByhBQCChEBPgLQABgBCWgLQCcgLArgWQAFgFAHAGQAEAEACAEQANghgLgqQgWhTh8gnQgogLg6gOQh2gbh0gLQhOgkhhgoQjChSh0gWQg4gJhIAHQiNANhrBPQisBfhfHbQgcCPgUCwIgRCPQlnF4jTOwQhpHYgiGNIAABZQAJBcAtARQAiAAAXgTQArgjAjhjIBRihIACBvQAJB7AhA+QAKAUAQA4QATBEAAAjQAAAoAXAyQAiBOBFAMQAJAAALAmQANAqgGAkQAAAFgRAWQgPAbAFAbIgfAjQgyAvhaA+QgaAaAJAcQAKAWANAJQAWAQAjgLIASAAIANAYQAUAXAngMQAJAAAbgbIAAAIQAAAKAFAGQAQAUAzgRQASgJAJgSIAXAEQAdACAcgGQAFAAAoAMQAsAEAcghQAKgKAFgVQAGgbgMgXQgEgUgEgYQgGgvAFgRIAZAHQAWAAgLgiQgLghg2gyIg0grQgEgGgFgOQgJgaAAgiQALgLAfgQQAvgZBSgdQACAAAqALQAzANAuAHQCYAXBTgtQAFgDAPAJQAJAFAYAPQA0AdAvgKIAFADQAGAHAEAMQALApgPBbQgCAHgFACQgNAGgTALQgWANgJAHQgHAGAHAVQAHAXARABIgIAkQgLAogRAXIgRAdQgLAkAcAiIAEAEIAFAAIAMABQAUgDAVgUQAIgDABgUQABgUgSgCQgJAAgRAWQgSAXgBAWQAAADAAAC");
	this.shape_51.setTransform(221.8,249.2,0.868,0.868);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FBFCFE").s().p("EAFNAhQQgGgFgIgOQgEgHgHADQgcAKghgMQgGgCgEAEQgJAJgIAEQgSAJgeAEIgbgLIAAgFIgFAAIgEgEQgcgiALgkIARgdQARgXALgoIAIgkQgRgBgHgXQgHgVAHgGQAJgHAWgNQATgLANgGQAFgCACgHQAPhbgLgpQgEgMgGgHIgFgDQgvAKg0gdIghgUQgPgJgFADQhTAtiYgXQgugHgzgNIgsgLQhSAdgvAZQgfAQgLALQAAAiAJAaQAFAOAEAGIA0ArQA2AyALAhQALAigWAAIgZgHQgFARAGAvQAEAYAEAUQAMAXgGAbQgFAVgKAKQgcAhgsgEQgogMgFAAQgcAGgdgCIgXgEQgJASgSAJQgzARgQgUQgFgGAAgKIAAgIQgbAbgJAAQgnAMgUgXIgNgYIgSAAQgjALgWgQQgNgJgKgWQgJgcAagaQBag+AygvIAfgjQgFgbAPgbQARgWAAgFQAGgkgNgqQgLgmgJAAQhFgMgihOQgXgyAAgoQAAgjgThEQgQg4gKgUQghg+gJh7IgChvIhRChQgjBjgrAjQgXATgiAAQgtgRgJhcIAAhZQAimNBpnYQDTuwFnl4IARiPQAUiwAciPQBfnbCshfQBrhPCNgNQBIgHA4AJQB0AWDCBSQBhAoBOAkQB0ALB2AbQA6AOAoALQB8AnAWBTQALAqgNAhQgCgEgEgEQgHgGgFAFQgrAWicALQiWALgBABQhPALiCBEIhyBBQgzAngUBmQgKAzAAAyQAFByAoBiQAaBCATASQBCBIBQD/QAoCBAmCJQBID7BaIrQAcBKAUDkQAOCnAAA9QAMBqggB8QgPA9gSApQgHAbgQAcQgfA4gtAGQg5AAgiifQgCgHgIAAQgHAAgCAHIgcCEQgWBbgYAsIgJATQg8CUhkAUQgGABgBAFQgIAdAACWQAAAFADACQAdAZBIBOQBNBTAGAQIACAEQAEAOgEALQgHASgeAAIgQADQgMACgKgDQgHgBgDAFQgJANgOAGQgVAKgegIQgFgBgCACQgmAXgLADQgIACgGAAQghAAgagng");
	this.shape_52.setTransform(221.8,249.2,0.868,0.868);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2F6F7").s().p("AAEBwIgogXIAAAAQglAIgggRQghgRgIgmQgHghAQgiQAQgkApgOQAlgNAlAKQAIgKAMgHQAggSAkAJQAjAIATAiQAUAigLAiIgFARIgBAFIAAACIAAAEIAAASQACAzgvAaQgYANgWAAQgXAAgVgNg");
	this.shape_53.setTransform(75.6,484.7,0.868,0.868);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F2F6F7").s().p("AgjHjQg8gqgfhGQgbg9gGhSQgCgdABh3QABgogEgcQgFgjgMgeQgLgbgXggIgog3QgxhEgChGIgEgKQgNgrANgqQANgqAigeQA+g4BpAQQA3AJB0AuQBSAgAvAlQA6AvAcBGQAcBHgDBOQgEBMggBFQgJAVgWAiQgPAfAFAdQAQBUgIBGQgKBPgeA3QgnBGhDAQQgTAFgTAAQgyAAgwgig");
	this.shape_54.setTransform(89.9,513.4,0.868,0.868);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F2F6F7").s().p("ArPE5Qg4gRgjgpQgmgtAAg4QAAg1Adg2QAZgtAmghQAOgQATgNQAmgaBAgSIBsgcQBzgkBlg2QBDgmAjgRQA7gdAwgJQBggSCHAwIBwAsQBEAbAtAMQAxANBIAQIB6AcQBRATAdAMQA7AXAgAqQAmAwgBA6QgBA+grAqQghAhhCAZQgZAKhWAaQhGAUg2AGQhEAIg6gOQgugLg0gdQgdgRg9gqQg4gogfgMQgygUgwANQhSAWiYA3QgxAShGAcIh2AvQhYAihEAAQgiAAgegIg");
	this.shape_55.setTransform(281.5,494.7,0.868,0.868);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F2F6F7").s().p("Aj+EMQgUgFgOgMIgJgBQg6gMgRg9QgMguAYg4QATguAmgoQAcgdA1gbQA9gbAcgQQBRgsBdgRQA4gwBAgoQAegSAmAJQANADAKAFQAZgNAhAJQAlALASAfQATAggLAkQgKAhgfAWIg0AmIgJARQgYApgtAZQgcAQg+AWQghAMg3AKQhCAMgXAGIgRAGIgNARIgVAfIgSAWIgKAgQgLAogiAPQgRAJgUAAQgOAAgOgEg");
	this.shape_56.setTransform(109.7,365.4,0.868,0.868);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2F6F7").s().p("AhRD0QgMgMgGgOIgCgBQgegNgPgbIgDgFQgsgVgEg4QgGhQAchLQAahJA2g/QAbgfAkABQAXABAUAPIAFgGQATgWAegSQAjgVAjAMQAgAKASAgQATAggGAhQgHAlgjAVIgGAEIgEALIgIAPIgLAPQAMADAMAIQAeASALAfQANAjgRAlIgmBSQgMAbgaAKIgFAHQg5BDhEABIgBAAQgkAAgagbg");
	this.shape_57.setTransform(79,379.7,0.868,0.868);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F2F6F7").s().p("AhiESQgigLgbgdQgYgbgOgkQgLgbgEgdQgNgIgMgOQgnguAhgzQAshHAbgiQAtg6AtgdQApgaBEgTQBjgcAQgGQA1gTAqA1QApA1giAuQgfAogRATQgcAfgjgCQgYgBgTgNQgDAIgFAHQgSAdgjAOIgIANIgLAWIgCADIAGACQAKAFAUAEQAWAFAJADQAnAOATAgQAVAhgKAoQgJAfgeAXQgUAQgnASQgqASgcAGQgQADgPAAQgWAAgVgHg");
	this.shape_58.setTransform(70.8,384.2,0.868,0.868);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F2F6F7").s().p("AntGLQglgPgRgcQgUgfALglQAJgiAhgVQAkgVAgANQAgANAjgHQAYgEAqgTQArgUAPgIQAhgSAVgSQAUgTAMgiIATg7QAbhKAvgtQAzgzBMgYQAVgHA3gJQAxgIAagKQA2gVA0gxQAnglAtg7QAXgfAggJQAjgLAhATQAeASALAmQAMAngVAcQg8BQgyAxQhCBBhHAiQgjARgvALIhVASQglAGgXANQgcAQgQAcQgNAXgQA2QgPAzgQAZQgpA/hRAvQhfA2hGATQgvANgpAAQgvAAgogQg");
	this.shape_59.setTransform(99.2,377.2,0.868,0.868);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F2F6F7").s().p("AhzCrQg5gDhOgJQiHgQhdhbQgegdADgjQACghAagaQAagaAhgDQAggCAbAVQB8ABBKgJQAhgDAygLIBRgSQArgIA6gCIBmgDIBdgFQAegCAYgFQAggmAyASQAxARARAuQALAegNAhQgMAhgcAPIgNAGQgaAUglARQhhAtgKAGQg3AihFAPQgpAKhcAIQglADgsABIg1gCg");
	this.shape_60.setTransform(257.4,368.9,0.868,0.868);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2F6F7").s().p("Ak8CmQhPgPg+g0QhDg4gShIQgJgoAVgfQATgcAkgKQAjgJAdAOQAhAQAKAoQALAtA5ASQApAMA5gCQAagBBZgJQBHgIArADIA2AKQAkAGARgGQAOgEAVgRQAZgUAJgEQALgGBagfQA+gVAcggQAbgeAkACQAhACAaAaQAaAZADAiQAEAmgcAfQgoArhTAfQhmAmgfAVQgmAagXALQghAPgkACQgaABgugGQgygHgVAAQgPAAiLAMQgjADgfAAQgyAAgmgIg");
	this.shape_61.setTransform(257,370.5,0.868,0.868);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F2F6F7").s().p("AAsDhQgdgRgPgkQgVg0hChgQhAhcgWg3QgNghAVgjQAVgiAigJQAkgKAfATQAdATAOAjQALAeAfAqIAyBGQAvBGAjBTQAOAhgXAjQgUAigiAJQgMADgMAAQgXAAgUgNg");
	this.shape_62.setTransform(424.9,425.2,0.868,0.868);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F2F6F7").s().p("AgYCGQgkgIgSgiQgRghAHgjIgCAKIACgOIgBhBQAAglAbgaQAagZAkgCQAkgBAbAcQAbAbAAAkIABA6QAAAigGAYQgIAkgiASQgXALgWAAQgLAAgLgCg");
	this.shape_63.setTransform(43.3,445.8,0.868,0.868);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F2F6F7").s().p("AggBtQgRgHgMgMQgMgMgHgSQgIgRABgRQAAgOgBgQIABAEIgCgQIABAMQgFgWAGgWIAJgWQAPgdAngMQAPgFATADQATACAPAJQAOAIAMAPQANAQACAPQAHAsAAAeQgBAlgaAaQgZAZgmACIgCAAQgPAAgRgHg");
	this.shape_64.setTransform(42.9,443.4,0.868,0.868);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F2F6F7").s().p("AgeB8QgSgIgLgMQgWgVgFgnQACAPgCgGIgDgPQgEgSABgTIAIhBQAGgjAlgTQAigRAiAIQAPADAQAMQAOAMAIAOQAKAQABASQABAOgCAWIgCAPIAAgJIgBAMQAEAMACAbQAEAkgeAbQgcAZgkACIgDAAQgOAAgQgHg");
	this.shape_65.setTransform(41.9,452.3,0.868,0.868);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F2F6F7").s().p("Ag9CHQgcgcABgjQAEhNgHhBQgEgkAegbQAcgaAkgBQAkgCAZAcQAXAaAFAmQAHBBgEBNQgCAmgZAZQgZAZgmACIgCAAQghAAgbgbg");
	this.shape_66.setTransform(43.2,451.2,0.868,0.868);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F2F6F7").s().p("AgWBzQgPgEgPgLQgRgNgGgNIgKgZQgDgKgBgRIgBgPIABgiQACgmAZgZQAZgaAlgBQAigCAdAcQAcAcgBAkIgBAgQADALAAAMIgDAYQgIAggiAWQgOAJgUACIgNABQgLAAgLgDg");
	this.shape_67.setTransform(38.8,446.5,0.868,0.868);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F2F6F7").s().p("AATCeQgkgBgbgZQgegbgVhIQgQg3AFgtQADgmAYgZQAYgZAngCQAhgBAdAcQAeAdgDAiIgCAUIAAAJIgCgMQgBADADALIAEANQADANAHAPIACAEIgFgEQAFAFADAFIgDgGQAWAYgBAjQgBAlgZAbQgXAagkAAIgEAAg");
	this.shape_68.setTransform(38.1,447.7,0.868,0.868);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F2F6F7").s().p("AglCJQgPgDgPgMQgPgMgIgOQgKgQgBgSQgCgOAEgWQAHgyASgxQANgkAegSQAegSAlAJQAiAHAUAjQAVAkgMAgQgSAxgIAzQgFAkglASQgXAMgXAAQgLAAgLgDg");
	this.shape_69.setTransform(41.1,448.2,0.868,0.868);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F2F6F7").s().p("Aw8J9QgfgSgMggQgMgjAUgkIBZieQA1heAjhCQARgfAEgaQADgagIgjIgUhLQgLgrAAgiQgEiPB/hgQBZhFCmgzQBDgUDRhYQCqhIBwgUQCVgaCUAIQCYAJCOAsQAaAJBtAqQBSAhA3AKICAAZQBHATAvAiQAfAXAKAgQAKAjgTAhQgSAfglALQgoALgcgVQgrgfhNgPQhXgMgqgLQgvgNhkgoQheglg1gNQh/gfiDAAQiDABh8AhQg8APhGAdQgsARhSAlQhlAuinA1QhDAVgkAUQg3AfgXAsQgWAoAQBEIAdBuQAIA/gZBFQgPAogtBRIiSEFQgUAkgkAHIgQABQgYAAgYgOg");
	this.shape_70.setTransform(130,393.5,0.868,0.868);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F2F6F7").s().p("AR4GJQgkAAgagWQgcgYgBgpIgDlPQgOgEgTgCQgygFgSgDIiIgXQidgYiEgIQhggEgvgDQhSgGg8gNQiGgdiFgLQg9gFhNgNIiKgYQg8gLhIAGQgsADhXAPQknAwkcgBQgpAAgYgcQgWgaAAgkQAAglAWgZQAYgcApAAQCQAACpgQQB5gMC9gcQCRgWCMAcQCDAZB8ALQB8AKCSAgQA1AMBPAEICGAGQB5AICnAaICQAUQBUANA5AQQBFAUAWBCQANAmABBcIACEbQABApgcAYQgYAWgkAAIgCAAgAQZg6IgBAJIACACIAAgEIAAgHIgBAAg");
	this.shape_71.setTransform(320.4,385.1,0.868,0.868);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#66CCFF").s().p("AyfP6QgOgCgKgIIm1lXQgLgJgLAAInMg4QgNgCgJgIQgKgIgEgNIh9mRQgHgVANgSIDDkCIBAh/QAIgPgGgTIg7ixQgFgQAHgPIBVjDQAJgUATgFIPlknQAggJAiAKILZDjQAHADAKgBILyhFQAHgBAFACIKiB3IMgB7QARADAKANQALAOgBARIgaE5QgBARAKANICxDuQANASgGAUIhpFmQgEAOgLAJQgMAJgPAAIpaAAQgPAAgMAJQgMAKgEAPIhdGgQgEARgOAKQgOAKgRgDIqWhZQgQgCgLgMQgLgNAAgRIAAhRQAAgXgSgNQgSgNgVAHItVEQQgNAEgNgDQgOgEgIgLIjGj3QgKgNgQgDQgPgDgPAIIpZFRQgKAGgMAAIgDAAg");
	this.shape_72.setTransform(228.2,431.3,0.868,0.868);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F2F6F7").s().p("AgNBpQgTgIgLgMIgdgdQgSgTgIgOQgRgfAIglQAHggAigWQAPgJATgCQATgDAQAFQAQAEAPALQANAKAHALIAKAKIAUAVQAYAcACAjQACAhgcAeQgMAMgSAIQgRAHgRAAQgRAAgQgHg");
	this.shape_73.setTransform(41.5,455.5,0.868,0.868);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0099CC").s().p("A0jJWIgEgDImOmOQgTgUgVAAIlYgeQgUAAgRgMQgRgNgGgUIg6i2QgMgoAYgiQAXgiAqgCIAMgBIh5AHMBFRgFmQAGAGACgXIAFgtQAJg2AwBgIAAAeIglGYIgEAmQgEAZgMAHQgCACgfAFQggAGgPABIndAqQgZACgSARQgSARgEAYIgpD1QgDAQghA5QgnBDgcASIgYAQQgdAQgaAAQgMAAkUghQkxgkiRgKQgagCgYgVQgYgUgGgaQgNg9g1gPQgqgNgpARQpiDwgUABQgXAHgbAGQg3ANgZgHQgcgHgdgMQg9gWgLgTIhqh4QgPgSgXgDQgXgEgTAMQmLDpgoAUQgYAPgkAIQgVAEgUAAQgvAAgogag");
	this.shape_74.setTransform(231.1,485.1,0.868,0.868);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E4B436").s().p("AgFA6QgHgBgFgEIgBgBIgBAAIgNgIIgBgCQgJgJgEgMQgCgJADgKIgCgGQgIgZARgRQATgSAWAGQALADAJAHQAEAEAFAHIABACQANAKADARQACAHgBAGIABAKQAAAKgDAHQgHAVgWAGIgLACQgHAAgGgDg");
	this.shape_75.setTransform(228.6,99.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Background
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(693,520,0.061,0.061);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhRCSIAAkjICcAAIAAAvIhjAAIAABHIBeAAIAAAtIheAAIAABRIBqAAIAAAvg");
	this.shape_76.setTransform(725.9,36.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("ABcCSIgFhxQgEhWAAgdIgBAAQgMA0gQA2IgkB2IgqAAIggh0QgOgxgLg7IgCAAIgEB0IgGBwIgzAAIAUkjIBFAAIAgBtQAPA6AIAsIABAAQAKgxAPg1IAihtIBFAAIAQEjg");
	this.shape_77.setTransform(698.3,36.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AA7CSIgVhNIhNAAIgVBNIg5AAIBTkjIBGAAIBSEjgAAeAaIgShBIgMg8IgBAAIgNA8IgRBBIA9AAg");
	this.shape_78.setTransform(669,36.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AhIByQgognAAhJQAAhGAsgpQApgnBAAAQAsAAAYAMIgLAuQgYgKggAAQgoAAgYAZQgbAaAAAyQAAAyAYAbQAXAZAlAAQATAAAKgEIAAhIIgrAAIAAgrIBgAAIAACXQgmAOgtAAQhCAAgkgjg");
	this.shape_79.setTransform(643.1,36.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAyCSIg9h5Qgcg1gRgsIgCAAQAEA2AABKIAABaIgzAAIAAkjIA8AAIA9B2QAZAuATAxIABAAQgFg2AAhHIAAhYIAyAAIAAEjg");
	this.shape_80.setTransform(608.7,36.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgbCSIAAkjIA3AAIAAEjg");
	this.shape_81.setTransform(589.6,36.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AhoAXIAAiqIA4AAIAACvQAABKAwAAQAxAAAAhKIAAivIA4AAIAACqQAAA/gdAfQgbAggyAAQhngBAAh9g");
	this.shape_82.setTransform(570.7,36.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AhIByQgognAAhJQAAhGAsgpQApgnBAAAQAsAAAYAMIgLAuQgYgKggAAQgoAAgYAZQgbAaAAAyQAAAyAYAbQAXAZAlAAQATAAAKgEIAAhIIgrAAIAAgrIBgAAIAACXQgmAOgtAAQhCAAgkgjg");
	this.shape_83.setTransform(544,36.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAyCSIg9h5Qgcg1gRgsIgCAAQAEA2AABKIAABaIgzAAIAAkjIA8AAIA9B2QAZAuATAxIABAAQgFg2AAhHIAAhYIAyAAIAAEjg");
	this.shape_84.setTransform(517.8,36.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AhRCSIAAkjICcAAIAAAvIhjAAIAABHIBeAAIAAAtIheAAIAABRIBqAAIAAAvg");
	this.shape_85.setTransform(494.7,36.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AhcCTIAAkfQAggGArAAQA3AAAbAXQAdAYAAApQAAA2goAYQgcATgqAAIgUgBIAABtgAgkhkIAABfIATABQAaAAAOgOQAOgNAAgYQAAgXgNgNQgOgMgWAAQgOAAgKADg");
	this.shape_86.setTransform(473.1,36.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#71B8E0").s().p("Eg53Ar8MAAAhX3MBzvAAAMAAABX3g");
	this.shape_87.setTransform(379,289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.instance}]}).wait(1));

	// Frame
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(2,1,1).p("Eg53gr7MBzvAAAMAAABX3MhzvAAAg");
	this.shape_88.setTransform(379,289);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Eg53Ar8MAAAhX3MBzvAAAMAAABX3g");
	this.shape_89.setTransform(379,289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(385.6,294.3,788.9,568.4);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 756,
	height: 575,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/MPHFinal_JVolteada_atlas_.png?1559830061069", id:"MPHFinal_JVolteada_atlas_"}
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