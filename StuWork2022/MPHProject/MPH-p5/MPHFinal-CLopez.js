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


(lib.yellowball = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AKMAAQAAEEi/C4QgMALgMALQg/A3hHAlQiIBFinAAQkNAAi/i3Qi/i4AAkEQAAkDC/i4QC/i3ENAAQEOAAC/C3QBcBZAwBrQAlBSAKBeQAEAjAAAkg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AnMG8Qi+i4gBkEQABkCC+i5QC/i3ENAAQEOAAC/C3QBbBZAxBrQAkBTALBdQADAkABAjQAAEEi/C4IgZAVQg+A4hIAkQiIBGimAAQkNAAi/i3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowball, new cjs.Rectangle(-66.1,-63.7,132.3,127.4), null);


(lib.sword = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AhFNmIAAjcIgyi0IkYAAIjmgoIAKjIICMg8IFKAeIgyjRIgemGIAUmQIDbigIA8BuIBkCCIAKCgIBQEiIgeCCIAADvIAoCMIBkAAICWgKIBuBkIhQBQIiWAUIhaCgIAyDwIl7CCIgogy");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("Ag7OOIgKgoIAAjcIgyi0IkYAAIjmgoIAKjIICMg8IFKAeIgyjRIgemGIAUmQIDbigIA8BuIBkCCIAKCgIBQEiIgeCCIAADvIAoCMIBkAAICWgKIBuBkIhQBQIiWAUIhaCgIAyDwIl7CCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sword, new cjs.Rectangle(-64,-97,128,194), null);


(lib.rman = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FF00").s().p("Ap6CMIAKlJICqgUIgoENIRpAUIgoCCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rman, new cjs.Rectangle(-63.5,-21,127,42), null);


