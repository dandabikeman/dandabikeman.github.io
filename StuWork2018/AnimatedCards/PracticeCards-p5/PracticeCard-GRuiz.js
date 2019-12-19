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


(lib.FLap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EgragKFMAoYAULMAudgULg");
	this.shape.setTransform(277.9,64.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgragKFMBW1AAAMgudAULg");
	this.shape_1.setTransform(277.9,64.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FLap, new cjs.Rectangle(-1.5,-1.5,558.8,132.2), null);


(lib.Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("EAqdAUEIAAA1MhW1AAAIAAg1MAAAgo8MBYxAAAMAAAAo8Ih8AAMhW1AAA");
	this.shape.setTransform(284.1,133.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(95,95,95,0.498)").s().p("EAqdAUeMhW1AAAMAAAgo7MBYxAAAMAAAAo7g");
	this.shape_1.setTransform(284.1,131);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("EgraAAbIAAg1MBW1AAAIAAA1g");
	this.shape_2.setTransform(277.9,264.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Rounded
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape_4.setTransform(50,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_5.setTransform(50,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_7.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Squared
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_8.setTransform(50,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_9.setTransform(50,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_10.setTransform(50,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_11.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_10},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_8}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.PracticeCardGRuiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop(); // This will make the main timeline stop on the current frame
		
		this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_30 = function() {
		this.stop();
		
		this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.v.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_31 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(1).call(this.frame_31).wait(2));

	// Message
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmAwQgJgKAAgSQAAgeAUgYQAUgZAYAAQAMAAAKALQAJAMAAAPQAAAagTAcQgTAbgZAAQgOAAgJgMgAgRgdQgMAVAAAbQAAAOAGAIQAGAJAJAAQAPAAALgVQAMgVAAgbQAAgMgGgKQgHgIgJAAQgOAAgLAUg");
	this.shape.setTransform(444.9,471.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfA7QAAgHADgRIAOhEIgSAAIAAgGQAZgDAMgeIAGAAIgGAdIAcAAIgBAKIgdAAIgOBNIgBAGQAAAJAIAAQAMAAAUgSIAEAEQgdAcgTAAQgPAAAAgOg");
	this.shape_1.setTransform(435.3,470.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcBSIABgGQAMAAACgCQAEgDACgMIALg9IABgIQAAgJgIAAIgMACIABgHIAkgJIAGAAIgRBXIgBANQAAAFACACQADACAMAAIAAAGgAALg+QgCgDAAgFQAAgEACgEQADgDAFAAQAEAAADADQADAEAAAEQAAAFgDADQgDAEgEAAQgFAAgDgEg");
	this.shape_2.setTransform(426.5,468.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglBmIABgGIAEAAQAKAAADgFQADgFAEgUIAaiIIAAgGQABgJgKAAIgKACIAAgGIAkgMIAHAAIgjCyIgBALQgBAFADABQACACAIAAIAGAAIgBAGg");
	this.shape_3.setTransform(419.5,466.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgzAYQAAgfAagaQAagaAqAAIAJAAIgQBTIgBAJQAAAOAOgCIgBAFIglAJIAEgWIAAAAQgQAXgUAAQgeAAAAgkgAgSgbQgQATAAAbQAAAbAWAAQALAAAIgJIAKgKIAPhKIgJAAQgZAAgQAUg");
	this.shape_4.setTransform(409.4,471.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag0A4IAAgGIBShjIghAAQgWAAgEATIgGAAIAFgZIBTAAIAAAGIhSBjIAiAAQAQAAAGgFQAFgFADgMIAFAAIgFAcg");
	this.shape_5.setTransform(397.3,471.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAFA6IABgGQALAAACgDQAEgEACgLIALg1IABgGQAAgIgGgGQgEgEgIAAQgOgBgSAWIgLA2IgBALQAAAFADACQAEACAIAAIgBAGIguAAIABgGQAKgBAEgQIAMg+IAAgFQABgKgIAAQgFAAgHACIABgIIAjgJIAHAAIgEAUIAAAAQAKgKAHgFQAIgFAKAAQANAAAIAIQAIAIAAAQIgBAMIgKA0IgBAFQAAAFADABQAEACAIAAIgBAGg");
	this.shape_6.setTransform(384.6,471.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgmAwQgJgKAAgSQAAgeAUgYQAUgZAYAAQAMAAAKALQAJAMAAAPQAAAagTAcQgTAbgZAAQgOAAgJgMgAgRgdQgMAVAAAbQAAAOAGAIQAGAJAJAAQAPAAALgVQAMgVAAgbQAAgMgGgKQgHgIgJAAQgOAAgLAUg");
	this.shape_7.setTransform(372.7,471.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag2BPQgTgWAAgkQAAgwAfgjQAfgiAmAAQAJAAALACIAMACQAFAAADgIIAGAAIgHAlIgGAAQACgLgLgHQgLgHgPAAQgdAAgXAdQgXAeAAAwQAAAjAOAUQAOAUAXAAQALAAALgGIAJgwIABgGQAAgLgOAAIgFAAIABgGIA7AAIgBAGQgQAAgEAWIgJAwQgaAIgTAAQghAAgUgWg");
	this.shape_8.setTransform(359,467.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAGIADgLIBAAAIgDALg");
	this.shape_9.setTransform(344.8,471.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYBjQgEgEAAgGQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAGgEAEQgEAFgGAAQgFAAgEgFgAgMA6IASiQQACgRAKAAQALAAAAAPIgBALIgjCHg");
	this.shape_10.setTransform(512.1,377.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgmAwQgJgLAAgRQAAgeAUgYQAUgZAYAAQAMAAAKAMQAJALAAAQQAAAagTAbQgTAbgZAAQgOAAgJgMgAgRgcQgMAUAAAaQAAAPAGAJQAGAIAJAAQAPAAALgVQAMgUAAgcQAAgNgGgJQgHgIgJAAQgOAAgLAVg");
	this.shape_11.setTransform(501.4,381.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAKBmIACgGQAIgBADgFQADgEADgNIAJgsIAAgKQAAgTgSAAQgPAAgQATIgMA/IAAAFQAAAJAMAAIgBAGIgrAAIABgGQAGAAADgFQACgFADgNIAbiOIABgKQAAgFgCgCQgEgBgJAAIABgFIAegJIAHAAIgTBqIAAABQARgTATAAQAMAAAIAJQAIAIAAAPIgBALIgJAzIgBAGQgBAIAMABIgBAGg");
	this.shape_12.setTransform(488.4,377);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggAxQgJgMAAgRQAAgbATgaQATgaAUABIALABIAFAAQAEAAACgCIADAAIgDAgIgFAAQABgKgGgGQgFgFgKAAQgOgBgLAUQgLAUAAAZQAAAeAWABQAPAAAQgPIADAEQgXAZgUgBQgOAAgJgLg");
	this.shape_13.setTransform(478,381.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgpA0QgHgJAAgNQAAgIACgMIAIgmIABgHQAAgJgLAAIgFAAIACgGIAfgJIAGAAIgPBKIgBANQAAAIAEAGQAFAFAGAAQALAAAKgKQAMgKAAgBIALg3IABgGQAAgKgJABIgGAAIABgGIAfgJIAHAAIgQBRIgCAOQAAANANgCIgBAGIgkAGIAEgWIAAgBQgXAYgRAAQgLAAgGgIg");
	this.shape_14.setTransform(466.6,381.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AATBfIABgGQAIAAAFgEQAGgDADgQIAZh9IgBgBIhaCbIgGAAIAFiaIgBgBIgzB+QgEAKAAAEQAAAJAOAAIgBAGIgoAAIABgGQANAAAMgdIA3iHQgDgMgVgBIABgGIAuAAIgECSIABAAIBUiSIAgAAIgBAGQgKACgEAGQgDAFgCANIgaCAIgBALQAAAMAOAAIgBAGg");
	this.shape_15.setTransform(449.7,377.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgmAwQgJgLAAgRQAAgeAUgYQAUgZAYAAQAMAAAKAMQAJALAAAQQAAAagTAbQgTAbgZAAQgOAAgJgMgAgRgcQgMAUAAAaQAAAPAGAJQAGAIAJAAQAPAAALgVQAMgUAAgcQAAgNgGgJQgHgIgJAAQgOAAgLAVg");
	this.shape_16.setTransform(425.9,381.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgsA6IABgGQAJAAADgEQADgDADgPIAKg0IABgKQABgKgIAAIgLABIACgHIAegIIAHAAIgHArIAAABQAOgtATAAQAGAAAGAJIgLAVQgJgKgEAAQgFAAgJAUQgIAUgEAQIgDASIgBAFQAAAKALAAIAFAAIgBAGg");
	this.shape_17.setTransform(415.9,381.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghAyQgJgKAAgSQAAgeAVgaQAUgZAXAAQAKAAAFAFQAGAGAAAIQAAAPgSAOQgSALgeAGIgBAIQAAAeAZAAQASAAARgYIADAFQgLASgLAJQgKAIgPAAQgQAAgJgKgAgKggQgKAPgCARQAugJAAgZQAAgEgEgFQgEgEgFAAQgLAAgKAPg");
	this.shape_18.setTransform(406.6,381.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcBSIABgGQALAAAEgCQACgDADgMIAMg9IABgIQgBgJgHAAIgNACIACgHIAkgJIAFAAIgRBXIgBANQAAAFADACQADACALAAIgBAGgAALg+QgDgDAAgFQAAgEADgEQADgDAFAAQAEAAADADQADAEAAAEQAAAFgDADQgDAEgEAAQgFAAgDgEg");
	this.shape_19.setTransform(397.1,379);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgpA0QgHgJAAgNQAAgIACgMIAIgmIABgHQAAgJgLAAIgFAAIACgGIAfgJIAGAAIgPBKIgBANQAAAIAEAGQAFAFAGAAQALAAAKgKQAMgKAAgBIALg3IABgGQAAgKgJABIgGAAIABgGIAfgJIAHAAIgQBRIgCAOQAAANANgCIgBAGIgkAGIAEgWIAAgBQgXAYgRAAQgLAAgGgIg");
	this.shape_20.setTransform(387.5,381.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGBpIAUhrIAAgBQgPASgTAAQgPAAgIgKQgIgKAAgSQAAgjAegYQAdgYAsACIgiCuIgBAJQAAALAJAAIALAAIgCAGIghAJgAgRhLQgQASAAAdQAAANAHAJQAGAHALAAQAJAAAIgGIAJgJIAPhOIgKAAQgXAAgQARg");
	this.shape_21.setTransform(374.7,386);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghAyQgJgKAAgSQAAgeAVgaQAUgZAXAAQAKAAAFAFQAGAGAAAIQAAAPgSAOQgSALgeAGIgBAIQAAAeAZAAQASAAARgYIADAFQgLASgLAJQgKAIgPAAQgQAAgJgKgAgKggQgKAPgCARQAugJAAgZQAAgEgEgFQgEgEgFAAQgLAAgKAPg");
	this.shape_22.setTransform(356.8,381.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag7BiIAAgGQALAAAEgGQAEgFADgLIAdiXIgdAAQgVAAgHARIgFAAIAGghIAGAAQACAEADABQADABAPAAIBMAAQAUAAAEgGIAGAAIgHAhIgFAAQgBgJgDgEQgDgEgLAAIgcAAIgdCXIgBALQAAALAOAAIgBAGg");
	this.shape_23.setTransform(350,377.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYA6IgDgBIgFACIgGAAIAGgeIAGAAIgBAGQAAAHAGAFQAFAGAHAAQAIAAAFgGQAGgFAAgHQAAgLgOgUQgPgTAAgJQAAgPAKgKQAJgKAOAAIALABIAFABIACAAIACgBIAFAAIgGAcIgFAAQgDgWgRABQgGAAgDAEQgFAEAAAGQAAAKAMARQAOAQADAIQADAHAAAIQAAANgLAJQgLAJgRAAQgGAAgFgCg");
	this.shape_24.setTransform(572.8,291.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghAyQgJgKAAgSQAAgfAVgYQAUgaAXAAQAKAAAFAFQAGAFAAAJQAAAPgSANQgSAMgeAFIgBAJQAAAeAZAAQASAAARgYIADAEQgLATgLAIQgKAJgPAAQgQAAgJgKgAgKggQgKAOgCASQAugJAAgYQAAgFgEgFQgEgEgFAAQgLAAgKAPg");
	this.shape_25.setTransform(564.2,291.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgsA6IABgGQAJAAADgDQADgEADgPIALgzIAAgLQAAgKgHAAIgLABIACgHIAfgIIAGAAIgHArIAAABQAOgtASAAQAIAAAFAJIgLAVQgJgKgEAAQgFAAgJAUQgJATgDARIgDASIAAAFQAAAKAKAAIAFAAIgBAGg");
	this.shape_26.setTransform(555.1,291.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgxBcQgJgMAAgRQAAgeAVgYQAXgYAnABIAKg1IACgLQAAgKgKAAIgMABIACgHIAkgJIAGAAIghCpIgBANQAAAJAKAAIALgBIgCAHIgqAJIADgQQgTARgOAAQgMAAgJgMgAgbALQgNATAAAaQAAAPAHAJQAHAKAKAAQAMAAALgMIARhUIgPAAQgXAAgNARg");
	this.shape_27.setTransform(544.9,287.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgzAYQAAgfAagaQAagaAqAAIAJAAIgQBTIgBAJQAAAOAOgCIgBAFIglAJIAEgWIAAAAQgQAXgUAAQgeAAAAgkgAgSgbQgQATAAAbQAAAbAWAAQALAAAIgJIAKgKIAPhKIgJAAQgZAAgQAUg");
	this.shape_28.setTransform(531.8,291.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AATBfIABgGQAIAAAFgDQAGgEADgQIAZh9IgBgBIhaCbIgGAAIAFiaIgBgBIgzB+QgEAJAAAFQAAAJAOAAIgBAGIgoAAIABgGQANAAAMgdIA3iHQgDgLgVgCIABgGIAuAAIgECSIABAAIBUiSIAgAAIgBAGQgKACgEAFQgDAGgCAMIgaCBIgBALQAAAMAOAAIgBAGg");
	this.shape_29.setTransform(515.4,287.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYA6IgDgBIgFACIgGAAIAGgeIAGAAIgBAGQAAAHAGAFQAFAGAHAAQAIAAAFgGQAGgFAAgHQAAgLgOgUQgPgTAAgJQAAgPAKgKQAJgKAOAAIALABIAFABIACAAIACgBIAFAAIgGAcIgFAAQgDgWgRABQgGAAgDAEQgFAEAAAGQAAAKAMARQAOAQADAIQADAHAAAIQAAANgLAJQgLAJgRAAQgGAAgFgCg");
	this.shape_30.setTransform(493.4,291.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgzAYQAAgfAagaQAagaAqAAIAJAAIgQBTIgBAJQAAAOAOgCIgBAFIglAJIAEgWIAAAAQgQAXgUAAQgeAAAAgkgAgSgbQgQATAAAbQAAAbAWAAQALAAAIgJIAKgKIAPhKIgJAAQgZAAgQAUg");
	this.shape_31.setTransform(483.3,291.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AglBmIABgGIAEAAQAKAAADgFQADgFAEgUIAaiIIAAgGQAAgJgJAAIgLACIABgGIAkgMIAHAAIgkCyIgBALQABAFACABQACACAIAAIAGAAIgBAGg");
	this.shape_32.setTransform(473.3,287.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AghAyQgJgKAAgSQAAgfAVgYQAUgaAXAAQAKAAAFAFQAGAFAAAJQAAAPgSANQgSAMgeAFIgBAJQAAAeAZAAQASAAARgYIADAEQgLATgLAIQgKAJgPAAQgQAAgJgKgAgKggQgKAOgCASQAugJAAgYQAAgFgEgFQgEgEgFAAQgLAAgKAPg");
	this.shape_33.setTransform(457.6,291.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgxBcQgKgMAAgRQAAgeAXgYQAVgYAoABIALg1IABgLQAAgKgKAAIgLABIABgHIAlgJIAGAAIghCpIgCANQAAAJALAAIAKgBIgBAHIgrAJIADgQQgTARgOAAQgMAAgJgMgAgbALQgNATAAAaQAAAPAHAJQAHAKAKAAQAMAAALgMIARhUIgPAAQgXAAgNARg");
	this.shape_34.setTransform(446.8,287.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgzAYQAAgfAagaQAagaAqAAIAJAAIgQBTIgBAJQAAAOAOgCIgBAFIglAJIAEgWIAAAAQgQAXgUAAQgeAAAAgkgAgSgbQgQATAAAbQAAAbAWAAQALAAAIgJIAKgKIAPhKIgJAAQgZAAgQAUg");
	this.shape_35.setTransform(426.6,291.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgcBSIABgGQALAAAEgCQADgDACgMIAMg9IABgIQgBgJgHAAIgNACIACgHIAkgJIAFAAIgRBXIgBANQAAAFADACQADACALAAIgBAGgAALg+QgDgDAAgFQAAgEADgEQADgDAFAAQAEAAADADQADAEAAAEQAAAFgDADQgDAEgEAAQgFAAgDgEg");
	this.shape_36.setTransform(416,289.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhVBhIABgGQAKAAAFgFQAFgFACgNIAeiXQgNADgOALIgCgEQAVgXAhAAQApAAAaAbQAaAcAAApQAAApgaAdQgbAbgrAAgAgpBIIAAADQAAAOAZAAQAmAAAVgWQATgYABgmQgBglgSgaQgUgbghgBg");
	this.shape_37.setTransform(403.2,287.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag0A4IAAgGIBShjIghAAQgWAAgEATIgGAAIAFgZIBTAAIAAAGIhSBjIAiAAQAQAAAGgFQAFgFADgMIAFAAIgFAcg");
	this.shape_38.setTransform(381.4,291.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgcBSIABgGQAMAAACgCQADgDAEgMIAKg9IABgIQABgJgJAAIgLACIABgHIAkgJIAGAAIgRBXIgCANQAAAFADACQACACAMAAIgBAGgAAMg+QgDgDgBgFQABgEADgEQADgDAEAAQAEAAADADQADAEAAAEQAAAFgDADQgDAEgEAAQgEAAgDgEg");
	this.shape_39.setTransform(371.3,289.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AglBmIABgGIAEAAQAKAAADgFQADgFAEgUIAaiIIABgGQAAgJgJAAIgLACIABgGIAkgMIAGAAIgjCyIgCALQAAAFADABQACACAIAAIAGAAIgBAGg");
	this.shape_40.setTransform(364.3,287.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AghAyQgJgKAAgSQAAgfAVgYQAUgaAXAAQAKAAAFAFQAGAFAAAJQAAAPgSANQgSAMgeAFIgBAJQAAAeAZAAQASAAARgYIADAEQgLATgLAIQgKAJgPAAQgQAAgJgKgAgKggQgKAOgCASQAugJAAgYQAAgFgEgFQgEgEgFAAQgLAAgKAPg");
	this.shape_41.setTransform(355.8,291.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhDBfIABgGQAJAAAFgFQAEgFADgQIAaiCIABgJQAAgMgNAAIgDAAIABgGIBlAAIgGAeIgFAAIAAgHQAAgJgEgCQgDgDgKABIgjAAIgPBOIAfAAQAMgBAFgEQADgDADgJIAGAAIgJArIgFAAQgCgKgDgEQgEgFgOABIgYAAIgOBKQgDANASAAIgBAGg");
	this.shape_42.setTransform(347,287.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(3.8,1,1).p("EBBRgpMQAAA+gsAsQgsAsg+AAQg+AAgsgsQgsgsAAg+QAAg+AsgsQAsgsA+AAQA+AAAsAsQAsAsAAA+gEA4IAo0QAABJgzAzQgzAzhJAAQhIAAg0gzQgzgzAAhJQAAhIAzg0QA0gzBIAAQBJAAAzAzQAzA0AABIgEg7ygfWQAABIg0AzQgzA0hIAAQhJAAgzg0QgzgzAAhIQAAhJAzgzQAzgzBJAAQBIAAAzAzQA0AzAABJgEg1sAbOQAABJg0AzQgzAzhIAAQhJAAgzgzQgzgzAAhJQAAhIAzg0QAzgzBJAAQBIAAAzAzQA0A0AABIg");
	this.shape_43.setTransform(499.3,376.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(7,1,1).p("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");
	this.shape_44.setTransform(499.5,383.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF3399").s().p("Eg76APIQhBhugth7QgoAohSB4QhSBkhWAAQhAAAgtgxQgzg4AAhfQAAhNAUg7IAohyQgVAphGAxQhVA8hFAAQhNAAglgyQgfgoAAg8QAAhoAtg7QAhgrBmhAQhggqgxhGQgthDAAhWQAAiBBkheQBVhRBQAAQATAAAmAHQAlAFAfAIIAhgEQgDgzAAgPQAAi+BQhuQBChaBPAAQCDAABGCjQATAtAeBjQAcBfARAmQA0g/AxgrQBehUBLAAQBDAAA1BbQAyBUAABaQAAA+g7BwQgtBUgQAQQBNALBRBpQBSBpAABeQAAB7hnBkQgeAcg2ApQgxAngOAOQgVAXgMBKQgIAsgMBlQgLBYgUArQgZA5guAAQhZAAhqixgEhAfACYQg0A0AABIQAABIA0AzQAzA0BJAAQBIAAAzg0QA0gzgBhIQABhIg0g0QgzgzhIAAQhJAAgzAzgEhDQgC4IgHheIAHBegEA9BAGpQgUhAAAhMIACgLQAIgOASheQhtBRgeASQhjA8hpAAQhDAAgcgdQgegfAAhLQAAgzA8hKIBWhoIAEgFIgKAAQgrAWhGAVQhZAag6AAQhlAAhFg7QhGg9AAheQAAiACUhTQCAhHDMgXQhUgxgsgwQg+hEAAhQQAAhNA8gwQA/gyBrAAQAJAACYAjICaAjQAMAAAOgvQAShBAMgmQAwiWBWAAQA+AABWBuQBDBXAKAhQAlgSBDguQA9gkA8AAQA7AAAuAzQAyA2AABQQAAAmhOBMQhXBVgPAuQA7AOA9AqQBQA4AAA/QAABRhjA+IhYAzQg2AggdAdQAaANAvArQA5A1AAAfQAABHiTBAQh9A2hOAAQAJAkgKA7QgLA8gdA4QhKCLh9AAQhFAAgfhkgEA9JACmIAMg9IgMA9gEA9PgHLQgsAsAAA+QAAA+AsAsQAsAsA+AAQA+AAAsgsQAsgsAAg+QAAg+gsgsQgsgsg+AAQg+AAgsAsg");
	this.shape_45.setTransform(499.5,148.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF99FF").s().p("AAoS6QhFhSAAiKQAAgrAUg/QAOgvAEgYIhDBPQgkAqgbAUQg/AuiCAAQivAAhkhkQhuhuAAjXQAAh4Aqh3QAnhvAxgtIg6AUQg9AUgfAAQhYAAg+hQQg8hNAAhmQAAhyA/hmQA+hiBLgQQhXg4gwhXQgthTAAheQAAhHALgTQAKgUAsAAQCGAACsCFQAwAmBQBHQBKBEAbAUQAym9B1jNQBgiqCIAAQBFAAAzBQQA8BeAAChQAACZgUBuQgKA7gUBJIAAAKIADgIIAAAAQAPgaA7gvQBNg7AzAAQCHAABQB4QBQB5AADRQAACphPCBQgoBDhHA/QA5AABCAiQBHAkA/BCQCPCWAACvQAABygyBMQguBGg7AAQh1AAhEiBIAAgLIAAAKIAAABQAGC9hkCZQhvCnilAAQhvAAhFhQgAAJMtIALgNIgKAAIgBANIAAAAgAIIC+IAKAAIAAgBIgKABgAkRiZQgzA0AABIQAABIAzAzQA0A0BJAAQBIAAAzg0QAygzAAhIQAAhIgyg0QgzgyhIAAQhJAAg0Ayg");
	this.shape_46.setTransform(153,553.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF66FF").s().p("AEANVQhLg1gph4QiMBQgzAYQhNAkh5AAQhhAAgggeQgpglAAhxQAAhUAXg4QAOgjAshDQARgNAMgPIgKAAIgTAcQgmAfg+ATQhHAWhLAAQhhAAgmgeQgogfAAhUQAAhVBVh/QA3hUA7guIAGgFQA3gTAKgSQghANggAYIgHACIAAAAIgBABQg+ATgtAAQiBAAhHgxQhGgyAAhaQAAiAB4hSQBnhGB1AAQAyAABMAWQBOAWAkAaQhajEAAg2QAAgtAegZQAZgUAeAAQBAAABOApQAtAXBYA4QApAYAyBRIAfAzQA3jiBShyQBGhgBLAAQAzAAAwA2QApAvAdBNQAbBKAFBDQAFBHgVAeIAAAyQAQgFBDgiQBEgfAnAAQBDAAA1AoQAyAnAAApQAABghSBtQhHBghDAdQBZAMBsCLQBnCEAABRQAABzh8ArQhPAainABIAxB4QApBjAAAVQAABMhGAsQg+AohYAAQhyAAhGgvgAhni3QgzA0AABJQAABHAzAzQAzAzBIAAQBJAAAzgzQAzgzAAhHQAAhJgzg0QgzgzhJAAQhIAAgzAzgABGmZQgGgHgfgvIgDAOIADgOQAfAvAGAHg");
	this.shape_47.setTransform(839,643.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("EAzdAqwQgzgzAAhJQAAhIAzg0QA0gzBIAAQBJAAAzAzQAzA0AABIQAABJgzAzQgzAzhJAAQhIAAg0gzgEg6XAdKQgzgzAAhJQAAhIAzg0QAzgzBJAAQBIAAAzAzQA0A0AABIQAABJg0AzQgzAzhIAAQhJAAgzgzgEhAdgdbQgzgzAAhIQAAhJAzgzQAzgzBJAAQBIAAAzAzQA0AzAABJQAABIg0AzQgzA0hIAAQhJAAgzg0gEA9RgniQgsgsAAg+QAAg+AsgsQAsgsA+AAQA+AAAsAsQAsAsAAA+QAAA+gsAsQgsAsg+AAQg+AAgsgsg");
	this.shape_48.setTransform(499.3,376.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("EAAFAsWQgkgHhigxIgHAMQnDkHnQp9Qi0j4ivkkQilkVihk9IhljOQkxp2jfp3QjAolAAiRQAAkdCSkNQCMj/D/jJQD8jJFBhuQFMh0FhABQNygBgfVxIgDBLIAAAUIAHgRQALgiAOghIAEgLQBRjGB+jCQCij3DQjCQHdm8H4AAQGMAADkFJQDyFgAAKWQAAKmkGLIQjnJ0mgJfQlvIYnGG5QmdGRlwDUIgCACIgBgCIgUgPQgigbg7gMQA7AMAiAbIAUAPIgCADIghgBg");
	this.shape_49.setTransform(460.9,362.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},31).to({state:[]},1).wait(1));

	// Layer_2
	this.instance = new lib.FLap();
	this.instance.parent = this;
	this.instance.setTransform(538.3,315,1,1,0,0,0,277.9,64.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.78,y:300.6},0).wait(1).to({scaleY:0.56,y:286.3},0).wait(1).to({scaleY:0.33,y:271.9},0).wait(1).to({scaleY:0.11,y:257.6},0).wait(1).to({skewX:180,y:243.2},0).wait(1).to({scaleY:0.33,y:228.8},0).wait(1).to({scaleY:0.56,y:214.5},0).wait(1).to({scaleY:0.78,y:200.1},0).wait(1).to({scaleY:1,y:185.8},0).to({_off:true},1).wait(23));

	// Button
	this.btn_envelope = new lib.Button();
	this.btn_envelope.name = "btn_envelope";
	this.btn_envelope.parent = this;
	this.btn_envelope.setTransform(538.3,384.1,1,1,0,0,0,277.9,133.7);
	new cjs.ButtonHelper(this.btn_envelope, 0, 1, 2, false, new lib.Button(), 3);

	this.btn_Next = new lib.BasicButton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.parent = this;
	this.btn_Next.setTransform(890.2,684.7);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_envelope}]}).to({state:[{t:this.btn_Next}]},10).to({state:[]},20).wait(3));

	// Envelope
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(3,1,1).p("EArbgU4MAAAApxMhW1AAAMAAAgpxMAn6AUMgEgragU4MBW1AAA");
	this.shape_50.setTransform(538.3,384.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("EgraAU5MAAAgpxMBW1AAAMgu7AUMMgn6gUMMAn6AUMMAu7gUMMAAAApxg");
	this.shape_51.setTransform(538.3,384.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50}]}).to({state:[]},10).to({state:[]},20).wait(3));

	// LANDSCAPE
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFF33").ss(3,1,1).p("AiRAGIgQgLACiAGIgGgL");
	this.shape_52.setTransform(120.6,58.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("Eg26ginQECgLEEAJQFGAOFCAkQCmAUCnAaQBrARBsAQQF4A1F6AlQHjAuHkAhQHnAhHrgFQAUAAAUAAQFVgFFTgZQHcAQGqgPQC6gHCwgMQDzgOGlgDQB9gBCMAAQEVAAG0gQQG0gQDpgQQDogQB4gJQB4gKAbAIQAcAIA1AKQA0AJBMAUQCAAgAPgZQGoCfEqFVQFYGLBKIFQBGHuhQH1QhQHzipHcQgRAxgTAtQi2GcmaCGQglAMgnAKQmRBmmtgEQjaggjcANQkCARkCAMQkJANkJAEQjlAEjfALQjTALjUAEQjXAEjSgJQk3gMk3gDQm0gFmsgxQnkg4nlgvQgfgDgggDQpNg3pMgoQiKgKiJgHEhl6gQvQBFgfBDggQD5h6DtiVQGykUHTjWQG9jLHhhEA5RTUIiFGbIh1D/QhkgEhlgDQmzgMm4gCQmKgBmDAWQmJAWmGAgQlCAalGgDQlcgBlWgcQkmgXkgghQqmhOhYq/QhUqRDYp0QB7lnDkkGIBThnIBpivAy2cpIicBcIAAABA9LduIAACcIH5iEQj9gPj8gJgEhqCgPDQCGgzCCg5");
	this.shape_53.setTransform(510,669.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(3.7,1,1).p("EBaxgXbQABgGAAgGQgNAEgNACEgiwANOIiBAJQBCAAA/gJgEhaxAXlQAEABADAB");
	this.shape_54.setTransform(238.5,449);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#33CC33").s().p("ABAgEQg+AIhBAAg");
	this.shape_55.setTransform(9.5,534);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#006600").s().p("AlsDFQgPASgWAFQATgKASgNgAFujXIAkgEQgbAHgsABIAjgEg");
	this.shape_56.setTransform(862.3,190);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(0.1,1,1).p("AAxjFQATAAANgRQAKgNAJgaAgDj8QgDAMgLAMQgFAGgHAHQgXARgFAFAgih7QASAAAjATQATAJAYAMAAjAfQgUgKghgLQgNgEgJgDQgSgEgIgDAAFCIQAPAHAcAMQANAGAIAGQAGAEAEAFAhSk7QgHAQgKAUAgOCqQgNgEgfgFQgegGgGAAAgHE7Qg1gEgdAAQgBAAgBAAQgDAAgDAAAAAE6IAAAAQAJACADAAQABAAAIAAQAcAAAOgGQAJgEAZgM");
	this.shape_57.setTransform(773.3,625.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2,1,1).p("AAJooQhJA3gsBPQgfA7AAAeQAAASAHAUQAIAWASAYQABABAAABQAJAMARATQADACACADQAGAGAHAHQAFAGAGAGQAAAAAAAAQABAAAAABQAAAAABABQAFAFAGAGQAAAAAAAAQACABABACQACACACACQABAAAAABQAAAAABABIAAAAQALALAJAJQAPASAMAPQAEAFAEAEIAAAAQAEAFADAFQACACABACQABABAAABQAMASAIASQABADABAEQADAHACAHQAAAAAAABQAEAMAAAMIAAAAQABAFAAAFQAAADAAACQAAADgBAEQAAADgBAEQAAABAAABIAAAAQgCAIgCAJQgDALgFAOQAAABAAABIAAAAQgFAOgHASQAAAAAAAAQgGAQgHARQA/gBAcgVQAWgQAAgcQAAgVgVgRQgUgQgYgDAhujvQgTAVgGAHQgIAJAAAIQAAAOAbAPQAFADAEACQAPAIAHAAQABAAABAAQANAAACgCQABAAAHgPAg4jUQAUgPAJgLQAFgHAGgHIA0AAIAAAXQgPAWgQAPQgFAGgXARIAAAEAA/gxQASgBAWgaQAUgZAAgOQAAgNgUgOQgDgCgCgCQAAAAgBAAQgNgJgFAAQgfAAgdAeAA4gWQgWAAgUgFQgSgFgGAAIgXAAIAAAAQAAAAgBABQgEADgBAPQAAAAAAABQgBADAAAEQAAAUAmAcQAUAOAZANAghifQgLAKgIAIIAAAAQgEAFgEAEQAAABgBACQgCACgBACQgJAOAAAQQAAALAGAGQAAABABAAQAAAAABABQADAEAHADQABAAABAAQAHADANABIAAAAQAGAAAGAAQAYAAACgCQAEgCAKgXAgjBNIgBAAQAAgEgNAJQgCACgDACQgNAKgEALQgCAEAAAEQAAATAcAYQAZAWAZAHAgjBNQAFAAgDADQgCACAAgBQgBgBAAgDAAeBmQgTgHgVgLQgPgHgKAAAAfCMQgBACAAABQgCAEgCAEQgIATgHATIAAABQAAABAAABIAAAAIgBAAIAAABIAAAAIAAAAAgGEvQAZALAIACQADABASAAQAWAAAIgKQAGgGAAgMQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBgJgHgMQgDgWgbgVQgWgRgIgHQgCgCgEgCQgDAKgDAJQgEAMgCAMIgBABQAAADgBADQgBACAAACIAAAAQgCAJgCAJQgCAJgCAJIAAABQAAADgBAEQAAAGgBAFIAAABQAAAGgBAGQAAAGAAAGQAAABAAACQAAAQADAXQAAABAAABQAAADAAACQABABAAABQAAABAAABIAAABQAagIAQgCQAFgBAMAAQAFAAAGAAQAVAAAHADQANAHAAAWQAAACAAACIAAABQgCAfgdASQgOAIgpANAgNDpIhNAAQgEAFgIAQQgCAGgCAEQAAAAAAABQAAAAgBAAQgDAIAAAEQAAARAoAUQAUAKAUAGAgXFyQguANgLAFQgQAHAAATIAAAAQAAAEACAEQAGAQAcARQAcAQATACQAEABADAAAgMF9QACAUAFAYQgBABABAAQABAJABAJQADAPABANQABAEABADQAAABAAABQAJArAHAd");
	this.shape_58.setTransform(773.9,614.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#33CC33").s().p("EA76AG9IgBgEIABAAQAFAAgDADIgBABIgBAAgEg58gG8Qg+AJhCAAg");
	this.shape_59.setTransform(386.8,578.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2,1,1).p("AAJooQhJA3gsBPQgfA7AAAeQAAASAHAUQAIAWASAYQABABAAABQAJAMARATQADACACADQAGAGAHAHQAFAGAGAGQAAAAAAAAQABAAAAABQAAAAABABQAFAFAGAGQAAAAAAAAQACABABACQACACACACQABAAAAABQAAAAABABIAAAAQALALAJAJQAPASAMAPQAEAFAEAEIAAAAQAEAFADAFQACACABACQABABAAABQAMASAIASQABADABAEQADAHACAHQAAAAAAABQAEAMAAAMIAAAAQABAFAAAFQAAADAAACQAAADgBAEQAAADgBAEQAAABAAABIAAAAQgCAIgCAJQgDALgFAOQAAABAAABIAAAAQgFAOgHASQAAAAAAAAQgGAQgHARQA/gBAcgVQAWgQAAgcQAAgVgVgRQgUgQgYgDAhujvQgTAVgGAHQgIAJAAAIQAAAOAbAPQAFADAEACQAPAIAHAAQABAAABAAQANAAACgCQABAAAHgPAg4jUQAUgPAJgLQAFgHAGgHIA0AAIAAAXQgPAWgQAPQgFAGgXARIAAAEAA/gxQASgBAWgaQAUgZAAgOQAAgNgUgOQgDgCgCgCQAAAAgBAAQgNgJgFAAQgfAAgdAeAA4gWQgWAAgUgFQgSgFgGAAIgXAAIAAAAQAAAAgBABQgEADgBAPQAAAAAAABQgBADAAAEQAAAUAmAcQAUAOAZANAghifQgLAKgIAIIAAAAQgEAFgEAEQAAABgBACQgCACgBACQgJAOAAAQQAAALAGAGQAAABABAAQAAAAABABQADAEAHADQABAAABAAQAHADANABIAAAAQAGAAAGAAQAYAAACgCQAEgCAKgXAgjBNIgBAAQAAgEgNAJQgCACgDACQgNAKgEALQgCAEAAAEQAAATAcAYQAZAWAZAHAgjBNQAFAAgDADQgCACAAgBQgBgBAAgDAAeBmQgTgHgVgLQgPgHgKAAAAfCMQgBACAAABQgCAEgCAEQgIATgHATIAAABQAAABAAABIAAAAIgBAAIAAABIAAAAIAAAAAgGEvQAZALAIACQADABASAAQAWAAAIgKQAGgGAAgMQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBgJgHgMQgDgWgbgVQgWgRgIgHQgCgCgEgCQgDAKgDAJQgEAMgCAMIgBABQAAADgBADQgBACAAACIAAAAQgCAJgCAJQgCAJgCAJIAAABQAAADgBAEQAAAGgBAFIAAABQAAAGgBAGQAAAGAAAGQAAABAAACQAAAQADAXQAAABAAABQAAAEABADQAAABAAABIAAABQAagIAQgCQAFgBAMAAQAFAAAGAAQAVAAAHADQANAHAAAWQAAACAAACIAAABQgCAfgdASQgOAIgpANAgNDpIhNAAQgEAFgIAQQgCAGgCAEQAAAAAAABQAAAAgBAAQgDAIAAAEQAAARAoAUQAUAKAUAGAgXFyQguANgLAFQgQAHAAATIAAAAQAAAEACAEQAGAQAcARQAgATAWAAAgMF9QACAUAFAYQgBABABAAQABAJABAJQADAPABANQABAEABADQAAABAAABQAJArAHAd");
	this.shape_60.setTransform(773.9,614.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(3.7,1,1).p("EBaxgiqQABgFAAgGQgNADgNADEBLAAi2QDlilCTiVQBDhFAtg4IABgBQADgEACgDIAGgHQABABABAAQAQALAKAiQAEANALA4QARBcAoAAQA6AACAhnQAggaA2gtQApghANAAQAeAAAZCUQASBoAHBtEgiwACAIiBAJQBCAAA/gJgEhaxAMXQAEABADAB");
	this.shape_61.setTransform(238.5,520.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(3.7,1,1).p("EBaxgiqQABgFAAgGQgNADgNADEAukAiHQCBg5B9hzQAcgbCRiaQAcglAZgXQAlgjAXgZQARgRAUgWQAVgYAJgKQAAACADADQADACAAAKQgaDVAAARQAAAjAGALQAIAOAdAAQBVAACyh2QBZg9AmgZQA9goAdgJQABAAABAAQABgBAAAAQAAAFACAIIABADQAAABABACQADAMAAAJQAAAYgOBZQgHAwgNBJIAACEIAHAAEBLAAi2QDlilCTiVQBDhFAtg4IABgBQADgEACgDIAGgHQABABABAAQAQALAKAiQAEANALA4QARBcAoAAQA6AACAhnQAggaA2gtQApghANAAQAeAAAZCUQASBoAHBtEgiwACAIiBAJQBCAAA/gJgEhaxAMXQAEABADAB");
	this.shape_62.setTransform(238.5,520.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(3.7,1,1).p("EBaxgiqQABgFAAgGQgNADgNADEAukAiHQCBg5B9hzQAcgbCRiaQAcglAZgXQAlgjAXgZQARgRAUgWQAVgYAJgKQAAACADADQADACAAAKQgaDVAAARQAAAjAGALQAIAOAdAAQBVAACyh2QBZg9AmgZQA9goAdgJQABAAABAAQABgBAAAAQAAAFACAIIABADQAAABABACQADAMAAAJQAAAYgOBZQgHAwgNBJIAACEIAHAAEBLAAi2QDlilCTiVQBDhFAtg4IABgBQADgEACgDIAGgHQABABABAAQAQALAKAiQAEANALA4QARBcAoAAQA6AACAhnQAggaA2gtQApghANAAQAeAAAZCUQASBoAHBtEgiwACAIiBAJQBCAAA/gJgEApXALaQg9gYgVgGQgkgKgnAAQhFAAAAA/QAAAkCqB0QBPiUAoiJQANgrAIgpQALgzAEgxEAq/AOAQANgsAKgsQAPhJAKh+QAJhuANgqEAkyATiQADADADAEQAqArAPAJQAMAHA6AOEAqUAPuQA+AQAPAHQADABAJAAQAqAAA3goQA8gtAAgxQAAg0gpgXQgtgQgVgOQgDgCgCgCQgdgLgGgGEAq/AOAQAkAIAYAFQAJABAKAAQASAAANgNEAnmAMCQATAOAgAUQAOAJAPASEAqMAPsQAEABAEABQAZg2ASg4EAm3AUsQCRiYBMimEAk4ATpQCNi4BaioEhaxAMXQAEABADAB");
	this.shape_63.setTransform(238.5,520.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#33CC33").s().p("EA76AG/IgBgEIABAAQAFAAgDADIgBABIgBAAgASmhCIA6AgIgMABQgeAAgQghgEg58gG6Qg+AJhCAAgASFm+IAGAAIgHABIABgBg");
	this.shape_64.setTransform(386.8,577.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(3.7,1,1).p("EBaxgiqQABgFAAgGQgNADgNADEAukAiHQCBg5B9hzQAcgbCRiaQAcglAZgXQAlgjAXgZQARgRAUgWQAVgYAJgKQAAACADADQADACAAAKQgaDVAAARQAAAjAGALQAIAOAdAAQBVAACyh2QBZg9AmgZQA9goAdgJQABAAABAAQABgBAAAAQAAAFACAIIABADQAAABABACQADAMAAAJQAAAYgOBZQgHAwgNBJIAACEIAHAAEBLAAi2QDlilCTiVQBDhFAtg4IABgBQADgEACgDIAGgHQABABABAAQAQALAKAiQAEANALA4QARBcAoAAQA6AACAhnQAggaA2gtQApghANAAQAeAAAZCUQASBoAHBtEgiwACAIiBAJQBCAAA/gJgAvnNrQAGgjACgQQAIALAaAmQAJAOAIAKQgEALgEAPQgKAlgNA5AxXN7QgDAGgEAIQABAnANAsQAQA1AWAAQAiAAAUhVQACgPACgNQABgHABgFAxaNWQgEANAAAjQAAABAAACQglBKgXBFQgBABAAABQgDgCgDgCQgUgMgNAAQgjAAgmApQglAnAAAiQAAAUAQASQAQASAdANAvsNjQAAAIgBAIQAAARgBAPQgBAGgBAHAvUQDQgUBagSBRQgHAhgHAhQgBAEgBAFAwOSjQALAFAJAGQAbAPASAUQAWAXAAAPQAAASgVANQgFAEgLAGQgFADgGADQgKAGgMAHAzwS+QAQADAHAAAybQaQgWBAgKA8QgBADgGArQgCAVgFAfQgGAtgJAiQgCAIgCAIAzPVKQBLAZAvAEQAjADAQACQAKACAEABAwOUKQgJAtgHAuIgDAAEgYWAiiQD/hnCui5QAzg2A4hMQA1hGAMgMIANAAQAIAigQB2QgEBmBFAAQBQAACWhjQCUhqAggPQAOAPAGAcQAGAZAAAtQAAAhgKBsQgKBtAAAKQAAAbANA0AyQQhQgGgEgFgDEApXALaQg9gYgVgGQgkgKgnAAQhFAAAAA/QAAAkCqB0QBPiUAoiJQANgrAIgpQALgzAEgxEAq/AOAQANgsAKgsQAPhJAKh+QAJhuANgqEAkyATiQADADADAEQAqArAPAJQAMAHA6AOEAqUAPuQA+AQAPAHQADABAJAAQAqAAA3goQA8gtAAgxQAAg0gpgXQgtgQgVgOQgDgCgCgCQgdgLgGgGEAq/AOAQAkAIAYAFQAJABAKAAQASAAANgNEAnmAMCQATAOAgAUQAOAJAPASEAqMAPsQAEABAEABQAZg2ASg4EAm3AUsQCRiYBMimEAk4ATpQCNi4BaioEhaxAMXQAEABADAB");
	this.shape_65.setTransform(238.5,520.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#66FF00").s().p("AgCgCQACgFAEgIIgCAfQgIgHAEgLg");
	this.shape_66.setTransform(137.5,610.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#33CC33").s().p("EgmkAJNIACgJIACgJQAHgIADgFQAFgLgGgLQgEgKgLgGQgSgLgOAHQgHAFgCAJQgBAKAFAGQgHAEgEAFIACgJIAPhCQAaAPATAUQAWAXAAAPQAAASgVANIgQAKIADgFgEA76AEsIgBgEIABAAQAFAAgDADIgBABIgBAAgEgm7ADSIABgNIABABQAGAEAAACQABABgDAFQgEAIABAJIACAGIgKAFIAFgcgEgm7ADSIACgMIgCAMgEgmJADRQADgQAAgTQgBgPgEgGQgEgGgHgCQgHgCgGACQgHADgIAJIAIgzIAhAxIARAYIgHAaIgKAFIAAgBgASmjVIA6AgIgMABQgeAAgQghgEg58gJNQg+AJhCAAgASFpRIAGAAIgHABIABgBg");
	this.shape_67.setTransform(386.8,592.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("EgcIggoQF4A1F6AlQHjAuHkAhQHnAhHrgFQAUAAAUAAQFVgFFTgZQHcAQGqgPQC6gHCwgMQDzgOGlgDQB9gBCMAAQEVAAG0gQQG0gQDpgQQDogQB4gJQB4gKAbAIQAcAIA1AKQA0AJBMAUQCAAgAPgZQGoCfEqFVQFYGLBKIFQBGHuhQH1QhQHzipHcQgRAxgTAtQi2GcmaCGQglAMgnAKQmRBmmtgEQjaggjcANQkCARkCAMQkJANkJAEQjlAEjfALQjTALjUAEQjXAEjSgJQk3gMk3gDQm0gFmsgxQnkg4nlgvQgfgDgggDQpNg3pMgoQiKgKiJgHEgksgh3QCmAUCnAaQBrARBsAQQiyGPg3G0Qg+HdC6FKIDuFMIBrBpIH3JvIiRTDIicBcIAAABEgksgh3QlHFfgIH9QgIHEBqGZIBdCfIJiIRIBcBdQDzDLAQEmQADBJgKBQQgRCCg+B5IiFGbIh1D/QhkgEhlgDQmzgMm4gCQmKgBmDAWQmJAWmGAgQlCAalGgDQlcgBlWgcQkmgXkgghQqmhOhYq/QhUqRDYp0QB7lnDkkGIBThnIBpivQBFgfBDggQD5h6DtiVQGykUHTjWQG9jLHhhEEg26ginQECgLEEAJQFGAOFCAkA9LduIAACcIH5iEQj9gPj8gJgEhqCgPDQCGgzCCg5");
	this.shape_68.setTransform(510,669.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(3.7,1,1).p("EBaxgiqQABgFAAgGQgNADgNADEAukAiHQCBg5B9hzQAcgbCRiaQAcglAZgXQAlgjAXgZQARgRAUgWQAVgYAJgKQAAACADADQADACAAAKQgaDVAAARQAAAjAGALQAIAOAdAAQBVAACyh2QBZg9AmgZQA9goAdgJQABAAABAAQABgBAAAAQAAAFACAIIABADQAAABABACQADAMAAAJQAAAYgOBZQgHAwgNBJIAACEIAHAAEBLAAi2QDlilCTiVQBDhFAtg4IABgBQADgEACgDIAGgHQABABABAAQAQALAKAiQAEANALA4QARBcAoAAQA6AACAhnQAggaA2gtQApghANAAQAeAAAZCUQASBoAHBtAyr26QABgtAAgtAyr26QC8ArEFg3EgiwACAQGOg7ElmrQBniYBIiqQCVlgAOmyEgiwACAIiBAJQBCAAA/gJgAvnNrQAGgjACgQQAIALAaAmQAJAOAIAKQgEALgEAPQgKAlgNA5AxXN7QgDAGgEAIQABAnANAsQAQA1AWAAQAiAAAUhVQACgPACgNQABgHABgFAxaNWQgEANAAAjQAAABAAACQglBKgXBFQgBABAAABQgDgCgDgCQgUgMgNAAQgjAAgmApQglAnAAAiQAAAUAQASQAQASAdANAvsNjQAAAIgBAIQAAARgBAPQgBAGgBAHAvUQDQgUBagSBRQgHAhgHAhQgBAEgBAFAwOSjQALAFAJAGQAbAPASAUQAWAXAAAPQAAASgVANQgFAEgLAGQgFADgGADQgKAGgMAHAzwS+QAQADAHAAAybQaQgWBAgKA8QgBADgGArQgCAVgFAfQgGAtgJAiQgCAIgCAIAzPVKQBLAZAvAEQAjADAQACQAKACAEABAwOUKQgJAtgHAuIgDAAEgYWAiiQD/hnCui5QAzg2A4hMQA1hGAMgMIANAAQAIAigQB2QgEBmBFAAQBQAACWhjQCUhqAggPQAOAPAGAcQAGAZAAAtQAAAhgKBsQgKBtAAAKQAAAbANA0AyQQhQgGgEgFgDEApXALaQg9gYgVgGQgkgKgnAAQhFAAAAA/QAAAkCqB0QBPiUAoiJQANgrAIgpQALgzAEgxEAq/AOAQANgsAKgsQAPhJAKh+QAJhuANgqEAkyATiQADADADAEQAqArAPAJQAMAHA6AOEAqUAPuQA+AQAPAHQADABAJAAQAqAAA3goQA8gtAAgxQAAg0gpgXQgtgQgVgOQgDgCgCgCQgdgLgGgGEAq/AOAQAkAIAYAFQAJABAKAAQASAAANgNEAnmAMCQATAOAgAUQAOAJAPASEAqMAPsQAEABAEABQAZg2ASg4EAm3AUsQCRiYBMimEAk4ATpQCNi4BaioEhaxAMXQAEABADAB");
	this.shape_69.setTransform(238.5,520.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(3.7,1,1).p("EBdPgiCQAAAEAAADQgBAegBAeQgJDwgQDdQgNC7AADRQAAHEBtFoEBXPgiOQBVARBoADQBGACB3gDEBXQgiZQgOADgMADQAMADANACQABgFAAgGgEBOSgGWQEmn2CfpqQBDkEAjj6QANheAFg8EBX7gijQgXAGgUAEQADgjAAgVEBY+gcgQgxFGg+EsQg8EigdA6EBa8gbeQgQB0gyH6QgkFtgmByEArCAijQCBg5B9hzQAcgbCRiaQAcglAZgXQAlgjAXgZQARgRAUgWQAVgYAJgKQAAACADADQADACAAAKQgaDVAAARQAAAjAGALQAIAOAdAAQBVAACyh2QBZg9AmgZQA9goAdgJQABAAABAAQAAgBABAAQAAAFACAIIABADQAAACABABQADAMAAAJQAAAYgOBZQgHAwgNBJIAACEIAHAAEBHeAjSQDlilCTiVQBDhEAtg5IABgBQACgDADgEIAGgHQABABABAAQAQALAKAiQAEANALA4QARBcAoAAQA6AACAhnQAggaA2gtQApghANAAQAeAAAZCUQASBoAHBtA2N2eQABgtAAgtA2N2eQC8ArEFg3QhSFwAdF9QABAFAAAFQAeFqDPD8IFyBWI/xCTQGOg7ElmrQBniXBIirQCVlgAOmygEgmSACcIiBAJQBCAAA/gJgAzJOHQAGgiACgRQAIALAaAmQAJAOAIAKQgEAMgEAOQgKAmgNA4A05OXQgDAHgEAHQABAoANArQAQA1AWAAQAiAAAUhVQACgPACgNQABgGABgGA08NyQgEANAAAjQAAABAAACQglBKgXBFQgBABAAABQgDgCgDgCQgUgMgNAAQgjAAgmApQglAnAAAiQAAAUAQASQAQASAdANAzON/QAAAIgBAIQAAARgBAPQgBAHgBAGAy2QfQgUBagSBRQgHAigHAgQgBAEgBAFAzwS/QALAFAJAGQAaAPATAUQAWAXAAAPQAAASgVANQgGAEgKAGQgFADgGADQgKAGgMAHA3STaQAQADAHAAA19Q2QgWBAgKA8QgBAEgGAqQgDAVgEAfQgGAtgJAiQgCAJgCAHA2xVmQBLAZAvAEQAjADAQACQAKACAEABAzwUnQgJAtgHAtIgDAAEgb4Ai+QD/hnCui5QAzg2A4hMQA1hGAMgMIANAAQAIAigQB2QgEBmBFAAQBQAACWhjQCUhqAggPQAOAPAGAcQAGAZAAAtQAAAhgKBsQgKBtAAAKQAAAbANA0A1yQ9QgGgEgFgDEAl1AL2Qg9gYgVgGQgkgKgnAAQhFAAAAA/QAAAkCqB1QBPiVAoiJQANgqAIgqQAKgyAFgyEAndAOcQANgrAKgtQAPhJAKh+QAJhuANgqEAhQAT+QADADADAEQAqArAPAJQAMAHA6AOEAmyAQKQA+AQAPAHQADABAJAAQAqAAA3goQA8gtAAgxQAAg0gpgXQgugQgUgOQgDgCgCgCQgdgLgGgGEAndAOcQAkAIAYAFQAJABAKAAQASAAANgNEAkEAMeQATAOAgAUQAOAJAPASEAmqAQIQAEABAEABQAZg2ASg4EAjVAVIQCRiYBMimEAhWAUFQCNi4BainEheTAMzQADABAEAB");
	this.shape_70.setTransform(261.1,518);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(0.1,1,1).p("AUXCZQATAAANgRQAKgNAIgaATiBiQgEAMgKAMQgFAGgIAGQgWARgFAGATDDiQASABAkASQASAJAZANAUJF+QgUgLgjgLQgMgEgJgCQgSgGgIgCATrHnQAOAHAcALQANAGAJAGQAGAFAEAEASSAiQgGAQgKAVATWIJQgNgEgfgGQgdgFgHAAATdKaQg0gEgdgBQgBAAgBAAQgDAAgEAAATlKYIAAAAQAKACACABQABAAAIAAQAdAAAOgGQAJgEAYgMAzEpXQAAAbgTAUQgUATgbAAQgcAAgTgTQgRgRgCgWQgBgEAAgEQAAgcAUgTQATgUAcAAQAbAAAUAUQATATAAAcg");
	this.shape_71.setTransform(648,590.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(3.7,1,1).p("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");
	this.shape_72.setTransform(298,448.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFF00").s().p("AgWAqQgKgFAAgMQAAgGAIgXQAJgcAGgFIACAJIAAADIABgCQAAADAEACQADACADAAQAAAHADANIgDgDIgKAAIAKAAIADADIABAHQgEgDgGgCIAAAEQACANAAAXIgTAAQAAgNAHggIAGAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgCgBQAAgLACgHIABAKIAAAMIAAgMIgBgKQgCAHAAALIACABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgGAAQgHAgAAANIATAAQAAgXgCgNIAAgEQAGACAEADIgBgHIAHAKIABACIAFgBQgCgoAEgKIADgGQAFALAAAGQgBAKAEAIIAAATQgFAAgIACIAAAAIAAABIgFAAQACAEAAAFQAAALgHAHQgHAHgMAAQgHAAgGgEgAAPAMIAAAAIgCAAQgBgDgEgCQAEACABADIgDAAIgCgFIACAFIADAAIAAAAIACAAIAAAAgAAPAMgAANAMIAAAAIACAAIAAAAgAANAMg");
	this.shape_73.setTransform(139.3,580.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#33CC33").s().p("EgmkAJNIACgJIACgJQAHgIADgFQAFgLgGgLQgEgKgLgGQgSgLgOAHQgHAFgCAJQgBAKAFAGQgHAEgEAFIACgJIAPhCQAaAPATAUQAWAXAAAPQAAASgVANIgQAKIADgFgEA76AEsIgBgEIABAAQAFAAgDADIgBABIgBAAgEgm7ADSIABgNIABABQAGAEAAACQABABgDAFQgEAIABAJIACAGIgKAFIAFgcgEgm7ADSIACgMIgCAMgEgmJADRQADgQAAgTQgBgPgEgGQgEgGgHgCQgHgCgGACQgHADgIAJIAIgzIAhAxIARAYIgHAaIgKAFIAAgBgEgrPgBTIA/gHIAAAEQgTAFgVAAQgLAAgMgCgASmjVIA6AgIgMABQgeAAgQghgEg58gJNQg+AJhCAAgASFpRIAGAAIgHABIABgBg");
	this.shape_74.setTransform(386.8,592.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(3.7,1,1).p("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");
	this.shape_75.setTransform(298,448.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#006600").s().p("AgYHhIgGgDQBXgDA/g/QAagaAQgfQgNAhgbAhQg3BCg/AAQgPAAgNgGgAlshGQgPASgWAFQATgJASgOgAFuniIAkgEQgbAGgsACIAjgEg");
	this.shape_76.setTransform(862.3,216.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFF00").ss(1,1,1).p("Aq4ifIitiFApAk5Ijih+Aq4AAIhCAAIiGhdArFCgIigAAApaFUQhqAogUAKQgRAJgRAVAoKp/IiuhrAoln6IiThdAgqKUQgYArgdAsAnOIwQg8Bkg8A8AKlFoQCMBQAKAEQAgAQAmAAAIFIwQBMAMA7AuQAJAHAnAmADZKAQBuAaAkAuQAJAKANAT");
	this.shape_77.setTransform(136.3,156);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFF33").ss(1,1,1).p("AKkAAQAACKgxB3QgfBNg0BEQAAAAAAAAQgeAngkAlQiUCUjDAmIAAAAQhBAMhGAAQgwAAgvgGQjbgdijijQioiogZjjQgFgoAAgrQAAgcACgcQAHhVAZhMQAchTAxhKQAmg2AxgyQA4g3A+goQBbg6BpgaQBKgRBRgBQAFAAADAAQBaAABRAUQBTAVBLAqQBPAtBGBFQAFAGAFAFQC8DDAAEQg");
	this.shape_78.setTransform(142.8,146.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFF33").ss(3,1,1).p("ACmmhIAnifAFfkcIBcisAJOFFICsA1AHjIMIDIB3AHjiKICGhcAJCBjIEHgNAjZoLIg1h3AgTnVIAAifAmFnwIjHiSApamGIjvh3");
	this.shape_79.setTransform(163.3,121.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(3.7,1,1).p("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");
	this.shape_80.setTransform(298,448.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFF66").s().p("AAFfnIB2j/ICFmbQA+h5AQiCQAKhQgDhJQgQkmjyjLIhbhdIpioRIhdifQhqmZAHnEQAJn9FGlfQCnAUCmAaIDXAhQixGPg4G0Qg+HdC7FKIDtFLIBqBpIH3JwIiQTDIicBcIgBABQj8gPj9gJg");
	this.shape_81.setTransform(322.7,657.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFF00").s().p("EgA5AngQgKgFAAgMQAAgGAIgYQAJgcAGgFIACAJIAAAEIABgCQAAACAEACQAEACADAAQAAAHADAPIgDgFIgLAAIALAAIADAFIABAGQgEgDgHgBIAAADQADANAAAXIgUAAQAAgNAHghIAGAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgCAAQAAgMACgGIABAJIAAAMIAAgMIgBgJQgCAGAAAMIACAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIgGAAQgHAhAAANIAUAAQAAgXgDgNIAAgDQAHABAEADIgBgGIAHAKIABABIAFgBQgCgpAEgKIADgGQAFALAAAGQgBAKAEAIIAAAUQgFAAgIACIAAAAIAAABIgFAAQACAEAAAFQAAAMgHAGQgHAHgNAAQgHAAgGgEgEgATAnCIAAAAIgCAAQgBgDgEgCQAEACABADIgDAAIgCgFIACAFIADAAIAAAAIACAAIAAAAgEgATAnCgEgAVAnCIAAAAIACAAIAAAAgEgAVAnCgAhfyhQjbgdijikQioingZjjQgFgoAAgrQAAgdACgcQAHhVAZhMQAchTAyhKQAlg2AxgyQA4g3A+goQBbg6BpgaQBKgRBRgBIAIAAQBaAABRAUQBTAVBLAqQBPAtBGBFIAKALQC8DDAAERQAACKgxB3QgfBNg0BEIAAAAQgeAngkAkQiUCVjDAmIAAAAQhBAMhGAAQgwAAgvgGg");
	this.shape_82.setTransform(142.8,332);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(0.1,1,1).p("ASwAzQATgQAUgOQAMgJAGgSAUJCZQATAAANgRQAKgNAJgaATUBiQgDAMgLAMQgFAGgHAGQgXARgFAGAS1DiQASABAkASQATAJAYANAUdEfQAZArAGAIQAJAMASAHAT7F+QgUgLgigLQgNgEgJgCQgSgGgIgCATdHnQAPAHAcALQANAGAIAGQAGAFAEAEASFAiQgHAQgKAVATJIJQgNgEgfgGQgegFgGAAATQKaQg1gEgdgBQgBAAgBAAQgDAAgDAAATXKYIAAAAQAKACADABQABAAAIAAQAcAAAOgGQAJgEAZgMAzRpXQAAAbgUAUQgTATgcAAQgbAAgUgTQgQgRgDgWQAAgEAAgEQAAgcATgTQAUgUAbAAQAcAAATAUQAUATAAAcg");
	this.shape_83.setTransform(649.3,590.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(2,1,1).p("AAJooQhJA3gsBPQgfA7AAAeQAAASAHAUQAIAWASAYQABABAAABQAJAMARATQADACACADQAGAGAHAHQAFAGAGAGQAAAAAAAAQABAAAAABQAAAAABABQAFAFAGAGQAAAAAAAAQACABABACQACACACACQABAAAAABQAAAAABABIAAAAQALALAJAJQAPASAMAPQAEAFAEAEIAAAAQAEAFADAFQACACABACQABABAAABQAMASAIASQABADABAEQADAHACAHQAAAAAAABQAEAMAAAMIAAAAQABAFAAAFQAAADAAACQAAADgBAEQAAADgBAEQAAABAAABIAAAAQgCAIgCAJQgDALgFAOQAAABAAABIAAAAQgFAOgHASQAAAAAAAAQgGAQgHARQA/gBAcgVQAWgQAAgcQAAgVgVgRQgUgQgYgDAhujvQgTAVgGAHQgIAJAAAIQAAAOAbAPQAFADAEACQAPAIAHAAQABAAABAAQANAAACgCQABAAAHgPAg4jUQAUgPAJgLQAFgHAGgHIA0AAIAAAXQgPAWgQAPQgFAGgXARIAAAEAA/gxQASgBAWgaQAUgZAAgOQAAgNgUgOQgDgCgCgCQAAAAgBAAQgNgJgFAAQgfAAgdAeAA4gWQgWAAgUgFQgSgFgGAAIgXAAIAAAAQAAAAgBABQgEADgBAPQAAAAAAABQgBADAAAEQAAAUAmAcQAUAOAZANAghifQgLAKgIAIIAAAAQgEAFgEAEQAAABgBACQgCACgBACQgJAOAAAQQAAALAGAGQAAABABAAQAAAAABABQADAEAHADQABAAABAAQAHADANABIAAAAQAGAAAGAAQAYAAACgCQAEgCAKgXAAjBnQgBAAgBAAQgBgBgBAAQgBAAAAAAQgTgHgVgLQgPgHgKAAQAFAAgDADQgCACAAgBQgBgBAAgDQAAgEgNAJQgCACgDACQgNAKgEALQgCAEAAAEQAAATAcAYQAZAWAZAHAgjBNIgBAAAAfCMQgBACAAABQgCAEgCAEQgIATgHATIAAABQAAABAAABIAAAAIgBAAIAAABIAAAAIAAAAAgGEvQAZALAIACQADABASAAQAWAAAIgKQAGgGAAgMQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBgJgHgMQgDgWgbgVQgWgRgIgHQgCgCgEgCQgDAKgDAJQgEAMgCAMIgBABQAAADgBADQgBACAAACIAAAAQgCAJgCAJQgCAJgCAJIAAABQAAADgBAEQAAAGgBAFIAAABQAAAGgBAGQAAAGAAAGQAAABAAACQAAAQADAXQAAABAAABQAAAEABADQAAABAAABIAAABQAagIAQgCQAFgBAMAAQAFAAAGAAQAVAAAHADQANAHAAAWQAAACAAACIAAABQgCAfgdASQgOAIgpANAgNDpIhNAAQgEAFgIAQQgCAGgCAEQAAAAAAABQAAAAgBAAQgDAIAAAEQAAARAoAUQAUAKAUAGAgXFyQguANgLAFQgQAHAAATIAAAAQAAAEACAEQAGAQAcARQAgATAWAAAgMF9QACAUAFAYQgBABABAAQABAJABAJQADAPABANQABAEABADQAAABAAABQAJArAHAd");
	this.shape_84.setTransform(773.9,614.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF6699").s().p("AioGRQgNgcgBgrQAAgWAMguIAPgIIgPAIIABgEQAIghAAggIgBgSIABASQAAAggIAhIgBAEIhfA0QgNAGghAAQgWAAgPgaQgOgWAAgZQAAhRA3gzQBIgzAggqIAIgBIgHAAIgBABQg2AHgqgBQhagCAAgpQAAgwBegzQBVgvAwACQgCgFg1hCQgfgmAAgvQAAgvAugkQAqgiAtAAQA0AAAcA4QAVApAFA/QApgzAegUQArgdA3AAQBDAAAeApQAbAiAAA+QAAA5gPAsQgOAsggAnIAKAAIApgRQAngRAEAAQAhAAAVAbQATAYAAAdQAAA/hRAuQhIAphQACQAjAAAeApQAcAoAAAqQAAA5g2AbQgnAUg1AAQgcAAgogQQglgRgSAAQgQAAgaAvQgVAngdAGQAKgzAFgxQAEhQADgTQgDATgEBQQgFAxgKAzgAhSgzQgTATAAAcIAAAHQADAWAQARQAUATAbAAQAcAAATgTQATgUAAgaQAAgcgTgTQgTgUgcAAQgbAAgUAUg");
	this.shape_85.setTransform(522.8,531.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFF00").s().p("EgZjAngQgKgFAAgMQAAgGAIgYQAJgcAGgFIACAJIABAEIAAgCQAAACAEACQAEACADAAQAAAHADAPIgDgFIgLAAIALAAIADAFIACAGQgFgDgHgBIAAADQADANABAXIgVAAQAAgNAHghIAGAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgCAAQAAgMADgGIAAAJIAAAMIAAgMIAAgJQgDAGAAAMIACAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABIgGAAQgHAhAAANIAVAAQgBgXgDgNIAAgDQAHABAFADIgCgGIAHAKIABABIAFgBQgBgpADgKIAEgGQAEALAAAGQAAAKADAIIAAAUQgFAAgHACIgBAAIAAABIgFAAQACAEAAAFQAAAMgHAGQgHAHgNAAQgGAAgHgEgEgY9AnCIAAAAIgCAAQgBgDgDgCQADACABADIgDAAIgBgFIABAFIADAAIAAAAIACAAIAAAAgEgY9AnCgEgY/AnCIAAAAIACAAIAAAAgEgY/AnCgEAhcAfwQgRgQgCgWIAAgJQAAgbATgTQAUgUAbAAQAbAAAUAUQATATAAAbQAAAcgTATQgUAUgbAAQgbAAgUgUgA6JyhQjbgdijikQiningajjQgFgoABgrQAAgdACgcQAGhVAZhMQAchTAyhKQAlg2AxgyQA4g3A+goQBbg6BpgaQBKgRBSgBIAJAAQBZAABSAUQBTAVBKAqQBQAtBFBFIAKALQC8DDAAERQAACKgxB3QgfBNg0BEIAAAAQgeAngkAkQiUCVjCAmIgBAAQhBAMhFAAQgyAAgvgGg");
	this.shape_86.setTransform(300.6,332);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#9933CC").s().p("AABFoIgEgcIgDgSIAAgBIAAAAIgGgsIAGAsIAAAAIAAABIADASIAEAcIgHACQgWAAgggTQgcgRgGgQQAdABA0AEQg0gEgdgBQgCgEAAgEIAAAAQAAgTAQgHQALgFAugNIALALQAbgIAPgCIARgBIALAAQAVAAAHADQAOAHAAAWIgBAEIAAABQgCAfgdASQgNAIgqANgAAQE8QAcAAAOgGIAhgQIghAQQgOAGgcAAIgJAAIgMgDIgBAAIABAAIAMADIAJAAIAAAAgAheE2IAAAAgAgeDaQgVgGgTgKQgngUAAgRQAAgEADgIIAAAAIAAgBIAEgKQAIgQAFgFIBMAAIAKAEIgBAGIgBAEIAAAAIgEASIgEASIAAABIgBAHIgBALIAAAAIgBAMIABgMIAAAAIABgLIABgHIAAgBIAEgSIAEgSIAAAAIABgEIABgGIABgBIAGgYIAGgTIAGAEQAIAHAWARQAbAVADAWQAHAMABAJIAAABIAAABIAAACQAAAMgGAGQgIAKgWAAIgVgBQgJgCgYgLIgKALIAAANIAAACQAAARADAXIgDABgAArCaQAMAHAJAFQAGAFAEAEQgEgEgGgFQgJgFgMgHIgrgSIArASgAg/CgQAfAGANAEQgNgEgfgGQgegFgGAAQAGAAAeAFgAAFBKQgZgGgZgWQgbgYAAgTQAAgDABgEQAEgLANgKIAFgEQANgJAAAEIABAEQAAAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQADgDgFAAQAKAAAPAHQAVALATAHIABAAIACABIACAAIAKADIgBABIgNAgIgBADQgUgLgigLIgVgGIgagHIAaAHIAVAGQAiALAUALIgDAIIgQAmgAAeAfIAAAAgAAsgEIABgBIALgfIAAAAIAAgCIAIgZIAEgRIAAAAIAAgCIABgHIABgHIAAgFIAAgKIAAAAIAAAAIAAAKIAAAFIgBAHIgBAHIAAACIAAAAIgEARIgIAZIAAACIgNgFQgagNgSgOQgngcAAgVIABgHIAAgBQABgPAEgDIABgBIAAAAIAYAAQAFAAASAFQAUAFAWAAIAOAXIAKARQAXADATAQQAWARAAAVQgBAcgVAPQgSgGgKgMQgFgIgZgrQAZArAFAIQAKAMASAGQgcAVg/ABIANgggAAOhpIArAWIgrgWQgjgSgSgBQASABAjASgAB6AGIAAAAgAAmjCIgBgCIgDgEIgHgKIAAAAIgIAGQgKAXgEACQgCACgYAAIgMgBIAAAAQgNAAgHgDIgCAAQgHgDgEgEIAAgBIgBgBQgFgHAAgKQgBgQAJgOIADgFIABgCIAIgJIAAAAIATgSIAFgBIAUAUIAbAhIAIAJIgIgbQAdgeAgAAQAEAAANAIIABABIAFAEQAUAOAAANQAAAOgUAZQgWAagSABIgFADQgIgSgMgSgAgWjkIgMAMQgXARgFAGQAFgGAXgRIAMgMQAKgMAEgMQgEAMgKAMgABMjWQgNARgTAAQATAAANgRQAKgNAIgaQgIAagKANIAAAAgAhVkIQgHAAgOgIIgKgFQgbgPABgOQgBgIAJgJIAZgcIAEgEQAJAMARATIAFAEIANAOIALAMIAAAAIABABIgBgBIAAAAIgLgMIgNgOIgFgEQgRgTgJgMIAxAfQAUgPAKgLIAKgOIA0AAIAAAXQgOAWgRAPIgcAXIAAAEIgFAFIAAAAIgBgBIgBgBIgEgEIgCgDIgBAAIgLgLIgBgBIgLAMIgIAPQgCACgNAAIgCAAgAhokXIAQglIgQAlgAgGlJIgmAeIAmgeQALgJAHgTQgHATgLAJgAhpljg");
	this.shape_87.setTransform(773.9,625.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#9933CC").s().p("AABFoIgEgcIgDgSIAAgBIAAAAIgGgsIAGAsIAAAAIAAABIADASIAEAcIgHACQgWAAgggTQgcgRgGgQQAdABA0AEQg0gEgdgBQgCgEAAgEIAAAAQAAgTAQgHQALgFAugNIALALQAbgIAPgCIARgBIALAAQAVAAAHADQAOAHAAAWIgBAEIAAABQgCAfgdASQgNAIgqANgAAQE8QAcAAAOgGIAhgQIghAQQgOAGgcAAIgJAAIgMgDIgBAAIABAAIAMADIAJAAIAAAAgAheE2IAAAAgAgeDaQgVgGgTgKQgngUAAgRQAAgEADgIIAAAAIAAgBIAEgKQAIgQAFgFIBMAAIAKAEIgBAGIgBAEIAAAAIgEASIgEASIAAABIgBAHIgBALIAAAAIgBAMIAAANIAAACQAAARADAXIgDABgAg/CgQAfAGANAEQgNgEgfgGQgegFgGAAQAGAAAeAFgAAbDMQgJgCgYgLIgKALIABgMIAAAAIABgLIABgHIAAgBIAEgSIAEgSIAAAAIABgEIABgGIABgBIAGgYIAGgTIAGAEQAIAHAWARQAbAVADAWQAHAMABAJIAAABIAAABIAAACQAAAMgGAGQgIAKgWAAIgVgBgAArCaQAMAHAJAFQAGAFAEAEQgEgEgGgFQgJgFgMgHIgrgSIArASgAgQDKIAAAAgAAFBKQgZgGgZgWQgbgYAAgTQAAgDABgEQAEgLANgKIAFgEQANgJAAAEIABAEQAAAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQADgDgFAAQAKAAAPAHQAVALATAHIABAAIACABIACAAIAKADIgBABIgNAgIgBADQgUgLgigLIgVgGIgagHIAaAHIAVAGQAiALAUALIgDAIIgQAmgAAeAfIAAAAgAAsgEIABgBIALgfIAAAAIAAgCIAIgZIAEgRIAAAAIAAgCIABgHIABgHIAAgFIAAgKIAAAAIAAAAIAAAKIAAAFIgBAHIgBAHIAAACIAAAAIgEARIgIAZIAAACIgNgFQgagNgSgOQgngcAAgVIABgHIAAgBQABgPAEgDIABgBIAAAAIAYAAQAFAAASAFQAUAFAWAAIAOAXIAKARQAXADATAQQAWARAAAVQgBAcgVAPQgSgGgKgMQgFgIgZgrQAZArAFAIQAKAMASAGQgcAVg/ABIANgggAAOhpIArAWIgrgWQgjgSgSgBQASABAjASgAB6AGIAAAAgAAmjCIgBgCIgDgEIgHgKIAAAAIgIAGQgKAXgEACQgCACgYAAIgMgBIAAAAQgNAAgHgDIgCAAQgHgDgEgEIAAgBIgBgBQgFgHAAgKQgBgQAJgOIADgFIABgCIAIgJIAAAAIATgSIAFgBIAUAUIAbAhIAIAJIgIgbQAdgeAgAAQAEAAANAIIABABIAFAEQAUAOAAANQAAAOgUAZQgWAagSABIgFADQgIgSgMgSgAgWjkIgMAMQgXARgFAGQAFgGAXgRIAMgMQAKgMAEgMQgEAMgKAMgABMjWQgNARgTAAQATAAANgRQAKgNAIgaQgIAagKANIAAAAgAhVkIQgHAAgOgIIgKgFQgbgPABgOQgBgIAJgJIAZgcIAEgEQAJAMARATIAFAEIANAOIALAMIAAAAIABABIgBgBIAAAAIgLgMIgNgOIgFgEQgRgTgJgMIAxAfQAUgPAKgLIAKgOIA0AAIAAAXQgOAWgRAPIgcAXIAAAEIgFAFIAAAAIgBgBIgBgBIgEgEIgCgDIgBAAIgLgLIgBgBIgLAMIgIAPQgCACgNAAIgCAAgAhokXIAQglIgQAlgAgGlJIgmAeIAmgeQALgJAHgTQgHATgLAJgAhpljg");
	this.shape_88.setTransform(773.9,625.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(2,1,1).p("AAJooQhJA3gsBPQgfA7AAAeQAAASAHAUQAIAWASAYQABABAAABQAJAMARATQADACACADQAGAGAHAHQAFAGAGAGQAAAAAAAAQABAAAAABQAAAAABABQAFAFAGAGQAAAAAAAAQACABABACQACACACACQABAAAAABQAAAAABABIAAAAQALALAJAJQAPASAMAPQAEAFAEAEIAAAAQAEAFADAFQACACABACQABABAAABQAMASAIASQABADABAEQADAHACAHQAAAAAAABQAEAMAAAMIAAAAQABAFAAAFQAAADAAACQAAADgBAEQAAADgBAEQAAABAAABIAAAAQgCAIgCAJQgDALgFAOQAAABAAABIAAAAQgFAOgHASQAAAAAAAAQgGAQgHARQA/gBAcgVQAWgQAAgcQAAgVgVgRQgUgQgYgDAhujvQgTAVgGAHQgIAJAAAIQAAAOAbAPQAFADAEACQAPAIAHAAQABAAABAAQANAAACgCQABAAAHgPAg4jUQAUgPAJgLQAFgHAGgHIA0AAIAAAXQgPAWgQAPQgFAGgXARIAAAEAA/gxQASgBAWgaQAUgZAAgOQAAgNgUgOQgDgCgCgCQAAAAgBAAQgNgJgFAAQgfAAgdAeAA4gWQgWAAgUgFQgSgFgGAAIgXAAIAAAAQAAAAgBABQgEADgBAPQAAAAAAABQgBADAAAEQAAAUAmAcQAUAOAZANAghifQgLAKgIAIIAAAAQgEAFgEAEQAAABgBACQgCACgBACQgJAOAAAQQAAALAGAGQAAABABAAQAAAAABABQADAEAHADQABAAABAAQAHADANABIAAAAQAGAAAGAAQAYAAACgCQAEgCAKgXAAjBnQgBAAgBAAQgBgBgBAAQgBAAAAAAQgTgHgVgLQgPgHgKAAIgBAAQAAgEgNAJQgCACgDACQgNAKgEALQgCAEAAAEQAAATAcAYQAZAWAZAHAgjBNQAFAAgDADQgCACAAgBQgBgBAAgDAAfCMQgBACAAABQgCAEgCAEQgIATgHATIAAABQAAABAAABIAAAAIgBAAIAAABIAAAAIAAAAAgGEvQAZALAIACQADABASAAQAWAAAIgKQAGgGAAgMQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBgJgHgMQgDgWgbgVQgWgRgIgHQgCgCgEgCQgDAKgDAJQgEAMgCAMIgBABQAAADgBADQgBACAAACIAAAAQgCAJgCAJQgCAJgCAJIAAABQAAADgBAEQAAAGgBAFIAAABQAAAGgBAGQAAAGAAAGQAAABAAACQAAAQADAXQAAABAAABQAAAEABADQAAABAAABIAAABQAagIAQgCQAFgBAMAAQAFAAAGAAQAVAAAHADQANAHAAAWQAAACAAACIAAABQgCAfgdASQgOAIgpANAgNDpIhNAAQgEAFgIAQQgCAGgCAEQAAAAAAABQAAAAgBAAQgDAIAAAEQAAARAoAUQAUAKAUAGAgXFyQguANgLAFQgQAHAAATIAAAAQAAAEACAEQAGAQAcARQAgATAWAAAgMF9QACAUAFAYQgBABABAAQABAJABAJQADAPABANQABAEABADQAAABAAABQAJArAHAd");
	this.shape_89.setTransform(773.9,614.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#66FF00").s().p("AAYECQgugEhLgZIgJgDQAJgiAGgtIAHg0IAHguQAKg7AWhAIABgCQAXhFAkhKQAAAnAOAsQAQA1AWAAQAiAAAUhVIAJgFIgBgGQgCgJAFgIQACgFAAgBQgBgCgGgEIAAgBIABggIgBAgQgJgHAEgMQABgFAFgIIAEgGIACgCQAIgJAHgDQAHgCAHACQAHACADAGQAFAGABAPQAAATgEAQIAAABIAKgFQgKAlgNA5IgJAKIgmCqIgUgLIAUALIgOBCIgCAJQADgFAHgEQgFgGACgKQACgJAHgFQANgHATALQALAGAEAKQAGALgGALQgCAFgHAIIgCAJIgDAJIgDAFIgLAGIgGABQgMgBgKgKQgKgIgBgKQgJAtgHAuIgDAAIgBAHIgzgFgAgihDIgLgHIALAHgAicBBQgLgLAAgIIgBgIQgBgDgDgDIgGgFQgHgHABgKQACgKAJgDIAGgEQACgBABgIQAAgJAJgSQAHgPAIgGQAGgEAOgDIAUgEQARgDAHAHIAIAKIAHAKQAGAMgIAJIgHAIQgBACAAAIQABARgNAKQgJAHAAADQAKAHAAAMQABAFgEANIgFALQgFAFgIADQgLADgIAAQgOAAgUgTg");
	this.shape_90.setTransform(125.1,633.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFF00").s().p("Ega9Ap1QgNgrAAgoIAGgOIgGAOIAAgCQgBgjAEgNQAAgGAJgoQAGghgFACQgbAJglAIQhJAQguAAQgxAAgpgTQg5gbAAgxQAAgqBBgWQAdgKA4gHQgjgFgmgUQhRgqAAhGQAAgmAZgWQAWgUAjAAQAxAAA3AWQAxATAnAfQgRgPgPgYQgcgoAAgjQAAghAeggQAgghAnAAQAwAAApAqQAlAnADAqIAEAAQAmg5AcggQA1g9AsAAQAaAAASAbQAQAZAAAhQgBAZgRAqQgXA4gDAMQAtgDApAQQA2AUAAAsQAAA8hUA6QhQA2gkgPIAAADQAtAbAkAmQA1A7AAA7QAAAhgYAOQgSAKgjAAQhMAAgkgjIgOgPIgRgYIghgxIgJAzIgBACIgEAFIAAgPIAAAPQgFAIgCAFQgEANAJAHIgBAMIgFAcQgUBVgiAAQgWAAgQg1gEgZjAk4QAWAAAYgQQAbgSAAgVQAAgFgCgHIgEgNIAEANQACAHAAAFQAAAVgbASQgYAQgWAAQgPAAgMgNQgNgQABgaQAAgbAQgXIABgBIAAAAIABgCIAAAAQAWgdApAAIAAAAIAAAAIALAAIADABIgDgBIgLAAIAAAAIAAAAQgpAAgWAdIAAAAIgBACIAAAAIgBABQgQAXAAAbQgBAaANAQQAMANAPAAIAAAAgEgZtAkJQAAAMAKAFQAHAEAGAAQANAAAHgHQAHgHAAgLQAAgGgCgDIAFAAIAAAAIAAgBIAAgWQAAgWACgHIAEgGQAGgHAPgFQAAARADAYIAEAAIgEAAQgDgYAAgRQgPAFgGAHIgGgMIAGAMIgEAGQgCAHAAAWIAAAWIgFABIgBgCIgHgKQgDgOAAgHQgDAAgEgCQgEgCAAgDIAAACIgBgDIgCgJQgGAFgJAcQgIAYAAAGIAAAAgEgdxAkUQAhAEAegIIAAgDIg/AHgEgY3Aj7QAHgCAFAAIAAgUQgDgHAAgIIAAgDIAAgBQAAgGgEgKQAEAKAAAGIAAABIAAADQAAAIADAHIAAAUQgFAAgHACIgBAAgEgbvAiLIgKgIIAKAIgEgZZAoMIAAAAgEgZjAkaQgKgFAAgMQAAgGAIgYQAJgcAGgFIACAJIABADQgDAHAAALIACABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgGAAQgHAhAAANIAVAAQgBgXgDgNIAAgEQAHACAFADIABAFIADAAIAAAAIACAAIAAAAIgCAAQgBgDgDgCIgCgHIAHAKIABACIAFgBIAAABIAAAAIgFAAQACADAAAGQAAALgHAHQgHAHgNAAQgGAAgHgEgEgZgAkaQAAgNAHghIAGAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgCgBQAAgLADgHIAAAKIAAAMIALAAIADAEIACAHQgFgDgHgCIAAAEQADANABAXgEgY/Aj8IAAAAIACAAIAAAAgEgZDAj3QADACABADIgDAAIgBgFgEgY4Aj7IAAAAgEgZDAj3IAAAAgEgZIAjsIgLAAIAAgMIAAgKIAAgCQAAADAEACQAEACADAAQAAAHADAOIgDgEgEgZTAjWIAAAAgEgYyAjCIAAAAgEAhcAcqQgRgQgCgXIAAgIQAAgbATgUQAUgTAbAAQAbAAAUATQATAUAAAbQAAAcgTATQgUAUgbAAQgbAAgUgUgA6J1oQjbgcijikQiningajjQgFgpABgqQAAgdACgcQAGhVAZhMQAchTAyhKQAlg2AxgyQA4g3A+gpQBbg6BpgZQBKgRBSgBIAJAAQBZAABSAUQBTAVBKAqQBQAtBFBFIAKALQC8DDAAERQAACKgxB2QgfBNg0BFIAAAAQgeAngkAkQiUCVjCAlIgBAAQhBANhFAAQgyAAgvgHg");
	this.shape_91.setTransform(300.6,351.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#33CC33").s().p("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");
	this.shape_92.setTransform(510,669.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#996600").s().p("Eg3gAKuQBoiXBHiqQCVlhAOmxQC8AsEFg4QhSFxAeF8IABAJQAdFrDQD7IFyBXI/yCTQGOg7ElmsgEA5XgH8QBDkFAij5QANheAGg8QBVARBnACQBHACB2gDIAGAAIgCA9QgIDvgQDeQgOC7AADRQAAHCBuFpQmlADjzAOQixAMi6AHQEmn3CgpogEA95gB2QgkFrgmBzQAmhzAklrQAyn7ARhzQgRBzgyH7gEA7OgC1Qg8EhgdA7QAdg7A8khQA+krAxlHQgxFHg+Erg");
	this.shape_93.setTransform(440.3,416.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(2,1,1).p("AAJooQhJA3gsBPQgfA7AAAeQAAASAHAUQAIAWASAYQABABAAABQAJAMARATQADACACADQAGAGAHAHQAFAGAGAGQAAAAAAAAQABAAAAABQAAAAABABQAFAFAGAGQAAAAAAAAQACABABACQACACACACQABAAAAABQAAAAABABIAAAAQALALAJAJQAPASAMAPQAEAFAEAEIAAAAQAEAFADAFQACACABACQABABAAABQAMASAIASQABADABAEQADAHACAHQAAAAAAABQAEAMAAAMIAAAAQABAFAAAFQAAADAAACQAAADgBAEQAAADgBAEQAAABAAABIAAAAQgCAIgCAJQgDALgFAOQAAABAAABIAAAAQgFAOgHASQAAAAAAAAQgGAQgHARQA/gBAcgVQAWgQAAgcQAAgVgVgRQgUgQgYgDAhujvQgTAVgGAHQgIAJAAAIQAAAOAbAPQAFADAEACQAPAIAHAAQABAAABAAQANAAACgCQABAAAHgPAg4jUQAUgPAJgLQAFgHAGgHIA0AAIAAAXQgPAWgQAPQgFAGgXARIAAAEAA/gxQASgBAWgaQAUgZAAgOQAAgNgUgOQgDgCgCgCQAAAAgBAAQgNgJgFAAQgfAAgdAeAA4gWQgWAAgUgFQgSgFgGAAIgXAAIAAAAQAAAAgBABQgEADgBAPQAAAAAAABQgBADAAAEQAAAUAmAcQAUAOAZANAghifQgLAKgIAIIAAAAQgEAFgEAEQAAABgBACQgCACgBACQgJAOAAAQQAAALAGAGQAAABABAAQAAAAABABQADAEAHADQABAAABAAQAHADANABIAAAAQAGAAAGAAQAYAAACgCQAEgCAKgXAAjBnQgBAAgBAAQgBgBgBAAQgBAAAAAAQgTgHgVgLQgPgHgKAAIgBAAQAAgEgNAJQgCACgDACQgNAKgEALQgCAEAAAEQAAATAcAYQAZAWAZAHAgjBNQAFAAgDADQgCACAAgBQgBgBAAgDAAfCMQgBACAAABQgCAEgCAEQgIATgHATIAAABQAAABAAABIAAAAIgBAAIAAABIAAAAQAAAAAAAAAgGEvQAZALAIACQADABASAAQAWAAAIgKQAGgGAAgMQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBgJgHgMQgDgWgbgVQgWgRgIgHQgCgCgEgCQgDAKgDAJQgEAMgCAMQAAABgBAAQAAADgBADQgBACAAACIAAAAQgCAJgCAJQgCAJgCAJQABAAgBABQAAADgBAEQAAAGgBAFIAAABQAAAGgBAGQAAAGAAAGQAAABAAACQAAAQADAXQAAABAAABQAAAEABADQAAABAAABQAAAAAAABQAagIAQgCQAFgBAMAAQAFAAAGAAQAVAAAHADQANAHAAAWQAAACAAACIAAABQgCAfgdASQgOAIgpANAgNDpIhNAAQgEAFgIAQQgCAGgCAEQAAAAAAABQAAAAgBAAQgDAIAAAEQAAARAoAUQAUAKAUAGAgXFyQguANgLAFQgQAHAAATIAAAAQAAAEACAEQAGAQAcARQAgATAWAAAgMF9QACAUAFAYQgBABABAAQABAJABAJQADAPABANQABAEABADQAAABAAABQAJArAHAd");
	this.shape_94.setTransform(773.9,614.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFF33").ss(1,1,1).p("AKkAAQAACKgxB3QgfBNg0BEQAAAAAAAAQgeAngkAlQiUCUjDAmQAAgBAAABQhBAMhGAAQgwAAgvgGQjbgdijijQioiogZjjQgFgoAAgrQAAgcACgcQAHhVAZhMQAchTAxhKQAmg2AxgyQA4g3A+goQBbg6BpgaQBKgRBRgBQAFAAADAAQBaAABRAUQBTAVBLAqQBPAtBGBFQAFAGAFAFQC8DDAAEQg");
	this.shape_95.setTransform(142.8,146.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#006600").s().p("ABkLDIAAgHIAAAHIgGAAQh2ADhGgCQhngDhWgRIABgLIgaAGIgKACQhGAQgeADQgRADhEAAQi3AAhrhJQhxhNAAiQQAAiwDDioQBFg7BMgsQBAglAWgCIABgCQACgEAFAAQivgmhFgkQiIhEAAiBQAAi0DVh0QC2hkDNAAQA7AABKAoQBJAnARAAQAvABDQgyQDRgyBwAAQBbAAAkAiQAbAZAAAyQAABBg0BhQg5BogFAnQAfAPA/AHQBYALARADQB5AcAAB6QAAC2jXEgQhTBvhcBeQhWBYgzAeQhWAzhWAoIhuAxIACg8gAkaKlIArgKIgrAKQADgjAAgWQAAAWgDAjIAAAAgAqGCTQg7A6AABTQAABTA7A6QA6A7BTgBQBSABA7g7QA6g6AAhTQAAhTg6g6Qg7g6hSgBQhTABg6A6gACWFhQA+AAA3hDQAcggANghQgNAhgcAgQg3BDg+AAQgQAAgOgGIgGgDQBYgDA/g/QAbgaAQgfQAXguAAg2QAAhQgxg7QBIgwA6gQIABgBQA6gQBdAAIABAAIAAAAIANAAIADAAIgDAAIgNAAIAAAAIgBAAQhdAAg6AQIgBABQg6AQhIAwIgRgTQhBhBhdAAQhcAAhBBBQhBBBAABdQAABcBBBBQBBBCBcAAIAHAAIAGADQAOAGAQAAIAAAAgAm4A0QAAARAcASQgcgSAAgRQAAgRAVggQALgQAPgUQgPAUgLAQQgVAgAAARIAAAAgAmcpRQAAAMABAEIADAHQgvAOgmAmQg9A+AABWQAABXA9A8QA9A+BXAAQAxAAAogUQAUgJARgOQALgIAKgLQA+g8AAhXQAAhWg+g+Qg9g9hWAAQghAAgeAJIgDgHQgBgEAAgMQAAgbAjgmQAagdAMgGQgMAGgaAdQgjAmAAAbIAAAAgAkAi1QAXgFAOgSQgOASgXAFgAghoUQg5A6AABQQAABRA5A6QA4A5BRAAQBRAAA5g5QA6g6AAhRQAAhQg6g6QgNgNgOgKQA+gyBrgGQAdgBA5AAIAHAAIgHAAQg5AAgdABQhrAGg+AyQgwgig/AAQhRAAg4A5gAGQpeIBNgGQAsgCAagGIgkAEIgiAEIhNAGgAkaKlIAAAAgAHdpkIAAAAgAH/poIAkgEQgaAGgsACIAigEg");
	this.shape_96.setTransform(847.8,230.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9933CC").s().p("AABFoIgEgcIgDgSIAAgBIAAAAIgGgsIAGAsIAAAAIAAABIADASIAEAcIgHACQgWAAgggTQgcgRgGgQQAdABA0AEQg0gEgdgBQgCgEAAgEIAAAAQAAgTAQgHQALgFAugNIALALQAbgIAPgCIARgBIALAAQAVAAAHADQAOAHAAAWIgBAEIAAABQgCAfgdASQgNAIgqANgAAQE8QAcAAAOgGIAhgQIghAQQgOAGgcAAIgJAAIgMgDIgBAAIABAAIAMADIAJAAIAAAAgAheE2IAAAAgAgeDaQgVgGgTgKQgngUAAgRQAAgEADgIIAAAAIAAgBIAEgKQAIgQAFgFIBMAAIAKAEIgBAGIgBAEIAAAAIgEASIgEASIABAAIgBABIgBAHIgBALIAAAAIgBAMIAAANIAAACQAAARADAXIgDABgAg/CgQAfAGANAEQgNgEgfgGQgegFgGAAQAGAAAeAFgAAbDMQgJgCgYgLIgKALIABgMIAAAAIABgLIABgHIABgBIgBAAIAEgSIAEgSIAAAAIABgEIABgGIABgBIAGgYIAGgTIAGAEQAIAHAWARQAbAVADAWQAHAMABAJIAAABIAAABIAAACQAAAMgGAGQgIAKgWAAIgVgBgAArCaQAMAHAJAFQAGAFAEAEQgEgEgGgFQgJgFgMgHIgrgSIArASgAgQDKIAAAAgAAFBKQgZgGgZgWQgbgYAAgTQAAgDABgEQAEgLANgKIAFgEQANgJAAAEIABAEQAAAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQADgDgFAAQAKAAAPAHQAVALATAHIABAAIACABIACAAIAKADIgBABIgNAgIgBADQgUgLgigLIgVgGIgagHIAaAHIAVAGQAiALAUALIgDAIIgQAmgAAeAfIAAAAgAAsgEIABgBIALgfIAAAAIAAgCIAIgZIAEgRIAAAAIAAgCIABgHIABgHIAAgFIAAgKIAAAAIAAAAIAAAKIAAAFIgBAHIgBAHIAAACIAAAAIgEARIgIAZIAAACIgNgFQgagNgSgOQgngcAAgVIABgHIAAgBQABgPAEgDIABgBIAAAAIAYAAQAFAAASAFQAUAFAWAAIAOAXIAKARQAXADATAQQAWARAAAVQgBAcgVAPQgSgGgKgMQgFgIgZgrQAZArAFAIQAKAMASAGQgcAVg/ABIANgggAAOhpIArAWIgrgWQgjgSgSgBQASABAjASgAB6AGIAAAAgAAmjCIgBgCIgDgEIgHgKIAAAAIgIAGQgKAXgEACQgCACgYAAIgMgBIAAAAQgNAAgHgDIgCAAQgHgDgEgEIAAgBIgBgBQgFgHAAgKQgBgQAJgOIADgFIABgCIAIgJIAAAAIATgSIAFgBIAUAUIAbAhIAIAJIgIgbQAdgeAgAAQAEAAANAIIABABIAFAEQAUAOAAANQAAAOgUAZQgWAagSABIgFADQgIgSgMgSgAgWjkIgMAMQgXARgFAGQAFgGAXgRIAMgMQAKgMAEgMQgEAMgKAMgABMjWQgNARgTAAQATAAANgRQAKgNAIgaQgIAagKANIAAAAgAhVkIQgHAAgOgIIgKgFQgbgPABgOQgBgIAJgJIAZgcIAEgEQAJAMARATIAFAEIANAOIALAMIAAAAIABABIgBgBIAAAAIgLgMIgNgOIgFgEQgRgTgJgMIAxAfQAUgPAKgLIAKgOIA0AAIAAAXQgOAWgRAPIgcAXIAAAEIgFAFIAAAAIgBgBIgBgBIgEgEIgCgDIgBAAIgLgLIgBgBIgLAMIgIAPQgCACgNAAIgCAAgAhokXIAQglIgQAlgAgGlJIgmAeIAmgeQALgJAHgTQgHATgLAJgAhpljg");
	this.shape_97.setTransform(773.9,625.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AnLHgQg6g6AAhTQAAhSA6g7QA7g6BSAAQBTAAA6A6QA7A7AABSQAABTg7A6Qg6A7hTAAQhSAAg7g7gAEnGLQhdAAhBhBQhChCAAhcQAAhdBChBQBBhBBdAAQBcAABCBBIARASIgJAGIAJgGQAwA8AABQQAAA3gXAtQgQAfgaAbQg/A/hYACIgHAAgAHWAgIAAAAgAkyirQg9g9AAhXQAAhWA9g+QAmgmAwgOIAIARIgIgRQAdgJAhAAQBXAAA9A9QA8A+AABWQAABXg8A9QgKAKgLAJQgSANgTAJQgpAUgxAAQhWAAg+g9gACZjMQg5g5AAhRQAAhRA5g6QA6g5BRAAQA+AAAwAiQAPAKANANQA5A6AABRQAABRg5A5Qg5A5hRAAQhRAAg6g5g");
	this.shape_98.setTransform(829,225);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("ABzITQgSgNAAgcQAAgbAqgnQA5g0BtgtIACgIQAbAHAIAMQADAEAAAOQAAAHgDAFQgCADgEAEIgHADQgFgOgBgCQABACAFAOIADAJIAIAYQAAAWgQAYQgPAXgaAUQg5Asg7AAQgjAAgRgNgAjGITQgSgNAAgcQAAgbAqgnQA5g0BsgtIADgIQAaAHAIAMQADAEAAAOQAAAHgDAFQgCADgEAEIgHADQgFgOgBgCQABACAFAOIADAJIAIAYQAAAWgQAYQgOAXgaAUQg5Asg7AAQgjAAgRgNgApHITQgSgNAAgcQAAgbArgnQA5g0BsgtIACgIQAcAHAHAMQADAEAAAOQAAAHgDAFQgBADgFAEIgGADQgFgOgCgCQACACAFAOIADAJIAHAYQAAAWgQAYQgPAXgaAUQg5Asg6AAQgkAAgRgNgAHQDcQgRgNAAgcQAAgbAqgnQA5g0BsgtIADgIQAbAHAIAMQADAEAAAOQAAAHgDAFQgCADgEAEIgHADQgFgPgBgBQABABAFAPIADAIIAIAZQAAAWgQAYQgPAXgaAUQg5Arg7AAQgjAAgSgMgAlPDLQgSgNAAgbQAAgbArgoQA5g0BsgsIACgIQAcAIAHAKQADAFAAANQAAAIgDAFQgBADgFAEIgGACQgFgOgCgBQACABAFAOIADAJIAHAYQAAAWgQAYQgPAYgaATQg5Asg6AAQgkAAgRgNgAqkDLQgSgNAAgbQAAgbArgoQA5g0BsgsIADgIQAbAIAHAKQADAFAAANQAAAIgDAFIgFAHIgHACQgFgOgCgBQACABAFAOIADAJIAIAYQAAAWgRAYQgOAYgaATQg5Asg7AAQgkAAgRgNgAD7gUQgSgNAAgcQAAgbArgnQA5g0BsgtIACgIQAcAHAHAMQADAEAAAOQAAAHgDAFQgBADgFAEIgGADQgGgPgBgBQABABAGAPIACAIIAIAZQAAAWgQAYQgPAXgaAUQg5Arg7AAQgjAAgRgMgAjGiwQgSgNAAgbQAAgbAqgoQA5gzBsguIADgHQAaAHAIAMQADAEAAAOQAAAHgDAFQgCADgEAEIgHACIADAJIAIAYQAAAXgQAYQgOAXgaATQg5Asg7AAQgjAAgRgNgAAPlJQgFgOgBgBQABABAFAOgAD7lLQgSgNAAgcQAAgbArgnQA5g0BsgtIACgIQAcAHAHAMQADAEAAAOQAAAHgDAFQgBADgFAEIgGADIACAJIAIAYQAAAWgQAYQgPAXgaAUQg5Asg7AAQgjAAgRgNgAHSnkQgGgOgBgBQABABAGAOg");
	this.shape_99.setTransform(149.8,293.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CC6699").s().p("AkML5QACgtAAgtQAAAtgCAtQhXgVhHgpQjOh3iUjiQi2kVD4lAIEuAAQgbhCAOhjQAgjcC5g2IATALIEuClQBGhaBshRQAvgkA3giQBVg1BnAjIAZAKQDhBehCE2Ih/DDICmAAQArA/AIBdQAWDziNCIIosFyQiSAfh6AAQhhAAhTgTgAFaEdQhtAtg5A0QgqAnAAAbQAAAcASANQARANAjAAQA7AAA5gsQAagUAPgXQAQgYAAgWIgIgYIgDgJIAHgDQAEgEACgDQADgFAAgHQAAgOgDgEQgIgMgbgHgAAfEdQhrAtg5A0QgqAnAAAbQAAAcASANQARANAjAAQA7AAA4gsQAagUAPgXQAQgYAAgWIgIgYIgDgJIAHgDQAEgEACgDQADgFAAgHQAAgOgDgEQgIgMgbgHgAlgEdQhsAtg5A0QgrAnAAAbQAAAcASANQARANAkAAQA6AAA5gsQAagUAPgXQAQgYAAgWIgHgYIgDgJIAGgDQAFgEABgDQADgFAAgHQAAgOgDgEQgHgMgcgHgAK3gZQhsAsg5A0QgqAnAAAbQAAAcARANQASAMAjAAQA7AAA5grQAagUAPgXQAQgYAAgWIgIgZIgDgIIAHgDQAEgEACgDQADgFAAgHQAAgNgDgEQgIgMgbgHgAhogqQhsAsg5A0QgrAoAAAbQAAAbASANQARANAkAAQA6AAA5gsQAagTAPgYQAQgYAAgWIgHgYIgDgJIAGgCQAFgEABgCQADgFAAgIQAAgNgDgFQgHgLgcgIgAm9gqQhsAsg5A0QgrAoAAAbQAAAbASANQARANAkAAQA7AAA5gsQAagTAOgYQARgYAAgWIgIgYIgDgJIAHgCIAFgGQADgFAAgIQAAgNgDgFQgHgLgbgIgAHikKQhsAtg5A0QgrAnAAAbQAAAcASANQARAMAjAAQA7AAA5grQAagUAPgXQAQgYAAgWIgIgZIgCgIIAGgDQAFgEABgDQADgFAAgHQAAgOgDgEQgHgMgcgHgAAfmmQhrAug5AzQgqAoAAAbQAAAbASANQARANAjAAQA7AAA4gsQAagTAPgXQAQgYAAgXIgIgYIgDgJIAHgCQAEgEACgDQADgFAAgHQAAgOgDgEQgIgMgbgHgAHipBQhsAtg5A0QgrAnAAAbQAAAcASANQARANAjAAQA7AAA5gsQAagUAPgXQAQgYAAgWIgIgYIgCgJIAGgDQAFgEABgDQADgFAAgHQAAgOgDgEQgHgMgcgHg");
	this.shape_100.setTransform(145.7,298);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#33CC33").s().p("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");
	this.shape_101.setTransform(510,669.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},12).to({state:[{t:this.shape_56},{t:this.shape_59},{t:this.shape_54},{t:this.shape_53},{t:this.shape_58},{t:this.shape_57},{t:this.shape_52}]},1).to({state:[{t:this.shape_56},{t:this.shape_59},{t:this.shape_61},{t:this.shape_53},{t:this.shape_60},{t:this.shape_57},{t:this.shape_52}]},1).to({state:[{t:this.shape_56},{t:this.shape_59},{t:this.shape_62},{t:this.shape_53},{t:this.shape_60},{t:this.shape_57},{t:this.shape_52}]},1).to({state:[{t:this.shape_56},{t:this.shape_64},{t:this.shape_63},{t:this.shape_53},{t:this.shape_60},{t:this.shape_57},{t:this.shape_52}]},1).to({state:[{t:this.shape_56},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_53},{t:this.shape_60},{t:this.shape_57},{t:this.shape_52}]},1).to({state:[{t:this.shape_56},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68},{t:this.shape_60},{t:this.shape_57},{t:this.shape_52}]},1).to({state:[{t:this.shape_56},{t:this.shape_67},{t:this.shape_66},{t:this.shape_69},{t:this.shape_68},{t:this.shape_60},{t:this.shape_57},{t:this.shape_52}]},1).to({state:[{t:this.shape_56},{t:this.shape_67},{t:this.shape_66},{t:this.shape_70},{t:this.shape_68},{t:this.shape_60},{t:this.shape_57},{t:this.shape_52}]},1).to({state:[{t:this.shape_56},{t:this.shape_74},{t:this.shape_73},{t:this.shape_66},{t:this.shape_72},{t:this.shape_68},{t:this.shape_60},{t:this.shape_71},{t:this.shape_52}]},1).to({state:[{t:this.shape_76},{t:this.shape_74},{t:this.shape_73},{t:this.shape_66},{t:this.shape_75},{t:this.shape_68},{t:this.shape_60},{t:this.shape_71},{t:this.shape_52}]},1).to({state:[{t:this.shape_76},{t:this.shape_74},{t:this.shape_82},{t:this.shape_81},{t:this.shape_66},{t:this.shape_80},{t:this.shape_68},{t:this.shape_60},{t:this.shape_71},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_76},{t:this.shape_87},{t:this.shape_74},{t:this.shape_86},{t:this.shape_81},{t:this.shape_66},{t:this.shape_85},{t:this.shape_80},{t:this.shape_68},{t:this.shape_84},{t:this.shape_83},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_76},{t:this.shape_88},{t:this.shape_74},{t:this.shape_86},{t:this.shape_81},{t:this.shape_66},{t:this.shape_85},{t:this.shape_80},{t:this.shape_68},{t:this.shape_84},{t:this.shape_83},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_76},{t:this.shape_74},{t:this.shape_87},{t:this.shape_91},{t:this.shape_81},{t:this.shape_90},{t:this.shape_85},{t:this.shape_80},{t:this.shape_68},{t:this.shape_89},{t:this.shape_83},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_76},{t:this.shape_92},{t:this.shape_88},{t:this.shape_91},{t:this.shape_81},{t:this.shape_90},{t:this.shape_85},{t:this.shape_80},{t:this.shape_68},{t:this.shape_84},{t:this.shape_83},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_76},{t:this.shape_93},{t:this.shape_92},{t:this.shape_87},{t:this.shape_91},{t:this.shape_81},{t:this.shape_90},{t:this.shape_85},{t:this.shape_80},{t:this.shape_68},{t:this.shape_84},{t:this.shape_83},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_91},{t:this.shape_101},{t:this.shape_81},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_85},{t:this.shape_90},{t:this.shape_97},{t:this.shape_96},{t:this.shape_68},{t:this.shape_79},{t:this.shape_95},{t:this.shape_77},{t:this.shape_80},{t:this.shape_83},{t:this.shape_94}]},1).to({state:[]},1).wait(3));

	// Sky
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(7,1,1).p("EgvXhANQAAgBAAAAQAAgIgmABQhrAFiJAGQqdAbzEAVQmAAHmqBNQrHCAkWELQi0Crh4BoQhAA3hLA+QhlBYljGcQgSAVhhBdQhwBwhlCCQlBGdjzJqQm0RUhJKKQgZDeALDzQAAAIALC5QAGBwAABNQAAI2AeDNQAhDkBtBhQAyAsBYAqQAlASCeBDQFHCLETCtQE/DKQSCTQGBA3GNAiQFcAeCvAAQE1AAEjgiQEjgiGkAAQH9AAFjAlQH/A0OoCyQc7FfWkCZQQQBuLoAAQJuAAHwh2QDOgwDkhPQCTgzERhqQJfjrGHhvQKtjDNghuQHXg8E0iTQBvg1CVhdQD4iaAVgMQCChNBHiTQA/iCAZjKQATidABj/QgEkxAAiiQAAyWpiyfQj1nalhnvQkNl6l4nAQj/keh3iXQjTkKAAiFEAqLg+7QgJAQhVAHQjjAUr3gvQlPgUmaggQlTgbgBAAI+SAYIjqADQASAABcAKQguABg/gBQjOAAmDgLQqIgUiZgFQgngBgHAAQANAAAWAMQALAGAAgREAqNg+/IjdAAQATAABoANQBXAHAJgQQABgCABgCgEBspg8RQghgJgkgIQmEhcqrhjQq0hjjQAAQiZAAp8BCQp7BDhGAAIrOAAEgX4g/pQAJABAKABQBpAIAAgUQAAAIh8ACg");
	this.shape_102.setTransform(473.8,382);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#66FFFF").s().p("EAV0A/XQ2kiZ87lfQuoiyn/g0Qljgln9AAQmkAAkjAiQkjAik1AAQivAAlcgeQmNgimBg3QwSiTk/jKQkTitlHiLQiehDglgSQhYgqgygsQhthhghjkQgejNAAo2QAAhNgGhwIgLjBQgLjzAZjeQBJqKG0xUQDzpqFBmdQBliCBwhwQBhhdASgVQFjmcBlhYQBLg+BAg3QB4hoC0irQEWkLLHiAQGqhNGAgHQTEgVKdgbID0gLQAmgBAAAIIAAABIgugBQANAAAWAMQALAGAAgRIMhAZQGDALDOABIBtgBIATACQBpAIAAgUIAAgDIeSgYIFUAbQGaAgFPAUQL3AvDjgUQBVgHAJgQIACgEIAAAAILOAAQBGAAJ7hDQJ8hCCZAAQDQAAK0BjQKrBjGEBcIgKAsQAACFDTEKQB3CXD/EeQF4HAENF6QFhHvD1HaQJiSfAASWQAACiAEExQgBD/gTCdQgZDKg/CCQhHCTiCBNIkNCmQiVBdhvA1Qk0CTnXA8QtgBuqtDDQmHBvpfDrQkRBqiTAzQjkBPjOAwQnwB2puAAQroAAwQhug");
	this.shape_103.setTransform(473.8,382);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(7,1,1).p("EgvXhANQAAgBAAAAQAAgIgmABQhrAFiJAGQqdAbzEAVQmAAHmqBNQrHCAkWELQi0Crh4BoQhAA3hLA+QhlBYljGcQgSAVhhBdQhwBwhlCCQlBGdjzJqQm0RUhJKKQgZDeALDzQAAAIALC5QAGBwAABNQAAI2AeDNQAhDkBtBhQAyAsBYAqQAlASCeBDQFHCLETCtQE/DKQSCTQGBA3GNAiQFcAeCvAAQE1AAEjgiQEjgiGkAAQH9AAFjAlQH/A0OoCyQc7FfWkCZQQQBuLoAAQJuAAHwh2QDOgwDkhPQCTgzERhqQJfjrGHhvQKtjDNghuQHXg8E0iTQBvg1CVhdQD4iaAVgMQCChNBHiTQA/iCAZjKQATidABj/QgEkxAAiiQAAyWpiyfQj1nalhnvQkNl6l4nAQj/keh3iXQjTkKAAiFEAqLg+7QABgCABgCIAAAAIjdAAQATAABoANQBXAHAJgQQgJAQhVAHQjjAUr3gvQlPgUmaggQlTgbgBAAI+SAYIjqADQASAABcAKQAJABAKABQBpAIAAgUQAAAIh8ACQguABg/gBQjOAAmDgLQqIgUiZgFQgngBgHAAQANAAAWAMQALAGAAgREBspg8RQghgJgkgIQmEhcqrhjQq0hjjQAAQiZAAp8BCQp7BDhGAAIrOAA");
	this.shape_104.setTransform(473.8,382);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_103},{t:this.shape_102}]},10).to({state:[{t:this.shape_103},{t:this.shape_104}]},19).to({state:[]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(768.9,630.9,575.2,274.4);
// library properties:
lib.properties = {
	id: '781D5DDD4EAE224BAD05A1446012C8EF',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFCCFF",
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
an.compositions['781D5DDD4EAE224BAD05A1446012C8EF'] = {
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