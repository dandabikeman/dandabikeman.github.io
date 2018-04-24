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
(lib.PracticeCardKLopez = function(mode,startPosition,loop) {
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

	// s1 sombrero
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AYMADIAbBlIA7DfIArCjIAeBvIAeBxQC3hICvhcIKVPWIDDrYQhyjokIjCIhEhNQmzi+oKhsgEAtcAavQBXi6AeiqQAIg0AEgyQASjwhojREgt2AaXII2pWIHePEIMaqfIGzLlICJCLII6reILmKoIC8B7IE8r8IHMKgIGJtKIHJI+IEykEEguqAYgIKIrPIHAN0IBeB/ILzrKIHRNRIKZrGIKzK3IB0BkIFitoIHeL1IGewPIIvMMIA3A6IEZn/EAgvAImQDShvDIiKAT9NfIHPM4IFjxxEgt2AaXQA5BtBXBrQACADADADQA7BIBJBHQBdBZB0BZUAjBAJCArYgJCQDakQB1j3AyvyVIgtCaIhEDuIjLLBIgcBhIgsCXIEvjhIEeEdID8kCID3EJIEekBIEZEsIDzksIEREgICvkYIFAEYICilWIGJGPAx11gIg6DLMAl3gAkIA3DMIA2DOIDXMiA3rhMIC4jJIErFXIEAlbIEVFIIENlTIEMGUIDAliIFEE/ICvk/IEnE0ICzlXIF0F9ASb1kIAtCrAx11gIDEqsQS5usLpPaICqJ6Azcv7MAnbAAOA0gsNMApVgASAx11gMAkQgAEEgvbAVHQAKBuAnBrQAWA8AeA7EgvbAVHIMotsIH8RXIL9rlQAFAAAEABQIfB7H0AQQHyAQHJhYQBxgVBvgdQDsg8DghZEgnhAEtQooImAuH0AarJZIl4kVIjnD0Ikqj0IjNELIkzjsIjWD7IkYkpIkJDvIkVkSIjNEDIlVlQIlzDvABiPZILqLwIGxtqA5eFDIghBxIg2C9QGHCHF0BVIG2NwIJmrkA5eFDIFskNIEzFEIDekGIEAEWIFEj3IDdE1IDvkHIEREHIDNkmIFEEWIDeklIFeFXEgnhAEtQGgC8GMCIEgnhAEtQILixHPhnA4zCsIgrCX");
	this.shape.setTransform(496.4,372.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AztBYIAtiZMAl3gAkIA3DLg");
	this.shape_1.setTransform(498.1,261.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#336600").s().p("AMLQ+Iqzq2IqZLGInRtRIrzLKIheiAInAtyIqILNQgnhrgLhuIMptrIH7RXIL+rlIG2NwIJmrkILqLvIGxtoIHPM2IFixwIKVPWIDErXQBnDPgSDwIkZH/Ig3g6IovsLImeQOIner0IliNogATYvGIiiFYIlAkaIivEaIkSkiIjzEtIkYktIkeEDIj4kKIj8ECIkdkdIkvDhIAriWIAchiIC5jJIEqFXIEAlbIEWFIIENlUIELGWIDAljIFFFAICvlAIEmE0ICzlXIF0F+IA7Deg");
	this.shape_2.setTransform(496.5,461.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AL7bFIrmqoIo6LeIiJiLImzrlIsaKfInevEIo2JWQgeg7gWg8IKIrPIHAN0IBeB/ILzrKIHRNRIKZrGIKzK3IB0BkIFitoIHeL1IGewPIIvMMIA3A6IEZn/QgEAygIA0QgeCqhXC6IkyEEInJo+ImJNKInMqgIk8L8gAjlilIkJDuIkVkRIjNECIlVlPIlzDvIAhhxIFskNIEzFEIDekGIEAEWIFEj3IDdE1IDvkHIEREHIDNkmIFEEWIDeklIFeFWIAeBvIl4kUIjnDzIkqjzIjNEKIkzjrIjWD6gAz13WMAnbAAOIA2DOMgpVAASgAyO87MAkQgAEIAtCrMgl3AAkg");
	this.shape_3.setTransform(498.9,420);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("EglfAi2Qh0hZhdhZQhKhHg7hIIgFgGQhXhrg4htII2pWIHePEIMZqfIG0LlICICLII7reILmKoIC7B7IE8r8IHNKgIGItKIHKI+IExkEQh1D3jZEQQ1tEhzlAAQznAAxgkhgACPPZIAHABQBJACBIAAIAAAAIAAAAQGWAAF5hHIAFgBIAHgBIAHgCQBygVBvgdImxNqgAuNNNIAIABQIQB4HoASIAcABIpmLkgAUqNfQDrg8DhhZQjhBZjrA8QhvAdhyAVIgHACIgHABIgFABQl5BHmWAAIAAAAIAAAAQhIAAhJgCIgHgBIgcgBQnogSoQh4IgIgBQl0hVmIiHIA3i9IFyjvIFVFQIDNkDIEWESIEIjvIEZEpIDVj7IEzDsIDNkLIErD0IDmj0IF5EVIAeBxQC2hICvhcIliRxgEgiGAHbIspNsQgun0IoomQIMixHOhnIgrCXIEvjhIEdEdID8kCID4EJIEekBIEYEsIDzksIESEgICvkYIFAEYICilWIGIGPIAsCjIlelXIjeElIlEkWIjNEmIkRkHIjvEHIjdk1IlED3IkAkWIjeEGIkzlEIltENIAsiXIgsCXIggBxIg3C9QGICHF0BVIr+LlgA6JJxQmMiImgi8QGgC8GMCIgEAhbAImQDThvDIiKIBEBNQEIDCByDoIjELYgAuNNNIAAAAgAbYJZIgehvIgsijIg7jfIgbhlQIKBsG0C+QjICKjTBvQivBci2BIgEAhbAImIAAAAgEAhbAImgA4yFDgAi5kkIkNFTIkWlIIkAFbIkqlXIi5DJIDLrBMApWgASIDWMiIAbBlIl0l9IizFXIkmk0IivE/IlFk/IjAFigEgOFggMQS6usLpPaICpJ6MgkQAAEg");
	this.shape_4.setTransform(491.9,372.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},10).wait(20));

	// Label
	this.btn_next = new lib.BasicButton();
	this.btn_next.name = "btn_next";
	this.btn_next.parent = this;
	this.btn_next.setTransform(894,680.9);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgYClQgRgJgIgSQgIgTAAgqIAAhWIgkAAIAAhGIAkAAIAAgtIBfgyIAABfIA0AAIAABGIg0AAIAABXQAAAQACAFQAFAIAMAAQAKAAATgGIAHBCQgjAHgeABQgjAAgRgKg");
	this.shape_5.setTransform(972.7,113.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("Ah3BtQgXgUAAgeQgBgdASgSQAQgRAsgJIBFgPIAigMQAAgRgHgHQgIgIgSABQgWAAgMAHQgJAGgFAQIhcgKQAFgYAKgNQAJgNATgLQANgHAXgEQAXgEAbAAQApAAAaAFQAaAFASAPQAMALAHATQAIATgBASIAABtQAAARACAKQADAKAIAQIhaAAIgHgPIgEgQQgTASgSAIQgYAKghAAQgtAAgXgVgAgCATQgdAHgIAIQgIAIAAAKQAAALAIAHQAIAHAPAAQAQAAANgHQAOgJAFgKQAGgLAAgTIAAgOg");
	this.shape_6.setTransform(946.9,117.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("AAkCsIAAiJQgBgYgIgJQgIgJgRAAQgPAAgMAMQgLANABAiIAAB4IhgAAIAAlXIBgAAIAAB/QATgUASgJQAUgJAaAAQAnAAAWAYQAXAYAAAwIAACeg");
	this.shape_7.setTransform(914.9,112.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AhNB0QgdgOgTgeQgSgfAAgpQAAg5AlgkQAlgkBDAAQA0AAAfAQQAfARAQAeQAQAeAAAxIAAALIi+AAQADAWAJAMQAOAQAVAAQAOAAANgHQAIgEAJgLIBeAIQgWAmgeAQQgfAQg4AAQgxAAgcgOgAAvgVQgCgcgMgMQgNgMgUABQgVAAgOASQgJALgCAWIBdAAIAAAAg");
	this.shape_8.setTransform(867,117.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("AAjCsIAAiJQAAgYgIgJQgIgJgRAAQgQAAgLAMQgLANAAAiIAAB4IheAAIAAlXIBeAAIAAB/QAUgUASgJQAUgJAaAAQAnAAAWAYQAXAYAAAwIAACeg");
	this.shape_9.setTransform(834.9,112.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("AgYClQgRgJgIgSQgIgTAAgqIAAhWIgkAAIAAhGIAkAAIAAgtIBfgyIAABfIA0AAIAABGIg0AAIAABXQAAAQACAFQAFAIAMAAQALAAASgGIAIBCQgkAHgeABQgkAAgQgKg");
	this.shape_10.setTransform(808.2,113.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0000").s().p("AAjB/IAAiIQAAgXgIgKQgIgKgRAAQgQAAgLAOQgLANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAVgKQATgLAdAAQAoAAAWAXQAXAYAAAxIAACdg");
	this.shape_11.setTransform(765.6,117.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("AhhBjQgtglAAg9QAAg4AmglQAnglBBAAQBKAAAnArQAeAjAAAzQAAA5gmAkQgmAlhDAAQg7AAgmgfgAghgvQgOAQABAfQgBAiAOAQQANAPAUAAQAUAAAOgPQANgPAAgjQAAgggNgPQgOgRgTABQgUAAgOAQg");
	this.shape_12.setTransform(733.6,117.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("AAmCsIgyhkIgjAjIAABBIhhAAIAAlXIBhAAIAACxIBGhSIB1AAIhZBWIBeCig");
	this.shape_13.setTransform(687,112.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("Ag5B7QgagHgTgRQgTgRgLgWQgLgWAAglQAAglANgaQAKgTAQgPQARgPASgGQAcgMAqAAQA9AAAgAWQAgAVANAqIhaAMQgEgQgLgHQgLgJgTABQgXAAgOAQQgPASAAAgQAAAgAPAPQAOAQAWAAQASAAANgKQANgJAGgUIBbAKQgIAcgRAWQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_14.setTransform(654.5,117.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0000").s().p("AgvCsIAAj4IBfAAIAAD4gAgvhqIAAhBIBfAAIAABBg");
	this.shape_15.setTransform(630.5,112.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("AgvCsIAAlXIBfAAIAAFXg");
	this.shape_16.setTransform(614.5,112.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("Ag5B7QgagHgTgRQgTgRgLgWQgLgWAAglQAAglANgaQAKgTAQgPQARgPASgGQAcgMAqAAQA9AAAgAWQAgAVANAqIhaAMQgEgQgLgHQgLgJgTABQgXAAgOAQQgPASAAAgQAAAgAPAPQAOAQAWAAQASAAANgKQANgJAGgUIBbAKQgIAcgRAWQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_17.setTransform(591.9,117.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("EArXgI0IHWsqEArXgI0ILanWEArXgI0IR+AAEArXgI0IMWIcEAbvAizIAAAAIPeHoEAbvAizICMMeEAbvAizIPUDGEAbvAizIL4LEEAbvAizIHMOMEArXgI0II6NlEgFEgicIAAuiEgFEgicIpOr4EgFEgicIsqlyAAyDeQAABag/BAQhABAhaAAQhaAAhAhAQg/hAAAhaQAAhaA/hAQBAg/BaAAQBaAABAA/QA/BAAABagAFyDaQAADYiZCZQiZCZjYAAQjYAAiZiZQiZiZAAjYQAAjZCZiYQCZiZDYAAQDYAACZCZQCZCYAADZgAJLt2IuP0mIFdrGAu1s9IJx1fIKTn0Au1s9IYAg5IISWjIgvAkIgtAkEgu8gM9IleJTEgu8gM9IjmrVEgu8gM9IuYAAEgu8gM9ItSkTEgu8gM9IsgHbEgu8gM9IruoNEgcCAjOIn+InIjSC+ACAY3IOAu1IAugxACAY3QguAEgvAAQiHAAh6ggIAAAAIgBAAIqYpOAt3PNInilEImpZFICqMXAjeYbI4kKzIiWMXEgcCAjOItwGlEgcCAjOIyICrA1ZKJI5j3GAu1s9MggHAAAA1ZKJIGk3GARdItIKSaGAJLt2MAiMAFCARdItIZ6xhACAY3IZvJ8");
	this.shape_18.setTransform(505.5,388.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#33CCFF").s().p("AhgS5IAAAAIAAAAIqYpOIAAAAInilEIGk3FIYAg6IIRWjIguAlIguAkIAAAMIuAO1QguAEgwAAQiHAAh6gggAq6tAQkiEhAAGbQAADEBECqQA4CNBmB6QAeAkAiAhQDCDDD4BAQB7AgCGAAQAwAAAtgEQFfgeEAkBQEakZAImJIAAgYQAAhhgQhZQg0kkjejeQkikjmaABQmZgBkiEjg");
	this.shape_19.setTransform(492.9,423.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF3366").s().p("AiZCZQg/g/AAhaQAAhZA/hAQBAhABZAAQBaAAA/BAQBBBAgBBZQABBahBA/Qg/BAhaAAQhZAAhAhAg");
	this.shape_20.setTransform(488.8,410.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CC33").s().p("AmVKkQiWiWhJi2IKXJOQj2hAjCjCgAkGgpQiZiZAAjYQAAjZCZiZQCZiZDXAAQDZAACZCZQCZCZAADZQAADYiZCZQiZCYjZAAQjXAAiZiYgAg+owQg/BAAABaQAABaA/BAQA/BABaAAQBaAABAhAQBAhAAAhaQAAhahAhAQhAg/haAAQhaAAg/A/g");
	this.shape_21.setTransform(479.6,451.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066CC").s().p("AkBO/Qj4hBjCjCQgigigegkQhnh5g3iNQhEiqAAjGQAAmZEikiQEikiGZAAQGaAAEiEiQDeDeA0EkQAQBaAABfIAAAZQgJGJkZEaQkAEAlfAfQguADgvAAQiGAAh7gfgAmMlzQiZCZAADZQAADXCZCZQCZCZDYAAQDYAACZiZQCZiZAAjXQAAjZiZiZQiZiZjYAAQjYAAiZCZg");
	this.shape_22.setTransform(493,410.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6666").s().p("AwDriMAgHAAAImkXFg");
	this.shape_23.setTransform(307.8,379.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#33CC00").s().p("AloshIHhFDIABAAQBIC2CWCWQDCDBD3BAIABAAI4jKzg");
	this.shape_24.setTransform(404.6,533.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF33").s().p("As2DHIN/u0IAAgMIAuglIguAxIAugxIAvgkIKRaFg");
	this.shape_25.setTransform(600.7,527.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC0033").s().p("AxFrRMAiLAFCI55Rhg");
	this.shape_26.setTransform(673.6,371.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CCCC").s().p("AiPqvIOPUlI3/A6g");
	this.shape_27.setTransform(487.4,236.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_28.setTransform(609.4,316.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAAvgVQgCgcgNgMQgMgLgTgBQgWABgOARQgJAMgCAWIBdAAIAAAAg");
	this.shape_29.setTransform(561.6,321.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_30.setTransform(529.6,320.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAAvgVQgCgcgMgMQgNgLgUgBQgVABgOARQgJAMgCAWIBdAAIAAAAg");
	this.shape_31.setTransform(497.6,321.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_32.setTransform(465.6,321.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_33.setTransform(432.1,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.btn_next}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},10).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(703.4,459.1,820.7,656.8);
// library properties:
lib.properties = {
	id: '74D9F0C5D070A34FB6EA526D2327EA5C',
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
an.compositions['74D9F0C5D070A34FB6EA526D2327EA5C'] = {
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