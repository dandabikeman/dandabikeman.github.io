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


(lib.tv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(118));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("A0TSFIGUgWIAAiXIYiAAIAACMIH0AAIAAqxIufAAIAIjHIVoAAIAWsqIAMm9IAEiJIgmAAMgzCAAAIgzVwIUZAAIAADHIufAAg");
	this.shape.setTransform(167.8,115.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgCi2IALm9QAkDOgvDvQAEGVgZGVg");
	this.shape_1.setTransform(334.2,76.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AEBK4IpzAAI0ZAAIAz1vMAzCAAAQAWBCAMBGIgMG+IgWMpg");
	this.shape_2.setTransform(167.6,69.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AZiK4IAWspIAMm+QAjDOgvDwQAEGUgaGVgAD6K4IpzAAI0ZAAIAy1vMAzCAAAQAWBCAMBGIgMG+IgWMpgAaEovIAAAAg");
	this.shape_3.setTransform(168.3,69.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AEBK4IpzAAI0ZAAIAz1vMAzCAAAQAWBCAMBGIgMG+IgWMpg");
	this.shape_4.setTransform(167.6,69.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AEBK4IpzAAI0ZAAIAz1vMAzCAAAQAWBCAMBGIgMG+IgWMpg");
	this.shape_5.setTransform(167.6,69.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_5},{t:this.shape}]},1).to({state:[]},15).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,340.5,236.3);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("AAVD/QjdgGgVhbQgWhcAEhsQADhtAtg2QAtg2BuAGQBsAGA7gDQA8gDAXBUQAYBVACCsQADCnjRAAIgNAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-24,-25.4,48.1,50.9), null);


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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.AnimatedCardOCorral = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_10 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(20));

	// door
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(654.8,307.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFEC1A").ss(5,1,1).p("ADXipQAXBVADCrQACCtjegFQjdgGgVhcQgVhcADhrQADhtAtg2QAug2BtAGQBsAGA8gDQA7gDAYBUg");
	this.shape.setTransform(654.7,307.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(5,1,1).p("Egb4gs+MA3xAAAMAAABZ9Mg3xAAAgAXhuTIxEAAIAAuBA4ntqISAAAIAAuqA4rQWIRIAAIAAZjA4rOoITLAAIAAbSA4nolISYAAIAATYIybAAA4np4IUDAAIAAWSI0HAPAXdolIyYAAIAATYIScAAAXdp4I0DAAIAAWSIUHAPAXhslIzGAAIAAvvA4nr8IUCAAIAAwYAXdQWIxJAAIAAZnAXcOoIzKAAIAAbUA4a/qMAvmAAAQ4F353hX5g");
	this.shape_1.setTransform(521.3,287.9);

	this.instance = new lib.tv();
	this.instance.parent = this;
	this.instance.setTransform(195.6,117.7,1,1,0,0,0,167.8,115.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AWj84Ij0bJEAi9gYRIKCF7IjhbTMAgsAT8EgysgMVIH5mhEhKJgQNIIJl0Eg+cgO+IKaoN");
	this.shape_2.setTransform(551.5,186.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#220000").s().p("AzUkEIOfAAIAAjHIJzAAIgIDHIOfAAIAAKwIn0AAIAAiMI4hAAIAACXImUAVg");
	this.shape_3.setTransform(189.3,187.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.movieClip_1}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance}]},10).wait(20));

	// Label
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AACCvIAAjkQgXASgVALQgXALggAKIAAhPQAwgPAbgWQAbgWAPghIBPAAIAAFdg");
	this.shape_4.setTransform(607.3,316.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgMQgMgLgTgBQgWABgOARg");
	this.shape_5.setTransform(561.6,321.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_6.setTransform(529.6,320.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_7.setTransform(497.6,321.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_8.setTransform(465.6,321.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_9.setTransform(432.1,316.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_10.setTransform(609.1,316.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_11.setTransform(609.4,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_10}]},10).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_11}]},10).wait(10));

	// background
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#666666").ss(5,1,1).p("EA6NgJaISOAAIAApzQo8sSpSgbIAAWgIAACsIAANbISOAAIAAtbIyOAAEA3igJaIAACsIAANdIAAEBIxggIIAAUZIRgAAIAA0REA3igJaIxgAAIAApzQI5rXInhNgEA6NAGtIAAEEIAAUQISOAAIAA0JIyOgHEA3igGuIxgAAIAANqIRggNEAkXgUgQVw70UOb0MAAAA27Mgp+AAAgEg4dgJaISNAAIAApzQo7sTpSgaIAAWgIAACsIAANaISNABIAAtbIyNAAEg7IgJaIxgAAIAApzQI5rXInhNIAAWXIAACsIxgAAIAANqIRggOIAAEBIxggHIAAUZIRgAAIAA0SEg4dAGsIAAEFIAAUQISNAAIAA0JIyNgHEg7IgGuIAANcEhOUgUgQVx70UNb0MAAAA27Mgp+AAAg");
	this.shape_12.setTransform(514.9,238.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#3C2A06").ss(5,1,1).p("EApkgERIAAKwMAm4gA/EA7LgERIAAqxEApkgERIRnAAIVRAQEglJAGfIAAIkEglJAGfIvqAAIAfqwIVCAAIAfqxAQZGfIgQIkAQZGfIvaAAMgmIAAAAA/kRIJSAAIAAqxAA/kRIAAKwA/SkRMAgRAAAEApkAGfI5LAAAKRkRIfTAAEg0zAGfI7oAAEhQbgERIcHAA");
	this.shape_13.setTransform(511.7,672.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("EhQbAMCMAAAhIDMA2DAAAMA3wAAAMAzEAAAMAAABZ+I1RAAI2kAAEBQcA8CI6KAAA6Yd9MAkpAAAITHAAEg6LA8CI2QAAIAAokIAAqwIAAqxMAxoAAA");
	this.shape_14.setTransform(511.7,384.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E5E0D3").s().p("EAIyAs/MgkpAAAMAAAhZ9MA3vAAAMAAABZ9gEgScgk9Il+FTMAvmAAAIoCmEQn8lgoHAAQorAAo4GRg");
	this.shape_15.setTransform(521.3,287.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("EAkXAiaMAAAg25QVw71UNb1MAAAA25gEA6NAfBISNAAIAA0JIyNgIgEAmCAfBIRgAAIAA0SIxggHgEA6NAKwIAAkEISNAAIAAtaIyNAAIAANagEA3iAKvIAAkAgEAmCAG8IRggNIAAtdIxgAAgEA6NgGuIAAisISNAAIAApzQo7sSpSgaIAAWfgEA3igGuIAAisIAA2XQonBNo5LXIAAJzIRgAAgEhOUAiaMAAAg25QVx71UOb1MAAAA25gEg4cAfBISMAAIAA0JIyMgIgEhMoAfBIRgAAIAA0SIxggHgEg4cAKwIAAkEgEg7IAKvIAAkBIAAtcIxgAAIAANqIRggOgEg4cAGsISMAAIAAtaIyMAAgEg4cgGuIAAisISMAAIAApzQo7sTpRgZIAAWfgEg7IgGuIAAisIAA2XQonBNo5LXIAAJzIRgAAg");
	this.shape_16.setTransform(514.9,238.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00FFFF").s().p("EA6VAhSIAA0RISNAIIAAUJgEAmJAhSIAA0ZIRgAHIAAUSgEg4VAhSIAA0RISNAIIAAUJgEhMhAhSIAA0ZIRgAHIAAUSgEAmJgEdIRgAAIAANcIxgAOgEhMhgEdIRgAAIAANcIxgANgEA6VAI9IAAtaISNAAIAANagEg4VAI9IAAtaISNAAIAANagEA6VgHJIAA2gQJRAaI8MTIAAJzgEAmJgHJIAApzQI5rXInhNIAAWXgEg4VgHJIAA2gQJRAaI8MTIAAJzgEhMhgHJIAApzQI5rXInhOIAAWYgA3T1tIF+lTQRMsIQaLXIICGEg");
	this.shape_17.setTransform(514.1,224.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D3300").s().p("EA2SAPCMgmJAAAIAQojIvaAAIAAqvIJSAAIfTAAIAAKvI5LAAIZLAAMAm4gA/IAAJigAQJPCMg1SAAAIAAojMAmIAAAIPaAAIgQIjgEglJAPCI1CAAI2QAAIAAojIAAqvIAAqyMAxoAAAIEbAAMAkpAAAITHAAIHPAAIWkAAIVRAAIAALBI1RgPIAAqyIAAKyIVRAPIAAJhMgm4AA/IAAqvI/TAAIAAqyIAAKyIpSAAMggRAAAIAfqyIgfKyMAgRAAAIAAKvMgmIAAAIvqAAIAfqvIVCAAI1CAAI8HAAIcHAAIgfKvIPqAAIAAIjgEg0zAGfI7oAAgEA7LgEQIxnAAgEApkAGfgEglJAGfgEBQcAFggEBQcgEBgAKRkQgEg0UgEQg");
	this.shape_18.setTransform(511.7,672.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("EA7LAs/I2kAAInPAAMAAAhZ9MAzEAAAMAAABZ9gEAknAauIAPAAMAp+AAAMAAAg26Q0O701wb0IgPAAgEgezAs/MgxoAAAIAAx6MAAAhIDMA2DAAAMAAABZ9gEhN0gcMMAAAA26IAAAXMAqAAAAMAAAg3RIgCAAQqHt6qfAAQqgAAq4N6g");
	this.shape_19.setTransform(511.7,287.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("A7Q84IKdAAICJAAMAp7AAAMAAAA5xIi8AA");
	this.shape_20.setTransform(870.3,186.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF66").s().p("AxhN1QCdm5H2gBQBWAbCfgFIK430IAAgJIADAFIAKgSIgEAdIEaChIFbDHIAFADIgzGJIiuVKIiBAAQkHAYj+AAQrVAAqHjFg");
	this.shape_21.setTransform(727.3,138.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#220000").s().p("AaSc5MggqgT8ICu1JQAfi9AjjHIgTgIIlbjIQh+hRiZhtIgKASIgCgEIAAAIIq6X1QieAFhWgaQiYgvBJiOIDj5TIKdAAIADAhQA5gRBNgQMAp8AAAMAAAA5xg");
	this.shape_22.setTransform(857.8,186.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("EhQnA9PMAAAh6dMBtoAAAIjjZTQhICOCXAvQn2ABidG4QNpEKP5hdICBAAMAgrAT8MAAABArgEAzegysIgFgCIAUAJQgjDGgfC9gEApkg4WIAEgdQCYBsB+BSgEAneg9OICKAAQhOAQg4ASIgEgig");
	this.shape_23.setTransform(510.1,393.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_19},{t:this.shape_18},{t:this.shape_15},{t:this.shape_12},{t:this.shape_13},{t:this.shape_14}]},9).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},9).wait(11));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.parent = this;
	this.next_btn.setTransform(903.9,713.6);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(506.4,381.5,1034.6,773.4);
// library properties:
lib.properties = {
	id: 'EA040A00E82F3640B8207E964E904A75',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFFFFF",
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
an.compositions['EA040A00E82F3640B8207E964E904A75'] = {
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