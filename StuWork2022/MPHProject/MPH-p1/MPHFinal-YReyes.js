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


(lib.shoe2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ACiknQA6gVA5AFQBLAFAfAtQAYAlgQAtQBWBOAABlIAAAAQAABAghA2QgSAegcAaQgaAZgiAWQgiAXglAQQh1A1iWAAQhvAAhegdQhHgXg9goQgVgOgSgPQgkgdgWggQgjgxgGg4QgBgNAAgNQAAiBCLhcQADgBADgCQAEgPAJgOQAeguBMgFQAkgDAkAIQBCgNBKAAQBXAABLARQBhAXBPAzQAeAUAXAWQgEALgGAMQggA6hMAmQgpAUgoAIQgjAHgjgDQgagBgUgHQA6ABA6ADQCMAJCRAXAAdjIQAhgvBAggQASgJASgHAAkg5QgLgJgIgMQgeguAgg6QAFgKAFgIQAKAMAHANQAgA6gfAuQgFAIgGAGQgMANgSAIQAjAAAjAAQgXgHgRgOgAiMkrQAnAIAnATQA7AeAgAqAiPgcQghgIgggQQhMgmggg7QgXgpAIgiQBVg2BqgVAAGgkQgZANgmADQgrADgrgLAnbAaQCignCqgPQBKgGBLgCAjNEcQDYh4EABgAl4DAQFliRGhB/AmyCDQGjiWHLCJ");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323232").s().p("AinALQBLgHBLgBQARgIAMgNQARAOAXAHIhFAAQgaANgmACIgTABQghAAgigIgABiALQgagCgUgGQA6AAA6AEQgZAEgZAAIgUAAg");
	this.shape_1.setTransform(2.375,-3.9167);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AjMEcIADgCIAAAAIADgCIADgCQB0g9B9AAIAAAAIABAAQBpAABxArIABAAQh1A1iVAAQhvAAhdgdgAjMEcQhIgXg9goQgVgOgSgPIACAAQC9hNDOAAIAAAAIAAAAQC0AADBA6IAEABQgaAZgiAWQgjAXglAQIgBAAQhxgrhpAAIgBAAIAAAAQh9AAh0A9IgDACIgDACIAAAAIgDACIAAAAgAl4DAQgkgdgWggIAEgBIACgBQDYhNDiAAIAAAAIAAAAQDQAADZBBIAFABQgTAegbAaIgEgBQjBg6i0AAIAAAAIAAAAQjOAAi9BNIgCAAIAAAAgAmyCDQgjgxgFg4QChgnCqgPQArALArgDQAmgDAZgNIBGAAQgYgHgQgOQAGgGAFgIQAPgWAAgZQAAgbgQgeQgIgNgJgMIgKASQgRAeAAAaQAAAZAOAXQAJAMALAJQgNANgRAIQhKAChLAGQgggIghgQQhMgmggg7QgRgeAAgaQAAgKADgJQgDAJAAAKQAAAaARAeQAgA7BMAmQAhAQAgAIQiqAPihAnQgCgNAAgNQAAiBCLhcIAHgDQBUg2BrgVQAnAIAnATQA7AeAfAqQAhgvBAggQASgJASgHQBhAXBPAzQAeAUAXAWIgKAXQggA6hMAmQgpAUgoAIQg7gDg5gBQAUAHAaABQAjADAjgHQCMAJCRAXQiRgXiMgJQAogIApgUQBMgmAgg6IAKgXQBWBOAABlIAAAAQAABAghA2IgFgBQjZhBjQAAIAAAAIAAAAQjiAAjYBNIgCABIgEABIAAAAgAG8B2IAAAAgAAkg5QgLgJgJgMQgOgXAAgZQAAgaARgeIAKgSQAJAMAIANQAQAeAAAbQAAAZgPAWQgFAIgGAGIAAAAgAGHizIAAAAgAg9kQQgngTgngIQBBgNBKAAQBWAABMARQgSAHgSAJQhAAgghAvQgfgqg7gegACiknIAAAAg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.7,-33.3,99.4,66.69999999999999);


(lib.shoe1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ACiknQA6gVA5AFQBLAFAfAtQAYAlgQAtQgEALgGAMQggA6hMAmQgpAUgoAIQgjAHgjgDQgagBgUgHQA5ABA7ADQCMAJCRAXQAABAgiA2QgSAegcAaQgZAZgiAWQgiAXglAQQh1A1iWAAQhvAAhdgdQhIgXg8goQgWgOgSgPQgegYgUgbQgEgFgEgFQAEgBAEgBQGgiTHFCIAAdjIQAhgvBAggQASgJASgHQBhAXBPAzQAeAUAXAWQBWBOAABlIAAAAAiLkrQBCgNBJAAQBWAABMARAAdjIQAKAMAHANQAgA6gfAuQgFAIgGAGQgLgJgIgMQgeguAfg6QAFgKAGgIgABMgkQgXgHgRgOQgNANgRAIQAjAAAjAAgAiLkrQAnAIAnATQA7AeAfAqAlKjgQADgPAJgOQAfguBLgFQAkgDAlAIAiPgcQgggIghgQQhMgmggg7QgWgpAIgiQBVg2BqgVAnbAaQgBgNAAgNQAAhNAyhAQAhgrA5glQADgBADgCAAGgkQgZANgmADQgrADgrgLQBLgGBKgCgAnbAaQAYgGAZgFQCLgeCQgNAmyCDQgigxgHg4AjMEcQDXh4EABgAl4DAQFmiRGfB/");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323232").s().p("AinALQBLgHBLgBQgaANgmACIgTABQghAAgigIgABiALQgagCgUgGQA5AAA7AEQgZAEgZAAIgUAAgAgRADQARgIAMgNQARAOAXAHIhFAAg");
	this.shape_1.setTransform(2.425,-3.9167);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AjMEcIADgCIABAAIACgCIADgCQB0g9B9AAIABAAIAAAAQBpAABxArIACAAQh1A1iWAAQhvAAhdgdgAjMEcQhIgXg8goQgWgOgSgPQgegYgUgbIgIgKIAIgCIAEgCIABAAQDVhLDeAAIAAAAIABAAQDMAADVA/IAFACIAGABQgSAegcAaIgDgBQjBg6i0AAIAAAAIAAAAQjOAAi/BNQC/hNDOAAIAAAAIAAAAQC0AADBA6IADABQgZAZgiAWQgiAXglAQIgCAAQhxgrhpAAIAAAAIgBAAQh9AAh0A9IgDACIgCACIgBAAIgDACIAAAAgAnbAaIAxgLQCLgeCQgNQiQANiLAeIgxALQgBgNAAgNQAAhNAyhAQAhgrA5glIAGgDQBVg2BqgVQAnAIAnATQA7AeAfAqIgLASQgQAeAAAaQAAAZAPAXQAIAMALAJQAGgGAFgIQAPgWAAgZQAAgbgQgeQgHgNgKgMQAhgvBAggQASgJASgHQBhAXBPAzQAeAUAXAWIgKAXQggA6hMAmQgpAUgoAIQg7gDg5gBQAUAHAaABQAjADAjgHQCMAJCRAXQiRgXiMgJQAogIApgUQBMgmAgg6IAKgXQBWBOAABlIAAAAQAABAgiA2IgGgBIgFgCQjVg/jMAAIgBAAIAAAAQjeAAjVBLIgBAAIgEACIgIACQgigxgHg4gAk8iVQAgA7BMAmQAhAQAgAIQArALArgDQAmgDAZgNIBGAAQgXgHgRgOQgNANgRAIQhKAChLAGQgggIghgQQhMgmggg7QgQgeAAgaQAAgKACgJQgCAJAAAKQAAAaAQAegAG7B2IAAAAgAARhOQgPgXAAgZQAAgaAQgeIALgSQAKAMAHANQAQAeAAAbQAAAZgPAWQgFAIgGAGQgLgJgIgMgAGHizIAAAAgAAdjIIAAAAgAAdjIQgfgqg7geQgngTgngIQBCgNBJAAQBWAABMARQgSAHgSAJQhAAgghAvIAAAAgACiknIAAAAg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.7,-33.3,99.5,66.69999999999999);


