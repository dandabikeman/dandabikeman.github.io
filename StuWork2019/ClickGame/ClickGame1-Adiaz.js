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


(lib.target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(1,1,1).p("AHgAAQAADHiMCNQiNCMjHAAQjGAAiNiMQiMiNAAjHQAAjGCMiNQCNiMDGAAQDHAACNCMQCMCNAADGg");
	this.shape.setTransform(48,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF00").s().p("AlTFUQiMiNAAjHQAAjGCMiNQCNiMDGAAQDHAACNCMQCMCNAADGQAADHiMCNQiNCMjHAAQjGAAiNiMg");
	this.shape_1.setTransform(48,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,98,98);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC99FF").s().p("Ar8D6IAAnzIX5AAIAAHzg");
	this.shape.setTransform(76.5,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,50);


(lib.Scoreboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.scoreDisplay = new cjs.Text("Score", "30px 'Adobe Caslon Pro'", "#CC66FF");
	this.scoreDisplay.name = "scoreDisplay";
	this.scoreDisplay.lineHeight = 53;
	this.scoreDisplay.lineWidth = 100;
	this.scoreDisplay.parent = this;
	this.scoreDisplay.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.scoreDisplay).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scoreboard, new cjs.Rectangle(0,0,104,55.1), null);


(lib.Counter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.Timer = new cjs.Text("#", "30px 'Adobe Caslon Pro'", "#CC99FF");
	this.Timer.name = "Timer";
	this.Timer.lineHeight = 53;
	this.Timer.lineWidth = 15;
	this.Timer.parent = this;
	this.Timer.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.Timer).wait(1));

}).prototype = getMCSymbolPrototype(lib.Counter, new cjs.Rectangle(0,0,19,55.1), null);


