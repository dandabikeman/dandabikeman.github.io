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


(lib.Wreath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape.setTransform(20.4,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("ACMAIQAcgMABgJIABAAIAAABIAAADQgBAJgSAKIgJAEgAiYAAQgSgCACgHIAAgCIAAgBIABAAQAAAIARACIABADIgDgBg");
	this.shape_1.setTransform(20.1,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(20.4,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Wreath, new cjs.Rectangle(-1,-1,42.7,23.5), null);


(lib.tubeflathitarea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F2F6").s().p("AjyBkQgUAAgUgIQgRgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgOQAPgNARgIQAUgIAUAAIHlAAQAUAAATAIQASAIAPANQAOAOAHASQAJATAAATQAAAUgJATQgHASgOAOQgPANgSAIQgTAIgUAAg");
	this.shape.setTransform(0,0,1,0.997);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,-9.9,69,19.9);


(lib.Toga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiuIxIDRgYIDSAAQBKAGEYjYQgOjFDxhrQA5imhtiBQwbEdELprIh0DIIhrA4QghCAgBCLAkrlJQgpADgVgeQhmBoiLAPQiaCphZD3QADAJBpBeQBoBdhtB2QAJBFCQAtQB+grC0gEQA0gBA5ACAkrlJQgVAdgRAgQAkAUAkgLQgNAlgKAjQgPAxgLAtQgMAwgIAtQgJAtgFArQgGA3AAAxQABA0AHAtQAGAqAMAkQAOApAUAiQAZApAiAgQAbAaAiAUAlwjKQgRAqgMAwQAqAdApgKAlwjKQAlAXArgIAlRkMQgRAfgOAjAkqlMIgBADQAcgCAmgTQgRAvgPAsAmfgSQAoAiApgQAmpBLQAnAdAmgQAmfgSQgHAsgDAxQgEAzABA5QAAAzAEA3QAnAfAngfAmoEhQADAkAEAlQACAHADAIQAOAoAUAjQAZArAhAhQARARAUAPAmsC3QAlAcAlgTAmNhwQgLAtgHAxAjpleQgFDcA2ByAl6HEQA0AVAggfAlAIQQAqANArgaAmcF5QAtAVAngf");
	this.shape.setTransform(84.6,60.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AAMGMQggghgZgrQAzAVAggfQAZApAiAgQgdASgcAAQgOAAgOgFgAhPD1IgFgPIgHhJQAnAfAngfQAGAqALAkQgXATgZAAQgRAAgSgJgAhfAzQgBg4AEgzQAnAdAmgQQgGA2AAAxQgPAIgOAAQgXAAgWgRgAhSiWQAHgxALgtQAqAdAogKQgMAwgHAtQgOAGgNAAQgbAAgbgYgAgjlOQAOgjARgfQAjAUAkgLIgXBIQgMADgKAAQgeAAgbgSg");
	this.shape_1.setTransform(51.3,73.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AASHHQgSgPgSgRQApANArgaQAbAaAiAUQg4gCg1ABgAhLFbQgVgjgOgoQAtAVAngfQAOApATAiQgSASgaAAQgRAAgVgIgAh5C4QgFg3AAgzQAmAcAlgTQAAA0AHAtQgTAQgUAAQgTAAgTgQgAh7gdQADgxAHgtQAoAjApgRQgIAugGArQgNAFgOAAQgZAAgZgSgAhejZQAMgwARgqQAkAXAqgIQgOAxgLAtQgKADgLAAQgeAAgfgWgAgjl1QASggATgdQAcgCAmgTIggBbQgNAEgNAAQgWAAgXgNg");
	this.shape_2.setTransform(54.4,71.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("ArmHtQBth2hohdQhphegDgJQBZj3CaipQCLgPBmhoQAVAeApgDQgVAdgRAgQgRAfgOAjQgRAqgMAwQgLAtgHAxQgHAsgDAxQgEAzABA5QAAAzAEA3IAHBJIAFAPQAOAoAUAjQAZArAhAhQARARAUAPQi0AEh+ArQiQgtgJhFgAjrIDQgigggZgpQgUgigOgpQgMgkgGgqQgHgtgBg0QAAgxAGg3QAFgrAJgtQAIgtAMgwQALgtAPgxIAXhIIAghbQghCAgBCLQABiLAhiAIgBAkQAADCAyBoQgyhoAAjCIABgkIBrg4IB0jIQkLJrQbkdQBtCBg5CmQjxBrAODFQkYDYhKgGIjSAAIjRAYQgigUgbgag");
	this.shape_3.setTransform(84.6,60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Toga, new cjs.Rectangle(-1,-1,171.2,123.4), null);


(lib.TechnoShades = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ABWg9IhgBQIAyAAIiSA7ABWg9IiIBaIAlAAIhdAxIgIAEABzhRIgdAU");
	this.shape.setTransform(30.6,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAAALICVhIIB8g8IibC4IB6A7IjwgeIhQAKIigAUIB7g7Iibi4g");
	this.shape_1.setTransform(27.3,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,0,204,0.498)").s().p("Ag3A/Iibi4IEQCEICVhIIgdAUIiKBbIAlAAIhcAwIgIAEIifAUg");
	this.shape_2.setTransform(21.1,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.498)").s().p("AgDAWIglAAICJhbIhhBQIAyAAIiSA7g");
	this.shape_3.setTransform(29.6,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,204,0.498)").s().p("AheBcIhSAKIAIgEICTg7IgzAAIBghQIAdgUIB8g8IiaC4IB6A7g");
	this.shape_4.setTransform(36.8,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TechnoShades, new cjs.Rectangle(-1,-1,56.5,26.4), null);


(lib.TechnoOutfit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIspoIAiA3QhlFLEOhlQA+gTAeBpQAeBmA2BOQjZFPCigMQiEA3gQBtQgEAfAFAjQgbAIgaAMAIspoIjYAvIBjDSIB1kBQg7hGhLgOQgsBIgmA7AAHj1IBPiIQATCqDrlmAAHj1QgEARgDASQgBAPgCAQQgDAQgBAQQgCARgCARQgEA0AAA2QAAANAAAPIgfAdIAAh9IAjgmAAHj1QgJAQgJARQgCAEgCAFQgGAKgEAKQgGAMgFAMQg8CPAICoAAHj1QgaAQgXAMQiMBIgtgyQglApgxAbQhDAmhYANQhbCDhaC/QgBABAAABQggBDgfBKAgPAVQABAdACAeAgPgHICCiMIh6AAAGLgTICwAAIhciEIiYjcIhsFgICwAAIBoFPIC8nfIjQAMAkOg3IiiCBID0BigAiEFWIAACsIjCkogAnFKyQBpAGBugCIjWiQgAgqKrQhPgcg9gmQgBgBAAAAQi2hzgejVIkZFRIg9BJQhmAUgOiGQgPhaCbhpIg+gfAtzFVIApB/IBDhuIg9ggQgbAEgUALQhXAvA+CoIA3AcAqkJxICIA6QArAEAsADApeEMIhQEQIC8i+gAEdKyQATgDAUgEQBtgWBmgyQAjgkAmgaIhFhNICmg0IgZBYABRK6IgohQIEOAAIgaBIAJgIlQAjgYAlgRAgqKrQA+ALA9AEQBpAHBjgPADSCSIjdDtIGaB5gAjuK2QBggCBkgJ");
	this.shape.setTransform(93.5,70.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6600CC").s().p("AAkA7IgBCMIhWgHIiIg6IEYlQQAeDUC2BzIABABQA9AmBPAcQhkAJhgACgAmjBBQg+inBXgvIApB/IBDhuIA+AfQibBoAPBag");
	this.shape_1.setTransform(44.6,119.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AnOIRIABiMIDWCQIg9AAQhOAAhMgEgAISE3ICmg0IgZBYQglARgjAYgApnBrIBsBSIi8C+gAgTDeIDcjsIC9FlgAm5hWICiiCIBSDjgAGCi0IiwAAIBslgICYDcIBcCEg");
	this.shape_2.setTransform(94.4,86.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033FF").s().p("AC0KRIgphRIEOAAIgaBIQhEALhHAAQggAAgggCgAjkCwIDCB8IAACsgAsQEsQATgLAbgFIA+AgIhEBugAHtg9ICwAAIhbiEIDPgMIi8HfgAAzh1IAkglIADgiIB7gBIiCCMIAAgKQAAgwAEgvQgEAvAAAwIAAAKIAAAeIggAbgAG2piIDYgwIh1EBg");
	this.shape_3.setTransform(83.6,74.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6633FF").s().p("At9JIQgPhaCbhpQAfhKAghDIABgCQBai/BbiDQBYgNBDgmQAxgbAlgpQAtAyCMhIQAXgMAbgQQgKAQgJARIgEAJIgKAUIgLAYQg1B/AACTIABAlIgBglQAAiTA1h/IALgYIAKgUIAEgJQAJgRAKgQIgHAjIgEAfIgEAgIAEggIAEgfIAHgjIBOiIQATCqDrlmQAmg7AshIQBLAOA7BGIjYAvIBjDSIB1kBIAiA3QhlFLEOhlQA+gTAeBpQAeBmA2BOQjZFPCigMQiEA3gQBtQgEAfAFAjQgbAIgaAMIAZhYIimA0IBFBNQgmAagjAkQhmAyhtAWIgnAHIAahIIkOAAIAoBQQg8gEg/gLQhPgcg9gmIgBgBQi2hzgejVIkZFRIg9BJQgOADgLAAQhPAAgMh1gArWIcIC8i+IhshSgAisICIAAisIjCh8gAgzF/IGaB5Ii9lmgACzgTICwAAIBoFPIC8nfIjQAMIiYjcgAnYBKID0BiIhSjjgAg0BQIgDg7IADA7gAgviTIgEAiIgjAmIAAB9IAfgdIAAgcICCiMg");
	this.shape_4.setTransform(97.5,70.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TechnoOutfit, new cjs.Rectangle(-1,-1,189,142.2), null);


(lib.TechnoHair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgkBrIg7hEIAyAXIglhEIAgAJIgSg5IASAHIAFg7IA4A9IAQgXIACA3IAjgUIgVA0IAfgMIgUAxIAqgKIgpA3");
	this.shape.setTransform(9.6,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663399").s().p("AhfAnIAyAXIglhEIAgAJIgSg5IASAHIAFg7IA4A8IAPgWIADA3IAjgUIgVA0IAfgNIgVAyIArgLIgpA4Qg2gUglAag");
	this.shape_1.setTransform(9.6,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TechnoHair, new cjs.Rectangle(-1,-1,21.2,23.4), null);


(lib.Strawhat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Ah6gfQB1gVB4AVIADAAABXhFQhcgFhZAFIgEAAAiFgFQCIgYB7AWAiLAOQCLgOCHAOAiIAFQCIgSCEATAh/gVQB6gVB7ASAhxgxQBsgMBvAOAhog8QBjgJBiAJACUA4QiVgDiUADAiTAwQCTgHCSAHAiRAoQCRgJCNAJAiPAgQCKgJCOAJAiNAXQCMgNCLANAiYBJIExAAAiXBBIEuAA");
	this.shape.setTransform(27,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ACRAeQAdAEAYAFQBSASAAAYQAAAZhSARQgcAGghAEIgOgmQg8gtg/gCQg/gBhBAqIgQAuQgcgGgZgGQhSgRAAgZQAAgYBSgSQAQgDARgDICFAAIAaAAQACAAADAAIAAAAQBOgCBDgBgAilAdQABgFABgFQABgEABgEQAAgEABgFQABgDABgEQABgEABgEQABgEABgEQABgFABgEQABgFACgEQABgEABgFQACgFACgGQACgIAEgIQACgFACgFQAFgKAFgIQAEgGAFgFQAEgGAGgDQAJgHAKAAQBDgIBOAIQAIABAIAGQAJAHAKAPQAFAHAFAJQABADACAEQAEAIADAJQADAHADAHQABAEACAEQABAEACAFQAEAMAEANQACAEABADQABAEABAFQACAEABAEQABAFABAG");
	this.shape_1.setTransform(28,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDE97").s().p("AAJBUIgFAAIgZAAIiFAAIgBgEIACgKIACgIIACgJIABgIIACgIIACgIIADgJIACgJIACgJIAEgKIAGgQIAFgKQAEgKAFgIQAEgGAFgFQAFgGAFgDQAJgHAKAAQBDgIBNAIQAJABAIAGQAJAHAKAPIAJAQIAEAHIAHARIAGANIADAIIADAJIAJAZIACAIIACAJIACAIIAEALQhEABhOACgACYBGIkxAAgAiXA+IEtAAgACUA1QiVgDiUADQBKgBBKAAICVABgACSAtQiSgHiUAHQBKgDBKAAQBIAABKADgACMAlQiNgJiRAJQBJgEBIAAQBGAABHAEgACJAdQiPgJiKAJQBFgFBHAAQBFAABIAFgACJAUQiKgNiMANQBGgHBFAAQBFAABGAHgAiLALIADAAIAFgBIAEAAIAFgBQA+gFA8AAIAAAAIAAAAQBCAABBAGIADABIgDgBQhBgGhCAAIAAAAIAAAAQg8AAg+AFIgFABIgEAAIgFABIgDAAgACDADIgEgBIgDAAIgDgBQg+gHg+AAIAAAAIAAAAQg9AAg9AHIgEAAIgIABIAIgBIAEAAQA9gHA9AAIAAAAIAAAAQA+AAA+AHIADABIADAAIAEABgAiFgIQBHgNBCAAIAAAAIABAAQA3AAA0AJIACAAIABAAIACABIADAAIAAAAIADABIACAAIgCAAIgDgBIAAAAIgDAAIgCgBIgBAAIgCAAQg0gJg3AAIgBAAIAAAAQhCAAhHANgAh/gYIAEgBIADAAQA+gKA+AAIAAAAIAAAAQA1AAA1AHIAGABIACAAIgCAAIgGgBQg1gHg1AAIAAAAIAAAAQg+AAg+AKIgDAAIgEABgABygiQh4gVh0AVQA6gLA7AAQA7AAA8ALgABpgyQg7gIg5AAIAAAAIAAAAQgxAAgwAGIgCAAIgDAAIADAAIACAAQAwgGAxAAIAAAAIAAAAQA5AAA7AIIAAAAgABcg/QhhgJhjAJQAxgFAyAAQAwAAAxAFgABWhIQhbgFhZAFQAsgDAuAAQAsAAAuADg");
	this.shape_2.setTransform(27,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8B7952").s().p("AjFApQhSgSAAgXQAAgZBSgRIAhgGICFAAIAaAAIAFAAIAAAAQBOgDBEAAQAbADAZAGQBSARAAAZQAAAXhSASQgdAGggAEIgOgmQg9gtg+gBQg+gChCAqIgPAtIg2gLg");
	this.shape_3.setTransform(28,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Strawhat, new cjs.Rectangle(-1,-1,58,29), null);


(lib.Overalls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AK+htQBLgPBMiSQgDgogXgUQhNCihNACIgNgNIggAXIATARQABgEADgDQAFgFAHgBQAAAAABAAQAIAAAFAGQAGAFAAAIQAAAHgFAFIgBABQgEAEgFABIAYAlIAWgQIgMgPIgKAKIgOgWAGRl0QAAAAAAgBQAHgGAIAAQABAAABAAQAHABAGAFQAGAHAAAIIAAABQAAAIgGAGQgCACgDACQgEACgGAAQgDAAgEgBQgEgCgEgDQgEgFgBgGQgBgCAAgCQAAgIAGgGgAGemSIgMgPIgRAZIAQAUAAOkNQAihCAohHQA1DdDijhIASASIg8BXIA+AzIBFg8IBWBPQgWBEgYA9IAjBMQADgEAFAAQAFAAAEAEQAEAEAAAFQAAAGgEADQgDAEgEAAQgBAAgBAAQgEAAgDgCQgBgBgBgBQgEgDAAgGQAAgFAEgEQAAAAABAAAGMliIgFAFIANARIAFgGAHNltIgKAXIgOgPAHIk6IgegZAGemSIgFANIAJAKAHIk6IAYgcIgTgXQAtgSBHjoQgXgtghgPQgyDag5A3AAdjXQAAAFgEAEQgEAEgFAAQgFAAgEgEQgEgEAAgFQAAgGAEgDQAEgEAFAAQAFAAAEAEQAEADAAAGgAFDDNQgpgug2g1Qg8g7gngcQC2hUAzhTIA0AQAFbEzQgJg3gPgvQjHD2kdhFQgEgYgCgZQgOjfDDl7Qi5Byg2hBQhyBoiAAPQiEDHhxEKIg5AuAKHh+QgBgEAAgDQAAgDABgDAKYhzQgIAAgFgFQgDgDgBgDIgLAHIANAPgAKchzQgCAAgCAAIAAAAAJ0icIgkA0IA3A8IAtgiIAiA3QiEGKCMBcQhFADiAB4Qi0CDmOg7Qj0Aaj+gaIiHg6AKhimIgKAOAGoh2QgDgBgCgDQgFgEAAgGIAAAAQAAgGAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAGQAAAFgDAEQAAAAgBABQgFAFgGAAQgCAAgDgBQhuDKhWAWAG5h7IA3ARQhMDAhhB3AIdgIIAfBGQgMDGjKCgQgDg8gIg1AIejrIBWBPAIUgKQg9D+h8A/AmKEHIAcA1QAhA0CsAOAs1HOIA0g0IBfC+As1HOIAwiCIA9AgAtTIvQgDguAcgmIAFgNAgEKFQAAAFgDAEQgEAEgFAAQgGAAgEgEQgDgEAAgFQAAgGADgDQAEgEAGAAQAFAAAEAEQADADAAAGgAgpKSQhih7gWiZAmKEHQBkBJB/gDAmKEHIkYFRAmKEHIAOBG");
	this.shape.setTransform(85.2,67.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003483").s().p("AACG1Qhih7gViYQEcBFDIj2QAPAuAIA3QAJA1ADA8QDKigAMjEIgfhHQAEgBADgDQADgEAAgFQAAgGgDgDQgEgEgFAAQgFAAgDADIgjhMQAYg8AWhEIBWBPIgkAzIA3A8IAtghIAiA3QiFGJCNBcQhFAEiBB3Qh7BbjkAAQhnAAh8gTgAARGfQgEAEAAAFQAAAGAEADQAEAEAGAAQAEAAAFgEQADgDAAgGQAAgFgDgEQgFgEgEAAQgGAAgEAEgAnvG1IiHg6IEYlQIAcA1QAhAzCsAPQAVCYBiB7Qh5AOh9AAQh8AAh/gOgAlQBxIgOhGgAACG1IAAAAgArZBwIA9AgIg5AuIg0A0gAh1CiIAAAAgAlCBgIgcg1QBkBJB/gEQABAZAFAZQisgPghgzg");
	this.shape_1.setTransform(80.9,89.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0050C8").s().p("AqPE8IA5guQBxkKCEjHQCAgPByhoQA2BBC4hzQAjhBAnhHQA1DdDjjiIARATIg7BWIA+A0IBFg8IBWBPQgWBEgYA8Ig3gRQADgDAAgGQAAgFgEgFQgFgFgGABQgGgBgFAFQgEAFAAAFIAAABIg0gQQgzBTi3BUQAoAdA8A6QA2A0ApAvQjID2kchFQgFgZgBgZIgBggQAAjYC1liQi1FiAADYIABAgQh/AEhkhJIkYFRgAB4k/QgDAEAAAFQAAAGADADQAFAEAFABQAFgBAEgEQADgDABgGQgBgFgDgEQgEgDgFAAQgFAAgFADgAg1DuIAAAAg");
	this.shape_2.setTransform(73.9,77.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAAF70").s().p("AlgIDQgEgEAAgFQAAgGAEgDQAEgEAGAAQAEAAAFAEQADADAAAGQAAAFgDAEQgFAEgEAAQgGAAgEgEgADViTQgEAAgDgCIgCgCQgEgDAAgGQAAgFAEgEIABAAQADgEAFAAQAFAAAEAEQADAEAAAFQAAAGgDADQgDAEgEAAIgCAAgAFSj+IgBAAQgHAAgFgFQgDgDgBgDIgCgHIACgGQABgEADgDQAFgFAGgBIACAAQAIAAAFAGQAGAFAAAIQgBAHgEAFIgBABQgFAEgEABIgEAAgABikBIgGgEQgEgEAAgGIAAAAQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGQAAAFgDAEIgBABQgFAFgGAAIgFgBgAk/lZQgDgEAAgFQAAgGADgDQAFgEAFAAQAFAAAEAEQADADABAGQgBAFgDAEQgEAEgFAAQgFAAgFgEgABTndQgFgCgDgDQgFgFAAgGIgBgEQAAgIAFgGIABgBQAGgGAJAAIACAAQAHABAGAFQAGAHAAAIIAAABQAAAIgGAGIgFAEQgFACgFAAIgHgBg");
	this.shape_3.setTransform(117.9,81.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0060F1").s().p("AiPGzQB8g+A8kAQADADAEAAIACAAIAgBHQgMDFjKCgQgCg8gJg1gAiPGzQgJg3gPgvQBhh3BLjBQhLDBhhB3Qgpgug2g1QBWgVBujMQhuDMhWAVQg8g7gngcQC3hVAyhSIA0ARQABAEAEAEIAFAEIAGABQAFAAAFgFIABgBIA2ARIAjBMIgBAAQgEAEABAFQgBAGAEADIACACQg8EAh8A+IAAAAgABlAXIAlgzIASARIgBAGIABAGIgKAHIAMAPIAPgKIAAAAIAEAAIAYAlIgYglQAFgBAEgFIABgBQAFgFAAgGQAAgHgGgGQgFgGgIABIgBAAIALgPIgLAPQgGAAgFAFQgEADgBAEIgSgRIAfgXIAOANQBMgCBNihQAXATADAoQhMCRhLAPIAMAPIgWARIgtAhgADJAcIAKgKIgKAKIgOgWgAilixIA8hWIAQATQgFAHgBAIIABADIgEAFIAMASIAGgGIAGAAQAGABAFgDIAEgEQAGgGABgIIAAAAQgBgJgGgHQgGgFgGgBIgKgKIAFgMQA5g4AxjaQAiAPAWAtQhGDpgtARIATAYIgXAcIgegaIAeAaIhGA7gAgnjWIAKgXIgKAXIgNgPgAghi5gAhZj0IgQgTIASgaIALAQIgFAMIAKAKIgDAAQgIABgGAFIgBABg");
	this.shape_4.setTransform(134.3,54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Overalls, new cjs.Rectangle(-1,-1,172.5,137.3), null);


(lib.Neck2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AiphdQgxAiAZBlQAVA5AzgGIATgyQghgygJg/gACRhOQgTBSggAzQA3BWArh1QAihihRgEg");
	this.shape.setTransform(20.3,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6633FF").s().p("AjBAqQgZhlAxgiIAZAXQAJA/AhAyIgTAyIgJABQgsAAgTg0gABeA3QAggzAThSQBRAEgiBiQgYBEgdAAQgVAAgYglg");
	this.shape_1.setTransform(20.3,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Neck2, new cjs.Rectangle(-1,-1,42.5,20.8), null);


(lib.Neck1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AiphdQgxAiAZBlQAVA5AzgGIATgyQghgygJg/gACRhOQgTBSggAzQA3BWArh1QAihihRgEg");
	this.shape.setTransform(20.3,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AjBAqQgZhlAxgiIAZAXQAJA/AhAyIgTAyIgJABQgsAAgTg0gABeA3QAggzAThSQBRAEgiBiQgYBEgdAAQgVAAgYglg");
	this.shape_1.setTransform(20.3,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Neck1, new cjs.Rectangle(-1,-1,42.5,20.8), null);


(lib.Mouth3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAJghIAHAcIgHgLQgFgJAFgIgAAAgsIADBZAgIghIgHAcIAHgLQAFgJgFgIg");
	this.shape.setTransform(11.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhxAiQgHhdAog1QAog0AmgKQA6AOAjA+QAjA+gPBAAhxAiQAujOBDBYQBKhiAlDSQgdB/hSAUQhigqgPhjQA8BYA1AVQAwgJA/hq");
	this.shape_1.setTransform(11.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD925").s().p("AhwhDQA9BYA1AUQAwgIA/hqQgeB/hRAUQhjgrgPhig");
	this.shape_2.setTransform(11.4,27.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0A653").s().p("AgUAoQgIgRAAgXQAAgXAIgRQAJgQALAAQAMAAAJAQQAIARAAAXQAAAXgIARQgJARgMAAQgLAAgJgRg");
	this.shape_3.setTransform(12,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("AhwAUQAujNBEBYQBJhiAmDRQg/BrgwAIQg1gUg9hZgAgOgtQgIARAAAXQAAAXAIAQQAJARALAAQAMAAAIgRQAJgQAAgXQAAgXgJgRQgIgRgMAAQgLAAgJARg");
	this.shape_4.setTransform(11.4,18.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAJAEQgFgJAFgHIAHAagAgIgMQAFAHgFAJIgHAKg");
	this.shape_5.setTransform(11.3,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF22A").s().p("AhQgpQAog0AmgKQA6ANAjA/QAjA8gPBBQgljRhKBiIgChaIACBaQhDhZguDOQgHheAogzgAAGhKIAHAKIgHgbQgFAHAFAKgAgRhAIAHgKQAFgKgFgHg");
	this.shape_6.setTransform(11.5,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mouth3, new cjs.Rectangle(-1,-1,25.1,36.9), null);


(lib.Mouth2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhvAMQA/ijA0gKQAtANA/CiQhVikgXA8Qgdg9hWCjQASBxBWAlQBXgPAgiFQhMCKgngiQgoAdhEiHg");
	this.shape.setTransform(11.2,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AADhaIAKARIgGgFQgFgGABgGgAgFhaIgKARIAIgFQAFgGgDgGgAAAhkIAABHAAcBBQAAAPgIAKQgIALgMAAQgLAAgJgLQgHgKAAgPQAAgOAHgLQAJgKALAAQAMAAAIAKQAIALAAAOg");
	this.shape_1.setTransform(11.7,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3333FF").s().p("AhvhKQBECGAngdQAoAiBMiJQghCEhWAPQhWglgShwg");
	this.shape_2.setTransform(11.2,24.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAZQgJgKABgPQgBgOAJgKQAIgLALABQAMgBAIALQAIAKAAAOQAAAPgIAKQgIALgMAAQgLAAgIgLg");
	this.shape_3.setTransform(11.7,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgECDQgnAehEiHQBVikAeA+QAXg8BVCkQg9BugmAAQgJAAgIgHgAgPgGQgIAKAAAOQAAAPAIAKQAJALAKAAQAMAAAJgLQAIgKAAgPQAAgOgIgKQgJgKgMAAQgKAAgJAKgAALh9QgFgGACgGIAKARgAAAiJQABAGgEAGIgHAFg");
	this.shape_4.setTransform(11.2,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6666CC").s().p("AAEgQQgeg+hVCkQA/ijAzgKIABBHIgBhHQAuANA/CiQhVikgXA8gAALhBIAHAFIgKgRQgCAGAFAGgAgKg8IAHgFQAEgGgBgGgAADhXIAAAAg");
	this.shape_5.setTransform(11.2,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mouth2, new cjs.Rectangle(-1,-1,24.4,34.3), null);


(lib.Mouth1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ABLiQQAAABABACQAbAxAHBWQAHBUgoA1QgoA1glAIQgkAIgjg5QgCgDgBgCQgWgmgIguQgGggAAgiQAAhZAgguQAFgHAFgFQAegiAnABQAuABAcAvgABGASQgDA9gVAjQgVAigZABQgZACgSgkQgSglgOhCQgNhBAagkQAZgkAiAFQAhAGAWAkQAWAkgEA8g");
	this.shape.setTransform(11.1,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AgmBlQgSglgOhBQgNhCAagkQAZgkAhAFQAiAGAWAkQAWAkgEA8QgDA9gVAjQgVAigZABIgDAAQgXAAgRgig");
	this.shape_1.setTransform(10.6,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDC7IgJgBIgHgCQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAAAQgHgEgDgGIgBgEQAAgDAEgBQADAAADACIAEAEIAEAFQAEAEANAAIANgBIAGgEIAOgMIAEgCIACAAIABgDQABgDAEgEQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQADABAAAFQgBAKgIAFQgBAHgLAFQgGAEgMABIgCABQgFACgHAAIgGgBgAg3iQQgBgBACgEIADgHIAQgPIAFgEIAYgLQAEgCACACIAAABIABAAIARABIAPACQAEABACACQgBADgEACQABAAAAAAQAAABAAAAQABAAAAAAQAAABgBAAIgBACQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAIgHgBIgFgCQgJAAgEgCIgDgBIgIAAIgXAKIgIAFIgCACIgIAKIgDAEIgCABIgDgBg");
	this.shape_2.setTransform(10.2,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhHCPIgDgFQgWgmgIguQgGggAAgiQAAhZAgguIAKgMQAegiAnABQAuABAcAvIABADQAbAxAHBWQAHBUgoA1QgoA1glAIIgJABQgfAAgfgygAgkChQgEAAgBADIABAEQAEAGAHAEIgBABQAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAIAHACIAIABQAMABAGgDIACgBQAMgBAHgDQAKgFABgIQAIgFABgKQAAgEgDgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAQgEAEgBAEIgBACIgCABIgEACIgNALIgHAFIgMAAQgNAAgFgDIgEgFIgDgFQgCgBgDAAIgBAAgAg+hZQgaAkANBBQAOBCASAlQASAkAZgCQAZgBAVgiQAVgjADg9QAEg8gWgkQgWgkghgGIgJAAQgcAAgWAfgAgQi8IgXALIgGAEIgPAOIgEAHQgBAFABABQADACACgCIADgFIAIgJIACgCIAHgFIAYgKIAJgBIADACQADACAIAAIAGACIAGAAQABAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIABgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQADgDACgDQgCgCgEAAIgQgDIgQgBIAAABIgCgCIgCAAIgEABg");
	this.shape_3.setTransform(11.1,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mouth1, new cjs.Rectangle(-1,-1,24.2,40.7), null);


(lib.Eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ACJAAQgIgDgJAAQgDgBgDABQgJAAgLADQALAEAJAAQADAAACAAQAKAAAIgEgAiIAAQAIgDAJAAQADgBADABQAJAAALADQgLAEgJAAQgDAAgCAAQgKAAgIgEg");
	this.shape.setTransform(14,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AB7g4QgCgEgBgDQgCgDgCgDIAAAAQgIgLgKgGQAPAFAOgKQABAOgMAIAB0hFQAKAHAOgHQgEAIgNAFABihWIAAAAQgHgEgIgBQgBAAgBAAQgBAAgBAAQgYAAgRAcQgQAdAAAnQAAApAQAcQARAdAYAAQAYAAARgdQAQgbAAgoQAAgBAAgBQAAgjgNgaABThbQAQABAIgMQADAJgMAHAB4ACQgBgagLgTQgMgUgSAAQgRAAgLAUQgNAUAAAbQAAAdANAUQALAUARAAQASAAAMgUQAKgSABgYAByACQgBgLgIgJQgLgKgOAAQgPAAgKAKQgKALAAANQAAAOAKAKQAKALAPAAQAOAAALgLQAIgIABgLAh3ACQABgaALgTQAMgUARAAQARAAAMAUQAMAUAAAbQAAAdgMAUQgMAUgRAAQgRAAgMgUQgKgSgBgYAhShbQABAAABAAQABAAABAAQAYAAAQAcQARAdAAAnQAAApgRAcQgQAdgYAAQgYAAgRgdQgRgbAAgoQAAgBAAgBQAAgjAOgaQABgEACgDQACgDABgDQgJAHgOgHQADAIAOAFAhihWIABAAQAGgEAJgBQgQABgJgMQgCAJAMAHAh0hFIABAAQAIgLAJgGQgPAFgNgKQgBAOAMAIAhxACQABgLAIgJQALgKAOAAQAPAAAKAKQAKALAAANQAAAOgKAKQgKALgPAAQgOAAgLgLQgIgIgBgL");
	this.shape_1.setTransform(14,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AAyAwQgNgTAAgdQAAgcANgTQALgVARAAQASAAAMAVQALASABAcIgGAAQgBgNgIgJQgLgJgOgBQgPABgKAJQgKALAAANQAAAPAKAKQAKAKAPAAQAOAAALgKQAIgIABgLIAFAAQgBAXgKASQgMAVgSAAQgRAAgLgVgAhrAwQgKgSgBgXIAFAAQABALAIAIQALAKAOAAQAPAAAKgKQAKgKAAgPQAAgNgKgLQgKgJgPgBQgOABgLAJQgIAJgBANIgGAAQABgcALgSQAMgVARAAQARAAAMAVQAMATAAAcQAAAdgMATQgMAVgRAAQgRAAgMgVg");
	this.shape_2.setTransform(14,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA3A9QgKgJAAgPQAAgOAKgLQAKgKAPAAQAOAAALAKQAIAJABAMQgJABgLAEQALADAJABQgBAMgIAHQgLALgOAAQgPAAgKgLgAhoA9QgIgHgBgMQAJgBALgDQgLgEgJgBQABgMAIgJQALgKAOAAQAPAAAKAKQAKALAAAOQAAAPgKAJQgKALgPAAQgOAAgLgLgAB4ggIgEgGQAKAHAOgHQgEAIgNAFIgDgHgAiLgmQAOAHAJgHIgDAGIgDAHQgOgFgDgIgABig3QAPAFAOgKQABAPgMAHQgIgLgKgGgAh+g8QANAKAPgFQgJAGgIALQgMgHABgPgABTg7QAQAAAIgMQADAKgMAGQgHgEgIAAgAhrhHQAJAMAQAAQgJAAgGAEQgMgGACgKg");
	this.shape_3.setTransform(14,7.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAnBFQgRgdAAgoQAAgoARgdQAQgcAYAAIACAAIACABQAIAAAHAFIAAAAQAKAFAIAMIAAAAIAEAFIADAHQAOAbAAAjIAAABQgIgDgJAAQgBgcgLgTQgMgUgSAAQgRAAgLAUQgMAUAAAdQAAAbAMAUQALAUARAAQASAAAMgUQAKgSABgYQAJAAAJgEQAAAogRAcQgRAdgYAAQgYAAgQgdgAh3BFQgRgcAAgoQAJAEAJAAQgJAAgJgEQAIgDAJAAIAGAAQAJAAALADQgKAEgKAAIgFAAQABAYAKASQANAUARAAQAQAAAMgUQAMgUAAgbQAAgdgMgUQgMgUgQAAQgRAAgNAUQgLATgBAcQgJAAgIADIAAgBQAAgjAOgbIADgHIAEgFIABAAQAHgMAKgFIAAAAQAHgFAIAAIADgBIABAAQAYAAAQAcQARAdAAAoQAAAogRAdQgQAdgYAAQgYAAgRgdgAByAFQgJAAgLgEQALgDAJAAIAGAAQAJAAAIADQgJAEgJAAIgFAAgACJABIAAAAgACJABIAAAAgAiIABIAAAAg");
	this.shape_4.setTransform(14,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Eyes2, new cjs.Rectangle(-1,-1,30,22.7), null);


(lib.Eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ABrgzQAJAMAEAQQACAKAAALQAAAcgQAUQgPAVgXAAQgWAAgQgVQgFgGgDgHQgIgQAAgTQAAgdAQgVQAQgUAWAAQAOAAALAHACCAAQgDAvgTAWQgSAWghAAQghAAgYgtQgZAtghAAQghAAgTgWQgSgWgBguQgCgtAhggQAhggBBArQBCgsAhAfQAhAfgCAvgAgJAAQAAAcgQAVQgQAUgWAAQgXAAgQgUQgPgVAAgcQAAgdAPgUQAQgVAXAAQAWAAAQAVQAQAUAAAdg");
	this.shape.setTransform(13,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ABlglQAAAIgEAGQgEAGgGAAQgFAAgEgGQgEgGAAgIQAAgJAEgGQAEgFAFAAIAAAAQAGAAAEAFQADAEAAAEQABADAAAEgAAtAkQAAADgDACQgCADgDAAQgCAAgDgDQgCgCAAgDQAAgDACgDQADgCACAAQADAAACACQADADAAADgAgkghQAAAKgFAHQgEAHgHAAQgGAAgFgHQgFgHAAgKQAAgKAFgHQAFgHAGAAQAHAAAEAHQAFAHAAAKgAhPAwQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFg");
	this.shape_1.setTransform(13.7,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAuQgZAtghAAQghAAgTgWQgSgWgBguQgCgtAhggQAhggBBArQBCgsAhAfQAhAfgCAvQgDAvgTAWQgSAWghAAQghAAgYgtgAhmgxQgPAUAAAdQAAAcAPAVQAQAUAXAAQAWAAAQgUQAQgVAAgcQAAgdgQgUQgQgVgWAAQgXAAgQAVgAAeg0QgQAVAAAdQAAATAIAQQADAHAFAGQAQAVAWAAQAXAAAPgVQAQgUAAgcQAAgLgCgKQgEgQgJgMIAAAGQAAAJgEAFQgEAGgFAAQgGAAgEgGQgEgFAAgJQAAgIAEgGQAEgFAFgBIABAAQAFAAAEAGQADADABAFQgBgFgDgDQgEgGgFAAIgBAAQgLgHgOAAQgWAAgQAUgAhbAvQgDgDAAgEQAAgFADgDQADgDAFAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAQgFAAgDgDgAAmAhQgCgCAAgDQAAgDACgCQADgCADAAQADAAACACQACACAAADQAAADgCACQgCADgDAAQgDAAgDgDgAg5gXQgEgHAAgKQAAgKAEgHQAFgHAHAAQAGAAAFAHQAFAHAAAKQAAAKgFAHQgFAHgGAAQgHAAgFgHg");
	this.shape_2.setTransform(13,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhoAzQgPgVAAgdQAAgcAPgUQAQgVAXAAQAWAAAQAVQAQAUAAAcQAAAdgQAVQgQAUgWAAQgXAAgQgUgAhdAiQgDADAAAFQAAAEADADQADADAFAAQAEAAADgDQADgDAAgEQAAgFgDgDQgDgDgEAAQgFAAgDADgAg7g3QgEAHAAAKQAAAKAEAHQAFAHAHAAQAGAAAFgHQAFgHAAgKQAAgKgFgHQgFgHgGAAQgHAAgFAHgAAcAwQgFgGgDgHQgIgQAAgTQAAgdAQgVQAQgUAWAAQAOAAALAHQgFABgEAFQgEAGAAAIQAAAJAEAFQAEAGAGAAQAFAAAEgGQAEgFAAgJIAAgGQAJAMAEAQQACAKAAALQAAAcgQAUQgPAVgXAAQgWAAgQgVgAAkAZQgCACAAADQAAADACACQADADADAAQADAAACgDQACgCAAgDQAAgDgCgCQgCgCgDAAQgDAAgDACg");
	this.shape_3.setTransform(13.2,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Eyes, new cjs.Rectangle(-1,-1,28,20.3), null);


(lib.tubeflatsteel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape.setTransform(11.9,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.9,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgMAbIgIgDIAAgKIAAAAQAEADAGACQAFACAFAAQAFAAADgCQAEgCAAgEQAAgEgCgBIgHgDIgEgBIgGgBQgHgCgDgDQgDgEAAgFQAAgDABgDIAEgGIAHgDQAFgCAEAAIAKACIAIACIAAAKIAAAAIgJgEIgKgCQgEAAgDACQgEACAAAEQAAADACACQACACAFABIAFABIAFABQAGABAEADQADAEAAAGQAAAHgGAFQgGAFgKAAQgGAAgFgCg");
	this.shape_2.setTransform(1.4,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_3.setTransform(-4.2,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AARAkIgXgdIgOAAIAAAdIgJAAIAAhHIAUAAIAKAAIAIADQAEADACAEQACAEAAAFQAAAIgEAGQgEAEgGACIAbAggAgUAAIAKAAIAIAAQACgBADgDIADgEIABgHQAAgDgBgDIgDgEIgFgCIgGAAIgMAAg");
	this.shape_4.setTransform(-9.9,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_5.setTransform(11.9,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(6.9,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAbIgIgDIAAgKIAAAAQAEADAGACQAFACAFAAQAFAAADgCQAEgCAAgEQAAgEgCgBIgHgDIgEgBIgGgBQgHgCgDgDQgDgEAAgFQAAgDABgDIAEgGIAHgDQAFgCAEAAIAKACIAIACIAAAKIAAAAIgJgEIgKgCQgEAAgDACQgEACAAAEQAAADACACQACACAFABIAFABIAFABQAGABAEADQADAEAAAGQAAAHgGAFQgGAFgKAAQgGAAgFgCg");
	this.shape_7.setTransform(1.4,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_8.setTransform(-4.2,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARAkIgXgdIgOAAIAAAdIgJAAIAAhHIAUAAIAKAAIAIADQAEADACAEQACAEAAAFQAAAIgEAGQgEAEgGACIAbAggAgUAAIAKAAIAIAAQACgBADgDIADgEIABgHQAAgDgBgDIgDgEIgFgCIgGAAIgMAAg");
	this.shape_9.setTransform(-9.9,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// inner outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CBD3E7").ss(1,1,1).p("AEVhbQAVAHARAOQAQAOAJASQAJATABATQAAAUgKATQgJASgQANQgRAOgVAIQgWAIgZAAInMAAQgYAAgWgIQgWgIgQgOQgRgNgJgSQgJgTAAgUQAAgTAJgTQAJgSARgOQAQgOAWgHQAWgIAYAAIHMAAQAZAAAWAIg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// tube inner
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CBD3E7").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4E67A0").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AD7iGQgFAAgEAAInjAAQgEAAgFAAQg4AAgnAnQgoAnAAA4QAAA4AoAnQAnAoA4AAIH+AAIAAAAQAygDAkglQAognAAg4QAAg4gognQgkgkgygDg");
	this.shape_14.setTransform(0,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B2D8E8").ss(1,1,1).p("ADyiGIASAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAAQAEAAAFAAQAEAAAFAA");
	this.shape_15.setTransform(0,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#4E67A0").ss(1,1,1).p("ADyiGIASAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAAQAEAAAFAAQAEAAAFAA");
	this.shape_16.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(1));

	// tube outer
	this.instance = new lib.tubeflathitarea("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.102,1.307);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 139, 178, 0)];
	this.instance.cache(-36,-12,73,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-14.6,79.1,36.7);


(lib.tubeflatcopper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgTAkIAAgHIAPAAIAAgwIgPAAIAAgHIAHAAIAFgCIAEgCQABgCAAgEIAHAAIAABBIAPAAIAAAHg");
	this.shape.setTransform(13.1,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(3.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_2.setTransform(-2.2,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.1,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAkIAAhHIAtAAIAAAIIgjAAIAAAVIAeAAIAAAHIgeAAIAAAjg");
	this.shape_4.setTransform(-12.8,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAkIAAgHIAPAAIAAgwIgPAAIAAgHIAHAAIAFgCIAEgCQABgCAAgEIAHAAIAABBIAPAAIAAAHg");
	this.shape_5.setTransform(13.1,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(3.3,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_7.setTransform(-2.2,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_8.setTransform(-8.1,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAkIAAhHIAtAAIAAAIIgjAAIAAAVIAeAAIAAAHIgeAAIAAAjg");
	this.shape_9.setTransform(-12.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// inner outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E9C0AF").ss(1,1,1).p("AEVhbQAVAHARAOQAQAOAJASQAJATABATQAAAUgKATQgJASgQANQgRAOgVAIQgWAIgZAAInMAAQgYAAgWgIQgWgIgQgOQgRgNgJgSQgJgTAAgUQAAgTAJgTQAJgSARgOQAQgOAWgHQAWgIAYAAIHMAAQAZAAAWAIg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// tube inner
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C15F35").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AEEiGQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAAIASAAQgFAAgEAAQgFAAgEAA");
	this.shape_14.setTransform(0,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B2D8E8").ss(1,1,1).p("ADyiGQAEAAAFAAQAEAAAFAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAAIASAA");
	this.shape_15.setTransform(0,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C15F35").ss(1,1,1).p("ADyiGQAEAAAFAAQAEAAAFAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAAIASAA");
	this.shape_16.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(1));

	// tube outer
	this.instance = new lib.tubeflathitarea("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.102,1.307);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 139, 178, 0)];
	this.instance.cache(-36,-12,73,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-14.6,79.1,36.7);


(lib.tubeflatblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgYAlIAAgKIAKgJIAKgIIAMgOQAEgGgBgGQABgFgEgEQgEgDgFAAQgFAAgFACQgFABgGADIAAAAIAAgKIAJgDIAMgBQAKAAAGAFQAHAGgBAJIgBAIIgCAHIgFAEIgGAHIgKAKIgLAIIAnAAIAAAJg");
	this.shape.setTransform(13,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(3.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_2.setTransform(-2.2,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.1,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAkIAAhHIAtAAIAAAIIgjAAIAAAVIAeAAIAAAHIgeAAIAAAjg");
	this.shape_4.setTransform(-12.8,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAlIAAgKIAKgJIAKgIIAMgOQAEgGgBgGQABgFgEgEQgEgDgFAAQgFAAgFACQgFABgGADIAAAAIAAgKIAJgDIAMgBQAKAAAGAFQAHAGgBAJIgBAIIgCAHIgFAEIgGAHIgKAKIgLAIIAnAAIAAAJg");
	this.shape_5.setTransform(13,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(3.3,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_7.setTransform(-2.2,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_8.setTransform(-8.1,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAkIAAhHIAtAAIAAAIIgjAAIAAAVIAeAAIAAAHIgeAAIAAAjg");
	this.shape_9.setTransform(-12.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// inner outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E7F2F6").ss(1,1,1).p("AEVhbQAVAHARAOQAQAOAJASQAJATABATQAAAUgKATQgJASgQANQgRAOgVAIQgWAIgZAAInMAAQgYAAgWgIQgWgIgQgOQgRgNgJgSQgJgTAAgUQAAgTAJgTQAJgSARgOQAQgOAWgHQAWgIAYAAIHMAAQAZAAAWAIg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// tube inner
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6666FF").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Aj2BkQgUAAgUgIQgSgHgPgPQgOgNgHgSQgJgTAAgUQAAgUAJgSQAHgTAOgNQAPgOASgIQAUgHAUAAIHsAAQAVAAAUAHQARAIAQAOQANANAIATQAJASAAAUQAAAUgJATQgIASgNANQgQAPgRAHQgUAIgVAAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D8BB2").s().p("Aj2BkQgUAAgUgIQgSgIgPgNQgOgOgHgSQgJgTAAgUQAAgTAJgTQAHgSAOgNQAPgOASgIQAUgIAUAAIHsAAQAVAAAUAIQASAIAPAOQAOANAIASQAIATAAATQAAAUgIATQgIASgOAOQgPANgSAIQgUAIgVAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AEEiGQAyADAkAkQAoAnAAA4QAAA4goAnQgkAlgyADIAAAAIn+AAQg4AAgngoQgognAAg4QAAg4AognQAngnA4AAQAFAAAEAAIHjAAQAEAAAFAAg");
	this.shape_14.setTransform(0,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#2D8BB2").ss(1,1,1).p("AEEiGQgFAAgEAAQgFAAgEAAIASAAQAyADAkAkQAnAoABA3QgBA4gnAnQgkAlgyADIAAAAIn+AAIAAAAQg4AAgngoQgngngBg4QABg3AngoQAngnA4AAQAFAAAEAAIHjAA");
	this.shape_15.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},2).to({state:[]},1).wait(1));

	// tube outer
	this.instance = new lib.tubeflathitarea("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.102,1.307);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 139, 178, 0)];
	this.instance.cache(-36,-12,73,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-14.6,79.1,36.7);


// stage content:
(lib.MPHFinalGAyala = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.Face1.addEventListener("click", fl_ClickFace1.bind(this));
		
		function fl_ClickFace1()
		{
			this.Toga.x = 165.5;
		    this.Toga.y = 255.65;
			this.Eyes1.x = 240;
			this.Eyes1.y = 97;
			this.Mouth1.x = 239.3;
			this.Mouth1.y = 134.1;
			this.Wreath.x = 240;
			this.Wreath.y = 83.8;
			this.Neck1.x = 239.05;
			this.Neck1.y = 144.85;
		}
		
		this.Face2.addEventListener("click", fl_ClickFace2.bind(this));
		
		function fl_ClickFace2()
		{
		
			this.Techno.x = 147.3;
			this.Techno.y = 235.4;
			this.Shades.x = 240;
			this.Shades.y = 97;
			this.Eyes1.x = 240;
			this.Eyes1.y = 97;
			this.Mouth2.x = 239.3;
			this.Mouth2.y = 134.1;
			this.Hair.x = 239.55;
			this.Hair.y = 67.95;
			this.Neck2.x = 239.05;
			this.Neck2.y = 144.85;
			
		}
		
		this.Reset.addEventListener("click", fl_ClickReset.bind(this));
		
		function fl_ClickReset()
		{
			this.Toga.x = 500;
		    this.Toga.y = 95;
			this.Techno.x = 500;
			this.Techno.y = 285;
			this.Overalls.x = 500;
			this.Overalls.y = 475;
			this.Eyes1.x = 65;
			this.Eyes1.y = 405;
			this.Eyes2.x = 65;
			this.Eyes2.y = 520;
			this.Shades.x = 65;
			this.Shades.y = 460;
			this.Mouth1.x = 155;
			this.Mouth1.y = 405;
			this.Mouth2.x = 155;
			this.Mouth2.y = 460;
			this.Mouth3.x = 155;
			this.Mouth3.y = 520;
			this.Hat.x = 245;
			this.Hat.y = 520;
			this.Wreath.x = 245;
			this.Wreath.y = 405;
			this.Hair.x = 245;
			this.Hair.y = 460;
			this.Neck1.x = 335;
			this.Neck1.y = 405;
			this.Neck2.x = 335;
			this.Neck2.y = 460;
			
		}
		
		this.Toga.addEventListener("pressmove", dragMe.bind(this));
		this.Techno.addEventListener("pressmove", dragMe.bind(this));
		this.Overalls.addEventListener("pressmove", dragMe.bind(this));
		this.Eyes1.addEventListener("pressmove", dragMe.bind(this));
		this.Eyes2.addEventListener("pressmove", dragMe.bind(this));
		this.Shades.addEventListener("pressmove", dragMe.bind(this));
		this.Mouth1.addEventListener("pressmove", dragMe.bind(this));
		this.Mouth2.addEventListener("pressmove", dragMe.bind(this));
		this.Mouth3.addEventListener("pressmove", dragMe.bind(this));
		this.Wreath.addEventListener("pressmove", dragMe.bind(this));
		this.Hair.addEventListener("pressmove", dragMe.bind(this));
		this.Hat.addEventListener("pressmove", dragMe.bind(this));
		this.Neck1.addEventListener("pressmove", dragMe.bind(this));
		this.Neck2.addEventListener("pressmove", dragMe.bind(this));
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX;
			evt.currentTarget.y = evt.stageY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Buttons
	this.Face1 = new lib.tubeflatcopper();
	this.Face1.name = "Face1";
	this.Face1.parent = this;
	this.Face1.setTransform(65,360);
	new cjs.ButtonHelper(this.Face1, 0, 1, 2, false, new lib.tubeflatcopper(), 3);

	this.Reset = new lib.tubeflatsteel();
	this.Reset.name = "Reset";
	this.Reset.parent = this;
	this.Reset.setTransform(245,360);
	new cjs.ButtonHelper(this.Reset, 0, 1, 2, false, new lib.tubeflatsteel(), 3);

	this.Face2 = new lib.tubeflatblue();
	this.Face2.name = "Face2";
	this.Face2.parent = this;
	this.Face2.setTransform(155,360);
	new cjs.ButtonHelper(this.Face2, 0, 1, 2, false, new lib.tubeflatblue(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Face2},{t:this.Reset},{t:this.Face1}]}).wait(1));

	// Accessories
	this.Shades = new lib.TechnoShades();
	this.Shades.name = "Shades";
	this.Shades.parent = this;
	this.Shades.setTransform(65.1,460.1,1.289,1.289,0,0,0,27.3,12.2);

	this.Neck2 = new lib.Neck2();
	this.Neck2.name = "Neck2";
	this.Neck2.parent = this;
	this.Neck2.setTransform(335.1,460,1,1,0,0,0,20.3,9.4);

	this.Neck1 = new lib.Neck1();
	this.Neck1.name = "Neck1";
	this.Neck1.parent = this;
	this.Neck1.setTransform(335.1,405,1,1,0,0,0,20.3,9.4);

	this.Techno = new lib.TechnoOutfit();
	this.Techno.name = "Techno";
	this.Techno.parent = this;
	this.Techno.setTransform(500,285,1.289,1.289,0,0,0,93.5,70.1);

	this.Eyes1 = new lib.Eyes();
	this.Eyes1.name = "Eyes1";
	this.Eyes1.parent = this;
	this.Eyes1.setTransform(65,405,1.289,1.289,0,0,0,13,9.2);

	this.Eyes2 = new lib.Eyes2();
	this.Eyes2.name = "Eyes2";
	this.Eyes2.parent = this;
	this.Eyes2.setTransform(65.1,520,1.289,1.289,0,0,0,14,10.3);

	this.Mouth1 = new lib.Mouth3();
	this.Mouth1.name = "Mouth1";
	this.Mouth1.parent = this;
	this.Mouth1.setTransform(155,404.9,1.289,1.289,0,0,0,11.5,17.4);

	this.Mouth2 = new lib.Mouth2();
	this.Mouth2.name = "Mouth2";
	this.Mouth2.parent = this;
	this.Mouth2.setTransform(155,460,1.289,1.289,0,0,0,11.2,16.2);

	this.Hair = new lib.TechnoHair();
	this.Hair.name = "Hair";
	this.Hair.parent = this;
	this.Hair.setTransform(245,460,1.289,1.289,0,0,0,9.6,10.7);

	this.Mouth3 = new lib.Mouth1();
	this.Mouth3.name = "Mouth3";
	this.Mouth3.parent = this;
	this.Mouth3.setTransform(155,520,1.289,1.289,0,0,0,11.1,19.3);

	this.Wreath = new lib.Wreath();
	this.Wreath.name = "Wreath";
	this.Wreath.parent = this;
	this.Wreath.setTransform(245.1,405,1.289,1.289,0,0,0,20.4,10.7);

	this.Toga = new lib.Toga();
	this.Toga.name = "Toga";
	this.Toga.parent = this;
	this.Toga.setTransform(500,95,1.289,1.289,0,0,0,84.5,60.6);

	this.Hat = new lib.Strawhat();
	this.Hat.name = "Hat";
	this.Hat.parent = this;
	this.Hat.setTransform(245,520,1.289,1.289,0,0,0,28,13.5);

	this.Overalls = new lib.Overalls();
	this.Overalls.name = "Overalls";
	this.Overalls.parent = this;
	this.Overalls.setTransform(500,475,1.289,1.289,0,0,0,85.3,67.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAHj1IBPiIQACALACAJQARBGBJhGQA9g5BjiXQAmg7AshIQBLAOA7BGIAiA3QhlFLEOhlQA+gTAeBpQAeBmA2BOQjZFPCigMQiEA3gQBtQgEAfAFAjQgbAIgaAMQglARgjAYQgmAagjAkQhmAyhtAWQgUAEgTADQhjAPhpgHQg9gEg+gLQhPgcg9gmQgBgBAAAAQi2hzgejVIkZFRICIA6QArAEAsADQBpAGBugCQBggCBkgJAAHj1QgJAQgJARQgCAEgCAFQgGAKgEAKQgGAMgFAMQg6CJAFCgQAAAHABAHAAHj1QgaAQgXAMQiCBDgwgmQgEgDgDgEQglApgxAbQhDAmhYANQhbCDhaC/QgBABAAABQggBDgfBKIh7g/QgbAEgUALQhXAvA+CoIA3AcAAHj1QgEARgDASQgBAPgCAQQgDAQgBAQQgCARgCARQgEA0AAA2QAAANAAAPQABAdACAeAqkJxIg9BJQhmAUgOiGQgPhaCbhp");
	this.shape.setTransform(-461.8,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.Overalls},{t:this.Hat},{t:this.Toga},{t:this.Wreath},{t:this.Mouth3},{t:this.Hair},{t:this.Mouth2},{t:this.Mouth1},{t:this.Eyes2},{t:this.Eyes1},{t:this.Techno},{t:this.Neck1},{t:this.Neck2},{t:this.Shades}]}).wait(1));

	// Character
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AJfpGIgRgfQgmhHgFiHQAXhmAhhFQAQh/BVANIAfgPQgShJgChzQAIhQBKBHQBEBwgLBNIApAaQA4AAAQBhQAiBGATBpIAAA/QgSBxgqBhQAFAEADAEQAYAbgcBHQgPAmgSAMQgbARghgxQAmhCANhEQAZABANAJAKPmKIATgyQgBgCgBgCQAAgBAAAAQgCgDgBgCQgXgkgKgvQgCgLgCgLQgOgHgLgQQgzAoAbBgQAhBAAngMgAAVihQAwiGB2h5QB2h5CJA7QCIA7AtBsQAkAOgEhhAOjmQQAYDohzCaQBQgbAnCIQAvCFA5BdQA4BggVCYQgYCSClCVQClCUhZD8QifA3imiRQABDOi/giQjAgkAahvQCmgUAGiKAmvCgQBehHB0gaQAJgLALgLIAAAAIABAAQAAgBABAAQAVgYAegVAgahPQgGAKgFAKAiHgOQAUgOAYgPIABAAIAAgBAhLg1QAXgNAagNAhoA2QgMAVgMAUQjzCWg8hVQh3B8jAAdQhIA6jzIfQi/COALBtAAVihQiShXifB7QhaCBh2BVQjfArhgC8QAigBAhgFQABgBABAAAiABfQkTDlgvDAAiABfQh5ENicC/AwhOSIifhSQiPAYAPCUQALB9AsAOIA0AWQABAQAGAQQAeCZBwgmIBPhfICuBLQEvAdFTgdQHxBDD4igQCzifBLABQgYjGDWhjAvxTBIFpmxQAhDaBwBUQCfCXCXA3AAVihQgYAqgXAo");
	this.shape_1.setTransform(161.3,193.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AlPKeIiuhLIFpmyQAhDaBwBUQCeCXCXA4QiqAOifAAQihAAiXgOgAsVIIQgsgNgLh9QgPiVCPgXICfBRQi/COALBugAFsEtQgHgCgFgGQgGgGAAgKQAAgIAFgIQAHgNASgIIANgHQAHgEADgGIACgKQAAgJABgCQACgOAUgRQAPgMA7gqQAughAagZQAqgpAgg9QAag0AVhFIAFgQQAEgJAGgEQAJgJAPABQAOADAHALIAjhYIAGgNQAEgHAFgEQAEgDAFAAIABgEQAFgEAHgBQAIgCAFAEQANAJgDAZQgCAYgLAdIgLAdIAAABIgBAXQgDAWgTAhQgaAsgrA3QgoBBgqA3QgZAfgVAVQgvAuhGAjQgmAcgmAXQgSALgLACIgGABQgFAAgFgCgAFaogIgYgEQgNAAgDgBQgKgDgDgLQgCgKAHgHIAAgBIABAAIABgBIAHgFIAIgFIAFgFIAQgNIAEgDIAGgIIAFgGIABgBQAFgGAHgDIAHgCIAJgCIACgCIACgBIADgDIAIgFIAHgGIAGgIIABAAIAAAAIAGgGQAEgDAFAAIAIABIADABIAAABIABgBIAIgEIAJgGIAEAAIABAAIAEABIAAABQACAEgBAEIgFAGIgFALIgIAKIgGAHIgBABQgOAcgJAOQgKAQgKAMIgJAKQgKALgJACQgFACgHAAIgJgBg");
	this.shape_2.setTransform(111.3,256);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AjBGpQgahgAygoQAMAQANAHIAFAWQAKAvAXAkIABAEIABABIABABIACAEIgUAyQgGACgGAAQggAAgcg2gABfG3QAmhCANhEQAYABAOAJIAIAIQAYAbgcBHQgQAmgRAMQgHAEgIAAQgVAAgYgkgAg8mzQAIhQBJBHQBDBwgLBNQhKgcgrAkQgShJgChzg");
	this.shape_3.setTransform(238.9,106.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,197,128,0.498)").s().p("ALqTYQi/gkAZhuQCngUAGiLQgDgUAAgTQAAioDAhZQjABZAACoQAAATADAUQhMgBizCgQj3CgnxhDQiXg4igiXQhvhUghjaIlqGyIhPBfQhvAmgfiaQgFgPgCgQQgLhuC/iOQD0oeBIg6QC/gdB4h8QBdhGB0gaIAUgWIgUAWQh0AahdBGQh4B8i/AdIgDABQghAEgiACQBhi9DegpQB2hVBbiDQCeh6CTBWQAwiGB2h5QB1h5CJA7QCJA8AsBrQAlAOgFhhIAUgyIgCgDIgBgCIgCgEQgXgkgKgvIgFgWQgNgIgMgPIgRgfQglhIgGiHQAXhlAihGQAQh/BUAOIAggPQAsgkBKAbIApAaQA5AAAQBiQAhBFATBpIAAA/QgRBygqBhQgOgKgYgBQgNBFgmBBQAgAxAcgRQAYDphzCZQBQgbAmCJQAwCEA5BeQA4BggWCYQgXCRClCVQCkCUhYD9QigA2imiQQABCwiMAAQgYAAgbgFgACYFDQgGAEgDAJIgGAQQgVBFgaA0QgfA+grApQgYAZguAhQg8AqgOAMQgVARgCAOQgBACAAAJIgBAKQgDAGgHAEIgNAHQgTAIgHANQgEAIAAAIQAAAKAGAGQAEAGAIACQAHADAJgCQALgCARgLQAngXAmgcQBEgjAwguQAUgVAZgfQArg3AnhCQArg3AagsQATghAEgWIAAgXIAAgBIALgdQALgdADgYQACgZgNgJQgFgEgHACQgIABgEAEIgBAEQgGAAgDADQgGAEgDAHIgHANIgjBYQgGgLgOgDIgFAAQgMAAgIAIgAnKHBQCbi/B5kMIgNAIIgBABQiMBUhNADIgEAAIAAAAQguAAgVgfQAVAfAuAAIAAAAIAEAAQBNgDCMhUIABgBIANgIQkTDlgvC/QAvi/ETjlQh5EMibC/gAi2gKIAZgpIgZApgAj/g/QgHAHACAKQADALALADQADABANAAIAXAEQAOACAIgDQAIgCALgLIAJgKQAJgMAKgQQAJgOAPgcIAAgBIAGgHIAIgKIAGgLIAEgGQACgEgCgEIgBgBIAMgTIAvhTIgvBTQgbANgWANQgFAAgFADIgFAGIgBAAIAAAAIgsAdQgIADgEAGIgCABQgdAWgWAXIgBABIgBAAgAJposIgBgDIACAEIgBgBg");
	this.shape_4.setTransform(166.6,204.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3E3C4").s().p("AgIAGIgEgBIADgCQAJgHAEgCQAEAAADABIACACIgFAAIgIAFIgHAEIgBABg");
	this.shape_5.setTransform(155.7,188);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6EBD6").s().p("AgjAOIgFAHIgFAIIgFACIgQANIgFAFIgIAFIgHAGQAWgYAdgWgAAWgXIgHAHIgHAGIgIAFIgCAEIgBAAIgDABIgIADIgHACIArgcgAAmghQAWgNAbgNIgMAUIgDgCIgBAAIgCgCQgDgBgEABQgEABgKAIIgDACIgHgBg");
	this.shape_6.setTransform(149.9,191.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Frame
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("Eg53gr7MBzvAAAMAAABX3MhzvAAAg");
	this.shape_7.setTransform(379,289);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F0FFFF").s().p("Eg53Ar8MAAAhX3MBzvAAAMAAABX3g");
	this.shape_8.setTransform(379,289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.3,237.5,1306.8,621.3);
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