(lib.pizza = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#A68542").ss(46,1,1).p("AyyAAMAllAAA");
	this.shape.setTransform(-0.775,-136.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A68542").ss(1,1,1).p("AMZk3IADgCAMZn5QAABQg9A6Qg8A4hWAAQhVAAg9g4Qg8g6AAhQQAAhRA8g5QA9g5BVAAQBWAAA8A5QA9A5AABRgAEyGxQgggRgegdQhKhJAAhpQAAhpBKhKQBLhIBpAAQBaAABEA2AjPmFQAABbhBA/Qg/A/hbAAQhbAAhBg/QhAg/AAhbQAAhZBAhAQBBhABbAAQBbAAA/BAQBBBAAABZgAsbE9QAQgbAXgXQBMhKBqAAQBqAABLBKQBLBMAABpQAABphLBKQhLBKhqAAQg/AAg1gb");
	this.shape_1.setTransform(-6.25,-19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ALZn1IAEgGIIxtaIhiAAALZn1IACgEAy61VIhTAAIG0XPIBpFmIEDN2ILgxnIEVmkIDRlA");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CF0000").s().p("AqwKjIhplnQAQgaAXgXQBLhKBqAAQBqAABLBKQBMBMAABpQAABohMBLQhLBKhqAAQg/AAg0gagAD1GDQhKhKAAhoQAAhpBKhKQBLhHBpgBQBaABBEA1IkUGlQgggRgegdgApEjrQhAg/AAhbQAAhaBAg/QBBhABaAAQBbAABABAQBAA/AABaQAABbhAA/QhABAhbAAQhaAAhBhAgAG5lvQg8g6AAhQQAAhQA8g6QA9g5BVAAQBWAAA8A5QA9A6AABQQAABQg9A6Qg8A4hWAAQhVAAg9g4g");
	this.shape_3.setTransform(-6.375,-19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("ArwHgQA0AbBAAAQBqAABLhKQBLhLAAhpQAAhphLhLQhLhJhqAAQhqAAhMBJQgXAXgQAaImz3PIBSAAMAllAAAIBiAAIowNaIgCACIgDAEIjRFAQhEg3hZAAQhqAAhKBJQhLBKAABoQAABoBLBKQAdAcAgASIrfRngAqErgQhAA/AABaQAABbBAA/QBBA/BaAAQBcAAA/g/QBBg/gBhbQABhahBg/Qg/hAhcAAQhaAAhBBAgAF5tFQg7A5AABRQAABQA7A6QA9A4BWAAQBVAAA9g4QA8g6ABhQQgBhRg8g5Qg9g5hVAAQhWAAg9A5g");
	this.shape_4.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.1,-159.5,286.7,297.1);


(lib.pineapple = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AHLvuQADgBADABAIeqdQAzgZAbAXQgmAAgoACQhJADhMAKQjPAagzA/QgGAHgEAJACHo3ICGjXQCOjWAwgKQhcAFhjATQgOADgPADQg/ANgxARQhlAigtAxQgQASgJATQgkhFgyg+Qhjh9hBAfQAZBHARBMQAjCZglAZQgmhLinA3Qg1ARg7AcIgdAPABflmQAvAZAnAlQATARAPASQAgAkAdAuQAjA3AaA9AAMh5IB3gaIDOBUADegoIBzgXQADAGACAGQANAhALAhQAHAVAGAXQAOA3AIA8QAIA8ACBAQAAARAAASQAAAhgBAgQgCAagCAZQgDAigFAhQgGAigHAhQgIAggJAfQgKAfgLAeQgSAtgXArQgOAagQAZQgWAigXAdQgaAhgcAZABnj2IAvgKIBBgFAC1koIA2hGQBChUA8hBQBwh5BFghAAMh5IDSBRICQA3ACDiTICRggABnj2ICtBDAByFiIDHBBIBdAeAC1DWIDcgoADABeIDRBQADABeIC7gjAASHjIEnhAIBhgVAECIlICMghAECIlIB/AiAD9KpIBzgjAD9KpIBeAaAAgLsIESAvAAgLsIDdhDAA+NvID0hUAA+NvICpAeAByFiIEpg4AC1DWIDmBUAASHjIDwBCAAyPtIA7AMQhKAphTAAQggAAgfgGQhKgOhBgzQgfgYgdgfQgagegZgkQgHgKgGgKQgQgZgOgaICwAfIEEhOAAyPtIB/gmQghAegjAUAkNkyQgtgmg2ggQhthAgvAiIAOgbQATghAWgZQBIhRBOAaQg1gxg/gpQhnhBg5AOQgDAAgCABQgLAEgIAGAi+lmQBCgiBMAAQAPAAAOACQA7AFA3AbAi+lmIAEABIBvArICyBEAhblwQAPAQABAmQgVgjAFgTQAGgdBCAKQArAGBHAXAjJkZIB+ghICqgsAi6llQBEgoAbAdAkKk0IAHADIA6AYIClBCICLgfAkKk0QAIgGAHgGQAdgWAggQAlCj6QAhggAegXQApgiAggSAkNkyIADgCAlCj6QAXgcAZgWQACgDADgDAlCj6IAAAAIB5gfAmRiGICtBDIDMBNID2gyAmRiGQANgXAOgWQAZgnAbggAifi7IB7gcICnBEAlCj6ICjA/ICrBCAmRiGIDyg1AnFgRQAWg9Aeg4AnFgRIDhgyIDwg2Aj5A4IDZBQIDggqAj5A4IDhguIDYBUAlrDGIFLg+IDVBOAlrDGIDhBJIE/g5An1HWQgHhAgBhEQAAgCAAgDQAAg4AFg1QADgkAFgiQAEgZAFgYIDugxAnMKWQgMgigIglQgOg6gHg/IEYg1IDvBCAm6LIQgKgYgIgaICFAXIFFhMID/BIAlpNiICFgoIEiA1Aj3IdID1BEIEEg8Aj6PbIBPgbIDdAtAk2OkICLAcIDphRAnwCaICFAsAn4DgICNgaAmUMbQgVgogRgrIBzgbIFnA/An9FSIFzhDID8BTAn9FSIEgBPIFPg/AngJPIDpgyIEJg6An1HWID+BHAnnBpQANhAAVg6IDMBJAhvQcIChgv");
	this.shape.setTransform(0.025,0.017);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("Ag+LOIChgvIihAvQhKgOhBgzIBPgbIhPAbQgfgYgdgfICLAcIDdAtIjdgtIDphRICpAeQgaAhgcAZIh/AmIB/gmQghAegjAUIg7gMIA7AMQhJAphVAAQgfAAgfgGgACeKrgAh6JyIiLgcQgagegZgkICFgoIiFAoIgNgUQgPgZgOgaICvAfIEiA1IjpBRgABvIhID1hUQgPAagQAZQgVAigYAdgABvIhgAizHsIEEhOIETAvIj1BUgAliHNQgWgogRgrIBzgbIFnA/IkEBOgABRGeIDehDIkBhIIEFg8IB/AiIgRA/IhyAjIBdAaQgSAtgWArgABRGegAkWFfIFEhMIEBBIIjeBDgAmbFIICFAXIhzAbIgSgygAEvFbIBygjQgKAfgLAegAkWFfgAkWFfgAkWFfIiFgXQgMgigIglIDpgyIj+hHIEYg1IkYA1QgHhAAAhEIEfBPIkfhPIFyhCIlyBCIAAgEQAAg4AEg1QAEgkAEgiIAJgxQAOhAAUg7IDMBKIDZBQIlLA+IFLg+IjZhQIDgguIjLhOIDxg2IishCIB6gcICoBEIh2AaIDRBRIjRhRIB2gaIDPBUIAFAMQAMAhALAiIANAsQAOA3AIA8IjQhQIC6gjIi6AjIjahUIDaBUIjhAqIDVBOIk/A5ID8BSIlPA/IDvBCIkJA6ID0BEIlEBMgAk6iHIDhBJIjhhJIiFgsgAnHhtICNgagAm2jkIDugxgAGfk+IiQg4IB0gXIh0AXIj3AzID3gzgAEvFbgAGhE4IAAAAgAjGDPIEJg6IDwBCIkFA8gAnECIID+BHIjpAyQgOg6gHg/gAEzDXICMghQgGAigHAhgAEzDXgABDCVIEnhAIjHhBIEpg3IjmhUIjVhOIDhgqIDQBQIjcAoIDcgoQAJA8ABBAIAAAjQABAggCAgIhhAVIBdAeQgDAigFAhIiMAhgAG/C2IAAAAgABDCVgABDCVgAisBTIFPg/IDHBBIknBAgAHHBzgAFqBVIBhgVIgEAzgAHLBAIAAAAgACjAUgAhZg+IE/g5IDmBUIkpA3gAHMgjgADyjvgADyjvgAjIkVIjMhKIDhgyIishDIDxg1ICsBCIjxA2IDLBOIjgAugAAYlDgAlfnUQAMgXAOgWQAZgnAbggQAiggAdgXQApgiAggSQBEgoAbAdIgBAIQAAARARAdIhvgrIBvArIh+AhICkBCIh6AcIiig/IB4gfIg6gYIA6AYIh4AfICiA/IjxA1ICsBDIjhAyQAWg9Afg4gAkQpIIgBAAgAC0nhICRggQAkA3AaA9gAizmRgAC0nhgAAMolIikhCIB+ghQgBgmgPgQQAGgdBBAKQAtAGBGAXIiqAsICyBEIiMAfICMgfIiyhEICqgsQAvAZAoAlQASARAPASIhBAFIgvAKIAvgKIBBgFQAhAkAcAuIithDICtBDIiRAggAFFoBgAhuoJgAAMolgAiYpngAgaqIIAAAAgAgaqIgAgrq2IABgIQAPAQABAmQgRgdAAgRg");
	this.shape_1.setTransform(-4.9,33.4078);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("Aj1FiIAGgGIADgCIAGADQgdAXgiAgQAXgcAZgWgAB8EoQg2gbg8gFQgOgCgPAAQhLAAhDAiQgfAQgdAWIgPAMIgDACQgtgmg3ggQhthAgvAiIAPgbQATghAWgZQBHhRBOAaQg0gxhAgpQhnhAg4AOIgGABIAegPQA7gcA0gRQCog3AlBLQAmgZgjiZQgShMgZhHQBCgfBjB9QAxA+AlBFQAJgTAPgSQAtgxBmgiQAxgRA+gNIAegGQBigTBcgFQgvAKiODWIiGDWQgGAHgEAJQAEgJAGgHQAyg/DQgZQBMgKBJgDQhFAghwB5Qg8BBhCBUIg2BGQgoglgvgZgAjsFaIAPgMQAdgWAfgQQBDgiBLAAQAPAAAOACQA8AFA2AbQhGgXgsgGQhBgKgHAdQgagdhFAoIgEgBIAEABQggASgpAigAjsFag");
	this.shape_2.setTransform(-2.925,-65.458);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pineapple, new cjs.Rectangle(-63.5,-107.3,127.1,214.7), null);


(lib.nose2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AoKiWIQVDvIvrA+");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,-17.1,108.5,34.2);


(lib.nose1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ABLj7IAADsACuA4QBUBIhUB8Agrj0IAADlAinBFQhgCNBgAq");
	this.shape.setTransform(0.0375,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-27.1,47.1,54.3);


(lib.nikehat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhABhQgYgMgQgZQgPgZAAgjQAAgvAfgeQAfgeA3AAQAsAAAZANQAaAOAOAZQANAaAAAoIAAAJIieAAQACATAIAJQAMAOARAAQAMAAAKgGQAHgEAHgJIBPAHQgSAfgaAOQgZANgvAAQgpAAgXgLgAgdgtQgHAJgCATIBNAAQgCgXgKgKQgKgKgRAAQgSAAgLAPg");
	this.shape.setTransform(30.575,-39.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgCPIgphTIgeAdIAAA2IhRAAIAAkdIBRAAIAACTIA6hEIBiAAIhKBHIBPCHg");
	this.shape_1.setTransform(5,-43.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnCPIAAjOIBPAAIAADOgAgnhYIAAg2IBPAAIAAA2g");
	this.shape_2.setTransform(-16.175,-43.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBqIAAhxQAAgTgHgJQgIgIgNAAQgNAAgJALQgJALAAAbIAABkIhQAAIAAjPIBKAAIAAAjQARgWARgIQAQgJAYAAQAhAAATAUQATATAAApIAACDg");
	this.shape_3.setTransform(-36.175,-40.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("ADNs8QgPgEgOgHQgigSAAgZQAAgZAigRQAigSAwAAQAwAAAiASQAiARAAAZQAAAZgiASQgSAJgVAEQgUAEgXAAQgdAAgYgGgAKNgGQCal5ixmRAEts6QDCAJCHAhQDMAxBEBpQCQDdBnEZQAqBxAQBFQAYBoghALQg4ATkygrQg6gIgvgHQgPgDgMgCQgEgBgEgBQgvgLgvgLQAdg2AWg1IIqA8ALAB9QhpgQB9AfQADgGACgCQgMgEgNgDgALZCEQABgCABAAAELOjQAHgCAHgDQBCgcA3hJQCyjuBEjhQA4i4AUgmAmzDuQAHAFALAEQAJAEAKACQAjAKA0ADQAiABArgBQApgBAwgEQA7gFBHgKQAjgFAggEQDXgeBDgHIABAAQAAgBABABQAPgCAIAAQAqgBg/ANQgBABgBAAQhDAOkRBRQg6ARg3AOQjGAxiJgGQh6gGgugeQgkgZAMgoQAbhWAbgvQADgDACgDQAdgwCLhNQgeAugOAmQgFALgDALQgOAtAMAfQAJAZAbAQgApKIwQEYBODkC3QBfBMBUAdQAIADAJACAB6OjQBQAXBFgXArBgXQA8iJA8jTQB4mmBQgFQAggCDFgQQDFgOCkACAJaBlQnGhqlmgcQmLgghkAqAzAJZIBmggQCNhsB+AeQB+AfCHAmAzAJZQAGgHA0hSQBLh3A9hTQDXkiBmgrAzAJZQF3BgD/iJ");
	this.shape_4.setTransform(0.0347,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B10000").s().p("Ak6AmIBmggQCNhrB9AfQB+AeCHAnQiWBPi+AAQiGAAibgog");
	this.shape_5.setTransform(-90.175,56.2832);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkoC2Qh6gFgugfQgkgYAMgpQAbhUAbgwIAFgFQAdgwCLhOQgeAugOAmIgNgEIgHAXIAMADQgOAtAMAfQAJAZAbAPQAHAFALAFQAJADAKACQAjALA0ADQAiABArgBQApgBAvgEQA7gGBHgJIBEgKQDXgeBDgHIACAMQhDAOkSBQQg6ASg3ANQivAsiAAAIgfgBg");
	this.shape_6.setTransform(-15.5844,19.7827);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AB6OjIgEAAIgRgFQhUgdhfhMQjki3kYhOQiHgmh+gfQh+geiNBsIhmAgQAGgHA0hSQBLh3A9hTQDXkiBmgrIABAAIAAAAIACgBIABAAIAAAAQA6gXCUAAIAAAAIABAAQBpAACWALIABABIAEAAIASABIAGABQFmAcHGBqQnGhqlmgcIgGgBIgSgBIgEAAIgBgBQiWgLhpAAIgBAAIAAAAQiUAAg6AXIAAAAIgBAAIgCABIAAAAIgBAAQA8iJA8jTQB4mmBQgFIDlgSQDFgOCkACQgPgEgOgHQgigSAAgZQAAgZAigRQAigSAwAAQAwAAAiASQAiARAAAZQAAAZgiASQgSAJgVAEQgUAEgXAAQgdAAgYgGQAYAGAdAAQAXAAAUgEQDCAJCHAhQDMAxBEBpQCQDdBnEZQAqBxAQBFQAYBoghALQg4ATkygrIhpgPIgbgFIgIgCIhegWQAdg2AWg1QgWA1gdA2IBeAWIAIACQhpgQB9AfQgUAmg4C4QhEDhiyDuQg3BJhCAcIgOAFIAEAAQgjAMglAAQglAAgogMgApJCMIgFAGQgbAvgbBWQgMAoAkAZQAuAeB6AGQCJAGDGgxQA3gOA6gRQERhRBDgOIgCgLIABAAIABAAIAXgCIACAAIABAAIACAAQAgAAg1ALIgEABIgBAAIgCABIACgBIABAAIAEgBQA1gLggAAIgCAAIgBAAIgCAAIgXACIgBAAIgBAAQhDAHjXAeIhDAJQhHAKg7AFQgwAEgpABQgrABgigBQg0gDgjgKQgKgCgJgEQgLgEgHgFQgbgQgJgZQgMgfAOgtIAIgWQAOgmAeguQiLBNgdAwgAKNgGIIqA8Ioqg8QBIivgBi1QAAjQhejWQBeDWAADQQABC1hICvIAAAAgAnhB2IAHgYIANAFIgIAWgAJaBlIAAAAg");
	this.shape_7.setTransform(0.0347,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.6,-96.2,247.3,192.5);


(lib.mouth2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABni3IAMAAIAIAAIEsAFQhzg+iIgYQhSgOhaAAQjcAAivBWICYADIACAAALzDHQgRg7gfg2Qg4hihnhTQg7gwhCgjArwC+QgNAsgGAtIYHAAQgDgVgEgTQgEgUgGgUAgIDDIBvgDQAIAAAIAAIBuAEIgjgZQgagZgagTQhlhMg0A3Qg2g3hlBMQgaATgZAZIgxAaIBSAAICwgCIDtABIIOADAjzi9IAGAAIFQAGAmLjAQhSAohHA5QibB9gxCgIHmAH");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF99FF").s().p("Aj3A5IAxgaQAZgZAagSQBlhMA1A3QA1g3BlBMQAaASAaAZIAjAZIhugEIgQAAIhwADIivACg");
	this.shape_1.setTransform(-1.875,13.991);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660000").s().p("ADkDAIgjgYQgagagagSQhlhMg0A3Qg2g3hlBMQgaASgZAaIgxAaInmgHQAxihCbh7QBHg6BSgoICYADIAGAAIFQAGIAEAAIAMAAIAIAAIEsAGQBCAiA7AxQBnBSA4BiQAfA1ARA8gAgJC/IBvgCIAQAAIBuADgAjujAgAj0jAIACAAIAEAAg");
	this.shape_2.setTransform(0.125,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AsDEXQAGgtANgsIHmAHIBSAAICwgDIDtABIIOAEQAGAUAEAUQAEATADAVgAB7i3IgEAAIgEAAIgMAAIgEAAIlQgGIgEAAIgCAAIiYgDQCvhWDcAAQBaAABSAOQCIAYBzA/g");
	this.shape_3.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth2, new cjs.Rectangle(-78.1,-28.9,156.3,57.8), null);


(lib.mouth1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALfjLQgQA8gfA4Qg3BkhjBWQg6AxhAAlQhxBAiDAYQhQAOhYAAQjWAAirhYICIgCIAOgBIA3gBIEYgFQAIAAAIAAIBZgCIDPgDArcjDQAAgBAAAAQgNgsgFguIXdAAQgDAVgEAVQgDAUgGAVAjrDEIAXgcQAagaAZgUQBihOA0A5QAzg5BiBOQAZAUAaAaIAQAUAmBDHQhPgphFg7QiXiBgwilIW7gI");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF99FF").s().p("AjEAgQAagbAYgSQBihOA0A5QA0g5BhBOQAaASAZAbIAQAUIhZACIgQAAIkXAFIg3ABg");
	this.shape_1.setTransform(-1.55,13.6467);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmBDHICIgDIAOAAIA3gBIEYgFIAPAAIBZgCIDPgEQhwBBiEAYQhQAOhXAAQjVAAishYgArcjEQgMgsgGguIXdAAIgHAqQgEAUgFAVI27AJIAAgCg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("AoWBlQiXiAgwilIW7gIQgRA8geA4Qg3BkhjBVQg6AyhBAkIjPAEIgQgUQgZgbgZgTQhihOgzA5Qg0g5hiBOQgZATgZAbIgYAcIgOAAIiIACQhPgohFg8g");
	this.shape_3.setTransform(0.1,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth1, new cjs.Rectangle(-76.1,-29.7,152.2,59.4), null);


(lib.Hand2R = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AtjgHIj5iMAwaj+QgzAwgPA7QgHAZAAAbQAAAyAWArQAYAsAvAlQAbAWAeAPQBKAkBcAAQCCAABdhIQAAAAABgBApUkYQgegVgigOQg3gYhBgDQgNgBgOAAQhqAAhRAvQgTALgRAOQgLAIgJAJAn/i4QgTgoglghQgIgHgIgHQgHgFgGgEIAABpApABPQBdhIAAhmQAAgSgDgRQgFgcgMgaQAwABBRAJQDtAaIEBbILpCJIhYEIQvHhKqFi+ArjiHIk3h3");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("ApABQIAAgBQBdhJAAhlQAAgSgDgRQgFgcgMgaQAwABBRAJQDtAaIEBbILpCJIhYEIQvHhKqFi+gAvNBzQgegPgbgVQgvglgYgsQgWgrAAgyQAAgbAHgZID5CMIj5iMQAPg7AzgwQAJgIALgJQARgOATgKQBRgwBqAAIAbABQBBADA3AYQAiAOAeAVIAABpIAAhpIANAJIAQAOQAlAiATAnQANAaAFAcQACARAAASQAABlhcBJIgBABQhdBIiCAAQhcAAhKglgArjiHIk3h3gAxciTg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.3,-36.4,228.7,72.8);


(lib.hand1L = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AJSkYIAABpAJGBQQgBAAAAgBQhdhIAAhmQAAgwAUgpQAXgwAygnQAGgFAHgEQBYg/B6AAQBqAABRAvQATALASAOQAKAIAJAJQA0AwAPA7QAGAZAAAbQAAAygWArQgXAsgvAlQgbAWgeAPQhKAkhdAAQiCAAhchIIgBAAQqFC+vHBKIhYkIILpiJQK2h6C8gFANggHID6iMALgiHIE3h3");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AxfBQILpiJQK2h6C8gFQgUAqAAAvQAABlBcBJIABABQqFC+vHBKgAJFBQIgBgBQhchJAAhlQAAgvAUgqQAXgwAxgnIANgJIAABpIAAhpQBZg/B6AAQBqAABRAwQATAKASAOQAKAJAJAIQAzAwAPA7QAHAZAAAbQAAAygWArQgYAsguAlQgbAVgfAPQhJAlhdAAQiCAAhdhIgANggHID5iMgALgiHIE3h3gAH8i4IAAAAgAJRkYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-36.4,228,72.8);


(lib.facemask = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AtHmNQCagoCcgZQCcgZCfgJQCdgJCcAKQCdALCbAbQCJAZCGAoQBQAXBOAcQCghJD4BJQAnGyjvF1ImQhoAtHmNImIAAQhKHGC6G5IGgiwQCLBKCWAtQCXArCdANQCdAMCegWQCdgWCXgzQBDgWBAgeAtHmNICILPANIlVIjAK/");
	this.shape.setTransform(0.0367,0.033);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhpHxQidgNiYgrQiWgtiLhKIiIrPQCagoCdgZQCbgZCfgJQCdgJCdAKQCdALCaAbQCJAZCGAoQBQAXBOAcIjAK/QhAAehDAWQiXAzicAWQhoAOhnAAQg2AAg2gEg");
	this.shape_1.setTransform(0,0.033);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.3,-52.1,254.7,104.30000000000001);


(lib.eye2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACoAAQAAA/gxAsQgnAigyAIQgPACgPAAQhFAAgxgsQgxgsAAg/QAAg9AxgtQAdgaAlgLQAZgHAbAAQAPAAAPACQAMACALADQAkALAeAaQAxAtAAA9gAArgFQAAASgQAOQgOANgVAAQgVAAgPgNQgPgOAAgSQAAgTAPgOQAPgNAVAAQAVAAAOANQAQAOAAATg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAgQgPgNAAgTQAAgSAPgOQAQgNAUAAQAVAAAPANQAQAOAAASQAAATgQANQgPAOgVAAQgUAAgQgOg");
	this.shape_1.setTransform(-0.85,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah2BqQgxgrAAg/QAAg9AxgtQAdgaAlgKQAZgIAbABQAPAAAPABQAMACALAEQAkAKAeAaQAxAtAAA9QAAA/gxArQgnAigyAIQgPACgPAAQhFABgxgtgAgsgmQgPAOAAATQAAASAPANQAPAOAVAAQAVAAAOgOQAQgNAAgSQAAgTgQgOQgOgNgVAAQgVAAgPANg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-16,35.7,32.1);


(lib.eye1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACoAAQAAA/gxAsQgmAigzAIQgOACgQAAQhEAAgygsQgxgsAAg/QAAg9AxgtQAegaAlgLQAYgHAbAAQAQAAAOACQAMACALADQAkALAeAaQAxAtAAA9gAArgFQAAASgPAOQgPANgUAAQgWAAgPgNQgPgOAAgSQAAgTAPgOQAPgNAWAAQAUAAAPANQAPAOAAATg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjAgQgQgNAAgTQAAgSAQgOQAPgNAUAAQAWAAAOANQAPAOABASQgBATgPANQgOAOgWAAQgUAAgPgOg");
	this.shape_1.setTransform(-0.85,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah2BqQgxgrAAg/QAAg9AxgtQAegaAlgKQAYgIAbABQAQAAAOABQAMACALAEQAkAKAeAaQAxAtAAA9QAAA/gxArQgmAigzAIQgOACgQAAQhEABgygtgAgsgmQgPAOAAATQAAASAPANQAPAOAWAAQAUAAAPgOQAPgNAAgSQAAgTgPgOQgPgNgUAAQgWAAgPANg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-16,35.7,32.1);


(lib.shadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArrLAQk3kkAAmcQAAmbE3kkQE2kjG1AAQG3AAE2EjQE2EkAAGbQAAGck2EkQk2Ejm3AAQm1AAk2kjg");
	this.shape.setTransform(0,-0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.949)").s().p("ArxLGQk6kmAAmgQAAmfE6knQE4klG5AAQG6AAE5ElQE5EnAAGfQAAGgk5EmQk5Emm6AAQm5AAk4kmgArrq/Qk3EkAAGbQAAGcE3EkQE1EjG2AAQG3AAE2kjQE2kkAAmcQAAmbk2kkQk2kjm3AAQm2AAk1Ejg");
	this.shape_1.setTransform(0.0125,-0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.749)").s().p("AsKLhQlFkxAAmwQAAmvFFkxQFDkvHHgBQHJABFDEvQFEExAAGvQAAGwlEExQlDEwnJAAQnHAAlDkwgAsEraQlCEvAAGrQAAGsFCEuQFAEtHEABQHFgBFBktQFCkugBmsQABmrlCkvQlBksnFAAQnEAAlAEsg");
	this.shape_2.setTransform(-0.0125,-0.0625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.698)").s().p("AsRLnQlIkzABm0QgBmzFIk0QFGkxHLgBQHMABFGExQFIE0gBGzQABG0lIEzQlGEynMABQnLgBlGkygAsKrgQlGExABGvQgBGwFGExQFCEvHIABQHJgBFDkvQFEkxAAmwQAAmvlEkxQlDkvnJgBQnIABlCEvg");
	this.shape_3.setTransform(0.025,-0.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.647)").s().p("AsXLuQlLk3ABm3QgBm3FLk3QFIkzHPgBQHQABFIEzQFLE3gBG3QABG3lLE3QlIE0nQABQnPgBlIk0gAsRrnQlIE0ABGzQgBG0FIEzQFGEyHLAAQHMAAFGkyQFIkzgBm0QABmzlIk0QlGkxnMgBQnLABlGExg");
	this.shape_4.setTransform(0.0125,-0.0375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.094)").s().p("AtbM3IAAAAQlrlVABniQgBnhFrlWQFklOH3gBQH4ABFlFOIAAAAQFqFWgBHhQABHilqFVQllFPn4ABQn3gBlklPgAtVswQloFTABHdQgBHfFoFRQFiFNHzABQH0gBFilNQFolRgBnfQABndlolTIAAAAQlilMn0gBQnzABliFMg");
	this.shape_5.setTransform(0,-0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.043)").s().p("AthM+IgBgBQltlXABnmQgBnlFtlYQFnlRH7gBQH8ABFnFRQFtFYgBHlQABHmltFXQlnFSn8ABQn6gBlnlRgAAASHQH4gBFllPQFqlVgBniQABnhlqlWIAAAAQlllOn4gBQn3ABlkFOQlrFWABHhQgBHiFrFVIAAAAQFkFPH3ABg");
	this.shape_6.setTransform(0,-0.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.247)").s().p("AtJMjIAAAAQlilMABnXQgBnWFilMQFdlIHsAAQHtAAFdFHIAAABQFiFMgBHWQABHXliFMQldFIntAAQnsAAldlIgAtDscQlfFKABHSQgBHTFfFJIABAAQFaFGHoABQHqgBFalGQFflJgBnTQABnSlflKIAAAAQlblFnpAAQnpAAlaFFg");
	this.shape_7.setTransform(0.0125,-0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.196)").s().p("AtOMqIgBgBQlllOABnbQgBnZFllQQFflKHwgBQHxABFfFKIAAAAQFlFQgBHZQABHbllFPQlfFKnxABQnvgBlflKgAtJsiQliFNABHVQgBHXFiFMIAAAAQFdFIHsABQHtgBFdlIQFilMgBnXQABnVlilNIAAAAQldlIntAAQnsABldFHg");
	this.shape_8.setTransform(0.0125,-0.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.145)").s().p("AtVMwQlolSABneQgBneFolSQFilMHzgBQH0ABFiFMIAAAAQFoFTgBHdQABHeloFSQliFNn0ABQnzgBlilNgAtPspQllFPABHaQgBHaFlFPIABABQFfFKHvAAQHxAAFflKQFllPgBnbQABnalllPIAAAAQlflKnxgBQnvABlgFKg");
	this.shape_9.setTransform(0,-0.0375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.396)").s().p("As2MPQlZlEAAnLQAAnKFZlEQFVlBHhAAQHiAAFVFBQFZFEAAHKQAAHLlZFEQlVFBniAAQnhAAlVlBgAAARHQHfAAFSk+QFWlCAAnHQAAnGlWlCIAAAAQlSk+nfAAQndAAlSE+QlXFCABHGQgBHHFXFCIAAAAQFSE+HdAAg");
	this.shape_10.setTransform(-0.0125,-0.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.345)").s().p("As8MWIAAAAQlclHAAnPQAAnOFclHQFXlDHlAAQHmAAFYFDIAAAAQFcFHgBHOQAAHPlbFHQlYFDnmAAQnlAAlXlDgAs2sOQlaFEABHKQgBHLFaFEQFVFBHhAAQHiAAFVlBQFZlEAAnLQAAnKlZlEQlVlBniAAQnhAAlVFBg");
	this.shape_11.setTransform(0,-0.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.294)").s().p("AtCMcIgBAAQlflJABnTQgBnSFflKQFalFHpAAQHpAAFbFFIAAAAQFfFKgBHSQABHTlfFJQlaFGnqAAQnoAAlalGgAAARZQHmAAFXlDQFclHAAnPQAAnOlblHIgBAAQlXlDnmAAQnlAAlXFDQldFHABHOQgBHPFdFHIAAAAQFXFDHlAAg");
	this.shape_12.setTransform(0.0125,-0.0375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.447)").s().p("AswMJIABAAQlXlCAAnHQAAnGFWlCQFTk+HdAAQHeAAFTE+IAAAAQFWFCAAHGQAAHHlWFCQlSE+nfAAQndAAlTk+gAAAQ+QHbAAFQk8QFTk/AAnDQAAnClTlAIAAAAQlQk7nbAAQnaAAlQE7QlTFAAAHCQAAHDFTE/IAAgBQFQE8HaABg");
	this.shape_13.setTransform(0.0125,-0.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.498)").s().p("AsqMBIAAABQlTk/AAnDQAAnCFTlAQFQk7HaAAQHbAAFQE7IAAAAQFTFAAAHCQAAHDlTE/QlQE7nbABQnagBlQk8gAAAQ1QHXAAFOk6QFQk8gBm/QABm+lQk9IAAAAQlOk5nXAAQnWAAlNE5QlRE8AAG/QAAG/FRE8IAAAAQFNE5HWABg");
	this.shape_14.setTransform(0.0125,-0.0375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.596)").s().p("AsdL1IAAAAQlOk5ABm8QgBm6FOk6QFLk3HSAAQHUABFKE2IABAAQFNE6gBG6QABG8lOE5IABAAQlLE3nUAAQnSAAlLk3gAsWrtQlME3ABG2QgBG4FME2QFHE1HPAAQHQAAFIk1QFLk2gBm4QABm2lLk3QlIk0nQAAQnPAAlHE0g");
	this.shape_15.setTransform(0,-0.0625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.545)").s().p("AsjL7IAAABQlRk8ABnAQgBm+FRk9QFNk5HWAAQHXAAFOE5IAAAAQFQE9gBG+QABHAlQE8QlNE5nYAAQnWAAlNk6gAsdr0QlOE5ABG7QgBG7FOE5IAAABQFLE2HSABQHUgBFLk3IgBAAQFOk5gBm7QABm7lNk5IgBAAQlKk3nUAAQnSAAlLE3g");
	this.shape_16.setTransform(0,-0.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.796)").s().p("AsELaQlCkuAAmsQAAmrFCkvQFAktHEAAQHFAAFBEtQFCEvgBGrQABGslCEuQlBEtnFABQnEgBlAktgAAAP+QHCAAE+kqQE+ksAAmoQAAmnk+ksIgBAAQk+kqnBgBQnAABk+EqQk/EsAAGnQAAGoE/EsIAAAAQE+EqHAAAg");
	this.shape_17.setTransform(0,-0.0375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.898)").s().p("Ar4LNIAAAAQk8kpAAmkQAAmjE8kpQE7koG9AAQG+AAE7EnIAAABQE8EpAAGjQAAGkk8EpQk7Eom+AAQm9AAk7kogArxrGQk6EnAAGfQAAGgE6EmQE4EmG5AAQG6AAE5kmQE5kmAAmgQAAmfk5knQk5klm6AAQm5AAk4Elg");
	this.shape_18.setTransform(0.0125,-0.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.847)").s().p("AAAP+QnAAAk+kqIAAAAQk/ksAAmoQAAmnE/ksQE+kqHAAAQHBAAE+EqIAAAAQE/EsAAGnQAAGok/EsQk+EqnBAAIAAAAgAAAP1QG+AAE7koQE8kpAAmkQAAmjk8kpIAAAAQk7kom+AAQm9AAk7EoQk8EpAAGjQAAGkE8EpIAAAAQE7EoG9AAg");
	this.shape_19.setTransform(0.0125,-0.0625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(-123.1,-116.8,246.3,233.6), null);


(lib.hazyring3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.396)").s().p("AnxMvQlljEhrl7Qgih6gCh2IAAAAQACh1Aih6QBrl7FljEQFmjEGNBlQGOBmDPFUQCIDhgBDyIAAAAQABDziIDhQjPFUmOBmQiIAiiCAAQj9AAjsiBgAnsslQlhDChqF3QgiB4gCB0IAAAAQACB1AiB4QBqF3FhDCQFiDDGJhlQGKhlDMlQQCHjfAAjwIAAAAQAAjviHjfQjMlQmKhlQiGgjiBAAQj7AAjpCBgAMnCxQAXhXAAhaIAAAAQAAjIhxi7QiskblLhUQlKhVkpCjQkpCkhZE6QgcBlgCBhIAAAAQACBRATBTQAEAmAHAlIgMgmQgchmgChjIAAAAQAChiAchmQBak/EtilQEtilFOBVQFPBWCuEeQBzC9gBDLIAAAAQAAB9grB4QAGghAEgjg");
	this.shape.setTransform(-0.0122,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.698)").s().p("AnhMwQlai/hnlvQghh2gDhxIAAgBQADhxAhh2QBnlvFai+QFai+GBBjQGBBiDIFJQCEDagBDqIAAABQABDqiEDbQizEllGBuQAjgQAhgUQEPhzCdkBQCDjYgBjoIAAgBQABjniDjYQjGlFl9hiQl8hhlXC8QlWC8hmFrQghB0gCBwIAAABQACBwAhB1QBmFrFWC8QAlAUAlARQApAZAqATQhSgchQgsgAtHDrQgehqgChmIAAgBQAChlAehqQBdlLE4isQE4irFbBYQFcBZC0EpQB4DFgBDSIAAABQABDTh4DFIgNAUQAOgeALgeQBhizgBi9IAAgBQABjQh2jCQiykllXhYQlXhYk1CqQk0CphcFHQgdBpgCBkIAAABQACBlAdBpQAaBdAsBRQAMAgAOAeQhGhpgkiBg");
	this.shape_1.setTransform(-0.0248,-2.6307);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.796)").s().p("AHEM6QDjhzCKjiQCBjWAAjlIAAAAQAAjliBjVQjElCl5hhQl4hglTC6QlSC6hlFnQghBzgCBvIAAAAQACBwAhBzQBlFnFSC6IAJAFQAeAWAeASQglgQglgVQlWi8hmlrQghh0gChxIAAAAQAChwAhh1QBmlrFWi8QFXi8F8BiQF9BhDGFGQCDDYgBDnIAAAAQABDoiDDYQidECkPBzQAbgRAbgUgAtRD9QgehrgChoIAAAAQAChnAehsQBelPE8itQE8iuFfBaQFgBaC2EtQB5DHgBDVIAAAAQABDWh5DHQgYAogbAkQAQgeANgeIANgVQB4jFgBjTIAAAAQABjTh4jEQi0kplchZQlbhZk4CsQk4CrhdFLQgeBqgCBmIAAAAQACBnAeBqQAkCBBGBpQAOAeARAeQhlh+guimg");
	this.shape_2.setTransform(-0.0247,-4.1831);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.898)").s().p("AH3MgQC6hwB3jDQCAjTgBjjIAAAAQABjiiAjTQjCk+l1hgQl0hflOC4QlPC4hkFjQggBygCBtIAAAAQACBuAgByQBdFKEoC3QAYAVAZATIgJgFQlSi6hllnQghhzgChwIAAAAQAChvAhhzQBllnFSi6QFTi6F4BgQF5BhDEFCQCBDVAADlIAAAAQAADmiBDVQiKDjjjBzQAagTAZgVgAtcENQgehtgChpIAAAAQAChoAehtQBglTFAivQE/iwFkBbQFjBbC5EwQB6DJAADYIAAAAQAADZh6DJQgrBIg1A7QATgdARgfQAbgkAYgoQB5jHgBjWIAAAAQABjVh5jHQi2ktlghaQlfhZk8CtQk8CuheFPQgfBrgBBnIAAAAQABBoAfBsQAuClBlB+QAPAcASAaQiGiPg5jIg");
	this.shape_3.setTransform(-0.0123,-5.5024);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AI/LpQA5g8ArhCQA1g8ArhHQB7jKgBjYIAAAAQABjYh7jJQi4kxlkhbQlkhak/CvQlACwhgFTQgeBsgCBpIAAAAQACBpAeBtQA5DICGCPQAqA+A1A4QAfAhAgAdQkoi3hdlKQgghygChuIAAAAQAChuAghxQBklkFPi3QFOi4F1BfQF0BfDCE/QCADTgBDiIAAAAQABDjiADTQh3DDi6BwQAlggAjgmg");
	this.shape_4.setTransform(-0.0247,-6.976);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.294)").s().p("An2M4QlpjHhsl/Qgjh7gCh3IAAAAQACh2Ajh7QBsl/FpjHQFpjGGSBmQGSBnDRFYQCKDkgBD0IAAAAQABD1iKDkQjRFYmSBnQiKAiiDAAQkAABjuiDgAnxsuQllDEhrF7QgiB6gCB1IAAAAQACB2AiB6QBrF7FlDEQFmDEGNhlQGOhmDPlUQCIjhgBjzIAAAAQABjyiIjhQjPlUmOhmQiIgiiCAAQj9AAjsCBgAMtBcQAGguAAguIAAAAQABjGhwi4QgWgkgZgiIAQANIgRgOQiljbkchJIABAAQlGhTkmChQklChhYE3QgcBkgBBfIAAAAQAAApAGApQAAAqAEAoQgThTgChRIAAAAQAChhAchlQBZk6EpikQEpijFKBVQFLBUCsEbQBxC7AADIIAAAAQAABagXBXQAFgqABgrg");
	this.shape_5.setTransform(-0.0122,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.498)").s().p("AnsMmQlhjChql3Qgih4gCh1IAAAAQACh0Aih4QBql3FhjCQFijDGJBlQGKBlDNFQQCHDfgBDvIAAAAQABDwiHDfQjNFQmKBlQiGAjiBAAQj6AAjqiBgAnmsdQleDAhoFzQgiB3gCBzIAAAAQACB0AiB3QBoFzFeDAQCZBUCgAcQBUASBZAAQBuAABkgbIAMgDIAegIIABAAQGFhjDLlNQCFjdgBjtIAAAAQABjsiFjdQjLlNmFhjIgBAAQiEgiiAAAQj4AAjmB+gAszDMQgdhogChkIAAAAQAChjAdhoQBblDExinQEwinFTBWIAAAAQFTBXCwEiQB0DAAADNIAAAAQAACfhECWQAIggAGggQAsh4gBh9IAAAAQABjLhzi9QiukelPhWQlOhVktClQktClhaE/QgcBmgCBiIAAAAQACBjAcBmIAMAmQAHAmAKAkQgXg0gQg5g");
	this.shape_6.setTransform(-0.0248,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.596)").s().p("AnmMlQlejAholzQgih3gCh0IAAAAQAChyAih4QBolyFejBQFdjAGFBkIABAAQGFBjDKFNQCGDdgBDsIAAAAQABDuiGDcQjKFNmFBkIgBAAIgeAHQA4gQA0gZQFGhuCzkmQCEjagBjrIAAAAQABjqiEjaQjIlJmBhjQmBhilaC+QlaC+hnFvQgiB2gCBxIAAAAQACByAiB2QBnFvFaC+QBQAsBSAdQBGAgBMAQQiggciZhUgAs9DVQgehogBhmIAAAAQABhkAehpQBclHE0ipQE1iqFXBYQFXBYCyElQB2DCgBDQIAAAAQABC+hiCyQALgdAIgeQBEiWAAifIAAAAQAAjNh0jAQiwkilThXIAAAAQlThWkwCnQkxCnhbFDQgdBogCBjIAAAAQACBkAdBoQAQA5AXA0QAJAjAMAgQgshQgaheg");
	this.shape_7.setTransform(-0.0121,-0.7196);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.094)").s().p("AoBNJQlwjKhumHQgkh+gCh6IAAAAQACh5Akh+QBumHFwjKQFxjLGaBpQGaBpDWFfIAAAAQCNDpgBD5IAAAAQABD6iNDpIAAAAQjWFfmaBpQiMAkiGAAQkGAAjziGgAn7tAQltDJhtGDQgjB8gCB4IAAAAQACB5AjB8QBtGDFtDJQFtDIGVhoIAAAAQGWhoDUlaIAAgBQCLjmgBj4IAAAAQABj3iLjmIAAgBQjUlamWhoIAAAAQiKgkiFAAQkDAAjwCEgALmknQA2B0AKB4QgPh9gxhvgAsKjAIABgEIgDALIACgHgAJAoIIgJgIQiSiOjXg3Qk9hSkeCdQhWAvhDA8QglAcgkAfQBahmCDhIQEhifFCBSIAAAAQD/BBCfC7Igvglg");
	this.shape_8.setTransform(-0.0122,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.196)").s().p("An7NBQltjJhtmDQgjh8gCh5IAAAAQACh4Ajh8QBtmDFtjJQFtjIGVBoIAAAAQGWBoDUFaIAAABQCLDmgBD3IAAAAQABD4iLDmIAAABQjUFamWBoIAAAAQiKAkiFAAQkDAAjwiEgAn2s3QlpDHhsF/QgjB7gCB2IAAAAQACB3AjB7QBsF/FpDHQFpDGGShmQGShnDRlYQCKjkgBj1IAAAAQABj0iKjkQjRlYmShnQiKgiiDAAQkAgBjuCDgAMuBAQAAg/gIg8QgKh4g2h0Qgnhag8hQIASANQAZAiAWAkQBwC4gBDGIAAAAQAAAugGAuIABgcgAsyAAIAAAAQABhfAchkQBYk3ElihQEmihFGBTIgBAAQEcBJClDbIgTgPIAAAAIgSgPQifi7j/hBIAAAAQlChSkhCfQiDBIhaBmIAAABIgHAGIgJAIQgaAjgWAkIgPAYIhLCyIgBAEIgCAHIgVBmQgLBIAABLIAAASQgGgpAAgpg");
	this.shape_9.setTransform(-0.0123,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hazyring3, new cjs.Rectangle(-103,-97.5,206,195), null);


(lib.hazyring2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.396)").s().p("AtdHrIAWARQDFEzFrBlIAWAQQmOhljOlUgAHsM9QFijCBql3QBpl2jMlQQjMlQmKhlQmJhlliDDQlhDChqF3QhpF2DMFQIAJAPIgSgKQjPlUBrl6QBrl7FljEQFmjEGNBlQGOBmDPFUQDNFUhqF5QhrF7llDFQgtAYg3ANQAwgUAugagALTGVQAxhVAchjQBYk5irkbQiskblLhUQlKhVkpCkQkpCjhZE7QhMENB0D2QAjBcA8BSQgggpgdgvQitkeBZk+QBak/EtilQEtilFOBVQFPBWCuEeQCtEehZE+Qg4DGiKCLQBAhKArhSg");
	this.shape.setTransform(-0.0166,-1.2104);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.796)").s().p("As5HXQjFlGBmlqQBmlrFWi8QFXi8F8BhQF9BiDGFFQDFFGhmFpQhmFrlWC8QhOArhuAGQgjACgngCQgygCg5gJQCogUCfhXQE4irBdlLQBdlKi0kpQi0kplchZQlbhYk4CrQk4CshdFLQhdFKC0EpQAqBFAyA5IgwgZIgwgiIARAIIAqAWQgigrgegxQi3ktBflOQBelPE8iuQE8itFfBaQFgBaC2EsQC2EtheFNQheFPk8CuQiBBHiIAbQAmADAiAAQAqAAAlgFQBTgKA+giQFTi6BllnQBllljDlDQjElCl5hgQl4hglTC5QlSC6hlFnQhlFnDDFCIATAJIAEAHIgXgQIAJAOIgSgJIAXAQQC8ElFaBhIAWAQQl9hhjGlFg");
	this.shape_1.setTransform(-0.0242,-1.1456);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkKNiQlVhfi6khIgEgHIgKgPIA0AlIAvAjIADACIAZAeQB8CQCyBNIAlAPIBlBJIgagHgADzNBQBngcBjg3QFAiwBglSQBflSi4kwQi5kwlkhbQlkhbk/CwQlACvhfFTQhgFSC5EwQATAgAVAdIgUgKIgmgVIgTgKQjBk+BkliQBkljFPi4QFOi4F1BfQF0BgDCE+QDBE/hkFhQhkFjlPC4QgrAXg1ANQgqAJgvACIgkABIgCAAg");
	this.shape_2.setTransform(-0.0283,-1.101);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.898)").s().p("AkMNtQlahhi8klIgFgHIgJgOIAXAQQC6EhFVBgIAXAQIgZgGgAD3NLQgiAAgmgDQCIgbCBhHQE8iuBelPQBelNi2ktQi2kslghaQlfhak8CtQk8CuheFPQhfFOC3EtQAeAxAiArIgqgWIgRgIIgzglIASAJIAnAVIAUAKQgVgdgTgfQi5kxBflSQBglTFAivQE/iwFkBbQFkBbC4EwQC5EwhfFSQhgFTlACvQhjA3hnAdIAmgBQAvgDAqgJQA1gMArgYQFPi4BkljQBklhjBk/QjCk+l1hfQl0hglOC4QlPC4hkFjQhkFiDBE/IAKAOIgTgJQjDlDBllmQBllnFSi6QFTi6F4BhQF5BgDEFCQDDFChlFmQhlFnlTC6Qg+AihTAKQglAFgpAAIgBAAgAqoI0IAqAfQAcAdAeAZIBZBBQAiAVAkATIArAfQiyhNh8iQg");
	this.shape_3.setTransform(-0.0242,-1.1274);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.698)").s().p("Aj5N2QmBhijIlJQjIlJBoluQBnlvFai+QFai+GBBiQGBBjDIFJQDIFJhoFtQhnFvlaC+QjkB+j1AAQh+AAiEgigAj2NsIgWgQIAZAHIgXgRIAaAHIhlhJIglgPIgrggQgkgSgigVIhZhBQgegagcgcIgqgfIgZgeIgDgCIAxAZQgzg6gqhFQi0kpBdlKQBdlLE4irQE4isFbBZQFcBZC1EpQCzEphdFJQhdFLk4CrQifBYinAUQA4AIAyADQAnACAjgCQBugHBOgqQFWi8BmlrQBmlqjFlFQjGlGl9hhQl8hilXC8QlWC8hmFrQhmFqDFFGQDGFGF9BggAmsrDQk1CqhcFHQhcFGCyElQB8DNDNBoQBgA6BsAcQBjAZBuAAQDnAAC5hxIAPgIQE0iqBclHQBclFiyklQiykmlXhYQh1gehwAAQjbAAjLBwgAs5HGIATAKIAEAGg");
	this.shape_4.setTransform(-0.0287,0.5208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.294)").s().p("AkEOdIAAAAQmShmjQlYQjRlYBsl+QBsl/FpjGQFpjGGSBmQGSBnDRFYQDQFXhsF+QhsF/lpDGQjuCDkAAAQiDAAiKgjgAj+OJQFVBYE3iHQA3gNAtgZQFljEBrl7QBql5jNlUQjPlUmOhmQmNhmlmDFQllDEhrF7QhrF6DPFUQDOFUGOBlIgWgQIAZAGgAtdHaIASAKIAEAGgAMYC+QBSkvimkSQiqkXlHhUIABAAQlGhTkmChQklChhYE3Qg1C+AqCxQAOBMAbBGQh0j3BMkNQBZk7EpijQEpijFKBUQFLBVCsEbQCrEahYE6QgcBjgxBUQAwhdAVhog");
	this.shape_5.setTransform(-0.0168,0.5168);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.196)").s().p("AkGOnIAAgBIgZgGQl4hojLk/IgEgGIgJgPQjTlbBtmCQBtmDFtjJQFtjIGWBoIAAAAQGWBoDTFaIAAABQDSFbhtGBQhtGDltDJQgvAagwAVQjEBVjQAAQiFAAiKgjgAH3M9QFpjGBsl/QBsl+jQlXQjRlYmShnQmShmlpDGQlpDGhsF/QhsF+DRFYQDQFYGTBmIAAAAQGRBmFpjGgAMqARIgBgkIgDgrQgNilheibQiokUlChSIAAAAQlChTkhCgQkiCfhWEzQgPA0gHA0IgFAAQgHA2AAA4QAABOANBIQgrixA2i+QBXk3ElihQEmihFGBTIgBAAQFHBUCqEXQCmEShREvQARhTAAhag");
	this.shape_6.setTransform(-0.0252,0.5223);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.094)").s().p("At5H7IAXAQQDLE/F3BnIAXARQmbhojVlfgAH8NXQFtjIBtmDQBtmBjSlcIAAAAQjTlamXhoIAAgBQmVhnltDIQltDJhtGDQhtGCDSFbIAJAPIgSgKQjUlfBumGQBumHFwjLQFxjKGaBpQGaBpDWFeIAAAAQDUFghuGFQhuGHlxDKQgtAZg3ANQAwgUAvgbgAMjhLIgLAAQgTiShTiLIgBAAQilkPk+hSQk9hRkeCdQkeCdhVEvQgPA0gHAyIgKAAQAHg0APg1QBWkzEiifQEhifFCBTIAAgBQFCBTCoETQBeCcANClIgDgfg");
	this.shape_7.setTransform(-0.0172,-1.2735);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.596)").s().p("Aj7OAIAAAAQmGhjjKlNQjKlNBplyQBolzFejAQFejAGEBjIABAAQGFBkDKFNQDKFNhpFxQhoFzleDAQjmB/j4AAQh/AAiFgigAnhsZQlaC+hnFvQhoFuDIFJQDIFJGBBiQGBBiFai+QFai+BnlvQBnltjHlJQjIlJmBhjQiEgih+AAQj1AAjkB+gArnGZQiyklBclGQBclHE0iqQE1ipFXBXQFXBYCyEmQCyElhcFFQhcFHk1CqIgOAIQA4giAzgsQDeihBMkMQBblBiwkiQiwkilThXIAAAAQlThXkwCoQkxCnhbFDQhbFCCwEiQBVCMB7BdQA2AuA6AjQjNhoh8jNg");
	this.shape_8.setTransform(-0.0164,0.5169);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.498)").s().p("Aj+OJIgZgGQlrhljEk0IgFgGIgJgPQjMlQBpl2QBql3FijDQFhjCGJBlQGKBkDNFRQDLFQhpF1QhqF3lhDDQgvAZgvAVQi+BSjIAAQiBAAiGgjgAHnMjQFejABplzQBolxjJlNQjLlNmFhkIAAAAQmFhjleDAQleDAhoFzQhpFyDKFNQDKFNGGBjIAAAAQGFBjFdjAgAI8JPQAXgXAVgYQCKiLA4jHQBZk9itkeQiukelPhWQlOhWktCmQktClhZE/QhaE+CtEeQAdAvAgApQAoA2AxAyQAYAYAaAWQh8hdhViMQiwkiBblCQBblDExinQEwioFTBXIAAAAQFTBXCwEiQCwEihbFBQhLEMjfChQAagXAYgYg");
	this.shape_9.setTransform(-0.0291,0.5131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hazyring2, new cjs.Rectangle(-103,-97.5,206,195), null);


(lib.haze = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.075)").s().p("AjTDxQgNgDgJgJQgIgJABgKQAklDGHh/QALgEANAEQAOADAJAJQAIAJgBAKQgBAJgKAFQkxCZhgEPQgEAJgLAEQgFABgGAAQgHAAgHgCgAC+jtQmFB/gkFBQgBAIAHAIQAIAIALADQAMADAJgDQAKgDACgHQBhkREyiZQAJgEABgIQABgJgHgHQgIgIgLgDIgLgCQgFAAgFACg");
	this.shape.setTransform(-0.0247,-0.0065);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.016)").s().p("AjVD8QgTgGgMgNQgMgMABgOQAklIGNiCQAQgFAUAFQATAGAMANQAMAMgBAOQgCAOgOAHQkuCWhfENQgFANgQAFQgIACgJAAQgJAAgJgCgAC1j3QmLCBgkFGQgBAMALAMQAKALASAFQARAFAPgFQAOgEAEgMQBgkNEviXQAMgHACgMQABgMgLgMQgLgLgRgFQgJgCgIAAQgIAAgHACg");
	this.shape_1.setTransform(-0.0135,-0.0129);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.055)").s().p("AjUD1QgPgEgKgLQgJgKABgLQAklEGJiBQANgEAPAEQAQAEAJALQAKAKgBALQgBALgMAFQkwCYhgEPQgDAKgNAEQgHACgGAAQgIAAgIgCgAC7jwQmHB/gkFDQgBAKAIAJQAJAJANADQAOAEALgDQALgEADgJQBhkPExiZQAKgFABgJQABgKgJgJQgIgJgOgDQgGgCgGAAQgHAAgFACg");
	this.shape_2.setTransform(-0.0135,-0.0128);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.035)").s().p("AjUD4QgSgFgKgLQgLgMABgMQAklGGLiBQAPgFARAFQARAFALALQALAMgBAMQgBAMgNAHQkvCXhgENQgEAMgOAEQgHADgIAAQgIAAgJgDgAC4j0QmJCAgkFFQgBALAJAKQAKAKAPAFQAQAEANgEQANgEADgKQBhkPEviYQAMgFABgLQABgLgKgKQgJgLgQgEQgIgCgHAAQgHAAgGACg");
	this.shape_3.setTransform(-0.0247,-0.0067);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.192)").s().p("AjODdIgDgCIgBgCQAjk5F7h8IADAAIADACIABACIgBACQk4CchiEVIgDACIgBAAIgCAAg");
	this.shape_4.setTransform(-0.024,-0.0126);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.173)").s().p("AjPDgQgEgBgCgCQgCgDAAgCQAjk7F9h8QADgCAEABQAEABACADQACADAAACQAAADgDACQk2CbhjEUQgBADgDABIgDAAIgEgBgADMjcQl8B8giE5IABACIADACIADAAIADgCQBikVE4icIABgCIgBgCIgDgCIgCAAIgBAAg");
	this.shape_5.setTransform(-0.0124,-0.0126);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.153)").s().p("AjPDkQgGgCgEgDQgEgEABgEQAjk9F/h9QAFgCAGACQAFACAEAEQAEADgBAEIgFAHQk1CbhiETQgBADgFACIgFABIgFgBgADJjfQl9B8gjE7QAAACACADQACACAEABQAEABADAAQAEgBAAgDQBjkUE2ibQADgCAAgDQABgCgDgDQgCgDgEgBIgDAAIgEABg");
	this.shape_6.setTransform(-0.0249,-0.0061);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.133)").s().p("AjQDnQgIgCgFgFQgFgFABgGQAjk+GBh9QAHgCAHACQAIACAFAFQAFAFgBAFQAAAGgGADQk0CahiESQgCAFgGACIgHABIgHgBgADGjjQl/B9gjE9QgBAEAEAEQAEAEAFABQAGACAFgCQAFgCABgDQBikTE0ibIAGgHQABgEgEgDQgEgEgFgCIgGgBIgFABg");
	this.shape_7.setTransform(-0.0124,-0.0128);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.114)").s().p("AjRDrQgKgDgGgGQgGgHABgHQAjk/GDh/QAIgCAKACQAKADAGAGQAGAHgBAHQgBAGgHAEQkzCZhhESQgCAGgJADIgHABIgKgBgADDjmQmBB9gjE+QgBAGAFAFQAFAFAIACQAHACAHgCQAGgCACgFQBikSE0iaQAGgDAAgGQABgFgFgFQgFgFgIgCIgHgBIgHABg");
	this.shape_8.setTransform(-0.0248,-0.0062);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.094)").s().p("AjSDuQgLgDgIgIQgHgHABgJQAklBGFh/QAJgDAMADQALADAIAIQAHAIgBAIQgBAIgJAEQkyCZhhERQgCAHgKADIgJACQgGAAgGgCgADAjqQmDB/gjE/QgBAHAGAHQAGAGAKADQAJACAIgCQAJgDACgGQBhkSEziZQAHgEABgGQABgHgGgHQgGgGgKgDIgJgBIgJABg");
	this.shape_9.setTransform(-0.0235,-0.0189);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.haze, new cjs.Rectangle(-25.6,-25.4,51.2,50.8), null);


