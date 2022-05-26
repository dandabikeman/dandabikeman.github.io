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


(lib.Watch = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AhAAAICBAA");
	this.shape.setTransform(5.55,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AAjhjIAACBIhFBG");
	this.shape_1.setTransform(-4.45,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(5,1,1).p("AC9AAQAAArgRAkQgOAdgZAZQgOAPgQAKQgtAfg6AAQg5AAgtgfQgQgKgPgPQgSgSgMgVQgZgqAAg0QAAgqARgkQANgeAZgZQA4g3BNAAQBOAAA3A3QAXAXANAbQAUAmAAAtg");
	this.shape_2.setTransform(-0.65,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhmCeQgQgKgPgPQgRgSgNgVQgZgqAAg0QAAgqARgjQAOgeAYgZQA4g3BNAAQBOAAA3A3QAWAWAOAbQATAmAAAtQAAArgQAkQgOAdgZAZQgOAPgQAKQgtAeg6AAQg5AAgtgegAgCADIhGBGIBGhGIAAiBgAB/ADIiBAAg");
	this.shape_3.setTransform(-0.65,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("Ak2hYQBDgTBCgLQgRAkAAAqQAAAzAZAqQhHAahGAugACmAmQAQgkAAgqQAAgugTgmQBLAMBJAYIAAC2QhKglhHgTg");
	this.shape_4.setTransform(0,4.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Watch, new cjs.Rectangle(-31.1,-21.3,62.2,42.7), null);


(lib.Tail = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FBC9CA").s().p("Ag6C2QgQgGgSgVQgcghgwheQgKgSABgQQAAgOAHgFQAFgHAHAEQAHAFAMAaQAQAhAjAvQASAXAJAHQALAFAQAAQAXAAALgEQAfgLAagwQgTgMgRglQgIgSgDgOQgHgiAFgoQACgRAFgOQAKgiATgNQATgNARAQQALAJAKAWQAJATADARQAHAlgKBHQAfgBAVAEQALACADALQADAJgCANQgBALgFAHQgHAIgOAAQgTAAgaAIQgLAEgFAGQgFAGgMAYQgJAQgWAZQgOAOgKAHQgRALgeAAQgTAAgJgDgAA3hxQgIACgEAHQgDAGgCAKQgDANABAMQABALAEAJQAPAkAVADIAEgUIADgVIACgRIgBgOQgFgUgCgGQgHgMgJAAIgHABg");
	this.shape.setTransform(0.0138,0.021);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tail, new cjs.Rectangle(-17.8,-18.4,35.7,36.9), null);


(lib.Sunglasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("ABDheQAFAcAVAhQBOB2BYA7QBZA6CfBAQCeBAB1hrQB1hqgjinQgjiphkggQhlggiugFQiugFiEBGQhVAtACBCAhAhtQgCAjgaAoQhOB3hYA6QhZA6ifBAQieBAh1hqQh1hrAjinQAjioBkggQBlghCugEQCugFCEBGQAhARAUAVAhbi2QAbAdAAAk");
	this.shape.setTransform(0,0.0345);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.569)").s().p("Ak5DfQh1hrAjinQAjioBlggQBkghCtgEQCvgFCEBGQAgARAUAVIABAEIADgBQAaAdABAkIgMACQgDAAgCACQgBABAAABQgBAAAAABQAAAAAAABQAAAAABABIASgBQgDAjgaAoQhNB3hZA6QhYA6ieBAQg8AYg1AAQhaAAhJhCg");
	this.shape_1.setTransform(-46.828,0.0095);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.62)").s().p("AAmEJQiehAhYg6QhZg6hNh3QgVgggGgdIAGAAQAEgFgFgHQgCgDgFgCQgChCBVgtQCEhGCvAFQCtAEBkAhQBlAgAjCoQAjCnh1BrQhJBChaAAQg1AAg8gYg");
	this.shape_2.setTransform(46.8257,0.0595);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("ABGA4IgCAAIAAgIQgFAAgIgDIgMgGIgOgBIhZADIgSABQAAgBgBAAQAAgBAAgBQABAAAAgBQAAAAABgBQACgCADAAIAMgCQAbgEAyABQAiABANAGIAEABQAEACADAEQAFAGgEAGgAAcgrQghgFgcADQgbADgbALIgDABIgBgEIACgEQADgEAFgCQAcgNA2ADQA1ADAcAMQAEACADADQAEAEgCAEQgbgMgkgFg");
	this.shape_3.setTransform(-0.347,-15.0531);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sunglasses, new cjs.Rectangle(-88.2,-29.9,176.4,59.9), null);


(lib.Sunglasses1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AD3AAQAAAngcAaQgbAcgoAAQgoAAgcgcQgbgaAAgnQAAgmAbgbQAcgbAoAAQAoAAAbAbQAcAbAAAmgAg4AAQAAAngcAaQgbAcgoAAQgoAAgcgcQgbgaAAgnQAAgmAbgbQAcgbAoAAQAoAAAbAbQAcAbAAAmgAA1AaIhpAAAg4geIBxAA");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("ABUBBQgbgaAAgnQAAglAbgcQAcgaAogBQAoABAbAaQAcAcAAAlQAAAngcAaQgbAbgoABQgogBgcgbgAjbBBQgbgaAAgnQAAglAbgcQAcgaAogBQAoABAbAaQAcAcAAAlQAAAngcAaQgbAbgoABQgogBgcgbg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0AcQACgKgCgKQgEgTAAgLIAAgFIBxAAIgBAfIgCAIQgBADAAANg");
	this.shape_2.setTransform(0.025,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sunglasses1, new cjs.Rectangle(-25.7,-10.2,51.5,20.5), null);


(lib.ShirtNu = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAWA1IAAhBQAAgOgFgGQgGgGgHAAQgKAAgHAKQgHAKAAAQIAAA3IgOAAIAAhmIANAAIAAATQAKgWARAAQAKAAAHAGQAHAGADAIQACAHAAATIAAA7g");
	this.shape.setTransform(38.475,-10.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAmQgKgPAAgXQAAgYALgOQAMgPARAAQASAAALAPQAKAQAAAWQAAAYgLAPQgMAPgRAAQgSAAgLgQgAgQgeQgIAJAAAVQAAAWAIAJQAGAKAKAAQAKAAAIgKQAHgKAAgVQAAgVgIgJQgHgKgKAAQgKAAgGAKg");
	this.shape_1.setTransform(28.8,-10.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAmQgJgPAAgXQAAgWAKgQQAKgPARAAQAOAAAJAKQAJAKACAQIgMACQgEgZgSAAQgKAAgHALQgGAMAAARQAAATAGALQAHALAKAAQARAAAFgaIAMADQgDARgJAJQgJAKgNAAQgSAAgKgQg");
	this.shape_2.setTransform(19.975,-10.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAtQgIgJAAgNQAAgQALgJQAMgKAbAAIAMABQgBgMgBgGQgBgFgGgDQgFgEgJAAQgUAAgDATIgOgDQAFgcAiAAQASAAAJAJQAHAKAAAXIAAAqQAAALACAJIgOAAIgBgSQgJAVgWAAQgPAAgIgJgAgOAGQgJAGAAAMQAAAHAFAGQAFAFAJAAQALAAAIgLQAJgKAAgOIAAgHIgOAAQgPAAgJAGg");
	this.shape_3.setTransform(10.6,-10.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqBFIAAiJIAuAAQASAAAJAKQAJAKAAANQAAAYgVAIQAMADAHAJQAFAKAAAMQABAQgKALQgJALgVAAgAgcA2IAgAAQALAAAHgHQAGgGABgLQAAgHgEgGQgDgHgEgDQgGgEgKAAIgeAAgAgcgJIAaAAQAQAAAGgHQAFgHAAgKQAAgJgGgGQgGgGgLAAIgeAAg");
	this.shape_4.setTransform(1,-12.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAnQgLgOAAgYQAAgYALgPQAMgPARAAQASAAAKAOQALAOAAAaIhAAAQAAAYAJAIQAIAIAJAAQARAAAHgUIANADQgEANgKAIQgKAJgOAAQgSAAgLgPgAgPggQgHAIgBAPIAwAAQAAgJgDgHQgCgGgFgFQgGgFgIAAQgJAAgHAJg");
	this.shape_5.setTransform(-14.075,-10.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAzIgghlIAQAAIAYBSIAYhSIANAAIgfBlg");
	this.shape_6.setTransform(-22.875,-10.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAmQgKgPAAgXQAAgYALgOQAMgPAQAAQATAAALAPQAKAQAAAWQAAAYgMAPQgLAPgRAAQgTAAgKgQgAgRgeQgHAJAAAVQAAAWAHAJQAIAKAJAAQALAAAHgKQAHgKAAgVQAAgVgIgJQgHgKgKAAQgJAAgIAKg");
	this.shape_7.setTransform(-31.7,-10.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjBFIAAiJIAQAAIAAB6IA3AAIAAAPg");
	this.shape_8.setTransform(-40.225,-12.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHBFIAAiJIAPAAIAACJg");
	this.shape_9.setTransform(-52.075,-12.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(10,1,1).p("AMAm3QFVKyk6C7AsdG4QklmgEilzIBNhY");
	this.shape_10.setTransform(-4.3113,22.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3,1,1).p("AHFAAIEDAAArHAAIDPAA");
	this.shape_11.setTransform(-2,-87.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AtJKZQkkmfEilzQjxC0hLC1IjPlKIJkstIAXAbIDPAAQghA1AAA8QAACBCWBbQCWBbDUAAQDUAACVhbQCWhbAAiBQAAg8ghg1IECAAIAZgbQFwHsEbGRIj3D6QgCgXgrhLQgthMkykXQFWKxk6C7IgDABIgyAdQl7DTl1AAQmNAAmHjvgAtLh5IBMhYg");
	this.shape_12.setTransform(0,0.0234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ShirtNu, new cjs.Rectangle(-136.7,-90.4,273.4,180.9), null);


(lib.Piggy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADJqLQAJgNAMgOQAyg2BLACQBKACADBIQBjAMgGA2QgGA2hCAfQgvAWgxALQgTAFgSADQhEAKgkgjQgjgjAAgyQAAglAcgogAFdnYQAhA5AdBFQBMC2iHBOQhIAphiATQhKAOhZABQgRAAgRAAQhcgBhbgTQgFAZgsBQQgrBQgKC7QgKC7BTCNQBTCNCOi0QCOCzBfiLQBfiLABi+QAAh+gUhNQgQgsgWgqQgkg8gUgSAldnYQATAFATADQBEAKAkgjQAjgjAAgyQAAgogggqQBYhKBqAAQBxgBBiBQAjMqQQgIgLgJgLQgyg2hLACQhKACgDBIQhjAMAGA2QAGA2BCAfQAuAVAxAMAjGgfQAEAAgNgEQhcgZg5g0QhthiA/iZQAXg6Aegz");
	this.shape.setTransform(0.025,0.0182);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC9CA").s().p("AjjKdQhTiNAKi7QAKi7ArhQQAshQAFgZQAEAAgNgEQhcgZg5g0QhthiA/iZQAXg6AegzQgxgMgugVQhCgfgGg2QgGg2BjgMQADhIBKgCQBLgCAyA2IARAWQAgAqAAAoQAAAygjAjIgBABQgbAaguAAIAAAAIAAAAQgOAAgQgCQgTgDgTgFQATAFATADQAQACAOAAIAAAAIAAAAQAuAAAbgaIABgBQAjgjAAgyQAAgogggqQBYhKBqAAQBxgBBiBQQgcAoAAAlQAAAyAjAjIABABQAbAaAuAAIAAAAIAAAAQAOAAAQgCIAlgIIglAIQgQACgOAAIAAAAIAAAAQguAAgbgaIgBgBQgjgjAAgyQAAglAcgoQAJgNAMgOQAyg2BLACQBKACADBIQBjAMgGA2QgGA2hCAfQgvAWgxALQAhA5AdBFQBMC2iHBOQhIAphiATQhKAOhZABIgiAAQhcgBhbgTQBbATBcABIAiAAQBuACBYgRQAUASAkA8IANAUQAPAbAKAnQAUBNAAB+QgBC+hfCLQhfCLiOizQhQBlg9AAQgwAAgkg+gAE3CKQgQgsgWgqQAWAqAQAsg");
	this.shape_1.setTransform(0.025,0.0182);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Piggy, new cjs.Rectangle(-52.7,-74.1,105.5,148.3), null);


(lib.Nose1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgXAHQAAAOgGALQgFAKgIAAQgIAAgGgKQgGgLAAgOQAAgOAGgLQAGgKAIAAQAIAAAFAKQAGALAAAOgAA5ADQAAAOgGAJQgFAKgJAAQgIAAgGgKQgGgJAAgOQAAgNAGgJQAGgKAIAAQAJAAAFAKQAGAJAAANgACXAAQAAAlgsAaQgsAbg/AAQg+AAgsgbQgsgaAAglQAAgkAsgbQAsgaA+AAQA/AAAsAaQAsAbAAAkg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE6986").s().p("AhpA/QgtgaABglQgBgkAtgbQArgZA+AAQA/AAArAZQAtAbgBAkQABAlgtAaQgrAag/AAQg+AAgrgagAg9AGQgBAPAGAKQAGALAIAAQAIAAAFgLQAHgKAAgPQAAgNgHgLQgFgKgIAAQgIAAgGAKQgGALABANIAAAAgAARADQAAANAGAKQAFAKAJgBQAIABAGgKQAGgKAAgNQAAgNgGgJQgGgKgIAAQgJAAgFAKQgGAJAAANIAAAAgAg4AfQgGgKABgPQgBgNAGgLQAGgKAIAAQAIAAAFAKQAHALAAANQAAAPgHAKQgFALgIAAQgIAAgGgLgAAXAaQgGgKAAgNQAAgNAGgJQAFgKAJAAQAIAAAGAKQAGAJAAANQAAANgGAKQgGAKgIgBQgJABgFgKgAgWAGIAAAAgAA5ADIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Nose1, new cjs.Rectangle(-16,-9.9,32.1,19.9), null);


(lib.Mouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ADugWQgSARg1AbQg2Ach3hPQhrBQg1gcQg1gcgSgR");
	this.shape.setTransform(0.025,-0.0041);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mouth, new cjs.Rectangle(-26.2,-5.5,52.5,11), null);


(lib.LArm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AiEoXQgnieg3idIDsg7QDAI+AWHxQAKDjgaDUIkpE1QACgJACgJQBHmVgXmLQgJiYgWiYQgKiRgehkQgMgrgMgjg");
	this.shape.setTransform(-11.0842,-8.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC9CA").s().p("AhVN7QBHmUgXmLQgJiZgWiXQgKiRgehlIgYhNQgnieg3idIDsg7QDAI/AWHvQAKDkgaDUIkpE1IAEgTg");
	this.shape_1.setTransform(-11.0842,-8.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LArm, new cjs.Rectangle(-35.2,-101.1,48.300000000000004,185), null);


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
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAYAAQAAAKgHAHQgHAHgKAAQgJAAgHgHQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJg");
	this.shape.setTransform(3.7,-8.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_1.setTransform(3.7,-8.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygygAAUhnQgHAIAAAKQAAAJAHAIQAHAGAKABQAKgBAHgGQAHgIAAgJQAAgKgHgIQgHgHgKAAQgKAAgHAHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eye2, new cjs.Rectangle(-17.1,-17.1,34.2,34.2), null);


(lib.eye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAYAAQAAAKgHAHQgHAHgKAAQgJAAgHgHQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJg");
	this.shape.setTransform(3.7,-8.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_1.setTransform(3.7,-8.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygygAAUhnQgHAIAAAKQAAAJAHAIQAHAGAKABQAKgBAHgGQAHgIAAgJQAAgKgHgIQgHgHgKAAQgKAAgHAHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(-17.1,-17.1,34.2,34.2), null);


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

	// Layer_1
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

	// Layer_1
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

	// Layer_1
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

	// Layer_1
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


(lib.Chain = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(10,1,1).p("AIuhtQgJAxg0ApQgmAfg/AbQiYBCjSAFIgvAAAgPBuQjegDifhEQg+gbgmgfQg0gpgJgx");
	this.shape.setTransform(0,-31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(5.5,1,1).p("AANijIAYAAIAAFHAgkCkIAAlHIACAA");
	this.shape_1.setTransform(2.075,-4.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgXC8IAAjbIhuAAIAAgzIBuAAIAAhhIALAAIAAgJIAnAAIAAAJIgDAAIAABhIBtAAIAAAzIhtAAIAADbg");
	this.shape_2.setTransform(1.5,23.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Chain, new cjs.Rectangle(-60.7,-47.3,121.5,89.69999999999999), null);


(lib.BlueHat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhYCBIAAkBIBMAAQAvAAAbAmQAbAlAAA1QAAA2gaAlQgaAmgnAAgAg8BlIAuAAQAkAAATgdQATgcAAguQAAgmgSgeQgSgegmgBIguAAg");
	this.shape.setTransform(1.175,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3333FF").s().p("AhYA8IAagGQAQA0AyAAQAbAAAOgNQAOgNAAgVQAAgRgLgKQgKgKgNgEIgtgMQgSgFgLgHQgLgHgJgPQgHgPAAgTQAAghAWgTQAVgTAhAAQA9AAAUBAIgaAIQgEgWgRgMQgRgLgRAAQgTAAgPALQgPALAAAUQAAAdAmAKIApALQA7APAAA3QgBAhgVAWQgWAXgoAAQhGAAgXhKg");
	this.shape_1.setTransform(-5.9,-14.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3333FF").s().p("AqKA5IAfAAQBBgnBCggQIgjPHVDPQA4AgA3AnIAPAAIAAAtQrBk1pUFFg");
	this.shape_2.setTransform(0,30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AIFE+QnVjQofDQQhCAZhCAvIAAlZQAAi0C3h/QC4h+EEgBQEFABC3B+QC4B/AAC0IAAFZQg3gvg4gZg");
	this.shape_3.setTransform(0.775,-3.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BlueHat, new cjs.Rectangle(-65.1,-42,130.2,84.1), null);


(lib.Bib = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgWAXQgCgDAAgEIAAgFIACgIIACgHIADgIQACgGAEgEQACgCAEAAQAFAAAAAHIgCAOIAAAAIACgDIAIgIIAFgEIAEgBQAEAAACACQABADAAAEIAAAGIgBAJIABAIIABADIAAADIAAABIgFADIgEAAQgDAAgDgBQgCgCgBgEQgCgEAAgEIABgGIAAgBIgEAEIgCACIgKANIgCADQgBAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQgDAAgCgCg");
	this.shape.setTransform(10.025,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAXQgGgBgDgDQgEgEAAgIQAAgFADgGQADgFAFgFQAFgFAHgDQAFgCAGAAQAIAAAAACQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgIADIgFAFIgFAJQgBAEAAAEQAAAFACAEQADADADAAQAEAAADgDQADgEAAgGIgBgHQgCgEgEgCIgBgCIACgCIAFgCIAFgBIAFABIADADIADAFIABAGQAAAEgCAFQgCAGgEADQgEAEgGADQgHACgEAAQgGAAgFgCg");
	this.shape_1.setTransform(4.375,15.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAVQgEgDAAgGQAAgGADgGQACgGAFgFIAJgKQAFgDAEAAQAEABACACQADACAAADQAAADgCADIgFAFQgDACgCAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIABgCQACgDAAgEIgBgDIgCACIgCAEIgDAJIAAAGQAAAEAAABQABABAAAAQAAABAAAAQABAAAAAAQABABAAAAIAFgCIAFgFIACgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAGgFAFQgEAEgEACQgEACgDAAQgHAAgEgEg");
	this.shape_2.setTransform(-0.575,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAVQgEgEAAgGQAAgDACgFIAFgJQAGgHAIgFQAHgGAIAAQAHAAAFACQAEADAAAEQAAADgCAEIADAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIAAACIgBAIIABAEIAAACIAAACIABAGIgGAEIgGABQgIAAAAgNIAAgCIgIAJIgHAFQgEACgDAAQgFAAgEgEgAACgQQgEAFgDAGQgDAFAAADIABAFQABAAAAABQAAAAABAAQAAABABAAQAAAAAAAAIAFgDIAJgHIACgBIAAgBIgBABIgGABQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIABgDQADgDAAgFIgBgEIgCgBIgCABg");
	this.shape_3.setTransform(-5.675,16.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAoIgGgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgEIADgCIAAgBIgDABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBIABgHIADgMIAHgRIAEgJIgBAAIgFABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIACgFIADgFQAEgDAIgCQAIgCAJAAIAKABQAFABADACIAGAEIABAHQAAAEgCAEQgCADgEADQgFAEgEABIgCAAQATADAAAMIgBAEIgDAGIgEAEIgLAJIgOAHQgGACgFAAIgIgBgAgFgBIAAABIgFANIgEAIIgEAFIAJACIAFABIAFgBIAEgDIAFgHQACgEAAgEQAAgEgDgDIgDgCIgFgBIgDAAIgDgCIAAABgAACgcIgFAWIABAAQACAAADgCQAFgEACgDQADgEAAgDQAAgHgIAAIgDABg");
	this.shape_4.setTransform(-12.175,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAiIgBgDIABgGIAFgOIAAgEIABgCIAKgbIABgBIgDAAIgDABIgDAAIgBAAIgBgCIACgEQACgDACAAIAIgCIAJgBIAKABQAEABAEACIAGADIAEAGIABAIIgBAHIgEAHIgGAGIgIAGQgGACgEAAIgCgBIgBgBIABgCIADgEIAEgDQADgDABgCIABgIIgBgGQgBgDgEgDIgGAVIgBAFIgDAIQgCAKgCADIgDAEIgGADIgHACIgDgBg");
	this.shape_5.setTransform(7.975,2.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAbQgEgDAAgDQAAgDACgCIAGgGIAGgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIgBABQgCAEAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQADAAACgDQACgCAAgDQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBgGgBQgIgDgDgDQgCgBAAgDQAAgGAEgGQAFgFAGgFQAGgDAHAAQAEAAACABIAFAEQACADAAADQAAADgCADQgCADgDACQgDACgCAAIgDgBIgBgBIABgCIABgIQAAgCgCgDIgEACIgCAFIgBAGIABACIACADIAGABIAJACIACABQACADAAADQAAAEgCADQgCADgFAEQgFAFgFABQgEACgGAAQgGAAgDgCg");
	this.shape_6.setTransform(-0.475,3.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHAhQgCgCgBgDIgBgGQAAgIAEgLQADgJAEgEQAAgBAAAAQAAgBABAAQAAAAABAAQABgBAAAAQADAAACADQACADAAAEQAAAFgCAJIgFASQgBAEgCABIgDABQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAgBgUIABgHQAAgEACgCIACgBIADAAIAEABIABAEIgBAHIgEAFQAAAAgBABQgBAAAAABQgBAAAAAAQgBAAAAAAQgEAAAAgFg");
	this.shape_7.setTransform(-4.225,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAWQgBgCgBgFIABgKIACgJIABgBIABgCIADgKQACgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQADAAABAFIACgCIACgCIACgBQAFAAAAAJIgCAJIgDAGQAAABAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgCAAAAgFIAAgGIgCgDQgBADgBAJIgBAIIAAABIAAACIgBAEIAAADIgBACQgFAEgDAAQgDAAgCgDg");
	this.shape_8.setTransform(-7.35,3.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQAiIgHgGIgFgHQgCgDAAgGIABgHIAEgHIAFgIIADgFIAEgEIAFgEIAEgDIAHgFIAHgCIAGgBQAHAAAEADQAEAEAAAGQAAAGgDAIQgEAGgFAEIgHAGQgEACgDAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIACgDIAEgHIAEgMIABgKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAgBIgFADIgHAMIgGAMQgCAHAAAGQAAAFABACQABABAAAAQAAAAABABQAAAAABAAQABAAABAAIAFgCQAKgDAKgHIAFgCQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIgBAGQgDAFgCACIgJAFIgMAFIgKACIgJgBg");
	this.shape_9.setTransform(-12.375,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AhMEgQgMgDgagKQgYgKgOgDQgZgEgMgDQgxgPgZhIQgQgtgCgwQgCgmAJgfIALgdQAIgSACgLIAIgmIAJgoQACgKACguQACgjAIgUQAFgLAHgJQAPgUAZgJIAwCEQAJAZAGALQAKAUAOALQAPAMAYAGQAQAEAcADIA6AFQATACAIgDQAJgDAJgJIAPgRIARgRQALgKAFgIQAHgJALgUIALgPIALgOQAJgPAGghQAGAAAFgFIAJgKQAGgHAFgCQAGgDAFACQAQAfAHAkIAEAeQAJBDgCBMQAAA6gHApQgJA2gXAoIgGALIgEAHQgFALgBAJQgFAEgHAKIgLAPQgHAHgMAGIgWAKIgjANQgUAIgQACQgPACgXgBIgngBIgtACIgLAAQgUAAgPgDg");
	this.shape_10.setTransform(0.0755,-0.24);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ah0EYQgegJgPgEIgWgEQgOgDgIgEQgrgTgZhHQgXhEAHg2QADgXALgkIAYhXQAJgjABgiIADgpQACgXAGgQIAHgNQAJgOAOgLQARgNANAFQAMAEAGAXIACAGQAGAWAHAGIAFgJIAMA2QALA0ARAWQATAXAlALQAYAHAqADQAsAEAUgLQALgHARgWIAjgvQAfgnAGgbQAGgbANABQAEgOAQgFIAFgBQAMgCAJAJQAHAGAEANIAEAWQACANAGAZQADAMADAkQAIBpgIBIQgKBhgmBHIgCAEQgLASgKALQgXAXgvAOQhBAShDAAQhDAAhAgTgAjRkIQgHAJgFAMQgJAUgBAiQgCAugCALIgKAoIgHAlQgDALgHATIgLAcQgJAgABAmQADAwAPAtQAZBHAyAPQAMAEAZADQANADAZAKQAZAKANADQASAEAcgBIAtgCIAmACQAXABAQgDQAQgCAUgHIAigOIAXgJQAMgGAHgIIALgPQAGgJAFgFQACgJAFgKIAEgIIAGgLQAWgoAJg2QAHgpABg6QABhLgIhDIgFgeQgHgkgPgfQgFgDgGADQgGACgGAHIgIAKQgGAFgGABQgGAggJAPIgKAPIgMAOQgLAUgHAJQgFAIgKALIgRARIgPAQQgJAJgJADQgJADgSgCIg7gFQgbgCgQgEQgYgGgQgNQgNgLgLgTQgGgMgJgZIgwiEQgYAJgPAUg");
	this.shape_11.setTransform(0.0322,0.0154);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bib, new cjs.Rectangle(-29.1,-29.9,58.3,59.9), null);


(lib.Arm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AjhntQhOiOheiKIDVh2QFOH5CWHaQBEDaAeDTIjPF3QgBgJgBgJQgkmZh8l5QgwiRg9iNQgviJg2hZQgXglgVggg");
	this.shape.setTransform(-4.8,-17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC9CA").s().p("AC9NqQgkmah9l4QgviQg9iOQgviJg2hZIgshEQhOiPheiKIDWh2QFNH5CVHaQBFDZAeDUIjQF3IgBgSg");
	this.shape_1.setTransform(-4.8,-17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arm, new cjs.Rectangle(-46.1,-107.8,82.6,181.39999999999998), null);


(lib.ahatRed = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AhYCAIAAj/IBMAAQAvAAAbAlQAbAlAAA1QAAA2gaAlQgaAlgnAAgAg8BlIAvAAQAjAAATgdQATgcAAguQAAgmgSgeQgSgfglAAIgvAAg");
	this.shape.setTransform(3.025,-5.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhXA8IAZgGQAPA0AzAAQAbAAAOgNQAOgNAAgVQAAgRgLgKQgKgKgOgEIgtgMQgRgFgLgHQgMgHgHgPQgIgPAAgTQAAghAVgTQAWgTAhAAQA+AAATBAIgZAIQgFgWgRgMQgQgLgTAAQgSAAgOALQgPALgBAUQAAAdAlAKIAqALQA6APAAA3QAAAhgVAWQgWAXgoAAQhGAAgWhKg");
	this.shape_1.setTransform(-5.75,-14.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AIFE+QnVjQofDQQhCAZhDAvIAAlZQAAi0C4h/QC4h/EEAAQEFAAC3B/QC5B/AAC0IAAFZQg3gvg5gZg");
	this.shape_2.setTransform(0.75,-3.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AqKA5IAeAAQBCgnBCggQIgjPHVDPQA4AgA3AnIAPAAIAAAtQrBk1pUFFg");
	this.shape_3.setTransform(0,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ahatRed, new cjs.Rectangle(-65.1,-42,130.2,84.1), null);


(lib.arcadebuttonyellow = function(mode,startPosition,loop,reversed) {
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
	this.shape_27.graphics.f("#FFCC00").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
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
	this.shape_6.graphics.f("rgba(255,255,255,0.075)").s().p("AAICaIAAgBQAEgBABgEQACgDgCgEQgwiLAjiOQABgEgBgDQgCgFgEgBIgCAAIABgBIABAAQAFABABAFQADAEgBAFQgjCNAwCKQACAFgCAEQgCAFgEABIgBgBg");
	this.shape_6.setTransform(-35.7008,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.055)").s().p("AAHCcQAEgCACgFQACgEgCgFQgwiKAjiNQABgFgCgEQgCgEgFgCIgBAAIAAgCIACAAQAFACACAFQACAFgBAFQgiCNAwCKQACAFgDAFQgCAFgFACIAAgBg");
	this.shape_7.setTransform(-35.5135,6.875);

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
(lib.MPHFinalJGaribay = function(mode,startPosition,loop,reversed) {
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
		this.Chain.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
		
		
		
		
		
		
		this.reset.addEventListener("click", ClickToMove.bind(this));
		
		function ClickToMove()
		{
			this.shirt.x = 175;
			this.shirt.y = 316;
			this.shades2.x = 853;
			this.shades2.y = 303;
			this.ArmL.x = 758;
			this.ArmL.y = 476;
			this.Nose.x = 907;
			this.Nose.y = 133;
			this.Mouth.x = 899;
			this.Mouth.y = 174;
			this.Chain.x = 94;
			this.Chain.y = 82;
			this.bib.x = 261;
			this.bib.y = 90;
			this.hat1.x = 738;
			this.hat1.y = 63;
			this.Hat2.x = 792;
			this.Hat2.y = 149;
			this.Watch.x = 734;
			this.Watch.y = 244;
			this.eye1.x = 851;
			this.eye1.y = 63;
			this.Eye2.x = 904;
			this.Eye2.y = 63;
			this.Shades.x = 864;
			this.Shades.y = 247;
			this.tail.x = 759;
			this.tail.y = 351;
			this.RArm.x = 872;
			this.RArm.y = 478;
		}
		
		this.Fit1.addEventListener("click", ClickToMoveFit1.bind(this));
		
		function ClickToMoveFit1()
		{
			this.shirt.x = 509;
			this.shirt.y = 429;
			this.shades2.x = 505;
			this.shades2.y = 248;
			this.ArmL.x = 401;
			this.ArmL.y = 431;
			this.Nose.x = 501;
			this.Nose.y = 257;
			this.Mouth.x = 504;
			this.Mouth.y = 314;
			this.Hat2.x = 499;
			this.Hat2.y = 157;
			this.eye1.x = 472;
			this.eye1.y = 243;
			this.Eye2.x = 533;
			this.Eye2.y = 243;
			this.RArm.x = 606;
			this.RArm.y = 440;
		}
		
		this.Fit2.addEventListener("click", ClickToMoveFit2.bind(this));
		
		function ClickToMoveFit2()
		{
		
			this.Chain.x = 503;
			this.Chain.y = 396;
			this.RArm.x = 389;
			this.RArm.y = 435;
			this.ArmL.x = 608;
			this.ArmL.y = 447;
			this.hat1.x = 499;
			this.hat1.y = 157;
			this.shades.x = 503;
			this.shades.y = 247;
			this.Watch.x = 388;
			this.Watch.y = 457;
			this.Nose.x = 506;
			this.Nose.y = 260;
			this.Mouth.x = 504;
			this.Mouth.y = 314;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.Hat2 = new lib.BlueHat();
	this.Hat2.name = "Hat2";
	this.Hat2.setTransform(792,149);

	this.hat1 = new lib.ahatRed();
	this.hat1.name = "hat1";
	this.hat1.setTransform(738,63);

	this.Chain = new lib.Chain();
	this.Chain.name = "Chain";
	this.Chain.setTransform(94,79.5,1,1,0,0,0,0,-2.5);
	new cjs.ButtonHelper(this.Chain, 0, 1, 1);

	this.Eye2 = new lib.Eye2();
	this.Eye2.name = "Eye2";
	this.Eye2.setTransform(904,63);
	new cjs.ButtonHelper(this.Eye2, 0, 1, 1);

	this.eye1 = new lib.eye();
	this.eye1.name = "eye1";
	this.eye1.setTransform(851,63);
	new cjs.ButtonHelper(this.eye1, 0, 1, 1);

	this.Watch = new lib.Watch();
	this.Watch.name = "Watch";
	this.Watch.setTransform(734,244);
	new cjs.ButtonHelper(this.Watch, 0, 1, 1);

	this.shades2 = new lib.Sunglasses();
	this.shades2.name = "shades2";
	this.shades2.setTransform(853,303);
	new cjs.ButtonHelper(this.shades2, 0, 1, 1);

	this.Nose = new lib.Nose1();
	this.Nose.name = "Nose";
	this.Nose.setTransform(907,133);
	new cjs.ButtonHelper(this.Nose, 0, 1, 1);

	this.Mouth = new lib.Mouth();
	this.Mouth.name = "Mouth";
	this.Mouth.setTransform(899,174,1.2941,1);
	new cjs.ButtonHelper(this.Mouth, 0, 1, 1);

	this.bib = new lib.Bib();
	this.bib.name = "bib";
	this.bib.setTransform(261,89.8,2.8933,2.2624,0.4715,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.bib, 0, 1, 1);

	this.shades = new lib.Sunglasses1();
	this.shades.name = "shades";
	this.shades.setTransform(864.25,247,2.6566,2.2973,0,0,0,0.1,0);
	this.shades.alpha = 0.6797;
	new cjs.ButtonHelper(this.shades, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAtIABgFIAEgGIAEgFIALgGIgGgLIgFgMQgGgNAAgLQAAgJACgFQACgGAFgCIAIgBQAEAAACADQACAEABANQACAPADAMIABAHIADgKIAGgNIADgLIABgDQACgHAEgEIAGgFIAFgBQAGAAgBAEIgBAGIgEAKIgEANIgHAMQgGANgGAJIgJALIgKAJIgLAGQgEACgEAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBg");
	this.shape.setTransform(935.6,616.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghAfQgFgGAAgIQAAgFACgHQADgHAFgGQAHgMAMgHQALgIALAAQAJAAAHAEQAGADAAAGQAAAFgDAEQAEAAABABIABAEIgBADIAAANIAAAFIAAAEIABADIABAHQgEAEgEACQgEACgEAAQgLAAAAgTIAAgDIAAAAIAAAAIgBAAIgLANIgKAIQgFACgEAAQgJAAgFgFgAACgXQgFAIgEAHQgEAIAAAFQAAAEABADQABABAAAAQABABAAAAQABAAAAABQABAAAAAAQADAAAEgFQAGgEAHgHIACgCIgBABIgIABQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIABgDQAFgGAAgGIgCgGQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABgBAAg");
	this.shape_1.setTransform(927.675,615.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAuQgEgEgDgGIgFgNIgDgQIgCgVIgEAHIgEAHIgCAFIgGAOIgGAKIgEAIIgEAEQgEAEgGACQgFADgEAAIgDgBQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgDIAGgHIADgHIAMgVIAEgHIARgfIAEgKQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgCgCQAAgDAEgBQAEgBAFAAQALAAAEAFQADACACAJIAEAXIAAABIAAABIAAABIABACIABAMIADAFIACgDQARgmAHgNIADgCIACgBIACgCQAGgCAIAAIAFAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIgBAEIAAATQAAAOACALIADAPIAGAKIAEAFQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAACgDAEQgHAGgHAAQgIABgIgJQgEgEgCgEQgCgEgBgIIgCgRIgBgMIgIAOIgEAKIgFAJIgLAVIgBABIAAAAIgDACIgCABQgDAAgDgEg");
	this.shape_2.setTransform(915.4,613.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAsQgFgGgBgIIACgKIAEgQIAAgDIABgCIgEgBIgBgEQAAgEAEgEQADgFAFgBIAAAAQAFgOADgGIAEgEQAFgEAFAAIAFABQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIgBAHQgEAJgCAHIADABIAFABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAEgCADQgBAEgDABIgIACIgDAHIgBAMIgBAFQABAMAKAAIABAAIABAAIABAAIgDAEIgFAFQgEACgEABIgFACQgIAAgEgFg");
	this.shape_3.setTransform(900.75,613.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAgQgDgDAAgHIACgOIADgOIABgCIAAgCQADgKACgFIAFgHQADgDADAAQAFAAABAHIACgCIADgEIADgBQAGAAAAANQABAHgCAGIgDAJQgDAEgCAAQgDAAABgIIgBgHIgCgFQgCAFgBANIgBALIAAABIAAAEIgBAGIgBAEIgCADQgFAFgGAAQgEAAgCgEg");
	this.shape_4.setTransform(895.7,615.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgzAyQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgCAIgLIAEgGQgIgCAAgEQAAgDAHgGIAFgEIAJgBIAHgNIAFgHIAFgLIAJgPIgEgIIADgCQAEgCAIAAQAIAAAFAFQAEAEACAHIAFAVIABAKIAEALIADAJIACAFIACAFIAHAPQgGAFgEABQgEACgEAAQgEAAgDgBQgDgCgCgEIgGgNIAAgCIgBgDQgJAEgFAAIgDgBIgQAAIgBACQgEAIgDAFQgEAEgEACQgFACgHAAIgGgBgAgIAJIATAAIgGgcIgBAAg");
	this.shape_5.setTransform(887.825,613.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjAtQgCgEAAgHIABgUIAFgWIAHgVIAGgKIAFgHIAFgBQACAAACACQACACABADIgBAHIgBAHIAAABIADgFIAEgJIAGgGIAEgCIAFgBQAGAAAEADQAFADACAGQADAHgBAIQAAALgEAKQgGAKgIAHQgIAGgKAAQgDAAgEgCQgEgCgDgGIAAACIgBABIgHAXQgDAHgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgEAAgCgEgAAHgYIgGAJQgFAKgDAHIgBADQABAGAHAAQADAAADgEQADgDACgFQACgHAAgGIAAgKQAAgBAAAAQgBgBAAgBQAAAAAAAAQgBgBAAAAIgEAEg");
	this.shape_6.setTransform(874.2,616.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAgAkIgDgFIgCgGIAAgJIABgPIgBgBIgBACIgVAUIgFAGIgFABQgEAAgDgDQgDgDAAgFIAAgHIAEgKIABgCIABgCIAAAAIgOAPIgKAKQgCAEgEABIgEACQgFgBgDgDQgCgEAAgHQAAgHAGgSIAKgVQAFgIAHAAQAEAAADACQACACAAADQAAAGgEALIgEAJIABABIAIgLIAPgRQAHgGAFgBIAGACIADAFIABAFQAAAEgEAMIgBAFIgCADIAAAAIADgCIACgBIABgDIAKgKIAIgIQADgCADAAQAFAAACADQACAEABAFIgBANIgCAMIgBAIIAAAEIACAFIABAGIABAGQgBADgDABQgDACgEAAQgGABgGgGg");
	this.shape_7.setTransform(864.2,615.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAiQgIgDgFgEQgFgGAAgLQAAgIADgIQAFgIAHgHQAHgHAJgEQAHgEAJAAQALAAAAADQAAADgFAAQgGAAgFADQgFADgDAFQgEAGgCAGQgCAHAAAGQAAAIADAFQAEAFAFAAQAGAAADgGQAFgGAAgHQAAgGgDgFQgCgGgGgDIgCgDIAEgDIAHgEIAHgBQAEAAADABIAEAFQADAEABAEQABAEAAAFQAAAGgCAIQgEAHgEAFQgHAGgIAEQgIAEgIAAQgHAAgHgDg");
	this.shape_8.setTransform(854.4,614.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAwQgGgDgFgEQgEgEgCgGQgDgGAAgGIACgLIAEgMIAIgMIAEgHIAFgGIAHgFIAGgFIAKgFIAKgFIAJgBQAJAAAFAGQAGAEAAAJQAAAJgFAKQgEAKgIAHQgEAFgGADQgFADgEABQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIACgEIAFgLIAFgQQACgKAAgFQAAgBAAgBQAAgBAAgBQAAAAgBAAQAAgBgBAAQgBAAgFAFQgGAHgFAKQgEAJgEAJQgCAKAAAIQAAAIABACQACADAFAAIAIgCQANgFAOgJIAIgEQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAAQAAADgCAFQgEAIgCACQgFAFgJADQgIAEgIADQgIACgGAAQgHAAgFgCg");
	this.shape_9.setTransform(845.7,613.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiAuIABgGIACgGIAGgFIAKgGIgGgMIgFgKQgGgOAAgLQAAgJACgGQACgEAFgCIAIgCQAEAAADAEQABADABAOQABAOADANIACAGIADgKIAGgNIADgKIABgEQACgHAEgEIAFgEIAGgCQAFAAABAEIgCAHIgEAKIgEALIgHAOQgGAMgHAJIgJALIgKAJIgKAGQgEACgEAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_10.setTransform(898.4,597.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghAfQgFgGAAgIQAAgFACgHQADgHAFgGQAHgMAMgHQALgIALAAQAJAAAHAEQAGADAAAGQAAAFgDAEQAEAAABABIABAEIgBADIAAANIAAAFIAAAEIABADIABAHQgEAEgEACQgEACgEAAQgLAAAAgTIAAgDIAAAAIAAAAIgBAAIgLANIgKAIQgFACgEAAQgJAAgFgFgAACgXQgFAIgEAHQgEAIAAAFQAAAEABADQACADACAAQADAAAEgFQAGgEAHgHIACgCIgBABIgIABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIABgDQAFgGAAgGIgCgGQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBABgBAAQAAABgBAAg");
	this.shape_11.setTransform(890.475,596.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAxQgGgDgDgGQgCgHAAgIQAAgIACgKQADgIAEgLQAFgKAGgJQAHgLAIgGQAGgEAGAAQAHAAAEAEQAEAEAAAHQAAAEgEAGQgDAFgGAEQgFADgGAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIACgEQADgEADgGQACgFAAgFQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQgCAAgDAFIgFALQgFAPgDANQgDANAAAJQAAAIACAEQADAFACAAQAEAAADgFQADgFAAgHIgCAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQgBgCAAgDQAAgGAEgJQAEgIAEgFQAEgCAEAAQADAAADACQACACABAEIABAIQAAAOgFAMQgGAMgKAHQgJAHgKAAQgHAAgFgEg");
	this.shape_12.setTransform(882.775,594.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKAwIgFgGIgBgJQABgMAEgPQAEgPAHgGQAAgDAEAAQAFAAACAEQADADAAAHQAAAIgDAMIgHAaQgCAGgCACIgFABQgDAAgCgDgAgCgeQAAgEACgFQABgGACgCIADgCIADgBQAEAAACACQACACAAAEQAAAFgCAFQgDAFgDADQgCACgEAAQgFAAAAgIg");
	this.shape_13.setTransform(877.45,595.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAgQgCgDAAgHIACgOIADgOIABgCIAAgCQADgKACgFIAFgHQADgDADAAQAFAAABAHIACgCIADgEIADgBQAGAAAAANQAAAHgBAGIgEAJQgCAEgCAAQgCAAAAgIIgBgHIgCgFQgCAFgBANIAAALIAAABIgBAEIgBAGIgBAEIgCADQgGAFgFAAQgEAAgDgEg");
	this.shape_14.setTransform(873.1,596.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghAfQgFgGAAgIQAAgFACgHQADgHAFgGQAHgMAMgHQALgIALAAQAJAAAHAEQAGADAAAGQAAAFgDAEQAEAAABABIABAEIgBADIAAANIAAAFIAAAEIABADIABAHQgEAEgEACQgEACgEAAQgLAAAAgTIAAgDIAAAAIAAAAIgBAAIgLANIgKAIQgFACgEAAQgJAAgFgFgAACgXQgFAIgEAHQgEAIAAAFQAAAEABADQACADACAAQADAAAEgFQAGgEAHgHIACgCIgBABIgIABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIABgDQAFgGAAgGIgCgGQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBABgBAAQAAABgBAAg");
	this.shape_15.setTransform(866.525,596.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgQA+IgJgEQgEgDAAgDIACgEIAGgFQAFgEACAAQACAAADAEIAJAIIAEgOIADgOQgHAHgGADQgGAEgGAAQgIAAgGgEQgFgEgDgHQgDgGAAgKQAAgLAGgMQAGgMALgLQAKgKALgHQAMgGAMAAQASAAAAAQQAAAGgDAGQgDAGgGAEQgGADgGAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIABgDIADgIIABgKQAAgGgBAAQgDAAgHAFQgGAFgEAFIgFAMIgFAOIgCAMQAAAGADAEQACADAEAAQAGAAAIgQIADgGIADgCQAFgDAGgCQAHgCAEAAQAFAAAAAEIgBADQgFAVgHASQgIASgHAHQgDAEgGACQgHACgFAAQgGAAgFgCg");
	this.shape_16.setTransform(857.725,596.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeA3QgGgIAAgKQAAgHADgGQACgHAEgEIAFgEIAEgBIACABIABAEIgBAEQgDAOAAAKQAAAFACAEIAEgJIAHgZIAGgdIAEgfIgDABIgBAAIgEABQgNAEgEAAQgDAAgDgBQgCgCAAgDQAAgEAEgFQADgGAEgBIAJgCIANgBQARAAAIACQAHACABAEIgEAPIgFAWQgLAmgOAaQgDAGgDAEQgEAEgDACQgEACgEAAQgGAAgGgJg");
	this.shape_17.setTransform(845.1,596.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag0BTQgEgKgBgOIABgVIAEgaIAFgeIAHgdQAGgWAHgNQAGgJAIAAQAMAAAAAaQAAASgFAjIABAAIAFgNIASgcQAGgJAGgEQAEgFAGAAQAIAAADAIQAEAHAAASIgBAUIgBAjIABAeIADAOIABAJQgBADgBACQgDAFgGAEQgHADgEAAQgHAAgFgHQgGgIgDgMQgDgNAAgQIACgZIgBgBIgIAOIgFAKIgXAqIgHAOQgEAGgFABQgIgBgFgIg");
	this.shape_18.setTransform(553.85,58.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfBXQgMgHgHgLQgKgPAAgbQAAgWAHgVQAGgVANgRQALgSAOgKQANgKAPAAQARAAAAAGQAAAIgIAAQgKABgIAIQgIAHgFANQgHAOgEARQgEAQAAARQABAVAFAMQAHAMAJAAQAJAAAHgPQAGgOAAgTQAAgPgEgOQgFgNgHgKQgEgEAAgCQAAgDAFgFQAGgGAGgEQAHgEAFAAQAFAAAFAFQAFAEADAIQAFAIABAKQACALAAAMQAAATgEATQgGATgHAMQgKAPgOAJQgOAKgMAAQgNAAgMgGg");
	this.shape_19.setTransform(540.9,57.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AggBOQgJgOAAgWQAAgVAFgWQAHgXAKgVQALgVAMgOQAJgKAJAAIAAAAQAKAAAFAIQAGAHgBANQAAALgDAMQgFALgGAHQgGAHgHAAQgDAAAAgEIABgGQAFgMAAgQQAAgIgCAAQgBAAgDAGQgEAHgCAJIgFAfQgCAPAAALQAAANACAHQACAHAEAAQAEAAAHgHQAHgGAGgKQADgFABAAQAEAAAAAFQAAAXgMASQgIAMgKAIQgKAHgIAAQgOAAgJgNg");
	this.shape_20.setTransform(529.65,58.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag3BOQgIgOAAgVQAAgOAEgSQAEgRAIgRQAMgcATgUQATgUASAAQAPAAAKAKQAKAJAAAPQAAALgFANQAHAAABACQACACAAAIIgBAHIAAAiIAAAMIAAAKIABAJQABAJACAIQgHALgHAFQgGAFgHAAQgSAAAAgwIAAgIIAAAAIAAAAIgBAAQgLAUgIANQgJANgIAGQgIAHgHAAQgNAAgJgOgAAEg7QgKATgHATQgGAUAAAOQAAALACAGQADAHAEAAQADAAAJgMQAJgLAMgSIADgEIAAgBIgCABQgJAEgEAAQgEAAAAgEIACgHQAGgPAAgOQAAgIgCgHQgBgGgDAAQgBAAgEAGg");
	this.shape_21.setTransform(518.175,58.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgsCTQgJgDgFgGQgFgFAAgHQAAgFACgFQACgFAFgIIAAgBQgDACgDAAQgHAAgEgGQgEgGAAgKQAAgGADgVIAIgrIAPhCQAEgSAFgRIgDACQgIAFgEAAQgEAAAAgGQAAgGAEgLQADgMAFgFQAIgNASgHQASgHAVAAQANAAALADQALAEAIAHQAHAHAEAJQAEAKAAAMQAAARgFANQgEAOgJALQgLANgLAEIgDABIAAABQAqAIAAAtQAAAJgCAKIgFATQgFAJgFAIQgLARgPAPQgRAPgPAJQgPAJgLAAQgKAAgIgDgAgMgGIgBAFQgGAdgFASQgEATgGANQgCAHgHAJIAVAJQAHACAGAAQAGAAAFgDQAGgDAEgIQAHgKAFgPQAEgPAAgOQAAgPgGgLQgEgFgEgDQgEgDgIgBIgIgDIgFgHIgBAFgAAGhrIgPBRIADABQAGAAAIgJQAKgMAGgMQAGgNgBgNQAAgZgQAAQgGAAgBACg");
	this.shape_22.setTransform(503.25,56.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAUIABgLIADgKQADgNADgEQAEgFAFgEQAHgDAGAAQAHAAAAANQAAANgFARQgBAFgBACQgCADgEACQgJAGgHAAQgKAAAAgLg");
	this.shape_23.setTransform(486.35,63.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhAB8QgDgEAAgHQAAgIADgOQABgPAJgmIACgKIACgLIAWhkIABgHIgHABIgGADIgGADQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQgBgDAAgDQAAgIAEgHQAEgIAFgDQAIgFALgCQALgDAKAAQAMAAALADQAJADAJAGQAHAGAGAJQAGAJADAMQADAMAAAOQAAAMgDAPQgDAPgGAOQgFAOgHAKQgIAMgLAIQgMAIgLAAQgCAAgEgCQgDgCAAgEQAAgFACgEQADgFAGgHQAFgFAFgHQAHgKACgLQADgLAAgQQAAgPgDgLQgDgLgIgIIgQBRIgCAPIgGAdQgFAkgGAOIgFAMQgGAIgJAGQgJAGgGAAQgFAAgBgEg");
	this.shape_24.setTransform(476.85,54.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgpBiQgHgIAAgOQAAgKAEgKQAGgKAHgHQAIgGAGAAQAGAAAAADIgBAGQgFANgBALQAAAIAFAHQAGAAAGgKQAFgLAAgLQAAgJgEgEQgCgGgNgGQgTgIgGgLQgFgHAAgMQAAgWAKgVQAKgVAPgOQAPgOAQAAQAHAAAHAGQAGAGAEAJQAFAJAAALQgBAKgEAMQgEALgHAIQgGAHgGAAQgEAAgCgCQgCgDAAgCIAAgIQADgQAAgMQABgLgFgLIgIAKQgEAJgCAKQgDAKABAKQAAAHABAEQACAEAEACQAFADAIAEQAPAFAHAFIAEAFQAFAIAAAMQgBANgFANQgEANgMAOQgLAPgLAGQgLAHgNAAQgNAAgIgJg");
	this.shape_25.setTransform(457.55,59.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSB5QgEgHgCgJQgCgIAAgOQAAgfAIgmQAHgmAJgRQADgIAGAAQAHABAFAJQAEALAAAPQAAAXgFAfQgEAggIAjQgDANgDAFQgEADgEAAQgFgBgFgHgAAFg5QgKAAAAgVQAAgKADgNQADgOAEgHIAEgEQACgCAEAAQAGAAADAFQADAFAAAKQAAANgDAMQgDALgFAIQgFAIgFgBg");
	this.shape_26.setTransform(449.075,54.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgfBSQgDgIAAgSQAAgPACgVQACgUADgRIABgFIABgFQAEgZAEgMQADgMAGgHQAEgGAGAAQAIAAACAQIADgFIAFgJQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQALAAAAAfQAAASgDAQQgCAQgDAJQgEAKgEAAQgEAAAAgWIgBgTQgBgHgBgEQgEAKgBAlIgCAbIAAADIAAAJIgBAPIgDAKIgEAIQgIAMgJAAQgIAAgDgIg");
	this.shape_27.setTransform(442,57.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AglB6QgKgGgHgLQgHgMgEgPQgEgOAAgSQAAgMACgPQADgPAFgPIALgfIAIgQIAJgQQAFgHAGgHIAKgMQAIgIAIgHQAJgGAIgEQAIgDAGAAQAQAAAJANQAIAMAAAXQAAAYgHAZQgHAZgNATQgIANgJAIQgIAHgHABQgGAAAAgJQAAgEAEgHQAEgLAGgSQAEgTAEgWQADgYAAgPQAAgKgDAAQgDAAgHAMQgLASgHAXQgJAYgEAYQgFAZAAAXQAAASADAIQACAGAHABQAHAAAIgGQAVgNAXgXQAKgLADAAQAEAAAAAHQgBAIgDALQgGAUgFAHQgHAKgOAKQgNALgOAGQgNAHgJAAQgLAAgKgHg");
	this.shape_28.setTransform(430.475,54.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shades},{t:this.bib},{t:this.Mouth},{t:this.Nose},{t:this.shades2},{t:this.Watch},{t:this.eye1},{t:this.Eye2},{t:this.Chain},{t:this.hat1},{t:this.Hat2}]}).wait(1));

	// Character
	this.shirt = new lib.ShirtNu();
	this.shirt.name = "shirt";
	this.shirt.setTransform(175,316);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000FF").s().p("AgJAZIAAgrIgMAAIAAgJIAMAAIABgTIAJgBIAAAUIARAAIAAAJIgRAAIAAAtQAAAMANAAIAJgBIAAAJIgLABQgVAAAAgXg");
	this.shape_29.setTransform(289.15,562.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000FF").s().p("AgXAdQgKgMAAgQQABgSAJgKQAKgLAOAAQAPAAAJAKQAIAKABATIg1AAQAAARAGAFQAIAHAGAAQAPAAAFgPIALACQgDAJgJAHQgIAGgMAAQgOAAgJgKgAgMgXQgGAGgBALIAnAAQAAgHgBgEQgDgGgEgDQgFgDgGAAQgIAAgFAGg");
	this.shape_30.setTransform(283,563.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0000FF").s().p("AgfASIALgDQAEAOASABQAIAAAFgDQAFgEAAgGQAAgJgNgCIgPgDQgJgBgFgFQgGgFAAgIQAAgJAIgHQAHgGANAAQAXAAAFATIgKACQgFgMgNAAQgHAAgEAEQgFACAAAGQAAAHAMADIANADQAXADAAARQAAAKgJAHQgIAGgOAAQgZAAgHgVg");
	this.shape_31.setTransform(275.475,563.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0000FF").s().p("AgXAdQgKgMAAgQQABgSAJgKQAKgLAOAAQAOAAAKAKQAIAKABATIg1AAQgBARAIAFQAHAHAGAAQAOAAAGgPIALACQgDAJgJAHQgIAGgMAAQgNAAgKgKgAgMgXQgGAGgBALIAnAAQAAgHgCgEQgCgGgEgDQgEgDgHAAQgHAAgGAGg");
	this.shape_32.setTransform(268.25,563.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0000FF").s().p("AAXAyIgSgrIgcAAIAAArIgMAAIAAhjIAnAAQAPAAAIAJQAIAIAAALQAAAIgEAHQgFAGgKAEIAUAugAgXgCIAZAAQAKgBAFgFQAGgGAAgHQgBgIgFgFQgGgEgHAAIgbAAg");
	this.shape_33.setTransform(260,562.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgiAzIAAgKQApggAIgJQAIgKAAgJQAAgKgHgGQgHgFgJAAQgIAAgHAGQgHAGgBALIgLgDQAHgeAbAAQAQAAAKAJQAJAIAAANQAAAJgEAIQgFAHgNAMQgMAKgUAPIA2AAIAAAKg");
	this.shape_34.setTransform(183.075,561.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgIAZIAAgrIgOAAIAAgJIAOAAIAAgTIAKgBIAAAUIARAAIAAAJIgRAAIAAAtQgBAMAMAAIAJgBIAAAJIgKABQgVAAABgXg");
	this.shape_35.setTransform(172.65,561.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFAyIAAhJIALAAIAABJgAgFgkIAAgNIALAAIAAANg");
	this.shape_36.setTransform(168.675,561.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIA9AAIAAALIgwAAIAAAfIAnAAIAAAJIgnAAIAAAwg");
	this.shape_37.setTransform(163.675,561.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgiAzIAAgJIAeAAIAAhNQgOAOgNAIIAAgNQATgKALgOIAIAAIAABcIAcAAIAAAJg");
	this.shape_38.setTransform(83.25,561.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgJAZIAAgrIgMAAIAAgJIAMAAIABgTIAJgBIAAAUIARAAIAAAJIgRAAIAAAtQAAAMANAAIAJgBIAAAJIgLABQgUAAgBgXg");
	this.shape_39.setTransform(72.25,561.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFAyIAAhJIALAAIAABJgAgFgkIAAgNIALAAIAAANg");
	this.shape_40.setTransform(68.275,561.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgeAyIAAhjIA9AAIAAALIgwAAIAAAfIAnAAIAAAJIgnAAIAAAwg");
	this.shape_41.setTransform(63.275,561.3);

	this.Fit2 = new lib.arcadebuttonblue();
	this.Fit2.name = "Fit2";
	this.Fit2.setTransform(171.75,565.15);
	new cjs.ButtonHelper(this.Fit2, 0, 1, 2, false, new lib.arcadebuttonblue(), 3);

	this.reset = new lib.arcadebuttonred();
	this.reset.name = "reset";
	this.reset.setTransform(273.2,565.15);
	new cjs.ButtonHelper(this.reset, 0, 1, 2, false, new lib.arcadebuttonred(), 3);

	this.Fit1 = new lib.arcadebuttonyellow();
	this.Fit1.name = "Fit1";
	this.Fit1.setTransform(70.35,565.15);
	new cjs.ButtonHelper(this.Fit1, 0, 1, 2, false, new lib.arcadebuttonyellow(), 3);

	this.tail = new lib.Tail();
	this.tail.name = "tail";
	this.tail.setTransform(758.8,350.55);
	new cjs.ButtonHelper(this.tail, 0, 1, 1);

	this.ArmL = new lib.LArm();
	this.ArmL.name = "ArmL";
	this.ArmL.setTransform(758.1,476.25,1.0136,0.928,0,28.4415,-151.5592,-0.2,0.2);
	new cjs.ButtonHelper(this.ArmL, 0, 1, 1);

	this.RArm = new lib.Arm();
	this.RArm.name = "RArm";
	this.RArm.setTransform(872.1,478.1,1,1,-6.1969,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.RArm, 0, 1, 1);

	this.pig = new lib.Piggy();
	this.pig.name = "pig";
	this.pig.setTransform(499.8,361.5,2.9709,2.7908,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.pig, 0, 1, 1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgCANQgIgCgCgFQgDgGAEgGQAEgGAHABIAAgBQAIACAEAEQADAEgBAEQgBAGgEACIgJAEg");
	this.shape_42.setTransform(-68.5518,240.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.pig},{t:this.RArm},{t:this.ArmL},{t:this.tail},{t:this.Fit1},{t:this.reset},{t:this.Fit2},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shirt}]}).wait(1));

	// Frame
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_43.setTransform(480,320);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_44.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(410,329,564.7,302);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FF0000",
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