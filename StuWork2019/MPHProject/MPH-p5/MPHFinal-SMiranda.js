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


(lib.lips2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF99FF").s().p("AAMDNIhhgCQhAgCgggPQgigPgdgkIgMgPQgIgEgKgIIgtgmIAAg3IABgBIAQgIIABAAIAGgQQAHgPAKgfQALghABgRIgBgFIABgGIgBgJQABgJADgHQAGgKAVgIQAigOAUgFQAfgHAZADQAnAGArAkQAKAIAGAHIALgOIAOgYQAHgPAHgHQAOgOAZgDQAOgCAeACQAmACALADQAgAJApApQAVAVAEASQACAIgBARQgBARADAJIAHAPIAHAOIABAEQALAPARAEIAVAGQALAEABAIQABAIgKAKQgjAqgpAnQgaAagSAMQgTAMglARQgoATgZAFQgRADgbAAIgOAAgAiniIIgnAKQgMADgEAFQgEAFgBAKIgBASQgEArgGAWQgJAegRAUQACAGAGAHIAuBDQAOAUALAIQAKAHAWAGQAbAIAOACQAJABAcAAIBrgCQAUAAAOgCQASgDAhgPQAvgVAWgQQATgPASgWQALgPATgcQgYgMgIgKQgOgOADgPIgGgQQgCgHAAgPQAAgQgCgHQgFgagggZQgQgNgMgEQgJgDgTgBQgagCgRADQgXAEgNAOQgFAGgHAOQgIAPgFAGQgHAKgNACIgDAAIgBABQgEAHgHADQgJADgGgEQgFgCgDgGIgGgLQgIgLgVgOQgYgQgRgCIgEAAQgMAAgUAFgAhBBxQgTAAgOgDIgfgKIgdgHQgRgFgLgEQgOgHgJgMQgKgNACgOQABgKAIgGQAIgHAJAEIAEACIABgHQAEgNATgKQAZgMAkgCIBBAAQArABAMADIAeAJQASAFAMABIAZACQAQAEABAMIAAAFQAKgGAIgDQAKgDAJADQALACACAJQADAMgTANIg/AsQgXAQgNAEQgKADgaAAgAhhAVQggADgXALQgMAGgGAAQAKAIAVAGQAzAOAWACQAPACAeAAQAbAAAOgCQAYgCAQgIQALgGAagUIgMAAQgTgBgRgEQgbgHgOgCQgPgDghAAQgmAAgTADg");
	this.shape.setTransform(32,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lips2, new cjs.Rectangle(0,0,64,41), null);


(lib.lips1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAUhJQAQggAZgWQAEAEAGgBQAGAAAGgDQADgBAHgGQAGgEAEgBQAUgKAbANQAoARApAkQAYAUAuAxAAIhJQgJghgLgTQgPgagXgIQgPgGgVABQgZACgMAAQgSgBgGAAQgNAAgJAEQgMAFgKAMQg8A5hCAiQAYAjBQAFIDZASQBjAIAsABQBQACA/gLAlAghQAAAsAHAdQAJAnAYAXQAYAWAuANQB7AnCCgPQCEgOBvhAQATgmAQgm");
	this.shape.setTransform(32.1,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lips1, new cjs.Rectangle(-1.5,-1.5,67.3,36), null);


(lib.glasses2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AiGAAIENAA");
	this.shape.setTransform(56.1,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AFFjzIACgCIDtB4IgpEGIkHAqIgBgBIh9joIABgGIADgXAi0DNIkHApIh4jtIC8i7IDtB5g");
	this.shape_1.setTransform(56.4,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF66CC").s().p("AowAJIC9i7IDsB5IgpEGIkHApgACKg2IgDgDIAEgDIgBAGIB9DoIh9joIABgGIC4i5IAGACIDoB2IgqEGIkAApIgHABgACLg8g");
	this.shape_2.setTransform(56.1,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glasses2, new cjs.Rectangle(-1,-1,114.9,51.3), null);


(lib.glasses1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABFBGIAAiLIFeAAIAACLIleAAIiTAAAmihFIFUAAIAACLIlUAA");
	this.shape.setTransform(41.9,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ABFBGIAAiLIFeAAIAACLgAmiBGIAAiLIFUAAIAACLg");
	this.shape_1.setTransform(41.9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glasses1, new cjs.Rectangle(-1,-1,85.8,16), null);


(lib.eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHVgTQAAAfgbAWQgcAXgmAAQgnAAgbgXQgcgWAAgfQAAgfAcgXQAbgWAnAAQAmAAAcAWQAbAXAAAfgAJSACQAAArhGAeQhGAdhkAAQhjAAhHgdQhGgeAAgrQAAgpBGgeQBHgeBjAAQBkAABGAeQBGAeAAApgAhxgBQAAAqhHAdQg/AbhWADQgKAAgKAAQgyAAgqgHQgrgIgjgPQhGgdAAgqQAAgrBGgdQBGgeBkAAQBjAABGAeQBHAdAAArgAjugXQAAAfgcAWQgbAXgnAAQgmAAgcgXQgbgWAAgfQAAgfAbgXQAcgWAmAAQAnAAAbAWQAcAXAAAfg");
	this.shape.setTransform(59.4,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C8AB6").s().p("AC4BLQhGgeAAgrQAAgpBGgeQBHgeBjAAQBkAABGAeQBGAeAAApQAAArhGAeQhGAdhkAAQhjAAhHgdgAEagTQAAAfAcAWQAbAXAnAAQAmAAAcgXQAbgWAAgfQAAgfgbgXQgcgWgmAAQgnAAgbAWQgcAXAAAfIAAAAgAlhBkQgyAAgqgHQgrgIgjgPQhGgdAAgqQAAgrBGgdQBGgeBkAAQBjAABGAeQBHAdAAArQAAAqhHAdQg/AbhWADIgUAAgAmpgXQAAAfAbAWQAcAXAmAAQAnAAAbgXQAcgWAAgfQAAgfgcgXQgbgWgnAAQgmAAgcAWQgbAXAAAfIAAAAgAE2AiQgcgWAAgfQAAgfAcgXQAbgWAnAAQAmAAAcAWQAbAXAAAfQAAAfgbAWQgcAXgmAAQgnAAgbgXgAmOAeQgbgWAAgfQAAgfAbgXQAcgWAmAAQAnAAAbAWQAcAXAAAfQAAAfgcAWQgbAXgnAAQgmAAgcgXgAHVgTIAAAAgAjugXIAAAAg");
	this.shape_1.setTransform(59.4,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes3, new cjs.Rectangle(-1,-1,120.9,22.9), null);


(lib.eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AJFgiQAUgMAogOQAngNAUgOQAGgEAEgFQAagbAAgBQALgJAPgEQAOgEAPAAQgfA2g8BqQgCAFgDAEQgPAcgIAMQgPAWgRAOQglAegrADAH3h3QgFh7AAg+QgKgGgMAIQgLAGgGALIhNCAIgGAJQgBgDgBgDQACgCACgBQABAAABAAQABAAABAAIAAAAQALAFAHAyQAJA3AABNQAABPgJA3QgIA3gMAAQgMAAgJg3QgIg3AAhPQAAhNAIg3QAHgpAIgLQgBgBAAgCQgihTgSgrQgEgLgIgGQgJgIgKAEQAAAwgBBhQgUAGgWgIQgTgHgPgPQgLgKgNgUQgRgWgGgIQgIgJgMgEQgNgEgFAIQAtBJAQBJQguATg1gJQgMgCgLgDQghgKgYgTQgEgDgDgDQADgFAEgEQANgOANABQAWABAGAlQABAKACAJQAGAZANAPQALANAQAIQAPAHAQAAQAQgmAmgfQBEg3BgAAQAFAAAGAAQACAAADAAAH7h0QAKAHAKAHQAJAIAJAJQAVAVANAZQAAACABABQAAABABABQAOAfAAAjQAABPhEA4QgMAJgNAJQAEAaAFANQADAGAFAKQABAHAAAKQgBAGAAAMAH7h0IgEACQAAgCAAgDQACABACACgAI9geIAGgJICCjKIjKB9AI6gbQACgBABgCQADgCAFgCAIbCgQAIABAMACIAAAAQAMACAPACQAKACACABQAFADADAFQAIAGAZAaACQghQACAAADAAACCAlQAAgCAAgDQAAgiAOgfABjA+QgVArgcAnACCAlQgKAFgaAHQgXAHgLAIQgEADgMAMIgVAOQgGAEgHAJQgFAFgFAIACWB4QgeAbgQASQgYAbgLAZAEPDQQgogOghgbQhCg2gChMAEPDQQgNAvABAZAHMDOQgtAQg1AAQgxAAgqgOACzC6QAGABADAGQABADAAAHQACAYgCAXAFJD6QAAAWABAsAGkDiQgCAUACASQAAAJABADIAIALQADAIgDAEAIvCjQABAKgBAdQgBAaAHAOQAEAHAHANQACAEADAUQACAOAHAHAIHDBIAaAvQACACADAKQACADACAFAHMDOQABAIAAAPQABASADAJIAEAMQABAFAAALQgBAKABAFAHLDJQAAACABADAH2C5QgUAMgWAJAF+idQBEAFA1AhAH0CwQABAFABAEAhkAdQARgeADgTQABgLAAgYQgBgdAAgQQAAgTALgFAjbgqQAUgNAogNQAngOAUgOAkph/QgEh7gBg+IgBgBQgHgEgKAEQgCABgDACQgKAGgGALIhNCAIAAAAQALAFAHAyQAJA3AABNQAABOgJA4QgIA3gMAAQgMAAgJg3QgJg4AAhOQAAhNAJg3QAGgqAJgKQABgCADgBQABgBABAAQAAAAACABIgGAJQgBgDgBgDQgBgBAAgCQACAAADAAAkph/QACABACABIgEADQAAgDAAgCgAklh9QAKAHAKAIQAJAIAJAJQAVAVANAZQAAABABACQAAAAABACQAOAfAAAjQAABPhEA3QgMAKgNAIQAEAbAFAMQADAGAFALQABAHAAAKQgBAGAAALAjjgmQADgCAFgCAjmgjQACgCABgBIAGgJIB5i9AksCoQAAAEACAEQgUANgWAIQgtARg1AAQgxAAgqgOQgOAvACAZAkFCYQAIABAMACQABAKgBAdQgBAZAHAPQAEAHAHAMQACAFADAUQACAOAHAHAjxCYQAAABAAACQAMACAPACQAKACACABQAFADADAEQAIAHAZAaAhkALQgCAFgDAEQgPAcgIAMQgPAWgRAOQglAegrADAhkj0IjBB3AmrilQgihUgSgqQgEgLgIgGQgEgEgEgBQgFgBgEABQgCAAAAABQAAAvgBBiQgUAGgWgIQgTgHgQgPQgKgKgNgUQgRgXgGgHQgIgJgMgEQgNgEgGAIQAtBIARBKQguASg1gJQgNgCgKgCQAFAZAOAPQALANAQAIQAPAHAPAAQADAAACgBAqRgpQARgmAlgfQBEg4BhAAQAFAAAGABAsWiaQANgNANABQAWABAFAlQACAKACAJQghgKgYgTAqeAdQAAgCAAgDQAAgiANgfAqeAdQgKAFgbAHQgXAHgKAIQgFADgMAMIgVANQgFAFgHAIAq+A2QgUArgcAnAqKBwQgeAbgRASQgXAbgMAZAoRDIQgpgPghgbQhBg1gChMAnXDyQAAAWABArAptCyQAGABACAGQACADAAAHQACAYgCAXAkZC5IAaAvQACACADAKQACADACAFAlUDFQAAAJABAPQABASADAJIAEAMQABAFAAAKQgBALABAFAlVDBQAAACABACAl8DZQgCAVACASQAAAIABAEIAIALQADAIgDAEAmiilQBEAEA1Ai");
	this.shape.setTransform(79.1,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C8AB6").s().p("AF8CKQgJg3AAhPQAAhNAJg4QAHgoAIgLQAAgBABAAQAAgBABAAQAAAAABgBQAAAAAAAAIADgBIACABIgGAJIgCgGIACAGIAGgJIAAAAQALAFAHAxQAJA4AABNQAABPgJA3QgJA3gLAAQgNAAgIg3gAmkCCQgJg4AAhNQAAhPAJg3QAHgpAIgKIACAFIAGgJIAAABQALAFAHAxQAJA3AABPQAABNgJA4QgJA2gLAAQgNAAgIg2gAmVi8IADgEIADAAIACAAIgGAJIgCgFgAmNjAIAAAAg");
	this.shape_1.setTransform(77,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes2, new cjs.Rectangle(-1,-1,160.2,65.2), null);


(lib.eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D243B4").ss(2,1,1).p("AHVhqQAvAgAVAVQASATAJAOQARAZAGAdQAFAagDAvAF3ACQAAAagWARQgWATgfAAQggAAgWgTQgWgRAAgaQAAgZAWgSQAWgSAgAAQAfAAAWASQAWASAAAZgAB5gQQAAACAFAJQAHAMAOAbAkYgoQAeAOATAcQAHAMALAZQAGAQAJAJQAFAGAFAEAkXAOQAAAXgUAPQgUARgcAAQgcAAgUgRQgTgPAAgXQAAgWATgRQAUgQAcAAQAcAAAUAQQAUARAAAWgAowhqQAGAVgGAdQgEARgLAhIgHAkQgKAtAEAX");
	this.shape.setTransform(92,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D243B4").ss(2,1,1).p("ABnAYQAUgKAfgQQAdgRAmgWQBIgnA1gPQBAgSBKACQBEACBGATQA8APBGAcQApARBSAkABaAYQCoBJDrAMQA7AEBBgBQAjAAAbgDQAjgCAXgHQAdgKArgXIBTgsAt7AYQClBIDmANQA/AEBFgBQAmAAAdgDQAfgCAWgHQAdgJArgYIACgBIBRgrAtuAYQApgUBOgsQBHgnA2gQQBAgRBJACQBEACBGATQA8APBGAcQApAQBSAl");
	this.shape_1.setTransform(89.2,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C8AB6").s().p("Al3AwQgTgQAAgXQAAgVATgRQAUgQAcAAQAcAAAUAQQAUARAAAVQAAAXgUAQQgUAQgcAAQgcAAgUgQgAEKApQgWgSAAgZQAAgaAWgSQAWgRAgAAQAfAAAWARQAWASAAAaQAAAZgWASQgWASgfAAQggAAgWgSg");
	this.shape_2.setTransform(90,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes1, new cjs.Rectangle(-1,-1,180.3,24.4), null);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF99FF").s().p("ArZLaQkukugBmsQABmqEukvQEvkuGqgBQGsABEuEuQEvEvgBGqQABGskvEuQkuEvmsgBQmqABkvkvg");
	this.shape.setTransform(103.3,103.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(0,0,206.5,206.5), null);


(lib.BUTTON1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D243B4").ss(2,1,1).p("AmUiQIMpAAIAAEhIspAAg");
	this.shape.setTransform(40.5,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C8AB6").s().p("AmUCRIAAkhIMpAAIAAEhg");
	this.shape_1.setTransform(40.5,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,83,31);


// stage content:
(lib.MPHFinalSMiranda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.BUTTON1.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eyes2.x = 117;
			this.eyes2.y = 192.40;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.BUTTON1 = new lib.BUTTON1();
	this.BUTTON1.name = "BUTTON1";
	this.BUTTON1.parent = this;
	this.BUTTON1.setTransform(383.5,433.5,1,1,0,0,0,40.5,14.5);
	new cjs.ButtonHelper(this.BUTTON1, 0, 1, 1);

	this.lips2 = new lib.lips2();
	this.lips2.name = "lips2";
	this.lips2.parent = this;
	this.lips2.setTransform(693.9,323.9,1,1,0,0,0,31.9,20.4);

	this.lips1 = new lib.lips1();
	this.lips1.name = "lips1";
	this.lips1.parent = this;
	this.lips1.setTransform(611,328.3,1,1,0,0,0,32.1,16.5);

	this.eyes1 = new lib.eyes1();
	this.eyes1.name = "eyes1";
	this.eyes1.parent = this;
	this.eyes1.setTransform(626.2,100.2,1,1,0,0,0,89.2,11.2);

	this.eyes2 = new lib.eyes2();
	this.eyes2.name = "eyes2";
	this.eyes2.parent = this;
	this.eyes2.setTransform(627.1,151,1,1,0,0,0,79.1,31.6);

	this.eyes3 = new lib.eyes3();
	this.eyes3.name = "eyes3";
	this.eyes3.parent = this;
	this.eyes3.setTransform(612.4,202.8,1,1,0,0,0,59.4,10.4);

	this.glasses2 = new lib.glasses2();
	this.glasses2.name = "glasses2";
	this.glasses2.parent = this;
	this.glasses2.setTransform(609.4,248.5,1,1,0,0,0,56.4,24.6);

	this.glasses1 = new lib.glasses1();
	this.glasses1.name = "glasses1";
	this.glasses1.parent = this;
	this.glasses1.setTransform(612.5,286.7,1,1,0,0,0,41.9,7);

	this.text = new cjs.Text("", "16px 'TimesNewRomanPSMT'", "#3C8AB6");
	this.text.lineHeight = 20;
	this.text.parent = this;
	this.text.setTransform(678,226.3,1,0.819);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AhtmnQAQgIAVgJQAagJAlgLQAcgHAUADQAPAEAQAIQA3AcAWAeQAOAVACAZQADAagMAUQgJAPgbAUQhOAzhfAEQguACgagOQgegPgQghQgPgegCgmQAAgYAFgKQAJgPAZgKQAGgDAKgFQAMgFAOgLgAiHmXQAEgDAFgDQAIgFAJgFAinl0QAMgTAUgQAgIlcIgBABQgDACgEABIAIgEIAIgFQgFABgBABgAAKliQgHAAgDABAhikwIANAAQgPAEgFADQADgEAEgDQAIgHAKgDABPC5QgGgHgLgJQgRgOgCgCQgWgTgCgYQACgQgDgHQgBgGgEgHQgEgJgCgFQgHgPAAgVQgBgMACgaAh2CvQADgJAKgcQAJgXAEgPQACgGACgLQADgRAAgBQAFghACgRQACgagEgXAh1kwIATAAACRGvQAHgXAOgXQAIgQADgJQAGgQgCgbQgEgWgBgKQgHgYgBgBQgHgTgSgMQAgANAJAPQAFAJABANQABAFAAASQgDAcADAcQAAAUgFAJQgDAFgIAGQgLAHgCADQgIAMgFAHQgCACgCACgACNG9QACgHACgHQgIAGgGgDAi8FZQAAgOAAgJQgDgUAEgMQAEgJAKgEQAFgCAMgBQAMgDADgHAi8FZQAPAtAeAmQACAEAFAHQAFAGABAFQgRgCgPgLQgPgMgGgRQgHgQAAgaQABgLABgKgAABHRQAKgGASgOAg8GzQAFAKAJAT");
	this.shape.setTransform(516.9,279.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D243B4").ss(2,1,1).p("ADwh3ILuAAIAADbIruAAgAvdiLIMWAAIAAEXIsWAAg");
	this.shape_1.setTransform(561,435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF99FF").s().p("AAHAZQgQgPAAgLQAAgOATgMIAAA3IgDgDg");
	this.shape_2.setTransform(661,328.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C8AB6").s().p("AvdCMIAAkXIMWAAIAAEXgADwBkIAAjbILuAAIAADbg");
	this.shape_3.setTransform(561,435);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.glasses1},{t:this.glasses2},{t:this.eyes3},{t:this.eyes2},{t:this.eyes1},{t:this.lips1},{t:this.lips2},{t:this.BUTTON1}]}).wait(1));

	// Character
	this.circle = new lib.circle();
	this.circle.name = "circle";
	this.circle.parent = this;
	this.circle.setTransform(194.2,257.2,1,1,0,0,0,103.2,103.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AQJAAQAAGskvEuQkuEvmsAAQmrAAkukvQkvkuAAmsQAAmrEvkuQEukvGrAAQGsAAEuEvQEvEuAAGrg");
	this.shape_4.setTransform(194.3,257.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.circle}]}).wait(1));

	// Frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("Eg53gr7MBzvAAAMAAABX3MhzvAAAg");
	this.shape_5.setTransform(379,289);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0FFFF").s().p("Eg53Ar8MAAAhX3MBzvAAAMAAABX3g");
	this.shape_6.setTransform(379,289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(385.6,294.3,742.9,564.5);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 756,
	height: 575,
	fps: 24,
	color: "#999999",
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