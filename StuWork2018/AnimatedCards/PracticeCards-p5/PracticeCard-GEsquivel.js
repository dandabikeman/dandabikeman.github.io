(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Flap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EA9CAQZMgwYgaGIs7m+IsvG/MgwBAaY");
	this.shape.setTransform(390.6,106.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("As/psIMum/IM8G+MAwXAaGMh6DAATg");
	this.shape_1.setTransform(390.6,106.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Flap, new cjs.Rectangle(-1,-1,783.2,215.6), null);


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
(lib.PracticeCardGEsquivel = function(mode,startPosition,loop) {
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
	this.frame_20 = function() {
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

	// Button
	this.btn_Next = new lib.BasicButton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.parent = this;
	this.btn_Next.setTransform(890.2,684.7);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Next).wait(30));

	// Scene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF99CC").ss(2,1,1).p("EBBJgkfMAAABInMgzVgslAtlohMgzjAtBEhBIgkfMAzjAb+INyHfINnnbMAzVgcCEhBIgkfMAAABI/EhBIgkfMCCRAAAEBBJAkgMiCRAAA");
	this.shape.setTransform(503.5,414.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhBIAkgMAzjgtAMgzjAtAMAAAhI/MAzjAb/INyHfINnncMAzVgcCMAAABInMgzVgslMAzVAslIAAAYgEBBJAkIgAANhBItynfMgzjgb/MCCRAAAMgzVAcCItnHcgEhBIgkfg");
	this.shape_1.setTransform(503.5,414.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AM8n7MAwGgaRMAAABEDgAsun+IM6HAIMwm9Asun+MgwTgaOMAAABEZAsun+MgwTAqLEA9CAiNMh6DAAA");
	this.shape_2.setTransform(499.5,459.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AsuJnMgwTgaNMB6DAAAMgwGAaQIswG9g");
	this.shape_3.setTransform(499.5,346.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Eg9BAiNMAwTgqLIM6HAIMwm9MAwGApyMgwGgpyMAwGgaRMAAABEDIAAAWgEg9BgiMMAwTAaOMgwTAqLgAsun+g");
	this.shape_4.setTransform(499.5,459.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},3).to({state:[]},7).wait(20));

	// Rabbits
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AxqjMQAABVg8A8Qg8A7hVAAQgEAAgEAAQg8gBguggQgRgLgOgPQg8g8AAhVQAAhOAzg5QAYApAeAAQArAAAfhYQAEgLADgLQAJgBAKAAQAxAAApAVQAAABABABQAKAbALAUQAXApAeAAQAIAAAIgDQAYAsAAA1gAVvgOQAAAeAWAWQAWAWAfAAQAfAAAWgWQAWgWAAgeQAAgfgWgWQgWgWgfAAQgfAAgWAWQgWAWAAAfgATPD9QAAADAAAEQAAA+AsAsQAXAWAbALQAaALAeAAQABAAABAAQA9gBArgrQAsgsAAg+QAAg+gsgsQgJgJgJgHANMAeQA8gCAugfAL8CLQgXAkAAAtQAAA+AsAsQAJAJAKAHQAmAcAxAAQAmAAAggRQATgKARgRQAfgfAJgm");
	this.shape_5.setTransform(300.9,446.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmxJUQgsgsAAg+QAAg+AsgsQAJgJAKgHQgDgJAAgJQAAg6BogpQBogpCTAAQBaAABLAQQAvAgA7ACQBTAmAAA0QAAAKgDAJQAXAkAAAtQAAA+gsAsQgsAsg+AAQg+AAgsgsQgegfgJgmQglADgqAAQg9AAg2gHIAAAHQAAA+gsAsQgsAsg+AAQg+AAgsgsgAnREMQgWgWAAgfQAAgfAWgWQAWgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgWgWgADREEQg7gCgvggQgQgMgPgOQg8g8AAhVQAAhOA0g5QgLgTgKgcQgfhXAAh9QAAh8AfhYQAfhYArAAQAsAAAeBYQAfBYAAB8QAABugYBRIATgBQAyAAApAUQgehXAAh7QAAh8AehYQAfhYAsAAQArAAAfBYQAGASAFAUQAUBMAABiQAABjgUBMIgEAQIgHAVQgZBIgiANQgHADgIAAQgeAAgYgpQgLgTgKgcIAAgCIAAACQAKAcALATQAYApAeAAQAIAAAHgDQAYArAAA2QAABVg8A8Qg8A8hVAAIgIAAgADuASQgQAPAAAUQAAAVAQAOQAQAPAXAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAQgXAAgQAPgABOASQgQAPAAAUQAAAVAQAOQAQAPAXAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAQgXAAgQAPgAB1gnQAsAAAehYIAHgVIgHAVQgeBYgsAAQgeAAgXgpQAXApAeAAIAAAAg");
	this.shape_6.setTransform(145.5,421);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AR7AyQgQgPAAgUQAAgUAQgPQAQgOAXAAQAXAAAQAOQAQAPAAAUQAAAUgQAPQgQAPgXAAQgXAAgQgPgAPbAyQgQgPAAgUQAAgUAQgPQAQgOAXAAQAXAAAQAOQAQAPAAAUQAAAUgQAPQgQAPgXAAQgXAAgQgPgAwoAUQgQgOAAgUQAAgUAQgPQAQgPAXAAQAXAAAQAPQAQAPAAAUQAAAUgQAOQgQAPgXAAQgXAAgQgPgAzIAUQgQgOAAgUQAAgUAQgPQAQgPAXAAQAXAAAQAPQAQAPAAAUQAAAUgQAOQgQAPgXAAQgXAAgQgPg");
	this.shape_7.setTransform(275.9,427.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF99CC").s().p("AFIKAQgeAAgagLQgcgLgWgWQgsgsAAg+IAAgHQg2AHg9AAQgqAAglgDQgJAmgeAfQgRARgTAKQggARgmAAQgyAAgmgcQgJgHgJgJQgsgsAAg+QAAgtAXgkQgDgJAAgKQAAg0BTgmIgIAAQhVAAg8g8Qg8g8AAhVQAAg2AYgrQgigNgZhIIgHgVQgYhRAAhuQAAh8AfhYQAfhYArAAQAsAAAfBYQAeBYAAB8QAAB7geBXQApgUAyAAIATABQgYhRAAhuQAAh8AfhYQAehYAsAAQArAAAfBYQAfBYAAB8QAAB9gfBXQgKAcgLATQA0A5AABOQAABVg8A8QgPAOgQAMQBLgQBaAAQCTAABoApQBoApAAA6QAAAJgDAJQAKAHAJAJQAsAsAAA+QAAA+gsAsQgsArg8ABIgCAAgAjQEEQA7gCAvggQgvAgg7ACgAibASQgQAPAAAUQAAAVAQAOQAQAPAXAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAQgXAAgQAPgAk7ASQgQAPAAAUQAAAVAQAOQAQAPAXAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAQgXAAgQAPgAFoEMQgWgWAAgfQAAgfAWgWQAWgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgWgWg");
	this.shape_8.setTransform(406.2,423.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AtBjRQAABVg8A8Qg8A8hWAAQgEAAgEAAQg7gCgvggQgQgLgPgPQg8g8AAhVQAAhOA0g5QAXApAeAAQAsAAAehYQAEgLADgLQAKgBAJAAQAyAAApAVQAAABAAABQAKAbALAUQAYApAeAAQAIAAAHgDQAZAsAAA1gARHgJQAAAeAVAWQAXAWAfAAQAfAAAWgWQAWgWAAgeQAAgfgWgWQgWgWgfAAQgfAAgXAWQgVAWAAAfgAOmECQAAADAAAEQAAA+AtAsQAWAWAcALQAaALAeAAQABAAAAAAQA9gBAsgrQAsgsAAg+QAAg+gsgsQgKgJgJgHAHUCQQgYAkAAAtQAAA+AtAsQAJAJAJAHQAmAcAxAAQAnAAAfgRQAUgKARgRQAegfAJgmAIkAjQA7gCAvgg");
	this.shape_9.setTransform(303.5,429.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ANSA3QgPgPAAgUQAAgUAPgPQARgOAXAAQAWAAAQAOQAQAPABAUQgBAUgQAPQgQAPgWAAQgXAAgRgPgAKzA3QgRgPABgUQgBgUARgPQAPgOAXAAQAYAAAPAOQAQAPAAAUQAAAUgQAPQgPAPgYAAQgXAAgPgPgAr/APQgRgOABgUQgBgUARgPQAPgPAYAAQAXAAAPAPQAQAPABAUQgBAUgQAOQgPAPgXAAQgYAAgPgPgAufAPQgQgOAAgUQAAgUAQgPQAPgPAXAAQAYAAAPAPQARAPgBAUQABAUgRAOQgPAPgYAAQgXAAgPgPg");
	this.shape_10.setTransform(278.5,410.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AmxJUQgsgsAAg+QAAg+AsgsQAJgJAKgHQgDgJAAgJQAAg6BogpQBogpCTAAQBaAABLAQQAvAgA7ACQBTAmAAA0QAAAKgDAJQAXAkAAAtQAAA+gsAsQgsAsg+AAQg+AAgsgsQgegfgJgmQglADgqAAQg9AAg2gHIAAAHQAAA+gsAsQgsAsg+AAQg+AAgsgsgAnREMQgWgWAAgfQAAgfAWgWQAWgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgWgWgADREEQg7gCgvggQgQgMgPgOQg8g8AAhVQAAhOA0g5QgLgTgKgcQgfhXAAh9QAAh8AfhYQAfhYArAAQAsAAAeBYQAfBYAAB8QAABugYBRIgHAVQgeBYgsAAQgeAAgXgpQAXApAeAAQAsAAAehYIAHgVIATgBQAyAAApAUIAAACQAKAcALATQAYApAeAAQAIAAAHgDQgHADgIAAQgeAAgYgpQgLgTgKgcIAAgCQgehXAAh7QAAh8AehYQAfhYAsAAQArAAAfBYQAGASAFAUQAUBMAABiQAABjgUBMIgEAQIgHAVQgZBIgiANQAYArAAA2QAABVg8A8Qg8A8hVAAIgIAAgADuASQgQAPAAAUQAAAVAQAOQAQAPAXAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAQgXAAgQAPgABOASQgQAPAAAUQAAAVAQAOQAQAPAXAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAQgXAAgQAPg");
	this.shape_11.setTransform(177.8,402.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("ApRjnQAABVg8A8Qg8A8hVAAQgEAAgEAAQg8gCguggQgRgMgOgOQg8g8AAhVQAAhPAzg5QAYApAeAAQArAAAfhYQAEgKADgLQAJgBAKAAQAxAAApAUQAAABABABQAKAcALATQAXApAeAAQAIAAAIgDQAYAsAAA2gANWAMQAAAfAWAWQAWAWAfAAQAfAAAWgWQAWgWAAgfQAAgegWgWQgWgWgfAAQgfAAgWAWQgWAWAAAegAEzA5QA8gCAuggADjCnQgXAjAAAtQAAA+AsAsQAJAJAKAHQAmAcAxAAQAmAAAggQQATgLARgRQAfgeAJgnAK2EYQAAAEAAADQAAA+AsAsQAXAXAbALQAaAKAeAAQABAAABAAQA9AAArgsQAsgsAAg+QAAg+gsgsQgJgJgJgH");
	this.shape_12.setTransform(307.7,435.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AJiBNQgQgOAAgVQAAgUAQgPQAQgOAXAAQAXAAAQAOQAQAPAAAUQAAAVgQAOQgQAPgXAAQgXAAgQgPgAHCBNQgQgOAAgVQAAgUAQgPQAQgOAXAAQAXAAAQAOQAQAPAAAUQAAAVgQAOQgQAPgXAAQgXAAgQgPgAoPgGQgQgPAAgUQAAgVAQgPQAQgOAXAAQAXAAAQAOQAQAPAAAVQAAAUgQAPQgQAOgXAAQgXAAgQgOgAqvgGQgQgPAAgUQAAgVAQgPQAQgOAXAAQAXAAAQAOQAQAPAAAVQAAAUgQAPQgQAOgXAAQgXAAgQgOg");
	this.shape_13.setTransform(282.7,416.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AmNJvQgTgLgRgQQgdgegKglQgFgTAAgUQAAg+AsgsQAJgJAKgHQgDgJAAgJQAAg6BogpQBogpCTAAQBaAABLAQQAvAgA7ACQBTAmAAA0QAAAKgDAJQAXAkAAAtQAAAsgWAjQgJAOgNANQgsAsg+AAQg+AAgsgsQgNgNgIgOQgNgUgFgWQglADgqAAQg9AAg2gHIAAAHQAAAUgEATQgKAlgeAeQgQAQgUALQgfARgnAAQgmAAgggRgAnREMQgWgWAAgfQAAgfAWgWQAWgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgWgWgADREEQg7gCgvggQgQgMgPgOQg8g8AAhVQAAhOA0g5QgLgTgKgcQgfhXAAh9QAAh8AfhYQAHgUAHgPQAbg1AhAAQAiAAAaA1QAHAPAHAUQAfBYAAB8QAABugYBRIATgBQAyAAApAUQgehXAAh7QAAh8AehYQAHgUAIgPQAag1AiAAQAhAAAaA1QAIAPAHAUQAGASAFAUQAUBMAABiQAABjgUBMIgEAQIgHAVQgZBIgiANQgHADgIAAQgeAAgYgpQgLgTgKgcIAAgCIAAACQAKAcALATQAYApAeAAQAIAAAHgDQAYArAAA2QAABVg8A8Qg8A8hVAAIgIAAgADuASQgQAPAAAUQAAAVAQAOQAQAPAXAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAQgXAAgQAPgABOASQgQAPAAAUQAAAVAQAOQAQAPAXAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAQgXAAgQAPgAB1gnQAsAAAehYIAHgVIgHAVQgeBYgsAAQgeAAgXgpQAXApAeAAIAAAAg");
	this.shape_14.setTransform(206,406.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AlXi9QAABVg8A8Qg8A7hVAAQgEAAgEAAQg8gCgugfQgQgMgPgOQg8g8AAhVQAAhPAzg5QAYAqAeAAQArAAAfhZQAEgKADgLQAJgBAKAAQAyAAAoAVQAAAAABABQAKAcALATQAXAqAeAAQAIAAAIgEQAYAsAAA2gAgWB8QgXAkAAAtQAAA+AsAsQAIAJAJAHQAmAcAyAAQAmAAAggRQATgKARgRQAfgeAIgnAJcgdQAAAeAWAWQAWAWAfAAQAfAAAWgWQAWgWAAgeQAAgfgWgWQgWgWgfAAQgfAAgWAWQgWAWAAAfgAG8DuQAAADAAAEQAAA+AsAsQAXAWAbALQAaALAeAAQABAAABAAQA8gBAsgrQAsgsAAg+QAAg+gsgsQgJgJgKgHAA5APQA7gCAvgf");
	this.shape_15.setTransform(316,419.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AFoAjQgQgPAAgUQAAgUAQgPQAQgOAXAAQAXAAAQAOQAQAPAAAUQAAAUgQAPQgQAPgXAAQgXAAgQgPgADIAjQgQgPAAgUQAAgUAQgPQAQgOAXAAQAXAAAQAOQAQAPAAAUQAAAUgQAPQgQAPgXAAQgXAAgQgPgAkVAjQgQgPAAgUQAAgUAQgPQAQgOAXAAQAXAAAQAOQAQAPAAAUQAAAUgQAPQgQAPgXAAQgXAAgQgPgAm1AjQgQgPAAgUQAAgUAQgPQAQgOAXAAQAXAAAQAOQAQAPAAAUQAAAUgQAPQgQAPgXAAQgXAAgQgPg");
	this.shape_16.setTransform(291,400.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AmNJvQgTgLgRgQQgdgegKglQgFgTAAgUQAAg+AsgsQAJgJAKgHQgDgJAAgJQAAg6BogpQBogpCTAAQBaAABLAQQgQgMgPgOQg8g8AAhVQAAhOA0g5QgLgTgKgcQgfhXAAh9QAAh8AfhYQAHgUAHgPQAbg1AhAAQAiAAAaA1QAHAPAHAUQAfBYAAB8QAABugYBRIgHAVQgeBYgsAAQgeAAgXgpQAXApAeAAQAsAAAehYIAHgVIATgBQAyAAApAUQgehXAAh7QAAh8AehYQAHgUAIgPQAag1AiAAQAhAAAaA1QAIAPAHAUQAGASAFAUQAUBMAABiQAABjgUBMIgEAQIgHAVQgZBIgiANQgHADgIAAQgeAAgYgpQgLgTgKgcIAAgCIAAACQAKAcALATQAYApAeAAQAIAAAHgDQAYArAAA2QAABVg8A8Qg8A8hVAAIgIAAQg7gCgvggQAvAgA7ACQBTAmAAA0QAAAKgDAJQAXAkAAAtQAAAsgWAjQgJAOgNANQgsAsg+AAQg+AAgsgsQgNgNgIgOQgNgUgFgWQglADgqAAQg9AAg2gHIAAAHQAAAUgEATQgKAlgeAeQgQAQgUALQgfARgnAAQgmAAgggRgADuASQgQAPAAAUQAAAVAQAOQAQAPAXAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAQgXAAgQAPgABOASQgQAPAAAUQAAAVAQAOQAQAPAXAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAQgXAAgQAPgAnREMQgWgWAAgfQAAgfAWgWQAWgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgWgWg");
	this.shape_17.setTransform(239.4,395.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("Aj5ghQg4AwhNAAQgFAAgDAAQg8gCgvgfQgQgMgOgOQg8g8AAhVQAAhPAzg5QAYAqAeAAQArAAAfhZQAEgKACgLQAKgBAKAAQAVAAATAEAhrAPQA7gCAugfAi7B8QgXAkAAAtQAAA+ArAsQAKAJAJAHQAmAcAyAAQAmAAAfgRQATgKARgRQAegeAJgnAG3gdQAAAeAWAWQAWAWAfAAQAfAAAWgWQAWgWAAgeQAAgfgWgWQgWgWgfAAQgfAAgWAWQgWAWAAAfgAEXDuQAAADAAAEQAAA+AsAsQAWAWAcALQAaALAeAAQABAAABAAQA8gBAsgrQAsgsAAg+QAAg+gsgsQgJgJgKgH");
	this.shape_18.setTransform(309.9,431.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ADDAjQgRgOABgVQgBgTARgPQAPgPAYAAQAXAAAPAPQARAPgBATQABAVgRAOQgPAPgXAAQgYAAgPgPgABCAxQgSgBgNgNQgQgOgBgVQABgTAQgPQANgMARgDIAIAAQAXAAARAPQAPAPAAATQAAAVgPAOQgRAPgXAAIgHgBgAhvAjQgRgOABgVQgBgTARgPQAPgPAYAAIAIAAQgHAZAAAZQABAaAFAWIgHABQgYAAgPgPgAkPAjQgQgOgBgVQABgTAQgPQAPgPAXAAQAYAAAPAPQARAPgBATQABAVgRAOQgPAPgYAAQgXAAgPgPg");
	this.shape_19.setTransform(284.9,412.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AmLJvQgTgLgRgQQgdgegKglQgFgTAAgUQAAg+AsgsQAJgJAKgHQgDgJAAgJQAAg6BogpQBogpCTAAQBaAABLAQQAvAgA7ACQBTAmAAA0QAAAKgDAJQAXAkAAAtQAAAsgWAjQgJAOgNANQgsAsg+AAQg+AAgsgsQgNgNgIgOQgNgUgFgWQglADgqAAQg9AAg2gHIAAAHQAAAUgEATQgKAlgeAeQgQAQgUALQgfARgnAAQgmAAgggRgAnPEMQgWgWAAgfQAAgfAWgWQAWgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgWgWgADTEEQg7gCgvggQgQgMgPgOQg8g8AAhVQAAhOA0g5QgLgTgKgcQgfhXAAh9QAAh8AfhYQAHgUAHgPQAbg1AhAAQAiAAAaA1QAHAPAHAUQAfBYAAB8QAABugYBRIATgBQAVAAAUADIgFApQAWA0AcALQgMAWgGAYIgIgBQgXAAgQAPQgQAPAAAUQAAAVAQAOQAQAPAXAAIAIAAQAMA3AqAqIAMALQg5AxhNAAIgIAAgABQASQgQAPAAAUQAAAVAQAOQAQAPAXAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAQgXAAgQAPgAB3gnQAsAAAehYIAHgVIgHAVQgeBYgsAAQgeAAgXgpQAXApAeAAIAAAAgAGqlTQAAh8gfhYQgTg2gXgUQAPgOARAAQAhAAAaA1IAHAOIAIAVQAGASAFAUQALAoAFAvQgFApAAAuQAAAuAFApIgEAgQgFAdgHAbIgEAQQgmADggAQQAehXAAh7g");
	this.shape_20.setTransform(249.6,406.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF99CC").s().p("ADSKAQgeAAgagLQgbgLgXgWQgsgsAAg+IAAgHQg1AHg9AAQgpAAgmgDQgJAmgfAfQgRARgTAKQggARgmAAQgxAAgmgcQgKgHgJgJQgsgsAAg+QAAgtAXgkQgDgJAAgKQAAg0BTgmIgIAAQhNAAg4gxIgMgLQgqgqgNg3QgFgXAAgZQAAgbAGgYQAGgYAMgWQgcgLgWg0IAFgpQADglAAgpQAAhigThMQgFgUgHgSIgIgVQAIg0APgqQAehYAsAAQARAAAPAOQAXAUATA2QAfBYAAB8QAAB7geBXQAggQAmgDIAUgBIATABQgOgvgFg5QgFgpAAguQAAguAFgpQAHhGATg3QAfhYArAAQAsAAAfBYQAeBYAAB8QAAB9geBXQgKAcgLATQAzA5AABOQAABVg8A8QgOAOgRAMQBLgQBbAAQCSAABoApQBoApAAA6QAAAJgCAJQAJAHAJAJQAsAsAAA+QAAA+gsAsQgrArg9ABIgCAAgAlGEEQA8gCAuggQguAgg8ACgAkRASQgQAPAAAUQAAAVAQAOQAQAPAXAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAQgXAAgQAPgAmSAEQgSACgNAMQgQAPAAAUQAAAVAQAOQAOANASACIAHAAQAXAAAQgPQAQgOAAgVQAAgUgQgPQgQgPgXAAIgIABgAHVCZQgWgWAAgfQAAgfAWgWQAWgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgWgWg");
	this.shape_21.setTransform(331.7,406.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8,p:{x:406.2,y:423.9}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},10).to({state:[{t:this.shape_8,p:{x:379.2,y:406.8}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8,p:{x:359.3,y:415.3}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_8,p:{x:342.6,y:395.3}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[]},6).wait(10));

	// Clouds
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AaCI1QgsAog9AAQg/AAgtgqQgSACgTAAQh7AAhhg7Qg7AnhNAAQg+AAg0gbQgbAGgdAAQhsAAhLhMQgMgMgLgNQgbAMgfAAQg9AAgqgrQgNgNgJgPIgaABQiKAAhihiQhihiAAiLQgBiKBjhiQBihiCKAAQA6AAAzARQAPhXBBhCQBVhUB3AAQBsAABQBFQBAg1BXAAQBkAABHBHQASASANASIACgCQAvguBBAAQBBAAAuAuQAXAXAMAcQBGAIAzAzIAOAPQBbABBBBAQA0A0ALBGQAlAOAfAeQA5A5AABRQAABFgqA0QARAvAAA2QAAB7hYBXQhXBYh7AAQhYgBhHgtgAptHfQgtAog9AAQg+AAgugpQgSABgTAAQh6AAhhg7Qg8AohMAAQg/gBgzgaQgbAGgdgBQhsABhMhMQgMgNgKgNQgbANggAAQg8gBgrgqQgNgOgJgOIgZABQiLgBhihhQhihiAAiKQAAiMBihiQBihiCLAAQA6AAAzARQAPhWBBhDQBVhTB2AAQBsAABQBFQBBg1BWAAQBlgBBHBIQASARANATIACgDQAugtBBgBQBBABAvAtQAXAYALAbQBHAJAzAzIANAOQBbABBBBAQA0A1AMBGQAlANAeAfQA6A5AABQQAABFgrA1QARAuABA3QgBB7hXBWQhXBYh7AAQhZAAhGgug");
	this.shape_22.setTransform(528.6,83.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AaDI1QgtAog9AAQg/AAgtgqQgTACgSAAQh7AAhhg7Qg7AnhNAAQg+AAgzgbQgbAGgeAAQhsAAhLhMQgNgMgKgNQgbAMgfAAQg9AAgqgrQgNgNgJgPIgaABQiKAAhihiQhihiAAiLQAAiKBihiQBihiCKAAQA7AAAyARQAPhXBBhCQBVhUB3AAQBsAABQBFQBAg1BXAAQBkAABIBHQARASANATIACgDQAvguBBAAQBBAAAuAuQAXAXAMAcQBGAIAzAzIAOAPQBbABBABAQA1A1ALBFQAlAOAfAeQA5A5AABRQAABFgqA0QARAvAAA2QAAB7hXBXQhYBYh7gBQhYAAhGgtgAptHgQgtAng9AAQg/AAgsgpQgTABgTABQh6gBhhg7Qg8AohMAAQg+AAg0gbQgbAGgegBQhrABhMhMQgMgNgKgNQgbAMggAAQg8AAgrgqQgNgOgJgOIgZABQiLAAhihiQhihiAAiLQAAiLBihiQBihhCLgBQA6ABAzAQQAPhWBBhDQBVhTB3AAQBsAABPBFQBBg1BWAAQBlAABHBGQASASANATIACgDQAvgtBAgBQBBABAvAtQAWAYANAcQBGAHAzA0IANAOQBcABBABAQA0A1AMBGQAlAOAeAeQA6A5AABQQgBBGgqA0QARAuABA3QgBB7hXBWQhXBYh7AAQhZAAhGgtg");
	this.shape_23.setTransform(512.9,82.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AaCI1QgsAog+AAQg+AAgtgqQgSACgUAAQh6AAhgg7Qg9AnhLAAQg/AAg0gbQgbAGgdAAQhsAAhMhMQgLgMgLgNQgaAMghAAQg7AAgrgrQgOgNgIgPIgZABQiMAAhihiQhhhiAAiLQAAiKBhhiQBihiCMAAQA5AAA0ARQAOhXBChCQBUhUB3AAQBsAABPBFQBBg1BXAAQBlAABGBHQASASANASIADgCQAuguBBAAQBBAAAuAuQAXAXAMAcQBGAIA0AzIAMAPQBcABBBBAQA0A0ALBGQAmAOAeAeQA5A5AABRQAABFgqA0QARAvAAA2QAAB7hYBXQhWBYh7AAQhagBhGgtgAptHfQgtAog9AAQg/AAgtgpQgSABgTAAQh6AAhhg7Qg8AohMAAQg/gBgzgaQgbAGgdgBQhsABhMhMQgMgNgKgNQgbANggAAQg8gBgqgqQgOgOgJgOIgZABQiLgBhihhQhihiAAiKQAAiMBihiQBihiCLAAQA6AAAzARQAOhWBChDQBUhTB3AAQBtAABPBFQBAg1BYAAQBkgBBHBIQASARAMATIADgDQAugtBCgBQBBABAtAtQAXAYAMAbQBGAJA0AzIANAOQBbABBBBAQA1A1AKBGQAmANAeAfQA5A5AABQQAABFgpA1QARAuAAA3QAAB7hYBWQhXBYh7AAQhZAAhGgug");
	this.shape_24.setTransform(490.9,83.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AaCI1QgsAog9AAQg/AAgtgqQgSACgUAAQh6AAhhg7Qg7AnhNAAQg+AAg0gbQgbAGgdAAQhsAAhLhMQgMgMgLgNQgbAMgfAAQg9AAgqgrQgOgNgIgPIgZABQiLAAhihiQhjhiABiLQgBiKBjhiQBihiCLAAQA5AAAzARQAPhXBBhCQBVhUB3AAQBsAABPBFQBBg1BXAAQBkAABHBHQASASANASIADgCQAuguBBAAQBBAAAuAuQAXAXAMAcQBGAIAzAzIAOAPQBbABBBBAQA0A0ALBGQAmAOAeAeQA5A5AABRQAABFgqA0QARAvAAA2QAAB7hYBXQhWBYh8AAQhZgBhGgtgAptHfQgtAog9AAQg+AAgugpQgSABgTAAQh6AAhhg7Qg8AohMAAQg/gBgzgaQgbAGgdgBQhsABhMhMQgMgNgKgNQgbANggAAQg8gBgrgqQgNgOgJgOIgZABQiLgBhihhQhihiAAiKQAAiMBihiQBihiCLAAQA6AAAzARQAOhWBChDQBVhTB2AAQBsAABQBFQBAg1BXAAQBlgBBHBIQARARANATIADgDQAvgtBAgBQBCABAtAtQAXAYAMAbQBHAJAzAzIANAOQBcABBABAQA1A1ALBGQAlANAeAfQA5A5ABBQQAABFgqA1QAQAuABA3QgBB7hXBWQhXBYh7AAQhZAAhGgug");
	this.shape_25.setTransform(457.8,83.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AaCI1QgsAog+AAQg+AAgtgqQgSACgUAAQh6AAhhg7Qg7AnhMAAQg/AAg0gbQgaAGgeAAQhsAAhLhMQgMgMgLgNQgbAMgfAAQg9AAgqgrQgOgNgIgPIgZABQiLAAhihiQhjhiABiLQgBiKBjhiQBihiCLAAQA5AAAzARQAPhXBChCQBUhUB3AAQBsAABPBFQBBg1BXAAQBkAABHBHQASASANASIADgCQAuguBBAAQBBAAAuAuQAXAXAMAcQBGAIAzAzIANAPQBcABBBBAQA0A0ALBGQAmAOAeAeQA5A5AABRQAABFgqA0QARAvAAA2QAAB7hYBXQhWBYh7AAQhagBhGgtgAptHfQgtAog9AAQg+AAgugpQgSABgTAAQh6AAhhg7Qg8AohMAAQg/gBgzgaQgbAGgdgBQhsABhMhMQgMgNgKgNQgbANggAAQg8gBgqgqQgOgOgJgOIgZABQiLgBhihhQhihiAAiKQAAiMBihiQBihiCLAAQA6AAAzARQAOhWBChDQBUhTB3AAQBtAABPBFQBAg1BYAAQBkgBBHBIQASARAMATIADgDQAvgtBAgBQBCABAtAtQAXAYAMAbQBGAJA0AzIANAOQBbABBBBAQA1A1ALBGQAlANAeAfQA5A5AABQQAABFgpA1QARAuAAA3QAAB7hYBWQhXBYh7AAQhZAAhGgug");
	this.shape_26.setTransform(438.4,83.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AaDI1QgtAog9AAQg/AAgtgqQgTACgSAAQh6AAhig7Qg7AnhNAAQg+AAgzgbQgbAGgeAAQhrAAhNhMQgMgMgJgNQgcAMggAAQg7AAgrgrQgNgNgKgPIgZABQiLAAhhhiQhihigBiLQABiKBihiQBhhiCLAAQA7AAAyARQAPhXBBhCQBVhUB3AAQBsAABQBFQBAg1BXAAQBkAABIBHQARASANATIACgDQAvguBBAAQBBAAAuAuQAXAXAMAcQBGAIAzAzIAOAPQBbABBABAQA1A1ALBFQAmAOAeAeQA5A5AABRQAABFgqA0QARAvAAA2QAAB7hXBXQhYBYh7gBQhYAAhGgtgAptHgQgsAng+AAQg/AAgsgpQgTABgTABQh6gBhhg7Qg8AohMAAQg+AAg0gbQgbAGgegBQhrABhMhMQgMgNgKgNQgbAMggAAQg8AAgrgqQgNgOgJgOIgZABQiLAAhihiQhihiAAiLQAAiLBihiQBihhCLgBQA6ABAzAQQAPhWBBhDQBVhTB3AAQBsAABPBFQBBg1BWAAQBlAABHBGQARASAOATIACgDQAvgtBAgBQBBABAvAtQAWAYANAcQBGAHAzA0IANAOQBcABBABAQA0A1ALBGQAmAOAfAeQA5A5AABQQgBBGgqA0QARAuAAA3QAAB7hXBWQhXBYh7AAQhZAAhGgtg");
	this.shape_27.setTransform(418.5,82.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AaDI1QgtAog+AAQg+AAgtgqQgTACgTAAQh5AAhhg7Qg9AnhLAAQg/AAgzgbQgcAGgdAAQhrAAhNhMQgMgMgJgNQgbAMghAAQg8AAgqgrQgOgNgJgPIgYABQiMAAhihiQhihiAAiLQAAiKBihiQBihiCMAAQA5AAA0ARQAOhXBChCQBUhUB3AAQBsAABQBFQBAg1BXAAQBlAABHBHQARASANATIADgDQAuguBBAAQBBAAAuAuQAXAXAMAcQBGAIA0AzIAMAPQBcABBABAQA1A1ALBFQAlAOAfAeQA5A5AABRQAABFgqA0QARAvAAA2QAAB7hXBXQhYBYh6gBQhaAAhFgtgAptHgQgsAng+AAQg+AAgtgpQgTABgTABQh6gBhhg7Qg8AohMAAQg/AAgzgbQgbAGgegBQhrABhMhMQgMgNgKgNQgbAMggAAQg8AAgqgqQgOgOgJgOIgZABQiLAAhihiQhihiAAiLQAAiLBihiQBihhCLgBQA6ABAzAQQAPhWBBhDQBUhTB4AAQBrAABQBFQBAg1BYAAQBkAABHBGQARASAOATIACgDQAugtBCgBQBAABAvAtQAXAYAMAcQBFAHA0A0IANAOQBcABBABAQA0A1ALBGQAmAOAfAeQA4A5AABQQABBGgrA0QASAugBA3QABB7hYBWQhXBYh7AAQhZAAhGgtg");
	this.shape_28.setTransform(390.8,82.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AaDI1QgtAog9AAQg/AAgtgqQgTACgSAAQh6AAhig7Qg7AnhNAAQg+AAgzgbQgbAGgeAAQhrAAhMhMQgNgMgJgNQgcAMggAAQg7AAgrgrQgNgNgKgPIgZABQiLAAhihiQhhhigBiLQABiKBhhiQBihiCLAAQA7AAAyARQAPhXBBhCQBVhUB3AAQBsAABQBFQBAg1BXAAQBkAABIBHQARASANATIACgDQAvguBBAAQBBAAAuAuQAXAXAMAcQBGAIAzAzIAOAPQBbABBABAQA1A1ALBFQAmAOAeAeQA5A5AABRQAABFgqA0QARAvAAA2QAAB7hXBXQhYBYh7gBQhYAAhGgtgAptHgQgsAng+AAQg/AAgsgpQgTABgTABQh6gBhhg7Qg8AohMAAQg+AAg0gbQgbAGgegBQhrABhMhMQgMgNgKgNQgbAMggAAQg8AAgrgqQgNgOgJgOIgZABQiLAAhihiQhihiAAiLQAAiLBihiQBihhCLgBQA6ABAzAQQAPhWBBhDQBVhTB3AAQBsAABPBFQBBg1BWAAQBlAABHBGQARASAOATIACgDQAvgtBAgBQBBABAvAtQAWAYANAcQBGAHAzA0IANAOQBcABBABAQA0A1ALBGQAmAOAfAeQA5A5AABQQgBBGgqA0QARAuAAA3QAAB7hXBWQhXBYh7AAQhZAAhGgtg");
	this.shape_29.setTransform(307.4,82.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},10).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27,p:{x:418.5}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27,p:{x:353.3}}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).wait(11));

	// Sun
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CC6600").ss(2,1,1).p("APhK1QAPBIgdBiQgVBHgbApAOEJtQgrBogWBDQgRAzgNAbAr2vOQhaAQgnAKQgnAKgdAGArhqgQhSAUgxASQgxAShGARAsftHIhJAAQgjAOgcALQg0AVgKAGAqYnvQhWAPgkAPQgrAXgrAUAowlSQg5AbhSAsQgfAQhPAbAnxjAQhGAOhXAsQhLArgIADAlKgkQhRBPgiAxQgnA8giAzAjWByQhWBIheBoQhSBagqAWADoFIQiJCcggArQgQAWgiBIAFwFdQgnBsg3BgQgDAEgCAEQg8BngxAnAKUIEQgSAjgtBSQglBCgkBOAHDH5QgeBHgSAzQgSAygGAQAhQFIQglBmgyBSQgrBCgFALAjDBiQgGAFgGAF");
	this.shape_30.setTransform(911.2,108.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFF00").ss(2,1,1).p("APpJ4QgJBFgmBlQgUA0gbBHANhI6QgZAqg9B8Qg7B3gLARAsiuZQhAgJgxAZQgsAegVAGArusmQhaAahJAjQhBAfgXAXApxpqQhNA+hEAdQg+AVgXANAn/lvQhTAvgnATQgzAZguAXAiTBDQgDADgEADQhWAzhtBJQhcA9gnAUAliiUQg3ANhcBCQhbBGgXAPAAqC4QhKArihByQigBxggAgAA1FAQhOBdggAfQgXASgOAOACyFVQg6Bkg3BUQgzBKgOAWAJSHHQgNAbhNB2QhRB6gQAPAFDGeIAFAiQAFAmAAAQQAAAFAAAGQgCA5gXAxQgPAigVAV");
	this.shape_31.setTransform(905.2,112.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CC6600").ss(2,1,1).p("AO1KhIAGAaQAFAeAAAQQAAAIgVA+QgVA9AAAQArOt7QgJAHgJAGQguAegfAKQgeAFgLAEArjsoQgXAGgTAFAqmp3QhIAZhfAmQhWAigcAIAsVsbQguANgYAKQg1AWgPAFAoynGQhBA/hOAhQhPAhgIAIAlNhDQgPACgPADQhbAPgnAWQgPAJgMANQgQAPgFADAnej1Qh+BLgfATAj5AkQhSBDgqAZQgbAQgbAGAg0B3QhdBjhXAzQhIAjgIAEACyE+QhfAWhTAcQhVAcgTAQAFjHbQh6BYg0AnQhEA0gdAdAIzH6QhvCUgYAeQgbAjgkAkAMEIaQgcB0guBHQgYAkhFBE");
	this.shape_32.setTransform(901,103.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFF00").ss(2,1,1).p("AO1I+QhnBMgnA2QgDAFgqBUAPKJoQAcBFACAIQACAHAAA9QAAAIgaA4QgbA5AAAkArjuVQgEACgEAAQhYAYgsAPQgZAIg2AXAsXtBQgEABgEABQhGAagNAFQgQAHgnAWAqbrZQhGALh+AjQhlAagkAAIAAALAp7odIhIAAQgRARgtAgQgoAdgDAFAoolXQgjALhLAvQhTA1gvAtAlXhxQgOAGgQAJQgiASgqAcQhCAtgPAHAnojvQg7ARhjBiAh7BTQhjgJhNAtQgmAVgwAwAg0C8QhVAXgaATQgiAXgVAIADHEaQgQAEh/BXQh7BXgFAAIAAgWAHWHWQhjAbgwAeQghAcgSAIAK7H/Qg9AXhgBvQhWBugHAGAFDE5QhRAog7AyQgRAPgpAq");
	this.shape_33.setTransform(902.1,107.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CC6600").ss(2,1,1).p("ALVH0QAAAxgVBKQgLAlgKAbAL/KGQg+BGgBAPQAAADACADQABABACACQAFAEAAAHANcIoQg9BSgbBWQgQAzAAAgAPvJyQABAogGAmQgKBGgjA+QgiA8gqAgAsnuVQgwgHgpgCQgXgBgiAAArArZQhNADhmgRQhrgSgQAAApMpHIhfAAQgNAHheAMQhXAMgNAAAl8l3QheAAggACQgyACgWAHAlxicQhuAMgPADQggAHgUAUAjqgfQgRALgjANQg9AYhyAiQgRAFgRAFAgkBIQgYAOgVANQhVAzgwAdQgRAKgQAJQhQAvggAQADBEZQgIAAh9AqQhkAigxAGQgLACgJAAAFTFYQhBAvhyBVQhRA8gLAGAIuHWQgFAfgNAXQgJAPgMALQgRALgKAIQgNAJgFAGAJYFtQkMDYgjAj");
	this.shape_34.setTransform(904.7,109.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFF00").ss(2,1,1).p("AMYJSQgQA0gtBJQgJAPgKAPQgaAmgQAXQgUAdgDAFAPpJcQgXB8gMAxQgDAOgDAIQgFAOglA/AtLtrIh9AAAsCrkQgcgDhugIQg9gEgfgGAqaqGQhAAAhWAGQhWAFgYAAAp7mXQgpAEhYALQg2AGgkAAApbj5QgkANhSAhQg2AWgQAEAmLiHQg2ALh+AyQiEA0gWAWAj5A/QgfgFgqAHQgvAJg9AWQghANgiAPQggAPggAQAhdB8QgKAbgOAVQgvBMhSASQgUADgRACQgeAFgSACQgwAHgaASABzEEQiQBYgUAWQgZAcgzAmQgOALgRAMADnFiQg5AXghASQgaASgKAEAI0IzQgjAQgZASQggAWgQAXQgEAFgDAGQgQAygZAaAGhHAQhAAAhFAqQg+AtgMAI");
	this.shape_35.setTransform(908.3,102.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFF00").ss(2,1,1).p("ANhI6QgZAqg9B8Qg7B3gLARAPqJ4QgKBFgmBlQgUA0gbBHArtsmQhaAahKAjQhAAfgXAXAsiuZQhAgJgwAZQgsAegVAGAn/lvQhTAvgnATQgyAZgvAXApxpqQhNA+hDAdQg/AVgWANAlhiUQg4ANhbBCQhcBGgWAPAiTBEQgDADgEADQhVAyhtBJQhcA9gnAUAAqC4QhKArihByQigBxggAgACyFVQg5Bkg4BUQgyBKgPAWAA1FAQhNBdghAfQgWASgOAOAFDGeIAGAiQAFAmAAAQQAAAFAAAGQgCA5gXAxQgQAigVAVAJTHHQgOAbhNB2QhQB6gRAP");
	this.shape_36.setTransform(905.1,114);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#CC6600").ss(2,1,1).p("AOEJtQgrBogWBDQgRAzgNAbAPhK1QAPBIgdBiQgVBHgbApAsftHIhJAAQgjAOgcALQg0AVgKAGArhqgQhSAUgxASQgxAShGARAr2vOQhaAQgnAKQgnAKgdAGAowlSQg5AbhSAsQgfAQhPAbAqYnvQhWAPgkAPQgrAXgrAUAnxjAQhGAOhXAsQhLArgIADAjWByQhWBIheBoQhSBagqAWAlKgkQhRBPgiAxQgnA8giAzADoFIQiJCcggArQgQAWgiBIAFwFdQgnBsg3BgQgDAEgCAEQg8BngxAnAKUIEQgSAjgtBSQglBCgkBOAHDH5QgeBHgSAzQgSAygGAQAhQFIQglBmgyBSQgrBCgFALAjDBiQgGAFgGAF");
	this.shape_37.setTransform(911,110);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFF00").ss(2,1,1).p("AO1I+QhoBMgmA2QgEAFgqBUAPKJoQAcBEACAJQABAHAAA9QAAAIgaA4QgaA5AAAkArjuVQgEABgEABQhZAXgrAQQgZAIg3AXAsXtBQgFABgDABQhGAagOAFQgPAGgoAXAqbrZQhGALh/AiQhlAbgkAAIAAALAoolXQgjALhLAvQhUA1guAtAp8odIhIAAQgRARgtAgQgoAdgDAEAlXhyQgOAHgQAIQgjATgqAcQhCAtgPAHAnpjvQg7ARhiBiAh8BTQhigJhOAsQglAWgwAwAg0C8QhVAXgbASQghAYgVAIADGEaQgPAEh/BXQh8BWgFAAIAAgVAFDE5QhRAog7AyQgRAPgpApAHWHWQhkAbgvAeQgiAcgRAIAK6H/Qg8AXhgBvQhXBtgGAH");
	this.shape_38.setTransform(910,108.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#CC6600").ss(2,1,1).p("AO1KhIAFAaQAFAeAAAQQAAAIgVA+QgVA9AAAQAMEIaQgcB0gvBHQgYAkhEBEArOt7QgKAHgIAGQguAegfAKQgeAFgLAEAsVsbQguANgYAKQg1AWgPAFAqmp3QhJAZheAmQhWAigcAIArjsoQgXAGgTAFAoynGQhBA/hOAhQhPAhgIAIAlNhDQgPACgPADQhbAPgnAWQgPAJgNANQgPAPgFADAnej1Qh+BLggATAj6AkQhRBDgqAZQgcAQgaAGAg0B3QheBjhWAzQhIAjgIAEACxE+QheAWhTAcQhWAcgSAQAFiHbQh5BYg0AnQhEA0gdAdAIzH6QhvCUgYAeQgbAjgkAk");
	this.shape_39.setTransform(908.9,104.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFF00").ss(2,1,1).p("AMYJSQgQA0gsBJQgKAPgKAQQgaAlgQAXQgUAdgDAGAPpJdQgXB7gMAxQgDAOgDAIQgFANglBAAsCrkQgcgDhugIQg9gEgfgGAqaqGQhAAAhWAGQhWAFgYAAAtLtrIh9AAApbj5QgkANhSAhQg2AWgQAEAp7mXQgpAEhYALQg2AGgkAAAj5A/QgfgFgqAHQgvAJg9AWQghANgiAQQggAOggAQAhdB8QgKAagOAXQgvBLhSASQgUADgQACQgfAFgSADQgwAHgaAQAmLiHQg2ALh+AyQiEA0gWAWABzEFQiQBWgUAXQgZAdgyAlQgPALgRAMADnFiQg5AWghAUQgaAQgKAFAI0IyQgjASgZARQggAWgQAXQgEAFgDAFQgQAygZAbAGhHBQhAAAhFApQg+AtgMAI");
	this.shape_40.setTransform(913.1,109.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#CC6600").ss(2,1,1).p("ALVH0QAAAxgVBKQgLAkgKAdAMAKGQg/BHgBAOQAAADACADQABABACABQAFAFAAAHANcIpQg9BRgbBWQgQAzAAAgAPvJyQABAogGAmQgKBGgjA+QgiA8gqAgAsnuVQgwgHgpgCQgXgBgiAAArArZQhNADhmgRQhrgSgQAAApMpHIhfAAQgNAHheAMQhXAMgNAAAl8l3QheAAggACQgyACgWAHAjqgfQgRALgjANQg9AYhyAjQgRAFgRAFAlxicQhuAMgPADQggAHgUAUAgkBIQgYAPgVANQhVAzgwAcQgRAKgPAJQhRAwggAPAFTFYQhBAvhyBVQhRA9gLAFADBEZQgIAAh9AqQhkAigwAGQgMACgJAAAIuHWQgFAfgNAXQgJAPgMALQgQALgLAIQgNAKgFAFAJYFtQkMDYgjAj");
	this.shape_41.setTransform(909.5,116.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFF00").ss(2,1,1).p("ANhI6QgZAqg9B8Qg7B3gLARAPpJ4QgJBFgmBlQgUA0gbBHAsiuZQhAgJgwAZQgsAegVAGArtsmQhaAahKAjQhBAfgWAXAn/lvQhTAvgnATQgyAZgvAXApxpqQhNA+hDAdQg/AVgWANAiTBEQgDADgEADQhVAyhtBJQhcA9gnAUAAqC4QhKArihByQigBxggAgAlhiUQg4ANhbBCQhcBGgWAPACyFVQg5Bkg4BUQgyBKgPAWAA1FAQhNBdghAfQgWASgOAOAJTHHQgOAbhNB2QhQB6gRAPAFDGeIAGAiQAFAmAAAQQAAAFAAAGQgDA5gWAxQgQAigVAV");
	this.shape_42.setTransform(908.2,113);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#CC6600").ss(2,1,1).p("AKUIEQgSAjgtBSQglBCgkBOAOEJtQgrBogWBDQgRAzgNAbAPhK1QAPBIgdBiQgVBHgbApAr2vOQhaAQgnAKQgnAKgdAGArhqgQhSAUgxASQgxAShGARAsftHIhJAAQgjAOgcALQg0AVgKAGAowlSQg5AbhSAsQgfAQhPAbAqYnvQhWAPgkAPQgrAXgrAUAnxjAQhGAOhXAsQhLArgIADAlKgkQhRBPgiAxQgnA8giAzAjWByQhWBIheBoQhSBagqAWAjDBiQgGAFgGAFAhQFIQglBmgyBSQgrBCgFALADoFIQiJCcggArQgQAWgiBIAHDH5QgeBHgSAzQgSAygGAQAFwFdQgnBsg3BgQgDAEgCAEQg8BngxAn");
	this.shape_43.setTransform(914.1,109);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFF00").ss(2,1,1).p("AO1I+QhoBMgmA2QgDAFgrBUAPKJnQAcBFACAJQABAHAAA9QAAAIgaA4QgaA5AAAkArjuVQgEABgEABQhYAXgsAQQgZAIg3AXAsXtBQgEABgEABQhGAagOAFQgPAGgoAXAqbrZQhGALh/AiQhlAbgjAAIAAALAoolXQgjALhLAvQhTA0gvAuAp7odIhJAAQgRARgtAgQgoAdgDAEAlXhyQgOAHgQAIQgjATgqAcQhBAtgPAHAh8BTQhigJhOAsQglAVgwAxAg0C8QhVAWgbATQghAYgVAIADHEaQgQADh/BYQh8BWgFAAIAAgVAFDE5QhRAog7AyQgRAPgpApAHWHWQhkAbgvAeQgiAcgRAIAK7H+Qg9AYhgBvQhXBtgGAHAnpjwQg7ARhiBj");
	this.shape_44.setTransform(907.9,114.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#CC6600").ss(2,1,1).p("AO1KhIAGAaQAFAeAAAQQAAAIgVA+QgVA9AAAQAMEIaQgcB0guBHQgYAkhFBEArOt7QgJAHgJAGQguAegfAKQgeAFgKAEAsUsbQgvANgXAKQg2AWgPAFArjsoQgXAGgSAFAqlp3QhJAZhfAmQhWAigbAIAoynGQhBA/hOAhQhOAhgJAIAnej1Qh+BLgfATAlMhDQgQACgOADQhbAPgoAWQgPAJgMANQgQAPgFADAj5AkQhSBDgqAZQgbAQgbAGAg0B3QhdBjhXAzQhHAjgJAEACyE+QhfAWhTAcQhVAcgTAQAFjHbQh6BYgzAnQhFA0gdAdAIzH6QhvCUgYAeQgbAjgkAk");
	this.shape_45.setTransform(906.8,111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30}]},10).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_34},{t:this.shape_35}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[]},1).wait(11));

	// Scene 2
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2,1,1).p("AkhghQAmAcAyAAQAmAAAggRADoAYQAaAKAeAAQABAAABAA");
	this.shape_46.setTransform(311.3,471.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF0000").ss(2,1,1).p("AAAAAIAAAA");
	this.shape_47.setTransform(689.1,364.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#006600").ss(2,1,1).p("AHvhCIAAAJIAAD8AUZBEIAAD5AOOAbIAADqAiuBJIAABPAq2k8IAAIAA0Yj5IAAHzIAAAN");
	this.shape_48.setTransform(759.5,396.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("EAg1AJMQFkAABmgIQCdgLB1guQBMgeDuiCQE4iqEsiRQAjgRBrhUQBwhYAkgUQAtgZCMg2QCZg9AWgKQC4hXDCgQQBtgKDVADQABAAACAAQgBACAAACQAAACAAABQABAIACAPQACAOAHAHA69n/QAQAEARADQDZArDUBEQClA2D5BkQBhAnBvAuQI/DwDPBSQHKC0CsA7QBjAiEPBNQBnAeBpARQBhAPB9AIQDHAMCUACQC3ADAAgRQAAgOgGAEQgMAKgLAAQAOAAAPAAEBP5gGuQgBAFAAAEQAIAAAJAAEBP1gGlQABACABACEgqegJPQBPAABNACQCGADB7AHEghjgI3QB/ALByAQQA+AIA9ALEhPsACiQD8jYBkhMQCJhpBxgyQBlgtC7guQB3gdFrhWQBxgcGpgwQAHAAAHgBQFngoBNAJQAFAAAEABQANACAAAFQAAgOgIAEQgDACgCABQgFACgEACQgHADgGAAQAHAAAGAAQALAAALAAEhP+ACyQAJgIAJgIQAHAEAFAEEhQIACqIAAgUQAHAAANAHQAFACADAD");
	this.shape_49.setTransform(512.9,526.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF99CC").s().p("Ag0DgQgdgTgZghQhBhSAAhxQAAgSABgEQADgQAHhGIABgQQAGhFAmgYQAHAPADArQAEAvAHAQQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIACAAQAEgRALgbQAKgXALgXQAAAEAEABQAFASAYAwQAXAxAMAOQAIgHAPgfIAeg6QArhHAmANQAJAhAHAnQAIAxAAApQAAAZgNAwQgOA3gVAyQgzBzg9AQIAAgJIAAAJQgJACgIAAQgTAAgcgRgAAMDvg");
	this.shape_50.setTransform(807.8,367);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6600CC").s().p("AgRDwQgPgEgTgMIgBAAQgdgUgZggQhBhSAAhxQAAgSABgEQADgQAHhGIABgPQAGhGAmgYQAHAOADAtQAEAtAHASQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIACgBQAEgQALgbQAKgXALgXQAAAFAEAAQAFASAYAwQAXAxAMAOQAIgIAPgeIAeg5QArhIAmANQAJAhAHAnQAIAxAAApQAAAZgNAwQgOA3gVAyQgzBzg9AQQgJACgIAAIgMgBg");
	this.shape_51.setTransform(895.2,381.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF00").s().p("AHfDvQgQgDgTgNQgdgSgZghQhChSABhxQAAgSABgEQACgQAHhFIABgRQAHhFAmgYQAGAOAEAsQAEAvAGAQQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAIACAAQAEgRALgbQAJgXAMgXQAAAEAEAAQAEATAZAxQAYAvAMAPQAHgHAQgfIAeg6QArhHAlANQAKAhAGAnQAJAyAAAoQAAAZgNAwQgOA3gVAyQg0B0g8APQgJACgKAAIgLgCgAqJCKQgTgUAAgaQAAgcATgSQAHgIAIgEIAAgGIAAgJQAIAFAJAEQAHgBAHAAQAbgBATAUQATASAAAcQAAAagTAUQgTASgbAAQgbAAgTgSg");
	this.shape_52.setTransform(802.6,375.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AomgiQg4hpCpgyIAEgCQBDgWBDCKIBlh8QCxg5gbDeIj6E4IgBABgAA7hlQg4hqCpgyIAEgBQBDgWBDCJIBlh7QCxg5gbDeIj6E4IgBAAg");
	this.shape_53.setTransform(658,343.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhqDOIgJgIQgOgOgHgTQgagCgUgRIgJgIQgcgbAAgoQAAghATgZQgTgXAAghQAAgnAcgcQAcgcAnAAQAfAAAXARIAAgJQAAgoAbgcQAcgbAnAAQAoAAAbAbQAYAYADAgIAHgBQAnAAAcAcQAcAcAAAnQAAAogcAaQgLAMgNAGQARAYAAAfQAAAogcAbQgOAPgSAHQgQAGgTAAQgdAAgXgPQgGAPgNAMQgJAKgKAGIgMAGQgQAGgTAAQghAAgagUgAgdgrIAAAGQgIAFgIAHQgSATAAAaQAAAbASATQATATAaAAQAcAAASgTQAUgTgBgbQABgagUgTQgSgTgcAAQgGAAgHABQgJgEgHgFIAAAJg");
	this.shape_54.setTransform(742.1,382.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00CC33").s().p("EBGIAdPIoAgFIjyglQl+g6i/gbQhkgNg2gFQhVgGhFAGQg9AGhKASQglAIg/ATIgKgBQiXgGkvgGQhdgCguABQhOABg9AIQgtAGhcATQhaASgvAGQg6AGhlACQkMAEl3gUQmsgbjWgMQlIgSmTgKQkUgHnIgGQn7gIkPAIQmvALlXAyIh4ASQhGAKgxAFQhNAIhhADQg6ACh0AAI54AJIiXg1QBTlFA0lRQAQhnAGhEQAHhegGhPQgGhFgThUQgMgzgdhkIg4jHQgliEgbhTQgVg/gahEQAagZAOgRQAvg7BIhMQBHhLAAh9QAAgNAjgvQAcglgZgXIAAgUQAIAAAMAHIAJAEQD8jYBjhMQCJhpBygyQBkgtC7guQB4gdFqhWQBygdGpgvIANgBQFngoBOAIIAJACIgJAEQgIACgFABIANAAIAVAAICcACQCGADB8AHQAmAcAxAAQAnAAAfgRQB/ALBzARQA9AIA9ALQAaAKAeAAIACAAIAiAHQDZArDUBEQClA1D5BkQEHjuB8g4QArgTBVgXQBmgcBJgbQA4gVAvgTQBWgiBCggICPhHQBagpDNg4QCfgsDjg0QBugaCCgQQBOgKBVgGQB8gKDLgMQIug2CtgIIgPACIBeABQD1AGD/AjIBLAMIFUA3IAOACQC9AeDAAYIB3APQHCA1EtCoQBfA1CIBhQB+BaBDArIAHAFQALAEAIAFQAOAJAFAMIgUAAIg7AAIAAAAIgBAAQiSAAhXAHIgCAAIgGAAIgCABQjCAQi3BXQgXAKiZA9QiLA2gtAZQgkAUhwBYQhrBVgjARQktCRk3CqQjvCChMAeQh1AuicALQhmAHllABQFlgBBmgHQCcgLB1guQBMgeDviCQE3iqEtiRQAjgRBrhVQBwhYAkgUQAtgZCLg2QCZg9AXgKQC3hXDCgQIACgBIAGAAIACAAQBXgHCSAAIABAAIAAAAIA7AAIAUAAIABAFIBRAaIAtFEQAPBuADAuQADAxgBBcIAAAxQgvD0gOE0QgKDBABF6IABPzIAACFQilAljRAKQhiAFipAAIiBAAgAfxh8QCJAAABgOIAAAAQAAgOgFAEQgNAJgLABIAdAAIAAAAQgBAOiJAAIAAAAIAAAAIgqAAIgCAAQiUgCjIgMQh8gIhhgPQhpgRhogeQkOhNhjgiQisg7nLi0QjQhSo+jxQhuguhhgoQBhAoBuAuQI+DxDQBSQHLC0CsA7QBjAiEOBNQBoAeBpARQBhAPB8AIQDIAMCUACIACAAIAqAAIAAAAIAAAAgEhO4gIkIATgRQAHAEAEAFQgEgFgHgEIgTARgEBQ+gR1IACAXQACAOAIAHQgIgHgCgOIgCgXIgBgDIABADgATP7dIAAgNgEAh7gCKIAAAAg");
	this.shape_55.setTransform(505.9,598.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF33").s().p("ADnLiQiwhPiXhlQiEhYhyhpIgoglQjxjpidk2QgWgtgVgvQg9iGgtiUIdDlpIAAdsQmDhHk4iNg");
	this.shape_56.setTransform(933.3,61.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},10).to({state:[]},10).wait(10));

	// Scene 3
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AjQD0QgrgbAAgrQAAgrArgeQArggA8AAQAvABAAAFQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgDAAQgTgCgMgBQg1ABglAeQgkAegBAtQAAAkAeAWQAdAYAuAAQBZAABKhAQBKg/AAhNQABg9hNgVQgqAGgbABQgZgBAAgGQABgKAjABQAcAAAeAEQBKgYAsgwQArguABg4QAAg9hQgBQhEABhDAuQhFAwAAAvQAAAsA5AAQAgAAArgaQArgbAXglQADgGADAAQABABAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAGgSAUQgSAVgRAMQgzApgvAAQgdAAgSgQQgTgSAAgaQAAgxBGgtQBEgrBOAAQA5gBAjAZQAhAaAAArQABBzjJAkQB1AZABBdQgBBHhQA1QhRA2hoAAQhEAAgrgbg");
	this.shape_57.setTransform(551.4,456.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Aj9ALIAIgVIHzi6IgHAWIneCxIFmC2IgPAMg");
	this.shape_58.setTransform(507.3,458.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ai0EIQAAgTAVgUQAVgVAVAAQATAAAAAVQAAAVgUAUQgUAVgVgBQgVABAAgXgAhmCoIAFgKQAyhJBvj/QAchCAUgZQASgZAXABQAcAAAAAdQAAAWhwCbQh6CngnBPQgDAHgEAAQgDAAAAgGg");
	this.shape_59.setTransform(866.1,337.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AkNEaQgNgNAAgTQAAhhDihpIA4gbIAGgDIBWiYQgzBGgXAVQgWAWgXgBQgUAAgPgRQgPgRAAgWQAAgcAjg8IBKh/QALACAPAAQAMAAAXgCIhfCbQgpBDAAAVQAAAVAUAAQAzAABui6IAthOQALACAQAAQANAAAUgCQg9BfhnC6QA7geApgkQApgkAzhBQAHgJACAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAHg2A7Qg8BChfA0IgYAqQhGCAhNA9QhQBAg6AAQgUAAgOgMgAg1A2QjeBuAABYQAAAkApABQAzAAA0g5QAzg4BMiMIAFgLIg2Adg");
	this.shape_60.setTransform(820.8,369.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgGB6QgPgSAAgZQAAgaAQgfQgxBEgaAYQgaAYgYAAQgaAAgRgWQgSgWAAgiQAAhdCEhIQA6ggAjAAQAeAAAAAdQAAAIgEAOIAZgvQAPADALAAQANAAAVgDIhWCOQgtBLAAAYQAAAXATAAQAUAAArgtQArgsAshBQADgFADAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAALhIBTQg6BFghAAQgWAAgNgQgAhSgqQhJBXAAA2QAAAgAcAAQAiAABThwQBDhbAAgiQAAgYgWAAQgsAAhJBYg");
	this.shape_61.setTransform(799.1,353.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ak0FEQhSAPhLAAQiCAAAAgaQAAgNAggJQAggKAqAAQAzAACWAhQBngbA6g5QA6g4B1i8QBHhyBVhRQhHh4ieAAQimAAiJCCQhFBBgqBPQgqBPAABCQABA0AhAhQAhAfA4AAQBcAABlhlQBkhkAAhcQAAgjgTgWQgUgVggAAQgjAAgBAMQABADAFAAIAEgBIAHAAQAZAAAAAWQAAARgNAMQgMALgRAAQgeAAAAggQAAgWAUgPQATgQAcAAQAkAAAXAXQAWAYgBAmQAABihmBnQhnBnhiAAQhFAAgsgtQgrgugBhGQABiXCWh4QCWh5C9AAQCfAABRB3QB3huB7AAQA+AAAmAoQAnAnAABBQgBAZgFAbQgGAcgFAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIACgGQAKgeABgoQgBg9gkgmQgmglg9AAQh3AAhvBwQAqBOABBXQAACfh7BwQh7BviwAAQg3AAhggPgABegHQhFCVhJBDQhNBEiTApQA/ANBGAAQC6AAB0i1QBLh1AAhwQAAg/gbg2QhBBLg0BygApJE5QAAARCBAAQBJAAA6gJQiHgThCAAQg6AAgBALg");
	this.shape_62.setTransform(756,334.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhkCjQgUgTAAggQAAgkAagkQAagiAcAAQAFAAAEACIAmgvIAvg6QAJgiAQgZQASgYAQAAQAIAAAAAIQAAAUg9A6QgDAPAAALQAAAcAaA9QANAfAAAVQAAAsgrAgQgrAgg5AAQgiAAgTgSgAgZALQAJAHAAAMQAAAcgvALQgTAFgOAQQgOAQAAASQAAATAOAOQAOANAVAAQAqAAAjgwQAlgvAAg3IgBgbIgBgqQAAgWACgPIhOBhg");
	this.shape_63.setTransform(666.5,348.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgzB2QAQg1AUhkQAQhSAfAAQAUAAAAAYQAAAUgXApQg2BpgQAtg");
	this.shape_64.setTransform(663.6,313.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ah7CGIgeACIBQiCQA8hhAAgXQAAgOgLAAQgbAAhIBpQgEAHgEAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAJgMQBLhkAbAAQAmAAAAAyQAAAmgnA9QAYgdAXgSQATgrAcgeQAbgdAWAAQAPAAAAANQAAAYhEArIggAUIgGAFQgHAXAAANQAAApAfAAQAmAAAtg+QAKgLADAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAEgeAfQglApghAAQglAAAAgrQAAgNAGgVQgeAagTAaQgTAbgwBRIgegCg");
	this.shape_65.setTransform(614.6,352.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ah2ByQgXgZAAglQAAhXB7hDQA/gjApAAQARAAANAKQAMALAAAPQAAAjguAZQguAZhqAUQghAyAAAiQAAAqAtAAQBMAABwiWQAGgHAEgBQABABAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAACgJALIgVAZQhlB9hHAAQgjAAgXgYgAAQheQgqAjgoA5QBFgSAxghQAxghAAgdQAAgQgRAAQgaAAgqAlg");
	this.shape_66.setTransform(588,353.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AADDvQgOgSAAgZQAAgiAkg3QA6hVAAgRQAAgSgUAAQgdAAgyA5QgwA3hWCaQgPgDgKAAQgLAAgSADIBIiCQAPgcAeg2IBiinIBKh+QAPADAKAAQAUAAARgFIiWD0IhMB9QBbiHA1AAQAVAAAQASQAOARAAAaQAAAhgrBAQgwBHAAASQAAAVAVAAQAmAABYh7IAPgVIAKgLQACgFAEAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAEgGAFIgVAdQhcB/gtAAQgXAAgPgQg");
	this.shape_67.setTransform(557,341.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AhkCpQgQgQAAgZQAAgdAagsIBSiKIgxAAIAEgHIAyAAIA3heQAPADANAAQAOAAAOgDIg4BeIBAAAIgDAHIhAAAIhtC6QgTAhgBAVQAAAVAYAAQAsABBoicQAEgEADAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIgFAIIgVAcQhbB/gvAAQgWAAgQgQg");
	this.shape_68.setTransform(536.1,348.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AiOByQgVgYAAgiQAAhKBjhGQBEgxAtAAQAqAAAAAtQAAA4g7BOQAKAGAMAAQAWAAAegVQAdgUASgcQAGgGADgBQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAIgeAcQgrArgkAAQgPAAgMgGQg/Bbg5AAQgdAAgVgYgAg7guQhABUAAA6QAAAiAgAAQA1AAA9hXQgOgQAAgQQAAgXATgaQATgZASAAQAIAAADAKQAIgRAAgVQAAgogkAAQgsAAg/BVg");
	this.shape_69.setTransform(513.3,353.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AiVFbQgBgMAlABQATAAAiAEIAFAAQA0gSAjgoQAlgoAyhgQBljCA8hQQA6hNBRg2QAogbAMAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAABQABACgNAGQg6AfgrA5QgrA5g4B2QhRCrhABMQhABKhcAiQArAFAXAAQBLAAAtgfQAughBShuQAFgIADAAQAAABABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAGguA5Qg4BIgsAZQgtAahAAAQgnABgvgKQggALgiAAQgaAAAAgKgAqYFIQgsgdABgsQAAgaAOgRQAPgSAVAAQAhAAAAAgQAAAQgLAMQgKALgPgBQgYAAAAgaQAAgKgEAAQgIAAAAAcQAAAnAoAaQAoAZA+AAQCAAAB7iEQAxg1AigyQAjgzBlipQArhHA2g6QA1g7AYgBQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIgCADQgtAzglCJQg2DKgwBdQgwBahLAuQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIACABQAMAAAqgfQA1gmAsgzQAtg1BzifQBThxAxg0QAwg0A8goQBbg/BeABQBSgBA1AwQA1AwAABKQAAATgDASQgFARgEABQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIACgDQAGgRAAgdQAAhCgzgsQg0gthKAAQh5AAh/B2QgyAugjAsQgjAphmCFQiUDGhgAyQgqAWgMAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAKgIQAwgkAcg8QAag3BFjOQA6ivBKhNQADgDAAgBQgHgCgWAWQhJBJhhC6Qg9B0guA7QgtA8g/AsQhoBKhoAAQhEABgqgdgAopAPQgighAAg3QABhpBhhZQBihaB1ABQAvAAAbAYQAbAXAAArQAAAfgeA/QgLAXAAANQAAAmAoAAQAYAAAegYQAdgXARggQADgGADAAQAEAAAAAFQAAAKgdAfQgpAwgoAAQgbgBgSgTQgTgUAAgcQABgdATgmQAZgyAAgTQABgZgYgQQgYgPglABQhugBhfBZQhgBXAABjQABAzAfAhQAgAfAxAAQAsAAAtgZQAtgXAcgpIADgCQAEABAAADQAAALggAcQhAA4hMAAQg0AAghgig");
	this.shape_70.setTransform(473.4,332.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AkNEaQgNgNAAgTQAAhhDihpIA4gbIAGgDIBWiYQgzBGgXAVQgWAWgXgBQgUAAgPgRQgPgRAAgWQAAgcAjg8IBKh/QALACAPAAQAMAAAXgCIhfCbQgpBDAAAVQAAAVAUAAQAzAABui6IAthOQALACAQAAQANAAAUgCQg9BfhnC6QA7geApgkQApgkAzhBQAHgJACAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAHg2A7Qg8BChfA0IgYAqQhGCAhNA9QhQBAg6AAQgUAAgOgMgAg1A2QjeBuAABYQAAAkApABQAzAAA0g5QAzg4BMiMIAFgLIg2Adg");
	this.shape_71.setTransform(356.9,369.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("ACYlIQAOADAMAAQANAAATgDIiRDqQA0hFAYgWQAYgVAXgBQAaABARAWQASAXAAAgQAABQhjBAQhQA1guAAQgeAAAAgcQAAgKAFgPIi7E5QgRgEgLgBQgQABgQAFgABBhVQhBBZAAAhQAAAYAXAAQAtABBJhXQBIhYAAg2QAAghgcAAQgkAAhUBzg");
	this.shape_72.setTransform(326.3,360);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("ACYlIQANADANAAQANAAATgDIiRDqQA1hFAYgWQAXgVAXgBQAaABASAWQARAXAAAgQAABQhjBAQhQA1guAAQgeAAAAgcQAAgKAFgPIi7E5QgSgEgKgBQgQABgQAFgABBhVQhBBZAAAhQAAAYAXAAQAtABBJhXQBIhYAAg2QAAghgcAAQgkAAhUBzg");
	this.shape_73.setTransform(299.8,360);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGB6QgPgSAAgZQAAgaAQgfQgxBEgaAYQgaAYgYAAQgaAAgRgWQgSgWAAgiQAAhdCEhIQA6ggAjAAQAeAAAAAdQAAAIgEAOIAZgvQAPADALAAQANAAAVgDIhWCOQgtBLAAAYQAAAXATAAQAUAAArgtQArgsAshBQADgFADAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAALhIBTQg6BFghAAQgWAAgNgQgAhSgqQhJBXAAA2QAAAgAcAAQAiAABThwQBDhbAAgiQAAgYgWAAQgsAAhJBYg");
	this.shape_74.setTransform(282.2,353.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AjEFbQAAgMAoAAQAWAAAiAGQBAgdAigpQAjgtBIiPIAIgQIi9AAQguBVgiAqQghApg5AmQh9BVhzAAQhEAAgqgcQgqgdAAguQAAgYAOgRQAOgSAVAAQAfAAAAAgQAAAPgKAMQgJALgOAAQgYAAAAgXQACgMgEAAQgJAAAAAaQAAAoAlAaQAmAZA7AAQBmAABOg9QBNg9BjifIiXAAIAFgKICYAAIAUgfQBnilBZhCQATgOAggQQAfgRAIAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAADgKAEQg8AZgvA7QgwA7hRCbIC9AAQBciiBrhaQBrhbBmAAQAyAAAgAbQAfAbAAArQAABOheA1QgpAXgPAAQgEAAAAgEQAAgCAOgGQA3gWAjgnQAigoAAgqQAAgngagYQgbgZgsAAQiLAAhvChQgTAbhhC6QhoDJiOAuQAqAFAZAAQBYAAA+g6QA1gyAshCQAGgHACAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAFguA7Qg2BGgtAaQgtAahBAAQgoAAgwgHQgkAKgeAAQgZAAAAgLgAnlAPQghgiAAg2QAAhpBihaQBihZB0AAQBmAAAABaQAAAegVAsQgVAqAAAPQAAAlAoAAQAZAAAfgXQAfgXARgfQACgFACAAQAEAAAAAEQAAAKgcAfQgrAugnAAQgcAAgSgTQgTgVAAgcQAAgbAUgoQAZgyAAgTQAAgZgXgPQgYgPgmAAQhtAAhgBYQhfBXAABkQAAAzAfAgQAfAgAyAAQBhAABBhYQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAEAAAAAEQAAALgfAbQhBA5hLAAQg0AAgigig");
	this.shape_75.setTransform(244.3,332.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},20).wait(10));

	// Envelope flap
	this.instance = new lib.Flap();
	this.instance.parent = this;
	this.instance.setTransform(499.5,133.7,1,1,0,0,0,390.6,106.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},7).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(511,383,1026,770);
// library properties:
lib.properties = {
	id: 'AF86E6DBA5C22B4E9F5C2E80DFA5E39E',
	width: 1024,
	height: 768,
	fps: 8,
	color: "#00CCFF",
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
an.compositions['AF86E6DBA5C22B4E9F5C2E80DFA5E39E'] = {
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