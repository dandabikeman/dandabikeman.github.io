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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EhC8gRpMCF5AAAMhCQAjTg");
	this.shape.setTransform(428.475,113);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("EhC8gRpMCF5AAAMhCQAjTg");
	this.shape_1.setTransform(428.475,113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1.5,-1.5,860,229), null);


(lib.BasicButtoncopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Ag2BEQgOgUAAgbQABgeAPgQQAOgRAXAAQALAAAIAEQAJADAIAIIAAg7IAvAAIAACrIgsAAIAAgTQgKAMgIAEQgIAGgNgBQgaAAgNgTgAgOAAQgGAGAAARQAAAPAGAIQAFAGAJAAQAIABAGgIQAHgHAAgQQAAgOgHgIQgGgGgIAAQgJAAgFAGg");
	this.shape.setTransform(85.7,25.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASBAIAAhEQAAgLgEgFQgFgFgIAAQgHAAgGAGQgFAHAAAQIAAA8IgwAAIAAh8IAtAAIAAAVQAKgNAKgFQAJgGAPAAQATAAAMAMQALAMAAAZIAABOg");
	this.shape_1.setTransform(70.025,27.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBWIAAh7IAvAAIAAB7gAgXg0IAAghIAvAAIAAAhg");
	this.shape_2.setTransform(58,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAZA+IgZhKIgXBKIgrAAIguh7IAuAAIAUBNIAZhNIAqAAIAbBNIAUhNIAtAAIgtB7g");
	this.shape_3.setTransform(42.725,27.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmA6QgPgHgIgPQgKgPAAgVQAAgcATgSQATgSAgAAQAaAAAPAIQAQAIAIAQQAIAPAAAXIAAAGIheAAQAAALAGAGQAGAIALAAQAGAAAHgDQAEgDAEgFIAvAEQgLATgPAIQgPAIgcAAQgYAAgOgHgAgRgbQgEAGgBALIAtAAQgBgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_4.setTransform(23.4,27.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwBAIAAh8IAtAAIAAAVQAFgOAHgEQAGgGALAAQALAAAMAHIgPAiQgJgDgEAAQgKAAgFAHQgGALAAAdIAAAqg");
	this.shape_5.setTransform(10.7,27.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Rounded
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_7.setTransform(50,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_8.setTransform(50,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_9.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_8},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Squared
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_10.setTransform(50,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_11.setTransform(50,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_12.setTransform(50,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_13.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_12},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_10}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


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
(lib.PracticeCardPTacla = function(mode,startPosition,loop,reversed) {
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
		this.btn1.addEventListener("click", fl_ClickFunctionName.bind(this));
		this.btn2.addEventListener("click", fl_ClickFunctionName.bind(this));
		
		function fl_ClickFunctionName()
		{
			this.play(); 
		}
		
		this.btn3.addEventListener("click", rewind.bind(this));
		
		function rewind()
		{
			this.gotoAndStop(0);
		}
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.gotoAndPlay(20);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// message
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AgTAjIAAhFIAnAAIAABFg");
	this.shape.setTransform(653.475,256.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgpBNQgJgSAAgkIAAh0IAlAAIAABkQAAARADAIQAEAHAGAAQAGAAAEgKQAEgKAAgXIAAhZIAlAAIAAC2IgjAAIAAgdQgHASgIAIQgHAIgLAAQgQgBgIgQg");
	this.shape_1.setTransform(644.175,251);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AglBJQgRgbAAguQAAgoAPgbQAPgbAYAAQAdgBAPAgQALAaAAAlQAAApgOAcQgPAbgaAAQgWgBgPgWgAgMgjQgFAMAAAXQAAAZAFALQAFAMAHAAQAIAAAFgMQAFgLAAgZQAAgXgFgMQgFgMgIABQgHgBgFAMg");
	this.shape_2.setTransform(631.825,250.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AgTB+IAAhqIg0iRIAtAAIAaBVIAbhVIAtAAIg0CRIAABqg");
	this.shape_3.setTransform(620.05,247.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgdBWQgLgLgHgWQgIgXAAgeQAAgpAPgbQAOgaAaAAQATgBAMAMQAMAMAHAXQAGAWAAAjIAAAIIhJAAQABARAEAJQAFAMAIgBQAFAAAFgEQADgEADgJIAlAHQgJAcgLALQgMAMgWABQgSgBgLgJgAgNgoQgDAJgBAQIAjAAQgBgVgEgJQgFgIgIAAQgIAAgFANg");
	this.shape_4.setTransform(600.425,250.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AgQBbIgoi2IAmAAIASB0IATh0IAmAAIgpC2g");
	this.shape_5.setTransform(589.125,250.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AglBJQgRgbAAguQAAgoAPgbQAPgbAYAAQAdgBAPAgQALAaAAAlQAAApgOAcQgPAbgaAAQgWgBgPgWgAgMgjQgFAMAAAXQAAAZAFALQAFAMAHAAQAIAAAFgMQAFgLAAgZQAAgXgFgMQgFgMgIABQgHgBgFAMg");
	this.shape_6.setTransform(577.825,250.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AgzB+IAAj7IAoAAIAAC9IBAAAIAAA+g");
	this.shape_7.setTransform(565.85,247.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AgUB+IAAj7IApAAIAAD7g");
	this.shape_8.setTransform(549.425,247.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AgTAoQALgKAEgJQAEgJAAgMIgTAAIAAhFIAnAAIAAA5QAAAfgHATQgHASgQAOg");
	this.shape_9.setTransform(536.575,260.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AgdBWQgLgLgHgWQgIgXAAgeQAAgpAPgbQAOgaAaAAQATgBAMAMQAMAMAHAXQAGAWAAAjIAAAIIhJAAQABARAEAJQAFAMAIgBQAFAAAFgEQADgEADgJIAlAHQgJAcgLALQgMAMgWABQgSgBgLgJgAgNgoQgDAJgBAQIAjAAQgBgVgEgJQgFgIgIAAQgIAAgFANg");
	this.shape_10.setTransform(527.325,250.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AAtBdIAAhnQAAgMgDgGQgEgJgFAAQgHgBgEAJQgEAJAAAUIAABdIgkAAIAAhkIAAgQQgCgGgCgFQgDgEgEAAQgHAAgEAJQgEAJAAAUIAABdIglAAIAAi2IAjAAIAAAbQAHgQAIgIQAHgGALAAQALgBAGAIQAHAIAEAPQAJgSAHgGQAHgHALABQAPAAAJARQAJARAAAmIAABxg");
	this.shape_11.setTransform(511.875,250.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AglBdIAAi2IAiAAIAAAeQAFgTAFgIQAFgGAIAAQAIgBAKAKIgLAyQgHgFgEAAQgHAAgEALQgFAQAAArIAAA9g");
	this.shape_12.setTransform(493.05,250.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("AglBJQgRgbAAguQAAgoAPgbQAPgbAYAAQAdgBAPAgQALAaAAAlQAAApgOAcQgPAbgaAAQgWgBgPgWgAgMgjQgFAMAAAXQAAAZAFALQAFAMAHAAQAIAAAFgMQAFgLAAgZQAAgXgFgMQgFgMgIABQgHgBgFAMg");
	this.shape_13.setTransform(481.925,250.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AgXCAIAAiCIgOAAIAAg0IAOAAIAAgIIABgZQACgNADgIQADgJAGgFQAHgGALABQAKgBASAFIgEAqIgKgCQgFAAgDADQgCAEgBAGIAAAQIASAAIAAA0IgSAAIAACCg");
	this.shape_14.setTransform(472.75,247.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AgdBWQgLgLgHgWQgIgXAAgeQAAgpAPgbQAOgaAaAAQATgBAMAMQAMAMAHAXQAGAWAAAjIAAAIIhJAAQABARAEAJQAFAMAIgBQAFAAAFgEQADgEADgJIAlAHQgJAcgLALQgMAMgWABQgSgBgLgJgAgNgoQgDAJgBAQIAjAAQgBgVgEgJQgFgIgIAAQgIAAgFANg");
	this.shape_15.setTransform(456.475,250.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663300").s().p("AAOBdIAAhjQAAgSgDgHQgEgGgGAAQgFAAgFAJQgEAKAAAYIAABXIglAAIAAi2IAjAAIAAAeQAHgSAIgIQAHgIALABQAQAAAIAQQAJASAAAkIAABzg");
	this.shape_16.setTransform(444.05,250.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663300").s().p("AglBJQgRgbAAguQAAgoAPgbQAPgbAYAAQAdgBAPAgQALAaAAAlQAAApgOAcQgPAbgaAAQgWgBgPgWgAgMgjQgFAMAAAXQAAAZAFALQAFAMAHAAQAIAAAFgMQAFgLAAgZQAAgXgFgMQgFgMgIABQgHgBgFAMg");
	this.shape_17.setTransform(431.625,250.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663300").s().p("AgqBkQgKgdAAgoQAAgtALgYQAMgYASAAQAIAAAGAGQAHAFAGALIAAhXIAlAAIAAD7IgjAAIAAgbQgHARgGAGQgHAIgJAAQgUAAgLgcgAgKAAQgFAKAAAYQAAAWAFALQAEAKAGAAQAGAAAFgKQAFgLAAgYQAAgVgFgLQgFgKgGAAQgGAAgEAKg");
	this.shape_18.setTransform(419,247.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663300").s().p("AgdBWQgLgLgHgWQgIgXAAgeQAAgpAPgbQAOgaAaAAQATgBAMAMQAMAMAHAXQAGAWAAAjIAAAIIhJAAQABARAEAJQAFAMAIgBQAFAAAFgEQADgEADgJIAlAHQgJAcgLALQgMAMgWABQgSgBgLgJgAgNgoQgDAJgBAQIAjAAQgBgVgEgJQgFgIgIAAQgIAAgFANg");
	this.shape_19.setTransform(400.725,250.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663300").s().p("AgQBbIgoi2IAmAAIASB0IATh0IAmAAIgpC2g");
	this.shape_20.setTransform(389.425,250.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663300").s().p("AgtBQQgJgOAAgXQgBgVAHgNQAGgMASgHQAVgIAEgDIAOgIQAAgNgDgGQgDgFgHAAQgIAAgEAGQgEAEgCAMIgjgHQABgSAFgKQADgKAHgHQAFgGAJgDQAJgCALAAQAPAAAKADQAKAEAGALQAFAHADAOQADAPAAAMIAABQIABAVQABAHACALIgiAAIgDgKIgBgMQgHANgIAGQgJAIgMAAQgSgBgIgPgAAAAOQgMAGgDAFQgCAFAAAIQAAAIACAGQAEAEAFAAQAGABAFgGQAFgGACgIQADgIAAgNIAAgLIgPAJg");
	this.shape_21.setTransform(377.85,250.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663300").s().p("AAOB+IAAhkQAAgSgEgHQgDgGgGAAQgFAAgFAJQgEAJAAAZIAABYIglAAIAAj7IAlAAIAABdQAIgPAGgHQAHgGAKAAQAPAAAKARQAIASAAAjIAAB0g");
	this.shape_22.setTransform(365.45,247.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#663300").s().p("AgpBNQgJgSAAgkIAAhzIAlAAIAABjQAAASADAHQAEAHAGAAQAGAAAEgKQAEgKAAgXIAAhYIAlAAIAAC1IgjAAIAAgdQgHASgIAIQgHAIgLAAQgQAAgIgRg");
	this.shape_23.setTransform(931.225,197.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#663300").s().p("AglBJQgRgcAAgsQAAgqAPgbQAPgbAYAAQAdAAAPAgQALAaAAAlQAAAqgOAbQgPAbgaAAQgWgBgPgWgAgMgjQgFAMAAAYQAAAYAFALQAFAMAHAAQAIAAAFgMQAFgLAAgZQAAgXgFgMQgFgLgIAAQgHAAgFALg");
	this.shape_24.setTransform(918.875,197.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#663300").s().p("AgwB8IgCgxQAIAFAJAAQAHAAAEgFQAEgGADgPIgpi2IAnAAIATB6IATh6IAkAAIgmDDQgHAhgHAMQgIARgUAAQgIAAgRgFg");
	this.shape_25.setTransform(907.475,201.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#663300").s().p("AgnByQgLgRAAgbIABgKIAjAIQACAKADADQAEAGAFAAQAIAAAEgJQAEgIAAgUIAAgcQgGANgFAFQgIAJgKAAQgTAAgMggQgIgWAAglQAAgrALgXQALgWARAAQALAAAHAHQAHAIAGAQIAAgbIAjAAIAACsIAAAIQAAARgEAQQgEAQgGAJQgGAKgKAEQgKAFgNAAQgcAAgLgRgAgLhFQgEAJAAAXQAAAUAEAJQAFAJAGAAQAHAAAEgJQAFgKAAgUQAAgUgFgKQgFgLgGAAQgHAAgEAKg");
	this.shape_26.setTransform(889.125,201.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#663300").s().p("AAOBdIAAhjQAAgRgDgIQgEgGgGgBQgGAAgEAKQgEAJAAAYIAABYIglAAIAAi1IAjAAIAAAdQAHgSAIgIQAHgIALAAQAQAAAIARQAJASAAAkIAABzg");
	this.shape_27.setTransform(876.95,197.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#663300").s().p("AgRB+IAAi2IAkAAIAAC2gAgRhOIAAgvIAkAAIAAAvg");
	this.shape_28.setTransform(867.7,194.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#663300").s().p("AAOB+IAAhkQAAgSgEgHQgDgGgGAAQgGAAgEAJQgEAJAAAZIAABYIglAAIAAj7IAlAAIAABdQAHgPAHgHQAIgGAJAAQAPAAAJARQAJASAAAjIAAB0g");
	this.shape_29.setTransform(858.4,194.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#663300").s().p("AgJB6QgGgHgDgOQgEgNAAgfIAAg/IgNAAIAAg0IANAAIAAghIAkgkIAABFIAVAAIAAA0IgVAAIAAA/QAAAMACAEQABAGAFAAQAEAAAHgFIADAxQgOAFgLAAQgNAAgHgGg");
	this.shape_30.setTransform(848.075,194.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#663300").s().p("AgwB8IgCgxQAIAFAJAAQAHAAAEgFQAEgGADgPIgpi2IAnAAIATB6IATh6IAkAAIgmDDQgHAhgHAMQgIARgUAAQgIAAgRgFg");
	this.shape_31.setTransform(838.325,201.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#663300").s().p("AglBdIAAi1IAjAAIAAAdQADgTAGgIQAFgGAIgBQAIAAAKAKIgMAyQgGgFgEAAQgHAAgEALQgFAQAAArIAAA9g");
	this.shape_32.setTransform(828.25,197.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#663300").s().p("AgdBVQgLgKgHgWQgIgWAAgeQAAgqAPgbQAOgbAaAAQATAAAMAMQAMAMAHAWQAGAXAAAjIAAAJIhJAAQABAQAEAJQAFAMAIgBQAFABAFgGQADgDADgJIAlAHQgJAbgLAMQgMANgWAAQgSAAgLgLgAgNgoQgDAIgBARIAjAAQgBgUgEgJQgFgJgIAAQgIAAgFANg");
	this.shape_33.setTransform(817.125,197.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#663300").s().p("AgQBbIgoi1IAmAAIASBzIAThzIAmAAIgpC1g");
	this.shape_34.setTransform(805.825,197.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#663300").s().p("AgdBVQgLgKgHgWQgIgWAAgeQAAgqAPgbQAOgbAaAAQATAAAMAMQAMAMAHAWQAGAXAAAjIAAAJIhJAAQABAQAEAJQAFAMAIgBQAFABAFgGQADgDADgJIAlAHQgJAbgLAMQgMANgWAAQgSAAgLgLgAgNgoQgDAIgBARIAjAAQgBgUgEgJQgFgJgIAAQgIAAgFANg");
	this.shape_35.setTransform(794.375,197.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#663300").s().p("AglBdIAAi1IAiAAIAAAdQAFgTAFgIQAFgGAIgBQAIAAAKAKIgLAyQgHgFgEAAQgHAAgEALQgFAQAAArIAAA9g");
	this.shape_36.setTransform(778.7,197.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#663300").s().p("AglBJQgRgcAAgsQAAgqAPgbQAPgbAYAAQAdAAAPAgQALAaAAAlQAAAqgOAbQgPAbgaAAQgWgBgPgWgAgMgjQgFAMAAAYQAAAYAFALQAFAMAHAAQAIAAAFgMQAFgLAAgZQAAgXgFgMQgFgLgIAAQgHAAgFALg");
	this.shape_37.setTransform(767.525,197.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#663300").s().p("AgXCAIAAiCIgOAAIAAgzIAOAAIAAgJIABgZQACgNADgIQADgJAHgFQAGgGALABQAKgBASAFIgEAqIgLgCQgEAAgDAEQgCACgBAHIgBARIASAAIAAAzIgSAAIAACCg");
	this.shape_38.setTransform(758.35,193.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#663300").s().p("AgpBNQgJgSAAgkIAAhzIAlAAIAABjQAAASADAHQAEAHAGAAQAGAAAEgKQAEgKAAgXIAAhYIAlAAIAAC1IgjAAIAAgdQgHASgIAIQgHAIgLAAQgQAAgIgRg");
	this.shape_39.setTransform(742.025,197.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#663300").s().p("AglBJQgRgcAAgsQAAgqAPgbQAPgbAYAAQAdAAAPAgQALAaAAAlQAAAqgOAbQgPAbgaAAQgWgBgPgWgAgMgjQgFAMAAAYQAAAYAFALQAFAMAHAAQAIAAAFgMQAFgLAAgZQAAgXgFgMQgFgLgIAAQgHAAgFALg");
	this.shape_40.setTransform(729.625,197.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#663300").s().p("AgwB8IgCgxQAIAFAJAAQAHAAAEgFQAEgGADgPIgpi2IAnAAIATB6IATh6IAkAAIgmDDQgHAhgHAMQgIARgUAAQgIAAgRgFg");
	this.shape_41.setTransform(718.225,201.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#663300").s().p("AAPB+IgThJIgOAaIAAAvIglAAIAAj7IAlAAIAACBIAbg8IAtAAIgiA/IAkB3g");
	this.shape_42.setTransform(700.7,194.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#663300").s().p("AAOBdIAAhjQAAgRgEgIQgDgGgGgBQgGAAgEAKQgEAJAAAYIAABYIglAAIAAi1IAiAAIAAAdQAIgSAIgIQAHgIALAAQAPAAAKARQAIASAAAkIAABzg");
	this.shape_43.setTransform(687.75,197.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#663300").s().p("AguBRQgIgPgBgXQABgVAGgNQAHgMARgHQAVgIAFgEIANgHQAAgOgDgFQgDgFgHAAQgIAAgFAGQgDAEgCALIgjgGQACgSADgKQAEgKAHgHQAFgGAJgDQAJgDAKAAQAQAAAKAEQAKAEAHAKQAEAJADAOQADAOAAANIAABQIABAUQAAAHAEALIgjAAIgDgKIgBgMQgIAOgGAFQgKAIgNAAQgQAAgKgPgAAAAOQgMAFgCAGQgEAGAAAHQAAAIAEAGQACAEAHAAQAFABAFgGQAGgGACgIQACgIAAgNIAAgMIgPAKg");
	this.shape_44.setTransform(675.35,197.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#663300").s().p("AAOB+IAAhkQAAgSgDgHQgEgGgGAAQgGAAgEAJQgEAJAAAZIAABYIglAAIAAj7IAlAAIAABdQAIgPAGgHQAIgGAKAAQAPAAAIARQAJASAAAjIAAB0g");
	this.shape_45.setTransform(662.95,194.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#663300").s().p("AgUB+IAAi9IgpAAIAAg+IB7AAIAAA+IgqAAIAAC9g");
	this.shape_46.setTransform(649.525,194.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#663300").s().p("AgTAjIAAhFIAnAAIAABFg");
	this.shape_47.setTransform(633.575,203.125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#663300").s().p("AAtBdIAAhnQAAgMgDgGQgEgKgFAAQgHAAgEAJQgEAJAAAUIAABdIgkAAIAAhjIAAgRQgCgGgCgFQgDgEgEAAQgHAAgEAJQgEAJAAAUIAABdIglAAIAAi1IAjAAIAAAaQAHgQAIgIQAHgGALgBQALAAAGAIQAHAIAEAPQAJgSAHgGQAHgHALAAQAPAAAJASQAJASAAAkIAAByg");
	this.shape_48.setTransform(621.275,197.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#663300").s().p("AglBJQgRgcAAgsQAAgqAPgbQAPgbAYAAQAdAAAPAgQALAaAAAlQAAAqgOAbQgPAbgaAAQgWgBgPgWgAgMgjQgFAMAAAYQAAAYAFALQAFAMAHAAQAIAAAFgMQAFgLAAgZQAAgXgFgMQgFgLgIAAQgHAAgFALg");
	this.shape_49.setTransform(605.725,197.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#663300").s().p("AApB+IAAi/IgaC/IgdAAIgai/IAAC/IgiAAIAAj7IA2AAIAUCYIAViYIA2AAIAAD7g");
	this.shape_50.setTransform(590.775,194.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#663300").s().p("AgTAoQALgKAEgJQAEgJAAgMIgTAAIAAhFIAnAAIAAA5QAAAfgHATQgHASgQAOg");
	this.shape_51.setTransform(572.725,206.725);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#663300").s().p("AgdBVQgLgKgHgWQgIgWAAgeQAAgqAPgbQAOgbAaAAQATAAAMAMQAMAMAHAWQAGAXAAAjIAAAJIhJAAQABAQAEAJQAFAMAIgBQAFABAFgGQADgDADgJIAlAHQgJAbgLAMQgMANgWAAQgSAAgLgLgAgNgoQgDAIgBARIAjAAQgBgUgEgJQgFgJgIAAQgIAAgFANg");
	this.shape_52.setTransform(563.475,197.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#663300").s().p("AglBdIAAi1IAiAAIAAAdQAFgTAFgIQAFgGAIgBQAIAAAKAKIgLAyQgHgFgEAAQgHAAgEALQgFAQAAArIAAA9g");
	this.shape_53.setTransform(553.7,197.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#663300").s().p("AgtBRQgJgPAAgXQgBgVAHgNQAGgMASgHQAVgIAFgEIANgHQAAgOgDgFQgDgFgHAAQgIAAgEAGQgEAEgCALIgkgGQACgSAFgKQADgKAHgHQAFgGAJgDQAJgDALAAQAPAAAKAEQAKAEAGAKQAFAJADAOQADAOAAANIAABQIABAUQABAHACALIgiAAIgDgKIgBgMQgHAOgIAFQgJAIgMAAQgSAAgIgPgAAAAOQgMAFgDAGQgCAGAAAHQAAAIACAGQAEAEAFAAQAGABAFgGQAFgGACgIQADgIAAgNIAAgMIgPAKg");
	this.shape_54.setTransform(542.55,197.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#663300").s().p("AgpBNQgJgSAAgkIAAhzIAlAAIAABjQAAASADAHQAEAHAGAAQAGAAAEgKQAEgKAAgXIAAhYIAlAAIAAC1IgjAAIAAgdQgHASgIAIQgHAIgLAAQgQAAgIgRg");
	this.shape_55.setTransform(523.925,197.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#663300").s().p("AglBJQgRgcAAgsQAAgqAPgbQAPgbAYAAQAdAAAPAgQALAaAAAlQAAAqgOAbQgPAbgaAAQgWgBgPgWgAgMgjQgFAMAAAYQAAAYAFALQAFAMAHAAQAIAAAFgMQAFgLAAgZQAAgXgFgMQgFgLgIAAQgHAAgFALg");
	this.shape_56.setTransform(511.575,197.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#663300").s().p("AgwB8IgCgxQAIAFAJAAQAHAAAEgFQAEgGADgPIgpi2IAnAAIATB6IATh6IAkAAIgmDDQgHAhgHAMQgIARgUAAQgIAAgRgFg");
	this.shape_57.setTransform(500.175,201.225);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#663300").s().p("AglBdIAAi1IAiAAIAAAdQAFgTAFgIQAFgGAIgBQAIAAAKAKIgLAyQgHgFgEAAQgHAAgEALQgFAQAAArIAAA9g");
	this.shape_58.setTransform(484.95,197.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#663300").s().p("AgdBVQgLgKgHgWQgIgWAAgeQAAgqAPgbQAOgbAaAAQATAAAMAMQAMAMAHAWQAGAXAAAjIAAAJIhJAAQABAQAEAJQAFAMAIgBQAFABAFgGQADgDADgJIAlAHQgJAbgLAMQgMANgWAAQgSAAgLgLgAgNgoQgDAIgBARIAjAAQgBgUgEgJQgFgJgIAAQgIAAgFANg");
	this.shape_59.setTransform(473.825,197.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#663300").s().p("AgQBbIgoi1IAmAAIASBzIAThzIAmAAIgpC1g");
	this.shape_60.setTransform(462.525,197.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#663300").s().p("AgdBVQgLgKgHgWQgIgWAAgeQAAgqAPgbQAOgbAaAAQATAAAMAMQAMAMAHAWQAGAXAAAjIAAAJIhJAAQABAQAEAJQAFAMAIgBQAFABAFgGQADgDADgJIAlAHQgJAbgLAMQgMANgWAAQgSAAgLgLgAgNgoQgDAIgBARIAjAAQgBgUgEgJQgFgJgIAAQgIAAgFANg");
	this.shape_61.setTransform(451.075,197.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#663300").s().p("AglBdIAAi1IAjAAIAAAdQADgTAGgIQAFgGAIgBQAIAAAKAKIgMAyQgGgFgEAAQgHAAgEALQgFAQAAArIAAA9g");
	this.shape_62.setTransform(441.25,197.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#663300").s().p("AgdBVQgLgKgHgWQgIgWAAgeQAAgqAPgbQAOgbAaAAQATAAAMAMQAMAMAHAWQAGAXAAAjIAAAJIhJAAQABAQAEAJQAFAMAIgBQAFABAFgGQADgDADgJIAlAHQgJAbgLAMQgMANgWAAQgSAAgLgLgAgNgoQgDAIgBARIAjAAQgBgUgEgJQgFgJgIAAQgIAAgFANg");
	this.shape_63.setTransform(430.175,197.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#663300").s().p("AAOB+IAAhkQAAgSgEgHQgDgGgGAAQgGAAgEAJQgEAJAAAZIAABYIglAAIAAj7IAlAAIAABdQAIgPAGgHQAHgGAKAAQAPAAAKARQAIASAAAjIAAB0g");
	this.shape_64.setTransform(417.75,194.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#663300").s().p("AATBbIgThsIgSBsIghAAIgki1IAkAAIAPByIAUhyIAhAAIATByIAQhyIAkAAIgkC1g");
	this.shape_65.setTransform(402.45,197.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#663300").s().p("AgkBRQgLgOgDgbIAkgGQADANAEAFQAEAFAGAAQAHAAAEgGQADgFAAgGQAAgIgEgEQgDgDgMgEQgTgHgHgFQgIgFgFgMQgFgNAAgQQAAgTAFgNQAGgNAKgGQAJgGAQgBQARABAIAFQAIAEAGALQAFALAEARIgjAHQgBgJgEgEQgEgGgFAAQgGABgDAEQgDAEAAAGQAAAGAEAEQADADALADQATAEAJAHQAJAHAEAMQAFANAAAQQAAAQgFAPQgFAPgLAJQgLAJgSAAQgaAAgLgPg");
	this.shape_66.setTransform(381.775,197.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#663300").s().p("AgSB+IAAi2IAkAAIAAC2gAgShOIAAgvIAkAAIAAAvg");
	this.shape_67.setTransform(373.1,194.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#663300").s().p("AgdBVQgLgKgHgWQgIgWAAgeQAAgqAPgbQAOgbAaAAQATAAAMAMQAMAMAHAWQAGAXAAAjIAAAJIhJAAQABAQAEAJQAFAMAIgBQAFABAFgGQADgDADgJIAlAHQgJAbgLAMQgMANgWAAQgSAAgLgLgAgNgoQgDAIgBARIAjAAQgBgUgEgJQgFgJgIAAQgIAAgFANg");
	this.shape_68.setTransform(357.675,197.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#663300").s().p("AAtBdIAAhnQAAgMgDgGQgEgKgFAAQgHAAgEAJQgEAJAAAUIAABdIgkAAIAAhjIAAgRQgCgGgCgFQgDgEgEAAQgHAAgEAJQgEAJAAAUIAABdIglAAIAAi1IAjAAIAAAaQAHgQAIgIQAHgGALgBQALAAAGAIQAHAIAEAPQAJgSAHgGQAHgHALAAQAPAAAJASQAJASAAAkIAAByg");
	this.shape_69.setTransform(342.175,197.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#663300").s().p("AglBJQgRgcAAgsQAAgqAPgbQAPgbAYAAQAdAAAPAgQALAaAAAlQAAAqgOAbQgPAbgaAAQgWgBgPgWgAgMgjQgFAMAAAYQAAAYAFALQAFAMAHAAQAIAAAFgMQAFgLAAgZQAAgXgFgMQgFgLgIAAQgHAAgFALg");
	this.shape_70.setTransform(326.675,197.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#663300").s().p("AAWB+IAAhmIgrAAIAABmIgqAAIAAj7IAqAAIAABYIArAAIAAhYIApAAIAAD7g");
	this.shape_71.setTransform(312.8,194.025);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#663300").s().p("AgRB+IAAg+IAkAAIAAA+gAgLAvIgIhzIAAg5IAnAAIAAA5IgIBzg");
	this.shape_72.setTransform(295.775,194.025);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#663300").s().p("AgRB+IAAg+IAkAAIAAA+gAgLAvIgIhzIAAg5IAnAAIAAA5IgIBzg");
	this.shape_73.setTransform(289.575,194.025);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#663300").s().p("AgwB8IgCgxQAIAFAJAAQAHAAAEgFQAEgGADgPIgpi2IAnAAIATB6IATh6IAkAAIgmDDQgHAhgHAMQgIARgUAAQgIAAgRgFg");
	this.shape_74.setTransform(280.925,201.225);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#663300").s().p("AguBRQgIgPgBgXQABgVAGgNQAHgMARgHQAVgIAFgEIANgHQAAgOgDgFQgDgFgHAAQgIAAgFAGQgDAEgCALIgjgGQACgSADgKQAEgKAHgHQAFgGAJgDQAJgDAKAAQAQAAAKAEQAKAEAHAKQAEAJADAOQADAOAAANIAABQIABAUQAAAHAEALIgjAAIgDgKIgBgMQgIAOgGAFQgKAIgNAAQgQAAgKgPgAAAAOQgMAFgCAGQgEAGAAAHQAAAIAEAGQACAEAHAAQAFABAFgGQAGgGACgIQACgIAAgNIAAgMIgPAKg");
	this.shape_75.setTransform(269,197.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#663300").s().p("Ag8B+IAAj7IA8AAQASAAALAJQALAJAHASQAIARADAXQADAXAAAaQAAAogFAWQgFAWgIAPQgJAPgKAFQgNAHgLAAgAgTBFIAKAAQAMAAAFgFQAGgGADgNQADgOAAgeQAAgogHgOQgHgPgPAAIgKAAg");
	this.shape_76.setTransform(255.875,194.025);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#663300").s().p("AgkBRQgLgOgDgbIAkgGQADANAEAFQAEAFAGAAQAHAAAEgGQADgFAAgGQAAgIgEgEQgDgDgMgEQgTgHgHgFQgIgFgFgMQgFgNAAgQQAAgTAFgNQAGgNAKgGQAJgGAQgBQARABAIAFQAIAEAGALQAFALAEARIgjAHQgBgJgEgEQgEgGgFAAQgGABgDAEQgDAEAAAGQAAAGAEAEQADADALADQATAEAJAHQAJAHAEAMQAFANAAAQQAAAQgFAPQgFAPgLAJQgLAJgSAAQgaAAgLgPg");
	this.shape_77.setTransform(236.425,197.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#663300").s().p("AgLAuIgHgyIAAgpIAkAAIAAApIgFAyg");
	this.shape_78.setTransform(228.3,186.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#663300").s().p("AglBdIAAi1IAiAAIAAAdQAEgTAGgIQAFgGAIgBQAIAAAKAKIgLAyQgHgFgEAAQgHAAgEALQgFAQAAArIAAA9g");
	this.shape_79.setTransform(222.4,197.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#663300").s().p("AgdBVQgLgKgHgWQgIgWAAgeQAAgqAPgbQAOgbAaAAQATAAAMAMQAMAMAHAWQAGAXAAAjIAAAJIhJAAQABAQAEAJQAFAMAIgBQAFABAFgGQADgDADgJIAlAHQgJAbgLAMQgMANgWAAQgSAAgLgLgAgNgoQgDAIgBARIAjAAQgBgUgEgJQgFgJgIAAQgIAAgFANg");
	this.shape_80.setTransform(211.275,197.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#663300").s().p("AAOB+IAAhkQAAgSgEgHQgDgGgGAAQgFAAgFAJQgEAJAAAZIAABYIglAAIAAj7IAlAAIAABdQAHgPAHgHQAHgGAKAAQAPAAAKARQAIASAAAjIAAB0g");
	this.shape_81.setTransform(198.85,194.025);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#663300").s().p("AgJB6QgGgHgDgOQgEgNAAgfIAAg/IgNAAIAAg0IANAAIAAghIAkgkIAABFIAVAAIAAA0IgVAAIAAA/QAAAMACAEQABAGAFAAQAEAAAHgFIADAxQgOAFgLAAQgNAAgHgGg");
	this.shape_82.setTransform(188.525,194.225);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#663300").s().p("AglBJQgRgcAAgsQAAgqAPgbQAPgbAYAAQAdAAAPAgQALAaAAAlQAAAqgOAbQgPAbgaAAQgWgBgPgWgAgMgjQgFAMAAAYQAAAYAFALQAFAMAHAAQAIAAAFgMQAFgLAAgZQAAgXgFgMQgFgLgIAAQgHAAgFALg");
	this.shape_83.setTransform(178.175,197.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#663300").s().p("AApB+IAAi/IgaC/IgdAAIgai/IAAC/IgiAAIAAj7IA2AAIAUCYIAViYIA2AAIAAD7g");
	this.shape_84.setTransform(163.225,194.025);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#663300").s().p("AgwB8IgCgxQAIAFAJAAQAHAAAEgFQAEgGADgPIgpi2IAnAAIATB6IATh6IAkAAIgmDDQgHAhgHAMQgIARgUAAQgIAAgRgFg");
	this.shape_85.setTransform(142.725,201.225);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#663300").s().p("Ag0CAIAAj7IAjAAIAAAbQAGgRAGgGQAIgIAJAAQAUAAALAcQAKAcAAApQAAAtgLAYQgMAYgSAAQgJAAgFgGQgIgFgFgLIAABXgAgKhBQgFAKAAAYQAAAVAFAKQAEAKAHAAQAGAAAEgKQAFgJAAgYQAAgWgFgKQgEgLgHAAQgGAAgEALg");
	this.shape_86.setTransform(131.35,200.775);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#663300").s().p("Ag0CAIAAj7IAiAAIAAAbQAIgRAGgGQAGgIALAAQASAAAMAcQAKAcAAApQAAAtgLAYQgMAYgSAAQgJAAgFgGQgIgFgFgLIAABXgAgKhBQgFAKAAAYQAAAVAFAKQAEAKAHAAQAGAAAEgKQAFgJAAgYQAAgWgFgKQgEgLgHAAQgGAAgEALg");
	this.shape_87.setTransform(118.95,200.775);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#663300").s().p("AgtBRQgKgPABgXQAAgVAGgNQAGgMASgHQAVgIAEgEIAOgHQAAgOgDgFQgDgFgHAAQgIAAgEAGQgEAEgCALIgkgGQACgSAFgKQADgKAHgHQAFgGAJgDQAJgDALAAQAPAAAKAEQAKAEAGAKQAGAJACAOQADAOAAANIAABQIABAUQAAAHADALIgiAAIgDgKIgBgMQgHAOgIAFQgJAIgMAAQgSAAgIgPgAAAAOQgMAFgDAGQgCAGAAAHQAAAIACAGQADAEAGAAQAGABAFgGQAFgGACgIQADgIAAgNIAAgMIgPAKg");
	this.shape_88.setTransform(106.15,197.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#663300").s().p("AAWB+IAAhmIgsAAIAABmIgpAAIAAj7IApAAIAABYIAsAAIAAhYIAqAAIAAD7g");
	this.shape_89.setTransform(92.25,194.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(4,1,1).p("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");
	this.shape_90.setTransform(464.175,389.175);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF99CC").s().p("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");
	this.shape_91.setTransform(464.175,389.175);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFF66").s().p("EALCAuuQgwgwAAhEQAAhEAwgwQAwgwBEAAQBEAAAwAwQAwAwAABEQAABEgwAwQgwAxhEgBQhEABgwgxgEgdJAuuQgwgwAAhEQAAhEAwgwQAwgwBEAAQBFAAAwAwQAwAwAABEQAABEgwAwQgwAxhFgBQhEABgwgxgEAwxAssQhVhWAAh6QAAh6BVhWQBWhVB6AAQB6AABWBVQBWBWAAB6QAAB6hWBWQhWBVh6AAQh6AAhWhVgEg7XAcmQgwgwAAhEQAAhEAwgxQAwgvBEAAQBEAAAwAvQAwAxAABEQAABEgwAwQgwAwhEAAQhEAAgwgwgEAp5AN+QgwgwAAhEQAAhEAwgxQAwgvBEAAQBEAAAwAvQAwAxAABEQAABEgwAwQgwAwhEAAQhEAAgwgwgAAcN+QgvgwAAhEQAAhEAvgxQAwgvBEAAQBEAAAwAvQAwAxAABEQAABEgwAwQgwAwhEAAQhEAAgwgwgEg7wgBZQhWhWAAh6QAAh6BWhVQBWhXB6AAQB6AABVBXQBWBVAAB6QAAB6hWBWQhVBWh6gBQh6ABhWhWgAyTi6QgwgwAAhEQAAhFAwgwQAwgvBFAAQBEAAAwAvQAwAwAABFQAABEgwAwQgwAwhEAAQhFAAgwgwgEAzRgMUQgwgvAAhFQAAhEAwgwQAwgwBEAAQBEAAAwAwQAwAwAABEQAABFgwAvQgwAxhEgBQhEABgwgxgEA4ugrFQgwgwAAhEQAAhEAwgxQAwgvBEgBQBFABAwAvQAwAxAABEQAABEgwAwQgwAwhFAAQhEAAgwgwgEAFagrFQgwgwAAhEQAAhEAwgxQAwgvBEgBQBEABAwAvQAwAxAABEQAABEgwAwQgwAwhEAAQhEAAgwgwgEgpGgrFQgwgwAAhEQAAhEAwgxQAwgvBEgBQBFABAwAvQAwAxAABEQAABEgwAwQgwAwhFAAQhEAAgwgwg");
	this.shape_92.setTransform(477.125,388.55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(4,1,1).p("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");
	this.shape_93.setTransform(478.325,387.775);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFF66").s().p("EgfLAv4QhShTAAh0QAAh2BShSQBShSB0AAQB2AABSBSQBSBSAAB2QAAB0hSBTQhSBSh2AAQh0AAhShSgEAKXAuCQgwgwAAhEQAAhFAwgvQAwgxBFAAQBEAAAwAxQAwAvAABFQAABEgwAwQgwAwhEAAQhFAAgwgwgEAwHAr/QhWhVAAh6QAAh6BWhWQBWhWB6AAQB6AABVBWQBWBWAAB6QAAB6hWBVQhVBWh6AAQh6AAhWhWgEg8CAb6QgwgwAAhEQAAhFAwgwQAwgwBFAAQBEAAAwAwQAwAwAABFQAABEgwAwQgwAvhEABQhFgBgwgvgAhQOqQhKhJAAhpQAAhqBKhJQBKhLBoAAQBpAABKBLQBKBJAABqQAABphKBJQhKBLhpAAQhoAAhKhLgEApOANSQgwgwAAhEQAAhFAwgwQAwgwBEAAQBFAAAwAwQAwAwAABFQAABEgwAwQgwAvhFABQhEgBgwgvgEg8bgCGQhVhVAAh7QAAh6BVhVQBWhWB6AAQB6AABWBWQBWBVAAB6QAAB7hWBVQhWBWh6AAQh6AAhWhWgAz3iZQhHhGAAhlQAAhkBHhHQBGhHBlAAQBkAABHBHQBGBHAABkQAABlhGBGQhHBHhkAAQhlAAhGhHgEAymgNAQgwgwAAhEQAAhFAwgvQAwgxBEAAQBFAAAwAxQAwAvAABFQAABEgwAwQgwAwhFAAQhEAAgwgwgEA3BgqYQhKhKAAhoQAAhrBKhJQBKhLBpABQBpgBBKBLQBKBJAABrQAABohKBKQhKBKhpAAQhpAAhKhKgEAEvgrxQgwgxAAhDQAAhFAwgwQAwgwBFAAQBEAAAwAwQAwAwAABFQAABDgwAxQgwAvhEAAQhFAAgwgvgEgpwgrxQgwgxAAhDQAAhFAwgwQAwgwBEAAQBEAAAwAwQAwAwAABFQAABDgwAxQgwAvhEAAQhEAAgwgvg");
	this.shape_94.setTransform(481.375,393);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF99CC").s().p("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");
	this.shape_95.setTransform(478.325,387.775);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(4,1,1).p("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");
	this.shape_96.setTransform(464.175,389.175);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFF66").s().p("EALEAuuQgwgwAAhEQAAhEAwgwQAwgwBFAAQBEAAAwAwQAwAwAABEQAABEgwAwQgwAxhEgBQhFABgwgxgEgdDAusQgvgwAAhCQAAhDAvgvQAvgvBDAAQBDAAAuAvQAvAvAABDQAABCgvAwQguAuhDAAQhDAAgvgugEAw0AssQhWhWAAh6QAAh6BWhWQBWhVB6AAQB6AABVBVQBWBWAAB6QAAB6hWBWQhVBVh6AAQh6AAhWhVgEg7VAcmQgwgwAAhEQAAhEAwgxQAwgvBFAAQBEAAAwAvQAwAxAABEQAABEgwAwQgwAwhEAAQhFAAgwgwgAAXOJQgygzAAhIQAAhJAygzQAzgzBJAAQBIAAAzAzQAzAzAABJQAABIgzAzQgzAzhIAAQhJAAgzgzgEAp7AN+QgwgwAAhEQAAhEAwgxQAwgvBEAAQBFAAAwAvQAwAxAABEQAABEgwAwQgwAwhFAAQhEAAgwgwgEg7ugBZQhVhWAAh6QAAh6BVhVQBWhXB6AAQB6AABWBXQBWBVAAB6QAAB6hWBWQhWBWh6gBQh6ABhWhWgAx4jYQgngnAAg4QAAg3AngmQAngoA4AAQA3AAAmAoQAnAmAAA3QAAA4gnAnQgmAmg3ABQg4gBgngmgEAzTgMUQgwgvAAhFQAAhEAwgwQAwgwBEAAQBFAAAwAwQAwAwAABEQAABFgwAvQgwAxhFgBQhEABgwgxgEAFcgrFQgwgwAAhEQAAhEAwgxQAwgvBFgBQBEABAwAvQAwAxAABEQAABEgwAwQgwAwhEAAQhFAAgwgwgEgpDgrFQgwgwAAhEQAAhEAwgxQAwgvBEgBQBEABAwAvQAwAxAABEQAABEgwAwQgwAwhEAAQhEAAgwgwgEA42grKQguguAAhCQAAhCAuguQAuguBCAAQBCAAAuAuQAuAuAABCQAABCguAuQguAuhCAAQhCAAgugug");
	this.shape_97.setTransform(476.875,388.55);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF99CC").s().p("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");
	this.shape_98.setTransform(464.175,389.175);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(4,1,1).p("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");
	this.shape_99.setTransform(480.15,371.05);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFF66").s().p("EAKlAvOQgwgwAAhEQAAhFAwgvQAwgxBEAAQBEAAAxAxQAvAvAABFQAABEgvAwQgxAwhEAAQhEAAgwgwgEgdiAvLQgvgvAAhCQAAhEAvguQAvgvBCAAQBDAAAvAvQAvAuAABEQAABCgvAvQgvAuhDAAQhCAAgvgugEAyDAq7QgrgrAAg/QAAg9ArgrQArgrA+AAQA9AAAsArQArArAAA9QAAA/grArQgsArg9AAQg+AAgrgrgEg70AdGQgwgwAAhEQAAhFAwgwQAwgwBEAAQBFAAAvAwQAxAwAABFQAABEgxAwQgvAvhFABQhEgBgwgvgEAoNAQHQhPhOAAhwQAAhxBPhOQBOhPBwAAQBxAABOBPQBQBOAABxQAABwhQBOQhOBPhxAAQhwAAhOhPgAgHOpQgzg0AAhIQAAhJAzgzQAygyBJAAQBIAAAzAyQAzAzAABJQAABIgzA0QgzAzhIgBQhJABgygzgAyXi5QgngnAAg3QAAg3AngnQAngnA4AAQA3AAAmAnQAnAnAAA3QAAA3gnAnQgmAng3AAQg4AAgngngEg6egDLQgrgrgBg+QABg9ArgrQAqgsA+ABQA9gBAsAsQArArAAA9QAAA+grArQgsArg9ABQg+gBgqgrgEAy0gL0QgwgwAAhEQAAhFAwgvQAwgxBEAAQBEAAAxAxQAwAvgBBFQABBEgwAwQgxAwhEAAQhEAAgwgwgEgqmgpLQhKhLAAhoQAAhrBKhJQBKhLBpAAQBqAABLBLQBJBJAABrQAABohJBLQhLBKhqAAQhpAAhKhKgEAE9gqlQgwgxAAhDQAAhFAwgwQAwgwBEAAQBEAAAxAwQAvAwAABFQAABDgvAxQgxAvhEAAQhEAAgwgvgEA4XgqrQgvguAAhBQAAhCAvgvQAuguBBAAQBDAAAuAuQAuAvAABCQAABBguAuQguAvhDgBQhBABgugvg");
	this.shape_100.setTransform(480,385.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF99CC").s().p("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");
	this.shape_101.setTransform(480.15,371.05);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(4,1,1).p("EA5hglnQhIgDg1g0Qg4g5AAhQQAAg3AagsQg0gNgpgpQg8g8AAhWQAAhWA8g8QA9g8BWAAQAoAAAjANQAAgDAAgFQAAhXA9g9QA9g8BWAAQBWAAA9A8QAzAzAJBEQArgVAzAAQBZAAA/A+QA/A/AABaQAABYg/A/QgpApg0AOQAmA0AABDQAABUg6A6Qg7A7hTAAQhTAAg7g7QgegdgOgkQgOAnggAfQg0A0hIADEA+6gr6QAABBguAuQguAuhCAAQhCAAguguQguguAAhBQAAhDAuguQAuguBCAAQBCAAAuAuQAuAuAABDgEA4SghZQgKABgJAAQgKAAgJgBEAv6gMLQg+g/AAhYQAAhJAqg4QAJgMALgLQAbgbAfgPQArgVAzAAQAqAAAlAOQgBgEAAgFQAAhZA/hAQBAg/BZAAQBaAAA/A/QA0A1AKBGQAsgWA2AAQBcAABBBBQBBBBAABdQAABchBBCQgrArg2AOQApA2AABGQAABWg9A9QgOAOgQALQgzAkhDAAQhCAAgzgkQgQgLgOgOQgegegQgmQgOAoghAgQgLAMgNAJQgzAmhCAAQhDAAgzgmQgMgJgMgMQg7g6AAhTQAAg5AbguQg1gOgrgqgEA5igNIQAABEgwAwQgwAwhFAAQhEAAgwgwQgwgwAAhEQAAhEAwgxQAwgwBEAAQBFAAAwAwQAwAxAABEgEAn0AN0Qg0gzAAhKQAAhJA0g0QAzgzBKAAQAjAAAeALQgBgDAAgEQAAhJA0g1QA1g0BJAAQBKAAA0A0QArArAIA7QAlgTAsAAQBMAAA1A2QA2A2AABMQAABMg2A2QgjAjgsAMQAhAsAAA6QAABHgyAyQgzAzhHAAQhHAAgygzQgZgZgNgfQgMAhgbAbQgwAwhEAAQhFAAgwgwQgwgxAAhEQAAgvAWglQgsgMgjgjgEAvvANCQAAA4goAnQgnAog5AAQg4AAgngoQgognAAg4QAAg4AogoQAngnA4AAQA5AAAnAnQAoAoAAA4gEAsDArfQgNgMgKgNQhBhQAAhrQAAhsBBhQQAKgNANgMQBZhYB9AAQA6AAA0ATQAAgFAAgHQAAh9BYhaQBZhZB+AAQB+AABZBZQBKBKANBkQA+gfBMAAQCCAABbBbQBcBcAACCQAACChcBbQg8A8hNAVQA5BKAABjQAAB6hVBVQhWBWh5AAQh6AAhWhWQgqgqgWg1QgUA4guAuQhTBSh1AAQh0AAhThSQhThTAAh1QAAhQAnhAQhLgUg8g8gEA5kAqKQAABhhEBDQhDBDhgAAQhfAAhEhDQhEhDAAhhQAAhgBEhDQBEhDBfAAQBgAABDBDQBEBDAABggEACEgq9Qg/g+AAhZQAAhZA/g/QA+g+BZAAQAqAAAlANQAAgDAAgFQAAhaA+g/QBAhABZAAQBaAAA/BAQA0A0AKBHQAsgWA2AAQBcAABCBBQBABBAABcQAABdhABBQgsArg2APQApA1AABGQAABWg9A9QgRASgTAMQgsAcg1ADQgHAAgIAAQhWAAg9g9QgegegQgmQgOAoghAgQg6A7hTAAQhTAAg7g7Qg7g6AAhTQAAg5AcguQg2gOgqgqgEALrgr5QAABDgwAwQgwAwhEAAQhFAAgwgwQgwgwAAhDQAAhFAwgwQAwgwBFAAQBEAAAwAwQAwAwAABFgA0RjFQgzgzAAhIQAAhIAzgzQAzgzBIAAQAiAAAdAMQAAgDAAgFQAAhIAzgzQA0g0BIAAQBJAAAzA0QAqAqAIA6QAkgTAsAAQBKAAA1A1QA0A2AABJQAABLg0A2QgjAigsAMQAhArAAA5QAAAPgDAPQgIAygmAmQgOAOgQAKQgjAXgrADQgGAAgGAAQhFAAgygyQgYgYgNgeQgMAggaAZQgwAxhDAAQhDAAgwgxQgngngHg0QgBgKAAgMQAAguAWglQgsgLgigigAsfj3QAAA3gnAnQgmAng3AAQg4AAgngnQgngnAAg3QAAg3AngnQAngnA4AAQA3AAAmAnQAnAnAAA3gEgs8gq0QhChDAAhfQAAhfBChDQBEhEBfAAQAtAAAnAPQgBgEAAgFQAAhfBEhEQBEhEBfAAQBgAABDBEQA5A4AKBLQAwgXA5AAQBjAABFBFQBGBGAABjQAABjhGBGQguAtg6AQQAsA5AABKQAABdhCBBQhBBChcAAQhcAAhChCQgggggRgoQgPAqgjAjQg+A+hZAAQhZAAg/g+Qg+g/AAhZQAAg9AcgwQg5gPgugtgEgipgr1QAABIgzA0Qg0A0hJAAQhJAAgzg0Qg0g0AAhIQAAhKA0gyQAzg0BJAAQBJAAA0A0QAzAyAABKgEhCugCCQgPgQgOgQQhPhiAAiDQAAiEBPhhQAOgRAPgPQBshsCZAAQBIAAA/AZQgBgHAAgJQAAiaBthsQBshtCaAAQCaAABsBtQBaBaAQB5QBOgmBbAAQCgAABvBwQBwBxAACeQAACghwBvQhJBKheAZQBGBaAAB5QAACUhpBpQhpBpiVAAQiUAAhphpQg0g1gag/QgaBEg3A3QhlBkiOAAQiPAAhmhkQhlhkAAiPQAAhiAwhOQhdgXhIhIgEgyNgDrQAAB1hSBTQhTBRh1AAQh2AAhShRQhShTAAh1QAAh2BShSQBShTB2AAQB1AABTBTQBSBSAAB2gEg+tAcuQg/g+AAhZQAAhZA/g/QA+g+BZAAQAqAAAlAOQAAgEAAgFQAAhaA+g/QBAg/BZAAQBaAAA/A/QA0A1AKBGQAsgWA2AAQBcAABCBBQBABCAABbQAABdhABCQgsAqg2APQApA1AABGQAABWg9A+QgRARgTAMQgsAcg1ADQgHABgIAAQhWAAg9g9QgegfgQglQgOAoghAfQg6A8hTAAQhTAAg7g8Qg7g6AAhTQAAg5AcgtQg2gOgqgrgEg1GAbyQAABEgwAvQgwAxhEAAQhFAAgwgxQgwgvAAhEQAAhFAwgwQAwgwBFAAQBEAAAwAwQAwAwAABFgEggUAu1QgHgHgHgIQgvg4AAhNQAAhMAvg4QAHgJAHgHQA+g9BXAAQApAAAjANQAAgDAAgFQAAhXA9g+QA+g/BYAAQBXAAA+A/QAzAzAJBFQAsgVA0AAQBaAABAA/QA/BAAABaQAABag/BAQgqApg1APQAnAzAABFQAABVg7A7Qg8A8hUAAQhUAAg8g8QgdgdgQglQgOAmggAgQg5A5hRAAQhRAAg5g5Qg5g5AAhRQAAg4AagsQg0gOgqgpgEgW7At6QAABCgvAvQguAvhDAAQhDAAgvgvQgvgvAAhCQAAhDAvgwQAvguBDAAQBDAAAuAuQAvAwAABDgAjVONQhDhBAAhfQAAhfBDhCQBChDBfAAQAtAAAlAPQAAgEAAgFQAAhUA1g+QAGgIAHgJQBEhCBfAAQBfAABDBCQA4A5AKBLQAlgSArgFQAMgBAMAAQBiAABFBFQBFBGAABhQAABjhFBFQguAtg5AQQArA4AABLQAABchBBAQgeAfgkAQQgpASgxAAQhcAAhAhBQghgggQgoQgQArgiAhQg7A7hQAEQgFAAgGAAQhYAAg+g/Qg+g+AAhYQAAg8AdgxQg5gPgtgtgAG3NNQAABJgzAzQgzAyhIAAQhJAAgzgyQgzgzAAhJQAAhIAzgzQAzgzBJAAQBIAAAzAzQAzAzAABIgEAHsAu3Qg/g+AAhZQAAhaA/g+QA+g/BZAAQAqAAAlAOQAAgEAAgFQAAhZA+g/QBAhABZAAQBaAAA/BAQA0A0AKBHQAsgWA2AAQBcAABCBBQBABBAABcQAABdhABBQgsArg2APQApA1AABGQAABWg9A9QgRARgTANQgsAbg1AEQgHAAgIAAQhWAAg9g9QgegegQgmQgOAoghAgQg6A7hTAAQhTAAg7g7Qg7g6AAhTQAAg5AcguQg2gOgqgqgEARTAt6QAABEgwAwQgwAwhEAAQhFAAgwgwQgwgwAAhEQAAhEAwgwQAwgxBFAAQBEAAAwAxQAwAwAABEg");
	this.shape_102.setTransform(465.075,382.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFF66").s().p("EAK+AuyQgwgwAAhEQAAhFAwgvQAwgxBEAAQBEAAAxAxQAvAvAABFQAABEgvAwQgxAwhEAAQhEAAgwgwgEgdJAuvQgvgvAAhCQAAhEAvguQAvgvBCAAQBDAAAvAvQAvAuAABEQAABCgvAvQgvAuhDAAQhCAAgvgugEAxeAryQhEhDAAhhQAAhgBEhDQBDhEBgAAQBgAABDBEQBEBDAABgQAABhhEBDQhDBDhgAAQhgAAhDhDgEg7bAcqQgwgwAAhEQAAhFAwgwQAwgwBEAAQBFAAAvAwQAxAwAABFQAABEgxAwQgvAvhFABQhEgBgwgvgAARONQgyg0AAhIQAAhJAygzQAzgyBJAAQBIAAAzAyQAzAzAABJQAABIgzA0QgzAzhIgBQhJABgzgzgEAqMANlQgognAAg4QAAg4AogoQAngnA4AAQA4AAAoAnQAoAoAAA4QAAA4goAnQgoAog4AAQg4AAgngogEg7rgBgQhShSAAh1QAAh2BShSQBShTB2AAQB0AABTBTQBTBSAAB2QAAB1hTBSQhTBTh0AAQh2AAhShTgAx+jVQgngnAAg3QAAg3AngnQAngnA4AAQA3AAAmAnQAnAnAAA3QAAA3gnAnQgmAng3AAQg4AAgngngEAzNgMQQgwgwAAhEQAAhFAwgvQAwgxBEAAQBEAAAxAxQAwAvgBBFQABBEgwAwQgxAwhEAAQhEAAgwgwgEgpSgq1Qgzg0AAhIQAAhKAzgyQA0g0BIAAQBKAAAzA0QA0AyAABKQAABIg0A0QgzAzhKABQhIgBg0gzgEAFWgrBQgwgxAAhDQAAhFAwgwQAwgwBEAAQBEAAAxAwQAvAwAABFQAABDgvAxQgxAvhEAAQhEAAgwgvgEA4wgrHQgvguAAhBQAAhCAvgvQAuguBBAAQBDAAAuAuQAuAvAABCQAABBguAuQguAvhDgBQhBABgugvg");
	this.shape_103.setTransform(477.5,388.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF99CC").s().p("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");
	this.shape_104.setTransform(465.075,382.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(6));

	// scene 2 drawingh
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(3,1,1).p("EAxMg8OIYIgkQgyIygZBAQgLAegcAjQgmAugZAhQgZAghCAUQg8ATgigHQgQBdgDA3QgDAkgLAuQgLAvgiBMQgkBPgOAKQhLAsgXAeQgWAbAEAnQADAggpAnQgsApg1AJQgFABgNAGQgTAIgkARQg3AagjAAQgDAAgYgeQgagjgbgMQgLgFgqgQQgcgKgVgOQhLgvgIg1QgDgTAEgfQAFgsABgKIAAihIhUAAQgSgBhNAOQhNANgHAAQgWhOABieQABisgFgbQgIgshCiEQg9h5AplugEAadgnrIAAAUQgNAGgwAAQgjAAghgaQgTgPgmgsQhQhfhEgSQgqgLhIgCQhUABgsgCQilgHhihLQhxhXgBhmQAAg1gDgJQgIgcgpgQQhYghhjgZQh5gfgEgBQgygRgUgZQgVgbAAg6QAAggAvhWQAzhdAEgaEAFRg2dQAAgagEgUQgHgcgOAAQgjAAgQhTQgKhVAAgDQAAggBKg3MAsHgAlAIeygQgYgPgKgQQgJgPAAgeQAAgTALhUQAKhTAAgTQAAgngZgPQgJgGgtgMQgmgKgRgUQgZgbAAg9QAAg2Adh2QAVhZARg0QALglADgOQAGgVAKgPQBDhhC6hlQBCgjA+gaQA4gXAMAAQARAAAFAJQACAFACAOQAIAcA9AAQAMAACWgKQBAAAAUAKQAaANAAArQAAAvgcBoQgdBoAAAUQAAAoAlANQAKADBHAKQA3AGAaAXQAlAfAABHQAABMgSBbQgSBcAAAiQAAA3AsAbQAYAQAGAIQAOAPAAAZQAAAGgFAjQgGAjAAAGQAAAUAYAIQASAHAGANIABAAQACAFABAGAI7yQQgQgIgNgIIPpAAIF2AAIAAAPAA9ygIHhAAA47LpIZ4ymIAArjA5OyJIaLr6IAALjEgmOguPIZmonINlYzEg7jgczQADhuBEh7QBIiABAAAQAUAAAVBAQAXBHAVAOQAcATBFATQA1AXgCA5QgDBLAJA7QALBFAZASQBEAxACBXQAAAUgEAXEhGlgVIQAAgWAAgZQAChOgFgkQgGg4gYgjQgRgZgggPQgmgOgSgHQhAgYAAhFQAAiTB5jgQAnhHA1hTQAxhKAKgQQAOgXAjgPQA4gYBkAAQBNAAAbAyQATAkAuCMQANAiA8AtQBSA9AEADQAVAWAXBWQAWBXALALQAIAIASAJEg7UgbOQgQhDAAgXQAAgFABgGQATAKAgAKQA0AcAABCQAAAngLBTQgKBTAAAFQAAAoAZAUQAQAMAmAIQAqAKANAHQAZAPAAAhQAAAJgOAuQgRA7gfBcEhN6gR2QAPg4AUhCQALgnAAgGQAAgngXg8QgXg8AAg4QAAhQAlg4QAhgzAmAAQAcAAAcAfQAhAkAdAKQAEABBBAOQAqAJAWAQQAvAjAlB3QAFARAIAcQAGATAHAYQABAGACAFQARA6AOAhEhGNgRnQgCgEgBgEQgVhOAAiLEhFoAWfQgtALgbAFQgPADgJACQgjAHgeAAQh4AAhjgiQhUgbhhg/Ihly+QAUAAAugDQAvgDADAAQAlAACeA3QA9AVAxATQBTAgAxAbEhJcADiQAJAiBQATQApAKA3AIQgKh4ABhQQACiYA3AAQAVAAAWAPQATAMANASQgQiAAfiMQAoizBiAAQCTAABMD+QAiBwAfEEQASg/ADgIQATgzASAAQAlAAAaBSQAUA+AAAjQAUgPADgCQACgCAQAAQBXAAAZCTQANBKAADJQAACSgKBHQgJA4gVAqQgNAYgiA/QggBHgcB0QgJAoiwBYQgGADgrAiQgjAdgaAFQgqAJhcALQhdALggAAQg6AAg1gJQghgFgfgJQgHgDgHgCQhRgbgIgbEg3CgRvIvOAAIqjAAEgtagR4QAeiMANhfQAPhxBRggQA1gXCaAAQCkAABTBXQBBBCAmCVQAJAkAJA4QAQBgARCdQAaD3AAB/QAAAJACDSQABDmgKB7QgPC+gWCOQgOBYAABpQAAArAKBGQAEAgAFAdQAAADABADEgsyALpQgKi2gJhHQgKhJAAhRIANnHQAAidgXijQgWijAAj4QAAjFAOhBQAEgRADgRILKgJIJCgIIATdyEg3CgRvIEHm9IMt1jINAcGEg3CgRvIJogJEgkPALJQABAQABAQQACAgACAdQgDgCgCgCQgTgNhRAAQhSAAgMAGQgKAFhJBKQgzgrgOgIQgvgcg8AAQgyAAgiBAQgZAxAAAfQAAA0A2AcQA4AdBYgJQBBgGBWAYQBeAbAcAAQA9AAAghBQAKgTAGgWQAJggAAgjQAAhRgagYQAHBiAKBKQAJBAAMAwQAfB+BcC1QBhC9AxCEQAJAZAlB4QABADABACQAUgDAQAAQAAgVAqATQApATAzAqQCHBwAABbQAAASgSAQQgqAliLAZQiPAZhxAAQhVAAhkgTQhjgTheAAQh4AAgoADQhjAHgqAZQA1DqAsBtQA3CJBcBdQA+A/BmBpQA5A7BHBJQBSBSBIA6QBKA9A/AlEgoOAN7QgLgJgKgIEgkNALpICRAAIJBAAEgsyALpIAAAAIAAAAQgtBBghCSQgoCxAADSQAACFBgGCQAwDBAwCoQACALADALQgDACgCABEgsoALcQgFAGgFAHEgsyALpIAAAAIIlAAEgoOAYjQgxACh/ARQiQASgBAAQgQAAgMgsQgMgsABg1QABg8ARgkQAVgqAnAEQBPAHB0gyQBMghAIgDQAtgRAfAAQAXAABwA5QByA6AKABQBLAIAcA/QATApAABJQAAAmgtAHQgCAAg+AAQheAChVgCQikgCgCgKIAAAAQgBgIABACQACAFAJABQgFAAgGAAgEhPnAmBIAAqZQByg/CkgsQCWgoBeAAQCBAAC5BcQAuAYBOApQA9AdAfAAQBQAACTgUQCTgUBsAAQB0AABtBHQBzBLARBkQAHAlgFBHQgGBdABAdQACCYBiBLQCuCFAoAtQBRBYACBgQAAAJAAAJEgsCAgCQBZgUB5gqQBygfCcgDQBbgCCFgsQBgggA8gIQAPAtAcAhQAeAjBuBfQAzAsA1ApQB6BeCEBQQEXCnCWBpQAMAIAUAQQAAAAAAAAQAlAdBAA3QBSBFAjAPQAdANBpAhQA3ASBQAZQARAGDzBIQBOAXAyASQAAAAABAAQA5AVAVAOQCGBaEXBqQB+AwApAUQBJAiASAcA+CdJQgJAAAEAGQAFAHAAgNgEg+EAQJQAvADAiAiQAlAlAAA0QAAA0glAkQglAlg0AAQg0AAglglQgkgkAAg0QAAg0AkglQAlglA0AAQAEAAAEAAIgGlYEhFAAKHQBYAHCCAOQCDAOBZAHQBkAJAvAAQBWAAAZgEQAsgHAYgaEhLlAJeQAfABAiAAQAcAAAwAQQAvAPBZAAQAtAABjAJEhPUAIHQgHAJAAAQQA0AeA9APQA5ANBMAEEhLMAQLQAGAAAGAAQA5AAAoAoQApAoAAA5QAAA5gpAoQgoApg5AAQg5AAgogpQgogoAAg5QAAg5AogoQAkgkAxgEIgZmtEhE2AN4QAbABATATQAVAVAAAeQAAAdgVAVQgVAVgdAAQgeAAgVgVQgUgVAAgdQAAgeAUgVQAVgUAeAAQACAAACAAIgKjxEhFaAWcQgHACgHABEhDNAsSQACAAACAAQAvAAAhAhQAhAhAAAvQAAAughAhQghAhgvAAQguAAghghQghghAAguQAAgvAhghQAfgfAsgCIAIiHQBtADEQAzQAsAIAoAHQDdAnBxAAQBoAABQABQCFACBCAHQB6ANCzACEhPnAmBQARAYAwAAQANAACRA9QAGADAFACQCSA9AsALQAwAMCQA1QBqAnBFAAQAFAAAGAAEhMJAwrQACAAABAAQA4AAAoAoQAoAoAAA4QAAA4goAnQgoAog4AAQg4AAgogoQgngnAAg4QAAg4AngoQAngnA2gBIAMpQEg76A2WQA7AAAqAqQAqAqAAA8QAAA7gqAqQgqAqg7AAQg8AAgqgqQgqgqAAg7QAAg8AqgqQAqgqA8AAIAGrGEgfJAoiIAAAAQACAAABAAQgBAAgCAAQgHABADAFQAEAIAAgOQACAODIAJQBEACEYAHQAwABB3gDQBogCAzADQBjAHAmAjQAWAVAAAfQAABZgwAsQgkAhhdAZQiuAugPAFQh+AqhnBHQglAahMBGQhGA6g2AHQgeADhxACQhsACgsAGEglDAuiQgCgZgoiLQgoiIAAgNQAAgnCtgTQB6gNClAAEgr8AtpIAChHQgBAIgBAIQgDAaADAdQAIBLA3BiQBPCQBXAAQBEAAA2B3QAjBPANBLQAHAoAZAkQALAOAoAtQBEBKACBQMgsTABbIAA2yEgsMA3mQAEAAAEAAQAqAAAdAdQAdAdAAAqQAAApgdAdQgdAegqAAQgpAAgegeQgdgdAAgpQAAgqAdgdQAbgaAkgDIAQp9EgzpAxUQAuAAAgAgQAhAhAAAuQAAAughAgQggAgguAAQguAAggggQggggAAguQAAguAgghQAgggAuAAIgFlcEg3CgRvIAAdYIKQAAAFzTlIAAFoMAgIgBBAFzTlII1n8IbpAAEgRCA0oQANiiBwg1QBYgqDEAPQB7AJDlgJQB0gFAAgfQAAgSADgCQAIgJAoAAQAcAAAfAKQAzARA5AtQATAOAwApQAkAfAQAJQBQAsBwAxQB1A0ArAJEgJLAg7IAAGqIfmAAIGNlhIg5mNIk7FMIgZGiEgJLAg7IGJlEIexAAEBBBgSqQgFhQAAgMQAAklDDjSQBMhRBagxQBTgsA9AAQAcAAAIAVQAFANgCAkQgBAnAFAUQAIAfAdAOQAXAMAkANQAaAOAHAdQAEAOAAAqQgBAkAHAPQAMAZA7AMQBCANARAQQAUAUAmAYQAWAOAwAeEBQQgWvQADAbgJA8QgKBDAAAVQAAADACAkQADAkAAAQEAkqgSqQgcAGgWgBQhCgBgNg2QgGgZACgxQAEhIAAgJQAAhBgkgdQgVgQgDgFQgLgNAAgXQAAhcB7iOQAwg3AvgnQAvgmATAAQABAABTARQBhAUAvAJQAaAEALAQQAFAIAFAXQADAUAIAJQALAMAdAAQBvAACyhCQBZgiBJghQATAAACAKQACAHgCATIgQBeQAAAfAkAQQAfAOBNAJQAiAEgBAkQAAAVgIArQAAAYAiAeQAhAfAAAfQAAASgHAkQgIAkAAAVQAAAlAXATQAPAMAxAaQAPAJAMAeQANAlAGAGEA9dgk3QAAAGAAAHQACEPgKCcQgLCsAAB/QAACRAOCUQAKBiAIApEAe3gnYQAogCAGgNQADgNADgJQAFgRAMgPQAJgKBngBQBrgCAMgGQBig2BchSQBmhaAchFQAhhRAygtQAkggA6gXQBXgjAFgCQAxgZAcgtQBAhmAThdQAKhZByl7EAd9gngQAkABAOADQgJAFgGAAQAMAAALgBQAAgIgGADQgBABgBAAQAHACABACEAbDgneQAWAAB0gCQAcAAAUAAIAAVAMAy3AAAEAd9gnwIAAAQEAavgnkQAABvAKC7QAKC7AAC7QAABngNCvQgMCwAAADQAABoABAVQACA4AJAiEA6WgkdQgEECgIHeQgGFmgIAzEAx6AlRQABgCAAAAQAThUAAghQAAi9EQiCQBngyB6gdQBrgaBKAAQBRAAAdALQAcAMA+AAQASAAA2grQBWhEAngaQDOiJDrAAQB3AACCAvQAjANBEAbQA8AXgbBmIAJMKIAOSxMgqiAAAQggiIAAAAQgEgXAAg2QAAgSAPhVQAPhVAAgYQAAgLAIgQQAIgRAAgKQAAgyBKiAQBJh4AAgIQAAgnB2hLQBgg8BcgmQA+gYBagIQA5gFBrABIAAhDQgHgogHhBQgGg7AAgSQAAgiAThRQAjA8BgA1QAgARAdAMQBAAaAzAAQAQAAA7AZQBHAdA2ALQAOADAuAGQAyAGAPAAQAAAAAdADQApAFBkALQCAAKCCAFQBVADBXAAQDsAAB8gGQA/gDAigEQBjgNCOg/QAEgCAFgCEAlmASYIAVF0IFMlkIg2m/gEA8WAqnIgHhbEA8WAqnQAxABAjAjQAkAjAAA0QAAAzgkAkQgkAkgzAAQgzAAgkgkQgkgkAAgzQAAg0AkgjQAkgkAzAAQACAAABAAgEAxuAk1QAFAOAHAOEA01AtMQAMgCANAAQA7AAApAqQAqApAAA7QAAA7gqAqQgpApg7AAQg7AAgqgpQgpgqAAg7QAAg7ApgpQAhghArgHIAFltEBCaAzYQACAAADAAQA8AAArArQArArAAA9QAAA8grArQgrArg8AAQg9AAgrgrQgqgrAAg8QAAg9AqgrQAqgpA5gCIAEptEBK8AtDQAAAAABAAQA4AAAoAnQAoAoAAA4QAAA4goAnQgoAog4AAQg4AAgogoQgngnAAg4QAAg4AngoQAognA3AAIgKjbEgJLAg7If/AIAFzTlIfzhNEhPwAlPQAEAoACAEQABADACAD");
	this.shape_105.setTransform(508.425,382.45);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFCCFF").s().p("AqbfbIGJlDIexAAIk7FLgA6ezpIaMr5IAALjIAALjI55Slg");
	this.shape_106.setTransform(516.425,392);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(3,1,1).p("EAxMg8OIYIgkQgyIygZBAQgLAegcAjQgmAugZAhQgZAghCAUQg8ATgigHQgQBdgDA3QgDAkgLAuQgLAvgiBMQgkBPgOAKQhLAsgXAeQgWAbAEAnQADAggpAnQgsApg1AJQgFABgNAGQgTAIgkARQg3AagjAAQgDAAgYgeQgagjgbgMQgLgFgqgQQgcgKgVgOQhLgvgIg1QgDgTAEgfQAFgsABgKIAAihIhUAAQgSgBhNAOQhNANgHAAQgWhOABieQABisgFgbQgIgshCiEQg9h5AplugEAadgnrIAAAUQgNAGgwAAQgjAAghgaQgTgPgmgsQhQhfhEgSQgqgLhIgCQhUABgsgCQilgHhihLQhxhXgBhmQAAg1gDgJQgIgcgpgQQhYghhjgZQh5gfgEgBQgygRgUgZQgVgbAAg6QAAggAvhWQAzhdAEgaEAFRg2dQAAgagEgUQgHgcgOAAQgjAAgQhTQgKhVAAgDQAAggBKg3MAsHgAlAIeygQgYgPgKgQQgJgPAAgeQAAgTALhUQAKhTAAgTQAAgngZgPQgJgGgtgMQgmgKgRgUQgZgbAAg9QAAg2Adh2QAVhZARg0QALglADgOQAGgVAKgPQBDhhC6hlQBCgjA+gaQA4gXAMAAQARAAAFAJQACAFACAOQAIAcA9AAQAMAACWgKQBAAAAUAKQAaANAAArQAAAvgcBoQgdBoAAAUQAAAoAlANQAKADBHAKQA3AGAaAXQAlAfAABHQAABMgSBbQgSBcAAAiQAAA3AsAbQAYAQAGAIQAOAPAAAZQAAAGgFAjQgGAjAAAGQAAAUAYAIQAQAGAHALIAAABQABABAAABIABAAICvAAIDHAAIAAAPAI7yQQgQgIgNgIIPoAAIABAAQACAFABAGAA9ygIHhAAA47LpIZ4ymIAArjA5OyJIaLr6IAALjEgmOguPIZmonINlYzEg7jgczQADhuBEh7QBIiABAAAQAUAAAVBAQAXBHAVAOQAcATBFATQA1AXgCA5QgDBLAJA7QALBFAZASQBEAxACBXQAAAUgEAXEhGlgVIQAAgTAAgVQAAgCAAgBQAAgCAAgCQAChOgFgkQgGg4gYgjQgRgZgggPQgmgOgSgHQhAgYAAhFQAAiTB5jgQAnhHA1hTQAxhKAKgQQAOgXAjgPQA4gYBkAAQBNAAAbAyQATAkAuCMQANAiA8AtQBSA9AEADQAVAWAXBWQAWBXALALQAIAIASAJEg7UgbOQgQhDAAgXQAAgFABgGQABABACABQATAJAdAJQA0AcAABCQAAAngLBTQgKBTAAAFQAAAoAZAUQAQAMAmAIQAqAKANAHQAZAPAAAhQAAAJgOAuQgRA7gfBcEg3CgRvIhuAAItgAAIqjAAEhN6gR2QAPg4AUhCQALgnAAgGQAAgngXg8QgXg8AAg4QAAhQAlg4QAhgzAmAAQAcAAAcAfQAhAkAdAKQAEABBBAOQAqAJAWAQQAvAjAlB3QAFARAIAcQABABAAACQAFASAHAWQABAGACAFQARA6AOAhEhGNgRnQgCgEgBgEQgVhOAAiLEhFoAWfQgtALgbAFQgPADgJACQgjAHgeAAQh4AAhjgiQhUgbhhg/IhCsfIgjmcIAAgDQAUAAAugDQAvgDADAAQAlAACeA3QA9AVAxATQBTAgAxAbEhJcADiQAJAiBQATQApAKA3AIQgBgNgBgLQgIhpABhHQACiYA3AAQAVAAAWAPQATAMANASQgQiAAfiMQAoizBiAAQCTAABMD+QAiBwAfEEQASg/ADgIQATgzASAAQAlAAAaBSQAUA+AAAjQAUgPADgCQACgCAQAAQBXAAAZCTQANBKAADJQAAARAAAQQgBB5gJA/QgJA4gVAqQgNAYgiA/QggBHgcB0QgHAchaA1QglAWgzAZQgGADgrAiQgjAdgaAFQgqAJhcALQhdALggAAQg6AAg1gJQghgFgfgJQgHgDgHgCQhRgbgIgbEgtagR4QAeiMANhfQAPhxBRggQA1gXCaAAQCkAABTBXQBBBCAmCVQAJAkAJA4QAQBgARCdQAaD3AAB/QAAAJACDSQABDmgKB7QgPC+gWCOQgOBYAABpQAAArAKBGQAEAgAFAdQAAADABADEgsyALpQgKi2gJhHQgKhJAAhRIANnHQAAidgXijQgWijAAj4QAAjFAOhBQAEgRADgRILKgJIJCgIIATdyEg3CgRvIEHm9IMt1jINAcGEg3CgRvIJogJEgkPALJQABAQABAQQACAgACAdQgDgCgCgCQgTgNhRAAQhSAAgMAGQgKAFhJBKQgzgrgOgIQgvgcg8AAQgyAAgiBAQgZAxAAAfQAAA0A2AcQA4AdBYgJQBBgGBWAYQBeAbAcAAQA9AAAghBQAKgTAGgWQAJggAAgjQAAhRgagYQAHBiAKBKQAJBAAMAwQAfB+BcC1QBhC9AxCEQAJAZAlB4QABADABACQAUgDAQAAQAAgVAqATQApATAzAqQCHBwAABbQAAASgSAQQgqAliLAZQiPAZhxAAQhVAAhkgTQhjgTheAAQh4AAgoADQhjAHgqAZQA1DqAsBtQA3CJBcBdQA+A/BmBpQA5A7BHBJQBSBSBIA6QBKA9A/AlEgoOAN7QgLgJgKgIEgkNALpICRAAIJBAAEgsyALpIAAAAIAAAAQgtBBghCSQgoCxAADSQAACFBgGCQAwDBAwCoQACALADALQgDACgCABEgsoALcQgFAGgFAHEgsyALpIAAAAIIlAAEgoOAYjQgxACh/ARQiQASgBAAQgQAAgMgsQgMgsABg1QABg8ARgkQAVgqAnAEQBPAHB0gyQBMghAIgDQAtgRAfAAQAXAABwA5QByA6AKABQBLAIAcA/QATApAABJQAAAmgtAHQgCAAg+AAQheAChVgCQikgCgCgKIAAAAQgBgIABACQACAFAJABQgFAAgGAAgEhPnAmBIAAqZQByg/CkgsQCWgoBeAAQCBAAC5BcQAuAYBOApQA9AdAfAAQBQAACTgUQCTgUBsAAQB0AABtBHQBzBLARBkQAHAlgFBHQgGBdABAdQACCYBiBLQCuCFAoAtQBRBYACBgEgsCAgCQBZgUB5gqQBygfCcgDQBbgCCFgsQBgggA8gIQAPAtAcAhQAeAjBuBfQAzAsA1ApQB6BeCEBQQEXCnCWBpQAMAIAUAQQAAAAAAAAQAlAdBAA3QBSBFAjAPQAdANBpAhQA3ASBQAZQARAGDzBIQBOAXAyASQAAAAABAAQAAAAABABQA5AUAUAOQCGBaEXBqQB+AwApAUQBJAiASAcA+CdJQgJAAAEAGQAFAHAAgNgEg+EAQJQAvADAiAiQAlAlAAA0QAAA0glAkQgJAJgLAHQgeAVgnAAQg0AAglglQgkgkAAg0QAAg0AkglQAlglA0AAQAEAAAEAAIgGlYEhFAAKHQBYAHCCAOQCDAOBZAHQBkAJAvAAQBWAAAZgEQAsgHAYgaEhLlAJeQAfABAiAAQAcAAAwAQQAvAPBZAAQAtAABjAJEhPUAIHQgHAJAAAQQA0AeA9APQA5ANBMAEEhLMAQLQAGAAAGAAQA5AAAoAoQApAoAAA5QAAA5gpAoQgoApg5AAQg5AAgogpQgogoAAg5QAAg5AogoQAkgkAxgEIgZmtEhE2AN4QAbABATATQAVAVAAAeQAAAdgVAVQgVAVgdAAQgeAAgVgVQgUgVAAgdQAAgeAUgVQAVgUAeAAQACAAACAAIgKjxEhFaAWcQgHACgHABEhDNAsSQACAAACAAQAvAAAhAhQAhAhAAAvQAAAughAhQghAhgvAAQguAAghghQghghAAguQAAgvAhghQAfgfAsgCIAAAAIAIiHQBtADEQAzQAsAIAoAHQDdAnBxAAQBoAABQABQCFACBCAHQB6ANCzACQAAAJAAAJQgBAIgBAIQgDAaADAdIAChHEhPnAmBQAQAXAtABIAEAAQANAACRA9QAGADAFACQCSA9AsALQAwAMCQA1QBqAnBFAAQAFAAAGAAEhMJAwrQACAAABAAQA4AAAoAoQAoAoAAA4QAAA4goAnQgoAog4AAQg4AAgogoQgngnAAg4QAAg4AngoQAngnA2gBIAMpQEg76A2WQA7AAAqAqQAqAqAAA8QAAA7gqAqQgqAqg7AAQg8AAgqgqQgqgqAAg7QAAg8AqgqQAqgqA8AAIAGrGEgfJAoiIAAAAQACAAABAAQgBAAgCAAQgHABADAFQAEAIAAgOQACAODIAJQBEACEYAHQAwABB3gDQBogCAzADQBjAHAmAjQAWAVAAAfQAABZgwAsQgkAhhdAZQiuAugPAFQh+AqhnBHQglAahMBGQhGA6g2AHQgeADhxACQhsACgsAGEglDAuiQgCgZgoiLQgoiIAAgNQAAgnCtgTQB6gNClAAEgr8AtpQAIBLA3BiQBPCQBXAAQBEAAA2B3QAjBPANBLQAHAoAZAkQALAOAoAtQBEBKACBQI4jAyIzwApIAAqAIAAsyEgsMA3mQAEAAAEAAQAqAAAdAdQAdAdAAAqQAAApgdAdQgdAegqAAQgpAAgegeQgdgdAAgpQAAgqAdgdQAbgaAkgDIAQp9EgzpAxUQAuAAAgAgQAhAhAAAuQAAAughAgQggAgguAAQguAAggggQggggAAguQAAguAgghQAgggAuAAIgFlcEg3CgRvIAAdYIKQAAAFzTlIAAFoMAgIgBBAFzTlII1n8IbpAAEgRCA0oQANiiBwg1QBYgqDEAPQB7AJDlgJQB0gFAAgfQAAgSADgCQAIgJAoAAQAcAAAfAKQAzARA5AtQATAOAwApQAkAfAQAJQBQAsBwAxQB1A0ArAJEgJLAg7IAAGqIfmAAIGNlhIg5mNIk7FMIgZGiEgJLAg7IGJlEIexAAEBBBgSqQgFhQAAgMQAAklDDjSQBMhRBagxQBTgsA9AAQAcAAAIAVQAFANgCAkQgBAnAFAUQAIAfAdAOQAXAMAkANQAaAOAHAdQAEAOAAAqQgBAkAHAPQAMAZA7AMQBCANARAQQAUAUAmAYQAWAOAwAeEBQQgWvQADAbgJA8QgKBDAAAVQAAADACAkQADAkAAAQEA9qgSgIDXAAIPEAAIAvAAEAkqgSqQgcAGgWgBQhCgBgNg2QgGgZACgxQAEhIAAgJQAAhBgkgdQgVgQgDgFQgLgNAAgXQAAhcB7iOQAwg3AvgnQAvgmATAAQABAABTARQBhAUAvAJQAaAEALAQQAFAIAFAXQADAUAIAJQALAMAdAAQBvAACyhCQBZgiBJghQATAAACAKQACAHgCATIgQBeQAAAfAkAQQAfAOBNAJQAiAEgBAkQAAAVgIArQAAAYAiAeQAhAfAAAfQAAASgHAkQgIAkAAAVQAAAlAXATQAPAMAxAaQAPAJAMAeQANAlAGAGEA9dgk3QAAAGAAAHQACEPgKCcQgLCsAAB/QAACRAOCUQAKBiAIAtEAe3gnYQAogCAGgNQADgNADgJQAFgRAMgPQAJgKBngBQBrgCAMgGQBig2BchSQBmhaAchFQAhhRAygtQAkggA6gXQBXgjAFgCQAxgZAcgtQBAhmAThdQAKhZByl7EAd9gnwIAAAQQAkABAOADQAHACABACQAAgIgGADQgBABgBAAQgJAFgGAAQAMAAALgBEAbDgneQAWAAB0gCQAcAAAUAAIAAVAIb/AAEAavgnkQAAADAAADIAAAAQABBuAJC2QAKC7AAC7QAABngNCvQgMCwAAADQAABoABAVQACA4AJAmEA6WgkdQgEECgIHeQgGFmgIA3IDuAAEAx6AlRQABgCAAAAQAThUAAghQAAi9EQiCQBngyB6gdQBrgaBKAAQBRAAAdALQAcAMA+AAQASAAA2grQBWhEAngaQDOiJDrAAQB3AACCAvQAjANBEAbQA8AXgbBmIAJMKIAOSxMgqiAAAQggiIAAAAQgEgXAAg2QAAgSAPhVQAPhVAAgYQAAgLAIgQQAIgRAAgKQAAgyBKiAQBJh4AAgIQAAgnB2hLQBgg8BcgmQA+gYBagIQA5gFBrABIAAhDQgHgogHhBQgGg7AAgSQAAgiAThRQAjA8BgA1QAgARAdAMQBAAaAzAAQAQAAA7AZQBHAdA2ALQAOADAuAGQAyAGAPAAQAAAAAdADQApAFBkALQCAAKCCAFQBVADBXAAQDsAAB8gGQA/gDAigEQBjgNCOg/QAEgCAFgCEAlmASYIAVF0IFMlkIg2m/gEA8WAqnIgHhbEA8WAqnQAxABAjAjQAkAjAAA0QAAAzgkAkQgkAkgzAAQgzAAgkgkQgkgkAAgzQAAg0AkgjQAkgkAzAAQACAAABAAgEAxuAk1QAFAOAHAOEA01AtMQAMgCANAAQA7AAApAqQAqApAAA7QAAA7gqAqQgpApg7AAQg7AAgqgpQgpgqAAg7QAAg7ApgpQAhghArgHIAFltEBCaAzYQACAAADAAQA8AAArArQArArAAA9QAAA8grArQgrArg8AAQg9AAgrgrQgqgrAAg8QAAg9AqgrQAqgpA5gCIAEptEBK8AtDQAAAAABAAQA4AAAoAnQAoAoAAA4QAAA4goAnQgoAog4AAQg4AAgogoQgngnAAg4QAAg4AngoQAognA3AAIgKjbEgJLAg7If/AIAFzTlIfzhNEhPwAlPQAEAoACAEQABADACAD");
	this.shape_107.setTransform(508.425,382.45);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#669900").s().p("EhPwAnbIBaAAQAAA4AoAnQAoApA3AAQA4AAAogpQAognAAg4QAAg4gogoQgogog4ABIgCAAIAMpQQCRA9AsALQAwALCQA2QBqAmBFAAIALAAIgLAAQhFAAhqgmQiQg2gwgLQgsgLiRg9IgMgFQiRg+gNAAIgEAAQgtgBgQgWIAAqZQByhACkgsQCWgoBeAAQCBAAC5BdIB9BAQA8AdAfAAQBQAACTgUQCUgUBsABQBzgBBtBIQBzBKARBlQAHAkgEBHQgHBdABAdQACCYBiBLQCuCGApAsQBRBZABBfQiygCh6gNQhDgGiEgDQhQgBhpAAQhwAAjdgmIhVgQQkQgzhtgDQBtADEQAzIBVAQIgHLGQg8gBgpArQgrAqAAA7QAAA8ArApQApAqA8ABIADBVIzwAogEhDWAg6QgsACgfAfQghAhAAAvQAAAvAhAhQAhAgAvAAQAuAAAhggQAhghAAgvQAAgvghghQghgggugBIgFAAIAIiHIgICHgEBCVAeTQiCgEiAgLIiNgQIgdgCQgOAAgzgHIg7gIQg3gMhGgcQg8gZgQAAQgyAAhBgbQgdgMgggRQhfg0gkg9IABgCQAThUAAghQAAi9EQiBQBngyB6geQBsgaBJAAQBRAAAdAMQAcAMA+AAQASAAA2grQBWhFAngaQDOiJDrAAQB4AACBAwQAkANBDAbQA8AWgbBnIAJMJQiOA/hjANQgiAEg/ADQh8AGjsAAQhWAAhWgDgEg+TgAlQhZgIiCgNQiDgPhYgHQhjgJgsAAQhZAAgwgPQgwgPgcAAQgigBgegBQhNgEg5gNQg9gOg0geQAAgRAHgJQgHAJAAARIAAAAIgjmdIBCgGIAzgDQAkABCeA2QA9AVAxATIgDAIQAKAjBPASQAqAKA3AIIgDgYQgHhoABhIQACiYA2AAQAWAAAWAOQASANANARQgPiAAfiMQAoizBhAAQCTAABMD/QAiBvAfEFIAWhHQASgyASAAQAlAAAbBSQATA9AAAjIAXgRQACgCARAAQBWAAAZCUQANBKAADJIAAAhIgIgBQgYAagsAGQgZAEhVAAQgwAAhkgIgEhGYgdHQgWhOAAiKIADAKQARA7AOAgQgOgggRg7IgDgKIAAgpIAAgDIAAgDQAChOgFglQgGg4gXgiQgRgZghgPIg4gWQhAgYAAhEQAAiUB5jfQAnhHA1hTIA7haQAOgXAkgQQA3gXBkAAQBNAAAbAyQATAkAuCMQANAhA8AuIBWBAQAVAVAXBXQAWBWALAMQAIAIASAJIAAALQgBAXARBDQgRhDABgXIADgJQATAIAdAKQA0AbAABCQAAAogLBTIgKBXQAAApAZATQAQAMAnAJQApAJANAHQAZAPAAAiQAAAIgOAuQgQA8ggBcIAAAggEBA4gd3IAAgKIgFhdQAAklDDjRQBNhSBZgwQBTgtA9AAIAkAWQAFAMgBAlQgCAnAFATQAJAfAcAPQAXAMAlANQAaANAGAdQAEAPAAApQgBAkAIAQQALAZA7ALQBCAOARAQQAUAUAmAYIBGArIALAGQADAbgJA8QgKBCAAAVIADAnQACAkAAARIAAAFgAIW93IgiggQgKgOABgfQAAgSAKhUQAKhUAAgTQAAgmgZgPQgJgHgtgLQglgKgSgUQgZgcABg9QAAg1Ach2QAVhZASg0IAOg0QAGgVAJgPQBDhgC6hlQBCgkA/gaQA3gWAMAAQARAAAFAJQACAEACAPQAIAcA9AAQAMAACWgKQBAAAAUAKQAaANAAArQAAAugcBpQgcBoAAAUQAAAoAlANQAJADBIAJQA3AHAaAWQAkAgABBHQgBBLgRBbQgSBcAAAiQgBA3AtAcQAXAQAGAHQAOAPAAAZQAAAGgFAkQgGAiAAAGQAAAUAYAJQAQAGAHALIAAABIACACIAAAAg");
	this.shape_108.setTransform(509.3,455.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(3,1,1).p("EAxMg8OIYIgkQgyIygZBAQgLAegcAjQgmAugZAhQgZAghCAUQg8ATgigHQgQBdgDA3QgDAkgLAuQgLAvgiBMQgkBPgOAKQhLAsgXAeQgWAbAEAnQADAggpAnQgsApg1AJQgFABgNAGQgTAIgkARQg3AagjAAQgDAAgYgeQgIgLgIgIQgSgTgTgJQgLgFgqgQQgcgKgVgOQhLgvgIg1QgDgTAEgfQAFgsABgKIAAihIhUAAQgSgBhNAOQhNANgHAAQgWhOABieQABisgFgbQgIgshCiEQg9h5AplugEAadgnrIAAAHIAAANQgNAGgwAAQgjAAghgaQgTgPgmgsQhQhfhEgSQgqgLhIgCQhUABgsgCQilgHhihLQhxhXgBhmQAAg1gDgJQgIgcgpgQQhYghhjgZQh5gfgEgBQgygRgUgZQgVgbAAg6QAAggAvhWQAMgWAJgSIAAAAQAfg7ADgUEAFRg2dQAAgagEgUQgHgcgOAAQgjAAgQhTQgKhVAAgDQAAggBKg3MAsHgAlAIeygQgYgPgKgQQgJgPAAgeQAAgTALhUQAKhTAAgTQAAgngZgPQgJgGgtgMQgmgKgRgUQgZgbAAg9QAAg2Adh2QAVhZARg0QALglADgOQAGgVAKgPQBDhhC6hlQBCgjA+gaQA4gXAMAAQARAAAFAJQACAFACAOQAIAcA9AAQAMAACWgKQBAAAAUAKQAaANAAArQAAAvgcBoQgdBoAAAUQAAAoAlANQAKADBHAKQA3AGAaAXQAlAfAABHQAABMgSBbQgSBcAAAiQAAA3AsAbQAYAQAGAIQAOAPAAAZQAAAGgFAjQgGAjAAAGQAAAUAYAIQAQAGAHALIAAABQABABAAABIABAAICvAAIDHAAIF7AAIT2AAICOAAAI7yQQgQgIgNgIIPoAAIABAAQACAFABAGAA9ygIHhAAA47LpIZ4ymIAArjA5OyJIaLr6IAALjEgmOguPIZmonINlYzEg7jgczQADhuBEh7QBIiABAAAQAUAAAVBAQAXBHAVAOQAcATBFATQA1AXgCA5QgDBLAJA7QALBFAZASQBEAxACBXQAAAUgEAXEhGlgVIQAAgTAAgVQAAgCAAgBQAAgCAAgCQAChOgFgkQgGg4gYgjQgRgZgggPQgWgIgPgGQgLgEgIgDQhAgYAAhFQAAiTB5jgQAnhHA1hTQAxhKAKgQQAOgXAjgPQA4gYBkAAQBNAAAbAyQATAkAuCMQANAiA8AtQBSA9AEADQAVAWAXBWQAWBXALALQAIAIASAJEg7UgbOQgQhDAAgXQAAgFABgGQABABACABQATAJAdAJQA0AcAABCQAAAngLBTQgKBTAAAFQAAAoAZAUQAQAMAmAIQAqAKANAHQAZAPAAAhQAAAJgOAuQgRA7gfBcEhN6gR2QAPg4AUhCQALgnAAgGQAAgngXg8QgXg8AAg4QAAhQAlg4QAhgzAmAAQAcAAAcAfQAhAkAdAKQAEABBBAOQAVAEAQAGQAQAHALAIQAvAjAlB3QAFARAIAcQABABAAACQAAABABACQAFARAGAUQABAGACAFQARA6AOAhEhGNgRnQgCgEgBgEInqAAIi5AAEhGQgRvQgVhOAAiLEhFoAWfQgtALgbAFQgPADgJACQgjAHgeAAQh4AAhjgiQhUgbhhg/Ihly7IAAgDQAUAAAugDQAvgDADAAQAlAACeA3QA9AVAxATQBTAgAxAbEhJcADiQAJAiBQATQApAKA3AIQgBgNgBgLQgIhpABhHQACiYA3AAQAVAAAWAPQATAMANASQgQiAAfiMQAoizBiAAQCTAABMD+QAiBwAfEEQASg/ADgIQATgzASAAQAlAAAaBSQAUA+AAAjQAUgPADgCQACgCAQAAQBXAAAZCTQANBKAADJQAAARAAAQQgBB5gJA/QgJA4gVAqQgNAYgiA/QggBHgcB0QgHAchaA1QgBABgBAAQgkAVgyAZQgGADgrAiQgjAdgaAFQgqAJhcALQhdALggAAQg6AAg1gJQghgFgfgJQgHgDgHgCQhRgbgIgbEg3CgRvIvOAAEgtagR4QAeiMANhfQAPhxBRggQA1gXCaAAQCkAABTBXQBBBCAmCVQAJAkAJA4QAQBgARCdQAaD3AAB/QAAAJACDSQABDmgKB7QgPC+gWCOQgOBYAABpQAAArAKBGQAEAgAFAdQAAADABADEgsyALpQgKi2gJhHQgKhJAAhRIANnHQAAidgXijQgWijAAj4QAAjFAOhBQAEgRADgRILKgJIJCgIIATdyEg3CgRvIEHm9IMt1jINAcGEg3CgRvIJogJEgkPALJQABAQABAQQACAgACAdQgDgCgCgCQgTgNhRAAQhSAAgMAGQgKAFhJBKQgzgrgOgIQgvgcg8AAQgyAAgiBAQgZAxAAAfQAAA0A2AcQA4AdBYgJQBBgGBWAYQBeAbAcAAQA9AAAghBQAKgTAGgWQAJggAAgjQAAhRgagYQAHBiAKBKQAJBAAMAwQAfB+BcC1QBhC9AxCEQAJAZAlB4QABADABACQAUgDAQAAQAAgVAqATQApATAzAqQCHBwAABbQAAASgSAQQgqAliLAZQiPAZhxAAQhVAAhkgTQhjgTheAAQh4AAgoADQhjAHgqAZQA1DqAsBtQA3CJBcBdQA+A/BmBpQA5A7BHBJQBSBSBIA6QBKA9A/AlEgoOAN7QgLgJgKgIEgkNALpICRAAIJBAAEgsyALpIAAAAIAAAAQgtBBghCSQgoCxAADSQAACFBgGCQAwDBAwCoQACALADALQgDACgCABEgsoALcQgFAGgFAHEgsyALpIAAAAIIlAAEgoOAYjQgxACh/ARQiQASgBAAQgQAAgMgsQgMgsABg1QABg8ARgkQAVgqAnAEQBPAHB0gyQBMghAIgDQAtgRAfAAQAXAABwA5QByA6AKABQBLAIAcA/QATApAABJQAAAmgtAHQgCAAg+AAQheAChVgCQikgCgCgKIAAAAQgBgIABACQACAFAJABQgFAAgGAAgEhPnAmBIAAqZQByg/CkgsQCWgoBeAAQCBAAC5BcQAuAYBOApQA9AdAfAAQBQAACTgUQCTgUBsAAQB0AABtBHQBzBLARBkQAHAlgFBHQgGBdABAdQACCYBiBLQCuCFAoAtQBRBYACBgEgsCAgCQBZgUB5gqQBygfCcgDQBbgCCFgsQBgggA8gIQAPAtAcAhQAeAjBuBfQAzAsA1ApQB6BeCEBQQEXCnCWBpQAMAIAUAQQAAAAAAAAQAlAdBAA3QBSBFAjAPQAdANBpAhQA3ASBQAZQARAGDzBIQBOAXAyASQAAAAABAAQAAAAABABQA5AUAUAOQCGBaEXBqQB+AwApAUQBJAiASAcA+CdJQgJAAAEAGQAFAHAAgNgEg+EAQJQAvADAiAiQAlAlAAA0QAAA0glAkQgJAJgLAHQgeAVgnAAQg0AAglglQgkgkAAg0QAAg0AkglQAlglA0AAQAEAAAEAAIgGlYEhFAAKHQBYAHCCAOQCDAOBZAHQBkAJAvAAQBWAAAZgEQAsgHAYgaEhLlAJeQAfABAiAAQAcAAAwAQQAvAPBZAAQAtAABjAJEhPUAIHQgHAJAAAQQA0AeA9APQA5ANBMAEEhLMAQLQAGAAAGAAQA5AAAoAoQApAoAAA5QAAA5gpAoQgoApg5AAQg5AAgogpQgogoAAg5QAAg5AogoQAkgkAxgEIgZmtEhE2AN4QAbABATATQAVAVAAAeQAAAdgVAVQgVAVgdAAQgeAAgVgVQgUgVAAgdQAAgeAUgVQAVgUAeAAQACAAACAAIgKjxEhFaAWcQgHACgHABEhDNAsSQACAAACAAQAvAAAhAhQAhAhAAAvQAAAughAhQghAhgvAAQguAAghghQghghAAguQAAgvAhghQAfgfAsgCIAAAAIAIiHQBtADEQAzQAsAIAoAHQDdAnBxAAQBoAABQABQCFACBCAHQB6ANCzACQAAAJAAAJQgBAIgBAIQgDAaADAdIAChHEhPnAmBQAQAXAtABIAEAAQANAACRA9QAGADAFACQCSA9AsALQAwAMCQA1QBqAnBFAAQAFAAAGAAEhMJAwrQACAAABAAQA4AAAoAoQAoAoAAA4QAAA4goAnQgoAog4AAQg4AAgogoQgngnAAg4QAAg4AngoQAngnA2gBIAMpQEg76A2WQA7AAAqAqQAqAqAAA8QAAA7gqAqQgqAqg7AAQg8AAgqgqQgqgqAAg7QAAg8AqgqQAqgqA8AAIAGrGEgfJAoiIAAAAQACAAABAAQgBAAgCAAQgHABADAFQAEAIAAgOQACAODIAJQBEACEYAHQAwABB3gDQBogCAzADQBjAHAmAjQAWAVAAAfQAABZgwAsQgkAhhdAZQiuAugPAFQh+AqhnBHQglAahMBGQhGA6g2AHQgeADhxACQhsACgsAGEglDAuiQgCgZgoiLQgoiIAAgNQAAgnCtgTQB6gNClAAEgr8AtpQAIBLA3BiQBPCQBXAAQBEAAA2B3QAjBPANBLQAHAoAZAkQALAOAoAtQBEBKACBQMgsTABbIAA2aIAAgYEgsMA3mQAEAAAEAAQAqAAAdAdQAdAdAAAqQAAApgdAdQgdAegqAAQgpAAgegeQgdgdAAgpQAAgqAdgdQAbgaAkgDIAQp9EgzpAxUQAuAAAgAgQAhAhAAAuQAAAughAgQggAgguAAQguAAggggQggggAAguQAAguAgghQAgggAuAAIgFlcEg3CgRvIAAdYIKQAAAFzTlIAAFoMAgIgBBAFzTlII1n8IbpAAEgRCA0oQANiiBwg1QBYgqDEAPQB7AJDlgJQB0gFAAgfQAAgSADgCQAIgJAoAAQAcAAAfAKQAzARA5AtQATAOAwApQAkAfAQAJQBQAsBwAxQB1A0ArAJEgJLAg7IAAGqIfmAAIGNlhIg5mNIk7FMIgZGiEgJLAg7IGJlEIexAAEBBBgSqQgFhQAAgMQAAklDDjSQBMhRBagxQBTgsA9AAQAcAAAIAVQAFANgCAkQgBAnAFAUQAIAfAdAOQAXAMAkANQAaAOAHAdQAEAOAAAqQgBAkAHAPQAMAZA7AMQBCANARAQQAUAUAmAYQAWAOAwAeEBQQgWvQADAbgJA8QgKBDAAAVQAAADACAkQADAkAAAQEA9qgSgIDXAAIPEAAIAvAAEAkqgSqQgcAGgWgBQhCgBgNg2QgGgZACgxQAEhIAAgJQAAhBgkgdQgVgQgDgFQgLgNAAgXQAAhcB7iOQAwg3AvgnQAvgmATAAQABAABTARQBhAUAvAJQAaAEALAQQAFAIAFAXQADAUAIAJQALAMAdAAQBvAACyhCQBZgiBJghQATAAACAKQACAHgCATIgQBeQAAAfAkAQQAfAOBNAJQAiAEgBAkQAAAVgIArQAAAYAiAeQAhAfAAAfQAAASgHAkQgIAkAAAVQAAAlAXATQAPAMAxAaQAPAJAMAeQANAlAGAGEA9dgk3QAAAGAAAHQACEPgKCcQgLCsAAB/QAACRAOCUQAKBiAIAtEAe3gnYQAogCAGgNQADgNADgJQAFgRAMgPQAJgKBngBQBrgCAMgGQBig2BchSQBmhaAchFQAhhRAygtQAkggA6gXQBXgjAFgCQAxgZAcgtQBAhmAThdQAKhZByl7EAd9gngQAkABAOADQgJAFgGAAQAMAAALgBQAAgIgGADQgBABgBAAQAHACABACEAbDgneQAWAAB0gCQAcAAAUAAIAAVAIAAAPEAd9gnwIAAAQEAavgnkQAAADAAADIAAAAQABBuAJC2QAKC7AAC7QAABngNCvQgMCwAAADQAABoABAVQACA4AJAmEA6WgkdQgEECgIHeQgGFmgIA3IDuAAEAx6AlRQABgCAAAAQAThUAAghQAAi9EQiCQBngyB6gdQBrgaBKAAQBRAAAdALQAcAMA+AAQASAAA2grQBWhEAngaQDOiJDrAAQB3AACCAvQAjANBEAbQA8AXgbBmIAJMKIAOSxMgqiAAAQggiIAAAAQgEgXAAg2QAAgSAPhVQAPhVAAgYQAAgLAIgQQAIgRAAgKQAAgyBKiAQBJh4AAgIQAAgnB2hLQBgg8BcgmQA+gYBagIQA5gFBrABIAAhDQgHgogHhBQgGg7AAgSQAAgiAThRQAjA8BgA1QAgARAdAMQBAAaAzAAQAQAAA7AZQBHAdA2ALQAOADAuAGQAyAGAPAAQAAAAAdADQApAFBkALQCAAKCCAFQBVADBXAAQDsAAB8gGQA/gDAigEQBjgNCOg/QAEgCAFgCEAlmASYIAVF0IFMlkIg2m/gEA8WAqnIAAgBIgHhaEA8WAqnQAxABAjAjQAkAjAAA0QAAAzgkAkQgkAkgzAAQgzAAgkgkQgkgkAAgzQAAg0AkgjQAkgkAzAAQACAAABAAgEAxuAk1QAFAOAHAOEA01AtMQAMgCANAAQA7AAApAqQAqApAAA7QAAA7gqAqQgpApg7AAQg7AAgqgpQgpgqAAg7QAAg7ApgpQAhghArgHIAFltEBCaAzYQACAAADAAQA8AAArArQArArAAA9QAAA8grArQgrArg8AAQg9AAgrgrQgqgrAAg8QAAg9AqgrQAqgpA5gCIAEptEBK8AtDQAAAAABAAQA4AAAoAnQAoAoAAA4QAAA4goAnQgoAog4AAQg4AAgogoQgngnAAg4QAAg4AngoQAognA3AAIgKjbEgJLAg7If/AIAFzTlIfzhNEhPwAlPQAEAoACAEQABADACAD");
	this.shape_109.setTransform(508.425,382.45);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#669900").s().p("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");
	this.shape_110.setTransform(509.3625,382.45);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF9900").s().p("Ego+AU1QgdgdAAgqQAAgpAdgeQAagaAlgDIAIAAQApAAAdAdQAeAeAAApQAAAqgeAdQgdAdgpAAQgqAAgdgdgEBFEAR2QgqgqgBg9QABg8AqgrQApgpA6gCIAFAAQA8AAAqArQArArABA8QgBA9grAqQgqArg8AAQg9AAgrgrgEA32ALhQgpgpAAg7QAAg7ApgqQAgggAsgHQAMgCAMAAQA8AAApApQApAqAAA7QAAA7gpApQgpAqg8AAQg6AAgqgqgEhALAJ3QgighABgvQgBguAighQAfggAsgBIAEAAQAuAAAhAhQAiAhAAAuQAAAvgiAhQghAhguAAQgvAAggghgEhIUgRlQgogogBg5QABg5AogpQAjgjAxgEIANgBQA5AAAoAoQApApAAA5QAAA5gpAoQgoAog5AAQg5AAgogogEg7YgR7QgkglAAg0QAAg0AkglQAlgkA0AAIAIAAQAvADAhAhQAmAlAAA0QAAA0gmAlQgJAJgKAHQgeAVgnAAQg0AAglglg");
	this.shape_111.setTransform(481.55,621.975);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#669900").s().p("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");
	this.shape_112.setTransform(509.3625,382.45);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(3,1,1).p("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");
	this.shape_113.setTransform(508.425,382.45);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#663300").s().p("EgCyAvOIAAmqIf+AIIgYGiIAYmiIE8lMIA5GNImNFhgAVBTSIbpAAIkrGvI/0BNgAyiTSIgU9yIaMr5IAALjIAALiI54SmgA7jTSIgJg9QgKhGAAgrQAAhpAOhYQAViOAQi+QAJh7AAjnIgCjaQAAh/gaj2QgRiegQhgQgJg4gKgkQgmiVhAhCQhUhWijAAQibAAg1AWQhQAhgPBwQgNBggeCMIpoAIIJogIIgHAhQgOBCAADEQAAD4AWCiQAWCjABCeIgNHHQAABSAJBIQAKBIAKC1IAAAAIqQAAIAA9YIEGm9IAAADQAAATgDAVQADgVAAgTIAAgDIMt1jINAcGIpBAIIJBgIIAUdygEgnBgKOIAAAAgAy2qggAy2qggAy2qgItA8GIZnonINlY0I6ML5gAHW2Zg");
	this.shape_114.setTransform(467.55,333.525);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFCCFF").s().p("AydCeIGJlDIeyAAIk8FLg");
	this.shape_115.setTransform(567.775,577.325);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(3,1,1).p("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");
	this.shape_116.setTransform(508.425,382.45);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("ABtUDQAOiiBvg1QBZgqDEAOQB6AJDmgJQBzgFABgeQAAgTACgBQAIgJAoAAQAcAAAfAKQA0AQA6AtQASAOAwAqQAkAeAQAJQBQAtBxAwQB0A0ArAJgAxECPQhkgTheAAQh4AAgoADQhjAHgqAaIgFgXQgXhRgXhVIAUgGQBZgUB5gpQByggCcgCQBcgDCEgsQBggfA7gJIABAAQAPAtAdAiQAeAiBtBfQAzArA1ApQgpAliMAZQiPAahxAAQhVAAhjgUgA0uwDQhXgZhAAHQhZAJg3gdQg2gcAAg0QAAggAZgwQAhhAAyAAQA9AAAuAcQAOAIAzArQBJhLAKgEQAMgGBSAAQBSAAASANIAFADQAHBiAKBLQgFAVgLAUQggBAg9AAQgcAAhdgagA1eyqIgVgQIAVAQg");
	this.shape_117.setTransform(388.4,591);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(3,1,1).p("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");
	this.shape_118.setTransform(508.425,382.45);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#663333").s().p("EgsKAZlIgBggIABAgIokAAIAAAAQgLi2gJhHQgJhIAAhSIAMnHQAAiegWijQgXijAAj4QAAjDAPhCIAHgiIK3gJIq3AJQAeiMAMhfQAPhwBRghQA1gWCbAAQCjAABTBWQBBBCAmCVIAABcIASAAQAQBgARCeQAaD1AAB/IADDbQAADngJB7QgQC+gWCOQgNBYAABpQgBArALBGIAIA9gEg0uAZlIAJgNIgJANgEAx/gEjQAIg3AGlnIAMrgIANgKIAOASQAYAfADAAQAjAAA3gbQAkgRATgIQACEPgKCcQgLCsAAB/QAACRAPCVQAJBhAIAugAS5kjQgJgmgCg5QgBgVAAhnIAMizQANiwAAhnQAAi6gJi7QgKi3AAhtIATAAICKgDIAwAAIAAVBg");
	this.shape_119.setTransform(559.3,293.2457);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#663300").s().p("EgCyAvOIAAmqIf+AIIgYGiIAYmiIE8lMIA5GNImNFhgAMLbOIf0hNI/0BNII2n8IbpAAIkrGvIAVF0MggJABCgA7jTSIgJg9QgKhGAAgrQAAhpAOhYQAViOAQi+QAJh7AAjnIgCjaQAAh/gaj2QgRiegQhgIJBgIIAUdygAy2qgIaMr5IAALjIAALiI54SmgEgwpATSIAA9YIJogIIgHAhQgOBCAADEQAAD4AWCiQAWCjABCeIgNHHQAABSAJBIQAKBIAKC1IAAAAgEgsjgRDIAAADQAAATgDAVQADgVAAgTIAAgDIMt1jINAcGIpBAIQgJg4gKgkQgmiVhAhCQhUhWijAAQibAAg1AWQhQAhgPBwQgNBggeCMIpoAIgEgnBgKOIAAAAgAy2qggAy2qgItA8GIZnonINlY0I6ML5gAHW2Zg");
	this.shape_120.setTransform(467.55,333.525);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#669900").s().p("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");
	this.shape_121.setTransform(509.3625,382.45);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#663300").s().p("EAcZAvOgEgDNAvOIAAmqIGIlEIeyAAIk7FMI//gIIf/AIIgZGigEAcyAosIE7lMIA5GNImNFhgEAcyAosgALxbOIfzhNI/zBNII1n8IbpAAIA2G/IlMFkIgVl0IErmvIkrGvIAVF0MggIABCgEArkAaBgA7+TSIgJg9QgKhGAAgrQAAhpAOhYQAWiOAPi+QAKh7gBjnIgCjaQAAh/gaj2QgRiegQhgIJCgIIATdygAzQqgIaLr5IAALjIAALiI54SmgEgxEATSIAA9YIJogIIgHAhQgOBCAADEQAAD4AWCiQAXCjAACeIgNHHQAABSAKBIQAJBIAKC1IAAAAgEgs9gRDIAAADQgBATgDAVQADgVABgTIAAgDIMt1jINAcGIpCAIQgJg4gJgkQgmiVhBhCQhThWikAAQiaAAg1AWQhRAhgPBwQgNBggeCMIpoAIgEgncgKOIAAAAgAzQqggAzQqgItA8GIZmonINlY0I6LL5gAG72Zg");
	this.shape_122.setTransform(470.225,333.525);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(3,1,1).p("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");
	this.shape_123.setTransform(508.425,382.45);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF66CC").s().p("Eg87AV1QgqgqAAg8QAAg7AqgqQAqgqA8AAQA7AAAqAqQAqAqAAA7QAAA8gqAqQgqAqg7AAQg8AAgqgqgEhNBAP8QgngoAAg4QAAg4AngoQAngmA2gBIADAAQA4AAAnAnQAoAoABA4QgBA4goAoQgnAog4AAQg4AAgogogEg0SAP6QgggggBguQABguAgggQAgggAuAAQAuAAAgAgQAgAgABAuQgBAuggAgQggAhguAAQguAAggghgEBKCAMTQgngnAAg4QAAg4AngoQAngnA4gBIABAAQA4AAAoAoQAoAoAAA4QgBA4gnAnQgoAog4AAQg4AAgogogEA7hAJiQgkgkAAgzQAAgzAkgkQAkgkAzAAIADAAQAxABAjAjQAkAkAAAzQAAAzgkAkQgkAkgzAAQgzAAgkgkgEhFIgUlQgVgUABgeQgBgdAVgVQAVgVAeAAIADAAQAbACATATQAWAVAAAdQAAAegWAUQgUAVgdAAQgeAAgVgVg");
	this.shape_124.setTransform(504.75,615.075);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("ACKUDQAOiiBwg1QBYgqDEAOQB6AJDmgJQBzgFABgeQAAgTACgBQAIgJAoAAQAdAAAfAKQAzAQA6AtQASAOAxAqQAjAeARAJQBPAtBxAwQB0A0AsAJgAv+QJIiAiFIAJgIQgCgZgpiLQgoiIAAgNQAAgnCtgTQB6gMCmAAIAAAAQgIABADAEQAFAIAAgNQABAODIAIIFdAJQAvABB3gDQBogBAyACQBkAHAlAkQAWAUAAAgQAABZgvArQglAhhcAZQiuAugPAFQh+AqhnBHQglAbhMBFQhGA6g2AHQgeAEhwABQhsACgsAGIgJAKQhHg6hThRgAwnCPQhkgThdAAQh5AAgnADQhjAHgqAaIgGgXQgXhRgXhVIAUgGQBZgUB5gpQByggCcgCQBcgDCFgsQBfgfA8gJIAAAAQAPAtAdAiQAeAiBuBfQAzArA1ApQgqAliMAZQiPAahxAAQhVAAhjgUgA6eoJQgGgVgCgZQgDgYAAgbQACg8ARgjQAVgrAmAFQBPAGB0gxIBVgkQAsgRAfAAQAYgBBvA5QByA6AKABQA6AHAfAnQAIALAHAPQASApAABIQAAAmgsAIIhBAAQheABhUgCQikgCgDgKIAMAAQgJAAgDgGQgBgCABAIIAAAAQgxACh/ARIiRATQgQAAgMgtgA0RwDQhWgZhBAHQhZAJg3gdQg2gcAAg0QAAggAZgwQAhhAAyAAQA9AAAuAcQAOAIA0ArQBJhLAKgEQALgGBSAAQBSAAASANIAGADQAGBiALBLQgGAVgKAUQghBAg9AAQgcAAhdgagA1ByqIgUgQIAUAQg");
	this.shape_125.setTransform(385.4711,591);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#669900").s().p("EhPwAmZIA8AAQgsgBgQgXIAAqZQBxg/ClgtQCVgoBeABQCCgBC4BdIB9BAQA9AeAeAAQBQgBCTgTQCUgUBsAAQB0AABsBHQBzBKASBmQAGAjgEBIQgGBdAAAcQACCZBiBKQCuCGApAsQBRBZACBgQizgDh6gMQhCgHiFgCQCFACBCAHQB6AMCzADIgBASIgBAQQgEAaAEAcQAIBMA2BiQBPCQBXAAQBFAAA2B3QAjBOAMBMQAHAoAaAjQAKAPApAtQBDBJACBRMgsSABagEg8EA2WQg7AAgqAqQgqAqAAA7QAAA8AqAqQAqAqA7AAQA8AAAqgqQAqgqAAg8QAAg7gqgqQgqgqg8AAIAHrGQDdAmBxABQBogBBQACQhQgChoABQhxgBjdgmIhVgPQkQgzhtgDQBtADEQAzIBVAPIgHLGgEgtUA4CQgdAeAAApQAAAqAdAdQAdAdAqAAQApAAAdgdQAegdAAgqQAAgpgegeQgdgdgpAAIgJABIARp+IgRJ+QgkADgaAZgEhMSAwrQg2ABgnAmQgoAoAAA4QAAA4AoAoQAoAoA4AAQA4AAAngoQAogoAAg4QAAg4gogoQgngng4AAIgDAAIAMpQIgMJQgEgzyAxUQguAAghAgQggAgAAAvQAAAtAgAhQAhAgAuAAQAuAAAgggQAgghAAgtQAAgvggggQggggguAAIgFlcgEhDXAsSIAAAAQgrACggAfQghAhAAAuQAAAvAhAhQAhAhAvAAQAuAAAhghQAhghAAgvQAAgughghQghghguAAIgFAAIAIiHIgKAAQhGAAhqgnQiPg1gxgMQgrgLiSg9IgLgEQiRg+gOAAIgEAAIAEAAQAOAACRA+IALAEQCSA9ArALQAxAMCPA1QBqAnBGAAIAKAAIgICHgEAlmA7FIggiHQgEgXAAg2QAAgSAQhVQAPhVAAgYQAAgLAIgQQAIgQAAgLQAAgyBJiBQBJh4AAgHQAAgnB2hLQBhg8BbgmQA+gYBbgIQA5gFBqABIAAhDQgHgpgGhBQgGg6AAgSQAAgiAThRIAAgCQAThUAAghQAAi9EQiCQBogyB5geQBsgZBJAAQBRAAAdAMQAdALA+AAQASAAA2grQBVhEAogaQDNiJDrAAQB4AACBAvQAkANBDAbQA9AXgcBmIAJMKQiNA/hkAMQghAFhAADQh7AGjtAAQhWAAhWgDQiCgFiAgKIiNgQIAIBaIgIhaICNAQQCAAKCCAFQBWADBWAAQDtAAB7gGQBAgDAhgFQBkgMCNg/IAOSwgEBCRAzYQg6ACgpApQgrArAAA9QAAA8ArArQArAqA8ABQA9gBAqgqQArgrAAg8QAAg9grgrQgqgrg9AAIgEAAIADptIgDJtgEAzgAt0QgqApAAA7QAAA7AqAqQApApA7AAQA7AAAqgpQApgqAAg7QAAg7gpgpQgqgqg7AAQgNAAgMACIAFltIgFFtQgrAHggAhgEBKyAtCQg3ABgnAnQgoAoAAA4QAAA4AoAoQAoAnA4AAQA4AAAngnQAogoAAg4QAAg4gogoQgngog4AAIgCAAIgKjagEA8KAqnQgzgBgkAlQgkAkAAAzQAAAzAkAjQAkAkAzAAQAzAAAkgkQAkgjAAgzQAAgzgkgkQgjgjgxgBIAAgBgEAzzAnBQAgASAdAMQBBAbAyAAQARAAA7AYQBGAdA3AMIA8AIQAyAGAOAAIAdADIgdgDQgOAAgygGIg8gIQg3gMhGgdQg7gYgRAAQgyAAhBgbQgdgMgggSQhfg0gjg8QAjA8BfA0gEg79ArQIAAAAgEhLuAWZQhTgbhhg/Ihly7IBCgGIAygDQAlAACdA3QA+AVAxATIgDAIQAJAiBQATQApAJA3AJIgCgYQgIhpABhHQACiYA3ABQAVgBAWAOQATANAMASQgPiAAfiMQAoizBhAAQCUAABMD+QAhBwAgEEIAVhHQASgzASAAQAlAAAbBSQATA9AAAkIAXgSQACgBARAAQBWAAAaCTQANBKAADKIAAAgQgBB5gKA/QgIA4gWAqIguBXQggBHgcBzQgHAdhbA1IgBABQglAVgyAZQgGADgrAjQgjAcgZAEQgrAJhbAMQhdAMggAAQg6gBg2gJIAOgDIgOADQgggFgfgKIgPgEQhRgbgHgbQAHAbBRAbIAPAEQAfAKAgAFIhHAQIgYAFQgkAGgeABQh4AAhjgigEhLWAQLQgxAEgkAjQgoApAAA5QAAA5AoAoQApAoA5AAQA5AAAogoQAogoAAg5QAAg5gogpQgogog5ABIgNAAgEg/uAQuQglAlAAA0QAAA0AlAkQAlAlA0AAQAnAAAegVQAKgHAJgJQAlgkAAg0QAAg0glglQghgigvgDIgHlYIAHFYIgIAAQg0AAglAlgEhLWAQLIgYmuQAfACAhAAQAdAAAvAPQAwAQBZAAQAsAABjAJIAKDxIgEAAQgdAAgVAUQgVAVAAAdQAAAeAVAUQAVAWAdgBQAeABAUgWQAVgUAAgeQAAgdgVgVQgTgTgbgBIgKjxQBYAHCDAOQCDAOBYAHQBlAIAvAAQBVAAAagEQAsgGAXgaQgXAagsAGQgaAEhVAAQgvAAhlgIQhYgHiDgOQiDgOhYgHQhjgJgsAAQhZAAgwgQQgvgPgdAAQghAAgfgCgEhPlAIgQA0AeA+AOQA4AOBNADQhNgDg4gOQg+gOg0geQAAgQAHgJQgHAJAAAQIAAAAgEhFyAWfIAAAAgEhGZgRvQgVhOgBiKIADAKQARA7AOAgQgOgggRg7IgDgKIABgpIAAgDIAAgEQABhNgEglQgHg5gXghQgRgagggPIglgNIAAgBIgTgHQhBgYAAhFQAAiTB5jgQAnhHA1hTIA7haQAOgXAkgPQA3gXBkgBQBNAAAbAzQAUAjAtCMQANAiA8AtIBWBAQAWAVAWBXQAXBXAKALQAIAIASAJIAAALQAAAYAQBCQgQhCAAgYIAEgJQATAJAcAJQA0AbAABDQAAAngKBTIgLBXQAAApAZAUQAQAMAnAIQApAKANAHQAZAPAAAhQAAAJgNAtQgRA9ggBbQAghbARg9QANgtAAgJQAAghgZgPQgNgHgpgKQgngIgQgMQgZgUAAgpIALhXQAKhTAAgnQAAhDg0gbQgcgJgTgJIgEgCQADhuBFh7QBHh/BAgBQAVAAAUBAQAXBHAVAOQAdATBEATQA2AXgCA5QgEBLAKA8QALBEAYASQBFAxABBXIkGG9gEhODgRvIAAgHIAih7QAMgmAAgHQAAgmgXg8QgXg8AAg5QAAhPAkg4QAhgzAmAAQAdAAAbAfQAhAkAdAJIBFAQQAVAEARAGQAQAHALAJQAuAiAlB3IAOAtIABADIAAADIALAmQABCKAVBOgEBA3gSgIAAgKIgFhcQAAklDDjSQBNhSBagvQBSgtA9AAIAlAVQAEAMgBAmQgCAmAFATQAJAgAcAOQAYANAkANQAaANAHAdQADAPAAApQAAAkAHAQQALAYA8AMQBCANAQARQAUATAmAZIBGArIALAFQADAbgJA9QgKBCAAAVIADAnQACAkAAARIAAAEgEAjvgSgIAAgFIACAAIABAAIAAAAIACAAQAQAAATgDIAJgCIgJACQgTADgQAAIgCAAIAAAAIgBAAIgCAAQhCgBgOg2QgGgZADgxIAEhRQgBhBgjgdQgWgRgDgDQgLgOAAgXQAAhcB7iNQAxg4AvgnQAugmATAAIBVARQBgAUAwAJQAaAEAKAPQAGAKAEAWQAEAUAHAJQAMAMAcAAQBwAACyhCQBZgiBIghQATAAADAKQACAHgCASIgQBfQAAAfAjAPQAfAPBNAJQAjAEgBAkQgBAVgHArQAAAYAhAeQAiAfAAAfQAAASgIAkQgHAkAAAUQAAAnAXASQAPANAwAZQAPAJAMAeQAOAlAGAGIAAAUgAIVygIgigfQgJgPAAgeQAAgTAKhUQAKhTAAgTQAAgngZgPQgJgGgtgMQglgKgRgTQgZgcAAg9QAAg2Ach1QAVhaASg0IAOgzQAGgVAKgPQBDhhC5hkQBCgkA/gaQA3gXANAAQAQAAAFAJQADAFACAOQAHAcA9AAQANABCVgLQBAAAAVAKQAZANAAAsQAAAugcBoQgcBoAAAUQAAAoAlANQAJAEBIAIQA3AIAaAWQAlAfAABHQAABMgSBbQgSBcAAAiQAAA3AsAcQAXAPAHAHQANAPAAAaQAAAGgFAjQgFAjAAAGQAAAUAXAIQAQAGAHALIABABIAAAAIABACIAAAAgEhGvgVHIAAAAgEA6ogkVIgPgSIgBgBQgSgTgTgJIg1gVQgdgKgUgOQhLgugIg2QgDgTADgeIAGg3IAAigIhUAAQgSgBhMANQhOAOgGAAQgWhPABieQAAisgEgbQgJgshBiDQg9h6AoluQhxF7gKBaQgTBchBBmQgcAtgxAZIhcAlQg5AXgkAgQgyAughBQQgcBFhmBaQhcBShiA2QgNAGhrACQhmACgJAJQgNAPgFARIgGAWQgGANgoACQAAgIgFADIgDABQgNgDglgBIAAgQIAAAQIgvAAIiLACIgTAAIAAAAIAAgGIgTAAIAAgGIAAAGIAAANQgNAHgwAAQgiAAghgaQgUgQglgsQhRhehDgSQgrgMhHgCQhUABgtgCQilgGhhhMQhxhWgBhnQgBg1gCgJQgJgcgpgQQhXghhkgZIh8ggQgzgRgTgYQgWgcAAg6QAAggAwhWIAVgnIgQgJQAAgagFgTQgHgdgOAAQgiAAgRhTIgJhYQAAghBKg2MAsGgAlIYJgjQgyIxgZBAQgMAegbAjQgmAugZAhQgZAghCAUQg8ASgjgGQgPBdgEA3QgCAlgLAtQgLAvgjBNQgjBOgPAJQhKAtgYAfQgVAbAEAmQADAhgqAnQgrAog1AJQgFABgOAGIAAgHIAAgGIAAAGIAAAHQgSAIgkARQg3AagjABQgEgBgXgegEAFYg2VIAAABIAAgBQAeg7ADgTQgDATgeA7g");
	this.shape_126.setTransform(509.3625,382.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_106},{t:this.shape_105}]},10).to({state:[{t:this.shape_106},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_110},{t:this.shape_106},{t:this.shape_109}]},1).to({state:[{t:this.shape_112},{t:this.shape_106},{t:this.shape_111},{t:this.shape_109}]},1).to({state:[{t:this.shape_112},{t:this.shape_115},{t:this.shape_111},{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_112},{t:this.shape_114},{t:this.shape_111},{t:this.shape_115},{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_117},{t:this.shape_111},{t:this.shape_115},{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_122},{t:this.shape_119},{t:this.shape_117},{t:this.shape_111},{t:this.shape_118}]},1).to({state:[{t:this.shape_126},{t:this.shape_122},{t:this.shape_119},{t:this.shape_125},{t:this.shape_111},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[]},2).wait(10));

	// flap
	this.btn1 = new lib.Symbol1();
	this.btn1.name = "btn1";
	this.btn1.setTransform(506.45,294.95,1,1,0,0,0,428.4,113);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1).to({regX:428.5,scaleY:0.5,x:506.55,y:238.45},0).wait(1).to({scaleX:0,scaleY:0,x:350.45,y:-181.95},0).wait(1).to({scaleX:1,scaleY:0.5,skewX:180,x:506.55,y:125.45},0).wait(1).to({scaleY:1,y:68.95},0).wait(5).to({_off:true},1).wait(20));

	// envelope
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(3,1,1).p("EBC9ghHMAAABCPEhC8AhIMAAAhCPMA6/AezgAn9iUIIqEgIKrlrMA3lAknMiF5AAAEhC8ghHMCF5AAAALYjfMA3lgdo");
	this.shape_127.setTransform(506.525,393.925);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00CCFF").s().p("EgdeghHMA69AeyMg69Ajdg");
	this.shape_128.setTransform(266.775,393.925);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#33CCFF").s().p("EhC8AhIMA6/gjdIIqEhIKrlrMA3lgdoMAAABCPMg3lgknMA3lAkng");
	this.shape_129.setTransform(506.525,393.925);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#33CC66").s().p("An9NIMg6/gexMCF5AAAMg3lAdnIqrFsg");
	this.shape_130.setTransform(506.525,294.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]}).to({state:[]},10).wait(20));

	// Actions
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("Ag6BJQABgSALgPQAKgQAdgVQAQgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgGAAgGAFQgFAFgBAMIgogDQACgRAHgJQAGgKALgFQAMgFATAAQAVAAALAFQAMAFAHAKQAGAKABAMQgBANgHAMQgIALgUAOIgQAMIgJAIIA9AAIAAAhg");
	this.shape_131.setTransform(196.2,738.875);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("Ag6BJQACgSAKgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgHAAgEAFQgFAFgCAMIgogDQADgRAGgJQAGgKAMgFQALgFATAAQAVAAAMAFQAMAFAGAKQAHAKAAAMQAAANgIAMQgHALgVAOIgQAMIgIAIIA9AAIAAAhg");
	this.shape_132.setTransform(182.85,738.875);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgcBEQgLgGgIgLQgEgHgEgOQgCgOAAgQQAAgoAPgRQAOgQAdAAQAOAAAKAEQAJADAGAGQAGAGADAGQADAGADAJQADAQAAARQABAmgNASQgOASggAAQgRAAgLgGgAgNglQgFALAAAaQAAAbAFAKQAFAKAIAAQAGAAAFgFQAEgDACgKQACgJAAgTQAAgcgFgKQgEgKgKAAQgJABgEAJg");
	this.shape_133.setTransform(169.65,739);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("Ag6BJQABgSALgPQAKgQAdgVQAQgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgGAAgGAFQgFAFgBAMIgogDQACgRAHgJQAGgKALgFQAMgFATAAQAVAAALAFQAMAFAHAKQAGAKABAMQgBANgHAMQgIALgUAOIgQAMIgJAIIA9AAIAAAhg");
	this.shape_134.setTransform(156.15,738.875);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgzBGIgDgbQAIACALAAQAHAAAEgDQAEgDADgIIgrhnIAqAAIAUBFIAUhFIAnAAIgpBuQgHATgHAGQgKAKgVAAQgIAAgSgDg");
	this.shape_135.setTransform(136.975,743.075);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_136.setTransform(124.125,740.975);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAsBIIAAhtIgcBtIgfAAIgchtIAABtIgkAAIAAiOIA6AAIAWBVIAWhVIA5AAIAACOg");
	this.shape_137.setTransform(108,739);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgJBFQgIgEgDgIQgEgIAAgRIAAgjIgOAAIAAgdIAOAAIAAgUIAogUIAAAoIAVAAIAAAdIgVAAIAAAjQAAAHABACQABADAGAAQAEAAAIgCIADAbQgPAEgNAAQgOAAgGgEg");
	this.shape_138.setTransform(260.6,708.925);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgoA1IAAhnIAlAAIAAASQAFgMAFgEQAGgEAJAAQAIAAALAFIgNAcQgHgCgEAAQgHAAgFAHQgFAJAAAXIAAAjg");
	this.shape_139.setTransform(251.575,710.65);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAgBIIgIgYIgxAAIgHAYIgtAAIA2iPIAvAAIA2CPgAgPARIAeAAIgPgzg");
	this.shape_140.setTransform(238.525,708.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgoA1IAAhnIAlAAIAAASQAFgMAFgEQAGgEAJAAQAIAAALAFIgNAcQgHgCgEAAQgHAAgFAHQgFAJAAAXIAAAjg");
	this.shape_141.setTransform(220.475,710.65);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgfAwQgNgGgHgMQgIgNAAgRQAAgXAPgPQAQgPAbAAQAWAAANAGQANAHAGANQAHANAAATIAAAFIhOAAQAAAJAFAFQAGAHAHAAQAHAAAFgDIAGgHIAoAEQgJAQgNAGQgNAHgXAAQgUAAgLgGgAgOgWQgDAEgBAKIAlAAQgBgMgEgFQgGgFgIAAQgIAAgGAIg");
	this.shape_142.setTransform(208.5,710.775);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgKBFQgGgEgEgIQgDgIAAgRIAAgjIgPAAIAAgdIAPAAIAAgUIAmgUIAAAoIAWAAIAAAdIgWAAIAAAjQABAHAAACQADADAFAAQAEAAAIgCIADAbQgPAEgMAAQgPAAgHgEg");
	this.shape_143.setTransform(197.35,708.925);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgtArQgJgKAAgUIAAhBIAoAAIAAA4QAAAKADADQAEAFAHAAQAGAAAFgGQAEgFAAgOIAAgxIAoAAIAABnIgmAAIAAgSQgHALgJAFQgIAEgMAAQgQAAgKgKg");
	this.shape_144.setTransform(186.2,710.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("Ag4BJIAAiOIAlAAIAAAPQAIgKAGgDQAIgFALAAQAUAAAMAQQALAQAAAXQAAAZgMAOQgNAOgTAAQgJAAgGgEQgIgDgGgGIAAAygAgLglQgFAGAAAOQAAAMAFAFQAFAGAHAAQAHAAAFgGQAEgFAAgNQAAgNgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_145.setTransform(173.125,712.625);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAwA1IAAg6QAAgHgDgDQgEgGgGAAQgGAAgFAFQgFAGABAKIAAA1IgnAAIAAg4IgBgKQgBgDgDgDQgDgCgFAAQgGAAgFAFQgEAGgBAKIAAA1IgnAAIAAhnIAlAAIAAAQQAIgKAIgEQAIgEAMAAQANAAAFAEQAIAEAEAKQAKgLAHgEQAIgDALAAQARAAAJAKQAKAKAAAVIAABAg");
	this.shape_146.setTransform(156.25,710.65);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgoApQgTgPAAgaQAAgXAQgPQAQgPAbAAQAfAAAQASQANAOAAAVQAAAYgQAPQgQAPgcAAQgYAAgQgNgAgNgTQgGAGAAANQAAAOAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgOQAAgNgGgGQgGgHgIAAQgHAAgGAHg");
	this.shape_147.setTransform(139.525,710.775);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AggBDQgPgHgLgQQgKgSAAgaQAAgjATgTQASgTAiAAQAbAAAQALQAPALAHAXIgmAIQgCgGgDgDQgDgGgGgCQgGgDgGAAQgOAAgIAMQgGAJAAATQAAAXAHAJQAIAJAMAAQAMgBAGgGQAHgIADgNIAmAMQgDAQgJALQgIALgMAGQgNAFgTAAQgWAAgPgHg");
	this.shape_148.setTransform(125.2,708.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_149.setTransform(103.975,710.775);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgTBIIAAiPIAnAAIAACPg");
	this.shape_150.setTransform(93.975,708.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgXAzQgLgDgIgHQgIgHgFgJQgEgJAAgQQAAgPAFgKQAFgIAHgGQAGgGAIgEQAMgEAQAAQAaAAAOAJQANAJAFARIglAFQgCgGgFgEQgEgDgIAAQgJAAgGAHQgGAHAAANQAAANAGAHQAGAGAJAAQAHAAAFgEQAFgEAEgIIAlAEQgDAMgHAJQgHAJgLAEQgMAFgQAAQgQAAgLgDg");
	this.shape_151.setTransform(84.5,710.775);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgxAuQgKgJAAgNQAAgMAHgHQAHgHATgDIAcgHIAOgEQAAgIgDgDQgDgDgIAAQgIAAgFADQgEADgDAHIglgEQACgKAEgGQAEgGAHgEQAGgDAJgCQAKgBALAAQARAAALACQALACAHAGQAFAEADAJQADAIAAAHIAAAtIABALIAEALIglAAIgDgGIgCgHQgIAIgHADQgKAEgOAAQgSAAgKgIgAAAAIQgMADgDADQgEADAAAEQAAAFAEADQADADAGAAQAGAAAGgDQAFgDADgFQACgFAAgHIAAgGIgQAFg");
	this.shape_152.setTransform(71.125,710.775);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgVBIIAAhsIgtAAIAAgjICFAAIAAAjIgtAAIAABsg");
	this.shape_153.setTransform(58.175,708.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("Ag8BIIAAiPIBJAAQAYAAAMAMQAMALAAAVQAAAWgNALQgNAMgbAAIgXAAIAAA2gAgPgJIAKAAQAMgBAFgEQAGgEAAgIQAAgGgFgFQgEgFgMAAIgMAAg");
	this.shape_154.setTransform(44.075,708.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("Ag6BJQACgSAKgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgEgFgIAAQgHAAgFAFQgEAFgCAMIgogDQADgRAGgJQAGgKAMgFQALgFATAAQAVAAALAFQAMAFAHAKQAGAKABAMQAAANgIAMQgHALgVAOIgQAMIgJAIIA+AAIAAAhg");
	this.shape_155.setTransform(199.6,738.875);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("Ag7BJQACgSALgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgFgFgHAAQgHAAgEAFQgGAFgBAMIgogDQADgRAGgJQAGgKAMgFQALgFATAAQAVAAAMAFQAMAFAGAKQAHAKgBAMQABANgIAMQgHALgVAOIgQAMIgIAIIA9AAIAAAhg");
	this.shape_156.setTransform(186.25,738.875);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgcBEQgLgGgHgLQgFgHgEgOQgCgOAAgQQgBgoAPgRQAPgQAdAAQAOAAAKAEQAJADAGAGQAGAGAEAGQACAGACAJQAFAQAAARQgBAmgNASQgNASggAAQgRAAgLgGgAgNglQgFALAAAaQAAAbAFAKQAFAKAIAAQAGAAAEgFQAFgDACgKQACgJAAgTQAAgcgEgKQgGgKgJAAQgJABgEAJg");
	this.shape_157.setTransform(173.05,739);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("Ag6BJQACgSAKgPQAKgQAcgVQARgMAFgHQAFgHAAgGQAAgGgFgFQgEgFgIAAQgHAAgFAFQgEAFgCAMIgogDQADgRAGgJQAGgKAMgFQALgFATAAQAVAAALAFQAMAFAHAKQAGAKABAMQAAANgIAMQgHALgVAOIgQAMIgIAIIA9AAIAAAhg");
	this.shape_158.setTransform(159.55,738.875);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAsBIIAAhtIgcBtIggAAIgbhtIAABtIglAAIAAiOIA7AAIAVBVIAXhVIA5AAIAACOg");
	this.shape_159.setTransform(111.4,739);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgJBFQgIgEgDgIQgDgIgBgRIAAgjIgOAAIAAgdIAOAAIAAgUIAogUIAAAoIAWAAIAAAdIgWAAIAAAjQAAAHABACQACADAEAAQAFAAAIgCIADAbQgPAEgNAAQgOAAgGgEg");
	this.shape_160.setTransform(264,708.925);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AggAwQgMgGgHgMQgIgNAAgRQAAgXAPgPQAQgPAcAAQAVAAANAGQAMAHAIANQAGANAAATIAAAFIhOAAQABAJADAFQAHAHAHAAQAGAAAGgDIAGgHIAoAEQgJAQgNAGQgMAHgYAAQgUAAgMgGgAgOgWQgDAEgBAKIAlAAQAAgMgGgFQgEgFgJAAQgIAAgGAIg");
	this.shape_161.setTransform(211.9,710.775);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgtArQgJgKAAgUIAAhBIAoAAIAAA4QAAAKAEADQADAFAHAAQAGAAAEgGQAFgFAAgOIAAgxIAoAAIAABnIgmAAIAAgSQgHALgJAFQgIAEgMAAQgQAAgKgKg");
	this.shape_162.setTransform(189.6,710.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAwA1IAAg6QAAgHgDgDQgEgGgGAAQgHAAgEAFQgFAGABAKIAAA1IgnAAIAAg4IgBgKQgBgDgDgDQgEgCgDAAQgIAAgEAFQgEAGAAAKIAAA1IgoAAIAAhnIAlAAIAAAQQAIgKAIgEQAIgEAMAAQAMAAAHAEQAGAEAFAKQAKgLAHgEQAIgDALAAQARAAAJAKQAKAKAAAVIAABAg");
	this.shape_163.setTransform(159.65,710.65);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AggBDQgPgHgLgQQgKgSAAgaQgBgjAUgTQATgTAhAAQAbAAAPALQAQALAHAXIgmAIQgCgGgDgDQgEgGgFgCQgGgDgGAAQgOAAgIAMQgGAJAAATQAAAXAHAJQAHAJANAAQAMgBAHgGQAGgIADgNIAmAMQgDAQgIALQgJALgNAGQgMAFgTAAQgWAAgPgHg");
	this.shape_164.setTransform(128.6,708.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgXAzQgLgDgIgHQgIgHgFgJQgEgJAAgQQAAgPAFgKQAEgIAHgGQAIgGAHgEQAMgEAQAAQAaAAAOAJQANAJAFARIgmAFQgBgGgEgEQgGgDgHAAQgJAAgGAHQgGAHAAANQAAANAGAHQAGAGAIAAQAIAAAGgEQAEgEAEgIIAlAEQgDAMgHAJQgHAJgLAEQgLAFgRAAQgQAAgLgDg");
	this.shape_165.setTransform(87.9,710.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_154,p:{x:44.075}},{t:this.shape_153,p:{x:58.175}},{t:this.shape_152,p:{x:71.125}},{t:this.shape_151},{t:this.shape_150,p:{x:93.975}},{t:this.shape_149,p:{x:103.975}},{t:this.shape_148},{t:this.shape_147,p:{x:139.525}},{t:this.shape_146},{t:this.shape_145,p:{x:173.125}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141,p:{x:220.475}},{t:this.shape_140,p:{x:238.525}},{t:this.shape_139,p:{x:251.575}},{t:this.shape_138,p:{x:260.6}},{t:this.shape_137},{t:this.shape_136,p:{x:124.125}},{t:this.shape_135,p:{x:136.975}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},20).to({state:[{t:this.shape_154,p:{x:47.475}},{t:this.shape_153,p:{x:61.575}},{t:this.shape_152,p:{x:74.525}},{t:this.shape_165},{t:this.shape_150,p:{x:97.375}},{t:this.shape_149,p:{x:107.375}},{t:this.shape_164},{t:this.shape_147,p:{x:142.925}},{t:this.shape_163},{t:this.shape_145,p:{x:176.525}},{t:this.shape_162},{t:this.shape_138,p:{x:200.75}},{t:this.shape_161},{t:this.shape_141,p:{x:223.875}},{t:this.shape_140,p:{x:241.925}},{t:this.shape_139,p:{x:254.975}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_136,p:{x:127.525}},{t:this.shape_135,p:{x:140.375}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155}]},9).wait(1));

	// Label
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(3,1,1).p("AiVAyIErhj");
	this.shape_166.setTransform(-49.95,450.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_166).to({_off:true},10).wait(20));

	// Button
	this.btn2 = new lib.BasicButton();
	this.btn2.name = "btn2";
	this.btn2.setTransform(883.05,306.5);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.btn3 = new lib.BasicButtoncopy();
	this.btn3.name = "btn3";
	this.btn3.setTransform(883.05,306.5);
	new cjs.ButtonHelper(this.btn3, 0, 1, 2, false, new lib.BasicButtoncopy(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn2}]},19).to({state:[{t:this.btn3}]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(445.6,338.5,581.4999999999999,434.5);
// library properties:
lib.properties = {
	id: '2E5EF0C229D3C94ABA1EDA0B77E939F6',
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
an.compositions['2E5EF0C229D3C94ABA1EDA0B77E939F6'] = {
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