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


(lib.Yankee = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("APbF8IC2gaIAMixQhIkfhtkSIhji9Qh1gxg+gNIgOgCQjEhJi/gJQgEAAgDAAQgegCgfAAID8DVQBGCfAhDEIBJGuIALBuIi8AEAE6rPIiTgNQl8A3ipBlQgFABgEAEQijBjiMKzQE3BiGBAiIH2AoQhWBhlADFQg/AahcANQiRAShvgSQmSAOm1jmQgvgrAhghQASgXA3gaQC8hWDThOAPbF8IAAjUQhClhhvlUIhmhwAPbF8IknAHAhBCcQhTjLCMifQgJgmgfgOQhXArgID1QgNg4grglIBXirQAYg9AbALIABgTQgEg5gpgrQAEAygWAyIhSCiIgTipIACgHQgFg+AXgvQg5ATghBAQAsBRgEBiQgdgSghiYQgxAMgQA3QAdA3gHBLQgVCJhMBjQANA3ArAqQgJgdAPgaQA/ipAKirQAZBKApA7IgdCtQgHAngiAhQAyAdA3gMQgTgcAGgoIAViRQBFBhgEClg");
	this.shape.setTransform(-0.0014,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBJIgUCSQgFAoARAcQg2AMgxgdQAhghAHgnIAeiuQgqg6gZhKQgKCqg/CqQgPAaAJAdQgrgqgNg3QBMhkAViIQAHhLgdg3QARg3AwgMQAhCYAeASQADhigshRQAhhAA4gTQgXAvAFA+IgCAHIATCpIBSiiQAWgygEgyQApArAEA5IgBATQgbgLgYA9IhXCqQArAlANA5QAJj1BWgrQAfAOAJAmQiLCeBTDMIhTBZQAEilhFhig");
	this.shape_1.setTransform(-23.35,-9.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ak5LUQmSAOm1jmQgvgrAhghQASgXA3gaQC8hWDThOQE3BiGBAiIH2AoQhWBhlADFQg/AahcANQhIAJhAAAQhAAAg4gJgAACFfQmBgik3hiQCMqzCjhjQAEgEAFgBQCphlF8g3ICTANQgegCgfAAID8DVQBGCfAhDEIBJGuIALBuIi8AEgAiTD1IBShZQhTjLCMifQgJgmgfgOQhXArgID1QgNg4grglIBXirQAYg9AbALIABgTQgEg5gpgrQAEAygWAyIhSCiIgTipIACgHQgFg+AXgvQg5ATghBAQAsBRgEBiQgdgSghiYQgxAMgQA3QAdA3gHBLQgVCJhMBjQANA3ArAqQgJgdAPgaQA/ipAKirQAZBKApA7IgdCtQgHAngiAhQAyAdA3gMQgTgcAGgoIAViRQBFBhgEClgAKpEVIhJmuQghjEhGifIj8jVQAfAAAeACIAHAAQC/AJDEBJIBmBwQBvFUBCFhIAADUIknAHgAPbCoQhClhhvlUIhmhwIAOACQA+ANB1AxIBjC9QBtESBIEfIgMCxIi2AagAq2DbIAAAAg");
	this.shape_2.setTransform(-0.0014,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Yankee, new cjs.Rectangle(-119.1,-74.3,238.2,148.7), null);


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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AKDhEQhtAphxASAqCA3QIQg3BvBF");
	this.shape.setTransform(1.7,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AoEomQgPAEgPAGQhGAZhEAeICuKfIAvC4QAsAJAwANQA4ALA4AKQBcAPBaAMQBWAKBVAFQCxAZCmgaIAPiIQB4g0DWAMQCnBmjPBtQlECFmZhaQkKC8nXhWQjjhfCYiKQB1hIDbApAjBp2QioAcibA0An+C6QBYgcBdgVIi7qvAHEE+IAWjYAjBp2IBPLbQEUggE4AhIBLrlQmQgvlWA4g");
	this.shape_1.setTransform(0.0255,0.0113);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7A7A7").s().p("Ag3COIhGkSQBpgYBtgMIAlFRQhagLhbgQg");
	this.shape_2.setTransform(-20.375,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4D").s().p("AjIkvQCbg0CngcIBPLbQhuANhpAXg");
	this.shape_3.setTransform(-31.55,-24.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ArUJ6QjjhfCYiKQB1hIDbApQAsAJAwANIBwAVQBcAPBaAMQBWAKBVAFQCxAZCmgaIAPiIQB4g0DWAMQCnBmjPBtQlECFmZhaIgBAAIgBgBQg9gli8gBIAAAAIgBAAQiTABjeAXIgBAAIgDAAIgDAAIgDABIgCAAIgFAAIAFAAIACAAIADgBIADAAIADAAIABAAQDegXCTgBIABAAIAAAAQC8ABA9AlIABABIABAAQi3CBkXAAQh/AAiUgbgAG1HGQBxgSBtgpQhtAphxASgAANIUIAAAAgAqsnlQBEgeBGgZQAPgGAPgEIC7KvQhdAVhYAcgAhyBlIhPrbQFWg4GQAvIhLLlQk4ghkUAgg");
	this.shape_4.setTransform(0.0255,0.0113);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#919191").s().p("ABxCzQhWgFhVgKIgllSQEUggE4AhIgXDXIgOCIQhWANhYAAQhTAAhWgMgAlgB0QgwgNgtgJIgvi3QBZgcBcgVIBGETIhvgVg");
	this.shape_5.setTransform(-1.85,27.6441);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tophat, new cjs.Rectangle(-87,-67.1,174.1,134.3), null);


(lib.Tie2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("ABNhJQB0hSBsgJQA0C+hQCFQgsAYiZhaQhEAfhSggQiKBcg/gYQhOicA4inQArgMC1BmQBBggBVAgQAQBJgQBaAhLhFQgeBFAfBc");
	this.shape.setTransform(-0.0136,0.0267);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252525").s().p("AkTCgQhOicA4inQArgMC1BmQBBggBVAgQAIAkAAAoQAAApgIAuQAIguAAgpQAAgogIgkQB0hSBsgJQA0C+hQCFQgsAYiZhaQhEAfhSggQgQgvAAgpQAAgnAPgiQgPAiAAAnQAAApAQAvQhuBJg+AAQgQAAgNgFg");
	this.shape_1.setTransform(-0.0136,0.0267);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tie2, new cjs.Rectangle(-33.1,-17.5,66.30000000000001,35.1), null);


(lib.Tie1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ag5lnIAAglQgZhCAFg4QBDgaBQAaQAVAmgjBYIAAAhIAABzIA5J2IhxCSIhwiPIA4qNIgBhfQA5AQA4gQ");
	this.shape.setTransform(0,0.0125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252525").s().p("AhwGFIA4qNIgBhfQA5AQA4gQQg4AQg5gQIAAglQgZhCAGg4QBDgaBPAaQAVAmgjBYIAAAhIAABzIA5J2IhxCSgAg5lnIAAAAg");
	this.shape_1.setTransform(0,0.0125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tie1, new cjs.Rectangle(-12.3,-54.2,24.6,108.4), null);


(lib.Mustache2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Ar6FQQghgSgRgbQDZgMBEjaQBkmhC4ADQDeAEDCgJQDGgRBlEDQBlGpDwgXQgOAegpASQhFBBjQhiIhshKQiIhhhRh8QhSglgrg/QgNg5g4A5IlDFNQhIBDhoAaQhOAcg6AAQg2AAgjgYg");
	this.shape.setTransform(0,-0.0004);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mustache2, new cjs.Rectangle(-81.3,-36,162.6,72), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AotgvQAJgSgUgSQgWgWg5BBQgYBABBATIAvAAQAjAHDeiuQCXiBCXB0QCTh1ClCLQCgCTBrAQQCAgqhjhQQgVgcggAcQgFAHACAQAotgvQAigegYgcQgbgbhHAoQheA3AkBgQAdAvAsASQABABACAAQCHBRCogRQD9gRBHhcQA2BAAtAHQGdBvCqi1QA8gvg3hXQhXhVgvAbQgcAkAbAYIADAFAotgvQgBABgBAC");
	this.shape.setTransform(0.0148,0.0233);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABjCXQgtgHg2hAQhHBcj9ARQioARiHhRIgDgBQgsgSgdgvQgkhgBeg3QBHgoAbAbQAYAcgiAeQAJgSgUgSQgWgWg5BBQgYBABBATIAvAAQAjAHDeiuQCXiBCXB0QCTh1ClCLQCgCTBrAQQCAgqhjhQQgVgcggAcQgFAHACAQQgbgYAcgkQAvgbBXBVQA3BXg8AvQhpBwjHAAQh6AAidgqg");
	this.shape_1.setTransform(0.0148,0.0233);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mustache, new cjs.Rectangle(-72.3,-20.3,144.7,40.7), null);


(lib.lens = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00CCFF").s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lens, new cjs.Rectangle(-47.5,-47.5,95,95), null);


(lib.jk2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#996600").ss(1,1,1).p("ADeiuQC0DaBLEbQAPA4gcAhQgcAghEADQlKgdjYimQjZing+i5Qg+i5BbhkQBahjC+ArQC+AtC0Dag");
	this.shape.setTransform(-149.1987,36.2634);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#926F36").s().p("AiyEAQjZing+i5Qg+i5BbhkQBahjC+ArQC+AtC0DaQC0DaBLEbQAPA4gcAhQgcAghEADQlKgdjYimg");
	this.shape_1.setTransform(-149.1987,36.2634);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jk2, new cjs.Rectangle(-198.4,-9.8,98.5,92.2), null);


(lib.jk = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#996600").ss(1,1,1).p("Au0i2QCIhNB8hIQEcimGMAAQGMAAEYCiQEZChAADjQgBDkifBZQifBYiRAo");
	this.shape.setTransform(0.85,-5.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#926F36").ss(1,1,1).p("AgyD3QhLhfAli+QAGgdC3iz");
	this.shape_1.setTransform(-91.3376,1.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#926F36").s().p("AAOG9IC+lPQpjCzoPAPQhMhfAli+QAGgdC5izIiAAAQCIhMB7hIQEcimGMAAQGMAAEYChQEZCiAADjQAADkigBYQifBZiRAnQgtANhEAAQiSAAj5g7g");
	this.shape_2.setTransform(-2.8876,-4.6955);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jk, new cjs.Rectangle(-102.4,-56.1,199.10000000000002,101.80000000000001), null);


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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AK9AAQAABDgvAvQgvAwhDAAQhDAAgwgwQgvgvAAhDQAAhCAvgwQAwgvBDAAQBDAAAvAvQAvAwAABCgAl5AAQAABDgwAvQgvAwhDAAQhDAAgvgwQgvgvAAhDQAAhCAvgwQAvgvBDAAQBDAAAvAvQAwAwAABCg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AGpByQgvgvAAhDQAAhCAvgvQAwgwBCABQBEgBAuAwQAwAvAABCQAABDgwAvQguAvhEAAQhCAAgwgvgAqNByQgvgvAAhDQAAhCAvgvQAwgwBDABQBDgBAuAwQAwAvAABCQAABDgwAvQguAvhDAAQhDAAgwgvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyes2, new cjs.Rectangle(-71.1,-17.1,142.2,34.3), null);


(lib.Eyes1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#926F36").s().p("AGlB0QgwgwAAhEQAAhDAwgwQAwgwBEAAQBEAAAwAwQAwAwAABDQAABEgwAwQgwAwhEAAQhEAAgwgwgAqMB0QgbgbgMghQgJgbAAgdQAAgcAJgaQAMgiAbgbQAwgwBEAAQBEAAAwAwQAwAwAABDQAABEgwAwQgwAwhEAAQhEAAgwgwg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyes1, new cjs.Rectangle(-70.1,-16.4,140.3,32.8), null);


(lib.Eyebrows_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhvgMQhagrgDArIgBAwQgUgkgBgXQAIgqAfAKIA8AQQAfAQgPALgABOAVQA9AKAvgbQAuABgFAsIgMAJQgdgigWAIQghANgegEQgGAAgEgBQgSgEAFgPg");
	this.shape.setTransform(-5.5505,0.0279);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACkAgQghANgegEIgKgBQgSgEAFgPQA9AKAvgbQAuABgFAsIgMAJQgdgigWAIgAjigXQAIgqAfAKIA8AQQAfAQgPALQhagrgDArIgBAwQgUgkgBgXg");
	this.shape_1.setTransform(-5.5505,0.0279);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eyebrows_1, new cjs.Rectangle(-29.2,-6.7,47.4,13.5), null);


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
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AK2j/QAHgNAHgPQDSizhpD4QgFANgGAPQgJAHgIAGQgFANgHAOQgIAHgIAGQgEANgHAOQgGAFgHAGQgEAKgGAMQgHAHgHAGQgMAJgKAIQgFALgFANQgJAGgIAHQgFAMgGAOQgFANgHAPQgIAGgIAHQgEAMgHAOQgGAFgHAGQg/A0gmAVQgKAFgIAEQgKAEgHABQgCABgCAAQgHADgGACQgGANgHANQgBABAAABQgBAAgBAAQgLgCgCgMQgBAAgBAAQgHAOgUAUQgcAMgTAFQgSAEgKgDQgLAPgWAUQgLgCgCgKQgLAPgWAUQgEgUAfgzQACgDADgEQAGADADAFQAHgOAKgSQAJABAGADQAFgMAIgOQANABAKACQABgKAHgOQAEgKAHgMQAGgKAIgLQAHgMAJgNQArgYAdgLQAGgNAHgMQAAgCABgBQAFgEAFgEQAFgJAFgKQAEgCAFgCQAGgDAGgDQAEgCAEgBQAGgEAFgFQAEgKAGgNQAIgGAHgFQAJgHAHgFQADgMAGgOQACgFACgFQADgIAEgJQAFgNAIgPQAGgGAHgFQAFgNAHgNQAGgMAGgMQAHgOAIgPQAHgGAGgFQAHgOAIgQQAKgIAIgHQAHgOAIgPQD0jYiFEoQgLAKgKAIQgJAHgIAHQgJAHgJAGQgEANgGAPQgHAGgHAFQgJAHgJAHQgDALgFAOQgFAMgFAOQgMAKgLAIQgKAHgJAHQgDAKgEAMQgEALgFAMQgJAGgJAHQgIAGgIAFQgDANgFAPQgFAMgGAOQgEAMgGAOQgEALgGAMQhXBJgrATQgEAFgDAFQgJAFgKAFQgGAEgJAEQgGAMgJANQgGAJgHALQhmA7guAJQgbAGgHgLQgDACgDACQgLACgKABQgIACgKAAQgNACgMACQAAgIgHgIQgTABgOgBQgFgPgjgVQACgEAEgEQgIgEgIgEQgFgCgFgCQATgNAXgPQAMgIAMgIQAIgBAIgBQAKgBAIgDQAOgBAMgDQAMgIANgJQANgIAOgJQArgIAfgCQAEAAADAAQAEgGAFgGQACgDADgDQAGgIAGgJQAGgDAIgFQAJgMAKgNQAIgFAHgEQALgHAKgGQAJgMALgOQAJgMAKgOQAmgXAdgPQABgDACgDQAGgFAGgFQAIgGAGgGQAGgNAIgPQAKgIAJgIQAHgGAHgFQAFgNAHgOQADgHADgGQADgIAFgIQAGgNAIgOQAFgFAFgEQAHgFAGgGQAJgHAHgGQAFgLAFgNQAGgMAIgPQAKgJAJgIQC1iVhPDMQgFAMgGAPQgIAHgJAHQgEAMgHAOQgGAGgIAFQgIAHgHAGQgNAJgMAJQgDAMgFAOQgEALgEALQgKAHgIAHQgKAHgKAHQgJAHgIAFQgCAJgEAMQgWAQgSAKQgHAQgMAWQgJAQgNAUQgOAJgMAGQgLAGgJADQgLAEgIAAQgHAQgLAVQgBABAAABQgGALgIANQgCAEgDAFQgFAHgGAIQgGALgJANQgHAEgIAFQhuA+gnAAQgEgBgDAAQgEgBgCgBQgHAFgIAGQgKABgLACIAAAAQAAgHADgKIAAAAQgKAJgMALQgKAHgNAJQgJAJgNAJQgJAHgLAIQh0ASgtgGQgUgEgHgIQAIAFAKAEQB0gBAtgOQAKgDAHgEQAKgHgBgJQgaADgVABQACgBABgBQAIgIgEgKQg7gEATggQgIgFgJgFQgBAAgBgBQgEgCgEgCQADgCAEgDQgEgCgDgBQARgLATgMQAHgBAGgBQAJgCAIgCQALgBAJgCQAPgCANgBQAIgIALgIQBCgJAcAIQADgFAEgFQAFgGAFgHQAHgKAIgKQACgDACgDQAGgDAGgDQAGgDAFgEQABAAABAAQABgBAAgBQAKgGAIgEQANgHALgGQAzgaAZgBQAGgNAGgNQADgGADgGQAEgIAEgIQAEgCAEgBQAGgCAFgBQAIgDAHAAQADgNAHgQQALgEAKgBQAmgGgKAoQglALAJgtQACgNAGgPQAJgEAIgCQABgGABgGQADgLAEgLQAFgNAGgOQAHgGAHgFQAJgIAJgFQADgMAFgOQAFgNAGgOQAJgIAJgHQANgKALgHQADgLAEgNQAEgLAGgMQAFgNAHgPgAJIhiQAGgGAHgFQAIgGAHgGQALgIAJgHQADgMAGgPQAEgLAGgNQAMgJAJgIQB9hegjB6QgKAIgJAGQgSALgNAHQABALgDARQgDALgEAOQgLAIgKAHQgCALgEAOQgMAIgKAHQgBAJgEAMQgDALgEALQgEANgGAOQgEANgHAOQgGAFgIAGQgjAcgbASQgJAOgLARQgNAHgLAHQgKAFgJAFQgCADgCAEQgGAIgGAKQgJAFgKAGQgIAEgIAEQgCABgBABQgXAMgTAIQgTASgcAWQgTAPgYAQQgOADgOACQgKABgLACQgHABgGABQgCgDAAgCQgEADgDADQgKABgJAAQAHgWAYglQANARgsAqAI8hZQAGgFAGgEAJYhGQAAgLAEgOQANgKALgGQAAgKAEgPQAQgLANgGQgBgLAFgQQBdhBgPBTQgCAMgFAQQgOAKgMAIQgPAJgLAGQAAAKgCAPQgOAJgLAGQAAAKgDAPQgLAHgJAFQAAAJgCAMQgVANgPAHQgDALgHAQQgTALgMADQgEAQgMAXQgNAGgKACQgFAQgMAVQgHAPgKAQQgLAGgJAEQgDACgCABQgCAAgBAAQgEAAgDgBQgCADgBADQgQAIgNAGQgBgCAAgBQAAACgBABQgfANgSABQgdACAGgbQAcAFgFAUQgEAPgVAWQgQAQgZAUQgMACgIgCQgOAMgRAOQgEADgEAEQgDgCgCgDQgFAAgEABQgKAIgMAKQAAAAgBAAQgKAIgNAJQgKAJgNAIQgIACgJABQgHABgFABQhXAMgogEQgTgCgJgGQgEgCgCgEQgFgIAIgNQAsgMgMgWQAGgGAHgFQADgCACgCQgDgCgEgCQAFgDAFgEQABgBABAAQACgCADgBQgCgBgCgBQgVgJgXgKQgHAAgGAAQgJAAgIAAQgMgGgNgFQgPgGgPgHQgJABgIgBQgPgGgQgGQgMAAgMgBQgOgGgQgGQgngBgfACQgGgIgIgHQgGgDgGgCQgKgKgJgLQgHgDgIgEQgIgEgJgEQgNgFgLgFQgJgLgKgNQgKgLgLgMQgLgMgMgMQgfgPgZgLQgCgBgCAAQgDgBgCgBQgGgDgGgCQgDgGgCgGQgMgJgKgIQgFgEgFgEQgJgHgJgEQgBgJgDgLQgEgMgFgOQgFgNgGgOQgJgHgHgGQgFgMgGgPQgJgIgIgGQgEgKgFgMQgMgKgKgIQgEgKgFgMQgGgNgHgPQgGgNgIgQQgHgOgIgPQjzjXCEEpQALAJALAIQAFANAGAOQAIAIAIAGQAGANAGAOQAIAGAIAHQAFAMAGAOQAHAGAGAFQAEADADADQAEAKAFAMQAEALAGALQALAJALAIQAIAHAIAHQAJAGAJAHQAIAGAIAFQAOAKALAIQAZAQARAGQABANAMAXQARAIAMADQAFAQAOAWQAOAEAIgBQAIARAPAXQABABABACQAJADAKADQAJADAJADQACgXgWg2QgGABgEACQgUAKAXArQAKgNgNgoQgEgNgHgQQgHgBgGABQgcAFAUArQATgFgLgrQgDgNgGgQQgJgCgHAAQgmgBAOAnQAgAHgIgtQgDgLgFgPQgNgEgLgBQAAgKgEgOQgGgCgGgCQgBgLgEgPQgDgJgEgKQgIgHgHgFQgMgJgLgGQgBgLgEgPQgDgLgFgOQgKgIgKgHQgPgLgNgHQAAgLgEgPQgDgKgEgMQh9hdAjB7QADAMAFAPQAFADAFAEQADALAFAOQAFAMAFAOQAMAKALAIQAKAIAJAHQAMAIAKAHQACAIADAMQACAJAEALQAEAMAGAPQAIAHAGAFQAFAMAGAOQAEANAGANQAFALAFAMQBnBWAqALQADAEAEAEQAKAFAJAEQAIADAIAEQAIALAJALQAHAJAJAKQBrAwAvAGQAVACAJgHQAEgDABgFQAAgBAAgBQAKgBAJgBQAKAAAJgCQALAIAOAIQALAGAOAIQALAGAOAHQABAAACAAQgEgGADgIQAUgBARgCQAkgEAWgGQgkgMApgpQgFgDgFgEQAFgDAFgEQgEgCgDgCQgXgMgfgNQgNgFgNgGQgIAAgIAAQgKAAgJAAQgOAAgMAAQhXADgSATQgGAGABAHQgJgPgOgSQgBgBAAgBQgHACgEADQgHgLgJgNQgKACgHACQgEgJgHgLQgQABgLADQgfAGgIALQAoAGgBgXQgBgSgZgjQgHgJgJgKQgxgVgcgEQgFgBgEAAQgFgNgGgNQgGgCgFgBQgFgLgFgNQgFgKgFgLQgBgCgBgCQgIgHgHgGQgFgLgGgNQgGgMgIgOQgGgOgJgQQgJgIgJgIQgHgOgIgPQgBgBgCgBQgFgMgHgNQgGgFgFgEQgGgGgHgGQgFgLgHgNQgGgNgJgPQgHgGgGgFQgGgPgJgPQgJgIgJgIQjSizBqD5QAIAHAIAHQAJAGAJAHQAIAGAIAGQAGAEAFADQACAMAFAPQAOAKAMAJQACALAFAOQALAIAKAHQACALAEAOQADAKAEAKQADAKAFAMQAFAMAGAPQAGANAGAOQAIAHAIAGQAGAGAIAFQAcAWAWAQQAQAVAVAZQABACACACQAIAEAIAEQAFADAFADQAMAGAJADQAFACAFAAQAEABADAAQAIgBAEgFQAEAHAFAIQAFAJAIAMQAEgFABgKQAdAKATACQgIALAMAPQAhAKATAAQAKAOAZASQARAAAHgFQANgLgSghQgZAPAeAdQAOAMAZAQQAGgIgGgQQgDgIgGgKAI8hZQAHgOAIgPQAGgEAFgFQAGgFAGgFQAFgMAHgOQAHgMAGgNQAGgFAGgFQAIgGAGgHQALgIAKgIQCXh4g3CgQgIAGgIAFQgDANgFAPQgFAMgGAOQgEANgGAOQgIAGgHAGQgFALgEAMQgFALgGAMQgLAKgKAIQgFANgGANQgJAHgIAGQgIAHgJAHQgHAGgHAGQgdAWgWAOQgQAJgMAGQgIAQgMAUQgIAOgKAQQgDAEgCAEQgGAIgFAJQgKAFgJAFQgEAHgFAIQgCAAgBABQgHACgFACQgHABgFAAQgGALgIALQguAZgfANQgZAKgQADQgNALgRAMQgIAGgIAHQgEACgDADQgLACgKABQgJAGgJAHQgDgEAAgGQAAAAgBAAQgJACgJABQgfADgYABQgRgTgygZQAPgTAmgcQALgHAKgIQAMgHAOgKQANgCAMgCQA2gIAgABQAEAAAEAAQAFAAAEABQAGgKAIgMQAHAAAHAAQAFgJAGgKQAEgGADgFQAHgKAHgMQANgGALgGQAvgaAbgGQAFgCAEAAQAGgOAHgPQAGgNAHgNQAFgCAEgCQADgHAEgIQADgFADgGQADgGADgGQAHgOAIgOQAHgGAGgGQAHgOAIgPQAKgIAIgIgAIXgEQAAgDABgDQAKgHAIgFQAKgIAJgFQABgJADgMQAMgIALgGQA2gfADAoQgUALgNACQgKACgGgDQgJgFABgQAINgQQALgJAKgIQAFgNAHgOQAHgOAHgPAINgBQAFgCAFgBAJAgPQAMAAAFAHQgCAAgBAAQgKAAgEgHQgEgHABgNQAVgMAOgCAIogKQAOgFAKAAAJwgwQAKAFAAATQgaAPgPABQAGAIgDARQgDABgDABQgvATAJgwAKshlQg4AeAAgoQA1gdADAngAKViZQAvgZAEAiQgyAZgBgigAIDAGQABgCABgCQAEgIAEgKAHjAmQABgEACgDQAHgGAGgGQAJgHAHgGQAFgEAFgDAHbAqQAEgDAEgBAHsAiQAHgDAHgCQAEgLAFgMAHhA9QAFgNAGgOAG0B5QAGAAAEABQADgKAFgLQABgEACgEQAHgCAGABQAEgOAHgRAGaBMQAlgWAcgMAGeDKQgBgHACgKQAEgYARgoAHwA6QAmgDgSAyQgiAGAOg1gAG+B6QAbAGgaA5QgUgIATg3gAHWBcQAfACgVA0QgagBAQg1gAFxBzQAJgNAKgOQAMgGAKgGAEZDUQAHgKAHgKQAFgBAEAAQAGgJAHgJQAGgBAGAAQALgCAJAAQA6gDAIASAEADrQAEABAEABQAHgMAKgNADWDKQANgIAPgJQAlgHAegEQADgBADAAQACgBABgBQAIgLAJgLQAIgEAHgGQAJgLAKgNAB2D0QANgJAOgIQAJgCAIgCQANgIAPgJQANgCALgCAAnEsQADgDAEgDQATgQAegUQALgHAMgHAAdE1QAEgEAGgFAAYFqQA1gRgwgkABZFuQgtACgUgGAE3EBQgTgHANghQAaAKgUAegADtEHQAJgOAKgOAERD1QAJAMgRAXQgCgMAKgXgACPD8QBQgJAOAUADOFCQinAOBohUAqijJQgKgJgJgIQi0iVBODMQAFAMAGAPQAIAGAJAHQAIAGAGAGQAFAMAGAOQADADAEADQANAKAMAJQADAMAFANQAEALAFALQAEALAFAKQAFANAGAOQAIAHAIAHQAIAHAJAGQAFANAGAOQAFANAGAOQAHAFAGAFQAsAkAhAWQAKAGAJAGQAFACAEACQABABAAABQAIAKAKAMQAKAEAJAEQAFAHAHAHQAIACAFgBQAGAIAHAIQAIALAKAMQAHACAIAEQBRAkArAJQANAGAPAHQAPABANgBQALgBAKABQACABACABQALAFALAGQALAAALAAQAKAAAJgBQAlgCAbgDQAQgUAogcQgRgSgygZQgLgFgMgGQgNgGgPgHQgNAAgMAAQgOgGgQgHQg0AAgiAEQgEABgEAAQgHgIgHgIQgFAAgEABQgIAAgHABQgLgRgRgVQgIgKgJgKQgJgLgLgMQgMgGgLgFQgpgSgdgIQgEgBgEgBQgFgLgGgMQgFgCgFgCQgHgCgHgCQgDgKgFgMQgLgEgJgDQgDgKgEgMQgEgLgFgLQgEgDgEgCQgEgNgGgOQgIgGgGgFQgKgIgJgHQgMgIgLgHQgBgLgEgOQgDgMgFgOQgNgKgLgIQhohMASBbQARAMAOAIQgBALADAPQAOAJAMAHQgBAKADAOQANAJAMAHQgBAKAEAOQALAGAJAGQAAAJADAMQABAIADAKQADANAFAPQATAOAQALQAVAOAQAJQAJAQAPAWQANAHALAEQALARAPAVQABABABABQAHAJAJAMQAKAEAKAFQAGACAGADQABgBACgBQABACABACQAIAKAJAMQAqARAfAKQAhALATABQAVANAeARQACgBABAAQAGgCADgEQANAIARAKQACAAACAAQAAgHgDgJQAKAHAMAHQAMAIANAHQAMAHAOAGQAMAHAOAGQAIAAAJAAQACABACABQgBgBAAgBQAogBAegCQBFgFAUgPApth+QgGgMgGgNQgHgFgGgGQgHgGgHgGQgKgJgKgHQiYh4A3CgQAEANAGAOQAFANAGAOQAGAGAIAFQAEAMAGAOQAFALAFAMQADACADADQAMAJALAJQAJAHAIAGQAKAIAKAHQAJAHAJAGQAPAKAMAHQgBAHADAMQAFAOANAVQAKARAQAWQATANAQAJQANASARAWQALAEAJAFQAGACAGACQAFACAEACQAIALAJANQADADACADQAEAAADgBQACABADABQAfAMAYAHQAKANAZARQAaASAqAWQAWAEANgCQAKAFALAGQAKAFAKAFQADACAEACQALAAAJgBQANAHAOAGQALAAAKAAQAJAAAJAAQAOgBANAAQADgIAJgKQAQgDAMgDQAJgOAXgUQgBgEgDgEQAGgFAJgGQgXgPgmgRQgMAAgJAAQgPABgMAAQgKgGgMgGQgNgGgOgHQhDABggAJQgGgGgGgHQgCgDgDgDQgGgIgIgHQgEAAgEAAQgJgKgJgKQgIgEgHgEQgLgFgIgDQgOgGgLgFQg5gWgYADQgGgMgGgNQgFgMgHgNQgFgLgGgMQgDgFgDgGQgGgFgFgEQgDgDgDgCQgDgDgEgDQgFgMgHgMQgHgOgIgOQgHgGgGgFQgKgJgJgIQgGgOgIgPQgCgBgBgCQgHgFgGgFQgFgNgHgOQgIgIgHgFQgFgLgGgNQgIgGgHgGQgFgLgGgNQgGgNgIgOAp7g2QgNgEgHAFQANAEAHgFQAJgFgBgSQhAgnAAAvQAVAMAPAEQgJAGAAASQAPAJAMAEQAbAKAIgLQgagLgJAMQgFAIABAPQBLAugGg2QgRgLgNgFQAEgHgBgMQgVgOgPgEgAqUh4Qg6gjgBAsQA9AigCgrgApghlQgGgMgHgNApHhAQgHgNgIgPQgFgFgFgEAo2ggQgCgCgDgCQgGgNgGgPAopgEQgGgNgHgPAlQCqQgKgMgMgLQgIgEgHgEQgKgMgNgMQgLgGgKgEQgigQgagKQgEgBgEgBQgEgJgFgJQgBgCgBgCQgFgKgFgLQgHgGgGgEQgHgHgHgGQgKgJgKgGAk9C+QgJgKgKgKAkYDsQgGgIgHgJQgLgOgNgPAkODqQgFABgFABAjgEVQgKgMgLgNQgFABgDACQgIgKgJgLAhhELQicAJBpBGQCmgNhzhCgAjcE0QAKAMAVAOQgHgVgcgkAkpDwQgmAMARAZQAlAAgQglgAo3BWQAkAMgCgiQgkgEACAagAolAkQg6gRgEAaQBBAlgDgug");
	this.shape.setTransform(-0.0022,0.0327);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Chain, new cjs.Rectangle(-89.1,-41.4,178.2,82.9), null);


(lib.Bread = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AO1hhQGWhjiYoFQkYmYl+hWQAAAAgBAAQgBgBAAABIAAAAQgCgBAAgBQhIgPhLgFQvyh5m2HqQIqmCI3AvQGjAiGsEIQEzFajMDzQhPBfieBPAO1hhIitgpAMHTmICuiTIAAy0AMHTmIAB1wAwitcQgYAbgUAaQj5E4C9DgQBQBfCeBPIAAVHIajAA");
	this.shape.setTransform(0.0279,0.0179);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0D1A0").s().p("AtRTOIAA1HQiehPhQhfQi9jgD5k4QAUgaAYgbQIqmCI3AvQGjAiGsEIQEzFajMDzQhPBfieBPIgBVwg");
	this.shape_1.setTransform(-7.4644,2.4449);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B78B43").s().p("AKriKICuApIiugpQCehPBQhfQDMjzk0laQmrkImigiQo4gvorGCQG3nqPyB5QBLAFBHAPIACACIABAAIAAAAIACAAQF9BWEZGYQCXIFmVBjIAAS0IivCTgAG/y3gAG+y3IgCgCIADACg");
	this.shape_2.setTransform(9.2853,0.0179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bread, new cjs.Rectangle(-125.4,-126.3,250.9,252.7), null);


(lib.monical = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.lens();
	this.instance.setTransform(-6.85,0,0.8042,0.8042);
	this.instance.alpha = 0.3203;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(2.6,1,1).p("AANAAQAAAFgEAEQgEAFgFAAQgFAAgEgFQgEgEAAgFQAAgFAEgEQAEgEAFAAQAFAAAEAEQAEAEAAAFg");
	this.shape.setTransform(38.45,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(1.6,1,1).p("AAIAAQAAAEgCABQgCADgEAAQgCAAgDgDQgCgBAAgEQAAgDACgCQADgCACAAQAEAAACACQACACAAADg");
	this.shape_1.setTransform(44.35,36.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(4,1,1).p("AF+AAQAACfhwBwQhwBvieAAQieAAhvhvQhwhwAAifQAAidBwhwQBvhwCeAAQCeAABwBwQBwBwAACdgAF+FJQAAANgJAJQgJAJgNAAQgNAAgJgJQgJgJAAgNQAAgNAJgJQAJgJANAAQANAAAJAJQAJAJAAANg");
	this.shape_2.setTransform(-6.85,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("ABWAkQgCgBAAgEQAAgDACgDQADgCADAAQAEAAACACQACADAAADQAAAEgCABQgCADgEAAQgDAAgDgDgAAYATQgFgEAAgGQAAgFAFgEQAEgDAFAAQAFAAAFADQADAEAAAFQAAAGgDAEQgFAEgFAAQgFAAgEgEgAhaAOQgJgJAAgMQAAgNAJgJQAJgJANAAQANAAAJAJQAJAJAAANQAAAMgJAJQgJAJgNAAQgNAAgJgJg");
	this.shape_3.setTransform(35.15,33.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.monical, new cjs.Rectangle(-47,-40.2,93.2,80.4), null);


(lib.Hair1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.jk();
	this.instance.setTransform(-19.65,31.6,0.968,0.968);

	this.instance_1 = new lib.jk2();
	this.instance_1.setTransform(231.35,5.35,0.968,0.968);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#926F36").ss(1,1,1).p("AALFlQDoi4h6jhQARCsh/DtgAALGiQlbnVFbluQh5FAB5IDg");
	this.shape.setTransform(49.579,-38.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#926F36").s().p("AALmhQh5FAB5IDQlbnVFblugAB5g0QB6DhjoC4QB/jtgRisg");
	this.shape_1.setTransform(49.579,-38.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hair1, new cjs.Rectangle(-118.3,-81.7,252.39999999999998,166.3), null);


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
(lib.MPHFinalAUlloa = function(mode,startPosition,loop,reversed) {
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
		this.Face1_btn1.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.Eyes1.x = 450;
			this.Eyes1.y = 290;
			this.monical.x = 508.75;
			this.monical.y = 287.5;
			this.tophat.x = 530.15;
			this.tophat.y = 160.9;
			this.mustache.x = 450.4;
			this.mustache.y = 328.15;
			this.tie2.x = 451.25;
			this.tie2.y = 383.65;
		}				
		this.Face2_btn2.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.Eyes2.x = 447.6;
			this.Eyes2.y = 299.55;
			this.Yankee.x = 464.7;
			this.Yankee.y = 187.45;
			this.eyebrow1.x = 462.25;
			this.eyebrow1.y = 264.65;
			this.chain.x = 446.6;
			this.chain.y = 373.3;
		}
		
		this.Face3_btn3.addEventListener("click", ClickFace3.bind(this));
		
		function ClickFace3() {
			this.tie1.x = 769.15;
			this.tie1.y = 554.9;
			this.Mustache2.x = 861.75;
			this.Mustache2.y = 570;
			this.chain.x = 861.9;
			this.chain.y = 493.55;
			this.tie2.x = 857.5;
			this.tie2.y = 478.8;
			this.mustache.x = 860.75;
			this.mustache.y = 442.85; 
			this.eyebrow1.x = 815;
			this.eyebrow1.y = 203.85;
			this.monical.x = 816.15;
			this.monical.y = 130.9;
			this.Hair.x = 114.7;
			this.Hair.y = 187.15;
			this.tophat.x = 124.7;
			this.tophat.y = 295.1;
			this.Yankee.x = 97.95;
			this.Yankee.y = 376.75;
			this.Eyes1.x = 87.9;
			this.Eyes1.y = 485.3;
			this.Eyes2.x = 80.1;
			this.Eyes2.y = 517.85;
		}
		
		this.Eyes1.on("pressmove", dragMe);
		this.Eyes2.on("pressmove", dragMe);
		this.Yankee.on("pressmove", dragMe);
		this.tophat.on("pressmove", dragMe);
		this.Hair.on("pressmove", dragMe);
		this.monical.on("pressmove", dragMe);
		this.eyebrow1.on("pressmove", dragMe);
		this.mustache.on("pressmove", dragMe);
		this.tie2.on("pressmove", dragMe);
		this.chain.on("pressmove", dragMe);
		this.Mustache2.on("pressmove", dragMe);
		this.tie1.on("pressmove", dragMe);
		
		
		
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.Mustache2 = new lib.Mustache2();
	this.Mustache2.name = "Mustache2";
	this.Mustache2.setTransform(861.75,570);

	this.tie2 = new lib.Tie2();
	this.tie2.name = "tie2";
	this.tie2.setTransform(857.5,478.8);

	this.Eyes2 = new lib.Eyes2();
	this.Eyes2.name = "Eyes2";
	this.Eyes2.setTransform(80.1,517.85);

	this.Yankee = new lib.Yankee();
	this.Yankee.name = "Yankee";
	this.Yankee.setTransform(97.95,376.75,1,1,14.9992);

	this.tie1 = new lib.Tie1();
	this.tie1.name = "tie1";
	this.tie1.setTransform(769.15,554.9);

	this.Face3_btn3 = new lib.arcadebuttonyellow();
	this.Face3_btn3.name = "Face3_btn3";
	this.Face3_btn3.setTransform(566.8,543.45);
	new cjs.ButtonHelper(this.Face3_btn3, 0, 1, 2, false, new lib.arcadebuttonyellow(), 3);

	this.Face2_btn2 = new lib.arcadebuttonred();
	this.Face2_btn2.name = "Face2_btn2";
	this.Face2_btn2.setTransform(417.6,543.45);
	new cjs.ButtonHelper(this.Face2_btn2, 0, 1, 2, false, new lib.arcadebuttonred(), 3);

	this.Face1_btn1 = new lib.arcadebuttonblue();
	this.Face1_btn1.name = "Face1_btn1";
	this.Face1_btn1.setTransform(265,543.45);
	new cjs.ButtonHelper(this.Face1_btn1, 0, 1, 2, false, new lib.arcadebuttonblue(), 3);

	this.tophat = new lib.tophat();
	this.tophat.name = "tophat";
	this.tophat.setTransform(124.7,295.1,1,1,0,14.9992,-165.0008);

	this.chain = new lib.Chain();
	this.chain.name = "chain";
	this.chain.setTransform(861.9,493.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpAwQgMgIgEgPIApgFQADAIAFADQAEADAHAAQAJAAAEgEQAEgCgBgEQABgEgFgDQgEgCgNgDQgVgDgJgDQgJgEgFgHQgGgHAAgKQAAgKAGgJQAHgHALgEQALgEARAAQATAAAJADQAKADAGAHQAGAFAEAMIgnADQgCgFgEgDQgFgDgFAAQgIAAgCACQgEADAAAEQAAAEAFACQADACANABQAVADAKAEQAKAFAGAGQAFAIAAAJQAAAJgFAJQgHAJgLAGQgNAFgVAAQgdAAgNgJg");
	this.shape.setTransform(110.75,443.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiAzQgMgGgIgOQgIgNAAgRQAAgaARgPQAQgQAdAAQAWAAAOAHQANAHAHAOQAHANAAAVIAAAEIhSAAQAAAKAFAGQAGAGAJABQAFgBAGgDQAEgBADgGIAqAFQgKAPgNAIQgNAHgZAAQgVAAgNgGgAgPgXQgDAEgBALIAnAAQgBgMgFgGQgFgFgJAAQgJAAgGAIg");
	this.shape_1.setTransform(97.5,443.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag2BKIgDgdQAJADALAAQAHAAAFgEQAEgDAEgJIguhrIAsAAIAVBIIAVhIIApAAIgrBzQgHAUgIAHQgKAKgWAAQgJgBgTgCg");
	this.shape_2.setTransform(84.075,445.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag+BLIAAiVIB7AAIAAAgIhNAAIAAAYIBHAAIAAAeIhHAAIAAAdIBPAAIAAAig");
	this.shape_3.setTransform(70.325,441.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZA2QgLgDgIgIQgIgHgFgJQgFgKAAgQQAAgRAGgKQAEgIAHgHQAHgGAJgEQAMgFARAAQAbAAAPAJQANAKAGASIgnAGQgDgHgEgDQgFgEgIAAQgJAAgHAHQgGAHAAAPQAAANAGAHQAHAHAIAAQAJAAAFgEQAGgEADgJIAnAEQgEANgHAJQgHAJgMAFQgLAFgSAAQgRAAgMgDg");
	this.shape_4.setTransform(871,409.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKBIQgHgEgEgHQgEgJAAgSIAAgmIgPAAIAAgeIAPAAIAAgUIApgWIAAAqIAYAAIAAAeIgYAAIAAAmQABAHABADQACADAFAAQAEAAAJgCIADAcQgQADgNAAQgPAAgHgEg");
	this.shape_5.setTransform(859.3,407.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag+BLIAAiVIB7AAIAAAgIhNAAIAAAYIBHAAIAAAeIhHAAIAAAdIBPAAIAAAig");
	this.shape_6.setTransform(847.375,407.525);

	this.Eyes1 = new lib.Eyes1();
	this.Eyes1.name = "Eyes1";
	this.Eyes1.setTransform(87.9,485.3);

	this.Hair = new lib.Hair1();
	this.Hair.name = "Hair";
	this.Hair.setTransform(114.7,187.15,1.0038,1.0038,-5.9571);

	this.eyebrow1 = new lib.Eyebrows_1();
	this.eyebrow1.name = "eyebrow1";
	this.eyebrow1.setTransform(797.2,203.85,3.2319,3.2319,0,0,0,-5.5,0);

	this.mustache = new lib.Mustache();
	this.mustache.name = "mustache";
	this.mustache.setTransform(860.75,442.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgpAwQgMgIgEgQIApgEQADAHAFAEQAFADAGAAQAIAAAFgEQADgCAAgEQAAgEgEgDQgDgCgOgDQgWgDgIgEQgJgCgFgIQgGgHAAgKQAAgKAGgJQAHgHALgEQAKgEASAAQATAAAJADQAKADAGAHQAGAFAFAMIgpADQgBgFgDgDQgFgDgGAAQgHAAgEACQgDADAAAEQAAAEAFACQADACANACQAVACAKAEQAKAEAGAHQAFAIAAAJQAAAJgFAKQgHAJgLAEQgNAGgVAAQgdAAgNgJg");
	this.shape_7.setTransform(96.6,160.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKBIQgIgEgDgHQgEgJAAgSIAAglIgPAAIAAgfIAPAAIAAgUIApgVIAAApIAYAAIAAAfIgYAAIAAAlQABAHABADQACADAFAAQAFAAAIgDIADAdQgQAEgNAAQgOgBgIgEg");
	this.shape_8.setTransform(85.65,158.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag0AwQgKgJAAgNQAAgMAIgJQAHgGATgFIAegGIAPgFQAAgIgEgDQgDgDgIAAQgJAAgFADQgEADgDAHIgngFQACgKAEgGQAEgGAIgEQAGgEAKgBQAKgCAMAAQASAAALADQALACAIAGQAFAEADAJQADAIAAAIIAAAvIABANIAFALIgoAAIgDgHIgBgHQgIAIgIAEQgKAEgPAAQgUAAgKgJgAAAAJQgNADgDADQgEADAAAEQAAAGAEACQADAEAHAAQAGAAAGgEQAGgDACgFQADgFAAgHIAAgHIgRAGg");
	this.shape_9.setTransform(74.025,160.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAaBLIAAg9IgyAAIAAA9IgvAAIAAiVIAvAAIAAA1IAyAAIAAg1IAuAAIAACVg");
	this.shape_10.setTransform(58.25,158.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgpAwQgMgIgEgPIAqgFQACAIAFADQAFADAGAAQAJAAAEgEQADgCABgEQgBgEgEgDQgDgCgOgDQgWgDgIgDQgIgEgHgHQgFgHAAgKQAAgLAGgIQAGgHALgEQAMgEARAAQATAAAKADQAJADAGAGQAGAHAFAKIgpAEQgBgFgDgCQgGgEgGAAQgGAAgEACQgDADAAAEQAAAEAEACQAFACAMABQAVADAKAEQAKAFAGAGQAFAIAAAJQAAAKgFAIQgHAJgLAGQgNAFgVAAQgdAAgNgJg");
	this.shape_11.setTransform(871.4,60.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgqA4IAAhsIAnAAIAAASQAFgMAGgEQAGgFAJAAQAJAAALAGIgNAeQgHgDgFAAQgIAAgEAHQgGAJAAAZIAAAlg");
	this.shape_12.setTransform(861.375,60.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiAzQgMgGgIgNQgIgOAAgSQAAgZARgPQAPgQAeAAQAWAAANAHQAOAIAHANQAHANAAAVIAAAEIhSAAQABALAEAFQAGAGAIABQAHAAAFgEQADgCAEgEIAqAEQgKAQgNAHQgNAHgZAAQgVAAgNgGgAgPgXQgDAEgBAKIAnAAQAAgMgGgFQgFgFgJAAQgJAAgGAIg");
	this.shape_13.setTransform(848.85,60.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSA2IgthsIArAAIAUBFIAWhFIAqAAIguBsg");
	this.shape_14.setTransform(835.425,60.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgpAsQgVgRAAgbQAAgYARgPQARgRAcAAQAhAAAQATQANAPAAAWQAAAZgQAQQgQAQgeAAQgZAAgQgNgAgNgUQgHAHAAANQAAAPAHAHQAFAHAIAAQAJAAAGgHQAGgHAAgPQAAgOgGgGQgGgHgJAAQgIAAgFAHg");
	this.shape_15.setTransform(821.95,60.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZA2QgLgEgIgGQgIgIgFgJQgFgLAAgQQAAgPAGgMQAEgIAHgGQAHgHAJgDQAMgFARAAQAbAAAPAKQANAJAGATIgnAFQgDgHgEgEQgFgDgIAAQgJAAgHAHQgGAIAAANQAAAOAGAHQAHAHAIAAQAJAAAFgEQAGgEADgJIAnAFQgEAMgHAJQgHAJgMAFQgLAFgSAAQgRAAgMgDg");
	this.shape_16.setTransform(808,60.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiAzQgMgGgIgNQgIgOAAgSQAAgZARgPQAQgQAdAAQAWAAAOAHQANAIAHANQAHANAAAVIAAAEIhSAAQAAALAFAFQAGAGAIABQAGAAAGgEQAEgCADgEIAqAEQgKAQgNAHQgNAHgZAAQgVAAgNgGgAgPgXQgDAEgBAKIAnAAQgBgMgFgFQgFgFgJAAQgJAAgGAIg");
	this.shape_17.setTransform(787,60.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag2BKIgDgdQAJADALAAQAHAAAFgEQAEgDAEgJIguhsIAsAAIAVBJIAVhJIApAAIgrB0QgHAUgIAHQgKAJgWABQgJgBgTgCg");
	this.shape_18.setTransform(773.575,63);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag+BLIAAiVIB7AAIAAAgIhNAAIAAAYIBHAAIAAAeIhHAAIAAAdIBPAAIAAAig");
	this.shape_19.setTransform(759.825,58.725);

	this.monical = new lib.monical();
	this.monical.name = "monical";
	this.monical.setTransform(815.55,130.9,1,1,0,0,0,-0.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.monical},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.mustache},{t:this.eyebrow1},{t:this.Hair},{t:this.Eyes1},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.chain},{t:this.tophat},{t:this.Face1_btn1},{t:this.Face2_btn2},{t:this.Face3_btn3},{t:this.tie1},{t:this.Yankee},{t:this.Eyes2},{t:this.tie2},{t:this.Mustache2}]}).wait(1));

	// Character
	this.instance = new lib.Bread();
	this.instance.setTransform(455.9,318.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXBLIAAiVIAvAAIAACVg");
	this.shape_20.setTransform(599.35,67.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgWBLIAAiVIAtAAIAACVg");
	this.shape_21.setTransform(591.2,67.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXBLIAAiVIAuAAIAACVg");
	this.shape_22.setTransform(583.05,67.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAQA4IAAg7QAAgKgEgFQgEgEgHAAQgGAAgFAGQgFAGAAANIAAA1IgqAAIAAhsIAnAAIAAASQAJgLAJgFQAIgFANAAQARAAAKALQAKAKAAAWIAABEg");
	this.shape_23.setTransform(565.025,69.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgqArQgTgQAAgbQgBgYASgPQAQgRAcAAQAgAAARATQAOAQAAAVQAAAZgRAQQgRAQgdAAQgaAAgQgOgAgOgUQgFAHgBANQABAPAFAHQAGAHAIAAQAJAAAGgHQAFgHAAgPQAAgNgFgHQgGgHgIAAQgJAAgGAHg");
	this.shape_24.setTransform(551,69.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKBJQgHgFgEgIQgEgIAAgSIAAgmIgPAAIAAgeIAPAAIAAgUIApgWIAAAqIAYAAIAAAeIgYAAIAAAmQABAHABACQACAEAFAAQAEAAAJgCIADAcQgQADgNAAQgPAAgHgDg");
	this.shape_25.setTransform(539.35,67.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgpAxQgMgJgEgPIApgEQADAGAFAEQAFADAGAAQAIAAAFgDQADgDAAgEQAAgEgEgDQgDgCgOgCQgWgEgIgDQgJgEgFgGQgGgIAAgKQAAgLAGgHQAHgIALgEQAKgEASAAQATAAAJADQAKADAGAGQAGAGAFALIgpAEQgBgFgDgCQgGgEgFAAQgHAAgEADQgDACAAAEQAAAEAFACQADACANABQAVADAKAEQAKAEAGAHQAFAIAAAJQAAAKgFAIQgHAKgLAEQgNAGgVAAQgdAAgNgIg");
	this.shape_26.setTransform(528.15,69.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgvAtQgKgKAAgVIAAhFIAqAAIAAA7QAAAKAEAFQAEAEAHAAQAGAAAFgGQAFgFAAgOIAAg1IAqAAIAABsIgnAAIAAgRQgJAKgJAFQgIAFgNAAQgRAAgKgLg");
	this.shape_27.setTransform(514.825,69.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgqA4IAAhsIAnAAIAAASQAFgMAGgEQAGgFAJAAQAJAAALAGIgNAeQgHgDgFAAQgIAAgEAHQgGAJAAAZIAAAlg");
	this.shape_28.setTransform(504.125,69.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgiBHQgPgHgMgSQgLgSAAgcQAAglAUgUQAUgUAjAAQAcAAARAMQAQALAHAYIgoAJQgCgHgDgDQgDgFgHgDQgFgDgHAAQgPAAgIANQgHAJABAUQgBAYAIAKQAHAJAOAAQAMAAAIgIQAHgHACgOIApAMQgEARgJAMQgIALgNAGQgOAGgUAAQgYAAgPgHg");
	this.shape_29.setTransform(490.5,67.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKBJQgHgFgEgIQgDgIAAgSIAAgmIgQAAIAAgeIAQAAIAAgUIApgWIAAAqIAWAAIAAAeIgWAAIAAAmQAAAHABACQACAEAFAAQAEAAAJgCIADAcQgPADgOAAQgOAAgIgDg");
	this.shape_30.setTransform(470.55,67.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZA2QgLgDgIgIQgJgHgEgKQgFgJAAgRQAAgPAGgMQAEgHAIgHQAGgGAJgEQALgFATAAQAaAAAPAJQANAKAGASIgoAGQgCgHgEgDQgFgEgIAAQgKAAgGAHQgHAHABAOQgBAOAHAHQAGAHAJAAQAIAAAGgEQAGgFADgIIAnAEQgDANgIAJQgHAJgMAFQgLAFgTAAQgQAAgMgDg");
	this.shape_31.setTransform(458.95,69.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUBLIAAhsIApAAIAABsgAgUguIAAgcIApAAIAAAcg");
	this.shape_32.setTransform(448.4,67.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgvA7QgMgRAAgXQAAgaANgPQANgPAUAAQAJAAAIAEQAHADAGAHIAAg1IArAAIAACWIgnAAIAAgQQgJAKgGAEQgJAEgKAAQgWAAgMgRgAgMAAQgGAGAAAOQAAANAGAHQAFAGAHAAQAHAAAGgHQAFgFAAgPQAAgMgFgHQgGgFgIAAQgGAAgFAFg");
	this.shape_33.setTransform(437.65,67.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag0AwQgKgJAAgOQAAgMAIgHQAHgIATgDIAegHIAPgFQAAgIgEgDQgDgDgIAAQgJAAgFADQgEADgDAHIgngEQACgLAEgFQAEgHAIgEQAGgDAKgCQAKgCAMAAQASAAALACQALACAIAHQAFAEADAJQADAIAAAIIAAAwIABALIAFALIgoAAIgDgGIgBgHQgIAIgIADQgKAFgPAAQgUAAgKgJgAAAAIQgNADgDAEQgEADAAAFQAAAEAEAEQADADAHAAQAGAAAGgDQAGgEACgFQADgEAAgJIAAgGIgRAFg");
	this.shape_34.setTransform(423.925,69.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgvA7QgMgRAAgXQAAgaANgPQANgPAUAAQAKAAAHAEQAIADAFAHIAAg1IArAAIAACWIgoAAIAAgQQgIAKgGAEQgJAEgKAAQgWAAgMgRgAgMAAQgGAGAAAOQAAANAGAHQAFAGAHAAQAIAAAFgHQAFgFAAgPQAAgMgFgHQgGgFgHAAQgIAAgEAFg");
	this.shape_35.setTransform(409.65,67.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag0AwQgKgJAAgOQAAgMAIgHQAHgIATgDIAegHIAPgFQAAgIgEgDQgDgDgIAAQgJAAgFADQgEADgDAHIgngEQACgLAEgFQAEgHAIgEQAGgDAKgCQAKgCAMAAQASAAALACQALACAIAHQAFAEADAJQADAIAAAIIAAAwIABALIAFALIgoAAIgDgGIgBgHQgIAIgIADQgKAFgPAAQgUAAgKgJgAAAAIQgNADgDAEQgEADAAAFQAAAEAEAEQADADAHAAQAGAAAGgDQAGgEACgFQADgEAAgJIAAgGIgRAFg");
	this.shape_36.setTransform(395.925,69.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghAzQgNgGgIgNQgIgOAAgSQAAgZAQgPQAQgQAdAAQAXAAANAHQAOAIAHAMQAHAOAAAVIAAAEIhTAAQACALAEAEQAGAIAIAAQAHAAAFgDQADgDAFgEIAoADQgJAQgNAIQgOAHgYAAQgVAAgMgGgAgOgXQgFAEgBAKIApAAQgBgMgGgFQgFgFgJAAQgJAAgFAIg");
	this.shape_37.setTransform(381.95,69.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgqA4IAAhsIAnAAIAAASQAFgMAGgEQAGgFAJAAQAJAAALAGIgNAeQgHgDgFAAQgIAAgEAHQgGAJAAAZIAAAlg");
	this.shape_38.setTransform(371.175,69.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhEBLIAAiVIBVAAQAWAAAMALQAMAKgBAQQABAOgJAJQgFAHgLADQAQAEAIAJQAHAJAAAOQABAMgGAKQgFAJgKAFQgFAEgNABIgUACgAgWArIAXAAQAMAAAFgEQAFgFAAgHQAAgGgFgEQgFgFgMAAIgXAAgAgWgPIAUAAQALAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgKAAIgVAAg");
	this.shape_39.setTransform(357.75,67.475);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVAVIAAgpIAsAAIAAApg");
	this.shape_40.setTransform(338.75,72.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgqA4IAAhsIAnAAIAAASQAFgMAGgEQAGgFAJAAQAJAAALAGIgNAeQgHgDgFAAQgIAAgEAHQgGAJAAAZIAAAlg");
	this.shape_41.setTransform(331.525,69.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAvBLIAAhxIgeBxIghAAIgdhxIAABxIgnAAIAAiVIA9AAIAXBaIAXhaIA9AAIAACVg");
	this.shape_42.setTransform(316.1,67.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgyA+QACgPAJgNQAJgOAYgRQAOgLAEgFQAEgGAAgFQAAgFgEgEQgEgFgGAAQgGAAgEAFQgEADgBALIgigDQACgOAFgIQAFgIAKgFQAKgEAQAAQASAAAKAEQAJAEAGAJQAGAIAAALQAAALgHAKQgGAJgRAMIgOAKIgHAHIA0AAIAAAcg");
	this.shape_43.setTransform(114.925,118.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgyA+QACgPAJgNQAJgOAYgRQAOgLAEgFQAEgGAAgFQAAgFgEgEQgEgFgGAAQgGAAgEAFQgEADgBALIgigDQACgOAFgIQAFgIAKgFQAKgEAQAAQASAAAKAEQAJAEAGAJQAGAIAAALQAAALgHAKQgGAJgRAMIgOAKIgHAHIA0AAIAAAcg");
	this.shape_44.setTransform(103.575,118.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYA6QgJgFgGgJQgFgHgCgMQgDgLAAgOQAAgiANgOQAMgOAZAAQAMAAAIADQAIADAFAFQAFAFADAFQADAFABAIQAEAOAAAOQAAAggMAQQgLAPgbAAQgOAAgKgFgAgMgfQgDAJAAAWQAAAXAEAIQAEAJAHAAQAFAAAEgDQADgEACgIQACgIAAgQQAAgYgEgIQgEgJgIAAQgIAAgEAJg");
	this.shape_45.setTransform(92.375,118.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgyA+QACgPAJgNQAJgOAYgRQAOgLAEgFQAEgGAAgFQAAgFgEgEQgEgFgGAAQgGAAgEAFQgEADgBALIgigDQACgOAFgIQAFgIAKgFQAKgEAQAAQASAAAKAEQAJAEAGAJQAGAIAAALQAAALgHAKQgGAJgRAMIgOAKIgHAHIA0AAIAAAcg");
	this.shape_46.setTransform(80.875,118.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrA8IgDgYQAHACAJABQAGgBADgCQAEgDADgHIglhXIAkAAIARA6IARg6IAhAAIgjBdQgGAQgGAGQgIAIgSAAIgWgCg");
	this.shape_47.setTransform(64.55,121.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgpAnQgJgIAAgKQAAgKAGgHQAGgFAQgDIAYgGIAMgEQAAgGgDgCQgDgDgGAAQgHAAgFADQgDABgCAHIgggEQACgJADgEQAEgFAGgEQAFgCAIgBQAIgCAKAAQAOAAAJACQAJACAGAEQAFAFACAHQADAGAAAGIAAAmIAAAKIAEAJIggAAIgCgFIgCgGQgGAGgHADQgIAEgMAAQgPAAgIgHgAAAAGQgKADgDADQgDADAAADQAAAEADACQADADAFAAQAFAAAFgDQAEgCADgEQACgEAAgHIAAgFIgOAEg");
	this.shape_48.setTransform(53.625,120.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAmA9IAAhcIgYBcIgbAAIgYhcIAABcIgeAAIAAh5IAxAAIASBJIAThJIAxAAIAAB5g");
	this.shape_49.setTransform(39.95,118.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgIA7QgGgEgDgGQgDgHAAgPIAAgeIgMAAIAAgYIAMAAIAAgRIAhgRIAAAiIATAAIAAAYIgTAAIAAAfIABAHQACADAEAAIALgCIACAXQgMADgLAAQgMAAgGgDg");
	this.shape_50.setTransform(113.175,92.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgiAtIAAhXIAgAAIAAAPQADgKAFgEQAFgDAHAAQAIAAAJAFIgLAXQgGgCgDAAQgHAAgEAGQgEAHAAAVIAAAdg");
	this.shape_51.setTransform(106.375,94.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAbA9IgGgUIgqAAIgGAUIgmAAIAuh5IAoAAIAtB5gAgNAOIAaAAIgNgqg");
	this.shape_52.setTransform(95.275,92.525);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgvA+IAAh5IAfAAIAAANQAGgIAGgDQAHgEAIAAQASAAAKAOQAJANAAAUQAAAVgKAMQgLALgQAAQgHAAgGgCQgGgDgGgFIAAAqgAgJgfQgFAFAAALQAAALAFAEQAEAFAGAAQAGAAADgFQAEgEABgLQgBgLgEgFQgEgFgFAAQgGAAgEAFg");
	this.shape_53.setTransform(83.2,95.775);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AApAtIAAgxQAAgGgCgDQgEgEgFAAQgGAAgDADQgEAFAAAJIAAAtIghAAIAAgvIgBgIQgBgEgCgCQgDgCgEAAQgFAAgEAEQgEAFAAAJIAAAtIgiAAIAAhXIAgAAIAAANQAHgIAHgEQAGgDAKAAQALAAAFADQAGAFAEAHQAIgJAHgDQAGgDAKAAQAOAAAIAIQAIAJAAASIAAA2g");
	this.shape_54.setTransform(68.825,94.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgiAjQgQgNAAgWQAAgTAOgNQAOgNAWAAQAaAAAOAPQALANAAARQAAAUgOANQgNANgYAAQgUAAgOgLgAgLgQQgFAFAAALQAAAMAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgMQAAgKgFgHQgFgFgHAAQgGAAgFAGg");
	this.shape_55.setTransform(54.625,94.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgbA6QgNgHgJgOQgJgPAAgWQAAgdAQgRQAQgQAcAAQAXAAAOAJQANAKAGATIghAHQgCgFgCgDQgDgEgFgCQgEgCgGgBQgMAAgGALQgGAHAAAQQAAAUAHAHQAGAIAKAAQALAAAFgGQAGgGACgMIAhAKQgDAOgHAJQgHAJgLAGQgLAEgQAAQgTAAgMgFg");
	this.shape_56.setTransform(42.475,92.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgpAmQgJgGAAgMQAAgKAGgGQAGgGAQgDIAYgFIAMgEQAAgGgDgDQgDgCgGAAQgHAAgFACQgDADgCAFIgggDQACgIADgGQAEgEAGgEQAFgCAIgBQAIgCAKAAQAOAAAJACQAJABAGAGQAFADACAIQADAGAAAGIAAAmIAAAKIAEAJIggAAIgCgFIgCgGQgGAGgHAEQgIADgMAAQgPAAgIgIgAAAAHQgKACgDADQgDADAAADQAAAEADADQADACAFAAQAFAAAFgCQAEgDADgEQACgEAAgGIAAgGIgOAFg");
	this.shape_57.setTransform(99.925,68.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgiAjQgQgNAAgWQAAgTAOgNQAOgNAWAAQAaAAAOAPQALAMAAASQAAAUgOANQgNANgYAAQgUAAgOgLgAgLgQQgFAFAAALQAAAMAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgMQAAgLgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_58.setTransform(88.575,68.25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgQA9IAAh5IAhAAIAAB5g");
	this.shape_59.setTransform(80.075,66.575);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgQA9IAAh5IAhAAIAAB5g");
	this.shape_60.setTransform(74.425,66.575);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgmAlQgHgJAAgRIAAg3IAhAAIAAAvQAAAJAEADQADADAFAAQAFAAAEgEQAEgEAAgLIAAgrIAiAAIAABXIggAAIAAgPQgHAJgHAFQgGADgLAAQgOAAgIgIg");
	this.shape_61.setTransform(65.9,68.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAbA9IgGgUIgqAAIgGAUIgmAAIAuh5IAoAAIAtB5gAgNAOIAaAAIgNgqg");
	this.shape_62.setTransform(53.675,66.575);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Ag3A9IAAh5IBFAAQASAAAJAJQAKAIAAANQAAALgHAIQgFAFgIADQANADAGAHQAGAIAAALQAAAKgEAHQgFAIgHAEQgFADgJABIgRACgAgRAjIASAAQAKAAAEgEQAEgDAAgGQAAgFgEgEQgEgDgKAAIgSAAgAgRgMIAQAAQAIAAADgDQAEgDAAgGQAAgFgEgDQgDgDgIAAIgQAAg");
	this.shape_63.setTransform(98.325,40.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgpAnQgJgIAAgKQAAgKAGgHQAGgFAQgDIAYgGIAMgEQAAgGgDgCQgDgDgGAAQgHAAgFADQgDABgCAHIgggEQACgJADgEQAEgFAGgEQAFgCAIgBQAIgCAKAAQAOAAAJACQAJACAGAEQAFAFACAHQADAGAAAHIAAAlIAAAKIAEAJIggAAIgCgFIgCgGQgGAGgHADQgIAEgMAAQgPAAgIgHgAAAAGQgKADgDADQgDADAAADQAAAEADACQADADAFAAQAFAAAFgDQAEgCADgEQACgEAAgHIAAgFIgOAEg");
	this.shape_64.setTransform(85.775,42.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgbApQgKgFgGgLQgHgKAAgPQAAgUAOgMQAMgNAYAAQARAAAMAGQAKAGAHAKQAFALAAARIAAADIhCAAQABAIACAFQAGAFAHAAQAEAAAFgDIAGgFIAhADQgIAOgLAFQgKAGgUAAQgQAAgLgFgAgMgTQgCAEgBAIIAgAAQgCgKgEgEQgEgEgHAAQgHAAgFAGg");
	this.shape_65.setTransform(74.45,42.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgiAtIAAhXIAgAAIAAAOQADgJAFgDQAFgEAHAAQAIAAAJAFIgLAYQgGgDgDAAQgHAAgEAGQgEAHAAAUIAAAeg");
	this.shape_66.setTransform(65.725,42.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ag3A9IAAh5IBFAAQASAAAJAJQAKAIAAANQAAALgHAIQgFAFgIADQANADAGAHQAGAIAAALQAAAKgEAHQgFAIgHAEQgFADgJABIgRACgAgRAjIASAAQAKAAAEgEQAEgDAAgGQAAgFgEgEQgEgDgKAAIgSAAgAgRgMIAQAAQAIAAADgDQAEgDAAgGQAAgFgEgDQgDgDgIAAIgQAAg");
	this.shape_67.setTransform(54.875,40.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#00FF00").ss(1,1,1).p("AjuA4IA3jlIAehoIASgrQCCiKBmCPQA/ClAsC6IA3CcAjuA4IhPAAQjdABhTATQg2AHgOAjIAABkQgHBJA1AYIAgANIBrAVIENAkIDgADQE1AFClglIAJgBQB0gLBKglQAZgVAAgNQAMhVgWg/AjzBgQiDgJh3APQh3APgeASAkAC5IANhZAjuA4IgFAoADaA+QCEgHDbAWQBxATgFAdQgBAIgJAIQgyAplmAKAj7C6IH+AG");
	this.shape_68.setTransform(479.9899,340.5233);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6699CC").s().p("EguHAJAIAAx/IP9AAIAAR/gAkJAbIAAlKMAyRAAAIAAFKg");
	this.shape_69.setTransform(322.175,83.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance}]}).wait(1));

	// Frame
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_70.setTransform(480,320);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_71.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(444.3,329,506.7,302);
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