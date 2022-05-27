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


(lib.shoes1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ADIBXQgcDQCRgqQCSgqBWAyQBXAxBXhAQBXhAAKhPQAKhQg5gRQg4gQinARQgeicAaggQAZggAhgiQAigihyAAQhxgBgvAtQgvAthygEQhygEAjAiQAkAhAoDcgAs0A9QAHgrAogMQA4gQCnARQAeicgaggQgZggghgiQgigiByAAQBxgBAvAtQAvAtBygEQBygEgjAiQgkAhgoDcQAcDQiRgqQiSgqhWAyQhXAxhXhAQhXhAgKhP");
	this.shape.setTransform(0.0996,0.0283);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("AImEFQhXgyiRAqQiRAqAcjQQgpjcgjghQgkgiByAEQBzAEAugtQAvgtByABQBxAAghAiQghAigaAgQgZAgAdCcQCngRA5AQQA5ARgKBQQgKBPhYBAQgxAkgxAAQgmAAglgVgArSD2QhYhAgKhPQgDgYADgSQAHgrAogMQA5gQCnARQAdicgZggQgaggghgiQghgiBxAAQBygBAvAtQAuAtBzgEQBygEgkAiQgjAhgpDcQAcDQiRgqQiRgqhXAyQglAVgmAAQgxAAgxgkg");
	this.shape_1.setTransform(0.0246,0.0283);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoes1, new cjs.Rectangle(-83.5,-29.7,167.3,59.5), null);


