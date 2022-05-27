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


(lib.TheInventor = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhinUQgqgkglhEQhLiNAAiEQAAiFBNhWQAbgfAggUQA4gkBEABQBFAAA3AjQAfAVAbAfQBKBVAACFQAACEhMCQQgiBBgoAkQgHAFgHAGIAWAwIh4B9IBOihABknJQgKAHgKAFQgkATgngCQgvgBgpgcQgFgEgFgEIggAvIB/CGABynUIFKCmIE4DXIAAQRIgCAAAgvkAQAAAGgEAEQgEAFgGAAQgGAAgEgFQgEgEAAgGQAAgFAEgFQAEgEAGAAQAGAAAEAEQAEAFAAAFgAhdnRQgDgBgCgCIlgDLIkxEoIAAO1IAGAAQACgzAUgmQACgBAAgBQASghAXgIQAHgCAIAAQAiAAAXAtQAPAZAGAgQACAPABARQABAJAAAKQAAA/gZAtQgXAtgiAAQgIAAgHgCQgYgIgTgjQgXgtAAg/QAAgKABgJAgvijQAAAGgEAEQgEAFgGAAQgGAAgEgFQgEgEAAgGQAAgHAEgEQAEgFAGAAQAGAAAEAFQAEAEAAAHgAgvg3QAAAFgEAFQgEAFgGAAQgGAAgEgFQgEgFAAgFQAAgGAEgEQAEgFAGAAQAGAAAEAFQAEAEAAAGgAgvA3QAAAGgEAEQgEAFgGAAQgGAAgEgFQgEgEAAgGQAAgGAEgEQAEgFAGAAQAGAAAEAFQAEAEAAAGgAgvCwQAAAGgEAEQgEAFgGAAQgGAAgEgFQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGgApMPUIAIAAIAAsLIB8iuQAfGODaJlQCmCkD0iwQDipwAWmxICbBwIAANDQAFgNAGgMQABgBAAgBQAYgrAhAAQAiAAAXAtQAPAZAFAgQABADABADQACAVAAAYQAAA/gYAtQgXAtgiAAQgiAAgYgtQgXgtAAg/QAAguAMglAhTnJIBVCt");
	this.shape.setTransform(0.025,-0.0003);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJDiQgEgEAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAFgGAAQgFAAgEgFgAgJBpQgEgEAAgGQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAGgEAEQgEAFgGAAQgFAAgEgFgAgJgFQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAFgGAAQgFAAgEgFgAgJhxQgEgEAAgGQAAgHAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAHQAAAGgEAEQgEAFgGAAQgFAAgEgFgAgJjOQgEgEAAgGQAAgFAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAFQAAAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_1.setTransform(-6.175,-4.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjPLKQjaplgfmNIh8CuIAAMKIgIAAQgBgRgCgPQgGgggPgZQgXgtgiAAQgIAAgHACQgXAIgSAhIgCACQgUAmgCAzIgGAAIAAu0IExkpIFgjLIAFADIggAvIB/CGIBOihQAKgFAKgHIAWAwIh4B9IB4h9IgWgwIAOgLIFKCmIE4DXIAAQRIgCAAIgCgGQgFgggPgZQgXgtgiAAQghAAgYArIgBACQgGAMgFANIAAtCIibhxQgWGxjiJwQh/BbhoAAQhjAAhQhPgAhHidQgEAEAAAGQAAAGAEAEQAEAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgEAEgAhHkWQgEAEAAAGQAAAGAEAEQAEAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgFgGAAQgGAAgEAFgAhHmFQgEAEAAAGQAAAFAEAFQAEAFAGAAQAGAAAEgFQAEgFAAgFQAAgGgEgEQgEgFgGAAQgGAAgEAFgAhHnyQgEAEAAAHQAAAGAEAEQAEAFAGAAQAGAAAEgFQAEgEAAgGQAAgHgEgEQgEgFgGAAQgGAAgEAFgAhHpOQgEAFAAAFQAAAGAEAEQAEAFAGAAQAGAAAEgFQAEgEAAgGQAAgFgEgFQgEgEgGAAQgGAAgEAEgAACpggAh9rmIAggvIAKAIIBVCtgAhdsVIAAAAg");
	this.shape_2.setTransform(0.025,32.3553);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AJnRTQgYgtAAhAQAAgtANglQAEgNAHgNIABgBQAYgrAggBQAiABAXAsQAPAaAGAgIABAFQADAWAAAXQAABAgZAtQgXAsgiAAQgiAAgXgsgAquR+QgYgIgTgjQgYgtAAhAIABgSQADgzAUgnIACgBQARghAYgIQAHgCAIgBQAiABAXAsQAOAaAGAgQADAPAAARIABASQAABAgYAtQgXAsgiAAQgIAAgHgBgAhWnJQApAcAvABIAGAAIAAAAIABAAQAiAAAfgPIABgBIADgBIhOChgAAImsIgGAAQgvgBgpgcIgKgIIgEgDQgrgkglhEQhLiNAAiEQAAiFBNhWQAbgfAggUQA5gkBEABQBEAAA3AjQAgAVAbAfQBKBVAACFQAACEhNCQQgiBBgnAkIgOALQgLAHgJAFIgDABIgBABQgfAPgiAAIgBAAIAAAAgAhWnJIAAAAg");
	this.shape_3.setTransform(0.275,-0.0003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.6,-116.1,153.3,232.3);


(lib.TheDamsel = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACympQgCADgDACQgFAEgFAFQgNAKgNAJQgMAGgNAGQgbAKgegBIgHAAQgTgBgTgFQglgMgigdQgFgEgEgEQgHgGgFgHQgEgEgEgEQgEgFgDgFQgGgHgGgIQgBgCgCgDQgJgMgIgQQgEgFgDgHQhFh7AAh2QAAh6BOhPQAZgbAcgRQACgBACgBQA5giBEABQBFABA2AgQADABACABQAdASAYAbQBKBOAAB6QAAB1hEB8QgEAIgFAIQgJAQgJAPQgBACgCABQgFAIgGAHQgEAGgEAFQgFAFgEAGQgDABgCADQAAAAgBABIAdA1QEMA1AuApID5CLIAANgQAAABAAACIAAAHQAAABAAABQAAABAAAAQAAABAAACIAAAOIAAAIQAAADAAACQAAAzgTAkQgUAlgbAAQgbAAgUglQgTgkAAgzQAAgSADgRQACgLADgKQAEgRAHgOQABgCABAAQASgjAbAAQAbAAAUAlQALAUAFAbQACANABAOAGPkCQALgjjNhMAFNiFIBIA3QBUgkgLhZADigRQBAg5Arg7QAtg9AVhAIBPA3AKGLIIgFr0IiHgwQgWBtguB2QgeBPgXBQQghBygRB1QAKgBgEBQQgHCdAhDZQhiAfhbAPQitAdiXgdQhdgRhVgnQAYinAAidQAAhHAFACQgTiRgliIQggh6guhyQgchGgOhKIieBuIgILTAIJkWQAAAQAAARQgGAfglALAB0AEIASA4QBeAjA0hNQA/gHA+hZADigRIAyAcAAlABQBdgBBggRAAlABIAAhkAsALnIgBsiIEgjbQA1guA+gLQASgDBVgPQA4gKBXgQAham3IgbBBQhtAuglAhQgYAVAEAPQAJAYALAZQAOAgARAiIg+A6QgBBQBNAYQA0BNBwgmQBOAxBuguAldjjQgFAYACAVQAEA9A2AjAiVgRQA3ALA3AEIgPA7AlulPQgXBGAoAmAjoiQQAjA+AwBBAkbkDIhCAgAsALnQABgtARggQABgBAAgBQARgfAYgDQACAAADAAQAbAAATAkQAMAVAEAbQADAPABASIAAAIQAAADAAACQgCAvgSAiQgTAkgbAAQgDAAgCgBQgYgDgSggQgRgigCgvgAjaASIBFgjAgngCQAmADAmAA");
	this.shape.setTransform(0,0.0093);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiSK3QhdgShVgmQAYinAAidQABhIAEADQgTiRgliIQggh6gthyQgchGgPhLIieBwIgILSQgBgSgDgQQgEgbgMgVQgTgjgbAAIgEAAQgZADgRAfIgBABQgRAhgBAsIgBshIEgjcQA1gtA/gMIBmgRICPgaIADAEQhtAvglAhQgYAVAEAOIAUAyQAOAgASAhIg+A7IA+g7QAiA/AxBBQA2ALA3AEQAmADAmAAQBdAABggSIAyAcIgygcQBAg5Aqg7IBIA3IhIg3QAug+AVhAQALgijOhNIACgCQENA0AtApIAAAhQgFAgglAKIhPg3IBPA3IABATQAABKhLAhQBLghAAhKIgBgTQAlgKAFggIAAghID5CMIAANfIAAAEIAAAHIAAABIAAACIAAACIAAAPQAAgPgCgNQgFgagLgVQgUgkgbAAQgbAAgSAiIgCACQgHAOgFARIgEr0IiHgwQgWBuguB3QgfBOgXBQQggBxgRB2QAJgBgDBPQgHCdAgDZQhhAfhcAQQhWAOhRAAQhQAAhMgOgAAjj2QAtAAA1gWQg1AWgtAAIAAAAIgBAAQgvAAgpgZQApAZAvAAIABAAIAAAAgAC8kBQA4gBAkg1QA/gGA9haQg9Bag/AGQgkA1g4ABIAAAAIAAAAQgZgBgegKIgRg5IARA5QAeAKAZABIAAAAIAAAAgAh4kDQAeAAAkgMQgkAMgeAAIgBAAIAAAAQg8AAgigwIAAgBIgBAAIgCgDIBGgjIhGAjIACADIABAAIAAABQAiAwA8AAIAAAAIABAAgAg2kPIAPg8gAjak3QhMgYAAhOIABgCIgBACQAABOBMAYgAlgn/QAFA8A2AkQg2gkgFg8IAAgOQAAgPADgRQgZgYAAglQAAgVAJgaQgJAaAAAVQAAAlAZAYQgDARAAAPIAAAOgAldotIBCggg");
	this.shape_1.setTransform(0,32.9625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AKROhQgTgkAAg0QAAgSADgQQABgLADgLQAFgRAHgOIACgCQASgiAbAAQAbAAAUAkQALAVAFAaQACANAAAPIAAAIIAAAEQAAA0gSAkQgUAkgbAAQgbAAgUgkgArDO2QgZgDgSghQgRgigCguIABgSQABgsARghIABgBQARgfAZgDIAEAAQAbAAATAjQAMAVAEAbQADAQABASIAAAHIAAAGQgBAugTAiQgTAkgbAAIgEAAgAgnBHQg3gEg2gLQgxhAgig/QgSghgOggIgUgyQgEgOAYgVQAlghBtgvIAbhAQAFAHAIAGIAIAIQAhAdAmAMQAVAFAVAAIAEAAQgUAAgSgFQglgMgigdIgJgIIgMgNIgIgJIgHgKIgMgPIgDgEQgJgNgIgPIgHgMQhEh8AAh1QAAh6BNhQQAZgaAcgRIAFgDQA5giBDACQBFABA2AfIAFADQAcARAZAcQBKBOAAB6QAAB0hEB9IgJAPIgSAgIgDACQgFAJgGAHIgIAKIgJALQgDACgCACIgBABIgFAGIgKAIIgaATIgZAMQgYAJgZAAIgBAAIAAAAIgDAAIAAAAIgEAAIgHAAIAHAAIAEAAIAAAAIADAAIAAAAIABAAQAZAAAYgJIAZgMIAagTIAKgIIAFgGIAcA2IgCACQDOBNgLAiQgVBAguA+QgqA7hAA4QhgAShdAAIAAhjIAABjQgmAAgmgDg");
	this.shape_2.setTransform(0,-7.3282);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.9,-104.8,155.9,209.7);


(lib.RuinedMetalHand = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABLACQgLgNgGgMQgDgKAAgHQAAgEACgDQAAgBACgDQAGgGANAFAiJh8QAIgkAQgdQACgCAAgCQAhg6AtAAQAtAAAgA+QAUAjAIAsQADAPABARQABAFAAAFQABAIAAAIQADABADACQAUAIAUATQATAUAIASQAJATgIAHQgIAIgUgJQgSgHgTgUQgGgGgGgGQgCATgEATQgCAIgCAIQAIADAHAWQAEARACAXQABALAAALQAAAkgHAZQgHAagLAAQgKAAgIgaQgGgWgBgeQAAgEAAgFQAAgNACgMQABgVAEgQQAIgaAKAAQACAAABABAgZCoQAAgCAAgBQAAgDAAgDQAAghAHgXQAHgaALAAQAJAAAHAaQAFASACAWQABALAAALQAAAkgIAZQgHAagJAAQgLAAgHgaQgGgWgBgeQAAgDAAgDQgEAAgEAAQgFAAgEAAQgBAbgHAUQgHAYgKAAQgKAAgIgYQgDgIgBgKQgDgRAAgVQAAgLABgJQgHgIgGgKQAAAbgIAUQgHATgKAAQgLAAgHgTQgHgUAAgbQAAgbAHgTQAGgQAIgDQACgBACAAQAKAAAHAUQAIATAAAbAAnB2QgIAMgIAJAiFA4QgMgsAAg1QAAgBAAgBQAAgMABgNQACgdAFgbIBuBOIBnggAhbCLQABgUAFgQQAIgXAKAAQAKAAAHAXQAFAQACAUQABAJAAALQAAAFAAAE");
	this.shape.setTransform(-0.0045,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#53452D").s().p("Ag1B7IAAgUQACgVAEgPQAIgXAKAAQALAAAHAXQAEAPADAVIgvA5QgCgQAAgVgAA3BDQgHgagLAAQA1g7gMgZIAeAvIgEAQIgDgBQgLAAgHAZQgEARgCAVQgHAMgJAJQgCgUgEgQgAhrhOIABgZQACgeAGgaIBsBNIgiAVIAcAtg");
	this.shape_1.setTransform(-3.875,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhqAZQAIgjAQgeIACgDQAgg6AuAAQAsAAAhA9QATAjAIAsQAEAPABAQIhpAgg");
	this.shape_2.setTransform(-3.1,-14.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AgSCMQgGgWgBgfIAAgGIgIABIgJgBIAAgIIgBgVIABAVIAAAIQgBAcgHAUQgHAXgKAAQgKAAgIgXIgEgTIAug6QgCgUgFgQQgHgVgKAAQgKAAgIAVQgFAQgBAUQgHgHgGgKQAAgcgIgSQgHgTgKAAIgEAAIAEAAQAKAAAHATQAIASAAAcQAAAbgIATQgHAUgKAAQgLAAgHgUQgHgTAAgbQAAgcAHgSQAGgQAIgDQgMgsAAg1IAAgCIBvA/IgdguIAkgUIBnggIABAKIABAQIAGADQAUAIAUATQATAUAIASQAJATgIAIQgIAHgUgIQgSgIgTgTIgMgMQgLgOgGgMQgDgJAAgGIAAgCQAAgEACgDIACgEIAAAAQADgDAFAAIAAAAIABAAIACAAIAAAAIAIACIgIgCIAAAAIgCAAIgBAAIAAAAQgFAAgDADIAAAAIgCAEQgCADAAAEIAAACQAAAGADAJQAGAMALAOQgCATgEATIgdgwQALAZgzA8QgLAAgHAYQgHAYAAAhIAAAFIAAADIAAgDIAAgFQAAghAHgYQAHgYALAAQAJAAAHAYQAFASACAWIABAWQAAAkgIAaQgHAZgJAAQgLAAgHgZgAAsB2QgGgWgBgfIAAgJQAAgNACgLQABgWAEgPQAIgZAKAAIADAAQAIADAHAWQAEAQACAXIABAWQAAAkgHAaQgHAZgLAAQgKAAgIgZg");
	this.shape_3.setTransform(-0.0045,8.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RuinedMetalHand, new cjs.Rectangle(-16.5,-26.1,33.1,52.3), null);


(lib.ResetButton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgUAgQAAgDAHgOIAHgQIAGgRIABgBIgJAAIACgDIABAAQAFAAACgBQACgCADgJIACAAIAHgBIgDAHIgCAFIgBABIALAAIgBADIgLAAIgBABIgGARIgGAOQgGAMAAADQAAABAAABQAAAAABAAQAAABABAAQABAAABAAQADAAAGgEIABACIgJAFQgGACgDAAQgFAAgBgEg");
	this.shape.setTransform(12.5,-0.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAVQAAgLAHgLQAHgLAKgIQALgKAKAAQAGAAAAAFQAAACgDAEIgHAHIgJAFQgGADgCAAQgEAAgBgEIAFAAQAGAAAGgEQAGgEAAgFQAAgDgEAAQgIAAgIAKQgGAHgDAIQgEAJAAAHQAAAIAGAAQAHAAAGgIQAHgHAFgLIABADQAAAGgKAJQgMAOgKAAQgJAAAAgKg");
	this.shape_1.setTransform(8.775,-0.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWAdQgDgCAAgDQABgDACgEQAEAIAHAAQAFAAAEgEQACgDAAgFIAAgGIgEgIIgBgGQAAgGAFgHQAFgFAEgCQAFgCAHAAIAEAAIgBACIgDAFIgEAHIgBABIgBgBIAAgBIABgFQAAgDgEAAQgFAAgDAEQgEADAAAEIACAGIAEAHQABADAAAEQABAJgKAIQgIAGgGAAQgEAAgCgBg");
	this.shape_2.setTransform(4.75,-0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAVQAAgLAHgLQAHgLAKgIQALgKAKAAQAGAAAAAFQAAACgDAEIgHAHIgJAFQgGADgCAAQgEAAgBgEIAFAAQAGAAAGgEQAGgEAAgFQAAgDgEAAQgIAAgIAKQgGAHgDAIQgEAJAAAHQAAAIAGAAQAHAAAGgIQAHgHAFgLIABADQAAAGgKAJQgMAOgKAAQgJAAAAgKg");
	this.shape_3.setTransform(1.175,-0.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA5AxIgkgkQgIAPgNAKQgTANgSAAQgRAAgKgKQgKgJAAgQQAAgOAIgMQAIgNAPgJQAOgJAUgFQATgEAVAAQAVAAAMAFQALAFAAAKQAAANgRAHQgJADgCAGIgKAAIgJAAIgDAGIAVATIAGAHIAJAJIAEABQADAAAFgDIACABIgPAMgAgsgaQgVARAAAWQAAAPAJAJQAKAJAPAAQAIAAAJgEQAJgDAFgFQAJgIAIgQQgNgLgJAAQgKABgGAEQgGAHAAAKIABAFQgGgDAAgFQAAgJALgIQAMgIAJAAQAHgBAIAGIAEACIABABIAFgNIACgKQAAgEgFAAIgEABIgBgDIAVgFIAAABIgHAYIAGAAQANAAAIgGQAHgFAAgKQAAgSgoAAQgsAAgZAVg");
	this.shape_4.setTransform(-9.125,-2.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AC7AAQAAAxg3AjQg3AihNAAQhMAAg3giQg3gjAAgxQAAgvA3gjQA3gjBMAAQBNAAA3AjQA3AjAAAvg");
	this.shape_5.setTransform(-0.925,-2.1504);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFD5D5","#EF0101","#A40000","#4A0000"],[0,0.345,0.635,0.937],0.6,7,0,0.6,7,29.6).s().p("AiDBUQg3gjAAgxQAAgvA3gjQA3gjBMAAQBNAAA3AjQA3AjAAAvQAAAxg3AjQg3AihNAAQhMAAg3gig");
	this.shape_6.setTransform(-0.925,-2.1504);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFD5D5","#414A00","#214A00","#004A0A"],[0,0.345,0.635,0.937],0.6,7,0,0.6,7,29.6).s().p("AiDBUQg3gjAAgxQAAgvA3gjQA3gjBMAAQBNAAA3AjQA3AjAAAvQAAAxg3AjQg3AihNAAQhMAAg3gig");
	this.shape_7.setTransform(-0.925,-2.1504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.6,-14.9,39.400000000000006,25.6);


(lib.Outfit2Damsel = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AhoB9IAJgPQAbgPAkgbQAigcAYgaQAYgZAQgaQAPgaAAgPQAAgQgMgKQgLgLgRAAQgUAAgOAPQgNAPgDAYQgLgGAAgMQAAgSAYgOQAZgNAhAAQATAAAMALQAMAMAAATQAAAUgUAbQgrA6hiBNIgKAIIBFAAIAKAAQASAAAFgDQAGgDAKgQIACgCIAJAAQgPAXgHASg");
	this.shape.setTransform(-1.775,-2.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0.3,0.3,0,0.3,0.3,9.8).s().p("AhBAlQgdgPABgWQgBgVAdgPQAbgPAmAAQAnAAAcAPQAbAPAAAVQAAAWgbAPQgcAPgnAAQgmAAgbgPg");
	this.shape_1.setTransform(-1.1046,-18.0462,1.9196,1.9196);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("ADkAAQAABehDBDQhDBCheAAQhdAAhDhCQhDhDAAheQAAhcBDhDQBDhDBdABQBegBBDBDQBDBDAABcg");
	this.shape_2.setTransform(-1.15,-3.0002);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#D5FFD7","#01C4EF","#0045A4","#01007E"],[0,0.345,0.635,0.937],0.8,13.4,0,0.8,13.4,36.1).s().p("AifChQhEhDAAheQAAhcBEhDQBChDBdABQBegBBDBDQBCBDABBcQgBBehCBDQhDBChegBQhdABhChCg");
	this.shape_3.setTransform(-1.15,-3.0002);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-1.1,-0.1,0,-1.1,-0.1,31.8).s().p("AjdDTQhYhYAAh7QAAh8BYhVQBXhYB9gBQB6ABBUA9QBUA8AbDcQAbDclYAiQh9ABhXhYgAirjIQhDBDAABdQAABcBDBDQBDBCBeAAQBdAABDhCQBChDAAhcQAAhdhChDQhDhDhdAAIgCAAQhdAAhCBDg");
	this.shape_4.setTransform(-0.0021,1.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0.3,0.4,0,0.3,0.4,9.8).s().p("AhBAlQgdgPABgWQgBgVAdgPQAbgPAmAAQAnAAAcAPQAbAPAAAVQAAAWgbAPQgcAPgnAAQgmAAgbgPg");
	this.shape_5.setTransform(-1.1046,-18.0462,1.9196,1.9196);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.502)").ss(2,1,1).p("ADkAAQAABehDBDQhDBCheAAQhdAAhDhCQhDhDAAheQAAhcBDhDQBDhDBdABQBegBBDBDQBDBDAABcg");
	this.shape_6.setTransform(-1.15,-3.0002);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#D5FFD7","#01EAEF","#0079A4","#00497E"],[0,0.345,0.635,0.937],0.8,13.4,0,0.8,13.4,36.1).s().p("AifChQhEhDAAheQAAhcBEhDQBChDBdABQBegBBDBDQBCBDABBcQgBBehCBDQhDBChegBQhdABhChCg");
	this.shape_7.setTransform(-1.15,-3.0002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-28.8,62,59.8);


(lib.Outfit2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AhoB9IAJgPQAbgPAkgbQAigcAYgaQAYgZAQgaQAPgaAAgPQAAgQgMgKQgLgLgRAAQgUAAgOAPQgNAPgDAYQgLgGAAgMQAAgSAYgOQAZgNAhAAQATAAAMALQAMAMAAATQAAAUgUAbQgrA6hiBNIgKAIIBFAAIAKAAQASAAAFgDQAGgDAKgQIACgCIAJAAQgPAXgHASg");
	this.shape.setTransform(-1.775,-2.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0.2,0.3,0,0.2,0.3,9.8).s().p("AhBAlQgdgPABgWQgBgVAdgPQAbgPAmAAQAnAAAcAPQAbAPAAAVQAAAWgbAPQgcAPgnAAQgmAAgbgPg");
	this.shape_1.setTransform(-1.1046,-18.0462,1.9196,1.9196);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("ADkAAQAABehDBDQhDBCheAAQhdAAhDhCQhDhDAAheQAAhcBDhDQBDhDBdABQBegBBDBDQBDBDAABcg");
	this.shape_2.setTransform(-1.15,-3.0002);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#D5FFD7","#EFC701","#A49500","#7E5900"],[0,0.345,0.635,0.937],0.8,13.4,0,0.8,13.4,36.1).s().p("AifChQhEhDAAheQAAhcBEhDQBChDBdABQBegBBDBDQBCBDABBcQgBBehCBDQhDBChegBQhdABhChCg");
	this.shape_3.setTransform(-1.15,-3.0002);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-1.1,-0.1,0,-1.1,-0.1,31.8).s().p("AjdDTQhYhYAAh7QAAh8BYhVQBXhYB9gBQB6ABBUA9QBUA8AbDcQAbDclYAiQh9ABhXhYgAirjIQhDBDAABdQAABcBDBDQBDBCBeAAQBdAABDhCQBChDAAhcQAAhdhChDQhDhDhdAAIgCAAQhdAAhCBDg");
	this.shape_4.setTransform(-0.0021,1.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0.3,0.3,0,0.3,0.3,9.8).s().p("AhBAlQgdgPABgWQgBgVAdgPQAbgPAmAAQAnAAAcAPQAbAPAAAVQAAAWgbAPQgcAPgnAAQgmAAgbgPg");
	this.shape_5.setTransform(-1.1046,-18.0462,1.9196,1.9196);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.502)").ss(2,1,1).p("ADkAAQAABehDBDQhDBCheAAQhdAAhDhCQhDhDAAheQAAhcBDhDQBDhDBdABQBegBBDBDQBDBDAABcg");
	this.shape_6.setTransform(-1.15,-3.0002);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#D5FFD7","#EF7B01","#A46E00","#8A6201"],[0,0.345,0.635,0.937],0.8,13.4,0,0.8,13.4,36.1).s().p("AifChQhEhDAAheQAAhcBEhDQBChDBdABQBegBBDBDQBCBDABBcQgBBehCBDQhDBChegBQhdABhChCg");
	this.shape_7.setTransform(-1.15,-3.0002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-28.8,62,59.8);


(lib.Outfit1Damsel = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgLBHQAGgsAFgqIADg5QACgXgCgGQgBgGgEACIgOAHIgLAFIgEgFIAFgDIATgKIAPgIQAOgIAJgIIgFAyQgKCEgPBAIgBAGIgBACQgPANgKAFQAHgYAIgqg");
	this.shape.setTransform(-0.5,-2.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0.2,0.3,0,0.2,0.3,9.8).s().p("AhBAlQgdgPABgWQgBgVAdgPQAbgPAmAAQAnAAAcAPQAbAPAAAVQAAAWgbAPQgcAPgnAAQgmAAgbgPg");
	this.shape_1.setTransform(-1.1046,-18.0462,1.9196,1.9196);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("ADkAAQAABehDBDQhDBCheAAQhdAAhDhCQhDhDAAheQAAhcBDhDQBDhDBdABQBegBBDBDQBDBDAABcg");
	this.shape_2.setTransform(-1.15,-3.0002);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#D5FFD7","#01C4EF","#0045A4","#01007E"],[0,0.345,0.635,0.937],0.8,13.4,0,0.8,13.4,36.1).s().p("AifChQhEhDAAheQAAhcBEhDQBChDBdABQBegBBDBDQBCBDABBcQgBBehCBDQhDBChegBQhdABhChCg");
	this.shape_3.setTransform(-1.15,-3.0002);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-1.1,-0.1,0,-1.1,-0.1,31.8).s().p("AjdDTQhYhYAAh7QAAh8BYhVQBXhYB9gBQB6ABBUA9QBUA8AbDcQAbDclYAiQh9ABhXhYgAirjIQhDBDAABdQAABcBDBDQBDBCBeAAQBdAABDhCQBChDAAhcQAAhdhChDQhDhDhdAAIgCAAQhdAAhCBDg");
	this.shape_4.setTransform(-0.0021,1.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0.3,0.3,0,0.3,0.3,9.8).s().p("AhBAlQgdgPABgWQgBgVAdgPQAbgPAmAAQAnAAAcAPQAbAPAAAVQAAAWgbAPQgcAPgnAAQgmAAgbgPg");
	this.shape_5.setTransform(-1.1046,-18.0462,1.9196,1.9196);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.502)").ss(2,1,1).p("ADkAAQAABehDBDQhDBCheAAQhdAAhDhCQhDhDAAheQAAhcBDhDQBDhDBdABQBegBBDBDQBDBDAABcg");
	this.shape_6.setTransform(-1.15,-3.0002);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#D5FFD7","#01E0EF","#0463B4","#00027C"],[0,0.345,0.635,0.937],0.8,13.4,0,0.8,13.4,36.1).s().p("AifChQhEhDAAheQAAhcBEhDQBChDBdABQBegBBDBDQBCBDABBcQgBBehCBDQhDBChegBQhdABhChCg");
	this.shape_7.setTransform(-1.15,-3.0002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-31,62,62);


(lib.Outfit1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgGAlIAGgsIACgfIAAgOQAAgBAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAIgHADIgHADIgBgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAgBAAIALgFIAHgEQAHgEAFgFIgDAbQgFBEgHAhIgBADIAAABQgHAHgHACQAFgMADgWg");
	this.shape.setTransform(-0.25,-2.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,9.8).s().p("AhBAlQgdgPABgWQgBgVAdgPQAbgPAmAAQAnAAAcAPQAbAPAAAVQAAAWgbAPQgcAPgnAAQgmAAgbgPg");
	this.shape_1.setTransform(-0.5754,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AB3AAQAAAxgjAjQgjAigxAAQgwAAgjgiQgjgjAAgxQAAgvAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAvg");
	this.shape_2.setTransform(-0.6,-2.1504);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#D5FFD7","#EFC701","#A49500","#7E5900"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AhSBUQgjgjAAgxQAAgvAjgjQAigjAwAAQAxAAAjAjQAiAjABAvQgBAxgiAjQgjAigxAAQgwAAgigig");
	this.shape_3.setTransform(-0.6,-2.1504);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.6,0,0,-0.6,0,16.6).s().p("AhzBuQguguAAhAQAAhAAugtQAtgtBBgBQA/AAAsAhQAsAfAOByQAOByizATQhBAAgtgugAhZhoQgjAjAAAwQAAAwAjAjQAjAiAxAAQAwAAAjgiQAigjAAgwQAAgwgigjQgjgjgwAAIgBAAQgwAAgjAjg");
	this.shape_4.setTransform(0.0005,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.502)").ss(2,1,1).p("AB3AAQAAAxgjAjQgjAigxAAQgwAAgjgiQgjgjAAgxQAAgvAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAvg");
	this.shape_5.setTransform(-0.6,-2.1504);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#D5FFD7","#FF8D00","#A46E00","#7E5900"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AhSBUQgjgjAAgxQAAgvAjgjQAigjAwAAQAxAAAjAjQAiAjABAvQgBAxgiAjQgjAigxAAQgwAAgigig");
	this.shape_6.setTransform(-0.6,-2.1504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_6},{t:this.shape_5},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-16.8,32.3,32.4);


(lib.MetalHand = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABLACQgLgNgGgMQgDgLAAgHQAAgEACgCQAAgCACgCQAGgGAMAFQAEAAADADQAUAIAUATQATATAHATQAJASgHAIQgIAHgUgIQgSgHgTgUQgGgGgGgGQgCATgEATQgCAHgCAJQAIACAGAWQAFASACAWQABALAAAMQAAAjgIAaQgHAZgKAAQgKAAgIgZQgGgWgBgeQAAgFAAgEQAAgOACgLQABgWAEgQQAIgZAKAAQABAAACABAiJh8QAIgkAQgeQACgCAAgBQAhg6AtAAQAtAAAgA9QATAkAJAsQADAPABARQABAEAAAGQAAAHAAAJAgZCnQAAgBAAgBQAAgDAAgDQAAghAHgXQAHgaALAAQAJAAAHAaQAFARACAXQAAALAAALQAAAkgHAZQgHAagJAAQgLAAgHgaQgHgWAAgeQAAgDAAgEQgEABgEAAQgFAAgEgBQgBAcgHAUQgHAXgKAAQgLAAgHgXQgDgIgBgLQgDgQAAgVQAAgLABgKQgHgHgHgKQAAAbgHATQgHAUgKAAQgLAAgHgUQgHgTAAgbQAAgbAHgUQAGgQAIgCQACgBACAAQAKAAAHATQAHAUAAAbAAnB2QgIALgIAKAiFA4QgMgtAAg0QAAgCAAAAQAAgNAAgMQACgeAGgaIBuBNIBngfAhbCKQABgUAFgPQAHgXALAAQAKAAAHAXQAFAPACAUQABAKAAALQAAAEAAAE");
	this.shape.setTransform(0.0205,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhqAYQAIgiARgeIABgEQAhg5AtAAQAtAAAgA9QATAjAJAsQADAPABAQIhoAgg");
	this.shape_1.setTransform(-3.1,-14.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C3300").s().p("AgSCjQgHgXAAgeIAAgGIAAgDIAAgFQAAgiAHgXQAHgaALAAQAJAAAHAaQgHgagJAAQgLAAgHAaQgHAXAAAiIAAAFIAAADIgIABIgJgBIAAgIIgBgVQgCgUgFgQQgHgXgKAAQgLAAgHAXQgFAQgBAUQABgUAFgQQAHgXALAAQAKAAAHAXQAFAQACAUIABAVIAAAIQgBAbgHAUQgHAYgKAAQgLAAgHgYQgDgIgBgKQgDgRAAgUIABgVQgHgIgHgJQAAgcgHgTQgHgTgKAAIgEABIAEgBQAKAAAHATQAHATAAAcQAAAbgHATQgHATgKAAQgLAAgHgTQgHgTAAgbQAAgcAHgTQAGgPAIgDQgMgsAAg1IAAgCIAAgZQACgeAGgaIBuBNIBngfIABAKIAAAQIgCgBIgHgBIAAAAIgBAAQgFAAgDADIAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQgCACAAAEIAAADQAAAGADAJQAGAMALANQgCAUgEASIgEAQQAIADAGAVQAFARACAXIABAWQAAAkgIAZQgHAagKAAQgKAAgIgaQgGgWgBgeIAAgJQAAgNACgMQABgVAEgQQAIgZAKAAIADABIgDgBQgKAAgIAZQgEAQgBAVQgIAMgIAKQgCgVgFgQQAFASACAWIAAAWQAAAkgHAaQgHAZgJAAQgLAAgHgZgAhpA6IAAAAgAB8gVQgSgIgTgTIgMgNQgLgNgGgMQgDgJAAgGIAAgDQAAgEACgCQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBIAAAAQADgDAFAAIABAAIAAAAIAHABIACABQAEAAADADQAUAIAUATQATATAHATQAJATgHAHQgEAEgHAAQgHAAgKgEgABNhzIAAAAg");
	this.shape_2.setTransform(0.0205,6.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MetalHand, new cjs.Rectangle(-16.5,-26.1,33.1,52.3), null);


(lib.Mesh = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgWgeQgaArgcAYQgNANgKAFIAcBZICrhDIhYjcQADALgFAVQgIAlgYAsg");
	this.shape.setTransform(9.95,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhjA3QALgFANgMQAcgZAYgrQAZgsAIglQAEgVgCgLIBXDbIiqBEg");
	this.shape_1.setTransform(9.95,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,21.9,30.8);


(lib.Lens = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666666").s().p("ACHCWQixgZgHiGQA/iFCXADQDCgMB+CEQhqCui3AAQgdAAgggFgAkIB4QjbgUgBiBQAjiWDXAeQCTAuAmBeQg5CGhyAAQgVAAgXgFgAgxgJIAAAAg");
	this.shape.setTransform(48.475,15.4678);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97,31);


(lib.InventorsUniform = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#990000").ss(0.3,1,1).p("AgXhGIAAACQABAMAHAGQAHAGAJAAQADAAADAAQAHgBAFgFQAGgGAAgOIAAgBQAAgBAAgCQgBgFgBgEQgBgFgDgCIAAgBQgHgIgMAAQAAAAAAAAQgHAAgHAFQgIAEgCAHQAAACAAABQAAABAAABQAAACABACQABABgBADgAgChIQgBABgBACQAAABAAACQAAAHAGAAQAEAAADgFQACgEAAgDQAAgGgHgGQgFgFgHAAQgIAAgDAHQgDAEgBAHAgCBHQgBACgBABQAAACAAABQAAAHAGAAQAEAAADgFQACgDAAgDQAAgHgHgFQgFgGgHAAQgIAAgDAIQgDADgBAIIAAACQABALAHAHQAHAFAJAAQADAAADAAQASgDAAgWIAAgBQAAgCAAgBQgBgGgBgEQgBgEgDgDIAAAAQgHgIgMAAQAAAAAAAAQgHAAgHAEQgIAFgCAHQAAABAAABQAAABAAABQAAACABADQABAAgBAE");
	this.shape.setTransform(-5.025,-71.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AgPtgIDOhpIgqhEAi/wZIgmBNIDWBsIAJMRIAAOCIELByAnovJIHiN6IFgvOAlcwdIFWPOIHvt9AgGMzIkpCDAgGMzIAADr");
	this.shape_1.setTransform(0.55,3.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#330000").ss(0.1,1,1).p("ACbhgQgEgFgBgJQgCgNAFgSQADgNABgDQACgGAGgBQADgBBDgJQARgCAHgFQAIgGADgMQAFgPgHgRQgGgTgOgDQgUgGgPAJQgLAIgDAKQAAAAAAACQACACACAHQAAAJAFABQACABAHADQAGACADABQASAFADgNQABgFgEgGQgDgEgEgBQgDgBgCgBQgCABgCACIgDALQADAAAEgBACbhgQgBACgBAEQgEAMAAAQQgBARAAAFQgCAFgQAqQAAAAAAACQAAABAAABQACADABAGQABAJAEABQADACAGACQAGACADABQASAFADgMQACgGgEgFQgDgFgFgBQgDgBgBAAQgCAAgCACIgEALQAEAAADgBACbhgQACACAEACQAIACAFgDQADgCABgHQABgEgBgCQgCgCgEgBQgKgDgHASgABVCRQgEgFgBgIQgBgNAEgTQADgMACgEQABgFAGgCQADgBBDgIQARgDAIgFQAHgGADgLQAFgQgGgRQgHgRgNgEQgVgFgPAJQgJAHgEAHABVCRQADADADABQAIACAFgDQADgCABgHQACgEgCgCQgCgCgEgBQgKgCgHARQgBADgBADQgEAMgDASQgDAMgCADQgDAGABAsAiZhgQADgFABgJQACgNgFgSQgDgMgBgEQgBgFgHgCQgDgBhBgJQgTgBgHgGQgIgFgDgNQgFgPAHgRQAGgSAOgDQAUgGAPAIQAMAJACALQgCADgCAGQAAAJgFABQgCACgHADQgGACgDABQgRAEgEgMQgBgGAEgFQADgFAEgBQAEgBABgBQACABACACIADALQgDABgEgCAiZhgQgDACgEACQgHACgFgDQgEgCgBgGQgBgFABgCQACgCAEAAQAKgDAIARQAAACABAEQAEAMAEASQACAMACADQADAFATArQACADABADQAAABAAABQgDADgBAGQAAAJgFABQgDACgGACQgGACgDABQgSAFgDgMQgBgGAEgFQADgFAEgBQADgBABAAQACAAADACIADALQgDAAgEgBAhHCRQAEgFABgIQACgNgFgTQgDgMgBgEQgBgFgGgCQgEgBhDgIQgQgDgJgFQgHgGgDgLQgFgQAGgRQAHgRAOgEQAUgFAPAJQAHAFAEAFAhHCRQACADAAADQAEAMAEASQADAMACADQACAGAHA3AhHCRQgCADgEABQgIACgEgDQgEgCgBgHQgBgEABgCQACgCAEgBQAKgCAHARg");
	this.shape_2.setTransform(-0.55,-65.9043);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#330000").ss(0.5,1,1).p("AE+qCIAMCZQAEBpgGByIAAADAknC6QAAAHgGAFQgFAFgHAAQgHAAgGgFQgFgFAAgHQAAgIAFgFQAGgFAHAAQAHAAAFAFQAGAFAAAIgAknE+QAAAIgGAFQgFAFgHAAQgHAAgGgFQgFgFAAgIQAAgHAFgFQAGgGAHAAQAHAAAFAGQAGAFAAAHgAknHFQAAAHgGAFQgFAGgHAAQgHAAgGgGQgFgFAAgHQAAgIAFgFQAGgFAHAAQAHAAAFAFQAGAFAAAIgAknJxQAAAIgGAFQgFAFgHAAQgHAAgGgFQgFgFAAgIQAAgHAFgFQAGgGAHAAQAHAAAFAGQAGAFAAAHg");
	this.shape_3.setTransform(27.83,-21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(0.3,1,1).p("AHaiqIACABIANAJAHaiqIAAABIACAAIARAAAHaiqIgCABIACAAIAAARAHki4IgKANIAAABAHai8IAAARAHYipIgLANAHLizIAPAJAHIipIAQAAAHyhHIgEACIAEAAIADAAIA6A6AHyhIIAAABIADACIA5AAAHyhHIAAACIAAA8AGiAJIAAABIgBAAIAAAOAGiAJIAAAAIAAABIAOAJAGhAJIAAABIgIAJAGhAJIABAAAGiAJIALAAAGqACIgIAHAGhgGIAAAPAHuhFIgsAtAG2hFIA4AAAJMAhIAAABIAAATAJMAhIABAAIgBABIgJAOAJMAhIAAAAIABAAIAPAAAI2AhIAWAAAJNAhIALANAIfB4IACACIA4AAAIfB6IACAAIArAsAIfB4IAAACIAAA1AIfB4IAAAAIAAACIggAlAIfBJIAAAvAI7BYIgcAgAHkB6IA7AAAH4BRIAnAnAJAASIAMAPAJWATIgJAOAJMALIAAAWAInh9Ig1A1AG/h6IAzAzAHyiIIAABAAGRgCIAQALAGZAJIAIAAAmMBSIABAAIAQAAAmMBRIAAABAmMBRIgBABIABAAIAAARAmMA/IAAASAl9BCIgPAPIABABIAQAQAoRiKIADAAIA5AAAoRiMIAAACIAAA8AoUiKIADAAAoRiMIgDACIgsAtAoRiNIAAABIADACIA6A6ApNiKIA5AAApDi/IAyAzAoRjNIAABAAnbjCIg2A1AmchTIgBABIABAAIABAAIAbAbAmchTIAAABIAAAbAmchTIABABIAaAAAm3hSIAaAAIgUAUAoygYIAAArIAAADIACAAIAoAAApVgNIAjAgIgCADIACAAIAAApAoyATIACADIAoAoAoMgRIgmAkAo0AWIgfAfApbAWIAnAAAmzhpIAXAWAmchwIAAAdAngClIACAAIAAApAneCjIgCACIgfAfAncClIAoAoAneCjIACACIAnAAAneClIACAAAneCjIAAACAoIClIAoAAAmbBDIAPAOAmdBSIAQAAIgNANAmEhrIgYAYAoBCBIAjAiAneB3IAAAsAm5B+IglAl");
	this.shape_4.setTransform(-0.65,-64.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAJmQgEgEAAgJQAAgHAEgFQAFgFAHgBQAIABAEAFQAGAFAAAHQAAAJgGAEQgEAGgIgBQgHABgFgGgAAAG6QgEgGAAgHQAAgIAEgEQAFgGAHAAQAIAAAEAGQAGAEAAAIQAAAHgGAGQgEAFgIAAQgHAAgFgFgAAAEzQgEgFAAgIQAAgHAEgFQAFgFAHgBQAIABAEAFQAGAFAAAHQAAAIgGAFQgEAGgIgBQgHABgFgGgAAACvQgEgFAAgIQAAgIAEgFQAFgFAHAAQAIAAAEAFQAGAFAAAIQAAAIgGAFQgEAFgIAAQgHAAgFgFgAgVmrQgIgJAAgLQAAgHADgHQACgDADgDQAIgIAMABQAKgBAIAIIAEAFQAEAHAAAIQAAALgIAJQgIAHgKABQgMgBgIgHgAgZm9QABALAHAHQAHAFAKAAIAFAAQASgEAAgVIAAgCIAAgDIgCgKIACAKIAAADIAAACQAAAVgSAEIgFAAQgKAAgHgFQgHgHgBgLIAAgCQABgIADgEQADgHAIAAQAHAAAFAFQAHAGAAAGQAAAEgCADQgDAEgEABQgGgBAAgGIAAgDIACgEIgCAEIAAADQAAAGAGABQAEgBADgEQACgDAAgEQAAgGgHgGQgFgFgHAAQgIAAgDAHQgDAEgBAIIAAgDIAAgCIgBgEIAAgCIAAgDIAAADIAAACIABAEIAAACIAAADIAAACgAgZm/IAAAAgAgVo8QgIgIAAgLQAAgHADgHIAAADIAAACIABAEIAAABIAAADIAAACQABAMAHAGQAHAGAKgBIAFAAQAHAAAFgFQAGgGAAgOIAAgBIAAgDIgCgKQAEAHAAAIQAAALgIAIQgIAJgKAAQgMAAgIgJgAAFo3IgFAAQgKABgHgGQgHgGgBgMIAAgCIAAgDIAAgBIgBgEIAAgCIAAgDQACgEADgCQAIgIAMABQAKgBAIAIIAEAFIACAKIAAADIAAABQAAAOgGAGQgFAFgHAAIAAAAgAAApFQAEAAADgGQACgDAAgDQAAgGgHgGQgFgGgHABQgIgBgDAIQgDADgBAIQABgIADgDQADgIAIABQAHgBAFAGQAHAGAAAGQAAADgCADQgDAGgEAAQgGAAAAgIIAAgCIACgEIgCAEIAAACQAAAIAGAAIAAAAgAgapdIAAAAgAAVpeIAAAAg");
	this.shape_5.setTransform(-4.825,-19.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AFZnmQBNAiBDAvInvN8gAnomSICMhUIFWPNg");
	this.shape_6.setTransform(0.55,-53.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("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");
	this.shape_7.setTransform(-1.8935,1.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660000").s().p("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");
	this.shape_8.setTransform(0,0.0279);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InventorsUniform, new cjs.Rectangle(-103.8,-108.8,207.6,218.3), null);


(lib.InventorsTophat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AlFgiQFFCSFGiV");
	this.shape.setTransform(1.3,3.8879);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ak4CRIAAiNIAAkqQEiiJFpCJIAAEnIAACQIBNAAIAAAkQmRFkmulTIAAg1IBnAAQFNDPE+jPAk4kmQE+B5FNh5");
	this.shape_1.setTransform(0,0.0361);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AlEAUIAAiMQFECSFFiVIAACPQieBoijAAQiiAAimhog");
	this.shape_2.setTransform(1.3,12.4875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlEBxIAAkqQE+B5FLh5IAAEnQikBMijAAQihAAihhJg");
	this.shape_3.setTransform(1.3,-10.8871);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AmfDGIAAg1IBoAAQFLDPE+jPIBOAAIAAAkQjOC2jUAAQjLAAjSilgAk3kmQEhiJFoCJQimA8ijAAQihAAifg8g");
	this.shape_4.setTransform(0,0.0361);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InventorsTophat, new cjs.Rectangle(-42.6,-37.3,85.2,74.69999999999999), null);


(lib.InventorsSuit = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFVvjIi4hdQgKAIgJAHQAAAAgBAAIAfBCIhTBXQgYhGg/ABQgyAEgcA4IhchaIArhAQgEgCgCgDIiwBlICdHmQA6gTAtA/QAEAGAEAGQAGAKAGAMQAIgHAIgFQAQgJAQAGQABgEABgDQABgGABgGQAUhPA6gGQAEAAAEAAQAKAAALACAB3twQgBgCgBgBAA/uCQADADACAEQAYgHAZAPQgQgVgQgQAAetVQANAJAXAaQgDAEgCAEQgOATgOAcQAzg3BEgHQgPgegSgZAAXtZQADACAEACQAhgYA4gDAC5q3QAAgkgEgiQgOghgPgbQgrgsgrAzAAXtZQAWgbAXgHABjrNQAvgMAnAiACkoMQAshagXhRAAepiQAthlAYgGAAepiQBLhaBQAFAAepiQAxAIAxA+QAUgCAQASAAHgBIGGozIhMiDICvibIibiRAAhr7QAiAKAgAkACClvQAkgYAFg2QAAgGABgGQAAgOgCgQQgCgSgEgTABEl/IABAAQAQAAAYAaQAMgEAJgGAAkmrQAQAOARAeAARm2QAKADAJAIQAFgJAFgJQADgGAEgGQArhEBEABAABkcQANgEAOAFQARAGARAWQAigfANhHAAckbQAXhkARAAAAckbQAshQAlAGAAHgBIB7luAgmj/QAAAwAyArQA0gogCgzAAHQ+QB9gRCThqQErs6AnpGQABgGAAgGQABgPABgPIDUCbIAAR5QAGgSAJgRQACgCAAgBQAhg6AtAAQAuAAAgA9QAUAjAIAtQABADAAAEIAEAAIAA2VImskoIkNiHACqnnICrn8AAHgBIAAQ/AinsnQgJAUgHAWQADAoAFAnQgBAFAAAGQgEBKAlBKQAOgMAUAHQA1hDA0gLQAQgDASADAgltRQAEgCAEgCQAbgOAZAKAhRsqQADgDADgCQATgXATgLAhRsqQAXARAWAmQAjgSAiAKAh/tuQAyACAoAbAhIt6QAWAIAVAdAhQuhQgbAYgUAbQgXAfgRAoQAzADBQAxAinsnQAtghApAeAh/tuQAdgWAaAKQBIhwA/BoAAAgYImBoiIBDh9IidiKICkiaIk0CzImiGXIAAUVIAHAAQAEhGAcg0QABgCABgBQAgg6AtAAQAuAAAhA9QATAjAJAtQADAUABAWIALAAIAAwsICqjuQArIgErNKQCBB/CjgVAiPoPQgHANgEANQgIAXAAAVQAAAGABAGQAGAnAoAaQALAIAPAGQAMgNAPgDQAPgbAQgOAhdrGQAZAFBABfAiwqjQBAgKBsBLAhtoUQAJgBAJADQAwAHAWBCQACAGACAGQABAFABAFAivquQAngfArAHQAdggAcgNAg+l+QACgBACABQAWAEAlBeAhZluQgDBFA2AqQA3gUAtAUAgoATQAAARgNANQgMANgSAAQgSAAgNgNQgNgNAAgRQAAgSANgNQANgMASAAQASAAAMAMQANANAAASgAhzl8IBzFkIAHAXAgoE/QAAASgNANQgMANgSAAQgSAAgNgNQgNgNAAgSQAAgSANgNQANgMASAAQASAAAMAMQANANAAASgAgoKpQAAASgNAMQgMANgSAAQgSAAgNgNQgNgMAAgSQAAgSANgNQANgNASAAQASAAAMANQANANAAASgAhboSQBehPBgBDAhdrGQBggiBgAbAhLsvQBNgfA7AkAhIt6QBFg/BCA3AhZluQAoANAyBFAgmj/QAUgYATgFAg6l+QA2gnBIAm");
	this.shape.setTransform(0,0.024);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#45002B").s().p("AkcOmQkstLgqogIiqDuIAAQsIgLAAQgCgWgDgUQgJgsgTgjQggg+gvAAQgsAAghA6IgCAEQgcA0gEBFIgHAAIAA0VIGjmWIE0izIilCaICdCJIhCB9IGAIjIAGAWIAARAQgWACgWAAQiIAAhuhsgAhyJbQgNAOAAARQAAASANANQANANASAAQASAAANgNQANgNgBgSQABgRgNgOQgNgMgSAAQgSAAgNAMgAhyDyQgNANAAASQAAASANAMQANANASAAQASAAANgNQANgMgBgSQABgSgNgNQgNgNgSAAQgSAAgNANgAhyg6QgNANAAASQAAASANALQANANASAAQASAAANgNQANgLgBgSQABgSgNgNQgNgMgSAAQgSAAgNAMgAAGgwIGHoyIhNiEICwiaIiciRIENCHIGtEnIAAWWIgEAAIgCgIQgHgsgUgjQghg+guAAQgsAAghA6IgCAEQgJAQgGATIAAx6IjVibIgBAeIgBANQgnJGkrM6QiTBph+ASg");
	this.shape_1.setTransform(0,4.699);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660066").s().p("Ah8NPQgNgMAAgSQAAgSANgOQANgMASAAQASAAANAMQANAOgBASQABASgNAMQgNANgSAAQgSAAgNgNgAh8HmQgNgNAAgSQAAgSANgNQANgMASAAQASAAANAMQANANgBASQABASgNANQgNAMgSAAQgSAAgNgMgAh8C4QgNgMAAgSQAAgRANgOQANgMASAAQASAAANAMQANAOgBARQABASgNAMQgNANgSABQgSgBgNgNgAB4jnQAkgYAEg2IACgNIgCgdICqn8ICcCRIiwCbIBNCDImGIygAmKmyIBCh9IidiKICliaICcHlQgIAYAAAUIACANQAGAnAoAaIByFjg");
	this.shape_2.setTransform(1,-13.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgqEhQA3gUAtAUQACAzg0AoQgygrAAgwgAAXEFQgNgFgNAEQglhegWgEQA2gnBIAmQgSAAgXBkQAthQAkAGQgNBHghAfQgRgWgSgGgAgqEhQg2gqADhFQAoANAyBFQgTAFgUAYIAAAAgABAChQgQgegQgOIAJgSIAIgMQArhEBEABQAEATACASIABAeIgBAMQgEA2glAYQgJAGgMAEQgXgagRAAgAh3CkQgogagGgnIgBgMQAAgVAIgXQA6gTAtA/IAIAMIAMAWQgQAOgPAbQgPADgMANQgPgGgLgIgAgVBjIgEgMQgWhCgwgHQBfhOBeBCQg6AGgTBPIgDAMIgBAHQgQgGgQAJIgCgKgAB8AEQgxg9gygIQgRgDgQADQhAhfgZgFQBggiBgAbQgYAGguBlQBLhaBQAFQAYBRgsBZQgQgSgUACgAi0iCQBAgKBsBLQg0ALg1BCQgUgHgOAMQglhJAEhKgAi7jcQAHgWAJgUQAzADBQAxQgcANgdAgQgrgHgnAfQgFgngDgogABfisQghgkghgKQAzg3BEgHQAOAbAOAhQAEAiAAAkQgngiguAMgABfisIAAAAgAgojSQgWgmgXgRIAGgFQBNgfA6AkQgOATgNAcQgigKgjASIAAAAgAiDlNQAyACAoAbQgTALgTAXIgGAFQgpgegtAhQARgoAXgfgAAak0QAhgYA3gDQASAZAQAeQgsgsgqAzQgYgagMgJgAhMlZQBFg/BCA3IAFAHQgXAHgWAbQgZgKgbAOQgVgdgWgIg");
	this.shape_3.setTransform(0.4341,-54.4764);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqFvQAUgXAUgGQgzhFgogNQANgNAOgDIAEAAIgEAAQAQgbAPgNIgLgWIgIgNQgug/g6ATQAEgMAHgOQAPgMATAIIABgBIACAAIAAAAIACAAIABAAIAAAAIALACIABAAQAwAHAWBCIAEANIADAKQgJAEgIAIQAIgIAJgEQAQgJAPAFQAKADAJAJQgJgJgKgDIACgGIACgNQAUhOA5gGIAIgBQALAAALACQgLgCgLAAIgIABQhehEhfBPIgBAAIgLgCIAAAAIgBAAIgCAAIAAAAIgCAAIgBABQA1hEA0gKQAQgEASAEQAxAIAxA9QAUgCAQASQhEAAgrBDIgHANIgKASQAQANAQAeIAAAAIAAAAQARAAAYAbQglgHgsBQQAWhjASgBQhIglg2AmQAWAFAmBdQAMgEAOAFQARAGARAWQgtgUg3AUgABfhdQhfgbhhAiQAdggAcgOQAkgRAhAJQAiAKAgAlQAugNAnAiQhQgEhKBZQAthkAYgGgAizg0IAAgKQAnggArAIQAZAEBABfQhshLg/AKgAiri3QAughAoAeQAXARAWAlQhQgxgzgCgAA4i6IAGgIIgGAIQg6gkhNAeQATgWATgLIAIgEQAcgPAYALIAHAEIgHgEQAWgbAXgHIABgBIAAAAQAIgCAHAAIAAAAIABAAQAPAAAPAJIABAAIAAABIADADQg4AEghAYQANAJAXAaQAqgzAsArQhEAIgzA2QAOgcANgSgAiDj/IACgBIABgBQASgNARAAIAAAAIAAAAQAIAAAIADIABABQAXAHAUAeIgIAEQgogcgygCgAghjlIAAAAgAiDj/QAUgbAcgYQAbg4AygEQA/gBAYBGQAQARAPAUIAAgBIgBAAQgPgJgPAAIgBAAIAAAAQgHAAgIACIAAAAIgBABIgFgIIgCgDIgBgBQgdgugeAAIAAAAIAAAAQgiAAglA3IgCAEIgBgBQgIgDgIAAIAAAAIAAAAQgRAAgSANIgBABIgCABIAAAAgAhMkKIACgEQAlg3AiAAIAAAAIAAAAQAeAAAdAuIABABIACADQhCg3hFBAIAAAAg");
	this.shape_4.setTransform(0.4,-62.3007);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660000").s().p("AgOIJIhzlkQALAHAOAGQgCBGA2AqQAAAwAyArQAzgpgBgyQAhggANhGQAMgEAJgGIh6FugACVAVQAshZgXhRQAAglgEghQgOghgOgcQgQgdgSgaIgCgCQgPgVgRgQIBThXIgfhCIABAAIATgQIC4BeIiqH7QgCgSgFgTgAlFm5ICwhmQACADAEADIgrBAIBcBaQgbAXgUAbQgXAggSAoQgIATgHAXQADAnAFAoIgBALQgEBKAkBIQgHAOgDAMg");
	this.shape_5.setTransform(1.45,-54.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InventorsSuit, new cjs.Rectangle(-104.8,-109.9,209.6,219.9), null);


(lib.InventorsNose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgahWQggAWBdB7Ig/Ac");
	this.shape.setTransform(0.0342,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InventorsNose, new cjs.Rectangle(-4.5,-9.6,9.1,19.299999999999997), null);


(lib.InventorsMouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AiKAIIB1goQAYAUAjgUIBlAcAiKAIQAnAbBjgDQBegDAtghAiKAIIEVgM");
	this.shape.setTransform(0.025,0.0106);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6666").s().p("AiKAIIEVgMQgtAhheADIgPABQhXAAgkgZgAgVggQAYAUAjgUIBlAcIkVAMg");
	this.shape_1.setTransform(0.025,0.0106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InventorsMouth, new cjs.Rectangle(-14.9,-4.2,29.9,8.5), null);


(lib.InventorsGlasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AB2A6IB1h4ACRBWIB5h5AEaAPIBthkAkIAGIh+hXAjlBWIB+hzAj/A3IB9hwAhaARQBkhHBhBF");
	this.shape.setTransform(0,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AESAAQAAAkgaAaQgaAagkAAQgcAAgVgQQgHgFgFgFQgJgJgGgKQgLgTAAgYQAAgjAagaQAZgaAkAAQAXAAASALQALAFAKAKQAGAGAEAGQAQAWAAAbgAhiAAQAAABAAABQgBAjgZAZQgZAagkAAQgdAAgXgRQgGgFgEgEQgKgKgGgMQgKgSAAgWQAAgDABgFQADgeAWgXQAagaAkAAQAbAAAVAPQAHAFAGAGQAIAIAGAJQAMAUAAAYg");
	this.shape_1.setTransform(0.775,0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660000").s().p("ACJBIIB5h5QAQAWAAAbQAAAkgaAaQgaAagkAAQgcAAgVgQgAjtBHIB/hzQAMAUAAAYIAAACQgBAjgZAZQgZAagkAAQgdAAgXgRgABjAAQAAgjAagaQAZgaAkAAQAXAAASALIh1B3QgLgTAAgYgAkRAAIABgIQADgeAWgXQAagaAkAAQAbAAAVAPIh+BwQgKgSAAgWg");
	this.shape_2.setTransform(0.775,0.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AB/BAQgIgJgGgKIB1h2QALAFAKAKIAKAMIh5B4IgNgKgAj0BAQgLgKgFgLIB9hwQAIAEAGAHQAIAIAFAJIh+ByIgKgJg");
	this.shape_3.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InventorsGlasses, new cjs.Rectangle(-40,-10.4,80.1,20.9), null);


(lib.InventorsEyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABsALQAhgVAZgFQA0gEAoAeAkBAQQBVhABJBA");
	this.shape.setTransform(-0.85,-9.643);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ADRgfQAAAWgHAPQgGAOgJAAQgLAAgGgOQgHgPAAgWQAAgVAHgOQAGgPALAAQAJAAAGAPQAHAOAAAVgAESAAQAAAkgaAaQgZAagkAAQgkAAgagaQgagaAAgkQAAgjAagaQAagaAkAAQAkAAAZAaQAaAaAAAjgAijgfQAAAWgHAPQgHAOgJAAQgKAAgGgOQgHgPAAgWQAAgVAHgOQAGgPAKAAQAJAAAHAPQAHAOAAAVgAhiAAQAAAkgaAaQgaAagkAAQgkAAgZgaQgagaAAgkQAAgjAagaQAZgaAkAAQAkAAAaAaQAaAaAAAjg");
	this.shape_1.setTransform(0,2.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AB8A+QgZgaAAgkQAAgjAZgaQAbgaAjAAQAlAAAZAaQAaAaAAAjQAAAkgaAaQgZAaglAAQgjAAgbgagACphCQgGAPAAAUQAAAWAGAPQAHAOAKAAQAKAAAGgOQAHgPAAgWQAAgUgHgPQgGgPgKAAQgKAAgHAPgAj3A+QgagaAAgkQAAgjAagaQAZgaAlAAQAjAAAbAaQAZAaAAAjQAAAkgZAaQgbAagjAAQglAAgZgagAjKhCQgHAPAAAUQAAAWAHAPQAHAOAKAAQAIAAAIgOQAGgPAAgWQAAgUgGgPQgIgPgIAAQgKAAgHAPg");
	this.shape_2.setTransform(0,2.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACqAlQgGgQgBgVQABgVAGgOQAGgPALAAQAJAAAGAPQAIAOgBAVQABAVgIAQQgGAOgJAAQgLAAgGgOgAjKAlQgGgQAAgVQAAgVAGgOQAHgPAKAAQAJAAAHAPQAGAOABAVQgBAVgGAQQgHAOgJAAQgKAAgHgOg");
	this.shape_3.setTransform(-0.05,-0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InventorsEyes, new cjs.Rectangle(-28.4,-12.3,56.8,24.6), null);


(lib.InventorsCyborgEyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABrALQAigVAZgFQAzgEApAeAkBAQQBVhABJBA");
	this.shape.setTransform(-0.825,-9.643);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ADRgfQAAAWgHAOQgHAPgJAAQgKAAgHgPQgGgOAAgWQAAgVAGgPQAHgOAKAAQAJAAAHAOQAHAPAAAVgAESAAQAAAkgaAaQgaAagkAAQgkAAgZgaQgagaAAgkQAAgjAagaQAZgaAkAAQAkAAAaAaQAaAaAAAjgAijgfQAAAWgHAOQgGAPgJAAQgKAAgHgPQgHgOAAgWQAAgVAHgPQAHgOAKAAQAJAAAGAOQAHAPAAAVgAivgyQAAAKgEAHQgDAIgEAAQgGAAgCgIQgEgHAAgKQAAgKAEgHQACgHAGAAQAEAAADAHQAEAHAAAKgAhiAAQAAAkgaAaQgZAagkAAQgkAAgagaQgagaAAgkQAAgjAagaQAagaAkAAQAkAAAZAaQAaAaAAAjg");
	this.shape_1.setTransform(0.025,2.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgHARQgDgHAAgKQAAgJADgHQACgIAFAAQAEAAAEAIQADAHAAAJQAAAKgDAHQgEAIgEAAQgFAAgCgIg");
	this.shape_2.setTransform(-18.725,-2.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgQAkQgGgPAAgVQAAgVAGgPQAIgOAIAAQAJAAAHAOQAHAPAAAVQAAAVgHAPQgHAPgJAAQgIAAgIgPgAgIgkQgDAHAAAKQAAAKADAHQACAHAGAAQAEAAADgHQADgHAAgKQAAgKgDgHQgDgHgEAAQgGAAgCAHg");
	this.shape_3.setTransform(-18.65,-0.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AB9A+QgagaAAgkQAAgjAagaQAZgaAkAAQAkAAAaAaQAaAaAAAjQAAAkgaAaQgaAagkAAQgkAAgZgagACphDQgGAPAAAVQAAAWAGAOQAHAQAKgBQAJABAHgQQAHgOAAgWQAAgVgHgPQgHgOgJAAQgKAAgHAOgAj3A+QgagaAAgkQAAgjAagaQAagaAkAAQAkAAAZAaQAaAaAAAjQAAAkgaAaQgZAagkAAQgkAAgagagAjKhDQgHAPAAAVQAAAWAHAOQAHAQAKgBQAJABAGgQQAHgOAAgWQAAgVgHgPQgGgOgJAAQgKAAgHAOg");
	this.shape_4.setTransform(0.025,2.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAkQgGgPAAgVQAAgVAGgPQAHgOAJAAQAJAAAHAOQAHAPAAAVQAAAVgHAPQgHAPgJAAQgJAAgHgPg");
	this.shape_5.setTransform(18.6,-0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InventorsCyborgEyes, new cjs.Rectangle(-28.3,-12.3,56.7,24.6), null);


(lib.InventorsBowlerHat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(7,1,1).p("Al7g1QFkDwGTj6");
	this.shape.setTransform(0.025,23.046);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("Al7DrQAWhiAAgNQAAiUBphpQA2g2BBgaQA/gZBHAAQBJAAA/AZQBBAaA2A2QBpBpAACUQAAAJATBd");
	this.shape_1.setTransform(0.025,-5.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Al7CwQAWhiAAgNQAAiUBphpQA2g2BBgaQA/gZBHAAQBJAAA/AZQBBAaA2A2QBpBpAACUQAAAJATBdQjOB/jAAAQi6AAivh2g");
	this.shape_2.setTransform(0.025,-0.004);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InventorsBowlerHat, new cjs.Rectangle(-41.4,-30.4,82.9,63.4), null);


(lib.InventorsBeard = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Algj4QA/B9B6BgQAagcBBgWQBPgvBIAvIBQAsIDGkGQgmDvheCYQgIALgHAKQgBACgCADQhPBvg2AeQg8AhgIAAQgHAAhCgmQhDgmhgiPQhgiigWijg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("AhHEBQhDglhgiPQhgiigWijQA/B+B6BfQAagcBBgWQBPgvBIAvIBQAtIDGkHQgmDvheCYIgPAVIgDAEQhPBwg2AeQg8AhgIAAQgHAAhCgng");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InventorsBeard, new cjs.Rectangle(-36.3,-30.6,72.69999999999999,61.2), null);


(lib.InevntorsSmile = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhJAcIhLgIQCNAICcg3IhOAh");
	this.shape.setTransform(0.825,-1.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AiUAJIB2ghQAiAbAagYIB3gRQgDACgDADQgCABgCACAiUAJQAoAfBEgBQBDgBAigOQAhgOAtgoAiUAJQCZA8CGhj");
	this.shape_1.setTransform(0.825,-0.4867);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiUANIBLAIIhLgIQCNAHCcg2IhOAiIBOgiIgGAEIgEADQhUA+haAAQg3AAg6gWgAiUANIAAAAg");
	this.shape_2.setTransform(0.825,-0.8525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC6666").s().p("AiUAJQCZA8CGhjQgtAoghAOQgiAOhDABIgDAAQhCAAgngegAiUAJIB2ghQAiAbAagYIB3gRQiLAwh9AAIghgBg");
	this.shape_3.setTransform(0.825,-0.4867);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InevntorsSmile, new cjs.Rectangle(-15,-5.4,31.7,9.9), null);


(lib.DamselsSuit = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape.setTransform(0,0.0056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("ADAn5QBUD2gGEWQhFE5iRCuQBLk2A9q9gAkOg8QAflfBCgVQA1HXBgHKg");
	this.shape_1.setTransform(5.9199,39.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AnwAgQALhSAJhSIA3AUIAkAMIBPAWIBPASQApAIAnAFQBeAPBcABQB9gFBigSQAqgJAkgKIA2gRQAsgRAkgVQAJBTAOBaQkQBYjwAAQkDAAjehlg");
	this.shape_2.setTransform(2.975,108.1056);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660033").s().p("ACwPFQgGgGAAgJQAAgJAGgHQAHgGAJAAQAJAAAGAGQAHAHAAAJQAAAJgHAGQgGAHgJAAQgJAAgHgHgAguPFQgGgGAAgJQAAgJAGgHQAHgGAJAAQAJAAAGAGQAHAHAAAJQAAAJgHAGQgGAHgJAAQgJAAgHgHgAEIMXQgGgGAAgJQAAgJAGgHQAHgGAJAAQAJAAAGAGQAHAHAAAJQAAAJgHAGQgGAHgJAAQgJAAgHgHgAiYMXQgHgGAAgJQAAgJAHgHQAGgGAJAAQAJAAAHAGQAGAHAAAJQAAAJgGAGQgHAHgJAAQgJAAgGgHgAOdMNQgGgGAAgIIAAgDQAAgHAGgHQAHgHAJAAQAJAAAGAHQAHAHAAAJQAAAJgHAGQgGAHgJAAQgJAAgHgHgAu8LrQgGgGAAgJQAAgJAGgHQAHgGAJAAQAJAAAGAGQAHAHAAAJQAAAJgHAGQgGAHgJAAQgJAAgHgHgAjZJRQgGgHAAgJQAAgJAGgGQAHgHAJAAQAJAAAGAHQAHAGAAAJQAAAJgHAHQgGAGgJAAQgJAAgHgGgAFOIkQgGgGAAgJQAAgJAGgHQAHgGAJAAQAJAAAGAGQAHAHAAAJQAAAJgHAGQgGAHgJAAQgJAAgHgHgAFcFgQgGgGAAgJQAAgJAGgHQAHgHAJAAQAJAAAGAHIAFAGIgBAUIgEAFQgGAHgJAAQgJAAgHgHgAkFFgQgGgGAAgJQAAgJAGgHQAHgHAJAAQAJAAAGAHQAHAHAAAJQAAAJgHAGQgGAHgJAAQgJAAgHgHgAF/FbIABgUQACAEAAAGQAAAFgDAFgAGAFHIAAAAgAE6CWQgGgGAAgJQAAgJAGgHQAHgGAJAAQAJAAAGAGQAHAHAAAJQAAAJgHAGQgGAHgJAAQgJAAgHgHgAjZCWQgGgGAAgJQAAgJAGgHQAHgGAJAAQAJAAAGAGQAHAHAAAJQAAAJgHAGQgGAHgJAAQgJAAgHgHgAHCufIAABMIiWCIgAlMuDIABhIICfDyg");
	this.shape_3.setTransform(0.125,-9.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#763333").s().p("AgcJrQhgnJg1nYIgTjCIgBgFQgMiFgIiGQDZAeDaggQgLCjgMCTIgHBWQg9K8hLE2QgXBdgXA6QgRhQgRhQg");
	this.shape_4.setTransform(6.275,27.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Al+AIQAogaAhgSQBPgqAnAEIAICYIAEBCQgjAPglANQgcALgdAJQgzAPg1ALQgjAIgkAGIg8AIQgiADgkACQgrADgtAAIIGiqIoGCqQDCigB9hQgAK9DvIm4iWIALikQBpAtBWA1QAaAPAZASQBzBSBIBlIAAAAgAJWDoQgsgHgwgKQgqgJgwgNIhMgXIhTgbIAEg2IG4CWQgvAAg4gHgAizCQIgEhCIDOhGIDuBRIgEA2QhwAQhwAAQhpAAhrgPgAizCQIAAAAgAEFBZgAAXAIIjOBGIgIiYQBcggBggGIgBAGQAAANAIAJQAJAIAMABQANgBAIgIQAJgJAAgNIAAgGQBqACBvAjIgLCkgAi3BOIAAAAgAi/hKIgEhiIAnhLQC9CuDKihIAqBNIgFBSQhvgjhqgCQgCgJgHgGQgIgJgNAAQgMAAgJAJQgGAGgBAJQABgJAGgGQAJgJAMAAQANAAAIAJQAHAGACAJIAAAGQAAANgJAJQgIAIgNABQgMgBgJgIQgIgJAAgNIABgGQhgAGhcAgIAAAAgAA3hwIAAAAg");
	this.shape_5.setTransform(2.4,-65.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663333").s().p("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");
	this.shape_6.setTransform(0,10.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AC2B+QBzijAsikIAWAAQBVAVACA9IhMBuIiWDTgAmXg1IgrhCQAEhABNgLQA7CqBlCIIgnBMg");
	this.shape_7.setTransform(7.7,-101.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DamselsSuit, new cjs.Rectangle(-111.6,-122.3,223.2,244.7), null);


(lib.DamselsSmile = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhegKQAdgKArgHQAMADAGAHQAKgLAJgCQA1AGAbAOAhegKQAaAiA3AHQBAACAsgrAhegKQBYAcBlgc");
	this.shape.setTransform(0.025,0.0316);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgNAfQg3gHgagiQAsANAwAAQAuAAAzgNQgpApg8AAIgHAAgAgCADQgwAAgsgNQAdgKArgHQAMADAGAHQAKgLAJgCQA1AGAbAOQgzANguAAIAAAAgAhegKIAAAAg");
	this.shape_1.setTransform(0.025,0.0316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DamselsSmile, new cjs.Rectangle(-10.5,-4,21.1,8.1), null);


(lib.DamselsPurpleSmile = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhegKQAdgKArgHQAMADAGAHQAKgLAJgCQA1AHAbANAhegKQAaAjA3AGQBAADAsgsAhegKQBYAcBlgc");
	this.shape.setTransform(0.025,0.0344);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330066").s().p("AgNAfQg3gGgagjQAsANAwAAQAuAAAzgNQgpApg7AAIgIAAgAgCADQgwAAgsgNQAdgKArgHQAMADAGAHQAKgLAJgCQA1AHAbANQgzANguAAIAAAAgAhegKIAAAAg");
	this.shape_1.setTransform(0.025,0.0344);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DamselsPurpleSmile, new cjs.Rectangle(-10.5,-4,21.1,8.1), null);


(lib.DamselsNose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgLhWQgaA7A5BUIghAe");
	this.shape.setTransform(0.0369,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DamselsNose, new cjs.Rectangle(-3,-9.6,6.1,19.299999999999997), null);


(lib.DamselsMouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhXADQAbgXArgHQAMADAFAIQALgMAJgCQA1AHAPAaAhXADQAYAWA2AGQBBADAggfAhXADICvAA");
	this.shape.setTransform(0,-0.0118);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgJAfQg2gGgXgWICtAAQgcAcg5AAIgLAAgAhWADQAagXArgHQAMADAFAIQALgMAJgCQA1AHAOAagAhWADg");
	this.shape_1.setTransform(0,-0.0118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DamselsMouth, new cjs.Rectangle(-9.7,-4.1,19.5,8.2), null);


(lib.DamselsHair = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AixlbQA+gwBaAAQACAAABAAQAAgSA6AWQAvARAdATQAEADAFAEQAVAPAtAcQAcARAIANQANAWA1AtQAXA5AdAnQAdAngFBTQAEAjgGAHQgFAFgCAJQgBACAAACQABAJADAKQADACADAEQAGAQAGATQAQBXgeEFAixlbQA2heAdgUQAXgQAtAAQAuAAAqAXQA0AcAAAwQAAAEgBACQgDACACAPAAYh7QAAAhgEACQgDABgCABIgBAAQgBABgBAAQABAAAAgBQABAAAAAAAANhWQAFgFAGggQCuAnA9AhQA4AgAoBZQAAACACADQAEAKAEAKAAPhWQAEgEAFghAllAQQgUgKAFgVQAGgWAJglQAJgmAwhTQAwhUA5g1QAIgIAKgHAllAQQAPgRArgSQAZgKAhgKQAGgCAbgbQAbgaAugPQAtgOBnAlAliFHQgYhwgEgpQgEggAJAJQAEgZALgMQAKgMgFgdQgGgdAGgcAF5CCQADALAEAM");
	this.shape.setTransform(0.001,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AEGCZQg9giiugnQgFAggGAFQhnglgtAOQguAPgbAbQgbAagFACQgiALgYAJQgsASgPARQgUgJAGgVIAOg8QAJgmAwhTQAwhTA5g0QAJgJAJgHQA+gvBbgBIADAAQAAgIALAAIABAAIAEAAIACABIAAAAQALABAVAHIACABIADABIACABQAvASAdASIAJAHQAVAPAtAdQAdAQAHANQANAWA2AtQAXA4AdAnQAcAngEBUQAEAjgGAGQgGAGgCAJIgBADQgnhZg5gfgAhbkBQAYgQAsAAQAuAAAqAXQA1AcAAAwIgBAGQgDACABAPQgdgSgvgSIgCgBIgDgBIgCgBQgVgHgLgBIAAAAIgCgBIgEAAIgBAAQgLAAAAAIIgDAAQhbABg+AvQA2hdAdgVgABziXIAAAAg");
	this.shape_1.setTransform(-0.3293,-20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DamselsHair, new cjs.Rectangle(-39.4,-48.7,78.8,97.5), null);


(lib.DamselsGloveR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhSEdIAArfICrhkIABNfQAAABAAABQAEAYABAbQAAAEAAADQAABJgcA1QgcA0gnAAQgmAAgdg0Qgbg1AAhJQAAgaAEgYQADgUAFgSQAGgUAJgRQACgCAAgBQAbgxAmAAQAnAAAcA0QAQAcAHAl");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhDHzQgbg1AAhJQABgaADgYQADgUAFgSQAGgUAJgRIACgDQAbgxAmAAQAnAAAcA0QAQAcAGAlIABACQAEAYAAAbIAAAHQAABJgbA1QgcA0gnAAQgmAAgdg0gABDD4Qgcg0gnAAQgmAAgbAxIgCADQgJARgGAUIAArfICrhkIAANfQgGglgQgcg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DamselsGloveR, new cjs.Rectangle(-10.4,-56,20.9,112.1), null);


(lib.DamselsGloveL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABmESQgagMgJgSQgBgCgBgBQgbgxgmAAQgmAAgcA0QgQAdgSApQALgEgGAPQgGAPAAAPQAAAPABAoQAAAnAfA6QAeA6AngFQAngFAcg4QAbg4ADgzQACgzABgYQAAgZACgSIAArYIjKhpIAANp");
	this.shape.setTransform(-0.0083,-0.0052);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFH7Qgfg6AAgnIgBg3QAAgPAGgPQAGgPgLAEQASgpAQgdQAcg0AmAAQAmAAAbAxIACADQAJASAaAMQgagMgJgSIgCgDQgbgxgmAAQgmAAgcA0QgQAdgSApIAAtpIDKBpIAALYQgCASAAAZIgDBLQgDAzgbA4QgcA4gnAFIgGAAQgkAAgbg1g");
	this.shape_1.setTransform(-0.0083,-0.0052);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DamselsGloveL, new cjs.Rectangle(-11.2,-57,22.4,114.1), null);


(lib.DamselsEyes2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AD+AKIAGgFIAMgLAj/ADIgQgM");
	this.shape.setTransform(0.325,1.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABpACQAigrAqgUQArgTAyBVAkRBCQBnhUBTBU");
	this.shape_1.setTransform(-0.175,-8.8044);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("ADRgeQAAAVgHAPQgHAOgIAAQgJAAgGgOQgGgPAAgVQAAgWAGgOQAGgPAJAAQAIAAAHAPQAHAOAAAWgAENAAQAAAkgZAaQgSATgXAFQgIABgIAAQgIAAgHgBQgXgFgSgTQgZgaAAgkQAAgjAZgaQAXgZAhAAQAhAAAYAZQAJAJAGALQAKATAAAWgAhmAAQAAAkgYAaQgTATgYAFQgIABgIAAQgIAAgIgBQgYgFgSgTQgZgaAAgkQAAgXAMgUQAFgJAIgJQAQgRAVgFQAKgDALAAQALAAAKADQAVAFARARQAYAaAAAjgAikgeQAAAVgGAPQgHAOgIAAQgKAAgGgOQgGgPAAgVQAAgWAGgOQAGgPAKAAQAIAAAHAPQAGAOAAAWg");
	this.shape_2.setTransform(0.425,6.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACsAkQgGgPAAgVQAAgVAGgOQAGgPAJAAQAIAAAHAPQAGAOABAVQgBAVgGAPQgHAPgIAAQgJAAgGgPgAjKAkQgFgPgBgVQABgVAFgOQAHgPAKAAQAIAAAHAPQAGAOAAAVQAAAVgGAPQgHAPgIAAQgKAAgHgPg");
	this.shape_3.setTransform(0.45,3.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACsBWQgXgFgSgTQgZgaAAgkQAAgjAZgaQAXgZAhAAQAhAAAYAZQAJAJAGALIgGAFIAGgFQAKATAAAWQAAAkgZAaQgSATgXAFQgIABgIAAQgIAAgHgBgACshCQgGAOAAAWQAAAVAGAPQAGAOAJAAQAIAAAHgOQAHgPAAgVQAAgWgHgOQgHgPgIAAQgJAAgGAPgAjJBWQgYgFgSgTQgZgaAAgkQAAgXAMgUQAFgJAIgJQAQgRAVgFQAKgDALAAQALAAAKADQAVAFARARQAYAaAAAjQAAAkgYAaQgTATgYAFIgQABQgIAAgIgBgAjJhCQgGAOAAAWQAAAVAGAPQAGAOAKAAQAIAAAHgOQAGgPAAgVQAAgWgGgOQgHgPgIAAQgKAAgGAPgAEDgpIAAAAg");
	this.shape_4.setTransform(0.425,6.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DamselsEyes2, new cjs.Rectangle(-28.5,-16.3,57.1,32.7), null);


(lib.DamselsEyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AD+AKIAGgFIAMgLAj/ADIgQgM");
	this.shape.setTransform(0.325,-0.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AENAAQAAAkgZAZQgYAbghAAQghAAgXgbQgZgZAAgkQAAgjAZgaQAXgaAhAAQAhAAAYAaQAJAJAGALQAKATAAAWgADRgfQAAAWgHAPQgHAOgIAAQgJAAgGgOQgGgPAAgWQAAgVAGgPQAGgOAJAAQAIAAAHAOQAHAPAAAVgAikgfQAAAWgGAPQgHAOgIAAQgKAAgGgOQgGgPAAgWQAAgVAGgPQAGgOAKAAQAIAAAHAOQAGAPAAAVgAhmAAQAAAkgYAZQgZAbgiAAQgiAAgYgbQgZgZAAgkQAAgYAMgTQAFgKAIgIQAQgRAVgGQAKgDALAAQALAAAKADQAVAGARARQAYAaAAAjg");
	this.shape_1.setTransform(0.425,4.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABpAMQAZgOAVgIQAHgCAGgCQAigHAgALQAXAIAVARAkRAVQAagVAZgKQAwgVAsAVQAWAKAVAV");
	this.shape_2.setTransform(-0.175,-7.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("AAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(27.025,-13.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACsAlQgGgQAAgVQAAgVAGgPQAGgOAJAAQAIAAAHAOQAGAPABAVQgBAVgGAQQgHAOgIAAQgJAAgGgOgAjKAlQgFgQgBgVQABgVAFgPQAHgOAKAAQAIAAAHAOQAGAPAAAVQAAAVgGAQQgHAOgIAAQgKAAgHgOg");
	this.shape_4.setTransform(0.45,1.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACDA+QgZgaAAgkQAAgjAZgaQAXgaAhAAQAhAAAYAaQAJAJAGALQAKATAAAWQAAAkgZAaQgYAaghAAQghAAgXgagACshCQgGAOAAAWQAAAVAGAPQAGAOAJAAQAIAAAHgOQAHgPAAgVQAAgWgHgOQgHgPgIAAQgJAAgGAPgAD9gkIAGgFgAjzA+QgZgaAAgkQAAgYAMgTQAFgKAIgIQAQgRAVgFQAKgEALAAQALAAAKAEQAVAFARARQAYAaAAAjQAAAkgYAaQgZAagiAAQgiAAgYgagAjJhCQgGAOAAAWQAAAVAGAPQAGAOAKAAQAIAAAHgOQAGgPAAgVQAAgWgGgOQgHgPgIAAQgKAAgGAPg");
	this.shape_5.setTransform(0.425,4.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DamselsEyes, new cjs.Rectangle(-28.5,-13.2,57.1,27.5), null);


(lib.DamselsDress = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000066").ss(1,1,1).p("AmOiHIghA7QBZAmgIhTQguikhqBQQgLDkDPDsQDwBDBti0QAzC3EAiRQB0hCAlkfQACg8gQgbQgVghgzAWQg8AZADBSQAQA3AwgNIghg4");
	this.shape.setTransform(1.8562,-38.0255);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AqrydQDYh+EgACID0D5IDzkBQG5BWFlEBIgHVDIizhqIAAxQIjChGQgSBdgfBhQgVBEgbBGQhrESgpEfIAJAVQADAXAFAYQBZHPGUHXQh+BriJBIAmyTbQk1hKh2iMQHFofgJjXQgJjXABAAQAAgCgBgCQguljh3k+QgMgggNghQgphlgThrIjkCgIAAPpIi5A4IgQyaQDUiuCWhmAmwKsQChARAMjxAmyTbQEsi5AHoxABMFwQgJBtBYAZAmyTbQDbA0E8ATQFRAGEiiZQm7iuAVn/");
	this.shape_1.setTransform(0.025,0.0114);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330C81").s().p("Ak4HAQgulkh3k9IgZhBQgphlgThrIjkCgID4j/ICtGTQgMDkDQDsQDuBDBvizQAzC3D/iSQB0hBAlkfQACg9gPgaICphNQgVBEgbBGQhrERgpEfIAJAWIAIAvQjxCQjmAAQjnAAjeiSg");
	this.shape_2.setTransform(-11.375,-39.5624);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330099").s().p("ABlUiQk8gTjbg0QEsi5AHoxQgHIxksC5Qk1hKh2iMQHFofgJjXIgIjXIgBgEQG5EjHjkhQBZHPGUHXQh+BriJBIQmmimgBnXIABgwIgBAwQABHXGmCmQkXCTlCAAIgaAAgAmcKtQCLAAAOjYIAAgEIAAgFIAAAFIAAAEQgODYiLAAIAAAAIAAAAIgTgBIgBAAIABAAIATABIAAAAIAAAAgACbH2QhQgWAAhcIABgUIgBAUQAABcBQAWgAOYEPIAAxQIjChGQgSBdgfBhIipBNQAPAagCA9QglEgh0BBQj/CSgzi3QhuCzjvhDQjQjsAMjlIABgBIABAAIABgBIAAAAIABgBQAggXAaAAIAAAAIABAAQA4ABAfBoIAAABIABADIAAABIAAABQAFA4gnAAIAAAAIgBAAQgQAAgZgKIgCAAIgBgBIgCgBIAhg6IghA6IACABIABABIACAAQAZAKAQAAIABAAIAAAAQAnAAgFg4IAAgBIAAgBIgBgDIAAgBQgfhog4gBIgBAAIAAAAQgaAAggAXIgBABIAAAAIgBABIgBAAIgBABIitmTIj4D/IAAPpIi5A4IgQyaQDUiuCWhmIAzgnIAJgLQDYh+EgACID0D5IDzkBQG5BWFlEBIgHVDgAGqnwIANgCIABAAIACAAIABgBIghg4IAhA4IgBABIgCAAIgBAAIgNACIgBAAIAAAAQghAAgNgpIgBgEIAAgGQAAhNA5gYIABAAQATgIAPAAIABAAIAAAAQAWAAANASIABAAIAAABIAAAAIABABIgBgBIAAAAIAAgBIgBAAQgNgSgWAAIAAAAIgBAAQgPAAgTAIIgBAAQg5AYAABNIAAAGIABAEQANApAhAAIAAAAIABAAg");
	this.shape_3.setTransform(0.025,0.0114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DamselsDress, new cjs.Rectangle(-111.5,-132.4,223.1,264.8), null);


(lib.DamselsBallMask = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgICFQB+ASCjgvIBUgfIAAjRIhMBRQhpg+hVA0IhrBBIhxhAQhFgphNARIhXgzIgKDHIBpArQBnA0CUgWgACbBAIABAAIABAAQAggCAXgJQAOgGAGgGQAAgBAAgBQABgDAAgDQgBgKgWgGQgIgCgIgBIgFgBQgPgBgQABACaANQgBAAgBAAQgfACgSAHQgUAHgCAGQgDAGAAADQABALAYAFQAFACAGABIAJABIAOAAQAIAAAJAAACdANIgBAAAhhAsQgBALgXAFQgXAGgggCQgggCgXgJQgWgJABgLQABgKAXgGQAXgGAhACQAfACAWAJQAWAJAAALgAgIAAIAACF");
	this.shape.setTransform(-2.475,0.0148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.6,1,1).p("ABpggQAAACgBACQgBABgDAAQgCAAgBgBQgBgCAAgCQAAgCABgBQABgCACAAQADAAABACQABABAAACgACig7QAAACgCACQgCABgBAAQgDAAgBgBQgBgCAAgCQAAgCABgCQABgBADAAQABAAACABQACACAAACgADSgWQAAACgBABQgCACgCAAQgCAAgBgCQgBgBAAgCQAAgCABgCQABgBACAAQACAAACABQABACAAACgAD6gxQAAABgCACQgBACgCAAQgCAAgBgCQgCgCAAgBQAAgCACgCQABgBACAAQACAAABABQACACAAACgAE3guQAAACgBABQgBACgCAAQgCAAgCgCQgBgBAAgCQAAgCABgBQACgCACAAQACAAABACQABABAAACgAFXhPQAAADgCABQgBABgCAAQgCAAgBgBQgCgBAAgDQAAgBACgCQABgCACAAQACAAABACQACACAAABgAFXgRQAAACgCABQgBABgCAAQgCAAgBgBQgCgBAAgCQAAgDACgBQABgBACAAQACAAABABQACABAAADgAFGArQAAACgBABQgCACgCAAQgCAAgCgCQgBgBAAgCQAAgCABgBQACgCACAAQACAAACACQABABAAACgAE3ACQAAACgBACQgBABgCAAQgCAAgCgBQgBgCAAgCQAAgCABAAQACgCACAAQACAAABACQABAAAAACgAEfAzQAAACgCABQgBABgCAAQgCAAgCgBQgBgBAAgCQAAgDABgBQACgBACAAQACAAABABQACABAAADgAEGAAQAAABgBABQgBACgDAAQgCAAgBgCQgCgBAAgBQAAgCACgCQABgBACAAQADAAABABQABACAAACgADoBLQAAACgBACQgBABgDAAQgCAAgBgBQgBgCAAgCQAAgCABgBQABgBACAAQADAAABABQABABAAACgAB8BQQAAACgBABQgCABgCAAQgCAAgBgBQgCgBAAgCQAAgDACgBQABgBACAAQACAAACABQABABAAADgACdBnQAAACgCABQgBACgCAAQgDAAgBgCQgBgBAAgCQAAgCABgBQABgCADAAQACAAABACQACABAAACgAAaAAQAAABgBABQgCACgCAAQgCAAgBgCQgCgBAAgBQAAgCACgCQABgBACAAQACAAACABQABACAAACgABBBLQAAACgCACQgBABgCAAQgCAAgCgBQgBgCAAgCQAAgCABgBQACgBACAAQACAAABABQACABAAACgAlNhmQAAACgBABQgBACgCAAQgDAAgBgCQgBgBAAgCQAAgCABgBQABgCADAAQACAAABACQABABAAACgAlNguQAAACgBABQgBACgCAAQgDAAgBgCQgBgBAAgCQAAgCABgBQABgCADAAQACAAABACQABABAAACgAksg/QAAACgCABQgBACgCAAQgCAAgBgCQgCgBAAgCQAAgDACAAQABgCACAAQACAAABACQACAAAAADgAkAhJQAAACgBACQgCABgCAAQgCAAgBgBQgCgCAAgCQAAgCACgBQABgCACAAQACAAACACQABABAAACgAkTgGQAAACgBABQgBABgCAAQgDAAgBgBQgBgBAAgCQAAgCABgCQABgBADAAQACAAABABQABACAAACgAjqggQAAACgBACQgCABgCAAQgCAAgBgBQgCgCAAgCQAAgCACgBQABgCACAAQACAAACACQABABAAACgAjDguQAAACgCABQgBACgCAAQgCAAgCgCQgBgBAAgCQAAgCABgBQACgCACAAQACAAABACQACABAAACgAigg1QAAACgBABQgCABgCAAQgCAAgBgBQgCgBAAgCQAAgCACgCQABgBACAAQACAAACABQABACAAACgAiSgWQAAACgCABQgBACgCAAQgCAAgCgCQgBgBAAgCQAAgCABgCQACgBACAAQACAAABABQACACAAACgAhzgIQAAACgCACQgBABgCAAQgCAAgCgBQgBgCAAgCQAAgCABgBQACgCACAAQACAAABACQACABAAACgAALArQAAACgCABQgBACgCAAQgCAAgCgCQgBgBAAgCQAAgCABgBQACgCACAAQACAAABACQACABAAACgAhMAAQAAABgBABQgCACgCAAQgCAAgBgCQgCgBAAgBQAAgCACgCQABgBACAAQACAAACABQABACAAACgAg7AfQAAACgBABQgBABgCAAQgDAAgBgBQgBgBAAgCQAAgDABgBQABgBADAAQACAAABABQABABAAADgAhMBLQAAACgBACQgCABgCAAQgCAAgBgBQgCgCAAgCQAAgCACgBQABgBACAAQACAAACABQABABAAACgAAQBnQAAACgBABQgCACgCAAQgCAAgBgCQgBgBAAgCQAAgCABgBQABgCACAAQACAAACACQABABAAACgAiJBZQAAACgBACQgBABgCAAQgDAAgBgBQgBgCAAgCQAAgCABgBQABgCADAAQACAAABACQABABAAACgAhdBnQAAACgCABQgBACgCAAQgCAAgBgCQgCgBAAgCQAAgCACgBQABgCACAAQACAAABACQACABAAACgAkPBCQAAACgCABQgBACgCAAQgCAAgBgCQgCgBAAgCQAAgCACgCQABgBACAAQACAAABABQACACAAACgAjgBQQAAACgCABQgBABgCAAQgCAAgCgBQgBgBAAgCQAAgDABgBQACgBACAAQACAAABABQACABAAADgAjDBZQAAACgCACQgBABgCAAQgCAAgCgBQgBgCAAgCQAAgCABgBQACgCACAAQACAAABACQACABAAACgAlDAFQAAACgBABQgCACgCAAQgCAAgBgCQgCgBAAgCQAAgCACgBQABgCACAAQACAAACACQABABAAACgAkfAlQAAACgBABQgCACgCAAQgCAAgBgCQgCgBAAgCQAAgCACgCQABgBACAAQACAAACABQABACAAACg");
	this.shape_1.setTransform(-1.6,0.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AimAZQgggCgXgJQgWgIABgKQABgLAXgGQAXgGAhACQAfADAWAJQAWAJAAAJQgBALgXAGQgQAEgVAAIgSgBgACFAaIgJgBIgLgDQgYgGgBgLQAAgDADgEQACgGAUgHQASgIAfgCIACAAIACAAIABAAIABAAQAQgBAPACIAFABIAQACQAWAGABALIgBAEIAAACQgGAHgOAFQgXAJggACIgBAAIgBAAIgBAAIgRABg");
	this.shape_2.setTransform(-3.4772,3.8618);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAAIAAgBIAAADIAAgCg");
	this.shape_3.setTransform(38.925,9.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660066").s().p("Ai6CEIAAiEIBthCQBTgzBpA9IBMhRIAADSIhUAfQh0AihjAAQgnAAgjgGgAgVBvQAAABAAABQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAAAIAAAAgAihBvIABAEQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgBADIAAAAgAg2BYQAAABABAAQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIABgDIgBgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIAAAAgAA2BUIABADQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgEgBIgDABIgBAEIAAAAgAhxBUQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgEgBIgEABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAAAAgAgWA/IABAAQAcADAXgGQAXgGABgLIAAgDIABgCIAAgFQgBgLgWgGIgQgCIgFgBQgOgCgQABIgBAAIgBAAIgCAAIgBAAQgegBgWAFQgXAGgBALIABAFIgBAFQABALAYAGIAMADIAJABIAOAAIASgBgABrA7QAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIADABIAEgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIAAAAgACTAzQAAABAAABQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAIABgEIgBgDQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAAAIAAAAgAimAzIAAAEQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIAAADIAAAAgACEALQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIABgDIgBgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABIAAAAgABUAHQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIABgEIgBgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAIAAAAgAiXAHQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIABgEIgBgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAIAAAAgACkgJQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIAAAAgAAggOIABAEQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgBADIAAAAgAhIgXIABADIAEABIADgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAEIAAAAgACEglQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIABgDIgBgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABIAAAAgABHgpQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAIABgEIgBgDQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAIAAAAgAgQgyIABADIADABIAEgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAEIAAAAgACkhGQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAIAAAAgAgUBzQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAigBzIgBgEIABgDQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAAAQAAABgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgMBvIAAAAgAiXBvIAAAAgAg0BbQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIABADIgBADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAA3BXIgBgDIABgEIADgBIAEABQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAhwBXQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAEgBIAEABQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgsBYIAAAAgABABUIAAAAgAhnBUIAAAAgABtA/QAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIgEABIgDgBgAB2A7IAAAAgACUA3QAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAIABADIgBAEQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgAimA3IAAgEIAAgDQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgACdAzIAAAAgAidAzIAAAAgACGAOQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIABAEIgBADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgABVALQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIABADIgBAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAiWALQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIABADIgBAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgACOALIAAAAgABdAHIAAAAgAiOAHIAAAAgACmgGQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgACugJIAAAAgAAhgKIgBgEIABgDQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAApgOIAAAAgAhHgUIgBgDIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABIgEgBgAg/gXIAAAAgACGgiQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIABAEIgBADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgABJglQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIABADIgBAEQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgACOglIAAAAgABQgpIAAAAgAgPgvIgBgDIABgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgEABIgDgBgAgGgyIAAAAgACmhCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgACuhGIAAAAg");
	this.shape_4.setTransform(15.3,0.0512);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300FF").s().p("AhIBnIhpgrIAKjHIBXAzQBNgRBEApIBxBAIAACFQgtAHgoAAQhdAAhIglgABcBwQAAAAAAABQAAABABAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIAAAAgAAxBiQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIAAAAgAgJBiIABAEQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBABIgBADIAAAAgAgmBZIABADQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAIgBAEIAAAAgABtBUQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgBIgDABQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAIAAAAgAhVBLQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAABIAAAAgAgpARQgXAGgBAKQgBALAWAJQAXAJAfACQAgACAXgGQAXgFABgLQAAgLgWgJQgWgJgfgCIgPgBQgXAAgRAFgAhlAuQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIABgDIgBgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAABIAAAAgAB/AoQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAAAAgAiJAOQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAAAgABtAIQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAABIAAAAgAhYACQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAEABIADgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIAAAAgABGAAIABAEQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBABIgBACIAAAAgAAngNIABADQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAIgBAEIAAAAgAgwgXQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIADABIAEgBQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAAAgAgJglIABAEQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBABIgBADIAAAAgAiSglQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIABgEIgBgDQAAgBgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIAAAAgAAZgsQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIADABIAEgBIABgDIgBgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAABIAAAAgAhyg2QAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAAAgAhGhAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIABgEIgBgDIgEgBIgDABQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAIAAAAgAiShdQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIABgEIgBgDIgDgBIgEABQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIAAAAgABeBzQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgABmBwIAAAAgAAyBmQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAgIBmIgBgEIABgDQABgBAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAA6BiIAAAAgAAABiIAAAAgAglBcIgBgDIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgABvBYQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIADgBIAEABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgAgcBZIAAAAgAB3BUIAAAAgAhTBOQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBgAhLBLIAAAAgAhjAxQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABAEIgBADQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAhbAuIAAAAgACAArQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgACIAoIAAAAgAiHARQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAh/AOIAAAAgABvALQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAB3AIIAAAAgAhXAFQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgDABIgEgBgABHAEIgBgEIABgCQABgBAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAhPACIAAAAgABQAAIAAAAgAAogKIgBgDIABgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgAAxgNIAAAAgAgugTQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABIgDgBgAgmgXIAAAAgAgIghIgBgEIABgDQABgBAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAiRghQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAABIABADIgBAEQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAAAglIAAAAgAiJglIAAAAgAAbgpQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABAEIgBADIgEABIgDgBgAAjgsIAAAAgAhwgzQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBgAhog2IAAAAgAhEg8QgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIADgBIAEABIABADIgBAEQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgAg8hAIAAAAgAiRhZQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIADABIABADIgBAEQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAiJhdIAAAAg");
	this.shape_5.setTransform(-21.175,0.0148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DamselsBallMask, new cjs.Rectangle(-39.9,-14.9,78.9,29.9), null);


(lib.Hat1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mesh();
	this.instance.setTransform(14.8,26.8,1,1,0,0,0,10,14.4);
	this.instance.alpha = 0.6016;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgOhBQAEgFAFgFQAbgZANAIQAEADADAFQAAACABACAgui1QAFAMAGAOIgGAHAgui1IAAAIAhEigQgBgIAAgGQAAgCAAgCIAIAJAhpi5IAAgBQAGgDARAUQAGAGAGAIQACADACADQgBgGgBgFIALALAhiiRQgDgGgCgGQgIgXAGgFIBaCZQAAABgBAAQgBAAgBAAQgDABgEgDQgEgDgFgFQgCgDgDgDIALAAAhThzIALAGAhGhbQgDgFgDgEQgEgIgDgHQgJgQgGgOIAPAOAgbiAQABAEABADQADAMADALIgGAHAgbiAIgFALAg6iKIgBAQAg6iKQAGAJAGAMIAAATAgjhhQADAFACAFQAGANAEALIgBALAguh1QAGAKAFAKAhFiyQgCgWAHgDIAdBqAhGhbIAMAFAgjibQAEAMAEAPAhCiVQAEAFAEAGAhGibIgBAPAgUg/QAAABABACQAFAOAAAHAg3hEIAMAGAgdgWIAFACAgngvQAAAAgBgBQgHgJgIgLQgHgKgIgNAgrgdIAOAHIgmA+IgJgLQAIgRAKgRQAIgNAHgLQAFgGAEgGAhMAdIgpg0IAegbIAsAVAgOhBQAAADAAADQABANgBAHQABAFgCACAAMAYIAHAOIAPgRIARgVIAMAbIAOgQAAzAAIAPgRAAYAAIAKAVIAMAZIAKAVIAOAeIASgQIAQAiIAMgHAAkgeIAPAeAgThiQADASACAPAgehXIAAAQAAnBUIARgRIARgSIAPgPAAOBRIAJAVIAQgSIANAcIAMAcIAKAWAgNBOIAJAXIASgUAADA5IALAYIAQgSIAQgRIARgTIAKAWIAPAgIANgLAgNBOIAQgVIAQgTIALAZIAJAVAgBAvIAEAKAANCSIAIAUIAYgPIATgLIAVgNIANAbAgMCnIAZgVIAVgTIALAYIAIASAADB6IAKAYAAiB/IASgPIASgPIAPAeIATgMIAOAeAgEBlIAHAVIAUgUIALAZAglBdIADAJIAVgYAhEB2QgLAFgHgEQgNgIAIglQAFgVAKgYAg1B9IAHAWIAUgWIAHAVIAWgYAg/CJIAKgMAguCTIAHAUIAUgVIAHAVIAGAQIADAKAg6CgIAMgNAg6BwIAFANIATgXIAIAXIAWgYAgvDFIAOgMIAEAMIACAGAgoDMIALgHIAXgOIAbgRIAFANAghC5IAVgSAgRBGIAEAIAgzC0IAMgNIAGASAhAjLQAGgBAMAX");
	this.shape.setTransform(11.825,20.3705);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkBTIgJgIIgFgFIALAAIgLAAIgBgBIgPgUIAMAGIgMgGIgPgYIAMAGIgMgGIgFgJIgIgOIALAGIgLgGIgOgdIAOANIgOgNIgFgNQgIgXAFgFIBZCZIAAAAIgDABIgBAAQgDAAgCgDgAgshEIABAAQAFgDARATIAMAPIAAAOIAAgOIAFAGIgCgMIAJALIgJgLIgCgOIAAgEIAIAJIgIgJQgBgWAGgCQAGgCALAYIALAZIgFAHIAFgHIAJAcIACAHIAFAWQAEARABAPIABAHQABAMgBAHQAAAGgCACgAApA5QAFANABAHQgBgHgFgNIgBgEIgJgXIgGgLIAGALIgBAPIABgPIAJAXIAAALIAAgLIABAEgAAkAZIAFgGgAAZATIgchoIAcBoIgKgTIgNgVIAAARIAAgRIANAVIAAATIAAgTIAKATgAAdAAIAFgKgAACgVIgGgKIAGAKgAAOg3IAAgIgAAoA1IAAAAgAgGgrg");
	this.shape_1.setTransform(5.688,8.6066);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwBqQgOgIAIglQAFgVALgYIgqg0IAegbIAtAVIgPAYQgLASgHAQIAIALIAmg+IgmA+IgIgLQAHgQALgSIAPgYIANAHIAFACIgFgCIgNgHIAIgMIAJAIQADADADgBIADAAIAAgBQACgCAAgFQABgHgBgNIgBgGIAKgKQAbgZAOAIQAEADACAFIABAEQADALgFAVIgEASQgFAPgIAQIgLAXIgFAIIgJAPIgQAXQgKANgKAKIgHAHQgHAHgHAFIgJAGQgHADgEAAQgEAAgDgCg");
	this.shape_2.setTransform(8.0946,21.6669);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,26.7,43.2);


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
	this.instance = new lib.Lens();
	this.instance.setTransform(48.5,15.5,1,1,0,0,0,48.5,15.5);
	this.instance.alpha = 0.4102;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(1,1,1).p("AitudQAHCHCxAZQDjAhB7jLQh+iEjCAMQiWgDhACFQgmheiTguQjXgegjCWQABCCDbAUQCUAeBDiggAFpunIAAe4QDjBgAVjZ");
	this.shape.setTransform(60.875,107.0531);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,123.8,216.1);


// stage content:
(lib.MPHFinalCMiranda = function(mode,startPosition,loop,reversed) {
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
		// Button 1 (The Inventor)
		this.btn1.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eyes1.x = 105.4;
			this.eyes1.y = 120.25;
			this.nose1.x = 106;
			this.nose1.y = 130.55;
			this.mouth1.x = 105.25;
			this.mouth1.y = 146.8;
			this.beard1.x = 105.3;
			this.beard1.y = 145.05;
			this.hat2.x = 105;
			this.hat2.y = 91.3;
			this.glove1.x = 40.35;
			this.glove1.y = 303.35;
			this.suit2.x = 105.1;
			this.suit2.y = 233.65;
		}
		// Button 2 (The Inventor)
		this.btn2.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.eyes1.x = 105.4;
			this.eyes1.y = 120.25;
			this.mask1.x = 104.8;
			this.mask1.y = 123.45;
			this.nose1.x = 106;
			this.nose1.y = 130.55;
			this.mouth2.x = 105.25;
			this.mouth2.y = 146.8;
			this.hat1.x = 105;
			this.hat1.y = 91.3;
			this.suit1.x = 105.1;
			this.suit1.y = 233.65;
		}
		// Button 1 (The Damsel)
		this.btn3.addEventListener("click", ClickFace1B.bind(this));
		
		function ClickFace1B() {
			this.eyes3.x = 652.85;
			this.eyes3.y = 107.75;
			this.nose2.x = 653.5;
			this.nose2.y = 117.5;
			this.mouth4.x = 652.9;
			this.mouth4.y = 131.05;
			this.hat3.x = 652.4;
			this.hat3.y = 98.15;
			this.hat4.x = 652.65;
			this.hat4.y = 92.15;
			this.glove3.x = 577.65;
			this.glove3.y = 231.3;
			this.glove4.x = 717.9;
			this.glove4.y = 232.15;
			this.dress2.x = 648.2;
			this.dress2.y = 201.05;
		}
		//Button 2 (The Damsel)
		this.btn4.addEventListener("click", ClickFace2B.bind(this));
		
		function ClickFace2B() {
			this.eyes4.x = 651.75;
			this.eyes4.y = 105.3;
			this.mask2.x = 653.55;
			this.mask2.y = 110.25;
			this.nose2.x = 653.5;
			this.nose2.y = 117.5;
			this.mouth5.x = 652.9;
			this.mouth5.y = 131.05;
			this.hat3.x = 652.4;
			this.hat3.y = 98.15;
			this.dress1.x = 647.45;
			this.dress1.y = 235.35;
		}
		// Reset Button
		this.resetBtn.addEventListener("click", ClickReset.bind(this));
		
		function ClickReset() {
			// The Inventor
			this.eyes1.x = 148.55;
			this.eyes1.y = 376;
			this.eyes2.x = 148.55;
			this.eyes2.y = 395.4;
			this.nose1.x = 106;
			this.nose1.y = 380.7;
			this.mouth1.x = 100.1;
			this.mouth1.y = 407.25;
			this.beard1.x = 66.3;
			this.beard1.y = 402.65;
			this.hat2.x = 146.75;
			this.hat2.y = 459.25;
			this.glove1.x = 25.8;
			this.glove1.y = 400.6;
			this.glove2.x = 28.2;
			this.glove2.y = 445.45;
			this.suit2.x = 265.55;
			this.suit2.y = 288.4;
			this.mask1.x = 147.55;
			this.mask1.y = 414.5;
			this.mouth2.x = 99.45;
			this.mouth2.y = 416.7;
			this.hat1.x = 73.15;
			this.hat1.y = 459.85;
			this.suit1.x = 265.55;
			this.suit1.y = 172.35;
			// The Damsel
			this.eyes3.x = 567.25;
			this.eyes3.y = 358.5;
			this.nose2.x = 607.9;
			this.nose2.y = 358.8;
			this.mouth4.x = 612.5;
			this.mouth4.y = 394.05;
			this.hat3.x = 622.2;
			this.hat3.y = 466.65;
			this.hat4.x = 677.85;
			this.hat4.y = 373.25;
			this.glove3.x = 632.75;
			this.glove3.y = 385.6;
			this.glove4.x = 657.7;
			this.glove4.y = 385.6;
			this.dress2.x = 461.35;
			this.dress2.y = 281.25;
			this.eyes4.x = 567.15;
			this.eyes4.y = 381.25
			this.mask2.x = 568.35;
			this.mask2.y = 403.75;
			this.mouth5.x = 612.5;
			this.mouth5.y = 399.9;
			this.dress1.x = 461.3;
			this.dress1.y = 194.05;
		}
		
		
		
		// Code for dragable parts
		this.eyes1.on("pressmove", dragMe);
		this.eyes2.on("pressmove", dragMe);
		this.eyes3.on("pressmove", dragMe);
		this.eyes4.on("pressmove", dragMe);
		this.mask1.on("pressmove", dragMe);
		this.mask2.on("pressmove", dragMe);
		this.mask3.on("pressmove", dragMe);
		this.hat1.on("pressmove", dragMe);
		this.hat2.on("pressmove", dragMe);
		this.hat3.on("pressmove", dragMe);
		this.hat4.on("pressmove", dragMe);
		this.beard1.on("pressmove", dragMe);
		this.glove1.on("pressmove", dragMe);
		this.glove2.on("pressmove", dragMe);
		this.glove3.on("pressmove", dragMe);
		this.glove4.on("pressmove", dragMe);
		this.mouth1.on("pressmove", dragMe);
		this.mouth2.on("pressmove", dragMe);
		this.mouth3.on("pressmove", dragMe);
		this.mouth4.on("pressmove", dragMe);
		this.mouth5.on("pressmove", dragMe);
		this.nose1.on("pressmove", dragMe);
		this.nose2.on("pressmove", dragMe);
		this.suit1.on("pressmove", dragMe);
		this.suit2.on("pressmove", dragMe);
		this.dress1.on("pressmove", dragMe);
		this.dress2.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Buttons
	this.resetBtn = new lib.ResetButton();
	this.resetBtn.name = "resetBtn";
	this.resetBtn.setTransform(366,52.9,2.5175,2.5175);
	new cjs.ButtonHelper(this.resetBtn, 0, 1, 2);

	this.btn4 = new lib.Outfit2Damsel();
	this.btn4.name = "btn4";
	this.btn4.setTransform(498.55,406.6,0.7875,0.7875,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btn4, 0, 1, 2);

	this.btn3 = new lib.Outfit1Damsel();
	this.btn3.name = "btn3";
	this.btn3.setTransform(429.6,409.25,0.7875,0.7875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btn3, 0, 1, 2);

	this.btn2 = new lib.Outfit2();
	this.btn2.name = "btn2";
	this.btn2.setTransform(299.45,409.25,0.7875,0.7875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2);

	this.btn1 = new lib.Outfit1();
	this.btn1.name = "btn1";
	this.btn1.setTransform(227.8,410.1,1.5117,1.5117);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.btn2},{t:this.btn3},{t:this.btn4},{t:this.resetBtn}]}).wait(1));

	// Body Parts
	this.glove4 = new lib.DamselsGloveR();
	this.glove4.name = "glove4";
	this.glove4.setTransform(657.7,386,0.6961,0.6961);

	this.glove3 = new lib.DamselsGloveL();
	this.glove3.name = "glove3";
	this.glove3.setTransform(632.8,385.65,0.6961,0.6961,0,0,0,0.1,0.1);

	this.mouth2 = new lib.InevntorsSmile();
	this.mouth2.name = "mouth2";
	this.mouth2.setTransform(99.5,416.75,0.7285,0.7285,0,0,0,0.1,0.1);

	this.mouth1 = new lib.InventorsMouth();
	this.mouth1.name = "mouth1";
	this.mouth1.setTransform(100.15,407.3,0.7285,0.7285,0,0,0,0.1,0.1);

	this.beard1 = new lib.InventorsBeard();
	this.beard1.name = "beard1";
	this.beard1.setTransform(66.45,402.7,0.7285,0.7285,0,0,0,0.2,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggBSIAAgIIAyhnIAAgoIghAAIAAAlIgPAAIAAgmQAAgFAEgEQADgCAFAAIAnAAQAFAAADACQAEAEAAAFIAAAjQAAAGgEAJIgrBaIAvAAIAAAMg");
	this.shape.setTransform(466.125,474.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggBSIAAgIIAyhnIAAgoIghAAIAAAlIgPAAIAAgmQAAgFAEgEQADgCAFAAIAnAAQAFAAADACQAEAEAAAFIAAAjQAAAGgEAJIgrBaIAvAAIAAAMg");
	this.shape_1.setTransform(457.675,474.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVBSQgFABgDgEQgEgDAAgFIAAiNQAAgFAEgEQADgCAFAAIArAAQAFAAAEACQADAEAAAFIAACNQAAAFgDADQgEAEgFgBgAgSBGIAlAAIAAiLIglAAg");
	this.shape_2.setTransform(448.775,474.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggBSIAAgIIAyhnIAAgoIghAAIAAAlIgPAAIAAgmQAAgFAEgEQADgCAFAAIAnAAQAFAAADACQAEAEAAAFIAAAjQAAAGgEAJIgrBaIAvAAIAAAMg");
	this.shape_3.setTransform(439.875,474.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQBHIAKgoIgZhlIAPAAIAQBQIAShQIAOAAIgZBlIgJAog");
	this.shape_4.setTransform(427.7,479.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAoIAAglQAAgLAMAAIAgAAIAAgfIgdAAIAAASIgOAAIAAgSQAAgMAMAAIAgAAQAMAAAAAMIAABaIgOAAIAAgDIgPADIgRABQgLAAAAgMgAgPAnIAfgBIAAgkIgfAAg");
	this.shape_5.setTransform(419.875,477.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAbBSIAAhnIABgNIgbBlIgBAAIgbhlIABANIAABnIgOAAIAAijIAOAAIAaBqIAAAEIAAAAIAAAAIAAgEIAbhqIAOAAIAACjg");
	this.shape_6.setTransform(410.45,474.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACBDQgLAAAAgMIAAhNIgMAAIAAgMIAMAAIAAggIANAAIAAAgIASAAIAAAMIgSAAIAABNIASAAIAAAMg");
	this.shape_7.setTransform(389.55,475.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaA0IAAhmIAOAAIAAADIANgCIAOgCQAMAAAAAMIAAAXIgOAAIAAgVIgZAAIAABZg");
	this.shape_8.setTransform(383.575,477.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWBTIgGglIggAAIgFAlIgPAAIAAgBIAeikIANAAIAeClgAgOAhIAcAAIgOhYg");
	this.shape_9.setTransform(375.425,474.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcBHIAAiMIANAAIAAACIAQgCIARgBQALAAAAALIAABFQAAAKgFAGQgHAGgJAAIgXAAIAAAngAgPg4IAABMIATAAQAMAAAAgMIAAhBg");
	this.shape_10.setTransform(362.85,479.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAmA0IAAhZIgfAAIAABZIgNAAIAAhZIgfAAIAABZIgNAAIAAhmIANAAIAAADIARgCIAQgCQAGAAADAEIARgCIASgCQALAAAAAMIAABbg");
	this.shape_11.setTransform(352.45,477.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQAzQgMAAgBgMIAAhOQABgLAMAAIAhAAQAMAAABALIAABOQgBAMgMAAgAgOAnIAdAAIAAhNIgdAAg");
	this.shape_12.setTransform(342,477.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUBSQgGABgDgEQgDgDAAgFIAAiNQAAgFADgEQADgCAGAAIApAAQAFAAAEACQADAEAAAFIAAAmIgPAAIAAglIgjAAIAACLIAjAAIAAgpIAPAAIAAAqQAAAFgDADQgEAEgFgBg");
	this.shape_13.setTransform(333.375,474.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcAoIAAglQAAgLAMAAIAgAAIAAgfIgdAAIAAASIgOAAIAAgSQAAgMAMAAIAgAAQAMAAAAAMIAABaIgOAAIAAgDIgPADIgRABQgLAAAAgMgAgPAnIAfgBIAAgkIgfAAg");
	this.shape_14.setTransform(307.775,477.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXBNQgGgGABgJIAAg8QAAgJAFgGQAHgGAJAAIAXAAIAAg/IANAAIAACkIgNAAIAAgDIgYAEQgKAAgFgGgAgPAEIAAA3QAAAMAMAAIATgCIAAhMIgTAAQgMAAAAALg");
	this.shape_15.setTransform(299.65,474.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAQA0IAAhZIgfAAIAABZIgNAAIAAhmIANAAIAAADIAQgCIARgCQALAAAAAMIAABbg");
	this.shape_16.setTransform(291.55,477.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAoIAAglQAAgLAMAAIAgAAIAAgfIgdAAIAAASIgOAAIAAgSQAAgMAMAAIAgAAQAMAAAAAMIAABaIgOAAIAAgDIgPADIgRABQgLAAAAgMgAgPAnIAfgBIAAgkIgfAAg");
	this.shape_17.setTransform(283.375,477.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaA0IAAhmIAOAAIAAADIANgCIAOgCQAMAAAAAMIAAAXIgOAAIAAgVIgZAAIAABZg");
	this.shape_18.setTransform(276.025,477.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGBHIAAhlIANAAIAABlgAgGg1IAAgSIANAAIAAASg");
	this.shape_19.setTransform(270.275,475.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAbBSIAAhnIABgNIgbBlIgCAAIgahlIABANIAABnIgOAAIAAijIAOAAIAaBqIAAAEIAAAAIAAAAIAAgEIAbhqIAOAAIAACjg");
	this.shape_20.setTransform(262.95,474.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUBSQgGABgDgEQgDgDAAgFIAAiNQAAgFADgEQADgCAGAAIApAAQAFAAAEACQADAEAAAFIAAAmIgPAAIAAglIgjAAIAACLIAjAAIAAgpIAPAAIAAAqQAAAFgDADQgEAEgFgBg");
	this.shape_21.setTransform(252.975,474.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag4B5QgBgNAJgYQAIgXAfhKIASguQASgpAAgHQAAgGgHAAIgKADIgDABIgCgGIADgBQAigNAQgIQAAAZghBJQg3CAgBAUQgBAJAIAAQAFAAAQgMIACgCIACAGQgfAcgPAAQgMAAABgRg");
	this.shape_22.setTransform(737.7,35.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhHA7QAAgeATggQASgiAdgVQAhgaAcAAQAQAAAAAMQAAAHgIALQgIALgLAIQgLAIgQAHQgQAGgIAAQgKAAgDgKIANABQATAAARgLQARgMAAgNQAAgKgMAAQgXAAgWAbQgQATgLAZQgLAaAAAUQAAAVASAAQATAAATgVQAUgVAOggQADAFAAAEQAAAUgbAZQgmAkgbAAQgYAAAAgag");
	this.shape_23.setTransform(726.775,40.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag/BQQgHgFAAgJQAAgJAFgJQAMAWATAAQAPAAALgLQAKgKAAgNQAAgHgDgJIgMgZQgDgHAAgKQAAgQARgVQANgOAMgFQAMgGATAAIAOABIgDAEIgJARIgLARIgDAEIgFgEIACgDQAEgJAAgDQAAgIgNAAQgNAAgJAJQgJAJAAAMQAAAHAEAJIAJAUQAFAKAAAMQAAAYgZAWQgXATgSAAQgLAAgGgFg");
	this.shape_24.setTransform(715.475,40.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABPgiIAFgNIACgFQAAgFgEAAQgJAAgZAaQgTATgQAbQgPAdgLAfQgMADgQAIIACgFIANgeIAXg/QAKggAAgHQAAgGgFAAQgGAAgQAQQgQAQgOAVQgXAkgRAsIgEABIgKAEIgNAFIATgsIAPgmQASgqABgLQAAgHgGAAQgEAAgIAEIgDgHQARgGAcgSIAFgCIAAAHQAAASgVAyQA4hHAdAAQAKAAgBAKQAAAOgTAyQAXgeAagWQAbgWAPAAQAIAAABAIQAAAGgQAhQglBOAAAMQAAAGAGAAQADAAAKgGIADAFQgVAQgeAJQADgrAnhNg");
	this.shape_25.setTransform(699.6,40.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhgBCQAAgfAbgiQAcgjAogXQAugaAtAAQAHABAAAEQAAAEgGAMQgOgDgNAAQg9AAgrAwQghAhAAAjQAAAQAMAAQAKAAATgRQATgSAOgWQAUggAIgiQAIAGAAAOQAAAUgTAYQAJgBAPgFIgCADQgTArAAAIQAAAFAFAAQAFAAANgIIAEAFQgVAQgkAJQABgVAWgxQgZAegbAVQgcATgQAAQgOABAAgSg");
	this.shape_26.setTransform(681.825,40.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AACCDQgWgPgbgrIgPgYIgCgDIgEACQg4ASgcAAQgdAAgSgQQgSgRAAgaQAAgjAhgWQAWgOAYAAQAYAAARARQARASAhA5IADADIAHgCQBJgdBGgfIAugUIAGgDIABAFQAAANgPAoQgNAlAAAIQAAAFAIABQADAAAHgDIADAHIgFACIgnANIgFACIABgLIACgHQADgLAMgiQAKgeAAgEQAAgIgGAAQgDAAgJAEIgPAGIgtATQgwAVgpAPIgEACQAcAyAaAXQAaAVAgAAQAdAAAbgPQAagQASgaQAdguAAgtQAAgqgdgXQgegWg2AAQgTAAgbACIhEAHQgRACgTAAQgXAAgQgFIABgFIAFgUIAFgWIABgDIAHABIgCARQAAAGAHACQAIACAUAAIAngCIAygEQAbgCAWgBQA/ABAhAZQAhAZAAAvQAAAigQAkQgRAlgbAaQgtAsg2ABQgjgBgWgQgAjBghQgOAOAAATQAAAYASAQQASAPAcAAQAgAAArgPIgFgJQgdgvgRgPQgRgQgXgBQgUAAgOAPg");
	this.shape_27.setTransform(653.075,34.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhHA7QAAgeATggQASgiAdgVQAhgaAcAAQAQAAAAAMQAAAHgIALQgIALgLAIQgLAIgQAHQgQAGgIAAQgKAAgDgKIANABQATAAARgLQARgMAAgNQAAgKgMAAQgXAAgWAbQgQATgLAZQgLAaAAAUQAAAVASAAQATAAATgVQAUgVAOggQADAFAAAEQAAAUgbAZQgmAkgbAAQgYAAAAgag");
	this.shape_28.setTransform(612.225,40.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAxASQAHgNAAgFQgBgFgFAAQgEAAgNAJQgOALgNAOQgRAVgTAcQgTAcgJAVQgOACgMAGIACgFIAZg+IAYg8IAYg6QAQgsAAgLQAAgHgGAAIgLADIgCABIgCgFQAWgIAZgNIADgDIAAAGQAAAPgKAdQgKAdgdBHIgWA0IgCAGIAEgEQBLheAhAAQAKAAAAAJQAAAHgHAPIgNAcQgfBFgBALQAAAFAGAAQAEAAANgHIACgBIADAFQgTALgfALIgGACQADggAphYg");
	this.shape_29.setTransform(597.5,35.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag3CJQgXgHgNgOQgXgUAAglQAAgfAOgfQANghAYgbQAVgWAhgUQgygOgdgBQgoAAgZAaQgZAYAAAoQAAAOAFATQgTgLAAgXQAAgeAdghQApgvAyAAQAhAAA/AUIAFgCIAbgJQAjgMAnAAQAcAAASAJQARAKAAAOQAAAUgjAJQgVAFgLAIIgFgCIgUgFIgqgKIgxgOIgJgDQglAVgbAtQgaArAAAvQAAAhAYASQAWASArAAQA0AAAkgfQAigfAIg2QAEALAAAJQAAAbgiAkQg2A4g4AAQgXAAgWgIgAAlh2QAdAJAlAIQAlAJANgBQANAAAJgDQAJgFAAgGQAAgLgUgIQgSgJgbAAQgqABgoAQg");
	this.shape_30.setTransform(576.6,34.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhGBSIASgwQAahHAAgMQAAgHgFABQgDgBgLAGIgDgGQAdgOAXgSIAAAHQAAAQgNAmIAFgGQAwg2AUAAQAFAAAFADIgIAVIgOgBQgYAAgcAlQgMASgJATQgJAWgOAqIgDAIQgNADgNAEg");
	this.shape_31.setTransform(222.825,44.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhGBOQgIgJAAgNQAAgdAUgeQAUggAhgWQARgNAWgHQAUgJAQAAQAJAAAAAJQAAADgDAHIgTgBQg2AAgdArQgLAQgIAVQgJAWABAOQgBAKAHAIQAGAGAIAAQAXAAAZgjQAbgjAAgcQAAgHgEgFQgEgEgFAAQgQAAgOAiIgBgIQAAgNAOgOQARgPAPAAQAJAAAHAIQAGAJAAALQAAAlgwAqQgpAmgbgBQgMAAgIgIg");
	this.shape_32.setTransform(209.2,44.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag7BeQAAgJASgpIAWgxIAUgxIACgFIgaAAIACgGIADAAQASAAAGgGQAGgFAKgbIAFAAQAKABAKgDIgJAUIgGAPIgCAFIAeAAIgDAGIgeAAIgBADIgWAyIgTAsQgQAjAAAJQAAAIAKABQALgBASgNIADAGQgLAJgQAIQgQAGgLAAQgQAAAAgMg");
	this.shape_33.setTransform(198.675,42.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag0AAQATgwABgJQgBgIgFAAIgOAEIgDAAIgBgGQAegJAYgKIACgCIAAAEQAAASgbA+IgDAFIADgDQAigoAdgWQAdgXAQABQALAAAAAKQAAALgcA1QggA/AAAIQgBAGAGABQAHAAAKgHIABgBIAEAFQgaASghAHQAEgiAkhGIANgaQAIgNAAgEQgBgFgEgBQgGAAgTAPQgSAPgQATQgkAngYA4QgKACgSAIQATgnAUgyg");
	this.shape_34.setTransform(184.75,44.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhKA9QAAgfATgiQAUgjAegWQAjgbAcAAQARAAAAAMQAAAIgIALQgIALgMAJQgLAIgRAHQgRAHgIAAQgLAAgDgLIAOACQAUAAASgMQARgNAAgOQABgKgNAAQgYAAgXAdQgSAUgLAaQgLAbABAVQAAAVASAAQATAAAUgVQAWgWAOghQADAFAAAEQAAAUgcAbQgoAmgcAAQgZAAAAgcg");
	this.shape_35.setTransform(171,44.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag0ALQAMgpgBgTQAAgUgIAAQgFAAgNAJIgDgHIACgCQAcgSALAAQAOAAAAAbQAAAegUA2IgMAdIgCAGQBdgtAOhKIgSAAQgSAAgGADQgHADgHAMIgBAEIgHAAQANgYAGgUIBFAAQgfBghcAzIgVAMIgPAIIgEADQAQgjANgqg");
	this.shape_36.setTransform(158.7,44.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag0AAQAUgwAAgJQAAgIgHAAIgNAEIgDAAIgBgGQAdgJAYgKIADgCIAAAEQAAASgbA+IgDAFIADgDQAigoAegWQAcgXARABQAKAAAAAKQAAALgbA1QgiA/AAAIQABAGAFABQAHAAALgHIABgBIACAFQgZASghAHQAEgiAkhGIANgaQAIgNgBgEQABgFgFgBQgGAAgTAPQgSAPgQATQgkAngYA4QgKACgSAIQAUgnATgyg");
	this.shape_37.setTransform(141.75,44.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AiqBrQgngkAAg1QAAgqAcgbQAcgbAsAAQAqgBAnAbQAVgLAWAAQAcAAASAVQASATAAAgQgBAbgUAlQgug/g4grQgdAcAAAqQAAASAFAUQgSgNgBgZQABgnAjgjQgmgdgjAAQggAAgWAWQgUAVAAAgQgBAsAjAeQATATAgAKQAgAKAkAAQBjABA/hWQAog1AehkIiUAAIgOAAIgRABQgKABgFADQgEAEgFAKIgBACIgIgBIACgEIAIgUIAHgSIABgEIDZAAIgBAFQgqCFg7BBQgjAmguAWQgtAWguAAQhDAAgngkgAgUgvQApAfArA4QAGgPAAgOQAAgZgSgUQgTgTgZAAQgNAAgPAGg");
	this.shape_38.setTransform(117.85,38.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhKA9QAAgfATgiQAUgjAdgWQAkgbAcAAQARAAAAAMQAAAIgIALQgIALgMAJQgLAIgRAHQgRAHgJAAQgKAAgDgLIAOACQAUAAASgMQARgNAAgOQAAgKgMAAQgYAAgXAdQgSAUgKAaQgMAbAAAVQAAAVASAAQAUAAAVgVQAUgWAPghQADAFgBAEQABAUgcAbQgoAmgdAAQgYAAAAgcg");
	this.shape_39.setTransform(77.35,44.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAzATQAHgOAAgFQAAgFgFgBQgFABgOAJQgOALgNAPQgTAVgTAfQgUAcgKAXQgOACgNAGIACgFIAbhBIAYg+IAZg+QARguAAgKQAAgIgGAAIgMADIgCABIgCgGQAYgJAZgNIAEgCIAAAFQAAAQgLAfQgKAegfBKIgWA3IgDAGIAEgEQBPhjAjAAQAKAAAAALQAAAGgIAQIgNAdQghBIAAAMQAAAFAFAAQAGAAANgHIACgCIADAGQgUALghAMIgFACQACghArhcg");
	this.shape_40.setTransform(61.975,38.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag6CQQgYgJgOgNQgXgWAAglQAAghAOghQAOgiAZgcQAWgYAjgVQg1gPgdAAQgrAAgaAaQgaAaAAApQAAAQAFASQgUgLAAgXQAAggAegiQArgyA1AAQAiAABCAVIAFgCIAcgJQAlgNAoAAQAeAAATAKQASAKAAAQQAAATglAKQgWAGgLAHIgGgBIgUgFIgsgLIgzgPIgJgCQgoAVgbAvQgcAuAAAwQAAAjAYATQAYATAtAAQA2AAAlggQAlghAHg5QAGAMAAAKQAAAcgkAlQg5A7g6AAQgZAAgXgIgAAnh7QAeAJAnAJQAmAIAOAAQAOAAAJgEQAJgFAAgGQAAgMgUgIQgUgJgbAAQgsAAgqASg");
	this.shape_41.setTransform(40.075,37.825);

	this.nose2 = new lib.DamselsNose();
	this.nose2.name = "nose2";
	this.nose2.setTransform(607.9,358.8,0.6961,0.6961);

	this.mouth5 = new lib.DamselsPurpleSmile();
	this.mouth5.name = "mouth5";
	this.mouth5.setTransform(612.5,399.9,0.6961,0.6961);

	this.mouth4 = new lib.DamselsSmile();
	this.mouth4.name = "mouth4";
	this.mouth4.setTransform(612.5,394.1,0.6961,0.6961,0,0,0,0,0.1);

	this.mouth3 = new lib.DamselsMouth();
	this.mouth3.name = "mouth3";
	this.mouth3.setTransform(612.65,386.45,0.6961,0.6961,0,0,0,0.1,0.1);

	this.mask2 = new lib.DamselsBallMask();
	this.mask2.name = "mask2";
	this.mask2.setTransform(568.3,403.8,0.6961,0.6961,0,0,0,-0.1,0.1);

	this.eyes4 = new lib.DamselsEyes2();
	this.eyes4.name = "eyes4";
	this.eyes4.setTransform(567.35,381.3,0.6961,0.6961,0,0,0,0.3,0.1);

	this.hat4 = new lib.Hat1();
	this.hat4.name = "hat4";
	this.hat4.setTransform(694.15,431.65,2.509,2.509,14.998,0,0,12.3,20.8);
	new cjs.ButtonHelper(this.hat4, 0, 1, 1);

	this.eyes3 = new lib.DamselsEyes();
	this.eyes3.name = "eyes3";
	this.eyes3.setTransform(567.45,358.55,0.6961,0.6961,0,0,0,0.3,0.1);

	this.hat3 = new lib.DamselsHair();
	this.hat3.name = "hat3";
	this.hat3.setTransform(622.25,466.7,0.6961,0.6961,0,0,0,0.1,0.1);

	this.dress2 = new lib.DamselsSuit();
	this.dress2.name = "dress2";
	this.dress2.setTransform(461.4,281.4,0.6961,0.6961,0,0,0,0.1,0.2);

	this.dress1 = new lib.DamselsDress();
	this.dress1.name = "dress1";
	this.dress1.setTransform(461.35,194.05,0.6961,0.6961,0,0,0,0.1,0);

	this.suit2 = new lib.InventorsUniform();
	this.suit2.name = "suit2";
	this.suit2.setTransform(265.55,288.45,0.7285,0.7285,0,0,0,0,0.1);

	this.suit1 = new lib.InventorsSuit();
	this.suit1.name = "suit1";
	this.suit1.setTransform(265.55,172.35,0.7285,0.7285);

	this.hat2 = new lib.InventorsBowlerHat();
	this.hat2.name = "hat2";
	this.hat2.setTransform(146.8,460.5,0.7285,0.7285,0,0,0,0.1,1.7);

	this.hat1 = new lib.InventorsTophat();
	this.hat1.name = "hat1";
	this.hat1.setTransform(73.2,459.9,0.7285,0.7285,0,0,0,0.1,0.1);

	this.mask1 = new lib.InventorsGlasses();
	this.mask1.name = "mask1";
	this.mask1.setTransform(147.7,414.55,0.7285,0.7285,0,0,0,0.2,0.1);

	this.eyes2 = new lib.InventorsCyborgEyes();
	this.eyes2.name = "eyes2";
	this.eyes2.setTransform(148.6,395.45,0.7285,0.7285,0,0,0,0.1,0.1);

	this.eyes1 = new lib.InventorsEyes();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(148.6,376.05,0.7285,0.7285,0,0,0,0.1,0.1);

	this.nose1 = new lib.InventorsNose();
	this.nose1.name = "nose1";
	this.nose1.setTransform(106.05,380.75,0.7285,0.7285,0,0,0,0.1,0.1);

	this.glove2 = new lib.MetalHand();
	this.glove2.name = "glove2";
	this.glove2.setTransform(28.35,445.5,0.7285,0.7285,0,0,0,0.2,0.1);

	this.glove1 = new lib.RuinedMetalHand();
	this.glove1.name = "glove1";
	this.glove1.setTransform(25.85,400.75,0.7285,0.7285,0,0,0,0.1,0.2);

	this.mask3 = new lib.Glasses2();
	this.mask3.name = "mask3";
	this.mask3.setTransform(703.15,407.6,0.5093,0.6785,0,0,0,48.7,92);
	new cjs.ButtonHelper(this.mask3, 0, 1, 1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("EAoggHDQgIgCgJgCQgBADAAABEgofgWNMAAAAsb");
	this.shape_42.setTransform(623.4,231.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#330099").s().p("AgCgHQADAAACAPg");
	this.shape_43.setTransform(490.875,137.6242);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC99").s().p("AHhA4IABgCIABAAIAAAGIABAJIgDgNgAj0A/IAAgBIAAABgAnigqIgBAAQAEgEAEgWQgEAXgCADg");
	this.shape_44.setTransform(619.925,339.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("A1uRgIgBgBIAAgDIABgBIACgBIADABIABADIgBACQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBgAVfxdIAAgEIARAEg");
	this.shape_45.setTransform(743.325,298.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.mask3},{t:this.glove1},{t:this.glove2},{t:this.nose1},{t:this.eyes1},{t:this.eyes2},{t:this.mask1},{t:this.hat1},{t:this.hat2},{t:this.suit1},{t:this.suit2},{t:this.dress1},{t:this.dress2},{t:this.hat3},{t:this.eyes3},{t:this.hat4},{t:this.eyes4},{t:this.mask2},{t:this.mouth3},{t:this.mouth4},{t:this.mouth5},{t:this.nose2},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.beard1},{t:this.mouth1},{t:this.mouth2},{t:this.glove3},{t:this.glove4}]}).wait(1));

	// Characters
	this.mc2 = new lib.TheDamsel("synched",0);
	this.mc2.name = "mc2";
	this.mc2.setTransform(647.5,181.1);

	this.mc1 = new lib.TheInventor("synched",0);
	this.mc1.name = "mc1";
	this.mc1.setTransform(104.6,200.95);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAAgC");
	this.shape_46.setTransform(532.15,252.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.mc1},{t:this.mc2}]}).wait(1));

	// Frame
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(2,1,1).p("EhCFgrlMCELAAAMAAABXLMiELAAAg");
	this.shape_47.setTransform(378,252,0.875,0.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00FFFF").s().p("EhCFArmMAAAhXLMCELAAAMAAABXLg");
	this.shape_48.setTransform(378,252,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(384.9,258.9,498.70000000000005,241.40000000000003);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 756,
	height: 504,
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