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


(lib.top_hat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AD0ktIADAAIgCBFIgNIkAD0ktIABBFAj8k0IAAiuIHtAAIADC1Ah8E8IAAppIBbAAIEVAAAj8k0IDbAHAj8E8ICAAAIFkAAAj8E8IlWAAIAACnISlAAIgHinIlkAAAj8E8IAApw");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ApSHiIAAimIFWAAICAAAIFkAAIlkAAIAAppIBbAAIEVAAIABBGIgNIjIFkAAIAHCmgAh8E8gAh8E8IiAAAIAApwIAAitIHtAAIADC0IkVAAIjbgHIDbAHIhbAAIAAJpgAj8E8g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.top_hat, new cjs.Rectangle(-61.9,-50.7,123.9,101.5), null);


(lib.tears_R = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0099FF").s().p("AACHIQhxgFAqh9QAOgnARgcIAig6IAaApQAdAxAQAoQAvB9hpAAIgHAAgAACBgQhxgFAqh8QAOgnARgcIAig6IAaApQAdAxAQAoQAvB8hpAAIgHAAgAACjIQhxgFAqh9QAOgnARgcIAig6IAaApQAdAxAQAoQAvB9hpAAIgHAAg");
	this.shape.setTransform(0.0338,0.0326);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tears_R, new cjs.Rectangle(-8.1,-45.5,16.299999999999997,91.1), null);


(lib.tears_L = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0099FF").s().p("AACHIQhxgFAqh9QAOgnARgcIAig6IAaApQAdAxAQAoQAvB9hpAAIgHAAgAACBgQhxgFAqh8QAOgnARgcIAig6IAaApQAdAxAQAoQAvB8hpAAIgHAAgAACjIQhxgFAqh9QAOgnARgcIAig6IAaApQAdAxAQAoQAvB9hpAAIgHAAg");
	this.shape.setTransform(0.0338,0.0326);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tears_L, new cjs.Rectangle(-8.1,-45.5,16.299999999999997,91.1), null);


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
	this.shape.graphics.f().s("#009933").ss(1,1,1).p("Ai2CnQgBAQAAASQBZgeBbhAQC3iCAJixIg6AAQhGAHg7AdQitBUgLD3gACqi5QAAABgkATQguAZgrAgQiJBnhaCsQgDAFgDAF");
	this.shape.setTransform(1.15,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663333").ss(1,1,1).p("Ai4HAQgRjNAgjXQA/mtDzguIAOACQAQADAKAJQAgAegqBJQgOAOgoAGQgfACgKACQgPACgVAVQgSATggA2QgqBIgiBVQhZDjAMDnQABAVACAWg");
	this.shape_1.setTransform(-0.878,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC33").s().p("Ai4CmQBaiqCJhoQAqggAugZIAlgUIglAUQguAZgqAgQiJBohaCqQALj2CthUQA6gdBGgGIA6gBQgJCxi2CCQhbBAhZAeIABgjg");
	this.shape_2.setTransform(1.375,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("Ai4HAQgRjNAgjXQA/msDzgvIAOACQAQAEAKAIQAgAegqBKQgOANgoAGQgfACgKACQgPACgVAVQgSATggA2QgqBIgiBWQhZDiAMDmIADAsg");
	this.shape_3.setTransform(-0.878,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stem, new cjs.Rectangle(-21,-45.8,42,91.6), null);


(lib.mouth_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADahmQArgIArgLQAvgMAtgPQAwgQAwgTIAdBKADZhqIABAEIAeCzACHhbQAqgEApgHAKikFQAAgJgBgHQgBABgBABQgvAcgvAYIAUAkAI/jiIACADAHqi7IACAEQArgTAqgVAINhjIAlBcAF8C0QBSg1BChRQBLhZAqhuQATgzAHghQABgFAAgEAJaiyIAbAzAGMiUIAzBnAD6BXIAZCSQA3gVAyggAFZAnIAjCNAjHD6QA9AOBEAIQACAAADAAQBiALBYgLQAXgDAWgEAAxCFIADCLACZB0IANCVQA5gLA0gVAHEgkIAzBoAAthRIAEDMACHhbIARDFAEwh5IAmCWAqhj1IACAPAqdjbIAGAlQAMAwAUAtIAsgrAp7hWIAEgDQARAmAXAlQAMASANASQAmAzAvAoAqYj7IBnAyQAQAHAQAHApDiLIAygwQAzAUA1AQQAmAMAkAJIhDB+Anwg+IBHhZAlfiCQAuANApAHQACAAADABQAkAHAkAFQAkAEAjAEIA/AEIgJDWAkIhuIACgEAmSCqQAwAdA4AVQAvASA0AMIAfh/AmSCqIA7h3Aj+BdIgsB/Ag/CLIgGCCAmmAEIg7BtQAkAfArAaAlSAqIBKiYAi7hhIg/C0AilBxIAxjKAo2AWIA/hNAg1hVQBfAEBdgK");
	this.shape.setTransform(0.3583,0.0064);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag7DKQgmgBgggGQgPgDgUgGIgngMIgvgSQgugTgrgXQgpgWgngZIgRgMQghgXgegZQgtgjgngpQgYgZgXgbQgVgZgMgIIgCgCIgEgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIACgDIABAAQACgBADACQAPAKAaAfQAVAaAXAXQAnApAsAjQAeAYAhAXIAQALQAmAZApAWQArAXAtASIAtARQATAHAVAGIABABQAwAMA2ADQAXABAYgBQAdgBAkgFQAngFAtgIIATgEIAbgGQAigJAjgOQAugUAvgcQA0ggA2grIACgCQAmgeAigfQAogmAjgoQAfgkAbgkQAGgIAFAEQADADgFAHQgeAnggAkQgkApgoAmQgkAhgmAdQgtAkgwAfIgOAJIgfASQgeAQghAOQguARgzAMQgxALg3AGIgZADQgmADgiAAIgPAAg");
	this.shape_1.setTransform(0.0181,-6.2716);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9EQIgFAAQhEgIg9gOIAfh/IgfB/Qg1gMgugSIAsh/IgsB/Qg4gVgwgdIA7h3QArAXAuATIAvASIAnAMQAUAGAPADQAgAGAmABQApABAugEIAZgDQA3gGAxgLIAMCVIgsAHQgtAGgwAAQgtAAgwgGgAA4EQIgDiLgAhBENIAGiCgACdB0QA0gMAtgRIAYCSQgzAVg6ALgAD+BXQAigOAegQIAegSIAkCNQgyAgg4AVgAFcAnIAPgJQAvgeAtgkQAmgeAkghQAogmAlgpQAfgkAegnQAGgHgEgDQgEgEgHAIQgbAkgfAkIgTgkIATAkQgjAogoAmIgdhKIAdBKQgiAfglAfIgDACIgzhnIAzBnQg2ArgzAfIgmiWIAmCWQgwAcguAUIgfizQArgIAsgLQAvgMAtgPQAwgQAwgTQAqgTArgVQAvgYAugcIADgCQABAHAAAJIACgCIAAANIgEAEIgCAJQgGAhgTAzQgrBuhKBZQhCBRhSA1gAH7BEIg0hogAI1gHIgkhcgAJ5h/IgbgzgAndBxIA7htQAmAZApAWIg7B3QgrgagkgfgAg6CBIAJjWIgJDWQg3gDgvgMIgCgBIAyjKIgyDKQgVgGgTgHIgtgRIBAi0IhAC0QgtgSgrgXIBLiYIhLCYQgogWgngYIBDh+IhDB+IgQgLQgggXgegYIBHhZIBKAVQAuANApAHIAEABQAlAHAkAFIBHAIIA/AEQBfAEBdgKQAqgEAogHIAfCzQgjAOgiAJIgbAGIgRjFIARDFIgTAEQgtAIgnAFIgEjMIAEDMQgkAFgdABIgYAAIgWAAgACdB0gAoyAWIA/hNIg/BNQgOgSgMgSQgXglgQgmIAsgrIgsArQgUgtgMgwIgGglIADACQAMAIAUAZQAXAbAYAZQAnApAtAkQAfAZAgAXIASALIg7BtQgwgoglgzgAD+BXgAFcAngAmiAEIAAAAgAnsg+QgtgkgngpIAygwQA0AUA1AQIhHBZIAAAAgApAiLQgWgXgWgaQgagfgPgKQgCgCgDABIgBAAIgDgPIgJgJIAJAAIAAgFIAJAIIBnAyIAgAOIgyAwIAAAAgAJYi7g");
	this.shape_2.setTransform(0,0.0064);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth_1, new cjs.Rectangle(-68,-28.7,136.8,57.5), null);


(lib.frown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AsfCTIAkgaQAvggA2ggQCshkC2g1QIZieHqFVQAoAcApAg");
	this.shape.setTransform(0,-0.0081);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frown, new cjs.Rectangle(-82.4,-17.2,164.9,34.4), null);


(lib.eyebrow_R = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AH2hmQhAgfhkg7QhQgqg7gBQhKgBhbA8QhhBBiQCXQiLCTh7AoQgQAGgQAD");
	this.shape.setTransform(0.025,0.0242);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrow_R, new cjs.Rectangle(-52.7,-26,105.5,52.1), null);


(lib.eyebrow_L = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnyBKQAzgvBMhSQA/g+A1gQQBEgUBhAjQBoAlCpBsQCjBqB5AHQARABAPgB");
	this.shape.setTransform(0.025,0.008);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrow_L, new cjs.Rectangle(-52.4,-16.6,104.9,33.2), null);


(lib.eye2_R = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ABnCOQgsAhg7AAQhIAAgzgzQgzgzAAhJQAAhIAzgzQAzgzBIAAQBJAAAzAzQAzAzAABIQAABEgsAxABnCOQgJAEgMAAQgWAAgQgQQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAOgGAMQgEAHgGAGQgIAIgKAEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmAnQgPgQAAgXQAAgVAPgRQARgPAVAAQAXAAAQAPQAQARAAAVQgBAOgFALQgFAHgFAHQgJAHgJAEQgJAFgMAAQgVAAgRgQg");
	this.shape_1.setTransform(8.2,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah7B7QgzgzAAhIQAAhHAzg0QA0gzBHAAQBIAAAzAzQA0A0AABHQAABEgsAwQAFgLABgOQAAgWgQgRQgQgPgXAAQgWAAgRAPQgPARAAAWQAAAXAPAQQARAQAWAAQAMAAAJgFQgtAig6AAQhHAAg0g0g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye2_R, new cjs.Rectangle(-20,-20,40,40), null);


(lib.eye2_L = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AgegmQAAAYgRARQgRARgYAAQgYAAgRgRQgRgRAAgYQAAgYARgRQARgRAYAAQAYAAARARQARARAAAYgACvAAQAABJgzAzQgzAzhJAAQhIAAgzgzQgzgzAAhJQAAhIAzgzQAzgzBIAAQBJAAAzAzQAzAzAABIg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_1.setTransform(-8.85,-3.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah7B7QgzgzAAhIQAAhHAzg0QA0gzBHAAQBIAAAzAzQA0A0AABHQAABIg0AzQgzA0hIAAQhHAAg0g0gAiBhOQgQAQgBAYQABAZAQAQQARARAZAAQAXAAARgRQARgQAAgZQAAgYgRgQQgRgSgXABQgZgBgRASg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye2_L, new cjs.Rectangle(-20,-20,40,40), null);


(lib.eye1_R = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Al8hcQgdAFgWAWQgdAdAAAoQAAAoAdAdQAcAdApAAQAoAAAdgdQAdgdAAgoQAAgogdgdQgXgXgfgEQgHgBgIAAQgJAAgJABIhoABAHlhlItAAJ");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhEBFQgdgdAAgoQAAgoAdgdQAWgVAdgGQAJgBAIAAQAIAAAIABQAeAFAYAWQAcAdAAAoQAAAogcAdQgdAdgpAAQgnAAgdgdg");
	this.shape_1.setTransform(-36.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye1_R, new cjs.Rectangle(-51,-12.6,102,25.299999999999997), null);


(lib.eye1_L = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AFchcQAHgBAIAAQAJAAAJABQAdAFAWAWQAdAdAAAoQAAAogdAdQgCACgDADQgGAFgHAFQgXAOgcAAQgcAAgWgOQgIgFgGgFQgDgDgCgCQgdgdAAgoQAAgoAdgdQAXgXAfgEgAF9hcIBoABAnkhlINAAJ");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyBUQgHgFgGgFIgGgFQgcgdAAgoQAAgoAcgdQAYgWAegFQAIgBAHAAQAJAAAJABQAdAGAWAVQAdAdAAAoQAAAogdAdIgFAFIgOAKQgWAOgcAAQgbAAgXgOg");
	this.shape_1.setTransform(36.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye1_L, new cjs.Rectangle(-51,-12.6,102,25.299999999999997), null);


(lib.btn3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFF33").ss(1,1,1).p("AETAAQAAByhQBRQhRBQhyAAQhxAAhRhQQhQhRAAhyQAAhxBQhRQBRhQBxAAQByAABRBQQBQBRAABxg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6633FF").s().p("AjBDCQhRhQAAhyQAAhxBRhQQBQhRBxAAQByAABQBRQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhQhRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn3, new cjs.Rectangle(-28.5,-28.5,57,57), null);


(lib.btn2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFF33").ss(1,1,1).p("AEQAAQAABxhQBPQgSASgTAOQhEAwhXAAQhWAAhDgwQgUgOgSgSQhQhPAAhxQAAhwBQhPQBPhQBwAAQBxAABPBQQBQBPAABwg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3333FF").s().p("AiZDgQgUgOgSgSQhQhQAAhwQAAhvBQhQQBQhQBvAAQBwAABQBQQBQBQAABvQAABwhQBQQgSASgTAOQhEAvhXABQhWgBhDgvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn2, new cjs.Rectangle(-28.1,-28.1,56.3,56.3), null);


(lib.btn1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFF33").ss(1,1,1).p("Ag5EsQhZgQhDhDQhZhZAAh9QAAh9BZhZQBYhYB9AAQB+AABYBYQBZBZAAB9QAAB9hZBZQhDBDhZAQ");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC00").s().p("Ag5EsQhYgQhEhDQhYhZAAh9QAAh9BYhZQBZhYB8AAQB9AABZBYQBYBZAAB9QAAB9hYBZQhEBDhYAQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn1, new cjs.Rectangle(-31.2,-31,62.5,62), null);


(lib.Blush_R = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF00FF").s().p("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FAsIAkh+gAAYADQgEAZgBAwQAJhKAWhIQgTAigHAngABMBJIgBgBIAAAAIABgJIgBAAIABAAIgCACIABAHQAAAAAAAAQgBAAAAAAQABAAAAAAQAAAAABABgABMA0IgBALQADgDgBgGIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIACgDQABgBgBAAIABgFIgBABIABgKQgBADAAADIAAABIgBAEIAAABIgBAGgAApA2IgBAAIAAABIABgBIABAAIgBAAIAAgBIAAAAIgBgBIAAABIABAAIgBAAgABwA3IAAAAIAMgZQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABgBIADgGIADgGIAAgEIgHALIgDADIgCAEIgEALIAAAAgAC1goQgMAWgOAjIgNAiIA6hjQAJgOADgHQAHgNAEgQQgYAagSAggAjhgZQgOAZgKAWIgJAXIAZgtIAMggIgEAHgAAgAsIABAAIAAgBIABAAIgBAAIAAAAgAh6AoIABAAIgBAAgAh4AlIgBAAIAAABIgBABIAAAAIACgBIAAgBIABgBIgBAAIAAAAgAAmATIAAABQgCACAAAEQAAAFgCADIABACIADgGIACgGIABgMIABgGIAAAAIAAgDIAAgBIAAgCIACgDIgCgCgABCgKIgHANQgLAWAEALIAqhiQgMARgQAjgABQAcIAAAAIgCAGIACgBIACgJIAAgBIABgFQgDAEAAAGgAgHAfIAbhAIAShDQghA0gMBPgAhzAZIABABIAAgBgAhyAYIABAAIABgCIAAgBIgCAAgAhwAUIABAAIAAgBgAhvATIABAAIAAgBgAhggIIgPAaIAohBIgBAAgABTAPIABAAIAAAAgADqgEQAHgHAKgPIAJgQIATggQAGgOgBgHgAjUgPIABAAIAAgBQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAgAjRgWIAAABQgDADABACIAAgBIABgCIABAAIACgEIAAgCIAAAAIAAACgAjPgZIABgBIgBAAgAhGgzIAAABIAAABIABgBIABgBIgBAAIABgBgAhEg0IAAAAIAAAAIABgBIABgCIAAAAIAAgBIAAABIgCABIAAACgAEfhFIADgBIAEgBIAAgDIAGgQgADuhyIgBACIAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAEgEAHIgFASIABgCIADgGIAAAAIADgHIABgDIAAgDIACgDIABgGIACgDIAAgCQABgBAAAAQABAAAAgBQAAAAAAAAQAAAAgBAAIAAgCQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABg");
	this.shape.setTransform(0.0375,-0.0036);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Blush_R, new cjs.Rectangle(-31.3,-13.6,62.7,27.299999999999997), null);


(lib.blush_L = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF00FF").s().p("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gBAwQAJhKAWhIQgTAigHAngABMBJIgBgBIAAAAIABgJIgBAAIABAAIgCACIABAHQAAAAAAAAQgBAAAAAAQABAAAAAAQAAAAABABgABMA0IgBALQADgDgBgGIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIACgDQABgBgBAAIABgFIgBABIABgKQgBADAAADIAAABIgBAEIAAABIgBAGgAAoA2IAAABIABgBIABAAIgBAAgABwA3IAAAAIAMgZQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABgBIADgGIADgGIAAgEIgHALIgDADIgCAEIgEALIAAAAgAApA2IAAgBIAAAAIgBgBIAAABIABAAIgBAAgAC1goQgMAWgOAjIgNAiIA6hjQAJgOADgHQAHgNAEgQQgYAagSAggAjhgZQgOAZgKAWIgJAXIAZgtIAMggIgEAHgAAgAsIABAAIAAgBIABAAIgBAAIAAAAgAh6AoIABAAIgBAAgAh4AlIgBAAIAAABIgBABIAAAAIACgBIAAgBIABgBIgBAAIAAAAgAAmATIAAABQgCACAAAEQAAAFgCADIABACIADgGIACgGIABgMIABgGIAAAAIAAgDIAAgBIAAgCIACgDIgCgCgABCgKIgHANQgLAWAEALIAqhiQgMARgQAjgABQAcIAAAAIgCAGIACgBIACgJIAAgBIABgFQgDAEAAAGgAgHAfIAbhAIAShDQghA0gMBPgAhzAZIABABIAAgBgAhyAYIABAAIABgCIAAgBIgCAAgAhwAUIABAAIAAgBgAhvATIABAAIAAgBgAhggIIgPAaIAohBIgBAAgABTAPIABAAIAAAAgADqgEQAHgHAKgPIAJgQIATggQAGgOgBgHgAjUgPIABAAIAAgBQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAgAjRgWIAAABQgDADABACIAAgBIABgCIABAAIACgEIAAgCIAAAAIAAACgAjPgZIABgBIgBAAgAhGgzIAAABIAAABIABgBIABgBIgBAAIABgBIAAAAIAAAAIAAAAgAhCg3IgCABIAAACIABgBIABgCIAAAAIAAgBgAEfhFIADgBIAEgBIAAgDIAGgQgADuhyIgBACIAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAEgEAHIgFASIABgCIADgGIAAAAIADgHIABgDIAAgDIACgDIABgGIACgDIAAgCQABgBAAAAQABAAAAgBQAAAAAAAAQAAAAgBAAIAAgCQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABg");
	this.shape.setTransform(0.0375,-0.0036);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blush_L, new cjs.Rectangle(-31.3,-13.6,62.7,27.299999999999997), null);


// stage content:
(lib.MPHFinalPAguilar = function(mode,startPosition,loop,reversed) {
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
			this.eye1_L.x = 557.85;
			this.eye1_L.y = 257.45;
			this.eye1_R.x = 424;
			this.eye1_R.y = 257.45;
		    this.Smile1.x = 483.1;
			this.Smile1.y = 341.7;
		    this.branch.x = 544.45;
			this.branch.y = 92;
		    this.eyebrowL.x = 412.25;
			this.eyebrowL.y = 217.6;
			this.eyebrowR.x = 563.75;
			this.eyebrowR.y = 208.1;
			}
			
		this.Face2_btn.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.eye2_L.x = 413.6;
			this.eye2_L.y = 264.75;
			this.eye2_R.x = 568.5;
			this.eye2_R.y = 264.75;
			this.frown.x = 486.85;
			this.frown.y = 335.55;
			this.tearL.x = 390.65;
			this.tearL.y = 312.6;
			this.tearR.x = 581.9;
			this.tearR.y = 320.5;
			this.tophat.x = 507.3;
			this.tophat.y = 113.8;
			}
			
		this.reset_btn.addEventListener("click", Clickreset.bind(this));
			
		function Clickreset() {
			this.Smile1.x = 138.2;
			this.Smile1.y = 569.85;
			this.frown.x = 142.9;
			this.frown.y = 515.35;
			this.eye1_L.x = 100.65;
			this.eye1_L.y = 428.85;
			this.eye1_R.x = 180.3;
			this.eye1_R.y = 428.85;
			this.eye2_L.x = 81.85;
			this.eye2_L.y = 365.45;
			this.eye2_R.x = 211.3;
			this.eye2_R.y = 365.45;
			this.tearL.x = 317.05;
			this.tearL.y = 550.8;
			this.tearR.x = 375.9;
			this.tearR.y = 552;
			this.eyebrowL.x = 80.4;
			this.eyebrowL.y = 289.05;
			this.eyebrowR.x = 231.1;
			this.eyebrowR.y = 284.45;
			this.tophat.x = 824.3;
			this.tophat.y = 237.6;
			this.branch.x = 832.5;
			this.branch.y = 356.5;
			}
		
		this.Smile1.on("pressmove", dragMe);
		this.frown.on("pressmove", dragMe);
		this.eye1_L.on("pressmove", dragMe);
		this.eye1_R.on("pressmove", dragMe);
		this.eye2_L.on("pressmove", dragMe);
		this.eye2_R.on("pressmove", dragMe);
		this.eyebrowL.on("pressmove", dragMe);
		this.eyebrowR.on("pressmove", dragMe);
		this.tearL.on("pressmove", dragMe);
		this.tearR.on("pressmove", dragMe);
		this.blushL.on("pressmove", dragMe);
		this.blushR.on("pressmove", dragMe);
		this.tophat.on("pressmove", dragMe);
		this.branch.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Title_Block
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAnIAAgIIAXgWIALgNQAEgGAAgHQAAgGgEgEQgEgEgHAAQgJAAgKAJIAAgJQAJgHALAAQALAAAGAGQAGAFAAAKQAAAHgFAHQgEAGgKALIgRARIAjAAIAAAIg");
	this.shape.setTransform(848.225,148.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAnIAAgIIAXgWIALgNQAEgGAAgHQAAgGgEgEQgEgEgHAAQgJAAgKAJIAAgJQAJgHALAAQALAAAGAGQAGAFAAAKQAAAHgFAHQgEAGgKALIgRARIAjAAIAAAIg");
	this.shape_1.setTransform(842.275,148.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAeQgGgKAAgSQAAgUAHgLQAGgKAMAAQAYAAAAAnQAAATgHALQgHAKgLAAQgLAAgHgKgAgPABQAAAgAPgBQAQAAAAgfQAAghgQAAQgPABAAAgg");
	this.shape_2.setTransform(836.425,148.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAnIAAgIIAXgWIALgNQAEgGAAgHQAAgGgEgEQgEgEgHAAQgJAAgKAJIAAgJQAJgHALAAQALAAAGAGQAGAFAAAKQAAAHgFAHQgEAGgKALIgRARIAjAAIAAAIg");
	this.shape_3.setTransform(830.375,148.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAoIAAgIIAFABQAHAAADgIIAEgKIgVg2IAKAAIAPApIAAAEIAAAAIABgEIAQgpIAJAAIgZA/QgGAQgMABIgGgBg");
	this.shape_4.setTransform(821.875,150.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAZQgFgFAAgHQAAgOASgDIAQgDQAAgOgMAAQgJABgIAGIAAgJQAJgFAJAAQAUAAAAAVIAAAjIgJAAIAAgJQgGAKgKAAQgJAAgEgEgAAAABQgGABgDACQgDACAAAGQAAAEADADQADADAFgBQAFABAEgFQAFgFAAgHIAAgFg");
	this.shape_5.setTransform(816.275,149.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAeAnIAAgzIABgPIAAAAIgCAHIgbA7IgDAAIgag7IgDgHIABAPIAAAzIgJAAIAAhNIAMAAIAXA1IADAJIAAAAIAEgJIAYg1IALAAIAABNg");
	this.shape_6.setTransform(808.625,148.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAUIAAgfIgJAAIAAgIIAJAAIAAgNIAIgDIAAAQIAOAAIAAAIIgOAAIAAAeQAAAFACADQACACAEAAQAEAAACgCIAAAIQgDABgFAAQgNAAgBgQg");
	this.shape_7.setTransform(849,127.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAcIAAg2IAIAAIAAALIABAAQACgGACgDQAEgDAFAAIAFABIAAAJQgCgCgEAAQgGAAgDAFQgEAGAAAIIAAAcg");
	this.shape_8.setTransform(845.675,127.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAYAnIgIgWIgfAAIgIAWIgKAAIAdhNIAJAAIAdBNgAAAgXIgMAgIAZAAIgMggIgBgFIAAAAIAAAFg");
	this.shape_9.setTransform(839.775,126.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYApIAAhQIAIAAIAAAKIABAAQAGgLAMAAQAKAAAGAHQAGAIAAAMQAAANgGAJQgHAIgMAAQgKAAgFgJIgBAAIAAAhgAgLgbQgFAGAAAHIAAAIQAAAGAFAEQAEAGAHAAQAHAAAFgHQAEgFAAgLQAAgJgEgFQgEgFgHgBQgHABgFAFg");
	this.shape_10.setTransform(830.225,129);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAeAcIAAgeQAAgJgDgFQgCgEgHAAQgGAAgDAGQgEAFgBAHIAAAeIgIAAIAAgfQAAgRgMAAQgGAAgDAFQgEAFAAAIIAAAeIgJAAIAAg2IAJAAIAAAJIAAAAQAGgKALAAQAFAAAFADQADADABAFQAHgLAMAAQASAAAAAWIAAAhg");
	this.shape_11.setTransform(822.1,127.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAVQgHgHAAgNQAAgNAHgIQAIgIAMAAQAMAAAHAIQAHAHAAANQAAANgHAIQgIAIgMAAQgMAAgHgIgAgMgOQgFAFAAAKQAAAJAFAFQAFAHAHAAQAJgBAEgFQAFgGAAgKQAAgJgFgGQgEgFgJgBQgHAAgFAHg");
	this.shape_12.setTransform(814.075,127.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSAdQgKgKAAgSQAAgRALgMQAMgLAQAAQALAAAHADIAAAKQgJgFgJABQgNAAgIAIQgIAJAAAOQAAAOAHAJQAIAHAMABQALAAAJgGIAAAJQgJAFgMAAQgQAAgKgLg");
	this.shape_13.setTransform(807.425,126.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgNAcIAAg2IAIAAIAAAMIABAAQACgHACgCQAEgEAFAAIAFABIAAAJQgCgCgEAAQgGAAgDAFQgEAGAAAIIAAAcg");
	this.shape_14.setTransform(845.625,106.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAZQgFgFAAgHQAAgPASgCIAQgDQAAgOgMABQgJgBgIAIIAAgJQAJgGAJAAQAUAAAAAUIAAAjIgJAAIAAgIQgGAKgKAAQgJAAgEgEgAAAABQgGACgDACQgDACAAAFQAAAFADACQADADAFAAQAFAAAEgFQAFgFAAgHIAAgFg");
	this.shape_15.setTransform(840.375,106.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDApIAAhRIAHAAIAABRg");
	this.shape_16.setTransform(836.375,105.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgDAoIAAg2IAHAAIAAA2gAgDgdQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_17.setTransform(833.725,105.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAFIAAggIAJAAIAAAeQAAASANAAQAGAAAEgFQAEgFAAgIIAAgeIAJAAIAAA2IgJAAIAAgJQgGAKgKAAQgUAAAAgXg");
	this.shape_18.setTransform(829.2,106.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVAlIAAgJQAKAGAIAAQATAAAAgWIAAgGQgGALgMAAQgKAAgGgIQgHgHABgLQgBgOAIgJQAGgIALAAQALAAAFAJIAAgIIAJAAIAAAyQAAAegcAAQgKAAgIgEgAgLgbQgEAGAAALQgBAJAFAFQAFAFAGAAQAIAAAEgFQAFgEgBgJIAAgIQABgGgFgFQgEgFgHAAQgHAAgFAGg");
	this.shape_19.setTransform(822.7,107.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQAZQgFgFAAgHQAAgPASgCIAQgDQAAgOgMABQgJgBgIAIIAAgJQAJgGAJAAQAUAAAAAUIAAAjIgJAAIAAgIQgGAKgKAAQgJAAgEgEgAAAABQgGACgDACQgDACAAAFQAAAFADACQADADAFAAQAFAAAEgFQAFgFAAgHIAAgFg");
	this.shape_20.setTransform(816.725,106.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgWAmIAAhLIAVAAQALAAAHAFQAGAHAAAKQAAAMgHAFQgIAIgLgBIgKAAIAAAdgAgNABIAJAAQAJAAAEgDQAFgFAAgHQAAgPgRAAIgKAAg");
	this.shape_21.setTransform(811.25,105.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhiBfQgWgKAAgQQAAgLARgJQAQgJAVAAQAJgBAPADQgEAMAAAFQAAAQAQABQAOgBAGgLIAIgRIhshyIhDglIDHAAIgjAfIAwA5IAhg2IgogiICWAAIg2AlIhIB9QgOAZgWAMQgVAKglAAQghAAgXgKg");
	this.shape_22.setTransform(917.675,76.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AACBJIAkgeIAAgvQgBgdggAAQgSAAgMALQgLAMAAASIAAAjIAjAeIiwAAIA5gkIAAhCIg5glICJgDIAAAmQAQgYASgIQAQgJAeAAQBRAAgBA1IAAA4IA6Akg");
	this.shape_23.setTransform(885.45,72.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhhA3QgpgXAAggQAAgfAqgXQAqgXA6AAQA1AAApAZQApAZAAAfQAAAegpAWQgoAWg6AAQg4AAgpgXgAgvABQAAAvAvAAQAwAAAAguQAAgxgwAAQgvAAAAAwg");
	this.shape_24.setTransform(853.1,72.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABOBKIAjgfIAAgyQAAgbggABQgSAAgMALQgNALAAARIAAAlIAjAfIiYAAIAjgfIAAguQAAgegeAAQgUAAgMALQgNALAAARIAAAlIAjAfIivAAIA5glIAAhCIg5glICJgDIAAAmQAdgpA0AAQA6AAASArQAXgrA4gBQAoAAAVAQQAVAQAAAeIAAAwIBAAlg");
	this.shape_25.setTransform(813.575,72.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhWA5QgmgWAAghQAAghAlgXQAmgXA1AAQAwAAAgAWQAgAXAHAnIidAAQgBAoBGAAQBCAAAVgaQADAGAAAEQAAAVgfANQgdANgzAAQg9AAgngVgAgVgoQgMAKAAAOIBUAAQAAgigqABQgRAAgNAJg");
	this.shape_26.setTransform(774.65,72.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AjCBkIBKgvIAAhpIhKgvID5AAIhJAvIAABxIB7AAIBahDIAABqg");
	this.shape_27.setTransform(741.2,69.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AiJBIIA5glIAAhCIg4gkICIgEIAAAsQAagsAsAAQAeAAATAMQATAMAAASQAAAggwAAQgMAAgUgDQAIgLAAgIQAAgTgUAAQgTAAgMAPQgMAPAAAUIAAAXIBCAlg");
	this.shape_28.setTransform(861.875,33.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AALBkIBFgvIAAiAIhKCvIg1AAIhMipIAAB6IBFAvIjGAAIBJgvIAAhqIhJguIDNAAIAnBbIAlhbIDgAAIhJAuIAABqIBJAvg");
	this.shape_29.setTransform(823.1,30.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// butons
	this.reset_btn = new lib.btn3();
	this.reset_btn.name = "reset_btn";
	this.reset_btn.setTransform(868.2,584.65);

	this.Face2_btn = new lib.btn2();
	this.Face2_btn.name = "Face2_btn";
	this.Face2_btn.setTransform(708.8,569.25);

	this.Face1_btn = new lib.btn1();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(789.25,519);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Face1_btn},{t:this.Face2_btn},{t:this.reset_btn}]}).wait(1));

	// Character
	this.tearR = new lib.tears_R();
	this.tearR.name = "tearR";
	this.tearR.setTransform(355.9,552);

	this.tearL = new lib.tears_L();
	this.tearL.name = "tearL";
	this.tearL.setTransform(317.05,550.8);

	this.blushR = new lib.Blush_R();
	this.blushR.name = "blushR";
	this.blushR.setTransform(228.4,175.7);

	this.blushL = new lib.blush_L();
	this.blushL.name = "blushL";
	this.blushL.setTransform(114.5,175.7);

	this.tophat = new lib.top_hat();
	this.tophat.name = "tophat";
	this.tophat.setTransform(824.3,237.6);

	this.eye1_R = new lib.eye2_R();
	this.eye1_R.name = "eye1_R";
	this.eye1_R.setTransform(168.65,428.85);

	this.eye1_L = new lib.eye2_L();
	this.eye1_L.name = "eye1_L";
	this.eye1_L.setTransform(100.65,428.85);

	this.eye2_R = new lib.eye1_R();
	this.eye2_R.name = "eye2_R";
	this.eye2_R.setTransform(211.3,365.45);

	this.eye2_L = new lib.eye1_L();
	this.eye2_L.name = "eye2_L";
	this.eye2_L.setTransform(81.85,365.45);

	this.eyebrowR = new lib.eyebrow_R();
	this.eyebrowR.name = "eyebrowR";
	this.eyebrowR.setTransform(231.1,284.45);

	this.eyebrowL = new lib.eyebrow_L();
	this.eyebrowL.name = "eyebrowL";
	this.eyebrowL.setTransform(80.4,289.05);

	this.frown = new lib.frown();
	this.frown.name = "frown";
	this.frown.setTransform(142.9,515.35);

	this.Smile1 = new lib.mouth_1();
	this.Smile1.name = "Smile1";
	this.Smile1.setTransform(138.3,569.85,1,1,0,0,0,0.1,0);

	this.branch = new lib.stem();
	this.branch.name = "branch";
	this.branch.setTransform(832.5,356.5,1,1,14.9992);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AABaZQhBgPlqi6Qlpi6iliEQiliFiMhnQiMhngziCQgziCgVhAQgZhVAHiaQAGi1AaiDQAhioBIiGQBZilCxinQCFh8DgigQBvhMAngZQDyiXEjhTQAUgGAPgBIABgDIABgFIACgCIAAgCIACgBQACgBABgEIgBgBIABgEIAIgTQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIABgDIAAgBIABABIACgHIAFgNIADgDIACgJIAAABIABgBIACgJQACgFAEgCIADgBQAShLBfhNQB/hmA+gUQBNgaBAASQA0APAjApQAfAjAOAwQAMApAOBVQARBLAlAqQAbAeAzAeIBaAxQDiB3CoC+QCaCuBeDaQBLCrAMCTQAFAygDBGQgPG4jqGPQhmCrhwBoQi4CqjNCHQjNCGhcACQhdACieBtIgTAOIgIAKQglA2gzAAQgLAAgMgCg");
	this.shape_30.setTransform(479.1026,277.4759);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.branch},{t:this.Smile1},{t:this.frown},{t:this.eyebrowL},{t:this.eyebrowR},{t:this.eye2_L},{t:this.eye2_R},{t:this.eye1_L},{t:this.eye1_R},{t:this.tophat},{t:this.blushL},{t:this.blushR},{t:this.tearL},{t:this.tearR}]}).wait(1));

	// Frame
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_31.setTransform(480,320);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_32.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,329,471,302);
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