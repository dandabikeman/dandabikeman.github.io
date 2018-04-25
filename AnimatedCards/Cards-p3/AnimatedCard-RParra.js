(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.BasicButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBTQgIgFgEgJQgEgJAAgVIAAgrIgSAAIAAgjIASAAIAAgXIAvgYIAAAvIAaAAIAAAjIgaAAIAAArQAAAIABADQADADAFAAQAGAAAJgDIAEAiQgSADgPAAQgRAAgJgEg");
	this.shape.setTransform(74.8,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA+IgXgoIgaAoIg0AAIAthAIgqg7IA4AAIATAiIAXgiIA0AAIgqA7IAuBAg");
	this.shape_1.setTransform(61.5,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAuAEQgLATgPAIQgPAIgcAAQgYAAgOgHgAgRgbQgFAGAAALIAuAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_2.setTransform(46.2,27.9);

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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.AnimatedCardRParra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(0);
		}
	}
	this.frame_11 = function() {
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(12);
		}
	}
	this.frame_20 = function() {
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(21);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(9).call(this.frame_20).wait(10));

	// BUTTON
	this.button_1 = new lib.BasicButton();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(797,642.9);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.button_2 = new lib.BasicButton();
	this.button_2.name = "button_2";
	this.button_2.parent = this;
	this.button_2.setTransform(797,642.9);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.button_3 = new lib.BasicButton();
	this.button_3.name = "button_3";
	this.button_3.parent = this;
	this.button_3.setTransform(797,642.9);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_1}]}).to({state:[{t:this.button_2}]},11).to({state:[{t:this.button_3}]},9).wait(10));

	// words
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AhOBqIgEgqQANAEAPAAQALAAAGgEQAHgFAEgNIhBiaIA/AAIAfBnIAehnIA7AAIg+ClQgLAcgLAKQgOAOggAAQgNAAgbgDg");
	this.shape.setTransform(982.7,153.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF00").s().p("AhKBEQgPgNAAgSQAAgSALgMQAKgKAcgGIArgJIAVgHQAAgLgFgEQgEgFgMAAQgNAAgIAFQgFADgEALIg5gGQADgPAHgJQAGgJALgGQAIgEAOgDQAPgCARAAQAZAAARADQAQADALAJQAHAHAFAMQAEAMAAALIAABEQAAALACAGQABAGAFAKIg4AAIgFgJIgCgKQgMALgLAFQgPAGgVAAQgcAAgOgNgAgBAMQgSAFgFAEQgFAFAAAGQAAAHAFAFQAFAEAKAAQAJAAAIgFQAJgFADgGQAEgHAAgMIAAgJIgZAIg");
	this.shape_1.setTransform(963.4,150.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF00").s().p("AhEBVQgRgZAAgiQAAglATgVQASgVAdAAQAOABAKAEQAMAFAIAJIAAhKIA9AAIAADWIg4AAIAAgYQgMAPgKAGQgMAGgPAAQggAAgRgYgAgSAAQgHAIAAAUQAAAUAHAIQAHAJALAAQALAAAHgJQAIgIAAgVQAAgSgIgJQgIgIgLAAQgKAAgHAIg");
	this.shape_2.setTransform(943,147.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF00").s().p("AgOBoQgLgHgFgLQgGgMABgZIAAg3IgXAAIAAgrIAXAAIAAgdIA6geIAAA7IAiAAIAAArIgiAAIAAA3QAAAJACAEQAEAFAHAAQAGAAAMgEIAEApQgWAFgTAAQgVAAgKgFg");
	this.shape_3.setTransform(916.8,147.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF00").s().p("AAWBQIAAhVQAAgOgFgHQgFgGgKAAQgKAAgHAIQgHAJAAAUIAABLIg7AAIAAibIA3AAIAAAZQANgPAMgHQAMgGATgBQAYAAAOAPQAOAPAAAfIAABig");
	this.shape_4.setTransform(900.1,150.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF00").s().p("AgwBJQgRgJgMgTQgMgTAAgaQAAgjAYgXQAXgWApAAQAhAAATAKQATAKAKATQAKATAAAeIAAAHIh2AAQABAOAHAHQAIAKANAAQAJAAAIgEQAEgDAGgHIA7AFQgOAYgTAKQgSAKgkAAQgeAAgSgIgAgWgiQgFAHgBAOIA5AAQgBgRgIgIQgHgHgMAAQgOAAgJALg");
	this.shape_5.setTransform(880.2,150.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF00").s().p("AgdBrIAAjVIA7AAIAADVg");
	this.shape_6.setTransform(865.1,147.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF00").s().p("AgdBrIAAjVIA7AAIAADVg");
	this.shape_7.setTransform(855.1,147.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FF00").s().p("AgwBJQgSgJgLgTQgMgTAAgaQAAgjAXgXQAYgWApAAQAhAAASAKQAUAKAKATQAKATAAAeIAAAHIh3AAQADAOAFAHQAJAKANAAQAJAAAHgEQAGgDAFgHIA7AFQgNAYgTAKQgUAKgjAAQgeAAgSgIgAgWgiQgEAHgCAOIA6AAQgCgRgHgIQgJgHgLAAQgOAAgJALg");
	this.shape_8.setTransform(840.2,150.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FF00").s().p("AAdBOIgdgyIghAyIhAAAIA4hRIg2hKIBHAAIAYAsIAdgsIBBAAIg1BKIA5BRg");
	this.shape_9.setTransform(820.6,150.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66FF00").s().p("AhZBrIAAjVICwAAIAAAtIhuAAIAAAiIBmAAIAAArIhmAAIAAArIByAAIAAAwg");
	this.shape_10.setTransform(800.2,147.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FF00").s().p("AAWBQIAAhVQAAgPgFgFQgFgHgKAAQgKAAgHAIQgHAIAAAVIAABLIg7AAIAAibIA3AAIAAAZQANgPAMgHQAMgGATgBQAYAAAOAPQAOAPAAAfIAABig");
	this.shape_11.setTransform(1025.3,106.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66FF00").s().p("AhKBEQgPgNAAgSQAAgSALgMQAKgKAcgGIArgJIAVgHQAAgLgFgEQgEgFgMAAQgNAAgIAFQgFADgEALIg5gGQADgPAHgJQAGgJALgGQAIgEAOgDQAPgCARAAQAZAAARADQAQADALAJQAHAHAFAMQAEAMAAALIAABEQAAALACAGQABAGAFAKIg4AAIgFgJIgCgKQgMALgLAFQgPAGgVAAQgcAAgOgNgAgBAMQgSAFgFAEQgFAFAAAGQAAAHAFAFQAFAEAKAAQAJAAAIgFQAJgFADgGQAEgHAAgMIAAgJIgZAIg");
	this.shape_12.setTransform(1005.3,106.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66FF00").s().p("AgwBJQgSgJgLgTQgMgTAAgaQAAgjAXgXQAYgWApAAQAgAAATAKQAUAKAKATQAKATAAAeIAAAHIh3AAQADAOAFAHQAJAKANAAQAJAAAIgEQAFgDAFgHIA7AFQgOAYgSAKQgUAKgjAAQgeAAgSgIgAgWgiQgEAHgCAOIA5AAQgBgRgIgIQgIgHgLAAQgOAAgJALg");
	this.shape_13.setTransform(975.4,106.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66FF00").s().p("AgaBOIhBibIA+AAIAdBiIAghiIA8AAIhCCbg");
	this.shape_14.setTransform(957,106.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66FF00").s().p("AhKBEQgPgNAAgSQAAgSALgMQAKgKAcgGIArgJIAVgHQAAgLgFgEQgEgFgMAAQgNAAgIAFQgFADgEALIg5gGQADgPAHgJQAGgJALgGQAIgEAOgDQAPgCARAAQAZAAARADQAQADALAJQAHAHAFAMQAEAMAAALIAABEQAAALACAGQABAGAFAKIg4AAIgFgJIgCgKQgMALgLAFQgPAGgVAAQgcAAgOgNgAgBAMQgSAFgFAEQgFAFAAAGQAAAHAFAFQAFAEAKAAQAJAAAIgFQAJgFADgGQAEgHAAgMIAAgJIgZAIg");
	this.shape_15.setTransform(938.3,106.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#66FF00").s().p("AAWBrIAAhVQAAgPgFgGQgFgFgKAAQgKAAgHAHQgHAIAAAWIAABKIg7AAIAAjVIA7AAIAABPQANgNALgFQAMgGAQAAQAYAAAOAPQAOAPAAAdIAABjg");
	this.shape_16.setTransform(918.3,103.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66FF00").s().p("AhDBBQgOgPAAgeIAAhiIA8AAIAABUQAAAPAFAGQAFAGAKAAQAKAAAHgJQAHgHAAgVIAAhKIA7AAIAACaIg3AAIAAgZQgNAQgNAGQgLAHgTAAQgYAAgOgPg");
	this.shape_17.setTransform(888.2,106.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#66FF00").s().p("Ag8A+QgdgXABgnQAAgiAXgXQAZgXAoAAQAuAAAYAbQATAWABAfQAAAjgZAXQgXAXgqAAQglAAgXgTgAgUgdQgJAKAAATQAAAVAJAKQAJAKALAAQANAAAIgKQAJgKAAgVQgBgUgIgJQgIgKgMAAQgMAAgJAKg");
	this.shape_18.setTransform(868.3,106.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66FF00").s().p("AhOBqIgEgqQANAEAPAAQALAAAGgEQAHgFAEgNIhBiaIA/AAIAfBnIAehnIA7AAIg+ClQgLAcgLAKQgOAOggAAQgNAAgbgDg");
	this.shape_19.setTransform(849.7,109.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66FF00").s().p("AgwBJQgSgJgLgTQgMgTAAgaQAAgjAXgXQAYgWApAAQAgAAATAKQAUAKAKATQAKATAAAeIAAAHIh3AAQACAOAGAHQAJAKANAAQAJAAAIgEQAFgDAFgHIA7AFQgOAYgSAKQgUAKgjAAQgeAAgSgIgAgWgiQgEAHgCAOIA6AAQgCgRgHgIQgJgHgLAAQgOAAgJALg");
	this.shape_20.setTransform(820.5,106.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66FF00").s().p("AhUBtIAAjVIA3AAIAAAWQAMgOAJgFQAMgHAQAAQAfAAASAYQAQAXABAkQAAAlgTAVQgSAUgdABQgOAAgKgFQgMgFgJgJIAABKgAgSg4QgHAJAAAVQAAASAIAIQAIAJAKAAQALAAAHgIQAHgIAAgVQAAgSgIgKQgGgIgMgBQgKABgIAIg");
	this.shape_21.setTransform(800.8,109);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#66FF00").s().p("Ag8A+QgcgXAAgnQAAgiAXgXQAYgXApAAQAuAAAYAbQATAWABAfQAAAjgYAXQgYAXgqAAQglAAgXgTgAgUgdQgJAKAAATQAAAVAJAKQAIAKAMAAQANAAAIgKQAJgKAAgVQAAgUgJgJQgIgKgMAAQgNAAgIAKg");
	this.shape_22.setTransform(780.4,106.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66FF00").s().p("AAkBrIAAhXIhIAAIAABXIhCAAIAAjVIBCAAIAABLIBIAAIAAhLIBDAAIAADVg");
	this.shape_23.setTransform(757.9,103.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#66FF00").s().p("AgOBoQgLgHgFgLQgGgMABgZIAAg2IgXAAIAAgsIAXAAIAAgcIA6gfIAAA7IAiAAIAAAsIgiAAIAAA2QAAAJACAEQAEAFAHAAQAGAAAMgEIAEApQgWAFgTAAQgVAAgKgFg");
	this.shape_24.setTransform(182.4,130.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#66FF00").s().p("AgdBrIAAiaIA7AAIAACagAgdhCIAAgoIA7AAIAAAog");
	this.shape_25.setTransform(170.7,130.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#66FF00").s().p("AAWBQIAAhVQAAgOgFgHQgFgGgKAAQgKAAgHAIQgHAJAAAUIAABLIg7AAIAAibIA3AAIAAAaQANgRAMgGQAMgHATAAQAYAAAOAPQAOAPAAAeIAABjg");
	this.shape_26.setTransform(145.7,133.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#66FF00").s().p("AgdBrIAAiaIA7AAIAACagAgdhCIAAgoIA7AAIAAAog");
	this.shape_27.setTransform(130.7,130.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#66FF00").s().p("AhDBBQgOgPAAgfIAAhiIA8AAIAABVQAAAOAFAHQAFAGAKAAQAKAAAHgIQAHgJAAgTIAAhMIA7AAIAACbIg3AAIAAgZQgNAPgNAHQgLAGgTABQgYAAgOgPg");
	this.shape_28.setTransform(115.7,133.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#66FF00").s().p("Ag8BQIAAibIA4AAIAAAaQAHgRAIgHQAJgFAMgBQAOABAPAHIgSArQgLgFgGAAQgMAAgGALQgIANAAAkIAAA1g");
	this.shape_29.setTransform(99.4,133.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#66FF00").s().p("AgwBJQgRgJgMgTQgMgTAAgaQAAgjAXgXQAYgWApAAQAhAAASAKQAUAKAKATQAKATAAAeIAAAHIh3AAQADAOAFAHQAJAKANAAQAJAAAHgEQAGgDAFgHIA7AFQgNAYgUAKQgSAKgkAAQgeAAgSgIgAgVgiQgFAHgCAOIA6AAQgCgRgHgIQgJgHgMAAQgNAAgIALg");
	this.shape_30.setTransform(259.1,89.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#66FF00").s().p("Ag8A+QgdgXAAgnQAAgiAYgXQAYgXApAAQAvAAAXAbQATAWAAAfQAAAjgXAXQgYAXgqAAQgkAAgYgTgAgUgdQgJAKAAATQAAAVAJAKQAIAKAMAAQANAAAJgKQAHgKABgVQAAgUgJgJQgIgKgNAAQgMAAgIAKg");
	this.shape_31.setTransform(219.1,89.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#66FF00").s().p("AAWBQIAAhVQAAgPgFgFQgFgHgKAAQgKAAgHAIQgHAIAAAVIAABLIg7AAIAAibIA3AAIAAAZQANgPAMgHQAMgGATgBQAYAAAOAPQAOAPAAAfIAABig");
	this.shape_32.setTransform(181.2,89.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#66FF00").s().p("AgOBoQgLgHgFgLQgGgMAAgaIAAg2IgWAAIAAgrIAWAAIAAgdIA7geIAAA7IAiAAIAAArIgiAAIAAA2QAAAKACAEQAEAFAGAAQAHAAAMgEIAEApQgWAFgTAAQgVAAgKgFg");
	this.shape_33.setTransform(134.6,86.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#66FF00").s().p("AgwBJQgRgJgMgTQgMgTAAgaQAAgjAYgXQAXgWApAAQAgAAAUAKQATAKAKATQAKATAAAeIAAAHIh2AAQABAOAHAHQAIAKANAAQAJAAAHgEQAFgDAGgHIA7AFQgNAYgUAKQgSAKgkAAQgeAAgSgIgAgVgiQgGAHgBAOIA5AAQgBgRgIgIQgHgHgNAAQgNAAgIALg");
	this.shape_34.setTransform(118,89.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#66FF00").s().p("AgOBoQgLgHgFgLQgFgMgBgaIAAg2IgVAAIAAgrIAVAAIAAgdIA8geIAAA7IAhAAIAAArIghAAIAAA2QAAAKABAEQAEAFAGAAQAHAAAMgEIAFApQgXAFgTAAQgVAAgKgFg");
	this.shape_35.setTransform(81.3,86.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#66FF00").s().p("AAWBQIAAhVQAAgPgFgFQgFgHgKAAQgKAAgHAIQgHAIAAAVIAABLIg7AAIAAibIA3AAIAAAZQANgPAMgHQAMgGATgBQAYAAAOAPQAOAPAAAfIAABig");
	this.shape_36.setTransform(64.6,89.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#66FF00").s().p("Ag8A+QgcgXgBgnQAAgiAZgXQAYgXAoAAQAvAAAXAbQAUAWgBAfQABAjgZAXQgXAXgqAAQgkAAgYgTgAgUgdQgIAKAAATQAAAVAIAKQAJAKALAAQANAAAIgKQAIgKAAgVQABgUgJgJQgIgKgNAAQgLAAgJAKg");
	this.shape_37.setTransform(44.6,89.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#66FF00").s().p("AhiBrIAAjVIBiAAQAdAAASAHQASAIALAPQAMAPAFAUQAGATAAAWQAAAigIATQgIATgOAMQgOANgQAEQgWAGgRAAgAggA6IARAAQAUAAAIgEQAJgFAFgLQAFgMAAgaQAAghgLgMQgLgNgZAAIgRAAg");
	this.shape_38.setTransform(23.5,86.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#66FF00").s().p("AgdBrIAAjVIA7AAIAADVg");
	this.shape_39.setTransform(855.1,147.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#66FF00").s().p("AAWBQIAAhVQAAgPgFgFQgFgHgKAAQgKAAgHAIQgHAIAAAVIAABLIg7AAIAAibIA3AAIAAAZQANgPAMgHQAMgGATgBQAYAAAOAPQAOAPAAAfIAABig");
	this.shape_40.setTransform(1025.3,106.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#66FF00").s().p("AhKBEQgPgNAAgSQAAgSALgMQAKgKAcgGIArgJIAVgHQAAgLgFgEQgEgFgMAAQgNAAgIAFQgFADgEALIg5gGQADgPAHgJQAGgJALgGQAIgEAOgDQAPgCARAAQAZAAARADQAQADALAJQAHAHAFAMQAEAMAAALIAABEQAAALACAGQABAGAFAKIg4AAIgFgJIgCgKQgMALgLAFQgPAGgVAAQgcAAgOgNgAgBAMQgSAFgFAEQgFAFAAAGQAAAHAFAFQAFAEAKAAQAJAAAIgFQAJgFADgGQAEgHAAgMIAAgJIgZAIg");
	this.shape_41.setTransform(938.3,106.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#66FF00").s().p("AhOBqIgEgqQANAEAPAAQALAAAGgEQAHgFAEgNIhBiaIA/AAIAfBnIAehnIA7AAIg+ClQgLAcgLAKQgOAOggAAQgNAAgbgDg");
	this.shape_42.setTransform(849.7,109.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#66FF00").s().p("AggBrIAAhaIhUh7IBKAAIAqBIIArhIIBKAAIhUB7IAABag");
	this.shape_43.setTransform(962.6,538.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#66FF00").s().p("AAwBrIgLgjIhLAAIgKAjIhEAAIBRjVIBHAAIBRDVgAgXAZIAuAAIgXhMg");
	this.shape_44.setTransform(941.8,538.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#66FF00").s().p("AggBrIAAhaIhUh7IBKAAIAqBIIArhIIBKAAIhUB7IAABag");
	this.shape_45.setTransform(896.5,538.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#66FF00").s().p("AAfBrIgjhBQgGgNgGgEQgHgFgJAAIgGAAIAABXIhDAAIAAjVIBuAAQAeAAARAFQAQAFAKAOQAKAPAAAUQAAASgIANQgHANgNAHQgJAFgPADQAMAEAFAEIALAMIAJANIAhA+gAgmgTIAcAAQAFAAAMgDQAGgCAEgFQAEgGABgHQAAgKgHgGQgGgFgSAAIgdAAg");
	this.shape_46.setTransform(849.3,538.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#66FF00").s().p("AgHBmQgKgFgMgOIAAAWIg4AAIAAjVIA9AAIAABKQAIgJAMgFQAKgFAOABQAcgBATAVQASAUAAAmQAAAZgIAUQgIATgPAKQgQAJgSAAQgPAAgMgHgAgRAAQgIAJAAATQAAATAIAJQAHAKALgBQAKABAIgKQAHgJAAgUQAAgTgHgIQgHgIgKAAQgLAAgIAIg");
	this.shape_47.setTransform(816.9,538.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#66FF00").s().p("AhUBtIAAjWIA3AAIAAAYQALgPAKgFQANgHAPAAQAfAAASAYQARAXAAAkQgBAmgSAUQgSAVgdgBQgOAAgKgEQgLgFgKgJIAABKgAgSg3QgHAJAAATQAAATAIAIQAHAJALAAQALAAAHgJQAHgHAAgVQAAgSgIgJQgGgKgMABQgJgBgJAKg");
	this.shape_48.setTransform(914.5,500.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#66FF00").s().p("AhVBtIAAjWIA4AAIAAAYQALgPALgFQALgHAQAAQAfAAARAYQASAXgBAkQAAAmgSAUQgTAVgcgBQgOAAgKgEQgLgFgKgJIAABKgAgRg3QgIAJAAATQAAATAIAIQAIAJAKAAQALAAAHgJQAHgHAAgVQAAgSgHgJQgIgKgKABQgLgBgHAKg");
	this.shape_49.setTransform(894.5,500.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#66FF00").s().p("AAkBrIAAhXIhIAAIAABXIhCAAIAAjVIBCAAIAABLIBIAAIAAhLIBDAAIAADVg");
	this.shape_50.setTransform(851.3,494.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#66FF00").s().p("AgdBrIAAiaIA7AAIAACagAgdhCIAAgoIA7AAIAAAog");
	this.shape_51.setTransform(130.7,130.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#66FF00").s().p("AhiBrIAAjVIBiAAQAdAAASAHQASAIALAPQAMAPAFAUQAGATAAAWQAAAigIATQgIATgOAMQgOANgQAEQgWAGgRAAgAggA6IARAAQAUAAAIgEQAJgFAFgLQAFgMAAgaQAAghgLgMQgLgNgZAAIgRAAg");
	this.shape_52.setTransform(23.5,86.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#66FF00").s().p("AhKBEQgPgNAAgSQAAgSALgMQAKgKAcgGIArgJIAVgHQAAgLgFgEQgEgFgMAAQgNAAgIAFQgFADgEALIg5gGQADgPAHgJQAGgJALgGQAIgEAOgDQAPgCARAAQAZAAARADQAQADALAJQAHAHAFAMQAEAMAAALIAABEQAAALACAGQABAGAFAKIg4AAIgFgJIgCgKQgMALgLAFQgPAGgVAAQgcAAgOgNgAgBAMQgSAFgFAEQgFAFAAAGQAAAHAFAFQAFAEAKAAQAJAAAIgFQAJgFADgGQAEgHAAgMIAAgJIgZAIg");
	this.shape_53.setTransform(938.3,106.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#66FF00").s().p("AhOBqIgEgqQANAEAPAAQALAAAGgEQAHgFAEgNIhBiaIA/AAIAfBnIAehnIA7AAIg+ClQgLAcgLAKQgOAOggAAQgNAAgbgDg");
	this.shape_54.setTransform(849.7,109.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#66FF00").s().p("AAkBrIAAhXIhIAAIAABXIhCAAIAAjVIBCAAIAABLIBIAAIAAhLIBDAAIAADVg");
	this.shape_55.setTransform(757.9,103.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#66FF00").s().p("AAeBrIgihBQgGgNgGgEQgHgFgJAAIgGAAIAABXIhCAAIAAjVIBtAAQAfAAAQAFQAQAFAKAOQAKAPAAAUQAAASgHANQgIANgOAHQgIAFgOADQALAEAGAEIAKAMIAKANIAfA+gAgmgTIAcAAQAEAAAMgDQAHgCAFgFQAEgGAAgHQgBgKgGgGQgHgFgRAAIgdAAg");
	this.shape_56.setTransform(875.4,522.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#66FF00").s().p("AgIBmQgKgFgLgPIAAAYIg3AAIAAjWIA7AAIAABKQAJgJAMgFQAKgEAOgBQAdAAASAVQASAUABAmQAAAZgJAUQgJATgPAJQgPAKgSAAQgPAAgNgHgAgRAAQgIAJAAASQAAAVAHAIQAIAKAKgBQALABAIgKQAHgIAAgVQAAgTgHgIQgIgIgKAAQgLAAgHAIg");
	this.shape_57.setTransform(842.9,522.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#66FF00").s().p("AhUBtIAAjVIA3AAIAAAWQALgOALgFQALgHAQAAQAgAAAQAYQARAXAAAkQABAlgTAVQgTAUgcAAQgOABgKgFQgLgFgJgJIAABKgAgSg4QgHAKAAATQAAATAIAIQAIAJALAAQAKAAAHgJQAHgHAAgVQAAgSgHgKQgIgJgKAAQgKAAgJAJg");
	this.shape_58.setTransform(940.5,484.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#66FF00").s().p("AhUBtIAAjVIA3AAIAAAWQAMgOAJgFQAMgHAQAAQAfAAASAYQAQAXABAkQAAAlgTAVQgSAUgdAAQgOABgKgFQgMgFgJgJIAABKgAgSg4QgHAKAAATQAAATAIAIQAIAJAKAAQALAAAHgJQAHgHAAgVQAAgSgIgKQgGgJgMAAQgKAAgIAJg");
	this.shape_59.setTransform(920.5,484.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#66FF00").s().p("AgIBnQgKgGgLgPIAAAYIg3AAIAAjWIA7AAIAABKQAJgJAMgFQAKgFAOAAQAdABASAUQASAVABAkQAAAagJATQgJAUgPAJQgPAKgSAAQgPAAgNgGgAgRAAQgIAJAAASQAAAVAHAJQAIAIAKABQALgBAIgIQAHgJAAgWQAAgSgHgIQgIgIgKAAQgLAAgHAIg");
	this.shape_60.setTransform(842.9,583.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#66FF00").s().p("AhUBtIAAjWIA3AAIAAAYQALgPALgFQALgHAQAAQAgAAAQAYQARAYAAAjQABAlgTAVQgTAUgcABQgOAAgKgFQgLgFgJgJIAABKgAgSg4QgHAJAAAVQAAASAIAIQAIAJALAAQAKAAAHgIQAHgIAAgUQAAgUgHgJQgIgIgKgBQgKABgJAIg");
	this.shape_61.setTransform(940.5,545.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#66FF00").s().p("AhUBtIAAjWIA3AAIAAAYQAMgPAJgFQAMgHAQAAQAfAAASAYQAQAYABAjQAAAlgTAVQgSAUgdABQgOAAgKgFQgMgFgJgJIAABKgAgSg4QgHAJAAAVQAAASAIAIQAIAJAKAAQALAAAHgIQAHgIAAgUQAAgUgIgJQgGgIgMgBQgKABgIAIg");
	this.shape_62.setTransform(920.5,545.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#66FF00").s().p("AgOBnQgLgFgFgMQgGgLABgbIAAg1IgXAAIAAgsIAXAAIAAgcIA6gfIAAA7IAiAAIAAAsIgiAAIAAA1QAAALACADQAEAFAHAAQAGAAAMgEIAEApQgWAFgTAAQgVAAgKgGg");
	this.shape_63.setTransform(182.4,191.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#66FF00").s().p("AAWBPIAAhUQAAgPgFgFQgFgHgKAAQgKAAgHAJQgHAHAAAVIAABKIg7AAIAAiaIA3AAIAAAaQANgRAMgGQAMgHATABQAYAAAOAOQAOAPAAAeIAABig");
	this.shape_64.setTransform(145.7,194.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#66FF00").s().p("AhDBBQgOgPAAgeIAAhiIA8AAIAABUQAAAOAFAHQAFAGAKAAQAKAAAHgJQAHgHAAgUIAAhLIA7AAIAACaIg3AAIAAgZQgNAQgNAGQgLAGgTAAQgYAAgOgOg");
	this.shape_65.setTransform(115.7,194.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#66FF00").s().p("Ag8BPIAAiaIA4AAIAAAaQAHgRAIgHQAJgFAMAAQAOAAAPAIIgSAqQgLgFgGABQgMgBgGALQgIANAAAlIAAAzg");
	this.shape_66.setTransform(99.4,194.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#66FF00").s().p("AAWBPIAAhUQAAgOgFgHQgFgGgKAAQgKAAgHAJQgHAIAAAUIAABKIg7AAIAAiaIA3AAIAAAaQANgRAMgGQAMgHATAAQAYAAAOAPQAOAPAAAeIAABig");
	this.shape_67.setTransform(239.1,150.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#66FF00").s().p("AAWBPIAAhUQAAgOgFgHQgFgGgKAAQgKAAgHAJQgHAIAAAUIAABKIg7AAIAAiaIA3AAIAAAaQANgRAMgGQAMgHATAAQAYAAAOAPQAOAPAAAeIAABig");
	this.shape_68.setTransform(181.2,150.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#66FF00").s().p("AgOBoQgLgHgFgLQgGgLAAgaIAAg2IgWAAIAAgsIAWAAIAAgcIA7gfIAAA7IAiAAIAAAsIgiAAIAAA2QAAAKACADQAEAFAGAAQAHAAAMgEIAEApQgWAFgTAAQgVAAgKgFg");
	this.shape_69.setTransform(134.6,147.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#66FF00").s().p("AgOBoQgLgHgFgLQgFgLgBgaIAAg2IgVAAIAAgsIAVAAIAAgcIA8gfIAAA7IAhAAIAAAsIghAAIAAA2QAAAKABADQAEAFAGAAQAHAAAMgEIAFApQgXAFgTAAQgVAAgKgFg");
	this.shape_70.setTransform(81.3,147.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#66FF00").s().p("AAWBPIAAhUQAAgOgFgHQgFgGgKAAQgKAAgHAJQgHAIAAAUIAABKIg7AAIAAiaIA3AAIAAAaQANgRAMgGQAMgHATAAQAYAAAOAPQAOAPAAAeIAABig");
	this.shape_71.setTransform(64.6,150.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#66FF00").s().p("AhEBVQgRgYAAgjQAAglATgVQASgUAdAAQAOgBAKAFQAMAFAIAJIAAhKIA9AAIAADVIg4AAIAAgWQgMAOgKAGQgMAGgPAAQggAAgRgYgAgSAAQgHAIAAAVQAAASAHAKQAHAIALABQALgBAHgIQAIgKAAgTQAAgTgIgJQgIgIgLAAQgKAAgHAIg");
	this.shape_72.setTransform(943,208.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#66FF00").s().p("AgOBnQgLgGgFgLQgGgLABgaIAAg2IgXAAIAAgsIAXAAIAAgcIA6gfIAAA7IAiAAIAAAsIgiAAIAAA2QAAAKACADQAEAFAHAAQAGAAAMgEIAEApQgWAFgTAAQgVAAgKgGg");
	this.shape_73.setTransform(916.8,208.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#66FF00").s().p("AAWBPIAAhUQAAgOgFgHQgFgGgKAAQgKAAgHAJQgHAHAAAVIAABKIg7AAIAAiaIA3AAIAAAaQANgRAMgGQAMgHATABQAYAAAOAOQAOAPAAAeIAABig");
	this.shape_74.setTransform(900.1,211.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#66FF00").s().p("AhUBtIAAjWIA3AAIAAAYQAMgPAJgFQAMgHAQAAQAfAAASAYQAQAYABAjQAAAlgTAVQgSAVgdAAQgOgBgKgEQgMgFgJgJIAABKgAgSg3QgHAIAAAVQAAASAIAIQAIAJAKAAQALAAAHgJQAHgHAAgUQAAgUgIgIQgGgJgMAAQgKAAgIAJg");
	this.shape_75.setTransform(800.8,170.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#66FF00").s().p("AgIBmQgKgFgLgOIAAAWIg3AAIAAjVIA7AAIAABKQAJgJAMgFQAKgFAOABQAdgBASAVQASAUABAmQAAAZgJAUQgJATgPAKQgPAJgSAAQgPAAgNgHgAgRAAQgIAJAAATQAAATAHAJQAIAKAKgBQALABAIgKQAHgJAAgUQAAgTgHgIQgIgIgKAAQgLAAgHAIg");
	this.shape_76.setTransform(842.9,538.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#66FF00").s().p("AhUBtIAAjWIA3AAIAAAYQALgPALgFQALgHAQAAQAgAAAQAYQARAXAAAkQABAmgTAUQgTAVgcgBQgOAAgKgEQgLgFgJgJIAABKgAgSg3QgHAJAAATQAAATAIAIQAIAJALAAQAKAAAHgJQAHgHAAgVQAAgSgHgJQgIgKgKABQgKgBgJAKg");
	this.shape_77.setTransform(940.5,500.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#66FF00").s().p("AhUBtIAAjWIA3AAIAAAYQAMgPAJgFQAMgHAQAAQAfAAASAYQAQAXABAkQAAAmgTAUQgSAVgdgBQgOAAgKgEQgMgFgJgJIAABKgAgSg3QgHAJAAATQAAATAIAIQAIAJAKAAQALAAAHgJQAHgHAAgVQAAgSgIgJQgGgKgMABQgKgBgIAKg");
	this.shape_78.setTransform(920.5,500.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#66FF00").s().p("AgOBoQgLgHgFgLQgGgMABgaIAAg2IgXAAIAAgrIAXAAIAAgdIA6geIAAA7IAiAAIAAArIgiAAIAAA2QAAAKACAEQAEAFAHAAQAGAAAMgEIAEApQgWAFgTAAQgVAAgKgFg");
	this.shape_79.setTransform(182.4,146.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#66FF00").s().p("AAWBQIAAhVQAAgPgFgGQgFgGgKAAQgKAAgHAIQgHAIAAAVIAABLIg7AAIAAibIA3AAIAAAZQANgPAMgHQAMgGATgBQAYAAAOAPQAOAPAAAfIAABig");
	this.shape_80.setTransform(145.7,149.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#66FF00").s().p("AhDBBQgOgPAAgfIAAhhIA8AAIAABUQAAAPAFAGQAFAGAKAAQAKAAAHgIQAHgIAAgVIAAhKIA7AAIAACaIg3AAIAAgZQgNAQgNAGQgLAHgTAAQgYAAgOgPg");
	this.shape_81.setTransform(115.7,149.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#66FF00").s().p("Ag8BQIAAibIA4AAIAAAZQAHgQAIgGQAJgHAMAAQAOAAAPAIIgSArQgLgEgGgBQgMABgGAJQgIAOAAAkIAAA1g");
	this.shape_82.setTransform(99.4,149.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#66FF00").s().p("AAWBQIAAhVQAAgPgFgFQgFgHgKAAQgKAAgHAIQgHAJAAAUIAABLIg7AAIAAibIA3AAIAAAZQANgPAMgHQAMgGATAAQAYAAAOAOQAOAPAAAfIAABig");
	this.shape_83.setTransform(239.1,105.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#66FF00").s().p("AAWBQIAAhVQAAgPgFgFQgFgHgKAAQgKAAgHAIQgHAJAAAUIAABLIg7AAIAAibIA3AAIAAAZQANgPAMgHQAMgGATAAQAYAAAOAOQAOAPAAAfIAABig");
	this.shape_84.setTransform(181.2,105.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#66FF00").s().p("AgOBnQgLgFgFgMQgGgMAAgaIAAg2IgWAAIAAgrIAWAAIAAgdIA7geIAAA7IAiAAIAAArIgiAAIAAA2QAAALACADQAEAFAGAAQAHAAAMgEIAEApQgWAFgTAAQgVAAgKgGg");
	this.shape_85.setTransform(134.6,102.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#66FF00").s().p("AgOBnQgLgFgFgMQgFgMgBgaIAAg2IgVAAIAAgrIAVAAIAAgdIA8geIAAA7IAhAAIAAArIghAAIAAA2QAAALABADQAEAFAGAAQAHAAAMgEIAFApQgXAFgTAAQgVAAgKgGg");
	this.shape_86.setTransform(81.3,102.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#66FF00").s().p("AAWBQIAAhVQAAgPgFgFQgFgHgKAAQgKAAgHAIQgHAJAAAUIAABLIg7AAIAAibIA3AAIAAAZQANgPAMgHQAMgGATAAQAYAAAOAOQAOAPAAAfIAABig");
	this.shape_87.setTransform(64.6,105.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#66FF00").s().p("AhEBVQgRgYAAgjQAAgmATgUQASgVAdAAQAOABAKAEQAMAFAIAJIAAhKIA9AAIAADWIg4AAIAAgYQgMAPgKAFQgMAHgPAAQggAAgRgYgAgSAAQgHAIAAAUQAAAUAHAIQAHAKALgBQALABAHgKQAIgIAAgUQAAgTgIgJQgIgIgLAAQgKAAgHAIg");
	this.shape_88.setTransform(943,163.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#66FF00").s().p("AgOBnQgLgFgFgMQgGgMABgaIAAg2IgXAAIAAgrIAXAAIAAgdIA6geIAAA7IAiAAIAAArIgiAAIAAA2QAAALACADQAEAFAHAAQAGAAAMgEIAEApQgWAFgTAAQgVAAgKgGg");
	this.shape_89.setTransform(916.8,163.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#66FF00").s().p("AAWBPIAAhUQAAgPgFgFQgFgHgKAAQgKAAgHAJQgHAHAAAVIAABKIg7AAIAAiaIA3AAIAAAaQANgRAMgGQAMgGATAAQAYAAAOAOQAOAPAAAeIAABig");
	this.shape_90.setTransform(1025.3,122.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#66FF00").s().p("AhDBBQgOgPAAgeIAAhiIA8AAIAABUQAAAPAFAGQAFAGAKAAQAKAAAHgJQAHgHAAgVIAAhKIA7AAIAACaIg3AAIAAgZQgNAQgNAGQgLAHgTgBQgYAAgOgOg");
	this.shape_91.setTransform(888.2,122.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#66FF00").s().p("AhVBtIAAjWIA4AAIAAAYQALgPALgFQALgHAQAAQAfAAARAYQASAXgBAkQAAAmgSAUQgTAVgcgBQgOAAgKgEQgLgFgJgJIAABKgAgRg3QgIAJAAATQAAATAIAIQAIAJAKAAQALAAAHgJQAHgHAAgVQAAgSgHgJQgIgKgKABQgLgBgHAKg");
	this.shape_92.setTransform(907.5,500.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#66FF00").s().p("AgPBoQgKgHgFgLQgFgMgBgaIAAg2IgVAAIAAgrIAVAAIAAgdIA8geIAAA7IAgAAIAAArIggAAIAAA2QAAAKABAEQAEAFAGAAQAHAAAMgEIAFApQgXAFgTAAQgVAAgLgFg");
	this.shape_93.setTransform(169.4,146.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#66FF00").s().p("AgwBJQgRgJgMgTQgMgTAAgaQAAgjAYgXQAXgWApAAQAhAAATAKQATAKAKATQAKATAAAeIAAAHIh2AAQABAOAHAHQAIAKANAAQAJAAAIgEQAEgDAGgHIA7AFQgOAYgSAKQgTAKgkAAQgeAAgSgIgAgWgiQgFAHgBAOIA5AAQgBgRgIgIQgHgHgNAAQgNAAgJALg");
	this.shape_94.setTransform(246.1,105.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#66FF00").s().p("Ag8A+QgcgXgBgnQAAgiAZgXQAXgXApAAQAuAAAYAbQAUAWAAAfQAAAjgZAXQgXAXgqAAQglAAgXgTgAgUgdQgJAKABATQgBAVAJAKQAJAKALAAQANAAAIgKQAJgKgBgVQAAgUgIgJQgIgKgNAAQgLAAgJAKg");
	this.shape_95.setTransform(206.1,105.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#66FF00").s().p("AgPBnQgKgFgFgMQgFgMAAgaIAAg2IgWAAIAAgrIAWAAIAAgdIA7geIAAA7IAgAAIAAArIggAAIAAA2QAAALACADQACAFAHAAQAHAAAMgEIAFApQgWAFgUAAQgVAAgLgGg");
	this.shape_96.setTransform(121.6,102.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#66FF00").s().p("AgwBJQgSgJgLgTQgMgTAAgaQAAgjAXgXQAYgWApAAQAgAAATAKQAUAKAKATQAKATAAAeIAAAHIh3AAQACAOAGAHQAJAKANAAQAJAAAIgEQAFgDAFgHIA7AFQgOAYgSAKQgUAKgjAAQgeAAgSgIgAgWgiQgEAHgCAOIA6AAQgCgRgHgIQgIgHgMAAQgOAAgJALg");
	this.shape_97.setTransform(105,105.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#66FF00").s().p("AgPBnQgKgFgFgMQgGgMABgaIAAg2IgXAAIAAgrIAXAAIAAgdIA6geIAAA7IAhAAIAAArIghAAIAAA2QABALACADQACAFAIAAQAGAAAMgEIAEApQgVAFgUAAQgVAAgLgGg");
	this.shape_98.setTransform(68.3,102.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#66FF00").s().p("Ag8A+QgcgXAAgnQAAgiAXgXQAZgXAoAAQAuAAAYAbQATAWABAfQAAAjgYAXQgYAXgqAAQglAAgXgTgAgUgdQgJAKAAATQAAAVAJAKQAIAKAMAAQANAAAJgKQAIgKAAgVQAAgUgJgJQgIgKgMAAQgNAAgIAKg");
	this.shape_99.setTransform(31.6,105.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#66FF00").s().p("AgPBnQgKgFgFgMQgFgMgBgaIAAg2IgVAAIAAgrIAVAAIAAgdIA8geIAAA7IAgAAIAAArIggAAIAAA2QAAALABADQAEAFAGAAQAHAAAMgEIAFApQgXAFgTAAQgVAAgLgGg");
	this.shape_100.setTransform(903.8,163.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#66FF00").s().p("AgwBJQgRgJgMgTQgMgTAAgaQAAgjAYgXQAXgWApAAQAgAAAUAKQATAKAKATQAKATAAAeIAAAHIh2AAQABAOAHAHQAIAKANAAQAJAAAHgEQAFgDAGgHIA7AFQgOAYgTAKQgSAKgkAAQgeAAgSgIgAgVgiQgGAHgBAOIA5AAQgBgRgIgIQgHgHgNAAQgNAAgIALg");
	this.shape_101.setTransform(827.2,166.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#66FF00").s().p("AhaBrIAAjVICxAAIAAAtIhuAAIAAAiIBmAAIAAArIhmAAIAAArIBxAAIAAAwg");
	this.shape_102.setTransform(787.2,163.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#66FF00").s().p("AgwBJQgRgJgMgTQgMgTAAgaQAAgjAYgXQAXgWApAAQAgAAAUAKQATAKAKATQAKATAAAeIAAAHIh3AAQACAOAHAHQAIAKANAAQAJAAAHgEQAFgDAGgHIA7AFQgNAYgUAKQgSAKgkAAQgeAAgSgIgAgVgiQgGAHgBAOIA6AAQgCgRgHgIQgJgHgMAAQgNAAgIALg");
	this.shape_103.setTransform(962.4,122.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#66FF00").s().p("Ag8A+QgdgXAAgnQAAgiAZgXQAYgXAoAAQAvAAAXAbQATAWAAAfQAAAjgXAXQgYAXgqAAQgkAAgYgTgAgUgdQgIAKgBATQABAVAIAKQAJAKALAAQANAAAJgKQAHgKABgVQAAgUgJgJQgIgKgNAAQgMAAgIAKg");
	this.shape_104.setTransform(855.3,122.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#66FF00").s().p("AgwBJQgRgJgMgTQgMgTAAgaQAAgjAYgXQAXgWApAAQAgAAAUAKQATAKAKATQAKATAAAeIAAAHIh2AAQABAOAHAHQAIAKANAAQAJAAAHgEQAFgDAGgHIA7AFQgNAYgUAKQgSAKgkAAQgeAAgSgIgAgVgiQgFAHgCAOIA5AAQgBgRgIgIQgHgHgNAAQgNAAgIALg");
	this.shape_105.setTransform(807.5,122.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#66FF00").s().p("AhVBtIAAjVIA4AAIAAAWQALgOALgFQALgHAQAAQAfAAARAYQASAXgBAkQAAAlgSAVQgTAUgcAAQgOABgKgFQgLgFgJgJIAABKgAgRg4QgIAKAAATQAAATAIAIQAIAJALAAQAKAAAHgJQAHgHAAgVQAAgSgHgKQgIgJgKAAQgLAAgHAJg");
	this.shape_106.setTransform(787.8,125);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#66FF00").s().p("Ag8A+QgcgXgBgnQAAgiAZgXQAYgXAoAAQAvAAAXAbQAUAWgBAfQAAAjgYAXQgXAXgqAAQgkAAgYgTgAgUgdQgIAKAAATQAAAVAIAKQAJAKALAAQANAAAJgKQAHgKAAgVQABgUgJgJQgIgKgNAAQgMAAgIAKg");
	this.shape_107.setTransform(767.4,122.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#66FF00").s().p("AgwBJQgSgJgLgTQgMgTAAgaQAAgjAXgXQAYgWApAAQAhAAASAKQAUAKAKATQAKATAAAeIAAAHIh3AAQADAOAFAHQAJAKANAAQAJAAAHgEQAGgDAFgHIA7AFQgNAYgUAKQgSAKgkAAQgeAAgSgIgAgVgiQgFAHgCAOIA6AAQgCgRgHgIQgJgHgMAAQgNAAgIALg");
	this.shape_108.setTransform(268.1,105.2);

	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.parent = this;
	this.next_btn.setTransform(793,689.9);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_109.setTransform(503.7,334.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00FF00").s().p("Egj3Ar7IAAgKIAAraIX7AAIImAAIFJAAIIcAAIYsAAIA8AAIAALkgEAi7gGjIFzrkIHgLkgEgwNgHVIForuMAmJgY3MAtKAZzMhTTgA8IGuLug");
	this.shape_110.setTransform(503.7,334.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#66FFCC").s().p("EAj3AZoIAArjIg8AAIAAicIAAibIAAhuIAAjhIEFAAIkFAAIAAmKIAAi+IAAigIAAi+IAAiCIAAj6IAAihIAAi4IAAi6INTAAMAAAAyegEgwNAZfMAAAgzHIMWAAIAAEEIAAEFIAADcIAACWIAADIIAACWIAAB4IAACqIAADHIAADSIAACqIAACMIAACRIAACSIAALag");
	this.shape_111.setTransform(503.7,451.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23,p:{x:757.9,y:103.3}},{t:this.shape_22,p:{y:106.2,x:780.4}},{t:this.shape_21},{t:this.shape_20,p:{y:106.2,x:820.5}},{t:this.shape_19,p:{x:849.7,y:109.4}},{t:this.shape_18,p:{y:106.2,x:868.3}},{t:this.shape_17},{t:this.shape_16,p:{y:103.3,x:918.3}},{t:this.shape_15,p:{x:938.3,y:106.2}},{t:this.shape_14,p:{y:106.2,x:957}},{t:this.shape_13,p:{y:106.2,x:975.4}},{t:this.shape_12,p:{x:1005.3,y:106.2}},{t:this.shape_11,p:{x:1025.3,y:106.1}},{t:this.shape_10,p:{y:147.6,x:800.2}},{t:this.shape_9,p:{y:150.5,x:820.6}},{t:this.shape_8,p:{y:150.5,x:840.2}},{t:this.shape_7,p:{x:855.1,y:147.6}},{t:this.shape_6,p:{x:865.1,y:147.6}},{t:this.shape_5,p:{y:150.5,x:880.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:963.4,y:150.5}},{t:this.shape,p:{x:982.7,y:153.7}}]},11).to({state:[{t:this.shape_23,p:{x:757.9,y:103.3}},{t:this.shape_22,p:{y:106.2,x:780.4}},{t:this.shape_21},{t:this.shape_20,p:{y:106.2,x:820.5}},{t:this.shape_42,p:{x:849.7,y:109.4}},{t:this.shape_18,p:{y:106.2,x:868.3}},{t:this.shape_17},{t:this.shape_16,p:{y:103.3,x:918.3}},{t:this.shape_41,p:{x:938.3,y:106.2}},{t:this.shape_14,p:{y:106.2,x:957}},{t:this.shape_13,p:{y:106.2,x:975.4}},{t:this.shape_15,p:{x:1005.3,y:106.2}},{t:this.shape_40},{t:this.shape_10,p:{y:147.6,x:800.2}},{t:this.shape_9,p:{y:150.5,x:820.6}},{t:this.shape_8,p:{y:150.5,x:840.2}},{t:this.shape_39,p:{y:147.6,x:855.1}},{t:this.shape_7,p:{x:865.1,y:147.6}},{t:this.shape_5,p:{y:150.5,x:880.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_12,p:{x:963.4,y:150.5}},{t:this.shape_19,p:{x:982.7,y:153.7}},{t:this.shape_38,p:{x:23.5,y:86.3}},{t:this.shape_37,p:{y:89.2,x:44.6}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_6,p:{x:102.9,y:86.3}},{t:this.shape_34,p:{y:89.2,x:118}},{t:this.shape_33},{t:this.shape_1,p:{x:161.2,y:89.2}},{t:this.shape_32},{t:this.shape,p:{x:200.5,y:92.4}},{t:this.shape_31,p:{y:89.2,x:219.1}},{t:this.shape_11,p:{x:239.1,y:89.1}},{t:this.shape_30,p:{y:89.2}},{t:this.shape_29},{t:this.shape_28,p:{x:115.7,y:133.7}},{t:this.shape_27,p:{x:130.7,y:130.6}},{t:this.shape_26,p:{x:145.7,y:133.4}},{t:this.shape_25,p:{x:170.7,y:130.6}},{t:this.shape_24}]},1).to({state:[{t:this.shape_55,p:{y:103.3,x:757.9}},{t:this.shape_22,p:{y:106.2,x:780.4}},{t:this.shape_21},{t:this.shape_20,p:{y:106.2,x:820.5}},{t:this.shape_54,p:{y:109.4,x:849.7}},{t:this.shape_18,p:{y:106.2,x:868.3}},{t:this.shape_17},{t:this.shape_16,p:{y:103.3,x:918.3}},{t:this.shape_53,p:{y:106.2,x:938.3}},{t:this.shape_14,p:{y:106.2,x:957}},{t:this.shape_13,p:{y:106.2,x:975.4}},{t:this.shape_41,p:{x:1005.3,y:106.2}},{t:this.shape_40},{t:this.shape_10,p:{y:147.6,x:800.2}},{t:this.shape_9,p:{y:150.5,x:820.6}},{t:this.shape_8,p:{y:150.5,x:840.2}},{t:this.shape_39,p:{y:147.6,x:855.1}},{t:this.shape_7,p:{x:865.1,y:147.6}},{t:this.shape_5,p:{y:150.5,x:880.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_15,p:{x:963.4,y:150.5}},{t:this.shape_42,p:{x:982.7,y:153.7}},{t:this.shape_52,p:{y:86.3,x:23.5}},{t:this.shape_37,p:{y:89.2,x:44.6}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_6,p:{x:102.9,y:86.3}},{t:this.shape_34,p:{y:89.2,x:118}},{t:this.shape_33},{t:this.shape_12,p:{x:161.2,y:89.2}},{t:this.shape_32},{t:this.shape_19,p:{x:200.5,y:92.4}},{t:this.shape_31,p:{y:89.2,x:219.1}},{t:this.shape_11,p:{x:239.1,y:89.1}},{t:this.shape_30,p:{y:89.2}},{t:this.shape_29},{t:this.shape_28,p:{x:115.7,y:133.7}},{t:this.shape_51,p:{y:130.6,x:130.7}},{t:this.shape_26,p:{x:145.7,y:133.4}},{t:this.shape_27,p:{x:170.7,y:130.6}},{t:this.shape_24},{t:this.shape_50,p:{x:851.3,y:494.4}},{t:this.shape_1,p:{x:873.8,y:497.3}},{t:this.shape_49},{t:this.shape_48,p:{x:914.5}},{t:this.shape,p:{x:932.8,y:500.5}},{t:this.shape_47,p:{x:816.9}},{t:this.shape_25,p:{x:831.5,y:538.7}},{t:this.shape_46,p:{x:849.3}},{t:this.shape_23,p:{x:872.3,y:538.7}},{t:this.shape_45,p:{x:896.5,y:538.7}},{t:this.shape_38,p:{x:920.2,y:538.7}},{t:this.shape_44,p:{x:941.8,y:538.7}},{t:this.shape_43,p:{x:962.6,y:538.7}}]},1).to({state:[{t:this.shape_55,p:{y:103.3,x:757.9}},{t:this.shape_22,p:{y:106.2,x:780.4}},{t:this.shape_21},{t:this.shape_20,p:{y:106.2,x:820.5}},{t:this.shape_54,p:{y:109.4,x:849.7}},{t:this.shape_18,p:{y:106.2,x:868.3}},{t:this.shape_17},{t:this.shape_16,p:{y:103.3,x:918.3}},{t:this.shape_53,p:{y:106.2,x:938.3}},{t:this.shape_14,p:{y:106.2,x:957}},{t:this.shape_13,p:{y:106.2,x:975.4}},{t:this.shape_41,p:{x:1005.3,y:106.2}},{t:this.shape_40},{t:this.shape_10,p:{y:147.6,x:800.2}},{t:this.shape_9,p:{y:150.5,x:820.6}},{t:this.shape_8,p:{y:150.5,x:840.2}},{t:this.shape_39,p:{y:147.6,x:855.1}},{t:this.shape_7,p:{x:865.1,y:147.6}},{t:this.shape_5,p:{y:150.5,x:880.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_15,p:{x:963.4,y:150.5}},{t:this.shape_42,p:{x:982.7,y:153.7}},{t:this.shape_52,p:{y:86.3,x:23.5}},{t:this.shape_37,p:{y:89.2,x:44.6}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_6,p:{x:102.9,y:86.3}},{t:this.shape_34,p:{y:89.2,x:118}},{t:this.shape_33},{t:this.shape_12,p:{x:161.2,y:89.2}},{t:this.shape_32},{t:this.shape_19,p:{x:200.5,y:92.4}},{t:this.shape_31,p:{y:89.2,x:219.1}},{t:this.shape_11,p:{x:239.1,y:89.1}},{t:this.shape_30,p:{y:89.2}},{t:this.shape_29},{t:this.shape_28,p:{x:115.7,y:133.7}},{t:this.shape_51,p:{y:130.6,x:130.7}},{t:this.shape_26,p:{x:145.7,y:133.4}},{t:this.shape_27,p:{x:170.7,y:130.6}},{t:this.shape_24},{t:this.shape_50,p:{x:877.3,y:478.4}},{t:this.shape_1,p:{x:899.8,y:481.3}},{t:this.shape_59,p:{x:920.5,y:484.1}},{t:this.shape_58},{t:this.shape,p:{x:958.9,y:484.5}},{t:this.shape_57},{t:this.shape_25,p:{x:857.5,y:522.7}},{t:this.shape_56,p:{y:522.7,x:875.4}},{t:this.shape_23,p:{x:898.3,y:522.7}},{t:this.shape_45,p:{x:922.5,y:522.7}},{t:this.shape_38,p:{x:946.3,y:522.7}},{t:this.shape_44,p:{x:967.9,y:522.7}},{t:this.shape_43,p:{x:988.7,y:522.7}}]},1).to({state:[{t:this.shape_55,p:{y:164.3,x:757.9}},{t:this.shape_22,p:{y:167.3,x:780.4}},{t:this.shape_75},{t:this.shape_20,p:{y:167.3,x:820.5}},{t:this.shape_54,p:{y:170.4,x:849.7}},{t:this.shape_18,p:{y:167.3,x:868.3}},{t:this.shape_28,p:{x:888.2,y:167.5}},{t:this.shape_16,p:{y:164.3,x:918.3}},{t:this.shape_53,p:{y:167.3,x:938.3}},{t:this.shape_14,p:{y:167.3,x:957}},{t:this.shape_13,p:{y:167.3,x:975.4}},{t:this.shape_41,p:{x:1005.3,y:167.3}},{t:this.shape_26,p:{x:1025.3,y:167.1}},{t:this.shape_10,p:{y:208.6,x:800.2}},{t:this.shape_9,p:{y:211.6,x:820.6}},{t:this.shape_8,p:{y:211.6,x:840.2}},{t:this.shape_39,p:{y:208.6,x:855.1}},{t:this.shape_7,p:{x:865.1,y:208.6}},{t:this.shape_5,p:{y:211.6,x:880.2}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_15,p:{x:963.4,y:211.6}},{t:this.shape_42,p:{x:982.7,y:214.7}},{t:this.shape_52,p:{y:147.3,x:23.5}},{t:this.shape_37,p:{y:150.3,x:44.6}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_6,p:{x:102.9,y:147.3}},{t:this.shape_34,p:{y:150.3,x:118}},{t:this.shape_69},{t:this.shape_12,p:{x:161.2,y:150.3}},{t:this.shape_68},{t:this.shape_19,p:{x:200.5,y:153.4}},{t:this.shape_31,p:{y:150.3,x:219.1}},{t:this.shape_67},{t:this.shape_30,p:{y:150.3}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_51,p:{y:191.6,x:130.7}},{t:this.shape_64},{t:this.shape_27,p:{x:170.7,y:191.6}},{t:this.shape_63},{t:this.shape_50,p:{x:877.3,y:539.4}},{t:this.shape_1,p:{x:899.8,y:542.4}},{t:this.shape_62},{t:this.shape_61},{t:this.shape,p:{x:958.9,y:545.5}},{t:this.shape_60},{t:this.shape_25,p:{x:857.5,y:583.7}},{t:this.shape_56,p:{y:583.7,x:875.4}},{t:this.shape_23,p:{x:898.3,y:583.7}},{t:this.shape_45,p:{x:922.5,y:583.7}},{t:this.shape_38,p:{x:946.3,y:583.7}},{t:this.shape_44,p:{x:967.9,y:583.7}},{t:this.shape_43,p:{x:988.7,y:583.7}}]},1).to({state:[{t:this.shape_55,p:{y:119.3,x:757.9}},{t:this.shape_22,p:{y:122.2,x:780.4}},{t:this.shape_59,p:{x:800.8,y:125}},{t:this.shape_20,p:{y:122.2,x:820.5}},{t:this.shape_54,p:{y:125.4,x:849.7}},{t:this.shape_18,p:{y:122.2,x:868.3}},{t:this.shape_91,p:{x:888.2}},{t:this.shape_16,p:{y:119.3,x:918.3}},{t:this.shape_53,p:{y:122.2,x:938.3}},{t:this.shape_14,p:{y:122.2,x:957}},{t:this.shape_13,p:{y:122.2,x:975.4}},{t:this.shape_41,p:{x:1005.3,y:122.2}},{t:this.shape_90,p:{x:1025.3}},{t:this.shape_10,p:{y:163.6,x:800.2}},{t:this.shape_9,p:{y:166.5,x:820.6}},{t:this.shape_8,p:{y:166.5,x:840.2}},{t:this.shape_39,p:{y:163.6,x:855.1}},{t:this.shape_7,p:{x:865.1,y:163.6}},{t:this.shape_5,p:{y:166.5,x:880.2}},{t:this.shape_11,p:{x:900.1,y:166.4}},{t:this.shape_89,p:{x:916.8}},{t:this.shape_88,p:{x:943}},{t:this.shape_15,p:{x:963.4,y:166.5}},{t:this.shape_42,p:{x:982.7,y:169.7}},{t:this.shape_52,p:{y:102.3,x:23.5}},{t:this.shape_37,p:{y:105.2,x:44.6}},{t:this.shape_87,p:{x:64.6}},{t:this.shape_86,p:{x:81.3}},{t:this.shape_6,p:{x:102.9,y:102.3}},{t:this.shape_34,p:{y:105.2,x:118}},{t:this.shape_85,p:{x:134.6}},{t:this.shape_12,p:{x:161.2,y:105.2}},{t:this.shape_84,p:{x:181.2}},{t:this.shape_19,p:{x:200.5,y:108.4}},{t:this.shape_31,p:{y:105.2,x:219.1}},{t:this.shape_83,p:{x:239.1}},{t:this.shape_30,p:{y:105.2}},{t:this.shape_82,p:{x:99.4}},{t:this.shape_81,p:{x:115.7}},{t:this.shape_51,p:{y:146.6,x:130.7}},{t:this.shape_80,p:{x:145.7}},{t:this.shape_27,p:{x:170.7,y:146.6}},{t:this.shape_79,p:{x:182.4}},{t:this.shape_50,p:{x:877.3,y:494.4}},{t:this.shape_1,p:{x:899.8,y:497.3}},{t:this.shape_78,p:{x:920.5}},{t:this.shape_77,p:{x:940.5}},{t:this.shape,p:{x:958.9,y:500.5}},{t:this.shape_76,p:{x:842.9}},{t:this.shape_25,p:{x:857.5,y:538.7}},{t:this.shape_56,p:{y:538.7,x:875.4}},{t:this.shape_23,p:{x:898.3,y:538.7}},{t:this.shape_45,p:{x:922.5,y:538.7}},{t:this.shape_38,p:{x:946.3,y:538.7}},{t:this.shape_44,p:{x:967.9,y:538.7}},{t:this.shape_43,p:{x:988.7,y:538.7}}]},1).to({state:[{t:this.shape_55,p:{y:119.3,x:744.9}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_54,p:{y:125.4,x:836.7}},{t:this.shape_104},{t:this.shape_91,p:{x:875.2}},{t:this.shape_16,p:{y:119.3,x:905.3}},{t:this.shape_53,p:{y:122.2,x:925.3}},{t:this.shape_14,p:{y:122.2,x:944}},{t:this.shape_103},{t:this.shape_41,p:{x:992.3,y:122.2}},{t:this.shape_90,p:{x:1012.3}},{t:this.shape_102},{t:this.shape_9,p:{y:166.5,x:807.6}},{t:this.shape_101},{t:this.shape_39,p:{y:163.6,x:842.1}},{t:this.shape_7,p:{x:852.1,y:163.6}},{t:this.shape_8,p:{y:166.5,x:867.2}},{t:this.shape_11,p:{x:887.1,y:166.4}},{t:this.shape_100},{t:this.shape_88,p:{x:930}},{t:this.shape_15,p:{x:950.4,y:166.5}},{t:this.shape_42,p:{x:969.7,y:169.7}},{t:this.shape_52,p:{y:102.3,x:10.5}},{t:this.shape_99},{t:this.shape_87,p:{x:51.6}},{t:this.shape_98},{t:this.shape_6,p:{x:89.9,y:102.3}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_12,p:{x:148.2,y:105.2}},{t:this.shape_84,p:{x:168.2}},{t:this.shape_19,p:{x:187.5,y:108.4}},{t:this.shape_95},{t:this.shape_83,p:{x:226.1}},{t:this.shape_94},{t:this.shape_82,p:{x:86.4}},{t:this.shape_81,p:{x:102.7}},{t:this.shape_51,p:{y:146.6,x:117.7}},{t:this.shape_80,p:{x:132.7}},{t:this.shape_27,p:{x:157.7,y:146.6}},{t:this.shape_93},{t:this.shape_50,p:{x:864.3,y:494.4}},{t:this.shape_1,p:{x:886.8,y:497.3}},{t:this.shape_92},{t:this.shape_48,p:{x:927.5}},{t:this.shape,p:{x:945.9,y:500.5}},{t:this.shape_47,p:{x:829.9}},{t:this.shape_25,p:{x:844.5,y:538.7}},{t:this.shape_46,p:{x:862.4}},{t:this.shape_23,p:{x:885.3,y:538.7}},{t:this.shape_45,p:{x:909.5,y:538.7}},{t:this.shape_38,p:{x:933.3,y:538.7}},{t:this.shape_44,p:{x:954.9,y:538.7}},{t:this.shape_43,p:{x:975.7,y:538.7}}]},1).to({state:[{t:this.shape_55,p:{y:119.3,x:766.9}},{t:this.shape_22,p:{y:122.2,x:789.4}},{t:this.shape_59,p:{x:809.8,y:125}},{t:this.shape_20,p:{y:122.2,x:829.5}},{t:this.shape_54,p:{y:125.4,x:858.7}},{t:this.shape_18,p:{y:122.2,x:877.3}},{t:this.shape_91,p:{x:897.2}},{t:this.shape_16,p:{y:119.3,x:927.3}},{t:this.shape_53,p:{y:122.2,x:947.3}},{t:this.shape_14,p:{y:122.2,x:966}},{t:this.shape_13,p:{y:122.2,x:984.4}},{t:this.shape_41,p:{x:1014.3,y:122.2}},{t:this.shape_90,p:{x:1034.3}},{t:this.shape_10,p:{y:163.6,x:809.2}},{t:this.shape_9,p:{y:166.5,x:829.6}},{t:this.shape_8,p:{y:166.5,x:849.2}},{t:this.shape_39,p:{y:163.6,x:864.1}},{t:this.shape_7,p:{x:874.1,y:163.6}},{t:this.shape_5,p:{y:166.5,x:889.2}},{t:this.shape_11,p:{x:909.1,y:166.4}},{t:this.shape_89,p:{x:925.8}},{t:this.shape_88,p:{x:952}},{t:this.shape_15,p:{x:972.4,y:166.5}},{t:this.shape_42,p:{x:991.7,y:169.7}},{t:this.shape_52,p:{y:102.3,x:32.5}},{t:this.shape_37,p:{y:105.2,x:53.6}},{t:this.shape_87,p:{x:73.6}},{t:this.shape_86,p:{x:90.3}},{t:this.shape_6,p:{x:111.9,y:102.3}},{t:this.shape_34,p:{y:105.2,x:127}},{t:this.shape_85,p:{x:143.6}},{t:this.shape_12,p:{x:170.2,y:105.2}},{t:this.shape_84,p:{x:190.2}},{t:this.shape_19,p:{x:209.5,y:108.4}},{t:this.shape_31,p:{y:105.2,x:228.1}},{t:this.shape_83,p:{x:248.1}},{t:this.shape_108},{t:this.shape_82,p:{x:108.4}},{t:this.shape_81,p:{x:124.7}},{t:this.shape_51,p:{y:146.6,x:139.7}},{t:this.shape_80,p:{x:154.7}},{t:this.shape_27,p:{x:179.7,y:146.6}},{t:this.shape_79,p:{x:191.4}},{t:this.shape_50,p:{x:886.3,y:494.4}},{t:this.shape_1,p:{x:908.8,y:497.3}},{t:this.shape_78,p:{x:929.5}},{t:this.shape_77,p:{x:949.5}},{t:this.shape,p:{x:967.9,y:500.5}},{t:this.shape_76,p:{x:851.9}},{t:this.shape_25,p:{x:866.5,y:538.7}},{t:this.shape_56,p:{y:538.7,x:884.4}},{t:this.shape_23,p:{x:907.3,y:538.7}},{t:this.shape_45,p:{x:931.5,y:538.7}},{t:this.shape_38,p:{x:955.3,y:538.7}},{t:this.shape_44,p:{x:976.9,y:538.7}},{t:this.shape_43,p:{x:997.7,y:538.7}}]},1).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.next_btn}]},1).to({state:[]},1).wait(10));

	//  Jumper
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#66FF00").s().p("AhOBqIgEgqQANAEAPAAQALAAAGgEQAHgFAEgNIhBiaIA/AAIAfBnIAehnIA7AAIg+ClQgLAcgLAKQgOAOggAAQgNAAgbgDg");
	this.shape_112.setTransform(982.7,153.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#66FF00").s().p("AhKBEQgPgNAAgSQAAgSALgMQAKgKAcgGIArgJIAVgHQAAgLgFgEQgEgFgMAAQgNAAgIAFQgFADgEALIg5gGQADgPAHgJQAGgJALgGQAIgEAOgDQAPgCARAAQAZAAARADQAQADALAJQAHAHAFAMQAEAMAAALIAABEQAAALACAGQABAGAFAKIg4AAIgFgJIgCgKQgMALgLAFQgPAGgVAAQgcAAgOgNgAgBAMQgSAFgFAEQgFAFAAAGQAAAHAFAFQAFAEAKAAQAJAAAIgFQAJgFADgGQAEgHAAgMIAAgJIgZAIg");
	this.shape_113.setTransform(963.4,150.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#66FF00").s().p("AhEBVQgRgZAAgiQAAglATgVQASgVAdAAQAOABAKAEQAMAFAIAJIAAhKIA9AAIAADWIg4AAIAAgYQgMAPgKAGQgMAGgPAAQggAAgRgYgAgSAAQgHAIAAAUQAAAUAHAIQAHAJALAAQALAAAHgJQAIgIAAgVQAAgSgIgJQgIgIgLAAQgKAAgHAIg");
	this.shape_114.setTransform(943,147.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#66FF00").s().p("AgOBoQgLgHgFgLQgGgMABgZIAAg3IgXAAIAAgrIAXAAIAAgdIA6geIAAA7IAiAAIAAArIgiAAIAAA3QAAAJACAEQAEAFAHAAQAGAAAMgEIAEApQgWAFgTAAQgVAAgKgFg");
	this.shape_115.setTransform(916.8,147.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#66FF00").s().p("AAWBQIAAhVQAAgOgFgHQgFgGgKAAQgKAAgHAIQgHAJAAAUIAABLIg7AAIAAibIA3AAIAAAZQANgPAMgHQAMgGATgBQAYAAAOAPQAOAPAAAfIAABig");
	this.shape_116.setTransform(900.1,150.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#66FF00").s().p("AgwBJQgRgJgMgTQgMgTAAgaQAAgjAYgXQAXgWApAAQAhAAATAKQATAKAKATQAKATAAAeIAAAHIh2AAQABAOAHAHQAIAKANAAQAJAAAIgEQAEgDAGgHIA7AFQgOAYgTAKQgSAKgkAAQgeAAgSgIgAgWgiQgFAHgBAOIA5AAQgBgRgIgIQgHgHgMAAQgOAAgJALg");
	this.shape_117.setTransform(880.2,150.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#66FF00").s().p("AgdBrIAAjVIA7AAIAADVg");
	this.shape_118.setTransform(865.1,147.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#66FF00").s().p("AgdBrIAAjVIA7AAIAADVg");
	this.shape_119.setTransform(855.1,147.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#66FF00").s().p("AgwBJQgSgJgLgTQgMgTAAgaQAAgjAXgXQAYgWApAAQAhAAASAKQAUAKAKATQAKATAAAeIAAAHIh3AAQADAOAFAHQAJAKANAAQAJAAAHgEQAGgDAFgHIA7AFQgNAYgTAKQgUAKgjAAQgeAAgSgIgAgWgiQgEAHgCAOIA6AAQgCgRgHgIQgJgHgLAAQgOAAgJALg");
	this.shape_120.setTransform(840.2,150.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#66FF00").s().p("AAdBOIgdgyIghAyIhAAAIA4hRIg2hKIBHAAIAYAsIAdgsIBBAAIg1BKIA5BRg");
	this.shape_121.setTransform(820.6,150.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#66FF00").s().p("AhZBrIAAjVICwAAIAAAtIhuAAIAAAiIBmAAIAAArIhmAAIAAArIByAAIAAAwg");
	this.shape_122.setTransform(800.2,147.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#66FF00").s().p("AAWBQIAAhVQAAgPgFgFQgFgHgKAAQgKAAgHAIQgHAIAAAVIAABLIg7AAIAAibIA3AAIAAAZQANgPAMgHQAMgGATgBQAYAAAOAPQAOAPAAAfIAABig");
	this.shape_123.setTransform(1025.3,106.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#66FF00").s().p("AhKBEQgPgNAAgSQAAgSALgMQAKgKAcgGIArgJIAVgHQAAgLgFgEQgEgFgMAAQgNAAgIAFQgFADgEALIg5gGQADgPAHgJQAGgJALgGQAIgEAOgDQAPgCARAAQAZAAARADQAQADALAJQAHAHAFAMQAEAMAAALIAABEQAAALACAGQABAGAFAKIg4AAIgFgJIgCgKQgMALgLAFQgPAGgVAAQgcAAgOgNgAgBAMQgSAFgFAEQgFAFAAAGQAAAHAFAFQAFAEAKAAQAJAAAIgFQAJgFADgGQAEgHAAgMIAAgJIgZAIg");
	this.shape_124.setTransform(1005.3,106.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#66FF00").s().p("AgwBJQgSgJgLgTQgMgTAAgaQAAgjAXgXQAYgWApAAQAgAAATAKQAUAKAKATQAKATAAAeIAAAHIh3AAQADAOAFAHQAJAKANAAQAJAAAIgEQAFgDAFgHIA7AFQgOAYgSAKQgUAKgjAAQgeAAgSgIgAgWgiQgEAHgCAOIA5AAQgBgRgIgIQgIgHgLAAQgOAAgJALg");
	this.shape_125.setTransform(975.4,106.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#66FF00").s().p("AgaBOIhBibIA+AAIAdBiIAghiIA8AAIhCCbg");
	this.shape_126.setTransform(957,106.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#66FF00").s().p("AhKBEQgPgNAAgSQAAgSALgMQAKgKAcgGIArgJIAVgHQAAgLgFgEQgEgFgMAAQgNAAgIAFQgFADgEALIg5gGQADgPAHgJQAGgJALgGQAIgEAOgDQAPgCARAAQAZAAARADQAQADALAJQAHAHAFAMQAEAMAAALIAABEQAAALACAGQABAGAFAKIg4AAIgFgJIgCgKQgMALgLAFQgPAGgVAAQgcAAgOgNgAgBAMQgSAFgFAEQgFAFAAAGQAAAHAFAFQAFAEAKAAQAJAAAIgFQAJgFADgGQAEgHAAgMIAAgJIgZAIg");
	this.shape_127.setTransform(938.3,106.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#66FF00").s().p("AAWBrIAAhVQAAgPgFgGQgFgFgKAAQgKAAgHAHQgHAIAAAWIAABKIg7AAIAAjVIA7AAIAABPQANgNALgFQAMgGAQAAQAYAAAOAPQAOAPAAAdIAABjg");
	this.shape_128.setTransform(918.3,103.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#66FF00").s().p("AhDBBQgOgPAAgeIAAhiIA8AAIAABUQAAAPAFAGQAFAGAKAAQAKAAAHgJQAHgHAAgVIAAhKIA7AAIAACaIg3AAIAAgZQgNAQgNAGQgLAHgTAAQgYAAgOgPg");
	this.shape_129.setTransform(888.2,106.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#66FF00").s().p("Ag8A+QgdgXABgnQAAgiAXgXQAZgXAoAAQAuAAAYAbQATAWABAfQAAAjgZAXQgXAXgqAAQglAAgXgTgAgUgdQgJAKAAATQAAAVAJAKQAJAKALAAQANAAAIgKQAJgKAAgVQgBgUgIgJQgIgKgMAAQgMAAgJAKg");
	this.shape_130.setTransform(868.3,106.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#66FF00").s().p("AhOBqIgEgqQANAEAPAAQALAAAGgEQAHgFAEgNIhBiaIA/AAIAfBnIAehnIA7AAIg+ClQgLAcgLAKQgOAOggAAQgNAAgbgDg");
	this.shape_131.setTransform(849.7,109.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#66FF00").s().p("AgwBJQgSgJgLgTQgMgTAAgaQAAgjAXgXQAYgWApAAQAgAAATAKQAUAKAKATQAKATAAAeIAAAHIh3AAQACAOAGAHQAJAKANAAQAJAAAIgEQAFgDAFgHIA7AFQgOAYgSAKQgUAKgjAAQgeAAgSgIgAgWgiQgEAHgCAOIA6AAQgCgRgHgIQgJgHgLAAQgOAAgJALg");
	this.shape_132.setTransform(820.5,106.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#66FF00").s().p("AhUBtIAAjVIA3AAIAAAWQAMgOAJgFQAMgHAQAAQAfAAASAYQAQAXABAkQAAAlgTAVQgSAUgdABQgOAAgKgFQgMgFgJgJIAABKgAgSg4QgHAJAAAVQAAASAIAIQAIAJAKAAQALAAAHgIQAHgIAAgVQAAgSgIgKQgGgIgMgBQgKABgIAIg");
	this.shape_133.setTransform(800.8,109);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#66FF00").s().p("Ag8A+QgcgXAAgnQAAgiAXgXQAYgXApAAQAuAAAYAbQATAWABAfQAAAjgYAXQgYAXgqAAQglAAgXgTgAgUgdQgJAKAAATQAAAVAJAKQAIAKAMAAQANAAAIgKQAJgKAAgVQAAgUgJgJQgIgKgMAAQgNAAgIAKg");
	this.shape_134.setTransform(780.4,106.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#66FF00").s().p("AAkBrIAAhXIhIAAIAABXIhCAAIAAjVIBCAAIAABLIBIAAIAAhLIBDAAIAADVg");
	this.shape_135.setTransform(757.9,103.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(1,1,1).p("AfsgtIALCiIDEgHIAAifAfsgtIDPgEIAAi5IAAi5IFzrkIHgLkMAAAAyeIsXAAMhHuAAAIAAgKIsWAAMAAAgzGIForuIGuLuIAAEEIAAEDID1gFIgEDZICRgFIgCCeIAvgBIANDCICvgFIENgIIFFgJIC2gGIEWgIICogEICXgFICXgEIDtgHIDqgGIFhgLIBygDIE1gJIC6gFIAVC1IASCYIAWC5IATCkIAbDhIAaDhIANBpIASCeIB4AAIEJABICFAAICEABICMAAIAAibIAAhuIAAjhIAAmLIAAi+IAAigIAAi+IAAiCIAAj6AZNgjQANBIANBJQABAFABAGIACAKIArDtIAYCJIC6gFICqgFICpgFAZNgjIDPgFIAXCkIDEgHIARD2ICzgDAaVFwIABAAIC/gDIATCHIAaC7IAXCdIAaC8IEIgCAZrCDIAAAAIDIgHIAiDxICzgCIAKCEIANC9IALCeICRgCAWlD/IAPB0IBrgCIB2gBAX4CHIBzgEIAqDtIAZCJIAAAAAX4CDIAAAEIAnDqIAYCMIB3gEIAhC5IAcCcIAiC7IAeCnIAoDhICYAAIDQAAIEFAAAXIIAIBvgDIAfC4IB5gDICzgDICdgDICcgEAW0FzIAUCNIAZC3IAVCZIB6gBIB7gBICugCICRgCAccgoIDQgFAZpB5IACAKEAi7gGjINTAAAXhK3IB1gCIAaCaIAfC7IB+gBICmgBIAYCoIAgDhIAfDhICxAAAYQQLIB/gBIAcCmICAAAICgAAICMAAAX2NQIAaC7IAWClICFAAIAlDhICDAAIAoDhIAUBsICKABIAWCcAZFWRICLAAIAoDhIATBsIAbCcAYmSwIAfDhIgSDhIDFAAICDAAICPAAIAPBtICiABEAi7AgXIAAicAePbeIAcCcAYqbcIDhACICEAAAYqbcIgNCdAYzZyIgJBqEAi7AgXIA8AAIAALkAw8jYIAADvIABDNIAACwIABC2IAACgIAACDIABCvIAAChIABDmIAADdIE8AGIAAjrIAAjrILGAAQEYDNhvKaIIcAAIYsAAA2GjWIACD1IFIgIICygEIETgGICxgEICMgDIADDDIAEDBIAECpIADCoIACCJIAECzICWgBIEDgCIJ0gEIBFAAIAJCgIAMDhIFtAAIC+AAIDZAAA6ojUIEigCIFKgCIHCgCIADDnIADDHIADC6IADCuIADClIACCHIADCxIFAgCA6gAlIEcgGIACDQIABCqIACC6IACCeIABB/IABCuIFCgCIC7gBIEYgCA6ojUIAID5IAIDUIEWgKIFHgLIC0gGIETgKICugGICPgFICZgGIADDFIADCnIADCpID0gFIAJCNIALC0A6TGcIESgDIFGgFIC1gCIACCyIACCiIEXgFIClgDICagDICXgDIACCLID7gDID7gDIFqgEIBWgBIAJC4IFVgDIC9gBIDSgBA6TGcIAHC/IAGCbIEJgFIFDgHIC4gEIACCFIEXgDIE/gEICXgBIADCzA6YD5IAFCjAnGh3IAACAIAADFIAAC+ICTgCICYgCIDmgDIAKCjIAKCrID0gFIAQCPAuMjCIACDVIADDLIABC0IEVgEICrgCIAACsIAACmAI1jhIAeDUIAZC1ICSgGIALDZIAJCZIAJCxIAICTIFJgDIC8gCIDOgDAD/gFIFUgIIChgEIIvgMIBNCpIAkgBIARB0AAthtIAGBsIDMgEIAVC5IFYgMIAeDVIB/gCIEtgDIARCTIAVC0IC6gEIDLgEAihADIDUgEIAMC8IAMDKIDhgDIATCgIAUCsIFmgHIBigCIFBgGIAQCWIAVC4IATCjIC9AAIDVAAAikjdIADDgIADDAIDdgIIDVgHIAYDOIFegFIAWCaIAZCwIAUCSIAaC3IAWCgIA4AAIFfAAIAaDhIAZDhIC/AAICtAAAikjdILZgEIC0gBIALDRIAKCzIEfgKIFTgMIA1BzATXjCIBMClIBagCIAXCqIBkgEAQcCSIABAGIAZDgIC6gDIARCRIDHgGATXCjIAZDSIDEgCAp6jaIHWgDAk6AGICZgDA9xjUIAAABIARD8IAODXIAKCeIC1gCA9zAqIATgBIDAgEA9xjTIgCD9IgCDXIAjgBIC6gHA/9jTIgFEAICPgDA/9jTICMgBIDJAAEgj3AEOIAACWIDugDIgDDFICTgFIA+gBIAKCZIAIB8IALCsIANC4ICbgGID9gKIACDhIE/gHIE8gIA93GfIgCDCIgBCaIBJgCICrgDIAEB9IEGgDIFCgDIC6gCIACCwEggJAGhICSgCEggGAEGIgDCbEgj3gDRID6gCEgj3AEOIDxgIEgj3AAyIAADcEgwNgHVIMWAAEggSAN4IgDCrICYgBIBfgBICigBIEBgCIACCrIFAgMIE9gNA97N2IBSgBICngCIAGCtIAGCzIAIDdID3gGIACDQIABB6IACCaIE7ADIE7ADIAAkOA97N2IgCCsIgBC8IBtgFIAODaICVgDIAHDFIAFB/IDuAAIE8AAIABCdEggPAL+IgDB6ICXgCEggPAL+ICVgDIgBB7Egj3AMCIAAB4IAACqIDigBIgDDBICagGIgCDYIgCC6IgBCEIgCCVIChABIFyAEEgj3AJsIAACWIDogEEgj3ATsIAADSIDbgFICcgDIB9gDIAMC/IAJCCICMAAEggYATkIgEDVIgEC0ICeADICLACICQADIDyAFIE9AGIAAB0IEoAAEgj3AN6IDlgCEgj3ATsIDfgIEgj3AQkIAADIEgglAeHICgACEggiAb0ICfAAICVAAIAKCWEggiAb0IgDCTEgggAZtIgCCHEgj3AZoIAACMIAACRIDSACEgj3AeFIAACSIX7AAIAAiDEgj3Ab0IDVAAEgj3AZoIDXAFEgj3AW+IAACqEgj3ArxIAAraAKPWRICyAAIAMDhIF6AAIAMBoIDAABICXABAKPSwIBuAAAKPSwIAADhIAADhIC+AAAKPZyIAABkIAACgIAAChAKPbWIJEAEAg2SwILFAAEgL8AgXIImAAIFJAAAg2SwQkYEfB4JIEggMAJmIgDCYEgj3AJsIDrgGEgj3AGkIAADIEgqlgTDMAmJgY3MAtKAZzAKPd2IMWADALpjiIXSgIEgqlgTDMBTTAA8AV9gfIDQgE");
	this.shape_136.setTransform(503.7,334.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00FF00").s().p("Egj3Ar7IAAgKIAAraIX7AAIImAAIFJAAIIcAAIYsAAIA8AAIAALkgEAi7gGjIFzrkIHgLkgEgwNgHVIForuMAmJgY3MAtKAZzMhTTgA8IGuLug");
	this.shape_137.setTransform(503.7,334.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#66FFCC").s().p("EAj3AZoIAArjIg8AAIAAicIAAibIAAhuIAAjhIEFAAIkFAAIAAmKIAAi+IAAigIAAi+IAAiCIAAj6IAAihIAAi4IAAi6INTAAMAAAAyegEgwNAZfMAAAgzHIMWAAIAAEEIAAEFIAADcIAACWIAADIIAACWIAAB4IAACqIAADHIAADSIAACqIAACMIAACRIAACSIAALag");
	this.shape_138.setTransform(503.7,451.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},11).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136}]},1).to({state:[]},8).wait(10));

	// Pinata
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#66FF00").s().p("Ah9CqIgHhDQAUAGAaAAQARABAKgJQAKgHAIgUIhpj4IBlAAIAyCmIAwimIBeAAIhjEJQgRAugRAQQgYAWgzAAQgVAAgrgFg");
	this.shape_139.setTransform(617.5,395.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#66FF00").s().p("Ah3BuQgYgVAAgfQABgcARgSQAQgSAtgIIBEgPQAQgEASgIQAAgRgHgIQgIgGgSAAQgWgBgMAIQgJAGgGAQIhbgJQAGgZAJgNQAKgOASgKQANgHAXgEQAXgEAbAAQAqAAAaAFQAaAEARAQQAMAKAIAUQAGATABARIAABuQAAARACAKQACAKAIAQIhaAAIgIgPIgCgQQgUASgSAIQgYAKgiAAQgsAAgXgUgAgCATQgdAHgIAIQgIAIAAAJQAAAMAIAHQAIAHAPAAQAQAAANgIQANgHAHgMQAFgKAAgTIAAgPQgUAIgUAFg");
	this.shape_140.setTransform(586.8,390.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#66FF00").s().p("AhtCIQgbgmAAg4QAAg9AdghQAeggAuAAQAWAAARAHQASAIAPAOIAAh2IBgAAIAAFWIhaAAIAAglQgSAXgPAJQgVALgYAAQg0AAgagngAgdAAQgLANAAAhQgBAeAMAOQAMAPARAAQARAAAMgPQAMgOAAggQAAgegMgOQgNgNgRAAQgRAAgLANg");
	this.shape_141.setTransform(554.1,386.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#66FF00").s().p("AAkCsIAAiJQAAgYgJgJQgIgJgRAAQgPAAgLAMQgMANABAiIAAB4IhgAAIAAlXIBgAAIAAB/QATgUASgJQATgJAbAAQAnAAAXAYQAWAYgBAwIAACeg");
	this.shape_142.setTransform(522.8,386.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#66FF00").s().p("AgYCmQgRgKgIgSQgIgTAAgpIAAhXIgjAAIAAhGIAjAAIAAguIBegwIAABeIA1AAIAABGIg1AAIAABXQAAAQAEAFQAEAIAMAAQAKAAAUgGIAHBCQgkAIgfAAQgigBgRgIg");
	this.shape_143.setTransform(496.1,386.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#66FF00").s().p("AhhB/IAAj4IBZAAIAAApQAMgaAOgKQAOgKAUAAQAVAAAZANIgeBEQgQgHgKAAQgTAAgKAPQgOAWAAA7IAABTg");
	this.shape_144.setTransform(474.5,390.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#66FF00").s().p("AgvCsIAAj4IBfAAIAAD4gAgvhqIAAhBIBfAAIAABBg");
	this.shape_145.setTransform(453.7,386.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#66FF00").s().p("AieCsIAAlXIDGAAQAyAAAaAZQAbAYAAAlQAAAegTAWQgNAPgYAIQAlAJARAVQASAVAAAhQAAAbgNAVQgMAVgWANQgNAIgbADQgkAFgMAAgAgzBiIA1AAQAcAAALgKQALgKAAgQQAAgPgLgJQgLgKgcAAIg1AAgAgzgkIAuAAQAYAAAKgJQAKgIAAgQQAAgPgKgJQgKgIgXAAIgvAAg");
	this.shape_146.setTransform(427.8,386.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#66FF00").s().p("Ah9CpIgHhCQAUAHAaAAQARgBAKgHQAKgIAIgUIhpj4IBlAAIAyCmIAwimIBeAAIhjEJQgRAtgRAQQgYAXgzAAQgVAAgrgGg");
	this.shape_147.setTransform(588.2,326.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#66FF00").s().p("AiICuIAAlWIBZAAIAAAlQASgYAQgHQAUgMAZAAQAyAAAcAnQAbAmAAA4QAAA9geAhQgdAhgugBQgWAAgSgHQgSgHgOgPIAAB2gAgdhZQgMAOABAhQAAAdAMANQAMAOATAAQAQAAALgNQALgNABghQAAgegMgOQgMgPgRAAQgRAAgNAPg");
	this.shape_148.setTransform(558.8,325.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#66FF00").s().p("AiICuIAAlWIBZAAIAAAlQASgYAQgHQAUgMAZAAQAyAAAcAnQAbAmAAA4QAAA9geAhQgeAhgtgBQgWAAgRgHQgSgHgPgPIAAB2gAgchZQgMAOgBAhQAAAdANANQANAOARAAQARAAALgNQALgNAAghQAAgegMgOQgLgPgRAAQgRAAgMAPg");
	this.shape_149.setTransform(526.8,325.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#66FF00").s().p("Ah3BtQgXgUAAgeQgBgdASgSQAQgRAsgJIBFgPQAQgFASgGQAAgSgHgHQgIgIgSAAQgWABgMAHQgJAGgFAQIhcgKQAFgXAKgOQAJgNATgLQANgHAXgEQAXgEAbAAQApAAAaAFQAaAEASAQQAMALAHATQAIATgBARIAABtQAAASACAKQADAKAIAPIhaAAIgHgOIgEgQQgTASgSAIQgYAKghAAQgtAAgXgVgAgCATQgdAHgIAIQgIAIAAAJQAAAMAIAHQAIAHAPAAQAQAAANgIQAOgIAFgKQAGgMAAgRIAAgQQgUAHgUAGg");
	this.shape_150.setTransform(493.8,321.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#66FF00").s().p("AA6CsIAAiLIhzAAIAACLIhqAAIAAlXIBqAAIAAB4IBzAAIAAh4IBqAAIAAFXg");
	this.shape_151.setTransform(457.7,316.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#660000").ss(1,1,1).p("AuSsQIDciWIZJZxIj6Dcg");
	this.shape_152.setTransform(859.8,481.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#0000FF").ss(1,1,1).p("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");
	this.shape_153.setTransform(548.8,422);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FFFF00").ss(1,1,1).p("AgyleQgMAYAGAfQAEAbARAbQAIAOAYAhQAVAdAKATQAEAIAEAKQALAaAFAiQAEAbADA4QACBBgGAsQgDAUgEAQQgDAJgPAlQgIAUgMAdQgOAigGAcQgEATAAAPIAWgN");
	this.shape_154.setTransform(842.5,309.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#FF00FF").ss(1,1,1).p("AAqmDIEjB0QAoAPAPAUQANAUACAiQAMBygYBxQgYBxg6BkAg5k9QgngKgpAkQgYAUgYAlQg4BSgyBOQgwBHgXArQgiBCgIA8QgFAvAJA8QAFAkASBFAhflvIgqBMIiOD8ICTBCQAeAPAQALQAZARALAUQAMAUADAcQABAQgBAkQAAAPgCBIQgCALgFAIQgGAJgHgEAgpllQAEAPAFAPQBODqCaC9QAVAaAGAKQANAVADATQADAXgLAXQgKAVgUARQgbAYg3AVAg3kfQgQAugFAWQgLAmgCAgQgDAlAKAiQAKAkAXAZQAEAEAYAUQARAPAHANQANARAFAbQADASABAfQADBbgHAuQgKBMgjAvQgChRAAgQAAhlTQAuA1AqBOQAaAvArBiQAVAwAKAYQAPAqAGAjQAFAggCApQAAATgFA2QgCAcgIARQgGALgKAHQgLAHgKgC");
	this.shape_155.setTransform(438.8,652.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#FF0000").ss(1,1,1).p("EAQjAhXQAQAEATACQAKABAKAAQAPABARgBQAdgCA6gJQB0gKAsA7QALAOALAaQAOAgAFAJQARAfAfAWQAeAVAjAGQAUAEAqAAQAlADAVANQASAMANAYQAJAQAKAeQAwCWAGCZEARUAhaQADACADACQAaAXATAgQACACABACQAGAZARAXQAKAMAMAMQAaAYA1AfICcBaQAaAPAMAJQAUAQAJARQAMAUABAeQAAANgDAqQgEBZAXBWQAXBYAwBJEASKAiZQANAWAKAaQARArAJA2QAFApAEBOQADBQAFAmQANBvAwBoQAvBmBMBUEAQjAioQAiAsAbBBQARAoAaBPQAUA8AHAZQANAvAFAnQANBcgWBkQgUBbgvBaEAQqAhkQg0BcgWB2QgSBkAeBEQAGANAQAZQAQAZAGAOQAaA5gVBPQgOA2gqBQQgQAfgUASQgaAWgYgJEgUDgr+QALAFAMAEQA6AYAEACQBOAhAWA0QALAagCAzQAAAIAAAHQAAAtAEATQAKAqAkAkQAfAgAuAVQAbAOA8AVQA5AVAcAOQhIgzgmhOEgQdgsEQAFAFADAGQAOASAEAcIBaAnQAlAQASAMQATANALAPQACAZAAAaQgBAmAAAHQAAAZAFATQACAHACAGQAHAPAKAMQAQASAWADEgQdgsEQArADArAAQAaAAAQADQAWAEAPAMQAPAPAKAlQAIAkADAqQAGAIAEAIQALAbgJBMQgCATAAAPQACAnASATQAQAQAdAFQASADAigBQANAAA+gDEgWggurQCwA7CcBIQAXAMAMAHQALAIAJAJEgQDgrLQAAAFAAAFQABATgEArQgJBUAbAuQASAdAjAWQAYAOAsASQBDAcBnApEgTGgseQBTAUBWAGEgTGgseIDDBTEgRBgoqQAEAEAEAEQAYAXAFAHQAQARAJAQQAFAJAJAUQAIATAFAJQATAbAdAQQAeAQAggBEgUDgr+QBfBzBjBhEgXMgtgQgTAtgJAcQgVBBAGA1QABASAGAaQAIAjABAIQACAJAAAJQAFA4gSA1QgGATgIAPQAAAPgCAQQgLBGgmA3QgCAEgDADQANAIAXANQAWAOgCASQgBAPgSAFQgRAFgNgJQgRgLgKghQghAjgrAQQgaAIgTgCQgEAAgEgBEgXMgtgQg7AsgjAZQgrAhgOAVQgRAagCAhQgCAgAPAbQALAUAcAcQAfAeAKAQQALARAHATQABAFABAFQAGAagBAgQgPAegXASQgLAJgNAFEgV5gtWQADABACABQAMAFANAFQBKAbBLAREgWUguJQgeAWgaATEgW6guIQgKAWgIASEgYFgnjQgBAPgDAMQgHAmgWApQgUAmghAoQgFAGgGAHQg6A+glAsQgWAbgPATIAAgqEgXngs8QgdBzAAB/QAAAWABArQAAALgBAKQAAAJgBAIEgYEgn0QgCAEgBADQgdA6ghA3QggAyAKAfQABABAAACQAHARAXAOQACACACABQgKANgKAMQgCgEgBgFEgXlgo4QgPAigQAiEgWPgs8QggCHg2B9EgUogsUQAPALAWALEgVEgtTIB+A1EgUcgseQAMAQANAQ");
	this.shape_156.setTransform(616.2,368.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#66FF99").ss(1,1,1).p("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");
	this.shape_157.setTransform(487.1,195.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000066").ss(1,1,1).p("AU0uiIC26jIAGgzIAFgxIgVAdIgeAqIvEUqAc5EmISgwMIAggbI4hgBAH/ZuIWELDIAgARIgEgXIkW3iABB1jIpD0ZIgUgtIgGAjIjrXVA6JHzI1NNlIgiAWIAigDIc1iOIAAAAAvAWCIAAUoIAMgQIMdwLAyQu2I4UpNIQDW7");
	this.shape_158.setTransform(530.5,347.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#66FF33").ss(1,1,1).p("Ab5AAQAABHgGBFQgcEmiUD8Qh/DXjWC5QlnE0nOBhQjSAsjnAAQhyAAhrgLQnBgslojgQh2hJhrhcQgEgDgDgCQiBhwCIB1QminYhGkTQgpilAAizQAAh0ARhuQBPnrGqlvQAMgLAMgJQC4iZDRhiQF6iyHPgBQACAAACAAQDnAADRAsQFKBFHsFRQBaBNBKBTQFnGPAAINg");
	this.shape_159.setTransform(537.5,363.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#660000").s().p("AuSsQIDciWIZJZxIj6Dcg");
	this.shape_160.setTransform(859.8,481.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00FFFF").s().p("AmUqTQFpDhHAAsIsdQKIgJgfIAJAfIgMAQgAmIKEIAAAAg");
	this.shape_161.setTransform(474.8,554.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF0000").s().p("EgvWAQiIVNtlQBGETGiHYQiIh0CBBvIAGAFI80CNIABgGIgBgNIABANIgBAGIgiADgAc/iaQAAoOlnmPIYhAAIggAcQACgIAEgIQgEAIgCAIIyhQNQAHhFAAhHgEAvZgQbIAAAAg");
	this.shape_162.setTransform(530.5,378.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#66FF66").s().p("EAU1AnlI2CrDQHMhhFnk1QDWi4B/jXIEWXiIAEAXgEAVRAnfQgTgCgQgEQAQAEATACgEgRpgnSIAFgjIAUAtIJEUZQnPABl5CxgEgRQgnIIgZgKIAZAKg");
	this.shape_163.setTransform(589.5,329.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFF66").s().p("EghMgCKIYUJMIgYAUQmqFvhPHsgARWBBIPE0qIAegqIAQAUIgQgUIAVgdIgFAxIgGAzQgTgQgVgNQAVANATAQIi2aiQnslRlKhEgEAg4gUTIAAAAg");
	this.shape_164.setTransform(470.5,207.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AjdX0QnBgslpjgQh1hJhshdIABAAIgBAAIgGgEQiBhwCIB0QminXhGkTQgpilAAizQAAh0ARhuQBPnrGqlvIAYgVQC4iYDRhiQF6iyHPgBIAEAAQDnAADRAsQFKBFHsFRQBaBNBKBTQFnGPAAINQAABHgHBFQgbEmiUD8Qh/DXjWC5QlnE0nNBhQjTAsjnAAQhyAAhrgLgAzoRCg");
	this.shape_165.setTransform(537.5,363.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139}]}).to({state:[]},9).wait(21));

	// bollons
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#66FF00").s().p("AiRDGIgJhOQAXAIAeAAQAUAAAMgJQAMgKAIgXIh5khIB1AAIA7DBIA4jBIBtAAIhzE1QgUA1gUATQgcAag7AAQgZAAgxgGg");
	this.shape_166.setTransform(729.4,303.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#66FF00").s().p("AiLCAQgbgYAAgkQAAghATgVQAUgUA0gLQA+gMASgFQATgFAUgJQAAgUgIgIQgJgJgVAAQgaAAgOAJQgLAHgGATIhrgLQAGgcAMgQQALgQAWgMQAPgIAbgFQAagFAgAAQAxAAAeAGQAeAGAVARQAOANAIAWQAIAXAAAUIAAB/QAAAVADAMQACALAJASIhoAAQgHgLgCgGIgDgSQgWAVgWAJQgcAMgnAAQg0AAgbgYgAgCAWQgiAJgJAJQgKAJAAALQAAANAKAJQAJAIARAAQATAAAPgJQAQgJAHgNQAGgNAAgVIAAgSQgXAJgXAGg");
	this.shape_167.setTransform(693.5,297.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#66FF00").s().p("Ah/CfQgggtAAhBQAAhHAjgmQAignA1AAQAaAAAVAJQAVAJAQARIAAiLIBxAAIAAGQIhpAAIAAgrQgVAcgSAJQgXANgeAAQg7AAgfgtgAgjAAQgNAQABAmQAAAjANARQANAQAVAAQAUAAAOgQQAPgRAAgmQAAgigPgRQgPgQgVAAQgTAAgOAQg");
	this.shape_168.setTransform(655.4,292.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#66FF00").s().p("AAqDJIAAigQAAgbgKgMQgLgKgRAAQgUAAgNAOQgMAPAAAoIAACMIhwAAIAAmRIBwAAIAACVQAXgYAVgLQAXgKAeAAQAuABAaAbQAaAcAAA4IAAC5g");
	this.shape_169.setTransform(618.8,291.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#66FF00").s().p("AgcDBQgUgLgJgVQgKgWAAgwIAAhmIgpAAIAAhRIApAAIAAg1IBvg6IAABvIA9AAIAABRIg9AAIAABmQAAATADAGQAGAJANAAQANAAAWgHIAIBNQgpAJgkAAQgpAAgTgLg");
	this.shape_170.setTransform(587.6,292.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#66FF00").s().p("AhyCVIAAkiIBpAAIAAAvQAOgeAQgMQAQgMAYAAQAYAAAeAQIgjBPQgUgIgMAAQgVAAgMASQgQAaAABEIAABig");
	this.shape_171.setTransform(562.5,297);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#66FF00").s().p("Ag3DJIAAkiIBvAAIAAEigAg3h7IAAhNIBvAAIAABNg");
	this.shape_172.setTransform(538.2,291.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#66FF00").s().p("Ai4DJIAAmRIDmAAQA6ABAgAdQAeAcAAArQAAAjgWAZQgOASgdAJQArALAVAYQAUAZAAAmQAAAggOAZQgPAYgZAPQgQAJgfAEQgqAFgOABgAg7ByIA+AAQAgABANgMQANgMAAgSQAAgSgNgLQgNgLghAAIg9AAgAg7gqIA1AAQAcAAAMgKQALgKAAgTQAAgSgLgJQgMgKgbAAIg2AAg");
	this.shape_173.setTransform(508,291.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#66FF00").s().p("AiSDGIgIhOQAYAIAdAAQAUAAAMgJQAMgKAJgXIh7khIB2AAIA7DBIA3jBIBuAAIhzE1QgTA1gVATQgcAag8AAQgYAAgygGg");
	this.shape_174.setTransform(449.8,303.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#66FF00").s().p("AifDMIAAmQIBoAAIAAArQAWgbASgKQAYgNAdAAQA6AAAgAtQAgAsAABCQAABIgjAmQgjAmg1AAQgZAAgVgJQgVgJgQgRIAACLgAghhoQgOAQAAAmQAAAiAOAQQAOARAWAAQATAAANgQQAOgPAAgnQAAgjgOgQQgOgRgUAAQgUAAgOARg");
	this.shape_175.setTransform(415.5,302.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#66FF00").s().p("AifDMIAAmQIBpAAIAAArQAVgbASgKQAYgNAdAAQA6AAAgAtQAgAsAABCQAABIgjAmQgjAmg1AAQgZAAgVgJQgVgJgQgRIAACLgAghhoQgOAQAAAmQAAAiAOAQQAOARAWAAQATAAANgQQAOgPAAgnQAAgjgOgQQgOgRgUAAQgUAAgOARg");
	this.shape_176.setTransform(378.2,302.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#66FF00").s().p("AiLCAQgbgYAAgkQAAghATgVQAUgUA0gLQA+gMASgFQATgFAUgJQAAgUgIgIQgJgJgVAAQgaAAgOAJQgLAHgGATIhrgLQAGgcAMgQQALgQAWgMQAPgIAbgFQAagFAgAAQAxAAAeAGQAeAGAVARQAOANAIAWQAIAXAAAUIAAB/QAAAVADAMQACALAJASIhoAAQgHgLgCgGIgDgSQgWAVgWAJQgcAMgnAAQg0AAgbgYgAgCAWQgiAJgJAJQgKAJAAALQAAANAKAJQAJAIARAAQATAAAPgJQAQgJAHgNQAGgNAAgVIAAgSQgXAJgXAGg");
	this.shape_177.setTransform(339.6,297.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#66FF00").s().p("ABEDJIAAijIiHAAIAACjIh8AAIAAmRIB8AAIAACNICHAAIAAiNIB8AAIAAGRg");
	this.shape_178.setTransform(297.5,291.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_179.setTransform(522.2,359);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFF00").s().p("AAAE/QiDAAheheQhdhdAAiEQAAiDBdhdQBeheCDAAQCEAABdBeQBeBdAACDQAACEheBdQhZBah7AEIgNAAg");
	this.shape_180.setTransform(489.1,629.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#3333FF").s().p("EAHhAo6QgugYgogoQhkhlAAiPQAAiPBkhlQBmhlCPAAQCPAABlBlQBlBlABCPQAACPhmBlQhlBmiPAAQhYAAhHgmgEgOIgiJQgmgmgUgsQgWg0AAg9QgBhyBRhQQBRhRBxAAQByAABRBRQBQBQABByQgBByhQBRQhRBQhyAAQhxAAhRhQg");
	this.shape_181.setTransform(275.7,306.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#9900FF").s().p("ALWKZQhEhEAAhhQAAgUADgSQALhJA2g2QBEhDBgAAQBhAABEBDQBEBFAABgQAABhhEBEQhEBEhhgBQhgABhEhEgAu8kLQgcgNgZgQQhxhLAAhpQAAhqBxhLQBxhKCfgBQCgABBwBKQBxBLAABqQAABphxBLQhwBKigAAQh8AAhfgtg");
	this.shape_182.setTransform(280.4,270.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#99FF66").s().p("AjzC/QhmhPABhwQgBhvBmhPQBlhPCOAAQCPAABlBPQBlBPAABvQAABwhlBPQgzAng8AVQg+AThHAAQiOAAhlhPg");
	this.shape_183.setTransform(354.7,187.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CC6633").s().p("EAnLAX6QgMgMgKgMQhDhRAAhtQAAh+BZhYQBYhZB+AAQB9AABYBZQBZBYAAB+QAAB9hZBZQhYBYh9AAQh+AAhYhYgEgtngP6QhnhnAAiRQAAiSBnhnQBmhmCSAAQCSAABmBmQBnBnAACSQAACRhnBnIgUATQhgBUiEAAQiSAAhmhng");
	this.shape_184.setTransform(480.4,479.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#99FFFF").s().p("AgPAQQgGgGAAgKQAAgIAGgHQAHgGAIAAQAKAAAGAGQAGAHABAIQgBAKgGAGQgGAGgKABQgIgBgHgGg");
	this.shape_185.setTransform(706,557.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#66FF00").s().p("Eg5XAisQiGiGAAi/QAAi/CGiHQCHiGC/gBQC/ABCHCGQCHCHAAC/QAAC/iHCGQhtBuiSAVQgjAFgkgBQi/AAiHiHgEAyMAUxQhDgfg4g4Qh7h7AAiuQAAiuB7h7QB7h7CuAAQCuAAB7B7QB7B7AACuQAACuh7B7Qh7B7iuAAQheAAhQgkgABn67IgCgCQhphsAAiYQAAiZBrhtQBthsCZAAQCaAABsBsQBsBtAACZQAACahsBsQhsBtiagBQiZABhthtg");
	this.shape_186.setTransform(447.6,320.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#66FFFF").s().p("EA+fApgQiZgQhyhyQiEiEAAi6QAAi7CEiEQCEiEC7AAQC6AACECEQCECEAAC7QAAC6iECEQiECEi6AAQgbAAgZgCgEgLxAiQQififAAjhQAAjhCfifQCfifDhAAQDhAACeCfQCfCfAADhQAADciYCdIgHAHQieCfjhAAQjhAAififgEhExAPBQgcgMgYgYQgvgvAAhEQAAhDAvgwQAwgvBDAAQBEAAAvAvQAwAwAABDQAABEgwAvQgvAwhEAAQgiAAgdgMgEAwrgc2QiLiLAAjFQAAjFCLiLQCLiLDFAAQDFAACLCLQCLCLAADFQAADFiLCLQhcBch2AfQg8AQhCAAQjFAAiLiLg");
	this.shape_187.setTransform(527.2,288.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#66FF00").s().p("AAqDIIAAifQAAgcgKgLQgLgKgRAAQgUAAgNAOQgMAPAAAoIAACLIhwAAIAAmPIBwAAIAACTQAXgXAVgLQAXgJAegBQAuAAAaAcQAaAcAAA4IAAC4g");
	this.shape_188.setTransform(618.8,276.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#66FF00").s().p("AhyCUIAAkhIBpAAIAAAvQAOgeAQgLQAQgNAYAAQAYAAAeAQIgjBPQgUgIgMAAQgVAAgMASQgQAZAABFIAABhg");
	this.shape_189.setTransform(562.5,282);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#66FF00").s().p("Ag3DIIAAkhIBvAAIAAEhgAg3h8IAAhLIBvAAIAABLg");
	this.shape_190.setTransform(538.2,276.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#66FF00").s().p("Ai4DIIAAmPIDmAAQA6AAAgAcQAeAdAAArQAAAjgWAaQgOAQgdAKQArAKAVAZQAUAZAAAnQAAAegOAaQgPAZgZAOQgQAJgfAEQgqAGgOgBgAg7BzIA+AAQAgAAANgMQANgLAAgUQAAgRgNgLQgNgLghAAIg9AAgAg7gqIA1AAQAcAAAMgKQALgKAAgTQAAgRgLgKQgMgKgbAAIg2AAg");
	this.shape_191.setTransform(508,276.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#66FF00").s().p("ABEDIIAAiiIiHAAIAACiIh8AAIAAmPIB8AAIAACMICHAAIAAiMIB8AAIAAGPg");
	this.shape_192.setTransform(297.5,276.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_193.setTransform(522.2,344);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFF00").s().p("AAAE/QiDAAheheQhdhdAAiEQAAiDBdheQBehdCDAAQCEAABdBdQBeBeAACDQAACEheBdQhZBah7AEIgNAAg");
	this.shape_194.setTransform(489.1,614.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#9900FF").s().p("ALWKYQhEhEAAhgQAAgUADgSQALhIA2g3QBEhEBgABQBhgBBEBEQBEBEAABhQAABghEBEQhEBFhhAAQhgAAhEhFgAu8kLQgcgNgZgRQhxhKAAhqQAAhpBxhLQBxhLCfABQCggBBwBLQBxBLAABpQAABqhxBKQhwBMiggBQh8ABhfgug");
	this.shape_195.setTransform(280.4,255.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#99FF66").s().p("AjzC/QhmhPABhwQgBhvBmhPQBlhPCOAAQCPAABlBPQBlBPAABvQAABwhlBPQgzAog8ATQg+AUhHAAQiOAAhlhPg");
	this.shape_196.setTransform(354.7,172.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#99FFFF").s().p("AgPAQQgGgHAAgJQAAgJAGgGQAHgGAIgBQAKABAGAGQAGAGABAJQgBAJgGAHQgGAGgKAAQgIAAgHgGg");
	this.shape_197.setTransform(706,542.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#66FF00").s().p("Eg5XAitQiGiHAAi/QAAi/CGiHQCHiHC/AAQC/AACHCHQCHCHAAC/QAAC/iHCHQhtBtiSAVQgjAEgkABQi/AAiHiHgEAyMAUxQhDgfg4g4Qh7h7AAiuQAAiuB7h7QB7h7CuAAQCuAAB7B7QB7B7AACuQAACuh7B7Qh7B7iuAAQheAAhQgkgABn67IgCgDQhphrAAiYQAAiZBrhtQBthsCZAAQCaAABsBsQBsBtAACZQAACahsBsQhsBtiaAAQiZAAhthtg");
	this.shape_198.setTransform(447.6,305.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#66FF00").s().p("AAqDJIAAigQAAgcgKgKQgLgLgRAAQgUAAgNAOQgMAQAAAnIAACMIhwAAIAAmRIBwAAIAACUQAXgXAVgKQAXgKAeAAQAuAAAaAbQAaAcAAA4IAAC5g");
	this.shape_199.setTransform(618.8,242.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#66FF00").s().p("AhyCVIAAkiIBpAAIAAAwQAOgfAQgLQAQgMAYAAQAYAAAeAPIgjBPQgUgIgMAAQgVAAgMASQgQAaAABEIAABig");
	this.shape_200.setTransform(562.5,248);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#66FF00").s().p("Ag3DJIAAkiIBvAAIAAEigAg3h8IAAhMIBvAAIAABMg");
	this.shape_201.setTransform(538.2,242.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#66FF00").s().p("Ai4DJIAAmRIDmAAQA6AAAgAdQAeAdAAAqQAAAkgWAaQgOARgdAJQArAKAVAZQAUAZAAAnQAAAegOAZQgPAagZAOQgQAJgfAEQgqAGgOAAgAg7ByIA+AAQAgAAANgLQANgLAAgUQAAgRgNgLQgNgLghAAIg9AAgAg7gqIA1AAQAcAAAMgKQALgKAAgTQAAgSgLgKQgMgJgbAAIg2AAg");
	this.shape_202.setTransform(508,242.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#66FF00").s().p("ABEDJIAAiiIiHAAIAACiIh8AAIAAmRIB8AAIAACNICHAAIAAiNIB8AAIAAGRg");
	this.shape_203.setTransform(297.5,242.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_204.setTransform(522.2,310);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_205.setTransform(522.2,292);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#99FFFF").s().p("AgPAQQgGgGAAgKQAAgIAGgHQAHgHAIAAQAKAAAGAHQAGAHABAIQgBAKgGAGQgGAHgKgBQgIABgHgHg");
	this.shape_206.setTransform(706,490.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFF00").s().p("AAAE/QiDAAhehdQhdheAAiEQAAiDBdheQBehdCDAAQCEAABdBdQBeBeAACDQAACEheBeQhZBYh7AFIgNAAg");
	this.shape_207.setTransform(489.1,562.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#9900FF").s().p("ALWKYQhEhDAAhhQAAgTADgTQALhIA2g2QBEhEBggBQBhABBEBEQBEBEAABgQAABhhEBDQhEBEhhABQhggBhEhEgAu8kKQgcgNgZgSQhxhKAAhqQAAhpBxhLQBxhLCfABQCggBBwBLQBxBLAABpQAABqhxBKQhwBMigAAQh8AAhfgtg");
	this.shape_208.setTransform(280.4,203.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#66FF00").s().p("Eg5XAisQiGiGAAi/QAAi/CGiHQCHiGC/AAQC/AACHCGQCHCHAAC/QAAC/iHCGQhtBuiSAVQgjAEgkAAQi/AAiHiHgEAyMAUxQhDgfg4g4Qh7h7AAiuQAAiuB7h7QB7h7CuAAQCuAAB7B7QB7B7AACuQAACuh7B7Qh7B7iuAAQheAAhQgkgABn67IgCgDQhphrAAiXQAAiaBrhsQBthsCZAAQCaAABsBsQBsBsAACaQAACZhsBsQhsBsiaABQiZgBhthsg");
	this.shape_209.setTransform(447.6,253.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#66FF00").s().p("AAqDJIAAigQAAgbgKgLQgLgLgRAAQgUAAgNAOQgMAPAAAoIAACMIhwAAIAAmRIBwAAIAACVQAXgYAVgLQAXgKAeABQAugBAaAcQAaAcAAA4IAAC5g");
	this.shape_210.setTransform(618.8,209.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#66FF00").s().p("AhyCVIAAkiIBpAAIAAAwQAOgfAQgMQAQgMAYABQAYAAAeAPIgjBPQgUgIgMAAQgVAAgMASQgQAZAABFIAABig");
	this.shape_211.setTransform(562.5,215);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#66FF00").s().p("Ai4DJIAAmRIDmAAQA6AAAgAeQAeAcAAAqQAAAkgWAZQgOARgdAKQArAKAVAZQAUAZAAAmQAAAggOAYQgPAZgZAPQgQAJgfAEQgqAFgOABgAg7ByIA+AAQAgAAANgLQANgMAAgSQAAgSgNgLQgNgLghAAIg9AAgAg7gqIA1AAQAcAAAMgKQALgKAAgTQAAgRgLgLQgMgJgbAAIg2AAg");
	this.shape_212.setTransform(508,209.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_213.setTransform(522.2,277);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_214.setTransform(522.2,277);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#99FFFF").s().p("AgPAQQgGgHAAgJQAAgJAGgGQAHgGAIAAQAKAAAGAGQAGAGABAJQgBAJgGAHQgGAGgKABQgIgBgHgGg");
	this.shape_215.setTransform(706,475.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFF00").s().p("AAAE/QiDAAhehdQhdheAAiEQAAiDBdhdQBeheCDAAQCEAABdBeQBeBdAACDQAACEheBeQhZBYh7AFIgNAAg");
	this.shape_216.setTransform(489.1,547.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#9900FF").s().p("ALWKZQhEhEAAhhQAAgUADgSQALhJA2g2QBEhEBgAAQBhAABEBEQBEBFAABgQAABhhEBEQhEBEhhgBQhgABhEhEgAu8kKQgcgOgZgQQhxhLAAhpQAAhqBxhLQBxhKCfgBQCgABBwBKQBxBLAABqQAABphxBLQhwBKigABQh8gBhfgsg");
	this.shape_217.setTransform(280.4,188.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#66FF00").s().p("Eg5XAisQiGiGAAi/QAAi/CGiHQCHiHC/AAQC/AACHCHQCHCHAAC/QAAC/iHCGQhtBuiSAVQgjAFgkgBQi/AAiHiHgEAyMAUxQhDgfg4g4Qh7h7AAiuQAAiuB7h7QB7h7CuAAQCuAAB7B7QB7B7AACuQAACuh7B7Qh7B7iuAAQheAAhQgkgABn67IgCgCQhphsAAiYQAAiZBrhsQBthsCZAAQCaAABsBsQBsBsAACZQAACahsBsQhsBtiagBQiZABhthtg");
	this.shape_218.setTransform(447.6,238.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#66FFFF").s().p("EA+fApgQiZgQhyhyQiEiEAAi6QAAi7CEiEQCEiEC7AAQC6AACECEQCECEAAC7QAAC6iECEQiECEi6AAQgbAAgZgCgEgLxAiQQififAAjhQAAjhCfifQCfifDhAAQDhAACeCfQCfCfAADhQAADciYCdIgHAHQieCfjhAAQjhAAififgEhExAPBQgcgMgYgYQgvgvAAhEQAAhDAvgwQAwgvBDAAQBEAAAvAvQAwAwAABDQAABEgwAvQgvAwhEAAQgiAAgdgMgEA17garQjFAAiLiLQiLiLAAjFQAAjFCLiLQCLiLDFAAQDFAACLCLQCLCLAADFQAADFiLCLQhcBch2AfQgzANg3ADIgKAAIgKAAg");
	this.shape_219.setTransform(527.2,206.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_187,p:{y:288.3}},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184,p:{y:479.8}},{t:this.shape_183,p:{y:187.1}},{t:this.shape_182},{t:this.shape_181,p:{y:306.6}},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{y:297.3}},{t:this.shape_176,p:{y:302.5}},{t:this.shape_175,p:{y:302.5}},{t:this.shape_174,p:{y:303.2}},{t:this.shape_173},{t:this.shape_172,p:{y:291.8}},{t:this.shape_171},{t:this.shape_170,p:{y:292.1}},{t:this.shape_169},{t:this.shape_168,p:{y:292.1}},{t:this.shape_167,p:{y:297.3}},{t:this.shape_166,p:{y:303.2}}]},20).to({state:[{t:this.shape_187,p:{y:273.3}},{t:this.shape_198,p:{y:305.6}},{t:this.shape_197,p:{y:542.9}},{t:this.shape_184,p:{y:464.8}},{t:this.shape_196,p:{y:172.1}},{t:this.shape_195,p:{y:255.3}},{t:this.shape_181,p:{y:291.6}},{t:this.shape_194,p:{y:614.1}},{t:this.shape_193,p:{y:344}},{t:this.shape_192,p:{y:276.8}},{t:this.shape_177,p:{y:282.3}},{t:this.shape_176,p:{y:287.5}},{t:this.shape_175,p:{y:287.5}},{t:this.shape_174,p:{y:288.2}},{t:this.shape_191,p:{y:276.8}},{t:this.shape_190,p:{y:276.8}},{t:this.shape_189,p:{y:282}},{t:this.shape_170,p:{y:277.1}},{t:this.shape_188,p:{y:276.8}},{t:this.shape_168,p:{y:277.1}},{t:this.shape_167,p:{y:282.3}},{t:this.shape_166,p:{y:288.2}}]},1).to({state:[{t:this.shape_187,p:{y:255.3}},{t:this.shape_198,p:{y:287.6}},{t:this.shape_197,p:{y:524.9}},{t:this.shape_184,p:{y:446.8}},{t:this.shape_196,p:{y:154.1}},{t:this.shape_195,p:{y:237.3}},{t:this.shape_181,p:{y:273.6}},{t:this.shape_194,p:{y:596.1}},{t:this.shape_193,p:{y:326}},{t:this.shape_192,p:{y:258.8}},{t:this.shape_177,p:{y:264.3}},{t:this.shape_176,p:{y:269.5}},{t:this.shape_175,p:{y:269.5}},{t:this.shape_174,p:{y:270.2}},{t:this.shape_191,p:{y:258.8}},{t:this.shape_190,p:{y:258.8}},{t:this.shape_189,p:{y:264}},{t:this.shape_170,p:{y:259.1}},{t:this.shape_188,p:{y:258.8}},{t:this.shape_168,p:{y:259.1}},{t:this.shape_167,p:{y:264.3}},{t:this.shape_166,p:{y:270.2}}]},1).to({state:[{t:this.shape_187,p:{y:239.3}},{t:this.shape_198,p:{y:271.6}},{t:this.shape_197,p:{y:508.9}},{t:this.shape_184,p:{y:430.8}},{t:this.shape_196,p:{y:138.1}},{t:this.shape_195,p:{y:221.3}},{t:this.shape_181,p:{y:257.6}},{t:this.shape_194,p:{y:580.1}},{t:this.shape_204},{t:this.shape_203,p:{y:242.8}},{t:this.shape_177,p:{y:248.3}},{t:this.shape_176,p:{y:253.5}},{t:this.shape_175,p:{y:253.5}},{t:this.shape_174,p:{y:254.2}},{t:this.shape_202,p:{y:242.8}},{t:this.shape_201,p:{y:242.8}},{t:this.shape_200,p:{y:248}},{t:this.shape_170,p:{y:243.1}},{t:this.shape_199,p:{y:242.8}},{t:this.shape_168,p:{y:243.1}},{t:this.shape_167,p:{y:248.3}},{t:this.shape_166,p:{y:254.2}}]},1).to({state:[{t:this.shape_187,p:{y:221.3}},{t:this.shape_209,p:{y:253.6}},{t:this.shape_196,p:{y:120.1}},{t:this.shape_208,p:{y:203.3}},{t:this.shape_181,p:{y:239.6}},{t:this.shape_184,p:{y:412.8}},{t:this.shape_207,p:{y:562.1}},{t:this.shape_206,p:{y:490.9}},{t:this.shape_205},{t:this.shape_203,p:{y:224.8}},{t:this.shape_177,p:{y:230.3}},{t:this.shape_176,p:{y:235.5}},{t:this.shape_175,p:{y:235.5}},{t:this.shape_174,p:{y:236.2}},{t:this.shape_202,p:{y:224.8}},{t:this.shape_201,p:{y:224.8}},{t:this.shape_200,p:{y:230}},{t:this.shape_170,p:{y:225.1}},{t:this.shape_199,p:{y:224.8}},{t:this.shape_168,p:{y:225.1}},{t:this.shape_167,p:{y:230.3}},{t:this.shape_166,p:{y:236.2}}]},1).to({state:[{t:this.shape_187,p:{y:206.3}},{t:this.shape_181,p:{y:224.6}},{t:this.shape_209,p:{y:238.6}},{t:this.shape_196,p:{y:105.1}},{t:this.shape_208,p:{y:188.3}},{t:this.shape_184,p:{y:397.8}},{t:this.shape_207,p:{y:547.1}},{t:this.shape_206,p:{y:475.9}},{t:this.shape_213},{t:this.shape_203,p:{y:209.8}},{t:this.shape_177,p:{y:215.3}},{t:this.shape_176,p:{y:220.5}},{t:this.shape_175,p:{y:220.5}},{t:this.shape_174,p:{y:221.2}},{t:this.shape_212},{t:this.shape_172,p:{y:209.8}},{t:this.shape_211},{t:this.shape_170,p:{y:210.1}},{t:this.shape_210},{t:this.shape_168,p:{y:210.1}},{t:this.shape_167,p:{y:215.3}},{t:this.shape_166,p:{y:221.2}}]},1).to({state:[{t:this.shape_219},{t:this.shape_181,p:{y:224.6}},{t:this.shape_218},{t:this.shape_183,p:{y:105.1}},{t:this.shape_217},{t:this.shape_184,p:{y:397.8}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_203,p:{y:209.8}},{t:this.shape_177,p:{y:215.3}},{t:this.shape_176,p:{y:220.5}},{t:this.shape_175,p:{y:220.5}},{t:this.shape_174,p:{y:221.2}},{t:this.shape_212},{t:this.shape_172,p:{y:209.8}},{t:this.shape_211},{t:this.shape_170,p:{y:210.1}},{t:this.shape_210},{t:this.shape_168,p:{y:210.1}},{t:this.shape_167,p:{y:215.3}},{t:this.shape_166,p:{y:221.2}}]},1).wait(4));

	// Label
	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AACCvIAAjkQgXASgVALQgXALggAKIAAhPQAwgPAbgWQAbgWAPghIBPAAIAAFdg");
	this.shape_220.setTransform(607.3,316.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgMQgMgLgTgBQgWABgOARg");
	this.shape_221.setTransform(561.6,321.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_222.setTransform(529.6,320.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_223.setTransform(497.6,321.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_224.setTransform(465.6,321.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_225.setTransform(432.1,316.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_226.setTransform(609.1,316.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]}).to({state:[{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_226}]},10).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(688.4,452.8,775.9,625.2);
// library properties:
lib.properties = {
	id: '2973AAA73B892441B06615C914DA4FCC',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#000000",
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
an.compositions['2973AAA73B892441B06615C914DA4FCC'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;