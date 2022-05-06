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
	this.shape.graphics.f("#330000").s().p("Aj1L2Igqg3QgWgdgLgTQgdgxgEg5QAAAAABAAQAAgBABAAQAAAAABAAQABABAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABACABAHQACAgAQAhQANAbAYAgIAqA2QAXAhAMAaQgNgMgVgbgAjaMCQAHgMACgQIABgdIAAg2QAAgUgBgJIgDgPQgCgJAAgHQAAgFAEAAQAHAeAAA4QABAjgCAWIgFAhgAFcLvQgigugNgZQgUgngFgtQAHAGAEAMIAGAWQASBBAzAtQAKglAFgnIAEgdIAFgeQACgJAEgIQAGAFgCAPIgMBPQgGAkgEARQgDANgHABIgBAAQgHAAgIgJgADjLgIAFgRIAAgKIAAgKIAEgeQADgTgEgKQAEgCABgFIABgLQACgLALgEIgLAsIAAAMQAAAHgCAEIgDAMQgCAGABANQABANgDAGIgCAHIgCAHIABAJQAAAFgDACQgFgGADgMgAh1LsQAQgeAFgMQAIgVAAgRIAAgLQgBgGABgEIAEgNQABgGAAgJIABgPQACgHADAAQAFAMgBAQQAAAKgEATIgDAVQgFAYgGAQQgHAVgMAPgAiELQQgEgNgQgfQgRgggKgYQgJgYgJgJQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQACABACACQALARAPAdQARAlAGAKQAMAXADAJQAGAUgIAOQAAgPgFgOgAC8LXIgfgmQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIADADIAbAdQADADAPAJQAMAIAEAHIgBACQgVgFgPgQgAG/LcQgVgxgMg2IAIAAIAYBUQAGACADgLIAWhVIAIgYQAHgSAOgNQgMAWgJAgIgOA5QgGAbgLAigAgILJQgGgDgFgLIgshrQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAFAFAIARIAiBPQACAFADABQACABAEgCQARgIAFgHQAEgGAEgOIAMg2QAHAJgDAVQgDAUgDAJQgEAQgJAKQgJAIgNAGQgFADgEAAIgEAAgACPKlIADgFQACgFgBgIIAAhDQAAgHABgEQgHADgFgCQALgKALgFQAdgOAmAJQARAEAMAIQAFADACADIAHgLQAGgJAEgEQAFgFAIgCQAFgCALAAIASAAQANAAAGACQAIABAGAFQABADgGAAIgngBQgMAAgGABQgP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");
	this.shape.setTransform(58.01,79.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,116,159.4), null);


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
	this.shape.graphics.f().s("#960018").ss(19,1,1).p("Eg37AAAMBv3AAA");
	this.shape.setTransform(357.975,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#960018").ss(10,1,1).p("Eg37gYxMA1jAxjMA6Ugxj");
	this.shape_1.setTransform(357.975,158.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("Eg37gYxMBv3AAAMg6UAxjg");
	this.shape_2.setTransform(357.975,158.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-9.5,-9.5,735,331.7), null);


(lib.Letter = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#7E0018").ss(2,1,1).p("ApnzLITPAAMAAAAmXIzPAAg");
	this.shape.setTransform(61.55,122.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCF7B7").s().p("ApnTMMAAAgmXITPAAMAAAAmXg");
	this.shape_1.setTransform(61.55,122.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Letter, new cjs.Rectangle(-1,-1,125.1,247.5), null);


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

	// Layer_2
	this.instance = new lib.Letter();
	this.instance.setTransform(84.65,218.45,1,1,0,0,0,61.6,122.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(22.1,94.7,125.1,247.5), null);


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
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(232.2,198.25,3.2106,0.9456,0,-90,90,84.8,341.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7E0018").ss(4,1,1).p("Ay1+kMAlrAAAMAAAA9JMglrAAAg");
	this.shape.setTransform(353.175,199.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8EF6F").s().p("Ay1elMAAAg9JMAlrAAAMAAAA9Jg");
	this.shape_1.setTransform(353.175,199.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-2.3,-2.3,478.1,399.90000000000003), null);


// stage content:
(lib.PracticeCardPValle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,9,20,29,38,39];
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
		
		this.next_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(2);
		}
	}
	this.frame_9 = function() {
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
			this.gotoAndPlay(11);
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
		
		this.next_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(21);
		}
	}
	this.frame_29 = function() {
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
			this.gotoAndPlay(31);
		}
	}
	this.frame_38 = function() {
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
			this.gotoAndPlay(40);
		}
	}
	this.frame_39 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11).call(this.frame_20).wait(9).call(this.frame_29).wait(9).call(this.frame_38).wait(1).call(this.frame_39).wait(1));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(890.15,684.65);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).to({_off:true},39).wait(1));

	// Card
	this.instance = new lib.Symbol2();
	this.instance.setTransform(195.4,387.65,1,1,0,0,0,73.1,203.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({regX:84.6,regY:218.4,scaleX:1.2451,rotation:10,x:227.85,y:239.65},0).wait(1).to({scaleX:1.4902,rotation:20,x:255.3,y:120.4},0).wait(1).to({scaleX:1.7353,rotation:30,x:290.2,y:44.65},0).wait(1).to({scaleX:1.9804,rotation:40,x:333.2,y:11.95},0).wait(1).to({scaleX:2.2255,rotation:50,x:385.35,y:22.2},0).wait(1).to({scaleX:2.4706,rotation:60,x:447.55,y:74.95},0).wait(1).to({scaleX:2.7157,rotation:70,x:520.8,y:170.2},0).wait(1).to({scaleX:2.9608,rotation:80,x:606.15,y:307.6},0).wait(1).to({scaleX:3.2059,rotation:90,x:704.9,y:487.25},0).wait(1).to({regX:84.9,regY:341.2,scaleX:3.2,x:584.7,y:488.35,mode:"synched",startPosition:0},0).wait(1).to({regX:84.6,regY:218.4,scaleX:3.2012,scaleY:0.7838,x:680.95,y:487.3},0).wait(1).to({scaleX:3.2024,scaleY:0.5676,x:654.45},0).wait(1).to({scaleX:3.2036,scaleY:0.3515,x:627.9,y:487.35},0).wait(1).to({scaleX:3.2048,scaleY:0.1353,x:601.35},0).wait(1).to({scaleX:3.206,scaleY:0.0809,rotation:0,skewX:-90,skewY:90,x:574.8},0).wait(1).to({scaleX:3.2072,scaleY:0.2971,x:548.3},0).wait(1).to({scaleX:3.2084,scaleY:0.5133,x:521.75},0).wait(1).to({scaleX:3.2096,scaleY:0.7294,x:495.2},0).wait(1).to({scaleX:3.2108,scaleY:0.9456,x:468.65},0).to({_off:true},1).wait(10));

	// Words
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("AAkArIgBgDIgEgBIg9AAIgDAAIgCAEIgCAAIAAgEQAAgIACgFQADgJAJgHQAFgEAMgFIAIgDIAKgHQADgDAAgFQAAgFgDgDQgEgDgHAAQgHAAgIAEQgHAEAAAEIABAEIgCABIgPgQIACgCIADABIABAAIAEgCQAMgMASAAQAOAAAIAHQAIAHAAALQAAALgHAHQgGAEgIAEIgKAEIgFADIgJAEIgEAEIAvAAIAEAAIABgDIACAAIAAAWg");
	this.shape.setTransform(654.05,673.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("AAkArIgBgDIgEgBIg9AAIgDAAIgCAEIgCAAIAAgEQAAgIACgFQADgJAJgHQAFgEAMgFIAIgDIAKgHQADgDAAgFQAAgFgEgDQgDgDgHAAQgHAAgIAEQgHAEAAAEIABAEIgCABIgPgQIACgCIADABIABAAIAEgCQAMgMASAAQAOAAAIAHQAIAHAAALQAAALgHAHQgGAEgJAEIgJAEIgFADIgJAEIgEAEIAvAAIAEAAIABgDIACAAIAAAWg");
	this.shape_1.setTransform(645.5,673.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330000").s().p("AgZAfQgFgFgDgGQgEgKAAgKQAAgNAHgLQAFgIAJgEQAHgFAJAAQAQAAAKALQAMALAAAUIgCAMQgCAHgDAFQgFAIgJAFQgHADgKAAQgPABgKgLgAgOgSQgFAHAAALQAAALAFAIQAGAIAIAAQAKAAAFgIQAFgIAAgLQAAgLgFgHQgFgJgKAAQgIAAgGAJg");
	this.shape_2.setTransform(636.925,673.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("AAkArIgBgDIgEgBIg9AAIgDAAIgCAEIgCAAIAAgEQAAgIACgFQADgJAJgHQAFgEAMgFIAIgDIAKgHQADgDAAgFQAAgFgEgDQgDgDgHAAQgHAAgIAEQgHAEAAAEIABAEIgCABIgPgQIACgCIADABIABAAIAEgCQAMgMASAAQAOAAAIAHQAIAHAAALQAAALgHAHQgGAEgJAEIgJAEIgFADIgJAEIgEAEIAvAAIAEAAIABgDIACAAIAAAWg");
	this.shape_3.setTransform(628.4,673.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330000").s().p("AgKAhIAAgCIACgBIABgDIAAgXIgTgaIgFgGIgFgCIAAgCIAeAAIAAACQgEABAAACIACAFIAJAOIAJgOQADgDAAgCQAAgCgEgBIAAgCIAcAAIAAACIgEACIgGAGIgTAaIAAAXIABADIADABIAAACg");
	this.shape_4.setTransform(617.475,674.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgBgFIgDgHIgdAAIgEAHIgCAFQAAACAEABIAAACIgXAAIAAgCIACgBIADgEIAYgwIABgEQABgDgEgBIAAgCIAZAAIAAACQgEABAAADIACAEIAZAvIADAFIAEABIAAACgAgLAHIATAAIgJgUg");
	this.shape_5.setTransform(610.55,674.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#330000").s().p("AAaAoIAAgCIADgBIABgDIAAgxIgfA3Igdg3IAAAxIABADIACABIAAACIgXAAIAAgCIADgBIABgDIAAhDIgBgCIgDgCIAAgCIAfAAIAAACQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAADIAVAoIAWgoIACgDQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIAAgCIAeAAIAAACIgDACIgBACIAABDIABADIADABIAAACg");
	this.shape_6.setTransform(600.55,673.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#330000").s().p("AgLAjIAAgCIADgBIABgDIAAgvIgTAAIgDABIgCADIgBAAIAAgUIABAAIACADIADABIA1AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgTAAIAAAvIABADIACABIAAACg");
	this.shape_7.setTransform(686.675,658.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgXAAIAAgCIADgBIAAgDIAAg1IAAgDIgDgBIAAgCIAqAAIANABQAEABAEACQAGAFAAAKQABAIgFAFQgEADgKACIANARIAFAHQACACADAAIAAACgAgRgFIAXAAIAIgBQAEgCAAgFQAAgEgDgBQgDgCgGAAIgXAAg");
	this.shape_8.setTransform(679.25,658.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#330000").s().p("AATAoIAAgCQAEgBAAgDIgBgDIgFgMIgkAAIgFAMIgBADQAAADAEABIAAACIgbAAIAAgCIAEgCIADgEIAdg8IABgFQAAgDgDgBIAAgCIAbAAIAAACQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAIABAEIAeA9IAEAFIAEACIAAACgAgOAIIAaAAIgMgbg");
	this.shape_9.setTransform(670.125,658.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgYAAIAAgCIAEgBIABgDIAAg1IgBgDIgEgBIAAgCIArAAIAMABQAFABADACQAIAFgBAKQAAAIgEAFQgFADgJACIAMARIAGAHQACACADAAIAAACgAgRgFIAXAAIAIgBQAEgCgBgFQAAgEgCgBQgDgCgGAAIgXAAg");
	this.shape_10.setTransform(658.25,658.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_11.setTransform(650.175,658.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#330000").s().p("AgLAjIAAgCIADgBIABgDIAAgvIgTAAIgDABIgCADIgBAAIAAgUIABAAIACADIADABIA1AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgTAAIAAAvIABADIACABIAAACg");
	this.shape_12.setTransform(642.725,658.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#330000").s().p("AgWAdQgGgDgCgGQgCgFgBgIIAAgiIAAgCIgDgCIAAgCIAXAAIAAACIgDACIAAACIAAAfIABAJQAAACACACQAGAEAIAAQAIAAAFgEQADgCABgCIABgJIAAgfIgBgCIgDgCIAAgCIAWAAIAAACIgDACIgBACIAAAiQAAAMgEAGQgIAJgVAAQgNgBgJgEg");
	this.shape_13.setTransform(635.15,658.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#330000").s().p("AgiAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAqAAQAMAAAHAEQAEACACAEQACAEAAAFQAAAKgHAEQgGAFgOAAIgXAAIAAAVIABADIAEABIAAACgAgPgFIAWAAIAJgBQADgCAAgFQAAgEgDgCQgCgBgHAAIgWAAg");
	this.shape_14.setTransform(627.25,658.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#330000").s().p("AAUAhIAAgCIADgBIABgDIAAgkIgYAqIgYgqIAAAkIAAADIAEABIAAACIgXAAIAAgCIADgBIACgDIAAg1IgCgDIgDgBIAAgCIAcAAIAAACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAADABADIAQAdIARgdQACgEAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIAAgCIAbAAIAAACIgEABIAAADIAAA1IAAADIAEABIAAACg");
	this.shape_15.setTransform(618.25,658.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#330000").s().p("AgZAaQgNgJAAgRQAAgQANgJQAKgIAPAAQAPAAALAIQANAJAAAQQAAARgNAJQgLAIgPAAQgPAAgKgIgAgQgOQgGAGABAIQgBAJAGAGQAGAHAKAAQAKAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgKAAQgKAAgGAHg");
	this.shape_16.setTransform(609.1,658.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#330000").s().p("AgcAhQgIgGgEgIQgEgIAAgLQAAgNAIgMQANgPAZAAQAJAAAHACQAHABAKAHIAGACIADgBIABABIgLARIgCgBIABgCQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgFgDQgLgGgLAAQgNAAgIAHQgKAIAAAMQAAANAKAIQAIAHANAAQALAAALgGIAFgEQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgBgBIACgBIALAQIgBACIgDgCIgGADQgKAGgHACQgHACgJAAQgSAAgMgJg");
	this.shape_17.setTransform(599.825,658.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_18.setTransform(641.725,643.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#330000").s().p("AAeAjIgCgDIgDgBIg3AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAXAAIAAACIgDABIgBADIAAAvIAkAAIADgBIACgDIABAAIAAAUg");
	this.shape_19.setTransform(634.575,643.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#330000").s().p("AAeAjIgCgDIgDgBIg3AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAXAAIAAACIgDABIgBADIAAAvIAkAAIADgBIACgDIABAAIAAAUg");
	this.shape_20.setTransform(627.675,643.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIgCgFIgEgHIgcAAIgEAHIgCAFQAAACAFABIAAACIgZAAIAAgCIADgBIADgEIAYgwIACgEQAAgDgEgBIAAgCIAYAAIAAACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIABAEIAZAvIADAFIADABIAAACgAgLAHIAUAAIgKgUg");
	this.shape_21.setTransform(619.85,643.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#330000").s().p("AgNAoIAAgCQABAAABAAQAAgBABAAQAAgBABAAQAAgBAAAAIgCgFIgcg7IgDgGQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgCIAdAAIAAACQgBAAgBAAQgBABAAAAQgBAAAAABQAAAAAAABIABAFIAVAuIAVguIABgFQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAgBAAIAAgCIAcAAIAAACQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABIgDAGIgcA7IgCAFQAAAAAAABQABAAAAABQABAAAAABQABAAABAAIAAACg");
	this.shape_22.setTransform(612.125,642.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#330000").s().p("AATAoIAAgCQAEgBAAgCIgBgEIgFgLIgkAAIgFALIgBAEQAAACAEABIAAACIgbAAIAAgCIAEgBIADgFIAdg9IABgEQAAgDgDgBIAAgCIAbAAIAAACQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAABIABADIAeA9IAEAGIAEABIAAACgAgOAJIAaAAIgMgcg");
	this.shape_23.setTransform(599.675,642.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#330000").s().p("AgPAtQAHgJAEgGQAEgMAAgSQAAgNgCgLQgEgJgJgKIAHgGQAHAGAFAIQAMARAAASQgBAOgGAOQgGAOgLAHg");
	this.shape_24.setTransform(709.8,460.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#330000").s().p("AgGAfQgCgDgBgEQABgDACgDQADgDADAAQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAQgDAAgDgDgAgGgRQgCgDgBgEQABgEACgCQADgDADAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_25.setTransform(706.3,460.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#330000").s().p("AgGAHQgDgDABgEQgBgDADgDQADgDADAAQAEAAADADQACADABADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_26.setTransform(699.6,463.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#330000").s().p("AgKAhIAAgCIACgBIABgDIAAgXIgTgaIgFgGIgFgCIAAgCIAeAAIAAACQgEABAAACIACAFIAJAOIAJgOQADgDAAgCQAAgCgEgBIAAgCIAcAAIAAACIgEACIgGAGIgTAaIAAAXIABADIADABIAAACg");
	this.shape_27.setTransform(695.075,460.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#330000").s().p("AgkAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAlAAQANAAAGADQAKAEAEAKQADAHAAAIQAAARgKAIQgEAEgGACQgGACgKAAgAgRAVIARAAQALAAAFgFQAFgGAAgKQAAgJgFgGQgDgCgEgCIgJgBIgRAAg");
	this.shape_28.setTransform(687.325,460.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIgCgFIgEgHIgcAAIgEAHIgCAFQABACAEABIAAACIgZAAIAAgCIAEgBIACgEIAYgwIACgEQAAgDgEgBIAAgCIAYAAIAAACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIABAEIAZAvIADAFIADABIAAACgAgLAHIAUAAIgKgUg");
	this.shape_29.setTransform(678.9,460.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#330000").s().p("AANAoIAAgCQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIgDgFIgWgdIgNAKIAAAWIABADIADABIAAACIgZAAIAAgCIADgBIABgDIAAhDIgBgCIgDgCIAAgCIAZAAIAAACIgDACIgBACIAAAcIAhgbQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIAAgCIAhAAIAAACIgDABIgFAEIgEAEIgcAVIAfAkIAGAHIAFACIAAACg");
	this.shape_30.setTransform(669.8,460.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#330000").s().p("AgGAOQAFgDABgDIADgHIgDAAQgEAAgDgCQgCgCAAgFQAAgEACgCQADgDAEAAQAEAAADAEQADAEgBAGQAAAMgMAJg");
	this.shape_31.setTransform(659.85,464.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#330000").s().p("AAJAhIAAgCQABAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAIAAgBIgDgEIgRgVIgJAHIAAARIABADIADABIAAACIgYAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAYAAIAAACIgDABIgBADIAAAWIAYgUQAAgBABAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAgBAAIAAgCIAeAAIAAACIgEABIgIAGIgWASIAZAbIAGAHQACACADAAIAAACg");
	this.shape_32.setTransform(654.225,460.925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#330000").s().p("AAQAhIAAgCQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgDgDIghghIAAAkIAAADIADABIAAACIgWAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAaAAIAAACQgBAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIACADIAiAiIAAgjIgBgDIgDgBIAAgCIAWAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_33.setTransform(645.45,460.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#330000").s().p("AgLAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAXAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_34.setTransform(639.275,460.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#330000").s().p("AgZAaQgMgJAAgRQAAgQAMgJQAKgIAPAAQAPAAALAIQAMAJAAAQQAAARgMAJQgKAIgQAAQgPAAgKgIgAgQgOQgGAGABAIQgBAJAGAGQAGAHAKAAQAKAAAHgHQAFgGABgJQgBgIgFgGQgHgHgKAAQgKAAgGAHg");
	this.shape_35.setTransform(633.3,460.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#330000").s().p("AAJAhIAAgCQABAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAIAAgBIgDgEIgRgVIgJAHIAAARIABADIADABIAAACIgYAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAYAAIAAACIgDABIgBADIAAAWIAYgUQAAgBABAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIAAgCIAeAAIAAACIgEABIgIAGIgWASIAZAbIAGAHQACACADAAIAAACg");
	this.shape_36.setTransform(622.125,460.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgDgDIgighIAAAkIABADIADABIAAACIgWAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAZAAIAAACQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIACADIAiAiIAAgjIgBgDIgDgBIAAgCIAWAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_37.setTransform(613.35,460.925);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#330000").s().p("AgLAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAXAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_38.setTransform(607.175,460.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#330000").s().p("AggAeQgHgGgDgIQgDgIAAgIQAAgLAGgKQAMgTAbgBQAVAAAMAMQANAMAAASQAAALgHAKQgLATgcAAQgUABgMgMgAgSgUQgKAIABAMQgBANAKAIQAHAHALAAQALAAAIgHQAEgEADgGQACgFAAgFQAAgNgJgIQgIgHgLAAQgLAAgHAHg");
	this.shape_39.setTransform(600.35,460.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#330000").s().p("AAMAKIgCgDIgDgBIgNAAIgDABIgBADIgCAAIAAgTIACAAIABADIADABIAOAAIADgBIABgDIABAAIAAATg");
	this.shape_40.setTransform(593.875,460.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgXAAIAAgCIADgBIAAgDIAAg1IAAgDIgDgBIAAgCIAqAAIANABQAEABAEACQAGAFAAAKQABAIgFAFQgEADgKACIANARIAFAHQACACADAAIAAACgAgRgFIAXAAIAIgBQAEgCAAgFQAAgEgDgBQgDgCgGAAIgXAAg");
	this.shape_41.setTransform(788.6,430.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#330000").s().p("AgZAaQgNgJAAgRQAAgQANgJQAKgIAPAAQAPAAALAIQAMAJAAAQQAAARgMAJQgLAIgPAAQgPAAgKgIgAgQgOQgFAGgBAIQABAJAFAGQAGAHAKAAQAKAAAHgHQAFgGAAgJQAAgIgFgGQgHgHgKAAQgKAAgGAHg");
	this.shape_42.setTransform(780.05,430.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#330000").s().p("AAUAhIAAgCIADgBIABgDIAAgkIgYAqIgYgqIAAAkIAAADIAEABIAAACIgXAAIAAgCIADgBIACgDIAAg1IgCgDIgDgBIAAgCIAcAAIAAACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAADABADIAQAdIARgdQACgEAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIAAgCIAbAAIAAACIgEABIAAADIAAA1IAAADIAEABIAAACg");
	this.shape_43.setTransform(770.8,430.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgBgFIgDgHIgdAAIgEAHIgCAFQABACADABIAAACIgXAAIAAgCIACgBIADgEIAYgwIABgEQABgDgEgBIAAgCIAZAAIAAACQgEABAAADIACAEIAZAvIADAFIADABIAAACgAgLAHIATAAIgJgUg");
	this.shape_44.setTransform(761.75,430.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#330000").s().p("AgZAaQgMgJAAgRQAAgQAMgJQAKgIAPAAQAPAAALAIQAMAJAAAQQAAARgMAJQgKAIgQAAQgPAAgKgIgAgQgOQgGAGABAIQgBAJAGAGQAGAHAKAAQAKAAAHgHQAFgGABgJQgBgIgFgGQgHgHgKAAQgKAAgGAHg");
	this.shape_45.setTransform(750.3,430.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#330000").s().p("AAPAhIAAgCIACgBIABgDIAAgXIgkAAIAAAXIABADIADABIAAACIgXAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAXAAIAAACIgDABIgBADIAAATIAkAAIAAgTIgBgDIgCgBIAAgCIAXAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_46.setTransform(741.65,430.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#330000").s().p("AgYAaQgGgEgDgHQgEgHAAgIQAAgLAHgIQAKgOAVAAQAIAAAGACQAGABAIAFIAFACIACgBIACABIgKAPIgCgBIAAgBIABgBQAAgDgIgDQgIgEgHAAQgKAAgHAGQgIAGAAAJQAAAKAIAGQAHAGAKAAQAIAAAIgEQAHgEAAgCIgBgCIACgBIAKAPIgCABIgCgBIgFACQgIAFgGABQgGACgIAAQgPAAgKgIg");
	this.shape_47.setTransform(733.425,430.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#330000").s().p("AgWAdQgGgDgCgFQgDgGABgIIAAghIgBgEIgDgBIAAgBIAXAAIAAABIgDABIAAAEIAAAeIABAIQABADABACQAFAEAJAAQAIAAAFgEQADgCABgDIABgIIAAgeIgBgEIgDgBIAAgBIAWAAIAAABIgDABIgBAEIAAAhQAAAMgEAFQgIAJgVAAQgNABgJgFg");
	this.shape_48.setTransform(725.05,430.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#330000").s().p("AAVAhIAAgCIACgBIABgDIAAgkIgYAqIgYgqIAAAkIABADIACABIAAACIgVAAIAAgCIACgBIABgDIAAg1IgBgDIgCgBIAAgCIAcAAIAAACQgBAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAQABADACADIAPAdIAQgdQAEgEAAgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIAAgCIAbAAIAAACIgDABIAAADIAAA1IAAADIADABIAAACg");
	this.shape_49.setTransform(715.95,430.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#330000").s().p("AgZAaQgNgJAAgRQAAgQANgJQAKgIAPAAQAQAAAKAIQANAJAAAQQAAARgNAJQgLAIgPAAQgPAAgKgIgAgQgOQgFAGgBAIQABAJAFAGQAHAHAJAAQAKAAAGgHQAHgGgBgJQABgIgHgGQgGgHgKAAQgJAAgHAHg");
	this.shape_50.setTransform(703.8,430.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgYAAIAAgCIAEgBIABgDIAAg1IgBgDIgEgBIAAgCIArAAIANABQAEABADACQAIAFgBAKQABAIgFAFQgFADgJACIANARIAFAHQACACADAAIAAACgAgRgFIAXAAIAIgBQADgCAAgFQAAgEgCgBQgDgCgGAAIgXAAg");
	this.shape_51.setTransform(695.7,430.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_52.setTransform(687.625,430.225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#330000").s().p("AgiAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAqAAQANAAAGAEQAEACACAEQACAEAAAFQAAAKgGAEQgHAFgOAAIgWAAIAAAVIABADIACABIAAACgAgOgFIAVAAIAIgBQAEgCAAgFQAAgEgEgCQgCgBgGAAIgVAAg");
	this.shape_53.setTransform(679.95,430.225);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#330000").s().p("AgZAaQgMgJAAgRQAAgQAMgJQAKgIAPAAQAQAAAKAIQAMAJAAAQQAAARgMAJQgKAIgQAAQgPAAgKgIgAgQgOQgGAGAAAIQAAAJAGAGQAHAHAJAAQAKAAAHgHQAFgGAAgJQAAgIgFgGQgHgHgKAAQgJAAgHAHg");
	this.shape_54.setTransform(668.65,430.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#330000").s().p("AgLAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAXAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_55.setTransform(662.625,430.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#330000").s().p("AgYAaQgGgEgDgHQgEgHAAgIQAAgLAHgIQAKgOAVAAQAIAAAGACQAGABAIAFIAFACIACgBIACABIgKAPIgCgBIAAgBIABgBQAAgDgIgDQgIgEgHAAQgKAAgHAGQgIAGAAAJQAAAKAIAGQAHAGAKAAQAIAAAIgEQAHgEAAgCIgBgCIACgBIAKAPIgCABIgCgBIgFACQgIAFgGABQgGACgIAAQgPAAgKgIg");
	this.shape_56.setTransform(656.775,430.225);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_57.setTransform(648.775,430.225);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgYAAIAAgCIAEgBIABgDIAAg1IgBgDIgEgBIAAgCIArAAIANABQAEABAEACQAGAFAAAKQABAIgFAFQgFADgJACIANARIAFAHQACACADAAIAAACgAgRgFIAXAAIAIgBQAEgCAAgFQAAgEgDgBQgCgCgHAAIgXAAg");
	this.shape_58.setTransform(640.9,430.225);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#330000").s().p("AgiAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAqAAQAMAAAHAEQAEACACAEQACAEAAAFQAAAKgHAEQgGAFgOAAIgXAAIAAAVIACADIADABIAAACgAgPgFIAWAAIAJgBQADgCAAgFQAAgEgDgCQgCgBgHAAIgWAAg");
	this.shape_59.setTransform(632.85,430.225);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#330000").s().p("AgZAaQgNgJAAgRQAAgQANgJQAKgIAPAAQAPAAALAIQANAJAAAQQAAARgNAJQgLAIgPAAQgPAAgKgIgAgQgOQgFAGgBAIQABAJAFAGQAHAHAJAAQAKAAAGgHQAHgGgBgJQABgIgHgGQgGgHgKAAQgJAAgHAHg");
	this.shape_60.setTransform(621.55,430.225);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#330000").s().p("AgYAaQgGgEgDgHQgEgHAAgIQAAgLAHgIQAKgOAVAAQAIAAAGACQAGABAIAFIAFACIACgBIACABIgKAPIgCgBIAAgBIABgBQAAgDgIgDQgIgEgHAAQgKAAgHAGQgIAGAAAJQAAAKAIAGQAHAGAKAAQAIAAAIgEQAHgEAAgCIgBgCIACgBIAKAPIgCABIgCgBIgFACQgIAFgGABQgGACgIAAQgPAAgKgIg");
	this.shape_61.setTransform(613.125,430.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#330000").s().p("AgZAaQgMgJAAgRQAAgQAMgJQAKgIAPAAQAPAAALAIQAMAJAAAQQAAARgMAJQgLAIgPAAQgPAAgKgIgAgQgOQgGAGAAAIQAAAJAGAGQAHAHAJAAQAKAAAHgHQAFgGAAgJQAAgIgFgGQgHgHgKAAQgJAAgHAHg");
	this.shape_62.setTransform(604.65,430.225);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#330000").s().p("AgiAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAqAAQAMAAAHAEQAEACACAEQACAEAAAFQAAAKgGAEQgHAFgOAAIgWAAIAAAVIABADIACABIAAACgAgOgFIAVAAIAIgBQAEgCAAgFQAAgEgEgCQgCgBgGAAIgVAAg");
	this.shape_63.setTransform(596.6,430.225);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_64.setTransform(785.225,414.875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#330000").s().p("AgkAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAlAAQANAAAGADQAKAEAEAKQADAHAAAIQAAARgKAIQgEAEgGACQgGACgKAAgAgRAVIARAAQALAAAFgFQAFgGAAgKQAAgJgFgGQgDgCgEgCIgJgBIgRAAg");
	this.shape_65.setTransform(777.125,414.875);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#330000").s().p("AgbAcIgBgBIgCACIgCgBIAGgQIACABIAAAAIABADQADACAIACQAGACAGAAQAHAAAFgBQAGgCAAgFQAAgDgEgCIgKgBIgIgBIgMgCIgHgCQgDgDgDgDQgCgEAAgFQAAgKAKgGQAIgFAMAAQAGAAAGABIANAFIAEACIADgCIABABIgIAPIgBAAIgBgDQgEgDgGgCQgHgCgGAAQgFAAgFABQgGADAAAEQAAABAAAAQAAABABAAQAAABABAAQAAAAABABQADABAJABIAIABQAMAAAGAEQAEACACADQADAEAAAGQAAAKgJAGQgJAFgPAAQgNAAgOgGg");
	this.shape_66.setTransform(766.15,414.875);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#330000").s().p("AgZAaQgMgJAAgRQAAgQAMgJQAKgIAPAAQAQAAAKAIQAMAJAAAQQAAARgMAJQgKAIgQAAQgPAAgKgIgAgQgOQgGAGAAAIQAAAJAGAGQAHAHAJAAQAKAAAHgHQAFgGAAgJQAAgIgFgGQgHgHgKAAQgJAAgHAHg");
	this.shape_67.setTransform(758.2,414.875);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#330000").s().p("AAeAjIgCgDIgDgBIg3AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAXAAIAAACIgDABIgBADIAAAvIAkAAIADgBIACgDIABAAIAAAUg");
	this.shape_68.setTransform(750.675,415.075);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgBgFIgDgHIgdAAIgEAHIgBAFQgBACAEABIAAACIgXAAIAAgCIACgBIADgEIAYgwIABgEQABgDgEgBIAAgCIAZAAIAAACQgEABAAADIACAEIAZAvIADAFIADABIAAACgAgLAHIATAAIgJgUg");
	this.shape_69.setTransform(742.85,414.875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#330000").s().p("AgZAaQgFgEgEgGQgDgHAAgJQAAgKAHgJQALgOAVAAQAJAAAMAEIAGACIACgBIACAAIgIARIgBgBIAAAAQAAgCgFgDQgIgEgJAAQgKAAgGAGQgHAGAAAJQAAAKAGAGQAHAGALAAQALAAAIgFIAAgKIgPAAIgDABIgBADIgCAAIAAgQIACAAIABADIADABIAfAAIAAABIgCABIgBADIAAAOIABADIACABIAAACQgTAKgSAAQgQAAgKgIg");
	this.shape_70.setTransform(734.475,414.875);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_71.setTransform(726.425,414.875);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgYAAIAAgCIAEgBIABgDIAAg1IgBgDIgEgBIAAgCIArAAIAMABQAFABADACQAIAFgBAKQAAAIgEAFQgFADgJACIAMARIAGAHQACACADAAIAAACgAgRgFIAXAAIAIgBQAEgCgBgFQAAgEgCgBQgDgCgGAAIgXAAg");
	this.shape_72.setTransform(718.55,414.875);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#330000").s().p("AAQAhIAAgCQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgCIgEgDIghghIAAAkIAAADIADABIAAACIgWAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAZAAIAAACQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIABADIAjAiIAAgjIgBgDIgDgBIAAgCIAWAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_73.setTransform(706.8,414.875);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_74.setTransform(698.575,414.875);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#330000").s().p("AgkAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAlAAQANAAAGADQAKAEAEAKQADAHAAAIQAAARgKAIQgEAEgGACQgGACgKAAgAgRAVIARAAQALAAAFgFQAFgGAAgKQAAgJgFgGQgDgCgEgCIgJgBIgRAAg");
	this.shape_75.setTransform(690.475,414.875);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_76.setTransform(679.425,414.875);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#330000").s().p("AgWAdQgGgDgCgGQgCgFgBgIIAAgiIAAgCIgDgCIAAgCIAXAAIAAACIgDACIgBACIAAAfIABAIQABAEACABQAGAEAHAAQAKAAAFgEQACgBABgEIABgIIAAgfIgBgCIgDgCIAAgCIAWAAIAAACIgDACIgBACIAAAiQAAAMgFAGQgHAIgVABQgNgBgJgEg");
	this.shape_77.setTransform(671.35,414.95);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#330000").s().p("AAZAnIABgCIgDgFIgHgHQgHADgKABQgPgBgKgHQgNgKAAgQQAAgRANgJQAKgIAQAAQAOAAAKAIQANAJAAARQAAAOgKAKIAGAFQAAABABABQABAAAAAAQABABAAAAQAAAAABAAIACgBIABABIgOANgAgRgUQgGAGAAAJQAAAIAGAHQAGAGAKAAIAIgCQgGgHgFgCIAAgBQADgDADAAQAHAAAIAGQAEgFAAgHQAAgJgGgGQgGgHgJABQgLgBgGAHg");
	this.shape_78.setTransform(663.025,415.45);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#330000").s().p("AgbAcIgBgBIgDACIgBgBIAHgQIABABIAAAAIABADQADACAHACQAHACAHAAQAGAAAFgBQAGgCAAgFQAAgDgFgCIgKgBIgIgBIgLgCIgHgCQgEgDgCgDQgCgEAAgFQAAgKAJgGQAJgFAMAAQAGAAAGABIAOAFIADACIACgCIACABIgIAPIgCAAIgBgDQgDgDgHgCQgGgCgFAAQgHAAgEABQgGADAAAEQAAADADABQADABAIABIAJABQAMAAAHAEQADACACADQADAEAAAGQAAAKgJAGQgJAFgOAAQgOAAgOgGg");
	this.shape_79.setTransform(651.9,414.875);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#330000").s().p("AgZAaQgNgJAAgRQAAgQANgJQAKgIAPAAQAQAAAKAIQANAJAAAQQAAARgNAJQgLAIgPAAQgPAAgKgIgAgQgOQgFAGAAAIQAAAJAFAGQAHAHAJAAQAKAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgKAAQgJAAgHAHg");
	this.shape_80.setTransform(643.95,414.875);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#330000").s().p("AgVAdIgCAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgCAAIAGgSIABABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAQACACAEABIAJACQAFAAADgDQADgDAAgGIAAgkIAAgCIgDgCIAAgCIAXAAIAAACIgDACIgBACIAAAlQAAAKgDAGQgDADgGADQgGACgHAAQgIAAgMgFg");
	this.shape_81.setTransform(636.425,414.95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#330000").s().p("AgLAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAXAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_82.setTransform(631.775,414.875);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#330000").s().p("AAOAhIAAgCIAEgBIABgDIAAgXIgkAAIAAAXIABADIACABIAAACIgXAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAXAAIAAACIgCABIgBADIAAATIAkAAIAAgTIgBgDIgEgBIAAgCIAYAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_83.setTransform(625.7,414.875);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgCIgEgDIgighIAAAkIABADIADABIAAACIgWAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAZAAIAAACQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIACADIAiAiIAAgjIgBgDIgDgBIAAgCIAWAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_84.setTransform(613.9,414.875);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#330000").s().p("AgZAaQgMgJAAgRQAAgQAMgJQAKgIAPAAQAQAAAKAIQAMAJAAAQQAAARgMAJQgKAIgQAAQgPAAgKgIgAgQgOQgGAGAAAIQAAAJAGAGQAHAHAJAAQAKAAAHgHQAFgGAAgJQAAgIgFgGQgHgHgKAAQgJAAgHAHg");
	this.shape_85.setTransform(605.2,414.875);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#330000").s().p("AgYAaQgGgEgDgHQgEgHAAgIQAAgLAHgIQAKgOAVAAQAIAAAGACQAGABAIAFIAFACIACgBIACABIgKAPIgCgBIAAgBIABgBQAAgDgIgDQgIgEgHAAQgKAAgHAGQgIAGAAAJQAAAKAIAGQAHAGAKAAQAIAAAIgEQAHgEAAgCIgBgCIACgBIAKAPIgCABIgCgBIgFACQgIAFgGABQgGACgIAAQgPAAgKgIg");
	this.shape_86.setTransform(596.775,414.875);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIgCgFIgEgHIgcAAIgEAHIgCAFQABACAEABIAAACIgZAAIAAgCIAEgBIACgEIAYgwIACgEQAAgDgEgBIAAgCIAYAAIAAACQgCABAAADIABAEIAZAvIADAFIADABIAAACgAgLAHIAUAAIgKgUg");
	this.shape_87.setTransform(800.4,399.525);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#330000").s().p("AAUAhIAAgCIADgBIABgDIAAgkIgYAqIgYgqIAAAkIAAADIAEABIAAACIgXAAIAAgCIAEgBIABgDIAAg1IgBgDIgEgBIAAgCIAcAAIAAACQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAQAAADACADIAQAdIAQgdQADgEAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIAAgCIAbAAIAAACIgCABIgBADIAAA1IABADIACABIAAACg");
	this.shape_88.setTransform(791.25,399.525);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIgCgFIgEgHIgcAAIgEAHIgCAFQAAACAFABIAAACIgZAAIAAgCIADgBIADgEIAYgwIABgEQAAgDgDgBIAAgCIAZAAIAAACQgDABAAADIABAEIAZAvIADAFIADABIAAACgAgLAHIAUAAIgKgUg");
	this.shape_89.setTransform(782.2,399.525);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#330000").s().p("AAUAhIAAgCIADgBIABgDIAAgkIgYAqIgYgqIAAAkIAAADIAEABIAAACIgXAAIAAgCIADgBIACgDIAAg1IgCgDIgDgBIAAgCIAcAAIAAACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAADABADIAQAdIARgdQACgEAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIAAgCIAbAAIAAACIgEABIAAADIAAA1IAAADIAEABIAAACg");
	this.shape_90.setTransform(773.05,399.525);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgBgFIgDgHIgeAAIgDAHIgBAFQAAACADABIAAACIgYAAIAAgCIAEgBIACgEIAYgwIACgEQgBgDgDgBIAAgCIAYAAIAAACQgDABAAADIACAEIAZAvIADAFIAEABIAAACgAgLAHIATAAIgJgUg");
	this.shape_91.setTransform(761,399.525);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#330000").s().p("AAQAhIAAgCQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgCIgEgDIghghIAAAkIAAADIADABIAAACIgWAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAZAAIAAACQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIABADIAjAiIAAgjIgBgDIgDgBIAAgCIAWAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_92.setTransform(752.35,399.525);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#330000").s().p("AgVAdQgHgDgCgFQgCgGAAgIIAAgiIgBgDIgDgBIAAgBIAXAAIAAABIgDABIgBADIAAAfIACAJQABADACABQAFAEAHAAQAKAAAFgEQACgBABgDIAAgJIAAgfIAAgDIgDgBIAAgBIAWAAIAAABIgDABIgBADIAAAiQAAAMgEAFQgIAKgVgBQgNABgIgFg");
	this.shape_93.setTransform(743.75,399.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#330000").s().p("AgbAcIgBgBIgDACIgBgBIAHgQIABABIAAAAIABADQADACAHACQAHACAHAAQAGAAAFgBQAGgCAAgFQAAgDgFgCIgKgBIgIgBIgLgCIgHgCQgEgDgCgDQgCgEAAgFQAAgKAJgGQAJgFAMAAQAGAAAGABIAOAFIADACIACgCIACABIgIAPIgCAAIgBgDQgDgDgHgCQgGgCgFAAQgHAAgEABQgGADAAAEQAAADADABQADABAIABIAJABQAMAAAHAEQADACACADQADAEAAAGQAAAKgJAGQgJAFgOAAQgOAAgOgGg");
	this.shape_94.setTransform(732.9,399.525);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_95.setTransform(725.425,399.525);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgYAAIAAgCIADgBIACgDIAAg1IgCgDIgDgBIAAgCIArAAIAMABQAFABADACQAIAFgBAKQAAAIgEAFQgEADgKACIAMARIAGAHQACACACAAIAAACgAgRgFIAXAAIAIgBQAEgCgBgFQABgEgDgBQgCgCgHAAIgXAAg");
	this.shape_96.setTransform(717.55,399.525);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_97.setTransform(709.475,399.525);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_98.setTransform(698.775,399.525);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#330000").s().p("AgWAdQgGgDgCgFQgCgGgBgIIAAgiIAAgDIgDgBIAAgBIAXAAIAAABIgDABIAAADIAAAfIAAAJQABADACABQAFAEAIAAQAJAAAGgEQACgBABgDIAAgJIAAgfIAAgDIgDgBIAAgBIAWAAIAAABIgDABIgBADIAAAiQAAAMgFAFQgHAKgVgBQgNABgJgFg");
	this.shape_99.setTransform(690.7,399.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#330000").s().p("AAZAnIABgCIgDgEIgHgIQgHAEgKgBQgPABgKgJQgNgJAAgQQAAgQANgKQAKgIAQAAQAOAAAKAIQANAKAAAQQAAAOgKAJIAGAHQAAAAABABQAAAAABAAQABABAAAAQAAAAABAAIACgBIABABIgOANgAgRgUQgGAGAAAJQAAAJAGAFQAGAHAKAAIAIgBQgGgJgFgBIAAgBQADgDADAAQAHAAAIAHQAEgGAAgHQAAgJgGgGQgGgGgJAAQgLAAgGAGg");
	this.shape_100.setTransform(682.375,400.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#330000").s().p("AgLAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAXAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_101.setTransform(673.225,399.525);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#330000").s().p("AAVAhIAAgCIACgBIABgDIAAgkIgYAqIgYgqIAAAkIABADIACABIAAACIgVAAIAAgCIACgBIABgDIAAg1IgBgDIgCgBIAAgCIAcAAIAAACQgBAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAADACADIAPAdIAQgdQAEgEAAgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIAAgCIAbAAIAAACIgDABIAAADIAAA1IAAADIADABIAAACg");
	this.shape_102.setTransform(666.55,399.525);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIgCgFIgEgHIgcAAIgEAHIgCAFQAAACAFABIAAACIgZAAIAAgCIADgBIADgEIAYgwIACgEQAAgDgEgBIAAgCIAYAAIAAACQgCABAAADIABAEIAZAvIADAFIADABIAAACgAgLAHIAUAAIgKgUg");
	this.shape_103.setTransform(654.5,399.525);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#330000").s().p("AgbAcIgCgBIgCACIgBgBIAHgQIABABIAAAAIABADQADACAHACQAIACAGAAQAGAAAFgBQAGgCAAgFQAAgDgFgCIgJgBIgJgBIgLgCIgHgCQgEgDgCgDQgCgEAAgFQAAgKAJgGQAJgFAMAAQAGAAAGABIANAFIAEACIACgCIACABIgIAPIgCAAIAAgDQgEgDgGgCQgHgCgGAAQgGAAgEABQgGADAAAEQAAADADABQADABAIABIAJABQAMAAAGAEQAEACACADQADAEAAAGQAAAKgJAGQgJAFgOAAQgOAAgOgGg");
	this.shape_104.setTransform(643.6,399.525);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgBgFIgDgHIgdAAIgEAHIgCAFQABACADABIAAACIgXAAIAAgCIACgBIADgEIAYgwIABgEQABgDgEgBIAAgCIAZAAIAAACQgEABAAADIACAEIAZAvIADAFIADABIAAACgAgLAHIATAAIgJgUg");
	this.shape_105.setTransform(635.75,399.525);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#330000").s().p("AgLAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAXAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_106.setTransform(629.825,399.525);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#330000").s().p("AgYAaQgGgEgDgHQgEgHAAgIQAAgLAHgIQAKgOAVAAQAIAAAGACQAGABAIAFIAFACIACgBIACABIgKAPIgCgBIAAgBIABgBQAAgDgIgDQgIgEgHAAQgKAAgHAGQgIAGAAAJQAAAKAIAGQAHAGAKAAQAIAAAIgEQAHgEAAgCIgBgCIACgBIAKAPIgCABIgCgBIgFACQgIAFgGABQgGACgIAAQgPAAgKgIg");
	this.shape_107.setTransform(623.975,399.525);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIgCgFIgDgHIgdAAIgEAHIgCAFQAAACAFABIAAACIgYAAIAAgCIACgBIADgEIAYgwIABgEQABgDgEgBIAAgCIAZAAIAAACQgDABgBADIACAEIAZAvIADAFIADABIAAACgAgLAHIATAAIgJgUg");
	this.shape_108.setTransform(615.6,399.525);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgYAAIAAgCIAEgBIABgDIAAg1IgBgDIgEgBIAAgCIArAAIANABQAEABAEACQAGAFAAAKQABAIgFAFQgFADgJACIANARIAFAHQACACADAAIAAACgAgRgFIAXAAIAIgBQAEgCAAgFQAAgEgDgBQgCgCgHAAIgXAAg");
	this.shape_109.setTransform(607.15,399.525);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#330000").s().p("AgdAgQgPgLgBgVQAAgSAOgMQANgLAUAAQAHABAHABIANAEIAGACIADgBIABAAIgJAUIgCgBIAAgDIgCgDIgKgEQgIgCgGAAQgLAAgJAHQgJAIAAANQAAAMAJAIQAJAHAMAAQAHAAAGgBQAHgCAEgDIAAgLIgTAAIgDABIgCADIgCAAIAAgSIACAAIACADIADAAIAlAAIAAACIgCABIgBADIAAAQIABADIACACIAAACQgXANgVgBQgSAAgMgJg");
	this.shape_110.setTransform(597.65,398.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#330000").s().p("AgbAcIgBgBIgDACIgBgBIAHgQIABABIAAAAIABADQADACAHACQAHACAHAAQAGAAAFgBQAGgCAAgFQAAgDgFgCIgKgBIgIgBIgLgCIgHgCQgEgDgCgDQgCgEAAgFQAAgKAJgGQAJgFAMAAQAGAAAGABIAOAFIADACIACgCIACABIgIAPIgCAAIgBgDQgDgDgHgCQgGgCgFAAQgHAAgEABQgGADAAAEQAAADADABQADABAIABIAJABQAMAAAHAEQADACACADQADAEAAAGQAAAKgJAGQgJAFgOAAQgOAAgOgGg");
	this.shape_111.setTransform(704.1,368.825);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#330000").s().p("AgZAaQgNgJAAgRQAAgQANgJQAKgIAPAAQAQAAAKAIQANAJAAAQQAAARgNAJQgLAIgPAAQgPAAgKgIgAgQgOQgFAGgBAIQABAJAFAGQAHAHAJAAQAKAAAGgHQAHgGgBgJQABgIgHgGQgGgHgKAAQgJAAgHAHg");
	this.shape_112.setTransform(696.15,368.825);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#330000").s().p("AAQAsIAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIgBgBIgDgEIgighIAAAlIABACIADACIAAABIgWAAIAAgBIADgCIABgCIAAg1IgBgDIgDgCIAAgBIAaAAIAAABQgBABgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIACADIAiAiIAAgjIgBgDIgDgCIAAgBIAWAAIAAABIgDACIgBADIAAA1IABACIADACIAAABgAgTgkIABgBIACAAIACgBQAEgEAFAAIAEABIAHADIADAAIADgBIABgBIgBgCIABgBIAJAHIgBACIgDgBIgBABQgEAGgFgBIgEgBIgIgDIgDAAIgCABIgBACIABABIgBABg");
	this.shape_113.setTransform(687.4,367.65);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIgCgFIgEgHIgcAAIgEAHIgCAFQAAACAFABIAAACIgZAAIAAgCIADgBIADgEIAYgwIACgEQAAgDgEgBIAAgCIAZAAIAAACQgDABAAADIABAEIAZAvIADAFIADABIAAACgAgLAHIAUAAIgKgUg");
	this.shape_114.setTransform(678.8,368.825);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#330000").s().p("AgYAhQgGgGgEgIQgDgJAAgJQAAgSAMgMQAMgMASABQAHgBAFACIAMAEIAEACIACgBIABgCIACACIgKATIgCgBIAAgDQAAgBgDgDIgIgDIgKgCQgJAAgHAGQgEADgCAFQgCAEgBAIQAGgFAGgDQAGgCAHAAQANAAAJAGQAFADADAFQADAGAAAGQAAAMgLAIQgKAHgQAAQgQAAgJgIgAgMAFQgEAEAAAFQAAAGAEAEQAGAEAIAAQAJAAAGgEQAEgEAAgGQAAgFgEgEQgGgFgJABQgIgBgGAFg");
	this.shape_115.setTransform(667.375,368.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#330000").s().p("AgIAoIAAgCIADgBIACgDIAAgyIgGACIgDABIgCADIgBAAIAAgVIABAAIACACIACABIABAAIAGgCIAAgDIgCgDIgDgBIAAgCIAYAAIAAACIgDABIgBADIAABDIABADIADABIAAACg");
	this.shape_116.setTransform(659.75,368.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_117.setTransform(648.775,368.825);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#330000").s().p("AgkAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAlAAQANAAAGADQAKAEAEAKQADAHAAAIQAAARgKAIQgEAEgGACQgGACgKAAgAgRAVIARAAQALAAAFgFQAFgGAAgKQAAgJgFgGQgDgCgEgCIgJgBIgRAAg");
	this.shape_118.setTransform(640.675,368.825);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgYAAIAAgCIAEgBIABgDIAAg1IgBgDIgEgBIAAgCIArAAIAMABQAFABADACQAIAFgBAKQAAAIgEAFQgFADgJACIAMARIAGAHQACACADAAIAAACgAgRgFIAXAAIAIgBQAEgCgBgFQAAgEgCgBQgDgCgGAAIgXAAg");
	this.shape_119.setTransform(629.45,368.825);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#330000").s().p("AgZAaQgNgJAAgRQAAgQANgJQAKgIAPAAQAQAAAKAIQANAJAAAQQAAARgNAJQgLAIgPAAQgPAAgKgIgAgQgOQgFAGAAAIQAAAJAFAGQAGAHAKAAQAKAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgKAAQgKAAgGAHg");
	this.shape_120.setTransform(620.9,368.825);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgYAAIAAgCIAEgBIABgDIAAg1IgBgDIgEgBIAAgCIArAAIAMABQAFABADACQAIAFgBAKQAAAIgEAFQgFADgJACIAMARIAGAHQACACADAAIAAACgAgRgFIAXAAIAIgBQAEgCgBgFQAAgEgCgBQgDgCgGAAIgXAAg");
	this.shape_121.setTransform(612.8,368.825);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgXAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAqAAIANABQAEABAEACQAGAFAAAKQABAIgFAFQgEADgKACIANARIAFAHQACACADAAIAAACgAgRgFIAXAAIAIgBQAEgCAAgFQAAgEgDgBQgDgCgGAAIgXAAg");
	this.shape_122.setTransform(604.55,368.825);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_123.setTransform(596.475,368.825);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgXAAIAAgCIADgBIAAgDIAAg1IAAgDIgDgBIAAgCIAqAAIANABQAEABAEACQAGAFAAAKQABAIgFAFQgEADgKACIANARIAFAHQACACADAAIAAACgAgRgFIAXAAIAIgBQAEgCAAgFQAAgEgDgBQgDgCgGAAIgXAAg");
	this.shape_124.setTransform(770.6,353.475);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#330000").s().p("AAgAlIgCgDIgCgBIg9AAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIA7AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgnAAIAAAOIAYAAIACAAIACgDIACAAIAAASIgCAAIgBgDIgDgBIgYAAIAAAQIApAAIACgBIACgDIACAAIAAAUg");
	this.shape_125.setTransform(762.525,353.475);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#330000").s().p("AAVAhIAAgCIACgBIABgDIAAgkIgYAqIgYgqIAAAkIABADIADABIAAACIgWAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAcAAIAAACQgBAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAQAAADADADIAPAdIAQgdQADgEABgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIAAgCIAbAAIAAACIgCABIgBADIAAA1IABADIACABIAAACg");
	this.shape_126.setTransform(753.65,353.475);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#330000").s().p("AgLAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAXAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_127.setTransform(747.025,353.475);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgXAAIAAgCIADgBIAAgDIAAg1IAAgDIgDgBIAAgCIAqAAIANABQAEABAEACQAGAFAAAKQABAIgFAFQgEADgKACIANARIAFAHQACACADAAIAAACgAgRgFIAXAAIAIgBQAEgCAAgFQAAgEgDgBQgDgCgGAAIgXAAg");
	this.shape_128.setTransform(741.35,353.475);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#330000").s().p("AgiAhIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAqAAQAMAAAHAEQAEACACAEQACAEAAAFQAAAKgHAEQgGAFgOAAIgWAAIAAAVIABADIACABIAAACgAgOgFIAVAAIAIgBQAEgCAAgFQAAgEgEgCQgCgBgGAAIgVAAg");
	this.shape_129.setTransform(733.3,353.475);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#330000").s().p("AgWAdQgGgDgCgGQgCgFgBgIIAAghIAAgEIgDgBIAAgCIAXAAIAAACIgDABIAAAEIAAAeIABAIQAAADACACQAGAEAIAAQAJAAAEgEQADgCABgDIABgIIAAgeIgBgEIgDgBIAAgCIAWAAIAAACIgDABIgBAEIAAAhQAAAMgEAGQgIAIgVABQgNAAgJgFg");
	this.shape_130.setTransform(722.1,353.55);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#330000").s().p("AgLAjIAAgCIADgBIABgDIAAgvIgTAAIgDABIgCADIgBAAIAAgUIABAAIACADIADABIA1AAIADgBIABgDIACAAIAAAUIgCAAIgBgDIgDgBIgTAAIAAAvIABADIACABIAAACg");
	this.shape_131.setTransform(714.525,353.275);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#330000").s().p("AgGAOQAFgDABgDIADgHIgDAAQgEAAgCgCQgCgCAAgFQAAgEACgCQACgDAEAAQAEAAADAEQACAEABAGQAAAMgNAJg");
	this.shape_132.setTransform(706.25,356.775);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#330000").s().p("AAKAhIAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgCgDIgMgTIgQAAIAAAVIABADIADABIAAACIgXAAIAAgCIACgBIABgDIAAg1IgBgDIgCgBIAAgCIAqAAIANABQAEABAEACQAGAFABAKQAAAIgFAFQgFADgJACIAMARIAGAHQACACACAAIAAACgAgRgFIAXAAIAIgBQADgCABgFQgBgEgCgBQgCgCgHAAIgXAAg");
	this.shape_133.setTransform(700.6,353.475);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#330000").s().p("AgZAaQgMgJAAgRQAAgQAMgJQAKgIAPAAQAQAAAKAIQAMAJAAAQQAAARgMAJQgKAIgQAAQgPAAgKgIgAgQgOQgGAGAAAIQAAAJAGAGQAHAHAJAAQAKAAAHgHQAFgGAAgJQAAgIgFgGQgHgHgKAAQgJAAgHAHg");
	this.shape_134.setTransform(692.05,353.475);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#330000").s().p("AAUAhIAAgCIADgBIABgDIAAgkIgYAqIgYgqIAAAkIAAADIAEABIAAACIgXAAIAAgCIAEgBIABgDIAAg1IgBgDIgEgBIAAgCIAcAAIAAACQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAQAAADACADIAQAdIARgdQACgEAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIAAgCIAaAAIAAACIgCABIgBADIAAA1IABADIACABIAAACg");
	this.shape_135.setTransform(682.8,353.475);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIgCgFIgEgHIgcAAIgEAHIgCAFQAAACAFABIAAACIgZAAIAAgCIADgBIADgEIAYgwIABgEQAAgDgDgBIAAgCIAZAAIAAACQgBAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIABAEIAZAvIADAFIADABIAAACgAgLAHIAUAAIgKgUg");
	this.shape_136.setTransform(673.75,353.475);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#330000").s().p("AgZAaQgNgJAAgRQAAgQANgJQAKgIAPAAQAPAAALAIQANAJAAAQQAAARgNAJQgLAIgPAAQgPAAgKgIgAgQgOQgFAGAAAIQAAAJAFAGQAGAHAKAAQAKAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgKAAQgKAAgGAHg");
	this.shape_137.setTransform(662.3,353.475);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#330000").s().p("AAPAhIAAgCIACgBIABgDIAAgXIgkAAIAAAXIABADIAEABIAAACIgYAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAYAAIAAACIgEABIgBADIAAATIAkAAIAAgTIgBgDIgCgBIAAgCIAXAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_138.setTransform(653.65,353.475);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#330000").s().p("AgYAaQgGgEgDgHQgEgHAAgIQAAgLAHgIQAKgOAVAAQAIAAAGACQAGABAIAFIAFACIACgBIACABIgKAPIgCgBIAAgBIABgBQAAgDgIgDQgIgEgHAAQgKAAgHAGQgIAGAAAJQAAAKAIAGQAHAGAKAAQAIAAAIgEQAHgEAAgCIgBgCIACgBIAKAPIgCABIgCgBIgFACQgIAFgGABQgGACgIAAQgPAAgKgIg");
	this.shape_139.setTransform(645.425,353.475);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#330000").s().p("AgWAdQgGgDgCgGQgCgFgBgIIAAghIAAgEIgDgBIAAgCIAXAAIAAACIgDABIAAAEIAAAeIAAAIQABADACACQAGAEAIAAQAJAAAEgEQADgCABgDIABgIIAAgeIgBgEIgDgBIAAgCIAWAAIAAACIgDABIgBAEIAAAhQAAAMgFAGQgHAIgVABQgNAAgJgFg");
	this.shape_140.setTransform(637.05,353.55);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#330000").s().p("AAUAhIAAgCIADgBIABgDIAAgkIgYAqIgYgqIAAAkIAAADIADABIAAACIgVAAIAAgCIACgBIABgDIAAg1IgBgDIgCgBIAAgCIAbAAIAAACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAADACADIAPAdIARgdQADgEAAgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIAAgCIAbAAIAAACIgEABIAAADIAAA1IAAADIAEABIAAACg");
	this.shape_141.setTransform(627.95,353.475);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#330000").s().p("AAPAhIAAgCQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgDgDIgighIAAAkIABADIADABIAAACIgWAAIAAgCIADgBIABgDIAAg1IgBgDIgDgBIAAgCIAZAAIAAACQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIACADIAiAiIAAgjIgBgDIgDgBIAAgCIAWAAIAAACIgDABIgBADIAAA1IABADIADABIAAACg");
	this.shape_142.setTransform(615.6,353.475);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#330000").s().p("AgZAaQgMgJAAgRQAAgQAMgJQAKgIAPAAQAPAAALAIQAMAJAAAQQAAARgMAJQgLAIgPAAQgPAAgKgIgAgQgOQgGAGAAAIQAAAJAGAGQAHAHAJAAQAKAAAHgHQAFgGAAgJQAAgIgFgGQgHgHgKAAQgJAAgHAHg");
	this.shape_143.setTransform(606.9,353.475);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#330000").s().p("AgcAhQgIgGgEgIQgEgJAAgKQAAgOAIgLQANgQAZAAQAJAAAHADQAHACAKAFIAGADIADgBIABABIgLARIgCgCIABgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgFgEQgLgGgLAAQgNAAgIAHQgKAIAAAMQAAANAKAIQAIAHANAAQALAAALgGIAFgDQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgBgCIACgBIALARIgBABIgDgBIgGACQgKAHgHABQgHACgJABQgSgBgMgIg");
	this.shape_144.setTransform(597.625,352.75);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#330000").s().p("AgGAoQAAgGAGAAQAFAAAAAFQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgCACgCAAQgGgBAAgFgAgCAWIABgCIAAgOQAAgVgDgVIgBgHQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIADABIAEACIACACIABARQAAALgDAPIgDATQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_145.setTransform(776.675,317.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#330000").s().p("AAMAcQgEgDgCgFQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAABIgEAEIgDADQgHAEgFAAQgFAAgDgCQgEgDAAgFQAAgHAFgGQADgEAGgDQAHgCAKgCQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgOQAAgEgDgBQgDgCgEAAQgHAAgDACQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAACQAAADgCACQgCAEgDAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgDADgEQAEgEADgCQAHgEAKAAQAIAAADADQADADAAAHIgBAQIAAAMQAAAGADAEQADADAFACIABABIAAABIgGAFIgBAAQgEAAgEgEgAgGACQgLAFAAAIQAAAFACACQACACAFAAQAGAAAFgFIACgEIABgPQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgFAAgGACg");
	this.shape_146.setTransform(772.425,318.525);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#330000").s().p("AAOAzIAAgDIAAgDIAAgEIgCgBIgJAIQgFAEgJAAQgHAAgDgDQgHgDgCgHQgFgJAAgKQAAgRAJgHQAHgHAMAAQAGAAAEABIAJAFQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAAgNIgBgOQAAgMgDAAIgJAAIAAgBIAAgBIAAgBIAEAAQAIAAAGgDIAEgBQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAIAAAJIgBAKIAABAQAAANADgBIAHgCIACgBQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAABIgQAGIgEADQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBgAgUgBQgHAGAAANQAAAFACAGIAEAHQAEAEADACQADABAGAAQAJAAAJgGQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAAgHIgBgOIgBgNIgCgDQgIgEgIAAQgKAAgEAGg");
	this.shape_147.setTransform(765.7,316.475);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#330000").s().p("AAGAgIAAgBIAAgCIAAAAIAIAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQABgHgBgYQAAgLgDgDQgDgEgIAAQgIAAgGAFIgBABIAAAeQAAAPACAAIAKAAIAAAAIAAACIAAABIggAAIAAAAIAAgBIAAgCIAAAAIAJAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAIAAgWIAAgVQgBgKgCAAIgIAAIgBgBIAAgDIABAAIAJAAIAEAAIACgBIACAAIADAAQAAAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIAAAEIgBAEQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIALgHQAEgCAFgBQAIAAAEAGQAGAEAAAPIAAAOIgBALQAAAKABAAIAJAAIABAAIAAACIAAABg");
	this.shape_148.setTransform(758.05,318.35);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#330000").s().p("AgPAuIgBgBIAAgCIABgBIAJAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgQIAAgSIAAgMQgBgGgDAAIgHAAIgBgBIAAgCIABgBIAEAAIALgBIAEAAQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAIgBATIAAAVQAAARADAAIAIAAIABABIAAACIgBABgAgGgkQAAgDACgDQADgDADAAQAEAAAAAFQAAADgEADQgCACgCAAQgEAAAAgEg");
	this.shape_149.setTransform(752.375,316.975);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#330000").s().p("AgQA0IgBgBIAAgCIABgBIALAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAhLQAAgPgDAAIgJAAIAAgBIAAgCIAAgBIAGAAIAJgBIAEgCQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAApIAAApQAAAPACAAIAKAAIABABIAAACIgBABg");
	this.shape_150.setTransform(748.575,316.375);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#330000").s().p("AgPAuIgBgBIAAgCIABgBIAJAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgQIAAgSIAAgMQgBgGgDAAIgHAAIgBgBIAAgCIABgBIAEAAIALgBIAEAAQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAIgBATIAAAVQAAARADAAIAIAAIABABIAAACIgBABgAgGgkQAAgDACgDQADgDADAAQAEAAAAAFQAAADgEADQgCACgCAAQgEAAAAgEg");
	this.shape_151.setTransform(741.825,316.975);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#330000").s().p("AAYAgIAAgBIAAgCIAAAAIAHAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQABgDAAgaQAAgNgDgDQgEgFgGAAQgJABgGAFIAAACIAAAdQAAAPACAAIAIAAIAAAAIAAACIAAABIgaAAIgBgBIAAgCIABAAIAHAAIAAgCIAAgTIAAgUQAAgLgLAAQgKAAgGAGIAAABIAAAeQAAAPACAAIAIAAIABAAIAAACIgBABIgdAAIgBAAIAAgBIAAgCIABAAIAIAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIgBgWIAAgUQAAgLgDAAIgHAAIgBgBIAAgDIABAAIAJAAIAGgBIACAAIACAAIABABIAAAEIAAADQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBIAIgEIAFgDIAJgCQAGAAADAEQACACABAEQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAgBIAFgEIAFgDQADgCAHAAQAHAAAFAFQAFAFAAAQIAAAMIgBAMQAAAJACAAIAJAAIABAAIAAACIgBABg");
	this.shape_152.setTransform(734.525,318.35);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#330000").s().p("AAMAcQgEgDgCgFQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAABIgEAEIgDADQgHAEgFAAQgFAAgDgCQgEgDAAgFQAAgHAFgGQADgEAGgDQAHgCAKgCQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgOQAAgEgDgBQgDgCgEAAQgHAAgDACQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAACQAAADgCACQgCAEgDAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgDADgEQAEgEADgCQAHgEAKAAQAIAAADADQADADAAAHIgBAQIAAAMQAAAGADAEQADADAFACIABABIAAABIgGAFIgBAAQgEAAgEgEgAgGACQgLAFAAAIQAAAFACACQACACAFAAQAGAAAFgFIACgEIABgPQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgFAAgGACg");
	this.shape_153.setTransform(726.175,318.525);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#330000").s().p("AAYAgIAAgBIAAgCIAAAAIAHAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQABgDAAgaQAAgNgDgDQgEgFgGAAQgJABgGAFIAAACIAAAdQAAAPACAAIAIAAIAAAAIAAACIAAABIgaAAIgBgBIAAgCIABAAIAHAAIAAgCIAAgTIAAgUQAAgLgLAAQgKAAgGAGIAAABIAAAeQAAAPACAAIAIAAIABAAIAAACIgBABIgdAAIgBAAIAAgBIAAgCIABAAIAIAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIgBgWIAAgUQAAgLgDAAIgHAAIgBgBIAAgDIABAAIAJAAIAGgBIACAAIACAAIABABIAAAEIAAADQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBIAIgEIAFgDIAJgCQAGAAADAEQACACABAEQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAgBIAFgEIAFgDQADgCAHAAQAHAAAFAFQAFAFAAAQIAAAMIgBAMQAAAJACAAIAJAAIABAAIAAACIgBABg");
	this.shape_154.setTransform(717.525,318.35);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#330000").s().p("AgRAZQgJgJAAgMIABgMQADgKAGgHQAHgGAJAAQAFAAADABIAIAFQAGAFACAFIABACIgBABIgPAEQgOACgFAAIgDAAIgDAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAOAKAJQAGAFALAAQAHAAAEgCIAEgCIABgBIAAABIABABIgBAAIgDAEIgHADQgHADgIAAQgLAAgHgHgAgMgXIgDAHIgCAHIABABIAMgBQALgBAGgDIABgBIgBgCQgDgFgEgDQgFgEgFABQgEAAgEAEg");
	this.shape_155.setTransform(706.175,318.45);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#330000").s().p("AgVAgIgBAAIAAgCIABgBIAIAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAAgsQAAgJgDAAIgIAAIgBgBIAAgCIABgBIAJAAIAHAAIAEgBQAAAAAAAAQAAAAAAAAQAAAAABABQAAAAAAABIgBAEIAAAEQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAGgGQAFgEAFAAQAGAAADAFIAAACIgCAIIgBABIgBAAIgEgEQgCgCgEAAQgIAAgDAEIgBABIAAAPIAAAQQAAANACAAIANAAIABABIAAACIgBAAg");
	this.shape_156.setTransform(700.5375,318.325);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#330000").s().p("AAOAzIAAgDIAAgDIAAgEIgCgBIgKAIQgFAEgIAAQgHAAgDgDQgHgDgCgHQgFgJAAgKQAAgRAJgHQAHgHAMAAQAGAAAEABIAIAFQABAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAAgNIgBgOQAAgMgDAAIgJAAIAAgBIAAgBIAAgBIAEAAQAIAAAGgDIAEgBQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAIAAAJIgBAKIAABAQAAANADgBIAHgCIADgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAABIgQAGIgEADQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBgAgUgBQgHAGAAANQAAAFACAGIAEAHQADAEADACQAEABAGAAQAJAAAJgGQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAAgHIgBgOIgBgNIgCgDQgHgEgJAAQgKAAgEAGg");
	this.shape_157.setTransform(694.5,316.475);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#330000").s().p("AAMAcQgEgDgCgFQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAABIgEAEIgDADQgHAEgFAAQgFAAgDgCQgEgDAAgFQAAgHAFgGQADgEAGgDQAHgCAKgCQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgOQAAgEgDgBQgDgCgEAAQgHAAgDACQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAACQAAADgCACQgCAEgDAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgDADgEQAEgEADgCQAHgEAKAAQAIAAADADQADADAAAHIgBAQIAAAMQAAAGADAEQADADAFACIABABIAAABIgGAFIgBAAQgEAAgEgEgAgGACQgLAFAAAIQAAAFACACQACACAFAAQAGAAAFgFIACgEIABgPQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgFAAgGACg");
	this.shape_158.setTransform(687.625,318.525);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#330000").s().p("AAYAgIAAgBIAAgCIAAAAIAHAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABgDAAgaQAAgNgDgDQgEgFgGAAQgJABgGAFIAAACIAAAdQAAAPACAAIAIAAIAAAAIAAACIAAABIgaAAIgBgBIAAgCIABAAIAHAAIAAgCIAAgTIAAgUQAAgLgLAAQgKAAgGAGIAAABIAAAeQAAAPACAAIAIAAIABAAIAAACIgBABIgdAAIgBAAIAAgBIAAgCIABAAIAIAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIgBgWIAAgUQAAgLgDAAIgHAAIgBgBIAAgDIABAAIAJAAIAGgBIACAAIACAAIABABIAAAEIAAADQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBIAIgEIAFgDIAJgCQAGAAADAEQACACABAEQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAABgBIAFgEIAFgDQADgCAHAAQAHAAAFAFQAFAFAAAQIAAAMIgBAMQAAAJACAAIAJAAIABAAIAAACIgBABg");
	this.shape_159.setTransform(678.975,318.35);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#330000").s().p("AAMAcQgEgDgCgFQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABIgEAEIgDADQgHAEgFAAQgFAAgDgCQgEgDAAgFQAAgHAFgGQADgEAGgDQAHgCAKgCQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgOQAAgEgDgBQgDgCgEAAQgHAAgDACQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAACQAAADgCACQgCAEgDAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgDADgEQAEgEADgCQAHgEAKAAQAIAAADADQADADAAAHIgBAQIAAAMQAAAGADAEQADADAFACIABABIAAABIgGAFIgBAAQgEAAgEgEgAgGACQgLAFAAAIQAAAFACACQACACAFAAQAGAAAFgFIACgEIABgPQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgFAAgGACg");
	this.shape_160.setTransform(667.625,318.525);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#330000").s().p("AgQA0IgBgBIAAgCIABgBIALAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAhLQAAgPgDAAIgJAAIAAgBIAAgCIAAgBIAGAAIAJgBIAEgCQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAApIAAApQAAAPACAAIAKAAIABABIAAACIgBABg");
	this.shape_161.setTransform(662.475,316.375);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#330000").s().p("AgRAZQgJgJAAgMIABgMQADgKAGgHQAHgGAJAAQAFAAADABIAIAFQAGAFACAFIABACIgBABIgPAEQgOACgFAAIgDAAIgDAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAOAKAJQAGAFALAAQAHAAAEgCIAEgCIABgBIAAABIABABIgBAAIgDAEIgHADQgHADgIAAQgLAAgHgHgAgMgXIgDAHIgCAHIABABIAMgBQALgBAGgDIABgBIgBgCQgDgFgEgDQgFgEgFABQgEAAgEAEg");
	this.shape_162.setTransform(654.725,318.45);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#330000").s().p("AAOAzIAAgDIAAgDIAAgEIgCgBIgKAIQgFAEgIAAQgHAAgDgDQgHgDgCgHQgFgJAAgKQAAgRAJgHQAHgHAMAAQAGAAAEABIAIAFQABAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAAgNIgBgOQAAgMgDAAIgJAAIAAgBIAAgBIAAgBIAEAAQAIAAAGgDIAEgBQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAIAAAJIgBAKIAABAQAAANADgBIAHgCIACgBQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAABIgQAGIgEADQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBgAgUgBQgHAGAAANQAAAFACAGIAEAHQADAEADACQAEABAGAAQAJAAAJgGQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAAgHIgBgOIgBgNIgCgDQgHgEgJAAQgKAAgEAGg");
	this.shape_163.setTransform(648.15,316.475);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#330000").s().p("AAMAcQgEgDgCgFQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABIgEAEIgDADQgHAEgFAAQgFAAgDgCQgEgDAAgFQAAgHAFgGQADgEAGgDQAHgCAKgCQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgOQAAgEgDgBQgDgCgEAAQgHAAgDACQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAACQAAADgCACQgCAEgDAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgDADgEQAEgEADgCQAHgEAKAAQAIAAADADQADADAAAHIgBAQIAAAMQAAAGADAEQADADAFACIABABIAAABIgGAFIgBAAQgEAAgEgEgAgGACQgLAFAAAIQAAAFACACQACACAFAAQAGAAAFgFIACgEIABgPQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgFAAgGACg");
	this.shape_164.setTransform(638.275,318.525);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#330000").s().p("AgPAuIgBgBIAAgCIABgBIAJAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgQIAAgSIAAgMQgBgGgDAAIgHAAIgBgBIAAgCIABgBIAEAAIALgBIAEAAQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAIgBATIAAAVQAAARADAAIAIAAIABABIAAACIgBABgAgGgkQAAgDACgDQADgDADAAQAEAAAAAFQAAADgEADQgCACgCAAQgEAAAAgEg");
	this.shape_165.setTransform(633.125,316.975);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#330000").s().p("AANAzIAAgDIAAgDIAAgEIgBgBIgJAIQgGAEgJAAQgFAAgFgDQgFgDgEgHQgDgJAAgKQgBgRAJgHQAIgHALAAQAGAAAEABIAJAFQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAAgNIgBgOQAAgMgCAAIgKAAIAAgBIAAgBIAAgBIAEAAQAIAAAGgDIAEgBQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAIAAAJIgBAKIAABAQAAANADgBIAGgCIADgBQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAABIgPAGIgGADQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBgAgVgBQgGAGAAANQAAAFADAGIADAHQAEAEADACQADABAGAAQAJAAAJgGQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgHIAAgOIgBgNIgCgDQgHgEgJAAQgJAAgGAGg");
	this.shape_166.setTransform(627.75,316.475);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#330000").s().p("AgdAgQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAIABgDQADgEATgRIAVgUQAEgFAAgBQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgVAAIgLAAIgJACIgCAAIAAAAIABgGIABgEQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACAAIADAAIAUABIAWAAIAEAAIADAAIABAAIgBACIgJAKQgKAMgOAMIgMAMIgCADQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIATAAIAUgBIAEgBIADgBIAAABIAAADIgBADIgBADIgCABg");
	this.shape_167.setTransform(617.325,318.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#330000").s().p("AgPAuIgBgBIAAgCIABgBIAJAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgQIAAgSIAAgMQgBgGgDAAIgHAAIgBgBIAAgCIABgBIAEAAIALgBIAEAAQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAIgBATIAAAVQAAARADAAIAIAAIABABIAAACIgBABgAgGgkQAAgDACgDQADgDADAAQAEAAAAAFQAAADgEADQgCACgCAAQgEAAAAgEg");
	this.shape_168.setTransform(612.075,316.975);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#330000").s().p("AgQA0IgBgBIAAgCIABgBIALAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAhLQAAgPgDAAIgJAAIAAgBIAAgCIAAgBIAGAAIAJgBIAEgCQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAApIAAApQAAAPACAAIAKAAIABABIAAACIgBABg");
	this.shape_169.setTransform(608.275,316.375);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#330000").s().p("AgRAZQgJgJAAgMIABgMQADgKAGgHQAHgGAJAAQAFAAADABIAIAFQAGAFACAFIABACIgBABIgPAEQgOACgFAAIgDAAIgDAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAOAKAJQAGAFALAAQAHAAAEgCIAEgCIABgBIAAABIABABIgBAAIgDAEIgHADQgHADgIAAQgLAAgHgHgAgMgXIgDAHIgCAHIABABIAMgBQALgBAGgDIABgBIgBgCQgDgFgEgDQgFgEgFABQgEAAgEAEg");
	this.shape_170.setTransform(603.525,318.45);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#330000").s().p("AggAvIgBgBIAAgCIABgBIAJAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgsIAAgXQAAgQgDABIgIAAIgBgBIAAgCIABgCIAWAAIATABIATAAIAEAAIADgBIABACIgBAEIgCAGIAAABIgBAAIgCgEQgDgBgFgBIgQgBIgPgBIgBABIgBAhQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIAhAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgIIABgBIACAAIAAABIAAAGIAAAGIAAAGIAAAIIgBABIgBAAIgBgBIAAgGIAAgFIgBgBQgFAAgdAAIgBAAIAAAZQAAASAEAAIAMAAIABAAIAAADIgBABg");
	this.shape_171.setTransform(596.625,316.9);

	this.text = new cjs.Text("Feliz dia de la madre mami linda!\n\nCon mucho amor, tu primer error de 16 años\n\nGracias a mi que eres una mama\ncon hijos que den regalos de poco precio pero mucho amor\n\n-Oink oink, Kady. :)", "14px 'Californian FB'", "#330000");
	this.text.lineHeight = 18;
	this.text.lineWidth = 222;
	this.text.parent = this;
	this.text.setTransform(592.35,307.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).to({state:[{t:this.text}]},10).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(30).to({_off:false},0).wait(1).to({scaleX:1.0772,scaleY:1.1112,x:578.2061,y:277.981},0).wait(1).to({scaleX:1.1543,scaleY:1.2224,x:564.0623,y:248.5621},0).wait(1).to({scaleX:1.2315,scaleY:1.3336,x:549.9184,y:219.1431},0).wait(1).to({scaleX:1.3086,scaleY:1.4448,x:535.7745,y:189.7242},0).wait(1).to({scaleX:1.3858,scaleY:1.5561,x:521.6307,y:160.3052},0).wait(1).to({scaleX:1.4629,scaleY:1.6673,x:507.4868,y:130.8863},0).wait(1).to({scaleX:1.5401,scaleY:1.7785,x:493.3429,y:101.4673},0).wait(1).to({scaleX:1.6173,scaleY:1.8897,x:479.1991,y:72.0484},0).wait(1).to({scaleX:1.6944,scaleY:2.0009,x:465.0552,y:42.6294},0).wait(1));

	// FlipOfEnvelope
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(496.95,301.45,1,1,0,0,0,357.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:358,regY:156.3,scaleY:0.7864,x:497.05,y:424.35},0).wait(1).to({scaleY:0.5728,y:391},0).wait(1).to({scaleY:0.3592,y:357.6},0).wait(1).to({scaleY:0.1457,y:324.2},0).wait(1).to({scaleY:0.0679,skewX:180,y:290.85},0).wait(1).to({scaleY:0.2815,y:257.45},0).wait(1).to({scaleY:0.4951,y:224.05},0).wait(1).to({scaleY:0.7087,y:190.7},0).wait(1).to({scaleY:0.9223,y:157.3},0).to({_off:true},1).wait(30));

	// Credits
	this.text_1 = new cjs.Text("A Valle \nComputer Art \nMay 2022", "12px 'Copperplate Gothic Bold'", "#330000");
	this.text_1.lineHeight = 15;
	this.text_1.parent = this;
	this.text_1.setTransform(592.35,638.6);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(30).to({_off:false},0).wait(1).to({scaleX:1.0931,scaleY:1.0931,x:576.9585,y:639.8626},0).wait(1).to({scaleX:1.1862,scaleY:1.1862,x:561.567,y:641.1251},0).wait(1).to({scaleX:1.2793,scaleY:1.2793,x:546.1755,y:642.3877},0).wait(1).to({scaleX:1.3725,scaleY:1.3725,x:530.784,y:643.6503},0).wait(1).to({scaleX:1.4656,scaleY:1.4656,x:515.3925,y:644.9128},0).wait(1).to({scaleX:1.5587,scaleY:1.5587,x:500.001,y:646.1754},0).wait(1).to({scaleX:1.6518,scaleY:1.6518,x:484.6095,y:647.438},0).wait(1).to({scaleX:1.7449,scaleY:1.7449,x:469.218,y:648.7006},0).wait(1).to({scaleX:1.838,scaleY:1.838,x:453.8265,y:649.9631},0).wait(1));

	// Owl
	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#330000").s().p("Aj1L2Igqg3QgWgdgLgTQgdgxgEg5QAAAAABAAQAAgBABAAQAAAAABAAQABABAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABACABAHQACAgAQAhQANAbAYAgIAqA2QAXAhAMAaQgNgMgVgbgAjaMCQAHgMACgQIABgdIAAg2QAAgUgBgJIgDgPQgCgJAAgHQAAgFAEAAQAHAeAAA4QABAjgCAWIgFAhgAFcLvQgigugNgZQgUgngFgtQAHAGAEAMIAGAWQASBBAzAtQAKglAFgnIAEgdIAFgeQACgJAEgIQAGAFgCAPIgMBPQgGAkgEARQgDANgHABIgBAAQgHAAgIgJgADjLgIAFgRIAAgKIAAgKIAEgeQADgTgEgKQAEgCABgFIABgLQACgLALgEIgLAsIAAAMQAAAHgCAEIgDAMQgCAGABANQABANgDAGIgCAHIgCAHIABAJQAAAFgDACQgFgGADgMgAh1LsQAQgeAFgMQAIgVAAgRIAAgLQgBgGABgEIAEgNQABgGAAgJIABgPQACgHADAAQAFAMgBAQQAAAKgEATIgDAVQgFAYgGAQQgHAVgMAPgAiELQQgEgNgQgfQgRgggKgYQgJgYgJgJQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQACABACACQALARAPAdQARAlAGAKQAMAXADAJQAGAUgIAOQAAgPgFgOgAC8LXIgfgmQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIADADIAbAdQADADAPAJQAMAIAEAHIgBACQgVgFgPgQgAG/LcQgVgxgMg2IAIAAIAYBUQAGACADgLIAWhVIAIgYQAHgSAOgNQgMAWgJAgIgOA5QgGAbgLAigAgILJQgGgDgFgLIgshrQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAFAFAIARIAiBPQACAFADABQACABAEgCQARgIAFgHQAEgGAEgOIAMg2QAHAJgDAVQgDAUgDAJQgEAQgJAKQgJAIgNAGQgFADgEAAIgEAAgACPKlIADgFQACgFgBgIIAAhDQAAgHABgEQgHADgFgCQALgKALgFQAdgOAmAJQARAEAMAIQAFADACADIAHgLQAGgJAEgEQAFgFAIgCQAFgCALAAIASAAQANAAAGACQAIABAGAFQABADgGAAIgngBQgMAAgGABQgP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");
	this.shape_172.setTransform(677.81,535.575);

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(677.8,535.6,1,1,0,0,0,58,79.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_172}]},20).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).wait(1).to({scaleX:1.0985,scaleY:1.0985,x:669.25,y:532},0).wait(1).to({scaleX:1.197,scaleY:1.197,x:660.75,y:528.4},0).wait(1).to({scaleX:1.2955,scaleY:1.2955,x:652.3,y:524.8},0).wait(1).to({scaleX:1.3939,scaleY:1.3939,x:643.8,y:521.2},0).wait(1).to({scaleX:1.4924,scaleY:1.4924,x:635.25,y:517.65},0).wait(1).to({scaleX:1.5909,scaleY:1.5909,x:626.75,y:514.05},0).wait(1).to({scaleX:1.6894,scaleY:1.6894,x:618.3,y:510.45},0).wait(1).to({scaleX:1.7879,scaleY:1.7879,x:609.8,y:506.85},0).wait(1).to({scaleX:1.8864,scaleY:1.8864,x:601.25,y:503.25},0).wait(1));

	// Letter
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(589.15,487.2,1,1,0,0,0,237.4,197.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).wait(1).to({scaleX:1.0906,scaleY:1.0906,x:573.6,y:474.8},0).wait(1).to({scaleX:1.1813,scaleY:1.1813,x:558.15,y:462.4},0).wait(1).to({scaleX:1.2719,scaleY:1.2719,x:542.65,y:450.05},0).wait(1).to({scaleX:1.3625,scaleY:1.3625,x:527.15,y:437.65},0).wait(1).to({scaleX:1.4532,scaleY:1.4532,x:511.65,y:425.25},0).wait(1).to({scaleX:1.5438,scaleY:1.5438,x:496.15,y:412.85},0).wait(1).to({scaleX:1.6344,scaleY:1.6344,x:480.65,y:400.5},0).wait(1).to({scaleX:1.7251,scaleY:1.7251,x:465.2,y:388.1},0).wait(1).to({scaleX:1.8157,scaleY:1.8157,x:449.7,y:375.75},0).wait(1));

	// Envelope
	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#960018").ss(19,1,1).p("Eg4kgNRMAvFAakISIAAMAv8gak");
	this.shape_173.setTransform(497.025,379.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#960018").ss(20,1,1).p("Eg4kAiXMAAAhEtMBxJAAAMAAABEtIg3AAgApfnpMgvFAqAAIpnpMAvFAqA");
	this.shape_174.setTransform(497.025,514.75);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FCF7B7").s().p("ApfNSMgvFgakMBxJAAAMgv8Aakg");
	this.shape_175.setTransform(497.025,379.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF6600").s().p("EA3uAiXMgvFgqAMAvFAqAMhwSAAAMAvFgqAMgvFAqAMAAAhEtMAvFAalISIAAMAv8galMAAABEtg");
	this.shape_176.setTransform(497.025,514.75);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#7E0018").ss(8,1,1).p("ADhjmIDfAUIEbZXALbvbIkbMJAop/xIMKcLMgO7AjX");
	this.shape_177.setTransform(195.4,387.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#7E0018").ss(10,1,1).p("ALbvbMAAAAlgI21JsMACxg/i");
	this.shape_178.setTransform(195.4,387.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF6600").s().p("Aop/xIMLcMIDeATIEbsJMAAAAlgIkb5XIEbZXI21JsMAO8gjWMgO8AjWgALbWFg");
	this.shape_179.setTransform(195.4,387.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173}]}).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177}]},10).wait(30));

	// Flip2
	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#7E0018").ss(8,1,1).p("AqBCfIKy1TMAJRAlp");
	this.shape_180.setTransform(204.225,161.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#7E0018").ss(10,1,1).p("AqBoKIUDQV");
	this.shape_181.setTransform(204.225,229.525);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF6600").s().p("AqBCfIKy1TMAJRAlpg");
	this.shape_182.setTransform(204.225,161.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},10).wait(30));

	// BackOfCard
	this.text_2 = new cjs.Text("", "12px 'Arial-Black'", "#330000");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 19;
	this.text_2.parent = this;
	this.text_2.setTransform(240.1,645.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#7E0018").ss(4,1,1).p("Ay1+kMAlrAAAMAAAA9JMglrAAAg");
	this.shape_183.setTransform(705.375,489);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F8EF6F").s().p("Ay1elMAAAg9JMAlrAAAMAAAA9Jg");
	this.shape_184.setTransform(705.375,489);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.text_2}]},20).to({state:[]},10).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(526.4,220.7,464.80000000000007,524);
// library properties:
lib.properties = {
	id: 'FE6A7EE649C00A45A1831AC6D226D1E0',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFCEBF",
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
an.compositions['FE6A7EE649C00A45A1831AC6D226D1E0'] = {
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