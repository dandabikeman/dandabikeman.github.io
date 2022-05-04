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
(lib.PracticeCardVUlloa = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#336600").s().p("AhIAsIlrjMIEwhRICkBfIBpinIEqhRIjRFmIBdFeIksBRg");
	this.shape.setTransform(969.5,136.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AmtlGIE7hUQCOgnBhAsQBsAyAeBwQAfBzhZBsIDhERIkBBEIi4jTIgzjCIATgFQBMgVgQg9QgPg1hYAYIgsALICUIoIj1BCg");
	this.shape_1.setTransform(727.85,257.6017);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AiPhdIkOBIIg/juIN6jvIA/DvIkNBIICgJQIlgBeg");
	this.shape_2.setTransform(859.9,205.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#336600").s().p("AgJFeIB4nDQALgqgIgUQgIgUgggIQg+gRgTBLIgYBaIBLAVIgyC9IhMgVIguCsIkJhHIB7nKQAkiFBugxQBtgyChArQCdAqA5BXQA5BXgmCLIh9HSg");
	this.shape_3.setTransform(250.994,240.8131);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AmgExIB8nPQAThHAfgpQAegqA3gcQA9gfBRgGQBQgFBPAVQCOAmBNBmQBMBmgfBxQgdBthpAsQhgAqiggrIgqgMIAzjCQBUAWAOgzQANgvhAgRQhBgRgQBAIiDHlg");
	this.shape_4.setTransform(116.7617,175.4929);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AACCvIAAjkQgWASgWALQgXALggAKIAAhPQAwgPAbgWQAbgWAPghIBPAAIAAFdg");
	this.shape_5.setTransform(205.3,798.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBDAAQA0AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgLIBeAIQgWAlgeARQgeAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgMQgMgLgUgBQgVABgOARg");
	this.shape_6.setTransform(159.65,803.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgLAOQgKANgBAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAWAXQAXAYAAAxIAACdg");
	this.shape_7.setTransform(127.6,802.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AlgkQAlgkBDAAQA0AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAJALQAOAQAVAAQAOAAANgHQAIgEAJgLIBeAIQgWAlgeARQgfAQg4AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_8.setTransform(95.65,803.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_9.setTransform(63.675,803.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah1CQQghgigFg0IBlgGQADAYALANQAQAVAdAAQAXAAANgKQALgLAAgOQAAgOgLgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAPgYAfgNQAggOA0AAQBCAAAjAZQAiAYAHA2IhlAGQgEgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAHAHAcAGQBFAPAeAPQAfAPANAWQAOAXAAAcQAAAhgSAcQgTAcghAOQggAPgyAAQhXAAgigig");
	this.shape_10.setTransform(30.15,798.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3,1,1).p("EhP4gNgQesVieJFYAUUNhQeElSdh1v");
	this.shape_11.setTransform(512.425,152.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4,1,1).p("EAnyALdIFnAAQHvG8iOH3gEAm5AZyIGgJcEAm5AZyIqpuVILiAAAXzaZIJILhQnyBdnkA2IgBAAQorA8obAKIgBAAQn7AHntgmQn/gnnuhZII2tqIG3PqII1uvIroteQIlAxIZAEEAy6AaQQhPEWkSEoQmTBjmLBJIF+sIAWYovQDrMLCNIBEAPAghkQCCDNBHElQBEEbA0DTQB5HwAeBlEgN7ghXQFEoaKDAgQJRAdEjHQA19phQAahXCNnTQBFjkBglAQBJjzBti1QPCISN5ofEgzTAVOQAmlGEckrIJdMMIF7PLEguRAjOIC4jgIGloFEguRALdIN6AAIEJAAQFKAtFGAdEguRAjOQlznXAxmpEgrZAfuIn6qgEge4Am0IgBAAQn0hankiMAJ6asIq6tQQHsAEHhgiQHHggG8hBAmWaFIGzPOAJ6asIHqNhEAAeApTIJcunA2CZKIqVttA8OLdQCUoRD9stQVnK1WuqDAXzaZIpmtbEARlAoNIGOt0");
	this.shape_12.setTransform(514.3107,355.137);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("EgIgAk8II0uuIG1PNIieACQmqAAmhghgAefWhIJILiQnyBdnlA1gEgnmAfWIC5jgIGloEIF7PLQn0hanliNgAvStYICooqICkokQBKj0Bsi0QPDIRN5ofQCBDOBIElIB3HuQB5HwAfBlQq8E2qsAAQrgAArOlog");
	this.shape_13.setTransform(471.55,379.8544);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("ACqatIHqNgQorA9oaAJgEgmIAm1II2tqIG3PpQn/gnnuhYgAfpZyIGgJcQmTBjmLBKgEgVLghWQFEobKEAhQJQAdEjHPQnCETnUAAQnKAAnbkFg");
	this.shape_14.setTransform(560.725,355.0825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9B55").s().p("AAdZaImzvNIroteQIlAxIZAFQoZgFolgxILoNeIo1OuIm3vpIqVttIEJAAQFKAuFGAcQlGgclKguQCUoQD9suQVnK1WuqDQDrMMCNIAIKpOUIl+MJIpIriIpmtZQHHggG8hCQm8BCnHAgIJmNZImON0IgBAAInqtgIq6tPIASAAIBKAAIAAAAIABAAQGkAAGdgbIALgBIAGAAIAOgBIAEAAIAMgBIgMABIgEAAIgOABIgGAAIgLABQmdAbmkAAIgBAAIAAAAIhKAAIgSAAIK6NPIpcOmgA+5W8Il7vLIpdsMIN6AAIKVNtIo2NqgEAm5AJ5IqpuUILiAAIFnAAQHvG7iOH3IrIuyILIOyQhPEWkSEogEgzTAFWQAmlGEckrIJdMMImlIEIn6qfIH6KfIi4DgQlznXAxmogAONi5gEguRgEbg");
	this.shape_15.setTransform(514.3107,456.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_16.setTransform(609.075,316.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgMQgMgLgTgBQgWABgOARg");
	this.shape_17.setTransform(561.6,321.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_18.setTransform(529.55,320.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_19.setTransform(497.6,321.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_20.setTransform(432.1,316.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("Ak2FIQiBiJAAi/QAAjECBiFQCBiGC9AAQCyAACACIQB+CIAAC/QAADAiACIQiCCIi1AAQi2AAiBiIgAhVheQgkAnAAA3QAAA3AlAoQAjAnAxAAQAyAAAkgnQAjgoAAg3QAAg3gjgnQgjgngzAAQgyAAgjAng");
	this.shape_21.setTransform(805.7,554.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("Aj+JwIAAkjQA/AdAwAAQCYAAAti4QhRA0hPAAQh1AAhLhcQhMhdAAiOIAAoxIE6AAIAAHfQAABQA9AAQA8AAAAhYIAAnXIE6AAIAAMbQAADfh2CJQiMCijGAAQhXAAhWgjg");
	this.shape_22.setTransform(710.975,575.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("Ak2FMQh+iFAAjHQAAjBCAiHQB+iHC2gBQDLAAB1CAQB1B+AADaIAAG1Ik6AAIAAmdQAAhGgggpQghgqg2gBQgxAAgkAnQgkAnAAAzQAAA3AhAlQAgAjAzAAQAoAAAjgXIAAFaQgmAIgggBQi8AAh+iEg");
	this.shape_23.setTransform(612.675,554.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AEKJyIAAsaQAAg7gJgSQgJgUgbAAQgzAAAABbIAAMgIlTAAIAAsaQAAg6gKgTQgJgUgbAAQgyAAABBhIAAMaIlVAAIAAtvQAAikBchoQBehoCVAAQCwAABeCtQA5hdBDgnQBCgpBhAAQCbAABSBoQBSBoAADDIAANQg");
	this.shape_24.setTransform(494.6,536.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("Ak1FLQh+iFAAjFQAAjDCAiHQCAiHC5AAQC2AAB8CFQB8CDAADBQAAATgEArInaAAQgMgnAAgfQAAgsAQgrICfAAQgRhkhZAAQg5AAgmA2QgkA1AABTQAABWAkA1QAjA2A5AAQAvAAAsgyICzDlQh+BpiYAAQi6AAh/iGg");
	this.shape_25.setTransform(334.7,554.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AiYJiIAAlmIA2AAQEpAAAAkJQABj5kkgBIhzAAIAANmIlVAAIAAzEIG8AAQEjAAClCOQDFCoAAEiQAAEVioCvQioCvkHAAQggAAhGgEg");
	this.shape_26.setTransform(227.05,538);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF3300").s().p("Ak2KAIAAkqQBOAdA6AAQC5AAA3i8QhkA1hgAAQiNAAhchfQhchfAAiSIAApAIF+AAIAAHsQAABSBKAAQBJAAAAhaIAAnkIF+AAIAAMxQAADkiPCNQirCnjwAAQhrAAhpglg");
	this.shape_27.setTransform(764.4,191.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF3300").s().p("AoTJ8IAAr7QAAjSB6iEQBHhNBtgsQBsgtByAAQDjAACcCJQCcCKAADJQAADBibCNQibCOjUAAQgiAAhDgHIAAl5QAvAiAuAAQA7AAArgoQAqgnAAg2QAAg2gsgmQgsgng9ABQiTAAAAC2IAALug");
	this.shape_28.setTransform(650.275,185.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF3300").s().p("AoTJ8IAAr7QAAjSB6iEQBHhNBtgsQBsgtByAAQDjAACcCJQCcCKAADJQAADBibCNQibCOjUAAQgiAAhDgHIAAl5QAvAiAuAAQA7AAArgoQAqgnAAg2QAAg2gsgmQgsgng9ABQiTAAAAC2IAALug");
	this.shape_29.setTransform(529.375,185.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF3300").s().p("Al5FVQiZiIAAjNQgBjGCciLQCaiLDdAAQD3AACOCDQCPCBAADgIAAHBIl/AAIAAmoQABhHgngsQgogrhDAAQg6AAgsAoQgtAnABA1QgBA5AoAlQAoAlA+AAQAwAAAsgYIAAFjQgwAIgnAAQjkAAiZiIg");
	this.shape_30.setTransform(403.05,169.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF3300").s().p("ABcJzIAAzlIGfAAIAATlgAn7JzIAAzlIGfAAIAAHAIByAAIAAFKIhyAAIAAHbg");
	this.shape_31.setTransform(279.75,152.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CC00").s().p("Ak1HqQiBjMAAkeQAAkkCBjHQCBjIC8AAQCyAAB/DMQB+DLAAEcQAAEfiADLQiBDKi2AAQi0AAiBjKgAhUiMQgkA5AABTQAABTAkA7QAkA6AwAAQAyAAAkg6QAjg7AAhTQAAhTgjg5Qgjg7gzAAQgyAAgiA7g");
	this.shape_32.setTransform(691.35,371.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00CC00").s().p("AkxHpQiAjMAAkoQAAkYCAjJQCAjICzAAQCcAAB4CdQB3CeAdD0Ik8ATQgqhVg/gBQg0ABgiA4QgjA4ABBUQAABXAkA6QAkA7A2AAQBPAAAhiUIE3gTQgOEgh4C5Qh6C6iuAAQi4AAh9jMg");
	this.shape_33.setTransform(595.55,371.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00CC00").s().p("AA7KnIAAruQAAhzg7AAQg6AAAABzIAALuIk5AAIAArlQAAkEBsixQBsizCbAAQC0AABsDPQBUChAAEhIAAK8g");
	this.shape_34.setTransform(501.225,370.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00CC00").s().p("AicPCIAA0xIE4AAIAAUxgAhvomQgshDAAhoQAAhhAvhHQAuhIA/AAQA/AAAvBIQAuBHAABhQAABogsBDQgsBDhEAAQhEAAgshDg");
	this.shape_35.setTransform(430.05,341.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00CC00").s().p("AmpKrQitkRAAmUQAAmWCwkVQCvkWEAAAQD8AACqEQQB1C8AwFQIlrAnQg+krirAAQhsAAhGB4QhHB4AAC5QAACzBFB1QBGB0BrAAQBqAABBhnQBAhmALjAIFkAOQgjG4icDxQidDwj7AAQj+AAirkRg");
	this.shape_36.setTransform(340.7,346.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ak1FVQiBiOAAjHQAAjLCBiKQCBiMC8AAQCxAAB/COQB/CNAADGQAADIiACNQiBCNi2AAQi0AAiBiNgAhVhhQgjAoAAA5QAAA6AkAoQAjApAxAAQAyAAAkgpQAjgoAAg6QAAg5gjgoQgjgpgzAAQgyAAgjApg");
	this.shape_37.setTransform(814.625,558.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Aj+KHIAAkuQBAAeAvAAQCYAAAti+QhRA1hPAAQh0AAhLhfQhLhhAAiTIAApGIE4AAIAAHxQAABTA9AAQA8AAAAhbIAAnpIE4AAIAAM5QAADnh1COQiLCpjGAAQhXAAhWglg");
	this.shape_38.setTransform(720.275,581.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ak1FYQh9iJAAjPQAAjIB/iNQB+iMC1AAQDKAAB1CEQB0CDAADiIAAHGIk4AAIAAmtQAAhIgggsQghgrg2AAQgwAAgkAoQgkAoAAA1QAAA6AgAlQAhAlAyAAQAoAAAjgYIAAFnQgmAIggAAQi7AAh+iKg");
	this.shape_39.setTransform(622.275,558.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AEJKJIAAs3QAAg9gJgUQgJgUgbAAQgyAAAABeIAAM+IlSAAIAAs3QAAg8gJgVQgKgUgaAAQgzAAAABlIAAM3IlTAAIAAuQQAAiqBdhsQBdhrCUAAQCvAABeCzQA5hhBCgpQBCgpBhAAQCaAABSBrQBSBsAADKIAANwg");
	this.shape_40.setTransform(504.625,540.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AkzFYQh+iKgBjNQAAjKCBiMQB/iMC4AAQC2AAB7CJQB7CJAADIQAAAUgDAsInZAAQgLgoAAggQAAgvAPgsICeAAQgRhnhYAAQg5AAglA4QgkA2AABXQgBBZAlA3QAiA4A5AAQAvAAArg0ICzDuQh9BsiYAAQi5AAh+iKg");
	this.shape_41.setTransform(345.35,558.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AiXJ5IAAl0IA2AAQEoAAAAkSQAAkDkjAAIhyAAIAAOGIlUAAIAAzyIG6AAQEjAACkCSQDECwAAEtQAAEeinC2QioC2kGAAQgfAAhGgEg");
	this.shape_42.setTransform(238.15,542.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#336600").s().p("Ak8IDQiDjXAAksQAAkzCDjRQCEjTDAAAQC1AACCDXQCBDVAAErQAAEuiDDVQiDDVi6AAQi4AAiEjVgAhXiUQgkA9AABXQAABXAlA+QAkA9AyAAQAzAAAlg9QAjg+AAhXQAAhXgjg9Qgkg9g0AAQgzAAgkA9g");
	this.shape_43.setTransform(702.575,371.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#336600").s().p("Ak4ICQiCjWAAk3QAAkoCCjSQCEjSC1gBQCgAAB6CmQB6ClAeEBIlEAUQgqhag/AAQg2AAgjA7QgjA6AABbQAABZAmA/QAkA9A3AAQBRAAAiicIE9gUQgNEwh8DDQh8DCiyAAQi7ABiBjXg");
	this.shape_44.setTransform(604.75,371.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#336600").s().p("AA8LKIAAsVQAAh4g8AAQg8AAAAB4IAAMVIk/AAIAAsLQAAkRBui7QBui8CfAAQC3AABvDaQBWCpAAEvIAALhg");
	this.shape_45.setTransform(508.45,370.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#336600").s().p("AifPzIAA11IE+AAIAAV1gAhxpCQgthGAAhuQAAhmAwhKQAvhMBAAAQBAAAAwBMQAvBKAABmQAABugsBGQgtBGhGAAQhGAAgshGg");
	this.shape_46.setTransform(435.775,340.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#336600").s().p("AmzLOQiwkfAAmpQABmrCzkjQCykkEGABQECAACsEeQB4DFAyFhIl0ApQg+k6ivAAQhuAAhIB+QhIB+AADCQAAC8BHB8QBHB5BtAAQBtAABBhsQBBhsAMjJIFrAPQgkHPieD8QigD9kBgBQkDABiwkfg");
	this.shape_47.setTransform(344.6,345.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhHAtQgOgIAAgNQAAgLAKgIQAKgGAbgEIAogGIAVgGQAAgHgFgDQgEgCgLAAQgNAAgHACQgGADgDAHIg3gEQAEgKAGgGQAFgFALgFQAIgDANgCQAOgCARAAQAYABAQACQAQACAKAGQAHAEAEAJQAFAHAAAIIAAAtIABAMIAGAKIg2AAIgEgGIgCgGQgLAHgMADQgOAFgTgBQgbAAgOgJgAgBAIQgSADgEADQgFADAAAFQAAAEAFAEQAFACAJAAQAJAAAIgDQAIgDADgFQAEgFAAgHIAAgGIgYAFg");
	this.shape_48.setTransform(153.05,745.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag6AqQgbgQAAgaQAAgWAXgQQAXgQAnAAQAsAAAXATQATAOAAAVQAAAYgXAPQgXAPgoAAQgjAAgXgMgAgTgTQgJAGAAANQAAAOAJAHQAIAHALgBQAMABAIgHQAIgGAAgPQAAgNgIgGQgIgHgMAAQgLAAgIAHg");
	this.shape_49.setTransform(133.825,745.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgcBIIAAiPIA5AAIAACPg");
	this.shape_50.setTransform(119.35,743.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgbBIIAAiPIA3AAIAACPg");
	this.shape_51.setTransform(109.75,743.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhAArQgOgKAAgUIAAhBIA6AAIAAA4QAAAKAEAEQAGAEAJAAQAKAAAGgFQAHgGgBgNIAAgyIA6AAIAABnIg1AAIAAgRQgMAKgNAFQgLAEgRAAQgYAAgNgKg");
	this.shape_52.setTransform(95.35,746.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AghBIIhOiPIBDAAIAtBnIAuhnIBBAAIhNCPg");
	this.shape_53.setTransform(74.625,743.925);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhVBJQADgSAPgQQAPgPApgVQAYgMAHgHQAIgGAAgHQAAgGgIgFQgHgFgKABQgKgBgHAFQgHAFgCAMIg5gDQACgRAJgJQAKgKAQgFQARgFAcAAQAeAAAQAFQARAEAKALQAJAKAAAMQAAANgKAMQgLALgeAOIgWAMIgOAIIBZAAIAAAhg");
	this.shape_54.setTransform(192.8,713.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhVBJQADgSAPgQQAPgPApgVQAYgMAIgHQAGgGAAgHQAAgGgGgFQgIgFgKABQgKgBgHAFQgHAFgCAMIg6gDQAEgRAJgJQAIgKARgFQAQgFAdAAQAeAAARAFQARAEAJALQAKAKAAAMQAAANgLAMQgMALgdAOIgWAMIgNAIIBYAAIAAAhg");
	this.shape_55.setTransform(173.6,713.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgpBEQgQgFgLgMQgHgHgEgOQgEgOAAgQQAAgoAVgRQAVgQAqAAQAVAAAOADQANAEAIAGQAJAFAFAHQAFAGACAIQAGARAAARQAAAmgTASQgTASguAAQgZAAgQgGgAgUglQgHAKAAAbQAAAbAHAKQAHAKANAAQAIAAAHgEQAGgFADgJQADgJAAgTQAAgcgHgKQgHgKgNAAQgOAAgGAKg");
	this.shape_56.setTransform(154.675,714.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhVBJQADgSAPgQQAPgPAqgVQAYgMAGgHQAIgGgBgHQABgGgIgFQgGgFgLABQgKgBgHAFQgHAFgCAMIg6gDQAEgRAIgJQAKgKAQgFQAQgFAcAAQAfAAARAFQAQAEAKALQAKAKAAAMQAAANgLAMQgMALgcAOIgYAMIgMAIIBYAAIAAAhg");
	this.shape_57.setTransform(135.15,713.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAOBJIAAgbIhnAAIAAghIBnhVIAyAAIAABXIAaAAIAAAfIgaAAIAAAbgAgoAPIA2AAIAAgsg");
	this.shape_58.setTransform(106.575,713.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhLBHIgEgcQAMADAPAAQAKAAAHgEQAGgCAEgJIg+hnIA8AAIAeBGIAdhGIA4AAIg7BuQgKATgLAHQgOAJgeAAIgngCg");
	this.shape_59.setTransform(78.675,718.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhIAtQgNgIAAgMQAAgMAKgIQAKgGAagFIAqgFIAUgGQAAgGgFgEQgEgCgLAAQgNAAgHACQgGADgDAHIg3gEQAEgKAFgGQAGgFALgFQAIgDAOgCQAOgCAQAAQAZABAPACQAPACALAGQAHAEAFAJQAEAHAAAIIAAAtIABAMIAGAKIg2AAIgEgGIgCgHQgLAIgLADQgPAEgTAAQgcABgOgKgAgBAIQgRADgFADQgFADAAAEQAAAGAFACQAFADAJAAQAJAAAHgDQAJgDAEgFQADgEAAgIIAAgHIgYAGg");
	this.shape_60.setTransform(60.2,716);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("ABABIIAAhtIgoBtIgvAAIgohtIAABtIg0AAIAAiPIBUAAIAfBXIAhhXIBTAAIAACPg");
	this.shape_61.setTransform(36.95,714.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgOBFQgLgEgEgIQgFgHAAgSIAAgjIgVAAIAAgeIAVAAIAAgSIA5gVIAAAnIAfAAIAAAeIgfAAIAAAjQAAAHABACQADAEAHAAQAGAAAMgDIAEAbQgVAEgTAAQgUAAgKgEg");
	this.shape_62.setTransform(212.3,684.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Ag6A1IAAhnIA2AAIAAARQAHgLAIgEQAIgEAMAAQANAAAPAFIgSAdQgKgDgGAAQgLAAgGAGQgIAJAAAYIAAAjg");
	this.shape_63.setTransform(200.775,685.925);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAuBIIgLgYIhHAAIgKAYIhBAAIBNiPIBFAAIBNCPgAgWARIAsAAIgWgzg");
	this.shape_64.setTransform(181.975,684.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ag6A1IAAhnIA2AAIAAARQAHgLAIgEQAIgEAMAAQANAAAPAFIgSAdQgKgDgGAAQgLAAgGAGQgIAJAAAYIAAAjg");
	this.shape_65.setTransform(155.925,685.925);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AguAxQgRgHgLgMQgMgNAAgRQAAgXAXgPQAWgQAoAAQAfAAATAHQASAHAKANQAKANAAAUIAAAEIhyAAQABAKAGAEQAIAHANAAQAIAAAIgDQAFgCAFgEIA4ADQgNAPgSAIQgSAGgiAAQgdAAgRgFgAgVgWQgFAFgBAJIA3AAQgBgLgIgGQgHgEgMAAQgMAAgJAHg");
	this.shape_66.setTransform(138.725,686.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgOBFQgKgEgFgIQgFgHAAgSIAAgjIgVAAIAAgeIAVAAIAAgSIA5gVIAAAnIAfAAIAAAeIgfAAIAAAjQAAAHABACQADAEAHAAQAGAAAMgDIAEAbQgVAEgTAAQgUAAgKgEg");
	this.shape_67.setTransform(122.65,684.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AhBArQgNgKAAgUIAAhBIA5AAIAAA4QAAAKAGAEQAFAEAJAAQAKAAAGgFQAGgGABgNIAAgyIA5AAIAABnIg2AAIAAgRQgMAKgLAFQgMAEgSAAQgXAAgOgKg");
	this.shape_68.setTransform(106.65,686.175);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AhRBJIAAiPIA1AAIAAAQQAMgKAJgDQALgFAQAAQAeAAAQAQQAQAQAAAYQAAAZgRANQgSAOgcAAQgNAAgKgEQgLgCgIgHIAAAygAgQgkQgIAFAAAOQAAAMAIAFQAHAGALAAQAKAAAGgFQAHgGAAgNQAAgNgHgFQgHgHgKAAQgKAAgHAHg");
	this.shape_69.setTransform(87.775,687.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("ABGA1IAAg6QAAgHgFgDQgFgGgJAAQgKAAgGAFQgGAFAAALIAAA1Ig4AAIAAg4QgBgHgBgCQgBgEgFgDQgFgCgFAAQgKAAgHAFQgGAFgBALIAAA1Ig5AAIAAhnIA2AAIAAAQQAMgKALgEQAMgEARAAQARAAAKAEQALAFAGAJQAOgLAKgDQAMgEAQAAQAYAAAOAKQANAKAAAVIAABAg");
	this.shape_70.setTransform(63.4,685.925);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Ag6AqQgbgQAAgaQAAgWAXgQQAXgQAnAAQAsAAAXATQATAOAAAVQAAAXgXAQQgXAPgoAAQgjAAgXgMgAgTgTQgJAGAAANQAAAOAJAHQAIAHALgBQAMABAIgHQAIgGAAgPQAAgNgIgGQgIgHgMAAQgLAAgIAHg");
	this.shape_71.setTransform(39.375,686.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgvBDQgWgGgPgSQgPgRAAgaQAAgjAbgTQAbgTAxAAQAnAAAWALQAXALALAWIg5AJQgDgGgDgDQgGgFgHgDQgIgDgKAAQgUAAgLAMQgKAJABATQAAAXAKAJQALAJARAAQATAAAJgHQAJgHAFgOIA3AMQgFAQgMALQgNALgRAGQgTAFgbAAQggAAgWgHg");
	this.shape_72.setTransform(18.75,684.075);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AlEJeIAAkaQBRAbA9AAQDBAAA6iyQhoAzhkAAQiUAAhghaQhghaAAiLIAAogIGPAAIAAHSQAABMBNAAQBMAAAAhUIAAnKIGPAAIAAMEQAADYiWCGQiyCdj7AAQhvAAhugig");
	this.shape_73.setTransform(777.175,183.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AorJaIAArSQAAjHCAh9QBKhIBygrQBxgqB3gBQDtABCjCCQCjCCAAC9QAAC4iiCGQiiCGjeAAQgjAAhGgHIAAllQAxAhAwAAQA+gBAsgkQAsgmAAgzQAAgzguglQgugkg/AAQiZAAAACtIAALGg");
	this.shape_74.setTransform(658.025,177.65);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AorJaIAArSQAAjHCAh9QBKhIBygrQBxgqB3gBQDtABCjCCQCjCCAAC9QAAC4iiCGQiiCGjeAAQgjAAhGgHIAAllQAxAhAwAAQA+gBAsgkQAsgmAAgzQAAgzguglQgugkg/AAQiZAAAACtIAALGg");
	this.shape_75.setTransform(531.875,177.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AmKFCQigiAAAjCQAAi8CiiDQChiDDnAAQEBAACVB7QCVB7AADUIAAGpImPAAIAAmSQAAhEgogoQgqgphFAAQg+AAguAlQguAmAAAyQAAA2AqAiQApAjBAAAQAzAAAtgWIAAFQQgxAHgoAAQjvAAigiBg");
	this.shape_76.setTransform(400.075,162.525);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("ABhJRIAAyhIGwAAIAAShgAoQJRIAAyhIGwAAIAAGoIB3AAIAAE4Ih3AAIAAHBg");
	this.shape_77.setTransform(271.35,146.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:63.675,y:803.05}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_9,p:{x:465.625,y:321.1}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},10).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},10).wait(10));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(890.15,684.65);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(30));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(226.6,422.4,1093.4,410);
// library properties:
lib.properties = {
	id: 'A19836AF1AE37B48BF6DEDFACD763F93',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FF812A",
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
an.compositions['A19836AF1AE37B48BF6DEDFACD763F93'] = {
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