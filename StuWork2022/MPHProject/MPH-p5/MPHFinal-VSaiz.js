(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AEnAdQALAFAOAFQAxARBaAQQAMACANADQAXADAXAEQDWAcEngIQACgKAAgKQABgKgBgKQgCgMgDgNQAAgBgBgBQgBgFgBgEQAAgBgBgCQgWg7hIgOIjGgfQgvgHgngFQhZgLgxgCQgagBgPABIg/A3QhDA1grAVQgEACgDACgAkmAdQgLAFgOAFQgxARhaAQQgMACgNADQgXADgXAEQjWAckngIQgCgKAAgKQgBgKABgKQACgMADgNQAAgBABgBQABgFABgEQAAgBABgCQAWg7BHgOIDHgfQAvgHAngFQBZgLAxgCQAagBAPABIA/A3QBDA1ArAVQAEACADACg");
	this.shape.setTransform(0,-0.0024);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AED87D").s().p("AISBUIgvgHIgYgFQhagQgxgRQgPgFgLgFIAHgEQArgVBDg1IA/g3QAQgBAaABQAxACBYALIBXAMIDGAfQBIAOAVA7IABADIADAJIABACIAEAZQACAKgBAKQAAAKgCAKQhEABg/AAQjVAAilgVgAwOBoQgCgKAAgKQgBgKACgKIAEgZIABgCIADgJQCmAgEBg5QBrgZgOhSQAagBAQABIA/A3QBDA1AqAVIAIAEQgLAFgPAFQgxARhaAQIgYAFIgvAHQilAVjVAAQg/AAhEgBg");
	this.shape_1.setTransform(0,-0.0024);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C1F08B").s().p("AkCA9IABgDQAWg7BHgPIDFgeIBXgMQBYgLAygCQANBQhrAbQikAkh/AAQhHAAg8gLg");
	this.shape_2.setTransform(-77.3244,-3.2862);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-106.6,-13,213.2,26.1), null);


