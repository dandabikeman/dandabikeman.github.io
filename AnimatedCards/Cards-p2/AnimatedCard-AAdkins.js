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


(lib.HNYref = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.HNYref, null, null);


(lib.btn_Balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn_Balloon
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4.5,1,1).p("Ag0koQlAgWjokpQj6lAAAnGQAAnFD6lBQD7lBFhAAQFiAAD6FBQD7FBAAHFQAAHGj7FAQj6FBliAAQgaAAgagCIiODeIErAAgAhAhAQhQALgXAnQgHANAAAfQAABCAyA4QAcAgBSA8QBNA5AgAmQAyA9AABLQAAA/gqA9QgZAkhEBMQg+BMgeBMQgVA0gLA9QgKA8AABFQAACBA9A8QAXAXAnAUQAXAMAwAXQBcAsAqBHQA9BmAADJQAAA7g4AwQgQAOhsBFQhUA1gmA1Qg5BLAABoQAAAhgCAvQACAiAMASQAXAmCQAy");
	this.shape.setTransform(85.5,248.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjCS1ICOjeQlAgXjokoQj6lBAAnEQAAnGD6lBQD7lAFhAAQFiAAD7FAQD6FBAAHGQAAHEj6FBQj7FBliAAQgaAAgagCICdDeg");
	this.shape_1.setTransform(85.5,120.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AjCS1ICOjeQlAgXjokoQj6lBAAnEQAAnGD6lBQD7lAFhAAQFiAAD7FAQD6FBAAHGQAAHEj6FBQj7FBliAAQgaAAgagCICdDeg");
	this.shape_2.setTransform(85.5,120.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,175.5,501.5);


(lib.BasicButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBTQgIgFgEgJQgEgJAAgVIAAgrIgSAAIAAgjIASAAIAAgXIAvgYIAAAvIAaAAIAAAjIgaAAIAAArQAAAIABADQADADAFAAQAGAAAJgDIAEAiQgSADgPAAQgRAAgJgEg");
	this.shape.setTransform(74.8,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA+IgXgoIgaAoIg0AAIAthAIgqg7IA4AAIATAiIAXgiIA0AAIgqA7IAuBAg");
	this.shape_1.setTransform(61.5,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAuAEQgLATgPAIQgPAIgcAAQgYAAgOgHgAgRgbQgFAGAAALIAuAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_2.setTransform(46.2,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAgBWIg/hdIAABdIgyAAIAAirIAxAAIBABeIAAheIAyAAIAACrg");
	this.shape_3.setTransform(28.1,25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgMBTQgIgFgEgJQgEgJAAgVIAAgrIgSAAIAAgjIASAAIAAgXIAvgYIAAAvIAaAAIAAAjIgaAAIAAArQAAAIABADQADADAFAAQAGAAAJgDIAEAiQgSADgPAAQgRAAgJgEg");
	this.shape_4.setTransform(74.8,25.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AAXA+IgXgoIgaAoIg0AAIAthAIgqg7IA4AAIATAiIAXgiIA0AAIgqA7IAuBAg");
	this.shape_5.setTransform(61.5,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAuAEQgLATgPAIQgPAIgcAAQgYAAgOgHgAgRgbQgFAGAAALIAuAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_6.setTransform(46.2,27.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AAgBWIg/hdIAABdIgyAAIAAirIAxAAIBABeIAAheIAyAAIAACrg");
	this.shape_7.setTransform(28.1,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Rounded
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape_8.setTransform(50,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_9.setTransform(50,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_10.setTransform(50,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_11.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_10},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_8}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Squared
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_12.setTransform(50,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_13.setTransform(50,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_14.setTransform(50,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_15.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_14},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_12}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.AnimatedCardAAdkins = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on current frame
		
		this.btn_Balloon.addEventListener("click", fl_ClickNextScene.bind(this));
		this.next_btn.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(22));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.parent = this;
	this.next_btn.setTransform(890.2,684.7);
	this.next_btn._off = true;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(10).to({_off:false},0).wait(11).to({_off:true},9).wait(2));

	// Balloon
	this.btn_Balloon = new lib.btn_Balloon();
	this.btn_Balloon.name = "btn_Balloon";
	this.btn_Balloon.parent = this;
	this.btn_Balloon.setTransform(494.5,773.4,1,1,0,0,0,85.5,248.5);
	new cjs.ButtonHelper(this.btn_Balloon, 0, 1, 2, false, new lib.btn_Balloon(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4.5,1,1).p("Ag1koQk/gWjnkpQj7lAAAnGQAAnFD7lBQD6lBFhAAQFiAAD7FBQD6FBAAHFQAAHGj6FAQj7FBliAAQgaAAgbgCIiNDeIErAAgAhAhAQhRALgWAnQgHANAAAfQAABCAyA4QAdAgBRA8QBOA5AfAmQAyA9AABLQAAA/gqA9QgZAkhEBMQg+BMgeBMQgqBpAACJQAACBA9A8QAXAXAoAUQAVAMAxAXQBcAsAqBHQA9BmAADJQAAA7g4AwQgQAOhsBFQhUA1gnA1Qg4BLAABoQAAAhgBAvQAAAiAMASQAYAmCQAy");
	this.shape.setTransform(503.5,1016.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjCS1ICNjeQk/gXjnkoQj7lAAAnFQAAnFD7lBQD6lBFhAAQFiAAD6FBQD7FBAAHFQAAHFj7FAQj6FBliAAQgaAAgbgCICeDeg");
	this.shape_1.setTransform(503.5,888.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_Balloon}]}).to({state:[{t:this.btn_Balloon}]},1).to({state:[{t:this.btn_Balloon}]},1).to({state:[{t:this.btn_Balloon}]},1).to({state:[{t:this.btn_Balloon}]},1).to({state:[{t:this.btn_Balloon}]},1).to({state:[{t:this.btn_Balloon}]},1).to({state:[{t:this.btn_Balloon}]},1).to({state:[{t:this.btn_Balloon}]},1).to({state:[{t:this.btn_Balloon}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},11).to({state:[]},9).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.btn_Balloon).wait(1).to({x:493.1,y:657.1},0).wait(1).to({x:491.7,y:540.7},0).wait(1).to({x:490.3,y:424.2},0).wait(1).to({x:488.9,y:308},0).wait(1).to({x:487.6,y:191.5},0).wait(1).to({x:486.2,y:75.2},0).wait(1).to({x:484.8,y:-41.2},0).wait(1).to({x:483.4,y:-157.5},0).wait(1).to({x:482,y:-274},0).to({_off:true},1).wait(22));

	// Bottles 
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4.5,1,1).p("EAxGghzIguBPIlOJFIgBAAIgJARQhUCPhoA4QhyA9hIgOQhIgNhVA7QhWA8hfCJQgzBLhOCDQg7BRg9BrQgdAzgsBRQgIAOhDBzQhCBzgrBRQgqBShKCEQhJCFg5BXQg4BXjBE0InSMoQgaAwgNAaQG5IjJrA5QAVgfAkg7QATgeAJgPQADgEACgEIAFgJEAxGghzIgrBRIFgDLEAxxgjEIgrBREA3tgf7QAxgwgMhGQhsh6iEg1QgWgJgvgGQhTAYgKA4IgPAbIF0DWIADACIAFgPIgIANIhcCgIlNJEIgCAEQgSASgXApQg4BhADBcQABA+AiBfQApBwAHAqQAQBdgfBaQglBmgRAqQgeBPgvBmQgkBRhYCXQhNCIgLATAO2RsQFaGQHaBKIO358QlflMnPiKgEArYgXXQCVCDC9BAEArNACTIgHAUIwkcsIgEAEQgCAFgDAFAaifTIgJAOEgxyggPIBcCfIFQJDIACADQAHAZAZAoQA3BhBRAsQA3AeBjARQB1AWApAOQBYAhA+BJQBGBSAcAjQA2BCBABcQA0BHBYCZQBPCHALATA6gkgIANAPIQkcrIAIAOEgx6ggdIAIAOIADgCIgLgMQgLgqgfgaQgRgOgYgJQguAJgqAOQhoAjhPA+QgTAPgeAlQgUBVAsAlIAQAaIAwBNIAwBPIFgjMEg21gbrIAuBQIFPJDIAAABIAKARQBTCQgEB2QgFCCgvA3QgwA3AJBoQAJBoBHCXQAnBSBLCFQAoBaA/BrQAeAyAvBPQAIAOBDBzQBCBzAxBNQAyBNBOCDQBPCDAvBcQAvBdCqFAIHTMoQAcAuARAZQK1hsFon8QgRgighg9QgRgfgIgQQgCgEgCgEIgGgJIAAgBEgwqgRgQC8g/CWiEEg3lgc4IFzjXApvYaIACAGQADAEADAEA7WbvQIGhkEul1IvD51QnPCKlfFLg");
	this.shape_2.setTransform(518.4,399.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("EgqTAGWQFflMHPiJIPDZ1QkuF2oGBkgAO2WNIO954QHPCKFfFLIu3Z8QnahKlamPgEg31gYxQgsgmAUhUQAeglATgPQBPg/BogiQAqgOAugKQAYAJARAPQAfAZALArIAIAOIlzDWgEAxxgekIAPgaQAKg4BTgZQAvAHAWAJQCEA1BsB6QAMBFgxAwIgIAOg");
	this.shape_3.setTransform(518.4,371.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Eg2IgBcIADgCIFgjLIAPgIIFQJBIgTALQiVCEi8A/IgEACIgKAGgEAwpAEqQi9hAiViEIgDgBIgLgHIFOpDIADACIFgDLIAPAIIlNJEg");
	this.shape_4.setTransform(518.4,240.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#336600").s().p("EgZbAi0InTspQirlAgvhcQguhchPiEQhPiCgxhNQgyhOhChzIhKiBIhNiBQg/hrgphaQhKiFgnhSQhHiWgJhoQgKhoAxg3QAvg4AFiBQAEh2hTiRIgKgRIALgGIADgCQC8g/CWiEIASgLIACAEQAGAYAaApQA3BgBRAsQA3AfBjARQB1AVAoAPQBZAgA9BJQBGBSAdAkQA2BCBABbQAzBIBZCYIBaCaIgDACIgNgQIANAQIQkcrIACAGIAGAHIAAABIAGAKIAEAHIAZAvIAxBfQlnH8q2BtQgRgZgbgugEgqSABAIO9Z6QIGhkEul2IvE51QnOCKlfFLgAIXXoQANgbAZgvIHTsoQDAk0A5hXQA4hXBKiFQBKiFAqhRQArhSBChyIBKiCIBJiDQA+hsA7hQQBOiEAzhKQBfiJBVg8QBWg8BIAOQBHAOBzg9QBog4BTiQIAKgQIALAFIAEACQCUCEC9A/IATALIgCADQgSASgXAqQg4BhADBcQABA+AiBeQAoBwAIArQAQBcggBaIg1CRQgeBPgvBlQgkBRhYCYIhZCbIgCgCIAHgTIgHATIwlcsIgDAEIgFAKIgFAKIgFAIIgcAtIg5BaQpsg6m4oigAO2Q3QFbGPHZBKIO457QlflMnQiKgEg21gcgIgwhOIF0jWIBcCeIgPAJIlgDLgEA18geMIlgjMIArhRIArhRIF0DXIhcCfg");
	this.shape_5.setTransform(518.3,405.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4.5,1,1).p("EA3tgf7QAxgwgMhGQhsh6iEg1QgWgJgvgGQhTAYgKA4IgPAbIF0DWIADACIAFgPIgIANIhcCgIlNJEIgCAEQgSASgXApQg4BhADBcQABA+AiBfQApBwAHAqQAQBdgfBaQglBmgRAqQgeBPgvBmQgkBRhYCXQhNCIgLATEAxGghzIgrBRIFgDLEAxGghzIguBPIlOJFIgBAAIgJARQhUCPhoA4QhyA9hIgOQhIgNhVA7QhWA8hfCJQgzBLhOCDQg7BRg9BrQgdAzgsBRQgIAOhDBzQhCBzgrBRQgqBShKCEQhJCFg5BXQg4BXjBE0InSMoQgaAwgNAaQG5IjJrA5QAVgfAkg7QATgeAJgPQADgEACgEIAGgJIAAgBEArYgXXQCVCDC9BAEArNACTIgHAUIwkcsIgIANAO2RsQFaGQHaBKIO358QlflMnPiKgEAxxgjEIgrBRAaifTIgEAEQgCAFgCAEA6gkgIANAPIQkcrIACAGQADADACADEgx6ggdQgLgqgegaQgSgOgYgJQguAJgqAOQhoAjhPA+QgTAPgeAlQgUBVAsAlIAQAaIAwBNIAuBQIFPJDIAAABIAKARQBTCQgEB2QgFCCgvA3QgwA3AJBoQAJBoBHCXQAnBSBLCFQAoBaA/BrQAeAyAvBPQAIAOBDBzQBCBzAxBNQAyBNBOCDQBPCDAvBcQAvBdCqFAIHTMoQAcAuARAZQK1hsFon8QgRgighg9QgRgfgIgQQgCgEgCgEIgFgJIgBgBIgBgCEgx6ggdIAIAOIADgCgEgxyggPIBcCfIFQJDIACADQAHAZAZAoQA3BhBRAsQA3AeBjARQB1AWApAOQBYAhA+BJQBGBSAcAjQA2BCBABcQA0BHBYCZQBPCHALATEg21gbrIAwBPIFgjMA7WbvQIGhkEul1IvD51QnPCKlfFLgEgwqgRgQC8g/CWiEEg3lgc4IFzjXApvYaIAHAM");
	this.shape_6.setTransform(494.4,322.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#336600").s().p("EgZbAi0InTspQiqlAgvhcQgwhchOiEQhOiCgyhNQgyhOhBhzIhLiBIhNiBQg/hrgphaQhKiFgnhSQhHiWgJhoQgJhoAvg3QAwg4AFiBQAEh2hTiRIgKgRIAKgGIAEgCQC8g/CViEIATgLIACAEQAGAYAZApQA4BgBRAsQA3AfBiARQB2AVApAPQBXAgA+BJQBHBSAcAkQA1BCBBBbQAzBIBZCYIBaCaIgDACIgNgQIANAQIQkcrIACAGIAEAFIABACIABABIAGAKIAEAHIAZAvIAyBfQloH8q1BtQgRgZgcgugEgqSABAIO8Z6QIHhkEtl2IvD51QnOCKlfFLgAIWXoQAOgbAZgvIHTsoQDBk0A4hXQA4hXBKiFQBKiFAqhRQAqhSBDhyIBLiCIBJiDQA9hsA6hQQBOiEA0hKQBeiJBXg8QBVg8BHAOQBIAOBzg9QBog4BUiQIAJgQIALAFIADACQCWCEC9A/IASALIgCADQgSASgXAqQg4BhACBcQABA+AjBeQAoBwAIArQAQBcgfBaIg2CRQgeBPgvBlQglBRhXCYIhYCbIgEgCIAHgTIgHATIwkcsIgDAEIgEAKIAAAAIgGAKIgFAIIgcAtIg5BaQprg6m6oigAO2Q3QFaGPHaBKIO357QlelMnPiKgEg20gcgIgxhOIF0jWIBcCeIgPAJIlgDLgEA17geMIlgjMIAshRIArhRIFzDXIhbCfg");
	this.shape_7.setTransform(494.3,327.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("EgqTAGWQFflMHPiJIPDZ1QkuF2oGBkgAO2WNIO954QHPCKFfFLIu3Z8QnahKlamPgEg31gYxQgsgmAUhUQAeglATgPQBPg/BogiQAqgOAugKQAYAJASAPQAeAZALArIAIAOIlzDWgEAxxgekIAPgaQAKg4BTgZQAvAHAWAJQCEA1BsB6QAMBFgxAwIgIAOg");
	this.shape_8.setTransform(494.4,293.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Eg2IgBcIADgBIFgjMIAPgJIFQJDIgTAKQiVCEi8A/IgEACIgKAGgEAwpAEpQi9g/iViDIgDgDIgLgFIFOpEIADABIFgDMIAPAIIlNJEg");
	this.shape_9.setTransform(494.4,162.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4.5,1,1).p("EAxGghzIguBPIlOJFIgBAAIgJARQhUCPhoA4QhyA9hIgOQhIgNhVA7QhWA8hfCJQgzBLhOCDQg7BRg9BrQgdAzgsBRQgIAOhDBzQhCBzgrBRQgqBShKCEQhJCFg5BXQg4BXjBE0InSMoQgaAwgNAaQG5IjJrA5QAVgfAkg7QATgeAJgPQADgEACgEIAGgJIAAgBEA3tgf7QAxgwgMhGQhsh6iEg1QgWgJgvgGQhTAYgKA4IgPAbIF0DWIhcCgIlNJEIgCAEQgSASgXApQg4BhADBcQABA+AiBfQApBwAHAqQAQBdgfBaQglBmgRAqQgeBPgvBmQgkBRhYCXQhNCIgLATEAxGghzIgrBRIFgDLEA3tgf7IgIANIADACgEAxxgjEIgrBREArYgXXQCVCDC9BAEArNACTIgHAUIwkcsIgIANAO2RsQFaGQHaBKIO358QlflMnPiKgAaifTIgEAEQgCAFgCAEEg3lgc4IAwBNIAuBQIFPJDIAAABIAKARQBTCQgEB2QgFCCgvA3QgwA3AJBoQAJBoBHCXQAnBSBLCFQAoBaA/BrQAeAyAvBPQAIAOBDBzQBCBzAxBNQAyBNBOCDQBPCDAvBcQAvBdCqFAIHTMoQAcAuARAZQK1hsFon8QgRgighg9QgRgfgIgQQgCgEgCgEIgFgJIgBgBIgBgCEgx6ggdQgLgqgegaQgSgOgYgJQguAJgqAOQhoAjhPA+QgTAPgeAlQgUBVAsAlIAQAaIFzjXIBcCfIFQJDIACADQAHAZAZAoQA3BhBRAsQA3AeBjARQB1AWApAOQBYAhA+BJQBGBSAcAjQA2BCBABcQA0BHBYCZQBPCHALATEgx6ggdIAIAOIADgCgEgwqgRgQC8g/CWiEEg21gbrIAwBPIFgjMA6gkgIANAPIQkcrIAHAMApvYaIACAGQADADACADA7WbvQIGhkEul1IvD51QnPCKlfFLg");
	this.shape_10.setTransform(529.7,466.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#336600").s().p("EgZbAi0InTspQiqlAgvhcQgwhchOiEQhOiCgyhNQgyhOhBhzIhLiBIhNiBQg/hrgphaQhKiFgnhSQhHiWgJhoQgJhoAvg3QAwg4AFiBQAEh2hTiRIgKgRIAKgGIAEgCQC8g/CViEIATgLIACAEQAGAYAaApQA3BgBRAsQA2AfBjARQB2AVApAPQBYAgA9BJQBGBSAdAkQA2BCBABbQAzBIBZCYIBaCaIgDACIgNgQIANAQIQkcrIACAGIAFAFIAAACIABABIAGAKIAEAHIAZAvIAyBfQloH8q1BtQgSgZgbgugEgqSABAIO9Z6QIGhkEtl2IvD51QnOCKlfFLgAIXXoQAMgbAagvIHTsoQDAk0A5hXQA4hXBKiFQBKiFAqhRQArhSBChyIBKiCIBKiDQA9hsA7hQQBOiEAzhKQBfiJBVg8QBWg8BIAOQBHAOBzg9QBog4BTiQIAKgQIALAFIADACQCWCEC9A/IASALIgCADQgSASgXAqQg4BhADBcQABA+AiBeQAoBwAIArQAQBcggBaIg1CRQgeBPgvBlQgkBRhYCYIhZCbIgCgCIAHgTIgHATIwlcsIgDAEIgEAKIgBAAIgFAKIgFAIIgcAtIg5BaQprg6m5oigAO2Q3QFbGPHZBKIO457QlflMnQiKgEg20gcgIgxhOIF0jWIBcCeIgPAJIlgDLgEA17geMIlfjMIArhRIArhRIF0DXIhcCfg");
	this.shape_11.setTransform(529.7,471.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4.5,1,1).p("EA3tgf7QAxgwgMhGQhsh6iEg1QgWgJgvgGQhTAYgKA4IgPAbIF0DWIADACIAFgPIgIANIhcCgIlNJEIgCAEQgSASgXApQg4BhADBcQABA+AiBfQApBwAHAqQAQBdgfBaQglBmgRAqQgeBPgvBmQgkBRhYCXQhNCIgLATEAxGghzIguBPIlOJFIgBAAIgJARQhUCPhoA4QhyA9hIgOQhIgNhVA7QhWA8hfCJQgzBLhOCDQg7BRg9BrQgdAzgsBRQgIAOhDBzQhCBzgrBRQgqBShKCEQhJCFg5BXQg4BXjBE0InSMoQgaAwgNAaQG5IjJrA5QAVgfAkg7QATgeAJgPQADgEACgEIAGgJIAAgBEAxGghzIgrBRIFgDLEArYgXXQCVCDC9BAEArNACTIgHAUIwkcsIgIANAO2RsQFaGQHaBKIO358QlflMnPiKgEAxxgjEIgrBRAaifTIgEAEQgCAFgCAEA6gkgIANAPIQkcrIAHAMEgxyggPIBcCfIFQJDIACADQAHAZAZAoQA3BhBRAsQA3AeBjARQB1AWApAOQBYAhA+BJQBGBSAcAjQA2BCBABcQA0BHBYCZQBPCHALATEgx6ggdIAIAOIADgCIgLgMQgLgqgegaQgSgOgYgJQguAJgqAOQhoAjhPA+QgTAPgeAlQgUBVAsAlIAQAaIAwBNIAuBQIFPJDIAAABIAKARQBTCQgEB2QgFCCgvA3QgwA3AJBoQAJBoBHCXQAnBSBLCFQAoBaA/BrQAeAyAvBPQAIAOBDBzQBCBzAxBNQAyBNBOCDQBPCDAvBcQAvBdCqFAIHTMoQAcAuARAZQK1hsFon8QgRgighg9QgRgfgIgQQgCgEgCgEIgFgJIgBgBIgBgCEg21gbrIAwBPIFgjMA7WbvQIGhkEul1IvD51QnPCKlfFLgEg3lgc4IFzjXEgwqgRgQC8g/CWiEApvYaIACAGQADADACAD");
	this.shape_12.setTransform(493.7,315.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#336600").s().p("EgZbAi0InTspQiqlAgvhcQgwhchOiEQhOiCgyhNQgyhOhBhzIhLiBIhNiBQg/hrgphaQhKiFgnhSQhHiWgJhoQgJhoAvg3QAwg4AFiBQAEh2hTiRIgKgRIAKgGIAEgCQC8g/CViEIATgLIACAEQAGAYAaApQA3BgBRAsQA2AfBjARQB2AVApAPQBYAgA9BJQBGBSAdAkQA2BCBABbQAzBIBZCYIBaCaIgDACIQkcrIACAGIAFAFIAAACIABABIAGAKIAEAHIAZAvIAyBfQloH8q1BtQgSgZgbgugEgqSABAIO9Z6QIGhkEtl2IvD51QnOCKlfFLgA6SlGIgNgQgAIXXoQAMgbAagvIHTsoQDAk0A5hXQA4hXBKiFQBKiFAqhRQArhSBChyIBKiCIBKiDQA9hsA7hQQBOiEAzhKQBfiJBVg8QBWg8BIAOQBHAOBzg9QBog4BTiQIAKgQIALAFIADACQCWCEC9A/IASALIgCADQgSASgXAqQg4BhADBcQABA+AiBeQAoBwAIArQAQBcggBaIg1CRQgeBPgvBlQgkBRhYCYIhZCbIgCgCIAHgTIgHATIwlcsIgDAEIgEAKIgBAAIgFAKIgFAIIgcAtIg5BaQprg6m5oigAO2Q3QFbGPHZBKIO457QlflMnQiKgEg20gcgIgxhOIF0jWIBcCeIgPAJIlgDLgEA17geMIlfjMIArhRIArhRIF0DXIhcCfg");
	this.shape_13.setTransform(493.7,321.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Eg2IgBcIADgBIFgjMIAPgJIFQJDIgTAKQiVCEi8A/IgEACIgKAGgEAwpAEpQi9g/iViDIgDgCIgLgGIFOpEIADACIFgDLIAPAIIlNJEg");
	this.shape_14.setTransform(493.8,156.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(4.5,1,1).p("EAxGghzIguBPIlOJFIgBAAIgJARQhUCPhoA4QhyA9hIgOQhIgNhVA7QhWA8hfCJQgzBLhOCDQg7BRg9BrQgdAzgsBRQgIAOhDBzQhCBzgrBRQgqBShKCEQhJCFg5BXQg4BXjBE0InSMoQgaAwgNAaQG5IjJrA5QAVgfAkg7QATgeAJgPQADgEACgEIAGgJIAAgBEA3tgf7QAxgwgMhGQhsh6iEg1QgWgJgvgGQhTAYgKA4IgPAbIgrBRIgrBRIFgDLEA3lgfuIADACIAFgPIgIANIhcCgIlNJEIgCAEQgSASgXApQg4BhADBcQABA+AiBfQApBwAHAqQAQBdgfBaQglBmgRAqQgeBPgvBmQgkBRhYCXQhNCIgLATEAxxgjEIF0DWEArYgXXQCVCDC9BAEArNACTIgHAUIwkcsIgIANAO2RsQFaGQHaBKIO358QlflMnPiKgAaifTIgEAEQgCAFgCAEEgx6ggdQgLgqgegaQgSgOgYgJQguAJgqAOQhoAjhPA+QgTAPgeAlQgUBVAsAlIAQAaIAwBNIAwBPIFgjMEg21gbrIAuBQIFPJDIAAABIAKARQBTCQgEB2QgFCCgvA3QgwA3AJBoQAJBoBHCXQAnBSBLCFQAoBaA/BrQAeAyAvBPQAIAOBDBzQBCBzAxBNQAyBNBOCDQBPCDAvBcQAvBdCqFAIHTMoQAcAuARAZQK1hsFon8QgRgighg9QgRgfgIgQQgCgEgCgEIgFgJIgBgBIgBgCEgxyggPIADgCIgLgMIAIAOIBcCfIFQJDIACADQAHAZAZAoQA3BhBRAsQA3AeBjARQB1AWApAOQBYAhA+BJQBGBSAcAjQA2BCBABcQA0BHBYCZQBPCHALATEg3lgc4IFzjXEgwqgRgQC8g/CWiEA6gkgIANAPIQkcrIAHAMApvYaIACAGQADADACADA7WbvQIGhkEul1IvD51QnPCKlfFLg");
	this.shape_15.setTransform(529.7,463.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(4.5,1,1).p("EAxxgjEIgrBRIguBPIlOJFIgBAAIgJARQhUCPhoA4QhyA9hIgOQhIgNhVA7QhWA8hfCJQgzBLhOCDQg7BRg9BrQgdAzgsBRQgIAOhDBzQhCBzgrBRQgqBShKCEQhJCFg5BXQg4BXjBE0InSMoQgaAwgNAaQG5IjJrA5QAVgfAkg7QATgeAJgPQADgEACgEIAGgJIAAgBEA3tgf7QAxgwgMhGQhsh6iEg1QgWgJgvgGQhTAYgKA4IgPAbIF0DWIhcCgIlNJEIgCAEQgSASgXApQg4BhADBcQABA+AiBfQApBwAHAqQAQBdgfBaQglBmgRAqQgeBPgvBmQgkBRhYCXQhNCIgLATEA3tgf7IgIANIADACgEArNACTIgHAUIwkcsIgIANAO2RsQFaGQHaBKIO358QlflMnPiKgEAxGghzIgrBRIFgDLEArYgXXQCVCDC9BAAaifTIgEAEQgCAFgCAEA6gkgIANAPIQkcrIAHAMEgxyggPIBcCfIFQJDIACADQAHAZAZAoQA3BhBRAsQA3AeBjARQB1AWApAOQBYAhA+BJQBGBSAcAjQA2BCBABcQA0BHBYCZQBPCHALATEgx6ggdIAIAOIADgCIgLgMQgLgqgegaQgSgOgYgJQguAJgqAOQhoAjhPA+QgTAPgeAlQgUBVAsAlIAQAaIAwBNIAuBQIFPJDIAAABIAKARQBTCQgEB2QgFCCgvA3QgwA3AJBoQAJBoBHCXQAnBSBLCFQAoBaA/BrQAeAyAvBPQAIAOBDBzQBCBzAxBNQAyBNBOCDQBPCDAvBcQAvBdCqFAIHTMoQAcAuARAZQK1hsFon8QgRgighg9QgRgfgIgQQgCgEgCgEIgFgJIgBgBIgBgCEg21gbrIAwBPIFgjMA7WbvQIGhkEul1IvD51QnPCKlfFLgEg3lgc4IFzjXEgwqgRgQC8g/CWiEApvYaIACAGQADADACAD");
	this.shape_16.setTransform(499.1,314.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#336600").s().p("EgZbAi0InTspQirlAgvhcQgvhchOiEQhOiCgyhNQgxhOhDhzIhKiBIhOiBQg+hrgohaQhLiFgnhSQhIiWgIhoQgJhoAvg3QAwg4AFiBQADh2hSiRIgKgRIALgGIADgCQC8g/CViEIATgLIACAEQAHAYAYApQA4BgBRAsQA3AfBiARQB2AVApAPQBYAgA+BJQBGBSAcAkQA1BCBBBbQA0BIBXCYIBbCaIgDACIQkcrIACAGIAEAFIACACIABABIAEAKIAFAHIAZAvIAxBfQlnH8q2BtQgQgZgcgugEgqSABAIO8Z6QIHhkEul2IvD51QnPCKlfFLgA6SlGIgNgQgAIWXoQANgbAbgvIHSsoQDAk0A4hXQA6hXBJiFQBKiFAqhRQAqhSBDhyIBLiCIBIiDQA+hsA6hQQBOiEA0hKQBeiJBXg8QBVg8BHAOQBIAOBzg9QBog4BUiQIAJgQIALAFIADACQCVCEC+A/IASALIgCADQgSASgXAqQg4BhACBcQABA+AjBeQApBwAHArQAQBcgfBaIg2CRQgeBPgvBlQgkBRhYCYIhYCbIgEgCIAHgTIgHATIwjcsIgFAEIgDAKIAAAAIgHAKIgEAIIgcAtIg6BaQprg6m5oigAO3Q3QFZGPHbBKIO257QlelMnPiKgEg20gcgIgwhOIFzjWIBcCeIgPAJIlgDLgEA17geMIlgjMIArhRIAshRIFzDXIhbCfg");
	this.shape_17.setTransform(499,319.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(4.5,1,1).p("EAxGghzIguBPIlOJFIgBAAIgJARQhUCPhoA4QhyA9hIgOQhIgNhVA7QhWA8hfCJQgzBLhOCDQg7BRg9BrQgdAzgsBRQgIAOhDBzQhCBzgrBRQgqBShKCEQhJCFg5BXQg4BXjBE0InSMoQgaAwgNAaQG5IjJrA5QAVgfAkg7QATgeAJgPQADgEACgEIAGgJIAAgBEA3tgf7QAxgwgMhGQhsh6iEg1QgWgJgvgGQhTAYgKA4IgPAbIgrBRIgrBRIFgDLEA3lgfuIADACIAFgPIgIANIhcCgIlNJEIgCAEQgSASgXApQg4BhADBcQABA+AiBfQApBwAHAqQAQBdgfBaQglBmgRAqQgeBPgvBmQgkBRhYCXQhNCIgLATEAxxgjEIF0DWEArYgXXQCVCDC9BAEArNACTIgHAUIwkcsIgIANAO2RsQFaGQHaBKIO358QlflMnPiKgAaifTIgEAEQgCAFgCAEEg3lgc4IAwBNIAuBQIFPJDIAAABIAKARQBTCQgEB2QgFCCgvA3QgwA3AJBoQAJBoBHCXQAnBSBLCFQAoBaA/BrQAeAyAvBPQAIAOBDBzQBCBzAxBNQAyBNBOCDQBPCDAvBcQAvBdCqFAIHTMoQAcAuARAZQK1hsFon8QgRgighg9QgRgfgIgQQgCgEgCgEIgFgJIgBgBIgBgCEgx6ggdQgLgqgegaQgSgOgYgJQguAJgqAOQhoAjhPA+QgTAPgeAlQgUBVAsAlIAQAaIFzjXIADgCIgLgMIAIAOIBcCfIFQJDIACADQAHAZAZAoQA3BhBRAsQA3AeBjARQB1AWApAOQBYAhA+BJQBGBSAcAjQA2BCBABcQA0BHBYCZQBPCHALATEg21gbrIAwBPIFgjMEgwqgRgQC8g/CWiEA6gkgIANAPIQkcrIAHAMApvYaIACAGQADADACADA7WbvQIGhkEul1IvD51QnPCKlfFLg");
	this.shape_18.setTransform(529.7,466.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(4.5,1,1).p("EAxGghzIguBPIlOJFIgBAAIgJARQhUCPhoA4QhyA9hIgOQhIgNhVA7QhWA8hfCJQgzBLhOCDQg7BRg9BrQgdAzgsBRQgIAOhDBzQhCBzgrBRQgqBShKCEQhJCFg5BXQg4BXjBE0InSMoQgaAwgNAaQG5IjJrA5QAVgfAkg7QATgeAJgPQADgEACgEIAGgJIAAgBEA3tgf7QAxgwgMhGQhsh6iEg1QgWgJgvgGQhTAYgKA4IgPAbIF0DWIhcCgIlNJEIgCAEQgSASgXApQg4BhADBcQABA+AiBfQApBwAHAqQAQBdgfBaQglBmgRAqQgeBPgvBmQgkBRhYCXQhNCIgLATEAxGghzIgrBRIFgDLEA3lgfuIADACIAFgPgEAxxgjEIgrBREArYgXXQCVCDC9BAEArNACTIgHAUIwkcsIgIANAO2RsQFaGQHaBKIO358QlflMnPiKgAaifTIgEAEQgCAFgCAEEg3lgc4IAwBNIAuBQIFPJDIAAABIAKARQBTCQgEB2QgFCCgvA3QgwA3AJBoQAJBoBHCXQAnBSBLCFQAoBaA/BrQAeAyAvBPQAIAOBDBzQBCBzAxBNQAyBNBOCDQBPCDAvBcQAvBdCqFAIHTMoQAcAuARAZQK1hsFon8QgRgighg9QgRgfgIgQQgCgEgCgEIgFgJIgBgBIgBgCEgx6ggdQgLgqgegaQgSgOgYgJQguAJgqAOQhoAjhPA+QgTAPgeAlQgUBVAsAlIAQAaIFzjXIADgCIgLgMIAIAOIBcCfIFQJDIACADQAHAZAZAoQA3BhBRAsQA3AeBjARQB1AWApAOQBYAhA+BJQBGBSAcAjQA2BCBABcQA0BHBYCZQBPCHALATEgwqgRgQC8g/CWiEEg21gbrIAwBPIFgjMA6gkgIANAPIQkcrIACAGQADADACADApvYaIAHAMA7WbvQIGhkEul1IvD51QnPCKlfFLg");
	this.shape_19.setTransform(529.7,466.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(4.5,1,1).p("EAwZgdbIguBPIlOJFIgBAAIgJARQhUCPhoA4QhyA9hIgOQhIgNhVA7QhWA8hfCJQgzBLhOCDQg7BRg9BrQgdAzgsBRQgIAOhDBzQhCBygrBRQgqBShKCFQhJCFg5BXQg4BXjBE0InSMoQgaAwgNAaQG5IjJrA5QAVgfAkg7QATgeAJgPQADgEACgEIAGgJIAAgBEA6RgfOIFUinEA5wgb/IFHAAEA3AgbjQAxgwgMhGQhsh6iEg1QgWgJgvgGQhTAYgKA4IgPAbIgrBRIgrBRIFgDLEA24gbWIhcCgIlNJEIgCAEQgSASgXApQg4BhADBcQABA+AiBfQApBwAHAqQAQBdgfBaQglBmgRAqQgeBPgvBlQgkBRhYCYQhNCIgLATEA3AgbjIgIANIADACgEAxEgesIF0DWEAqrgS/QCVCDC9BAEA1lgjLIAAl8EAxvgiPIhylbEA3kghnIDIlAEAqgAGrIgHAUIwkcsIgIANAOJWEQFaGQHaBKIO359QlflLnPiKgEAZ1AjrIgEAEQgCAFgCAEEAzaABdQJhTK10AIEAuMAH7QB7ENleCKEg7MgYWIkYAAEg64gcaIkfh/Egw5gezICajIEg4SgYgIAwBNIAuBQIFPJDIAAABIAKARQBTCQgEB2QgFCCgvA3QgwA3AJBoQAJBoBHCWQAnBSBLCFQAoBbA/BrQAeAyAvBPQAIAOBDBzQBCBzAxBNQAyBNBOCDQBPCDAvBcQAvBdCqFAIHTMoQAcAuARAZQK1hsFon8QgRgighg9QgRgfgIgQQgCgEgCgEIgFgJIgBgBIgBgCEgyngcFQgLgqgegaQgSgOgYgJQguAJgqAOQhoAjhPA+QgTAPgeAlQgUBVAsAlIAQAaIFzjXIBcCfIFQJDIACADQAHAZAZAoQA3BhBRAsQA3AeBjARQB1AWApAOQBYAhA+BJQBGBSAcAjQA2BCBABcQA0BHBYCZQBPCHALASEgyngcFIAIAOIADgCgEg0bgfpIBCloEgxXgNIQC8g/CWiEEg3igXTIAwBPIFgjMEg3+gfBIiMkYEgvOANWQglFeEiB7Eg0vAMuQjeKiKWDNA7NgIIANAOIQkcsIACAGQADADACADAyeisQMjD5ixNZA0CDIQFUBxhkEmAqccyIAHAMEgcDAgHQIGhkEul1IvD51QnPCJlfFMgAUXgFQlXAXBuFxAUXnEQqtFWBwKK");
	this.shape_20.setTransform(534.2,438.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(4.5,1,1).p("EAwZgdbIguBPIlOJFIgBAAIgJARQhUCPhoA4QhyA9hIgOQhIgNhVA7QhWA8hfCJQgzBLhOCDQg7BRg9BrQgdAzgsBRQgIAOhDBzQhCBygrBRQgqBShKCFQhJCFg5BXQg4BXjBE0InSMoQgaAwgNAaQG5IjJrA5QAVgfAkg7QATgeAJgPQADgEACgEIAGgJIAAgBEA5wgb/IFHAAEA6RgfOIFUinEA3AgbjQAxgwgMhGQhsh6iEg1QgWgJgvgGQhTAYgKA4IgPAbIF0DWIADACIAFgPIgIANIhcCgIlNJEIgCAEQgSASgXApQg4BhADBcQABA+AiBfQApBwAHAqQAQBdgfBaQglBmgRAqQgeBPgvBlQgkBRhYCYQhNCIgLATEAwZgdbIgrBRIFgDLEAxEgesIgrBREA3kghnIDIlAEAxvgiPIhylbEA1lgjLIAAl8EAqrgS/QCVCDC9BAEAqgAGrIgHAUIwkcsIgEAEQgCAFgCAEAOJWEQFaGQHaBKIO359QlflLnPiKgEAZ1AjrIgIANEAuMAH7QB7ENleCKEAzaABdQJhTK10AIEg7MgYWIkYAAEg64gcaIkfh/Egw5gezICajIEgyngcFQgLgqgegaQgSgOgYgJQguAJgqAOQhoAjhPA+QgTAPgeAlQgUBVAsAlIAQAaIAwBNIAuBQIFPJDIAAABIAKARQBTCQgEB2QgFCCgvA3QgwA3AJBoQAJBoBHCWQAnBSBLCFQAoBbA/BrQAeAyAvBPQAIAOBDBzQBCBzAxBNQAyBNBOCDQBPCDAvBcQAvBdCqFAIHTMoQAcAuARAZQK1hsFon8QgRgighg9QgRgfgIgQQgCgEgCgEIgFgJIgBgBIgBgCEgyfgb3IADgCIgLgMIAIAOIBcCfIFQJDIACADQAHAZAZAoQA3BhBRAsQA3AeBjARQB1AWApAOQBYAhA+BJQBGBSAcAjQA2BCBABcQA0BHBYCZQBPCHALASEg4SgYgIFzjXEg0bgfpIBCloEg3igXTIAwBPIFgjMEgxXgNIQC8g/CWiEEg3+gfBIiMkYEgvOANWQglFeEiB7Eg0vAMuQjeKiKWDNA7NgIIANAOIQkcsIAHAMA0CDIQFUBxhkEmAyeisQMjD5ixNZAqccyIACAGQADADACADEgcDAgHQIGhkEul1IvD51QnPCJlfFMgAUXnEQqtFWBwKKAUXgFQlXAXBuFx");
	this.shape_21.setTransform(534.2,438.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(4.5,1,1).p("EBCjgmCQAEgHAEgHQAihEACgUQABgCAAgBQAAgigcggQgDgEgEgFQgBAAgBgCQgIgHgQgNQgDgDgEgDQgHgGgJgHQgZgUgkgdQgqgggvgSQgIgEgHgBQgdgKgUAAQgvAAgfAlQgSAVgQAqIAAAAIABAAgEAxcgbRIguBQIlOJEIgBAAIgJARQhUCPhoA5QhyA9hIgPQhIgNhVA8QhWA8hfCJQgzBKhOCEQgFAGgEAGQg3BMg4BjQgdA0gsBQQgDAFgJAPQgSAfgtBOQhCBygrBSQgqBRhKCGQhJCEg5BYQg4BXjBE0InSMoQgaAvgNAaQG5IjJrA6QAVggAkg6QATgeAJgPQADgFACgDIAGgKIAAAAEAxcgbRIAnhKIAEgHIArAWIAFAEIB8BBIASAKIAUAKIACABIA8AgIABAAIBbAxIAQAIIgFAPIgDgCIhcCgIlNJEIgCAEQgSASgXAqQg4BgADBcQABA/AiBeQApBwAHArQAQBcgfBaQglBmgRAqQgeBPgvBlQgkBRhYCYQhNCIgLAUEAxcgbRIgrBRIFgDMEArugQ1QCVCEC9A/EArjAI2IgHATIwkcsIgIAOAPMYPQFaGPHaBKIO358QlflMnPiJgEAa4Al1IgEAEQgCAFgCAFEhCigmCQgEgHgEgHQgihEgCgUQgBgCAAgBQAAgiAcggQAEgEADgFQACAAAAgCQAIgHAQgNQADgDAEgDQAHgGAJgHQAZgUAkgdQAqggAwgSQAHgEAHgBQAdgKAUAAQAwAAAfAlQARAVAQAqIABAAIgBAAgEgxkgZ7IgEADIgsAcIiCBRIgBABIgNAIIipBrIgDABIAxBOIAuBQIFPJDIAAAAIAKARQBTCQgEB3QgFCBgvA4QgwA3AJBnQAJBoBHCWQAnBSBLCFQAoBbA/BrQAeAzAvBOQAIAOBDBzQBCBzAxBOQAEAFADAGQAwBLBJB5QBPCEAuBbQAKATAPAdQA5BuCID/IHTMpQAcAuARAZQK1htFon8QgRghghg+QgRgfgIgQQgCgEgCgDIgFgKIgBgBIgBgCEgxcgZtIADgCIgLgMIAIAOIBcCfIFQJDIACAEQAHAYAZApQA3BgBRAsQA3AfBjARQB1AVApAOQBYAhA+BJQBGBSAcAjQA2BDBABbQA0BIBYCYQBPCGALATEgwUgK+QC8g/CWiEEg2fgVIIAwBOIFgjLA6KCBIANAPIQkctIACAGQADACACADApZe9IAHALEgbAAiRQIGhkEul1IvD52QnPCKlfFMg");
	this.shape_22.setTransform(527.6,424.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC99").s().p("Egp9AM4QFflMHOiKIPDZ3QktF1oGBkgAPLcvIO955QHQCKFfFMIu4Z9QnZhLlbmPgEA83glMIgBgBIAAAAQAQgpASgWQAeglAwAAQAUAAAdAKIAOAFQAwASApAhIA+AxIAQAMIAHAHIAXAUIACACIAIAIQAbAhAAAiIAAADQgCAUgjBEIgHAOgEhCqghvQgihEgCgUIgBgDQABgiAbghIAIgIIABgCIAYgUIAHgHIAQgMIA9gxQAqghAvgSIAPgFQAdgKAUAAQAvAAAgAlQARAWAQApIABAAIgCABIlsDrIgIgOg");
	this.shape_23.setTransform(527.6,395.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#336600").s().p("EgZbAi0InTspQiIj/g5huIgYgvQgwhchOiEQhJh5gwhLIgHgLQgyhOhBhzIhLiBIhNiBQg/hrgphaQhKiFgnhSQhHiWgJhoQgJhoAvg3QAwg4AFiBQAEh2hTiRIgKgRIAKgGIAEgCQC8g/CViEIATgLIACAEQAGAYAaApQA3BgBRAsQA2AfBjARQB2AVApAPQBYAgA9BJQBGBSAdAkQA2BCBABbQAzBIBZCYIBaCaIgDACIgNgQIANAQIQkcrIACAGIAFAFIAAACIABABIAGAKIAEAHIAZAvIAyBfQloH8q1BtQgSgZgbgugEgqSABAIO9Z6QIGhkEtl2IvD51QnOCKlfFLgAIXXoQAMgbAagvIHTsoQDAk0A5hXQA4hXBKiFQBKiFAqhRQArhSBChyIA/huIALgUIBKiDQA4hkA3hMIAJgMQBOiEAzhKQBfiJBVg8QBWg8BIAOQBHAOBzg9QBog4BTiQIAKgQIALAFIADACQCWCEC9A/IASALIgCADQgSASgXAqQg4BhADBcQABA+AiBeQAoBwAIArQAQBcggBaIg1CRQgeBPgvBlQgkBRhYCYIhZCbIgCgCIAHgTIgHATIwlcsIgDAEIgEAKIgBAAIgFAKIgFAIIgcAtIg5BaQprg6m5oigAO2Q3QFbGPHZBKIO457QlflMnQiKgEg20gcgIgxhOIACgBICvhlIALgGICwhmIAIgEIBcCeIgPAJIlgDLgEA17geMIlfjMIArhRIAnhJIAEgIIAqAZIAGADIB2BEIAsAZICOBTIAUALIhcCfg");
	this.shape_24.setTransform(529.7,471.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("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");
	this.shape_25.setTransform(538.4,243);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(4.5,1,1).p("EBCjgmCQAEgHAEgHQAihEACgUQABgCAAgBQAAgigcggQgDgEgEgFQgBAAgBgCQgIgHgQgNQgDgDgEgDQgHgGgJgHQgZgUgkgdQgqgggvgSQgIgEgHgBQgdgKgUAAQgvAAgfAlQgSAVgQAqIAAAAIABAAgEAxcgbRIguBQIlOJEIgBAAIgJARQhUCPhoA5QhyA9hIgPQhIgNhVA8QhWA8hfCJQgzBKhOCEQgFAGgEAGQg3BMg4BjQgdA0gsBQQgDAFgJAPQgSAfgtBOQhCBygrBSQgqBRhKCGQhJCEg5BYQg4BXjBE0InSMoQgaAvgNAaQG5IjJrA6QAVggAkg6QATgeAJgPQADgFACgDIAGgKIAAAAEAxcgbRIAnhKIAEgHIArAWIAFAEIB8BBIASAKIAUAKIACABIA8AgIABAAIBbAxIAQAIIgFAPIgDgCIhcCgIlNJEIgCAEQgSASgXAqQg4BgADBcQABA/AiBeQApBwAHArQAQBcgfBaQglBmgRAqQgeBPgvBlQgkBRhYCYQhNCIgLAUEAxcgbRIgrBRIFgDMEArugQ1QCVCEC9A/EArjAI2IgHATIwkcsIgEAEQgCAFgCAFAPMYPQFaGPHaBKIO358QlflMnPiJgEAa4Al1IgIAOEhCigmCQgEgHgEgHQgihEgCgUQgBgCAAgBQAAgiAcggQAEgEADgFQACAAAAgCQAIgHAQgNQADgDAEgDQAHgGAJgHQAZgUAkgdQAqggAwgSQAHgEAHgBQAdgKAUAAQAwAAAfAlQARAVAQAqIABAAIgBAAgEgxkgZ7IgEADIgsAcIiCBRIgBABIgNAIIipBrIgDABIAxBOIAuBQIFPJDIAAAAIAKARQBTCQgEB3QgFCBgvA4QgwA3AJBnQAJBoBHCWQAnBSBLCFQAoBbA/BrQAeAzAvBOQAIAOBDBzQBCBzAxBOQAEAFADAGQAwBLBJB5QBPCEAuBbQAKATAPAdQA5BuCID/IHTMpQAcAuARAZQK1htFon8QgRghghg+QgRgfgIgQQgCgEgCgDIgFgKIgBgBIgBgCEgxcgZtIADgCIgLgMIAIAOIBcCfIFQJDIACAEQAHAYAZApQA3BgBRAsQA3AfBjARQB1AVApAOQBYAhA+BJQBGBSAcAjQA2BDBABbQA0BIBYCYQBPCGALATEg2fgVIIAwBOIFgjLEgwUgK+QC8g/CWiEA6KCBIANAPIQkctIAHALApZe9IACAGQADACACADEgbAAiRQIGhkEul1IvD52QnPCKlfFMg");
	this.shape_26.setTransform(527.6,424.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4,p:{x:518.4,y:240.1}},{t:this.shape_3},{t:this.shape_2}]},10).to({state:[{t:this.shape_9,p:{x:494.4,y:162.7}},{t:this.shape_8,p:{x:494.4,y:293.7}},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_8,p:{x:529.7,y:437.7}},{t:this.shape_11,p:{y:471.9}},{t:this.shape_9,p:{x:529.8,y:306.7}},{t:this.shape_10}]},1).to({state:[{t:this.shape_14,p:{x:493.8,y:156.1}},{t:this.shape_13},{t:this.shape_8,p:{x:493.7,y:287.1}},{t:this.shape_12}]},1).to({state:[{t:this.shape_8,p:{x:529.7,y:435}},{t:this.shape_11,p:{y:469.2}},{t:this.shape_9,p:{x:529.8,y:304}},{t:this.shape_15}]},1).to({state:[{t:this.shape_17},{t:this.shape_14,p:{x:499.1,y:154.7}},{t:this.shape_8,p:{x:499.1,y:285.7}},{t:this.shape_16}]},1).to({state:[{t:this.shape_8,p:{x:529.7,y:437.7}},{t:this.shape_11,p:{y:471.9}},{t:this.shape_4,p:{x:529.8,y:306.7}},{t:this.shape_18}]},1).to({state:[{t:this.shape_4,p:{x:529.8,y:306.7}},{t:this.shape_11,p:{y:471.9}},{t:this.shape_8,p:{x:529.7,y:437.7}},{t:this.shape_19}]},1).to({state:[{t:this.shape_4,p:{x:529.8,y:306.7}},{t:this.shape_11,p:{y:471.9}},{t:this.shape_8,p:{x:529.7,y:437.7}},{t:this.shape_20}]},1).to({state:[{t:this.shape_4,p:{x:529.8,y:306.7}},{t:this.shape_11,p:{y:471.9}},{t:this.shape_8,p:{x:529.7,y:437.7}},{t:this.shape_21}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_26}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[]},1).to({state:[]},7).wait(2));

	// Label
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC00").s().p("AA/DhIh+j2IAAD2IhiAAIAAnBIBhAAIB/D4IAAj4IBiAAIAAHBg");
	this.shape_27.setTransform(653.8,151.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC00").s().p("AhaDQQgmgYgXg0QgXg0AAhPQAAhtAug+QAug9BSgBQBUABAtA8QAuA8AABtQAABOgUAyQgUAzgmAcQglAcg4AAQg4AAgmgZgAgyhhQgUAeABBEQgBBEAUAeQASAeAggBQAhAAATgcQASgeAAhKQABhAgUgdQgTgdggAAQggAAgSAdg");
	this.shape_28.setTransform(614.4,151.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC00").s().p("AhaDQQglgYgYg0QgXg0AAhPQAAhtAug+QAug9BSgBQBUABAtA8QAuA8AABtQAABOgUAyQgUAzglAcQgnAcg4AAQg4AAglgZgAgzhhQgSAegBBEQABBEASAeQAUAeAfgBQAiAAASgcQATgeAAhKQgBhAgSgdQgUgdggAAQgfAAgUAdg");
	this.shape_29.setTransform(575.1,151.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC00").s().p("AiFDhIAAnBIBpAAIAAFSICiAAIAABvg");
	this.shape_30.setTransform(541.5,151.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC00").s().p("AiFDhIAAnBIBpAAIAAFSICiAAIAABvg");
	this.shape_31.setTransform(510.1,151.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC00").s().p("ABKDhIgRhKIh1AAIgQBKIhrAAIB/nBIBxAAIB/HBgAglA1IBJAAIgkigg");
	this.shape_32.setTransform(475.1,151.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC00").s().p("AibDhIAAnBIDCAAQAxAAAbAgQAaAhAAAvQgBAogSAcQgNATgXAMQAjALASAcQARAcAAArQAAAjgMAcQgMAcgWAQQgNAKgaAFQgkAGgLAAgAgyCAIA0AAQAbAAAMgMQAKgNABgWQgBgUgKgMQgLgMgcAAIg0AAgAgygwIAuAAQAXAAAJgLQAKgLAAgVQAAgUgKgLQgJgLgXAAIguAAg");
	this.shape_33.setTransform(439.8,151.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC00").s().p("AAzDhIhGi5Ig2BLIAABuIhpAAIAAnBIBpAAIAACqIBsiqICKAAIh6CqICAEXg");
	this.shape_34.setTransform(387.1,151.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC00").s().p("AhODTQgjgVgZg2QgZg1AAhTQAAhwAsg7QAtg9BQAAQBAABAlAiQAkAiASBIIhcAbQgFgVgFgJQgJgQgNgJQgMgJgQABQgjAAgTAmQgOAcAAA9QAABJARAcQARAcAegBQAeABAQgXQAPgXAHgqIBbAlQgJAzgUAiQgUAjgdARQgdASguAAQg2AAgjgWg");
	this.shape_35.setTransform(347.7,151.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC00").s().p("AgzDhIAAnBIBoAAIAAHBg");
	this.shape_36.setTransform(319.7,151.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC00").s().p("AiFDhIAAnBIBpAAIAAFSICiAAIAABvg");
	this.shape_37.setTransform(296,151.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC00").s().p("AhODTQgjgVgZg2QgZg1AAhTQAAhwAsg7QAtg9BQAAQBAABAlAiQAkAiASBIIhcAbQgFgVgFgJQgJgQgNgJQgMgJgQABQgjAAgTAmQgOAcAAA9QAABJARAcQARAcAegBQAeABAQgXQAPgXAHgqIBbAlQgJAzgUAiQgUAjgdARQgdASguAAQg2AAgjgWg");
	this.shape_38.setTransform(261.1,151.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).to({state:[]},1).wait(31));

	// HNY
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(3.5,1,1).p("EAlngT5QAAAggXAXQgWAXggAAQggAAgXgXQgXgXAAggQAAggAXgXQAXgWAgAAQAgAAAWAWQAXAXAAAggEAgsgIQQAAAMgTAIQgTAIgbAAQgbAAgTgIQgTgIAAgMQAAgLATgIQATgIAbAAQAbAAATAIQATAIAAALgAf1FzQAAAjgYAXQgYAZgiAAQgiAAgZgZQgYgXAAgjQAAghAYgZQAZgYAiAAQAiAAAYAYQAYAZAAAhgEAkGgFJQAAAfgWAXQgXAWgfAAQggAAgWgWQgXgXAAgfQAAggAXgWQAWgXAgAAQAfAAAXAXQAWAWAAAggAvp2RQAAAUgPAPQgPAPgUAAQgVAAgPgPQgOgPAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVgAmT4aQAAAhgYAXQgXAXggAAQghAAgXgXQgXgXAAghQAAggAXgYQAXgXAhAAQAgAAAXAXQAYAYAAAggAE5rhQAAAjgZAZQgZAZgjAAQgkAAgZgZQgZgZAAgjQAAgkAZgZQAZgZAkAAQAjAAAZAZQAZAZAAAkgEgiUgQ9QAAAfgWAWQgWAWgfAAQgfAAgWgWQgWgWAAgfQAAgfAWgWQAWgWAfAAQAfAAAWAWQAWAWAAAfgA/YpLQAAAXgQAQQgQAPgWAAQgXAAgQgPQgPgQAAgXQAAgWAPgQQAQgQAXAAQAWAAAQAQQAQAQAAAWgA/HG8QAAATgOANQgNANgSAAQgTAAgNgNQgNgNAAgTQAAgSANgOQANgNATAAQASAAANANQAOAOAAASgEgioARRQAAAVgcAOQgcAOgnAAQgoAAgcgOQgbgOAAgVQAAgUAbgPQAEgCAEgBQAZgLAjAAQAcAAAXAHQAIADAIAEQAcAPAAAUgAT1NzIBaAjIAcALATgNrIAAAAIBgBbAT1NzIgVgJIAAABIAAAAgAi8Y5QAAAUgPAOQgOAOgUAAQgVAAgOgOQgOgOAAgUQAAgVAOgOQAOgPAVAAQAUAAAOAPQAPAOAAAVgA2zWdQAAAigZAZQgYAZgjAAQgiAAgZgZQgYgZAAgiQAAgiAYgZQAZgZAiAAQAjAAAYAZQAZAZAAAig");
	this.shape_39.setTransform(511.2,340.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(9.5,1,1).p("ALQzcIvxGpEA1GANgIAAEFEg0SgM5IGyEyIBJlKA11GGIA/gWIBjgjQHUibFXEZQABABABABA1FRAIEOAAIAvjGIDkEgIDch4IhGkWAsaRZICMheIADgBAltKmIjjBaAprMqIC5g8A7LSfIEsg3IAWplIAAg5A24RbIknAAIgciEIjDAAIhzCsIkniRA00IkIg8G4Egs9AGiIDwAbIB9AAIEiBOEgnzANIIgeAhEgnvAMLIACAAIADACIBFA0Ih4BuIilAAEgkyARHIARgjEgo+APXIDpAAA+gGzImQHgEgp/AKoIFwA/ICMiqEg1FAGpIE2ixIC8CWEgwUgBSIAeEnIkLAAEgwtASrIKcAAIBfhkEgwAATdIKDAAIBLiWEgu8ADrIgmj0");
	this.shape_40.setTransform(678.2,381.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(7.5,1,1).p("AeOjdICwC3IAhAiIo4G6AT/K2IA7AEINjp+Ig+hAAWakUIB5CJIAACVIh7BTIAhkhIAlDJALA3JIBEBSAiw4fIhdDWIA3BXIAeg3Alaz9IAaAeIAcAhIBnJnIAGAiIAGAnIDAAAIBkkvIIZjhIn+ERArw1bIFcAZIA6BFICjLIAsIm+IBkA8IAAARIAnBkAl2kjIhfgoIgwiUIglglIjIAAIgWBGIgmB9IkRh4IhIBBIgkgTIA0gzAlAzfICDKIAxV0IIASDAA610bICjBRIAABuA6IzgIBFCEA5Cy9IAbBbA2lmRIgtk7IgqgUIA7EhIhUAQA6amRIDwAAAyrmLIhmgzAwlzrIAAG+AoblTIAtAAAqklxIAACgAsulBIAAAWABhB4IhSDhIjPA6IAAAyIEXghIBMj5ApKgUIhVGnAp4AAIgnGTAoblTIg/AAAjKnhIjcCCAl2kjICqiZArPnaIC0CHAKjw2QgEACgDABQgNAFgSgCALSxVQgeAWgRAJIAABIAKjxVIAAAfANupdIgVAGIgVCTIguArIg8B2IjkAAIAAgjIDNAAANupdIAOBPIAlgMIHZieIDkiMgAP0poIhTBOIhdBWANop8IAGAfAiJnNIDAgeIBrj4IHvjrAikn4IAAB2IjSBfABIF3IggAAACbChIifDvACbChIAIAKIAnAxIhcDfACgG4IB/AAIAjBTIggDoAB9B7IAeAmAiVAAIIYAAAiJA6IIyAAAGGB2IkvgcAHTkKIhSMIIEOCgIE4k2IAZFoIE7AAAP8k/IgoDBAPOnNIBWCHIgrDPIhwBYAPWmAIg5EiAKFuoIivIiAx81tIBWB1A/jSHIi5DbID/C+INXpYIg3gZIgYAxAQDKoID8AOAE3McIgiBUAiNMeIAYACAgbMeIDoAAADXNpIjyhLIjNBcIloAAIgog7IhGhnIAflFAozM6IFVABArtLiIieAbIhehnIDqAAIiMAuAozM6IhFAFAvpKWIgfgjAx9OvIg3gYAiNMeImmAcApzL7IHmAjAOnHKIjzD8Ik9inArrG2IASETIAyrKAFqI4IgzDkAGDJgIhMC8AEkIQIg3FHA+HLPIDVDkAy5O+IsCIcEAhoAA6ItpJ8");
	this.shape_41.setTransform(504,334.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(4.5,1,1).p("AWNzJIAAhDQDOiZB/BqIBXESIH7iMQBgAxADC1QqWDFpcE5QhkhnAUiQIFAjPIAAhMAWNzJIAADmAKCowIBfAAIiCH+IGulFICgAAIgyGyIIml7IC5CvIgJAHItEKvIkTAAIAAltIlFFPIj6hzIBaryIDmAAgAR5TwIhJAAIBDjVIAoh+IAPgvIBYkXIHlAAICRDIIljI/IiiAAIgEAAIgiAAIh3hbQAxALAlAlQAUAUANAXQAUAmAAAvQAABKg1A1Qg0A1hLAAQhKAAg1g1Qg1g1AAhKQAAglANggQANggAbgbQAjgjAugMQAFgBAFgBQASgDASAAQAWAAATAEAR5TwIAPgCIEugcQDBlgBhjkImaAAQhLBAgeBkQgKAhgFAmgAUIT5IBWBUIARARAPpVuQgMAhgDAvQgDAxAEAgQAFAgAGAIQAHAIAGAMQAGAMAEACQFgDcBZl0QAEgRADgSQgEgOgKgLQgIgKgJgEAVzV1QALAKAcAMQAYANAAAXQAAAJgDAHQgEAIAAADAmd6CQJRhvEfDFIAXB8IhNDZIBrAAIkfLuIgGARIqmAqIigBaIhfg0Ih/AAIh4D4IAolVIg1gPIgyCWIkciAIhQGXInMl9IkfBRIAAEKIB/AAIBdKNIEfAAIAAlAIFNEsIASAAIDsAAIBQqgA1kohIBDkRIhIqeIgCgSIlNBXIAAD+IiaAAIhQjxIkzBXIBQEEIhQAAIAAELICgAAIB5EYIDwhCIhXkmICnAAIBxFHIANAAICaAAIAZg+QBmnBDymFIFyAAICvNSIjXBuIhVi0IkEAAIg3DIIkSiOAv4uJIBujIIBGC5gADjnYIhQFRIouAAIAAB4IDmAAIhBDvIjhAyIAABpIHzAAIhAEdIs8AAIgWAAIBVsLIgWgEIiCgZADjnYIERAAIByklQGrggF8jGANFyXIhfCqQHyhOmThcgAgG2vIhfDXQCAA6B4ieQg/iDhaAQgAn62sIB/AAIheFoIBrGwICMAAIBLkxQFXgxDdjhEgioAV3IiviCIC+jDIj1kJQBTh6Cig/IDhD6IGGjDQCYAUgHB5QgBASgEAVANVVvIAngMIhpj6QDWgqCDhiQAVhEhGhWQAAAAAAgBAQ7NCQgBAAAAAAQAAgBgBAAQlnjcnEBeQguAJgvANIgHANIhSCTICVAAIhpIIID/AAIBGjwIDNEdIC8g+AI8NWIhBCMQBxA8CYiMQiBhhhHAlgAQ+UEQgOALgMAPQgMARgIAJQgKAIgKASQgCACgKATQgCAEgFADAPsVmQgCAEgBAEAkULZIEwBaIAAJdIj+AyIAAigIkTAAIiMCgIjIhuQDGltFvkOgAmvRfICbiWIAACggAwNSAIjMg1IAyhaIGBA3IBfiHIlFhVIknAZIAABGIjNCWIhQHCIKFAAIBGh4ImQg3IAAhfIC0AAIBZhyIABgBIgEgBAHq2wQHNgpHWEQ");
	this.shape_42.setTransform(527.7,344.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#00B670","#000000"],[0.027,1],-0.8,1.8,0,-0.8,1.8,7.8).s().p("AgmAmQgPgQAAgWQAAgWAPgPQARgQAVAAQAXAAAPAQQAQAPAAAWQAAAWgQAQQgPAQgXAAQgVAAgRgQg");
	this.shape_43.setTransform(304.9,281.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#00B670","#000000"],[0.027,1],-0.9,0.5,0,-0.9,0.5,10.5).s().p("AhCAiQgcgNAAgVQAAgTAcgPIAHgDQAagLAhAAQAdAAAWAHIAQAHQAcAPAAATQAAAVgcANQgcAPgnAAQgmAAgcgPg");
	this.shape_44.setTransform(280,450.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#00B670","#000000"],[0.027,1],0.2,-2.7,0,0.2,-2.7,11.5).s().p("Ag3A4QgXgXAAghQAAgfAXgYQAXgXAgAAQAhAAAWAXQAYAYAAAfQAAAhgYAXQgWAXghAAQggAAgXgXg");
	this.shape_45.setTransform(462.9,183.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#00B670","#000000"],[0.027,1],-0.6,-0.2,0,-0.6,-0.2,8.9).s().p("Ag5A6QgZgYAAgiQAAghAZgZQAYgYAhAAQAiAAAYAYQAYAZAAAhQAAAigYAYQgYAYgiABQghgBgYgYg");
	this.shape_46.setTransform(706.7,377.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#00B670","#000000"],[0.027,1],-0.5,3,0,-0.5,3,11.4).s().p("Ag1A2QgWgXAAgfQAAgfAWgWQAWgWAfAAQAfAAAXAWQAWAWABAfQgBAfgWAXQgXAWgfABQgfgBgWgWg");
	this.shape_47.setTransform(734.6,307.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FF0000","#000000"],[0,1],2,-1.5,0,2,-1.5,10.2).s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_48.setTransform(284,231.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FF0000","#000000"],[0,1],2.7,6.7,0,2.7,6.7,15.5).s().p("Ag6A7QgYgYAAgjQAAgiAYgYQAZgYAhgBQAiABAZAYQAZAYgBAiQABAjgZAYQgZAYgiABQghgBgZgYg");
	this.shape_49.setTransform(356.8,483.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FF0000","#000000"],[0,1],-1.5,0.7,0,-1.5,0.7,10.2).s().p("Ag7A9QgZgZAAgkQAAgiAZgaQAYgZAjAAQAjAAAZAZQAaAaAAAiQAAAkgaAZQgZAYgjAAQgjAAgYgYg");
	this.shape_50.setTransform(534,266.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FF0000","#000000"],[0,1],0.8,-3.2,0,0.8,-3.2,11.9).s().p("Ag2A3QgWgXgBggQABgfAWgXQAXgWAfgBQAgABAXAWQAXAXgBAfQABAggXAXQgXAXgggBQgfABgXgXg");
	this.shape_51.setTransform(744.2,212.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(73,38,210,0)").s().p("Ag4AKQgXgEAAgFQAAgEAXgEQAYgDAgAAQAhAAAYADQAXAEAAAEQAAAEgOADQgWgHgdAAQghAAgaAKIgMgBg");
	this.shape_52.setTransform(278.5,445.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("ASdX6QgEgCgGgMQgGgNgHgHQgGgIgFggQgEggADgyQADgvAMghQAFgDACgDQgCADgFADIADgHIAEABIAWAHQgNAfAAAlQAABLA1A0QA1A1BKAAQBLAAA0g1QA1g0AAhLQAAgugUgmIAiAAIgRgRIhWhVIBWBVIgRARQgNgXgUgUQglgmgxgKQgTgFgWAAQgSAAgSAEIgBgUIEugdQDBlfBhjlImaAAQhLBAgeBlQgKAhgFAlIgcgLIAcALIhNF3IhJAAIBDjUIAoh+IAPgwIBYkXIHlAAICRDIIljI/IiiABIgEAAIAEAAIAAAXQALAJAcAMQAYANAAAXQAAAKgDAHQgEAHAAAEQAAgEAEgHIAGACQg3DqigAAQheAAiDhSgAkVXTQgOgOAAgUQAAgVAOgOQAOgOAVAAQAUAAAOAOQAPAOAAAVQAAAUgPAOQgOAPgUAAQgVAAgOgPgAVmMZgEggZAFUQgNgNAAgTQAAgSANgOQANgNATAAQASAAANANQAOAOAAASQAAATgOANQgNANgSAAQgTAAgNgNgAe4qEQgTgIAAgLQAAgMATgIQATgIAbAAQAbAAATAIQATAIAAAMQAAALgTAIQgTAIgbAAQgbAAgTgIgAxE32QgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPg");
	this.shape_53.setTransform(511.7,353.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FF9C17","#000000"],[0,1],3.5,8,0,3.5,8,27.2).s().p("Ah+B/Qg1g1AAhKQAAgkANggQANggAbgbQAjgjAugLIAKgDQARgDASAAQAVAAAUAEIB3BcQAUAmAAAtQAABKg1A1Qg0A1hLAAQhJAAg1g1gACghTgAApivQAxALAlAlQAUAUANAYg");
	this.shape_54.setTransform(647.4,490);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FF9C17","#000000"],[0,1],5.9,7,0,5.9,7,44.8).s().p("AjhhFQAFglAKgiQAehkBLhAIGZAAQhiDkjAFfIkuAdIgPABg");
	this.shape_55.setTransform(672.5,440);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FF9C17","#000000"],[0,1],-26.5,16.1,0,-26.5,16.1,83.8).s().p("AiaB0IhGDwIj/AAIBpoHIiWAAIBTiTIAHgNQAvgNAtgJQHTibFXEZIgCgBQj6iZkoAAIAAAAIAAAAQh8AAiEAbIgGABIAGgBQCEgbB8AAIAAAAIAAAAQEoAAD6CZIACABIACABIAAABIAAAAIABAAQBFBWgUBEQiEBhjVAqIBpD6IgnANIgDABIi8A9gAgnjGIhBCMQBvA7CZiLQhehGg/AAQgXAAgTAKgAHWjZIgCgCIACACgAm5k2IBjgjg");
	this.shape_56.setTransform(588.9,449.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FF9C17","#000000"],[0,1],32,12.3,0,32,12.3,76.8).s().p("AC0DVIkSAAIiMCgIjIhvQDGlrFukOIExBaIAAJbIj/AzgAgYARICaAKIAAifg");
	this.shape_57.setTransform(487,454.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FF9C17","#000000"],[0,1],-26.7,20.8,0,-26.7,20.8,86).s().p("AnEFcIBQnBIDOiXIAAhGIEmgYIFFBUIhgCHImAg2IgxBaIDKA1IADABIADAAIAAACIgDgCIADACIhaBxIizAAIAABeIGQA3IhGB5g");
	this.shape_58.setTransform(411.2,463.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#FF9C17","#000000"],[0,1],-18.7,13.8,0,-18.7,13.8,79.1).s().p("Am/ECIC+jEIj1kHQBUh6ChhAIDhD7IGFjEQCYAVgGB5QgBASgFAUIsBIbg");
	this.shape_59.setTransform(333.2,445.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#FF9C17","#000000"],[0,1],-45.7,22.5,0,-45.7,22.5,135.5).s().p("AkQIrIAAltIlEFPIj7hzIBaryIDnAAICHjSIBeAAIiBH+IGtlFICfAAIgxGyIIml7IC4CvIgJAIIivi3ICvC3ItDKugANGiDg");
	this.shape_60.setTransform(631.2,343.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#FF9C17","#000000"],[0,1],-14.8,34.3,0,-14.8,34.3,117.4).s().p("An0I4IgWAAIBVsLIgWgEIiDgZIB5j3IB/AAIBfAzICghaIKmgpIhQFQIouAAIAAB4IDlAAIhBDvIjgAyIAABpIHzAAIhBEdg");
	this.shape_61.setTransform(491.3,353.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#FF9C17","#000000"],[0,1],4.9,6,0,4.9,6,79.9).s().p("AmCINIhdqNIh/AAIAAkLIEfhQIHLF8IBQmXIEcCAIAyiWIA1AQIgoFUIhQKhIjsAAIgSAAIlMktIAAFBg");
	this.shape_62.setTransform(375.6,346.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#FF9C17","#000000"],[0,1],0.5,2.8,0,0.5,2.8,75.1).s().p("AqfDUIFAjPIAAhMIAAjmIAAhDQDPiZB/BrIBWERIH7iMQBgAyADC0QqXDEpbE6QhjhoATiPg");
	this.shape_63.setTransform(704.9,251.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#FF9C17","#000000"],[0,1],-15.6,9.6,0,-15.6,9.6,84.1).s().p("ApUHvIAGgRIEfrtIhrAAIBOjZQHLgpHWEPIAADmQl8DFmqAgIhxEmgAhQgmQHwhOmThcg");
	this.shape_64.setTransform(610.1,247.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#FF9C17","#000000"],[0,1],13.1,-1.2,0,13.1,-1.2,72.5).s().p("AlmILIhqmwIBdlnIh/AAIBejWQJRhvEfDFIAXB8IhNDZQjdDhlYAwIhLExgAABkPIheDXQCBA6B3ieQg4h1hOAAQgKAAgKACg");
	this.shape_65.setTransform(526.8,225.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#FF9C17","#000000"],[0,1],7.9,22.5,0,7.9,22.5,74).s().p("Am7FcQBmnADxmFIFxAAICvNRIjXBuIhVi0IkDAAIg3DIgAhpAyICzgPIhGi4g");
	this.shape_66.setTransform(436.5,248.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#FF9C17","#000000"],[0,1],-15.4,3.9,0,-15.4,3.9,77.1).s().p("Ak5DZIigAAIAAkKIBQAAIhQkEIEzhXIBQDwICZAAIAAj9IFNhXIACASIBIKdIhDERIiaAAIgNAAIhxlHIimAAIBWElIjvBDg");
	this.shape_67.setTransform(348.9,243.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},23).wait(9));

	// HNY ref
	this.instance = new lib.HNYref();
	this.instance.parent = this;
	this.instance.setTransform(512.9,384.9,1,1,0,0,0,447.9,335.9);
	this.instance.alpha = 0.328;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(582,483.7,775.9,924.4);
// library properties:
lib.properties = {
	id: '84E5F67B84266544A13E33226F11ADC9',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#3300FF",
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
an.compositions['84E5F67B84266544A13E33226F11ADC9'] = {
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