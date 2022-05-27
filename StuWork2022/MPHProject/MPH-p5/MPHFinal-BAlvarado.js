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


(lib.tie = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AihEUICcuUIAqgEIB+OlQhnFkhQAAQhSAAg7lxg");
	this.shape.setTransform(-0.6,15.5826);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("AiPh1QgHAAgGgGQgGgFABgIIAAAAQgBgIAGgFQAGgGAHAAIEfAAQAHAAAGAGQAFAFABAIIAAAAQgBAIgFAFQgGAGgHAAQhIERhIAAQhHAAhIkRg");
	this.shape_1.setTransform(0.65,-64.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tie, new cjs.Rectangle(-16.8,-80.1,33.7,160.2), null);


(lib.shirt3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AB0rGQABB4AICCQABAbACAbQAiHfCcFJQBUCyB5CGAl8pFIAAAAQgkgMgjh1QAAgBgBgCAkkrJQAAACgBABQgrCRgsgQIA1DFIBqJPQgEAHgDAHAoCDeQgEgIgEgHIB6pPIAUjF");
	this.shape.setTransform(20.35,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACJLJQhYiag7ifQibmaAcnEIAGhMQAJhZANhUIAEAAQgNBUgIBZIgGBMQgdHECcGaQA7CfBYCag");
	this.shape_1.setTransform(-58.3957,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiVGcIAIgoIBypbIAUjGIA0DGIBjJbIAGAoQhLCYhLAAQhKAAhLiYgAgHmuIAAAAQgkgNgjh0IgBgEICfAAIgBAEQgnCCgoAAIgHgBg");
	this.shape_2.setTransform(-16.9,-15.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AmzLJQhYiag8ifQicmaAdnEIAGhMQAIhZANhUIG6AAQAjB0AjANIABAAQArAPAsiQIGHAAQABB3AICCIAEA2QAhHfCcFJQBVCzB4CGgAi+mAIhzJcIgHAoQCWEvCWkvIgHgpIhjpbIg1jGgAk4DOIAHAOIgHgOIB6pPIATjFIgTDFIh6JPgAgTDbIAHgNIhqpPIg0jFIA0DFIBqJPIgHANg");
	this.shape_3.setTransform(-0.5957,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt3, new cjs.Rectangle(-72.6,-72.4,146.2,144.9), null);


(lib.shirt2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Am1LJQhYiag8ifQicmaAdnEIAGhMQAIhZANhVIPkAAQABB4AICCIADA2QAiHfCcFJQBUCzB5CGg");
	this.shape.setTransform(0.0293,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt2, new cjs.Rectangle(-71.7,-71.2,143.5,142.5), null);


(lib.shirt1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FF00").s().p("Am1LJQhZicg7idQicmcAdnCIAGhMQAHhQAOheQHzRuHxxuQABB4AICCIADA2QAiHgCcFIQBVCzB4CGg");
	this.shape.setTransform(0.0293,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt1, new cjs.Rectangle(-71.7,-71.2,143.5,142.5), null);


(lib.RESET = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFF00").s().p("AgVBHIAAhrIgtAAIAAgjICFAAIAAAjIgtAAIAABrg");
	this.shape.setTransform(90.325,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ag8BHIAAiOIB2AAIAAAfIhJAAIAAAWIBDAAIAAAdIhDAAIAAAcIBMAAIAAAgg");
	this.shape_1.setTransform(76.2,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgwA8QgOgOgCgWIAqgCQABAKAEAFQAIAJALAAQAJAAAGgEQAFgFAAgGQAAgGgFgEQgFgFgQgDQgegHgMgJQgMgMAAgQQgBgLAHgKQAGgKANgFQANgGAVAAQAbAAAPAKQAPAKACAXIgqACQgBgJgFgFQgGgEgIAAQgIAAgEADQgEADAAAFQAAADAEADQACADAMACQAcAGANAHQANAHAFAIQAGAJAAAMQAAANgIANQgHALgOAGQgOAGgVAAQgjAAgOgOg");
	this.shape_2.setTransform(61.45,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Ag8BHIAAiOIB2AAIAAAfIhJAAIAAAWIBEAAIAAAdIhEAAIAAAcIBMAAIAAAgg");
	this.shape_3.setTransform(47.3,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AAUBHIgWgrQgFgJgDgCQgFgDgGAAIgEAAIAAA5IgtAAIAAiOIBJAAQAVABALADQAKADAIAKQAGAJAAAOQAAAMgFAJQgFAJgJADQgGAEgJACQAHADAEADIAHAHIAGAJIAWApgAgZgMIATAAIAKgDQAFAAADgEQADgEAAgEQAAgHgFgEQgFgEgLAAIgTAAg");
	this.shape_4.setTransform(32.8,22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663333").s().p("AplDJIAAmRITLAAIAAGRg");
	this.shape_5.setTransform(61.375,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RESET, new cjs.Rectangle(0,0,122.8,40.2), null);


(lib.mouth4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#252525").s().p("AEcCYQAAgnidh2Qibh4inBxQinBvB4iQQB4iRBXAgQBWAgAvAdIB9BMQBOAugJBTQgGA5gCAAQAAAAAAgNg");
	this.shape.setTransform(-2.0184,0.0208);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth4, new cjs.Rectangle(-31.3,-16.5,58.6,33), null);


(lib.mouth3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#990000").s().p("AkLgsQEfh7D4B7QiCCXiGAAQiFAAiKiXg");
	this.shape.setTransform(0.925,14.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkDCEQhbhjhdikIN3AAQhTCkhVBjQj4h6kfB6g");
	this.shape_1.setTransform(0.1,-3.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Am6ApIgNgWQgFAAgDgGQgEgGAAgHIAAgUQAAgIAEgGQADgGAFAAIOPAAQAEAAAEAGQAEAGAAAIIAAAUQAAAHgEAGQgEAGgEAAIgLAWg");
	this.shape_2.setTransform(0.025,-20.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth3, new cjs.Rectangle(-46.7,-24.8,93.5,49.7), null);


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
	this.shape.graphics.f("#000000").s().p("ACpCiQhThXhTABQhSAAhaBZQhZBZAVhrQAVhqBJiAQBJiBBRALQBSALBECKQBECJAMBUQAGAqgSAAQgRAAgrgtg");
	this.shape.setTransform(0.0258,0.0286);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth2, new cjs.Rectangle(-24.2,-20.6,48.5,41.3), null);


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
	this.shape.graphics.f("#252525").s().p("Ai5BSQhliaADg9QADg8A2BmQA3BlByBKQBxBJBvgLQBugMAygZQAzgZhhBMQhgBMiHAAQiHAAhkiagAlDgCQgYgqAEhAQAEg/AUggQATggAjAAQAiAAAZAoQAYAogzgPQgygQgOA4QgOA3AGA5QADAggHAAQgEAAgKgQg");
	this.shape.setTransform(-0.0117,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth1, new cjs.Rectangle(-34.4,-23.6,68.9,47.3), null);


(lib.legs2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ADDH/QgLgJAAgNQG9kphUlfIBZAAQBPFZnBEvQAAANgMAJQgMAKgQAAQgRAAgMgKgAkTn5QAAgPAUAAIAoAAQAUAAAAAPQqFJFKFGnQAAAOiMAHQqInULEotg");
	this.shape.setTransform(0.0384,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legs2, new cjs.Rectangle(-64.5,-52,129.1,104.1), null);


(lib.legs1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ACcKvQgkgOgKgSIgGAAIAA1SIBwAAIAAUAQAegFAlAAQBJAAA1AUQA0AVAAAdQAAAdg0AUQg1AVhJAAQhLAAg0gVgAmYKvQgjgOgLgSIgGAAIAA1SIBwAAIAAUAQAegFAkAAQBLAAAzAUQA1AVAAAdQAAAdg1AUQgzAVhLAAQhKAAg0gVg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legs1, new cjs.Rectangle(-46.1,-70.7,92.2,141.5), null);


(lib.hat2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AskBLQgfAAgWgWQgWgWAAgfQAAgeAWgWQAWgWAfAAIHvAAIJrAAIHvAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAg");
	this.shape.setTransform(0,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ak1DqIAAnTIJrAAIAAHTg");
	this.shape_1.setTransform(0,-7.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat2, new cjs.Rectangle(-88,-30.8,176,61.7), null);


(lib.hat1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AhWB5IgBgRQAAh9CchZIATgKIAADxg");
	this.shape.setTransform(-8.85,1.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC00CC").s().p("AA8B3IiPAAIAAjtIAKAGQCdBZAAB8IAAASg");
	this.shape_1.setTransform(81.35,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99FF33").s().p("AhACeIAAk7QBEAGA9ARIAAEkg");
	this.shape_2.setTransform(52.3,-2.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000CC").s().p("AhACeIAAkmQA9gQBEgFIAAE7g");
	this.shape_3.setTransform(20.725,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AtqC+QgIAAgGgGQgGgGAAgIIAAgTQAAgIAGgGQAGgGAIAAIK9AAICuAAIAAjxQBCgiBNgTIAAEmICDAAIAAk8QAqgEAuAAQAyAAAvAFIAAE7ICCAAIAAkkQBNAUBBAkIAADsICQAAQAHAAAGAGQAGAGAAAIIAAATQAAAIgGAGQgGAGgIAAg");
	this.shape_4.setTransform(-0.2,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat1, new cjs.Rectangle(-89.7,-18.9,179.5,37.9), null);


(lib.FACE2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFF00").s().p("Ag7BJQACgSALgPQAKgQAdgVQAQgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgGAAgGAFQgFAFgBAMIgogDQACgRAHgJQAGgKALgFQAMgFATAAQAVAAALAFQAMAFAHAKQAGAKAAAMQAAANgHAMQgIALgUAOIgQAMIgJAIIA9AAIAAAhg");
	this.shape.setTransform(93.25,24.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ag8BIIAAiOIB2AAIAAAeIhJAAIAAAXIBDAAIAAAcIhDAAIAAAcIBMAAIAAAhg");
	this.shape_1.setTransform(79.8,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AggBDQgPgGgLgSQgLgRAAgaQABgjASgTQAUgTAhAAQAbAAAQALQAPALAHAWIgnAJQgCgHgCgDQgDgEgGgEQgGgCgGAAQgOAAgIAMQgGAJAAATQAAAXAHAJQAIAIALAAQANABAGgIQAHgGADgOIAnALQgEARgJALQgIALgMAFQgNAGgTAAQgXAAgOgHg");
	this.shape_2.setTransform(64.65,24.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAgBIIgIgYIgxAAIgHAYIgtAAIA2iOIAvAAIA2COgAgPARIAeAAIgPgyg");
	this.shape_3.setTransform(49.375,24.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("Ag2BIIAAiOIBsAAIAAAeIg/AAIAAAZIA2AAIAAAcIg2AAIAAA7g");
	this.shape_4.setTransform(37.05,24.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663333").s().p("AplDJIAAmRITLAAIAAGRg");
	this.shape_5.setTransform(61.375,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FACE2, new cjs.Rectangle(0,0,122.8,40.2), null);


(lib.FACE = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFF00").s().p("AABBJIAAhfQgJAIgJAEIgXAJIAAggQAUgHAMgJQAJgJAHgOIAhAAIAACRg");
	this.shape.setTransform(91.9,22.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ag7BHIAAiOIB1AAIAAAfIhJAAIAAAWIBDAAIAAAdIhDAAIAAAcIBLAAIAAAgg");
	this.shape_1.setTransform(79.2,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AggBDQgPgGgLgSQgLgRAAgaQAAgjAUgTQASgTAiAAQAbAAAPALQAQALAIAXIgoAIQgBgGgDgDQgDgGgGgCQgFgDgHAAQgOAAgIAMQgGAJAAATQAAAXAHAJQAHAJAMAAQANgBAHgGQAGgIADgNIAnAMQgEAQgIALQgJALgNAGQgMAFgTAAQgXAAgOgHg");
	this.shape_2.setTransform(64.05,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAgBHIgIgXIgxAAIgHAXIgtAAIA2iOIAvAAIA2COgAgPARIAeAAIgPgzg");
	this.shape_3.setTransform(48.775,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("Ag2BHIAAiOIBtAAIAAAfIhAAAIAAAZIA2AAIAAAcIg2AAIAAA6g");
	this.shape_4.setTransform(36.45,22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663333").s().p("AplDJIAAmRITLAAIAAGRg");
	this.shape_5.setTransform(61.375,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FACE, new cjs.Rectangle(0,0,122.8,40.2), null);


(lib.eyes5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ADnBOIAAgCQACgHALg4QAOhGAZgIQAZgJARAmQAPAlAAA2IAAAIIhtAQgAlTAcQAAg1APgmQARgmAfA6QAfA5AQAsIACAEQgEgEgBALIhoAHQgDgWAAgag");
	this.shape.setTransform(0.9,16.4229);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjZBqIgGAFQABgMAEAEIgCgEQgQgrgfg5Qgfg6gRAmQgPAlAAA2QAAAaADAWIAAAAQgjgSgdgtQgng9gGhVIAAgeIAAgFIAJAAIAAAEIFLAAIgfABIgBAeQgFBVgnA9QgVAhgXASIAFALIADAKIgJgVgACtA3Qgng9gFhVIgBgeIAAgBIE1AAIAAABIgBAeQgFBVgnA9QgUAfgXATIAAgJQAAg2gPgmQgRglgZAJQgZAJgOBGQgLA4gCAGIAAADQgmgRgdgwg");
	this.shape_1.setTransform(0,12.264);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("ACAB7IAAgGIAAgDQAChfArhEQAuhJBAAAQA/AAAuBJQArBEACBfIAAADIAAAGgAmrB7IgJAAIAAgGIAAgDQABgpAIglQAMgtAYgoQAthJBAAAQBAAAAuBJQAqBEADBfIAAADIAAAGg");
	this.shape_2.setTransform(0,-12.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AmwABIAAgCIEsAAQAAABB7ABIhcABgAB7ABIAAgCIE1AAIAAACg");
	this.shape_3.setTransform(0.5,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes5, new cjs.Rectangle(-43.7,-24.9,87.5,49.9), null);


(lib.eyes4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AEiBpIgBAAIgCAAQgXgBgQgdQgSgfAAgsQAAgrASgeQARgfAZAAQAZAAARAfQASAeAAArQAAAsgSAfQgRAdgXABgAkjBpQgYgBgQgdQgSgfAAgsQAAgrASgeQARgfAZAAQAZAAARAfQASAeAAArQAAAsgSAfQgQAdgYABg");
	this.shape.setTransform(0,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFMCvQASgfAAgsQAAgsgSgeQgRgegZAAQgZAAgSAeQgRAeAAAsQAAAsARAfQARAdAXABQgvgCgjg6Qgjg8AAhVQAAhUAjg8QAkg8AxAAQAyAAAjA8QAjA8AABUQAABVgjA8QgjA7gwABQAXgBARgdgAj3CvQASgfAAgsQAAgsgSgeQgRgegZAAQgZAAgSAeQgRAeAAAsQAAAsARAfQARAdAYABQgxgCgig6Qgjg8AAhVQAAhUAjg8QAjg8AyAAQAxAAAjA8QAkA8AABUQAABVgkA8QgiA7gwABQAXgBARgdg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes4, new cjs.Rectangle(-41,-20.5,82.1,41), null);


(lib.eyes3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AA0BKQgzhRgBh0QgBBxgyBPQgzBUhJAAQhIAAgzhUQg0hSAAh3IABgZIBZAAQAAAQAFAPQAGAWARASQAZAZAkAAQAjAAAZgZQAZgZAAgkIgBgKIBXAAIAAAPIABgPIBZAAQAAAfATAXQAFAJAIAIQAZAZAjAAQAkAAAZgZQAZgZAAgkIAAgKIBTAAIAAAeQAAB3g0BSQgzBUhJAAQhIAAgzhUg");
	this.shape.setTransform(3.45,22.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACdD4QgJgIgFgJQgMgTAAgYIABgKICqAAIAAAKQAAAjgZAZQgZAZgjAAQgkAAgYgZgAjGD4QgRgRgFgXQgCgKAAgKIAAgKICqAAIABAKQAAAjgZAZQgaAZgjAAQgkAAgZgZgAE6AeQhegegjgNQgigMArg8QArg7AoAbQAnAcAjAiQAjAjgBAwQAAAXgIAVQgGgXg5gTgAmAhBQAWgGATg5QAfhfANgiQAMgiA8ArQA7ArgbAoQgbAngjAjQgjAigwAAQgYAAgUgIg");
	this.shape_1.setTransform(0,-11.0056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes3, new cjs.Rectangle(-38.5,-38.3,77.1,76.6), null);


(lib.eyes2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#252525").s().p("Ag2B3QgigWiCAQQiCAPgRgaQgQgaB4gGQB5gGg0hOQgzhPgGgFQAHACBBAdQBAAdAvBZQAmBIgQAAQgDAAgHgEgAB7BdQgqgaA4g8QA3g7AzguQA0gtAaAqQAbAqhtBFQhtBGCHgRQCHgRgqAjQgqAjhLABIgGAAQhHAAgpgYg");
	this.shape.setTransform(0.0254,-0.0008);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes2, new cjs.Rectangle(-36.7,-12.2,73.5,24.5), null);


(lib.eyes1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AFdBAQgig2g7gLQg6gMg0BBQg1BBAAg8QAAg7ArgrQAqgqA8AAQA8AAAqAqQArArAAA7QAAAfgJAAQgJAAgQgYgAh7A4QgggzhOgSQhOgTgjBFQgkBGAAg8QAAg7ArgjQAqgjBGAIQBGAIAhAbQAhAbgBA7QAAAhgJAAQgIAAgOgYg");
	this.shape.setTransform(0,-0.0071);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes1, new cjs.Rectangle(-38.3,-8.8,76.6,17.700000000000003), null);


(lib.bow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AFbDsQgHgDAAgDQjNhThJhNIgLAOQgcAbgmABQgUgBgRgHQhKBFjVA5QAAAEgHACQgHACgLAAQgKAAgIgCQgHgCAAgEIAAnLQAAgDAHgDQAIgCAKAAQALAAAHACQAHADAAADQDJBYBNBOQAUgNAaAAQAcAAAXAQQA1hYD7hRQAAgEAHgCQAHgCALAAQAKAAAIACQAHACAAAEIAAHLQAAADgHADQgIACgKAAQgLAAgHgCg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bow, new cjs.Rectangle(-38.9,-23.7,77.9,47.5), null);


(lib.body = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFF33").s().p("AhMCBIAKgBIgDACIgHgBgAhEB/IADAAIgBABIgCgBgABLh9IgEgEIAFAFIABABg");
	this.shape.setTransform(125.9,190.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("APpfpQiLgNi8ggIiEgYQxxjalSo3IgWgmQhYiZg8ifQicmcAdnCIAGhNQAIhZANhUQBWo/ESmGQEvmvJvlUQAPAGASABIAFAAIA9A0QCABrAsAdIAQAKIACABIgKAKIjPEHIiUDZIgHALQgVAfgSAiIhcDoIhPJuQgBA2AAA4QABB4AICCIAEA0QAhHhCcFJQBUCyB4CGQBYBhBrBLQBOA1BKAxQGkETESBdIgCAJIgBAJIgqBXIiVBpIgjAYIABABIgBAAQATANAVAFIgugDgAFw9EIAZASIgNANQgCgKgKgVg");
	this.shape_1.setTransform(9.7793,0.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AGBf1IgLgCQgVgFgSgNIABAAIAigZICVhqIAqhXIABgIIABgIIAdAXIASAAIAACGQhiBagKADQgVAFg5gEQg4gEAzAFIABAAIACABIABAAIgBAAIgLABIgLABIgPgBgAks8WIgCgBIgQgKQgrgdiBhsIg8gzIgGAAQgSgBgOgGIgLgGIgKgHQAXgDAbAAQAkgBAqADQBKAEBFBzQAXAmALAXQALAWABAKQACAIgGAAIgEAAg");
	this.shape_2.setTransform(77.025,-0.0125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(-113.8,-203.8,251.8,407.6), null);


(lib.arm2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ARyIYQlcgJkQiUQkRiUHJgiQHIgiD8ANQD8AMlSjvQlTjwDCgnQDBgoEKGFQEKGGjRBEQi4A8klAAIhQgBgA1ZG+QlLg/hHhXQhHhXELnHQEKnIBHEEQBGEEk9DBQk9DBJPgLQJOgLAABgQAABgjRBDQhtAkiNAAQiCAAifgfg");
	this.shape.setTransform(0.0305,0.0073);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm2, new cjs.Rectangle(-178.6,-53.7,357.29999999999995,107.4), null);


(lib.arm1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#252525").s().p("AscLGQjVkGA0pWQA0pWAsAAQAsAAAGD7QAGD7gMIpQgLIqOJxyQohQJjwAAQgzAAglgugAJ7jmQDBjkhBhqQhTg7AHAAQgrgRkCguQkCguAWgQQAVgRE0AaQEzAZCYBYQCZBYqCLwQh/hLE5lxg");
	this.shape.setTransform(0.0034,0.0273);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm1, new cjs.Rectangle(-96.7,-75.5,193.5,151.1), null);


// stage content:
(lib.MPHFinalBAlvarado = function(mode,startPosition,loop,reversed) {
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
		this.FACE.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.legs2.x = 469;
			this.legs2.y = 515;
			this.shirt1.x = 425;
			this.shirt1.y = 366;
			this.arm2.x = 416;
			this.arm2.y = 290;
			this.mouth4.x = 405;
			this.mouth4.y = 291;
			this.eyes3.x = 414;
			this.eyes3.y = 227;
			this.hat1.x = 455;
			this.hat1.y = 124;
		}
		this.FACE2.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.legs1.x = 480;
			this.legs1.y = 529;
			this.shirt3.x = 426;
			this.shirt3.y = 360;
			this.arm1.x = 436;
			this.arm1.y = 364;
			this.mouth1.x = 414;
			this.mouth1.y = 252;
			this.eyes1.x = 427;
			this.eyes1.y = 208;
			this.hat2.x = 496;
			this.hat2.y = 111;
		} 
		this.RESET.addEventListener("click", ClickRESET.bind(this));
		
		function ClickRESET() {
		    this.shirt1.x = 844;
			this.shirt1.y = 86;	
			this.shirt2.x = 867;
			this.shirt2.y = 86;
		    this.shirt3.x = 888;
			this.shirt3.y = 86;	
			this.bow.x = 912;
			this.bow.y = 193;
		    this.tie.x = 911;
			this.tie.y = 296;	
			this.hat2.x = 806;
			this.hat2.y = 210;
		    this.hat1.x = 803;
			this.hat1.y = 270;	
			this.mouth1.x = 830;
			this.mouth1.y = 333;
		    this.mouth2.x = 828;
			this.mouth2.y = 381;	
			this.mouth3.x = 826;
			this.mouth3.y = 434;
			this.mouth4.x = 830;
			this.mouth4.y = 483;	
			this.eyes1.x = 826;
			this.eyes1.y = 512;
			this.eyes2.x = 824;
			this.eyes2.y = 543;	
			this.eyes3.x = 914;
			this.eyes3.y = 517;
			this.eyes4.x = 913;
			this.eyes4.y = 453;	
			this.eyes5.x = 911;
			this.eyes5.y = 400;
			this.legs1.x = 63;
			this.legs1.y = 498;	
			this.legs2.x = 166;
			this.legs2.y = 515;
		    this.arm1.x = 98;
			this.arm1.y = 300;	
			this.arm2.x = 180;
			this.arm2.y = 115;
		}
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
		this.shirt1.on("pressmove", dragMe);
		this.shirt2.on("pressmove", dragMe);
		this.shirt3.on("pressmove", dragMe);
		this.hat1.on("pressmove", dragMe);
		this.hat2.on("pressmove", dragMe);
		this.bow.on("pressmove", dragMe);
		this.tie.on("pressmove", dragMe);
		this.mouth1.on("pressmove", dragMe);
		this.mouth2.on("pressmove", dragMe);
		this.mouth3.on("pressmove", dragMe);
		this.mouth4.on("pressmove", dragMe);
		this.eyes1.on("pressmove", dragMe);
		this.eyes2.on("pressmove", dragMe);
		this.eyes3.on("pressmove", dragMe);
		this.eyes4.on("pressmove", dragMe);
		this.eyes5.on("pressmove", dragMe);
		this.legs1.on("pressmove", dragMe);
		this.legs2.on("pressmove", dragMe);
		this.arm1.on("pressmove", dragMe);
		this.arm2.on("pressmove", dragMe);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.FACE2 = new lib.FACE2();
	this.FACE2.name = "FACE2";
	this.FACE2.setTransform(694.45,46.75,1,1,0,0,0,61.4,20.1);

	this.FACE = new lib.FACE();
	this.FACE.name = "FACE";
	this.FACE.setTransform(557.25,46.75,1,1,0,0,0,61.4,20.1);

	this.RESET = new lib.RESET();
	this.RESET.name = "RESET";
	this.RESET.setTransform(418.5,46.75,1,1,0,0,0,61.4,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.RESET},{t:this.FACE},{t:this.FACE2}]}).wait(1));

	// Body Parts
	this.arm2 = new lib.arm2();
	this.arm2.name = "arm2";
	this.arm2.setTransform(180.25,115.5);

	this.arm1 = new lib.arm1();
	this.arm1.name = "arm1";
	this.arm1.setTransform(98.35,299.95);

	this.shirt3 = new lib.shirt3();
	this.shirt3.name = "shirt3";
	this.shirt3.setTransform(888.05,86.5,1,1,0,0,0,0.2,0);
	this.shirt3.cache(-75,-74,150,149);

	this.shirt2 = new lib.shirt2();
	this.shirt2.name = "shirt2";
	this.shirt2.setTransform(867,86.7);

	this.shirt1 = new lib.shirt1();
	this.shirt1.name = "shirt1";
	this.shirt1.setTransform(844.8,86.7);

	this.legs2 = new lib.legs2();
	this.legs2.name = "legs2";
	this.legs2.setTransform(166.45,515.05);

	this.legs1 = new lib.legs1();
	this.legs1.name = "legs1";
	this.legs1.setTransform(63.7,497.65);

	this.tie = new lib.tie();
	this.tie.name = "tie";
	this.tie.setTransform(911.65,296.8);

	this.bow = new lib.bow();
	this.bow.name = "bow";
	this.bow.setTransform(912.15,192.95);

	this.hat2 = new lib.hat2();
	this.hat2.name = "hat2";
	this.hat2.setTransform(806.8,205.6);

	this.hat1 = new lib.hat1();
	this.hat1.name = "hat1";
	this.hat1.setTransform(803.9,266.05);

	this.mouth4 = new lib.mouth4();
	this.mouth4.name = "mouth4";
	this.mouth4.setTransform(830.3,483.1);

	this.eyes5 = new lib.eyes5();
	this.eyes5.name = "eyes5";
	this.eyes5.setTransform(911.2,400.45);

	this.eyes4 = new lib.eyes4();
	this.eyes4.name = "eyes4";
	this.eyes4.setTransform(913.9,453.2);

	this.eyes3 = new lib.eyes3();
	this.eyes3.name = "eyes3";
	this.eyes3.setTransform(914.4,517.35);

	this.mouth3 = new lib.mouth3();
	this.mouth3.name = "mouth3";
	this.mouth3.setTransform(826.7,434.1,0.7329,1);

	this.eyes2 = new lib.eyes2();
	this.eyes2.name = "eyes2";
	this.eyes2.setTransform(824.2,543.4);

	this.mouth2 = new lib.mouth2();
	this.mouth2.name = "mouth2";
	this.mouth2.setTransform(828.7,381.3);

	this.mouth1 = new lib.mouth1();
	this.mouth1.name = "mouth1";
	this.mouth1.setTransform(829.95,333.9);

	this.eyes1 = new lib.eyes1();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(826.1,512);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252525").s().p("AAkA8QgIgCgZAAIgVABIgXABQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIgBgKIgCgLQAAgCAIgBQAJgCADgCQAJgIALgNQAMgPAAgIQAAgHgFgEQgEgFgHAAQgHAAgJADIgKAGIgGADQgCAAAAgIIgBgJIgBgFIgCgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAIgGANgDQAMgDAMAAQASAAAMAIQAPAKAAASQAAAXgkAfIAogCQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAHIgBAGIgBAIIAAAHQAAABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIgJgCg");
	this.shape.setTransform(609.8,628.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252525").s().p("AAkA8QgIgCgZAAIgVABIgXABQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIgBgKIgCgLQAAgCAIgBQAJgCADgCQAJgIALgNQAMgPAAgIQAAgHgFgEQgEgFgHAAQgHAAgIADIgLAGIgGADQgCAAAAgIIgBgJIgBgFIgCgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAIgGANgDQAMgDAMAAQASAAAMAIQAPAKAAASQAAAXgkAfIAogCQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAHIgBAGIgBAIIAAAHQAAABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIgJgCg");
	this.shape_1.setTransform(599.45,628.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#252525").s().p("AgpArQgQgSAAgZQAAgZAQgRQARgTAYAAQAZAAARATQAQASAAAYQAAAZgQASQgRATgZAAQgYAAgRgTgAgPgRQgGAHAAAKQAAAKAGAHQAGAJAJAAQAJAAAHgJQAGgHAAgKQAAgJgGgIQgGgIgKAAQgJAAgGAIg");
	this.shape_2.setTransform(587.95,628.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252525").s().p("AAkA8QgIgCgZAAIgVABIgXABQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIgBgKIgCgLQAAgCAIgBQAJgCADgCQAJgIALgNQAMgPAAgIQAAgHgFgEQgEgFgHAAQgHAAgJADIgKAGIgGADQgCAAAAgIIgBgJIgBgFIgCgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAIgGANgDQAMgDAMAAQASAAAMAIQAPAKAAASQAAAXgkAfIAogCQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAHIgBAGIgBAIIAAAHQAAABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIgJgCg");
	this.shape_3.setTransform(576.5,628.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#252525").s().p("AgUAaQgFgHAAgCIAEgFIAGgJQAEgGAAgIIAAgEIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgCAOgDIARgEQAEAAAAAFQAAAagUASIgIAIQgJAFgCAAIgHgFg");
	this.shape_4.setTransform(563.2,633.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#252525").s().p("AgoA+IgDgKIgDgHIgCgGQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAcAAAAgNIgOgTQgOgSgBgFQgBgDAAgRIABgLIAAgKQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIAPABIAPAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAABIAAAIIAAAIIAAARQAAAEAGAJQAGAJABAAQADAAAFgJQAFgJAAgDIABgTIAAgIIgBgIQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIAPAAIAPgBQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAEAAARQAAATgBAEQgCAFgUAdIgQAWQgNATgCABQgCACgcAAIgGgBg");
	this.shape_5.setTransform(555.375,630.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#252525").s().p("AgoAjQgMgPAAgTQAAgVANgOQAMgOAWAAQAPAAAIALIABAAQABAAABgFQABgFACABIAOABIANADIACACIgBADQgCARAAAUIAAAVIABAXQAAADgDAAIgcABQgCABgBgGQAAgGgBAAIgCABQgLAMgMAAQgSAAgNgPgAgNgOQgGAGAAAIQABAHAFAGQAGAFAHAAQAHAAAGgFQAFgFAAgIQAAgIgFgGQgGgFgHAAQgIAAgFAFg");
	this.shape_6.setTransform(543.95,629.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#252525").s().p("AAABGQgEAAgBgCIgOgfIgOgfIgBgBQAAAAAAAAQAAAAgBAAQAAABAAAAQAAABAAAAIABAdIAAAcQAAABAAABQAAABAAAAQgBABAAAAQgBAAAAAAIghAAIgCAAIgBgDIABggIABggIgBgpIgBgZIAAgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIARAAIAQAAQAAAAAAAAQABAAAAABQAAAAABABQAAABABAAIAcA/QADAGABAAQABAAAEgHIAdg+QABgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAIAAIAJAAIAHAAIAIgBQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABIgBAiIgBAhIABAgIABAgQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIgjAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBIAAgdIABgdQAAgBAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAIgNAeIgOAiQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAIgEAAg");
	this.shape_7.setTransform(530.025,627.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#252525").s().p("AgZAqIABgTIAAgTQAAgEgFAAIgBAAIgBAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIAAgFIABgFIgBgGIAAgGQAAgCAGAAQABAAABAAQAAAAABgBQABAAAAAAQAAgBAAAAIABgMIgBgMQAAgLACAAIAIABIAIABIAOACQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIAAAMIgBALQAAAFADAAIAKAAIAKAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIgBAHIAAAHIAAAGIAAAHQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgHAAIgGAAIgHAAQgBAAAAAAQAAABAAAAQgBABAAABQAAAAAAABIAAAHIAAAHQAAAIACAEQADAEAHAAIAHgBIAHgCQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIgBAJIgBAIIAAAEIgDACQgNAHgPAAQgcAAAAgWg");
	this.shape_8.setTransform(508.075,627.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#252525").s().p("AgaAwQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgXIAAgXQAAgXgEgPIAAgBIABgCIAQgDIAQgDQAAABABAGQAAAGACAAQgBAAAJgFQAJgGAJAAQAFAAAAADIAAAIIgBAIIAAAHIAAAIQAAAEgEAAIgFAAIgGgBQgIAAgDADQgDACAAAIIABAMIAAANIAAAJIAAAIQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgNABIgPgBg");
	this.shape_9.setTransform(500.675,629.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252525").s().p("AAeBFQgDAAgBgEQgEgOgBgBIgagBQgQAAgBABQgCACgCAIQgCAJgCAAQgEABgTAAQgPAAAAgDQAAgCAWg8IAahGQACgEABAAIAIAAIAJABIAGAAIAIgBQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAFALAXA7QAYA8AAADQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgDABgPAAQgOAAgEgBgAgHgDIgFARQAAACAGAAIAJABQAGAAABgCIAAgBQAAgEgEgNIgGgSIgHASg");
	this.shape_10.setTransform(489.725,626.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#252525").s().p("AgmA/IgIAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAhKQABgXgEgPIAAgCIABgCIAPgDIAPgCQADAAACAFIAAAFIAAAAIAAAAIAJgFQAIgFAIAAQAVAAANAOQAMANAAAWQAAAUgMANQgNAPgUAAQgIAAgIgEIgIgEIAAAAIAAAAQAAAAAAAAQAAABgBAAQAAAAAAABQAAABAAAAIAAAPIABAPQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAgAgLgbQgFAFAAAJQABAIAEAFQAEAFAHAAQASAAAAgSQAAgIgFgGQgFgGgIAAQgGAAgFAGg");
	this.shape_11.setTransform(476.95,630.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#252525").s().p("AAuAwQgDAAAAgFIABgNIAAgNIAAgYQgBgLgKAAQgFAAgEAEQgFADgBAFIAAAXIAAAOIABAOQAAABAAABQgBAAAAAAQAAABgBAAQgBAAAAAAIgdAAQgDAAAAgEIABgOIAAgNIAAgLIAAgKQAAgOgLAAQgEAAgFADQgGAEAAAEIAAAZIAAAbIAAADIgDAAIgOABIgOgBIgDAAIAAgDIAAgYIAAgWQAAgQgCgUIgBgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAIgCIAJgBIAHgCIAIgBQACAAAAAHIABAHIACgCQAJgHAFgCQAHgEAJAAQAJAAAGAEQAIAFACAIQAGgHAJgFQAJgFAIAAQANAAAIAGQAKAHAAAMIgBAQIAAAPIAAASIABATQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAIgPABIgPgBg");
	this.shape_12.setTransform(461.875,629.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#252525").s().p("AgiAlQgOgPAAgVQAAgWANgNQANgPAWAAQAWAAAOAOQANAOAAAVQAAAWgNAOQgOAOgWAAQgUAAgOgNgAgLgNQgFAGAAAHQAAAIAFAGQAFAFAGABQAIgBAFgFQAEgGAAgIQAAgHgEgGQgFgFgIgBQgGABgFAFg");
	this.shape_13.setTransform(448.025,629.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#252525").s().p("AgnAzQgTgUAAgfQAAgdASgUQATgWAcAAQAgAAASATIACAEQAAACgHAMQgHAMgCABIgCABIgEgEIgLgHQgIgEgIAAQgNAAgJALQgIAKAAAOQAAAOAIAKQAJALANAAQAJAAAHgDQAFgDAFgEIAFgEIACABIAJAMIAHAMIgCAEQgSAWgeAAQgdAAgTgVg");
	this.shape_14.setTransform(436.725,627.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#252525").s().p("AgiAlQgOgPAAgVQAAgWANgNQANgPAWAAQAWAAAOAOQANAOAAAVQAAAWgNAOQgOAOgWAAQgUAAgOgNgAgLgNQgFAGAAAHQAAAIAFAGQAFAFAGABQAIgBAFgFQAEgGAAgIQAAgHgEgGQgFgFgIgBQgGABgFAFg");
	this.shape_15.setTransform(420.025,629.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#252525").s().p("AgqA4QgLgNAAgVQAAgWALgMQAMgPAWAAQAOAAAHAJIACACQABAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIgBgXIgBgWQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAAAIASgCIAQgCQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIgBAHIgCAbIgBArQAAApADAQIAAADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgZABQgGAAAAgCIgBgIIAAgBIgCABQgLAKgOAAQgVAAgNgPgAgNAIQgFAFAAAIQAAAJAFAFQAFAGAIAAQAHAAAEgGQAGgGAAgIQAAgIgGgFQgEgGgHAAQgJAAgEAGg");
	this.shape_16.setTransform(408.8,626.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#252525").s().p("AgoAjQgMgPAAgTQAAgVAMgOQANgOAWAAQAPAAAJALIAAAAQABAAABgFQABgFACABIAOABIANADIACACIgBADQgDARAAAUIABAVIABAXQAAADgDAAIgcABQgCABAAgGQgBgGgBAAIgCABQgLAMgLAAQgUAAgMgPgAgOgOQgEAGgBAIQAAAHAGAGQAFAFAIAAQAIAAAFgFQAFgFAAgIQAAgIgFgGQgFgFgIAAQgIAAgGAFg");
	this.shape_17.setTransform(397,629.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#252525").s().p("AgaAwQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgXIAAgXQAAgXgEgPIAAgBIABgCIAQgDIAQgDQAAABABAGQAAAGACAAQgBAAAJgFQAJgGAJAAQAFAAAAADIAAAIIgBAIIAAAHIAAAIQAAAEgEAAIgFAAIgGgBQgIAAgDADQgDACAAAIIABAMIAAANIAAAJIAAAIQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgNABIgPgBg");
	this.shape_18.setTransform(387.675,629.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#252525").s().p("AgoAjQgMgPAAgTQAAgVANgOQAMgOAWAAQAPAAAIALIABAAQABAAABgFQABgFACABIANABIAPADIABACIgBADQgCARAAAUIABAVIAAAXQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgcABQgCABgBgGQAAgGgBAAIgCABQgLAMgMAAQgSAAgNgPgAgNgOQgGAGABAIQAAAHAFAGQAFAFAIAAQAHAAAGgFQAFgFAAgIQAAgIgFgGQgFgFgIAAQgIAAgFAFg");
	this.shape_19.setTransform(377.7,629.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#252525").s().p("AgMAuIgCgCQgGgGgLgQQgMgRgDgFQgBgHgBgOIAAgLIAAgLQAAgBABgBQAAAAAAAAQABgBAAAAQABAAABAAIAPABIAPAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAABIAAAIIAAAIIAAARQAAADAGAIQAFAKABAAQADAAAFgKQAGgIAAgCIABgRIAAgJIgBgIQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAIAAIAHAAIAHAAIAHgBQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQABAFABARQAAARgBADQgCAGgMAQIgRAXQgCADgNAAQgKAAgEgBg");
	this.shape_20.setTransform(366.65,629.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#252525").s().p("AgOBEQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAIAAgFIAAgaIABgaIAAgkQgBgWgCgQIAAgBQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAhAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAABQgDArAAAfIAAApIABAIIAAAIQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgPABQgLAAgDgBg");
	this.shape_21.setTransform(358.625,627.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#252525").s().p("AAeBFQgDAAgBgEQgEgOgBgBIgagBQgQAAgBABQgCACgCAIQgCAJgCAAQgEABgTAAQgPAAAAgDQAAgCAWg8IAahGQACgEABAAIAIAAIAJABIAGAAIAIgBQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAFALAXA7QAYA8AAADQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgDABgPAAQgOAAgEgBgAgHgDIgFARQAAACAGAAIAJABQAGAAABgCIAAgBQAAgEgEgNIgGgSIgHASg");
	this.shape_22.setTransform(348.975,626.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#252525").s().p("AgFBFIgGAAQgkAAgHgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIABggIACggIgCgpIgBgYIAAgCQAAAAAAAAQAAgBABAAQAAAAABAAQABgBABAAIAWAAIAjAAQAZABALAHQAPAJAAAWQAAAGgEAGQgCAFgEAFIgEADIADACQAGADAFAJQADAHAAAJQAAASgLAMQgNANggAAIgHAAgAgQANQgBABAAALQAAALABABQABACANAAQAKAAADgCQAIgDAAgIQAAgJgIgDQgEgCgKAAQgNAAAAABgAgRgnIAAAGIgBAFQAAAKACABQABABALAAQAUAAAAgMQAAgIgIgDQgFgCgKAAQgKAAAAACg");
	this.shape_23.setTransform(335.9,627.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("ABUDCQgJgCgDgLQgJgmgFgDQgFgChDAAQgvAAgDACQgFAFgFAYQgGAXgHACQgJACg1AAQgqAAAAgIQAAgHA+inQBDi1AFgSQAEgKAEAAIAXABIAXACIAVgBIAVgBQAFAAAFAJQANAdBBCmQBBCqAAAHQAAAFgHACQgIACgrAAQgnAAgLgCgAgUgJQgPAqAAAIQAAAEAQABIAbAAQASABACgFIABgEQAAgJgNgoQgMgngFgLQgGAMgNAog");
	this.shape_24.setTransform(304.175,34);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("ABtDCIgWgBQgEAAgHgJIhYh1Ig5hLIgEgDQgCACAAAEIACBeIABBgQAAAJgIAAIheAAQgIAAAAgIQAAgeADg8QADg7AAgeQAAgfgDg+QgDg/AAgfQAAgGALAAQAQAAAYgCIAVgDQAOgDAHAAQAEAAAHAJIBlCMIApA2QAHAIAFAAQADAAAAgTQAAgdgCg6QgEg6AAgdQAAgKAGAAIAygCIAxgBQAFAAAAAJQAAAfgDA/QgCA+AAAeIAAC0QAAAIgIAAIgUABIgUAAIgVgBg");
	this.shape_25.setTransform(263.95,34);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("ABUDCQgJgCgDgLQgJgmgFgDQgFgChDAAQgvAAgDACQgFAFgFAYQgGAXgHACQgJACg1AAQgqAAAAgIQAAgHA+inQBDi1AFgSQAEgKAEAAIAXABIAXACIAVgBIAVgBQAFAAAFAJQANAdBBCmQBBCqAAAHQAAAFgHACQgIACgrAAQgnAAgLgCgAgUgJQgPAqAAAIQAAAEAQABIAbAAQASABACgFIABgEQAAgJgNgoQgMgngFgLQgGAMgNAog");
	this.shape_26.setTransform(223.675,34);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF00").s().p("ABtDCIgVgBQgGAAgGgJIhYh1Ig5hLIgEgDQgDACAAAEIADBeIABBgQAAAJgHAAIhfAAQgIAAAAgIQAAgeADg8QADg7AAgeQAAgfgCg+QgDg/AAgfQAAgGALAAQAPAAAXgCIAWgDQANgDAJAAQADAAAHAJIBlCMIApA2QAHAIAFAAQAEAAAAgTQAAgdgEg6QgDg6AAgdQAAgKAGAAIAxgCIAygBQAFAAAAAJQAAAfgCA/QgDA+AAAeIAAC0QAAAIgIAAIgUABIgUAAIgVgBg");
	this.shape_27.setTransform(183.45,34);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("ABUDCQgJgCgDgLQgJgmgFgDQgFgChDAAQgvAAgDACQgFAFgFAYQgGAXgHACQgJACg1AAQgqAAAAgIQAAgHA+inQBDi1AFgSQAEgKAEAAIAXABIAXACIAVgBIAVgBQAFAAAFAJQANAdBBCmQBBCqAAAHQAAAFgHACQgIACgrAAQgnAAgLgCgAgUgJQgPAqAAAIQAAAEAQABIAbAAQASABACgFIABgEQAAgJgNgoQgMgngFgLQgGAMgNAog");
	this.shape_28.setTransform(143.175,34);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AgODCIgTAAQhlAAgTgFQgIgBAAgHQAAgdADg8QAEg7AAgdQAAgfgEhYIgDhDIAAgEQAAgFAJgBQAJgBA2AAIBlABQBDACAgATQArAaAAA+QAAAQgKASQgHANgMANIgKAKQAAACAHAEQATAKALAYQAKAVAAAYQAAAzgfAhQgkAmhaAAIgTAAgAgwAjQgDACAAAgQAAAgAEAEQADACAkAAQAdAAAMgEQAUgIAAgYQAAgYgVgJQgNgGgcABQgkgBgDADgAgzhvIgBAPIgBAQQAAAbAFAEQADACAgAAQA6AAAAgiQAAgXgYgHQgNgFgdAAQgeAAAAAFg");
	this.shape_29.setTransform(106.625,34.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AgtAuQgSgTAAgbQAAgaASgTQATgTAaAAQAbAAASATQATATAAAaQAAAbgTATQgSATgbAAQgaAAgTgTg");
	this.shape_30.setTransform(80.15,47.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AhKCGQgJgBAAgIIAAhBIAAhBQAAhAgMgqIAAgEQAAgEAEgBIAsgGIAsgJQAEAAACASQABAQAEABIAAAAIAAAAQgDgBAZgNQAagPAZAAQAPAAAAAHIgCAWIgCAXIABAVIAAAVQAAALgLAAIgQgBIgPgBQgWAAgIAHQgJAHAAAVIABAkIAAAjIABAYIABAXQAAAHgJABIgnABQgaAAgPgCg");
	this.shape_31.setTransform(62.075,39.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AgRC+QgPgegYg5IgnhYIgBgDQgCACAAAGIABBQIABBRQAAAJgIAAIhbAAQgFAAgCgBQgBgCAAgFQAAgdADg8QADg7AAgeQAAgfgDhYQAAgWgCgtIAAgFQgBgFAMAAIAtgBIAtgBQADAAAFAMIBQCuQAJASAFgBQACABAKgUIBSitQAFgLAFAAIAZABIAYABIAVgBIAUgCQAJAAgBAGIgCBhQgCBAAAAgQAAAeACA7QADA7AAAeQAAAJgIgBIhhAAQgIAAAAgJQAAgbACg4IAChTQABgIgDAAQgDACgiBSIgnBhQgDAHgEABIgKAAQgOAAgDgGg");
	this.shape_32.setTransform(28,34.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.eyes1},{t:this.mouth1},{t:this.mouth2},{t:this.eyes2},{t:this.mouth3},{t:this.eyes3},{t:this.eyes4},{t:this.eyes5},{t:this.mouth4},{t:this.hat1},{t:this.hat2},{t:this.bow},{t:this.tie},{t:this.legs1},{t:this.legs2},{t:this.shirt1},{t:this.shirt2},{t:this.shirt3},{t:this.arm1},{t:this.arm2}]}).wait(1));

	// Character
	this.instance = new lib.body();
	this.instance.setTransform(467.45,322.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Frame
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#003366").s().p("EhK3AsKMAAAhYTMCVvAAAMAAABYHMg5BAAAIAAgBMgrGAAAIAAABMgvGAAAIAAAMg");
	this.shape_33.setTransform(480.8,285.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#663300").s().p("EhK5AFsIAArKICiAAIAAgMMAvGAAAIAAgBMArFAAAIAAAAMA5CAAAIAEAAIAALXg");
	this.shape_34.setTransform(481.025,603.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(481.6,320,479.4,320);
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