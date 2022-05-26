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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AjChEQAXAzAiBmIAOAPQAUASAWANQArAYAugBQAvgDAvgdQAOgJANgKIA+hqQAMgWALgRQAcgsAXgVAkIh/QACAAACAAQAFAAAEADQADACAQAOQAPAOAXAaIAVASQAdATAoAMQB+AkDAg7ADth7Qg9AkhcALQi4AXiLhk");
	this.shape.setTransform(26.55,15.8043);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADZgCIASAAQABAAABABQAZAIAHAaAjOgWQgEgGgIgDQgMgDgMAGQgGAEgHAFQgGAEgEAHQgCADAAADQgCAJAIAK");
	this.shape_1.setTransform(26.881,3.2638);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhbAOIABgMQACgMAGgIQATgaA0AhIAGAPIAJAAIADgRIAHgJQAEgIATgDQAWgOAhA0QgvAdguADIgGAAQgrAAgpgXg");
	this.shape_2.setTransform(27.525,27.5163);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiFBFIgOgPQghhmgYgzIAVASQAdATAoAMQB/AlDAg8IgYAnIg+BqQgNAKgOAJQghg1gWAOQgTADgEAIIgGAJIgDASIgKAAIgGgQQg0ghgTAaQgGAIgCANIgBAMQgWgNgUgSg");
	this.shape_3.setTransform(27.5,18.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhoA8QgpgMgdgTIgUgSQgXgZgPgOIgUgQQgDgDgEAAIgFAAQABgEABgDQAFgGAFgEIANgJQCLBjC4gXQBcgKA9gkIAcAQQgXAVgcArQh2AlheAAQg6AAgwgOg");
	this.shape_4.setTransform(26.55,7.8093);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smile, new cjs.Rectangle(-1,-1,55.8,33.2), null);


(lib.rhand = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AhkC1IgIgKIgPgMIgEgDQgMgMgSgZQgLgRgFgMQgEgQAEgZQAEgWAJgJIAJgJQACgEgCgIQgFgfAAgWQAAgSADgJQADgOASgbIANgUQAHgKAGgEQAGgDAQgEQAPgDATgJIAPgFQAKgDAQgBIAVABQAMACANAFQANADAHAFIAOAMQAeAdAJATQAXAPALAaQAIAUgBAXIAAAJQAAAEAFAJQAJAOADAKQAEAMACARQADAVgCAKQgCASgOAIIgSAHIgSAKQgSAKgNADQgIADgGgBQgJgBgDgGQgOANgJAHQgOAJgNACIgRABQgKABgGAEIgKAHQgHAGgTAEQgNACgKAAQgQAAgIgGgAilA7QgCAWAJASQAEAHAHAJIAMASIAIAJIAHAHIAJAGIAJAGIAGAIQADAFADACQAGADAKgBQAWgDATgHQgoACgoglQgFgHACgDQADgDAHADIAoAYQAZALAVgCIASgDIAIgBIAJAAQANgCAXgTQAHgGABgFIABgKQACgFAIgDQAJgFADgCQAEgFABgHIAAgPQgBgPACgOQAAgEACgBQAEgDADAGIAAAIIADAQQACAKgDAFQASgHAIgSQAFgIAEABQAEACgBAGQgCAMgLAKIgUAQIgVASQgJAIgCAGQACAHAIAAQAFAAAHgEIAzgYQALgGADgDQAIgJgBgUQgCgjgUgkQgIgPgHgGQgIgGgOgCIgXgEQgGgBgBgDQgBgFAFgCQABgBAHAAQAOABAVAGQANADADAIQABgSgIgRQgIgQgPgLQgNABgbgEIgmgGQgIgBACgEQABgDAFAAIA/gBQgIgPgVgTQgJgJgFgEQgFgDgPgEIgWgGQgRgDgRAEQgJACgSAHQgSAIgKACQgUADgFAFQgEADgFANQgEAGgKAOIgBAAQgKANgDAIQgGANABAaIACAiQACANADAFIACAHIgBAHQgDALAGAOIAIAPIADAHQAEgBADAEQADADABAEIABARIACAGQABAEgDACQgFADgEgKQgDgLACgKIgFAAQgDgBgDgEIgEgNIgJgQQgFgKACgHQgNAQgDAVgAhFA8QgCgCABgEIADgHIADgKQACgGACgEQAFgFABgDIABgHIAFgJIAXgYQACgCADgBQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQACADgCADQAAACgDACIgNANIgHAJIgCADIgCADIgBAEQAAADgCACIgFAHIgEAIIgBAHIgEALQgCAEgCABIgBAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBgAhmAUIgBgGQAAgEADgGIACgEIACgHIAFgIIAEgOIABgFIADgIQACgGAFgHIAXgbQADgDACAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQABACgEAFIgVAYIgGAKIgCAEQgEASgEAIIgEAKIgCAEIgDAGIgBAHQAAAEgEABQgEAAgBgCgAh/gEQgCAAgCgDIgBgGQAAgXACgWIABgIIACgFIABgCIAHgLIADgEIAFgGIAFgEIADgEIAEgFIALgLIAFgEQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQAAABABAAQAAABAAAAQAAABgBABIgCADIgMAMIgFAHIgEADIgIAJIgFAHIgGALIgBAKIgBAoIgBAGQgBADgDAAg");
	this.shape.setTransform(17.5683,18.748);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhaCvQgDgCgDgFIgGgIIgJgGIgJgFIgHgHIgIgKIgMgSQgHgIgEgIQgJgSACgVQADgWANgQQgCAHAFAKIAJARIAEAMQADAFADABIAFgBQgCALADALQAEAJAFgDQADgBgBgEIgCgHIgBgQQgBgFgDgDQgDgDgEABIgDgIIgIgPQgGgOADgKIABgHIgCgHQgDgFgCgNIgCgjQgBgaAGgNQADgIAKgMIABgBQAKgNAEgHQAFgMAEgDQAFgFAUgEQAKgCASgHQASgIAJgCQARgDARADIAWAGQAPAEAFADQAFADAJAJQAVAUAIAPIg/AAQgFAAgBADQgCAEAIACIAmAGQAbAEANgCQAPALAIARQAIAQgBASQgDgHgNgDQgVgHgOgBQgHAAgBABQgFACABAFQABADAGABIAXAEQAOACAIAGQAHAGAIAPQAUAlACAiQABAVgIAIQgDAEgLAFIgzAYQgHAEgFAAQgIAAgCgGQACgGAJgIIAVgSIAUgQQALgLACgMQABgGgEgBQgEgBgFAIQgIASgSAHQADgGgCgJIgDgRIAAgIQgDgFgEACQgCACAAAEQgCANABAQIAAAOQgBAIgEAEQgDADgJAEQgIAEgCAFIgBAKQgBAEgHAGQgXATgNACIgJABIgIAAIgSADQgVADgZgMIgogXQgHgEgDADQgCAEAFAGQAoAmAogCQgTAHgWACIgFABQgGAAgFgDgAgZgVIgXAYIgFAIIgBAHQgBAEgFAFQgCADgCAHIgDAKIgDAHQgBADACADQACAEADgCQACAAACgEIAEgMIABgHIAEgHIAFgHQACgCAAgDIABgFIACgCIACgEIAHgIIANgOQADgCAAgCQACgCgCgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgDABgCACgAgwhVQgCAAgDADIgXAbQgFAGgCAHIgDAHIgBAGIgEAOIgFAIIgCAGIgCAEQgDAGAAAFIABAFQABADAEAAQAEgBAAgEIABgIIADgGIACgEIAEgJQAEgIAEgSIACgFIAGgJIAVgZQAEgEgBgCQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgDgBIgBAAgAhTh6IgFADIgLALIgEAFIgDAFIgFAEIgFAFIgDAFIgHAKIgBADIgCAEIgBAIQgCAXAAAWIABAGQACADACAAIAAAAQADAAABgDIABgFIABgpIABgJIAGgMIAFgHIAIgIIAEgEIAFgHIAMgLIACgEQAAAAABgBQAAAAgBgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_1.setTransform(17.5792,18.7683);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rhand, new cjs.Rectangle(0,0,35.2,37.5), null);


(lib.Rear = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FCD3B5").s().p("AgkCFQgIAAgFgGQgEgEgCgLQgKg3ADgkIABgRIgDgVQgCgTABgUQACgiALgRQAJgNAOgGQAOgHAPABQALABAKAFQAXALAMAeQAIAUACAiQADA6gTAkQgIAPgNAOQgbAegYAIQgIADgEAAIgCAAgAAGgRQADACAAAHIgBAOQgDAIgFAEQgEABgHAAIgjACQgEAAgBABQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAABQgCAXAIA1IACAMQABAEADACQAEADAFgCQAVgEAXgZQAUgUAKgTQAQgigDg3QgDgjgKgUQgQgegbgBQgFgBgLACQgKADgGAEQgMAIgFAPQgEAMgBAQQAEgPAEgIQAGgMAKgGQAHgDAMgBIAMAAQANADAJAKQAHAIAGAPQAKAYACAZIAAAYIgBATIgEAOIgHASQgLAUgTARQgMAKgHACQgNADgIgHQgHgGgCgQQgEgVAAgTIABgGQACgEADABQAEABABAHIACAlIACAGQADACAEgDQAMgFAMgLIAIgLIAHgNQAOgmgTgtQgFgMgEgFQgIgJgKABQgGAAgEAFIgDAHQgGASACAXQABAHADABQACABAFgBIAVgHIAFgBIAEABgAgPhRQAJAAAGAFQANAJAHAUQASAsgOAqIgFAMQgHANgPAMQgPANgLAAQAFAFAIgCQAFgBAHgGQAhgaAHgnQADgOgBgWQAAgJgCgJQgBgIgFgQQgJgagMgIQgKgIgQADQgOAEgHAOIgDAIQgFAOACAMQABgMACgFQADgKAGgFQAHgEAIAAIACAAgAgvgcIAAAEIgBAEIgCAQIAAADIgBACIAAAKIAPgBIAEgBIAYAAIADAAQACgBABgGQACgFAAgEIgQAFIgJACQgGABgEgBQgGgDgDgJQgCgGABgJIAAgPIgCAOgAg3g4IAAAKIAAgBIAAgJIABgCIAAgDg");
	this.shape.setTransform(6.6349,13.3018);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rear, new cjs.Rectangle(0,0,13.3,26.6), null);


