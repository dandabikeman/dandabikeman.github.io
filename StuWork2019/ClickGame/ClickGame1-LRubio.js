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


(lib.Timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.Timer = new cjs.Text("#", "45px 'Adobe Caslon Pro'");
	this.Timer.name = "Timer";
	this.Timer.lineHeight = 79;
	this.Timer.lineWidth = 33;
	this.Timer.parent = this;
	this.Timer.setTransform(-16.5,-38.3);

	this.timeline.addTween(cjs.Tween.get(this.Timer).wait(1));

}).prototype = getMCSymbolPrototype(lib.Timer, new cjs.Rectangle(-18.5,-40.3,37,80.6), null);


(lib.Score = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.scoreDisplay = new cjs.Text("score", "60px 'Times New Roman'", "#FFFFFF");
	this.scoreDisplay.name = "scoreDisplay";
	this.scoreDisplay.lineHeight = 68;
	this.scoreDisplay.lineWidth = 181;
	this.scoreDisplay.parent = this;
	this.scoreDisplay.setTransform(-90.5,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.scoreDisplay).wait(1));

}).prototype = getMCSymbolPrototype(lib.Score, new cjs.Rectangle(-92.5,-35.2,185,70.5), null);


(lib.cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AIMCXIArAGAItgOIAKgDAG7AJIBygXAGrCKIBhANABsBZIFPhOIBygZABsBZIFAAvIBgAPABsBZIFLgJICAgEAhIiEQABAHAAAHQAAAmgPAcQgOAbgVAAQgCAAgCAAQgRgEgNgXQgPgcAAgmQAAgmAPgbQANgXARgDQACgBACAAQAVAAAOAbQAHAMADAMAhIiEQgBAMgJAKQgBAAAAAAQgMAMgRAAQgDAAgDAAQgNgCgKgKQgMgLAAgRQAAAAAAgBQAAgIADgGQADgJAGgGQAKgKANgBQADgBADAAQALAAAJAFQAFADAEAEQAEAEADAFQAFAJAAALQAAAEgBADgACSiZQADgMAEgJQACgFABgEQAOgXAQgDQAEgBABAAQAWAAAOAbQAOAbAAAmQAAAmgOAcQgOAbgWAAQgBAAgEAAQgQgEgOgXQgNgaAAgiQAAgDAAgDQAAgKAAgKACSiZQAEgJAFgGQAKgKAOgBQADgBADAAQAQAAAMAMQAMAMAAARQAAARgMAMQgMAMgQAAQgDAAgDAAQgOgCgKgKQgLgLgBgRQAAAAAAgBQAAgIADgGgAmBA1IgLgCIhQgMAhHBhIk6guIgLgCIhQgKIhagNAl6BqIgKAAIgQAAAl6BqIgKAAIgQAAIiiAFAn+DFIg4AOAlqCiIgKADIiKAgAhHBhIkiBEIgKACIiLAeACXCRQggAOgYgCQgegCgRgXQgMgNgFgSIgFgPQACAPgDAPQgCAKgEAKQgQAkgvgCQgNgBgOgCAgfAWIB0gIQgMAmgUAVQgPAOgQgDQgZgFgcg5gAhHBhIkzAJ");
	this.shape.setTransform(56.7,56.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AHhnWIANgKIhkGGQAjBLADBXQAAACAAABQAAAEAAAFQAAAegEAdQgDAdgIAbQAAABgBABQgcBjhOBNQh5B5isAAQAAAAgBAAIgIAAQgBAAgBAAQiqAAh6h5QhChBgehSQAAAAgBgCQgEgNgEgNQgBgDgBgCQgDgOgDgNIAAgBQgDgOgCgNQAAgBAAAAQgBgNgBgNQgBgBAAgBQAAgLAAgLQAAgCAAgCQAAgCAAgBQAAhgAmhQIh8mVIARAUIgGgUIDhEGQBxhfCWAAQACAAAAAAIAIAAQABAAAAAAQBwAABbA0IEHjKgADckWQADACADABID/jDAAGHyQikgDh2h2QhChCgehTQAAgBgBgCQgEgLgEgMQAAgDgBgCQgEgOgDgOQgCgOgCgNQAAgBAAAAQgCgMAAgNQAAgBAAAAQgBgMAAgMQAAgCAAgCQAAgCAAgBQAAhgAmhQIh2mBAkBjrIAFAEQBuhgCUgD");
	this.shape_1.setTransform(57.8,49.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCCFF").s().p("AgEAjQgagFgbg4IBzgJQgMAmgUAUQgNANgNAAIgEgBg");
	this.shape_2.setTransform(59.4,61);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF99").s().p("ACPAoQgNgBgKgKQgMgLgBgRIAAgBQABgHADgHQACgIAHgGQAKgLANgBIAGAAQAQAAAMAMQANAMAAAQQAAARgNAMQgMAMgQAAIgGgBgAiaAoQgNgBgKgKQgMgLAAgRIAAgBQAAgHADgHQADgIAGgGQAKgLANgBIAGAAQALAAAJAFQAFADAEAEQAFAEACAFQAFAJAAAKIgBAHQgBAMgJAJIgBABQgMAMgRAAIgGgBg");
	this.shape_3.setTransform(60.3,42.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACXBcQgRgDgNgYQgNgZAAgjIAAgFIAAgTQAAAQAMALQAKAKAOABIAFABQARAAAMgMQAMgLAAgRQAAgRgMgMQgMgMgRAAIgFAAQgOABgKALQgGAGgDAIQADgLAEgJIADgJQANgXARgDIAFgBQAVAAAOAbQAPAbAAAlQAAAmgPAbQgOAbgVAAIgFAAgAihBcQgQgDgNgYQgPgbAAgmQAAglAPgbQANgXAQgDIAFgBQAVAAAOAbQAGALAEANQgDgFgEgEQgFgFgEgDQgKgEgLAAIgFAAQgNABgLALQgGAGgDAIQgCAHAAAIIAAABQAAAQALALQALAKANABIAFABQASAAAMgMIABgBQAIgJACgLIAAANQABAmgPAbQgOAbgVAAIgFAAg");
	this.shape_4.setTransform(60.3,44.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAQHyIgIAAIgCAAQikgEh2h1QhChCgehTIEihDIk5guIgBgYIAAgFIAAgDQAAhfAmhRIh2mAIB2GAQgmBRAABfIAAADIAAAFIABAYIgMgDIAAgVIAAgFIAAgDQAAhfAmhRIh8mUIARAUIgGgUIDhEGQBxhfCWAAQiUAEhuBfIgFgEIAFAEQBuhfCUgEIACAAIAIAAIABAAQBwAABbA0IAGADID/jCIANgLIhkGGQAjBLADBXIAAACIlOBPIE/AuIgBACQgcBihOBOQh5B5isAAIgBAAgAgxDpQApAAAPgfIACgDQAEgKACgKQACgJAAgJIgBgNIAEAQQAGATALANQASAWAdABIABABIAFAAIAAAAIABAAQASAAAXgJIAEgBIAEgCIgEACIgEABQgXAJgSAAIgBAAIAAAAIgFAAIgBgBQgdgBgSgWQgLgNgGgTIgEgQIABANQAAAJgCAJQgCAKgEAKIgCADQgPAfgpAAIAAAAIAAAAIgGAAQgMAAgPgEQAPAEAMAAIAGAAIAAAAIAAAAgAgpBVQAbA5AZAFQAQADAPgOQAUgVAMgngACwiRQgRADgNAWIgEAJQgEAJgCAMQgDAHAAAHIAAABIgBAVIAAAFQABAjANAYQANAYARADIAFAAQAVAAAOgbQAPgbAAglQAAgngPgbQgOgbgVAAIgFACgAiIiRQgRADgNAWQgOAbAAAnQAAAlAOAbQANAYARADIAFAAQAUAAAPgbQAOgbAAglIAAgPIAAgHQAAgKgEgKQgEgMgGgMQgPgbgUAAIgFACgAkeF5QhChCgehRIAKgCQAeBTBCBCQB2B1CkAEQiqAAh6h5gAl+DmIgBgCIAKgCIgKACIgIgaIgCgFIgGgbIAKgBIAHAcIABAFIAIAYIABACIgKACIAAAAgAl0DkIAAAAgAl0DkIgBgCIgIgYIgBgFIgHgcIEzgIIkiBDIAAAAgAGhDHgABiCZIFKgKQgDAdgIAbgAmPCqIAAgBIgFgbIAAgCIgCgZIALABIgLgBIgBgDIAMADIAAABQAAANACALIAAACIAEAbIgKAAIAKAAIgKABIAAAAgAmFCpIgEgbIAAgCQgCgLAAgNIAAgBIE5AuIkzAIIAAAAgAhSChgABiCZgAGwBKIAAAJQAAAfgEAdIlKAKgAmLBzgAmWBzgAmXBwgAGwBKIAAAAgADckWIEHjKIgCALIj/DCIgGgDg");
	this.shape_5.setTransform(57.8,49.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,115.4,101.6);


(lib.bubble2blueglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.bubble2blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape.setTransform(11.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.2,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_2.setTransform(1.3,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAOAcIAAgeIgBgHIgBgFIgEgEIgGgBQgDAAgEACIgIAGIAAAnIgJAAIAAg2IAJAAIAAAGIAJgFQAEgCAFAAQAJAAAEAGQAFAFAAAJIAAAjg");
	this.shape_3.setTransform(-3.9,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_4.setTransform(-10,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#86C5DF","#7DC0DB"],[0,0.925,1],-6,-5.7,0,-6,-5.7,21).s().p("AhRDBQglgPgegeQgdgdgQglQgQgoAAgqQAAgqAQgnQAQgmAdgdQAegdAlgQQAngQAqAAQAqAAAoAQQAlAQAeAdQAcAdAQAmQARAnAAAqQAAAqgRAoQgQAlgcAdQgeAeglAPQgoAQgqABQgqAAgngRg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#BCDFED","#72BBDA","#67BED3"],[0,0.925,1],-6,-5.7,0,-6,-5.7,21).s().p("AhRDBQglgPgegeQgdgdgQglQgQgoAAgqQAAgqAQgnQAQgmAdgdQAegdAlgQQAngQAqAAQAqAAAoAQQAlAQAeAdQAcAdAQAmQARAnAAAqQAAAqgRAoQgQAlgcAdQgeAeglAPQgoAQgqABQgqAAgngRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).to({state:[]},1).wait(1));

	// center border
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D8BB2").s().p("AhVDLQgngRgfgfQgfgegQgnQgRgqAAgsQAAgsARgpQAQgoAfgeQAfgeAngRQApgRAsAAQAsAAAqARQAnARAeAeQAfAeARAoQARApAAAsQAAAsgRAqQgRAngfAeQgeAfgnARQgqARgsAAQgsAAgpgRg");

	this.instance = new lib.bubble2blueglow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.815,0.815);
	this.instance.shadow = new cjs.Shadow("#FFFF99",0,0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1));

	// gradient circle
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#86C5DF","#308AAF"],[0,1],15.9,17.7,-17.1,-16.7).s().p("AhdDdQgrgTghghQghgggSgsQgTgsAAgxQAAgwATgtQASgqAhgiQAhghArgSQAtgTAwAAQAwAAAtATQArASAhAhQAiAiASAqQATAtAAAwQAAAxgTAsQgSArgiAhQghAhgrATQgtATgwAAQgwAAgtgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},3).wait(1));

	// outer circle
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#47A4CB").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#469AA9").s().p("AhoD4QgxgUglglQgmgmgUgwQgVgzAAg2QAAg2AVgyQAUgxAmglQAlglAxgVQAygVA2AAQA2AAAzAVQAwAVAmAlQAlAlAUAxQAWAyAAA2QAAA2gWAzQgUAwglAmQgmAlgwAUQgzAWg2AAQg2AAgygWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},2).to({state:[]},1).wait(1));

	// outer border
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A0D1E6").s().p("AhwELQg0gWgogpQgpgngVg0QgXg2AAg7QAAg6AXg2QAVg0ApgoQAogpA0gVQA2gXA6AAQA6AAA3AXQAzAVAoApQApAoAWA0QAXA2AAA6QAAA7gXA2QgWA0gpAnQgoApgzAWQg3AXg6AAIAAAAQg6AAg2gXg");

	this.instance_1 = new lib.bubble2blueglow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-29,58,58);


// stage content:
(lib.ClickGame1LRubio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start:0,Game:10,GameOver:20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.startBtn.addEventListener("click", fl_ClickStart.bind(this));
		
		function fl_ClickStart()
		{
			// Actions you want the button to do go here
			this.gotoAndStop("Game"); // jump to the frame with the label "Game"
		}
	}
	this.frame_10 = function() {
		var secondsLeft = 20; // Creates a variable to store the seconds
		// Next line is optional - use if you have the time visible on screen
		this.Timer_mc.Timer.text = secondsLeft; // Text field with Instance name countdownDisplay will display the seconds
		var timerId = setInterval(countdown.bind(this), 1000); // Use the setInterval to call the countdown function every 1000 ms
		
		function countdown() {
			if (secondsLeft == 0) {
				clearInterval(timerId); // Should stop the timer
				clearInterval(moveTimer); // Should stop the timer
				this.gotoAndStop("GameOver");
			} else {
				secondsLeft--; // reduce seconds by 1
				// Next line is optional - same as above
				this.Timer_mc.Timer.text = secondsLeft; // update the text field
			}
		}
		
		var _this = this;
		var score = 0; // Create a variable to hold a number, set it to 0
		
		this.increaseScore = function () {
			score += 1;
			this.score_mc.scoreDisplay.text = score;
		}
		
		this.cat.addEventListener("click", hitTarget.bind(this));
		
		function hitTarget() {
			// Score increases and updates scoreDisplay text on screen
			this.increaseScore();
			// Target disappears / moves to new location
			moveInterval = 0;
		}
		var moveInterval = 12; // Tenths of a second until target moves (12= 1.4 sec)
		var moveTimer = setInterval(moveTarget.bind(this), 100);
		
		function random(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		};
		
		function moveTarget() {
			if (moveInterval <= 0) {
				// Randomly move target to a new location
				this.cat.x = random(0, stage.canvas.width * 0.7);
				this.cat.y = random(0, stage.canvas.height * 0.7);
				moveInterval = 12; // This could gradually be lowered
			} else {
				moveInterval--;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(20));

	// Directions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAVCiIg0AAIg5AAIgaABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBgGIAAgMQAAgEACgCQABgBAFgBIAdAAQAJAAAEgCQAEgFAAgGIABgoIAAgyIAAhFQAAgUgDgKQgCgLgGgFQgGgHgKgFIgPgHIgEgDQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAEgCIBLgnIAFgDIAFAAQADAAABADIABAGIAEA1IADAAQAQgbAYgSQAYgTAZgBQATAAAKAKQAJAJAAANQgBARgKAKQgJAKgLABQgHgBgFgCIgKgDQgFgDgGgCQgHgCgHAAQgJAAgNAHQgMAHgJASQgEAGgBAIIgDAKIAACbQAAARAFAHQAFAHAKgBIAkAAQAAAAABABQABAAAAAAQABAAAAABQAAAAABAAIABAGIAAAMIgBAGQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAIgagBg");
	this.shape.setTransform(410.1,113.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxCaQgggMgVgeQgNgTgIgRQgHgSgCgTQgDgUAAgZQAAgOADgVQAEgUAKgWQAKgWAUgUQAYgYAbgIQAcgIAbABQAgAAAWANQAVAMANATQAMASAFASQAFASAAAMQAAAHgGACQgFADgKAAIi4AAQgCAKAAAaQAAAkAOAdQAOAdAYAQQAYARAeAAQAiAAAXgQQAXgPAKgTQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBIAEAAIAJAFQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAACgDAGQgGAQgPATQgQASgYAOQgYAOgiABQgfAAgggLgAgph8QgWASgLApIB0AAQAKAAAFgCQAFgDAAgFQAAgJgEgQQgFgQgNgMQgMgNgYgBIgBAAQgYAAgUASg");
	this.shape_1.setTransform(380.9,113.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUCfQgEgFgDgHIgHgQIgNglIgRgsIgPglIgHgQIgFgSIgMggIgNgiIgIgUQgHgRgHgGQgHgGgJABIgPAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgBgFIAAgNQAAgEACgBQABgBAGAAIASABIAsABIAugBIAWgBQAEAAACABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABIAAANIgBAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAIgPAAQgGAAgDADQgEAEAAAHQAAAFADANIAHAbIAIAbIAFARIAIAWIAOAiIAOAkIAIAXIADAAIAPglIAWg4IAWg4QAKgZADgMQADgPgDgJQgDgIgLAAIgPAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIgBgFIAAgNQAAgBAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAVABIAnABIAjgBIATgBIAFABQACABAAAFIAAAMIgBAGQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgOAAQgHAAgGABQgGACgFAFQgEAEgIAPIgSAjIgRAlIgNAeIgOAfIgWAzIgVAvIgKAXIgHAMQgEAFgGAAQgGAAgDgEg");
	this.shape_2.setTransform(348.7,114.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgsEQQgbgEgegLQgegLgegSQgbgQgZggQgZgfgQgsQgQgtgBg3QAAgWAFgeQAGgeAPgiQAQgiAcgjQAhgoAjgUQAjgVAigHQAigIAfABQAYgBAcAFQAbAFAeANQAdANAeAYQAcAYAXAgQAXAhAOApQAPAqAAAzQAAApgOAqQgNApgdAoQgiAug1AeQg0AdhNABQgSAAgagFgAhCjuQgZAKgcAaQgaAYgQAfQgRAfgIAiQgIAhAAAgQAABIAWAzQAWAzAgAgQAhAfAhAOQAiAPAYgBQAxAAAigSQAigRAWgdQAVgbAMggQAMggAEgeQAFgdgBgVQAAg9gTgwQgTgwgegiQgfgigigRQgjgSgfAAIgXAAQgRAAgZAJg");
	this.shape_3.setTransform(301.2,102.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgxCaQgggMgVgeQgNgTgIgRQgHgSgCgTQgDgUAAgZQAAgOADgVQAEgUAKgWQAKgWAUgUQAYgYAbgIQAcgIAbABQAgAAAWANQAVAMANATQAMASAFASQAFASAAAMQAAAHgGACQgFADgKAAIi4AAQgCAKAAAaQAAAkAOAdQAOAdAYAQQAYARAeAAQAiAAAXgQQAXgPAKgTQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBIAEAAIAJAFQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAACgDAGQgGAQgPATQgQASgYAOQgYAOgiABQgfAAgggLgAgph8QgWASgLApIB0AAQAKAAAFgCQAFgDAAgFQAAgJgEgQQgFgQgNgMQgMgNgYgBIgBAAQgYAAgUASg");
	this.shape_4.setTransform(235.9,113.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AD+ChIgqgBIgwABIgWABQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBgCgBgEIAAgMQAAgEACgCQADgBAFAAIATAAQAGAAAFgDQAEgEAAgHQACgOgBgRIAAgeIAAhuQABgSgEgQQgGgQgMgKQgKgIgPgEQgOgEgQAAQgSABgTALQgTALgKAQQgIAQgCASIgBAqIAACBQABAHADAFQADAFAJAAIAaAAQAEAAACABQACACAAAEIAAAMQAAAEgCACQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgTgBIgvgBIgwABIgWABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBgCgBgEIAAgLQABgFABgCQACgBAEAAIAWAAQAJAAAEgDQAEgDgBgHIAAiZQABgcgEgPQgDgQgFgJQgFgIgGgFQgIgHgOgDQgNgEgNAAQgPAAgUAKQgVAJgQAZQgGALgCAMQgDALAAAQIAACTQAAAKAEAFQAEAFAIAAIAaAAQAFAAACABIABAGIAAAMIgBAGQgCACgDAAIgVgBIgvgBIgwABIgWABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBgBAAgEIAAgNQAAgFACgBIAHgBIAZAAQAFAAAEgEQACgEABgLIAAgTIAAgUIAAiEQABgMgEgJQgEgKgNgHIgQgIIgEgEQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgGIACgDIACgDIBCghIAIgEIAGgBQAEABABACQACAEAAAEIADArIACAAQASgXAegRQAdgQAigBQAdABAVAPQAWAPALAbIAEAAQARgXAegRQAdgRAjgBQATAAARAFQARAEANAOQAKAIAHALQAJAKAFARQAFARAAAdIAACmQABAIAEAEQAFADAGAAIAUAAQAGAAABABQACACAAAEIAAAMQAAAEgCACQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgUgBg");
	this.shape_5.setTransform(189.6,113.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAvCXQgOgNgFgXIgCAAQgMAOgQAMQgUALgYAJQgLADgLAAIgXABQgJAAgKgFQgLgGgHgOQgHgOgBgXQgBgaARgXQAPgWAsgUIAigOIAegPQAOgIAGgFIAAgwIgDgWQgBgMgHgIQgFgHgLgFQgLgEgRAAQgLAAgOAEQgPAEgIAHQgHAIABAIIACATQAAATgIAMQgJALgXABQgJAAgEgGQgFgGAAgNQABgSAOgTQAOgTAXgOQAYgOAVgGQAVgGAYAAQAaAAANAGQAOAGAIAIQALAMACANQAEANgBAPIAAByIAAAsQAAAfAGANQAGAMAKAAQAKAAAHgEQAHgDADgEIADgEQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABIAIAGQABABABAEQAAADgDAFQgDAGgGAJQgHAIgMAHQgLAHgUAAQgUAAgOgOgAgEAGQgQAIgRAKQgRALgLAPQgMAPgBAYQABAUALALQAKAKASAAQALAAAOgIQANgHALgKQALgLAAgLIAAhbQgLAIgPAGg");
	this.shape_6.setTransform(144.5,113.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhEELQgngIgkgTQgkgTgbgeQgigngRgxQgRgzAAhCQAAg0AVgyQAWgzApglQAogiA0gTQA0gSBDAAQAxABAnANQAnAOAUAPQAGAFAEgBQAEAAADgFIAMgNIAEgFQADgCADAAQAEAAABACQACADAAAEIACCPIgBAFQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgNABIgEgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQgEgQgLgXQgLgYgTgZQgLgOgTgPQgTgOgbgIQgbgKgiAAQglgBgkANQgjANgiAjQgfAhgRAsQgSAtAAAzQAABCASA2QASA2AjAjQAdAaAhANQAiANAkABQAsAAAdgHQAegIAUgLQAMgHAEgPQAEgPAAgdIAAg4QAAgTgHgIQgHgHgRAAIggAAIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgUQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAIAgABIA/ABIA8gBIAcgBQAEAAABACIABADIAAATIgBADQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgdAAQgLAAgGAFQgGAHAAARIAABjQAAAHABAGIABAKQAAAFgDADQgDADgGACQgsAWgxANQgxAMg+AAQghABgngKg");
	this.shape_7.setTransform(96.8,103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).wait(10));

	// Game Content
	this.text = new cjs.Text("Credit:\nL Rubio\n\nComputer Art\n", "20px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.lineWidth = 259;
	this.text.parent = this;
	this.text.setTransform(12,522.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhNDRQgbgLgKgHQgDgDgBgDIgCgHIgRhgQAAgDABgDIAFgCIANgCQAGgCADAHIAZAxQAKATAKAOQAKAOAPAHQAQAIAZAAQASAAASgHQASgHAMgPQANgQAAgXQABghgWgWQgVgVg2gQQgegHgbgPQgagPgRgYQgRgZgBgnQABgjATgcQATgbAfgQQAggQAlAAQAjAAAWAHQAWAGANAIQALAFADAEQAEAFAAAEIAPBGQAAACgCADIgFAEIgMAEQgDABgCgCIgEgEIgiguQgJgPgQgMQgQgLgcgBQgTAAgSAIQgRAHgLAPQgLAOgBAWQABAdANAPQAOAQAWAIQAVAIAYAHQA3AOAgAbQAgAdABA5QgBAogUAdQgUAegiAQQgiAPgqABQglgBgbgKg");
	this.shape_8.setTransform(706,202);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ADUFpQgVgBgkAAQgtAAgcABIgjACQgEAAgCgDQgCgCAAgGIAAgPQAAgEACgCQADgCAFAAIAHAAQAHAAADgFQADgEgBgIQgCgDgTgUIgpguIgrgvIgcgcQgJgGgLgCQgNgCgKAAIAAAsIAAA0IABA0QABAKAFAFQAEAGAKAAIAdAAQAFAAACACQACABAAAFIAAAQQAAAGgCADQgBADgEAAIgdgCQgXgBgmAAQgoAAgZABIgfACQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBgBAAQgBgDAAgFIAAgQQAAgGACgBQACgCAFAAIAlAAQAKAAAFgHQAEgHAAgKIABhNIAAhtIAAlKQABgUgDgOQgDgNgLgJQgLgIgYgHIgMgDQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgJQAAgDACgCQADgCAIgDIBlgsIANgFQAFgDAEAAQAFAAABAEQABAEgBAJQgCAZgBAzIgCBzIAAB8IAACdQALAAAOgDQAPgCAIgGIAYgVIAigkIAegiIASgVQAEgIAAgFQAAgGgEgDQgHgFgHgBIgNAAQgFAAgBgCQgCgCAAgFIAAgTQAAgEACgCQACgCADAAIAeABQAZACAmAAQAlAAAUgCIAZgBQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAQABADAAAFIAAASQAAAFgBABQgCACgEAAIgIAAQgPAAgTAGQgTAHgQAKQgIAEgYAWIg2AwIgsAsIAlAmIBBBAIBBA/QAdAaAHAEQAOAHAPAEQAPAEAIAAQAFAAACACQABABAAAGIAAARQAAAFgCACQgCADgFAAIgagCg");
	this.shape_9.setTransform(666,186.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag9DPQgogOgjgrQgbgkgJghQgKghABgiQAAg6Aag1QAag2AwghQAwgiBBgBQAzABAeAPQAfAPAMATQAMATAAAMQgBARgKAIQgKAKgQAAQgRAAgNgLQgOgJgLgUQgQgegRgIQgQgHgSABQgcAAgbARQgbARgRAjQgRAigBA0QABAoAOApQAPApAVAcQAZAgAdAKQAcAKAagBQAkABAZgKQAZgKAYgYIAEgCQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAIAKAKQADADABADQAAADgEAEQgPARgYAQQgZAQggALQgfAKgiABIgFAAQglAAglgNg");
	this.shape_10.setTransform(619.2,202);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABTFHIgkgBIgpgBQgrABgcABIgkABQgEAAgCgCQgCgBAAgFIAAgUQAAgEACgBQADgCAFgBIAxAAQAIABADgFQAEgEABgMIABgtIAAguIAAiSQABgagKgNQgLgOgkgGIgHgCQgCgCAAgEIAAgIQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAGgDIAzgWQAcgMAcgQIAKgDIAJgCQADAAACADQABAEgBAFQgCANAAArIAABqIAABsIAAA2IABAhQABANADAHQADAFAJAAIAuAAQAFABACACQADACgBAEIAAARQABAFgCADQgCACgFAAIgTgBgAgwjfQgOgHgJgMQgJgNgBgQQAAgVARgRQAQgRAegCQAbACANARQAOAQAAASQAAAWgPASQgOATgeABQgMgBgNgHg");
	this.shape_11.setTransform(584.2,190.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABOFpQgegBgvAAQgwAAgcABIgkACQgEAAgCgDQgCgDABgFIAAgQQgBgGADgBQACgCAJAAIAwAAQAIAAAGgGQAHgGAAgNIABguIAAhKIAAhRIAAg8IAAg+IAAhLIgBhFIgBgsQgCgZgMgOQgMgOgYgHIgUgHIgFgCQAAgBgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIAAgIQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQACgCAFgBIA6gaQAegOAbgSIANgGQAEgCAFAAQAEAAADAEQACAEgBAKIgBBBIgCBeIgBBeIgBBBIAABYIAAA2IAABGIABBDIAAArQABAMAFAJQAFAJAPABIAtAAQAHAAACACQACACAAAFIAAAQQAAAFgBADQgBADgDAAIgkgCg");
	this.shape_12.setTransform(558.2,186.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah1FXQg9gYgsgqQgkgjgYguQgXgwgMgzQgMgzAAgwQAAhGAYhEQAYhFA2g5QAagcAmgXQAlgXAvgNQAvgOA2gBQAuABAnAJQAnAKAeAMQAeANASAKQAKAHAEgBQAFAAABgGIAIgdQACgEACAAQACgBAHAAQAHgBACAEQACACAAAKIADAiIAIA8IAIA9IAGAoQABACgBAEQAAAAgBABQAAAAgBABQAAAAAAAAQgBABgBAAIgPAEQgDABgDgCQgCgBgCgGQgKgZgSghQgTgggfgiQgfgggqgWQgqgWg7gBQhCABgwAaQgvAageAtQgeAsgPA2QgNA1AAA4QAAAdAIArQAIAsAVAvQAUAxAnAsQAiAlAfASQAgATAfAEQAeAGAhAAQA5gBAvgSQAwgRAkgdQAkgdAXghIAEgFQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIANALIADAEQABABgCAEQgeAsgqAmQgrAmg4AXQg4AYhHAAQhWAAg9gZg");
	this.shape_13.setTransform(508.2,187.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbECQgWgNgOgTQgOgUAAgTIABg1IABg4IABgjIAAgWIAAgeIABgxIABgvIg9AAQgHAAgEgDQgEgDAAgGQAAgGAFgEQAEgDAJgFQANgIAYgXQAYgXAXgbQAWgaAIgSQACgGADgCQAEgCAFAAQAFAAACAEQACAFgBAGIgEBiICLAAQAEAAACADQACADgBADIgKAjIgDAGQgCACgEAAIiBAAIgCBGIAABGIAABkQAAAlAIATQAJATAMAGQAMAHAJAAQATAAASgDQATgEALgHIAGgBQAEAAACAEIAEAJQADADgBADIgDAEQgFAGgPAKQgPAJgXAHQgXAIgeAAQgYAAgWgNg");
	this.shape_14.setTransform(430.3,196.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhNDRQgbgLgKgHQgDgDgBgDIgCgHIgRhgQAAgDABgDIAFgCIANgCQAGgCADAHIAZAxQAKATAKAOQAKAOAPAHQAQAIAZAAQASAAASgHQASgHAMgPQANgQAAgXQABghgWgWQgVgVg2gQQgegHgbgPQgagPgRgYQgRgZgBgnQABgjATgcQATgbAfgQQAggQAlAAQAjAAAWAHQAWAGANAIQALAFADAEQAEAFAAAEIAPBGQAAACgCADIgFAEIgMAEQgDABgCgCIgEgEIgiguQgJgPgQgMQgQgLgcgBQgTAAgSAIQgRAHgLAPQgLAOgBAWQABAdANAPQAOAQAWAIQAVAIAYAHQA3AOAgAbQAgAdABA5QgBAogUAdQgUAegiAQQgiAPgqABQglgBgbgKg");
	this.shape_15.setTransform(395.5,202);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA/DKQgTgRgHggIgCAAQgQATgXAQQgZAPgiAMQgOAEgOAAIgfABQgMAAgOgHQgOgIgKgSQgJgSgBggQgBgiAWgeQAVgeA6gaIAugVQAWgJASgLQASgJAIgIIAAhAIgDgdQgDgQgIgKQgIgKgOgGQgPgGgWAAQgPAAgTAFQgUAGgLAKQgJAJABAMIADAZQABAagMAQQgMAPgeAAQgMAAgGgIQgGgHAAgRQABgYASgaQATgaAggSQAegSAdgJQAdgIAgAAQAjABARAHQASAJAKAJQAPARAEARQAEARgBAVIAACYIAAA7QAAAqAIAQQAIARAOgBQAMAAAKgFQAJgEAEgGIAFgFQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAKAIQADACAAAFQABADgFAIQgEAIgJALQgIAMgQAJQgQAJgZAAQgbgBgSgRgAgGAJQgWAKgXAOQgWANgPAVQgPAUgBAfQABAcAOAOQAOAOAXgBQAPAAATgKQASgJAOgPQAOgOABgOIAAh5QgOAKgVAJg");
	this.shape_16.setTransform(358.2,202);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmFkQgggBhAgBQg6ABgfABIgqABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgCAAgDIAAgbQAAgBAAgBQAAgBAAAAQABgBAAAAQAAAAABgBIAEgBIAtAAQATABAIgFQAIgEAAgNIACg2IAChuIAAiaIAAhFIAAgwIgBg/IAAg5IgBgdQAAgPgKgHQgKgIgVAAIg6AAQgDAAgCgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgbQAAgBAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQACgBADgBIAOABIAbAAIArACIA+AAIAiAAIBGAAIBYAAIBYAAIBGgCQAcAAAFgCIAGAgIANA2IAMA4IAJAlQAAAAABABQAAABAAAAQAAABAAAAQgBABAAAAIgCADIgSAGQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQgCgBgCgEIgYgmIgog3QgNgRgRgMQgSgMgWgGQgKgBgegCIhBgEIhBgBIgrgBIAAAcIAAA6IAABGIgBBFIAAAzIAAAwIAZAAIAqgBIAogCIAXgBQARgCAKgJQALgKAGgWIAFgWIAFgcQABgDACgBQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAIAUABQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQACABAAADIgBAXIgBAkIAAAhIAAAVIABAnIACAmIACAcQAAAEgCABQgBACgEABIgTADQgDABgCgCQgBgBgBgFIgCgNIgFgUIgEgPQgFgTgKgJQgJgJgRgDQgYgCgbgCIg0gBIggAAIAAAlIAAArIABBEIAABCIAAAkQgBATAIAGQAHAHAZgBIAwAAQAJABAAAFIAAAaQAAAEgCABQgCACgEAAIgngBg");
	this.shape_17.setTransform(307.1,187.4);

	this.startBtn = new lib.bubble2blue();
	this.startBtn.name = "startBtn";
	this.startBtn.parent = this;
	this.startBtn.setTransform(496.3,421.5,3.723,3.766,0,0,0,0.3,0.1);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 2, false, new lib.bubble2blue(), 3);

	this.Timer_mc = new lib.Timer();
	this.Timer_mc.name = "Timer_mc";
	this.Timer_mc.parent = this;
	this.Timer_mc.setTransform(472.5,54.3);

	this.score_mc = new lib.Score();
	this.score_mc.name = "score_mc";
	this.score_mc.parent = this;
	this.score_mc.setTransform(116.5,49.2);

	this.cat = new lib.cat();
	this.cat.name = "cat";
	this.cat.parent = this;
	this.cat.setTransform(479.3,320.6,1,1,0,0,0,56.7,49.8);
	new cjs.ButtonHelper(this.cat, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startBtn},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.text}]}).to({state:[{t:this.cat},{t:this.score_mc},{t:this.Timer_mc}]},10).to({state:[]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(490,440.7,837,546.4);
// library properties:
lib.properties = {
	id: 'F4E4B4EE79E64232B3FD75D33E0487F3',
	width: 960,
	height: 640,
	fps: 10,
	color: "#999999",
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
an.compositions['F4E4B4EE79E64232B3FD75D33E0487F3'] = {
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