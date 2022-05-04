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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AMIjaQA6DiA4ENIXmDmIgPC2IAACoIg3HqIhhABIACADIlKAAIAAgBIhgABIAEAIIlKAAIABgDIiTADIADAHIlKAAIABgCIh8ACIhTABIj3gBIB4ngIDSHgAdxVGIB4nfIDQHdgAPzVUIB3neIDPHZgAXMVMIB3ndIDOHYgAIruDQABADABADQAsBoArB+QAIAWAHAXQAeBZAdBiAk1xvQElmlEVDSQCZB1CNFKApGphQBIisA2hoIPzgOApGphIB+kUQBJiPBKhrIiTD6ArXjTQAGgSAGgTIA8idIPzgOIFqgMQABAGACAHIACAEQAXBRAXBYIAEAOQABAGACAHgAKTpqQpuApprggArLj4QBMjiA5iHEgk6AKmIglihIX6jwQA1jaBZkOA1vV8Ii8ADIi0mGIiCGLA1vV8IgDAIAwTV2IhgACIh9mwIh/G0ArQVxIAFALIlKAAIACgGIB2naIDNHVIlDAFAxzV4Ij8AEEgk6AKmIAxDQIB8ITIEsgFEgk6AKmIHxhIQJphRJegnQeRh+RCFJA4rV/Ik2AFAGHVeIAEAJIlKAAIABgDIB3ndIDOHXIlFAGIjEADIAEAKIlKAAIABgFIB3nbIDOHWIlFAFIkJAFAMkVXImdAHEgkJAN2QJyh9ZkgoQZkgpMgCx");
	this.shape.setTransform(240,141.6667);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,485,288.4);


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


