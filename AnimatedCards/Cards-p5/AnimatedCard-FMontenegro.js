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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(495.3,62.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,990.6,124.6), null);


(lib.InvisibleButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egn1gn1MBPrAAAMAAABPrMhPrAAAg");
	this.shape.setTransform(7,-20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Egn1An2MAAAhPrMBPrAAAMAAABPrg");
	this.shape_1.setTransform(7,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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
(lib.AnimatedCardFMontenegro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on the current frame
		
		this.I_btn.addEventListener("click", fl_ClickToPlay.bind(this));
		//this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_10 = function() {
		this.stop(21); // This will make the main timeline stop on the current frame
		
		//this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.next_btn.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_20 = function() {
		this.stop(31); // This will make the main timeline stop on the current frame
		
		//this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.next_btn.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(10));

	// Christmas Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgvCsIAAhUIBfAAIAABUgAgeBAIgUidIAAhOIBlAAIAABOIgTCdg");
	this.shape.setTransform(651.9,434.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AheBvQgdgUgIgjIBegJQAGARALAGQAKAIARAAQATAAALgJQAIgGAAgIQAAgLgLgFQgIgFgggFQgygJgTgHQgTgIgNgQQgOgSAAgWQAAgZAPgSQAOgRAZgJQAZgJAqAAQAsAAAVAHQAVAHAOAOQAPAOAJAYIhbAJQgDgLgIgGQgMgIgOABQgRgBgHAGQgHAGAAAIQAAAJAJAFQAJAEAfAEQAvAGAYAJQAXAKAMARQAMARAAAVQAAAWgNAUQgNAVgcAMQgcAMgwAAQhDAAgdgTg");
	this.shape_1.setTransform(629,439.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ah3BuQgXgVAAgeQgBgcASgTQAQgRAsgJIBFgPQAQgFASgGQAAgSgHgIQgIgGgSgBQgWAAgMAIQgJAGgFAQIhcgJQAFgYAKgOQAJgNATgLQANgHAXgEQAXgEAbAAQApAAAaAFQAaAEASAQQAMAKAHAUQAHATAAARIAABtQAAASACAKQADAKAIAPIhaAAIgHgOIgEgQQgTASgSAIQgYAKghAAQgtAAgXgUgAgCATQgdAIgIAHQgIAIAAAJQAAAMAIAHQAIAHAPAAQAQAAANgIQAOgHAFgMQAGgLAAgRIAAgQQgUAIgUAFg");
	this.shape_2.setTransform(598.6,439.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AB0B/IAAiNQAAgQgHgJQgKgNgOAAQgRAAgKANQgKAMAAAbIAAB/IhfAAIAAiIQAAgQgCgGQgDgJgHgGQgIgGgKAAQgQAAgLAMQgLANAAAbIAAB/IhfAAIAAj4IBZAAIAAAlQATgXAUgKQATgJAcAAQAeAAAQAKQASALALAVQAWgZATgIQASgJAbAAQAoAAAXAYQAWAXAAAzIAACbg");
	this.shape_3.setTransform(558.6,439.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgYClQgRgIgIgTQgIgTAAgpIAAhXIgkAAIAAhGIAkAAIAAguIBfgwIAABeIA0AAIAABGIg0AAIAABXQAAAQACAFQAFAIAMAAQALAAASgGIAIBCQgkAIgegBQgjAAgRgJg");
	this.shape_4.setTransform(523.9,435.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AheBvQgdgUgIgjIBegJQAGARALAGQAKAIARAAQATAAALgJQAIgGAAgIQAAgLgLgFQgIgFgggFQgygJgTgHQgTgIgNgQQgOgSAAgWQAAgZAPgSQAOgRAZgJQAZgJAqAAQAsAAAVAHQAVAHAOAOQAPAOAJAYIhbAJQgDgLgIgGQgMgIgOABQgRgBgHAGQgHAGAAAIQAAAJAJAFQAJAEAfAEQAvAGAYAJQAXAKAMARQAMARAAAVQAAAWgNAUQgNAVgcAMQgcAMgwAAQhDAAgdgTg");
	this.shape_5.setTransform(498.4,439.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AguCsIAAj4IBdAAIAAD4gAguhqIAAhBIBdAAIAABBg");
	this.shape_6.setTransform(476,434.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhhB/IAAj4IBZAAIAAApQAMgaAOgKQAOgKAUAAQAVAAAZANIgeBEQgQgHgKAAQgTAAgKAPQgOAWAAA7IAABTg");
	this.shape_7.setTransform(459.4,439.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAjCsIAAiJQAAgYgIgJQgIgJgRAAQgPAAgMAMQgLANAAAiIAAB4IhfAAIAAlXIBfAAIAAB/QAUgUASgJQAUgJAaAAQAnAAAWAYQAXAYAAAwIAACeg");
	this.shape_8.setTransform(430.7,434.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhPChQgjgQgagpQgagpAAg/QAAhVAtguQAuguBSAAQBBAAAlAbQAlAaASA2IheAVQgFgQgFgHQgJgMgNgHQgNgGgQAAQgjAAgTAdQgPAVAAAvQAAA4ASAVQARAVAeAAQAfAAAQgRQAPgRAHghIBdAcQgJAngUAbQgUAageANQgeAOguAAQg3AAgkgRg");
	this.shape_9.setTransform(396.3,434.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ah9CpIgHhCQAUAHAagBQARAAAKgIQAKgHAIgUIhpj4IBlAAIAyCmIAwimIBeAAIhjEJQgRAtgRAQQgYAXgzAAQgVAAgrgGg");
	this.shape_10.setTransform(581.1,375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhhB/IAAj4IBZAAIAAApQAMgaAOgKQAOgKAUAAQAVAAAZANIgeBEQgQgHgKAAQgTAAgKAPQgOAWAAA7IAABTg");
	this.shape_11.setTransform(555,369.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AhhB/IAAj4IBZAAIAAApQAMgaAOgKQAOgKAUAAQAVAAAZANIgeBEQgQgHgKAAQgTAAgKAPQgOAWAAA7IAABTg");
	this.shape_12.setTransform(531.7,369.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AhNB1QgdgPgTgeQgSgfAAgpQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAALIi+AAQADAWAKAMQANAQAWAAQAOAAAMgHQAIgEAJgLIBeAIQgWAmgfAQQgdAQg5AAQgxAAgcgNgAgjg2QgJALgCAWIBdAAQgCgcgMgMQgNgMgUABQgVAAgOASg");
	this.shape_13.setTransform(503,370);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("ABqCsIAAkFIhDEFIhOAAIhCkFIAAEFIhXAAIAAlXICLAAIA1DQIA2jQICLAAIAAFXg");
	this.shape_14.setTransform(464.3,365.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Ah9CqIgHhDQAUAGAaABQARAAAKgJQAKgHAIgUIhpj4IBlAAIAyCmIAwimIBeAAIhjEJQgRAtgRARQgYAWgzAAQgVAAgrgFg");
	this.shape_15.setTransform(659.1,305.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AhhB/IAAj4IBZAAIAAApQAMgaAOgKQAOgKAUAAQAVAAAZANIgeBEQgQgHgKAAQgTAAgKAPQgOAWAAA7IAABTg");
	this.shape_16.setTransform(632.9,300);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AhNB1QgdgPgTgeQgSgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAAKIi+AAQADAYAKALQANAQAWAAQAOAAAMgHQAIgFAJgLIBeAJQgWAmgfAQQgdAQg5AAQgxAAgcgNgAgjg3QgJAMgCAWIBdAAQgCgbgMgMQgNgNgUAAQgVAAgOASg");
	this.shape_17.setTransform(604.3,300.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ag3CsIiClXIBvAAIBMD2IBMj2IBsAAIh/FXg");
	this.shape_18.setTransform(572,295.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Ah9CqIgHhDQAUAGAaABQARAAAKgJQAKgHAIgUIhpj4IBlAAIAyCmIAwimIBeAAIhjEJQgRAtgRARQgYAWgzAAQgVAAgrgFg");
	this.shape_19.setTransform(522.8,305.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AhhB/IAAj4IBZAAIAAApQAMgaAOgKQAOgKAUAAQAVAAAZANIgeBEQgQgHgKAAQgTAAgKAPQgOAWAAA7IAABTg");
	this.shape_20.setTransform(496.6,300);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AhOB1QgcgPgTgeQgSgeAAgpQAAg6AlgkQAmgkBCAAQA0AAAfAQQAfAQAQAfQAQAeAAAxIAAAKIi+AAQACAYAKALQAOAQAVAAQAPAAAMgHQAIgFAJgLIBeAJQgWAmgeAQQgfAQg4AAQgxAAgdgNgAgjg3QgJAMgCAWIBdAAQgDgbgLgMQgNgNgUAAQgVAAgOASg");
	this.shape_21.setTransform(468,300.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("Ag3CsIiClXIBvAAIBMD2IBMj2IBsAAIh/FXg");
	this.shape_22.setTransform(435.7,295.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("ABMCsIgRg5Ih4AAIgRA5IhsAAICBlXIBzAAICBFXgAgmApIBLAAIglh7g");
	this.shape_23.setTransform(382.4,295.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AhsBoQgXgYAAgxIAAidIBhAAIAACIQAAAXAIAKQAJAKAPAAQARAAALgNQAKgNAAghIAAh4IBfAAIAAD4IhZAAIAAgpQgUAZgUALQgTAKgeAAQgnAAgWgXg");
	this.shape_24.setTransform(662.6,230.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AhgBjQguglAAg9QAAg4AmglQAnglBBAAQBKAAAmAsQAfAiAAAzQAAA5gmAlQgmAkhDAAQg7AAglgfgAghgvQgOAPAAAgQAAAiAOAQQAOAPATAAQAVAAANgPQANgPAAgjQAAgggNgPQgNgQgUgBQgUAAgOARg");
	this.shape_25.setTransform(630.7,230.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("Ag0CsIAAiQIiGjHIB2AAIBEB0IBGh0IB1AAIiGDHIAACQg");
	this.shape_26.setTransform(600.2,225.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AhlCbQgcgWAAgmIAAgNIBdALQADANAHAFQALAHAPAAQAVAAAKgLQAKgLAAgbIAAgmQgOAQgOAIQgVAMgaAAQgyAAgegsQgWgeAAgzQAAg6AcgeQAcgfAuAAQAdAAASAKQASAKARAXIAAglIBZAAIAADqIAAALQAAAXgKAWQgKAVgQANQgRANgZAGQgaAGggAAQhKAAgcgXgAgeheQgLANAAAfQAAAbAMANQALAMASAAQASAAAMgNQAMgNAAgcQAAgbgNgOQgNgPgRAAQgSAAgLAOg");
	this.shape_27.setTransform(548.8,235.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AAkB/IAAiIQAAgXgJgKQgIgKgRAAQgPAAgMAOQgLANABAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAVgKQATgLAdAAQAoAAAWAXQAXAYAAAxIAACdg");
	this.shape_28.setTransform(517.5,230.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgvCsIAAj4IBeAAIAAD4gAgvhqIAAhBIBeAAIAABBg");
	this.shape_29.setTransform(493.4,225.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AAkCsIAAiJQAAgYgJgJQgJgJgPAAQgQAAgLAMQgLANAAAiIAAB4IhgAAIAAlXIBgAAIAAB/QATgUATgJQASgJAbAAQAnAAAXAYQAVAYAAAwIAACeg");
	this.shape_30.setTransform(469.5,225.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AheBuQgdgTgIgkIBegJQAGASALAGQAKAIARAAQATAAALgIQAIgHAAgJQAAgKgLgGQgIgDgggHQgygIgTgHQgTgIgNgQQgOgRAAgXQAAgZAPgRQAOgTAZgIQAZgJAqAAQAsAAAVAHQAVAGAOAPQAPAOAJAYIhbAJQgDgMgIgFQgMgIgOAAQgRAAgHAGQgHAGAAAIQAAAJAJAFQAJAFAfAEQAvAEAYALQAXAJAMARQAMARAAAVQAAAWgNAVQgNAUgcAMQgcAMgwAAQhDAAgdgUg");
	this.shape_31.setTransform(438.5,230.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AguCsIAAj4IBdAAIAAD4gAguhqIAAhBIBdAAIAABBg");
	this.shape_32.setTransform(416.1,225.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AA8CsIg8jYIg7DYIhoAAIhMlXIBkAAIAlDAIA1jAIBjAAIA2C/IAki/IBkAAIhLFXg");
	this.shape_33.setTransform(382.5,225.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).wait(10));

	// Snowflakes
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(528.7,62.3,1,1,0,0,0,495.3,62.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({y:152.9},0).wait(1).to({y:243.7},0).wait(1).to({y:334.5},0).wait(1).to({y:425.2},0).wait(1).to({y:516},0).wait(1).to({y:606.7},0).wait(1).to({y:697.5},0).wait(1).to({y:788.1},0).wait(1).to({y:879},0).to({_off:true},1).wait(10));

	// Town
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("EAuEgQwILkAAIAAPyIrkAAgAdrwwILkAAIAAPyIrkAAgEAqrAQxIhcgBIAAsMIGBAAIAAMLIAAABIgPAAEgpDgQwILkAAIAAPyIrkAAgEg5ngQwILkAAIAAPyIrkAAgEgsqAQxIhdgBIAAsMIGCAAIAAMMIgQAA");
	this.shape_34.setTransform(513.8,346.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(10,1,1).p("EAveAfCIOLgGMAA8glKMgmSAAeMgAKAk+ITHgKIDzgBQAGAAAGAAEAq5AfEQAMAAALAAAHmmYMAktgY1MAirAY/gEhO9gGYMAktgY1MAirAY/gEgn3AfDIO9gHMAA8glKMgmSAAeMgAKAk+IR+gKQCKAACLgB");
	this.shape_35.setTransform(512.4,254.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#663300").s().p("EAqHAGGIhdgBIAAsKIGCAAIAAMKIAAAAIgQAAIgLAAIjzABIgXAAgEgurAGFIAAsKIGCAAIAAMKIgQAAIkWABg");
	this.shape_36.setTransform(517.5,414.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CCFF").s().p("EAuEAH5IAAvxILkAAIAAPxgAdrH5IAAvxILkAAIAAPxgEgpDAH5IAAvxILkAAIAAPxgEg5nAH5IAAvxILkAAIAAPxg");
	this.shape_37.setTransform(513.8,289.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AHmMWMAktgY1MAirAY/gEhO9AMWMAktgY1MAirAY/g");
	this.shape_38.setTransform(512.4,135);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AYOyPMAmSgAeMgA8AlJIuLAHIAAsLImBAAIAAMLIBcABIAXABIzHAJgEAuNAA1ILkAAIAAvxIrkAAgAd0A1ILkAAIAAvxIrkAAgEg+VgSPMAmSgAeMgA8AlJIu9AHIAAsLImCAAIAAMLIBdABIx+AKgEgo6AA1ILkAAIAAvxIrkAAgEg5eAA1ILkAAIAAvxIrkAAg");
	this.shape_39.setTransform(512.9,334.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},10).to({state:[]},10).wait(10));

	// Street
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFF00").ss(10,1,1).p("EA0RgAcIKTAAEAiRgAcIJpAAEBEmgAsIIHAAEgyuAAlILVAAEhMsAAtILcAAA79AMIKKAAAmeAEIJXAAAN9gcIKSAA");
	this.shape_40.setTransform(518.1,521.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("EhP7gJ/MCf3gBREBP8AIvMif3ACh");
	this.shape_41.setTransform(512.4,519.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("EhP7gJ/MCf2gBQIAAT+Mif2ACigEhAXAA/IrcAAgEgmhAA3IrUAAgAw7AeIqKAAgADyAWIpYAAgEA/cgAKIqSAAgEAsygAKIpoAAgAZHgKIqSAAgEBNlgAaIoGAAg");
	this.shape_42.setTransform(512.4,519.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},10).to({state:[]},10).wait(10));

	// Lights
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("AneVSQgugtAAhBQAAgdAKgaQALgeAZgYQAfgfAogKQASgEAUgBQAUABASAEQAoAKAfAfQAZAYALAeQAKAaAAAdQAABBguAtQgtAthAABQhAgBgtgtgADiQwIATAAIAAAgQgLgPgIgRgAAeBxQgsguAAhAQAAgcAKgaQAKgeAYgZQAugtBAAAQBAAAAuAtQAYAZAMAeQAJAaAAAcQAABAgtAuQguAthAAAQhAAAgugtgAEFx2QgVgUgLgZQgOgdAAgkQAAgdAKgZQALgeAZgZQAPgPARgLQAjgTAqAAQAqAAAjATQARALAPAPQAZAZALAeQAKAZAAAdQAAAkgOAdQgLAZgVAUQgtAthAAAQhAAAgtgtg");
	this.shape_43.setTransform(512.5,314.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0000FF").s().p("AE8PbQgJgJgHgJIAAggIgTAAQgLgbAAggQAAgeAKgZQALgfAZgYQAtgtBAgBQBAABAtAtQAZAYALAfQAKAZAAAeQAAA/guAuQgtAuhAAAQhAAAgtgugAqhEfQgugtAAhAQAAgeAKgZQALgeAZgYQAtguBAAAQBAAAAtAuQAZAYALAeQAKAZAAAeQAABAguAtQgtAuhAAAQhAAAgtgugAIDnJQgtguAAhAQAAgdAKgaQALgdAYgZQAugtBAAAQBAAAAtAtQAZAZALAdQAKAaAAAdQAABAguAuQgtAthAAAQhAAAgugtgAqorbQgdgMgZgYQgtguAAg/QAAgeAKgZQAGgQAJgPQAJgMALgMQAugtBAgBQBAABAuAtQALAMAJAMQAJAPAHAQQAJAZAAAeQAAA/gtAuQgZAYgdAMQgaAKgeAAQgeAAgagKg");
	this.shape_44.setTransform(507,328.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AH/WfQgugtAAhAQAAgeAKgZQALgeAZgYQAtguBAAAQBAAAAuAuQAYAYALAeQAKAZAAAeQAABAgtAtQguAuhAAAQhAAAgtgugAoQKtQgWgLgSgTQgfgfgKgnQgFgTAAgUQAAgeAKgZQALgeAZgZQAtgtBAAAQBAAAAuAtQAYAZALAeQAKAZAAAeQAAAUgFATQgKAngeAfQgTATgXALQgfAPglAAQglAAgggPgAFBFZQgugtAAhBQAAgdAKgaQALgdAZgZQAtguBAAAQBAAAAuAuQAYAZAMAdQAJAaAAAdQAABBgtAtQguAthAABQhAgBgtgtgAo4rGQgugtAAhAQAAgeAKgZQALgeAZgYQAPgQARgKQAjgUAqAAQAqAAAjAUQARAKAQAQQAYAYALAeQAKAZAAAeQAABAgtAtQguAuhAAAQhAAAgtgugArYzDQguguAAhAQAAgdAKgaQALgeAZgZQAtgtBAAAQBAAAAtAtQAZAZALAeQAKAaAAAdQAABAguAuQgtAthAAAQhAAAgtgtg");
	this.shape_45.setTransform(557.5,322.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF00FF").s().p("AChTaQgJgJgHgJQgLgPgIgRQgLgbAAggQAAgeAKgZQALgfAZgYQAtgtBAgBQBAABAtAtQAZAYALAfQAKAZAAAeQAAA/guAuQgtAuhAAAQhAAAgtgugAhFDpQgtguAAhAQAAgdAKgaQALgeAYgZQAugsA/AAQBAAAAuAsQAYAZAMAeQAJAaAAAdQAABAgtAuQguAthAAAQg/AAgugtgAl6v+QguguAAhAQAAgdAKgZQALgeAZgZQAtgtBAAAQBAAAAtAtQAZAZALAeQAKAZAAAdQAABAguAuQgtAthAAAQhAAAgtgtg");
	this.shape_46.setTransform(522.5,302.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0000FF").s().p("ALgSgQgugtAAhAQAAgeAKgZQALgeAZgYQAtguBAAAQBAAAAuAuQAYAYALAeQAKAZAAAeQAABAgtAtQguAuhAAAQhAAAgtgugAu5BaQgugtAAhAQAAgdAKgaQALgdAZgZQAtguBAAAQBAAAAtAuQAZAZALAdQAKAaAAAdQAABAguAtQgtAthAABQhAgBgtgtgAlXvFQgugtAAhAQAAgeAKgZQALgeAZgZQAPgPARgKQAjgUAqAAQAqAAAjAUQARAKAQAPQAYAZALAeQAKAZAAAeQAABAgtAtQguAuhAAAQhAAAgtgug");
	this.shape_47.setTransform(535,348);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AEKM2QgWgLgSgTQgfgfgKgnQgFgTAAgUQAAgeAKgZQALgeAZgZIABgBQAtgsA/AAQA/AAAuAsIABABQAYAZALAeQAKAZAAAeQAAAUgFATQgKAngeAfQgTATgXALQgfAQglAAQglAAgggQgAmGoZQgdgLgZgYQgtguAAhAQAAgdAKgaQAGgQAJgOQAJgNALgLQAuguBAAAQBAAAAuAuQALALAJANQAJAOAHAQQAJAaAAAdQAABAgtAuQgZAYgdALQgaAKgeAAQgeAAgagKg");
	this.shape_48.setTransform(478,308.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("ArdVSQgugtAAhBQAAgdAKgaQALgeAZgYQAfgfAogKQASgEAUgBQAUABASAEQAoAKAfAfQAZAYALAeQAKAaAAAdQAABBguAtQgtAthAABQhAgBgtgtgAIEGmQgugtAAhAQAAgeAKgZQALgeAZgYQAtguBAAAQBAAAAuAuQAYAYAMAeQAJAZAAAeQAABAgtAtQguAuhAAAQhAAAgtgugADNlCQgtguAAhAQAAgdAKgaQALgdAYgZQAugtBAAAQBAAAAtAtQAZAZALAdQAKAaAAAdQAABAguAuQgtAthAAAQhAAAgugtgAAGx2QgLgMgJgNQgGgJgFgLQgOgdAAgkQAAgdAKgZQALgeAYgZQAIgJAJgHIAPgKQAjgTAqAAQAqAAAjATIAPAKQAJAHAIAJQAZAZALAeQAKAZAAAdQAAAkgOAdQgFALgGAJQgJANgMAMQgtAthAAAQhAAAgtgtg");
	this.shape_49.setTransform(538,314.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CCFFFF").s().p("AhsBtQgugtAAhAQAAgdAKgZQALgeAZgYQAtguA/AAQBAAAAuAuQAYAYALAeQAKAZAAAdQAABAgtAtQguAuhAAAQg/AAgtgug");
	this.shape_50.setTransform(619.5,455.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FF00").s().p("AlrVSQgugtAAhBQAAgdAKgaQALgeAZgYQAfgfAogKQASgEAUgBQAUABASAEQAoAKAfAfQAZAYALAeQAKAaAAAdQAABBguAtQgtAthAABQhAgBgtgtgACRBxQgOgPgJgQQgWgjAAgsQAAgcAKgaQALgeAYgZQAugtBAAAQBAAAAuAtQAYAZAMAeQAJAaAAAcQAAAsgWAjQgJAQgOAPQguAthAAAQhAAAgugtgAijx2QguguAAhAQAAgdAKgZQALgeAZgZQAtgtBAAAQA/AAAtAtQAZAZALAeQAKAZAAAdQAABAguAuQgtAtg/AAQhAAAgtgtg");
	this.shape_51.setTransform(501,314.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF00FF").s().p("AkCQ1QgWgLgSgTQgfgfgKgnQgFgTAAgUQAAgeAKgZQALgeAZgZQAtgtBAAAQBAAAAuAtQAYAZALAeQAKAZAAAeQAAAUgFATQgKAngeAfQgTATgXALQgfAQglAAQglAAgggQgABRs7QgVgVgLgYQgOgdAAgkQAAgdAKgaQALgeAZgYQAPgQARgKQAjgUAqAAQAqAAAjAUQARAKAPAQQAZAYALAeQAKAaAAAdQAAAkgOAdQgLAYgVAVQgtAthAAAQhAAAgtgtg");
	this.shape_52.setTransform(530.5,283.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#99FFFF").s().p("AhsBtQgugtAAhAQAAgdAKgZQALgeAZgYQAtguA/AAQBAAAAtAuQAZAYALAeQAKAZAAAdQAABAguAtQgtAuhAAAQg/AAgtgug");
	this.shape_53.setTransform(450.5,346);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0000FF").s().p("AGgPbQgJgJgHgJQgLgPgIgRQgLgbAAggQAAgeAKgZQALgfAZgYQAtgtBAgBQBAABAtAtQAZAYALAfQAKAZAAAeQAAA/guAuQgtAuhAAAQhAAAgtgugApErbQgdgMgZgYQgtguAAg/QAAgeAKgZQAGgQAJgPQAJgMALgMQAugtBAgBQBAABAuAtQALAMAJAMQAJAPAHAQQAJAZAAAeQAAA/gtAuQgZAYgdAMQgaAKgeAAQgeAAgagKg");
	this.shape_54.setTransform(497,328.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF00").s().p("AFQJ9QgugtAAhAQAAgeAKgZQALgeAZgZQAtgtBAAAQBAAAAuAtQAYAZAMAeQAJAZAAAeQAABAgtAtQguAuhAAAQhAAAgtgugAopmhQguguAAhAQAAgdAKgaQALgeAZgYQAPgQARgKQAjgUAqAAQAqAAAjAUQARAKAQAQQAYAYALAeQAKAaAAAdQAABAgtAuQguAthAAAQhAAAgtgtg");
	this.shape_55.setTransform(556,293.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AhtBuQgtguAAhAQAAgcAKgaQALgeAYgZQAugtA/AAQBAAAAtAtQAZAZALAeQAKAaAAAcQAABAguAuQgtAthAAAQg/AAgugtg");
	this.shape_56.setTransform(569.5,271.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#99FFFF").s().p("AhEM2QgWgLgSgTQgfgfgKgnQgFgTAAgUQAAgeAKgZQAHgTAMgQQAHgKAKgKQAtgtA/AAQBAAAAuAtQAJAKAIAKQALAQAHATQAKAZAAAeQAAAUgFATQgKAngeAfQgTATgXALQgfAQglAAQgkAAgggQgAhso8QguguAAhAQAAgdAKgaQALgeAZgYQAPgQARgKQAjgUApAAQAqAAAjAUQARAKAQAQQAYAYALAeQAKAaAAAdQAABAgtAuQguAthAAAQg/AAgtgtg");
	this.shape_57.setTransform(511.5,308.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00FF00").s().p("AFkWfQgugtAAhAQAAgeAKgZQALgeAZgYQAtguBAAAQBAAAAuAuQAYAYALAeQAKAZAAAeQAABAgtAtQguAuhAAAQhAAAgtgugAo+AjQgtgtAAg/QAAgeAKgZQALgeAYgZQAugtBAAAQBAAAAuAtQAYAZAMAeQAJAZAAAeQAAA/gtAtQguAthAAAQhAAAgugtgAlXzDQgVgVgLgYQgHgOgDgPQgEgRAAgTQAAgdAKgaQALgeAZgZQAOgOAQgKIACgBQAjgUAqAAQAqAAAjAUIACABQAQAKAOAOQAZAZALAeQAKAaAAAdQAAATgEARQgDAPgHAOQgLAYgVAVQgtAthAAAQhAAAgtgtg");
	this.shape_58.setTransform(573,322.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0000FF").s().p("ArdJDQgugtAAhAQAAgeAKgZQALgeAZgZQAfgfAogKQASgEAUAAQAUAAASAEQAoAKAfAfQAZAZALAeQAKAZAAAeQAABAguAtQgtAuhAAAQhAAAgtgugAIElnQgTgSgLgVQgQggAAgnQAAgdAKgaQALgeAZgYQAdgeAmgKQAUgGAWAAQAWAAAUAGQAmAKAeAeQAYAYAMAeQAJAaAAAdQAAAngRAgQgKAVgSASQguAthAAAQhAAAgtgtg");
	this.shape_59.setTransform(538,393);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFF00").s().p("AlNN8QgugtAAhAQAAgeAKgZQALgeAZgZQAtgtBAAAQBAAAAtAtQAZAZALAeQAKAZAAAeQAABAguAtQgtAuhAAAQhAAAgtgugAB0qgQguguAAhAQAAgdAKgaQALgeAZgYQAtguBAAAQBAAAAtAuQAZAYALAeQAKAaAAAdQAABAguAuQgtAthAAAQhAAAgtgtg");
	this.shape_60.setTransform(473,267.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AE8PbQgJgJgHgJQgLgPgIgRQgLgbAAggQAAgeAKgZQAJgZARgUIAKgKQAogoA2gFIAPgBQBAABAtAtQAZAYALAfQAKAZAAAeQAAA/guAuQgtAuhAAAQhAAAgtgugAIDnJQgtguAAhAQAAgdAKgaQALgdAYgZQAugtBAAAQBAAAAtAtQAZAZALAdQAKAaAAAdQAABAguAuQgtAthAAAQhAAAgugtgAqorbQgdgMgZgYQgtguAAg/QAAgeAKgZQAGgQAJgPQAJgMALgMQAugtBAgBQBAABAuAtQALAMAJAMQAJAPAHAQQAJAZAAAeQAAA/gtAuQgZAYgdAMQgaAKgeAAQgeAAgagKg");
	this.shape_61.setTransform(507,328.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},3).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},3).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},3).to({state:[]},1).wait(20));

	// Actions / CODE
	this.I_btn = new lib.InvisibleButton();
	this.I_btn.name = "I_btn";
	this.I_btn.parent = this;
	this.I_btn.setTransform(528.7,339.6,0.825,1.16,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.I_btn, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.I_btn).wait(10).to({_off:true},10).wait(10));

	// Label
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AhOB0QgcgOgTgeQgSgeAAgqQAAg5AlgkQAmgkBCAAQA0AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXAKALQAOAQAVAAQAOAAANgHQAIgEAJgLIBeAIQgWAlgeARQgfAQg4AAQgxAAgdgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_62.setTransform(688.6,641.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQAOAAAMgHQAIgEAJgLIBeAIQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgMQgMgLgTgBQgWABgOARg");
	this.shape_63.setTransform(656.6,641.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AhhB/IAAj4IBZAAIAAApQAMgaAOgKQAOgKAUAAQAVAAAZANIgeBEQgQgHgKAAQgTAAgKAPQgOAWAAA7IAABTg");
	this.shape_64.setTransform(631.2,640.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ag0CsIAAkCIhtAAIAAhVIFDAAIAABVIhtAAIAAECg");
	this.shape_65.setTransform(603.1,636.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AhOB0QgcgOgTgeQgSgeAAgqQAAg5AlgkQAmgkBCAAQA0AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXAKALQAOAQAVAAQAPAAAMgHQAIgEAJgLIBeAIQgWAlgeARQgfAQg4AAQgxAAgdgOgAgjg3QgJAMgCAWIBdAAQgDgcgLgMQgNgLgTgBQgWABgOARg");
	this.shape_66.setTransform(553.9,641.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAkCsIAAiJQAAgYgJgJQgIgJgRAAQgPAAgMAMQgLANABAiIAAB4IhgAAIAAlXIBgAAIAAB/QATgUASgJQATgJAbAAQAnAAAWAYQAXAYgBAwIAACeg");
	this.shape_67.setTransform(521.9,636.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgYClQgRgIgIgTQgIgTAAgqIAAhWIgjAAIAAhGIAjAAIAAgtIBegyIAABfIA1AAIAABGIg1AAIAABXQAAAQAEAFQAEAIAMAAQAKAAAUgGIAHBCQgkAHgfAAQgiABgRgKg");
	this.shape_68.setTransform(495.2,636.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAmCsIgyhkIgjAjIAABBIhiAAIAAlXIBiAAIAACxIBGhSIB2AAIhaBWIBfCig");
	this.shape_69.setTransform(454,636.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_70.setTransform(421.4,641.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AguCsIAAj4IBdAAIAAD4gAguhqIAAhBIBdAAIAABBg");
	this.shape_71.setTransform(397.3,636.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgvCsIAAlXIBfAAIAAFXg");
	this.shape_72.setTransform(381.3,636.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AhPChQgjgQgagpQgagpAAg/QAAhVAtguQAuguBSAAQBBAAAlAbQAlAaASA2IheAVQgFgQgFgHQgJgMgNgHQgNgGgQAAQgjAAgTAdQgPAVAAAvQAAA4ASAVQARAVAeAAQAfAAAQgRQAPgRAHghIBdAcQgJAngUAbQgUAageANQgeAOguAAQg3AAgkgRg");
	this.shape_73.setTransform(354.9,636.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_74.setTransform(609.1,641);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhNB1QgdgPgSgeQgTgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQACAXALAMQANAQAWAAQANAAANgHQAIgFAJgKIBeAIQgWAmgfAQQgdAQg5AAQgxAAgcgNgAgjg2QgJALgCAWIBdAAQgCgbgNgNQgMgLgTAAQgWgBgOATg");
	this.shape_75.setTransform(561.6,646.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_76.setTransform(529.6,645.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AhNB1QgdgPgTgeQgSgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQADAXAKAMQANAQAWAAQAOAAAMgHQAIgFAJgKIBeAIQgWAmgfAQQgdAQg5AAQgxAAgcgNgAgjg2QgJALgCAWIBdAAQgCgbgMgNQgNgLgUAAQgVgBgOATg");
	this.shape_77.setTransform(497.6,646.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgPQARgPASgGQAcgMAqAAQA9AAAgAWQAgAWANAqIhaALQgEgQgLgHQgLgIgTAAQgXAAgOAQQgPASAAAgQAAAgAPAPQAOAQAWAAQASAAANgKQANgJAGgUIBbAKQgIAdgRAUQgRAVgaALQgbAMgpAAQgnAAgagHg");
	this.shape_78.setTransform(465.6,646.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_79.setTransform(432.1,641.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_80.setTransform(609.4,641.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},10).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_80}]},10).wait(10));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.parent = this;
	this.next_btn.setTransform(890.2,684.7);
	this.next_btn._off = true;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(10).to({_off:false},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(835.1,403.6,422.5,650.8);
// library properties:
lib.properties = {
	id: '92C3C2294F673349ABBBF700C496C661',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#00FFFF",
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
an.compositions['92C3C2294F673349ABBBF700C496C661'] = {
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