// stage content:
(lib.ClickGame1Adiaz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start:0,Game:10,GameOver:20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.start.addEventListener("click", fl_ClickStart.bind(this));
		
		function fl_ClickStart()
		{
			// Actions you want the button to do go here
			this.gotoAndStop("Game"); // jump to the frame with the label "Game"
		}
	}
	this.frame_10 = function() {
		var secondsLeft = 10; // Creates a variable to store the seconds
		// Next line is optional - use if you have the time visible on screen
		 //this.Timer.text = secondsLeft; // Text field with Instance name countdownDisplay will display the seconds
		var timerId = setInterval(countdown.bind(this), 1000); // Use the setInterval to call the countdown function every 1000 ms
		
		function countdown() {
			if (secondsLeft <= 0) {
				clearInterval(timerId); // Should stop the timer
				clearInterval(moveTimer); // Should stop the timer
				this.gotoAndStop("GameOver");
			} else {
				secondsLeft--; // reduce seconds by 1
				// Next line is optional - same as above
				this.Timer_mc.Timer.text = secondsLeft; // update the text field
			}
		}
		function random(min, max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		}
		;
		
		var moveInterval = 12; // Tenths of a second until target moves (12= 1.4 sec)
		var moveTimer = setInterval(moveTarget.bind(this), 100);
		
		function moveTarget() {
			if (moveInterval <= 0) {
				// Randomly move target to a new location
				this.target.x = random(0, stage.canvas.width * 0.7);
				this.target.y = random(0, stage.canvas.height * 0.7);
				moveInterval = 12; // This could gradually be lowered
			} else {
				moveInterval--;
			}
		}
		var _this = this;
		var score = 0; // Create a variable to hold a number, set it to 0
		
		this.increaseScore = function() {
			score += 1;
			this.Scoreboard.scoreDisplay.text = score;
		}
		this.target.addEventListener("click", hitTarget.bind(this));
		
		function hitTarget()
		{
			// Score increases and updates scoreDisplay text on screen
			this.increaseScore(); 
			// Target disappears / moves to new location
			moveInterval = 0;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(20));

	// Directions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AARCCIgqgBIgtABIgVABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgBgEIAAgKQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBADAAIAYAAQAHAAADgCQADgEAAgFIABggIAAgoIAAg4QAAgPgCgIQgCgIgFgFQgFgEgIgFIgMgGIgDgBIgBgEIAAgDIABgDIADgCIA8gfIAFgBIADgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABAFIACAqIADAAQANgVATgPQATgQAUAAQAPAAAIAIQAHAHAAALQAAANgIAJQgIAHgJABQgFAAgEgCIgIgDIgJgDQgFgCgGAAQgIAAgJAFQgKAGgIAOIgEAMIgBAHIAAB8QgBAOAEAGQAEAFAIAAIAdAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAKIgBAEQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgVgBg");
	this.shape.setTransform(597.6,466.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnB7QgZgJgSgYQgKgPgGgOQgGgOgCgQQgCgPAAgUQAAgMADgQQADgQAIgSQAIgRAQgQQATgUAWgGQAWgHAWABQAZAAARALQASAKAKAOQAKAPAEAOQAEAPAAAJQAAAGgFACQgFACgHAAIiTAAQgCAIAAAUQAAAdAMAXQALAXATAOQATANAXAAQAcAAASgMQATgNAIgPIACgDIADAAIAIAEQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAACgCAFQgFANgNAOQgMAPgTAMQgUALgaAAIgDAAQgYAAgYgJgAghhjQgRAPgJAhIBcAAQAJAAAEgCQAEgDAAgEQAAgHgEgNQgDgMgKgKQgKgLgUAAQgTAAgRAOg");
	this.shape_1.setTransform(574.2,466.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQB/QgDgDgCgGIgFgOIgMgdIgNgjIgMgeIgFgNIgFgNIgJgaIgKgcIgHgQQgFgNgGgFQgFgEgIAAIgMAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgBgEIAAgLQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAGgBIAPABIAjABIAlgBIARgBIAFABIABAEIAAALIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgMAAQgFAAgDADQgDACAAAGQAAAFADAJIAFAWIAHAWIAEAOIAHARIAKAcIALAcIAHASIACAAIAMgeIASgsIASgsIAKgeQADgNgDgGQgDgHgIAAIgMAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIAAgEIAAgLIAAgEIADgBIARABIAfABIAdgBIAOgBQABAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABIAAAKIAAAEQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgMAAQgFAAgFABQgEACgEADQgEAEgGAMIgOAbIgOAfIgKAXIgLAZIgSApIgRAlIgIATIgGAKQgDAEgFAAQgEAAgDgEg");
	this.shape_2.setTransform(548.4,467.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjDaQgVgEgYgJQgYgIgYgPQgWgNgUgZQgUgZgNgkQgNgjgBgsQAAgSAFgYQAEgYAMgbQANgbAWgcQAbggAcgRQAbgQAcgGQAcgGAYABQATgBAWAEQAWAEAYAKQAXAKAYAUQAWATATAaQATAaALAhQALAiABAoQAAAhgLAiQgLAhgYAfQgbAmgqAXQgqAXg9ABQgOAAgVgDgAgTjGQgOABgUAHQgUAHgWAVQgUATgOAZQgNAZgHAbQgGAbAAAZQAAA6ASApQARApAaAZQAaAZAbALQAbALATAAQAnAAAbgOQAcgOARgXQARgWAKgaQAJgZADgYQAEgXAAgRQgBgwgPgnQgPgmgYgbQgZgbgbgOQgcgOgZAAIgKgBIgIAAg");
	this.shape_3.setTransform(510.5,458.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnB7QgZgJgSgYQgKgPgGgOQgGgOgCgQQgCgPAAgUQAAgMADgQQADgQAIgSQAIgRAQgQQATgUAWgGQAWgHAWABQAZAAARALQASAKAKAOQAKAPAEAOQAEAPAAAJQAAAGgFACQgFACgHAAIiTAAQgCAIAAAUQAAAdAMAXQALAXATAOQATANAXAAQAcAAASgMQATgNAIgPIACgDIADAAIAIAEQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAACgCAFQgFANgNAOQgMAPgTAMQgUALgaAAIgDAAQgYAAgYgJgAghhjQgRAPgJAhIBcAAQAJAAAEgCQAEgDAAgEQAAgHgEgNQgDgMgKgKQgKgLgUAAQgTAAgRAOg");
	this.shape_4.setTransform(458.2,466.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ADLCBIgigBIglABIgTABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgFIAAgKQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgBAEAAIAPAAQAFAAAEgDQADgCAAgHIACgYIAAgYIAAhYQAAgPgEgMQgEgNgKgIQgIgGgLgDQgMgDgNAAQgOAAgQAJQgOAJgIANQgHANgBANQgBAOAAAUIAABnQAAAGADAEQACAEAHAAIAVAAQADAAACABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAKIgBAFQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIgQgBIglgBIgmABIgSABQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBgFIAAgJIABgFQABgBAEAAIARAAQAIAAADgCQADgDAAgFIAAh7QAAgWgDgMQgCgNgEgHIgJgLQgHgFgKgDQgLgCgLAAQgMgBgQAIQgQAIgNAUQgGAIgBAKQgCAJAAANIAAB1QAAAIADAEQADAEAGAAIAWAAQAEAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAKQAAADgBACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgRgBIglgBIgnABIgRABQgBAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgLQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQACgBAEAAIAUAAQAFAAACgDQACgEABgIIAAgQIAAgPIAAhqQAAgJgDgIQgDgIgLgGIgMgGQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgCgCIAAgFIACgDIACgCIA1gbIAGgCIAFgBQADAAABADQACACAAADIACAjIACAAQAOgTAYgNQAXgNAbAAQAYAAARAMQAQAMAKAWIADAAQAOgTAXgNQAYgOAbAAQAQgBANAEQAOAEALAKIANAQQAHAIAEAOQAEANABAXIAACFQAAAHADACQAEADAFAAIAQAAQAEAAACABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAKQAAAEgBABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgQgBg");
	this.shape_5.setTransform(421.2,466.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAmB5QgMgLgEgSIgBAAQgJALgOAKQgPAJgUAHQgJACgIABIgTAAQgHAAgJgFQgIgEgGgLQgFgLgBgTQAAgVANgSQAMgRAjgQIAcgMIAXgLQALgHAFgEIAAgnIgCgRQgCgKgEgGQgFgFgIgFQgJgDgNAAQgKAAgLADQgMAEgGAFQgGAHABAGIACAPQAAAQgHAJQgHAJgSAAQgHABgEgFQgDgFAAgKQAAgPALgPQALgPATgLQATgLARgFQARgFATAAQAVAAAKAFQALAEAGAHQAJAKACAKQADAKgBAMIAABbIAAAjQAAAZAFAKQAFALAIgBQAIAAAFgCQAGgDACgEIADgCQABgBAAAAQAAAAABAAQAAAAAAAAQABABAAAAIAGAFQABAAAAABQAAAAAAAAQABABAAAAQAAABAAABQAAACgCAFIgIALQgFAHgKAFQgJAGgPAAQgRgBgKgKgAgDAFQgNAGgOAIQgNAIgKANQgJAMAAATQAAAQAJAJQAIAIAOAAQAJgBAMgFQAKgGAJgIQAIgJAAgIIAAhJQgIAGgMAFg");
	this.shape_6.setTransform(385.1,466.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag2DWQgfgHgdgPQgdgPgVgYQgcgfgNgoQgPgoAAg1QABgqARgoQASgoAggeQAggcAqgOQAqgPA1AAQAnABAfAKQAfALARANQAFADADAAQACgBADgDIAJgLIAEgDQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABIABAFIACByIgBAEQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgLABIgDgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQgDgNgIgTQgJgTgQgTQgJgMgPgLQgPgLgWgIQgVgHgbgBQgeAAgdAKQgcALgbAcQgZAagNAjQgOAkgBApQAAA0APAsQAPArAcAcQAWAVAbAKQAbALAcAAQAkAAAYgGQAYgFAPgJQAKgGADgMQAEgMgBgXIAAgsQABgQgGgGQgGgGgOAAIgZAAIgDgBIgBgDIAAgPIAAgDQABAAAAgBQAAAAAAAAQABAAAAAAQABAAABAAIAZAAIAzABIAwgBIAXAAIADABIABADIAAAOIgBAEIgDABIgYAAQgHAAgFAEQgGAFAAAOIAABPIABALIACAIQAAAEgDACIgIAEQgjASgnAKQgnAKgyAAQgaAAgfgHg");
	this.shape_7.setTransform(346.9,458.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).wait(10));

	// Game Content
	this.text = new cjs.Text("Credits:    \n Adiaz\n Created in Comp Art\nMay 2019", "bold 15px 'Adobe Caslon Pro Bold'");
	this.text.lineHeight = 28;
	this.text.lineWidth = 138;
	this.text.parent = this;
	this.text.setTransform(25.1,486.8);

	this.text_1 = new cjs.Text("HIT THE TARGET", "60px 'Adobe Caslon Pro'");
	this.text_1.lineHeight = 104;
	this.text_1.lineWidth = 609;
	this.text_1.parent = this;
	this.text_1.setTransform(229,79.9);

	this.text_2 = new cjs.Text("START", "20px 'Adobe Caslon Pro'");
	this.text_2.lineHeight = 36;
	this.text_2.lineWidth = 100;
	this.text_2.parent = this;
	this.text_2.setTransform(442,315.9);

	this.start = new lib.start();
	this.start.name = "start";
	this.start.parent = this;
	this.start.setTransform(479.5,327,1,1,0,0,0,76.5,25);
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CC99FF").ss(1,1,1).p("Ar8j5IX5AAIAAHzI35AAg");
	this.shape_8.setTransform(479.5,327);

	this.Timer_mc = new lib.Counter();
	this.Timer_mc.name = "Timer_mc";
	this.Timer_mc.parent = this;
	this.Timer_mc.setTransform(23.8,39.4,1,1,0,0,0,9.5,27.5);

	this.Scoreboard = new lib.Scoreboard();
	this.Scoreboard.name = "Scoreboard";
	this.Scoreboard.parent = this;
	this.Scoreboard.setTransform(843,34.4,1,1,0,0,0,52,27.5);

	this.target = new lib.target();
	this.target.name = "target";
	this.target.parent = this;
	this.target.setTransform(225,192,1,1,0,0,0,48,48);
	new cjs.ButtonHelper(this.target, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.start},{t:this.text_2},{t:this.text_1},{t:this.text,p:{x:25.1,y:486.8,text:"Credits:    \n Adiaz\n Created in Comp Art\nMay 2019",font:"bold 15px 'Adobe Caslon Pro Bold'",color:"#000000",lineHeight:27.55,lineWidth:138}}]}).to({state:[{t:this.target},{t:this.Scoreboard},{t:this.Timer_mc}]},10).to({state:[{t:this.text,p:{x:430.2,y:13.9,text:"#",font:"30px 'Adobe Caslon Pro'",color:"#CC99FF",lineHeight:53.05,lineWidth:21}}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(503.1,397.9,817,521);
// library properties:
lib.properties = {
	id: 'F4E4B4EE79E64232B3FD75D33E0487F3',
	width: 960,
	height: 640,
	fps: 10,
	color: "#BBFFFF",
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