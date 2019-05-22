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


(lib.RightLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgTA6IggmfIi4AQIBIKfQA8AaA8ACQAqABAogLQAOgEAPgFQAPgGAPgHQAegNAXgTQAegYAUghQAYgnAHg0QAFgegBgiQgBgrgfgdIgyCUIAvBPAgVDdIgWCJAgxBzIAcBqIBZB2AgTA6IgeA5IhyDXAAEA6IgEAZIBEBWIA6BJIgcBUABEAKIhAAwIgXAAIATAZIgVCKACaCeIgcBUABEAKIBWCUABEAKIAACfIAACqADMAKIiIAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AgrFmIAWiJIBZB2IgdAJQgmAKglAAIgHAAgAgrFmQg8gCg8gaIByjXIAcBqIgWCJIAAAAgAgVDdIgchqIAeg5IgeA5IhyDXIhIqfIC4gQIAgGfIATAZIgVCKIAViKIAEgZIBAgwICIAAQAfAdABArQABAigFAeQgHA0gYAnIgvhPIAyiUIgyCUIhWiUIBWCUIgcBUIAchUIAvBPQgUAhgeAYQgXATgeANIAchUIgcBUQgPAHgPAGIAAiqIAACqgABECpIA6BJIg6hJIhEhWgABECpIAAifgAgVDdgACaCegAgxBzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RightLeg, new cjs.Rectangle(-24.6,-36.7,49.2,73.6), null);


