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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("EhLrgOyMBK2AntMBMmgntIAAqIUgALAAMhLjgAFQsWAA5gAQQ5BARs3gCQgKJsAKgKg");
	this.shape.setTransform(484.9,159.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("EhLrgOxQgKAJAKprQM3ABZBgRQZggQMWAAUBLjAAFAALgALIAAKIMhMmAnsg");
	this.shape_1.setTransform(484.9,159.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-3,-3,975.8,324.9), null);


(lib.nextbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(20,1,1).p("Az/krMAn/AAAIAAJXMgn/AAAg");
	this.shape.setTransform(128,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Az/EsIAApXMAn+AAAIAAJXg");
	this.shape_1.setTransform(128,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,275.9,80);


(lib.btn_envelope = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("EhMCgqsMCYFAAAMAAABVZMiYFAAAg");
	this.shape.setTransform(484.1,273.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("EhMCAqtMAAAhVZMCYFAAAMAAABVZg");
	this.shape_1.setTransform(484.1,273.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.borderscopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999966").s().p("EhCIBTNMAAAimZMCERAAAMAAACmZg");
	this.shape.setTransform(423.4,532.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.borderscopy, new cjs.Rectangle(0,0,846.7,1065.1), null);


(lib.borders = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999966").s().p("EhCIBTNMAAAimZMCERAAAMAAACmZg");
	this.shape.setTransform(423.4,532.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.borders, new cjs.Rectangle(0,0,846.7,1065.1), null);


// stage content:
(lib.PracticeCardCPuentes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on the current frame
		
		this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		//this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_11 = function() {
		this.stop ()
		
		//this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_30 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(19).call(this.frame_30).wait(1));

	// Buttons
	this.btn_envelope = new lib.btn_envelope();
	this.btn_envelope.name = "btn_envelope";
	this.btn_envelope.parent = this;
	this.btn_envelope.setTransform(515.5,350,1,1,0,0,0,484.5,274.8);
	new cjs.ButtonHelper(this.btn_envelope, 0, 1, 2, false, new lib.btn_envelope(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3366").s().p("AgKCQQgLgGgFgMQgFgLAAgYIAAiWIgjAAIAAgIQANgFAOgNQAOgNALgRIAPgiIAHAAIAABJIA1AAIAAARIg1AAIAACQQAAAWAHAIQAGAHAKAAQAIAAAHgFQAIgFAEgKIAJAAQgIAYgQAMQgPAMgRAAQgLAAgKgGg");
	this.shape.setTransform(566.7,697.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3366").s().p("AANBwIAAgJQALAAAGgFQAFgDAAgGQAAgGgQgWIgfgwIgkAwQgRAWAAAEQAAAGAGAFQAFAEALABIAAAJIhJAAIAAgJQAJgBAGgFQAKgHAWgdIAvg+Igrg9QgSgagKgHQgKgHgPAAIAAgJIBqAAIAAAJQgKAAgEAEQgEADAAAGQAAAFAIANIAIAMIAPAZIASgZQASgYAAgHQAAgFgEgDQgEgEgKAAIAAgJIBMAAIAAAJQgMABgJAGQgMAIgVAcIgeApIA4BPQAUAdAJAGQAJAGAOABIAAAJg");
	this.shape_1.setTransform(547,701.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_2.setTransform(523.6,701.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3366").s().p("AB9CoIjakJIAADKQAAAfAHAHQAJALATAAIAMAAIAAAJIhzAAIAAgJIALAAQAWAAAIgNQAGgIAAgcIAAjlQgPgRgHgFQgHgFgPgFQgHgCgOAAIAAgJIBaAAIDJD3IAAi+QAAgegHgIQgJgKgUAAIgLAAIAAgJIBzAAIAAAJIgLAAQgVAAgJAMQgGAIAAAcIAAEWg");
	this.shape_3.setTransform(493.6,696.1);

	this.btn_Next = new lib.nextbutton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.parent = this;
	this.btn_Next.setTransform(525,695.5,1,1,0,0,0,128,30);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.nextbutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_envelope}]}).to({state:[]},2).to({state:[{t:this.btn_Next},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},8).to({state:[{t:this.btn_Next},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).to({state:[]},1).wait(1));

	// Drawing (Borders)
	this.instance = new lib.borders();
	this.instance.parent = this;
	this.instance.setTransform(-391.5,318.4,1,1,0,0,0,423.4,532.5);

	this.instance_1 = new lib.borderscopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.5,1157.4,2.228,1,0,0,0,423.4,532.5);

	this.instance_2 = new lib.borderscopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(493,-453.3,2.819,1,0,0,0,423.2,532.5);

	this.instance_3 = new lib.borders();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1423.5,395.8,1,1,0,0,0,423.4,532.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},10).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},19).to({state:[]},1).wait(1));

	// Grass
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#33CC00").ss(2,1,1).p("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");
	this.shape_4.setTransform(490.7,462.6);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(16).to({_off:false},0).wait(13).to({_off:true},1).wait(1));

	// Clouds
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AvGEZQjFhDAAhfQAAhfDFhCQDGhDEXAAQBUAABMAGQgCgLAAgLQAAhcCnhBQCmhBDtAAQDsAACnBBQCeA9AKBVQBYABA+A/QA5A5AHBMQCMAuAAA+QAABGizAxQizAxj9AAQixAAiMgYQhfAUh5AAQhjAAhSgOQiTAdi1AAQkXAAjGhDg");
	this.shape_5.setTransform(620.8,172.7);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(18).to({_off:false},0).wait(11).to({_off:true},1).wait(1));

	// Sun Rays
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9900").ss(2,1,1).p("AJ+xYIRUELA7RGdIAAK8AgLCjIJnJo");
	this.shape_6.setTransform(260.4,231.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFCC00").ss(2,1,1).p("At7DMIB1FFAIVoQIFnC/");
	this.shape_7.setTransform(266.7,243.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},20).to({state:[{t:this.shape_6},{t:this.shape_7}]},9).to({state:[]},1).wait(1));

	// House
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1,3,true).p("AN9i1ICEgGAHeCqICAAAIAACAIAACAIiAAAIiAAAIAAiAIAAiAICAAAIAACAIAACAAN9i1I7egGIifAAIQimpIGmC/gAFeEqICAAAICAAAAkVEiIAACAIiAAAAmVCjICAAAIAAB/Ag4C2IDCAAIAIGoIjNAHgAmVCjIAAB/IAACAIh/AAIAAiAIB/AAICAAAAoUEiIAAh/IB/AA");
	this.shape_8.setTransform(920.9,205.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AhjjWIDCAAIAIGmIjNAHgAAagSQgDACgCAEQgCAGAAAGQABAGAGAFQAFAFAHAAQAKAAAHgKQAFgJgFgKIgEgFQgEgDgJgBIAAABIgDAAQgGAAgDADg");
	this.shape_9.setTransform(925.2,245.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AsfDSIifAAIQimoIGmC/IG1Dvg");
	this.shape_10.setTransform(914.3,165.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AG6CEIAAiBIiAAAICAAAIAACBIiAAAIAAiBIAAh+ICAAAICAAAIAAB+IiAAAIAAh+IAAB+ICAAAIAACBgAm5B8IiAAAIAAh/IAAiAICAAAIAACAIiAAAICAAAIAAB/IAAh/ICAAAIAAB/gAI6ADgAk5gDIiAAAIAAiAICAAAIAACAgAm5gDgAm5gDg");
	this.shape_11.setTransform(924.5,234.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#454545").s().p("AgLAOQgGgEgBgHQAAgFACgGQACgEADgCQAEgFAHABIAAgBQAJABAEAEIAEAFQAFAJgFAKQgHAJgKABQgGgBgFgFg");
	this.shape_12.setTransform(929,244.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFCC").s().p("AvjGIIABsXIbeAGICEgGIBcAAIAIMXIvTABIgImmIjCAAIgDGtgADdBVIAACAICAAAICAAAIAAiAIAAh+IiAAAIiAAAgAqVBOIAACAIB/AAICAAAIAAiAIAAh/IiAAAIh/AAg");
	this.shape_13.setTransform(933.8,226.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},22).to({state:[{t:this.shape_13},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_12},{t:this.shape_8}]},7).to({state:[]},1).wait(1));

	// Road
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#999999").ss(20,1,1).p("AF7/TQgEBwhGBDQg6A3hwAhQg0AQigAeQiIAahCAbQhmAqhfBKQiIBpAABjQAACiDsBYQCPA2F2A8QF7A8CMAyQDsBWAACdQAADJkfBMQhxAei2ASQg3AGkbAVQm7Ahi+BKQkfBwAAEFQAADzEnBZQB3AkC4ARQB4ALDiAIQD6AJBhAHQC6AOB1AeQEnBMAADbQAADhkaEJQhqBkjACWQjmCwh7Bh");
	this.shape_14.setTransform(888.8,466.2);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(12).to({_off:false},0).wait(17).to({_off:true},1).wait(1));

	// Hills
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("A0uUuQololAAsJQAAsIIlomQImolMIAAQMJAAIlIlQImImAAMIQAAMJomIlQolImsJAAQsIAAomomg");
	this.shape_15.setTransform(109.3,50.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006600").s().p("Ehx5AnkQn2mbkYpSQi0l/iFpRQD4jeF0jJQIuksMUjlQKyjJLthxQKqhnH8AAQLZAARxAxQRxAwGXAAQHFAAFJhuQElhiDajDQCzigCkkEQA8hfDZmLQCtk7CNi9QDKkPD7i+QJunWRZhhQHBgoIuAMQJjAMISBGQJcBQGACOQG2CiBuDkQFHKrC6QBQCYNLAAKgQAANDm/JdQqWOA4WDuUgjBAFWghnACxUgi2AC2ggmAAAUgu1AAAgUWgQqg");
	this.shape_16.setTransform(566.4,591.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#454545").s().p("AgEATQgHgDgEgGQgEgGACgGQABgIAGgEQAEgDAFAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAGAAAGAFQADADACAFQACAFgCAHQgDAIgGADQgEABgFAAIgEAAg");
	this.shape_17.setTransform(929.5,246.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},10).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},19).to({state:[]},1).wait(1));

	// Fence
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(20,1,1).p("EAvAgIMIAAivEAvAgBSIAAm6IN0AAEAvAgBSINjAAEAvAAEsIAAl+ArgoMIAAivAvqoMIAAivAvqhSIAAm6IEKAAIIjAAIAAivAvqhSIEKAAIAAm6A4loMIAAivA7/oMIAAivA7/hSIAAm6IDaAAII7AAA7/hSIDaAAIAAm6A7/DqIAAk8A4lCBIAAjTII7AAAvqCgIAAjyArgC1IAAkHIIjAAIAAm6IEOAAIAAivEgk+gIMIAAivEgo4gIMIAAivEgo4gBSIAAm6ID6AAII/AAEgo4gBSID6AAIAAm6EgxWgIMIAAivEg6VgIMIFOAAIDxAAIIeAAEg1HgK7IAACvIAAG6IDxAAIAAm6Ego4AGIIAAnaEgk+ADyIAAlEII/AAEgxWgBSIIeAAEgxWAF3IAAnJEg1HgBSIAAMOEAqmgIMIAAivAfqoMIAAivAfqoMIEAAAIAAivAfqhSIEAAAIAAm6IG8AAIEaAAAfqhSIAAm6EAjqgBSIG8AAIAAm6AYGoMIAAivAUUoMIAAivAUUhSIAAm6IDyAAIHkAAAUUhSIDyAAIAAm6AfqG3IAAoJEAjqAGhIAAnzEAqmAExIAAmDIEaAAAUUGZIAAnrAYGINIAApfIHkAAANJoMIAAivAJRoMIAAivAJRhSIAAm6ID4AAIHLAAAJRhSID4AAIAAm6Ai9hSIEOAAIAAm6IIAAAAi9DvIAAlBABREOIAAlgIIAAAAJRFLIAAmdANJFoIAAm6IHLAAEg8zgBSIHsAA");
	this.shape_18.setTransform(374.2,497.5);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(14).to({_off:false},0).wait(15).to({_off:true},1).wait(1));

	// Drawing (Base)
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66FFFF").s().p("EhLsAq8MAAAhV3MCXZAAAMAAABV3g");
	this.shape_19.setTransform(515.5,350);
	this.shape_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(10).to({_off:false},0).wait(19).to({_off:true},1).wait(1));

	// Text
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSClQgIgIAAgMQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAAMgIAIQgIAIgLAAQgKAAgIgIgAgEBOIgVjFIgCgTQAAgPAJgKQAIgJAKAAQAMAAAIAJQAIAKAAASIgBAQIgWDFg");
	this.shape_20.setTransform(710.2,694.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKCQQgLgGgFgMQgFgLAAgYIAAiWIgjAAIAAgIQANgFAOgNQAOgNALgRIAPgiIAHAAIAABJIA1AAIAAARIg1AAIAACQQAAAWAHAIQAGAHAKAAQAIAAAHgFQAIgFAEgKIAJAAQgIAYgQAMQgPAMgRAAQgLAAgKgGg");
	this.shape_21.setTransform(695.2,696.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhQBzIAAgJQARAAAJgFQAGgEACgJIACgXIAAhWIgCguQgCgIgEgDQgEgEgHAAQgHAAgKAEIgCgJIBEgbIAKAAIAAAyQAbgyAdAAQAOAAAJAIQAIAIAAALQAAAJgGAHQgGAGgJAAQgJABgKgJQgLgIgFgBQgEAAgFAGQgLAJgLAXIAABrQAAASAEAKQADAGAIAFQAIAEAPAAIAAAJg");
	this.shape_22.setTransform(680,699.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAeBtQgHgIAAgUQgiAagJAEQgNAGgPAAQgXAAgOgPQgQgQAAgaQABgRAGgMQAKgQAagPQAYgNA5gVIAAgJQAAgigLgMQgLgNgSAAQgQAAgJAJQgJAIAAALIAAAOQAAALgGAGQgGAGgIAAQgKAAgFgGQgGgGAAgLQAAgVAWgSQAVgRAmAAQAeAAATAKQAOAHAGAQQAFALAAAgIAABLIACAnQABAIACACIAHACIAHgBIAUgSIAAAOQgcAkgZAAQgMAAgHgIgAgYAAQgTALgIAMQgJALABAOQAAASAKAMQAKALAOAAQASAAAegYIAAhVg");
	this.shape_23.setTransform(661.2,699.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKCQQgLgGgFgMQgFgLAAgYIAAiWIgjAAIAAgIQANgFAOgNQAOgNALgRIAPgiIAHAAIAABJIA1AAIAAARIg1AAIAACQQAAAWAHAIQAGAHAKAAQAIAAAHgFQAIgFAEgKIAJAAQgIAYgQAMQgPAMgRAAQgLAAgKgGg");
	this.shape_24.setTransform(642.6,696.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgsBvIgOgDQgFAAgDAHIgIAAIAAhQIAIAAQAHAiATASQATARAXAAQARAAALgKQAKgKAAgOQAAgRgMgLQgMgLgigSQgjgQgLgPQgLgOAAgVQAAgbATgTQATgTAeAAQAMABATAFIAQADIAGgBIAFgIIAIAAIAABNIgIAAQgJglgOgNQgPgMgVAAQgSAAgKAJQgLAIAAAMQAAANAIAKQAIAKAXAMIAjARQAxAXAAAoQAAAegXATQgXASgcAAQgUABgagIg");
	this.shape_25.setTransform(626,700);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhSBOQgZgiAAgqQAAgeAPgeQAQgfAZgOQAYgPAbAAQAzAAAfAnQAaAhAAArQAAAcgOAgQgPAegZAQQgZAPgeAAQgzAAgegogAggheQgNAIgIATQgIATAAAeQAAAwATAkQATAjAfAAQAYAAAPgUQAQgTAAgvQAAg7gagjQgRgXgaAAQgNAAgNAIg");
	this.shape_26.setTransform(590.9,700);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgKCQQgLgGgFgMQgFgLAAgYIAAiWIgjAAIAAgIQANgFAOgNQAOgNALgRIAPgiIAHAAIAABJIA1AAIAAARIg1AAIAACQQAAAWAHAIQAGAHAKAAQAIAAAHgFQAIgFAEgKIAJAAQgIAYgQAMQgPAMgRAAQgLAAgKgGg");
	this.shape_27.setTransform(571.8,696.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_28.setTransform(541.2,700);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ah0CpIAAgJIAGAAQANgBAKgEQAEgEADgGQACgFAAgZIAAjSQAAgWgCgGQgCgGgEgDQgEgCgHAAIgPADIgDgIIBFgcIAJAAIAAA1QARgeASgMQAQgMATAAQAiAAAXAaQAbAhAAAzQAAA6ghAmQgbAegqAAQgRABgNgGQgKgDgMgMIAABFQAAAWADAHQADAGAHADQAGAEASABIAAAJgAgIh+QgJAEgUAWIAABUQAAAaACAIQAEAOANALQANALATAAQAZgBAPgSQAUgaAAgrQAAg0gXgcQgPgSgWgBQgMAAgKAHg");
	this.shape_29.setTransform(516.5,705);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhSBOQgZgiAAgqQAAgeAPgeQAQgfAZgOQAYgPAbAAQAzAAAfAnQAaAhAAArQAAAcgOAgQgPAegZAQQgZAPgeAAQgzAAgegogAggheQgNAIgIATQgIATAAAeQAAAwATAkQATAjAfAAQAYAAAPgUQAQgTAAgvQAAg7gagjQgRgXgaAAQgNAAgNAIg");
	this.shape_30.setTransform(492.4,700);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag0CuIAAgJQAQAAAFgEQAGgDADgHQADgIAAgUIAAjKIgBgvQgCgIgEgDQgEgDgGAAQgGgBgKAEIgEgJIBCgbIALAAIAAEoQAAAVADAHQADAGAGAEQAHAEARAAIAAAJg");
	this.shape_31.setTransform(473.2,693.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_32.setTransform(455.2,700);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgBBzIhQi8QgFgNgFgFQgFgGgHgEIgRgEIAAgJIBqAAIAAAJIgHAAQgKAAgFAEQgFAFAAAIQAAAIAFAMIAzB7IA1iAQAFgNAAgHIgCgGIgHgFIgQgBIAAgJIBJAAIAAAJQgNABgFAEQgJAHgGARIhQC/g");
	this.shape_33.setTransform(431.4,700.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAMBzIAAgJIAEAAQAQAAAHgEQAFgGADgJIABgWIAAhbQAAgfgIgOQgIgNgTAAQgcAAgcAfIAAB2QAAAWACAGQAEAGAFAEQAGADATAAIAAAJIhvAAIAAgJIAFAAQARAAAGgJQAGgIAAgYIAAhTQAAgogCgIQgBgKgFgCQgDgEgHAAQgGAAgKAEIgEgJIBEgbIALAAIAAAvQAngvAjAAQARAAAOAJQANAJAIAVQAFAOAAAfIAABfQAAAUAEAJQACAFAHAEQAFADAQAAIAAAJg");
	this.shape_34.setTransform(406.5,699.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_35.setTransform(383.1,700);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_36.setTransform(348.4,700);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAMCuIAAgJIAFAAQAQAAAGgFQAGgFACgJIABgXIAAhPQAAglgEgKQgDgLgJgHQgIgFgMAAQgMAAgLAGQgNAGgTATIAAB2QAAAXADAFQACAGAIAEQAGAEARAAIAAAJIhvAAIAAgJQAPAAAJgFQAFgDADgGQADgHAAgVIAAjJQAAgngCgJQgCgIgEgDQgDgDgHAAIgRADIgDgJIBDgbIALAAIAACkQAbgeAQgIQAPgJAQAAQATAAANALQAPALAGAWQAEAPAAApIAABPQABAVADAIQADAGAFADQAGAEAQAAIAAAJg");
	this.shape_37.setTransform(324.6,693.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKCQQgLgGgFgMQgFgLAAgYIAAiWIgjAAIAAgIQANgFAOgNQAOgNALgRIAPgiIAHAAIAABJIA1AAIAAARIg1AAIAACQQAAAWAHAIQAGAHAKAAQAIAAAHgFQAIgFAEgKIAJAAQgIAYgQAMQgPAMgRAAQgLAAgKgGg");
	this.shape_38.setTransform(305.5,696.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AALBzIAAgJIAFAAQAQAAAGgEQAHgGACgJIABgWIAAhbQAAgfgIgOQgIgNgTAAQgcAAgdAfIAAB2QABAWACAGQADAGAHAEQAGADARAAIAAAJIhuAAIAAgJIAFAAQARAAAGgJQAGgIAAgYIAAhTQAAgogBgIQgDgKgDgCQgEgEgGAAQgIAAgJAEIgDgJIBDgbIAKAAIAAAvQAngvAkAAQASAAANAJQANAJAIAVQAFAOAAAfIAABfQAAAUADAJQADAFAGAEQAGADARAAIAAAJg");
	this.shape_39.setTransform(273.3,699.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhSBOQgZgiAAgqQAAgeAPgeQAQgfAZgOQAYgPAbAAQAzAAAfAnQAaAhAAArQAAAcgOAgQgPAegZAQQgZAPgeAAQgzAAgegogAggheQgNAIgIATQgIATAAAeQAAAwATAkQATAjAfAAQAYAAAPgUQAQgTAAgvQAAg7gagjQgRgXgaAAQgNAAgNAIg");
	this.shape_40.setTransform(248.2,700);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAQCuIAAgJQAJAAADgDQADgCABgFQAAgGgKgMIhDhYIA3gzIAVgVIACgGQAAgFgEgDQgEgEgJAAIAAgIIBhAAIAAAIQgUAAgNAGQgOAFgPAPIg5A0IA5BJIAfAmQAMALAJADQAGADAQAAIAAAJgAh8CuIAAgJQARgBAJgEQAFgCADgGQAEgIAAgUIAAjKIgCgwQgBgIgEgDQgFgEgGAAIgPAEIgFgJIBDgbIAMAAIAADeIAABKQAAAWACAHQADAGAGADQAFAEAUAAIAAAJgAgtAxg");
	this.shape_41.setTransform(211.1,693.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhBBXQgcghAAg2QAAg0AfghQAgggArgBQAgAAAWASQAVARAAATQAAAJgGAGQgGAGgLgBQgOAAgHgJQgFgEgBgPQgBgOgJgIQgIgHgQAAQgXAAgPASQgUAXAAAoQAAAnAUAfQAUAeAgAAQAYAAATgQQAOgMAMgdIAHADQgJAsgaAZQgaAYgggBQgmAAgcgfg");
	this.shape_42.setTransform(187.2,700);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgzCuIAAgJQAQAAAFgEQAGgDADgHQADgIABgUIAAhWQgBglgCgKQgBgHgEgDQgDgEgHABQgGAAgKADIgEgJIBDgbIAKAAIAACzQAAAVADAHQAEAHAFADQAHAEAPAAIAAAJgAgOiCQgIgIAAgKQAAgKAIgHQAHgIAJAAQAKAAAIAIQAGAHABAKQgBAKgGAIQgIAHgKAAQgJAAgHgHg");
	this.shape_43.setTransform(169.3,693.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag0CuIAAgJQAQAAAFgEQAGgDADgHQADgIAAgUIAAjKIgBgvQgCgIgEgDQgEgDgGAAQgGgBgKAEIgEgJIBCgbIALAAIAAEoQAAAVADAHQADAGAGAEQAHAEARAAIAAAJg");
	this.shape_44.setTransform(155.6,693.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhyBwQgigtAAg+QAAgwAXgqQAWgpAngXQAngXAsAAQAkAAAjARQALAGAEAAQAHAAAFgFQAGgHADgLIAIAAIAIBxIgIAAQgPgzgcgXQgdgVgmgBQghABgaARQgbAQgPAlQgPAkAAA2QAAAsAOAiQAPAgAcASQAeARAjAAQAhAAAZgNQAYgOAegpIAHAFQgZAsghAUQghAVguAAQhRAAgtg9g");
	this.shape_45.setTransform(131.8,694.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).to({state:[]},10).wait(21));

	// Envelope (Flap)
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(515.4,234.7,1,1,0,0,0,484.9,159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleY:0.78,y:199.9},0).wait(1).to({scaleY:0.56,y:165.1},0).wait(1).to({scaleY:0.33,y:130.3},0).wait(1).to({scaleY:0.11,y:95.6},0).wait(1).to({skewX:180,y:60.8},0).wait(1).to({scaleY:0.33,y:26},0).wait(1).to({scaleY:0.56,y:-8.8},0).wait(1).to({scaleY:0.78,y:-43.6},0).wait(1).to({scaleY:1,y:-78.4},0).to({_off:true},1).wait(21));

	// Envelope (Inside)
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(6,1,1).p("EhLrgOyMBK2AntMBMmgntIAAqIUgALAAMhLjgAFQsWAA5gAQQ5BARs3gCQgKJsAKgKg");
	this.shape_46.setTransform(515.4,234.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3366FF").s().p("EhLrgOxQgKAJAKprQM3ABZBgRQZggQMWAAUBLjAAFAALgALIAAKIMhMmAnsg");
	this.shape_47.setTransform(515.4,234.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46}]}).to({state:[]},10).to({state:[]},1).wait(20));

	// Envelope (Lines)
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(6,1,1).p("EgmRgX9MBMjAv7");
	this.shape_48.setTransform(755,471.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(6,1,1).p("EglaAX+MBK1gv7");
	this.shape_49.setTransform(270.5,471.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48}]}).to({state:[]},10).to({state:[]},1).wait(20));

	// Envelope (Base)
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(6,1,1).p("EhLsgq7MCXZAAAMAAABV3MiXZAAAg");
	this.shape_50.setTransform(515.5,350);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0099FF").s().p("EhLsAq8MAAAhV3MCXZAAAMAAABV3g");
	this.shape_51.setTransform(515.5,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50}]}).to({state:[]},10).to({state:[]},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(537.4,456.1,979.4,651.9);
// library properties:
lib.properties = {
	id: 'E372B525C72BFF42B4F2A2F217FF99CA',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#CCCC99",
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
an.compositions['E372B525C72BFF42B4F2A2F217FF99CA'] = {
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