(lib.angryEyesR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACkAAQAABBgxAtQglAjgxAIQgOACgPAAQhDAAgwgtQgBgBgBgBQgugtAAg/QAAgyAfgnQAHgJAIgJQABgBABgBQAmgkA0gHQAMgCANAAQAPAAAOACQAxAIAlAjQAxAuAAA/gAAqgFQAAATgPAOQgPAOgTAAQgVAAgPgOQgPgOAAgTQAAgTAPgOQAPgOAVAAQATAAAPAOQAPAOAAATg");
	this.shape.setTransform(-4.175,7.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(10,1,1).p("Ai9BwIBrg/IEQig");
	this.shape_1.setTransform(1.525,-12.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAiQgPgOAAgUQAAgTAPgOQAOgOAUABQAVgBAOAOQAPAOAAATQAAAUgPAOQgOANgVAAQgUAAgOgNg");
	this.shape_2.setTransform(-5.025,7.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhzBuIgCgCQgugtAAg/QAAgyAfgnIBrg/QAMgCANAAQAPAAAOACQAxAIAlAjQAxAuAAA/QAABBgxAtQglAjgxAIQgOACgPAAQhDAAgwgtgAgrgmQgPAOAAATQAAATAPAOQAPAOAVAAQATAAAPgOQAPgOAAgTQAAgTgPgOQgPgOgTAAQgVAAgPAOgAh1hrIACgCQAmgkA0gHIhrA/IAPgSgAgZiYg");
	this.shape_3.setTransform(-4.175,7.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.angryEyesR, new cjs.Rectangle(-22.5,-28.4,48.1,52.9), null);


(lib.arcadebuttonred = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// haze
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.173)").s().p("AANCTIgBgBIABgBIABAAIAAgCQgyiNAkiQIAAgCIAAgBIgCABIAAAAIgHARIAHgTIACAAIABABIAAADQgjCQAxCNIAAACIgBACIgBAAg");
	this.shape.setTransform(-36.5782,6.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.192)").s().p("AgTgRQAAg6AQg0IAGgRIAAAAIACgBIABABIAAACQgkCQAyCNIAAACIgBAAIgBABQglhLAAhYg");
	this.shape_1.setTransform(-37.1875,6.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.153)").s().p("AAMCVIgBgBIABAAIABgDIAAgCQgxiNAkiQIAAgDIgCgBIgCABIAAgDIADABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIAAAEQgjCQAxCLQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(-36.3952,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.133)").s().p("AAKCVIABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgyiLAkiQIAAgEQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgCgBIABgCIACABQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQABADgBACQgjCQAxCLQABADgBACQgBACgDACIgBgCg");
	this.shape_3.setTransform(-36.2157,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.094)").s().p("AAICYIABAAQADgCABgCQACgDgCgEQgwiLAjiPQAAgDAAgDQgCgCgDgCIgCgBIABgBIABAAQAEABABAFQACADgBAEQgjCOAxCLQABAEgBADQgCAEgEABIAAABIgBgCg");
	this.shape_4.setTransform(-35.8704,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.114)").s().p("AAKCYIgBgBQADgBABgDQABgCgBgDQgxiLAkiQQAAgCAAgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCAAIAAgCIACAAQAEACAAACQACADgBAEQgjCOAxCLQABAEgBADQgCADgDABg");
	this.shape_5.setTransform(-36.041,6.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.055)").s().p("AAHCcQAEgCACgFQACgEgCgFQgwiKAjiNQABgFgCgEQgCgEgFgCIgBAAIAAgCIACAAQAFACACAFQACAFgBAFQgiCNAwCKQACAFgDAFQgCAFgFACIAAgBg");
	this.shape_6.setTransform(-35.5135,6.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.075)").s().p("AAICaIAAgBQAEgBABgEQACgDgCgEQgwiLAjiOQABgEgBgDQgCgFgEgBIgCAAIABgBIABAAQAFABABAFQADAEgBAFQgjCNAwCKQACAFgCAEQgCAFgEABIgBgBg");
	this.shape_7.setTransform(-35.7008,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.035)").s().p("AAFCdQAFgCACgFQADgFgCgFQgwiKAjiNQAAgFgBgFQgDgFgFgCIgCAAIABgCIACABQAFACADAFQACAGgBAGQgjCMAwCJQADAGgDAGQgCAFgGADIgBgCg");
	this.shape_8.setTransform(-35.3332,6.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.016)").s().p("AAFCfQAFgDADgFQACgGgCgGQgwiJAjiMQABgGgCgGQgDgFgGgCIgBgBIAAgBIACAAQAGACADAGQADAGgCAHQgiCMAwCIQACAHgDAGQgCAGgHADIAAgBg");
	this.shape_9.setTransform(-35.1763,6.875);

	this.instance = new lib.haze();
	this.instance.setTransform(-15.8,31.55,0.4133,0.5505,0,-95.59,-100.0587);

	this.instance_1 = new lib.haze();
	this.instance_1.setTransform(21.4,11.3,0.3489,0.3489,178.7872);
	this.instance_1.alpha = 0.75;

	this.instance_2 = new lib.haze();
	this.instance_2.setTransform(26.55,24.9,0.35,0.35,180);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:11.3}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:15.5}},{t:this.instance},{t:this.shape_8},{t:this.shape_9},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// shine
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEyQgkgXgLgXQgEgKB4AwQhYgYBnBGQgwgPgkgXgAlRDPQgWgbgGgWIgCgKQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABABQAMADBTBHQhLgzBLBjQgogdgbghgAFMgLQgNA7goA/QAhhWADhKQAGiWh0hnQCLBzgGCGIAAAAQBAA8hHCUQAoiqgnAEgAAvkeIgLgHQgdgWgmgFQgogGhJAeQAAgGAJgIQAJgIAdgMQAcgMAGABQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAGgFAEIgGABQgLAAgRgLg");
	this.shape_10.setTransform(3.565,5.9499);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBkIgCAEIgCABQCWAeCcgLQBLgGBMgOIAFgCIAAgCQABhkgogdQAtAOAJB3IAAABIABABQgLC0iYAfQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgdQgugSApAZQgrAZhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_11.setTransform(0.9125,-1.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.251)").s().p("AgchGQAGBGA1BHQhHguAMhfg");
	this.shape_12.setTransform(-24.1831,6.6125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.353)").s().p("AgOBhQgWhLAWhKQANgpAbgqQg/CHAlCIQgIgUgGgTg");
	this.shape_13.setTransform(-31.5986,-1.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.6)").s().p("Ah/gTQBgAsBsgcQAZgHAagLQgaAQgZAJQgsASgoAAQg/AAg5gpg");
	this.shape_14.setTransform(0.5625,21.2423);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.502)").s().p("AhzAlIgCAAQAMgCgfgOQgegOAvABIBZADIASAAIAFAGQAHAIALAAIAGgBQAIgBAGgGQAGgGABgHIAWgFQAagGAYgJQAYgKAOgQIABAAQAAANgHAJIgLANIgKAHIgQALQgIAGgsAOQgSAFgSADIgdADIgdABQgmAAgkgGgAA1AfgAA1AfIAxgPIgRAGIggAJIAAAAg");
	this.shape_15.setTransform(6.5719,37.484);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEeQgkgYgLgXQgEgKB4AxQhYgZBnBGQgwgOgkgXgAlRC6QgWgbgGgWIgCgKQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAMADBTBHQhLgzBLBjQgogcgbgigAFMgfQgNA6goA/QAhhWADhKQAGiWh0hmQCLBzgGCFIAAAAQBAA+hHCSQAoipgnAEgAAvkJIgLgHQgdgVgmgGQgogFhJAdQAAgFAJgJQAJgIAdgMQAcgLAGAAQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAHgFADIgGABQgLAAgRgLg");
	this.shape_16.setTransform(3.565,8.0125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBjIgCAFIgCABQCWAeCcgLQBLgGBMgOIAFgBIAAgEQABhjgogdQAtAOAJB3IAAABIABABQgICsibAnQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgcQgugTApAaQgrAYhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_17.setTransform(0.9125,3.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:21.2423}},{t:this.shape_13},{t:this.shape_12,p:{y:6.6125}},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:25.4423}},{t:this.shape_12,p:{y:10.8125}},{t:this.shape_13},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[]},1).wait(1));

	// hazy ring
	this.instance_3 = new lib.hazyring3();
	this.instance_3.setTransform(1,1.3,0.35,0.35,180);
	this.instance_3.alpha = 0.5898;

	this.instance_4 = new lib.hazyring2();
	this.instance_4.setTransform(1,1.3,0.35,0.35,180);
	this.instance_4.alpha = 0.5898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).to({state:[]},1).wait(1));

	// ring
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.251)").s().p("AAAELQiGAAhfhaQhfhZAAh+QAAh/BghaIAAAAIABgBIAAgBIADgCIADgBIACABIABACIgBADIgDADIAAAAIgCABIAAAAQhdBYAAB8QAAB7BdBXQBdBYCDAAQAlAAAigHQBXgSBDg/QBdhXAAh7QAAh0hRhUIgMgMIgLgKIgCgCIABgDIADgBIACABIAMAKIAAAAIAMAMQBTBWAAB3QAAB+hfBZQhFBBhYASQgjAHgmAAIAAAAg");
	this.shape_18.setTransform(1.0625,4.549);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).to({_off:true},3).wait(1));

	// gradients
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(204,204,204,0.502)","rgba(102,102,102,0.502)"],[0.671,1],-19.8,20.7,0,-19.8,20.7,34.7).s().p("AADACIgWgRIgGgFIAFADIAgAXIAHAGIAHAJIgXgTg");
	this.shape_19.setTransform(20.7875,-22.9875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)"],[0.671,1],0,-0.8,0,0,-0.8,34.7).s().p("AAAEmQh1AAhThYQhUhZAAh8QAAhrA9hQIADgDIADgCQARgQATgNQBMhBBpAAQAnAAAiAJQA3ANAtAkQgugcg2gLQgigHgmAAQhmAAhQA1IgKAJQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhSgwhAQgOgRgQgQIgBgBIAhAaQA8BQAABqQAAB8hUBZQg4A8hIATQgiAJgmAAIgBAAg");
	this.shape_20.setTransform(0.9125,-1.4499);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgABGDbQBIgTA4g8QBThZAAh8QAAhqg7hQIALAKIgMgLIgHgIIgHgGIgggYIgFgDIgBAAQgtgkg2gNQgjgJglAAQhqAAhMBCQgTAMgSAQIAAAAIgCACIgEADQg8BQAABrQAAB8BTBZQBUBYB2AAQAlAAAjgJg");
	this.shape_21.setTransform(1.25,5.1499);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","#000000"],[0,1,1],0,26.6,0,-27.6).s().p("Ai/CuQhPhLAAhoQAAhqBPhKIAKgJQBQg2BmABQAmgBAiAHQA2ALAtAcIABABIAFAEIAYASIAWATIANAKIgMgJIghgaIABABQAQAPAOARQAwBAAABTQAABohPBLQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_22.setTransform(0.925,-4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1,1],0,27.1,0,-27.1).s().p("Ai/C0QhPhKAAhqQAAhoBPhLQBQhLBvAAQAnAAAiAJQBDARA0AxIABABQAQAQAOARQAwA/AABSQAABqhPBKQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_23.setTransform(0.925,-1.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0.671,1,1],0,0,0,0,0,34.7).s().p("AjIDKQhUhUAAh2QAAh1BUhTQBThUB1AAQAnAAAiAJQBIASA4A5QBUBTAAB1QAAB2hUBUQg4A4hIASQgiAJgnAAQh1AAhThTgAi/jBQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhTgwg/QgOgRgQgQIgBgBQg0gxhDgRQgigJgnAAQhvAAhQBLg");
	this.shape_24.setTransform(0.9125,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgAgClLQh2AAhUBTQhTBTAAB2QAAB1BTBUQBUBTB2AAQAlAAAjgJQBIgSA4g4QBThUAAh1QAAh2hThTQg4g4hIgTQgigIgmAAIAAAAg");
	this.shape_25.setTransform(1.25,5.1499);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_26.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_26}]},1).wait(1));

	// color
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D40000").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_27.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).to({_off:true},3).wait(1));

	// shadow
	this.instance_5 = new lib.shadow();
	this.instance_5.setTransform(3,8,0.35,0.35,180);
	this.instance_5.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-32.8,86.2,81.69999999999999);