(lib.RightEye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#000000").ss(1,1,1).de(-5.5,-9,11.1,18.1);
	this.shape.setTransform(-2.7,-0.1,0.64,0.64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AjchGIG/AaIBABMIgzAnInMgaIhGg5g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AjcAtIhGg5IBGg5IG/AZIBABMIgzAmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RightEye, new cjs.Rectangle(-30.1,-8,60.2,16.1), null);


(lib.RightArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AoACKQASgMASgNQATgNARgMQCohygFABQAAAAARgKQATgNAtgaQAlgVA2gfQATgMAXgNQAUgMAWgPQAogZAwghQAQgLAQgLQAXgPAYgRQBJg0BXhBQAEgCAFgDQAJgIALgHQAHgFAHgFQACgBACgCQAEgDAEgEQAngcApgfIAHCRItqIdQAwA3gJA/QgEAsgjAyQgEAIgFAHQgNAPgPARQgUAPgVAMQgDACgEADQghASgdAKIg9iXIAGhgIBEhQQAagSAWgQgALSm3IADgEAp2H6IhCirIBEhTArPG/IgFgLAp2H6QgZgCgVgMQgZgPgSgeAn4HSIgdhSIgphAIALgqIADhqAmzGXIg3hTIgWi6Ao9HzQgEABgDAAQgcAIgWgCAo9HzIg5AHIhZg7");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AnsH7IhCisIBFhSIBDhRIAwghIAkgaIAkgZQCohygEABIAQgKIBAgnIBag0IAqgZIArgaQApgaAwghIAfgVIAwghQBJg0BXhBIAIgFIAUgPIAPgKIADgDIAJgGIBPg8IAHCRItqIeQAwA3gIA/QgFArgjAyIgJAPIg3hTIgWi5IAWC5IA3BTIgbAgQgUAPgVAMIgdhSIgqhAIALgqIADhqIgDBqIgLAqIAqBAIAdBSIgHAFQgiATgdAJIg8iXIAGhfIgGBfIA8CXIg5AIgApEG/IgFgLIAbhlIBCCsgAkpGXg");
	this.shape_1.setTransform(-13.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RightArm, new cjs.Rectangle(-73.4,-51.6,147,103.4), null);


(lib.PNose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADIgJQAAAagUATQgTAUgbAAQgbAAgUgUQgTgTAAgaQAAgcATgTQAUgTAbAAQAbAAATATQAUATAAAcgAFsAAQAAAggPAcQgGAMgKAMQgHAIgIAIQgOAOgTANQgNAJgPAIQhqA8iXAAQhsAAhWgfQghgMgegRQglgVgYgXQgRgSgLgSQgRgeAAgiQAAghARgeQAIgPANgOQAXgZAmgXQADgCAEgCQAdgQAhgMQAAAAABAAQAPgGARgFQBJgUBZAAQBuAABWAfQAgAMAdAQQAEACADACQALAHAKAHQAeAUASAXQAKAMAGAMQAPAcAAAfgAgrAIQAAAcgUAUQgUAUgcAAQgcAAgUgUQgUgUAAgcQAAgbAUgUQAUgUAcAAQAcAAAUAUQAUAUAAAbg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AipA4QgUgUAAgcQAAgbAUgUQAUgUAcAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgcAAgUgUgABNAkQgTgTAAgaQAAgcATgTQATgTAcAAQAbAAATATQAUATAAAcQAAAagUATQgTAUgbAAQgcAAgTgUg");
	this.shape_1.setTransform(1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("AjCCtQghgNgegQQgkgVgZgXQgRgSgLgSQgRgeAAgiQAAghARgeQAJgPAMgOQAYgZAlgWIAHgFQAegQAggMIABAAIAggLQBJgUBZAAQBuAABWAfQAgAMAdAQIAHAFIAVANQAeAUASAXQAJAMAHANQAPAbAAAfQAAAfgPAcQgHANgJAMIgPAQQgOAOgTANIgcARQhqA8iXAAQhsAAhWgfgAifgnQgUAUAAAbQAAAcAUAUQAUAUAcAAQAcAAAUgUQAUgUAAgcQAAgbgUgUQgUgUgcAAQgcAAgUAUgABXg4QgTATAAAcQAAAaATATQATAUAcAAQAbAAATgUQAUgTAAgaQAAgcgUgTQgTgTgbAAQgcAAgTATg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PNose, new cjs.Rectangle(-37.4,-21.4,74.8,42.8), null);


(lib.Lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AszBaQAmgjAqgfQCShsDEg2QBNgVB/gXQCHgZAxgMQAFANAOB1QALBQAiAAQAtAAAbhkQAXhxAKgbIC0AAQAzAZBjAoQBeAmArAXQCSBMBDCJQkMBkkJAiQjQAalrAAQi6AAhugaQhXgUhcgvQgygZgyggQANgFANgHQAWgNgcAPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AowDgQhXgVhcguQgygZgyggQAOgFAMgIQAWgNgcAQQAmgkAqgfQCShrDEg2QBNgVB/gXQCHgZAxgMQAFAOAOB1QALBPAiAAQAsAAAchkQAXhxAKgbIC0AAQAzAZBjAoQBdAnAsAXQCRBLBECJQkNBjkIAiQjQAblrAAQi6AAhugag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Lips, new cjs.Rectangle(-85,-26,170,52), null);


(lib.LeftLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgTA6IggmfIi4AQIBIKfQA8AaA8ACQAkAAAjgIQAUgEAUgHQAPgGAQgHQBEggAig5QAOgXAIgaQAPgvgCg7QgBgrgfgdIiIAAIhAAwIgEAZIBEBVIA7BKIgcBUAgxBzIhyDXAgxBzIAcBpIAAABIgWCJAgTA6IgeA5ABEAKIAACeIAACrABEAKIBXCUIAuBPACbCeIgcBUADMAKIgxCUAAABTIgVCKIBZB2AgTA6IATAZAAEA6IgXAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AgrFmIAWiJIAAgBIgchpIAeg5IgeA5IhyDXIhIqfIC4gQIAgGfIATAZIAEgZIBAgwIAACeIAAieIBXCUIgcBUIg7hKIA7BKIAchUIAuBPIguhPIAxiUIgxCUIhXiUICIAAQAfAdABArQACA7gPAvQgIAagOAXQgiA5hEAgIAchUIgcBUIgfANIAAirIhEhVIgVCKIBZB2QgUAHgUAEQghAIgiAAIgEAAgAijFKIByjXIAcBpIAAABIgWCJQg8gCg8gagABEFTgAgVDdIAViKIBEBVIAACrgABECogACbCegAgxBzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LeftLeg, new cjs.Rectangle(-24.6,-36.7,49.3,73.6), null);


(lib.LeftEye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#000000").ss(1,1,1).de(-5.5,-9,11.1,18.1);
	this.shape.setTransform(-2.7,0,0.64,0.64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AjchGIG/AaIBABMIgzAnInMgaIhGg5g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AjcAtIhGg5IBGg5IG/AZIBABMIgzAmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LeftEye, new cjs.Rectangle(-30.1,-8,60.2,16.1), null);


(lib.Leftear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AC0gbQAAhcgVhEQgCgKgEgJQgIgYgMgVQgKgSgMgOQg0hAhWAAQgqAAgeAJQgBAAgBABQgcAJgQARQgGAGgEAGQgTAcgEBBQgBAQAAATQAAALABALIAAABQACAnANAdQAKAXAWAaQACADACACQANAQAJAMQAJAMAEAHQARAfAAAoQAAA7gYAvQgUAngEAXIAAABQAAAEAAADQAAAQAoAgQAMAKALAHQAFAEAGADQAPAIALAAQANAAANgIIABAAQAggTAlg8QAAgBAAAAQARgcASgkQBIiQAAhPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AgxFUIgLgHIgXgRQgoggAAgQIABgIIAAAAQADgXAUgnQAYgvAAg7QAAgogRgfQgEgHgIgMIgXgbIgEgGQgWgagKgXQgNgdgCgnIAAAAIgBgXIABgiQAEhBATgdIAKgLQAQgSAcgJIACAAQAegKAqAAQBVAAA1BAQALAOAKASQAMAVAJAZIAGASQAVBEAABcQAABPhICQQgSAkgRAcIAAAAQgmA8gfAUIgBAAQgNAIgNAAQgKAAgQgIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Leftear, new cjs.Rectangle(-19,-35.8,38,71.6), null);


(lib.bubble2orangeglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F85DD").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.bubble2blueglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aj6/CQARgRAOgNQBnhdB0AAQBcAABTA5QA4AnA0BAQAMAPAMAQQBEBdA9CKQALAXAKAYQAcBFAcBQQDUJqAANpQAANqjUJqQgIAXgIAXQiGFyipCDQhcBHhmAAQhtAAhihSQg8gzg4hSQgwhGgthdQgyhpguiHQjUpqAAtqQAAj5ARjlQARjhAijNQA0k8BckLQAYhHAghOQA+iWBGhmQAUgfAWgaQAQgUAQgRQACATACASQA2IBAcIQQALDVAHDZQAFCuADCwQADgXARgRQAVgUAdAAQAeAAAUAUQAVAVAAAeQAAAdgVAVQgUAVgeAAQgdAAgVgVQgQgQgEgVQgBgGAAgHQAAgGABgFABG5VQAAAYgRAQQgQARgYAAQgYAAgRgRQgQgQAAgYQAAgYAQgRQARgRAYAAQAYAAAQARQARARAAAYgACQx8QAAAUgOAPQgPAOgUAAQgVAAgOgOQgPgPAAgUQAAgVAPgOQAOgPAVAAQAUAAAPAPQAOAOAAAVgACErMQAAASgNANQgMANgSAAQgSAAgNgNQgNgNAAgSQAAgSANgNQANgMASAAQASAAAMAMQANANAAASgAHSiCQgWAOgbAAQgmAAgbgbQgbgbAAgmQAAgmAbgbQAbgaAmAAQAZAAAVAMQAKAGAIAIQAbAbAAAmQAAAmgbAbQgHAHgIAGIAfaEEACvggEQgBA0gBAzQgKIHgDIKQgCDXAADXQgCTjAmTyAG06XIAbV4AFyC8QAAAUgOAOQgOAOgTAAQgUAAgOgOQgOgOAAgUQAAgTAOgOQAOgOAUAAQATAAAOAOQAOAOAAATgAFtMlQAAAjgZAYQgYAZgjAAQgjAAgZgZQgZgYAAgjQAAgjAZgZQAZgZAjAAQAjAAAYAZQAZAZAAAjgAEnUjQAAASgNANQgNANgSAAQgTAAgNgNQgNgNAAgSQAAgTANgNQANgNATAAQASAAANANQANANAAATgAAUXaQAAALgIAIQgIAIgLAAQgLAAgIgIQgIgIAAgLQAAgMAIgIQAIgIALAAQALAAAIAIQAIAIAAAMgAk1vGQAAAigYAYQgYAYgiAAQgiAAgYgYQgYgYAAgiQAAgiAYgYQAYgYAiAAQAiAAAYAYQAYAYAAAigAkzm6QAAAkgaAZQgZAagkAAQgkAAgZgaQgZgZAAgkQAAgUAHgQQAHgOALgLQAZgZAkAAQAkAAAZAZQAMALAGAOQAIAQAAAUgAnI5oQgOFwgGFsQgEDYAADWQgFQQA7PsQAGgUAPgPQAZgZAkAAQAjAAAZAZQAZAZAAAjQAAAkgZAZQgZAZgjAAQgkAAgZgZQgLgMgGgNQgIgQAAgUQAAgNAEgMAgUHyQAAAYgRARQgRARgYAAQgYAAgRgRQgRgRAAgYQAAgYARgRQARgRAYAAQAYAAARARQARARAAAYgAlYBbQAAAlgTAbQgUAagbAAQgcAAgTgaQgUgbAAglQAAgmAUgaQATgbAcAAQAbAAAUAbQATAaAAAmgAkhIpQAAAJgHAHQgGAGgKAAQgJAAgHgGQgGgHAAgJQAAgKAGgGQAHgHAJAAQAKAAAGAHQAHAGAAAKgAjgP8QAAARgMALQgMAMgQAAQgRAAgMgMQgLgLAAgRQAAgQALgMQAMgMARAAQAQAAAMAMQAMAMAAAQgAmmZbQADA1ADA0AiKhoQAPQMhURI");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(-73.5,-212,147,424), null);


(lib.Beanie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAnjoQAAgBABgBQgCACgCACQgFADgDAEQABAAADAAQADgEAEgFQgCABgBABQgGADgHAEQACAAADAAQgIAHgGAHQACgBACgBQAFgDAJgJQADAAAEAAQABgFAAgFQgBAAAAABgAAqi4QgEgSAAgPQABgDAAgDQAOAAARgBAAUj0QgDADgCAEQgEAEgEAEQgCACgBACQAIABALABQgHADgHAEQgIAFgIAFQADABADACIAKgNAAAjiQACAAACABQgIAJgIAHQACABADACQgJAEgIAFQgBAFAAAFQACABACAAQAFgEAGgDIAJgKQABABACABQACABADABQASAJARAGAAUjqQgHADgGACQgDACgEABQgNAGgJAFIAAAAQAFADAFADQgGAGgGAFQAAABAAAAQgCABgCABQgDACgCACQgBABAAAAQAEACAFABQgBACAAACQAAABAAABQAAACAAACQgBAEAAAFQAAAFgBAGQAGAFAFABQACAAAEgBQAGgBAJgEQAQgHALgCQAGADAGACQACABADACQgBgEgBgEQgCgGgBgFQgBgEAAgDAAOjRQgEAFgDAFQgGAIgDAJQgBABAAACQANAFAQAGQACABADABAACjJQAHgFAFgDAAej0QgIADgHAEQgKAEgJAGQACAAACABQAAAAAAAAAAuimQgCADgBACQgDAFgCAEQgGAUgMASAA0ivQgDAEgDAFAA0ivQgEgBgFgBQgWgDgXgCQgGgBgHAAQAGACAGACQgDAGgCAHQgCAIgBAGQgBADgBADQgDAJgBAGIgCAHAA8h8QgHgSgFgQQAxAVANANABajgQgYAcgOAVABQj+QgOAHgaAOQACgUgCgLAhakFQABAAAAABQAAgBAAAAQAAAAgBAAgAhjkmQAFABAGABQAVAEASACQAHABAGAAQAJABAIAAQgCANgCAMQgBAKgBAJQgCAIgBAIQAAADgBACQABABABAAQACACADABQgBAIgBAJQgCABgCACQgCABgDACQgCABgBABQABAAABAAIAAAAQgBAHgBAFQgBABAAACQAEgDAEgCQgEABgDABQgDABgCABQABABACABIABAAQgBADAAACQAAABABABQAFAGAEAEQAAACAAACQAAAFAAAGQAFAFAGAGQAEADAEAEAg7kIQgRABgNACQABgQAAgPQAAgRgBgPAgJkwIgBAEIAHAMQARAcAGAGAgKksIgJAcQgCAHgCAGQgCAKgCAHQABABABABQADADADACQAHAFAIADQgJAFgJAHAgxkeQACALAEAHQgGANgFANQgBADgBADQgEAIgEAGQgHALgJAJQANACAOAEQABACABADQgEADgEAEQAEABADACQgFACgEADIgBAAIABABQACACACADQADACADADQAFgEAFgEQACgBABAAQAAgBABAAQAAAAAAABQACABADACIAGgGIAGgGIABgBAgkkdQgEAJgDAIQAHAQAJAKQgCAMABAGAgJliQgOAkgNAhAgTk6IAJAOAiBkmQASARAVAQQguAFgQACQgcADgTAHAgejTQAAABAAABQgCAJgBAIQAAABAAAAQgBABAAAAQgDACgCABQgEADgDACQABACACADQAAABABAAQgIADgHADQgDAAgCACQgEgCgDgCQgBAAAAAAQgKgFgDgBQgIgCgLgCQgDgBgEgBAgmjLQgFAEgFAFQAGABAGADQgFADgGADQAAABABABQgCABgBABQABAAABABQACABACABQABAAABABQgBAAAAAAQAAACABABQABACACACQgBADgBADIADgEIAFgEQADABACACQAHADABABAgejRQgEADgEADAgejTQgGAEgCAEAgWjXQgFACgDACAgdjbQAAAEgBAEAgWjXQgEADgEADAgTjrQgCAKgBAKAhFjqQACAGADAGQAFAPAGALQACABADABQgCABgBACQACADACAEQgDABgCACQABAAACABQgHADgFACQgBAAgBAAQgDACgDABQgWANgRAIQAEgRACgOQABgFABgFQACgMACgKQAEAFAFAFQADABAEABAhkjAQAQACAMADQADAEAFAEQgCACgCADQgBABgBABAhXjMQAHAJAIAIQAHABAGACQgDACgCADQABACABABQAAABgBAAQgDABgCAAAhgjWQACgLABgHQACgPACgNQAQAMARAMQANAJAOAIAg1ikQgFgDgEgBQgYAIgWAJIAAAAQgBAAgBABQgSAHgSAIQgCABgBAAQmMCtg2E8ISvgoQgvmjn1hHAg1ikQABgBABAAQABABABACQABAAABABQABABABACIACgCQgDgBgDgBQgCgBgCgBgAgxiaQgCgBgBAAQgDABgEAUAgPi3QgCgBgCAAIAAAAIAAgBQACABACABgAgai1QgCAAgBABQABgCACgBQACgBADgCQABABABAAIAJgIQAHgFAFgDAgxiaIAEgEQABABABABQAIAHAHAHQgBASAAAUAgpifQgBgBgBAAIADgDQgBACAAACQgBABgBACQgBADgBAAQgCgBgCAAAgJiQQgCgBgCgBQgIgEgHgDQgHgDgGgDAgUi3QgDABgDABAhsiXQgBABgBAAAhth8QAggXAYgRAh3jCQAKABAJABAh3heQAGggAFgZAiBj+QARAVAQAT");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AiUjfIACgBIAkgPIACgBIgLA4IALg4IAugSIAKAEIADACIACACIACACIgEAEIgCAAIAAAAIAAAAIAAAAQgEAAgEAUQAEgUAEAAIAAAAIAAAAIAAAAIACAAIAEACIADgEIAOAOIAMALIgDAHIADgHIADgOIACgGQAGgBAJgFQAPgHAMgBIALAFIAGACIgCgIIAGgJQH1BHAvGkIyvAoQA3k7GMiugAgdjCIABgmIgBAmgAAmjxQgHAUgLARQALgRAHgUIAEgJIgEAJgABujWQgNgNgxgVQAFAQAHASQgHgSgFgQQAxAVANANgAgJjWIgHgHIAHAHgAhtjWIA5goIg5AogAgJjqIgEgBIAEABgAAwj4IAAAAg");
	this.shape_1.setTransform(0,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Beanie, new cjs.Rectangle(-61,-36.5,122,73.1), null);


(lib.Rightear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.Ear = new lib.Leftear();
	this.Ear.name = "Ear";
	this.Ear.parent = this;
	this.Ear.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.Ear).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rightear, new cjs.Rectangle(-18.5,-35.3,37,70.6), null);


(lib.bubble2red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape.setTransform(11.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.2,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_2.setTransform(1.3,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAcIAAgeIgBgHIgBgFIgEgEIgGgBQgDAAgEACIgIAGIAAAnIgJAAIAAg2IAJAAIAAAGIAJgFQAEgCAFAAQAJAAAEAGQAFAFAAAJIAAAjg");
	this.shape_3.setTransform(-3.9,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_4.setTransform(-10,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#E74343"],[0,1],-6,-5.7,0,-6,-5.7,21).s().p("AhRDBQglgPgegeQgdgdgQglQgQgoAAgqQAAgqAQgnQAQgmAdgdQAegdAlgQQAngQAqAAQAqAAAoAQQAlAQAeAdQAcAdAQAmQARAnAAAqQAAAqgRAoQgQAlgcAdQgeAeglAPQgoAQgqABQgqAAgngRg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#F5B4B4","#E74343"],[0,1],-6,-5.7,0,-6,-5.7,21).s().p("AhRDBQglgPgegeQgdgdgQglQgQgoAAgqQAAgqAQgnQAQgmAdgdQAegdAlgQQAngQAqAAQAqAAAoAQQAlAQAeAdQAcAdAQAmQARAnAAAqQAAAqgRAoQgQAlgcAdQgeAeglAPQgoAQgqABQgqAAgngRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).to({state:[]},1).wait(1));

	// center border
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC1818").s().p("AhVDLQgngRgfgfQgfgegQgnQgRgqAAgsQAAgsARgpQAQgoAfgeQAfgeAngRQApgRAsAAQAsAAAqARQAnARAeAeQAfAeARAoQARApAAAsQAAAsgRAqQgRAngfAeQgeAfgnARQgqARgsAAQgsAAgpgRg");

	this.instance = new lib.bubble2blueglow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.815,0.815);
	this.instance.shadow = new cjs.Shadow("#FFFF99",0,0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1));

	// gradient circle
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#ED7878","#E74343"],[0,1],15.9,17.7,-17.1,-16.7).s().p("AhdDdQgrgTghghQghgggSgsQgTgsAAgxQAAgwATgtQASgqAhgiQAhghArgSQAtgTAwAAQAwAAAtATQArASAhAhQAiAiASAqQATAtAAAwQAAAxgTAsQgSArgiAhQghAhgrATQgtATgwAAQgwAAgtgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},3).wait(1));

	// outer circle
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E95A5A").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB6969").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},2).to({state:[]},1).wait(1));

	// outer border
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F29D9D").s().p("AhwELQg0gWgogpQgpgngVg0QgXg2AAg7QAAg6AXg2QAVg0ApgoQAogpA0gVQA2gXA6AAQA6AAA3AXQAzAVAoApQApAoAWA0QAXA2AAA6QAAA7gXA2QgWA0gpAnQgoApgzAWQg3AXg6AAIAAAAQg6AAg2gXg");

	this.instance_1 = new lib.bubble2blueglow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-29,58,58);


(lib.bubble2orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape.setTransform(11.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.2,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_2.setTransform(1.3,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAOAcIAAgeIgBgHIgBgFIgEgEIgGgBQgDAAgEACIgIAGIAAAnIgJAAIAAg2IAJAAIAAAGIAJgFQAEgCAFAAQAJAAAEAGQAFAFAAAJIAAAjg");
	this.shape_3.setTransform(-3.9,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_4.setTransform(-10,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#FEBB56"],[0,0.925],-6,-5.7,0,-6,-5.7,21).s().p("AhRDBQglgPgegeQgdgdgQglQgQgoAAgqQAAgqAQgnQAQgmAdgdQAegdAlgQQAngQAqAAQAqAAAoAQQAlAQAeAdQAcAdAQAmQARAnAAAqQAAAqgRAoQgQAlgcAdQgeAeglAPQgoAQgqABQgqAAgngRg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FED69A","#FEB445"],[0,0.925],-6,-5.7,0,-6,-5.7,21).s().p("AhRDBQglgPgegeQgdgdgQglQgQgoAAgqQAAgqAQgnQAQgmAdgdQAegdAlgQQAngQAqAAQAqAAAoAQQAlAQAeAdQAcAdAQAmQARAnAAAqQAAAqgRAoQgQAlgcAdQgeAeglAPQgoAQgqABQgqAAgngRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).to({state:[]},1).wait(1));

	// center border
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FD9802").s().p("AhVDLQgngRgfgfQgfgegQgnQgRgqAAgsQAAgsARgpQAQgoAfgeQAfgeAngRQApgRAsAAQAsAAAqARQAnARAeAeQAfAeARAoQARApAAAsQAAAsgRAqQgRAngfAeQgeAfgnARQgqARgsAAQgsAAgpgRg");

	this.instance = new lib.bubble2orangeglow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.815,0.815);
	this.instance.shadow = new cjs.Shadow("#E3B602",0,0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1));

	// gradient circle
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FECE89","#FDB03E"],[0,1],15.9,17.7,-17.1,-16.7).s().p("AhdDdQgrgTghghQghgggSgsQgTgsAAgxQAAgwATgtQASgqAhgiQAhghArgSQAtgTAwAAQAwAAAtATQArASAhAhQAiAiASAqQATAtAAAwQAAAxgTAsQgSArgiAhQghAhgrATQgtATgwAAQgwAAgtgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},3).wait(1));

	// outer circle
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEBB56").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FD9B0B").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},2).to({state:[]},1).wait(1));

	// outer border
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEDCAB").s().p("AhwELQg0gWgogpQgpgngVg0QgXg2AAg7QAAg6AXg2QAVg0ApgoQAogpA0gVQA2gXA6AAQA6AAA3AXQAzAVAoApQApAoAWA0QAXA2AAA6QAAA7gXA2QgWA0gpAnQgoApgzAWQg3AXg6AAIAAAAQg6AAg2gXg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8497E1").s().p("AhtECQgxgWgngnQgngmgVgyQgWg0AAg5QAAg4AWg1QAVgyAngmQAngnAxgVQA1gWA4AAQA5AAA0AWQAyAVAmAnQAoAmAVAyQAWA1AAA4QAAA5gWA0QgVAygoAmQgmAngyAWQg0AVg5ABQg4AAg1gWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-29,58,58);


