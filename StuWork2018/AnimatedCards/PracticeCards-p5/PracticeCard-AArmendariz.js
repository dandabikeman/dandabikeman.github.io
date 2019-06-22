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
	this.shape_2.graphics.f("#000000").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAuAEQgLATgPAIQgPAIgcAAQgYAAgOgHgAAYgKQgCgOgGgGQgGgGgKAAQgKAAgHAJQgFAGAAALIAuAAIAAAAg");
	this.shape_2.setTransform(46.2,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAgBWIg/hdIAABdIgyAAIAAirIAyAAIA/BeIAAheIAyAAIAACrg");
	this.shape_3.setTransform(28.2,25.5);

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
(lib.PracticeCardAArmendariz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on the current frame
		
		//this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(20));

	// envelope
	this.btn_Next = new lib.BasicButton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.parent = this;
	this.btn_Next.setTransform(878.2,705.5);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBGuAw9MgvNg82MAxFglEMiQ3AAPEBGuAw9MAB4hh6A2CrLIWaQvIXJxdA2CrLMgyjA8IA2CrLMgyPgljMgAUBhrMCPTAAA");
	this.shape.setTransform(525.6,371.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btn_Next}]}).wait(30));

	// Label
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag6BYQgVgLgOgXQgOgXAAgfQAAgqAcgcQAcgbAxAAQAnABAYAMQAXAMAMAXQAMAXAAAkIAAAIIiOAAQACARAHAJQAKALAQAAQALAAAJgEQAGgEAHgJIBGAHQgQAdgXAMQgXALgqABQglgBgVgJgAAjgQQgCgUgJgJQgJgJgPAAQgQAAgKANQgGAJgCAQIBFAAIAAAAg");
	this.shape_1.setTransform(680.2,725.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhmCDIAAkBIBDAAIAAAcQAOgSAMgFQAOgJATAAQAmAAAUAdQAVAdAAAqQAAAtgXAZQgWAYgiAAQgRAAgMgFQgOgGgLgLIAABZgAgVhCQgJAKAAAYQAAAXAJAJQAKALANAAQAMAAAJgLQAIgJAAgZQAAgWgJgKQgIgLgNAAQgNAAgJALg");
	this.shape_2.setTransform(656.6,729.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhIBLQgigdAAguQAAgpAcgcQAdgcAxAAQA3ABAdAgQAXAaAAAmQAAAqgcAdQgdAbgyAAQgtAAgbgXgAgZgjQgKAMAAAXQAAAZAKAMQALANAOAAQAPAAAKgNQAKgLAAgaQAAgYgKgLQgKgMgPAAQgOAAgLAMg");
	this.shape_3.setTransform(632.1,725.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgjCBIAAkBIBHAAIAAEBg");
	this.shape_4.setTransform(614.2,722.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag6BYQgVgLgOgXQgOgXAAgfQAAgqAcgcQAcgbAxAAQAnABAYAMQAXAMAMAXQAMAXAAAkIAAAIIiOAAQACARAHAJQAKALAQAAQALAAAJgEQAGgEAHgJIBGAHQgQAdgXAMQgXALgqABQglgBgVgJgAAjgQQgCgUgJgJQgJgJgPAAQgQAAgKANQgGAJgCAQIBFAAIAAAAg");
	this.shape_5.setTransform(596.2,725.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AggBdIhNi5IBKAAIAkB1IAlh1IBIAAIhPC5g");
	this.shape_6.setTransform(574.2,725.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAbBfIAAhlQAAgSgHgHQgGgIgMAAQgMAAgIALQgIAJAAAZIAABZIhIAAIAAi5IBDAAIAAAeQAPgTAPgIQAPgHAVgBQAeAAARASQARASAAAlIAAB1g");
	this.shape_7.setTransform(552.1,725.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag6BYQgVgLgOgXQgOgXAAgfQAAgqAcgcQAcgbAxAAQAnABAYAMQAXAMAMAXQAMAXAAAkIAAAIIiOAAQACARAHAJQAKALAQAAQALAAAJgEQAGgEAHgJIBGAHQgQAdgXAMQgXALgqABQglgBgVgJgAAjgQQgCgUgJgJQgJgJgPAAQgQAAgKANQgGAJgCAQIBFAAIAAAAg");
	this.shape_8.setTransform(528.2,725.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Ag6BYQgVgLgOgXQgOgXAAgfQAAgqAcgcQAcgbAxAAQAnABAYAMQAXAMAMAXQAMAXAAAkIAAAIIiOAAQACARAHAJQAKALAQAAQALAAAJgEQAGgEAHgJIBGAHQgQAdgXAMQgXALgqABQglgBgVgJgAAjgQQgCgUgJgJQgJgJgPAAQgQAAgKANQgGAJgCAQIBFAAIAAAAg");
	this.shape_9.setTransform(492.2,725.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAbCBIAAhnQAAgRgHgIQgGgGgMAAQgMAAgIAJQgIAKAAAZIAABaIhIAAIAAkBIBIAAIAABfQAPgPANgHQAOgGAUAAQAdAAARASQARARAAAkIAAB3g");
	this.shape_10.setTransform(468.1,722.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgSB8QgNgHgFgOQgHgOAAgfIAAhBIgaAAIAAg0IAaAAIAAgiIBHglIAABHIAnAAIAAA0IgnAAIAABCQAAAMACADQADAGAKAAQAHAAAOgEIAGAxQgbAGgXAAQgaAAgMgHg");
	this.shape_11.setTransform(448.2,722.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAbBfIAAhlQAAgSgHgHQgGgIgMAAQgMAAgIALQgIAJAAAZIAABZIhIAAIAAi5IBDAAIAAAeQAPgTAPgIQAPgHAVgBQAeAAARASQARASAAAlIAAB1g");
	this.shape_12.setTransform(416.2,725.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("Ag6BYQgVgLgOgXQgOgXAAgfQAAgqAcgcQAcgbAxAAQAnABAYAMQAXAMAMAXQAMAXAAAkIAAAIIiOAAQACARAHAJQAKALAQAAQALAAAJgEQAGgEAHgJIBGAHQgQAdgXAMQgXALgqABQglgBgVgJgAAjgQQgCgUgJgJQgJgJgPAAQgQAAgKANQgGAJgCAQIBFAAIAAAAg");
	this.shape_13.setTransform(392.2,725.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AhmCDIAAkBIBDAAIAAAcQAOgSAMgFQAOgJATAAQAmAAAUAdQAVAdAAAqQAAAtgXAZQgWAYgiAAQgRAAgMgFQgOgGgLgLIAABZgAgVhCQgJAKAAAYQAAAXAJAJQAKALANAAQAMAAAJgLQAIgJAAgZQAAgWgJgKQgIgLgNAAQgNAAgJALg");
	this.shape_14.setTransform(368.6,729.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AhIBLQgigdAAguQAAgpAcgcQAdgcAxAAQA3ABAdAgQAXAaAAAmQAAAqgcAdQgdAbgyAAQgtAAgbgXgAgZgjQgKAMAAAXQAAAZAKAMQALANAOAAQAPAAAKgNQAKgLAAgaQAAgYgKgLQgKgMgPAAQgOAAgLAMg");
	this.shape_15.setTransform(344.2,725.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiIgnAcIgWAVICUAAIAABOg");
	this.shape_16.setTransform(196.3,50.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhOB1QgcgPgSgeQgTgeAAgpQAAg6AlgkQAmgkBBAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQACAYAKALQAOAQAVAAQAPAAAMgHQAIgFAJgLIBeAJQgWAmgfAQQgeAQg4AAQgxAAgdgNgAAvgVQgDgbgMgMQgMgMgTAAQgWgBgOATQgIALgDAWIBdAAIAAAAg");
	this.shape_17.setTransform(148.8,55.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAkB/IAAiIQAAgXgJgKQgIgKgQAAQgQAAgLAOQgLANAAAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAWAYgBAxIAACdg");
	this.shape_18.setTransform(116.8,54.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhOB1QgcgPgSgeQgTgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQACAYALALQANAQAWAAQANAAANgHQAIgFAJgLIBeAJQgWAmgfAQQgeAQg4AAQgxAAgdgNgAAvgVQgDgbgMgMQgMgMgTAAQgWgBgOATQgIALgDAWIBdAAIAAAAg");
	this.shape_19.setTransform(84.8,55.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgQgLgXQgLgWAAglQAAglANgaQAKgSAQgPQARgQASgGQAcgMAqAAQA9AAAgAWQAgAWANAqIhaALQgEgPgLgJQgLgHgTAAQgXAAgOAQQgPASAAAgQAAAfAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbALQgIAcgRAUQgRAVgaAMQgbALgpAAQgnAAgagHg");
	this.shape_20.setTransform(52.8,55.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQAEAYAJANQARAVAeAAQAWAAAMgKQAMgLABgOQAAgOgMgKQgLgLgrgJQhFgQgegZQgegaAAgoQAAgbAQgXQAPgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgWAAQgSAAgKAIQgJAIAAALQAAAIAIAHQAIAHAcAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgTAcQgRAcghAOQghAPgyAAQhXAAghgig");
	this.shape_21.setTransform(19.3,50.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AgLh5QGPmUicHlQg7C2jdC2Qiiiag3kOQg+m0E8Gfg");
	this.shape_22.setTransform(471,375.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCCFF").s().p("AkJhkQg+m0E8GfQGPmUicHlQg7C2jdC2Qiiiag3kOg");
	this.shape_23.setTransform(471,375.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_24.setTransform(609.4,316.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAAvgVQgCgcgNgMQgMgLgTgBQgWABgOARQgJAMgCAWIBdAAIAAAAg");
	this.shape_25.setTransform(561.6,321.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_26.setTransform(529.6,320.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAAvgVQgCgcgMgMQgNgLgUgBQgVABgOARQgJAMgCAWIBdAAIAAAAg");
	this.shape_27.setTransform(497.6,321.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_28.setTransform(465.6,321.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_29.setTransform(432.1,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},10).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(572.1,441,931.1,699.6);
// library properties:
lib.properties = {
	id: '20367A561C75DE419912390F320A94FB',
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
an.compositions['20367A561C75DE419912390F320A94FB'] = {
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