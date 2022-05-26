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


(lib.Shoes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ASeFCQgBgDgBgDQghhWhsgPQgsgHg4AFQhag9hdhBQhOg3gwgiQhCgwgIgKQgVAdgYAdQgkAtgfAgQgtAxgjAbAB0GhQEXAbEFgGQD8gFCDgcQAxgKAggNQA9gYABgkAB0GhIgFBvIMfAAIAggEQAngFAlgIQALgDAKgCQBmgaAvgnQAEgQAAgYQABgKAAgJQgBgggKgcAEWB+IhtptIC9ggIBWJaAyeGhIgGBvIMgAAIAggEQAngFAlgIQALgDAJgCQBngaAugnQAEgQABgYQABgKgBgJQgBgggJgcAyeGhQEXAbEFgGQD7gFCDgcQAxgKAggNQA9gYACgkQgBgDgCgDQghhWhsgPQgrgHg5AFQhag9hchBQhPg3gwgiQhBgwgJgKQgUAdgYAdQglAtgeAgAEWB+IAqANQAoANAEgBQgrAhgcAAIh9ikQABgDADgDQAGgGAJAEQAgAMA7BmgAB0GhQgEgPgDgUQgDgeAAgpQADiJA7iaAv8B+IhtptIC8ggIBXJaQgtAxgkAbAv8B+IApANQAoANAEgBQgrAhgcAAIh8ikQABgDADgDQAFgGAKAEQAfAMA8BmgAyeGhQgFgPgCgUQgEgeABgpQACiJA8ia");
	this.shape.setTransform(119.3052,52.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AIohMQABgDADgDQAGgGAJAEQAgAMA7BlIApANQApANADgBQgqAhgdAAgArqhMQAAgDADgDQAGgGAJAEQAgAMA7BlIAqANQAoANAEgBQgrAhgcAAg");
	this.shape_1.setTransform(80.95,62.5355);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9900").s().p("AKXFIIgqgOIhtpsIC9ghIBWJbQgtAwgjAcIgBAAQgGAAglgMgAp8FIIgpgOIhtpsIC8ghIBXJbQgtAwgkAcIgBAAQgGAAglgMg");
	this.shape_2.setTransform(85.025,33.9786);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("ABtBnIAFhuQEXAaEFgGQD8gGCDgaQAxgKAggNQA9gYABgkQAKAbABAhIgBASQAAAYgEAQQgvAnhmAaIgVAEQglAJgnAFIggAEgAymBnIAGhuQEXAaEFgGQD7gGCDgaQAxgKAggNQA9gYACgkQAJAbABAhIAAASQgBAYgEAQQguAnhnAaIgUAEQglAJgnAFIggAEg");
	this.shape_3.setTransform(119.5333,95.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AB6DkQgFgPgCgUQgEgeABgpQACiIA8iaIB8CkQAcAAArghQAkgbAtgxQAeggAlguQAYgdAUgdQAJAKBBAwIB/BaIC2B9QA5gFArAHQBsAPAhBWIADAGQgCAkg9AYQggANgxAKQiDAcj7AFIhgABQjYAAjkgWgAyZDkQgEgPgDgUQgDgeAAgpQADiIA7iaIB9CkQAcAAArghQAjgbAtgxQAfggAkguQAYgdAVgdQAIAKBCAwIB+BaIC3B9QA4gFAsAHQBsAPAhBWIACAGQgBAkg9AYQggANgxAKQiDAcj8AFIhfABQjYAAjlgWg");
	this.shape_4.setTransform(118.7719,71.7295);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shoes, new cjs.Rectangle(-1.5,-1.5,241.6,108.7), null);


(lib.RightArm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEPqPQgSABgLAIQghAYA3BKQAuAgA8AgQB5A+BKgIIATAuQAXA5AQA0QAyCmgqA2IgZAPQgfAXgYAkQhOB2AODWQgOgWgZgbQgxg3g2gbQishWiZDkQgNgKgUgNQgrgZgpgMQiDgph2BlQgNgagXgeQgvg9g0gZQikhRiRE1Qh0FEEvASQEvASC8g8QAWAbBQARQCgAjEkgvQAkALAuAGQBcAOAxgUQAOgXARggQAPgfAQgnQA4iHAYiVQAEgcADgcQAWi2gdi3QgLhHgThHQgeh2gzh0QhXjGiQjBIjeAygAH9pvIg5AAQhLgGhagaIgQAA");
	this.shape.setTransform(82.3369,80.697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9933").s().p("AgKMYQhQgRgWgbQi8A8kvgSQkvgSB0lEQCRk1CkBRQA0AZAvA9QAXAeANAaQB2hlCDApQApAMArAZQAUANANAKQCZjkCsBWQA2AbAxA3QAZAbAOAWQgOjWBOh2QAYgkAfgXIAZgPQAqg2gyimQgQg0gXg5IgTguQhKAIh5g+Qg8ggguggQg3hKAhgYQALgIASgBIAQAAQBaAaBLAGIA5AAIg5AAQhLgGhagaIgQAAIgchlIDegyQCQDBBXDGQAzB0AeB2QATBHALBHQAdC3gWC2IgHA4QgYCVg4CHQgQAngPAfQgRAggOAXQgxAUhcgOQgugGgkgLQinAbh9AAQhcAAhEgPg");
	this.shape_1.setTransform(82.3369,80.697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RightArm, new cjs.Rectangle(-1,-1,166.7,163.4), null);


(lib.Nose2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFCC99").ss(1,1,1).p("Ah4m2IhsJaQhOAJg3AxQgiAdgNAmQgRAyARBBQAOAzAiA9QAVgtAhgcQBCg4A8BOQBDBXBnAJQALABALAAQCfiIBPATQApAJBEBKQB4i0h+h7Qgngmg8gcIgzgUIhIpBQh+j1h9D1g");
	this.shape.setTransform(41.7703,56.1938);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("AgKIxQhngJhDhXQg8hOhCA4QghAcgVAtQgig9gOgzQgRhBARgyQANgmAigdQA3gxBOgJIBspaQB9j1B+D1IBIJBIAzAUQA8AcAnAmQB+B7h4C0QhEhKgpgJQhPgTifCIIgFAAIgRgBg");
	this.shape_1.setTransform(41.7703,56.1938);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Nose2, new cjs.Rectangle(-1,-1,85.5,114.4), null);


(lib.Nose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFCC99").ss(1,1,1).p("Al5A3QgoACgbgfQgEgFgEgGQgUgegDg3QgEhBAOg9QAFgUAIgTQAYg2A3gwIAbgIQAogJBAgGQADAAADgBQDLgTFkAPIAHABQAIABAJADQAcAJAXARIABABQBLA4ADB4QACBxhRA9QgFAEgGAEQgdATgiAMIgeAHQgGgEgIgJQgPgRg+gvACiBIQgRgOgJgXQgTgsAlgpQAngtAlAFQAeAFASAjAkihkIAKABQANABAOADQApAHAaAQQAjAWgCAlQgEAsg+BBAjkACIgIADIiNAyIAAB6QAIAPAJAOQArBBBBAdQBQAkA2AYQBFAfApgqIANACQATABATgBQA+gCAygTQBGgaAkg4QAthHgMhyAgIAKIAAFT");
	this.shape.setTransform(47.6687,37.2867);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("Ah2FoIiGg8QhBgdgrhBQgJgOgIgPIAAh6ICNgyIAIgDIgIADIiNAyQgoACgbgfIgIgLQgUgegDg3QgEhBAOg9QAFgUAIgTQAYg2A3gwIAbgIQAogJBAgGIAGgBQDLgTFkAPIAHABIARAEQAcAJAXARIABABQBLA4ADB4QACBxhRA9IgLAIQgdATgiAMIgeAHQAMBygtBHQgkA4hGAaQgyATg+ACQgTABgTgBIgNgCIAAlTIAAFTQgXAYghAAQgYAAgegNgAiZgNQgEAsg+BBQA+hBAEgsIAAgFQAAghghgVQgagQgpgHIgbgEIgKgBIAKABIAbAEQApAHAaAQQAhAVAAAhIAAAFgACIAjQAJAXARAOQgRgOgJgXQgGgPAAgPQAAgcAYgbQAjgoAhAAIAAAAIAAAAIAHAAIAAAAIABAAQAeAFASAjQgSgjgegFIgBAAIAAAAIgHAAIAAAAIAAAAQghAAgjAoQgYAbAAAcQAAAPAGAPgAEYAyQAIAJAGAEQgGgEgIgJQgPgRg+gvQA+AvAPARg");
	this.shape_1.setTransform(47.6687,37.2867);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Nose, new cjs.Rectangle(-1,-1,97.4,76.6), null);


(lib.Mustache = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AOrAfQARhLgZhEQgKgbgQgXIgOgSQhqhhhCAtQgVAOgOAaQgHANgDALQCfgigXBrQgXBpgvgMQg6AGiThmQgtgggxgnIgoghQiThhh9AnQgnAMggAYQgQAMgtA3QgIgQgQgTQgggngsgVQiKhCjDCKIh3BYQiBBchRAfQhAARgWhXQgWhZDAg0QgLgbgYgUQgvgng7AqIglAZQgqAhgWAqQhHCECZCmIARALQAXANAaAMQBVAnBfANQEwAqEgjlIAcATQAlAYAqAXQCEBJB9AiQCvAvCIgmQCpgwBhiz");
	this.shape.setTransform(94.6071,27.4208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AFpD4Qh9giiEhJQgqgXglgYIgcgTQkgDlkwgqQhfgNhVgnQgagMgXgNIgRgLQiZimBHiEQAWgqAqghIAlgZQA7gqAvAnQAYAUALAbQjAA0AWBZQAWBXBAgRQBRgfCBhcIB3hYQDDiKCKBCQAsAVAgAnQAQATAIAQQAtg3AQgMQAggYAngMQB9gnCTBhIAoAhQAxAnAtAgQCTBmA6gGQAvAMAXhpQAXhrifAiQADgLAHgNQAOgaAVgOQBCgtBqBhIAOASQAQAXAKAbQAZBEgRBLIgBgBQhhCzipAwQg9ARhEAAQhVAAhhgag");
	this.shape_1.setTransform(94.6071,27.4208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mustache, new cjs.Rectangle(-1.5,-1.5,192.3,57.9), null);


(lib.Mouth2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AqkisQAYgmApg3QBShsBThPQB1huBngiQCAgsBiBPIALgKQAQgMATgIQA9gcBJAKQBlAPBvBZQCLBvCSDeIgEAaQgGAggIAkQgdBygvBrQiXFWkaCAIlAgHQj9iKiYk/QgvhkgghpQgKghgHgegAhDlbQAlgEARAKIAkgBQAzACBCANQABAAABAAACWjRICrAPIAkhHQCEAvCaBMQgOAcgcAqQg3BUhEBHQgmAognAhQgyAqgzAeQg9Akg/AVQhUAchZABACWjRIgIh2QBjAUB0AqAl0AwQAKgWAVgaQAqgzA1gWQBkgqB3BLQB6h3B3BNQAlAYAgApQAQAUAJAPIA2gHIAnCRADoA3IAVgdIA3gIADoA3IBECtACWBqIAaCzAhDlbIAoCKICxAAAkljfIDhAOIABiKAmojoQA6gYAMgFQAkgOAggMQCUg2BHgGAkljfIAHhAAmiCCQgEgEgEgDQgNgMgNgNQhEhCg6hPIgzhfQA6gcCTg+ICDAJAl0AwIA6AAIgDAtIgHBvQAuAfAuAWQBAAfBCAOAmiCCIgMhSIA6AAAmiCCQAvAqAvAgAjdB6IBpAGIAOCuQA0ALA1ABAk9BdIBjgBIgDAeIgLCHAANB5IgKDBAh0CAICBgHICJgPIgUgsIBmgH");
	this.shape.setTransform(67.725,61.2995);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6666").s().p("Ai8ByIACgeIhiABIADgtIg6AAQAKgWAVgZQApgzA1gXQBkgqB3BMQB7h4B2BNQAlAZAgApQARAUAIAPIg2AHIgVAdIhnAIIAVAsIiJAPIiBAHg");
	this.shape_1.setTransform(64.475,62.0163);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AFkBrIg3AHQgIgPgRgVQgggpglgYQh2hMh6B2Qh4hKhkApQg1AWgpA0QgVAagKAWIg7AAIANBSIgIgHIgagZQhEhCg6hQIgzheQA6gcCTg+ICCAJIDiAOIABiKIAoCKICxAAICrAPIAkhHQCEAvCZBMQgOAcgbApQg4BVhEBHQgmAognAhg");
	this.shape_2.setTransform(68.375,51.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhXE/IgNitICAgHIgKDBIAKjBICJgPIgUgsIBngIIBDCuQg9Akg/AVIgaizIAaCzQhUAbhZACQg0gBg1gMgAjZETIALiIIBqAHIANCtQhCgOhAgegAjZETQgugXgtgfIAGhvIBjgBIgDAeIgLCIIAAAAgAD4BIIAVgdIA2gHIA2gIIAnCSQgyApgzAfgAk0DdQgwgggvgqIgMhSIA6AAIA7AAIgEAtIgGBvIAAAAgACli/IgHh2QBjAUBzAqIgkBGgAgLi/IgpiLQAmgDAPAKIAlgBQAzABBCAOIADAAIAHB2gAkWjOIAIg/QCTg2BHgHIgBCLgAmYjWIBFgdIBFgaIgIA/g");
	this.shape_3.setTransform(66.2,59.5296);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AiqJeQj9iKiYk/QgvhkgghpQgKghgHgeIgFg1QAYgmApg3QBShsBThPQB1huBngiQCAgsBiBPIALgKQAQgMATgIQA9gcBJAKQBlAPBvBZQCLBvCSDeIgEAaQgGAggIAkQgdBygvBrQiXFWkaCAgAhDlbQhHAGiUA2IhEAaIhGAdQiTA+g6AcIAzBfQA6BPBEBCIAaAZIAIAHQAvAqAvAgQAuAfAuAWQBAAfBCAOQA0ALA1ABQBZgBBUgcQA/gVA9gkQAzgeAygqQAnghAmgoQBEhHA3hUQAcgqAOgcQiahMiEgvQh0gqhjgUIgCAAQhCgNgzgCIgkABQgMgHgYAAIgSABg");
	this.shape_4.setTransform(67.725,61.2995);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mouth2, new cjs.Rectangle(-1,-1,137.5,124.6), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ab8haQjgivhZgiQhQgfhTgYQhlgfhqgVQhSgQhQgKQipgWijAFQimAEigAhAb8hZIAAgBA7og5IhAiSQBKhVB6hzQDzjmDsiTQFLjNEPgKQFUgNDgEmQEIkmFYAKQEUAIE7DJQDhCQDfDiQBvBxBCBVQgVBDgYBAAJ1hwIE2AAIAElAAJ1hwIgSlRAOrhwIEkgSIBRjgAh2hLIgSkQQAuAQAtATQChhCCpgiAEtheIgQk+Ah2hLIGjgTIFIgSAIsBYIAcGIQCYgkCdg6QCng9CthWQEOiHEdjBADkBYIFIAAIE2glIE2g1IA5DxAEJIUQBQgIBRgNQBOgNBQgSAgaBGIAjHbQCAgBCAgMAgaBGID+ASIAlG8ANiAzIAbFPA7og5IBACQQB3DECLClQG6INHTAIIQhATIArgLQA4gPA+gWQDGhFC1hvQIGk/DSoeAuFmzIgBFoIk2AAIjaASIgKjjQBYgpBegfQBFgXBJgSQBZgVBZgMQAJgCAJgBQAKgBAJgBQAYgDAZgCQCUgNCSANQALABAKABIAAFrIltAAAoZm2QA3AFA2AKQAlAGAkAIQBuAXBtAnA7og5IFIjjAzqlkIAuEZA1zC7QAzAbAxAYQAdAOAeAOQB3A4B7AtQCRA0CXAmQA1ANA1AMQCTAfCRAQQCcARCZgBAzgBGIAMDEAzgBGIDbgTIAjE8A1zC7IgRh1ICkAAA7og5IEWC9QAyAfAtAYAq9BGIADGDAl1AzIBJHeAq9BGIFIgTIFbATAwFAzIFIATAoZhLIGjAA");
	this.shape.setTransform(183.275,99.9836);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjrHiIhJneIFZATIAlHbIgJAAQiVAAiXgQgAAlAXID/ASIFJAAIAcGIQhQAShPANQhQANhRAIIglm8IAlG8Qh/AMiAABgAoPGzQg2gMg1gNIgDmDIFJgTIBJHeQiSgQiSgfgAKJGxIgcmIIE2glIE2g1IA5DxQiuBWinA9IgalPIAaFPQidA6iXAkgAuiFAIgjk8IFIATIADGDQiXgmiRg0gAO9FTgAyUDbIgMjEIAMDEIg7gcQgwgYgzgbIgSh1ICkAAIDbgTIAjE8Qh7gth3g4gAJtApgAp9AXgAk0AEgA1flLQBYgpBegfIAuEZIjbASgAnYh6IAAlrIAAFrIltAAIAAloIAAFoIk2AAIgukZQBFgXBIgSQBagVBYgMIATgDIASgCIAxgFQCUgNCTANIAVACQA2AFA3AKQAkAGAlAIQBuAXBtAnQAtAQAtATQCihCCpgiQCfghCmgEQCjgFCpAWQBRAKBSAQQBpAVBlAfIhRDgIkjASIADlAIgDFAIk2AAIgTlRIATFRIlJASIgPk+IAPE+ImiATIgSkQIASEQgAx7h6gAK2ifg");
	this.shape_1.setTransform(176.825,104.6794);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AoZPVQnTgIm6oNQiLilh3jEIhAiQIEWC9QAyAfAtAYQAzAbAxAYIA7AcQB3A4B7AtQCRA0CXAmQA1ANA1AMQCTAfCRAQQCcARCZgBQCAgBCAgMQBQgIBRgNQBOgNBQgSQCYgkCdg6QCng9CthWQEOiHEdjBQjSIeoGE/Qi1BvjGBFQg+AWg4APIgrALgA7og5IhAiSQBKhVB6hzQDzjmDsiTQFLjNEPgKQFUgNDgEmQEIkmFYAKQEUAIE7DJQDhCQDfDiQBvBxBCBVQgVBDgYBAQjgivhZgiQhQgfhTgYQhlgfhqgVQhSgQhQgKQipgWijAFQimAEigAhQipAiihBCQgtgTgugQQhtgnhugXQgkgIglgGQg2gKg3gFIgVgCQiSgNiUANIgxAFIgTACIgSADQhZAMhZAVQhJAShFAXQheAfhYApIlIDjg");
	this.shape_2.setTransform(183.275,99.9836);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ASPA3Ik2A3Ik2AkIlJAAIj+gSIlagSIlJASIlIgSIjbASIikAAIASB1QgtgYgygfIkWi+IFIjiIAJDiIDbgRIE2AAIFtAAIGjAAIGigSIFJgSIE2AAIEjgTIBRjgQBTAZBQAeQBZAiDgCwIAAAAQkdDBkNCHg");
	this.shape_3.setTransform(184.225,94.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mouth, new cjs.Rectangle(-1,-1,368.6,202), null);


(lib.LeftArm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkOqPQATABAKAIQAiAYg4BKQguAgg8AgQh5A+hJgIIgUAuQgXA5gQA0QgyCmAqA2IAZAPQAfAXAYAkQBOB2gODWQAOgWAZgbQAxg3A2gbQCshWCZDkQANgKAVgNQArgZAogMQCDgpB2BlQANgaAYgeQAvg9AzgZQCkhRCSE1QBzFEkvASQkvASi7g8QgXAbhQARQigAjkkgvQgkALguAGQhcAOgwgUQgegsghhRQhDiggUi0Qgej9BDj+QBTk/DmkyIDdAygAn8pvIA5AAQBLgGBagaIAQAA");
	this.shape.setTransform(82.3306,80.697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9933").s().p("Am5MMQgkALguAGQhcAOgwgUQgegsghhRQhDiggUi0Qgej9BDj+QBTk/DmkyIDdAyIgcBlIgQAAQhaAahLAGIg5AAIA5AAQBLgGBagaIAQAAQATABAKAIQAiAYg4BKQguAgg8AgQh5A+hJgIIgUAuQgXA5gQA0QgyCmAqA2IAZAPQAfAXAYAkQBOB2gODWQAOgWAZgbQAxg3A2gbQCshWCZDkQANgKAVgNQArgZAogMQCDgpB2BlQANgaAYgeQAvg9AzgZQCkhRCSE1QBzFEkvASQkvASi7g8QgXAbhQARQhEAPhdAAQh8AAingbg");
	this.shape_1.setTransform(82.3306,80.697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LeftArm, new cjs.Rectangle(-1,-1,166.7,163.4), null);


(lib.Hamburger = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AN9v5IgGAOQgHARAAAQQAAAoAqAQQAKAEANACQADgEADgFQAOgbgegkgABEv+IgNAJQgOALgIAOQgUAiAdAjQAHAIAJAJQAGgCAEgDQAagQgIgvgADY0jIgNAJQgOALgIAOQgUAiAdAjQAHAIAJAJQAGgCAEgDQAagQgIgvgAIGzaIgNAJQgOAMgIANQgZArAyArQAmgMgKg3gAKSusIgGAOQgGARgBAQQAAAoAqAQQALADAMADQAEgEACgFQAPgbgfgkgAGJsdIgLALQgKAPgFAPQgKAnAlAaQAFAEAIAEQADACAEACQAFgDADgEQABgBABAAQASgWgTgqgAAzojIgNAJQgOAMgIANQgTAjAbAjQAHAIAKAIQAFgCAFgCQAagQgJgvgAIhn2IgNAJQgOALgIAOQgZAqAyAsQAmgNgKg3gATPpkIgNAJQgOALgIAOQgUAiAcAjQAHAIAKAJQAFgCAFgDQAagQgJgvgANuqmIgKAMQgKAPgEAPQgLAnAlAaQAIAGAMAGQAEgDAEgEQAVgWgUgsgASbgSQBZh5huhRIB1AAQD/mys9pAQo2kuquDZQuIH1DvJHIIXAHIcvAEAR5GtQBpAOAAg0QBphahph8QBgiIing7ARNCyIAAgBIA4AAIBdAAARNCyIA4gBAulEfIgBAAQBfAcCUh6IGfAAQBcBqBEgJQA3gHAohPIG+AAICKCqQBVAOBViYQBFgHBFBiQAFAHAGAIIDaikIABAAAPcGJQABgBABgBQADABADABAIdF8QDXCaDEh1QAIgFAIgFAQiGbQAcAHAZAFASwKHQALgaAFgYQAJgngFgjQgGgsgegmASwKHIBEAAQByHyoCEGI7VAAQpAkvCcnJIB/AAgAIdF8IAEAAAHwF7IAtABAHwF7QAWgBAWABIABABAIcF7IABAAAjaFzQAHgCAIgCQBTgVBcAYQAvAMAzAZQBaA8CCg8QBjgbBrgBAqJyrIgNAJQgOALgIAOQgUAiAcAjQAHAIAKAJQAFgCAFgDQAagQgJgvgAmA0jIgNAJQgOALgIAOQgUAiAdAjQAHAIAJAJQAGgCAEgDQAagQgIgvgAhf0jIgNAJQgOALgIAOQgUAiAcAjQAHAIAKAJQAFgCAFgDQAagQgJgvgAtSu/IgNAJQgOAMgIANQgUAjAcAjQAHAIAKAIQAFgCAFgCQAagQgJgvgAx0oaIgQABQgSADgNAIQgrAYAWA/QAmAIATg1gAs7rPIgNAJQgDADgDADQgKAJgGAKQgUAjAdAjQAHAIAJAIQAGgCAEgCQAagQgIgvgAtbmkIgGAOQgGARgBAQQAAAPAGAMQANAbAuAIQAZgbgegnQgCgDgDgDgAy8jcIBrAAQhnB5BnBRQi2BpBxBqICPAAIAVAAQAkBIA3AUAl+vFIgQABQgEAAgEACQgNACgLAHQgiATAHAtQACAKAEANQAGAAAFABQAfgBAQgtgAjprDIgNAJQgOAMgIANQgUAjAcAjQAHAIAKAIQAFgCAFgCQAagQgJgvgAoNn7IgNAJQgEADgCADQgKAJgGAKQgUAjAcAjQAHAIAKAIQAFgCAFgCQAagQgJgvgAnaGXQBYBPBXhPQAOgJAOgGAtBFsQALgEALgDICcADIBMABQA8AVA3AtApSFkQAHACAIADAyWDBQhLBZARBEQALAqAvAjQAKADAKACQBOATBXgLQAZgQAYgNQADABADABAusGbQAegQAcgNQADgBACgBAyWG1IAADSAxRgSMAjsAAA");
	this.shape.setTransform(-0.013,0.03);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AIRDEIiKiqIm+AAQgoBPg2AHQhFAJhchqImeAAQiVB6hegcIAAAAIhiheIAVAAQAkBIA4AUQg4gUgkhIIgVAAIiPAAQhxhpC2hqMAjtAAAQCnA8hgCIIhdAAIg4AAIgBAAIAAAAIjbCkIgKgPQhGhihFAHQhNCLhOAAIgPgBgALqAPIgHgLIgMALIAHAAIAMAAgAwpAPg");
	this.shape_1.setTransform(3.3129,17.834);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AyuCSIAAjRIAVgFQBOASBXgLQAYgQAZgNIAGACIgGgCQAdgQAdgMIAEgBIABgBQACgFAGgDQAHgFASgDIALgBQAggEAeACQATABAMAEIBVgHIBLABQA8AWA3AsQA4AWAwABQAAgDADgCQADgEAJAAIAMgBIAKgIIA1goIATgOQAKgIAHgCQAGgBAGACIAFADQADACACADIABABIAIgKQBUgVBcAYQAwAMAyAYQBaA8CCg8QBigbBsgBIAsABIAAAAIAAAAIgsgBQAWAAAWABIAAAAIAEAAIgEAAQDXCZDFh0IAGABIADgDIAGgHIADgEQAGgHAFgCIAHgCIAHAAIAEABQAJgFAJACQAIACAEAIQARAFAMAFIAIAFIAKAFIAJABQAKAAAFADIAKgBIADgBQARgEAIAFIAHAFIADAEIAdAEIAFABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAdAlAHAsQAFAigJAoQgGAYgKAagAIFh5gApbiMgAqmiNIA8gEIAPAFg");
	this.shape_2.setTransform(2.3143,50.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AH7A6IAEAAIgEgBIAAAAQgWgBgWABQhsABhiAbQiCA8hag8QgygZgwgMQhcgYhUAVIgOAEIAOgEIgIALIgBgCQgCgDgDgCIgFgCQgGgDgGACQgHABgKAIIgTAPQgOAGgOAJQgsAngsAAQgsAAgsgnQAsAnAsAAQAsAAAsgnQAOgJAOgGIg1AnIgKAJIgMAAQgJAAgDAEQgDADAAADQgwgBg4gWQg3gtg8gVIgPgFIg8AEIidgDIgVAHIgLABQgSADgHAEQgGAEgCAEIgFACQgdANgdAQQgZANgYAQQhXALhOgTIgVgFQgvgjgKgqQgShDBLhZICPAAIBiBeIAAAAQBeAcCVh6IGeAAQBcBqBFgJQA2gHAohPIG+AAICKCpQBVAOBViXQBFgHBGBhIAKAPIDbijIAAAAIA5gBIBdAAQBpB8hpBZQgBA0hogOIgHgGQgIgEgRADIgDABQgYgFgcgHQgMgGgRgFQgEgIgIgCQgJgBgJAEIgEAAIgFgCIgCACIgHABQgFADgGAGIgDAEIgPAKQhVAyhYAAQh0AAh7hXgAkwBGgALeiAIgHAAIAMgLIAHALIgMAAg");
	this.shape_3.setTransform(3.3095,32.2256);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AxwBnQhnhRBnh4IGpgEIcvAEQBtBRhYB4g");
	this.shape_4.setTransform(3.0278,-12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC9900").s().p("AtxV/QpAkvCcnJIB/AAMAlGAAAIBEAAQByHyoCEGgASGjcI8vgEIoXgHQjvpHOIn1QKujZI2EuQM9JAj/GygAsnk3QALgMAAgPQAAgSgQgVIgFgGIgqglIAqAlIAFAGQAQAVAAASQAAAPgLAMQgugIgNgbQgGgMAAgPQABgQAGgRIAGgOIgGAOQgGARgBAQQAAAPAGAMQANAbAuAIIAAAAgAIXl+QAegKAAgkQAAgKgCgMIgSg0IASA0QACAMAAAKQAAAkgeAKQghgdAAgdQAAgOAIgOQAIgOAOgLIANgJIgNAJQgOALgIAOQgIAOAAAOQAAAdAhAdIAAAAgAoXmDIAKgEQATgMAAgeQAAgKgCgLIgRg1IARA1QACALAAAKQAAAegTAMIgKAEIgRgQQgRgVAAgUQAAgPAJgOQAGgKAKgJIAGgGIANgJIgNAJIgGAGQgKAJgGAKQgJAOAAAPQAAAUARAVIARAQIAAAAgAApmrIAKgEQATgMAAgeQAAgKgCgLIgRg1IARA1QACALAAAKQAAAegTAMIgKAEIgRgQQgRgVAAgUQAAgPAJgOQAIgNAOgMIANgJIgNAJQgOAMgIANQgJAOAAAPQAAAUARAVIARAQIAAAAgAyum2QAeAAAQgrIAAAAIAAgBIABgCIALg2IgLA2IgBACIAAABIAAAAQgQArgeAAIgBAAIAAAAIgIgBIgBAAQgIgVAAgRQAAghAdgQQANgIASgDIAQgBIgQABQgSADgNAIQgdAQAAAhQAAARAIAVIABAAIAIABIAAAAIABAAgATFnsIAKgFQATgMAAgdQAAgKgCgMIgRg0IARA0QACAMAAAKQAAAdgTAMIgKAFIgRgRQgRgUAAgVQAAgOAJgOQAIgOAOgLIANgJIgNAJQgOALgIAOQgJAOAAAOQAAAVARAUIARARIAAAAgAOEovIAIgHQALgLAAgRQAAgQgKgWIgfguIAfAuQAKAWAAAQQAAARgLALIgIAHIgUgMQgdgUAAgcQAAgIADgJQAEgPAKgPIAKgMIgKAMQgKAPgEAPQgDAJAAAIQAAAcAdAUIAUAMIAAAAgAjzpLIAKgEQATgMAAgeQAAgKgCgLIgRg1IARA1QACALAAAKQAAAegTAMIgKAEIgRgQQgRgVAAgUQAAgPAJgOQAIgNAOgMIANgJIgNAJQgOAMgIANQgJAOAAAPQAAAUARAVIARAQIAAAAgAtFpXIAKgEQAUgMAAgeQAAgKgCgLIgSg1IASA1QACALAAAKQAAAegUAMIgKAEIgQgQQgRgVAAgUQAAgPAIgOQAGgKAKgJIAGgGIANgJIgNAJIgGAGQgKAJgGAKQgIAOAAAPQAAAUARAVIAQAQIAAAAgAGeqnIAIgHIACgBQAJgLAAgQQAAgQgKgVIgeguIAeAuQAKAVAAAQQAAAQgJALIgCABIgIAHIgHgEIgNgIQgdgVAAgcQAAgHACgJQAFgPAKgPIALgLIgLALQgKAPgFAPQgCAJAAAHQAAAcAdAVIANAIIAHAEIAAAAgALGs/QAEgEACgFQAFgJAAgJQAAgUgVgZIgqglIAqAlQAVAZAAAUQAAAJgFAJQgCAFgEAEIgXgGQgqgQAAgoQABgQAGgRIAGgOIgGAOQgGARgBAQQAAAoAqAQIAXAGIAAAAgAtctHIAKgEQATgMAAgeQAAgKgCgLIgRg1IARA1QACALAAAKQAAAegTAMIgKAEIgRgQQgRgVAAgUQAAgPAJgOQAIgNAOgMIANgJIgNAJQgOAMgIANQgJAOAAAPQAAAUARAVIARAQIAAAAgAm4thQAfgBAQgtIALg2IgLA2QgQAtgfABIgLgBIgGgXIgBgPQAAghAcgQQALgHANgCIAIgCIAQgBIgQABIgIACQgNACgLAHQgcAQAAAhIABAPIAGAXIALABIAAAAgAA6uGIAKgFQAUgMAAgdQAAgKgCgMIgSg0IASA0QACAMAAAKQAAAdgUAMIgKAFIgQgRQgRgUAAgVQAAgOAIgOQAIgOAOgLIANgJIgNAJQgOALgIAOQgIAOAAAOQAAAVARAUIAQARIAAAAgAOxuMIAGgJQAEgIAAgKQAAgUgUgZIgqglIAqAlQAUAZAAAUQAAAKgEAIIgGAJQgNgCgKgEQgqgQAAgnIAAgBIAAgCQAAgPAHgQIAGgOIgGAOQgHAQAAAPIAAACIAAABQAAAnAqAQQAKAEANACIAAAAgAqTwzIAKgFQATgMAAgeQAAgJgCgMIgRg0IARA0QACAMAAAJQAAAegTAMIgKAFIgRgRQgRgUAAgVQAAgOAJgOQAIgOAOgLIANgJIgNAJQgOALgIAOQgJAOAAAOQAAAVARAUIARARIAAAAgAH8xiQAegKAAgkQAAgKgCgLIgSg1IASA1QACALAAAKQAAAkgeAKQghgdAAgcQAAgPAIgOQAIgNAOgMIANgJIgNAJQgOAMgIANQgIAOAAAPQAAAcAhAdIAAAAgADOyrIAKgFQAUgMAAgdQAAgKgCgMIgSg0IASA0QACAMAAAKQAAAdgUAMIgKAFIgQgRQgRgUAAgVQAAgOAIgOQAIgOAOgLIANgJIgNAJQgOALgIAOQgIAOAAAOQAAAVARAUIAQARIAAAAgAhpyrIAKgFQATgMAAgdQAAgKgCgMIgRg0IARA0QACAMAAAKQAAAdgTAMIgKAFIgRgRQgRgUAAgVQAAgOAJgOQAIgOAOgLIANgJIgNAJQgOALgIAOQgJAOAAAOQAAAVARAUIARARIAAAAgAmKyrIAKgFQAUgMAAgeQAAgJgCgMIgSg0IASA0QACAMAAAJQAAAegUAMIgKAFIgQgRQgRgUAAgVQAAgOAIgOQAIgOAOgLIANgJIgNAJQgOALgIAOQgIAOAAAOQAAAVARAUIAQARIAAAAg");
	this.shape_5.setTransform(-0.013,0.03);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hamburger, new cjs.Rectangle(-134.5,-141.6,269,283.29999999999995), null);


(lib.Hair2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGIBqQgIEhFegFQCMhhAbiTQA0kmk/AyQgFgggTgvQgmhchHhJQjkjonUA4Qg8AFhWAUQirAph9BPQivBthPEVQhOEVEwDwQBkgoAdgoQA6hQgvhzID5haAHkhOIglAzQgoBAgPBFIrNCuQgigdBThWAAihOIhCAuQhQA4g/AyQg/A0gmAnAltgSIiRB3QibCGgyBLIC+g3");
	this.shape.setTransform(90.7915,53.0315);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("At7ANQBPkVCvhtQB9hPCrgpQBWgUA8gFQHUg4DkDoQBHBJAmBcQATAvAFAgQE/gyg0EmQgbCTiMBhQleAFAIkhIrNCuQgigdBThWQAmgnA/g0QA/gyBQg4IBCguIhCAuQhQA4g/AyQg/A0gmAnIj5BaIi+A3QAyhLCbiGICRh3IiRB3QibCGgyBLIC+g3QAvBzg6BQQgdAohkAoQkwjwBOkVgAG/gbQgoBAgPBFQAPhFAohAIAlgzg");
	this.shape_1.setTransform(90.7915,53.0315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hair2, new cjs.Rectangle(-1,-1,183.6,108.1), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Arog9Qg2ALgnALICMhaIhQhQIB4gKIAeiCIAoCCIAcgcQAlgiArghQCChiCOgvQAKgDAJgDQDphHDgBNQDzBTDmEBIAeGFQgZgygkg7QhIh1g5gsIAsBlQArBsgHAfQgJgkhVglQgQgHgRgGQirg/lWgLQhAgUhbglQg7gYg3gaQhXgxhxg/QBZA7BvA1Arog9QiOFcBRCIQAZArAsAQQAWAIBhAAQEIjQjWl9IA4ApQBGAwBJAnQDpB/CngGQAUAFgygiQhCgti3hnAqHhPQg1AJgsAJAIXCaIAvFaQDQhnAehnQA8jPiKjO");
	this.shape.setTransform(0.0364,0.022);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AIXCaIAhANQBVAlAJAkIABgKQAAgjglheIgshlQA5AsBIB1QAkA7AZAyIgemFQCKDOg8DPQgeBnjQBngArgHiQgsgQgZgrQhRiICOlcQg2ALgnALICMhaIhQhQIB4gKIAeiCIAoCCIAcgcQAlgiArghQCChiCOgvIATgGQDphHDgBNQDzBTDmEBIAeGFQgZgygkg7QhIh1g5gsIAsBlQAlBeAAAjIgBAKQgJgkhVglIghgNQirg/lWgLQhAgUhbglQg7gYg3gaIjIhwQBZA7BvA1QC3BnBCAtQAyAigUgFQinAGjph/QhJgnhGgwIg4gpQDWF9kIDQIgLAAQhXAAgVgIgArog9QAsgJA1gJQg1AJgsAJgAIXCaIAAAAg");
	this.shape_1.setTransform(0.0364,0.022);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hair, new cjs.Rectangle(-84.7,-50.9,169.5,101.9), null);


(lib.Glasses2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ABzjZQgOgQgPgMQgjgXgnAAQgxABg3AqIABARQAAAWgDAYQgIBQgjBNQhdDMj3B9QgwAYg3AWQgSAAgdgHQgygMgqgbQgHgEgGgFQiYhsAAkRQgUgGgQgKQghgUAOgTQAEgOAJgJQAUgSAiAXQACgTANgbQAag2A4gmQC1h7GnBMIBngQQB/gSB6gHABzjZIBCiUQEjgQC6AxQD4BBAfCxIAGBJQADBWgQBHQgdCEhYA0QhBAmhigFQgWgBgkgKQgdgJgdgNQgpgSgogbQjaiQhnlJQgFgKgMgNgAH4hsIBVAxAH+gvICHBiAoTijIBoBWAirlEIBPBjAp0h4ICxB5AqAgKIAwAq");
	this.shape.setTransform(0.0047,0.0266);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("ApzFrQgygMgqgbIgNgJQiYhsAAkRQgUgGgQgKQghgUAOgTQAEgOAJgJQAUgSAiAXQACgTANgbQAag2A4gmQC1h7GnBMIBPBjIABARQAAAWgDAYQgIBQgjBNQhdDMj3B9QgwAYg3AWQgSAAgdgHgApQAgIgwgqgAnDABIixh5gAmrhNIhohWgAKKFlQgWgBgkgKQgdgJgdgNQgpgSgogbQjaiQhnlJQgFgKgMgNIBCiUQEjgQC6AxQD4BBAfCxIAGBJQADBWgQBHQgdCEhYA0Qg6AihTAAIgWgBgAKFAzIiHhigAJNg7IhVgxg");
	this.shape_1.setTransform(0.0047,0.0266);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Glasses2, new cjs.Rectangle(-95.9,-38.4,191.8,76.9), null);


(lib.Glasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AIWGIQgYAAgjgGQhPgNhDggQgYgMgWgOQinhrgEjkQgagjg9gXQg8gXhHBFIgBARQgCAVgEAYQgNBKghBAQgxBdhSA2QhhBAiRAKQgXgBgjgGQhHgMg9gbQgcgNgYgPQiShagUi0QgaAEgZgFQgygIAGgoQgDgOAJgMQAJgLASgEQAEgBAEgBQAUgDAdADQADgUAJgeQASg9Aig0QBAhhBpguQBKggBegGQBwgHBcAtQAKAFAKAGQBNArA6BOQAnA2AVA1QAAACABABIAOgPQAXgUAcgKQBXgfBkBKQAEgQAMgaQAXgyAkgqQA8hGBTgkQBQgiBngEIAPABQATABAUADQA+AKA4AXQAEACAEACQC9BVAsDZIANgCQAPgBAPACQAsAGAIApQgBANgMAMQgYAYg2gHIgCANQgDASgFASQgRA8ghA0QgtBFhCAsQhfA/iLAOAN8ACQAACPhsBlQgvAsg5AZQhHAfhUAAQhVAAhHgfQgcgMgagRQgagSgYgWQhshlAAiPQAAiNBshlQBrhkCZAAQCYAABrBkQAEAEADADQALALAKALQAZAcARAgQAmBGAABTgAiogEQAACNhsBlQg4A0hDAZQg/AXhKAAQhJAAg/gXQgngOgigXQgbgSgYgWQhrhlAAiNQAAiPBrhlQBshkCYAAQCYAABsBkQAEAEADADQALALAJALQAZAcASAgQAmBGAABVg");
	this.shape.setTransform(0.014,0.0029);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AF3E9QgcgNgagRQgagSgYgWQhshlAAiOQAAiNBshlQBrhlCZAAQCYAABrBlIAHAHIAVAVQAZAdARAfQAmBGAABUQAACOhsBlQgvAtg5AZQhHAfhUAAQhVAAhHgfgAqaE9QgngPgigXQgbgRgYgXQhrhlAAiNQAAiOBrhlQBshlCYAAQCYAABsBlIAHAHIAUAVQAZAdASAfQAmBGAABVQAACNhsBlQg4A0hDAaQg/AXhKAAQhJAAg/gXg");
	this.shape_1.setTransform(-0.575,-0.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AIWGIQgYAAgjgGQhPgNhDggQgYgMgWgOQinhrgEjkQgagjg9gXQg8gXhHBFIgBARQgCAVgEAYQgNBKghBAQgxBdhSA2QhhBAiRAKQgXgBgjgGQhHgMg9gbQgcgNgYgPQiShagUi0QgaAEgZgFQgygIAGgoQgDgOAJgMQAJgLASgEIAIgCQAUgDAdADQADgUAJgeQASg9Aig0QBAhhBpguQBKggBegGQBwgHBcAtIAUALQBNArA6BOQAnA2AVA1IABADIAOgPQAXgUAcgKQBXgfBkBKQAEgQAMgaQAXgyAkgqQA8hGBTgkQBQgiBngEIAPABQATABAUADQA+AKA4AXIAIAEQC9BVAsDZIANgCQAPgBAPACQAsAGAIApQgBANgMAMQgYAYg2gHIgCANQgDASgFASQgRA8ghA0QgtBFhCAsQhfA/iLAOgAEJjwQhsBlAACNQAACPBsBlQAYAWAaASQAaARAcAMQBHAfBVAAQBUAABHgfQA5gZAvgsQBshlAAiPQAAhTgmhGQgRgggZgcIgVgWIgHgHQhrhkiYAAQiZAAhrBkgAscj4QhrBlAACPQAACNBrBlQAYAWAbASQAiAXAnAOQA/AXBJAAQBKAAA/gXQBDgZA4g0QBshlAAiNQAAhVgmhGQgSgggZgcIgUgWIgHgHQhshkiYAAQiYAAhsBkg");
	this.shape_2.setTransform(0.014,0.0029);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Glasses, new cjs.Rectangle(-104.6,-40.2,209.3,80.5), null);


(lib.Eyes2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AG1leQAXACAkAHQA9ALA2AWQAIAEAJAEQBeAqA2BDQAwA9ARBRQADAQACARIgFAuQAAABAAABQgLA4gdAxQgMATgNARQhkB9iuAhIg8ALQhIAJg/gBQjHgDgZhyQBNCNEYgxQCzggBwiIQAjgrAWg0IAPgsQAEg+gLgcQgJgXgLgWQgQgdgUgaQhUhuiIgaQgsgIgxABQgsABgnAGQiNAZhNBpQgfApgQAyQgJAZgCAQQAAgSAHgdQANg5AegwQAthIBKgmQBSgqB2AAgAC5AEQAABJA1A0QA1A1BLAAQBKAAA2g1QA0g0AAhJQAAhJg0g0Qg2g0hKAAQhLAAg1A0Qg1A0AABJgAm0leQgXACgkAHQg9ALg2AWQgJAEgIAEQheAqg2BDQgGAIgGAIQgnA4gOBGQgDAQgCARIAFAuQAAABAAABQALA4AdAxQAGAKAHAKQAGAIAGAIQBkB9CuAhIA8ALQBIAJA+gBQCQgCA1g8QAVgXAHggQgMAVgQARQhbBfjugpQizgghwiIQgjgrgWg0IgPgsQgEg+ALgcQAEgJAEgKQAGgNAGgNQAPgdAVgaQBUhuCIgaQAsgIAxABQAsABAnAGQCNAZBNBpQAIALAHALQAUAgAMAlQAJAZACAQQAAgSgHgdQgMgxgYgrQgDgHgEgGQgthIhKgmQhSgqh2AAgAi4AEQAABJg1A0Qg1A1hLAAQhLAAg1g1Qg1g0AAhJQAAhJA1g0QA1g0BLAAQBLAAA1A0QA1A0AABJg");
	this.shape.setTransform(0,0.0048);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADuB9Qg1g0AAhJQAAhJA1g0QA1g0BLAAQBKAAA2A0QA0A0AABJQAABJg0A0Qg2A1hKAAQhLAAg1g1gAFsg5QgNANAAATQAAATANAMQANANATAAQATAAANgNQANgMAAgTQAAgTgNgNQgNgNgTAAQgTAAgNANgAnsB9Qg1g0AAhJQAAhJA1g0QA1g0BLAAQBKAAA1A0QA1A0AABJQAABJg1A0Qg1A1hKAAQhLAAg1g1gAmrg5QgNANAAATQAAATANAMQANANATAAQATAAANgNQAOgMAAgTQAAgTgOgNQgNgNgTAAQgTAAgNANg");
	this.shape_1.setTransform(-0.025,0.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEzFeQjHgDgZhyQBNCNEXgxQC0ggBwiIQAjgrAWg0IAPgsQADg+gKgcQgJgXgLgWQgQgdgUgaQhVhuiIgaQgrgIgxABQgsABgnAGQiNAZhOBpQgeApgRAyQgIAZgCAQQAAgSAHgdQAMg5AfgwQAthIBKgmQBSgqB1AAQAYACAkAHQA9ALA1AWIARAIQBfAqA2BDQAwA9ARBRIAEAhIgEAuIAAACQgLA4geAxQgLATgNARQhkB9ivAhIg7ALQhCAJg5AAIgMgBgAm5FWIg7gLQivghhkh9IgMgQIgNgUQgdgxgLg4IAAgCIgEguQABgRADgQQAPhGAmg4IAMgQQA2hDBegqIASgIQA1gWA9gLQAkgHAXgCQB2AABSAqQBKAmAtBIIAHANQAZArALAxQAHAdAAASQgCgQgIgZQgMglgVggIgOgWQhOhpiNgZQgngGgsgBQgxgBgrAIQiJAahUBuQgVAagPAdIgMAaIgIATQgKAcADA+IAPAsQAWA0AjArQBwCIC0AgQDtApBbhfQAQgRAMgVQgHAggVAXQg1A8iQACIgMABQg4AAhCgJgAFsAKQgOgMAAgTQAAgTAOgNQANgNASAAQAUAAANANQANANAAATQAAATgNAMQgNANgUAAQgSAAgNgNgAmrAKQgNgMAAgTQAAgTANgNQANgNATAAQATAAANANQAOANAAATQAAATgOAMQgNANgTAAQgTAAgNgNg");
	this.shape_2.setTransform(0,0.0048);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyes2, new cjs.Rectangle(-85.5,-36,171.1,72.1), null);


(lib.Eyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AIlhJQgLAAgMABQgKAAgLAAQgFgBgGAAQgJAAgIADQgKAAgKABQgOACgNABIgRBMQgJBTAkAlQA7gBAygGQDhgcBMiCQiFgfh5gGIgvgBQAGAHAIAKQAQAWAHAXQAZBJg+A9AO2hHIhZhEQhwhJhugeQlhhijOFwAO2gJIhkgaAOiBEIgrAuQg5A1hHAjQjkBzkZhkADPB0QABAAABAAQBpAPBzgBQAGAAAFAAADWAHQg5AmglA3QArAJAsAHADWAHIgUA0QgOA0AbAFAGuhCQiCAShWA3Au1hHIBZhEQBwhJBugeQFhhiDOFwAu1gLIBkgaQCFgfB5gGIAvgBQALAAAMABQAKAAALAAQAFgBAGAAQAJAAAIADQAKAAAKABQAOACANABIARBMQAJBTgkAlQg7gBgygGQjhgchMiCAokhLQgGAHgIAKQgQAWgHAXQgZBJA+A9AjVAFQA5AmAlA3QgrAJgsAHAjVAFIAUA0QAOA0gbAFQgBAAgBAAQhpAPhzgBQgGAAgFAAAuhBEIArAuQA5A1BHAjQDkBzEZhkAmthEQCCASBWA3");
	this.shape.setTransform(0,0.0182);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AHHAjQgQgQAAgWQAAgXAQgQIACgCIAUgCQAIgCAJAAIALABIAVAAIAHAFQAQAQAAAXQAAAWgQAQQgQAQgXAAQgXAAgQgQgAoUAhQgQgQAAgWQAAgXAQgQIAHgFIAVAAIALgBQAJAAAIADIAUABIACACQAQAQAAAXQAAAWgQAQQgQAQgXAAQgXAAgQgQg");
	this.shape_1.setTransform(0,-2.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AGcgRIARhMIAcgDIgCACQgQAQAAAXQAAAXAQAQQAQAQAXAAQAXAAAQgQQAQgQAAgXQAAgXgQgQIgHgFIAXgBIAOARQAQAWAHAXQAZBJg+A9QgzAGg6ABQgkglAIhTgAokBeQg+g9AZhJQAHgXAQgWIAOgRIAXABIgHAFQgQAQAAAXQAAAXAQAQQAQAQAXAAQAXAAAQgQQAQgQAAgXQAAgXgQgQIgCgCIAcADIARBNQAIBSgkAlQg6gBgzgGg");
	this.shape_2.setTransform(0,2.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyes, new cjs.Rectangle(-96,-27.3,192,54.7), null);


(lib.Eyebrow1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AJGCQIgIgTQgMgXgSgYQg4hLhdg0QkpinorCDIgaASQgeAWgWAZQhGBPAmBLQDShBD4gfQHxg+DCCog");
	this.shape.setTransform(-0.0041,-0.0044);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhtAmQj4AfjSBBQgmhLBGhPQAWgZAegWIAagSQIriDEpCnQBdA0A4BLQASAYAMAXIAIATQjCionxA+g");
	this.shape_1.setTransform(-0.0041,-0.0044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyebrow1, new cjs.Rectangle(-59.1,-15.3,118.30000000000001,30.700000000000003), null);


(lib.Eyebrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ApFCQIAIgTQAMgXASgYQA4hLBdg0QEpinIrCDIAaASQAeAWAWAZQBGBPgmBLQjShBj4gfQnxg+jCCog");
	this.shape.setTransform(0.0041,-0.0044);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ao9B9QAMgXASgYQA4hLBdg0QEpinIrCDIAaASQAeAWAWAZQBGBPgmBLQjShBj4gfQnxg+jCCog");
	this.shape_1.setTransform(0.0041,-0.0044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyebrow, new cjs.Rectangle(-59.1,-15.3,118.30000000000001,30.700000000000003), null);


(lib.tubedoublegrey = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape.setTransform(11.925,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.925,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgMAbIgIgDIAAgKIAAAAQAEADAGACQAFACAFAAQAFAAADgCQAEgCAAgEQAAgEgCgBIgHgDIgEgBIgGgBQgHgCgDgDQgDgEAAgFQAAgDABgDIAEgGIAHgDQAFgCAEAAIAKACIAIACIAAAKIAAAAIgJgEIgKgCQgEAAgDACQgEACAAAEQAAADACACQACACAFABIAFABIAFABQAGABAEADQADAEAAAGQAAAHgGAFQgGAFgKAAQgGAAgFgCg");
	this.shape_2.setTransform(1.425,0.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_3.setTransform(-4.225,0.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AARAkIgXgdIgOAAIAAAdIgJAAIAAhHIAUAAIAKAAIAIADQAEADACAEQACAEAAAFQAAAIgEAGQgEAEgGACIAbAggAgUAAIAKAAIAIAAQACgBADgDIADgEIABgHQAAgDgBgDIgDgEIgFgCIgGAAIgMAAg");
	this.shape_4.setTransform(-9.9,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center tube
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#B7B7B7","#E6E6E6"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBaInSAAQgUAAgSgHQgRgHgNgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQANgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHAOAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgOAMgRAHQgSAHgTAAIgBAAg");
	this.shape_5.setTransform(0,-0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#B7B7B7","#E6E6E6"],[0,1],33,5,19,-5.6).s().p("ADpBaInSAAQgUAAgSgHQgRgHgNgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQANgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHAOAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgOAMgRAHQgSAHgTAAIgBAAg");
	this.shape_6.setTransform(0,-0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#B7B7B7","#DCEBF2"],[0,1],2.4,-16.7,31.6,5.4).s().p("ADqBaInSAAQgUAAgSgHQgRgHgOgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQAOgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHANAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgNAMgRAHQgSAHgUAAIAAAAg");
	this.shape_7.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// center tube border
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#888888").s().p("ADwBkIngAAQgUAAgTgHQgSgJgNgNQgOgOgHgSQgIgTAAgUQAAgTAIgTQAHgSAOgOQANgOASgIQATgHAUAAIHgAAQAVAAATAHQARAIAOAOQAOAOAHASQAIATAAATQAAAUgIATQgHASgOAOQgOANgRAJQgTAHgUAAIgBAAg");
	this.shape_8.setTransform(0,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("ADwBkIngAAQgUAAgTgHQgSgJgNgNQgOgOgHgSQgIgTAAgUQAAgTAIgTQAHgSAOgOQANgOASgIQATgHAUAAIHgAAQAVAAATAHQARAIAOAOQAOAOAHASQAIATAAATQAAAUgIATQgHASgOAOQgOANgRAJQgTAHgUAAIgBAAg");
	this.shape_9.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#888888","#C8C8C8"],[0,1],-9.3,-13,19.8,13.5).s().p("AjxCMQgcAAgZgLQgagLgSgUQgUgSgLgaQgKgaAAgcQAAgcAKgaQALgZAUgTQASgTAagMQAZgKAcAAIHjAAQAbAAAaAKQAZAMATATQATATALAZQALAaAAAcQAAAcgLAaQgLAagTASQgTAUgZALQgaALgbAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#6A6A6A","#AAAAAA"],[0,1],-9.3,-13,19.8,13.5).s().p("AjxCMQgcAAgZgLQgagLgSgUQgUgSgLgaQgKgaAAgcQAAgcAKgaQALgZAUgTQASgTAagMQAZgKAcAAIHjAAQAbAAAaAKQAZAMATATQATATALAZQALAaAAAcQAAAcgLAaQgLAagTASQgTAUgZALQgaALgbAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A2A2A2").s().p("AkuCKQgagMgTgVQgUgUgMgbQgKgcAAgeQAAgeAKgcQAMgbAUgUQATgVAagMQAagLAdAAIHvAAQAcAAAbALQAaAMATAVQAUAUALAbQALAcAAAeQAAAegLAcQgLAbgUAUQgTAVgaAMQgbAMgcAAInvAAIAAAAQgdAAgagMg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6F6F6F").s().p("AkuCKQgagMgTgVQgUgUgMgbQgKgcAAgeQAAgeAKgcQAMgbAUgUQATgVAagMQAagLAdAAIHvAAQAcAAAbALQAaAMATAVQAUAUALAbQALAcAAAeQAAAegLAcQgLAbgUAUQgTAVgaAMQgbAMgcAAInvAAIAAAAQgdAAgagMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-15,78,30);


(lib.tubedoublegreen = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgTAlIAAgIIAPAAIAAgvIgPAAIAAgHIAHgBIAFgBIAEgEQABgCAAgCIAHAAIAABAIAPAAIAAAIg");
	this.shape.setTransform(11.325,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(5.025,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgFQgDgDgCgFQgCgGAAgGQAAgNAHgHQAIgIALAAIAJABIAIADIAAAKIAAAAQgFgDgEgBQgFgCgEAAQgHgBgEAGQgFAFAAAKQAAAJAFAGQAEAFAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJAEIgIAAQgFAAgFgBg");
	this.shape_2.setTransform(-0.425,0.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-6.325,0.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAkIAAhHIAtAAIAAAIIgkAAIAAAVIAfAAIAAAHIgfAAIAAAjg");
	this.shape_4.setTransform(-11.05,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center tube
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#80DD88","#D7F4DC"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBaInSAAQgUAAgSgHQgRgHgNgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQANgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHAOAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgOAMgRAHQgSAHgTAAIgBAAg");
	this.shape_5.setTransform(0,-0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A9E7AE","#EBFAEC"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBaInSAAQgUAAgSgHQgRgHgNgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQANgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHAOAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgOAMgRAHQgSAHgTAAIgBAAg");
	this.shape_6.setTransform(0,-0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#80DD88","#D7F4DC"],[0,1],-21,-8.8,0.8,7.7).s().p("ADqBaInSAAQgUAAgSgHQgRgHgOgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQAOgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHANAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgNAMgRAHQgSAHgUAAIAAAAg");
	this.shape_7.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// center tube border
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BCD58").s().p("ADwBkIngAAQgUAAgTgHQgSgJgNgNQgOgOgHgSQgIgTAAgUQAAgTAIgTQAHgSAOgOQANgOASgIQATgHAUAAIHgAAQAVAAATAHQARAIAOAOQAOAOAHASQAIATAAATQAAAUgIATQgHASgOAOQgOANgRAJQgTAHgUAAIgBAAg");
	this.shape_8.setTransform(0,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#30AD3C").s().p("ADwBkIngAAQgUAAgTgHQgSgJgNgNQgOgOgHgSQgIgTAAgUQAAgTAIgTQAHgSAOgOQANgOASgIQATgHAUAAIHgAAQAVAAATAHQARAIAOAOQAOAOAHASQAIATAAATQAAAUgIATQgHASgOAOQgOANgRAJQgTAHgUAAIgBAAg");
	this.shape_9.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#3ECA4B","#BCEDC0"],[0,1],-9.3,-13,19.8,13.5).s().p("AjxCMQgcAAgZgLQgagLgSgUQgUgSgLgaQgKgaAAgcQAAgcAKgaQALgZAUgTQASgTAagMQAZgKAcAAIHjAAQAbAAAaAKQAZAMATATQATATALAZQALAaAAAcQAAAcgLAaQgLAagTASQgTAUgZALQgaALgbAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#45CB52","#8CE195"],[0,1],-9.3,-13,19.8,13.5).s().p("AjxCMQgcAAgZgLQgagLgSgUQgUgSgLgaQgKgaAAgcQAAgcAKgaQALgZAUgTQASgTAagMQAZgKAcAAIHjAAQAbAAAaAKQAZAMATATQATATALAZQALAaAAAcQAAAcgLAaQgLAagTASQgTAUgZALQgaALgbAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#3ECA4B","#3ECA4B"],[0,1],-39,0,39,0).s().p("AkuCKQgagMgTgVQgUgUgMgbQgKgcAAgeQAAgeAKgcQAMgbAUgUQATgVAagMQAagLAdAAIHvAAQAcAAAbALQAaAMATAVQAUAUALAbQALAcAAAeQAAAegLAcQgLAbgUAUQgTAVgaAMQgbAMgcAAInvAAIAAAAQgdAAgagMg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#30AD3C").s().p("AkuCKQgagMgTgVQgUgUgMgbQgKgcAAgeQAAgeAKgcQAMgbAUgUQATgVAagMQAagLAdAAIHvAAQAcAAAbALQAaAMATAVQAUAUALAbQALAcAAAeQAAAegLAcQgLAbgUAUQgTAVgaAMQgbAMgcAAInvAAIAAAAQgdAAgagMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-15,78,30);


(lib.tubedoubleblue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgXAlIAAgKIAKgJIAJgJIAMgNQADgFABgHQgBgFgDgEQgEgDgGAAQgEAAgFACQgGACgFADIAAAAIAAgKIAJgEIALgBQALAAAGAFQAGAGABAJIgBAHIgEAHIgEAGIgHAGIgJAKIgKAIIAlAAIAAAJg");
	this.shape.setTransform(11.25,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(5.025,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgFQgDgDgCgFQgCgGAAgGQAAgNAHgHQAIgIALAAIAJABIAIADIAAAKIAAAAQgFgDgEgBQgFgCgEAAQgHgBgEAGQgFAFAAAKQAAAJAFAGQAEAFAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJAEIgIAAQgFAAgFgBg");
	this.shape_2.setTransform(-0.425,0.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-6.325,0.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAkIAAhHIAtAAIAAAIIgkAAIAAAVIAfAAIAAAHIgfAAIAAAjg");
	this.shape_4.setTransform(-11.05,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center tube
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#94C6DB","#DCEBF2"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBaInSAAQgUAAgSgHQgRgHgNgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQANgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHAOAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgOAMgRAHQgSAHgTAAIgBAAg");
	this.shape_5.setTransform(0,-0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#94C6DB","#DCEBF2"],[0,1],33,5,19,-5.6).s().p("ADpBaInSAAQgUAAgSgHQgRgHgNgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQANgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHAOAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgOAMgRAHQgSAHgTAAIgBAAg");
	this.shape_6.setTransform(0,-0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#94C6DB","#DCEBF2"],[0,1],2.4,-16.7,31.6,5.4).s().p("ADqBaInSAAQgUAAgSgHQgRgHgOgMQgNgNgHgQQgIgRAAgSQAAgRAIgRQAHgQANgNQAOgMARgHQASgHAUAAIHSAAQAUAAASAHQARAHANAMQANANAHAQQAIARAAARQAAASgIARQgHAQgNANQgNAMgRAHQgSAHgUAAIAAAAg");
	this.shape_7.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// center tube border
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47A4CB").s().p("ADwBkIngAAQgUAAgTgHQgSgJgNgNQgOgOgHgSQgIgTAAgUQAAgTAIgTQAHgSAOgOQANgOASgIQATgHAUAAIHgAAQAVAAATAHQARAIAOAOQAOAOAHASQAIATAAATQAAAUgIATQgHASgOAOQgOANgRAJQgTAHgUAAIgBAAg");
	this.shape_8.setTransform(0,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#317F9F").s().p("ADwBkIngAAQgUAAgTgHQgSgJgNgNQgOgOgHgSQgIgTAAgUQAAgTAIgTQAHgSAOgOQANgOASgIQATgHAUAAIHgAAQAVAAATAHQARAIAOAOQAOAOAHASQAIATAAATQAAAUgIATQgHASgOAOQgOANgRAJQgTAHgUAAIgBAAg");
	this.shape_9.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#47A4CB","#AED6E7"],[0,1],-9.3,-13,19.8,13.5).s().p("AjxCMQgcAAgZgLQgagLgSgUQgUgSgLgaQgKgaAAgcQAAgcAKgaQALgZAUgTQASgTAagMQAZgKAcAAIHjAAQAbAAAaAKQAZAMATATQATATALAZQALAaAAAcQAAAcgLAaQgLAagTASQgTAUgZALQgaALgbAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#3083A5","#7CBDD8"],[0,1],-9.3,-13,19.8,13.5).s().p("AjxCMQgcAAgZgLQgagLgSgUQgUgSgLgaQgKgaAAgcQAAgcAKgaQALgZAUgTQASgTAagMQAZgKAcAAIHjAAQAbAAAaAKQAZAMATATQATATALAZQALAaAAAcQAAAcgLAaQgLAagTASQgTAUgZALQgaALgbAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#71BAD7").s().p("AkuCKQgagMgTgVQgUgUgMgbQgKgcAAgeQAAgeAKgcQAMgbAUgUQATgVAagMQAagLAdAAIHvAAQAcAAAbALQAaAMATAVQAUAUALAbQALAcAAAeQAAAegLAcQgLAbgUAUQgTAVgaAMQgbAMgcAAInvAAIAAAAQgdAAgagMg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C89A8").s().p("AkuCKQgagMgTgVQgUgUgMgbQgKgcAAgeQAAgeAKgcQAMgbAUgUQATgVAagMQAagLAdAAIHvAAQAcAAAbALQAaAMATAVQAUAUALAbQALAcAAAeQAAAegLAcQgLAbgUAUQgTAVgaAMQgbAMgcAAInvAAIAAAAQgdAAgagMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-15,78,30);


// stage content:
(lib.MPHFinalORomero = function(mode,startPosition,loop,reversed) {
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
		this.Eyes1.on("pressmove", dragMe);
		this.Eyes2.on("pressmove", dragMe);
		this.Glasses1.on("pressmove", dragMe);
		this.Glasses2.on("pressmove", dragMe);
		this.LeftEyebrow.on("pressmove", dragMe);
		this.RightEyebrow.on("pressmove", dragMe);
		this.Hair1.on("pressmove", dragMe);
		this.Hair2.on("pressmove", dragMe);
		this.Nose1.on("pressmove", dragMe);
		this.Nose2.on("pressmove", dragMe);
		this.Mustache.on("pressmove", dragMe);
		this.Mouth1.on("pressmove", dragMe);
		this.Mouth2.on("pressmove", dragMe);
		this.LeftArm.on("pressmove", dragMe);
		this.RightArm.on("pressmove", dragMe);
		this.Shoes.on("pressmove", dragMe);
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
		this.Reset_btn.addEventListener("click", ClickReset.bind(this));
		
		function ClickReset() {
			this.Eyes1.x = 692;
			this.Eyes1.y = 82;
			this.Eyes2.x = 691;
			this.Eyes2.y = 134;
			this.Glasses1.x = 853;
			this.Glasses1.y = 83;
			this.Glasses2.x = 851;
			this.Glasses2.y = 142;
			this.LeftEyebrow.x = 815;
			this.LeftEyebrow.y = 446;
			this.RightEyebrow.x = 901;
			this.RightEyebrow.y = 446;
			this.Hair1.x = 690;
			this.Hair1.y = 332;
			this.Hair2.x = 690;
			this.Hair2.y = 254;
			this.Nose1.x = 693;
			this.Nose1.y = 528;
			this.Nose2.x = 693;
			this.Nose2.y = 455;
			this.Mustache.x = 851;
			this.Mustache.y = 536;
			this.Mouth1.x = 852;
			this.Mouth1.y = 328;
			this.Mouth2.x = 852;
			this.Mouth2.y = 249;
			this.LeftArm.x = 481;
			this.LeftArm.y = 571;
			this.RightArm.x = 607;
			this.RightArm.y = 571;
			this.Shoes.x = 554;
			this.Shoes.y = 403;
		}
		this.Face1_btn.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.Glasses1.x = 196;
			this.Glasses1.y = 247;
			this.LeftEyebrow.x = 147;
			this.LeftEyebrow.y = 203;
			this.RightEyebrow.x = 251;
			this.RightEyebrow.y = 204;
			this.Hair2.x = 190;
			this.Hair2.y = 157;
			this.Nose2.x = 195;
			this.Nose2.y = 300;
			this.Mustache.x = 195;
			this.Mustache.y = 365;
			this.Mouth1.x = 194;
			this.Mouth1.y = 415;
			this.LeftArm.x = 72;
			this.LeftArm.y = 270;
			this.RightArm.x = 322;
			this.RightArm.y = 270;
			this.Shoes.x = 212;
			this.Shoes.y = 492;
		}
		this.Face2_btn.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.Glasses2.x = 196;
			this.Glasses2.y = 247;
			this.LeftEyebrow.x = 147;
			this.LeftEyebrow.y = 203;
			this.RightEyebrow.x = 251;
			this.RightEyebrow.y = 204;
			this.Hair1.x = 190;
			this.Hair1.y = 167;
			this.Nose1.x = 195;
			this.Nose1.y = 310;
			this.Mouth2.x = 194;
			this.Mouth2.y = 405;
			this.LeftArm.x = 72;
			this.LeftArm.y = 270;
			this.RightArm.x = 322;
			this.RightArm.y = 270;
			this.Shoes.x = 212;
			this.Shoes.y = 492;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAUALALQAMALANAAQALgBAGgGQAGgGAAgIQAAgKgHgGQgHgIgUgKQgVgJgHgJQgHgJAAgNQAAgQAMgLQALgLASAAQAHAAALADIAKACIAEgBIADgEIAFAAIAAAuIgFAAQgGgWgIgHQgJgJgMABQgLgBgGAGQgGAFAAAHQAAAIAEAGQAFAGAOAHIAUAKQAeANAAAYQAAASgOAMQgOALgRAAQgLAAgQgFg");
	this.shape.setTransform(572.075,502.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAxBFIAAgFIACAAQAJgBAFgDQADgCACgFIAAgOIAAg5QAAgQgEgHQgFgJgNAAQgIAAgIADQgHAEgMALIAAABIAAAHIAAA/QAAAOACADQABADAFACQAEACAKABIAAAFIhDAAIAAgFQAMAAAEgDQAEgDACgFIAAgOIAAg5QAAgRgFgGQgGgKgMAAQgIAAgHAEQgMAHgHAIIAABHQAAANACAEQACAEADACQAEACALAAIAAAFIhDAAIAAgFQAKAAADgCQAEgCACgEQACgFAAgMIAAgzQAAgWgCgGQgBgFgCgCQgCgCgEAAQgEAAgGACIgCgEIApgRIAGAAIAAAcIARgRQAHgFAHgDQAIgDAIAAQAMAAAIAHQAJAIADANQAPgRALgGQAKgFALAAQALAAAIAFQAJAGAEAMQAEAJAAASIAAA5QAAANABAEQACADAEACQAEACAJABIAAAFg");
	this.shape_1.setTransform(554.475,502.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwBFIAAgFQALgBAEgDQAEgCACgFQABgCAAgMIAAgzQAAgXgBgFQgCgFgCgCQgDgCgEAAQgEAAgGACIgBgEIApgRIAFAAIAAAeQARgeARAAQAIAAAGAFQAFAFAAAGQAAAGgEAEQgEADgFAAQgFAAgGgEQgHgFgDgBQgCAAgDADQgIAHgGAOIAAA/QAAALADAGQACAEAEACQAFADAJAAIAAAFg");
	this.shape_2.setTransform(537.95,502.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAbBmIAAgGQAMgBAEgDQAEgDAAgFQAAgGgGgPIgLgcIhNAAIgNAgQgFALAAAGQAAAEAFAEQAEADAOABIAAAGIg+AAIAAgGQAMgCADgEQAIgHAJgVIBGijIAEAAIBFCkQAIAVAHAFQAHAHAMAAIAAAGgAgqAYIBDAAIghhPg");
	this.shape_3.setTransform(521.9,498.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBDIgIgCQgDAAgCAEIgFAAIAAgwIAFAAQAEAVALAKQAMALANAAQALgBAGgFQAGgHAAgIQAAgKgHgHQgHgGgUgLQgVgKgHgIQgHgJAAgNQAAgQAMgLQALgLASAAQAHAAALADIAKACIAEgBIADgEIAFAAIAAAuIgFAAQgGgWgIgHQgJgIgMAAQgLgBgGAGQgGAGAAAGQAAAIAEAGQAFAGAOAHIAUAKQAeANAAAYQAAASgOAMQgOALgRAAQgLAAgQgEg");
	this.shape_4.setTransform(565.625,323.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_5.setTransform(553.075,323.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxAvQgPgUAAgaQAAgRAKgSQAJgTAPgIQAPgJAPAAQAfAAASAXQAQAUAAAZQAAASgJASQgIATgQAIQgPAKgRAAQgfAAgSgYgAgTg4QgIAEgFAMQgEAMAAASQAAAcALAVQAMAWASgBQAOAAAJgLQAKgLAAgdQAAgjgQgVQgKgOgPABQgIgBgIAFg");
	this.shape_6.setTransform(538.775,323.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAHBoIAAgFIAEAAQAIAAAEgDQAEgDACgFIAAgOIAAgwQAAgWgDgFQgCgHgEgEQgGgDgHAAQgHAAgGAEQgJADgKALIAABHQAAAOACADQABADAEADQAEACAKAAIAAAFIhCAAIAAgFQAJAAAFgDQADgBACgEQACgEAAgNIAAh5QAAgXgBgFQgBgFgDgCQgDgCgDAAIgKACIgCgFIAogQIAHAAIAABiQAQgSAJgFQAJgFAKAAQALAAAIAGQAJAHADANQADAJAAAYIAAAwQAAANACAEQABAEAEACQADACAKAAIAAAFg");
	this.shape_7.setTransform(523.8,319.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMBmIgTgFQgOgEgEAAQgDAAgCACQgDACgBAHIgFAAIAAhEIAFAAQAEAVAHALQAGAKANAHQAOAHAOAAQATAAAKgJQALgKAAgNQAAgHgEgIQgEgHgJgHQgFgEgZgOQgZgOgLgIQgLgJgFgKQgGgKAAgNQAAgVAQgPQARgQAZAAQAPAAASAIQAIAEADAAQAEAAADgDQACgCABgHIAGAAIAABFIgGAAQgCgUgHgMQgHgLgMgHQgNgHgNAAQgPAAgKAJQgKAJAAAMQAAAJAHAIQAJALAhASQAcAPAKAHQAKAIAGALQAFALAAAMQAAAWgRARQgSAQgcAAQgHAAgIgCg");
	this.shape_8.setTransform(508.075,319.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_9.setTransform(901.525,484.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAHBoIAAgFIADAAQAKAAADgDQAEgDABgFIABgOIAAgwQAAgWgCgFQgDgHgEgEQgFgDgHAAQgIAAgHAEQgIADgKALIAABHQAAAOABADQACADAEADQAEACAKAAIAAAFIhCAAIAAgFQAJAAAFgDQADgBABgEQACgEAAgNIAAh5QAAgXgBgFQgBgFgCgCQgCgCgEAAIgKACIgCgFIAogQIAHAAIAABiQAQgSAJgFQAJgFAKAAQALAAAIAGQAIAHAEANQADAJAAAYIAAAwQAAANACAEQACAEADACQAEACAJAAIAAAFg");
	this.shape_10.setTransform(887.25,480.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnA0QgQgUAAggQAAgeASgUQATgUAZAAQAUAAANALQAMAKAAALQAAAFgDAEQgEADgGAAQgJABgEgGQgDgDAAgIQgBgKgGgEQgEgFgKABQgNAAgJALQgMAOAAAXQAAAYAMASQAMATASAAQAPgBALgJQAJgHAHgSIAEACQgFAbgQAOQgQAOgTAAQgWAAgRgTg");
	this.shape_11.setTransform(873.15,484.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgyA9QgKgKAAgPQAAgKAEgHQAHgKAOgJQAQgIAhgNIAAgEQAAgVgHgHQgGgHgLAAQgJgBgFAGQgGAEAAAHIAAAIQAAAHgDAEQgEADgFAAQgGAAgDgDQgDgEgBgHQAAgNANgKQANgLAYAAQAQAAAMAHQAJAEADAJQADAHAAATIAAAtQAAATABAFQAAAEADABQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAIAEgCQAEgBAIgJIAAAIQgRAWgOAAQgHAAgFgFQgEgFAAgMQgUAQgFACQgIAEgJABQgOAAgIgKgAgNAAQgMAHgFAGQgFAIAAAIQAAAKAGAHQAGAIAJAAQAKgBASgPIAAgyIgbAMg");
	this.shape_12.setTransform(860.3,484.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFBXQgHgEgDgHQgEgHAAgOIAAhaIgVAAIAAgFQAJgDAIgHQAIgIAHgLQADgFAGgPIAEAAIAAAsIAfAAIAAAKIgfAAIAABWQAAANADAFQAFAEAFAAQAFAAAFgCQAEgEACgFIAHAAQgGAOgJAHQgKAHgKAAQgGAAgFgDg");
	this.shape_13.setTransform(849.15,482.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaBDIgIgCQgDAAgCAEIgFAAIAAgwIAFAAQAEAVALAKQAMAKANAAQALAAAGgFQAGgHAAgIQAAgKgHgHQgHgGgUgLQgVgKgHgIQgHgIAAgNQAAgRAMgLQALgLASAAQAHAAALADIAKACIAEgBIADgEIAFAAIAAAuIgFAAQgGgWgIgIQgJgHgMgBQgLAAgGAGQgGAFAAAHQAAAIAEAGQAFAGAOAGIAUALQAeANAAAZQAAARgOAMQgOALgRAAQgLAAgQgEg");
	this.shape_14.setTransform(839.175,484.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAcBFIAAgdQgSATgIAGQgJAEgKAAQgLAAgIgGQgIgHgEgKQgDgLAAgSIAAg7QAAgJgCgFQgCgDgEgCQgEgCgLAAIAAgFIAvAAIAABZQAAATAHAFQAGAGAKAAQAFAAAIgEQAIgEALgLIAAhLQAAgMgFgEQgDgDgOgBIAAgFIAuAAIAABQQAAAYABAEQABAGADACQACACADAAQAFAAAFgCIADAEIgpARg");
	this.shape_15.setTransform(825.65,484.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AArBjIAAgFIAHAAQANAAAFgIQADgEAAgRIAAiEIhLCmIgFAAIhNimIAACEQAAASAEAFQAGAGALAAIAHAAIAAAFIhFAAIAAgFIAHAAQANAAAFgIQADgEAAgRIAAiBQAAgNgDgGQgCgEgFgDQgGgDgMAAIAAgFIA4AAIBICaIBGiaIA5AAIAAAFIgHAAQgNAAgFAIQgDAEAAARIAACBQAAASAEAFQAFAGAMAAIAHAAIAAAFg");
	this.shape_16.setTransform(804.775,481.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAVALAKQAMALANAAQALgBAGgFQAGgHAAgIQAAgKgHgHQgHgGgUgLQgVgJgHgJQgHgJAAgNQAAgQAMgLQALgLASAAQAHAAALADIAKACIAEgBIADgEIAFAAIAAAuIgFAAQgGgWgIgHQgJgIgMAAQgLgBgGAGQgGAGAAAGQAAAIAEAGQAFAGAOAHIAUAKQAeANAAAYQAAASgOAMQgOALgRAAQgLAAgQgFg");
	this.shape_17.setTransform(905.825,404.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAlBFIgihVIgmBVIgGAAIgrhwQgEgLgEgDQgEgEgJgCIAAgFIA4AAIAAAFQgIABgCACQgDACABAFQgBAEADAGIAdBNIAcg+IgHgUQgDgJgGgEQgEgCgIAAIAAgFIA+AAIAAAFQgKAAgEAEQgDADAAAFIABAGIAfBLIAbhJQADgIAAgEQAAgDgCgDQgDgCgIAAIAAgFIAqAAIAAAFQgNACgGAQIgtByg");
	this.shape_18.setTransform(888.95,404.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgxAvQgPgUAAgaQAAgRAKgSQAJgTAPgIQAPgJAPAAQAfAAASAXQAQAUAAAZQAAASgJASQgIATgQAIQgPAKgRAAQgfAAgSgYgAgTg4QgIAEgFAMQgEAMAAASQAAAcALAWQAMAVASgBQAOAAAJgLQAKgLAAgdQAAgjgQgVQgKgOgPABQgIgBgIAFg");
	this.shape_19.setTransform(870.625,404.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgwBFIAAgGQALAAAEgDQAEgCACgFQABgCAAgMIAAgzQAAgXgBgFQgCgFgCgCQgDgBgEAAQgEAAgGABIgBgEIApgRIAFAAIAAAeQARgeARAAQAIAAAGAFQAFAFAAAGQAAAGgEAEQgEADgFAAQgFAAgGgEQgHgFgDAAQgCAAgDACQgIAHgGANIAABAQAAALADAFQACAEAEADQAFACAJAAIAAAGg");
	this.shape_20.setTransform(858.35,404.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgWBmQgMgEgNgJIAAiKQAAgXgBgFQgBgFgCgCQgCgCgEAAQgEAAgGACIgCgFIAogQIAHAAIAABhQATgbAWAAQAUAAAQASQAPARAAAeQAAAkgXAWQgVASgZAAQgLAAgMgEgAgHgKQgGADgJAIIAABQQAHAHAIAEQAHAEAIAAQAOAAALgPQAMgPAAgcQAAgZgMgNQgLgOgPAAQgHAAgHAEg");
	this.shape_21.setTransform(845.1,401.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_22.setTransform(831.625,404.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag8BfQgGgFABgHQAAgGADgEQAEgEAHAAQAGAAAIAEIAHACQAFAAAFgFQAFgEAFgNIAKgYIgwhkIgHgLQgEgFgDgCQgDgCgHgCIAAgFIA+AAIAAAFIgDAAQgGAAgDADQgEADAAAEQAAAGAFAKIAfBDIAfhKQACgGAAgGIgBgDQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQgCgBgHAAIAAgFIAsAAIAAAFIgIACIgGAHIgGALIg1CFQgIAUgNAKQgNAJgLAAQgJAAgGgEg");
	this.shape_23.setTransform(817.35,407.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhUBjIAAgFIAHAAQAHAAAGgEQAFgCACgFQABgEAAgPIAAiAQAAgTgDgEQgGgGgMAAIgHAAIAAgFICYAAIACArIgGAAQgDgQgDgFQgEgGgHgDQgGgDgPAAIg2AAIAABPIArAAQARAAAGgFQAHgHABgRIAGAAIAABEIgGAAQgCgOgCgEQgCgFgGgDQgGgDgNAAIgrAAIAABBQAAANACADQABADADACQADABAIAAIAhAAQAQAAAIgCQAIgCAHgHQAJgJAJgTIAGAAIgRAyg");
	this.shape_24.setTransform(800.625,401.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_25.setTransform(715.725,404.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAVALAKQAMALANAAQALgBAGgFQAGgHAAgIQAAgKgHgHQgHgGgUgLQgVgJgHgJQgHgJAAgNQAAgQAMgLQALgLASAAQAHAAALADIAKACIAEgBIADgEIAFAAIAAAuIgFAAQgGgWgIgHQgJgIgMAAQgLgBgGAGQgGAGAAAGQAAAIAEAGQAFAGAOAHIAUAKQAeANAAAYQAAASgOAMQgOALgRAAQgLAAgQgFg");
	this.shape_26.setTransform(703.325,404.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgxAvQgPgUAAgaQAAgRAKgSQAJgTAPgIQAPgJAPAAQAfAAASAXQAQAUAAAZQAAASgJASQgIATgQAIQgPAKgRAAQgfAAgSgYgAgTg4QgIAEgFAMQgEAMAAASQAAAcALAWQAMAVASgBQAOAAAJgLQAKgLAAgdQAAgjgQgVQgKgOgPABQgIgBgIAFg");
	this.shape_27.setTransform(689.775,404.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ABLBlIiCifIAAB5QAAATAEAEQAFAGAMAAIAHAAIAAAGIhFAAIAAgGIAHAAQAMAAAGgHQADgFAAgRIAAiJQgJgKgEgDQgFgDgIgDIgNgBIAAgGIA2AAIB4CUIAAhxQAAgTgEgEQgFgGgMAAIgHAAIAAgGIBFAAIAAAGIgHAAQgMAAgGAHQgDAFAAARIAACmg");
	this.shape_28.setTransform(671.075,401.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAHBoIAAgFIADAAQAJAAAFgDQADgDABgFIABgOIAAgwQAAgWgCgFQgDgHgFgEQgFgDgGAAQgIAAgHAEQgHADgLALIAABHQAAAOABADQACADAEADQAEACAKAAIAAAFIhCAAIAAgFQAJAAAFgDQADgBABgEQACgEAAgNIAAh5QAAgXgBgFQgBgFgCgCQgDgCgDAAIgKACIgCgFIAogQIAHAAIAABiQAQgSAJgFQAJgFAJAAQAMAAAIAGQAIAHAFANQACAJAAAYIAAAwQAAANACAEQACAEADACQADACAKAAIAAAFg");
	this.shape_29.setTransform(881.95,188.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGBXQgGgEgEgHQgCgHgBgOIAAhaIgUAAIAAgFQAHgDAJgHQAJgIAGgLQAEgFAEgPIAFAAIAAAsIAfAAIAAAKIgfAAIAABWQAAANADAFQAEAEAGAAQAFAAAEgCQAFgEACgFIAHAAQgGAOgJAHQgJAHgKAAQgHAAgGgDg");
	this.shape_30.setTransform(870.45,190.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAcBFIAAgcQgSASgIAFQgJAFgJAAQgMAAgIgHQgJgGgDgKQgDgLAAgSIAAg7QAAgKgCgDQgCgEgEgCQgEgCgLAAIAAgFIAvAAIAABYQAAATAHAGQAGAGAKAAQAFAAAIgEQAIgEALgLIAAhLQAAgLgFgEQgDgFgOAAIAAgFIAuAAIAABQQAAAXABAGQABAFADACQACACADAAQAFAAAGgDIACAGIgpAQg");
	this.shape_31.setTransform(858.6,192.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgxAvQgPgVAAgZQAAgRAKgTQAJgRAPgJQAPgJAPAAQAfAAASAXQAQAUAAAaQAAARgJASQgIATgQAJQgPAJgRAAQgfAAgSgYgAgTg4QgIAEgFAMQgEAMAAASQAAAcALAVQAMAWASAAQAOAAAJgMQAKgMAAgcQAAgjgQgUQgKgOgPgBQgIABgIAEg");
	this.shape_32.setTransform(843.575,192.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AArBjIAAgFIAHAAQANAAAFgIQADgEAAgRIAAiEIhLCmIgFAAIhNimIAACEQAAASAEAFQAGAGALAAIAHAAIAAAFIhFAAIAAgFIAHAAQANAAAFgIQADgEAAgRIAAiBQAAgNgDgGQgCgEgFgDQgGgDgMAAIAAgFIA4AAIBICaIBGiaIA5AAIAAAFIgHAAQgNAAgFAIQgDAEAAARIAACBQAAASAEAFQAFAGAMAAIAHAAIAAAFg");
	this.shape_33.setTransform(822.725,189.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgwBFIAAgFQAKAAAGgEQADgCABgFQABgDAAgLIAAgzQAAgYgBgEQAAgEgDgDQgDgCgEAAQgEAAgGACIgBgEIAogRIAGAAIAAAeQAQgeASAAQAJAAAEAFQAGAEAAAHQAAAGgEAEQgEAEgFgBQgFABgHgFQgGgFgDgBQgCAAgDAEQgHAGgHAOIAAA/QAAALADAGQACAEAEACQAFACAJABIAAAFg");
	this.shape_34.setTransform(706.95,192.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeBoIAAgFQAJAAADgCQAEgCACgEQACgFAAgMIAAg0QAAgWgBgFQgBgFgDgBQgCgCgDAAQgFAAgFACIgDgFIAogRIAGAAIAABrQAAANACAEQACAEADACQAEACAKAAIAAAFgAgJhOQgEgEAAgGQAAgGAEgFQAEgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_35.setTransform(697.65,188.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgyA9QgKgKAAgQQAAgJAEgIQAHgJAPgJQAOgIAigNIAAgFQAAgUgHgHQgGgIgLABQgJAAgFAEQgGAFAAAGIAAAJQAAAHgDADQgEAFgFAAQgGAAgDgFQgEgEAAgGQAAgMANgLQANgLAYABQAQAAALAFQAJAFAFAKQACAGAAAUIAAAsQAAATABAEQAAAFACABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIAEAAQADgCAJgJIAAAIQgQAWgPAAQgIAAgDgFQgFgFAAgMQgUAQgFADQgIADgJAAQgOAAgIgJgAgOAAQgLAGgFAIQgFAGAAAJQAAAKAGAIQAGAGAJAAQAKAAASgOIAAgzIgcAMg");
	this.shape_36.setTransform(687.25,192.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AASBjIAAgFIAHAAQAMAAAGgHQADgFAAgSIAAg8IhbAAIAAA8QAAAPACAFQABAEAFACQAGAEAHAAIAHAAIAAAFIhVAAIAAgFIAHAAQANAAAFgHQAEgFAAgSIAAh/QAAgPgCgFQgCgEgEgCQgHgEgHAAIgHAAIAAgFIBVAAIAAAFIgHAAQgHAAgGADQgFADgBAFQgCAEAAAPIAAA5IBbAAIAAg5QAAgPgCgFQgBgEgFgCQgGgEgHAAIgHAAIAAgFIBVAAIAAAFIgHAAQgHAAgHADQgEADgCAFQgCAEAAAPIAAB/QAAAPACAFQACAEAEACQAHAEAHAAIAHAAIAAAFg");
	this.shape_37.setTransform(669.225,189.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAUALALQAMALANAAQALAAAGgHQAGgFAAgJQAAgKgHgGQgHgIgUgKQgVgJgHgJQgHgIAAgOQAAgQAMgLQALgLASAAQAHAAALADIAKADIAEgBIADgFIAFAAIAAAtIgFAAQgGgVgIgHQgJgJgMAAQgLABgGAFQgGAGAAAGQAAAIAEAGQAFAGAOAHIAUAKQAeAOAAAXQAAATgOALQgOALgRAAQgLAAgQgFg");
	this.shape_38.setTransform(889.875,42.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_39.setTransform(877.325,42.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAUALALQAMALANAAQALAAAGgHQAGgFAAgJQAAgKgHgGQgHgIgUgKQgVgJgHgJQgHgIAAgOQAAgQAMgLQALgLASAAQAHAAALADIAKADIAEgBIADgFIAFAAIAAAtIgFAAQgGgVgIgHQgJgJgMAAQgLABgGAFQgGAGAAAGQAAAIAEAGQAFAGAOAHIAUAKQAeAOAAAXQAAATgOALQgOALgRAAQgLAAgQgFg");
	this.shape_40.setTransform(864.925,42.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAUALALQAMALANAAQALAAAGgHQAGgFAAgJQAAgKgHgGQgHgIgUgKQgVgJgHgJQgHgIAAgOQAAgQAMgLQALgLASAAQAHAAALADIAKADIAEgBIADgFIAFAAIAAAtIgFAAQgGgVgIgHQgJgJgMAAQgLABgGAFQgGAGAAAGQAAAIAEAGQAFAGAOAHIAUAKQAeAOAAAXQAAATgOALQgOALgRAAQgLAAgQgFg");
	this.shape_41.setTransform(853.275,42.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgzA9QgJgKAAgQQAAgJAFgIQAFgJAPgJQAQgIAhgNIAAgFQAAgUgGgHQgHgIgLABQgJAAgGAEQgFAFAAAGIAAAJQAAAHgEADQgDAFgGAAQgFAAgDgFQgDgEAAgGQAAgMAMgLQANgLAXABQASAAALAFQAIAFAEAKQADAGAAAUIAAAsQAAATABAEQAAAFADABQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAIAEgBQAEgBAIgJIAAAIQgRAWgPAAQgHAAgEgFQgEgFAAgMQgUAQgFADQgIADgJAAQgOAAgJgJgAgOAAQgLAGgFAIQgFAGAAAJQAAAKAGAIQAHAGAHAAQAMAAARgOIAAgyIgcALg");
	this.shape_42.setTransform(841.1,42.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgfBoIAAgFQAKAAADgCQADgCACgEQACgFAAgMIAAh5QAAgXgBgFQgBgFgCgCQgDgCgDAAIgKACIgCgFIAngQIAGAAIAACxQAAANACAEQACAEAEACQAEACAKAAIAAAFg");
	this.shape_43.setTransform(829.9,38.525);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhOBDQgWgcAAgkQAAgZAMgYQAPgdAbgPQAVgNAdAAQALAAAJACQAJACAQAGIALADQADAAACgDQACgCAAgIIAFAAIAGA/IgGAAQgHgYgNgMQgRgRgcAAQglAAgTAeQgSAaABAjQAAAbALAYQALAXARALQASALASAAQALAAALgDQAKgDAJgFIAAg6QAAgPgCgEQgCgFgFgBQgFgDgMAAIAAgFIBNAAIAAAFIgEAAQgLAAgFAHQgCAFAAAQIAAA9QgRAJgRAFQgQAEgUAAQg5AAgeglg");
	this.shape_44.setTransform(815.1,39.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYBCIgIgBQgDAAgCAEIgEAAIAAgwIAEAAQADAUAMALQALALAMAAQAKAAAFgHQAHgFAAgJQgBgKgGgGQgHgIgTgKQgUgJgGgJQgGgIAAgOQAAgQALgLQAKgLARAAQAHAAAKADIAKADIADgBIADgFIAEAAIAAAtIgEAAQgFgVgJgHQgIgJgLAAQgKABgGAFQgGAGAAAGQAAAIAFAGQADAGAOAHIATAKQAcAOAAAXQAAATgNALQgNALgQAAQgLAAgOgFg");
	this.shape_45.setTransform(710.9,42.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkA1QgRgTABggQAAgiAQgTQAQgTAZAAQAVAAANAPQAPAPAAAZIhXAAQAAAcANARQAOARASAAQAMAAAJgHQAKgHAGgSIAFADQgEAUgNARQgPAQgUAAQgWAAgQgSgAgXgyQgIAJgCARIA5AAQAAgNgDgFQgDgIgGgFQgIgFgGAAQgLAAgKAKg");
	this.shape_46.setTransform(699.05,42.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag4BfQgGgFAAgHQAAgGAFgEQADgEAHAAQAEAAAIAEIAHACQAEAAAFgFQAFgEAFgNIAJgYIguhkIgGgLIgFgHQgEgCgHgCIAAgFIA7AAIAAAFIgDAAQgGAAgDADQgEADAAAEQABAGAEAKIAeBDIAdhKQACgGAAgGIgBgDQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgCgBgGAAIAAgFIApAAIAAAFIgIACIgGAHIgEALIgzCFQgIAUgMAKQgLAJgMAAQgIAAgFgEg");
	this.shape_47.setTransform(685.6,45.475);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhPBjIAAgFIAHAAQAGAAAGgEQAEgCACgFQABgEABgPIAAiAQgBgTgDgEQgFgGgLAAIgHAAIAAgFICPAAIACArIgFAAQgDgQgEgFQgEgGgGgDQgGgDgNAAIgzAAIAABPIAoAAQAQAAAGgFQAGgHACgRIAEAAIAABEIgEAAQgDgOgCgEQgCgFgGgDQgFgDgMAAIgoAAIAABBQAAANABADQABADADACQACABAJAAIAeAAQAQAAAHgCQAIgCAGgHQAIgJAJgTIAGAAIgQAyg");
	this.shape_48.setTransform(669.9,39.025);

	this.Mustache = new lib.Mustache();
	this.Mustache.name = "Mustache";
	this.Mustache.setTransform(850.8,535.95,0.7685,0.7677,0,0,0,94.7,27.4);

	this.Shoes = new lib.Shoes();
	this.Shoes.name = "Shoes";
	this.Shoes.setTransform(554,403,0.7685,0.7677,0,0,0,119.3,52.8);

	this.RightArm = new lib.RightArm();
	this.RightArm.name = "RightArm";
	this.RightArm.setTransform(606.95,571,0.6899,0.6743,0,0,0,82.4,80.9);

	this.LeftArm = new lib.LeftArm();
	this.LeftArm.name = "LeftArm";
	this.LeftArm.setTransform(480.75,571,0.6899,0.6743,0,0,0,82.4,80.8);

	this.Mouth2 = new lib.Mouth2();
	this.Mouth2.name = "Mouth2";
	this.Mouth2.setTransform(852,249,0.655,0.5548,0,0,0,67.8,61.5);

	this.Mouth1 = new lib.Mouth();
	this.Mouth1.name = "Mouth1";
	this.Mouth1.setTransform(852,328,0.2613,0.2623,0,0,0,183.5,100.1);

	this.Nose2 = new lib.Nose2();
	this.Nose2.name = "Nose2";
	this.Nose2.setTransform(693,455,0.5108,0.5765,0,0,0,41.8,56.1);

	this.Nose1 = new lib.Nose();
	this.Nose1.name = "Nose1";
	this.Nose1.setTransform(693,528,0.7685,0.7677,0,0,0,47.7,37.3);

	this.Hair2 = new lib.Hair2();
	this.Hair2.name = "Hair2";
	this.Hair2.setTransform(690.05,254.05,0.9691,0.8806,0,0,0,90.9,53.1);

	this.Hair1 = new lib.Hair();
	this.Hair1.name = "Hair1";
	this.Hair1.setTransform(690,331.95,0.897,0.9829);

	this.Glasses2 = new lib.Glasses2();
	this.Glasses2.name = "Glasses2";
	this.Glasses2.setTransform(850.95,142,0.7685,0.7677);

	this.Glasses1 = new lib.Glasses();
	this.Glasses1.name = "Glasses1";
	this.Glasses1.setTransform(853,82.95,0.7685,0.7677);

	this.Eyes2 = new lib.Eyes2();
	this.Eyes2.name = "Eyes2";
	this.Eyes2.setTransform(691,134,0.7685,0.7677);

	this.RightEyebrow = new lib.Eyebrow1();
	this.RightEyebrow.name = "RightEyebrow";
	this.RightEyebrow.setTransform(901,446,0.676,0.7677);

	this.LeftEyebrow = new lib.Eyebrow();
	this.LeftEyebrow.name = "LeftEyebrow";
	this.LeftEyebrow.setTransform(815,445.95,0.6628,0.7677);

	this.Eyes1 = new lib.Eyes();
	this.Eyes1.name = "Eyes1";
	this.Eyes1.setTransform(691.95,81.95,0.7685,0.7677);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Eyes1},{t:this.LeftEyebrow},{t:this.RightEyebrow},{t:this.Eyes2},{t:this.Glasses1},{t:this.Glasses2},{t:this.Hair1},{t:this.Hair2},{t:this.Nose1},{t:this.Nose2},{t:this.Mouth1},{t:this.Mouth2},{t:this.LeftArm},{t:this.RightArm},{t:this.Shoes},{t:this.Mustache},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Character
	this.instance = new lib.Hamburger();
	this.instance.setTransform(198,310.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Buttons
	this.Face2_btn = new lib.tubedoubleblue();
	this.Face2_btn.name = "Face2_btn";
	this.Face2_btn.setTransform(319.55,581.4,1.3221,1.6267);
	new cjs.ButtonHelper(this.Face2_btn, 0, 1, 2, false, new lib.tubedoubleblue(), 3);

	this.Face1_btn = new lib.tubedoublegreen();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(186.5,581.4,1.3221,1.6267);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 2, false, new lib.tubedoublegreen(), 3);

	this.Reset_btn = new lib.tubedoublegrey();
	this.Reset_btn.name = "Reset_btn";
	this.Reset_btn.setTransform(55.6,581.4,1.3777,1.6267);
	new cjs.ButtonHelper(this.Reset_btn, 0, 1, 2, false, new lib.tubedoublegrey(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Reset_btn},{t:this.Face1_btn},{t:this.Face2_btn}]}).wait(1));

	// Text
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhGBdQADgXAMgTQANgVAhgaQAUgQAGgIQAGgKAAgHQAAgJgGgFQgGgGgIAAQgIAAgGAGQgGAGgCAQIgvgFQADgVAHgMQAIgMANgGQANgHAXAAQAZAAAOAGQAOAGAIANQAIANAAAQQAAAQgJAPQgKAPgYARIgSAQIgLALIBJAAIAAApg");
	this.shape_49.setTransform(153.825,109.95);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhGBdQADgXAMgTQANgVAhgaQAUgQAGgIQAGgKAAgHQAAgJgGgFQgGgGgIAAQgIAAgGAGQgGAGgCAQIgvgFQADgVAHgMQAIgMANgGQANgHAXAAQAZAAAOAGQAOAGAIANQAIANAAAQQAAAQgJAPQgKAPgYARIgSAQIgLALIBJAAIAAApg");
	this.shape_50.setTransform(138.025,109.95);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AghBYQgOgIgIgPQgGgKgEgRQgDgSAAgUQAAg0ARgUQASgWAiAAQARAAALAFQALAFAHAHQAHAHAEAJQAEAHADALQAEAVAAAWQAAAwgPAYQgQAWgmAAQgUAAgNgGgAgQgvQgFANAAAiQAAAiAFANQAGANAKAAQAHAAAFgFQAGgGACgMQADgMAAgYQAAgjgGgNQgGgNgLAAQgLAAgFANg");
	this.shape_51.setTransform(122.475,110.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhGBdQADgXAMgTQANgVAhgaQAUgQAGgIQAGgKAAgHQAAgJgGgFQgGgGgIAAQgIAAgGAGQgGAGgCAQIgvgFQADgVAHgMQAIgMANgGQANgHAXAAQAZAAAOAGQAOAGAIANQAIANAAAQQAAAQgJAPQgKAPgYARIgSAQIgLALIBJAAIAAApg");
	this.shape_52.setTransform(106.475,109.95);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag9BaIgDgjQAKADAMAAQAIAAAGgEQAEgEAEgLIg0iDIAzAAIAXBYIAYhYIAuAAIgwCMQgIAZgJAIQgLAMgZAAQgLAAgVgDg");
	this.shape_53.setTransform(83.75,115.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag6A6QgMgLAAgQQAAgPAIgKQAJgIAWgFIAhgIQAIgCAJgEQAAgKgEgDQgEgEgJAAQgKAAgGAEQgEADgDAJIgtgFQACgNAFgHQAFgIAJgFQAHgEALgCQALgCANAAQAUAAANACQANADAJAIQAGAGADAKQAEAKAAAKIAAA5IABAPQABAFAEAIIgtAAIgDgHIgCgJQgJAKgJAEQgMAFgQAAQgWAAgLgLgAgBAKQgOAEgEAEQgEAEAAAFQAAAGAEAEQAEAEAIAAQAHAAAGgEQAHgEADgGQADgGAAgKIAAgIQgKAEgKADg");
	this.shape_54.setTransform(68.575,112.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AA0BcIAAiLIghCLIgmAAIghiLIAACLIgqAAIAAi2IBEAAIAaBuIAahuIBFAAIAAC2g");
	this.shape_55.setTransform(49.575,110.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgMBYQgHgEgEgKQgEgKgBgXIAAgtIgRAAIAAglIARAAIAAgZIAvgaIAAAzIAaAAIAAAlIgaAAIAAAtQAAAJABADQADAEAFAAQAFAAAJgDIAEAjQgSAEgPAAQgQAAgJgFg");
	this.shape_56.setTransform(155.35,72.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgwBEIAAiEIAsAAIAAAWQAGgOAHgFQAHgGAJAAQALAAAMAHIgPAkQgHgDgFAAQgKAAgFAIQgGAMAAAeIAAAtg");
	this.shape_57.setTransform(145.9,74.775);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAlBbIgIgdIg7AAIgIAdIg1AAIA/i1IA4AAIBAC1gAgSAWIAkAAIgShBg");
	this.shape_58.setTransform(130.475,72.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhDBdIAAi2IAtAAIAAAUQAJgNAHgEQAKgGAMAAQAZAAANAUQANAVABAeQAAAfgPASQgPARgWAAQgLAAgIgEQgJgEgHgHIAAA/gAgNgvQgHAIAAARQAAAPAHAHQAGAHAIAAQAIABAGgIQAFgGABgRQAAgRgHgHQgFgIgIAAQgJAAgFAIg");
	this.shape_59.setTransform(105.75,77.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AA5BEIAAhLQAAgJgDgEQgFgHgHAAQgIAAgFAHQgFAGAAAOIAABEIgvAAIAAhIIgBgMQgBgFgEgDQgDgDgFAAQgJAAgFAGQgFAHAAAOIAABEIgvAAIAAiEIAsAAIAAAUQAJgNAKgFQAJgFAOAAQAPAAAHAGQAJAFAFAMQAMgNAJgFQAJgFANAAQAUAAALANQALANAAAbIAABSg");
	this.shape_60.setTransform(85.775,74.775);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgvA1QgXgUABghQAAgdASgUQAUgTAfAAQAlAAASAXQAQASAAAbQAAAegTAUQgTATghAAQgdAAgSgQgAgQgZQgHAJAAAQQAAASAHAIQAHAJAJAAQAKAAAHgIQAGgJAAgSQAAgQgGgJQgHgIgJAAQgKAAgHAIg");
	this.shape_61.setTransform(66,74.925);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgnBWQgRgJgMgWQgOgWAAghQABgtAWgYQAXgZAoAAQAfAAASAOQATAPAJAdIgvAKQgCgIgCgEQgFgGgGgDQgGgEgIAAQgRAAgKAPQgHALAAAZQAAAdAIAMQAKALAOAAQAPAAAHgJQAIgJAEgRIAuAOQgFAVgKAOQgKAOgPAIQgPAGgWAAQgbABgSgJg");
	this.shape_62.setTransform(49.05,72.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgvA1QgXgUAAghQABgdASgUQAUgTAfAAQAlAAASAXQAQASAAAbQAAAegTAUQgTATghAAQgdAAgSgQgAgQgZQgHAJAAAQQAAASAHAIQAHAJAJAAQAKAAAHgIQAGgJAAgSQAAgQgGgJQgHgIgJAAQgKAAgHAIg");
	this.shape_63.setTransform(180.3,37.175);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgvBEIAAiEIArAAIAAAWQAGgOAHgFQAHgGAKAAQAKAAAMAHIgOAkQgIgDgGAAQgIAAgGAIQgGAMAAAeIAAAtg");
	this.shape_64.setTransform(168.25,37.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgmA+QgOgIgJgQQgJgQAAgWQAAgeATgTQASgTAgAAQAaAAAPAIQAPAJAIAQQAIARAAAZIAAAGIheAAQACAMAFAGQAHAIAKAAQAGAAAHgDQADgDAFgGIAuAFQgKAUgQAJQgPAIgbAAQgYAAgOgHgAgRgdQgEAGgBAMIAtAAQgCgOgFgHQgGgGgKAAQgKAAgHAJg");
	this.shape_65.setTransform(154.1,37.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AA5BEIAAhLQAAgJgDgEQgFgHgHAAQgIAAgFAHQgFAGAAAOIAABEIgvAAIAAhIIgBgMQgBgFgEgDQgDgDgFAAQgJAAgFAGQgFAHAAAOIAABEIgvAAIAAiEIAsAAIAAAUQAJgNAKgFQAJgFAOAAQAPAAAHAGQAJAFAFAMQAMgNAJgFQAJgFANAAQAUAAALANQALANAAAbIAABSg");
	this.shape_66.setTransform(134.375,37.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgvA1QgXgUAAghQABgdASgUQAUgTAfAAQAlAAATAXQAPASAAAbQAAAegTAUQgTATghAAQgdAAgSgQgAgQgZQgHAJAAAQQAAASAHAIQAHAJAJAAQAKAAAHgIQAGgJAAgSQAAgQgGgJQgHgIgJAAQgKAAgHAIg");
	this.shape_67.setTransform(114.6,37.175);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAYBcIgbg5QgFgKgEgDQgGgEgHgBIgFAAIAABLIg0AAIAAi3IBWAAQAYAAANAFQANAFAIAMQAIAMAAASQAAAOgGAMQgGAKgLAHQgHAEgLADQAJADAEADIAJAKIAHAMIAZA1gAgegQIAWAAIANgDQAFgBAEgEQADgFAAgGQAAgJgFgFQgFgEgOgBIgXAAg");
	this.shape_68.setTransform(98.425,34.65);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgtBVQgSgKgMgWQgMgVAAggQAAgrAXgZQAXgaApAAQAqAAAXAZQAXAZAAArQAAAggKAUQgKAVgTAMQgTALgcgBQgcAAgTgJgAgZgnQgKAMAAAcQAAAbAKAMQAKAMAPAAQARAAAJgLQAJgNAAgdQAAgagJgMQgKgLgQAAQgPgBgKAMg");
	this.shape_69.setTransform(70.55,34.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgYBCIAAgzIAxAAIAAAzgAgYgOIAAgzIAxAAIAAAzg");
	this.shape_70.setTransform(48.9,37.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Ag9BaIgDgjQAJADANAAQAIAAAGgEQAFgEADgLIgziDIAxAAIAYBYIAYhYIAvAAIgxCMQgJAZgIAIQgMAMgYAAQgLAAgVgDg");
	this.shape_71.setTransform(37.75,39.875);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AhNBcIAAi3IBhAAQAYAAANAOQANANAAATQAAAQgJAMQgGAIgMAEQASAFAJALQAIALAAASQAAANgGAMQgGAMgLAGQgGAEgNACIgYADgAgYA0IAZAAQAOAAAFgFQAGgFAAgJQAAgIgGgFQgFgFgOAAIgZAAgAgYgTIAWAAQAMABAEgFQAFgFAAgJQAAgHgFgFQgEgFgLAAIgXAAg");
	this.shape_72.setTransform(21.625,34.65);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AhRB3IAAgJQASABAIgGQAGgEADgJQABgFAAgTIAAhZQAAgpgBgIQgCgHgEgEQgFgDgGAAQgIAAgKADIgCgJIBEgcIALAAIAAA0QAbg1AeABQAOgBAJAKQAIAIAAALQAAAJgGAIQgGAGgJABQgJgBgLgIQgKgJgGAAQgEAAgFAFQgLAKgLAYIAABuQAAAUAEAKQADAGAIAFQAIAFAPgBIAAAJg");
	this.shape_73.setTransform(586.325,54.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AhCBbQgdghAAg3QAAg7AeghQAeghAsAAQAmAAAYAZQAZAbAAArIicAAQAAAyAZAeQAYAdAhAAQAWAAAQgMQARgNALgeIAIAEQgGAjgZAcQgZAdglAAQgoAAgdgggAgphYQgQAQgDAdIBoAAQgBgWgEgIQgGgPgNgIQgMgIgMAAQgVAAgQAQg");
	this.shape_74.setTransform(566.575,54.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhfCZQgSgMgBgOQAAgGAEgGQAEgKANgQIAZgcQgNgHgFgGQgGgHABgHQgBgKAIgLQAGgMAagVQgVgKgLgTQgLgSAAgYQAAgiAZgYQAZgZAoAAQAfAAAYAQIAwAAIAMABIADACQABACABAGQgBAGgBADIgDACIgMAAIgdAAQANATAAAcQAAAhgXAWQgZAYgoAAQgRAAgRgGQgLALgDAFQgEAIgBAFQABAEAEAEQADAEANACIAiACQAyABAPADQAXACAOAPQANAOAAAVQAAAcgaAaQgnAkg9ABQgvAAghgXgAhIBXQgGAMAAAJQAAAMAOAKQAZAPAuAAQAsAAAVgQQAWgQgBgSQAAgNgMgGQgNgFgmgCQg2gBgegFQgMANgGALgAgoiTQgMAPAAAfQAAAnAQAXQANARAVAAQARAAAMgPQAMgPAAgfQAAgngRgXQgMgRgTAAQgSAAgNAPg");
	this.shape_75.setTransform(542.75,60.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhRB3IAAgJQASABAIgGQAGgEADgJQABgFAAgTIAAhZQAAgpgBgIQgCgHgEgEQgFgDgGAAQgIAAgKADIgCgJIBEgcIALAAIAAA0QAbg1AeABQAOgBAJAKQAIAIAAALQAAAJgGAIQgGAGgJABQgJgBgLgIQgKgJgGAAQgEAAgFAFQgLAKgLAYIAABuQAAAUAEAKQADAGAIAFQAIAFAPgBIAAAJg");
	this.shape_76.setTransform(521.675,54.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAvB3IAAgwQgdAggPAIQgPAIgRAAQgTABgOgLQgOgMgGgRQgEgTAAggIAAhmQAAgRgEgGQgDgGgIgEQgGgEgSABIAAgJIBPAAIAACaQABAgAKALQAMAJAPABQAKgBANgGQAOgHASgUIAAiCQAAgUgHgHQgHgGgWgBIAAgJIBMAAIAACLQAAApACAJQACAIAFAEQADADAGAAQAHABAKgFIAEAJIhEAcg");
	this.shape_77.setTransform(500.3,55.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AiWCsIAAgKIANAAQAVAAAJgNQAGgJAAgdIAAjdQAAgggIgIQgJgLgTAAIgNAAIAAgKICRAAQAnAAAZAGQAlAJAUAYQATAXAAAeQAAAagPAUQgQAVgdAJQAiAHASARQAYAXAAAiQAAAZgQAYQgQAXgbALQgcALg5AAgAgkAEQgLABgHABIAACNQAdAHAbAAQAsAAAYgVQAXgVAAgeQAAgUgKgSQgLgTgYgLQgYgKgiAAIgaAAgAg2iUIAACEIAVADIAaAAQAjAAASgIQASgIAKgQQAJgRAAgTQAAgegYgVQgYgWgsAAQgZAAgUAGg");
	this.shape_78.setTransform(469.825,49.275);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgSAUQgIgIAAgMQAAgLAIgIQAIgIAKAAQAMAAAIAIQAHAIAAALQAAAMgHAIQgJAIgLAAQgKAAgIgIg");
	this.shape_79.setTransform(434.925,64.35);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AhRB3IAAgJQASABAIgGQAGgEADgJQABgFAAgTIAAhZQAAgpgBgIQgCgHgEgEQgFgDgGAAQgIAAgKADIgCgJIBEgcIALAAIAAA0QAbg1AeABQAOgBAJAKQAIAIAAALQAAAJgGAIQgGAGgJABQgJgBgLgIQgKgJgGAAQgEAAgFAFQgLAKgLAYIAABuQAAAUAEAKQADAGAIAFQAIAFAPgBIAAAJg");
	this.shape_80.setTransform(420.425,54.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("ABJCsIAAgKIAMAAQAVAAAJgNQAGgIgBgdIAAjkIiAEgIgIAAIiBkgIAADkQAAAgAGAIQAKAKATAAIAMAAIAAAKIh0AAIAAgKIALAAQAWAAAJgNQAFgIAAgdIAAjfQAAgXgFgKQgDgHgKgFQgJgFgUAAIAAgKIBeAAIB5EMIB3kMIBgAAIAAAKIgMAAQgWAAgJANQgFAIAAAdIAADfQAAAgAHAIQAJAKAUAAIAMAAIAAAKg");
	this.shape_81.setTransform(389.1,49.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(481.9,334,459.1,291.70000000000005);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#66CCFF",
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