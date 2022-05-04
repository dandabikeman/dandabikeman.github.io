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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Hat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAqVAOjIhxt2Io4F1IgWANIgBgbIhDsrIrYHAIk7sVIoFH8InWqUAhKuaQAFAAAEAAEgqUAB1IEStEIJnH2IABADIAPALIAQgSIJsrFIJZJyIAKAKIAGgKIFkpb");
	this.shape.setTransform(317.35,269.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AwqweQFMn3D4mdQD3mfHhjjQHgjlHkCTIBEATQDsArC1DtQC0DrhqH2QhsH0D/I4QBGAhBGAlIACACIABAAIACACQC0BgCqB+QC4CIB7BvQAAABABACIACAAQCdCPA0BnQBcCzgPL2AAYvYQI7A4GOBFIACAAQEcAxDGA5QAnAKAnANQAEABAFACQAGACAFABQCtA4CkBOQAEANAHANEgr8ADSQBUhUBuhHQFIjXIth0QACAAADAAQAPgDAQgEQJEh1KBAiQAIAAAIAAQGUAXGpBQIDMAqQGFBUFSB1QGJCHFBC0QApAXAoAYQALAHALAGQDqCNDCCjQBDA5A7A7QA7A4AxA5IACAAQB5CHBICIQC/FeiNFXQjtJJweDbQwfDbzkkTQzlkSrPpgQrMpgDvpJQBEitCPiOQg2hsC9ncQBlj/DoiYQDOiGE1g5QFFg9GrgGQCwgCDGAHQATAAAUAAQBGADCgAKQC3ALCXAPAcrafQitDhqLAjQhqAGhsAAIgsAAQliACl/hDIhagQQiagbidglQrpixmWkaQmSkdCujfQCvjiKJgiQBogHBrACIAsAAQFQgDFsA+IBjAQQCpAdCtApQH0B0FaCpQCqBRCEBcQAmAaAiAcQE9D7ieDLgAhhvjQAUACATABQAcAEAdADQAIAAAIAB");
	this.shape_1.setTransform(308.3712,275.2857);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A36C0C").s().p("AgSJvIhbgQQiagaidgmQrpiwmWkbQmSkbCujgQCvjhKJgjQBogGBrABIAsAAQFQgDFtA+IBiARQCpAdCtApQH0B0FaCoQCqBSCEBbQAmAaAiAcQE9D7ieDKQitDiqLAiQhqAHhsAAIgsAAIgPAAQlcAAl1hCg");
	this.shape_2.setTransform(311.8757,402.5126);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("EAqBAOuQgwg5g8g4Qg7g7hDg5QjCijjpiNII4l0IBxN1IgSAUgAeEFdQlBi0mJiIILYnAIBDMrQgogYgpgXgEgmCgLXIJnH2IgEADQotB0lIDXgAHjinIjLgqQmqhQmUgXIFkpbIAHgaIAnADIA5AHIgBAXIHWKUIIFn8IE7MVQlSh0mFhUgAyPuqIJZJyQqAgipFB1g");
	this.shape_3.setTransform(317.35,269.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336633").s().p("EAqDAM8IASgTIhxt1Io5F0IgWgNIhDsrIrYHBIk7sXIoGH8InVqUIAbgVQI6A4GOBEIgIAxIAKgxQEcAxDGA5QAnAKAnANIAJADIFnCkQgHgNgEgNQBGAgBGAmIACACIABAAIACABQC0BhCqB9QC4CIB7BvIABADIgdAcIAfgcQCdCPA0BnQBcC0gPL2IgdAUQhIiIh5iIgEgrPgGyQBlj/DoiXIkSNEQhuBHhUBTQg2hsC9ncgA8blTIpnn1QDOiGE1g6QFFg8GrgHQCwgBDGAGIAnAAIDmANQC3AMCXAPIgEAaIlkJbIgQAAIpZpyIpsLFIgfAGg");
	this.shape_4.setTransform(317.3569,281.2109);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C48C25").s().p("EgI+AooQzlkSrPpgQrMpgDvpJQBEitCPiOQBUhUBuhHQFIjXIth0IAFAAIAfgHQJEh1KBAiIAQAAQGUAXGpBQIDMAqQGFBUFSB1QGJCHFBC0QApAXAoAYIAWANQDqCNDCCjQBDA5A7A7QA7A4AxA5IACAAQB5CHBICIQC/FeiNFXQjtJJweDbQnUBhn7AAQp8AAq4iZgAusJNQqJAiivDiQiuDfGSEdQGWEaLpCxQCdAlCaAbIBaAQQF/BDFigCIAsAAQBsAABqgGQKLgjCtjhQCejLk9j7QgigcgmgaQiEhciqhRQlaipn0h0QitgpipgdIhjgQQlsg+lQADIgsAAIgogBQhWAAhVAGgEAgwAFwIAVgNIgVANIgBgagA6xkJIAQgSIgQASIgPgLIAPALgAnSlkIAGgKIgGAKIgKgKIAKAKgAYcrXIALADQCtA4CkBOQAEANAHANgAYnrUIgLgDIgJgDQgngNgngKQjGg5kcgxIgCAAQmOhFo7g4IgJAAQgIgBgIAAIg5gHIgngDIgHAaIAEgaQiXgPi3gLIjmgNIgnAAIlrgUQFMn3D4mdQD3mfHhjjQHgjlHkCTIBEATQDsArC1DtQC0DrhqH2QhsH0D/I4QikhOitg4g");
	this.shape_5.setTransform(308.3712,275.2857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hat, new cjs.Rectangle(-2.5,-2.5,621.8,555.6), null);


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


// stage content:
(lib.PracticeCardAValle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,10,29];
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
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(19).call(this.frame_29).wait(1));

	// Label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3BRQgfgeAAguQAAgyAegfQAbgbAhgBQAgABAUARQAeAbAAA9Ih7AAQAAAzANAXQAMAXAYAAQAbAAATgRQAZgXAAglIAEAAQAAAlgXAXQgXAWgmAAQgfAAgbgXgAgZhLQgMAXAAAwIBTAAQAAgtgJgZQgIgYgTAAQgZAAgKAXg");
	this.shape.setTransform(576.55,517.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABCBnIAAgFIARgBQAHAAAHgEQADgDAAgLIAAh4QAAgXgEgMQgHgUgQAAQgQAAgMAQQgMASgHAuIAABfQAAAKABADIAFADIAMACIARABIAAAFIhyAAIAAgFQATAAAJgDIAEgCQADgCAAgMIAAh4QAAgYgEgLQgGgUgRAAQgVAAgNAbQgHATgFAkIAABdQgBAKACADIAEADQAEABAKABIAPABIAAAFIh6AAIAAgFIAVgBQALgBAHgDQAEgCAAgMIAAiQIgBgJQAAgEgCgDQgEgFgCgBQgHgCgaAAIAAgFIBXgIIAAA+QADgXAHgNQAKgXAWgCIAIgBIAGAAQAfAAAPASQAOAPAAAaQAEgWAHgNQAMgVAWgCIAHAAIAGgBQAdAAATASQAOAQAAAVIAAB+QAAAJABADQACACAEACQADABAJABIAQABIAAAFg");
	this.shape_1.setTransform(549.05,517.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAHCdIAAgFIAZgBQAIAAAAgHQAAgCgEgIIgshaIgZAaIAAA/QAAAKACADQAAABAEACQAEABAJABIAOABIAAAFIh7AAIAAgFQAcAAALgDIADgCQADgCAAgMIAAj/QAAgKgDgEQgDgEgCAAQgIgDgdAAIAAgEIBagJIAADZIA8g8QAOgNAAgLQAAgJgKgFQgKgFgVAAIAAgFIBuAAIAAAFQgSAAgLAFQgKAFgSARIgdAcIA9B6QAFALAIADQAIADASAAIAAAFg");
	this.shape_2.setTransform(506.475,511.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1BQQghgeAAguQABgxAggfQAcgbAegBQAVAAASAIQAaALAHAXQACAIAAAGQAAAQgOAIQgGAEgHgBQgJABgGgHQgIgHAAgKQABgKAGgHQAHgGALgBQgDgPgLgIQgLgIgSAAQgaAAgKAYQgKAYAAAzQAAAwAMAZQAOAZAWAAQAbAAASgSQAYgXAAgsIAEAAQABAqgWAaQgXAXgnAAQgdAAgbgYg");
	this.shape_3.setTransform(483.95,517.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhFCdIAAgFIAZgBQALgBAIgDQADgCAAgMIAAiUQAAgJgCgCQgDgFgDgBQgJgCgeAAIAAgFIBbgIIAAC0QAAAKACADIAEADQAKADAgAAIAAAFgAgVhuQgIgHAAgMQAAgLAIgIQAHgIAMAAQALAAAHAIQAIAIAAALQAAAMgIAHQgHAIgLAAQgMAAgHgIg");
	this.shape_4.setTransform(466.725,511.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhFCdIAAgFIAZgBQALgBAIgDQADgCAAgMIAAj/QAAgKgDgDQgDgEgCgBQgJgDgeAAIAAgEIBbgJIAAEhQAAAKACADIAEADQAKADAgAAIAAAFg");
	this.shape_5.setTransform(451.625,511.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhMB+QgugqgBhNQAAhKAwgwQApgqAtAAQAXAAARAJQAWAKARAYIAZgtIACAAIAACLIgFgCQAAg+giglQgdgggeAAQgpAAgTAnQgSAmAABNQAABMAUAoQATAnAoAAQAuAAAYgbQAdggAAhGIAFAAQAABGgbAfQgbAggyAAQg4AAgogig");
	this.shape_6.setTransform(430.95,511.725);

	this.btn_hat = new lib.Hat();
	this.btn_hat.name = "btn_hat";
	this.btn_hat.setTransform(199.05,110.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("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");
	this.shape_7.setTransform(519.0093,406.1052);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(7,1,1).p("Ax8IXQhxj0AAkjQAAj8BWjZAo+xsQEIiLFAAAQCSAACGAdQEoA/DvDLQArAlAqApQCOCOBYCmAH0SbIBVg4QBmhGBbhHQEjjiA9iSQBgisAkjEAH0SbQjiBdkIAAQjhAAjGhEQgpgPgogR");
	this.shape_8.setTransform(501.5,350.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AIfHpIguhZQgxhygOhzQgslwFIj/QgJgXDqBUQAZAIAeALQARAHASAFQA2AWA6AUQDxBcEyB7QGWChHqDDI30C8IiuAUgAOlMpQAPAuAuBPQAtBPBgCWQBgCWCKFKQB2EdBEGNQAHAqAHArQADAUADAUQgNgHgNgGQglgUgjgUQrumhmppaIAAAAEAQugjKQAUiagIgnQgBgDgBgDIgKAOIh2CXIhXBwIhDBWIsZP3AL7q1QA0jrBJljQAThXAQhPQAUhlAThcQABgFABgFQAEgVAEgUQAVhuASheQAVhxAPhZQAOhVAJhBAvkBEQB1hYCAigQD+lAAyljQgEACkihIQgPgFgQgDQgMgDgOgEQjyg8mahnQwWkGhbAAIBAA5IBzBnIQLOngAxWEKIB1AIQCOATB8A4QGKCxA4HjQAfAFkYDiQhEA3hMA7QgLAJgLAIQjjCykmDdQl2EanbDmQgTAIgRAKQgOAFgOAHQgKAFgLAFIAGgMIMb4og");
	this.shape_9.setTransform(521.3,330.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF3399").s().p("EAbSAxpQgWhVgKjmQgNjniskQIA9gpQArBEA/BFQAoAsAgAsQgUD1CGCNQgHAkgNAjQhIDFgdAAQgKAAgFgUgAVjelQAUh0BXhZIAYgYQAOgMALgHQAIAQAUAXIADAEQgCAQgGAYQgKArgXBCQhEDJCCDTIg/AmQiokKAXiAgAH6lxQgxhxgOh0QgslxFIj/QgJgWDqBTIA3ATQARAHASAGIBwAqQDxBbEyB7IOAFlI30C8IiuAVIlbAbgEgn/gMJQgWgfgPghQBdirhUjnQAUgzAcg1QArhTAXhMIBGAYQhgEzAwDiQAwDiABBWQABAYgMAAQgeAAh0ikgEgmngXoQBIjth3iyQg6hXgUgtIACgGQAOgbADgRQALAEASAJIAiASIBzBoQAVAeAQAiQA4B1hfEugAXM96QgegZgXgbQAti9iMjKQAGg2ANg7QAUhbADhPIAAgDIABgEQAHj4igiMQhQhFgegnIABgGQAGgegBgRQAMAAATAFQCPAdBVBnQBUBigOE8IAAAJQgNFCBpDNQBpDOAXBTQAIAagQAAQgiAAiRh4g");
	this.shape_10.setTransform(520.375,407.2307);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF66").s().p("EAbQAvDQgSgQgQgRQiGiNAUj1QAFhBAQhHQAVhcADhQIBJAFQgNFBBoDOQBoDOAYBSQAJAbgRAAQgiAAiTh4gEgtFAuiQAYhUBpjNQBpjOgOlCIBKgEQADBQAUBbQBUF6jUCxQiRB5gjAAQgQAAAHgagEAZpAjnQAIj5iiiNQgzgrgeggIgEgFIgIgIQAIhDgnAYQgLgVAMgFIADgBQAJgEAQACIARADIAFABIAMADIAHABQCBAiBQBeQAVAYAPAlQAtBzgJDwgEgppAhnQgMk6BUhkQBVhlCOgeQAagGAOACQh0BBg1BwQgOAcgEAoQhTB7AFC1gAVqa0IhIgoQrumhmppaIBVg4QBmhGBbhHQEjjiA+iSQAPAuAuBQQAtBOBgCWQBgCWCKFKQB2EdBEGNIAOBVIAGAoIgagNgEgkAAY2IMb4pIDsnTIB1AIQCOATB8A4QGKCyA4HhQAfAGkYDhQhEA3hMA7IgWARQjjCykmDdQl2EanbDmIgkASIgDgBIgCAAIAAAAIgCAAQgLABgTAIIAAAAIgGADIAGgDIAAAAQATgIALgBIACAAIAAAAIACAAIADABIgbAMIgWAKgEgjVAYrIAAAAgEAsHANRQgegZgXgbQAti+iMjKQAGg1ANg7QAUhbADhQIBJAFQgNFCBpDNQBpDOAXBTQAIAagQAAQgiAAiRh4gEAqeAB0QAHj3ihiMQhPhGgegmIABgGQAGgegBgRQAMAAATAFQCOAdBVBmQBVBjgOE7gEguHgJjQABhWAwjjQAwjhhhk0IgCgIQhIjkAPh7QAFgoANgdQA2hwB0hAIAHgFIAKgFIAFgDQAbgNANABIACABQANACgEAXQgtgOAaBAIgFAKQgWAogoA7Qh4CxBJDuQAAABAAAAQAAABAAAAQAAABAAABQABAAAAABIABABQAXBNAqBSQAjBCAVA9QBUDnhdCrQgLAUgPAUQh0CkgfAAQgLAAABgXgAK354QABhXAwjiQAUhdgEhsIAnjAIACgKIAgAGQCyFYifDiQhzCjgfAAQgMAAABgXgEAKPgtyQA4h4CBhBQAYgNAPgCQg7A5gfBFIhXBvg");
	this.shape_11.setTransform(537.5523,402.3165);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CCFF").s().p("Ege+AtsQAChWAvjhQAwjjhhkzIBGgXQAYBNArBTQAiBBAWA9QBSDnhcCrQgLAUgPAUQh0CkgeAAQgMAAABgYgEAokArAQj8h0gQmDQgEhdgThPIBHgUIACAGQBGE6CaCsQCbCrAtBKQARAdgbAAQgrAAiZhHgEAhnAcHQgPgmgVgYQhQheiBghQANgGAagBQCSgIBsBNQBrBKBFEyIhHATQgqivhvhhgA/4a4QAEgoAOgcQA1hxB0hBIAGgDIALgGIAFgDIgGAMIAWgKIAbgNQANADgFAWQgtgNAbA/IgGAKQgWAogoA7Qh3CxBIDvIhHAUQhHjlAPh6gEghGAfrIAAACIhKAFgEAp3AOiQABhWAwjjQAxjhhhk0IBFgYIABABQAXBNAsBSQCyFYifDiQhzCjgfAAQgMAAABgXgEApPgFWQA4h4CBhCQAYgNAOgBQhfBcgXB7QgFAfAGAnQgxCMA0CsIhHATQhdkrA3h1gAwnxfIwLumQgtg9hGgqIhAg5QBcAAQVEGIKMCjIAaAHIAfAIQEiBIAEgCQgxFjj/FAQiACfh1BZgEgtcgMtQAYhTBpjPQBpjNgNlCIBJgEQACBQAVBbQBUF7jVCwQiRB5giAAQgQAAAHgagEgqAgZpQgMk5BThkQBVhlCPgeQAagGAOACQh0BAg2BxQgNAdgFAoQhTB6AGC0gAZC8fQgUhUgNjmQgMjniukQIgCgFIgCgCQggg0gaguQAVhxAPhZQADCBBSCFQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABIABABQArBFA+BEQAzA2AkA1QCMDKgtC9QgFAWgKAYQhIDFgdAAQgJAAgFgVgEgilghsQBGAqAtA9gEgilghsIAAAAg");
	this.shape_12.setTransform(490.2536,415.0702);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF66CC").s().p("Egm0AubQgWgfgQghQBdirhTjnQAUgzAbg1QArhTAYhMIBGAXQhhE0AwDiQAxDhABBXQAAAYgLAAQgfAAhzikgEglcAi8QBHjth2ixQg7hYgTgtIACgFQAOgcADgRQAMAEARAJQCCBBA4B5QA4B1hfEugEgnZAaZQgag/AtANQgDARgOAcIgCAFIAAAAgEAlWAQeQgUhUgNjmQgMjoitkPIgDgFIgCgCQh/jKgSh6QgGgnAGgfQAWh7BghcIAFgGIAJgIIAEgEQAXgTAMgDIADAAQANAAACAXQgvgCAqA2IgEALQgKAtgXBDQhGDKCEDSIABAEIACABQAqBFA/BEQAyA3AlA1QCMDKgtC9QgGAWgJAXQhJDFgdABQgKAAgEgVgAmW7cIMXv3IBDhWIBXhwIB2iXQAGgFAHgDQAIAngVCaIAAABQgXBFAABGIAAALIAAgLQAAhGAXhFQgJBBgOBVQgPBZgVBxIgmDMIgIApIgDAKIgnDBIgiCmQhKFigzDsQlTkgmihagEAKcgw+IACAGQgHADgGAFgEAKegw4IAAAAg");
	this.shape_13.setTransform(562.5312,398.7753);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF3333").s().p("AmdS0QgpgPgogRIAVgSQBNg6BEg3QEYjigfgFQg4njmKixQh8g4iOgUIh2gIIjrHUQhxjzAAkjQAAj8BWjZIF5FSQB1hYCAifQD+lBAyljQgEACkihIIgfgIQEIiLFAAAQCSAACGAdQEoA+DvDLQArAlAqApQCOCPBYCmQjphUAJAXQlID/AsFxQAOByAxByIAtBZIFcgcICugUQgkDDhgCtQg9CSkjDhQhbBIhmBGIhVA4IgBAAQjhBdkIAAQjhAAjGhEg");
	this.shape_14.setTransform(501.5,350.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgvF1QgTgSAAgcQAAgcATgTQASgTAdAAQAbAAASATQATATAAAcQAAAcgTASQgSATgbAAQgdAAgSgTgAgHDKQgBiXgRhaIgpjUQAAgwAUgoQAUgqAagKQAZAIAVArQAVArAAAsQAAA8gSBAQgpCXAAC0g");
	this.shape_15.setTransform(623.45,423.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AieDAQhRhKAAh3QAAhxBPhKQBHhDBZAAQBbAABEBAQBQBJAAB1QABBxhPBLQhHBFhaAAQhbAAhDhAgAhZi5QgbA6AAB+QgBCBAYA6QAZA7BEAAQBAAAAbg8QAbg7AAh/QgBiBgWg1Qgag9hFAAQg/AAgaA7g");
	this.shape_16.setTransform(588.7,436.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AjPFsQgXgLgHgYQgGgYAAgOQAAgjAhgSQAMgHAPAAQAXAAAQARQARARAAAcQAAAzgvAFQAIAJAKABIARACQAgAAATgYQAVgYAWhCIAlhqIipnJIgMgfQgIgNgiAAIgbAAIAAgMIEMAAIAAAMIg1ABQgbABAAAOIAHAYIBvEtIBOjmQAPgpAAgWQAAgwhPAAIAAgMIDFAAIAAAMQgtAAgZAXQgZAVgeBXIifHVQgZBIgVAcQgYAhgoAAQgxAAgXgJg");
	this.shape_17.setTransform(537.35,448.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABLDuQgdgVgJgyQgZA5gwAUQgeAMgxAAQgxAAglgYQgygfAAhBQAAhAAxgrQAxgpBGgGQBHgGAXgNQAZgNAAgsIAAhFQAAgugPgRQgPgQgxAAQgpAAgfAPQgeAQgKAaQAFgCAHAAQAXAAANASQAPARAAAXQAAAagSAQQgRARgYAAQgPAAgMgIQgigXAAgiQAAgRAHgUQAQguBCgVQAvgQAwAAQBWAAAsAhQAoAeAAAsIAAECQAABHADAQQAIAoAjAAQAeAAALggQAKggAAg7IAAghIgBgiIAAgLIANAAIAAA0IABAvQAABEgQAXQgVAehBAAQgyAAgZgSgAgIgQIg2AHQghAIgUAdQgYAjAABAQAABEAOAYQANAYAdAAQAtAAAkglQAjglAAg1IAAibQgPATgaAEg");
	this.shape_18.setTransform(484.225,436.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAtF7IAAgNQAqAAAkgDQAkgEANgFQAOgGACgEQAFgJAAgjIgCp8QAAgVgEAAQgFAAgGASIjVLOIgaAAIj9rPIgKgSQgDAAAAAUIAAHrQAACCAiApQAjAqBgAAIAAANIlMAAIAAgNQBSAAAigqQAigrAAhkIAAlqQAAhngfgoQgggphXAAIAAgNIEzABIDFIiICkoiIFFAAIAAAMQhsAAghAOQgMAFgDAEQgFALAAAgIAAJXQAAAkAEAIQADAEAOAGQAPAFAkAEQAlADA0AAIAAANg");
	this.shape_19.setTransform(406.375,423.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AiHDEQhNhGAAhyQAAh6BLhOQBChDBRAAQBMAAAzAtQBKBCAACUIktAAQAAB9AeA5QAdA4A9AAQBAAAAxgsQA8g0AAhbIAKAAQAABYg4A4Qg4A5heAAQhOAAhAg8gAhAi5QgaA4AAB3IDJAAQAAhxgUg8QgUg7guAAQg/AAgaA5g");
	this.shape_20.setTransform(859.025,311.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AA2DeIAAgHIAAAHQgCA1gbAvQgjBChAAAQhUAAg4hBQg8hHABh7QAAhTA3hNQBAhcBjAAQA0ABAeA6QAVApAGAxIAAlLQAAgXgHgKQgIgJgMgDQgdgFhlgBIAAgLIELgUIAAK3QAAAXAEAIQACAEAIADQAZAIBIAAIAAAMIjdAWgAiBg6QgXA1AACHQAAB+AOAxQASBIA7AAQAngBAfg8QAnhIAAh0QAAh1gbg8Qgag9gvAAQg4AAgVA0g");
	this.shape_21.setTransform(807.55,298.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AieDAQhQhKAAh3QgBhxBPhKQBHhDBZAAQBbAABEBAQBQBJAAB1QABBxhPBLQhHBFhaAAQhbAAhDhAgAhai5QgbA6AAB+QAACBAYA6QAZA7BEAAQBAAAAbg8QAbg7AAh/QgBiBgWg1QgZg9hGAAQg/AAgbA7g");
	this.shape_22.setTransform(722.7,311.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AiEDDQhOhJAAhxQAAh3BQhOQBFhDBKAAQAzAAArASQBCAbAPA4QAGAVAAAPQAAAmgkAUQgMAIgSAAQgVAAgRgQQgSgQAAgaQAAgZAQgQQAQgQAbAAQgFglgcgUQgcgTgqAAQhBAAgZA6QgaA7AAB+QAAB1AhA8QAhA9A2AAQBCAAAtgsQA6g3AAhqIAKAAQAABng1A8Qg3A8heAAQhLAAhCg9g");
	this.shape_23.setTransform(673.475,311.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAED7IAAgMQATAAAZgBQAZgDASgHQAHgGAAgdIAAknQAAg5gJgeQgPgvgpgBQg1ABgiBDQgaAygKBTIAADlQAAAYADAHQACADAKAEQAIAEAXADQAXABASAAIAAAMIktAAIAAgMQAaAAAZgBQAZgDAUgHQAHgGAAgdIAAliIAAgVQgBgLgEgGIgHgMQgMgIhOAAIAAgLIDVgUIAACXQAHgzAXglQAhg3AjgEQAkgEALAAQBKAAAsAtQAkAlAAA0IAAE1QAAAYADAHQACADAKAEQAJAEAZADQAZABAWAAIAAAMg");
	this.shape_24.setTransform(619.225,310.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AiqF/IAAgMQAhAAAcgCQAbgCAVgHQAGgGABgdIAAlqQgBgWgEgGQgJgMgGgCQgVgGhLAAIAAgMIDhgSIAAG4QAAAYAEAHQACAEAJADQAYAIBNAAIAAAMgAg1kNQgSgTgBgcQABgcASgTQASgTAdAAQAbAAASATQAUATAAAcQAAAcgUATQgSASgbAAQgdAAgSgSg");
	this.shape_25.setTransform(568.4,297.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ai6EyQhzhkAAi9QAAi3B0h1QBkhlBxAAQA3AAApAUQA1AaArA6IA7huIAGAAIAAFUIgLgGQAAiXhUhbQhEhMhNAAQhlAAgsBeQgtBeAAC9QAAC6AwBgQAwBfBhAAQBwAAA8hCQBIhNAAirIAKAAQAACqhBBNQhBBOh7AAQiKAAhhhVg");
	this.shape_26.setTransform(517.9,298.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AjPFsQgXgLgHgYQgGgYAAgOQAAgkAhgRQAMgHAPAAQAXAAAQARQARARAAAdQAAAygvAFQAIAJAKABIARABQAgAAAUgXQATgZAXhAIAlhqIionKIgOggQgHgLghgBIgbAAIAAgMIEMAAIAAAMIg2ABQgbABAAAOIAGAXIBwEuIBOjmQAOgpAAgXQABguhPgBIAAgMIDEAAIAAAMQgsAAgZAXQgYAVgfBXIifHVQgZBIgVAcQgZAhgnAAQgwAAgYgJg");
	this.shape_27.setTransform(431.45,323.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AkUF1IAAgMQAhAAAdgCQAbgCAUgHQAHgGAAgcIAApeQAAgXgHgKQgHgKgIgBQgUgHhJAAIAAgLIDhgUIAACoQAHg+AagrQAjg/A8AAQBUAAA4BBQA7BGAAB7QAABVg3BLQhBBdhiAAQg0AAgdg4QgVgmgHgyIAAFBQAAAXADAHQADAEAIADQAZAIBNAAIAAAMgAgFksQgnBHAAB1QAAB0AbA8QAaA+AvgBQA4AAAVg0QAXg0AAiIQAAh8gOgyQgShIg7ABQgngBgfA9g");
	this.shape_28.setTransform(373.95,323.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AkUF1IAAgMQAhAAAdgCQAbgCAUgHQAHgGAAgcIAApeQAAgXgHgKQgHgKgIgBQgVgHhIAAIAAgLIDhgUIAACoQAHg+AagrQAjg/A8AAQBUAAA4BBQA7BGAAB7QAABVg3BLQhBBdhiAAQg0AAgdg4QgVgmgHgyIAAFBQAAAXADAHQADAEAJADQAYAIBNAAIAAAMgAgFksQgnBHAAB1QAAB0AbA8QAaA+AvgBQA4AAAVg0QAXg0AAiIQAAh8gOgyQgShIg7ABQgngBgfA9g");
	this.shape_29.setTransform(316.9,323.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ABLDuQgdgVgJgyQgZA5gwAUQgeAMgxAAQgxAAglgYQgygfAAhBQAAhAAxgrQAxgpBGgGQBHgGAXgNQAZgNAAgsIAAhFQAAgugPgRQgPgQgxAAQgpAAgfAPQgeAQgKAaQAFgCAHAAQAXAAANASQAPARAAAXQAAAagSAQQgRARgYAAQgPAAgMgIQgigXAAgiQAAgRAHgUQAQguBCgVQAvgQAwAAQBWAAAsAhQAoAeAAAsIAAECQAABHADAQQAIAoAjAAQAeAAALggQAKggAAg7IAAghIgBgiIAAgLIANAAIAAA0IABAvQAABEgQAXQgVAehBAAQgyAAgZgSgAgIgQIg2AHQghAIgUAdQgYAjAABAQAABEAOAYQANAYAdAAQAtAAAkglQAjglAAg1IAAibQgPATgaAEg");
	this.shape_30.setTransform(264.225,311.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AALF6IAAgMQBnAAAhgOQAOgEACgFQAFgIAAgjIAAkuIlNAAIAAEuQAAAiAFAJQACAFAOAFQANAGAkADQAkAEAyAAIAAAMInMAAIAAgMQAzAAAkgEQAlgDAOgGQAOgFAEgIQADgHAAghIAApYQABgigFgIQgCgFgOgEQgNgFgogFQgngFgvAAIAAgLIHNAAIAAALQhkAAglAPQgMAEgDAFQgFAKAAAgIAAEWIFNAAIAAkWQAAghgGgJQgDgFgNgEQgMgFgogFQgogFgtAAIAAgLIHNAAIAAALQg1AAghAEQgjADgSAIIgLAEQgIAIAAAnIAAJYQAAAiAEAJQADAFAMAEQAiAOBpAAIAAAMg");
	this.shape_31.setTransform(188.95,298.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgtFSQgVgrAAgtQAAg8ARg/QApiTAAiyIAQAAQAAC1AoCQQATBEAAA4QAAAvgUApQgUApgbAJQgZgJgUgqgAgvkUQgTgSAAgcQAAgdATgSQATgTAcAAQAbAAATATQASASAAAdQAAAcgSASQgTATgbAAQgcAAgTgTg");
	this.shape_32.setTransform(122.8,321.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_hat},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},10).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},10).wait(10));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(890.15,684.65);
	this.next_btn._off = true;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(10).to({_off:false},0).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(544.6,466.8,446.6,268.90000000000003);
// library properties:
lib.properties = {
	id: '07A6C150D8B3499EAD30A43E4070AC68',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#A7E99F",
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
an.compositions['07A6C150D8B3499EAD30A43E4070AC68'] = {
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