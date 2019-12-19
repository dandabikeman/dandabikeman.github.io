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
(lib.PracticeCardYAsefa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop (11);
		// This will make the main timeline stop on the current frame
		
		//this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_10 = function() {
		this.stop (21);
		// This will make the main timeline stop on the current frame
		
		//this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_20 = function() {
		this.stop (31);
		// This will make the main timeline stop on the current frame
		
		//this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(10));

	// Buttons
	this.btn_Next = new lib.BasicButton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.parent = this;
	this.btn_Next.setTransform(898,678.9);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Next).wait(30));

	// Label
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(1,1,1).p("EBD5gWVMhEHAsrMhDqgsr");
	this.shape.setTransform(507.5,228);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC0000").ss(1,1,1).p("ACmbBQ5l3Wm4qVQm5qXJwnPQJxnOP8NMQM6r2MtERQMtERmeLSQmfLR1eaEg");
	this.shape_1.setTransform(518.4,314);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("A93mqQm5qXJwnPQJxnOP8NMQM6r2MtERQMtERmeLSQmfLR1eaEQ5l3Wm4qVg");
	this.shape_2.setTransform(518.4,314);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AB2FwQmoirg3k+QgtlAD1CCIDRBkICgiMQCkhFgDDbQgDE8j4D9g");
	this.shape_3.setTransform(512.5,384.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("Alph5QgtlAD1CCIDRBkICgiMQCkhFgDDbQgDE7j4D+Qmoirg3k+g");
	this.shape_4.setTransform(512.5,384.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AB2FwQmoirg3k+QgtlAD1CCIDRBkICgiMQCkhFgDDbQgDE8j4D9g");
	this.shape_5.setTransform(857.2,593.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("Alph5QgtlAD1CCIDRBkICgiMQCkhFgDDbQgDE7j4D+Qmoirg3k+g");
	this.shape_6.setTransform(857.2,593.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AB2FwQmoirg3k+QgtlAD1CCIDRBkICgiMQCkhFgDDbQgDE8j4D9g");
	this.shape_7.setTransform(152.2,167.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("Alph5QgtlAD1CCIDRBkICgiMQCkhFgDDbQgDE7j4D+Qmoirg3k+g");
	this.shape_8.setTransform(152.2,167.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AB2FwQmoirg3k+QgtlAD1CCIDRBkICgiMQCkhFgDDbQgDE8j4D9g");
	this.shape_9.setTransform(861.2,145.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("Alph5QgtlAD1CCIDRBkICgiMQCkhFgDDbQgDE7j4D+Qmoirg3k+g");
	this.shape_10.setTransform(861.2,145.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AB2FwQmoirg3k+QgtlAD1CCIDRBkICgiMQCkhFgDDbQgDE8j4D9g");
	this.shape_11.setTransform(163.2,599.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("Alph5QgtlAD1CCIDRBkICgiMQCkhFgDDbQgDE7j4D+Qmoirg3k+g");
	this.shape_12.setTransform(163.2,599.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0033").s().p("ACFDXIAAlHIhUFHIhiAAIhTlHIAAFHIhsAAIAAmtICuAAIBDEFIBCkFICuAAIAAGtg");
	this.shape_13.setTransform(568,550.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0033").s().p("AhzDHQgvgXgegyQgegyAAhMQAAhoA7g6QA7g7BoAAQBrAAA6A6QA6A5AABoQAABKgaAwQgZAwgwAbQgwAbhHAAQhIAAgwgXgAhAhcQgZAcAABBQAABBAZAcQAYAdAoAAQArAAAXgcQAYgcAAhHQAAg9gZgbQgYgdgpAAQgoAAgYAdg");
	this.shape_14.setTransform(514.6,550.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0033").s().p("ACFDXIAAlHIhUFHIhiAAIhTlHIAAFHIhsAAIAAmtICuAAIBDEFIBCkFICuAAIAAGtg");
	this.shape_15.setTransform(461.4,550.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("Ai0DXIAAmtIFjAAIAABcIjeAAIAABEIDNAAIAABXIjNAAIAABUIDkAAIAABig");
	this.shape_16.setTransform(570.3,171.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("AhGDXIiimtICLAAIBgE0IBfk0ICHAAIigGtg");
	this.shape_17.setTransform(524.7,171.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0000").s().p("AhzDHQgvgXgegyQgegyAAhMQAAhoA7g6QA7g7BoAAQBrAAA6A6QA6A5AABoQAABKgaAwQgZAwgwAbQgwAbhHAAQhIAAgwgXgAhAhcQgZAcAABBQAABBAZAcQAYAdAoAAQArAAAXgcQAYgcAAhHQAAg9gZgbQgYgdgpAAQgoAAgYAdg");
	this.shape_18.setTransform(478.8,171.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AipDXIAAmtICFAAIAAFDIDOAAIAABqg");
	this.shape_19.setTransform(436.3,171.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("AhBDXIAAmtICDAAIAAGtg");
	this.shape_20.setTransform(166,364.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF2C85").s().p("AAAABIgGgDIAFABIAJADIgCABIgGgCg");
	this.shape_21.setTransform(515.3,552.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF2C85").s().p("AD1CkIgBgCIAAgBIAGAKIgFgHgABAgmIgEgDIAEADgAjKiUIADgFIAKAFgAj5ipIABAAIAAAAIgBAAg");
	this.shape_22.setTransform(551.5,573.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0033").s().p("Ag5DWQglgFgZgNQgZgNgUgYQgVgYgIgZQgMgpAAgfIAAkAICEAAIAAEFQAAAkAVATQASAUAiAAQAiAAAUgTQATgUABgkIAAkFICEAAIAAEAQAAAlgMAjQgMAhgZAZQgZAZgcALQgnAPg2AAQgfgBglgEg");
	this.shape_23.setTransform(876.6,356.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC0033").s().p("AhzDHQgvgXgegyQgegyAAhMQAAhoA7g6QA7g7BoAAQBrAAA6A6QA6A5AABoQAABKgaAwQgZAwgwAbQgwAbhHAAQhIAAgwgXgAhAhcQgZAcAABBQAABBAZAcQAYAdAoAAQArAAAXgcQAYgcAAhHQAAg9gZgbQgYgdgpAAQgoAAgYAdg");
	this.shape_24.setTransform(826.6,356.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC0033").s().p("AhBDXIAAi0Iioj5ICUAAIBVCRIBXiRICTAAIinD5IAAC0g");
	this.shape_25.setTransform(782,356.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF2C85").s().p("AgMArIAAhVIAZAAIAABVg");
	this.shape_26.setTransform(-32.9,401.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC0000").s().p("AgqAoIAAhPIBVAAIAABPg");
	this.shape_27.setTransform(728.9,523.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC0000").s().p("AhaBXQgTgUAAgpIAAiDIBQAAIAABxQAAATAIAJQAHAIANAAQANAAAJgLQAJgLAAgbIAAhkIBQAAIAADPIhKAAIAAgiQgRAUgRAJQgQAJgYAAQghAAgTgTg");
	this.shape_28.setTransform(708.8,517.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC0000").s().p("AhQBTQgmgfAAgzQAAgvAggeQAggfA2AAQA9AAAgAkQAaAdAAAqQAAAvgfAfQghAeg3AAQgyAAgegZgAgbgnQgMANABAaQgBAcAMANQALAOAQAAQARAAALgNQALgNAAgdQAAgagLgNQgLgOgQAAQgRAAgLAOg");
	this.shape_29.setTransform(682.2,517.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC0000").s().p("AhoCNIgGg3QARAFAWAAQANAAAJgGQAJgHAGgQIhYjPIBVAAIApCKIAoiKIBPAAIhTDdQgOAmgPANQgTATgrAAQgRAAgkgFg");
	this.shape_30.setTransform(657.4,521.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC0000").s().p("AhQBTQgmgfAAgzQAAgvAggeQAggfA2AAQA+AAAfAkQAaAdAAAqQAAAvgfAfQghAeg3AAQgyAAgegZgAgbgnQgLANAAAaQAAAcALANQALAOAQAAQARAAALgNQALgNAAgdQAAgagLgNQgLgOgRAAQgQAAgLAOg");
	this.shape_31.setTransform(618.4,517.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC0000").s().p("AgUCKQgOgHgHgQQgHgQAAgiIAAhIIgdAAIAAg7IAdAAIAAglIBPgqIAABPIAsAAIAAA7IgsAAIAABIQAAAOADAEQAEAHAJgBQAJAAAQgEIAGA2QgeAHgZAAQgdAAgOgIg");
	this.shape_32.setTransform(596.1,513.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC0000").s().p("AhoCNIgGg3QARAFAWAAQANAAAJgGQAIgHAHgQIhYjPIBUAAIAqCKIAoiKIBOAAIhSDdQgOAmgOANQgUATgrAAQgRAAgkgFg");
	this.shape_33.setTransform(561.8,521.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC0000").s().p("AhjBbQgTgRAAgZQAAgYANgPQAOgOAmgIIA5gMQANgEAPgGQAAgOgGgGQgGgGgQAAQgSAAgKAGQgIAFgEAOIhMgIQAEgUAIgMQAIgLAQgJQAKgGAUgDQATgDAWAAQAjAAAVAEQAWAEAPAMQAKAJAGAQQAFAQAAAPIAABbQAAAOACAJQACAIAGANIhKAAIgGgMIgDgOQgPAPgQAHQgUAIgcAAQglAAgTgRgAgBAQQgZAGgGAGQgHAHAAAIQAAAJAHAGQAGAGANAAQANAAALgGQALgHAFgJQAFgJAAgPIAAgNQgRAGgQAFg");
	this.shape_34.setTransform(536.1,517.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC0000").s().p("AiDCPIAAkdICDAAQAnAAAYAKQAXALAQAUQAQATAHAbQAHAaAAAdQAAAtgLAZQgKAagTARQgSARgWAFQgdAIgXAAgAgqBOIAVAAQAbAAAMgGQAMgGAGgPQAHgQAAgiQAAgtgPgQQgPgRghAAIgWAAg");
	this.shape_35.setTransform(507.9,513.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC0000").s().p("AhOBcQgYgQgHgeIBPgHQAFAOAIAGQAJAGAOAAQAQAAAJgHQAGgFAAgIQAAgIgJgFQgGgDgbgFQgpgHgQgGQgQgHgLgNQgLgPAAgTQAAgUALgPQAMgPAVgHQAVgHAjAAQAkAAASAFQASAGAMAMQALAMAIAUIhLAIQgDgKgHgFQgJgGgNAAQgNAAgGAEQgGAFAAAHQAAAIAHAEQAIADAZAEQAoAEATAIQAUAIAKAOQAKAPAAARQAAASgLARQgKARgYAKQgXAKgoAAQg4AAgYgQg");
	this.shape_36.setTransform(465.9,517.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC0000").s().p("AhRBqIAAjPIBKAAIAAAjQALgXALgIQALgIARAAQASAAAUALIgYA5QgOgGgJgBQgPAAgJAOQgLASAAAwIAABGg");
	this.shape_37.setTransform(445.8,517.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC0000").s().p("AhABhQgYgMgQgZQgPgZAAgjQAAgvAfgeQAfgeA3AAQAsAAAZANQAaAOAOAZQANAaAAAoIAAAJIieAAQACATAIAJQAMAOARAAQAMAAAKgGQAHgEAHgJIBPAHQgSAfgaAOQgZANgvAAQgpAAgXgLgAgdgtQgHAJgCATIBNAAQgCgXgKgKQgKgKgRAAQgSAAgLAPg");
	this.shape_38.setTransform(421.8,517.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC0000").s().p("AAeCPIAAhyQAAgTgHgIQgIgIgNAAQgNAAgJAKQgJALAAAdIAABjIhQAAIAAkdIBQAAIAABpQAQgQAPgIQAQgHAWAAQAgAAATAUQATAUAAAnIAACEg");
	this.shape_39.setTransform(395.1,513.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC0000").s().p("AgUCKQgOgHgHgQQgHgQAAgiIAAhIIgdAAIAAg7IAdAAIAAglIBPgqIAABPIAsAAIAAA7IgsAAIAABIQAAAOADAEQAEAHAJgBQAJAAAQgEIAGA2QgeAHgZAAQgdAAgOgIg");
	this.shape_40.setTransform(372.8,513.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC0000").s().p("AhRBTQglgfAAgzQAAgvAggeQAggfA2AAQA+AAAfAkQAaAdAAAqQAAAvgfAfQghAeg3AAQgyAAgfgZgAgbgnQgLANAAAaQAAAcALANQALAOAQAAQARAAALgNQALgNAAgdQAAgagLgNQgLgOgRAAQgQAAgLAOg");
	this.shape_41.setTransform(350.6,517.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC0000").s().p("ABZCPIAAjZIg5DZIhAAAIg3jZIAADZIhJAAIAAkdIB0AAIAsCtIAtitIB0AAIAAEdg");
	this.shape_42.setTransform(318.5,513.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC0000").s().p("AhnCNIgHg3QARAFAVAAQAPAAAIgGQAIgHAHgQIhXjPIBTAAIArCKIAniKIBPAAIhTDdQgOAmgOANQgUATgqAAQgSAAgjgFg");
	this.shape_43.setTransform(696.5,463.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC0000").s().p("AhxCRIAAkdIBLAAIAAAeQAPgSANgIQAQgJAVAAQAqABAWAfQAXAgAAAvQAAAzgZAbQgZAbgmAAQgRAAgPgGQgPgHgMgMIAABjgAgXhKQgLAMAAAaQAAAZALALQALAMAOAAQAOAAAJgMQAKgKAAgcQgBgYgJgMQgKgMgOAAQgOAAgKAMg");
	this.shape_44.setTransform(672,462.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC0000").s().p("AhxCRIAAkdIBKAAIAAAeQAQgSAMgIQARgJAVAAQApABAYAfQAWAgAAAvQAAAzgZAbQgYAbgnAAQgRAAgOgGQgQgHgMgMIAABjgAgXhKQgKAMAAAaQAAAZAKALQALAMAOAAQAOAAAJgMQAJgKAAgcQAAgYgJgMQgKgMgOAAQgOAAgKAMg");
	this.shape_45.setTransform(645.3,462.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC0000").s().p("AhjBbQgTgRAAgZQAAgYANgPQAOgOAmgIIA5gMQANgEAPgGQAAgOgGgGQgGgGgQAAQgSAAgKAGQgIAFgEAOIhMgIQAEgUAIgMQAIgLAQgJQAKgGAUgDQATgDAWAAQAjAAAVAEQAWAEAPAMQAKAJAGAQQAFAQAAAPIAABbQAAAOACAJQACAIAGANIhKAAIgGgMIgDgOQgPAPgQAHQgUAIgcAAQglAAgTgRgAgBAQQgZAGgGAGQgHAHAAAIQAAAJAHAGQAGAGANAAQANAAALgGQALgHAFgJQAFgJAAgPIAAgNQgRAGgQAFg");
	this.shape_46.setTransform(617.7,459.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC0000").s().p("AAxCPIAAh0IhhAAIAAB0IhYAAIAAkdIBYAAIAABkIBhAAIAAhkIBYAAIAAEdg");
	this.shape_47.setTransform(587.7,455.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC0000").s().p("AhUCBQgYgSAAggIABgKIBNAJQADAKAGAEQAIAHANgBQARAAAJgJQAIgJAAgXIAAgfQgMANgLAHQgSAJgVAAQgqABgZglQgSgZAAgqQAAgwAXgaQAXgZAmAAQAYAAAPAIQAQAJAOASIAAgfIBKAAIAADEIAAAJQAAATgIASQgIARgOALQgOAMgVAEQgVAFgcAAQg9AAgXgTgAgZhPQgJAMAAAZQAAAWAJALQAKALAPgBQAOAAALgKQAKgLAAgXQAAgXgLgMQgLgMgOAAQgPAAgJALg");
	this.shape_48.setTransform(543.9,463.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC0000").s().p("AAeBqIAAhxQAAgTgHgJQgIgIgNAAQgNAAgJALQgJALAAAbIAABkIhQAAIAAjPIBKAAIAAAjQARgWARgIQAQgJAYAAQAhAAATAUQATATAAApIAACDg");
	this.shape_49.setTransform(517.7,458.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC0000").s().p("AgnCPIAAjOIBPAAIAADOgAgnhYIAAg2IBPAAIAAA2g");
	this.shape_50.setTransform(497.7,455.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC0000").s().p("AAeCPIAAhyQAAgTgHgIQgIgIgNAAQgNAAgJAKQgJALAAAdIAABjIhQAAIAAkdIBQAAIAABpQAQgQAPgIQAQgHAWAAQAgAAATAUQATAUAAAnIAACEg");
	this.shape_51.setTransform(477.7,455.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC0000").s().p("AgUCKQgOgHgHgQQgHgPAAgjIAAhIIgdAAIAAg7IAdAAIAAglIBPgqIAABPIAsAAIAAA7IgsAAIAABIQAAAOADAEQAEAHAJgBQAJAAAQgEIAGA2QgeAHgZAAQgdAAgOgIg");
	this.shape_52.setTransform(455.4,455.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC0000").s().p("AhoCNIgGg3QARAFAWAAQAOAAAIgGQAIgHAHgQIhYjPIBUAAIAqCKIAoiKIBOAAIhSDdQgOAmgOANQgUATgrAAQgRAAgkgFg");
	this.shape_53.setTransform(434.5,463.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CC0000").s().p("AhRBqIAAjPIBKAAIAAAjQAKgXAMgHQALgJARAAQASAAAUALIgYA4QgOgFgIgBQgQAAgJAOQgLASAAAwIAABGg");
	this.shape_54.setTransform(412.7,458.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC0000").s().p("AhABhQgYgMgQgZQgPgZAAgjQAAgvAfgeQAfgeA3AAQAsAAAZANQAaAOAOAZQANAaAAAoIAAAJIieAAQACATAIAJQAMAOARAAQAMAAAKgGQAHgEAHgJIBPAHQgSAfgaAOQgZANgvAAQgpAAgXgLgAgdgtQgHAJgCATIBNAAQgCgXgKgKQgKgKgRAAQgSAAgLAPg");
	this.shape_55.setTransform(388.8,459.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC0000").s().p("AgjBoIhWjPIBSAAIAnCDIAqiDIBRAAIhZDPg");
	this.shape_56.setTransform(364.3,459.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC0000").s().p("AhABhQgYgMgQgZQgPgZAAgjQAAgvAfgeQAfgeA3AAQAsAAAZANQAaAOAOAZQANAaAAAoIAAAJIieAAQACATAIAJQAMAOARAAQAMAAAKgGQAHgEAHgJIBPAHQgSAfgaAOQgZANgvAAQgpAAgXgLgAgdgtQgHAJgCATIBNAAQgCgXgKgKQgKgKgRAAQgSAAgLAPg");
	this.shape_57.setTransform(339.8,459.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CC0000").s().p("AhQBqIAAjPIBJAAIAAAiQAKgWAMgHQAMgJAQAAQASAAAUALIgYA4QgOgFgIAAQgQAAgJANQgLARAAAyIAABFg");
	this.shape_58.setTransform(706,400.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC0000").s().p("AhRBTQglgfAAgzQAAgvAggeQAggfA2AAQA9AAAhAkQAZAdAAAqQAAAvgfAfQggAeg4AAQgxAAgggZgAgbgnQgLANAAAaQAAAcALANQALAOAQAAQARAAALgNQALgNAAgdQAAgagLgNQgLgOgRAAQgQAAgLAOg");
	this.shape_59.setTransform(682,400.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CC0000").s().p("AgzCSIAAiVIgeAAIAAg6IAeAAIAAgJQAAgNACgPQADgPAIgKQAHgKAOgGQANgFAZgBQAVAAAoAFIgJAwQgOgCgJAAQgKAAgFADQgFAEgCAIQgBAEAAAOIAmAAIAAA6IgmAAIAACVg");
	this.shape_60.setTransform(662.3,396.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC0000").s().p("AhaBWQgTgTAAgpIAAiDIBQAAIAABxQAAATAIAJQAHAIANAAQANAAAJgLQAJgLAAgbIAAhkIBQAAIAADPIhKAAIAAgiQgRAVgRAIQgQAJgYAAQghAAgTgUg");
	this.shape_61.setTransform(627,401);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CC0000").s().p("AhQBTQgmgfAAgzQAAgvAggeQAggfA2AAQA+AAAgAkQAZAdAAAqQAAAvggAfQgfAeg4AAQgyAAgegZgAgbgnQgMANAAAaQAAAcAMANQALAOAQAAQARAAALgNQALgNAAgdQAAgagLgNQgLgOgQAAQgRAAgLAOg");
	this.shape_62.setTransform(600.4,400.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC0000").s().p("AhnCNIgHg3QARAFAWAAQAOAAAIgGQAIgHAHgQIhYjPIBUAAIAqCKIAoiKIBOAAIhSDdQgOAmgOANQgUATgqAAQgSAAgjgFg");
	this.shape_63.setTransform(575.7,404.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CC0000").s().p("AAgCPIgphTIgeAdIAAA2IhRAAIAAkdIBRAAIAACTIA6hEIBiAAIhKBHIBPCHg");
	this.shape_64.setTransform(537.8,396.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CC0000").s().p("AAeBqIAAhxQAAgTgHgIQgIgJgNAAQgNAAgJALQgJALAAAbIAABkIhQAAIAAjPIBKAAIAAAiQARgVARgIQAQgJAYAAQAhAAATAUQATATAAApIAACDg");
	this.shape_65.setTransform(509.9,400.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CC0000").s().p("AhjBbQgTgRAAgZQAAgYANgPQAOgOAmgIIA5gMQANgEAPgGQAAgOgGgGQgGgGgQAAQgSAAgKAGQgIAFgEAOIhMgIQAEgUAIgMQAIgLAQgJQAKgGAUgDQATgDAWAAQAjAAAVAEQAWAEAPAMQAKAJAGAQQAFAQAAAPIAABbQAAAOACAJQACAIAGANIhKAAIgGgMIgDgOQgPAPgQAHQgUAIgcAAQglAAgTgRgAgBAQQgZAGgGAGQgHAHAAAIQAAAJAHAGQAGAGANAAQANAAALgGQALgHAFgJQAFgJAAgPIAAgNQgRAGgQAFg");
	this.shape_66.setTransform(483.2,400.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CC0000").s().p("AAeCPIAAhyQAAgTgHgIQgIgIgNAAQgNAAgJAKQgJALAAAdIAABjIhQAAIAAkdIBQAAIAABpQAQgQAPgIQAQgHAWAAQAgAAATAUQATAUAAAnIAACEg");
	this.shape_67.setTransform(456.5,396.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CC0000").s().p("AgUCKQgOgHgHgQQgHgPAAgjIAAhIIgdAAIAAg7IAdAAIAAgmIBPgpIAABPIAsAAIAAA7IgsAAIAABIQAAANADAFQAEAHAJAAQAJgBAQgFIAGA3QgeAGgZABQgdAAgOgIg");
	this.shape_68.setTransform(434.3,397);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CC0000").s().p("AgpAtQAWgLAJgKQAIgKABgOIgoAAIAAhPIBUAAIAABCQgBAjgPAVQgPAVgiAQg");
	this.shape_69.setTransform(418.8,411.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CC0000").s().p("AhABhQgYgMgQgZQgPgZAAgjQAAgvAfgeQAfgeA3AAQAsAAAZANQAaAOAOAZQANAaAAAoIAAAJIieAAQACATAIAJQAMAOARAAQAMAAAKgGQAHgEAHgJIBPAHQgSAfgaAOQgZANgvAAQgpAAgXgLgAgdgtQgHAJgCATIBNAAQgCgXgKgKQgKgKgRAAQgSAAgLAPg");
	this.shape_70.setTransform(398.8,400.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CC0000").s().p("AhaBWQgTgTAAgpIAAiDIBQAAIAABxQAAATAIAJQAHAIANAAQANAAAJgLQAJgLAAgbIAAhkIBQAAIAADPIhKAAIAAgiQgRAVgRAIQgQAJgYAAQghAAgTgUg");
	this.shape_71.setTransform(372,401);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CC0000").s().p("AhRBqIAAjPIBKAAIAAAiQAKgWAMgHQALgJARAAQASAAAUALIgYA4QgOgFgJAAQgPAAgJANQgLARAAAyIAABFg");
	this.shape_72.setTransform(350.3,400.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CC0000").s().p("AgUCKQgOgHgHgQQgHgPAAgjIAAhIIgdAAIAAg7IAdAAIAAgmIBPgpIAABPIAsAAIAAA7IgsAAIAABIQAAANADAFQAEAHAJAAQAJgBAQgFIAGA3QgeAGgZABQgdAAgOgIg");
	this.shape_73.setTransform(330.7,397);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CC0000").s().p("AhOBcQgYgQgHgeIBPgHQAFAOAIAGQAJAGAOAAQAQAAAJgHQAGgFAAgIQAAgIgJgFQgGgDgbgFQgpgHgQgGQgQgHgLgNQgLgPAAgTQAAgUALgPQAMgPAVgHQAVgHAjAAQAkAAASAFQASAGAMAMQALAMAIAUIhLAIQgDgKgHgFQgJgGgNAAQgNAAgGAEQgGAFAAAHQAAAIAHAEQAIADAZAEQAoAEATAIQAUAIAKAOQAKAPAAARQAAASgLARQgKARgYAKQgXAKgoAAQg4AAgYgQg");
	this.shape_74.setTransform(630.6,342.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CC0000").s().p("AgUCKQgOgIgHgPQgHgPAAgjIAAhIIgdAAIAAg7IAdAAIAAgmIBPgoIAABOIAsAAIAAA7IgsAAIAABIQAAANADAFQAEAHAJAAQAJgBAQgFIAGA3QgeAGgZABQgdgBgOgHg");
	this.shape_75.setTransform(609.7,338.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CC0000").s().p("AgnCPIAAjOIBPAAIAADOgAgnhYIAAg2IBPAAIAAA2g");
	this.shape_76.setTransform(594.2,338.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC0000").s().p("AgqAtQAYgLAIgKQAJgKABgOIgqAAIAAhPIBVAAIAABCQAAAjgQAVQgOAVgkAQg");
	this.shape_77.setTransform(580.9,352.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CC0000").s().p("AhUCCQgYgUAAgfIABgKIBNAJQADAKAGAFQAIAFANAAQARAAAJgJQAIgJAAgXIAAggQgMAOgLAHQgSAKgVgBQgqAAgZgkQgSgYAAgrQAAgwAXgZQAXgaAmAAQAYAAAPAIQAQAJAOASIAAgfIBKAAIAADDIAAAJQAAAUgIASQgIASgOAKQgOAMgVAEQgVAFgcAAQg9AAgXgSgAgZhPQgJALAAAaQAAAXAJAKQAKAKAPAAQAOABALgLQAKgLAAgXQAAgXgLgLQgLgMgOgBQgPABgJAKg");
	this.shape_78.setTransform(560.4,346.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC0000").s().p("AAeBqIAAhxQAAgUgHgHQgIgJgNAAQgNAAgJALQgJALAAAbIAABkIhQAAIAAjPIBKAAIAAAiQARgUARgJQAQgJAYAAQAhAAATATQATAUAAApIAACDg");
	this.shape_79.setTransform(534.2,342.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CC0000").s().p("AgnCPIAAjOIBPAAIAADOgAgnhYIAAg2IBPAAIAAA2g");
	this.shape_80.setTransform(514.2,338.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC0000").s().p("AhmBoIAAg0IBjhkIhcAAIAAg3IDAAAIAAAvIhoBpIBvAAIAAA3g");
	this.shape_81.setTransform(496.4,342.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC0000").s().p("AhjBbQgTgRAAgZQAAgYANgPQAOgOAmgIIA5gMQANgEAPgGQAAgOgGgGQgGgGgQAAQgSAAgKAGQgIAFgEAOIhMgIQAEgUAIgMQAIgLAQgJQAKgGAUgDQATgDAWAAQAjAAAVAEQAWAEAPAMQAKAJAGAQQAFAQAAAPIAABbQAAAOACAJQACAIAGANIhKAAIgGgMIgDgOQgPAPgQAHQgUAIgcAAQglAAgTgRgAgBAQQgZAGgGAGQgHAHAAAIQAAAJAHAGQAGAGANAAQANAAALgGQALgHAFgJQAFgJAAgPIAAgNQgRAGgQAFg");
	this.shape_82.setTransform(472,342.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC0000").s().p("ABhBqIAAh1QAAgOgGgHQgIgLgMAAQgOAAgJALQgIAJAAAXIAABqIhPAAIAAhxQAAgOgCgFQgCgHgGgGQgHgEgIAAQgNAAgKAKQgIAKAAAXIAABqIhQAAIAAjPIBLAAIAAAfQAQgTAQgIQAQgIAXAAQAZAAANAJQAPAIAJASQATgUAPgHQAQgIAXAAQAgAAATAUQATAUAAAqIAACBg");
	this.shape_83.setTransform(438.7,342.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC0000").s().p("AhjBbQgTgRAAgZQAAgYANgPQAOgOAmgIIA5gMQANgEAPgGQAAgOgGgGQgGgGgQAAQgSAAgKAGQgIAFgEAOIhMgIQAEgUAIgMQAIgLAQgJQAKgGAUgDQATgDAWAAQAjAAAVAEQAWAEAPAMQAKAJAGAQQAFAQAAAPIAABbQAAAOACAJQACAIAGANIhKAAIgGgMIgDgOQgPAPgQAHQgUAIgcAAQglAAgTgRgAgBAQQgZAGgGAGQgHAHAAAIQAAAJAHAGQAGAGANAAQANAAALgGQALgHAFgJQAFgJAAgPIAAgNQgRAGgQAFg");
	this.shape_84.setTransform(405.3,342.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CC0000").s().p("AhABhQgYgMgQgZQgPgZAAgjQAAgvAfgeQAfgeA3AAQAsAAAZANQAaAOAOAZQANAaAAAoIAAAJIieAAQACATAIAJQAMAOARAAQAMAAAKgGQAHgEAHgJIBPAHQgSAfgaAOQgZANgvAAQgpAAgXgLgAgdgtQgHAJgCATIBNAAQgCgXgKgKQgKgKgRAAQgSAAgLAPg");
	this.shape_85.setTransform(625.3,283.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CC0000").s().p("AhRBqIAAjPIBKAAIAAAiQALgWALgHQALgJARAAQASAAAUALIgYA4QgOgFgJAAQgPgBgJANQgLATAAAxIAABFg");
	this.shape_86.setTransform(604.2,283.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CC0000").s().p("AgaA1IgNg5IAAgwIBPAAIAAAwIgNA5g");
	this.shape_87.setTransform(588,270.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CC0000").s().p("AhaBWQgTgTAAgpIAAiDIBQAAIAABxQAAAUAIAIQAHAIANAAQANAAAJgLQAJgLAAgbIAAhkIBQAAIAADOIhKAAIAAghQgRAUgRAKQgQAIgYAAQghAAgTgUg");
	this.shape_88.setTransform(569,284.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC0000").s().p("AhQBTQgmgfAAgzQAAgvAggeQAggfA2AAQA9AAAhAkQAZAdAAAqQAAAvggAfQgfAeg4AAQgxAAgfgZgAgbgnQgMANAAAaQAAAcAMANQALAOAQAAQARAAALgNQALgNAAgdQAAgagLgNQgLgOgQAAQgRAAgLAOg");
	this.shape_89.setTransform(542.4,283.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CC0000").s().p("AhoCNIgGg3QARAFAWAAQAOAAAIgGQAIgHAHgQIhXjPIBTAAIAqCKIAoiKIBOAAIhSDdQgOAmgOANQgUATgqAAQgSAAgkgFg");
	this.shape_90.setTransform(517.6,288.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CC0000").s().p("AgpAtQAWgLAJgKQAIgKABgOIgoAAIAAhPIBTAAIAABCQABAjgPAVQgQAVgiAQg");
	this.shape_91.setTransform(498.6,294.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CC0000").s().p("AgUCKQgOgIgHgPQgHgQAAgiIAAhIIgdAAIAAg7IAdAAIAAgmIBPgoIAABOIAsAAIAAA7IgsAAIAABIQAAANADAFQAEAGAJABQAJAAAQgGIAGA3QgeAGgZABQgdgBgOgHg");
	this.shape_92.setTransform(483.1,280.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CC0000").s().p("AhOBcQgYgQgHgeIBPgHQAFAOAIAGQAJAGAOAAQAQAAAJgHQAGgFAAgIQAAgIgJgFQgGgDgbgFQgpgHgQgGQgQgHgLgNQgLgPAAgTQAAgUALgPQAMgPAVgHQAVgHAjAAQAkAAASAFQASAGAMAMQALAMAIAUIhLAIQgDgKgHgFQgJgGgNAAQgNAAgGAEQgGAFAAAHQAAAIAHAEQAIADAZAEQAoAEATAIQAUAIAKAOQAKAPAAARQAAASgLARQgKARgYAKQgXAKgoAAQg4AAgYgQg");
	this.shape_93.setTransform(461.8,283.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CC0000").s().p("AhABhQgYgMgQgZQgPgZAAgjQAAgvAfgeQAfgeA3AAQAsAAAZANQAaAOAOAZQANAaAAAoIAAAJIieAAQACATAIAJQAMAOARAAQAMAAAKgGQAHgEAHgJIBPAHQgSAfgaAOQgZANgvAAQgpAAgXgLgAgdgtQgHAJgCATIBNAAQgCgXgKgKQgKgKgRAAQgSAAgLAPg");
	this.shape_94.setTransform(436.5,283.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CC0000").s().p("AgKCJQgNgHgPgUIAAAfIhLAAIAAkdIBQAAIAABjQAMgMAQgHQAOgGARAAQAmAAAZAbQAZAbAAAzQAAAhgLAaQgLAagVANQgTAMgZABQgVAAgQgJgAgXABQgLAMAAAYQAAAaALAMQAKANAOAAQAOAAAKgMQAJgMAAgcQABgZgKgLQgJgLgNABQgQAAgKALg");
	this.shape_95.setTransform(410.2,280.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CC0000").s().p("AhABhQgYgMgQgZQgPgZAAgjQAAgvAfgeQAfgeA3AAQAsAAAZANQAaAOAOAZQANAaAAAoIAAAJIieAAQACATAIAJQAMAOARAAQAMAAAKgGQAHgEAHgJIBPAHQgSAfgaAOQgZANgvAAQgpAAgXgLgAgdgtQgHAJgCATIBNAAQgCgXgKgKQgKgKgRAAQgSAAgLAPg");
	this.shape_96.setTransform(615.1,225.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CC0000").s().p("AAeCPIAAhyQAAgTgHgIQgIgIgNAAQgNAAgJAKQgJALAAAdIAABjIhQAAIAAkdIBQAAIAABpQAQgQAPgIQAQgHAWAAQAgAAATAUQATAUAAAnIAACEg");
	this.shape_97.setTransform(588.4,221.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CC0000").s().p("AgUCKQgOgIgHgPQgHgQAAgiIAAhIIgdAAIAAg6IAdAAIAAgnIBPgoIAABPIAsAAIAAA6IgsAAIAABIQAAANADAFQAEAGAJABQAJAAAQgGIAGA3QgeAGgZAAQgdAAgOgHg");
	this.shape_98.setTransform(566.1,221.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CC0000").s().p("AhABhQgYgMgQgZQgPgZAAgjQAAgvAfgeQAfgeA3AAQAsAAAZANQAaAOAOAZQANAaAAAoIAAAJIieAAQACATAIAJQAMAOARAAQAMAAAKgGQAHgEAHgJIBPAHQgSAfgaAOQgZANgvAAQgpAAgXgLgAgdgtQgHAJgCATIBNAAQgCgXgKgKQgKgKgRAAQgSAAgLAPg");
	this.shape_99.setTransform(530.6,225.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CC0000").s().p("AhRBqIAAjOIBKAAIAAAhQAKgVAMgIQALgJARAAQASAAAUALIgYA5QgOgHgIABQgQgBgJANQgLATAAAxIAABFg");
	this.shape_100.setTransform(509.5,225.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#CC0000").s().p("AgaA1IgNg5IAAgwIBPAAIAAAwIgNA5g");
	this.shape_101.setTransform(493.3,212.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CC0000").s().p("AhaBWQgTgTAAgpIAAiDIBQAAIAABxQAAAUAIAIQAHAIANAAQANAAAJgLQAJgLAAgbIAAhkIBQAAIAADOIhKAAIAAghQgRAUgRAKQgQAIgYAAQghAAgTgUg");
	this.shape_102.setTransform(474.3,225.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CC0000").s().p("AhRBTQglgfAAgzQAAgvAggeQAggfA2AAQA9AAAhAkQAZAdAAAqQAAAvggAfQggAeg3AAQgxAAgggZgAgbgnQgMANAAAaQAAAcAMANQALAOAQAAQARAAALgNQALgNAAgdQAAgagLgNQgLgOgRAAQgQAAgLAOg");
	this.shape_103.setTransform(447.7,225.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CC0000").s().p("AgrCPIAAh4IhwilIBiAAIA5BhIA6hhIBiAAIhwClIAAB4g");
	this.shape_104.setTransform(422.2,221.6);

	this.text = new cjs.Text("", "60px 'Arial-Black'", "#FF2C85");
	this.text.textAlign = "center";
	this.text.lineHeight = 87;
	this.text.parent = this;
	this.text.setTransform(647,250.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:861.2,y:145.1}},{t:this.shape_9,p:{x:861.2,y:145.1}},{t:this.shape_8,p:{x:152.2,y:167.1}},{t:this.shape_7,p:{x:152.2,y:167.1}},{t:this.shape_6,p:{x:857.2,y:593.4}},{t:this.shape_5,p:{x:857.2,y:593.4}},{t:this.shape_4,p:{x:512.5,y:384.4}},{t:this.shape_3,p:{x:512.5,y:384.4}}]},10).to({state:[{t:this.text},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_10,p:{x:157.6,y:159.4}},{t:this.shape_9,p:{x:157.6,y:159.4}},{t:this.shape_8,p:{x:864.5,y:143.4}},{t:this.shape_7,p:{x:864.5,y:143.4}},{t:this.shape_6,p:{x:149.5,y:591.4}},{t:this.shape_5,p:{x:149.5,y:591.4}},{t:this.shape_4,p:{x:870.5,y:591.4}},{t:this.shape_3,p:{x:870.5,y:591.4}}]},10).wait(10));

	// Envelope
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1,1,1).p("EBD5AAAMiHxAAA");
	this.shape_105.setTransform(507.5,85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1,1,1).p("EBD5gs1MAAABZrMiHxAAAMAAAhZrg");
	this.shape_106.setTransform(507.5,371.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFC66D").s().p("EhD4As2MAAAhZrMCHxAAAMAAABZrg");
	this.shape_107.setTransform(507.5,371.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(584.1,468,927,645.9);
// library properties:
lib.properties = {
	id: '09D09014F92BCA41B53FEB71B5615038',
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
an.compositions['09D09014F92BCA41B53FEB71B5615038'] = {
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