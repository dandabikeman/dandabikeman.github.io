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
	this.shape.graphics.f().s("#FF9999").ss(2,1,1).p("EA9CAQZMgwYgaGIs7m+IsvG/MgwBAaY");
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
(lib.AnimatedCardGEsquivel = function(mode,startPosition,loop) {
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
	this.frame_3 = function() {
		playSound("applausewav");
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(7).call(this.frame_10).wait(10).call(this.frame_20).wait(9).call(this.frame_29).wait(5).call(this.frame_34).wait(2));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(512,384);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({_off:true},30).wait(6));

	// Button
	this.btn_Next = new lib.BasicButton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.parent = this;
	this.btn_Next.setTransform(890.2,684.7);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Next).wait(3).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).wait(1).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(6));

	// Scene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9999").ss(2,1,1).p("EBBJgkfMAAABInMgzVgslgAtlohINyHfINnnbEhBIgkfMAzjAb+MgzjAtBEhBIgkfMAAABI/EhBIgkfMCCRAAAEBBJAkgMiCRAAA");
	this.shape.setTransform(503.5,414.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhBIAkgMAzjgtAMgzjgb/MCCRAAAMgzVAcCItnHcItynfINyHfINnncMAzVAslIAAAYgEhBIgkfMAzjAb/MgzjAtAgEBBJAkIgAN0odMAzVgcCMAAABIngEhBIgkfg");
	this.shape_1.setTransform(503.5,414.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9999").ss(2,1,1).p("AM8n7MAwGgaRMAAABEDgAsun+IM6HAIMwm9Asun+MgwTAqLAsun+MgwTgaOMAAABEZEA9CAiNMh6DAAA");
	this.shape_2.setTransform(499.5,459.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9999").s().p("AsuJnMgwTgaNMB6DAAAMgwGAaQIswG9g");
	this.shape_3.setTransform(499.5,346.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Eg9BAiNMAwTgqLIM6HAIMwm9MAwGApyMgwGgpyMAwGgaRMAAABEDIAAAWgEg9BAiNMAAAhEZMAwTAaOMgwTAqLg");
	this.shape_4.setTransform(499.5,459.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},3).to({state:[]},7).to({state:[]},20).wait(6));

	// Envelope flap
	this.instance = new lib.Flap();
	this.instance.parent = this;
	this.instance.setTransform(499.5,133.7,1,1,0,0,0,390.6,106.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF9999").ss(3,1,1).p("Eg8xAAKMB5jgAT");
	this.shape_5.setTransform(498,241);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.instance}]},3).to({state:[]},7).to({state:[]},20).wait(6));

	// Presents
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(10,1,1).p("EA9ogQ/QgeAMghAGQgzAKiEBRQiFBRhSiGQhTiHABg+QABg+AygJQABAABtAAQBjAABgA6QA+AlBgBaQAPAOAOANQBQBKAmAaQBSA4BOACIAFAAQAVgBAsiPQAoiCAAgQQAAg0gLgVEBDigUTQjOBvhyBIQgcARgeAMEAkQAR3QgeALghAGQgzAKiEBRQiFBRhSiGQhTiGABg/QABg+AygJQABAABtAAQBjAABgA6QA+AlBgBaQAPAOAOAOQBQBJAmAaQBSA4BOACEAorAUUQAVgBAsiPQAoiCAAgQQAAgzgLgWEAqKAOiQjOBvhyBJQgcAQgeANEg7LAKSQBQBKAlAaQBVA5BQAAQAWAAAsiPQAniCAAgRQAAgzgLgVEg1SAG9QjOBwhyBIQgbARgeAMQgeALghAHQg0AJiEBRQiEBShTiHQhTiGABg+QABg+AygJQACgBBsAAQBkAABfA7QA+AlBgBZQAQAPAOAN");
	this.shape_6.setTransform(538.1,489.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663399").s().p("AAnKFIgEpEIJiAAIAAJEgAqEKFIAAo/IJYgFIABJEgAqEqEIJaAAIgCJYIpYAFgAAjgsIAApYIE3AAIAFAAIEmAAIAAJYg");
	this.shape_7.setTransform(763.3,683.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AAnKFIgEpEIJiAAIAAJEgAqEKFIAAo/IJYgFIACJEgAqEqEIJbAAIgDJYIpYAFgAAjgsIAApYIE3AAIAFAAIEmAAIAAJYg");
	this.shape_8.setTransform(925.7,460.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("EAiSAbhIgBpEIpYAFIgDAAIADhuIJYgFIACpYIAAgDIAQADIA+gDIAAADIAAJYIJiAAIAABuIpiAAIAEJEIhPAAIgEABgEg8+AT/IgBpEIpYAFIgDAAIADhuIJYgFIACpXIAAgDIAQADIA+gDIAAADIAAJXIJiAAIAABuIpiAAIAEJEIhPAAIgEABgEA7qgHUIgBpEIpYAFIgDAAIADhuIJYgFIACpYIAAgDIAQADIA+gDIAAADIAAJYIJiAAIAABuIpiAAIAEJEIhPAAIgEABg");
	this.shape_9.setTransform(539.5,572);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC00").s().p("AAnKFIgEpEIJiAAIAAJEgAqEKFIAAo/IJYgFIACJEgAqEqEIJbAAIgDJYIpYAFgAAjgsIAApYIJiAAIAAJYg");
	this.shape_10.setTransform(153.6,635.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(10,1,1).p("EA9ogQ/QgeAMghAGQgzAKiEBRQiFBRhSiGQhTiHABg+QABg+AygJQABAABtAAQBjAABgA6QA+AlBgBaQAPAOAOANgEBDigUTQjOBvhyBIQgcARgeAMQBQBKAmAaQBSA4BOACIAFAAQAVgBAsiPQAoiCAAgQQAAg0gLgVEAkQAR3QgeALghAGQgzAKiEBRQiFBRhSiGQhTiGABg/QABg+AygJQABAABtAAQBjAABgA6QA+AlBgBaQAPAOAOAOgEAorAUUQAVgBAsiPQAoiCAAgQQAAgzgLgWEAqKAOiQjOBvhyBJQgcAQgeANQBQBJAmAaQBSA4BOACEg7LAKSQBQBKAlAaQBVA5BQAAQAWAAAsiPQAniCAAgRQAAgzgLgVEg1SAG9QjOBwhyBIQgbARgeAMQgeALghAHQg0AJiEBRQiEBShTiHQhTiGABg+QABg+AygJQACgBBsAAQBkAABfA7QA+AlBgBZQAQAPAOAN");
	this.shape_11.setTransform(538.1,489.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},10).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_11}]},8).to({state:[]},1).to({state:[]},16).wait(1));

	// Candles
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9999").s().p("AY2LlIAA1PQB4jIBQDIIAAVPgAQ9LlIAA1PQB4jIBQDIIAAVPgAHRLlIAA1PQB4jIBQDIIAAVPgAiQLlIAA1PQB4jIBPDIIAAVPgA0nLlIAA1PQB4jIBQDIIAAVPgA79LlIAA1PQB4jIBQDIIAAVPgAreLPIAA1PQB4jIBQDIIAAVPg");
	this.shape_12.setTransform(524.5,212.9);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(10).to({_off:false},0).to({_off:true},9).wait(17));

	// Fire
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AaGA6QgIgPABgUQgBgVAIgOQAIgOAJAAQALAAAHAOQAIAOgBAVQABAUgIAPQgHAPgLAAQgJAAgIgPgAR+ANQgHgOAAgVQAAgUAHgPQAIgPAKAAQAKAAAIAPQAGAPAAAUQAAAVgGAOQgIAOgKAAQgKAAgIgOgAImANQgHgOgBgVQABgUAHgPQAHgPALAAQAKAAAIAPQAGAPABAUQgBAVgGAOQgIAOgKAAQgLAAgHgOgAg7ANQgIgOAAgVQAAgUAIgPQAHgPAKAAQALAAAHAPQAIAPAAAUQAAAVgIAOQgHAOgLAAQgKAAgHgOgAqJANQgHgOAAgVQAAgUAHgPQAIgPAKAAQAKAAAIAPQAGAPAAAUQAAAVgGAOQgIAOgKAAQgKAAgIgOgAzSANQgHgOAAgVQAAgUAHgPQAIgPAKAAQAKAAAIAPQAGAPAAAUQAAAVgGAOQgIAOgKAAQgKAAgIgOgA6oANQgIgOABgVQgBgUAIgPQAIgPAJAAQALAAAHAPQAIAPgBAUQABAVgIAOQgHAOgLAAQgJAAgIgOg");
	this.shape_13.setTransform(527.3,131.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AZxBdQgQgdgBgpQABgpAQgdQAQgdAWAAQAXAAARAdQAPAdAAApQAAApgPAdQgRAegXAAQgWAAgQgegAaQgWQgIAPABAUQgBAUAIAPQAIAPAJAAQALAAAHgPQAIgPgBgUQABgUgIgPQgHgOgLAAQgJAAgIAOgARoAwQgQgeAAgoQAAgpAQgeQARgdAWAAQAYAAAQAdQAQAeAAApQAAAogQAeQgQAdgYAAQgWAAgRgdgASIhDQgHAPAAAUQAAAVAHAOQAIAOAKAAQAKAAAIgOQAGgOAAgVQAAgUgGgPQgIgPgKAAQgKAAgIAPgAIQAwQgPgeAAgoQAAgpAPgeQARgdAXAAQAWAAAQAdQAQAeABApQgBAogQAeQgQAdgWAAQgXAAgRgdgAIwhDQgHAPgBAUQABAVAHAOQAHAOALAAQAKAAAIgOQAGgOABgVQgBgUgGgPQgIgPgKAAQgLAAgHAPgAhQAwQgRgeABgoQgBgpARgeQAQgdAWAAQAYAAAPAdQAQAegBApQABAogQAeQgPAdgYAAQgWAAgQgdgAgxhDQgIAPAAAUQAAAVAIAOQAHAOAKAAQALAAAHgOQAIgOAAgVQAAgUgIgPQgHgPgLAAQgKAAgHAPgAqfAwQgQgeAAgoQAAgpAQgeQARgdAWAAQAYAAAQAdQAQAeAAApQAAAogQAeQgQAdgYAAQgWAAgRgdgAp/hDQgHAPAAAUQAAAVAHAOQAIAOAKAAQAKAAAIgOQAGgOAAgVQAAgUgGgPQgIgPgKAAQgKAAgIAPgAzoAwQgQgeAAgoQAAgpAQgeQARgdAWAAQAYAAAQAdQAQAeAAApQAAAogQAeQgQAdgYAAQgWAAgRgdgAzIhDQgHAPAAAUQAAAVAHAOQAIAOAKAAQAKAAAIgOQAGgOAAgVQAAgUgGgPQgIgPgKAAQgKAAgIAPgA69AwQgQgegBgoQABgpAQgeQAQgdAWAAQAXAAARAdQAPAeAAApQAAAogPAeQgRAdgXAAQgWAAgQgdgA6ehDQgIAPABAUQgBAVAIAOQAIAOAJAAQALAAAHgOQAIgOgBgVQABgUgIgPQgHgPgLAAQgJAAgIAPg");
	this.shape_14.setTransform(526.3,132.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AZJCBQgfgsAAg+QAAg9AfgsQAhgsAtAAQAuAAAgAsQAhAsgBA9QABA+ghAsQggAsguAAQgtAAghgsgAZ7grQgQAegBAoQABApAQAeQAQAdAWAAQAXAAARgdQAPgeAAgpQAAgogPgeQgRgdgXAAQgWAAgQAdgARCBTQghgsAAg9QAAg+AhgsQAggsAtAAQAuAAAgAsQAhAsAAA+QAAA9ghAsQggAsguAAQgtAAgggsgARyhYQgQAdAAAqQAAAoAQAdQARAeAWAAQAYAAAQgeQAQgdAAgoQAAgqgQgdQgQgdgYAAQgWAAgRAdgAHqBTQgggsgBg9QABg+AggsQAggsAuAAQAtAAAgAsQAgAsABA+QgBA9ggAsQggAsgtAAQguAAgggsgAIahYQgPAdAAAqQAAAoAPAdQARAeAXAAQAWAAAQgeQAQgdABgoQgBgqgQgdQgQgdgWAAQgXAAgRAdgAh4BTQgfgsAAg9QAAg+AfgsQAhgsAuAAQAsAAAgAsQAgAsAAA+QAAA9ggAsQggAsgsAAQguAAghgsgAhGhYQgRAdABAqQgBAoARAdQAQAeAWAAQAYAAAOgeQARgdgBgoQABgqgRgdQgOgdgYAAQgWAAgQAdgArFBTQghgsAAg9QAAg+AhgsQAggsAtAAQAuAAAgAsQAhAsAAA+QAAA9ghAsQggAsguAAQgtAAgggsgAqVhYQgQAdAAAqQAAAoAQAdQARAeAWAAQAYAAAQgeQAQgdAAgoQAAgqgQgdQgQgdgYAAQgWAAgRAdgA0OBTQghgsAAg9QAAg+AhgsQAggsAtAAQAuAAAgAsQAhAsAAA+QAAA9ghAsQggAsguAAQgtAAgggsgAzehYQgQAdAAAqQAAAoAQAdQARAeAWAAQAYAAAQgeQAQgdAAgoQAAgqgQgdQgQgdgYAAQgWAAgRAdgA7lBTQgfgsAAg9QAAg+AfgsQAhgsAtAAQAuAAAgAsQAhAsgBA+QABA9ghAsQggAsguAAQgtAAghgsgA6zhYQgQAdgBAqQABAoAQAdQAQAeAWAAQAXAAARgeQAPgdAAgoQAAgqgPgdQgRgdgXAAQgWAAgQAdg");
	this.shape_15.setTransform(525.3,131.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AZJCrQgfgsAAg+QgBg+A/hDQA/hFAjAJQAiAJANA8QANA6gBA+QABA+ghAsQggAsguAAQgtAAghgsgAZ7AAQgQAcgBAqQABApAQAdQAQAeAWAAQAXAAARgeQAPgdAAgpQAAgqgPgcQgRgdgXAAQgWAAgQAdgARCB+QghgsAAg+QAAg9AQhfQAPhfA7AqQA8ApAjA1QAkA1AAA+QAAA+ghAsQggAsguAAQgtAAgggsgARyguQgQAeAAAoQAAApAQAeQARAdAWAAQAYAAAQgdQAQgeAAgpQAAgogQgeQgQgdgYAAQgWAAgRAdgAHqB+QghgsAAg+QAAg9AhgvQAhguA3gtQA2gtAXBbQAWBcABA9QgBA+ggAsQggAsgtAAQguAAgggsgAIaguQgPAeAAAoQAAApAPAeQARAdAXAAQAWAAAQgdQAQgeABgpQgBgogQgeQgQgdgWAAQgXAAgRAdgAh4B+QgfgsAAg+QAAg9AfgsQAhgtA3gvQA2gwAXBaQAXBZAABAQAABAghAsQggAsgsAAQguAAghgsgAhGguQgRAeABAoQgBApARAeQAQAdAWAAQAYAAAOgdQARgegBgpQABgogRgeQgOgdgYAAQgWAAgQAdgArFB+QghgsAAg+QABg9AHhUQAHhUAuAAQAtAAA5BUQA6BUAAA9QAAA+ghAsQggAsguAAQgtAAgggsgAqVguQgQAeAAAoQAAApAQAeQARAdAWAAQAYAAAQgdQAQgeAAgpQAAgogQgeQgQgdgYAAQgWAAgRAdgA0OB+QghgsAAg+QABg9ALhWQALhXA5AZQA6AYApA+QApA+ABA9QAAA+ghAsQggAsguAAQgtAAgggsgAzeguQgQAeAAAoQAAApAQAeQARAdAWAAQAYAAAQgdQAQgeAAgpQAAgogQgeQgQgdgYAAQgWAAgRAdgA7lB+QgfgsAAg+QAAg9AYg4QAXg4ANguQAMgvBJBmQBKBnAAA9QABA+ghAsQggAsguAAQgtAAghgsgA6zguQgQAegBAoQABApAQAeQAQAdAWAAQAXAAARgdQAPgeAAgpQAAgogPgeQgRgdgXAAQgWAAgQAdg");
	this.shape_16.setTransform(525.3,127.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AZJCzQgfgsAAg+QgBg+AhhGQAYg2AEgKQAFALBIA6QBTBBgBA+QABA+ghAsQggAsguAAQgtAAghgsgAZ7AHQgQAdgBAqQABApAQAdQAQAeAWAAQAXAAARgeQAPgdAAgpQAAgqgPgdQgRgcgXAAQgWAAgQAcgARCCGQghgsABg+QACg9BJhfQBJhfABAqQAAApAjA1QAkA2AAA9QAAA+ghAsQggAsguAAQgtAAgggsgARygmQgQAeAAAoQAAApAQAeQARAdAWAAQAYAAAQgdQAQgeAAgpQAAgogQgeQgQgdgYAAQgWAAgRAdgAHqCGQghgsAAg+QAAg9ALg2QAKg2AKg8QAJg8BaByQBaByABA9QgBA+ggAsQggAsgtAAQguAAgggsgAIagmQgPAeAAAoQAAApAPAeQARAdAXAAQAWAAAQgdQAQgeABgpQgBgogQgeQgQgdgWAAQgXAAgRAdgAh4CGQgfgsAAg+QgBg9AJgsQAJgsAWgwQAWgwBPBaQBPBZAABAQAABAghAsQggAsgsAAQguAAghgsgAhGgmQgRAeABAoQgBApARAeQAQAdAWAAQAYAAAOgdQARgegBgpQABgogRgeQgOgdgYAAQgWAAgQAdgArFCGQghgsAAg+QABg9BVhIQBVhIATgEQAUgEAFBMQAFBMABA9QAAA+ghAsQggAsguAAQgtAAgggsgAqVgmQgQAeAAAoQAAApAQAeQARAdAWAAQAYAAAQgdQAQgeAAgpQAAgogQgeQgQgdgYAAQgWAAgRAdgA0OCGQghgsAAg+QAAg9BQhhQBPhgAzAZQA0AZgUBHQgVBIAAA9QAAA+ghAsQggAsguAAQgtAAgggsgAzegmQgQAeAAAoQAAApAQAeQARAdAWAAQAYAAAQgdQAQgeAAgpQAAgogQgeQgQgdgYAAQgWAAgRAdgA7lCGQgfgsAAg+QAAg9AvgmQAvglA4gNQA3gNAHAyQAHAzAAA9QABA+ghAsQggAsguAAQgtAAghgsgA6zgmQgQAegBAoQABApAQAeQAQAdAWAAQAXAAARgdQAPgeAAgpQAAgogPgeQgRgdgXAAQgWAAgQAdg");
	this.shape_17.setTransform(525.3,126.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AZEC9QgggsAAg+QgBg+AhhHQAYg1gagpQBLAPBEBFQBEBDgLBFQgKBFghAsQggAsgtAAQguAAgggsgAZ1AQQgQAeAAApQAAApAQAeQAQAdAXAAQAXAAAQgdQAQgeAAgpQAAgpgQgeQgQgcgXAAQgXAAgQAcgAQ8CPQgggsgFg5QgFg5AthKQAthJAiAQQAjAQAjA1QAkA1AAA9QAAA+ghAsQggAsgtAAQguAAgggsgARtgcQgQAcAAAqQAAApAQAdQAQAeAXAAQAXAAAQgeQAQgdAAgpQAAgqgQgcQgQgdgXAAQgXAAgQAdgAHkCPQgggsAAg+QAAg9ARgYQASgYAPgoQAOgnBOA/QBOBAAAA9QAAA+ghAsQggAsgtAAQguAAgggsgAIVgcQgQAcAAAqQAAApAQAdQAQAeAXAAQAXAAAQgeQAQgdAAgpQAAgqgQgcQgQgdgXAAQgXAAgQAdgAh9CPQgggsAAg+QAAg9AcgsQAdgsBlgwQBmgwgUBaQgVBaAAA/QAABAghAsQgfAsgtAAQguAAgggsgAhMgcQgQAcAAAqQAAApAQAdQAQAeAXAAQAXAAAPgeQAQgdAAgpQAAgqgQgcQgPgdgXAAQgXAAgQAdgArLCPQgggsAAg+QAAg9AdhwQAdhwA+AaQA+AbATBVQATBWAAA9QAAA+ghAsQggAsgtAAQguAAgggsgAqagcQgQAcAAAqQAAApAQAdQAQAeAXAAQAXAAAQgeQAQgdAAgpQAAgqgQgcQgQgdgXAAQgXAAgQAdgA0UCPQgggsAAg+QAAg9AshFQArhFAhAoQAgAoAiAdQAiAdAAA9QAAA+ghAsQggAsgtAAQguAAgggsgAzjgcQgQAcAAAqQAAApAQAdQAQAeAXAAQAXAAAQgeQAQgdAAgpQAAgqgQgcQgQgdgXAAQgXAAgQAdgA7qCPQgggsAAg+QAAg9AggyQAggxgYhPQgZhOBmCAQBnCAAAA9QAAA+ghAsQggAsgtAAQguAAgggsgA65gcQgQAcAAAqQAAApAQAdQAQAeAXAAQAXAAAQgeQAQgdAAgpQAAgqgQgcQgQgdgXAAQgXAAgQAdg");
	this.shape_18.setTransform(525.8,125.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AaGA6QgHgPAAgUQAAgVAHgOQAIgOAKAAQAKAAAIAOQAGAOAAAVQAAAUgGAPQgIAPgKAAQgKAAgIgPgAR+ANQgHgOgBgVQABgUAHgPQAHgPALAAQAKAAAIAPQAGAPABAUQgBAVgGAOQgIAOgKAAQgLAAgHgOgAImANQgIgOAAgVQAAgUAIgPQAHgPAKAAQALAAAHAPQAIAPAAAUQAAAVgIAOQgHAOgLAAQgKAAgHgOgAg7ANQgIgOABgVQgBgUAIgPQAIgPAJAAQALAAAHAPQAHAPAAAUQAAAVgHAOQgHAOgLAAQgJAAgIgOgAqJANQgHgOgBgVQABgUAHgPQAHgPALAAQAKAAAIAPQAGAPABAUQgBAVgGAOQgIAOgKAAQgLAAgHgOgAzSANQgHgOgBgVQABgUAHgPQAHgPALAAQAKAAAIAPQAGAPABAUQgBAVgGAOQgIAOgKAAQgLAAgHgOgA6oANQgHgOAAgVQAAgUAHgPQAIgPAKAAQAKAAAIAPQAGAPAAAUQAAAVgGAOQgIAOgKAAQgKAAgIgOg");
	this.shape_19.setTransform(525.8,133.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("AZwBdQgQgdAAgpQAAgpAQgdQARgdAXAAQAWAAARAdQAQAdAAApQAAApgQAdQgRAegWAAQgXAAgRgegAaQgWQgHAPAAAUQAAAUAHAPQAIAPAKAAQAKAAAIgPQAGgPAAgUQAAgUgGgPQgIgOgKAAQgKAAgIAOgARoAwQgPgeAAgoQAAgpAPgeQARgdAXAAQAWAAAQAdQAQAeABApQgBAogQAeQgQAdgWAAQgXAAgRgdgASIhDQgHAPgBAUQABAVAHAOQAHAOALAAQAKAAAIgOQAGgOABgVQgBgUgGgPQgIgPgKAAQgLAAgHAPgAIRAwQgQgeAAgoQAAgpAQgeQAQgdAWAAQAYAAAPAdQARAegBApQABAogRAeQgPAdgYAAQgWAAgQgdgAIwhDQgIAPAAAUQAAAVAIAOQAHAOAKAAQALAAAHgOQAIgOAAgVQAAgUgIgPQgHgPgLAAQgKAAgHAPgAhRAwQgPgegBgoQABgpAPgeQARgdAWAAQAXAAARAdQAOAeAAApQAAAogOAeQgRAdgXAAQgWAAgRgdgAgxhDQgIAPABAUQgBAVAIAOQAIAOAJAAQALAAAHgOQAHgOAAgVQAAgUgHgPQgHgPgLAAQgJAAgIAPgAqfAwQgPgeAAgoQAAgpAPgeQARgdAXAAQAWAAAQAdQAQAeABApQgBAogQAeQgQAdgWAAQgXAAgRgdgAp/hDQgHAPgBAUQABAVAHAOQAHAOALAAQAKAAAIgOQAGgOABgVQgBgUgGgPQgIgPgKAAQgLAAgHAPgAzoAwQgPgeAAgoQAAgpAPgeQARgdAXAAQAWAAAQAdQAQAeABApQgBAogQAeQgQAdgWAAQgXAAgRgdgAzIhDQgHAPgBAUQABAVAHAOQAHAOALAAQAKAAAIgOQAGgOABgVQgBgUgGgPQgIgPgKAAQgLAAgHAPgA6+AwQgQgeAAgoQAAgpAQgeQARgdAXAAQAWAAARAdQAQAeAAApQAAAogQAeQgRAdgWAAQgXAAgRgdgA6ehDQgHAPAAAUQAAAVAHAOQAIAOAKAAQAKAAAIgOQAGgOAAgVQAAgUgGgPQgIgPgKAAQgKAAgIAPg");
	this.shape_20.setTransform(524.8,134.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AZKCrQghgsAAg+QABg+A+hDQA/hFAjAJQAiAJANA8QANA6AAA+QAAA+ghAsQggAsguAAQgtAAgggsgAZ6AAQgQAcAAAqQAAApAQAdQARAeAXAAQAWAAARgeQAQgdAAgpQAAgqgQgcQgRgdgWAAQgXAAgRAdgARCB+QgggsgBg+QAAg9AQhfQAPhfA7AqQA8ApAkA2QAjA1AAA9QgBA+ggAsQggAsgtAAQguAAgggsgARyguQgPAeAAAoQAAApAPAeQARAdAXAAQAWAAAQgdQAQgeABgpQgBgogQgeQgQgdgWAAQgXAAgRAdgAHpB+QgfgsAAg+QAAg9AggvQAhguA2gtQA3gtAXBbQAWBcAAA9QABA+ghAsQggAsgtAAQguAAghgsgAIbguQgQAeAAAoQAAApAQAeQAQAdAWAAQAYAAAPgdQARgegBgpQABgogRgeQgPgdgYAAQgWAAgQAdgAh3B+QghgsAAg+QAAg9AhgsQAggsA3gwQA2gwAXBaQAYBagBA/QAABAghAsQggAsgtAAQgtAAgggsgAhHguQgPAegBAoQABApAPAeQARAdAWAAQAXAAAQgdQAPgeAAgpQAAgogPgeQgQgdgXAAQgWAAgRAdgArGB+QgfgsgBg+QAAg9AIhUQAHhUAtAAQAuAAA6BUQA5BUAAA9QgBA+ggAsQggAsgtAAQguAAghgsgAqVguQgPAeAAAoQAAApAPAeQARAdAXAAQAWAAAQgdQAQgeABgpQgBgogQgeQgQgdgWAAQgXAAgRAdgA0PB+QgfgsgBg+QAAg9AMhWQALhWA5AYQA6AYApA+QApA+ABA9QgBA+ggAsQggAsgtAAQguAAghgsgAzeguQgPAeAAAoQAAApAPAeQARAdAXAAQAWAAAQgdQAQgeABgpQgBgogQgeQgQgdgWAAQgXAAgRAdgA7kB+QghgsAAg+QAAg9AZg4QAYg4AMguQAMgvBJBnQBLBmAAA9QAAA+ghAsQggAsguAAQgtAAgggsgA60guQgQAeAAAoQAAApAQAeQARAdAXAAQAWAAARgdQAQgeAAgpQAAgogQgeQgRgdgWAAQgXAAgRAdg");
	this.shape_21.setTransform(523.8,129.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AZKDJQghgsAAg+QABg+AbiKQAciLA2AyQA3AxAcBaQAbBYABA+QAAA+ghAsQggAsguAAQgtAAgggsgAZ6AcQgQAeAAApQAAApAQAeQARAdAXAAQAWAAARgdQAQgeAAgpQAAgpgQgeQgRgcgWAAQgXAAgRAcgARCCbQgggsgBg+QAAg9A3h/QA2h/ApA4QAqA5AOBHQAPBGAAA9QgBA+ggAsQggAsgtAAQguAAgggsgARygQQgPAcAAAqQAAApAPAdQARAeAXAAQAWAAAQgeQAQgdABgpQgBgqgQgcQgQgdgWAAQgXAAgRAdgAHpCbQgfgsAAg+QgBg9AZg8QAYg9AqhDQAphDAsCAQAtB/gBA9QABA+ghAsQggAsgtAAQguAAghgsgAIbgQQgQAcAAAqQAAApAQAdQAQAeAWAAQAYAAAPgeQARgdgBgpQABgqgRgcQgPgdgYAAQgWAAgQAdgAh3CbQghgsAAg+QABg9AZgxQAZgyAThNQAThMBBB8QBCB8AAA/QAABAghAsQggAsgtAAQgtAAgggsgAhHgQQgPAcgBAqQABApAPAdQARAeAWAAQAXAAAQgeQAPgdAAgpQAAgqgPgcQgQgdgXAAQgWAAgRAdgArGCbQgfgsgBg+QABg9BChuQBBhuASAMQATAMAZBiQAaBiABA9QgBA+ggAsQggAsgtAAQguAAghgsgAqVgQQgPAcAAAqQAAApAPAdQARAeAXAAQAWAAAQgeQAQgdABgpQgBgqgQgcQgQgdgWAAQgXAAgRAdgA0PCbQgggsAHhDQAHhCBOiIQBOiIgQBPQgQBPApA+QApA+ABA9QgBA+ggAsQggAsgtAAQguAAghgsgAzegQQgPAcAAAqQAAApAPAdQARAeAXAAQAWAAAQgeQAQgdABgpQgBgqgQgcQgQgdgWAAQgXAAgRAdgA7kCbQghgsAAg+QABg9Abg7QAcg8AshPQAthOAlCKQAmCKABA9QAAA+ghAsQggAsguAAQgtAAgggsgA60gQQgQAcAAAqQAAApAQAdQARAeAXAAQAWAAARgeQAQgdAAgpQAAgqgQgcQgRgdgWAAQgXAAgRAdg");
	this.shape_22.setTransform(523.8,126.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AZKDJQghgsAAg+QABg+AghjQAfhlA5A/QA4A+AVAmQAWAlABA+QAAA+ghAsQggAsguAAQgtAAgggsgAZ6AcQgQAeAAApQAAApAQAeQARAdAXAAQAWAAARgdQAQgeAAgpQAAgpgQgeQgRgcgWAAQgXAAgRAcgARCCbQgggsgBg+QAAg9AggjQAfgjA6gIQA5gHAVArQAWAqAAA9QgBA+ggAsQggAsgtAAQguAAgggsgARygQQgPAcAAAqQAAApAPAdQARAeAXAAQAWAAAQgeQAQgdABgpQgBgqgQgcQgQgdgWAAQgXAAgRAdgAHpCbQgfgsAAg+QgBg9AZg8QAYg9AqhDQAphDAsCAQAtB/gBA9QABA+ghAsQggAsgtAAQguAAghgsgAIbgQQgQAcAAAqQAAApAQAdQAQAeAWAAQAYAAAPgeQARgdgBgpQABgqgRgcQgPgdgYAAQgWAAgQAdgAh3CbQghgsAAg+QAAg9AaguQAaguAcgYQAcgXA4BEQA5BDgBA/QAABAghAsQggAsgtAAQgtAAgggsgAhHgQQgPAcgBAqQABApAPAdQARAeAWAAQAXAAAQgeQAPgdAAgpQAAgqgPgcQgQgdgXAAQgWAAgRAdgArGCbQgfgsgBg+QABg9A0glQA1glAZgYQAYgYAhA9QAgA9ABA9QgBA+ggAsQggAsgtAAQguAAghgsgAqVgQQgPAcAAAqQAAApAPAdQARAeAXAAQAWAAAQgeQAQgdABgpQgBgqgQgcQgQgdgWAAQgXAAgRAdgA0PCbQgggsAHhDQAHhCBOiIQBOiIgQBPQgQBPApA+QApA+ABA9QgBA+ggAsQggAsgtAAQguAAghgsgAzegQQgPAcAAAqQAAApAPAdQARAeAXAAQAWAAAQgeQAQgdABgpQgBgqgQgcQgQgdgWAAQgXAAgRAdgA7kCbQghgsAAg+QABg9Abg7QAcg8AsgMQAtgMAlBLQAmBLABA6QAAA6ghAsQggAsguAAQgtAAgggsgA60gQQgQAcAAAqQAAApAQAdQARAeAXAAQAWAAARgeQAQgdAAgpQAAgqgQgcQgRgdgWAAQgXAAgRAdg");
	this.shape_23.setTransform(523.8,126.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AZKDWQghgsAAg+QABg+AgiuQAfiuA5B5QA4B6AVA1QAWA1ABA9QAAA+ghAsQggAsguAAQgtAAgggsgAZ6AqQgQAdAAAqQAAApAQAdQARAeAXAAQAWAAARgeQAQgdAAgpQAAgqgQgdQgRgdgWAAQgXAAgRAdgARCCpQgggsgBg+QAAg+AYg7QAYg7A1gdQA0gdAiBYQAiBYAAA+QgBA+ggAsQggAsgtAAQguAAgggsgARygDQgPAdAAApQAAApAPAeQARAdAXAAQAWAAAQgdQAQgeABgpQgBgpgQgdQgQgdgWAAQgXAAgRAdgAHpCpQgfgsAAg+QgBg+ATgGQASgHAzgoQAzgnArA+QAsA9gDAuQgDAvggAsQggAsgtAAQguAAghgsgAIbgDQgQAdAAApQAAApAQAeQAQAdAWAAQAYAAAPgdQARgegBgpQABgpgRgdQgPgdgYAAQgWAAgQAdgAh3CpQghgsAAg+QABg+AjhEQAkhFAwhEQAvhEAbCHQAaCHAAA/QAABAghAsQggAsgtAAQgtAAgggsgAhHgDQgPAdgBApQABApAPAeQARAdAWAAQAXAAAQgdQAPgeAAgpQAAgpgPgdQgQgdgXAAQgWAAgRAdgArGCpQgfgsgBg+QABg+A0gkQA1glAZgYQAYgYAhA9QAgA8ABA+QgBA+ggAsQggAsgtAAQguAAghgsgAqVgDQgPAdAAApQAAApAPAeQARAdAXAAQAWAAAQgdQAQgeABgpQgBgpgQgdQgQgdgWAAQgXAAgRAdgA0PCpQgfgsAFg5QAFg4BHhCQA3g0AHgMQAEALAfAvQApA9ABA+QgBA+ggAsQggAsgtAAQguAAghgsgAzegDQgPAdAAApQAAApAPAeQARAdAXAAQAWAAAQgdQAQgeABgpQgBgpgQgdQgQgdgWAAQgXAAgRAdgA7kCpQghgsAAg+QABg+AmhZQAnhZA/g/QA+g+AJCbQAICbABA6QAAA7ghAsQggAsguAAQgtAAgggsgA60gDQgQAdAAApQAAApAQAeQARAdAXAAQAWAAARgdQAQgeAAgpQAAgpgQgdQgRgdgWAAQgXAAgRAdg");
	this.shape_24.setTransform(523.8,125.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AZKCRQgggsgJgXQgJgWgBgYQAAgYBhhEQBihEAVA1QAWA1ABA9QAAA+ghAsQggAsguAAQgtAAgggsgAZ6gbQgQAdAAApQAAApAQAeQARAdAXAAQAWAAARgdQAQgeAAgpQAAgpgQgdQgRgdgWAAQgXAAgRAdgARCBjQgggsgBg9QAAg+AegCQAdgDA0ghQAzghAeAkQAdAjAAA+QgBA9ggAsQggAsgtAAQguAAgggsgARyhIQgPAdAAAqQAAAoAPAdQARAeAXAAQAWAAAQgeQAQgdABgoQgBgqgQgdQgQgdgWAAQgXAAgRAdgAHpBjQgfgsAAg9QgBg+ATgHQASgHAzgnQAzgoArA+QAsA+gDAuQgDAuggAsQggAsgtAAQguAAghgsgAIbhIQgQAdAAAqQAAAoAQAdQAQAeAWAAQAYAAAPgeQARgdgBgoQABgqgRgdQgPgdgYAAQgWAAgQAdgAh3BjQghgsAAg9QABg+AigqQAhgrAqAJQAqAJAiAgQAiAfAABAQAAA/ghAsQggAsgtAAQgtAAgggsgAhHhIQgPAdgBAqQABAoAPAdQARAeAWAAQAXAAAQgeQAPgdAAgoQAAgqgPgdQgQgdgXAAQgWAAgRAdgArGBjQgfgsgBg9QABg+AwgfQAwgeAOgHQANgGAwAlQAwAlABA+QgBA9ggAsQggAsgtAAQguAAghgsgAqVhIQgPAdAAAqQAAAoAPAdQARAeAXAAQAWAAAQgeQAQgdABgoQgBgqgQgdQgQgdgWAAQgXAAgRAdgA0PBjQgfgsAFg3QAFg5BHhDQA3g0AHgMQAEALAfAvQApA+ABA+QgBA9ggAsQggAsgtAAQguAAghgsgAzehIQgPAdAAAqQAAAoAPAdQARAeAXAAQAWAAAQgeQAQgdABgoQgBgqgQgdQgQgdgWAAQgXAAgRAdgA7kBjQghgsAAg9QABg+AnhMQAohMBHA9QBGA9AAATIAABNQAAA5ghAsQggAsguAAQgtAAgggsgA60hIQgQAdAAAqQAAAoAQAdQARAeAXAAQAWAAARgeQAQgdAAgoQAAgqgQgdQgRgdgWAAQgXAAgRAdg");
	this.shape_25.setTransform(523.8,132.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},10).to({state:[{t:this.shape_16},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_17},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_18},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_23},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_24},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_25},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[]},1).to({state:[]},11).wait(6));

	// Cake
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF9999").ss(3,1,1).p("EAidgSlQgDAdgNAZQgpBSiOAsQgSAFgUAFQhQAUh6ANQh9ALgtAGQjnAfiIAKQiCAJjQAAQgxAAjVgNQi9gMhAgFQitgRk2gKQjxgHgFgGQiSADmCAbQl4AbgqADQAAAAAAAAEAjFgHmQgIggALgbQAchHAAgiQAAgpgVhiQADhMgRiOQgKhTgQgeQgLgVgPAGEAiegSwQgfhDgpgtQg2g6hIgSQgjgIhPgGQhMgGgqgLQhQgWiagIQitgGhJgEQgtgDnSgyQm0gvg/AAQgZAAsfAUQiiAAhbgZQgEgBgDgBQhbgXizAAQiKAAi5AUQhHAIhQARQiaAhi7BGQhMAcg5AYEAi8gIvQACBEgBBTQAAAMgBAMQAAAsgCAwQAAAgABAfIAAAAQABAIAAAHQAAACAAABQABACAAACQABAPABAOQAGA6ALAzEAi8gGAQADgDACgDEAjGgDXQgFABgEAAIgBAAQgJACgIAAQgoABACggQAGhMAxhBEgiHgTNQgEAkgLAoQgKAZgJAcQgGARgIARQgnBVgDA0QgFBaAFC0QAABvADBKQABALAAAJQADBDAGAiQABACAAACQAJA5AJB8QAJCNAJDjQAFB4AQBdQAEAZAFAWQAAABAAAAQAUBUAeAtQAIALAOAWQAZAlAuBEQBDBmAeA8QADAFADAGQDCFzKOCxQIDCNK3AAQDsAAFUg+QFxhDFAhvQFwh+DSibQAagTAXgUQCriOATiYQADgVAAgUQgKhhgKhtQgCgYgCgXQgPilgBg8QAAgEAAgDQAAgGAeAOQADgOAEgNQAIgdAOgYQAgg7gQhYQgKg3APhhA0XuNQgoATlRh2QlSh2iPhkA/T2BQhqBYgQARQgiAhgEAg");
	this.shape_26.setTransform(515.4,396.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAicgABQAAAAAAABEAiVADtIAAABA0znaIARgvA0+m9IgBADIAAAAQAMACgFAIQgHALAAgUIAAgBA0znaIgNAgIACgDIA2hXA0znaIgLAdAmJn2QAAgMADADQAJAJAMAAQgLAAgNAAgAI1EKQABABAAAAQAAAAAAgBQgBgOgjAGQgHABgHACQgcAGgKAAQAKAABNgBQABAAAAAAAIEEFQArACAGADEgiagL3QAAAAgBgBQACgDACgEAhnL+QABAAABABQAIAEAAgOQAAAFgKAEgAhdL1IAAAAQgRAAgSAAQAKAAAPAJ");
	this.shape_27.setTransform(519.4,350.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF9999").s().p("ApNKHQizgjhMgFQiYgDhqgEQjIgKg+gWQhcgjiOgmQi8gygggLQjihEiVhrIgBgBQAMg0gZg+QgZg+Apg0QBRBBBtAmQAXAIDMA5QC3AzBrAVQCyAkCEgIQBzgIHWA1QHvA2BaAAQHsABJciRQCrgqFhhcQDHgzCqglQBNgRBdABQABA7APCmQgPimgBg7IAAgHQAAgGAeAOIAHgbIABAAIAHAmQgVCAgIBVQgGA4AAAlIABANIgVACQhNAshTAkQj3BsktAlQhmANi4ALQiYAJg2AMQh3AYoDATQmeARi/gBQiGAAihgegEgiSAEDIAAgBIABABgAqQBRQo5gtkXgvQjCgijQhGQjThHhcgaQgEALgJgPQgFgIgPiTQgJh8gJg4IgKhpIgBgUQEkB+FNA4QFsA+IuAUQEEAKJXgHQE8gDBoAEQgcAGgKAAIBYgBIAAABIAAgBIE3gDQGigEC1AIQDsALDAhOQAggNAegPQBcguCLhDIAFgCIAggQQgSASgPARIgEAHIAAgYIAAAYQgyBBgGBMIAAAAIAAABQgBAdAlABIAAAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIAAAAQglgBABgdIAAgBIAAAAQAGhMAyhBIgDBcIAAAGIACA5IgKAAQgHALAAAGQABAHARgGIAAAAIAJgFIgJAJIAAgEIAAAEQiCBwhlA4IgoAWQjjBzmIBMIhRAPQozBir0ADIgiAAQAJAAAQAIQgZAKhdAAQiVAAlGgZgEAiJAAQQgKgXARgEIgHAbIAAAAgEAiQgALIAAAAgEAi8gGZIAAAAgEAi7gGvIgCg5IAAgGIADhcIAEgHIgECigEAjAgJRIAAAAgEgjggKkIABAAIABAUIgCgUg");
	this.shape_28.setTransform(515.5,417.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AxLWfQqOixjClzIgGgLQgeg8hDhlIhHhqIgWghQgegtgThUQCVBrDiBFQAgAKC8AyQCOAmBcAjQA+AXDIAJQBqAECYAEQBMAECzAjQChAfCGAAQC/AAGegQQIDgUB3gYQA2gLCYgJQC4gMBmgNQEtglD3hsQBTgkBNgsIAVgCQACAhAMBLIAMBQIADAYQAACBilB5IgZASIgDACQCriOATiYQgTCYirCOQgXAUgaATQjSCblwB+QlABvlxBDQlUA+jsAAQq3AAoDiNgAfTP8IAAAAgA/xMWQg0hEgkhtIBHBqQBDBlAeA8IAGALQgugxgog0gApMIXQnWg1hzAIQiEAJiygkQhrgVi3g0QjMg4gXgJQhtgmhRhBQgpA0AZA/QAZA+gMAzIgJgvQgQhcgFh5QgJjjgJiNQAPCTAFAIQAJAOAEgLQBcAaDTBHQDQBFDCAiQEXAxI5AsQIPApBCgZIABAAQAIAFAAgOIAAAAQL0gCIzhjIBRgQQGIhLDjhzIAogVQBlg5CChwIAJgIIgHAlIgCgdIACAdIgDARQgJA7AAAsQAAAbAEAWIgFAyQgEAugHAzQgOAYgIAdQgRAEAKAXQgegOAAAGIAAAHQhdAAhNARQiqAljHAzQlhBcirApQpcCRnsAAQhaAAnvg3gEAiSAC0IgBABQAIgdAOgYIgIA1IgGAmgEAiRAC1IAAAAgEAinACAIAAAAgEAi3gATIAAAAgEAizgBEQAAgsAJg7IAAAWQAAA8gFBGQgEgWAAgbgEAi8gCrIAAAAgEAi/gC8IAAAAgAXsjRQi1gJmiAEIk3AEQgBgOgiAGIgPADQhogFk8AEQpXAHkEgKQougVlsg9QlNg4kkh/QgDhKAAhvQgFi0AFhaQADg0AnhVIAOgiQAJgcAKgZQAJgYALgVIAPgdIACABIACgIQA2hbBZhAQA5gYBMgcQC7hGCaghIBAgHQC+gSFeAAQBJAABDADQBzAGBgAOIAxAHQiiAAhbgZIgHgCIAHACQBbAZCiAAIM4gUQA/AAG0AvQHSAyAtADQBJAFCtAFQCaAIBQAWQAqAMBMAFQBPAGAjAJQBIARA2A6QApAtAfBEQgfhEgpgtQBIAsAAA7IAAAKIgBAKIAKBFQAQAeAKBTQARCOgDBMQAVBiAAApQAAAigcBHQgGAQAAARQAAAMADAOQgDgOAAgMQAAgRAGgQIgCAkIgBAXIAAASIAAABIABAwIgDgDIgBAMIgFADIAAg9IgBhbIABBbIAAA9QiLBChcAuQgeAQggAMQipBFjLAAIg4gBgA0XuWQAAAUAHgLQAFgIgMgCgAhrvFQE2AJCtARQBAAGC9ALQDVANAxAAQDQAACCgJQCIgJDnggQAtgGB9gLQB6gNBQgTIAmgLQCOgsAqhSIAAAAIAFgBIAAAAIABAAQAKAAAIAPIABABIgBgBQgIgPgKAAIgBAAIAAAAIgFABIAAAAQAMgZADgdQgDAdgMAZQgqBSiOAsIgmALQhQATh6ANQh9ALgtAGQjnAgiIAJQiCAJjQAAQgxAAjVgNQi9gLhAgGQitgRk2gJQjxgIgFgGIAZAAQgNAAgJgKQgDgCAAAMIAAAAQiSADmCAbImhAeIABgDIA1hXIg1BXIgBADIgBAAIACgDIgCADIAMggIgKAdIAKgdIASgwIgSAwIgMAgIABAAIgBAAIABAAIGhgeQGCgbCSgDQAFAGDxAIgA0nuUQALAAAFgCQgFACgLAAIAAAAIgFAAIAAAAIAAAAIgDAAQhCgFjchKIgCgBIgIgCIgBgBIgEgBIgGgCIgGgCIgCgBIgDgBIgDgBIgHgCIgDgBIgEgBIgGgDIgDgBIgEgBIgFgCQlSh2iPhkQCPBkFSB2IAFACIAEABIADABIAGADIAEABIADABIAHACIADABIADABIACABIAGACIAGACIAEABIABABIAIACIACABQDcBKBCAFIADAAIAAAAIAAAAIAFAAIAAAAgEAirgDeIARgCIABAAIgBAAIgRACQAAgFAHgMIAKAAIABAAIAAAPIAAADIAAAAIgBgDIABADQgIADgFAAQgFAAAAgEgEAi8gDgIAAgPIAAAPgEAi9gDdIAAAAgEgjUgFrQgGgigDhDIAKBpIgBgEgA0WuXgA0XuXgA0XuXgAlhvTIAAAAgEAiOgR5IAAAAg");
	this.shape_29.setTransform(515.4,397.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},10).to({state:[]},9).to({state:[]},11).wait(6));

	// Plate
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#666666").ss(3,1,1).p("EAkBgH8QglhEhAg8QlBktvdh2QojhBt7gHQAAAAAAgBQAAABgBAAQgKAEiAgFQgIAAgIAAQjxgJh8gCQozgIi7BPQhXAliQBXQhyBFhfBDQgxAihKA0Qg1AngbAjQg7BKgICwQgICogSCOQgOBpAACLQAADkA2CSQA1CMBzBdQBmBSC4BFQB5AtEjBSQCSAqCHAMQBZAIEOASQD4AXGRgEQDLgCCngHQLMAAEAgSQF/gaDhhgQFaiSDLh8QDBh2Bgh4QBVhqAciGQAThdAAi3QAAish7i3QhkiViKhjAogxnQAAAAgBAAQhEAAhGgBQgnAAgoAAQAQABBlAJQBiAGADgPg");
	this.shape_30.setTransform(525.5,478.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AvsRhQkOgShYgIQiIgMiSgqQkjhSh4gtQi5hFhmhSQhzhdg1iMQg2iSAAjkQAAiLAOhpQASiOAIioQAIiwA7hKQAbgjA1gnIB7hWQBfhDByhFQCQhXBXglQC7hPIzAIQB8ACDxAJIAQAAIhPAAQAQABBmAJQBhAGADgPQN7AHIjBBQPdB2FAEtQBBA8AlBEQglhEhBg8QCLBjBkCVQB7C3AACsQAAC3gTBdQgcCGhVBqQhgB4jBB2QjLB8laCSQjhBgl/AaQkAASrMAAQinAHjKACIiAAAQk7AAjPgTgEAibgJ8IAAAAg");
	this.shape_31.setTransform(525.5,478.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30}]},10).to({state:[]},9).to({state:[]},11).wait(6));

	// Table
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#663300").ss(3,1,1).p("EBhsgrIMAAAAplEBhhgBjMAAAAs/EhUZgrcIDcAAMCypAAAEhhXgrmIQaAAEhhhArmIAAgKIgKAAEhhhArcMAAAhXCEBhDArcMjCkAAA");
	this.shape_32.setTransform(465.2,639.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#663300").s().p("EBg+ArhMjCkAAAMAAAhXCIAKAAIQaAAIAAAKIjbAAIDbAAMCyoAAAIAAAUMAAAAplIgKAAMAAAAs/g");
	this.shape_33.setTransform(465.7,638.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33},{t:this.shape_32}]},10).to({state:[]},9).to({state:[]},11).wait(6));

	// Scene 3
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(3,1,1).p("EAq5gLVQAIAGAIAGQCVB1ArBpQAgBMAAC0QAADhiMIGQgjCBg9DjAejykQAAAAAAABQAtLmBrCrQBrCsDdJvEgjigS9QgDAGgCAHQg9CSgKBZQgEAkAABvQAAC9BGC5QAmBnAKAiQAWBOAABRQAAAngUAvQgPAjg2FDIAnkOA6UrVQigCNhOChQg0BsAABBQAABBAeBFQAJAVA6BnQBjCyAEC8EguogLYQE2DwAAIKQAACmgsDwQhRG5gFAhAuMymQg2CugVAfQgGAFAAABQAAABABAXQAAA9AoB8QAXBIA5CqQBnFZlNO4AVVrXQgQAIgQAHQgCACgDABQjjBzh3CcQhhCBAAByQAABQA4CGQAPAmBtDmQBUCyAoB5QA4CsAACNQAAAagPBuQgPBtAABGAG9ykQAAAAAAABQgVCfgcBcQgVBHAAAUQAAB5A8CFQAbA9BuC8QBjCsA0CCQBNDBAZDYAkIrVQD8BNBvCZQBgCCAADDQAACFgeCPQgVBlgxCgQg+DOgSBAQgpCigSCREgj/AEoIgpEO");
	this.shape_34.setTransform(491.5,749.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6633FF").s().p("AgiAjQgPgPAAgUQAAgTAPgQQAPgOATAAQAVAAAOAOQAPAQAAATQAAAUgPAPQgOAPgVAAQgTAAgPgPg");
	this.shape_35.setTransform(949.7,362.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF00FF").s().p("EgwSAOiQgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPgEAvMgNbQgOgPAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgVAAgPgPg");
	this.shape_36.setTransform(466.1,294.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6600").s().p("AEkaJQgtgBgqgJQi6gpiLjAQixjzAAlYQAAjCA5iiQArh9BNhqQAng0AqgqQCWiVDEAAQDEAACXCVQAqAqAnA0QBcCAAtCbQhpA8hYB4QixDzAAFYQAACkAoCNQhsA+h/AAIgPAAgAtZ4zQgOgPAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgVAAgPgPg");
	this.shape_37.setTransform(657.8,462.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAcM+Qj5AAiyjzQgXgggTggQhJh5giiQQgch5AAiJQAAlXCxjzQA7hQBCg1QCHhuCnAAQA1AAAxALQg5CiAADCQAAFYCxDyQCNDAC6ApQgfBXgvBPQgUAggXAgQihDdjeAUIgmACIgHAAg");
	this.shape_38.setTransform(620.7,593.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF33CC").s().p("AAOM+QhRAAhKgaQiZg2h3ijQixjzAAlYQAAi4AzicQAsiGBShwQB1igCTg2QBOgdBVAAQDEAACXCVQAqApAmA1QBsCSAqC4QhCA1g7BQQixDyAAFYQAACJAcB5QiFBrilACIgFAAg");
	this.shape_39.setTransform(534.1,547.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00FF00").s().p("EgaNApVQj7AAixjzQgXgggUghQgthLgehTQg7ilAAjHQAAlYCxjzQCejYDYgYQAagDAcAAQBSAABKAaQgzCcAAC5QAAFYCxDzQB3CjCZA2QggBgg0BVQgUAhgXAgQivDwj3ADIgFAAgEAiWgASQgPgPAAgUQAAgVAPgPQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAAUgPAPQgOAPgVAAQgUAAgPgPgEgOkgn/QgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPg");
	this.shape_40.setTransform(632.3,412);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0000FF").s().p("EAEsAobQhpgIhbg1Qhog9hXh4QixjzgBlYQABijAoiNQAribBeiAQCwjzD6AAQD7AACxDzQBLBnArB4QjYAYidDYQiyDzABFYQAADHA7ClQgbADgcAAQgTAAgUgBgAVpCnQgPgOABgVQgBgUAPgPQAPgPAVAAQAUAAAOAPQAQAPgBAUQABAVgQAOQgOAPgUAAQgVAAgPgPgEgWvgnGQgPgPAAgUQAAgVAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAVQAAAUgOAPQgPAPgUAAQgVAAgPgPg");
	this.shape_41.setTransform(370.6,371.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF00").s().p("EgfmAtUQjxgIisjrQgXgggUggQgthLgehTQg7ilAAjIQAAlYCxjzQCxjzD7AAQAXAAAWACQBlAJBZA0QgoCMAACkQAAFYCxDzQBXB4BqA9QgiB0g9BmQgUAggXAgQixDzj6AAIgPAAgA//jLQgPgPAAgUQAAgUAPgQQAPgOAUAAQAVAAAOAOQAPAQAAAUQAAAUgPAPQgOAPgVAAQgUAAgPgPgEAnggr+QgPgPAAgUQAAgVAPgPQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAAUgPAPQgOAPgVAAQgUAAgPgPg");
	this.shape_42.setTransform(525.3,386.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6633CC").s().p("EAsZAM+IgQgBQjqgLipjnQgXgggUggQg8hmgih0QgoiNAAikQAAlXCxjzQBYh4Bpg8QBsg/B/AAQD6AACyDzQCxDzAAFXQAAEriGDgQgUAggXAgQiyDzj6AAIgJAAgEgtYAM7QjXgYiejYQgXgggTggQiHjgAAkrQAAlXCxjzQCxjzD7AAQBrAABdAtQgtCUAACuQAAFYCxDyQBmCMB9A7QghBqg4BeQgUAggWAgQiyDzj6AAQgcAAgbgDg");
	this.shape_43.setTransform(483.5,593.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("Egv0AjxIAFgMIgFAMQgvgLgsgUQh+g8hliLQixjzAAlYQAAivAtiUQAsiQBYh4QCxjzD7AAQD6AACxDzQBLBmArB4QgWgCgXAAQj7AAixDzQixDzAAFYQAADHA7CmQghgDgfgIgEgjBgX5QgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgEA2PgimQgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPg");
	this.shape_44.setTransform(569.6,400);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(3,1,1).p("EAtpgMTQgBACABABQgEBYg6BZQgdAqgLARQgSAdAAARQAABRAuBaQAYAuBQBzQBIBqAeBDQAwBoAABpQAAAygbA4QgNAcgtBKQhVCLAABnQAAA2APAlQALAbAsBSEAhTgTVQAgCTBADYQAYBQAACTQAAChhuDRQhBB6gLAaQgiBOAAA6QAAAUAaBrQAeBxAEBBQAKCQAaAsQAIANAXAZQAZAbASAbQAvBKBlByQBOBYBKBKEgg+gT3QgCAGgDAGEghSgTVQgWCfgHA5QgLBdAAAzQAACyBACsQApBtBkCzQBpC8AkBYQBACgAACbQAACdgeCGQgeCGAAAtEgrcgMJQAABVAKBqQAFA1AFAzQAABigLAjQgJAcgoBeQh/FehjC2QgnBHgDAIQgMAcAAAoQAAACDHFpQDMF5AbBQA4EsQQABAAAAAAQARFABUDOIA2CGQAYBHAABQQAAA7gSAwQgJAYghA5Qg8BqAAB+QAAByAsBdQAeA/BWBzAJPzfQAvCxAcBZQAFAVAACPQAABMggBsQgHAYg9C5QhkErAADjQAAAkCoFWQDKGZAKAXArkzpQABAFABAFQAuEFhgEnQgZBNgyCEQglBqAAA7QAABaAeBYQATA5AuBbQAxBhARAsQAdBRAABMQAAAPgRALQgKAGgcAQQg3ArAAB8QAAAwgBATQgCAfgHAMQgPAdgmA6QggA1gFAeAiWsJQgGDUgbB8QgTBRgnBLQgqBRgNAtQgYBXAACaQAACaAoBCQAQAaAaAVQAPANAhAYQBAAyAgBXQAuB+AKD9AW/sTQgBACgCABQg3BigcBqQgYBcAABRQAABOAiBZQAHARBFCUQBuDrAADyQAABJgOBAQgGAhgUBGQgFARgPBeQgMBLgSAi");
	this.shape_45.setTransform(469.1,686.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6633FF").s().p("AgiAjQgPgPAAgUQAAgUAPgPQAPgOATAAQAVAAAOAOQAPAPAAAUQAAAUgPAPQgOAPgVAAQgTAAgPgPg");
	this.shape_46.setTransform(901.2,393.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00FF00").s().p("EgW5AhmQj6AAiyjzQgXgfgTghQguhLgdhUQg8ilAAjHQAAlYCxjzQCejYDYgYQAbgDAbAAQBSAABLAaQg0CcAAC5QAAFYCxDzQB4CkCYA1QggBhgzBVQgUAhgXAfQivDxj4ACIgFAAgAfBHbQgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgEgR4ggQQgPgPAAgUQAAgVAPgPQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAAUgPAPQgOAPgVAAQgUAAgPgPg");
	this.shape_47.setTransform(605.1,393.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0000FF").s().p("EALbAgtIgBgKIABAKIgGgBQhpgIhag1Qhqg8hYh4QiwjzAAlYQAAikAniNQAsibBdh/QCyjzD7AAQD6AACxDzQBLBmArB5QjXAYieDYQixDzgBFYQABDHA7ClQgbADgbAAIgigBgAVpKWQgPgPAAgUQAAgVAPgPQAPgOAVAAQAUAAAPAOQAPAPgBAVQABAUgPAPQgPAPgUAAQgVAAgPgPgA2v/YQgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgVAAQgUAAgPgPg");
	this.shape_48.setTransform(322.1,352.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF33CC").s().p("AAOM+IgOAAQhJgChEgYQiYg2h4ijQixjzAAlYQAAi4AzicQAsiGBShwQCyjzD5AAQD7AACwDzQBrCTArC3QhDA1g6BQQixDyAAFYQAACJAcB5QiFBsilABIgFAAg");
	this.shape_49.setTransform(528.1,479.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF00").s().p("EgcSAlmIgTgCIgBAAQjkgQiljhQgXgggTghQgthLgehSQg8imAAjIQAAlXCxj0QCyjzD6AAQAXAAAXACQBlAKBYAzQgoCNAACkQAAFXCxDzQBYB4BpA9QghB1g9BlQgUAhgXAgQixDzj7AAIgPAAgEgjUAEjIgGgIQgIgMAAgPQAAgVAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAVQAAAUgPAPIgDACQgOAMgSAAQgVABgPgPgEAkLgkQQgOgOAAgUQAAgVAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAVQAAAUgPAOQgPAQgUgBQgVABgPgQg");
	this.shape_50.setTransform(498.1,367.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("EgsgAcDIAFgNIgFANQgugLgsgVQh+g7hmiMQixjzAAlYQAAiuAuiUQAsiRBXh4QCyjzD6AAIAdABIAGAHQAPAPAVAAQASAAAOgMQC5ApCMC/QBKBmAsB4QgXgCgXAAQj6AAiyDzQixDzAAFYQAADIA8ClQghgDgggHgEgmVgQKQgPgPAAgUQAAgVAPgPQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAAUgPAPQgOAPgVAAQgUAAgPgPgEAy6ga3QgOgPAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgVAAgPgPg");
	this.shape_51.setTransform(542.4,381.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAMM+IACgDIgCADQjvgIisjrQgXgggTggQhJh5giiQQgch5AAiJQAAlXCxjzQA7hQBCg1QCHhuCnAAQA1AAAxALQg5ChAADDQAAFYCxDyQCNDAC6AoQgfBYgvBPQgUAggXAgQihDdjeAUQgWACgXAAIgQAAg");
	this.shape_52.setTransform(614.7,525.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF6600").s().p("AH5SbQgtgCgqgJQi6goiMjAQiwjzgBlYQABjDA4ihQAqh9BOhpQCxjzD6AAQD7AACxDzQBdB/AsCaQhpA9hXB4QixDzAAFYQgBCjAoCNQhsA/h/AAIgOAAgAwtxFQgPgOAAgVQAAgUAPgPQAPgPAVAAQAUAAAPAPQAPAPgBAUQABAVgPAOQgPAPgUAAQgVAAgPgPg");
	this.shape_53.setTransform(630.6,444.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6633CC").s().p("EAsUAM+IAAgCIAAgBIAAABIAAACIgLgBQjrgLiojnQgXgggUggQg8hmgih0QgoiOAAijQAAlXCxjzQBXh4Bqg8QBsg/B/AAQD7AACwDzQCyDzAAFXQAAEsiHDfQgTAggYAgQiwDzj7AAIgOAAgEgzNAJLQgXgggUggQiGjfAAksQAAlXCxjzQCxjzD7AAQBrAABeAtQguCUAACuQAAFYCxDyQBlCLB/A8QgiBqg3BeQgUAggXAgQiyDzj6AAQj7AAixjzg");
	this.shape_54.setTransform(477.5,525.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(3,1,1).p("EAitgYmQB4CuA0CMQAwB9AAB1QAAChhJCgQgnBZh2C7QhxCyguBwQhHCvAAC7QAAAoAyBsQAeBBBQCeQCgFGAACUEAvNgRjQiDAVggBBQgNAdgDAuQgBAPAABUQAABsA2BmQAeA4BbB1QBVBuAjBIQA3BxAAB/QAABJg/BYQgkAzhlBqQhjBognA4Qg+BbAABQQAABEBmC9QA6BqB4DUEgpkgR3QABAGgBAHQAEIShIEXQgdB0gzBwQgUArhSCcQgJAShCBxQg6BhgHAWQgPArg8FnQhBGFAAByQAABrAkBEQALAVAcAwQAZAyAUA9A/k5OQAAACgBACQhBDPg5CcQgfBUgjBbQgVA6gFAtQgFAoAABvQAAB3AZBvQARBKAmBtQArB4AMAwQAZBgAABdQAACbgwBsQgdBAhOB0QhHB6gjCXQgxDRAAFJQAABEACAWQAEAyAOAoA2VxrIgBAAA2WxtQAAABAAABQgKA/AqBSQBFCGATA7QAMAmAKBQQAIBHAAApQAACIg2CfQglBphUCtQhdC/gbBGQg3CNAABoQAAASA3A4QB3B5ABACQCvC/AACYQAABOgqAoQgQAPgdARQgQAJglAVALR5OQACAKADALQArCfA6CLQAVAzAGAXQAJAigCAsQgDA1AUBmQAXBuAABkQAAABgCA6QAABEACA6QABAzgjBjQgjBpgBAPQgHBHgbA8QgQAngoA8Qg7BYgOA1QgHAhAABpQAAB9DaGFQB0DNCwEZAZLx3QgEAGgDAHQgjBHg5CHQhHCpAAAbQAAAZAuBnQAdA+BLCkQCWFYAADOQAADcksJsAq846Qg/FBhFDOQglByg/CIQgyBpgPBKQgXBsAADPQAAEPA+DqQAsCtBZC+QAxBnBVCwQA9CPAAByQAAAuhSBjQhpCAijBcAgoxsQABDCAUERQAKCJAJBkQAABdgzBgQgeA3hUBuQhRBqggA+Qg0BlAABlQAABYAiBgQAcBQBHCFQArBSByDSQBxDUBiDR");
	this.shape_55.setTransform(454.1,670.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF00FF").s().p("EgvxAOxQgTgBgOgOQgPgOAAgVQAAgUAPgPQALgLAPgDIAJgBQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAIgCAAgEAvMgNbQgOgPAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgVAAgPgPg");
	this.shape_56.setTransform(434.6,393.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0000FF").s().p("AIKXXIgGAAQhqgIhbg1Qhpg9hXh4QiwjzgBlYQABijAoiNQAribBdiAQCxjyD6AAQD7AACxDyQBLBnAsB4QjZAYieDYQixDzABFYQgBDHA8ClQgbADgcAAIgggBgAVpTrQgPgOABgVQgBgUAPgPIAGgFQANgKARAAQAUAAAOAPQAQAPgBAUQABAVgQAOIgJAIQgLAHgOAAQgVAAgPgPgA2v2CQgPgPAAgUQAAgVAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAVQAAAUgOAPQgPAPgUAAQgVAAgPgPg");
	this.shape_57.setTransform(339.1,361.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00FF00").s().p("A4iYRQgXAAgWgCQjdgUiijdQgXgggTghQguhLgdhTQg8ilAAjHQAAlYCxjzQCejXDYgYQAbgDAbAAQBSAABLAaQg0CbAAC5QAAEoCDDdIgFAFQgPAPAAAVQAAAUAPAPQAPAPAUAAQAPAAALgIQB0CYCSA0QggBggzBVQgUAhgXAgQivDwj4ADIgFAAgEAgqAQxQgOgPAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgVAAgPgPgAwP27QgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPg");
	this.shape_58.setTransform(611.6,402.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF33CC").s().p("AAaM+IgGgVIAGAVIgHAAIgFAAIgOAAQhJgChEgYQiSgzh0iZIAJgHQAPgOAAgVQAAgUgPgPQgPgPgUAAQgRAAgNAJQiDjdAAkoQAAi4A0icQAriGBShwQCxjzD6AAQD6AACyDzQBrCTAqC2QhDA2g6BQQixDyAAFYQAACJAcB5QiCBpihAEIAAAAgACkk9QgOAPAAAUQAAAVAOAOQAPAPAVABQAUgBAPgPQAPgOAAgVQAAgUgPgPQgPgOgUAAQgVAAgPAOg");
	this.shape_59.setTransform(524.1,428.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFF00").s().p("A97cQIgTgBIgBAAIAAAAIAAgDIAAADQjkgRiljhQgXgfgTgiQgthKgehTQg8imAAjHQAAlYCxjzQCyjzD6AAQAXAAAXACQBlAJBYA0QgoCMAACkQAAFYCxDzQBYB4BpA8QghB2g9BkQgUAigXAfQixDzj7AAIgPAAgEAl0ga6QgOgPAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgVAAgPgPg");
	this.shape_60.setTransform(504.6,376.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("EguJAStIgQgEIABgFIgBAFQgmgKgkgRQh+g8hmiLQixjzAAlYQAAivAuiUQAsiPBXh4QCyjzD6AAQD7AACxDzQBKBmAsB3QgXgCgXAAQj6AAiyDzQixDzAAFYQAADHA8CmQghgDgggIgEgksgG1QgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPgEA0jgRiQgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPg");
	this.shape_61.setTransform(548.9,390.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAmM+IAAAAgAAcM+IgQAAQjvgIisjrQgXgfgTgiQhJh5giiPQgch5AAiJQAAlXCxjzQA7hQBCg2QCHhtCnAAQA1AAAxAKQg5CjAADCQAAFYCxDyQCNDAC6ApQgfBXgvBOQgUAigXAfQihDdjeAUIgjACIAGgNIgGANIgKAAg");
	this.shape_62.setTransform(610.7,474.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF6600").s().p("AGPM+QgsgCgqgIQi6gpiMjAQiwjzAAlYQAAjBA4ijQAsh8BMhqQCxjzD7AAQD6AACxDzQBdB/AtCcQhqA8hYB4QiwDyAAFYQAACkAoCMQhtA/h+AAIgQAAgAvEj3QgOgOgBgVQABgUAOgPQAPgOAVAAQAUAAAOAOQAQAPgBAUQABAVgQAOQgOAPgUABQgVgBgPgPg");
	this.shape_63.setTransform(637.1,428.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6633CC").s().p("EAsUAM+IgLgBQjqgLipjnQgXgfgTgiQg+hkghh2QgoiMAAikQAAlXCxjzQBYh4Bpg8QBsg/B/AAQD6AACyDzQCxDzAAFXQAAEsiGDeQgVAigWAfQiyDzj6AAIgOAAgEgsmAM+IAAgHIAAgGIAAAGIAAAHQj3gCiwjxQgXgfgTgiQhoirgYjYIADAAQAVAAAOgPQAPgOAAgVQAAgUgPgPQgOgPgVAAIgJABIgBgkQAAlXCxjzQCyjzD6AAQBrAABdAtQgtCTAACvQAAFYCxDyQBmCMB9A7QggBqg5BdQgTAigYAfQixDzj6AAIgFAAg");
	this.shape_64.setTransform(473.5,474.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(3,1,1).p("EAuCgOhQgEAGgEAHQgSAlgMA/QgMBAAAA1QAABQAZBwQALA3AsCbQBQEiAACoQAABbgfBGQgUAtgxA9Qg0BAgRAiQgfA9AABPQAAA4BZDIQAvBqBKCjEAg6gViQgFBmAHFjQAHFJgJBxQgTDehPDBQgtBrgGATQgVBCAAA/QAACOAoBpQAaBCBABaQBCBfAXA0QApBeAAB+Egh1gVtQAKAyAAB4QAAARgZDsQgZDsAAAzQAACkA8B9QAiBGAIAXQASA3AABEQAAAvgWA3QgNAhgjBNQhGCvAAEMQAADkAZA2QAJAUAfAlQAlAuAcAtA4nuNQAHAiACAUQABANAAAXQAAARgoCpQgoCoAAAuQAAAWgFA6QgFA7AAALQAAA+AYAmQALATAoAhQAkAfAQAgQAXAxAABRQAABYgOAmQgEAMgbAjQgtA7AADzQAAA6gBBiQABBNALAsQAcBrCDAuA4cuUIgBAAEgrNgOhQAAAGAAAIQAADlgCBsQgEDPgODeQgHB8g9DIQg9DJgBAFQgDA9gBCSQgCCHgEA6QgKCOhDCCQgQAggcA1QgTArAAAjQAAAzAWAnQAPAZArA8AW6uXQgBACAAACQgYD+giCNQgVBUgmBPQgiBHgLA6QgRBfAADHQAAAmAnBaQAXA2A/CEQB9ERAACZQAACRg9CdQgPAlgeBAQgWAwgCAOAJT1iQhkEkh3D+QgfBEgJAmQgKAuAABWQAACaAWBJQAKAbAtBJQAnA/AUBfQAgCLAMEFQAFCBBACpQA9CiAAB4QAAAHgKA8QgKA8AAAXAibuXQABABABADQAkBaAJBaQADAdAABXQAABWgmBtQgZBDg+CBQg/CDgXA+QgnBpAABRQAAAwAWA5QAIATAoBXQBGCVAACCQAAAxgZB4QgZB5AAA3QAAA3AKAUAsb1ZQgeFxAuCpQAMAtAYBOQASBMAABnQAACnhpElQg+CsgKAhQghBoAAA9QAAAmAWAhQANAUAjAiQAjAiANAUQAWAhAAAmQAAA2gJA0QgJAwgWBC");
	this.shape_65.setTransform(470.6,545.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6633FF").s().p("AgiAjQgPgOAAgVQAAgTAPgPQAPgPATAAQAVAAAOAPQAPAPAAATQAAAVgPAOQgOAPgVAAQgTAAgPgPg");
	this.shape_66.setTransform(901.2,548.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFF00").s().p("EgjPAU9QgOgPAAgVQAAgUAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAUQAAAVgPAPQgPAPgUAAQgVAAgPgPgA8XFmIgTgBIgBAAIAAAAQjkgQiljiQgXgggTggQgthKgehTQg8imAAjHQAAlYCxjzQCyjzD6AAQAXAAAXACQBlAKBYAyQgoCOAACjQAAFYCxDzQBYB4BpA8QghB1g9BlQgUAggXAgQixDzj7AAIgPAAgA/VBQQgPAPAAAUQAAAVAPAOQAPAPAUAAQAVAAAOgPQAPgOAAgVQAAgUgPgPQgOgPgVAAQgUAAgPAPgEAkQgT1QgOgPAAgUQAAgVAOgPQAPgPAVAAIAHABQAQACAMAMQAPAPAAAVQAAASgMANIgDAEQgPAPgUAAQgVAAgPgPg");
	this.shape_67.setTransform(497.6,417.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("EgmQAO2QgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPgEgslAKqIgQgDQgmgLgkgRQh+g7hmiMQixjzAAlXQAAivAuiUQAsiQBXh4QCyjzD6AAQD7AACxDzQBKBmAsB4QgXgCgXAAQj6AAiyDzQixDzAAFXQAADHA8CmQghgDgggIgEAy/AEJQgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPg");
	this.shape_68.setTransform(541.9,337.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF33CC").s().p("AAaM+IgHAAIgFAAIgOAAQhKgChDgYQiZg2h3ijQixjzAAlYQAAi4AzicQAsiFBShxQCyjzD5AAQD7AACwDzQBrCSArC4QhCA1g7BQQixDyAAFYQAACJAcB5QiBBoifAFIgDAAgAlsBpQgPAPAAAUQAAAVAPAOQAOAPAVAAQAVAAAOgPQAPgOAAgVQAAgUgPgPQgOgPgVAAQgVAAgOAPg");
	this.shape_69.setTransform(527.1,324.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00FF00").s().p("AfGX+QgOgPAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgVAAgPgPgA2+BvIgXAAIgCgEIACAEIgWgCQjdgUiijcQgXgfgTghQguhLgdhUQg8ilAAjHQAAlYCxjzQCejYDYgYQAbgDAbAAQBSAABLAaQg0CcAAC5QAAFYCxDzQB4CkCYA1QggBhgzBVQgUAhgXAfQivDwj4ACIgFAAgAxzvuQgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPg");
	this.shape_70.setTransform(604.6,442.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0000FF").s().p("AVpZ3QgPgOAAgVQAAgUAPgPQAPgPAVAAQAUAAAPAPQAPAPgBAUQABAVgPAOQgPAPgUAAQgVAAgPgPgALRgKIgGgBQhogIhbg1Qhqg8hYh4QixjzAAlYQAAikApiNQAribBdh/QCyjzD7AAQD6AACxDzQBLBmArB5QjYAYidDYQixDzgBFYQABDHA7ClQgbADgbAAIgigBgA2vv2QgPgPAAgUQAAgVAPgPQAPgOAUAAQAVAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_71.setTransform(322.1,408.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAiM+IAAgFIAAAFIgGAAIgQAAQjvgHisjsQgXgggTggQhJh6giiPQgch5AAiJQAAlXCxjzQA7hQBCg1QCHhuCnAAQA1AAAxALQg5ChAADDQAAFYCxDyQCNDAC6AoQgfBYgvBPQgUAggXAgQihDdjeAUIgjACIgEAAg");
	this.shape_72.setTransform(613.7,370.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6633CC").s().p("EAsUAM+IgLAAQjrgMiojnQgXgggUggQg8hmgih1QgoiNAAijQAAlXCxjzQBXh4Bqg9QBsg+B/AAQD7AACwDzQCyDzAAFXQAAEriGDgQgVAggXAgQimDljoANIAHgOIgHAOIgdABIgOAAgEAl/ACiQgPAOAAAVQAAAVAPAOQAPAPAUAAQAVAAAPgPQAPgOAAgVQAAgVgPgOQgPgPgVAAQgUAAgPAPgEgsmAM+Qj3gDiwjwQgXgggUggQiGjgAAkrQAAlXCxjzQCxjzD7AAQBrAABeAsQguCUAACvQAAFYCxDyQBlCMB+A7QggBrg4BdQgVAggWAgQipDnjqAMIAAgPIAAAPIgZAAIgFAAgEgu3gLDQgPAPAAAUQAAAVAPAOQAOAPAVAAQAVAAAOgPQAPgOAAgVQAAgUgPgPQgOgPgVAAQgVAAgOAPgEgsIAM+IAAAAgEAs/AM9IAAAAg");
	this.shape_73.setTransform(476.5,370.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF6600").s().p("AwoTTQgPgPAAgUQAAgVAPgPQAPgOAVAAQAUAAAPAOQAPAPgBAVQABAUgPAPQgPAPgUAAQgVAAgPgPgAH/GaIgLAAQgtgBgqgKQi6goiMjAQiwjyAAlYQAAjDA4ihQAqh+BOhpQCxjzD6AAQD7AACxDzQA5BOAnBZIgHgBQgUAAgPAPQgPAPAAAVQAAAUAPAPQAPAPAUAAQAVAAAOgPIADgEIALAiQhqA9hXB4QiyDzABFXQgBCjAoCNQhrA/iAAAIgDAAg");
	this.shape_74.setTransform(630.1,366.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(3,1,1).p("EAhNgTXQBZF8BJC9QAUA0ADAcQAFAhAABnQAACxhkDQQg7B6gJAYQggBPAABAQAAAaA8CPQA8CPAAArQAAASgbCAQgbB7gGAREAtPgMfQABACABACQAaBCABADQABAEAAASQAAACgPBRQgPBYAAAiQAAAFAJCeQAJCoACBZQAAAHAYB7QAZCKABBRIAAFUQAAC2ABCwQgBBXgGALQgCAEgIABQgLABgIADQgdAQgkBQAtDzrQAaA0ASCJQAVCigFDHQgCBBACAoQAAFugtCJQgdBXgCAKQgOA/AAB0QAAA1APAuQAGARAdA8QAyBrAACJQAABCgoBjQgoBiAABJQAAAZABAMQACATAHAOAjrsVQAADCAZBxQAMA5ANApQAABpgZBNQgNAogqBQQgnBJgQA8QgZBcAACEQAADNCeFgQA0BzBLCQQAoBLA3BpAIDzXQA/EzBRDBQAbA+AIAxQALBDAACOQAABugZBNQgLAhgsBZQgmBMgRBJQgZBsAACjQAABqAZCRQAZCRAACRAWvsLQgKBGAADrQAADSBGC5QAnBlAJAiQAWBQAABZQAAB2hVDJQgyB2gJAXQgaBIAAArQAAA6AbA0QAPAdAcA0EgsTgMLQgeCUgfAwQgMATgCAIQgFARAAAtQAAA2AOA/QAIAmAXBSQAtCxAADNQAABngWBUQgMAugkBaQgiBVgOA7QgWBeAAB3QAAC9AvBRQATAiAuAzQBTBdAPASEghrgT2QgBEzgUCjQgTCiAAAsQAABWAdBkQARA3AxB7QAuB0ATBEQAeBrAABjQAACfgxCTQgiBnhICCQhfCqgMAZQgwBoAABYQAABBAKAUA4xscIAAAAA4JspQABAHACAHQA5EUgXDBQgRCSgvC4QgbBmgyC6QgkCcAABwQAACmCrDfQBMBjCjCjAXNPpQAUAyAAAe");
	this.shape_75.setTransform(467.6,439);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6633FF").s().p("AgiAjQgPgOAAgVQAAgTAPgQQAPgOATAAQAVAAAOAOQAPAQAAATQAAAVgPAOQgOAPgVAAQgTAAgPgPg");
	this.shape_76.setTransform(890.2,632.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("EgmuAcwQgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPgEAyhASDQgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgEgsCgDNIgFgCIgQgEQgmgKgkgRQh+g8hmiLQixjzAAlYQAAivAuiUQAsiQBXh4QCyjzD6AAQD7AACxDzQBKBmAsB4QgXgCgXAAQj6AAiyDzQixDzAAFYQAADHA8CmQgfgDgdgGg");
	this.shape_77.setTransform(533.9,332.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFF00").s().p("EgjtAicQgOgOAAgVQAAgUAOgQQAPgOAVAAQAUAAAPAOQAPAQAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgEAjygGWQgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgA7iouIgDgOIADAOIgIAAIgPAAIgTgBIgBAAIAAAAQjkgQiljiQgXgggTggQgthLgehTQg8imAAjHQAAlYCxjzQCyjzD6AAQAXAAAXACQBlAKBYAyQgoCOAACjQAAFYCxDzQBYB4BpA8QghB1g9BmQgUAggXAgQiuDvj2AEIAAAAg");
	this.shape_78.setTransform(489.6,415.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0000FF").s().p("EAVpAnyQgOgPAAgUQAAgVAOgPQAPgPAUAAQAVAAAOAPQAPAPABAVQgBAUgPAPQgOAOgVAAQgUAAgPgOgA2vh8QgPgPAAgUQAAgVAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAVQAAAUgOAPQgPAPgUAAQgVAAgPgPgAMNuEIgFgBQhpgIhcg1Qhpg8hXh4Qiyj0ABlXQgBikAoiNQAtibBdiAQCxjzD6AAQD7AACxDzQBLBnAsB4QjYAZifDYQiwDzAAFXQgBDHA8CmQgbADgcAAIghgBg");
	this.shape_79.setTransform(311.1,403.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF33CC").s().p("AAaM+IgHAAIgFAAIgOAAQhJgChEgYQiYg2h4ijQixjzAAlYQAAi4A0icQAriFBShxQCxjzD6AAQD6AACyDzQBrCSAqC4QhDA1g6BQQixDyAAFYQAACJAcB5QiBBoieAFIgEAAg");
	this.shape_80.setTransform(522.1,230.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00FF00").s().p("EAeoAl4QgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgAyRh0QgPgOAAgUQAAgVAPgPQAPgOAUgBQAVABAOAOQAPAPAAAVQAAAUgPAOQgOAQgVgBQgUABgPgQgA2gsKIgXAAIgWgCQjdgUiijdQgXgggTggQguhMgdhTQg8ilAAjHQAAlYCxjzQCejYDYgYQAbgDAbAAQBSAABLAaQg0CcAAC5QAAFYCxDzQB4CjCYA2QggBggzBWQgUAggXAgQivDwj4ADIgFAAg");
	this.shape_81.setTransform(596.6,437.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAiM+IgGAAIgQAAQjvgHisjsQgXgggTggQhJh6giiPQgch5AAiJQAAlXCxjzQA7hQBCg1QCHhuCnAAQA1AAAxALQg5ChAADDQAAFYCxDyQCNDAC6AoQgfBYgvBPQgUAggXAgQihDdjeAUIgjACIgEAAg");
	this.shape_82.setTransform(608.7,276.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF6600").s().p("EgRGAhNQgOgOAAgVQAAgUAOgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPgAIcnfIgKAAQgtgCgqgJQi6goiNjAQiwjzAAlYQAAjDA5iiQAqh9BNhpQCyjzD7AAQD6AACxDzQBdB/AsCbQhpA9hXB4QiyDzAAFYQAACjApCNQhtA/h+AAIgFAAg");
	this.shape_83.setTransform(622.1,361.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6633CC").s().p("EAsqAM+IgCgEIACAEIgIAAIgOAAIgLAAQjrgMiojnQgXgggTggQg+hmghh1QgoiNAAijQAAlXCxjzQBYh4Bpg9QBsg+B/AAQD6AACyDzQCxDzAAFXQAAEriHDgQgUAggWAgQioDljnAOIgVAAIAAAAgEgsmAM+Qj3gDiwjwQgXgggUggQiGjgAAkrQAAlXCxjzQCyjzD6AAQBrAABeAsQguCUAACvQAAFYCxDyQBmCMB+A7QgiBrg3BdQgUAggYAgQioDnjqAMIgZAAIgFAAg");
	this.shape_84.setTransform(471.5,276.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(3,1,1).p("EAscgN5QABACAAACEAsIgONQAJAMAIAMQAxBFAJAvQAFAVAAB8QAABsiHE7QhNCzgQApQgqBtAAAqQAAA6BkCjQCEDXAwByQAVAxAiBBQAUAlAEAeQAEAhAABqQgBBHgCEDAfe1PQAHAEAHAHQA0A0AWC/QAMBsAABnQAAC8geCFQgTBVguBvQgxB1gRBEQgdB5AACmQAACAAqB2QAdBSBABwQBLCCASAqQAqBgAABXAtE1ZQgDAKgDAJQg/DIgGArQgFAnAAEIQAAACAACTQADCaARAqQAPAoAtBZQBJCTAHAOQAzBqAgCrQAbCNAABgQAABJhBD6QhHERgEAdA5GuXQgCAPgCATQgEAfgGApQgGAwAAAQQAAB+A2BuQAiBFBXBvQBYBxAgA+QA3BqAAB1QAABsilE8QhsDPgGAMQgzBoAAAhQAAAuBNDSQBRDbACAKAj2tlQAFCYgQBIQgTBQAABHQAAAoAlBBQAVAjA+BZQB5CrAABLIgzB7QgyCOAABeQAABHAJAwQAGAhAVA+QA8C0AsDiAH31EQhpBvgZA6QgJAWgBAUQgBAMACAVQAAA7AlBJQAYAtA7BUQA9BXAVAnQAmBFAAA2QAAACgoCcQgoC/AAC6QAACSANBBQAJAvAYAYQAiAjAIAOQAZAuARBmQAPBigBCZQAABTgECSAVetvQgCBUBLDtQAmB2AnBvQAAAZgWBAQgNAngjBhQhGDJAAB7QAAALBLD1QBLD1AABUQAAAagoCvQgoCvAAA7A5kt2IAAAAA48uDQABAHACAHEgjQgVZQARAqB2GZQBzGOAAAGQAAB8hzExQhDCugMAlQgkBrAAAvQAABdA0DwQAcB+AoCrEgtGgN5QAAABgBADQgEAegcCiQgbCoAAAkQAAAiAWBGQANArAjBuQBGDuAAD0QABDrgLAZQgXAzgWAUQgTARgQAqIhgDvEgugAMqQgLArgFAaQgBAGgBAFQgBAHAAAEQgBAKAAA2QAAB/AsBbQAjBJBbBeAgPPAQA1BFArBhQAiBLATBF");
	this.shape_85.setTransform(474.7,378);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("EgngAjoQgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPgEAxvAY7QgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgEgrQgKFIgFgCIgQgEQgmgKgkgRQh+g8hmiLQixjzAAlYQAAivAuiUQAsiQBXh4QCyjzD6AAQD7AACxDzQBKBmAsB4QgXgCgXAAQj6AAiyDzQixDzAAFYQAADHA8CmQgfgDgdgGg");
	this.shape_86.setTransform(530.9,306.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFF00").s().p("EgkTApUQgOgOAAgVQAAgUAOgQQAPgOAVAAQAUAAAPAOQAPAQAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgEAjNAAhQgPgOAAgUQAAgUAPgPQAOgPAVAAQAUAAAPAPQAPAPAAAUQAAAUgPAOQgPAPgUAAQgVAAgOgPgA6kvmIgDgOIADAOIgIAAIgJAAIAFgiIgFAiIgFAAIgUgBIAAAAIgBAAQjkgRikjhQgYgggTggQgthLgehTQg7ilgBjIQABlYCxjzQCxjzD6AAQAXAAAXACQBlAKBZAzQgoCNgBCjQABFYCxDzQBXB4BpA9QghB0g9BmQgUAggXAgQiuDvj2AEIAAAAg");
	this.shape_87.setTransform(485.4,389.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00FF00").s().p("EAd2AswQgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgAzDFDQgPgOAAgUQAAgVAPgPQAPgOAUgBQAVABAOAOQAPAPAAAVQAAAUgPAOQgOAQgVgBQgUABgPgQgA1uzCIgXAAIgWgCQjdgUiijdQgXgggTggQguhMgdhTQg8ilAAjHQAAlYCxjzQCejYDYgYQAbgDAbAAQBSAABLAaQg0CcAAC5QAAFYCxDzQB4CjCYA2QggBhgzBVQgUAggXAgQivDwj4ADIgFAAg");
	this.shape_88.setTransform(593.6,411.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0000FF").s().p("EAVpAuqQgPgPABgUQgBgVAPgPQAPgPAVAAQAUAAAOAPQAQAPgBAVQABAUgQAPQgOAOgUAAQgVAAgPgOgA2vE7QgPgPAAgUQAAgVAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAVQAAAUgOAPQgPAPgUAAQgVAAgPgPgANy09IgGAAIgCAAIAFgTIgFATQhogJhbg0Qhpg9hXh4QixjzgBlXQABikAoiNQAsibBdh/QCxjzD6AAQD7AACxDzQBLBmAsB4QjZAYieDYQixD0ABFXQgBDIA8ClQgbACgcAAIgggBg");
	this.shape_89.setTransform(303.1,377.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF33CC").s().p("AAaM+IgHAAIgFAAIgFAAIgJAAQhJgChEgYQiZg2h3ijQixjzAAlYQAAi4A0icQAriGBShwQCxjzD6AAQD6AACyDzQBrCTAqC3QhDA1g6BQQixDyAAFYQAACJAcB5QiBBpifAEIgDAAg");
	this.shape_90.setTransform(524.1,160.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAiM+IgGAAIgQAAQjvgIisjrQgXgggTggQhJh5giiQQgch5AAiJQAAlXCxjzQA7hQBCg1QCHhuCnAAQA1AAAxALQg5ChAADDQAAFYCxDyQCNDAC6AoQgfBYgvBPQgUAggXAgQihDdjeAUIgjACIgEAAg");
	this.shape_91.setTransform(610.7,206.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6633CC").s().p("EAspAM+IgBgEIABAEIgDAAIgSgYIASAYIgEAAIgOAAIgLAAQjqgMipjnQgXgggTggQg+hmghh0QgoiOAAijQAAlXCxjzQBYh4Bpg8QBsg/B/AAQD6AACyDzQCxDzAAFXQAAEsiGDfQgVAggWAgQioDljnAOIgWAAIAAAAgEgsmAM+IgVAAIABgEIgBAEQjpgNipjmQgXgggTggQiHjfAAksQAAlXCxjzQCyjzD6AAQBrAABdAtQgtCUAACuQAAFYCxDyQBmCLB9A8QggBqg5BeQgTAggYAgQinDnjrAMIgZAAIgFAAg");
	this.shape_92.setTransform(473.5,206.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF6600").s().p("EgR4AoFQgPgOABgVQgBgUAPgPQAPgPAVAAQAUAAAOAPQAQAPgBAUQABAVgQAOQgOAPgUAAQgVAAgPgPgAJOuXIgFAAQgHgHgIgEQAIAEAHAHIgGAAQgsgCgqgJQi6goiNjAQivjzAAlYQAAjDA3iiQAsh9BMhpQCyjzD7AAQD6AACxDzQBdB/AtCbQhqA9hYB4QiwDzAAFYQAACjAoCNQhtA/h+AAIgFAAg");
	this.shape_93.setTransform(619.1,335.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(3,1,1).p("AJT1ZQhlEkh2D+QgfBEgJAmQgLAvAABVQAACaAXBJQAKAcAtBIQAmA/AWBgQAfCKALEFQAGCBBACqQA8ChAAB4QAAAIgKA7QgKA8AAAXArz13QgDAKgDAKAsb1QQgeFxAuCpQAMAtAYBPQASBLAABnQAACohpElQg+CsgKAgQghBoAAA9QAAAmAWAhQANAUAjAiQAjAiANAUQAWAhAAAmQAAA2gJA0QgJAwgWBCAiZuKQAkBbAJBZQADAdAABXQAABWgnBtQgYBDg+CBQg/CEgXA9QgnBpAABRQAAAxAWA5QAIASAoBYQBGCUAACCQAAAxgZB4QgZB6AAA2QAAA3AKAUAW5uJQgZD9giCNQgVBUglBQQgiBGgKA6QgTBfAADHQAAAmAnBaQAYA2A+CEQB9ERAACZQAACRg9CdQgPAlgdBBQgWAvgDAOEgr1gOXQAAABgBADEgrNgOKQAADlgCBtQgEDOgODeQgHB8g9DIQg9DJgBAFQgDA9gBCTQgCCHgEA5QgKCOhDCCQgQAggcA1QgTAsAAAiQAAA0AWAnQAPAYArA8Egh1gVkQAKAyAAB4QAAARgZDsQgZDtAAAyQAACkA8B+QAiBGAIAXQASA3AABDQAAAwgWA3QgNAhgjBNQhGCvAAELQAADlAZA2QAJAUAfAkQAlAuAcAtA3ruhQABAHACAHA31u1QgCAPgCATA4TuUIAAAAA4nuEQAHAiACAVQABAMAAAXQAAARgoCpQgoCpAAAtQAAAWgFA7QgFA7AAAKQAAA/AYAlQALATAoAiQAkAeAQAhQAXAvAABSQAABZgOAmQgEAMgbAiQgtA7AADzQAAA7gBBiQABBMALAsQAcBrCDAuEAgvgVtQAIAFAGAGEAg5gVZQgEBnAIFiQAGFJgKBxQgSDehPDBQgsBrgGAUQgXBCAAA+QAACPApBoQAaBDA/BaQBDBeAXA1QAoBdAAB+EAt7gOKQgTAlgMA+QgNBAAAA1QAABQAZBwQANA3AqCbQBQEiAACoQAABcgfBGQgUAsgxA9QgzBBgRAhQggA+AABOQAAA4BZDJQAwBqBJCiEAtZgOrQAJAMAJAMEAttgOXQABACABAC");
	this.shape_94.setTransform(465.6,251);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6633FF").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAQgOATAAQAVAAAOAOQAPAPAAAUQAAAUgPAPQgOAPgVAAQgTAAgQgPg");
	this.shape_95.setTransform(884.2,752.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("EgnRA1xQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAPQgOAPgVAAQgUAAgPgPgEAx+ArEQgOgPAAgUQAAgVAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAVQAAAUgPAPQgPAOgUAAQgVAAgPgOgEgrfgcNIgFgCIgQgEQgmgLgkgRQh+g7hmiMQixjzAAlXQAAivAuiUQAsiQBXh4QCyjzD6AAQD7AACxDzQBKBlAsB4QgXgCgXAAQj6AAiyDzQixD0AAFXQAADIA8CmQgfgEgdgFg");
	this.shape_96.setTransform(531.4,292.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00FF00").s().p("EAeFA+4QgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgAy0XMQgPgPAAgUQAAgVAPgPQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAAUgPAPQgOAPgVAAQgUAAgPgPgEgV9glKIgXgBIgWgBQjdgUiijdQgXgggTghQguhLgdhTQg8ilAAjHQAAlYCxjzQCejYDYgYQAbgDAbAAQBSAABLAaQg0CcAAC5QAAFYCxDzQB4CjCYA2QggBggzBVQgUAhgXAgQivDwj4ADIgFAAg");
	this.shape_97.setTransform(594.1,397.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFF00").s().p("EgkQA7cQgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgEAjPASpQgOgOAAgVQAAgUAOgPQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgEga/ghuIgDgOIADAOIgIAAIgJAAIAEgiIgEAiIgGAAIgTgBIgBAAIAAAAQjkgRiljhQgXgggTghQgthKgehTQg8imAAjHQAAlYCxjzQCyjzD6AAQAXAAAXACQBlAJBYAzQgoCNAACkQAAFYCxDzQBYB4BpA8QghB1g9BlQgUAhgXAgQiuDvj2AEIAAAAg");
	this.shape_98.setTransform(487.1,375.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0000FF").s().p("EAVpBAyQgPgPAAgUQAAgVAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAVQAAAUgOAPQgPAPgUAAQgVAAgPgPgA2vXDQgOgOAAgVQAAgUAOgPQAPgPAUAAQAVAAAOAPQAQAPAAAUQAAAVgQAOQgOAPgVAAQgUAAgPgPgEANUgnFIgGAAIgCAAIAFgUIgFAUQhogJhbg0Qhpg9hXh4QixjzgBlYQAAijAoiNQAtibBdiAQCxjzD6AAQD7AACxDzQBLBnAsB4QjYAYifDYQiwDzAAFYQgBDHA8ClQgbADgcAAIgggBg");
	this.shape_99.setTransform(305.1,363.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF6600").s().p("EgRpA6NQgPgOAAgVQAAgUAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAUQAAAVgOAOQgPAPgUABQgVgBgPgPgEAI/gggIgFAAQgHgGgIgEQAIAEAHAGIgGAAQgsgBgqgJQi6gpiNjAQivjzAAlXQAAjDA3iiQAsh9BMhpQCyjzD7AAQD6AACxDzQBdB/AtCbQhqA8hYB4QixD0AAFXQAACkApCNQhtA+h+AAIgFAAg");
	this.shape_100.setTransform(619.6,321.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6633CC").s().p("EAsqAM+IgCgEIACAEIgEAAIgSgYIASAYIgEAAIgOAAIgLAAQjrgMiojnQgXgggTggQg+hmghh0QgoiOAAijQAAlXCxjzQBYh4Bpg8QBsg/B/AAQD6AACyDzQCxDzAAFXQAAEsiHDfQgUAggWAgQioDljnAOIgVAAIAAAAgEgsmAM+IgVAAIABgEIgBAEQjqgMiojnQgXgggTggQiHjfAAksQAAlXCxjzQCyjzD6AAQBrAABdAtQgtCUAACuQAAFYCxDyQBmCLB9A8QggBqg5BeQgTAggYAgQioDnjqAMIgZAAIgFAAg");
	this.shape_101.setTransform(472.5,76.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(3,1,1).p("AUJxVQAAACAAABQgDCJARBZQALA9AfBNQAnBhAPA1QAgBtASCbQARCVADDNQACBrgCBsQAACPhIDEQhLDMhxCTAGt4NQguDaghCaQg9EmAAA3QAAAEDcG5QDcG4AAAEQAADYiNEHQgbAxhzDDQhhClg8B6AuO41QgDAKgDAJAve4hQATBaA/DyQAlCLBUE/QCdJdAACSQAABPgZA8QgWAzgwA2QgRAShbBZQhPBOg6BGQiCCcgHC4QgCA6AJBwQAKB9AABBAlKxVQhbCkgWBoQgHAkAABhQAABQAvCIQAYBIBPC+QBICwAfBfQAvCUAABmQAADHjiFXQg5BWhkCKQhKBlgDANA6ux9QgFAVgDAVQgmD6CeG3QAsB5BTDUQA9CjAAA/QAACmiQF+QgiBahECpQgyB7gEAUEgkGgY0QAUB4AACBQAABlgyC2QgyC1AABDQAADfAyDhQAeCKBQD1QBRD6AdB/QAyDbAADUQAACqgCAgQgHBegfBUA6QxzQgCAPgCASA6GxfQABAGACAHA6uxSIAAAAEguQgRVQAAABgBACEgtygRVQAAACAAABQgBCBgdCaQgeCbAABkQAACzAlCNQAZBdA6B6QBACFASA6QAmB0AACJQAAD5h5FVQghBehIDAQg+CsggCEEArSgRVQABABAAACEArTgS5QgOBFgDAiQAAABAAABQgDAXAAAqQAACAAyCAQAaBDBUCaQBOCQAgBfQAyCSAACfQAADbgvCfQglB/hKBtQgEAFiBClQhMBighBXAeU4rQAHAEAHAGAeJ4hQBdDyA8FoQAvEWAACDQAAB7gWBTQgOA1giBAQglBEgLAmQgWBGAABkQAAEzCMLn");
	this.shape_102.setTransform(479.1,189);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAiM+IgGAAIgQAAIgJAAIAAgCIAAgBIAAABIAAACQjpgMipjnQgXgfgTgiQhJh5giiPQgch5AAiJQAAlXCxjzQA7hQBCg2QCHhtCnAAQA1AAAxAKQg5CjAADCQAAFYCxDyQCNDAC6ApQgfBXgvBOQgUAigXAfQihDdjeAUIgjACIgEAAg");
	this.shape_103.setTransform(607.7,-4.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF33CC").s().p("AAaM+IgHAAIgFAAIgFAAIgJAAQhKgChDgYQiYg1h4ikQixjzAAlYQAAi4A0icQAriFBShxQCxjzD6AAQD6AACyDzQBqCTArC2QhDA2g6BQQixDyAAFYQAACJAcB5QiBBoieAFIgEAAg");
	this.shape_104.setTransform(521.1,-51);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00FF00").s().p("EAeABKdQgOgPAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgVAAgPgPgEgS5AiwQgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPgEgV4gwvIgXAAIgWgCIgKgBQjXgYiejYQgXgfgTghQguhLgdhUQg8ilAAjHQAAlYCxjzQCejYDYgYQAbgDAbAAQBSAABLAaQg0CcAAC5QAAFYCxDzQB4CkCYA1QggBhgzBVQgUAhgXAfQivDxj4ACIgFAAg");
	this.shape_105.setTransform(591.6,390.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0000FF").s().p("EAVpBMWQgOgOAAgVQAAgUAOgPQAPgPAUAAQAVAAAOAPQAPAPABAUQgBAVgPAOQgOAPgVAAQgUAAgPgPgEgWvAioQgPgPAAgUQAAgVAPgPQAPgOAVAAQAUAAAPAOQAOAPAAAVQAAAUgOAPQgPAPgUAAQgVAAgPgPgEANdgypIgFgBIgDAAIAGgTIgGATQhngIhag1Qhqg8hYh4QixjzABlYQgBikAoiNQAtibBch/QCyjzD6AAQD7AACxDzQBLBmAsB5QjYAYifDYQixDzAAFYQAADHA8ClQgbADgcAAIghgBg");
	this.shape_106.setTransform(302.1,356.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFF00").s().p("EgkTBHBQgOgPAAgUQAAgVAOgPQAQgOAUAAQAVAAAOAOQAPAPAAAVQAAAUgPAPQgOAPgVAAQgUAAgQgPgEAjMAeOQgOgPAAgUQAAgVAOgPQAQgOAUAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgUAAgQgPgEga4gtTIgCgOIACAOIgIAAIgJAAIAFgiIgFAiIgGAAIgTgBIgBAAIAAAAIgIAAQAEgWAEgUQgEAUgEAWQjfgUihjeQgXgfgUghQgthLgehTQg7ilAAjIQgBlYCyjzQCxjzD6AAQAYAAAWACQBlAKBYAzQgoCNABCjQgBFYCxDzQBYB4BqA9QgiB1g9BlQgUAhgXAfQiuDvj2AEIAAAAg");
	this.shape_107.setTransform(484.4,368.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("EgnWBBVQgPgPAAgUQAAgVAPgOQAPgPAUAAQAVAAAOAPQAPAOAAAVQAAAUgPAPQgOAPgVAAQgUAAgPgPgEAx5A2oQgOgPAAgUQAAgUAOgQQAPgOAVAAQAUAAAPAOQAPAQAAAUQAAAUgPAPQgPAPgUAAQgVAAgPgPgEgragnyIgFgBIgQgFIgJgCQghgKgggPQh+g8hmiLQixjzAAlYQAAivAuiUQAsiQBXh4QCyjzD6AAQD7AACxDzQBKBmAsB4QgXgCgXAAQj6AAiyDzQixDzAAFYQAADIA8ClQgfgDgdgGg");
	this.shape_108.setTransform(528.9,285.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6633CC").s().p("EAsqAM+IgCgEIACAEIgFAAIgDAAIgKAAQAEgiAOhFQgOBFgEAiIgEAAIgLgBQjrgLiojnQgXgfgTgiQg+hkghh2QgoiMAAikQAAlXCxjzQBYh4Bpg9QBsg+B/AAQD7AACwDzQCyDzAAFXQAAEsiHDeQgTAigYAfQimDljoANIgVABIAAAAgEgscAM+IAAAAgEgshAM+IgFAAIgUgBIAAgDIAAADQjrgLiojnQgXgfgUgiQiGjeAAksQAAlXCxjzQCyjzD6AAQBrAABeAsQguCUAACvQAAFYCxDyQBlCLB/A8QgiBqg3BdQgVAigXAfQinDnjrALIgUABIAAgDIAAADIgFAAg");
	this.shape_109.setTransform(470.5,-4.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF6600").s().p("EgRuBFyQgOgOAAgVQAAgUAOgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPgEAJEgsEIgGAAQgGgGgHgFQAHAFAGAGIgEAAIgUgBQgigDghgGQi6gpiMjAQixjzAAlYQAAjCA4ijQArh8BOhqQCxjzD7AAQD6AACxDzQBdCAAsCaQhpA9hXB4QixDzgBFYQABCkAoCMQhsA/h/AAIgFAAg");
	this.shape_110.setTransform(617.1,314.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").ss(3,1,1).p("AeU4sQAHAFAHAGAeJ4iQBdDzA8FoQAvEWAACDQAAB7gWBTQgOA1giBAQglBFgLAlQgWBGAABkQAAEzCMLnEArTgS5QgOBFgDAiQAAABAAABQgDAXAAAqQAACAAyCAQAaBDBUCbQBOCPAgBfQAyCSAACfQAADbgvCfQglB/hKBtQgEAFiBClQhMBighBXEArSgRVQABABAAACEguQgRVQAAABgBACEgtygRVQAAACAAABQgBCCgdCZQgeCbAABkQAACzAlCNQAZBdA6B6QBACFASA6QAmB0AACJQAAD5h5FVQghBehIDAQg+CsggCEEgkGgY0QAUB4AACBQAABlgyC2QgyC1AABDQAADfAyDhQAeCLBQD0QBRD6AdB/QAyDbAADUQAACqgCAgQgHBegfBUA6GxfQABAGACAHA6QxzQgCAPgCASA6uxTIAAAAA6ux9QgFAUgDAWQgmD5CeG4QAsB6BTDTQA9CjAAA/QAACmiQF+QgiBbhECoQgyB7gEAUAuO42QgDAKgDAKAve4hQATBaA/DyQAlCLBUE/QCdJdAACSQAABPgZA8QgWAzgwA2QgRAShbBZQhPBOg6BGQiCCcgHC4QgCA6AJBwQAKB9AABBAGt4NQguDaghCaQg9EmAAA3QAAADDcG6QDcG4AAAEQAADYiNEHQgbAxhzDDQhhClg8B6AUJxVQAAACAAABQgDCKARBYQALA8AfBOQAnBhAPA1QAgBtASCbQARCVADDNQACBrgCBsQAACPhIDEQhLDNhxCSAlKxVQhbCkgWBoQgHAkAABhQAABQAvCJQAYBHBPC+QBICwAfBfQAvCUAABmQAADHjiFXQg5BXhkCJQhKBlgDAN");
	this.shape_111.setTransform(481.1,92.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAiM+IgGAAIgQAAIgJAAIAAgDIAAADQjpgMipjnQgXgggTghQhJh4giiQQgch5AAiJQAAlXCxjzQA7hQBCg2QCHhtCnAAQA1AAAxAKQg5CjAADCQAAFYCxDyQCNDAC6ApQgfBXgvBOQgUAhgXAgQihDdjeAUIgjACIgEAAg");
	this.shape_112.setTransform(609.7,-100.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF33CC").s().p("AAaM+IgHAAIgFAAIgFAAIgJAAQhJgChEgYQiZg2h3ijQixjzAAlYQAAi4A0icQAriGBShwQCxjzD6AAQD6AACyDzQBrCSAqC3QhDA2g6BQQixDyAAFYQAACJAcB5QiBBpifAEIgDAAg");
	this.shape_113.setTransform(523.1,-147);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00FF00").s().p("AAaM+IgYgBIgUgBIgKgBQjXgYifjYQgWgggUghQgthKgehUQg8ilABjHQAAlXCwjzQCfjYDYgYQAagDAbAAQBRAABLAaQgzCcAAC5QAAFYCwDyQB4CjCYA2QggBhgzBUQgUAhgXAgQivDxj4ACIgEAAg");
	this.shape_114.setTransform(451,-100.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0000FF").s().p("AgCM9IgGAAIgCAAIAFgUIgFAUQhogJhbg0Qhpg9hXh4QixjzgBlYQAAijAoiMQAticBdh/QCxjzD5AAQD7AACxDzQBLBmAsB5QjYAYifDYQiwDyAAFYQgBDHA8ClQgbADgcAAIgfgBg");
	this.shape_115.setTransform(390.6,-147);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFF00").s().p("AAcM+IgDgOIADAOIgIAAIgJAAIAEgiIgEAiIgGAAIgTgBIAAAAIAAAAIgIgBIAIgpIgIApQjfgTiijeQgXgggTghQguhKgehTQg7imAAjHQAAlXCxjzQCyjzD5AAQAXAAAXACQBkAJBZA0QgoCMAACkQAAFYCxDyQBXB4BqA9QghB1g+BkQgTAhgYAgQiuDvj1AEIAAAAg");
	this.shape_116.setTransform(311.5,-100.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF0000").s().p("AhKM0IgFgCIgRgEIgIgCQgigKgggPQh+g7hliMQixjzAAlYQAAitAtiUQAsiRBYh4QCxjzD6AAQD6AACxDzQBLBmArB4QgWgCgXAAQj7AAixDzQiwDyAAFYQAADHA7CmQgegDgdgGg");
	this.shape_117.setTransform(260.5,-147.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6633CC").s().p("EAsqAM+IgCgEIACAEIgEAAIgEAAIgKAAQAEgjAOhEQgOBEgEAjIgEAAIgLgBQjrgLiojnQgXgggTghQg+hkghh1QgoiOAAijQAAlXCxjzQBYh4Bpg8QBsg/B/AAQD6AACyDzQCxDzAAFXQAAEsiHDeQgUAhgWAgQioDljnANIgVABIAAAAgEgscAM+IAAAAgEgshAM+IgFAAIgVgBIABgDIgBADQjqgMiojmQgXgggTghQiHjeAAksQAAlXCxjzQCyjzD6AAQBrAABdAtQgtCUAACuQAAFYCxDyQBmCMB9A7QggBqg5BdQgTAhgYAgQioDnjqALIgUABIAAgDIAAADIgFAAg");
	this.shape_118.setTransform(472.5,-100.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF6600").s().p("AAQM+IgGAAQgGgHgHgEQAHAEAGAHIgFAAIgTgBQgigDghgGQi5gpiNjAQixjzAAlYQAAjBA4ijQAsh8BNhqQCxjzD6AAQD6AACyDzQBcB/AtCcQhpA8hYB4QixDyAAFYQAACjAoCOQhsA+h/AAIgEAAg");
	this.shape_119.setTransform(675.5,-147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:466.1,y:294.1}},{t:this.shape_35},{t:this.shape_34}]},19).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_36,p:{x:417.6,y:324.9}},{t:this.shape_46,p:{x:901.2,y:393.5}},{t:this.shape_45}]},2).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_46,p:{x:918.2,y:462}},{t:this.shape_55}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_36,p:{x:417.6,y:479.7}},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_36,p:{x:406.6,y:563.7}},{t:this.shape_76,p:{x:890.2,y:632.2}},{t:this.shape_75}]},1).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91,p:{x:610.7,y:206.4}},{t:this.shape_90,p:{x:524.1,y:160.1}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_36,p:{x:398.6,y:581.7}},{t:this.shape_76,p:{x:882.2,y:650.2}},{t:this.shape_85}]},1).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_91,p:{x:609.7,y:76.4}},{t:this.shape_90,p:{x:523.1,y:30.1}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_36,p:{x:400.6,y:683.7}},{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_36,p:{x:397.6,y:750.7}},{t:this.shape_46,p:{x:881.2,y:819.3}},{t:this.shape_102}]},1).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[]},1).wait(7));

	// Text
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AkNEaQgNgNAAgTQAAhhDihpIA4gaIAGgFIBWiYQgzBHgXAVQgWAWgXgBQgUAAgPgRQgPgRAAgWQAAgcAjg7IBKh/QALABAPAAQAMAAAXgCIhfCbQgpBDAAAVQAAAVAUAAQAzAABui7IAthMQALABAQAAQANAAAUgCQg9BfhnC6QA7geApgkQApgkAzhCQAHgIACAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAHg2A7Qg8BChfA0IgYAqQhGCAhNA9QhQBBg6gBQgUAAgOgMgAg1A1QjeBvAABXQAAAmApAAQAzAAA0g5QAzg4BMiNIAFgKIg2Acg");
	this.shape_120.setTransform(-30.3,212.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("ACYlIQAOADAMAAQANAAATgDIiRDqQA0hFAYgWQAYgVAXgBQAaABARAWQASAXAAAgQAABQhjBAQhRA1gtAAQgeAAAAgcQAAgKAFgPIi7E5QgSgFgKAAQgQABgQAFgABBhUQhBBXAAAhQAAAZAXAAQAtAABJhWQBIhYAAg2QAAghgcAAQgkAAhUB0g");
	this.shape_121.setTransform(-60.9,203.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("ACYlIQANADANAAQANAAATgDIiRDqQA0hFAZgWQAXgVAXgBQAaABASAWQARAXAAAgQAABQhjBAQhRA1gtAAQgeAAAAgcQAAgKAFgPIi7E5QgRgFgLAAQgQABgQAFgABBhUQhBBXAAAhQAAAZAXAAQAtAABJhWQBIhYAAg2QAAghgcAAQgkAAhUB0g");
	this.shape_122.setTransform(-87.4,203.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgGB6QgPgSAAgZQAAgaAQgfQgxBEgaAZQgaAXgYAAQgaAAgRgWQgSgWAAgiQAAhdCEhIQA6ggAjAAQAeAAAAAdQAAAIgEAOIAZgvQAPADALAAQANAAAVgDIhWCOQgtBLAAAYQAAAXATAAQAUAAArgtQArgsAshBQADgFADAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAALhIBTQg6BFghAAQgWAAgNgQgAhSgqQhJBXAAA2QAAAgAcAAQAiAABThwQBDhbAAgiQAAgYgWAAQgsAAhJBYg");
	this.shape_123.setTransform(-105,196.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AjEFbQAAgMAoAAQAXAAAhAGQBBgdAhgpQAkgtBHiPIAIgQIi9AAQguBVghAqQgjApg4AmQh9BVhzAAQhDAAgqgcQgrgdAAguQAAgYAOgRQAOgSAVAAQAfAAAAAgQABAPgLAMQgJALgPAAQgWAAAAgXQABgMgFAAQgIAAgBAaQAAAoAmAaQAmAZA6AAQBnAABOg9QBNg9BjifIiXAAIAFgKICYAAIAUgfQBnilBZhCQATgOAggQQAggRAHAAQADABAAADQAAADgKAEQg8AYgvA8QgwA7hRCbIC9AAQBciiBrhaQBrhbBmAAQAyAAAgAbQAfAbAAArQAABOheA1QgpAXgPAAQgEAAAAgEQAAgCAOgGQA3gVAjgoQAigoAAgqQAAgngbgYQgbgZgrAAQiLAAhvChQgTAbhhC6QhoDJiOAuQArAFAYAAQBYAAA+g6QA2gyArhCQAFgHADAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAFguA7Qg2BGgtAaQgtAahBAAQgpAAgvgHQgkAKgeAAQgZAAAAgLgAnlAPQghgiAAg2QAAhpBihaQBihZB0AAQBmAAAABaQAAAegVArQgVAsAAAOQAAAlAoAAQAZAAAfgXQAfgXARgfQACgFACAAQAEAAAAAEQAAAKgcAfQgrAugnAAQgbAAgUgTQgSgVAAgcQAAgbAUgoQAZgyAAgTQAAgZgXgPQgYgPgmAAQhtAAhgBYQhfBXAABkQAAAzAfAgQAgAgAxAAQBhAABBhYQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAEAAAAAEQAAALgfAbQhAA5hMAAQg1AAghgig");
	this.shape_124.setTransform(-142.9,175.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AkNEaQgNgNAAgTQAAhiDihoIA4gaIAGgFIBWiYQgzBGgXAWQgWAVgXABQgUgBgPgQQgPgRAAgYQAAgbAjg7IBKh/QALACAPAAQAMAAAXgDIhfCcQgpBCAAAVQAAAVAUAAQAzAABui7IAthMQALACAQAAQANAAAUgDQg9BghnC6QA7gfApgkQApgkAzhCQAHgIACAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAHg2A7Qg8BChfA0IgYArQhGB+hNA/QhQBAg6AAQgUgBgOgMgAg1A1QjeBvAABXQAAAlApAAQAzAAA0g4QAzg4BMiNIAFgKIg2Acg");
	this.shape_125.setTransform(583.6,246.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("ACYlIQANADANAAQANAAATgDIiRDqQA1hGAYgVQAXgWAXAAQAaAAASAXQARAWAAAiQAABPhjBBQhRA1gtAAQgeAAAAgdQAAgKAFgOIi7E4QgSgFgKAAQgQAAgQAHgABBhUQhBBXAAAhQAAAZAXAAQAtAABJhWQBIhYAAg3QAAgfgcAAQgkgBhUB0g");
	this.shape_126.setTransform(553,237.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("ACYlIQAOADAMAAQANAAATgDIiRDqQA0hGAYgVQAYgWAXAAQAaAAARAXQASAWAAAiQAABPhjBBQhQA1guAAQgeAAAAgdQAAgKAFgOIi7E4QgRgFgLAAQgQAAgQAHgABBhUQhBBXAAAhQAAAZAXAAQAtAABJhWQBIhYAAg3QAAgfgcAAQgkgBhUB0g");
	this.shape_127.setTransform(526.5,237.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgGB5QgPgRAAgZQAAgaAQgfQgxBFgaAYQgaAXgYAAQgaAAgRgVQgSgXAAgiQAAhdCEhIQA6ggAjAAQAeAAAAAdQAAAJgEANIAZgvQAPADALAAQANAAAVgDIhWCOQgtBLAAAYQAAAXATAAQAUAAArgtQArgsAshBQADgFADAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAAKhIBUQg6BFghAAQgWAAgNgRgAhSgqQhJBXAAA2QAAAgAcAAQAiAABThwQBDhbAAgiQAAgYgWAAQgsAAhJBYg");
	this.shape_128.setTransform(509,230.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AjEFbQAAgMAoAAQAXAAAhAGQBBgcAhgqQAkgtBHiPIAIgQIi9AAQguBVgiApQghApg5AnQh8BVh0AAQhDAAgqgdQgrgcAAguQAAgYAOgRQAOgSAUAAQAhAAAAAgQgBAQgJALQgKALgPAAQgXAAAAgXQACgMgFAAQgJAAAAAaQAAAoAmAaQAmAZA6AAQBoAABNg9QBNg9BjifIiWAAIADgKICZAAIAUgfQBnilBZhCQATgOAggQQAfgRAIAAQADABAAADQAAADgKAEQg8AYgwA8QgvA7hRCbIC9AAQBciiBrhaQBrhbBmAAQAyAAAgAbQAfAbAAArQAABOheA1QgpAXgPAAQgEAAAAgEQAAgDAOgFQA3gWAignQAjgoAAgqQAAgngbgYQgbgZgrAAQiMAAhuChQgTAbhhC6QhpDJiNAuQAqAFAZAAQBYAAA+g6QA1gxAshDQAFgHADAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAFguA7Qg2BGgtAaQguAahAAAQgpAAgvgHQgkAKgeAAQgZAAAAgLgAnlAOQghggAAg3QAAhpBihaQBihZB0AAQBmAAAABaQAAAfgVAqQgVArAAAPQAAAlAoAAQAYAAAggXQAfgXARgfQACgFACAAQAEAAAAAEQAAAKgcAfQgrAugnAAQgcAAgSgTQgTgVAAgcQAAgbAUgoQAZgyAAgTQAAgZgYgPQgXgPgmAAQhtAAhfBYQhgBXAABkQAAAzAfAgQAfAgAyAAQBgAABChYQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAEAAAAAEQAAAKgfAcQhBA5hLAAQg0AAgigjg");
	this.shape_129.setTransform(471,209.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AkNEaQgNgNAAgTQAAhhDihpIA4gaIAGgFIBWiYQgzBHgXAVQgWAWgXgBQgUAAgPgRQgPgRAAgWQAAgcAjg8IBKh+QALABAPAAQAMAAAXgCIhfCbQgpBDAAAVQAAAVAUAAQAzAABui7IAthMQALABAQAAQANAAAUgCQg9BfhnC6QA7geApgkQApgkAzhCQAHgIACAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAHg2A7Qg8BChfA0IgYAqQhGCAhNA9QhQBBg6gBQgUAAgOgMgAg1A1QjeBvAABXQAAAmApAAQAzAAA0g5QAzg4BMiNIAFgKIg2Acg");
	this.shape_130.setTransform(1284.7,402.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("Ag4DuQgPgSAAgaQABgaARgjQhVB5gqAAQgaAAgRgWQgSgWAAgiQAAhRBkhBQBQgzAtAAQAdAAABAcQgBAOgHARICtkjQARAFAQAAIAegCQi4EigwBRQguBSgBAWQABAWATAAQAsAABqibQADgFADAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIgFAIIgVAdQhdB/gqAAQgXAAgOgQgAiFBJQhIBXAAA2QAAAhAbAAQAnAABfiIQAzhJAAgbQAAgZgYAAQgrAAhJBXg");
	this.shape_131.setTransform(1233.6,374.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AADDvQgOgSAAgZQAAgiAkg3QA6hWAAgQQAAgSgUAAQgdAAgyA5QgwA3hWCaQgPgDgKAAQgLAAgSADIBIiCQAPgcAeg2IBiinIBKh+QAPADAKAAQAUAAARgFIiWD0IhMB9QBbiHA1AAQAVAAAQASQAOARAAAaQAAAigrA/QgwBHAAASQAAAVAVAAQAmAABYh7IAPgVIAKgLQACgFAEAAQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAAAQAAAEgGAFIgVAdQhcB/gtAAQgXAAgPgQg");
	this.shape_132.setTransform(1192.9,374.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AhkCpQgPgRAAgYQAAgeAagsIBSiJIgzAAIAGgHIAwAAIA5heQAOADAOAAQANAAAPgDIg4BeIBAAAIgFAHIhAAAIhsC6QgTAhAAAVQAAAVAWAAQAtAABpiaQADgFADgBQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIgFAIIgWAdQhbB+gtAAQgYAAgPgQg");
	this.shape_133.setTransform(1172,381.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("Ah7CGIgeACIBQiCQA8hhAAgXQAAgOgLAAQgbAAhIBpQgEAHgEAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAJgMQBLhkAbAAQAmAAAAAyQAAAmgnA9QAYgcAXgTQATgsAcgdQAbgdAWAAQAPAAAAANQAAAYhEArIggAUIgGAFQgHAXAAANQAAApAfAAQAmAAAtg+QAKgLADAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAAEgeAfQglApghAAQglAAAAgrQAAgNAGgVQgeAagTAaQgTAbgwBRIgegCg");
	this.shape_134.setTransform(1150.3,386.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AheCxQgPgQAAgYQAAgdAig6IBLh/QAPACAJAAQANAAAYgCIhuC0QgYAoAAAWQAAAVAXAAQArAABtiaQADgFACgBQABAAABABQAAAAAAAAQABABAAAAQAAABAAABIgFAIIgVAdQhbB+gwAAQgXAAgQgQgAAjiTQAAgPAPgPQAPgPARAAQAVAAAAAUQAAASgOAPQgPAPgRAAQgWAAAAgXg");
	this.shape_135.setTransform(1126.8,380.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgcE/QgcgYAAgpQAAg/A5g8QA5g+A7AAQAfAAAVAUQAUAVABAfQAAATgMAcQgMAdgIAAQgEAAAAgEIACgGQAZglAAgeQAAgcgSgQQgTgSgdAAQg3AAg0A6Qg0A7AAA8QAAAgAWAVQAWAWAgAAQBKAAA+hIQA/hJgBhXQAAhRhNglIgdADQgLACgMAAQglAAAAgMQAAgJAeAAQAXAAAkAJQAygQAegnQAdgnABgzQgBgwgmgoQhqBShfDDQg5B5gwA2QgvA0hXArQhmAyhQAAQhBAAgsgeQgrgeAAgtQAAgZAPgSQAPgSAUAAQAeAAAAAhQAAARgKAMQgKALgPAAQgYAAABgaQAAgLgCAAQgIAAAAAaQAAApAnAbQAoAaA8AAQBrAABYhPQAlgiAcglQAcgmBjiXQAwhJBDhLQBEhLAvggQhOhBiRAAQjPAAiYCVQh8B6gBBrQAAA3AjAgQAjAgA9AAQBiAABpheQBphdAAhZQgBhHhIAAQhJAAhTBRQhUBRAABGQAAASAMAMQALANARAAQAHABAAADQAAAEgJAAQgXAAgQgWQgRgVAAgeQAAhLBUhIQBThIBYAAQBVAAAABOQAABfhsBfQhrBhhoAAQhDAAgogpQgqgpAAhEQABiJCbhyQCdhyC9AAQCMAABjBAQBag4BUAAQBBAAAoAnQAoAnAABAQgBAZgHAfQgHAegFAAQgFAAgBgFIACgEQANgjAAgnQAAg+glglQglglg7AAQhRAAhWA1QBEAzABBEQgBBsiUAVQB6AqABBxQAABUhIA/QhIA/hgAAQgsAAgbgXg");
	this.shape_136.setTransform(1085.5,367.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AkNEaQgNgNAAgSQAAhjDihpIA4gaIAGgDIBWiYQgzBGgXAVQgWAVgXAAQgUABgPgSQgPgQAAgXQAAgcAjg8IBKh/QALACAPAAQAMAAAXgDIhfCcQgpBDAAAUQAAAXAUAAQAzAABui7IAthOQALACAQAAQANAAAUgDQg9BhhnC5QA7gfApgjQApgkAzhBQAHgJACAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAHg2A8Qg8BBhfA1IgYApQhGCAhNA9QhQBBg6AAQgUAAgOgNgAg1A2QjeBuAABYQAAAkApABQAzgBA0g4QAzg4BMiMIAFgKIg2Acg");
	this.shape_137.setTransform(620.7,369.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgGB5QgPgQAAgaQAAgaAQgfQgxBFgaAXQgaAYgYAAQgaAAgRgWQgSgWAAgiQAAhcCEhJQA6ggAjAAQAeAAAAAdQAAAIgEAOIAZgvQAPADALAAQANAAAVgDIhWCOQgtBLAAAYQAAAXATAAQAUAAArgtQArgtAshAQADgFADAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAAKhIBUQg6BFghAAQgWAAgNgRgAhSgqQhJBXAAA2QAAAgAcAAQAiAABThwQBDhaAAgjQAAgYgWAAQgsAAhJBYg");
	this.shape_138.setTransform(599.1,353.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("Ag4DtQgPgQABgbQAAgaARgjQhVB5gpAAQgaAAgSgWQgSgWAAgiQABhQBjhCQBQgzAtAAQAdAAAAAcQAAAOgHARICukjQAQAFAPAAIAfgCQi3EigxBRQguBTAAAVQgBAWAUAAQAsAABribQADgFACAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIgFAIIgVAdQhdB/gqAAQgXAAgOgRgAiFBJQhHBYgBA1QAAAhAbAAQAoAABfiIQAyhJAAgbQAAgZgYAAQgsAAhIBXg");
	this.shape_139.setTransform(569.7,341.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AADDuQgOgQAAgaQAAgiAkg3QA6hVAAgRQAAgSgUAAQgdAAgyA5QgwA3hWCaQgPgDgKAAQgLAAgSADIBIiCQAPgcAeg2IBiinIBKh+QAPADAKAAQAUAAARgFIiWD0IhMB9QBbiHA1AAQAVAAAQASQAOARAAAaQAAAigrA/QgwBHAAASQAAAVAVAAQAmAABYh7IAPgVIAKgLQACgFAEAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAEgGAFIgVAdQhcB/gtAAQgXAAgPgRg");
	this.shape_140.setTransform(529,341.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AhkCpQgPgQAAgZQAAgdAZgsIBTiKIgyAAIAFgGIAxAAIA3hgQAPAEANABQAOgBAPgEIg5BgIBAAAIgEAGIg/AAIhsC5QgVAjABATQgBAXAXAAQAtAABpicQAEgEACAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIgFAIIgVAdQhcCAgtgBQgYAAgPgQg");
	this.shape_141.setTransform(508.1,348.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("Ah7CGIgeACIBQiCQA8hgAAgYQAAgOgLAAQgbAAhIBpQgEAIgEgBQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAJgMQBLhkAbAAQAmAAAAAyQAAAmgnA9QAYgdAXgSQATgrAcgeQAbgdAWAAQAPAAAAANQAAAXhEAsIggAUIgGAFQgHAWAAAOQAAApAfAAQAmAAAtg+QAKgLADAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAEgeAfQglApghAAQglAAAAgrQAAgNAGgVQgeAagTAaQgTAbgwBRIgegCg");
	this.shape_142.setTransform(486.4,353.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AheCyQgPgRAAgYQAAgcAig7IBLiAQAPADAJAAQANAAAYgDIhuC1QgYAoAAAVQAAAXAXAAQArAABticQADgEACAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIgFAIIgVAdQhbCAgwgBQgXAAgQgPgAAjiTQAAgQAPgOQAPgQARAAQAVAAAAAWQAAAQgOAPQgPAPgRABQgWAAAAgXg");
	this.shape_143.setTransform(462.8,347.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgcE/QgbgZgBgoQABg+A4g+QA5g9A6AAQAhAAAUAUQAUAUAAAgQABATgMAcQgMAdgIAAQgEAAgBgEIADgGQAZglgBgeQABgcgTgRQgSgRgdAAQg2AAg1A7Qg0A6AAA8QAAAgAWAWQAWAVAgAAQBKAAA+hIQA/hJAAhXQAAhRhPglIgcAEQgMABgLAAQgmAAAAgMQABgJAfAAQAWAAAjAJQAzgQAegnQAegnAAgzQAAgxgngnQhrBSheDDQg5B5gwA2QgvA0hXArQhlAyhRAAQhBAAgsgeQgqgegBgtQABgZAPgSQAOgSAVAAQAdAAAAAhQABARgLALQgKAMgPAAQgZAAACgaQAAgLgDAAQgHAAgBAaQAAApApAbQAnAaA9AAQBqAABYhPQAlgiAcglQAcgmBjiXQAwhJBEhLQBDhLAvggQhOhBiRAAQjPAAiXCVQh9B6AABrQgBA2AkAhQAiAgA8AAQBjAABpheQBoheABhYQAAhHhJAAQhJAAhTBQQhTBRgBBHQAAARAMANQAMANAPAAQAJACgBACQABAEgKAAQgXAAgQgWQgRgVAAgeQABhLBThIQBUhIBXAAQBVAAAABOQAABehrBgQhrBhhpAAQhDAAgpgpQgpgpABhEQAAiJCbhyQCdhyC8AAQCOAABiBAQBag4BTAAQBCAAAoAnQAoAnAABAQgBAagGAeQgIAegFAAQgGAAABgFIABgEQANgiAAgoQAAg+glgkQglgmg7AAQhSAAhVA1QBFAzAABEQAABtiVAUQB6ApABByQAABUhIA/QhIA/hgAAQgsAAgbgXg");
	this.shape_144.setTransform(421.6,334.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgGB5QgPgRAAgZQAAgaAQgfQgxBEgaAZQgaAXgYAAQgaAAgRgVQgSgXAAgiQAAhdCEhIQA6ggAjAAQAeAAAAAdQAAAJgEANIAZgvQAPADALAAQANAAAVgDIhWCOQgtBLAAAYQAAAXATAAQAUAAArgtQArgsAshBQADgFADAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAAKhIBUQg6BFghAAQgWAAgNgRgAhSgqQhJBXAAA2QAAAgAcAAQAiAABThwQBDhbAAgiQAAgYgWAAQgsAAhJBYg");
	this.shape_145.setTransform(1342.6,330.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("Ah7CGIgeACIBQiCQA8hgAAgYQAAgOgLAAQgbAAhIBpQgEAHgEABQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAJgMQBLhkAbAAQAmAAAAAyQAAAmgnA9QAYgcAXgTQATgrAcgeQAbgdAWAAQAPAAAAANQAAAXhEAsIggAUIgGAFQgHAWAAAOQAAApAfAAQAmAAAtg+QAKgLADAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAAEgeAfQglApghAAQglAAAAgrQAAgNAGgVQgeAagTAbQgTAagwBRIgegCg");
	this.shape_146.setTransform(1312.1,330.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("Ag4DtQgPgRAAgaQABgaARgjQhVB5gqAAQgaAAgRgVQgSgXAAgiQAAhQBkhCQBQgzAtAAQAdAAABAcQgBAOgHARICtkjQARAFAQAAIAegCQi4EigwBRQguBSgBAWQABAWATAAQAsAABqibQADgFADAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIgFAIIgVAdQhdB/gqAAQgXAAgOgRgAiFBJQhIBXAAA2QAAAhAbAAQAnAABfiIQAzhJAAgbQAAgZgYAAQgrAAhJBXg");
	this.shape_147.setTransform(1285.4,318.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AALB5QgOgRAAgZQAAgWAIgTQAJgSAmg3QAog7AAgQQAAgUgVAAQhHAAiUEIIgdgCQgRAAgPACIBMh5QBBhnAAgZQAAgPgMAAQgZAAhJBpQgFAHgCABQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIAJgMQBLhkAaAAQAQAAAMAPQAMAPAAAVQAAAfglA3QA6hOAegeQAfgdAaAAQAVAAAPASQAPARAAAaQAAAggtBDQguBFAAATQAAAUAUAAQArAABriaQADgFACAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAKhHBUQg6BFghAAQgWAAgPgRg");
	this.shape_148.setTransform(1244.2,330.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AiOBzQgVgZAAgiQAAhKBjhGQBEgxAtAAQAqAAAAAtQAAA4g7BOQAKAGAMAAQAWAAAegUQAdgVASgcQAGgGADAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAHgeAcQgrArgkAAQgPAAgMgGQg/Bbg5AAQgdAAgVgXgAg7guQhABUAAA6QAAAiAgAAQA1AAA9hXQgOgPAAgRQAAgXATgZQATgaASAAQAIAAADAKQAIgRAAgVQAAgogkAAQgsAAg/BVg");
	this.shape_149.setTransform(1209.7,330.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AiKDwQgOgRAAgYQAAgbANgZQAMgZBIh4QBYiSA8hsQAPAEALAAQASAAAQgGQjMFUghA8QgjA9AAATQAAAWATAAQApAABsibQACgFAEAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQgBADgFAFIgVAdQhbB/gsAAQgVAAgNgPg");
	this.shape_150.setTransform(1191.4,318.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("ApXE9Qg2gkAAg0QAAgbAQgTQARgTAXAAQAgAAAAAfQAAAQgLAMQgLALgPAAQgWAAAAgWIABgKIABgFQAAgFgFAAQgEAAgGAMQgEANAAAMQgBAwAzAhQAyAhBJAAQBqAAB9hnQAdgXAjgmQBFhJAqgpIAPgPIhfAAIAGgJIBgABQCPieCGhJQCGhKCWgBQAjgHAeAAQBEAAAAAWQAAAJgKAAQgEAAgdgGQg0gLgjAAQhPAYg8BFQg8BFhNCZQh3Dti3ArQAmAGAcAAQBaAAA9g6QA7g3Ang/QAFgHADAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAIg4BEQg0BAgrAXQgrAZg+AAQgjAAgzgKQggAKgoAAQgcAAAAgKQAAgMAmAAQAbAAAjAFQBKgSAogqQAngpBui3Ii8AAQh3B+hBA1QiZB8iHAAQhNAAg2gkgAEHi1QhtBCiOCdIC5AAQA/hsBYhWQBXhWBAgRQh/AGhtBEgAlyARQghgiAAg4QAAhnBjhYQBkhYB0AAQAzAAAdAZQAcAaAAAsQAAAhgWAuQgVApAAAPQAAAkAqAAQAwAAA1hIQAEgGADAAQAFAAAAAEQAAAGgTAUQgyA5gsAAQgbAAgSgUQgSgTAAghQAAgbAgg9QAOgcAAgTQAAgYgagRQgbgSgnAAQhwAAhfBVQhgBWAABlQAAAyAhAgQAfAgAzAAQA3AAA4goQA4gnAXg5QACgFADAAQADAAAAAFQAAAKgRAaQgRAagSASQhCBAhSAAQg3AAgjgig");
	this.shape_151.setTransform(1155.3,309.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgGB6QgPgSAAgZQAAgaAQgfQgxBEgaAZQgaAXgYAAQgaAAgRgVQgSgXAAgiQAAhdCEhIQA6ggAjAAQAeAAAAAdQAAAJgEANIAZgvQAPADALAAQANAAAVgDIhWCOQgtBLAAAYQAAAXATAAQAUAAArgtQArgsAshBQADgFADAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAAKhIBUQg6BFghAAQgWAAgNgQgAhSgqQhJBXAAA2QAAAgAcAAQAiAABThwQBDhbAAgiQAAgYgWAAQgsAAhJBYg");
	this.shape_152.setTransform(618.6,462.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("Ah7CGIgeACIBQiCQA8hhAAgXQAAgOgLAAQgbAAhIBpQgEAHgEABQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAJgMQBLhkAbAAQAmAAAAAyQAAAmgnA9QAYgcAXgTQATgrAcgeQAbgdAWAAQAPAAAAANQAAAXhEAsIggAUIgGAFQgHAXAAANQAAApAfAAQAmAAAtg+QAKgLADAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAAEgeAfQglApghAAQglAAAAgrQAAgNAGgVQgeAagTAbQgTAagwBRIgegCg");
	this.shape_153.setTransform(588.1,462);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("Ag4DuQgPgSAAgaQAAgaASgjQhVB5gqAAQgaAAgRgVQgRgXgBgiQAAhRBlhBQBPgzAtAAQAeAAAAAcQgBAOgHARICtkjQARAFAQAAIAdgCQi2EigxBRQguBSgBAWQABAWATAAQAsAABqibQADgFADAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIgFAIIgWAdQhcB/grAAQgWAAgOgQgAiFBJQhIBXAAA2QAAAhAbAAQAnAABfiIQAyhJAAgbQAAgZgXAAQgrAAhJBXg");
	this.shape_154.setTransform(561.4,450.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AALB5QgOgRAAgZQAAgWAIgTQAJgSAmg3QAog7AAgQQAAgUgVAAQhHAAiUEIIgdgCQgRAAgPACIBMh5QBBhnAAgZQAAgPgMAAQgZAAhJBpQgFAHgCABQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgBABAAQAAgBAAAAQAAgBABAAIAJgMQBLhkAaAAQAQAAAMAPQAMAPAAAVQAAAfglA3QA6hOAegeQAfgdAaAAQAVAAAPASQAPARAAAaQAAAggtBDQguBFAAATQAAAUAUAAQArAABriaQADgFACAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAKhHBUQg6BFghAAQgWAAgPgRg");
	this.shape_155.setTransform(520.3,462.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AiOBzQgVgZAAgiQAAhKBjhGQBEgxAtAAQAqAAAAAtQAAA4g7BOQAKAGAMAAQAWAAAegVQAdgUASgcQAGgGADAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAIgeAcQgrArgkAAQgPAAgMgGQg/Bbg5AAQgdAAgVgXgAg7guQhABUAAA6QAAAiAgAAQA1AAA9hXQgOgQAAgQQAAgXATgZQATgaASAAQAIAAADAKQAIgRAAgVQAAgogkAAQgsAAg/BVg");
	this.shape_156.setTransform(485.7,462.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AiKDwQgOgRAAgYQAAgbANgZQAMgZBIh4QBXiSA9hsQAPAEALAAQASAAAQgGQjMFVghA7QgjA9AAATQAAAWATAAQApAABsibQADgFAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAADgGAFIgVAdQhbB/gsAAQgVAAgNgPg");
	this.shape_157.setTransform(467.5,450.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("ApXE9Qg2gkAAg0QAAgbAQgTQARgTAXAAQAgAAAAAfQAAAQgLAMQgLALgPAAQgXAAABgWIABgKIAAgFQAAgFgDAAQgGAAgFAMQgEANAAAMQgBAwAzAhQAyAhBJAAQBqAAB9hnQAcgXAkgmQBGhJApgpIAPgPIhfAAIAGgJIBgABQCPieCGhJQCHhKCVgBQAjgHAeAAQBEAAAAAWQAAAJgKAAQgEAAgdgGQg0gLgjAAQhOAYg9BFQg8BFhNCZQh2Dti4ArQAmAGAcAAQBaAAA9g6QA7g3Ang/QAFgHACAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAHg4BFQg0BAgrAXQgrAZg+AAQgjAAgzgKQggAKgoAAQgcAAAAgKQAAgMAmAAQAbAAAjAFQBKgSAogqQAngpBui3Ii8AAQh2B+hCA1QiZB8iHAAQhNAAg2gkgAEHi1QhtBCiOCdIC5AAQA+hsBZhWQBXhWBAgRQh/AGhtBEgAlyARQghgiAAg4QAAhnBjhYQBkhYB0AAQAzAAAdAaQAcAZAAAsQAAAhgWAuQgVAqAAAOQAAAkAqAAQAwAAA1hIQAEgGADAAQAFAAAAAEQAAAGgTAUQgyA5gsAAQgbAAgSgUQgSgTAAghQAAgbAgg9QAOgdAAgSQAAgZgZgQQgcgSgnAAQhwAAhfBVQhgBXAABkQAAAyAgAgQAgAgAzAAQA3AAA4goQA4goAXg4QACgFADAAQADAAAAAFQAAAKgRAbQgRAZgSASQhCBAhSAAQg4AAgigig");
	this.shape_158.setTransform(431.4,441.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_124},{t:this.shape_123,p:{x:-105,y:196.4}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]},29).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_123,p:{x:1263,y:386.3}},{t:this.shape_130}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152}]},1).to({state:[]},1).wait(1));

	// Heart
	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#FF9999").ss(1,1,1).p("EgJ0grvQBfA1BoBPQBUA/BqA1QA5AdBcAsQBDAmAaAwQAgA5gFBiQCCjFEAilQBIguCShZQCBhRBXhIQCniKBegnQA1gWCwgfQB7gWDVgBQBtgBBkAEQCOAAERENQBZBYBZBnQBDBOAPAWQAzBPBhDCQB1DrAZBmQAOA7AgBQQA0CAAgBdQAIAZAMBnQAFAmAPCaIAAClQAAEbjIITQg0CIhcDbQhGCngGAcQg/ERh4DCQhhCbiXCBQgnAijkCnQieB1hUBlQgwA6jjCxQjlCzg4BCQguAogtAnQhbBPg6BIQhDBTgrAlQggAbg6AhQkuCoiPEUQgoBPgyCJQgxCDgaAxQhJhjg8h9QgTgnhHipQgyh4grhDQg7hfhUhCQgqgikQjTQjSikiIhvQgOgLikiMQiYiBgogeQj2i5jNi2QjVi/h+iYQkmlggDgEQhmh9gkg9Qgkg8gShMQgVhugUhbQhcmihxmqQghh7gKg2QgMhEAAhMQAAg6A9jOQA8jLBVjoQDXpMBjg6QAWgNB7hUQCNheCAhFQF8jODOgDIABgBIASgCEgXbgvnQA8gKAyAAQBbAAFoCCQDZBPBiApQAtATATAL");
	this.shape_159.setTransform(509,380.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF9999").s().p("EgBTAtmQgTgnhHipQgzh4gqhDQg8hfhThCIk5j1QjTikiIhvIiyiXQiXiBgpgeQj2i5jNi2QjVi/h+iYIkplkQhmh9gkg9Qgkg8gShMQgVhugUhbQhbmihymqQggh7gKg2QgNhEAAhMQAAg6A9jOQA8jLBVjoQDXpMBjg6QAWgNB7hUQCNheCAhFQF8jODOgDIABgBIASgCIgSACIgBgKQA8gKAyAAQBbAAFoCCQDZBPBiApIgFAIQBfA1BoBPQBTA/BrA1ICVBJQBDAmAaAwQAgA5gFBiQCCjFEAilQBIguCRhZQCChRBXhIQCniKBfgnQA0gWCwgfQB7gWDVgBQBugBBjAEQCOAAERENQBZBYBZBnQBEBOAOAWQAzBPBhDCQB1DrAZBmQAOA7AgBQQAzCAAhBdQAIAZAMBnIAUDAIAAClQAAEbjJITQgzCIhcDbQhGCngGAcQg/ERh4DCQhgCbiYCBQgnAijkCnQieB1hUBlQgwA6jjCxQjlCzg4BCIhcBPQhaBPg6BIQhDBTgsAlQgfAbg6AhQkuCoiPEUQgoBPgyCJQgxCDgaAxQhJhjg8h9g");
	this.shape_160.setTransform(509,380.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF9999").s().p("Egr+AyHIgVgyQgNgdgKgQQgOgXgUgQIhMg7IhThCIgrgkIgugmQg7gtgxgsQg0gugegkIhHhWQgZgegJgOQgIgPgEgSIgKgxQgWhkgchnQgIgdgCgNQgDgRAAgSQAAgOAPgxQAOgxAVg4QAziNAYgOIAjgYQAigWAfgRQBbgxAygBIAAgDQAOgCAMAAQAWAABWAfQA1ATAXAKIgBACQAXANAZATQAUAPAaANIAjARQARAJAGAMQAIANgBAYQAfgvA+goIA0ggQAfgUAVgRQAoghAXgKQAMgFArgIQAdgFA0AAIAyABQAiAABBBAQAWAVAVAZIAUAYQAMATAYAvQAcA4AGAZQADAOAIATIAUA1IAFAfIAFAuIAAAoQAABEgxCAQgMAhgWA0QgRApgBAGQgQBCgcAvQgYAlgkAfQgJAIg3AoQgmAcgUAZQgMAOg3AqQg3ArgNAQIgWATQgWATgOASQgQATgKAJQgIAHgOAIQhJAogiBDQgKATgMAhQgLAfgHAMQgSgYgOgegEAGhArvQgTgnhHipQgzh4gqhDQg8hfhThCIk5j1QjSikiIhvIiyiXQiYiBgogeQj2i5jNi2QjVi/h+iYIkplkQhmh9gkg9Qgkg8gShMQgVhtgUhcQhcmihxmqQghh7gKg2QgMhEAAhMQAAg6A9jOQA8jLBVjoQDXpMBjg6QAWgNB7hUQCNheCAhFQF7jODPgDIABgBIARgCIgRACIgBgKQA8gKAyAAQBbAAFnCCQDaBPBhApIgEAIQBfA1BnBPQBTA/BrA1ICVBJQBDAmAbAwQAgA5gFBiQCCjFEAilQBHguCShZQCChRBXhIQCniKBegnQA1gWCwgfQB6gWDWgBQBtgBBkAEQCOAAERENQBYBYBaBnQBDBOAPAWQAzBPBhDCQB1DrAZBmQAOA7AgBQQAzCAAhBdQAIAZAMBnIAUDAIAAClQAAEbjJITQgzCIhcDcQhGCmgGAcQg/ERh4DCQhhCbiXCBQgnAijkCnQieB1hUBlQgwA6jjCxQjlCzg4BCIhcBPQhaBPg6BIQhDBTgsAlQgfAbg6AhQkuCoiPEUQgpBPgyCJQgwCDgaAxQhLhjg7h9g");
	this.shape_161.setTransform(458.9,392.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF00FF").s().p("AgOIbIgSgmQgJgWgIgNQgLgRgPgMIg6gtIhAg0IghgbIgkgeQgtgigmgiQgngjgXgcIg3hCQgUgXgGgMQgGgLgEgOIgHgkQgShNgUhPIgIghQgCgMAAgOQAAgLALgmQALglAQgsQAnhsASgLIAbgSQAbgRAXgNQBGgmAngBIAAgBQALgCAJAAQAQAABDAXQApAPASAIIgBABQARAKAUAPQAOAMAVAJIAbAOQAMAHAFAIQAFALgBASQAYglAwgeIAogZQAYgPAQgNQAfgZASgIQAJgEAggGQAYgEAnAAIAmAAQAbABAyAyQARAQAQATIAPASQAKAPARAkQAWArAFATQADALAFAPIAQAoQACAGABASIAFAkIAAAeQgBA0gkBjIgbBAIgPAkQgLAzgWAkQgSAdgcAYIgxAlQgeAWgPASQgJALgqAgQgrAigKAMIgRAOQgQAPgLANQgMAPgJAIQgFAEgLAHQg4AfgbAzQgHAPgJAYQgJAZgFAJQgMgTgLgXg");
	this.shape_162.setTransform(935.3,124.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgVMOIgZg4QgNghgMgSQgPgZgXgSIhThCQg5grgkgeIgwgoIgzgrQhCgyg3gwQg5g0gigoIhQhfQgagigLgQQgJgQgEgVIgMg1QgZhvgehzQgIgggDgPQgDgSAAgUQAAgQAQg3QAQg3AXg9QA5ieAbgPIAmgaQAngZAhgTQBng3A3gBIAAAAIAAgDQAQgCANgBQAYAABgAjQA7AWAaALIgBACQAZAOAcAVQAXARAcAOIAoATQARALAHANQAJAOgCAbQAjg1BFgsIA5gkQAkgWAXgTQAtglAYgKQAOgHAwgIQAhgFA5gBIA3ABQAnAABJBIQAXAYAYAbIAXAbQANAVAaA0QAgA/AGAbQAEAQAJAWIAWA6QACAIADAbIAFAzIAAAtQABBLg2CPIgnBdQgSAugCAHQgRBJggA0QgZAqgpAiQgKAJg9AtQgrAfgWAbQgNAPg9AwQg9AwgQARIgYAWQgYAVgQATQgRAWgMAKQgJAHgPAJQhRAtgmBKQgLAWgOAkQgNAjgGANQgUgbgPggg");
	this.shape_163.setTransform(111.1,351.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF0000").s().p("AgWMZIgYg5QgOgggMgTQgQgZgWgSIhWhDQg5gsglgfIgwgpQgqgjgKgIQhDgyg4gyQg6gzgigqIhQhgQgcgigKgRQgKgQgFgVIgLg2QgZhxgeh0QgKgigCgOQgDgTAAgUQgBgQARg4QARg3AWg/QA7igAbgQIAngaQAmgaAjgSQBng4A5gBIAAgDQAQgDANAAQAZAABiAkQA7AVAaALIgBACQAaAPAcAVQAWARAeAPIAoAUQATAKAFANQAKAPgCAbQAjg2BGgsIA7glQAjgWAYgUQAtglAagLQAOgGAwgIQAhgGA7AAQAdgBAbABQAmAABLBKQAYAXAYAcIAWAcQAOAVAbA1QAfBAAHAbQAEAQAJAWIAWA8QACAHAEAcIAFA0IAAAtQAABNg2CQIgnBgQgTAtgCAIQgRBKghA1QgaAqgpAjQgLAJg9AtQgsAggWAcQgNAPg+AxQg+AwgQASIgYAWQgZAVgQATQgRAXgMAKQgJAHgQAJQhSAugmBLQgLAVgOAmQgOAjgGAOQgUgbgQgig");
	this.shape_164.setTransform(867.3,639.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FF00FF").s().p("AgPIcIgQgnQgKgWgHgMQgMgSgPgMIg6guIhAgyIghgcIgjgeQgugigmghQgngkgYgcIg3hCQgTgXgGgMQgHgKgDgOIgIglQgQhNgWhPIgIggQgCgNAAgOQAAgLALgmQALgmAQgrQAohsATgLIAbgSQAagRAXgNQBGgmAmgBIAAgCQALgBAKAAQAQAABDAYQAoAOASAIIgBABQASAKATAPQAQAMATAJIAcAOQANAGADAKQAHAKgBASQAYgkAvgfIAogYQAYgQAQgNQAfgZARgIQAKgEAhgFQAWgFAoAAIAnAAQAZAAAzAzQAQAQARATIAQASQAIAPATAkQAVArAFATQACALAHAOIAPAqQACAFACASIADAkIAAAfQABA0gmBiIgbBBIgNAkQgMAygWAkQgSAdgcAXIgyAmQgcAVgQATQgJALgqAhQgrAggJANIgRAOQgRAPgLANQgNAPgHAIQgHAFgKAGQg4AfgaAzQgIAPgJAZQgJAYgFAJQgMgTgMgWg");
	this.shape_165.setTransform(917.3,137);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgVMOIgYg5QgOgggMgRQgPgagWgSIhUhBQg5gsglgeIgvgoIg0grQhBgxg3gxQg5g0gigoIhPhfQgbgigKgQQgKgQgFgVIgLg1QgYhwgehxQgKghgCgOQgDgTgBgVQAAgPARg3QAQg3AXg9QA5ieAbgQIAngZQAlgZAigTQBng3A2gBIABAAIgBgDQARgDANABQAZgBBfAkQA7AVAaAKIgBADQAZANAcAWQAWARAdAOIAnATQATALAGANQAJAPgCAaQAjg1BEgsIA7gkQAigWAXgTQAuglAYgKQAPgHAvgIQAhgFA5gBIA3ABQAnAABJBIQAYAYAYAbIAVAbQAOAVAaA0QAfA/AHAbQAEAQAIAVIAXA8QACAHADAbIAGAzIAAAsQgBBMg1CPIgmBdQgUAugBAHQgRBJggA0QgZApgpAjQgLAJg8AtQgrAfgXAbQgNAPg8AwQg+AwgOARIgZAWQgYAVgPATQgTAWgMAKQgHAIgQAIQhRAtgmBKQgLAWgNAkQgOAjgGANQgUgbgPggg");
	this.shape_166.setTransform(95,316.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FF0000").s().p("AgWMZIgYg5QgOgggLgTQgRgZgWgSIhWhDQg5gsglgfIgwgpQgqgjgKgIQhDgyg4gyQg5gzgjgqIhQhgQgcgigKgRQgKgQgFgVIgLg2QgZhxgeh0QgKgigCgOQgEgTABgUQAAgQAQg4QAQg3AXg/QA7igAbgQIAngaQAmgaAjgSQBng4A5gBIAAgDQAQgDANAAQAZAABiAkQA7AVAaALIgBACQAaAPAcAVQAWARAeAPIAoAUQATAKAFANQAKAPgCAbQAkg2BFgsIA7glQAjgWAYgUQAtglAagLQAOgGAwgIQAhgGA7AAQAdgBAbABQAmAABKBKQAZAXAYAcIAWAcQAOAVAbA1QAfBAAHAbQAEAQAIAWIAXA8QADAHADAcIAFA0IAAAtQABBNg3CQIgnBgQgTAtgCAIQgRBKghA1QgaAqgpAjQgLAJg+AtQgrAggWAcQgNAPg+AxQg+AwgQASIgYAWQgZAVgQATQgRAXgMAKQgJAHgQAJQhSAugmBLQgLAVgOAmQgOAjgGAOQgUgbgQgig");
	this.shape_167.setTransform(867.2,583.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF9999").s().p("EgptAyvIgWgyQgMgdgKgQQgPgXgUgQIhLg7IhThCIgrgkIgugmQg8gtgxgsQgzgugegkIhIhWQgYgegJgOQgJgPgEgSIgKgxQgWhkgbhnQgIgdgCgNQgDgRAAgSQAAgOAOgxQAPgxAUg4QA0iNAYgOIAjgYQAigWAegRQBbgxAygBIAAgDQAPgCAMAAQAWAABWAfQA0ATAYAKIgBACQAWANAZATQAVAPAZANIAkARQAQAJAHAMQAHANgBAYQAfgvA+goIA0ggQAfgUAVgRQAoghAXgKQANgFAqgIQAegFAzAAIAyABQAiAABCBAQAVAVAWAZIAUAYQAMATAXAvQAcA4AGAZQAEAOAHATIAVA1IAEAfIAFAuIAAAoQAABEgwCAQgMAhgXA0QgQApgCAGQgPBCgdAvQgXAlglAfQgJAIg3AoQgmAcgUAZQgLAOg3AqQg3ArgOAQIgWATQgVATgOASQgQATgLAJQgHAHgOAIQhJAogiBDQgKATgMAhQgMAfgGAMQgSgYgOgegEAEQArHQgTgohHioQgyh4grhEQg7hfhThCIk5j1QjSijiJhwIixiWQiYiBgpgfQj2i4jMi3QjVi/h/iYIkplkQhlh8glg+Qgkg8gRhKQgWhvgUhcQhbmihymqQggh7gKg1QgNhFAAhMQAAg5A9jOQA8jLBVjoQDXpMBjg7QAWgNB7hUQCOhdB/hFQF8jODOgEIACAAIARgCIgRACIgCgLQA8gKAyAAQBcAAFnCDQDaBPBhApIgEAHQBeA1BoBPQBTBABqA1ICVBJQBDAmAbAvQAhA5gGBiQCCjEEBimQBHguCShYQCBhSBXhIQCniJBfgoQA0gWCwgfQB7gWDWgBQBtAABjADQCOAAEREOQBZBXBZBoQBEBOAOAVQAzBQBhDCQB2DqAYBmQAOA8AgBPQA0CAAgBdQAIAaAMBnIAUC/IAAClQAAEcjIITQg0CHhcDcQhGCngGAbQg/ERh4DCQhgCciYCBQgnAhjkCoQieB0hUBlQgwA6jjCyQjlCzg4BBIhbBQQhbBPg6BHQhDBTgrAlQggAcg6AgQkuCoiOEVQgpBOgyCJQgwCEgbAwQhKhjg8h8g");
	this.shape_168.setTransform(473.4,396.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_160},{t:this.shape_159}]},29).to({state:[{t:this.shape_161},{t:this.shape_159}]},1).to({state:[{t:this.shape_160},{t:this.shape_162},{t:this.shape_159}]},1).to({state:[{t:this.shape_160},{t:this.shape_163},{t:this.shape_159}]},1).to({state:[{t:this.shape_160},{t:this.shape_164},{t:this.shape_159}]},1).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_159}]},1).to({state:[]},1).wait(1));

	// Sound Credit
	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AhTFbQgagQgMgYQgNgWAAgZQgBgYAJgSQANgSAKgEIAOgEQASAAALAMQALAMAAAQQAAARgLALQgLAMgSAAQgTAAADANQADAMANANQAKAIATALQASAKAWAAIAFAAQAhgCAUgQQAUgQAIgWQAIgWgDgWQgEgWgNgQQgIgIgOgGIgegLIgegIQgPgFgLgBIgZgFQgNgDgLgFQgLgFgHgKQgHgKAAgSQAAgbANgSQAMgRALgIQgUgQgNgXQgNgXAAgfIAAiKQAAghAMgZQALgYASgQQARgPAWgIQAWgHAWAAQAVAAAYAIQAHgZAUgLQATgLAUAAQAPAAAOAHQAFACACADQACACACAFIACAKQAAAKgHAHQgHAHgJAAIgBAAQgKAAgHgHQgHgGAAgJQgBgIgFAAQgGAAgIAGQgJAFgFAGQgEAEgEALQAZANARAcQARAbAAAqIAACMQAAAagLAWQgLAVgRARQgSARgWAKQgXAJgUAAQgbAAgcgNQgPAVAKALQAKAMAxAEQAgACAXAMQAWALANARQANARAHATQAGATADASQACARAAANIgBAVQgBAJgGAQQgGARgNAQQgOAQgXALQgXAMgjAAQgoAAgbgQgAg6kRQgQAbAABGIAABeQAABHAQAbQAPAcAdAAQAcAAAQgcQAPgbAAhHIAAheQAAhGgPgbQgQgagcAAQgdAAgPAag");
	this.shape_169.setTransform(803,386.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("Ag7FAIAAgaQAHADAGgDQAFgBAEgHQAEgGAAgOIAAl8QAAgNgEgGQgEgHgFgCQgGgCgHACIAAgZIBeAAIAAGxQAAAOAEAGQADAHAGABQAFADAHgDIAAAagAgdj2QgMgMAAgTQAAgSAMgMQAMgMARAAQASAAANAMQANAMAAASQAAATgNAMQgNANgSAAQgRAAgMgNg");
	this.shape_170.setTransform(776.7,371.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAqD4IAAgaIACABIADAAQAFAAAHgEQAFgEACgQIAAkbIAAgZIgBgUIAAgBQgBgygLgVQgLgVgXgCIgDAAQggAAgWAYQgWAYgFA5IAAE5QgBAUAHAFQAGAEAHAAIADAAIACgBIAAAaIh3AAIAAgaIACABIAFAAQAFAAAHgEQAIgFgBgUIAAl9QABgSgIgGQgHgFgFAAIgDAAIgCAAIgCAAIAAgXIBfAAIAAAnIAGgLQAEgGAEgDQAQgQAVgGIADAAIAAgBIANgDIAPgBIACAAQA1ACAgAhQAfAgAABJIAACRIAACcQAAAUAHAFQAIAEAEAAIAFAAIACgBIAAAag");
	this.shape_171.setTransform(748.4,378.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgmD0QgagKgUgSQgUgSgNgYQgMgZAAgeIAAgYIgBgmIAAgwIgBgxIgBgrIAAgeQAAgkANgaQAMgbATgQQATgQAXgKQAXgHAXAAQAYgBAXAIQAZAJASAQQAUARALAbQALAZABAlIAABkIAAADIAAAXIjHAAIAABmQAAA/AVAaQAWAbAfgCQATgBATgFQASgGAOgNQAOgNAIgYQAJgYAAgnIAYAAIAAAPQAAAagHAZQgGAYgOASQgPATgYAKQgYALgiABQgXgBgYgIgAgwjEQgRAdAABLIAABPICCAAIAAhPQAAglgEgaQgFgagJgPQgJgQgMgGQgMgGgOAAQggAAgQAcg");
	this.shape_172.setTransform(713.4,379);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgwD0QgYgKgTgSQgTgSgNgZQgNgaAAggIAAjgQAAglANgcQAMgbATgRQAUgSAYgIQAZgIAXABQAYgBAYAIQAYAJAUAQQAUARAMAbQANAbAAAlIAADiQAAAegNAYQgNAZgTASQgUATgYAKQgYAMgYAAQgXgBgZgIgAgxjDQgRAdAABOIAACwQAABOARAfQARAgAgAAQAfAAASggQARgfAAhOIAAiwQAAgngEgbQgFgagIgQQgJgPgMgIQgNgFgPAAQggAAgRAdg");
	this.shape_173.setTransform(679.8,379);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AizFmIAAgaQAHABAGgBQAGgDAEgFQAFgHAAgNIAApeQAAgPgFgGQgEgHgGgBQgGgCgHACIAAgaICKAAIAAAaQgJgCgFACQgHABgEAHQgFAGAAAPIAAFTIAeg9IAhhEIAghFIAdg9QAOgbAIgSIALgWQAIgSgCgIQgCgIgIgFQgIgEgNABIAAgaIB2AAIAAAaQgMgBgLAEQgKAFgLAIQgLAIgIASIgLAZIgbA5IglBLIgmBSIARAvIAZBCIAcBJIAbBFIAVAzIAKAXQAHAYAKALQAIALAIADQAKAGAGgCIAAAZIidAAIAAgZQAKACAIgGQAHgDADgLQADgLgGgYIgNgcIgYg4IgchHQgQgngMglIgOAhIgMAVIAADKQAAANAFAHQAEAFAHADQAFABAJgBIAAAag");
	this.shape_174.setTransform(645.9,367.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgnD0QgZgKgUgSQgUgSgMgYQgNgZgBgeIAAgYIAAgmIgBgwIAAgxIAAgrIAAgeQAAgkAMgaQAMgbATgQQATgQAXgKQAXgHAYAAQAWgBAZAIQAXAJAUAQQASARALAbQAMAZAAAlIAABkIAAADIAAAXIjGAAIAABmQAAA/AWAaQAVAbAggCQATgBASgFQATgGANgNQANgNAKgYQAIgYABgnIAWAAIAAAPQAAAagFAZQgHAYgPASQgPATgXAKQgYALghABQgXgBgagIgAgwjEQgRAdAABLIAABPICDAAIAAhPQAAglgGgaQgEgagJgPQgJgQgLgGQgNgGgOAAQgfAAgRAcg");
	this.shape_175.setTransform(590.5,379);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAUFlIAAgaIABABIADAAIAIgCQAFgBADgGQADgFABgKQAAgLgDgSIgGgRIgNghIgRgtIgSg0QgMAZgNAXQgOAWgJATIAABSQAAAUAGAFQAHAEAHAAIAEAAIACgBIAAAaIh5AAIAAgaIACABIAFAAQAFAAAIgEQAHgFAAgUIAApcQAAgUgHgGQgIgGgFAAIgDAAIgCABIgCAAIAAgYIB5AAIAAAYIgCAAIgCgBIgCAAQgHAAgHAGQgGAGAAAUIAAHcIAOgaIAZgtIAeg2IAeg2IAXgqIAKgSQAHgOgBgIQgBgJgFgFQgFgEgFgBIgKgBIgCAAIAAgYIBsAAIAAAYIgCAAIgJABQgHABgJAEQgIAFgKAJQgIAIgFAOIgUAlIgtBMQAMAlAOAnIAYBKIAVA3IAHAZQAHASAHALQAFAKAGAFQAFAGAFABIAHACIADgBIAAAag");
	this.shape_176.setTransform(556.2,367.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("Ag7FAIAAgaQAHADAGgDQAFgBAEgHQAEgGAAgOIAAl8QAAgNgEgGQgEgHgFgCQgGgCgHACIAAgZIBeAAIAAGxQAAAOAEAGQAEAHAFABQAFADAHgDIAAAagAgdj2QgMgMAAgTQAAgSAMgMQAMgMARAAQASAAANAMQANAMAAASQAAATgNAMQgNANgSAAQgRAAgMgNg");
	this.shape_177.setTransform(528.8,371.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("ABIFmIAAgaQAIACAEgCQAFgBAGgHQAEgGAAgOIAAokIguC6QgKAjgHAiIgQA9IgKAsIgEASIgpAAIgOg1IgRg9IgQg+IgOg9IgkiNIAAIjQAAAOADAGQADAHAFABQAHACAGgCIAAAbIhUAAIAAgbQAHACAEgCQAGgBAEgHQAEgGAAgOIAApdQAAgQgEgFQgEgIgGgBQgEgCgHACIAAgZIBhAAIBjF6IBfl6IBeAAIAAAZQgIgCgFACQgFABgEAIQgEAFAAAQIAAJeQAAAOAEAGQAEAHAFABQAFACAIgCIAAAag");
	this.shape_178.setTransform(496.9,367.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgcCPQgMgMAAgSQAAgRAMgMQAMgMARAAQARAAALAMQAMAMAAARQAAASgMAMQgLALgRAAQgRAAgMgLgAgchTQgMgLAAgSQAAgSAMgLQAMgMARAAQARAAALAMQAMALAAASQAAASgMALQgLAMgRAAQgRAAgMgMg");
	this.shape_179.setTransform(449.5,379.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AhnFSQgIgBgJgDQgNgEgOgLQgOgKgIgQQgKgPgDgTQgEgRAGgWIABgBIABgBIABgDQAEgSAQgJQAOgJATAFQARAFAKAPQAIARgEARQgDARgPAJQgPAJgSgDQACAiAcAHQAQAFALgKQAKgLALgSQACgDAJglIAZhYIgThJIgZhYIgahcIgWhTIgSg+IgIgbQgHgUgIgJQgHgKgIgBQgJgCgJADIAAgXIBlAAIAAAXQgJgBgGADQgEADAAAJQAAAJAFATIAGATIAPAzIASBHIAUBOIAUBMIARBBQAQg4ARg8IAehxIAXhVIAKglQAFgYgDgKQgDgKgFgDQgGgEgLADIAAgaICJAAIAAAaQgGgDgHAEQgIADgHAKQgIAKgFAYIgIAZIgRA5IgVBRIgaBfIgbBcIgYBWQgLAmgIAaQgJAagCAGQgNAcgWAVQgYAUgeACIgRgBg");
	this.shape_180.setTransform(422.1,388.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgQFkQgNgFgIgFIgRgKQgGgFgIABQgIABgEADIgIAHQgEADgCAGIgbAAIAAqRQAAgQgEgGQgFgHgGgCQgEgDgHADIAAgYIBdAAIAAD/QASgXAQgHQAQgGAQAAQAYAAAYAHQAYAJAUARQATAQAMAbQANAaAAAlIAADkQAAAbgNAZQgMAZgTASQgUATgYAKQgZALgXAAQgQAAgMgFgAgOhuQgOAFgKAMQgJAKgDAMQgEAOAAAVIAAEkQAAAFADALIAGAWQAFALAIAKQAIAJALAGQANAIAMAAQAPgBANgHQAMgHAJgSQAIgQAFgbQAEgZAAgnIAAizQAAglgEgbQgFgbgIgPQgIgOgMgHQgNgGgQgBQgNABgNAEg");
	this.shape_181.setTransform(385.2,368.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgeFqQg4gCgjghQgigiAAhIIAAjgQAAgkAJgaQAJgbAQgQQARgRAXgIQAWgIAdgBIADAAQASAAALADIACAAIACABQAWAHARAQIAKAJIAHALIAAjRQAAgRgEgFQgFgHgEgCQgHgCgHACIAAgaIBfAAIAAKaQAAAOAEAEQAEAFAFABQAFACAIgFIAAAbIheAAIAAgnQgEAGgDAFIgKAKQgRAOgWAHIgCABIgCAAQgLAFgSAAgAgdh4QgbADgLAUQgLAVgBAzIAAABIAAAYIgBAwIAAA9IAAA+IABAxIAAAYIAAABQABAyALAVQALAVAbABQARABAOgFQAQgHAMgLQAMgNAJgUQAJgWACgfIAAjzQgCgdgJgWQgJgUgMgNQgMgMgQgGQgMgFgOAAIgFAAg");
	this.shape_182.setTransform(332.1,368.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AApD4IAAgaIADABIADAAQAFAAAGgEQAHgEABgQIAAkbIAAgZIgBgUIAAgBQgCgygKgVQgKgVgXgCIgFAAQgeAAgXAYQgWAYgGA5IAAE5QAAAUAHAFQAGAEAGAAIAFAAIABgBIAAAaIh3AAIAAgaIACABIAFAAQAEAAAJgEQAHgFAAgUIAAl9QAAgSgHgGQgJgFgEAAIgEAAIgBAAIgCAAIAAgXIBeAAIAAAnIAHgLQAEgGAFgDQAQgQAUgGIACAAIABgBIANgDIAQgBIACAAQA0ACAgAhQAfAgAABJIAACRIAACcQAAAUAHAFQAIAEAFAAIAEAAIACgBIAAAag");
	this.shape_183.setTransform(295.4,378.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgVD4QgzgCgfghQggggAAhJIAAiQIABg5IAAgzIABgjIAAgNQAAgTgHgGQgIgGgFAAIgDABIgCAAIgCAAIAAgYIB4AAIAAAYIgBAAIgCAAIgDgBQgGAAgGAFQgGAFgBAPIAAA1IgBBDIAABHIAABAIAAAxIAAAYIAAABQACAyALAWQAKAUAYABIAEAAQAdAAAXgYQAXgXAFg6IABhmIAAhkIAAhOIAAgfQAAgTgGgGQgGgGgGAAIgDABIgCAAIgCAAIAAgYIB4AAIAAAYIgCAAIgCAAIgCgBQgFAAgHAGQgHAGAAATIAAARIAAArIAAA8IAABHIAABEIgBA8IAAArIAAASQAAAUAGADQAHADAGAAIADAAIACgBIAAAaIheAAIAAglIgHAKIgJAJQgPAOgVAHIgBABIgBAAIgBAAQgLAFgQAAg");
	this.shape_184.setTransform(257.6,379.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgwD0QgYgKgTgSQgTgSgNgZQgNgaAAggIAAjgQAAglANgcQAMgbATgRQAUgSAYgIQAZgIAXABQAYgBAYAIQAYAJAUAQQAUARAMAbQANAbAAAlIAADiQAAAegNAYQgNAZgTASQgUATgYAKQgYAMgYAAQgXgBgZgIgAgxjDQgRAdAABOIAACwQAABOARAfQARAgAgAAQAfAAASggQARgfAAhOIAAiwQAAgngEgbQgFgagIgQQgJgPgMgIQgNgFgPAAQggAAgRAdg");
	this.shape_185.setTransform(222.4,379);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgnFnIgdgPQgNgHgIABQgHABgBAUIgaAAIAAiyIAbAAQgDAWABATQACAUAEASQAEAPAGAOQAGAPAKAMQAKAMAPAIQAPAIAWABQAOABASgJQASgJALgOQAZgigEgnQgEgngTglQgTglgaghIgrg6QgjgpgVgpQgUgpgKgmQgKgmAAgjQAAgkAHggQANgwAcgbQAdgaA4AAQATAAAQAJIAaARQAMAHAGgBQAGgBACgVIAcAAIAACvIgcAAQACgugJghQgHgegSgZQgSgZgkAAQgTAAgSAIQgRAIgLANQgYAiABAjQACAiAPAhQAQAhAXAeQAXAdAQAYQBDBVAeBJQAfBKgNBHQgGAXgKAVQgJAWgPARQgPARgWAKQgWALgeABIgEABQgSAAgPgIg");
	this.shape_186.setTransform(191.2,367.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169}]},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(511,383,1026,770);
// library properties:
lib.properties = {
	id: 'AF86E6DBA5C22B4E9F5C2E80DFA5E39E',
	width: 1024,
	height: 768,
	fps: 5,
	color: "#00CCFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/applausewav.mp3?1525130662877", id:"applausewav"}
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