(lib.hat1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.hat("synched",0);
	this.instance.setTransform(240,141.7,1,1,0,0,0,240,141.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("EAiwgBIQAAAggXAWQgXAWggAAQggAAgXgWQgWgWAAggQAAggAWgXQAXgXAgAAQAgAAAXAXQAXAXAAAggAcxg5QAAAggXAWQgXAWggAAQggAAgXgWQgWgWAAggQAAggAWgXQAXgXAgAAQAgAAAXAXQAXAXAAAggAVUhAQAAAggXAWQgXAWggAAQggAAgXgWQgWgWAAggQAAggAWgXQAXgXAgAAQAgAAAXAXQAXAXAAAggAOyhIQAAAggXAWQgWAWggAAQggAAgXgWQgXgWAAggQAAggAXgXQAXgXAgAAQAgAAAWAXQAXAXAAAggA3QAYQAAAggXAWQgWAXggAAQggAAgXgXQgXgWAAggQAAgfAXgXQAXgXAgAAQAgAAAWAXQAXAXAAAfgEggUABJQAAAggXAXQgWAXggAAQggAAgXgXQgXgXAAggQAAggAXgXQAXgVAgAAQAgAAAWAVQAXAXAAAggAHjhIQAAAggXAWQgXAWggAAQggAAgXgWQgWgWAAggQAAggAWgXQAXgXAgAAQAgAAAXAXQAXAXAAAggAhVgoQAAAggXAVQgXAXggAAQggAAgXgXQgWgVAAggQAAggAWgXQAXgXAgAAQAgAAAXAXQAXAXAAAggApvgTQAAAfgXAWQgXAXggAAQggAAgXgXQgWgWAAgfQAAggAWgXQAXgXAgAAQAgAAAXAXQAXAXAAAgg");
	this.shape.setTransform(246.375,243.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AriBJIA7icIPzgOIFqgMIADANIABAEIAvCoIAEAOIADANI3fAHIANglg");
	this.shape_1.setTransform(242.4,109.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3333").s().p("A+Lh7IC0GEIk1AGgA2citIB+GvIj9AFgAxIjYIDNHUIlDAFgAn8jkIDOHWIlEAFgAANjuIDPHXIlFAFgAGCDhIB4ngIDRHgIhSABgAO+j/IDPHZIlGAEgAWXkFIDPHWIlGAGgAc9kNIDRHcIlJACg");
	this.shape_2.setTransform(257.15,255.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CC00").s().p("EglFAKtIHxhIQJphRJegnQeQh+RDFJIAACoQshix5jApQ5kAopyB9gApRpaIB+kUIPzgOIACAGQAsBoArB+IAPAtQlbAXlaAAQkSAAkSgOg");
	this.shape_3.setTransform(241.125,140.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("EgiYACAQgXgXAAggQAAggAXgXQAXgVAgAAQAgAAAWAVQAXAXAAAgQAAAggXAXQgWAXggAAQggAAgXgXgA5UBOQgXgWAAggQAAgfAXgXQAXgXAgAAQAgAAAWAXQAXAXAAAfQAAAggXAWQgWAXggAAQggAAgXgXgAr0AiQgWgWAAgfQAAggAWgXQAXgXAgAAQAgAAAXAXQAXAXAAAgQAAAfgXAWQgXAXggAAQggAAgXgXgAjaANQgWgVAAggQAAggAWgXQAXgXAgAAQAgAAAXAXQAXAXAAAgQAAAggXAVQgXAXggAAQggAAgXgXgAasgDQgWgWAAggQAAggAWgXQAXgXAgAAQAgAAAXAXQAXAXAAAgQAAAggXAWQgXAWggAAQggAAgXgWgATPgKQgWgWAAggQAAggAWgXQAXgXAgAAQAgAAAXAXQAXAXAAAgQAAAggXAWQgXAWggAAQggAAgXgWgEAgrgASQgWgWAAggQAAggAWgXQAXgXAgAAQAgAAAXAXQAXAXAAAgQAAAggXAWQgXAWggAAQggAAgXgWgAMugSQgXgWAAggQAAggAXgXQAXgXAgAAQAgAAAWAXQAXAXAAAgQAAAggXAWQgWAWggAAQggAAgXgWgAFegSQgWgWAAggQAAggAWgXQAXgXAgAAQAgAAAXAXQAXAXAAAgQAAAggXAWQgXAWggAAQggAAgXgWg");
	this.shape_4.setTransform(246.375,243.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("EgkJAN2QJyh9ZkgoQZkgpMgCxIg3HqIhhABIjRndIh3HfIhgABIjPnYIh2HdIiTADIjPnZIh4HeIh7ACIjSngIh4HgID4ABImdAHIjPnXIh3HdIjEADIjOnWIh2HbIkKAFIjNnVIh2HaIhgACIh9mwIh/G0Ii8ADIi0mGIiCGLIksAFgEghYAQQQgXAXAAAgQAAAgAXAWQAWAXAhAAQAgAAAWgXQAXgWAAggQAAgggXgXQgWgXggAAQghAAgWAXgA4VPeQgWAXAAAgQAAAgAWAXQAYAXAfAAQAhAAAWgXQAXgXAAggQAAgggXgXQgWgWghAAQgfAAgYAWgAq0OyQgWAXAAAgQAAAgAWAXQAXAXAgAAQAgAAAWgXQAYgXAAggQAAgggYgXQgWgWggAAQggAAgXAWgAiaOdQgWAXgBAgQABAgAWAXQAXAXAgAAQAgAAAWgXQAYgXAAggQAAgggYgXQgWgWggAAQggAAgXAWgAbsOMQgWAXAAAgQAAAgAWAXQAXAXAgAAQAgAAAWgXQAYgXAAggQAAgggYgXQgWgWggAAQggAAgXAWgAUPOFQgWAXAAAgQAAAgAWAXQAXAXAgAAQAgAAAWgXQAYgXAAggQAAgggYgXQgWgWggAAQggAAgXAWgEAhrAN9QgXAXAAAgQAAAgAXAXQAXAXAgAAQAgAAAXgXQAWgXAAggQAAgggWgXQgXgWggAAQggAAgXAWgANuN9QgXAXAAAgQAAAgAXAXQAWAXAhAAQAgAAAWgXQAXgXAAggQAAgggXgXQgWgWggAAQghAAgWAWgAGeN9QgWAXAAAgQAAAgAWAXQAXAXAgAAQAgAAAWgXQAYgXAAggQAAgggYgXQgWgWggAAQggAAgXAWgAqCHmQpeAnppBRInwBIIgmihIX6jwQA1jaBZkOIXfgHQA6DiA4ENIXmDmIgPC2QxClJ+RB+gApGphQJrAgJugpQAeBZAdBiIlqAMIvzAOIg7CdQBLjiA5iHgApGphQBIisA2hoIh+EUIAAAAgAk1xvQElmlEUDSQCaB1CNFKIvzAOQBJiPBKhrg");
	this.shape_5.setTransform(240,141.6667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,485,288.4);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.hat1("synched",0);
	this.instance.setTransform(-130.3,-128.05,1,1,0,0,0,240,141.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-372.8,-272.2,485,288.3);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.hat1("synched",0);
	this.instance.setTransform(-115.3,210.9,1,1,0,0,0,240,141.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357.8,66.7,485,288.40000000000003);


// stage content:
(lib.PracticeCardDmacias = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,10,29];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on current frame
		
		this.btn_hat.addEventListener("click", fl_ClickNextScene.bind(this));
		
		this.next_btn.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}
	this.frame_10 = function() {
		//this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(19).call(this.frame_29).wait(1));

	// text 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgEfQgthtAAiwQAAijAmhqQAmhqBBAAQBKAAAlB8QAfBlAACTQAACkgmBqQgmBphCAAQg7AAglhXgAggiKQgOAuAABdQAABgAOAuQANAuATAAQAUAAANgtQANgtABhjQgBhdgNguQgNgugTAAQgUAAgNAvg");
	this.shape.setTransform(761.6,433.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah8HnIgHi/QAUATAZAAQARAAAKgXQALgWAHg5IhorMIBkAAIAyHdIAvndIBeAAIhiL9QgRCDgRAuQgYBBgzAAQgUAAgrgRg");
	this.shape_1.setTransform(732.225,448.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah2E7QgXg7AAhXQAAhSAQg1QARgzAsgaQA2gfAOgMQAQgNASgUQAAgzgHgUQgIgUgSAAQgWAAgMAVQgJARgFAvIhbgcQAFhFAKgnQAKgoASgdQANgUAXgMQAWgLAbAAQAqAAAZAOQAaANARAsQAMAeAHA4QAHA4AAAyIAAE8QAAAyADAdQACAdAHAsIhZAAIgHgqIgDgtQgSAzgTAXQgYAdghAAQgsAAgXg7gAgCA2QgdAWgHAWQgIAWAAAcQAAAhAIAVQAHAUAPAAQAQAAANgWQANgXAGgfQAGghAAgzIAAgsQgUAUgUAQg");
	this.shape_2.setTransform(701.675,433.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABpHuIAArxIhCLxIhNAAIhCrxIAALxIhXAAIAAvbICLAAIA1JYIA0pYICLAAIAAPbg");
	this.shape_3.setTransform(663.3,420.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhNFPQgcgpgThXQgShYAAh2QAAinAlhoQAlhnBCAAQAzAAAfAuQAfAvAQBYQAQBYAACNIAAAfIi9AAQADBCAJAhQAOAuAVAAQAOAAANgUQAIgNAIggIBeAZQgWBsgeAvQgeAug4AAQgxAAgcgngAgjifQgIAhgDBAIBcAAQgChQgMgiQgMgjgUAAQgVAAgOA0g");
	this.shape_4.setTransform(609.1,433.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AicHuIAAvbICcAAQAugBAdAlQAcAlATBDQASBFAJBaQAIBbAABkQAACegMBYQgNBXgWA8QgWA6gaATQgiAbgcAAgAgzEOIAaAAQAgAAAOgVQAOgWAIg0QAIg1AAh3QAAidgSg5QgRg6gogBIgbAAg");
	this.shape_5.setTransform(575.375,420.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhgEfQgthtAAiwQAAijAmhqQAnhqBAAAQBKAAAlB8QAfBlAACTQAACkgmBqQgmBphCAAQg7AAglhXgAghiKQgNAuAABdQAABgANAuQANAuAUAAQAUAAAOgtQANgtgBhjQABhdgNguQgOgugUAAQgTAAgOAvg");
	this.shape_6.setTransform(524.3,433.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag5FiQgagWgTgvQgSgwgLhAQgLhAAAhqQAAhtANhKQAKg2ARgrQAQgqASgVQAbghAqAAQA8AAAhA+QAfA/ANB5IhZAiQgEgugLgXQgLgXgTAAQgWAAgPAwQgPAyAABhQAABZAPAtQAOAuAWAAQASAAANgbQAMgcAHg5IBaAdQgIBSgQA8QgSA7gaAhQgbAhgoAAQgmAAgbgUg");
	this.shape_7.setTransform(492.65,433.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkFuIAAmJQAAhDgJgcQgJgcgPAAQgRAAgKAmQgLAlAABhIAAFYIhfAAIAArLIBZAAIAAB0QAThHAVgeQATgfAdAAQAnAAAXBEQAWBDAACOIAAHGg");
	this.shape_8.setTransform(460.825,433.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgvHuIAArLIBfAAIAALLgAgvkzIAAi6IBfAAIAAC6g");
	this.shape_9.setTransform(436.95,420.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhOHRQgjgvgah2Qgah3AAi2QAAj1AtiFQAtiDBRAAQBBAAAlBLQAlBMARCcIhdA9QgFgugFgVQgIgjgNgTQgNgTgQAAQgjABgTBTQgOA+AACFQAACjARA9QARA9AeAAQAeAAAQgyQAPgwAIhfIBcBRQgJBxgUBMQgVBLgdAnQgeAmgtAAQg3AAgjgug");
	this.shape_10.setTransform(410.75,420.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ah8HnIgHi/QAUATAZAAQARAAAKgXQALgWAHg5IhorMIBkAAIAyHdIAvndIBeAAIhiL9QgRCDgRAuQgYBBgzAAQgUAAgrgRg");
	this.shape_11.setTransform(361.675,448.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiHH2IAAvcIBYAAIAABqQAThDAPgXQAUggAZABQAyAAAbBuQAbBtAACiQAACygeBeQgdBegtAAQgWAAgRgWQgSgVgOgrIAAFWgAgckDQgMApAABdQAABVAMAoQAMApATAAQAQAAALgnQALgnAAheQAAhYgLgoQgMgpgQAAQgSAAgMApg");
	this.shape_12.setTransform(332.55,446.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiHH2IAAvcIBYAAIAABqQAThDAPgXQAUggAZABQAyAAAbBuQAbBtAACiQAACygdBeQgeBegtAAQgWAAgRgWQgSgVgPgrIAAFWgAgckDQgMApAABdQAABVANAoQALApASAAQARAAALgnQALgnAAheQAAhYgLgoQgMgpgQAAQgSAAgMApg");
	this.shape_13.setTransform(300.8,446.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ah2E7QgXg7AAhXQAAhSAQg1QARgzAsgaQA2gfAOgMQAQgNASgUQAAgzgHgUQgIgUgSAAQgWAAgMAVQgJARgFAvIhbgcQAFhFAKgnQAKgoASgdQANgUAXgMQAWgLAbAAQAqAAAZAOQAaANARAsQAMAeAHA4QAHA4AAAyIAAE8QAAAyADAdQACAdAHAsIhZAAIgHgqIgDgtQgSAzgTAXQgYAdghAAQgsAAgXg7gAgCA2QgdAWgHAWQgIAWAAAcQAAAhAIAVQAHAUAPAAQAQAAANgWQANgXAGgfQAGghAAgzIAAgsQgUAUgUAQg");
	this.shape_14.setTransform(268.025,433.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AA5HuIAAmQIhyAAIAAGQIhpAAIAAvbIBpAAIAAFZIByAAIAAlZIBqAAIAAPbg");
	this.shape_15.setTransform(232.225,420.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},24).wait(6));

	// text
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("AgMBWQgJgFgEgJQgFgKAAgWIAAgtIgSAAIAAgkIASAAIAAgYIAygZIAAAxIAbAAIAAAkIgbAAIAAAtQgBAJACACQADAFAGAAQAFAAAKgDIADAiQgSAEgQAAQgSAAgIgFg");
	this.shape_16.setTransform(1002.8,651.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("AgyBCIAAiAIAuAAIAAAVQAGgOAIgFQAGgFALAAQALAAANAHIgPAjQgJgEgFAAQgKAAgGAIQgGAMAAAeIAAArg");
	this.shape_17.setTransform(991.55,653.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0000").s().p("AAoBZIgJgdIg+AAIgJAdIg4AAIBDiyIA7AAIBDCygAgTAVIAmAAIgTg/g");
	this.shape_18.setTransform(975.225,651.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AgyBCIAAiAIAvAAIAAAVQAFgOAIgFQAGgFALAAQALAAANAHIgQAjQgIgEgFAAQgKAAgGAIQgGAMAAAeIAAArg");
	this.shape_19.setTransform(952.65,653.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("AgoA8QgPgHgJgQQgKgPAAgWQAAgdAUgTQATgTAiAAQAbAAAQAJQAQAIAIAQQAJAQAAAZIAAAFIhjAAQABAMAGAGQAHAJAKAAQAIAAAHgEQAEgCAEgGIAxAEQgLAUgQAIQgQAJgdAAQgaAAgOgIgAgSgcQgFAGgBALIAxAAQgCgOgGgGQgHgGgKAAQgKAAgIAJg");
	this.shape_20.setTransform(937.75,653.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0000").s().p("AgMBWQgJgFgEgJQgFgKABgWIAAgtIgSAAIAAgkIASAAIAAgYIAwgZIAAAxIAcAAIAAAkIgcAAIAAAtQABAJABACQADAFAFAAQAGAAAKgDIADAiQgSAEgQAAQgRAAgJgFg");
	this.shape_21.setTransform(923.8,651.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0000").s().p("Ag4A2QgLgMAAgaIAAhRIAxAAIAABGQAAAMAFAFQAFAFAHAAQAJAAAGgGQAFgHAAgRIAAg+IAxAAIAACAIguAAIAAgVQgKANgKAGQgKAFgPAAQgVAAgMgMg");
	this.shape_22.setTransform(909.9,653.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0000").s().p("AhGBbIAAiyIAuAAIAAATQAKgMAIgEQAKgGANAAQAaAAAOAUQAOATAAAeQAAAggPAQQgQASgXgBQgMAAgIgDQgKgEgHgIIAAA+gAgOguQgHAHAAARQAAAPAHAHQAGAHAJAAQAJAAAGgHQAGgGAAgRQAAgQgHgHQgGgIgIAAQgJAAgGAIg");
	this.shape_23.setTransform(893.625,656);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC0000").s().p("AA8BCIAAhJQAAgIgEgFQgEgGgIAAQgIAAgGAGQgFAGAAAOIAABCIgxAAIAAhGIgBgMQgCgFgEgDQgDgDgGAAQgIAAgGAHQgGAGAAAOIAABCIgxAAIAAiAIAvAAIAAATQAJgMAKgFQALgFAOAAQAPAAAJAFQAJAGAFALQAMgNAKgFQAKgEANAAQAVAAAMAMQAMAMAAAbIAABQg");
	this.shape_24.setTransform(872.5,653.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC0000").s().p("AgyA0QgYgUABggQAAgcATgUQAVgTAhAAQAmAAAVAXQAQASAAAaQAAAdgVAUQgTATgjAAQgeAAgUgQgAgRgYQgHAIAAAQQAAASAHAIQAIAIAJAAQALAAAGgIQAIgIgBgSQABgQgIgIQgGgJgLAAQgJAAgIAJg");
	this.shape_25.setTransform(851.65,653.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC0000").s().p("AgoBUQgUgJgNgVQgNgVAAghQAAgsAXgYQAYgXArAAQAhAAAUANQATAOAJAcIgxALQgCgIgDgEQgFgGgGgDQgHgEgIAAQgSAAgKAPQgHALAAAYQgBAdAKALQAIALAQAAQAQAAAHgJQAJgJAEgQIAwAOQgFAVgLANQgKANgQAIQgPAGgYAAQgdABgRgJg");
	this.shape_26.setTransform(833.75,651.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC0000").s().p("AgxA6QgPgLgEgSIAygFQADAJAFAEQAGADAHAAQALAAAFgEQAFgDgBgFQABgFgGgDQgEgCgRgDQgagFgKgDQgJgEgHgIQgIgKABgLQAAgNAHgJQAIgKANgEQAMgFAWAAQAXAAALAEQALADAIAIQAHAHAEANIguAEQgDgGgEgDQgFgEgHAAQgJAAgEADQgEADAAAFQAAAEAFADQAFACAQACQAYADAMAFQAMAFAHAIQAGAKAAALQAAALgGAKQgIALgOAGQgOAHgaAAQgjAAgPgKg");
	this.shape_27.setTransform(967.35,616.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC0000").s().p("Ag+A5QgMgLAAgQQABgOAIgKQAIgIAYgFIAkgIIARgGQAAgJgEgEQgEgDgJAAQgMAAgFAEQgGADgCAIIgwgFQADgMAFgHQAFgIAKgFQAGgEAMgCQANgCAOAAQAVAAANADQAOACAJAIQAGAGAEAKQADAKABAJIAAA4IABAPIAFANIgvAAIgDgIIgCgIQgKAJgJAEQgNAGgSAAQgXAAgMgLgAgBAKQgPAEgDAEQgFAEAAAFQAAAGAFADQAEAEAHAAQAIAAAHgEQAHgEADgGQADgGAAgJIAAgIIgVAHg");
	this.shape_28.setTransform(951.55,616.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC0000").s().p("AgYBZIAAiAIAxAAIAACAgAgYg3IAAgiIAxAAIAAAig");
	this.shape_29.setTransform(939.025,613.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC0000").s().p("AgdBAQgOgEgKgJQgJgIgHgMQgFgLAAgTQAAgTAHgOQAFgKAIgHQAJgIAKgEQAOgGAVAAQAgAAARAMQARALAGAWIguAGQgDgIgGgEQgFgFgKAAQgMAAgHAJQgIAJAAARQAAAQAIAIQAHAIALAAQAKAAAHgFQAGgFADgKIAwAFQgEAPgJALQgJALgOAGQgNAGgWAAQgUAAgNgEg");
	this.shape_30.setTransform(926.6,616.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC0000").s().p("Ag9A5QgNgLAAgQQAAgOAJgKQAIgIAYgFIAkgIIARgGQAAgJgEgEQgEgDgJAAQgMAAgFAEQgGADgCAIIgvgFQACgMAFgHQAFgIAJgFQAIgEALgCQAMgCAOAAQAWAAANADQAOACAJAIQAGAGAEAKQADAKAAAJIAAA4IABAPIAGANIgvAAIgEgIIgCgIQgJAJgJAEQgNAGgSAAQgXAAgLgLgAgBAKQgPAEgEAEQgEAEAAAFQAAAGAEADQAEAEAJAAQAHAAAHgEQAHgEADgGQADgGAAgJIAAgIIgVAHg");
	this.shape_31.setTransform(909.9,616.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC0000").s().p("AA8BCIAAhJQAAgIgDgFQgGgGgHAAQgIAAgGAGQgFAGAAAOIAABCIgxAAIAAhGIgBgMQgCgFgDgDQgEgDgFAAQgKAAgFAHQgGAGABAOIAABCIgyAAIAAiAIAuAAIAAATQALgMAKgFQAJgFAPAAQAPAAAIAFQAKAGAGALQALgNAKgFQAJgEAPAAQAUAAAMAMQAMAMAAAbIAABQg");
	this.shape_32.setTransform(889.1,616.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC0000").s().p("AhRBZIAAiyIBRAAQAYAAAPAHQAPAHAKAMQAKAMAEAQQAEARAAASQAAAcgGAQQgHAPgLALQgMALgNAEQgSAEgPAAgAgaAxIAOAAQAQAAAHgEQAIgEAEgJQAEgKAAgWQAAgbgJgKQgKgLgUAAIgOAAg");
	this.shape_33.setTransform(867.225,613.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(30));

	// pinata 
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CC0000").ss(2,1,1).p("AAoHqIhPvT");
	this.shape_34.setTransform(530,27);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF66CC").ss(1,1,1).p("ANSAAQAABRgNBNQgrDxixC6QgBAAAAABQgjAighAeQhcBQhqAwQgnASghAKQgXAIgWAFQhtAfh8AAQhGAAhEgKQiqgjiqhwQg3glg5gtQgFgFgFgFQh+h+g+iZQgOghgKgiQgIgZgGgaQgDgMgDgNQgRhWAAhdQAAiOAph+QAJgbALgaQATgwAagtQBFhlCNiTQAbgWAcgTQDSiSEMAAQATASALgRQDpAHC7B3QBNAyBBA/QAIAIAIAIQAtAuBCBmQAhAzAYAqIAAAAQBKCiAAC+g");
	this.shape_35.setTransform(535,379.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AhPhtQAPAAAPABQAYgngOjUIAApEQAAgDAAgDQAYlJgRivQgZkAg+h8IAAjmIAejwAt4HXQABgdATgnQAQgjAdgrQA4hjBXhXQAhghAigcIrgnJIHNNSIt7DbIN3ExAK4GEIAAAAIAAAAIAAAAIQ8CsIv/FSAIACDQAFAEAEAEQAEAEADADAIZUuIgBAAQgHAIgIAHQgaAagbAXQi4CmiDAEIFvLGIARuwIAAgBAqCVhIgRObIG5rQQi6gciahsQgrgegpglQgPgNgNgNAuQOXQg9kMBVi0AFyARIN6nmIo0NZ");
	this.shape_36.setTransform(543,305.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC0000").s().p("AnTBiQAAi/hKihIAAAAIQ7CtIv+FQQANhMAAhRg");
	this.shape_37.setTransform(666.8125,370.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#66FFFF").s().p("Ah2GsQgYgqgigzQhChmgsguIgHgHIgJgIQhChAhMgyIN5nmIozNYIAAABg");
	this.shape_38.setTransform(624.525,301.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#993366").s().p("Am8gqIN6jbQhWC0A+ELIAGAZQAFAaAIAZg");
	this.shape_39.setTransform(409.55,379.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF00").s().p("Ai/jtQCDgEC3ilQAbgYAagZIAPgQIABAAIgROvg");
	this.shape_40.setTransform(577.4875,485.6875);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0033FF").s().p("AjKnMQApAkArAfQCYBrC7AcIm5LPg");
	this.shape_41.setTransform(499.0625,489.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00FF66").s().p("AlvmpILfHJQgiAcghAiQhXBWg5BjQgdArgQAjQgSAogBAdg");
	this.shape_42.setTransform(444.825,310.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6699").s().p("AiKNIQiqgjiphwQg5glg4gtIgKgKQh+h+g/iZQgNghgKgiQgIgZgGgaIgGgZQgRhWAAhdQAAiOAph+QABgdASgoQARgiAdgrQA4hjBXhXQAhghAjgcQiOCShFBlQgaAtgUAwQgKAagJAbQAJgbAKgaQAUgwAagtQBFhlCOiSQAagXAdgTQDRiSEMAAQATASALgRQDpAHC7B3QBNAyBBA/IAQAQQAsAuBDBmQAhAzAYAqIAAAAQBKCiAAC+QAABRgNBNQgrDxixC6IgBABQgjAighAeQhcBQhqAwQgnARghALIgtANQhtAfh8AAQhGAAhEgKgAndLAQgsgegpglIgcgaQA4AtA5AlQCpBwCqAjQi6gdiZhrgAJoJKIgPAPQgaAagbAXQAhgeAjgigAJQphIAJAJIAHAHIgQgQg");
	this.shape_43.setTransform(535,379.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},10).to({state:[]},14).wait(6));

	// hat
	this.btn_hat = new lib.Tween1();
	this.btn_hat.name = "btn_hat";
	this.btn_hat.setTransform(619.85,-29.6);

	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(604.3,-69.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_hat}]}).to({state:[{t:this.btn_hat}]},9).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.btn_hat).to({x:604.8,y:502.6,mode:"synched",startPosition:0},9).to({_off:true,x:604.3,y:-69.6},1).wait(20));

	// Layer_3
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2,1,1).p("EBIzgMOIgJACIrsDbIDfOwIM+jIIkovFIAAAAEAkBAIVINIiMIitrlIsUCFgEgyUgFUIAKACEgyUgFUIAAAAEgyEgFRIN3CHIgRPZIsqhaIAKiCIhWuHEg+EgHqIgIgCIuLjnIhDS2IOsBQIAqwdIAAAA");
	this.shape_44.setTransform(522.5,165.7125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(6,1,1).p("EhV2gGXQBBAZB8ApQD3BUEjBTQG6B+HRBnQAEABAEABQFxBSF/BEQAFABAFABIAGABQADABACAAQG5BOG5A4QMEBjMGAfQDSAIDQADQSpATR6iTQBZgLBZgMQAKgCAKgBQGOg4GGhMQHXhcHLh4QF7hkFxh3QAEgCAFgBQFqh2FiiH");
	this.shape_45.setTransform(510.5,110.895);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AoNlpQF7hkFwh3IAIgCIEoPFIs8DIg");
	this.shape_46.setTransform(965.325,145.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC33FF").s().p("Angk0QGPg4GEhMICuLlItHCMg");
	this.shape_47.setTransform(788.925,174.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#66CCFF").s().p("Al3HYIAKiCIhVuHIAJABIAGACIAGABQG3BOG5A4IgRPZg");
	this.shape_48.setTransform(245.575,187.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF99CC").s().p("AnqIzIBCy2QG5B/HSBoIAIACIgqQdg");
	this.shape_49.setTransform(76.15,157.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]}).wait(30));

	// Label
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AACCvIAAjkQgXASgVALQgWALgiAKIAAhPQAygPAbgWQAZgWAQghIBOAAIAAFdg");
	this.shape_50.setTransform(203.3,733.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhOB0QgcgOgTgeQgSgeAAgqQAAg5AlgkQAmgkBCAAQA0AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAJALQAOAQAVAAQAOAAANgHQAIgEAJgMIBeAJQgWAlgeARQgeAQg5AAQgxAAgdgOgAgjg3QgIAMgDAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_51.setTransform(157.65,738.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgIgKgRAAQgPAAgMAOQgLANAAAhIAAB3IhfAAIAAj4IBZAAIAAApQAUgZAVgKQATgLAdAAQAoAAAWAXQAXAYAAAxIAACdg");
	this.shape_52.setTransform(125.6,738.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhOB0QgcgOgTgeQgSgeAAgqQAAg5AlgkQAmgkBCAAQA0AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAJALQAOAQAVAAQAOAAANgHQAIgEAJgMIBeAJQgWAlgeARQgfAQg4AAQgxAAgdgOgAgjg3QgIAMgDAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_53.setTransform(93.65,738.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAcgRAWQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_54.setTransform(61.675,738.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ah1CQQghgigFg0IBlgGQADAYALANQAQAVAeAAQAWAAANgKQAMgLgBgOQAAgOgLgKQgMgLgpgJQhGgQgegZQgegaAAgoQAAgbAPgXQAPgYAfgNQAggOA0AAQBCAAAjAZQAiAYAGA2IhkAGQgDgYgNgKQgNgLgWAAQgSAAgKAIQgJAIAAALQAAAIAIAHQAHAHAcAGQBFAPAeAPQAeAPAOAWQAOAXAAAcQAAAhgSAcQgTAcggAOQgiAPgxAAQhXAAgigig");
	this.shape_55.setTransform(28.15,733.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_56.setTransform(205.125,733.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_57.setTransform(205.575,738.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhOB1QgcgPgSgeQgTgeAAgpQAAg6AlgkQAmgkBBAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAAKIi+AAQACAYAKALQAOAQAVAAQAPAAAMgHQAIgFAJgLIBeAJQgWAmgfAQQgeAQg4AAQgxAAgdgNgAgjg3QgIAMgDAWIBdAAQgDgbgMgMQgMgNgTAAQgWAAgOASg");
	this.shape_58.setTransform(157.8,743.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAkB/IAAiIQAAgXgJgKQgIgKgQAAQgQAAgLAOQgLANAAAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAWAYgBAxIAACdg");
	this.shape_59.setTransform(125.75,742.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhOB1QgcgPgSgeQgTgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAAKIi+AAQACAYALALQANAQAWAAQANAAANgHQAIgFAJgLIBeAJQgWAmgfAQQgdAQg5AAQgxAAgdgNgAgjg3QgIAMgDAWIBdAAQgDgbgMgMQgMgNgTAAQgWAAgOASg");
	this.shape_60.setTransform(93.8,743.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgRgLgWQgLgWAAglQAAglANgaQAKgSAQgPQARgPASgIQAcgLAqAAQA9AAAgAWQAgAWANAqIhaALQgEgPgLgJQgLgHgTgBQgXABgOAQQgPARAAAhQAAAfAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbALQgIAcgRAUQgRAVgaAMQgbALgpAAQgnAAgagHg");
	this.shape_61.setTransform(61.825,743.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQAEAYAJANQARAVAeAAQAWAAAMgKQAMgLABgOQAAgOgMgKQgLgLgrgJQhFgQgegZQgegaAAgoQAAgbAQgXQAPgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgWAAQgSAAgJAIQgKAIAAALQAAAIAIAHQAIAHAcAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgTAcQgRAcghAOQghAPgyAAQhXAAghgig");
	this.shape_62.setTransform(28.3,738.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_56}]},10).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},10).wait(10));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(890.15,684.65);
	this.next_btn._off = true;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(20).to({_off:false},0).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(470.1,42.1,592.9,815.6);
// library properties:
lib.properties = {
	id: '3A91BFE71ED4D64D909DEDB7382E9530',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#00CC33",
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
an.compositions['3A91BFE71ED4D64D909DEDB7382E9530'] = {
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