(lib.rbglasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0000FF").s().p("AhEAzIgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgEABIgVABIAAhNQAAgPACgIQBNgEBfAAQALAAAFAEQAEAEABAIQAEAUgDAdQgBAWgJAIQgIAGgUABIg/ACIgYABIgpgCg");
	this.shape.setTransform(15.5356,9.6167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgcA1QgPAAgQgFQgbgJgHgRIgEgNQgHgaAFgdQAQgFAWgBIAoAAIBhACQAKAAAEAEQACADABAJQACAeAGAiQACANgEAEQgEADgIAAQg4gBgdADIgZABIgFAAg");
	this.shape_1.setTransform(52.9637,9.6175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AB7BOQgcgEgNgJQgHgEgLgMQgNgLgGgFQgXgOgjAFQgRACgKAGQgGADgGAIIgKAMQgUATghAGQgQADgrAAIg3ABQgggCgXgGQgUgFgIgKQgIgKgCgXIgIhVQABgIABgCQADgEAGgBIAXgCIAVAAQArAACDgGQBrgFBBADIAyAEIAzACQAaABA2gBQAuABAhAIIgDAwQgBAdgEATQgEAUgKAKQgLANgdAGQgfAGgkAAQglAAgqgGgACBg9QgXABgSAFQgEABgDADQgCACAAAEQgDAaAEAbQADAOADAHQAPAcAoAHQAOACATgBIAigCIA/AAQAKAAAFgBQAKgDADgGQACgFgBgMIgJhIQgBgLgDgEQgCgDgFgBIAFAAIAGgBQAEgBAAgEQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgEgCIgTgBQgLgBgIgCQgFgCgDACQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIADACIAIACIhQgCIgaAAIgRAAgAjwA/QAaACBSgCQARAAAKgDQAQgFAHgLQADgFABgLQAGgfgGggQgBgLgFgFQgHgJgWAAQhIgBhiAFQgJAAAAAFIAAABIAAABIgBA6QgBAfABAPIAAAAQgEAFAFACIAFABIAVAAIAIgBIABAAIARABgAA/AGIgBADQAAAAAAABQAAABAAAAQABAAAAABQAAAAABAAQAAABABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAgBAAAAQABgBAAAAQAAAAAAgBIABgBIgBgCIgBgCIgDgBIAAAAIgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAgAkxgKIgBACIAAACIABACIACABIACABQABAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAgAkRhEQgDAAgDABQgFADABADQABADAEABIAGgBQAHgBAQAAIAHgCQAEgDgBgDQgBgDgIAAgAhHhMIgSADIgKABQgEABABAEQAAADAEABIADABIAZgEIAlgBIAEAAQADgBAAgDQAAgEgCgBIgFgBgAAOhMQgBADACACQABACAFAAQAOACAXAAIAlAAIAHAAQAFgCgBgEQgCgDgGgBIglgBQgZABgNgBIgDgBQgEAAgCADg");
	this.shape_2.setTransform(34.05,9.44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262626").s().p("ACABZQgqgGgSgPIgNgNQgIgIgFgEQgRgMgfACQgRABgKAGQgGADgGAIIgLAMQgUAVglAGQgSADguAAIg8AAQgigBgYgJQgTgGgHgKQgIgKgCgYIgIhWQgBgUAIgFIAIgCIAHgDIAEgEQADgBAGABQAmAFBNgEICEgGQBJgDA5ADIAzADIAzADIA8AAQAkAAAYACIAfAFQAKACACAEQADAEgBAIIgBAcQgCAmgDAUQgFAcgKAMQgQATgmAFQgeAFgiAAQgiAAgngFgAAtAhQAHAFAMALQALAMAHAEQANAJAcAEQBUANA+gNQAdgGAMgNQAJgKAEgUQAEgTABgdIADgwQgggIgvgBQg2ABgagBIgygCIgzgEQhBgDhrAFQiDAGgqAAIgWAAIgWACQgHABgDAEQgBACAAAIIAHBVQACAXAIAKQAIAKAUAFQAYAGAfACIA4gBQAqAAAQgDQAigGATgTIAKgMQAHgIAFgDQAKgGARgCIAQgBQAZAAARAKgACNBAQgogHgOgcQgEgHgDgOQgEgbADgaQAAgEACgCQADgDAEgBQASgFAYgBIAqAAIBQACIgIgCIgDgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQADgCAFACQAIACALABIATABIAFACQAAAAABAAQABABAAAAQAAABAAAAQABABAAAAQAAAEgEABIgGABIgEAAQAEABACADQAEAEABALIAIBIQABAMgCAFQgDAGgKADQgFABgKAAIg/AAIghACIgIAAQgPAAgLgBgACAgyQgWABgRAFQgEAdAGAaIAEANQAIARAaAJQARAFAPAAQAKABAVgCQAcgDA5ABQAIAAADgDQAFgEgCgNQgHgigBgeQgBgJgDgDQgEgEgKAAIhigCIgXgBIgQABgAjvA/IgRgBIgBAAIgJABIgVAAIgFgBQgEgCADgFIABAAQgCgPABgfIACg6IAAgBIAAgBQAAgFAIAAQBigFBJABQAVAAAIAJQAEAFACALQAFAggFAfQgCALgDAFQgHALgPAFQgKADgSAAIhLABIgggBgAj+A1IABAAQAbACAmgBIBAgCQAUgBAIgGQAJgIABgWQADgdgEgUQgBgIgEgEQgFgEgLAAQhgAAhNAEQgCAIAAAPIAABNIAVgBIAEgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAgABAAMQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAIAAAAIADABIABACIABACIgBABQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgCABIgDgCgAkvgDIgCgBIgBgCIAAgCIABgCIAEgCQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQABABgBAAQAAABAAABQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAgAkag9QgCgDAFgDQADgBADAAIAagCQAHAAABADQABADgEADIgHACQgPAAgIABIgGABQgDgBgBgDgAhig/QgEgBAAgDQgBgEAEgBIAKgBIASgDIAngBIAEABQACABAAAEQAAADgDABIgEAAIglABIgYAEgAA6hDQgXAAgOgCQgEAAgCgCQgCgCACgDQACgDAGABQANABAZgBIAlABQAHABABADQABAEgFACIgHAAIglAAg");
	this.shape_3.setTransform(34.0322,9.4307);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rbglasses, new cjs.Rectangle(0,0,68.1,18.9), null);


(lib.nose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E9B18C").s().p("AgBAPQABgRAGgGQAPgOAXAbQgMAHgSACIgKABIgFAAgAgTAOIgZgMIAJgKQAHgIAKADQAMABAAAJIAAASg");
	this.shape.setTransform(7.45,26.9301);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD7BB").s().p("AgHCJIAAgTQAAgJgMgBQgKgDgHAIIgJALIgGgDQgNgVgBgMQAAgRAGgSIAKgWQAMgbAHgiQAEgYAEgoQABgRADgMQACgJAEgCQAIgFAHAJQAEAGACALIAPBJQAMA6ANAaIANAcQAGARgEAOQgEAOgQAKIgBAAQgXgcgQAOQgEAGgCASIgFAAg");
	this.shape_1.setTransform(7.5782,14.7357);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCD3B5").s().p("AgtCKQgNgIgIgMQgIgNgBgPQgBgQAIgWIAPgmQAKgYAFgkIAHhAQABgOAEgIQAGgNALgBQAMgCAJANQAGAJADARIAQBPQAIAmAHARIAKAVIAJAVQAJAagIASQgMAagpAIQgNACgLAAQgXAAgRgJgAgMiGQgEACgCAJQgDAMgBAQQgEApgEAYQgHAigMAaIgKAWQgGATAAAQQABAMANAVIAGAEIAYAMIAOAAIAFAAQAJABAGgBQARgDANgGIABgBQAQgJAEgPQAEgOgGgQIgNgcQgNgbgMg6IgPhIQgCgLgEgGQgEgGgFAAQgDAAgDACg");
	this.shape_2.setTransform(7.571,14.7649);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose, new cjs.Rectangle(0,0,15.2,29.5), null);


(lib.nosmile = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmRi6QGPFuGUl0IhkFFQlCB3kCh3g");
	this.shape.setTransform(40.175,19.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkWCFIh7k/QGPFuGUl0IhkFFQiiA8iQAAQiRAAiBg8g");
	this.shape_1.setTransform(40.175,19.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nosmile, new cjs.Rectangle(-1,-1,82.4,40.6), null);


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
	this.shape.graphics.f("#F47171").s().p("AglApQgDgBgDgEQgTgZgLgdQA4gkA0AYQAYAKAPARIgSAFQgrAQgqAVQgEACgDAAIgBAAg");
	this.shape.setTransform(10.575,26.0401);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C0003").s().p("ABkAsQgrgIg8ABQgrABgZAFQgOADgPAFQgPgQgYgLQg1gXg4AjQgFgPgDgPQgDgPABgKIACglQC0gDC/gLIAvgCIBigFQgVBRgrBKQgogYg4gKg");
	this.shape_1.setTransform(28.0958,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjWChQgIgBgJgLQgWgZgNgjQgXg/APhKQAEgVAGgOQASgqAogVQAYgNAWABQANABASAHQATAIAZAPIAqAaQAVANAPADQAJACAOgBIAXgDQAbgFAOgFQAPgHAfgYQAdgXATgGQAfgJAcAOQAdAOAMAdQAFARABAUQADAngNAoIgNAiQgZA7gPAcQgGAMgHACQgHADgPgJQg+gjhuAAQgegBgYADQgkAFgqAQQgYAJgzAYQgKAEgFAAIgCAAgACigdIgvADQi/AKi0ADIgCAkQgBALADAPQADAQAFAPQALAdATAZQADAFADAAQAEABAEgDQArgVArgPIASgGQAPgGAOgDQAZgFArgBQA8AAArAHQA4AKAoAYQArhKAVhRgAjIh+QgYAPgPAZQgPAZgBAbQB7gBDLgJIC+gKQgBgngKgSQgIgOgPgIQgOgIgQABQgYABgeAWIgXATQgNALgLAFQgRAJggAGQgvAIgdgLQgLgEgVgOQgqgbgZgMQgWgLgPAAQgRAAgSAMg");
	this.shape_2.setTransform(28.0719,16.1657);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjxABQAPgYAXgPQASgMASAAQAPAAAVALQAaAMAqAbQAUANAMAEQAdALAvgIQAggGAQgJQAMgFANgKIAXgTQAdgWAZgBQAPgBAPAIQAPAIAHAOQALASABAmIi+AKQjLAJh8ABQACgbAPgZg");
	this.shape_3.setTransform(28.3,7.3735);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth3, new cjs.Rectangle(0,0,56.2,32.3), null);


(lib.lhand = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhZCbQgcgPgEgbQApABAlgCQALgBgCgGQgBgEgHAAIgsABQgbAAgPgKQgSgLgHgZQgEgTAFgZQAzAaA5gOQAEgBABgCQACgEgFgCIgHAAQgOABgOAAQgnAAgTgQQgNgLgDgSQgEgSAIgQQAIgOAZgRIAJgEIAJAEQALAGAaACQAKABAGgDQAEgCAHgKQAKgSAHgQQADgFgDgDQgFgEgFAJIgQAgQgDAHgEABQgDACgLgCIgRgBQgKgBgFgGIAjgIIAGgDQAEgDgDgDQgBgCgEAAIgogBQAJgVAZgJIAFgBQATgFAVAEIAIACIARAGQA1AWAwAWQADACADgBQAEgDgGgHQgQgQgYgNIgZgMIgWgIQAegEAeAMQAdAMASAZQATAYAEAfQAEAggKAcQgCgCABgHQABgFgDgCQgFgDgDAGQgBACAAAHQADAtgUAnQgVApgoATQgQAJgaAHQgfAKgWACIgKAAQgYAAgTgKgAB5AWIgDAKIgDAFIgVAVQgCADAAADIAAABIgCADQgCACgBADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAEABQAEAAAHgFQAJgHAFgHIAFgHIAFgOIABgDIAAgGIABgEQAAgFgFAAIgBABIgBAAIgCABgAB6gYQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABIgBAFIgFAJIgFAHIgCACIgCACIgRAMQgGACgDADQgDAEADADQACAEAEgDIACgBIADgCIABAAIASgMIAKgMIAFgFIAFgMIABgFQgBgEgEAAgABdhQQgFAHgKAJIgVAPIgFACQgEACgBAEQAAAFAFAAIAHgCQAMgFACgCIAGgDIALgJQADACACgCIACgBIAAgCIABgCIgBgCIACgCIAEgFIACgDIACgCQABgDgDgDIgGgCIgBAAIgBAAQgCAAgCAEg");
	this.shape.setTransform(16.5859,17.5731);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag9CvQgVgCgSgNQgTgNgJgUQgIgPAGgJQgWgMgIgaQgIgVAEgbQABgJADgDQACgDAEgBQADgBADACQgQgXAAgTQABgWARgTQAMgNAYgOQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAIABgEIgBgFQgCgFADgHQAHgNANgKIABgBQAOgJAQgEQAbgFAkAJQAAgFAIgCQAegGAeAIQASAGAPAJQALAHAJAJQAVAVALAeQAKAegEAeQgCARgGAMIgKATIgDARQgFAggUAdQgTAcgdAQQgXAOgzANQgeAHgTAAIgJgBgAhaCbQAYAMAegCQAVgCAggKQAagHAQgJQAngTAWgpQAUgngDgtQAAgHABgCQADgGAFADQACACgBAFQAAAHABACQALgcgFggQgEgfgSgYQgTgZgdgMQgdgMgeAEIAVAIIAZAMQAZANAQAQQAGAHgFADQgCABgEgCQgvgWg2gWIgQgGIgJgCQgVgEgSAFIgFABQgaAJgJAVIAoABQAFAAABACQACADgDADIgGADIgjAIQAEAGAKABIASABQALACADgCQAEgBADgHIAQggQAFgJAEAEQAEADgEAFQgHAQgJASQgHAKgEACQgGADgLgBQgagCgLgGIgJgEIgJAEQgYARgIAOQgIAQADASQADASANALQATAQAnAAQAOAAAOgBIAHAAQAFACgCAEQgBACgEABQg4AOg0gaQgFAZAFATQAHAZASALQAPAKAbAAIAsgBQAGAAACAEQABAGgLABQgkACgqgBQAFAbAbAPgABZBNQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgDACgCIACgDIAAgBQgBgDACgDIAWgVIADgFIADgKQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIABgBQAFAAAAAFIgBAEIAAAGIAAADIgGAOIgFAHQgFAHgJAHQgGAFgEAAIgEgBgABMAcQgCgDADgEQACgDAGgCIARgMIADgCIABgCIAGgHIAEgJIACgFQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIAAAAQAEAAABAEIgBAFIgFAMIgEAFIgLAMIgRAMIgCAAIgDACIgCABIgDABQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAgAAvgpQABgEAEgCIAFgCIAUgPQAKgJAGgHQACgEADAAIAAAAIAHACQADADgCADIgCACIgBADIgFAFIgCACIABACIAAACIgBACIgBABQgDACgCgCIgMAJIgFADQgDACgMAFIgGACQgFAAAAgFg");
	this.shape_1.setTransform(16.6126,17.5782);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lhand, new cjs.Rectangle(0,0,33.2,35.2), null);


(lib.Lear = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FED2B5").s().p("AAWB8QgKgCgKgIQgigZgMgUQgOgYgCgoQgBgcADgaQADghAMgSQAEgIAHgFQAJgHAQgCQAPgEALAEQAFABAHAGQAKAHAEAHQANARAAAgIAAAaQABAPACALQABAHgDABQgCACgDgDIgDgGIgDgLQgGAOgQACQAJgBAIAFIACgBIAAgBIADACIABABIABADIgBABQAIAJgBATQACAVgCARQgBATgDAJQgDAJgGADQgFAEgIAAIgIgBgAgLhvQgKACgEADQgFAEgDAGQgPAXgCAzQgBAbADAWQAFAcAOASQAHAJAYAUQASALADABQAJACADgCQAEgCACgGQADgFACgRQACgXgCgYQgBgNgHgFQgEgDgHAAIghgCIAHAcQADASAAAFQAAAGgDACQgCACgFgBQgNgEgIgMQgDgGgDgLIgMgyIgDgSQgBgTAFgNQAEgQAMgLQALgJAOgDQAIgCAGABQAPABAKANQAIALADAQQABgNgFgNQgFgNgLgJQgFgEgEgCQgFgCgHAAQgGAAgLADgAgRhRQgGAEgEAGQgGAIgCAMQgFAVAEASIARA/QAEAIAJAEQABgEgCgIIgIgeIgBgJQABgGAFgBQgMgDgDgNQgDgJADgPQADgRAHgKQAJgNANgDQAQgDAJAMQgBgIgGgFQgGgFgIgBIgHgBQgKAAgLAIgAAFhCQgGADgDAFIgEAGIgDAEIgDAJQgDAKABAIQAAAKADAEQADACAFABQALAEAKgCIAIgBIAGgCQAGgDAFgKIAGgPQACgFgBgFIAAgKQAAADgBACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgHgHIgHgIQgFgFgGAAIgBgBQgDAAgEADg");
	this.shape.setTransform(6.15,12.5488);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Lear, new cjs.Rectangle(0,0,12.3,25.1), null);


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
	this.shape.graphics.f("#0FA80B").s().p("AgNAOQAAgOgMgDQABgJASgIIAYAEQAEACABADIABAFQAFALgIAHIgDgBIgJAGIgCABIgCACIgCABQgDgGgNgBg");
	this.shape.setTransform(37.6212,14.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C66B7").s().p("AiVEgIgWgIQgmh4AriHQAOgqAUgmIARgeQBKh/BqgxQAWgKARgGIARgFQAagIANAFQAMADABAPQAMABAEAGQg3AOg6BCQhxCCAlDqQgqgBgjAlIgaAkQgTAggYAAIgDAAg");
	this.shape_1.setTransform(18.9586,42.6972);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BCBF04").s().p("AgCAOIgBAAQgdgHAegQIAGgEQAaAQgUAIIgLADIgBAAg");
	this.shape_2.setTransform(37.2394,9.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87400").s().p("AgPA4QgniYiLhUIAGgEIAJgGIADABIBKAFQBSAJAWAUIAgAMQAmARAfAdQBjBdgKCyQgmAAgrADQhXAEgaAKQAFg7gThMg");
	this.shape_3.setTransform(57.3003,34.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C11200").s().p("Ahtg7QA5hCA3gOQCLBTAnCZQAUBLgGA8QhMAJhWAOQiqAcgxAXQgmjsBziBgAgqjoQgRgUgCgRIAIgWQAPgLAagDQAWABADAFQAYAJABAXIAAAPQAEAhgqgIIgGADQgHADgGAAQgNAAgKgLg");
	this.shape_4.setTransform(37.6313,30.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F1D68").s().p("AlXAXIAXgTQAlgUBJgHIBbgCQBbgBAeAGIAAAAIACAAQhLANhJAOQhmAUg4AAQgZAAgQgEgAB2AGQgugBgfgCIgNgBIgZgDICVgTQCIgPA4ATQgPALgpAIQhXADg/AAIgUAAg");
	this.shape_5.setTransform(36.675,12.513);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B3BFF").s().p("AkzBAQgSgDgEgDQgQgJgBgZQA0ANCSgeQBKgNBKgNIAMgDIBogbQBkgXAWAKIAqADQAuAGASARQAGAGgFAIIgFAGQg3gSiJAPIiUASIg7AUIgQAFQgdAJgcAHQhjAag0AAQgOAAgKgCg");
	this.shape_6.setTransform(37.0214,12.4804);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8BB00").s().p("ADVDBQgfgDggAGQAKizhjhcQgfgdglgRIgggLQgXgUhSgKIhKgFQAIgHgFgMIAGgJIACAAQAeACAvABQBFAHBCAUQA1ARAeAUQBXAhAoCUQAUBLACBEQgJgCgPgBgAjqifIACgCIACgBIgGAFIACgCg");
	this.shape_7.setTransform(61.625,32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00B6E9").s().p("AhgB8Ig9gIQiugihQg7QgZgSgMgSIgIgPQAxgWCrgcQBWgOBMgKQAbgJBWgFQArgCAmgBQAggGAfADQAPABAJACIBMAYQAgAFCIA8QAVAQg1AaIg5AZQgZAMjTAyQh+AZhUAAIgMAAg");
	this.shape_8.setTransform(64.623,63.9701);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat, new cjs.Rectangle(0,0,110.3,76.4), null);


(lib.hair2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF33CC").ss(2,1,1).p("AEMjdQgdBMgSB4QgRBuBACIACrjdQgKBIg+AqQACAVADAVQACAUACAUQAZDOAmAoABKjdQgcBVgOBHQgEAUgDAUQgZCsBKBKAjfjdQhZDsBZDOAh3jdQhoHGBogMAgTjdIAAG6");
	this.shape.setTransform(26.8625,22.1642);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair2, new cjs.Rectangle(-1,-1,55.7,46.4), null);


(lib.hair = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#36A9E0").ss(2,1,1).p("ADgjJQguECAuCRAizjLQhYDZBYC8AhpjNQAkgYgkG0AgLjHQAxBvgxEkABFjIQgrGfArgMACVjFQg7BNA7FC");
	this.shape.setTransform(22.4375,20.71);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair, new cjs.Rectangle(-1,-1,46.9,43.4), null);


(lib.GUY = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AH5B8QAUgtAIgtQAPhZg/AAIhGgKIALpDQg8gFlZADIjPACIh+ABIgWJCQgMAAgQADQggAGgVAPQhDAuBEB3IB6AFIgbAgQgeAogOAnQgsB+CCBIAD9CMIATAkQATAlAKAkQABAFABAFQAGAYACAWQB9gVAIgKQg9gThSgGQgDgBgCAAQisgMh1BBIAAAAIgBAAIABAAIAAAAIAOAHQARAMANAUIADgBIDDgZQAigFAcgEQAFBZhNAlQguAEg2ADQgeABgZgBQgugDgfgMAAHEtIAAAAIAAB6Qg/APgsAEQgChkBBgdQgZAFgcADQhGAJg7gIQAOBBA9A5QhMgBg5gFQgbgDgXgDIgZAZQgUAfAqAGIkUAAIAACaIS9AAIAAiaIj2gBQADgBADgCQAEgDAEgEQAXgbgigpQhNAMgwAEAAGEtQgSAHgZAFAAHCLIAACiAAHCLQCRADBlgCQA4AABOgEIAQAVQASAbALAfQAKAdACAeQADBCgnBBIgsAKAA2FTQAkgCgGBlAGDCIIAngDQAsgEAjgFQCVCFhGA8QhGA8hqAcAFvHqQgUAJAOgGAisCGIgSAcQgUAigIAlQgCAIgBAIQBWAPCOAlAkkCBIB4AFQCFAEAuABAlHGwQgUgEgUgFQj+hCDPjpAjbFCQgogGgjgMQhAglAGgSQAGgWB9AWQgGAmAIAjgAhkG6QgWACgWAA");
	this.shape.setTransform(174.45,445.5583);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5CCCF4").ss(2,1,1).p("Amhv1QAZAjgLAkIgOAvAnhvlQAtAdgmAaAjFlqIBUAAAjtmqQgFg6CtA6AjXAtIg0gRIg7ARAiGggQhngsgkAgQgbgHgjATAjnCHIhdAAABeNoIg0AAQg+gsgOAsACSP2Qg0gLgcgEQhBgLBCAaIhAAAAB0OxIg2AMIg6gMAD0NiQBkAiCKgiAArgmQAfAlCQgo");
	this.shape_1.setTransform(153.275,178.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgBJBQlJgtg2gBIF2gRQF+gLgFAhIAQAuQAKAugeAAQi0gai4gZgADDAjQgQgbgxgcIgMgHIg4gZICVgFIACBAQAAAmgIAAQgEAAgGgKgAAriaIgVnZIC6AAIAFHZg");
	this.shape_2.setTransform(194.075,445.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ApeKIIAAiaIEUAAQgrgGAWgfIAYgZQAXADAbADQA4AFBNABQAWAAAWgCQgDhkBDgdQAXgFATgHQgTAHgXAFQgZAFgdADQhGAJg8gIQgEgUAAgUQAAgQADgRQBWAPCOAlIgBAAIABAAIgBAAIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIANAHQARAMAOAUIADgBIgDABQgOgUgRgMIgNgHQB1hBCsAMIAEABQBTAGA8ATQgHAKh+AVQgBgWgGgYIgDgKIADAKQAGAYABAWIg+AJIjCAZQAjgCgFBlQgugDgfgMIAAh6IAAB6Qg/APgsAEQAsgEA/gPQAfAMAuADQAZABAdgBQA3gDAugEQAwgEBNgMQAiApgYAbIgHAHQgUAJAOgGID2ABIAACagAC5IGIl1ARQA3ABFHAtQC5AZC0AaQAeAAgKguIgQgvQAEgYjSAAQhJAAhjADgAAHGnIAAAAgAkmEwQhAglAGgSQAGgWB9AWQgDARAAAQQAAAUAEAUQgngGgjgMgAjdD5IAAAAgAAHCLIiygFIh5gFIh6gFQhFh3BEguQAVgPAggGQAQgDAMAAIAWpCIB+gBIDOgCQFagDA7AFIgKJDIBGAKQA/AAgQBZQgHAtgUAtQgjAFgsAEIgnADQhOAEg4AAIhYABQhHAAhXgCgAECgxIA4AaIAMAHQAyAcAPAbQARAeABg6IgChAgADviWICqAAIgEnZIi7AAg");
	this.shape_3.setTransform(174.45,445.5583);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2695C2").s().p("AKeNLIlevdIhQt6QhQAKo5AAImGo6IBBgtIC6EgQCdDzAnATIJigRIBHAAIgOAvIAOgvIBQGuQA8FxgKBjIgBAAQgGgCgHAAIAAAAIgBAAQgTAAgWAMIgBAAIAAAAIgBABIgDABIgBABIABgBIADgBIABgBIAAAAIABAAQAWgMATAAIABAAIAAAAQAHAAAGACIABAAQgEAkgFAMIAPAaIAkBqIB3EwQBzEuAoCCQAJAfALA2IAEAqQhBgLBCAaIhAAAIBAAAIAAGzQgDH6gnBLIh+ABgAMbMXIg6gMgAMHLCQg/gsgOAsQAHgWATAAQATAAAgAWgAH1geIhdAAgAGWh4IA7gQgAHLjSIAAAAgAFJxUgAEEzKIg8p2IA9gIIBSJ+QgtgLgmALg");
	this.shape_4.setTransform(79.975,194.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#61CAE8").s().p("AB9V8IAAwlIkysnIgEheQgJiqgFixQgOnHAZhFIA8OOIExNbIAKBKQAeINgUHlQggAGgSAAQglAAAPgag");
	this.shape_5.setTransform(193.6852,229.8973);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#36A9E0").s().p("ACjdvIjPACQAnhKADn7IAAmyQhCgaBBAKQAbAEA1AMQg1gMgbgEIgDgqIA0gLIg0ALQgLg2gKgfIA0AAIg0AAQgniBhzkvIh3kwIgkhqIAzARIgzgRIgQgaQAGgMADgkQAKhig7lyIhRmuQAEgLAAgLQAAgYgRgZQARAZAAAYQAAALgEALIhGAAQARgMAAgMQAAgPgZgQQAZAQAAAPQAAAMgRAMIpkARQgngTidjzIi5kfIBBgtIGGHzIIbgoQAngLAsALIhSp+IIuhSICgKzIIwBQIKKm4ICWBaIqUHzIqyg7IAoOOQAeBjFAMqIgJRqQg8gFlZADgACGoAQAGCxAICqIAFBfIEyMnIAAQkQgVApBegVQAUnlgeoNIgLhKIkytaIg8uPQgYBFANHHgAGdLlQhFASg8AAQg8AAgygSQAyASA8AAQA8AABFgSgAAfiRQArAABIgTIAAAAIACgBIgCABIAAAAQhIATgrAAIgBAAIAAAAQgoAAgPgRIgBAAIABAAQAPARAoAAIAAAAIABAAgAjLicIgDgBIgEgCIAAAAIgBAAIgBgBQg2gWgiAAIgBAAIAAAAQgbAAgPANQAPgNAbAAIAAAAIABAAQAiAAA2AWIABABIABAAIAAAAIAEACIADABIAAAAgAi2nmIhUAAgAiKomQiog5AAA1IAAAEIAAgEQAAgZAnAAQAqAABXAdgAgbLrgAlQhfg");
	this.shape_6.setTransform(160.225,190.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GUY, new cjs.Rectangle(0,0,314,511.4), null);


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
	this.shape.graphics.f("#262626").s().p("AitBfQgggCgSgKQgZgOgOggQgHgRgJgqQgCgMABgGIAFgVQABgGgCgCIgBgBIAAgBIAFgEIAHgDIACgCQAKgEAMgCQAPgDAdgCIAQgBIAVAAQBBAEBBAgQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABABgCAEIgNAWIgGAYQgGAegIAOQgHAMgKAIQggAegpAEIgGAAIgRgBgACCBYIgQgEQgdgJgYgmQgPgagKgZQgFgOgDgGIgEgGIgBgCQgBgFABgCIACgBIAFgGIAGgFQAZgSAdgGIAQgDQA1gIAbACQAMAAAYAEIAVAEIAFACIAEADIAIADIAHAEQADADADAGIADAGQAEAFAAAEQABAEgBAIQgGAtgOAeQgKAWgMALQgUASggAEIgNAAQgTAAgYgEg");
	this.shape.setTransform(31.545,10.6465);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiWBqQgygBgZgPQgbgPgPgmQgJgXgHgrIgCgHIgFgGIgFgFQgEgDgCgDIgDgDQgDgDAAgCIAAgEIgBgFIAAgGIABgEIAEgDIAGgBQADgDAEAAIADAAIAOgFQAFAAACACIABAAQASgGAbgDQAPgDANAAQA3gEBSAVQAAAAABAAQAAAAAAAAQABgBABAAQAAAAABAAQAFAAAKABIAFABIABABIAFAAQAaAEAbgFQAHgBACACIABAAIAEAAIAGgBIAEgCQACgBADABIABABQArgRBAgDQAdgBAOABQAQACAPADIAGABIACAAIAEgBIALAAIAJAAIAEABIALABIAFAEIABACIAFACIAJANIABADQADACgBAFIgDAIIgKAYIgBAKQgBAHgDALQgHAggJASQgNAcgTAOQgWAPgeACQgXACgggFIgSgEQgWgHgTgVQgOgQgOgaIgWgyQgDgHgDgDQgFgFgMgBQgNgBgIAIQgFAEgEANIgFAVIgFAXQgKAdgYATQgWATgfAJQgLADgGAAgAiuhcIgQABQgdACgPADQgMACgKAEIgCACIgHADIgFAEIAAABIABABQACACgBAGIgFAVQgBAGACAMQAJAqAHARQAOAgAZAOQASAKAgACIAXABQApgEAggeQAKgIAHgMQAIgOAGgeIAGgYIANgWQACgEgBgBQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQhBgghBgEIgKgBIgLABgABwhYIgQADQgdAGgZASIgGAFIgFAGIgCABQgBACABAFIABACIAEAGQADAGAFAOQAKAZAPAaQAYAmAdAJIAQAEQAiAGAWgCQAggEAUgSQAMgLAKgWQAOgeAGgtQABgIgBgEQAAgEgEgFIgDgGQgDgGgDgDIgHgEIgIgDIgEgDIgFgCIgVgEQgYgEgMAAIgJAAQgaAAgtAGg");
	this.shape_1.setTransform(30.9125,10.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses, new cjs.Rectangle(0,0,61.8,21.3), null);


(lib.eyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADhAAQAABIgaA0QgaAzgjAAQgkAAgZgzQgag0AAhIQAAhHAag0QAZgzAkAAQAjAAAaAzQAaA0AABHgACVAEQAAAZgIASQgIASgLAAQgLAAgIgSQgIgSAAgZQAAgYAIgSQAIgRALAAQALAAAIARQAIASAAAYgAgyAAQAABIgZA0QgaAzgkAAQgkAAgZgzQgag0AAhIQAAhHAag0QAZgzAkAAQAkAAAaAzQAZA0AABHgAh9AEQAAAZgIASQgIASgLAAQgLAAgJgSQgHgSAAgZQAAgYAHgSQAJgRALAAQALAAAIARQAIASAAAYg");
	this.shape.setTransform(22.45,17.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB2AqQgIgRAAgZQAAgYAIgSQAIgRALAAQAMAAAHARQAIASAAAYQAAAZgIARQgHASgMAAQgLAAgIgSgAicAqQgIgRAAgZQAAgYAIgSQAJgRAKAAQALAAAJARQAHASAAAYQAAAZgHARQgJASgLAAQgKAAgJgSg");
	this.shape_1.setTransform(20.9,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABMB8QgZg0AAhIQAAhHAZg0QAagzAjAAQAlAAAZAzQAZA0ABBHQgBBIgZA0QgZAzglAAQgjAAgagzgABmgmQgHASgBAYQABAZAHASQAJASALAAQALAAAIgSQAIgSAAgZQAAgYgIgSQgIgRgLAAQgLAAgJARgAjGB8Qgag0AAhIQAAhHAag0QAZgzAlAAQAjAAAZAzQAaA0AABHQAABIgaA0QgZAzgjAAQglAAgZgzgAirgmQgIASAAAYQAAAZAIASQAIASALAAQALAAAIgSQAIgSAAgZQAAgYgIgSQgIgRgLAAQgLAAgIARg");
	this.shape_2.setTransform(22.45,17.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes, new cjs.Rectangle(-1,-1,46.9,37), null);


(lib.bargreen = function(mode,startPosition,loop,reversed) {
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
	this.shape_5.graphics.f("#D3DEC2").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_5.setTransform(-0.025,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_6.setTransform(-0.025,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#557942").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_7.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// box
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#DEE8D2","#618646","#DEE8D2"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_8.setTransform(-0.025,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#ECF0E3","#5F7942","#ECF0E3"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_9.setTransform(-0.025,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#5F7942","#ECF0E3","#5F7942"],[0,0.373,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_10.setTransform(-0.025,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AlnBuIAAjbILPAAIAADbg");
	this.shape_11.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

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
	this.shape.setTransform(12.825,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(3.025,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAbQgFgBgEgFQgDgDgCgFQgCgGAAgGQAAgNAHgHQAIgIALAAIAJABIAIADIAAAKIAAAAQgFgDgEgBQgFgCgEAAQgHgBgEAGQgFAFAAAKQAAAJAFAGQAEAFAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJAEIgIAAQgFAAgFgBg");
	this.shape_2.setTransform(-2.425,0.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.325,0.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAkIAAhHIAtAAIAAAIIgkAAIAAAVIAfAAIAAAHIgfAAIAAAjg");
	this.shape_4.setTransform(-13.05,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// rules
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AED8EA").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_5.setTransform(-0.025,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_6.setTransform(-0.025,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D8BB2").s().p("AlnBuIAAgKILPAAIAAAKgAlnhjIAAgKILPAAIAAAKg");
	this.shape_7.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// box
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#C9DBE4","#47A4CB","#DEE8EC"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_8.setTransform(-0.025,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#47A4CB","#FFFFFF"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_9.setTransform(-0.025,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#47A4CB","#C9E0E8","#47A4CB"],[0,0.353,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_10.setTransform(-0.025,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AlnBuIAAjbILPAAIAADbg");
	this.shape_11.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-11,72,22);


(lib.barcappedgrey = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E7F2F6").s().p("AgYAlIAAgKIALgJIAJgJIAMgNQADgFAAgHQAAgFgDgEQgEgDgFAAQgFAAgFACQgFACgFADIgBAAIAAgKIAKgEIALgBQAKAAAGAFQAHAGAAAJIgCAHIgDAHIgEAGIgGAGIgKAKIgKAIIAmAAIAAAJg");
	this.shape.setTransform(12.75,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F2F6").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(3.025,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F2F6").s().p("AgFAbQgFgBgEgFQgDgDgCgFQgCgGAAgGQAAgNAHgHQAIgIALAAIAJABIAIADIAAAKIAAAAQgFgDgEgBQgFgCgEAAQgHgBgEAGQgFAFAAAKQAAAJAFAGQAEAFAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJAEIgIAAQgFAAgFgBg");
	this.shape_2.setTransform(-2.425,0.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F2F6").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.325,0.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F2F6").s().p("AgWAkIAAhHIAtAAIAAAIIgkAAIAAAVIAfAAIAAAHIgfAAIAAAjg");
	this.shape_4.setTransform(-13.05,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// border
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B7B7B7").s().p("Al7BuIAAgKIAAAAIAAjHIAAAAIAAgKIL3AAIAADbIAAAAIAAAAgAlxBkILjAAIAAjHIrjAAg");
	this.shape_5.setTransform(-0.0125,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Al7BuIAAgKIAAAAIAAjHIAAAAIAAgKIL3AAIAADbIAAAAIAAAAgAlxBkILjAAIAAjHIrjAAg");
	this.shape_6.setTransform(-0.0125,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7B7B7B").s().p("Al7BuIAAgKIAAAAIAAjHIAAAAIAAgKIL3AAIAADbIAAAAIAAAAgAlxBkILjAAIAAjHIrjAAg");
	this.shape_7.setTransform(-0.0125,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// box
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E6E6E6","#848484","#E6E6E6"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_8.setTransform(-0.025,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#EEEEEE","#777777","#EEEEEE"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_9.setTransform(-0.025,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#777777","#E6E6E6","#777777"],[0,0.349,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_10.setTransform(-0.025,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Al7BuIAAjbIL3AAIAADbg");
	this.shape_11.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-11,76,22);


(lib.blueR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACDAAQAABlgmBIQgmBIg3AAQgcAAgZgUQgVgSgSgiQgmhIAAhlQAAhlAmhIQAZguAfgQQASgJASAAQA3AAAmBHQAmBIAABlg");
	this.shape.setTransform(13.1,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHCbQgMgBgMgGQgJgGgIgJQgOgPgKgbQgSgwAEg0QAEg1AZgtQAKgVAMgKIAEgEQAOgLAQgBQAFgBAEACIAIAEIARAMQAkAcAMA1QAJAkgDA6QgCAegEATQgHAagPAQQgNANgXAJQgQAEgKAAIgEAAgAgGiQQgKACgJAIIgGAGQgJAKgJAQQgYAsgDA1QgDA0ATAvQAJAVALAMIAJAJQALAIAOABQAKABANgFQAUgFAMgMQAQgPAGgZQAEgRABgcQADhBgJgiQgPg4gqgWQgKgGgHAAIgCAAgAgBAGIgFgCQgDgCAAgDQgBgEACgDIACgDIAAgDQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIAKgCQAEgCADACQADADAAAHIAAAJQgCAFgFABIgEABIgDACIAAAAQgCAAgDgDg");
	this.shape_1.setTransform(12.6261,25.066);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgGCRQgNgBgLgIIgJgJQgLgMgJgVQgUgvADg0QADg1AZgsQAJgQAJgKIAGgGQAIgIALgCQAIAAAKAGQAqAWAPA4QAKAigDBBQgBAcgFARQgGAZgPAPQgNAMgTAFQgKAEgJAAIgFAAgAAJgTIgLACQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBADIgCADQgBADAAAEQABADACACIAFACQAEADACAAIADgCIAEgBQAFgBABgFIABgJQAAgHgEgDIgEgBIgCABg");
	this.shape_2.setTransform(12.591,25.0904);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1DhQgVgTgSghQgmhHAAhmQAAhkAmhJQAZguAfgQQASgJASAAQA3AAAlBHQAnBJAABkQAABmgnBHQglBIg3AAQgcAAgZgUgAgGiVQgPACgPALIgDAEQgNAKgKAUQgZAugDA0QgEA0ARAxQAKAbAOAOQAIAJAJAHQAMAGANABQALABASgGQAYgJAMgMQAPgRAHgZQAEgTACgeQADg6gJgkQgMg1gkgdIgRgLIgIgFQgCgBgDAAIgEAAg");
	this.shape_3.setTransform(13.1,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueR, new cjs.Rectangle(-1,-1,28.2,51), null);


(lib.blueL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACDAAQAAAigEAgQgJA8gZAvQgmBIg3AAQg1AAgnhIQgMgXgJgaQgRg3AAhFQAAhEARg3QAJgbAMgXQAnhHA1AAQA3AAAmBHQAZAwAJA8QAEAgAAAhg");
	this.shape.setTransform(13.1,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDCAQgKgBgKgIQgPgMgKgVQgOgagJg3QgEgYAAgNQgBgVAFgQQACgJAJgRQAKgSAJgHQAUgNAYAJQAUAIARAWQAeAlAFAwQAFAwgVAqQgQAegUALQgLAHgLAAIgEgBgAgZh0QgLACgLASQgSAcgBAZQAAAJACARQAHA7AOAhQALAWALALQAJAIAHABQAJADAMgGQAKgFAIgKQATgVAIgeQAHgcgDgcQgFgogXgjQgMgRgMgHQgKgGgKgCQgGgCgGAAIgGABgAgNAGQgCgCAAgGQgBgFABgDIADgFIAEgEIAEgBQAEAAAFABQAGADADAHQADAEAAADQgBACgEADIgGAEIgLABQgGAAgCgCg");
	this.shape_1.setTransform(12.5064,23.8229);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgFB1QgHgBgJgIQgLgLgKgWQgOghgIg7QgCgRABgJQAAgZASgcQALgSALgCQAIgCALADQAJACALAGQALAHAMARQAYAjAEAoQAEAcgIAcQgIAegSAVQgJAKgJAFQgJAEgIAAIgFgBgAgDgUIgFABIgEAEIgCAFQgCADABAFQAAAGADACQACACAFAAIAMgBIAGgEQAEgDAAgCQABgDgDgEQgEgHgGgDIgGgBIgCAAg");
	this.shape_2.setTransform(12.4757,23.8218);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhcCtQgMgXgJgaQgRg3AAhFQAAhEARg3QAJgbAMgXQAnhHA1AAQA3AAAlBHQAaAwAIA8QAFAgAAAhQAAAigFAgQgIA8gaAvQglBIg3AAQg1AAgnhIgAguh+QgKAGgJASQgKASgCAIQgFAQABAVQAAANAEAZQAJA3AOAaQAKAUAPAMQAKAIAKABQAMADAOgJQAUgLAQgdQAVgrgEgvQgGgxgeglQgRgWgSgIQgLgDgKAAQgNAAgLAIg");
	this.shape_3.setTransform(13.1,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueL, new cjs.Rectangle(-1,-1,28.2,51), null);


// stage content:
(lib.MPHFinalIGuzman = function(mode,startPosition,loop,reversed) {
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
		this.face1.addEventListener("click", Clickface1.bind(this));
		
		function Clickface1() {
			this.eyes.x = 206.65;
			this.eyes.y = 143.45;
			this.CAP.x = 216.60;
			this.CAP.y = 88.15;
			this.teeth.x = 214.45;
			this.teeth.y = 173.95;
			this.nteeth.x = 213.35;
			this.nteeth.y = 195.70;
		}
		this.face2.addEventListener("click", Clickface2.bind(this));
		
		function Clickface2() {
			this.cGLASSES.x = 205.50;
			this.cGLASSES.y = 136.60;
			this.teeth.x = 214.45;
			this.teeth.y = 173.95;
			this.lHAND.x = 64.55;
			this.lHAND.y = 109.55;
			this.rHAND.x = 382.95;
			this.rHAND.y = 115.85;
			this.Bhair.x = 195.40;
			this.Bhair.y = 70.35;
			
		}
		this.btn_reset.addEventListener("click", Clickreset.bind(this));
		
		function Clickreset() {
			this.nteeth.x = 684;
			this.nteeth.y = 318;
			this.teeth.x = 682;
			this.teeth.y = 275;
			this.omouth.x = 682;
			this.omouth.y = 233;
			this.pHAIR.x = 679;
			this.pHAIR.y = 183;
			this.Bhair.x = 680;
			this.Bhair.y = 121;
			this.CAP.x = 765;
			this.CAP.y = 44;
			this.NOSE.x = 837;
			this.NOSE.y = 69;
			this.LEAR.x = 821;
			this.LEAR.y = 101;
			this.rEAR.x = 857;
			this.rEAR.y = 102;
			this.eyes.x = 838;
			this.eyes.y = 138;
			this.LBEYE.x = 823;
			this.LBEYE.y = 192;
			this.BREYE.x = 848;
			this.BREYE.y = 192;
			this.cGLASSES.x = 834;
			this.cGLASSES.y = 240;
			this.dGLASSES.x = 833;
			this.dGLASSES.y = 275;
			this.lHAND.x = 791;
			this.lHAND.y = 325;
			this.rHAND.x = 878;
			this.rHAND.y = 326;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.btn_reset = new lib.bargreen();
	this.btn_reset.name = "btn_reset";
	this.btn_reset.setTransform(581.85,552);
	new cjs.ButtonHelper(this.btn_reset, 0, 1, 2, false, new lib.bargreen(), 3);

	this.face2 = new lib.barcappedgrey();
	this.face2.name = "face2";
	this.face2.setTransform(496.05,550.9);
	new cjs.ButtonHelper(this.face2, 0, 1, 2, false, new lib.barcappedgrey(), 3);

	this.face1 = new lib.barblue();
	this.face1.name = "face1";
	this.face1.setTransform(410.25,550.9);
	new cjs.ButtonHelper(this.face1, 0, 1, 2, false, new lib.barblue(), 3);

	this.NOSE = new lib.nose();
	this.NOSE.name = "NOSE";
	this.NOSE.setTransform(837.2,69.35,1,0.8271,-8.7448,0,0,7.5,14.8);

	this.LEAR = new lib.Lear();
	this.LEAR.name = "LEAR";
	this.LEAR.setTransform(821.8,101.45,1,1,0,0,0,6.1,12.5);

	this.rEAR = new lib.Rear();
	this.rEAR.name = "rEAR";
	this.rEAR.setTransform(851.4,102.25,1,1,0,0,0,6.7,13.3);

	this.LBEYE = new lib.blueL();
	this.LBEYE.name = "LBEYE";
	this.LBEYE.setTransform(823.45,192.35,0.7787,0.8024,0,0,0,13.3,24.8);

	this.BREYE = new lib.blueR();
	this.BREYE.name = "BREYE";
	this.BREYE.setTransform(848.9,192.95,0.6947,0.8367,0,0,0,13.1,24.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AAGBXIAAgHQAJgBAEgHQADgEAAgSIAAhKQAAgVgCgFQgBgFgEgDQgEgEgFAAQgOAAgNAXIAABZQAAATAEAFQADAFAJABIAAAHIhTAAIAAgHQAKAAAFgHQADgDAAgUIAAheQAAgUgEgEQgDgFgLgBIAAgHIBDAAIAAAWQANgOALgHQALgGAOAAQAQAAAKAJQALAKAEANQACAKAAAdIAABBQAAAUAEAEQADAFALABIAAAHg");
	this.shape.setTransform(166.975,611.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AASBRQgJgGgBgOQgeAbgYAAQgOAAgJgJQgKgKABgOQgBgTARgQQAQgPA2gZIAAgRQgBgTgCgFQgCgFgEgEQgGgDgHAAQgLAAgIAFQgFADAAAEQABAEAEAGQAHAHAAAIQAAAJgGAGQgHAGgKAAQgLAAgIgHQgHgHgBgJQABgNAJgMQALgMASgGQASgGATAAQAXAAAOAKQANAKAFAMQACAIAAAbIAABBQAAALABADIACAFIAFABQAEAAAFgHIAGAFQgJANgKAGQgKAGgMAAQgOAAgHgHgAgXATQgHAJAAAKQAAAJAGAGQAEAFAIAAQAJAAALgKIAAg4QgVAMgKAPg");
	this.shape_1.setTransform(148.25,611.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AA2BXIAAgHQAKAAAFgIQADgEAAgSIAAhHQAAgXgBgGQgCgGgEgDQgEgDgFgBQgIAAgHAHQgIAFgIAMIAABZQAAASADAFQAEAHAMAAIAAAHIhWAAIAAgHQAHAAAFgDQAEgDABgEQABgFAAgPIAAhHQAAgYgCgFQgBgGgFgDQgDgDgGgBQgHAAgGAFQgIAFgJAOIAABZQAAASADAGQAEAFALABIAAAHIhVAAIAAgHQAKAAAEgHQADgDABgUIAAheQAAgUgEgEQgEgFgKgBIAAgHIBDAAIAAAXQANgQAMgGQAMgGAOAAQAQAAAKAHQAKAIAGAQQAOgQANgIQANgHAPAAQARAAAKAIQAKAIAEANQAEAMAAAbIAABEQAAAUADAEQADAFAMABIAAAHg");
	this.shape_2.setTransform(123.8,611.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AhLBUIAAgDIBaiZIgZAAQgRgBgIAEQgHADgFAHQgEAHgFASIgGAAIAAgxICKAAIAAAEIhZCYIALAAQAhAAAPgKQAPgKAIgaIAFAAIgFA5g");
	this.shape_3.setTransform(100.325,611.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("Ag0BOQgLgJgEgLQgEgMABgdIAAhCQgBgUgDgEQgDgFgMgBIAAgHIBEAAIAABzQAAASACAFQACAFADADQAEADAEAAQAGAAAFgEQAHgFAKgOIAAhZQAAgUgDgEQgEgFgLgBIAAgHIBEAAIAACEQAAASADAFQADAFAMABIAAAHIhEAAIAAgXQgMAPgKAHQgMAGgPAAQgOAAgLgJg");
	this.shape_4.setTransform(82.3,611.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgzB3QgXgJgSgQQgRgQgKgTQgMgZAAgfQAAg2AmgmQAmgnA5AAQASABAPADQAHABARAHQASAHADgBQAFAAAFgDQAEgEADgKIAGAAIAABWIgGAAQgMgjgXgTQgYgSgcAAQgaAAgSAQQgSAPgIAcQgHAbAAAdQAAAiAIAbQAJAbARAMQASAMAZAAQAIAAAKgCQAIgBAKgEIAAgzQAAgPgCgDQgCgEgGgEQgGgEgJABIgGAAIAAgHIB1AAIAAAHQgNAAgGADQgFADgDAGQgCAEAAANIAAAzQgWAKgZAGQgZAFgbAAQghAAgWgJg");
	this.shape_5.setTransform(58.7,607.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("Ag+B6IAAgGIAIAAQAKAAAHgEQAEgDADgGQACgEAAgSIAAigQAAgUgCgEQgCgFgGgDQgGgEgKAAIgIAAIAAgHIB9AAIAAAHIgIAAQgLAAgGAEQgFADgDAFQgBAFAAATIAACgQAAASACAFQACAFAGADQAFAEALAAIAIAAIAAAGg");
	this.shape_6.setTransform(36.975,607.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AhMB9IAAgEQBBhPANgbQANgbAAgaQAAgTgLgMQgLgMgQAAQgcAAgPAbIgGgCQAJgjAUgQQATgRAZAAQASAAAPAJQAPAIAJAPQAIAQAAANQAAAXgNAaQgSAgg7A7IAzAAQATAAAGgBQAGgBADgEQAEgFAGgMIAGAAIgNBHg");
	this.shape_7.setTransform(169.975,564.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AhMB9IAAgEQBBhPANgbQANgbAAgaQAAgTgLgMQgLgMgQAAQgcAAgPAbIgGgCQAJgjAUgQQATgRAZAAQASAAAPAJQAPAIAJAPQAIAQAAANQAAAXgNAaQgSAgg7A7IAzAAQATAAAGgBQAGgBADgEQAEgFAGgMIAGAAIgNBHg");
	this.shape_8.setTransform(151.875,564.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgeB3QgOgKgLgQQgIgNgGgUQgIgcAAgdQAAgnAMghQAIgcATgPQATgPATAAQAVAAASAPQASAPAIAYQANAiAAAnQgBAlgJAfQgGAUgKANQgLAMgNAIQgNAGgPABQgRgBgNgIgAgLhuQgHAGgCARQgCAPgBBfQAAA0AEASQADAMAFAFQAFAFAGgBQAKAAAEgFQAHgKACgWIAAhNIAAhLQgDgZgGgJQgEgFgKAAQgHAAgEAEg");
	this.shape_9.setTransform(134.15,564.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AhMB9IAAgEQBBhPANgbQANgbAAgaQAAgTgLgMQgLgMgQAAQgcAAgPAbIgGgCQAJgjAUgQQATgRAZAAQASAAAPAJQAPAIAJAPQAIAQAAANQAAAXgNAaQgSAgg7A7IAzAAQATAAAGgBQAGgBADgEQAEgFAGgMIAGAAIgNBHg");
	this.shape_10.setTransform(115.575,564.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AhGB0QgKgJAAgMQABgLAGgGQAGgHAKAAQAIAAAFAGQAGAFAAANQAAAGACADQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAEgBAFgFQAHgIAJgbIAGgNIg2h9QgMgcgGgHQgFgGgJgDIAAgHIBXAAIAAAHQgHAAgDADQgEAEAAAEQAAAHAIAUIAcBDIATg0QALgbAAgKQAAgIgFgDQgEgFgLAAIAAgHIA4AAIAAAHQgJABgFAGQgFAFgMAgIgwB9QgQAugJALQgMAQgSAAQgPgBgJgIg");
	this.shape_11.setTransform(88.8,572.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AARBRQgHgGgCgOQgdAbgZAAQgOAAgKgJQgIgKgBgOQAAgTAQgQQARgPA2gZIAAgRQgBgTgBgFQgCgFgFgEQgGgDgHAAQgMAAgHAFQgEADAAAEQAAAEAEAGQAHAHAAAIQAAAJgGAGQgGAGgLAAQgMAAgGgHQgIgHAAgJQAAgNAKgMQAKgMASgGQASgGATAAQAXAAAOAKQAOAKADAMQADAIAAAbIAABBQAAALABADIADAFIADABQAFAAAFgHIAFAFQgJANgJAGQgKAGgLAAQgOAAgJgHgAgYATQgGAJAAAKQAAAJAFAGQAFAFAIAAQAJAAALgKIAAg4QgVAMgLAPg");
	this.shape_12.setTransform(71.25,568.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AAnB6IAAgGIAHAAQAMAAAFgEQAFgDADgGQABgEAAgTIAAi0IhaDeIgFAAIhdjdIAACsIAAAWQADAKAIAFQAHAGARAAIAAAGIhSAAIAAgGIACAAQAIAAAHgDQAHgCAEgGQADgEACgIIABgTIAAiaQgBgSgCgFQgBgEgHgEQgGgEgJAAIgIAAIAAgGIBiAAIBCCgIBBigIBiAAIAAAGIgIAAQgKAAgGAEQgFADgCAFQgCAFAAASIAACgQAAATACAFQABAFAHAEQAGADAJAAIAIAAIAAAGg");
	this.shape_13.setTransform(44.6,564.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgRBsQgLgKgDgLQgBgGAAgbIAAhaIgWAAIAAgGQAWgQAQgSQAQgSAKgVIAGAAIAAA9IAnAAIAAASIgnAAIAABnQAAAPACAEQABAEADADQAEACACAAQAMABAKgTIAFAFQgOAiggABQgPgBgLgIg");
	this.shape_14.setTransform(175.575,522.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AhGBXIAAgGQAKgCAEgFQAEgEAAgXIAAhcQAAgPgBgDQgCgGgEgCQgCgCgJgBIAAgHIBDAAIAAAnQAQgbANgIQALgJAMAAQAKAAAGAHQAGAFAAAMQAAAMgFAHQgGAGgJABQgJAAgHgHIgIgHIgEAAQgGAAgEADQgHAGgEAMQgFARAAAVIAAAmIAAAKQAAAKACAEQABAFAEACQAFACAJABIAAAGg");
	this.shape_15.setTransform(161.75,525.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AALB9IAAgGIAFAAQAOgBAFgEQAFgDAAgFIgBgGIgGgOIgMgeIhVAAIgJAXQgFAMgBAIQABAKAHAFQAGADASACIAAAGIhQAAIAAgGQAOgDAHgJQAJgIAMgdIBVjCIAEAAIBWDIQANAdAIAHQAGAGAKABIAAAGgAg5AqIBIAAIgjhTg");
	this.shape_16.setTransform(140.2,521.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AhZB/IAAgHQAMAAAEgHQAEgDAAgSIAAixQAAgSgEgFQgEgFgMAAIAAgIIBGAAIAAAXQAIgNAJgGQANgJAOABQATAAAPAMQAPALAHAVQAJAVgBAXQABAagJAUQgHAWgQAKQgPALgTAAQgOAAgLgFQgJgGgJgLIAAA/QAAANACAFQACAFAEACQAFACALAAIAAAHgAgThNIAABZQAPAWARAAQAJAAAGgKQAKgQgBgpQAAgsgKgQQgGgLgMAAQgRAAgLAbg");
	this.shape_17.setTransform(109.6,529.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AA2BXIAAgGQAKgCAFgGQADgGAAgRIAAhIQAAgWgCgGQgCgHgDgCQgEgEgFABQgHAAgJAFQgIAGgHALIAABaQAAASADAFQAEAHALABIAAAGIhUAAIAAgGQAGgBAFgDQADgDACgFQABgEAAgPIAAhIQAAgXgBgFQgDgGgDgDQgEgEgFABQgIAAgGADQgHAGgKANIAABaQAAASAEAGQADAGALABIAAAGIhWAAIAAgGQALgCAFgFQACgEABgUIAAheQgBgTgDgFQgDgFgMgBIAAgHIBEAAIAAAWQANgPAMgGQAMgGANAAQAQAAAKAIQALAHAGAPQAOgQANgGQANgIAOAAQARAAALAIQAKAIAEAMQAEANAAAbIAABEQAAAUADAEQAEAFALACIAAAGg");
	this.shape_18.setTransform(85.05,525.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("Ag4A/QgVgbAAgjQAAgkAVgaQAVgbAjAAQAVgBATAMQASALAKAVQAKAVAAAYQAAAkgSAYQgWAdgmAAQgkAAgUgagAgOhEQgHAGgCAVQgCAVAAAjQAAATADARQACANAGAGQAGAHAIAAQAIAAAFgEQAHgHACgKQAEgSAAgzQAAgegEgMQgDgMgHgFQgEgDgIAAQgIgBgGAIg");
	this.shape_19.setTransform(60.725,525.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("AgzBxQgegQgQgeQgQgdAAghQAAgjASgfQASgfAfgRQAegSAhAAQAaAAAcALQAQAGAFABQAFgBAFgDQAEgFABgJIAHAAIAABVIgHAAQgIghgVgSQgVgSgbAAQgXAAgSANQgSANgJAWQgLAbAAAiQAAAfAIAcQAIAbARANQARAOAbAAQAXAAATgKQATgKAVgZIAAAVQgUAWgWAJQgWAKgdAAQgmAAgegPg");
	this.shape_20.setTransform(38.275,521.8);

	this.omouth = new lib.mouth3();
	this.omouth.name = "omouth";
	this.omouth.setTransform(682.4,233.85,1,1,0,0,0,28.1,16.1);

	this.cGLASSES = new lib.rbglasses();
	this.cGLASSES.name = "cGLASSES";
	this.cGLASSES.setTransform(834.4,240.6,0.9426,1,0,0,0,34,9.4);

	this.dGLASSES = new lib.glasses();
	this.dGLASSES.name = "dGLASSES";
	this.dGLASSES.setTransform(833.25,278.9,1,1,0,0,0,30.9,10.6);

	this.CAP = new lib.hat();
	this.CAP.name = "CAP";
	this.CAP.setTransform(765.55,44.25,1,1,0,0,0,55.1,38.1);

	this.lHAND = new lib.lhand();
	this.lHAND.name = "lHAND";
	this.lHAND.setTransform(791.8,325.05,1,1,74.9998,0,0,16.6,17.6);

	this.rHAND = new lib.rhand();
	this.rHAND.name = "rHAND";
	this.rHAND.setTransform(878.2,326.9,1,1,0,0,0,17.6,18.8);

	this.eyes = new lib.eyes();
	this.eyes.name = "eyes";
	this.eyes.setTransform(838.1,138.15,1,1,0,0,0,22.4,17.4);

	this.nteeth = new lib.nosmile();
	this.nteeth.name = "nteeth";
	this.nteeth.setTransform(684.1,318.1,0.5634,0.5065,0,0,0,40.1,19.7);

	this.teeth = new lib.smile();
	this.teeth.name = "teeth";
	this.teeth.setTransform(682,275.15,1,1,-6.4895,0,0,26.9,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.teeth},{t:this.nteeth},{t:this.eyes},{t:this.rHAND},{t:this.lHAND},{t:this.CAP},{t:this.dGLASSES},{t:this.cGLASSES},{t:this.omouth},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.BREYE},{t:this.LBEYE},{t:this.rEAR},{t:this.LEAR},{t:this.NOSE},{t:this.face1},{t:this.face2},{t:this.btn_reset}]}).wait(1));

	// Character
	this.GUY = new lib.GUY();
	this.GUY.name = "GUY";
	this.GUY.setTransform(224.05,344.35,1,1,0,0,0,157,255.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("AiQDoQgTgRAAgZQAAgVANgNQANgOATAAQASAAALAMQALALAAAYQAAAOAEAEQACAEAFAAQAJAAAKgKQAOgQAUg2IAKgcIhtj5QgYg5gMgNQgMgNgRgFIAAgOICzAAIAAAOQgRABgHAGQgHAGAAAIQAAAOASApIA5CEIAnhmQAWg3AAgVQAAgOgJgIQgJgHgXgBIAAgOIByAAIAAAOQgRACgKALQgLALgYBAIhhD5QgkBegRAWQgZAegmAAQgdAAgTgRg");
	this.shape_21.setTransform(922.9,588.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("Ai2D9IAAgNQAXgBALgMQAHgIAAgjIAAlkQAAgjgIgKQgJgKgYgCIAAgNICOAAIAAAsQASgaASgLQAZgRAgAAQAlAAAeAXQAfAYAQApQAQAqAAAvQAAA0gRApQgQAqgfAXQggAWgmAAQgcAAgXgMQgSgKgUgXIAAB+QAAAaAEAKQAEAJAJAEQAJAFAYAAIAAANgAgoibIAACzQAfAsAiAAQAUAAANgVQASgeAAhUQAAhYgUggQgOgVgXAAQgkAAgXA1g");
	this.shape_22.setTransform(883.025,587.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("Ai2D9IAAgNQAXgBALgMQAHgIAAgjIAAlkQAAgjgIgKQgJgKgYgCIAAgNICOAAIAAAsQASgaASgLQAZgRAgAAQAlAAAeAXQAfAYAQApQAQAqAAAvQAAA0gRApQgQAqgfAXQggAWgmAAQgcAAgXgMQgSgKgUgXIAAB+QAAAaAEAKQAEAJAJAEQAJAFAYAAIAAANgAgoibIAACzQAfAsAiAAQAUAAANgVQASgeAAhUQAAhYgUggQgOgVgXAAQgkAAgXA1g");
	this.shape_23.setTransform(841.925,587.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AAkCjQgQgOgEgbQg9A2gxAAQgdAAgTgSQgTgTAAgdQAAgnAhgeQAhgfBvgzIAAgiQAAgmgEgKQgEgKgLgHQgLgIgPAAQgXAAgPALQgKAGAAAJQAAAHAKAMQAOAPAAAPQAAARgNANQgNAMgWAAQgWAAgQgNQgPgOAAgTQAAgaAUgXQAVgYAlgNQAlgMAnAAQAwAAAcAUQAcAVAIAXQAFAQAAA2IAACCQAAAXACAHQACAFADADQAEADAEAAQAKAAAKgNIAKAJQgSAagTANQgTALgZAAQgdAAgQgNgAgwAlQgOAUAAAUQAAAQAMANQAJAKAQAAQASAAAXgUIAAhxQgrAZgVAdg");
	this.shape_24.setTransform(804.775,579.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AhaD1IAAgNQAWgBALgMQAHgJAAgjIAAldQAAgkgIgJQgIgKgYgBIAAgOICMAAIAAGjQAAAjAJALQAIAJAYACIAAANg");
	this.shape_25.setTransform(775.425,572.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AjOD1IAAgOIARAAQAVABANgIQAJgFAFgMQAEgJAAglIAAlBQAAglgEgKQgEgKgLgGQgNgIgUABIgRAAIAAgOIGdAAIAACMIgPAAQgFgxgVgYQgVgXgngLQgWgFg6AAIgtAAIAADJIAOAAQAgABAUgKQAVgKAOgXQAPgYAEgnIANAAIAAD2IgNAAQgHhHgegWQgfgWgmAAIgOAAIAACWQAAAmAFAJQADAKAMAHQAMAHAUgBIARAAIAAAOg");
	this.shape_26.setTransform(741.875,572.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.GUY}]}).wait(1));

	// behind 
	this.pHAIR = new lib.hair2();
	this.pHAIR.name = "pHAIR";
	this.pHAIR.setTransform(679.95,183.15,1,1,0,0,0,26.9,22.2);

	this.Bhair = new lib.hair();
	this.Bhair.name = "Bhair";
	this.Bhair.setTransform(680,121.5,1,1,-10.0035,0,0,25.4,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Bhair},{t:this.pHAIR}]}).wait(1));

	// Frame
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_27.setTransform(480,320);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_28.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,326.2,462,304.8);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#00FFCC",
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