(lib.scarf1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AIRCxQjuCyjBiyQkrh/lHk7g");
	this.shape.setTransform(79.425,8.0375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAAAAIAAAB");
	this.shape_1.setTransform(-115.7,9.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AoqigQgDgHgBgGQAAgDAAgCQAAgNAGgJQACgDADgCQALgLAQAAQAQAAALALQACACACADQAHAJAAANQAAACAAADQgCANgJAJQgGAGgIADQAEACADADIABABQAHAGAAALQAAACAAADQgCAHgGAGQgHAHgLAAQgKAAgIgHQgFgGgBgHQgBgDAAgCQAAgJAGgHQAAgBABgBQADgCADgCQgKgDgHgHQADAGABAHQAAACAAADQAAACAAADQgCANgJAJQgLALgQAAQgQAAgLgLQgJgJgCgNQAAgDAAgCQAAgQALgLQALgMAQAAQANAAAKAIQACACACACQAEAEADAFAmgiKQAAADAAACQgCANgJAJQgLAMgQAAQgQAAgLgMQgKgJgBgNQAAgCAAgDQAAgCAAgDQAIgJACgMQABAAAAgBQALgLAQAAQAQAAALALQALALAAAQgAgLjeQADAHAAAKQAAAQgLALQgKALgRAAQgQAAgLgLQgLgLAAgQQAAgQALgLQALgLAQAAQARAAAKALQgEgIAAgKQAAgMAHgKQACgCACgDQALgLAPAAQAQAAALALQADADABACQAIAKAAAMQAAAQgMALQgGAHgIADQgGABgHAAQgFAAgEgBAAbjVQAEABADAEQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgGgIQgIgHAAgLQAAgKAIgHQABgDAEgCQgJgCgHgHAgTjoQAFAEADAGAB2jRQAAAQgKALQgMALgQAAQgQAAgLgLQgLgLAAgQQAAgQALgLQALgLAQAAQAQAAAMALQAKALAAAQgAHpi6QAEAHAAAKQAAAQgKALQgMALgQAAQgQAAgLgLQgLgLAAgQQAAgQALgLQALgLAQAAQAQAAAMALQgFgIAAgKQAAgMAHgKQACgDACgCQALgLAQAAQAQAAAMALQACACACADQAHAKAAAMQAAAQgLALQgHAGgIADQgGACgHAAQgFAAgEgBAHjjEQAEAEACAGAIRiyQAFACADADQAHAIAAAKQAAALgHAHQgIAHgKAAQgLAAgHgHQgIgHAAgLQAAgKAIgIQACgCAEgCQgKgDgIgGAJsitQAAAQgLALQgLALgQAAQgQAAgLgLQgLgLAAgQQAAgQALgLQALgMAQAAQAQAAALAMQALALAAAQgAIOhjQAAgOALgLQALgLAQAAQAQAAALALQALALAAAQQAAABAAABQgBAPgKAKQgLAMgQAAQgQAAgLgMQgLgKAAgPQgBAPgKAKQgMAMgQAAQgQAAgLgMQgLgLAAgQQAAgQALgLQALgLAQAAQAQAAAMALQAKALABAOIAAACQAAABAAABAAXiHQABgOAKgLQALgLAQAAQARAAALALQALALAAAQQAAACAAABQgBAOgKAKQgLALgRAAQgQAAgLgLQgKgKgBgOQAAAOgKAKQgMALgPAAQgPAAgMgLQgLgLAAgQQAAgQALgLQAMgLAPAAQAPAAAMALQAKALAAAOIAAACQAAACAAABAgTCXQgEgIAAgKQAAgMAHgKQACgCACgDQALgLAPAAQAQAAALALQADADABACQAIAKAAAMQAAAQgMALQgGAHgIADQgGACgHAAQgFAAgEgCQgJgCgHgHQADAIAAAJQAAAQgLALQgKAMgRAAQgQAAgLgMQgLgLAAgQQAAgQALgLQALgLAQAAQARAAAKALQAFAFADAFAAbCqQAEACADADQAIAHAAALQAAAKgIAHQgHAIgLAAQgKAAgGgIQgIgHAAgKQAAgLAIgHQABgDAEgCAAXD4QABgOAKgLQALgLAQAAQARAAALALQALALAAAQQAAACAAABQgBALgGAJQgCACgCADQgLALgRAAQgQAAgLgLQgCgDgCgCQgGgJgBgLQAAALgHAJQgBACgCADQgMALgPAAQgPAAgMgLQgCgDgCgCQgHgKAAgNQAAgQALgLQAMgLAPAAQAPAAAMALQAKALAAAOIAAACQAAACAAABAB2CuQAAAQgKALQgMALgQAAQgQAAgLgLQgLgLAAgQQAAgQALgLQALgLAQAAQAQAAAMALQAKALAAAQgAlfBkQgEgIAAgKQAAgMAHgKQACgCACgDQALgLAQAAQAQAAALALQADADABACQAHAKAAAMQAAAQgLALQgGAHgIADQAEACADADQAIAHAAAKQAAALgIAHQgHAIgKAAQgLAAgHgIQgIgHAAgLQAAgKAIgHQACgDADgCAn/g/QABgOAKgLQAJgJAMgCQADAAADAAQAOAAALAJQABAAABACQALALAAAQQAAABAAACQAAAAAAACQgBANgKAJQgLALgQAAQgQAAgLgLQgKgKAAgMQAAgBgBgBQAAABAAABQgBAMgKAKQgLALgQAAQgHAAgFgCAn7iOQgGACgHAAQgFAAgFgBApChWQABgBABgBQAKgKAOgBQACAAABAAQAEAAAFABQAKACAIAIQACABACACQAHAKAAAMAn/g9QAAABAAACAn/g/IAAAAAk0DKQAAANgLALQgLAMgQAAQgQAAgLgMQgLgLAAgQQAAgQALgLQALgLAQAAQAQAAALALQALALAAAOQABgOAKgLQALgLARAAQAQAAALALQALALAAAQQAAABAAACQgBANgKALQgLAMgQAAQgRAAgLgMQgKgLgBgNgAlXBuQADAHAAAKQAAAQgLALQgLALgQAAQgQAAgLgLQgLgLAAgQQAAgQALgLQALgLAQAAQAQAAALALQAFAFADAFgAjVB7QAAAQgLALQgLALgQAAQgQAAgLgLQgLgLAAgQQAAgRALgKQALgLAQAAQAQAAALALQALAKAAARgAkwB3QgGACgHAAQgFAAgFgCQgKgDgGgGAk0DFIAAACQAAABAAAC");
	this.shape_2.setTransform(-64.55,16.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AWBn4QA0BsgyBMQgTAfgiAZQhGAziEAhQiTC8rpjBQCtgnCegoQHeh4FQh4gAEOiVQgQEnijCXIAABZQgcAcgjAVQhjA8idAFIlEAAQhjAXlGhKQgUgFgUgGIi+ktAzCB4IgPgXIgDgGAzjBDIgNgUIirkN");
	this.shape_3.setTransform(0.057,-0.0113);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("AtSgoQBtAvDlAUQGkAlMzg6IB8AE");
	this.shape_4.setTransform(-58.25,-18.1757);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAADQQgIgHAAgKQAAgLAIgHIAEgFQAFACAFAAQAHAAAGgCQAEACADADQAIAHAAALQAAAKgIAHQgHAIgLAAQgKAAgGgIgAlMCdQgIgHAAgLQAAgKAIgHIAFgFIAKACQAHAAAGgCIAHAFQAIAHAAAKQAAALgIAHQgHAIgKAAQgLAAgHgIgAoYhnQgFgFgBgIIgBgFQAAgJAGgGIABgDIAGgEIAKABQAHAAAGgBQAEABADADIABABQAHAHAAAKIAAAFQgCAIgGAFQgHAIgLAAQgKAAgIgIgAH1iLQgIgHAAgKQAAgLAIgHIAFgFQAFACAFAAQAHAAAGgCQAEACADADQAIAHAAALQAAAKgIAHQgHAIgLAAQgKAAgHgIgAAAiuQgIgIAAgKQAAgLAIgHIAEgEIAKABQAHAAAGgCQAEACADADQAIAHAAALQAAAKgIAIQgHAHgLAAQgKAAgGgHg");
	this.shape_5.setTransform(-64.525,16.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCCFF").s().p("AAiEWIgDgGQgHgIAAgMIAAgCIAAgCQAAgOAKgLQAMgLAPAAQAQAAAMALQALALAAAQIAAACQAAAMgHAIIgEAGQgMALgQgBQgPABgMgLgAgpEWIgEgGQgHgJAAgNQAAgQALgLQALgLARAAQAPAAALALQAKALABAOIAAACIAAACQgBAMgHAIIgDAGQgLALgPgBQgRABgLgLgAAYD8IAAAAgAkpDiQgKgLgBgOIAAgCIAAgCQABgOAKgLQAMgLAQAAQAQAAALALQALALAAAQIAAACQAAAOgLALQgLAMgQgBQgQABgMgMgAl0DiQgMgLAAgQQAAgQAMgLQALgLAQAAQAPAAAMALQAKALAAAOIAAACIAAACQAAAOgKALQgMAMgPgBQgQABgLgMgAhJDNQgLgLAAgQQAAgQALgLQALgLAQAAQAQAAALALQgEgIAAgKQAAgMAHgKIAEgFQAMgLAPAAQAPAAAMALIADAFQAIAKgBAMQABAQgLAMQgHAFgIAEQgGABgGAAQgFABgFgCQgJgCgHgHIgIgKIAIAKQAEAIgBAJQAAAQgLALQgLALgQAAQgQAAgLgLgAA1DJQgLgLAAgQQAAgQALgMQALgKAQgBQAQABALAKQALAMAAAQQAAAQgLALQgLALgQAAQgQAAgLgLgAk0DFIAAAAgAmVCaQgLgLAAgQQAAgQALgLQAMgLAPAAQAQAAALALQAFAEADAGQgDgGgFgEQgEgIAAgKQAAgMAHgKIAEgFQAMgLAPAAQAQAAALALIAEAFQAIAKgBAMQABAQgMALQgFAGgJADQgGACgHAAIgJgBQgLgDgGgGQADAHAAAKQAAAQgLALQgLALgQAAQgPAAgMgLgAkWCWQgLgMAAgPQAAgRALgKQALgMAQAAQAQAAALAMQAMAKAAARQAAAPgMAMQgLALgQAAQgQAAgLgLgAnzgiQgLgKAAgMIgBgDIAAgCIAAgCIAAACIAAACIAAADQgBAMgKAKQgLALgQAAQgGAAgGgCQgIgCgHgHQgLgLAAgQIAAgDIAAgBQABgMAIgJIACgCQAKgKAPgBIACAAIAJABQALACAHAIIAEAEQAHAJAAAMIAAAAIAAAAQABgOALgLQAIgJAMgCIAHAAQAOAAAKAJIADACQAKALABAQIAAACIAAADQgCANgJAJQgLALgQAAQgRAAgKgLgAo8gqIgPgWgAIZhGQgLgKAAgPIAAgCIAAgCQAAgOALgLQALgLAQAAQAPAAAMALQALALAAAQIAAACQgBAPgKAKQgMALgPAAQgQAAgLgLgAHMhGQgLgLAAgQQAAgQALgLQALgLAQAAQAQAAALALQALALABAOIAAACIAAACQgBAPgLAKQgLALgQAAQgQAAgLgLgAIOhfIAAAAgAAihqQgKgKAAgOIAAgDIAAgBQAAgPAKgLQAMgLAPAAQAQAAAMALQALAMAAAPIAAADQgBAOgKAKQgMALgQAAQgPAAgMgLgAgphqQgLgLAAgQQAAgPALgMQALgLARAAQAPAAALALQAKALABAPIAAABIAAADQgBAOgKAKQgLALgPAAQgRAAgLgLgApghqQgJgJgCgNIAAgFQAAgQALgLQALgLAQAAQANgBAKAJIAEADQgDgGgBgHIAAgFQAAgMAHgKIAEgFQALgLAQAAQAQAAALALIAFAFQAGAKABAMIAAAFQgCANgKAJQgGAGgIADQgGACgHAAIgKgBQgJgCgIgIQgDgFgEgEQAEAEADAFIAFANIAAAFIAAAFQgCANgKAJQgLALgQAAQgQAAgLgLgAnhhuQgJgKgBgNIgBgEIABgGQAIgJACgLIAAgBQALgMAQAAQAQAAALAMQALAKAAARIAAAEQgCANgJAKQgLALgQAAQgQAAgLgLgAAYiCIAAAAgAGsiOQgLgLAAgQQAAgQALgLQALgLAQAAQAQAAAMALQgFgIAAgKQAAgMAHgKIAEgFQALgLAQAAQAQAAAMALIADAFQAIAKAAAMQgBAQgKALQgHAHgIACQgGACgHAAQgFAAgEgBQgLgDgGgGQADAHAAAKQABAQgLALQgMALgQAAQgQAAgLgLgAHqi6IgHgKIAHAKgAIriSQgLgLAAgQQAAgQALgLQALgMAQAAQAQAAALAMQALALAAAQQAAAQgLALQgLALgQAAQgQAAgLgLgAhJiyQgLgLAAgQQAAgPALgMQALgLAQAAQAQAAALALQgEgHAAgLQAAgMAHgJIAEgGQAMgLAPAAQAPAAAMALIADAGQAIAJgBAMQABAQgLALQgHAHgIADQgGABgGAAIgKgBQgJgCgHgHQAEAHgBAKQAAAQgLALQgLALgQAAQgQAAgLgLgAgLjeIgIgKIAIAKgAA1i1QgLgMAAgQQAAgQALgLQALgLAQAAQAQAAALALQALALAAAQQAAAQgLAMQgLALgQgBQgQABgLgLg");
	this.shape_6.setTransform(-64.55,16.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC99FF").s().p("AvRHBIgogLIi+ktQAGACAGAAQAQAAAMgLQAJgKACgMIAAgDIAAADQABAMAKAKQALALAQAAQAQAAALgLQAJgJACgNIAAgDIAAgCQAAgQgLgLIgDgCQANgDAIgIQALgLAAgQIAAgFIAAgFQAAgQgLgKQgLgLgQAAQgQAAgLALIAAABIAAgFIAAgEIAAgFQAAgNgHgJIgFgFQgLgLgQAAQgQAAgLALIgEAFQgHAJAAANIABAFIgBAEIABAFQgLgIgNAAQgQAAgLALQgLALAAAQIABAFIgBAEIABAJIiqkNIgBAAIACAAQBuAwDkAUQHEAxMThFIB4gLIABAAIAAABIADAOIACAVQgQEniiCXIAABZQgcAcgjAVQhjA8ieAFIlEAAQgXAFgkAAQh0AAj6g4gApmGzIAEAFQALALAQAAQAQAAALgLIAEgFQAHgJAAgLIAAgCQAAgQgLgLQgLgLgQAAQgQAAgLALQgLAKAAAPQAAgPgLgKQgLgLgQAAQgQAAgMALQgLALAAAQQAAAMAHAKIAEAFQAMALAQAAQAQAAALgLIAEgFQAGgJABgLQAAALAHAJgAuuGFQALALAQAAQAQAAALgLQALgLAAgOIAAgCQAAgQgLgLQgLgLgQAAQgQAAgLALQgLAKAAAPQAAgPgLgKQgLgLgQAAQgQAAgLALQgMALAAAQQAAAQAMALQALALAQAAQAQAAALgLQAKgLABgOQAAAOALALgAqAFNIgGAEQgHAIAAAKQAAALAHAHQAIAHAKAAQAKAAAIgHQAHgHAAgLQAAgKgHgIQgDgDgFgCQAIgDAHgGQALgLAAgQQAAgMgHgKIgEgFQgLgLgQAAQgQAAgMALIgEAFQgHAKAAAMQAAAKAFAIQgLgLgQAAQgQAAgMALQgLALAAAQQAAAQALALQAMALAQAAQAQAAALgLQALgLAAgQQAAgKgEgHQAHAGAKADgApQE1QgLAMAAAQQAAAQALALQALALAQAAQAQAAAMgLQALgLAAgQQAAgQgLgMQgMgLgQAAQgQAAgLALgAvMEaIgGAEQgHAHAAALQAAAKAHAIQAIAHAKAAQALAAAHgHQAHgIAAgKQAAgLgHgHIgHgFQAIgDAGgGQALgLAAgQQAAgMgHgKIgEgFQgLgLgQAAQgQAAgMALIgEAFQgHAKAAAMQAAAKAFAIQgLgLgQAAQgQAAgLALQgMALAAAQQAAAQAMALQALALAQAAQAQAAALgLQALgLAAgQQAAgKgEgHQAHAGAKADgAucECQgLALAAAQQAAAQALAMQALALAQAAQAQAAAMgLQALgMAAgQQAAgQgLgLQgMgLgQAAQgQAAgLALgAhsBcQALALAQAAQAQAAALgLQAKgKABgPIAAgCQAAgQgLgLQgLgLgQAAQgQAAgLALQgLAKAAAPQAAgPgLgKQgMgLgQAAQgQAAgLALQgLALAAAQQAAAQALALQALALAQAAQAQAAAMgLQAKgKABgPQAAAPALAKgApiA4QALALAQAAQAQAAALgLQALgKAAgOIAAgDQAAgQgLgLQgLgKgQAAQgQAAgLAKQgLALAAAOQAAgOgLgLQgLgKgQAAQgQAAgMAKQgLALAAAQQAAAQALALQAMALAQAAQAQAAALgLQAKgKABgOQAAAOALAKgAiKgOIgGAEQgHAIAAAJQAAALAHAHQAHAHALAAQAKAAAIgHQAHgHAAgLQAAgJgHgIQgDgDgFgCQAIgDAHgGQALgLAAgQQAAgMgHgKIgEgFQgMgLgQAAQgQAAgLALIgEAFQgHAKAAAMQAAAKAFAIQgMgLgQAAQgQAAgLALQgLALAAAQQAAAPALALQALALAQAAQAQAAAMgLQALgLAAgPQAAgKgEgHQAHAGAKADgAhaglQgLALAAAQQAAAPALALQALALAQAAQAQAAALgLQALgLAAgPQAAgQgLgLQgLgMgQAAQgQAAgLAMgAqAgyIgGAFQgHAHAAAKQAAALAHAHQAIAIAKAAQAKAAAIgIQAHgHAAgLQAAgKgHgHQgDgEgFgBQAIgDAHgHQALgLAAgQQAAgMgHgKIgEgFQgLgLgQAAQgQAAgMALIgEAFQgHAKAAAMQAAAKAFAIQgLgLgQAAQgQAAgMALQgLALAAAQQAAAQALALQAMALAQAAQAQAAALgLQALgLAAgQQAAgKgEgHQAHAHAKACgApQhJQgLALAAAQQAAAQALALQALALAQAAQAQAAAMgLQALgLAAgQQAAgQgLgLQgMgLgQAAQgQAAgLALgAEMiqIh8gEgAN8ECQksh/lHk7IQiG6Qh3BYhsAAQhrAAhhhYgAyMBNIABAAQAKAAAIgHQAHgHAAgLIAAgEIAAgFQAAgLgHgGIAGgGIACgBIgBAFIABAFIgBAFQAAAQALALIADACQgNACgIAJQgLAKAAAPQAAgMgIgKgAzUBbIgPgYQAKAJAOAAIADAAQgIAJAAALgAyrA/IgCAAQAJgLAAgOIAAgEIAAgFIAAgFIAFADQgFAHAAAJIAAAFIAAAEQAAAGADAGIgKgBgAEJi5QCtgnCegoQHdh4FQh4QA0BsgxBMQgTAfgjAZQhFAziFAhQhIBdjbAAQjgAAl4hig");
	this.shape_7.setTransform(0.032,-0.0113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scarf1, new cjs.Rectangle(-145.3,-52,290.4,104.1), null);


(lib.mustache = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApzC7QAhgIBMg5QAcgWAigcQB4hjDBi8QAFgBAHAAQAEAAAFABAoADcQgFAAgEAAIgFAAQg7gCgggWQgEgDgEgDQgCgBgBgCQAAAAABAAQgCgBAAgBQgKgOgEgRApxC+QgBgBgBgCAJrC5QATgRAGgaAgGBHQBnArBXAfQFcB5BXhRQhcgVmJl9Qg+gOhSBe");
	this.shape.setTransform(0,0.0148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("An/DcIgFAAQg7gCgggWIgIgGIAIAGQAgAWA7ACIgGAAQhJgBghggIAJgCQAigNBDgyIA+gyQB5hjDAi8IALgBIALAAIgMABQjAC8h5BjIg+AyQhLA5giAIQAigIBLg5IA+gyQB5hjDAi8IAMgBIAJABQAxAJA/BFQBSheA+AOQGJF9BcAVQhXBRlch5QhXgfhogrQlTCOilAHIgKAAgApnC+IgCgDIACADIgDgDIABAAIgCgCIACACIgBAAIADADIAAAAgApnC+IAAAAg");
	this.shape_1.setTransform(-1,0.0148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mustache, new cjs.Rectangle(-65.4,-22.9,130.8,45.9), null);


(lib.mouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AADhmQAFgHAGgGQAfghA4gIQAyAGBJAjQBQAoBsBMQigCajgACQgOAAgOAAQAJgBAKAAQAEAAAFABAmbABIE8AAQBmA1BVg1IFAAAAgChmQgFgHgFgGQggghg4gIQgyAGhIAjQhRAohsBMQCgCaDhACQANAAANAAQgIgBgJAAQgFAAgEAB");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("AAABOIgRgBIgJABIAJgBIARABIgaAAQjhgCigiZIE8AAQBlA1BWg1IFAAAQihCZjfACIgJgBIgTABIATgBIAJABIgcAAg");
	this.shape_1.setTransform(0,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B70025").s().p("AhfBCIk8AAQBshMBRgoQBJgjAxgGQA5AIAfAhIAKANIAFAAIALgNQAeghA5gIQAyAGBIAjQBRAoBsBMIlAAAQgrAagvAAQguAAgzgag");
	this.shape_2.setTransform(0,-6.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(-43.2,-17.7,86.4,35.4), null);


(lib.MonsieurCroissant = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#BD7B43").ss(1,1,1).p("ASArmQABgBABgBQAugqAvgpARmrPIAWgTIo5TIIgCAFAaXM8QgCgCgCgBIlcmDIFDl5AZ8A2IBYkxAoyIFIgFgIQgGgIgGgJAuZLPIFHirIAngUIgHgLAnfKBIhMhxIA8ggAosIPIgGgKAkkJaQADAAADAAQAnAHAnAIQCAAbCFgZIFUhXAl1I/QArAQAsALQAIACAIACAI2IEIAJgUIACgFAI2IEIgBAAIAMgZAI2IEIAAAAAI2IEIgBAAIAAAAIgxgZAMoJ8IjnhyIgLgGAH+J8IA4h4A0RI0IgNgPIABgCIAAgBIgSgYA0RI0IgMgRIBJhEA0xI1IARgQIABgBIACgCA0eIlIgBgBIgcglImYo2A0xI1IATgQAzRKNIhAhZA32LvIDFi6AosIHIrQxG");
	this.shape.setTransform(230.1875,122.0125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("Ab5j9IAAigQkBkMjyhlQiKg6iFgDIo9WTIg5COIHqAAICxiiIC8BGQExBwCbCQAQcI0IH3nKIDmlnAaoN9QBRBNAoBVQFADYCMmBIAAjcQhgoAmUmXAlOLWIg3hdIrLzKA6AgrIAAigQC/jwC/heQBZgsBZgMIBukYQOdnuOcF2ICgCWAwILcQhRgChYAPQinAdjDBdQhhAuhoA+IlyC0QiagUAEkDQAQkkD1kCQAFgFAEgFQBPjbDBhoQAlgUApgQIJ4MHIBEBUIJ2haQFnDcFojc");
	this.shape_1.setTransform(228.4686,115.5176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C47F46").s().p("ATEJjIi9hFIH3nLIDmlnIgTBDIhZExIgCAHIlDF6IFdGCQiciPkwhxgA36MZIDGi6IARgQIgbgmIAbAlIAAABIAAgBIACgBIgSgZIASAZIgCABIgbglImZo2IgMgQQAlgVApgQIJ4MHQhQgChZAPQinAdjDBdgA0VJeIBBBZIhBhZIgLgQIBIhFIhIBFIALAQIgNgPIACgBIgBgBIABABIgCABIANAPgA00JfIASgQIgBgBIABABgAljK/Ip2BaIA8ggIFHirIAngUIBMBxIhMhxIA9ggIg9AgIgHgLIgFgHIgLgSIrRxGQBZgrBZgNILMTKIA2BdIg2hdQA4AUA5AOIAWAEQAfAHAgAFQCAAaCEgZIFUhXIAggMIg5CNIA5iNII92UQCFAECLA5IgXAUIhdBTIgCADIgEADIgWATIAWgTIo5TIIgCAFIgLAZIgygYIAyAYIAAAAIAAAAIg4B5IA4h5IAMAGIDmByIAyAZInqAAQi0Bui0AAQizAAi0hugAovIyIrRxHgA0VJegAovI5IgHgKIAHALIgnAUgA0gJOgAovI6gAo2IvgA0+Ipg");
	this.shape_2.setTransform(230.55,117.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E49451").s().p("EgjsANsQAQkkD1kCIAJgKQBPjbDBhoIAMAQIGYI3IAbAmIgQAQIjGC6Ig2AzQhhAuhoA+IlyC0QiagUAEkDgAchQfQgohVhRhNIgEgDIlcmDIFDl5IACgHIBZkxIAThDIjmFnIn3HKIixCiIgygZIjnhyIgLgGIALAGIgLgGIAAAAIAAAAIgBAAIAAAAIABAAIgBAAIAMgZIgCAFIgJAUIAJgUIAEgKII5zIIAEgEIACgCIBdhTIAWgUQDyBlEBEMIAACgQGUGXBgIAIAADcQhaD3ijAAQhcAAhzhOgAwILcIp4sHIAAigQC/jwC/heILRRGIALARIAFAIIAGAKIgmAVIlHCrIg8AggAi+KqIhPgPQgsgLgrgQQArAQAsALIgGAAQg5gOg5gUIrLzKIBukYQOdnuOcF2ICgCWIo9WTIggANIlUBXQhBAMg+AAQhDAAhCgOgAj9KfIgQgEIAQAEIgWgEIAGAAIBPAPQgggEgfgHgAkTKbIAAAAg");
	this.shape_3.setTransform(228.4686,115.5176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,461,235.1);


(lib.makeup1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AF4jWQAAAXgRARQgRARgYAAQgYAAgRgRQgRgRAAgXQAAgYARgRQARgRAYAAQAYAAARARQARARAAAYgADAjVQAAAagSARQgSASgZAAQgaAAgRgSQgSgRAAgaQAAgZASgSQARgSAaAAQAZAAASASQASASAAAZgAASgSQAAAXgSARQgQASgYAAQgYAAgRgSQgRgRAAgXQAAgYARgSQARgRAYAAQAYAAAQARQASASAAAYgACygeQAAAXgRAPQgQARgXAAQgYAAgRgRQgQgPAAgXQAAgYAQgQQARgRAYAAQAXAAAQARQARAQAAAYgAGMgWQAAAbgUATQgUAUgbAAQgcAAgUgUQgTgTAAgbQAAgcATgUQAUgTAcAAQAbAAAUATQAUAUAAAcgAGkC8QAAAehOAUQhNAWhtAAQhtAAhNgWQhNgUAAgeQAAgeBNgWQBNgVBtAAQBtAABNAVQBOAWAAAegAitlOIKcAAIAAKdIqcAAgAnhh3QgmjABKAJQBnAmgQCRAADjXQAAAYgRASQgRASgZAAQgZAAgRgSQgSgSAAgYQAAgZASgSQARgRAZAAQAZAAARARQARASAAAZgAnhh3IB7AAIAAG+Ih7AAg");
	this.shape.setTransform(0.0162,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ai6AzQhNgVAAgeQAAgdBNgVQBOgVBsAAQBtAABNAVQBOAVAAAdQAAAehOAVQhNAVhtAAQhsAAhOgVg");
	this.shape_1.setTransform(15.65,18.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#669966").s().p("AgvAvQgTgTAAgcQAAgbATgUQAUgTAbAAQAbAAAUATQAUAUAAAbQAAAcgUATQgUAUgbAAQgbAAgUgUg");
	this.shape_2.setTransform(32.9,-2.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399CC").s().p("AgnAnQgQgQAAgXQAAgWAQgRQARgQAWAAQAXAAAQAQQARARAAAWQAAAXgRAQQgQARgXAAQgWAAgRgRg");
	this.shape_3.setTransform(12.175,-3.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3366").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_4.setTransform(31.825,-21.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3333FF").s().p("Ag9DfIAAm9IB7AAIAAG9g");
	this.shape_5.setTransform(-42,10.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#99FF66").s().p("AgoApQgRgRgBgYQABgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRASgYAAQgXAAgRgSg");
	this.shape_6.setTransform(-4.05,-1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9999").s().p("AAzAsQgTgSABgZQgBgZATgRQARgSAaAAQAZAAARASQATARgBAZQABAZgTASQgRARgZAAQgaAAgRgRgAiIApQgRgSgBgYQABgYARgSQASgSAZAAQAZAAARASQARASAAAYQAAAYgRASQgRASgZAAQgZAAgSgSg");
	this.shape_7.setTransform(3.75,-21.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AlNFPIAAqdIKcAAIAAKdgAi+CIQhNAWAAAdQAAAfBNAUQBOAVBtAAQBsAABNgVQBOgUAAgfQAAgdhOgWQhNgVhsAAQhtAAhOAVgAB4hFQgSATgBAcQABAbASATQAUAUAdAAQAbAAAUgUQATgTAAgbQAAgcgTgTQgUgUgbABQgdgBgUAUgAjxg7QgRARgBAYQABAXARARQARASAYAAQAYAAAQgSQASgRAAgXQAAgYgSgRQgQgRgYAAQgYAAgRARgAhOhGQgQAQAAAYQAAAXAQAPQARARAYAAQAWAAAQgRQAQgPABgXQgBgYgQgQQgQgQgWAAQgYAAgRAQgAhHkAQgTASABAaQgBAZATASQARARAaAAQAZAAAQgRQATgSgBgZQABgagTgSQgQgRgZgBQgaABgRARgAkDkBQgRARgBAZQABAZARARQASASAZAAQAZAAARgSQARgRAAgZQAAgZgRgRQgRgSgZAAQgZAAgSASgAB1j/QgRARAAAYQAAAYARAQQARARAXAAQAZAAARgRQAQgQABgYQgBgYgQgRQgRgRgZAAQgXAAgRARg");
	this.shape_8.setTransform(16.05,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0033").s().p("Ag3BcQgmjABKAJQBmAngQCQg");
	this.shape_9.setTransform(-42.5517,-21.1451);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.makeup1, new cjs.Rectangle(-50.9,-34.9,101.9,69.9), null);


(lib.hat22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AFLBCIAAj6IptAAIAAD6IjaAAIAAB3IPzAAAFLBCICyAAIAABjAkiBCIJtAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2B").s().p("An8C5IAAh3IDaAAIAAj6IJsAAIAAD6ICzAAIAABjIgHAUgAFKBCIpsAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat22, new cjs.Rectangle(-52.4,-20,104.8,40), null);


(lib.hat11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAejmQAJAigSAfQgRAeghAJQgiAJgfgRQgegSgJgiQgKghASgfQASgfAigJQAKgDALAAQAWAAAVAMQAdASAKAhgAJNh1QAGCQjRAuQjSAtjGBzQjIBziggIQiigIgliIQgkiICMiMQCJiHEKhLQAKgDALgDQEZhMCyA3QCyA4AFCQg");
	this.shape.setTransform(0.0307,0.017);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("Al+FUQiigIgliIQgkiICMiMQCJiHEKhLIABAAQAKgDALAAIABAAIABAAIAAAAIABAAQATAAARAKIABAAIABABIABAAIABABQAdASAKAhQADAMAAALQAAAWgMAUQgRAeghAJIgCABQgLACgKAAIAAAAIAAAAQgWAAgUgLQgegSgJgiQgEgLAAgMQAAgVAMgUQASgfAigJQgiAJgSAfQgMAUAAAVQAAAMAEALQAJAiAeASQAUALAWAAIAAAAIAAAAQAKAAALgCIACgBQAhgJARgeQAMgUAAgWQAAgLgDgMQgKghgdgSIgBgBIgBAAIgBgBIgBAAQgRgKgTAAIgBAAIAAAAIgBAAIgBAAIgBgDQEZhMCyA3QCyA4AFCQQAGCQjRAuQjSAtjGBzQi7BsiYAAIgVgBg");
	this.shape_1.setTransform(0.0307,0.017);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat11, new cjs.Rectangle(-60.4,-35.5,120.9,71.1), null);


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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AjADKQhUBUh2AAQh2AAhUhUQhUhUAAh2QAAh1BUhUQBUhUB2AAQB2AABUBUQBCBCAOBZQByiLBvCLQAOhZBChCQBUhUB2AAQB2AABUBUQBUBUAAB1QAAB2hUBUQhUBUh2AAQh2AAhUhUQgzgzgUhBQhnisiMCsQgUBBgzAzg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("ADBDKQgzgzgUhBQhnisiMCsQgUBBgzAzQhUBUh2AAQh2AAhUhUQhUhUAAh2QAAh1BUhUQBUhUB2AAQB2AABUBUQBCBCAOBZQByiLBvCLQAOhZBChCQBUhUB2AAQB2AABUBUQBUBUAAB1QAAB2hUBUQhUBUh2AAQh2AAhUhUg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses1, new cjs.Rectangle(-69.5,-30,139.1,60.1), null);


(lib.flag = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AEnkzIFFAmIiWIRIk2gngAmlCTIhiFXIhkAAIEEvTIB4AAIghBzIDzAcIFEAnAiVC1IkQgiICVoJAiVC1IB4oPACgDdIk1go");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFBFB").s().p("AjeD0IB5oPIFEAnIiHIPg");
	this.shape_1.setTransform(7.25,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3300").s().p("AjlD0ICHoPIFEAmIiWIRg");
	this.shape_2.setTransform(39,-2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033CC").s().p("AjDD0ICVoJIDyAcIh5IPg");
	this.shape_3.setTransform(-22.55,-9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ai9HqIEDvTIB4AAIghBzIiUIJIhiFXg");
	this.shape_4.setTransform(-43,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flag, new cjs.Rectangle(-63.5,-50.5,127,101), null);


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
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ADlhaQgPB8AuA2AjkhXQBBBphgBJ");
	this.shape.setTransform(0.025,6.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AHQAAQAAAQgMANQgNAMgRAAQgSAAgMgMQgLgLgBgPQgBgCAAgBQAAgSANgNQAMgMASAAQARAAANAMQAKALACAPQAAACAAADgAnPACQAAARAMANQANAMARAAQASAAAMgMQALgLABgPQABgCAAgCQAAgRgNgMQgMgNgSAAQgRAAgNANQgKAKgCAPQAAACAAACg");
	this.shape_1.setTransform(0.025,-0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AGVhpQg5AEg7AGIh/BIIBDgGIBDgHQAHAaAJAUQAaA9AjAEQCXAOAbhoQAFgUAAgZIAygEQBEgIBEgFQCGgMCGgGQh2BvjEB8QjXATjdgKAGVhpQAhgCAhgCQB0gGBtABQAdAAAcABIgLAkAGVhpIBygxIgwAtAK4hyIBvglIg2AmQA0ABAzADQAiACAhADIAHABQAFAAAFABQAkADAiAEAJehAIBagyAEogkIEEgYAvxhcQAFAFAFAFQAFAEAFAEQByBnC0ByQDXATDdgKArlhKQgEgBgEAAQh9gLh9gGQgFAAgFAAArwhuQg0ABgzADQgiACghADIgHABQgFAAgFABQgeACgeAEQgFAAgFABAq3hvIhvglIA2AmIALAkAq3hvQgbAAgbABQgBAAgCAAAorg5IgygEQhEgIhEgFAknghQgHAagJAUQgaA9gjAEQiXAOgbhoQgFgUAAgZAmUhmIhygxIAwAtQh0gGhtABApdg9IhagyAmUhmQA5AEA7AGIB/BIIhDgGIhDgHIkEgYAmUhmQghgCghgC");
	this.shape_2.setTransform(0.025,-0.0055);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#669966").s().p("AomgsIBXAKIAAAEQAAASAMAMQANAMARAAQASAAAMgMQALgLABgOIBEAHQgaA8gjAEQgSACgQAAQh4AAgYhcgAF1ArQgjgEgag8IBEgHQABAOALALQAMAMASAAQARAAANgMQAMgMAAgSIAAgEIBXgKQgYBch4AAQgQAAgSgCg");
	this.shape_3.setTransform(0.025,3.1577);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Aq3BxQi0hxhyhnIgKgJIgKgKIAKABQB9AGB9ALIAIAAQBEAGBEAHIAyAFQAAAZAFAUQAbBnCXgOQAjgDAag9QAJgUAHgaIBDAGQBBBphgBKQhLADhKAAQiRAAiOgNgAEEB4Qgug3APh8IBDgGQAHAaAJAUQAaA9AjADQCXAOAbhnQAFgUAAgZIAygFQBEgHBEgGQCGgLCGgHQh2BwjEB7QiOANiRAAQhKAAhLgDgAnDACQgMgMAAgRIAAgFQACgPAKgKQANgNARAAQASAAAMANQANAMAAASIgBAEQgBAPgLAKQgMAMgSAAQgRAAgNgMgAGIAAQgLgLgBgPIgBgEQAAgSANgMQAMgNASAAQARAAANANQAKAKACAPIAAAFQAAARgMANQgNALgRAAQgSAAgMgLg");
	this.shape_4.setTransform(0.025,2.9445);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F774F").s().p("Al7AeIABgFQAAgRgNgMQgMgMgSAAQgRAAgNAMQgKAKgCAPIhXgKQgFgTAAgZIEEAYQgHAZgJAVgAEogMIEEgYQAAAZgFATIhXAKQgCgPgKgKQgNgMgRAAQgSAAgMAMQgNAMAAARIABAFIhEAHQgJgVgHgZg");
	this.shape_5.setTransform(0.025,-2.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjkA9IhDgHIkEgXIgygFQhEgHhEgGIgLgiIADAAIA2gBIBaAwIhagwQBtgCB0AGIgwgtIByAyIB0AJIB/BHgAmUgNIhCgFIBCAFgAEhgHIB0gKIBCgDIhCADIBygxIgwAuQB0gHBtABIBvglIg2AmIg5gBIA5ABQA0ACAzADIBDAEIAHABIAKABIBGAHQiGAGiGALIALgjIgLAjQhEAGhEAHIBagxIhaAxIgyAEIkEAZIhDAGIhDAGgArtANQh9gMh9gEIgKgBIAKgBIA8gGIAKgBIAHAAIBDgGQAzgCA0gBIALAiIgIAAgArwgVIg2gnIBvAmIg2ABIgDAAg");
	this.shape_6.setTransform(0.025,-8.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes1, new cjs.Rectangle(-102,-16.5,204.1,33.1), null);


(lib.eyebrows2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AKkhZQjmCUjmiUIAACfQEnhKEnBegAqjhZQDmCUDmiUIAACfQknhKknBeg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADYBGIAAifQDmCUDmiUICCCzQknheknBKgAqjhZQDmCUDmiUIAACfQknhKknBeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrows2, new cjs.Rectangle(-82.1,-10.5,164.2,21), null);


(lib.eyebrows1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#663300").ss(3,1,1).p("AC5AiQFiiHDsCHAjCAiQk1h/kPB/");
	this.shape.setTransform(0,0.0375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrows1, new cjs.Rectangle(-79,-4.9,158,9.9), null);


(lib.rectangleflathitarea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F2F6").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-9,68,18);


(lib.baguette1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AHXo6QATAPAHAbQATBHhBCYQhaDOjDDsQjCDsi7B/Qi6B/hFg5QhFg4BajQQBZjPDEjrQDCjtC6h+QCIhdBKAFQAbACASAPg");
	this.shape.setTransform(-0.0049,0.0094);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD9B7").s().p("AkhIHQgcgFgHhVIAAgGQgGhPARhnIACgNQAThzAjhOQAUguATgSQAMgLALACQAdAFAGBUQAGBVgTB0QgUBzgiBOQgVAzgTAPQgKAIgJAAIgDAAgAg3EZQgKgCgHgLQgOgVgEg4IAAgGQgFhGANhcIAEgfQAUh0AjhNQAghPAdAFQALACAJAPQALAWAEAzIABAVQADBOgRBkIgLA3QgRBQgaA7QgfBJgbAAIgDAAgADEAnQgXgEgIg0IgCgMIgBgGIgBgPQgHhVAUh0QAThzAihOQAihOAdAEQAVAEAKAyQADAPABAWQAGBUgTB0QgTBzgiBOQggBJgbAAIgEAAg");
	this.shape_1.setTransform(2.6125,-1.6198);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3A57B").s().p("AnWI6QhFg4BajQQBZjPDEjrQDCjtC6h+QCIhdBKAFQAbACASAPQATAPAHAbQATBHhBCYQhaDOjDDsQjCDsi7B/QiBBYhJAAQggAAgVgSgAjAgtQgUAQgVAyQgjBOgTByIgFAhQgNBbAFBIIAAAGQAHBVAcAEQAMACAMgLQATgQAWgyQAihPAUhzQAThzgGhVQgHhUgcgFIgEAAQgKAAgKAJgAACjaQgiBOgTBzIgEAgQgOBbAFBHIAAAGQAFA3ANAVQAIAQALABQAcAGAihPQAihOAUh0QAThygGhVQgEg3gOgVQgIgPgMgDIgDAAQgbAAggBKgAD9nRQgiBOgTBzQgUB0AHBVIACAUIAAAFIACANQAJA0AWADQAdAGAihOQAihOATh0QAUhzgHhVQgBgVgDgQQgJg2gWgDIgEAAQgbAAggBJg");
	this.shape_2.setTransform(-0.0049,0.0094);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.baguette1, new cjs.Rectangle(-51.6,-60.3,103.2,120.6), null);


(lib.artist2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ACliuQAAAvgiAiQghAigwAAQgvAAgigiQghgiAAgvQAAgwAhgiQAighAvAAQAwAAAhAhQAiAiAAAwgAH5AtQAAAfgWAWQgWAWgfAAQgfAAgWgWQgFgFgEgGQgEgGgDgHQgGgNAAgQQAAgfAWgVQAWgWAfAAQAfAAAWAWQAWAVAAAfgALBAAQAACyjOB+QjPB+kkAAQkjAAjPh+QgNgIgNgJQAQgIANgOQAjgiAAgyQAAgxgjgjQgigjgyAAQgxAAgjAjQgKAJgGALQgZg3AAg+QAAixDOh+QA8glBDgZQCkhADPAAQEkAADPB+QDOB+AACxgAEnCvQAAAfgWAWQgWAWgfAAQgfAAgWgWQgWgWAAgfQAAgfAWgWQAWgWAfAAQAfAAAWAWQAEAEADAEQABABACACQAMATAAAXgAj1jVQAAAjgZAZQgZAZgjAAQgjAAgZgZQgZgZAAgjQAAgNAEgLQAAAAAAgBQAGgUAPgPQANgNAPgGQAPgGARAAQAjAAAZAZQAQAPAGAUQADAMAAANgAgdDVQAAAqgeAeQgeAegrAAQgqAAgegeQgegeAAgqQAAgrAegeQAegeAqAAQArAAAeAeQAeAeAAArg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3333").s().p("AhIBJQgdgfAAgqQAAgpAdgeQAegfAqAAQAqAAAeAfQAfAeAAApQAAAqgfAfQgeAdgqABQgqgBgegdg");
	this.shape_1.setTransform(-13.25,21.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33CC33").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWIAHAIIADADQAMATAAAWQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_2.setTransform(22,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("Ag0A1IgKgMIgGgMQgGgOAAgPQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_3.setTransform(43,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699CC").s().p("AhRBRQghgiAAgvQAAguAhgjQAjghAuAAQAvAAAiAhQAiAjAAAuQAAAvgiAiQgiAigvAAQguAAgjgig");
	this.shape_4.setTransform(5,-17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6633CC").s().p("Ag7A8QgZgZAAgjQAAgMADgLIABgBQAFgTAQgQQANgNAPgGQAOgGARAAQAjAAAZAZQAQAQAFATQAEAMAAAMQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_5.setTransform(-33.05,-21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D4AA7F").s().p("AnyEwIgagRQAQgIANgOQAjgiAAgyQAAgygjgjQgigigyAAQgxAAgjAiQgJAKgHALQgZg3AAg+QAAixDOh+QA8gkBDgaQClhADOAAQEkAADPB+QDOB+AACxQAACyjOB+QjPB+kkAAQkjAAjPh+gAjMCMQgeAeAAAqQAAArAeAeQAeAeArAAQAqAAAegeQAegeAAgrQAAgqgegeQgegegqAAQgrAAgeAegACnB6QgWAWAAAfQAAAfAWAWQAWAWAfAAQAfAAAWgWQAWgWAAgfQAAgXgMgTIgDgDIgHgIQgWgWgfAAQgfAAgWAWgAF5gHQgWAVAAAfQAAAPAGAOIAGAMIAKAMQAWAWAfAAQAfAAAWgWQAWgWAAgfQAAgfgWgVQgWgWgfAAQgfAAgWAWgAgfkAQghAjAAAvQAAAvAhAiQAiAiAvAAQAvAAAigiQAigiAAgvQAAgvgigjQgighgvAAQgvAAgiAhgAlqkkQgPAGgNANQgPAQgFATIgBABQgEALAAANQAAAjAZAZQAZAZAkAAQAjAAAYgZQAZgZAAgjQABgNgEgMQgGgTgQgQQgYgZgjAAQgSAAgPAGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.artist2, new cjs.Rectangle(-72,-44.5,144,89), null);


(lib.rectangleflatorange = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#484848").s().p("AgEAkIAAg/IgaAAIAAgIIA9AAIAAAIIgaAAIAAA/g");
	this.shape.setTransform(13.175,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#484848").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_1.setTransform(7.175,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#484848").s().p("AgOAkIgNgEIAAgMIABAAQAFAEAHADQAIACAGAAQAIAAAFgDQAFgEAAgFQAAgFgCgCQgCgDgFgBIgJgBIgIgCQgJgCgFgEQgEgFAAgIQAAgJAHgGQAIgGALAAQAIAAAGACIALADIAAAMIAAAAQgFgEgHgCQgGgCgHAAQgHAAgEADQgGADAAAFQABAFACACQACADAGABIAIACIAKACQAIACAEADQAEAFAAAHQAAAFgCAEQgCAEgEADQgDADgGACQgEACgHAAQgIAAgGgCg");
	this.shape_2.setTransform(0.4,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#484848").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_3.setTransform(-5.975,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#484848").s().p("AASAkIgYgdIgNAAIAAAdIgKAAIAAhHIAUAAIAKAAIAIADQAEADACAEQACAEABAFQAAAIgFAGQgDAEgIACIAcAggAgTAAIAJAAIAIAAQACgBADgDIAEgEIABgHQAAgDgCgDIgEgEIgDgCIgHAAIgLAAg");
	this.shape_4.setTransform(-12.3,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape_5.setTransform(11.75,1.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(6.175,1.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_7.setTransform(1.275,0.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_8.setTransform(-3.925,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_9.setTransform(-10.025,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// center outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FDC19B").ss(1,1,1).p("AFZheIAAC9IqxAAIAAi9g");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// center box
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBA46A").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_11.setTransform(0,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlYBfIAAi9IKxAAIAAC9g");
	this.shape_12.setTransform(0,-0.1184,0.9855,0.9474);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F06406").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_13.setTransform(0,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// outer box
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FB9551").ss(1,1,1).p("AF3h8IAAD5IrtAAIAAj5g");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFyh3IAADvIrjAAIAAjvg");
	this.shape_15.setTransform(0,0,1.0135,1.0417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F06406").ss(1,1,1).p("AF3h8IAAD5IrtAAIAAj5g");

	this.instance = new lib.rectangleflathitarea("synched",0);
	this.instance.setTransform(0,0,1.103,1.3889);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-36,-11,72,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-36, y:-11, w:72, h:22});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-13.5,77,27);


(lib.rectangleflatgrey = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgTAkIAAgHIAPAAIAAgwIgPAAIAAgHIAHAAIAFgCIAEgCQABgCAAgEIAHAAIAABBIAPAAIAAAHg");
	this.shape.setTransform(13.075,0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(3.275,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_2.setTransform(-2.175,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.075,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAkIAAhHIAtAAIAAAIIgjAAIAAAVIAeAAIAAAHIgeAAIAAAjg");
	this.shape_4.setTransform(-12.8,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F2F6").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape_5.setTransform(11.75,1.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F2F6").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(6.175,1.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F2F6").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_7.setTransform(1.275,0.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F2F6").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_8.setTransform(-3.925,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F2F6").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_9.setTransform(-10.025,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// center outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#EEEEEE").ss(1,1,1).p("AFZBfIqxAAIAAi9IKxAAg");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// center box
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E1E1E1").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_11.setTransform(0,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlYBfIAAi9IKxAAIAAC9g");
	this.shape_12.setTransform(0,-0.1184,0.9855,0.9474);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6F6F6F").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_13.setTransform(0,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// outer box
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CCCCCC").ss(1,1,1).p("AF3B9IrtAAIAAj5ILtAAg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFyB4IrjAAIAAjvILjAAg");
	this.shape_15.setTransform(0,0,1.0135,1.0417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#6F6F6F").ss(1,1,1).p("AF3B9IrtAAIAAj5ILtAAg");

	this.instance = new lib.rectangleflathitarea("synched",0);
	this.instance.setTransform(0,0,1.103,1.3889);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-36,-11,72,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-36, y:-11, w:72, h:22});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-13.5,77,27);


(lib.rectangleflatblue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgYAlIAAgKIAKgJIAKgIIAMgOQAEgGgBgGQABgFgEgEQgEgDgFAAQgFAAgFACQgFABgGADIAAAAIAAgKIAJgDIAMgBQAKAAAGAFQAHAGgBAJIgBAIIgCAHIgFAEIgGAHIgKAKIgLAIIAnAAIAAAJg");
	this.shape.setTransform(13,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(3.275,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAbQgFgBgEgEQgDgEgCgFQgCgFAAgIQAAgMAHgIQAIgHALgBIAJACIAIADIAAALIAAAAQgFgEgEgCQgFgCgEAAQgHABgEAFQgFAFAAAJQAAAKAFAFQAEAGAHAAIAGgBIAFgCIAEgCIADgCIAAAAIAAAKIgJADIgIACQgFAAgFgCg");
	this.shape_2.setTransform(-2.175,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_3.setTransform(-8.075,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAkIAAhHIAtAAIAAAIIgjAAIAAAVIAeAAIAAAHIgeAAIAAAjg");
	this.shape_4.setTransform(-12.8,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F2F6").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape_5.setTransform(11.75,1.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F2F6").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_6.setTransform(6.175,1.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F2F6").s().p("AgGAfQgEgFAAgKIAAgcIgGAAIAAgHIAGAAIAAgPIAJAAIAAAPIASAAIAAAHIgSAAIAAAYIAAAIIABAEIADADIAFABIAFgBIAEgBIAAAAIAAAIIgGABIgFABQgHAAgFgFg");
	this.shape_7.setTransform(1.275,0.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F2F6").s().p("AAOAcIAAgeIgBgHIgBgGIgEgCIgGgBQgDAAgEACIgIAEIAAAoIgJAAIAAg1IAJAAIAAAGIAJgGQAEgCAFAAQAJAAAEAFQAFAGAAAJIAAAjg");
	this.shape_8.setTransform(-3.925,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F2F6").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_9.setTransform(-10.025,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},1).wait(1));

	// center outline
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E7F2F6").ss(1,1,1).p("AFZheIAAC9IqxAAIAAi9g");
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// center box
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F2F6").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_11.setTransform(0,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlYBfIAAi9IKxAAIAAC9g");
	this.shape_12.setTransform(0,-0.1184,0.9855,0.9474);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D8BB2").s().p("AlTBaIAAizIKnAAIAACzg");
	this.shape_13.setTransform(0,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// outer box
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#B2D8E8").ss(1,1,1).p("AF3h8IAAD5IrtAAIAAj5g");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFyh3IAADvIrjAAIAAjvg");
	this.shape_15.setTransform(0,0,1.0135,1.0417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#2D8BB2").ss(1,1,1).p("AF3h8IAAD5IrtAAIAAj5g");

	this.instance = new lib.rectangleflathitarea("synched",0);
	this.instance.setTransform(0,0,1.103,1.3889);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-36,-11,72,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(0,0,0,1,45,139,178,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-36, y:-11, w:72, h:22});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-13.5,77,27);


// stage content:
(lib.MPHFinalESoto = function(mode,startPosition,loop,reversed) {
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
			this.hat22.x = 273;
			this.hat22.y = 158;
			this.eyebrows2.x = 273;
			this.eyebrows2.y = 222;
			this.eyes1.x = 275;
			this.eyes1.y = 248;
			this.mustache.x = 275;
			this.mustache.y = 285;
			this.flag.x = 107;
			this.flag.y = 312;
			this.baguette1.x = 502;
			this.baguette1.y = 340;
		}
		this.reset_btn.addEventListener("click", ClickReset.bind(this));
		
		function ClickReset() {
			this.hat22.x = 858;
			this.hat22.y = 159;
			this.eyebrows1.x = 656;
			this.eyebrows1.y = 246;
			this.eyes1.x = 661;
			this.eyes1.y = 297;
			this.mustache.x = 651;
			this.mustache.y = 62;
			this.flag.x = 859;
			this.flag.y = 66;
			this.baguette1.x = 871;
			this.baguette1.y = 558;
			this.artist2.x = 860;
			this.artist2.y = 355;
			this.hat11.x = 862;
			this.hat11.y = 234;
			this.eyebrows2.x = 659;
			this.eyebrows2.y = 191;
			this.glasses1.x = 654;
			this.glasses1.y = 370;
			this.mouth.x = 650;
			this.mouth.y = 125;
			this.makeup1.x = 857;
			this.makeup1.y = 449;
			this.shoes1.x = 654;
			this.shoes1.y = 471;
			this.scarf1.x = 669;
			this.scarf1.y = 558;
		
		
		}
		
		this.Face2_btn.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.artist2.x = 472;
			this.artist2.y = 342;
			this.glasses1.x = 271;
			this.glasses1.y = 284;
			this.mouth.x = 271;
			this.mouth.y = 312;
			this.hat11.x = 215;
			this.hat11.y = 185;
			this.makeup1.x = 75;
			this.makeup1.y = 352;
			this.eyes1.x = 270;
			this.eyes1.y = 253;
			this.eyebrows1.x = 268;
			this.eyebrows1.y = 225;
		}
		
		this.artist2.on("pressmove", dragMe);
		this.glasses1.on("pressmove", dragMe);
		this.hat22.on("pressmove", dragMe);
		this.eyebrows1.on("pressmove", dragMe);
		this.eyes1.on("pressmove", dragMe);
		this.hat11.on("pressmove", dragMe);
		this.makeup1.on("pressmove", dragMe);
		this.scarf1.on("pressmove", dragMe);
		this.mustache.on("pressmove", dragMe);
		this.shoes1.on("pressmove", dragMe);
		this.flag.on("pressmove", dragMe);
		this.baguette1.on("pressmove", dragMe);
		this.eyebrows2.on("pressmove", dragMe);
		this.mouth.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons
	this.reset_btn = new lib.rectangleflatorange();
	this.reset_btn.name = "reset_btn";
	this.reset_btn.setTransform(96.15,586,1.7974,1.7974);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 2, false, new lib.rectangleflatorange(), 3);

	this.Face2_btn = new lib.rectangleflatblue();
	this.Face2_btn.name = "Face2_btn";
	this.Face2_btn.setTransform(389.05,587,1.7947,1.7947);
	new cjs.ButtonHelper(this.Face2_btn, 0, 1, 2, false, new lib.rectangleflatblue(), 3);

	this.Face1_btn = new lib.rectangleflatgrey();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(240,586,1.7733,1.7733);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 2, false, new lib.rectangleflatgrey(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Face1_btn},{t:this.Face2_btn},{t:this.reset_btn}]}).wait(1));
	this.reset_btn.addEventListener("tick", AdobeAn.handleFilterCache);
	this.Face2_btn.addEventListener("tick", AdobeAn.handleFilterCache);
	this.Face1_btn.addEventListener("tick", AdobeAn.handleFilterCache);

	// Body Parts
	this.glasses1 = new lib.glasses1();
	this.glasses1.name = "glasses1";
	this.glasses1.setTransform(654,370);

	this.eyes1 = new lib.eyes1();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(661,297);

	this.makeup1 = new lib.makeup1();
	this.makeup1.name = "makeup1";
	this.makeup1.setTransform(860,449);

	this.shoes1 = new lib.shoes1();
	this.shoes1.name = "shoes1";
	this.shoes1.setTransform(654.1,471,1,1,0,0,0,0.1,0);

	this.scarf1 = new lib.scarf1();
	this.scarf1.name = "scarf1";
	this.scarf1.setTransform(668.9,558,1,1,0,0,0,-0.1,0);

	this.flag = new lib.flag();
	this.flag.name = "flag";
	this.flag.setTransform(859,66);

	this.mustache = new lib.mustache();
	this.mustache.name = "mustache";
	this.mustache.setTransform(651,62);

	this.mouth = new lib.mouth();
	this.mouth.name = "mouth";
	this.mouth.setTransform(650,125);

	this.hat22 = new lib.hat22();
	this.hat22.name = "hat22";
	this.hat22.setTransform(858,159);

	this.hat11 = new lib.hat11();
	this.hat11.name = "hat11";
	this.hat11.setTransform(871.65,251.2);

	this.eyebrows1 = new lib.eyebrows1();
	this.eyebrows1.name = "eyebrows1";
	this.eyebrows1.setTransform(656,246);

	this.eyebrows2 = new lib.eyebrows2();
	this.eyebrows2.name = "eyebrows2";
	this.eyebrows2.setTransform(659,191);

	this.baguette1 = new lib.baguette1();
	this.baguette1.name = "baguette1";
	this.baguette1.setTransform(869.9,555.65);

	this.artist2 = new lib.artist2();
	this.artist2.name = "artist2";
	this.artist2.setTransform(860,355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.artist2},{t:this.baguette1},{t:this.eyebrows2},{t:this.eyebrows1},{t:this.hat11},{t:this.hat22},{t:this.mouth},{t:this.mustache},{t:this.flag},{t:this.scarf1},{t:this.shoes1},{t:this.makeup1},{t:this.eyes1},{t:this.glasses1}]}).wait(1));

	// MonsieurCroissant
	this.MonsieurCroissant = new lib.MonsieurCroissant("synched",0);
	this.MonsieurCroissant.name = "MonsieurCroissant";
	this.MonsieurCroissant.setTransform(268.55,283.45,1,1,0,0,0,228.5,115.5);

	this.timeline.addTween(cjs.Tween.get(this.MonsieurCroissant).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrBJIAAgEIAshFQAOgUAAgPQAAgUgVAAQgIAAgHAEQgHAEgDAGIgMgKQADgKAKgFQAJgGAOAAQAUAAALAKQAMAJAAASQAAAQgQAXIgfAzIA3AAIAAASg");
	this.shape.setTransform(405.675,107.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBJIAAgEIAshFQAOgUAAgPQAAgUgVAAQgIAAgHAEQgHAEgDAGIgMgKQADgKAKgFQAJgGAOAAQAUAAALAKQAMAJAAASQAAAQgQAXIgfAzIA3AAIAAASg");
	this.shape_1.setTransform(395.225,107.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiA6QgLgRAAgsQAAgfAMgTQANgUAVAAQAXAAALAQQALARAAAoQAAAigMAUQgLAUgXAAQgWAAgMgQgAgagBQAAA6AZAAQAOAAAHgNQAHgNAAggQAAgXgDgLQgDgKgFgGQgGgFgJAAQgbAAAAA3g");
	this.shape_2.setTransform(385.025,107.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrBJIAAgEIAshFQAOgUAAgPQAAgUgVAAQgIAAgHAEQgHAEgDAGIgMgKQADgKAKgFQAJgGAOAAQAUAAALAKQAMAJAAASQAAAQgQAXIgfAzIA3AAIAAASg");
	this.shape_3.setTransform(374.325,107.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkA4QALAAAJgFQAIgGAAgHQAAgJgDgIIgIgVIgchIIATAAIAeBQIAbhQIATAAIgsB6QgEAJgKAHQgMAHgOAAg");
	this.shape_4.setTransform(358.325,111.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAcAzQgGgDgCgIQgMAOgWAAQgMAAgJgJQgJgJAAgNQAAgQAOgKQAOgLAUAAQAGAAAIADQAAgagWAAQgRAAgKAKIgHgQQAFgEAJgDQAJgDAJAAQAWAAAKAKQAKAKAAAXIAAAkQAAAOAJAFIAAAJQgMAAgFgDgAgQAGQgJAHAAAKQAAARATAAQANAAALgOIAAgZIgNgBQgNAAgIAGg");
	this.shape_5.setTransform(348.225,109.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgCBJIgfhdIgRBbIgTAAIAbiOIAJAAIAhBnIAfhnIAJAAIAdCOIgSAAIgRhbIggBdg");
	this.shape_6.setTransform(335.9,107.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLA7QgJgKAAgOIAAg6IgNAAIAAgPIANAAIAAgWIATgHIAAAdIAbAAIAAAPIgbAAIAAAzQAAANADAGQAFAFAJAAQAIAAAHgEIADARQgMADgOAAQgLAAgIgJg");
	this.shape_7.setTransform(288.6,107.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgfA1IAAhnIATAAIAAAQQAKgSAUAAIANABIgHATQgGgFgGAAQgKAAgHAJQgHAJAAANIAAA7g");
	this.shape_8.setTransform(281.35,109.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAlBJIgKgfIg0AAIgLAfIgWAAIA6iQIAFAAIA2CQgAgUAcIAqAAIgVg+g");
	this.shape_9.setTransform(270.9,107.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgtBKIAAiRIATAAIAAAJQALgLAOAAQAWAAAMAOQANAOAAAbQAAAXgNAPQgMAPgXAAQgHAAgHgDQgIgCgCgDIAAAvgAgRg2QgGACgDAEIAAA8QACACAFADQAGACAFAAQAiAAAAgmQAAgUgIgJQgIgJgRAAQgEAAgGADg");
	this.shape_10.setTransform(259.725,111.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA0A1IAAhBQgBgZgVAAQgHAAgFAFQgHAEgBAFIAABMIgSAAIAAhJQgBgIgFgEQgGgFgKAAQgFAAgHAFQgFAEgEAFIAABMIgSAAIAAhnIAMAAIAGAMQALgOAQAAQAXAAAIAOQADgGAJgEQAIgEAJAAQAQAAAJAJQAJAKAAARIAABFg");
	this.shape_11.setTransform(245.55,109.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiAnQgMgOAAgZQAAgYANgOQANgPAUAAQAWAAANAOQAMAOAAAZQAAAZgMAPQgNAOgWAAQgVAAgNgPgAgTgcQgIALAAARQAAAnAbAAQANAAAHgKQAIgLAAgSQAAgmgcAAQgMAAgHAKg");
	this.shape_12.setTransform(231.875,109.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgjA2QgQgVAAggQAAgfARgWQARgVAaAAQAYAAANAHIgHARQgJgGgUAAQgSAAgLAQQgLAQAAAYQgBAZAMAPQALAPASAAQAUAAALgOIALAPQgRARgbAAQgbAAgQgUg");
	this.shape_13.setTransform(220.55,107.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiAnQgMgOAAgZQAAgYANgOQANgPAUAAQAWAAANAOQAMAOAAAZQAAAZgMAPQgNAOgWAAQgVAAgNgPgAgTgcQgIALAAARQAAAnAbAAQANAAAHgKQAIgLAAgSQAAgmgcAAQgMAAgHAKg");
	this.shape_14.setTransform(178.925,109.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLA7QgJgKAAgOIAAg6IgNAAIAAgPIANAAIAAgWIATgHIAAAdIAbAAIAAAPIgbAAIAAAzQgBANAEAGQAFAFAJAAQAHAAAIgEIADARQgMADgNAAQgMAAgIgJg");
	this.shape_15.setTransform(169.7,107.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiAnQgMgOAAgZQAAgYANgOQANgPAUAAQAWAAANAOQAMAOAAAZQAAAZgMAPQgNAOgWAAQgVAAgNgPgAgTgcQgIALAAARQAAAnAbAAQANAAAHgKQAIgLAAgSQAAgmgcAAQgMAAgHAKg");
	this.shape_16.setTransform(160.225,109.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgnBBIAHgSQAGAEAIADQAIACAGAAQALAAAHgGQAHgGAAgKQAAgHgEgGQgEgGgPgIIgLgFQgPgGgGgKQgFgIAAgOQAAgQALgKQALgLARAAQAYAAAJAHIgGARIgMgFQgIgDgHAAQgIABgGAFQgGAGAAAJQAAAGACAEQACAEAEAEIAOAIIAMAFQAOAHAGAJQAGAJAAAQQAAAPgNAMQgNALgVAAQgTAAgNgJg");
	this.shape_17.setTransform(150.075,107.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgqBIIAAiOIBVAAIAAARIhBAAIAAAoIAuAAIAAAPIguAAIAAA0IBAAAIAAASg");
	this.shape_18.setTransform(140.275,107.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQBvIAAjBIhHAAIAAgcICvAAIAAAcIhKAAIAADBg");
	this.shape_19.setTransform(412.8,64.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABDBwIhxihIAACeIgdAAIAAjdIAMAAIBvCZIAAiZIAcAAIAADgg");
	this.shape_20.setTransform(393.875,64.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AA5BwIgPguIhRAAIgRAuIgiAAIBajgIAHAAIBUDggAgfArIBAAAIgfhgg");
	this.shape_21.setTransform(374.875,64.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag9BlIALgcQAJAGAMAEQANAEAKAAQARAAAKgJQALgKAAgPQAAgLgFgKQgHgJgXgMIgSgIQgWgKgJgOQgJgPAAgUQAAgZARgQQARgRAcAAQAkAAAOAMIgJAbQgFgFgNgEQgMgEgLAAQgPAAgIAJQgJAJAAANQAAAJADAHQADAHAGAEQAFAFARAJIASAIQAXAKAKAPQAIAPABAXQAAAZgVARQgUASghAAQgdAAgVgOg");
	this.shape_22.setTransform(358.3,64.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag9BlIALgcQAJAGANAEQAMAEAKAAQARAAAKgJQALgKAAgPQAAgLgGgKQgFgJgYgMIgRgIQgXgKgKgOQgJgPAAgUQAAgZASgQQARgRAbAAQAlAAAPAMIgJAbQgHgFgMgEQgNgEgKAAQgOAAgJAJQgJAJAAANQAAAJADAHQADAHAGAEQAGAFAQAJIASAIQAXAKAKAPQAJAPgBAXQAAAZgTARQgVASggAAQgeAAgVgOg");
	this.shape_23.setTransform(343.4,64.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgOBvIAAjdIAdAAIAADdg");
	this.shape_24.setTransform(331.625,64.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhEBSQgXghAAgyQgBgwAZghQAYggApAAQAtAAAZAeQAYAeAAA1QAAA2gYAfQgZAfgtAAQgqAAgYghgAgthAQgPAXAAAoQAAAlAPAaQAPAZAcAAQAeAAAQgXQAQgYABgpQAAhWg/AAQgcAAgPAXg");
	this.shape_25.setTransform(316.85,64.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAsBwIg7hfIgggBIAABgIgeAAIAAjdIAYgBIAfgBQBPAAAABAQAAAUgNARQgMAQgSAEIBABmgAgvhRIAABIIAVABQAbAAAMgJQANgJAAgWQAAgSgOgJQgMgIgdAAIgSACg");
	this.shape_26.setTransform(298.575,64.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag3BTQgZgfAAgzQAAgxAbghQAbghApAAQAkAAAUAMIgKAaQgOgLgfAAQgdAAgRAaQgSAZAAAmQAAAmASAYQASAXAcAAQAfAAARgWIARAXQgbAbgpAAQgrAAgZggg");
	this.shape_27.setTransform(279.075,64.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAsBwIg7hfIgggBIAABgIgeAAIAAjdIAYgBIAfgBQBPAAAABAQAAAUgNARQgMAQgSAEIBABmgAgvhRIAABIIAVABQAbAAAMgJQANgJAAgWQAAgSgOgJQgMgIgdAAIgSACg");
	this.shape_28.setTransform(252.625,64.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag4BfQgVgTAAgjIAAiZIAfAAIAACXQgBAUANANQANANAVABQAWAAANgNQAMgNAAgVIAAiXIAfAAIAACZQAAAigVATQgVATgkAAQglAAgTgSg");
	this.shape_29.setTransform(232.35,64.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhBBvIAAjdICDAAIAAAcIhlAAIAAA9IBIAAIAAAZIhIAAIAABQIBkAAIAAAbg");
	this.shape_30.setTransform(214.575,64.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgOBvIAAjdIAdAAIAADdg");
	this.shape_31.setTransform(201.375,64.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag9BlIAMgcQAHAGAOAEQAMAEAKAAQAQAAAMgJQAKgKAAgPQAAgLgGgKQgFgJgYgMIgRgIQgXgKgKgOQgIgPgBgUQAAgZASgQQARgRAbAAQAlAAAPAMIgJAbQgHgFgMgEQgMgEgLAAQgOAAgJAJQgJAJAAANQAAAJADAHQADAHAGAEQAGAFAQAJIATAIQAWAKAJAPQAKAPgBAXQAAAZgTARQgVASggAAQgeAAgVgOg");
	this.shape_32.setTransform(189.6,64.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ABDBwIhxihIAACeIgdAAIAAjdIAMAAIBvCZIAAiZIAcAAIAADgg");
	this.shape_33.setTransform(172.225,64.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhDBSQgZghAAgyQAAgwAZghQAYggApAAQAtAAAZAeQAZAeAAA1QAAA2gZAfQgZAfgtAAQgqAAgXghgAgthAQgOAXAAAoQAAAlAOAaQAPAZAcAAQAeAAAQgXQAQgYAAgpQAAhWg+AAQgcAAgPAXg");
	this.shape_34.setTransform(151.9,64.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgCBwIgyiQIgaCNIgdAAIAqjdIAOAAIAzChIAxihIAOAAIAtDdIgdAAIgaiNIgxCQg");
	this.shape_35.setTransform(130.525,64.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFCC66").ss(6,1,1).p("EgjTgHaMBGnAAAIAAO1MhGnAAAg");
	this.shape_36.setTransform(271.025,80.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFCC").s().p("EgjTAHbIAAu1MBGnAAAIAAO1g");
	this.shape_37.setTransform(271.025,80.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// BACKGROUND
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(3,1,1).p("EAhrAHnIFZrfI0gsEI6UhXI/TKZIJIN6IepBRgEgnDgG6IOSYOMA1aAAAIFCpt");
	this.shape_38.setTransform(275.65,429.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCCCCC").s().p("A97LhIpHt6IfSqZIaUBXIUfMDIlYLgMgg9AArg");
	this.shape_39.setTransform(275.65,400.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("A2FMIIuR4OIJHN6IeqBRMAg8gArIlBJug");
	this.shape_40.setTransform(258.425,462.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).wait(1));

	// Frame
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_41.setTransform(480,320);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_42.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,329,462,302);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFCC66",
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