(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.BasicButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rounded
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape.setTransform(50,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_1.setTransform(50,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_2.setTransform(50,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_3.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Squared
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_4.setTransform(50,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_5.setTransform(50,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_7.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.parent = this;
	this.next_btn.setTransform(-13,105);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,104,102,52);


// stage content:
(lib.AnimatedCardARamirez = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("happymothersdaywav");
		playSound("happymothersdaywav");
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(2);
		}
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(1));

	// candle
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgdD0IAAhaAAejyIAAED");
	this.shape.setTransform(181.1,413.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("AADDyQhRh6AUi4IA8i+QA3AWAFAHIAABHIAAECIAAAxIgyBmIgJgNg");
	this.shape_1.setTransform(177.8,404.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9933").s().p("AADEjQhRiTAUjeIA8jkQA3AaAFAJIAAHHIgyB7IgJgQg");
	this.shape_2.setTransform(177.8,404.1,1,1.392);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAAA2IAAhr");
	this.shape_3.setTransform(178.1,438.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9933").s().p("AADGVQhRjMAUk2IA8k9QA3AkAFAMIAAJ6IgyCrIgJgWg");
	this.shape_4.setTransform(177.8,404.2,1,0.859);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9933").s().p("AADGCQhRjDAUknIA8kuQA3AjAFALIAAJcIgyCjIgJgVg");
	this.shape_5.setTransform(177.8,404.2,1,0.803);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AAADYIAAmv");
	this.shape_6.setTransform(179.3,416.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{scaleY:1,y:404.9}},{t:this.shape,p:{scaleY:1,y:413.7}}]},34).to({state:[{t:this.shape_1,p:{scaleY:1.203,y:404.1}},{t:this.shape,p:{scaleY:1.203,y:414.6}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// HEART
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFCCFF").ss(1,1,1).p("AAeBAQg7gbAAglQAAgkA7gb");
	this.shape_7.setTransform(185,230.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#330033").ss(1,1,1).p("ADmAAQAAA2hDAmQgXANgZAIQgNAEgOAEQgpAJgvAAQgDAAgEAAQgwgBgogKQgEgCgEgBQgcgIgZgNQgDgBgDgCQhDgmAAg2QAAgdAVgZQAQgUAegRQAggSAmgJQArgLAxAAQAFAAAGAAQBYACBAAkQAgASARAWQASAYAAAbg");
	this.shape_8.setTransform(610.4,446.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("ACyvhQD5juFOBpQFHCYAxEJQAOBNgJBWQABBrgnByQgOArgVArQgUArgaAtQgMAVgOAWIhKBUQgbhugJhrQgDgtgBgsIDdAFAN3jxIC2ACAOrDZIBZA8QgjhOgahLAP/iXIg4ETQgahMgShIAMXB0ICUBlANzlKQgDkxCUkVIqtHrAvctMQArhgBRhVQFQj3FdDEIBuBTIB9CQIgSFpAg4j7IBTABIguOpIpuoHIJJmjIAfgWAAbj8IAAACIAIAAAD2kAIALAIIIWFsIrjJ3IhHg8ADbj4IAmAAAwQpgQACh+AyhugAxFlyIBZACQgmh/AChxIg1DuIg0DuICuEcIO7OFIAAAAIO7tEAvFkFQgXg3gQg0IFiAHQADA0gCA0QgFC7g+CvQgfBXguBVICYhtArMBpIhQhDQgEgDgDgDQhoiZg6iMIE8AEAA0LrIhEEyAB7jvIhHPaAgpSLIAAAAIAAAAgAA4tRQA6hTBAg9IgkHuAhNmoIrMnoQCAEeAPEJ");
	this.shape_9.setTransform(597.3,483.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhFMqIAvupIhUgBIpJGjIiYBtQAuhUAfhYQA+iwAFi6Ik8gDQgWg3gQg1IFhAHQACAkAAAkIgBAgIABggQAAgkgCgkQgPkJiAkeILMHpQgVAZAAAeQAAA2BDAmIAGADIgfAWIAfgWQAZANAcAIIAAACIAIAAQAoALAvABIhHPZgAN6FUIiUhlIoWlrIgMgIQAagIAWgNQBDgmAAg2QAAgcgSgYQASAYAAAcQAAA2hDAmQgWANgaAIIgbAHQgoAKgwAAIgIAAQgvgBgogLIgIgCQgcgIgZgNIgGgDQhDgmAAg2QAAgeAVgZQARgUAdgRQAggSAngKQApgKAyAAIALAAQBZACA/AkQAgASARAWIKtnsQiUEVADEyIDdAEQgOArgVAsIi1gCQgEgtgBgsQABAsAEAtQAIBqAbBtQASBKAaBLQAaBMAjBNgACph9IAbgHIAMAIgAgOh/gAgWh/IAAgCIAIACgAhLiWIAAAAgAE3j1IAAAAgAAGrWQA6hTBAg8IgkHuIgLAAQgyAAgpAKg");
	this.shape_10.setTransform(602.3,470.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33FFFF").s().p("AgpSLIAAAAIAAAAgAgQQdIu7uFIiukcIA0juIA1juIAAAJQAABtAkB6IhZgCIBZACQgkh6AAhtIAAgJIA0jsQArhgBRhVQFQj3FdDEIBuBTIB9CQIgSFpQgmAJgfASQgeARgQAUIrMnoQCAEeAPEJIligHQAQA0AXA3QA6CMBoCZIAHAGIBQBDIhQhDIgHgGQhoiZg6iMIE8AEQgFC7g+CvQgfBXguBVICYhtIJuIHIpuoHIJJmjIBTABIguOpIBHA8IhEEyIBEkyILjp3ICUBlIu7NEgAA0LrgAB7jvIAIAAQAwAAAogJIAmAAIIWFsIrjJ3gAObgYIBKhUIAagrIg4ETQgahMgShIgAObgYQgbhugJhrIC2ACQgUArgaAtIgaArIhKBUIAAAAgAP/iXgANzlKQgDkxCUkVIqtHrQgRgVgggTQg/gjhZgDIAknuQD5juFOBpQFHCYAxEJQAOBNgJBWQABBrgnByg");
	this.shape_11.setTransform(597.3,483.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFCCFF").ss(1,1,1).p("AC5BIQg8AShQAAQhfAAhDgaQhDgaAAgmQAAglBDgaQBDgaBfAAQBQAAA8AT");
	this.shape_12.setTransform(200.5,483.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFCCFF").ss(1,1,1).p("AA8qBQg8AThPAAQhgAAhDgbQhDgaAAglQAAgmBDgaQBDgaBgAAQBPAAA8ASADcKUQAMAEALAEQBDAaAAAmQAAAlhDAaQgLAFgMAD");
	this.shape_13.setTransform(213,554.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFCCFF").ss(1,1,1).p("AA8qBQgoANgxAEQgYACgaAAQhgAAhDgbQhDgaAAglQAAgmBDgaQBDgaBgAAQAaAAAYACQAxAEAoAMADcKUQAMAEALAEQBDAaAAAmQAAAlhDAaQgLAFgMAD");
	this.shape_14.setTransform(213,554.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("ARJvkIgDgGACyvhQD5juFOBpQDRBhA6B1QA0ATgEAjQgDAkANBFQAZgDAOgCQAHAYAFAZQAOBNgJBWQABBrgnByQgOArgVArQgUArgaAtQgMAVgOAWIhKBUQgbhugJhrQgDgtgBgsIDdAFAN3jxIC2ACAOrDZIBZA8QgjhOgahLAP/iXIg4ETQgahMgShIAMXB0ICUBlANzlKQAKkkCHkiIqtHrAvctMQArhgBRhVQFQj3FdDEIBuBTIB9CQIgSFpAg4j7IBTABIguOpIpuoHIJJmjIAfgWAAbj8IAAACIAIAAAD2kAIALAIIIWFsIrjJ3IhHg8ADbj4IAmAAAwQpgQACh+AyhugAxFlyIBZACQgmh/AChxIg1DuIg0DuICuEcIO7OFIAAAAIO7tEAvFkFQgXg3gQg0IFiAHQADA0gCA0QgFC7g+CvQgfBXguBVICYhtArMBpIhQhDQgEgDgDgDQhoiZg6iMIE8AEAA0LrIhEEyAB7jvIhHPaAgpSLIAAAAIAAAAgAA4tRQA6hTBAg9IgkHuAhNmoIrMnoQCAEeAPEJ");
	this.shape_15.setTransform(597.3,483.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhFMqIAvupIhUgBIpJGjIiYBtQAuhUAfhYQA+iwAFi6Ik8gDQgWg3gQg1IFhAHQACAkAAAkIgBAgIABggQAAgkgCgkQgPkJiAkeILMHpQgVAZAAAeQAAA2BDAmIAGADIgfAWIAfgWQAZANAcAIIAAACIAIAAQAoALAvABIhHPZgAN6FUIiUhlIoWlrIgMgIQAagIAWgNQBDgmAAg2QAAgcgSgYIKtnsQiHEjgKEkIDdAEQgOArgVAsIi1gCQgEgtgBgsQABAsAEAtQAIBqAbBtQASBKAaBLQAaBMAjBNgABJhzQgvgBgogLIgIgCQgcgIgZgNIgGgDQhDgmAAg2QAAgeAVgZQARgUAdgRQAggSAngKQApgKAyAAIALAAQBZACA/AkQAgASARAWQASAYAAAcQAAA2hDAmQgWANgaAIIgbAHQgoAKgwAAIgIAAgACph9IAbgHIAMAIgAgOh/gAgWh/IAAgCIAIACgADEiEgAhLiWIAAAAgAAGrWQA6hTBAg8IgkHuIgLAAQgyAAgpAKg");
	this.shape_16.setTransform(602.3,470.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#33FFFF").s().p("AgpSLIAAAAIAAAAgAgQQdIBEkyIhEEyIu7uFIiukcIA0juIA1juIAAAJQAABtAkB6IhZgCIBZACQgkh6AAhtIAAgJIA0jsQArhgBRhVQFQj3FdDEIBuBTIB9CQIgSFpQgmAJgfASQgeARgQAUIrMnoQCAEeAPEJIligHQAQA0AXA3QA6CMBoCZIAHAGIBQBDIhQhDIgHgGQhoiZg6iMIE8AEQgFC7g+CvQgfBXguBVICYhtIJuIHIpuoHIJJmjIBTABIguOpIBHA8IBHvaIAIAAQAwAAAogJIAmAAIIWFsICUBlIu7NEgAA0LrILjp3gAObgYIBKhUIAagrIg4ETQgahMgShIgAN3jxIC2ACQgUArgaAtIgaArIhKBUQgbhugJhrgANzlKQAKkkCHkiQA0ATgEAjQgDAkANBFIAngFQAHAYAFAZQAOBNgJBWQABBrgnBygAEmnNQg/gjhZgDIAknuQD5juFOBpQDRBhA6B1IqtHrQgRgVgggTg");
	this.shape_17.setTransform(597.3,483.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_12},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_14},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_8}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_8}]},1).wait(13));

	// TEXT
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0099").s().p("AgrCPIAAh4IhwilIBiAAIA5BhIA6hhIBiAAIhwClIAAB4g");
	this.shape_18.setTransform(748.3,720.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0099").s().p("AA/CPIgOgvIhkAAIgNAvIhbAAIBskdIBfAAIBsEdgAgfAiIA+AAIgfhmg");
	this.shape_19.setTransform(720.6,720.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0099").s().p("AiDCPIAAkdICDAAQAnAAAYAKQAXALAQAUQAQATAHAbQAHAaAAAdQAAAtgLAZQgKAagTARQgSARgWAFQgdAIgXAAgAgqBOIAVAAQAbAAAMgGQAMgGAGgPQAHgQAAgiQAAgtgPgQQgPgRghAAIgWAAg");
	this.shape_20.setTransform(691.8,720.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0099").s().p("AhhB4QgcgcgEgrIBUgGQADAVAIAKQAOASAYgBQATABALgJQAKgJAAgMQAAgLgKgJQgKgIgigJQg6gNgZgUQgZgWAAgiQAAgWANgTQAMgUAagLQAagLAsAAQA2AAAdAUQAdAUAGAtIhUAFQgDgTgLgJQgKgJgSAAQgQAAgHAHQgIAGAAAJQAAAIAGAFQAGAFAYAGQA5AMAZANQAZANAMARQALATAAAYQAAAcgPAWQgQAYgbAMQgbAMgqAAQhIAAgcgcg");
	this.shape_21.setTransform(647.7,720.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0099").s().p("AApCPIguhXQgJgRgHgFQgKgHgMAAIgIAAIAAB0IhZAAIAAkdICTAAQApAAAVAHQAWAHANATQAOATAAAbQAAAYgLASQgKARgRAKQgMAGgUAFQAQAFAIAFQAEAEAKALQAJAMADAGIArBTgAgzgaIAlAAQAGAAARgEQAJgCAFgHQAGgHAAgKQAAgNgJgIQgJgHgXAAIgnAAg");
	this.shape_22.setTransform(619.3,720.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0099").s().p("Ah4CPIAAkdIDsAAIAAA9IiTAAIAAAuICJAAIAAA5IiJAAIAAA4ICYAAIAABBg");
	this.shape_23.setTransform(588.3,720.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0099").s().p("AAxCPIAAh0IhhAAIAAB0IhYAAIAAkdIBYAAIAABkIBhAAIAAhkIBYAAIAAEdg");
	this.shape_24.setTransform(556.7,720.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0099").s().p("AgrCPIAAjWIhaAAIAAhHIEMAAIAABHIhaAAIAADWg");
	this.shape_25.setTransform(525.5,720.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0099").s().p("AhMCFQgggQgTgiQgVghABgyQAAhFAngnQAngnBFAAQBHAAAmAmQAoAnAABFQAAAxgRAgQgSAgggASQggASgvAAQgwAAgfgPgAgrg+QgQAUAAAqQAAAsAQASQAQATAbAAQAdAAAPgSQAQgTAAguQAAgpgQgTQgQgSgcAAQgbAAgQASg");
	this.shape_26.setTransform(495.5,720.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0099").s().p("ABYCPIAAjZIg3DZIhBAAIg4jZIAADZIhIAAIAAkdIB0AAIAsCtIAsitIB1AAIAAEdg");
	this.shape_27.setTransform(460.1,720.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0099").s().p("AgrCPIAAh4IhwilIBiAAIA5BhIA6hhIBiAAIhwClIAAB4g");
	this.shape_28.setTransform(412.3,720.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0099").s().p("Ah5CPIAAkdICTAAQAvAAAZAXQAXAXAAAqQAAArgaAYQgaAYg1AAIgwAAIAABqgAgggUIAWAAQAYAAALgJQAKgJAAgOQAAgNgIgJQgKgKgYAAIgZAAg");
	this.shape_29.setTransform(382.8,720.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0099").s().p("Ah5CPIAAkdICTAAQAvAAAZAXQAXAXAAAqQAAArgaAYQgaAYg2AAIgvAAIAABqgAgggUIAWAAQAYAAALgJQAKgJAAgOQAAgNgIgJQgJgKgYAAIgaAAg");
	this.shape_30.setTransform(353.9,720.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0099").s().p("AA/CPIgOgvIhkAAIgNAvIhbAAIBrkdIBgAAIBsEdgAggAiIA+AAIgehmg");
	this.shape_31.setTransform(323.4,720.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0099").s().p("AAwCPIAAh0IhfAAIAAB0IhZAAIAAkdIBZAAIAABkIBfAAIAAhkIBZAAIAAEdg");
	this.shape_32.setTransform(291.1,720.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(42));

	// balloons
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("EA3rgAJQgNgBgNgBQgJgCgKgCQhdgXhHhpQhZiFAAi8QAAi9BZiFQBaiFB+AAQAtAAAoARQBJAeA6BWQBZCFAAC9QAAC8hZCFQg6BWhJAfQgZAKgaAEQgMACgMABQgFAAgFAAQgDAAgEAAICEBwIiEAAIAAPyEA3rABnIiKAAICKhwgAVKl6QgQADgRAAQgbAAgZgGQhegXhGhpQhZiFAAi8QAAi9BZiFQBZiFB/AAQB+AABZCFQBaCFAAC9QAAC8haCFQhNB0hpAPIh2BxIB2AAICEAAIiEhxIAABxIAAViA6CKJICEAAIiEhxgA6CIYQgQADgRAAQgbAAgZgGQhegXhGhpQhZiFAAi8QAAi8BZiFQBZiFB/AAQB+AABZCFQBaCFAAC8QAAC8haCFQhNB0hpAPIh2BxIB2AAIAAVjEg3QgQ6QgQADgRAAQgbAAgZgGQhdgYhHhtQhZiLAAjEQAAjFBZiLQBZiKB/AAQB/AABZCKQBZCLAADFQAADEhZCLQhOB4hpAQIAAB1ICEAAIiEh1Ih2B1IB2AAIAAWc");
	this.shape_33.setTransform(491.6,219.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9933CC").s().p("AgGIAIiKAAICKhyIAAByIAAhyICDBygAAAGOIgGAAIgagCIgTgEQhdgWhHhpQhZiFAAi8QAAi8BZiGQBaiFB9AAQAtAAAoARQBJAeA6BWQBZCGAAC8QAAC8hZCFQg6BWhJAfQgZAKgaAEIgYACIgKAAg");
	this.shape_34.setTransform(848.6,178.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#99FF99").s().p("AAhITIh1AAIB1h1IAAB1IAAh1ICEB1gAgzGbQhegYhGhtQhZiLAAjDQAAjFBZiLQBaiKB9AAQB+AABZCKQBaCLAADFQAADDhaCLQhMB4hqAQQgQADgRAAQgaAAgZgGg");
	this.shape_35.setTransform(134.6,69.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF00").s().p("AAhH+IAAhxICEBxgAAhH+Ih1AAIB1hxQgQADgRAAQgaAAgZgGQhegWhGhpQhZiGAAi7QAAi9BZiFQBaiFB9AAQB/AABZCFQBZCFAAC9QAAC7hZCGQhOBzhpAPIAABxg");
	this.shape_36.setTransform(321.5,233.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF3366").s().p("AAhH+IAAhxQgQADgRAAQgaAAgZgGQhegWhGhpQhZiFAAi8QAAi8BZiGQBaiFB9AAQB/AABYCFQBaCGAAC8QAAC8haCFQhMBzhqAPICEBxgAAhH+Ih1AAIB1hxIAABxg");
	this.shape_37.setTransform(623.6,142);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("EAlfgdmQgRADgRAAQgbAAgZgGQhdgWhHhpQhZiGAAi8QAAi9BZiFQBaiFB+AAQB/AABZCFQBZCFAAC9QAAC8hZCGQhNBzhpAPIAABxICDAAIiDhxIh3BxIB3AAIAAVjAgz8aQgRADgRAAQgbAAgZgGQhdgXhHhpQhZiFAAi8QAAi9BZiFQBaiFB+AAQB+AABZCFQBZCFAAC9QAAC8hZCFQhNB0hoAPIh3BxIB3AAICCAAIiChxIAABxIAAVkEgkbAUeQgQADgRAAQgbAAgZgGQhegXhGhpQhZiFAAi8QAAi9BZiFQBZiFB/AAQB+AABZCFQBaCFAAC9QAAC8haCFQhNB0hpAPIh2BxIB2AAICEAAIiEhxIAABxIAAVj");
	this.shape_38.setTransform(387.1,303.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#99FF99").s().p("AAhH+IAAhxQgQADgRAAQgaAAgZgGQhegXhGhpQhZiEAAi8QAAi9BZiFQBZiFB+AAQB/AABYCFQBaCFAAC9QAAC8haCEQhMB0hqAPICEBxgAhUH+IB1hxIAABxg");
	this.shape_39.setTransform(150.6,395);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF00").s().p("AAiH+IAAhwQgRACgRAAQgaAAgZgGQhdgXhHhpQhZiFAAi7QAAi9BZiFQBZiFB+AAQB+AABZCFQBaCFAAC9QAAC7haCFQhMB0hpAQICDBwgAAiH+Ih2AAIB2hwIAABwg");
	this.shape_40.setTransform(378.5,82.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF3366").s().p("AAhH+Ih1AAIB1hxIAABxIAAhxICEBxgAgzGKQhegWhGhpQhZiFAAi8QAAi8BZiGQBaiFB9AAQB/AABYCFQBaCGAAC8QAAC8haCFQhMBzhqAPQgQADgRAAQgaAAgZgGg");
	this.shape_41.setTransform(623.6,74.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("EAmQgfFQgRACgRAAQgbAAgZgGQhdgWhHhpQhZiFAAi9QAAi8BZiGQBaiFB+AAQB/AABZCFQBZCGAAC8QAAC9hZCFQhNBzhpAQIAABwIAAVkEAmQgfFIh3BwIB3AAICDAAgAhk4JQgRADgRAAQgbAAgZgGQhdgXhHhpQhZiFAAi8QAAi9BZiFQBaiFB+AAQB/AABYCFQBZCFAAC9QAAC8hZCFQhNB0hoAPIh3BxIB3AAICCAAIiChxIAABxIAAVjEglMAV+QgQACgRAAQgbAAgZgGQhegWhGhpQhZiGAAi8QAAi9BZiFQBZiFB/AAQAtAAAoARQBJAeA5BWQBaCFAAC9QAAC8haCGQg5BWhJAeQgZAKgbAFIAABwICEAAIiEhwIh2BwIB2AAIAAVk");
	this.shape_42.setTransform(392,325.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#99FF99").s().p("AAhH+IAAhxQgQADgRAAQgaAAgZgGQhegWhGhpQhZiGAAi7QAAi9BZiFQBZiFB+AAQAtAAAoARQBJAeA5BWQBaCFAAC9QAAC7haCGQg5BVhJAgQgZAJgbAEICEBxgAAhH+Ih1AAIB1hxIAABxg");
	this.shape_43.setTransform(150.6,426.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF00").s().p("AAiH+IAAhxQgRADgRAAQgaAAgZgGQhdgXhHhoQhZiGAAi7QAAi9BZiFQBZiFB+AAQB+AABZCFQBaCFAAC9QAAC7haCGQhMBzhpAPICDBxgAAiH+Ih2AAIB2hxIAABxg");
	this.shape_44.setTransform(378.5,131.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF3366").s().p("AAiH+IAAhxQgRADgRAAQgaAAgZgGQhegWhGhpQhZiFAAi8QAAi8BZiGQBZiFB+AAQB/AABYCFQBaCGAAC8QAAC8haCFQhNBzhoAPICDBxgAAiH+Ih2AAIB2hxIAABxg");
	this.shape_45.setTransform(633.4,87);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("EAlfgfoQgRACgRAAQgbAAgZgGQhdgWhHhpQhZiFAAi9QAAi8BZiGQBaiFB+AAQB/AABZCFQBZCGAAC8QAAC9hZCFQhNBzhpAQIh3BwIB3AAICDAAIiDhwIAABwIAAVkAgz6uQgRADgRAAQgbAAgZgGQhdgXhHhpQhZiFAAi8QAAi9BZiFQBaiFB+AAQB+AABZCFQBZCFAAC9QAAC8hZCFQhNB0hoAPIh3BxIB3AAICCAAIiChxIAABxIAAVjEgkbAWhQgQACgRAAQgbAAgZgGQhegWhGhpQhZiGAAi8QAAi9BZiFQBZiFB/AAQAtAAAoARQBJAeA5BWQBaCFAAC9QAAC8haCGQg5BWhJAeQgZAKgbAFIAABwIAAVkEgkbAWhIh2BwIB2AAICEAAg");
	this.shape_46.setTransform(387.1,322.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF3366").s().p("AAhH+IAAhwQgQACgRAAQgaAAgZgGQhegWhGhpQhZiFAAi8QAAi8BZiGQBaiFB9AAQB/AABYCFQBaCGAAC8QAAC8haCFQhMBzhqAQICEBwgAAhH+Ih1AAIB1hwIAABwg");
	this.shape_47.setTransform(623.6,80);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AAiH+IAAhxQgRADgRAAQgaAAgZgGQhdgXhHhpQhZiEAAi8QAAi9BZiFQBZiFB+AAQB+AABZCFQBaCFAAC9QAAC8haCEQhMB0hpAPICDBxgAAiH+Ih2AAIB2hxIAABxg");
	this.shape_48.setTransform(378.5,111.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("EAlfggJQgRADgRAAQgbAAgZgGQhdgXhHhpQhZiFAAi8QAAi9BZiFQBaiFB+AAQB/AABZCFQBZCFAAC9QAAC8hZCFQhNB0hpAPIh3BxIB3AAICDAAIiDhxIAABxIAAVjEgAzggJQgRADgRAAQgbAAgZgGQhdgXhHhpQhZiFAAi8QAAi9BZiFQBaiFB+AAQB9AABZCEQABAAAAABQBZCFAAC9QAAC8hZCFQAAABgBAAQhNBzhnAPIh3BxIB3AAICCAAIiChxIAABxIAAVjEgkbAXBQgQADgRAAQgbAAgZgGQhegXhGhpQhZiFAAi8QAAi9BZiFQBZiFB/AAQAtAAAoARQBJAeA5BWQBaCFAAC9QAAC8haCFQg5BWhJAfQgZAKgbAEIAABxIAAVjEgkbAXBIh2BxIB2AAICEAAg");
	this.shape_49.setTransform(387.1,319);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF00").s().p("AAiH+IAAhwICDBwgAhUH+IB2hwIAABwgAgzGKQhdgXhHhpQhZiFAAi7QAAi9BZiFQBZiFB+AAQB+AABZCFIAAAAQBaCFAAC9QAAC7haCFIAAABQhNBzhoAQQgRACgRAAQgaAAgZgGgAAiGOg");
	this.shape_50.setTransform(378.5,73.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF3366").s().p("AAhH+IAAhwQgQACgRAAQgaAAgZgGQhegXhGhpQhZiFAAi7QAAi9BZiFQBaiFB9AAQB/AABYCFQBaCFAAC9QAAC7haCFQhMB0hqAQICEBwgAAhH+Ih1AAIB1hwIAABwg");
	this.shape_51.setTransform(623.6,73.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("EAlegYXQgQACgRAAQgbAAgZgGQhegWhGhpQhZiFAAi9QAAi8BZiGQBZiFB/AAQB+AABZCFQBaCGAAC8QAAC9haCFQhNBzhpAQIh2BwIB2AAIAAVkAgz19QgQADgRAAQgbAAgZgGQhegXhGhpQhZiFAAi8QAAi9BZiFQBZiFB/AAQB9AABZCFQBaCFAAC9QAAC8haCFQhNB0hoAPIh2BxIB2AAIAAViAgz0MICDAAIiDhxgEAlegWnICEAAIiEhwgEgkaAPQQgRACgRAAQgbAAgZgGQhdgXhHhpQhZiFAAi8QAAi9BZiFQBaiFB+AAQAtAAAoARQBJAeA6BWQBZCFAAC9QAAC8hZCFQg6BXhJAeQgZAKgaAFIAABwIAAVkEgkaAPQIh3BwIB3AAICDAAg");
	this.shape_52.setTransform(387,368.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFF00").s().p("AAiH+IAAhwQgRACgRAAQgaAAgZgGQhdgWhHhqQhZiEAAi8QAAi8BZiGQBZiFB+AAQB+AABZCFQBaCGAAC8QAAC8haCEQhMB0hpAQICDBwgAAiH+Ih2AAIB2hwIAABwg");
	this.shape_53.setTransform(378.5,188.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF3366").s().p("AAhH+IAAhwQgQACgRAAQgaAAgZgGQhegXhGhpQhZiFAAi7QAAi9BZiFQBZiFB+AAQB/AABYCFQBaCFAAC9QAAC7haCFQhMB0hqAQICEBwgAAhH+Ih1AAIB1hwIAABwg");
	this.shape_54.setTransform(623.5,173);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("EAlFgmeQADAAAEAAEAlFgmeQABAAABAAQAGgBAHgCQADAAADgBQgfACg9AEIghACEAk4gmaQAGgCAHgCEAlOgmaQBKAaA4BhQBOCGAAC8QAAC9hOCFQhCBzhbAQQgPACgOAAQgYAAgWgGQhRgWg9hpQhNiFAAi9QAAidA1h2QALgYANgXQAkg9ArghQAZgUAbgJQA8gCAsgCAAc1+QgQADgQAAQgbAAgZgGQhegXhGhpQhZiFAAi8QAAi9BZiFQBZiFB/AAQB9AABZCFQBaCFAAC9QAAC8haCFQhNB0hpAPIh1BxIB1AAIAAViAAc0NICEAAIiEhxgEAkzgWoIByAAIhyhwgEAkzgYYIhnBwIBnAAIAAVkEgjKAPOQgRADgRAAQgbAAgZgGQhdgXhHhpQhZiFAAi8QAAi9BZiFQBaiFB+AAQAtAAAoARQBJAeA6BWQBZCFAAC9QAAC8hZCFQg6BWhJAfQgZAKgaAEIAABxICDAAIiDhxIh3BxIB3AAIAAVk");
	this.shape_55.setTransform(379.1,368.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF3366").s().p("AAdH+IAAhwIByBwgAAdH+IhmAAIBmhwIAABwgAgsGKQhRgXg9hpQhOiFAAi7QAAidA2h3QALgYANgWQAkg9ArgiQAYgTAcgKIAhgBIAEAAIAWgCIA7gDIAlgCIATgBIAFAAIAAAJIhEAAQBLAaA4BiQBOCFAAC9QAAC7hOCFQhDB0hbAQQgOACgPAAQgWAAgWgGgAAwn3IhnADIBaAAIATAAQAJgCgJgBIgFAAIAOgDIgOADIgBAAg");
	this.shape_56.setTransform(611.6,173);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("EAlegYHQgQACgRAAQgbAAgZgGQhegWhGhpQhZiFAAi9QAAi8BZiGQBZiFB/AAQB+AABZCFQBaCGAAC8QAAC9haCFQhNBzhpAQIh2BwIB2AAIAAVkAgz1tQgQADgRAAQgbAAgZgGQhegXhGhpQhZiFAAi8QAAi9BZiFQBZiFB/AAQB9AABZCFQBaCFAAC9QAAC8haCFQhNB0hoAPIh2BxIB2AAIAAViAgzz8ICDAAIiDhxgEAlegWXICEAAIiEhwgEgkaAPfQgRADgRAAQgbAAgZgGQhdgXhHhpQhZiFAAi8QAAi9BZiFQBaiFB+AAQAtAAAoARQBJAeA6BWQBZCFAAC9QAAC8hZCFQg6BWhJAfQgZAKgaAEIAABxICDAAIiDhxIh3BxIB3AAIAAVE");
	this.shape_57.setTransform(387,367.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_48},{t:this.shape_43},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_43},{t:this.shape_49}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_56},{t:this.shape_53},{t:this.shape_43},{t:this.shape_55}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_43},{t:this.shape_57}]},1).to({state:[]},1).wait(12));

	// cake
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("AMpp6IAACnIAADpIAAD5IAAD6IAAD6QFLBZAAB+QAAB+lOBaQlOBZnYAAQnXAAlOhZQiXgphTgwQhkg6AAhFQAAhFBkg6QBTgwCXgpQA6gPA+gNAqtp4QikhAAAhTQAAhpEKhLQELhLF4AAQF5AAELBLQEKBLAABpQAABSihA/QguASg7ARQkLBLl5AAQl4AAkLhLQg5gQgtgRgAqtnTIAAilAqtgEIAAjmIAAjpQMSESLEkSAqtHmIAAAAIAAkFIAAjlQMlDJKxi2AqtHmIXWAdIAAEXI3WAAgAqtjqQLrC6Lri6AqtDhIXWAo");
	this.shape_58.setTransform(163.1,541.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#99CCCC").s().p("AslC5QiXgohTgwQhkg6AAhEQAAhGBkg6QBTgwCXgoQA6gQA+gNIAAABIAAEyIXWAAIAAkVQFLBZAAB+QAAB9lOBZQlOBanYAAQnXAAlOhag");
	this.shape_59.setTransform(163.1,617.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#663333").s().p("ArpOSIAAkzIXWAdIAAEWgArpFaIAAjmQMlDKKxi2IAAD6gArphxIAAjqQMSESLEkSIAADqQl1Bdl2AAQl1AAl2hdgAqDneQg5gQgtgSQikg/AAhTQAAhqEKhLQELhKF4AAQF5AAEKBKQELBLAABqQAABSihA/QguASg8ARQkKBLl5AAQl4AAkLhLg");
	this.shape_60.setTransform(169.1,529.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC9999").s().p("ArrIiIAAAAIAAkFIXWAoIAAD6gArrA3IAAjlQLrC5Lri5IAAD5QlGBWlhAAQmHAAmohqgArrmYIAAikQAtARA5AQQELBLF5AAQF4AAEKhLQA8gRAugSIAACmQliCKl1AAQl1AAmKiKg");
	this.shape_61.setTransform(169.3,535.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},34).wait(8));

	// family heart
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AgGmpQh8iChtglQhMgZhEATIgCAAQiNARhGByQguBNgRB8QgICKAzCAIArBZQANAWAOAVQBTB8CRBxIE9DuIgCr/IACkJAIEoMQgngcgmgSQglgRgpgKQgXgFgWgBIgJgBQhLgBhIAnQhTAshOBhIChiNQDBhFCjBvIAaATAKSi2QABgYgBgYQAFAfgFARQg7HqpUErIFwkbIA8g8QC5jHAqj3gAKSjmQgHichth3QBlC9APBWg");
	this.shape_62.setTransform(364.8,603.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF66CC").s().p("AAMFxQiPhxhUh8QgOgVgMgWIgshZQgyiAAIiKQAQh8AuhNQBGhyCOgRIACAAQBDgTBLAZQBtAlB9CCIADEJIACL/g");
	this.shape_63.setTransform(331.6,603.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF6699").s().p("AAAAMIAAgaIAAAdg");
	this.shape_64.setTransform(328.9,644.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(1,1,1).p("AjjnVQh8iChtglQhMgZhEATIgCAAQiNARhGByQguBNgRB8QgICKAzCAIArBZQANAWAOAVQBTB8CRBxIE9DuAJSFwIA8g8QC5jHAqj3QAJi6h9iJQg0gpgzgYQglgRgpgKQgXgFgWgBIgJgBQihgDiUC2IAFQIg");
	this.shape_65.setTransform(386.9,608);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF6699").s().p("ADdl9QCUi2ChADIAJABQAWABAXAFQApAKAlARQAzAYA0ApQB9CJgJC6QgqD3i5DHIg8A8IlwEbgAobFFQiRhxhTh8QgOgVgNgWIgrhZQgziAAIiKQARh8AuhNQBGhyCNgRIACAAQBEgTBMAZQBtAlB8CCIAFQIgApDF1IABgbIAAAeg");
	this.shape_66.setTransform(386.9,608);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(1,1,1).p("EAsZghsIClBdIgCmRQhBgzg5gOQgogKgjAIIgBAAQhKAGgkAsQgYAegJAwQgEA2AaAyIAXAjQAGAIAIAIQArAxBMArgEgkvAWIQh9iChtglQhLgahEAUIgCAAQiOAQhGByQguBOgQB7QgICLAyCAIAsBaQAMAVAOAVQBUB9CQBxIE+DtEgX6AjOIA8g8QC5jIAqj3QAKi7h9iIQg1gqgzgYQgkgQgqgLQgWgEgWgCIgKAAQihgDiTC2IAFQIg");
	this.shape_67.setTransform(599.3,419.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF6699").s().p("A9uXgQCTi2ChADIAKAAQAWACAWAEQAqALAkAQQAzAYA1AqQB9CIgKC7QgqD3i5DIIg8A8IlvEagEgpoAijQiQhxhUh9QgOgVgMgVIgshaQgyiAAIiLQAQh7AuhOQBGhyCOgQIACAAQBEgUBLAaQBtAlB9CCIAFQIgEgqQAjSIABgbIAAAfgEAsZghsQhMgrgrgxIgOgQIgXgjQgagyAEg2QAJgwAYgeQAkgsBKgGIABAAQAjgIAoAKQA5AOBBAzIACGRg");
	this.shape_68.setTransform(599.3,419.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(1,1,1).p("AqMgPQh8iChtglQhMgZhEATIgCAAQiNARhGByQguBMgRB8QgICKAzCAIArBaQANAWAOAVQBTB8CRBxIE9DuAP7hXIA8g8QC5jHAqj4QAJi6h9iJQg0gpgzgYQglgRgpgKQgXgFgWgBIgJgBQihgDiUC2IAFQIg");
	this.shape_69.setTransform(430.4,562.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF6699").s().p("AvEMLQiRhxhTh8QgOgVgNgWIgrhaQgziAAIiKQARh8AuhMQBGhyCNgRIACAAQBEgTBMAZQBtAlB8CCIAFQIgAvsM7IABgbIAAAegAKGtFQCUi2ChADIAJABQAWABAXAFQApAKAlARQAzAYA0ApQB9CJgJC6QgqD4i5DHIg8A8IlwEag");
	this.shape_70.setTransform(430.4,562.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("EAsZghAIClBdIgCmRQhBgzg5gOQgogKgjAIIgBAAQhKAGgkAsQgYAegJAwQgEA2AaAyIAXAjQAGAIAIAIQArAxBMArgASHBtIA8g8QC5jHAqj3QAKi7h9iIQg1gqgzgYQgkgQgqgLQgWgEgWgCIgKAAQihgDiTC2IAFQHgEgkvAW0Qh9iChtglQhLgahEAUIgCAAQiOAQhGByQguBOgQB7QgICLAyCAIAsBaQAMAVAOAVQBUB9CQBxIE+Dt");
	this.shape_71.setTransform(598.3,415);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF6699").s().p("EgpoAjPQiQhxhUh9QgOgVgMgVIgshaQgyiAAIiLQAQh7AuhOQBGhyCOgQIACAAQBEgUBLAaQBtAlB9CCIAFQIgEgqQAj+IABgbIAAAfgAMTqAQCTi2ChADIAKAAQAWACAWAEQAqALAkAQQAzAYA1AqQB9CIgKC7QgqD3i5DHIg8A8IlvEagEAsZghAQhMgrgrgxIgOgQIgXgjQgagyAEg2QAJgwAYgeQAkgsBKgGIABAAQAjgIAoAKQA5AOBBAzIACGRg");
	this.shape_72.setTransform(598.3,415);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(1,1,1).p("EAsZghAIClBdIgCmRQhBgzg5gOQgogKgjAIIgBAAQhKAGgkAsQgYAegJAwQgEA2AaAyIAXAjQAGAIAIAIQArAxBMArgAdXn+IA8g8QC5jIAqj3QAKi7h9iIQg1gqgzgYQgkgQgqgLQgWgEgWgCIgKAAQihgDiTC2IAFQIgEgkvAW0Qh9iChtglQhLgahEAUIgCAAQiOAQhGByQguBOgQB7QgICLAyCAIAsBaQAMAVAOAVQBUB9CQBxIE+Dt");
	this.shape_73.setTransform(598.3,417);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF6699").s().p("EgpoAjPQiQhxhUh9QgOgVgMgVIgshaQgyiAAIiLQAQh7AuhOQBGhyCOgQIACAAQBEgUBLAaQBtAlB9CCIAFQIgEgqQAj+IABgbIAAAfgAXjzsQCTi2ChADIAKAAQAWACAWAEQAqALAkAQQAzAYA1AqQB9CIgKC7QgqD3i5DIIg8A8IlvEagEAsZghAQhMgrgrgxIgOgQIgXgjQgagyAEg2QAJgwAYgeQAkgsBKgGIABAAQAjgIAoAKQA5AOBBAzIACGRg");
	this.shape_74.setTransform(598.3,417);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(1,1,1).p("EApsghAICmBdIgDmRQhBgzg5gOQgngKgkAIIgBAAQhJAGglAsQgYAegJAwQgEA2AbAyIAWAjQAHAIAHAIQAsAxBLArgEAvUghnIAggWQBghIAWhaQAFhDhBgxQgbgPgbgJQgTgGgWgEQgLgCgMAAIgFAAQhUgBhNBBIADF2gEgncAW0Qh8iChtglQhMgahEAUIgCAAQiNAQhGByQguBOgRB7QgICLAzCAIArBaQANAVAOAVQBTB9CRBxIE9Dt");
	this.shape_75.setTransform(615.6,417);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF6699").s().p("EgsUAjPQiRhxhTh9QgOgVgNgVIgrhaQgziAAIiLQARh7AuhOQBGhyCNgQIACAAQBEgUBMAaQBtAlB8CCIAFQIgEgs8Aj+IABgbIAAAfgEApsghAQhLgrgsgxIgOgQIgWgjQgbgyAEg2QAJgwAYgeQAlgsBJgGIABAAQAkgIAnAKQA5AOBBAzIADGRgEAsSgl3QBNhBBUABIAFAAIAXACQAWAEATAGQAbAJAbAPQBBAxgFBDQgWBahgBIIggAWIi/Bmg");
	this.shape_76.setTransform(615.6,417);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#9999FF").s().p("AgvCsIAAhUIBfAAIAABUgAgfBAIgTidIAAhOIBlAAIAABOIgUCdg");
	this.shape_77.setTransform(659,326.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#9999FF").s().p("AgYClQgRgJgIgSQgIgTAAgqIAAhWIgkAAIAAhGIAkAAIAAgtIBfgyIAABfIA0AAIAABGIg0AAIAABXQAAAQACAFQAFAIAMAAQALAAASgGIAIBCQgkAHgeAAQgkABgQgKg");
	this.shape_78.setTransform(640.4,326.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#9999FF").s().p("AhhB/IAAj4IBZAAIAAApQAMgaAOgKQAOgKAUAAQAVAAAZANIgeBEQgQgHgKAAQgTAAgKAPQgOAWAAA7IAABTg");
	this.shape_79.setTransform(618.8,331.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#9999FF").s().p("Ah3BtQgXgUAAgeQgBgdASgSQAQgRAsgJIBFgPQAQgFASgGQAAgSgHgHQgIgIgSAAQgWABgMAHQgJAGgFAQIhcgKQAFgYAKgNQAJgNATgLQANgHAXgEQAXgEAbAAQAqAAAZAFQAaAEASAQQAMALAHATQAHATAAASIAABsQAAASACAKQADAKAIAPIhaAAIgHgOIgEgQQgTASgSAIQgYAKghAAQgtAAgXgVgAgCATQgdAHgIAIQgIAIAAAKQAAALAIAHQAIAHAPAAQAQAAANgHQAOgJAFgKQAGgMAAgRIAAgPQgUAGgUAGg");
	this.shape_80.setTransform(590.1,331.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9999FF").s().p("AhNB0QgdgOgSgeQgTgfAAgpQAAg5AmgkQAlgkBBAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAALIi+AAQACAWALAMQANAQAWAAQANAAANgHQAIgEAJgLIBeAIQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgDgcgMgMQgMgMgTAAQgWABgOARg");
	this.shape_81.setTransform(558.1,331.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9999FF").s().p("AAjCsIAAiJQABgYgJgJQgJgJgPAAQgRAAgKAMQgMANAAAiIAAB4IheAAIAAlXIBeAAIAAB/QAUgUATgJQASgJAbAAQAnAAAXAYQAVAYAAAwIAACeg");
	this.shape_82.setTransform(526.1,326.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#9999FF").s().p("AhhB/IAAj4IBZAAIAAApQAMgaAOgKQAOgKAUAAQAVAAAZANIgeBEQgQgHgKAAQgTAAgKAPQgOAWAAA7IAABTg");
	this.shape_83.setTransform(485.5,331.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#9999FF").s().p("AhsBoQgXgYABgxIAAidIBfAAIAACIQAAAXAJAKQAJAKAPAAQAQAAALgNQALgNAAghIAAh4IBfAAIAAD4IhZAAIAAgpQgTAZgUALQgUAKgeAAQgnAAgWgXg");
	this.shape_84.setTransform(456.7,331.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#9999FF").s().p("AhgBjQguglAAg9QAAg4AnglQAmglBBAAQBKAAAnAsQAeAiAAAzQAAA5gmAlQgmAkhDAAQg8AAgkgfgAgggvQgOAPgBAgQABAiAOAQQAMAPAUAAQAUAAAOgPQANgPAAgjQAAgggNgPQgOgQgTgBQgUAAgNARg");
	this.shape_85.setTransform(424.7,331.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9999FF").s().p("Ah9CpIgHhCQAUAHAagBQARAAAKgHQAKgIAIgUIhpj4IBlAAIAyCmIAwimIBeAAIhjEJQgRAtgRAQQgYAXgzAAQgVAAgrgGg");
	this.shape_86.setTransform(395,336.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#9999FF").s().p("AAkB/IAAiIQAAgXgJgKQgJgKgQAAQgPAAgMAOQgLANABAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAVgKQATgLAdAAQAoAAAWAXQAXAYAAAxIAACdg");
	this.shape_87.setTransform(348.3,331.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#9999FF").s().p("AgvCsIAAj4IBeAAIAAD4gAgvhqIAAhBIBeAAIAABBg");
	this.shape_88.setTransform(324.2,326.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#9999FF").s().p("AhNB0QgdgOgTgeQgSgfAAgpQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAALIi+AAQADAWAKAMQANAQAWAAQAOAAAMgHQAIgEAJgLIBeAIQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgMQgMgMgUAAQgVABgOARg");
	this.shape_89.setTransform(284.3,331.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9999FF").s().p("AB0B/IAAiNQAAgQgHgJQgKgNgOAAQgRAAgKANQgKAMAAAbIAAB/IhfAAIAAiIQAAgQgCgGQgDgJgHgGQgIgGgKAAQgQAAgLAMQgLANAAAbIAAB/IhfAAIAAj4IBZAAIAAAlQATgXAUgKQATgJAcAAQAeAAAQAKQASALALAVQAWgZATgIQASgJAbAAQAoAAAXAYQAWAXAAAzIAACbg");
	this.shape_90.setTransform(244.3,331.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#9999FF").s().p("AhlCbQgcgWAAgmIAAgNIBdALQADANAHAFQALAHAPAAQAVAAAKgLQAKgLAAgbIAAgmQgOAQgOAIQgVAMgaAAQgyAAgegsQgWgeAAgzQAAg6AcgeQAcgfAuAAQAdAAASAKQASAKARAXIAAglIBZAAIAADqIAAALQAAAXgKAWQgKAVgQANQgRANgZAGQgaAGggAAQhKAAgcgXgAgeheQgLANAAAfQAAAbAMANQALAMASAAQASAAAMgNQAMgNAAgcQAAgbgNgOQgNgPgRAAQgSAAgLAOg");
	this.shape_91.setTransform(746.5,266.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#9999FF").s().p("AAkB/IAAiIQAAgXgJgKQgJgKgPAAQgQAAgLAOQgLANAAAhIAAB3IhfAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYAAAxIAACdg");
	this.shape_92.setTransform(715.2,261.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9999FF").s().p("AgvCsIAAj4IBfAAIAAD4gAgvhqIAAhBIBfAAIAABBg");
	this.shape_93.setTransform(691.1,256.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#9999FF").s().p("AgqB9Ihoj4IBkAAIAvCcIAyicIBgAAIhqD4g");
	this.shape_94.setTransform(668.6,261.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#9999FF").s().p("Ah3BuQgXgVAAgfQgBgcASgSQAQgSAsgIIBFgPQAQgEASgIQAAgRgHgIQgIgGgSAAQgWgBgMAIQgJAGgFAQIhcgJQAFgZAKgNQAJgOATgKQANgHAXgEQAXgEAbAAQApAAAaAFQAaAEASAQQAMAKAHAUQAIATgBARIAABuQAAARACAKQADAKAIAQIhaAAIgHgPIgEgQQgTASgSAIQgYAKghAAQgtAAgXgUgAgCATQgdAHgIAIQgIAIAAAJQAAAMAIAHQAIAHAPAAQAQAAANgIQAOgHAFgMQAGgKAAgTIAAgPQgUAIgUAFg");
	this.shape_95.setTransform(638.7,261.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#9999FF").s().p("AAkCsIAAiJQgBgYgIgJQgIgJgRAAQgPAAgMAMQgLANABAiIAAB4IhgAAIAAlXIBgAAIAAB/QATgUASgJQAUgJAaAAQAnAAAWAYQAXAYAAAwIAACeg");
	this.shape_96.setTransform(606.7,256.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9999FF").s().p("AheBuQgdgTgIgjIBegJQAGAQALAIQAKAHARAAQATAAALgJQAIgGAAgIQAAgLgLgFQgIgFgggFQgygJgTgIQgTgHgNgQQgOgRAAgXQAAgZAPgSQAOgRAZgKQAZgIAqAAQAsAAAVAHQAVAGAOAPQAPAOAJAZIhbAJQgDgMgIgGQgMgHgOAAQgRAAgHAFQgHAGAAAIQAAAJAJAFQAJAEAfAFQAvAEAYAKQAXAKAMAQQAMATAAAVQAAAVgNAUQgNAVgcAMQgcAMgwAAQhDAAgdgUg");
	this.shape_97.setTransform(559.7,261.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9999FF").s().p("Ah9CqIgHhDQAUAGAaAAQARABAKgJQAKgHAIgUIhpj4IBlAAIAyCmIAwimIBeAAIhjEJQgRAugRAQQgYAWgzAAQgVAAgrgFg");
	this.shape_98.setTransform(530.8,266.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#9999FF").s().p("Ah3BuQgXgVAAgfQgBgcASgSQAQgSAsgIIBFgPQAQgEASgIQAAgRgHgIQgIgGgSAAQgWgBgMAIQgJAGgFAQIhcgJQAFgZAKgNQAJgOATgKQANgHAXgEQAXgEAbAAQAqAAAZAFQAaAEASAQQAMAKAHAUQAHATAAARIAABuQAAARACAKQADAKAIAQIhaAAIgHgPIgEgQQgTASgSAIQgYAKghAAQgtAAgXgUgAgCATQgdAHgIAIQgIAIAAAJQAAAMAIAHQAIAHAPAAQAQAAANgIQAOgHAFgMQAGgKAAgTIAAgPQgUAIgUAFg");
	this.shape_99.setTransform(500.1,261.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9999FF").s().p("AAyB9IgyiVIgwCVIhVAAIhcj4IBcAAIAnCbIAzibIBWAAIA0CbIAoibIBbAAIhbD4g");
	this.shape_100.setTransform(462,261.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#9999FF").s().p("AgvCsIAAlXIBfAAIAAFXg");
	this.shape_101.setTransform(431.2,256.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#9999FF").s().p("Ah3BuQgYgVAAgfQABgcAQgSQARgSAtgIIBFgPQAPgEASgIQAAgRgHgIQgIgGgSAAQgWgBgMAIQgJAGgGAQIhbgJQAFgZAKgNQAKgOASgKQANgHAXgEQAXgEAbAAQApAAAbAFQAaAEARAQQAMAKAIAUQAGATABARIAABuQAAARACAKQACAKAHAQIhaAAIgHgPIgCgQQgUASgSAIQgYAKgiAAQgsAAgXgUgAgCATQgdAHgIAIQgIAIAAAJQAAAMAIAHQAIAHAPAAQAQAAANgIQANgHAHgMQAFgKAAgTIAAgPQgUAIgUAFg");
	this.shape_102.setTransform(407.3,261.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#9999FF").s().p("AhhB/IAAj4IBZAAIAAApQAMgaAOgKQAOgKAUAAQAVAAAZANIgeBEQgQgHgKAAQgTAAgKAPQgOAWAAA7IAABTg");
	this.shape_103.setTransform(366.7,261.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#9999FF").s().p("AhgBkQgugmAAg9QAAg4AnglQAmglBBAAQBKAAAmArQAfAkAAAyQAAA5gmAkQgmAlhDAAQg8AAgkgegAgggvQgOAPgBAhQABAhAOAPQAMAQAUAAQAVAAANgPQANgQAAgiQAAgggNgQQgNgPgUAAQgUAAgNAQg");
	this.shape_104.setTransform(338,261.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#9999FF").s().p("Ag+CvIAAiyIgjAAIAAhGIAjAAIAAgLQAAgQADgSQAEgSAIgMQAKgLAQgHQAQgIAfAAQAYAAAxAGIgLA6QgRgDgLAAQgMAAgHAEQgFAFgDAJQgBAFAAARIAuAAIAABGIguAAIAACyg");
	this.shape_105.setTransform(314.3,256.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#9999FF").s().p("AAmCsIgyhkIgjAjIAABBIhiAAIAAlXIBiAAIAACxIBGhSIB1AAIhZBWIBfCig");
	this.shape_106.setTransform(273.5,256.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#9999FF").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgLAOQgKANgBAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAWAXQAXAYAAAxIAACdg");
	this.shape_107.setTransform(240.1,261.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#9999FF").s().p("Ah3BuQgYgVABgfQgBgcASgSQAQgSAsgIIBFgPQAQgEASgIQAAgRgHgIQgIgGgSAAQgWgBgMAIQgJAGgFAQIhcgJQAGgZAJgNQAJgOATgKQANgHAXgEQAXgEAbAAQAqAAAaAFQAZAEASAQQAMAKAIAUQAGATAAARIAABuQAAARADAKQACAKAIAQIhaAAIgHgPIgDgQQgUASgSAIQgYAKghAAQgtAAgXgUgAgCATQgdAHgIAIQgIAIAAAJQAAAMAIAHQAIAHAPAAQAQAAANgIQAOgHAFgMQAGgKAAgTIAAgPQgUAIgUAFg");
	this.shape_108.setTransform(208.1,261.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#9999FF").s().p("AAjCsIAAiJQAAgYgIgJQgIgJgRAAQgQAAgLAMQgKANgBAiIAAB4IheAAIAAlXIBeAAIAAB/QAUgUASgJQAUgJAaAAQAnAAAWAYQAXAYAAAwIAACeg");
	this.shape_109.setTransform(176.1,256.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#9999FF").s().p("Ag0CsIAAkCIhtAAIAAhVIFDAAIAABVIhtAAIAAECg");
	this.shape_110.setTransform(141.4,256.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#9999FF").s().p("AgvCsIAAhUIBfAAIAABUgAgeBAIgUidIAAhOIBlAAIAABOIgTCdg");
	this.shape_111.setTransform(666.3,194.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#9999FF").s().p("Ah9CpIgHhCQAUAHAaAAQARgBAKgHQAKgIAIgUIhpj4IBlAAIAyCmIAwimIBeAAIhjEJQgRAtgRAQQgYAXgzAAQgVAAgrgGg");
	this.shape_112.setTransform(643.8,204.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#9999FF").s().p("Ah3BtQgXgUAAgeQgBgdASgSQAQgRAsgJIBFgPQAQgFASgGQAAgSgHgHQgIgIgSAAQgWABgMAHQgJAGgFAQIhcgKQAFgXAKgOQAJgNATgLQANgHAXgEQAXgEAbAAQAqAAAZAFQAaAEASAQQAMALAHATQAIATgBASIAABsQAAASACAKQADAKAIAPIhaAAIgHgOIgEgQQgTASgSAIQgYAKghAAQgtAAgXgVgAgCATQgdAHgIAIQgIAIAAAKQAAALAIAHQAIAHAPAAQAQAAANgHQAOgJAFgKQAGgMAAgRIAAgPQgUAGgUAGg");
	this.shape_113.setTransform(613,199.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#9999FF").s().p("AidCsIAAlXICdAAQAuAAAeANQAcAMASAYQATAYAJAfQAIAgAAAjQAAA2gMAeQgNAfgWAUQgWAVgaAGQgjAKgcAAgAgzBeIAbAAQAgAAAOgIQAOgHAHgSQAJgTgBgpQAAg2gRgUQgSgUgoAAIgbAAg");
	this.shape_114.setTransform(579.1,194.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#9999FF").s().p("AheBvQgdgUgIgkIBegJQAGASALAGQAKAIARAAQATAAALgIQAIgGAAgKQAAgKgLgFQgIgFgggGQgygIgTgHQgTgIgNgQQgOgRAAgXQAAgZAPgRQAOgTAZgIQAZgJAqAAQAsAAAVAHQAVAHAOAOQAPAOAJAYIhbAJQgDgMgIgFQgMgIgOAAQgRAAgHAGQgHAGAAAIQAAAJAJAFQAJAFAfADQAvAFAYALQAXAJAMARQAMASAAAUQAAAWgNAVQgNAUgcAMQgcAMgwAAQhDAAgdgTg");
	this.shape_115.setTransform(528.7,199.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#9999FF").s().p("AhhB/IAAj4IBZAAIAAApQAMgaAOgKQAOgKAUAAQAVAAAZANIgeBEQgQgHgKAAQgTAAgKAPQgOAWAAA7IAABTg");
	this.shape_116.setTransform(504.6,199.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#9999FF").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AlgkQAlgkBDAAQA0AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAJALQAOAQAVAAQAOAAANgHQAIgEAJgLIBeAIQgWAlgeARQgfAQg4AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_117.setTransform(475.9,199.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#9999FF").s().p("AAjCsIAAiJQAAgYgIgJQgIgJgRAAQgQAAgLAMQgLANAAAiIAAB4IheAAIAAlXIBeAAIAAB/QAUgUASgJQAUgJAaAAQAnAAAWAYQAXAYAAAwIAACeg");
	this.shape_118.setTransform(443.9,194.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#9999FF").s().p("AgYClQgRgIgIgTQgIgTAAgqIAAhWIgkAAIAAhGIAkAAIAAgtIBfgyIAABfIA0AAIAABGIg0AAIAABXQAAAQACAFQAFAIAMAAQALAAASgGIAIBCQgkAHgeAAQgkABgQgKg");
	this.shape_119.setTransform(417.2,195.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#9999FF").s().p("AhgBjQguglAAg9QAAg4AnglQAmglBBAAQBKAAAnAsQAeAiAAAzQAAA5gmAlQgmAkhDAAQg8AAgkgfgAgggvQgOAQgBAfQABAiAOAQQAMAQAUAAQAUgBAOgPQANgPAAgjQAAgggNgPQgOgQgTgBQgUAAgNARg");
	this.shape_120.setTransform(390.5,199.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#9999FF").s().p("ABqCsIAAkFIhDEFIhOAAIhCkFIAAEFIhXAAIAAlXICLAAIA1DQIA2jQICLAAIAAFXg");
	this.shape_121.setTransform(351.9,194.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#9999FF").s().p("Ah9CpIgHhCQAUAHAaAAQARgBAKgHQAKgIAIgUIhpj4IBlAAIAyCmIAwimIBeAAIhjEJQgRAtgRAQQgYAXgzAAQgVAAgrgGg");
	this.shape_122.setTransform(298.7,204.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#9999FF").s().p("AiICuIAAlWIBZAAIAAAlQATgYAPgHQAUgMAaAAQAxAAAbAnQAcAmAAA4QAAA9geAhQgeAhgtgBQgWAAgSgHQgSgHgOgPIAAB2gAgdhZQgLAOAAAhQAAAdAMANQAMAOATAAQAQAAALgNQAMgNAAghQgBgegLgOQgMgPgRAAQgRAAgNAPg");
	this.shape_123.setTransform(269.4,204.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#9999FF").s().p("AiICuIAAlWIBZAAIAAAlQATgYAPgHQAUgMAZAAQAyAAAcAnQAbAmAAA4QAAA9geAhQgeAhgtgBQgWAAgRgHQgTgHgOgPIAAB2gAgdhZQgLAOgBAhQAAAdANANQANAOARAAQARAAALgNQALgNAAghQAAgegLgOQgMgPgRAAQgRAAgNAPg");
	this.shape_124.setTransform(237.4,204.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#9999FF").s().p("Ah3BtQgXgUAAgeQAAgdAQgSQARgRAsgJIBFgPQAQgFASgGQAAgSgHgHQgHgIgTAAQgWABgMAHQgJAGgFAQIhcgKQAFgXAKgOQAJgNATgLQANgHAXgEQAXgEAbAAQApAAAaAFQAaAEASAQQAMALAHATQAIATgBASIAABsQAAASACAKQADAKAHAPIhaAAIgGgOIgEgQQgSASgTAIQgYAKghAAQgtAAgXgVgAgCATQgdAHgIAIQgIAIAAAKQAAALAIAHQAIAHAPAAQAQAAANgHQAOgJAFgKQAGgMAAgRIAAgPQgUAGgUAGg");
	this.shape_125.setTransform(204.3,199.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#9999FF").s().p("AA6CsIAAiLIhzAAIAACLIhqAAIAAlXIBqAAIAAB4IBzAAIAAh4IBqAAIAAFXg");
	this.shape_126.setTransform(168.3,194.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1,1,1).p("AgZwFQCMAdCOhyQgXBiACBcQABARACASQALCJBGB7QAmBEA4BAQgVClCGAXQCPiNg5izQgDgLgFgKQAVh8gfhzQgFgSgFgRQgghbhAhVQA2h6hohCQgMgIgNgGQhUgFhMATQi/AviTDFQAeAFAdAKQA8AWAyAuQAUARAQAUQAOARAKASQAEAFACAGQAgA6AABGQAABBgcA4QgYAxguApQhHBCheARQgNACgMABQgUACgVAAQgCAAgCAAQhxgBhWg+QgPgLgPgOQgtgpgYgxQgbg4AAhBQAAgfAGgdQAJgqAVglQALgSAOgRQAPgUAUgRQApglAwgVQBBgeBPAAQAgAAAeAFAAns1QAAAYgTASQgUASgZAAQgcAAgTgSQgUgSAAgYQAAgZAUgRQATgSAcAAQAZAAAUASQATARAAAZgAABs0QAAALgGAIQgJAHgLAAQgNAAgIgHQgIgIAAgLQAAgKAIgIQAIgHANAAQALAAAJAHQAGAIAAAKgAiQs1QAAAYgTASQgUASgaAAQgcAAgTgSQgTgSAAgYQAAgZATgRQATgSAcAAQAaAAAUASQATARAAAZgAkHpXIEgAAIgxAzQiCAXhEgXgAizs0QAAALgJAIQgIAHgMAAQgLAAgJgHQgIgIAAgLQAAgKAIgIQAJgHALAAQAMAAAIAHQAJAIAAAKgAlNLZIDOBaIgDmGQhRgxhGgOQgxgKgsAIIgCAAQhbAGgtArQgeAdgMAuQgEA1AhAxIAbAiQAJAIAJAHQA2AwBdAqgABSLMIAigWQBohJAYhbQAFhEhGgxQgegQgcgJQgVgGgYgEQgLgCgNAAIgGAAQhagBhTBCIADF6gAkiv7IG5CNABuO1IAoFkIiTAAAl7O1IAAFBIizAAAiWnDIsKV4IIlAAIHpAAIMzAAg");
	this.shape_127.setTransform(909,139.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#9999FF").s().p("ABuK8InpAAIolAAIMK13IQ3V3gAh/DAIAEF6IDNhnIAigWQBohJAYhaQAFhEhGgyQgegQgcgJQgVgGgYgDQgLgDgNAAIgGAAIgDAAQhYAAhSBBgAoAClQgeAdgLAuQgFA0AgAxIAcAiIASAQQA2AvBdAqIDOBaIgDmFQhRgxhGgPQgygJgrAHIgCAAQhbAGgtAsg");
	this.shape_128.setTransform(909,164.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFCC").s().p("AgDEcQhxgBhVg+QgQgLgPgOQgugpgXgxQgbg4AAhAQAAgfAFgdQAKgqAWglQAKgSAOgRQAPgUAUgRQApglAvgVIG6CNQAgA6AABGQAABAgbA4QgZAxguApQhIBChfARIgYADQgVACgUAAIgDAAgAhLC7QBEAXCBgXIAygzIkgAAgABKh/QgUARAAAZQAAAYAUASQATASAcAAQAaAAAUgSQATgSAAgYQAAgZgTgRQgTgSgbAAQgcAAgTASgAhth/QgTARAAAZQAAAYATASQAUASAaAAQAbAAAUgSQASgSAAgYQAAgZgSgRQgUgSgbAAQgaAAgUASg");
	this.shape_129.setTransform(894.3,66.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#330000").s().p("AD1E1Qg4hAgmhEQhGh7gLiIIgCgjQgDhcAXhiQiNByiNgdQA9AWAzAuQATARAQAUQAOARALASIAGALIm7iNQBBgeBPAAQAgAAAeAFQAeAFAdAKQgdgKgegFQCUjFC+gvQBMgTBUAFQANAGAMAIQBoBCg2B6QBABVAgBbIAKAjQAfBygUB8IAHAVQA5CziPCNQiGgXAVilg");
	this.shape_130.setTransform(925.9,59);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#663333").s().p("ABHASQgIgHAAgLQAAgKAIgHQAIgIAMAAQAMAAAIAIQAIAHAAAKQAAALgIAHQgIAIgMAAQgMAAgIgIgAhuASQgIgHAAgLQAAgKAIgHQAIgIAMAAQAMAAAIAIQAIAHAAAKQAAALgIAHQgIAIgMAAQgMAAgIgIg");
	this.shape_131.setTransform(897.2,57.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAuAqQgUgSAAgYQAAgXAUgSQATgSAbAAQAbAAAUASQATASAAAXQAAAYgTASQgUASgbAAQgbAAgTgSgABIgPQgIAHAAAKQAAAKAIAIQAIAIAMgBQAMABAIgIQAIgIAAgKQAAgKgIgHQgIgIgMAAQgMAAgIAIgAiJAqQgUgSAAgYQAAgXAUgSQATgSAbAAQAbAAAUASQATASAAAXQAAAYgTASQgUASgbAAQgbAAgTgSgAhtgPQgIAHAAAKQAAAKAIAIQAIAIAMgBQAMABAIgIQAIgIAAgKQAAgKgIgHQgIgIgMAAQgMAAgIAIg");
	this.shape_132.setTransform(897.1,57.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF6699").s().p("AAciUQBShCBbABIAGAAQANAAALADQAYADAVAGQAcAJAeAQQBGAygFBEQgYBZhoBJIgiAWIjOBngAixCLQhegqg2gvIgRgQIgcgiQghgwAFg0QALguAegdQAtgsBbgGIACAAQAsgHAxAJQBGAPBQAxIAEGEg");
	this.shape_133.setTransform(893.5,198.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]}).to({state:[{t:this.shape_66},{t:this.shape_65}]},11).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).wait(8));

	// Button
	this.button_1 = new lib.Symbol1();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(924,481,1,1,0,0,0,50,25);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgLAnIAAghIgfgsIAbAAIAPAaIAQgaIAbAAIgfAsIAAAhg");
	this.shape_134.setTransform(952.2,541.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgeAnIAAhNIAYAAIAAA6IAlAAIAAATg");
	this.shape_135.setTransform(945.3,541.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgdAnIAAhNIA7AAIAAAQIgjAAIAAAOIAeAAIAAAPIgeAAIAAAgg");
	this.shape_136.setTransform(937.8,541.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgaAhQgIgIgBgMIAYgBQAAAFACADQAFAFAFAAQAGAAACgCQADgDAAgDQAAgDgDgCQgDgDgIgCQgQgEgHgFQgHgGABgJQgBgGAEgFQAEgGAGgDQAIgDAKAAQAQAAAIAGQAHAFACANIgXABQgBgFgCgDQgEgCgEAAQgEAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIABADIAIADQAPAEAIADQAGAEAEAEQACAFAAAHQAAAHgDAHQgFAGgHADQgIAEgLAAQgTAAgIgIg");
	this.shape_137.setTransform(926.4,541.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAPAnIgdgqIAAAqIgXAAIAAhNIAXAAIAdAqIAAgqIAXAAIAABNg");
	this.shape_138.setTransform(917.8,541.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgUAkQgJgEgFgJQgGgJAAgOQAAgSALgLQALgLASAAQAUAAAKALQALAKAAATQAAANgFAJQgEAJgJAFQgJAFgNAAQgMAAgJgFgAgLgQQgEAFAAALQAAAMAEAFQAEAFAHAAQAIAAAEgFQAFgFAAgMQAAgLgFgFQgEgFgIAAQgHAAgEAFg");
	this.shape_139.setTransform(908.7,541.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgUAkQgJgEgFgJQgGgJAAgOQAAgSALgLQALgLASAAQAUAAAKALQALAKAAATQAAANgFAJQgEAJgJAFQgJAFgNAAQgMAAgJgFgAgLgQQgEAFAAALQAAAMAEAFQAEAFAHAAQAIAAAEgFQAFgFAAgMQAAgLgFgFQgEgFgIAAQgHAAgEAFg");
	this.shape_140.setTransform(899.5,541.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgeAnIAAhNIAYAAIAAA6IAlAAIAAATg");
	this.shape_141.setTransform(891.7,541.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgeAnIAAhNIAYAAIAAA6IAlAAIAAATg");
	this.shape_142.setTransform(884.4,541.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AASAnIgEgNIgbAAIgEANIgZAAIAehNIAaAAIAdBNgAgIAJIAQAAIgIgbg");
	this.shape_143.setTransform(876.2,541.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgjAnIAAhNIAsAAQALAAAHAFQAFAGABAIQgBAHgEAFQgDADgFACQAIACAFAEQADAFAAAIQAAAGgCAFQgEAFgEADIgJACIgLABgAgLAWIALAAQAHAAADgCQACgCAAgEQAAgDgCgCQgDgDgHAAIgLAAgAgLgIIALAAQAEAAADgCQACgCAAgDQAAgEgCgCQgDgCgEAAIgLAAg");
	this.shape_144.setTransform(868,541.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AggAnIAAhNIBAAAIAAAQIgoAAIAAANIAlAAIAAAPIglAAIAAAPIApAAIAAASg");
	this.shape_145.setTransform(955.1,524.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAMAnIgQggIgMANIAAATIgZAAIAAhNIAZAAIAAAdIAYgdIAhAAIgdAdIAeAwg");
	this.shape_146.setTransform(946.8,524.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AARAnIgDgNIgbAAIgEANIgZAAIAehNIAaAAIAdBNgAgIAJIAQAAIgIgbg");
	this.shape_147.setTransform(937.6,524.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAYAnIAAg7IgPA7IgRAAIgQg7IAAA7IgTAAIAAhNIAgAAIALAuIAMguIAgAAIAABNg");
	this.shape_148.setTransform(928.1,524.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgUAkQgJgEgFgJQgGgJAAgOQAAgSALgLQALgLASAAQAUAAAKALQALAKAAATQAAANgFAJQgEAJgJAFQgJAFgNAAQgMAAgJgFgAgLgQQgEAFAAALQAAAMAEAFQAEAFAHAAQAIAAAEgFQAFgFAAgMQAAgLgFgFQgEgFgIAAQgHAAgEAFg");
	this.shape_149.setTransform(914.7,524.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgLAnIAAg6IgZAAIAAgTIBJAAIAAATIgZAAIAAA6g");
	this.shape_150.setTransform(906.5,524.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AAMAnIgQggIgMANIAAATIgZAAIAAhNIAZAAIAAAdIAYgdIAhAAIgdAdIAeAwg");
	this.shape_151.setTransform(894.7,524.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgRAlQgJgEgGgJQgFgKAAgOQAAgTAKgKQALgLARAAQAQAAAIAGQAJAGADANIgVAEIgDgFQgCgDgCgBQgDgCgEAAQgHAAgEAHQgEAFAAAKQAAANAEAEQAEAFAGAAQAHAAAEgEQADgEACgHIAVAGQgCAJgFAGQgEAGgHAEQgHADgLAAQgLAAgIgEg");
	this.shape_152.setTransform(885.6,524.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgLAnIAAhNIAXAAIAABNg");
	this.shape_153.setTransform(879,524.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgeAnIAAhNIAYAAIAAA6IAlAAIAAATg");
	this.shape_154.setTransform(873.5,524.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgSAlQgIgEgFgJQgHgKAAgOQAAgTALgKQAKgLATAAQAOAAAJAGQAIAGAFANIgWAEIgCgFQgCgDgEgBQgCgCgEAAQgHAAgFAHQgDAFAAAKQAAANAEAEQAEAFAGAAQAHAAAEgEQAEgEABgHIAWAGQgDAJgFAGQgEAGgHAEQgHADgKAAQgMAAgJgEg");
	this.shape_155.setTransform(865.4,524.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.button_1}]}).to({state:[]},30).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(521.4,399.8,955.7,733.5);
// library properties:
lib.properties = {
	id: '65CCDE1C2533924AA87125DDAA4EA65F',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFCCFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/happymothersdaywav.mp3?1524684260661", id:"happymothersdaywav"}
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
an.compositions['65CCDE1C2533924AA87125DDAA4EA65F'] = {
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