(lib.arcadebuttongreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// haze
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.173)").s().p("AANCTIgBgBIABgBIABAAIAAgCQgyiNAkiQIAAgCIAAgBIgCABIAAAAIgHARIAHgTIACAAIABABIAAADQgjCQAxCNIAAACIgBACIgBAAg");
	this.shape.setTransform(-36.5782,6.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.192)").s().p("AgTgRQAAg6AQg0IAGgRIAAAAIACgBIABABIAAACQgkCQAyCNIAAACIgBAAIgBABQglhLAAhYg");
	this.shape_1.setTransform(-37.1875,6.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.153)").s().p("AAMCVIgBgBIABAAIABgDIAAgCQgxiNAkiQIAAgDIgCgBIgCABIAAgDIADABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIAAAEQgjCQAxCLQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(-36.3952,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.133)").s().p("AAKCVIABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgyiLAkiQIAAgEQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgCgBIABgCIACABQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQABADgBACQgjCQAxCLQABADgBACQgBACgDACIgBgCg");
	this.shape_3.setTransform(-36.2157,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.114)").s().p("AAKCYIgBgBQADgBABgDQABgCgBgDQgxiLAkiQQAAgCAAgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCAAIAAgCIACAAQAEACAAACQACADgBAEQgjCOAxCLQABAEgBADQgCADgDABg");
	this.shape_4.setTransform(-36.041,6.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.094)").s().p("AAICYIABAAQADgCABgCQACgDgCgEQgwiLAjiPQAAgDAAgDQgCgCgDgCIgCgBIABgBIABAAQAEABABAFQACADgBAEQgjCOAxCLQABAEgBADQgCAEgEABIAAABIgBgCg");
	this.shape_5.setTransform(-35.8704,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.075)").s().p("AAICaIAAgBQAEgBABgEQACgDgCgEQgwiLAjiOQABgEgBgDQgCgFgEgBIgCAAIABgBIABAAQAFABABAFQADAEgBAFQgjCNAwCKQACAFgCAEQgCAFgEABIgBgBg");
	this.shape_6.setTransform(-35.7008,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.055)").s().p("AAHCcQAEgCACgFQACgEgCgFQgwiKAjiNQABgFgCgEQgCgEgFgCIgBAAIAAgCIACAAQAFACACAFQACAFgBAFQgiCNAwCKQACAFgDAFQgCAFgFACIAAgBg");
	this.shape_7.setTransform(-35.5135,6.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.035)").s().p("AAFCdQAFgCACgFQADgFgCgFQgwiKAjiNQAAgFgBgFQgDgFgFgCIgCAAIABgCIACABQAFACADAFQACAGgBAGQgjCMAwCJQADAGgDAGQgCAFgGADIgBgCg");
	this.shape_8.setTransform(-35.3332,6.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.016)").s().p("AAFCfQAFgDADgFQACgGgCgGQgwiJAjiMQABgGgCgGQgDgFgGgCIgBgBIAAgBIACAAQAGACADAGQADAGgCAHQgiCMAwCIQACAHgDAGQgCAGgHADIAAgBg");
	this.shape_9.setTransform(-35.1763,6.875);

	this.instance = new lib.haze();
	this.instance.setTransform(-15.8,31.55,0.4133,0.5505,0,-95.59,-100.0587);

	this.instance_1 = new lib.haze();
	this.instance_1.setTransform(21.4,11.3,0.3489,0.3489,178.7872);
	this.instance_1.alpha = 0.75;

	this.instance_2 = new lib.haze();
	this.instance_2.setTransform(26.55,24.9,0.35,0.35,180);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:11.3}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:15.5}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// shine
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEyQgkgXgLgXQgEgKB4AwQhYgYBnBGQgwgPgkgXgAlRDPQgWgbgGgWIgCgKQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABABQAMADBTBHQhLgzBLBjQgogdgbghgAFMgLQgNA7goA/QAhhWADhKQAGiWh0hnQCLBzgGCGIAAAAQBAA8hHCUQAoiqgnAEgAAvkeIgLgHQgdgWgmgFQgogGhJAeQAAgGAJgIQAJgIAdgMQAcgMAGABQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAGgFAEIgGABQgLAAgRgLg");
	this.shape_10.setTransform(3.565,5.9499);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBkIgCAEIgCABQCWAeCcgLQBLgGBMgOIAFgCIAAgCQABhkgogdQAtAOAJB3IAAABIABABQgLC0iYAfQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgdQgugSApAZQgrAZhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_11.setTransform(0.9125,-1.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.251)").s().p("AgchGQAGBGA1BHQhHguAMhfg");
	this.shape_12.setTransform(-24.1831,6.6125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.353)").s().p("AgOBhQgWhLAWhKQANgpAbgqQg/CHAlCIQgIgUgGgTg");
	this.shape_13.setTransform(-31.5986,-1.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.6)").s().p("Ah/gTQBgAsBsgcQAZgHAagLQgaAQgZAJQgsASgoAAQg/AAg5gpg");
	this.shape_14.setTransform(0.5625,21.2423);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.502)").s().p("AhzAlIgCAAQAMgCgfgOQgegOAvABIBZADIASAAIAFAGQAHAIALAAIAGgBQAIgBAGgGQAGgGABgHIAWgFQAagGAYgJQAYgKAOgQIABAAQAAANgHAJIgLANIgKAHIgQALQgIAGgsAOQgSAFgSADIgdADIgdABQgmAAgkgGgAA1AfgAA1AfIAxgPIgRAGIggAJIAAAAg");
	this.shape_15.setTransform(6.5719,37.484);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEeQgkgYgLgXQgEgKB4AxQhYgZBnBGQgwgOgkgXgAlRC6QgWgbgGgWIgCgKQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAMADBTBHQhLgzBLBjQgogcgbgigAFMgfQgNA6goA/QAhhWADhKQAGiWh0hmQCLBzgGCFIAAAAQBAA+hHCSQAoipgnAEgAAvkJIgLgHQgdgVgmgGQgogFhJAdQAAgFAJgJQAJgIAdgMQAcgLAGAAQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAHgFADIgGABQgLAAgRgLg");
	this.shape_16.setTransform(3.565,8.0125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBjIgCAFIgCABQCWAeCcgLQBLgGBMgOIAFgBIAAgEQABhjgogdQAtAOAJB3IAAABIABABQgICsibAnQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgcQgugTApAaQgrAYhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_17.setTransform(0.9125,3.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:21.2423}},{t:this.shape_13},{t:this.shape_12,p:{y:6.6125}},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:25.4423}},{t:this.shape_12,p:{y:10.8125}},{t:this.shape_13},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[]},1).wait(1));

	// hazy ring
	this.instance_3 = new lib.hazyring3();
	this.instance_3.setTransform(1,1.3,0.35,0.35,180);
	this.instance_3.alpha = 0.5898;

	this.instance_4 = new lib.hazyring2();
	this.instance_4.setTransform(1,1.3,0.35,0.35,180);
	this.instance_4.alpha = 0.5898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).to({state:[]},1).wait(1));

	// ring
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.251)").s().p("AAAELQiGAAhfhaQhfhZAAh+QAAh/BghaIAAAAIABgBIAAgBIADgCIADgBIACABIABACIgBADIgDADIAAAAIgCABIAAAAQhdBYAAB8QAAB7BdBXQBdBYCDAAQAlAAAigHQBXgSBDg/QBdhXAAh7QAAh0hRhUIgMgMIgLgKIgCgCIABgDIADgBIACABIAMAKIAAAAIAMAMQBTBWAAB3QAAB+hfBZQhFBBhYASQgjAHgmAAIAAAAg");
	this.shape_18.setTransform(1.0625,4.549);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).to({_off:true},3).wait(1));

	// gradients
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(204,204,204,0.502)","rgba(102,102,102,0.502)"],[0.671,1],-19.8,20.7,0,-19.8,20.7,34.7).s().p("AADACIgWgRIgGgFIAFADIAgAXIAHAGIAHAJIgXgTg");
	this.shape_19.setTransform(20.7875,-22.9875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)"],[0.671,1],0,-0.8,0,0,-0.8,34.7).s().p("AAAEmQh1AAhThYQhUhZAAh8QAAhrA9hQIADgDIADgCQARgQATgNQBMhBBpAAQAnAAAiAJQA3ANAtAkQgugcg2gLQgigHgmAAQhmAAhQA1IgKAJQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhSgwhAQgOgRgQgQIgBgBIAhAaQA8BQAABqQAAB8hUBZQg4A8hIATQgiAJgmAAIgBAAg");
	this.shape_20.setTransform(0.9125,-1.4499);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgABGDbQBIgTA4g8QBThZAAh8QAAhqg7hQIALAKIgMgLIgHgIIgHgGIgggYIgFgDIgBAAQgtgkg2gNQgjgJglAAQhqAAhMBCQgTAMgSAQIAAAAIgCACIgEADQg8BQAABrQAAB8BTBZQBUBYB2AAQAlAAAjgJg");
	this.shape_21.setTransform(1.25,5.1499);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","#000000"],[0,1,1],0,26.6,0,-27.6).s().p("Ai/CuQhPhLAAhoQAAhqBPhKIAKgJQBQg2BmABQAmgBAiAHQA2ALAtAcIABABIAFAEIAYASIAWATIANAKIgMgJIghgaIABABQAQAPAOARQAwBAAABTQAABohPBLQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_22.setTransform(0.925,-4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1,1],0,27.1,0,-27.1).s().p("Ai/C0QhPhKAAhqQAAhoBPhLQBQhLBvAAQAnAAAiAJQBDARA0AxIABABQAQAQAOARQAwA/AABSQAABqhPBKQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_23.setTransform(0.925,-1.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0.671,1,1],0,0,0,0,0,34.7).s().p("AjIDKQhUhUAAh2QAAh1BUhTQBThUB1AAQAnAAAiAJQBIASA4A5QBUBTAAB1QAAB2hUBUQg4A4hIASQgiAJgnAAQh1AAhThTgAi/jBQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhTgwg/QgOgRgQgQIgBgBQg0gxhDgRQgigJgnAAQhvAAhQBLg");
	this.shape_24.setTransform(0.9125,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgAgClLQh2AAhUBTQhTBTAAB2QAAB1BTBUQBUBTB2AAQAlAAAjgJQBIgSA4g4QBThUAAh1QAAh2hThTQg4g4hIgTQgigIgmAAIAAAAg");
	this.shape_25.setTransform(1.25,5.1499);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_26.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_26}]},1).wait(1));

	// color
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009900").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_27.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).to({_off:true},3).wait(1));

	// shadow
	this.instance_5 = new lib.shadow();
	this.instance_5.setTransform(3,8,0.35,0.35,180);
	this.instance_5.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-32.8,86.2,81.69999999999999);


