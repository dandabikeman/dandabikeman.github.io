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


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AAciNID6AAID7hZIAAEZIAADBIjzAAIjyAAIjqAAIi0AAIieAAIAAjBICeAAIAADBAAkAzID2AAIAEDBAAkAzIAIDBAEaAzID3AAAEWiNIAEDAAAciNIAIDAAlyiNIC/AAIgFDAIgGDBAoQAzIAAkmICeBmIAADAIC6AAIDcAAAiziNIDPAA");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AEeD0IgEjBID2AAIAADBgAAsD0IgJjBID3AAIAEDBgAi+D0IAGjBIgGDBIi0AAIAAjBIC6AAIDbAAIAJDBgAlyD0IidAAIAAjBICdAAIidAAIAAkmICdBmIAADAIAAjAIDAAAIgGDAIAGjAIDOAAID6AAID6hZIAAEZIj2AAIgEjAIAEDAIj3AAIgHjAIAHDAIjbAAIi6AAIAADBgAAjAzg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.8,-28.4,113.69999999999999,56.9);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AEhlgQABgDABgDAGZg3QAGgDAFgGIAJgLQgegYgYgtQgohLANhVQACgTAGgTIgQAWQgFAIgEAIQgMAVgIAVQglBeAnBCQAVAjAWANQgCADgBADQgCAEgCAEQgNAiAAAwQAAAxANAjQAOAiAUAAQATAAAOgiQANgjAAgxQAAgwgNgiQgBgCAAgBQgeACgggHQhvgXiMh5QCYE3B1BCQBdA1BChqQAvhNAdiSQAJgvAGgwIAEgmIgGAPQgIAUgLATQgiA9gyAhQgvAeg2ADQgDgGgDgGgAFkg2QATAMAUgGQAHgCAHgFAnjinQAEAHADAHQAgA+AvAgQArAfAyADQADgHADgFQgGgEgFgGIgJgKQAcgYAXguQAphSgShfQgDgKgCgLIAOAXQARAcAKAeQAjBdglBDQgTAjgUANQgSALgTgGQgGgCgGgEAj2gfQBmgXCBh5QiNE4hrBCQhXA0g8hqQgshMgaiTQgBgHgCgGAiblgQgBgDAAgCAj2gfQABAEACAEQANAiAAAwQAAAygNAiQgNAigSAAQgSAAgNgiQgNgiAAgyQAAgwANgiQABgBAAgBQAcABAegHgAj5gkQACACABADAprFnIgFgmIAJAWQAEAIAEAI");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00CC").s().p("AggBKQgOgjAAgwQAAgxAOgiIADgIIAEABQAXAEAUAAIABAAIAAAAIAKAAIADAAIABADQAOAiAAAxQAAAwgOAjQgOAigTAAQgSAAgOgigAAShfQgUAAgXgEIgEgBIADgGQAUAMATgGQAHgCAGgFIAGAMIgDAAIgKAAIAAAAIgBAAg");
	this.shape_1.setTransform(38.225,5.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663399").s().p("AlVCbQgGgDgGgEQgGgEgFgFIgJgLQAcgYAXgtQAphSgShfIgFgUIAOAWQARAdAKAdQAjBdglBCQgTAjgUANQgMAIgMAAQgGAAgHgCgAEsCEQgVgNgVgjQgohCAlhdQAJgWALgVIAJgPIAQgXQgFAUgDASQgNBWAoBJQAZAuAeAYIgJAKQgGAGgGAEQgGAEgHACQgHACgHAAQgNAAgNgHg");
	this.shape_2.setTransform(5.525,-18.618);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,204,0.498)").s().p("AgeBJQgNgiAAgwQAAgxANgiIABgDIAFAAIAFAAIAAAAIABAAQATAAAVgEIADgBIABAAIACAAIADAIQANAiAAAxQAAAwgNAiQgNAjgSAAQgRAAgNgjgAgThfIgFAAIgFAAIAGgMQAGAEAGADQASAGASgMIADAGIgCAAIgBAAIgDABQgVAEgTAAIgBAAIAAAAg");
	this.shape_3.setTransform(-27.475,6.9625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.4,-39.8,132.9,79.69999999999999);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJcj+QEfi/CIBEQAGADAFADQgzAlhpAeQh7AkibAOgAjmliQhJgpAAgyQAAhTDLg7QDLg6EgAAQEgAADLA6QDMA7AABTQAAAogwAiQB2BMiAFDQiGFUiICIQh7B8irALQAHgHAGgOQBXi8AoqsAN2m7QAAAeiAAVQh/AWi0AAQi0AAiAgWQh/gVAAgeQAAgeB/gVQCAgVC0AAQC0AAB/AVQCAAVAAAegAD2j5QjFgMiVgrQhRgXgxgbQAYg0BLALQC/AdC6B1QBxM0BNBFQAPANANgOQgOABgOAAQgDAAgCAAQjAAAiIiIQgFgFgFgGQgpgrgphDQGWiukAiFQhRgqiHggIh4gXQgCgDgBgEQhaj0AmhSAivgUIAAgBAkbDgIBsj0Au8kJIB2haIB4BQIAAFnIDICMIBeBzInsgyIBinLIBkhpAsyiqIiKhfIiJhfIBLhzIC0B4ArOBUIitC2IgZAXAmSFWIgWgDAs1HlQAAAGABAGAoGDgIDrAAIh3B2AALF/ImdgpAALF/QhbiShfkB");
	this.shape.setTransform(109.4426,64.613);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("ACLGEIB3h2IBrj1QBgEDBcCSgAB1GCIheh0IDrAAIh3B2gAECEOgAook6IBLhzIC0B4Ih1Bag");
	this.shape_1.setTransform(55.25,59.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AFqJCQjAAAiIiIIgKgLQgogrgphCQD4hsAAhbQAAg6hjgzQhRgpiHgfIh4gYIgDgIQhaj0AmhSQAYg0BLALQDAAdC5B1QjEgLiWgsQhRgXgxgbQAxAbBRAXQCWAsDEALQBxM1BNBEIgFAAgAGYIsQBXi7AoqtQCbgOB7gkQBpgeAzglQB2BMiAFEQiGFUiICHQh7B8irALQAHgHAGgOgAj0hSIAAAAIB4AYQCHAfBRApQBjAzAAA6QAABbj4BsQhciShfkCgAvZDjIAZgWICti3IDICMIBeBzgAwBlHIB2haIB4BQIhkBpgAO+m3IALAGQgzAlhpAeQh7AkibAOQEfi/CIBEgABKnFQh+gWAAgeQAAgeB+gVQCAgVC0AAQC0AAB/AVQCAAVAAAeQAAAeiAAWQh/AVi0AAQi0AAiAgVgAPJmxIAAAAg");
	this.shape_2.setTransform(116.3176,70.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AFgKAIAcgBQgHAHgHAAQgHAAgHgGgACij5Qi5h1jAgdQhLgLgYA0QhJgpAAgyQAAhTDLg7QDLg6EgAAQEfAADMA6QDLA7AABTQABAogwAiIgLgGQiIhEkfC/QgoKshXC8QgGAOgHAHIgcABQhOhFhws0gAA7nuQh+AVgBAeQABAeB+AVQB/AWC1AAQC0AAB/gWQCAgVAAgeQAAgeiAgVQh/gVi0AAQi1AAh/AVgAF8J/IAAAAgAuGiqIBkhpIAAFnIitC2IgZAXg");
	this.shape_3.setTransform(117.85,64.613);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,220.9,131.3);


(lib.sprite = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(37,37,37,0.498)").s().p("AiOD7IgJgEIgCgEQAAgLABgRIAIgHIABgDQAJgFAJgNQAHgIAVgIIAVgGIgCgCIANgFIACgSIgCgHIAFgKQgCgJABgIIgEgaIgEgaIADgQIACgQQACgLgDgFIgJgFIgLAGQgLASgKADIgFAJIgKAGIgMAAIAAgIQACgFAGgHIABgFIAGgFIABgEQAGgFAQgHQAPgHAGgHQgEgNAFgKQAAgKgGgGIADgGIgHgKIAEgHIgBgEQABgCAIgGIAEgHIgCgHIgEgFIgOgCIgPAGIgMgBIgLgFQgNABgQAGQgVAIgLAIIgDAIIgLANIAAAJIACAHIAHAAIAVgOIALAAQAEAEACAEQgLAKgQAGQgJAEgJgDQgKADgJgCIgCgKIACgBQAAgGAJgQIAAgLIAhgZIAAgEIALgHIALgCIALgGQAHgBARgGIAGgFIAXAAQAPABAHgEQAGgRgBgFQAMgWAQgHIAEgBQAJgPAagOIABgBIACgLQANgLAKgFIAKADIADAHIAFAEIAAAJQACAEAAAGIgEAFIgLAJQgJADgQACIgBgDIgJAAIgBgBIgGACIgBAEQgNAHgGAHIgCAHIACgBIgGANIgLAFIAAAFIAFAEIABAEIACAAIAIAIIAGgCIADABIASgDIAHACQAXgDAOgGIAkgPQAOgSALgFIABgEQAGgGAEgLIALgFIALADIAFAEIAGAkIgEADIABACIgEACIgIABIgMgMIgFACQgJAJgQAGIgbALIgFAEIAAAEIgKAEIgLAEIgQAHIgSACQgVAEgOAEIgIAHIgCABIADAFQABAJgBAHIAAABQAOAQABADIABAEIgGAJIADAUIAEADQAVAAAXgJIALgHIAFgFIAOgLIAJAAIAJgGIAKgCIADgKIAQgEIAEAIIAEAHIADALQgPAUgEAMIALAFQABABANAaIgHADIgXgIIgBgDIgPgDIgEgFIgFgCIgEgFIgHgDIgpAFIgFgEIgMACIgGAFIgEAFIgEAEIACAFIgBAHQADANADAQIACASIgCABIADAHIgDANQADAJgDARIgIAMIADABIgDAJIADAEQASgIAZgBIAVABQALgBAMgEIAFACIAHgDQAYACANAMIASgDQAMAGAKgBIAAgLIAGgHIAMgEIAJgMQAEgMgEgKIAFgCIAFgIIAJgDIAMAEIAEAJIgBAJIgYARIgGAJIgBAJIgGAGIgFACQgIAPgIAIIgLAEIgHgEIgPAFQgEgBghAEIgJgCQgWAHgLgBIgLgHIgXADIgBgBQgCABgUABIgTgIQAAAHACAFIgBACIABAJIgIASIgCAHQgHANgJAGQgFADgSAHIgJADIgIACIgPAIIgQAHQgJAEgGAAQgDAAgCgCgAhhC/QgNAFgLALQgMAMgCANIABADIAGABIAMgFQAWgVAQgEQAKgJADgLIgMgCIgUAHgABIg1QgIAFgIAHQAKAEAHAAIAHgDIAHgJIgEgFg");
	this.shape.setTransform(217.95,110.5145);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(37,37,37,0.498)").s().p("AgsDkQgLgDgVgBQgFgFgVgMQgQgKgIgKIgCgFIADgFIgDgMIADgKIAMgPIABgJIAJgFIAFgLIAUgKQAMABAKAHIADAHIgFAKIgMAIIgHgBIgFgGIgFACIgIANQgGAKgCABQACALgDAIQALAVAYALQARAFAKgCIAJACIAMgFIASgLQAGgJAIgSIAAgCQAOgbgBgWIgBgQQAAgMAJgZQAAgQgGgXIAGgJIgBgIIgEAAQgCgUAHgPIgHgRIAEgGIgCgFQACgGABgKIAFgGQABgOgDgaIAEgUIgsABQgOACgdABIgFgCIgHADIgKgBIgcAJQgLAEgNAJQgQALgEAHIgOAKIgDAJIgHAKIABAIQABACAPAGIANAAIANgHIAFAAIADADIAFgDQAGgCANgBQANgBAHgDIAHgDIAJgIIgBgEQgRABgMgEIgGgGIgEgKIAEgMQAMgHAOgFIAFAAIABAEIADABIgBACIAEABIACADIAJAEQALAGALAPIgBAJQgQANgLAMIgbAKQgIgDgXAFQgaAHgHgBIgFACIgLAAIgKgJIgCABIgNgEIgIgPQAAgKABgGIAFgEIARgYQAKgFAPgKIAWgRIARgHIAIgBIAJgBIAZgJQAYABApgFQALgCAdgBIAPgYQAIgMANgIQAVgPALgEQAjgOAZADIAQAIIADAMIgDALQgEAFgSANQgTAOgHADQgeALgXAHQgCAOADAMIgJAKQgBAGAFALIADABIACAPIgGAMIgGACIAFAGIgDAKIAEALQABAZgEAIQACAFgCAKIgBAQIAGAJIgCAcIgEAEIAAAQIgGAKQABAUgGAMIADAMQAAAGgHANIgLAHIgMAVIgfAYQgSAOgOAGIgPACgABqjCQgPAJgFAUIAVgGIAWgIQAQgGAMgNIAFgLQgMACgsANg");
	this.shape_1.setTransform(185.0688,121.3977);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(37,37,37,0.498)").s().p("AhhEDQgOgLgHgTIgCgFIgCgFIAFgaIAQgVQAKgHAOgSIAJgFIAHACIAHgBIAPALIAEAHQgDAKACAMIgHADIgJgBIgIgGQgQABgHgEIgCABIgCAEIgJAIIgEATIgDADQgDAMALASIAJAIIAOACIAZgLIAKgDQAHgBAEgCQAMgJAGgJIgCgDIAFgEIACgHIAJgIIAEgMIgFgKQADgMgGgNQANgjgKgdQADgGABgWIAEghIgDgHIgSASIgGACQgFACgMAHQgKAIgHACIgPgDIgEgCIgGgCQgGgFgVgGIgOgWIgCgbQAAgPAGgNIAPgXQAFgHAagZQAVgUAFgRQAJgEAJgOIAOgYIAEgBIACgMIAQgOQAEgKAGgKIgCgFQAFgFAJgEIAPgGIAYgSQARgFAOAEIAMAKIADAIIgBAIIgDADIACAGIgDAKIgLABIgMgKIgOAAIgIgGIgCgFIgNAAIgMAHQgIALAAALIgGAHIABACIACgBIAFANIAHAIIgBACIACARQgEAFgEAIIABADIgCABIACAKIgEAmIADABIACAFIADADIgCAHIAEAOIALAQQAAAIAEAOQgIARAEAWQgDALgGAJQADAOACAdQgDAJgDARIAAANQgEAKgCARIAFAJQABAEAAAJIgLAjQgCAGgPAWIgsAXIgLADIgKAEIgLAFIgfACgAgQiAQgBACgRAOQgQAPgCAHIgRAOIABACQgIAJgFAEIgCAJIgFAGIAAAXIgCAFQgBAQAHALIgBACIADAEIADAJIAAACIAHADIAHAGIARAEIARgGIADgFQAEgBAggYIgFgMIgEgOIgCgRQgBgPABgEQgGgGgCgKIABgOIgCgFIACAAIABgFIAJgKQADgIgBgMIgDgFg");
	this.shape_2.setTransform(158.925,133.5158);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(37,37,37,0.498)").s().p("Ai0E9IgHAAIgOgOIgCgBIABgZQADgJAKgKQAKgMAIgDIADgBIAGgJQAGgBAGgEIALgIIAagKQAFADAMAAIATABIAaAEIANgDIAGACIAEgBIAEAEIgDAKIgVAIIgkACIgZAAIgcABQgMAFgMAKQgPANgGAEIgEASIACAEIAZAPQADgCAQgDIAVgFQAPgGAfgSIANgKIAdgNIAKgHQAGgFAFgBIAJgKIAIgBQARgMAKgOIAUgeIAXgXQALgOAdgeIgUgJIgFAAQgFgFgGgBIgPgOQgJgDgMgBQgZgSgPgRIgIABIgBgCIgFgDIgEgEIgCAAQgJgEgLgQQgKgEgdgXQgdgXgDAAIgHAEIgCAHIgTAHIgOAPQgEAEAAAJIgGACIABABIgCABIgCAHIAFAQIgBAEIAEADIgCAEQADAHADATIgCABIAAAEIABADIgBADIAAAGIgEAJIABAKIgSAiIgXAcIgGACIgFAJIgdALIgMACQgLAAgDACIgIgCIgCgCQgJADgLgBIgWgLQgHgHgHgLQgDgLAFgUQANgUACgIIANgHQAEgMACgCIAIgDIAHAAIAOAKIAHATIgCAJIgNgBIgKgHIgKgBQgQARgDAYIACAMIAPALQAfAGASgHQASgHAHgLIALgiIgBgZIAAgYIADgDIgBgSQAFgQAEgRIAEgEIgHgNIAGgGQgEgcgCgjIAEgFIAAgIIADgFIgEgGQADgGgCgKIgBgQQAAgVADgfIgKABQgXALgdAgQgEAFgMALIgBAHIgHAHIgCAAQgGAVgHAIIABACIgFAEIADADIgEAEIgFAUIgBABQgCAFACAQIAEAJIAKgCIANgJQAFgGAFgNQAGgNAEgFIgBgKIAEgGIADgTQACgLgDgHIAEgIIAHgCIAIAGIAGANIABASQgKAMgDANIgIAJIABAIQgHAHgBAJIgIAEIABAEIgDAIQgJAJgJACQgJAEgHABQgSgEgLgVIgBABQgEgJABgNQAFgKAJgTQAGgFAQgdIACgBIABgIQAEgHAFgFIAJgJIASgZQAGgGAbgQQAagQAIgCIAKgKIABgQQAKgVAKgGIAFgKIAWgTIAQgRQAGgDAKgJQAJgCAGgJIANgFIAFABQAFAEACAIIgFAGIgIADIgEAKQgTAJgLANIgMAEIgPAMIgLARIgKAWIABAGIAmgLQAHADARgBIAIAFIAHgBIAKAJQAIAIAAAEIADABQAJANAIAUQAFAOgIAXIgFAFIgBAEIABACQAAACgSAYIgIAFIAMACQARAIALALIgCAHIAFAIQAKADAFADIACgBIANADIANAQIAIADIAEAJQAIAGANALQAGABALAFIAFAJIARAIQAEAGAZASIASAOQAMAKAIAAIABACIAEgCIAAACIAGgDIALgKIAMgFIADgDIAQgIIAMgJQAHgGAGgCQAugSAYAHIAcAIIAFAPQABAEgDAHQgDAHAAADIAIAIIgCAIQgFAIgQALIgYAQIgRAEQgRAHgKAIIgIABIgNgEIgKACIgOgIIgEABQgKgIgRABIgNgGIgIACIgIAEIgTAXIgSAPQgOANgCAKIgPAMIgFAKQgJAEggAbQgGAGgYAKQgWAKgGAJIgMADIgIAJQgHADgQAKQgPAJgHADQgaAKgkAGIgBABQgEAAgPgJgADvAwQgFACgJAGQgJAJgEABIgNAHIgVAMIgCADIACADIALAHIAFAAQAOAQALADQAaADAggKQANgHAHgLIgCgKIACgCIACgBIAAgEIAOgUIgCgHIgFgIIgPAAQggAAgUAIgAiWg4QgGAMAEAKIAEAKQANgOAPgEIAGgIIAEgCIgCgEIgFgCIgFgFQgIAAgFgDQgIAHgHADgAiZi/QAFAKAAATIgFAKIACAGIgCAAIABANIgDAFIACAGIgGANIAHAnIAIgJIALgEIAIABIAMgFIAPAFIAOgGQAAgOALgNIABgRIgLgPIACADIgCgLIgHgIQgCgHgHgKQgHgKgCgGQgHgDgIAAQgOAAgQAIg");
	this.shape_3.setTransform(132.4469,153.2048);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(37,37,37,0.498)").s().p("AhLEfIgKACQgGgDgUgBQgTgLgKgGIgKgWIgFgSQACgHAAgNIgDgKIADgFIAHgFIgCgDIAJgEIASAAIAPAJIAFAGIgDAFIAFAUIgBAHIgIADIgRgLIgLACIgBAHIAIAUIAMARQAdACAIAHIARgCIAOgJIAIgNIAFABIAIgIIAFgMQAAgSALgeIgEgmIAJgGIgFgHQgCgNgEgSIAFgIQgCgMgFgNIACAAQAAgLgEgHIABAAIAAgTIAGgNIgBgPIgEgEIACgOIgFgDIAEgPIgGgKIAIgJIAAgEIgFgKIAFgOIgCgFIAEgGQABgMAEgLIgDgHIgCABQgYAOgLAEIgmAiIgSAOQgCABgEAKIgLAIQgBAOgRATQgCATgIAJIgBAFIgFAIIADAJIAAALIAEAAQADAHAGALIAMgHIAFgIIANgJIAKgQIABgKIAEgFQAAgHgDgHQgGgFgFgBIgCgFQABgEAJgKIgBgCIAFgDQAJgCANAHIADANIgCAGIAEAOIgCAPQgHAMgNAHQgGAQgWARIgWAGIgQgDQgDgDgGgCQABgDgGgHQgGgHgBgFQADgOAFgJIACgSIAIgTQAOgWAKgMIANgNIANgSIALgJIASgTQAMgLAbgPQAJgDAOgJQALABAJgGQADgDAEgKIAFgPQAFgLAJgKIAlgrQAKgDAWgRQAUgPAIgJIADgBIAEgBIAIgFIAIgEIAMgDIAMgEIAKANIgCAMQgYAIgOAPIgbAHIgSAOQgLAJgIADIgGABIgJAVIgHADIAAACQgFAFgFAKQgGAJgDAFIAAACIgEAIIAsgRQADgBASgBQAPgBAEgCQALAAAXADQAKAKASAWQADAQACAQQgDAGgBAQQgDARgDAGIgZAeIACACQgGAIgMALQgNAKgCADIgJADIgIAIIABAIIgGAGIgLAAQgHgMgKgEIgDgFIAKgFIAHgFQANgBADgCIATgMIgBgCIAFgFIgBgCIAJgKIAAgIIAMgJIgFgOIABgDQABgIgBgJQgNgOgHgbIgKgIIgFgKIgJgCIgBgEQgPgDgeAMIgQAKQAAAOgFAQIAGATIgBAGIgDABIgBADIADADIACADIgDALIAAACIgBACIADADIADAFIgHAHIACANIADABIAFAEQABAHgFAHIgCABIgBADIAEATQgHAUAHAUIgFANIADAWIAGAKIAFASIgGAOQABAQgDAgIAEANQgIAMgMARIAAALIgMAIIABAEIgJANIgQAKIgJABIgOALIgMgDQgFADgMACg");
	this.shape_4.setTransform(77.55,158.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(37,37,37,0.498)").s().p("AANDJIgBgCQgLABgVgCQgRgLgHgTIgEgXQAIglAGgKQAEgLAagfIgBgGIAFgJIASgKIASgKIAMgDIAOACIABACIAXAOIAGAKIgBAJIACAGIgCAGIgHAKIACAQQgNAVgPAKQgLAJgZAKQgQAAgOgSIgBgCIADgPQAGgKAIgCIAKAAIAJANQgBAIACAEIAMgDIAMgGIALgKIgDgHIgMACIgEgFQgDgKgEgTIAFgKIAAgGIgFgHQgLABgKAFIgIAJIAAAFIgIAFQAAAGgEAHIgHAOIgIAGQgDAEgDAPIgEAGQADAKgEAVIAHAPIARAOQAMgBAMADQAOgEAbgEIAJgFQAMgBAOgFIAEgDIAUgOQAGgIACgLIgBgEIAGgIQABgQADgGQgBgHAEgOIgDgPIgBgOQgIgNABACIgBgHIgCgHIgDgGIgCgGQgLgJgjgkIgIgCIgBgEIgIgFIgOgOIgMgIIgCgBIgBgBIgOgGIgFgJQgJgKgPgDQgRAVgaAVQgbAXgWAJQgIADgRgBQgQAAgIAEIgGgDIgUACQgJACgJgEQgDgOABgGQABgIAHgKQAAgKAIgGIgBgBQAIgJAagKQAYgJAOgCIAFACIAHAGIACAFIgMAHIgHANIgLAHIgJgDIAAgLIgIABQgFAIgWAJIgGAKIAHALQAMADAUgBQAYAAAIgEIAsgZIAwgsQgBgGAFgKQAGgKAAgFQAHgHAFgEIAAgFIAHgEIAEgIQAJgFAIgKIAMgGIALgFIAZgGQANAFAKgDIAAACIAIgBIADADIAOAFIAGANIACAUQgIAPgQAOIgMgCIgGADIgGADQgMAEgeACIABACIACABIAJAHIADgBIADAEQAOADASAOQAQAOAHAPIAJAFIAEAHIAGACQAEAFAEAIQAHAHATANQADAHAJAKQAIAMADAGIAFAdIACgBIADAQIgEALIACAFIgCABIgBAJIgGAGQgDAXgJAJIgBAFQgGAIgIAFIgQALIgcAeIgSAJQgQAGgdACIgQABQgSAAgMgEgADHAxIAAAAgAAvi0QgKAJgKAPIgHAEIABACIgFATIAsgIIADABQADgCAKgCIAPgDIANgJQAIgOABgLIgHgGIgMgDQgNACgMgDg");
	this.shape_5.setTransform(36.4625,178.3558);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("AzNz2IAAgUQFWhoFCg0QDDgfC8gMQMBgzKDEOIAAAUIAAImIAAImIAAWUIjSAAI/ZAAIjwAAIAAnUAAR2OQCMADBmBKAED0+Ig5AZQhHAbhJAOQgjAHggADAlD0+IA5gZQBIgcBIgOQBKgOBBABQkcBOECBOQi5ATiBhcAzNz2IAAXRQQ1plVmkyAvdT+Qi2CTC2BJIfjAAQDXiCjhhaATOziQ13Gowkm8AzNDbIAAJPQTzk5SoqH");
	this.shape_6.setTransform(123,149.8265);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Av4BuQi2hJC2iSIfZAAQDhBajXCBg");
	this.shape_7.setTransform(125.6903,288.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33FF33").s().p("AP8T7I/ZAAIjwAAIAAnVQTzk4SoqIQyoKIzzE4IAApPQQ1pkVmkzQ1mEzw1JkIAA3RQQkG8V3moIAAImIAAImIAAWVg");
	this.shape_8.setTransform(123,150.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AzNAAIAAgTQFWhoFCg0QDEgfC8gMQMAgzKDENIAAAUQqsDPpaAAQp3AAoejjgAhFAIQAbAAAcgDIAFgBQh7gkAAglQABgpCUgpIgCAAIgKAAIAAAAIgBAAQg3AAg+AMIgCAAIgEABIgEAAQhIAOhHAcIg5AZIA5gZQBHgcBIgOIAEAAIAEgBIACAAQA+gMA3AAIABAAIAAAAIAKAAIACAAQiUApgBApQAAAlB7AkIgFABQgcADgbAAIAAAAIgBAAQiOgBhphHIgDgCIAAAAIgDgCIADACIAAAAIADACQBpBHCOABIABAAIAAAAgADKguQhHAbhIAOQgjAGghADQAhgDAjgGQBIgOBHgbIA5gZgAEDhKQhmhKiMgDQCMADBmBKg");
	this.shape_9.setTransform(123,22.7073);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,257.1,301.7);


(lib.shoes4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ArOCLIGGhiIABi8IAAgMIAAhLIB9AAIAIAAIB6AAIAAAUAhIjNIAAADIAACPIAAAMIAAAEQgEAOAEAPIAACqIAABQIqGAAIAAhhIKGARAlfjrIAYABAFIjqIj+AAIAAAUIAAAJIAACSIAAAMIAAAEQAEAOgEAPIAACqIAABQIJ7AAIAKAAIAAgDIAAheIqFARALPCLImGhiIgBi8IAAgMIAAhLAFgjrIgYAB");
	this.shape.setTransform(-6.1,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("ABKAxIAAhPIKFgSIAABdIgXhMQgKAJAEASQACAJAKAYIAIAUgArNAxIAAhhIKFASIAABPg");
	this.shape_1.setTransform(-6.1,31.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF33").s().p("ABKgSQADgPgDgOIAAgEQA1gKAagGQArgLAhgQQAegOAvgeIAVgNIABC8IGHBiIqFARgArNCHIGFhiIABi8IAWANQAvAeAeAOQAhAQAsALQAaAGA1AKIAAAEQgFAOAFAPIAACqg");
	this.shape_2.setTransform(-6.1,13.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("ABKg5IAEgJIgEAAIAAgVID9AAIAABMIgWAOQguAegPAJQgcAOgpALQgmAMgzAGQgIABgEACgAhVBVQgygGgngMQgogLgcgOQgQgJgtgeIgYgOIAAhMIB9AAIAHAAIB7AAIAAAVIgFAAIACAFIADAEIAAADIAACOQgGgCgHgBg");
	this.shape_3.setTransform(-6.1,-1.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AKQGAIgHgUIAJAAIAAgEIAAAEIgJAAIgIgUQgKgYgBgKQgEgSAJgJIAXBNIAIAegANPDmIALgMQAEADgHAJIgGAGIglAjIgVAMIA4g1gAgXCVQgJgCgGgQIgWg0IgWA0QgGAQgJACQgIACgKgIIgDgDQgKgLgFgPIAAgCQgEgPAEgOIABgDIgBAAIAAgMIAAAMQg1gKgagHQgsgLghgPQgegOgvgdIgVgOIAAgLIAAALIhTgzIiAA3IgJADIjTBYIgoAQIAAgNIAogRIC9hOIAWgJIB+g0IiUhbQgSgLgHgGQgOgLgGgMQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQADAAADACQACABAEAIQAGALAPAIIAaAMIAEACQAQAIAkAYIBUA2IA8gZICGg6IBdgqQAQgQASgRIAKgJIAoghIgCgBIhEgkIgugZIAAgFQAPAAASAIQAMAFAaAQIABABIAqAaIAIAFIAogfIAWgQIBJg2IAKAAIhZBGIguAlIAYANIAqgYIAqgaIABgBQAZgQANgFQARgIAQAAIAIAAIgIAFIguAZIhEAkIgjASIAeAQIAVAKIAEADQArAVA5AaICAg8ICVhGIAhgQIAAALIgKAFIicBGIiKA/IAxAVICGA6IA7AZIA+gnIAAALIgzAgIAzAWIAAAMIg/gbIhSAzIAAgLIBEgqIAEgCIhIggIAYAAIgYAAIg4gZIhvgyIjgBoIADAFIATAoQAXAtATAtIAqhaIATgoQAFgLAHgCIAEAAIgEAJIAAgJIAAAJIgfBAQgTAogSApIAVAyQAHARAJAEQAJgDAGgJIABgBQAEgIABgJIgBgUQgBgMAGgGIAGgDQAFgCAHgBQAzgGAmgMQApgLAcgOQAPgJAugdIAXgPIAAALIgWAOQgvAdgeAOQggAPgsALQgaAHg1AKIAAgMIAAAMIgBAAIABADQAEAOgEAPIgBACQgEAPgKALIgDADQgIAGgHAAIgDAAgAnLhLIADACIBFAqIAXAPQAtAdAQAJQAcAOAoALQAnAMAyAGQAIABAFACIAGADQAGAGgBAMIgBAUQAAAJAFAIIABABQAGAJAJADQAJgEAHgRIAWgyIgmhRIgeg+IgBABIAAgDIgCgEIgDgFIAFAAIAEACQBggpBxg1IAPgHIhhgvIgigRIgYgMIgYAMIgiARIg3AbQgxAwghAyIgIAAQAcgsAogrIiIA+Ig4AZIgYAAIAYAAIhIAggAh9j5IgVASIgOANIAlgSIAFgDIAVgKIAegQIgXgMIgjAcgAIfAKIAgAAIB7AzIAAAOIibhBgAANhNgAmDhrgAtakwIAegPIAKgFIARgIIgRAKIgEADIgkAWg");
	this.shape_4.setTransform(-0.0054,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,-39,171.9,78.1);


(lib.shoes2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFfjrIgXABIj/AAIAAAUIAAAJIAACSIAAAMIAAAEQAEAOgEAPIAACqIAABQIJ8AAIAKAAIAAgDIAAheIqGARALPCLImHhiIAAi9IAAgLIAAhLAlHjqID+AAIAAAUAlfjrIAYABArOCLIGGhiIABi9IAAgLIAAhLAhJjNIAACSIAAAMIAAAEQgEAOAEAPIAACqIAABQIqFAAIAAhhIKFAR");
	this.shape.setTransform(-4.45,-6.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABJAYQAFgPgFgNIAAgDQA1gKAbgHQAsgLAggPQAcgNAqgbIAHgEIAVgOIACC9IGGBhIqGASgArOCyIGHhhIABi9IAVAOIAHAEQAqAbAcANQAhAPArALQAaAHA2AKIAAADQgEANAEAPIAACsgABJilIAFgJIgFAAIAAgVID+AAIAABMIgWAPIgWAOIgoAZQgbAOgpALQgmAMgzAGQgHABgGACgAhVgWQgzgGgmgMQgpgLgcgOIgmgZIgXgOIgWgPIAAhMID+AAIAAAVIgFAAIAFAJIAACSQgFgCgIgBg");
	this.shape_1.setTransform(-4.45,-10.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0099").s().p("AlCAxIAAhhIKFASIAABPg");
	this.shape_2.setTransform(-44.05,12.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCFF33").s().p("AlCAxIAAhPIKFgSIAABdIgBgDIgXhJQgJAJAFASQABAJAJAYIAGANIADAHg");
	this.shape_3.setTransform(35.15,12.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AO2FhIgegdIgHgGQgOgOAFgEIAQAQIAeAdIAWAUgAKgDAIgHgUIAJAAIAAgEIAIAegAKZCsIgDgHIgFgNQgKgYgBgKQgEgSAJgJIAWBKIABADIAAAEgAKiCoIAAAAgAudBQIgDgCIgiggIgGgHIgDgEIAHAAIAkAjIAKAJIAOAOgAM/BEIArgqQAFADgOAOIgiAiIgDABIgVANIAYgXgAgHgqQgJgCgGgQIgWg0IgWA0QgGAQgJACQgIACgKgJIgDgCQgKgLgFgPIAAgCQgEgPAEgOIABgEIgBAAIAAgLIAAALQg1gKgagGQgsgLghgQQgbgNgrgaIgHgFIgVgNIAAgLIAAALIhTgzIiAA2IgjAPIg0AWIhPAhIAAgOIBPghIAUgIIAkgPICUg9IiUhcIgEgCIATAAIADABIAHAEIAZAPIAQAKIAHAFIABABIAlAYIAvAeIA8gaIALgEIA6gZIAMgFIAXgKIAegNIAEgCIAMgFIASAAIgLAFIghAPIgWAKIgLAFIgLAFIgtAUIgLAFIgYgBIAYABIhIAgIADACIBFAqIAXAOIAWAPIAnAZQAcAOAoALQAnALAyAHQAIABAFACIAGADQAGAGgBALIgBAVQAAAJAFAHIABACQAGAIAJAEQAJgFAHgRIAWgxIgghHIgGgLIgfhBIgFgJIAFAAQAGADAGALIATAoIAPAfIAbA8IAcg8IAOgfIATgoQAFgLAHgDIAEAAIgEAJIAAgJIAAAJIgfBBIgFALQgRAkgPAjIAVAxQAHARAJAFQAIgEAGgIIABgCQAFgHABgJIgBgVQgBgLAGgGIAGgDQAFgCAHgBQAzgHAmgLQApgLAcgOIAngZIAWgPIAXgOIBEgqIAEgCIhIggIAYgBIgYABIgMgFIgsgUIgLgFIgLgFIgWgKIghgPIgLgFIASAAIALAFIAFACIAeANIAXAKIAMAFIA6AZIALAEIA7AaIAvgeIAlgYIACgBIAHgFIAPgKIAZgPIAHgEIAEgBIATAAIgFACIiTBcICUA9IAkAPIBFAdIBRAiIADABIAAANIgDgBIhRghIhlgrIgjgPIiBg2IhSAzIAAgLIAAALIgWANIgHAFQgqAagcANQggAQgsALQgaAGg1AKIAAgLIAAALIgBAAIABAEQAEAOgEAPIgBACQgEAPgLALIgDACQgIAHgFAAIgEAAgAEbjUgAAdkOgAlzkrg");
	this.shape_4.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.1,-36.5,194.3,73);


(lib.redbottoms = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFgjrIgYABIj+AAIAAAUIAAAJIAACSIAAAMIAAAEQADANgDAQIAABUIAABWIAABQIJ8AAIAJAAIAAgDIAAheIitAFIkghfIi4AVAFIApIAAi9IAAgLIAAhLAlfjrIAYABID+AAIAAAUAlHApIAAi9IAAgLIAAhLAhJjNIAACSIAAAMIAAAEQgEANAEAQIAABUIAABWIAABQIqFAAIAAhhIBaACIGshVIB/AOAlHApIB/APAp0CNIIrAPArOCLIGHhiAFIApIhGAIALPCLImHhiAIiCQInYAM");
	this.shape.setTransform(-10.2,5.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("ABJAxIAAhPIHZgNICsgFIAABdIgXhMQgIAJAEASQABAJAJAYIAJAUgArOAxIAAhhIBaADIIrAPIAABPg");
	this.shape_1.setTransform(-10.2,24.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABJBuIAAhWQAFgPgFgNIAAgDQA1gKAagHQAsgLAhgPQAegOAvgeIAWgOIABC9IhHAIIBHgIIGFBhIisAFIkgheIEgBeInZANgABJBuIC5gVgAp0C1IGshWIB/APIAABWgArOCyIGHhhIABi9IAVAOQAvAeAeAOQAhAPArALQAaAHA1AKIAAADQgDANADAPIAABWIh/gPIh/gOIB/AOImsBWgAjIBfgABJilIAFgJIgFAAIAAgVID/AAIAABMIgXAPQguAegQAJQgcAOgoALQgnAMgyAGQgHABgGACgAhVgWQgzgGgmgMQgpgLgcgOQgPgJgugeIgWgPIAAhMID9AAIAAAVIgEAAIAEAJIAACSQgEgCgIgBg");
	this.shape_2.setTransform(-10.2,1.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("ANQGpQgEgFADgCIAHAHgAurGpIhAgbIhCgcIAAgMIBgAnIBDAcgAJnE2IgHgVIAIAAIAAgDIAAADIgIAAIgJgTQgJgYgBgLQgEgRAIgJIAXBNIAJAegAwtElIAWgPQApgcAPgGIAagMQAPgIAHgLQADgIACgBQADgCADAAQABAAAAAAQABABABAAQAAAAAAABQABAAAAABQgGAMgOALQgHAGgSALIhgA7gAPQETIAogRIA2gWIAAAOIg2AWIgoARgAMxCQQAFADgOAOIglAjIgVANIBDhBgAshBSIARAIIAAACIgRgKgAwtBPIAvgWIB6g2IApgQIBkgqIBZgkICTg9IiThcQgSgKgIgHQgNgKgGgNQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQADgBACACQADACAEAHQAFALAPAIIAbAMQAPAHApAcIBUA1IA7gZICGg5QBdgpA+gfIAFgCIAzgbIgjgSIhyg9IAAgFQAPAAARAIQANAGAaAQIArAbIAqAYIAqgYIAsgbQAYgQANgGQARgIAQAAIAHABIgHAEIhyA9IgjATIAzAaIAFACQA8AfBdApICGA5IA8AZIBUg1QApgcAPgHIAagMQAPgIAHgLQADgHACgCQADgCADABQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAQgGANgOAKQgHAHgSAKIiTBcICTA9IBnAqIBWAkIAAANIhWgjIiGg4IiAg2IhSAzIAAgMIAAAMIgWANQgvAegeAOQghAQgsALQgaAGg0AJIAAgLIAAALIgBAAIABAEQAFAOgFAPIAAABQgFAQgKALIgDACQgKAIgIgCQgJgCgGgPIgWg0IgWA0QgGAPgJACQgIACgKgIIgDgCQgLgLgEgQIgBgBQgDgPADgOIABgEIgBAAIAAgLIAAALQg1gJgagGQgrgLghgQQgegOgvgeIgVgNIAAgMIAAAMIhTgzIiBA2Ih3AyIhkApIgpARIgIADIihBGgAgciYIgfBBQgTApgSApIAVAwQAHARAJAFQAJgEAGgIIABgCQAFgHAAgJIgBgVQgBgLAHgFIAFgEQAGgCAHAAQAxgHAngLQAogLAcgPQAQgIAugfIAXgPIBEgqIAEgCIhIgfIAXgBIgXABIg5gZQhrgwhpg1Ig6gdIg6AdQhqA1hsAwIg3AZIgZgBIAZABIhIAfIADACIBFAqIAWAPQAuAfAPAIQAcAPApALQAmALAzAHQAIAAAEACIAHAEQAFAFgBALIgBAVQABAJAFAHIABACQAGAIAJAEQAJgFAHgRIAWgwIgmhSIgghBIgEgJIAEAAQAHACAFAMIAUAoQAWAuAUAtIAqhbIATgoQAGgMAGgCIAFAAIgFAJIAAgJIAAAJIAAAAgAQug+IAAAsIgFAPIgQAnIgKAGIAfhogADihegAPQhqIAogUIARgJIgRALIgoAYgAgciYgAmsi1gAwtkNQBahCBPgrIApgUIARgJIgRALIgpAYQhWA2hTA8gAJ/mXIARAJIAAACIgRgLg");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-42.4,214,84.9);


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
	this.shape.graphics.f("#FF00CC").s().p("AByFhQgWgGgTgbIg0hQQgagngdgYIASgIQBhgyCfhsQCdhrAbgQQBYgyBqhEQA8gmB/hVQhKDegdDeQgHA0gFAVQgKApgUAcQgGgPABgUQAAgMAEgZQAEgXAAgNQAAgUgEgYQgFgYBPjyQBPjyh+DxQh9DwgTAXIgdAqQgSAZggAbQgTAPgrAcQhFAvgpAXQg+Alg4AXQgSAGgLADIgQABQgIAAgGgBgAjKBmQhygigsggIgdgXQAdgRA2gnQDFiQAkAHIAwAHQBVAKBmgTQBNgPBoglQgYAXgLAMQgRAUgGATQgGAXjFCxQhtBkgRAcQgtgghxgigAskh2QAvAGAbgHQASgEAOgKQAOgLAEgNQAIgggxggIglgZQgUgOgIgPQA/AiAvgIQAXgEAOgPQATA9AjBaQA/CfANAUIAXAkQAMAVgCAQQjAhpiIiUgAmpgLQgVgKhvjHQghg7gXgkQB7AZByAqIBGAZQAoAOAZAGQAaAGiRCVQgeAfgPARQgLgGgJgFg");
	this.shape.setTransform(110.675,54.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AIaH/IgEgDQgMgKgCgPQgBgOAHgOQAFgLAMgOIAUgXQAxg5AHhEQgxAUhNA3QhQA6gsATQhOAkhyAHQhIAFiEgIQgegCgRgEQgZgHgKgOQgNgRANgVQANgUAZgIQAWgHAeAAQARAAAjAEQgQgggKgPQgPgagTgSQgWgVgdgMQgfgOgfABQAWAMgHAZQgIAXgZAKQgWAIgfgCQgWgCgfgHQhmgahPgkQhbgphghHQg6gshphbIiXiEIgXgUIgPgPQgTgUgLgTQgLgXABgWQABgZARgSQAOgPAXgFIAMgCQANgCAMABQAQACAMAKQgKhPAFhIQABgTAEgLQAGgQANgIQAUgMAcAGQAaAHARARQANANAMAXIAUAmQEEAWDwBXIA8AWQAjANAbAGQAXAFAjAEIA6AHIA4AJQAiAGAYABQBbAFBtglQB7gpBkhIQAagTAIgFQAUgMASgGQAWgHAXADQAYAEAMAOQAMANgDATQgCAPgLARIgVAeQgNARgDAOQB+hJBqhWQBGg5AvASQAoAQgCA6QgCAugSA+QgKAkgZBHQgfBmgWCLQgRBygIAiQgUBTgkA7QggAzgyArQgzArhAAdIgSAIQgTAHgSABIgMABQgUAAgOgJgAK8jIQhqBEhYAyQgbAPidBsQifBshiAxIgSAIQAdAYAbAnIA0BRQATAbAWAFQANADARgDQALgCASgHQA4gWA+glQApgYBFguQArgcATgQQAggaASgZIAdgrQATgWB9jwQB+jyhPDzQhPDxAFAYQAEAYAAAVQAAAMgEAYQgEAYAAAMQgBAVAGAPQAUgdAKgoQAFgWAHgzQAdjfBKjeQh/BVg8AngAjggOQg2AngdARIAdAXQAsAgByAjQBxAhAsAhQARgdBuhkQDFiwAGgXQAGgTARgUQALgNAYgWQhoAkhNAPQhmAUhWgLIgwgHIgDAAQgoAAi9CJgAmKClQACgRgMgVIgXgjQgNgVg/ifQgjhZgTg+QgOAPgXAEQgvAIg/giQAIAPAUAPIAlAYQAxAhgIAfQgEAOgOALQgOAKgSAEQgbAGgvgFQCICTDABqgAnbi/QBvDHAVAKQAJAEALAIQAPgTAegeQCRiUgagGQgZgHgogNIhGgaQhygph7gZQAXAjAhA7g");
	this.shape_1.setTransform(102.4736,52.0168);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205,104);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AsEhaQArhoCYhpQMXCaEziaQDvBGAbCMAsEhaQOsFIJrlHAsEhaQhBCcCwCcQLTCcJXicQCWi5gYh+");
	this.shape.setTransform(345.014,-10.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC33CC").s().p("AqVDeQiwicBBicIAIADIAEABIAJADIAFACQHICbF6AAIABAAIAAAAQGFAAE1ijQAYB+iWC5QksBOlKAAQlKAAlqhOgABYBKQl6AAnIibIgFgCIgJgDIgEgBIgIgDQArhoCYhpQMXCaEziaQDvBGAbCMQk1CjmFAAIAAAAIgBAAg");
	this.shape_1.setTransform(345.014,-10.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(265,-41,160.10000000000002,62);


(lib.hand = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHCgSQABgBABAAQAHgBAIgBQgBgHgOAJABPmTQAHhKgLAhQACAVACAUQArG6AABTQB9gNDLh/QgvAfiyDQQg3B4g5A7QhqBththtQg7g7g8h4QiLkUg8hzQhRiaA9CGQAKAKAKAKQDADEAHAKIAAgkAhMlkQAGh+gKBuQACAIACAIQBGFQAPCRQA7mYALh4AkZlOQCrFFAyCFQgjh/APkaQACgqACgdAkZlOQgbhwAYBrQABACACADgAjdAkQAGBAAwA3QhWlxgch4");
	this.shape.setTransform(46.7352,45.4512);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC33CC").s().p("Ah0F3Qg7g7g8h4QiMkUg8hzQDBDEAHAKQAGBAAvA3IhynpQCsFFAxCFQgjh/AQkaIADhHQBHFQAPCRQA6mYAMh4QAqG6ABBTQB8gNDMh/QgwAgixDPQg4B4g4A7Qg1A2g1AAQg2AAg3g2g");
	this.shape_1.setTransform(48.175,47.9875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,95.5,92.9);


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
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AGWEEQAwj2kwjCQEBiFAIk4QAZFDEYBrQipAMiRG7gAmVEEQgwj2EwjCQkBiFgIk4QgZFDkYBrQCpAMCRG7gAlnJWQAFANAEAPAGUJWQAEgPAFgN");
	this.shape.setTransform(71.975,62.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00CC").s().p("ACWACQEBiEAIk4QAZFDEYBrQipAMiRG7QAwj2kwjDgArPgMQEYhrAZlDQAIE4EBCEQkwDDAwD2QiRm7ipgMg");
	this.shape_1.setTransform(71.975,44.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,152,133.2);


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
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AOcDUQAKgIAKgJQCNh1AAilQAAimiNh1Qgygqg7gbALMndQg2gKg6AAQjHAAiNB1QiNB1AACmQAABVAlBHADFCAQAdAjAmAgQCNB2DHAAQCGAABqg1AkcDQQALgIALgJQCMh1AAilQAAimiMh1Qgzgqg7gbAF0HqQgBABAAABQgBgBABgBQAHgYAJgVQgGAVgJAYgAnsnhQg1gKg6AAQjHAAiNB1QiNB1AACmQAABVAlBHAvyB7QAcAlAnAfQCNB2DHAAQCFAABsg1AmKHqQAAABABABQgCgBAAgBQgJgYgGgVQAJAVAHAYg");
	this.shape.setTransform(108.5,49.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AOYF4QgGgCgFgDIgHgFQgJgHgDgIQgDgIAAgNIgBgWQgCgOgOgVQgdgsg2guQgcgYhIg3IgGgEQgIAxggApQgUAZgbAUQgdATghALQgkAMgmABQgnABgzgMQgdgHg7gQIgSgFIgIgDQgOgFgIgIQgIgHgCgJQgDgKACgJIADgIQADgFAFgEQAHgHALgEQASgGAfAHQAQADAbAJIArAMQA1APAlgGQAXgEAVgLQAVgMAOgQQAdggACgsIAAgTQABgLAEgHQABgEAEgEIgGgGQgzgugZgvQgeg4AHgzQAGgrAegiQAYgbAqgXQAggQAygSQA7gUAvgJQAYgFAVgBQAhgDARAIQALAFAHAJQAHAKAAAKIAAAFQgBAIgFAHQgGAKgLAFQgJAFgPABIgaADQgoADg2ARQggALgeAMQgaALgQAKQgVAOgKAQQgSAbAJAiQAHAaAWAfQAhArBAAxQBKA4AkAcQAXASAYAWQAsAoAaAiQAgAsAKAqQAEANAAALQAAAIgCAHQgEAXgUAKQgJAGgMABIgFAAQgJAAgHgCgAkfF0IgLgEQgEgCgDgEQgIgGgEgJQgDgIAAgNQAAgRgBgFQgCgOgOgVQgdgsg1guQgdgYhIg2IgGgFQgIAxggApQgUAZgbAUQgcAUgiAKQgkAMgmABQgnABgzgMQgdgHg6gQIgTgFIgHgDQgOgFgJgHQgHgIgDgJQgDgKACgJIAEgIQACgEAFgFQAHgHALgEQASgFAfAGQARAEAaAIIArANQA1AOAlgGQAXgEAVgLQAVgLAPgRQAcggACgsIAAgTQABgLAEgHIAFgIIgGgFQgzgvgZgvQgeg4AHgzQAGgrAegiQAZgbAqgWQAfgRAygSQA7gUAvgJQAYgEAVgCQAhgDARAIQALAFAHAKQAHAJAAAKIAAAFQgBAIgEAHQgHAKgKAFQgKAFgOACIgaACQgpADg2ASQggAKgdAMQgaALgQAKQgWAOgKAQQgRAbAIAiQAHAbAXAeQAgAsBAAxQBLA3AjAcQAXATAYAVQAsAoAaAjQAgArALAqQADANAAAMQAAAIgBAHQgFAWgUALQgJAFgMABIgHAAQgHAAgHgCg");
	this.shape_1.setTransform(102.0432,38.0966);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663399").s().p("AEIEdQgmgggdgkIATAFQA6ARAdAGQAzAMAngBQAmAAAlgMQAggLAdgUQAcgTATgaQAggpAJgwIAFAEQBJA2AbAYQA2AuAeAsQANAWACAOIABAVQABANADAIQACAJAJAHIAIAFQhrA0iGAAQjHAAiNh1gAuvEZQgngggcgkIATAFQA6ARAdAGQAzAMAnAAQAmgBAlgMQAhgLAcgUQAbgTAVgaQAfgoAIgxIAHAEQBHA2AdAZQA1AuAdArQAOAWACAOQABAEAAARQAAAOAEAHQADAJAIAHQAEADAEACQhsA1iFAAQjHAAiNh2gAOXEVQgKgqgggrQgagjgrgnQgZgWgWgSQglgdhKg2QhAgygggsQgXgegHgbQgJgiASgbQALgQAVgNQAQgKAZgLQAegNAggKQA2gSApgDIAagCQAPgCAIgFQAMgFAFgKQAFgHABgHQA7AbAyAqQCNB1AAClQAACmiNB1IgUARQgBgLgEgOgAkfESQgLgrgggrQgagjgrgnQgYgWgYgSQgjgdhLg2QhAgygggsQgXgegHgbQgIgiARgaQALgRAVgNQAQgKAagLQAdgNAggKQA2gSApgDIAagCQAOgCAKgEQAKgGAHgJQAFgHABgIQA6AbAzAqQCMB1AACmQAACliMB1IgWARQAAgLgDgNgAFBCkIgrgNQgbgIgRgEQgfgGgSAGQgKADgIAIQgEAEgDAFQglhIAAhVQAAilCNh1QCNh1DHAAQA6AAA2AKQgwAIg6AVQgzARgfARQgqAWgZAcQgeAigGAqQgHAzAfA5QAZAuAyAvIAGAGQgEADgBAEQgEAIAAAKIgBATQgCAsgdAgQgOARgUALQgVAMgYADQgLACgMAAQgdAAglgKgAt3CgIgqgNQgbgIgQgDQgfgHgTAGQgLADgHAIQgEAEgDAFQglhIAAhUQAAimCNh1QCNh1DHAAQA7AAA0AKQguAJg7AUQgzARgfARQgqAWgZAcQgeAigGAqQgHA0AfA4QAZAvAyAvIAGAFIgFAIQgEAHAAALIgBATQgBArgdAhQgPAQgVALQgUAMgYADQgLACgMAAQgdAAgmgKg");
	this.shape_2.setTransform(108.5,40.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,225,106.4);


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
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AB7gPQAkgZA8gfQB6g/CBgeQC0gqCpAdQDUAlC1CSASqAcQgjAZg9AgQg/AfhAAYQgGACgGADQg4ATg4ANQi0AqipgdQjTgli1iTANAgKQAABEgtAwQgrAyg+AAQg+AAgsgyQgsgwAAhEQAAhFAsgxQAsgxA+AAQA+AAArAxQAtAxAABFgAh6APQgkAag8AfQg/AhhAAXQgGADgHABQg3AUg4ANQi1AqipgeQjTgki1iSAoHgEQAABHgvAzQgtA0hBAAQhCAAgug0QgugzAAhHQAAhJAugzQAugzBCAAQBBAAAtAzQAvAzAABJgAypgbQAjgZA9ggQB6g+CBgeQC0gqCpAdQDTAlC1CT");
	this.shape.setTransform(121.225,20.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663399").s().p("AsSB8QgugzAAhJQAAhIAugzQAugzBBAAQBBAAAuAzQAuAzAABIQAABJguAzQguAzhBAAQhBAAgugzgAJBBvQgrgwAAhEQAAhFArgxQAsgwA+AAQA+AAAsAwQAsAxAABFQAABEgsAwQgsAyg+AAQg+AAgsgyg");
	this.shape_1.setTransform(121.075,19.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,250.5,48.3);


(lib.diamondgrills = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAggqIAuAAIAAAZABOASIAAAZIgtAAAhNgVIAAgVIAmAAAggArIgtAAIAAgZ");
	this.shape.setTransform(15.525,9.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(8,1,1).p("AJni6ID3AAIAAC6IAAC7Ij/AAIAChkAJiA5IABg5IAEi6AFoAAIAGi6ID5AAAFoAAID7AAID7AAABJAAIAHi6IEeAAAFhC7IkfAAIAHi7IEfAAAJfC7Ij+AAIAHi7AjlAAIADi6AjpC7IAEi7IEuAAAoSAAIAEi6IEsAAIEyAAAtdAAIAAi6IFPAAAoVC7IlIAAIAAi7IFLAAIEtAAAoVC7IADi7AjpC7IksAAABCC7IkrAA");
	this.shape_1.setTransform(86.2,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFCC").s().p("ABYBiIBvg7IBvA7IhvA8gAFuBfICShQIBUAtIAbAPIgdAPIh1BAgAn8BfIBug9IBuA9IhuA7gAJoBaIBug7IBuA7IhuA8gAjDBaIBvg7IBtA7IhtA8gAs2BTIBug8IBvA8IhvA7gAjDhVIBvg9IBtA9IhtA7gAn8hVIBug9IBuA9IhuA7gAFnhaIBvg7IBvA7IhvA9gABfhaIBvg7IBvA7IhvA9gArxgwIgtgZIgmgTIAmgUIAmgWIAjgTIAEADIBrA6IhuA7IgBAAgAJhhhIBug8IBvA8IhvA7g");
	this.shape_2.setTransform(87.65,18.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AJfC7IAChkIAcgQIgbgOIhTgtIiSBPIBvA8IB1hAIgCBkIj/AAIAHi7ID8AAIgBA5IABg5IAEi6ID3AAIAAC6Ij7AAID7AAIAAC7gAJ2BXIBvA8IBug8Ihug8gAJvhkIBvA7IBug7Ihug9gAFgC7IkdAAIAGi7IAHi6IgHC6IkuAAIEuAAIgGC7IksAAIAEi7IADi6IEyAAIEeAAIgHC6IAHi6ID5AAIgEC6Ij8AAIkeAAIEeAAIgHC7gABnBfIBuA7IBvg7Ihvg8gAi1BXIBvA8IBug8Ihug8gAi1hZIBvA8IBug8Ihug8gAF2hdIBuA8IBvg8Ihvg8gABuhdIBvA8IBug8Ihug8gAoVC7IADi7IgDC7IlIAAIAAi7IAAi6IFPAAIgEC6IAEi6IEsAAIgDC6IktAAIEtAAIgEC7gAnuBbIBvA8IBug8Ihug8gAsoBPIBvA8IBug8Ihug8gAoSAAIlLAAgAnuhZIBvA8IBug8Ihug8gArBgjIAggRIAtAAIAAgZIAhgRIghgSIAAgZIguAAIgggRIgFgCIgjATIgmAAIAAAVIglAUIAlAUIAAAYIAtAAIAcAPIABAAgAjlAAgAjii6g");
	this.shape_3.setTransform(86.2,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,180.4,45.4);


(lib.cartiers = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFF33").ss(8,1,1).p("AD8AAIAAC7It5AAIAAl1IN5AAIAAC6IGCAA");
	this.shape.setTransform(63.75,18.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(8,1,1).p("Am8i6IN5AAIAAF1It5AAIAAi7g");
	this.shape_1.setTransform(171.975,18.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663399").s().p("ADBC7IAAi7IAAi6IN5AAIAAF1gAw5C7IAAl1IN5AAIAAC6IAAC7g");
	this.shape_2.setTransform(108.225,18.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,224.5,45.4);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIgBAAIgDgBIgFAAQgEAAgEACIgHAFIAAAlg");
	this.shape.setTransform(11.5,0.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(5.925,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_2.setTransform(1.025,0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOAcIAAgeIgBgHIgBgFIgEgEIgGgBQgDAAgEACIgIAGIAAAnIgJAAIAAg2IAJAAIAAAGIAJgFQAEgCAFAAQAJAAAEAGQAFAFAAAJIAAAjg");
	this.shape_3.setTransform(-4.175,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_4.setTransform(-10.275,-0.125);

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


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.mc12 = new lib.eyes2("synched",0);
	this.mc12.name = "mc12";
	this.mc12.setTransform(0,0.05,0.5852,0.7286,0,0,0,121.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.mc12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-73.6,-17.3,147.2,34.7), null);


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
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(52.7,84.1,0.4815,0.4238,0,0,0,109.5,64.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgXEmIgfgBQgSgCgNgGQgLgFgJgJQgTgCgLgGQgfgPgIghIgBgFQgIgHgGgJIgEgGQgZAGgYgMQgPgIgKgNQgLgOgDgRQgCgJAAgSQgBgkAJgSQAHgLAGgGQAPgQAXgGQAGgHAIgFQAMgIAjgMIABAAQgFgLgCgMQgCgUAJgUQAIgTARgMQAOgKARgCIAMgBQgDgNAAgQQgBgXADgNQADgJAFgJQgCgUAJgRIAIgNQAIgLALgIQALgIAPgEIDeAAIALALQATAAARAKQAMAIAKALQAOAQAGARIAAA4QgDAJgGAIQgKANgOAIQAEAKABANQABATgGAQQAEAHADAJQAGAWgGAVQgDAKgGAJQAJAMAFAOQAKAigUAeQgHALgKAHQAJARAAATQgBAWgMASQgHALgKAHIAAAIQAAAVgNASQgMASgUAJQgTAIgmAAg");
	this.shape.setTransform(75.5702,29.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,107.4,112.5);


(lib.shoes8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shoes2("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.1,-36.5,194.3,73);


(lib.shoes6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shoes2("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.1,-36.5,194.3,73);


(lib.shoes5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shoes2("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.1,-36.5,194.3,73);


(lib.rarm = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.hand("synched",0);
	this.instance.setTransform(100.7,125.6,0.8856,0.8318,-160.0101,0,0,46.6,45.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhFnoQgcJpm8hxQghgIgjgLID5CqQEuB1ASmwQArE6CqhxQAEgDAFgEQBMg2BniMIiKFBQCPBWgLC1QgBAYgEAZIDyAAQAHgmACglQASkUjyiFIDpntQo6LFhtrFg");
	this.shape.setTransform(61,48.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC33CC").s().p("AFeHpQAEgZABgYQAKi0iOhXICJlBQhlCNhOA1IgJAHQipBxgrk6QgRGwkvh1Ij5irQAkAMAgAJQG9BwAbppQBsLFI7rFIjpHsQDyCFgTEWQgBAkgHAmg");
	this.shape_1.setTransform(61,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,134.4,167.2);


(lib.Face1_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.barblue();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.barblue(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-11,72,22);


(lib.arms = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.rarm("synched",0);
	this.instance.setTransform(76.25,87.6,1,1,0,0,180,76.2,87.6);

	this.instance_1 = new lib.rarm("synched",0);
	this.instance_1.setTransform(225.7,140.95,1,1,55.4915,0,0,76.4,87.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.1,-1,305.59999999999997,229.7);


// stage content:
(lib.MPHFinalRContreras = function(mode,startPosition,loop,reversed) {
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
		this.mc1.on("pressmove", dragMe);
		this.mc2.on("pressmove", dragMe);
		this.mc3.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
		
		this.Face1_btn.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.mc12_.x = 727;
			this.mc12_.y = 180;
		}
		this.mc1.on("pressmove", dragMe);
		this.mc2.on("pressmove", dragMe);
		this.mc3.on("pressmove", dragMe);
		this.mc4.on("pressmove", dragMe);
		this.mc5.on("pressmove", dragMe);
		this.mc6.on("pressmove", dragMe);
		this.mc7.on("pressmove", dragMe);
		this.mc8.on("pressmove", dragMe);
		this.mc9.on("pressmove", dragMe);
		this.mc10.on("pressmove", dragMe);
		this.mc11.on("pressmove", dragMe);
		this.mc12.on("pressmove", dragMe);
		this.mc13.on("pressmove", dragMe);
		this.mc14.on("pressmove", dragMe);
		this.mc15.on("pressmove", dragMe);
		this.mc16.on("pressmove", dragMe);
		this.mc17.on("pressmove", dragMe);
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Body Parts
	this.Face1_btn = new lib.Face1_btn();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(99,572.95);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 1);

	this.mc11 = new lib.Symbol4("synched",0);
	this.mc11.name = "mc11";
	this.mc11.setTransform(265.3,44.1);

	this.mc9 = new lib.Symbol3("synched",0);
	this.mc9.name = "mc9";
	this.mc9.setTransform(94.85,266.15);

	this.mc15 = new lib.shoes8("synched",0);
	this.mc15.name = "mc15";
	this.mc15.setTransform(460,228.75);

	this.mc1 = new lib.shoes6("synched",0);
	this.mc1.name = "mc1";
	this.mc1.setTransform(460,150.75);

	this.mc16 = new lib.shoes5("synched",0);
	this.mc16.name = "mc16";
	this.mc16.setTransform(736.2,530.65);

	this.mc14 = new lib.shoes4("synched",0);
	this.mc14.name = "mc14";
	this.mc14.setTransform(458.25,374.95);

	this.mc13 = new lib.shoes2("synched",0);
	this.mc13.name = "mc13";
	this.mc13.setTransform(465.2,312.9);

	this.mc2 = new lib.redbottoms("synched",0);
	this.mc2.name = "mc2";
	this.mc2.setTransform(469.85,460.05);

	this.mc9_1 = new lib.eyes3("synched",0);
	this.mc9_1.name = "mc9_1";
	this.mc9_1.setTransform(87.6,170.3,0.5852,0.7286,0,0,0,108.5,49.2);

	this.mc4 = new lib.Symbol2("synched",0);
	this.mc4.name = "mc4";
	this.mc4.setTransform(278.3,355.5,0.5852,0.7285,0,0,0,52.9,56);

	this.mc5 = new lib.diamondgrills("synched",0);
	this.mc5.name = "mc5";
	this.mc5.setTransform(278.3,285.3,0.5852,0.7286,0,0,0,86.2,18.8);

	this.mc6 = new lib.eyes5("synched",0);
	this.mc6.name = "mc6";
	this.mc6.setTransform(107.2,401.15,0.612,0.8256,0,0,0,72.2,62.7);

	this.mc7 = new lib.mouth1("synched",0);
	this.mc7.name = "mc7";
	this.mc7.setTransform(271.05,127.55,0.6794,0.7414,0,0,0,102.6,52.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAcgEIg3AJ");
	this.shape.setTransform(534.1875,298.3875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(8,1,1).p("AALA/QgLg3gIg3IgCgPAABg+QAFAJAFAI");
	this.shape_1.setTransform(33.95,308.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AxFM3IglgjQgOgOAFgDIBEBBgAb3hvIAXgLQAPgHAGgMQAEgHACgCQADgBADAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQgGANgOAKQgGAGgPAJgAWFhvQg/gdg/gfIg6gdIg6AdQg/Afg/AdIgSAAQBTgkA4gdIAFgCIAzgbIgggQIgDgCIg2gcIg9ghIAAgEQAQgBARAJQANAFAZAQIANAIIAfATIATALIAXANIAXgNIATgLIAfgTIAMgIQAagQAMgFQASgJAPABIAIAAIgIAEIg8AhIg2AcIgDACIggARIAzAaIAFACQA4AdBSAkgAKQhvQgPgJgHgGQgNgKgGgNQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAQADAAACABQADACADAHQAGAMAPAHIAXALgA/ChvIAwgkQCwiRBZhFIA6gtIAAALQgvAiguAkQgpAfhTBEQhRBCgrAiIgUAPgAIMjHIABgCQAJAJgEASQgBAGgFANgAeykPIARAIIAAACIgRgKgATplPQgJgDgGgPQgdhHgjhKIgkhKQAJgCAIAQIATAoQAmBOAeBJQAHARAJAFQAJgEAGgIIABgCIAAAPIgDADQgIAGgGAAIgEAAgASasAQg9ghg9ghQATgDAWAKQAMAGAaAQIArAbQAuAbA2AbIAAAGIhkgyg");
	this.shape_2.setTransform(577.5625,543.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.mc7},{t:this.mc6},{t:this.mc5},{t:this.mc4},{t:this.mc9_1},{t:this.mc2},{t:this.mc13},{t:this.mc14},{t:this.mc16},{t:this.mc1},{t:this.mc15},{t:this.mc9},{t:this.mc11},{t:this.Face1_btn}]}).wait(1));

	// Character
	this.mc12_ = new lib.Symbol5();
	this.mc12_.name = "mc12_";
	this.mc12_.setTransform(95.05,99.55);

	this.mc3 = new lib.arms("synched",0);
	this.mc3.name = "mc3";
	this.mc3.setTransform(285.5,453.5,0.3051,0.504,0,4.94,-6.9452,171.1,127.4);

	this.mc8 = new lib.cartiers("synched",0);
	this.mc8.name = "mc8";
	this.mc8.setTransform(101.95,35.6,0.7612,0.7286,0,0,0,108.4,18.7);

	this.instance = new lib.sprite("synched",0);
	this.instance.setTransform(725.2,264.65,1,1.5673,0,-0.3816,0,127.9,149.8);

	this.mc10 = new lib.mouth("synched",0);
	this.mc10.name = "mc10";
	this.mc10.setTransform(118.85,243.25,0.5852,0.7286,0,0,0,79,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("ABaALIAAABQAEAMgBAOQgBAHgCAIgAhcgoIACgBQAIgCAIACIAEgDQAJgGALAAQALAAAJAFIADACQAEgEAGgCQAHgDALAAQAPAAAKAEQAGADAGAFg");
	this.shape_3.setTransform(426.7099,334.8222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.mc10},{t:this.instance},{t:this.mc8},{t:this.mc3},{t:this.mc12_}]}).wait(1));

	// Frame
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_4.setTransform(480,320);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_5.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

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