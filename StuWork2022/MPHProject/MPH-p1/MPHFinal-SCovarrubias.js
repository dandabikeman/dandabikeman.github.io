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


(lib.scarf = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AIHm3IBagfQBbglBJg0QAMgJAMgJIAQAJQASAPAOAeQAoBSgBCkQAAAagBAdQguAgg1AfQgGAEgFADQhiA4gnAAIAMBNQAOBdAHBVQAVESg2BSQhkAjh3AVQgcAFgaADQhyAPhLgPQg0gKghgZQANgsALguQARhFAPhHQAxjvgggpAIHm3IA0CCQAGAQAGAQQArB4AKA9AB2luQAchPA/gwQCAhhC2CXAB2luQg3AGg1ADQk7APkLhsQhWgjhHgsQgKgGgKgHIg8gsIgTAnQgVAwgOAuQggBrASBFQAGAZAOAVIBCAtQAeASAgASQA7AhBAAcQExCHE3gCQALAAALgBQBCgBBAgIAB2luIAhCSQAdCkgSBaAAgArIACBVQgGBvgoCJIADAMQAEAOAKAMQAgAmBMAC");
	this.shape.setTransform(88.4513,58.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ACuJDQg0gKghgZIAYhaQhMgCgggmQgKgMgEgOIgDgMQAoiJAGhvIgChVQBCgBBAgIQAHgiAAguQAAhJgShlIghiSIAhCSQASBlAABJQAAAugHAiQhAAIhCABIgWABQk3ACkxiHQhAgcg7ghIg+gkIhCgtQgOgVgGgZQgShFAghrQAOguAVgwIATgnIA8AsIAUANQBHAsBWAjQELBsE7gPQA1gDA3gGQAchPA/gwQCAhhC2CXIA0CCIAMAgQArB4AKA9QgKg9grh4IgMggIg0iCIBagfQBbglBJg0IAYgSIAQAJQASAPAOAeQAoBSgBCkIgBA3QguAgg1AfIgLAHQhiA4gnAAIAMBNQAOBdAHBVQAVESg2BSQhkAjh3AVIg2AIQg5AIgvAAQgvAAgmgIgACRE6QgPBHgRBFQARhFAPhHQAeiRAAhIQAAgvgNgQQANAQAAAvQAABIgeCRg");
	this.shape_1.setTransform(88.4513,58.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scarf, new cjs.Rectangle(-2,-2,180.9,121.4), null);


(lib.purplehat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AOjFZQCjj9kHkoQgpgthWhQQg+g6hUgvQiThSjTgwIAzAVQA9AhAzA9QAGAHAGAIQCXDDgCGAAvdGLIASBCQAfBLDGBKQCtBAEAiBQAkgTAmgWIAvgLQA4gMAzgHQCegTCKBaQADACAEACQB2A0BlAhQDvBOCUinQA0g7AphYQAIgaAGgbAhqojIg1ADQgWAEghARQhAAfg2A6QgCACgDADQizDDgFGTADIo0IkyARIAOgiQAVglAdgUQBchACWCKgAifogQgrABhEAQQh5AdhtBAQgMAHhnA6QhoA6iTC6QiUC5AZFPQA8grBqg3QABAAABgBQCThMCZgzQBCgWBDgRQHjh8GtCLQDSBEDFCE");
	this.shape.setTransform(99.3274,65.9002);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#743399").s().p("AHSJ6Qhlggh2g1IgHgEQiKhaieATQgyAHg5ANIgvAKQgmAWgkATQkACBithAQjFhKgghLIgRhCQA7grBqg3IADAAQCShNCagzQBCgWBDgRQHih8GtCLQDSBEDFCEQgFAbgJAaQgpBYg0A7QhlByiQAAQhCAAhMgZgAg+pFQAUglAdgUQBcg/CWCJIkxARg");
	this.shape_1.setTransform(96.4,65.9002);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663399").s().p("AtignQCTi7Bog5IBzhCQBthAB5gdQBEgPArgCQgWAFghAQQhAAfg2A6IgFAFQizDEgFGSQiZAziTBNIgCABQhqA2g8ArQgZlPCUi4gAIMDnIAAgJQAAl6iVjBIgMgPQgzg9g9ghIgzgVQDTAwCTBSQBUAvA+A6QBWBQApAuQEHEnijD9QjFiDjShEgAlRlYIAFgFQA2g6BAgfQAhgQAWgFIA1gDIEygRIAzAVQA9AhAzA9IAMAPQCVDBAAF6IAAAJQmtiMnjB8QhDARhCAWQAFmSCzjEg");
	this.shape_2.setTransform(99.3274,57.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purplehat, new cjs.Rectangle(-2,-2,202.7,135.8), null);


(lib.orangehat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AOjFZQCjj9kHknQgfgjg6g3QgSgRgUgTQg+g6hUgvQiThSjTgwIAzAVQA9AhAzA9QAGAIAGAHQCXDEgCGAQBuAkBsA1QBgAwBdA+gAvdGLIASBDQAfBKDGBKQCtBBEAiCQAkgSAmgWIAvgLQA4gNAzgGQCegUCKBaQADACAEADQArATAoAQQBHAdBBAVQAmAMAkAGQBGAMA+gMQA1gKAugcQAsgbAmgrQA0g6AphYQAIgbAGgbAhqojIg1ADQgWAFghAQQgeAPgcAVQgfAXgdAeQgCADgDACQizDEgFGSQBCgVBDgSQFohcFJA2QBxASBuAkAhqojIAOghQAEgIAFgHQASgbAXgQQBRg3B9BiQASAOASARgAifogQgrAChEAQQg/APg6AYQg4AWg1AfQgMAIhnA6QhRAthsB8QgMAOgNAPQgSAWgTAYQhABQgfBqQgqCPAOC+QA7gqBlg0QADgCADgBQABgBABAAQCThNCZgz");
	this.shape.setTransform(99.3287,65.8999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("AIcKNQgkgGgmgNQhAgUhIgdIhTgjIgHgFQiKhaieATQgyAHg5ANIgvALQgmAVgkATQkACBithAQjFhKgghKIgRhDQA6gqBmg1IAFgCIADgBQCShNCagzQBCgWBDgRQFmhcFKA2QBxASBuAkQBvAkBrA1QBgAwBdA+QgFAbgJAbQgpBYg0A6QgmArgsAbQguAcg1AKQgeAGgiAAQghAAgjgGgAg+pFIAJgOQARgbAXgQQBRg3B9BiQASAOASARIkxARg");
	this.shape_1.setTransform(96.4,65.8999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6633").s().p("AvBCTQAfhrBAhPIAlguIAZgdQBsh8BRgtIBzhCQA1gfA4gXQA6gXA/gQQBEgPArgCQgWAFghAQQgeAPgcAUQgfAYgdAeIgFAFQizDEgFGSQiZAziTBNIgCABIgGACQhlA1g7AqQgOi+AqiPgALmFAQhsg1hugkIAAgJQAAl6iVjBIgMgPQgzg9g9ghIgzgVQDTAwCTBSQBUAvA+A6IAmAkQA6A2AfAkQEHEnijD9Qhdg+hggwgAlRlYIAFgFQAdgeAfgYQAcgUAegPQAhgQAWgFIA1gDIEygRIAzAVQA9AhAzA9IAMAPQCVDBAAF6IAAAJQhugkhxgSQlJg2loBcQhDARhCAWQAFmSCzjEg");
	this.shape_2.setTransform(99.3287,57.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.orangehat, new cjs.Rectangle(-2,-2,202.7,135.8), null);


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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AAoieIAsAOQA2APAzAHQCjAXBEhFIgLAvQgRA5ggAyQgvBJhEArQhPAxhqAKQhcAUhqgdQjUg5hFjzICuARQBTAFBBgFQANgBAMgBQAXgDAUgDQAngHAegMQhGATgqAG");
	this.shape.setTransform(42,16.9124);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE849C").s().p("Ag3COQjUg5hFjzICuARQBTAFBBgFIAYgCIArgGQAVgDAfARQAQAIAMAJIAnASQAuAWAkAZQBwBNgnBEQhOAxhqAKQgmAIgpAAQg5AAg+gRg");
	this.shape_1.setTransform(33.727,17.9124);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#49211F").s().p("AgXgKQgkgYgugXIgngSQgMgIgQgJQgfgQgVACQAogHAegMIAsAOQA2APAzAIQChAWBFhFIgLAwQgSA5gfAwQgvBKhFAsQAnhEhvhOg");
	this.shape_2.setTransform(61.525,13.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth3, new cjs.Rectangle(-2,-2,88,37.8), null);


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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AkXibIBxA6QCNA+CLAZQBWAOBQAAQg6BAhBAoQAAAAgBABQjkB3h+i0QgJgMgHgNQgdgvgUg+IgMg0g");
	this.shape.setTransform(28,15.597);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE849C").s().p("AidATIAQAZIABABQBMBrBvAAIAAAAIAAAAQBLAABagvIABgBQgwAdgzAQQgnALgjAAQh5AAhMiNgAAvCYQhvAAhMhrIgBgBIgQgZQgjhBgZhgIgFgRIBxA5QCMA+CMAZIAiA0QAdA1gUAOIgBAAIgBABQhaAvhLAAIAAAAIAAAAgAidATIAAAAg");
	this.shape_1.setTransform(22.254,16.0278);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#49211F").s().p("AgwgGIgig1QBVAQBQAAQg6A/hAAoQAUgOgdg0g");
	this.shape_2.setTransform(47.675,20.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth2, new cjs.Rectangle(-2,-2,60,35.2), null);


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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AiNhTIERAMQBCAMhBBPQhBBRhDgWQgkAKhRhIQhRhGA4geg");
	this.shape.setTransform(16.5431,8.3766);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth1, new cjs.Rectangle(-2,-2,37.1,20.8), null);


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
	this.shape.graphics.f().s("#DCDCDC").ss(4,1,1).p("AJOg2IBaAUIAKh4IhkAUIAABQIhaAeIAAAxIhaAeIAABkIB4gKIgUhQIA8AAgAobgiIBQAAIAUhkIhQAAgAphAjIBGAeIAAhjIhGAAIAABFIhQAeIAKBQIBGAKg");
	this.shape.setTransform(134,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("Aw3j5IgKC+IBkAAIAABjIBGgKIAABuIBQAAIAKBuIImgUIgKhQIBGAAIAAiCIBuAUIgKi9ID5AKIgKCfIBQAUIAKBGIBaAeIgUBQIImAUIAAhaIA8AAIAehkIBagKIAAiBIBQAoIAAjIg");
	this.shape_1.setTransform(109,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DCDCDC").s().p("AGaA3IBageIAAgxIBageIgUB3Ig8AAIAUBQIh4AKgAqnCRIgKhQIBQgeIAAB4gAphAjIAAhFIBGAAIAABjgAJOg2IAAhQIBkgUIgKB4gAobgiIAUhkIBQAAIgUBkg");
	this.shape_2.setTransform(134,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AtHCMIhQAAIAAhuIhGAKIAAhjIhkAAIAKi+MAh5AAAIAADIIhQgoIAACBIhaAKIgeBkIg8AAIAABaIomgUIAUhQIhageIgKhGIhQgUIAKifIj5gKIAKC9IhugUIAACCIhGAAIAKBQIomAUgALugdIAAAxIhaAeIAABkIB4gKIgUhQIA8AAIAUh3IBaAUIAKh4IhkAUIAABQgAm3A8IAKBQIBGAKIAAh4IBGAeIAAhjIhGAAIAABFgAkhgnIBQAAIAUhkIhQAAg");
	this.shape_3.setTransform(109,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses2, new cjs.Rectangle(-2,-2,222,54), null);


(lib.glasses1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(4,1,1).p("ACwgUQANhnBShPQACgCADgCQBchWB2AAQB5AABkBXQAkAgAXAjQApA/ACBLQABBPgsBBQgXAhgiAcQhmBYh5AAQh0AAhehKQgEgEgEgCQhhhQADh7QAAgPACgPgAitAAQADB3hmBWQhmBYh5AAQh5AAhhhQQhihQADh7QADh6BfhaQBehaB5AAQB5AABjBXQBkBXACB2IAcgPQAjgRAngKQB9ghB6A3");
	this.shape.setTransform(80.873,29.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses1, new cjs.Rectangle(-2,-2,165.8,62.5), null);


(lib.fish = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AJjgTQAQgPAOgQQCHiaArjcQAHgmAFgnQgBAAgBgBQiMgei+AEQhGAChDAHIgEA4QAAAUABATQADAwAKAvQAxDRC+BlgAIVmZIA/AZAIVmZIgnBFAHCm7IBTAiAIwnKIgbAxABTnHQgnAOgkARQg0AYgvAdAFqoHQh4AOhqAhQgBAAgBAAABTnHIACAfIAAABQAFAnAKAjQAiBuBSAXQggg9gag+QgWg1gHggQgJgoAOgIQgaAIgZAJgAkpEBQAEAAADABQBIAJBjgBICGgMQAmgGAjgHQB8gZBuguQCdhCBthlQABgBACgBQAKgJAKgLAhylkQAHgQAQABQgMAHgLAIQgNAIgMAIIgFAVQgFAaACAYQAAAMADAKQAKA7AzAXQgPgpgJgpQgDgLgCgLQgNg/ALgYgAiLlUQg9Aqg0AzQgnAngjAsQhHBcgyBxQgPAhgJAYIgIAbQgDAhAUAaQAoA2B9ATAm/ApQgtgNgwgJQghgHgkgFQhOgJg1AFQgWACgSAGQgZAHgQANQgEAEgFAEIB2BSQB3BZAFApIgLA2QgDATgCASQgBAHgBAGQgBAKgBAKQgCAWgBATQgGCaBXg3QBDgxA+g5QAggdAWgZQAGgGAGgHQAyg7gMga");
	this.shape.setTransform(83.05,52.9215);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42BEA6").s().p("AgwCXIADgpIADgUIABgNIAGglIAKg1QgEgph3hZIh2hSIAIgIQAQgNAagHQASgGAWgCQA1gGBOAKQAjAFAhAHQAvAJAtANIgYA5IgIAbQgDAhAUAaQAoA2B9ATQANAZgzA7IgLANQgXAZggAdQg+A5hCAxQgXAOgQAAQguAAAEhxg");
	this.shape_1.setTransform(26.7331,79.4163);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiyBIQgCgLgBgMQgBgXAEgaIAFgVIAZgQQgLAYANA+IAFAXQAJApAPApQgygYgLg6gABCgeQgKgjgEgnIAAgBIgDgeIAzgRQgOAHAJAoQAHAgAWA1QAaA+AgA8QhSgXgihtg");
	this.shape_2.setTransform(86.4313,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2BE1F9").s().p("AnQGFIgIgBQh9gSgog2QgUgbADghIAIgbIAYg5QAyhyBIhaQAigsAognQAzgzA9gqIgFAVQgEAaABAYQABALACALQALA6AyAYQgPgpgJgpIgFgWQgNhAALgYIAXgOQAwgeA0gXQAkgRAngOIADAfIAAABQAEAnAKAiQAiBuBRAXQggg8gZg/QgWg0gHggQgJgpAOgHIACgBQBpghB4gNQBDgIBGgBQC+gFCMAfIACAAQgFAogHAmQgqDciHCYIgeAgQi/hlgxjRQgKgugDgwIgBgeIAAgKIAEg3IgEA3IAAAKIABAeQADAwAKAuQAxDRC/BlIgVAUIgDADQhtBkidBCQhuAvh7AZQgjAHglAFIiIAMIgbABQhSAAg9gJgAE/jRIAnhFIAbgwIgbAwIhTghIBTAhgAGmj9IhAgZg");
	this.shape_3.setTransform(100.5489,39.7563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish, new cjs.Rectangle(-2,-2,170.1,109.9), null);


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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AJCAAQAAA8ghAsQggArgtAAQguAAgggrQgggsAAg8QAAg8AggrQAggrAuAAQAoAAAeAiQADAEAEAFQAhArAAA8gAIphCQAAAagSASQgSASgaAAQgZAAgSgSQgSgSAAgaQAAgMAEgLQAEgLAKgJQASgSAZAAQAaAAASASQASASAAAZgAl+hCQAAAagSASQgSASgZAAQgaAAgSgSQgSgSAAgaQAAgMAFgLQAEgLAJgJQASgSAaAAQAZAAASASQASASAAAZgAllAAQAAA8ggAsQggArguAAQgtAAghgrQgggsAAg8QAAg8AggrQAhgrAtAAQAoAAAeAiQAEAEAEAFQAgArAAA8g");
	this.shape.setTransform(57.75,14.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AGFBoQgfgsAAg8QAAg8AfgqQAhgrAtgBQApABAeAhIAHAKQAhAqgBA8QABA8ghAsQggArguAAQgtAAghgrgAHAhtQgKAJgEALQgEALAAANQAAAZASASQARASAaAAQAZAAATgSQASgSAAgZQAAgagSgSQgTgSgZAAQgaAAgRASgAogBoQghgsAAg8QAAg8AhgqQAggrAtgBQApABAdAhIAIAKQAhAqgBA8QABA8ghAsQggArguAAQgtAAgggrgAnnhtQgJAJgEALQgEALgBANQABAZARASQASASAaAAQAZAAATgSQASgSAAgZQAAgagSgSQgTgSgZAAQgaAAgSASg");
	this.shape_1.setTransform(57.75,14.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes3, new cjs.Rectangle(-2,-2,119.5,33.3), null);


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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AJMhhQgKADgKACQgFACgEABQgFAAgEABIAIAAQAAgBABAAQAFgFAYgDgAJQhiIgDAAQgBABAAAAQABAAADgBQATgCAkgEIACAAQgSgDgHAAQgPAAgSADQgDABgDAAIAAAAIgQAAQiCAfg4AlQgiAXhMBUQAZAAAPgGQAQgHAOAAQAmAABCAUQBBATAWARQgggvg8gQQghgJhLgCQA3goBjgrQBOghBCgUIAAgDgAJJhnQgCABAAAAQgZAHgMACAIuhYIABAAQgBAAAAAAgAmaAAQAABQgjA4QgjA4gxAAQgTAAgRgJQgbgNgWgiQgGgLgFgKQgXgyAAhBQAAhAAXgyQAFgKAGgLQAWgjAbgMQARgJATAAQAxAAAjA4QADAGAEAGQAcA1AABGgAnBg4QAAAggOAWQgNAVgTAAQgTAAgOgVQgNgWAAggQAAggANgWQAOgXATAAQATAAANAXQAOAWAAAgg");
	this.shape.setTransform(64.9,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjC3QgbgNgWgiIgLgVQgXgyAAhBQAAhAAXgyQAFgLAGgKQAWgiAbgOQARgIASAAQAyAAAiA4IAHAMQAcA1AABGQAABQgjA4QgiA4gyAAQgSAAgRgJgAAChuQgNAXAAAfQAAAgANAWQANAWATgBQATABANgWQAOgWAAggQAAgfgOgXQgNgXgTAAQgTAAgNAXg");
	this.shape_1.setTransform(11.9,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes2, new cjs.Rectangle(-2,-2,133.8,42.4), null);


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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AF2hmQAIAXAPAUQAQAWAXAPQAqAcApgGQACAAABAAQArgJASgqQARgqgSgzQgFgMgGgMQgGgLgIgKQgPgUgWgPQgrgfgrAJQgrAIgSArQgRAqASAzgAEDAAQAABlAmBMQAIAPAJAPQA4BVBOAAQBPAAA3hVQAHgLAGgLQABgCAAAAQAGgLAFgLQAfhHAAhaQAAhmgphOQAAgBgBgBQgGgMgIgMQAAgBgBgBQg3hThOAAQgKAAgLABQhBAKgwBKQg3BWAAB4gAEoBFQAAA2AQAnQAHAPAHAJQAMAOAOAAQAWAAARgmQAMgdACgmQACgMAAgOQAAg2gQglQgEgKgFgHQgNgWgRAAQgYAAgQAnQgQAlAAA2gAHdB0QAAAbAOAUQANAUATAAQAOAAAKgKQAFgEAEgGQAGgKAEgLQADgMAAgOQAAgcgNgUQgOgUgTAAQgTAAgNAUQgLAQgCAWQgBAEAAAGgAkCAAQAABlgmBMQgIAPgJAPQg4BVhOAAQhPAAg3hVQgHgLgGgLQgBgCAAAAQgGgLgFgLQgfhHAAhaQAAhmAphOQAAgBABgBQAGgMAIgMQAAgBABgBQA3hTBOAAQAKAAALABQBBAKAwBKQA3BWAAB4gAl1hmQgIAXgPAUQgQAWgXAPQgqAcgpgGQgCAAgBAAQgrgJgSgqQgRgqASgzQAFgMAGgMQAGgLAIgKQAPgUAWgPQArgfArAJQArAIASArQARAqgSAzgAncB0QAAAbgOAUQgNAUgTAAQgOAAgKgKQgFgEgEgGQgGgKgEgLQgDgMAAgOQAAgcANgUQAOgUATAAQATAAANAUQALAQACAWQABAEAAAGgAknBFQAAA2gQAnQgHAPgHAJQgMAOgOAAQgWAAgRgmQgMgdgCgmQgCgMAAgOQAAg2AQglQAEgKAFgHQANgWARAAQAYAAAQAnQAQAlAAA2g");
	this.shape.setTransform(63.775,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AE6DPQgJgPgIgPQgmhMAAhlQAAh4A3hVQAwhLBBgJIAVgCQBOAAA3BUIABACQAIALAGAMIABACQApBOAABmQAABagfBHQgFALgGALIgBABIgNAXQg3BVhPAAQhOAAg4hVgAE4gXQgQAmAAA2QAAA1AQAoQAHAOAHAKQAMANAOAAQAWABARgmQAMgdACgmQACgNAAgNQAAg2gQgmQgEgJgFgHQgNgWgRAAQgYAAgQAmgAHrBEQgLAQgCAWIgBAKQAAAbAOAUQANAUATAAQAOAAAKgKQAFgEAEgGQAGgJAEgMQADgMAAgOQAAgdgNgTQgOgUgTAAQgTAAgNAUgAGyj2QgrAJgSAqQgRAqASAyQAIAYAPAUQAQAVAXAQQAqAcApgGIADAAQArgJASgqQARgqgSgyQgFgNgGgMQgGgLgIgKQgPgUgWgPQgigYghAAQgKAAgJACgApFDPIgNgXIgBgBQgGgLgFgLQgfhHAAhaQAAhmAphOIABgCQAGgMAIgLIABgCQA3hUBOAAIAVACQBBAJAwBLQA3BVAAB4QAABlgmBMQgIAPgJAPQg4BVhOAAQhPAAg3hVgAl9gnQgFAHgEAJQgQAmAAA2QAAANACANQACAmAMAdQARAmAWgBQAOAAAMgNQAHgKAHgOQAQgoAAg1QAAg2gQgmQgQgmgYAAQgRAAgNAWgAorBEQgNATAAAdQAAAOADAMQAEAMAGAJQAEAGAFAEQAKAKAOAAQATAAANgUQAOgUAAgbIgBgKQgCgWgLgQQgNgUgTAAQgTAAgOAUgAoHjgQgWAPgPAUQgIAKgGALQgGAMgFANQgSAyARAqQASAqArAJIADAAQApAGAqgcQAXgQAQgVQAPgUAIgYQASgygRgqQgSgqgrgJQgJgCgKAAQghAAgiAYg");
	this.shape_1.setTransform(63.775,29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes1, new cjs.Rectangle(-2,-2,131.6,62.4), null);


(lib.earmuffs1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AOtiiIA5gOQBHgKBDAPQDVAvBgEaIAJBQQAEBegWBOQgDALgEALQhLDfkSg0Qg2gggrhWQgNgagMgbQgghFgbhHQgRgtgPgtQgLgggJghQgBgGgMhLQgei2CJgkgAvSixIArgrQA3g1BBgyQDPijDfhQQBWgfBWgSQDXgsDSAsQAIACAIACQDQAvDDCDQCfBrCXCkAuDhnQgogdgxgPQgUgHgVgEQjEgmiWDfIgfA4QghBHgKBJQgdDVC0CYQAPANARANIAuANQA3ALAvgIQAhgGAggkQAhgjAghCQAzhqAyi6QAZhgAZh0QgDhHgvgQQgGgCgGgBgAtghLQgLgKgMgJQgGgFgGgE");
	this.shape.setTransform(145.4361,63.7603);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("AzEGTIgugNIgggaQi0iYAdjUQAKhJAhhHIAfg4QCWjgDEAmQAVAEAUAHQAxAPAoAdIAMAJQAMAJALAKQgLgKgMgJIgMgJIAMADQAvAQADBHQgZB1gZBgQgyC5gzBqQggBCghAjQggAkghAGQgVADgWAAQgcAAgfgGgAQ4F3Qg2gggrhWIgZg1QgghFgbhHQgRgtgPgsQgLgggJghIgNhRQgei3CJgkIA5gOQBHgKBDAPQDVAvBgEbIAJBPQAEBegWBOIgHAWQg9C1jAAAQgsAAg0gKg");
	this.shape_1.setTransform(145.4361,86.5941);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.earmuffs1, new cjs.Rectangle(-2,-2,294.9,131.5), null);


(lib.ovalbuttonshadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgZBnQgqAAgXgbIgDgDIAAgBQgYgeAMgqQALgqAngeQAngeAqAAQAtAAAXAfIAIAMQANAbgJAhIgEAMQgNAjghAZIgEADQglAbgoAAIAAAAg");
	this.shape.setTransform(-0.0146,-0.0151,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.796)").s().p("AgZBsQgsAAgZgdIgDgDIAAgBQgZggAMgsQAMgsAogfQAogfAsAAQAwAAAYAhIAAAAIAIANQAPAcgKAkIgEAMQgOAkgiAaIgFAEQgmAbgpAAIAAAAgAg3hIQgnAegLAqQgMAqAYAeIAAABIADADQAXAbAqAAQAoAAAlgbIAEgDQAhgZANgjIAEgMQAJghgNgbIgIgMQgXgfgtAAIAAAAQgqAAgnAeg");
	this.shape_1.setTransform(-0.0156,-0.0151,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.596)").s().p("AgZBxQgvAAgagfIgDgDIAAAAQgbgiANgvIAAgBQAMgtAqggQApggAuAAQAyAAAaAiIAAABIAJANQAPAegKAmIgFANIAAAAQgNAlgkAbIAAAAIgFAEQgnAcgrAAIAAAAgAg6hMQgoAfgMAsQgMAsAZAgIAAABIADADQAZAdAsAAQApAAAmgbIAFgEQAigaAOgkIAEgMQAKgkgPgcIgIgNIAAAAQgYghgwAAIAAAAQgsAAgoAfg");
	this.shape_2.setTransform(-0.0157,-0.0151,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.396)").s().p("AgZB2QgyAAgbghIgCgDIgBAAQgcgkANgyQANgvArghQArghAvAAQA1AAAbAlIAAAAQAGAHADAHIAAAAQARAfgMApIgEANIAAAAQgOAmglAcIAAAAIgFAEQgpAdgsAAIAAAAgAg9hQQgqAggMAtIAAABQgNAvAbAiIAAAAIADADQAaAfAvAAQArAAAngcIAFgEIAAAAQAkgbANglIAAAAIAFgNQAKgmgPgeIgJgNIAAgBQgagigyAAIgBAAQgtAAgpAgg");
	this.shape_3.setTransform(-0.0121,-0.0151,0.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.196)").s().p("AgZB7Qg0AAgcgiIgDgEIgBgBQgeglAOg0QANgxAtgiQAsgiAxAAQA3AAAdAnIAAAAQAGAHAEAIQARAhgMAqIgEAOIAAgBQgPAogmAdIAAABIgFADQgqAegtAAIgBAAgAhAhUQgrAhgNAvQgNAyAcAkIABAAIACADQAcAhAxAAQAsAAApgdIAFgEIAAAAQAlgcAOgmIAAAAIAEgNQAMgpgRgfIAAAAQgDgHgGgHIAAAAQgbglg1AAIgBAAQguAAgrAhg");
	this.shape_4.setTransform(-0.0176,-0.015,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ovalbuttonshadow, new cjs.Rectangle(-11.7,-11,23.4,22.1), null);


(lib.bowtie = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ABpBUIAoAdQAvAfAkALQB0AlgqiuQAohNgEg2QgKhrjfB7IAaBKQARBOgrAdgABphhQgzgUg3gIQhvgPgXBAQg+g0g3gQQhtgfAkC6IgJAqQgIAwALAcQAiBZDOiNIAVAQQAbATAaAKQBRAfAphFAiHhMIgEA9QAEBBAsAb");
	this.shape.setTransform(33.8543,16.352);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AlLCBQgLgcAIgwIAJgqQgki6BtAfQA3AQA+A0QAXhABvAPQA3AIAzAUIAaBKQAFAXAAASQAAAugfAUQgpBFhRgfQgagKgbgTIgVgQQgsgbgEhBIAEg9IgEA9QAEBBAsAbQh+BXg+AAQgnAAgNgjgADkCbQgkgLgvgfIgogdQAfgUAAguQAAgSgFgXIgahKQDfh7AKBrQAEA2goBNQAjCQhJAAQgPAAgVgHgAhbBNIAAAAg");
	this.shape_1.setTransform(33.8543,16.352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bowtie, new cjs.Rectangle(-2,-2,71.7,36.7), null);


(lib.blush = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AKFAAQAAASgfAPQgIAEgLADQgxARhGAAQhGAAgygRQgSgGgMgHQgTgMAAgPQAAgOATgMQAMgHASgGQAygRBGAAQBGAAAxARQALADAIAEQAfAOAAASgAkyAAQAAAXgxARQgyARhGAAQhGAAgxgRQgygRAAgXQAAgXAygQQAxgRBGAAQBGAAAyARQAxAQAAAXg");
	this.shape.setTransform(64.475,5.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("AFkAoQgSgGgMgHQgTgMAAgPQAAgNATgNQAMgHASgGQAygQBGgBQBGABAxAQIATAIQAfANAAASQAAASgfAPIgTAHQgxAQhGABQhGgBgygQgApSAoQgygQAAgYQAAgWAygRQAxgQBGgBQBGABAyAQQAxARAAAWQAAAYgxAQQgyAQhGABQhGgBgxgQg");
	this.shape_1.setTransform(64.475,5.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blush, new cjs.Rectangle(-2,-2,133,15.3), null);


(lib.beanie = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AjXitQAAgHADgKQADgLAAgGQAAgTgTgWQgCgDgCgCQgPgTAAgJQAAgIAEgMQADgMAAgHQAAgNgLgOQgPgQgHgKIAdAAIAAgGQgEgTgGgQQgHgSgBgCQANAAAJADIALAAQgCgOAIgXQAJgVAAgDQABAAAAgBQAHALAFASIABAAQAOgmAEgLQAHgQARgOQAAALABAFQADgEAMgPQADgFAEgFQABgCACgBQAHgLACgFIACgBQABACAJAJQADAEACACQAEAEABAAQAFAAAIgEQAEgCAEgDQAOgJAHgNQACABAIAIQAHAJAFACQABgHAHgQQAEgIAGgEQAXAYAGAAQADAAALgGQAMgFACgDIACAAIAAAGQgBADgDAJQgDAJAAABIAAACQAggRADAAQAAAAAOALQAGAFAEADQAFAEACAAQABAAAIgEQAFgDAIgEQAGAAAJAHQADACADAEQALAMAKATIAHgKQAAABALAhQAIAaAGAAQADAAAEgEQAEgFADgBQADAHADAUQADAOAHADQACABACAAIATAAQACABAOABQAAAEADAOQAAAMgGAMQgMAVAAAAIAbABIAAAFQgIAMgIARQgLAWAAAKQAAAIAFAEQAGAHADAGIABAAQgTAFgGAFQgHAGgDAOQgCAIgKANQgJALAAALQAAAEAAAKQgBAJgDAEIAAABQgDAEgHABQgHACgDAAQgBABgBAAQgHADgJAOQgIAQgEAFQgEgCgHgGQgIgGgCgFQgGAJgFAIQgKAOAAAFIgXgfQgEAXgjAHQgSAEgjAAQglAAgIgBQgVgDgUgQQgFADgFAGQgGAHAAABQgDgCgLgVQgKgSgHAAQgZANgHAAQgFAAgGgUQgFgRAAgGQgNAFgIAHQgCABgBACIgBAAIAEgDADMizIA7AkQBFAtA8AxQCeB9A5ByQANAbAIAaIAfAnQAlAxAbAuQBYCVgmBMQgaggg4goQgxgkg5gdQhJgkhUgZQgggJghgIQhWgUhdgHQgcgCgdgBQhjgDhoAKQhsALh0AZQhvAYh1AlQhbAdheAkQgTAHgSAIIgiAkIAHhPQAYg8Aeg9QA8h6AggEQAKgCATgLQAChKA0hXQBkinDthFQADgBADgBQAFgBAGgCAFgBlIALAiQANAqAHAnQAXB8grAvACGA0IAMAlQAOAuAGApQAUCGg7AvAiIAvQBBgKBJgFIAlAFQAuAHAxAIQAaAFAYAFQBdASBLAVQClAtBGA2IAMAgQANAoAGAlQAVB1g2AnAJLDIQAdAVAMAWApaDuQASgLA3giIgZBaQgRBkAhAvAiIAvIgDAoQgCAxADAsQAICNA2ArAlZBnIgHB6QADCDAxAsAlZBnQBlgmBsgSAoRDBQBcg3Bcgj");
	this.shape.setTransform(78.4503,60.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("AKzDVQgxgkg5gdQhJgkhUgZQgggJghgIQhWgUhcgHIg6gDQAtgjAAhTQgBgcgFgiQgGgpgOguIgMglIAMAlQAOAuAGApQAFAiABAcQAABTgtAjQhjgDhnAKQg3grgIiMIgBgzIAAgqIADgoQBBgKBJgFIAlAFQAuAHAxAIIAzAKQBcASBLAVIAMAiQAMAqAHAnQAIArAAAhQAAA/gcAfQAcgfAAg/QAAghgIgrQgHgngMgqIgMgiQClAtBGA2IAMAgQANAoAGAlQAGAfAAAbQAABFgnAcQAngcAAhFQAAgbgGgfQgGglgNgoIgMggQAdAVAMAWIAfAnQAlAwAcAuQBXCVgmBMQgaggg4gogAsJC1QAYg8Aeg9QA8h5AggEQAKgCATgLIBJgtQBcg3BcgjIgHB6QADCCAxAsQhvAYh1AlQhbAdheAkIglAPIgiAkgAoaBxQgWgfAAg1QAAgdAHghIAYhaIgYBaQgHAhAAAdQAAA1AWAfgAlghbIAHh6QBlgmBsgSIgDAoIAAAqIABAzQAICMA3ArQhtALh0AZQgxgsgDiCgAlZjVg");
	this.shape_1.setTransform(78.4503,91.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33CCCC").s().p("AomA0QBkinDshFIAHgBIgEgMIAEgDQAIgHANgFQAAAGAFASQAGATAFAAQAHAAAZgNQAHAAAJASQAMAVADACIAGgIIAKgJQAUAQAUADQAJABAlAAQAjAAASgDQAjgIAEgXIAXAfQAAgFAKgOIALgQQACAEAIAGIALAIIAMgVQAJgOAHgDIACAAIAJgDQAIgBADgEIA7AkQBEAuA9AwQCdB+A6BxIgUAKQhGg1ilguQhLgUhdgTIgygJQgxgJgvgGIgkgGQhKAFhAAKQhsAShlAmQhcAjhcA3IhJAtQABhKA1hXgAjPi5IALgDIgLADg");
	this.shape_2.setTransform(78.7,62.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7CCCCC").s().p("AgyDzQgUgDgUgRIgKAJIgGAIQgDgCgMgUQgJgSgHAAQgZAMgHAAQgFAAgGgTQgFgRAAgHQgNAFgIAIIgFACIgFAAQAAgIACgKQADgLAAgFQABgTgUgWIgDgFQgQgUAAgIQAAgJAFgLQADgMAAgHQAAgNgLgOQgPgPgHgKIAdAAIAAgHQgEgSgHgRIgHgUQANABAJADIALAAQgCgOAIgYQAJgUAAgDIABgBQAHALAFASIABAAIASgxQAHgQARgOIABAQIAPgTIAHgKIADgEQAHgKACgFIABgCIAKAMIAGAFIAEAFQAGgBAIgEIAIgEQAOgKAHgMQACABAHAIQAIAJAFABQAAgHAIgPQAEgIAFgEQAYAYAGgBQADAAALgFQAMgFACgDIACAAIAAAGIgEAMIgDAKIAAACQAggRACgBIAPAMIAKAHQAFAEACABIAJgFIAMgHQAHABAJAGIAFAHQAMAMAKASIAHgJIALAiQAIAaAGAAQADAAAEgFQAEgFADAAQADAHADAUQADAOAHADIADABIAUAAQACABAOABIACASQAAAMgFAMIgMAVIAbABIAAAFQgIALgIARQgLAWAAAKQAAAHAFAFQAGAHADAFIABAAQgTAGgGAEQgIAHgDAOQgBAIgKANQgJALAAALIAAAOQgBAIgDAFIAAAAQgDAFgIABIgJACIgCAAQgHADgJAOIgMAVIgLgHQgIgGgCgFIgLAQQgKAPAAAEIgXgeQgEAWgjAIQgSAEgjAAQglAAgJgBg");
	this.shape_3.setTransform(78.6,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.beanie, new cjs.Rectangle(-2,-2,160.9,124.4), null);


(lib.Ovalbuttonsblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.196,0.922],0,0,0,0,0,6.7).s().p("AglAcQgXgLgEgRQgFgQAQgMQAQgMAbAAQAaAAAWAMQAXAMAEAQQAFARgQALQgQANgbAAQgaAAgWgNg");
	this.shape.setTransform(-1.9899,-12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0.553)","rgba(255,255,255,0)"],[0,0.282,1],2,8.3,0,2,8.3,24.3).s().p("AhPBoQg3grgRg9QgQg8AhgqQAggsA/ABQA+gBA5AsQA4AqAQA8QAQA9ghArQghAqg/AAQg+AAg4gqg");
	this.shape_1.setTransform(1.722,-1.0761);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.6)"],[0.369,0.914],0.9,4,0,0.9,4,19.8).s().p("AhPBoQg4gsgQg7QgRg9AhgrQAigrA/AAQA+AAA3ArQA4ArARA9QAQA7ghAsQggArg/AAQg+AAg5grg");
	this.shape_2.setTransform(1.6613,-1.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("AhIBtIgHgFQgvglgTgxIgGgSQgNgwATgmQAEgJAGgIQAigrA/AAQA9AAA4ArQA4ArARA8QAQA9ghArIgEAFQghAmg7AAQg6AAg1gmg");
	this.shape_3.setTransform(1.7078,-1.1375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhIBtIgHgFQgvglgTgxIgGgSQgNgwATgmQAEgJAGgIQAigrA/AAQA9AAA4ArQA4ArARA8QAQA9ghArIgEAFQghAmg7AAQg6AAg1gmg");
	this.shape_4.setTransform(1.7078,-1.1375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 5
	this.instance = new lib.ovalbuttonshadow();
	this.instance.setTransform(1.9,-0.35,1.575,1.575,0,0,180);
	this.instance.alpha = 0.3516;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-17.7,36.9,34.8);


(lib.reset = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Restart ", "bold 25px 'Rockwell Extra Bold'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 113;
	this.text.parent = this;
	this.text.setTransform(19.75,20.95,0.7115,1);

	this.instance = new lib.Ovalbuttonsblue();
	this.instance.setTransform(54.35,36.3,3.2845,2.046);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Ovalbuttonsblue(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,121.10000000000001,83.7);


(lib.face2 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Face 2", "bold 25px 'Rockwell Extra Bold'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(28.35,20.95,0.7115,1);

	this.instance = new lib.Ovalbuttonsblue();
	this.instance.setTransform(54.35,36.3,3.2845,2.046);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Ovalbuttonsblue(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,121.10000000000001,71.2);


(lib.face1 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Face 1", "bold 25px 'Rockwell Extra Bold'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(26,20.95,0.7115,1);

	this.instance = new lib.Ovalbuttonsblue();
	this.instance.setTransform(54.35,36.3,3.2845,2.046);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Ovalbuttonsblue(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,121.10000000000001,71.2);


// stage content:
(lib.MPHFinalSCovarrubias = function(mode,startPosition,loop,reversed) {
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
		this.btn1.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eyes1.x = 171;
			this.eyes1.y = 184;
			this.blush.x =170;
			this.blush.y =219;
			this.earmuffs1.x =168;
			this.earmuffs1.y =150;
			this.mouth3.x =172 ;
			this.mouth3.y =261 ;
			this.scarf.x =167 ;
			this.scarf.y =331 ;
			this.fish.x =290;
			this.fish.y =410;
		}
		this.btn2.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.beanie.x =164;
			this.beanie.y =82;
			this.glasses1.x =170;
			this.glasses1.y =184;
			this.mouth3.x =169;
			this.mouth3.y =255;
			this.bowtie.x =167;
			this.bowtie.y =294;
			this.eyes3.x =175;
			this.eyes3.y =189;
		}
		
		this.btn3.addEventListener("click", ClickFace31.bind(this));
		
		function ClickFace31() {
			this.bowtie.x =832;
			this.bowtie.y =44;
			this.glasses2.x =841;
			this.glasses2.y =111;
			this.glasses1.x =841;
			this.glasses1.y =182;
			this.eyes3.x =841;
			this.eyes3.y =253;
			this.eyes1.x =841;
			this.eyes1.y =324;
			this.eyes2.x =841;
			this.eyes2.y =394;
			this.beanie.x =843;
			this.beanie.y =535;
			this.purplehat.x =655;
			this.purplehat.y =461;
			this.orangehat.x =449;
			this.orangehat.y =461;
			this.scarf.x =518;
			this.scarf.y =353;
			this.fish.x =565;
			this.fish.y =224;
			this.earmuffs1.x =586;
			this.earmuffs1.y =140;
			this.mouth1.x =706;
			this.mouth1.y =293;
			this.mouth2.x =704;
			this.mouth2.y =324;
			this.blush.x =842
			this.blush.y =459
		}
		this.btn3.addEventListener("click", ClickFace46.bind(this));
		
		function ClickFace46() {
			this.mouth3.x =703;
			this.mouth3.y =369;
		}
		this.bowtie.on("pressmove", dragMe); // When mc1 is pressed call dragMe function
		this.glasses2.on("pressmove", dragMe);
		this.glasses1.on("pressmove", dragMe);
		this.eyes3.on("pressmove", dragMe);
		this.eyes1.on("pressmove", dragMe);
		this.eyes2.on("pressmove", dragMe);
		this.blush.on("pressmove", dragMe);
		this.beanie.on("pressmove", dragMe);
		this.purplehat.on("pressmove", dragMe);
		this.orangehat.on("pressmove", dragMe);
		this.scarf.on("pressmove", dragMe);
		this.fish.on("pressmove", dragMe);
		this.earmuffs1.on("pressmove", dragMe);
		this.mouth1.on("pressmove", dragMe);
		this.mouth2.on("pressmove", dragMe);
		this.mouth3.on("pressmove", dragMe);
		// Below is the definition of the function dragMe
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons
	this.btn1 = new lib.face1();
	this.btn1.name = "btn1";
	this.btn1.setTransform(369.1,580.45,1,1,0,0,0,60.6,35.6);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.btn2 = new lib.face2();
	this.btn2.name = "btn2";
	this.btn2.setTransform(525.75,580.45,1,1,0,0,0,60.6,35.6);
	new cjs.ButtonHelper(this.btn2, 0, 1, 1);

	this.btn3 = new lib.reset();
	this.btn3.name = "btn3";
	this.btn3.setTransform(699.85,586.65,1,1,0,0,0,60.6,41.8);
	new cjs.ButtonHelper(this.btn3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3},{t:this.btn2},{t:this.btn1}]}).wait(1));

	// text
	this.text = new cjs.Text("Computer Art \nSCovarrubas", "bold 25px 'Rockwell Extra Bold'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 302;
	this.text.parent = this;
	this.text.setTransform(19.1,567.05);

	this.text_1 = new cjs.Text("Mr. Penguin", "bold 75px 'Rockwell Extra Bold'");
	this.text_1.lineHeight = 90;
	this.text_1.lineWidth = 574;
	this.text_1.parent = this;
	this.text_1.setTransform(202.95,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Body Parts
	this.scarf = new lib.scarf();
	this.scarf.name = "scarf";
	this.scarf.setTransform(518.2,353.1,1,1,0,0,0,88.5,58.6);

	this.bowtie = new lib.bowtie();
	this.bowtie.name = "bowtie";
	this.bowtie.setTransform(832.25,44.2,1,1,0,0,0,33.9,16.4);

	this.glasses2 = new lib.glasses2();
	this.glasses2.name = "glasses2";
	this.glasses2.setTransform(841,111.45,1,1,0,0,0,109,25);

	this.glasses1 = new lib.glasses1();
	this.glasses1.name = "glasses1";
	this.glasses1.setTransform(841.05,182.15,1,1,0,0,0,80.9,29.2);

	this.orangehat = new lib.orangehat();
	this.orangehat.name = "orangehat";
	this.orangehat.setTransform(449.7,461.25,1,1,0,0,0,99.4,65.9);

	this.purplehat = new lib.purplehat();
	this.purplehat.name = "purplehat";
	this.purplehat.setTransform(655.1,461.25,1,1,0,0,0,99.4,65.9);

	this.beanie = new lib.beanie();
	this.beanie.name = "beanie";
	this.beanie.setTransform(843.5,535.85,1,1,0,0,0,78.5,60.1);

	this.mouth3 = new lib.mouth3();
	this.mouth3.name = "mouth3";
	this.mouth3.setTransform(703.2,369.8,1,1,0,0,0,42,16.9);

	this.mouth2 = new lib.mouth2();
	this.mouth2.name = "mouth2";
	this.mouth2.setTransform(704,324.75,1,1,0,0,0,28,15.6);

	this.mouth1 = new lib.mouth1();
	this.mouth1.name = "mouth1";
	this.mouth1.setTransform(706.6,293.5,1,1,0,0,0,16.6,8.3);

	this.eyes3 = new lib.eyes3();
	this.eyes3.name = "eyes3";
	this.eyes3.setTransform(841.05,253,1,1,0,0,0,57.8,14.7);

	this.eyes2 = new lib.eyes2();
	this.eyes2.name = "eyes2";
	this.eyes2.setTransform(841,394.45,1,1,0,0,0,64.9,19.2);

	this.eyes1 = new lib.eyes1();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(841.05,323.7,1,1,0,0,0,63.8,29.2);

	this.blush = new lib.blush();
	this.blush.name = "blush";
	this.blush.setTransform(841.45,459.85,1,1,0,0,0,64.5,5.7);

	this.fish = new lib.fish();
	this.fish.name = "fish";
	this.fish.setTransform(565.05,224.75,1,1,0,0,0,83,52.9);

	this.earmuffs1 = new lib.earmuffs1();
	this.earmuffs1.name = "earmuffs1";
	this.earmuffs1.setTransform(586.55,140.1,1,1,0,0,0,145.4,63.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earmuffs1},{t:this.fish},{t:this.blush},{t:this.eyes1},{t:this.eyes2},{t:this.eyes3},{t:this.mouth1},{t:this.mouth2},{t:this.mouth3},{t:this.beanie},{t:this.purplehat},{t:this.orangehat},{t:this.glasses1},{t:this.glasses2},{t:this.bowtie},{t:this.scarf}]}).wait(1));

	// Character
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Aq/k2QgNgFgQgIQgmgWgwgtQhUhLg3hdQgYgogRgnQgQglgJgjQgqimBkiPQgHhaAGhcQAGhpAYhsQBYmYEpg6IA5gVQBMgZBhgPQE0gxGJA9IBFASQBUAbBMAxQD3CcBQE6IAWChQARCogRAlIAjBNQAiBggFBcQgBAMgBAMQgaDjkHCLQgKAFgJAFQgzAZg6AWQgYAJgaAJQgTAGgVAHQl9B6mZhAQiGgViIgpQgCAAgBgBQh4gogbgIQgDgBgDgBgAA9wuQAeANAJhhQADgYACgWQARijAEgVQA/leEfgNIBAASQBKAgA2BCQB6CVgMEaQgFB0gbCKIAgAVQAiAhAQA4QAQA3gFBIQgCAigHAmQgYB/hLCnAhfwjQgChIgJhFQgQh9glh1QhzlskEBcIg1AYQg/AkgtBCQhkCQAID0QADBvAaCDIgiA6QglBIgPBNQgFAVgCAVQgEAlABAjQAGCyCRCVAA9wuIAkAjQAnArANAkQAqBzjmAHQAFALg0gKQg3gJgkgYQhuhIDAh5IAogXQA1gRA/AdgAowjlIhDBKQhNBfg0BwQgBADgBACQigFeB6GIQAHAYAIAXIAnBNQA3BbBQBLQD+DyGOgKIBUgKQBmgRBhglQE1h5CDkbQAJgaAIgcQAThIANhZQAij4hLilQgFg/gchLQgdhRg3hfQhmieADAAArrksIjJEYQgZAigWAgQhoCVgsBNQgYAqgHATIgoBMQgvBcgeBTQhjEMBlBSIAWAKQAcAIAhgKQBQgXBRh4QAaglAagwIgJBPQgBADAAADQgGBdANBZQAtEoDpCQIAAAAIBiA6QB/BDCQAlQADAAADACQFRBVFNhdQB4giB2g4QBGgTBDgsQAvggAvguQDAi7AAk7QAAgWgBgXQgBgggDghIBGBtQBUBxBIAUQBEAKAmg1QAigvgKhXQgNhuhViwQgkhYg5huQhEiDg+hbQgqg9gogpQghg9gshFQhYiLg0goQACgFADgEQADgIAEgIAFKY3IAPBaQATBpAZBEQBRDZBsjnIAhAXQAoAYAgAHQBnATgQilIBAAXQBFAVAggIQBlgbk/k5AriWvIg/BEQhHBQgoA6Qh9C6DzhlIgBAlQACAqANAbQApBVCEhgQACgBACgCIAdA0QAjA3AiAOQBqAqAwmC");
	this.shape.setTransform(169.4356,312.0743);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB92D").s().p("An7XyQgigOgjg3Igdg0IgEADQiEBggphVQgNgbgCgqIABglQjzBlB9i6QAog6BHhQIA/hEIAUgiIAAAAIBiA6QB/BDCQAlIAGACIgIAeQgrFchbAAQgKAAgKgEgAGDWJQgZhEgThpIgPhaIgDgOQB4giB2g4QBGgTBDgsIAPAUQE/E5hlAbQggAIhFgVIhAgXQAQClhngTQgggHgogYIghgXQg4B3gwAAQgtAAgohpgAhYz2Qg3gJgkgYQhuhIDAh5IAogXQA1gRA/AdIAkAjQAnArANAkQAqBzjmAHQACAGgMAAQgMAAgZgFg");
	this.shape_1.setTransform(169.6136,355.7682);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1B18").s().p("AlXbZIgGgCQiQglh/hCIhig6IAAgBQjpiQgtknQgNhZAGhdIABgHIAJhOQgaAvgaAmQhRB3hQAYQghAJgcgHIgWgLQhlhSBjkLQAehUAvhcIAohLQAHgUAYgqQAshMBoiVIAvhEIDJkXIAPgXQgmgWgwgsQhUhLg3hdQgYgogRgnQgQglgJgkQgqilBkiQQgHhaAGhcQAGhpAYhsQBYmXEpg6IA5gWQBMgYBhgQQE0gxGJA+IBFARQBUAcBMAwQD3CdBQE5IAWChQARCpgRAlIAjBNQAiBfgFBcIgCAYQgaDjkHCMQBLioAYh+QAHgmACgjQAFhHgQg4QgQg3gighIgggWQAbiKAFh0QAMkah6iVQg2hChKgfIhAgTQkfAOg/FeQgEAUgRCjIgFAvQgJBhgegOQg/gcg1ARIgoAWQgChHgJhGQgQh8glh1QhzlskEBcIg1AXQg/AlgtBBQhkCQAID0QADBvAaCEIgiA5QglBJgPBMQgFAWgCAUQgEAlABAkQAGCyCRCVIgdgOIAdAOIAGABICTAxIgKAfIhDBIQhNBgg0BwIgCAGQigFeB6GIIAPAvIAnBMQA3BbBQBMQD+DyGOgLIBUgJQBmgRBhgmQE1h4CDkcQAJgZAIgcQAThIANhaQAij4hLilQgFg+gchMQgdhRg3hgQhmidADABIgHgVIAygSQA6gWAzgaIAMAGIgFAKQA0AoBYCJQAsBFAhA9QAoArAqA8QA+BbBECDQA5BuAkBZQBVCvANBvQAKBXgiAvQgmA1hEgKQhIgUhUhxIhGhuQADAiABAgIABAsQAAE8jAC7QgvAtgvAgQhDAthGASQh2A4h4AiQivAxiuAAQigAAihgpg");
	this.shape_2.setTransform(169.4356,295.2055);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_3.setTransform(480,320);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_4.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,320,463,466.5);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#5A0099",
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