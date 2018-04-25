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


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.AnimatedCardCDiaz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.next_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_10 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.next_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(11);
		}
		playSound("happyvalwav");
	}
	this.frame_20 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(10));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(512,384);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(30));

	// Actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhdB/IgGgyQAPAFATAAQANAAAIgGQAIgGAFgPIhOi5IBLAAIAmB8IAkh8IBGAAIhKDGQgNAigNAMQgRARgnAAQgPAAgggEg");
	this.shape.setTransform(485.2,333.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhRBmQgVgdAAgqQAAgtAXgZQAWgYAiAAQARAAANAFQANAGALALIAAhZIBIAAIAAEBIhDAAIAAgcQgOASgMAGQgOAIgTAAQgmAAgUgdgAgWAAQgIAKAAAYQAAAXAJALQAIALANAAQANAAAJgLQAJgLAAgYQAAgWgJgLQgJgKgOAAQgMAAgJAKg");
	this.shape_1.setTransform(461.6,326.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAbBfIAAhlQAAgRgHgIQgGgHgMgBQgMAAgIAKQgIALAAAYIAABZIhIAAIAAi5IBDAAIAAAeQAPgTAPgHQAPgJAVABQAeAAARASQARARAAAlIAAB1g");
	this.shape_2.setTransform(438.1,329.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgjCBIAAi6IBHAAIAAC6gAgjhPIAAgxIBHAAIAAAxg");
	this.shape_3.setTransform(420.1,326.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Ag7B5QgbgMgTgfQgTgfAAgvQAAhAAigiQAigiA9AAQAxAAAcATQAbAUAOApIhGAPQgEgLgEgGQgHgJgJgFQgKgFgMAAQgaAAgOAWQgLAQAAAjQAAAqANAQQANAPAWAAQAXAAAMgMQALgNAGgZIBFAVQgHAegPATQgPAUgWAKQgXAKgiAAQgpAAgbgMg");
	this.shape_4.setTransform(400.3,326.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhGBTQgWgOgGgbIBHgHQAEAMAIAGQAIAGAMAAQAPgBAHgFQAHgFAAgHQAAgIgIgEQgGgDgYgFQgmgGgOgGQgPgFgJgMQgKgNAAgRQAAgSAKgOQALgNATgHQATgGAfgBQAhAAAQAGQAQAFAKALQALAKAHATIhEAGQgDgJgGgEQgIgGgLAAQgMABgGAEQgFAEAAAGQAAAHAHADQAHAEAWADQAkAEARAHQASAHAJAMQAJAOAAAQQAAAQgJAPQgKAQgVAJQgVAJglAAQgyAAgVgPg");
	this.shape_5.setTransform(631.7,113);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgXAvIgMgzIAAgqIBHAAIAAAqIgMAzg");
	this.shape_6.setTransform(616,101.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag6BYQgVgLgOgXQgOgXAAgfQAAgqAcgcQAcgbAxAAQAnABAYAMQAXAMAMAXQAMAXAAAkIAAAIIiOAAQACARAHAJQAKAMAQgBQALAAAJgEQAGgEAHgJIBGAHQgQAdgXAMQgXALgqABQglAAgVgKgAgagpQgGAJgCAQIBFAAQgCgUgJgJQgJgJgPAAQgQAAgKANg");
	this.shape_7.setTransform(599,113);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAbBfIAAhlQAAgSgHgHQgGgIgMAAQgMAAgIALQgIAJAAAZIAABZIhIAAIAAi5IBDAAIAAAeQAPgTAPgIQAPgHAVgBQAeABARARQARASAAAlIAAB1g");
	this.shape_8.setTransform(574.9,112.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgjCBIAAi6IBHAAIAAC6gAgjhPIAAgxIBHAAIAAAxg");
	this.shape_9.setTransform(556.9,109.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgSB8QgNgHgFgOQgHgOAAgfIAAhBIgaAAIAAg0IAaAAIAAgiIBHglIAABHIAnAAIAAA0IgnAAIAABCQAAAMACADQAEAGAIAAQAJAAAOgEIAFAxQgaAGgXAAQgbAAgMgHg");
	this.shape_10.setTransform(542.9,109.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAbBfIAAhlQAAgSgHgHQgGgIgMAAQgMAAgIALQgIAJAAAZIAABZIhIAAIAAi5IBDAAIAAAeQAPgTAPgIQAPgHAVgBQAeABARARQARASAAAlIAAB1g");
	this.shape_11.setTransform(522.9,112.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag6BYQgVgLgOgXQgOgXAAgfQAAgqAcgcQAcgbAxAAQAnABAYAMQAXAMAMAXQAMAXAAAkIAAAIIiOAAQACARAHAJQAKAMAQgBQALAAAJgEQAGgEAHgJIBGAHQgQAdgXAMQgXALgqABQglAAgVgKgAgagpQgGAJgCAQIBFAAQgCgUgJgJQgJgJgPAAQgQAAgKANg");
	this.shape_12.setTransform(499,113);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgjCBIAAkBIBHAAIAAEBg");
	this.shape_13.setTransform(480.9,109.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AhaBSQgRgPAAgXQAAgVANgOQAMgNAigGIAzgLIAagJQAAgOgGgEQgGgGgNAAQgRAAgIAGQgIAEgDAMIhFgHQAEgSAHgKQAHgKAOgIQAKgFARgDQARgEAVAAQAfAAATAFQATADANALQAKAIAFAPQAGAOgBAOIAABRQAAANACAHQACAIAFALIhDAAIgFgLIgDgLQgNANgOAGQgTAHgYABQgigBgSgPgAgCAOQgVAGgGAGQgGAFAAAIQAAAJAGAFQAGAFALAAQAMAAAJgGQALgGAEgIQAFgJAAgMIAAgMIgfAJg");
	this.shape_14.setTransform(463,113);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AggBdIhNi5IBKAAIAkB1IAlh1IBIAAIhPC5g");
	this.shape_15.setTransform(440,113);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AhdB/IgGgyQAPAFATAAQANAAAIgGQAIgGAFgPIhOi5IBLAAIAmB8IAkh8IBGAAIhKDGQgNAigNAMQgRARgnAAQgPAAgggEg");
	this.shape_16.setTransform(406,116.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AhmCDIAAkBIBDAAIAAAcQAOgSAMgFQAOgJATAAQAmAAAUAdQAVAdAAAqQAAAtgXAZQgWAYgiAAQgRAAgMgFQgOgGgLgLIAABZgAgVhCQgJAKAAAYQAAAXAJAJQAKALANAAQAMAAAJgLQAIgJAAgZQAAgWgJgKQgIgLgNAAQgNAAgJALg");
	this.shape_17.setTransform(384,116.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AhmCDIAAkBIBDAAIAAAcQAOgSAMgFQAOgJATAAQAmAAAUAdQAVAdAAAqQAAAtgXAZQgWAYgiAAQgRAAgMgFQgOgGgLgLIAABZgAgVhCQgJAKAAAYQAAAXAJAJQAKALANAAQAMAAAJgLQAIgJAAgZQAAgWgJgKQgIgLgNAAQgNAAgJALg");
	this.shape_18.setTransform(360,116.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AhaBSQgQgPgBgXQAAgVANgOQANgNAhgGIAzgLIAZgJQABgOgGgEQgFgGgOAAQgRAAgIAGQgHAEgFAMIhEgHQAEgSAHgKQAIgKANgIQAKgFARgDQASgEATAAQAfAAAUAFQATADAOALQAJAIAFAPQAFAOAAAOIAABRQABANABAHQACAIAFALIhDAAIgFgLIgCgLQgOANgOAGQgSAHgZABQgigBgSgPgAgBAOQgWAGgGAGQgGAFAAAIQAAAJAGAFQAGAFAMAAQALAAAJgGQALgGAEgIQAFgJgBgMIAAgMIgdAJg");
	this.shape_19.setTransform(335.3,113);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AArCBIAAhoIhVAAIAABoIhQAAIAAkBIBQAAIAABaIBVAAIAAhaIBQAAIAAEBg");
	this.shape_20.setTransform(308.3,109.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},10).wait(20));

	// heart
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#333333").ss(1,1,1).p("AYAkmIAAABIEUA3IbZr4AVvlCIAAABICRAbIe6tYAVvlCMAhNgPOAYAklIWwYXAcUjuIUhVAAVvlBIW9aKAEEojQBnhYjMj4AgwmnQDHggBthcIE+A/IMtCiEguxgRvIo6ieINKIHgEgh/gOOIiDgkIqvi9Eg3rgUNIOUg7IlaDZEgh/gOOQAXBxC4CkA9xyQQkjCaAVBo");
	this.shape_21.setTransform(525.1,399.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(1,1,1).p("EgEEAiHQjRkAhdiyQrB0/lzt0QgGgPgGgOQi0mwhjlAQhMj3gci1QgViIAGhjQABgaAEgXQA3lpH6ECQB9BACYBlQDKCHD5DIQEbDjFYE3UA2ugqPghSA6LQnNKjrbOdQjJD/hwFYg");
	this.shape_22.setTransform(458.3,352.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AnJjlII5CeIERFogAnJjlIOTg7IlaDZgAnJjlg");
	this.shape_23.setTransform(214.4,292.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AoybVQrB0/lzt0ICCAkQAXBxC4CkQi4ikgXhxIgBgOQgBhlEQiPQkQCPABBlIABAOIiCgkIgMgdQi0mwhjlAQhMj3gci1QgViIAGhjQABgaAEgXQA3lpH6ECQB9BACYBlQDKCHD5DIQEbDjFYE3UA2ugqPghSA6LIk+g/QhtBbjIAgQDIggBthbIE+A/QnNKjrbOdQjJD/hwFYQjRkAhdiygAOfhPQAigdAAgwQAAheiHilQCHClAABeQAAAwgiAdgATdgQgA5mneg");
	this.shape_24.setTransform(458.3,352.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0066CC").ss(1,1,1).p("EA6GgRpQBFA9l9HOQMZD7uFJ9QJbA2lrI9Eg0cgOMQAAAAABABQBBA/l6HLQMZD7uFJ9QJbA2lrI9");
	this.shape_25.setTransform(542.7,401.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(1,1,1).p("AiYMqUgdhgjhAeJAQoUAl0gTIgmcAmBg");
	this.shape_26.setTransform(222.2,230);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CC9999").ss(1,1,1).p("AsbwyIARIMIASIhIASJKIHogCIADLdAy0JIIHOgDIARIeAzEomIG6AAIIIAAIIYAAIHcAAIHTAAA02gFII+AAIH4AAIACJIIIRgDIHpgCIAFIHALtxUIAFIuIAFIhIAFJDIG+gDAkAgFIIUAAIgBJFIgBLcAEWomIgCIhIHjAAIJAAAAkComIACIhAkG0fIAEL5AEX0cIgBL2");
	this.shape_27.setTransform(520.5,320.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#333333").ss(1,1,1).p("AgXm3QAMAAALAAQCRAACGAbQB9AZB0AwQAwAVAvAZQAfAQAfASQAIAFAIAFQAcARAcAUQA9ArA7AyQAmAiAlAlQCmCkBfDCQAJASAHARQACADABACQBuD3ABEkIAAAFQgGFGh3D3QhfDJirCrQhUBUhbBCQjhCikOA1QiEAaiOAAQiCAAh5gWQkBgujZiPQhzhNhnhnQililhgjCQiCkKAAlAQAAgCAAgDQABknBxj5QBhjWC0izQAlglAmgiQAkgfAlgcQAygnA1ggQAIgFAJgFQBLguBSgiQB7gzCFgZQB0gWB7gCIAA7+");
	this.shape_28.setTransform(520.5,231);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("Eg03gE6UAl1gTIgmdAmBUgdigjhAeKAQogEA10AFJQhChxg6hmQi4lEhmjcQhijSgYhzQgOhCAKgjQAuiTHnGkQBQBFBcBUIAwAtIA0gtQCWiAB0hVQI1mgkUJ1QhdDVi9FLIgJAPQiKDxi8EwQhwi3hfiig");
	this.shape_29.setTransform(549.4,221.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009900").s().p("AkfkhII/AAIAAAFQgGFEh2D3Im+ADg");
	this.shape_30.setTransform(625.2,348.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#660000").s().p("AkLGJIgDr5QB0gWB7gCIAYAAQCQAACGAbIgCL2g");
	this.shape_31.setTransform(521.3,226.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#33FF00").s().p("AjekBIG9gDQhgDJipCqQhUBUhcBCg");
	this.shape_32.setTransform(619.2,403.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF33FF").s().p("AjjCxIgRocIHmgDIADLdQkAgvjYiPg");
	this.shape_33.setTransform(470.8,415.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#660033").s().p("AjwEQIABofIHbAAIAFIfg");
	this.shape_34.setTransform(572.3,292.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#990033").s().p("AjykiIHhAAIAFJDInnACg");
	this.shape_35.setTransform(572.5,349);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#66FF66").s().p("Aj6F9IgRoMQAygmA0ggIARgKQBMguBRgiQB6g0CGgZIADL5g");
	this.shape_36.setTransform(467.8,227.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#33FF33").s().p("AjtF7IABr1QB+AZByAwQAwAVAwAZQAfAQAfASIAPAKQAcASAcATIAFItg");
	this.shape_37.setTransform(572.1,227.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#993399").s().p("AjzEQIgRofIIGAAIADIfg");
	this.shape_38.setTransform(468.7,292.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF33").s().p("AIuhKIHpgCIAFIGQjhCikOA1gAwbqLIAAgFII+AAIATJLInOADQiDkKAAk/g");
	this.shape_39.setTransform(492.2,385.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF66FF").s().p("Aj8klIH3AAIACJIInmADg");
	this.shape_40.setTransform(469.7,349.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#99CCCC").s().p("AkKkkIIVAAIgCJGIoRACg");
	this.shape_41.setTransform(521.5,349.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF33CC").s().p("AkdEQIgFofIHTAAIACAFQBvD3ABEjg");
	this.shape_42.setTransform(624.9,292.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC0000").s().p("ADXIWIgDofIIZAAIgBIfgArsgJQBhjWC0i1QAlglAmghQAkggAlgbIARIMg");
	this.shape_43.setTransform(473.3,266.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0000FF").s().p("AjCSwIgDreIIRgCIgCLcQiDAZiOAAQiCAAh5gVgAt2M/QilimhgjCIHOgCIARIeQhzhNhnhngAz9h2QABknBxj5IG6AAIARIggAMqqWIgFouQA+AqA6AzQAnAhAlAlQClCmBgDCIAQAjg");
	this.shape_44.setTransform(514.8,331.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},10).to({state:[]},10).wait(10));

	// Label
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AACCvIAAjkQgWASgXALQgVALgiAKIAAhPQAygPAbgWQAagWAOghIBQAAIAAFdg");
	this.shape_45.setTransform(194.5,37.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhOB1QgcgPgSgeQgTgeAAgpQAAg6AlgkQAmgkBBAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAAKIi+AAQACAYAKALQAOAQAVAAQAPAAAMgHQAIgFAJgLIBeAJQgWAmgfAQQgeAQg4AAQgxAAgdgNgAgjg3QgIAMgDAWIBdAAQgDgbgMgMQgMgNgTAAQgWAAgOASg");
	this.shape_46.setTransform(148.8,42.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAkB/IAAiIQAAgXgJgKQgIgKgQAAQgQAAgLAOQgLANAAAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAWAYgBAxIAACdg");
	this.shape_47.setTransform(116.8,42.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhOB1QgcgPgSgeQgTgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAAKIi+AAQACAYALALQANAQAWAAQANAAANgHQAIgFAJgLIBeAJQgWAmgfAQQgeAQg4AAQgxAAgdgNgAgjg3QgIAMgDAWIBdAAQgDgbgMgMQgMgNgTAAQgWAAgOASg");
	this.shape_48.setTransform(84.8,42.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgRgLgWQgLgWAAglQAAglANgaQAKgSAQgPQARgPASgIQAcgLAqAAQA9AAAgAWQAgAWANAqIhaALQgEgPgLgJQgLgHgTgBQgXABgOAQQgPARAAAiQAAAfAPAPQAOAQAWAAQASAAANgJQANgKAGgUIBbALQgIAcgRAUQgRAVgaAMQgbALgpAAQgnAAgagHg");
	this.shape_49.setTransform(52.8,42.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQAEAYAJANQARAVAeAAQAWAAAMgKQAMgLABgOQAAgOgMgKQgLgLgrgJQhFgQgegZQgegaAAgoQAAgbAQgXQAPgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgWAAQgSAAgKAIQgJAIAAALQAAAIAIAHQAIAHAcAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgTAcQgRAcghAOQghAPgyAAQhXAAghgig");
	this.shape_50.setTransform(19.3,37.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_51.setTransform(196.3,37.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_52.setTransform(203.4,46.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhOB0QgcgOgTgeQgSgeAAgqQAAg5AlgkQAmgkBCAAQA0AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXAKALQAOAQAVAAQAPAAAMgHQAIgEAJgLIBeAIQgWAlgeARQgfAQg4AAQgxAAgdgOgAgjg3QgJAMgCAWIBdAAQgDgcgLgMQgNgLgUgBQgVABgOARg");
	this.shape_53.setTransform(155.7,51.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAkB/IAAiIQAAgXgJgKQgIgKgRAAQgPAAgMAOQgLANABAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAVgKQATgLAdAAQAoAAAXAXQAWAYgBAxIAACdg");
	this.shape_54.setTransform(123.6,50.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhOB0QgcgOgSgeQgTgeAAgqQAAg5AlgkQAmgkBBAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXAKALQAOAQAVAAQAPAAAMgHQAIgEAJgLIBeAIQgWAlgfARQgeAQg4AAQgxAAgdgOgAgjg3QgIAMgDAWIBdAAQgDgcgMgMQgMgLgTgBQgWABgOARg");
	this.shape_55.setTransform(91.7,51.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgHQgLgJgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_56.setTransform(59.7,51.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ah1CQQghgigFg0IBlgGQAEAYAJANQARAVAeAAQAWAAANgKQALgLABgOQAAgOgMgKQgMgLgpgJQhGgQgegZQgegaAAgoQAAgbAQgXQAPgYAfgNQAegOA1AAQBCAAAjAZQAiAYAGA2IhjAGQgEgYgNgKQgNgLgWAAQgSAAgKAIQgJAIAAALQAAAIAIAHQAIAHAcAGQBEAPAfAPQAdAPAPAWQANAXAAAcQAAAhgTAcQgSAcggAOQghAPgyAAQhXAAgigig");
	this.shape_57.setTransform(26.2,46.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#333333").ss(1,1,1).p("EAtXgUsIJck2AZN1ZIAACbAZN30IAACbEArGgUxIr9gaIl8gOEArGgUxIgHgGIH1nBEAsSgUuIhMgDII5HlEAsLgUoIAHgGIIamxEAsSgUuIK/F+EAtXgUsIhFgCEAtXgUsIJ1EdARCBrQPlk1AHWPQFtpvMQSjApo4wIAADmIFAgTII6gkIDvgPIAADmA6M3WIAAEEIivAAI2/AAIjWAAIJwlAImaFAAyEgEQhcFfCcFKQlbAmuwoBQh+KeojI9Eg3QgTSIJNFFIl3lF");
	this.shape_58.setTransform(521.7,307.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF0000").ss(1,1,1).p("AQpl1QpmvKjKojQmUxQT2JjQU3ooniRKQjrIYqcOggAydnlQnTrhjkntQqm23WPKrQVto/pDS/Qj5IJpjNRgEgKLAqZQ4l7LadNbQZMqe7EYOg");
	this.shape_59.setTransform(524.2,355.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#0066CC").ss(1,1,1).p("Aaz1jMAAAAp3IsgBQAOTp/IAAfjMgpFAAAIAA/jMApFAAAIMgrkMg1lAAeIAALG");
	this.shape_60.setTransform(505.5,530.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("EgN0AoZIAA/kMApFAAAIAAfkgEAFtAh1QbF4O5NKeQovkcjLAAQmaAAQcSMgAbRI1MgpFAAAIAArFMA1lgAeIsgLjIMgrjMAAAAp3IsgBQgAbRI1gEAnxgCugEgnwgjYIDWAAIF4FFgEgnwgjYIJxlAImbFAgEgnwgjYg");
	this.shape_61.setTransform(422.5,410.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AoTcpQZMqe7EYOQ4l7LadNbgAD59iQmUxQT2JjQU3ooniRKQjrIYqcOgQpmvKjKojgAHo6LIAAjmIjvAPIDvgPgAY06fIAAibIF8ANIl8gNIAAibIAACbgA9U6zQqm23WPKrQVto/pDS/Qj5IJpjNRQnTrhjkntgA6l6zIAAkEIAAEEIivAAgAqB8rIFAgUIlAAUIAAjmgAY086g");
	this.shape_62.setTransform(524.2,355.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_51}]},10).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},10).wait(10));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.parent = this;
	this.next_btn.setTransform(890.2,684.7);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(511,383,1026,770);
// library properties:
lib.properties = {
	id: 'F3CBF8A94752F64BBA71DB67F3C29C1C',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/happyvalwav.mp3?1524698149771", id:"happyvalwav"}
	],
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
an.compositions['F3CBF8A94752F64BBA71DB67F3C29C1C'] = {
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


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;