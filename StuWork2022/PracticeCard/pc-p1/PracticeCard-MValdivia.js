(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.triangle1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sombrero = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AiUOYQtqg+p2i1Qq1jHh+kPQhhjOEAjfQCJhoDuiBQHgkCIDh9QCGghCFgWIgDAmQgXFGAYF9QFZCuEpAEQDvAEC+hvIiJjXQhUiIknmfIhIhkQFQgMFJA2QNiCNMCJMQGRExgKDtQgCBCgiA7QgMAFgVAdIgZApQjsDsryBcQmQAwnKAAQlRAAlvgag");
	this.shape.setTransform(249.85,94.6279);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,499.7,189.3);


(lib.BasicButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBTQgIgFgEgJQgEgJAAgVIAAgrIgSAAIAAgjIASAAIAAgXIAvgYIAAAvIAaAAIAAAjIgaAAIAAArQAAAIABADQADADAFAAQAGAAAJgDIAEAiQgSADgPAAQgRAAgJgEg");
	this.shape.setTransform(74.825,25.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA+IgXgoIgaAoIg0AAIAthAIgqg7IA4AAIATAiIAXgiIA0AAIgqA7IAuBAg");
	this.shape_1.setTransform(61.525,27.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAuAEQgLATgPAIQgPAIgcAAQgYAAgOgHgAgRgbQgFAGAAALIAuAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_2.setTransform(46.15,27.875);

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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


(lib.somebrero = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btn1 = new lib.sombrero();
	this.btn1.name = "btn1";
	this.btn1.setTransform(253.25,210.45,1,1,0,0,0,249.8,173.6);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAmvAHgQgWAngkAkQjsDsryBcQq1BUtkg+Qtqg+p3i1QqCi4ibj2QgNgUgJgUIgEAoIgaDvIA3AbQBEAhA9AmQDCB4AzBwQA3B4DbAVQBUAIBUgKQBPgJAngUQAxgYBJgTQBfgZBagCQD8gFB5CvQCAC5DoAkQBcAOBVgPQBQgPArgjQAtgkBngoQBxgrB5gVQE+g2CLCGQBJBHA5AYQAtASA1gFQAfgEBGgMQBFgHBIAPQBNARBvgsQBJgdB8hLQCFhPAqgTQBUglAkAaQAjAaBbgBQA1AABygHQBigCArAVQA5AdgKBLQA9g1AShEQCKnzgrgXQgEgCgGADgAixu+QFQgMFKA2QA/AKA+ANQMcChLKIhQGRExgJDtQgDBCgiA7QgMAFgVAdIgZApEgm0AHXIgfEYQGGDoGJApQOQEuNmADQNnADJtgZQJKgXC7iiAixu+IBIBkQEoGfBTCIICKDXQBuhCBchoQAPgRAPgSAqSuMQALiJAUhcQBFk9CtDPIDQEhAqUijQgXl9AWlGQACgUABgSAqUijQFaCuEoAEQDwAEC+hvEgmWADAQhgjND/jgQCJhoDviBQHfkCIDh9QCGghCFgWAvtl5IBgBEQB5BRCABB");
	this.shape.setTransform(251.586,132.9644);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("ABvKgQkngElZivQgYl9AXlFIADgmQALiJAUhcQBEk9CuDPIDQEhIBHBkQEoGeBUCIICJDXQi4BtjoAAIgPgBg");
	this.shape_1.setTransform(238.5247,67.2536);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CC66").s().p("ACWGtQtmgEuRkuQmJgomFjnIAekYIA4AaQBDAiA9AlQDCB5A0BwQA3B3DaAVQBUAIBVgKQBOgJAogUQAwgXBKgUQBfgZBagCQD7gFB6CvQCAC4DnAkQBdAPBVgQQBQgOArgjQAsglBngnQBxgsB5gUQE+g3CMCHQBJBHA5AXQAtATA0gGQAggDBGgMQBFgIBIAQQBNAQBvgsQBIgdB9hKQCEhQAqgSQBUgmAlAbQAiAZBcAAQA0gBBzgGQBhgCAsAVQA5AcgLBLQi7CipJAYQorAWrxAAIi4AAg");
	this.shape_2.setTransform(241.6067,223.0161);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AnOIEQjogkiAi4Qh5iwj8AFQhaAChfAZQhJAUgxAYQgnAUhPAJQhUAKhUgIQjbgVg3h4QgzhvjCh5Qg9glhEgiIg3gaIAajwIAEgnQAJAUANATQCbD2KCC4QJ3C0NqA/QNkA+K1hVQLyhcDsjrQAkgkAWgnQAGgCAEACQArAWiKHzQgSBDg9A1QAKhLg5gcQgrgVhiACQhyAGg1ABQhbAAgjgZQgkgbhUAmQgqASiFBQQh8BKhJAdQhvAshNgQQhIgQhFAIQhGAMgfADQg1AGgtgTQg5gXhJhHQiLiHk+A3Qh5AUhxAsQhnAngtAlQgrAjhQAOQgsAIguAAQgrAAgsgHg");
	this.shape_3.setTransform(252.2767,204.5254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,506.2,269);


// stage content:
(lib.PracticeCardMValdivia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,11,29];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on current frame
		
		this.btn_hat.addEventListener("click", fl_ClickNextScene.bind(this));
		this.next_btn.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(18).call(this.frame_29).wait(1));

	// words
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(1,1,1).p("EAXsg5WIR3AAIoqYRIMnhVIAAHWIwvAAIFp4FIqWi0gEADAg56IQLgYIgYGlIldgwIAANKIgMIGIF1gYIBsFpIyzhsIBUkJIDBgwIAAzMIkJhggEgKtg4yIgNatIL2g8IgMmBIntAkIBg04ImBAAAE4YcMgEtgrzIDQA3QD5BLDSBrQKfFUAWIGQAXIGoVKfQimDSjKDIQhlBkhEA5AFEm9IDlTvQAugjBAg8QCAh4Bah/QEhmWjElCQjDlEkDAJQhRADhNAkIg+AjEAhFAPmMgCoghFIPDiQIgMFdIq6DBIBsHhIIdiEIAMKIImlBVIg8IFIFahAQFYg6gQAmQgPAlm3BGIm0A9A7E9VIg96tIMDgMIAYFdIoegkIAAGNIIqAMIgMGCInWgMIgMEgIH6BVIgYEUgEguQgdtIhg5kIQjgYIgkG9IpagMIgYGZIJOgMIgMFdInWgYIgMHtgEgjeASIICMI8QAqgeA9g7QB8h2BliUQFFnVgPo8QgOotmJi0Qhdgri9grQhIgQgdgLQgqgRgKgWQgmhTAbjuIAjjdIUTiEIAli0I5NBsIBISDIBDAfQBTAoBRAuQEDCTCQCcQDJDbg6DLQhHD5nNDVQgIADgIAEEgX4A32IgM5BIFFANIEJUHIDwzAIEVgYIAkaiIkUgZIgZoFIlEGxIiFnhIhsH5gEgjeASIIgQhBEAiCAbEQgvBBg4BqQhxDTgwDNQhDEfBIDqQBZEjEuC+QEuC+AwjNQAmikh9mXQhZkkiimBgEgDwA4mIFE5MIDYAAIEVYQIjxAkIiosbIj8LegAI1eRIDZAYID8E5ID9mxIDlAMImBLeICEKuIlRAYIg8rGgEACQAn3IAwipIAkCdgEAi+AozIAAEtIBIjYIgkh5");
	this.shape.setTransform(334.6085,377.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20).to({_off:false},0).wait(10));

	// credits
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiA2QgBgFACgEQADgIAGgGQAGgIALgJQARgOAGgHQAGgJAAgHQAAgIgFgGQgHgFgJAAQgIAAgGAGQgFAFAAAKIgOgBQACgPAIgIQAJgIAPAAQAPAAAKAJQAIAJABAMQAAAHgEAFQgCAHgGAGQgGAHgPAMIgNANQgEAEgCADIA0AAIAAANg");
	this.shape_1.setTransform(101.55,724.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgIAGgGQAFgIAMgJQAQgOAHgHQAGgJAAgHQAAgIgFgGQgHgFgJAAQgIAAgFAGQgHAFABAKIgOgBQABgPAKgIQAIgIAPAAQAPAAAJAJQAKAJgBAMQAAAHgCAFQgDAHgGAGQgGAHgPAMIgNANQgEAEgCADIAzAAIAAANg");
	this.shape_2.setTransform(93.2,724.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXArQgLgNAAgeQAAgSAEgMQAEgLAIgHQAHgGALAAQAJAAAGAEQAHADAEAHQAEAHADAJQACAJAAAPQAAATgDAMQgEALgIAHQgIAGgMAAQgOAAgJgMgAgNgjQgHAKAAAZQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgJAAgaQAAgZgHgJQgFgJgKAAQgIAAgFAIg");
	this.shape_3.setTransform(84.95,724.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiA2QAAgFABgEQADgIAGgGQAGgIALgJQAQgOAGgHQAHgJAAgHQAAgIgGgGQgGgFgIAAQgJAAgFAGQgGAFgBAKIgNgBQABgPAJgIQAKgIAOAAQAQAAAIAJQAJAJAAAMQAAAHgDAFQgCAHgGAGQgGAHgOAMIgPANQgDAEgCADIAzAAIAAANg");
	this.shape_4.setTransform(76.5,724.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbA1IgCgMIAHABQAFAAACgBQADgCACgDIAEgJIABgEIgdhNIANAAIARAuIAFARQACgJADgIIAQguIAOAAIgeBPQgEAMgCAFQgEAHgEADQgFADgGAAIgIgCg");
	this.shape_5.setTransform(64.65,727.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_6.setTransform(56.625,725.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAmA2IAAhZIggBZIgLAAIgfhbIAABbIgOAAIAAhrIAVAAIAaBLIAEAQIAGgRIAZhKIATAAIAABrg");
	this.shape_7.setTransform(46.225,724.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBAzQgEgCgBgEQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIABAHIACADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_8.setTransform(126.35,705.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_9.setTransform(122.275,706.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAgHgVIgLAfIAjAAIgLgdIgHgWQgCAKgEAKg");
	this.shape_10.setTransform(114.225,705.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_11.setTransform(103.975,706.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_12.setTransform(96.675,706.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAzQgEgCgBgEQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_13.setTransform(90.55,705.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQAlQgHgDgCgDQgEgFgBgFIgBgNIAAgvIAOAAIAAArIABANQABAGAEACQAEADAGABQAFgBAFgDQAFgDACgFQACgFABgKIAAgpIAMAAIAABNIgLAAIAAgMQgJAOgPAAQgGAAgGgDg");
	this.shape_14.setTransform(84.15,706.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_15.setTransform(76.075,708.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_16.setTransform(65.475,706.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_17.setTransform(55,706.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgZAxQgKgIgGgNQgGgNABgPQAAgRAGgMQAGgMAMgHQAMgGANAAQARgBAKAJQALAHAEAPIgNAEQgEgMgIgFQgGgGgLAAQgMABgIAFQgIAGgDALQgEAJAAALQAAAMAEALQAEAKAIAFQAJAFAJAAQALAAAJgHQAJgGACgOIAOADQgEASgLAJQgMAJgRAAQgQAAgMgGg");
	this.shape_18.setTransform(45.5,705.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_19.setTransform(108.025,687.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_20.setTransform(102.2,686.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAQAuIAEAPIAFgPIARguIANAAIgcBNg");
	this.shape_21.setTransform(96.8,687.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_22.setTransform(91.35,686.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_23.setTransform(85.225,686.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_24.setTransform(79.625,686.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_25.setTransform(73.775,687.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGA2IgqhrIAPAAIAcBNIAFASIAGgSIAdhNIAOAAIgqBrg");
	this.shape_26.setTransform(65.775,686.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHAHIAAgNIAOAAIAAANg");
	this.shape_27.setTransform(54.6,691.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAmA2IAAhZIggBZIgLAAIgfhbIAABbIgOAAIAAhrIAVAAIAaBLIAEAQIAGgRIAZhKIATAAIAABrg");
	this.shape_28.setTransform(46.225,686.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},20).wait(10));

	// pinata
	this.instance = new lib.triangle1("synched",0);
	this.instance.setTransform(505.2,441.05,1,1,0,0,0,25.4,33);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AxyxAICZhtIFriqQAAAAABAAQDwhMEQAAQFRAAEiB2A1ktUQAug1A0g0QBGhGBKg9A1ktTQAAAAAAgBQBtiECFhoA7OhdQAqiGBDihQCFlDB4iMI1FAAgAOrwtQBAA0A8A8QCjCjBsC5QDYFwAAHJIgCBAIjwMlQglA0gxBAQhjCBg8A7QhsBtj2CTQh7BKhmA0QhfAah6AaQj0A0iEAAQihAAkihMIkChOQhRgvhihBQjFiDhYhZQg3g2hahzIhRhpQhAiNhCi3QiDluAAjRQAAhCAOiBIANhyAIB05IAFAMQAHADAIADAIB05IAUASQDaBdC8CdQDcC7CvERIV0AAIyeN5Apt1XIJ10kIH5VCAsya5I1WNZIKk23AUcQ9IK3Y/I3vuR");
	this.shape_29.setTransform(489.2,389.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CCFF").s().p("AHlbrQBlg0B7hKQD2iTBshtQA8g7BjiBQAxhAAlg0IK4Y/gA3kRbIBQBpQBbBzA2A2QBZBZDFCDQBiBBBRAwI1WNYgAYNDYQAAnJjXlwIVzAAIydN5gEgqogNTIVEAAQh4CMiFFDQhDChgqCGgAht2jQkQAAjwBMIJ10kIH5VDIAFALQkih2lRAAg");
	this.shape_30.setTransform(489.2,389.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0099FF").s().p("AnCYvIkChNQhRgvhihCQjFiChZhaQg2g2hbhzIhQhpQhBiNhBi2QiClvgBjRQAAhBAOiAIANh0QAqiFBDiiQCFlDB4iMIAAAAQAug2Azg0QBHhGBKg9ICahtIFqipIABgBQDwhLEPgBQFSAAEiB2IAPAHQDaBcC8CeQBAAzA8A8QCjCjBsC5QivkRjci6QDcC6CvERQDXFwAAHJIgBBBIjwMkQglA0gxBAQhjCBg8A7QhsBtj2CTQh7BKhlA0QhgAah6AaQj0A0iFAAQigABkihNg");
	this.shape_31.setTransform(478.2,410.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance}]},11).to({state:[]},9).wait(10));

	// sombrerro
	this.btn_hat = new lib.somebrero();
	this.btn_hat.name = "btn_hat";
	this.btn_hat.setTransform(490.6,387.75,1,1,0,0,0,251.6,132.9);

	this.timeline.addTween(cjs.Tween.get(this.btn_hat).to({_off:true},11).wait(19));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(890.15,684.65);
	this.next_btn._off = true;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(11).to({_off:false},0).wait(19));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(539.9,387.9,451.30000000000007,364.1);
// library properties:
lib.properties = {
	id: 'FC302BC03EB5DC4BB6A37B4700441989',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFFFCC",
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
an.compositions['FC302BC03EB5DC4BB6A37B4700441989'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;