(lib.bubble2green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape.setTransform(11.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.2,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_2.setTransform(1.3,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAOAcIAAgeIgBgHIgBgFIgEgEIgGgBQgDAAgEACIgIAGIAAAnIgJAAIAAg2IAJAAIAAAGIAJgFQAEgCAFAAQAJAAAEAGQAFAFAAAJIAAAjg");
	this.shape_3.setTransform(-3.9,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_4.setTransform(-10,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#88DDA9","#7BD9A0"],[0,0.925,1],-6,-5.7,0,-6,-5.7,21).s().p("AhRDBQglgPgegeQgdgdgQglQgQgoAAgqQAAgqAQgnQAQgmAdgdQAegdAlgQQAngQAqAAQAqAAAoAQQAlAQAeAdQAcAdAQAmQARAnAAAqQAAAqgRAoQgQAlgcAdQgeAeglAPQgoAQgqABQgqAAgngRg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#A9E7C1","#61D18D"],[0,1],-6,-5.7,0,-6,-5.7,21).s().p("AhRDBQglgPgegeQgdgdgQglQgQgoAAgqQAAgqAQgnQAQgmAdgdQAegdAlgQQAngQAqAAQAqAAAoAQQAlAQAeAdQAcAdAQAmQARAnAAAqQAAAqgRAoQgQAlgcAdQgeAeglAPQgoAQgqABQgqAAgngRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).to({state:[]},1).wait(1));

	// center border
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#30A55E").s().p("AhVDLQgngRgfgfQgfgegQgnQgRgqAAgsQAAgsARgpQAQgoAfgeQAfgeAngRQApgRAsAAQAsAAAqARQAnARAeAeQAfAeARAoQARApAAAsQAAAsgRAqQgRAngfAeQgeAfgnARQgqARgsAAQgsAAgpgRg");

	this.instance = new lib.bubble2blueglow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.815,0.815);
	this.instance.shadow = new cjs.Shadow("#FFFF99",0,0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1));

	// gradient circle
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A9E7C1","#30A55E"],[0,1],15.9,17.7,-17.1,-16.7).s().p("AhdDdQgrgTghghQghgggSgsQgTgsAAgxQAAgwATgtQASgqAhgiQAhghArgSQAtgTAwAAQAwAAAtATQArASAhAhQAiAiASAqQATAtAAAwQAAAxgTAsQgSArgiAhQghAhgrATQgtATgwAAQgwAAgtgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},3).wait(1));

	// outer circle
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#35B969").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#46CA7A").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},2).to({state:[]},1).wait(1));

	// outer border
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#82DBA5").s().p("AhwELQg0gWgogpQgpgngVg0QgXg2AAg7QAAg6AXg2QAVg0ApgoQAogpA0gVQA2gXA6AAQA6AAA3AXQAzAVAoApQApAoAWA0QAXA2AAA6QAAA7gXA2QgWA0gpAnQgoApgzAWQg3AXg6AAIAAAAQg6AAg2gXg");

	this.instance_1 = new lib.bubble2blueglow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-29,58,58);


(lib.bubble2blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape.setTransform(11.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.2,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_2.setTransform(1.3,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAOAcIAAgeIgBgHIgBgFIgEgEIgGgBQgDAAgEACIgIAGIAAAnIgJAAIAAg2IAJAAIAAAGIAJgFQAEgCAFAAQAJAAAEAGQAFAFAAAJIAAAjg");
	this.shape_3.setTransform(-3.9,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_4.setTransform(-10,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#86C5DF","#7DC0DB"],[0,0.925,1],-6,-5.7,0,-6,-5.7,21).s().p("AhRDBQglgPgegeQgdgdgQglQgQgoAAgqQAAgqAQgnQAQgmAdgdQAegdAlgQQAngQAqAAQAqAAAoAQQAlAQAeAdQAcAdAQAmQARAnAAAqQAAAqgRAoQgQAlgcAdQgeAeglAPQgoAQgqABQgqAAgngRg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#BCDFED","#72BBDA","#67BED3"],[0,0.925,1],-6,-5.7,0,-6,-5.7,21).s().p("AhRDBQglgPgegeQgdgdgQglQgQgoAAgqQAAgqAQgnQAQgmAdgdQAegdAlgQQAngQAqAAQAqAAAoAQQAlAQAeAdQAcAdAQAmQARAnAAAqQAAAqgRAoQgQAlgcAdQgeAeglAPQgoAQgqABQgqAAgngRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).to({state:[]},1).wait(1));

	// center border
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D8BB2").s().p("AhVDLQgngRgfgfQgfgegQgnQgRgqAAgsQAAgsARgpQAQgoAfgeQAfgeAngRQApgRAsAAQAsAAAqARQAnARAeAeQAfAeARAoQARApAAAsQAAAsgRAqQgRAngfAeQgeAfgnARQgqARgsAAQgsAAgpgRg");

	this.instance = new lib.bubble2blueglow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.815,0.815);
	this.instance.shadow = new cjs.Shadow("#FFFF99",0,0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1));

	// gradient circle
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#86C5DF","#308AAF"],[0,1],15.9,17.7,-17.1,-16.7).s().p("AhdDdQgrgTghghQghgggSgsQgTgsAAgxQAAgwATgtQASgqAhgiQAhghArgSQAtgTAwAAQAwAAAtATQArASAhAhQAiAiASAqQATAtAAAwQAAAxgTAsQgSArgiAhQghAhgrATQgtATgwAAQgwAAgtgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},3).wait(1));

	// outer circle
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#47A4CB").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#469AA9").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},2).to({state:[]},1).wait(1));

	// outer border
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A0D1E6").s().p("AhwELQg0gWgogpQgpgngVg0QgXg2AAg7QAAg6AXg2QAVg0ApgoQAogpA0gVQA2gXA6AAQA6AAA3AXQAzAVAoApQApAoAWA0QAXA2AAA6QAAA7gXA2QgWA0gpAnQgoApgzAWQg3AXg6AAIAAAAQg6AAg2gXg");

	this.instance_1 = new lib.bubble2blueglow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-29,58,58);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bubble2orange();
	this.instance.parent = this;
	this.instance.setTransform(29,29);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.bubble2orange(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-19,-19,100,100), null);


(lib.button1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.face1_btn = new lib.Symbol1();
	this.face1_btn.name = "face1_btn";
	this.face1_btn.parent = this;
	this.face1_btn.setTransform(0,0,1,1,0,0,0,29,29);

	this.timeline.addTween(cjs.Tween.get(this.face1_btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.button1, new cjs.Rectangle(-29,-29,58,58), null);


// stage content:
(lib.MPHFinalYAsefa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_name.addEventListener("click", fl_ClickFunctionName.bind(this));
		
		function fl_ClickFunctionName() {
			this.Rightarm.x = 560;
			this.Rightarm.y = 300;
			this.Leftarm.x = 220
			this.Leftarm.y = 477
		}
		
		
		this.btn_reset.addEventListener("click", fl_reset.bind(this));
		
		function fl_reset() {
		
			this.Rightarm.x = 190;
			this.Rightarm.y = 460;
			this.Leftarm.x = 705
			this.Leftarm.y = 267
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.btn_name = new lib.button1();
	this.btn_name.name = "btn_name";
	this.btn_name.parent = this;
	this.btn_name.setTransform(186.4,46);

	this.instance = new lib.bubble2red();
	this.instance.parent = this;
	this.instance.setTransform(395.5,46);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.bubble2red(), 3);

	this.instance_1 = new lib.bubble2blue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(259.9,41.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.bubble2blue(), 3);

	this.btn_reset = new lib.bubble2green();
	this.btn_reset.name = "btn_reset";
	this.btn_reset.parent = this;
	this.btn_reset.setTransform(325.9,46);
	new cjs.ButtonHelper(this.btn_reset, 0, 1, 2, false, new lib.bubble2green(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_reset},{t:this.instance_1},{t:this.instance},{t:this.btn_name}]}).wait(1));

	// Body Parts
	this.instance_2 = new lib.Beanie();
	this.instance_2.parent = this;
	this.instance_2.setTransform(631.5,89.5);

	this.LArm = new lib.RightArm();
	this.LArm.name = "LArm";
	this.LArm.parent = this;
	this.LArm.setTransform(705.8,267.6,1,1,141.8,0,0,0,0.1);

	this.Rightarm = new lib.RightArm();
	this.Rightarm.name = "Rightarm";
	this.Rightarm.parent = this;
	this.Rightarm.setTransform(188.6,459.7,1,1,-38.2,0,0,0,0.1);

	this.instance_3 = new lib.RightLeg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(674.5,514.9);

	this.instance_4 = new lib.LeftLeg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(635,526.7);

	this.instance_5 = new lib.Lips();
	this.instance_5.parent = this;
	this.instance_5.setTransform(630.9,364.8,0.8,0.8);

	this.instance_6 = new lib.RightEye();
	this.instance_6.parent = this;
	this.instance_6.setTransform(636.2,199.8,0.7,0.7,0,0,0,-16.2,11.6);

	this.instance_7 = new lib.LeftEye();
	this.instance_7.parent = this;
	this.instance_7.setTransform(605.1,191.7,0.7,0.7);

	this.instance_8 = new lib.PNose();
	this.instance_8.parent = this;
	this.instance_8.setTransform(631.5,303.5);

	this.instance_9 = new lib.Rightear();
	this.instance_9.parent = this;
	this.instance_9.setTransform(566.8,180.7);

	this.Ear = new lib.Leftear();
	this.Ear.name = "Ear";
	this.Ear.parent = this;
	this.Ear.setTransform(692.9,180.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7A3QgMgLAAgPQAAgOAJgJQAIgIAWgFQAbgFAHgCIARgGQAAgJgEgDQgDgEgJAAQgLAAgGAEQgFADgCAIIgugFQADgMAFgGQAEgHAJgFQAHgEAMgCQALgCANAAQAVAAANACQANADAJAHQAGAGADAJQAEAKAAAJIAAA2IABAOQABAFAEAHIgtAAIgEgHIgBgIQgKAJgJAEQgMAFgQAAQgXAAgLgKgAgBAJQgOAEgEAEQgEAEAAAFQAAAFAEAEQAEAEAIAAQAHAAAGgEQAHgEADgGQADgFAAgJIAAgIIgUAGg");
	this.shape.setTransform(134.4,38.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfBXIAAhYIgRAAIAAgjIARAAIAAgGQAAgHACgKQACgJAEgFQAFgGAIgEQAIgDAPAAQAMAAAYACIgFAdIgOgBQgGAAgDACQgDACgBAFIgBALIAXAAIAAAjIgXAAIAABYg");
	this.shape_1.setTransform(122.4,36.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmA6QgOgHgKgPQgJgPAAgVQAAgcASgSQATgSAhAAQAaAAAPAIQAQAIAIAQQAIAPAAAXIAAAGIhfAAQACALAEAGQAIAIAJAAQAIAAAGgDQAEgDAEgFIAwAEQgLATgPAIQgQAIgcAAQgYAAgOgHgAgRgbQgFAGgBALIAvAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_2.setTransform(109.3,38.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvA3QgOgJgEgSIAvgFQADAJAFADQAGAEAHAAQAKAAAFgEQAEgDAAgFQAAgFgFgDQgEgCgQgDQgYgEgKgEQgKgDgGgIQgHgJAAgLQAAgMAHgJQAHgJANgFQAMgEAVAAQAWAAAKADQALAEAHAHQAHAHAFAMIgtAFQgCgGgEgDQgGgEgHAAQgIAAgEADQgDADAAAEQAAAFAEACQAFACAPACQAYADALAFQAMAEAGAIQAGAJAAALQAAALgGAKQgHAKgOAGQgOAGgYAAQghAAgPgKg");
	this.shape_3.setTransform(93.8,38.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAmBWIgJgdIg7AAIgIAdIg2AAIBAirIA5AAIBACrgAgSAUIAkAAIgSg9g");
	this.shape_4.setTransform(77.4,36.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaBWIAAhIIhChjIA6AAIAiA6IAjg6IA7AAIhDBjIAABIg");
	this.shape_5.setTransform(60.9,36.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYA+IAAgwIAyAAIAAAwgAgYgNIAAgwIAyAAIAAAwg");
	this.shape_6.setTransform(47.6,38.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag+BVIgDgiQAKADAMAAQAJABAFgEQAGgEADgKIg1h7IAzAAIAZBTIAXhTIAvAAIgxCDQgIAXgJAJQgLALgaAAQgKgBgWgCg");
	this.shape_7.setTransform(36.3,41.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhOBWIAAirIBiAAQAZAAANANQAOAMAAASQAAAPgKALQgGAIgNADQATAFAJAKQAJAKgBARQAAANgFALQgHALgKAGQgIAEgNABIgYADgAgZAxIAbAAQANAAAGgEQAFgGABgIQAAgHgGgFQgGgFgOAAIgaAAgAgZgRIAXAAQAMAAAEgFQAGgEAAgIQAAgIgGgEQgEgEgMAAIgXAAg");
	this.shape_8.setTransform(19.9,36.3);

	this.instance_10 = new lib.body();
	this.instance_10.parent = this;
	this.instance_10.setTransform(631.5,303.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("ApGCqQgIgKgIgJQgrgygOg8QgKgqADg3Ih4AgQANBCAKAtQAAABAAAAQABAFAAAWQAAAFgcBJQgcBKAAAoQAAAgAKAUQAFAKAHAGQAEAFAGADIAAAAQABAAAAAAQAOAIAlAAQAAAAABAAQATAAARgIQAJgEAIgHQAHgGAFgHQAPgWgNgiIAAgIQAMAnALAZQAGAOAGAKQAFAKAFAGQABACABABQAQASAhADQAFAAAHAAQAhAAATgRQAKgJAGgOQAEgIACgIQABgEAAgEQACgIgBgIQAAgHgDgKQgJgbghgxQgcgqgfgmgAq7EgQAAAVgPAPQgPAPgVAAQgVAAgPgPQgPgPAAgVQAAgVAPgQQAPgOAVAAQAVAAAPAOQAPAQAAAVgAn9E9QAAAUgNANQgGAGgHADQgJAEgLAAQgKAAgJgEQgHgDgGgGQgOgNAAgUQAAgTAOgNQANgOATAAQAUAAANAOQANANAAATgAJojtQAWDIhKCBQgeA0gmAdQglAbggAAQhAAAg7hnQgSgggTgsQgTgpgBgDAmQgXQBYAzArAIQAVAEB4AAQEmAAEriwQBRgwBGg1IAAAAQB0hXBThj");
	this.shape_9.setTransform(114.3,310);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABRA7QgHgDgHgGQgNgNAAgUQAAgSANgNQAOgOATAAQAUAAAMAOQAOANAAASQAAAUgOANQgGAGgGADQgKAEgKAAQgKAAgJgEgAiDAYQgOgPAAgUQAAgVAOgQQAQgOAVAAQAVAAAPAOQAPAQAAAVQAAAUgPAPQgPAPgVAAQgVAAgQgPg");
	this.shape_10.setTransform(48.7,340);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006600").s().p("AAEV2IAFgOQAPgfAYgVQAdgaArgIIBmgXIgjkeICwgOIAhEWQAIA0gIAtQgKAygfAoQg1BJh2AoIifAUgAoDV2IAFgOQAPgfAYgVQAdgaArgIIBmgXIgjkeICwgOIAhEWQAIA0gIAtQgKAygfAoQg1BJh2AoIifAUgAkUJZQgzgbgqgtQgzg2gahAQgbhEAAhNQAAhiAbhHIAJgVQAVguBXhzIBtAAQAGAKADANQACAJAAAgQAABAgeAoQgVAegtAYQg7AggHAFQgeAXAAAkQAABnAzA7QAmAsBLAbIBxAkQAzAVAAAnQAAATggAVQgkAYgwAAQgnAAgwgZgAEGJeQgGgLgDgNQgCgJAAgfQAAhCAegoQAVgdAtgYQA7ghAHgEQAegYAAgkQAAhmgzg8QgmgrhLgbQgpgOhIgWQgzgVAAgmQAAgTAggVQAkgYAwAAQAnAAAwAZQAzAaAqAtQAzA1AaBAQAbBEAABOQAABhgbBHIgJAVQgVAuhXB1gAihmbQghgDgQgSIgCgCQgFgHgFgKIgMgYQgLgZgMgnIAAAIQANAigPAWQgFAHgHAHQgIAGgJAEQgRAJgTAAIgBAAQglAAgOgJIgBAAIAAAAIgKgIQgHgFgFgLQgKgTAAggQAAgpAchJQAchKAAgFQAAgVgBgGIAAgBIgXhvIB4ghQgDA3AKArQAOA9ArAxIAQATQAfAnAcApQAhAxAJAcQADAJAAAIQAAAIgBAHIgBAIQgCAIgEAIQgGAOgKAJQgTARghAAIgMAAgAi2olQgOANAAAUQAAATAOANQAGAGAHADQAJAFAKAAQALAAAJgFQAHgDAGgGQANgNAAgTQAAgUgNgNQgNgNgUAAQgTAAgNANgAl9pHQgPAQAAAVQAAAVAPAPQAPAPAVAAQAVAAAPgPQAPgPAAgVQAAgVgPgQQgPgOgVAAQgVAAgPAOgAnhzqIAAgXQAOgQAVgJQAQgHANgBIhAAAIAAgQQAIAAASgIIAEgCQAXgKALgLQgXAMgZgHQgbgGgNgYQARABAWgKIAZgPIgIAAQgEAFgMADQgMAFgEADIgHAAIDmhvIABAAICZBtIgZgDIgYgBQg4AAgyAXQgTAIgTALIgcAUIgqAiQgpAigZAMgACL0sIAAgYQAOgPAVgJQAQgHANAAIhAAAIAAgQQAIAAASgJIAEgBQAXgLALgMQgXANgZgHQgbgGgNgXQARgBAWgJIAZgPIgIAAQgEAEgMAEQgMAFgEAEIgHAAIDmhwIABgBICZBuIgZgDIgYgBQg4AAgyAXQgTAHgTANIgcATIgqAjQgpAhgZAMg");
	this.shape_11.setTransform(73.8,393.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.Ear},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.Rightarm},{t:this.LArm},{t:this.instance_2}]}).wait(1));

	// Character
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("Aj5/CQAQgRAOgNQBnhdB0AAQBcAABTA5QCPBjB2EKQAnBXAmBtQDUJqAANpQAANqjUJqQgIAXgJAXQiGFyioCDQhcBHhmAAQhtAAhihSQg8gzg4hSQgwhGgshdQgzhpguiHQjUpqAAtqQAAtpDUpqQAYhHAghOQA+iWBGhmQAkg2AngoQBhOJAOO5ABG5VQAAAYgRAQQgRARgXAAQgXAAgSgRQgQgQAAgYQAAgYAQgRQASgRAXAAQAXAAARARQARARAAAYgACQx8QAAAUgOAPQgPAOgUAAQgVAAgOgOQgPgPAAgUQAAgVAPgOQAOgPAVAAQAUAAAPAPQAOAOAAAVgACErMQAAASgNANQgNANgRAAQgTAAgMgNQgNgNAAgSQAAgRANgOQAMgMATAAQARAAANAMQANAOAAARgAiKhoQgBgGAAgHQAAgFABgGQADgWARgSQAVgUAdAAQAeAAAUAUQAVAVAAAeQAAAdgVAVQgUAVgeAAQgdAAgVgVQgQgQgEgVQAPQMhURIAHRiCQgVAOgcAAQglAAgcgbQgagbAAgmQAAglAagcQAcgaAlAAQAaAAAUAMQAKAGAJAIQAbAcAAAlQAAAmgbAbQgHAIgJAFIAfaEAk1vGQAAAigYAYQgYAYgiAAQgiAAgYgYQgYgYAAgiQAAgiAYgYQAYgYAiAAQAiAAAYAYQAYAYAAAigAkzm6QAAAlgaAZQgZAZgkAAQgjAAgagZQgZgZAAglQAAgjAZgaQAagZAjAAQAkAAAZAZQAaAaAAAjgAlYBbQAAAlgTAaQgUAbgbAAQgcAAgTgbQgUgaAAglQAAgmAUgbQATgaAcAAQAbAAAUAaQATAbAAAmgAkhIpQAAAJgGAHQgHAGgKAAQgJAAgHgGQgGgHAAgJQAAgKAGgHQAHgGAJAAQAKAAAHAGQAGAHAAAKgAFyC8QAAAUgOANQgOAPgTAAQgUAAgOgPQgOgNAAgUQAAgTAOgPQAOgNAUAAQATAAAOANQAOAPAAATgAgUHyQAAAYgRARQgRARgYAAQgYAAgRgRQgRgRAAgYQAAgYARgRQARgRAYAAQAYAAARARQARARAAAYgAFtMkQAAAjgZAZQgZAZgjAAQgjAAgZgZQgYgZAAgjQAAgjAYgZQAZgYAjAAQAjAAAZAYQAZAZAAAjgAG06XIAaV4AEnUjQAAASgNANQgNANgTAAQgSAAgNgNQgNgNAAgSQAAgTANgNQANgNASAAQATAAANANQANANAAATgAjgP8QAAAQgMAMQgMAMgQAAQgQAAgNgMQgLgMAAgQQAAgQALgNQANgLAQAAQAQAAAMALQAMANAAAQgAAUXaQAAALgIAIQgIAIgLAAQgLAAgIgIQgIgIAAgLQAAgMAIgIQAIgIALAAQALAAAIAIQAIAIAAAMgAmqYdQAGgTAQgPQAZgZAjAAQAjAAAZAZQAZAZAAAjQAAAjgZAZQgZAZgjAAQgjAAgZgZQgMgLgGgOQgHgQAAgTQAAgOADgMgAmmZaQADA1AEA1AnI5oQg9ZwBbYVEACvggEUgArAfsAA+AgP");
	this.shape_12.setTransform(592.5,302);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006600").s().p("AjPfsQBIulAAt7QAAibgDiZQAEAVAQAQQAVAVAdAAQAeAAAVgVQATgUAAgeQAAgdgTgWQgVgUgeAAQgdAAgVAUQgRASgDAXIgBAKIABANIgBgNIABgKQADgXARgSQAVgUAdAAQAeAAAVAUQATAWAAAdQAAAegTAUQgVAVgeAAQgdAAgVgVQgQgQgEgVQADCZAACbQAAN7hIOlQg8gzg4hSQgwhGgshdIgHhpQAGANAMAMQAYAYAkAAQAkAAAYgYQAagZgBgkQABgjgagaQgYgZgkAAQgkAAgYAZQgQAQgGATQg3uiAAvDQAAqJAZqXQA+iWBGhmQAkg2AngoQBhOJAOO6QgOu6hhuJQAQgRAOgNQBnhdB0AAQBcAABTA5QgSNAABNGQAASzAkTCQhcBHhmAAQhtAAhihSgAgiXZQAAAMAIAIQAIAIALAAQALAAAIgIQAIgIAAgMQAAgLgIgIQgIgIgLAAQgLAAgIAIQgIAIAAALIAAAAgAkwP8QAAAQALAMQANAMAQAAQAQAAAMgMQAMgMAAgQQAAgQgMgNQgMgLgQAAQgQAAgNALQgLANAAAQIAAAAgAlOIoQAAAKAGAGQAHAHAJAAQAKAAAHgHQAGgGAAgKQAAgJgGgGQgHgHgKAAQgJAAgHAHQgGAGAAAJIAAAAgAiIHyQAAAYARARQARARAYAAQAYAAARgRQARgRAAgYQAAgYgRgRQgRgRgYAAQgYAAgRARQgRARAAAYIAAAAgAncBaQAAAmATAaQAUAbAbAAQAbAAAUgbQATgaABgmQgBglgTgbQgUgagbAAQgbAAgUAaQgTAbAAAlIAAAAgAngm5QAAAkAZAZQAZAZAkAAQAlAAAZgZQAZgZAAgkQAAglgZgZQgZgZglAAQgkAAgZAZQgZAZAAAlIAAAAgAAtrMQAAATAMAMQANANATAAQASAAAMgNQANgMAAgTQAAgRgNgOQgMgMgSAAQgTAAgNAMQgMAOAAARIAAAAgAnZvGQAAAiAYAYQAYAYAiAAQAiAAAYgYQAYgYAAgiQAAgigYgYQgYgYgiAAQgiAAgYAYQgYAYAAAiIAAAAgAAtx8QAAAUAOAPQAPAPAUAAQAVAAAOgPQAPgPAAgUQAAgVgPgOQgOgOgVAAQgUAAgPAOQgOAOAAAVIAAAAgAgs5VQAAAYARAQQAQASAXgBQAZABAQgSQARgQAAgYQAAgYgRgRQgQgQgZgBQgXABgQAQQgRARAAAYIAAAAgADCf3QgkzCAAyzQgBtGAStAQCOBjB3EKQAoBXAlBtQDUJqAANpQAANqjUJqIgRAuIgf6EQAJgFAHgIQAbgaAAgmQAAgmgbgbQgJgJgKgGIga14IAaV4QgUgMgaAAQgmAAgaAbQgbAbAAAmQAAAmAbAaQAaAbAmAAQAcAAAVgOIAfaEQiGFyioCDIAAAAgADOUiQAAATANANQANANATAAQASAAANgNQANgNAAgTQAAgSgNgNQgNgNgSAAQgTAAgNANQgNANAAASIAAAAgADEMkQAAAkAYAYQAZAZAjAAQAkAAAYgZQAZgYAAgkQAAgigZgZQgYgZgkAAQgjAAgZAZQgYAZAAAiIAAAAgAETC8QAAAUAOAOQAOAOAUgBQATABAOgOQAOgOAAgUQAAgUgOgOQgOgNgTAAQgUAAgOANQgOAOAAAUIAAAAgAoAXUQjUpqAAtqQAAtpDUpqQAYhHAghOQgZKXAAKJQAAPDA3OiQgEAMABAOQAAATAHARIAHBpQgzhpguiHgAmUZ0QgMgMgGgNQgHgRAAgTQgBgOAEgMQAGgTAQgQQAYgZAkAAQAkAAAYAZQAaAagBAjQABAkgaAZQgYAYgkAAQgkAAgYgYgAmmZbIAAAAgAmqYdIAAAAgAgaXtQgIgIAAgMQAAgLAIgIQAIgIALAAQALAAAIAIQAIAIAAALQAAAMgIAIQgIAIgLAAQgLAAgIgIgAAUXZIAAAAgADbVCQgNgNAAgTQAAgSANgNQANgNATAAQASAAANANQANANAAASQAAATgNANQgNANgSAAQgTAAgNgNgAEnUiIAAAAgAklQYQgLgMAAgQQAAgQALgNQANgLAQAAQAQAAAMALQAMANAAAQQAAAQgMAMQgMAMgQAAQgQAAgNgMgAjgP8IAAAAgADcNgQgYgYAAgkQAAgiAYgZQAZgZAjAAQAkAAAYAZQAZAZAAAiQAAAkgZAYQgYAZgkAAQgjAAgZgZgAFtMkIAAAAgAlII4QgGgGAAgKQAAgJAGgGQAHgHAJAAQAKAAAHAHQAGAGAAAJQAAAKgGAGQgHAHgKAAQgJAAgHgHgAh3IbQgRgRAAgYQAAgYARgRQARgRAYAAQAYAAARARQARARAAAYQAAAYgRARQgRARgYAAQgYAAgRgRgAkhIoIAAAAgAgUHyIAAAAgAEhDeQgOgOAAgUQAAgUAOgOQAOgNAUAAQATAAAOANQAOAOAAAUQAAAUgOAOQgOAOgTgBQgUABgOgOgAFyC8IAAAAgAnJCaQgTgaAAgmQAAglATgbQAUgaAbAAQAbAAAUAaQATAbABAlQgBAmgTAaQgUAbgbAAQgbAAgUgbgAlXBaIAAAAgAiKhoIAAAAgAFgiPQgbgaAAgmQAAgmAbgbQAagbAmAAQAaAAAUAMQAKAGAJAJQAbAbAAAmQAAAmgbAaQgHAIgJAFQgVAOgcAAQgmAAgagbgAHRiCgAHOkfIAAAAgAnHl8QgZgZAAgkQAAglAZgZQAZgZAkAAQAlAAAZAZQAZAZAAAlQAAAkgZAZQgZAZglAAQgkAAgZgZgAkzm5IAAAAgAA5qtQgMgMAAgTQAAgRAMgOQANgMATAAQASAAAMAMQANAOAAARQAAATgNAMQgMANgSAAQgTAAgNgNgACErMIAAAAgAnBuMQgYgYAAgiQAAgiAYgYQAYgYAiAAQAiAAAYAYQAYAYAAAiQAAAigYAYQgYAYgiAAQgiAAgYgYgAk1vGIAAAAgAA7xZQgOgPAAgUQAAgVAOgOQAPgOAUAAQAVAAAOAOQAPAOAAAVQAAAUgPAPQgOAPgVAAQgUAAgPgPgACQx8IAAAAgAgb4tQgRgQAAgYQAAgYARgRQAQgQAXgBQAZABAQAQQARARAAAYQAAAYgRAQQgQASgZgBQgXABgQgSgABG5VIAAAAg");
	this.shape_13.setTransform(592.5,302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// Frame
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("Eg53gr7MBzvAAAMAAABX3MhzvAAAg");
	this.shape_14.setTransform(379,289);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F0FFFF").s().p("Eg53Ar8MAAAhX3MBzvAAAMAAABX3g");
	this.shape_15.setTransform(379,289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(385.6,281,787.2,577.8);
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