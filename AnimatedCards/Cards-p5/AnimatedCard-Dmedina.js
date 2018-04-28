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


// stage content:
(lib.AnimatedCardDmedina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on current frame
		
		this.btn_play.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_10 = function() {
		this.stop(); //
	}
	this.frame_20 = function() {
		this.stop(); //
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(10));

	// Envelope
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("AAdA/IgQhEIAAg5IBgAAIAAA5IgQBEgAhdA/IgOhEIAAg5IBeAAIAAA5IgOBEg");
	this.shape.setTransform(810.3,619.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF33").s().p("Ag0CsIAAkCIhtAAIAAhVIFCAAIAABVIhsAAIAAECg");
	this.shape_1.setTransform(780.9,630.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF33").s().p("ABDCsIhDhvIhDBvIh3AAIB3iyIhsilIB1AAIA8BqIA7hqIB0AAIhrCnIB1Cwg");
	this.shape_2.setTransform(605.4,630.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF33").s().p("AiQCsIAAlXIEcAAIAABKIixAAIAAA2ICkAAIAABFIikAAIAABEIC2AAIAABOg");
	this.shape_3.setTransform(412.1,630.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF33").s().p("ABACsIiAi8IAAC8IhjAAIAAlXIBjAAICAC9IAAi9IBkAAIAAFXg");
	this.shape_4.setTransform(244.1,630.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF33").s().p("AAdA/IgPhEIAAg5IBeAAIAAA5IgOBEgAhcA/IgQhEIAAg5IBgAAIAAA5IgPBEg");
	this.shape_5.setTransform(212.1,619.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF66").s().p("Ah1CQQghgigFg0IBlgGQADAYALANQAQAVAdAAQAXAAANgKQALgLAAgOQAAgOgLgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAPgYAfgNQAggOA0AAQBCAAAjAZQAiAYAHA2IhlAGQgEgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAHAHAcAGQBFAPAeAPQAfAPANAWQAOAXAAAcQAAAhgSAcQgTAcghAOQggAPgyAAQhXAAgigig");
	this.shape_6.setTransform(788.4,528.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF66").s().p("Ah1CQQghgigFg0IBlgGQADAYALANQAQAVAdAAQAXAAANgKQALgLAAgOQAAgOgLgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAPgYAfgNQAggOA0AAQBCAAAjAZQAiAYAHA2IhlAGQgEgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAHAHAcAGQBFAPAeAPQAfAPANAWQAOAXAAAcQAAAhgSAcQgTAcghAOQggAPgyAAQhXAAgigig");
	this.shape_7.setTransform(603.9,528.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FF66").s().p("AiQCsIAAlXIEcAAIAABKIixAAIAAA2ICkAAIAABFIikAAIAABEIC2AAIAABOg");
	this.shape_8.setTransform(412.1,528.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FF66").s().p("AAxCsIg3hpQgLgVgJgGQgMgIgOAAIgKAAIAACMIhqAAIAAlXICwAAQAxAAAbAJQAaAIAPAXQAQAXAAAhQAAAcgMAVQgMAVgWAMQgNAIgYAFQATAGAJAHQAGAEALAOQALAOADAHIA0BkgAg+ggIAtAAQAIAAAUgEQAKgCAHgJQAGgJAAgLQAAgRgKgJQgKgIgcAAIgwAAg");
	this.shape_9.setTransform(238.9,531.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66FF66").s().p("AiRCsIAAlXICwAAQA5AAAdAcQAdAbAAAzQAAA0ggAcQgfAdhAAAIg5AAIAACAgAgmgYIAaAAQAdAAANgLQAMgLAAgQQABgQgLgMQgLgLgdAAIgeAAg");
	this.shape_10.setTransform(69.8,528.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33FF00").s().p("AhGECIAAh+ICOAAIAAB+gAgvBgIgdjrIAAh2ICYAAIAAB2IgdDrg");
	this.shape_11.setTransform(610,225.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#33FF00").s().p("AhGECIAAh+ICNAAIAAB+gAguBgIgdjrIAAh2ICYAAIAAB2IgeDrg");
	this.shape_12.setTransform(586,225.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33FF00").s().p("AjsECIAAoDIDsAAQBFAAArATQAsATAbAkQAdAjANAvQAMAwAAA0QAABSgTAuQgTAtghAfQgiAegmALQg0AOgqAAgAhNCNIAnAAQAxAAAVgLQAVgLAMgcQAMgcAAg+QAAhQgagfQgbgeg9AAIgoAAg");
	this.shape_13.setTransform(547.2,225.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33FF00").s().p("ABJECIhUieQgQgegMgJQgSgMgWAAIgNAAIAADRIigAAIAAoDIEIAAQBJAAAoANQAnANAYAiQAYAiAAAxQgBArgSAgQgSAfggASQgUAMgkAIQAcAKANAJQAJAHARAUQAQAVAHALIBMCWgAhcgwIBCAAQALAAAfgHQAPgDALgNQAJgNABgRQgBgZgPgNQgQgOgrAAIhFAAg");
	this.shape_14.setTransform(492.8,225.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#33FF00").s().p("AByECIgahVIizAAIgZBVIijAAIDBoDICtAAIDBIDgAg6A9IBxAAIg3i4g");
	this.shape_15.setTransform(434.1,225.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#33FF00").s().p("Ah3DyQg1gYgng+Qgng+AAheQAAiABFhFQBDhEB8AAQBhAAA4AnQA4AnAbBRIiNAgQgHgXgIgMQgOgSgTgJQgTgLgYABQg1AAgdArQgWAhAABFQAABUAaAgQAaAgAuAAQAuAAAXgaQAYgaAKgxICMArQgOA7gfAnQgeAngsAVQgtAThGABQhTgBg1gYg");
	this.shape_16.setTransform(378.4,225.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#33FF00").s().p("AhOECIAAjYIjKkrICxAAIBoCuIBniuICxAAIjJErIAADYg");
	this.shape_17.setTransform(813.2,121.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#33FF00").s().p("AByECIgahVIi0AAIgYBVIikAAIDCoDICtAAIDCIDgAg6A9IBxAAIg4i4g");
	this.shape_18.setTransform(763.3,121.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#33FF00").s().p("AjsECIAAoDIDsAAQBGAAArATQAqATAdAkQAcAjAMAvQANAwAAA0QAABSgSAuQgUAtghAfQghAegnALQg0AOgqAAgAhNCNIAnAAQAxAAAVgLQAVgLAMgcQAMgcAAg+QAAhQgbgfQgbgeg8AAIgoAAg");
	this.shape_19.setTransform(711.5,121.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#33FF00").s().p("ABWECIAAjRIitAAIAADRIifAAIAAoDICfAAIAAC1ICtAAIAAi1ICgAAIAAIDg");
	this.shape_20.setTransform(652.3,121.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#33FF00").s().p("AhPECIAAmDIiiAAIAAiAIHjAAIAACAIiiAAIAAGDg");
	this.shape_21.setTransform(596.1,121.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#33FF00").s().p("ABKECIhVieQgQgegMgJQgSgMgVAAIgPAAIAADRIigAAIAAoDIEJAAQBKAAAmANQAnANAYAiQAZAiAAAxQAAArgTAgQgSAfggASQgVAMgjAIQAdAKANAJQAIAHARAUQARAVAFALIBOCWgAhdgwIBDAAQAMAAAdgHQAQgDAKgNQALgNgBgRQAAgZgQgNQgPgOgqAAIhHAAg");
	this.shape_22.setTransform(545.8,121.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#33FF00").s().p("AhPECIAAoDICfAAIAAIDg");
	this.shape_23.setTransform(500.8,121.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#33FF00").s().p("AjtECIAAoDIEpAAQBKAAApAlQAnAlAAA3QAAAtgcAhQgTAWglANQA4ANAaAgQAaAgAAAxQAAAogSAgQgTAgggATQgUALgpAGQg2AHgRAAgAhMCTIBQAAQApAAARgOQARgPAAgZQAAgXgRgNQgRgOgqAAIhPAAgAhMg2IBFAAQAkAAAPgNQAOgNAAgYQAAgXgOgNQgPgMgjAAIhGAAg");
	this.shape_24.setTransform(460,121.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#33FF00").s().p("AhOECIAAjYIjKkrICxAAIBoCuIBniuICxAAIjJErIAADYg");
	this.shape_25.setTransform(379,121.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#33FF00").s().p("AjaECIAAoDIEIAAQBWAAAsApQArAqAABMQAABOgvArQgvAshhAAIhWAAIAAC/gAg6glIAnAAQAtAAATgQQATgQAAgZQAAgYgRgRQgQgRgrAAIguAAg");
	this.shape_26.setTransform(326,121.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#33FF00").s().p("AjaECIAAoDIEIAAQBWAAAsApQArAqAABMQAABOgvArQgvAshhAAIhWAAIAAC/gAg6glIAnAAQAtAAATgQQATgQAAgZQAAgYgRgRQgQgRgrAAIguAAg");
	this.shape_27.setTransform(274,121.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#33FF00").s().p("AByECIgahVIi0AAIgZBVIijAAIDDoDICsAAIDCIDgAg5A9IBwAAIg4i4g");
	this.shape_28.setTransform(219.1,121.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#33FF00").s().p("ABXECIAAjRIitAAIAADRIifAAIAAoDICfAAIAAC1ICtAAIAAi1ICgAAIAAIDg");
	this.shape_29.setTransform(160.9,121.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,1,1).p("EA8dgMBIBaAAMAAAAnrIsgAAMAAAgnrQgUnPGakLQBei3hehrQHABYBIHOQATEmjbCwgEAxXgMBILGAAEgkkgMBQgUnPGakLQBfi3hfhrQHABYBIHOQATEmjbCwIBaAAMAAAAmRIAKBaIsqAAMAAAgnrILGAAEg/mgMzQAsoKFniCQCJgxg8ifQI1BAibMcEg/mgMzIN6AAMAAAAoxItwAAIgKhagAU7sBQgUnPGakLQBei3hehrQHABYBIHOQATEmjbCwIBaAAMAAAAmRIgKBaIsWAAMAAAgnrILGAAApYsBQgUnPGakLQBei3hehrQG/BYBIHOQATEmjbCwIBaAAMAAAAmRIAKBaIspAAMAAAgnrILFAA");
	this.shape_30.setTransform(432.1,575.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9966").s().p("EAxXAH+QgUnPGakKQBei3hehrQHABYBIHNQATEmjbCwgAU7H+QgUnPGakKQBei3hehrQHABYBIHNQATEmjbCwgApYH+QgUnPGakKQBei3hehrQG/BYBIHNQATEmjbCwgEgkkAH+QgUnPGakKQBfi3hfhrQHABYBIHNQATEmjbCwgEg/mAHMQAsoJFniCQCJgxg8ifQI1BAibMbg");
	this.shape_31.setTransform(432.1,447.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},10).wait(20));

	// Label
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AACCvIAAjkQgXASgVALQgXALggAKIAAhPQAwgPAbgWQAbgWAPghIBOAAIAAFdg");
	this.shape_32.setTransform(208.4,47.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhNB1QgdgPgTgeQgSgeAAgpQAAg6AlgkQAlgkBDAAQA0AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQADAYAJALQAOAQAVAAQAOAAANgHQAIgFAJgLIBeAJQgWAmgeAQQgfAQg4AAQgxAAgcgNgAgjg2QgJALgCAWIBdAAQgCgbgMgMQgNgMgUAAQgVgBgOATg");
	this.shape_33.setTransform(162.7,52.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgIgKgRAAQgQAAgLAOQgKANgBAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAVgKQATgLAdAAQAoAAAWAXQAXAYAAAxIAACdg");
	this.shape_34.setTransform(130.7,52.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhOB1QgcgPgTgeQgSgeAAgpQAAg6AlgkQAmgkBCAAQA0AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQADAYAJALQAOAQAVAAQAOAAANgHQAIgFAJgLIBeAJQgWAmgeAQQgeAQg5AAQgxAAgdgNgAgjg2QgIALgDAWIBdAAQgCgbgMgMQgNgMgUAAQgVgBgOATg");
	this.shape_35.setTransform(98.7,52.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgQgLgXQgLgWAAglQAAglANgaQAKgSAQgQQARgPASgGQAcgMAqAAQA9AAAgAWQAgAWANAqIhaALQgEgPgLgJQgLgHgTAAQgXAAgOAQQgPASAAAgQAAAfAPAQQAOAQAWAAQASAAANgKQANgJAGgUIBbALQgIAcgRAUQgRAVgaAMQgbALgpAAQgnAAgagHg");
	this.shape_36.setTransform(66.7,52.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ah1CQQghgigFg0IBlgGQADAYALANQAQAVAdAAQAXAAANgKQAMgLgBgOQAAgOgLgKQgLgLgqgJQhGgQgegZQgegaAAgoQAAgbAPgXQAPgYAfgNQAggOA0AAQBCAAAjAZQAiAYAGA2IhkAGQgDgYgNgKQgNgLgVAAQgTAAgKAIQgJAIAAALQAAAIAIAHQAHAHAcAGQBFAPAeAPQAfAPANAWQAOAXAAAcQAAAhgSAcQgTAcghAOQggAPgyAAQhXAAgigig");
	this.shape_37.setTransform(33.2,47.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_38.setTransform(235.5,64.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgLIBeAIQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_39.setTransform(188,69.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgLAOQgKANgBAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAWAXQAXAYAAAxIAACdg");
	this.shape_40.setTransform(156,68.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AlgkQAlgkBDAAQA0AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAJALQAOAQAVAAQAOAAANgHQAIgEAJgLIBeAIQgWAlgeARQgfAQg4AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_41.setTransform(124,69.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgHQgLgJgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_42.setTransform(92,69.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ah1CQQghgigFg0IBlgGQADAYALANQAQAVAdAAQAXAAAMgKQAMgLAAgOQAAgOgLgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAPgYAfgNQAggOA0AAQBCAAAiAZQAjAYAHA2IhlAGQgDgYgNgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAHAHAcAGQBFAPAeAPQAfAPANAWQAOAXAAAcQAAAhgSAcQgTAcghAOQggAPgyAAQhXAAgigig");
	this.shape_43.setTransform(58.5,64.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_44.setTransform(227.4,66.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhOB0QgcgOgTgeQgSgeAAgpQAAg6AlgkQAmgkBCAAQA0AAAfAQQAfARAQAeQAQAfAAAwIAAAKIi+AAQADAYAJALQAOAQAVAAQAOAAANgHQAIgEAJgMIBeAJQgWAlgeARQgfAQg4AAQgxAAgdgOgAgjg3QgIAMgDAWIBdAAQgCgbgMgMQgNgNgUAAQgVAAgOASg");
	this.shape_45.setTransform(179.6,71.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAkB/IAAiIQAAgXgJgKQgIgKgRAAQgPAAgMAOQgLANABAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAVgKQATgLAdAAQAoAAAWAXQAXAYAAAxIAACdg");
	this.shape_46.setTransform(147.6,70.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhOB0QgcgOgTgeQgSgeAAgpQAAg6AlgkQAmgkBCAAQA0AAAfAQQAfARAQAeQAQAfAAAwIAAAKIi+AAQACAYAKALQAOAQAVAAQAPAAAMgHQAIgEAJgMIBeAJQgWAlgeARQgfAQg4AAQgxAAgdgOgAgjg3QgIAMgDAWIBdAAQgDgbgLgMQgNgNgTAAQgWAAgOASg");
	this.shape_47.setTransform(115.6,71.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgRgLgWQgLgWAAglQAAglANgaQAKgSAQgPQARgPASgIQAcgLAqAAQA9AAAgAWQAgAVANArIhaAMQgEgQgLgJQgLgHgTgBQgXAAgOARQgPARAAAiQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbALQgIAcgRAUQgRAVgaAMQgbALgpAAQgnAAgagHg");
	this.shape_48.setTransform(83.6,71.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ah1CQQghgigFg0IBlgGQAEAYAKANQAQAVAeAAQAWAAANgKQAMgLgBgOQAAgOgLgKQgMgLgpgJQhGgQgegZQgegaAAgoQAAgbAPgXQAQgYAegNQAfgOA1AAQBCAAAjAZQAiAYAGA2IhkAGQgDgYgNgKQgNgLgWAAQgSAAgKAIQgJAIAAALQAAAIAIAHQAHAHAdAGQBEAPAeAPQAeAPAOAWQAOAXAAAcQAAAhgTAcQgSAcggAOQgiAPgxAAQhXAAgigig");
	this.shape_49.setTransform(50.1,66.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},10).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},10).wait(10));

	// cake table
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(2,1,1).p("A4/tlIlek2MAAAAk3A4/RgIAA/FMAwbAAAIHCk2MAAAAj7AXctlIAAf3A+dybUAgTABOAcogBO");
	this.shape_50.setTransform(357,633.9);
	this.shape_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(10).to({_off:false},0).to({_off:true},10).wait(10));

	// cake
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(2,1,1).p("Am7oWQAXCFBLA5QCZgMgBiLQAOBaB1AkQBzAlBEjJQA0gEAzgGIAKFdICCAAIEsAAIAUFdIH+AAIALGFAorjCIAAldQA5AFA3AEQCAAJB5ACAt/CbIAAldICqAAQg+CnDKA0QCPgugBicQAGCcDKAkQBwgBBMi1QAqDDDHgDQDKgpggiyAqDCtIAAAAQBbEIB/gEQDogHAHjxQAAAAAAAAQDUABDkgIQDRgIDdgPAt/CbQB7ALCBAHAm7izIAAAAQAAABAAABAm7izQABAAABAAQCFAOCFABQAAAAAAAAQBAAABAgDQCMgFCNgWAorjCQA4AJA4AGArVjCICqAAAy0IXIAAl8ICaAAQAmEwCpgIQDPgMgHkKAwaCbICbAAAjBnvQAAgNgBgPIAAAAQClACCWgMAD+CyIAAAAAD+CyQBzEOCbgNQDEgjgkj1Ai6C5QBgDsCGAEQCkgYAujfAqDCtQDcAMDtAA");
	this.shape_51.setTransform(343.6,464.4);
	this.shape_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(10).to({_off:false},0).to({_off:true},10).wait(10));

	// number 15
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgqB+QgRgFgOgJQgMgKgIgMQgIgMgFgSIBIgIQADARAKAJQAJAKAMgBQAPAAAKgLQAKgMAAgWQAAgXgKgLQgJgKgQAAQgKABgKAEQgIADgIAKIg9gJIAXiJICpAAIAAA5IhyAAIgHAmQAMgFAMgDQALgCALgBQAnAAAYAYQAYAWAAAjQAAAZgMAYQgNAWgWANQgYAMgjAAQgYAAgTgFg");
	this.shape_52.setTransform(339.9,383.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AABCDIAAiqQgQAMgRAJQgQAIgZAHIAAg6QAlgMAUgRQATgQAMgYIA7AAIAAEFg");
	this.shape_53.setTransform(314.3,382.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFF66").ss(2,1,1).p("AAFg2IAAh4ABBgOICMAAAgEAtIAACCAgsAFIigAA");
	this.shape_54.setTransform(332.5,346.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},10).to({state:[]},10).wait(10));

	// present table
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2,1,1).p("AphpIIkOlKIAAclIEOAAIAA3bIW9AAANwuSI7fAA");
	this.shape_55.setTransform(935,421.4);
	this.shape_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(10).to({_off:false},0).to({_off:true},10).wait(10));

	// presents
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2,1,1).p("AI/gJIAAEDIDSAAAGVgJICqAAICgAAAGVgJIAAD5IjOAAIgEj5gALzi9ImaAAIgUmkIGuAAADNJiICqAAIAyhGIAAhzIjfAAIgDi5AMbG4Ij6AAIAACqAlEBuIi0AAIi0AAIhuAAIAEC+IADCbIBnAAIAACbAlEBuIAAkhIAAmuIFxAAIAAGuIlxAAAlEBuIFxAAIgKH0ICqAAIgDi5AsTHHIADCbAqsBuIAAC+IhqAAAlEEdIiqAAIgKivAlEHMIAAivIAAivAlEHMIjSgKIAACgAlEJiIAAiWAAtphIEYAA");
	this.shape_56.setTransform(948.5,269);
	this.shape_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(10).to({_off:false},0).to({_off:true},10).wait(10));

	// balloons
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(2,1,1).p("AOEriQono/AVo/QDwpMGuE+ICMCgQJUlgBKGSQASNKvIFwQnOGpBSLKQFALalAD6AnzkgIAAAAQgBAAgBAAQgGAAgHAAQiLAAhiiLQhiiLAAjFQAAgXABgWQAKioBXh7QBiiLCLAAQCLAABiCLQBWB7ALCoQABAWAAAXQAADFhiCLQhdCDiBAIQAAAAhWD6QhWD5ChEdQEXJBkXJCA3LJZIAAAAQgBAAAAAAQiXAAhriaQhriZAAjaQAAjYBriaQBriaCXAAQCXAABrCaQBrCaAADYQAADahrCZQhrCZiWABQAAAAAAABQicFdCcFeQDMIHjMHD");
	this.shape_57.setTransform(727,270.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0000CC").s().p("AABINIgBAAQiWAAhriaQhriZAAjaQAAjYBribQBriZCWAAQCXAABrCZQBrCbAADYQAADahrCZQhqCZiXABg");
	this.shape_58.setTransform(578.5,278.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#33FF00").s().p("AjsFQQhiiLAAjFIABgsQAKioBXh7QBiiLCKAAQCLAABiCLQBXB7AKCoIABAsQAADFhiCLQhcCDiBAIIgBAAIgBAAIgOAAQiKAAhiiLg");
	this.shape_59.setTransform(675.5,194.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("Arjl/QDwpMGuE+ICLCgQJVlhBJGTQASNJvHFwQomo/AUo+g");
	this.shape_60.setTransform(838,120.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},10).to({state:[]},10).wait(10));

	// short parahraph
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF3399").s().p("AgfB4IAAhYIhAiXIBIAAIAvB0IAsh0IAcAAIg6CXIAABYg");
	this.shape_61.setTransform(828,616.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF3399").s().p("AhYA3IABgOIAigHQgEAPAAALQAAAtAzAAQAoAAAAggQAAgYgwgSQhHgaAAg4QAAghAYgTQAXgUAmAAQBPAAAABHIghAGQADgKAAgGQAAgqgyAAQgoAAAAAdQAAAVAsAQQBWAeAAA5QAAAigYAVQgZAUgoAAQhYAAAAhFg");
	this.shape_62.setTransform(808.9,616.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF3399").s().p("AgiB4IAAjvIBFAAIAADvg");
	this.shape_63.setTransform(793.5,616.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF3399").s().p("AAeB4IgPg0IhHAAIgPA0IgbAAIBGjvIA8AAIBEDvgAgxAsIA6AAIgchqg");
	this.shape_64.setTransform(778.2,616.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF3399").s().p("AhmB4IAAjvIBkAAQBpAAAAB3QAAB4htAAgAggBkIASAAQAZAAAJgVQAKgXAAg4QAAg4gKgWQgJgVgZAAIgSAAg");
	this.shape_65.setTransform(757.1,616.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF3399").s().p("AAYB4QgHgRAAgZIgBgOIAAgSQAAgqggAAIgMAAIAAB0IhGAAIAAjvIBmAAQAoAAAZARQAYARAAAcQAAAsg0ANQAaAJAIAMQAIALADAjQADAoAKANgAgcgOIAOAAQAmAAAAgqQAAgpgmAAIgOAAg");
	this.shape_66.setTransform(922.6,574.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF3399").s().p("AhUB4IAAjvICbAAIAAAYIhVAAIAABJIBHAAIAAAXIhHAAIAABfIBjAAIAAAYg");
	this.shape_67.setTransform(902,574.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF3399").s().p("AgjB4IAAjXIg8AAIAAgYIC/AAIAAAYIg6AAIAADXg");
	this.shape_68.setTransform(882.1,574.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF3399").s().p("AhYA3IABgOIAigHQgEAPAAALQAAAtAzAAQAoAAAAggQAAgYgwgSQhHgaAAg4QAAghAYgTQAXgUAmAAQBPAAAABHIghAGQADgKAAgGQAAgqgyAAQgoAAAAAdQAAAVAsAQQBWAeAAA5QAAAigYAVQgZAUgoAAQhYAAAAhFg");
	this.shape_69.setTransform(862.9,574.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF3399").s().p("AgiB4IAAjvIBFAAIAADvg");
	this.shape_70.setTransform(847.5,574.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF3399").s().p("AhYA3IABgOIAigHQgEAPAAALQAAAtAzAAQAoAAAAggQAAgYgwgSQhHgaAAg4QAAghAYgTQAXgUAmAAQBPAAAABHIghAGQADgKAAgGQAAgqgyAAQgoAAAAAdQAAAVAsAQQBWAeAAA5QAAAigYAVQgZAUgoAAQhYAAAAhFg");
	this.shape_71.setTransform(832,574.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF3399").s().p("AgVAhQAPgJAEgSQgcAAAAgdQAAgfAeAAQAfAAAAAlQAAA4g0AQg");
	this.shape_72.setTransform(806.3,586.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF3399").s().p("AgfB4IAAhZIhAiWIBIAAIAvB0IAsh0IAcAAIg6CWIAABZg");
	this.shape_73.setTransform(792,574.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF3399").s().p("AhTB4IAAjvIBGAAIAADXIBhAAIAAAYg");
	this.shape_74.setTransform(775,574.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF3399").s().p("AAYB4QgHgRAAgZIgBgOIAAgSQAAgqggAAIgMAAIAAB0IhGAAIAAjvIBmAAQAoAAAZARQAYARAAAcQAAAsg0ANQAaAJAIAMQAIALADAjQADAoAKANgAgcgOIAOAAQAmAAAAgqQAAgpgmAAIgOAAg");
	this.shape_75.setTransform(753.8,574.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF3399").s().p("AhUB4IAAjvICaAAIAAAYIhUAAIAABJIBHAAIAAAXIhHAAIAABfIBjAAIAAAYg");
	this.shape_76.setTransform(733.2,574.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF3399").s().p("AhjAEQAAg4AggjQAegkAyAAQBNAAAABLIgdAOIAAgQQAAg1grAAQgrAAgBBvQAABhAyAAQAUAAAOgRQAOgQAAgZQAAgIgCgQIAdAIIABAQQAAAjgaAVQgYAVgrAAQhqAAAAh4g");
	this.shape_77.setTransform(712.1,574.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF3399").s().p("AAjB4IhjiXIAACXIgXAAIAAjvIAsAAIBsCjIAAijIAXAAIAADvg");
	this.shape_78.setTransform(690.3,574.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF3399").s().p("AgiB4IAAjvIBFAAIAADvg");
	this.shape_79.setTransform(673.9,574.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF3399").s().p("AhYA3IABgOIAigHQgEAPAAALQAAAtAzAAQAoAAAAggQAAgYgwgSQhHgaAAg4QAAghAYgTQAXgUAmAAQBPAAAABHIghAGQADgKAAgGQAAgqgyAAQgoAAAAAdQAAAVAsAQQBWAeAAA5QAAAigYAVQgZAUgoAAQhYAAAAhFg");
	this.shape_80.setTransform(658.5,574.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0033").s().p("Ag9C5QAAg+A9AAQA+AAAAA+QAAA+g+AAQg9AAAAg+gAgZBIIgsj7IgBgNQABg2BFAAQBHAAAAA2IgBANIgrD7g");
	this.shape_81.setTransform(627.6,481.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0033").s().p("Ag9C5QAAg+A9AAQA+AAAAA+QAAA+g+AAQg9AAAAg+gAgaBIIgqj7IgBgNQAAg2BFAAQBGAAAAA2IgBANIgrD7g");
	this.shape_82.setTransform(601.6,481.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0033").s().p("Ag9C5QAAg+A9AAQA+AAAAA+QAAA+g+AAQg9AAAAg+gAgaBIIgrj7IgBgNQAAg2BGAAQBHAAAAA2IgBANIgrD7g");
	this.shape_83.setTransform(575.5,481.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0033").s().p("Ai2BOIAAlBICMAAIAAFGQAAA/ASAXQASAXAwAAQBeAAAAhyIAAlBIAvAAIAAFBQAACmi3AAQi2AAAAimg");
	this.shape_84.setTransform(540.7,482);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0033").s().p("AjUgEQAAjzDYAAQDRAAAAD3QAAD4jVAAQjUAAAAj8gAg0ilQgOArAAB6QAAB7AOAsQAOArAmAAQAnAAAOgrQAOgsAAh7QAAh6gOgrQgOgsgnAAQgmAAgOAsg");
	this.shape_85.setTransform(495.5,481.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0033").s().p("Ag+DwIAAixIiCkuICQAAIBhDoIBYjoIA4AAIh1EuIAACxg");
	this.shape_86.setTransform(453.8,481.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0033").s().p("AipDwIAAnfIE2AAIAAAwIirAAIAACRICQAAIAAAvIiQAAIAAC/IDIAAIAAAwg");
	this.shape_87.setTransform(812.5,399.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0033").s().p("AhDDwIiAnfICNAAIBeFqIBolqIA0AAIiMHfg");
	this.shape_88.setTransform(772.3,399.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0033").s().p("AjUgEQAAjzDYAAQDRAAAAD3QAAD4jVAAQjUAAAAj8gAg0ilQgOArAAB6QAAB7AOAsQAOArAmAAQAnAAAOgrQAOgsAAh7QAAh6gOgrQgOgsgnAAQgmAAgOAsg");
	this.shape_89.setTransform(729.8,399.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0033").s().p("AinDwIAAnfICLAAIAAGvIDEAAIAAAwg");
	this.shape_90.setTransform(690.8,399.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0033").s().p("Ag9C5QAAg+A9AAQA+AAAAA+QAAA+g+AAQg9AAAAg+gAgaBIIgqj7IgCgNQABg2BFAAQBGAAAAA2IgBANIgrD7g");
	this.shape_91.setTransform(635.2,399.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0033").s().p("Ag9C5QAAg+A9AAQA+AAAAA+QAAA+g+AAQg9AAAAg+gAgZBIIgsj7IgBgNQAAg2BGAAQBHAAAAA2IgBANIgrD7g");
	this.shape_92.setTransform(609.2,399.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0033").s().p("Ag/DwIAAixIiBkuICQAAIBiDnIBYjnIA3AAIh1EuIAACxg");
	this.shape_93.setTransform(577.8,399.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0033").s().p("AA7DwIgchoIiQAAIgfBoIg2AAICOnfIB6AAICFHfgAhjBYIB0AAIg3jUg");
	this.shape_94.setTransform(539.9,399.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0033").s().p("AjNDwIAAnfIDIAAQDSAAAADvQAADwjaAAgAhBDJIAlAAQAxgBATgrQATgsAAhxQAAhwgTgsQgTgrgxAAIglAAg");
	this.shape_95.setTransform(498,399.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0033").s().p("AhJDwIAAmvIh2AAIAAgwIF/AAIAAAwIh2AAIAAGvg");
	this.shape_96.setTransform(433,399.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0033").s().p("AA7DwIgdhoIiPAAIgeBoIg3AAICOnfIB5AAICGHfgAhjBYIB1AAIg4jUg");
	this.shape_97.setTransform(394.9,399.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0033").s().p("AipDwIAAnfIE2AAIAAAwIirAAIAACRICQAAIAAAvIiQAAIAAC/IDIAAIAAAwg");
	this.shape_98.setTransform(358.2,399.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0033").s().p("AAvDwQgOgiAAgxIgBgdIgBgjQABhUhCAAIgZAAIAADnIiKAAIAAnfIDNAAQBQAAAxAiQAvAiAAA5QAABXhmAaQA1ATAPAYQAPAYAHBDQAGBRAVAagAg7gdIAdAAQBOgBAAhSQAAhShOAAIgdAAg");
	this.shape_99.setTransform(315.7,399.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0033").s().p("AiPC5Qg7hBAAhzQAAhxA+hFQA+hGBkAAQCFAAAdCIIhBAdIAAgLIgBgaQgHhUhIAAQg0gBgTAuQgTAtAAB5QAAByAQApQAPAqArAAQA0AAAAg6IAAh2IhGAAIAAgvIDGAAIAAECIgsAAIgPghQg6AphBAAQhqAAg6g/g");
	this.shape_100.setTransform(268.6,399.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0033").s().p("AA7DwIgchoIiQAAIgfBoIg2AAICOnfIB6AAICFHfgAhjBYIB0AAIg3jUg");
	this.shape_101.setTransform(804.2,318.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0033").s().p("AipDwIAAnfIE2AAIAAAxIirAAIAACRICQAAIAAAuIiQAAIAAC/IDIAAIAAAwg");
	this.shape_102.setTransform(745.9,318.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0033").s().p("AhDDwIiAnfICNAAIBeFrIBolrIA0AAIiMHfg");
	this.shape_103.setTransform(705.7,318.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0033").s().p("AA7DwIgchoIiQAAIgfBoIg2AAICOnfIB5AAICGHfgAhjBYIB0AAIg3jUg");
	this.shape_104.setTransform(667.1,318.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0033").s().p("AA5DwIAAjvIhxAAIAADvIiLAAIAAnfICLAAIAADBIBxAAIAAjBICLAAIAAHfg");
	this.shape_105.setTransform(624,318.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0033").s().p("AgtBBQAfgTAJgiQg4AAAAg8QAAg9A9AAQA+AAAABKQAABwhrAhg");
	this.shape_106.setTransform(568.4,341);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0033").s().p("AAvDwQgOghAAgzIgBgcIAAgkQgBhThCAAIgXAAIAADnIiMAAIAAnfIDOAAQBRAAAvAiQAxAiAAA5QAABXhoAbQA1ASAQAYQAQAXAFBEQAHBRAUAagAg6gdIAcAAQBOAAAAhTQAAhShOgBIgcAAg");
	this.shape_107.setTransform(536.7,318.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0033").s().p("AipDwIAAnfIE2AAIAAAxIirAAIAACRICQAAIAAAuIiQAAIAAC/IDIAAIAAAwg");
	this.shape_108.setTransform(495.4,318.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0033").s().p("AA5DwIAAjvIhwAAIAADvIiMAAIAAnfICMAAIAADBIBwAAIAAjBICLAAIAAHfg");
	this.shape_109.setTransform(450.6,318.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0033").s().p("AhJDwIAAmuIh2AAIAAgxIF/AAIAAAxIh2AAIAAGug");
	this.shape_110.setTransform(408.3,318.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0033").s().p("AjUgEQAAjzDYAAQDRAAAAD3QAAD4jVAAQjUAAAAj8gAg0ilQgOArAAB6QAAB7AOAsQAOArAmAAQAnAAAOgrQAOgsAAh7QAAh6gOgrQgOgsgnAAQgmAAgOAsg");
	this.shape_111.setTransform(366.3,318.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0033").s().p("AAvDwQgOghAAgzIgBgcIAAgkQAAhThDAAIgXAAIAADnIiMAAIAAnfIDOAAQBRAAAvAiQAxAiAAA5QAABXhoAbQA1ASAQAYQAPAXAGBEQAHBRAUAagAg6gdIAcAAQBOAAAAhTQAAhShOgBIgcAAg");
	this.shape_112.setTransform(321.5,318.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0033").s().p("AjGDwIAAnfIDUAAQClAAAAB2QAABThjAYQB4AXgBBnQABCAiiAAgAg7DIIAoAAQBNAAgBhZQAAhnhPABIglAAgAg7geIAqAAQA7AAAAhYQAAhRg+AAIgnAAg");
	this.shape_113.setTransform(276.4,318.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0033").s().p("AiPC4Qg7g/AAh1QAAhwA+hFQA+hGBkAAQCFAAAdCHIhBAeIAAgLIgBgaQgHhUhIAAQg0AAgTAtQgTAsAAB6QAAByAQAqQAPApArAAQA0AAAAg6IAAh2IhGAAIAAgvIDGAAIAAECIgsAAIgPghQg6AphBAAQhqAAg6hAg");
	this.shape_114.setTransform(711,236.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0033").s().p("ABGDwIjHkuIAAEuIgvAAIAAnfIBYAAIDaFHIAAlHIAvAAIAAHfg");
	this.shape_115.setTransform(667.1,236.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF0033").s().p("AhFDwIAAnfICLAAIAAHfg");
	this.shape_116.setTransform(634.4,236.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF0033").s().p("Ai/DwIAAgwIDjl/IjDAAIAAgwIFfAAIAAAsIjlGDIDUAAIAAAwg");
	this.shape_117.setTransform(603.4,236.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF0033").s().p("AA7DwIgdhoIiPAAIgfBoIg2AAICOnfIB5AAICGHfgAhjBYIB0AAIg3jUg");
	this.shape_118.setTransform(564.4,236.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF0033").s().p("ABaDwIAAlNIhdFNIhNAAIhglHIAAFHIgvAAIAAnfICNAAIBSEhIBRkhICPAAIAAHfg");
	this.shape_119.setTransform(518.4,236.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF0033").s().p("AA7DwIgdhoIiPAAIgeBoIg3AAICOnfIB5AAICGHfgAhjBYIB0AAIg3jUg");
	this.shape_120.setTransform(472.6,236.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF0033").s().p("Ag/DwIAAixIiBkuICRAAIBhDoIBXjoIA4AAIh1EuIAACxg");
	this.shape_121.setTransform(413.3,236.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF0033").s().p("ABaDwIAAlNIhdFNIhNAAIhglHIAAFHIgvAAIAAnfICNAAIBSEhIBRkhICPAAIAAHfg");
	this.shape_122.setTransform(368.3,236.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF0033").s().p("AjUgEQAAjzDYAAQDRAAAAD3QAAD4jVAAQjUAAAAj8gAg0ilQgOArAAB6QAAB7AOAsQAOArAmAAQAnAAAOgrQAOgsAAh7QAAh6gOgrQgOgsgnAAQgmAAgOAsg");
	this.shape_123.setTransform(843,154.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF0033").s().p("AhIDwIAAmvIh3AAIAAgwIF/AAIAAAwIh2AAIAAGvg");
	this.shape_124.setTransform(801,154.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF0033").s().p("Ag/DwIAAixIiBkuICQAAIBiDnIBYjnIA3AAIh1EuIAACxg");
	this.shape_125.setTransform(742.4,154.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF0033").s().p("AA7DwIgchoIiQAAIgfBoIg2AAICOnfIB6AAICFHfgAhjBYIB0AAIg3jUg");
	this.shape_126.setTransform(704.5,154.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0033").s().p("AjNDwIAAnfIDHAAQDTAAAADvQAADwjaAAgAhBDJIAlAAQAxgBATgrQATgsAAhxQAAhwgTgsQgTgrgxAAIglAAg");
	this.shape_127.setTransform(662.6,154.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0033").s().p("AA5DwIAAjvIhxAAIAADvIiLAAIAAnfICLAAIAADBIBxAAIAAjBICLAAIAAHfg");
	this.shape_128.setTransform(614.2,154.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0033").s().p("AhIDwIAAmvIh3AAIAAgwIF/AAIAAAwIh2AAIAAGvg");
	this.shape_129.setTransform(571.8,154.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0033").s().p("AAvDwQgOgiAAgxIgBgdIAAgjQgBhUhCAAIgXAAIAADnIiMAAIAAnfIDOAAQBRAAAvAiQAxAiAAA5QAABXhoAaQA1ATAQAYQAQAYAFBDQAHBRAUAagAg6gdIAcAAQBOgBAAhSQAAhShOAAIgcAAg");
	this.shape_130.setTransform(531.7,154.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0033").s().p("AhEDwIAAnfICJAAIAAHfg");
	this.shape_131.setTransform(496.6,154.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0033").s().p("AjHDwIAAnfIDVAAQClAAAAB2QAABThkAYQB5AXAABoQAAB/iiAAgAg7DJIAnAAQBOAAAAhaQgBhmhPgBIglAAgAg7geIAqAAQA7AAAAhYQAAhRg+AAIgnAAg");
	this.shape_132.setTransform(464.3,154.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0033").s().p("Ag+DwIAAixIiCkuICQAAIBhDnIBYjnIA4AAIh1EuIAACxg");
	this.shape_133.setTransform(400.4,154.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0033").s().p("Ai/DwIAAnfIDOAAQCwAAABCNQgBCNjCAAIgwAAIAADFgAgzAAIAfAAQBLAAAAhlQAAhdhLAAIgfAAg");
	this.shape_134.setTransform(362.3,154.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF0033").s().p("Ai/DwIAAnfIDOAAQCwAAAACNQAACNjCAAIgwAAIAADFgAgzAAIAfAAQBLAAAAhlQAAhdhLAAIgfAAg");
	this.shape_135.setTransform(319.3,154.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF0033").s().p("AA7DwIgchoIiQAAIgfBoIg2AAICOnfIB5AAICGHfgAhjBYIB0AAIg3jUg");
	this.shape_136.setTransform(276.5,154.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF0033").s().p("AA5DwIAAjvIhxAAIAADvIiLAAIAAnfICLAAIAADBIBxAAIAAjBICLAAIAAHfg");
	this.shape_137.setTransform(233.4,154.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},20).wait(10));

	// Button
	this.btn_play = new lib.BasicButton();
	this.btn_play.name = "btn_play";
	this.btn_play.parent = this;
	this.btn_play.setTransform(888.2,684.7);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_play).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(525.9,394,975.3,745.9);
// library properties:
lib.properties = {
	id: '820F1C39EA4BE04E864DC19E3EFA350D',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#66CCFF",
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
an.compositions['820F1C39EA4BE04E864DC19E3EFA350D'] = {
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