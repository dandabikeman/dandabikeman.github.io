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
(lib.PracticeCardDMedina = function(mode,startPosition,loop) {
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
		this.stop(); // This will make the main timeline stop on the current frame
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(20));

	// Sun
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AIIpDIABlyAKLmzQBgCJATCrICklgAIIpDQAYAUAXAXQAwAwAkA1IAAikALkCkQgnCBhcBrIEFCWAL+h/QAEAoAAArQAABtgeBjIDIiQAJhGQQgUAXgWAXQhiBih1AyQhnAth2AJQgbACgdAAQhmAAhcgaQiCglhthZQgdgYgcgcQgbgbgYgcQhWhpgmh9QgdhhAAhsQAAgbACgZQAHhxAphjIjIjxAFKq1IAAiSAAfriQAWgBAWAAQCJAAB2AuQBnAoBXBKAAfriIAAj7AlSpbQCih8DPgLAlSpbIAAjYAhUlQQAAAegVAVQgVAVgeAAQgeAAgWgVQgVgVAAgeQAAgeAVgWQAWgVAeAAQAeAAAVAVQAVAWAAAegADyl7QAQgDADAEIAAAAADyl7QADAAADAAQAHAAAGABQAUAEAOAPQAUAUAAAcQAAAcgUATQgTAUgcAAQgRAAgNgHQgKgFgIgIQgUgTAAgcQAAgcAUgUQAIgJAKgEIAAAAQAAgBABAAADal0QAAgBABAAQALgFAMgBAo5k0QAzh9BnhnQAlglAogeApphgIkahnAnSGHIjpAAApOChIldAAAh3JwIi0EeAlmHyIjdDeACDKIIAAFWAFgJSIDGDOAmtCgQIHGgHgmg");
	this.shape.setTransform(928,107);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjCKdQiCglhthZQgegYgcgbQgbgcgXgcQhWhpgmh9QgdhhAAhtQAAgZACgZQAHhxAohkQAzh8BnhnQAmgmAogeQCih7DQgMIArgBQCJAAB2AuQBmAoBYBLQAYAUAXAXQAvAvAlA1QBgCKATCqQAEApAAApQAABvgeBjQgoCAhbBrQgUAYgWAXQhiBhh1AzQhnAth2AIQgcACgcAAQhmAAhcgagAHvDNQjwDQj6AAQj5AAkEjQQEEDQD5AAQD6AADwjQgABpkKQAAAcAUAUQAIAIAKAFQANAGAQAAQAcAAAUgTQAUgUAAgcQAAgcgUgUQgPgPgTgDIgOgCIgFABIABAAIABgBIABAAIAHgBIABAAIAAAAQAGAAACACIAAABIAAgBQgCgCgGAAIAAAAIgBAAIgHABIgBAAIgBABIgBAAIAFgBIAOACQATADAPAPQAUAUAAAcQAAAcgUAUQgUATgcAAQgQAAgNgGQgKgFgIgIQgUgUAAgcQAAgcAUgUQAIgIAKgFIAAAAIABAAIgBAAIAAAAQgKAFgIAIQgUAUAAAcIAAAAgAkwkjQAAAeAVAVQAVAWAeAAQAeAAAWgWQAVgVAAgeQAAgegVgWQgWgUgeAAQgeAAgVAUQgVAWAAAeIAAAAgACQlHIgBAAIABAAQAKgFANgBQgNABgKAFgAkbjwQgVgVAAgeQAAgeAVgWQAVgUAeAAQAeAAAWAUQAVAWAAAeQAAAegVAVQgWAWgeAAQgeAAgVgWgAifkjIAAAAg");
	this.shape_1.setTransform(935.5,102.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},10).wait(20));

	// clouds
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AMZnqQGPmGH1GGQDNjwE7DwQG4B4jIB4QHiCljeCkQl9EHiziPQlNC3gRklQkTEtkTiNQjbDDi1kxQn3CWADmjQjkkuG2COQhfjFFFgDgEgiygDcQFznHGZHHQDXmWDXEUQE1kAAVGqQElj+gXIBQB3CMgTCqQi9Fzlfk3QhqEAjCluQDoIIpkkEQgDAilvk6QggENmMgrQmggwCGlcQkgjSDSi+QCUiGFAClg");
	this.shape_2.setTransform(462.7,93);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(10).to({_off:false},0).wait(20));

	// Tree
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ABuAAQAABbggBBQghBAgtAAQgsAAghhAQgghBAAhbQAAhaAghAQAhhBAsAAQAtAAAhBBQAgBAAABag");
	this.shape_3.setTransform(900,546.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AIyjxIDPAAQFXiPlghrQHXillBilICVhkQBCjhohibQBBlTmpC9Qivj2iuHIQkfmnjVGnQmTgXBnG7QkQEbEQCJQhYGUGiiQQFDCDAblLQHIQKnINNAJOlBQgPAogNAoQlAPHFcMY");
	this.shape_4.setTransform(880,479.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhNCbQgghAAAhbQAAhaAghAQAhhBAsAAQAtAAAgBBQAhBAAABaQAABbghBAQggBBgtAAQgsAAghhBg");
	this.shape_5.setTransform(900,546.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},10).wait(20));

	// butterfllies
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AgKgaIAUA1");
	this.shape_6.setTransform(860.4,458);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("APz1aQAAAZgRARQgSASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgSQARgRAYAAQAZAAASARQARASAAAYgALEufQD0inBpA2QBqA1grBOIiCC0QDfBRghB3QgSC/kRhMQhGgUhqjEIgCAHAKmwOQAJAVAIAeQABAEABAEQAGAZAFAbQAIAuADA2QABAeAAAhQAAACAAADQAABKgJA+QgDAZgFAXQgEARgEAQQgZBdgjAAQgjAAgZhdQgCgJgDgJQgUhXAAh1QAAhJAIg9QABgKABgJQAGgmAJggQADgNAEgLQAHgUAHgPQASghAVAAQASAAAQAZQAEAHAFAJIDWkREAmmAT/QIoEkEgkQAFy0RQAAAYgRARQgRARgXAAQgYAAgSgRQgQgRAAgYQAAgYAQgRQASgQAYAAQAXAAARAQQARARAAAYgEgn6gAqQAAAWgQAPQgPAPgWAAQgVAAgQgPQgPgPAAgWQAAgVAPgQQAQgPAVAAQAWAAAPAPQAQAQAAAVgEgsPAGkQAgBjAACNQAAB0gnCNQABgBAAAAQgeBUgqAAQgrAAgghZEgsuAFgQARAYANArQABAAAAABQAAAAAAAAQAAAAAAAAQB2iIDCA4QAgB9h5B9QgOAPgRAPIAAA8ICWCMIAAB4QACBPjTgFQhvi8gBAEQgBAEgXBHQAHgTgFAOQgCAJgDAHQACgGABgFAIuuCQh8i4jzDCQhWCaDXAjQjKBuAWBuQBeChBggDQCYgOBYjhEgxhAAlQAAASgNAMQgMANgSAAQgRAAgNgNQgMgMAAgSQAAgRAMgNQANgLARAAQASAAAMALQANANAAARgEgu+AHuQACgJACgJQAAgBAAgBQAHgdAIgaQAMgkANgXQAYgoAdAAQAaAAAVAgIDLlWEgu+AHuQAAgKgCgJQgWiJkXgIQANC2B/BsIAABuIiCDIQAaCnBogcQBKAhBvi/QgBgFgCgGQgghjAAiNQAAhcANhKgEguSAFoIjPkYEgsWAOVQADgHABgFAJGvzIjUjk");
	this.shape_7.setTransform(608,317);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("EghHALnQgNgNAAgSQAAgRANgNQAMgMARAAQASAAAMAMQANANAAARQAAASgNANQgMAMgSAAQgRAAgMgMgA3yKeQgPgQAAgWQAAgVAPgQQAQgPAVAAQAWAAAPAPQAQAQAAAVQAAAWgQAQQgPAPgWAAQgVAAgQgPgAVxpFQgQgQAAgZQAAgXAQgSQARgQAZAAQAYAAAQAQQARASAAAXQAAAZgRAQQgQARgYAAQgZAAgRgRgAfvqMQgRgSAAgYQAAgZARgSQASgRAZAAQAYAAARARQASASAAAZQAAAYgSASQgRARgYAAQgZAAgSgRg");
	this.shape_8.setTransform(495.8,249.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A8qO3IgDgLQgghjAAiNQAAhbAOhLIADgSIAAgBQAHgdAIgaQAMglAOgXQAXgoAdAAQAaAAAVAgQARAZANArIABAAIAAABQAgBjAACMQAAB0gmCNIAAAAQgeBTgqAAQgrAAgghZgA6UOxIgDAMIAAAAIADgMgA6XO9IAAAAgA6UOxQACgFABgCQABgDAAAAQAAgBAAACQAAABgCADIgFARIADgMgAa9n1IgFgTQgUhWAAh2QAAhJAIg9IACgTQAGglAJghIAHgXQAHgVAHgOQASgiAVAAQASAAAQAaIAIAQQAKAUAIAeIACAIQAGAZAFAbQAIAvADA1QABAeAAAhIAAAFQAABLgJA+QgDAZgFAWIgIAiQgZBcgjAAQgjAAgZhcg");
	this.shape_9.setTransform(493,313);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},10).wait(20));

	// Grass
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("EBPOgA2I5eAAMiE9ABt");
	this.shape_10.setTransform(511,638.4);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10).to({_off:false},0).wait(20));

	// Label
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AACCvIAAjkQgWASgWALQgXALggAKIAAhPQAwgPAbgWQAbgWAPghIBPAAIAAFdg");
	this.shape_11.setTransform(607.3,316.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAAvgVQgCgcgNgMQgMgLgTgBQgWABgOARQgJAMgCAWIBdAAIAAAAg");
	this.shape_12.setTransform(561.6,321.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_13.setTransform(529.6,320.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAAvgVQgCgcgMgMQgNgLgUgBQgVABgOARQgJAMgCAWIBdAAIAAAAg");
	this.shape_14.setTransform(497.6,321.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_15.setTransform(465.6,321.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_16.setTransform(432.1,316.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiIgnAcIgWAVICUAAIAABOg");
	this.shape_17.setTransform(209.1,37.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhNB1QgdgPgSgeQgTgeAAgpQAAg6AmgkQAlgkBBAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAAKIi+AAQACAYALALQANAQAWAAQANAAANgHQAIgFAJgLIBeAJQgWAmgfAQQgdAQg5AAQgxAAgcgNgAAvgVQgDgbgMgMQgMgNgTAAQgWAAgOASQgJAMgCAWIBdAAIAAAAg");
	this.shape_18.setTransform(161.7,42.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAjB/IAAiIQABgXgJgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYAAAxIAACdg");
	this.shape_19.setTransform(129.6,42.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhNB1QgdgPgSgeQgTgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAAKIi+AAQACAYALALQANAQAWAAQAOAAAMgHQAIgFAJgLIBeAJQgWAmgfAQQgdAQg5AAQgxAAgcgNgAAvgVQgCgbgNgMQgMgNgTAAQgWAAgOASQgJAMgCAWIBdAAIAAAAg");
	this.shape_20.setTransform(97.7,42.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgRgLgWQgLgWAAglQAAglANgaQAKgSAQgPQARgPASgIQAcgLAqAAQA9AAAgAWQAgAWANAqIhaALQgEgPgLgJQgLgHgTgBQgXABgOAQQgPARAAAiQAAAfAPAPQAOAQAWAAQASAAANgJQANgKAGgUIBbALQgIAcgRAUQgRAVgaAMQgbALgpAAQgnAAgagHg");
	this.shape_21.setTransform(65.7,42.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQANgLAAgOQAAgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAQgXQAOgYAggNQAfgOA0AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAHAHAdAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgTAcQgRAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_22.setTransform(32.2,37.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_23.setTransform(609.4,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},10).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23}]},10).wait(10));

	// Button
	this.btn_Next = new lib.BasicButton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.parent = this;
	this.btn_Next.setTransform(890.2,684.7);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Next).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(924.8,662.7,578.3,457);
// library properties:
lib.properties = {
	id: '02CF2EC167A2BE459A58785777E3C5E1',
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
an.compositions['02CF2EC167A2BE459A58785777E3C5E1'] = {
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