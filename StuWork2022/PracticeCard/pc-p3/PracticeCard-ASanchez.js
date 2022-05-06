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
	this.shape.graphics.f().s("#CC99CC").ss(2,1,1).p("EhACgTmMCAFAAAMhArAnNg");
	this.shape.setTransform(409.9,125.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhACgTmMCAFAAAMhAsAnNg");
	this.shape_1.setTransform(409.9,125.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,821.8,252.9), null);


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
(lib.PracticeCardASanchez = function(mode,startPosition,loop,reversed) {
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
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.next_btn.addEventListener("click", clickToPlay1.bind(this));
		
		function clickToPlay1()
		{
			// This code will jump to frame 1 in the timeline and play the animation
			// Since frames in EaselJS actually start at 0, 
			// frame 1 is numbered 2 in the Animate interface.
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99));

	// message
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252525").s().p("AgSChQgIgIAAgLQAAgKAIgIQAHgIALAAQALAAAHAIQAIAIAAAKQAAALgIAIQgHAIgLAAQgLAAgHgIgAgDBNIgWjBIgBgTQAAgPAIgJQAIgJAKAAQALAAAIAJQAIAJAAASIgBAQIgVDBg");
	this.shape.setTransform(757.6,423.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252525").s().p("AhQBNQgZgiABgpQgBgdAQgeQAOgdAZgPQAYgOAaAAQAyAAAeAmQAZAgAAAqQAAAcgNAeQgOAegaAQQgYAPgeAAQgxAAgdgngAgfhcQgNAIgIATQgIASAAAeQAAAvATAiQATAjAeAAQAXAAAPgTQAPgTAAgvQAAg5gZghQgRgXgZAAQgNAAgMAHg");
	this.shape_1.setTransform(737.2,428.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#252525").s().p("AAnCtIAAgfQgQAQgPAIQgPAHgRAAQgkAAgbgdQgbgfAAgvQAAgvAeglQAegoAuAAQAcAAATASIAAgoQAAgmgCgIQgCgIgDgEQgEgDgGABQgGAAgKADIgEgIIBCgbIAKAAIAAD8QAAAnACAIQACAIAEADQAEAEAFAAQAHAAAKgEIADAIIhBAbgAgwgYQgWAYAAAwQAAAwAVAZQAVAaAaAAQAVAAAUgWIAAhxQgBgPgIgNQgHgNgLgHQgMgHgLAAQgVAAgQATg");
	this.shape_2.setTransform(713.625,422.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252525").s().p("AAuBwIAAguQgcAfgQAIQgNAIgQgBQgTABgOgLQgNgLgFgRQgGgQAAgfIAAhgQABgPgEgGQgDgHgGgCQgIgEgRAAIAAgJIBNAAIAACSQAAAeALAKQALAJAPAAQAJAAANgGQAMgGATgSIAAh8QgBgSgGgHQgHgGgVgBIAAgJIBKAAIAACEQAAAmACAIQACAJADADQAFADAEAAQAIAAAKgDIACAHIhBAbg");
	this.shape_3.setTransform(676.1,428.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#252525").s().p("AhQBNQgZgiAAgpQAAgdAPgeQAQgdAXgPQAZgOAaAAQAyAAAeAmQAZAgABAqQgBAcgOAeQgNAegZAQQgZAPgdAAQgyAAgdgngAgghcQgNAIgHATQgIASAAAeQAAAvATAiQATAjAeAAQAXAAAPgTQAPgTAAgvQAAg5gZghQgRgXgZAAQgNAAgNAHg");
	this.shape_4.setTransform(651.65,428.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#252525").s().p("AhiCaQgJgIAAgLQAAgJAHgHQAGgGALAAQAIAAAOAFIAMAEQAHAAAJgHQAIgIAJgVIAPgmIhOikIgMgSQgGgJgEgCQgFgFgMgCIAAgJIBmAAIAAAJIgFAAQgLAAgFAEQgGAFAAAHQAAAJAIARIA0BuIAxh5QAEgKAAgJQAAgFgCgBQgBgDgEgCQgFgBgKAAIAAgJIBHAAIAAAJQgIAAgFADQgFAEgGAHIgIATIhYDZQgNAfgVARQgVAQgTAAQgOAAgJgIg");
	this.shape_5.setTransform(627.225,433.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#252525").s().p("AgKCNQgKgGgFgMQgFgLAAgYIAAiRIgjAAIAAgIQANgGAOgMQAOgNAKgRQAGgJAJgYIAHAAIAABIIAzAAIAAARIgzAAIAACNQAAAVAGAHQAGAIAKAAQAIgBAHgFQAHgEAEgKIAKAAQgJAXgPAMQgPAMgQAAQgLAAgKgGg");
	this.shape_6.setTransform(596.275,425.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#252525").s().p("AAeBqQgHgIgBgTQggAagJAEQgNAGgOAAQgXAAgPgQQgOgPAAgaQAAgQAHgLQAKgQAYgPQAYgNA3gVIAAgIQAAghgKgMQgKgMgTAAQgPAAgJAIQgJAIAAAKIAAAOQAAALgFAGQgGAGgJAAQgJAAgFgGQgGgGAAgLQAAgUAVgSQAVgRAmAAQAcAAATAKQAOAHAHAQQAEAKAAAgIAABJQAAAgABAHQABAHADACQADACADAAQAEAAADgBQAFgDAOgPIAAAOQgaAkgZAAQgLAAgHgJgAgXAAQgTALgIALQgIAMAAANQAAARAKAMQAKALAOAAQASAAAcgYIAAhSQgjAOgKAFg");
	this.shape_7.setTransform(579.225,428.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#252525").s().p("AAMCqIAAgJIAFAAQAPAAAGgEQAGgFACgJQABgEAAgTIAAhNQAAgkgEgKQgDgLgJgGQgIgFgLAAQgMAAgLAGQgNAGgSASIAABzQAAAXADAFQACAGAHAEQAHADARAAIAAAJIhtAAIAAgJQAPAAAIgEQAFgDADgGQADgHAAgVIAAjFQAAglgCgJQgCgIgEgDQgDgDgHAAQgFAAgLADIgDgIIBBgbIALAAIAACgQAbgdAPgIQAPgIAPAAQATAAANAKQAOAKAGAWQAFAOAAApIAABNQAAAVADAIQACAFAGAEQAGADAPAAIAAAJg");
	this.shape_8.setTransform(555.325,422.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#252525").s().p("AgKCNQgKgGgFgMQgFgLAAgYIAAiRIgjAAIAAgIQANgGAOgMQAOgNAKgRQAGgJAJgYIAHAAIAABIIAzAAIAAARIgzAAIAACNQAAAVAGAHQAGAIAKAAQAIgBAHgFQAHgEAEgKIAKAAQgJAXgPAMQgPAMgQAAQgLAAgKgGg");
	this.shape_9.setTransform(536.575,425.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252525").s().p("AgzCqIAAgJQAPAAAGgDQAFgDADgHQAEgHAAgVIAAjFQAAglgCgJQgCgIgDgDQgEgDgGAAQgGAAgKADIgEgIIBAgbIALAAIAAEhQAAAVADAHQADAGAGAEQAHADARAAIAAAJg");
	this.shape_10.setTransform(510.725,422.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#252525").s().p("AgzCqIAAgJQAPAAAGgDQAFgDADgHQAEgHAAgVIAAjFQAAglgCgJQgCgIgDgDQgEgDgGAAQgGAAgKADIgEgIIBAgbIALAAIAAEhQAAAVADAHQADAGAGAEQAHADARAAIAAAJg");
	this.shape_11.setTransform(497.175,422.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#252525").s().p("AAeBqQgHgIgBgTQggAagJAEQgNAGgOAAQgXAAgPgQQgOgPAAgaQAAgQAHgLQAKgQAYgPQAYgNA3gVIAAgIQAAghgKgMQgKgMgTAAQgPAAgJAIQgJAIAAAKIAAAOQAAALgFAGQgGAGgJAAQgJAAgFgGQgGgGAAgLQAAgUAVgSQAVgRAmAAQAcAAATAKQAOAHAHAQQAEAKAAAgIAABJQAAAgABAHQABAHADACQADACADAAQAEAAADgBQAFgDAOgPIAAAOQgaAkgZAAQgLAAgHgJgAgXAAQgTALgIALQgIAMAAANQAAARAKAMQAKALAOAAQASAAAcgYIAAhSQgjAOgKAFg");
	this.shape_12.setTransform(480.125,428.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#252525").s().p("Ag/BWQgdgfAAg0QAAg3AegfQAcggArAAQAkAAAYAZQAYAYAAAoIiXAAQAAAwAYAcQAYAcAfAAQAWAAAQgNQAPgMALgcIAIAFQgGAggXAbQgZAbgkAAQgmAAgcgegAgnhSQgQAPgDAcIBlAAQgBgVgEgKQgGgNgMgHQgMgIgMAAQgTAAgQAQg");
	this.shape_13.setTransform(445.6,428.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#252525").s().p("AgKCNQgKgGgFgMQgFgLAAgYIAAiRIgjAAIAAgIQANgGAOgMQAOgNAKgRQAGgJAJgYIAHAAIAABIIAzAAIAAARIgzAAIAACNQAAAVAGAHQAGAIAKAAQAIgBAHgFQAHgEAEgKIAKAAQgJAXgPAMQgPAMgQAAQgLAAgKgGg");
	this.shape_14.setTransform(428.025,425.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#252525").s().p("AAeBqQgHgIgBgTQggAagJAEQgNAGgOAAQgXAAgPgQQgOgPAAgaQAAgQAHgLQAKgQAYgPQAYgNA3gVIAAgIQAAghgKgMQgKgMgTAAQgPAAgJAIQgJAIAAAKIAAAOQAAALgFAGQgGAGgJAAQgJAAgFgGQgGgGAAgLQAAgUAVgSQAVgRAmAAQAcAAATAKQAOAHAHAQQAEAKAAAgIAABJQAAAgABAHQABAHADACQADACADAAQAEAAADgBQAFgDAOgPIAAAOQgaAkgZAAQgLAAgHgJgAgXAAQgTALgIALQgIAMAAANQAAARAKAMQAKALAOAAQASAAAcgYIAAhSQgjAOgKAFg");
	this.shape_15.setTransform(410.975,428.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#252525").s().p("AgzCqIAAgJQAQAAAGgDQAFgDAEgHQADgHAAgVIAAhUQAAgkgCgJQgCgIgEgDQgDgDgGAAQgHAAgKAEIgDgJIBBgaIAKAAIAACuQAAAVAEAHQACAGAGAEQAGADAQAAIAAAJgAgPh/QgHgIAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAIQgHAHgKAAQgJAAgIgHg");
	this.shape_16.setTransform(392.625,422.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#252525").s().p("Ag/BVQgcggAAg1QAAgyAfghQAeggAqAAQAhAAAUARQAVARAAATQAAAJgGAFQgGAGgKAAQgOAAgHgJQgEgFgCgOQgBgOgIgIQgJgHgPAAQgWAAgPASQgTAXAAAnQAAAmATAeQATAeAgAAQAXAAATgQQANgLAMgdIAHADQgJArgZAYQgaAXgfAAQglAAgbgfg");
	this.shape_17.setTransform(374.875,428.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#252525").s().p("Ag/BWQgdgfAAg0QAAg3AegfQAcggArAAQAkAAAYAZQAYAYAAAoIiXAAQAAAwAYAcQAYAcAfAAQAWAAAQgNQAPgMALgcIAIAFQgGAggXAbQgZAbgkAAQgmAAgcgegAgnhSQgQAPgDAcIBlAAQgBgVgEgKQgGgNgMgHQgMgIgMAAQgTAAgQAQg");
	this.shape_18.setTransform(353.35,428.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#252525").s().p("AhOBwIAAgIQAQAAAJgFQAGgEACgJQACgEgBgSIAAhVQABglgCgIQgCgHgEgEQgEgDgHAAQgGAAgKADIgDgIIBCgbIALAAIAAAyQAagyAdAAQANAAAJAIQAIAJAAAKQAAAJgGAHQgGAGgIAAQgJAAgKgIQgKgIgGAAQgEAAgFAEQgLAKgKAXIAABoQAAARAEAKQADAGAHAFQAIAEAPAAIAAAIg");
	this.shape_19.setTransform(334.5,428.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#252525").s().p("AhyClIAAgJIAGAAQANAAAKgFQAFgDACgFQADgGAAgYIAAjOQAAgVgDgGQgCgGgDgDQgFgCgHAAQgGAAgIADIgDgIIBDgbIAJAAIAAAzQARgdARgLQAQgMATAAQAhAAAWAaQAaAfABAzQAAA4ghAlQgbAegoAAQgRAAgNgFQgJgEgMgKIAABCQAAAXADAGQADAGAGADQAHAEARAAIAAAJgAgIh8QgIAFgUAVIAABSQAAAZACAJQADAOANAKQAOALASAAQAYAAAPgTQATgYAAgsQAAgygVgbQgQgSgVAAQgMAAgKAFg");
	this.shape_20.setTransform(312.9,433.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#252525").s().p("AhxClIAAgJIAFAAQANAAAKgFQAEgDADgFQACgGAAgYIAAjOQAAgVgBgGQgDgGgEgDQgEgCgHAAQgGAAgJADIgCgIIBDgbIAJAAIAAAzQARgdARgLQAQgMATAAQAhAAAWAaQAbAfgBAzQAAA4gfAlQgbAegpAAQgRAAgMgFQgKgEgMgKIAABCQAAAXADAGQACAGAIADQAGAEARAAIAAAJgAgHh8QgKAFgTAVIAABSQAAAZACAJQADAOANAKQANALATAAQAYAAAPgTQATgYAAgsQAAgygWgbQgPgSgVAAQgMAAgJAFg");
	this.shape_21.setTransform(288.45,433.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#252525").s().p("AAeBqQgHgIgBgTQggAagJAEQgNAGgOAAQgXAAgPgQQgOgPAAgaQAAgQAHgLQAKgQAYgPQAYgNA3gVIAAgIQAAghgKgMQgKgMgTAAQgPAAgJAIQgJAIAAAKIAAAOQAAALgFAGQgGAGgJAAQgJAAgFgGQgGgGAAgLQAAgUAVgSQAVgRAmAAQAcAAATAKQAOAHAHAQQAEAKAAAgIAABJQAAAgABAHQABAHADACQADACADAAQAEAAADgBQAFgDAOgPIAAAOQgaAkgZAAQgLAAgHgJgAgXAAQgTALgIALQgIAMAAANQAAARAKAMQAKALAOAAQASAAAcgYIAAhSQgjAOgKAFg");
	this.shape_22.setTransform(267.125,428.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#252525").s().p("AAnCtIAAgfQgQAQgPAIQgPAHgRAAQgkAAgbgdQgbgeAAgwQAAgvAeglQAegoAuAAQAcAAATASIAAgoQAAglgCgJQgCgIgDgEQgEgDgGAAQgGABgKADIgEgIIBCgbIAKAAIAAD8QAAAnACAIQACAIAEADQAEAEAFAAQAHAAAKgEIADAIIhBAbgAgwgYQgWAYAAAvQAAAxAVAZQAVAaAaAAQAVAAAUgWIAAhxQgBgPgIgNQgHgNgLgHQgMgHgLAAQgVAAgQATg");
	this.shape_23.setTransform(828.075,366.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#252525").s().p("AALBwIAAgIIAFAAQAPAAAGgEQAGgGADgJQABgDAAgTIAAhYQAAgegIgOQgIgNgSAAQgcgBgcAgIAAByQAAAXADAFQADAGAGAEQAGADASAAIAAAIIhsAAIAAgIIAEAAQARAAAGgJQAGgIAAgYIAAhQQAAgngCgJQgCgJgDgDQgEgDgGAAQgHAAgJADIgEgIIBCgbIAKAAIAAAuQAnguAiAAQARABANAIQANAKAIAUQAFAOAAAdIAABdQAAAVADAHQADAGAGAEQAGADAQAAIAAAIg");
	this.shape_24.setTransform(802.825,371.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#252525").s().p("AAeBqQgHgIgBgTQggAagJAEQgNAGgOAAQgXAAgPgQQgOgPAAgaQAAgQAHgLQAKgQAYgPQAYgNA3gVIAAgIQAAghgKgMQgKgMgTAAQgPAAgJAIQgJAIAAAKIAAAOQAAALgFAGQgGAGgJAAQgJAAgFgGQgGgGAAgLQAAgUAVgSQAVgRAmAAQAcAAATAKQAOAHAHAQQAEAKAAAgIAABJQAAAgABAHQABAHADACQADACADAAQAEAAADgBQAFgDAOgPIAAAOQgaAkgZAAQgLAAgHgJgAgXAAQgTALgIALQgIAMAAANQAAARAKAMQAKALAOAAQASAAAcgYIAAhSQgjAOgKAFg");
	this.shape_25.setTransform(780.525,371.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#252525").s().p("Ag/BWQgcgfAAg0QAAg3AdgfQAcggArAAQAkAAAYAYQAYAZgBAoIiWAAQABAwAXAcQAYAcAfAAQAWgBAQgMQAPgLALgdIAHAFQgEAggYAbQgZAbgkAAQgnAAgbgegAgnhSQgQAPgDAcIBlAAQgCgWgDgJQgGgMgMgJQgMgHgMAAQgTAAgQAQg");
	this.shape_26.setTransform(745.95,371.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#252525").s().p("AAABxIhPi4QgFgMgFgGQgEgGgIgEQgEgCgMgCIAAgIIBnAAIAAAIIgGAAQgKAAgFAFQgFAEAAAIQAAAIAFAMIAyB3IAzh8QAFgNABgHQAAgEgCgCQgDgDgEgBQgEgCgNAAIAAgIIBIAAIAAAIQgNABgFAEQgHAHgIARIhNC7g");
	this.shape_27.setTransform(722.65,372.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#252525").s().p("AhQBNQgZgiAAgpQABgdAPgeQAOgdAYgPQAZgOAaAAQAyAAAeAmQAaAgAAAqQAAAcgPAeQgNAegZAQQgZAPgdAAQgyAAgdgngAgghcQgNAIgHATQgIASAAAeQAAAvATAiQATAjAeAAQAXAAAPgTQAPgTAAgvQAAg5gZghQgRgXgZAAQgNAAgNAHg");
	this.shape_28.setTransform(698.25,371.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#252525").s().p("AgzCqIAAgJQAPAAAGgDQAFgDADgHQAEgHAAgVIAAjFQAAglgCgJQgCgIgDgDQgEgDgGAAQgGAAgKADIgEgIIBAgbIALAAIAAEhQAAAVADAHQADAGAGAEQAHADARAAIAAAJg");
	this.shape_29.setTransform(679.475,365.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#252525").s().p("Ag/BWQgcgfgBg0QAAg3AdgfQAdggAqAAQAmAAAXAYQAYAZAAAoIiWAAQgBAwAYAcQAYAcAgAAQAVgBAQgMQAPgLAMgdIAHAFQgGAggYAbQgXAbglAAQgnAAgbgegAgnhSQgQAPgCAcIBkAAQgCgWgEgJQgFgMgMgJQgMgHgLAAQgVAAgPAQg");
	this.shape_30.setTransform(649.6,371.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#252525").s().p("AA7BxIg2iLIg/CLIgJAAIhGi3QgHgSgHgFQgGgHgPgDIAAgIIBcAAIAAAIQgNABgDAEQgFADAAAHQAAAHAFALIAuB8IAvhkIgMghQgGgOgJgGQgFgDgPgBIAAgIIBnAAIAAAIQgRABgHAFQgFAEAAAJQAAAEACAGIAyB8IAuh4QAFgNAAgHQAAgFgFgEQgFgEgNAAIAAgIIBFAAIAAAIQgVADgKAaIhJC7g");
	this.shape_31.setTransform(620.775,372.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#252525").s().p("AgjA2QAZgIAMgRQAOgSAAgRQAAgFgDgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAQgCAAgIAEQgEACgFABQgMAAgHgHQgGgHgBgMQAAgMAJgJQAJgHANAAQAPAAAMANQANANAAAXQgBAYgRAVQgQAVglANg");
	this.shape_32.setTransform(584.95,384.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#252525").s().p("AhiCaQgJgIAAgLQAAgKAHgGQAGgGALAAQAIAAAOAFIAMAEQAHAAAJgHQAIgIAJgVIAPgmIhOikIgMgSQgGgJgEgCQgFgFgMgDIAAgIIBmAAIAAAIIgFAAQgLAAgFAGQgGAEAAAHQAAAJAIARIA0BuIAxh5QAEgJAAgKQAAgEgCgCQgBgDgEgCQgFgBgKgBIAAgIIBHAAIAAAIQgIABgFADQgFAEgGAHIgIATIhYDZQgNAggVAQQgVAQgTAAQgOAAgJgIg");
	this.shape_33.setTransform(566.525,377.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#252525").s().p("AAeBqQgHgIgBgTQggAagJAEQgNAGgOAAQgXAAgPgQQgOgPAAgaQAAgQAHgLQAKgQAYgPQAYgNA3gVIAAgIQAAghgKgMQgKgMgTAAQgPAAgJAIQgJAIAAAKIAAAOQAAALgFAGQgGAGgJAAQgJAAgFgGQgGgGAAgLQAAgUAVgSQAVgRAmAAQAcAAATAKQAOAHAHAQQAEAKAAAgIAABJQAAAgABAHQABAHADACQADACADAAQAEAAADgBQAFgDAOgPIAAAOQgaAkgZAAQgLAAgHgJgAgXAAQgTALgIALQgIAMAAANQAAARAKAMQAKALAOAAQASAAAcgYIAAhSQgjAOgKAFg");
	this.shape_34.setTransform(544.325,371.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#252525").s().p("AAnCtIAAgfQgQAQgPAIQgPAHgRAAQgkAAgbgdQgbgeAAgwQAAgvAeglQAegoAuAAQAcAAATASIAAgoQAAglgCgJQgCgIgDgEQgEgDgGAAQgGABgKADIgEgIIBCgbIAKAAIAAD8QAAAnACAIQACAIAEADQAEAEAFAAQAHAAAKgEIADAIIhBAbgAgwgYQgWAYAAAvQAAAxAVAZQAVAaAaAAQAVAAAUgWIAAhxQgBgPgIgNQgHgNgLgHQgMgHgLAAQgVAAgQATg");
	this.shape_35.setTransform(521.275,366.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#252525").s().p("AgsBtQgHgDgFAAQgGAAgDAHIgIAAIAAhOIAIAAQAHAhATARQASARAXAAQAQAAALgKQAKgJAAgOQAAgRgLgLQgMgLgigRQgigQgLgOQgLgOAAgVQAAgbATgSQASgSAdAAQAMAAATAGQAMADAEAAQAEAAACgBQACgCADgGIAIAAIAABLIgIAAQgJgjgOgNQgPgNgUAAQgRAAgKAJQgLAJAAALQAAANAIAKQAIAJAWALIAiARQAwAXABAnQgBAdgWATQgWASgcAAQgUAAgagHg");
	this.shape_36.setTransform(486.8,371.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#252525").s().p("AgFBGIgNhGQgFgdAAgLQAAgPAGgHQAGgHALAAQAJAAAIAHQAHAHAAAMQAAAJgHAiIgNBGg");
	this.shape_37.setTransform(472.5,356.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#252525").s().p("AhOBwIAAgIQAQAAAJgFQAGgEACgJQACgEAAgSIAAhVQAAglgCgIQgBgHgFgEQgEgDgGAAQgIAAgJADIgDgIIBDgbIAKAAIAAAyQAagyAdAAQANABAJAHQAJAJAAAKQAAAJgHAGQgGAHgJAAQgIAAgKgIQgKgIgGAAQgEAAgFAEQgLAKgKAWIAABpQAAASAEAJQADAHAIAEQAHAEAPAAIAAAIg");
	this.shape_38.setTransform(460.35,371.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#252525").s().p("Ag/BWQgcgfgBg0QAAg3AdgfQAdggAqAAQAmAAAXAYQAYAZAAAoIiWAAQgBAwAYAcQAYAcAgAAQAVgBAQgMQAPgLAMgdIAHAFQgGAggYAbQgXAbglAAQgmAAgcgegAgnhSQgQAPgCAcIBkAAQgCgWgEgJQgFgMgMgJQgMgHgLAAQgVAAgPAQg");
	this.shape_39.setTransform(441.25,371.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#252525").s().p("AAMCqIAAgJIAFAAQAPAAAGgEQAGgFACgJQABgEAAgTIAAhNQAAgkgEgKQgDgLgJgGQgIgFgLAAQgMAAgLAGQgNAGgSASIAABzQAAAXADAFQACAGAHAEQAHADARAAIAAAJIhtAAIAAgJQAPAAAIgEQAFgDADgGQADgHAAgVIAAjFQAAglgCgJQgCgIgEgDQgDgDgHAAQgFAAgLADIgDgIIBBgbIALAAIAACgQAbgdAPgIQAPgIAPAAQATAAANAKQAOAKAGAWQAFAOAAApIAABNQAAAVADAIQACAFAGAEQAGADAPAAIAAAJg");
	this.shape_40.setTransform(417.975,365.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#252525").s().p("AgKCNQgKgGgFgMQgFgLAAgYIAAiRIgjAAIAAgJQANgFAOgMQAOgMAKgSQAGgJAJgYIAHAAIAABIIAzAAIAAARIgzAAIAACNQAAAVAGAHQAGAIAKAAQAIgBAHgFQAHgEAEgKIAKAAQgJAYgPALQgPAMgQAAQgLAAgKgGg");
	this.shape_41.setTransform(399.275,368.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#252525").s().p("AhQBNQgZgiAAgpQAAgdAPgeQAQgdAXgPQAZgOAaAAQAyAAAeAmQAZAgABAqQgBAcgOAeQgOAegZAQQgYAPgdAAQgyAAgdgngAgfhcQgOAIgHATQgIASAAAeQAAAvATAiQATAjAeAAQAXAAAPgTQAPgTAAgvQAAg5gZghQgRgXgZAAQgNAAgMAHg");
	this.shape_42.setTransform(379.95,371.875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#252525").s().p("ABHCiIAAgJIALAAQAVAAAIgMQAGgIAAgbIAAjYIh8EQIgIAAIh9kQIAADYQAAAdAGAIQAJAKATAAIAMAAIAAAJIhxAAIAAgJIALAAQAVAAAIgMQAGgIAAgbIAAjTQAAgVgFgKQgDgHgJgEQgJgFgUAAIAAgJIBcAAIB0D8IB0j8IBbAAIAAAJIgLAAQgVAAgIAMQgGAIAAAbIAADTQAAAdAHAIQAJAKATAAIALAAIAAAJg");
	this.shape_43.setTransform(345.925,366.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#252525").s().p("AhiCaQgJgIAAgLQAAgKAHgGQAGgGALAAQAIAAAOAFIAMAEQAHAAAJgHQAIgIAJgVIAPgmIhOikIgMgSQgGgJgEgCQgFgFgMgDIAAgIIBmAAIAAAIIgFAAQgLAAgFAGQgGAEAAAHQAAAJAIARIA0BuIAxh5QAEgJAAgKQAAgEgCgCQgBgDgEgCQgFgBgKgBIAAgIIBHAAIAAAIQgIABgFADQgFAEgGAHIgIATIhYDZQgNAggVAQQgVAQgTAAQgOAAgJgIg");
	this.shape_44.setTransform(299.825,377.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#252525").s().p("AhyClIAAgJIAHAAQANAAAIgFQAFgDADgFQACgGAAgYIAAjOQAAgVgCgGQgCgGgDgDQgFgCgHAAQgGAAgIADIgEgIIBEgbIAJAAIAAAzQARgdARgLQAQgMATAAQAhAAAWAaQAbAfAAAzQgBA4ggAlQgbAegoAAQgQAAgOgFQgJgEgMgKIAABCQAAAXADAGQADAGAGADQAHAEARAAIAAAJgAgHh8QgKAFgTAVIAABSQAAAZACAJQAEAOANAKQANALASAAQAYAAAPgTQATgYAAgsQAAgygVgbQgQgSgVAAQgLAAgKAFg");
	this.shape_45.setTransform(274.45,376.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#252525").s().p("AhyClIAAgJIAHAAQANAAAIgFQAFgDADgFQACgGAAgYIAAjOQAAgVgCgGQgBgGgFgDQgEgCgHAAQgGAAgIADIgEgIIBEgbIAJAAIAAAzQARgdARgLQAQgMATAAQAhAAAWAaQAbAfAAAzQgBA4ggAlQgaAegpAAQgQAAgOgFQgJgEgMgKIAABCQAAAXADAGQADAGAGADQAHAEARAAIAAAJgAgHh8QgJAFgUAVIAABSQAAAZACAJQAEAOANAKQAMALATAAQAYAAAPgTQATgYAAgsQAAgygWgbQgPgSgVAAQgLAAgKAFg");
	this.shape_46.setTransform(250.05,376.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#252525").s().p("AAeBqQgHgIgBgTQggAagJAEQgNAGgOAAQgXAAgPgQQgOgPAAgaQAAgQAHgLQAKgQAYgPQAYgNA3gVIAAgIQAAghgKgMQgKgMgTAAQgPAAgJAIQgJAIAAAKIAAAOQAAALgFAGQgGAGgJAAQgJAAgFgGQgGgGAAgLQAAgUAVgSQAVgRAmAAQAcAAATAKQAOAHAHAQQAEAKAAAgIAABJQAAAgABAHQABAHADACQADACADAAQAEAAADgBQAFgDAOgPIAAAOQgaAkgZAAQgLAAgHgJgAgXAAQgTALgIALQgIAMAAANQAAARAKAMQAKALAOAAQASAAAcgYIAAhSQgjAOgKAFg");
	this.shape_47.setTransform(228.725,371.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#252525").s().p("AAdCiIAAgJIALAAQAUAAAJgMQAGgHAAgeIAAhiIiVAAIAABiQAAAZADAIQACAGAIAEQAKAGAMAAIALAAIAAAJIiKAAIAAgJIALAAQAUAAAJgMQAGgHAAgeIAAjPQAAgZgDgIQgDgGgHgEQgKgGgMAAIgLAAIAAgJICKAAIAAAJIgLAAQgMAAgKAFQgIAEgCAIQgDAIAAAYIAABcICVAAIAAhcQAAgZgDgIQgCgGgIgEQgKgGgMAAIgLAAIAAgJICKAAIAAAJIgLAAQgMAAgKAFQgIAEgCAIQgDAIAAAYIAADPQAAAZADAIQACAGAIAEQAKAGAMAAIALAAIAAAJg");
	this.shape_48.setTransform(199.275,366.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AxzOqMgoTgTFMArWgKeMAFugsOMAXVAmAMAr0gIRMgc6Ah8MAVYAnJMgpOgRBMgemAgcg");
	this.shape_49.setTransform(507.725,385.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},65).to({state:[]},22).wait(12));

	// scene
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF99FF").ss(1,1,1).p("AACgBQgCABgBAC");
	this.shape_50.setTransform(502.8375,348.0875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_51.setTransform(476.1513,376.7589);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CCCCFF").s().p("AAAABIgRgDIAjAFIgSgCg");
	this.shape_52.setTransform(249.4875,252.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_53.setTransform(476.1513,376.7589);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF99CC").s().p("AvMHeQmrklD3lQQj2pBLWgDQF6jVEGDVQFbjaE4DaQGaADAKEBQE3Eni1DgQBBDDhyAOIgNgOQgpgpg5gGQgCg+gtgtQgvgvhCAAQhCABgvAvQgvAvAABBQAAAkAOAfIgOgBQhBAAguAtIgCACQgvAvAABCQAAAyAaAnQAJANAMAMQAMAMANAJQAmAZAyAAQA6AAAsgkQAIAnAeAeQAPAPASAKQhCETl+iTQlpiOlECOQhxCLhyi1IANAAQARAAAQgDQAtgJAjgjQAqgpAFg5QAhAWAqAAQA5AAAogoIABgBQApgoAAg6QAAg5gpgpIgLgLQAHgYAAgbQAAhEgwgxQgwgwhEAAQg7AAgsAkQgtgqg/AAQhDAAgvAvQguAvAABCQAABDAuAuQAaAaAfAMIgKAJQguAugBBAIAAADQAABDAvAuQAcAdAlALQhiB0hVAAQiXAAhxlrgACUIxQAdAyA2AOIACABQA3APAygdQAygdAPg4IADgPQAZgFAXgOQA7giAShCQARhCgig7Qgdgyg1gVQAOg8ggg2Qghg6hAgSQhAgPg6AgQg5AhgRBAQgJAiAFAiQgGgDgHgCQg+gQg4AfIgCACQg6AhgRBAQgNAvAQAtQAEAPAJAOQAIAPALAMQAeAjAvANQA4APA0gYQgCAoAVAkgAinBGQAdAxA2APIACAAQA3APAxgcQAygdAPg4IADgPQAZgGAYgOQA7ghARhCQAShBgig7Qgdgzg2gUQAOg8ggg3Qghg6g/gRQhAgRg5AhQg6AhgRBAQgJAjAFAhIgNgEQg+gRg5AgIgCABQg6AhgRBAIgDAMQgIgngegfIgMgKQAIgYAAgcQAAhEgxgwQgwgwhEAAQg6AAgtAkQgtgqg/AAQhCAAgvAuQgvAvAABDQAABCAvAvQAZAZAgAMIgLAJQgtAugBBBIAAADQAABBAuAvQAjAjAvAJQAPADARAAQARAAAPgDQAugJAjgjQApgpAFg4QAhAWArAAQA5AAAogoIABgBQAegeAIgnQACAMAEALQAFAOAIAPQAJAPAKALQAfAjAvAMQA4AQA0gYQgCAnAVAlgAHdm9QgkALgcAcQguAvAABCQAABDAuAuQAaAaAfAMIgKAJQguAugBBAIAAADQAABCAvAuQAjAjAuAJQAPADARAAQARAAAQgDQAVgEAUgKQAzgdBGgYQCEhXAFgFIABgBQApgoAAg6IgBgTQgGgtgigiIgLgLQAHgYAAgbQAAhEgwgxQgwgwhEAAQg7AAgsAkQgtgqg/AAQgbAAgXAIg");
	this.shape_54.setTransform(300.3263,180.1343);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC33").s().p("AnHGLQgjgjAAgwQAAgxAjgiQAigjAxAAQAwAAAjAjQAiAiAAAxQAAAwgiAjQgjAigwAAQgxAAgigigAJTjFQgSgSgIgVQgJgUAAgYQAAgxAjgiQAigjAxAAQAwAAAjAjQAKAKAHALQARAbAAAjQAAAYgIAUQgJAVgRASQgjAigwAAQgxAAgigigAr4jkQgigiAAgxQAAgwAigjQAjgiAwAAQAxAAAiAiQAjAjAAAwQAAAxgjAiQgiAjgxAAQgwAAgjgjg");
	this.shape_55.setTransform(297.975,189.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF6633").s().p("AGDFeQgigiAAgxQAAgxAigiQAjgjAxAAQAxAAAiAiQAiAjAAAxQAAAwgiAjQgiAigxAAQgxAAgjgigAi3FSQgwgMgYgqQgYgqANgwQAMgvAqgYQAqgYAvAMQAvANAZAqQAYAqgNAvQgNAvgqAYQgbAQgeAAQgPAAgQgEgAnziZQgwgMgYgqQgYgqANgvQAMgvAqgZQAqgYAvANQAvAMAZAqQAYAqgNAvQgMAwgqAYQgcAQgeAAQgPAAgQgFg");
	this.shape_56.setTransform(340.3997,190.311);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC99FF").s().p("AhxEmQgvgJgjgjQgugvAAhDIAAgDQABhAAtguIALgJQgggMgZgYQgvgvAAhDQAAhCAvgvQAvguBCgBQA/AAAtAqQAsgkA6ABQBEAAAwAvQAxAxAABEQAAAbgIAYIAMALQAeAeAIAnQgGAeAGAcQgIAngeAdIgBABQgoApg5AAQgrAAghgXQgFA5gpAqQgiAjguAJQgPACgRAAQgRAAgPgCgAhThvQgjAjAAAwQAAAvAjAjQAiAiAxAAQAvAAAjgiQAigjAAgvQAAgwgigjQgjgigvgBQgxABgiAig");
	this.shape_57.setTransform(230.3375,161.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFCC66").s().p("AAME2IgCgBQg1gOgdgyQgVgkACgoQg0AYg4gPQgvgNgfgjQgKgMgJgPQgIgOgFgPQgEgLgCgLQADgPAAgPQAAgPgDgMIADgMQARhAA6ghIACgCQA5gfA+AQIANAFQgFgiAJgiQARhAA6ghQA4giBBARQA/ASAhA6QAgA2gOA8QA2AVAdAyQAiA6gSBCQgRBCg7AiQgYAOgZAFIgDAPQgPA4gyAdQggATgkAAQgSAAgTgFgAgghaQgqAYgNAvQgNAuAZAqQAYAqAvANQAuANAqgZQAqgYANgvQAMgugYgqQgYgqgvgNQgQgEgQAAQgdAAgbAQg");
	this.shape_58.setTransform(290.8223,162.5975);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF6666").s().p("AhgEoIgjgHQglgLgcgcQgvgvAAhDIAAgCQABhBAuguIAKgJQgfgMgagZQguguAAhCQAAhDAugvQAvgvBDAAQA/ABAtAqQArglA7ABQBEAAAwAvQAwAxAABEQAAAcgHAYIALAKQApApAAA5QAAA5gpApIgBABQgoAng5AAQgqABghgWQgFA5gqApQgiAigtAKQgQACgRABIgNgBgAhVhvQgiAjAAAwQAAAwAiAiQAjAiAwABQAwgBAigiQAjgiAAgwQAAgwgjgjQgigigwAAQgwAAgjAig");
	this.shape_59.setTransform(260.925,223.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9999FF").s().p("AhzEmQgugKgjgiQgvgvAAhDIAAgDQABhAAuguIAKgJQgfgMgagYQgugvAAhDQAAhCAugvQAcgcAkgLQAXgIAbAAQA/ABAtAqQArglA7ABQBEAAAwAvQAwAxAABEQAAAcgHAYIALAKQAiAiAGAtIABASQAAA6gpApIgBAAQgFAGiEBXQhGAZgyAcQgUAKgVAFQgQACgRAAQgRAAgPgCgAhVhvQgiAjAAAwQAAAYAIAUQAJAVARARQAjAiAwAAQAwAAAigiQASgRAIgVQAJgUAAgYQAAgjgSgbQgHgLgKgKQgigigwAAQgwAAgjAig");
	this.shape_60.setTransform(366.025,164.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCFF").s().p("AoCFqIgQgEIAjAHIgTgDgADkEDIgCgBQg2gOgdgyQgVgkACgoQg0AYg4gPQgvgNgegjQgLgMgIgPQgJgOgEgPQgQgsANgvQARhAA6ghIACgCQA4gfA+AQQAHACAGADQgFgiAJgiQARhAA5ghQA6ghBAAQQBAASAhA6QAgA2gOA8QA1AVAdAyQAiA7gRBBQgSBCg7AiQgXAOgZAFIgDAPQgPA4gyAdQghATgjAAQgSAAgTgFgAC2iNQgqAYgMAvQgNAwAZApQAYAqAvAMQAvANAqgZQAqgYANguQAMgvgYgqQgYgqgvgNQgRgEgPAAQgeAAgcAQg");
	this.shape_61.setTransform(300.8473,216.8028);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3399FF").s().p("ABVE2IgBgBQgjABgdgQQgSgJgOgQQgegegIgnQgsAlg6AAQgyAAgmgaQgNgJgMgMQgMgMgJgMQgagoAAgyQAAhBAvguIACgDQAugsBBgBIAOABQgOgeAAglQAAhBAvgvQAvgvBBgBQBCABAvAvQAtAsACA+QA5AGApApIANAPQAjAsAAA4QAABFgwAwQgTATgWAMIAAAQQAAA6goAoQgpApg4AAIgCAAgAg9hBQgiAiAAAwQAAAxAiAiQAiAjAwAAQAxgBAigiQAjgiAAgxQAAgwgjgiQgigigxAAQgwAAgiAig");
	this.shape_62.setTransform(385.325,215.2753);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF6699").s().p("AmBGzIAAAAQCYjajVjZQiBhchaBcQgjhdgWhjQgekhDPi6QCHh6ECBuIAFAEQBfBEBAC6QA9kQFEg7QFSAwgJDtQlEGqBOEqQiICDhECAQgYAtgPAsIi8CUQkCiJiwi1g");
	this.shape_63.setTransform(517.4702,415.975);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFAF80").s().p("EADsAhJQiWjpD9lkQlEgakgh4QmlKKldkcQlekbDwksQDqkkD6gmQAyB0BrBzQhrhzgyh0QhOi2BBi6QAPgsAXgsQBEiBCJiCQhOkqFEmqQA9hRBLhUQCSCGEAAAIAAAAIABAAQFFAAH2jXIADgBIAXgKIgXAKIgDABQn2DXlFAAIgBAAIAAAAQkAAAiSiGQipgeiojqQhzmfEJlYQlIiSDYi/QDXi/B9ArQCzArgfC4QGHh8HXB4IAAAAQB6kqFpDxQFoDwk+EGQCOHhl+DeIhQAtQJsJajlPGQhHFwkOHbQgmGoi6DUQhRBcicAAQjRAAlXihgAJeP0QBhAACkg0IAFgCQGviKAAowQAAjxhQk+QBQE+AADxQAAIwmvCKIgFACQikA0hhAAIgBAAIAAAAQkFAADil6IADgEQEJm4AAmjQAAhRgKhRQAKBRAABRQAAGjkJG4IgDAEQjiF6EFAAIAAAAIABAAgAGVtBIiHiMIBzh4QiZhChXBCIB9B4Ih9CCIB9iCgAi302Qg4DFD/hNQD/huhfhuQg+gmg+AAQh1AAh2CKgAJJ1JQC0DTC0hvQBfhuj/huQhIgVgvAAQh6AAApCNgAg9+PQBIhIB5gnQh5AnhIBIgA4xiFQBahcCBBcQDVDZiYDaIgJgKIAJAKQgoADgjAAQm5AADsm2g");
	this.shape_64.setTransform(609.4962,429.3099);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_65.setTransform(476.1513,376.7589);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3366FF").s().p("AmWceQoIk4BRqbQDwyNGsyPIiAlSQFEiOFpCOIhuFSQG0SvCNStQBJJymuEhQjpBNjgAAQjfAAjYhNg");
	this.shape_66.setTransform(304.5343,440.3125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#663333").s().p("Ah3gqQBXhDCYBDIhzB3g");
	this.shape_67.setTransform(636,324.2834);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#660099").s().p("Ao7AJQC0jSC0BvQBfBtj/BuQhIAWgwAAQh5AAApiOgADFgIQg5jFEBBNQD/BuhfBtQg+Amg+AAQh2AAh2iJg");
	this.shape_68.setTransform(648.332,294.8768);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFAF80").s().p("EADsAhJQiWjpD9lkQlEgakgh4QmlKKldkcQlekbDwksQDqkkD6gmQAyB0BrBzQhrhzgyh0QhOi2BBi6QAPgsAXgsQBEiBCJiCQhOkqFEmqQA9hRBLhUQipgeiojqQhzmfEJlYQlIiSDYi/QDXi/B9ArQCzArgfC4QGHh8HXB4IAAAAQB6kqFpDxQFoDwk+EGQCOHhl+DeIhQAtQJsJajlPGQhHFwkOHbQgmGoi6DUQhRBcicAAQjRAAlXihgAJeP0QBhAACkg0IAFgCQGviKAAowQAAjxhQk+QBQE+AADxQAAIwmvCKIgFACQikA0hhAAIgBAAIAAAAQkFAADil6IADgEQEJm4AAmjQAAhRgKhRQAKBRAABRQAAGjkJG4IgDAEQjiF6EFAAIAAAAIABAAgAFap3QFFAAH2jXIADgBIAXgKIgXAKIgDABQn2DXlFAAIgBAAIAAAAQkAAAiSiGQCSCGEAAAIAAAAIABAAgAGVtBIiHiMgACRtLIB9iCIBzh4QiZhChXBCIB9B4gAi302Qg4DFD/hNQD/huhfhuQg+gmg+AAQh1AAh2CKgAJJ1JQC0DTC0hvQBfhuj/huQhIgVgvAAQh6AAApCNgAg9+PQBIhIB5gnQh5AnhIBIgA4xiFQBahcCBBcQDVDZiYDaIgJgKIAJAKQgoADgjAAQm5AADsm2g");
	this.shape_69.setTransform(609.4962,429.3099);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Al6AgQgMgNAAgTQAAgSAMgNQAOgNATAAQATAAANANQAOANAAASQAAATgOANQgNAOgTAAQgTAAgOgOgAE+AeQgNgMAAgSQAAgRANgNQANgMASAAQARAAANAMQANANAAARQAAASgNAMQgNANgRAAQgSAAgNgNg");
	this.shape_70.setTransform(657.15,290.35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#660099").s().p("Ao7AJQC0jSC0BvQBfBtj/BuQhIAWgwAAQh5AAApiOgAkhhNQgNAOAAATQAAATANANQANAMATAAQATAAANgMQAOgNAAgTQAAgTgOgOQgNgNgTAAQgTAAgNANgADFgIQg5jFEBBNQD/BuhfBtQg+Amg+AAQh2AAh2iJgAGWhLQgMANAAASQAAASAMAMQANANASAAQASAAAMgNQANgMAAgSQAAgSgNgNQgMgMgSAAQgSAAgNAMg");
	this.shape_71.setTransform(648.332,294.8768);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_72.setTransform(476.1513,376.7589);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCCCC").s().p("Aj4KsQgWAAgKgFQgPgHhEgrQhEgrgYhXQgYhYAdhHQAehIAShJQAShKAWgpQAIgRARgTIAkgqQAiglAIgdQAHgcgGiAQgHh/ENk2QAQgaA1gQQA4gRA9AJQA8AJAUAIQAVAHA7AuQA7AuAIArQAJArAKA/QAJA+ANBlQAIBGABBzQABBDgDDLQgBBAgGAfQgJAogkBGQglBKgWAnQgkA9gkArQgoAvgmATQgOAHgSAFIgDABQh4AihtAAQhiAAhagbg");
	this.shape_73.setTransform(604.6809,455.5642);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#330099").s().p("AGEUCQgKgFgKgLQiogOikg6QoHk4BRqbQCVrTDdrUIgBgKQgBgdASgMIADgCQA7DpAJE4QADB9gKGtQgJFUAUDWQAdEvBfDmQBSDICJCoIAMAOQgFADgGAAQgHAAgIgEg");
	this.shape_74.setTransform(260.2046,503.1133);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6699FF").s().p("AhkGdIhJgCQgigBgKgOQgFgJAAgUQAAgeAEgOQAFgNALgOIAUgXQASgXAVgiIAjg9QASgfAXgjIAphBQAagoAEgZIAEgcQACgSAEgKQACgHAIgNQAHgNADgHQAEgXAEgLQADgFAGgIIAJgOQAKgQAEgaIAGgtQAFgiANgYQAKgTAcgfQAKgMAIgEQALgGAOAEQAOAEAJALQAOARAEAhQADAZAAAzIAAD0QAAAlgHAUQgEALgMAVQgJATgMAnQgLAagcApQguBDgcAkQgrA3gqAlQgZAWgTAFQgIADgKAAIgTAAg");
	this.shape_75.setTransform(348.975,564.8036);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3366FF").s().p("AjvdpQiIiohSjIQhfjmgdkvQgVjWAJlVQALmtgEh8QgIk4g9jpIgDACQCBmhCZmhIiAlSQFFiOFoCOIhtFSQGzSvCNStQBJJymuEhQjoBNjfAAQglAAgmgCgAGQNDQgIAEgKAMQgcAfgKATQgNAYgFAiIgGAtQgEAagKAQIgJAOQgGAIgDAFQgEALgEAXQgDAHgHANQgIANgCAHQgEAKgCASIgEAcQgFAZgaApIgpBBQgXAjgSAfIgjA9QgVAigSAXIgUAXQgLAOgFANQgEAOAAAeQAAAUAFAJQAKAOAiABIBJACIATAAQAKAAAIgDQATgFAZgWQArglArg3QAcgkAuhDQAcgpALgaQAMgnAJgTQAMgVAEgLQAHgUAAgmIAAj0QAAgzgDgZQgEghgOgRQgJgLgOgEQgGgBgFAAQgIAAgGADg");
	this.shape_76.setTransform(324.3922,440.3067);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFAF80").s().p("EADsAhJQiWjpD9lkQlEgakgh4QmlKKldkcQlekbDwksQDqkkD6gmQAyB0BrBzQhrhzgyh0QhOi2BBi6QAPgsAXgsQBEiBCJiCQhOkqFEmqQA9hRBLhUQipgeiojqQhzmfEJlYQlIiSDYi/QDXi/B9ArQCzArgfC4QGHh8HXB4IAAAAQB6kqFpDxQFoDwk+EGQCOHhl+DeIhQAtQJsJajlPGQhHFwkOHbQgmGoi6DUQhRBcicAAQjRAAlXihgAJeP0QBhAACkg0IAFgCQGviKAAowQAAjxhQk+QBQE+AADxQAAIwmvCKIgFACQikA0hhAAIgBAAIAAAAQkFAADil6IADgEQEJm4AAmjQAAhRgKhRQAKBRAABRQAAGjkJG4IgDAEQjiF6EFAAIAAAAIABAAgAAZm0Qg0AQgQAZQkOE3AHB+QAGB/gHAdQgIAcgiAnIgkAqQgRATgIARQgWApgSBJQgTBJgdBIQgdBIAYBXQAYBXBEAsQBEArAPAHQAKAEAWAAQC/A5DihAIADgBQARgEAPgIQAmgSAogvQAkgsAkg9QAWgmAlhKQAkhHAJgnQAGggABhAQADjLgBhEQgBhygIhGQgNhlgJg+QgKg+gJgrQgJgrg6guQg7gugVgIQgUgHg8gJQgWgDgUAAQgnAAgkALgAFap3QFFAAH2jXIADgBIAXgKIgXAKIgDABQn2DXlFAAIgBAAIAAAAQkAAAiSiGQCSCGEAAAIAAAAIABAAgAGVtBIiHiMgACRtLIB9iCIBzh4QiZhChXBCIB9B4gAi302Qg4DFD/hNQD/huhfhuQg+gmg+AAQh1AAh2CKgAJJ1JQC0DTC0hvQBfhuj/huQhIgVgvAAQh6AAApCNgAg9+PQBIhIB5gnQh5AnhIBIgA4xiFQBahcCBBcQDVDZiYDaIgJgKIAJAKQgoADgjAAQm5AADsm2g");
	this.shape_77.setTransform(609.4962,429.3099);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},36).to({state:[{t:this.shape_52},{t:this.shape_54},{t:this.shape_53},{t:this.shape_50}]},3).to({state:[{t:this.shape_54},{t:this.shape_52},{t:this.shape_55},{t:this.shape_53},{t:this.shape_50}]},2).to({state:[{t:this.shape_54},{t:this.shape_55},{t:this.shape_52},{t:this.shape_56},{t:this.shape_53},{t:this.shape_50}]},2).to({state:[{t:this.shape_54},{t:this.shape_55},{t:this.shape_56},{t:this.shape_52},{t:this.shape_57},{t:this.shape_53},{t:this.shape_50}]},2).to({state:[{t:this.shape_54},{t:this.shape_55},{t:this.shape_56},{t:this.shape_57},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_53},{t:this.shape_50}]},1).to({state:[{t:this.shape_54},{t:this.shape_60},{t:this.shape_55},{t:this.shape_61},{t:this.shape_56},{t:this.shape_57},{t:this.shape_58},{t:this.shape_59},{t:this.shape_62},{t:this.shape_53},{t:this.shape_50}]},1).to({state:[{t:this.shape_54},{t:this.shape_60},{t:this.shape_55},{t:this.shape_61},{t:this.shape_62},{t:this.shape_56},{t:this.shape_57},{t:this.shape_58},{t:this.shape_59},{t:this.shape_64},{t:this.shape_63},{t:this.shape_53},{t:this.shape_50}]},2).to({state:[{t:this.shape_69},{t:this.shape_54},{t:this.shape_60},{t:this.shape_55},{t:this.shape_61},{t:this.shape_62},{t:this.shape_56},{t:this.shape_63},{t:this.shape_57},{t:this.shape_58},{t:this.shape_59},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_50}]},2).to({state:[{t:this.shape_69},{t:this.shape_71},{t:this.shape_54},{t:this.shape_60},{t:this.shape_55},{t:this.shape_61},{t:this.shape_62},{t:this.shape_56},{t:this.shape_66},{t:this.shape_63},{t:this.shape_67},{t:this.shape_57},{t:this.shape_58},{t:this.shape_59},{t:this.shape_70},{t:this.shape_65},{t:this.shape_50}]},3).to({state:[{t:this.shape_77},{t:this.shape_71},{t:this.shape_70},{t:this.shape_54},{t:this.shape_60},{t:this.shape_55},{t:this.shape_61},{t:this.shape_62},{t:this.shape_56},{t:this.shape_76},{t:this.shape_63},{t:this.shape_67},{t:this.shape_57},{t:this.shape_58},{t:this.shape_59},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_50}]},1).to({state:[]},10).wait(34));

	// scene bkg
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#0033CC").ss(1,1,1).p("EhCAgwqMCEBAAAMAAABhVMiEBAAAg");
	this.shape_78.setTransform(511.525,395.775);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("EhCAAwrMAAAhhVMCEBAAAMAAABhVg");
	this.shape_79.setTransform(511.525,395.775);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CC99FF").s().p("A/HejQs5sqAAx5QAAx4M5sqQM5sqSOAAQSOAAM6MqQM4MqAAR4QAAR5s4MqQs6MqyOAAQyOAAs5sqg");
	this.shape_80.setTransform(522.35,379.45);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("EhCAAwrMAAAhhVMCEBAAAMAAABhVgEgdaghFQs5MqAAR5QAAR4M5MpQM5MqSNAAQSPAAM5sqQM5spAAx4QAAx5s5sqQs5sqyPAAQyNAAs5Mqg");
	this.shape_81.setTransform(511.525,395.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_79},{t:this.shape_78}]},36).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_78}]},17).to({state:[]},12).wait(34));

	// flap
	this.instance = new lib.Symbol1();
	this.instance.setTransform(508.05,293.15,1,1,0,0,0,409.9,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.8786,y:277.9},0).wait(1).to({scaleY:0.7572,y:262.7},0).wait(1).to({scaleY:0.6358,y:247.45},0).wait(1).to({scaleY:0.5144,y:232.2},0).wait(1).to({scaleY:0.393,y:216.95},0).wait(1).to({scaleY:0.2716,y:201.75},0).wait(1).to({scaleY:0.1502,y:186.5},0).wait(1).to({scaleY:0.0288,y:171.25},0).wait(1).to({scaleY:0.0926,skewX:180,y:156.05},0).wait(1).to({scaleY:0.214,y:140.8},0).wait(1).to({scaleY:0.3354,y:125.55},0).wait(1).to({scaleY:0.4568,y:110.35},0).wait(1).to({scaleY:0.5782,y:95.1},0).wait(1).to({scaleY:0.6996,y:79.85},0).wait(1).to({scaleY:0.821,y:64.6},0).wait(1).to({scaleY:0.9424,y:49.4},0).wait(1).to({scaleY:1.0638,y:34.15},0).wait(18).to({_off:true},1).wait(63));

	// envelope
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#CC99CC").ss(2,1,1).p("EhACgktMA/ZAnMMBAsgnMMAAABJbMiAFAAAg");
	this.shape_82.setTransform(508.05,402.625);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("EhACAkuMAAAhJbMA/aAnMMBArgnMMAAABJbg");
	this.shape_83.setTransform(508.05,402.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82}]}).to({state:[{t:this.shape_83},{t:this.shape_82}]},35).to({state:[]},1).wait(63));

	// card
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#CC99CC").ss(2,1,1).p("Eg2kgdrMBtJAAAMAAAA7XMhtJAAAg");
	this.shape_84.setTransform(511.9,403.25);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CCFFFF").s().p("Eg2kAdrMAAAg7VMBtJAAAMAAAA7Vg");
	this.shape_85.setTransform(511.9,403.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84}]}).to({state:[{t:this.shape_85},{t:this.shape_84}]},35).to({state:[]},1).wait(63));

	// envelope
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#CC99CC").ss(2,1,1).p("EhACgktMCAFAAAMAAABJbMiAFAAAg");
	this.shape_86.setTransform(508.05,402.625);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("EhACAkuMAAAhJbMCAFAAAMAAABJbg");
	this.shape_87.setTransform(508.05,402.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86}]}).to({state:[{t:this.shape_87},{t:this.shape_86}]},35).to({state:[]},1).wait(63));

	// Label
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AACCvIAAjkQgXASgVALQgXALggAKIAAhPQAwgPAbgWQAbgWAPghIBPAAIAAFdg");
	this.shape_88.setTransform(607.25,316.075);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgMQgMgLgTgBQgWABgOARg");
	this.shape_89.setTransform(561.6,321.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_90.setTransform(529.55,320.825);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_91.setTransform(497.6,321.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_92.setTransform(465.625,321.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_93.setTransform(432.1,316.375);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_94.setTransform(609.075,316.075);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_95.setTransform(609.375,316.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_94}]},10).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_95}]},10).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_95}]},15).to({state:[]},1).wait(63));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(890.15,684.65);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).to({_off:true},87).wait(12));

	// credits
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AhWCHIAAgHQBFg/AbgoQAcgnAAghQAAgZgQgQQgPgQgVAAQgTAAgQALQgPAMgHAWIgIAAQAFgkAVgUQATgTAfAAQAfAAAVAVQAWAUAAAcQAAAVgJAUQgPAeggAkQgwA1gMALIBEAAQAVAAAJgCQAJgBAGgFQAHgFAFgJIAHAAIgSAzg");
	this.shape_96.setTransform(842.5,401.175);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AhWCHIAAgHQBEg/AbgoQAdgnAAghQAAgZgPgQQgQgQgUAAQgUAAgPALQgQAMgIAWIgHAAQAFgkAUgUQAVgTAeAAQAfAAAWAVQAVAUAAAcQAAAVgJAUQgOAeghAkQgvA1gNALIBEAAQAWAAAIgCQAIgBAHgFQAHgFAFgJIAHAAIgSAzg");
	this.shape_97.setTransform(822.5,401.175);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AhABdQgUglgBg2QAAgsAOghQAOghAXgPQARgNASgBQAeAAAZAgQAdAmAABCQABAtgNAgQgOAggUAPQgVAPgSAAQgmAAgagtgAgWhwQgOAQgFAkQgGAiAAAhQAAA3AOAiQALAdAWAAQAKABALgKQALgKAHgWQAJghAAg9QAAgtgKgeQgHgWgLgKQgIgHgLABQgNAAgKALg");
	this.shape_98.setTransform(802.9,401.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AhXCHIAAgHQBFg/AcgoQAcgnAAghQAAgZgQgQQgPgQgVAAQgTAAgQALQgPAMgHAWIgIAAQAFgkAVgUQATgTAfAAQAfAAAVAVQAWAUAAAcQAAAVgJAUQgOAeghAkQgwA1gMALIBFAAQAVAAAIgCQAIgBAIgFQAGgFAFgJIAIAAIgTAzg");
	this.shape_99.setTransform(782.5,401.175);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AhQB+QgIgHAAgIQABgIAFgFQAGgFAIAAQAHAAALAEIAKADQAGAAAHgGQAHgGAGgSIAOgfIhBiGQgCgGgHgJQgFgHgDgCQgEgDgLgCIAAgIIBTAAIAAAIIgEAAQgIAAgEADQgFAEAAAGQAAAHAHAOIAqBaIAohjQADgIAAgHQAAgEgBgCQgCgCgDgBIgMgBIAAgIIA7AAIAAAIQgIAAgDADQgFACgEAGIgHAQIhHCxQgLAagRANQgRAOgQAAQgMAAgHgHg");
	this.shape_100.setTransform(752.9,410.075);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AAYBXQgGgHAAgQQgaAWgHADQgLAFgMAAQgSAAgMgNQgMgMAAgVQAAgNAFgKQAIgNAUgMQAUgLAtgQIAAgHQAAgbgIgKQgJgKgPAAQgMAAgIAHQgHAGAAAJIAAALQAAAJgEAFQgFAFgHAAQgHAAgFgFQgFgFAAgJQAAgRASgOQARgOAfAAQAXAAAPAIQALAGAGANQADAIAAAaIAAA8QAAAaABAGQABAFADACQACACADAAQADAAACgBQAEgDAMgLIAAAKQgWAegUAAQgJAAgGgHgAgTAAQgPAJgHAJQgHAKAAALQAAAOAJAJQAIAJALAAQAPAAAXgTIAAhDQgcALgJAEg");
	this.shape_101.setTransform(734.725,405.675);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AA6CFIAAgHIAJAAQARAAAHgLQAEgGAAgWIAAixIhlDfIgGAAIhmjfIAACxQAAAYAEAGQAIAIAQABIAJAAIAAAHIhdAAIAAgHIAKAAQARAAAHgLQAEgGAAgWIAAitQAAgRgEgIQgDgFgHgEQgHgEgRAAIAAgIIBMAAIBeDPIBfjPIBLAAIAAAIIgJAAQgRAAgHAKQgEAGAAAWIAACtQAAAYAFAGQAIAIAPABIAJAAIAAAHg");
	this.shape_102.setTransform(707.3,401.45);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgcAsQAUgGAKgOQALgOAAgPQAAgEgBgCIgDgCIgJAEQgDACgEAAQgJAAgHgGQgFgGAAgKQAAgJAHgHQAIgHAKAAQAMAAAKAMQAKALAAASQAAATgOASQgOARgdAKg");
	this.shape_103.setTransform(674.65,416.075);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgIBzQgIgFgEgJQgFgJAAgUIAAh3IgcAAIAAgGQALgFALgKQALgKAJgOQAFgIAHgTIAGAAIAAA6IAqAAIAAAOIgqAAIAABzQAAARAFAGQAFAHAHAAQAHAAAGgEQAGgEADgIIAIAAQgHATgMAKQgNAJgNAAQgJAAgIgFg");
	this.shape_104.setTransform(664.275,402.975);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("Ag/BcIAAgHQANAAAHgFQAFgDACgGQAAgEABgPIAAhFQgBgfAAgGQgCgFgDgEQgEgCgFAAQgGAAgHACIgCgHIA2gVIAIAAIAAAoQAVgoAYAAQAKAAAIAHQAGAGAAAIQAAAIgEAGQgFAEgHAAQgIAAgHgGQgJgHgFAAQgDAAgEAEQgJAIgIASIAABVQAAAPADAHQACAGAHADQAGAEAMAAIAAAHg");
	this.shape_105.setTransform(652.1,405.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AAkCIIAAgHQAQgCAGgEQAFgEAAgHQAAgJgIgSIgQgmIhlAAIgSAqQgHAPAAAHQAAAHAGAEQAGAFATACIAAAHIhUAAIAAgHQARgEAFgFQAKgJAMgcIBdjZIAGAAIBcDbQALAaAJAJQAJAIARABIAAAHgAg4AgIBaAAIgshqg");
	this.shape_106.setTransform(630.675,401.15);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AhdCHIAAgHIAFAAQALAAAIgFQADgCACgEQACgFAAgUIAAioQAAgRgBgFQgCgFgEgCQgDgCgFAAQgFAAgHACIgDgGIA3gWIAHAAIAAAqQAOgYAOgJQANgKAQAAQAbAAASAVQAWAaAAApQAAAugbAeQgVAZgiAAQgOAAgKgEQgIgDgKgJIAAA2QAAATADAFQACAFAGADQAFADAOAAIAAAHgAgGhlQgHAEgRARIAABDQAAAVADAGQACAMALAIQAKAJAQAAQATAAAMgPQAQgUAAgjQAAgpgSgWQgNgQgQAAQgKAAgIAFg");
	this.shape_107.setTransform(595.55,409.775);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("ABABcIAAgHIAFAAQALAAAHgFQAEgDACgGQABgEAAgPIAAhNQAAgVgGgJQgIgNgQAAQgLABgKAEQgLAFgPAOIAAADIAAAIIAABVQABASACAEQACAFAFADQAGADAOAAIAAAHIhaAAIAAgHQAPAAAGgEQAFgDADgHQABgEAAgPIAAhNQAAgVgHgKQgIgNgQAAQgLABgKAFQgQAJgJAKIAABgQAAARACAFQADAGAFACQAEADAPAAIAAAHIhYAAIAAgHQAMAAAFgDQAFgDACgFQADgGAAgQIAAhEQAAgegCgIQgBgGgDgDQgDgCgFAAQgFAAgIACIgDgHIA1gVIAJAAIAAAmIAXgWQAJgIAKgEQAKgEAKAAQARAAALAKQANAJADATQAVgXAOgIQANgHAPAAQAOAAALAHQALAIAHAQQAEALAAAYIAABNQAAARADAFQACAFAEADQAGADAMAAIAAAHg");
	this.shape_108.setTransform(570.85,405.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AhBA+QgUgbAAghQAAgYAMgYQAMgZAUgLQAUgMAVAAQApAAAYAfQAVAaAAAiQAAAYgLAYQgMAZgUAMQgUANgYAAQgoAAgYghgAgahLQgKAGgGAQQgHAPAAAYQAAAmAQAdQAPAcAZAAQASAAANgQQAMgPAAgmQAAgvgUgbQgOgTgVAAQgKAAgLAGg");
	this.shape_109.setTransform(545.175,405.775);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AhbBZQgbgkAAgxQAAgmARgiQASghAggSQAfgSAjAAQAdAAAcANQAIAFAEAAQAFAAAEgEQAFgFACgJIAHAAIAGBaIgGAAQgMgpgWgSQgXgRgfgBQgaAAgVAOQgVANgMAdQgNAeAAArQAAAjAMAbQALAaAYAOQAXAPAcAAQAaAAAUgMQATgKAYgiIAGAFQgUAigaARQgbAQgkAAQhBABgkgyg");
	this.shape_110.setTransform(521.875,401.45);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgcAsQAUgGAKgOQALgOAAgPQAAgEgBgCIgEgCIgIAEQgDACgEAAQgKAAgFgGQgGgGAAgKQAAgJAHgHQAIgHAKAAQAMAAAKAMQAKALAAASQAAATgOASQgOARgdAKg");
	this.shape_111.setTransform(493.55,416.075);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AhRBaIAAgHIB3ieIg7AAQgSAAgGADQgGACgEAHQgFAKgBAOIgHAAIABgxICVAAIAAAHIh4CdIBBAAQAVABAHgEQAHgDAFgJQADgGACgUIAGAAIgBA3g");
	this.shape_112.setTransform(479.7,405.75);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgzBGQgYgZAAgrQAAgsAYgaQAYgaAiAAQAeAAAUAUQASAUABAhIh7AAQAAAnATAWQAUAXAZAAQASAAANgJQANgKAIgYIAHAFQgFAagTAWQgUAWgdAAQggAAgWgZgAgghEQgNANgCAWIBSAAQgBgQgDgIQgFgKgKgHQgKgGgJAAQgQAAgNAMg");
	this.shape_113.setTransform(462.05,405.75);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AAKCLIAAgHIADAAQANAAAFgEQAFgEACgHIABgTIAAg/QgBgdgCgIQgEgKgGgEQgHgFgJAAQgKAAgJAFQgLAFgOAPIAABeQAAATACAEQACAFAGADQAGADANAAIAAAHIhZAAIAAgHQAMAAAHgEQAEgCACgFQACgGAAgRIAAihQAAgegBgHQgCgHgCgDQgDgCgFAAQgFAAgJADIgCgHIA1gWIAJAAIAACDQAWgYAMgHQAMgGANAAQAPAAALAIQALAIAFASQAEAMAAAhIAAA/QAAARADAHQABAEAGADQAEADANAAIAAAHg");
	this.shape_114.setTransform(443,400.825);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("Ag0BFQgWgZAAgsQgBgpAagbQAZgaAiAAQAbAAAQAOQARAOAAAPQAAAHgEAFQgFAFgJAAQgMAAgFgIQgEgEAAgLQgCgMgGgGQgIgGgLAAQgTAAgMAPQgPATgBAfQABAfAPAZQAQAYAaAAQASAAAQgNQALgJAKgXIAGACQgIAkgVATQgVATgaAAQgdAAgXgag");
	this.shape_115.setTransform(424.15,405.775);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AAKBcIAAgHIADAAQANAAAFgEQAFgDACgIIAAgSIAAhIQAAgZgGgLQgGgLgPAAQgXAAgXAZIAABeQAAARADAFQACAFAFADQAFADAPAAIAAAHIhZAAIAAgHIAEAAQAOAAAEgHQAFgHAAgTIAAhCQAAgggBgHQgCgHgDgDQgDgCgFAAQgFAAgIACIgDgHIA2gVIAIAAIAAAlQAgglAbAAQAPAAALAHQAKAIAGAQQAFAMAAAYIAABMQAAARACAFQADAFAEADQAFADANAAIAAAHg");
	this.shape_116.setTransform(405.275,405.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AAYBXQgGgHAAgQQgaAWgHADQgLAFgMAAQgSAAgMgNQgMgMAAgVQAAgNAFgKQAIgNAUgMQAUgLAtgQIAAgHQAAgbgIgKQgJgKgPAAQgMAAgIAHQgHAGAAAJIAAALQAAAJgEAFQgFAFgHAAQgHAAgFgFQgFgFAAgJQAAgRASgOQARgOAfAAQAXAAAPAIQALAGAGANQADAIAAAaIAAA8QAAAaABAGQABAFADACQACACADAAQADAAACgBQAEgDAMgLIAAAKQgWAegUAAQgJAAgGgHgAgTAAQgPAJgHAJQgHAKAAALQAAAOAJAJQAIAJALAAQAPAAAXgTIAAhDQgcALgJAEg");
	this.shape_117.setTransform(387.075,405.675);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgQCJIgZgHQgTgGgGAAQgEAAgDACQgDAEgBAIIgIAAIAAhbIAIAAQAFAdAJAOQAIAPASAJQARAKAVAAQAYgBAOgNQAOgMAAgSQAAgKgFgKQgGgJgLgJQgIgGgggTQgjgTgOgKQgOgMgHgNQgIgOAAgRQAAgcAWgVQAWgVAiABQATAAAZAKQAKAFAEAAQAGAAADgDQADgDACgJIAIAAIAABbIgIAAQgDgagKgQQgIgPgRgKQgRgJgRAAQgUAAgOANQgNAMAAAQQAAAMAIAKQAMAOAtAZQAlAUAOAJQAOALAHAPQAHAOAAAQQAAAegYAWQgXAVglAAQgKAAgKgBg");
	this.shape_118.setTransform(366.6,401.45);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AAkCIIAAgHQAQgCAGgEQAFgEAAgHQAAgJgIgSIgQgmIhlAAIgSAqQgHAPAAAHQAAAHAGAEQAGAFATACIAAAHIhUAAIAAgHQARgEAFgFQAKgJAMgcIBdjZIAGAAIBcDbQALAaAJAJQAJAIARABIAAAHgAg4AgIBaAAIgshqg");
	this.shape_119.setTransform(340.775,401.15);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgOBZQgHgHAAgIQAAgKAHgGQAGgHAIABQAJgBAGAHQAHAGAAAKQAAAIgHAHQgGAGgJAAQgIAAgGgGgAgOg5QgGgGAAgJQAAgJAGgHQAGgGAIAAQAJAAAHAGQAGAHAAAJQAAAJgGAGQgHAGgJAAQgIAAgGgGg");
	this.shape_120.setTransform(310.925,405.75);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgjBZIgLgCQgEAAgDAFIgGAAIAAhAIAGAAQAGAbAPAOQAPAOATAAQANAAAJgIQAIgIAAgLQAAgNgJgJQgJgKgcgOQgcgNgJgLQgJgLAAgRQAAgWAPgPQAPgPAZAAQAJAAAPAFIANACIAFgBQACgBACgFIAHAAIAAA9IgHAAQgHgdgMgKQgMgKgQAAQgOAAgJAHQgIAHAAAJQAAALAHAIQAFAIATAJIAcANQAnATAAAfQAAAZgTAPQgSAPgWAAQgQAAgVgGg");
	this.shape_121.setTransform(297.8,405.775);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgIBzQgIgFgEgJQgFgJAAgUIAAh3IgcAAIAAgGQALgFALgKQALgKAJgOQAFgIAHgTIAGAAIAAA6IAqAAIAAAOIgqAAIAABzQAAARAFAGQAFAHAHAAQAHAAAGgEQAGgEADgIIAIAAQgHATgMAKQgNAJgNAAQgJAAgIgFg");
	this.shape_122.setTransform(284.425,402.975);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AgpCLIAAgHQANAAAEgDQAFgCADgGQACgGAAgRIAAhFQAAgdgCgHQgBgHgDgCQgCgCgGAAQgFAAgIACIgDgHIA1gVIAIAAIAACOQAAARADAGQACAFAFADQAFADANAAIAAAHgAgLhoQgHgGABgIQgBgIAHgGQAFgGAHAAQAIAAAHAGQAFAGAAAIQAAAIgFAGQgHAGgIAAQgGAAgGgGg");
	this.shape_123.setTransform(273.2,400.825);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AAgCOIAAgaQgNAOgNAFQgLAHgPAAQgdgBgWgYQgWgYAAgnQAAgmAYggQAYgfAnAAQAWgBAQAPIAAggQAAgfgCgHQgBgHgDgCQgEgDgEAAQgFAAgJADIgCgHIA1gWIAJAAIAADOQAAAfABAIQACAGADADQADADAFAAQAFAAAJgDIACAGIg1AXgAgngUQgSAUAAAmQAAAoARAVQARAVAVAAQARAAARgSIAAhcQgCgMgFgLQgGgLgKgFQgJgHgJAAQgRAAgNAQg");
	this.shape_124.setTransform(258.275,401.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgzBGQgXgZAAgrQgBgsAYgaQAYgaAiAAQAeAAAUAUQASAUABAhIh7AAQAAAnATAWQAUAXAZAAQASAAANgJQANgKAIgYIAHAFQgFAagTAWQgUAWgdAAQggAAgWgZgAgghEQgNANgCAWIBSAAQgBgQgDgIQgFgKgKgHQgKgGgJAAQgQAAgNAMg");
	this.shape_125.setTransform(238.85,405.75);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("Ag/BcIAAgHQANAAAHgFQAEgDADgGQABgEAAgPIAAhFQAAgfgBgGQgCgFgDgEQgEgCgFAAQgGAAgHACIgDgHIA2gVIAJAAIAAAoQAVgoAYAAQALAAAGAHQAIAGgBAIQAAAIgEAGQgGAEgHAAQgGAAgIgGQgKgHgEAAQgDAAgEAEQgJAIgIASIAABVQAAAPADAHQACAGAHADQAGAEAMAAIAAAHg");
	this.shape_126.setTransform(223.4,405.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AhbBZQgbgkAAgxQAAgmARgiQASghAggSQAfgSAjAAQAdAAAcANQAIAFAEAAQAFAAAEgEQAFgFACgJIAHAAIAGBaIgGAAQgMgpgWgSQgXgRgfgBQgaAAgVAOQgVANgMAdQgNAeAAArQAAAjAMAbQALAaAYAOQAXAPAcAAQAaAAAUgMQATgKAYgiIAGAFQgUAigaARQgbAQgkAAQhBABgkgyg");
	this.shape_127.setTransform(203.175,401.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},87).wait(12));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(600.1,283.7,391.1,479.90000000000003);
// library properties:
lib.properties = {
	id: 'F8946E6F5FF9854E8F0604C9F4EF7AA8',
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
an.compositions['F8946E6F5FF9854E8F0604C9F4EF7AA8'] = {
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