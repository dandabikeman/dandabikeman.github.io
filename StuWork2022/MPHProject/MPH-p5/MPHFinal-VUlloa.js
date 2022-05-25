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


(lib.stem3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#660033").s().p("ACnReIjjgbIAej+IABgFIDiEigAjEA8IBgA3ICABLIhWCXIgrBKgAAFtCIg6jcIDWg5IAkgKIi4E+g");
	this.shape.setTransform(4.975,2.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#513300").s().p("AE3TfQgyg0gtg1IAeAEIjjkhIAAAEQi8lJgOluIl4DXQg/gcgjgiQhbhZBbiBQA1hOB1haIEvB8QANmcDinHIAIAgIC3k+IgkAKQAagrAcgrIAzhKIEYAAIhJBKQhxB3hbB3IDxiKQE/COmGEzIksh7QkXHBAoG0Ihfg3IBfFjIArhKQBNERDNEMIDKlcQFcgki5HNIkQAlQBkByB7Bxg");
	this.shape_1.setTransform(0.0011,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stem3, new cjs.Rectangle(-70.3,-124.7,140.7,249.5), null);


(lib.stem2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#336600").s().p("AE7TiIgIgJQnTnugXpHIl4DXQk/iOGHkyIEwB7QASpWHYq0IAIgNIEYAAQidCdh3CcIDwiKQFACOmHEzIksh7QoQNQJnMkIDKlcQFbgli5HNIkPAlQBlB1B+B0g");
	this.shape.setTransform(-0.0027,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stem2, new cjs.Rectangle(-70.3,-124.9,140.7,249.9), null);


(lib.stem1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#336600").s().p("ABKSDQwevnQe0eIF8AAQ4AP1YAUQg");
	this.shape.setTransform(0.0375,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stem1, new cjs.Rectangle(-45.3,-115.5,90.69999999999999,231), null);


(lib.purplebtn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhGhGICNAAIAACNIiNAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6633CC").s().p("AhFBGIAAiLICLAAIAACLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purplebtn, new cjs.Rectangle(-8,-8,16.1,16.1), null);


(lib.Pollen = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("ALJAAQAAEnjRDRQjRDRknAAQkmAAjRjRQjRjRAAknQAAkmDRjRQDRjREmAAQEnAADRDRQDRDRAAEmg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("An3H3QjQjQgBknQABkmDQjRQDRjQEmgBQEnABDQDQQDSDRAAEmQAAEnjSDQQjQDSknAAQkmAAjRjSg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pollen, new cjs.Rectangle(-72.2,-72.2,144.5,144.5), null);


(lib.pinkbtn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhGhGICNAAIAACNIiNAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3399").s().p("AhFBGIAAiLICLAAIAACLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pinkbtn, new cjs.Rectangle(-8,-8,16.1,16.1), null);


(lib.orangebtn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhGhGICNAAIAACNIiNAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AhFBGIAAiLICLAAIAACLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.orangebtn, new cjs.Rectangle(-8,-8,16.1,16.1), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFOAAIgeAAIpkAAIgZAA");
	this.shape.setTransform(0.025,-16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkxAeIAAg7IJjAAIAAA7g");
	this.shape_1.setTransform(-0.225,-13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjsBAQhehdgDiEIAZAAIAAA8IJkAAIAAg8IAeAAQgECEheBdQhiBiiKAAQiKAAhihig");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth3, new cjs.Rectangle(-34.3,-17.2,68.69999999999999,33.4), null);


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
	this.shape.graphics.f().s("#000000").ss(9,1,1).p("Al9AtQJcizCfCz");
	this.shape.setTransform(0,0.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth2, new cjs.Rectangle(-42.7,-9,85.4,18), null);


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
	this.shape.graphics.f().s("#000000").ss(9,1,1).p("AmPg7QGPDvGQjv");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth1, new cjs.Rectangle(-44.5,-10.5,89,21), null);


(lib.flowerp = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF9966").s().p("ADnJ+QgPgPgMgPQAAgegDgZQgGgtgTglQgHgQgIgNQAOgeAjgZIAWgOIARgJIApgWIAEgDIAIgCIACAGQAMAzAvAqQAlAgA9AYQAmAOAqAKQAgCFgfCrQjHhGhwhwgAoaH7QAegBAegEQBBgIAugWQA3gdAaguQAKgSAGgVQAIAFAJAGIAVAQIANANIAgAfIAEAEIAKALIAGAIIgLAWQgUAlgFAtQgGAkAFAwQgZAVgjAUQiKBRjVATQARieA8h0gAJTHRQgKgcgLgZQgag5gigjQgsgsg3gLQgVgFgXABIAHgSIALgXIAKgQIASgdQAWAdAgASQAiAUApAGQA+ALBfgYIAzgNQBVBfA7CSQhYANhPAAQhIAAhAgLgAG5GcQg+gjgMgyIgCgGQASgBAPADQA1AMAmA5QAQAYANAfQgsgPghgUgAt8FwQBuiRCAhJQA+AKAsgHQAogGAjgVQATgKAPgOQAMAEAMAHQAjAVAVAuQAFALAFANIAEARIAMAqIACAFIAAAIIgHAAQg4gCg2AfQgrAagoAxQgZAegWAkQiRgHiphHgAm9F+QA1gvA2ACIAHABQgDAPgIANQgaAthFAUQgcAIgjAEQAbgkAcgZgAFpizQgGgLgEgMIgGgSIgLgqIgCgFIgBgIIAHAAQA5ACA2ggQArgZAogxQAZgfAWgiQCRAGCpBHQhaB2hlBFIgCAAQhfgXg9ALQgpAGgiAUQgjAUgXAfQgggVgSgrgAmejMQgYgjglgWQgjgUgpgHQg+gKhfAXQglAKgkALQhChWgyh5QCpgbCHAZQAIAbAMAZQAaA5AjAkQArArA3AMQAVAEAXgBQgDAJgEAJIgLAXIgLAQIgHAMIgIgNgAmNlDQg1gLgng5QgQgYgMgeQAsAOAiATQA8AkANAyIABAGIgEAAQgPAAgNgDgAkvlWQgNgzgugpQglghg9gYQgmgOgqgKQggiFAfisQDHBHBvBwIAUAVQgDAxAEAlQAGAtASAlIAPAZQgPAUgYAQQgJAIgNAIIgQAJIgoAUIgFAEIgIADIgCgHgAFSlQIgGAAQADgQAIgNQAZguBFgTQAegJAhgDQgZAkgdAaQgzAsg1AAIgEAAgAD+lwIgUgQIgPgNIgfgfIgFgEIgJgLIgEgGIAAgCQATglAFgtQAGgpgGg3QAegbAogYQCLhRDUgUQgQCgg8BzQgfAAgdAEQhBAJgtAXQg4AbgaAvQgKASgGAUQgIgEgJgGg");
	this.shape.setTransform(0.3,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("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");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6666CC").s().p("ADnJ+QgPgPgMgPQAAgegDgZQgGgtgTglQgHgQgIgNQAOgeAjgZIAWgOIARgJIApgWIAEgDIAIgCIACAGQAMAzAvAqQAlAgA9AYQAmAOAqAKQAgCFgfCrQjHhGhwhwgAoaH7QAegBAegEQBBgIAugWQA3gdAaguQAKgSAGgVQAIAFAJAGIAVAQIANANIAgAfIAEAEIAKALIAGAIIgLAWQgUAlgFAtQgGAkAFAwQgZAVgjAUQiKBRjVATQARieA8h0gAJTHRQgKgcgLgZQgag5gigjQgsgsg3gLQgVgFgXABIAHgSIALgXIAKgQIASgdQAWAdAgASQAiAUApAGQA+ALBfgYIAzgNQBVBfA7CSQhYANhPAAQhIAAhAgLgAG5GcQg+gjgMgyIgCgGQASgBAPADQA1AMAmA5QAQAYANAfQgsgPghgUgAt8FwQBuiRCAhJQA+AKAsgHQAogGAjgVQATgKAPgOQAMAEAMAHQAjAVAVAuQAFALAFANIAEARIAMAqIACAFIAAAIIgHAAQg4gCg2AfQgrAagoAxQgZAegWAkQiRgHiphHgAm9F+QA1gvA2ACIAHABQgDAPgIANQgaAthFAUQgcAIgjAEQAbgkAcgZgAFpizQgGgLgEgMIgGgSIgLgqIgCgFIgBgIIAHAAQA5ACA2ggQArgZAogxQAZgfAWgiQCRAGCpBHQhaB2hlBFIgCAAQhfgXg9ALQgpAGgiAUQgjAUgXAfQgggVgSgrgAmejMQgYgjglgWQgjgUgpgHQg+gKhfAXQglAKgkALQhChWgyh5QCpgbCHAZQAIAbAMAZQAaA5AjAkQArArA3AMQAVAEAXgBQgDAJgEAJIgLAXIgLAQIgHAMIgIgNgAmNlDQg1gLgng5QgQgYgMgeQAsAOAiATQA8AkANAyIABAGIgEAAQgPAAgNgDgAkvlWQgNgzgugpQglghg9gYQgmgOgqgKQggiFAfisQDHBHBvBwIAUAVQgDAxAEAlQAGAtASAlIAPAZQgPAUgYAQQgJAIgNAIIgQAJIgoAUIgFAEIgIADIgCgHgAFSlQIgGAAQADgQAIgNQAZguBFgTQAegJAhgDQgZAkgdAaQgzAsg1AAIgEAAgAD+lwIgUgQIgPgNIgfgfIgFgEIgJgLIgEgGIAAgCQATglAFgtQAGgpgGg3QAegbAogYQCLhRDUgUQgQCgg8BzQgfAAgdAEQhBAJgtAXQg4AbgaAvQgKASgGAUQgIgEgJgGg");
	this.shape_2.setTransform(0.3,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6633CC").s().p("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");
	this.shape_3.setTransform(0.025,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF99CC").s().p("ADnJ+QgPgPgMgPQAAgegDgZQgGgtgTglQgHgQgIgNQAOgeAjgZIAWgOIARgJIApgWIAEgDIAIgCIACAGQAMAzAvAqQAlAgA9AYQAmAOAqAKQAgCFgfCrQjHhGhwhwgAoaH7QAegBAegEQBBgIAugWQA3gdAaguQAKgSAGgVQAIAFAJAGIAVAQIANANIAgAfIAEAEIAKALIAGAIIgLAWQgUAlgFAtQgGAkAFAwQgZAVgjAUQiKBRjVATQARieA8h0gAJTHRQgKgcgLgZQgag5gigjQgsgsg3gLQgVgFgXABIAHgSIALgXIAKgQIASgdQAWAdAgASQAiAUApAGQA+ALBfgYIAzgNQBVBfA7CSQhYANhPAAQhIAAhAgLgAG5GcQg+gjgMgyIgCgGQASgBAPADQA1AMAmA5QAQAYANAfQgsgPghgUgAt8FwQBuiRCAhJQA+AKAsgHQAogGAjgVQATgKAPgOQAMAEAMAHQAjAVAVAuQAFALAFANIAEARIAMAqIACAFIAAAIIgHAAQg4gCg2AfQgrAagoAxQgZAegWAkQiRgHiphHgAm9F+QA1gvA2ACIAHABQgDAPgIANQgaAthFAUQgcAIgjAEQAbgkAcgZgAFpizQgGgLgEgMIgGgSIgLgqIgCgFIgBgIIAHAAQA5ACA2ggQArgZAogxQAZgfAWgiQCRAGCpBHQhaB2hlBFIgCAAQhfgXg9ALQgpAGgiAUQgjAUgXAfQgggVgSgrgAmejMQgYgjglgWQgjgUgpgHQg+gKhfAXQglAKgkALQhChWgyh5QCpgbCHAZQAIAbAMAZQAaA5AjAkQArArA3AMQAVAEAXgBQgDAJgEAJIgLAXIgLAQIgHAMIgIgNgAmNlDQg1gLgng5QgQgYgMgeQAsAOAiATQA8AkANAyIABAGIgEAAQgPAAgNgDgAkvlWQgNgzgugpQglghg9gYQgmgOgqgKQggiFAfisQDHBHBvBwIAUAVQgDAxAEAlQAGAtASAlIAPAZQgPAUgYAQQgJAIgNAIIgQAJIgoAUIgFAEIgIADIgCgHgAFSlQIgGAAQADgQAIgNQAZguBFgTQAegJAhgDQgZAkgdAaQgzAsg1AAIgEAAgAD+lwIgUgQIgPgNIgfgfIgFgEIgJgLIgEgGIAAgCQATglAFgtQAGgpgGg3QAegbAogYQCLhRDUgUQgQCgg8BzQgfAAgdAEQhBAJgtAXQg4AbgaAvQgKASgGAUQgIgEgJgGg");
	this.shape_4.setTransform(0.3,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3399").s().p("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");
	this.shape_5.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.1,-110.4,212.3,220.8);


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
	this.shape.graphics.f("#000000").s().p("AA9AQIAwiEQEpD9FAkHIAjCOQivBvivAAQivAAivhvgAr4AQIAviEQEqD9FAkHIAjCOQivBvivAAQivAAivhvg");
	this.shape.setTransform(0,0.0375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes2, new cjs.Rectangle(-76.1,-12.6,152.2,25.299999999999997), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AH7BYQgNghAJgYQAMgjA4gRAGkg7QAMgPAWgNAmwAWQAEgcgJgYQgOgjgsgWAn6BYQADgagGgVQgNgogwgW");
	this.shape.setTransform(0.025,-16.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AC/BrQgKgIAAgMQAAgNAKgHQAHgHAJgBIAIgBQAOAAAJAJQAEADACADQAEAGAAAIQAAAMgKAIQgJAIgOAAQgOAAgKgIgAmuBrQgJgIAAgMQAAgNAJgHQAHgHAJgBIAIgBQAOAAAKAJQAEADACADQAEAGAAAIQAAAMgKAIQgKAIgOAAQgOAAgKgIgAEUAxQgcgcAAgnQAAgoAcgcQATgTAXgFIAEgBQAKgDAMAAQAVAAASAIQAQAGANAOQALAKAGAMQAEAIADAHQAEAOAAARQAAAngcAcQgcAcgoAAQgoAAgcgcgAlYAxQgcgcAAgnQAAgoAcgcQAUgUAZgFQALgDAMAAQAoAAAcAcQAKAKAHAMQALAVAAAZQAAAngcAcQgcAcgoAAQgoAAgcgcg");
	this.shape_1.setTransform(3.725,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACECtQhIhHAAhmQAAhkBIhJQBIhHBlAAQAaAAAYAFQgXAFgTATQgcAcAAAoQAAAoAcAcQAcAcApAAQAnAAAcgcQAdgcAAgoQAAgRgFgOIAGAFQANAOALAOQAvBAABBRQAABmhIBHQhIBIhmAAQhlAAhIhIgAD0hFQgJABgHAHQgJAHAAANQAAAMAJAIQAKAIAOAAQAOAAAJgIQALgIgBgMQAAgIgDgGQgDgDgEgDQgJgJgOAAIgIABgAH8hXQgIgUAAgRQAAgLADgKQgDAKAAALQAAARAIAUgAneCtQhIhHAAhmQAAhLApg7QANgUASgTQAUgTAVgOQA7gmBKAAQAVAAAVAEQgZAFgUAUQgcAcAAAoQAAAoAcAcQAcAcAoAAQAoAAAcgcQAcgcAAgoQAAgZgLgVQAMAKALAKQA5A6ALBLQAEASAAAUIAAACQgBBmhHBHQhIBIhlAAQhmAAhIhIgAl4hFQgKABgGAHQgKAHAAANQAAAMAKAIQAKAIANAAQAOAAAKgIQAKgIAAgMQAAgIgEgGQgCgDgEgDQgKgJgOAAIgHABgAn6hXIABgRQAAgQgEgOQAEAOAAAQIgBARgAmwiZIACgRQAAgTgHgRQAHARAAATIgCARg");
	this.shape_2.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes1, new cjs.Rectangle(-58,-26.4,116.1,51.9), null);


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


(lib.blush2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AFPAwQgigUAAgcQAAgbAigUQAjgUAwAAQAxAAAiAUQAjAUAAAbQAAAcgjAUQgiATgxABQgwgBgjgTgAn0AwQgjgUAAgcQAAgbAjgUQAigUAxAAQAwAAAjAUQAiAUAAAbQAAAcgiAUQgjATgwABQgxgBgigTg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blush2, new cjs.Rectangle(-53.5,-6.7,107.1,13.5), null);


(lib.blush1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF6666").ss(3,1,1).p("AoZAKIBjhtAG3BkIBjhtAFgBVICmizAFFAKIBjhtAmnBkIBjhtAn+BVICmiz");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blush1, new cjs.Rectangle(-55.3,-11.5,110.69999999999999,23), null);


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
(lib.MPHFinalVUlloa = function(mode,startPosition,loop,reversed) {
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
		var root = this;
		
		this.face1.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eyes1.x = 475;
			this.eyes1.y = 268;
			this.mouth1.x = 478;
			this.mouth1.y = 320;
			this.stem3.x = 456;
			this.stem3.y = 468;
			this.flowercolors.x = 477;
			this.flowercolors.y = 285;
		}
		this.face2.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.eyes2.x = 479;
			this.eyes2.y = 262;
			this.mouth3.x = 478;
			this.mouth3.y = 308;
			this.blush1.x = 478;
			this.blush1.y = 286;
			this.stem2.x = 437;
			this.stem2.y = 476;
			this.flowercolors.x = 477;
			this.flowercolors.y = 295;
		}
		
		
			
		this.flowercolors.gotoAndStop(0);
		
		this.orangebtn.on("click", flowerorange);
		
		function flowerorange() {
			root.flowercolors.gotoAndStop(0);
		}
		this.flowercolors.gotoAndStop(1);
		
		this.purplebtn.on("click", flowerpurple);
		
		function flowerpurple() {
			root.flowercolors.gotoAndStop(1);
		}
		this.flowercolors.gotoAndStop(2);
		
		this.pinkbtn.on("click", flowerpink);
		
		function flowerpink() {
			root.flowercolors.gotoAndStop(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.pinkbtn = new lib.pinkbtn();
	this.pinkbtn.name = "pinkbtn";
	this.pinkbtn.setTransform(235,616.55);

	this.purplebtn = new lib.purplebtn();
	this.purplebtn.name = "purplebtn";
	this.purplebtn.setTransform(213.3,616.55);

	this.orangebtn = new lib.orangebtn();
	this.orangebtn.name = "orangebtn";
	this.orangebtn.setTransform(191.8,616.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.orangebtn},{t:this.purplebtn},{t:this.pinkbtn}]}).wait(1));

	// Body Parts
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBbQgHgFAAgKIAAiWQAAgLAHgFQAFgGAJAAQAKAAAFAGQAHAFAAALIAACWQAAAKgHAGQgFAFgKAAQgJAAgFgGg");
	this.shape.setTransform(231.85,377.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAxBCQgGgFgIgJQgPAKgPAEQgNAFgSAAQgRAAgMgFQgNgGgHgIQgGgKAAgKQAAgOALgKQALgKATgDIAVgDIAagGIAZgFQAAgNgGgHQgGgGgTAAQgQAAgIADQgIAEgGAIIgIAJQgDACgIABQgHAAgFgFQgGgDAAgGQAAgJAIgJQAIgIARgGQARgGAZAAQAcAAAQAGQAQAFAHAMQAHALAAAUIAAAUIgBATQAAAKAEALQAEAKAAADQAAAFgGAFQgGAEgIAAQgHAAgGgFgAAFAHIgYAEQgHACgGAEQgGAFAAAHQAAAIAHAGQAHAGAMgBQAMABALgFQALgEAFgIQAFgIAAgSIAAgFQgJADgSADg");
	this.shape_1.setTransform(217.925,380.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQBZQgKgGgDgJQgDgKgBgQIAAhCIgFAAQgJAAgFgEQgFgDAAgGQAAgFAFgEQAFgDAKAAIAEAAIAAgVIABgNQABgFADgEQACgDAEgCQAGgDAFAAQAIABAGAFQAEADACAFIABANIAAAYIAQAAQAIAAAFADQAFAEAAAFQAAAHgHAEQgGACgNAAIgIAAIAABAIABAMQAAAEADADQADADAHAAIALgCIAKgBQAEABAFADQAEADAAAGQAAAIgMAEQgLAFgVgBQgTABgLgGg");
	this.shape_2.setTransform(203.25,377.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6A0QgWgTAAghQAAgPAFgMQAGgOALgKQAKgIAQgFQARgGARAAQAaAAASAJQASAIAJAOQAIAOABAOQgBAMgIAEQgKAEgQAAIhTAAQAAAMAFAJQAGAJAKAFQAJAEAKAAQAIAAAHgCQAGgBAGgDIALgGIANgKQAEgCAGAAQAGAAAEACQAEADAAAGQAAAFgFAFQgEAHgJAGQgKAFgNAFQgOADgSAAQgoAAgYgTgAgYgkQgKAJgCARIBMAAQgBgSgKgIQgLgKgQABQgQgBgKAKg");
	this.shape_3.setTransform(187.4,380.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhPBbQgEgGAAgMIAAiVQAAgKAFgFQAGgFAJAAQAKAAAFAFQAFAFAAAKIAAAEQANgMANgGQANgGAPAAQAUAAARAJQAQAIAKAQQAKAQAAAWQAAAQgFAMQgHAOgJAJQgKAJgNAFQgOAFgPAAQgRAAgMgGQgNgGgMgMIAAA1QABAXgVAAQgMAAgEgGgAgcg6QgMALAAAWQAAAVAMALQAMALARAAQALAAAIgFQAKgFAGgJQAFgKAAgPQAAgNgFgKQgFgKgKgFQgJgGgLAAQgRAAgMAMg");
	this.shape_4.setTransform(168.25,382.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag0BCQgGgGAAgKIAAhgQAAgYAVAAQALAAAEAGQAFAFABALQAHgLAIgFQAHgGAOAAQANAAANAGQANAFAAAJQAAAHgFAEQgGAEgGAAIgMgCQgJgDgHAAQgJAAgFAEQgGAEgDAIQgEAIgBALQgBAKAAAQIAAAdQAAAKgGAGQgGAFgKAAQgJAAgGgFg");
	this.shape_5.setTransform(143.675,380.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag5A0QgYgTAAghQABgPAFgMQAGgOALgKQALgIAQgFQAPgGATAAQAZAAASAJQASAIAJAOQAIAOABAOQgBAMgIAEQgKAEgQAAIhUAAQABAMAFAJQAGAJAKAFQAJAEAKAAQAJAAAGgCQAGgBAGgDIALgGIANgKQADgCAHAAQAGAAAEACQAEADAAAGQAAAFgEAFQgFAHgJAGQgKAFgNAFQgOADgSAAQgoAAgXgTgAgYgkQgLAJgCARIBNAAQgCgSgJgIQgLgKgQABQgQgBgKAKg");
	this.shape_6.setTransform(126,380.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAmBDQgFgEgDgGIgGgPIgYhDIgXBDQgFAPgFAHQgGAHgNAAQgIAAgEgCQgFgDgEgEQgDgEgDgFIgDgKIgjhSQgFgMAAgEQAAgGAFgEQAGgFAIAAQAKAAAEAFQAEAFAEAMIAcBNIAahIIAGgPQACgEAFgEQAFgEAJAAQAJAAAGAEQAFAEACAEIAHAPIAZBIIAchNIAFgMQACgEAEgDQAEgDAHAAQAIAAAGAFQAFAEAAAGQAAAFgEALIgjBSIgIAQQgCAFgFADQgGAEgJAAQgKAAgGgEg");
	this.shape_7.setTransform(103.375,380.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBCQgQgFgLgKQgMgJgFgNQgGgNAAgQQAAgPAGgNQAGgNALgJQALgKAQgFQAQgFASAAQATAAAQAFQAQAFALAKQAMAJAGANQAFANAAAPQAAAQgGANQgGANgLAJQgLAKgQAFQgQAFgTAAQgTAAgPgFgAgVgnQgKAGgFAKQgFAKAAANQAAAOAFAKQAFAKAKAGQAJAFAMAAQATAAAMgMQALgMAAgVQAAgUgLgMQgMgMgTAAQgMAAgJAFg");
	this.shape_8.setTransform(80.575,380.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOBbQgHgFAAgKIAAiWQAAgLAHgFQAFgGAJAAQAKAAAFAGQAHAFAAALIAACWQAAAKgHAGQgFAFgKAAQgJAAgFgGg");
	this.shape_9.setTransform(66.5,377.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhIBZQgHgFAAgMIAAiPQAAgIADgFQADgGAGgCQAHgCAKAAIBsAAQAMAAAFAEQAFAEAAAGQAAAHgFAEQgFAEgMAAIhaAAIAAAwIBLAAQALAAAFAEQAGAEAAAGQAAAGgGADQgFAEgLABIhLAAIAAA9QAAAMgHAFQgGAGgLAAQgKAAgGgGg");
	this.shape_10.setTransform(53.125,377.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgsBXQgSgHgJgMQgIgLAAgMQAAgIAGgGQAFgFAIAAQAHAAAEADQAFAEADAGQAHANAKAGQAKAHAQgBQAOABAKgHQAIgGABgIQAAgMgKgGQgJgFgVgFQgXgHgQgGQgPgGgJgLQgJgLAAgPQAAgOAIgNQAJgMAQgIQARgHAWAAQASAAAOAEQAPAEAJAGQAJAGAGAIQAFAIAAAHQAAAIgGAFQgFAGgKgBQgHABgFgFQgFgEgGgIQgGgHgHgEQgIgEgLAAQgMAAgJAFQgIAGAAAIQAAAHAGAEQAHAFAKAEIAcAHQAVAGAOAGQANAHAIAKQAHAKAAANQAAATgJAOQgKAOgSAHQgTAHgZAAQgZAAgSgIg");
	this.shape_11.setTransform(203.35,292);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQAtIgJgvIAAgpIAzAAIAAApIgIAvg");
	this.shape_12.setTransform(189.675,280.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABcBYQgHgIAAgPIAAhNIgBgYQgCgJgFgHQgFgFgMgBQgKAAgHAGQgJAFgFAKQgEAMAAAcIAAA+QgBAPgGAIQgHAHgLAAQgJAAgHgHQgHgIAAgPIAAhJQAAgRgBgKQgBgKgGgGQgEgHgMAAQgXAAgIAQQgGAQgBAcIAAA/QABAPgHAIQgHAHgKAAQgLAAgHgHQgGgIgBgPIAAiEQAAgOAHgGQAFgHALAAQAJAAAGAGQAHAHAAALIAAAFQAMgPAOgHQANgGARgBQASABANAGQALAHAIAPQAMgPAOgHQANgGARgBQATAAAOAIQAOAHAGAPQAHAMAAAbIAABaQgBAPgGAIQgHAHgLAAQgLAAgGgHg");
	this.shape_13.setTransform(170.05,292);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag/BFQgZgZAAgsQAAgUAGgRQAGgSAMgNQAMgNARgGQASgHAUAAQAbAAAUAMQATALAKASQAKATAAATQAAAQgLAFQgKAGgSAAIhaAAQAAAQAGAMQAGAMALAGQAKAGAMAAQAIAAAHgCQAHgCAGgEIAMgJIAOgNQAEgDAHAAQAHAAAEAEQAFAEAAAHQAAAGgFAJQgFAIgKAIQgKAIgPAFQgPAFgUAAQgsAAgZgagAgbgxQgLAMgCAXIBTAAQgBgYgLgMQgMgMgSAAQgQAAgMANg");
	this.shape_14.setTransform(144.175,291.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRB3QgLgHgDgNQgEgNAAgWIAAhYIgGAAQgLAAgEgFQgGgFAAgHQAAgIAGgEQAFgFALAAIAFAAIAAgcIAAgSQABgGADgFQACgFAGgDQAFgDAGAAQAJAAAGAHQAFAFABAGQACAGAAAMIAAAgIAQAAQALAAAEAFQAGAEAAAIQAAAJgHAEQgIAEgOAAIgIAAIAABUIABARQAAAGADAEQADADAIAAIAMgBIAKgBQAGAAAFAEQAEAFAAAGQAAAMgNAGQgMAGgXAAQgUAAgMgIg");
	this.shape_15.setTransform(128.15,288.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag8B0QgRgLgKgQQgMgRAAgQQAAgJAHgHQAGgHALAAQAIAAAFAGQAFAFAFAKQAEAMAGAIQAGAIAJAFQALAFAQAAQAWAAANgKQAOgLABgPQgBgNgHgIQgIgIgMgEQgMgEgTgEQgbgHgSgIQgSgIgLgOQgLgPAAgVQAAgVALgQQAMgQAWgJQAUgJAdAAQAXAAARAGQAQAGALAJQALAKAGAKQAFALAAAKQAAAJgGAHQgHAHgJAAQgKAAgEgEQgEgFgGgJQgGgPgKgHQgKgIgUAAQgUAAgLAIQgMAJgBAMQAAAHAFAGQAEAFAHAEQAHAEAIACIAWAHQAWAFARAGQARAGANAIQALAIAHANQAHANAAATQAAAXgMASQgLASgXAKQgXALgeAAQglAAgYgOg");
	this.shape_16.setTransform(109.8,288.525);

	this.stem1 = new lib.stem3();
	this.stem1.name = "stem1";
	this.stem1.setTransform(207.8,141.2);

	this.stem2 = new lib.stem2();
	this.stem2.name = "stem2";
	this.stem2.setTransform(114.4,141.4);

	this.mouth3 = new lib.mouth3();
	this.mouth3.name = "mouth3";
	this.mouth3.setTransform(852.45,491.1,1,1,0,0,0,0,-0.2);

	this.mouth2 = new lib.mouth2();
	this.mouth2.name = "mouth2";
	this.mouth2.setTransform(847.65,441.65);

	this.mouth1 = new lib.mouth1();
	this.mouth1.name = "mouth1";
	this.mouth1.setTransform(852.75,400.15);

	this.blush2 = new lib.blush2();
	this.blush2.name = "blush2";
	this.blush2.setTransform(851.55,307.4);

	this.blush1 = new lib.blush1();
	this.blush1.name = "blush1";
	this.blush1.setTransform(844.8,260.05);

	this.eyes2 = new lib.eyes2();
	this.eyes2.name = "eyes2";
	this.eyes2.setTransform(856.65,151.55);

	this.eyes1 = new lib.eyes1();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(855.05,101.45,1,1,0,0,0,0,-0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgsBXQgSgHgIgMQgJgMAAgMQAAgHAFgFQAGgGAIAAQAIAAADADQAEAEAEAGQAHANAKAHQAKAFARAAQAOAAAIgFQAJgHAAgIQABgNgKgFQgJgGgVgEQgYgHgPgGQgPgGgJgLQgJgKAAgQQAAgOAJgMQAHgNARgIQAQgHAXAAQARAAAPAEQAOAEAKAGQAJAGAGAIQAFAIAAAHQAAAIgFAFQgGAGgKgBQgHABgFgFQgFgEgGgIQgGgHgHgEQgIgEgLAAQgNAAgHAFQgJAFAAAJQAAAHAGAEQAGAGAKACIAcAIQAWAGAOAGQAOAHAHAKQAHAKAAANQAAATgKAOQgJAOgTAHQgRAHgaAAQgZAAgSgIg");
	this.shape_17.setTransform(915.85,355.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQAtIgJgvIAAgpIAzAAIAAApIgIAvg");
	this.shape_18.setTransform(902.175,343.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAlBlIAAhPQAAgWgHgLQgHgMgSAAQgMAAgKAHQgKAHgFALQgEALAAAaIAAA+QAAAOgGAHQgGAIgLAAQgXAAAAgdIAAjJQAAgOAGgHQAGgIALAAQALAAAGAIQAGAHAAAOIAABFQAJgKAJgGQAIgGAKgDQAKgDAMAAQARAAAOAHQAOAIAIAOQAFAJABAKQACAKAAANIAABZQAAAOgGAHQgHAIgKAAQgXAAAAgdg");
	this.shape_19.setTransform(887.475,351.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgRB3QgLgHgEgNQgDgNAAgWIAAhYIgHAAQgJAAgFgFQgGgFAAgHQAAgIAGgEQAFgFAKAAIAGAAIAAgcIAAgSQABgGACgFQAEgFAEgDQAGgDAGAAQAJAAAGAHQAFAFABAGQACAGgBAMIAAAgIARAAQAKAAAGAFQAFAEAAAIQAAAJgHAEQgIAEgOAAIgJAAIAABUIABARQABAGAEAEQADADAHAAIALgBIALgBQAGAAAFAEQAEAFAAAGQAAAMgMAGQgMAGgYAAQgVAAgLgIg");
	this.shape_20.setTransform(871.25,351.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAuBYQgGgHAAgMIAAgGQgJAKgJAHQgJAHgLAEQgKAEgOAAQgRgBgNgGQgOgIgHgMQgJgPAAgbIAAhcQAAgOAGgHQAHgHAKAAQALAAAGAHQAHAHAAAOIAABKQAAAQACALQADALAHAGQAHAHAMAAQALgBALgGQAKgIAFgLQAEgKAAggIAAg5QAAgOAGgHQAHgHAKAAQALAAAGAHQAGAHAAAOIAACGQAAAOgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_21.setTransform(853.875,355.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmBYQgQgHgMgMQgNgNgGgSQgHgRAAgVQAAgUAHgSQAGgRAMgNQAMgNARgGQASgHAUAAQAVAAARAHQARAGANANQAMANAHASQAGARAAAUQAAAVgGARQgHASgMANQgNANgRAGQgRAHgVAAQgUAAgSgHgAgXg0QgLAHgFANQgGAOAAASQAAASAGAOQAFAOALAHQAJAHAOAAQAVAAAMgQQANgQAAgcQAAgcgNgQQgMgQgVAAQgNAAgKAIg");
	this.shape_22.setTransform(832.75,355.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABRB4QgHgHAAgOIAAisIgoCeIgGAXQgDAIgGAFQgIAHgLgBQgIAAgGgDQgGgFgEgFQgDgGgCgIIgEgPIgoieIAACsQAAAOgGAHQgHAHgLAAQgKABgHgIQgGgHAAgOIAAjFQAAgRAIgGQAJgFAPAAIAQAAQAOgBAGADQAHADACAGQADAHAFAPIAjCIIAliIQADgPAEgHQADgGAGgDQAGgDAPABIAPAAQAOAAAJAFQAJAGAAARIAADFQAAAOgGAHQgHAHgLAAQgKAAgGgHg");
	this.shape_23.setTransform(807.6,351.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAlBlIAAhPQAAgWgHgLQgHgMgSAAQgMAAgKAHQgKAHgFALQgEALAAAaIAAA+QAAAOgGAHQgGAIgLAAQgXAAAAgdIAAjJQAAgOAGgHQAGgIALAAQALAAAGAIQAGAHAAAOIAABFQAJgKAJgGQAIgGAKgDQAKgDAMAAQARAAAOAHQAOAIAIAOQAFAJABAKQACAKAAANIAABZQAAAOgGAHQgHAIgKAAQgXAAAAgdg");
	this.shape_24.setTransform(893.125,210.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgsBXQgSgIgIgLQgJgLAAgMQAAgIAFgGQAGgFAIAAQAIAAADADQAEAEAEAGQAHANAKAGQAKAHARAAQAOAAAIgHQAJgGAAgIQAAgMgJgGQgKgFgTgGQgZgGgPgGQgPgGgJgLQgJgLAAgPQAAgOAJgNQAHgMARgIQAQgHAYAAQAQAAAPAEQAOADAKAHQAJAGAGAIQAFAHAAAIQAAAIgFAFQgGAFgKAAQgHAAgFgEQgFgEgHgIQgFgHgHgEQgIgEgKAAQgOAAgHAFQgJAFAAAJQAAAHAGAFQAGAFAKADIAcAHQAWAGAOAGQAOAHAHAKQAHAKAAANQAAATgKAOQgJANgTAIQgRAHgaAAQgZAAgSgIg");
	this.shape_25.setTransform(873,213.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAuBYQgGgHAAgNIAAgFQgJAKgJAHQgJAIgLADQgKAEgOgBQgRABgNgIQgOgGgHgNQgJgPAAgbIAAhcQAAgOAGgHQAHgHAKAAQALAAAGAHQAHAHAAAOIAABKQAAAQACALQADALAHAGQAHAGAMAAQALABALgIQAKgGAFgMQAEgKAAggIAAg5QAAgOAGgHQAHgHAKAAQALAAAGAHQAGAHAAAOIAACGQAAAOgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_26.setTransform(852.975,213.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQB6QgGgHgBgOIAAjJQABgOAGgHQAGgIAKAAQAKAAAHAIQAHAHgBAOIAADJQABAOgHAIQgHAHgKAAQgJAAgHgIg");
	this.shape_27.setTransform(837.65,210.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhIB9QgRAAgHgHQgHgIAAgQIAAi7QAAgRAHgHQAIgHAQAAIBQAAQASAAANACQANACAKAGQAKAGAHAIQAGAIAEAKQAEAKgBALQAAAlglASQAxAOAAAuQAAAVgLARQgKARgTAIQgLAEgPACQgPACgUAAgAg0BXIA1AAQA0AAAAglQgBgTgNgIQgNgJgaAAIg0AAgAg0gVIAuAAQASAAALgEQAKgEAFgKQAFgHAAgJQAAgTgOgGQgOgGgaAAIgpAAg");
	this.shape_28.setTransform(820.85,210.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgsBXQgSgHgIgMQgJgMAAgLQAAgIAFgFQAGgGAIAAQAIAAADADQAEAEAEAGQAHANAKAHQAKAFARAAQANAAAKgFQAIgHABgIQAAgMgKgGQgJgGgVgEQgYgHgPgGQgPgGgJgLQgJgKAAgQQAAgOAIgMQAJgNAQgIQAQgHAXAAQARAAAPAEQAOAEAKAGQAKAGAFAIQAFAIAAAHQAAAIgGAFQgFAGgKgBQgHABgFgFQgFgEgGgIQgGgHgHgEQgIgEgLAAQgNAAgHAFQgJAFAAAJQAAAHAGAEQAHAGAJACIAdAIQAVAGAOAGQAOAHAHAKQAHAKAAANQAAATgJAOQgKAOgTAHQgRAHgaAAQgZAAgSgIg");
	this.shape_29.setTransform(895.7,36.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgQAtIgJgvIAAgpIAzAAIAAApIgIAvg");
	this.shape_30.setTransform(882.025,24.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag/BFQgZgZAAgsQAAgUAGgRQAGgSAMgNQAMgNARgGQASgHAUAAQAbAAAUAMQATALAKASQAKATAAATQAAAQgLAFQgKAGgSAAIhaAAQAAAQAGAMQAGAMALAGQAKAGAMAAQAIAAAHgCQAHgCAGgEIAMgJIAOgNQAEgDAHAAQAHAAAEAEQAFAEAAAHQAAAGgFAJQgFAIgKAIQgKAIgPAFQgPAFgUAAQgsAAgZgagAgbgxQgLAMgCAXIBTAAQgBgYgLgMQgMgMgSAAQgQAAgMANg");
	this.shape_31.setTransform(867.475,36.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhNB9QgKgFAAgLQAAgIAFgFQAEgEAKAAIAHABIAIABQAIAAAFgCQAEgDAEgFIAIgSIAFgKIg6iQQgFgNAAgFQAAgGADgFQADgFAGgEQAFgCAGgBQAKABAFAGQAFAHAEAMIAmBxIAmhpIAIgVQADgIAFgCQAEgCAHgBQAFABAFACQAFADADAFQACAFAAAFIgCAJIgEANIg9CdQgHAWgIAMQgHALgMAHQgMAGgVABQgVgBgKgEg");
	this.shape_32.setTransform(847.275,39.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhAB9QgRAAgIgHQgGgHgBgRIAAi7QAAgLAEgHQADgHAHgDQAHgDALAAICFAAQALAAAHAFQAFAFAAAJQAAAJgFAGQgHAFgLAAIhyAAIAAA9IBpAAQALAAAGAGQAGAFgBAIQABAIgGAFQgGAGgLAAIhpAAIAABHIB1AAQANAAAFAGQAHAFAAAJQAAAJgHAGQgFAFgNAAg");
	this.shape_33.setTransform(827.15,32.575);

	this.flowercolors = new lib.flowerp();
	this.flowercolors.name = "flowercolors";
	this.flowercolors.setTransform(140.55,499.1);

	this.stem3 = new lib.stem1();
	this.stem3.name = "stem3";
	this.stem3.setTransform(60.5,147.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2,1,1).p("EArIgqLIAAmQIeUAAIAAGQIAAWqI+UAAIAA2qIeUAAEArIAH1IAAmaIAAv7IAAlBEBJcgOgIAAP7IAAAAIAAGaEBJcgThIAAFBEArIgOgIeUAAEBJcABbI+UAAEArIAH1IeUAAIAAX5I+UAAgEhJbAKeIAAjRMAnOAAAIAADRgA4/nyIAAFeMgwcAAAIAAleMAAAgopMAwcAAAgEhJbgHyMAwcAAAEgiNAKeMAAAAl+MgnOAAAMAAAgl+");
	this.shape_34.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.stem3},{t:this.flowercolors},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.eyes1},{t:this.eyes2},{t:this.blush1},{t:this.blush2},{t:this.mouth1},{t:this.mouth2},{t:this.mouth3},{t:this.stem2},{t:this.stem1},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Character
	this.face2 = new lib.arcadebuttongreen();
	this.face2.name = "face2";
	this.face2.setTransform(492,524);
	new cjs.ButtonHelper(this.face2, 0, 1, 2, false, new lib.arcadebuttongreen(), 3);

	this.instance = new lib.Pollen();
	this.instance.setTransform(478.25,286.25);

	this.resetb = new lib.arcadebuttonred();
	this.resetb.name = "resetb";
	this.resetb.setTransform(624,524);
	new cjs.ButtonHelper(this.resetb, 0, 1, 2, false, new lib.arcadebuttonred(), 3);

	this.face1 = new lib.arcadebuttonblue();
	this.face1.name = "face1";
	this.face1.setTransform(365,524);
	new cjs.ButtonHelper(this.face1, 0, 1, 2, false, new lib.arcadebuttonblue(), 3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhmElQgMgYAAgvIAAmxQAAhpApAAQAVAAAJAZQAJAZABAvQAPgvAQgZQAPgZAaAAQAaAAAZAZQAZAZAAAoQAAAdgKASQgLATgMAAQgFAAgRgLQgSgLgOAAQgSAAgLATQgLARgHAkQgGAjgDAxQgCAwAABGIAACCQAAAvgMAYQgMAYgSAAQgSAAgMgYg");
	this.shape_35.setTransform(670.825,71.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhxDnQgthVAAiSQAAhFALg6QALg8AVgqQAVgqAggWQAegXAlAAQAxAAAjAnQAjAmARA9QASA9AAA/QAAA6gSASQgTARggAAIiiAAQAAA1ALAoQALApATAUQASAVAWAAQAOAAANgGQAMgHAMgOQAMgOAKgQIAZgsQAGgKAMAAQANAAAIANQAIANAAAYQAAAVgJAdQgJAcgRAaQgTAagaARQgcARgjAAQhQAAgshWgAgwinQgUAogEBOICWAAQgDhQgUgnQgUgoghAAQgeAAgUApg");
	this.shape_36.setTransform(636.5,71.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("ABKErQgKgSgFgaIgMhCIgvkvIguEvQgJA/gKAhQgLAggbAAQgOAAgKgKQgKgKgGgTQgGgTgFgZIgIgoIhDl0QgLg1AAgUQAAgZALgUQALgUAQAAQAUAAAIAXQAHAVAIA1IA2FbIAylCQAJgzADgSQAEgTALgQQAKgSASAAQASAAALASQAKAQAFAUQAEATAHAxIAyFCIA3lbIAJg2QAEgRAHgMQAJgOAPAAQAPAAALAUQAKATABAaQAAAYgKAxIhFF0IgNBEQgFAVgKARQgLARgSAAQgUAAgLgSg");
	this.shape_37.setTransform(592.35,71.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhEEmQgegXgWgqQgXgrgLg6QgLg6AAhGQAAhGALg6QAMg7AWgqQAVgpAfgXQAfgXAlAAQAlAAAfAXQAfAXAWAqQAWArAMA6QALA6AABFQAABGgLA6QgMA7gWAqQgWAqgfAXQgeAXgmAAQgmAAgegXgAgriwQgSAXgKAuQgLAuAAA9QAAA9ALAuQAJAtATAZQASAYAZAAQAlAAAXg1QAWg2AAheQAAhegWg1QgXg1glAAQgYAAgTAYg");
	this.shape_38.setTransform(547.925,71.875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdGYQgMgZAAguIAAqiQAAguAMgZQALgYASAAQATAAALAYQAMAYAAAvIAAKiQAAAwgMAYQgMAYgSAAQgSAAgLgZg");
	this.shape_39.setTransform(520.45,60.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AiOGPQgOgZAAg0IAAqDQABgkAFgXQAHgXAMgKQAMgLAUAAIDUAAQAXAAAKASQAKASAAAdQAAAdgKATQgKARgXAAIixAAIAADWICUAAQAVAAALASQAJARABAdQAAAcgLARQgKARgVAAIiUAAIAAEUQAAA0gNAaQgNAZgTAAQgVAAgMgag");
	this.shape_40.setTransform(494.4,61.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgfA/QgOgXAAgoQAAgjANgZQAOgZASAAQATAAANAZQAOAYAAAkQAAAngOAYQgNAXgTAAQgSAAgNgXg");
	this.shape_41.setTransform(448.55,94.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhQEjQgggagPgmQgQgnAAgnQAAgZAKgTQALgSAPAAQANAAAGAMQAIAMAGAWQANAqASAUQARAVAfAAQAYAAARgVQAQgVAAgbQAAgpgRgTQgQgTgmgRQgrgUgbgVQgbgWgRgjQgPgkAAg1QAAgvAOgpQAPgqAegYQAdgaApAAQAgAAAZANQAaANASAVQARAVAJAZQAJAaAAAZQAAAagKASQgJARgSAAQgNAAgIgOQgKgOgMgbQgJgXgNgOQgNgNgVAAQgWAAgPASQgPASgBAaQABAZAKAQQALAPAUALQASAKAfAPQAoARAYAZQAZAXANAiQANAhgBArQAABAgRAvQgQAtghAYQghAYguAAQguAAgggag");
	this.shape_42.setTransform(421.7,71.875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("ACRGRQgMgYAAgwIAApAIhIIUQgHA0gFAYQgEAYgMAUQgMAUgVAAQgPAAgLgNQgLgNgGgUQgGgUgDgYIgIgyIhIoUIAAJAQAAAwgLAYQgMAYgTAAQgSAAgMgXQgLgYAAgxIAAqUQAAg3APgTQAPgTAaAAIAcAAQAZAAAMAIQALAJAGAWQAFAWAIAyIBAHJIBBnJQAHgyAFgWQAGgWAMgJQALgIAZAAIAdAAQAaAAAPATQAQATAAA3IAAKUQAAAwgMAYQgMAYgTAAQgSAAgLgYg");
	this.shape_43.setTransform(378.75,61.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.face1},{t:this.resetb},{t:this.instance},{t:this.face2}]}).wait(1));

	// Frame
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_44.setTransform(480,320);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_45.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,305,475,326);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FF9999",
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