(lib.arcadebuttonblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// haze
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.173)").s().p("AANCTIgBgBIABgBIABAAIAAgCQgyiNAkiQIAAgCIAAgBIgCABIAAAAIgHARIAHgTIACAAIABABIAAADQgjCQAxCNIAAACIgBACIgBAAg");
	this.shape.setTransform(-36.5782,6.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.192)").s().p("AgTgRQAAg6AQg0IAGgRIAAAAIACgBIABABIAAACQgkCQAyCNIAAACIgBAAIgBABQglhLAAhYg");
	this.shape_1.setTransform(-37.1875,6.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.153)").s().p("AAMCVIgBgBIABAAIABgDIAAgCQgxiNAkiQIAAgDIgCgBIgCABIAAgDIADABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIAAAEQgjCQAxCLQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(-36.3952,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.133)").s().p("AAKCVIABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgyiLAkiQIAAgEQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgCgBIABgCIACABQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQABADgBACQgjCQAxCLQABADgBACQgBACgDACIgBgCg");
	this.shape_3.setTransform(-36.2157,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.114)").s().p("AAKCYIgBgBQADgBABgDQABgCgBgDQgxiLAkiQQAAgCAAgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCAAIAAgCIACAAQAEACAAACQACADgBAEQgjCOAxCLQABAEgBADQgCADgDABg");
	this.shape_4.setTransform(-36.041,6.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.094)").s().p("AAICYIABAAQADgCABgCQACgDgCgEQgwiLAjiPQAAgDAAgDQgCgCgDgCIgCgBIABgBIABAAQAEABABAFQACADgBAEQgjCOAxCLQABAEgBADQgCAEgEABIAAABIgBgCg");
	this.shape_5.setTransform(-35.8704,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.055)").s().p("AAHCcQAEgCACgFQACgEgCgFQgwiKAjiNQABgFgCgEQgCgEgFgCIgBAAIAAgCIACAAQAFACACAFQACAFgBAFQgiCNAwCKQACAFgDAFQgCAFgFACIAAgBg");
	this.shape_6.setTransform(-35.5135,6.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.075)").s().p("AAICaIAAgBQAEgBABgEQACgDgCgEQgwiLAjiOQABgEgBgDQgCgFgEgBIgCAAIABgBIABAAQAFABABAFQADAEgBAFQgjCNAwCKQACAFgCAEQgCAFgEABIgBgBg");
	this.shape_7.setTransform(-35.7008,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.016)").s().p("AAFCfQAFgDADgFQACgGgCgGQgwiJAjiMQABgGgCgGQgDgFgGgCIgBgBIAAgBIACAAQAGACADAGQADAGgCAHQgiCMAwCIQACAHgDAGQgCAGgHADIAAgBg");
	this.shape_8.setTransform(-35.1763,6.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.035)").s().p("AAFCdQAFgCACgFQADgFgCgFQgwiKAjiNQAAgFgBgFQgDgFgFgCIgCAAIABgCIACABQAFACADAFQACAGgBAGQgjCMAwCJQADAGgDAGQgCAFgGADIgBgCg");
	this.shape_9.setTransform(-35.3332,6.875);

	this.instance = new lib.haze();
	this.instance.setTransform(-15.8,31.55,0.4133,0.5505,0,-95.59,-100.0587);

	this.instance_1 = new lib.haze();
	this.instance_1.setTransform(21.4,11.3,0.3489,0.3489,178.7872);
	this.instance_1.alpha = 0.75;

	this.instance_2 = new lib.haze();
	this.instance_2.setTransform(26.55,24.9,0.35,0.35,180);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:11.3}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:15.5}},{t:this.instance},{t:this.shape_8},{t:this.shape_9},{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// shine
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEyQgkgXgLgXQgEgKB4AwQhYgYBnBGQgwgPgkgXgAlRDPQgWgbgGgWIgCgKQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABABQAMADBTBHQhLgzBLBjQgogdgbghgAFMgLQgNA7goA/QAhhWADhKQAGiWh0hnQCLBzgGCGIAAAAQBAA8hHCUQAoiqgnAEgAAvkeIgLgHQgdgWgmgFQgogGhJAeQAAgGAJgIQAJgIAdgMQAcgMAGABQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAGgFAEIgGABQgLAAgRgLg");
	this.shape_10.setTransform(3.565,5.9499);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBkIgCAEIgCABQCWAeCcgLQBLgGBMgOIAFgCIAAgCQABhkgogdQAtAOAJB3IAAABIABABQgLC0iYAfQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgdQgugSApAZQgrAZhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_11.setTransform(0.9125,-1.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.251)").s().p("AgchGQAGBGA1BHQhHguAMhfg");
	this.shape_12.setTransform(-24.1831,6.6125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.353)").s().p("AgOBhQgWhLAWhKQANgpAbgqQg/CHAlCIQgIgUgGgTg");
	this.shape_13.setTransform(-31.5986,-1.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.6)").s().p("Ah/gTQBgAsBsgcQAZgHAagLQgaAQgZAJQgsASgoAAQg/AAg5gpg");
	this.shape_14.setTransform(0.5625,21.2423);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.502)").s().p("AhzAlIgCAAQAMgCgfgOQgegOAvABIBZADIASAAIAFAGQAHAIALAAIAGgBQAIgBAGgGQAGgGABgHIAWgFQAagGAYgJQAYgKAOgQIABAAQAAANgHAJIgLANIgKAHIgQALQgIAGgsAOQgSAFgSADIgdADIgdABQgmAAgkgGgAA1AfgAA1AfIAxgPIgRAGIggAJIAAAAg");
	this.shape_15.setTransform(6.5719,37.484);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEeQgkgYgLgXQgEgKB4AxQhYgZBnBGQgwgOgkgXgAlRC6QgWgbgGgWIgCgKQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAMADBTBHQhLgzBLBjQgogcgbgigAFMgfQgNA6goA/QAhhWADhKQAGiWh0hmQCLBzgGCFIAAAAQBAA+hHCSQAoipgnAEgAAvkJIgLgHQgdgVgmgGQgogFhJAdQAAgFAJgJQAJgIAdgMQAcgLAGAAQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAHgFADIgGABQgLAAgRgLg");
	this.shape_16.setTransform(3.565,8.0125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBjIgCAFIgCABQCWAeCcgLQBLgGBMgOIAFgBIAAgEQABhjgogdQAtAOAJB3IAAABIABABQgICsibAnQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgcQgugTApAaQgrAYhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_17.setTransform(0.9125,3.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:21.2423}},{t:this.shape_13},{t:this.shape_12,p:{y:6.6125}},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:25.4423}},{t:this.shape_12,p:{y:10.8125}},{t:this.shape_13},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[]},1).wait(1));

	// hazy ring
	this.instance_3 = new lib.hazyring3();
	this.instance_3.setTransform(1,1.3,0.35,0.35,180);
	this.instance_3.alpha = 0.5898;

	this.instance_4 = new lib.hazyring2();
	this.instance_4.setTransform(1,1.3,0.35,0.35,180);
	this.instance_4.alpha = 0.5898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).to({state:[]},1).wait(1));

	// ring
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.251)").s().p("AAAELQiGAAhfhaQhfhZAAh+QAAh/BghaIAAAAIABgBIAAgBIADgCIADgBIACABIABACIgBADIgDADIAAAAIgCABIAAAAQhdBYAAB8QAAB7BdBXQBdBYCDAAQAlAAAigHQBXgSBDg/QBdhXAAh7QAAh0hRhUIgMgMIgLgKIgCgCIABgDIADgBIACABIAMAKIAAAAIAMAMQBTBWAAB3QAAB+hfBZQhFBBhYASQgjAHgmAAIAAAAg");
	this.shape_18.setTransform(1.0625,4.549);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).to({_off:true},3).wait(1));

	// gradients
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(204,204,204,0.502)","rgba(102,102,102,0.502)"],[0.671,1],-19.8,20.7,0,-19.8,20.7,34.7).s().p("AADACIgWgRIgGgFIAFADIAgAXIAHAGIAHAJIgXgTg");
	this.shape_19.setTransform(20.7875,-22.9875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)"],[0.671,1],0,-0.8,0,0,-0.8,34.7).s().p("AAAEmQh1AAhThYQhUhZAAh8QAAhrA9hQIADgDIADgCQARgQATgNIgKAJQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhSgwhAQgOgRgQgQIgBgBIAhAaQA8BQAABqQAAB8hUBZQg4A8hIATQgiAJgmAAIgBAAgAAAklQAnAAAiAJQA3ANAtAkQgugcg2gLQgigHgmAAQhmAAhQA1QBMhBBpAAg");
	this.shape_20.setTransform(0.9125,-1.4499);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgABGDbQBIgTA4g8QBThZAAh8QAAhqg7hQIALAKIgMgLIgHgIIgHgGIgggYIgFgDIgBAAQgtgkg2gNQgjgJglAAQhqAAhMBCQgTAMgSAQIAAAAIgCACIgEADQg8BQAABrQAAB8BTBZQBUBYB2AAQAlAAAjgJg");
	this.shape_21.setTransform(1.25,5.1499);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","#000000"],[0,1,1],0,26.6,0,-27.6).s().p("Ai/CuQhPhLAAhoQAAhqBPhKIAKgJQBQg2BmABQAmgBAiAHQA2ALAtAcIABABIAFAEIAYASIAWATIANAKIgMgJIghgaIABABQAQAPAOARQAwBAAABTQAABohPBLQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_22.setTransform(0.925,-4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1,1],0,27.1,0,-27.1).s().p("Ai/C0QhPhKAAhqQAAhoBPhLQBQhLBvAAQAnAAAiAJQBDARA0AxIABABQAQAQAOARQAwA/AABSQAABqhPBKQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_23.setTransform(0.925,-1.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0.671,1,1],0,0,0,0,0,34.7).s().p("AjIDKQhUhUAAh2QAAh1BUhTQBThUB1AAQAnAAAiAJQBIASA4A5QBUBTAAB1QAAB2hUBUQg4A4hIASQgiAJgnAAQh1AAhThTgAi/jBQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhTgwg/QgOgRgQgQIgBgBQg0gxhDgRQgigJgnAAQhvAAhQBLg");
	this.shape_24.setTransform(0.9125,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgAgClLQh2AAhUBTQhTBTAAB2QAAB1BTBUQBUBTB2AAQAlAAAjgJQBIgSA4g4QBThUAAh1QAAh2hThTQg4g4hIgTQgigIgmAAIAAAAg");
	this.shape_25.setTransform(1.25,5.1499);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_26.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_26}]},1).wait(1));

	// color
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003399").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_27.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).to({_off:true},3).wait(1));

	// shadow
	this.instance_5 = new lib.shadow();
	this.instance_5.setTransform(3,8,0.35,0.35,180);
	this.instance_5.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-32.8,86.2,81.69999999999999);


