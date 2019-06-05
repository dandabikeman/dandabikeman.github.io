(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"MPHFinal_JVolteada_atlas_", frames: [[0,0,900,900],[1499,902,518,120],[902,0,900,900],[0,902,649,648],[651,902,846,242]]}
];


// symbols:



(lib.Hat = function() {
	this.initialize(ss["MPHFinal_JVolteada_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.initialize(ss["MPHFinal_JVolteada_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["MPHFinal_JVolteada_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.purepngcombaseballbatbaseballballgameteamsbaseballsbaseballbat17015280889667isuj = function() {
	this.initialize(ss["MPHFinal_JVolteada_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.skateboardhdpngskateboardpngimage1339 = function() {
	this.initialize(ss["MPHFinal_JVolteada_atlas_"]);
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
	this.instance.setTransform(-10.95,-67.05,0.3082,0.3082,82.4848);

	this.instance_1 = new lib.skateboardhdpngskateboardpngimage1339();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.95,-134.15,0.3082,0.3082,82.4848);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Skateboard, new cjs.Rectangle(-54,-134.1,108.1,268.29999999999995), null);


(lib.shoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AOiQVI2PgRQgkAAgigKQglAGgrAAQgfAAg/gEQjPgQipgjQhhgThbgzQhNgrhYhKQidiEg8ioQgihgAMhtQAMhlAxhgQBPiXCrhgQBng5CXgrQAdgZAdgSQBmhBB2AIQBFAFBnAVICqAiICjAbIBfANQCbATCYALQCjAMCSACIArADIAMAAIAMgEIARgGIAEgCIATgLQASgKAfgWIATgPIACgBQAagXAUgTQAqgpAhgnIAMgQIAAgBIABgBIACgCQAPgVATgeQAegxAZg0IAAgCQAAABAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQgCgDAPgXIAQgvQAQgzAMg9QAZh9BahLQBchNB/AFICjAHIBgADQA5AEAlANQBcAfA0BNQAvBGAJBmQAEAqAEBvQATIWhwIYQAPBdgjBWQgYA7grAtIgKAUQgXApgjApQg5BDhXAmQhRAjheAEQgoACgjgKQg8AmhIAAIgCAAgArTD0IAIAKIgGgKIgCgBIAAABgAGsjfIgNADQASAAADgEIgBAAIgHABg");
	this.shape.setTransform(71.7523,1.4414,0.3111,0.2468,0,10.8062,-172.3277);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AOiQVI2PgRQgkAAgigKQglAGgrAAQgfAAg/gEQjPgQipgjQhhgThbgzQhNgrhYhKQidiEg8ioQgihgAMhtQAMhlAxhgQBPiXCrhgQBng5CXgrQAdgZAdgSQBmhBB2AIQBFAFBnAVICqAiICjAbIBfANQCbATCYALQCjAMCSACIArADIAMAAIAMgEIARgGIAEgCIATgLQASgKAfgWIATgPIACgBQAagXAUgTQAqgpAhgnIAMgQIAAgBIABgBIACgCQAPgVATgeQAegxAZg0IAAgCQAAABAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQgCgDAPgXIAQgvQAQgzAMg9QAZh9BahLQBchNB/AFICjAHIBgADQA5AEAlANQBcAfA0BNQAvBGAJBmQAEAqAEBvQATIWhwIYQAPBdgjBWQgYA7grAtIgKAUQgXApgjApQg5BDhXAmQhRAjheAEQgoACgjgKQg8AmhIAAIgCAAgArTD0IAIAKIgGgKIgCgBIAAABgAGsjfIgNADQASAAADgEIgBAAIgHABg");
	this.shape_1.setTransform(-71.7523,1.4414,0.3111,0.2468,0,-10.8062,-7.6723);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shoes, new cjs.Rectangle(-123.1,-29.5,246.2,59.1), null);


(lib.Reset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBNIAAh/IgmAAIAAgaIBpAAIAAAaIgmAAIAAB/g");
	this.shape.setTransform(23.025,-0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBNIAAiZIBSAAIAAAZIg0AAIAAAlIAxAAIAAAXIgxAAIAAArIA3AAIAAAZg");
	this.shape_1.setTransform(12.4,-0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXBOIgNgEIgKgDIAGgZQAGAEAJACQAJACAJAAQALAAAHgFQAGgGAAgIQAAgIgGgGQgGgGgLgFQgSgHgKgLQgKgLAAgPQAAgMAGgKQAHgKAMgGQALgGAQAAQALAAAIACQAIACAGADIgGAYIgLgEQgHgDgKABQgHgBgEADQgFADgDAEQgCADAAAFQAAAFACAEQADAEAGAEIAOAHQATAJAIAKQAJAKAAAQQAAANgHAKQgGALgNAGQgMAGgRAAIgPgBg");
	this.shape_2.setTransform(1.175,-0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBNIAAiZIBSAAIAAAZIg1AAIAAAlIAyAAIAAAXIgyAAIAAArIA4AAIAAAZg");
	this.shape_3.setTransform(-9.45,-0.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVBOIgEgNIgFgYQgDgPgGgFQgEgGgKAAIgKAAIAAA/IgeAAIAAiYIASgBIAWgBIAQABQAKABAJAEQAKAEAGAJQAGAJAAAPQAAAJgDAIQgEAIgGAFQgGAFgHADIAAAAQAIADAFAHQAFAJACALIAFASIADAPIAEAKgAgQg2IgFABIAAAvIAMAAQAMAAAHgGQAHgHAAgLQAAgKgEgFQgEgGgGgBQgFgCgGAAIgIAAg");
	this.shape_4.setTransform(-20.875,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0099CC").ss(1,1,1).p("AldiXIK7AAIAAEvIq7AAg");
	this.shape_5.setTransform(0,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66CCFF").s().p("AlcCYIAAkvIK5AAIAAEvg");
	this.shape_6.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Reset, new cjs.Rectangle(-35.9,-16.3,71.9,32.400000000000006), null);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ApJKwQgvgkAdg1IATgiIAFgcIAIg4IAVhyIAGgiIgGgMQgPggAHg1QAEgbANguIABgMIAMhIQACgSAOgNQAFhmAEg2QAKiFAThrQARhXAFgRIAHgSIAAgBIgJABQghgBgSgUQgRgTAAgbQABgcARgUQASgWAggDIATgBQADgVANgQQATgWAgAAIKygGQBQgBAZgCQA6gEAsgQQA0gSAYAxQAYAwggAmIhVBnQg2A6gyAYQgSAJgWAGIgOAaQgqBKhMBFQgZAXhrBsQgqAqgkAgIgBAPQgDAfgWATQgNAKgQAFQhRCCiOBNIgFADIgOAWQhZCVhfCqQgOAogYAVQgXAVgYAAQgWAAgXgRg");
	this.shape.setTransform(-6.0508,-0.7308);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgfLDQgTgFADgTQA3kxArk7QhJgUhHgaIg7gSQgmgOgPgRQgNgOABgSQAAgMAJgVQAMgfAVgpIAlhGQBei0AthHQBZiJBjhMQAQgLAKARQAKARgPAMQhTA/hMByQgmA5hRCWQgcAygdA4IgZAyIgUAnQgKAXAQANQARAPAnAMIA9ASQA0ARBJATQAGACAFAGQAFAGgBAGQgrFDg6FCQgDAPgMAAIgIgBg");
	this.shape_1.setTransform(-65.401,-2.9913);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAxDbIAYisQh8ggh7gzQgSgIgEgIQgHgNAMgXQBbjABmioQAxhRAngwQA1hEA4gpIiWOJQgiDogqDsg");
	this.shape_2.setTransform(-65.4324,-2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiDLwQjZgJmngwQgTgCAAgUQAAgUATACQDcAZB3ALQC7ASCYAEQFHALEHgvIAagEQASgCAGgEQAJgGAJgTQAHgQADgNQACgNgBgVIgBgjIgBkyIgCg4QAAgiAHgVQAHgTASgOQAJgGAbgOIA3gcIAbgLQASgHAFgHQANgRgOgzIgWhIQgVhGgTg2QhZj/ifjiQgLgQASgKQARgKALAQQC9EPBdE2QAYBTAMA9QAFAWgBAMQgCATgNANQgSARglARQgqASgSAJQgmATgHApQgCAHAABJIABFFIABA5QgCAjgQASQgNAQgdAHIgwAJQjcAokJAAQhLAAhPgDg");
	this.shape_3.setTransform(8.1841,0.0394);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhwLdQjfgIm0gyITH2BQBzCjBRC5QBQC5AqDDQAEATgEAJQgEALgVAKIhuA4QgYAMgHAKQgKAOAAAiIABHGQAAAggLANQgLAPggAGQjpAukdAAQhCAAhFgCg");
	this.shape_4.setTransform(8.175,0.0283);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAOA2IkpgDQhLgBgigFQg8gJgqgcQgQgJAKgRQAKgSAQALQAtAcBHAGIB7ACID5ADQDAACAtgEQCGgLBagzQARgKAKARQAKASgRAJQhfA2iLANQgnADhtAAIhjAAg");
	this.shape_5.setTransform(3.9929,-69.9417);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("ABlAiImUgEQg+gBgggFQg1gJgigXIPJgZQhLAthtAOQg9AIhnAAIgkAAg");
	this.shape_6.setTransform(3.95,-69.8893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(-87.2,-75.4,174.5,150.9), null);


(lib.orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7931E").s().p("ApJKwQgvgkAdg1IATgiIAFgcIAIg4IAVhyIAGgiIgGgMQgPggAHg1QAEgbANguIABgMIAMhIQACgSAOgNQAFhmAEg2QAKiFAThrQARhXAFgRIAHgSIgJAAQghgBgSgUQgRgTAAgbQABgcARgUQASgWAggDIATgBQADgVANgQQATgWAgAAIKygGQBQgBAZgCQA6gEAsgQQA0gSAYAxQAYAwggAmIhVBnQg2A6gyAYQgSAJgWAGIgOAaQgqBKhMBFQgZAXhrBsQgqAqgkAgIgBAPQgDAfgWATQgNAKgQAFQhRCCiOBNIgFADIgOAWQhZCVhfCqQgOAogYAVQgXAVgYAAQgWAAgXgRg");
	this.shape.setTransform(-6.0508,-0.7308);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7931E").s().p("AoNJWIABgGIA1kbIACgLQgLACgGgFQgIgGACgSQAFg6ARg3IgEALIAhjtQAKiTAciQIAYizIgRgDIARAAIAIg9ILagGQA/AAAggEQA0gFAngPQgsA3g7A+QgVAWgMAKQgUARgSAHQgTAIggAEQgVA6goAxQgVAagiAgIg6A2QgXAWhBBEQg2A5gkAfIgKAIIAEglIgIAZIAAAPIgJAHQgnBfhJBFQg3AzhSAqIgFADIgTAgQhnCqheCoQgGAcgNAIIATgkgAh3AQIgGAEIAAA1QAOgjAMglIgUAPgAgugnIAEgDIgFAwIABgtgAnIodQAZgEAhAEIACAAg");
	this.shape_1.setTransform(-5.85,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7931E").s().p("AgfLDQgTgFADgTQA3kxArk7QhJgUhHgaIg7gSQgmgOgPgRQgNgOABgSQAAgMAJgVQAMgfAVgpIAlhGQBei0AthHQBZiJBjhMQAQgLAKARQAKARgPAMQhTA/hMByQgmA5hRCWQgcAygdA4IgZAyIgUAnQgKAXAQANQARAPAnAMIA9ASQA0ARBJATQAGACAFAGQAFAGgBAGQgrFDg6FCQgDAPgMAAIgIgBg");
	this.shape_2.setTransform(-65.401,-2.9913);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7931E").s().p("AAxDbIAYisQh8ggh7g0QgSgGgEgJQgHgNAMgXQBbjABmioQAxhRAngxQA1hDA4gpIiWOJQgiDogqDsg");
	this.shape_3.setTransform(-65.4324,-2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7931E").s().p("AiDLwQjZgJmngwQgTgCAAgUQAAgUATACQDcAZB3ALQC7ASCYAEQFHALEHgvIAagEQASgCAGgEQAJgGAJgTQAHgQADgNQACgNgBgVIgBgjIgBkyIgCg4QAAgiAHgVQAHgTASgOQAJgGAbgOIA3gcIAbgLQASgHAFgHQANgRgOgzIgWhIQgVhGgTg2QhZj/ifjiQgLgQASgKQARgKALAQQC9EPBdE2QAYBTAMA9QAFAWgBAMQgCATgNANQgSARglARQgqASgSAJQgmATgHApQgCAHAABJIABFFIABA5QgCAjgQASQgNAQgdAHIgwAJQjcAokJAAQhLAAhPgDg");
	this.shape_4.setTransform(8.1841,0.0394);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7931E").s().p("AhwLdQjfgIm0gyITH2BQBzCjBRC5QBQC5AqDDQAEATgEAJQgEALgVAKIhuA4QgYAMgHAKQgKAOAAAiIABHGQAAAggLANQgLAPggAGQjpAukdAAQhCAAhFgCg");
	this.shape_5.setTransform(8.175,0.0283);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7931E").s().p("AAOA2IkpgDQhLgBgigFQg8gJgqgcQgQgJAKgRQAKgSAQALQAtAcBHAGIB7ACID5ADQDAACAtgEQCGgLBagzQARgKAKARQAKASgRAJQhfA2iLANQgnADhtAAIhjAAg");
	this.shape_6.setTransform(3.9929,-69.9417);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7931E").s().p("ABlAiImTgEQg/gBghgFQg0gJgigXIPJgZQhMAthsAOQg8AIhoAAIgkAAg");
	this.shape_7.setTransform(3.95,-69.8893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.orange, new cjs.Rectangle(-87.2,-75.4,174.5,150.9), null);


(lib.hat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Hat();
	this.instance.parent = this;
	this.instance.setTransform(-73.55,-53.05,0.1425,0.1425,-9.1911);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hat, new cjs.Rectangle(-73.5,-73.5,147.1,147.1), null);


(lib.hair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4B436").s().p("AgcAAQAAgdAcAAQAdAAAAAdQAAAegdAAQgcAAAAgeg");
	this.shape.setTransform(9.5594,-6.2909,0.8679,0.8679);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4B436").s().p("AgPAgQgLgDgHgKQgHgKACgLQACgPAPgJQAIgEAMAAQAHgDAKADQAMADAHAKQAGAKgDAMQgEAMgKAGIgFADIgJAEQgHADgHAAIgLgBg");
	this.shape_1.setTransform(6.1866,-8.1583,0.8679,0.8679);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4B436").s().p("AgKArQgQgIgHgSQgFgPACgSQABgLAGgIQAHgJAMgBQAKgCAJAGQAKAHACAKIAEAOQAJAGADAKQACAMgFALQgDAGgGADQgFAGgIACIgIABQgHAAgHgEgAAWgCIAAgCIAAgBg");
	this.shape_2.setTransform(12.6079,-3.8181,0.8679,0.8679);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4B436").s().p("AgJAkQgNgDgHgMQgGgLAEgKIADgJIABgBQADgOAOgIQAKgGAMADQALADAHALQAGAKgDAMIgDAHIAAAEQgDANgMAHQgIAFgIAAIgIgBgAgSgTQgGAEgEAGIAAANIABgHIAAACIADgHIAJgKIAHgDIgBAAIAHgBIAAAAIAOAEIAAAAIABAAIgBAAIALALIgBgBQgFgKgNgEIgIgBQgHAAgHAEg");
	this.shape_3.setTransform(21.5341,0.9856,0.8679,0.8679);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E4B436").s().p("AgGAsQgMgDgGgLIgCgFQgHgJABgKIABgIQABgKAFgHIAAgDQACgKALgHQAJgGAKACQALABAIAJQAHAIAAALQABAQgEAVQgCAMgMAGQgIAEgHAAIgHgBg");
	this.shape_4.setTransform(15.1344,-11.2078,0.8679,0.8679);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E4B436").s().p("AgMCAQgMgJAAgPIAAgEQgNABgJgCQgWgEgagPIgVgOQgGgCgGgFIgKgIQgXgRAOgZQAOgYAZAPIAMAHQADgTARgaQAZgnAcgMIAAgCQAAgdAcAAQAGgGAGgEQAKgGANADQAJACAFAGQAIgHANAAQAXgCAFAXIACALQAIgEAKABQATABAFAUQAOAyggAsIgUAiQAEAHgBAHQgFAngbAOQgIAEg8AQIgIACQgIAAgJgHgAgcAHQAJAFgDgHQgEgDgCgCQgEAGAEABg");
	this.shape_5.setTransform(17.1833,-11.3169,0.8679,0.8679);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E4B436").s().p("AgiB2QgTgFAEgTIAEgPIACgGIANg/QALgyAPgfQADgFACgDIAJgaQAHgSATAGQATAFgGASQghBdgXBeIgDAMQgEAPgMAAIgIgCg");
	this.shape_6.setTransform(25.0634,1.8882,0.8679,0.8679);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E4B436").s().p("AhvBoQgQgLAKgRQAKgSAQALQAsAbAGgFIANgiQAHgJALAAQAKAAAGAJIACAFQAGgKAHgVIARgyQASgpAdg8QAJgRARAKQARALgIARQgbA1gUAvIgRAsQgKAdgKAOQgVAggWgRIANgaIgiAAQALASAKAIIgDAFQgMASgOAEIgJABQgXAAgrgbg");
	this.shape_7.setTransform(23.7062,-7.7939,0.8679,0.8679);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E4B436").s().p("AgYC7QAEgkgHg9QgIhHAAgaQAChPAehoQAEgTAUAFQATAGgFASQghBwACBOQABATAIBGQAGA2gEAiQgCATgTAAQgUAAACgTg");
	this.shape_8.setTransform(23.3892,15.8387,0.8679,0.8679);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E4B436").s().p("AhFD0QgUgFAGgSQAHgWAdhQQAXg+AKgoQAOgxAQhKIAeh8QAEgTAUAGQATAFgFATIgdB8IgfB7QgLAngVA/QgdBOgHAXQgEAPgNAAIgIgCg");
	this.shape_9.setTransform(14.2658,17.5556,0.8679,0.8679);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E4B436").s().p("AhcDoQgRgKAJgRQBpjMA8jdQAFgTATAFQATAGgFASQg9DihsDRQgFALgJAAQgFAAgHgEg");
	this.shape_10.setTransform(8.4609,13.3956,0.8679,0.8679);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E4B436").s().p("AihCvQgKgSARgJQAngUAsgsQAXgXAvg3QAzg7AUgaQAmgyAVgtQAIgRARAKQARAKgIASQgVAtgpA2QgQAVg7BEQgvA4gaAZQgtAtgqAWQgGADgFAAQgJAAgHgLg");
	this.shape_11.setTransform(2.4773,7.799,0.8679,0.8679);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E4B436").s().p("AAKA3QgKgDgMgGQgNgIgFgJQgFgIAGgPIALgVQAEgJAJAFQAFADAAAFIACgMIACgVIAAgDQABgIAJABQAEABACACIAEAAQAJABAAAKQAAAKgIgBQACAegBANIgBADQADATgFAOQgDAHgHAAIgDAAgAgIAWIAFAFIADgiIAAACIgKAUIgCAGIAAAAIAAAAIABAAIADABg");
	this.shape_12.setTransform(8.7056,-10.0013,0.8679,0.8679);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E4B436").s().p("AgoBHQgJgFAFgJQAXgpANgRQAPgVAFgJQALgRAEgQQADgJAJACQAKADgDAJQgGAbgbAiQgOASgaAvQgDAFgEAAQgDAAgDgBg");
	this.shape_13.setTransform(7.7686,-2.4359,0.8679,0.8679);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E4B436").s().p("AgrBbQgJgFAFgJQAHgNAQgVIAYgiQAKgSAIgbQAFgPAHghQACgKAKADQAKADgDAJQgNA9gPAbQgIAPgQAZQgUAagHAMQgDAGgEAAQgDAAgDgCg");
	this.shape_14.setTransform(6.1403,-6.1333,0.8679,0.8679);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E4B436").s().p("AjHDqQgKgRAQgLQBQg6AigeQA6g0Ajg5IBMh4IBMh7QAKgQARAKQARAKgKAQIhTCKQgyBRglA1QgiAzg7AxQgXAThXA/QgGAFgFAAQgJAAgGgLg");
	this.shape_15.setTransform(-8.1126,6.166,0.8679,0.8679);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E4B436").s().p("AlmDuQgKgSARgHQCAg3A+ggQBog2BGg7IBMhCQAvgqAegXIBUg6QA0gkAbgdQANgPAOAPQAOAOgNAOQgcAegzAkIhVA7QgfAXg0AvQg4AxgaAVQhHA6hlA0Qg/Agh8A1QgFADgFAAQgKAAgHgMg");
	this.shape_16.setTransform(-13.4573,-1.32,0.8679,0.8679);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E4B436").s().p("Al3DRQgKgRAQgKQAzggCHhAQB4g5A/grQBqhKBBgnQBfg5BZgiQATgGAFATQAFATgSAHQhYAhhjA9QgvAch/BXQg7Aoh0A3Qh/A7g0AgQgGAEgFAAQgJAAgGgLg");
	this.shape_17.setTransform(-15.1576,-6.4089,0.8679,0.8679);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E4B436").s().p("AlJCIQgFgTASgHIBaghQA2gUAjgQQAYgLAogZQArgcATgKQB4g+DFg1QASgFAGATQAFATgSAFQhrAdhEAYQhfAjhFApIg7AkQgiAVgcALIijA9QgEACgEAAQgLAAgEgOg");
	this.shape_18.setTransform(-14.5053,-12.4833,0.8679,0.8679);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E4B436").s().p("AgEAvQitgFiLgwQgSgHAGgTQAFgTASAGQCIAwCpAFQB9ADC7gVQATgCAAATQAAAUgTACQigATh0AAIgogBg");
	this.shape_19.setTransform(-16.5779,-25.6043,0.8679,0.8679);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E4B436").s().p("AgUAvQhSgLg0gNQhKgRg1gcQgRgJAKgRQALgSARAKQA0AcBMARQA3ALBQAKQB5ANCVgCQATgBAAAUQAAAUgTABIgsAAQiPAAhqgOg");
	this.shape_20.setTransform(-12.9507,-30.5503,0.8679,0.8679);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E4B436").s().p("AE8BVQhGgRhygGQiTgHgmgFQimgVhwhLQgPgLAKgRQAKgSAPALQBxBODGAPQA2AFBuAFQBgAHBDARQASAFgFATQgEAQgOAAIgGgBg");
	this.shape_21.setTransform(0.4305,-31.4134,0.8679,0.8679);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E4B436").s().p("AhyADIhHgpQhGgrAGAAQElgGCFAXQBCALAHAMQhIADg6A9QgTATgPAWIgLATg");
	this.shape_22.setTransform(26.4636,-22.012,0.8679,0.8679);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hair2, new cjs.Rectangle(-48.1,-38.8,96.30000000000001,77.69999999999999), null);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009245").s().p("ApJKwQgvgkAdg1IATgiIAFgcIAIg4IAVhyIAGgiIgGgMQgPggAHg1QAEgbANguIABgMIAMhIQACgSAOgNQAFhmAEg2QAKiFAThrQARhXAFgRIAHgSIgJAAQghgBgSgUQgRgTAAgbQABgcARgUQASgWAggDIATgBQADgVANgQQATgWAgAAIKygGQBQgBAZgCQA6gEAsgQQA0gSAYAxQAYAwggAmIhVBnQg2A6gyAYQgSAJgWAGIgOAaQgqBKhMBFQgZAXhrBsQgqAqgkAgIgBAPQgDAfgWATQgNAKgQAFQhRCCiOBNIgFADIgOAWQhZCVhfCqQgOAogYAVQgXAVgYAAQgWAAgXgRg");
	this.shape.setTransform(-6.0508,-0.7308);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009245").s().p("AoMJWIABgFIA0kcIACgLQgLACgGgFQgIgGACgSQAFg6ARg3IgFALIAijtQAKiTAciQIAYizIgRgDIARABIAJg+ILagGQA9AAAhgEQA1gFAngPQguA3g6A+QgVAWgNAKQgTAQgTAJQgSAHggAEQgVA6goAxQgUAagjAgIg7A2QgXAWhBBEQg2A5gjAfIgKAIIAEglIgIAZIAAAPIgJAHQgnBfhJBFQg2AyhTArIgFADIgUAgQhmCqhdCoQgHAcgOAHIAVgjgAh2AQIgHAEIAAA1QAOgjAMglIgTAPgAgugnIAEgDIgEAwIAAgtgAnJodQAbgFAgAFIACAAg");
	this.shape_1.setTransform(-5.85,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009245").s().p("AgfLDQgTgFADgTQA3kxArk7QhJgUhHgaIg7gSQgmgOgPgRQgNgOABgSQAAgMAJgVQAMgfAVgpIAlhGQBei0AthHQBZiJBjhMQAQgLAKARQAKARgPAMQhTA/hMByQgmA5hRCWQgcAygdA4IgZAyIgUAnQgKAXAQANQARAPAnAMIA9ASQA0ARBJATQAGACAFAGQAFAGgBAGQgrFDg6FCQgDAPgMAAIgIgBg");
	this.shape_2.setTransform(-65.401,-2.9913);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009245").s().p("AAxDbIAYisQh8gfh7g1QgSgGgEgJQgHgMAMgYQBbjABmioQAxhQAngyQA1hDA4gpIiWOJQgiDogqDsg");
	this.shape_3.setTransform(-65.4324,-2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009245").s().p("AiDLwQjZgJmngwQgTgCAAgUQAAgUATACQDcAZB3ALQC7ASCYAEQFHALEHgvIAagEQASgCAGgEQAJgGAJgTQAHgQADgNQACgNgBgVIgBgjIgBkyIgCg4QAAgiAHgVQAHgTASgOQAJgGAbgOIA3gcIAbgLQASgHAFgHQANgRgOgzIgWhIQgVhGgTg2QhZj/ifjiQgLgQASgKQARgKALAQQC9EPBdE2QAYBTAMA9QAFAWgBAMQgCATgNANQgSARglARQgqASgSAJQgmATgHApQgCAHAABJIABFFIABA5QgCAjgQASQgNAQgdAHIgwAJQjcAokJAAQhLAAhPgDg");
	this.shape_4.setTransform(8.1841,0.0394);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009245").s().p("AhwLdQjfgIm0gyITH2BQBzCjBRC5QBQC5AqDDQAEATgEAJQgEALgVAKIhuA4QgYAMgHAKQgKAOAAAiIABHGQAAAggLANQgLAPggAGQjpAukdAAQhCAAhFgCg");
	this.shape_5.setTransform(8.175,0.0283);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009245").s().p("AAOA2IkpgDQhLgBgigFQg8gJgqgcQgQgJAKgRQAKgSAQALQAtAcBHAGIB7ACID5ADQDAACAtgEQCGgLBagzQARgKAKARQAKASgRAJQhfA2iLANQgnADhtAAIhjAAg");
	this.shape_6.setTransform(3.9929,-69.9417);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009245").s().p("ABlAiImUgEQg+gBgggFQg1gJgigXIPJgZQhLAthuAOQg7AIhoAAIgkAAg");
	this.shape_7.setTransform(3.95,-69.8893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(-87.2,-75.4,174.5,150.9), null);


(lib.eye2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.3).p("AgHAAQAAAIAHAAQAIAAAAgIQAAgHgIAAQgHAAAAAHg");
	this.shape.setTransform(0.571,-0.0036,0.7053,0.7053);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_1.setTransform(0.571,-0.0036,0.7053,0.7053);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2).p("AAfAAQAAAKgIAGQgKAHgNAAQgMAAgKgHQgIgGAAgKQAAgJAIgHQAKgHAMAAQANAAAKAHQAIAHAAAJg");
	this.shape_2.setTransform(0.0068,-0.0036,0.7053,0.7053);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVARQgJgHAAgKQAAgIAJgIQAJgGAMgBQANABAKAGQAIAIABAIQgBAKgIAHQgKAGgNABQgMgBgJgGg");
	this.shape_3.setTransform(0.0068,-0.0036,0.7053,0.7053);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("ABPAAQAAAdgXAVQgXAVghAAQggAAgXgVQgXgVAAgdQAAgcAXgVQAXgVAgAAQAhAAAXAVQAXAVAAAcg");
	this.shape_4.setTransform(0.0068,0.014,0.7053,0.7053);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCEE21").s().p("Ag3AyQgXgVAAgdQAAgcAXgVQAXgVAgAAQAhAAAWAVQAYAVAAAcQAAAdgYAVQgWAVghAAQggAAgXgVg");
	this.shape_5.setTransform(0.0068,0.014,0.7053,0.7053);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye2, new cjs.Rectangle(-10.1,-6,18,12), null);


(lib.eye1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGQgDgCAAgEQAAgDADgDQADgCADgBQAEABACACQAEADAAADQAAAEgEACQgCADgEAAQgDAAgDgDg");
	this.shape.setTransform(0.175,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCEE21").s().p("Ag3AWQgYgSAAgaQAAgEABgDIACADQAFAGAPADQAUAFAQACQgEAFAAAFQAAAJAHAHQAIAGAKAAQALAAAIgGQAIgHAAgJQAAgFgEgEQAYgEARgMQAKgFACgIIAAgCQADAJAAAJQAAAagXASQgYASghAAQggAAgXgSg");
	this.shape_1.setTransform(0.025,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag7AuQgZgSAAgcQAAgaAZgUQAZgTAiAAQAjAAAZATQAZAUAAAaQAAAcgZASQgZAUgjAAQgiAAgZgUgAhPAAQAAAaAYASQAXASAgAAQAhAAAYgSQAXgSAAgaQAAgJgDgJIAAACQgCAIgKAFQgRALgYADQAEAFAAAGQAAAJgIAGQgIAHgLAAQgKAAgIgHQgHgGAAgJQAAgGAEgFQgQgCgUgFQgPgDgFgGIgCgDQgBAEAAAEgAgEAZQgDADAAAEQAAAEADACQADADADAAQADAAADgDQADgCAAgEQAAgEgDgDQgDgDgDAAQgDAAgDADg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye1, new cjs.Rectangle(-8.4,-6.6,16.9,13.3), null);


(lib.bowtie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ACtIRQgvAAgrgsQgug3gbgVQgagVhFgtQg/gqgggbQiAhqAyjGQgQgHgOgOQgbgagBgqQgBgrAdgXQDdixDhiXQAvgfAvAfQArAdAGA1QAGA1ACA/IADALQALAygPBEIAAATQgEBYgNCuQgHCTAFBoIAEA7QgBAigLAYQgOAfgeASQgcARgiAAIgCAAg");
	this.shape.setTransform(15.1452,0.0682,0.2323,0.2323);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhNFxQhigXh4hnQg4gxgUg8QgWhCAchAQATgrArgsIgIgHQgdgYACgrQABgoAagbQBfhiBrgiQBBgVBEAEQBSAFAqApIAAAAQAUAJAPALQAugCAnALQBPAWAXBIQATA8gMBLQgKBAgfBCQgxBrh0BrQhBA9gwAVQgoASgqAAQgaAAgbgGg");
	this.shape_1.setTransform(0.6358,1.5691,0.2323,0.2323);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AjVFOQgngWgMgqQgIgbgBgrIgBhHQgChWAHhQQADgsAJgYQANgjAegSIAXgOQgfgYgKgfQgLglAUgjQATggAogMQAqgNAdAXQArAhBLAOIB/AWQAxANAaARQAlAYAJAoQAHAfgOAqQgIAXgTAuQgIAWgGAqQgGAsgHAVQgVA9g6AnQgaASgqAWIhEAlQgpAZgWAMQgmAWgcAIQgOAEgOAAQgbAAgagPg");
	this.shape_2.setTransform(-14.6337,2.8461,0.2323,0.2323);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AjrHBQgYgJgIgaQhol2AZmLQACgjAfgNIACgLQAGgVARgLQASgLAYAIQCMA1BDAXQBzApBeAcQCEAnAlAxQAYAegTA1QgZBLAAAKQgBAUAQBIQAMA7gMAiQgMAhgzAjQg7AjgWAPQhOA0hqA0QgqAViWBDQgPAGgNAAQgLAAgKgEgAiBj2QAEA+AAB8QAACtgNDAQA+gcAjgSQBtg2BSg4IBJgxIAGgFQgBgSgFgZIgKg0QgIg5AJgnQACgKAOghIAGgPQg1gfgqgNIhCgSQgngMgagJIiPg0IgBgBQAEAUABAYg");
	this.shape_3.setTransform(-15.2089,2.4913,0.2323,0.2323);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Al1HDQgMgugGhDIgJhyQgLh+gDhrQgIjnASjsQABgaAVgSQAWgTAZAKQFnCIFsCjQAXAKAFAVQAEATgLATQgMATgUAIQgWAJgWgKQkxiJlHh+QgUFmAmFfQABAOABAoQACAjAIAPQAEAIAAACIAHgBQALABAlgSQBWggBSgnQCchJCZhmQAVgOAVAHQATAGALATQALAUgDAUQgEAXgVAOQi5B7jFBVQgzAYgfAMQg3AXgnAHQgSADgQAAQhSAAgVhSg");
	this.shape_4.setTransform(-14.5445,1.7706,0.2323,0.2323);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("ADLJKQgVgJg/glQjFh1iuilQgSgSABgWQABgUAQgQQAQgQAVgBQAXgCASARQCMCECcBlQAyAfAgASIAgAUQAZAOAIgEQADgBABglIABgrIAEhjQAIjigCjJQAAhYgChuQABhEAAgkQgBgXgCgUQkgC2kuCYQgWALgWgIQgUgIgLgTQgLgTAEgUQAEgVAXgLQFNinE9jNQARgMAZAGQAZAGAIATQAVAyAGBFQACARACBpQAECWAABsQAAEBgNENQgEA+gNAfQgTAugyAKQgMACgLAAQghAAglgQg");
	this.shape_5.setTransform(15.0674,-0.1602,0.2323,0.2323);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhMGLQgwgPhNgqQg+gigogfQg0gogegvQgkg5gDhIQgChBAZhFQAth5BehPQA2gtA9gXQAJgWAXgJQCBg0CMApQCNApBQByQBNBtgpCNQghB0hlBvQhuB4htAgQgeAJgeAAQgkAAgmgLgAAIklQgDAIgFAHQgOASgZACQhxAHhaBsQhcBtAWBvQAKA0AwArQAhAdA/AjIAxAbQAdAPAXAIQAlANAggGQAegEAkgWQBog9BDhmQAshDAPgyQAVhHgcg5Qgwhmh4gkQgygPgxAAIgaABg");
	this.shape_6.setTransform(1.055,2.0934,0.2323,0.2323);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bowtie, new cjs.Rectangle(-24.2,-14.1,48.5,28.299999999999997), null);


(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("ApJKwQgvgkAdg1IATgiIAFgcIAIg4IAVhyIAGgiIgGgMQgPggAHg1QAEgbANguIABgMIAMhIQACgSAOgNQAFhmAEg2QAKiFAThrQARhXAFgRIAHgSIAAgBIgJABQghgBgSgUQgRgTAAgbQABgcARgUQASgWAggDIATgBQADgVANgQQATgWAgAAIKygGQBQgBAZgCQA6gEAsgQQA0gSAYAxQAYAwggAmIhVBnQg2A6gyAYQgSAJgWAGIgOAaQgqBKhMBFQgZAXhrBsQgqAqgkAgIgBAPQgDAfgWATQgNAKgQAFQhRCCiOBNIgFADIgOAWQhZCVhfCqQgOAogYAVQgXAVgYAAQgWAAgXgRg");
	this.shape.setTransform(-6.0508,-0.7308);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0071BC").s().p("AoMJWQgHAcgNAHIAUgjgAoMJRIA1kcIACgLQgLACgGgFQgIgGACgSQAFg6ARg3IgFALIAijtQAKiTAciQIAYizIgRgDIARABIAIg+ILagGQA/AAAggEQA0gFAogPQgtA3g8A+QgUAWgMAKQgUAQgTAIQgSAIggAEQgVA6goAxQgVAagiAgIg7A2QgXAWhABEQg2A5gkAfIgKAIIAEglIgIAZIAAAPIAEgDIgFAwIABgtIgJAHQgnBfhJBFQg3AyhTArIgEADIgTAgQhnCqhdCoIAAgFgAh3AQIgGAEIAAA1QAOgjAMglIgUAPgAnJodQAagFAhAFIACAAg");
	this.shape_1.setTransform(-5.85,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0071BC").s().p("AgfLDQgTgFADgTQA3kxArk7QhJgUhHgaIg7gSQgmgOgPgRQgNgOABgSQAAgMAJgVQAMgfAVgpIAlhGQBei0AthHQBZiJBjhMQAQgLAKARQAKARgPAMQhTA/hMByQgmA5hRCWQgcAygdA4IgZAyIgUAnQgKAXAQANQARAPAnAMIA9ASQA0ARBJATQAGACAFAGQAFAGgBAGQgrFDg6FCQgDAPgMAAIgIgBg");
	this.shape_2.setTransform(-65.401,-2.9913);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071BC").s().p("AAxDbIAYisQh8gfh7g1QgSgGgEgJQgHgMAMgYQBbjABmioQAxhQAngyQA1hDA4gpIiWOJQgiDogqDsg");
	this.shape_3.setTransform(-65.4324,-2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0071BC").s().p("AiDLwQjZgJmngwQgTgCAAgUQAAgUATACQDcAZB3ALQC7ASCYAEQFHALEHgvIAagEQASgCAGgEQAJgGAJgTQAHgQADgNQACgNgBgVIgBgjIgBkyIgCg4QAAgiAHgVQAHgTASgOQAJgGAbgOIA3gcIAbgLQASgHAFgHQANgRgOgzIgWhIQgVhGgTg2QhZj/ifjiQgLgQASgKQARgKALAQQC9EPBdE2QAYBTAMA9QAFAWgBAMQgCATgNANQgSARglARQgqASgSAJQgmATgHApQgCAHAABJIABFFIABA5QgCAjgQASQgNAQgdAHIgwAJQjcAokJAAQhLAAhPgDg");
	this.shape_4.setTransform(8.1841,0.0394);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0071BC").s().p("AhwLdQjfgIm0gyITH2BQBzCjBRC5QBQC5AqDDQAEATgEAJQgEALgVAKIhuA4QgYAMgHAKQgKAOAAAiIABHGQAAAggLANQgLAPggAGQjpAukdAAQhCAAhFgCg");
	this.shape_5.setTransform(8.175,0.0283);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0071BC").s().p("AAOA2IkpgDQhLgBgigFQg8gJgqgcQgQgJAKgRQAKgSAQALQAtAcBHAGIB7ACID5ADQDAACAtgEQCGgLBagzQARgKAKARQAKASgRAJQhfA2iLANQgnADhtAAIhjAAg");
	this.shape_6.setTransform(3.9929,-69.9417);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0071BC").s().p("ABlAiImUgEQg+gBgggFQg1gJgigXIPJgZQhLAthtAOQg8AIhoAAIgkAAg");
	this.shape_7.setTransform(3.95,-69.8893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.blue, new cjs.Rectangle(-87.2,-75.4,174.5,150.9), null);


(lib.Bat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.purepngcombaseballbatbaseballballgameteamsbaseballsbaseballbat17015280889667isuj();
	this.instance.parent = this;
	this.instance.setTransform(124.6,-21.9,0.2759,0.2759,0,34.9837,-145.0163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bat, new cjs.Rectangle(-124.6,-124.5,249.2,249.1), null);


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
		
		createjs.Touch.enable(stage);
		 
		this.skateboard.addEventListener("touchmove", dragMe.bind(this));
		this.bat.addEventListener("touchmove", dragMe.bind(this));
		this.eye2.addEventListener("touchmove", dragMe.bind(this));
		this.eye1.addEventListener("touchmove", dragMe.bind(this));
		this.hair.addEventListener("touchmove", dragMe.bind(this));
		this.hat.addEventListener("touchmove", dragMe.bind(this));
		this.red.addEventListener("touchmove", dragMe.bind(this));
		this.green.addEventListener("touchmove", dragMe.bind(this));
		this.blue.addEventListener("touchmove", dragMe.bind(this));
		this.orange.addEventListener("touchmove", dragMe.bind(this));
		this.shoes.addEventListener("touchmove", dragMe.bind(this));
		this.bowtie.addEventListener("touchmove", dragMe.bind(this));
		
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
	this.shoes.setTransform(436.65,318.6);

	this.red = new lib.red();
	this.red.name = "red";
	this.red.parent = this;
	this.red.setTransform(646.25,436.75);

	this.blue = new lib.blue();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(630.3,435.25);

	this.green = new lib.green();
	this.green.name = "green";
	this.green.parent = this;
	this.green.setTransform(611.35,435.25);

	this.orange = new lib.orange();
	this.orange.name = "orange";
	this.orange.parent = this;
	this.orange.setTransform(592.45,435.25);

	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.parent = this;
	this.hat.setTransform(382.35,214.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXA4QgIgCgGgDIAGgWQAFADAHACQAHACAHABQAHgBAEgCQADgEAAgEQABgFgEgEQgEgDgIgEQgPgGgHgIQgGgJAAgJQAAgKAFgIQAFgHAJgFQAJgFAMAAQAIAAAHACQAIABAEADIgFAVIgJgEQgGgBgGAAQgHAAgDACQgDADAAAFQAAAFAEADQACADAKAEQAOAGAHAHQAHAIAAAMQgBAQgLAJQgLAKgUAAQgKAAgIgCg");
	this.shape.setTransform(458.425,267.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAzQgMgGgGgNQgHgNAAgRQAAgQAGgNQAGgOAMgIQALgHAPgBQAOAAAKAGQAKAHAFAMQAGAMAAATIAAAFIgBAFIhCAAQABAJAEAHQAEAFAHADQAGADAIAAQAIAAAHgBIAMgEIAEAVQgHACgJACQgJACgLAAQgQAAgMgHgAgJggQgFAEgCAGQgCAGgBAGIAnAAQABgHgCgGQgCgFgEgEQgEgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(448.525,267.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaA0QgLgIgHgMQgHgNAAgSQAAgSAHgNQAHgNAMgHQAMgHAOAAQAQAAALAHQALAIAHANQAGANAAAQQAAAPgFAMQgEALgIAHQgHAHgKADQgJADgJAAQgOAAgMgGgAgMgdQgEAFgDAIQgCAIAAAIQAAAKADAIQACAJAFAEQAFAGAGAAQAHAAAFgGQAFgEACgJQADgIAAgKQAAgIgCgIQgDgJgEgEQgFgGgIAAQgHAAgFAGg");
	this.shape_2.setTransform(437.075,267.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASBRIAAhBQAAgLgEgFQgDgIgKAAQgDAAgEACQgFACgDAEQgDAFAAAIIAABEIgeAAIAAigIAeAAIAAA/IAAAAQAGgJAIgEQAIgDAHgBQAKAAAIAGQAIAEAFALQAFALAAAPIAABDg");
	this.shape_3.setTransform(425.15,265.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXBOIgNgDIgKgFIAGgYQAGADAJACQAJADAJAAQALAAAHgFQAGgFAAgJQAAgIgGgGQgGgFgLgGQgSgIgKgJQgKgLAAgPQAAgNAGgKQAHgKAMgGQALgGAQAAQALAAAIACQAIACAGADIgGAYIgLgEQgHgCgKAAQgHAAgEACQgFADgDAEQgCADAAAEQAAAGACAEQADAEAGADIAOAIQATAJAIAJQAJALAAAPQAAAOgHALQgGAKgNAGQgMAGgRAAIgPgBg");
	this.shape_4.setTransform(413.625,265.6);

	this.eye2 = new lib.eye2();
	this.eye2.name = "eye2";
	this.eye2.parent = this;
	this.eye2.setTransform(493.65,113.1,1.2306,1.2306,0,0,0,-1.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXA4QgIgCgGgEIAGgVQAFADAHACQAHADAHAAQAHAAAEgEQADgCAAgGQABgFgEgDQgEgEgIgDQgPgHgHgHQgGgIAAgKQAAgKAFgIQAFgHAJgFQAJgFAMAAQAIAAAHACQAIACAEADIgFAUIgJgDQgGgCgGAAQgHAAgDADQgDADAAAEQAAAFAEADQACADAKAEQAOAFAHAIQAHAJAAALQgBAQgLAKQgLAJgUAAQgKAAgIgCg");
	this.shape_5.setTransform(646.725,334.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFBDQgGgFgDgGQgDgHgBgGIgBgMIAAgyIgOAAIAAgWIAOAAIAAgVIAdgIIAAAdIAYAAIAAAWIgYAAIAAAvQAAAKADAFQADAEAHAAIAFAAIAEgBIABAXIgIACIgMAAQgMAAgGgEg");
	this.shape_6.setTransform(638.375,333.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdA5IAAhMIAAgTIgBgQIAaAAIABAUIABAAQACgHAEgFQAEgFAGgDQAFgCAFAAIAEAAIADAAIAAAdIgEgBIgEAAQgKAAgHAHQgGAHAAAOIAAA5g");
	this.shape_7.setTransform(631.225,334.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOBPIAAhvIAdAAIAABvgAgKgzQgFgEAAgHQAAgHAFgEQAEgFAGAAQAIAAADAFQAFAEAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_8.setTransform(624.1,332.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASBQIAAhAQAAgKgEgHQgEgHgJAAQgDAAgEACQgFACgDAEQgDAFAAAIIAABDIgeAAIAAigIAeAAIAAA/IABAAQAGgIAHgEQAIgEAHABQAKAAAIAEQAIAGAFAKQAEAKABAQIAABCg");
	this.shape_9.setTransform(615.25,332.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXBOIgNgDIgKgFIAGgZQAGAFAJABQAJADAJAAQALAAAHgFQAGgGAAgIQAAgIgGgGQgGgGgLgFQgSgIgKgKQgKgKAAgQQAAgMAGgKQAHgKAMgGQALgGAQAAQALAAAIACQAIACAGADIgGAYIgLgEQgHgCgKgBQgHABgEACQgFACgDAEQgCAEAAAEQAAAGACAEQADAEAGAEIAOAHQATAIAIAKQAJAMAAAPQAAANgHALQgGAKgNAGQgMAGgRAAIgPgBg");
	this.shape_10.setTransform(603.725,332.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdA5IAAhMIAAgTIgBgQIAaAAIABAUIABAAQACgHAEgFQAEgFAGgDQAFgCAFAAIAEAAIADAAIAAAdIgEgBIgEAAQgKABgHAGQgGAHAAAOIAAA5g");
	this.shape_11.setTransform(396.225,83.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOBPIAAhvIAdAAIAABvgAgKgzQgFgEAAgHQAAgHAFgEQAEgFAGAAQAIAAADAFQAFAEAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_12.setTransform(389.1,80.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdA1QgIgEgEgIQgEgHAAgJQABgPAHgJQAIgIANgFQAOgEARAAQAAgGgCgEQgBgFgEgCQgFgDgHAAQgHAAgIACQgHACgGAEIgFgUQAGgDAJgDQALgDAMAAQAQAAALAHQAJAGAEALQADAKABANIAAAnIAAAPIABAMIgaAAIgCgMIgBAAQgEAHgJADQgGAEgKAAQgKAAgHgFgAAAADQgGACgFAEQgEAFgBAIQAAAHAEAEQAFAEAFAAQADAAAEgCQAEgCADgEQADgEABgHIAAgQIgDAAQgHAAgGABg");
	this.shape_13.setTransform(380.55,83.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAaBNIAAhCIgzAAIAABCIgeAAIAAiZIAeAAIAAA9IAzAAIAAg9IAeAAIAACZg");
	this.shape_14.setTransform(368.275,81.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXA4QgIgCgGgEIAGgVQAFADAHACQAHADAHAAQAHgBAEgDQADgCAAgGQABgFgEgDQgEgDgIgEQgPgGgHgIQgGgIAAgKQAAgKAFgIQAFgIAJgEQAJgFAMAAQAIAAAHACQAIACAEADIgFAUIgJgDQgGgCgGgBQgHABgDADQgDADAAAEQAAAEAEADQACAEAKAEQAOAGAHAHQAHAJAAALQgBAQgLAKQgLAJgUAAQgKAAgIgCg");
	this.shape_15.setTransform(493.975,84.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWAzQgMgHgGgMQgHgNAAgRQAAgPAGgOQAGgNAMgIQALgJAPAAQAOAAAKAHQAKAFAFANQAGANAAARIAAAGIgBAFIhCAAQABAKAEAFQAEAGAHADQAGADAIAAQAIAAAHgCIAMgCIAEATQgHADgJADQgJABgLAAQgQAAgMgHgAgJggQgFAEgCAGQgCAGgBAFIAnAAQABgGgCgFQgCgGgEgEQgEgEgIgBQgGABgEAEg");
	this.shape_16.setTransform(484.075,84.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgrA4IAIgEIAIgFQAFgDADgFIAFgHIABgFIAAgCIgBgDIglhmIAhAAIAQA7IACAKIACAKIAAAAIADgKIACgKIAOg7IAfAAIgZBOIgLAeQgGANgGAJQgFAJgGAGQgIAIgIADQgHAEgFABg");
	this.shape_17.setTransform(473.25,87.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgqBNIAAiZIBSAAIAAAZIg1AAIAAAlIAyAAIAAAXIgyAAIAAArIA4AAIAAAZg");
	this.shape_18.setTransform(462.8,82.5);

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
	this.skateboard.setTransform(582.35,195);

	this.timeline.addTween(cjs.Tween.get(this.skateboard).wait(1));

	// Basball Bat
	this.bat = new lib.Bat();
	this.bat.name = "bat";
	this.bat.parent = this;
	this.bat.setTransform(671.9,191.95);

	this.timeline.addTween(cjs.Tween.get(this.bat).wait(1));

	// Character
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").p("AgTipQAQBFAJBXQAJBKAFBt");
	this.shape_19.setTransform(277.7048,281.2963,0.8679,0.8679);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").p("Ag/pWQBkC/AVFUQAQD+gcGe");
	this.shape_20.setTransform(271.9876,214.4193,0.8679,0.8679);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").p("AAGFZQAwlWhNlb");
	this.shape_21.setTransform(281.5354,326.0181,0.8679,0.8679);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F6F7").s().p("AgzCAQgcgKgKgiQgPgwASg7QARg6AngjQAfgeAgAgQAfAgggAdQgUATgKAhIgCAJIgCAFIANgQIAKgLQALgNAUAAQAUABAMAMQAOAOgBARQgBARgMAPIgCACIgCADIgfAlQgVAXgWAJQgTAIgSAAQgKAAgKgDg");
	this.shape_22.setTransform(427.9493,446.5975,0.8679,0.8679);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F6F7").s().p("AhTB8QgiggAAgyQAAgwAggjQAUgWAcANQAbAMACAdQAAAIgBAIIAJgLQAigvgHgeQgIgqArgMQAsgMAIAqQAPBIgzBJQgaAlgdATQgMAIgUAIIgBAAIgJALQgQAQgRAAQgPAAgQgPg");
	this.shape_23.setTransform(429.9871,445.5281,0.8679,0.8679);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F6F7").s().p("AgtBRQgGgXAGghIACgHIACgUQACgNgEgVQgEgYAAgJQgBgsAtAAQAsABABArQAAAKAEAYQADAVgBANIgFBGQgDAlgmAGIgKACQgdAAgIghg");
	this.shape_24.setTransform(425.736,439.7817,0.8679,0.8679);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F6F7").s().p("AhABzQgggRgJglQgIglARgfIAPgZIALgTIADgJQAKgkAggSQAfgRAkAIQAjAIATAjQATAigKAiQgJAegPAbQgQAZgHANQgRAgglAJQgLADgMAAQgXAAgWgMg");
	this.shape_25.setTransform(430.7014,441.8855,0.8679,0.8679);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2F6F7").s().p("AAIC8QghgQgLgnQgJg8gGgcQgKgvghgZQgggXgJggQgLgjATghQASgeAmgLQAngMAcAVQBKA3AeA5QAOAeAIAuQAKBAAEAPQALAngUAfQgTAcgjAKQgOADgNAAQgUAAgSgIg");
	this.shape_26.setTransform(411.1601,384.9584,0.8679,0.8679);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F6F7").s().p("AghEVQgsgwgQg2QgNgwAEhGQAHhUABgrQABhJgRgzQgOgnAUgeQARgcAjgJQAkgKAeAOQAjAPANAnQASAxADA/QACAsgEBHQgBAYgIA+QgCA1AXAaQAcAegEAmQgDAigaAaQgaAaghACIgEAAQghAAgZgdg");
	this.shape_27.setTransform(417.2621,397.7684,0.8679,0.8679);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F6F7").s().p("AAHEzQglgGgWgiQg7hZgFiTQgDhPASiqQAEgmAXgZQAZgbAmAAQAiAAAdAbQAdAcgDAjQgLBtgBBtQgBA6AGAhQAIAyAXAkQAXAigLAiQgKAfggATQgYAOgZAAIgQgCg");
	this.shape_28.setTransform(417.9651,397.0017,0.8679,0.8679);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F6F7").s().p("AgODkQgigKgUghIgEgHQgIgMgDgPIgFglIgGgPQgHgWgEgTQgIguAEgjQADghANgnQAIgVAUgwQAPgkAbgRQAegUAlAKQAjAKATAhQAVAjgMAhQgRAvgEA+QgDAnADAlIAGARQARAugNAhQgOAkgdASQgUAMgXAAQgLAAgNgDg");
	this.shape_29.setTransform(417.7121,401.0927,0.8679,0.8679);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F6F7").s().p("AgODFQgpgJgNggQgZg5gDhKQgCg3ALhPQAFgnAWgYQAYgbAmAAQAjAAAdAbQAeAcgEAjQgHAzgBAzIgCAlQAAAYAEALQAQAkgHAhQgIAjghATQgUAMgYAAQgLAAgNgDg");
	this.shape_30.setTransform(419.1444,403.3155,0.8679,0.8679);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgCAPQgEgBAAgFIADgTQABgFAEABQAFABgBAFIgDAUQAAADgDAAIgCAAg");
	this.shape_31.setTransform(236.8675,414.5649,0.8679,0.8679);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAAIQgFgBABgFIAAgEQAAgFAEAAQAFAAAAAFIAAAHQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgBAAg");
	this.shape_32.setTransform(236.8388,414.451,0.8679,0.8679);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgBAJQgFgBABgFIACgIQABgFAEACQAFABgBAFIgCAIQgBADgDAAIgBAAg");
	this.shape_33.setTransform(236.7462,414.5227,0.8679,0.8679);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgIABQAAgEAFAAIAGgBQAFgBABAFQABAEgEAAQgFACgEAAQgFAAAAgFg");
	this.shape_34.setTransform(236.5533,434.173,0.8679,0.8679);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAAAFIgDgBQgEgDADgDQACgEADACIACABQAFABgCAEQgBAEgDAAIgCgBg");
	this.shape_35.setTransform(236.5549,434.0941,0.8679,0.8679);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("ABOTXQgmgigXhZIgQhSQgLhQAFhHQADgyAKglQAFgRAPgHQA7gfAhhLQAEgKAYhSIACgFQAUiAh3odQhonbgth3QgDgJABgIQAGhdhPjoIhRjWIAbA2IAJAJQBxCbBND8QAlB9AYBqQCSHEA1IcQATC/ADCfQADCGgJAbIgBAHQgfCjgsBJQgdAxghAEIgGABQgOAAgMgMg");
	this.shape_36.setTransform(282.1923,259.7422,0.8679,0.8679);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").p("Ah4gCQB4ALB5gL");
	this.shape_37.setTransform(250.7278,394.137,0.8679,0.8679);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").p("Ah4gCQB4ALB5gL");
	this.shape_38.setTransform(168.9467,395.6883,0.8679,0.8679);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").p("Ai+PDQCLmVBurEQAzldAViMQAkjuAYhV");
	this.shape_39.setTransform(158.2609,253.8574,0.8679,0.8679);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F15A24").s().p("AAAgbIj4hmQFvAWBiBsQA2A9gkBEQAMguj3hvg");
	this.shape_40.setTransform(304.3262,88.5033,0.8679,0.8679);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F15A24").s().p("AgfBYQgtgPg8gLQh3gWh9AMIAPgkQAXgqAmgdQB5heDfBDQAKAFCXA4QCYA9AcAnQgSAShTAKQgoAEgsAAQhlAAh+gXg");
	this.shape_41.setTransform(290.848,92.2123,0.8679,0.8679);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AxnbeQg/gSgDhVQgCgtABgiIABgPQgHkaBXlPIABgIQBwqRDinKQCAkGCUijQAXgZABgiQAOlhBNkCQAghqA3hvQBNitDOhCQBnggBZABQCuARC1BNQB6AzAsAjIASAJIGJCjQATAHAPAPIAHAHIAdAlQAGgIAFAUQAFAWgEgDQgGgGiJgxImEiMIgPgEQhjgVhXgJQgtgEgfAAQkVgQh2EjQhCCggEDIQAAAOgFAMQgPAtgrAbQghAVgVAAQg/AAhBAgQgpAVgTASQghAWhcCsIhbCuQkUGwh0JjQhAFPgBEJQgBAHACAJQAKA2AmASQAaANAkgGQAIgCARAMQASAMgCAIQgXBngjBRQgWA0giA1QgjA5gvAAQgMAAgNgEg");
	this.shape_42.setTransform(221.1546,213.7288,0.8679,0.8679);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgWgXQgJgKAGgSQAGgVAXANQAMAMAHAbQALAmgMAvQgahHgSgRg");
	this.shape_43.setTransform(184.8379,433.7896,0.8679,0.8679);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYgTQARgbAYgNQAHgDAHACQAHADADAHQAGAPgIAQQgGANgQAFQgRAEgSAcQgUAdgEACQgFgvAXgig");
	this.shape_44.setTransform(233.7498,415.9301,0.8679,0.8679);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAJAhQgJgfgQgKQgOgKgCgOQgDgRALgNQAFgGAHAAQAIgBAEAGQAUATAJAfQALAogSArQgDgDgKgig");
	this.shape_45.setTransform(188.4422,416.082,0.8679,0.8679);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgWghQAIghANAAQAfAAgEAkQAAAGgFAGQgRASgOBDQgXg6ALgqg");
	this.shape_46.setTransform(164.3968,435.9378,0.8679,0.8679);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgQgWQASgfANAAQAOAAADAOQADALgKAHQgUAOgSAfQgKARgFANQgMgpAYgjg");
	this.shape_47.setTransform(146.5643,433.2038,0.8679,0.8679);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgBAYQAEgVgOgLQgKgIgDgLQgEgVASAAQAKAAALANQAOARAAAWQAAANgEAHQgIAOgXALQAGgNADgMg");
	this.shape_48.setTransform(275.0134,433.5944,0.8679,0.8679);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgWgSQACgeAIgIQARgGAKANQAIAJAAALQgSA9gRAbQgMgqACgjg");
	this.shape_49.setTransform(256.5088,435.8556,0.8679,0.8679);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgYgYQAMgaARgJQAZgIAEAUQAEATgLAIIgaAkQgYAjgFALQgOgxASglg");
	this.shape_50.setTransform(236.9748,432.1626,0.8679,0.8679);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").p("EACsAhTQAegEASgJQAIgEAJgJQAEgEAGACQAhAMAcgKQAHgDAEAHQAIAOAGAFQAfAvAqgKQALgDAmgXQACgCAFABQAeAIAVgKQAOgGAJgNQADgFAHABQAKADAMgCQAHgCAJgBQAeAAAHgSQAEgLgEgOIgCgEQgGgQhNhTQhIhOgdgZQgDgCAAgFQAAiWAIgdQABgFAGgBQBkgUA8iUQABgCAIgRQAYgsAWhbQAHgbAVhpQACgHAHAAQAIAAACAHQAiCfA5AAQAtgGAfg4QAQgcAHgbQASgpAPg9QAgh8gMhqQAAg9gOinQgUjkgchKQhaorhIj7QgmiJgoiBQhQj/hChIQgTgSgahCQgohigFhyQAAgyAKgzQAUhmAzgnIByhBQCChEBPgLQABgBCWgLQCcgLArgWQAFgFAHAGQAEAEACAEQANghgLgqQgWhTh8gnQgogLg6gOQh2gbh0gLQhOgkhhgoQjChSh0gWQg4gJhIAHQiNANhrBPQisBfhfHbQgcCPgUCwIgRCPQlnF4jTOwQhpHYgiGNIAABZQAJBcAtARQAiAAAXgTQArgjAjhjIBRihIACBvQAJB7AhA+QAKAUAQA4QATBEAAAjQAAAoAXAyQAiBOBFAMQAJAAALAmQANAqgGAkQAAAFgRAWQgPAbAFAbIgfAjQgyAvhaA+QgaAaAJAcQAKAWANAJQAWAQAjgLIASAAIANAYQAUAXAngMQAJAAAbgbIAAAIQAAAKAFAGQAQAUAzgRQASgJAJgSIAXAEQAdACAcgGQAFAAAoAMQAsAEAcghQAKgKAFgVQAGgbgMgXQgEgUgEgYQgGgvAFgRIAZAHQAWAAgLgiQgLghg2gyIg0grQgEgGgFgOQgJgaAAgiQALgLAfgQQAvgZBSgdQACAAAqALQAzANAuAHQCYAXBTgtQAFgDAPAJQAJAFAYAPQA0AdAvgKIAFADQAGAHAEAMQALApgPBbQgCAHgFACQgNAGgTALQgWANgJAHQgHAGAHAVQAHAXARABIgIAkQgLAogRAXIgRAdQgLAkAcAiIAEAEIAFAAIAMABQAUgDAVgUQAIgDABgUQABgUgSgCQgJAAgRAWQgSAXgBAWQAAADAAAC");
	this.shape_51.setTransform(221.8445,249.2471,0.8679,0.8679);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FBFCFE").s().p("EAFNAhQQgGgFgIgOQgEgHgHADQgcAKghgMQgGgCgEAEQgJAJgIAEQgSAJgeAEIgbgLIAAgFIgFAAIgEgEQgcgiALgkIARgdQARgXALgoIAIgkQgRgBgHgXQgHgVAHgGQAJgHAWgNQATgLANgGQAFgCACgHQAPhbgLgpQgEgMgGgHIgFgDQgvAKg0gdIghgUQgPgJgFADQhTAtiYgXQgugHgzgNIgsgLQhSAdgvAZQgfAQgLALQAAAiAJAaQAFAOAEAGIA0ArQA2AyALAhQALAigWAAIgZgHQgFARAGAvQAEAYAEAUQAMAXgGAbQgFAVgKAKQgcAhgsgEQgogMgFAAQgcAGgdgCIgXgEQgJASgSAJQgzARgQgUQgFgGAAgKIAAgIQgbAbgJAAQgnAMgUgXIgNgYIgSAAQgjALgWgQQgNgJgKgWQgJgcAagaQBag+AygvIAfgjQgFgbAPgbQARgWAAgFQAGgkgNgqQgLgmgJAAQhFgMgihOQgXgyAAgoQAAgjgThEQgQg4gKgUQghg+gJh7IgChvIhRChQgjBjgrAjQgXATgiAAQgtgRgJhcIAAhZQAimNBpnYQDTuwFnl4IARiPQAUiwAciPQBfnbCshfQBrhPCNgNQBIgHA4AJQB0AWDCBSQBhAoBOAkQB0ALB2AbQA6AOAoALQB8AnAWBTQALAqgNAhQgCgEgEgEQgHgGgFAFQgrAWicALQiWALgBABQhPALiCBEIhyBBQgzAngUBmQgKAzAAAyQAFByAoBiQAaBCATASQBCBIBQD/QAoCBAmCJQBID7BaIrQAcBKAUDkQAOCnAAA9QAMBqggB8QgPA9gSApQgHAbgQAcQgfA4gtAGQg5AAgiifQgCgHgIAAQgHAAgCAHIgcCEQgWBbgYAsIgJATQg8CUhkAUQgGABgBAFQgIAdAACWQAAAFADACQAdAZBIBOQBNBTAGAQIACAEQAEAOgEALQgHASgeAAIgQADQgMACgKgDQgHgBgDAFQgJANgOAGQgVAKgegIQgFgBgCACQgmAXgLADQgIACgGAAQghAAgagng");
	this.shape_52.setTransform(221.8445,249.2471,0.8679,0.8679);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2F6F7").s().p("AAEBwIgogXIAAAAQglAIgggRQghgRgIgmQgHghAQgiQAQgkApgOQAlgNAlAKQAIgKAMgHQAggSAkAJQAjAIATAiQAUAigLAiIgFARIgBAFIAAACIAAAEIAAASQACAzgvAaQgYANgWAAQgXAAgVgNg");
	this.shape_53.setTransform(75.5783,484.6657,0.8679,0.8679);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F2F6F7").s().p("AgjHjQg8gqgfhGQgbg9gGhSQgCgdABh3QABgogEgcQgFgjgMgeQgLgbgXggIgog3QgxhEgChGIgEgKQgNgrANgqQANgqAigeQA+g4BpAQQA3AJB0AuQBSAgAvAlQA6AvAcBGQAcBHgDBOQgEBMggBFQgJAVgWAiQgPAfAFAdQAQBUgIBGQgKBPgeA3QgnBGhDAQQgTAFgTAAQgyAAgwgig");
	this.shape_54.setTransform(89.9336,513.3773,0.8679,0.8679);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F2F6F7").s().p("ArPE5Qg4gRgjgpQgmgtAAg4QAAg1Adg2QAZgtAmghQAOgQATgNQAmgaBAgSIBsgcQBzgkBlg2QBDgmAjgRQA7gdAwgJQBggSCHAwIBwAsQBEAbAtAMQAxANBIAQIB6AcQBRATAdAMQA7AXAgAqQAmAwgBA6QgBA+grAqQghAhhCAZQgZAKhWAaQhGAUg2AGQhEAIg6gOQgugLg0gdQgdgRg9gqQg4gogfgMQgygUgwANQhSAWiYA3QgxAShGAcIh2AvQhYAihEAAQgiAAgegIg");
	this.shape_55.setTransform(281.5403,494.6664,0.8679,0.8679);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F2F6F7").s().p("Aj+EMQgUgFgOgMIgJgBQg6gMgRg9QgMguAYg4QATguAmgoQAcgdA1gbQA9gbAcgQQBRgsBdgRQA4gwBAgoQAegSAmAJQANADAKAFQAZgNAhAJQAlALASAfQATAggLAkQgKAhgfAWIg0AmIgJARQgYApgtAZQgcAQg+AWQghAMg3AKQhCAMgXAGIgRAGIgNARIgVAfIgSAWIgKAgQgLAogiAPQgRAJgUAAQgOAAgOgEg");
	this.shape_56.setTransform(109.6864,365.3565,0.8679,0.8679);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2F6F7").s().p("AhRD0QgMgMgGgOIgCgBQgegNgPgbIgDgFQgsgVgEg4QgGhQAchLQAahJA2g/QAbgfAkABQAXABAUAPIAFgGQATgWAegSQAjgVAjAMQAgAKASAgQATAggGAhQgHAlgjAVIgGAEIgEALIgIAPIgLAPQAMADAMAIQAeASALAfQANAjgRAlIgmBSQgMAbgaAKIgFAHQg5BDhEABIgBAAQgkAAgagbg");
	this.shape_57.setTransform(79.0239,379.7147,0.8679,0.8679);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F2F6F7").s().p("AhiESQgigLgbgdQgYgbgOgkQgLgbgEgdQgNgIgMgOQgnguAhgzQAshHAbgiQAtg6AtgdQApgaBEgTQBjgcAQgGQA1gTAqA1QApA1giAuQgfAogRATQgcAfgjgCQgYgBgTgNQgDAIgFAHQgSAdgjAOIgIANIgLAWIgCADIAGACQAKAFAUAEQAWAFAJADQAnAOATAgQAVAhgKAoQgJAfgeAXQgUAQgnASQgqASgcAGQgQADgPAAQgWAAgVgHg");
	this.shape_58.setTransform(70.8216,384.1566,0.8679,0.8679);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F2F6F7").s().p("AntGLQglgPgRgcQgUgfALglQAJgiAhgVQAkgVAgANQAgANAjgHQAYgEAqgTQArgUAPgIQAhgSAVgSQAUgTAMgiIATg7QAbhKAvgtQAzgzBMgYQAVgHA3gJQAxgIAagKQA2gVA0gxQAnglAtg7QAXgfAggJQAjgLAhATQAeASALAmQAMAngVAcQg8BQgyAxQhCBBhHAiQgjARgvALIhVASQglAGgXANQgcAQgQAcQgNAXgQA2QgPAzgQAZQgpA/hRAvQhfA2hGATQgvANgpAAQgvAAgogQg");
	this.shape_59.setTransform(99.2161,377.1768,0.8679,0.8679);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F2F6F7").s().p("AhzCrQg5gDhOgJQiHgQhdhbQgegdADgjQACghAagaQAagaAhgDQAggCAbAVQB8ABBKgJQAhgDAygLIBRgSQArgIA6gCIBmgDIBdgFQAegCAYgFQAggmAyASQAxARARAuQALAegNAhQgMAhgcAPIgNAGQgaAUglARQhhAtgKAGQg3AihFAPQgpAKhcAIQglADgsABIg1gCg");
	this.shape_60.setTransform(257.4413,368.8932,0.8679,0.8679);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2F6F7").s().p("Ak8CmQhPgPg+g0QhDg4gShIQgJgoAVgfQATgcAkgKQAjgJAdAOQAhAQAKAoQALAtA5ASQApAMA5gCQAagBBZgJQBHgIArADIA2AKQAkAGARgGQAOgEAVgRQAZgUAJgEQALgGBagfQA+gVAcggQAbgeAkACQAhACAaAaQAaAZADAiQAEAmgcAfQgoArhTAfQhmAmgfAVQgmAagXALQghAPgkACQgaABgugGQgygHgVAAQgPAAiLAMQgjADgfAAQgyAAgmgIg");
	this.shape_61.setTransform(257.0441,370.4634,0.8679,0.8679);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F2F6F7").s().p("AAsDhQgdgRgPgkQgVg0hChgQhAhcgWg3QgNghAVgjQAVgiAigJQAkgKAfATQAdATAOAjQALAeAfAqIAyBGQAvBGAjBTQAOAhgXAjQgUAigiAJQgMADgMAAQgXAAgUgNg");
	this.shape_62.setTransform(424.9294,425.1971,0.8679,0.8679);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F2F6F7").s().p("AgYCGQgkgIgSgiQgRghAHgjIgCAKIACgOIgBhBQAAglAbgaQAagZAkgCQAkgBAbAcQAbAbAAAkIABA6QAAAigGAYQgIAkgiASQgXALgWAAQgLAAgLgCg");
	this.shape_63.setTransform(43.2684,445.7664,0.8679,0.8679);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F2F6F7").s().p("AggBtQgRgHgMgMQgMgMgHgSQgIgRABgRQAAgOgBgQIABAEIgCgQIABAMQgFgWAGgWIAJgWQAPgdAngMQAPgFATADQATACAPAJQAOAIAMAPQANAQACAPQAHAsAAAeQgBAlgaAaQgZAZgmACIgCAAQgPAAgRgHg");
	this.shape_64.setTransform(42.9117,443.3763,0.8679,0.8679);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F2F6F7").s().p("AgeB8QgSgIgLgMQgWgVgFgnQACAPgCgGIgDgPQgEgSABgTIAIhBQAGgjAlgTQAigRAiAIQAPADAQAMQAOAMAIAOQAKAQABASQABAOgCAWIgCAPIAAgJIgBAMQAEAMACAbQAEAkgeAbQgcAZgkACIgDAAQgOAAgQgHg");
	this.shape_65.setTransform(41.8807,452.312,0.8679,0.8679);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F2F6F7").s().p("Ag9CHQgcgcABgjQAEhNgHhBQgEgkAegbQAcgaAkgBQAkgCAZAcQAXAaAFAmQAHBBgEBNQgCAmgZAZQgZAZgmACIgCAAQghAAgbgbg");
	this.shape_66.setTransform(43.1579,451.1894,0.8679,0.8679);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F2F6F7").s().p("AgWBzQgPgEgPgLQgRgNgGgNIgKgZQgDgKgBgRIgBgPIABgiQACgmAZgZQAZgaAlgBQAigCAdAcQAcAcgBAkIgBAgQADALAAAMIgDAYQgIAggiAWQgOAJgUACIgNABQgLAAgLgDg");
	this.shape_67.setTransform(38.7563,446.4729,0.8679,0.8679);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F2F6F7").s().p("AATCeQgkgBgbgZQgegbgVhIQgQg3AFgtQADgmAYgZQAYgZAngCQAhgBAdAcQAeAdgDAiIgCAUIAAAJIgCgMQgBADADALIAEANQADANAHAPIACAEIgFgEQAFAFADAFIgDgGQAWAYgBAjQgBAlgZAbQgXAagkAAIgEAAg");
	this.shape_68.setTransform(38.0846,447.655,0.8679,0.8679);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F2F6F7").s().p("AglCJQgPgDgPgMQgPgMgIgOQgKgQgBgSQgCgOAEgWQAHgyASgxQANgkAegSQAegSAlAJQAiAHAUAjQAVAkgMAgQgSAxgIAzQgFAkglASQgXAMgXAAQgLAAgLgDg");
	this.shape_69.setTransform(41.0988,448.2025,0.8679,0.8679);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F2F6F7").s().p("Aw8J9QgfgSgMggQgMgjAUgkIBZieQA1heAjhCQARgfAEgaQADgagIgjIgUhLQgLgrAAgiQgEiPB/hgQBZhFCmgzQBDgUDRhYQCqhIBwgUQCVgaCUAIQCYAJCOAsQAaAJBtAqQBSAhA3AKICAAZQBHATAvAiQAfAXAKAgQAKAjgTAhQgSAfglALQgoALgcgVQgrgfhNgPQhXgMgqgLQgvgNhkgoQheglg1gNQh/gfiDAAQiDABh8AhQg8APhGAdQgsARhSAlQhlAuinA1QhDAVgkAUQg3AfgXAsQgWAoAQBEIAdBuQAIA/gZBFQgPAogtBRIiSEFQgUAkgkAHIgQABQgYAAgYgOg");
	this.shape_70.setTransform(130.0383,393.4778,0.8679,0.8679);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F2F6F7").s().p("AR4GJQgkAAgagWQgcgYgBgpIgDlPQgOgEgTgCQgygFgSgDIiIgXQidgYiEgIQhggEgvgDQhSgGg8gNQiGgdiFgLQg9gFhNgNIiKgYQg8gLhIAGQgsADhXAPQknAwkcgBQgpAAgYgcQgWgaAAgkQAAglAWgZQAYgcApAAQCQAACpgQQB5gMC9gcQCRgWCMAcQCDAZB8ALQB8AKCSAgQA1AMBPAEICGAGQB5AICnAaICQAUQBUANA5AQQBFAUAWBCQANAmABBcIACEbQABApgcAYQgYAWgkAAIgCAAgAQZg6IgBAJIACACIAAgEIAAgHIgBAAg");
	this.shape_71.setTransform(320.3582,385.0801,0.8679,0.8679);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#66CCFF").s().p("AyfP6QgOgCgKgIIm1lXQgLgJgLAAInMg4QgNgCgJgIQgKgIgEgNIh9mRQgHgVANgSIDDkCIBAh/QAIgPgGgTIg7ixQgFgQAHgPIBVjDQAJgUATgFIPlknQAggJAiAKILZDjQAHADAKgBILyhFQAHgBAFACIKiB3IMgB7QARADAKANQALAOgBARIgaE5QgBARAKANICxDuQANASgGAUIhpFmQgEAOgLAJQgMAJgPAAIpaAAQgPAAgMAJQgMAKgEAPIhdGgQgEARgOAKQgOAKgRgDIqWhZQgQgCgLgMQgLgNAAgRIAAhRQAAgXgSgNQgSgNgVAHItVEQQgNAEgNgDQgOgEgIgLIjGj3QgKgNgQgDQgPgDgPAIIpZFRQgKAGgMAAIgDAAg");
	this.shape_72.setTransform(228.2144,431.3162,0.8679,0.8679);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F2F6F7").s().p("AgNBpQgTgIgLgMIgdgdQgSgTgIgOQgRgfAIglQAHggAigWQAPgJATgCQATgDAQAFQAQAEAPALQANAKAHALIAKAKIAUAVQAYAcACAjQACAhgcAeQgMAMgSAIQgRAHgRAAQgRAAgQgHg");
	this.shape_73.setTransform(41.5032,455.4927,0.8679,0.8679);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0099CC").s().p("A0jJWIgEgDImOmOQgTgUgVAAIlYgeQgUAAgRgMQgRgNgGgUIg6i2QgMgoAYgiQAXgiAqgCIAMgBIh5AHMBFRgFmQAGAGACgXIAFgtQAJg2AwBgIAAAeIglGYIgEAmQgEAZgMAHQgCACgfAFQggAGgPABIndAqQgZACgSARQgSARgEAYIgpD1QgDAQghA5QgnBDgcASIgYAQQgdAQgaAAQgMAAkUghQkxgkiRgKQgagCgYgVQgYgUgGgaQgNg9g1gPQgqgNgpARQpiDwgUABQgXAHgbAGQg3ANgZgHQgcgHgdgMQg9gWgLgTIhqh4QgPgSgXgDQgXgEgTAMQmLDpgoAUQgYAPgkAIQgVAEgUAAQgvAAgogag");
	this.shape_74.setTransform(231.0907,485.0943,0.8679,0.8679);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E4B436").s().p("AgFA6QgHgBgFgEIgBgBIgBAAIgNgIIgBgCQgJgJgEgMQgCgJADgKIgCgGQgIgZARgRQATgSAWAGQALADAJAHQAEAEAFAHIABACQANAKADARQACAHgBAGIABAKQAAAKgDAHQgHAVgWAGIgLACQgHAAgGgDg");
	this.shape_75.setTransform(228.5852,99.3858);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Background
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(693,520,0.0613,0.0613);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhRCSIAAkjICdAAIAAAvIhkAAIAABGIBeAAIAAAtIheAAIAABSIBqAAIAAAvg");
	this.shape_76.setTransform(725.975,39.95);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("ABcCSIgGhxIgBgoIgBgpIgBgiIgBAAQgGAbgIAbIgPAzIgjB2IgqAAIggh0IgOg0IgMg3IgBAAIgCA7IgCA4IgGBxIgzAAIAUkjIBFAAIAfBtIAOAzIAKA0IABAAIAMgzIANg0IAihtIBFAAIAQEjg");
	this.shape_77.setTransform(698.325,39.95);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AA7CSIgVhNIhNAAIgVBNIg5AAIBTkjIBGAAIBSEjgAAeAaIgRhBIgHgeIgGgeIgBAAIgGAeIgHAeIgRBBIA9AAg");
	this.shape_78.setTransform(669.025,39.95);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgcCNQgagJgSgSQgTgTgKgdQgKgcgBgjQABgxAUgiQATghAigSQAigRApAAQAWAAASADQASAEAKAFIgMAuQgJgEgOgDQgNgDgTAAQgbAAgTALQgVALgMAWQgMAXAAAiQAAAiALAXQALAXATALQASALAZAAIARgBIALgDIAAhHIgqAAIAAgsIBgAAIAACXIgWAHIgdAFQgQACgQAAQghAAgZgIg");
	this.shape_79.setTransform(643.075,39.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAyCSIg9h5IgYgvIgVgyIgCAAIADA7IABBGIAABZIgzAAIAAkjIA8AAIA9B2IAXAvQAMAYAJAYIABAAIgEg8IgBhBIAAhYIAyAAIAAEjg");
	this.shape_80.setTransform(608.675,39.95);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgbCSIAAkjIA3AAIAAEjg");
	this.shape_81.setTransform(589.625,39.95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AhNB2QgbgfAAhAIAAiqIA4AAIAACvQABAmANASQANASAVAAQAXAAAMgSQANgRABgnIAAivIA4AAIAACqQAAAqgNAcQgNAcgYANQgYAOggAAQgxAAgbgeg");
	this.shape_82.setTransform(570.725,40.175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgcCNQgagJgSgSQgTgTgKgdQgKgcgBgjQABgxAUgiQATghAigSQAigRApAAQAWAAASADQASAEAKAFIgMAuQgJgEgOgDQgNgDgTAAQgbAAgTALQgVALgMAWQgMAXAAAiQAAAiALAXQALAXATALQASALAZAAIARgBIALgDIAAhHIgqAAIAAgsIBgAAIAACXIgWAHIgdAFQgQACgQAAQghAAgZgIg");
	this.shape_83.setTransform(543.975,39.925);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAyCSIg9h5IgYgvIgVgyIgCAAIADA7IABBGIAABZIgzAAIAAkjIA8AAIA9B2IAXAvQAMAYAJAYIABAAIgEg8IgBhBIAAhYIAyAAIAAEjg");
	this.shape_84.setTransform(517.775,39.95);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AhRCSIAAkjICdAAIAAAvIhkAAIAABGIBeAAIAAAtIheAAIAABSIBqAAIAAAvg");
	this.shape_85.setTransform(494.725,39.95);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AhcCTIAAkfQAOgDASgBQATgCAYAAQAbAAAVAFQAUAGAOAMQAOALAHARQAHARABAUQgBAegLATQgKATgSALQgQAKgUAEQgSAFgQgBIgLAAIgJgBIAABtgAgbhmIgJACIAABfIAIABIALAAQAaAAAOgNQAOgOAAgYQAAgXgNgMQgOgMgWAAIgPAAg");
	this.shape_86.setTransform(473.1,39.825);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#71B8E0").s().p("Eg53Ar8MAAAhX3MBzvAAAMAAABX3g");
	this.shape_87.setTransform(379.025,289.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.instance}]}).wait(1));

	// Frame
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(2,1,1).p("Eg53gr7MBzvAAAMAAABX3MhzvAAAg");
	this.shape_88.setTransform(379.025,289.025);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Eg53Ar8MAAAhX3MBzvAAAMAAABX3g");
	this.shape_89.setTransform(379.025,289.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(385.6,294.3,410.9,280.90000000000003);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 756,
	height: 575,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/MPHFinal_JVolteada_atlas_.png?1559775425363", id:"MPHFinal_JVolteada_atlas_"}
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;