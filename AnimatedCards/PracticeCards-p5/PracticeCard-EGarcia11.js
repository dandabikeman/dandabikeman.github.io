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


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(3,1,1).p("AgDihQAWiRAig1QAhg0AMgMQALgMA7gdQA6gdBDAfQBCAfAhA9QAgA9AKBhQALBhg4CHQg5CJhDBbQhDBag7A+Qg8A+gXAQQgYAPiJiEQiKiEhThoIAAgBQgRAFgyhyQg4iAAShlQAThlBChKQBDhKBjAdQBiAcA/C+QAKAeAGAZQAFAcgLAWQABgOACgQQABgKACgKgAlGB8QASgagOAXQgCADgCAAg");
	this.shape.setTransform(43.6,47.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AhpFpQiKiEhThoIAAgBQACAAACgDQAOgXgSAaQgRAFgyhyQg4iAAShlQAThlBChKQBDhKBjAdQBiAcA/C+QAKAeAGAZIgDAUQgCAQgBAOQALgWgFgcQAWiRAig1QAhg0AMgMQALgMA7gdQA6gdBDAfQBCAfAhA9QAgA9AKBhQALBhg4CHQg5CJhDBbQhDBag7A+Qg8A+gXAQQgDABgDAAQggAAh7h2g");
	this.shape_1.setTransform(43.6,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.heart, new cjs.Rectangle(-1.5,-1.5,90.2,98.9), null);


(lib.flap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhBYga3MCCxAAAMhAsA1vg");
	this.shape.setTransform(418.5,172);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("EhBYga3MCCxAAAMhAsA1vg");
	this.shape_1.setTransform(418.5,172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flap, new cjs.Rectangle(-1,-1,839,346), null);


(lib.BasicButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiA8QgEgEAAgIQAAgKAGgOIgBAAIgMAKIgCgJQAZgUALgSIgXABIADgEQAKgRAFgEQAHgEARgBIALgOQAHgHAJAAQAIAAAAAEQAAADgKANIAPABQgKAVgEADQgHAHgTgBQgUAbAAARQAAAIAHAAQAFAAAIgGIAbgTIABALQgUASgIAGQgSAOgNAAQgHAAgEgEg");
	this.shape.setTransform(67.6,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAmIgBgSIgOAOQgLAKgFAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBQAAgDAIgKQAFgGAIgDIAMgLIAAgcIgXAMQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDASgRQATgPAEAAQAFAAAAANIgBAVIAVgTQAJgJAFAAQACAAABAFQABAEgHAJQgIAKgHgBIgRAQIAAAJQgBAMAJgBQAGAAALgHIAOgMIABAJIgXAXQgRAPgJAAQgJAAgBgLg");
	this.shape_1.setTransform(59.7,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglAmQgHgJAAgNQgBgWAVgVQAVgTAXgBQARAAAAAMQAAAag5ARIAAAGQgBAMAQAAQAKABAPgLIAYgRIACAJQgOAPgPALQgTAOgQAAQgMgBgHgJgAANggQgJACgIAIQgKAJgEALQAOgFAKgKQAKgJAAgEQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgBABg");
	this.shape_2.setTransform(51.5,24.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGBGQAAgQANgYIAphKIAAAAQgmAjgUAWIgsA7QgEAHgDAAQgFAAgHgGQgHgFAAgEIACgGQALgRAVgmQAYgsAAgIQAAgFgEAAQgPAAg8AnQgEADgDAAQgEAAAAgKQAAgTAVgWQAIgIAJgGQAIgFACAAQABAAABAAQAAABABAAQAAAAAAAAQAAABAAAAQgBAEgMALIABABQAvgaASAAQAHAAAEADQAFAEAAAGQgBAOgJASQgGAMgZAtIAAAAQA5hEAPgKIAQgLQALgIAEAAQAEAAAHAHQAIAIAAAIQAAAIgSAaQgZAjgKAWQgIAPAAAEQAAAKAGAAQAHAAASgRQAPgOAIgKIABALQAAACgCADQgYAfgUAPQgRAMgJAAQgRAAAAgVg");
	this.shape_3.setTransform(38.4,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Rounded
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape_4.setTransform(50,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_5.setTransform(50,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF99CC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
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
(lib.PracticeCardEGarcia11 = function(mode,startPosition,loop) {
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

	// Button
	this.btn_Next = new lib.BasicButton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.parent = this;
	this.btn_Next.setTransform(888.2,684.7);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Next).wait(30));

	// scene 2
	this.instance = new lib.heart();
	this.instance.parent = this;
	this.instance.setTransform(544.7,54.1,0.374,0.374,0,0,0,43.6,48);
	this.instance.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance.cache(-3,-3,94,103);

	this.instance_1 = new lib.heart();
	this.instance_1.parent = this;
	this.instance_1.setTransform(443.6,54.1,0.374,0.374,0,0,0,43.6,48);
	this.instance_1.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_1.cache(-3,-3,94,103);

	this.instance_2 = new lib.heart();
	this.instance_2.parent = this;
	this.instance_2.setTransform(661,57.3,0.374,0.374,-15,0,0,43.6,48.2);
	this.instance_2.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_2.cache(-3,-3,94,103);

	this.instance_3 = new lib.heart();
	this.instance_3.parent = this;
	this.instance_3.setTransform(318.9,50.6,0.374,0.374,15,0,0,43.7,48.1);
	this.instance_3.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_3.cache(-3,-3,94,103);

	this.instance_4 = new lib.heart();
	this.instance_4.parent = this;
	this.instance_4.setTransform(598.6,51.8,0.562,0.562,0,0,0,43.6,47.9);

	this.instance_5 = new lib.heart();
	this.instance_5.parent = this;
	this.instance_5.setTransform(494.5,51.8,0.562,0.562,0,0,0,43.6,47.9);

	this.instance_6 = new lib.heart();
	this.instance_6.parent = this;
	this.instance_6.setTransform(384.3,51.8,0.562,0.562,0,0,0,43.6,47.9);

	this.instance_7 = new lib.heart();
	this.instance_7.parent = this;
	this.instance_7.setTransform(543.5,105.6,0.562,0.562,0,0,0,43.6,47.9);

	this.instance_8 = new lib.heart();
	this.instance_8.parent = this;
	this.instance_8.setTransform(537.4,655.5,0.374,0.374,0,0,0,43.6,48);
	this.instance_8.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_8.cache(-3,-3,94,103);

	this.instance_9 = new lib.heart();
	this.instance_9.parent = this;
	this.instance_9.setTransform(453.7,655.5,0.374,0.374,0,0,0,43.6,48);
	this.instance_9.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_9.cache(-3,-3,94,103);

	this.instance_10 = new lib.heart();
	this.instance_10.parent = this;
	this.instance_10.setTransform(490.2,572.4,0.374,0.374,0,0,0,43.6,48);
	this.instance_10.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_10.cache(-3,-3,94,103);

	this.instance_11 = new lib.heart();
	this.instance_11.parent = this;
	this.instance_11.setTransform(595.8,562.5,0.374,0.374,0,0,0,43.6,48);
	this.instance_11.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_11.cache(-3,-3,94,103);

	this.instance_12 = new lib.heart();
	this.instance_12.parent = this;
	this.instance_12.setTransform(388.9,562.5,0.374,0.374,0,0,0,43.6,48);
	this.instance_12.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_12.cache(-3,-3,94,103);

	this.instance_13 = new lib.heart();
	this.instance_13.parent = this;
	this.instance_13.setTransform(537.4,369.9,0.374,0.374,0,0,0,43.6,48);
	this.instance_13.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_13.cache(-3,-3,94,103);

	this.instance_14 = new lib.heart();
	this.instance_14.parent = this;
	this.instance_14.setTransform(437.4,369.9,0.374,0.374,0,0,0,43.6,48);
	this.instance_14.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_14.cache(-3,-3,94,103);

	this.instance_15 = new lib.heart();
	this.instance_15.parent = this;
	this.instance_15.setTransform(544.7,499.3,0.374,0.374,0,0,0,43.6,48);
	this.instance_15.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_15.cache(-3,-3,94,103);

	this.instance_16 = new lib.heart();
	this.instance_16.parent = this;
	this.instance_16.setTransform(446.8,499.3,0.374,0.374,0,0,0,43.6,48);
	this.instance_16.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_16.cache(-3,-3,94,103);

	this.instance_17 = new lib.heart();
	this.instance_17.parent = this;
	this.instance_17.setTransform(595.8,422.8,0.374,0.374,0,0,0,43.6,48);
	this.instance_17.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_17.cache(-3,-3,94,103);

	this.instance_18 = new lib.heart();
	this.instance_18.parent = this;
	this.instance_18.setTransform(490.2,422.8,0.374,0.374,0,0,0,43.6,48);
	this.instance_18.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_18.cache(-3,-3,94,103);

	this.instance_19 = new lib.heart();
	this.instance_19.parent = this;
	this.instance_19.setTransform(382.3,422.8,0.374,0.374,0,0,0,43.6,48);
	this.instance_19.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_19.cache(-3,-3,94,103);

	this.instance_20 = new lib.heart();
	this.instance_20.parent = this;
	this.instance_20.setTransform(537.4,231.3,0.374,0.374,0,0,0,43.6,48);
	this.instance_20.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_20.cache(-3,-3,94,103);

	this.instance_21 = new lib.heart();
	this.instance_21.parent = this;
	this.instance_21.setTransform(454.5,231.3,0.374,0.374,0,0,0,43.6,48);
	this.instance_21.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_21.cache(-3,-3,94,103);

	this.instance_22 = new lib.heart();
	this.instance_22.parent = this;
	this.instance_22.setTransform(595.8,114.5,0.374,0.374,0,0,0,43.6,48);
	this.instance_22.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_22.cache(-3,-3,94,103);

	this.instance_23 = new lib.heart();
	this.instance_23.parent = this;
	this.instance_23.setTransform(497.6,114.5,0.374,0.374,0,0,0,43.6,48);
	this.instance_23.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_23.cache(-3,-3,94,103);

	this.instance_24 = new lib.heart();
	this.instance_24.parent = this;
	this.instance_24.setTransform(490.2,184.5,0.374,0.374,0,0,0,43.6,48);
	this.instance_24.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_24.cache(-3,-3,94,103);

	this.instance_25 = new lib.heart();
	this.instance_25.parent = this;
	this.instance_25.setTransform(388.9,114.5,0.374,0.374,0,0,0,43.6,48);
	this.instance_25.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_25.cache(-3,-3,94,103);

	this.instance_26 = new lib.heart();
	this.instance_26.parent = this;
	this.instance_26.setTransform(614.6,189.5,0.374,0.374,-15,0,0,43.6,48.1);
	this.instance_26.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_26.cache(-3,-3,94,103);

	this.instance_27 = new lib.heart();
	this.instance_27.parent = this;
	this.instance_27.setTransform(360.8,184.6,0.374,0.374,15,0,0,43.8,48.1);
	this.instance_27.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 98.58, 135.15, 0)];
	this.instance_27.cache(-3,-3,94,103);

	this.instance_28 = new lib.heart();
	this.instance_28.parent = this;
	this.instance_28.setTransform(446.4,105.6,0.562,0.562,0,0,0,43.6,47.9);

	this.instance_29 = new lib.heart();
	this.instance_29.parent = this;
	this.instance_29.setTransform(646.9,118.3,0.562,0.562,30,0,0,43.8,48);

	this.instance_30 = new lib.heart();
	this.instance_30.parent = this;
	this.instance_30.setTransform(327.1,111,0.562,0.562,-15,0,0,43.6,47.9);

	this.instance_31 = new lib.heart();
	this.instance_31.parent = this;
	this.instance_31.setTransform(545.7,175.6,0.562,0.562,0,0,0,43.8,48);

	this.instance_32 = new lib.heart();
	this.instance_32.parent = this;
	this.instance_32.setTransform(423.2,175.6,0.562,0.562,0,0,0,43.6,47.9);

	this.instance_33 = new lib.heart();
	this.instance_33.parent = this;
	this.instance_33.setTransform(494.5,260.5,0.562,0.562,0,0,0,43.6,47.9);

	this.instance_34 = new lib.heart();
	this.instance_34.parent = this;
	this.instance_34.setTransform(585.6,249,0.562,0.562,30,0,0,43.8,48);

	this.instance_35 = new lib.heart();
	this.instance_35.parent = this;
	this.instance_35.setTransform(412.6,245.6,0.562,0.562,-15,0,0,43.6,47.9);

	this.instance_36 = new lib.heart();
	this.instance_36.parent = this;
	this.instance_36.setTransform(585.6,369.4,0.562,0.562,30,0,0,43.8,48);

	this.instance_37 = new lib.heart();
	this.instance_37.parent = this;
	this.instance_37.setTransform(390.5,366.1,0.562,0.562,-15,0,0,43.6,48);

	this.instance_38 = new lib.heart();
	this.instance_38.parent = this;
	this.instance_38.setTransform(489.5,371.5,0.562,0.562,0,0,0,43.6,47.9);

	this.instance_39 = new lib.heart();
	this.instance_39.parent = this;
	this.instance_39.setTransform(543.5,425.4,0.562,0.562,0,0,0,43.6,48);

	this.instance_40 = new lib.heart();
	this.instance_40.parent = this;
	this.instance_40.setTransform(440.6,425.4,0.562,0.562,0,0,0,43.7,48.1);

	this.instance_41 = new lib.heart();
	this.instance_41.parent = this;
	this.instance_41.setTransform(494.5,490.6,0.562,0.562,0,0,0,43.6,47.9);

	this.instance_42 = new lib.heart();
	this.instance_42.parent = this;
	this.instance_42.setTransform(588.4,492.3,0.562,0.562,30,0,0,43.8,48);

	this.instance_43 = new lib.heart();
	this.instance_43.parent = this;
	this.instance_43.setTransform(396.7,495.4,0.562,0.562,-15,0,0,43.6,48);

	this.instance_44 = new lib.heart();
	this.instance_44.parent = this;
	this.instance_44.setTransform(543.5,571.5,0.562,0.562,0,0,0,43.6,48);

	this.instance_45 = new lib.heart();
	this.instance_45.parent = this;
	this.instance_45.setTransform(440.6,571.5,0.562,0.562,0,0,0,43.6,48);

	this.instance_46 = new lib.heart();
	this.instance_46.parent = this;
	this.instance_46.setTransform(494.5,629.4,0.562,0.562,0,0,0,43.6,47.9);

	this.instance_47 = new lib.heart();
	this.instance_47.parent = this;
	this.instance_47.setTransform(581.6,630.7,0.562,0.562,15,0,0,43.7,48);

	this.instance_48 = new lib.heart();
	this.instance_48.parent = this;
	this.instance_48.setTransform(407.6,634.8,0.562,0.562,-15,0,0,43.6,47.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("EhQlAAAMA39AAAAQuAAMA/4AAA");
	this.shape.setTransform(515.8,663);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("Av5+xQEhhYC6AJQAzACA6gPQBqgEB/gOQB/gNAlAHQAkAICYAAQAEAAAFAAQgHAAgCAEQAAgCAAgCQAAgKFXApQGHAuB3AgQADAAACAAQCSAaAACaQAAAjhNCLQgCgIgBgFQgDgVAFAXQABAFAAAGAv5+xQAIgCgRAJQgXANDkgEQEwAZGFAfQGFAeELgIQELgIB1gOQB2gOgZg5Awl6bQgCgfgJhTQgLhxAAgNQAAgVA5gPQABgBACAAIACAAIADgBQAAAAABAAAv26MQgLgGgPAAQgOAAgGAGQAAgEgBgLQBhAVCcANQCUAMCNAAQCbAABJgGQAkgDDcAHQDbAGEdAJQEeAHBIgBQBJAACzAMAv26EQgDAcACAZQgFAUgwA7QiMBNg5AxQg6AxAAAlQAAAIgCCmMAACAtnQABBBABAuQABA2AAAbQAAAzA7AvUAA7AAwAk+gAeQA0ALAwg1QAyg2AKhlQABgJABgKMAAAgu/QAAgSAAgRQABiGgMhCQgOhKgggSQgHgEh7hJASM4IQgOgCgLgEQgLgEgJgGQgZgQgNgfQgBgDgBgE");
	this.shape_1.setTransform(490.4,474.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AAAAEQgCACgCABQARgZgNAWg");
	this.shape_2.setTransform(192.4,516.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},10).to({state:[]},10).to({state:[]},8).wait(2));

	// envelope flap
	this.instance_49 = new lib.flap();
	this.instance_49.parent = this;
	this.instance_49.setTransform(531.4,284,1,1,0,0,0,418.4,172);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(1).to({regX:418.5,scaleY:0.78,x:531.5,y:245.8},0).wait(1).to({scaleY:0.56,y:207.5},0).wait(1).to({scaleY:0.33,y:169.3},0).wait(1).to({scaleY:0.11,y:131.1},0).wait(1).to({skewX:180,y:92.9},0).wait(1).to({scaleY:0.33,y:54.6},0).wait(1).to({scaleY:0.56,y:16.4},0).wait(1).to({scaleY:0.78,y:-21.8},0).wait(1).to({scaleY:1,y:-60},0).to({_off:true},1).wait(20));

	// envelope
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("EBBZgquMguoAm1IyDPBIxXuJMgwvAtwMCCxAAAMguoguoEBBZgquMAAABVdEhBYgquMAAABVdAwpjBMgwvgntMCCxAAA");
	this.shape_3.setTransform(531.5,385.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("EBBZgquMguoAm1IyDPBIxXuJMgwvAtwMCCxAAAMguoguoEBBZgquMAAABVdAwpjBMgwvgntMAAABVdEhBYgquMCCxAAA");
	this.shape_4.setTransform(531.5,385.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9CF3").s().p("AwpMxMgwvgnrMCCxAAAMgunAmzIyEPDg");
	this.shape_5.setTransform(531.5,284.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},8).to({state:[]},1).to({state:[]},15).wait(5));

	// Label
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AACCvIAAjkQgWASgXALQgWALghAKIAAhPQAygPAagWQAagWAPghIBQAAIAAFdg");
	this.shape_6.setTransform(199.3,722);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhNB1QgdgPgSgeQgTgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQACAXALAMQANAQAWAAQANAAANgHQAIgFAJgKIBeAIQgWAmgfAQQgeAQg4AAQgxAAgcgNgAAvgVQgDgbgMgNQgMgLgTAAQgWgBgOATQgIALgDAWIBdAAIAAAAg");
	this.shape_7.setTransform(153.7,727.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkB/IAAiIQAAgXgJgKQgJgKgPAAQgQAAgLAOQgLANAAAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYAAAxIAACdg");
	this.shape_8.setTransform(121.6,726.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhNB1QgdgPgSgeQgTgeAAgpQAAg6AmgkQAlgkBBAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQACAXALAMQANAQAWAAQANAAANgHQAIgFAJgKIBeAIQgWAmgfAQQgdAQg5AAQgxAAgcgNgAAvgVQgDgbgMgNQgMgLgTAAQgWgBgOATQgJALgCAWIBdAAIAAAAg");
	this.shape_9.setTransform(89.7,727.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgPQARgPASgGQAcgMAqAAQA9AAAgAWQAgAWANAqIhaALQgEgQgLgHQgLgIgTAAQgXAAgOAQQgPASAAAgQAAAgAPAPQAOAQAWAAQASAAANgKQANgJAGgUIBbAKQgIAdgRAUQgRAVgaALQgbAMgpAAQgnAAgagHg");
	this.shape_10.setTransform(57.7,727.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQANgLAAgOQAAgOgMgKQgLgLgrgJQhFgQgegZQgegaAAgoQAAgbAQgXQAOgYAggNQAfgOA0AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgWAAQgSAAgJAIQgKAIAAALQAAAIAIAHQAIAHAcAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgTAcQgRAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_11.setTransform(24.2,722.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiIgnAcIgWAVICUAAIAABOg");
	this.shape_12.setTransform(196.3,700.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhOB1QgcgPgSgeQgTgeAAgpQAAg6AlgkQAmgkBBAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQACAYAKALQAOAQAVAAQAPAAAMgHQAIgFAJgLIBeAJQgWAmgfAQQgeAQg4AAQgxAAgdgNgAAvgVQgDgbgMgMQgMgMgTAAQgWgBgOATQgIALgDAWIBdAAIAAAAg");
	this.shape_13.setTransform(148.8,705.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkB/IAAiIQAAgXgJgKQgIgKgQAAQgQAAgLAOQgLANAAAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAWAYgBAxIAACdg");
	this.shape_14.setTransform(116.8,705.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhOB1QgcgPgSgeQgTgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQACAYALALQANAQAWAAQANAAANgHQAIgFAJgLIBeAJQgWAmgfAQQgeAQg4AAQgxAAgdgNgAAvgVQgDgbgMgMQgMgMgTAAQgWgBgOATQgIALgDAWIBdAAIAAAAg");
	this.shape_15.setTransform(84.8,705.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgQgLgXQgLgWAAglQAAglANgaQAKgSAQgPQARgQASgGQAcgMAqAAQA9AAAgAWQAgAWANAqIhaALQgEgPgLgJQgLgHgTAAQgXAAgOAQQgPASAAAgQAAAfAPAQQAOAQAWAAQASAAANgKQANgJAGgUIBbALQgIAcgRAUQgRAVgaAMQgbALgpAAQgnAAgagHg");
	this.shape_16.setTransform(52.8,705.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQAEAYAJANQARAVAeAAQAWAAAMgKQAMgLABgOQAAgOgMgKQgLgLgrgJQhFgQgegZQgegaAAgoQAAgbAQgXQAPgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgWAAQgSAAgKAIQgJAIAAALQAAAIAIAHQAIAHAcAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgTAcQgRAcghAOQghAPgyAAQhXAAghgig");
	this.shape_17.setTransform(19.3,700.6);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},10).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(516.9,495,984.3,645.4);
// library properties:
lib.properties = {
	id: '74FEC9DF27358B459FAC6A1AA9ED99D9',
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
an.compositions['74FEC9DF27358B459FAC6A1AA9ED99D9'] = {
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