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
(lib.PracticeCardAMerida = function(mode,startPosition,loop) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// sombrero
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(0.3,1,1).p("AhEAGQgNAAgIgDQgoAAAAgDQAAgCAogDQAlAAA2AAQA0AAAnAAQAlADAAACQAAADglAAQgnADg0AAQgYAAgWAA");
	this.shape.setTransform(259.4,387.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AXqAQIP7AAIG+AAIBoAiEAnDAdxQGbjrCtp9QAzi8AejeQAqkwgFlRIh2BEEAnAAdxIADAAIJI8/EANfAjpIFhgWIH3ggIMJlCAXqAQIPWdhA9gGYIAFgUA1iFxIB+gRIALgCAzkFgQAGgBAGAAII7hNIFkgxAXqAQIpwAtQgLiNhIjfQhJjfmJufQmIuftThmQtThnEpfPQASB7ALC/QAOEqAjFXA9gGYIH+gnEgugAHUIEOAAIAYAAEgnwAHHICVgJEgnVAm4QgDgCgDgDQiUhth3h6QiVilhei/QhTiigpi/QgFgXgEgXQhDlfBAmrQACgHABgHQAEgaAFgbQAAgDACgGQAYhGCbhpEANfAjpIACAJEgmuAm4MAnwgCcIMdgzMAKLgjZA9gGYMgJwAggInQ/kACvCeMAKwAhLA9gGYIOyeEEgNwAkcMAQdgh+EgjTAG0IFzgc");
	this.shape_1.setTransform(523.2,341.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("Ao+AkIMbgyIACAKIgCgKIFigVIlgAfIgfAog");
	this.shape_2.setTransform(587.4,571.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgngfIAeAAIAxA/QgrgQgkgvg");
	this.shape_3.setTransform(279.6,383);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgsAGIgYAAQgNAAgIgDQgoAAAAgDQAAgCAogDIBbAAIBbAAQAlADAAACQAAADglAAQgnADg0AAIguAAg");
	this.shape_4.setTransform(259.4,387.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF33").s().p("AxRMSQgLi/gSh6Qkp/ONTBmQNSBnGJOeQGJOeBJDfQBIDfALCOIrLBiIgCAAInnBCIljAyIo7BMII7hMIlVAzQhaAMiMANIgBAAIgLABIh+ASQgjlYgOkrg");
	this.shape_5.setTransform(491,235.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("EgvVgMPIEOAAIAXAAIAvAAQA1AAAngDQAkAAAAgDQAAgDgkgEICVgJQAZAJAgAAQApABAlgUIF0gcMgJxAgfgAvjQ4Iuy+DIH9gmIB/gSIALgCIAAABQCNgNBagMIFVg0IFkgxIHmhDMgQeAh9gA0ZuDIALgBIgLABgAB6xFILKhhIJxgtMgKMAjYgEAmLAKNIvW9gIP7AAIG+AAIBoAiIpIc+g");
	this.shape_6.setTransform(528.6,466.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("EgnQATlMAJwggfIOyeDIA+AAMAQdgh8IACAAMAKwAhJIsdAzMgnwACcgEgnVATlIgGgEQiUhuh3h5QiVimhei/QhTiigpi/IgJgtQhDlfBAmqIADgOIAJg1IACgKQAYhFCbhqIHQfjgAXqzCIPWdhIsJFBIn3AgIlhAWgEAwLgSgIB2hEQAFFRgqExQgeDegzC7QitJ8mbDsg");
	this.shape_7.setTransform(523.2,465);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},10).wait(20));

	// pinata
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("EAkYgX5QAngqAHgqQDViEhZheEAkYgX5IAuhUQAWiKlIiKEAkYgX5QFVgHgphnAXlrEIh8hgIjXimEAkYgX5IoQSQQizjyjsjJQhnhXhwhPgEASuAhPIC0h1IEhkTIAHgFIAIgHIF4UlQFmB0iJDMAaKbCIAHgGEAgKAvgQHTB4gvDIEAgKAvgQDLg7EpC9EAaPAxsQgNATgSAVA5HjZIBrizQA0hNA+hIIBJhTQCqi6DEh6IABgBQABgBACgBIAAAAIyaomIIBT4IAAAAIABAAMA2mAAFEAA6g0fMAAAAg/IAABtEghrgXZQgYgSgngQQhlhOg0jSEghrgXZQghgMgegWQiAg2kdgiEghJgXRIgigIEgijAtAQAAASAAASIAAALQgDDFhFBCQgqAnhCgJEgkTAvxQgIBDAwBCQA8BSCYBOEgkTAvxQhTgbiRiWEgijAtvQgHCjhpghEgijAtAQhlBagLBXEgijAtAIIk4pIAHAOQAYA1AbA1MA21gAsA5BWWQgCgEgCgDAzRd0IEEDTIzWL5EghJgXRQhxikEHh+EAOfAj4IEPipEAPHAjmIDniXA7tEMMA7sgAOA7zN7MA8FgBJEAgKAvgIxsro");
	this.shape_8.setTransform(529.2,344.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC00").s().p("A7QjyIAAABIAAgBMA2nAAFQBxDcAuD3Mg7rAANQAtkAB4jlg");
	this.shape_9.setTransform(542.9,347.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A+TAbQAAiqAcihMA7sgANQAfCmAACyQAABwgMBqMg8FABJQgWiNAAiWg");
	this.shape_10.setTransform(543,402.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("ANkYFIABAAIApgSQB6g3DeijQBvhSBWhGIBDhFQBIhLAhgoIABgBIF4UlgA64IkIAGAOQhYjLgjjfMA8FgBJQghEriBEGMg21AAsQgbg1gYg1QAYA1AbA1IAEAHIALATQCGD2DfDVIEEDTIzWL5gA6BvMIoCz4ISaImIgDACIgBABQjEB6iqC6IhJBTQg+BIgzBNIhsCzIAAAAgAWr23QigiZizhtISGovIoQSQQh3i3isikgAvt6bQiWBjiICBQgpAognAoQCqi6DEh6gARY69QBwBPBnBXg");
	this.shape_11.setTransform(535,420.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066CC").s().p("AwZYeQgkgXgkgYIkEjTQjfjViHj2IgKgTIgEgHMA21gAsQhZC1iFCjIgIAHIgHAFIkhETIi1B1IkOCqIgBAAQlpCZmqAAQpGAAnKkcgAQZX3IC1h1IEhkTIAHgFIAIgHIgBABIgHAGIAHgGQghAohIBLIhDBFQhWBGhvBSQjeCjh7A4IDmiYIjmCYIgoASgAX+RjIAAAAgA7bsxIBrizQA0hNA+hIIBJhTQAmgoAqgoQCIiBCWhjIABAAIADgDQAVgOAVgMQGqkIIWgTIBQgBQI/AAHIEXQCzBtCgCZIh8hgIB8BgQCsCkB3C3QAwBJAnBMgAZ0vBQizjyjsjJQDsDJCzDygATV18QhnhXhwhPgAhZ7LIAAhtgAVR0cgAxD4DIAAAAIgDADIADgDg");
	this.shape_12.setTransform(544,404.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},10).to({state:[]},10).wait(10));

	// Label
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_13.setTransform(214.1,713);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhOB1QgcgPgTgeQgSgeAAgpQAAg6AlgkQAmgkBCAAQA0AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQADAXAJAMQAOAQAVAAQAOAAANgHQAIgFAJgKIBeAIQgWAmgeAQQgeAQg5AAQgxAAgdgNgAgjg2QgIALgDAWIBdAAQgCgbgMgNQgNgLgUAAQgVgBgOATg");
	this.shape_14.setTransform(166.7,718.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgIgKgRAAQgPAAgMAOQgLANAAAhIAAB3IhfAAIAAj4IBZAAIAAApQAUgZAVgKQATgLAdAAQAoAAAWAXQAXAYAAAxIAACdg");
	this.shape_15.setTransform(134.6,717.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhOB1QgcgPgTgeQgSgeAAgpQAAg6AlgkQAmgkBCAAQA0AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQADAXAJAMQAOAQAVAAQAOAAANgHQAIgFAJgKIBeAIQgWAmgeAQQgfAQg4AAQgxAAgdgNgAgjg2QgIALgDAWIBdAAQgCgbgMgNQgNgLgUAAQgVgBgOATg");
	this.shape_16.setTransform(102.7,718.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgPQARgPASgGQAcgMAqAAQA9AAAgAWQAgAWANAqIhaALQgEgQgLgHQgLgIgTAAQgXAAgOAQQgPASAAAgQAAAgAPAPQAOAQAWAAQASAAANgKQANgJAGgUIBbAKQgIAdgRAUQgRAVgaALQgbAMgpAAQgnAAgagHg");
	this.shape_17.setTransform(70.7,718.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ah1CQQghgigFg0IBlgGQADAYALANQAQAVAeAAQAWAAANgKQAMgLgBgOQAAgOgLgKQgMgLgpgJQhGgQgegZQgegaAAgoQAAgbAPgXQAPgYAfgNQAggOA0AAQBCAAAjAZQAiAYAGA2IhkAGQgDgYgNgKQgNgLgWAAQgSAAgKAIQgJAIAAALQAAAIAIAHQAHAHAcAGQBFAPAeAPQAeAPAOAWQAOAXAAAcQAAAhgSAcQgTAcggAOQgiAPgxAAQhXAAgigig");
	this.shape_18.setTransform(37.2,713.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AicDRIAAgMIAPAAQAaAAALgPQAIgKAAglIAAkNQAAgfgEgLQgDgHgKgGQgNgHgPAAIgPAAIAAgLIE1AAIAEBbIgKAAQgIgdgLgOQgLgOgPgFQgQgHggAAIhbAAIAACkIBLAAQAaAAAMgLQAMgMAEgiIALAAIAACMIgLAAQAAgYgGgLQgGgMgLgFQgKgHgVAAIhLAAIAACEQAAAgAEAJQADAIAKAGQANAHAOAAIAPAAIAAAMg");
	this.shape_19.setTransform(79.8,123.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_20.setTransform(609.4,316.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgMQgMgLgTgBQgWABgOARg");
	this.shape_21.setTransform(561.6,321.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_22.setTransform(529.6,320.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_23.setTransform(497.6,321.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_24.setTransform(465.6,321.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_25.setTransform(432.1,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},10).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},10).wait(10));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.parent = this;
	this.next_btn.setTransform(890.2,684.7);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(714.1,475.8,789.1,643.9);
// library properties:
lib.properties = {
	id: '9A1A6A341E03634DAD6E8E57E3494190',
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
an.compositions['9A1A6A341E03634DAD6E8E57E3494190'] = {
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