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
(lib.PracticeCardLToscano = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on current frame
		
		this.btn_next.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// hat
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A4lk8IGQFpIGelyIGFEQIEulCIFFFaIE6l/IFsF/IFGmLIErGCQhGmQgpinQgxjIg8irQiq7YuSCPQuSCPq5YaQ2TDEpmHWQw2N0OsM1UAzwAelAnGgXjUAnHgXjgSvgNOQvfnHzlhtAWppdQONAuRAJoQBNN++1KlQzVGCzThyQpwAopGkgIvso5QnEooDuk5QM6rbQAgeQglBkgoB/Qh+GbhRH7MA1KgAOAThEwQAAAfgWAWQgVAVgfABQghgBgWgVQgWgWAAgfQAAgfAWgVQAWgWAgAAQAfAAAWAWQAWAVAAAfgA70JaQgRBwgRB6QYDPld5vZQgHiFgJh/QghnMgdimA1LtwQhMCehBCzAwrnXQAAAwgiAhQghAigxAAQgwAAgigiQgighAAgwQAAgvAigiQAighAwAAQAxAAAhAhQAiAiAAAvgAktnXQAAAwgiAhQgiAigwAAQgwAAgigiQgighAAgwQAAgvAigiQAighAwAAQAwAAAiAhQAiAiAAAvgAFsnXQAAAwgiAhQgiAigwAAQgxAAgigiQgighAAgwQAAgvAigiQAighAxAAQAwAAAiAhQAiAiAAAvgAPsnXQAAAwgiAhQgiAigwAAQgwAAgigiQgighAAgwQAAgvAigiQAighAwAAQAwAAAiAhQAiAiAAAvgAJhEwQAAAfgWAWQgWAVgfABQghgBgVgVQgWgWAAgfQAAgfAWgVQAWgWAfAAQAgAAAWAWQAWAVAAAfgAgSEwQAAAfgWAWQgWAVgeABQgigBgVgVQgWgWAAgfQAAgfAWgVQAWgWAfAAQAgAAAWAWQAWAVAAAfgAqfEwQAAAfgWAWQgVAVgfABQghgBgWgVQgWgWAAgfQAAgfAWgVQAWgWAgAAQAfAAAWAWQAWAVAAAfgA0sEwQAAAfgWAWQgVAVgfABQghgBgWgVQgWgWAAgfQAAgfAWgVQAWgWAgAAQAfAAAWAWQAWAVAAAfg");
	this.shape.setTransform(527.6,385.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("A3VmVIGPFqIGelzIGGEQIEslBIFGFaIE6l/IFtF/IFGmMIEqGCQAeCnAgHMMg1JAAOQBRn8B+mbgASvCjQgVAWAAAfQAAAfAVAVQAWAVAhABQAfgBAVgVQAWgVAAgfQAAgfgWgWQgWgVgfAAQggAAgWAVgAIvCjQgWAWAAAfQAAAfAWAVQAWAVAgABQAfgBAWgVQAWgVAAgfQAAgfgWgWQgWgVgfAAQggAAgWAVgAhECjQgVAWAAAfQAAAfAVAVQAVAVAiABQAdgBAWgVQAWgVAAgfQAAgfgWgWQgWgVgfAAQgeAAgXAVgArQCjQgXAWAAAfQAAAfAXAVQAVAVAhABQAfgBAVgVQAWgVAAgfQAAgfgWgWQgWgVgfAAQggAAgVAVgA1eCjQgVAWAAAfQAAAfAVAVQAWAVAhABQAfgBAVgVQAWgVAAgfQAAgfgWgWQgWgVgfAAQggAAgWAVg");
	this.shape_1.setTransform(519.7,394.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AukTYQpwAopGkgIvso5QnEonDuk5QM6rcQAgeQglBkgoB/Qh+GchRH7QgRBvgRB6QYDPld5vZQgHiFgJh+QghnMgdinQhGmQgpinQONAuRAJpQBNN9+1KlQu6Equ5AAQkbAAkagag");
	this.shape_2.setTransform(528.6,451.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("Eg3OAKpQusszQ2t2QJmnVWTjEQhMCdhBC0QwAAes6LbQjuE5HEIoIPsI5QJGEgJwgpQTTBzTVmDQe1qkhNt9QxApquNguQgxjHg8isQTlBtPfHIUASvANPgnHAXiQxAKPzZAAQ5NAA9QxSg");
	this.shape_3.setTransform(527.6,466.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("A69h+QAQh6AShwMA1KgAOQAJB/AGCFQu3HptZAAQtlAAsGn1g");
	this.shape_4.setTransform(518.8,481.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("A4eO/QAoh/AlhkQBBizBMieQK54ZOSiPQOSiPCqbXQA8CrAxDIQApCnBGGQIkrmCIlGGLIlsl/Ik6F/IlFlaIkuFCImFkQImeFzgAMtLTQgiAiAAAvQAAAwAiAhQAiAiAwAAQAwAAAigiQAighAAgwQAAgvgigiQgighgwAAQgwAAgiAhgACsLTQgiAiAAAvQAAAwAiAhQAiAiAxAAQAwAAAigiQAighAAgwQAAgvgigiQgighgwAAQgxAAgiAhgAnsLTQgiAiAAAvQAAAwAiAhQAiAiAwAAQAwAAAigiQAighAAgwQAAgvgigiQgighgwAAQgwAAgiAhgAzqLTQgiAiAAAvQAAAwAiAhQAiAiAwAAQAxAAAhgiQAighAAgwQAAgvgigiQghghgxAAQgwAAgiAhg");
	this.shape_5.setTransform(526.9,257.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ATSHMQgWgVAAgfQAAgfAWgVQAWgWAfAAQAfAAAWAWQAWAVAAAfQAAAfgWAVQgVAWgfABQghgBgVgWgAJRHMQgWgVAAgfQAAgfAWgVQAWgWAgAAQAfAAAWAWQAWAVAAAfQAAAfgWAVQgVAWgfABQghgBgWgWgAghHMQgWgVAAgfQAAgfAWgVQAWgWAeAAQAfAAAWAWQAWAVAAAfQAAAfgWAVQgVAWgfABQgggBgVgWgAquHMQgWgVAAgfQAAgfAWgVQAWgWAfAAQAfAAAWAWQAWAVAAAfQAAAfgWAVQgVAWgfABQghgBgVgWgA07HMQgWgVAAgfQAAgfAWgVQAWgWAfAAQAgAAAVAWQAWAVAAAfQAAAfgWAVQgVAWgfABQghgBgVgWgAOXkeQgigiAAgvQAAgwAighQAigiAwABQAxgBAiAiQAiAhAAAwQAAAvgiAiQgiAhgxAAQgwAAgighgAEXkeQgigiAAgvQAAgwAighQAigiAwABQAwgBAiAiQAiAhAAAwQAAAvgiAiQgiAhgwAAQgwAAgighgAmCkeQgigiAAgvQAAgwAighQAigiAxABQAwgBAiAiQAiAhAAAwQAAAvgiAiQgiAhgwAAQgxAAgighgAyAkeQghgiAAgvQAAgwAhghQAigiAxABQAwgBAiAiQAiAhAAAwQAAAvgiAiQgiAhgwAAQgxAAgighg");
	this.shape_6.setTransform(516.3,375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},10).wait(20));

	// Pinata
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000033").ss(1,1,1).p("AA82yMgB2Atl");
	this.shape_7.setTransform(512.1,147);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AsVyFQFVjwG4gCQAEAAAEAAQHXAAFnEOATTqbQClEsAAFvQAAIPlTGDAJvTrQkaCNlVAAQnBAAlbj2AzbKMQickmAAlmQAAl5Cuky");
	this.shape_8.setTransform(507,432.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AZN2LQA0g7A4gpIAAAAQC8iHDqBLQDiBxG7j6QCYhWHBBnAXOz2QAzg7A4goIABAAQArggAugUQCYhCC1A5QDhByG8j7QCXhVHCBmAVJYOQAEgEAEgEQAwg2A0glIAAAAQC8iIDqBLQDiByG7j7QCYhVHBBmAVhZ+QANgMAMgMQAdgbAegVIAAgBQC8iHDqBLQDiBxG7j6QCYhWHBBnEgzqgUBQA0g7A4goQC7iIDrBLQDiBxG7j6QCMhPGKBRQAhAHAiAIEgzqgSFQA0g7A4goIAAAAQC8iIDqBLQDiByG7j7QCWhUG6BjQAFABAEABEg1UAZnQAzg7A4goIABAAQC7iIDrBLQDhByG8j7QCThTGsBeQANADANADEg1UAbcQAzg7A4goIABAAQC7iIDrBLQDhByG8j7QCIhNF7BMQAqAIAsAK");
	this.shape_9.setTransform(504.7,434.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300FF").s().p("AscSCIGoi1IqeqaIjIFZQidkmAAlmQAAl5CvkyIC6G1IKaqeImhjxQFVjwG4gCIAIAAQHXAAFnEOIn+DZIKfKaID0mlQClEsAAFvQAAIPlTGDIkCpfIqbKeIHnEZQkaCOlVAAQnBAAlbj2g");
	this.shape_10.setTransform(507,432.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FFFF").s().p("AKJTaInmkaIKaqeIEDJfIEUKIIgIAJIAIgJIApBhIgYAYgA6fW1IBWATIhWgTIA9hoIAZAGIgZgGIGirSIDIlZIKfKaImoC1IvTGhgAVUYJgA6fW1IAAAAgA5iVNIAAAAgAFbugIH9jaINklxIAAAAQg4Aog0A7QA0g7A4goIAAAAIAZgLIg/BtQguAUgrAfIAAABQg4Aog0A7QA0g7A4goIAAgBQArgfAugUImpLdIj0GmgAyuq8Ik5rfIAIACIgIgCIg7iJIBDAOIhDgOIgnhdINPHrIGhDxIqaKfgAaW2JgA3n2bIAAAAgAa83rgA4i4kIAAAAg");
	this.shape_11.setTransform(504.4,434.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},10).to({state:[]},10).wait(10));

	// label
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiIgnAcIgWAVICUAAIAABOg");
	this.shape_12.setTransform(227.1,711);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhNB1QgdgPgSgeQgTgeAAgpQAAg6AmgkQAlgkBBAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAAKIi+AAQACAYALALQANAQAWAAQANAAANgHQAIgFAJgLIBeAJQgWAmgfAQQgdAQg5AAQgxAAgcgNgAAvgVQgDgbgMgMQgMgNgTAAQgWAAgOASQgJAMgCAWIBdAAIAAAAg");
	this.shape_13.setTransform(179.7,716.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAjB/IAAiIQABgXgJgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYAAAxIAACdg");
	this.shape_14.setTransform(147.6,715.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhNB1QgdgPgSgeQgTgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAAKIi+AAQACAYALALQANAQAWAAQAOAAAMgHQAIgFAJgLIBeAJQgWAmgfAQQgdAQg5AAQgxAAgcgNgAAvgVQgCgbgNgMQgMgNgTAAQgWAAgOASQgJAMgCAWIBdAAIAAAAg");
	this.shape_15.setTransform(115.7,716.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgRgLgWQgLgWAAglQAAglANgaQAKgSAQgPQARgPASgIQAcgLAqAAQA9AAAgAWQAgAWANAqIhaALQgEgPgLgJQgLgHgTgBQgXABgOAQQgPARAAAhQAAAfAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbALQgIAcgRAUQgRAVgaAMQgbALgpAAQgnAAgagHg");
	this.shape_16.setTransform(83.7,716.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQANgLAAgOQAAgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAQgXQAOgYAggNQAfgOA0AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAHAHAdAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_17.setTransform(50.2,711.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_18.setTransform(609.4,316.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAAvgVQgCgcgNgMQgMgLgTgBQgWABgOARQgJAMgCAWIBdAAIAAAAg");
	this.shape_19.setTransform(561.6,321.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_20.setTransform(529.6,320.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAAvgVQgCgcgMgMQgNgLgUgBQgVABgOARQgJAMgCAWIBdAAIAAAAg");
	this.shape_21.setTransform(497.6,321.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_22.setTransform(465.6,321.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_23.setTransform(432.1,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},10).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},10).wait(10));

	// Button
	this.btn_next = new lib.BasicButton();
	this.btn_next.name = "btn_next";
	this.btn_next.parent = this;
	this.btn_next.setTransform(890.2,684.7);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_next).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(641.4,508.7,861.8,610.9);
// library properties:
lib.properties = {
	id: '3BE3A4237E18F7468DF102396583E314',
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
an.compositions['3BE3A4237E18F7468DF102396583E314'] = {
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