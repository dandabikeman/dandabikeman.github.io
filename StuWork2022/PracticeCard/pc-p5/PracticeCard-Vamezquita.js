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
(lib.PracticeCardVamezquita = function(mode,startPosition,loop,reversed) {
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
		this.stop(); // This will make the main timeline stop on current frame
	}
	this.frame_29 = function() {
		this.stop(); // This will make the main timeline stop on current frame
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(19).call(this.frame_29).wait(2));

	// Actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#669900").ss(1,1,1).p("Ax7m6Ih3AAAEoitIPLJo");
	this.shape.setTransform(564.3,374.725);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#669900").ss(1,1,1).p("EBE1gXdQAAAQgrAKQgsALg9AAQgxAAgmgHQgJgBgJgDQgsgKAAgQQAAgPAsgLQAngKA3gBQAFAAAGAAQA9AAAsALQArALAAAPgEAM8gijQAAAngcAcQgbAbgnAAQgnAAgbgbQgcgcAAgnQAAgeARgYQAEgGAHgGQAbgcAnAAQAAAAABAAQAmABAbAbQAcAbAAAngEA9fgnfQAAAagoATQgpASg5AAQg5AAgogSQgbgNgJgPQgFgIAAgJQAAgbApgSQAVgKAagEQAXgFAbAAQA5AAApATQAoASAAAbgEAuBgSuQAAAOglAKQgmAKg2AAQg1AAgmgKQgXgGgJgHQgGgFAAgGQAAgOAjgKQABAAACgBQAmgKA1AAQA2AAAmAKQAlAKAAAPgEAe3ApBQAAAVgkAOQgkAPg0AAQgzAAgkgPQgSgHgJgJQgJgIAAgLQAAgUAkgPQATgHAXgEQAVgDAYAAQA0AAAkAOQAkAPAAAUgEgb4gnwQAAA2g8AmQg8AmhVAAQhCAAg0gXQgOgGgNgJQgsgcgMgkQgEgNAAgPQAAg2A8gmQA8gmBVAAQBVAAA8AmQA8AmAAA2gEg/bgmnQAABHgzAzQgyAyhIAAQhHAAgzgyQgZgagNgfQgLgdgBghQAAgCAAgBQAAhIAygyQAzgzBHAAQBIAAAyAzQAzAyAABIgAHlSDQAAAhguAXQgvAYhCAAQhCAAgugYQgvgXAAghQAAgCAAgBQACgfAtgWQAdgPAlgFQAWgDAYAAQBCAAAvAXQAuAXAAAhgEgF2AnGQAAAWgzAPQg0AQhIAAQhJAAgzgQQg0gPAAgWQAAgWA0gQQAzgPBJAAQBIAAA0APQAzAQAAAWg");
	this.shape_1.setTransform(581.5,462.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AuwCCQjHIjDHixAQVKeQj3ERD3DFAPtxzQjBEuDBCV");
	this.shape_2.setTransform(873.5204,530.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(1,1,1).p("EBHtgXjQhSARhxAAQh4AAhVgTQhVgTAAgbQAAgbBbATQBcATB1gQQB2gPBRgEQAqgBAUAGEBIGgLpQAABphLBLQhKBLhqAAQgHAAgIgBQhggFhFhFQhLhLAAhpQAAhqBLhLQBLhKBpAAQBqAABKBKQBLBLAABqgEAwogTHQgXAIgoAIQhfARiHAAQiGAAhggRQhfgSAAgZQAAgZBsAbQBsAbCBgTQCBgSBYgJQBHgGAOAPEA/zgnyQgIABgIACQiAAXi0AAQi0AAh/gXQiAgYAAghQAAghCMAbQCMAbCvgVQCvgUB4gHQA+gDAeAHEBIuAQYQAABwhPBPQhPBPhwAAQhwAAhPhPQhPhPAAhwQAAhwBPhPQBPhPBwAAQBwAABPBPQBPBPAABwgEApUAIRQAABnhJBJQhJBKhoAAQhnAAhKhKQhJhJAAhnQAAhoBJhJQBKhJBnAAQBoAABJBJQBJBJAABogEAhsAowQgEABgDABQhqATiVAAQiVAAhpgTQhqgTAAgbQAAgbB2ATQB3AUCPgRQCQgRBigDQAtgBAYAFEgaXgmpQh6AXimAAQi2AAiBgcQiBgbAAgoQAAgnCBAkQCBAkC2gSQBwgLBcgLEAQ0gj9QgIACgJACQhfARiHAAQiGAAhggRQhfgSAAgZQAAgZBfALQBgALCGANQCHANBfgYQBdgXACAXEg+FgmKQhsAMiKAAQi5AAiCgWQiCgWAAgfQAAgfCqAdQCqAdCvgMQBcgGBIgIAJKRcQgLACgNADQiOAcjJAAQjJAAiNgcQiOgcAAgnQAAgoB9AVQB8AUDDAOQDEANClgiQCJgcAXAXEgEnAmCQAAAnh7AcQh7AciuAAQiuAAh7gcQh7gcAAgnQAAgoCRAuQCSAvCfgwQCggwBzABQBzACAAAog");
	this.shape_3.setTransform(539.5875,466.0377);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#669933").s().p("EAbkApkQgSgHgJgJQgJgIAAgLQAAgUAkgPQATgHAXgEQAVgDAYAAQAzAAAkAOQAlAPAAAUQAAAVglAOQgkAPgzAAQgyAAglgPgEgKhAnrQg0gPABgWQgBgWA0gQQA0gPBIAAQBIAAA0APQA0AQgBAWQABAWg0APQg0AQhIAAQhIAAg0gQgADVS7QgugXAAghIAAgDQACgfAsgWQAegPAmgFQAVgDAYAAQBCAAAuAXQAvAXAAAhQAAAhgvAXQguAYhCAAQhCAAgvgYgEAqkgSWQgWgGgJgHQgGgFgBgGQABgOAjgKIACgBQAmgKA2AAQA2AAAmAKQAlAKABAPQgBAOglAKQgmAKg2AAQg2AAgmgKgEBBKgW/IgSgEQgsgKAAgQQAAgPAsgLQAngKA3gBIALAAQA9AAArALQAsALAAAPQAAAQgsAKQgrALg9AAQgxAAgmgHgEAKcghgQgcgcAAgnQAAgeARgYIALgMQAbgcAnAAIABAAQAmABAcAbQAbAbAAAnQAAAngbAcQgcAbgnAAQgnAAgbgbgEhEBgktQgagagNgfQgLgdgBghIAAgDQAAhIAzgyQAygzBHAAQBIAAAzAzQAyAyAABIQAABHgyAzQgzAyhIAAQhHAAgygygEgg7gmFQgOgGgNgJQgsgcgMgkQgEgNAAgPQAAg2A8gmQA8gmBVAAQBVAAA8AmQA8AmAAA2QAAA2g8AmQg8AmhVAAQhCAAg0gXgEA50gmyQgbgNgJgPQgFgIAAgJQAAgbApgSQAVgKAagEQAXgFAbAAQA5AAAoATQApASAAAbQAAAagpATQgoASg5AAQg5AAgogSg");
	this.shape_4.setTransform(581.5,462.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("EAZoAoyQhqgTAAgbQAAgbB2ATQB3AUCPgRQCQgRBigDQAtgBAYAFQgXAEgTAHQgkAPAAAUQAAAKAJAJIgHACQhqATiVAAQiVAAhpgTgEgP0AnFQh7gcAAgnQAAgoCRAuQCSAvCfgwQCggwBzABQBzACAAAoQAAAnh7AcQh7AciuAAQiuAAh7gcgEBBhATXQhPhPAAhwQAAhwBPhPQBPhPBwAAQBwAABPBPQBPBPAABwQAABwhPBPQhPBPhwAAQhwAAhPhPgAh7RhQiOgcAAgnQAAgoB9AVQB8AUDDAOQDEANClgiQCJgcAXAXQgmAFgdAPQgsAWgDAfIgYAFQiOAcjJAAQjJAAiNgcgEAipALBQhJhJAAhnQAAhoBJhJQBKhJBnAAQBoAABJBJQBJBJAABoQAABnhJBJQhJBKhoAAQhnAAhKhKgEBD4gHrQhggFhFhFQhLhLAAhpQAAhqBLhLQBLhKBpAAQBqAABKBKQBLBLAABqQAABphLBLQhKBLhqAAIgPgBgEAodgS3QhfgSAAgZQAAgZBsAbQBsAbCBgTQCBgSBYgJQBHgGAOAPQgjAKAAAOQAAAGAGAFQgXAIgoAIQhfARiHAAQiGAAhggRgEBBdgXlQhVgTAAgbQAAgbBbATQBcATB1gQQB2gPBRgEQAqgBAUAGQg3ABgnAKQgsALAAAPQAAAQAsAKIASAEQhSARhxAAQh4AAhVgTgEAJXgj5QhfgSAAgZQAAgZBfALQBgALCGANQCHANBfgYQBdgXACAXIgBAAQgnAAgbAcIgLAMIgRAEQhfARiHAAQiGAAhggRgEhG2gmUQiCgWAAgfQAAgfCqAdQCqAdCvgMQBcgGBIgIQABAhALAdQhsAMiKAAQi5AAiCgWgEgjugmuQiBgbAAgoQAAgnCBAkQCBAkC2gSQBwgLBcgLQAMAkAsAcQANAIAPAHQh6AXimAAQi2AAiBgcgEA18gnvQiAgYAAghQAAghCMAbQCMAbCvgVQCvgUB4gHQA+gDAeAHQgaAFgVAKQgpASAAAbQAAAJAFAIIgQADQiAAXi0AAQi0AAh/gXg");
	this.shape_5.setTransform(539.5875,466.0377);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},30).wait(1));

	// balloms
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("EApSgiqQDOCWjOCWEBBrgdXQA2Dcg2ABEA+tgM7QBPB8hPCbEAgFATDQBuCchuCbEA/eAGpQCuDoiuCjEAzIAV8QCdC9idDjEhApgfnQi4FgC4DLEgjwglMQCbDHibCkEg62gCfQCJCHiJBfEg8+AMVQB1Czh1DUEgm4AIDQB5Csh5BnAnyNNQBgC1hgBoA0wUeQhWDxBWBFADNWvQCCCLiCCwEAW3AiiIAACqEgydgVqQiHCzCHCL");
	this.shape_6.setTransform(481.7726,515.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(1,1,1).p("EAs4gimQAACBhbBaQhaBbiBAAQiAAAhbhbQhbhaAAiBQAAiABbhbQBbhbCAAAQCBAABaBbQBbBbAACAgEBBvgNEQAACHhgBgQhMBNhmAPQgaAEgbAAQiIAAhghgQhghgAAiHQAAiIBghgQBghgCIAAQCHAABgBgQBgBgAACIgEA13AXPQAABhhEBEQhEBEhgAAQgMAAgLgBQhSgHg8g8QhEhEAAhhQAAhgBEhEQBEhEBhAAQBgAABEBEQBEBEAABggEgwxgUMQAABchCBBQg0A1hGAKQgRADgSAAQhcAAhBhCQhBhBAAhcQAAhcBBhBQBBhBBcAAQBcAABBBBQBCBBAABcgEgk6AJfQAABchBBBQg7A8hSAFQgIABgIAAQhcAAhChCQhBhBAAhcQAAhcBBhBQBChBBcAAQBcAABBBBQBBBBAABcgEg56ANXQAABnhKBJQhJBKhnAAQgNAAgNgBQhXgIhAhBQhJhJAAhnQAAhoBJhJQBJhJBoAAQBnAABJBJQBKBJAABogAl0PNQAABNg3A3Qg3A3hNAAQgKAAgJAAQhBgGgxgxQg3g3AAhNQAAhOA3g3QA3g3BOAAQBNAAA3A3QA3A3AABOgEAZ+Ai7QAAB4hVBVQhRBRhxAEQgFAAgGAAQh4AAhVhVQhVhVAAh4QAAh4BVhVQBVhVB4AAQB4AABVBVQBVBVAAB4g");
	this.shape_7.setTransform(489.775,484.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#66CC00").ss(1,1,1).p("EBGygXJQAAChhzByQhnBoiOAKQgPABgPAAQiiAAhyhzQhyhyAAihQAAiiByhyQByhyCiAAQChAAByByQBzByAACigEBENANXQAACUhpBoQhhBhiFAIQgLAAgMAAQiUAAhphpQhohoAAiUQAAiUBohpQBphpCUAAQCUAABpBpQBpBpAACUgEAlWAaIQAACLhiBiQhiBiiLAAQgSAAgRgBQh1gLhVhWQhihiAAiLQAAiLBihiQBihiCLAAQCLAABiBiQBiBiAACLgEg7SgZEQAACYhsBsQhrBsiYAAQgEAAgEAAQiTgDhphpQhshsAAiYQAAiYBshsQBshrCYAAQCYAABrBrQBsBsAACYgA/t98QAACGhgBfQhTBUhxAKQgQACgRAAQiHAAhfhgQhfhfAAiGQAAiHBfhfQBfhfCHAAQCGAABfBfQBgBfAACHgEg2hAE4QAACDhcBcQhaBah/ACQgDAAgDAAQiCAAhdhcQhchcAAiDQAAiCBchdQBdhbCCAAQCDAABcBbQBcBdAACCgAxpdBQAABkhHBGQhDBDheADQgEAAgEAAQhkAAhGhGQhGhGAAhkQAAhjBGhHQBGhGBkAAQBjAABGBGQBHBHAABjgAGpfQQAABkhHBHQhHBHhlAAQgFAAgFAAQhegDhDhEQhGhHAAhkQAAhlBGhHQBHhHBkAAQBlAABHBHQBHBHAABlg");
	this.shape_8.setTransform(485.025,437.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("EASPAmIQhVhVAAh4QAAh4BVhVQBVhVB4AAQB4AABVBVQBVBVAAB4QAAB4hVBVQhRBRhxAEIgLAAQh4AAhVhVgEAx4Aa3QhSgHg8g8QhEhEAAhhQAAhgBEhEQBEhEBhAAQBgAABEBEQBEBEAABgQAABhhEBEQhEBEhgAAIgXgBgApCSHQhBgFgxgxQg3g3AAhNQAAhOA3g3QA3g3BOAAQBNAAA3A3QA3A3AABOQAABNg3A3Qg3A3hNAAIgTgBgEg+OARPQhXgHhAhBQhJhJAAhnQAAhoBJhJQBJhJBoAAQBnAABJBJQBKBJAABoQAABnhKBJQhJBKhnAAIgagCgEgq2AL8QhBhBAAhcQAAhcBBhBQBChBBcAAQBcAABBBBQBBBBAABcQAABchBBBQg7A8hSAFIgQABQhcAAhChCgEA5AgJdQhghgAAiHQAAiIBghgQBghgCIAAQCHAABgBgQBgBgAACIQAACHhgBgQhMBNhmAPQgaAEgbAAQiIAAhghggEg2tgRvQhBhBAAhcQAAhcBBhBQBBhBBcAAQBcAABBBBQBCBBAABcQAABchCBBQg0A1hGAKQgRADgSAAQhcAAhBhCgEAkngfLQhbhaAAiBQAAiABbhbQBbhbCAAAQCBAABaBbQBbBbAACAQAACBhbBaQhaBbiBAAQiAAAhbhbg");
	this.shape_9.setTransform(489.775,484.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CC00").s().p("EACsAjCQhegDhDhEQhGhHAAhkQAAhlBGhHQBHhHBkAAQBlAABHBHQBHBHAABlQAABkhHBHQhHBHhlAAIgKAAgA4DfrQhGhGAAhkQAAhjBGhHQBGhGBkAAQBjAABGBGQBHBHAABjQAABkhHBGQhDBDheADIgIAAQhkAAhGhGgAfkfWQh1gLhVhWQhihiAAiLQAAiLBihiQBihiCLAAQCLAABiBiQBiBiAACLQAACLhiBiQhiBiiLAAQgSAAgRgBgEA6qARTQhohoAAiUQAAiUBohpQBphpCUAAQCUAABpBpQBpBpAACUQAACUhpBoQhhBhiFAIIgXAAQiUAAhphpgEg7cAJzQiCAAhdhcQhchcAAiDQAAiCBchdQBdhbCCAAQCDAABcBbQBcBdAACCQAACDhcBcQhaBah/ACIgGAAgEA8YgS2QhyhyAAihQAAiiByhyQByhyCiAAQChAAByByQBzByAACiQAAChhzByQhnBoiOAKIgeABQiiAAhyhzgEhBJgTUQiTgDhphpQhshsAAiYQAAiYBshsQBshrCYAAQCYAABrBrQBsBsAACYQAACYhsBsQhrBsiYAAIgIAAgEgoYgaXQhfhfAAiGQAAiHBfhfQBfhfCHAAQCGAABfBfQBgBfAACHQAACGhgBfQhTBUhxAKQgQACgRAAQiHAAhfhgg");
	this.shape_10.setTransform(485.025,437.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[]},30).wait(1));

	// Label
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AACCvIAAjkQgWASgXALQgVALgiAKIAAhPQAygPAbgWQAagWAOghIBPAAIAAFdg");
	this.shape_11.setTransform(236.3,656.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhOB0QgcgOgSgeQgTgeAAgpQAAg6AlgkQAmgkBBAAQA1AAAfAQQAfARAQAeQAQAfAAAwIAAAKIi+AAQACAYAKALQAOAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgeAQg4AAQgxAAgdgOgAgjg3QgIAMgDAWIBdAAQgDgcgMgLQgMgNgTAAQgWAAgOASg");
	this.shape_12.setTransform(190.65,661.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAkB/IAAiIQAAgXgJgKQgIgKgRAAQgPAAgLAOQgLANAAAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAWAYgBAxIAACdg");
	this.shape_13.setTransform(158.6,660.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhOB0QgcgOgSgeQgTgeAAgpQAAg6AmgkQAlgkBBAAQA1AAAfAQQAfARAQAeQAQAfAAAwIAAAKIi+AAQACAYALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgeAQg4AAQgxAAgdgOgAgjg3QgIAMgDAWIBdAAQgDgcgMgLQgMgNgTAAQgWAAgOASg");
	this.shape_14.setTransform(126.65,661.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgRgLgWQgLgWAAglQAAglANgaQAKgSAQgPQARgPASgIQAcgLAqAAQA9AAAgAWQAgAVANArIhaAMQgEgQgLgJQgLgHgTgBQgXAAgOARQgPARAAAiQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbALQgIAcgRAUQgRAVgaAMQgbALgpAAQgnAAgagHg");
	this.shape_15.setTransform(94.675,661.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQAEAYAJANQARAVAeAAQAWAAAMgKQAMgLABgOQAAgOgMgKQgLgLgrgJQhFgQgegZQgegaAAgoQAAgbAQgXQAPgYAfgNQAegOA1AAQBCAAAiAZQAjAYAGA2IhjAGQgFgYgMgKQgNgLgWAAQgSAAgKAIQgJAIAAALQAAAIAIAHQAIAHAcAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgTAcQgRAcghAOQghAPgyAAQhXAAghgig");
	this.shape_16.setTransform(61.15,656.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AM8n9QKKBWIEDnQM6FwAAIJQAAIKs6FxQs6FxyQAAQyPAAs6lxQs6lxAAoKQAAoJM6lwQH2jhJ0hYQEegoE3gLIpVA0IAAgBQA9kNBhjwQDCngDJjzQEZlTD9C7QE+DoEeR8gAL4LNQAAC7kFCDQkECElwAAQlxAAkEiEQkFiDAAi7QAAi6EFiEQEEiEFxAAQFwAAEECEQEFCEAAC6gAZAKlQAAFDnyDlQnyDkq/AAQrAAAnyjkQnyjlAAlDQAAlDHyjkQHyjkLAAAQK/AAHyDkQHyDkAAFDgAkKosQCDgFCHAAQG2AAGGA0g");
	this.shape_17.setTransform(495,343.2406);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#66CC33").s().p("AyxIoQnyjlAAlDQAAlCHyjlQHyjkK/AAQLAAAHyDkQHyDlAAFCQAAFDnyDlQnyDkrAAAQq/AAnyjkgAqTkVQkECDAAC6QAAC6EECEQEFCEFxAAQFwAAEEiEQEFiEAAi6QAAi6kFiDQkEiElwAAQlxAAkFCEg");
	this.shape_18.setTransform(485,410.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC66").s().p("AqvDYQDCnfDJjzQEZlTD9C7QE+DoEeR7QmGg0m2AAQiHAAiDAFQk3AMkeAnQA9kNBhjwg");
	this.shape_19.setTransform(493.225,220.1281);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ap1E+QkEiEAAi6QAAi6EEiDQEFiEFwAAQFxAAEECEQEFCDAAC6QAAC6kFCEQkECElxAAQlwAAkFiEg");
	this.shape_20.setTransform(482,414.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("A/JN4Qs6lxAAoJQAAoJM6lxQH2jgJ1hYIAAAAIJUg0IRGAvQKKBWIEDnQM6FxAAIJQAAIJs6FxQs6FxyQAAQyPAAs6lxgA0Vo9QnyDkAAFDQAAFDHyDkQHyDlLAAAQK/AAHyjlQHyjkAAlDQAAlDnyjkQnyjlq/AAQrAAAnyDlg");
	this.shape_21.setTransform(495,413.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#669900").s().p("AoigUQCDgFCHAAQG1AAGGAzg");
	this.shape_22.setTransform(523.0625,289.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_23.setTransform(609.075,316.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgMQgMgLgTgBQgWABgOARg");
	this.shape_24.setTransform(561.6,321.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_25.setTransform(529.55,320.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_26.setTransform(497.6,321.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_27.setTransform(465.625,321.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_28.setTransform(432.1,316.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_29.setTransform(609.375,316.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},10).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_29}]},10).to({state:[]},10).wait(1));

	// Layer_4
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#669900").ss(1,1,1).p("Au8j3IsUBxIMVIrAqdpYIFFtMIKyLfAmbONIIOIYIDko0AL+ICIPTjl");
	this.shape_30.setTransform(516.5,390.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(1,1,1).p("AO7AAQAADth3DAQg/BnhiBaQh4BviOA/Qi7BUjiAAQi2AAifg4Qi3hAiXiKQiMiChGicQhFibAAi1QAAiyBEiaQBGieCNiEQAlghAngeQEAjCFXAAQDjAAC9BVQCMA/B3BtQEYEDAAFrg");
	this.shape_31.setTransform(509.5,399);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AlVM4Qi3hAiWiKQiNiChGicQhFibAAi1QAAiyBEiaQBGieCOiDQAkgiAngdQEAjDFXAAQDjAAC9BVQCMA/B3BuQEYEBAAFsQAADth3DAQg/BnhiBaQh4BviOA/Qi7BUjiAAQi2AAifg4g");
	this.shape_32.setTransform(509.5,399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},9).wait(22));

	// Layer_1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgiA6QACgOAFgMQAHgNAQgRQAJgJADgGQADgFAAgFQAAgFgDgEQgDgDgEAAQgDAAgDADQgDAEgBAKIgXgDQABgNAEgIQAEgHAGgEQAHgEAKAAQANAAAGAEQAHADAEAIQADAIAAAKQAAALgDAJQgFAJgMALIgJAJIgFAHIAjAAIAAAag");
	this.shape_33.setTransform(327.85,748.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgiA6QACgOAFgMQAHgNAQgRQAJgJADgGQADgFAAgFQAAgFgDgEQgDgDgEAAQgDAAgDADQgDAEgBAKIgXgDQABgNAEgIQAEgHAGgEQAHgEAKAAQANAAAGAEQAHADAEAIQADAIAAAKQAAALgDAJQgFAJgMALIgJAJIgFAHIAjAAIAAAag");
	this.shape_34.setTransform(320.2,748.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgQA3QgGgFgEgJQgDgGgCgLQgCgLAAgNQAAggAJgNQAIgNARAAQAIAAAFADQAGACADAFIAFAKIAEALQACANAAAOQAAAegIAPQgHAOgTAAQgJAAgHgEgAgHgdQgDAIAAAVQAAAVADAJQADAHAEAAQAEAAACgDQADgDABgIQABgHAAgQQAAgVgDgIQgCgIgGAAQgFAAgCAIg");
	this.shape_35.setTransform(312.575,748.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AghA6QAAgOAHgMQAFgNARgRQAJgJADgGQADgFAAgFQAAgFgDgEQgCgDgFAAQgDAAgDADQgDAEgBAKIgXgDQACgNADgIQAEgHAHgEQAGgEALAAQALAAAIAEQAGADAEAIQADAIAAAKQAAALgEAJQgEAJgMALIgJAJIgEAHIAjAAIAAAag");
	this.shape_36.setTransform(304.85,748.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdA5IgCgXQAFADAGAAQAEAAACgDQADgDACgGIgZhSIAYAAIALA3IAMg3IAWAAIgYBXQgEAQgEAFQgFAHgMAAIgPgBg");
	this.shape_37.setTransform(293.825,751.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgcAkQgFgHAAgKQAAgJADgGQAFgFALgDIAPgFIAIgEQAAgGgBgCQgDgDgDAAQgFAAgDADQgCACgBAFIgXgDQACgIACgEQACgFAEgDIAJgEQAGgBAHgBQAIAAAHACQAGACAEAFQADADACAHIABAMIAAAkIABAJIADAJIgWAAIgCgGIAAgFQgFAHgEACQgGADgIABQgLAAgFgIgAAAAHQgHACgBACQgCADgBADQABAEACADQACACADAAQADgBADgCQAEgCABgEIABgKIAAgFIgJAFg");
	this.shape_38.setTransform(286.4,750.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAaA5IAAhWIgQBWIgSAAIgRhWIAABWIgUAAIAAhxIAhAAIAMBEIANhEIAhAAIAABxg");
	this.shape_39.setTransform(277.15,748.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFA3QgEgDgCgGQgCgGAAgOIAAgcIgJAAIAAgYIAJAAIAAgPIAWgQIAAAfIAMAAIAAAYIgMAAIAAAcQAAAFABACQAAAAABABQAAABAAAAQABAAAAABQABAAAAAAIAIgCIABAWQgIACgIAAQgHAAgEgDg");
	this.shape_40.setTransform(265.25,748.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgWArIAAhTIAVAAIAAAOQACgIADgEQAEgDAFgBQAFABAFAEIgHAWIgGgBQgEAAgDAEQgDAIAAASIAAAdg");
	this.shape_41.setTransform(260.1,750);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AATA5IgFgTIgcAAIgEATIgaAAIAfhxIAbAAIAfBxgAgIAOIARAAIgJgpg");
	this.shape_42.setTransform(252.55,748.525);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXArIAAhTIAWAAIAAAOQACgIAEgEQADgDAEgBQAFABAHAEIgHAWIgHgBQgFAAgCAEQgDAIAAASIAAAdg");
	this.shape_43.setTransform(242.15,750);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgRAnQgIgFgEgKQgEgKgBgOQAAgTAJgMQAKgLAPgBQAMABAHAFQAIAGAEAJQADALABAPIAAAEIgtAAQAAAIADADQADAFAEABQAEAAADgDIAEgFIAXADQgGAMgHAGQgIAFgNABQgLgBgGgEgAgIgRQgCAEAAAGIAVAAQAAgJgDgDQgDgFgFAAQgEAAgEAHg");
	this.shape_44.setTransform(235.3,750.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgFA3QgEgDgCgGQgCgGAAgOIAAgcIgIAAIAAgYIAIAAIAAgPIAWgQIAAAfIANAAIAAAYIgNAAIAAAcQAAAFABACQAAAAABABQAAABAAAAQABAAAAABQABAAABAAIAHgCIACAWQgJACgHAAQgIAAgEgDg");
	this.shape_45.setTransform(228.85,748.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZAjQgGgJAAgQIAAg0IAXAAIAAAtQAAAIADAEQACADADAAQADgBADgEQADgEAAgKIAAgpIAXAAIAABTIgWAAIAAgOQgFAIgEAEQgEADgHABQgKgBgFgHg");
	this.shape_46.setTransform(222.475,750.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AggA6IAAhxIAVAAIAAAMQAFgIADgCQAEgEAGAAQANAAAGANQAHAMAAATQAAAUgIALQgGALgMAAQgEAAgEgDQgFgCgDgFIAAAngAgGgdQgDAFAAALQAAAJADAEQADAFADAAQAEAAADgFQADgDAAgLQAAgKgDgFQgDgFgEAAQgDAAgDAFg");
	this.shape_47.setTransform(215,751.575);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAcArIAAgvQAAgGgCgCQgCgEgEAAQgEAAgCADQgDAFAAAIIAAArIgVAAIAAgtIgBgHIgCgGQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgEAAgCADQgDAFAAAIIAAArIgXAAIAAhTIAWAAIAAANQAEgIAFgDQAFgDAGgBQAIABADADQAEADADAIQAFgIAEgEQAFgDAGAAQAKAAAFAIQAGAJAAARIAAAzg");
	this.shape_48.setTransform(205.225,750);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgWAhQgLgNAAgUQAAgRAJgNQAJgNAPAAQASAAAJAPQAHAMAAAQQAAATgJAMQgJANgQAAQgNAAgJgLgAgHgPQgDAFAAAKQAAALADAGQADAFAEAAQAFAAADgFQADgGAAgLQAAgKgDgFQgDgGgFABQgEgBgDAGg");
	this.shape_49.setTransform(195.625,750.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgSA2QgJgGgGgNQgGgOAAgVQAAgcALgPQAKgPAUAAQAPAAAJAJQAJAIAEASIgWAHIgDgHQgCgEgDgDQgDgCgEAAQgIAAgEAKQgDAHgBAPQAAATAFAHQAEAHAHAAQAGAAAEgGQAEgGACgLIAWAKQgCANgFAJQgFAIgHAFQgHAEgLAAQgMAAgJgFg");
	this.shape_50.setTransform(187.4,748.525);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgLASQAGgEADgEQACgFAAgFIgLAAIAAgfIAXAAIAAAaQAAAOgEAIQgEAJgKAGg");
	this.shape_51.setTransform(180.925,754.275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgcAkQgGgHABgKQAAgJADgGQAFgFALgDIAPgFIAIgEQAAgGgCgCQgCgDgDAAQgFAAgDADQgCACgCAFIgWgDQACgIACgEQADgFADgDIAJgEQAGgBAGgBQAJAAAHACQAGACAEAFQADADACAHIABAMIAAAkIABAJIACAJIgVAAIgCgGIAAgFQgFAHgEACQgGADgIABQgLAAgFgIgAAAAHQgHACgBACQgDADAAADQAAAEADADQABACAEAAQADgBADgCQAEgCABgEIABgKIAAgFIgJAFg");
	this.shape_52.setTransform(175.15,750.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgFA3QgEgDgCgGQgCgGAAgOIAAgcIgJAAIAAgYIAJAAIAAgPIAWgQIAAAfIANAAIAAAYIgNAAIAAAcQAAAFABACQAAAAABABQAAABAAAAQABAAAAABQABAAAAAAIAIgCIACAWQgJACgIAAQgHAAgEgDg");
	this.shape_53.setTransform(168.75,748.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgjIAAgVIAVAAIAAAVg");
	this.shape_54.setTransform(164.275,748.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgZAjQgGgJAAgQIAAg0IAXAAIAAAtQAAAIADAEQACADADAAQADgBADgEQADgEAAgKIAAgpIAXAAIAABTIgWAAIAAgOQgFAIgEAEQgEADgHABQgKgBgFgHg");
	this.shape_55.setTransform(158.525,750.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAJA6IAAgnQgCAFgFACQgEADgFAAQgLAAgHgLQgHgLAAgTQAAgOAEgKQACgLAHgFQAFgFAHAAQAGAAAEAEQAEACAEAIIAAgMIAWAAIAABxgAgGgdQgDAFAAALQAAAKACADQAEAFADAAQAEAAADgFQADgEAAgJQAAgLgDgFQgDgFgEAAQgDAAgDAFg");
	this.shape_56.setTransform(150.7,751.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdAqIAAgVIAdgnIgaAAIAAgXIA2AAIAAATIgdAqIAfAAIAAAWg");
	this.shape_57.setTransform(143.775,750.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgSAnQgGgFgFgKQgFgKABgOQAAgTAJgMQAIgLAQgBQAMABAIAFQAHAGAEAJQAEALgBAPIAAAEIgsAAQABAIACADQADAFAFABQADAAADgDIAEgFIAWADQgEAMgIAGQgHAFgOABQgLgBgHgEgAgHgRQgDAEAAAGIAWAAQgBgJgDgDQgDgFgEAAQgFAAgDAHg");
	this.shape_58.setTransform(136.8,750.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAcArIAAgvQAAgGgCgCQgCgEgEAAQgEAAgCADQgDAFAAAIIAAArIgVAAIAAgtIgBgHIgCgGQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgEAAgCADQgDAFAAAIIAAArIgXAAIAAhTIAWAAIAAANQAEgIAFgDQAFgDAGgBQAIABADADQAEADADAIQAFgIAEgEQAFgDAGAAQAKAAAFAIQAGAJAAARIAAAzg");
	this.shape_59.setTransform(127.175,750);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgcAkQgGgHAAgKQAAgJAFgGQAEgFAKgDIAQgFIAIgEQAAgGgCgCQgBgDgFAAQgEAAgDADQgCACgCAFIgVgDQABgIACgEQADgFAEgDIAJgEQAFgBAGgBQAKAAAGACQAGACAEAFQADADACAHIACAMIAAAkIAAAJIACAJIgVAAIgCgGIgBgFQgEAHgFACQgFADgHABQgLAAgGgIgAAAAHQgGACgDACQgBADAAADQAAAEABADQACACAEAAQADgBADgCQADgCACgEIABgKIAAgFIgJAFg");
	this.shape_60.setTransform(117.6,750.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgNA5IgehxIAaAAIASBRIAShRIAZAAIgeBxg");
	this.shape_61.setTransform(109.8,748.525);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF0000").ss(1,1,1).p("EAmSgE1IKlAAIArAAIAALPIrQAAIAAo4gEgxhgGZINmAAIAAE0IAAGRItmAAIAApFg");
	this.shape_62.setTransform(502,130.05);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#66CC33").ss(1,1,1).p("EA5xgIzIG6AAIFXAAIAAMQIsRAAIAAqJgAUlg/ILfAAIAAAEIAALaIrfAAIAAp6gA3yjfIOsAAIAAE8IAAFDIusAAIAAmPgEhGBgKeIAAAAIQGAAIAAE8IAAIwIwGAAg");
	this.shape_63.setTransform(495.275,128.45);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("EAuXACgQD8g+D7hJAchGKQDpglDoguEA9IgBtQJhjEJhj+AspIjQO1AqO2hiEhQJgFxQDTBQDSBJEg5fABkQCvAvCvAqEgmbAFwQFjA9FjAq");
	this.shape_64.setTransform(518,83.0195);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("EAmSAGaIAAo4IAAiXIKlAAIArAAIAALPgEgxhAEsIAApFIAAiAINmAAIAAE0IAAGRg");
	this.shape_65.setTransform(502,130.05);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#66CC33").s().p("AUlKfIAAp6IAAhkILfAAIAAAEIAALagA3yGgIAAmPIAAjwIOsAAIAAE8IAAFDgEA5xADdIAAqJIAAiHIG6AAIFXAAIAAMQgEhGBADOIAAtsIAAAAIQGAAIAAE8IAAIwg");
	this.shape_66.setTransform(495.275,128.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},10).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},20).wait(1));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(890.15,684.65);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).to({_off:true},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(516.1,410.1,515.9,351.1);
// library properties:
lib.properties = {
	id: '07A6C150D8B3499EAD30A43E4070AC68',
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