(lib.Hair = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgIAtQgigHgMgOQgKgMABgQQAAgQALgMQANgNAVgBQAQgCAUAGQAWAGAKAIQARAOgDAWQgCAXgUALQgLAFgRAAQgKAAgMgCg");
	this.shape.setTransform(46.6499,38.6705,0.6576,0.6221);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgzA8QgQgBgLgNQgLgNgBgQQAAgQAKgNQAJgOAPgHQAPgGAhgFQAJgCAVgIQATgGANACQAXAEAJAWQAKAWgOATQgLAQgaAIQgeAHgOAFIgZAKQgNAFgKAAIgEAAg");
	this.shape_1.setTransform(25.4854,44.765,0.6576,0.6221);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgqBpQgQgBgMgMQgMgNAAgQQAAgOAQgcQAphBATgbQAPgWANgGQAUgKAUAMQAUALABAXQACAUgRAWQgUAWgIAMQgHAKgJATQgJAUgGAJQgUAigeAAIgBAAg");
	this.shape_2.setTransform(32.2749,69.3378,0.6576,0.6221);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AA1BJQgQAAgPgIQgLgFgQgLIgbgRIgigQQgTgLgIgMQgKgQAGgTQAFgTAQgHQAPgHAUAFQANAEAVALIBDAmQAcAPAHANQAIANgEAQQgEAQgMAJQgMAIgQAAIgCAAg");
	this.shape_3.setTransform(-40.9614,65.1693,0.6576,0.6221);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AAnBHQgLgCgMgHIgVgNQgegPgPgJQgZgPgIgVQgHgXANgRQAOgUAWABQAMABANAIIAWAOIAZAOQAQAIAJAGQAdATABAaQABATgPAOQgNAMgPAAIgFAAg");
	this.shape_4.setTransform(-38.0928,41.4337,0.6576,0.6221);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AhFBTQgOgKgDgPQgEgVAQgZQAKgMAVgYQAHgJAMgUQAMgRALgJQAPgMAVAAQAWAAAPANQAPANABAWQAAAXgPAMQgFAFgJAEIgPAIQgLAHgLAOIgRAZQgUAggZAEIgFABQgNAAgLgJg");
	this.shape_5.setTransform(-61.0464,26.3312,0.6576,0.6221);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("Ag5AuQglAAgOgMQgSgMABgWQABgWASgLQANgIAggBIB8gCQAcgBAOAHQAKAGAGALQAGAKgBALQAAALgGALQgHAKgKAFQgJAGgNABIgYACg");
	this.shape_6.setTransform(-54.3901,-47.936,0.6576,0.6221);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgZBZQgSgSgIgZQgEgQgBgYIABgnIAAgaQABgOAFgKQAKgUAVgDQAKgCAJAEQAKADAHAIQALANACAcQACAVgBAZQgCANADAJQADAHALAMQAPAVgIAWQgDALgJAIQgJAIgLACIgIABQgUAAgTgTg");
	this.shape_7.setTransform(-17.644,-63.866,0.6576,0.6221);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AhNAxQgPgJgFgUQgEgUALgNQAMgPAbgIQAqgOAqgEQAfgCAOAJQAUALABAXQABAWgSANQgKAJgTADIghAEQgKABgNAFIgZAIQgMADgLAAQgPAAgLgGg");
	this.shape_8.setTransform(3.7124,-73.2332,0.6576,0.6221);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AgVB3QgTgJgFgTQgDgNAFgcQAIgzgIgxIgCgXQgBgNADgJQAEgMALgIQALgHANgBQALgBAMAGQALAHAHAKQALASgBAnIgBBVQgBAggEAMQgIAZgSAJQgIAFgIAAQgKAAgKgFg");
	this.shape_9.setTransform(51.867,-48.2057,0.6576,0.6221);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AhBBgQgKgDgIgGQgIgIgEgJQgEgNACgVQAIguAWgZQANgPAmgWQATgMAMgFQATgHAQAAQASAAAPAMQAQAMgBASQgBAbgnASIgdANQgRAIgIALQgGAIgIAYQgIAVgJAJQgMAMgPAAIgLgBg");
	this.shape_10.setTransform(29.9895,-46.4946,0.6576,0.6221);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AA+BCQgxgHgqgUQgagMgIgCIgUgDQgNgCgHgDQgRgIgGgTQgGgVALgQQAOgRAcgCQAZgCAlAQQAuAUAOADIAnAGQAWAFAMALQARAQgFAXQgFAXgWAJQgIADgMAAQgIAAgLgBg");
	this.shape_11.setTransform(37.5818,-64.8064,0.6576,0.6221);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AAUBlQgMgIgIgTQgJgXgGgLQgHgMgQgQIgZgaQgNgQgFgRQgGgTAHgQQAHgPARgGQARgGAPAHQALAEAPAUQAvA7ARAbQAPAZADAQQAFAZgNARQgJANgRADIgHAAQgNAAgKgGg");
	this.shape_12.setTransform(67.7953,-34.3136,0.6576,0.6221);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AghBeQgNgIgDgNQgDgKACgRQAFg+AIgjQAGgZALgLQAPgPAVADQAWADAKAUQAHAQgEAYIgJApIgDAgQgBAUgFAMQgFANgLAIQgLAJgNABIgFABQgLAAgKgHg");
	this.shape_13.setTransform(82.1325,4.3673,0.6576,0.6221);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AgYCOQgQgCgKgLQgSgUAIgxQAMhNAShCQALgpATgMQAQgJAUAHQAUAIAFASQAEAMgDAPIgHAbQgUA9gHBCQgDAZgDALQgGAUgNAJQgKAIgNAAIgEAAg");
	this.shape_14.setTransform(48.2869,54.7933,0.6576,0.6221);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("AgxBqQgUgKgDgWQgCgMAGgPQADgJAJgRQAXgpARgqQAIgTAGgIQAIgNANgFQAKgDAMADQALADAHAIQAPARgBAYQAAAWgUAkIgiBBQgIAOgFAGQgGALgKAFQgIAFgLABIgCAAQgKAAgIgEg");
	this.shape_15.setTransform(45.7204,24.164,0.6576,0.6221);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("AhGA+QgSgOACgXQABgXATgMQAHgEANgFIAUgIQAGgEAXgUQASgQAPgDQALgCALAEQAMAEAHAIQAHAJACAMQADAMgEALQgGAOgYATQgpAggUAKQgTAIgQAAQgQAAgNgJg");
	this.shape_16.setTransform(60.0838,-16.1942,0.6576,0.6221);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("AgJBcQgKgMgKgUQgLgWgEgPQgDgegFgPQgLgVgCgMQgCgLADgLQAEgLAIgIQAIgHAMgDQALgDALAEQATAFAMAXQAJARAEAZQAFAgAFAIQAEAKAMASQANAZgKAXQgFAMgKAHQgLAIgNAAQgSAAgPgQg");
	this.shape_17.setTransform(31.7815,0.4898,0.6576,0.6221);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9900").s().p("Ag9CWQgUgLgDgUQgCgPAMgdQANgiANgoIAbhPQAIgYAFgLQAJgTAMgKQAPgMAUgBQAVAAAKAPQAOAVgSArQguBzgPAzQgHAYgGAMQgIASgPAIQgIAEgJAAQgLAAgLgGg");
	this.shape_18.setTransform(19.6169,-25.9425,0.6576,0.6221);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9900").s().p("AAHAyQgegXgNgEQgXgEgKgFQgVgJgDgXQgBgLAEgKQAEgKAJgHQALgJAUgCQAdgDAYAMQALAFANAKIAXARIAUAPQALAJAFAJQAKAVgMAUQgFAJgKAGQgKAFgLABIgBAAQgSAAgagTg");
	this.shape_19.setTransform(4.2256,-46.7944,0.6576,0.6221);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF9900").s().p("AgxBwQgLgGgHgKQgHgKAAgNQgBgNAGgKIAKgNIALgOQAEgHADgLIAFgSQAHghAOgcQAPgfASgIQAQgGARAIQARAIAFAQQAFARgIAWQgFANgMAZQgFAMgGAaQgHAagFAMQgIAUgOAOQgPAPgSACIgEAAQgKAAgKgFg");
	this.shape_20.setTransform(-3.4123,-28.2779,0.6576,0.6221);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF9900").s().p("ABABJQgMgCgTgHIhPgeQghgNgMgJQgYgRAAgZQgBgQANgNQAMgNAQgBQALAAAOAGIAXALQAiATAmAJIAbAIQAPAFAJAHQAVAPAAAYQAAAMgGAKQgGALgKAFQgKAFgLAAIgKgBg");
	this.shape_21.setTransform(-22.7578,-48.3941,0.6576,0.6221);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF9900").s().p("AiGBXQgMgJgEgOQgEgOAFgPQAFgOALgKQAHgFAMgGIAUgHQAIgEAQgKIAXgOQAQgJAdgKQAggMAMgFIAUgKQAMgGAIgDQAZgJATAHQALAFAIAKQAHAKABAMQABAMgFALQgGALgKAHQgFADgJADIgPAFIggANQgKAFgZAJQgYAIgMAGQgPAHgVAOIgkAXQgXANgNABIgDAAQgNAAgLgJg");
	this.shape_22.setTransform(-44.8907,-59.7162,0.6576,0.6221);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF9900").s().p("AgJCkQgWgCgLgZQgFgLgDgfQgHhMADgoQADhAAZguQALgVAOgHQARgJASAKQAVAOABAeQAAAOgIAjQgQBDAEBGIABAeQAAAQgEAMQgFAPgMAKQgLAJgLAAIgDAAg");
	this.shape_23.setTransform(-44.0865,-31.9732,0.6576,0.6221);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF9900").s().p("AgrBPQgPgDgKgMQgJgKgCgQQgCgOAGgOQAGgRAUgTQALgLAggXQAXgRAOgCQALgBALAEQAMAFAGAJQAHAJACAMQABAMgFALQgGAOgWAOQgbASgHAIIgOAVQgIAMgIAFQgIAGgKAAIgJgBg");
	this.shape_24.setTransform(-25.1197,-32.9949,0.6576,0.6221);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9900").s().p("AhfCFQgKgHgGgLQgFgLABgMQACgNAHgKQAFgGANgMQAFgGANgUQAzhOAyg8QAKgNAJgGQASgLAUAGQAVAIAGAUQAFAUgNAVQgGALgUAWQgVAYgbAnIgrBDQgOAUgMAKQgRAPgTAAQgMAAgLgHg");
	this.shape_25.setTransform(-71.8248,-26.9924,0.6576,0.6221);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF9900").s().p("AhdAmQgMgMABgUQACgTAOgLQAMgKAYgFQAYgFAhgFQAmgFAUAGQAPAFALAJQAMALADANQAEAOgJAPQgIAPgPAFQgKADgQgBIgbgCQgMAAgRAEIgeAHQgKACgIAAQgYAAgPgOg");
	this.shape_26.setTransform(-53.9088,4.3409,0.6576,0.6221);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF9900").s().p("AAjA1QgmgCgtgNQgWgGgKgKQgJgJgDgNQgDgNAFgMQAGgMALgIQAMgIANAAQAJAAAOAFIAWAGQANADAdABQATACAOAKQAQAKAEAQQAFAOgIAPQgHAQgPAFQgIAEgQAAIgIgBg");
	this.shape_27.setTransform(-20.963,-12.6815,0.6576,0.6221);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF9900").s().p("AgjAsQgjAAgOgKQgSgNAAgVQABgXASgMQAOgJAiAAIBHAAQAkABAPAKQAOAKACAUQACASgMAMQgKALgTAFQgNACgWAAg");
	this.shape_28.setTransform(6.5175,19.3528,0.6576,0.6221);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF9900").s().p("AgiBwQgRgJgFgQQgFgPAFgdIAJg7QAIgrAHgQQAPgkAcgFQAQgDAPAMQAPALACARQACALgFAOIgJAYQgKAcgEAoQgDAggEAMQgIAagUAHQgHADgGAAQgKAAgJgGg");
	this.shape_29.setTransform(-8.8193,15.5718,0.6576,0.6221);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF9900").s().p("Ag4BmQgRgMgCgSQgCgTATggIAagsQAOgaAEgMQAIgYAEgGQAJgPAUgDQAUgDAOANQANALACAVQACASgHATQgFANgMASIgTAgQgMAfgJAOQgOAagWAFIgJABQgNAAgMgIg");
	this.shape_30.setTransform(-19.7401,39.4311,0.6576,0.6221);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9900").s().p("AgLA5QgMgHgFgMQgEgOgEgGIgMgUQgHgNAFgQQAFgQAMgIQANgIAQABQAPABAMAKQAPAMAJAaQAKAcgGATQgEAMgLAIQgLAIgNABIgDAAQgKAAgKgGg");
	this.shape_31.setTransform(-25.1714,8.3412,0.6576,0.6221);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF9900").s().p("AgrA3IhUAAQgUAAgLgEQgLgFgHgJQgIgKgBgLQgBgMAFgKQAFgLAKgGQANgJAegBQAlgBBLABQBBgBAsgLQAZgHAJgBQATgDAOAIQAKAFAGALQAFAKAAAMQgCAXgVANQgJAGgWAFQg5ANgtADQgVACgcAAIgYAAg");
	this.shape_32.setTransform(-56.4876,-9.432,0.6576,0.6221);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF9900").s().p("Ag5C4QgNgDgIgJQgIgKgCgMQgDgMAEgMQACgHAFgIIAIgOQAHgNANgnQAbhWAZhfQAFgXAHgJQAIgLANgEQANgEANADQAMAFAJAKQAJALABANQAAAJgFAUIgkCAQgZBagWArQgPAggUAHQgGACgHAAQgFAAgGgCg");
	this.shape_33.setTransform(-57.6092,42.2478,0.6576,0.6221);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF9900").s().p("AALCEQgYgLgMgsQgKglgEgjIgDgYQgCgPgFgJIgLgUQgHgNgCgIQgCgNAFgMQAGgLAKgHQAKgHANAAQANgBALAGQASAJANAaQALAYAGAtQAGAzAGATIAKAcQAFARgDAMQgDASgTAKQgKAFgKAAQgIAAgIgDg");
	this.shape_34.setTransform(-77.8567,16.0637,0.6576,0.6221);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF9900").s().p("AhrBGQgPgRADgVQAFgYAbgSQAPgKAigPIApgZQAZgPATgFQASgFAQACQATADAKAMQAKAKABAPQAAAPgIALQgHAKgOAHIgaAKQg0AUguAiIgSAMQgLAHgKABIgGABQgQAAgOgPg");
	this.shape_35.setTransform(-5.8925,63.824,0.6576,0.6221);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF9900").s().p("AiCA/QgOgIgHgOQgIgPAFgOQAGgSAagJQAJgDAigFQAdgEAygRQA3gTAYgEQArgIAVARQAOAMAAAVQABAUgOAMQgLAJgTAEIghAEQgcAEgxASQgyATgZAEQgMACgLAAQgVAAgPgIg");
	this.shape_36.setTransform(-0.3044,77.6768,0.6576,0.6221);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF9900").s().p("AANBEQgagNgOgJQgWgUgNgIQgXgMgKgIQgJgIgEgMQgEgMACgMQADgMAIgJQAJgKALgDQAbgIAeAZIAXAVQAOAMALAGQAPAIAhALQAdAMAGAVQAFAPgJAQQgIAPgQAGQgHACgJAAQgVAAgfgOg");
	this.shape_37.setTransform(-33.9002,57.2431,0.6576,0.6221);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF9900").s().p("ABQCMQgMgEgIgJQgHgHgFgNIgKgXQgJgTgXgaQgSgVgPgOQgJgHgfgYIghgYQgWgOgGgGQgOgRAFgWQAFgWAWgIQAWgIAaAPQAIAEAfAaIAsAhQAOAMASATIAcAgQAaAfATAjQASAhgGAVQgDAMgKAIQgJAIgMACIgHABQgJAAgIgEg");
	this.shape_38.setTransform(-40.5625,22.2787,0.6576,0.6221);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF9900").s().p("AiKA1QgSgGgHgSQgIgSAIgPQAIgUAfgMQAqgRBBgBIBuABQAVgBAKABQARACALAHQAOAKACATQADARgLANQgRAWgxAAQg6gCgdAAQgxABgkAKIgeAIIgPABQgIAAgHgCg");
	this.shape_39.setTransform(57.5399,-0.407,0.6576,0.6221);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF9900").s().p("AhfCPQgMgIgFgMQgFgMADgWQADgRAHgPIAQgdIAZgnQAJgPAJgNQAKgNAWgVQAVgXAKgMIAQgVQAKgLAKgFQAKgFANACQAMABAKAHQAJAHAFAMQAEALgCAMQgCALgJANQgMASgbAbQgeAegKANQgNARgTAhQgLATgEALIgGAYQgFANgLAIQgLAJgOABIgDAAQgMAAgLgGg");
	this.shape_40.setTransform(60.8095,30.2488,0.6576,0.6221);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF9900").s().p("AhVBsQgLgDgJgHQgIgIgEgLQgEgLADgLQADgSAVgSQAPgPAkgZQAjgZAPgQIAQgRIASgQQAWgRAVACQAQADALANQALAOgCAQQgBAOgKANQgHAJgPAOIgtAlIghAZQgTAOgMAMIgTASQgLAKgLADQgGACgGAAIgKgBg");
	this.shape_41.setTransform(24.1561,58.8767,0.6576,0.6221);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF9900").s().p("AgWCNQgXgCgWgaQgggnAFgqQADgfAbggQAPgTAiglIASgXQAMgNAKgHQAOgJAOgBQARgCALAJQALAJADAPQADAPgGAPQgEAMgLANIgUAVIguAtQgMAMgBAJQgDALAKAQQAPAWABAFQAHATgPATQgNAQgTAAIgDAAg");
	this.shape_42.setTransform(-0.8996,44.5933,0.6576,0.6221);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF9900").s().p("Ah1BiQgKgJgCgQQgBgOAHgNQAJgUAggSQAVgLAsgWQAkgVATgXIAMgQQAIgKAHgEQANgJASADQARAEAJANQAIALAAAQQAAAPgHAOQgKAUgdAWQgqAhhVAvQgWANgOADIgMABQgPAAgLgJg");
	this.shape_43.setTransform(24.4855,28.1783,0.6576,0.6221);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF9900").s().p("AACCvQgdgWgPgTQgKgMgPgaQgXgmgFgXQgCgOAAgaIAAh/QAAgXADgKQAGgPANgJQAOgJAQABQAPABAMAMQAMAMACAPIgBAPIgCAOQgCARAAAaIAABGQAAAXADAMQADAMANAXQAQAcAOAMQAFAEAVALQAQAIAHAJQAHAJACAMQACALgEALQgEAKgJAIQgJAHgLACIgHABQgXAAgfgXg");
	this.shape_44.setTransform(12.2183,-2.4712,0.6576,0.6221);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF9900").s().p("AAgCtQgOgBgMgJQgLgJgGgOQgDgIgCgRIgFgjQgDgggGgUIgWhcQgDgSgEgIIgLgSQgGgMACgOQACgPAKgKQAKgKAOgCQAOgCANAGQALAGALAPQAKAPAGASIAFAXIAEAWQAFAcAPA0IALA9IAHApQADASgCAJQgDAOgNAKQgLAIgNAAIgDAAg");
	this.shape_45.setTransform(39.1795,-29.6442,0.6576,0.6221);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF9900").s().p("ABmBGIgOgJIgUgHQgMgEgUgMQgVgLgKgEQglgQgoAMIgcAKQgPAEgMgBQgMgCgJgIQgKgHgEgLQgEgLACgMQADgMAIgIQAJgKAYgJQA0gSAnACQAuADA0AbQASAKAJAEIAdAIQARAHALAPQAKAOACAOQABALgFALQgFALgJAHQgKAGgMABIgEAAQgKAAgJgFg");
	this.shape_46.setTransform(5.032,-57.7794,0.6576,0.6221);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC00").s().p("Au2PgQmJmbAApFQAApEGJmcQGJmaItAAQItAAGKGaQGJGcAAJEQAAJFmJGbQmKGbotAAQotAAmJmbg");
	this.shape_47.setTransform(0.008,0.0336,0.6579,0.6224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hair, new cjs.Rectangle(-88.4,-87.3,176.9,174.7), null);


(lib.Freckles = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9BA46A").s().p("Aj/EAQhqhqAAiWQAAiVBqhqQBqhqCVAAQCWAABqBqQBqBqAACVQAACWhqBqQhqBqiWAAQiVAAhqhqg");
	this.shape.setTransform(-38.2,-21,0.2163,0.4577,0,28.8687,31.1579,0.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9BA46A").s().p("Aj/EAQhqhqAAiWQAAiVBqhqQBqhqCVAAQCWAABqBqQBqBqAACVQAACWhqBqQhqBqiWAAQiVAAhqhqg");
	this.shape_1.setTransform(1.8854,-12.1242,0.2576,0.2821);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9BA46A").s().p("Aj/EAQhqhqAAiWQAAiVBqhqQBqhqCVAAQCWAABqBqQBqBqAACVQAACWhqBqQhqBqiWAAQiVAAhqhqg");
	this.shape_2.setTransform(29.5137,18.3752,0.2002,0.3196);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9BA46A").s().p("Aj/EAQhqhqAAiWQAAiVBqhqQBqhqCVAAQCWAABqBqQBqBqAACVQAACWhqBqQhqBqiWAAQiVAAhqhqg");
	this.shape_3.setTransform(-46.8,19.9,0.1399,0.3056,0,-28.869,-31.1523,0.7,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9BA46A").s().p("Aj/EAQhqhqAAiWQAAiVBqhqQBqhqCVAAQCWAABqBqQBqBqAACVQAACWhqBqQhqBqiWAAQiVAAhqhqg");
	this.shape_4.setTransform(45.3,-22.2,0.2144,0.4615,0,-14.3487,-15.6721,0.1,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9BA46A").s().p("Aj/EAQhqhqAAiWQAAiVBqhqQBqhqCVAAQCWAABqBqQBqBqAACVQAACWhqBqQhqBqiWAAQiVAAhqhqg");
	this.shape_5.setTransform(-8.8332,22.8614,0.4061,0.4374);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Freckles, new cjs.Rectangle(-53.8,-38.7,107.69999999999999,77.4), null);


(lib.Eyelashes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA4DWQgOgBgMgJQgUgNgPgeIgXgvQgMgcgOgZQgXgtgFgOQgFgMgJgfIgIgjQgCgMgBgnQgBgYACgNQADgVALgNQANgOAUgBQAVgBAOANQAOAPACAdQABAIAAAQIAAAYQACATAHAbQAQA6ASAZIATAbQAEAIAFARQAFARAEAIQAEAHANASQALAQAEAKQAGASgGASQgGASgQAIQgJAFgLAAIgHgBg");
	this.shape.setTransform(10.8333,25.4966);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/CwQgOgFgIgKQgJgLgBgOQgCgPAGgMQADgGALgOQANgUARgqIAKgbIAKgeQAJgQADgJIAGgbIAFgYIgCgUQgCgRALgPQALgPAQgEQARgEARAIQARAIAIAPQAIAQgBAWQgBANgFAZIgHAeIgJAeIgJAVIgDAOIgDANQgDAIgIAPIgJAdQgGAOgJAOQgQAegOAPQgPAPgPAEIgLABQgIAAgIgDg");
	this.shape_1.setTransform(78.0153,21.8543);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvCYQgTgMgHgUQgJgfATg0IAYg3QAMghADgaIADghQACgTAIgLQALgPASgDQAUgDAOALQAWAPADAlQADAmgUA4IggBdQgIAdgEAKQgJAVgPAHQgHAEgIAAQgMAAgMgIg");
	this.shape_2.setTransform(54.489,19.3298);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAoCvQgOgDgMgIQgRgMgTgdQgMgTgEgKIgHgRIgOgTQgGgIgEgOIgGgYQgNgXgEgNQgDgOAAgWIAAgwQABgVAEgMQAGgPAOgJQAOgKAQABQAQAAANAKQANAKADAQQADALgDATQgEAYAAAHQAAASANAiIAMAcIANAYIAOAYIARAbQARAVADAGQALATgHAUQgIAVgTAIQgIACgJAAIgKAAg");
	this.shape_3.setTransform(30.8275,17.5435);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyelashes, new cjs.Rectangle(0,0,87.7,47), null);


(lib.Eyebrows1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("APEhMIhEARQhZAVhkALQlAAlk5g8QAiARA5AUQBxAoBwATQFoA7DWi1gAvDhMIBDAUQBYAYBjAPQE/AxE7gvQgiAPg7ARQhyAkhxAPQlqAtjOi9g");
	this.shape.setTransform(96.4,7.7049);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AvDhMIBDAUQBYAYBkAPQE+AxE7gvQgiAPg6ARQhzAkhwAPQhGAJg/AAQkNAAiniZgAGGAuQhwgThxgoQg5gUgigRQE5A8FAglQBjgLBagVIBEgRQihCJj1AAQhPAAhZgPg");
	this.shape_1.setTransform(96.4,7.7049);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyebrows1, new cjs.Rectangle(-2.5,-2.5,197.8,20.4), null);


(lib.Eye2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhmBmQgqgqAAg8QAAg7AqgqQArgqA7gBQAhAAAbANQgFA1AZAfQAgAmAggGIABAPQgBA8gqAqQgqAqg8AAQg7AAgrgqg");
	this.shape.setTransform(24.4,35.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AjIEPIAfgUQAogWAtgLQCQgkCTBZQAriLgFiIQgIkSj1AKQgNgDggACQhAAEgtAjQiQByBqGDg");
	this.shape_1.setTransform(24.6074,27.0719);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhUDaQgtALgoAWIgfAUQhqmDCQhyQAtgjBAgEQAggCANADQD1gKAIESQAFCIgrCLQiThZiQAkg");
	this.shape_2.setTransform(24.6074,27.0719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eye2, new cjs.Rectangle(-2.5,-2.5,54.2,59.2), null);


(lib.Eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxAjQgVgPAAgUQAAgTAVgPQAVgOAcAAQAeAAAUAOQAVAPAAATQAAAUgVAPQgUAOgeAAQgcAAgVgOg");
	this.shape.setTransform(37.7,10.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AEshsIAegHAEWB7QgTgGgUgFQhBgRhRgIQjTgXiLBJQhHhlgBheQAAgdAGgZIAHgUAEshsIgHBdQgOBbgoAkAlFiIIAJAEQAEACAEACQBNAgBtAOQDGAaDgg0");
	this.shape_1.setTransform(33.025,13.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ak6g8QAAgdAGgZIAHgUIAIAEQBNAgBtAOQDGAaDgg0IgHBdQgOBbgoAkQhBgRhRgIQjTgXiLBJQhHhlgBheg");
	this.shape_2.setTransform(31.525,13.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eye, new cjs.Rectangle(-2.5,-2.5,71.1,32.4), null);


(lib.ClownShoes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.9,1,1).p("AF0gIQAAAEgDADQgDACgEAAQgEAAgDgCQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEgAGvALQAAAEgDADQgDADgEAAQgEAAgDgDQgDgDAAgEQAAgDADgEQADgDAEAAQAEAAADADQADAEAAADgAHogIQAAAEgDADQgDACgEAAQgEAAgDgCQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEgAnngLQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADQgDADAAAEgAmuAIQAAAFADACQADADAEAAQAEAAADgDQADgCAAgFQAAgEgDgDQgDgCgEAAQgEAAgDACQgDADAAAEgAlzgLQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADQgDADAAAEg");
	this.shape.setTransform(88.475,20.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("ACQg1IBJAOQBQAHBCghQAFgDAFgDIALAIQANAIAQACQAcAEAegQQAUgMAWgVQACgCACgCQAIgLAPgPQAfgeAigSQBvg6BsBRIAbAmQAPAZAIAZQAHAUACAVQASCOjRBIQhRAGhiAFQgHAAgHAAQjWAIhmgMQgkgdgXgtQguhcBChUgAiPg4IhJAOQhQAHhCghQgFgDgFgDIgLAIQgNAIgQACQgcAEgegQQgUgMgWgVQgCgCgCgCQgIgLgPgPQgfgegigSQhvg6hsBRIgbAmQgPAZgIAZQgHAUgCAVQgSCODRBIQBRAGBiAFQAHAAAHAAQDWAIBmgMQAkgdAXgtQAuhchChUg");
	this.shape_1.setTransform(88.475,20.4254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E1B36").s().p("AC3CRQgkgcgXguQguhaBChWIBJAPQBQAGBCghIAKgFIALAHQANAIAQACQAcAEAegQQAUgLAWgVQATAQAPAQQB7CFidCFIgOABQhUADhCAAQhoAAg+gIgAGegqQgDADAAAEQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADgAHXg+QgDADAAAEQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADgAFjg+QgDADAAAEQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADgAnyCTIgOgBQidiFB7iFQAPgQATgQQAWAVAUALQAeAQAcgEQAQgCANgIIALgHIAKAFQBCAhBQgGIBJgPQBCBWguBaQgXAugkAcQg+AIhoAAQhCAAhUgDgAmrgtQgDADAAAEQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADgAlwhBQgDADAAAEQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADgAnkhBQgDADAAAEQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADg");
	this.shape_2.setTransform(88.475,25.5561);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D41F45").s().p("AIjg/QgPgQgTgRIAEgEQAIgLAPgPQAfgeAigSQBvg6BsBRIAbAmQAPAZAIAZQAHAUACAVQASCOjRBIQhRAGhiAFQCdiGh7iEgAqzC9QjRhIASiOQACgVAHgUQAIgZAPgZIAbgmQBshRBvA6QAiASAfAeQAPAPAIALIAEAEQgTARgPAQQh7CECdCGQhigFhRgGg");
	this.shape_3.setTransform(88.475,20.2443);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClownShoes, new cjs.Rectangle(-2,-2,181,44.9), null);


(lib.AngryEyebrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AsvifQEsDIIeB3QG/huFWjAQmOBcmiBtQnghWlPiEg");
	this.shape.setTransform(81.625,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AsvifQFPCEHgBWQGihsGOhdQlWDAm/BuQoeh3ksjIg");
	this.shape_1.setTransform(81.625,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AngryEyebrow, new cjs.Rectangle(-2.5,-2.5,168.3,37), null);


(lib.WholeEye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Eye2();
	this.instance.setTransform(40.6,43.6,1,1,0,0,0,24.6,27.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AGUAAQAAArgGApQgGAygPAvQgeBag+BLQhkB7iKASQgXACgYAAQgXAAgYgCQiJgShlh7Qg+hLgdhaQgPgvgHgyQgFgpAAgrQAAjKB2iQQB2iPCnAAQCoAAB1CPQB3CQAADKg");
	this.shape.setTransform(40.4,48.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AED87D").s().p("AguCXQiJgRhmh7Qg9hKgehaQF4FQF5lQQgeBag9BKQhlB7iKARQgXADgYAAQgXAAgXgDg");
	this.shape_1.setTransform(40.3875,82.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C1F08B").s().p("Al4D7QgPgugGgzQgGgoAAgsQAAjKB2iPQB3iPCmAAQCnAAB3CPQB2CPAADKQAAAsgGAoQgGAzgPAuQi9Coi8AAQi8AAi8iog");
	this.shape_2.setTransform(40.4,41.9319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WholeEye, new cjs.Rectangle(-2.5,-2.5,85.8,102.9), null);


(lib.Eyeball22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WholeEye();
	this.instance.setTransform(40.4,49,1,1,0,0,0,40.4,49);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AixqyQDGEviUGfQiVGfB9D3ABfqyQDGEviUGfQiUGfB8D3");
	this.shape.setTransform(40.5013,154.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyeball22, new cjs.Rectangle(-2.5,-2.5,85.8,228.6), null);


(lib.Eyeball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Eye();
	this.instance.setTransform(50.3,53.4,1,1,0,0,0,33,13.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AHEAAQAABqgiBaQgiBXhBBIQiECUi7AAQi6AAiFiUQhBhIgghXQgjhaAAhqQAAjPCEiTQCFiTC6AAQC7AACECTQCFCTAADPg");
	this.shape.setTransform(45.15,50.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1F08B").s().p("AmgEGQgihaAAhqQAAjPCDiUQCFiTC6AAQC7AACECTQCFCUgBDPQABBqgjBaQj+CvjQAAQjRAAiiivg");
	this.shape_1.setTransform(45.15,43.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AED87D").s().p("Ak/AGQhBhHgghXQFFFdH8ldQghBXhBBHQiECTi7AAQi6AAiFiTg");
	this.shape_2.setTransform(45.175,85.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AA6jkIApBrQAmBYAeAnQAGAIAGAGQACACACABAi2jKIAYC1QAPCegQBEQgBADgBADQgDAMgDAG");
	this.shape_3.setTransform(53.925,120.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyeball, new cjs.Rectangle(-2.5,-2.5,95.3,148.7), null);


(lib.Eye222 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Eyeball22();
	this.instance.setTransform(0,-1.15,0.6794,0.5414,0,0,0,40.4,111.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1F08B").s().p("AAyDjQgYgGgQgSQgZAMgfgIQgegIgQgXQgHgLgHgQIgKgdIgNghQgJgUgDgOQgFgXAAgvQAAg4AFgeQAHguAVggQASgdAagLQARgHASAAQATABAPAIQAQAJAMAOQALAPAEASQAVABASAMQASAMAKATQAKAVAAAiIgEA5QgBAuAPAtIALAfQAGATAAAOQABAYgOAVQgOAWgWAJQgOAFgOAAQgKAAgKgCg");
	this.shape.setTransform(-3.1997,49.3394,0.6794,0.5414);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1F08B").s().p("AiRHxQgKAAgEgCQgKgDgJgNQgOgWgBgbQgBgRAJglIAXhUIAMguIATg2QArh2ARh/IAJg4QAJgmACgTQACgbgMg2QgMg2ADgbQABgOgBgEQgCgGgLgQQgRgXADgfQACgeAUgUQAUgUAegDQAdgDAYAQIAIAGQAFADAFABQAFAAANgFQAbgLAcAGQAeAGAPAXQAKAOAEAVQACANACAaQADAvAIBeQAEBSgRA5IgQA1QgDANgDATIgEAgQgDAagKAkQgXBjgTA2IgUA7QgLAigDAbIgCApQgBAagDAPQgFAWgMAQQgOASgUAEQgHACgNAAg");
	this.shape_1.setTransform(0.1789,16.9844,0.6794,0.5414);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eye222, new cjs.Rectangle(-29.1,-63.1,58.3,124.9), null);


(lib.Eyeball2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Eyeball();
	this.instance.setTransform(45.1,71.9,1,1,0,0,0,45.1,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1F08B").s().p("AhYCZQgLgBgGgIQgHgIABgLQADgLAAgGIgEgLQgGgPgCgXIgDgoQgDgWgBgMQABgUgBgKQgBgOgHgZIgEgOIgGgMQgDgIAEgJQAEgJAJgEQAIgEAKADQAJAEAFAIQAOgPAhgDQAPgCAiAAQAfgBARgCQAUgCAIADQAKAEAIANQANATAGAYIADARQADAMAJAYIAEAQQACAJADAGIALAQQAFANgIAMQgGAIgUAGQgEABgBACIAAAEQAAAIgGAIQgGAHgIABQgIACgIgEQgIgEgEgIQgRAEgOAKIgTAPQgMAKgGAFIgNAHIgkAZQgTAMgNAAIgCAAgAAGAkIABgBIAAAAg");
	this.shape.setTransform(51.1283,114.6173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyeball2, new cjs.Rectangle(-2.5,-2.5,95.3,148.7), null);


(lib.Eye1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Eyeball2();
	this.instance.setTransform(32.2,0.05,0.6348,0.6242,0,0,180,45.1,71.9);

	this.instance_1 = new lib.Eyeball2();
	this.instance_1.setTransform(-32.15,0.05,0.6348,0.6242,0,0,0,45.1,71.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eye1, new cjs.Rectangle(-62.4,-46.4,124.9,92.8), null);


// stage content:
(lib.MPHFinalVSaiz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.Eye1.on("pressmove", dragMe);
		this.Eye222.on("pressmove", dragMe);
		this.Feet.on("pressmove", dragMe);
		this.Shoes.on("pressmove", dragMe);
		this.Freckles.on("pressmove", dragMe);
		this.Hair.on("pressmove", dragMe);
		this.Eyebrows.on("pressmove", dragMe);
		this.Unibrow.on("pressmove", dragMe);
		this.Eyelash.on("pressmove", dragMe);
		this.Eyelash1.on("pressmove", dragMe);
		this.Eyelash2.on("pressmove", dragMe);
		this.Eyelash3.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.Hair = new lib.Hair();
	this.Hair.name = "Hair";
	this.Hair.setTransform(833.2,176.1);

	this.Eye222 = new lib.Eye222();
	this.Eye222.name = "Eye222";
	this.Eye222.setTransform(104.9,250.5,1,1,0,0,0,0,-0.7);

	this.Freckles = new lib.Freckles();
	this.Freckles.name = "Freckles";
	this.Freckles.setTransform(131.3,574);

	this.Feet = new lib.Symbol1();
	this.Feet.name = "Feet";
	this.Feet.setTransform(133.15,385.05);

	this.Eye1 = new lib.Eye1();
	this.Eye1.name = "Eye1";
	this.Eye1.setTransform(95.75,128.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhCBOIAAh3IABgQIAAgRQAAgSAPAAQARAAAAAdQAhggAnAAQAOAAAGALQAIAKgBAVIAAAMQgBAVgQAAQgOAAAAgRIgBgMIAAgOQgcADgPAMQgPALgKAXIAABcQAAASgRAAQgPAAAAgSg");
	this.shape.setTransform(867.9,50.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQB7QgFgEAAgHIAAggIgBgeQAAgQACgYIACgnQAAgIAEgEQAFgGAIAAQAFAAAGAGQAEAEAAAIIgCAnQgBAYAAAQIAAAeIABAgQAAAHgFAEQgFAFgGABQgHgBgFgFgAgKhdQgHgHABgIQgBgIAHgFQAFgHAIAAQAIAAAGAHQAGAFAAAIQAAAIgGAHQgGAFgIAAQgIAAgFgFg");
	this.shape_1.setTransform(854.4,45.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA3BYQgIgHgEgGIgdANQgMAEgHABQgogBgTgWQgRgVAAgsQAAgoAdgeQAcgdAmAAQAPAAATAIQAXAKAAANQAAAEgDAEQgCAGgBAPIgBAmQAAAUADANQABAIAJAWIAEAJIABADQAAAHgEAEQgFAFgHAAQgDAAgIgHgAgcgqQgTAVAAAcQAAAcAKAOQAJAOAUAAQAQAAALgGQAGgEALgJQgFgtAAgWIABgQIADgSIgLgFIgHgCQgaAAgTAWg");
	this.shape_2.setTransform(840.225,50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIgBgbIgBgdIACgoIACgpQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHIgCApIgCApIABAqIBJgNQArgIAeAAQACgZAAgxQAAgNAEgNQAGgTAKAAQAHAAAFAFQAFAFAAAHIgBAHQgDAHAAAOIAAAPIABAPQAAARgDAiQgDAhAAARIACAnIABAnQAAAHgEAFQgFAFgHAAQgHAAgFgFQgEgFAAgHIgCgnIgCgnIABgZQgdAAgrAJIhHAOQAAAPgDAcQgDAdAAAPQAAAHgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_3.setTransform(818.075,45.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvBfQgagKAAgRQgBgHAGgFQAGgFAGAAQAFAAAJAIQAEAEAOADQALACAIAAQAOAAALgDQAQgFAAgLQAAgXghgJIgRgEQgWgEgKgHQgOgJAAgTQABgkAhgPQAKgFAWgGQAXgGAJgFQAHgDAJAAQAGAAAFAFQAFAFAAAHQAAAFADAKIABAOQAAAIgEAFQgFAFgIAAQgJAAgDgHQgDgEgCgOIgnAMQgbALAAAQIAKADQAmAHATAMQAcARAAAiQAAAcgYAOQgUAMgeAAQgWAAgUgIg");
	this.shape_4.setTransform(884.1,476.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAWgfQAXggAnAAQAbAAATAJQAVAMAAAYQABASgUAOQgIAGgcAMIhAAfQAJAOAOAHQAPAHARAAQANAAAPgEQAVgGAFgJQAGgJAGAAQAGAAAGAEQAEAFAAAGQAAATgeANQgaAMgaAAQglAAgYgTgAgigtQgOAQgIAfIA1gYQAegPANgLQgPgOgZAAQgVAAgNARg");
	this.shape_5.setTransform(866.8,477.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAvCBQgEgOgEgZQgDgZAAgQIABgOIAAgNQAAgfgQAAQgVAAgRASQgIAKgQAdQAABBgFAMQgFALgKAAQgHAAgGgFQgEgFAAgHIABgHIABgZIABgaIAAh8IACgdQAAgJgCgHQgCgIAAgIQAAgIAGgEQAEgFAIAAQAOAAACAPQADARAAANIgCAlQgBATABATIAAAPQAOgTAQgJQAPgKASAAQAdAAAKATQAHANABAeIACAgIADAkQACAUAEAPIABAFQgBAHgFAFQgEAEgHAAQgNAAgDgNg");
	this.shape_6.setTransform(847.1,472.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgvBfQgbgKAAgRQAAgHAGgFQAFgFAHAAQAFAAAJAIQAEAEAOADQAMACAHAAQAOAAALgDQAQgFAAgLQgBgXgggJIgRgEQgWgEgKgHQgOgJABgTQAAgkAhgPQAKgFAWgGQAXgGAJgFQAHgDAJAAQAHAAAEAFQAFAFAAAHQAAAFADAKIACAOQAAAIgGAFQgEAFgIAAQgJAAgDgHQgDgEgCgOIgnAMQgbALAAAQIAKADQAmAHATAMQAcARAAAiQAAAcgYAOQgUAMgeAAQgWAAgUgIg");
	this.shape_7.setTransform(827.75,476.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA3BXQgIgGgEgGIgdANQgMAEgHABQgogBgTgWQgRgVAAgsQAAgoAdgeQAcgdAmAAQAPAAATAIQAXAKAAANQAAAEgDAEQgCAGgBAQIgBAlQAAAUADANQABAIAJAWIAEAJIABADQAAAHgEAEQgFAFgHAAQgDAAgIgIgAgcgqQgTAWAAAbQAAAcAKAOQAJAOAUAAQAQAAALgGQAGgEALgJQgFgtAAgWIABgQIADgSIgLgFIgHgCQgaABgTAVg");
	this.shape_8.setTransform(810.775,477.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTB8IACg+IACg+IABg9IABg+QAAgRAQAAQARAAAAARIgBA+IgBA9IgDBUIgBAoQgCARgOAAQgRAAAAgRg");
	this.shape_9.setTransform(797.025,472.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAWgfQAXggAnAAQAbAAASAJQAXAMgBAYQAAASgTAOQgJAGgbAMIhBAfQAKAOAPAHQAOAHARAAQAMAAAQgEQAUgGAGgJQAGgJAHAAQAGAAAFAEQAEAFAAAGQAAATgfANQgaAMgZAAQglAAgYgTgAgjgtQgOAQgGAfIA0gYQAegPANgLQgPgOgZAAQgVAAgOARg");
	this.shape_10.setTransform(782.95,477.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgtCGQgFgFAAgHQAAgRAlhSIg+h1IgHgMQgFgIAAgGQAAgHAGgFQAFgFAGAAQAIAAAFAGQAdAoAgBLIAZg7QAOgfANgWQAFgJAJAAQAHAAAFAEQAGAFAAAHQAAAEgCAFIg8B/QgVAugLAgIgLAhQgFAMgLAAQgHAAgFgEg");
	this.shape_11.setTransform(763.475,482.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhKCEQgRgQAAg2IABgYIABgcQgCgEAAgFQAAgFADgEQAEgyAAgXIgCgTIgCgSQAAgVASAAQAHAAAFAFQAUgFATgDQASgDAPAAQApAAAZAKQAMAFAAAMQAAAHgFAFQgFAGgHAAIgFgBQgdgIgbAAQgOAAgQACQgQADgUAFIACASQAAAYgDApIBKgHIAogDQAIAAAFAEQAFAFAAAIQAAAPgPACIgpADIhOAHIgBAXIgBAVQAAAlAGAHQAEAFAXAAIAfgBIAgAAIAKgBIAKgCQASAAAAASQAAAPgPACQgQAEg0AAQg1AAgPgOg");
	this.shape_12.setTransform(744.475,473.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgvBfQgagKgBgRQABgHAFgFQAGgFAGAAQAGAAAIAIQAEAEAOADQALACAJAAQANAAALgDQAPgFAAgLQAAgXgfgJIgRgEQgXgEgKgHQgNgJAAgTQgBgkAigPQALgFAVgGQAXgGAJgFQAHgDAIAAQAHAAAGAFQAEAFAAAHQAAAFADAKIACAOQAAAIgGAFQgEAFgHAAQgKAAgEgHQgCgEgCgOIgnAMQgbALAAAQIAKADQAmAHATAMQAcARAAAiQAAAcgYAOQgUAMgdAAQgXAAgUgIg");
	this.shape_13.setTransform(875.25,319.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AALAxQgEgOgDgZIgFglIgOAfIgaBGQgCAHgFADQgEALgMAAQgNAAgMgzQgGgagGgtIgFgaQgBgPAAgLQAAgGAEgFQAGgFAHAAQANAAADAPIAEAYIACAZIAKBMQATgzAVhGQAFgSANAAQANAAAGAVIAKA+QAHApAFAZIANgvIAWhcQACgLANAAQAHAAAFAGQAFAEABAHIgCAIQgNA4gWBFQgFAQgLAQQgGAJgKAAQgTAAgKgvg");
	this.shape_14.setTransform(855.3,320.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgyBIQgXgXgCgoQgBgmAVgdQAYgiAqAAQAiAAARAeQAOAaAAAjQgBAmgTAaQgWAfgjAAQgdAAgUgWgAgegiQgLATAAAYQAAAZAOAOQALALAPAAQARAAANgNQAOgOABgZQAChBgmAAQgYAAgOAYg");
	this.shape_15.setTransform(833.7235,320.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhBBOIAAh3IAAgQIAAgRQAAgSAPAAQARAAAAAdQAhggAnAAQANAAAIALQAGAKABAVIgBAMQgBAVgQAAQgPAAAAgRIAAgMIgBgOQgbADgPAMQgPALgKAXIAABcQAAASgQAAQgQAAABgSg");
	this.shape_16.setTransform(817,320.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgzCAQgGAIgIAAQgGAAgFgFQgEgEAAgHIAAgNIABgNIgBg2IgBg1IAAgwIAAgwQAAgJAEgJQAGgKAKAAQAMAAAAAPIAAAHIgBAGIgBAmIAAArQAPgJANgFQAOgGALAAQAlABAWAcQAWAZAAAnQAAAngaAbQgZAbgkAAQgaAAgVgKgAgagHQgHADgSAMIAAAeIAAAbIAAAcIAYAKQAKACANAAQAYABAQgSQAPgRAAgaQAAgagMgQQgOgSgXAAQgOAAgOAIg");
	this.shape_17.setTransform(798.05,315.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAVgfQAYggAnAAQAbAAATAJQAVAMAAAYQABASgUAOQgIAGgcAMIhAAfQAJAOAOAHQAOAHATAAQAMAAAQgEQATgGAGgJQAGgJAGAAQAHAAAEAEQAFAFAAAGQAAATgeANQgaAMgZAAQgmAAgYgTgAgigtQgPAQgHAfIA1gYQAegPANgLQgPgOgZAAQgVAAgNARg");
	this.shape_18.setTransform(778.05,320.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgtCGQgFgFAAgHQAAgRAlhSIg+h1IgHgMQgFgIAAgGQAAgHAGgFQAFgFAGAAQAIAAAFAGQAdAoAgBLIAZg7QAOgfANgWQAFgJAJAAQAHAAAFAEQAGAFAAAHQAAAEgCAFIg8B/QgVAugLAgIgLAhQgFAMgLAAQgHAAgFgEg");
	this.shape_19.setTransform(758.575,325.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhKCEQgRgQAAg2IABgYIABgcQgCgEAAgFQAAgFADgEQAEgyAAgXIgCgTIgCgSQAAgVASAAQAHAAAFAFQAUgFATgDQASgDAPAAQApAAAZAKQAMAFAAAMQAAAHgFAFQgFAGgHAAIgFgBQgdgIgbAAQgOAAgQACQgQADgUAFIACASQAAAYgDApIBKgHIAogDQAIAAAFAEQAFAFAAAIQAAAPgPACIgpADIhOAHIgBAXIgBAVQAAAlAGAHQAEAFAXAAIAfgBIAgAAIAKgBIAKgCQASAAAAASQAAAPgPACQgQAEg0AAQg1AAgPgOg");
	this.shape_20.setTransform(739.575,316.125);

	this.Eyelash2 = new lib.Eyelashes();
	this.Eyelash2.name = "Eyelash2";
	this.Eyelash2.setTransform(853.95,562.3,0.4071,0.403,0,0,0,43.9,23.4);

	this.Eyelash1 = new lib.Eyelashes();
	this.Eyelash1.name = "Eyelash1";
	this.Eyelash1.setTransform(787.95,559.2,0.74,0.5309,0,0,0,43.8,23.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgvBfQgagKgBgRQABgHAFgFQAGgFAGAAQAFAAAJAIQAEAEAOADQALACAJAAQANAAALgDQAPgFAAgLQAAgXgfgJIgRgEQgXgEgKgHQgNgJAAgTQgBgkAigPQALgFAVgGQAWgGAKgFQAHgDAIAAQAHAAAGAFQAEAFAAAHQAAAFACAKIADAOQgBAIgFAFQgEAFgHAAQgKAAgEgHQgCgEgCgOIgoAMQgaALAAAQIAKADQAmAHAUAMQAbARAAAiQAAAcgYAOQgUAMgdAAQgXAAgUgIg");
	this.shape_21.setTransform(246.95,500.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAVgfQAYggAnAAQAcAAARAJQAXAMAAAYQgBASgTAOQgJAGgbAMIhBAfQAKAOAPAHQANAHATAAQALAAARgEQAUgGAFgJQAGgJAHAAQAFAAAFAEQAFAFAAAGQAAATgfANQgaAMgYAAQgmAAgYgTgAgjgtQgOAQgGAfIA0gYQAegPANgLQgOgOgaAAQgVAAgOARg");
	this.shape_22.setTransform(229.65,501.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhBBOIAAh3IAAgQIAAgRQAAgSAPAAQARAAAAAdQAhggAnAAQANAAAIALQAGAKAAAVIAAAMQgBAVgQAAQgOAAAAgRIgBgMIAAgOQgbADgQAMQgPALgKAXIAABcQAAASgRAAQgOAAAAgSg");
	this.shape_23.setTransform(211.9,501.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAmBSQgVALgbAAQgWAAgPgKQgQgLgDgVQgHgtAAgjQAAgXAFgeQACgPAOAAQAIAAAFAFQAFAEAAAIQAAAIgCARQgDARAAAJQAAAdACATQACAUADANIAMAFIAKABQAWAAAZgHIAAgjIAAggQAAglADgbQACgQAPAAQAHAAAFAFQAFAFAAAHIgDBAIAAAkIAAAlIABAMIAAALQAAAIgFAEQgFAFgHAAQgNAAgEgQg");
	this.shape_24.setTransform(193.9,501.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKB4QgFgEgBgHIABgTIAAgUIgDhjIglgDQgQgCAAgOQAAgIAFgFQAEgFAIAAIAkADIgBgXIgBgVQAAgIAFgEQAFgFAHAAQAOAAADAZIABAPIgBAKIAAALIAYgDQASAAAGACQAKADAAANQAAAHgFAFQgFAFgHAAIgJAAIgIgBIgXADIADBkIAAAIIAAAIQABAmgTAAQgFAAgFgFg");
	this.shape_25.setTransform(176.45,498.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AA3BYQgIgIgEgFIgdANQgMAEgHAAQgoAAgTgWQgRgVAAgsQAAgoAdgdQAcgeAmAAQAPAAATAIQAXAKAAANQAAAEgDAEQgCAHgBAOIgBAmQAAAUADANQABAHAJAXIAEAJIABADQAAAHgEAEQgFAFgHAAQgDAAgIgHgAgcgqQgTAVAAAcQAAAcAKAOQAJAOAUAAQAQAAALgGQAGgEALgJQgFgtAAgWIABgQIADgSIgLgFIgHgBQgagBgTAWg");
	this.shape_26.setTransform(159.325,501.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAVgfQAYggAnAAQAcAAARAJQAXAMAAAYQAAASgUAOQgJAGgbAMIhBAfQAKAOAOAHQAOAHATAAQAMAAAQgEQATgGAGgJQAGgJAHAAQAFAAAFAEQAFAFAAAGQAAATgfANQgZAMgZAAQgmAAgYgTgAgjgtQgNAQgIAfIA1gYQAegPANgLQgOgOgaAAQgVAAgOARg");
	this.shape_27.setTransform(141.1,501.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhSCLQgFgFAAgIIABhlIABhkIAAgWIAAgXQAAgIAFgFQAEgFAIAAQAFAAAFADIAmgFQARgCAMAAQATAAAaAFQAiAIAAANQAAAGgEAGQgFAGgIAAIgGgCQgVgHgjgBQgLABgPACIgiAEIAABKQAhgJARAAQAZABAcADQAQABAAAQQAAAHgFAGQgFAEgHAAIgbgCIgZgBQgMABgnAIIgBB2QAAAIgFAFQgFAEgHAAQgHAAgFgEg");
	this.shape_28.setTransform(121.625,497.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgtCGQgFgFAAgHQAAgRAlhSIg+h1IgHgMQgFgIAAgGQAAgHAGgFQAFgFAGAAQAIAAAFAGQAdAoAgBLIAZg7QAOgfANgWQAFgJAJAAQAHAAAFAEQAGAFAAAHQAAAEgCAFIg8B/QgVAugLAgIgLAhQgFAMgLAAQgHAAgFgEg");
	this.shape_29.setTransform(89.925,505.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag8B1QgYgZAAglQAAguAYgaQAYgcAmAAQAUAAAKAGIAQAMQADhIADgZQACgPAOAAQAPAAAAAQQAAAYgHBRQgCAYAAAaQAAA5AGAdIAAADQAAAHgFAFQgFAEgGAAQgKAAgFgPQgNAJgNAEQgNAFgOAAQgjAAgXgXgAgoADQgOARAAAiQAAAWAQAQQAPAQAVAAQAOAAAKgFIATgPIAFgFIgBgeIAAgTIABgVQgHgNgLgGQgKgHgPAAQgcAAgPAQg");
	this.shape_30.setTransform(70.925,496.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgyBIQgXgXgCgoQgBgmAVgdQAYgiAqAAQAiAAARAeQAOAaAAAjQgBAmgTAaQgWAfgjAAQgdAAgUgWgAgegiQgLATAAAYQAAAZAOANQALAMAPAAQARAAANgNQAOgOABgYQAChCgmAAQgYAAgOAYg");
	this.shape_31.setTransform(51.2235,501.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhPCEQgHgHAAgIIAAgxQAAgZADgsIAEhHIACgvQABgIAFgDQAWgHAfAAQAcAAAcAUQAgAYAAAjQAAArgiAZQAZALANANQANANAAAQQAAAVgWATQgQAOgRAGQglAPg9AAQgGAAgHgGgAg0BEIAAAjQAtgBAbgLQAMgFALgKQALgIAAgFQAAgIgXgKQgQgIgPgDIgRgDIgHAAIgIAAIgTgBIgBAmgAgthlIAAAeIgEBCIAaACQAZgCARgOQARgQAAgXQAAgRgSgOQgSgNgSAAIgbABg");
	this.shape_32.setTransform(32.15,496.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKB4QgGgEABgHIAAgTIABgUIgDhjIgngDQgPgCAAgOQAAgIAEgFQAFgFAHAAIAkADIgBgXIAAgVQAAgIAFgEQAFgFAHAAQAOAAADAZIAAAPIAAAKIAAALIAYgDQASAAAFACQALADAAANQAAAHgFAFQgFAFgHAAIgIAAIgJgBIgXADIADBkIABAIIAAAIQAAAmgSAAQgHAAgEgFg");
	this.shape_33.setTransform(211.15,342.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAWgfQAXggAnAAQAbAAATAJQAVAMAAAYQAAASgTAOQgIAGgcAMIhAAfQAJAOAOAHQAOAHASAAQANAAAPgEQAVgGAFgJQAGgJAGAAQAGAAAGAEQAEAFAAAGQAAATgeANQgaAMgaAAQglAAgYgTgAgigtQgOAQgIAfIA1gYQAegPANgLQgOgOgaAAQgVAAgNARg");
	this.shape_34.setTransform(193.7,344.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAWgfQAXggAnAAQAbAAASAJQAXAMgBAYQAAASgTAOQgJAGgbAMIhBAfQAKAOAPAHQAOAHARAAQAMAAAQgEQAUgGAGgJQAGgJAHAAQAGAAAFAEQAEAFAAAGQAAATgfANQgaAMgZAAQglAAgYgTgAgjgtQgOAQgGAfIA0gYQAegPANgLQgPgOgZAAQgVAAgOARg");
	this.shape_35.setTransform(174.55,344.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhSCKQgFgEAAgIIABhlIABhkIAAgWIAAgYQAAgHAFgFQAEgFAIAAQAFAAAFADIAmgGQARgBAMAAQATgBAaAHQAiAHAAANQAAAGgEAGQgFAGgIAAIgGgBQgVgJgjABQgLAAgPABIgiAGIAABJQAhgIARAAQAZAAAcACQAQACAAAQQAAAIgFAFQgFAEgHAAIgbgCIgZAAQgMAAgnAJIgBB1QAAAIgFAEQgFAGgHAAQgHAAgFgGg");
	this.shape_36.setTransform(155.075,340.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhGCOQgFgEAAgGIABgGQAOglAlhFQAjhEAOglQAWg9AMAAQAGABAFAEQAFAEAAAGQAAAEgCAGIgTAuQgMAggVApIgkBGIgfBFQgFAKgJAAQgGAAgFgFg");
	this.shape_37.setTransform(134.425,340.3748);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgvBfQgagKAAgRQgBgHAGgFQAGgFAGAAQAGAAAIAIQAEAEAOADQAMACAHAAQAOAAALgDQAQgFAAgLQAAgXghgJIgRgEQgWgEgKgHQgOgJAAgTQABgkAhgPQAKgFAWgGQAXgGAJgFQAHgDAJAAQAGAAAFAFQAFAFAAAHQAAAFADAKIABAOQAAAIgEAFQgFAFgIAAQgJAAgDgHQgDgEgCgOIgoAMQgaALAAAQIAKADQAmAHAUAMQAbARAAAiQAAAcgYAOQgUAMgeAAQgWAAgUgIg");
	this.shape_38.setTransform(116.5,344.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAWgfQAXggAnAAQAbAAATAJQAVAMAAAYQAAASgTAOQgIAGgcAMIhAAfQAJAOAOAHQAPAHARAAQANAAAPgEQAVgGAFgJQAGgJAGAAQAGAAAGAEQAEAFAAAGQAAATgeANQgaAMgaAAQglAAgYgTgAgigtQgOAQgIAfIA1gYQAegPANgLQgOgOgaAAQgVAAgNARg");
	this.shape_39.setTransform(99.2,344.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgyBJQgXgYgCgoQgBglAVgeQAYgiAqgBQAiAAARAgQAOAZAAAjQgBAlgTAbQgWAegjABQgdgBgUgUgAgegiQgLATAAAYQAAAZAOAOQALALAPAAQARAAANgNQAOgOABgZQAChBgmAAQgYAAgOAYg");
	this.shape_40.setTransform(79.7735,345.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAvCBQgFgOgDgZQgDgZAAgQIAAgOIABgNQAAgfgQAAQgVAAgRASQgJAKgPAdQAABBgFAMQgFALgKAAQgHAAgGgFQgEgFAAgHIABgHIACgZIAAgaIAAh8IACgdQAAgJgCgHQgBgIAAgIQAAgIAEgEQAGgFAHAAQAOAAACAPQADARAAANIgBAlQgBATAAATIAAAPQAOgTAQgJQAPgKASAAQAcAAALATQAHANABAeIACAgIADAkQACAUAEAPIAAAFQAAAHgEAFQgGAEgHAAQgMAAgDgNg");
	this.shape_41.setTransform(61.1,340.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhEB3QgggQAAgZQgBgHAGgEQAFgGAHAAQAIABAHAJQAIANAHAFQAPAJAbAAQAaAAAXgLQAdgPAAgaQAAgWgZgMQgUgKgegCQgbAAgTgLQgYgNAAgaQAAgfAigYQAhgYAjAAQAQAAAVAGQAcAHAAALQAAAPgQAAQgHAAgRgDQgRgEgJAAQgaAAgSAOQgUANAAASQAAAPAaAFQAJACAaACQAnADAWAWQAVATAAAcQAAApgmAYQghAVgqAAQgfAAgagLg");
	this.shape_42.setTransform(38.8479,341.45);

	this.Eyelash = new lib.Eyelashes();
	this.Eyelash.name = "Eyelash";
	this.Eyelash.setTransform(857.7,528.8,0.74,0.5309,0,0,0,43.8,23.4);

	this.Eyelash3 = new lib.Eyelashes();
	this.Eyelash3.name = "Eyelash3";
	this.Eyelash3.setTransform(776.85,525.85,0.4071,0.403,0,0,0,43.9,23.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhCBOIAAh3IABgQIAAgRQAAgSAPAAQARAAAAAdQAhggAnAAQANAAAIALQAHAKAAAVIgBAMQgBAVgQAAQgPAAAAgRIAAgMIgBgOQgbADgPAMQgPALgKAXIAABcQAAASgQAAQgPAAgBgSg");
	this.shape_43.setTransform(1225.7,-166.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgQB8QgEgFgBgIIAAgeIgBgfQAAgQACgYIABgnQAAgIAGgFQAEgEAHAAQAHAAAEAEQAFAFAAAIIgBAnQgCAYAAAQIABAfIAAAeQAAAIgFAFQgFAEgGAAQgIAAgEgEgAgLheQgFgGgBgHQABgJAFgGQAHgFAHAAQAIAAAGAFQAGAGAAAJQAAAHgGAGQgGAGgIAAQgIAAgGgGg");
	this.shape_44.setTransform(1212.2,-171.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AA3BXQgIgGgEgGIgdAOQgMADgHAAQgoABgTgXQgRgVAAgsQAAgoAdgeQAcgdAmAAQAPAAATAIQAXAJAAAOQAAAEgDAEQgCAGgBAQIgBAkQAAAWADAMQABAIAJAWIAEAJIABADQAAAHgEAFQgFAEgHAAQgDAAgIgIgAgcgqQgTAWAAAbQAAAcAKAOQAJAOAUAAQAQAAALgGQAGgEALgJQgFgtAAgWIABgQIADgTIgLgEIgHgBQgaAAgTAVg");
	this.shape_45.setTransform(1198.025,-166.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIgBgbIgBgdIACgoIACgpQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHIgCApIgCApIABAqIBJgNQArgIAeAAQACgZAAgxQAAgNAEgNQAGgTAKAAQAHAAAFAFQAFAFAAAHIgBAHQgDAHAAAOIAAAPIABAPQAAARgDAiQgDAhAAARIACAnIABAnQAAAHgEAFQgFAFgHAAQgHAAgFgFQgEgFAAgHIgCgnIgCgnIABgZQgdAAgrAJIhHAOQAAAPgDAcQgDAdAAAPQAAAHgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_46.setTransform(1175.875,-170.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgvBfQgagKAAgRQgBgHAGgFQAGgFAGAAQAGAAAIAIQAEAEAOADQAMACAHAAQAOAAALgDQAQgFAAgLQAAgXghgJIgRgEQgWgEgKgHQgOgJAAgTQABgkAhgPQAKgFAWgGQAXgGAJgFQAHgDAJAAQAGAAAFAFQAFAFAAAHQAAAFACAKIACAOQAAAIgEAFQgFAFgIAAQgJAAgDgHQgDgEgCgOIgoAMQgaALAAAQIAKADQAmAHAUAMQAbARAAAiQAAAcgYAOQgUAMgeAAQgWAAgUgIg");
	this.shape_47.setTransform(151.6,49.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgTB8IACg+IACg+IABg9IABg+QAAgRAQAAQARAAAAARIgBA+IgBA9IgDBUIgBAoQgCARgOAAQgRAAAAgRg");
	this.shape_48.setTransform(138.775,45.175);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgTB8IACg+IACg+IABg9IABg+QAAgRAQAAQARAAAAARIgBA+IgBA9IgDBUIgBAoQgCARgOAAQgRAAAAgRg");
	this.shape_49.setTransform(129.175,45.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AA3BYQgIgHgEgGIgdANQgMAEgHABQgogBgTgWQgRgVAAgsQAAgoAdgeQAcgdAmAAQAPAAATAIQAXAKAAANQAAAEgDAEQgCAGgBAPIgBAmQAAAUADANQABAIAJAWIAEAJIABADQAAAHgEAEQgFAFgHAAQgDAAgIgHgAgcgqQgTAVAAAcQAAAcAKAOQAJAOAUAAQAQAAALgGQAGgEALgJQgFgtAAgWIABgQIADgSIgLgFIgHgCQgaAAgTAWg");
	this.shape_50.setTransform(115.425,50.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag0CAQgFAIgIAAQgGAAgEgFQgGgEAAgHIABgNIAAgNIgBg2IgBg1IABgwIAAgwQAAgJAFgJQAFgKAKAAQANAAAAAPIgBAHIgBAGIgBAmIAAArQAPgJAOgFQANgGAKAAQAmABAWAcQAVAZAAAnQAAAngYAbQgZAbglAAQgaAAgWgKgAgagHQgIADgRAMIAAAeIAAAbIAAAcIAXAKQALACANAAQAYABAPgSQAQgRABgaQAAgagNgQQgOgSgYAAQgNAAgOAIg");
	this.shape_51.setTransform(96.45,45.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAWgfQAXggAnAAQAbAAASAJQAXAMgBAYQAAASgTAOQgJAGgbAMIhBAfQAKAOAPAHQAOAHARAAQAMAAAQgEQAUgGAGgJQAGgJAHAAQAGAAAFAEQAEAFAAAGQAAATgeANQgbAMgZAAQglAAgYgTgAgigtQgPAQgGAfIA0gYQAegPANgLQgPgOgZAAQgVAAgNARg");
	this.shape_52.setTransform(76.45,50.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgtCGQgFgFAAgHQAAgRAlhSIg+h1IgHgMQgFgIAAgGQAAgHAGgFQAFgFAGAAQAIAAAFAGQAdAoAgBLIAZg7QAOgfANgWQAFgJAJAAQAHAAAFAEQAGAFAAAHQAAAEgCAFIg8B/QgVAugLAgIgLAhQgFAMgLAAQgHAAgFgEg");
	this.shape_53.setTransform(56.975,54.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhKCEQgRgQAAg2IABgYIABgcQgCgEAAgFQAAgFADgEQAEgyAAgXIgCgTIgCgSQAAgVASAAQAHAAAFAFQAUgFATgDQASgDAPAAQApAAAZAKQAMAFAAAMQAAAHgFAFQgFAGgHAAIgFgBQgdgIgbAAQgOAAgQACQgQADgUAFIACASQAAAYgDApIBKgHIAogDQAIAAAFAEQAFAFAAAIQAAAPgPACIgpADIhOAHIgBAXIgBAVQAAAlAGAHQAEAFAXAAIAfgBIAgAAIAKgBIAKgCQASAAAAASQAAAPgPACQgQAEg0AAQg1AAgPgOg");
	this.shape_54.setTransform(37.975,45.675);

	this.Unibrow = new lib.AngryEyebrow();
	this.Unibrow.name = "Unibrow";
	this.Unibrow.setTransform(819.95,409.6,0.6571,0.3125,0,0,0,81.5,16);

	this.Eyebrows = new lib.Eyebrows1();
	this.Eyebrows.name = "Eyebrows";
	this.Eyebrows.setTransform(815.4,363.9,0.5851,1,0,0,0,96.4,7.8);

	this.Shoes = new lib.ClownShoes();
	this.Shoes.name = "Shoes";
	this.Shoes.setTransform(130.25,435,1,1,0,0,0,88.5,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Shoes},{t:this.Eyebrows},{t:this.Unibrow},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.Eyelash3},{t:this.Eyelash},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.Eyelash1},{t:this.Eyelash2},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.Eye1},{t:this.Feet},{t:this.Freckles},{t:this.Eye222},{t:this.Hair}]}).wait(1));

	// Character
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("ARYAAQAAFkjDETQgHAKgGAKQg1BGhBBBQlGFGnMAAQnMAAlFlGQhBhBg1hGQgCgDgCgEQgFgGgEgHQgigvgbgxQgXgpgSgqQgmhUgWhZQghiFAAiSQAAnMFGlGQAZgaAbgXQA6g0A+gpQAGgFAHgEQBcg9BkgnQAdgLAdgKQCYgxCqgEQAPAAANAAQA9AAA6AFQA0AFAyAKQByAVBoAtQBMAhBHAtQBqBDBeBeQFGFGAAHMg");
	this.shape_55.setTransform(474.516,338.6911,0.6462,0.6767);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#AED87D").s().p("AtzLAQhBhBg0hHIgFgGIgJgNQRFIJIaqpQHJqKpJsAQBqBDBeBeQFGFGAAHNQAAFjjEETIgNATQg1BHhABBQlGFGnMAAQnMAAlGlGg");
	this.shape_56.setTransform(480.8163,344.2569,0.6462,0.6767);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C1F08B").s().p("AsxL3QgigvgbgyQgXgogTgrQglhTgWhaQghiEAAiTQAAnLFFlGQAagaAbgYQA6gzA9gqIAOgJQBcg8BkgoQAdgLAdgJQCXgyCqgDIAdgBQA8AAA6AGQA0AFAzAJQByAWBoAtQBMAhBHAtQJJMAnJKJQkxGDnjAAQlwAAnajig");
	this.shape_57.setTransform(468.1489,330.071,0.6462,0.6767);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]}).wait(1));

	// Frame
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Ag5DmIgFgBQgMAAgDgUQgDgKAAgbQAAhGAWgqQAKgUAsgzQAXgeAJgRQAPgcAAgnQAAgUgOgPQgNgNgMAAQgPAAgOAQIgZAiQgHAKgFAAQgRAAAAgYQgBgPAHgKQAUghAPgPQAVgVAVAAQAbABAWAaQAZAdAAAwQAAAegFAaQgFAZgKAWQgNAagfAiQgfAjgLATQgSAiAAAxIAjgFQAkgEAPAAQAOAAAMAIQAPAKAAATQAAALgFAKQgFAJgGAAQgFAAgIgFQgHgEgFAAIgaACIgaABQgGAAgNADQgNAEgHAAIgGgCg");
	this.shape_58.setTransform(731.25,95.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ag4DmIgGgBQgMAAgEgUQgCgKAAgbQAAhGAWgqQAKgUAsgzQAYgeAIgRQAPgcAAgnQAAgUgPgPQgMgNgMAAQgPAAgPAQIgYAiQgIAKgEAAQgSAAAAgYQABgPAGgKQAUghAPgPQAVgVAVAAQAbABAWAaQAZAdAAAwQAAAegFAaQgFAZgKAWQgNAagfAiQgfAjgKATQgUAiABAxIAkgFQAjgEAQAAQAMAAAMAIQAQAKAAATQAAALgFAKQgEAJgIAAQgEAAgHgFQgJgEgDAAIgbACIgZABQgHAAgNADQgOAEgGAAIgFgCg");
	this.shape_59.setTransform(709.7,95.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhNCcQgShAAAhmQAAhXAYhBQAchNAvAAQAtAAAZBEQAWA6AABUQAACGgYBEQgZBDgwAAQg0AAgYhUgAguh8QgQAwAAA9QAABiAQAyQAPAxAeAAQAkAAAQhJQALgyAAhNQAAhRgPgpQgOgpgdAAQgfAAgTA5g");
	this.shape_60.setTransform(687.925,96.025);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ag4DmIgGgBQgMAAgEgUQgCgKAAgbQAAhGAWgqQAKgUAsgzQAXgeAJgRQAPgcAAgnQAAgUgPgPQgMgNgMAAQgPAAgPAQIgYAiQgIAKgEAAQgSAAAAgYQABgPAGgKQAUghAPgPQAVgVAVAAQAbABAWAaQAZAdAAAwQAAAegFAaQgFAZgKAWQgNAagfAiQgfAjgLATQgSAiAAAxIAkgFQAjgEAQAAQANAAALAIQAQAKAAATQAAALgFAKQgEAJgIAAQgDAAgJgFQgIgEgDAAIgbACIgZABQgHAAgNADQgOAEgGAAIgFgCg");
	this.shape_61.setTransform(666.6,95.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgtDrQgGgIAAgMQAAgeAliRIg+jOIgHgVQgEgPgBgJQABgMAFgJQAFgKAHAAQAIAAAEALQAdBGAhCEIAZhoQAPg2AMgmQAFgSAKABQAGgBAGAKQAGAIAAAMQAAAHgDAIIg7DgQgXBSgKA3IgLA7QgFAWgLAAQgIAAgEgJg");
	this.shape_62.setTransform(635.7,111.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AA3CaQgIgMgEgLQgQARgNAHQgMAIgIAAQgoAAgTgoQgRglAAhNQAAhHAdg0QAcg0AnAAQAPAAATAOQAXAQAAAYQAAAIgDAHIgDAlIgBBCQAAAmADAVQACANAJAoIAEAQIABAFQAAAMgFAIQgFAIgGAAQgEAAgIgNgAgdhLQgTAmAAAxQAAAxAKAZQAKAZAUgBQAPAAAMgKQAGgFALgSQgFhPAAgnIABgcIADghQgHgFgEgDQgFgDgDAAQgZAAgUAmg");
	this.shape_63.setTransform(618.025,104.15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("ABqDiQgFgOgEgiIgHg0QgHgwgPijIgjC0IgKA6QgGAigHAVQgHAXgLAAQgKAAgGgTQgEgNgDgTIgFgiQgRhqgOh4IgGA2IgWCeQgBAcgIA2QgFAYgMAAQgIAAgFgLQgEgJAAgNQAAgyALhJIATh5IAKheQAIhDAIgUQAHgSAKAAQAMAAAFAWQAHAbAIBTQAJBjATByQAZhzASh9IAFgsQADgbAFgQQAHgWAMAAQAPAAAHAyQADARAEA2QAKCHAPBgIAJA0QAGApAAAKQAAANgFAIQgGAJgHAAQgJAAgGgRg");
	this.shape_64.setTransform(593.575,97.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgKDUQgGgIABgLIAAgjIABgiIgEivIgmgFQgPgEgBgaQABgNAEgJQAFgJAHAAIAkAGIgBgqIAAglQAAgNAFgHQAFgJAHAAQAOAAADAtIAAAaIAAASIAAATIAZgGQARAAAGAEQALAGAAAWQAAANgFAIQgFAJgHAAIgJAAIgIgBQgFAAgTAEIAECxIAAAOIAAAPQAABCgSAAQgGAAgFgIg");
	this.shape_65.setTransform(558.9,98.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AhCCKIAAjSIAAgdIABgfQAAgeAPAAQARAAAAAyQAhg4AoAAQANAAAHASQAHATAAAlIAAAVQgCAmgQAAQgOAAAAgeIgBgVIAAgZQgbAFgQAWQgPATgKAnIAACkQAAAfgRAAQgPAAAAgfg");
	this.shape_66.setTransform(542.7,104);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AA8CcQgEgbgHhEQgSAEgcALIgtARQgJAngUBMQgGARgJAAQgHAAgGgJQgFgJAAgNQAAgOAahgQgDgHAAgLQAAgYARgHQATg/AehUQAohyAKAAQAOAAAFAhIALBlIAZDQIAKAwQAFAYAAAIQAAANgFAJQgGAJgGAAQgQAAgMhHgAgWAWQAVgKAqgMIgOh0g");
	this.shape_67.setTransform(520.625,97.075);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AhCD0QgFgIAAgOIABh4IAAh3QgBhCgCg2IgCg9QAAgVAEgPQAFgSAKAAQAGAAAFAJQAFAIAAAMIAAAKIgCARQAPgSAOgJQANgJAMAAQAjAAARA3QANArgBBIQAABAgTAqQgVAsgkAAQgQAAgVgJIAACPQAAAOgEAIQgGAJgHAAQgIAAgEgJgAgPifQgKAIgOAYQACBEAABKQAUANARAAQAWAAALgcQAKgYAAgmQAAg3gIgbQgIgcgPAAQgPAAgMANg");
	this.shape_68.setTransform(488.25,111.075);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgJCxQgFgJAAgNQAAgkgEhHQgFhHAAgkQAAgggFgSQgMAKgMAWIgVAnQgCAIgGALIgCA1IgCA0IACAZIABAXQAAANgFAIQgFAJgHAAQgUAAAAhOIACg2IACg0IgCgwIgBgwQAAhFARAAQAHAAAGALQAFAKAAAMIgBASIgBASIABAfQAJggARgaQARgaANAAQAbAAAJAvQAJgWANgLQAOgLAQAAQAdAAALA2QACALAFBKQAFAzAHB4QABAMgFAJQgGAIgHAAQgOAAgDgaQgDghgDg8IgGhcQgBgVgFgUQgFgbgHAAQgHAAgRATQgRARgFALIABA4IAFBQQAEAvAAAfQAAANgFAJQgFAJgHAAQgHAAgEgJg");
	this.shape_69.setTransform(465.2523,104.025);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgzCAQgXgqgBhGQgBhDAUg0QAYg9AqAAQAjAAASA3QAOAsgBA/QAABCgUAvQgWA2gjAAQgdAAgVglgAgeg9QgMAiAAArQAAArAOAZQALAUAQAAQARAAANgXQAOgZABgrQADhzgngBQgYAAgOAqg");
	this.shape_70.setTransform(441.6735,104.15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AhHC5QgYguAAg/QAAhmAxhqQAphaApAAQAIAAAHACQAGAAAGADQAGgOAJAAQAMAAADAbQADAYAAAjQAAANgEAJQgEAMgJAAQgLAAgGgWQgEgUgFgEQgDgDgOAAQgZAAgeBCQgpBaAABQQAAAmAOAcQAPAdAUAAQARAAASgQQAKgJAVgaQAJgNAFAAQAIAAAFAKQAFAKAAAMQAAANgHALQgtBFguAAQgjAAgZgvg");
	this.shape_71.setTransform(422.525,96.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgUBBQgFgIAAgLQAAgIALgrQAJglAFgQQADgOAIAAQAGAAAFAIQAEAJAAAKQAAAHgZBfQgDAQgIAAQgGAAgEgIg");
	this.shape_72.setTransform(397.15,121.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AhOCRQAAgPAIgOQAuhHAziVQgXACgJAAQgaAAgagHQgPgEAAgZQAAgOAEgIQAFgJAHAAQAIAAASADQAQADAJAAQALAAAXgCQAYgDALAAQAPAAAAAVQAAAYgNAcQgQAggXA9QgbBGgNAeIAfgCQAHAAAMAFQAOAEAGAAQAIAAAFAJQAFAIgBAOQABANgFAIQgFAJgIAAQgGAAgOgFQgMgEgHAAQgmAAgjAMIgHABQgQAAAAgZg");
	this.shape_73.setTransform(382.1,104.125);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgQDaQgFgJAAgNIgBg2IAAg2IAChGQACgqAAgcQgBgOAFgIQAFgJAHAAQAHAAAEAJQAFAIAAAOIgCBGQgCAqAAAcIABA2IABA2QAAANgFAJQgFAIgGAAQgIAAgEgIgAgKimQgHgKABgPQgBgOAHgKQAFgKAIAAQAIAAAGAKQAGAKAAAOQAAAPgGAKQgGALgIgBQgIABgFgLg");
	this.shape_74.setTransform(367.6,96.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AA3CaQgIgMgEgLQgQARgNAHQgMAIgIAAQgoAAgTgoQgRglAAhNQAAhHAdg0QAcg0AnAAQAPAAATAOQAXAQAAAYQAAAIgDAHIgDAlIgBBCQAAAmADAVQACANAJAoIAEAQIABAFQAAAMgFAIQgFAIgGAAQgEAAgIgNgAgdhLQgTAmAAAxQAAAxAKAZQAKAZAUgBQAPAAAMgKQAGgFALgSQgFhPAAgnIABgcIADghQgHgFgEgDQgFgDgDAAQgZAAgUAmg");
	this.shape_75.setTransform(353.375,104.15);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhFDQQgggaAAgtQAAgMAFgIQAFgIAHAAQAJAAAGARQAJAWAHAJQAOAQAcAAQAaAAAXgUQAdgaAAguQAAgmgYgVQgVgTgegCQgbgBgTgTQgZgYAAguQAAg1AjgsQAhgqAjAAQAQAAAVAKQAcANAAAUQAAAagPAAQgHAAgRgGQgRgHgKABQgaAAgTAXQgTAXAAAhQAAAZAaAKQAJAEAaAEQAoAFAWAmQAUAiAAAyQAABIgmAqQghAlgqAAQgfAAgbgVg");
	this.shape_76.setTransform(332.275,97.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgfDbQgVhbgZiqIgOhTQgKg/AAgTQAAgOAGgJQAFgHAHgBQANABAEAYIAGA1IARBlQAQBvAQBSIABgGIAtjYIAPhKQAJgtALgXQAGgMAIAAQAHAAAFAKQAGAIAAANQAAAKgEAIQgKAcgHAfIgNBCIgvDaQgIAngLAkQgEASgKAAQgNAAgGgYg");
	this.shape_77.setTransform(309.475,96.95);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgUBBQgFgIAAgLQAAgIALgrQAJglAFgQQAEgOAHAAQAGAAAEAIQAFAJAAAKQAAAHgZBfQgCAQgJAAQgGAAgEgIg");
	this.shape_78.setTransform(282.55,121.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAqCTIgFhDQgCgiAAgfIAAgcIABgcQAAhBgOAAQgTAAgRAnQgQAlgIA2IgCAeIgBAeIABAbIABAbQAAANgFAIQgFAJgHAAQgHAAgGgJQgEgIAAgNIgBgbIgBgbQAAggACg2QADg3AAgeIgBgdIgBgdQAAgMAGgJQAEgIAIAAQAPAAACAnIAAAjQAehDAdAAQAbAAAMArQAHAcABA3IAAAeIAAAbQgBAZAEAoQAEAnAAAZQAAANgFAJQgFAIgHAAQgQAAgBgcg");
	this.shape_79.setTransform(267.9,103.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("Ag6CCQgbgmAAhDQAAhNAWg1QAYg6AnAAQAcAAASARQAWAUAAArQAAAfgUAYQgIALgcAWIhBA2QAKAZAOANQAPANASAAQAMAAAQgIQAUgKAGgQQAGgQAGAAQAGAAAFAIQAFAIAAAKQAAAigfAYQgaAUgZAAQgmAAgYgigAgjhQQgOAcgHA4IA1grQAegaANgUQgOgYgaAAQgVAAgOAdg");
	this.shape_80.setTransform(248.875,103.825);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgQDaQgFgJAAgNIAAg2IgBg2IABhGQACgqAAgcQABgOAEgIQAFgJAHAAQAGAAAFAJQAFAIAAAOIgBBGQgCAqAAAcIABA2IAAA2QAAANgFAJQgFAIgGAAQgIAAgEgIgAgLimQgFgKgBgPQABgOAFgKQAHgKAHAAQAIAAAGAKQAGAKAAAOQAAAPgGAKQgGALgIgBQgHABgHgLg");
	this.shape_81.setTransform(234.35,96.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgTDaIAChuIAChsIABhtIABhtQAAgdAQAAQARAAAAAdIgBBtIgBBtIgDCVIgBBGQgCAegOAAQgRgBAAgeg");
	this.shape_82.setTransform(224.225,95.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AA8CcQgEgbgHhEQgSAEgcALIgtARQgJAngUBMQgGARgJAAQgHAAgGgJQgFgJAAgNQAAgOAahgQgDgHAAgLQAAgYARgHQATg/AehUQAohyAKAAQAOAAAFAhIALBlIAZDQIAKAwQAFAYAAAIQAAANgFAJQgGAJgGAAQgQAAgMhHgAgWAWQAVgKAqgMIgOh0g");
	this.shape_83.setTransform(206.275,97.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(10,1,1).p("Ad80QMAAAAogMg73AAAMAAAgogg");
	this.shape_84.setTransform(474.125,325.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_85.setTransform(480,320);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgwURMAAAgohIBiAAMAAAAohg");
	this.shape_86.setTransform(277.55,325.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D41F45").s().p("A97URMAAAgohMA73AAAMAAAAohg");
	this.shape_87.setTransform(474.125,325.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3gEggZAVLIBjAAMA73AAAMAAAgohMg73AAAIhjAAg");
	this.shape_88.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,121.1,837.2,509.9);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#000099",
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
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;