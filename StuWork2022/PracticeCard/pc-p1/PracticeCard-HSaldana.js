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


(lib.Pinata = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgOAHQgHgDAAgEQAAgDAGgDQAGgCAJAAQAMAAAFADQAFACAAADQAAAEgGADQgGACgKAAQgIAAgGgCgAgEgCQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQACACACAAQADAAACgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFgBQgCAAgCACg");
	this.shape.setTransform(16.6,2.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAMIgBgFIAHABIAEgBIADgCIgQgQIAPAAIAHALIAHgLIAPAAIgQARQgCAEgCABQgEABgIAAIgJAAg");
	this.shape_1.setTransform(12.05,2.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAIQAAgBgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBABAAQACgBAHAAIAJgBIAGgBIgBgCIgEAAIgEAAIgDACIgNgBIABgDIAFgBIAFgBIAIAAIAJAAIAHABIADADIABACIAAAHIAAACIACACIgOAAIgBgBIAAgBIgGABIgIABQgHAAgEgBgAAAABIgFABIgBACIABABIAEAAIADAAIADgBIABgDIAAgBIgGABg");
	this.shape_2.setTransform(7.35,2.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAQAMIAAgRIgKARIgLAAIgKgRIAAARIgOAAIAAgXIAWAAIAHAOIAIgOIAWAAIAAAXg");
	this.shape_3.setTransform(1.425,1.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAIIgHgDQgDgCAAgDQAAgDAGgDQAFgCAKAAIAMABQAGABABACQADACAAADIAAABIgcAAIACACIAFABIADAAIADgBIAOAAIgIAEIgNABIgLgBgAgFgDIgBACIAOAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgFgBQgDAAgCABg");
	this.shape_4.setTransform(-6.9,2.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAMIAAgXIAXAAIAMABIAHACIAEAEIABAEQAAAEgCACIgFAEIgHACIgKAAgAgHAHIAEAAIAGgBIAEgCIABgEQAAgDgDgBQgDgCgFAAIgEAAg");
	this.shape_5.setTransform(-12.125,1.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIAMIgGgBIgEgDIgDgDIAPAAIACACIAEABQADAAACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFgBIgDABIgDABIgNgBIAFgNIAhAAIAAAGIgWAAIgBADIAEAAIAEAAQAIAAAFACQAFABAAAEQAAACgDACIgHAEIgMABIgIgBg");
	this.shape_6.setTransform(-20.025,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("ADqkTQAKAJAKAJQAIAIAHAIQAPARANASQAXAhAOAjQgKgcgDgJIgBgEICMkdIkLCZIgBAAIACACQgEAAgBAAQAXAPAWATQgVgUgTgOAC6k3IAAAAQgBgBgBAAQgCgBgBgBQAFABAGACIgDACAC0k6QACABACABAC0k6QABAAAAAAQg9glgKAFABulaIAAAAIgBgEIgVgCQALADALADQAlAMAhAUAFmghQACg8gNgOQgBgBgBgBQgBgBAAgBIAAAAQgGgPgEgMAFmghQACAPAAAQQAAAkgHAhIEXhaIkZhXAFYhvQALAlADApAENjxQAtAsAGASIgXgbAjbghIGdAAQAXAAAAAKIAABUQAAAKgXAAImdAAQgWAAgBgKIAAhUQABgKAWAAgABtleIhckZIhTEOIgBAFQAagFAagBQAIAAAHAAQAuAAAqAKAC8E2IABAAIEQCMIiNkPIgDgFQAHgPAGgQIACgFQADgHADgGIAPg4QAAgBAAgBAC+E0QAegXAfgcQA0gxAMgaQABgEABgEACaFEQAUgJALgHQACgBADABAC8E2QABgBABgBACTFHQAfgLAKgGACaFEQgEABgDACQgdANgeAHQgKADgKABQghAHgjAAQgBAAgCAAQAyACATgIQABAAABgBABCFgQACABACAAQAJgDAJgDAFKCPQgaA7gyAyQguAug2AaAi8k2IgHgEQgWAVgWAWQAYgWAbgRQAKgGAJgFIgaAHIkJiHICPESQADgEACgFQAGgMAPgTQARgWATgUQAIgHAIgHAgPlqQgogCgLADAiplBQAwgaA2gJAk9ivQgLAVgJAVQAAAAAAABAljhBQAAgBAAgBQAGgiAMgfQgVArADAWAljhAQAAAAAAgBIgFABIkPBYIEZBWIACAAAlmg6QAAAIAAAIQAAgFABgFQABgGABgGIgDAGIABAGAliBBQgGghAAgiQAAgUACgUAliBBQACAYADARQABACAAACQAZAwAGATIAAAAIiOEgIEJiXIADgCAkAD7QghgigXglQgfg2gLg9Aj0EHQgCgDgDgCQAIAJAIAIQARARANAKQAHAFAGAEQABAAAAAAIgCABAj0EHQAGAGAFAGQADAEAEAEQANAMAKAHAj5ECQgDgDgDgDQAAgBgBAAQARATANANQAWAXAIAEIAFACAg6FhQAXAEAYAAIAFAAQACAAABABAhvFVQgogMgkgXQAvAlAfAEQAYADAbADQgbgEgagIIACAGIBdEdIBWkXAi7EyQgegSgbgZ");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AESC9IgBggQACg8gOgNIAEgDIEZBXIkWBbQAGgiAAgkgAohkCIEJCIQgWAUgXAWIgPAPQgUAUgQAVQgPATgGALIgFAKg");
	this.shape_8.setTransform(8.55,-19.1375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgCFoIgEAAIgEAAQgYgBgXgDQgbgEgagIQgogNgkgWQgegTgbgZIgFgEIgGgGIgBgCQghghgXgmQggg1gKg+QgGggAAgjQAAgTACgUIABgLIACgLIAAgBIAAgCQAGgiAMgfIAAgCQAJgVALgUIAFgJQAGgNAPgTQAQgVAUgUIAQgOQAYgWAbgRIATgLQAvgaA3gJQAZgFAbgBIAOAAQAvAAAqAKIAVAGQAlAMAiATIADACIADACIAAAAIADACQAXAPAWATIAUASIAOAQQAQARANASQAWAgAPAkIAJAbIAAAAQAMAlADAoIABAfQAAAkgGAiIAAACIgQA3IgFAOIgCAEQgbA8gxAyQguAug2AZIgHAEQgdANgfAHIgTAEQghAGgkAAIgCAAgAjxA/QAAALAXAAIGcAAQAYAAAAgLIAAhTQAAgKgYAAImcAAIGcAAQAYAAAAAKIAABTQAAALgYAAImcAAQgXAAAAgLIAAhTQAAgKAXAAQgXAAAAAKIAABTg");
	this.shape_9.setTransform(-0.075,-0.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("ACYFaIAyAHQAXAEAZAAIAEAAIAEAAQAyADATgIIAEABIhXEXgAlxAXIEPhXIABAGIAAARQgBATAAAUQAAAiAFAhQACAYAEARIgBAEgAFelgQgrgKguAAIgPAAQgogCgLADIBUkOIBbEag");
	this.shape_10.setTransform(-26.15,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("Ak9CxIAFACQAXAmAhAiQARATANANQAWAXAIAEIACADIkJCXgAC8E2IACgCQAegXAegdQA0gwAMgaIAGgDICMEPgAEMjxIgOgPIgUgTQgVgUgUgOIgBgCIEMiYIiMEcQgGgSgugsg");
	this.shape_11.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.1,-64.1,128.3,128.3);


(lib.Cinco_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF6600").s().p("AhhCrQgmgOgWgVQgdgeAAg1QAAgrAVgqQAVgqAkgiQAjgjArgUQAqgUAsAAQA3AAAAANQAAAPgZABQgeABgZAQQgaAPgTAZQgUAbgLAgQgLAhAAAjQAAAoATAYQASAYAdAAQAcABAVgdQAVgdAAglQAAgfgNgbQgNgbgZgTQgLgJAAgDQAAgFAPgLQARgLAVgIQAVgHAOAAQARAAAPAIQAOAJAMAQQALAPAGAWQAGAUAAAYQAAAlgOAmQgPAmgYAYQgfAdgrATQgrATgnAAQgmAAglgNg");
	this.shape.setTransform(131.925,48.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AiwDiQAAgLAFgQQAFgQAJgOQAKgNAPgKQATgNAlgRIghg7QgMgVgNghQgehGAAg6QAAgsALgcQAKgYAagKQAVgIARAAQAYAAAIASQAIASAHBCQAGBIAPBEIAGAeIACAAQAJgWALgeIAahAIATg3IAEgQQAKgkATgUQANgNAQgIQAQgIANAAQAYAAAAAVQAAAKgGAWQgHAVgLAcIgZA7QgOAhgSAiQggBBggAtQgYAggXAZQgZAZgaAUQgbATgXALQgYAJgUAAQgQAAAAgOg");
	this.shape_1.setTransform(92.925,55.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AipCaQgbgcAAgqQAAgaANgjQAOgjAXgiQAmg4A6gmQA7goA4AAQAvAAAeATQAeATAAAdQAAAWgPAYQAUAAAFAFQAFAEAAAPIgBAPQgDAjAAAgIABAZIABATIACASQADARAHARQgWAVgUAKQgUAKgVAAQg5AAAAheIABgQIAAAAIAAgBIAAABIgBgBQgiAogcAZQgcAagYAMQgYANgUAAQgpAAgbgbgAAMh1QghAlgUAmQgUAnAAAeQAAAUAIANQAIANANAAQAKAAAdgXQAcgWAlglIAKgIIgCgBIgHACQgaAHgMAAQgOAAAAgHQAAgDAGgLQAUgfAAgbQAAgQgFgNQgGgNgGAAQgGAAgMANgAA6BCIAAgBIAAABgAA6BCg");
	this.shape_2.setTransform(53.475,49.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgqDnQgTgTgOgfQgOgggJgiQgJghgHguQgHgtgFhCIgBAAIgRAkIgRAlIgNAdIgfBDIgbA0QgKATgMASQgFAIgOAPQgWAVgaALQgZAMgXAAQgJAAgHgEQgGgFAAgHQAAgGAKgKQAFgHASgbIAWghQATgdAohMIASghIBTigQAWgsAAgHQAAgHgLgKQgJgHAAgFQAAgIAVgHQAWgHAZAAQAyAAAVAWQANAOAMApQAKApAMBNIABAHIAAAEIABAFIACANQAIAvAEANQAEAOAHAKIAIgQQBWjCAng7IALgMIAKgJQAFgDAKgEQAagLAqAAQAVAAAGADQAGAEAAANIgBAVQgDBCAAAcQAABGAJA+QAHAjAMAlQANAgALARQAOATAKAJQALAMAAAGQAAALgTAUQghAfggAAQguAAglgnQgTgTgLgXQgMgYgFgiQgGgigBg1IgDg/IgCAAIgmBJIgaAxIgWAuQgqBXgNASIgDADIgEAEQgGAGgIADQgHADgFAAQgQAAgSgTg");
	this.shape_3.setTransform(-7.925,41.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ah4CYQgcgbAAgrQAAgiAPgqQAOgoAZglQAdgrAqgcQAzgjAwAAQAiAAAUAWQATAWAAAmQAAAegQAgQgPAggfAdQgZAZgXANQgZAPgRAAQgIgBgIgEQAEAXAXAAQAcAAAsghQAZgSAJAAQALgBAKAHQAKAFgBAHQABAGgLALQgUATgZATQgZASgXAMQgYANgWAHQgYAHgSAAQguAAgbgagAAIhHQgNAfgIAeQgKAfABAVQAAAJACAOQARgLAIgMQAUgYAKgeQAIgUAFgZQAFgZAAgVQAAgVgJABQgLAAgZA0g");
	this.shape_4.setTransform(-84.25,49.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ai1D3QgpgIgNgMQgJgGAAgNIACgKIBXkmQAJghAKgOQAHgJAKgFIAAgCIgFAAQgLABgiALQgkANgOABQgIAAgCgDQgDgDAAgGQAAgOAIgSQAJgSANgNQANgOAOgGQAggMA2gIQA3gGA+gBQBGABAwAVQAwAWAaAqQAZArgBA7QABA9gYA9QgZA9gnApQhdBiiaAAQgxAAgqgIgAhEBvIgDAOQgHAdgIAQQgGAMgMAQIAXAAQAgAAAVgEQAVgEARgKQATgLAQgQQAfgfAQgpQAQgpAAgvQAAgsgNgkQgNgjgXgVQgYgVgegCg");
	this.shape_5.setTransform(-125.75,41.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AhhCqQgmgNgWgVQgdgeAAg1QAAgrAVgqQAVgqAkgiQAjgjArgUQAqgUAsAAQA3AAAAANQAAAPgZABQgeACgZAPQgaAOgTAaQgUAbgLAgQgLAhAAAjQAAAoATAZQASAXAdAAQAcABAVgdQAVgdAAglQAAgfgNgbQgNgbgZgTQgLgJAAgDQAAgFAPgLQARgLAVgIQAVgHAOgBQARABAPAIQAOAJAMAQQALAPAGAWQAGAUAAAYQAAAlgOAmQgPAmgYAXQgfAegrATQgrATgnAAQgmAAglgOg");
	this.shape_6.setTransform(184.375,-35.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AhkCZQgdgcgBgqQABgpASgtQASguAggpQAggqAogcQAdgTAdAAIABAAQAcAAAQAQQAQAPAAAZQAAAWgMAWQgNAWgTAPQgTAOgUAAQgLAAAAgIQAAgDAEgKQAOgYAAggQAAgPgDAAQgFAAgKANQgJANgHASQgLAdgIAfQgGAfAAAWQAAAZAGAOQAIAOANABQANgBAVgNQAUgNAUgTQAHgKAGAAQAIAAABAKQAAAtgkAlQgXAYggAOQgeAPgZABQgrgBgdgbg");
	this.shape_7.setTransform(149.8,-34.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AihCiQgPgRAAgcQAAgRAEgZQAEgZAHgcQAHgbAJgeQAJgeALgbQARguAYgZQARgQAXAAQAmgBAAAyQAAAlgPBDIACABIAVgZQAhgmAUgSQATgSAQgIQAQgIAQAAQAaAAAKAOQALAOAAAiQAAAOgDAdQgEAkAAAgQAAAlADAWQADAOAFAOQAEANAAAFQAAAGgFADQgLAKgTAHQgTAIgMAAQgVAAgRgPQgRgOgJgZQgKgZAAggQAAgVAEgdIgBgCIgZAcIgSATQgpAwgcAlIgUAaQgOANgRAAQgYAAgOgSg");
	this.shape_8.setTransform(116.175,-33.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AgaD+QgQgBgOgOQgNgOgGgRQgGgRAAgbQAAg9AXhMQAWhLAdgiQAKgOAUAAQAWgBAMAUQAOAUAAAfQAAAugOA+QgNA+gYBDQgKAcgNAJQgJAGgNAAgAARhxQghgBAAgpQAAgTAKgbQAJgaANgNQAGgHAHgDQAHgDAKAAQATAAAIAJQAJAJAAAVQAAAagJAXQgJAXgPAPQgPAOgQAAg");
	this.shape_9.setTransform(87.775,-42.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("Ah0DxQgdgNgXgWQgWgWgMgdQgMgdAAgiQgBgZAJgdQAIgeAPgfQAPggAUgdIAYggQAMgPAPgPQAPgPARgNQARgOAPgJQAagRAagNQAcgNAYgGQAWgGAUAAQAwAAAbAYQAbAZABAsQAAAugYAzQgWAygmAlQgaAbgZAPQgaAPgUAAQgTAAABgRQAAgIAKgOQANgUARgmQAOgkALguQAKgugBgdQABgUgJAAQgJAAgWAXQgiAkgYAuQgaAvgOAwQgOAwgBAvQAAAlAJANQAHAOAWAAQATAAAbgLQBAgZBHgvQAggUAIAAQAMAAAAAMIAAABQgBAQgKAVQgTAogOANQgXAUgpAVQgpAUgrANQgqAMgdAAQghAAgegMg");
	this.shape_10.setTransform(55.2,-42.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AiwDiQAAgLAFgQQAFgQAJgOQAKgNAPgKQATgNAlgRIghg7QgMgVgNghQgehGAAg6QAAgsALgcQAKgYAagKQAVgIARAAQAYAAAIASQAIASAHBCQAGBIAPBEIAGAeIACAAQAJgWALgeIAahAIATg3IAEgQQAKgkATgUQANgNAQgIQAQgIANAAQAYAAAAAVQAAAKgGAWQgHAVgLAcIgZA7QgOAhgSAiQggBBggAtQgYAggXAZQgZAZgaAUQgbATgXALQgYAJgUAAQgQAAAAgOg");
	this.shape_11.setTransform(-6.525,-28.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("Ai0DiQgMgVAAgkQAAgpAJg4QAJg5APg6QAQg6ATgwQAMgdAPgWQAPgWAOgKQAJgGAMAAQARAAAJAJQAJAKAAAQQAAAPgDARQgCARgCAWIABACIAMgWQAPgcAOgSQANgUALgIQALgKAOgFQAMgFAPABQAcAAAVAQQAWARALAeQAMAfAAAoQAAA5gaA2QgaAzgqAgQgqAigsAAQgZgBgSgKQgRgMgPgbIgCAHIgDAIQgXBMgOAlQgPAjgKAIQgIAIgLAAQgUAAgMgUgAAkh8QgPAUgPAaQgeAxgPAmQgFAKgBAGQAKAeAcAAQAUAAARgSQARgSALgeQAKgfAAgiQAAgbgEgUQgEgUgFAAQgEABgPASg");
	this.shape_12.setTransform(-45.925,-27.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("Ai0DiQgMgVAAgkQAAgpAJg4QAJg5APg6QAQg6ATgwQAMgdAPgWQAPgWAOgKQAJgGAMAAQARAAAJAJQAJAKAAAQQAAAPgDARQgCARgCAWIABACIAMgWQAPgcAOgSQANgUALgIQALgKAOgFQAMgFAPABQAcAAAVAQQAWARALAeQAMAfAAAoQAAA5gaA2QgaAzgqAgQgqAigsAAQgZgBgSgKQgRgMgPgbIgCAHIgDAIQgXBMgOAlQgPAjgKAIQgIAIgLAAQgUAAgMgUgAAkh8QgPAUgPAaQgeAxgPAmQgFAKgBAGQAKAeAcAAQAUAAARgSQARgSALgeQAKgfAAgiQAAgbgEgUQgEgUgFAAQgEABgPASg");
	this.shape_13.setTransform(-85.475,-27.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AipCaQgbgcAAgqQAAgaANgjQAOgjAXgiQAmg4A6gmQA7goA4AAQAvAAAeATQAeATAAAdQAAAWgPAYQAUAAAFAFQAFAEAAAPIgBAPQgDAjAAAgIABAZIABATIACASQADARAHARQgWAVgUAKQgUAKgVAAQg5AAAAheIABgQIAAAAIAAgBIAAABIgBgBQgiAogcAZQgcAagYAMQgYANgUAAQgpAAgbgbgAAMh1QghAlgUAmQgUAnAAAeQAAAUAIANQAIANANAAQAKAAAdgXQAcgWAlglIAKgIIgCgBIgHACQgaAHgMAAQgOAAAAgHQAAgDAGgLQAUgfAAgbQAAgQgFgNQgGgNgGAAQgGAAgMANgAA6BCIAAgBIAAABgAA6BCg");
	this.shape_14.setTransform(-126.925,-34.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("Aj6D0QgRgMAAgTQAAgNAKgjQAJgjAMggQgcgFAAgTQAAgOAIgRQAKgRANgOQAOgMAMgEIAVhCQAjhuAWglIAPgUQATgSAdAAQATAAAOAHQAOAGAIAMQAHALAAAPQAAAUg0CbIgDAIIgDAIIgBADICGgDIAGgXIAYhJQANglAJgWQAJgWAJgRQAJgRAIgIQATgVAiAAQA5AAAAAxQAAAvgyB7IgJAWIADAAIACgBQAUAAAMAIQAMAGAAAMQAAAIgKAPQgKAPgLAMQgLALgIAFQgIAEgWAEIgCAGIgHAUIgQArIgOAhQgFAMgFAIQgGAJgIAGQgSAOgXAIQgXAJgPAAQgRAAgKgJQgJgIAAgPQAAgbAbhTIAJgbIiBgBIgIAYIgGAVQgTBGgNAVIgKANQgXAWgjAAQgbAAgQgMg");
	this.shape_15.setTransform(-175.575,-42.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.3,-85,432.70000000000005,170.1);


(lib.BasicButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.instance = new lib.Pinata();
	this.instance.setTransform(-38.95,-20.95);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Rounded
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape.setTransform(50,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_1.setTransform(50,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_2.setTransform(50,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_3.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

	// Squared
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_4.setTransform(50,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_5.setTransform(50,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_7.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-85.1,204.1,136.1);


(lib.Sombrero = function(mode,startPosition,loop,reversed) {
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
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(460.1,57.8,2.747,2.747,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("Aq/BqQgHAAgKAAQhFgEjIggQkLgrgCglQAihhCBgMQCBgLDngEQDmgFFGAkQFFAkA8ACQCEAHGVAgQGWAfBuAOQjsAqnMAsQlcAhh2gDQgngBgOgF");
	this.shape.setTransform(-346.675,24.9625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("ActDNQhUAchbASQh+AaiMAHQkdAQjxhGQgQgEgPgEIAAgBQhngdhigbQkyhVkMhCQngh1hFAVQgKADgCAFQgDAAgEAAQjQgQjNALQkbAPiQBBQgIADgHAEQi6BAhaAjQihA8gpAuQB5DSBCBWQCSC+CbA2QACAAADABQDLAhF7AbQChALDBALQEXAPC6AFQAAAAABAAQD5AHBTgKQEcgJDJgaQDKgbBTgcQBWgTBpgwQCGg9AogoQA2gJBThpQAQgUAQgXQBpiSAmhXgAn2h3QA6iRA/iWQBwkKAkg1QAFgHAEgEQAsgqAbgQQAQgKASgHQAegMAlgFQAWgDBCgLQBDgJAzABQBfADA7AkQAkAXAXAjQAGAOAGAOQBlD1BDDCQB8FmgdBUQBkAkArAIQAfAGAaAMQAJgDAJgDQABAAABAAQAAgBAAABQBOgZCNgZQCwgeCjgJQB2AHB8gIQApgCApgEQAyAAATATQAWAVACA5");
	this.shape_1.setTransform(-342.8,-41.1707);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6A300").s().p("AlxCRQjBgLihgLIADgvIARABIgRgBQhFgEjIggQkLgqgCgmQAihhCBgLQCBgMDngEQDmgEFGAkQFFAkA8ABQCEAIGVAgQGWAfBuAOQjsAqnMAsQlcAhh2gDQgngCgOgFQAOAFAnACIAAAJIgBAyQi6gFkXgPg");
	this.shape_2.setTransform(-346.675,27.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AmSEkIAAAEIAAAFgAGRksIAAAAIACAKg");
	this.shape_3.setTransform(-296.65,9.3125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5CD00").s().p("AA6NYIAAg3IAAgEQB3ADFbghQHMgsDsgrQhugOmVgfQmWggiEgIQg8gBlFgkQlGgkjmAEQjnAEiAAMQiCALgiBhQADAmEKArQDIAgBFAEIgDAvQl7gbjLghIgFgBQibg2iSi+QhChWh5jSQApguChg8QBagjC6hAIAPgHQCQhBEcgPQDMgLDRAQIAGAAQACgFAKgDIgQglQA5iRA/iWQBxkKAkg1IAIgLQAsgqAcgQQAPgKASgHQAegMAmgFIBYgOQBCgJA0ABQBeADA8AkQAkAXAWAjIAMAcQBmD1BCDCQB8FmgdBUIgEARQkyhVkLhCIgNgDIgCAAIgEgBIgDgBIgDgBIgCAAIAAAAIg1gMIgBgBIgggHIgCgBIAAAAIAAAAQkghDhmgFIgDAAIgLAAIAAAAQgUAAgKADIgBAAIABAAQAKgDAUAAIAAAAIALAAIADAAQBmAFEgBDIAAAAIAAAAIACABIAgAHIABABIA1AMIAAAAIACAAIADABIADABIAEABIACAAIANADQELBCEyBVIDJA4IABABIAeAIIgFgQIgDgKQBOgZCOgZQCvgeCjgJQB3AHB7gIIBSgGQAyAAATATQAWAVADA5QhUAchcASQh+AaiMAHIgFAAQgxADgwAAIAAAAIgBAAQjeAAjCg3IgDgBIgEgBIAEABIADABQDCA3DeAAIABAAIAAAAQAwAAAxgDIAFAAQCMgHB+gaQBcgSBUgcQgnBXhoCSIghArQhSBpg3AJQgnAoiGA9QhqAwhWATQhTAcjJAbQjKAakcAJQgyAGhtAAQhJAAhkgDg");
	this.shape_4.setTransform(-342.8,-41.1707);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.next_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-529,-174.8,1265.2,371.1);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.btn_hat = new lib.Sombrero();
	this.btn_hat.name = "btn_hat";
	this.btn_hat.setTransform(630.05,184.15,1,1,0,0,0,103.5,10.7);
	new cjs.ButtonHelper(this.btn_hat, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_hat).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-2.5,-1.4,1265.2,371.09999999999997), null);


// stage content:
(lib.PracticeCardHSaldana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,9];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on current frame
		
		this.btn_hat.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(21));

	// Label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6BJQABgSALgPQAKgQAdgVQAQgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgGAAgGAFQgFAFgBAMIgogDQACgRAHgJQAGgKALgFQAMgFATAAQAVAAALAFQAMAFAHAKQAGAKAAAMQAAANgHAMQgIALgUAOIgQAMIgJAIIA9AAIAAAhg");
	this.shape.setTransform(135,726.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6BJQACgSAKgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgHAAgFAFQgEAFgCAMIgogDQADgRAGgJQAGgKAMgFQALgFATAAQAVAAAMAFQAMAFAGAKQAHAKAAAMQAAANgIAMQgHALgVAOIgQAMIgIAIIA9AAIAAAhg");
	this.shape_1.setTransform(121.65,726.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcBEQgLgGgIgLQgEgHgEgOQgDgOAAgQQABgpAPgQQAOgQAdAAQAOAAAKAEQAJADAGAGQAGAGAEAGQACAGADAJQADAQAAARQABAmgNASQgOASggAAQgRAAgLgGgAgNglQgFAKAAAbQAAAbAFAKQAFAKAIAAQAGAAAFgFQAEgDACgKQACgJAAgTQAAgcgFgKQgEgKgKAAQgJABgEAJg");
	this.shape_2.setTransform(108.45,726.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BJQABgSALgPQAKgQAdgVQAQgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgGAAgGAFQgFAFgBAMIgogDQACgRAHgJQAGgKALgFQAMgFATAAQAVAAALAFQAMAFAHAKQAGAKAAAMQAAANgHAMQgIALgUAOIgQAMIgJAIIA9AAIAAAhg");
	this.shape_3.setTransform(94.95,726.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAXQALgGAEgFQAFgFAAgHIgUAAIAAgnIApAAIAAAhQAAARgHALQgIAKgRAIg");
	this.shape_4.setTransform(78.475,733.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgzBGIgDgbQAIACALAAQAHAAAEgDQAEgDADgIIgrhnIAqAAIAUBFIAUhFIAnAAIgpBuQgHATgHAGQgKAKgVAAQgIAAgSgDg");
	this.shape_5.setTransform(69.125,730.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_6.setTransform(56.275,728.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAtBHIAAhsIgdBsIgfAAIgchsIAABsIgkAAIAAiNIA6AAIAWBVIAVhVIA7AAIAACNg");
	this.shape_7.setTransform(40.15,726.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJBFQgIgEgDgIQgDgIAAgRIAAgjIgPAAIAAgdIAPAAIAAgUIAmgUIAAAoIAXAAIAAAdIgXAAIAAAjQAAAHACACQACADAEAAQAFAAAIgCIADAbQgPAEgNAAQgOAAgGgEg");
	this.shape_8.setTransform(132.95,696.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgoA1IAAhmIAlAAIAAARQAFgMAFgEQAGgEAJAAQAIAAALAFIgNAcQgHgCgEAAQgHAAgFAHQgFAIAAAYIAAAjg");
	this.shape_9.setTransform(124.925,698.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAgBIIgIgYIgxAAIgHAYIgtAAIA2iPIAvAAIA2CPgAgPARIAeAAIgPgzg");
	this.shape_10.setTransform(111.875,696.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_11.setTransform(90.975,700.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAwA1IAAg6QAAgHgDgDQgEgGgGAAQgHAAgEAFQgEAFgBALIAAA1IgmAAIAAg4IgBgKQgBgEgEgCQgCgCgFAAQgGAAgFAFQgFAFAAALIAAA1IgnAAIAAhmIAlAAIAAAPQAIgKAIgEQAIgEAMAAQANAAAFAEQAHAEAGAKQAIgLAJgDQAHgEAMAAQAQAAAKAKQAJAKAAAVIAABAg");
	this.shape_12.setTransform(74.1,698.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_13.setTransform(57.375,698.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggBDQgPgHgLgQQgLgSAAgaQABgjASgTQAUgTAhAAQAbAAAQALQAPALAHAXIgnAIQgCgGgCgDQgDgGgGgCQgGgDgGAAQgOAAgIAMQgGAJAAATQAAAXAHAJQAIAJALgBQANAAAGgGQAHgIADgNIAnAMQgEAQgJALQgIALgMAGQgNAFgTAAQgXAAgOgHg");
	this.shape_14.setTransform(43.05,696.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_15.setTransform(135.175,668.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAPA1IAAg4QAAgKgEgEQgDgEgHAAQgGAAgEAFQgFAGAAANIAAAyIgoAAIAAhnIAlAAIAAARQAJgKAIgEQAIgFAMAAQAQAAAKAKQAJAJAAAVIAABBg");
	this.shape_16.setTransform(121.825,668.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_17.setTransform(108.475,668.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgtA4QgLgQAAgXQAAgYAMgOQAMgOAUAAQAJAAAHADQAHADAGAHIAAgyIAoAAIAACOIglAAIAAgPQgIAKgGADQgIAFgKAAQgWAAgLgRgAgMAAQgEAFAAAOQAAANAEAGQAFAFAHAAQAHAAAGgFQAEgGAAgOQABgMgGgGQgFgFgHAAQgHAAgFAFg");
	this.shape_18.setTransform(94.85,666.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTBHIAAiOIAnAAIAACOg");
	this.shape_19.setTransform(85.125,666.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_20.setTransform(75.125,668.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgwA8QgOgOgCgWIAqgCQACAKAEAFQAGAJAMAAQAJAAAGgFQAFgEAAgGQAAgFgFgFQgFgEgQgEQgegGgMgKQgMgLAAgRQAAgLAGgKQAGgKANgFQANgGAVAAQAcAAAOAKQAOALADAWIgpACQgCgKgFgEQgGgEgIgBQgIABgEADQgEADAAAFQAAADAEADQADADALACQAdAHAMAGQAMAGAGAJQAGAJAAAMQAAAOgIALQgHAMgOAGQgOAGgUAAQgkAAgOgOg");
	this.shape_21.setTransform(61.2,666.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAUIAAgnIApAAIAAAng");
	this.shape_22.setTransform(50.675,671.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAYBHIAAg5IgvAAIAAA5IgsAAIAAiOIAsAAIAAAzIAvAAIAAgzIAsAAIAACOg");
	this.shape_23.setTransform(39.05,666.35);

	this.instance = new lib.Cinco_txt();
	this.instance.setTransform(493.2,363.75);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[{t:this.instance}]},10).wait(10));

	// Button
	this.btn_hat = new lib.Symbol1();
	this.btn_hat.name = "btn_hat";
	this.btn_hat.setTransform(960.85,428.4,1,1,0,0,0,630.1,184.2);
	new cjs.ButtonHelper(this.btn_hat, 0, 1, 1);

	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(604.55,476.2,2.747,2.747,0,0,0,0,0.1);
	this.next_btn._off = true;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag7BJQACgSALgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgHAAgEAFQgGAFgBAMIgogDQADgRAGgJQAGgKAMgFQALgFATAAQAVAAAMAFQAMAFAGAKQAHAKgBAMQABANgIAMQgHALgVAOIgQAMIgIAIIA9AAIAAAhg");
	this.shape_24.setTransform(134.95,726.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag6BJQABgSALgPQAKgQAdgVQAQgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgGAAgGAFQgFAFgBAMIgogDQACgRAHgJQAGgKALgFQAMgFATAAQAVAAALAFQAMAFAHAKQAGAKAAAMQAAANgHAMQgIALgUAOIgQAMIgJAIIA9AAIAAAhg");
	this.shape_25.setTransform(121.6,726.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcBEQgLgGgHgLQgGgHgCgOQgDgOgBgQQAAgpAPgQQAPgQAdAAQAPAAAJAEQAJADAGAGQAGAGADAGQAEAGABAJQAEAQAAARQAAAmgNASQgMASghAAQgRAAgLgGgAgOglQgEAKAAAbQAAAbAFAKQAFAKAIAAQAGAAAEgFQAFgDACgKQACgJAAgTQAAgcgEgKQgGgKgJAAQgJABgFAJg");
	this.shape_26.setTransform(108.4,726.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag7BJQACgSALgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgEgFgIAAQgHAAgEAFQgGAFgBAMIgogDQADgRAGgJQAGgKAMgFQALgFATAAQAVAAAMAFQAMAFAGAKQAHAKgBAMQABANgIAMQgHALgVAOIgQAMIgIAIIA9AAIAAAhg");
	this.shape_27.setTransform(94.9,726.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAXQALgGAEgFQAFgFAAgHIgUAAIAAgnIApAAIAAAhQAAARgHALQgIAKgRAIg");
	this.shape_28.setTransform(78.425,733.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgzBGIgDgbQAIACALAAQAHAAAEgDQAEgDADgIIgrhnIAqAAIAUBFIAUhFIAnAAIgpBuQgHATgHAGQgKAKgVAAQgIAAgSgDg");
	this.shape_29.setTransform(69.075,730.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_30.setTransform(56.225,728.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAsBHIAAhsIgbBsIghAAIgbhsIAABsIglAAIAAiNIA7AAIAVBVIAXhVIA5AAIAACNg");
	this.shape_31.setTransform(40.1,726.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKBFQgGgEgEgIQgEgIAAgRIAAgjIgOAAIAAgdIAOAAIAAgUIAogUIAAAoIAVAAIAAAdIgVAAIAAAjQAAAHABACQABADAGAAQAEAAAIgCIADAbQgPAEgNAAQgNAAgIgEg");
	this.shape_32.setTransform(132.9,696.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoA1IAAhmIAlAAIAAARQAFgMAFgEQAGgEAJAAQAIAAALAFIgNAcQgHgCgEAAQgHAAgFAHQgFAIAAAYIAAAjg");
	this.shape_33.setTransform(124.875,698.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAgBIIgIgYIgxAAIgHAYIgtAAIA2iPIAvAAIA2CPgAgPARIAeAAIgPgzg");
	this.shape_34.setTransform(111.825,696.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_35.setTransform(90.925,700.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAwA1IAAg6QAAgHgDgDQgEgGgGAAQgGAAgFAFQgFAFAAALIAAA1IgmAAIAAg4IgBgKQgBgEgEgCQgDgCgDAAQgIAAgEAFQgEAFAAALIAAA1IgoAAIAAhmIAlAAIAAAPQAIgKAIgEQAIgEAMAAQAMAAAHAEQAGAEAFAKQAJgLAJgDQAHgEALAAQARAAAKAKQAJAKAAAVIAABAg");
	this.shape_36.setTransform(74.05,698.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_37.setTransform(57.325,698.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AggBDQgPgHgLgQQgLgSABgaQgBgjAUgTQATgTAhAAQAbAAAPALQAQALAIAXIgnAIQgDgGgCgDQgEgGgFgCQgFgDgHAAQgOAAgIAMQgGAJAAATQAAAXAHAJQAHAJANgBQAMAAAHgGQAGgIADgNIAnAMQgEAQgIALQgJALgNAGQgMAFgTAAQgWAAgPgHg");
	this.shape_38.setTransform(43,696.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_39.setTransform(135.125,668.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAPA1IAAg4QAAgKgEgEQgDgEgHAAQgGAAgEAFQgFAGAAANIAAAyIgoAAIAAhnIAlAAIAAARQAJgKAIgEQAIgFAMAAQAQAAAKAKQAJAJAAAVIAABBg");
	this.shape_40.setTransform(121.775,668.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_41.setTransform(108.425,668.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgsA4QgMgQAAgXQAAgYANgOQALgOAUAAQAJAAAGADQAIADAGAHIAAgyIAoAAIAACOIglAAIAAgPQgIAKgHADQgHAFgLAAQgUAAgLgRgAgMAAQgEAFAAAOQAAANAEAGQAFAFAHAAQAHAAAFgFQAGgGAAgOQgBgMgFgGQgFgFgHAAQgHAAgFAFg");
	this.shape_42.setTransform(94.8,666.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTBHIAAiOIAnAAIAACOg");
	this.shape_43.setTransform(85.075,666.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_44.setTransform(75.075,668.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgwA8QgOgOgCgWIAqgCQACAKADAFQAIAJALAAQAJAAAGgFQAFgEAAgGQAAgFgFgFQgFgEgRgEQgdgGgMgKQgNgLAAgRQAAgLAHgKQAGgKANgFQANgGAVAAQAcAAAOAKQAOALADAWIgqACQgBgKgGgEQgFgEgIgBQgIABgEADQgEADAAAFQAAADADADQADADAMACQAcAHANAGQANAGAFAJQAGAJAAAMQAAAOgIALQgIAMgNAGQgOAGgVAAQgjAAgOgOg");
	this.shape_45.setTransform(61.15,666.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAUIAAgnIApAAIAAAng");
	this.shape_46.setTransform(50.625,671.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAYBHIAAg5IgwAAIAAA5IgsAAIAAiOIAsAAIAAAzIAwAAIAAgzIAsAAIAACOg");
	this.shape_47.setTransform(39,666.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_hat}]}).to({state:[{t:this.btn_hat}]},1).to({state:[{t:this.btn_hat}]},1).to({state:[{t:this.btn_hat}]},1).to({state:[{t:this.btn_hat}]},1).to({state:[{t:this.btn_hat}]},1).to({state:[{t:this.btn_hat}]},1).to({state:[{t:this.btn_hat}]},1).to({state:[{t:this.btn_hat}]},1).to({state:[{t:this.btn_hat}]},1).to({state:[{t:this.next_btn}]},1).to({state:[{t:this.next_btn}]},1).to({state:[{t:this.next_btn}]},1).to({state:[{t:this.next_btn}]},1).to({state:[{t:this.next_btn}]},1).to({state:[{t:this.next_btn}]},1).to({state:[{t:this.next_btn}]},1).to({state:[{t:this.next_btn}]},1).to({state:[{t:this.next_btn}]},1).to({state:[{t:this.next_btn}]},1).to({state:[{t:this.next_btn},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.btn_hat).wait(1).to({x:881.7},0).wait(1).to({x:802.6},0).wait(1).to({x:723.5},0).wait(1).to({x:644.4},0).wait(1).to({x:565.35},0).wait(1).to({x:486.25},0).wait(1).to({x:407.15},0).wait(1).to({x:328.05},0).wait(1).to({x:248.9},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(10).to({_off:false},0).wait(1).to({regX:-1,regY:-17,x:605.2,y:354.8},0).wait(1).to({x:608.65,y:280.35},0).wait(1).to({x:612.1,y:205.9},0).wait(1).to({x:615.55,y:131.45},0).wait(1).to({x:619,y:57.05},0).wait(1).to({x:622.45,y:-17.4},0).wait(1).to({x:625.9,y:-91.8},0).wait(1).to({x:629.35,y:-166.25},0).wait(1).to({x:632.8,y:-240.7},0).wait(1).to({regX:0,regY:0.1,x:611.45,y:-172.55},0).wait(10));

	// Background
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF0000").ss(0.1,1,1).p("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");
	this.shape_48.setTransform(488.05,109.4598);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0000").ss(3,1,1).p("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");
	this.shape_49.setTransform(499.225,111.9986);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0033FF").s().p("AJoH0QgMgMgIgaIgGgXQgOgFhQgJQg4Bug0gvQgQgOgNgdIgLgZQADgFhHACQgzBsg3guQgSgOgPgcIgMgZIhKADQgkB0g+g1QgTgRgUggIgQgcIg8gIIgCANQgGAUgWAbQg1AsgbguQgIgPgFgWIgDgTQgGgCgLgDQgYgEgfAEQhLBTgvgnQgOgMgOgZQgMgXgCgBQgUgOgMgHQgYgOgKATQgpBOg3gKQgegFgYgrIgRgqICMtMQAAAmKoAVQFVAKFVADIAFNkQgOgGgYAGQgtBPghAAQgMAAgKgKgAAWFkIArg9IA9AvIgNg/IBQAFIg/gqIBKggIhXgPIAfgyIhCAcIgKg6IgpAvIg0gpIgCA/IhFgBIAzAsIg+AjIBIAHIgXA2IBBgggAFKCTIArg9IA8AvIgMg/IBPAFIg+gqIBJggIhWgOIAfgyIhDAcIgKg6IgoAvIg2gpIgBA/IhGgBIA0ArIg+AjIBIAHIgYA2IBDgggAlKBzIArg9IA8AvIgMg/IBPAGIg+grIBJgfIhWgPIAfgyIhDAdIgKg6IgoAuIg2goIgBA/IhGgCIA0AsIg+AjIBIAGIgYA2IBDgfgAAWilIArg9IA9AvIgNg/IBQAFIg/gqIBKggIhXgPIAfgyIhCAcIgKg6IgpAvIg0gpIgCA/IhFgBIAzAsIg+AjIBIAHIgXA2IBBggg");
	this.shape_50.setTransform(420.125,145.4923);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF6633").s().p("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");
	this.shape_51.setTransform(589.275,148.7486);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#009900").s().p("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");
	this.shape_52.setTransform(504.625,131.525);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFF00").s().p("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");
	this.shape_53.setTransform(499.225,94.594);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(128.3,-21.1,1465.2,763.2);
// library properties:
lib.properties = {
	id: '5F50AD636DBC2B4D9F1B2DDB7B474F50',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFCCFF",
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
an.compositions['5F50AD636DBC2B4D9F1B2DDB7B474F50'] = {
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