(lib.rightredeye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF3300").ss(1,1,1).p("AhXAAIgJBKIAlAcIBSAAIBBglIAJhSIAAhBIhTgSIg3AAg");
	this.shape.setTransform(20.8,16.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666600").ss(1,1,1).p("AjYgIIAbBkIA4BKIAuAcIBlAAICBhcIBKhdIAAgtIgJhcIg3gTIhvguIiTAlIhBAcIglAug");
	this.shape_1.setTransform(21.725,19.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF33").s().p("Ag7BmIglgcIAJhKIAuhlIA3AAIBTATIAABAIgJBTIhBAlg");
	this.shape_2.setTransform(20.8,16.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("AhXDCIgugcIg4hKIgbhkIAJhKIAlguIBBgcICTglIBvAuIA3ATIAJBcIAAAtIhKBdIiBBcgAhggbIgJBJIAlAcIBSAAIBBglIAJhSIAAhBIhTgSIg3AAg");
	this.shape_3.setTransform(21.725,19.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightredeye, new cjs.Rectangle(-1,-1,45.5,40.9), null);


(lib.reyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAFdQAFAYAGAXQAzCkBHAAQA4AAArhnQAMgbAKgiQAyikAAjoQAAjngyikQgKgigMgbQgrhng4AAQhHAAgzCkQgOAzgLA6Qgxh9hFAAQhHAAgyCHQgyCHAADAQAAC/AyCIQAyCHBHAAQBHAAAziHQAFgOAFgPgAgOkeQgYB9AACcIAAAFAgmAGIAAALQACC9AkCP");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABdDhQgOgSgLghQgZhIAAhmQAAhlAZhIQAFgOAFgMQAWguAcAAQAjAAAZBIQAZBIAABlQAABmgZBIQgZBIgjAAQgTgBgQgUgAi6DBIgEgMQgWhCAAhdQAAhbAWhBIAEgNQAWg1AcAAQAgAAAWBCQAWA9ABBVIAAAFIAAAFIAAAMQgBBVgWA+QgWBAggABQgcgBgWg0g");
	this.shape_1.setTransform(2.125,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AALGLIgLguQgkiPgCi9IAAgMIAAgFIAAgEQgBhWgWg9QgWhCggAAQgcAAgWA1QgUg1gdAAQggAAgWBCQgXBBAABbQAABdAXBCQAWBAAgABQAdgBAUg0QAWA0AcABQAggBAWhAQAWg+ABhVQACC9AkCPIgKAcQgzCHhHAAQhHAAgyiHQgyiHAAjAQAAi+AyiHQAyiIBHAAQBFAAAxB+QALg7AOgyQAzilBHAAQA4AAArBoQAMAaAKAjQAyCjAADnQAADogyCjQgKAjgMAbQgrBmg4ABQhHAAgzilgAAEilQgYBIAABlQAABmAYBIQAZBIAjAAQAcAAAWguQAQAUATABQAjAAAZhIQAZhIAAhlQAAhmgZhIQgZhIgjAAQgcAAgWAuQgQgUgTgBQgjABgZBHgAgmgEQAAidAYh8QgYB8AACdg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.reyes, new cjs.Rectangle(-31.4,-56.9,62.9,113.9), null);


(lib.reyebrown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AKoCWIiCizIiChuIi+gUIi0gKIrZAAICMENIHqgKIC9gKIC0geIB4AeIBGA8IBaAeg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666600").s().p("AH+CMIhGg8Ih4geIi0AeIi9AKInqAKIiMkNILZAAIC0AKIC+AUICCBuICCCzIhQAUg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.reyebrown, new cjs.Rectangle(-68.9,-18,137.9,36), null);


(lib.rboot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666600").ss(1,1,1).p("AlHGgIAAimIgJi5Igvi5IAcjUIBmhKICLgJIBuAuIASBTIACApQAAAvgLAXQgIASgjBCQgHAOgFAMQgSArAAAWQAAATASANQALAHARAGQAWAIAXADIBmgvIBvAAICUA4IgTBBIhKB4IgSBAIhKAlIhTATImEASg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF33").s().p("AlHD5IgJi4Igvi5IAcjUIBmhKICLgJIBuAuIASBTIACApQAAAvgLAXIgrBUIgMAaQgSArAAAWQAAASASANQALAIARAGQAWAIAXADIBmgvIBvAAICUA4IgTBBIhKB3IgSBBIhKAlIhTATImEASIg3Acg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rboot, new cjs.Rectangle(-39.3,-42.6,78.69999999999999,85.2), null);


(lib.nosegreen = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AhZHMIkihkIgei0ICghaICCgUIgokrIAejmIC9geIA8AyIB4AoIAeCMIgKCqIAACVIBuA8IAoBaIgeCCIgeBkIhGAoIhkAKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AhZHMIkihkIgei0ICghaICCgUIgokrIAejmIC9geIA8AyIB4AoIAeCMIgKCqIAACVIBuA8IAoBaIgeCCIgeBkIhGAoIhkAKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nosegreen, new cjs.Rectangle(-42,-50,84,100), null);


(lib.lip = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("APVhPIlAhkIkihuInVgyIlKAyIn+AAIiWDSIhGCpIgSAbQgNAbAfAGQAgAHBSAlQApATAjARIFKAAIGkBQICggUIEDAyIBaAAIBkgKIDcAKIF8AAIBageIBGhQIAeiCIAAhkgAtkhPIGaAUIDmgKIC+geIFdBGIFeBPIDwAKIBQiL");
	this.shape.setTransform(0.0204,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("AJjFUIjcgKIhkAKIhaAAIkDgyIigAUImkhQIlKAAQgjgSgpgSQhSgmgggGQgfgGANgcIASgaIBGipICWjSIH+AAIFKgyIHVAyIEiBuIFABkIhQCLIjwgKIlehPIldhGIi+AeIjmAKImagUIGaAUIDmgKIC+geIFdBGIFeBPIDwAKIBQiLIDIBPIAABkIgeCCIhGBQIhaAeg");
	this.shape_1.setTransform(0.0204,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lip, new cjs.Rectangle(-119,-35,238.1,70), null);


(lib.leyebrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AqnCWICCizICChuIC+gUIC0gKILZAAIiMENInqgKIi9gKIi0geIh4AeIhGA8IhaAeg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666600").s().p("AqnCWICCizICChuIC+gUIC0gKILZAAIiMENInqgKIi9gKIi0geIh4AeIhGA8IhaAeg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leyebrow, new cjs.Rectangle(-68.9,-18,137.9,36), null);


(lib.leftredeye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666600").ss(1,1,1).p("AjrAAIA4BvIBcAuIBuAJICnhAIAuhUIAAhbIhKhKIhKgSIhlAAIimAuIguBBgAg7gtIgJA/IAJAvIBSgKIBTglIgJg/IgbhKIg4AJg");
	this.shape.setTransform(23.575,16.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF33").s().p("AhXAuIAKhAIBKhAIA2gKIAcBKIAJBAIhTAlIhSAKg");
	this.shape_1.setTransform(25.425,13.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3300").s().p("AhXCdIhcguIg4hvIAKg2IAuhBICmguIBlAAIBKASIBKBKIAABbIguBUIinBAgAAOhuIhJBBIgJA/IAJAvIBSgKIBTglIgJg/IgbhKg");
	this.shape_2.setTransform(23.575,16.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftredeye, new cjs.Rectangle(-1,-1,49.2,35.3), null);


(lib.lboot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666600").ss(1,1,1).p("AihHKIGEhKICwgvIAJivIg4k6IhckMIgcglIhvATIhlAbIhTAcIASC5IBmCdIgKBcIicASIiUgSIhUASQgQgEgQABQggADAAAcQAAAugKAlIADAhQAEAlAMAXQASAlAvBKIAuAbg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF33").s().p("AkZGbIgugbQguhKgTglQgMgXgEglIgCghQAJglAAguQAAgcAggDQARgBAPAEIBUgSICUASICcgSIAJhcIhkidIgTi5IBSgcIBmgbIBvgTIAcAlIBcEMIA3E6IgJCvIivAvImDBKg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lboot, new cjs.Rectangle(-42.1,-46.7,84.30000000000001,93.5), null);


(lib.larm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FF00").s().p("ArUDDIAKiCIQZA8IDclxICqAeIjIHLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.larm, new cjs.Rectangle(-72.5,-24.5,145,49), null);


(lib.insideshades = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AsLCvIhai9IgUg8IA8goIBugUICWgKIBugoIDIAAIBugKIBuAyIg8CCIgyCBIh4BGIlKAUgAEsCRIhQifIAAiWIAygeICqAUICMAAIC0geICCBaIgKB3Ig8CWImGAog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.insideshades, new cjs.Rectangle(-89,-20.5,178,41), null);


(lib.insidegreen = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666600").s().p("AlzHBQiZi6AAkHQAAkGCZi6QCbi6DYAAQDaAACZC6QCaC6AAEGQAAEHiaC6QiZC6jaAAQjYAAibi6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.insidegreen, new cjs.Rectangle(-52.5,-63.5,105,127), null);


(lib.hat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("ADXCbIEiBkIB4CCIiWAoIkiAAIjvgUIl8AAIjcAKIAAiWIAygoICggKICMAAIhaiCIjmhQIkOg7IAKigIBahQIBQg8IBugoICWgeICWAAIGPAeIJsAUICMAeIAeBaIAKBuIhQBuIhaBPIi0AeIjIAKIh4Ae");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AC5GpIjvgUIl8AAIjcAKIAAiWIAygoICggKICMAAIhaiCIjmhQIkOg7IAKigIBahQIBQg8IBugoICWgeICWAAIGPAeIJsAUICMAeIAeBaIAKBuIhQBuIhaBPIi0AeIjIAKIh4AeIgKAoIEiBkIB4CCIiWAog");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat, new cjs.Rectangle(-90.4,-43.5,180.9,87), null);


(lib.chain = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("ADDhgIBuAHICMgoIBGiMIAUigABVhoIgyBLIgKB3IiVAoIiWgeIgeBQIAABuIDIAoIBkgeIATCqABVhoIBuAIAD7HWIgQigID6geIgojSIhagKIh4AKIhagKIAyicAoWnVIAeC0ICWBuIDcA8IDbAP");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhKEfIgUipIhkAeIjIgoIAAhtIAehQICWAeICWgoIAKh4IAyhLIBtAHIgyCeIBaAKIB4gKIBaAKIAoDRIj6AeIAPCfg");
	this.shape_1.setTransform(9,18.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chain, new cjs.Rectangle(-54.5,-47.9,109,95.9), null);


(lib.bargrey = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape.setTransform(10.475,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(5.475,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAbIgIgDIAAgKIAAAAQAEADAGACQAFACAFAAQAFAAADgCQAEgCAAgEQAAgEgCgBIgHgDIgEgBIgGgBQgHgCgDgDQgDgEAAgFQAAgDABgDIAEgGIAHgDQAFgCAEAAIAKACIAIACIAAAKIAAAAIgJgEIgKgCQgEAAgDACQgEACAAAEQAAADACACQACACAFABIAFABIAFABQAGABAEADQADAEAAAGQAAAHgGAFQgGAFgKAAQgGAAgFgCg");
	this.shape_2.setTransform(-0.025,0.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_3.setTransform(-5.675,0.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape_4.setTransform(-10.3,0.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// rules
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C4C4C4").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_5.setTransform(-0.025,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_6.setTransform(-0.025,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_7.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// box
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0033").ss(1,1,1).p("AlnhZILPAAIAACzIrPAAg");
	this.shape_8.setTransform(-0.025,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C4C4C4","#808080","#C4C4C4"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_9.setTransform(-0.025,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#E1E1E1","#666666","#E1E1E1"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_10.setTransform(-0.025,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#666666","#E1E1E1","#666666"],[0,0.38,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_11.setTransform(-0.025,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AlnBuIAAjbILPAAIAADbg");
	this.shape_12.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-11,74,22);


(lib.bargold = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgXAlIAAgKIAKgJIAJgJIAMgNQADgFABgHQgBgFgDgEQgEgDgGAAQgEAAgFACQgGACgEADIgBAAIAAgKIAJgEIALgBQALAAAGAFQAGAGABAJIgBAHIgEAHIgEAGIgHAGIgJAKIgKAIIAlAAIAAAJg");
	this.shape.setTransform(13.05,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_1.setTransform(7.875,0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgEAlIAAg2IAJAAIAAA2gAgEgaIAAgJIAJAAIAAAJg");
	this.shape_2.setTransform(4.525,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgKAmIAAguIgHAAIAAgHIAHAAIAAgCQAAgKAEgFQAFgFAJAAIAFAAIAFABIAAAIIgBAAIgEgBIgEAAQgGAAgDACQgBADAAAHIAAACIAPAAIAAAHIgPAAIAAAug");
	this.shape_3.setTransform(1.75,-0.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_4.setTransform(-2.275,0.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgRAXQgFgFAAgKIAAgjIAKAAIAAAeIAAAHIACAFQAAABAAAAQABABAAAAQABABAAAAQABAAAAABIAGAAQADAAAEgBIAIgGIAAgnIAJAAIAAA2IgJAAIAAgHIgJAGQgEACgEAAQgJAAgFgFg");
	this.shape_5.setTransform(-7.525,0.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgRAVQgHgIAAgNQAAgMAHgIQAHgIAKAAQAMAAAGAIQAHAIAAAMQAAANgHAIQgGAIgMAAQgKAAgHgIgAgKgPQgFAFAAAKQAAAKAFAGQAEAFAGAAQAHAAAFgFQAEgGAAgKQAAgKgEgFQgFgFgHAAQgGAAgEAFg");
	this.shape_6.setTransform(-13.675,0.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// rules
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4ECA4").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_7.setTransform(-0.025,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_8.setTransform(-0.025,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DCC81B").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_9.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(1));

	// box
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F8F2C2","#DCC81B","#F8F2C2"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_10.setTransform(-0.025,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FCF9E0","#DCC81B","#FCF9E0"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_11.setTransform(-0.025,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#DCC81B","#F9EFCA","#DCC81B"],[0,0.408,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_12.setTransform(-0.025,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AlnBuIAAjbILPAAIAADbg");
	this.shape_13.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-11,72,22);


(lib.barblue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgTAlIAAgIIAPAAIAAgvIgPAAIAAgHIAHgBIAFgBIAEgEQABgCAAgCIAHAAIAABAIAPAAIAAAIg");
	this.shape.setTransform(13.125,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_1.setTransform(7.875,0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAlIAAg2IAJAAIAAA2gAgEgaIAAgJIAJAAIAAAJg");
	this.shape_2.setTransform(4.525,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAmIAAguIgHAAIAAgHIAHAAIAAgCQAAgKAEgFQAFgFAJAAIAFAAIAFABIAAAIIgBAAIgEgBIgEAAQgGAAgDACQgBADAAAHIAAACIAPAAIAAAHIgPAAIAAAug");
	this.shape_3.setTransform(1.75,-0.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_4.setTransform(-2.275,0.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAXQgFgFAAgKIAAgjIAKAAIAAAeIAAAHIACAFQAAABAAAAQABABAAAAQABABAAAAQABAAAAABIAGAAQADAAAEgBIAIgGIAAgnIAJAAIAAA2IgJAAIAAgHIgJAGQgEACgEAAQgJAAgFgFg");
	this.shape_5.setTransform(-7.525,0.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAVQgHgIAAgNQAAgMAHgIQAHgIAKAAQAMAAAGAIQAHAIAAAMQAAANgHAIQgGAIgMAAQgKAAgHgIgAgKgPQgFAFAAAKQAAAKAFAGQAEAFAGAAQAHAAAFgFQAEgGAAgKQAAgKgEgFQgFgFgHAAQgGAAgEAFg");
	this.shape_6.setTransform(-13.675,0.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// rules
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AED8EA").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_7.setTransform(-0.025,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_8.setTransform(-0.025,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D8BB2").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_9.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(1));

	// box
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#C9DBE4","#47A4CB","#DEE8EC"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_10.setTransform(-0.025,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFFF","#47A4CB","#FFFFFF"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_11.setTransform(-0.025,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#47A4CB","#C9E0E8","#47A4CB"],[0,0.353,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_12.setTransform(-0.025,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AlnBuIAAjbILPAAIAADbg");
	this.shape_13.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-11,72,22);


(lib.shadws = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.insideshades();
	this.instance.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(1,1,1).p("ADcikIAACWIBQCfICCAyIGGgoIA8iWIAKh3IiChaIi0AeIiMAAIiqgUgAt5hKIA8goIBugUICWgKIBugoIDIAAIBugKIBuAyAtlgOIBaC9IC0AeIFKgUIB4hGIAyiBIA8iCIEDgU");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadws, new cjs.Rectangle(-90,-21.5,180,43), null);


(lib.rightshoe = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.rboot();
	this.instance.setTransform(38.35,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightshoe, new cjs.Rectangle(-0.5,-0.5,77.8,84.2), null);


(lib.leftshoe = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.lboot();
	this.instance.setTransform(41.15,45.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftshoe, new cjs.Rectangle(-0.5,-0.5,83.3,92.6), null);


// stage content:
(lib.MPHFinalCLopez = function(mode,startPosition,loop,reversed) {
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
		    this.redyeyes.x = 479;
		    this.redyeyes.y = 213.45;
			this.shades.x = 482.55;
		    this.shades.y = 208.9;
			this.chain.x = 471.45;
		    this.chain.y = 307;
			this.larm.x = 670.5;
		    this.larm.y = 322.45;
			this.rarm.x = 279.5;
		    this.rarm.y = 318.95;
			this.leftshoe.x =416.85;
		    this.leftshoe.y = 541.5;
			this.rightshoe.x = 539.6;
		    this.rightshoe.y = 537.35;
			this.insidebrown.x = 472.35;
		    this.insidebrown.y = 374.9;
			this.sword.x = 721.75;
		    this.sword.y = 235.6;
		}
		
		this.resetbtn.addEventListener("click", reset_btn.bind(this));
		
		function reset_btn() {
		    this.hat.x = 130;
		    this.hat.y = 123;
		}
		
		this.insidegreen.on("pressmove", dragMe);
		this.insidebrown.on("pressmove", dragMe);
		this.leyebrow.on("pressmove", dragMe);
		this.reyebrow.on("pressmove", dragMe);
		this.lip.on("pressmove", dragMe);
		this.leftshoe.on("pressmove", dragMe);
		this.rightshoe.on("pressmove", dragMe);
		this.sword.on("pressmove", dragMe);
		this.chain.on("pressmove", dragMe);
		this.rarm.on("pressmove", dragMe);
		this.nose.on("pressmove", dragMe);
		this.shades.on("pressmove", dragMe);
		this.redyeyes.on("pressmove", dragMe);
		this.Reye.on("pressmove", dragMe);
		this.Leye.on("pressmove", dragMe);
		this.hat.on("pressmove", dragMe);
		
		function dragMe(evt) {
		    evt.currentTarget.x = evt.stageX/stage.scaleX;
		    evt.currentTarget.y = evt.stageY/stage.scaleY;    
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.larm = new lib.larm();
	this.larm.name = "larm";
	this.larm.setTransform(865.5,444.45);

	this.rarm = new lib.rman();
	this.rarm.name = "rarm";
	this.rarm.setTransform(874.25,497.85);

	this.leftshoe = new lib.leftshoe();
	this.leftshoe.name = "leftshoe";
	this.leftshoe.setTransform(106.8,236.9,1,1,0,0,0,41.1,45.8);

	this.rightshoe = new lib.rightshoe();
	this.rightshoe.name = "rightshoe";
	this.rightshoe.setTransform(236.65,236.4,1.0716,1,0,0,0,38.4,41.6);

	this.shades = new lib.shadws();
	this.shades.name = "shades";
	this.shades.setTransform(838.8,156.8,0.6068,2.0756,0,0,0,0.1,0.1);

	this.redyeyes = new lib.reyes();
	this.redyeyes.name = "redyeyes";
	this.redyeyes.setTransform(841.15,247.05);

	this.nose = new lib.nosegreen();
	this.nose.name = "nose";
	this.nose.setTransform(851.75,361.2);

	this.sword = new lib.sword();
	this.sword.name = "sword";
	this.sword.setTransform(734,520.95);

	this.lip = new lib.lip();
	this.lip.name = "lip";
	this.lip.setTransform(198.1,540.1);

	this.reyebrow = new lib.reyebrown();
	this.reyebrow.name = "reyebrow";
	this.reyebrow.setTransform(287.95,466.45);

	this.leyebrow = new lib.leyebrow();
	this.leyebrow.name = "leyebrow";
	this.leyebrow.setTransform(148,466.45);

	this.insidegreen = new lib.insidegreen();
	this.insidegreen.name = "insidegreen";
	this.insidegreen.setTransform(143,341.5);

	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(130.5,123.85);

	this.Reye = new lib.rightredeye();
	this.Reye.name = "Reye";
	this.Reye.setTransform(887.15,68.1,1,1,0,0,0,21.7,19.4);

	this.Leye = new lib.leftredeye();
	this.Leye.name = "Leye";
	this.Leye.setTransform(799.35,71.8,1,1,0,0,0,23.6,16.6);

	this.chain = new lib.chain();
	this.chain.name = "chain";
	this.chain.setTransform(743.5,383.2);

	this.insidebrown = new lib.yellowball();
	this.insidebrown.name = "insidebrown";
	this.insidebrown.setTransform(731.85,268.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AAAAAIAAAA");
	this.shape.setTransform(703,616.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgTgDIAAgBIAnAAIAAAJg");
	this.shape_1.setTransform(705,617.4375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#669900").s().p("AhrdOQkZg8kFh6QmXi8iumfQiHk/AblZIAXgWQC2i2AAkBQAAglgEgjIM57qIMRAJQEeD3BwFsQA2CuA+CrQCMGBBfGNQBKE3ApE5QAdDhhYDUQhoD5igDXQiHC0jFBtQkZCck7AqQgnAGgmAAQg5AAg7gNgAm0CBQi/C/AAEOQAAEOC/C/QC/C/ENAAQEOAAC/i/QC/i/AAkOQAAkOi/i/Qi/i+kOAAQkNAAi/C+g");
	this.shape_2.setTransform(469.8915,318.3561);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC9900").s().p("AnMHNQi/i/AAkOQAAkNC/i/QC/i/ENAAQEOAAC/C/QC/C/AAENQAAEOi/C/Qi/C/kOAAQkNAAi/i/g");
	this.shape_3.setTransform(472.3,377.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666600").s().p("AoAerQhyg3hug+QgxgbgsgiQjTimiejYQg/hXg3hfQhTiRgmikQgsjEAJjDQBFgkA8g3QgbFYCHFAQCuGfGXC8QEFB6EZA8QBhAUBggNQE7gqEZicQDFhtCHi0QCgjXBoj5QBYjUgdjhQgpk5hKk3QhfmNiMmBQg+irg2iuQhwlskej3IsRgJIs5bqQgJhdgkhSQCukmBulDQCCl5C3liQAuhYBBhJQEVk1GeA/QEoAsDIDfQCpC9BTDxQB9FuCAFuQCBFvBiF4QAdBuAEBxQAMFKhkE6Qh8GFkwEMQkwELmLBUQiWAfiTAAQjvAAjqhSg");
	this.shape_4.setTransform(470.3815,317.4839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.insidebrown},{t:this.chain},{t:this.Leye},{t:this.Reye},{t:this.hat},{t:this.insidegreen},{t:this.leyebrow},{t:this.reyebrow},{t:this.lip},{t:this.sword},{t:this.nose},{t:this.redyeyes},{t:this.shades},{t:this.rightshoe},{t:this.leftshoe},{t:this.rarm},{t:this.larm}]}).wait(1));

	// buttons
	this.resetbtn = new lib.bargrey();
	this.resetbtn.name = "resetbtn";
	this.resetbtn.setTransform(690,92.05);
	new cjs.ButtonHelper(this.resetbtn, 0, 1, 2, false, new lib.bargrey(), 3);

	this.Face2_btn = new lib.bargold();
	this.Face2_btn.name = "Face2_btn";
	this.Face2_btn.setTransform(691,70.35);
	new cjs.ButtonHelper(this.Face2_btn, 0, 1, 2, false, new lib.bargold(), 3);

	this.Face1_btn = new lib.barblue();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(691,44.2);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 2, false, new lib.barblue(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Face1_btn},{t:this.Face2_btn},{t:this.resetbtn}]}).wait(1));

	// name
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAgohVQgQAQgDAcIBmAAQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPg");
	this.shape_5.setTransform(523.475,57.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAoCxIAAggQgRARgPAHQgPAIgSAAQgkAAgcgeQgbggAAgvQAAgxAegmQAegoAwAAQAdgBATAUIAAgqQAAgmgCgJQgCgJgEgDQgEgDgFAAQgHAAgKAEIgEgJIBDgbIALAAIAAEBQAAAnACAKQACAIAEADQAEAEAFAAQAHAAALgEIACAIIhCAcgAgxgZQgWAZAAAwQAAAyAVAaQAVAaAbAAQAVAAAVgWIAAhzQgCgQgHgOQgHgNgMgHQgMgIgLAAQgVAAgRAUg");
	this.shape_6.setTransform(500.525,51.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhQBzIAAgJQARAAAJgFQAGgEACgJQACgEAAgTIAAhWQAAgngCgHQgCgIgEgDQgEgEgHAAQgHAAgKAEIgCgJIBEgbIAKAAIAAAyQAbgyAdAAQAOAAAJAIQAIAIAAALQAAAJgGAHQgGAGgJAAQgJABgKgJQgLgIgFgBQgEAAgFAGQgLAKgLAWIAABrQAAASAEAKQADAGAIAFQAIAEAPAAIAAAJg");
	this.shape_7.setTransform(479.125,57.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAgohVQgQAQgDAcIBmAAQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPg");
	this.shape_8.setTransform(459.625,57.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AABCpIh7kcQgJgWgEgFQgGgIgJgEQgJgEgPgBIAAgJICHAAIAAAJQgXACgHAGQgHAFAAAJQAAAMAMAaIBTDBIBOi/QALgcAAgLQAAgHgHgGQgHgHgRgDIgEAAIAAgJIBmAAIAAAJQgRADgJAIQgNAMgKAZIh0EYg");
	this.shape_9.setTransform(435.725,52.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhQBzIAAgJQARAAAJgFQAGgEACgJQACgEAAgTIAAhWQAAgngCgHQgCgIgEgDQgEgEgHAAQgHAAgKAEIgCgJIBEgbIAKAAIAAAyQAbgyAdAAQAOAAAJAIQAIAIAAALQAAAJgGAHQgGAGgJAAQgJABgKgJQgLgIgFgBQgEAAgFAGQgLAKgLAWIAABrQAAASAEAKQADAGAIAFQAIAEAPAAIAAAJg");
	this.shape_10.setTransform(398.125,57.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABICmIAAgJIAMAAQAVAAAJgNQAFgIAAgcIAAjcIh/EWIgIAAIiAkWIAADcQAAAeAHAIQAJALAUAAIALAAIAAAJIhzAAIAAgJIAMAAQAVAAAJgNQAFgIAAgcIAAjXQAAgWgFgKQgDgHgJgFQgKgEgUAAIAAgJIBeAAIB3ECIB2kCIBeAAIAAAJIgMAAQgVAAgJAMQgFAIAAAcIAADXQAAAeAHAIQAJALATAAIAMAAIAAAJg");
	this.shape_11.setTransform(367.175,52);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAmQgBgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAABAAIAFABIADABQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQACgCADgFIADgJIgTgoIgCgEIgDgDIgFgCIAAgCIAaAAIAAACIgBAAIgFABIgBADIACAHIAMAaIAMgdIABgFIAAgBIgCgBIgDgBIAAgCIASAAIAAACIgEABIgCADIgCAEIgWA1QgCAIgGAEQgFAEgFAAQgDAAgCgCg");
	this.shape_12.setTransform(101.05,73.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAHAaQgCgCAAgEIgJAHIgHABQgFAAgEgDQgDgEAAgGQAAgEABgDQADgEAGgEQAGgCAMgFIAAgCQAAgIgCgDQgDgDgEAAQgDAAgCACQgDACAAACIAAAEIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIgBgFQAAgFAFgEQAFgEAJAAQAGAAAFACQADACACAEIABAKIAAASIAAAJIABACIACABIACAAIAEgFIAAAEQgGAIgGAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgFAAQgFADgCADQgCACAAAEQAAAEADADQACADAEAAQAEAAAGgGIAAgUIgKAEg");
	this.shape_13.setTransform(95.575,72.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AARAoIAAgCIADAAQAFAAACgDQABgCAAgHIAAg0IgdBCIgCAAIgfhCIAAA0QABAHABACQACADAFAAIACAAIAAACIgbAAIAAgCIADAAQAFAAACgDQABgCAAgHIAAgzIgBgIQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQgCgCgFAAIAAgCIAXAAIAbA9IAcg9IAXAAIAAACIgDAAQgFAAgCAEQgBABAAAHIAAAzQAAAHACACQACADAEAAIADAAIAAACg");
	this.shape_14.setTransform(87.35,70.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgCAjQgCgCgBgDQgCgCAAgGIAAgjIgIAAIAAgCIAHgFIAGgHIACgIIACAAIAAASIANAAIAAAEIgNAAIAAAhQAAAGACACQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAEgBIADgDIACAAQgCAFgEADQgDADgEAAIgFgBg");
	this.shape_15.setTransform(127.975,55.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAcIAAgCQAEAAACgCIACgDIAAgFIAAgUIAAgLIgCgDIgCgBIgEABIgBgCIAQgHIADAAIAAANQAFgNAIAAQADAAACACQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBgBIgEgCIgCACQgCACgCAFIAAAZIAAAHIADADIAFABIAAACg");
	this.shape_16.setTransform(124.325,56.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AALApIAAgCIAGgCQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgDgDgFIgEgMIgeAAIgFANIgCAHIABADQACABAGABIAAACIgZAAIAAgCQAFgBABgCQADgDAEgIIAchBIABAAIAbBCQAEAIADACQACACAFABIAAACgAgQAKIAaAAIgMgfg");
	this.shape_17.setTransform(117.925,55.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbAoIAAgCIABAAIAGgBIACgCIAAgHIAAgyIAAgGIgCgDIgDgBIgDABIgBgCIARgGIACAAIAAANQAEgIAEgCQADgEAFAAQAIAAAGAHQAGAIAAAMQAAANgIAJQgGAIgKAAIgHgBIgFgEIAAAQQAAAGABACIACABIAFABIAAACgAgBgeIgHAHIAAAUIAAAHQABAEADADQAEACADAAQAGAAAEgEQAFgHAAgJQAAgMgGgHQgDgFgGAAIgEABg");
	this.shape_18.setTransform(108.025,57.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AATAcIAAgCIABAAQAEAAACgCIACgDIAAgFIAAgWQAAgHgBgDQgDgDgFAAIgGABQgDACgEAEIgBAAIABADIAAAZIAAAGIACADIAGABIAAACIgaAAIAAgCIAGgBIACgEIAAgFIAAgWQAAgHgCgDQgCgEgFAAQgDAAgDACIgHAGIAAAcQAAAFAAABQABABAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAHABIAAACIgbAAIAAgCIAFgBIADgDIAAgGIAAgUIAAgLIgCgDIgCgBIgEABIgBgCIAQgHIADAAIAAAMIAHgHQACgCADgBIAHgCQAEAAADADQAEADABAGQAGgHAEgCQAEgDAFAAQAEAAADADQADACADAFIAAALIAAAWIABAHIACACIAGABIAAACg");
	this.shape_19.setTransform(100.75,56.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTATQgGgIAAgKQAAgHAEgHQAEgHAFgDQAGgFAGAAQAMAAAIAKQAGAIAAAKQAAAGgDAIQgEAHgGAEQgGAEgHAAQgMAAgHgKgAgHgVQgDABgCAFQgCAFAAAHQAAAKAEAJQAGAIAGAAQAGABAEgFQADgFAAgLQAAgNgGgJQgEgGgGABQgDAAgDACg");
	this.shape_20.setTransform(93.05,56.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgbAbQgIgLAAgPQAAgLAFgKQAGgKAJgFQAJgGALAAQAIAAAJAFIADABIADgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIACAAIACAbIgCAAQgEgMgGgFQgHgFgKAAQgGAAgHAEQgGAEgEAJQgEAIAAAMQAAALAEAIQADAIAHAEQAHAEAIAAQAIAAAGgDQAGgDAHgKIACABQgGALgIAFQgIAFgLAAQgTAAgLgPg");
	this.shape_21.setTransform(86.075,55.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAbIAAgCIAjgvIgRAAIgHABIgDADQgCADABAEIgDAAIABgPIAsAAIAAACIgjAvIASAAIAJgBIADgEIABgIIACAAIgBARg");
	this.shape_22.setTransform(120.45,41.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPAVQgHgIAAgMQAAgNAHgHQAHgIAKAAQAJAAAGAFQAGAGAAAKIgkAAQgBAMAGAGQAGAHAHAAQAFAAAEgDQAEgDADgGIACABQgCAHgGAHQgFAGgJAAQgJAAgHgHgAgJgTQgEAEAAAGIAXAAIgBgHQgBgEgDgCIgFgBQgFAAgEAEg");
	this.shape_23.setTransform(115.125,41.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbApIAAgDIABAAIAGgBIACgCIAAgHIAAgyIAAgGIgCgCIgDgBIgDABIgBgDIARgGIACAAIAAAMQAEgGAEgDQADgDAFAAQAIgBAGAHQAGAIAAAMQAAANgIAJQgGAHgKAAIgHAAIgFgEIAAAQQAAAGABABIACACIAFABIAAADgAgBgdIgHAGIAAAUIAAAIQABADADACQAEADADAAQAGAAAEgFQAFgFAAgLQAAgMgGgGQgDgFgGAAIgEACg");
	this.shape_24.setTransform(109.175,42.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTATQgGgIAAgKQAAgHAEgHQAEgIAGgDQAFgDAGAAQAMAAAIAJQAGAIAAAKQAAAGgDAIQgEAHgGAEQgGADgHAAQgMAAgHgJgAgHgWQgDACgCAFQgCAEAAAIQAAAKAEAJQAGAJAGAAQAGAAAEgFQADgFAAgMQAAgMgGgJQgEgFgGgBQgDAAgDACg");
	this.shape_25.setTransform(103.4,41.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghAoIAAgCIADAAQAFAAACgEQABgCAAgGIAAgzQAAgHgCgCQgCgDgEAAIgDAAIAAgCIAjAAIAAACQgGAAgCACQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABQgBACAAAHIAAAxIABAGIABACIAJABIAGAAQAJAAADgCQAEgBADgDQADgEAEgHIABAAIgHAWg");
	this.shape_26.setTransform(96.7,39.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEAFQgCgCABgDQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAg");
	this.shape_27.setTransform(91.55,43.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgbAbQgIgLAAgPQAAgLAFgKQAGgKAJgFQAJgGALAAQAIAAAJAFIADABIADgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIACAAIACAbIgCAAQgEgMgGgFQgHgFgKAAQgGAAgHAEQgGAEgEAJQgEAIAAAMQAAALAEAIQADAIAHAEQAHAEAIAAQAIAAAGgDQAGgDAHgKIACABQgGALgIAFQgIAFgLAAQgTAAgLgPg");
	this.shape_28.setTransform(86.075,39.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Character
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#669900").s().p("AhrdOQkZg8kFh6QmXi8iumfQiUlgAvl+QAJhNAChMICKjUINm9MIMRAJQEeD3BwFsQA2CuA+CrQCMGBBfGNQBKE3ApE5QAdDhhYDUQhoD5igDXQiHC0jFBtQkZCck7AqQgnAGgmAAQg5AAg7gNgAm0CBQi/C/AAEOQAAEOC/C/QC/C/ENAAQEOAAC/i/QC/i/AAkOQAAkOi/i/Qi/i+kOAAQkNAAi/C+g");
	this.shape_29.setTransform(469.893,318.3561);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC9900").s().p("AnMHNQi/i/AAkOQAAkNC/i/QC/i/ENAAQEOAAC/C/QC/C/AAENQAAEOi/C/Qi/C/kOAAQkNAAi/i/g");
	this.shape_30.setTransform(472.3,377.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666600").s().p("AoAerQhyg3hug+QgxgbgsgiQkpjpi+lLQhTiRgmikQhZmJCCmDQA3iiBeiUQDXlTCBl6QCCl5C3liQAuhYBBhJQEVk1GeA/QEoAsDIDfQCpC9BTDxQB9FuCAFuQCBFvBiF4QAdBuAEBxQAMFKhkE6Qh8GFkwEMQkwELmLBUQiWAfiTAAQjvAAjqhSgAyjgFIiKDUQgCBMgJBNQgvF+CUFgQCuGfGXC8QEFB6EZA8QBhAUBggNQE7gqEZicQDFhtCHi0QCgjXBoj5QBYjUgdjhQgpk5hKk3QhfmNiMmBQg+irg2iuQhwlskej3IsRgJg");
	this.shape_31.setTransform(470.3846,317.4839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	// Frame
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_32.setTransform(480,320);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_33.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).wait(1));

	// stageBackground
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhMjgzjMCZHAAAMAAABnHMiZHAAAg");
	this.shape_34.setTransform(480,320);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000099").s().p("EhMjAzkMAAAhnHMCZHAAAMAAABnHg");
	this.shape_35.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,329,462,302);
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