// stage content:
(lib.MPHFinalYReyes = function(mode,startPosition,loop,reversed) {
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
		this.redbtn2.addEventListener("click",Clickredbtn2.bind(this));
		
		function Clickredbtn2() {
			this.eye1.x = 116;
			this.eye1.y = 273;
			this.eye2.x = 198;
			this.eye2.y = 273;
			this.mouth2.x = 144;
		    this.mouth2.y = 326;
			this.shoe1.x = 90;
			this.shoe1.y = 462;
			this.shoe2.x = 161;
		    this.shoe2.y = 462;
		}
		this.greenbtn2.addEventListener("click",Clickgreenbtn2.bind(this));
		
		function Clickgreenbtn2() {
			this.pineapple.x = 437;
			this.pineapple.y = 106;
		}
		this.bluebtn1.addEventListener("click",Clickbluebtn1.bind(this));
		
		function Clickbluebtn1() {
			this.pineapple.x = 151;
			this.pineapple.y = 309;
		}
		
		this.greenbtn.addEventListener("click",Clickgreenbtn.bind(this));
		
		function Clickgreenbtn() {
			this.hat1.x = 507;
			this.hat1.y = 284;
			this.mouth1.x = 648;
			this.mouth1.y = 151;
			this.angry_eye2.x = 606;
			this.angry_eye2.y = 64;
			this.angry_eye1.x = 693;
			this.angry_eye1.y = 64;
			this.shoe1.x = 748;
			this.shoe1.y = 257;
			this.shoe2.x = 869;
			this.shoe2.y = 257;
			this.Rhand.x = 565;
		    this.Rhand.y = 442;
		    this.Lhand.x = 825;
		    this.Lhand.y = 442;
		    this.fmask.x = 802;
		    this.fmask.y = 543;
		    this.nose2.x = 813;
		    this.nose2.y = 348;
		    this.nose1.x = 667;
		    this.nose1.y = 365;
			this.eye1.x = 806;
			this.eye1.y = 72;
			this.eye2.x = 875;
			this.eye2.y = 72;
			this.mouth2.x = 825;
		    this.mouth2.y = 152;
		}
		
		this.redbtn.addEventListener("click",Clickredbtn.bind(this));
		
		function Clickredbtn() {
			this.hat1.x = 158;
			this.hat1.y = 181;
			this.mouth1.x = 144;
			this.mouth1.y = 360;
			this.angry_eye2.x = 100;
			this.angry_eye2.y = 284;
			this.angry_eye1.x = 196;
			this.angry_eye1.y = 285;
			this.shoe1.x = 98;
			this.shoe1.y = 461;
			this.shoe2.x = 168;
			this.shoe2.y = 461;
		}
		
		this.shoe1.on("pressmove", dragMe);
		this.shoe2.on("pressmove", dragMe);
		this.nose1.on("pressmove", dragMe);
		this.nose2.on("pressmove", dragMe);
		this.Rhand.on("pressmove", dragMe);
		this.Lhand.on("pressmove", dragMe);
		this.fmask.on("pressmove", dragMe);
		this.pineapple.on("pressmove", dragMe);
		
		
			
		
		
		this.angry_eye2.on("pressmove", dragMe);
		this.angry_eye1.on("pressmove", dragMe);
		this.mouth1.on("pressmove", dragMe);
		this.eye1.on("pressmove", dragMe);
		this.eye2.on("pressmove", dragMe);
		this.mouth2.on("pressmove", dragMe);
		this.hat1.on("pressmove", dragMe);
		this.shoe1.on("pressmove", dragMe);
		this.shoe2.on("pressmove", dragMe);	
		this.nose1.on("pressmove", dragMe);
		this.nose2.on("pressmove", dragMe);
		this.Rhand.on("pressmove", dragMe);
		this.Lhand.on("pressmove", dragMe);
		this.fmask.on("pressmove", dragMe);
		this.pineapple.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF0000").s().p("Ag7BJQACgSALgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgHAAgEAFQgGAFgBAMIgogDQADgRAGgJQAGgKAMgFQALgFATAAQAVAAAMAFQAMAFAGAKQAHAKgBAMQABANgIAMQgHALgVAOIgQAMIgIAIIA9AAIAAAhg");
	this.shape.setTransform(284.35,621.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CF0000").s().p("AggAwQgMgGgHgMQgIgNAAgRQAAgXAQgPQAPgPAcAAQAVAAANAGQAMAHAIANQAGANAAATIAAAFIhOAAQABAJADAFQAGAHAJAAQAFAAAGgDIAGgHIAoAEQgJAQgNAGQgNAHgXAAQgUAAgMgGgAgOgWQgEAEAAAKIAlAAQAAgMgGgFQgEgFgIAAQgJAAgGAIg");
	this.shape_1.setTransform(264.55,623.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CF0000").s().p("AgXAzQgLgDgIgHQgIgHgFgJQgEgJAAgQQAAgPAGgKQADgIAIgGQAGgGAIgEQALgEASAAQAZAAANAJQANAJAGARIglAFQgCgGgFgEQgEgDgIAAQgJAAgGAHQgGAHAAANQAAANAGAHQAGAGAJAAQAHAAAFgEQAGgEACgIIAmAEQgDAMgHAJQgHAJgMAEQgLAFgQAAQgQAAgLgDg");
	this.shape_2.setTransform(251.2,623.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CF0000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_3.setTransform(237.825,623.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CF0000").s().p("AgZBJIAAhKIgPAAIAAgdIAPAAIAAgFIACgOQABgHADgFQAEgFAHgDQAGgDANAAQALAAATADIgEAYIgMgCQgFAAgDACQgCACgBAEIAAAJIASAAIAAAdIgSAAIAABKg");
	this.shape_4.setTransform(227.6,621.625);

	this.redbtn2 = new lib.arcadebuttonred();
	this.redbtn2.name = "redbtn2";
	this.redbtn2.setTransform(261.4,556);
	new cjs.ButtonHelper(this.redbtn2, 0, 1, 2, false, new lib.arcadebuttonred(), 3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAPgPQAQgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhPAAQABAJAFAFQAGAHAHAAQAHAAAFgDIAGgHIAoAEQgJAQgNAGQgMAHgYAAQgUAAgLgGgAgOgWQgEAEgBAKIAnAAQgCgMgEgFQgFgFgJAAQgIAAgGAIg");
	this.shape_5.setTransform(650.6,606.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgTBIIAAiOIAnAAIAACOg");
	this.shape_6.setTransform(640.575,604.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_7.setTransform(630.825,608.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_8.setTransform(617.475,608.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_9.setTransform(603.875,606.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgfAwQgNgGgHgMQgIgNAAgRQAAgXAPgPQAQgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhPAAQABAJAFAFQAGAHAHAAQAHAAAFgDIAGgHIAoAEQgJAQgNAGQgNAHgXAAQgUAAgLgGgAgOgWQgDAEgCAKIAmAAQgBgMgEgFQgGgFgIAAQgIAAgGAIg");
	this.shape_10.setTransform(590.55,606.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAPA1IAAg4QAAgKgEgEQgDgEgHAAQgGAAgEAFQgFAGAAANIAAAyIgoAAIAAhmIAlAAIAAAQQAJgKAIgEQAIgFAMAAQAQAAAKAKQAJAKAAAUIAABBg");
	this.shape_11.setTransform(577.175,606.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgTBIIAAhnIAnAAIAABngAgTgrIAAgbIAnAAIAAAbg");
	this.shape_12.setTransform(567.175,604.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_13.setTransform(557.425,608.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgJBFQgIgEgDgIQgDgIgBgRIAAgjIgOAAIAAgdIAOAAIAAgUIAogUIAAAoIAVAAIAAAdIgVAAIAAAjQAAAHABACQACADAEAAQAFAAAIgCIADAbQgPAEgNAAQgOAAgGgEg");
	this.shape_14.setTransform(539.4,604.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAQgPQAPgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhPAAQACAJAEAFQAFAHAJAAQAFAAAGgDIAHgHIAnAEQgJAQgNAGQgMAHgYAAQgUAAgLgGgAgOgWQgEAEgBAKIAnAAQgCgMgFgFQgEgFgIAAQgJAAgGAIg");
	this.shape_15.setTransform(528.3,606.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgmAuQgMgIgEgPIAngEQADAHAEADQAEADAHAAQAIAAAFgDQADgDAAgDQAAgFgEgCIgRgEQgVgEgHgDQgJgDgFgGQgGgIABgJQAAgKAFgIQAHgHAJgEQALgDARAAQASAAAJADQAJACAGAGQAGAGAEAKIgmAEQgCgFgDgCQgFgDgFAAQgHAAgDACQgDACAAAEQAAAEAEACQAEACAMABQATACAKAEQAKAEAFAHQAFAHAAAJQAAAJgFAJQgFAIgMAFQgMAFgUAAQgbAAgMgIg");
	this.shape_16.setTransform(515.4,606.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AggAwQgLgGgIgMQgIgNAAgRQAAgXAQgPQAPgPAbAAQAWAAANAGQAMAHAIANQAGANAAATIAAAFIhPAAQACAJADAFQAGAHAJAAQAFAAAGgDIAHgHIAnAEQgJAQgNAGQgMAHgYAAQgUAAgMgGgAgOgWQgDAEgCAKIAnAAQgCgMgFgFQgFgFgHAAQgJAAgGAIg");
	this.shape_17.setTransform(502.75,606.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgoA1IAAhmIAlAAIAAARQAFgMAFgEQAGgEAJAAQAIAAALAFIgNAcQgHgCgEAAQgHAAgFAHQgFAIAAAYIAAAjg");
	this.shape_18.setTransform(492.475,606.4);

	this.greenbtn2 = new lib.arcadebuttongreen();
	this.greenbtn2.name = "greenbtn2";
	this.greenbtn2.setTransform(580.3,538.8);
	new cjs.ButtonHelper(this.greenbtn2, 0, 1, 2, false, new lib.arcadebuttongreen(), 3);

	this.bluebtn1 = new lib.arcadebuttonblue();
	this.bluebtn1.name = "bluebtn1";
	this.bluebtn1.setTransform(414.15,525.8);
	new cjs.ButtonHelper(this.bluebtn1, 0, 1, 2, false, new lib.arcadebuttonblue(), 3);

	this.pineapple = new lib.pineapple();
	this.pineapple.name = "pineapple";
	this.pineapple.setTransform(1254.2,16.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_19.setTransform(450.775,623.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgzA0IAAgaIAygyIguAAIAAgbIBfAAIAAAXIgzA1IA3AAIAAAbg");
	this.shape_20.setTransform(438.525,623.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgzA0IAAgaIAygyIguAAIAAgbIBfAAIAAAXIgzA1IA3AAIAAAbg");
	this.shape_21.setTransform(427.425,623.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgTBIIAAhnIAnAAIAABngAgTgrIAAgbIAnAAIAAAbg");
	this.shape_22.setTransform(418.575,621.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_23.setTransform(408.825,625.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAPgPQAQgPAbAAQAWAAANAGQAMAHAHANQAHANAAATIAAAFIhPAAQABAJAFAFQAGAHAHAAQAHAAAFgDIAGgHIAoAEQgJAQgNAGQgNAHgXAAQgUAAgLgGgAgOgWQgDAEgCAKIAmAAQgBgMgEgFQgGgFgIAAQgIAAgGAIg");
	this.shape_24.setTransform(388.6,623.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AAPBIIAAg6QAAgJgEgEQgDgDgHgBQgGAAgEAFQgFAFAAAOIAAAzIgoAAIAAiOIAoAAIAAA0QAIgIAHgEQAIgDALgBQAQAAAKAKQAJAKAAATIAABDg");
	this.shape_25.setTransform(375.225,621.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgJBFQgIgEgDgIQgEgIAAgRIAAgjIgOAAIAAgdIAOAAIAAgUIAogUIAAAoIAVAAIAAAdIgVAAIAAAjQAAAHABACQABADAGAAQAEAAAIgCIADAbQgPAEgNAAQgOAAgGgEg");
	this.shape_26.setTransform(364.1,621.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_27.setTransform(346.325,623.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgJBFQgIgEgDgIQgDgIgBgRIAAgjIgOAAIAAgdIAOAAIAAgUIAogUIAAAoIAVAAIAAAdIgVAAIAAAjQAAAHABACQABADAGAAQAEAAAIgCIADAbQgPAEgNAAQgOAAgGgEg");
	this.shape_28.setTransform(335.2,621.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AggAwQgMgGgHgMQgIgNAAgRQAAgXAQgPQAPgPAcAAQAVAAANAGQAMAHAIANQAGANAAATIAAAFIhOAAQABAJADAFQAHAHAIAAQAFAAAGgDIAHgHIAnAEQgJAQgNAGQgNAHgXAAQgUAAgMgGgAgOgWQgEAEAAAKIAmAAQgBgMgGgFQgFgFgHAAQgJAAgGAIg");
	this.shape_29.setTransform(464.15,593.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgTBHIAAiOIAnAAIAACOg");
	this.shape_30.setTransform(454.125,591.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_31.setTransform(444.375,595.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_32.setTransform(431.025,595.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_33.setTransform(417.425,593.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAQgPQAPgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhPAAQACAJAEAFQAFAHAJAAQAGAAAFgDIAHgHIAnAEQgJAQgNAGQgMAHgYAAQgUAAgLgGgAgOgWQgEAEgBAKIAnAAQgCgMgFgFQgEgFgIAAQgJAAgGAIg");
	this.shape_34.setTransform(404.1,593.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AAPA1IAAg4QAAgKgEgEQgDgEgHAAQgGAAgEAFQgFAGAAANIAAAyIgoAAIAAhnIAlAAIAAARQAJgKAIgFQAIgEAMAAQAQAAAKAKQAJAJAAAVIAABBg");
	this.shape_35.setTransform(390.725,593.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgTBHIAAhmIAnAAIAABmgAgTgsIAAgbIAnAAIAAAbg");
	this.shape_36.setTransform(380.725,591.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_37.setTransform(370.975,595.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgtA4QgLgQAAgXQAAgYAMgOQAMgOAUAAQAJAAAHADQAHADAGAHIAAgyIAoAAIAACOIglAAIAAgPQgIAKgGADQgIAFgKAAQgWAAgLgRgAgMAAQgEAFAAAOQAAANAEAGQAFAFAHAAQAHAAAGgFQAEgGAAgOQABgMgGgGQgFgFgHAAQgHAAgFAFg");
	this.shape_38.setTransform(350.45,591.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgtA4QgLgQAAgXQAAgYAMgOQANgOATAAQAJAAAGADQAIADAGAHIAAgyIAoAAIAACOIglAAIAAgPQgIAKgGADQgIAFgKAAQgVAAgMgRgAgLAAQgFAFAAAOQAAANAFAGQAEAFAHAAQAHAAAFgFQAGgGAAgOQgBgMgFgGQgFgFgHAAQgHAAgEAFg");
	this.shape_39.setTransform(337.1,591.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_40.setTransform(324.025,593.525);

	this.angry_eye2 = new lib.angryEyesR();
	this.angry_eye2.name = "angry_eye2";
	this.angry_eye2.setTransform(605.85,64,1,1,0,0,180);

	this.angry_eye1 = new lib.angryEyesR();
	this.angry_eye1.name = "angry_eye1";
	this.angry_eye1.setTransform(692.85,64);

	this.mouth2 = new lib.mouth2();
	this.mouth2.name = "mouth2";
	this.mouth2.setTransform(825,152,0.8341,1);

	this.mouth1 = new lib.mouth1();
	this.mouth1.name = "mouth1";
	this.mouth1.setTransform(647.85,151,0.8296,1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CF0000").s().p("AgKBFQgGgEgEgIQgEgIABgRIAAgjIgPAAIAAgdIAPAAIAAgUIAmgUIAAAoIAXAAIAAAdIgXAAIAAAjQAAAHABACQADADAFAAQAEAAAIgCIADAbQgPAEgMAAQgOAAgIgEg");
	this.shape_41.setTransform(54.35,615.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CF0000").s().p("AggAwQgLgGgIgMQgIgNAAgRQAAgXAPgPQAQgPAcAAQAVAAANAGQAMAHAHANQAHANAAATIAAAFIhOAAQAAAJAEAFQAGAHAIAAQAGAAAGgDIAGgHIAoAEQgJAQgNAGQgNAHgXAAQgUAAgMgGgAgOgWQgDAEgBAKIAlAAQgBgMgEgFQgGgFgIAAQgIAAgGAIg");
	this.shape_42.setTransform(43.25,617.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CF0000").s().p("AgnAuQgMgIgDgPIAngEQADAHAFADQADADAHAAQAIAAAEgDQAEgDAAgDQAAgFgFgCIgQgEQgVgEgIgDQgHgDgGgGQgFgIgBgJQAAgKAHgIQAFgHALgEQAKgDARAAQATAAAIADQAJACAGAGQAGAGADAKIglAEQgCgFgDgCQgFgDgFAAQgHAAgDACQgDACAAAEQAAAEAEACQADACANABQATACALAEQAJAEAFAHQAFAHAAAJQAAAJgFAJQgGAIgLAFQgMAFgUAAQgcAAgMgIg");
	this.shape_43.setTransform(30.35,617.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CF0000").s().p("AgfAwQgNgGgHgMQgIgNAAgRQAAgXAPgPQAQgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhOAAQAAAJAFAFQAGAHAHAAQAHAAAFgDIAGgHIAoAEQgJAQgNAGQgNAHgXAAQgUAAgLgGgAgOgWQgDAEgBAKIAlAAQgBgMgEgFQgGgFgIAAQgIAAgGAIg");
	this.shape_44.setTransform(17.7,617.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CF0000").s().p("AgoA1IAAhmIAlAAIAAARQAFgMAFgEQAGgEAJAAQAIAAALAFIgNAcQgHgCgEAAQgHAAgFAHQgFAIAAAYIAAAjg");
	this.shape_45.setTransform(7.425,617.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CF0000").s().p("AAABJIAAhfQgIAIgJAEIgXAJIAAggQAUgHALgJQAKgJAHgOIAhAAIAACRg");
	this.shape_46.setTransform(189.8,621.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CF0000").s().p("AggAwQgMgGgHgMQgIgNAAgRQAAgXAQgPQAPgPAcAAQAVAAANAGQAMAHAIANQAGANAAATIAAAFIhOAAQABAJADAFQAHAHAIAAQAFAAAGgDIAHgHIAnAEQgJAQgNAGQgNAHgXAAQgUAAgMgGgAgOgWQgEAEAAAKIAmAAQgBgMgGgFQgFgFgHAAQgJAAgGAIg");
	this.shape_47.setTransform(170.75,623.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CF0000").s().p("AgXAzQgLgDgIgHQgIgHgFgJQgEgJAAgQQAAgPAFgKQAFgIAHgGQAGgGAIgEQAMgEAQAAQAaAAAOAJQANAJAFARIglAFQgCgGgFgEQgEgDgIAAQgJAAgGAHQgGAHAAANQAAANAGAHQAGAGAJAAQAHAAAFgEQAFgEAEgIIAlAEQgDAMgHAJQgHAJgLAEQgMAFgQAAQgQAAgLgDg");
	this.shape_48.setTransform(157.4,623.725);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CF0000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_49.setTransform(144.025,623.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CF0000").s().p("AgZBJIAAhKIgPAAIAAgdIAPAAIAAgFIABgOQACgHADgFQAEgFAHgDQAGgDANAAQALAAATADIgEAYIgMgCQgFAAgDACQgCACgBAEIAAAJIATAAIAAAdIgTAAIAABKg");
	this.shape_50.setTransform(133.8,621.625);

	this.greenbtn = new lib.arcadebuttongreen();
	this.greenbtn.name = "greenbtn";
	this.greenbtn.setTransform(40.1,550.05);
	new cjs.ButtonHelper(this.greenbtn, 0, 1, 2, false, new lib.arcadebuttongreen(), 3);

	this.redbtn = new lib.arcadebuttonred();
	this.redbtn.name = "redbtn";
	this.redbtn.setTransform(153.4,556);
	new cjs.ButtonHelper(this.redbtn, 0, 1, 2, false, new lib.arcadebuttonred(), 3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag6BJQACgSAKgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgEgFgIAAQgHAAgFAFQgEAFgCAMIgogDQADgRAGgJQAGgKAMgFQALgFATAAQAVAAALAFQAMAFAHAKQAGAKABAMQAAANgIAMQgHALgVAOIgQAMIgIAIIA9AAIAAAhg");
	this.shape_51.setTransform(141.55,77.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag7BJQACgSALgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgHAAgEAFQgGAFgBAMIgogDQADgRAGgJQAGgKAMgFQALgFATAAQAVAAAMAFQAMAFAGAKQAHAKgBAMQABANgIAMQgHALgVAOIgQAMIgIAIIA9AAIAAAhg");
	this.shape_52.setTransform(128.2,77.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgcBEQgLgGgIgKQgEgJgEgOQgCgNAAgQQgBgoAPgRQAPgQAdAAQAOAAAKADQAJAEAGAGQAGAFAEAHQACAGACAIQAFAQAAASQgBAmgNASQgNASggAAQgRAAgLgGgAgNgkQgFAJAAAbQAAAbAFAKQAFAKAIAAQAGAAAEgEQAFgFACgJQACgJAAgTQAAgcgEgKQgGgKgJABQgJAAgEAKg");
	this.shape_53.setTransform(115,77.25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag6BJQACgSAKgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgEgFgIAAQgHAAgFAFQgEAFgCAMIgogDQADgRAGgJQAGgKAMgFQALgFATAAQAVAAALAFQAMAFAHAKQAGAKABAMQAAANgIAMQgHALgVAOIgQAMIgJAIIA+AAIAAAhg");
	this.shape_54.setTransform(101.5,77.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgcBGQgMgFgHgJQgHgJgEgNIAogGQACANAFAEQAFAFAGgBQAIABAGgGQAFgGAAgKQAAgJgFgGQgFgGgJABIgMACIACgbIAFAAQAHAAAFgFQAGgFAAgHQAAgGgEgEQgEgFgGAAQgHAAgFAFQgEAEgBAKIgmgGQAFgSANgJQANgKAZAAQAbAAAMALQANAKAAAQQAAAJgFAIQgFAHgLAFQAJACAEAEQAHADAEAHQAEAHAAAKQAAAMgGAMQgHALgMAHQgNAGgUAAQgSAAgLgEg");
	this.shape_55.setTransform(81.625,77.25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAABJIAAhfQgIAIgJAEIgXAJIAAggQAUgHALgJQAKgJAHgOIAhAAIAACRg");
	this.shape_56.setTransform(67.4,77.125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgzBGIgDgbQAIACALAAQAHAAAEgDQAEgDADgIIgrhnIAqAAIAUBFIAUhFIAnAAIgpBuQgHATgHAGQgKAKgVAAQgIAAgSgDg");
	this.shape_57.setTransform(48.975,81.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_58.setTransform(36.125,79.225);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAwA1IAAg6QAAgHgDgDQgEgGgGAAQgGAAgFAFQgFAGAAAKIAAA1IgmAAIAAg4IgBgJQgBgEgEgDQgDgCgDAAQgIAAgEAFQgFAFABALIAAA1IgoAAIAAhmIAlAAIAAAOQAIgJAIgEQAIgEAMAAQAMAAAHAFQAHAEAEAIQAKgJAIgEQAHgEAMAAQAQAAAKAKQAJAKAAAVIAABAg");
	this.shape_59.setTransform(19.5,79.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgnAuQgLgIgEgPIAngEQADAHAFADQADADAHAAQAIAAAFgDQADgDAAgDQAAgFgFgCIgQgEQgVgEgIgDQgHgDgGgGQgFgIgBgJQAAgKAHgIQAFgHALgEQAKgDARAAQATAAAIADQAJACAGAGQAGAGAEAKIgmAEQgBgFgEgCQgEgDgGAAQgHAAgDACQgDACAAAEQAAAEAEACQADACANABQATACALAEQAJAEAFAHQAFAHAAAJQAAAJgFAJQgGAIgLAFQgMAFgUAAQgcAAgMgIg");
	this.shape_60.setTransform(129.9,49.025);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAPgPQAQgPAbAAQAWAAANAGQAMAHAHANQAHANAAATIAAAFIhPAAQABAJAFAFQAGAHAHAAQAHAAAFgDIAGgHIAoAEQgJAQgNAGQgMAHgYAAQgUAAgLgGgAgOgWQgDAEgCAKIAmAAQgBgMgEgFQgGgFgIAAQgIAAgGAIg");
	this.shape_61.setTransform(117.25,49.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgzBGIgDgbQAIACALAAQAHAAAEgDQAEgDADgIIgrhnIAqAAIAUBFIAUhFIAnAAIgpBuQgHATgHAGQgKAKgVAAQgIAAgSgDg");
	this.shape_62.setTransform(104.525,51.125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAPgPQAQgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhPAAQABAJAFAFQAGAHAHAAQAHAAAFgDIAGgHIAoAEQgJAQgNAGQgMAHgYAAQgUAAgLgGgAgOgWQgEAEgBAKIAnAAQgCgMgEgFQgFgFgJAAQgIAAgGAIg");
	this.shape_63.setTransform(91.7,49.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgoA1IAAhnIAlAAIAAARQAFgLAFgEQAGgEAJAAQAIAAALAGIgNAcQgHgDgEAAQgHAAgFAGQgFAKAAAXIAAAjg");
	this.shape_64.setTransform(81.425,48.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgVBHIAAg7Ig4hTIAyAAIAbAxIAdgxIAxAAIg4BTIAAA7g");
	this.shape_65.setTransform(68.35,47.05);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgUA0IAAgoIApAAIAAAogAgUgLIAAgoIApAAIAAAog");
	this.shape_66.setTransform(50.575,49.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgzBGIgDgbQAIACALAAQAHAAAEgDQAEgDADgIIgrhnIAqAAIAUBFIAUhFIAnAAIgpBuQgHATgHAGQgKAKgVAAQgIAAgSgDg");
	this.shape_67.setTransform(41.225,51.125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgFBEQgGgDgIgKIAAAPIglAAIAAiOIAoAAIAAAyQAGgHAIgDQAGgDAJAAQATAAANAOQAMANAAAZQAAARgGANQgFANgKAGQgKAHgMAAQgLAAgIgFgAgLAAQgFAGAAAMQAAANAFAHQAFAFAHAAQAHAAAFgFQAEgGAAgOQAAgNgEgFQgFgFgHAAQgHAAgFAFg");
	this.shape_68.setTransform(28.625,47.175);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgsA4QgMgQAAgXQAAgYANgOQALgOAUAAQAJAAAGADQAIADAGAHIAAgyIAoAAIAACOIglAAIAAgPQgIAKgHADQgHAFgLAAQgUAAgLgRgAgMAAQgEAFAAAOQAAANAEAGQAFAFAHAAQAHAAAFgFQAGgGAAgOQgBgMgFgGQgFgFgHAAQgHAAgFAFg");
	this.shape_69.setTransform(147,16.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_70.setTransform(133.925,18.825);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgfAwQgMgGgIgMQgIgNAAgRQAAgXAQgPQAPgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhPAAQACAJAEAFQAFAHAJAAQAGAAAFgDIAHgHIAnAEQgJAQgNAGQgMAHgYAAQgUAAgLgGgAgOgWQgEAEgBAKIAnAAQgCgMgFgFQgEgFgIAAQgJAAgGAIg");
	this.shape_71.setTransform(120.6,18.825);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAPBIIAAg6QAAgJgEgEQgDgEgHAAQgGAAgEAFQgFAGAAANIAAAzIgoAAIAAiOIAoAAIAAA0QAIgJAHgDQAIgDALAAQAQgBAKAKQAJAKAAATIAABDg");
	this.shape_72.setTransform(107.225,16.85);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_73.setTransform(87.225,18.825);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgzA0IAAgaIAygyIguAAIAAgbIBfAAIAAAXIgzA1IA3AAIAAAbg");
	this.shape_74.setTransform(74.975,18.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgzA0IAAgaIAygyIguAAIAAgbIBfAAIAAAXIgzA1IA3AAIAAAbg");
	this.shape_75.setTransform(63.875,18.825);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgTBIIAAhnIAnAAIAABngAgTgrIAAgbIAnAAIAAAbg");
	this.shape_76.setTransform(55.025,16.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_77.setTransform(45.275,20.675);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgoA1IAAhmIAlAAIAAARQAFgMAFgEQAGgEAJAAQAIAAALAFIgNAcQgHgCgEAAQgHAAgFAHQgFAIAAAYIAAAjg");
	this.shape_78.setTransform(28.125,18.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAtBIIAAhsIgcBsIghAAIgbhsIAABsIgkAAIAAiOIA6AAIAWBVIAVhVIA7AAIAACOg");
	this.shape_79.setTransform(13.35,16.85);

	this.eye2 = new lib.eye2();
	this.eye2.name = "eye2";
	this.eye2.setTransform(875,72);

	this.eye1 = new lib.eye1();
	this.eye1.name = "eye1";
	this.eye1.setTransform(806,72);

	this.shoe2 = new lib.shoe2("synched",0);
	this.shoe2.name = "shoe2";
	this.shoe2.setTransform(869,257);

	this.shoe1 = new lib.shoe1("synched",0);
	this.shoe1.name = "shoe1";
	this.shoe1.setTransform(748,257);

	this.nose2 = new lib.nose2("synched",0);
	this.nose2.name = "nose2";
	this.nose2.setTransform(813.25,348.35);

	this.nose1 = new lib.nose1();
	this.nose1.name = "nose1";
	this.nose1.setTransform(667,365);

	this.fmask = new lib.facemask();
	this.fmask.name = "fmask";
	this.fmask.setTransform(802,543);
	new cjs.ButtonHelper(this.fmask, 0, 1, 1);

	this.hat1 = new lib.nikehat();
	this.hat1.name = "hat1";
	this.hat1.setTransform(506.85,284);

	this.Rhand = new lib.Hand2R("synched",0);
	this.Rhand.name = "Rhand";
	this.Rhand.setTransform(565,442);

	this.Lhand = new lib.hand1L("synched",0);
	this.Lhand.name = "Lhand";
	this.Lhand.setTransform(825,442);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAIAkIgJgVIgIAHIAAAOIgUAAIAAhHIAUAAIAAAkIAOgQIAYAAIgSARIATAig");
	this.shape_80.setTransform(830.325,608.375);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgTAXQgGgEgBgIIATgCQABAEACACQADABADABQADAAACgCQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgIgCIgNgEQgFgBgDgCQgCgEAAgFQAAgFACgDQADgEAGgCQAFgCAIAAQAJAAAEABQAFACADADQADADACAFIgTACQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQgCgCgCAAIgFABIgBAEQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAAAIAIACQAKABAFADQAFABACADQADADAAAFQAAAEgDAFQgDAEgGADQgGACgJAAQgNAAgHgEg");
	this.shape_81.setTransform(823.6,609.35);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgYAXQgFgEAAgHQAAgFAEgFQADgCAJgCIAOgDIAHgDQAAgDgCgBQgBgCgEAAQgEAAgCACIgDAEIgUgCQABgFADgDQACgDADgCIAIgCIAKgBIAOABQAFABAEADQADACABAEIACAIIAAAWIAAAFQAAADACADIgTAAIgBgDIgBgEQgEAEgEACQgEACgHAAQgJAAgFgEgAAAAEIgHADIgCAEQAAABAAAAQAAAAAAABQABAAAAABQAAAAABABQACABACAAQADAAADgBQACgCABgDQACgCAAgDIAAgEIgIADg");
	this.shape_82.setTransform(817.3,609.35);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAYAaIAAgcIgBgFQgCgDgDAAQgEAAgCADQgCACAAAFIAAAaIgTAAIAAgbIAAgEIgDgEIgDgBQgDAAgDADQgCACAAAFIAAAaIgUAAIAAgyIASAAIAAAHQAEgEAFgCQAEgCAGAAQAGAAACACQAEACADAEQAEgFAEgBQAEgCAGAAQAIAAAEAEQAFAGAAAKIAAAfg");
	this.shape_83.setTransform(808.95,609.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgPAZQgGgDgEgHQgEgHAAgIQAAgLAIgHQAHgIAOAAQAKAAAHADQAGADADAHQAEAGAAAKIAAACIgnAAQABAFACACQACADAEABQADgBADgBIADgDIAUABQgFAJgGADQgGADgMAAQgKAAgFgCgAgGgKQgCACgBAFIATAAQAAgHgDgCQgDgDgEAAQgDAAgDAFg");
	this.shape_84.setTransform(797.3,609.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgLAaQgGgCgEgEQgDgDgDgFQgCgEAAgIQAAgGADgGQACgEADgDIAIgFQAFgCAJAAQAMAAAHAFQAGAEADAJIgSACQgBgDgDgBQgCgCgEAAQgEAAgDADQgDAEAAAGQAAAGADADQADAEAEAAQAEAAACgCQADgCABgEIATACQgCAFgDAFQgDAEgGADQgGACgIAAQgHAAgGgBg");
	this.shape_85.setTransform(790.65,609.35);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgYAXQgFgEAAgHQAAgFAEgFQADgCAJgCIAOgDIAHgDQAAgDgCgBQgBgCgEAAQgEAAgCACIgDAEIgUgCQACgFACgDQACgDADgCIAIgCIAKgBIAOABQAFABAEADQADACABAEIACAIIAAAWIAAAFQAAADACADIgTAAIgBgDIgBgEQgEAEgEACQgEACgHAAQgJAAgFgEgAAAAEIgHADIgCAEQAAABAAAAQAAAAAAABQABAAAAABQAAAAABABQACABACAAQADAAADgBQACgCABgDQACgCAAgDIAAgEIgIADg");
	this.shape_86.setTransform(784,609.35);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgNAkIAAgkIgGAAIAAgOIAGAAIAAgDIACgGQAAgEACgDIAFgEQAEgCAFAAIAPACIgCAMIgGAAIgDABIgCACIAAAFIAJAAIAAAOIgJAAIAAAkg");
	this.shape_87.setTransform(778.9,608.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.Lhand},{t:this.Rhand},{t:this.hat1},{t:this.fmask},{t:this.nose1},{t:this.nose2},{t:this.shoe1},{t:this.shoe2},{t:this.eye1},{t:this.eye2},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.redbtn},{t:this.greenbtn},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.mouth1},{t:this.mouth2},{t:this.angry_eye1},{t:this.angry_eye2},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.pineapple},{t:this.bluebtn1},{t:this.greenbtn2},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.redbtn2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Character
	this.instance = new lib.pizza("synched",0);
	this.instance.setTransform(170.4,328.2,1,1,0,0,0,-0.8,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Frame
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_88.setTransform(480,320);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_89.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(434,229.2,883.8,407.90000000000003);
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