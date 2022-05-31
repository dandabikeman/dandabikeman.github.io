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


(lib.tophat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AE3BwIgXBtIphAAIgfh9QiuALgsBvQgkBZEuAYQBEAGBXACQHPALBPgNQCtgWAJhUQAJhUkRgjgAlgBgIhum3INlAAIhgHH");
	this.shape.setTransform(0.0226,0.0074);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3300").s().p("AiVB3QhXgChEgGQkugYAkhYQAshvCugLIAfB8IJhAAIAXhsQERAjgJBTQgJBUitAWQgqAHiXAAQiFAAjYgFg");
	this.shape_1.setTransform(0.0226,22.0074);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkmEbIgeh+Ihum3INlAAIhgHIIgYBtg");
	this.shape_2.setTransform(-2.75,-6.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tophat, new cjs.Rectangle(-58.5,-35.4,117.1,70.8), null);


(lib.stem = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#996600").s().p("AibC4IAAgPIAAgPIAAgPQAAgEABgDQABgFADgDIAFgIIAAgHIAAgIIAAgHIAEgHIANgQIACgHIABgIIAAgHIADgIIAEgIIADgHIAAgHIAAgIIAVgiIABgHIAGgFIAKgSQARgfAPgfIAGgHIAJgIIAEgIIADgHIADgIQANgKAJgMQAHgJAKABIAFAAQAEAIAAAHQAAAIgEAHIgIAHIgKAIQgCAEgBAEIgDAHIgDAIQgOASgLAUQgIAPgMAMIAQAAQACACADABIAOACIAAAFQADADADABQAKADALAAIAJgIIAGgHIACgBIBQABIAPAIQAIADAHAFIAPAOQAAAEgBADQgCAEgFACQgIACgJAAIgMgHIgKgFQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIg8ABIgHgFQgZgRgaAHQgDABgDAEIAAAHIABADIgkABQgGADgFAFQgCADgCAEIgFADIAAAAIgKAIIgBAIIgBAHIAAAIIgGAXIgJAWIgDAHIgHAIIgFAHIAAAIIAAAHIgDAIIgDAHIgEAIIAAAPIAAAPIAAAPg");
	this.shape.setTransform(-8.225,0.0197);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339900").s().p("Ag/BLQgUgLgRgQQgUgTgdgFIgJgIIgDgEIgBgEIABgHQACgDAEAAQAagHAZAPIAHAFIA9AAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAKAFIANAIQAJAAAHgDQAEgBACgFQACgDAAgDIgPgNQgHgFgHgEIgPgHIhRgBIgBABIgGAHIgKAIQgLAAgKgDQgEgBgCgEIgBgFIgOgCQgCAAgCgCIgBgCIgBgHQABgEADgDIAJgGQAPgCAPgFQANgFAMgIQAEgEAFgBQAXgHAXgGIAAgCIBoADIAKAIIAIAHIAUAHIAWAIIAKAIIAXAWIANAOIAPAQQAEAGADAIIgBAHIgCAHIgFAIIgMAIIgCAAIgrAGQgqAFgaAOQgCACgDAAQgqADgsAAIgRgJg");
	this.shape_1.setTransform(6.1167,-2.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stem, new cjs.Rectangle(-23.8,-18.3,47.7,36.7), null);


(lib.smile3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AiugHQgcgigbgvIHLAAQgdAzgoAnQgZAZgdAVQiVBpiEigIFPAJ");
	this.shape.setTransform(0,0.0263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiugHIFPAJIlPgJQgcgigbgvIHLAAQgeAzgnAnQgZAZgeAVQg7Apg3AAQhWAAhQhgg");
	this.shape_1.setTransform(0,0.0263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smile3, new cjs.Rectangle(-24.5,-10.4,49,20.9), null);


(lib.smile2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AE0hPQgBgrASgpIqJAAQALArARApQAuBxBRA/QAKgIARgKQAkgVAmgJQB4ggBmBZQBNg9BNh8gAipBhQA1ApBCATQBmAdBmhQAkohPQFbBMEBhM");
	this.shape.setTransform(0,-0.0124);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgqA2QhCgSg1goQAKgJASgKQAjgUAmgKQB4gfBmBYQhLA6hLAAQgaAAgcgIg");
	this.shape_1.setTransform(-0.825,10.2258);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AhJAkQgmAJgkAVQgRAKgKAIQhRg/guhxQFbBMEAhMQhMB8hOA9QhlhZh4Agg");
	this.shape_2.setTransform(0.525,1.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkoAXQgQgogMgrIKJAAQgSApABAqQiBAmiXAAQiWAAiugmg");
	this.shape_3.setTransform(0,-10.3375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smile2, new cjs.Rectangle(-33.5,-17.4,67,34.9), null);


(lib.smile = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AFKABQglgEgcgPQgCgBgBgBQgygeAwgwAjwgTQgZAYhAgNAjlhiIAEASQADAWgFAQQgEAOgJAJQABAJAnAgQAwAoA6AUQCyA+Cyik");
	this.shape.setTransform(0,0.0198);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smile, new cjs.Rectangle(-36,-12.9,72,25.9), null);


(lib.mustache = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAhAQAAgBAAgBQANgUAdgOQAygaAzgMQCkgkBzB7IAkAZQAtAaAtALQCRAlBch8QgkBFg4A/QhwB+i0g1Qi1g0hyg0QhjgrgHgkQAAgFAAgEIAAgBQgMgUgdgOQgygbgzgLQikglhzB8IgkAYQgtAagtAMQiRAlhch8QAkBFA4A+QBwB/C0g1QC1g1BygzQBlgtAEgk");
	this.shape.setTransform(0.025,0.0139);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aq0A5Qg4g+gkhFQBcB8CRglQAtgMAtgaIAkgYQBzh8CkAlQAzALAyAbQAdAOAMAUIAAABIAAADIAAAGQgEAkhlAtQhyAzi1A1Qg1AQgvAAQhxAAhPhagAGRCBQi1g0hyg0QhjgrgHgkIAAgGIAAgDIAAgBIAAgCQANgUAdgOQAygaAzgMQCkgkBzB7IAkAZQAtAaAtALQCRAlBch8QgkBFg4A/QhPBZhxAAQgvAAg1gQgAAAg2IAAAAg");
	this.shape_1.setTransform(0.025,0.0139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mustache, new cjs.Rectangle(-79.5,-15.7,159.1,31.4), null);


(lib.legs = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AFZpqQAjAlAsBAQBZCCAzCLQCiG7kZF3QBEhBBNglQCbhLAyCJIgZAZQghAbgmARQh7A0iDhRAlYpqQgjAlgsBAQhZCCgzCLQiiG7EZF3QhEhBhNglQg5gcgrABQhKACgfBXIAZAZQAhAbAmARQAFACAEACQB3AtB+hO");
	this.shape.setTransform(0,-0.0118);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqwBIIgJgEQgngQghgcIgZgYQAfhWBLgCQAqgBA5AbQBOAmBDBAQhQAxhMAAQgtAAgrgRgAG9AoQBDhABOgmQCbhLAyCJIgZAYQghAcgnAQQgwAVgxAAQhNAAhPgxg");
	this.shape_1.setTransform(0,53.0114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legs, new cjs.Rectangle(-82,-64.4,164,128.9), null);


(lib.grneyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FF00").s().p("ADvA9QgagZAAgkQAAgjAagaQAagaAkABQAkgBAZAaQAaAaAAAjQAAAkgaAZQgZAagkAAQgkAAgagagAlqA9QgZgZAAgkQAAgjAZgaQAagaAkABQAkgBAaAaQAaAaAAAjQAAAkgaAZQgaAagkAAQgkAAgagag");
	this.shape.setTransform(0.425,1.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACbCUQg9g9AAhXQAAhWA9g+QA+g9BWAAQBYAAA9A9QA+A+AABWQAABXg+A9Qg9A+hYAAQhWAAg+g+gADzgvQgZAaAAAjQAAAlAZAZQAaAaAkAAQAkAAAZgaQAagZAAglQAAgjgagaQgZgZgkAAQgkAAgaAZgAnDCUQg+g9AAhXQAAhWA+g+QA9g9BYAAQBWAAA+A9QA9A+AABWQAABXg9A9Qg+A+hWAAQhYAAg9g+gAllgvQgaAaAAAjQAAAlAaAZQAaAaAkAAQAjAAAagaQAagZAAglQAAgjgagaQgagZgjAAQgkAAgaAZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.grneyes, new cjs.Rectangle(-51.3,-21,102.69999999999999,42), null);


(lib.glasses2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ABwANQgBgGAAgHQAAh9BehaQBdhZCEAAQCEAABeBZQBdBaAAB9QAAB/hdBZQheBZiEAAQiEAAhdhZQhZhVgEh2gAhvAAQAAB/hdBZQheBZiEAAQiEAAhdhZQhdhZAAh/QAAh9BdhaQBdhZCEAAQCEAABeBZQBdBaAAB9IASgIQAXgKAZgEQBRgOBMAx");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses2, new cjs.Rectangle(-76.4,-32,152.9,64), null);


(lib.glasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AOqiKIhTghQhIgahOgHQj4gVj2DZQBVCEDMBLQDNBKDpmbgAiwg3IFhAAQBRhjCTg/QEkh+FCCvQiTEChdBQQkqEBlamYIkDAAQlyGZkqkBQhThIh0jWQgNgZgOgbQAOgIANgHQEzibEYB5QCTA/BRBigAuqiMIBTghQBIgaBOgHQD4gVD2DZQhVCFjMBKQjNBKjpmbg");
	this.shape.setTransform(0.025,0.0133);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AsYCrQhThIh0jWIgbg0IAbgPQEzibEYB5QCTA/BRBiIFhAAQBRhjCTg/QEkh+FCCvQiTEChdBQQkqEBlamYIkDAAQjjD7jJAAQh9AAhzhjgADTgIQBVCEDMBLQDNBKDpmbIhTghQhIgahOgHQgWgCgXAAQjhAAjgDGgArBjOQhOAHhIAaIhTAhQDpGbDNhKQDMhKBViFQjgjGjhAAQgXAAgWACg");
	this.shape_1.setTransform(0.025,0.0133);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses, new cjs.Rectangle(-102.9,-28,205.9,56.1), null);


(lib.cowboyhat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("AAdgfIgdhbIgZBWIgRA4IgaBUIBEgvIBPBCIgghjIBHgwIhZgHIg2gFIhcgHIBLA/IAqAlIAvghg");
	this.shape.setTransform(3.675,-0.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AlBASIA/kAQAHgIAMgLQAXgVAXgJQBNgeA3BjIASAFQAXAFAUAAQBFAAAlgyQAsg6A6AJQA6AJAIA8IBMD5AlbB+IAahsQifgFhnAcQjNA4EcCnICAAaQCfAaFEgJQFEgICXhcQCWhbhsg1Qhsg1hSgEQhTgEgBAJIAgBp");
	this.shape_1.setTransform(0.0047,-0.0042);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgsAKIARg4IA2AFIASA3IguAhg");
	this.shape_2.setTransform(3.875,0.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC9933").s().p("Al4EiIiAgaQkcinDNg4QBngcCfAFIgaBsIAahsIA/kAQAHgIAMgLQAXgVAXgJQBNgeA3BjIASAFQAXAFAUAAQBFAAAlgyQAsg6A6AJQA6AJAIA8IBMD5IAgBpIgghpQABgJBTAEQBSAEBsA1QBsA1iWBbQiXBclEAIQhRAChGAAQjVAAh3gTgABzB0IgfhjIAfBjIhOhCIAvghIgSg3IBZAHIhHAwIBHgwIhZgHIgdhbIgaBWIAahWIAdBbIg3gFIhcgHIBLA/IgZBUIBEgvIBOBCgABzB0gAgGANIhLg/IBcAHIgRA4IArAlIhEAvgAAlAyg");
	this.shape_3.setTransform(0.0047,-0.0042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cowboyhat, new cjs.Rectangle(-68.9,-32.9,137.9,65.8), null);


(lib.closedeyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AB3AxQAJgLAQgPQAggbAlgPQB2gvBsBpAm2AiQAJgLAQgOQAggcAlgOQB1gwBtBp");
	this.shape.setTransform(0.025,0.0151);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.closedeyes, new cjs.Rectangle(-46.9,-7.8,93.9,15.7), null);


(lib.playbackrewind = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.playbackloop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.entershadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape.setTransform(11.75,1.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.175,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_2.setTransform(1.275,0.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_3.setTransform(-3.925,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_4.setTransform(-10.025,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.entershadow, new cjs.Rectangle(-15.5,-8,31,16.1), null);


(lib.bubbleglowred = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A90000").s().p("AhbDZQgqgTggggQghghgSgqQgSgsAAgvQAAgvASgsQASgqAhggQAgghAqgSQAsgSAvAAQAvAAAsASQAqASAhAhQAgAgATAqQASAsAAAvQAAAvgSAsQgTAqggAhQghAggqATQgsASgvAAQgvAAgsgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.5,47,47);


(lib.bubbleglowgrey = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#6F6F6F").s().p("AhbDZQgqgTggggQghghgSgqQgSgsAAgvQAAgvASgsQASgqAhggQAgghAqgSQAsgSAvAAQAvAAAsASQAqASAhAhQAgAgATAqQASAsAAAvQAAAvgSAsQgTAqggAhQghAggqATQgsASgvAAQgvAAgsgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.5,47,47);


(lib.bubble2purpleglow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F29437").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.blkeyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AC0A+QgagaAAgkQAAgjAagaQAagaAkAAQAkAAAaAaQAaAaAAAjQAAAkgaAaQgaAagkAAQgkAAgagagAkvA+QgZgaAAgkQAAgjAZgaQAagaAkAAQAkAAAZAaQAaAaAAAjQAAAkgaAaQgZAagkAAQgkAAgagag");
	this.shape.setTransform(0.6,7.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACBCUQg+g9AAhXQAAhWA+g+QA9g9BXAAQBXAAA+A9QA9A+AABWQAABXg9A9Qg+A+hXAAQhXAAg9g+gAC6ALQgaAaAAAkQAAAjAaAaQAaAaAkAAQAkAAAZgaQAagaAAgjQAAgkgagaQgZgZgkAAQgkAAgaAZgAmpCUQg9g9AAhXQAAhWA9g+QA+g9BXAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhXAAg+g+gAkpALQgaAaAAAkQAAAjAaAaQAaAaAkAAQAkAAAZgaQAagaAAgjQAAgkgagaQgZgZgkAAQgkAAgaAZg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blkeyes, new cjs.Rectangle(-48.7,-21,97.5,42), null);


(lib.arms = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ACOnVQASAeAaAxQA0BkAmBiQAtB2AVBjQADANACAMQAcCYghBsQAeAFASAXQAjAtg/BXIgfgNQgjgSgTgTQg8g8B9gyAiNnVQgSAegaAxQg0BkgmBiQgtB2gVBjQgDANgCAMQgcCYAhBsQgeAFgSAXQgjAtA/BXIAfgNQAjgSATgTQA8g8h9gy");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AFKBCQgigRgTgTQg8g7B9gyQAeAFASAWQAiAtg+BXgAmFg0QASgWAegFQB9Ayg8A7QgTATgiARIggAOQg+hXAigtg");
	this.shape_1.setTransform(0,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arms, new cjs.Rectangle(-42.7,-49.5,85.4,99), null);


(lib.circlebubblered = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.entershadow();
	this.instance.setTransform(0,-0.5);
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(244,244,244,0.6)","rgba(204,0,0,0)"],[0.686,1],0.3,-8.5,0,0.3,-8.5,18.9).s().p("AiCCfQg2hBAAheQAAhdA2hBQA2hCBMAAQBNAAA2BCQA2BBAABdQAABeg2BBQg2BChNAAQhMAAg2hCg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(244,244,244,0.498)","rgba(230,0,0,0)"],[0.686,1],0.3,-7.6,0,0.3,-7.6,17.8).s().p("Ah7CNQgzg6AAhTQAAhSAzg7QAzg6BIAAQBJAAAyA6QA0A7AABSQAABTg0A6QgyA7hJAAQhIAAgzg7g");
	this.shape_1.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[]},1).wait(1));

	// highlight 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(228,228,228,0.702)","#CC0000"],[0.271,1],0,-0.5,0,0,-0.5,22.8).s().p("AifCfQhBhBAAheQAAhdBBhBQBChCBdAAQBeAABBBCQBCBBAABdQAABehCBBQhBBCheAAQhdAAhChCg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(244,244,244,0.702)","#C40000"],[0.271,1],0,-0.5,0,0,-0.5,22.8).s().p("AifCfQhBhBAAheQAAhdBBhBQBChCBdAAQBeAABBBCQBCBBAABdQAABehCBBQhBBCheAAQhdAAhChCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},2).to({state:[]},1).wait(1));

	// highlight ring
	this.instance_1 = new lib.bubbleglowred();
	this.instance_1.shadow = new cjs.Shadow("#E3B602",0,0,20);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// highlight ring
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A90000").s().p("AhbDZQgqgTggggQghghgSgqQgSgsAAgvQAAgvASgsQASgqAhggQAgghAqgSQAsgSAvAAQAvAAAsASQAqASAhAhQAgAgATAqQASAsAAAvQAAAvgSAsQgTAqggAhQghAggqATQgsASgvAAQgvAAgsgSg");

	this.instance_2 = new lib.bubbleglowred();
	this.instance_2.shadow = new cjs.Shadow("#E3B602",0,0,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},2).wait(1));

	// outer ring 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E60000").s().p("AhlDvQgugTgkgkQgkgkgUgvQgUgwAAg1QAAg0AUgxQAUguAkgkQAkgkAugUQAxgUA0AAQA1AAAwAUQAvAUAkAkQAkAkATAuQAVAxAAA0QAAA1gVAwQgTAvgkAkQgkAkgvATQgwAVg1AAQg0AAgxgVg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},3).wait(1));

	// outer ring 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFB3B3").s().p("AhwELQg0gWgogoQgpgogVg0QgXg2AAg7QAAg6AXg2QAVg0ApgoQAogpA0gVQA2gXA6AAQA6AAA3AXQA0AVAoApQAoAoAWA0QAWA2ABA6QAAA6gXA3QgWA0goAoQgoAog0AWQg2AWg7ABQg6AAg2gXg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-44.5,92,92);


(lib.circlebubblegrey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.entershadow();
	this.instance.setTransform(0,-0.5);
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(244,244,244,0.6)","rgba(111,111,111,0)"],[0.686,1],0.3,-8.5,0,0.3,-8.5,18.9).s().p("AiCCfQg2hBAAheQAAhdA2hBQA2hCBMAAQBNAAA2BCQA2BBAABdQAABeg2BBQg2BChNAAQhMAAg2hCg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(244,244,244,0.498)","rgba(111,111,111,0)"],[0.686,1],0.3,-7.6,0,0.3,-7.6,17.8).s().p("Ah7CNQgzg6AAhTQAAhSAzg7QAzg6BIAAQBJAAAyA6QA0A7AABSQAABTg0A6QgyA7hJAAQhIAAgzg7g");
	this.shape_1.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[]},1).wait(1));

	// highlight 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(244,244,244,0.702)","#4D4D4D"],[0.271,1],0,-0.5,0,0,-0.5,22.8).s().p("AifCfQhBhBAAheQAAhdBBhBQBChCBdAAQBeAABBBCQBCBBAABdQAABehCBBQhBBCheAAQhdAAhChCg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(244,244,244,0.702)","#2F2F2F"],[0.271,1],0,-0.5,0,0,-0.5,22.8).s().p("AifCfQhBhBAAheQAAhdBBhBQBChCBdAAQBeAABBBCQBCBBAABdQAABehCBBQhBBCheAAQhdAAhChCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},2).to({state:[]},1).wait(1));

	// highlight ring
	this.instance_1 = new lib.bubbleglowgrey();
	this.instance_1.shadow = new cjs.Shadow("#AA0000",0,0,20);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// highlight ring
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AhbDZQgqgTggggQghghgSgqQgSgsAAgvQAAgvASgsQASgqAhggQAgghAqgSQAsgSAvAAQAvAAAsASQAqASAhAhQAgAgATAqQASAsAAAvQAAAvgSAsQgTAqggAhQghAggqATQgsASgvAAQgvAAgsgSg");

	this.instance_2 = new lib.bubbleglowgrey();
	this.instance_2.shadow = new cjs.Shadow("#AA0000",0,0,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// outer ring 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6F6F6F").s().p("AhlDvQgugTgkgkQgkgkgUgvQgUgwAAg1QAAg0AUgxQAUguAkgkQAkgkAugUQAxgUA0AAQA1AAAwAUQAvAUAkAkQAkAkATAuQAVAxAAA0QAAA1gVAwQgTAvgkAkQgkAkgvATQgwAVg1AAQg0AAgxgVg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},3).wait(1));

	// outer ring 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D5D5D5").s().p("AhwELQg0gWgogoQgpgogVg0QgXg2AAg7QAAg6AXg2QAVg0ApgoQAogpA0gVQA2gXA6AAQA6AAA3AXQA0AVAoApQAoAoAWA0QAWA2ABA6QAAA6gXA3QgWA0goAoQgoAog0AWQg2AWg7ABQg6AAg2gXg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-44.5,92,92);


(lib.bubble2purple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape.setTransform(11.75,0.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.175,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_2.setTransform(1.275,0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAOAcIAAgeIgBgHIgBgFIgEgEIgGgBQgDAAgEACIgIAGIAAAnIgJAAIAAg2IAJAAIAAAGIAJgFQAEgCAFAAQAJAAAEAGQAFAFAAAJIAAAjg");
	this.shape_3.setTransform(-3.925,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_4.setTransform(-10.025,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#977BD9"],[0,1],-6,-5.7,0,-6,-5.7,21).s().p("AhRDBQglgPgegeQgdgdgQglQgQgoAAgqQAAgqAQgnQAQgmAdgdQAegdAlgQQAngQAqAAQAqAAAoAQQAlAQAeAdQAcAdAQAmQARAnAAAqQAAAqgRAoQgQAlgcAdQgeAeglAPQgoAQgqABQgqAAgngRg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#CBBDEC","#8261D1"],[0,1],-6,-5.7,0,-6,-5.7,21).s().p("AhRDBQglgPgegeQgdgdgQglQgQgoAAgqQAAgqAQgnQAQgmAdgdQAegdAlgQQAngQAqAAQAqAAAoAQQAlAQAeAdQAcAdAQAmQARAnAAAqQAAAqgRAoQgQAlgcAdQgeAeglAPQgoAQgqABQgqAAgngRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).to({state:[]},1).wait(1));

	// center border
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D46CA").s().p("AhVDLQgngRgfgfQgfgegQgnQgRgqAAgsQAAgsARgpQAQgoAfgeQAfgeAngRQApgRAsAAQAsAAAqARQAnARAeAeQAfAeARAoQARApAAAsQAAAsgRAqQgRAngfAeQgeAfgnARQgqARgsAAQgsAAgpgRg");

	this.instance = new lib.bubble2purpleglow();
	this.instance.setTransform(0,0,0.8148,0.8148);
	this.instance.shadow = new cjs.Shadow("#DE8E18",0,0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1));

	// gradient circle
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A088DD","#7C5ACF"],[0,1],15.9,17.7,-17.1,-16.7).s().p("AhdDdQgrgTghghQghgggSgsQgTgsAAgxQAAgwATgtQASgqAhgiQAhghArgSQAtgTAwAAQAwAAAtATQArASAhAhQAiAiASAqQATAtAAAwQAAAxgTAsQgSArgiAhQghAhgrATQgtATgwAAQgwAAgtgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},3).wait(1));

	// outer circle
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8C6FD5").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AC96E0").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},2).to({state:[]},1).wait(1));

	// outer border
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C0B0E8").s().p("AhwELQg0gWgogpQgpgngVg0QgXg2AAg7QAAg6AXg2QAVg0ApgoQAogpA0gVQA2gXA6AAQA6AAA3AXQAzAVAoApQApAoAWA0QAXA2AAA6QAAA7gXA2QgWA0gpAnQgoApgzAWQg3AXg6AAIAAAAQg6AAg2gXg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7B16F").s().p("AhtECQgxgWgngnQgngmgVgyQgWg0AAg5QAAg4AWg1QAVgyAngmQAngnAxgVQA1gWA4AAQA5AAA0AWQAyAVAmAnQAoAmAVAyQAWA1AAA4QAAA5gWA0QgVAygoAmQgmAngyAWQg0AVg5ABQg4AAg1gWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-48,100,100);


// stage content:
(lib.MPHFinalPValenzuela = function(mode,startPosition,loop,reversed) {
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
		this.Face1_btn.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.tophat.x = 224.85;
			this.tophat.y = 109.7;
		    this.blkeyes.x = 216.65;
			this.blkeyes.y = 214.65;
		    this.mustache.x = 215.45;
			this.mustache.y = 261.05;
		    this.smile3.x = 215.45;
			this.smile3.y = 278.7;
		    this.legs.x = 226.5;
			this.legs.y = 461.15;
		}  
		
		this.Face2_btn.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.hat.x = 217.95;
			this.hat.y = 132.7;
			this.closedeyes.x = 213.8;
			this.closedeyes.y = 219.3;
			this.glasses2.x = 217.15;
			this.glasses2.y = 224.15;		
			this.smile1.x = 213.55;
			this.smile1.y = 312.05;		
		    this.leg.x = 226.5;
			this.leg.y = 467.95;	
		}
		
		this.reset_btn.addEventListener("click", Clickreset.bind(this));
		
		function Clickreset() {
			this.hat.x = 520.05;
			this.hat.y = 70.9;
			this.tophat.x = 660.35;
			this.tophat.y = 67.4;
			this.mustache.x = 655.6;
			this.mustache.y = 154.6;	
			this.stem.x = 512.05;
			this.stem.y = 133.25;	
			this.glasses1.x = 836.05;
			this.glasses1.y = 48.25;	
			this.glasses2.x = 835;
			this.glasses2.y = 132.3;	
			this.legs.x = 654.65;
			this.legs.y = 255.6;
			this.arms.x = 869.75;
			this.arms.y = 240.65;
			this.closedeyes.x = 630.9;
			this.closedeyes.y = 363.05;
		    this.blkeyes.x = 584.65;
			this.blkeyes.y = 427;
			this.grneyes.x = 694.2;
			this.grneyes.y = 427;
			this.smile1.x = 862.55;
			this.smile1.y = 358;
			this.smile2.x = 864.95;
			this.smile2.y = 409.3;
			this.smile3.x = 866.3;
			this.smile3.y = 456.9;
		}
			
		this.tophat.addEventListener("pressmove", dragMe.bind(this));
		this.mustache.addEventListener("pressmove", dragMe.bind(this));
		this.legs.addEventListener("pressmove", dragMe.bind(this));
		this.hat.addEventListener("pressmove", dragMe.bind(this));
		this.glasses1.addEventListener("pressmove", dragMe.bind(this));
		this.stem.addEventListener("pressmove", dragMe.bind(this));
		this.glasses2.addEventListener("pressmove", dragMe.bind(this));
		this.legs.addEventListener("pressmove", dragMe.bind(this));
		this.closedeyes.addEventListener("pressmove", dragMe.bind(this));
		this.grneyes.addEventListener("pressmove", dragMe.bind(this));
		this.blkeyes.addEventListener("pressmove", dragMe.bind(this));
		this.smile1.addEventListener("pressmove", dragMe.bind(this));
		this.smile2.addEventListener("pressmove", dragMe.bind(this));
		this.smile3.addEventListener("pressmove", dragMe.bind(this));
		this.arms.addEventListener("pressmove", dragMe.bind(this));
		
		
		
		
		
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.smile3 = new lib.smile3();
	this.smile3.name = "smile3";
	this.smile3.setTransform(872.55,456.9);

	this.instance = new lib.playbackloop();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.playbackrewind();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.smile3}]}).wait(1));

	// Body Parts
	this.stem = new lib.stem();
	this.stem.name = "stem";
	this.stem.setTransform(512.05,133.25);

	this.grneyes = new lib.grneyes();
	this.grneyes.name = "grneyes";
	this.grneyes.setTransform(694.2,427);

	this.smile2 = new lib.smile2();
	this.smile2.name = "smile2";
	this.smile2.setTransform(864.95,409.3);

	this.smile1 = new lib.smile();
	this.smile1.name = "smile1";
	this.smile1.setTransform(862.55,358);

	this.closedeyes = new lib.closedeyes();
	this.closedeyes.name = "closedeyes";
	this.closedeyes.setTransform(630.9,363.05);

	this.blkeyes = new lib.blkeyes();
	this.blkeyes.name = "blkeyes";
	this.blkeyes.setTransform(584.65,427);

	this.arms = new lib.arms();
	this.arms.name = "arms";
	this.arms.setTransform(869.75,240.65);

	this.legs = new lib.legs();
	this.legs.name = "legs";
	this.legs.setTransform(654.65,255.6);

	this.glasses2 = new lib.glasses2();
	this.glasses2.name = "glasses2";
	this.glasses2.setTransform(835,132.3);

	this.mustache = new lib.mustache();
	this.mustache.name = "mustache";
	this.mustache.setTransform(655.6,154.6);

	this.glasses1 = new lib.glasses();
	this.glasses1.name = "glasses1";
	this.glasses1.setTransform(836.05,48.25);

	this.tophat = new lib.tophat();
	this.tophat.name = "tophat";
	this.tophat.setTransform(660.35,67.4);

	this.hat = new lib.cowboyhat();
	this.hat.name = "hat";
	this.hat.setTransform(520.05,70.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hat},{t:this.tophat},{t:this.glasses1},{t:this.mustache},{t:this.glasses2},{t:this.legs},{t:this.arms},{t:this.blkeyes},{t:this.closedeyes},{t:this.smile1},{t:this.smile2},{t:this.grneyes},{t:this.stem}]}).wait(1));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASAyIgoAAIgMAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIACgBQAhgZALgRQALgQAAgOQAAgIgEgGQgEgGgIAAQgMAAgJAMQgJAMAAAMQAAAGADADQACACAEAAQADAAAFgCQAEgDADgJIACgCQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIgCAHQgDAFgFADQgGAEgGAAQgGAAgFgFQgFgEAAgHQAAgNAPgOQAPgNAPAAQAKAAAJAGQAHAGABAMQAAAMgIAKQgIAJgWASIgRAOIAcAAQALAAAEgCQAEgBAFgHIAEgDQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgKAYIgKAAg");
	this.shape.setTransform(275.5,587.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAyIgnAAIgNAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIACgBQAhgZALgRQALgQAAgOQAAgIgDgGQgEgGgJAAQgNAAgIAMQgJAMAAAMQAAAGACADQACACAFAAQAEAAAEgCQAFgDADgJIABgCQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIgBAHQgDAFgGADQgFAEgFAAQgHAAgFgFQgFgEAAgHQAAgNAPgOQAPgNAPAAQALAAAHAGQAJAGgBAMQAAAMgHAKQgIAJgWASIgQAOIAbAAQALAAAFgCQAEgBAEgHIADgDQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgLAYIgJAAg");
	this.shape_1.setTransform(266,587.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAkQgMgPAAgUQAAgNAGgMQAGgMAJgHQAJgHALAAQARAAANAPQAMAPAAAUQAAAUgNAQQgMAPgRAAQgRAAgMgPgAgSghQgIANAAAVQAAAWAIAMQAIANAKAAQALAAAIgLQAHgKAAgcQABgXgIgLQgHgLgMAAQgLAAgHANg");
	this.shape_2.setTransform(256.55,587.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAyIgoAAIgMAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIACgBQAhgZALgRQALgQAAgOQAAgIgDgGQgFgGgIAAQgMAAgJAMQgJAMAAAMQAAAGACADQACACAFAAQAEAAAEgCQAEgDAEgJIABgCQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIgBAHQgDAFgFADQgGAEgFAAQgHAAgFgFQgFgEAAgHQAAgNAPgOQAPgNAPAAQAKAAAJAGQAIAGAAAMQgBAMgHAKQgIAJgWASIgQAOIAbAAQALAAAFgCQAEgBAEgHIADgDQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgKAYIgKAAg");
	this.shape_3.setTransform(247,587.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoA8QgFgEAAgEQAAgEADgCQADgDADAAQAHAAABAIQAAAFAEAAQAIAAAHgOQAJgOgBgIQABgGgHgPIgOgiQgHgSgDgDQgEgEgCAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIACAAIAMABIASAAIADgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQgIACABAGQAAAEAUAxIANglQADgKAAgFQAAgIgKgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAEAAIAHAAIAQAAIACgBQABAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAgBAAQgHACgEAJIgQAqQgLAggGAOQgHAPgHAFQgHAGgHAAQgHAAgEgFg");
	this.shape_4.setTransform(232.8,591.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAkQgFgGAAgIQAAgGADgGQADgEAEgDIAPgEQANgGADgDQADgDAAgFQAAgJgEgEQgDgFgHAAQgFAAgDACQgDAEgCAHQgCAJgFAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBQgCgDAAgEQAAgGAIgFQAHgFAOgBQAJABAHADQAGACACAFQABADAAALIAAAYQAAAOABAGQACAGAFAAIACAAIACAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAEgSAAQgFAAgCgDQgCgCAAgIQgFAGgFAEQgGADgIAAQgKAAgFgEgAgDAAQgKAFgEAFQgEAEAAAGQAAAHADADQAEAFAFAAQAFgBAEgDQAFgDACgFQACgFAAgKIAAgQQgDAEgJAEg");
	this.shape_5.setTransform(224.825,589);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhUA8QAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAJAAAEgGQAFgGAAgUIgBgQIACgpQAAgOgFgGQgEgFgIgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAIADABIAhAAQAJAVAJAPIAPAeQAFANAGAMQAUgfAZg8IAlAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAQgKABgDADQgEADgBAHIgBAbIgBAhIABAdQAAAFADACQACADAJABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgkAAIgKAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAIgBADgCQACgCACgFQABgFAAgTIACgrIAAgWIAAgDIgCACIgSAkQgSAigEAKIgGAOIgCAHIgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIgRglIgUgmIgMgYIgBgBQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABIgBA3IgBASQAAAPAEAFQAEAEAIAAQAFAAAAACQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgCAAIgGAAIgNAAIgWABIgBgCg");
	this.shape_6.setTransform(211.525,586.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIAwQgFgHAAgNIACguIgJgBIgFAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIANgJQAJgHABgLQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIAAABIAAAJIAAAOIAUAAQAFAAAAABQAAAEgBABIgYACIgBAnQAAAPADAFQAEAFAHAAQAFAAAFgEIADgBIABABQAAADgGAEQgHAFgJAAQgJAAgFgGg");
	this.shape_7.setTransform(194.875,587.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAoQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQABAAABAAQAGgBABgDQACgDAAgVQAAgdgCgHQgBgGgIAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIAAgBIAJgBIARgBIABAUQAFgKAHgFQAGgGAIAAQAFAAAEAEQADAEAAAEQAAAJgHAAQgEAAgCgFQgDgGgFAAQgFAAgFAFQgEAFgBAHQgCAGAAASQAAASACADQABADAFABQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_8.setTransform(187.425,588.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA9A+IgWAAIgaAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAIgBADgCQADgCAAgEQAAgEgGgQIgFgPIgqAAQgKAZAAAHQAAAGAFACQAFADAEAAQABABABAAQAAAAABAAQAAABABAAQAAAAAAABIgBABIgSAAIgVAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABgBAAAAQALgBAGgNIARguQALgfANgdIAEAAQAKAWASAyQAMAhAEAIQAFAHAJABQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAgAANAJIgJgZIgJgZQgJASgMAgIAOAAg");
	this.shape_9.setTransform(176.925,586.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVA+IgUABQgBAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAJgBADgDQABgDABgXIAAgdIAAgZIAAgPQAAgLgBgDQgBgDgHgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIABgBIAIgBIAQAAIABAIIgBAIQAJgJAFgDQAEgDAGAAQAOABAKALQALAMgBAQQAAARgLAKQgMALgPAAQgJAAgLgHQgCAMAAAOIABAMIAAAEQACAGAHACQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIgBABIAAAAIgSgBgAgJguQgGAIAAASQAAARABADQABAFAFAEQAFAEAIAAQALAAAHgKQAGgIAAgOQAAgRgGgJQgHgJgKAAQgKgBgFAJg");
	this.shape_10.setTransform(160.8,591.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAlAoQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAHgBACgDQACgDAAgeIgBgTQgBgHgEgEQgEgEgGAAQgFAAgFADQgFAEgEAFQgEANAAAdQAAALACADQACADAGAAIABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgeAAQgFAAAAgCQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAFgBADgCQACgCAAgMIABgUQAAgVgEgFQgEgHgHAAQgGAAgHAFQgGAFgCAIQgCAJAAAVQAAAPABAEQACADAGAAIACAAIABABQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgcAAQgFAAgBgCQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAEAAACgCQACgCABgIIABgbIAAgXQAAgEgDgDQgCgCgHAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIAAgCIAJgBIAOgBIAEAAIABAHIAAAIQAHgHAHgEQAHgEAHAAQAHABAGADQAEADAFAGQAGgGAHgDQAHgEAHAAQAJAAAGAEQAGAEABAEQACAEAAANIgBAhQAAAIACADQABACAFABQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAACgFAAg");
	this.shape_11.setTransform(148.9,588.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAdQgLgMAAgQQAAgQALgMQAMgNARAAQAQAAAMAMQALALAAAQQAAAQgMANQgNANgPAAQgQAAgMgMgAgRgZQgHAKAAAPQAAAQAIAKQAGALALAAQAJAAAIgKQAIgKgBgQQAAgOgGgLQgIgMgLAAQgKAAgHALg");
	this.shape_12.setTransform(136.8,588.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYA3QgOgIgHgNQgJgOAAgTQAAgRAIgPQAIgPAOgIQAPgIAOAAQAJAAAIACQAJADAIAFIAGgGQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIACAgIAAAEIgCAAQgBAAgCgEQgGgOgLgKQgLgJgNAAQgKAAgKAHQgJAHgFAOQgFANgBAQQAAAZAPARQAPAQAQAAQAMAAALgIQAKgHAFgKQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAADgHAJQgHAJgMAGQgLAFgNAAQgOAAgPgIg");
	this.shape_13.setTransform(126.3,586.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgFgGAAgIQAAgGADgGQADgEAEgDIAPgEQANgGADgDQADgDAAgFQAAgJgEgEQgDgFgHAAQgFAAgDACQgDAEgCAHQgCAJgFAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBQgCgDAAgEQAAgGAIgFQAHgFAOgBQAJABAHADQAGACACAFQABADAAALIAAAYQAAAOABAGQACAGAFAAIACAAIACAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAEgSAAQgFAAgCgDQgCgCAAgIQgFAGgFAEQgGADgIAAQgKAAgFgEgAgDAAQgKAFgEAFQgEAEAAAGQAAAHADADQAEAFAFAAQAFgBAEgDQAFgDACgFQACgFAAgKIAAgQQgDAEgJAEg");
	this.shape_14.setTransform(111.375,589);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AATBAIgWgBIgNABIgCAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAIABADgGQADgEAAgLIAAg0IgBgfQgBgFgDgDQgEgDgFgBQgBgBgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQARgBAIgDIABAAIAAAYIAAA4IABAcQAAAIACAEQACADAIAAQABABAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_15.setTransform(104.1,586.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAeQgLgLAAgRQAAgSAMgMQAMgMAMAAQANAAAKAKQAKAJAAANIgBADQAAABgHAAIgtAAIgBAHQAAANAIAJQAIAJAKAAQALAAAKgJIADgCQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAQgEAHgIAEQgJAFgKAAQgPAAgKgLgAgKgeQgGAHgCAPIAWAAIAFAAQAGAAACgCQADgCAAgFQAAgIgFgGQgFgGgHAAQgGAAgHAHg");
	this.shape_16.setTransform(97.525,589.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAkQgEgEgCgEQgCgFAAgTIgBgeIAAgHQgBgBAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQABgBABAAIARAAIABAjIABAYQABAFAEAFQAEADAFAAQAFAAAHgGQAHgGABgIQACgHAAgYQAAgMgCgCQgBgDgFAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgBIAEgBIATAAIAAAXIAAAiQAAALABADQACACAEABQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgBABgBAAIgPAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAgCIABgFIgBgHQgGAJgIAEQgHAEgIABQgHgBgFgDg");
	this.shape_17.setTransform(88.55,589.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AADAnIgUAAIgMAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQABgDATgdIAMgQIAMgXIgKAAQgKAAgHADQgGADgFAJQgDAEgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIABgCIAFgSIAcgBIAMAAIAMAAQABAAAAAAQABABABAAQAAAAAAAAQAAABAAAAIgJAQIgXAjIgMAVIAIAAIAGAAIAGAAIAIgBQADgBADgDIAMgOIACgCQAAAAABAAQAAAAAAABQAAAAAAAAQABAAAAABIgGAWg");
	this.shape_18.setTransform(79.5,588.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgPAoIgRAAIgHAAQgBAAgBgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQABAAAAgBQAAAAABAAQAAAAABgBQABAAABAAQAEgBACgCQACgCAAgMIAAgdQAAgQgCgEQgCgEgEgBQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABgBIAHAAIANAAQACAGABAMQAGgJAGgEQAHgEAIgBQAGAAAGACQAGADADAGQADAFABAOIgBAfQAAAJABACQABACAGABQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBABAAAAIgBAAIgNgBIgQAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAHgCIACgDIABgOIABgRQAAgUgFgHQgFgGgIAAQgJAAgIAMQgGALAAAbQAAAMABAEQABAEAHAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_19.setTransform(70.15,588.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAeQgLgLAAgRQAAgSAMgMQAMgMAMAAQANAAAKAKQAKAJAAANIgBADQAAABgHAAIgtAAIgBAHQAAANAIAJQAIAJAKAAQALAAAKgJIADgCQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAQgEAHgIAEQgJAFgKAAQgPAAgKgLgAgKgeQgGAHgCAPIAWAAIAFAAQAGAAACgCQADgCAAgFQAAgIgFgGQgFgGgHAAQgGAAgHAHg");
	this.shape_20.setTransform(61.125,589.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AATBAIgWgBIgNABIgCAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAIABADgGQADgEAAgLIAAg0IgBgfQgBgFgDgDQgEgDgFgBQgBgBgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQARgBAIgDIABAAIAAAYIAAA4IABAcQAAAIACAEQACADAIAAQABABAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_21.setTransform(54.25,586.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgFgGAAgIQAAgGADgGQADgEAEgDIAPgEQANgGADgDQADgDAAgFQAAgJgEgEQgDgFgHAAQgFAAgDACQgDAEgCAHQgCAJgFAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBQgCgDAAgEQAAgGAIgFQAHgFAOgBQAJABAHADQAGACACAFQABADAAALIAAAYQAAAOABAGQACAGAFAAIACAAIACAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAEgSAAQgFAAgCgDQgCgCAAgIQgFAGgFAEQgGADgIAAQgKAAgFgEgAgDAAQgKAFgEAFQgEAEAAAGQAAAHADADQAEAFAFAAQAFgBAEgDQAFgDACgFQACgFAAgKIAAgQQgDAEgJAEg");
	this.shape_22.setTransform(47.875,589);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgCA9IgNgmIgSgsIgLgaQgEgFgDgCQgDgCgFgBQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAwAAQABAAABAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQgMAAAAAKIABAIIAEANIAMAgIAKAfIAUg2QAIgYAAgGQAAgKgMgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIABgCIAFAAIAfAAIAFAAIABACQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgHABgDAEIgHAJQgDAGgOAmIgWA7g");
	this.shape_23.setTransform(38.075,586.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLA9IgaAAIgLAAIgBgBQAAgBAAAAQAAAAABgBQAAAAABAAQABgBAAAAQAGgBADgDQADgDAAgKIAAgWIAAgYIAAgbQAAgOgCgEQgBgEgGgBQgGgBAAgCQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIASAAIAcAAQAeAAAKAJQAKAJAAAOQAAAQgOAIQgNAHgZAAIgPAAIgBAMIAAAIIABAOQAAAKABADQABADAEACQACACAFABQABAAAAAAQABAAABAAQAAAAAAABQAAAAAAAAIAAACIgKAAgAgRg2IAAAEIAAAVIAAAXIAAAGIAQAAQAIAAAJgDQAIgDAEgJQAEgIAAgIQgBgLgGgHQgIgHgRAAQgJAAgIACg");
	this.shape_24.setTransform(25.8,586.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgeAvQgLgHgIgLQgHgMAAgRQAAgVAPgPQAPgOAaAAQAUgBAMAHQAMAHAHALQAGANAAASIAAAEIhLAAQABAKAEAEQAGAHAIAAQAFAAAFgDIAHgGIAlADQgJAPgMAGQgMAHgWgBQgTAAgLgEgAgNgVQgEAFgBAIIAlAAQgBgKgFgFQgFgFgIAAQgIAAgFAHg");
	this.shape_25.setTransform(276.175,50.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgoA9QgLgIAAgPIAAgGIAlAFQABAFADACQAEADAGAAQAIAAAEgFQAEgEAAgKIAAgPQgGAGgFADQgIAFgKgBQgUAAgMgQQgIgMAAgUQAAgXALgMQALgMASAAQALAAAHADQAHAEAHAKIAAgPIAjAAIAABcIAAAFQAAAIgEAJQgEAJgGAEQgHAGgKACQgKACgNAAQgdAAgLgJgAgLglQgFAGAAAMQAAALAFAEQAEAEAHABQAHgBAFgEQAEgFAAgLQAAgLgFgFQgFgGgGAAQgHAAgEAFg");
	this.shape_26.setTransform(263.275,52.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAOAzIAAg1QAAgKgDgEQgDgDgHgBQgGAAgEAGQgEAEgBANIAAAwIglAAIAAhiIAjAAIAAAQQAIgKAIgEQAHgFAMABQAPAAAKAJQAIAKAAATIAAA+g");
	this.shape_27.setTransform(250.85,50.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AguArQgKgHABgNQAAgLAGgHQAGgHASgDIAagGIAOgEQAAgHgDgDQgDgDgHAAQgIAAgFADQgEADgCAGIgkgEQADgKADgFQAEgFAHgEQAFgDAKgBQAJgCAKAAQAQAAALACQAKABAHAHQAEAEADAHQADAIAAAHIAAArIABALIADAKIgiAAIgEgHIgBgFQgHAGgIAEQgIADgOAAQgRABgJgJgAAAAHQgLADgEAEQgDADAAAEQAAAEADADQAEADAFAAQAGAAAFgEQAGgDACgDQACgFAAgHIAAgGIgPAEg");
	this.shape_28.setTransform(238.2,50.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgmAzIAAhiIAjAAIAAAQQAEgLAGgEQAFgDAIAAQAJgBAKAGIgMAbQgHgDgEAAQgHAAgEAGQgFAJAAAWIAAAig");
	this.shape_29.setTransform(228.175,50.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgjA/QgQgHgJgQQgKgQAAgYQAAggATgTQASgTAhAAQAiAAASATQATASAAAhQAAAXgJAPQgHAQgQAIQgPAJgXAAQgVAAgPgIgAgTgcQgJAIABAVQgBAUAJAJQAHAJAMAAQANAAAIgJQAHgJAAgVQAAgUgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_30.setTransform(215.15,48.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgmAzIAAhiIAjAAIAAAQQAEgLAGgEQAFgDAIAAQAJgBAKAGIgMAbQgHgDgEAAQgHAAgEAGQgFAJAAAWIAAAig");
	this.shape_31.setTransform(197.575,50.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAqBEIAAhmIgaBmIgfAAIgahmIAABmIgjAAIAAiHIA4AAIAUBRIAVhRIA3AAIAACHg");
	this.shape_32.setTransform(183.55,48.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// buttons
	this.reset_btn = new lib.bubble2purple();
	this.reset_btn.name = "reset_btn";
	this.reset_btn.setTransform(828.2,552.1);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 2, false, new lib.bubble2purple(), 3);

	this.Face2_btn = new lib.circlebubblegrey();
	this.Face2_btn.name = "Face2_btn";
	this.Face2_btn.setTransform(750.5,552.1);
	new cjs.ButtonHelper(this.Face2_btn, 0, 1, 2, false, new lib.circlebubblegrey(), 3);

	this.Face1_btn = new lib.circlebubblered();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(673.5,552.1);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 2, false, new lib.circlebubblered(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Face1_btn},{t:this.Face2_btn},{t:this.reset_btn}]}).wait(1));

	// Character
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("Ahf1oQAwgDAvAAQIGAAF9FLQAqAkAoAoQE6E6BHGfQAWB6AACBQAAI+mXGXQmXGXo+AAQo+AAmWmXQmXmXAAo+QAAo9GXmXQFqlqHugoAidzKIApgqAhkz1IA1ArAhd0LIA4g3Aid0kIAjAd");
	this.shape_33.setTransform(221.8,266.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#996600").s().p("AgDBFQgCAAgCgDIgCgQQgBgPAAgOIABgsIAAgPIgCgGIgBgCIgEgIIgDgHIAAgHIAdAAIAFAPIACAHIADAIIAAAsIgBAoIAAAFIgCAPIgFABQgHACgHAAIgBAAg");
	this.shape_34.setTransform(210.5125,132.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF9900").s().p("AvUPVQmXmXABo+QgBo+GXmWQFqlqHugnIACAFIAAAPIgBAtQAAAPABAOIADAQQACADABAAIABAAQAIABAHgCIAFgCIADgPIAAgEIA3g4Ig3A4IAAgpIAAgtIgDgHQAwgEAvAAQIGABF+FKQApAkAoAoQE6E6BIGfQAUB6AACBQABI+mXGXQmXGXo+AAQo9AAmXmXgAgvzKIg1grgAidzKIApgqgAh60HIgjgdg");
	this.shape_35.setTransform(221.8,266.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).wait(1));

	// Frame
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_36.setTransform(480,320);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#99CCFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_37.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489.5,329,461.5,302);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 961,
	height: 640,
	fps: 24,
	color: "#0000CC",
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