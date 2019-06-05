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


(lib.tux = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ArDsWQBRgLBSAeQhdDsCSCHICcG2ICjHPICCFvQAWgQAVgRQAqghApghQAqghAogjQIIm1FWoQIkHi8IEdhtQi5jDglhvAtks7QgGAIgYARQi+CHAxB8IDCB9IhuCmQEnGtHTIMQAeAiAfAiQAdAhAeAhQAPAQAQARQAIgRAJgQQAFgLAFgKQAKgWAKgXQAPgiAPgiQApheAmhgQBGi2A3i9ADBpkIBlAAABnp+QBVgNB5gEAFrmmQCoiYhcjLQitgGiGA5Qg9AUg2AnQgPgTgvAHQgXgCgPACQgMABgGAEQiyhFkJgcAkSpfIhHAKAjLp0QhNAEhHgnAg6omQhKAdgsAbQg4AhhLAXQhRAZhnANAg6omIAABuQB+Ash2AcIAACqQhcArB2APIAACMQhjAsBjAeIAACTQhtAoBoAdIAACUQhOAqBZARQBggMhrgvAg6m4QhjAiBrAmAASqWQAcAwgcAuQgoAUgkgCQgWgCgVgKQgygsAyhEAjko5QhSATg2AoABtn0QBEAlBRAVQAyANA3AHAg6omQB3AYAwAaIAFPzAgyjGQCIAUhuAmAB9pTQA7AjBdgDAgYH7IAJEzAgYAAQBsAyhsAYAgYDdQCEAsiJAZAiwnuIAEPjAkzm2IgcHcAECm6IgTJGQBOkSAukg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhrFWIgFviIAFPiIiknNIAdndIgdHdIicm4QBogMBRgZQBKgXA4ghQAtgbBJgeIAABvIAAhvQB4AYAwAbIAEPzIgEvzQBDAlBSAUQAyANA3AIQguEghPESIAUpHIgUJHQg2C8hHC3QglBggpBeIgfBEIgVAtIgIkzIAIEzIgKAUIgRAhgAAjEXQhOAqBZASQBggMhrgwIAAiTIAACTgAAjCEQCJgZiFgtQhsAoBoAegAAnA+IAAiRgAAnidQhhAsBhAeQBtgYhtgyIAAiNQBvgmiIgVIAAipQB2gch+gsQhjAhBrAnIAACpQhcAsB1APIAACNgAAwKQgAAOoOIAAAAg");
	this.shape_1.setTransform(-6.4,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Anpi1QEJAcCyBFQAGgEAMgBQAPgCAWACQAwgHAPATQA2gnA9gUQCGg5CtAGQBcDKioCYQg3gHgygNQhRgVhEglQgwgah3gYIAGAAIAAAAIABAAQAeAAAjgQIACgBIACgBQAOgWAAgYQAAgXgOgYQAOAYAAAXQAAAYgOAWIgCABIgCABQgjAQgeAAIgBAAIAAAAIgGAAQgWgCgVgKQgZgWAAgbQAAgcAZgiQgZAiAAAcQAAAbAZAWQAVAKAWACQhKAdgsAbQg4AhhLAXQhRAZhnANQiSiHBdjrgAk1BPQA2goBSgTQhSATg2AogAE9AaIALAAIAEAAIgEAAIgLAAIAAAAIAAAAQhPAAg1gdIgBAAIgDgCIgBAAIABAAIADACIABAAQA1AdBPAAIAAAAIAAAAgAkigHIBHgKgAFdgWIhlAAgAiUgmQhNAEhHgnQBHAnBNgEgACegwQBVgNB5gEQh5AEhVANgAgDAnIAAAAg");
	this.shape_2.setTransform(-5.5,-59);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqNkIARghIAKgVIAUgtIAehEQApheAmhgQBGi2A3i9QBOkSAukgQCoiYhcjLIGFhaQAlBvC5DDIkdBtIEHC8QlWIQoIG1QgoAjgqAhIhTBCIgrAhIAAAAgAhJNDIg7hCIg9hEQnToMknmtIBuimIjCh9Qgxh8C+iHQAYgRAGgIQAlADAlgFQAxgHAmAuQBRgLBSAeQhdDsCSCHICcG2ICjHPICCFvIgfghgAgdG2QBrAvhgAMQhZgRBOgqgAgYDdQCEAsiJAZQhogdBtgogAgYAAQBsAyhsAYQhjgeBjgsgAgyjGQCIAUhuAmQh2gPBcgrgAg6m4QB+Ash2AcQhrgmBjgig");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tux, new cjs.Rectangle(-107,-88.7,214.1,177.6), null);


(lib.thoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AijieIAADsQgCBRBFAAIDGAAQA7gFADhYIAAjgg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhgCfQhFAAAChRIAAjsIFHAAIAADhQgDBXg7AFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thoot, new cjs.Rectangle(-18.4,-17.9,36.8,35.8), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AgCCyQBvgEBxjZQAdg8AchKIotAAQAWBKAXA8QBzDhB0gEgAgCglIAADX");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjpgrQgXg8gWhKIItAAQgcBKgdA8QhxDZhvAEIAAjXIAADXIgEAAQhyAAhxjdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-29.9,-19.8,59.9,39.7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9,1,1).p("Am5ggQGOCEHkiE");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-48.6,-7.8,97.3,15.7), null);


(lib.scarf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(4,1,1).p("AKWh7QFSgUiRjCQBOhGhVhSQAOgaACgYQAEgmhRgkQg1BFjJAXQACACACACALBGjQg9i6AEjCQABhPANhTALBGjQADAJADAKQAzCThtgJQgcgDgSgeQgdAqgcAHQglAJgig6Qg/BUhNhKQhKBzhLhlQiGBoAaigAhMoKQlPgHmwhJQhYCvA3AgQAOArggBXQAuBuFpAYQEtAiEUgFQibEaCLFHQAEACAEACQAiALA4gjAq9k8IAVARArakoIAVATAonlsIgTAOAo+meIgeAeAkLkJIARAYAkkj9IARAeAhUlXIgcAPAhqmHIggAUAECohQAaATAKAcAELllIAVgPAFDi8IgQAXAHxj0IAOAUAECohQCUhTB/BrAD9mRIgVAVAHKjgIAQAUAhMoKQCihrCsBUAG7A4IgCBHAC3gOIAcASAHaEtIANAXAHDE0IAAAPAHVBXIAAAVAEcD4IATgWAE5ERIASgPACWAWIAVATACzHjQA0AmBygmAFjHhQAgAXBPgXQAeAQA2gNQA+gOBdgzAFricIgVAYAhMoKQClCCABEiAIcn+QCPCMgVD3");
	this.shape.setTransform(0,0,1.103,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993333").s().p("AC+I3QiGBoAaigIAAAAQAIACAJAAIAAAAIACAAQAbAAAlgWIABAAIABgBIABgBIABAAIABgBIABgBIABAAIgBAAIgBABIgBABIgBAAIgBABIgBABIgBAAQglAWgbAAIgCAAIAAAAQgJAAgIgCIAAAAIgIgEQiLlHCbkaQgBkiiliCQClCCABEiQkUAFktgiQlpgYguhuQAghXgOgrQg3ggBYivQGwBJFPAHQCihrCsBUQCUhTB/BrQDJgXA1hFQBRAkgEAmQgCAYgOAaQBVBShOBGQCRDClSAUQADggAAgeQAAjLh9h6QB9B6AADLQAAAegDAgQgNBTgBBPQgEDCA9C6QhdAzg+AOIgBAAIgEABQgVAFgRAAIAAAAIgBAAQgXAAgQgIIgBgBQhPAXgggXQAgAXBPgXIABABQAQAIAXAAIABAAIAAAAQARAAAVgFIAEgBIABAAQA+gOBdgzIAGATQAzCThtgJQgcgDgSgeQgdAqgcAHQglAJgig6Qg/BUhNhKQgnA9goAAQgjAAgjgvgAFZHjQg5ATgpAAQgqAAgagTQAaATAqAAQApAAA5gTgAHnFEIgNgXgAHDFDIAAgPgAE5ERIASgPgAEcD4IATgWgAG5B/IAChHgAHVBsIAAgVgACrApIgVgTgADTAEIgcgSgAFWiEIAVgYgAEzilIAQgXgAHajMIgQgUgAkTjfIgRgegAH/jgIgOgUgAj6jxIgRgYgArFkVIgVgTgAqokrIgVgRgAhwlIIAcgPgAo6leIATgOgAELllIAVgPgAiKlzIAggUgADol8IAVgVgApcmAIAegegAEmnyQgKgcgagTQAaATAKAcgAIZoFIgEgEIAEAEgABahmIAAAAg");
	this.shape_1.setTransform(0,0,1.103,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scarf1, new cjs.Rectangle(-101.1,-63.4,202.3,126.9), null);


(lib.patch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AG8mfIC1AAIBeA+ArOlZIBwhGIC5AAINhAAAmlmfIAAK/QgECLB5gNIKJAAQBngKgEiAIAAqz");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmwEgIAAq/INhAAIAAKzQAECAhnAKIqJAAIgUACQhlAAAEiAg");
	this.shape_1.setTransform(1.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.patch, new cjs.Rectangle(-73.9,-43.5,147.9,87.1), null);


(lib.mustache = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ApvjsQATB1A2AqQBdBJDHibQB6hMCIClQCUjFCdCKQDWCPBhihQATgrgTguQBDASgRDZQg9DWjXAYQjxAGiVjVQiNDbkcgNQhKgbgzgoQiGhlASi2QAKhSAhgog");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AAAAeQiNDbkcgNQhKgbgzgoQiGhlASi2QAKhSAhgoQATB1A2AqQBdBJDHibQB6hMCIClQCUjFCdCKQDWCPBhihQATgrgTguQBDASgRDZQg9DWjXAYIgMAAQjpAAiRjPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mustache, new cjs.Rectangle(-68.9,-25.7,137.9,51.5), null);


(lib.mouth1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9,1,1).p("AEbA1QBmhUBpiQIvTAAQBhCRBjBVQEYDzEoj1gAklA3QEuiQESCO");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AkfgXQEuiRERCPQiUB6iQAAQiQAAiLh4g");
	this.shape_1.setTransform(-0.6,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnphzIPTAAQhpCQhmBVQkSiOkuCPQhjhVhhiRg");
	this.shape_2.setTransform(0,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouth1, new cjs.Rectangle(-53.4,-22.1,106.9,44.3), null);


(lib.Hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9,1,1).p("ArZFvIjZIlIg5nyIiSHTIAArRIi1EIIDprbIjKBDIMVmKIlMAAII1jpII6BIID0DLIhYlHIE8GFIH4G0InyjQIIwJ+IjKh3ICCFrIkcj6QoUwvtxJlg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990099").s().p("AvrGiIiSHTIAArRIi1EIIDpraIjKBCIMVmKIlMAAII1jpII6BJID0DKIhYlHIE8GFIH4G0InyjQIIwJ+IjKh4ICCFrIkcj5QoUwvtxJmIkjHpIjZImg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hair, new cjs.Rectangle(-137.6,-96.1,275.3,192.2), null);


(lib.Eye1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9,1,1).p("ADqgIQAABfhEBFQhEBDhgAAQhgAAhEhDQhEhFAAhfQAAhhBEhEQBEhEBgAAQAeAAAcAHQgCACgCAAQgiAjAAAwQAAAvAiAjQAiAiAwAAQAwAAAigiQADgDADgDQAIAfAAAigAFqAAQAACWhqBqQhTBThuASQgeAFghAAQggAAgegFQhugShThTQhqhqAAiWQAAiVBqhqQBqhqCVAAQCWAABqBqQBqBqAACVg");
	this.shape.setTransform(36.2,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AikClQhEhFAAhgQAAhfBEhEQBFhFBfAAQAfABAbAGIgDADQgiAiAAAxQAAAvAiAiQAiAiAwAAQAwAAAigiIAFgGQAJAfAAAhQAABghEBFQhFBDhgAAQhfAAhFhDg");
	this.shape_1.setTransform(36.3,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Eye1, new cjs.Rectangle(-4.5,-4.5,81.4,81.4), null);


(lib.ovalred = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape.setTransform(11.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.9,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgMAbIgIgDIAAgKIAAAAQAEADAGACQAFACAFAAQAFAAADgCQAEgCAAgEQAAgEgCgBIgHgDIgEgBIgGgBQgHgCgDgDQgDgEAAgFQAAgDABgDIAEgGIAHgDQAFgCAEAAIAKACIAIACIAAAKIAAAAIgJgEIgKgCQgEAAgDACQgEACAAAEQAAADACACQACACAFABIAFABIAFABQAGABAEADQADAEAAAGQAAAHgGAFQgGAFgKAAQgGAAgFgCg");
	this.shape_2.setTransform(1.4,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_3.setTransform(-4.2,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AARAkIgXgdIgOAAIAAAdIgJAAIAAhHIAUAAIAKAAIAIADQAEADACAEQACAEAAAFQAAAIgEAGQgEAEgGACIAbAggAgUAAIAKAAIAIAAQACgBADgDIADgEIABgHQAAgDgBgDIgDgEIgFgCIgGAAIgMAAg");
	this.shape_4.setTransform(-9.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// oval inner
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#EB8383"],[0,1],-19.5,-2.7,0,-19.5,-2.7,56.6).s().p("AiXBlQhGgIg2gQQg2gPgegTQgegVAAgWQAAgVAegVQAegUA2gPQA2gPBGgJQBJgIBOAAQBPAABIAIQBGAJA2APQA3APAdAUQAeAVABAVQAAAWgfAVQgdATg3APQg2AQhGAIQhIAJhPAAQhOAAhJgJg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#F2AEAE"],[0,1],-19.5,-2.7,0,-19.5,-2.7,56.6).s().p("AiXBlQhGgIg2gQQg2gPgegTQgegVAAgWQAAgVAegVQAegUA2gPQA2gPBGgJQBJgIBOAAQBPAABIAIQBGAJA2APQA3APAdAUQAeAVABAVQAAAWgfAVQgdATg3APQg2AQhGAIQhIAJhPAAQhOAAhJgJg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#EB8383"],[0,1],19.5,2.8,0,19.5,2.8,56.6).s().p("AiWBmQhGgJg2gPQg3gPgdgUQgegVgBgWQAAgVAfgVQAdgTA3gPQA2gQBGgIQBIgJBOAAQBPAABJAJQBGAIA2AQQA2APAeATQAeAVAAAVQAAAWgeAVQgeAUg2APQg2APhGAJQhJAIhPAAQhOAAhIgIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// oval inner border
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE9999").s().p("AibBvQhIgKg3gQQg4gRgegVQgfgXAAgYQAAgYAfgWQAegWA4gQQA3gRBIgJQBKgJBRAAQBRAABLAJQBHAJA4ARQA3AQAeAWQAgAWAAAYQAAAYggAXQgeAVg3ARQg4AQhHAKQhLAIhRABQhRAAhKgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},3).wait(1));

	// oval outer
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E04141").s().p("AilCBQhMgLg7gUQg7gTgggZQghgaAAgcQAAgcAhgaQAggZA7gTQA7gTBMgMQBPgKBWAAQBWAABPAKQBMAMA7ATQA7ATAgAZQAhAaABAcQAAAcgiAaQggAZg7ATQg7AUhMALQhPAKhWABIAAAAQhWAAhPgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape_9).to({_off:true},3).wait(1));

	// oval outer border
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D32323").s().p("AipCKQhNgMg9gVQg8gUghgbQgigcAAgeQAAgeAigcQAhgbA8gUQA9gVBNgMQBRgLBYAAQBYAABRALQBOAMA8AVQA9AUAhAbQAhAcABAeQAAAegiAcQghAbg9AUQg8AVhOAMQhRALhYABQhYAAhRgMg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED9292").s().p("AipCKQhNgMg9gVQg8gUghgbQgigcAAgeQAAgeAigcQAhgbA8gUQA9gVBNgMQBRgLBYAAQBYAABRALQBOAMA8AVQA9AUAhAbQAhAcABAeQAAAegiAcQghAbg9AUQg8AVhOAMQhRALhYABQhYAAhRgMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-15,87,30);


(lib.ovalgreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgXAlIAAgKIAKgJIAJgJIAMgNQADgFABgHQgBgFgDgEQgEgDgGAAQgEAAgFACQgGACgFADIAAAAIAAgKIAJgEIALgBQALAAAGAFQAGAGABAJIgBAHIgEAHIgEAGIgHAGIgJAKIgKAIIAlAAIAAAJg");
	this.shape.setTransform(11.3,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(5,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgFQgDgDgCgFQgCgGAAgGQAAgNAHgHQAIgIALAAIAJABIAIADIAAAKIAAAAQgFgDgEgBQgFgCgEAAQgHgBgEAGQgFAFAAAKQAAAJAFAGQAEAFAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJAEIgIAAQgFAAgFgBg");
	this.shape_2.setTransform(-0.4,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-6.3,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAkIAAhHIAtAAIAAAIIgkAAIAAAVIAfAAIAAAHIgfAAIAAAjg");
	this.shape_4.setTransform(-11,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// oval inner
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#A6E1BD"],[0,1],-19.5,-2.7,0,-19.5,-2.7,56.6).s().p("AiXBlQhGgIg2gQQg2gPgegTQgegVAAgWQAAgVAegVQAegUA2gPQA2gPBGgJQBJgIBOAAQBPAABIAIQBGAJA2APQA3APAdAUQAeAVABAVQAAAWgfAVQgdATg3APQg2AQhGAIQhIAJhPAAQhOAAhJgJg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#BFEAD0"],[0,1],-19.5,-2.7,0,-19.5,-2.7,56.6).s().p("AiXBlQhGgIg2gQQg2gPgegTQgegVAAgWQAAgVAegVQAegUA2gPQA2gPBGgJQBJgIBOAAQBPAABIAIQBGAJA2APQA3APAdAUQAeAVABAVQAAAWgfAVQgdATg3APQg2AQhGAIQhIAJhPAAQhOAAhJgJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{rotation:0}}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{rotation:180}}]},1).to({state:[]},1).wait(1));

	// oval inner border
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B9E8C7").s().p("AibBvQhIgKg3gQQg4gRgegVQgfgXAAgYQAAgYAfgWQAegWA4gQQA3gRBIgJQBKgJBRAAQBRAABLAJQBHAJA4ARQA3AQAeAWQAgAWAAAYQAAAYggAXQgeAVg3ARQg4AQhHAKQhLAIhRABQhRAAhKgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape_7).to({_off:true},3).wait(1));

	// oval outer
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6CCE93").s().p("AilCBQhMgLg7gUQg7gTgggZQghgaAAgcQAAgcAhgaQAggZA7gTQA7gTBMgMQBPgKBWAAQBWAABPAKQBMAMA7ATQA7ATAgAZQAhAaABAcQAAAcgiAaQggAZg7ATQg7AUhMALQhPAKhWABIAAAAQhWAAhPgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},3).wait(1));

	// oval outer border
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3CB36A").s().p("AipCKQhNgMg9gVQg8gUghgbQgigcAAgeQAAgeAigcQAhgbA8gUQA9gVBNgMQBRgLBYAAQBYAABRALQBOAMA8AVQA9AUAhAbQAhAcABAeQAAAegiAcQghAbg9AUQg8AVhOAMQhRALhYABQhYAAhRgMg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B9E8C7").s().p("AipCKQhNgMg9gVQg8gUghgbQgigcAAgeQAAgeAigcQAhgbA8gUQA9gVBNgMQBRgLBYAAQBYAABRALQBOAMA8AVQA9AUAhAbQAhAcABAeQAAAegiAcQghAbg9AUQg8AVhOAMQhRALhYABQhYAAhRgMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-15,87,30);


(lib.ovalgold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgTAlIAAgIIAPAAIAAgvIgPAAIAAgHIAHgBIAFgBIAEgEQABgCAAgCIAHAAIAABAIAPAAIAAAIg");
	this.shape.setTransform(13.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(3.3,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgFQgDgDgCgFQgCgGAAgGQAAgNAHgHQAIgIALAAIAJABIAIADIAAAKIAAAAQgFgDgEgBQgFgCgEAAQgHgBgEAGQgFAFAAAKQAAAJAFAGQAEAFAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJAEIgIAAQgFAAgFgBg");
	this.shape_2.setTransform(-2.2,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.1,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAkIAAhHIAtAAIAAAIIgjAAIAAAVIAeAAIAAAHIgeAAIAAAjg");
	this.shape_4.setTransform(-12.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// oval inner
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#E0D36B"],[0,1],-19.5,-2.7,0,-19.5,-2.7,56.6).s().p("AiXBlQhGgIg2gQQg2gPgegTQgegVAAgWQAAgVAegVQAegUA2gPQA2gPBGgJQBJgIBOAAQBPAABIAIQBGAJA2APQA3APAdAUQAeAVABAVQAAAWgfAVQgdATg3APQg2AQhGAIQhIAJhPAAQhOAAhJgJg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#EAE29D"],[0,1],-19.5,-2.7,0,-19.5,-2.7,56.6).s().p("AiXBlQhGgIg2gQQg2gPgegTQgegVAAgWQAAgVAegVQAegUA2gPQA2gPBGgJQBJgIBOAAQBPAABIAIQBGAJA2APQA3APAdAUQAeAVABAVQAAAWgfAVQgdATg3APQg2AQhGAIQhIAJhPAAQhOAAhJgJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{rotation:0}}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{rotation:180}}]},1).to({state:[]},1).wait(1));

	// oval inner border
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDDFAB").s().p("AibBvQhIgKg3gQQg4gRgegVQgfgXAAgYQAAgYAfgWQAegWA4gQQA3gRBIgJQBKgJBRAAQBRAABLAJQBHAJA4ARQA3AQAeAWQAgAWAAAYQAAAYggAXQgeAVg3ARQg4AQhHAKQhLAIhRABQhRAAhKgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape_7).to({_off:true},3).wait(1));

	// oval outer
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DBCD57").s().p("AilCBQhMgLg7gUQg7gTgggZQghgaAAgcQAAgcAhgaQAggZA7gTQA7gTBMgMQBPgKBWAAQBWAABPAKQBMAMA7ATQA7ATAgAZQAhAaABAcQAAAcgiAaQggAZg7ATQg7AUhMALQhPAKhWABIAAAAQhWAAhPgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},3).wait(1));

	// oval outer border
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBBA2C").s().p("AipCKQhNgMg9gVQg8gUghgbQgigcAAgeQAAgeAigcQAhgbA8gUQA9gVBNgMQBRgLBYAAQBYAABRALQBOAMA8AVQA9AUAhAbQAhAcABAeQAAAegiAcQghAbg9AUQg8AVhOAMQhRALhYABQhYAAhRgMg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2E9C8").s().p("AipCKQhNgMg9gVQg8gUghgbQgigcAAgeQAAgeAigcQAhgbA8gUQA9gVBNgMQBRgLBYAAQBYAABRALQBOAMA8AVQA9AUAhAbQAhAcABAeQAAAegiAcQghAbg9AUQg8AVhOAMQhRALhYABQhYAAhRgMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-15,87,30);


(lib.bow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AgShmQAXgmAiAwQAZgPAMAdQgCAMgCAMQgGAYgIAZQBtgrBuA5AAnhcQAFAHAFAJAgHAAQgoBOAFAXIA3hEIgMAtAA6gFQgIAWgLAXQgNAagQAbQBoC3CmBiQCsigAMknQi3hBjRBcAgqBlQAfAYAVggAABAYQAigtgoASAgrgzQAMgZANgaAAnAoQATA7BsAeAA6gFQBGgEA9AXAhTBFQAEgZAJgZQhLAWg6gJAhGATQAGgTAIgVQhhgVhFhHAhTBFQjCBRi4g5QgUjhCljxQDgBPBKDAAgqBlQgiAEgHgkAgrgzQgzhUiHggAg4gVQAGgPAHgP");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAKBdQAQgbANgaQALgXAIgWQgIAWgLAXQgNAagQAbQgVAggfgYIA3hEIgMAtIAMgtIg3BEIAAgGQAAgaAjhFQgjBFAAAaIAAAGQgiAEgHgkQAEgZAJgZIgEABIgCABIgBAAIAAAAIgCAAQgvANgpABIAAAAIAAAAQgTAAgRgDQARADATAAIAAAAIAAAAQApgBAvgNIACAAIAAAAIABAAIACgBIAEgBQgJAZgEAZQjCBRi4g5QgUjhCljxQDgBPBKDAQgNAagMAZQAMgZANgaQAXgmAiAwQAZgPAMAdIgEAYQDRhcC3BBQgMEnisCgQimhihoi3gACmCBQhsgegTg7QATA7BsAegAABAYIAAgBIABAAIAAgBIABgBQAXgegQABQgEABgHADIAAAAIgBAAIgBAAIgCABIACgBIABAAIABAAIAAAAQAHgDAEgBQAQgBgXAeIgBABIAAABIgBAAIAAABgAhGATIAOgoQhhgVhFhHQBFBHBhAVIgOAogAC9AOQg1gUg8AAIAAAAIAAAAIgSABIASgBIAAAAIAAAAQA8AAA1AUIAAAAgAEVAJIgCgBQg+gfg+gBIAAAAIAAAAQgvAAguATQAIgZAGgYQgGAYgIAZQAugTAvAAIAAAAIAAAAQA+ABA+AfIACABIAAAAgAg4gVIANgeIgNAegAgrgzQgzhUiHggQCHAgAzBUgAAxhMQgFgJgFgHQAFAHAFAJgAgqBlIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bow1, new cjs.Rectangle(-48.4,-39.3,96.9,78.8), null);


(lib.arms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("AMDmFQgEhnhbA9QgDAJgCAJQgWBaA7A9QAxAeALhDAMDmFQgBAMABAPQADAZAKAgQAHAVALAZQA2AoAOhwAItmXQgHAUgBAgQBhgOgQBLIg3AlAHdlSQAqgNAegEAIWgiQirjVBfhZQABgDABgDQAAgBAAAAQAliWA8BWAIkgaQAjAbAJgYAJpjkQBGAOACBKAKQmiQhOgxgVA8ANUgFQCYkCiLilQhVgTgJA6ALlBXIhxgJQhygXAThHAJzBeQAFB7gRBxImJAAQgIACgHACADPGfIHtAoQAoinABjJQCGgSgXhKQhlAbgTgbAtOgFQiikCCTilQBbgTAJA6QAEhnBhA9QADAJACAJQAYBag/A9Qg0AegMhDAnBlSQgtgNgggEQhngOARBLIA6AlAoWmXQAHAUABAgAn+giQC1jVhlhZQAAgDgBgDQAAgBAAAAQgniWhABWAr5mFQABAMgBAPQgDAZgLAgQgHAVgLAZQg6AogPhwAoNgaQglAbgJgYAp/miQBTgxAWA8ApVjkQhLAOgCBKApgBeQgFB7ASBxIGgAAQBcARgqBBIosArQgringBjJIB3gJQB6gXgVhHArZBXQiOgSAZhKQBqAbAVgb");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADKCUIAAhRIAOgDIGJAAQARhwgFh8IACgQIBwAKQAADIgpCngAreiyIB3gKIABAQQgFB8ASBwIGgAAQBcAQgqBBIosAsQgrinAAjIg");
	this.shape_1.setTransform(0.6,26.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AJ0D/QhygXAThIIAPgKIgOgIQirjUBfhZIATgCQAqgNAegEQABggAHgUQAVg8BOAxIAPAFQgWBaA7A9QAxAeALhDIAQgGQgKgggDgZQgBgPABgMQAJg6BVATQCLCliYEBQhlAcgTgcQATAcBlgcQAXBLiGASgAJCClQAJAAAEgJIAAgBIAAAAIABgCIgBACIAAAAIAAABQgEAJgJAAIAAAAIgCAAQgJgBgPgLIgEgDIAEADQAPALAJABIACAAIAAAAgAKxAkQgChJhGgOQBGAOACBJgAM8hIQAfAAAKhMIABgFIAAgBIAAABIgBAFQgKBMgfAAIAAAAIgBAAQgKAAgMgIIAAAAIgBgBIgBgBIgBAAQgLgZgHgVQAHAVALAZIABAAIABABIABABIAAAAQAMAIAKAAIABAAIAAAAgAJ2h1Ig3AlIA3glIABgBIAAgCIAAgBQALg7hBAAIgBAAIAAAAQgMAAgPACQAPgCAMAAIAAAAIABAAQBBAAgLA7IAAABIAAACIgBABIAAAAgAtOCrQiikBCTilQBbgTAJA6QABAMgBAPQgDAZgLAgQgHAVgLAZIgCABIgBAAIAAABQgOAIgLAAIAAAAIAAAAQghAAgLhPIgBgCIAAgBIAAABIABACQALBPAhAAIAAAAIAAAAQALAAAOgIIAAgBIABAAIACgBQALgZAHgVIARAGQAMBDA0geQA/g9gYhaIAQgFQBTgxAWA8QAHAUABAgQAgAEAtANIATACQBlBZi1DUIgPAIIAQAKQAVBIh6AXIh3AJQiOgSAZhLgArPCrQgKAOggAAQggAAg1gOQA1AOAgAAQAgAAAKgOgAoqClQAKgBAPgLIAEgDIgEADQgPALgKABIgCAAIAAAAQgKAAgEgKIAAAAIgBAAIAAgBIAAgBIAAABIAAABIABAAIAAAAQAEAKAKAAIAAAAIACAAgAqiAkQAChJBLgOQhLAOgCBJgApkh1IA6AlIg6glIAAgBQgNg+BGAAIAAAAIAAAAQANAAAQACQgQgCgNAAIAAAAIAAAAQhGAAANA+IAAABIAAAAg");
	this.shape_2.setTransform(0,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arms, new cjs.Rectangle(-96.6,-49,193.4,98), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.eyes1 = new lib.Eye1();
	this.eyes1.name = "eyes1";
	this.eyes1.parent = this;
	this.eyes1.setTransform(0,0,1,1,0,0,0,36.2,36.2);

	this.timeline.addTween(cjs.Tween.get(this.eyes1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-40.7,-40.7,81.4,81.4), null);


// stage content:
(lib.MPHFinalOCervantes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.Face1.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eyes1.x = 378;
			this.eyes1.y = 252;
		}
		this.Face1.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eyes1.x = 378;
			this.eyes1.y = 252;
		    this.mouth1.x = 379;
			this.mouth1.y = 323;
			this.bow1.x = 418;
			this.bow1.y = 189;
			this.scarf1.x = 381;
			this.scarf1.y = 402;
			}
		
		this.Face2.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.hair.x = 367;
			this.hair.y = 203;
			this.patch.x = 375;
			this.patch.y = 244;
			this.mustache.x = 378;
			this.mustache.y = 302;
			this.tux.x = 384;
			this.tux.y = 431;
		}
		
		this.Reset.addEventListener("click", ClickReset.bind(this));
		
		function ClickReset() {
			this.hair.x = 145;
			this.hair.y = 389;
			this.patch.x = 116;
			this.patch.y = 71;
			this.mustache.x = 650;
			this.mustache.y = 272;
			this.tux.x = 136;
			this.tux.y = 204;
			this.eyes1.x = 669;
			this.eyes1.y = 350;
		    this.mouth1.x = 533;
			this.mouth1.y = 448;
			this.bow1.x = 670;
			this.bow1.y = 50;
			this.scarf1.x = 632;
			this.scarf1.y = 166;
			this.arms.x = 185;
			this.arms.y = 507;
		    this.mouth2.x = 668;
			this.mouth2.y = 434;
			this.lengua.x = 670;
			this.lengua.y = 498;
			this.diente.x = 530;
			this.diente.y = 510;
		}
		
		this.patch.addEventListener("pressmove", dragMe.bind(this));
		this.tux.addEventListener("pressmove", dragMe.bind(this));
		this.arms.addEventListener("pressmove", dragMe.bind(this));
		this.hair.addEventListener("pressmove", dragMe.bind(this));
		this.lengua.addEventListener("pressmove", dragMe.bind(this));
		this.diente.addEventListener("pressmove", dragMe.bind(this));
		this.mouth1.addEventListener("pressmove", dragMe.bind(this));
		this.mouth2.addEventListener("pressmove", dragMe.bind(this));
		this.eyes1.addEventListener("pressmove", dragMe.bind(this));
		this.mustache.addEventListener("pressmove", dragMe.bind(this));
		this.scarf1.addEventListener("pressmove", dragMe.bind(this));
		this.bow1.addEventListener("pressmove", dragMe.bind(this));
		
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX;
			evt.currentTarget.y = evt.stageY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Bow
	this.bow1 = new lib.bow1();
	this.bow1.name = "bow1";
	this.bow1.parent = this;
	this.bow1.setTransform(670,50);

	this.timeline.addTween(cjs.Tween.get(this.bow1).wait(1));

	// Accesory
	this.scarf1 = new lib.scarf1();
	this.scarf1.name = "scarf1";
	this.scarf1.parent = this;
	this.scarf1.setTransform(632,167.1);

	this.timeline.addTween(cjs.Tween.get(this.scarf1).wait(1));

	// Glasses
	this.patch = new lib.patch();
	this.patch.name = "patch";
	this.patch.parent = this;
	this.patch.setTransform(116,71);

	this.timeline.addTween(cjs.Tween.get(this.patch).wait(1));

	// Mustache
	this.mustache = new lib.mustache();
	this.mustache.name = "mustache";
	this.mustache.parent = this;
	this.mustache.setTransform(650.2,274.2);

	this.timeline.addTween(cjs.Tween.get(this.mustache).wait(1));

	// Mouth
	this.diente = new lib.thoot();
	this.diente.name = "diente";
	this.diente.parent = this;
	this.diente.setTransform(530,510);

	this.lengua = new lib.Symbol3();
	this.lengua.name = "lengua";
	this.lengua.parent = this;
	this.lengua.setTransform(670,498);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lengua},{t:this.diente}]}).wait(1));

	// BodyParts
	this.arms = new lib.arms();
	this.arms.name = "arms";
	this.arms.parent = this;
	this.arms.setTransform(154.4,511.2);

	this.timeline.addTween(cjs.Tween.get(this.arms).wait(1));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSA0IgKgCIAAgOIAHAAIABAHIAHADIAHABQALAAAGgMQAIgLABgVQgGAGgFADQgGACgGAAQgMAAgKgJQgIgIgBgOQAAgPAKgKQAJgKAPAAQAQAAAKAMQAJANAAAYQgBAZgLAPQgMAQgSAAIgLgBgAgPgmQgFAHAAAMQAAANAFAGQAGAIAIAAQAIAAAHgGQAFgFAAgJQAAgOgFgKQgHgJgIAAQgJAAgFAHg");
	this.shape.setTransform(743,560.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAzIAAgHIARAAIAAhVIgRAEIAAgHIAegGIAABeIARAAIAAAHg");
	this.shape_1.setTransform(734.4,560.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAnQgJgOAAgYQAAgYAJgPQAKgOAPAAQAQAAAKAOQAJAPAAAXQAAAZgJAOQgKAOgQAAQgPAAgKgOgAgPghQgFAMAAAVQAAAXAFAMQAFAMAKAAQALAAAFgMQAFgMAAgXQAAgVgFgMQgGgMgKAAQgJAAgGAMg");
	this.shape_2.setTransform(725.3,560.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdA0IAAgHQAFgQANgMIAHgHQAMgLADgHQAFgHAAgIQAAgJgFgGQgGgGgGAAQgGAAgEACQgEACgEAEIgBAIIgHAAIAAgQIAOgFQAGgCAGAAQAOAAAIAIQAJAHAAANQABARgUANIgHAFQgUAPgBANIAvAAIAAAMg");
	this.shape_3.setTransform(716.4,560.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAyIAUgbIgchCIgGAAIAAgGIAfAAIAAAGIgKAAIAUAxIAWgxIgKAAIAAgGIAYAAIAAAGIgGAAIgeBDIgMAag");
	this.shape_4.setTransform(703.4,563.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMAbQgGAGgGADQgFADgGAAQgJAAgGgGQgHgGAAgJQAAgMAKgGQAKgGATAAIADAAIAAgJQAAgQgNAAQgIAAgHAGIAAAIIgIAAIAAgOQAOgHAMAAQAYAAAAAXIAAAgQAAANAGAAIAEAAIABAHIgJACQgKAAgDgMgAgMAEQgGAEAAAIQAAAGADAEQAEAEAGAAIAGgCIAIgFIAAgXIgDAAQgMAAgGAEg");
	this.shape_5.setTransform(695.3,561.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVAyIAAgGIAKAAIAAhLIgeBKIgGAAIgdhMIAABNIALAAIAAAGIgeAAIAAgGIAKAAIAAhXIgKAAIAAgHIAaAAIAcBJIAdhJIAYAAIAAAHIgKAAIAABXIAKAAIAAAGg");
	this.shape_6.setTransform(685.1,560.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEBAIAAh/IAJAAIAAB/g");
	this.shape_7.setTransform(668.3,561);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAoQgFgGAAgMIAAgrIgKAAIAAgHIAKAAIAAgOIAMgDIAAARIATAAIAAAHIgTAAIAAAsQAAAIADAEQADAEAFAAQAEAAAEgCIAAAHQgFACgFAAQgLAAgFgGg");
	this.shape_8.setTransform(654.7,560.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAmIAAgHIAKAAIAAg8IgKAAIAAgGIAYAAIAAANQAHgPAPAAIAFABIAAASIgIAAIAAgHIgCAAQgJAAgIAKIAAAuIAJAAIAAAHg");
	this.shape_9.setTransform(648.8,561.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AARAzIAAgGIAKAAIgKgYIgoAAIgKAYIALAAIAAAGIgZAAIAAgGIAGAAIAmhfIAHAAIAmBfIAGAAIAAAGgAgVAOIAkAAIgRgtg");
	this.shape_10.setTransform(640.5,560.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgmAzIAAgHIAKAAIAAhWIgKAAIAAgHIAYAAIAAAOQAFgHAGgFQAGgDAIAAQANgBAHALQAIAKAAAQQAAASgJALQgIALgPAAQgGAAgFgDQgGgCgEgFIAAAIIAAAUIAKAAIAAAHgAgEgmQgFAEgFAGIAAAkIAKAHQAEACAFAAQAKAAAEgIQAFgIAAgMQAAgPgEgHQgFgHgJAAQgFAAgFACg");
	this.shape_11.setTransform(626.4,563);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdAmIAAgHIAKAAIAAgrQAAgIgDgDQgCgEgFAAQgGAAgFADQgFADgGAGIAAAuIAKAAIAAAHIghAAIAAgHIAKAAIAAgrQAAgIgCgDQgDgEgFAAQgFAAgGADQgFADgGAGIAAAuIAKAAIAAAHIghAAIAAgHIAKAAIAAg8IgKAAIAAgGIAXAAIAAANQAGgHAGgEQAHgEAHAAQAIAAAEAEQAEAEACAHIABAAQAGgHAGgEQAGgEAHAAQAKAAAFAGQAFAFAAALIAAAuIAKAAIAAAHg");
	this.shape_12.setTransform(615.2,561.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAdQgJgLAAgSQAAgRAJgKQAKgLAPAAQARAAAJALQAJAKAAARQAAASgJALQgJAKgRAAQgPAAgKgKgAgOgWQgGAJAAANQAAAOAGAJQAGAJAIAAQAJAAAGgJQAGgJAAgOQAAgNgGgJQgGgJgJAAQgIAAgGAJg");
	this.shape_13.setTransform(603.9,561.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbAnQgNgPAAgYQAAgZANgOQANgNAWAAIAOABIASAEIAAASIgIAAIgBgKQgGgEgFgBQgFgCgGAAQgPAAgJAOQgKAMAAAVQAAATALANQALANAPAAQAQAAANgJIAAAIQgOAIgSAAQgWAAgOgOg");
	this.shape_14.setTransform(594.5,560.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgEBAIAAh/IAJAAIAAB/g");
	this.shape_15.setTransform(578.9,561);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAmQgGgCgGgDIAAgQIAJAAIAAAIIAJAGQAEABAEAAQAFAAAFgDQADgDAAgGQABgIgMgEIgHgDQgUgHAAgPQAAgJAHgGQAHgGALAAIALABIAKAEIAAAQIgIAAIAAgJIgHgEIgGgBQgGAAgDADQgEAEAAAEQAAAFAEADQADADAIADIAHADQAJADAFAFQAEAEAAAIQAAAJgIAHQgIAGgLAAIgOgBg");
	this.shape_16.setTransform(564.5,561.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAcQgKgLAAgRQAAgQAJgLQAJgLAOAAQANAAAHAJQAHAJAAARIAAACIgtAAQAAAOAGAIQAHAJAKAAQAMAAAKgGIAAAKQgNAFgLAAQgOAAgLgLgAgJgZQgEAGgBAMIAeAAIAAgCQAAgWgOAAQgHAAgEAGg");
	this.shape_17.setTransform(556.7,561.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFAoQgFgGAAgMIAAgrIgKAAIAAgHIAKAAIAAgOIAMgDIAAARIATAAIAAAHIgTAAIAAAsQAAAIADAEQADAEAFAAQAEAAAEgCIAAAHQgFACgFAAQgLAAgFgGg");
	this.shape_18.setTransform(550,560.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAHAmIAAgHIAKAAIAAgqQAAgJgDgDQgCgEgHAAQgFAAgFADQgFADgGAGIAAAuIAKAAIAAAHIghAAIAAgHIAKAAIAAg8IgKAAIAAgGIAXAAIAAANQAFgHAHgEQAGgEAIAAQAJAAAGAHQAFAFAAAMIAAAsIAKAAIAAAHg");
	this.shape_19.setTransform(542.7,561.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAMAbQgGAGgGADQgFADgGAAQgJAAgGgGQgHgGAAgJQAAgMAKgGQAKgGATAAIADAAIAAgJQAAgQgNAAQgIAAgHAGIAAAIIgIAAIAAgOQAOgHAMAAQAYAAAAAXIAAAgQAAANAGAAIAEAAIABAHIgJACQgKAAgDgMgAgMAEQgGAEAAAIQAAAGADAEQAEAEAGAAIAGgCIAIgFIAAgXIgDAAQgMAAgGAEg");
	this.shape_20.setTransform(534.2,561.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgDAlIgdhDIgGAAIAAgHIAfAAIAAAHIgKAAIAUAxIAWgxIgKAAIAAgHIAYAAIAAAHIgGAAIgfBDg");
	this.shape_21.setTransform(525.9,561.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZAmIAAgHIAKAAIAAg8IgKAAIAAgGIAYAAIAAANQAHgPAQAAIAEABIAAASIgIAAIAAgHIgCAAQgJAAgIAKIAAAuIAIAAIAAAHg");
	this.shape_22.setTransform(518.6,561.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAcQgKgLAAgRQAAgQAJgLQAJgLAOAAQANAAAHAJQAHAJAAARIAAACIgtAAQAAAOAHAIQAGAJALAAQAKAAALgGIAAAKQgMAFgMAAQgOAAgLgLgAgJgZQgEAGgBAMIAeAAIAAgCQAAgWgOAAQgHAAgEAGg");
	this.shape_23.setTransform(511.3,561.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbAnQgNgPAAgYQAAgZANgOQANgNAWAAIAOABIASAEIAAASIgIAAIgBgKQgGgEgFgBQgFgCgGAAQgPAAgJAOQgKAMAAAVQAAATALANQALANAPAAQAQAAANgJIAAAIQgOAIgSAAQgWAAgOgOg");
	this.shape_24.setTransform(502.5,560.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghAnQgNgPAAgYQAAgYANgOQAMgOAVAAQAWAAAMAOQANAOAAAYQAAAYgNAPQgMAOgWAAQgVAAgMgOgAgWghQgJANAAAUQAAAVAJAMQAJANANABQAOgBAJgNQAJgMAAgVQAAgUgJgNQgJgNgOAAQgNAAgJANg");
	this.shape_25.setTransform(487.6,560.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag7CxIAAgYIAjAAIAAkvIhmAAIAAAqIgaAAIAAhEIEyAAIAABEIgbAAIAAgqIhmAAIAAEvIAjAAIAAAYg");
	this.shape_26.setTransform(442.9,91.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag8C2QgZgFgWgHIAAhEIAbAAIADAjQAUAMAQAHQARAGAOABQAcAAAUgTQATgSAAgcQAAgYgMgRQgMgQgggSIgXgOQgtgYgSgXQgSgXgBgdQABgpAdgbQAdgbAsAAQAXAAAXAEQAXADAWAIIAAA+IgaAAIgCgiQgQgKgQgFQgPgEgPAAQgVAAgQARQgQASAAAZQAAAkAwAcIAYAOQA1AcARAXQASAWAAAhQABAsgiAdQggAegxAAQgcAAgZgEg");
	this.shape_27.setTransform(412.7,91.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ah3CIQgsgxAAhXQAAhVAsgyQAsgyBLAAQBMAAAsAyQAsAyAABVQAABXgsAxQgsAyhMAAQhLAAgsgygAhQh1QgeAsAABJQAABKAeAsQAfAtAxAAQAzAAAegtQAegsAAhKQAAhJgegsQgegsgzAAQgxAAgfAsg");
	this.shape_28.setTransform(379.6,91.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAvCxIAAgYIAkAAIAAiTIikAAIAACTIAjAAIAAAYIh5AAIAAgYIAjAAIAAkxIgjAAIAAgYIB5AAIAAAYIgjAAIAACHICkAAIAAiHIgkAAIAAgYIB5AAIAAAYIgjAAIAAExIAjAAIAAAYg");
	this.shape_29.setTransform(341,91.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhrCHQgugyAAhVQAAhXAsgwQAsgyBNAAQAeAAAeAFQAeAEAgAJIAABEIgbAAIgDgkQgVgNgVgHQgUgGgUAAQg3AAghAtQgiAtAABKQAABHAlAsQAlAqA8ABQAUAAAagHIAAhrIgpAAIAAgXIBzAAIAAAXIgXAAIAAB5QhEASguAAQhOAAgugzg");
	this.shape_30.setTransform(303.8,91.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Button
	this.Reset = new lib.ovalred();
	this.Reset.name = "Reset";
	this.Reset.parent = this;
	this.Reset.setTransform(489.2,36.4);
	new cjs.ButtonHelper(this.Reset, 0, 1, 2, false, new lib.ovalred(), 3);

	this.tux = new lib.tux();
	this.tux.name = "tux";
	this.tux.parent = this;
	this.tux.setTransform(136,204);

	this.Face2 = new lib.ovalgreen();
	this.Face2.name = "Face2";
	this.Face2.parent = this;
	this.Face2.setTransform(380.7,36.4);
	new cjs.ButtonHelper(this.Face2, 0, 1, 2, false, new lib.ovalgreen(), 3);

	this.Face1 = new lib.ovalgold();
	this.Face1.name = "Face1";
	this.Face1.parent = this;
	this.Face1.setTransform(272.2,36.4);
	new cjs.ButtonHelper(this.Face1, 0, 1, 2, false, new lib.ovalgold(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Face1},{t:this.Face2},{t:this.tux},{t:this.Reset}]}).wait(1));

	// Hair
	this.hair = new lib.Hair();
	this.hair.name = "hair";
	this.hair.parent = this;
	this.hair.setTransform(148,382.4);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// Character
	this.mouth2 = new lib.Symbol2();
	this.mouth2.name = "mouth2";
	this.mouth2.parent = this;
	this.mouth2.setTransform(668,434);

	this.mouth1 = new lib.mouth1();
	this.mouth1.name = "mouth1";
	this.mouth1.parent = this;
	this.mouth1.setTransform(533,448);

	this.eyes1 = new lib.Symbol1();
	this.eyes1.name = "eyes1";
	this.eyes1.parent = this;
	this.eyes1.setTransform(669,350);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(9,1,1).p("AiCQmQgCgDgBgCQiXlBjNE6QiVkqjxE2QgOosgDleQgBhbAAhNQAAmzEGkyQEFk0FyAAQFxAAEGE0QEGEyAAGzQAABNAABbQACFdAIIoQi2lWjDFWQh2lCjGFFQh8lUjWFR");
	this.shape_31.setTransform(379.2,274.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AuACcIgCioQAAmzEHkyQEFk0FyAAQFxAAEGE0QEFEyABGzIAACoQACFdAHIoQi1lWjEFWQh2lCjFFFQh9lUjWFRIAAAAQiXlBjNE6QiVkqjxE2QgPosgCleg");
	this.shape_32.setTransform(379.2,274.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.eyes1},{t:this.mouth1},{t:this.mouth2}]}).wait(1));

	// Frame
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2,1,1).p("Eg53gr7MBzvAAAMAAABX3MhzvAAAg");
	this.shape_33.setTransform(379,289);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F0FFFF").s().p("Eg53Ar8MAAAhX3MBzvAAAMAAABX3g");
	this.shape_34.setTransform(379,289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).wait(1));

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