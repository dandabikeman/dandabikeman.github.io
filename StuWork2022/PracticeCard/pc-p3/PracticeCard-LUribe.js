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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EgiXgKsMBEvgBQMgiYAX5g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF6699").s().p("EgiXgKsMBEvgBPMgiYAX3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-221.4,-77.9,442.9,155.9), null);


(lib.sunn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("Aj2l5QAfgoBPAAQCoAABSAGQAcAAAKAUQAHAKgFAWQgDAEgCAIQgDAOgTAWQgYAegSAEQgMAAgJgKQgMgWgKgKIAfAUIAMAWIBvCxQA5BkA2AeQAuAgBHgMQBTAAArgiQAvgwAKg0QAEgyADgeQAHhFAyhiAAqk/QgEgGgDgCQgIgGgPAGQgUAGgEAAIgegGQgSgEgJAKQgFACgSAcQgUAogrAKABVllIBFgCIHhgaAPhAAQAAGQkjEaQkiEamcAAQmbAAkjkaQkikaAAmQQAAmPEikaQEjkaGbAAQGcAAEiEaQEjEaAAGPgAr1lLIAMASICGDZQA5BkA2AeQAuAgBHgMQBUAAArgiQAvgwAKg0QAEgyACgeQAFgmARgwQABgDABgEIABgCQANgiATgmAj2l5IBLgEArRlhIHbgY");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnODWQg2geg5hkIiGjYIAYgoIHbgYIBLgEIhLAEQAfgoBPAAQCoAABSAGQAcAAAKAUQAGAKgFAWIhEACIBEgCQgCAEgDAIQgCAOgTAWQgYAegSAEQASgEAYgeQATgWACgOQADgIACgEIHigaIAjA2QgxBigIBEIgGBQQgKA0gvAwQgrAihUAAQhHAMgtggQg3geg5hkIhuiwIgNgWIgegUQgEgGgEgCQgHgGgQAGQgUAGgEAAIgdgGQgSgEgJAKQgFACgSAcQgUAogrAKIgQgFIACgHIABgCQANgiATgmQgTAmgNAiIgBACIgCAHQgRAwgFAlIgGBQQgKA0gvAwQgrAihUAAQgUADgRAAQgvAAghgXg");
	this.shape_1.setTransform(-3.775,-18.0614);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("Aq+KpQkikZAAmQQAAmPEikaQEkkaGaAAQGbAAEjEaQEjEaAAGPQAAGQkjEZQkjEbmbAAQmaAAkkkbgAj2l5InbAYIgYApICGDYQA5BkA3AdQAtAhBHgNQBUAAArghQAvgwAKg0IAGhQQAFgmARgwIAQAGQArgLAUgoQATgcAFgCQAIgKASAEIAeAGQAEAAAUgGQAPgGAHAGQAEACAEAGIAfAUIAMAXQgMgBgJgJQgMgWgKgLQAKALAMAWQAJAJAMABIBuCwQA5BkA3AeQAtAfBIgMQBTABArgjQAvgvAKg0IAHhQQAHhFAxhiIgjg2InhAaQAEgWgGgKQgKgUgcAAQhSgGioAAQhPAAgfAogArpk4IgMgTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sunn, new cjs.Rectangle(-100.8,-97.9,201.6,195.8), null);


(lib.hmd = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CC6699").s().p("Ag2BQQgFgGAAgGQAAgEADgEQAEgDAEAAQAKAAABAKQABAGAFAAQAIAAALgSQAMgTgBgKQAAgIgIgUIgTgsQgKgYgDgEQgEgFgFAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIADAAIAQABIAYgBIAEAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAACgFABQgKADAAAHQAAAFAcBBIAQgwQAFgNAAgIQgBgKgNgBQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAGABIAIAAIAWgBIAEAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBABgBAAQgKACgGAMQgFAMgPAsQgOAqgJATQgIATgKAHQgJAHgJAAQgKAAgGgFg");
	this.shape.setTransform(210.5,21.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6699").s().p("AgoAuQgHgGAAgKQAAgJAFgGQAEgIAFgCQAGgEANgDQATgHAEgEQAEgEAAgIQAAgKgFgGQgGgGgIAAQgIAAgEADQgEAEgCAKQgCALgHAAQgDAAgDgCQgDgDAAgFQAAgJAKgIQAKgGASAAQANAAAIAEQAIAEADAFQACAFAAAOIgBAgQAAASACAJQACAHAHAAIADAAIACAAQAAAAABAAQABAAAAABQAAAAABAAQAAAAAAABQAAAEgYAAQgHAAgDgCQgCgEAAgKQgGAIgHAFQgJAEgKAAQgNAAgHgHgAgEAAQgNAGgFAHQgGAFAAAJQAAAIAFAFQAEAGAHgBQAHABAFgFQAHgEADgHQADgGAAgOIgBgVQgEAFgMAGg");
	this.shape_1.setTransform(199.925,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6699").s().p("AgnBHQgQgNABgYQgBgXAOgPQAOgQAVgBQAJAAAHAFQAIAEAFAJIABgcQAAgmgDgEQgBgFgIgBQgEAAAAgCQAAgCAGAAIAbgBIAABHIgCBNQAAAMANADQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgRABIgOAAIAAgLIAAgLQgHALgIAHQgIAFgKAAQgOAAgPgNgAgbgEQgHAMAAAXQAAAZAJAKQAJALAKAAQAKAAAKgLQAJgMAAgdQAAgVgHgJQgHgLgNABQgPgBgIAMg");
	this.shape_2.setTransform(187.7,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC6699").s().p("AgSAwIgIgCQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQgCAEgCAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBIAAgQIgBgNQAAgFADAAIACADQAEANAJAKQAJAKAKAAQAIAAAHgFQAGgFAAgJQAAgOgWgJIgWgKQgFgEgDgFQgDgGAAgGQAAgNAJgIQAKgJAOAAQAJAAAMAGIADACQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBIACgCIACABIABALIABAQQAAACAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBIgGgMQgFgKgGgCQgGgDgFAAQgIAAgGAEQgFAFAAAGQAAAEACAEIAEAFQACACAVAKQANAFAEADQAEADADAGQADAFAAAGQAAAOgLAKQgKAKgPAAQgHAAgMgGg");
	this.shape_3.setTransform(170.125,17.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC6699").s().p("AglA0QgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgCAFAAQAIgBACgEQACgEAAgbQAAgngCgIQgCgIgKgBQgFAAAAgCIABgCIALgBIAXgBIACAaQAGgOAJgGQAJgHAJAAQAHAAAFAFQAFAEAAAHQAAALgKAAQgFAAgDgGQgEgJgGAAQgGAAgHAHQgFAHgCAIQgDAIAAAZQAAAYACADQACAEAHABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAACgGAAg");
	this.shape_4.setTransform(159.875,17.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6699").s().p("AgfAnQgOgOAAgXQAAgXAQgQQAPgQARAAQAQAAANANQAOAMAAARIgBAEQgBABgIAAIg9ABIAAAJQAAARAKAMQAKAMAOAAQAPAAANgLIAEgEQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQgEAIgLAGQgMAGgNAAQgUAAgOgPgAgNgoQgJAJgDAUIAeABIAHgBQAHAAAEgDQAEgCAAgHQAAgKgHgIQgHgHgKAAQgIAAgIAIg");
	this.shape_5.setTransform(149.575,17.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC6699").s().p("AglBTIgOABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABgBQAGAAACgCQACgDACgRQABgSAAgaIAAg+QgBgOgEgIQgEgGgFgBQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIABgBIAIAAIAagBIgBA9IABAUQAPgTATAAQAQAAAJAKQAIAJAAAWIgBAgIABATQAAADADADIAGACQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAQAAACgGAAIgkAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAJgBABgGQACgGAAgeQAAghgHgIQgGgKgLABQgKAAgHAHQgJAHgBAQQgBAQAAAVQAAAQABAEQACAFAHABQABABABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABgBAAg");
	this.shape_6.setTransform(137.525,14.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC6699").s().p("AgLA+QgGgIAAgSIACg8IgLgBIgIgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABgBABAAQAFgCAMgIQALgKACgQQABgEACAAQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAABIAAACIAAALIAAASIAbAAQAHAAAAACQAAAGgCABIggACQgBAaAAAaQAAAUAEAGQAFAGAJAAQAGAAAIgEIAEgDQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAACgJAHQgIAGgNAAQgLAAgHgJg");
	this.shape_7.setTransform(127.125,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC6699").s().p("AgcBSIgbAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQALgBADgEQADgEABgfIABgmIgBggIAAgUQAAgQgCgEQgCgEgIgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIALAAIAVgBIABAKIgBALQAMgMAHgDQAFgEAIAAQATAAANAQQANAPAAAVQAAAXgPANQgPAOgUAAQgNAAgOgIQgCAPAAASIABARIAAAFQADAHAKACQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIAAABIgBABIgXgBgAgMg9QgIALAAAXQAAAWABAFQABAGAHAGQAHAFAKAAQAPAAAJgMQAJgMAAgTQAAgVgJgMQgKgNgNAAQgMAAgHALg");
	this.shape_8.setTransform(115.975,20.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC6699").s().p("AglAmQgPgPAAgXQAAgUAQgQQAPgRAWAAQAVAAAPAPQAQAPAAAVQAAAWgQAQQgRASgUgBQgVAAgQgPgAgXgiQgJAOAAAUQAAAUAKAOQAJAPAOAAQANAAAKgOQAKgNAAgVQAAgTgKgOQgKgQgOABQgOAAgJANg");
	this.shape_9.setTransform(103.925,17.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC6699").s().p("AAwA0QgFAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAQAKgBACgEQADgDAAgoQAAgSgCgJQgBgHgFgGQgFgFgIAAQgHAAgGAEQgHAEgGAIQgEAQAAAnQAAAPACADQACAEAIAAIACAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAABQAAABgFAAIgoAAQgHAAAAgCQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQAHAAADgDQADgEABgOIABgcQAAgagFgJQgGgHgJgBQgJABgIAGQgIAHgDALQgCALAAAbQAAAUACAFQACAEAHAAIAEABIABACQAAABgFAAIgmAAQgHAAAAgCQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAGgBADgCQACgCABgLIABgjIAAgfQAAgEgEgEQgDgDgIAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgCIALgCIASgBIAGAAIABAJIAAAMQAJgLAJgEQAKgFAJgBQAJAAAHAFQAHAEAGAIQAJgIAIgEQAJgFAJAAQAMABAIAFQAIAEACAGQACAGAAAQIgBAtQAAAKACADQACAEAGAAQABAAABAAQABAAAAAAQABABAAAAQAAAAAAABQAAACgGAAg");
	this.shape_10.setTransform(88.025,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC6699").s().p("Ag2BQQgFgGgBgGQAAgEAFgEQADgDAEAAQAKAAABAKQABAGAFAAQAJAAALgSQAKgTABgKQAAgIgJgUIgSgsQgLgYgEgEQgEgFgEAAQgBAAgBgBQAAAAgBAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIADAAIAQABIAYgBIADAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQgBACgFABQgKADAAAHQAAAFAbBBIARgwQAEgNABgIQAAgKgOgBQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAHABIAHAAIAWgBIADAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQgKACgFAMQgGAMgPAsQgPAqgHATQgJATgKAHQgJAHgJAAQgKAAgGgFg");
	this.shape_11.setTransform(65.75,21.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC6699").s().p("AgcBSIgbAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQALgBADgEQADgEABgfIABgmIgBggIAAgUQAAgQgCgEQgCgEgIgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIALAAIAVgBIABAKIgBALQAMgMAHgDQAFgEAIAAQATAAANAQQANAPAAAVQAAAXgPANQgPAOgUAAQgNAAgOgIQgCAPAAASIABARIAAAFQADAHAKACQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIAAABIgBABIgXgBgAgMg9QgIALAAAXQAAAWABAFQABAGAHAGQAHAFAKAAQAPAAAJgMQAJgMAAgTQAAgVgJgMQgKgNgNAAQgMAAgHALg");
	this.shape_12.setTransform(53.575,20.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC6699").s().p("AgcBSIgbAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQALgBADgEQADgEABgfIABgmIgBggIAAgUQAAgQgCgEQgCgEgIgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIALAAIAVgBIABAKIgBALQAMgMAHgDQAFgEAIAAQATAAANAQQANAPAAAVQAAAXgPANQgPAOgUAAQgNAAgOgIQgCAPAAASIABARIAAAFQADAHAKACQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIAAABIgBABIgXgBgAgMg9QgIALAAAXQAAAWABAFQABAGAHAGQAHAFAKAAQAPAAAJgMQAJgMAAgTQAAgVgJgMQgKgNgNAAQgMAAgHALg");
	this.shape_13.setTransform(41.075,20.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC6699").s().p("AgoAuQgHgGAAgKQAAgJAFgGQAEgIAFgCQAGgEANgDQATgHAEgEQAEgEAAgIQAAgKgFgGQgGgGgIAAQgIAAgEADQgEAEgCAKQgCALgHAAQgDAAgDgCQgDgDAAgFQAAgJAKgIQAKgGASAAQANAAAIAEQAIAEADAFQACAFAAAOIgBAgQAAASACAJQACAHAHAAIADAAIACAAQAAAAABAAQABAAAAABQAAAAABAAQAAAAAAABQAAAEgYAAQgHAAgDgCQgCgEAAgKQgGAIgHAFQgJAEgKAAQgNAAgHgHgAgEAAQgNAGgFAHQgGAFAAAJQAAAIAFAFQAEAGAHgBQAHABAFgFQAHgEADgHQADgGAAgOIgBgVQgEAFgMAGg");
	this.shape_14.setTransform(30.125,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC6699").s().p("AAtBPIgZABQgEAAAAgDQAAAAAAAAQAAgBABAAQAAAAABAAQABAAAAgBQAKAAADgCQADgCACgFQACgGAAgNIAAgsIgVgBQguAAgNACIgBAmIABAVQABAEAEAEQAEADAGABQAFABgBACQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAgBAAIgBAAIgcgBQgWAAgGABIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAKAAAEgEQADgFACgbQABgbABglQAAgfgEgJQgCgHgLgCQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBgCAGAAIAxgBIAGABIABABQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAQgMACgDADQgCAEAAAkIAAAaIAdABIAzgBIABgiQABgWgFgHQgFgHgKAAQgGAAAAgDQAAAAAAgBQAAAAABAAQAAgBABAAQABAAABAAIAkABIAdAAQABAAABAAQABAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQgKAAgEADQgGACgCAHQgBAGgBAfIgBArIAAAeQAAAOACAEQADAEAGADQAEACAGAAQABABABAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAg");
	this.shape_15.setTransform(14.7,15.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222,31.6);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBTQgIgFgEgJQgEgJAAgVIAAgrIgSAAIAAgjIASAAIAAgXIAvgYIAAAvIAaAAIAAAjIgaAAIAAArQAAAIABADQADADAFAAQAGAAAJgDIAEAiQgSADgPAAQgRAAgJgEg");
	this.shape.setTransform(74.825,25.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA+IgXgoIgaAoIg0AAIAthAIgqg7IA4AAIATAiIAXgiIA0AAIgqA7IAuBAg");
	this.shape_1.setTransform(61.525,27.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAuAEQgLATgPAIQgPAIgcAAQgYAAgOgHgAgRgbQgFAGAAALIAuAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_2.setTransform(46.15,27.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAgBWIg/hdIAABdIgyAAIAAirIAxAAIBABeIAAheIAyAAIAACrg");
	this.shape_3.setTransform(28.1,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Rounded
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape_4.setTransform(50,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_5.setTransform(50,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_7.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Squared
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_8.setTransform(50,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_9.setTransform(50,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_10.setTransform(50,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_11.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_10},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_8}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.PracticeCardLUribe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,19,29];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.next_btn.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// happy_MD
	this.instance = new lib.hmd("synched",0);
	this.instance.setTransform(495.25,347.25,1,1,0,0,0,111,15.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(1).to({regX:111.2,regY:17.9,x:495.45,y:349.35},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(890.15,684.65);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(30));

	// sun
	this.instance_1 = new lib.sunn();
	this.instance_1.setTransform(1159.45,55.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({x:1083.6833,y:77.25},0).wait(1).to({x:1007.9167,y:99.3},0).wait(1).to({x:932.15,y:121.35},0).wait(1).to({x:856.3833,y:143.4},0).wait(1).to({x:780.6167,y:165.45},0).wait(1).to({x:704.85,y:187.5},0).wait(1).to({x:629.0833,y:209.55},0).wait(1).to({x:553.3167,y:231.6},0).wait(1).to({x:477.55,y:253.65},0).to({_off:true},1).wait(10));

	// spring
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EhQigPEUBIpgRBBXwAP+MAAsAnsMihFAASMAAAgm7IAAgf");
	this.shape.setTransform(515.375,625.2109);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00C420").s().p("EhQigPEUBIpgRBBXwAP+MAAsAnsMihFAASg");
	this.shape_1.setTransform(515.375,625.2109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},10).to({state:[]},10).wait(10));

	// top-envelope
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(499.05,396.2,1.4205,1.4009);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.4203,scaleY:1.0963,rotation:-0.1693,x:498.8054,y:374.0099},0).wait(1).to({scaleX:1.42,scaleY:0.7917,rotation:-0.3386,x:498.5609,y:351.8198},0).wait(1).to({scaleX:1.4197,scaleY:0.487,rotation:-0.5078,x:498.3165,y:329.6297},0).wait(1).to({scaleX:1.4194,scaleY:0.1823,rotation:-0.6771,x:498.0722,y:307.4395},0).wait(1).to({scaleX:1.419,scaleY:0.1223,rotation:0,skewX:179.1536,skewY:-0.8469,x:497.828,y:285.2494},0).wait(1).to({scaleX:1.4188,scaleY:0.427,skewX:178.9843,skewY:-1.0163,x:497.5838,y:263.0593},0).wait(1).to({scaleX:1.4185,scaleY:0.7316,skewX:178.815,skewY:-1.1857,x:497.3398,y:240.8692},0).wait(1).to({scaleX:1.4182,scaleY:1.0363,skewX:178.6457,skewY:-1.355,x:497.0958,y:218.6791},0).wait(1).to({scaleX:1.4178,scaleY:1.3409,skewX:178.4765,skewY:-1.5244,x:496.8519,y:196.489},0).to({_off:true},1).wait(20));

	// envelope 
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AXgv/Mgu/Af/");
	this.shape_2.setTransform(346.2125,604.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("A3QQQIhOgkAYfwPIgwAg");
	this.shape_3.setTransform(344.7,602.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("EAw1gglMAAABBLMhgOAAAIhbAAMAAAg/bMAwbAfcIAZARMAw1AfuEgw0ge1MBhpgBwAAAA4MAw1ghd");
	this.shape_4.setTransform(499.2,497.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZQeIAvggIgvAgMgwbgfcMBhogBwMgw0Ahdg");
	this.shape_5.setTransform(499.2,396.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B76699").s().p("EgvZAfuMAvAgf+MgvAAf+IhOgkIBOAkIhbAAMAAAg/bMAwbAfdIAZAQMAw0Afug");
	this.shape_6.setTransform(499.2,503.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC6699").s().p("A4ZA4MAwzghdMAAABBLg");
	this.shape_7.setTransform(655.425,497.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},10).wait(20));

	// Label
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag7BJQACgSALgPQAKgQAdgVQAQgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgGAAgFAFQgGAFgBAMIgogDQACgRAHgJQAGgKALgFQAMgFATAAQAVAAALAFQANAFAGAKQAGAKAAAMQAAANgHAMQgIALgUAOIgQAMIgJAIIA9AAIAAAhg");
	this.shape_8.setTransform(132.5,727.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag6BJQABgSALgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgEgFgIAAQgGAAgGAFQgEAFgCAMIgogDQACgRAHgJQAGgKALgFQAMgFATAAQAVAAALAFQAMAFAHAKQAGAKABAMQgBANgHAMQgHALgVAOIgQAMIgJAIIA9AAIAAAhg");
	this.shape_9.setTransform(119.15,727.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcBEQgLgGgIgKQgEgJgDgOQgEgNAAgQQABgpAPgQQAOgQAdAAQAOAAAKADQAJAEAGAGQAGAFADAHQADAGADAIQADAQAAASQABAmgNASQgNASghAAQgRAAgLgGgAgOgkQgEAJAAAbQAAAbAFAKQAFAKAIAAQAGAAAFgEQAEgFACgJQACgJAAgTQAAgcgFgKQgEgJgKAAQgJAAgFAKg");
	this.shape_10.setTransform(105.95,727.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag7BJQACgSALgPQAKgQAdgVQAQgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgGAAgFAFQgGAFgBAMIgogDQACgRAHgJQAGgKALgFQAMgFATAAQAVAAALAFQANAFAGAKQAGAKAAAMQAAANgHAMQgIALgUAOIgQAMIgJAIIA9AAIAAAhg");
	this.shape_11.setTransform(92.45,727.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgzBGIgDgbQAIACALAAQAHAAAEgDQAEgDADgIIgrhnIAqAAIAUBFIAUhFIAnAAIgpBuQgHATgHAGQgKAKgVAAQgIAAgSgDg");
	this.shape_12.setTransform(73.275,731.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_13.setTransform(60.425,729.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAtBIIAAhsIgcBsIggAAIgchsIAABsIgkAAIAAiOIA6AAIAWBWIAVhWIA7AAIAACOg");
	this.shape_14.setTransform(44.3,727.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJBFQgIgEgDgIQgDgIgBgRIAAgjIgOAAIAAgdIAOAAIAAgUIAogUIAAAoIAVAAIAAAdIgVAAIAAAjQAAAHABACQABADAGAAQAEAAAIgCIADAbQgPAEgNAAQgOAAgGgEg");
	this.shape_15.setTransform(178.15,697.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgoA1IAAhnIAlAAIAAARQAFgLAFgEQAGgEAJAAQAIAAALAGIgNAcQgHgDgEAAQgHAAgFAGQgFAKAAAXIAAAjg");
	this.shape_16.setTransform(169.125,698.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAgBHIgIgXIgxAAIgHAXIgtAAIA2iOIAvAAIA2COgAgPARIAeAAIgPgyg");
	this.shape_17.setTransform(156.075,696.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgoA1IAAhnIAlAAIAAARQAFgLAFgEQAGgEAJAAQAIAAALAGIgNAcQgHgDgEAAQgHAAgFAGQgFAKAAAXIAAAjg");
	this.shape_18.setTransform(138.025,698.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AggAwQgLgGgIgMQgIgNAAgRQAAgXAPgPQAQgPAcAAQAVAAANAGQAMAHAHANQAHANAAATIAAAFIhOAAQABAJADAFQAGAHAIAAQAGAAAGgDIAGgHIAoAEQgJAQgNAGQgNAHgXAAQgUAAgMgGgAgOgWQgDAEgBAKIAlAAQgBgMgEgFQgGgFgIAAQgIAAgGAIg");
	this.shape_19.setTransform(126.05,698.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKBFQgGgEgEgIQgEgIAAgRIAAgjIgOAAIAAgdIAOAAIAAgUIAogUIAAAoIAVAAIAAAdIgVAAIAAAjQAAAHAAACQACADAGAAQAEAAAIgCIADAbQgPAEgNAAQgNAAgIgEg");
	this.shape_20.setTransform(114.9,697.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgtArQgJgKAAgUIAAhBIAoAAIAAA4QAAAJADAFQAEAEAHAAQAGAAAEgFQAFgGAAgOIAAgxIAoAAIAABmIgmAAIAAgRQgHALgJAEQgIAFgMAAQgQAAgKgKg");
	this.shape_21.setTransform(103.75,699.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_22.setTransform(90.675,700.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAwA1IAAg6QAAgHgDgEQgEgFgGAAQgHAAgEAFQgFAFABALIAAA1IgnAAIAAg4IgBgKQgBgEgDgBQgEgDgDAAQgIAAgEAFQgEAGgBAKIAAA1IgnAAIAAhnIAlAAIAAAQQAIgKAIgEQAIgEAMAAQAMAAAHAFQAHADAEAKQAKgKAHgFQAIgDALAAQARAAAJAKQAKAKAAAVIAABAg");
	this.shape_23.setTransform(73.8,698.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_24.setTransform(57.075,698.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AggBDQgPgHgLgRQgKgRAAgaQgBgjAUgTQASgTAiAAQAbAAAQALQAPALAHAWIgmAJQgCgHgDgDQgDgEgGgEQgGgCgGAAQgOAAgIAMQgGAJAAATQAAAXAHAJQAIAJAMAAQAMAAAHgIQAGgGADgOIAmALQgDARgIALQgJALgMAFQgNAGgTAAQgXAAgOgHg");
	this.shape_25.setTransform(42.75,696.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AggAwQgLgGgIgMQgIgNAAgRQAAgXAQgPQAPgPAbAAQAWAAANAGQAMAHAIANQAGANAAATIAAAFIhPAAQACAJADAFQAGAHAJAAQAFAAAGgDIAHgHIAnAEQgJAQgNAGQgMAHgYAAQgUAAgMgGgAgOgWQgDAEgCAKIAnAAQgCgMgFgFQgFgFgHAAQgJAAgGAIg");
	this.shape_26.setTransform(148.15,668.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFBEQgGgDgIgKIAAAPIglAAIAAiOIAoAAIAAAyQAGgHAIgDQAGgDAJAAQATAAANAOQAMANAAAZQAAARgGANQgFANgKAGQgKAHgMAAQgLAAgIgFgAgLAAQgFAGAAAMQAAANAFAHQAFAFAHAAQAHAAAFgFQAEgGAAgOQAAgNgEgFQgFgFgHAAQgHAAgFAFg");
	this.shape_27.setTransform(135.025,666.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTBIIAAhnIAnAAIAABngAgTgrIAAgbIAnAAIAAAbg");
	this.shape_28.setTransform(124.775,666.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgoA1IAAhmIAlAAIAAARQAFgMAFgEQAGgEAJAAQAIAAALAFIgNAcQgHgCgEAAQgHAAgFAHQgFAIAAAYIAAAjg");
	this.shape_29.setTransform(117.875,668.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSBHQgMgBgJgFQgIgEgHgIQgHgIgCgIQgFgOAAgLIAAhUIAtAAIAABWQAAAMAGAHQAHAGAKAAQAMAAAGgGQAHgHAAgMIAAhWIAsAAIAABUQAAANgEALQgEAMgJAIQgIAIgJAEQgNAFgSAAIgWgCg");
	this.shape_30.setTransform(104.225,666.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag4BIIAAiOIAtAAIAABqIBEAAIAAAkg");
	this.shape_31.setTransform(83.025,666.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUA0IAAgoIApAAIAAAogAgUgLIAAgoIApAAIAAAog");
	this.shape_32.setTransform(65.925,668.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgzBGIgDgbQAIACALAAQAHAAAEgDQAEgDADgIIgrhnIAqAAIAUBFIAUhFIAnAAIgpBuQgHATgHAGQgKAKgVAAQgIAAgSgDg");
	this.shape_33.setTransform(56.575,670.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhBBIIAAiOIBSAAQAVgBALAKQALALAAAPQAAAMgIAKQgGAGgKADQAQAEAHAIQAHAJAAAOQAAALgFAJQgFAJgJAFQgGADgLACIgUACgAgUAoIAVAAQAMAAAEgDQAFgEAAgHQAAgGgFgEQgEgFgMAAIgVAAgAgUgPIATAAQAJAAAEgDQAEgEAAgGQAAgHgEgDQgEgDgJgBIgTAAg");
	this.shape_34.setTransform(42.925,666.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},20).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(510.4,341.3,749.9,438.09999999999997);
// library properties:
lib.properties = {
	id: '692154CDDEAED44684F3AC96573CC5C9',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFFFFF",
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
an.compositions['692154CDDEAED44684F3AC96573CC5C9'] = {
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