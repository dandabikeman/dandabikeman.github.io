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
	this.shape_5.graphics.f("#FFFFFF").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_5.setTransform(50,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33CC33").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_7.setTransform(50,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_8.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape_4}]},1).wait(1));

	// Squared
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_9.setTransform(50,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_10.setTransform(50,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_11.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_11},{t:this.shape_9}]},1).to({state:[{t:this.shape_11},{t:this.shape_9}]},1).to({state:[{t:this.shape_11},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.PracticeCardMNava = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(10));

	// Label
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ASdHTQAEgEgKhhQgLAAgLAAQAMApAKAqQAFATABgBgASXFuQAIA1AGAvQAdDLAHBCASXIdQAKAJgEhTASXFuQGTAmFWBCQMbCcAADbQAADcsbCbQsbCbxlAAQxkAAsbibQsbibAAjcQAAjbMbicQF0hIG5AcQAAAAABAAQAOABAOABIF905QEjrRJYGMQLsNaDSLmQ/NgIjpBGAxUHCIADgHQAGgIAWgHAsbISIkhhKIgYgGQAHAhEyAvQAFAAAFABIgHgBgAsRITQIhBSW5B6g");
	this.shape.setTransform(548.5,236.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006633").s().p("AremzQEkrSJXGNQLtNZDSLmQ/NgHjqBGg");
	this.shape_1.setTransform(552.3,189.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtXgSIgKgCIkhhKIAHgbQDphGfNAIQAMApAKApQAFAUABgCIAIgBQAdDKAHBDgARTgHQAIgBgDhKIgBgBIABABQADBKgIABIAAAAIAAAAIgCgBIAAAAIAAAAIAAAAIAAAAIACABIAAAAIAAAAg");
	this.shape_2.setTransform(555.5,291.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("A9/FdQsbibAAjaQAAjcMbibQF0hJG5AdIgCAXQAHAiEyAuIADABIAHABQIhBSW5B6QgHhDgdjLIgOhkIAAAAQGTAmFVBDQMcCbAADcQAADascCbQsaCcxlAAQxjAAscicg");
	this.shape_3.setTransform(548.5,323.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AtLgTIfaDMQ25h7ohhRgAtSgTIgDgBIAKABgAyOhkIAYAGIgYgGIACgHQAGgHAXgHIgHAbIEhBKQkygvgHghgARdhlIAAhTQAHBIAAAVQAAAHgBABQABgBAAgHQAAgVgHhIIAOBkIgIABIAAAAQgCAAgEgSgAyOhkIACgXIABAAIAcACQgXAHgGAHIgCAHg");
	this.shape_4.setTransform(554.3,291.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_5.setTransform(411.5,349.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC6666").s().p("AgwBkQhegcg0h4QBJgNASgaQAHgLAEgEQAHgGATAAQAEAAAzAUQAyAUAOAAQAKAAAngKQAngKAWAAIAgAJIAAACQgcBkgkAjQg0AzhEAAQgbAAgggJg");
	this.shape_6.setTransform(392.7,428.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3300").s().p("AgRBzQgGgUhBAAIgrAPQgwAPhXAAIgBg9QgBhpAGhTIAJAAIBaAAQAKAhAbAFQAKACBYAAQAiAABQgZIBLgZQANAAARAKQASAKAMAAQARAAALgGQAHgEAMgKQgCBpgQCUIgigEQgcAAhCAKQhCAKgKAAQg6AAgFgUg");
	this.shape_7.setTransform(393.4,371.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AjJBWQgYhEgOhgIAmgGQA0gVAagGQAKgDARAAQAMAABBAKQBAAKANAAQATAAA1gGQA1gGAtgIIAMADQgSB0gVBPIghgJQgWAAgnAKQgnAKgKAAQgOAAgygUQgzgUgEAAQgTAAgHAGQgEAEgHALQgSAahJANIgMgdg");
	this.shape_8.setTransform(392.2,412.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF66").s().p("AiaBgQgRhCgNAFQgEABgFhYIAJAAQA5hQAFgEQAGgGAWAAQAJAAApAUQApAUANAAQAVAAAdgUQAegUAPAAQAPAAASAGIAlAOIATABIAAABQgGBWgRA6QgZBTiOAcQgoAIgfAAQhLAAgMgvg");
	this.shape_9.setTransform(638.5,434.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FF0000"],[0,0.165,0.365,0.498,0.667,0.831,1],513,361.1,513,361.1).s().p("A2mGwQgNhagDhzQBWAAAxgPIArgPQBAAAAHAUQAFAUA7AAQAJAABCgKQBDgKAcAAIAiAEIgHBBQgHA8gIA1IAAABIgMgDQgtAIg1AGQg1AGgTAAQgNAAhBgKQhBgKgMAAQgQAAgLADQgaAGg0AVIglAGgAQPCJQA7AAAxgUQAwgUAjAAQADAAA0AZQA0AZADAAQAXAAAjgSQALgGApgaIANAAIgDCqQgOAFgJAFQgQAJgVAzIAAAUQg6AMgqgTQg0gXgcAAQgKAAgkAVQgoAXhAAGIgXABIgIjxgAubi2IAAAAQgDg7gUg2IARgHQAugUAfgxQAZgpAXAAQAUAAAyAUQAzAUAYAAQAYAABJgZIBEgZQAkAAA7AZQA7AZAfAAQAUAAA8gPQA9gPAYAAQAHAABJAUIBKAUQAeAAA8gjQA7gjAuAAQANAABRAtQBRAtAtAAIBUgZQBSgZATAAQANAABcAeQBdAeAMAAQBRAAAHgBQATgDBngaIAfAJIgKAqQgUBZgBBSIxGgBQnaAAmFAoQAGgpgCgog");
	this.shape_10.setTransform(513,361.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0033FF").s().p("AojFeIgmgFQgmgHgegJQh5glAAhYIABgQQADgXAKgWQAqhgCrhsQDjiQFAhVQFBhUDjAZQDjAaAAB5QAAB4jjCQQjjCRlBBUQj0BBi/AAQg7AAg1gGg");
	this.shape_11.setTransform(725.5,263.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF3333").s().p("AjNhdIAAgBIAXAAQA/gHAogWQAlgVAKAAQAcAAAyAXQArATA6gMIAAgUQAVgzAQgJQAJgFANgFIgGEJQgBAogDAjIgTgBIglgOQgSgGgPAAQgPAAgeAUQgdAUgVAAQgNAAgpgUQgpgUgJAAQgWAAgGAGQgFAEg5BQIgJAAQgGhggIjKg");
	this.shape_12.setTransform(638.3,408.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF3399").s().p("AD2CTQgDgWgIgKQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQADAQADATQhDgCiSgSIiXgUQggAAgGACQggANgkALIgQgwQA9j5CmATQCkATA8BwQANAXAJAYQAVA3ACA7IgCAAg");
	this.shape_13.setTransform(395.8,328.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#99FF66").s().p("A0UCWQg7gKgNAAQgdgBgJAFIgXgsQB1hBC9g2QHWiLKYgBQKZABHWCLQC1A0BwA+IgXAtIkVgrQi0gbgIAAQgjgBg8AQQg7APgugBQg0AAhFgdQhGgegiAAQgXgBhGAVQhGATg5ABIhRgHQhGgGgdADQi9ATgZAAQhgAAgvgTQgugVgzABQgQAAhxAeQhwAdgnAAQgNAAhNgKQhOgKgMAAQgxAAiCAkQiCAjhMAAQg/AAg8gKg");
	this.shape_14.setTransform(505.8,267.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#33FF33").s().p("AZuCtQgxgjgfAAQgNAAggAKQghAKgMAAQgQAAgVgKIgRgKIAKgqIAIgaQAlh8B5gOQB5gNBWBYQAOBMAIBcIAAABIgaACQgTAOgYAJQgSAHgJAAQgkAAgxgjgA6KgUIgYhHIh4AAIgIgPIABAAIA5gZQBlgsBYggIA2ATQAVAPAAAcQABARgCAmQACAiAZAZIAEAHQhJAohSApQgegegPgvg");
	this.shape_15.setTransform(475.9,316.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC33FF").s().p("A4wBoQCEhbAAguQgBgIgEgGIAMgEQA4g3AUgKQAKgFAcABQAOAAA7AKQA7AKA/AAQBNAACCgjQCCgkAxAAQAMAABOAKQBNAKANAAQAnAABwgdQBxgeAQAAQAzgBAuAVQAvATBgAAQAYAAC+gTQAdgDBGAGIBRAHQA4gBBHgTQBFgVAYABQAiAABGAeQBFAdA0AAQAtABA8gPQA8gQAiABQAJAACzAbIEWArIAKABIAAARQAABYB5AkIgRAzQg2gEgLAAQgMgBhaALQhaAKgMAAQgeAAhagaQhbgZgnAAQgvAAhPAVQhPATgeABQgXgBhbgsQhagsg0AAQg4gBhPAjQhOAig5ABQgMgBhOgJQhNgLgNAAQgMAAiBALQiCAJgMABQgHAAkbhFQgmgBiCAhQh8AehPgDQhtgGhTAvQg0AdgJAEQgkAPgoABQgUAAg8gPQg8gPgagBQgJABgPAMIgkAdQg8AuhUAWIgHAEQgkg7gGg7g");
	this.shape_16.setTransform(501.7,294);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AgoBTQgWgXgBggQgCgigtgyIgBgFIA4gOQA7gNAngBQA0gCANATQAEAGAAAIQAAAviCBZIgRAMg");
	this.shape_17.setTransform(345.1,296.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990033").s().p("AgfBfQgygegUAAQgSAAgNAHQgTAMg3ALIgJAAIgBgwQABhSAUhYIARAJQAVAKAQAAQAMAAAhgKQAggKANAAQAfAAAwAjQAxAjAkAAQAJAAATgHQAXgIATgPIAagCQAGBLACBWQgLAChCAcQgtAUg0AAQgZAAgxgeg");
	this.shape_18.setTransform(637.7,342.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6699FF").s().p("A+CDOQgfgeAEhAQgVAAgHAHQgEADgFAJQgMAMhOgIQAfgXAqgbQBVg4Bng1IAkAAQgDBBAeAsQAfAwA+AJIADAHQh0AwhiAfQgggBgUgVgAxbAFIAGgDQBUgVA9gvIAjgdQAPgMAKAAQAaAAA8APQA8APATAAQApAAAkgPQAJgEA0gdQBTgvBtAFQBPAEB8gfQCCghAlAAQEbBGAGAAQANAACCgKQCCgKAMAAQANAABNAKQBOAKAMAAQA5AABOgjQBPgjA4AAQA0AABaAtQBbAtAWAAQAeAABQgUQBPgUAuAAQAoAABbAZQBaAZAdAAQANAABagKQBagKAMAAQALAAA2AFQA1AFAWAAIAAAKIAGABQgQBKhWBAQhWhYh5ANQh5ANglB9IgHAaIgggJQhnAagSADQgIABhRAAQgMAAhcgeQhdgegNAAQgSAAhSAZIhVAZQgtAAhRgtQhRgtgNAAQguAAg7AjQg8AjgeAAIhLgUQhIgUgIAAQgYAAg9APQg8APgUAAQgeAAg7gZQg8gZgkAAIhDAZQhIAZgZAAQgYAAgzgUQgygUgUAAQgWAAgaApQgeAxgvAUIgRAHQgJgZgNgYQg8huimgTQilgTg9D5QiohlhDhpg");
	this.shape_19.setTransform(459,315.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0033").s().p("AdPHTQg0gZgDAAQgjAAgwAUQgxAUg7AAIgIjmIAJAAQA3gLATgLQANgIASAAQAUAAAyAeQAyAeAZAAQA0AAAtgTQBCgdALgCQACBZgCBlIgBAUIgNAAQgpAagLAGQgjASgXAAQgDAAg0gZgArhFoQgagFgKghIhaAAIgJAAIAAgBQAHhnARhFIAAgBIACgJQAGgVAGgRIAPAvIgBAAIgNAEIANgEIABAAQAlgLAggMQAGgDAfAAICZAUQCSASBDACQAIA6gDBcQgLAKgHAEQgMAGgQAAQgMAAgSgKQgRgKgNAAIhMAZQhQAZgiAAQhYAAgLgCgAlTCiIACAAIAAAAQACAogGApQAFg0gDgdgEghNACJQAAgoBfhIQBNAIANgMQAFgJAEgDQAHgHAVAAQgEBAAfAeQAUAVAgABQhIAWg9ANQhFAPgoAAQg7AAAAgfgA5NAgQg+gJgfgvQgegtADhBIgkAAQAVgDAPAAIAAADIAAgDQgPAAgVADQBLgnBTgmIABAAIAHAOIB4AAIAYBIQAQAvAdAeQhCAghIAfIg6AYgAzriCIgEgHQgYgYgDgiQACgmgBgRQAAgdgUgOQgSgNglgGQBWgfBJgTIACAFQAtAyACAjQAAAgAXAXIAFAHIgUANQg0Aig7AhIAAAAIAAAAgEAhEgDtIAAgKQgWAAg2gFIARg0QAeAKAmAGIABARQAAASgEARgA1Uk4QAlAGASANgAwZmGQAvgyBSguIABAAIAXAsQgUAKg5A3IgLADQgNgSg0ACgAeGm/IAXgsIABABQgKAXgDAWg");
	this.shape_20.setTransform(454.4,326.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF3399").s().p("AguCsIAAhUIBdAAIAABUgAgfBAIgTidIAAhOIBlAAIAABOIgUCdg");
	this.shape_21.setTransform(791.1,289.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF3399").s().p("AguCsIAAhUIBdAAIAABUgAgeBAIgUidIAAhOIBlAAIAABOIgTCdg");
	this.shape_22.setTransform(775.1,289.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF3399").s().p("AgvCsIAAhUIBfAAIAABUgAgeBAIgUidIAAhOIBlAAIAABOIgTCdg");
	this.shape_23.setTransform(759.1,289.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF3399").s().p("AgvCsIAAhUIBfAAIAABUgAgfBAIgTidIAAhOIBlAAIAABOIgUCdg");
	this.shape_24.setTransform(743.1,289.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF3399").s().p("AhhBkQgtgmAAg9QAAg4AmglQAnglBBAAQBKAAAmArQAfAkAAAyQAAA5gmAkQgmAlhDAAQg8AAglgegAghgvQgNAPAAAhQAAAhANAPQAOAQATAAQAVAAANgPQANgQAAgiQAAgggNgQQgOgPgTAAQgUAAgOAQg");
	this.shape_25.setTransform(719.1,294.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF3399").s().p("Ah9CqIgHhDQAUAGAaAAQARABAKgJQAKgHAIgUIhpj4IBlAAIAyCmIAwimIBeAAIhjEJQgRAugRAQQgYAWgzAAQgVAAgrgFg");
	this.shape_26.setTransform(689.4,299.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF3399").s().p("Ah3BuQgXgVgBgfQAAgcARgSQARgSAsgIIBGgPQAPgEASgIQAAgRgHgIQgHgGgTAAQgWgBgMAIQgJAGgGAQIhbgJQAGgZAJgNQAKgOASgKQANgHAXgEQAXgEAbAAQApAAAaAFQAaAEASAQQAMAKAHAUQAIATAAARIAABuQAAARABAKQADAKAHAQIhaAAIgHgPIgDgQQgSASgTAIQgYAKgiAAQgsAAgXgUgAgCATQgdAHgIAIQgIAIAAAJQAAAMAIAHQAIAHAPAAQAQAAANgIQANgHAHgMQAFgLAAgSIAAgPQgTAIgVAFg");
	this.shape_27.setTransform(658.6,294.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF3399").s().p("AB0B/IAAiNQAAgQgHgJQgKgNgOAAQgRAAgKANQgKAMAAAbIAAB/IhfAAIAAiIQAAgQgCgGQgDgJgHgGQgIgGgKAAQgQAAgLAMQgLANAAAbIAAB/IhfAAIAAj4IBZAAIAAAlQATgXAUgKQATgJAcAAQAeAAAQAKQASALALAVQAWgZATgIQASgJAbAAQAoAAAXAYQAWAXAAAzIAACbg");
	this.shape_28.setTransform(618.6,294.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF3399").s().p("AhOB1QgcgPgTgeQgSgeAAgpQAAg6AlgkQAmgkBCAAQA0AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQADAYAJALQAOAQAVAAQAOAAANgHQAIgFAJgLIBeAJQgWAmgeAQQgeAQg5AAQgxAAgdgNgAgjg2QgIALgDAWIBdAAQgCgbgMgMQgNgMgUAAQgVgBgOATg");
	this.shape_29.setTransform(562.7,294.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF3399").s().p("AhtCIQgbgmAAg4QAAg9AeghQAdggAuAAQAWAAASAHQARAIAOAOIAAh2IBhAAIAAFWIhaAAIAAglQgSAXgQAJQgTALgaAAQgzAAgagngAgeAAQgKANgBAhQAAAeAMAOQALAPASAAQARAAAMgPQAMgOAAggQAAgegMgOQgMgNgSAAQgRAAgMANg");
	this.shape_30.setTransform(530,290.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF3399").s().p("Ag4CoQgYgGgQgNQgSgNgKgQQgLgQgHgYIBhgLQADAXANANQANALARAAQAUAAANgPQANgPAAgeQAAgegOgPQgNgNgUAAQgOAAgNAGQgKAFgLANIhRgMIAei4IDiAAIAABMIiZAAIgIA0QAPgIAQgDQAPgEAPAAQA0AAAgAfQAgAeAAAwQAAAhgQAfQgRAegfAQQgeARgvAAQghAAgZgHg");
	this.shape_31.setTransform(482.4,290.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF3399").s().p("Ah7B9IAAg+IB4h5IhvAAIAAhBIDmAAIAAA3Ih8B/ICEAAIAABCg");
	this.shape_32.setTransform(437.1,294.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF3399").s().p("AguCsIAAj4IBdAAIAAD4gAguhqIAAhBIBdAAIAABBg");
	this.shape_33.setTransform(415.9,289.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF3399").s().p("AgvCsIAAlXIBfAAIAAFXg");
	this.shape_34.setTransform(399.8,289.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF3399").s().p("AhNB1QgdgPgSgeQgTgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQACAYALALQANAQAWAAQANAAANgHQAIgFAJgLIBeAJQgWAmgfAQQgeAQg4AAQgxAAgcgNgAgjg2QgIALgDAWIBdAAQgDgbgMgMQgMgMgTAAQgWgBgOATg");
	this.shape_35.setTransform(376,294.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF3399").s().p("Ag+CvIAAiyIgjAAIAAhGIAjAAIAAgLQAAgQADgSQADgSAKgMQAIgLARgHQAQgIAfAAQAYAAAxAGIgLA6QgRgDgLAAQgMAAgHAEQgFAFgCAJQgCAFAAARIAuAAIAABGIguAAIAACyg");
	this.shape_36.setTransform(352.2,289.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF3399").s().p("AguCsIAAhUIBdAAIAABUgAgeBAIgUidIAAhOIBlAAIAABOIgTCdg");
	this.shape_37.setTransform(334,289.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF3399").s().p("AgvCsIAAhUIBfAAIAABUgAgeBAIgUidIAAhOIBlAAIAABOIgTCdg");
	this.shape_38.setTransform(318,289.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF3399").s().p("AgvCsIAAhUIBfAAIAABUgAgfBAIgTidIAAhOIBlAAIAABOIgTCdg");
	this.shape_39.setTransform(302,289.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF3399").s().p("AgvCsIAAhUIBeAAIAABUgAgfBAIgTidIAAhOIBlAAIAABOIgUCdg");
	this.shape_40.setTransform(286,289.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#00FF00").ss(1,1,1).p("ABLrFQgqAvgqAxQhVBiAAAGIAAAeQAAACBQBZQBPBYAAAGQAAARg8DKQgdBkgeBkQAABGAYAbQANAPAlAbQBLBPAAFv");
	this.shape_41.setTransform(729.5,149.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#3333CC").ss(1,1,1).p("EA94gmRQhVAAgmBRQgbA6AABWQAAAjA5BaQBBBnAIAbQAGAVAHA1QAHAzAAAUQAAELk5FjQhFBNiZCaQhqBqgJAaEAqqANSQjTBMi9B4QigBmAAAbQAABiFIBLQDeAzHWA5QAPACAPACQHnA6CoAXQAtAGAWADQFIA1AAA5QAABJgtBGQgmA8heBbQhzBrhPBMQgKAJgKAJQibCViGCSEgtdAOYQFYhOFahuQAdgJAcgKQHbibBshsIAAAoQL1BEB9BXQASANAGAPQAFAHADAMQAJAOBNgGEhCtgeTIFAAAQBagTAiAhQAcAbgCBOQgBAwgNCAQgJB/ANBiQAIBCAGALQATAkBLAaQCiA4LGBVIAAA8Qg1DVhpDvQgvBtgMAgQgXBAAAArQAAASgFAhQgCANAAAIQAAAIACAEQAKAYBmARQALACF4A3");
	this.shape_42.setTransform(482,317.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#CC0000").ss(1,1,1).p("AYEmoQB6iaCyj3QCdjYADgDIAAAyIBQAAQD+g7AYgFQDgguBsAAAl6uqIAdAYICWAAQAAgDAFgRQAFgQAAgOQAAgZgygZQgogUgPAAQgeAAgjA8QgMAVgHAPQgLAXAAALQAAANAFAJQAGAJATATAY2GBQAihLAEgMQACgKAAghQABgdgBgGQAAgHgFgDQgxgUgkgZIgUAAQAAAUgFAoQgCARgBANQgCASAAAMAXoD/QgbApgBADQgEAJAAARQAAAcAUAMQAPAKAUAAQAQAAATgGQAKgEAUgKEgmvgd6QAABkhpD8QhBCbgHATQghBVAAAiQAAAlAOAUQAUAeA6AUQBtAmEhAUQBOAGBcAEIAAA8QgFARgIATQgfBLhEBvQhOB6AAAGQAAAcBqA0QBzA5AJANAmPu6IAVAQAmFH5QiXBUhOBqQgzBGAAAoQAAAiAUAXQANAOAgATQAhATAMANQAUAVAAAgQAAAUhGClQhGCkAAAaQAAAUA3AoQA3AoAAAZQAAA3hhCgQhjCjgEA5");
	this.shape_43.setTransform(678,297.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFF66").ss(1,1,1).p("EAusAHHIhQAuIgoAYQAbAoArASQAlAQAhBCQAgBAASC6IAABQQAAAwByAeQBHATDNArQBeAYBKAXQCyA2BAAtQAvAhgRAVQAAAcgMAcQgQAjgCAJAXaKZQhEAfglAnQgZAZAAAKQAABSA8AQQAPAEAaAHQATAIAAAXQAABDhgBBQg1AigYAQQgqAdgPAYQAxAxBmAqQBfAnA2AAIAAAyQguBWiYBlQiUBZgOAOQAZAbBxAfQA5AQBBAQA3nmeQgfAfg5A4QgqAqAAALQAAAUCvApQCvAoAAAJQAAAvg/BKQgtA1hkBaQiWCHgOAOQhWBSggA2QApAJAZAFQAEACAAAnQAAA7hiB3QgyA9g+BCIAfgIQAwgKBRgMEg8zgZ2IBjgNQBmgPATgMQATAAABgKIAAAoQAAAHgyB+QgyB+AAABQAAABACANQALAQAuATQBjArDrAyQBtAXCKAZQCBAXB8AnQAeAJAdAKQBSAcBqApIAUAIQAUALAAAQQAAAWhPCRQhVCegQA8QAOAAB0AZQB0AZByAA");
	this.shape_44.setTransform(510.2,413.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#9933CC").ss(1,1,1).p("AHMmjInzgUQgwAAggAyQgUAfg8CLQgOAihuDtQgkBMAAAqQAAAFAKAJQAKAKAAAQQAAA3gpA8QgYAjg3BQ");
	this.shape_45.setTransform(424,439.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#6699FF").ss(1,1,1).p("AJUqUIAEBRIAyAAQAUgUAAgjQAAgNgFgRQgFgQAAgJQg0gPgMAsQAAABgBABQgGAZABA2AeUJ2QB9B9CEBBQAyAZCKAuQBWAcAdAqQAoA3AACGQAAAGgQCTQgRCegHAnIAAA8QC+AABjANQDPAcBKBZA/F6ZQgKBaAAAeQDeghFgB3QCIAuBgAyQBeAxAAAYQAABzgyCXQgNAlgWA+QgPAwAAAWQAAAjgCAuQABAgAUATQAjAfD2BNEgvLALQIgKAyQAtgSARgbIAcgtQgWAAgvgUQgugUgPAAIAAA8QAKAUANAiQALAdAIALQAVAeBDgO");
	this.shape_46.setTransform(668,273.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#00FFFF").ss(1,1,1).p("EAnjga4QgdgGgbAHEAnjga4IgQApIAABGIBGAAQACgCAWgWQAWgZAEgVQAAAAhLggQgPgGgOgDgAWlIcQgkAzgKA4QgGAcACAUQAAAtAmAlQAWAWBAAlQA+AmAaAZQAqAoAGAzQADAbAEA+QADAgAFANQAIAPAXASQAQANA6AoQAOAKAPBJQAQBOAPATQAaAhBQAnQBJAiAVAsEA0lgGPQC9iDBzhrQA8g5Aug3QgCAkAGAYQAJAoAbAAQBAAABHhHQBGhFAPhGEAytApQQgKAyAAAoQBniDAHg7QAAgCgDgDQgHgFgPAAQgPAAgRAFIgNAFIAAAeEgtOgqpQHCCXBIBbQAbAigEA0QgHBVACARQAFAuAEBCQAHAvAXAWQAbAaBEANQBBAMCNAIQAAA8AKBiQAPCJAZAtQAiA/B0AfQBeAZAugJA0OzNQAABbBeAvQBhAwCVgaEg/CAJEQBGggA7gRQAqgLATAAQgFAqACAMQACAYAQANQAgAaCZANQAVABJqgEQCvABCIAEQFiAJBWAdQgfATgHAaQgCAJAAAkQAAALgCAOQABAIAQADQAFACDcAM");
	this.shape_47.setTransform(529.5,325.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#9966FF").ss(1,1,1).p("AYdEiQgVAigGBBQgEAhABAcQAAA+AiAgQAVAUA2ARQA4ASATAOQAjAZABA0QABAygGBJQgFBGAAAXQADBSBNAgQA8AZA3DAQAkB+AJBNQABALAEAKQAQAxBAAUQApAMBAAIEgh+gYNQAEAWADAyQADAjAIARQAIATAYARQAiAaBCAYQAPAGAPARQAJAKASAXQABACACACQAuA1BUAbQBDAVCUBMQCqBZA3A2");
	this.shape_48.setTransform(670.5,325.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#6633CC").ss(1,1,1).p("AKAkmIgeAyIAAB4IBQAAQAIgIAGgRQAGgRAAgSQAAgQgRgQQgbgZgag1gAqnE7QgahZgCgKQgCgKAAgVQAAgsAngVQAbgOBCgKQBQgMAbgIQA5gRAYgiQBfiEAFg/QgJhEAThM");
	this.shape_49.setTransform(496,477.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#3333FF").ss(1,1,1).p("AlImoQAAAygCCWQgBBRADAdQADAiC9BEQBfAiBmAhQASAMAXBVQAbBkACADQAUArAmAnQA7A9BTAb");
	this.shape_50.setTransform(634.9,141.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#669933").ss(1,1,1).p("Ak/kNQgkBVgKA3QgGAbACANQAAAcAPANQASAQAzAGQBWAMFngFQg7CGBgBBQAZARBBAcQA8AbAXAS");
	this.shape_51.setTransform(241,209.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},10).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},10).wait(10));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.parent = this;
	this.next_btn.setTransform(890.2,684.7);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(788,481.9,715.2,637.8);
// library properties:
lib.properties = {
	id: 'F0DEAA966E624841B3FD8E758FF3EE8E',
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
an.compositions['F0DEAA966E624841B3FD8E758FF3EE8E'] = {
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