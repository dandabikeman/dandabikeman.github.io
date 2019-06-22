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
(lib.AnimatedCardBDelgado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.next_btn.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}
	this.frame_13 = function() {
		this.stop();
		
		this.next_btn.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}
	this.frame_21 = function() {
		this.stop();
		
		this.next_btn.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(8).call(this.frame_21).wait(18));

	// flags
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7.1,1,1).p("Egl2gLEIA2BAQAoAvAfAdQDIC7DLCLQBtBLB4BBQACABADACIAAAAQA5AfA7AcIABAAQByA2B7AtQEUBnENBUQAYAIAZAIIABAAQAyAQAzAPQDFA7DBAxQADABAEABQABAAAAAAQBjAZBiAXQHMBrFBAyQByASBgAKQBhALBbAKQD+AaDLAPQBvAJBhACQAwABAtgCQBQgBBFgIQD0gbBshZ");
	this.shape.setTransform(780.6,74);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AfUC7QAEAEAEAFQA3BHAiBBQAlBGAaA3QAbA3BOEbQBFD7BFCOQAJARAJARQCJljAfnMQAKiMAFhPQAGhPibArQibArjIABQgwgFg0gEgAOxBbQACACACADQA6BJAjBDQAlBGADBmQADBnBeD6QBfD5BcB0QCYm0hCnXQgBgLAdgOQAcgNiVgiQgGgBgGgCQiTgfj/gWgAGVAiQA9BMAlBFQAkBGAbA3QAaA3BOEcQBOEbBOCPQBsijgLl5QgLl6AcgNQAcgOiUghQiVgikKgXgAXMCeQAZBpAlBFQAkBGAbA3QAaA3BOEbQBFD7BGCOQAJARAIARQCwmsgpoXIAAAAQAvgpiogFQipgEjmgzgA1roLQAQBBgUB5QgVB4AFAjQAEAkgQERQgRERABBnQDplKB6oBQADgMAXgHQAWgHhdg7QhXg1iehBIAJgJIAAgBIAAAAQgMADgLACQgFgCgGgDQABADABADQhUAIAAhIIAAgBIAAAAQgBABAAAAQAAABAAAAQABAAAAgBApEjoQgNgDAOgeQABgCABgDQAhhCAPBXQgaAMgYAGQAAAAgBgBQgogJhfgnQhhgnj1g+QAkBMAQBBQAQBBAQByQAQBxABDvQAADug3B/QEolYC6oxIAAgBQAAAAAAABQglAUgNgCAgfhsQgDgBgEgCQgdgKhagmQhSgii9gaQgvgGg2gGQAoBZARBMQARBMALA9QAMA8ACElQABEmAnCfQDTmaBrm8QACgIASgFQgEBQAUBiQAkCygKgqQgKgqBFEfQBGEfA3BsQCTlKA0pKQgBgLAdgOQAcgNiVghQiTghiigzQgBgBgBAAgAg0AKQAGgCALhNQAEgaACgMQAAgBAAAAQADgagFAZIAAABQgVBpAAANgEghEgQRQACBIgIA8QgJBFgIA3QgIA1hRD/QhRD+gQCQQFTkJCGmrQAFgJAYgBQAYAAhQhSQhJhLiOhpQgLgJgMgJQAAALABAJgA3IpfQgBgEgCgEQgPgghAgkQgxgdhlgrQgqgRgzgVQAEBTgJBFQgJBFgIA2QgJA2hQD+QhRD9gQCQQF7k7D3mLA3FpkIAAAAQAAAAAAAAQgCADgBACQACgBAAgCA1ookQgFABgEAAQADAMADAMIARgUQgHgCgHgDgEgkTgTFQggAMgSATQgKALgGAMQgcA9gIA2QgJA3hPECQhRECgOCSQE8k3CjmDQADgFAKgDQAHgBALAAQADAAABgBQAHgGgcggQgPgSgbgbQgMgMgRgS");
	this.shape_1.setTransform(762.4,125.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AgjglIAdAeQAaAaAPATQgegdgogug");
	this.shape_2.setTransform(547.3,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgLgJIAXAQQgBABAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAQgKgBgHACIgBgTg");
	this.shape_3.setTransform(551.7,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF33CC").s().p("Ah+CNIg8j0QALAqgkiyQgVhiAEhRQAGgBAMhOIAFgnQCjA0CTAhQCUAhgcAOQgcANABAMQg0JJiSFKQg4hshGkfg");
	this.shape_4.setTransform(779.9,168.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC33FF").s().p("AiVBmQgDkkgLg8QgLg+gShMQgQhNgohYIBlAMQDEA7DBAxIAHADQgVBpAAANQgSAFgCAJQhrG7jTGZQgmifgBklg");
	this.shape_5.setTransform(734.3,157.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033CC").s().p("AiiCaQgBjugQhxQgQhygQhCQgQhBgkhMQD1A/BfAmQBgAnAoAKIABAAQANADAlgVIAAAAQi7IykmFXQA3h/AAjug");
	this.shape_6.setTransform(683,138.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AiwCSQARkQgFgjQgEgkAUh4QAVh5gQhBIARgTQCdBABWA2QBdA6gWAHQgXAIgCALQh7IBjoFKQAAhnAQkSg");
	this.shape_7.setTransform(638,123.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AfYRLQhGiNhFj8QhOkbgag3Qgbg3gkhGQglhFgZhoQDmAzCoAEQCpAEgwAqIABAAQApIXiwGrIgRgigEggYgI2QBRj+AIg2QAIg2AJhFQAIg8gDhIQAIgCALAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQCOBpBJBMQBQBSgYAAQgYAAgFAKQiGGrlTEIQAQiQBRj+gAzVp8IAJgBIAOAGIgRAUIgGgZgAy+p3IgOgGIAXgEIAAAAIgJAKIAAAAgAzMp9IAAAAg");
	this.shape_8.setTransform(746.8,134.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AbNMpQhej6gDhnQgDhmgkhGQgkhDg6hJQByARBgALIC8AUIANADQCUAhgcAOQgcANABAMQBBHXiYGzQhchzhfj5gA+fqzQBQkCAIg3QAIg2Acg9QAGgMAKgKQASgUAggMIBUAAIA2BBQAoAvAfAcQAbAggGAGIgYgSIABAUQgKADgCAFQikGDk7E3QAOiSBQkCg");
	this.shape_9.setTransform(706.1,120.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF3333").s().p("AgEBbQhOkagag3Qgbg4gkhFQglhFg9hNQEKAYCUAhQCUAigcANQgcAOALF5QALF5hsCiQhOiPhNkbg");
	this.shape_10.setTransform(829.9,180.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FF66").s().p("EAg+APOQhGiOhFj7QhOkbgag3Qgbg3gkhGQgihBg4hGQAwABAtgBQDHgBCbgrQCbgrgFBPIgPDaQggHMiJFjIgRgigEgimgGoQBRj+AIg2QAJg2AIhFQAJhEgEhUIBeAnQBtBLB4BBIADAHIACgCIAAgCQAABIBUgIIAHAYQj3GLl7E8QAPiPBRj/g");
	this.shape_11.setTransform(792.1,146.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AfWC7QAEAEAEAFQA4BHAiBBQAkBGAbA3QAaA3BOEbQBFD7BGCOQAJARAIARQBhlMAjk0QAjk1ALhSQALhSibArQibArjHABQgwgFg1gEgAOzBbQACACACADQA7BJAjBDQAkBGADBmQADBnBfD6QBeD5BcB0QBom9gQjuQgQjuAjgMQAjgNiUghQgGgBgHgCQiTgfj/gWgAGYAiQA9BMAkBFQAlBGAaA3QAbA3BOEcQBNEbBPCPQAzh9APmLQAPmLAegPQAfgPiVghQiUgikKgXgAXPCeQAZBpAkBFQAlBGAaA3QAbA3BOEbQBFD7BFCOQAJARAJARQCLmRgFoyIAAAAQAvgpiogFQiogEjmgzgA1ooLQAQBBgVB5QgUB4AEAjQAFAkgRERQgQERAABnQC5loBXj3QBWj3AXgIQAWgHhdg7QhWg1iehBIAJgJIAAgBIgBAAQgMADgKACQgGgCgFgDQABADAAADQhUAIAAhIIAAgBIAAAAQAAABAAAAQAAABAAAAQAAAAAAgBApBjoQgNgDAOgeQABgCABgDQAghCAPBXQgkAUgNgCQgBAAAAgBQgogJhggnQhggnj1g+QAkBMAQBBQAPBBARByQAQBxAADvQABDug4B/QDrl2D4oTIAAgBQAAAAgBABQgZAMgYAGAgchsQgDgBgEgCQgdgKhagmQhTgii8gaQgvgGg2gGQAnBZARBMQASBMALA9QALA8ACElQACEmAmCfQCrmaBLjiQBKjiASgFQgDBQAUBiQAjCygJgqQgLgqBFEfQBGEfA4BsQB/lBBIpTQgBgLAcgOQAcgNiUghQiUghiigzQAAgBAAAAQAEgagFAZIAAABQgVBpgBANQAGgCAMhNQAEgaABgMQAAgBgBAAgEghCgQRQACBIgIA8QgIBFgJA3QgIA1hRD/QhRD+gPCQQEOkcDKmYQAFgJAYgBQAYAAhPhSQhJhLiOhpQgMgJgMgJQABALAAAJQAHgBALAAQADAAACgBQAGgGgbggQgQgSgbgbQgMgMgQgSA3FpfQgCgEgBgEQgQggg/gkQgygdhkgrQgqgRg0gVQAEBTgJBFQgIBFgJA2QgIA2hRD+QhRD9gPCQQE/lFEzmBA3DpkIAAAAQAAAAAAAAQgBADgBACQABgBABgCA1lokQgFABgFAAQAEAMADAMIARgUQgHgCgHgDgEgkRgTFQgfAMgTATQgJALgGAMQgdA9gIA2QgIA3hQECQhQECgOCSQETlKBni7QBoi6AJgD");
	this.shape_12.setTransform(762.1,125.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF33CC").s().p("Ah+CNIg8j0QALAqgkiyQgVhiAEhRQAGgBAMhOIAFgnQCjA0CTAhQCUAhgcAOQgcANABAMQhJJSh9FBQg4hshGkfg");
	this.shape_13.setTransform(779.9,168.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC33FF").s().p("AiVBmQgDkkgLg8QgLg+gShMQgQhNgohYIBlAMQDEA7DBAxIAHADQgVBpAAANQgTAFhKDiQhLDiiqGZQgmifgBklg");
	this.shape_14.setTransform(734.3,157.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0033CC").s().p("AiiCaQgBjugQhxQgQhygQhCQgQhBgkhMQD1A/BfAmQBgAnAoAKIABAAQANADAlgVIAAAAQj4ITjpF2QA3h/AAjug");
	this.shape_15.setTransform(683,138.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AiwCSQARkQgFgjQgEgkAUh4QAVh5gQhBIARgTQCdBABWA2QBdA6gWAHQgXAIhWD4QhWD2i5FoQAAhnAQkSg");
	this.shape_16.setTransform(638,123.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AfYRLQhGiNhFj8QhOkbgag3Qgbg3gkhGQglhFgZhoQDmAzCoAEQCpAEgwAqIABAAQAFIyiMGQIgRgigEggYgI2QBRj+AIg2QAIg2AJhFQAIg8gDhIQAIgCALAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQCOBpBJBMQBQBSgYAAQgYAAgFAKQjLGXkOEcQAQiQBRj+gAzVp8IAJgBIAOAGIgRAUIgGgZgAy+p3IgOgGIAXgEIAAAAIgJAKIAAAAgAzMp9IAAAAg");
	this.shape_17.setTransform(746.8,134.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF3333").s().p("AgDBbQhOkagag3Qgbg4gkhFQglhFg9hNQEKAYCUAhQCUAhgeAPQgfAQgPGLQgPGKgzB8QhOiPhNkbg");
	this.shape_18.setTransform(829.8,180.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AbQMpQhfj6gDhnQgChmglhGQgjhDg7hJQByARBgALIC8AUIANADQCUAhgjANQgjAMAQDuQAQDuhoG8Qhchzhej5gA+dqzQBQkCAIg3QAJg2Acg9QAGgMAJgKQATgUAfgMIBUAAIA2BBQApAvAeAcQAbAggGAGIgYgSIABAUQgJADhoC6QhnC7kTFKQAOiSBQkCg");
	this.shape_19.setTransform(705.9,120.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66FF66").s().p("EAhAAPOQhFiOhFj7QhOkbgbg3Qgag3glhGQgihBg3hGQAwABAsgBQDIgBCbgrQCbgrgLBSQgLBSgjE0QgjE1hhFLIgSgigEgijgGoQBQj+AJg2QAIg2AJhFQAJhEgEhUIBdAnQBuBLB3BBIADAHIACgCIABgCQAABIBUgIIAGAYQkzGBk/FGQAQiPBRj/g");
	this.shape_20.setTransform(791.9,146.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AfWC7QAEAEAEAFQA4BHAiBBQAkBGAQBCQAQBBBKEKQBLELAxBGQAxBFAIARQBhlMAjk0QAjk1ALhSQALhSibArQibArjHABQgwgFg1gEgAOzBbQACACACADQAzBVAXBcQAXBbAEBZQAEBaBpDuQBpDvBmBqQBom9gQjuQgQjuAjgMQAjgNiUghQgGgBgHgCQiTgfj/gWgAGYAiQA9BMAkBFQAlBGARBDQASBDBQEYQBQEYBcB+QAzh9APmLQAPmLAegPQAfgPiVghQiUgikKgXgAXPCeQAZBpAkBFQAlBFAUBTQAVBSBLEDQBLEDAsA9QArA8AJARQCLmRgFoyIAAAAQAvgpiogFQiogEjmgzgA1ooLQAQBBgXB7QgYB7gKAzQgLAzABD+QACEAAABnQC5loBXj3QBWj3AXgIQAWgHhdg7QhWg1iehBIAJgJIAAgBIgBAAQgMADgKACQgGgCgFgDQABADAAADQhUAIAAhIIAAgBIAAAAQAAABAAAAQAAABAAAAQAAAAAAgBApBjoQgNgDAOgeQABgCABgDQAghCAPBXQgkAUgNgCQgBAAAAgBQgogJhggnQhggnj1g+QAkBMAQBBQAPBBgKCaQgLCZAXDNQAYDMgwBzQDrl2D4oTIAAgBQAAAAgBABQgZAMgYAGAgchsQgDgBgEgCQgdgKhagmQhTgii8gaQgvgGg2gGQAnBZARBMQASBMACBAQACBAgFEpQgGEoBHCSQCrmaBLjiQBKjiASgFQgKBSAPCNQAPCOAAgjQABgkBGEdQBHEeBBBZQB/lBBIpTQgBgLAcgOQAcgNiUghQiUghiigzQAAgBAAAAQAEgagFAZIAAABQgVBpgBANQAGgCAMhNQAEgaABgMQAAgBgBAAgEghCgQRQACBIgIA8QgIBGgfAoQgfAog9EKQg9ELgKCTQEOkcDKmYQAFgJAYgBQAYAAhPhSQhJhLiOhpQgMgJgMgJQABALAAAJQAHgBALAAQADAAACgBQAGgGgbggQgQgSgbgbQgMgMgQgSA3FpfQgCgEgBgEQgQggg/gkQgygdhkgrQgqgRg0gVQAEBTgMBEQgMBDgbAuQgbAvg7EHQg7EHgPCPQE/lFEzmBA3DpkIAAAAQAAAAAAAAQgBADgBACQABgBABgCA1lokQgFABgFAAQAEAMADAMIARgUQgHgCgHgDgEgkRgTFQgfAMgTATQgJALgGAMQgdA9gIA2QgIA3hQECQhQECgOCSQFAmcBUihQBUigADAb");
	this.shape_21.setTransform(762.1,125.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF33CC").s().p("AiGCiQhHkdgBAkQgBAjgPiOQgPiNALhTQAGgBAMhOIAFgnQCjA0CTAhQCUAhgcAOQgcANABAMQhJJSh+FBQhAhZhHkdg");
	this.shape_22.setTransform(779.7,168.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC33FF").s().p("AivBwQAFkngChAQgChBgShMQgQhNgohYIBlAMQDEA7DBAxIAHADQgVBpAAANQgTAFhKDiQhLDiiqGZQhHiRAGkpg");
	this.shape_23.setTransform(734.3,157.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0033CC").s().p("AjBDIQgYjMALiaQALiZgQhCQgQhBgkhMQD1A/BfAmQBgAnAoAKIABAAQANADAlgVIAAAAQj4ITjpF2QAvhzgXjMg");
	this.shape_24.setTransform(683,138.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009900").s().p("AjBCkQgBj+ALgzIAiiuQAXh7gQhBIARgTQCdBABWA2QBdA6gWAHQgWAIhXD4QhWD2i5FoIgClng");
	this.shape_25.setTransform(637.9,123.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("Ae1QgQgsg9hLkDQhLkDgVhSQgUhSgkhGQglhFgZhoQDmAzCoAEQCpAEgwAqIABAAQAFIyiMGQQgJgQgrg9gEggygJFQA9kLAfgoQAfgoAJhFQAIg8gDhIQAIgCALAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQCOBpBJBMQBQBSgYAAQgYAAgFAKQjLGXkOEcQAKiTA9kKgAzVp8IAJgBIAOAGIgRAUIgGgZgAy+p3IgOgGIAXgEIAAAAIgJAKIAAAAgAzMp9IAAAAg");
	this.shape_26.setTransform(746.8,134.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF3333").s().p("AgTBvQhQkWgRhDQgShEgkhFQglhFg9hNQEKAYCUAhQCUAhgeAPQgfAQgPGLQgPGKgzB8Qhbh+hQkYg");
	this.shape_27.setTransform(829.8,180.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6600").s().p("Aa7M9QhpjugEhaQgEhZgXhbQgXhcgzhVQByARBgALIC8AUIANADQCUAhgjANQgjAMAQDuQAQDuhoG8QhlhphqjvgA+dqzQBQkCAIg3QAJg2Acg9QAGgMAJgKQATgUAfgMIBUAAIA2BBQApAvAeAcQAbAggGAGIgYgSIABAUQgDgbhUCgQhUChlAGcQAOiSBQkCg");
	this.shape_28.setTransform(705.9,120.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#66FF66").s().p("EAgYAOaQgxhGhKkKQhKkKgQhCQgQhCglhGQgihBg3hGQAwABAsgBQDIgBCbgrQCbgrgLBSQgLBSgjE0QgjE1hhFLQgJgQgxhGgEgi5gGwQA6kIAbguQAbgvANhDQAMhDgEhUIBdAnQBuBLB3BBIADAHIACgCIABgCQAABIBUgIIAGAYQkzGBk/FGQAQiPA7kHg");
	this.shape_29.setTransform(791.9,146.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AfWC7QAEAEAEAFQA4BHAMBIQANBIAWBPQAXBPBYD8QBYD7AzBDQA0BCAIARQBhlMAjk0QAjk1ALhSQALhSibArQibArjHABQgwgFg1gEgAOzBbQACACACADQAuBkASBmQASBnAMBHQALBHBpDuQBpDvBmBqQBom9gQjuQgQjuAjgMQAjgNiUghQgGgBgHgCQiTgfj/gWgAGYAiQA9BMAkBFQAlBGANBjQAMBjBVD8QBUD8BdB2QAzh9APmLQAPmLAegPQAfgPiVghQiUgikKgXgAXPCeQAXBqAcBPQAcBOARBjQAQBjBXDtQBWDsAuA5QAtA4AJARQDBltg7pWIAAAAQAvgpiogFQiogEjmgzgAwclzQgSgUg1giQhWg1iehBIAJgJIAAgBIgBAAQgMADgKACQgGgCgFgDQABADAAADQhUAIAAhIIAAgBIAAAAQAAABAAAAQAAABAAAAQAAAAAAgBApBjoQgogJhggnQhggnj1g+QABAFABAFAwYlaQABgBAAgBQAIgIgNgPQACANACAMQAMBDAIA2QAKBFAFCQQAFCQAXDNQAYDMgwBzQERlRDSo4IAAgBQAAAAgBABQgkAUgNgCQgBAAAAgBQgNgDAOgeQABgCABgDQAghCAPBXQgZAMgYAGAgchsQgDgBgEgCQgdgKhagmQhTgii8gaQgvgGg2gGQAnBZgGA+QgGA/AYBMQAXBNgEEpQgDEqBHCSQCrmaBLjiQBKjiASgFQgKBSANCSQAOCRgHgMQgGgNBOECQBQECBBBaQB/kvBIplQgBgLAcgOQAcgNiUghQiUghiigzQAAgBAAAAQAEgagFAZIAAABQgVBpgBANQAGgCAMhNQAEgaABgMQAAgBgBAAgEghCgQOQgCBIgYBIQgZBJgNAfQgMAfg9EKQg9ELgKCTQEukUBcjTQBcjUAUgBQATgBhPhTQhJhLiOhpQgMgJgMgJQABALAAAJQAAACAAABQABgCAAgBQACgEgDAEQABAAAAAAQAHgBAKAAQADAAACgBQAGgGgbggQgQgSgbgbQgMgMgQgSA3FpfQgCgEgBgEQgQggg/gkQgygdhkgrQgqgRg0gVQAABRgXA7QgYA8gOA3QgNA4g7EHQg7EHgPCPQFmk7EMmLQgdA7gTB3QgUB3AIA6QAIA6ABD+QACEAAABnQDDlUBXj2QBUjuATgZA3DpkIAAAAQAAAAAAAAQgBADgBACQABgBABgCA1lokQgFABgFAAQAEAMADAMIARgUQgHgCgHgDgEgkRgTFQgfAMgTATQgJALgGAMQgdA9gIA2QgIA3hQECQhQECgOCSQFkmNBJilQA2h4AIgV");
	this.shape_30.setTransform(762.1,125.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgLgJIAXAQQgBABAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAQgJgBgHACQACgFgDAFIgBgTg");
	this.shape_31.setTransform(551.7,20.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF33CC").s().p("AiPC8QhPkBAGANQAHAMgOiRQgOiSALhTQAGgBAMhOIAFgnQCjA0CTAhQCUAhgcAOQgcANABAMQhJJkh+EvQhAhahQkCg");
	this.shape_32.setTransform(779.7,168.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC33FF").s().p("AixBvQADkpgXhNQgYhNAGg+QAHg/gohYIBlAMQDEA7DBAxIAHADQgVBpAAANQgTAFhKDiQhLDiiqGZQhHiRAEkqg");
	this.shape_33.setTransform(734.3,157.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0033CC").s().p("AjBDIQgYjMgFiRQgEiQgLhFIgUh5IACgCQAHgHgNgQIgCgKQD1A/BfAmQBgAnAoAKIABAAQANADAlgVIAAAAQjSI5kPFQQAvhzgXjMg");
	this.shape_34.setTransform(683,138.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009900").s().p("Ai9CkQgBj+gIg6QgIg6AUh3QATh3Adg7IARgTQCdBABWA2QA2AhARAUQANAPgIAIIgBACIgEgZIAEAZQgTAZhUDuQhXD2jCFUIgClng");
	this.shape_35.setTransform(637.5,123.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF00").s().p("AexQkQgtg5hXjsQhWjsgRhkQgRhjgchOQgbhOgYhqQDmAzCpAEQCoAEgvAqIAAAAQA7JVjCFtQgIgQgug5gEgg0gJFQA9kLANgfQAMgfAZhIQAZhJAChIIABgCIgBACIAAgCIABAAQAHgCAKAAQABAAAAAAQABAAABAAQAAAAABAAQAAgBAAAAQCOBpBJBMQBQBSgUABQgTAChcDTQhcDUkvETQAKiTA9kKgAzXp8IAJgBIAOAGIgRAUIgGgZgAzAp3IgOgGIAXgEIAAAAIgJAKIAAAAgAzOp9IAAAAg");
	this.shape_36.setTransform(747,134.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF3333").s().p("AgYCTQhVj6gMhkQgNhjgkhFQglhFg9hNQEKAYCUAhQCUAhgeAPQgfAQgPGLQgPGKgzB8Qhdh2hTj8g");
	this.shape_37.setTransform(829.8,180.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6600").s().p("Aa7M9QhpjugLhHQgLhHgThnQgShmguhkQByARBgALIC8AUIANADQCUAhgjANQgjAMAQDuQAQDuhoG8QhlhphqjvgA+dqzQBQkCAIg3QAJg2Acg9QAGgMAJgKQATgUAfgMIBUAAIA2BBQApAvAeAcQAbAggGAGIgYgSIABAUQADgEgCAEIgBAAIAAADQgIAVg2B4QhJCllkGNQAOiSBQkCg");
	this.shape_38.setTransform(705.9,120.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#66FF66").s().p("EAgWAOdQgzhDhYj7QhYj7gXhQQgXhPgMhIQgNhIg3hGQAwABAsgBQDIgBCbgrQCbgrgLBSQgLBSgjE0QgjE1hhFLQgJgQgzhDgEgi5gGwQA6kIAOg3QANg4AYg7QAYg8AAhRIBdAnQBuBLB3BBIADAHIACgCIABgCQAABIBUgIIAGAYQkLGLlnE8QAQiPA7kHg");
	this.shape_39.setTransform(791.9,146.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AfUC7QAEAEAEAFQA3BHAiBBQAlBGAaA3QAbA3BOEbQBFD7BFCOQAJARAJARQCJljAfnMQAKiMAFhPQAGhPibArQibArjIABQgwgFg0gEgAOxBbQACACACADQA6BJAjBDQAlBGADBmQADBnBeD6QBfD5BcB0QCYm0hCnXQgBgLAdgOQAcgNiVgiQgGgBgGgCQiTgfj/gWgAGVAiQA9BMAlBFQAkBGAbA3QAaA3BOEcQBOEbBOCPQBsijgLl5QgLl6AcgNQAcgOiUghQiVgikKgXgAXMCeQAZBpAlBFQAkBGAbA3QAaA3BOEbQBFD7BGCOQAJARAIARQCwmsgpoXIAAAAQAvgpiogFQipgEjmgzgA1roLQAQBBgUB5QgVB4AFAjQAEAkgQERQgRERABBnQDplKB6oBQADgMAXgHQAWgHhdg7QhXg1iehBIAJgJIAAgBIAAAAQgMADgLACQgFABgEAAQADAMADAMIARgUQgHgCgHgDQgFgCgGgDQABADABADQhUAIAAhIIAAgBIAAAAQAAAAAAAAQgBABAAAAQAAABAAAAQABAAAAgBApEjoQgNgDAOgeQABgCABgDQAhhCAPBXQglAUgNgCQAAAAgBgBQgogJhfgnQhhgnj1g+QAkBMAQBBQAQBBAQByQAQBxABDvQAADug3B/QEolYC6oxIAAgBQAAAAAAABQgaAMgYAGAgfhsQgDgBgEgCQgdgKhagmQhSgii9gaQgvgGg2gGQAoBZARBMQARBMALA9QAMA8ACElQABEmAnCfQDTmaBrm8QACgIASgFQgEBQAUBiQAkCygKgqQgKgqBFEfQBGEfA3BsQCTlKA0pKQgBgLAdgOQAcgNiVghQiTghiigzQAAgBAAAAQADgagFAZIAAABQgVBpAAANQAGgCALhNQAEgaACgMQgBgBgBAAgEghEgQRQACBIgIA8QgJBFgIA3QgIA1hRD/QhRD+gQCQQFTkJCGmrQAFgJAYgBQAYAAhQhSQhJhLiOhpQgLgJgMgJQAAALABAJgA3IpfQgBgEgCgEQgPgghAgkQgxgdhlgrQgqgRgzgVQAEBTgJBFQgJBFgIA2QgJA2hQD+QhRD9gQCQQF7k7D3mLA3FpkIAAAAQgCADgBACQACgBAAgCEgkTgTFQggAMgSATQgKALgGAMQgcA9gIA2QgJA3hPECQhRECgOCSQE8k3CjmDQADgFAKgDQAHgBALAAQADAAABgBQAHgGgcggQgPgSgbgbQgMgMgRgS");
	this.shape_40.setTransform(762.4,125.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFF00").s().p("AfYRLQhGiNhFj8QhOkbgag3Qgbg3gkhGQglhFgZhoQDmAzCoAEQCpAEgwAqIABAAQApIXiwGrIgRgigEggYgI2QBRj+AIg2QAIg2AJhFQAIg8gDhIQAIgCALAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQCOBpBJBMQBQBSgYAAQgYAAgFAKQiGGrlTEIQAQiQBRj+gAzVp8IAJgBIAXgEIAAAAIgJAKIgOgGIAOAGIgRAUIgGgZg");
	this.shape_41.setTransform(746.8,134.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AfWC7QAEAEAEAFQA4BHAiBBQAkBGAbA3QAaA3BOEbQBFD7BGCOQAJARAIARQBhlMAjk0QAjk1ALhSQALhSibArQibArjHABQgwgFg1gEgAOzBbQACACACADQA7BJAjBDQAkBGADBmQADBnBfD6QBeD5BcB0QBom9gQjuQgQjuAjgMQAjgNiUghQgGgBgHgCQiTgfj/gWgAGYAiQA9BMAkBFQAlBGAaA3QAbA3BOEcQBNEbBPCPQAzh9APmLQAPmLAegPQAfgPiVghQiUgikKgXgAXPCeQAZBpAkBFQAlBGAaA3QAbA3BOEbQBFD7BFCOQAJARAJARQCLmRgFoyIAAAAQAvgpiogFQiogEjmgzgA1ooLQAQBBgVB5QgUB4AEAjQAFAkgRERQgQERAABnQC5loBXj3QBWj3AXgIQAWgHhdg7QhWg1iehBIAJgJIAAgBIgBAAQgMADgKACQgFABgFAAQAEAMADAMIARgUQgHgCgHgDQgGgCgFgDQABADAAADQhUAIAAhIIAAgBIAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAgBApBjoQgNgDAOgeQABgCABgDQAghCAPBXQgZAMgYAGQgBAAAAgBQgogJhggnQhggnj1g+QAkBMAQBBQAPBBARByQAQBxAADvQABDug4B/QDrl2D4oTIAAgBQAAAAgBABQgkAUgNgCAgchsQgDgBgEgCQgdgKhagmQhTgii8gaQgvgGg2gGQAnBZARBMQASBMALA9QALA8ACElQACEmAmCfQCrmaBLjiQBKjiASgFQgDBQAUBiQAjCygJgqQgLgqBFEfQBGEfA4BsQB/lBBIpTQgBgLAcgOQAcgNiUghQiUghiigzQAAgBAAAAQAEgagFAZgAgyAKQAGgCAMhNQAEgaABgMQAAgBgBAAQgVBpgBANgEghCgQRQACBIgIA8QgIBFgJA3QgIA1hRD/QhRD+gPCQQEOkcDKmYQAFgJAYgBQAYAAhPhSQhJhLiOhpQgMgJgMgJQABALAAAJQAHgBALAAQADAAACgBQAGgGgbggQgQgSgbgbQgMgMgQgSA3FpfQgCgEgBgEQgQggg/gkQgygdhkgrQgqgRg0gVQAEBTgJBFQgIBFgJA2QgIA2hRD+QhRD9gPCQQE/lFEzmBA3DpkIAAAAQgBADgBACQABgBABgCEgkRgTFQgfAMgTATQgJALgGAMQgdA9gIA2QgIA3hQECQhQECgOCSQETlKBni7QBoi6AJgD");
	this.shape_42.setTransform(762.1,125.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("AfYRLQhGiNhFj8QhOkbgag3Qgbg3gkhGQglhFgZhoQDmAzCoAEQCpAEgwAqIABAAQAFIyiMGQIgRgigEggYgI2QBRj+AIg2QAIg2AJhFQAIg8gDhIQAIgCALAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQCOBpBJBMQBQBSgYAAQgYAAgFAKQjLGXkOEcQAQiQBRj+gAzVp8IAJgBIAXgEIAAAAIgJAKIgOgGIAOAGIgRAUIgGgZg");
	this.shape_43.setTransform(746.8,134.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AfWC7QAEAEAEAFQA4BHAiBBQAkBGAQBCQAQBBBKEKQBLELAxBGQAxBFAIARQBhlMAjk0QAjk1ALhSQALhSibArQibArjHABQgwgFg1gEgAOzBbQACACACADQAzBVAXBcQAXBbAEBZQAEBaBpDuQBpDvBmBqQBom9gQjuQgQjuAjgMQAjgNiUghQgGgBgHgCQiTgfj/gWgAGYAiQA9BMAkBFQAlBGARBDQASBDBQEYQBQEYBcB+QAzh9APmLQAPmLAegPQAfgPiVghQiUgikKgXgAXPCeQAZBpAkBFQAlBFAUBTQAVBSBLEDQBLEDAsA9QArA8AJARQCLmRgFoyIAAAAQAvgpiogFQiogEjmgzgA1ooLQAQBBgXB7QgYB7gKAzQgLAzABD+QACEAAABnQC5loBXj3QBWj3AXgIQAWgHhdg7QhWg1iehBIAJgJIAAgBIgBAAQgMADgKACQgFABgFAAQAEAMADAMIARgUQgHgCgHgDQgGgCgFgDQABADAAADQhUAIAAhIIAAgBIAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAgBApBjoQgNgDAOgeQABgCABgDQAghCAPBXQgZAMgYAGQgBAAAAgBQgogJhggnQhggnj1g+QAkBMAQBBQAPBBgKCaQgLCZAXDNQAYDMgwBzQDrl2D4oTIAAgBQAAAAgBABQgkAUgNgCAgchsQgDgBgEgCQgdgKhagmQhTgii8gaQgvgGg2gGQAnBZARBMQASBMACBAQACBAgFEpQgGEoBHCSQCrmaBLjiQBKjiASgFQgKBSAPCNQAPCOAAgjQABgkBGEdQBHEeBBBZQB/lBBIpTQgBgLAcgOQAcgNiUghQiUghiigzQAAgBAAAAQAEgagFAZgAgyAKQAGgCAMhNQAEgaABgMQAAgBgBAAQgVBpgBANgEghCgQRQACBIgIA8QgIBGgfAoQgfAog9EKQg9ELgKCTQEOkcDKmYQAFgJAYgBQAYAAhPhSQhJhLiOhpQgMgJgMgJQABALAAAJQAHgBALAAQADAAACgBQAGgGgbggQgQgSgbgbQgMgMgQgSA3FpfQgCgEgBgEQgQggg/gkQgygdhkgrQgqgRg0gVQAEBTgMBEQgMBDgbAuQgbAvg7EHQg7EHgPCPQE/lFEzmBA3DpkIAAAAQgBADgBACQABgBABgCEgkRgTFQgfAMgTATQgJALgGAMQgdA9gIA2QgIA3hQECQhQECgOCSQFAmcBUihQBUigADAb");
	this.shape_44.setTransform(762.1,125.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFF00").s().p("Ae1QgQgsg9hLkDQhLkDgVhSQgUhSgkhGQglhFgZhoQDmAzCoAEQCpAEgwAqIABAAQAFIyiMGQQgJgQgrg9gEggygJFQA9kLAfgoQAfgoAJhFQAIg8gDhIQAIgCALAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQCOBpBJBMQBQBSgYAAQgYAAgFAKQjLGXkOEcQAKiTA9kKgAzVp8IAJgBIAXgEIAAAAIgJAKIgOgGIAOAGIgRAUIgGgZg");
	this.shape_45.setTransform(746.8,134.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AfWC7QAEAEAEAFQA4BHAMBIQANBIAWBPQAXBPBYD8QBYD7AzBDQA0BCAIARQBhlMAjk0QAjk1ALhSQALhSibArQibArjHABQgwgFg1gEgAOzBbQACACACADQAuBkASBmQASBnAMBHQALBHBpDuQBpDvBmBqQBom9gQjuQgQjuAjgMQAjgNiUghQgGgBgHgCQiTgfj/gWgAGYAiQA9BMAkBFQAlBGANBjQAMBjBVD8QBUD8BdB2QAzh9APmLQAPmLAegPQAfgPiVghQiUgikKgXgAXPCeQAXBqAcBPQAcBOARBjQAQBjBXDtQBWDsAuA5QAtA4AJARQDBltg7pWIAAAAQAvgpiogFQiogEjmgzgAwclzQACANACAMQABgBAAgBQAIgIgNgPgApBjoQgogJhggnQhggnj1g+QABAFABAFQgSgUg1giQhWg1iehBIAJgJIAAgBIgBAAQgMADgKACQgFABgFAAQAEAMADAMIARgUQgHgCgHgDQgGgCgFgDQABADAAADQhUAIAAhIIAAgBIAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAgBApBjoQgNgDAOgeQABgCABgDQAghCAPBXQgZAMgYAGQgBAAAAgBgAgchsQgDgBgEgCQgdgKhagmQhTgii8gaQgvgGg2gGQAnBZgGA+QgGA/AYBMQAXBNgEEpQgDEqBHCSQCrmaBLjiQBKjiASgFQgKBSANCSQAOCRgHgMQgGgNBOECQBQECBBBaQB/kvBIplQgBgLAcgOQAcgNiUghQiUghiigzQAAgBAAAAQAEgagFAZgAwYlaQAMBDAIA2QAKBFAFCQQAFCQAXDNQAYDMgwBzQERlRDSo4IAAgBQAAAAgBABQgkAUgNgCAgyAKQAGgCAMhNQAEgaABgMQAAgBgBAAQgVBpgBANgEghCgQOQgCBIgYBIQgZBJgNAfQgMAfg9EKQg9ELgKCTQEukUBcjTQBcjUAUgBQATgBhPhTQhJhLiOhpQgMgJgMgJQABALAAAJQAAACAAABQABgCAAgBQACgEgDAEQABAAAAAAQAHgBAKAAQADAAACgBQAGgGgbggQgQgSgbgbQgMgMgQgSA3FpfQgCgEgBgEQgQggg/gkQgygdhkgrQgqgRg0gVQAABRgXA7QgYA8gOA3QgNA4g7EHQg7EHgPCPQFmk7EMmLQgdA7gTB3QgUB3AIA6QAIA6ABD+QACEAAABnQDDlUBXj2QBUjuATgZA3DpkIAAAAQgBADgBACQABgBABgCEgkRgTFQgfAMgTATQgJALgGAMQgdA9gIA2QgIA3hQECQhQECgOCSQFkmNBJilQA2h4AIgV");
	this.shape_46.setTransform(762.1,125.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009900").s().p("Ai9CkQgBj+gIg6QgIg6AUh3QATh3Adg7IARgTQCdBABWA2QA2AhARAUIAEAZIgEgZQANAPgIAIIgBACQgTAZhUDuQhXD2jCFUIgClng");
	this.shape_47.setTransform(637.5,123.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AexQkQgtg5hXjsQhWjsgRhkQgRhjgchOQgbhOgYhqQDmAzCpAEQCoAEgvAqIAAAAQA7JVjCFtQgIgQgug5gEgg0gJFQA9kLANgfQAMgfAZhIQAZhJAChIIABgCIgBACIAAgCIABAAQAHgCAKAAQABAAAAAAQABAAABAAQAAAAABAAQAAgBAAAAQCOBpBJBMQBQBSgUABQgTAChcDTQhcDUkvETQAKiTA9kKgAzXp8IAJgBIAXgEIAAAAIgJAKIgOgGIAOAGIgRAUIgGgZg");
	this.shape_48.setTransform(747,134.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(7.1,1,1).p("A58hjQA5AfA7AcIABAAQByA2B7AtQEUBmENBVQAYAIAZAIIABAAQAyAPAzAQQDFA6DBAyQADABAEABQABAAAAAAQBjAZBiAXQHMBrFBAyQByASBgAKQBhALBbAKQD+AaDLAPQBvAJBhACQAwAAAtgBQBPgCBGgHQD0gbBshZEgl2gLEIA2BAQAoAvAfAdQDIC6DLCMQBtBLB4BBQACABADAC");
	this.shape_49.setTransform(781.9,74);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AfWC7QAEAFAEAFQA4BGAMBIQANBIAWBPQAXBPBYD8QBYD7AzBDQAzBDAJAQQBhlLAjk1QAjk1ALhSQALhTibAsQibArjHABQgwgFg1gEgAOzBbQACACACADQAuBkASBmQASBnAMBHQALBHBpDuQBpDuBmBrQBom8gQjvQgQjuAjgMQAjgMiUgiQgGgBgHgCQiTgfj/gWgAGYAiQA9BMAkBFQAlBGANBjQAMBjBVD8QBUD8BdB2QAyh9AQmLQAPmLAegPQAfgPiVghQiUgikKgXgAXPCeQAXBqAcBPQAcBOARBjQAQBjBXDtQBWDsAuA5QAtA5AJAQQDBltg7pWQAvgpiogFQiogEjmgzgApBjoQgogJhggnQhggnj1g+QABAFABAFQgSgUg1giQhWg2iehAIAJgJIAAgBIgBAAQgMADgKACQgFAAgFABQAEAMADAMQgdA6gTB4QgUB3AIA6QAIA5ABD/QABD/ABBoQDDlUBXj2QBUjuATgZQABgBAAgBQAIgIgNgPQACAMACANQAMBCAIA4QAKBDAFCRQAFCQAXDNQAYDMgwBzQERlRDSo4IAAgBQgBAAAAABQgZAMgYAGQgBgBAAAAQgNgDAOgeQAAgCACgDQAghCAPBXQglAUgMgCAgchsQgDgBgEgCQgdgKhagmQhTgii8gaQgvgGg2gGQAnBZgGA/QgGA+AYBMQAXBNgEEpQgDEqBHCSQCrmaBLjiQBKjiASgFQgKBSANCSQAOCRgHgMQgGgNBOEDQBQEBBBBaQB/kuBIpmQgBgLAcgOQAcgNiUghQiUgiiigyQgBgBAAAAgAgyAKQAGgCAMhNQAEgZABgNIAAgBQAEgagFAZIAAABQgVBqgBAMgEghCgQOQgCBIgYBIQgZBIgNAgQgMAfg9ELQg9EJgKCUQEukUBcjTQBcjUAUgBQATgChPhSQhJhLiOhpQgMgJgMgJQABAKAAAKQAAABAAACQABgCAAgBQAHgBAKAAQADAAACgBQAGgGgbggQgQgSgbgbQgMgMgQgSA3FpfQgCgEgBgEQgQggg/gkQgygdhkgrQgqgSg0gUQAABQgXA8QgYA8gOA3QgNA4g7EHQg7EGgPCQQFmk7EMmLIARgUQgHgDgHgCQgGgDgFgCQAAADABADQhUAIAAhIA3DpjIAAAAQAAABAAAAQAAgBAAAAA3DpjQAAAAAAgBIAAABA3DpjQgBACgBACQABgBABgCEghCgQRIABAAQACgFgDAFgEgkRgTFQggALgSAUQgKALgFAMQgdA8gIA3QgIA3hQECQhQECgOCSQFkmOBJikQA1h4AJgV");
	this.shape_50.setTransform(763.4,125.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FF00").s().p("AgiglIAcAeQAaAaAPATQgegdgngug");
	this.shape_51.setTransform(548.6,13.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgKAKIgBgTIAXARIgFABQgJgBgHACQACgFgDAFg");
	this.shape_52.setTransform(553,20.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF33CC").s().p("AiPC9QhPkCAGANQAHAMgOiRQgNiTAKhSQAGgBAMhOIAFgnQCjA0CTAhQCUAhgcAOQgcANABAMQhIJkh/EvQhAhZhQkCg");
	this.shape_53.setTransform(781,168.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CC33FF").s().p("AiyBvQAEkpgXhNQgXhNAGg+QAFg/gnhYIBlAMQDEA6DBAyIAHADQgVBpgBANQgSAGhKDhQhLDiipGZQhIiSADkpg");
	this.shape_54.setTransform(735.6,157.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0033CC").s().p("AjCDIQgXjMgFiQQgEiRgLhEIgUh6IABgCQAIgHgNgQIgCgKQD1A/BfAnQBgAmAoAKIABAAQAMADAlgVIABAAQjSI5kPFQQAvhzgYjMg");
	this.shape_55.setTransform(684.3,138.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#009900").s().p("Ai9CkQgBj/gIg5QgIg6AUh3QATh4Adg5IARgUQCdBABWA2QA1AhASAUIAEAZIgEgZQANAPgIAIIgBACQgTAZhUDuQhXD2jCFUIgClng");
	this.shape_56.setTransform(638.8,123.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF00").s().p("AexQkQgtg5hXjsQhWjsgRhkQgRhjgchOQgchOgXhqQDmAzCpAEQCoAEgvAqQA7JVjCFtQgJgQgtg5gEgg0gJFQA9kLANgfQAMgfAZhIQAZhJAChIIABgCQAGgCALAAIAEgBQCOBpBJBMQBQBSgUABQgUAChbDTQhcDTkvEUQAKiTA9kKgAzXp8IAJgBIAXgEIAAAAIgJAKIgOgGIAOAGIgRAUIgGgZgA+qxpIABAAIgBACIAAgCgA+pxpg");
	this.shape_57.setTransform(748.3,134.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF3333").s().p("AgYCTQhUj6gNhkQgNhjgkhFQglhFg9hNQEKAYCUAhQCUAigeAOQgfAPgPGMQgPGKgzB8Qhdh1hTj9g");
	this.shape_58.setTransform(831.1,180.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF6600").s().p("Aa7M9QhpjugLhHIgeiuQgShmguhkQByASBgAKIC8AUIANADQCUAhgjANQgjAMAQDuQAQDuhoG8QhmhqhpjugA+dqzQBQkCAIg3QAIg2Adg9QAFgMAKgKQASgVAggLIBUAAIA2BBQAoAvAfAdQAbAfgGAGIgYgSIABAUIAAADIg+CNQhJCllkGNQAOiSBQkCgA4QvhQADgEgCAEg");
	this.shape_59.setTransform(707.2,120.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#66FF66").s().p("EAgWAOdQg0hDhXj7QhZj7gWhQQgXhPgMhIQgNhIg3hFQAvAAAtgBQDIgBCbgrQCbgrgLBSQgLBSgjE0QgjE1hhFLQgJgQgzhDgEgi5gGwQA6kIAOg3QANg4AYg7QAYg8AAhRIBdAnQBuBLB3BBIADAHIACgCIABgCQgBBIBVgIIAGAZQkMGKlmE8QAQiPA7kHg");
	this.shape_60.setTransform(793.2,146.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},23).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_12}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_21}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_2},{t:this.shape},{t:this.shape_30}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_41},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_40},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_43},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_42}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_45},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_44}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_48},{t:this.shape_47},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_2},{t:this.shape},{t:this.shape_46}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_41},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_40},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_43},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_42}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_45},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_44}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[]},4).wait(1));

	// cupcake
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AALD2IAAi1IgVAAIAAC1IjqAAIAAnrIDqAAIAAC1IAVAAIAAi1IDqAAIAAHrg");
	this.shape_61.setTransform(153.1,95.5);

	this.text = new cjs.Text("", "70px 'Lot'");
	this.text.textAlign = "center";
	this.text.lineHeight = 72;
	this.text.parent = this;
	this.text.setTransform(328.2,93.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAkgGQgpADgeAK");
	this.shape_62.setTransform(533.6,2.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(7.1,1,1).p("AgFgGIALAN");
	this.shape_63.setTransform(537.8,2.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFF66").ss(4,1,1).p("ALgEuQBGBMAlBgAE3nvQAlg6AzgsAhrjcQgFBQACAoAskIfIgmA3");
	this.shape_64.setTransform(422.8,469.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#CC33CC").ss(4,1,1).p("AMNoqQAMAmAKAVQAPAfAUATARpGxQgkBMgeAuAomhFQANBhAfBiAxoIVQArgHBVgP");
	this.shape_65.setTransform(474.2,479.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#00FFFF").ss(4,1,1).p("APNmyIBXBFAKAEZIAEB6QAAAVgDALAkvgJQAqAnAqAaAvUhdQgqAcgMALQgQAOgJAQ");
	this.shape_66.setTransform(484.9,474.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF6633").ss(4,1,1).p("AT4EoQASAlAIAYQANAiACAeAE9DBQBXg8BQglAyAmkQAAADARBAA0gGcIBHgX");
	this.shape_67.setTransform(547.7,486.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#0000FF").ss(4,1,1).p("AVmieQAygEAsAAAErlwQAjA9AgBTA2hgSQgPApgTAnAnYEAQAjBLAPAm");
	this.shape_68.setTransform(488.9,502.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#33CC66").ss(4,1,1).p("AJVleIBLA4ARqIcQBEgSBUggAmioeQAmA1AYA5A0BCoQA7gRA4gcAmgIfQBBgtAhgY");
	this.shape_69.setTransform(510.8,488.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF6600").s().p("AgpAHQAegKAqgDIALANg");
	this.shape_70.setTransform(534.1,2.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("ACjEGIhYAAIgvAAIgWAAIgNAAIgWAAIguAAIhYAAIiRAAIE0oLIE1ILIiSAAg");
	this.shape_71.setTransform(179.9,93.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAKD2IAAi1IgTAAIAAC1IjrAAIAAnrIDrAAIAAC1IATAAIAAi1IDrAAIAAHrg");
	this.shape_72.setTransform(124.3,95.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AjYD1IAAiUIAAhZIAAguIAAgTIAAgGIAAgHIAAgWIAAg1IAAhjIDpAAQA4AAAtAbQAtAaAbAtQAbAsAAA5QAAA2gbAsQgaAtgtAbQgtAbg3AAIAABdg");
	this.shape_73.setTransform(209.2,95.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AALD2IAAi1IgUAAIAAC1IjrAAIAAnrIDrAAIAAC1IAUAAIAAi1IDqAAIAAHrg");
	this.shape_74.setTransform(101,95.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AjYD1IAAiUIAAhZIAAguIAAgTIAAgGIAAgHIAAgWIAAg1IAAhjIDpAAQA4AAAtAbQAtAaAbAtQAbAsAAA5QAAA2gbAsQgaAtgtAbQgtAbg3AAIAABdg");
	this.shape_75.setTransform(186,95.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Ah6D2IAAj2IiJj1IB0AAIBHAAIArAAIAbAAIAbAAIAsAAIBJAAIB2AAIiJD1IAAD2g");
	this.shape_76.setTransform(253,95.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AheD2Ih8AAIAAnrICAAAIB+AAQAzABAlAXQAmAWAUAjQATAjgCAnQgDAngeAjQAhAYAMAiQAMAhgHAkQgHAkgZAeQgYAegoATQgnATg0ABIh7AAg");
	this.shape_77.setTransform(153.6,167.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Ah+D2IAAnrID9AAIAAHrg");
	this.shape_78.setTransform(176.6,167.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AjYD2IAAiUIAAhaIAAguIAAgTIAAgFIAAgHIAAgXIAAg2IAAhjIDqAAQA3ABAuAbQAsAbAbAsQAbAtAAA5QAAAugUAoQgUApgkAcIBICHImtAAg");
	this.shape_79.setTransform(192,167.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("Ah/D2IAAnrID/AAIAAHrg");
	this.shape_80.setTransform(153.4,167.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("Ah2D2IAAj1IhmAAIAAj2IG5AAIAAD2IhfAAIAAD1g");
	this.shape_81.setTransform(214.5,167.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("Ah/D2IAAnrID+AAIAAHrg");
	this.shape_82.setTransform(129.9,167.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AALD2IAAi1IgVAAIAAC1IjqAAIAAnrIDqAAIAAC1IAVAAIAAi1IDqAAIAAHrg");
	this.shape_83.setTransform(54.6,95.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("Aj0D2IAAiFIAAhKIAAggIAAgGIAAgBIAAgFIAAghIAAhKIAAiFID0AAQBEACA3AgQA3AiAiA3QAgA3ABBEQgBBEggA3QgiA3g3AhQg3AhhEABg");
	this.shape_84.setTransform(254.2,167.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("Ah6D2IAAj2IiIj1IBzAAIBIAAIApAAIAcAAIAbAAIArAAIBKAAIB2AAIiKD1IAAD2g");
	this.shape_85.setTransform(268,95.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("ACjEGIhYAAIgvAAIgWAAIgNAAIgWAAIguAAIhYAAIiRAAIE0oLIE1ILIiSAAg");
	this.shape_86.setTransform(125.2,93.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAKD2IAAi1IgUAAIAAC1IjqAAIAAnrIDqAAIAAC1IAUAAIAAi1IDrAAIAAHrg");
	this.shape_87.setTransform(69.6,95.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("Ah6D2IAAj2IiIj1IBzAAIBIAAIApAAIAcAAIAbAAIArAAIBKAAIB1AAIiJD1IAAD2g");
	this.shape_88.setTransform(360.6,167.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("Aj0D2IAAiFIAAhKIAAggIAAgGIAAgBIAAgFIAAghIAAhKIAAiFID0AAQBFACA2AgQA3AiAiA3QAgA3ABBEQgBBEggA3QgiA3g3AhQg2AhhFABg");
	this.shape_89.setTransform(266.2,167.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("Ah6D2IAAj2IiJj1IB0AAIBIAAIAqAAIAbAAIAbAAIAsAAIBJAAIB2AAIiJD1IAAD2g");
	this.shape_90.setTransform(301,95.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFF66").ss(4,1,1).p("ALgEuQBGBMAlBgAE3nvQAlg6AygsAhrjcQgFBQABAoAskIfIgmA3");
	this.shape_91.setTransform(424.1,469.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#33CC66").ss(4,1,1).p("AJVleIBLA4ARqIcQBFgSBTggAmioeQAmA1AYA5A0BCoQA7gRA4gcAmgIfQBBgtAhgY");
	this.shape_92.setTransform(512.1,488.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#00FFFF").ss(4,1,1).p("APNmyIBXBFAKAEZIAEB6QAAAVgDALAkugJQApAnAqAaAvUhdQgqAcgMALQgPAOgKAQ");
	this.shape_93.setTransform(486.2,474.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:488.9}},{t:this.shape_67,p:{x:547.7}},{t:this.shape_66},{t:this.shape_65,p:{x:474.2}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.text,p:{font:"70px 'Lot'",lineHeight:72,x:328.2}},{t:this.shape_61,p:{x:153.1,y:95.5}}]},24).to({state:[{t:this.shape_67,p:{x:547.7}},{t:this.shape_66},{t:this.shape_69},{t:this.shape_68,p:{x:488.9}},{t:this.shape_65,p:{x:474.2}},{t:this.shape_64},{t:this.text,p:{font:"75px 'Lot'",lineHeight:77,x:328.2}},{t:this.shape_72},{t:this.shape_71,p:{x:179.9,y:93.8}}]},1).to({state:[{t:this.shape_67,p:{x:547.7}},{t:this.shape_66},{t:this.shape_69},{t:this.shape_68,p:{x:488.9}},{t:this.shape_65,p:{x:474.2}},{t:this.shape_64},{t:this.text,p:{font:"75px 'Lot'",lineHeight:77,x:328.2}},{t:this.shape_74,p:{x:101,y:95.5}},{t:this.shape_71,p:{x:156.6,y:93.8}},{t:this.shape_73,p:{x:209.2}}]},1).to({state:[{t:this.shape_67,p:{x:547.7}},{t:this.shape_66},{t:this.shape_69},{t:this.shape_68,p:{x:488.9}},{t:this.shape_65,p:{x:474.2}},{t:this.shape_64},{t:this.text,p:{font:"75px 'Lot'",lineHeight:77,x:328.2}},{t:this.shape_61,p:{x:77.8,y:95.5}},{t:this.shape_71,p:{x:133.4,y:93.8}},{t:this.shape_75,p:{x:186}},{t:this.shape_73,p:{x:232.5}}]},1).to({state:[{t:this.shape_67,p:{x:547.7}},{t:this.shape_66},{t:this.shape_69},{t:this.shape_68,p:{x:488.9}},{t:this.shape_65,p:{x:474.2}},{t:this.shape_64},{t:this.text,p:{font:"75px 'Lot'",lineHeight:77,x:328.2}},{t:this.shape_61,p:{x:54.6,y:95.5}},{t:this.shape_71,p:{x:110.2,y:93.8}},{t:this.shape_75,p:{x:162.8}},{t:this.shape_73,p:{x:209.3}},{t:this.shape_76}]},1).to({state:[{t:this.shape_67,p:{x:547.7}},{t:this.shape_66},{t:this.shape_69},{t:this.shape_68,p:{x:488.9}},{t:this.shape_65,p:{x:474.2}},{t:this.shape_64},{t:this.text,p:{font:"75px 'Lot'",lineHeight:77,x:328.2}},{t:this.shape_61,p:{x:54.6,y:95.5}},{t:this.shape_71,p:{x:110.2,y:93.8}},{t:this.shape_75,p:{x:162.8}},{t:this.shape_73,p:{x:209.3}},{t:this.shape_76}]},1).to({state:[{t:this.shape_67,p:{x:547.7}},{t:this.shape_66},{t:this.shape_69},{t:this.shape_68,p:{x:488.9}},{t:this.shape_65,p:{x:474.2}},{t:this.shape_64},{t:this.text,p:{font:"75px 'Lot'",lineHeight:77,x:328.2}},{t:this.shape_61,p:{x:54.6,y:95.5}},{t:this.shape_71,p:{x:110.2,y:93.8}},{t:this.shape_75,p:{x:162.8}},{t:this.shape_73,p:{x:209.3}},{t:this.shape_76},{t:this.shape_77,p:{x:153.6}}]},1).to({state:[{t:this.shape_67,p:{x:547.7}},{t:this.shape_66},{t:this.shape_69},{t:this.shape_68,p:{x:488.9}},{t:this.shape_65,p:{x:474.2}},{t:this.shape_64},{t:this.text,p:{font:"75px 'Lot'",lineHeight:77,x:328.2}},{t:this.shape_61,p:{x:54.6,y:95.5}},{t:this.shape_71,p:{x:110.2,y:93.8}},{t:this.shape_75,p:{x:162.8}},{t:this.shape_73,p:{x:209.3}},{t:this.shape_76},{t:this.shape_77,p:{x:138.8}},{t:this.shape_78}]},1).to({state:[{t:this.shape_67,p:{x:547.7}},{t:this.shape_66},{t:this.shape_69},{t:this.shape_68,p:{x:488.9}},{t:this.shape_65,p:{x:474.2}},{t:this.shape_64},{t:this.text,p:{font:"75px 'Lot'",lineHeight:77,x:328.2}},{t:this.shape_61,p:{x:54.6,y:95.5}},{t:this.shape_71,p:{x:110.2,y:93.8}},{t:this.shape_75,p:{x:162.8}},{t:this.shape_73,p:{x:209.3}},{t:this.shape_76},{t:this.shape_77,p:{x:115.6}},{t:this.shape_80,p:{x:153.4}},{t:this.shape_79,p:{x:192}}]},1).to({state:[{t:this.shape_67,p:{x:547.7}},{t:this.shape_66},{t:this.shape_69},{t:this.shape_68,p:{x:488.9}},{t:this.shape_65,p:{x:474.2}},{t:this.shape_64},{t:this.text,p:{font:"75px 'Lot'",lineHeight:77,x:328.2}},{t:this.shape_61,p:{x:54.6,y:95.5}},{t:this.shape_71,p:{x:110.2,y:93.8}},{t:this.shape_75,p:{x:162.8}},{t:this.shape_73,p:{x:209.3}},{t:this.shape_76},{t:this.shape_77,p:{x:92.1}},{t:this.shape_82,p:{x:129.9}},{t:this.shape_79,p:{x:168.5}},{t:this.shape_81,p:{x:214.5}}]},1).to({state:[{t:this.shape_67,p:{x:547.7}},{t:this.shape_66},{t:this.shape_69},{t:this.shape_68,p:{x:488.9}},{t:this.shape_65,p:{x:474.2}},{t:this.shape_64},{t:this.text,p:{font:"75px 'Lot'",lineHeight:77,x:328.2}},{t:this.shape_83,p:{x:54.6}},{t:this.shape_71,p:{x:110.2,y:93.8}},{t:this.shape_75,p:{x:162.8}},{t:this.shape_73,p:{x:209.3}},{t:this.shape_76},{t:this.shape_77,p:{x:65.4}},{t:this.shape_82,p:{x:103.2}},{t:this.shape_79,p:{x:141.9}},{t:this.shape_81,p:{x:187.9}},{t:this.shape_61,p:{x:238.1,y:167.5}}]},1).to({state:[{t:this.shape_67,p:{x:547.7}},{t:this.shape_66},{t:this.shape_69},{t:this.shape_68,p:{x:488.9}},{t:this.shape_65,p:{x:474.2}},{t:this.shape_64},{t:this.text,p:{font:"75px 'Lot'",lineHeight:77,x:328.2}},{t:this.shape_87},{t:this.shape_86,p:{x:125.2}},{t:this.shape_75,p:{x:177.8}},{t:this.shape_73,p:{x:224.3}},{t:this.shape_85},{t:this.shape_77,p:{x:28.3}},{t:this.shape_80,p:{x:66.1}},{t:this.shape_79,p:{x:104.7}},{t:this.shape_81,p:{x:150.7}},{t:this.shape_74,p:{x:200.9,y:167.5}},{t:this.shape_84},{t:this.shape_71,p:{x:303.1,y:165.8}}]},1).to({state:[{t:this.shape_67,p:{x:549}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_68,p:{x:490.2}},{t:this.shape_65,p:{x:475.5}},{t:this.shape_91},{t:this.text,p:{font:"75px 'Lot'",lineHeight:77,x:329.5}},{t:this.shape_83,p:{x:102.6}},{t:this.shape_86,p:{x:158.2}},{t:this.shape_75,p:{x:210.8}},{t:this.shape_73,p:{x:257.3}},{t:this.shape_90},{t:this.shape_77,p:{x:40.3}},{t:this.shape_82,p:{x:78.1}},{t:this.shape_79,p:{x:116.8}},{t:this.shape_81,p:{x:162.8}},{t:this.shape_61,p:{x:213,y:167.5}},{t:this.shape_89},{t:this.shape_71,p:{x:315.1,y:165.8}},{t:this.shape_88}]},1).wait(3));

	// balloons 
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFF00").ss(13.1,1,1).p("AAEgZQAAABAAAKQgBAHgBAEQgBAEgDAGQgBABgBACQgFAJgCAFQABACAFAAQAGgBALAA");
	this.shape_94.setTransform(97.2,613.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FF6633").ss(13.1,1,1).p("AgGhDQgNAKgOAXQgSAdgGAHQgJAMgPAMQgBABgBABQgGAFgTAOQBrgCBuAXQgCgRgSgYQgEgFgFgFQgcgfgEgT");
	this.shape_95.setTransform(230.7,444.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FF33CC").ss(13.1,1,1).p("AgmgWQABAFACAMQACAJgCAGQgCAGgEADQArgTAjgGQAGAAAEgDQAGgDgCgHAgpATQgEADgFAB");
	this.shape_96.setTransform(622.6,306.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(8,1,1).p("EAOugjDQAmBSADBqQACBNgRB4QgKBDgVCIQgNB0AKBVQAKBVApBqQALAeBECcQAwBwAUBJQAbBmgIBZQgFAvgRBAQgKAkgWBIQgmCFASBVQAMA3ArBLQBCBxAFAMQA4BzABCWQAABtggCrQg0EWgBAKQgYClAPB5EAq7AOsQA8A9AdBgQAaBSACBlQACBBgKB3QgKB+AAA6QAABDARAmQAHARARAYQAWAeAFAJQAlA8AGBYQABAMAAAPEAuOAhAQABAzgHBREgtkgMoQgsBLADBnQADBXAkBjQAVA7AyB0QApBpALBLQAVCBgxDDQgNA2geBsQgaBhgKBCQgYCRAUCVQATCVA8CGQAVAvBICFQA9BvAZBIQAhBdAeDUQAdDLAoBk");
	this.shape_97.setTransform(526.7,539.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#3300FF").ss(13.1,1,1).p("AgOgvIgXAuQgHALAAAKQgBADAAABQAAAEADAEQAEAGAMACQAjAIAkAAQABgKgCgMQgDgPgIgP");
	this.shape_98.setTransform(802.1,621.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#33FF66").ss(13.1,1,1).p("AAIgUQgCADgIAGQgHAGgDAFQgDAHgBABQgBACgEAEQgDADAAAEIAyAA");
	this.shape_99.setTransform(868.6,302.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(6,1,1).p("EA6tgipQgWAxAHA9QAGA3AaA2QASAmAmA9QAsBFAOAbQBAB4ARCUQAQCHgYCSEg9qAOKQgwByAkC/QAKA1AXBqQASBeABBBQABBIgUBmQgLA5gYBzQgnDXBECA");
	this.shape_100.setTransform(491.9,533.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(1,1,1).p("ECZchB9QAAFVigDxQigDwjiAAQjjAAigjwQigjxAAlVQAAlUCgjwQCgjxDjAAQDiAACgDxQCgDwAAFUgEB2ohINQAAH3j5FjQjyFZlUALQgKAAgKAAQlhAAj6lkQj5ljAAn3QAAn2D5ljQD6ljFhAAQFgAAD6FjQD5FjAAH2gECWngX9QAAIlkiGDQkiGFmZAAQgGAAgFAAQgugBgsgFQlZgrj+lUQkhmDAAolQAAokEhmEQEimEGaAAQGZAAEiGEQEiGEAAIkgEBAng6bQAALYlwIDQlPHXnPApQgtAEgtAAQgqAAgogDQnUgmlTnbQlvoDAArYQAArZFvoDQFwoDIJAAQIJAAFvIDQFwIDAALZgAeeuJQAAD2htCuQhsCtiZAAQgTAAgTgCQiBgThfiYQhsiuAAj2QAAj2BsiuQBsitCaAAQCZAABsCtQBtCuAAD2gEiZbBbLQCJhcBFgu");
	this.shape_101.setTransform(-57.3,645.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFF00").s().p("AgkJPQADgGABgFIACgLIAAgLIAAALIgCALQgBAFgDAGQiCgThfiZQhsitAAj2QAAj1BsiuQBsitCZAAQCaAABsCtQBsCuAAD1QAAD2hsCtQhsCuiaABQgSgBgSgCg");
	this.shape_102.setTransform(100.7,554.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF6633").s().p("AhRbcIABgCQAPgMAJgNQAGgHATgeQAOgXANgKQgNAKgOAXQgTAegGAHQgJANgPAMIgBACQnUgnlTnaQlvoDAArYQAArYFvoDQFxoDIHAAQIIAAFwIDQFwIDAALYQAALYlwIDQlQHXnOApIgJgKQgcgggDgUQADAUAcAgIAJAKQgtAEgtAAQgpAAgogDgABabbIAAAAg");
	this.shape_103.setTransform(230.6,271.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3300FF").s().p("AgKUsQgDgPgJgPQAJAPADAPQguAAgrgFQAAgLAGgMIAYguIgYAuQgGAMAAALQlagrj+lUQkhmEAAokQAAojEhmEQEjmFGYABQGagBEhGFQEiGEAAIjQAAIkkiGEQkhGFmagBIgKAAg");
	this.shape_104.setTransform(807.6,491.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF33CC").s().p("AAAS9QlfAAj6ljQj5lkgBn2QABn1D5lkQD6ljFfAAQFhAAD5FjQD6FkgBH1QABH2j6FkQjyFYlUALIgUAAg");
	this.shape_105.setTransform(616.7,183.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#33FF66").s().p("AmCJFQigjwAAlVQAAlTCgjxQCgjwDiAAQDiAACgDwQChDxAAFTQAAFVihDwQigDxjigBQjiABigjxgAgnMwIAyAAIgyAAQAAgEADgDQAEgEACgDIADgJQAEgEAGgGIALgJIgLAJQgGAGgEAEIgDAJQgCADgEAEQgDADAAAEIAAAAg");
	this.shape_106.setTransform(870,223.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FF33CC").ss(13.1,1,1).p("AgpATQArgTAjgGQAGAAAEgDQAGgDgCgHAgmgWQABAFACAMQACAJgCAGQgCAGgEADQgEADgFAB");
	this.shape_107.setTransform(622.6,296.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#3300FF").ss(13.1,1,1).p("AgOgvIgXAuQgHALAAALQgBACAAACQAAADADAEQAEAHAMACQAjAHAkAAQABgKgCgLQgDgQgIgO");
	this.shape_108.setTransform(802.1,611.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(6,1,1).p("EA6tgipQgWAyAHA8QAGA3AaA3QASAlAmA9QAsBFAOAcQBAB3ARCUQAQCHgYCSEg9qAOKQgwByAkC/QAKA1AXBrQASBdABBBQABBIgUBmQgLA6gYByQgnDXBECA");
	this.shape_109.setTransform(491.9,523.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(1,1,1).p("ECZchB9QAAFVigDwQigDxjiAAQjjAAigjxQigjwAAlVQAAlUCgjxQCgjwDjAAQDiAACgDwQCgDxAAFUgEB2ohINQAAH3j5FjQjyFZlUAKQgKAAgKAAQlhAAj6ljQj5ljAAn3QAAn2D5lkQD6ljFhAAQFgAAD6FjQD5FkAAH2gECWngX9QAAIkkiGEQkiGEmZAAQgGAAgFAAQguAAgsgGQlZgqj+lUQkhmEAAokQAAolEhmEQEimEGaAAQGZAAEiGEQEiGEAAIlgEBAng6bQAALYlwIDQlPHXnPApQgtAEgtAAQgqAAgogDQnUgnlTnaQlvoDAArYQAArZFvoDQFwoDIJAAQIJAAFvIDQFwIDAALZgAeeuJQAAD2htCtQhsCuiZAAQgTAAgTgCQiBgThfiZQhsitAAj2QAAj2BsiuQBsiuCaAAQCZAABsCuQBtCuAAD2gEiZbBbLQCJhcBFgu");
	this.shape_110.setTransform(-57.3,635);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3300FF").s().p("AgKUsQgDgPgJgPQAJAPADAPQguAAgrgFQAAgLAGgMIAYguIgYAuQgGAMAAALQlagrj+lUQkhmEAAokQAAojEhmFQEjmEGYABQGagBEhGEQEiGFAAIjQAAIkkiGEQkhGEmaAAIgKAAg");
	this.shape_111.setTransform(807.6,481.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FF33CC").ss(13.1,1,1).p("AgpATQgEADgFABAgmgWQABAFACAMQACAJgCAGQgCAGgEADQArgTAjgGQAGAAAEgDQAGgDgCgH");
	this.shape_112.setTransform(622.6,282.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").ss(6,1,1).p("EA6tgipQgWAxAHA9QAGA3AaA2QASAmAmA9QAsBFAOAbQBAB4ARCTQAQCIgYCSEg9qAOKQgwByAkC/QAKA1AXBqQASBeABBBQABBIgUBmQgLA5gYBzQgnDXBECA");
	this.shape_113.setTransform(491.9,509.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(1,1,1).p("ECZchB9QAAFVigDxQigDwjiAAQjjAAigjwQigjxAAlVQAAlUCgjxQCgjwDjAAQDiAACgDwQCgDxAAFUgEB2ohINQAAH3j5FjQjyFZlUALQgKAAgKAAQlhAAj6lkQj5ljAAn3QAAn2D5ljQD6ljFhAAQFgAAD6FjQD5FjAAH2gECWngX9QAAIlkiGDQkiGFmZAAQgGAAgFAAQgugBgsgFQlZgrj+lUQkhmDAAolQAAolEhmDQEimEGaAAQGZAAEiGEQEiGDAAIlgEBAng6bQAALYlwIDQlPHXnPApQgtAEgtAAQgqAAgogDQnUgnlTnaQlvoDAArYQAArZFvoDQFwoDIJAAQIJAAFvIDQFwIDAALZgAeeuJQAAD2htCuQhsCtiZAAQgTAAgTgCQiBgThfiYQhsiuAAj2QAAj2BsiuQBsiuCaAAQCZAABsCuQBtCuAAD2gEiZbBbKQCJhbBFgu");
	this.shape_114.setTransform(-57.3,621.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFF00").s().p("AgkJPQADgGABgFIACgKIAAgMIAAAMIgCAKQgBAFgDAGQiCgThfiZQhsitAAj2QAAj1BsiuQBsiuCZABQCagBBsCuQBsCuAAD1QAAD2hsCtQhsCuiaAAQgSAAgSgCg");
	this.shape_115.setTransform(100.7,530.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF6633").s().p("AhRbcIABgCQAPgMAJgMQAGgIATgdQAOgXANgKQgNAKgOAXQgTAdgGAIQgJAMgPAMIgBACQnUgnlTnZQlvoDAArZQAArYFvoDQFxoDIHAAQIIAAFwIDQFwIDAALYQAALZlwIDQlQHWnOApIgJgKQgcgggDgTQADATAcAgIAJAKQgtAEgtAAQgpAAgogDgABabbIAAAAg");
	this.shape_116.setTransform(230.6,247.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3300FF").s().p("AgKUtQgDgQgJgQQAJAQADAQQgugBgrgGQAAgKAGgMIAYguIgYAuQgGAMAAAKQlagqj+lTQkhmEAAolQAAokEhmDQEjmEGYAAQGaAAEhGEQEiGDAAIkQAAIlkiGEQkhGDmaABIgKAAg");
	this.shape_117.setTransform(807.6,467.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF33CC").s().p("AAAS9QlfAAj6lkQj5ljgBn2QABn2D5ljQD6ljFfAAQFhAAD5FjQD6FjgBH2QABH2j6FjQjyFalUAKIgUAAg");
	this.shape_118.setTransform(616.7,159);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#33FF66").s().p("AmCJFQigjxAAlUQAAlUCgjwQCgjxDiAAQDiAACgDxQChDwAAFUQAAFUihDxQigDwjiABQjigBigjwgAgnMwIAyAAIgyAAQAAgEADgEQAEgDACgCIADgJQAEgFAGgGIALgJIgLAJQgGAGgEAFIgDAJQgCACgEADQgDAEAAAEIAAAAg");
	this.shape_119.setTransform(870,199);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3300FF").s().p("AgKUtQgDgQgJgQQAJAQADAQQgugBgrgGQAAgKAGgMIAYguIgYAuQgGAMAAAKQlagqj+lTQkhmEAAolQAAokEhmDQEjmEGYAAQGaAAEhGEQEiGDAAIkQAAIlkiGEQkhGEmaAAIgKAAg");
	this.shape_120.setTransform(807.6,457.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF33CC").s().p("AAAS9QlfAAj6lkQj5ligBn3QABn2D5ljQD6ljFfAAQFhAAD5FjQD6FjgBH2QABH3j6FiQjyFalUAKIgUAAg");
	this.shape_121.setTransform(616.7,148.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AASChQgRgHgDgQQgEgQAJgOQAKgOAUgFQARgEAQAHQAQAHAFAQQAEAPgLAOQgKAOgSAFQgHACgIAAQgKAAgJgEgAglgbIgyhoIB6ghQABAyAFA/IADA5QACAhADALIACAEIgVAJIgXAKIgshkg");
	this.shape_122.setTransform(286.4,235.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AhgAZIgyiaQAdgOA8gQQBIgUAzASQA7AUARBAQAPA4gbAqQgbAsg7APIANA+IhsAdgAAYgrIgJADIAQBFQAvgPgKgkQgGgYgWAAQgHAAgJADg");
	this.shape_123.setTransform(263.4,243.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AhBCKQgxgmgShGQgUhKAbg0QAagyA7gQQA4gPAvAeQAzAgAUBLQASBFgXA6QgYA8g7AQQgRAFgRAAQgpAAgkgegAgEgZQgkAKAPA2QAGAXAPAQQAPATAQgEQAPgFAGgZQAFgXgFgVQgNgugdAAIgKACg");
	this.shape_124.setTransform(237.8,249.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AhgAZIgyiaQAdgOA8gQQBIgUAzASQA7AUARBAQAPA4gbAqQgbAsg7APIANA+IhsAdgAAYgrIgJADIAQBFQAvgPgKgkQgGgYgWAAQgHAAgJADg");
	this.shape_125.setTransform(208.4,258);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FF33CC").ss(13.1,1,1).p("AgmgWQABAFACAMQACAJgCAGQgCAGgEADQgEADgFABAgpATQArgTAjgGQAGAAAEgDQAGgDgCgH");
	this.shape_126.setTransform(622.6,265.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FFFFFF").ss(1,1,1).p("ECZchB9QAAFVigDxQigDwjiAAQjjAAigjwQigjxAAlVQAAlUCgjxQCgjwDjAAQDiAACgDwQCgDxAAFUgEB2ohINQAAH3j5FjQjyFZlUALQgKAAgKAAQlhAAj6lkQj5ljAAn3QAAn2D5ljQD6ljFhAAQFgAAD6FjQD5FjAAH2gECWngX9QAAIlkiGDQkiGFmZAAQgGAAgFAAQgugBgsgFQlZgrj+lUQkhmDAAolQAAolEhmDQEimEGaAAQGZAAEiGEQEiGDAAIlgEA8ehLWQBdgxByg+QhfBchQBOQBoDHA6DhQAoACAkABQFvAPDBAtQjmCxlYCNQAJBrAABwQAALYlwIDQgSAZgSAYQgEAGgFAGQg0BDg4A6QAyD6BAFCQiVjRh6jhQiWkShukoQi8Cul3FaQB7jqCVjGQjyBEkhB5QhpAsihBKQhvAyiLBBIDYiaQgrgzgqg7Qgng3gkg6QhhAEigBAIDUiTQg+hygvh8IgFABQgCAAgDABQlEAllEAkQEsiBE1hdQhZkzAAlnQAAnzCtmQQAEgJAEgLQEWEIE3D2QAfipgKikQCAA7BoBmQBWivAVi3QAtARgHDTIDTr2QBaGHBGE6QDVhHD9h8QBegtCUhPgEAcMhIyQBNisBtiZQFwoDIJAAQIJAAFvIDQA4BOAvBTEAcEhIeQgmgzgngzQArAqAqAoEA6TgmPQAEATAFATQgJgNgJgNQh6i3hXjHQAoDHA9E0EBAeg92Qj+BokFBVQDfBVDPB9IjlAhQAfBBBzDuQhQghiFgzQACDPAuDZIiejBQAcFBBEE0EAdOgqAIJGk8IqzBOEAgbglSIFaj2Qi3AJlDAOEAawgwBQEQhSEXg1QhHg4hYghQBRgIBEghQjahCjGhpIHbAmQihiXjHhpQDlA4DaBdQlVj2k6kOQEwB6EKCXQjmmokgmJEA2Bgh8QjfClkJAXQgtAEgtAAQgqAAgogDQmFggkrlMAeeuJQAAD2htCuQhsCtiZAAQgTAAgTgCQiBgThfiYQhsiuAAj2QAAj2BsiuQBsiuCaAAQCZAABsCuQBtCuAAD2gEA8+hKbQmmGcgEAEQFxABDbAHEiZbBbKQCJhbBFgu");
	this.shape_127.setTransform(-57.3,603.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF9966").s().p("AIrUVQiVkShukoIoyIIQB7jqCUjHQjxBFkhB5QhqAsihBKQhvAyiKBBIDYiaIFaj2In6AXQhhAEigBAIDUiTIJFk8IqyBOIgFABIgGAAIqHBLQEriCE2hdQEPhSEYg1QhHg4hYghQBRgIBEghQjahDjGhoIHbAnQiiiXjGhpQDlA4DaBdQlVj1k6kQQEwB8EKCXQjnmpkgmJIAJgTQEVEHE4D2QAeiogJikQB/A6BpBmQBVivAWi3QAtARgHDTIDRr2QBbGHBFE6QDWhHD9h8QBegtCUhPIDPhvIivCqImrGgQFxABDbAHIBMADQFvAPDBAtQjmCxlXCNQj+BokGBVQDfBVDQB9IjmAiICTEtQhRghiFgzQACDPAvDZIifjAQAdFABEE0IgJAMQh6i3hXjHIBlH7IByI8QiVjRh7jhg");
	this.shape_128.setTransform(232.8,256.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF6633").s().p("AhRbcIABgCQAPgMAJgNQAGgHATgeQAOgXANgKQgNAKgOAXQgTAegGAHQgJANgPAMIgBACQmFggkrlMQChhKBpgsQEih5DwhFQiUDHh7DqIIyoIQBuEoCWESQjfClkJAXIgJgKQgcgggDgUQADAUAcAgIAJAKQgtAEgtAAQgpAAgogDgAJ7OaQBWDHB6C3Qg0BDg4A6Ihkn7gAt4TbQgng3gkg6IH6gXIlZD2Qgsgzgqg7gALzKYICgDAQgwjZgCjPQCGAzBQAhIiSkuIDlgiQjPh9jfhUQEFhVD+hoQAJBrAABvQAALYlwIDIgkAxQhEk0gdlAgAxdMtIKzhOIpGE8Qg+hygvh8gAznAAQAAnyCtmQQEgGJDmGpQkKiXkwh8QE6EQFWD0Qjbhdjlg4QDHBpChCYInbgoQDHBpDaBDQhFAhhRAIQBZAhBHA4QkYA1kQBSQhZkzAAlngAwxuVQBMitBtiZQFxoDIHAAQIIAAFwIDQA4BOAvBTQiUBPheAtQj8B8jWBHQhGk6hamHIjSL2QAHjTgtgRQgVC3hWCvQhphmh+g6QAJCkgfCoQk3j2kVkHgAJVpfIGqmgQBoDHA6DhQjbgHlxgBg");
	this.shape_129.setTransform(230.6,229.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3300FF").s().p("AgKUsQgDgPgJgPQAJAPADAPQguAAgrgFQAAgLAGgMIAYguIgYAuQgGAMAAALQlagrj+lUQkhmEAAokQAAojEhmEQEjmFGYABQGagBEhGFQEiGEAAIjQAAIkkiGEQkhGEmaAAIgKAAg");
	this.shape_130.setTransform(807.6,450.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFF00").ss(13.1,1,1).p("AAEgVQAAABAAACQgBAGgBAFQgBAEgDAFQgBACgBACQgFAJgCAEQABADAFAAQAGgBALAA");
	this.shape_131.setTransform(97.2,572.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FF6633").ss(13.1,1,1).p("AACAAQgJAPgFAFQgJANgPAMQgBAAgBACAAmAyQgEgFgEgFQgVgYgHgQAAmgxQgNAKgOAXQgFAJgEAHQgCgGgBgF");
	this.shape_132.setTransform(212.8,410.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#3300FF").ss(13.1,1,1).p("AAsAOQgDgOgIgQAgOg7IgXAuQgHALAAAKAgsAhQgBACAAACQAAAEADAEQAEAGAMACQAjAIAkAAQABgLgCgL");
	this.shape_133.setTransform(802.1,579.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(8,1,1).p("EAP1gjDQAmBSADBqQACBNgRB4QgKBDgVCIQgNB0AKBVQAKBVApBqQALAeBECcQAwBwAUBJQAbBmgIBZQgFAvgRBAQgKAkgWBIQgmCFASBVQAMA3ArBLQBCBxAFAMQA4BzABCWQAABtggCrQg0EWgBAKQgYClAPB5EAsCAOsQA8A9AdBgQAaBSACBlQACBBgKB3QgKB+AAA6QAABDARAmQAHARARAYQAWAeAFAJQAlA8AGBYQABAMAAAPEAvVAhAQABAzgHBREgurgMlQgsBLADBoQADBWAkBjQAVA8AyB0QApBoALBLQAVCCgxDDQgNA2geBsQgaBhgKBBQgYCSAUCUQATCVA8CHQAVAvBICEQA9BwAZBHQAhBeAeDTQAdDLAoBl");
	this.shape_134.setTransform(519.6,497.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FFFFFF").ss(1,1,1).p("ECZchCDQAAFVigDwQigDxjiAAQjjAAigjxQigjwAAlVQAAlUCgjxQCgjwDjAAQDiAACgDwQCgDxAAFUgEB2ohIfQAAH2j5FjQjyFZlUALQgKAAgKAAQlhAAj6lkQj5ljAAn2QAAn3D5ljQD6ljFhAAQFgAAD6FjQD5FjAAH3gECWngYDQAAIkkiGEQkiGEmZAAQgGAAgFAAQguAAgsgGQlZgqj+lUQkhmEAAokQAAolEhmEQEimEGaAAQGZAAEiGEQEiGEAAIlgEAeehIrQBMisBuiaQFwoDIIAAQIJAAFvIDQA4BOAvBUEBCfg8WQAJBrAABwQAALYlxIDQgSAZgRAYEBDChFPQBoDGA6DiEAZGgvuQhakzAAlnQAAnzCtmQEAdpgk/Qgrg0gqg6Qgng3gkg6EAc2go1Qg+hzgvh7EAz7ggKQjfCkkJAYQgsAEguAAQgCAAgDAAQgnAAgmgDQmFggkrlMAeeuDQAAAGAAAHQAAD2htCtQhsCuiZAAQgTAAgTgCQiBgThfiZQhsitAAj2QAAgHAAgGEA8EgjvQg1BDg3A6EiZbBbdQCJhbBFgu");
	this.shape_135.setTransform(-57.3,602);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFF00").s().p("AgeJQIgGgBQiCgThfiYQhmilgGjmIAAgNIAAgGIAAgGQAAj1BsiuQBsiuCZAAQCaAABsCuQBsCuAAD1IAAAGIAAAGIAAANQgGDmhmClQhsCuiagBQgPAAgPgBg");
	this.shape_136.setTransform(100.7,510.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF6633").s().p("AjzcVIgIgKQgVgYgIgRIAKgQQAOgXANgKQgNAKgOAXIgKAQIgEgLIAEALIgPAVQgJANgOAMIgCACQmFggkqlMQChhKBpgsQDGhTCwg6IgeA8IBLhLQA5gSA2gQQiVDHh6DqIIin5QAuBvA2BsQAhBCAmBBQAxBoA4BlQjgCkkIAYQgsAEguAAIgFAAgAlAcSIACgCQAOgMAJgNIAPgVQAIARAVAYIAIAKQgnAAgmgDgAkYbiIAAAAgAkYbiIAAAAgAKLPyQBXDGB6C4Qg1BDg3A6Ihln7gAMLK7ICfDBQgvjZgCjPQCGAzBQAhIiTkvIDmgiQjQh9jehVQEFhTD+hoQAIBrABBvQgBLYlwIDIgjAxQhEk0gdlBgAySSyQgog3gkg6IFwgRIheBJICWhLIBSgEIlaD2Qgrg0gpg6gAzeM8IJkhGIixBpIh4BaIjOBxQg+hzgvh7gA26goQgBnzCtmQQEZGADjGdQhegxhjgrIAIAHQizhajDhPQEODqElDWIg3gPQAyAdAvAhQjChOjMgxQC7BhCZCMIh2gLIAlAVIl1gfQDGBpDaBDQhEAhhRAIQBMAcBAAuQhPAWhOAZIgqAOQipAnikAyQhZkzAAlmgAORlPIBNhSIB3h+IgrAaIDwjqQBoDGA6DiQjSgHlZgBgAqXqAIgYgYIgBADQiyiYinieQBNisBtiaQFwoDIHAAQIJAAFvIDQA4BOAvBUQiUBOhdAuQj9B7jVBHQhGk5hbmIIjRL3QAGjTgsgSQgWC4hWCvQhohnh/g6QAJCkgeCoQhvhYhshag");
	this.shape_137.setTransform(241.1,234);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#3300FF").s().p("AgKUsQgDgPgJgQQAJAQADAPQguAAgrgFQAAgLAGgMIAYguIgYAuQgGAMAAALQlagrj+lUQkhmDAAolQAAokEhmEQEjmEGYAAQGaAAEhGEQEiGEAAIkQAAIlkiGDQkhGEmaAAIgKAAg");
	this.shape_138.setTransform(807.6,448);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#33FF66").s().p("AmCJFQigjxAAlUQAAlUCgjwQCgjxDiABQDigBCgDxQChDwAAFUQAAFUihDxQigDwjiAAQjiAAigjwgAgnMwIAyAAIgyAAQAAgEADgDQAEgEACgDIADgJQAEgEAGgGIALgKIgLAKQgGAGgEAEIgDAJQgCADgEAEQgDADAAAEIAAAAg");
	this.shape_139.setTransform(870,179.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FF6633").ss(13.1,1,1).p("AACAAQgDAFgDAFQgFAHgDADQgJANgPAMQgBAAgBACAAmgxQgMAKgNAUQgBACgBABQgFAJgEAHAAmAyQgEgFgEgFQgPgRgHgNQgEgGgCgEQgCgGgBgF");
	this.shape_140.setTransform(212.8,414.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FFFFFF").ss(8,1,1).p("EAP7gjDQAmBSAEBqQACBNgSB4QgKBDgUCIQgOB0ALBVQAKBVAoBqQAMAeBDCcQAxBwATBJQAcBmgJBZQgEAvgSBAQgKAkgWBIQglCFARBVQAMA3ArBLQBCBxAGAMQA4BzAACWQABBtggCrQg0EWgCAKQgYClAPB5EAsIAOsQA8A9AeBgQAaBSACBlQABBBgKB3QgKB+AAA6QAABDASAmQAHARARAYQAVAeAGAJQAkA8AHBYQABAMAAAPEAvcAhAQAAAzgHBREgu8gLqQghBFADBaQACBWAkBjQAWA8AxB0QAdBIAOA7QAGAZAEAXQAUCCgwDDQgNA2geBsQgaBhgLBBQgXCSATCUQATCVA8CHQAVAvBICEQA9BwAZBHQAiBeAeDTQAHAyAIArQAXCHAfBM");
	this.shape_141.setTransform(518.9,497.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(1,1,1).p("ECZchCDQAAFVigDwQigDxjiAAQjjAAigjxQigjwAAlVQAAlUCgjxQCgjwDjAAQDiAACgDwQCgDxAAFUgEB2ohIfQAAH2j5FjQjyFZlUALQgKAAgKAAQlhAAj6lkQj5ljAAn2QAAn3D5ljQD6ljFhAAQFgAAD6FjQD5FjAAH3gECWngYDQAAIkkiGEQkiGEmZAAQgGAAgFAAQguAAgsgGQlZgqj+lUQkhmEAAokQAAolEhmEQEimEGaAAQGZAAEiGEQEiGEAAIlgEAeehIRQBMisBuiaQFwoDIIAAQIJAAFvIDQA4BOAvBUEBDgg7vQAJBrAABwQAALYlxIDQgSAZgRAYEBDChE1QBoDGA6DiEAa0gobQg+hzgvh7EAdPgkYQgrg0gqg6Qgng3gkg6EApngcmQlygfkgkuQgPgPgPgQEAY5gvHQhakzAAlnQAAnzCtmQEAz7gfjQjfCkkJAYQggADggABQgNAAgNAAQgCAAgDAAEAqVgdLQgGAAgGAAAeeuDQAAAGAAAHQAADFhGCWQgRAmgWAiQhsCuiZAAQgTAAgTgCQiBgThfiZQhsitAAj2QAAgHAAgGEA8EgjIQg1BDg3A6EiZbBbdQCJhbBFgu");
	this.shape_142.setTransform(-57.3,602);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFF00").s().p("AgeJQIgGgBQiCgThfiYQhmilgGjmIAAgNIAAgGIAAgGQAAj1BsiuQBsiuCZAAQCIABBkCIQANARANAUQAVAjARAlQATAoANArQAmB4AACQIAAAGIAAAGIAAANQgEC2hCCMQgRAmgVAjQhsCuiagBQgPAAgPgBg");
	this.shape_143.setTransform(100.7,510.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF6633").s().p("AjtcbIgIgKQgPgQgHgNIgGgLIAJgQIACgDQANgVAMgJQgMAJgNAVIgCADIgJAQQgDgGgBgFQABAFADAGIAGALIgNgBIAHgKIgHAKIgIALQgJAMgOAMIgCACQlygekgkuIgeggIArgTQCEg8BcgnQDGhTCvg6IgeA9IBLhMIACAAIAygQIA8gRQgfAogdAqQgaAlgYAnQgqA/gnBDIgeAzQgZAugZAvIBlhdIA3gzIGFlpQAuBwA3BrQAhBDAlBBIAFAKIAZAzQAkBIAnBIQjfCkkIAXQggADggABIgaAAIgGAAgAkRbpIAAAAgALcVyIhKl6QBVDEB5C2IADAEQg2BEg2A5IgbiBgANSLCICgDAQgwjZgCjPQCGA0BQAgIiSkuIDlgiQjPh9jfhVQEFhUD/hoQAIBrAABvQAALZlwIDIgjAxQhFk1gdlAgAymS5Qgng4gkg6IFwgQIhfBIICXhLIBRgEIlZD3Qgrg0gqg6gA1ZM2IJkhGIixBoIh4BbIjPBwQg+hyguh7gA3BgiQAAnzCtmPQEZF/DiGdQhegwhjgsIAIAIQizhajDhPQEPDqEkDWIg3gQQAyAdAwAiQjDhPjLgxQC6BhCaCMIh2gKIAlAVIl2gfQDHBpDaBCQhFAhhRAIQBNAdA/AuQhOAVhOAZIgrAPQioAnikAxQhakzAAlmgAOYlWIBMhRIB4h/IgrAaIDvjqQBpDHA5DhQjSgHlYgBgAqQqGIgYgZIgBAEQiziYinifQBNisBtiZQFwoDIIAAQIJAAFvIDQA4BOAvBTQiUBOheAuQj9B8jVBHQhGk6hamHIjSL2QAHjTgsgRQgWC3hWCvQhohmiAg7QAKCkgeCpQhwhYhrhag");
	this.shape_144.setTransform(240.4,237.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_106,p:{y:223.2}},{t:this.shape_105,p:{y:183.2}},{t:this.shape_104},{t:this.shape_103,p:{y:271.3}},{t:this.shape_102,p:{y:554.7}},{t:this.shape_101,p:{y:645.3}},{t:this.shape_100,p:{y:533.8}},{t:this.shape_99,p:{y:302.6}},{t:this.shape_98,p:{y:621.7}},{t:this.shape_97,p:{y:539.2}},{t:this.shape_96},{t:this.shape_95,p:{y:444.1}},{t:this.shape_94,p:{y:613.1}}]},14).to({state:[{t:this.shape_106,p:{y:212.8}},{t:this.shape_105,p:{y:172.8}},{t:this.shape_111},{t:this.shape_103,p:{y:261}},{t:this.shape_102,p:{y:544.4}},{t:this.shape_110},{t:this.shape_99,p:{y:292.3}},{t:this.shape_109},{t:this.shape_97,p:{y:528.8}},{t:this.shape_108,p:{y:611.4}},{t:this.shape_107,p:{y:296.4}},{t:this.shape_95,p:{y:433.7}},{t:this.shape_94,p:{y:602.8}}]},1).to({state:[{t:this.shape_119,p:{y:199}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116,p:{y:247.2}},{t:this.shape_115,p:{y:530.6}},{t:this.shape_114},{t:this.shape_99,p:{y:278.5}},{t:this.shape_113,p:{y:509.6}},{t:this.shape_97,p:{y:515}},{t:this.shape_108,p:{y:597.6}},{t:this.shape_112,p:{y:282.6}},{t:this.shape_95,p:{y:419.9}},{t:this.shape_94,p:{y:589}}]},1).to({state:[{t:this.shape_119,p:{y:188.7}},{t:this.shape_121,p:{y:148.7}},{t:this.shape_120},{t:this.shape_116,p:{y:236.8}},{t:this.shape_115,p:{y:520.2}},{t:this.shape_101,p:{y:610.8}},{t:this.shape_99,p:{y:268.1}},{t:this.shape_100,p:{y:499.3}},{t:this.shape_97,p:{y:504.7}},{t:this.shape_98,p:{y:587.2}},{t:this.shape_112,p:{y:272.2}},{t:this.shape_95,p:{y:409.6}},{t:this.shape_94,p:{y:578.6}}]},1).to({state:[{t:this.shape_106,p:{y:181.8}},{t:this.shape_105,p:{y:141.8}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_102,p:{y:513.3}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_99,p:{y:261.2}},{t:this.shape_113,p:{y:492.4}},{t:this.shape_97,p:{y:497.8}},{t:this.shape_108,p:{y:580.3}},{t:this.shape_126},{t:this.shape_95,p:{y:402.7}},{t:this.shape_94,p:{y:571.7}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},2).to({state:[{t:this.shape_139},{t:this.shape_121,p:{y:138}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_113,p:{y:492.4}},{t:this.shape_99,p:{y:258.7}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_107,p:{y:265.3}},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_139},{t:this.shape_121,p:{y:138}},{t:this.shape_138},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_99,p:{y:258.7}},{t:this.shape_113,p:{y:492.4}},{t:this.shape_141},{t:this.shape_133},{t:this.shape_107,p:{y:265.3}},{t:this.shape_140},{t:this.shape_131}]},1).to({state:[]},1).to({state:[]},15).wait(2));

	// pinata
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AgfB2IABgVIABgmIAAglQgYgWgbguQgdg0AAgaQAAgQAPAAQAJAAADAHIAFARIAGAWQATAyAlAmQAygpAlhBIALgUQAFgIAHAAQAGAAAFAFQAEAFAAAGQAAALgVAfQgnA8gzAmIABAAIAAATIAAAfIAAAXQAAAdgDAKQgDANgLAAQgOAAAAgXg");
	this.shape_145.setTransform(562.9,319.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("ABoB5QgIgNgTgoQg4gBhGgZQg4A7gVAAQgEAAgFgEQgDgEAAgFQgBgGALgIIASgPQARgNAPgQQgZgKAAgKQAAgGAEgEQAEgEAFAAQAFAAAJAEIASAHQA6hMAHgkIAFgYQACgJALAAQAJAAAEAHQACAFABAJIACAPQAOA5AoBUIANAAIAGgBQAQAAAAAPQAAAPgRAAIgEAAIAUAkQAJAPAAAGQgBAOgOAAQgJAAgMgSgAgeASQAtARAwAEQgXgygSg5QgVAvgfAng");
	this.shape_146.setTransform(537.7,319.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AhqCIQgEgEAAgEIAFgiQAFgmAAgoQAAg4gHg1QgOgCAAgNQAAgIAKgFIAAgCIAAgBIgBgBQAAgNAPAAQAMAAACALQAfgGAaAAQBGAAAnAhQAnAhAAA9QAACGiuAAIgegCQgEANgLAAQgFAAgEgDgAhOhiQAHA6AAA4QAAAqgFAoIATAAQBAAAAggOQA0gXAAhCQAAgwgfgaQgegZg5AAQgUAAgfAGgAhuCAIAAAAIAAAAg");
	this.shape_147.setTransform(512.3,319.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AhfCBQgDgGAAgOIAChmQgKgEAAgHQAAgKALgDIAGhdQADgTAPAAQAPAAAAASIgDAbIgEBDIAzAAQAsAAApgCQABhNABgRQADgWAOAAQAPABAAATIgCAnQgCArAAAvIABBDIAAAbQAAAXgPAAQgKAAgDgHQgCgEgBgKIgBgiIAAhBIgwABQg5AAgggCIgBBCIAAAUIAAALQgBAPgDAHQgDAGgJAAQgJABgEgHg");
	this.shape_148.setTransform(485.2,319.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AgPBvIACgnQACgnAAglIgBhgQg2ABgXAMQgCAdgPAAQgNAAAAgSQAAgdASgJQAggPBCAAQB7AAAAAeQAAAGgEAFQgEAEgGAAQgEAAgFgCIgIgEQgTgGg3gEIACBkQAAA9gDArQgBAOgDAGQgEAGgIAAQgNAAAAgTg");
	this.shape_149.setTransform(461.7,320.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("ABEB/IgJgJIgKgLQgvgxgQgJIgPgFQgIgEAAgIQAAgNAYgCQAXgCAQgRQAQgSAAgbQAAg7hLAAIgCAAQgTBNAABYIABAgIAAATQABAUgOAAQgMAAgEgOQgCgLAAgiQAAhpAShFQg2AJgGAAQgUAAAAgPQgBgKAJgDQAEgCAHAAIAMgBIAmgGQAZgEARAAQBsAAAABXQAAAbgPAWQgPAXgbAOQAVAQAVAVIAYAaQAIAHARAAQAIAAACgDIAKgKQAFgEAEAAQAFAAADAEQADAEABAGQAAALgMALIAAgBQgLAKgTAAQgaAAgMgJg");
	this.shape_150.setTransform(440.3,319.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AgiCCQgOgFAAgKQAAgPAOAAIAKACIANAEQAGg7AAgnQAAg+gQg0IgPAEIgKADQgFAAgDgEQgDgEAAgHQAAgVAsAAQAdAAARAIQARAIAAANQAAALgKAAIgLgCIgUgGQAQA1AAA6QAAAmgHA8IAQgGQAIgEAEAAQAFAAAEAEQADAEAAAFQAAAMgOAIQgOAHgaAAQgYAAgOgGg");
	this.shape_151.setTransform(422.6,320);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("Ag9CFQgDgHAAgQQgBgjAKh2IABgQQACgbADgIQAEgLAKAAQANAAABASIgGA1QgGA9gBBGQAZAHATAAQAeAAASgQQASgQAAgXQAAgug/AAIgGAAIgHAAQgNAAAAgLQAAgJAHgDQAFgCAIgBIANgCQANgDAIgLQAIgLAAgQQAAgVgSgMQgSgMggAAQgXAAgZAKIgOAGQgHADgFAAQgGAAgEgDQgDgEgBgFQAAgIAPgIQAhgUAvAAQAqAAAZAUQAZATgBAgQAAAegVAVQAXAHAOARQANASgBAZQAAAmghAZQgcAVgmAAQgSAAgYgHQgDAPgLAAQgKAAgDgIg");
	this.shape_152.setTransform(404.7,319.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AgfB2IABgVIABgmIAAglQgYgWgbguQgdg0AAgaQAAgQAPAAQAJAAADAHIAFARIAGAWQATAyAlAmQAygpAlhBIALgUQAFgIAHAAQAGAAAFAFQAEAFAAAGQAAALgVAfQgnA8gzAmIABAAIAAATIAAAfIAAAXQAAAdgDAKQgDANgLAAQgOAAAAgXg");
	this.shape_153.setTransform(532.1,277);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("Ag9B2IAJhEQACgYAAglQAAgzgCgjQgKAFgNAMQgJAJgFAAQgHAAgEgFQgEgEgBgFQAAgHAMgMQAkghA5gBQAxAAAcAXQAcAXAAAmQABAogWAXQgVAZgigBQgUAAgOgHQgMgHAAgJIAAAAQgBgHAEgDQAEgEAFAAQADAAALAEQALAFAJAAQAUgBAOgPQANgPgBgZQAAgagTgQQgUgQghAAQgIAAgRADQACAqAAAXQAAAwgCAnQgCAtgIAjQgDANgLAAQgPgBAAgUg");
	this.shape_154.setTransform(510.1,276.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("Ag9B2IAJhEQACgYAAglQAAgzgCgjQgKAFgNAMQgJAJgFAAQgHAAgEgFQgEgEgBgFQABgHALgMQAkghA5gBQAxAAAcAXQAdAXAAAmQAAAogWAXQgVAZgigBQgVAAgNgHQgNgHABgJIAAAAQgBgHAEgDQAEgEAFAAQADAAALAEQALAFAJAAQAVgBANgPQANgPgBgZQAAgagUgQQgTgQghAAQgIAAgRADQADAqAAAXQgBAwgCAnQgCAtgJAjQgCANgLAAQgPgBAAgUg");
	this.shape_155.setTransform(489,276.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("ABoB5QgIgNgTgoQg4gBhGgZQg4A7gUAAQgGAAgDgEQgFgEAAgFQABgGAJgIIAUgPQAQgNAPgQQgZgKAAgKQAAgGAEgEQAEgEAGAAQAEAAAIAEIATAHQA6hMAIgkIAEgYQADgJALAAQAIAAADAHQACAFABAJIADAPQAOA5AoBUIANAAIAGgBQAQAAAAAPQAAAPgRAAIgEAAIATAkQAJAPAAAGQAAAOgNAAQgKAAgMgSgAgeASQAuARAvAEQgXgygSg5QgVAvgfAng");
	this.shape_156.setTransform(464.7,276.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AheCBQgEgGAAgOIAChlQgKgGAAgGQAAgKALgDIAHhdQADgTAOAAQAOAAAAARIgCAcIgFBDIA0ABQAsgBApgCQABhNACgSQABgUAPAAQAPAAAAATIgCAmQgCAsAAAuIAABEIABAcQAAAVgQAAQgIAAgEgFQgCgFgBgKIAAgiIAAhBIgyAAQg4ABgggCIgCBBIAAAVIAAAMQAAAPgCAFQgEAIgJAAQgJgBgDgGg");
	this.shape_157.setTransform(439.2,276.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(1,1,1).p("AibMIQgRg3AIg7QAIg6AegyQAbgsBAg5QBMhGAWgaQBVhnAQigQAMh9geipQgskDgDgfQgRilAkh4");
	this.shape_158.setTransform(493.7,127.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAZHglFQBAgSAYAYQAQAQgBAuQgBAwAMAQQALAOAbAKQAhAMAJAHQAaARARAfQE0DCg1AGQg2AGgFgDQgEgCAIAYQj5jGgQgFQgTgGgJgDQgngMgXgnQgBgCgCgCQgUglAHgnQACgKAAgGQABgJgDgGQgHgQgbgDQgMAAgHAAQgBAAAAAAQgNgBgUAEIgBABIAjgEAekg0IgqDzIjTAAEAkSAC/QgGAhgbAnQghAjgNAUQgHAIgKAUQgKAVgGAZQgGAZAVACQABAAABAAQgDAFgBAEQgcBEgCCJQgCCRgVA+QgFAOgKAdQgIAaACATQACAXASARQATAQAVgGQgBg0ABgWQACgqAJgfQAGgTAWgyQATgrAEgaQAFgegHg5QgIg6ACgbQAAAAAAgBQADgcASgnQAJgCAEANQADAHAGAPQAEAKADAaQADAYAEAMQACAEAEAIQADAHABAGQAAABABAKQAAAGACAEQACAKALALIARARQgEAfgHAdQgBADgBADQgFAVgZBIQgVA6gFAlQgHAlAKAoQAKApgQAzQgQA0ABAGQACAGAbgOQAbgOAOAhQAWgxAGhUQAHh0AEgWQADgMAMgoQALAEAEAGQAEAIgDAUQgCAZAMAJQACABAHAeQASgcAFADQAGACACgDQACgEAMAEQAFACACgIQACgJgDgSQgGglgCgMQgCgMgMgQQgSgZgMgIQgHgFgDgDQAEgPAGgQQAPgvAGgnQAAgGABgFQAEghgGAHQgDALAFAPQACAGACAGQAXBCAGAXQAWBZgRBUIAAAAQAAABAAABQgFAVgTBBQgPA2gFAiQgFAiAOARQAJALAcAIQAcAHAKAMQgEhAAiiMQAgiCgLhHQgGgngchLQgchJgFgoQgDgRABhiQABhGgTgoQgPgegegeQgRgPg2gTQgBAAAAgBQgIgCgIgDQAOAMAMAOQAtA2AABXQABAIgBATQgBAWgBAlQgDA2AEAhQAEAVAPAfEAkrAC/IgZAAImYAAEAk9AC/IgSAAQgMAxgrBEQgxBNgQAiAekg0IGrDzIgSAAEAjsAHFQAQglAdgvQADgFADgEQAdByACA4QADA8gGA0EAjXAIJQAJAuAWAqQAMAYAFANQAFAVAAABQAHARAdAREAlgAMrQAIgbANgmQABgFACgEEAkfAFoQA1hYADg3EAStggWIGck1IgCAGIgVA6EAYxgkJQgDAKAFASQAFATAHANQAFALABAJQADATgMAcQgGAPgPAeQgGAXAAAuQAAAYBCICQAjg5ASAzQg7oPACgxQACgjABgDQAAgFABgFQAAgCABgDQACgMADgKQAGgOADgIQAFgNAAgKQAAgMgMgbQgLgYgMgTIgjAFIihGxIhQDWIjaJLQDCEfAAFvQAAAFAAADQgDGXieDJQiCCng5A4IBvIDIAnCzIBEElIAVBZIgJgIIgegaQgQAcguAsQguAtAIAvQAIAvgNBdQgNBegNBIQgNBJguDOQguDPBogrQABgHACgGQAHgGAJADQAEABAMAGQAKAGAGAAQAPAAAIgSQAFgLACgXQAGgvAxhUQAwhUAGgwQAEgegIguQgKhBgBgMQgBgsANg9QAQhEAHgjQABgBAAgCQAEgVACgUQABAUADAXQAHA/ATBbQAhCVgICEQgJCDgKBJQgJBIA4AyQA9kagdj5Qgej4hXijQgHgOgIgOQAAAAAAAAQAAAAAAgBQgXgogbgmAP1+MIC4iKIDjC+EAZjgh0QACAHAEAJQAIARABADQAMAbACAeQAAASACAHQABADAJAPQAGALArEjQAVg7AXAmQgukgAAgPQAAgQgIgNQgCgFgGgJQgHgJgCgFQgGgKgCgOQgFgaABgjEgTUgmRQgGATgNAGQgNAFgHACQgHACgDAcQgRAYgMAKQgNALgiAqQgiAqgFBuQAcBVicHfQgBAEAAACQABALAWgSQAbgWAXApICCqQQACAeAIAUQACAJAIAQQADAIANAvQAJAiATAXEgUMgj2QgHAFgEACQgIAFgNAsIgCAQEgTygkJQgFAFgJAGQgGAFgGADQABANgCAcQAAACADANQACAGAHAKIARAkQAAAMADARQAEAbABAJQADAggJA2QgDAOgRA6QgSA5AeB5QAPgZANAEQAOAEAPgCQgXh6AFgWQADgMAGgRQADgHACgGQAFgNABgBQAHgeADgqQAAgEABgFQAFhDgGgnQAAAAAAgBQgBgDAAgCQgEgTgCgLQgCgOgCgLQAGATAIAPIAIALQACADABACQABAAAAABQABABAAAAQABADABABQAEAIAHAVQAFASAHAIQAEAFAJAFQAEACAKAGQARALAPgDEgTygkJQgDAMACARQACAMAFAYQABATgFAkQAAADAAAEEgTFgl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");
	this.shape_159.setTransform(470.7,367.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#99FF33").s().p("AqsNzQgMgLAAgQQAAgQAMgMQAMgLAPAAQARAAALALQAMAMAAAQQAAAQgMALQgLAMgRAAQgPAAgMgMgAFKNdQgMgMABgRQgBgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAARgMAMQgMAMgSAAQgRAAgMgMgAkbLuQgIgIAAgLQAAgLAIgHQAHgIALAAQALAAAHAIQAIAHAAALQAAALgIAIQgHAHgLAAQgLAAgHgHgALtFpQgJgJAAgMQAAgNAJgJQAIgIANAAQAMAAAJAIQAJAJAAANQAAAMgJAJQgJAJgMAAQgNAAgIgJgAA7FeQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgKAAgHgHgAuhEmQgSgTgBgbQABgaASgTQAUgTAaAAQAbAAASATQAUATgBAaQABAbgUATQgSATgbAAQgaAAgUgTgAOOkWQgGgYAAgjQAAgiAGgZQAHgYAJAAQAKAAAGAYQAGAZABAiQgBAjgGAYQgGAZgKAAQgJAAgHgZgAsmruQgQgPAAgWQAAgWAQgQQAPgPAWAAQAWAAAPAPQAQAQAAAWQAAAWgQAPQgPAQgWAAQgWAAgPgQgABIs7QgMgMAAgQQAAgQAMgLQALgMARAAQAPAAAMAMQAMALAAAQQAAAQgMAMQgMALgPAAQgRAAgLgLg");
	this.shape_160.setTransform(484.2,323.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#33FFFF").s().p("AhmEiQAvjPAMhJQANhHANheQANhdgIgvQgIgvAtgtQAugsAQgcIAeAaQgVAsgEBNIgJABQgmAtgMBLQgGAmgDBiQgCA2gGA1IgCASQgPCHgeCyQgNAhAAAbQgFAFAFAFQgSAHgNAAQhBAAAmiqg");
	this.shape_161.setTransform(579.2,559.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF3399").s().p("AAHGSQAKhIAJiEQAIiEghiUQgShagHhAIgEgrIACgaQACg9gTgsIANgHQBWCjAeD5QAdD3g9EaQg3gyAIhIgAhfoLQAbAmAXAoIgOAIIgPACg");
	this.shape_162.setTransform(599.3,560.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#339933").s().p("AhJG1IgRgJQgIgCgIAGIAKg5IgKA5IAAAAIgDADQAAgbANghIAJgWQAkhNAEgOQALgmgDhGQgBg6ACghIAAAAIACgTQAGgdATgvQAVg3AGgXQALgsgBh8IABgpIAAgBQAEhNAVgsIAJAIIAQgCQAJAMAGAPQAUAsgDA9IgBAaQgCAUgFAVIAAADQgHAigRBFQgNA9ACArQABANAKBAQAHAugDAeQgGAwgxBUQgwBUgFAvQgDAWgFAMQgHASgPAAQgGAAgKgFgAhqGwIAAAAg");
	this.shape_163.setTransform(585.7,560.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#3300FF").s().p("AhTDyIAnh8QAUhJAHg0QAFgvgChaQgCheAEgsQAHhLAdg5QAcg2A7gWIAFAMQgUAzAABVQgBB5gCASQgEAogPA7IgZBiQgLAxgHA8IgBAMIgGAQQg2CugZC1QgLgLgRABQgRACgKANQgShhAtiYg");
	this.shape_164.setTransform(352.4,556);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFF33").s().p("AhDFEQAFhdAEguIAAgBIACgQIABgMQAIg8ALgxIAZhhQAOg8AEgoQACgRAAh6QAAhVAUgzIADAAIAWgUIAJAJIABASIAAAAQAGCDgBA+QgBBogYBRIgUA+QgNAlgEAbQgGAeAAA0QAAA/gBAUIgLBeQgCA1AXAeQgOgQgZAHQgZAGgGAVQgMgpAFhRg");
	this.shape_165.setTransform(361.1,550.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#CC3366").s().p("AgPGTIgDgvQgCgbABgSQACgXAHggIANg3QAlifgci3QgXibg9iSIAAAAIAAgBIgHgQIgJgJIBAg+IAIAHQBPCSAUDOQAMCDgLD0QgFBpgGA0QgLBXgYBCQgSgFgTAFQgRAFgOAMQARg9gChDg");
	this.shape_166.setTransform(375.3,553);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#990099").s().p("AATHLQgagIgKgKQgNgRAFgjQAEgiAQg1QAShCAEgUIABgCIAAAAQAQhUgWhZQgFgXgWhBIgEgNQADghgGAIQgPgfgDgVQgFghADg2IADg7IAAgcQAAhWgtg3QgMgNgPgMIARAFIAAAAQA3AUAQAPQAeAeAOAeQATAoAABGQgBBhACASQAGAnAbBKQAdBKAGAmQAKBHggCDQgiCMAEA/QgKgLgcgIg");
	this.shape_167.setTransform(718.4,434.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#339999").s().p("EAiGAKwQgaAOgCgGQgCgGARgzQAQg0gKgoQgKgpAHglQAFglAVg6QAYhHAGgWIABgGQAHgcAEggQAGg0gCg8QgCg4gdhxQA1hYADg3QAtA3AABWIAAAbIgDA7QgCA1AEAhQADAVAQAfQgDALAFAPIgCALQgFAngQAvIgKAfIgCAJIgVBBQgNAogCAMQgEAWgHB0QgGBUgWAxQgPghgbAOgEghRgAMIgijDQgGgkgFgVQgKgfgPgVQgEgGgWgZQgQgUgGgPQgKgXAEgvQAFgwgIgWQgGgTgTgWIgfglQgQgWgFgWIAAgCIAJgqIgEgSQA3AaAkBKQALAYAOApQARAzAGAPIAXAyIAWAyQARAnAOA0IAXBcQAMA1ACAgQABAvgRAhQgHALgKAGQgFACgEAAQgGAAgFgEg");
	this.shape_168.setTransform(483,410.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00FF00").s().p("Ag+IZQgdjcAoipQAoinAIgtQAGgtgMgwIgVg+QgMglADgbQABgQANghQAMggABgSQAAgSgIgZIgFgNIgJgeQgGgVAAgSIABgGQADgYAhgBIAmAAIACAGQATAxAJAfIAAACIAFARQgKAUAAAQIABAHQgCAKgEAIQgXA0ACAgQABAgAUBGQATBFABAiQABAogaA0QgsBYAFAtQAGAtgPAYQgNAYABBHQACBGAGCjQgdgOgfAMgAA9mGIAAAAgAA8mNQAAgQAKgUIgJArIgBgHg");
	this.shape_169.setTransform(243.5,384.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FF3333").s().p("AALBnQgfg1gKgTIAGgPQAHgcADgqIAAgKQAeBDAxBcQAyBdASAtQASAtgcgPQgcgPgXAZQghh9gcgtgAhnhGIgQg3QgIgRgCgIQgIgVgCgdIACgRQANgsAIgEIALgHQABANgCAbIADAPQACAHAHAKIARAkQAAAMADAQIAFAlQADAggJA2QgTgXgJgig");
	this.shape_170.setTransform(352,165.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFF00").s().p("Ab+YmQgMgIACgaQADgTgEgJQgEgGgLgEIAVhBIACgJIAKAIQAMAIASAZQANAQACAMIAHAxQADATgBAIQgCAJgGgCQgMgEgCADQgCAEgFgDQgGgDgSAcQgHgegBgBgAaQVPIgFgWQgFgNgNgYQgWgpgJguIAAgCQADgbASgoQAKgCAEANIAJAWQADALADAZQADAYAFAMIAGAMIAEANIAAALQABAGABAEQADAKALALIAQARQgEAggHAcQgdgRgGgRgAY0RWQgUgCAGgYQAGgaAKgVQAKgUAGgIQAOgUAggjQAbgmAHgiIAZAAQgMAxgrBEQgyBOgQAhIgCAAgA7p2YIgPgIQgIgFgFgEQgHgIgFgTQgGgVgEgHIgCgEIgBgCIgBgBIgDgEIgIgMQgIgPgGgTIgBgDIAAgIQgCgQACgQQALAFAGAOIAKAWQAGAJALAIQAHAFAQAIIAsBuIgFAAQgNAAgNgJg");
	this.shape_171.setTransform(534.4,298.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#33CCCC").s().p("AgnCHQASg5ACgOQAJg2gDgfIgFgkQgDgRAAgMIABgHQAFgkgCgTIgGgkQgDgRAEgMIADgEIAAAAQAEgIACgRQACgRAGgIIAPgRQAKgKABgTIAaA/QgOAbgDAbQgCAQACARIAAAHIABAEIAEAZIAFAeIABAFIAAABQAGAngFBCIgBAJQgCAqgIAeIgFAOIgFANQgHARgDAMQgFAWAYB6QgQACgOgEQgMgEgOAZQgfh5ASg6g");
	this.shape_172.setTransform(346.4,157.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF99FF").s().p("AiNU+QgJhzgDgQQgJgogZg3IhfjgQgdhBgRgZQgTgcgvgwQg4g6gxgxIBtAXIgCAHQAPAjA6ApQA+AtAQAdQANAVAIAgQAEATAHAnQASBTA3BJIAbAjQAQAUAHAQQAKAWAFAkQAGAzACAJQAEAUAOAoQACB4gCgKQgCgKgQANIgrAkQgcgqgHhQgADXpWQgWARgBgKIABgHQCcnfgchVQAFhuAigqQAigpANgLQAMgLARgXQADgdAHgCIAUgHQANgFAGgUIAPAlQgBASgKAKIgRASQgFAHgCASQgCARgEAHQgDACgBACQgFAGgJAGIgMAIIgLAHQgIAEgNAsIgCARIiCKPQgXgogbAWgAHH0vIAAAAgAHL0zIgBABIgDADQABgCADgCgAHL0zIAAAAg");
	this.shape_173.setTransform(298.5,269.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#0033FF").s().p("AgSgFIgJgSQgDgHABgSQgCgegMgbIgJgUQgEgJgCgHIABgFQACgMADgKIAJgWQAFgNAAgKQAAgMgMgbQgLgYgMgTIASAAQAcADAHAQQADAGgBAJIgCAQQgIAnAVAlQgBAjAFAaQACAOAFAKIAJAOIAIAOQAIANgBAQQAAAPAvEfQgXgmgVA7QgrkjgGgKg");
	this.shape_174.setTransform(640.2,165.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#CC0033").s().p("Ag7iRQAAguAHgWIAVguQAMgcgDgTQgCgIgFgMQgGgNgGgTQgFgSADgJIAjgGQALAUALAYQANAaAAAMQAAALgFANIgJAVQgEAKgCAMIgBAFIgBAKIgCAmQgCAxA7IOQgSgzgjA5QhCoBAAgYg");
	this.shape_175.setTransform(633.6,175.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF6633").s().p("AC1aFQgTgRgBgXQgCgTAHgaIAQgrQAUg+ADiRQACiJAchEIADgJQARghAxhOQArhEAMgxIASAAQAOAMAMAOQgDA3g1BYIgGAJQgdAvgRAlQgSAogDAbIAAACQgCAaAIA7QAIA4gFAeQgEAbgTAqQgWAygGATQgJAfgDAqQgBAXABAzQgFACgGAAQgPAAgNgMgAjQ2TIgcgIQgogNgWgnIgDgEQgVglAIgnIACgPQABgJgDgHQgHgQgcgDIgSAAIgBAAQgNAAgVAEIAWg7QBAgSAYAZQAQAQgBAtQgCAwANARQALANAbAKQAhANAJAGQAaASARAfQEzDBg2AGQg1AGgFgCQgFgDAIAYQj3jFgQgGg");
	this.shape_176.setTransform(669.6,297.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFF99").s().p("ALHYJIFUipIAnCzIj3BbgAvPW1IA3jXIEdDIIivCAgAaHJ+IA9liIDABuIgqD0gA+DCXIAOisID1hDIAPFEgAPV3MIC4iKIDjC9IhQDXgAwn3TIDriaICbB9Ik5Deg");
	this.shape_177.setTransform(473.9,323);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#99CCFF").s().p("AlcRzQkRhRjajaQgigiggglQiIifhNjIQhFiyAAjoQAAiQAeiFQBDkjDVjoIAmgnQDvjvEzhLQCMgiCZAAQDJAACwA6QEBBUDODOQBYBYBCBhQDCEfAAFvIAAAIQgCGXifDJQiCCng5A5QmWEwkSAiQhOAKhSAAQi3AAilgxgAqpMqQgMALAAAQQAAAQAMAMQAMALAPAAQARAAALgLQAMgMAAgQQAAgQgMgLQgLgMgRAAQgPAAgMAMgAFNMQQgMANABAQQgBASAMALQAMAMARABQASgBAMgMQAMgLgBgSQABgQgMgNQgMgLgSAAQgRAAgMALgAkYK2QgIAHAAALQAAAMAIAHQAHAHALABQALgBAHgHQAIgHAAgMQAAgLgIgHQgHgHgLgBQgLABgHAHgALwErQgJAKAAAMQAAANAJAIQAIAJANAAQAMAAAJgJQAJgIAAgNQAAgMgJgKQgJgIgMAAQgNAAgIAIgAA+EqQgHAGAAALQAAAJAHAIQAHAGAKAAQAKAAAHgGQAHgHAAgKQAAgLgHgGQgHgIgKAAQgKAAgHAIgAueC4QgSATgBAaQABAbASATQAUATAaAAQAbAAASgTQAUgTgBgbQABgagUgTQgSgTgbAAQgaAAgUATgAORmeQgGAYAAAiQAAAjAGAZQAHAYAJAAQAKAAAGgYQAGgZABgjQgBgigGgYQgGgZgKAAQgJAAgHAZgAsjtLQgQAPAAAWQAAAWAQAPQAPAQAWAAQAWAAAPgQQAQgPAAgWQAAgWgQgPQgPgQgWAAQgWAAgPAQgABLuFQgMALAAARQAAAPAMAMQALALARAAQAPAAAMgLQAMgMAAgPQAAgRgMgLQgMgMgPAAQgRAAgLAMg");
	this.shape_178.setTransform(483.9,325.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF0000").s().p("EgmRAGfQgRAAgNAIQgLgZAKgjQAFgPAUgtQAbg7AYiBQAYiAAJgXQAhhYATgVQAUgVAFgjQAFgnAEgSQAHghASgQQAWgPAKgIQARgOACADQgBASAGAVIAKAdIgFAFIAAABIAAAAQgjAkgcBQIgzCPIgwDnQgcCGgeBCQgNgIgRAAgEAmjAC5IgRAAIgZAAImYAAIAqjzIGqDzgATuC5QCejIACmXIG8D+Ig9Fhg");
	this.shape_179.setTransform(460.5,368.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#99FFCC").s().p("AmiICIB0l2IClBxIjIDCIhAA/IgRAEIARgEIgWAUgAj4hKIB0nHQAfAlAiAiQDZDaESBRImEEcg");
	this.shape_180.setTransform(406.7,455.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#9966FF").s().p("AHCISIgegbIkokAID3hbIBEElIAVBZgAnLjHQESghGVkxIBwICIlTCpg");
	this.shape_181.setTransform(545.9,463);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF33CC").s().p("AANCUIgOlFIJfimQgeCFAACRQAADnBECygAnhAPIhtgWIgOAAIgoAAIGOhmIgNCsg");
	this.shape_182.setTransform(307.6,331.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FF9933").s().p("Aj+BbIE3jcIHgGEQkzBLjuDvIgmAngAmSkUIgshvIgyh9Igag+IgOglIG3FkIjrCag");
	this.shape_183.setTransform(400.8,183.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#33CC33").s().p("AhcHQQjOjOkAhUIH3l4IFLEJIjbJLQhBhihYhYgACElUIGdk1IgCAGIgWA6IAAABIAigEIgjAFIihGxg");
	this.shape_184.setTransform(577.2,194.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(1,1,1).p("AibMJQgRg4AIg7QAIg7AegyQAbgrBAg6QBMhFAWgaQBVhnAQihQAMh8geiqQgskCgDgfQgRilAkh5");
	this.shape_185.setTransform(494.3,128.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAYDglFQA/gSAZAYQAQAQAHAlQAHAmANANQANANAkADQAlACABAgQABAhASAeQFPBmhEAgQhDAhAAAYQjri4gYAFQgZAEgHgWQgHgWgdgHQgdgGgCgBQgVglAHgnQACgKABgGQAAgJgDgGQgGgQgcgDQgMAAgHAAQAAAAgBAAQgMgBgVAEIAAABIAigEIgjAFQgDAKAFASQAGATAGANQAFALACAJQADATgMAcQgHAPgOAeQgHAXAZAaQAaAbA0IMQAYhSAsBCQhQoMgNgjQgNgiAAgEQABgFAAgFQABgCAAgDQACgMAEgKQAGgOADgIQAFgNAAgKQAAgMgNgbQgLgYgMgTAdfg0IgpDzIjUAAIofAAQiDCng5A4IBwIDIAnCzIBEElIAUBZIgJgIIgegaQgQAcgtAsQguAtAHAvQAIAvgNBdQgNBeAHBGQAHBGgzDQQgyDPBKgoQgGgFAFgFQABgCACgBIAAAAQAIgGAIADQAEABANAGQAKAGAGAAQAPAAAHgSQAFgMAOgUQAPgUAxhTQAyhTgBgvQAAgvgEgxQgDgxgMgqQgNgqANg9QARhEAHgjQAAgBAAgCQAEgVACgUQACgNAAgNQACg9gTgsQgGgPgJgMAdfg0IGrDzIgSAAQAPAMALAOQAuA2AABXQAAAIAGAfQAFAfgIAjQgIAkADAbQAEAaAPAfEAlTAJhQAKgCAYAZQAYAYA3A/QA4BAiDBkIAAAAQAAABgCA8QgCA9gSAOQgRAOgFAeQgEAeAcgcQAcgbAUAbQAVAaARABQAHgHA7iRQA6iSgIg6QgJg6g/hDQhAhEgDgYQgCgXgChTQgBhUgYgiQgYgigfgeQgQgPg3gTQAAAAgBgBQgHgCgJgDIgSAAIgYAAQgHAhgbAnQgfAigHANQgGAMgFARQgFAQgHAaQgIAaADAGQADAGABAAQAGAFgBAlQgCAmgECGQgECGgMAvQgMAugZAZQgYAYgBALQgBALASARQATASA7gCQAHgIgMgqQgNgqAdglQAcgkgGgjQgGgkAMgbQAMgcgHgqQgGgqgDgPQgJgagGgbQAAAAAAgBQADgcASgnQAQglAegvQADgFACgEQAeByACA4QABAsgDAoQABAAAAAAQAAAFgBAFQAAABAAABIAAACIgBAFIgBAFQAAACAAACQgEAfgHAdQgBADAAADQgGAVgEBFQgEBFgNAjQgOAjgBAnQgCAmgQAzQgQA0ASgWQATgWANAKQAMAJAbADQAGgIAWhRQAWhQgNglQgNgmANgoQALAEAEAGQAEAIgDAUQgCAZAMAJQABABAHAeQAggHgBgIQgCgIACgDQACgEAMAEQAGACABgIQACgJgDgSQgFglgCgMQgCgMgNgdQgNgdgEgaQgDgagKAWQAPgvAGgnQABgGAAgFQAEghgGAHQgCALAEAPgEAjOAC/ImYAAEAinAHFQAKgDAGALQAHALALAOQAKANABAUQAAAUADAIQAEAJgJAGQgJAHAGAHQAGAHABAIQABAJABAEQADAJAdABQAAAKgBAJEAjmAC/QgLAxgrBEQgyBNgQAiEAihAI+QAHARAJASQANAYAFANQAFAVAAABQAGARAdAREAkcAMrQAIgbAMgmQACgFALgjEAjaAFoQA2hYACg3EARoggWIGdk1IgCAGIgWA6AOw+MIC4iKIDjC+IhQDWIjaJLQDCEfAAFvQAAAFAAADIG8D/Ig9FhAaZ7IQgIgwA+AYQg0jqgSgkQgTgkgHgNQgDgFgGgJQgGgJgDgFQgFgKgCgOQgFgaABgjEAYegh0QACAHAFAJQAIARABADQAMAbABAeQAAASADAHQABADAPAIQAPAHA8EkAaa7CQAAgDgBgDEAXsgkJIihGxEgUYgmRQgGATgOAGQgNAFgHACQgGACgEAcQgRAYgCAKQgDALggAqQghAqgbBuQBBBahTDbQhSDbALAXQALAXARgZQASgZAVBYQB3ktgYl9QADAbANANQAOANAFAMQAGAMACAqQACApATAXEgU2gkJQgFAFgJAGQgHAFgFADQgHAFgFACQgIAFgMAsIgDAQIAAAEEgU2gkJQgEAMADARQACAMAEAYQACARgEAdQgBAEAAAFQgBADAAAEQABAMACARQAFAbAAAJQADAggJA2QgCAOgSA6QgRA5A3CXQgLg3AaACQAbACAUATQggiVgHgMQgHgMAHgRQADgHACgGQAFgNAAgBQAIgeACgqQABgEAOgWQgJgygGgnQAAAAAAgBQAAgDgBgCQgEgTgBgLQgDgOgBgLQAFATAJAPIAIALQABADACACQAAAAABABQAAABAAAAQACADABABQAEAIAGAVQAFASAHAIQAFAFAIAFQAFACAKAGQAQALAPgDIBGCwIDriaIm3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");
	this.shape_186.setTransform(477.6,367.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#3300FF").s().p("AhpHaQAfhOAQhvIAZi1IANhvQACgTABgbIABgwIAAggIgBgLIAAgKIAAg0IAAgrIACghQAIhLAdg5QAcg2A6gWIADAHIACAFQgOAkgFA1IgCCiIgBAYQgEAogPA7IgZBiQgMAxgHA8IgBAMIgCANIgVB8QgUCBgUBtQgggPgSABQgRACgJANIAHgRg");
	this.shape_187.setTransform(352.7,557);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFF33").s().p("AhMEzQgEhXACgXIACgSIACgNIABgLQAIg8ALgyIAZhhQAPg7AEgoIABgZIADihQAEg1ANglIgCgEIACgFIADAAIAWgUIAJAJIABASIAAAAQAGCDASBoQATBngSAjQgSAkgZAkQgZAmASArQATArgQA9QgRA8ACAMQADANgpAwQAmAuAWBLQgXgQgVAAQgXABgUARQgRhIgDhOg");
	this.shape_188.setTransform(362.9,551.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#CC3366").s().p("AghG5QAfAVADgZQAEgZATgSQATgSAGguQAGgvgMh2QgNh2glirQgnisg9iSIAAAAIgBgBIgGgQIgJgJIBAg+IAHAHQBPCSAmCiQAlCjAPC5QAQC7gTBOQgTBOhdAmQgQgFgTAFQgTAFgNAMQAQg9AQgdg");
	this.shape_189.setTransform(378.9,553);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#33FFFF").s().p("AhREeQAyjPgGhHQgHhFANhdQANhdgIgwQgIgvAtgsQAugtAQgcIAeAbQgVAsgEBNIgJAAQgmAugMBLQgGAlgDBjQgCA2gGA0IgCASQgPCHgeCyQgNAiAAAaQgFAGAFAEQgMAHgIAAQgtAAAqiug");
	this.shape_190.setTransform(580.6,559.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FF3399").s().p("AgCGSQAJhIAahyQAahygoiFQgniFgIgwQgJgvgBgUIACgaQACg9gUgsIAOgHQBpCfAgD5QAgD3hVEeQg3gyAJhIgAhpoLQAbAmAWAoIgNAIIgPACg");
	this.shape_191.setTransform(600.3,560.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#339933").s().p("AhJG1IgRgJQgIgCgIAGIAAAAIgDADQAAgbANghIgKA5IAKg5IAJgWQAkhNAEgOQALgmgDhGQgBg6ACghIAAAAQABgLAWgxQAWgwAEgZIAKg3QAGgdgBh8IABgpIAAgBQAEhNAVgsIAJAIIAQgCQAJAMAGAPQAUAsgDA9IgBAaQgCAUgFAVIAAADQgHAigRBFQgNA9ANAqQAMApAEAxQADAxABAvQAAAvgxBTQgxBTgOAUQgPAUgFAMQgHASgPAAQgGAAgKgFg");
	this.shape_192.setTransform(585.7,560.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00FF00").s().p("AhFIJIAGgcQAaioAKinQAKimAFguQAEgtgqhBQATgvgIgdIgPgxQgHgVAEgfIAFgwQAAgSgJgaIgEgNIgKgdQgGgVABgSIAAgGQAEgZAgAAIAnAAIACAFQASAxAJAfIAAACIAFASQgKAUAAAPIABAHQgCAKgEAIQgVA0AQAgQASAhALBFQALBFAXAlQAXAlgiBXQghBYAFAkQAGAlgKAaQgJAagHBFQgHBEgECeQgQACgMAAQgpAAgCgZgAATmVQAAgPAKgUIgJAqIgBgHg");
	this.shape_193.setTransform(247.6,385.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#99CCFF").s().p("AlcRzQkRhRjajaQgigiggglQiIifhNjIQhFiyAAjoQAAiQAeiFQBDkjDVjoIAmgnQDvjvEzhLQB0gcB+gFIAzgBQDJAACwA6QEBBUDODOQBYBYBCBhQDCEfAAFvIAAAIQgCGXifDJQiCCng5A5QmWEwkSAiQhOAKhSAAQi3AAilgxgAqpMqQgMALAAAQQAAAQAMAMQAMALAPAAQARAAALgLQAMgMAAgQQAAgQgMgLQgLgMgRAAQgPAAgMAMgAFNMQQgMANABAQQgBASAMALQAMAMARABQASgBAMgMQAMgLgBgSQABgQgMgNQgMgLgSAAQgRAAgMALgAkYK2QgIAHAAALQAAAMAIAHQAHAHALABQALgBAHgHQAIgHAAgMQAAgLgIgHQgHgHgLgBQgLABgHAHgALwErQgJAKAAAMQAAANAJAIQAIAJANAAQAMAAAJgJQAJgIAAgNQAAgMgJgKQgJgIgMAAQgNAAgIAIgAA+EqQgHAGAAALQAAAJAHAIQAHAGAKAAQAKAAAHgGQAHgHAAgKQAAgLgHgGQgHgIgKAAQgKAAgHAIgAueC4QgSATgBAaQABAbASATQAUATAaAAQAbAAASgTQAUgTgBgbQABgagUgTQgSgTgbAAQgaAAgUATgAORmeQgGAYAAAiQAAAjAGAZQAHAYAJAAQAKAAAGgYQAGgZABgjQgBgigGgYQgGgZgKAAQgJAAgHAZgAsjtLQgQAPAAAWQAAAWAQAPQAPAQAWAAQAWAAAPgQQAQgPAAgWQAAgWgQgPQgPgQgWAAQgWAAgPAQgABLuFQgMALAAARQAAAPAMAMQALALARAAQAPAAAMgLQAMgMAAgPQAAgRgMgLQgMgMgPAAQgRAAgLAMg");
	this.shape_194.setTransform(483.9,325.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#33CCCC").s().p("AgvB4QASg5ACgOQAKg1gEggIgFgkQgCgRAAgMIABgQQAEgegCgQIgGgkQgDgRAEgMIADgEIAAAAQAEgIACgRQADgRAFgIIAPgRQAKgKACgTIAZA/QgNAbgEAbQgCAQACARIAAAHIABAEIAEAZIAFAeIABAFIAAABIAPBZQgOAVgBAEQgCAqgIAeIgFAOIgFANQgHARAHAMQAHALAgCWQgUgTgagCQgagCALA3Qg3iXARg6gAgchsIABgJIgBAQIAAgHgAgbh1g");
	this.shape_195.setTransform(347.2,159.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FF3333").s().p("AAEBgIg2hJIAFgOQAIgdACgqQABgEAOgWQAQBUA6BjQA7BkAiAaQAhAbgtgHQgugGAPAuQg9iGgngzgAh1hVQgCgqgFgMQgGgMgNgNQgOgNgCgbIgBgEIADgQQAMgsAIgFIAMgHQAAANgBAcIACAPQADAGAbADIgCAbIgBAJIAAAHQAAAMACARIAFAkQAEAggKA2QgTgXgCgpg");
	this.shape_196.setTransform(354.1,166.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FF99FF").s().p("AhgUmQgYhdgJgdQgIgcg5hlIAAAAIgBgCQg4hlgJhMQgzhAgRgYQgTgcgvgwQg4g7gxgwIBtAXIgCAGQAPAkA6ApQA+AtAQAdQANAUAIAhQAEATAWAjQBABoAKAkQAJAkAJAUQAJATATAeQATAeAUAkQAUAlgTAKQgUAKAdBSQApB5gQgSQgRgSgQANQgPAMgMACIgkiUgAEFpnQgSAZgKgXQgLgXBSjbQBSjbhBhaQAchuAggqQAhgqACgLQADgKARgYQADgcAHgCIAUgHQANgGAGgTIAPAkQgBATgKAKIgRASQgFAHgCARQgCASgEAHQgDABgBADQgFAFgJAHIgMAIIgLAGQgIAFgNAsIgCARIAAADQAYF9h4EtQgVhYgRAZgAHH0xIAAAAgAHL01IgBAAIgDAEQABgDADgBgAHL01IAAAAg");
	this.shape_197.setTransform(298.5,269.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CC0033").s().p("Ag+iiQgZgaAGgWIAVguQAMgbgDgUQgBgIgFgMQgHgNgFgSQgFgSADgKIAjgGQAMAUALAYQAMAbAAAMQAAAKgFANIgJAWQgDAJgCANIgBAEIgBALQgBADANAjQAMAiBRILQgshCgYBTQg0oMgZgbg");
	this.shape_198.setTransform(636.4,174.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#0033FF").s().p("AgggHQgPgIgBgDQgDgHAAgSQgBgegMgbIgJgUQgFgJgCgHIABgFQACgMAEgKIAJgWQAEgNAAgKQAAgMgMgbQgLgYgMgTIATAAQAbADAHAQQADAGAAAJIgDAQQgHAnAVAlQgBAjAEAaQACAOAGAKIAJAOIAIAOIAZAxQATAjA0DqQg/gYAJAwQg7kjgPgHg");
	this.shape_199.setTransform(642.3,165);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#339999").s().p("EAh5AKPQAQg0ABgmQABgmAOgjQANgjAEhFQAFhFAFgWIABgGQAHgcAEggIABgEIABgKIAAgBIABgDIABgJIgBAAQADgogCgtQgCg4gdhxQA1hYADg3QAtA3AABWQAAAJAGAeQAGAegJAkQgIAjAEAbQADAbAQAeQgDAMAFAOIgCALQgFAogQAvIgMAnIgVBBQgNAoAOAmQANAmgWBQQgWBQgHAIQgagDgNgJQgNgJgSAVQgGAHgCAAQgGAAAMgkgEggpgACIgCgBQAChwhKhMQgFgkAFgaQAFgagCgNQgDgNgTggQgTgfgSgSQgSgUgGgnQgFgngIgWQgGgSgTgXIgfglQgQgWgFgWIAAgBIAJgrIgEgSQA3AaAkBKQALAYAOApQARAzAGAQQAIASAbAbQAbAbARAgQASAfALA2QALA1A0BSQAzBRgDASQgEATg3AIQgeAFgQABIgIAAIgGAAg");
	this.shape_200.setTransform(483,408.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFF00").s().p("Ab+YmQgMgIACgaQADgTgEgJQgEgGgLgEIAVhBIAMgoQAKgVAEAZQADAaANAdQANAdACAMIAHAxQADATgBAIQgCAJgGgCQgMgEgCADQgCAEACAIQABAHggAHQgHgegBgBgAaQVPIgFgWQgFgNgNgYQgJgRgHgSQgJgZgGgbIAAgCQADgbASgoQAKgCAHALIARAYQAKAOABAUQAAATAEAJQADAIgJAHQgJAGAGAHQAGAIABAIIACAMQADAKAeABIAAAAIgBAJIAAACIAAACIgBAFIACgSIgCASIAAAFIgBAEQgEAggHAcQgdgRgGgRgAa/UsIAAAAgAYyRQQgDgGAIgaIAMgqQAFgQAGgNQAHgMAfgjQAbgmAHgiIAZAAQgMAxgrBEQgyBOgQAhQgBAAgDgGgA7p2YIgPgIQgIgFgFgEQgHgIgFgTQgGgVgEgHIgCgEIgBgCIgBgBIgDgEIgIgMQgIgPgGgTIgBgDIAAgIQgCgQACgQQALAFAGAOIAKAWQAGAJALAIQAHAFAQAIIAsBuIgFAAQgNAAgNgJg");
	this.shape_201.setTransform(534.4,298.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#990099").s().p("AABGnQgTgbgcAcQgcAbAEgeQAFgeARgOQASgOACg8IACg9IAAgBQCChkg4g/Qg2g/gYgYQgYgYgKABQAEghgGAIQgPgfgEgbQgDgbAIgjQAIgkgFgfQgGgeAAgJQAAhWgug3QgLgOgPgMIAQAGIABAAQA3ATAQAQQAfAeAYAiQAXAiABBTQACBTACAYQADAYBABDQA/BCAJA7QAIA6g6CRQg7CSgHAGQgRAAgVgbg");
	this.shape_202.setTransform(722.8,431.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FF0000").s().p("EgmUAGcQgJgZABgRQACgQAbguQAagtAfh8QAfh9AFhHQAEhIAIgYQAJgYABgmQACgmAEgSQAIghAegIQAKgXAKgIQARgOACADQgBASAGAVIAJAdIgEAFIAAABIgBAAQgjAkADBAQACBAgwBnQAJB5gvCCQgwCDgIBDQgngxgRAZgEAmLACsIgSAAIgYAAImZAAIAqjzIGrDzgATVCsQCfjIACmXIG8D+Ig9Fhg");
	this.shape_203.setTransform(462.9,369.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FF6633").s().p("ACxZ5QgTgSABgKQACgLAYgZQAYgYAMgvQAMguAEiGIAGisQACglgHgFQARgiAxhOQArhEAMgwIASAAQAOALAMAOQgDA3g1BYIgGAKQgdAvgRAkQgSAogDAcIAAABQAGAbAJAZIAKA6QAGAqgMAbQgMAcAGAjQAHAkgdAkQgdAkANAqQANAqgIAJIgGAAQg1AAgSgQgAjK2WQgZAFgHgWQgHgXgdgGQgdgGgCgBQgVgmAIgmIACgQQABgJgDgGQgHgQgcgDIgSAAIgBAAQgNgBgVAEIAWg7QBAgRAYAYQAQAQAHAlQAIAlAMAOQANANAlACQAkADABAgQACAgARAfQFOBmhDAgQhDAggBAZQjqi4gYAEg");
	this.shape_204.setTransform(669.6,296.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAX+gkoQA/gRAZAYQAQAQAHAlQAHAlANAOQANANAkACQAkADACAgQABAgAwABQExCEhEAgQhDAgAMgWQi2iBg5ABQg5AAgHgWQgHgXgdgGQgdgGgCgBQgVglAHgnQACgKABgGQAAgJgDgGQgGgQgcgDQgMAAgHAAQAAAAgBAAQgMgBgVAEIAAABIAigEIgjAFQgDAKAFASQAGATAGANQAFALACAJQADATgMAcQgHAPgOAeQgHAXAqAdQAqAdATIHQAYhSAoASQgFjegWiEQBCAjgPCkQALgQApAQQAdi0gng7Qgog8gWgMQgXgNgIgJQgIgJgDgFQgFgKgCgOQgFgaABgjAdagXIgpD0IjUAAIofAAQiDCng5A4IBwICIAnC0IBEElIAUBZIgJgIIgegbQgQAcgtAtQguAsAHAvQAIAwgDB5QgEB6ABA0QABA1g2DFQg2DFBKgpQgGgEAFgGQABgBACgBIAAgBQAIgGAIADQAEACANAGQAKAGAGAAQAPAAAHgSQAFgMAOgUQAPgVA9g+QA+g+gMhDQgMhDgEgxQgEgygMgqQgNgqANg9QARhFAHgiQAAgCAAgBQAEgWACgTQACgOAAgMQACg9gTgsQgHgPgIgNAdagXIGrD0IgSAAQAPAMALANQAuA3AABWQAAAJAGAeQAFAfgIAkQgIAkADAaQAEAbAPAfQgDALAFAOQAsgjAZAYQAYAZA4BjQA5Bjh4A/QgsAHAHBMQAHBLgcgFQgcgEAqAJQAIACAGABQgCAFAMAPQAVAbARABQAiATAxibQAyiagEhLQgEhMhAhDQg/hDAGgRQAGgRggg5Qgfg5gMg2QgLg2gfgeQgQgPg3gUQAAAAgBAAQgHgCgJgDIgSAAIgYAAQgHAhgbAmQggAjgGAMQgGANgFAQQgFARgHAaQgIAaADAGQADAGABAAQAGAFgBAlQgCAlAJCpQAKCqgNAVQgNAVgIAWQgIAXAGAPQAGAQgPAGQgPAGA2gDQAHgIAMgfQALgeAGgvQAGgvgIglQgHgkAMgcQAMgbgHgqQgGgqgDgQQgKgZgFgbQAAgBAAAAQADgcASgoQAQgkAegvQACgFADgFQAeBzACA4QABAsgDAoQABAAAAAAQAAAFgBAEQAAACAAABIAAABIgBAFIgBAFQAAACAAADQgEAfgHAdQgBACAAADQgGAWgEBFQgEBFALAlQALAmgHAmQgIAmgiAxQgjAxASgWQATgVANAJQAMAKAbADQALgGAnhKQAnhJghguQgggtANgpQAIgaAMgnQACgEALgjQAPgvAGgnQABgGAAgGQAEghgGAIEAjJADdImYAAEAiiAHiQAKgCAGALQAHALALANQAKAOABAUQAAAUADAIQAEAIgJAHQgJAHAGAHQAFAHACAIQABAJABADQADAKAdABQAAAJgBAJEAjhADdQgLAxgrBDQgyBOgQAiEAicAJbQAHASAJARQANAYAFAOQAFAVAAAAQAGASAdAREAkXANIQALAFAEAGQAEAIgDATQgCAaAMAIQABABAHAfQAggHgBgIQgCgIACgDQACgEAMAEQAGACABgJQACgIgDgSQgFglgCgNQgCgMgNgdQgNgcgEgaQgDgagKAWEAmGAQyQAXAFgPgFQgHgDgBADgEAjVAGFQA2hYACg3ARj/4IGdk1IgCAFIgWA7EAYZghWQABgDAAgCQACgMAEgKQAGgOADgIQAFgNAAgKQAAgMgNgbQgLgYgMgTAOr9uIC4iKIDjC+IhQDWIjaJKQDCEgAAFvQAAAEAAAEIG8D+Ig9FiEAYZghWQACAHAFAJQAIARABADQAFAMAEAOQgagyAAgCQABgFAAgFgEAYyggYQADAPABAQQAAASADAHQABADAPAIQAHADATBJQgNhKgQgfQgMgWgIgQgAaV6kQgBgDAAgDQgDgQAFgIQgBAMgBAMEAXngjrIihGxEgUdglzQgGATgOAFQgNAGgHACQgHACgDAcQgRAXgCALQgDALggAqQghAqgbBuQBBCbg5DPQgeBugLArEgU7gjrQgFAFgJAGQgHAFgFADQgHAFgFACQgIAFgMAsIgDAQIAAAEQADAbANANQAOANAFAMQAGAMACAqQACApATAXEgU7gjrQgEAMADARQACAMAEAYQABAQgDAeQgBAEAAAFQgBADAAAEQAAAMADARQAFAbAAAJQADAggJA2QAMAfgJBlQgIBlAXAvQAxgLABgRQABgQAPAmQgViBgJgUQgKgUAAgbQgBgbADgGQAFgNAAgBQAIgeACgqQABgEAOgWQgJgygGgnQAAgBAAgBQgBgCAAgCQgEgTgBgLQgDgOgBgLQAFATAJAPIAIALQABACACACQAAABABABQAAAAAAABQACACABACQAEAIAGAV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");
	this.shape_205.setTransform(478.1,364.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#3300FF").s().p("AhpHaQAfhOAQhvIAZi1IANhvQACgTABgbIABgwIAAggIgBgLIAAgKIAAg0IAAgrIAOhcIACgNQAIggAPgcQAcg2A6gWIADAHIACAFQgOAkgFA1IgCCiIgBAYQgEAogPA7IgZBiQgMAxgHA8IgBAMIgCANIgVB8QgUCBgUBtQgggPgSABQgRACgJANIAHgRgAgPkaQAEgmAKgiIgCANIgOBcIACghgAgBliIAAAAg");
	this.shape_206.setTransform(352.7,557);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFF33").s().p("Ag+EzQgEhXADgXIABgSIADgNIABgLQAHg8ALgyIAZhhQAPg7ADgoIABgZIADihQAFg1AOglIgCgEIACgFIADAAIAVgUIAJAJIABASIAAAAQAHCDgCCCQgCCCgEARQgEARgTAcQgTAeATArQASArgQA9QgQA8ACAMQACANgoAwQAlAuAWBLQgWgQgXAAQgVABgVARQgRhIgDhOg");
	this.shape_207.setTransform(361.4,551.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#CC3366").s().p("Ag3G5QAfAVAEgZQAEgZASgSQAUgSAFguQAGgvAYiAQAZh/hBilQg/ilhTiMIAAAAIgBgBIgGgQIgJgJIBAg+IAHAHQBXCRBNCfQBNCegcC+QgcC/gTBOQgTBOhcAmQgRgFgTAFQgTAFgNAMQAQg9AQgdg");
	this.shape_208.setTransform(381.1,553);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#33FFFF").s().p("AhOEpQA2jFgBg1QgBg0AEh5QAEh6gIgvQgIgvAtgtQAtgsAQgcIAeAaQgVAtgEBMIgJABQgmAtgMBLQgGAmAbBpIAHAhQAHAgAAAVQAAAVgHAHIgDADQgWAMgTA+QgRA+gfCyQgNAiAAAaQgFAFAGAFQgNAHgJAAQgrAAAtijgAA1AmQAAgVgHggQAMAPAJAhQAJAggeABQAHgHAAgVg");
	this.shape_209.setTransform(580.7,559.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FF3399").s().p("AALGrQANhJAmhjQAmhjg/iRQg9iQgLgwQgKgwgBgUIACgaQACg9gUgsIAOgHQB1C/AhD6QAhD7g4C9IgNABQhDAAAMhEgAhxnuQAbAmAWAoIgNAJIgPACg");
	this.shape_210.setTransform(601.1,557.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#339933").s().p("AhKG1IgQgJQgJgCgIAGIAAAAIgCADQAAgbAMghIgKA5IAKg5IAKgWQAjhNAMgUQANgVASgpQARgpAEhaQgJgCgGgDQAcgCgJggQgJgfgKgRQAKgdADgRIAKg3QAHgdgBh8IABgpIAAgBQAEhNAUgsIAKAIIAPgCQAJAMAGAPQAUAsgCA9IgCAaQgCAUgEAVIgBADQgHAigQBFQgNA9AMAqQAMApAEAyQAEAyAMBCQAMBDg9A/Qg9A+gOAUQgOAUgFAMQgIASgPAAQgGAAgKgFg");
	this.shape_211.setTransform(585.7,560.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00FF00").s().p("AhFIJIAGgcQA+hgAHiqQAJirgMhNQgLhOgqhBQATgvgIgdIgPgxQgHgVAEgfIAFgwQAAgSgJgaIgEgNIgKgdQgGgVABgSIAAgGQAEgZAgAAIAnAAIACAFQASAxAJAfIAAACIAFASQgKAUAAAPIABAHQgCAKgEAIQgVA0AQAgQASAhALBFQALBFAXAlQAXAlgiBXQghBYAFAkQAGAlgKAaQgJAagHBFQgHBEgECeQgQACgMAAQgpAAgCgZgAATmVQAAgPAKgUIgJAqIgBgHg");
	this.shape_212.setTransform(247.6,385.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#33CCCC").s().p("AgjC1QAJhlgMgfQAJg1gDggIgFgkQgDgRAAgMIACgQQADgegBgQIgGgkQgDgRAEgMIADgEIAAAAQAEgIACgRQADgRAFgIIAQgRQAJgKABgTIAaA/QgOAbgDAbQgCAQACARIAAAHIABAEIAEAZIAFAeIABAFIAAABIAPBZQgPAVAAAEQgCAqgIAeIgFAOQgDAGABAbQAAAbAKAUQAJAUAVCBQgPgmgBAQQgBARgwALQgYgvAJhlgAgnhsIABgJIgCAQIABgHgAgmh1g");
	this.shape_213.setTransform(348.3,159.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FF3333").s().p("AASBmQgzgzgUgVIAGgPQAHgcADgqQAAgFAPgWQAnBpA8BkQA8BkAUAQQAUAPgtgGQgmgGAEAgQgeh7gygxgAh4hPQgCgpgFgMQgFgNgOgMQgOgNgCgcIAAgDIACgRQANgsAIgEIALgHQABANgCAbIADAPQACAHAcACIgDAbIgBAJIAAAIQAAAMADAQIAFAlQADAggJA2QgTgXgDgqg");
	this.shape_214.setTransform(354.3,165.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FF99FF").s().p("AhgTxQgYiRgJgJQgIgKgdgRIgdgTQg4hlgJhMQgzhAgRgYQgTgcgvgwQg4g7gxgwIBtAXIgCAGQAPAkA6ApQA+AtAQAdQANAUAIAhQAEATAWAjQBABoA7AaQA6AbgDAWQgDAVgSAlQgSAmAnAxQAmAygGATQgFATACBPQADBQgQgSQgRgSgQANQgPAMgMACQgNg3gXiSgAEfqBIACgIIApiZQA4jPhBibQAchuAggqQAhgqACgLQADgKARgYQADgcAHgCIAUgHQANgGAGgTIAPAkQgBATgKAKIgRASQgFAHgCARQgCASgEAHQgDABgBADQgFAFgJAHIgMAIIgLAGQgIAFgNAsIgCARIAAADQAOEEg/GQQg0gygHgRgAEfqBQgCgEACgCIACgCIgCAIIAAAAgAHH0xIAAAAgAHL01IgBAAIgDAEQABgDADgBgAHL01IAAAAg");
	this.shape_215.setTransform(298.5,269.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#CC0033").s().p("AgrieQgqgeAGgWIAVguQAMgbgDgUQgBgIgFgMQgHgNgFgSQgFgSADgKIAjgGQAMAUALAYQALAbAAAMQAAAKgEANIgJAWQgDAJgCANIgBAEIgBALQAAACAYAxQAEAPABARQAAARACAIQABADAQAHQAHAEASBIQAXCEAEDeQgngTgYBTQgToGgpgdg");
	this.shape_216.setTransform(636.2,174.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#0033FF").s().p("AAmEXQAOikhBgjQgMhKgRgeIgUgmIAUAmQARAeAMBKQgShIgHgEQgQgHgBgDQgCgHAAgSQgBgQgEgPQgDgNgGgNIgJgUQgEgJgCgHIABgFQACgMADgKIAJgVQAFgNAAgLQAAgMgMgaQgLgYgMgUIATAAQAbADAHAQQADAGgBAKIgCAPQgHAnAUAlQgBAkAFAaQACANAGAKQACAFAIAJQAIAKAWAMQAXAMAoA7QAnA8gdCzQgqgQgKAQg");
	this.shape_217.setTransform(642.9,163.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#339999").s().p("EAiLAKRQAjgyAHglQAHgmgLgmQgLgmAEhEQAFhFAFgWIABgGQAHgcAEggIABgEIABgKIAAgCIABgCIABgJIgBAAQADgogCgtQgCg4gdhxQA1hYADg3QAtA3AABWQAAAJAGAeQAGAegJAkQgIAjAEAbQADAaAQAfQgDALAFAPIgCALQgFAngQAvIgMAoIgVBBQgNAoAhAuQAgAtgnBKQgnBJgLAGQgagDgNgJQgNgKgSAWIgHAHQgBAAAYgigEggpgACIgCgBQAChwAvg8IAYAoQAzBSgDASQgEATg3AIQgeAFgQABIgIAAIgGAAgEghzgD9QAFgagCgNQgDgOgTgfQgTgfgSgTQgSgTgGgnQgFgngIgWQgGgTgTgWIgfglQgQgWgFgWIAAgCIAJgqIgEgSQA3AaAkBKQALAYAOApQARAzAGAPQAIASAbAcQAbAbARAgQASAfALA2QAIAnAeA2Qh9gzAFgag");
	this.shape_218.setTransform(483,408.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#990099").s().p("AAhHBQgRAAgUgbQgMgQACgEIgOgDQgqgJAcAEQAcAFgHhMQgHhLArgHQB4hAg5hiQg4higXgZQgZgYgsAjQAEghgGAHQgPgegEgbQgDgbAIgjQAIgkgFgfQgGgeAAgJQAAhWgug3QgLgOgPgMIAQAGIABAAQA3ATAQAQQAfAeALA1QAMA2AeA5QAgA6gGARQgGARA/BDQBABCAEBMQAEBLgyCaQgsCKgfAAQgEAAgEgDgAAAGUQAAAAAAAAQAAAAAAAAQAAAAgBgBQgBAAgBAAIAAAAIgBgBIAAAAIgCAAIgBgBIgEgBIAAAAIgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAIACAAIADABIACAAIAFABIAAAAIACAAIAAAAgAAAGUIgCAAIAAAAIgFgBIgCAAIgDgBIgCAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIABAAIAAAAIAEABIABABIACAAIAAAAIABABIAAAAQABAAABAAQABABAAAAQAAAAAAAAQAAAAAAAAIAAAAgAgOGSIAAAAg");
	this.shape_219.setTransform(723.4,432);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FF0000").s().p("EgmTAGcQgJgZABgRQACgQgDATQgCATADhAQADhAA9jFIBGjcQAJgYABgmQACgmAEgSQAHghAfgIQAKgXAKgIQARgOABADQAAASAGAVIAJAdIgEAFIgBABIAAAAQgjAkACBAQADBAgxBnQAKB5gwCCQgvCDgIBDQgngxgRAZgEAmMACsIgSAAIgZAAImYAAIAqjzIGrDzgATWCsQCfjIACmXIG8D+Ig9Fhg");
	this.shape_220.setTransform(462.8,369.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FF6633").s().p("ADXaFQAPgGgGgPQgGgQAIgWQAJgXAMgVQANgVgJipQgKipACglQACglgHgGQARghAxhOQArhEAMgxIASAAQAOAMAMAOQgDA3g1BYIgGAJQgdAvgRAlQgSAogDAbIAAACQAGAaAJAaIAKA5QAGAqgMAcQgMAbAIAlQAHAlgGAuQgGAvgLAfQgLAegIAJIgbABQgWAAAKgFgABF0SQi2iAg5AAQg5ABgHgXQgHgWgdgGQgdgGgCgCQgVglAIgnIACgPQABgJgDgHQgHgQgcgDIgSAAIgBAAQgNAAgVAEIAWg7QBAgSAYAZQAQAQAHAlQAIAlAMANQANANAlADQAkACABAhQACAgAvAAQEwCEhDAhQgoATgMAAQgIAAAFgKg");
	this.shape_221.setTransform(669.6,296.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAZHglFQBAgSAYAYQAQAQgBAuQgBAwAMAQQALAOAbAKQAhAMAJAHQAaARARAfQE0DCg1AGQg2AGgFgDQgEgCAIAYQj5jGgQgFQgTgGgJgDQgngMgXgnQgBgCgCgCQgUglAHgnQACgKAAgGQABgJgDgGQgHgQgbgDQgMAAgHAAQgBAAAAAAQgNgBgUAEIgBABIAjgEAekg0IgqDzIjTAAEAkSAC/QgGAhgbAnQghAjgNAUQgHAIgKAUQgKAVgGAZQgGAZAVACQABAAABAAQgDAFgBAEQgcBEgCCJQgCCRgVA+QgFAOgKAdQgIAaACATQACAXASARQATAQAVgGQgBg0ABgWQACgqAJgfQAGgTAWgyQATgrAEgaQAFgegHg5QgIg6ACgbQAAAAAAgBQADgcASgnQAQglAdgvQADgFADgEQAdByACA4QADA8gGA0QgEAfgHAdQgBADgBADQgFAVgZBIQgVA6gFAlQgHAlAKAoQAKApgQAzQgQA0ABAGQACAGAbgOQAbgOAOAhQAWgxAGhUQAHh0AEgWQADgMAMgoQALAEAEAGQAEAIgDAUQgCAZAMAJQACABAHAeQASgcAFADQAGACACgDQACgEAMAEQAFACACgIQACgJgDgSQgGglgCgMQgCgMgMgQQgSgZgMgIQgHgFgDgDQAEgPAGgQQAPgvAGgnQAAgGABgFQACAGACAGQAXBCAGAXQAWBZgRBUIAAAAQAAABAAABQgFAVgTBBQgPA2gFAiQgFAiAOARQAJALAcAIQAcAHAKAMQgEhAAiiMQAgiCgLhHQgGgngchLQgchJgFgoQgDgRABhiQABhGgTgoQgPgegegeQgRgPg2gTQgBAAAAgBQgIgCgIgDQAOAMAMAOQAtA2AABXQABAIgBATQgBAWgBAlQgDA2AEAhQAEAVAPAfQgDALAFAPQAEghgGAHEAkrAC/IgZAAImYAAEAk9AC/IgSAAQgMAxgrBEQgxBNgQAiAekg0IGrDzIgSAAEAjsAHFQAJgCAEANQADAHAGAPQAEAKADAaQADAYAEAMQACAEAEAIQADAHABAGQAAABABAKQAAAGACAEQACAKALALIARAREAjXAIJQAJAuAWAqQAMAYAFANQAFAVAAABQAHARAdAREAlgAMrQAIgbANgmQABgFACgEEAkfAFoQA1hYADg3EAStggWIGck1IgCAGIgVA6EAYxgkJQgDAKAFASQAFATAHANQAFALABAJQADATgMAcQgGAPgPAeQgGAXAAAuQAAAYBCICQAjg5ASAzQg7oPACgxQACgjABgDQAAgFABgFQAAgCABgDQACgMADgKQAGgOADgIQAFgNAAgKQAAgMgMgbQgLgYgMgTIgjAFIihGxIhQDWIjaJLQDCEfAAFvQAAAFAAADQgDGXieDJQiCCng5A4IBvIDIAnCzIBEElIAVBZIgJgIIgegaQgQAcguAsQguAtAIAvQAIAvgNBdQgNBegNBIQgNBJguDOQguDPBogrQABgHACgGQAHgGAJADQAEABAMAGQAKAGAGAAQAPAAAIgSQAFgLACgXQAGgvAxhUQAwhUAGgwQAEgegIguQgKhBgBgMQgBgsANg9QAQhEAHgjQABgBAAgCQAEgVACgUQABAUADAXQAHA/ATBbQAhCVgICEQgJCDgKBJQgJBIA4AyQA9kagdj5Qgej4hXijQgHgOgIgOQAAAAAAAAQAAAAAAgBQgXgogbgmAP1+MIC4iKIDjC+EAZjgh0QACAHAEAJQAIARABADQAMAbACAeQAAASACAHQABADAJAPQAGALArEjQAVg7AXAmQgukgAAgPQAAgQgIgNQgCgFgGgJQgHgJgCgFQgGgKgCgOQgFgaABgjEgTUgmRQgGATgNAGQgNAFgHACQgHACgDAcQgRAYgMAKQgNALgiAqQgiAqgFBuQAcBVicHfQgBAEAAACQABALAWgSQAbgWAXApICCqQQACAeAIAUQACAJAIAQQADAIANAvQAJAiATAXEgUMgj2QgHAFgEACQgIAFgNAsIgCAQEgTygkJQgFAFgJAGQgGAFgGADQABANgCAcQAAACADANQACAGAHAKIARAkQAAAMADARQAEAbABAJQADAggJA2QgDAOgRA6QgSA5AeB5QAPgZANAEQAOAEAPgCQgXh6AFgWQADgMAGgRQADgHACgGQAFgNABgBQAHgeADgqQAAgEABgFQAFhDgGgnQAAAAAAgBQgBgDAAgCQgEgTgCgLQgCgOgCgLQAGATAIAPIAIALQACADABACQABAAAAABQABABAAAAQABADABABQAEAIAHAVQAFASAHAIQAEAFAJAFQAEACAKAGQARALAPgDEgTygkJQgDAMACARQACAMAFAYQABATgFAkQAAADAAAEEgTFgl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");
	this.shape_222.setTransform(470.7,367.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#339933").s().p("AhJG1IgRgJQgIgCgIAGIAAAAIgDADQAAgbANghIgKA5IAKg5IAJgWQAkhNAEgOQALgmgDhGQgBg6ACghIAAAAIACgTQAGgdATgvQAVg3AGgXQALgsgBh8IABgpIAAgBQAEhNAVgsIAJAIIAQgCQAJAMAGAPQAUAsgDA9IgBAaQgCAUgFAVIAAADQgHAigRBFQgNA9ACArQABANAKBAQAHAugDAeQgGAwgxBUQgwBUgFAvQgDAWgFAMQgHASgPAAQgGAAgKgFg");
	this.shape_223.setTransform(585.7,560.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_224.setTransform(477.6,367.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#00FF00").s().p("AhFIJIAGgcQAaioAKinQAKimAFguQAEgtgqhBQATgvgIgdIgPgxQgHgVAEgfIAFgwQAAgSgJgaIgEgNIgKgdQgGgVABgSIAAgGQAEgZAgAAIAnAAIACAFQASAxAJAfIAAACIAFASQgKAUAAAPIABAHQgCAKgEAIQgVA0AQAgQASAhALBFQALBFAXAlQAXAlgiBXQghBYAFAkQAGAlgKAaQgJAagHBFQgHBEgECeQgQACgMAAQgpAAgCgZgAATmVQAAgPAKgUIgJAqIgBgHgAAdm4IAAAAg");
	this.shape_225.setTransform(247.6,385.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_226.setTransform(478.1,364.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#33FFFF").s().p("AhOEpQA2jFgBg1QgBg0AEh5QAEh6gIgvQgIgvAtgtQAtgsAQgcIAeAaQgVAtgEBMIgJABQgmAtgMBLQgGAmAbBpIAHAhQAHAgAAAVQAAAVgHAHQAHgHAAgVQAAgVgHggQAMAPAJAhQAJAggeABIgDADQgWAMgTA+QgRA+gfCyQgNAiAAAaQgFAFAGAFQgNAHgJAAQgrAAAtijg");
	this.shape_227.setTransform(580.7,559.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#00FF00").s().p("AhFIJIAGgcQA+hgAHiqQAJirgMhNQgLhOgqhBQATgvgIgdIgPgxQgHgVAEgfIAFgwQAAgSgJgaIgEgNIgKgdQgGgVABgSIAAgGQAEgZAgAAIAnAAIACAFQASAxAJAfIAAACIAFASQgKAUAAAPIABAHQgCAKgEAIQgVA0AQAgQASAhALBFQALBFAXAlQAXAlgiBXQghBYAFAkQAGAlgKAaQgJAagHBFQgHBEgECeQgQACgMAAQgpAAgCgZgAATmVQAAgPAKgUIgJAqIgBgHgAAdm4IAAAAg");
	this.shape_228.setTransform(247.6,385.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FF99FF").s().p("AhgTxQgYiRgJgJQgIgKgdgRIgdgTQg4hlgJhMQgzhAgRgYQgTgcgvgwQg4g7gxgwIBtAXIgCAGQAPAkA6ApQA+AtAQAdQANAUAIAhQAEATAWAjQBABoA7AaQA6AbgDAWQgDAVgSAlQgSAmAnAxQAmAygGATQgFATACBPQADBQgQgSQgRgSgQANQgPAMgMACQgNg3gXiSgAEfqBIACgIIApiZQA4jPhBibQAchuAggqQAhgqACgLQADgKARgYQADgcAHgCIAUgHQANgGAGgTIAPAkQgBATgKAKIgRASQgFAHgCARQgCASgEAHQgDABgBADQgFAFgJAHIgMAIIgLAGQgIAFgNAsIgCARIAAADQAOEEg/GQQg0gygHgRgAEfqHIACgCIgCAIQgCgEACgCgAHH0xIAAAAgAHL01IgBAAIgDAEQABgDADgBgAHL01IAAAAg");
	this.shape_229.setTransform(298.5,269.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#990099").s().p("AAhHBQgRAAgUgbQgMgQACgEIACAAIADABIACAAIAFABIAAAAIABAAIABAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQgBAAgBAAIAAAAIgBgBIAAAAIgCAAIgBgBIgEgBIAAAAIgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAIgOgDQgqgJAcAEQAcAFgHhMQgHhLArgHQB4hAg5hiQg4higXgZQgZgYgsAjQAEghgGAHQgPgegEgbQgDgbAIgjQAIgkgFgfQgGgeAAgJQAAhWgug3QgLgOgPgMIAQAGIABAAQA3ATAQAQQAfAeALA1QAMA2AeA5QAgA6gGARQgGARA/BDQBABCAEBMQAEBLgyCaQgsCKgfAAQgEAAgEgDgAgBGUIgBAAIAAAAIgFgBIgCAAIgDgBIgCAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIABAAIAAAAIAEABIABABIACAAIAAAAIABABIAAAAQABAAABAAQABABAAAAQAAAAAAAAQAAAAAAAAIgBAAg");
	this.shape_230.setTransform(723.4,432);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAX+gkoQA/gRAZAYQAQAQAHAlQAHAlANAOQANANAkACQAkADACAgQABAgAwABQExCEhEAgQhDAgAMgWQi2iBg5ABQg5AAgHgWQgHgXgdgGQgdgGgCgBQgVglAHgnQACgKABgGQAAgJgDgGQgGgQgcgDQgMAAgHAAQAAAAgBAAQgMgBgVAEIAAABIAigEIgjAFQgDAKAFASQAGATAGANQAFALACAJQADATgMAcQgHAPgOAeQgHAXAqAdQAqAdATIHQAYhSAoASQgFjegWiEQBCAjgPCkQALgQApAQQAdi0gng7Qgog8gWgMQgXgNgIgJQgIgJgDgFQgFgKgCgOQgFgaABgjAdagXIgpD0IjUAAEAjzADdQAPAMALANQAuA3AABWQAAAJAGAeQAFAfgIAkQgIAkADAaQAEAbAPAfQgDALAFAOQAsgjAZAYQAYAZA4BjQA5Bjh4A/QgsAHAHBMQAHBLgcgFQgcgEAqAJQAIACAGABQgCAFAMAPQAVAbARABQAiATAxibQAyiagEhLQgEhMhAhDQg/hDAGgRQAGgRggg5Qgfg5gMg2QgLg2gfgeQgQgPg3gUQAAAAgBAAQgHgCgJgDIgSAAIgYAAQgHAhgbAmQggAjgGAMQgGANgFAQQgFARgHAaQgIAaADAGQADAGABAAQAGAFgBAlQgCAlAJCpQAKCqgNAVQgNAVgIAWQgIAXAGAPQAGAQgPAGQgPAGA2gDQAHgIAMgfQALgeAGgvQAGgvgIglQgHgkAMgcQAMgbgHgqQgGgqgDgQQgKgZgFgbQAAgBAAAAQADgcASgoQAKgCAGALQAHALALANQAKAOABAUQAAAUADAIQAEAIgJAHQgJAHAGAHQAFAHACAIQABAJABADQADAKAdABQABAAAAAAQAAAFgBAEQAAACAAABIAAABIgBAFIgBAFQAAACAAADQgEAfgHAdQgBACAAADQgGAWgEBFQgEBFALAlQALAmgHAmQgIAmgiAxQgjAxASgWQATgVANAJQAMAKAbADQALgGAnhKQAnhJghguQgggtANgpQAIgaAMgnQACgEALgjQAPgvAGgnQABgGAAgGQAEghgGAIAdagXIGrD0IgSAAEAjJADdImYAAEAiiAHiQAQgkAegvQACgFADgFQAeBzACA4QABAsgDAoQAAAJgBAJEAjhADdQgLAxgrBDQgyBOgQAiEAicAJbQAHASAJARQANAYAFAOQAFAVAAAAQAGASAdAREAkXANIQALAFAEAGQAEAIgDATQgCAaAMAIQABABAHAfQAggHgBgIQgCgIACgDQACgEAMAEQAGACABgJQACgIgDgSQgFglgCgNQgCgMgNgdQgNgcgEgaQgDgagKAWEAmGAQyQAXAFgPgFQgHgDgBADgEAjVAGFQA2hYACg3ARj/4IGdk1IgCAFIgWA7EAYZghWQABgDAAgCQACgMAEgKQAGgOADgIQAFgNAAgKQAAgMgNgbQgLgYgMgTAOr9uIC4iKIDjC+IhQDWIjaJKQDCEgAAFvQAAAEAAAEQgCGWieDKQiDCng5A4IBwICIAnC0IBEElIAUBZIgJgIIgegbQgQAcgtAtQguAsAHAvQAIAwgDB5QgEB6ABA0QABA1g2DFQg2DFBKgpQABgGABgHQAIgGAIADQAEACANAGQAKAGAGAAQAPAAAHgSQAFgMAOgUQAPgVA9g+QA+g+gMhDQgMhDgEgxQgEgygMgqQgNgqANg9QARhFAHgiQAAgCAAgBQAEgWACgTQACgOAAgMQACg9gTgsQgHgPgIgNEAYyggYQgagyAAgCQABgFAAgFQACAHAFAJQAIARABADQAFAMAEAOQADAPABAQQAAASADAHQABADAPAIQAHADATBJQgNhKgQgfQgMgWgIgQgAaW7CQgBAMgBAMQgDgQAFgIgAaV6kQgBgDAAgDEAXngjrIihGxEgUdglzQgGATgOAFQgNAGgHACQgHACgDAcQgRAXgCALQgDALggAqQghAqgbBuQBBCbg5DPQgeBugLArEgU7gjrQgFAFgJAGQgHAFgFADQgHAFgFACQgIAFgMAsIgDAQIAAAEQADAbANANQAOANAFAMQAGAMACAqQACApATAXEgU7gjrQgEAMADARQACAMAEAYQABAQgDAeQgBAEAAAFQgBADAAAEQAAAMADARQAFAbAAAJQADAggJA2QAMAfgJBlQgIBlAXAvQAxgLABgRQABgQAPAmQgViBgJgUQgKgUAAgbQgBgbADgGQAFgNAAgBQAIgeACgqQABgEAOgWQgJgygGgnQAAgBAAgBQgBgCAAgCQgEgTgBgLQgDgOgBgLQAFATAJAPIAIALQABACACACQAAABABABQAAAAAAABQACACABACQAEAIAGAVQAFASAHAIQAFAFA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");
	this.shape_231.setTransform(478.1,364.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#339933").s().p("AhKG1IgQgJQgJgCgIAGIAKg5IgKA5IAAAAIgCADQAAgbAMghIAKgWQAjhNAMgUQANgVASgpQARgpAEhaQgJgCgGgDQAcgCgJggQgJgfgKgRQAKgdADgRIAKg3QAHgdgBh8IABgpIAAgBQAEhNAUgsIAKAIIAPgCQAJAMAGAPQAUAsgCA9IgCAaQgCAUgEAVIgBADQgHAigQBFQgNA9AMAqQAMApAEAyQAEAyAMBCQAMBDg9A/Qg9A+gOAUQgOAUgFAMQgIASgPAAQgGAAgKgFgAhrGwIAAAAg");
	this.shape_232.setTransform(585.7,560.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FF99FF").s().p("AhgTxQgYiRgJgJQgIgKgdgRIgdgTQg4hlgJhMQgzhAgRgYQgTgcgvgwQg4g7gxgwIBtAXIgCAGQAPAkA6ApQA+AtAQAdQANAUAIAhQAEATAWAjIAuBLQALAJAsArQBJBJgRAlQgSAmAnAxQAmAygGATQgFATACBPQADBQgQgSQgRgSgQANQgPAMgMACQgNg3gXiSgAiQPcIgDgHIAAgBIgBAAIAAAAIAAgBIAAABIAAAAIABAAIAAABIADAHIgCgCIgBgBIAAAAIAAgBIgBAAIAAgBIgBgBIgBgBQAAgBgBgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIABAAIACABIAAABIABAAIAAAAIAAAAIgBAAIAAgBIgCgBIgBAAQAAAAAAAAQAAABAAAAQABABAAAAQABABAAABIABABIABABIAAABIABAAIAAABIAAAAIABABIACACIAAAAgAEfqBIACgIIApiZQA4jPhBibQAchuAggqQAhgqACgLQADgKARgYQADgcAHgCIAUgHQANgGAGgTIAPAkQgBATgKAKIgRASQgFAHgCARQgCASgEAHQgDABgBADQgFAFgJAHIgMAIIgLAGQgIAFgNAsIgCARIAAADQAOEEg/GQQg0gygHgRgAEfqBQgCgEACgCIACgCIgCAIIAAAAgAHH0xIAAAAgAHL01IgBAAIgDAEQABgDADgBgAHL01IAAAAg");
	this.shape_233.setTransform(298.5,269.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#339999").s().p("EAiLAKRQAjgyAHglQAHgmgLgmQgLgmAEhEQAFhFAFgWIABgGQAHgcAEggIABgEIABgKIAAgCIABgCIABgJIgBAAQADgogCgtQgCg4gdhxQA1hYADg3QAtA3AABWQAAAJAGAeQAGAegJAkQgIAjAEAbQADAaAQAfQgDALAFAPIgCALQgFAngQAvIgMAoIgVBBQgNAoAhAuQAgAtgnBKQgnBJgLAGQgagDgNgJQgNgKgSAWIgHAHQgBAAAYgigEggpgACIgCgBQABhVAGhqIApASIABAAIAAAAIAAAAIgdhCQApBYAMATQAzBSgDASQgEATg3AIQgeAFgQABIgIAAIgGAAgEggkgDCIAEhEIgEBEQhTgmAEgVQAFgagCgNQgDgOgTgfQgTgfgSgTQgSgTgGgnQgFgngIgWQgGgTgTgWIgfglQgQgWgFgWIAAgCIAJgqIgEgSQA3AaAkBKQALAYAOApQARAzAGAPQAIASAbAcQAbAbARAgQASAfALA2IABAHQAKAlAbAxIgpgSgEggkgDCIAAAAg");
	this.shape_234.setTransform(483,408.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAXlgkkQBAgSAYAZQAQAQAHAlQAIAlANANQAMAOAlACQAkADABAgQACAgCbBNQD+B+hggDQhfgDAMgXQjEgPgzg4Qgyg4gHgXQgHgWgdgGQgdgGgCgCQgUglAHgnQACgKAAgFQABgJgDgHQgHgQgbgDQgMAAgHAAQgBAAAAAAQgNAAgVAEIAAAAIAjgEIgjAGQgEAKAGASQAFASAHANQAFAMABAIQADAUgMAbQgGAPgPAfQgGAWApAeQAqAdAUIHQAYhTAnATQAUhBADg/QAAgBgBgCQgCgOAEgIQAAgCABgBQgBAHAAAHQgBAFgBAGAZ+6/QAKgPAqAPQBLhzgrhAQgqg/grgpQgrgogIgJQgIgJgCgFQgGgLgCgNQgFgaABgkAdCgTIgqDzIjTAAEAjbADgQAOAMAMAOQAtA3AABWQAAAIAGAfQAGAfAeBTQAYA+gNAHQgDACgIgEQgfgQAqASQABAAAAAAQBFATAZAZQAZAZAaBWQAbBVhFB0Qg0AJgCBAQgBAugVADQACADADAEQAUAbASAAQAqAmBCh5QBCh5ACh2QACh2hKhDQhLhDAOgaQANgZg0gyQg0gygPg1QgOg1gegdQgRgQg3gTQAAAAAAAAQgIgDgIgDIgSAAIgZAAQgGAigbAmQggAjgGAMQgHANgEAQQgFAQgIAaQgIAaADAGQADAGBJAsIAEACQgBgBgBgBAdCgTIGrDzIgSAAEAiwADgImYAAEAizAIWQgZhVAdgvQADgEADgFQAdByACA4QACAtgDAoQAAAAABAAQgBAEAAAFQAAABgBABIAAACIgBAFIAAAFQhfhZgFgbQAAgBAAgBQADgbA7AIQADAJAAAKQABATADAJQADAIgJAHQgJAGAGAHQAGAIABAIQABAIACAEQACAKAeABQgBAJgBAJEAicAHyQAGAKAJALQAFAHADAIIgXgkIgCgCEAiYAHwQhBglgCAkQgCAlAKCpQAJCpgMAVQgNAWgIAWQgJAXAGAPQAGAQgPAGQgOAGA2gDQAHgJA7gOQA7gOgmg+IgOgWQAUAegMhOQgMhSgOgxQgNgyAKgDQAMAWAEAMQAFAVAAABQAHARAdARQgBADgBADQgFAWgEBFQgEBEAKAmQALAmgHAmQgHAlgjAyQgjAxATgWQASgWANAKQANAJAaADQALgGAnhJQAnhKgggtQggguAdgVQABAHgCAMQgCAaAMAIQACABAHAeQAfgHgBgHQgBgIACgEQACgDALAEQAGACACgJQABgIgCgTQgGglACgCQABgCgLgXQgLgXgJgqQgJgpgJAVQAPgvAFgnQABgFAjgjEAjJADgQgMAxgrBEQgwBMA4BPEAjMAKXQhBglAJAQQABACAAABQAPgDAoAVIAMAHQAAAAABABEAjZAKfQAAACgBACQgDAggHAcEAkOANZQgHgqAMgkQABgEAMgkEAkOANZQABACAAAEQgGgPAEAGQABABAAACgEAioANqIACADEAltAQ2QAYAFgPgFQgIgDgBADQgBADAHAKQgJABgLgGQgpgUApAJQAIACAGABgEAi9AGJQA1hYADg3ARL/0IGck1IgCAFIgWA7EAYBghSQAAgDABgCQACgMADgKQAGgPADgHQAFgNAAgKQAAgMgMgbQgLgYgMgUAOS9qIC5iKIDjC9IhQDWIjbJLQDDEfAAFwQAAAEAAAEQgDGWieDJQiDCng4A5IBvICIAnCzIBEEmIAVBYIgKgIIgegaQgPAcguAsQguAtAIAvQAIAvgEB6QgDB5AAA1QABA1g2DFQg2DEBKgoQABgHABgGQAIgGAJADQAEABAMAHQAKAFAGAAQAPAAAIgSQAFgLAOgVQAOgUA+g+QA9g+gLhDQgMhDAEgpQAEgqgVgyQgUgzANg9QAQhEAHgjQAAgBABgCQAEgVACgUQABgNABgNQACg9gUgsQgGgOgJgNEAYZggVQgagxABgCQAAgFABgFQACAHAEAIQAIARABADQAGANADANQAEAQABAQQAAARACAIQABADAPAHQAIAEASBJQgMhLgRgfQgLgVgJgRgAZ86jQABgHAAgHQAAgGAAgFQgBhpgyhgQBCAjgOCjEAXPgjnIihGwEgU2glwQgGAUgNAFQgNAGgHABQgHACgDAdQgRAXgDALQgDALggAqQggApgcBvQBBCag4DQQgeBtgLAsEgVUgjoQgFAGgJAGQgGAEgGAEQgHAEgEADQgIAEgNAsIgCARIAAAEQACATAHAMQADAFAEAEQAOAMAFANQAFAMACApQADAqATAXEgVUgjoQgDAMACASQACALAFAYQABARgEAeQAAAEgBAEQAAAEAAAEQAAAMADAQQAEAcABAJQADAggJA2QALAegIBlQgJBlAYAvQAwgLABgQQACgRAOAmQgUiAgKgUQgKgVAAgbQAAgbACgFQAFgNABgCQAHgdADgqQAAgFAPgWQgJgxgGgnQgBgBAAgBQAAgCgBgDQgDgTgCgKQgCgOgCgMQAGATAIAPIAIAMQACACABACQABABAAAAQABABAAABQABACABACQAEAHAHAVQAFATAHAIQAEAEAJAFQAEADAKAFQARALAOgCEgVugjUQABANgCAbQAAADADAMQACAHAcACIgDAcIgBAQEgUnglLQgBASgKAKQgQARgBABQgFAHgCASQgCARgEAHQgBABAAAAQgBACgCABEgUnglLIAZA/EgUfgjWQALAFAHAOQAEAHAGAPQAFAJAMAIQAGAFAQAIIAsBuIBHCwIBNDAIE5jdIibh9EgUegirQAAgBAAgCQgBgEAAgEQgCgQACgQQAEgbANgbIAyB9EgVQgjsQgDACgBACEgU2glwIAPAlA0j+kQAUAVA0AzQAyAxAeB7AyI6jQgCgHgBgGQgEgfAmAFQAtAGgUgPQgUgPg8hlQg8hkgohqAxp9xIDriaIm4llAkD4JQCMgiCZAAQDIAACxA6QEBBUDODOQBYBYBBBhAqnyuQAAAWgQAPQgPAQgWAAQgWAAgQgQQgPgPAAgWQAAgWAPgQQAQgPAWAAQAWAAAPAPQAQAQAAAWgAtLyoQASgUAUgTQDvjvEzhLIngmFA3/4nQgFANAIgdQABgEABgEEgWHghpQBCD8h8F5Qg0gzgHgQQgDgFACgCQACgBABAAAsOiiQAAAbgTATQgTATgaAAQgbAAgTgTQgTgTAAgbQAAgaATgTQATgTAbAAQAaAAATATQATATAAAagAw8ASQhFixAAjoQAAiRAeiFQBCkkDWjnAjKFAQAAALgIAIQgHAHgLAAQgLAAgIgHQgHgIAAgLQAAgLAHgHQAIgIALAAQALAAAHAIQAIAHAAALgAPZrsQAAAjgGAYQgHAZgJAAQgKAAgGgZQgHgYAAgjQAAgiAHgZQAGgYAKAAQAJAAAHAYQAGAZAAAigACvzyQAAAQgLAMQgMALgQAAQgQAAgLgLQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQALALAAAQgACJhNQAAAKgHAHQgHAHgKAAQgKAAgHgHQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKgANFhGQAAAMgJAJQgJAJgMAAQgNAAgJgJQgIgJAAgMQAAgNAIgJQAJgIANAAQAMAAAJAIQAJAJAAANgAaCiBIg9FhIogAAATGl/IG8D+IDABuAOS9qIFMEJAGb3xIH3l5Awc6xIDRIJEglFgFNQghAAgDAZQgBADAAADQgBASAHAVQADALAGASEgpMAGtQAAAPAIAUQARgZAnAxQBIguAjiHQAiiHgwiGQAwhngCg/QgChAAjgkIAAgBQAAAAABAAQACgCACgDQACAGADAHQAIAaAAASQgBARgEAfQgDAfAGAVQAHAUAIAdQAIAcgSAvQAqBBgBBAQAAA/gbCUQgbCUAACqQgEARgCALQACAhBFgKQAFieAHhEQAHhFAJgaQAJgagFglQgGgkAihYQAihYgYglQgXglgLhFQgLhEgRghQgSggAXg0QADgIACgKQADgNAHgdQgNAZADARQABABAAABQAEAWAQAWQAKANAWAYQASAWAGATQAIAWAFAnQAGAmgKAfQgLAeAhAaQAhAZARAIQASAHgGAaQgFAaB9AzQgeg2gIgnQgLg2gSgfQgRgggbgbQgbgcgHgRQgHgPgRgzQgOgpgLgYQgjhKg4gaQAAgBgBgBQgJgfgSgxQgBgDgBgCIAPAAQAwAxA5A6QAvAwATAcQARAZAzA/QAJBMA4BkQAAABAdASQAdASAIAJQAJAJAXCSQAYCRANA3QA1grAVgTQAAgEAAgEQgDhQAKgSQAKgRgegsQgegsAFgsQAFgsADgWQADgWgYgsQgYgshOgzQhNg0gEgTQgIgggNgVQgQgdg+gtQg6gpgPgjEglqgEuQgBgDgRAOQgKAIgKAXQgfAIgHAgQgEATgCAmQgCAmABAbQAAAbgKDXQgKDZg/ApQg2AjgGgIQgCgBABgDQADgTgCAQQAAAEAAADEglFgFNIAnAAEgj7gDkQgCgIgDgKEgkPgFNIBtAXIDdAwIESBVIJ3DDA+4mzImNBmA+4mzIgNCtA/iEMQgBgBAAAAQABAAAAAAQAAABAAAAQgvA8gCBwQABABABAAQAEABALgBQAPgBAegFQA3gIAEgTQAEgSg0hSQgOgVgKgTgA7Dn2IAQFFA7Dn2Ij1BDA8OHFQADgCACgCQAVgRgMAuQgKAsgEhFgEgliALuQAAgBAEgQAG1GlQAAARgMAMQgMAMgRAAQgRAAgMgMQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARgAKFRrICEBlID3hbADCMSIHDFZIFUipASHaPQABAUAiAmQAiAmBGCXQBFCXhhCgQhhChAPAQQAPAQBHhMQBwh4gSj7QgSj7jBi/QgHgOgIgNQAAgBAAAAQAAAAgBAAQgWgogbgmARPXrQgUAtgEBMIAAABQgBAUAAAVQABB8gHAdQgGAdgEAaQgDASgLAdQgDgPAAguQAAgugFhGQgFhGAjgxAQYffQANgPgNhDQALAQAJAhQAJAggdABQAHADAJACQgBAYgCAVQgGA5gNAeQgSAogNAVQgMAVgjBMQgGAMgEAKQBFiEAYg4QATgvgFggQgBgHgCgGQgMgjACgCgANqHAQmXEwkRAiQhOAKhSAAQi4AAikgxAQxXRIkokBApFG9QAAAQgLALQgMAMgQAAQgQAAgLgMQgMgLAAgQQAAgQAMgMQALgLAQAAQAQAAAMALQALAMAAAQgAq9QIIGDkdQkShSjZjZQgjgjgfgkIh0HHIg2DWIClBygAx0WIQgIACgIADQgHACgGACQg7AWgXAoQgUAjgJAwQgBAHgBAGQgIA4gFAlQgBATAAAYAx0WIIBAg+IDIjCEgTRAkbQAUgRAXgBQAXAAAWAQQgWhLgmguQApgwgCgNQgDgMAhg0QAhg1gigzQgjgzATgeQASgdAlgRQAlgRgNiCQgNiCgriDIAAAAQAAgJgBgJQAEAIADAHQAAABAAAAIAAABQCYCMBGCmQBGCnhgCOQhgCOAaAfQAaAegUASQgTASgEAZQgEAZgfgUQgPAcA0AsQBugiAshJQAshJAcjGQAcjFhmifQhmiehpiRAyMWdQgBACgBADA0PcgIgBAvQgEAagJAqQgKAqAAAxQAAAwgSB7QgRB8glBSQADgEAEgDEgTlAgFQAAAGgCAMQgCAXAEBXQADBOARBIAyEWNIgFAQIAVgVAvbNAIEeDIAwRQWIhzF3EgP1AlfQg3AGASgFQATgFASAEgEgTNAksQgDgKgBgHEAOuAlYQABgBABgCIAAAAQAGgdAEgcQgMAiAAAaQAAAFAAAFQgFgFAFgFgAxjqdIpgCnAtnF5QiIifhNjI");
	this.shape_235.setTransform(480.5,364.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#3300FF").s().p("Ah4HaQAghOAPhvIAZi1IAOhvQACgTABgbIAAgwIAAggIAAgLIAAgKIgBg0IABgrIANhcIADgNQAJggANgcQAcg2A7gWIADAHIACAFQgOAkgFA1IgDCiQAMAUAdAdQAdAdg5BEQg4BDgCAIQgLAxgHA8IgBAMIgDANIgUB8QgVCBgTBtQghgPgRABQgRACgKANIAHgRgAgdkaQAEgmAKgiIgDANIgNBcIACghgAgPliIAAAAg");
	this.shape_236.setTransform(354.1,557);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFF33").s().p("AhZEzQgEhXACgXIACgSIADgNIABgLQAHg8ALgyQACgIA4hDQA3hDgdgdQgbgdgMgVIADihQAEg1APglIgCgEIACgFIACAAIAVgUIAJAJIABASIAAAAQArCDANCCQANCCglARQglARgSAcQgSAeAiAzQAiAzghA1QggA0ADAMQACANgpAwQAmAuAVBLQgWgQgWAAQgXABgUARQgRhIgDhOg");
	this.shape_237.setTransform(364.1,551.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#CC3366").s().p("AhYHCQAfAUAEgZQAEgZATgSQATgRgagfQgZgfBfiOQBgiOhGilQhFiniYiMIAAAAIgBgBIgGgQIgKgJIBBg/IAHAIQBqCRBkCfQBmCegcDEQgcDGgrBJQgsBJhuAjQg0gsAQgdg");
	this.shape_238.setTransform(384.4,552.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#33FFFF").s().p("AhOEpQA2jFgBg1QgBg0AEh5QAEh6gIgvQgIgvAtgtQAtgsAQgcIAeAaQgVAtgEBMIgJABQgiAxAFBGQAFBGAAAuQgBAuADAPQAHAgAAAVQAAAVgHAHQAHgHAAgVQAAgVgHggQAMAPAJAhQAJAggeABQgBACAMAjIADANQgGA5gNAeQgTApgMAUQgLAVgkBMIgJAWQgNAiAAAaQgFAFAGAFQgNAHgJAAQgrAAAtijg");
	this.shape_239.setTransform(580.7,559.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FF3399").s().p("AgqHoQgPgQBgigQBhihhGiXQhEiWgigmQgigmgBgTIABgaQACg9gTgsIAOgIQDADAASD5QASD7hwB4Qg6A/gUAAQgFAAgCgDgAiKnqQAaAmAXAoIgNAIIgQADg");
	this.shape_240.setTransform(603.7,557);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#339933").s().p("AhKG1IgQgJQgJgCgIAGIAKg5IgKA5IAAAAIgCADQgBgbANghQBFiEAYg5QAOglAAgcIgBgOIADgsQgJgCgGgDQAcgCgJggQgJgfgKgRQAKgdADgRIAKg3QAGgdAAh8IABgpIAAgBQADhNAVgsIAKAIIAPgCQAJAMAGAPQAUAsgCA9IgCAaQgCAUgEAVIgBADQgHAigQBFQgNA9AUAyQAVAygEApQgEAqAMBDQALBCg9A/Qg9A+gOAUQgOAUgFAMQgIASgPAAQgGAAgKgFgAhXFhQAjhNAMgUQANgVASgpQAMgeAGg5IABAOQAAAcgOAlQgYA5hFCEIAKgWgAAJBrIAAAAg");
	this.shape_241.setTransform(585.7,560.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#00FF00").s().p("AhFIJIAGgcQAAiqAbiUQAciUAAg+QAAhAgqhBQATgvgIgdIgPgxQgHgVAEgfIAFgwQAAgSgJgaIgEgNIgKgdQgGgVABgSIAAgGQAEgZAgAAIAnAAIACAFQASAxAJAfIAAACIAFASQgKAUAAAPIABAHQgCAKgEAIQgVA0AQAgQASAhALBFQALBFAXAlQAXAlgiBXQghBYAFAkQAGAlgKAaQgJAagHBFQgHBEgECeQgQACgMAAQgpAAgCgZgAATmVQAAgPAKgUIgJAqIgBgHgAAdm4IAAAAg");
	this.shape_242.setTransform(247.6,385.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FF3333").s().p("AASBmQgzgzgUgVIAGgPQAHgcADgqQAAgFAPgWQAnBpA8BkQA8BkAUAQQAUAPgtgGQgmgGAEAgQgeh7gygxgAh4hPQgCgpgFgMQgFgNgOgMIgHgJQgHgMgCgUIAAgDIACgRQANgsAIgEIALgHQABANgCAbIADAPQACAHAcACIgDAbIgBAJIAAAIQAAAMADAQIAFAlQADAggJA2QgTgXgDgqg");
	this.shape_243.setTransform(354.3,165.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FF99FF").s().p("AhgTxQgYiRgJgJQgIgKgdgRIgdgTQg4hlgJhMQgzhAgRgYQgTgcgvgwQg4g7gxgwIBtAXIgCAGQAPAkA6ApQA+AtAQAdQANAUAIAhQAEATBOA0QBNA0AYAsQAZAsgEAWIgIBCQgFAsAdAsQAfArgKASQgKASACBPIABAJIhKA+QgNg3gXiSgAEfqBIACgIIApiZQA4jPhBibQAchuAggqQAhgqACgLQADgKARgYQADgcAHgCIAUgHQANgGAGgTIAPAkQgBATgKAKIgRASQgFAHgCARQgCASgEAHQgDABgBADQgFAFgJAHIgMAIIgLAGQgIAFgNAsIgCARIAAADQACAUAHAMQBCD8h8F4Qg0gygHgRgAEfqBQgCgEACgCIACgCIgCAIIAAAAgAHH0xIAAAAgAHL01IgBAAIgDAEQABgDADgBgAHL01IAAAAg");
	this.shape_244.setTransform(298.5,269.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#CC0033").s().p("Ag3ieQgqgeAHgWIAVguQAMgbgDgUQgCgIgFgMQgGgNgGgSQgFgSADgKIAjgGQAMAUALAYQANAbAAAMQAAAKgFANIgJAWQgEAJgCANIgBAEIgBALQAAACAaAxQADAPABARQAAARACAIQABADAPAHQAHAEATBIQAxBgABBoQgEAJADAOIABADQgDA+gUBCQgogTgYBTQgSoGgqgdg");
	this.shape_245.setTransform(637.4,174.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#339999").s().p("EAh4AKRQAjgyAHglQAHgmgLgmQgKgmAEhEQAEhFAFgWIACgGQAHgcADggIABgEIAAAAIABgKIAAgCIABgCIABgJIgBAAQADgogCgtQgCg4gdhxQA1hYADg3QAtA3AABWQAAAJAGAeQAGAeAeBTQAYA+gNAHIAAgBIgBAAIgGgCIAAAAQgggNAcAOIABABIABAAIAGABIAAAAIAAAAIADAAIAAAAIABAAQgjAjgBAFQgFAngPAvIgNAoQgMAkAHAqIgBgDQgEgGAGAPQgdAVAgAuQAgAtgnBKQgnBJgLAGQgagDgNgJQgNgKgSAWIgGAHQgCAAAYgigEAkpACpIgGgBIgBAAIgBgBQgcgOAgANIAAAAIAGACIABAAIAAABIAAAAIgDAAIAAAAIAAAAgEgg8gACIgCgBQAChwAvg8IAYAoQA0BSgEASQgEATg3AIQgeAFgPABIgJAAIgGAAgEgiGgD9QAGgagSgHQgRgIghgZQghgaALgeQAKgfgGgnQgFgngIgWQgGgTgSgWIggglQgQgWgEgWIgBgCIAKgqIgFgSQA4AaAjBKQALAYAOApQARAzAHAPQAHASAbAcQAbAbARAgQASAfALA2QAIAnAeA2Qh9gzAFgag");
	this.shape_246.setTransform(484.8,408.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFF00").s().p("Ab+YmQgMgIACgaQACgMgBgHIgBgGQgHgqAMgkIAMgoQAKgVAJApQAJAqALAXQALAXgCACQgBACAFAlQADATgBAIQgCAJgGgCQgMgEgCADQgCAEACAIQABAHggAHQgHgegBgBgAaQVPIgFgWQgFgMgLgWIABAAIAEAAIAAAAIACAAQANABAZAMIABABIACABIABAAIAAAAIABABIABABIADABIABAAIgBAAIgDgBIgBgBIgBgBIAAAAIgBAAIgCgBIgBgBQgZgMgNgBIgCAAIAAAAIgEAAIgBAAIgCgDQgIgQBBAlIAMAHIABABIAAAAIgBAEQgEAggHAcQgdgRgGgRgAa/UxQhfhZgGgbIAAgCQADgbA8AIQACAJABAKQAAATAEAJQADAIgJAHQgJAGAGAHQAGAIABAIIACAMQADAKAeABIgCASIAAAFIAAAAgAa/UsIACgSIAAAAIgBAJIAAACIAAACIgBAFIAAAAgAbBUaIAAAAgAaZSoIAAAAgAaCSEIAPAVQAFAHADAIgAZ+SCQhJgsgDgGQgDgGAIgaIAMgqQAFgQAGgNQAHgMAfgjQAbgmAHgiIAZAAQgMAxgrBEQgxBMA5BPIACACgA7p2YIgPgIQgIgFgFgEQgHgIgFgTQgGgVgEgHIgCgEIgBgCIgBgBIgDgEIgIgMQgIgPgGgTIgBgDIAAgIQgCgQACgQQALAFAGAOIAKAWQAGAJALAIQAHAFAQAIIAsBuIgFAAQgNAAgNgJg");
	this.shape_247.setTransform(534.4,298.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#990099").s().p("AAJG+QgQgBgVgaIgEgHQAVgDABguQABhBA0gIQBEh0gahWQgbhVgYgYQgZgZhEgTIgBgBQAMgGgXg/QgfhSgFgfQgGgfAAgIQAAhXgug2QgLgOgPgMIAQAGIABAAQA3ATAQAQQAfAdAOA1QAOA1AzAyQA1AygOAZQgNAZBKBEQBLBCgCB2QgCB1hCB5QgzBdgkAAQgMAAgKgJgAgmGPQABgDAHACQAIADgCAAIgOgCg");
	this.shape_248.setTransform(725.8,432.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FF0000").s().p("EgmUAGcQgIgUAAgPQAGAIA2gjQBAgpAJjZQAKjXAAgbQAAgbABgmQACgmAEgSQAIghAegIQAKgXAKgIQARgOACADQgBASAGAVIAJAdIgEAFIAAABIgBAAQgjAkACBAQADBAgwBnQAwCFgjCHQgjCHhIAuQgngxgRAZgEAmLACsIgSAAIgYAAImZAAIAqjzIGrDzgATVCsQCfjIACmXIG8D+Ig9Fhg");
	this.shape_249.setTransform(462.9,369.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#0033FF").s().p("AAUEXQAOikhAgjQgNhKgQgeIgUgmIAUAmQAQAeANBKQgThIgHgEQgPgHgBgDQgDgHAAgSQgBgQgDgPQgEgNgFgNIgJgUQgFgJgCgHIABgFQACgMAEgKIAJgVQAFgNAAgLQAAgMgNgaQgLgYgMgUIATAAQAcADAGAQQADAGAAAKIgDAPQgHAnAVAlQgBAkAFAaQACANAFAKQACAFAJAJQAIAKAqAoQAqAnArBAQAqBAhLBzQgpgQgLAQg");
	this.shape_250.setTransform(644.7,163.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FF6633").s().p("ADXaFQAPgGgGgPQgGgQAIgWQAJgXAMgVQANgVgJipQgKipACglQACgkBBAlIAEACIgCgDIACADIAXAkQg8gIgDAbIAAACQAGAaBfBZIgBAAIgMgHQhBglAJAQIABADQgLADAOAxQAOAyAMBSQAMBOgUgfIAOAXQAmA+g7AOQg7AOgIAJIgbABQgWAAAKgFgAFIYPIgCgCgAFRS5QgDgIgFgHIgPgVIgCgDQg5hOAxhMQArhEAMgxIASAAQAOAMAMAOQgDA3g1BYIgGAJQgdAvAZBVIAAAAgAE4SSgACYz4QhggDANgXQjEgPgyg4Qgyg4gHgXQgHgWgdgGQgdgGgCgCQgVglAIgnIACgPQABgJgDgHQgHgQgcgDIgSAAIgBAAQgNAAgVAEIAWg7QBAgSAYAZQAQAQAHAlQAIAlAMANQANANAlADQAkACABAhQACAgCaBNQD3B7hVAAIgEAAg");
	this.shape_251.setTransform(669.6,296.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_252.setTransform(479.8,364.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#3300FF").s().p("AhpHaQAfhOAWhqQAWhrAFg/QAFg/ABgqIAChEIABgwIAAggIgBgLIAAgKIAAg0IAAgrIAOhcIACgNQAIggAPgcQAcg2A6gWIADAHIACAFQgOAkgFA1IgCCiQALAUgYAdQgYAdgTBEQgTBDAJAcQAJAdgHA8IgBAMIgCANIgVB8QgUCBgUBtQgggPgSABQgRACgJANIAHgRgAgPkaQAEgmAKgiIgCANIgOBcIACghgAgBliIAAAAg");
	this.shape_253.setTransform(352.7,557);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFF33").s().p("AhZEzQgEhXACgXIACgSIADgNIABgLQAHg8gKgdQgJgdAThDQAThDAYgdQAZgdgMgVIADihQAEg1APglIgCgEIACgFIACAAIAVgUIAJAJIABASIAAAAQArCDANCCQANCCglARQglARgSAcQgSAeAiAzQAiAzghA1QggA0ADAMQACANgpAwQAmAuAVBLQgWgQgWAAQgXABgUARQgRhIgDhOg");
	this.shape_254.setTransform(364.1,551.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#CC3366").s().p("AhJHCQAfAUAEgZQADgZAUgSQASgRgZgfQgagfBUhpQBUhpg/i7Qg+i9iOiqIAAAAIgBgBIgGgQIgKgJIBBg/IAHAIQBlCZBYDCQBYDAgbBrQgbBsgfBzQggBzhpA1Qg0gsAQgdg");
	this.shape_255.setTransform(382.9,552.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#33FFFF").s().p("AhOEpQA2jFgBg1QgBgzAJhHQAHhHgHguQgIguAohhQAphgAQgcIAeAaQgVAtgEBMIgJABQgiAxAFBGQAFBGAAAuQgBAuADAPQAHAgAAAVQAAAVgHAHQAHgHAAgVQAAgVgHggQAMAPAJAhQAJAggeABQgBACAMAjIADANQgGA5gNAeQgTApgMAUQgLAVgkBMIgJAWQgNAiAAAaQgFAFAGAFQgNAHgJAAQgrAAAtijg");
	this.shape_256.setTransform(580.7,559.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#00FF00").s().p("AhFINIAGgbQAAiqAbiUQAciUAAg/QAAg/gqhBQATgvgIgdIgPgyQgHgUAEgfIAFgwQAAgSgJgaIgEgNIgKgdQgGgVABgSIAAgGQAEgZAgAAIAngBIACAGQASAxAJAfIAAACIAFASQgKAUAAAPIABAHQgCAKgEAIQgVA0AQAgQASAhALBFQALBFAXAlQAXAlgiBXQghBYAFAkQAGAlgKAaQgJAagHBEQgHBFAVCEQgwATgYAAQgXAAgBgRgAATmQQAAgPAKgUIgJAqIgBgHgAAdmzIAAAAg");
	this.shape_257.setTransform(247.6,385.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FF3333").s().p("AAJCTQgqhggUgVIAGgPQAHgcADgqQAAgFAPgWQAnBpA8BkQA8BkAUAQQAUAPgtgGQgmgGAEAgQgtgfgshggAh4hPQgCgpgFgMQgFgNgOgMIgHgJQgHgMgCgUIAAgDIACgRQANgsAIgEIALgHQABANgCAbIADAPQACAHAcACIgDAbIgBAJIAAAIQAAAMADAQIAFAlQADAggJA2QgTgXgDgqg");
	this.shape_258.setTransform(354.3,165.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#33CCCC").s().p("AgEEyQALgGABgJIAAAAIAAgBQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAIAAAAQgCAAgFALIAAAAIgBABIAAABIAAAAIgCAEIgBADIgBAAIABAAIgBAAIABAAIABgDIACgEIAAAAIAAgBIABgBIAAAAQAFgLACAAIAAAAQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAABIAAABIAAAAQgBAJgLAGQgNAHgYAGQgYgvAJhlQAIhlgLgfQAJg1gDggIgFgkQgDgRAAgMIACgQQADgegBgQIgHgkQgCgRADgMIADgEIABAAQAEgIACgRQACgRAFgIIARgRQAKgKABgTIAYA/QgMAbgDAbQgCARABAQIABAHIAAAEIAEAZIAFAeIABAFIAAABIAPBZQgPAWAAAEQgCApgHAeIgGAOQgCAGACAdQABAdA6B4QAjBHgZAAQgQAAgrghgAg9h2IACgJIgCAQIAAgHgAg7h/g");
	this.shape_259.setTransform(350.4,160.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FF99FF").s().p("AhgTxQgYiRgJgJQgIgKgdgRIgdgTQg4hlgJhMQgzhAgRgYQgTgcgvgwQg4g7gxgwIBtAXIgCAGQAPAkA6ApQA+AtAQAdQANAUAIAhQAEATAsBuQAsBvAxAOQAwAPArCCIADALIgKgRIgBAAIAAgBIAAAAIgBgBIAAAAIAAAAIAAAAIgDgEIAAAAIAAAAQgPgUAgBMIADAHIgDgHQgghMAPAUIAAAAIAAAAIADAEIAAAAIAAAAIAAAAIABABIAAAAIAAABIABAAIAKARQAIAPAAALQABAHgDAFIgBACQgJATACBMIABAJIhKA+QgNg3gXiSgAEfqBIACgIQALgrBEiWQBEiXhzirQAchuAggqQAhgqACgLQADgKARgYQADgcAHgCIAUgHQANgGAGgTIAPAkQgBATgKAKIgRASQgFAHgCARQgCASgEAHQgDABgBADQgFAFgJAHIgMAIIgLAGQgIAFgNAsIgCARIAAADQACAUAHAMQBCD8h8F4Qg0gygHgRgAEfqBQgCgEACgCIACgCIgCAIIAAAAgAHH0xIAAAAgAHL01IgBAAIgDAEQABgDADgBgAHL01IAAAAg");
	this.shape_260.setTransform(298.5,269.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#CC0033").s().p("AhLhbQgVhhAGgWIAVguQAMgbgDgUQgCgIgFgMQgGgNgGgSQgFgSADgKIAjgGQAMAUALAYQANAbAAAMQAAAKgFANIgJAWQgDAJgDANIAAAEIgCALQAAACAaAxQAEAPAAARQAAARACAIQABADAPAHQAIAEASBIQAyBgAABoQgDAJACAOIABADQgDA+gUBCQgogTgYBTQg7mBgVhfg");
	this.shape_261.setTransform(637.4,174.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#339999").s().p("EAhtAKWQgkAWAGgLQAGgLAjgxQAjgyAHglQAHgmgLgmQgKgmAEhEQAEhFAFgWIACgGQAHgcADggIABgEIAAAAIABgKIAAgCIABgCIABgJIgBAAQADgogCgtQgCg4gdhxQA1hYADg3QAtA3AABWQAAAIAGAfQAGAfAeBSQAYA+gNAHIAAgBIgBAAIgGgCIAAAAQgggNAcAOIABAAIABABIAGABIAAAAIAAAAIADAAIAAAAIABAAQgjAjgBAFQgEAigaCBIgFAdIgDAMQAGhSgBAEQgMAkAHAqIgBgDQgEgGAGAPQgdAVAgAuQAgAtgnBKQgnBJgCBlQgmhegkAVgEAkpAB9IgGgBIgBgBIgBAAQgcgOAgANIAAAAIAGACIABAAIAAABIAAAAIgDAAIAAAAIAAAAgEgg8gAuIgCgBQAChwAvg8IAYAoQA0BSgEASQgEATg3AIQgeAFgPABIgJAAIgGAAgEgiGgEpQAGgagSgHQgRgIghgZQghgaALgeQAKgfgGgnQgFgngIgWQgGgTgSgWIggglQgQgWgEgWIgBgCIAKgqIgFgSQA4AaAjBKQALAYAOApQARAzAHAPQAHASAbAcQAbAbARAgQASAfALA2QAIAnAeA2Qh9gzAFgag");
	this.shape_262.setTransform(484.8,413.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFF00").s().p("Ab+YmQgMgIACgaQACgMgBgHIgBgGQgHgqAMgkQABgEgGBSIACgMIAGgdQAUhbAIAiQAJAqALAXQALAXgCACQgBACAFAlQADATgBAIQgCAJgGgCQgMgEgCADQgCAEACAIQABAHggAHQgHgegBgBgAaQVPIgFgWQgFgMAsgEIAMAHIABABQhfhZgGgbIAAgCQADgbA8AIQACAJABAKQAAATAEAJQADAIgJAHQgJAGAGAHQAGAIABAIIACAMQADAKAeABIAAAAIgBAJIAAACIAAACIgBAFIACgSIgCASIAAAFIAAAAIgBAEQgEAggHAcQgdgRgGgRgAa/UsIAAAAgAZ5UUQgIgQBBAlQg4gTgBgCgAaZSoIAAAAgAaCSEIAPAVQAFAHADAIgAaASCQhLgsgDgGQgDgGAIgaIAMgqQAFgQAGgNQAHgMAfgjQAbgmAHgiIAZAAQgMAxgrBEQgxBMA5BPIACACgA7p2YIgPgIQgIgFgFgEQgHgIgFgTQgGgVgEgHIgCgEIgBgCIgBgBIgDgEIgIgMQgIgPgGgTIgBgDIAAgIQgCgQACgQQALAFAGAOIAKAWQAGAJALAIQAHAFAQAIIAsBuIgFAAQgNAAgNgJg");
	this.shape_263.setTransform(534.4,298.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#990099").s().p("AAQG+QgQgBgUgaIgFgHQAVgDABguQAChBAzgIQBEh0gwgvQgwgvgPgqQgOgogug/IAAgBQAMgGgXg/QgfhSgFgfQgGgfAAgIQAAhXgtg2QgMgOgPgMIARAGIAAAAQA3ATAQAQQAfAdAOA1QAOA1A0AyQA0AygOAaQgOAaA6BcQA6BaAPBdQAPBchCB5QgyBdglAAQgMAAgKgJgAgfGPQABgDAIACQAHADgCAAIgOgCg");
	this.shape_264.setTransform(725.1,432.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FF0000").s().p("EgmUAGcQgIgUAAgPQAGAIAsgQQAsgPAWjsQAXjrACgeIADhEQACgmAEgSQAIghAegIQAKgXAKgIQARgOACADQgBASAGAVIAJAdIgEAFIAAABIgBAAQgjAkACBAQADBAgwBnQA9DWgoBqQgnBrhMAWQgngxgRAZgEAmLACsIgSAAIgYAAImZAAIAqjzIGrDzgATVCsQCfjIACmXIG8D+Ig9Fhg");
	this.shape_265.setTransform(462.9,369.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#0033FF").s().p("AgeBCQgNhJgQgfIgUgmIAUAmQAQAfANBJQgThHgHgEQgPgIgBgDQgDgHAAgSQgBgQgDgPQgEgNgFgNIgJgUQgFgJgCgHIABgFQACgMAEgKIAJgVQAFgNAAgLQAAgMgNgaQgLgYgMgUIATAAQAcADAGAQQADAGAAAKIgDAPQgHAnAVAlQgBAkAFAaQACANAFAKQACAFAJAJQAIAKAqAoQAqAnArBAQAqBAhLBzQgpgQgMAsQAPjAhAgjg");
	this.shape_266.setTransform(644.7,165.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FF6633").s().p("ADXaFQAPgGgGgPQgGgQAIgWQAJgXAHgOQAIgNgZiWQgYiVAWhAQAWg/BDAlIACACIgCgDIACADIgCgDQg5hOAxhMQArhEAMgxIASAAQAOAMAMAOQgDA3g1BYIgGAJQgdAvAZBVQgDgIgFgHIgPgVIAXAkQg8gIgDAbIAAACQAGAaBfBZIgBAAIgMgHQhBglAJAQQAAABA4AUQhCgPAOAxQAOAyAMBSQAMBOgUgfIAOAXQAmA+g7AOQg7AOgIAJIgbABQgWAAAKgFgAFIYPIgCgCgAix1ZQgyg4gHgXQgHgWgdgGQgdgGgCgCQgVglAIgnIACgPQABgJgDgHQgHgQgcgDIgSAAIgBAAQgNAAgVAEIAWg7QBAgSAYAZQAQAQAHAlQAIAlAMANQANANAlADQAkACABAhQACAgCaBNQD+B+hggDIAAAAQkXgpgyg4g");
	this.shape_267.setTransform(669.6,296.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(1,1,1).p("AibMIQgRg3AIg7QAIg6AegyQAbgsBAg5QBMhGAWgaQBVhnAQigQAMh9geipQgskDgDgfQgHhMADhDQAEhNAThB");
	this.shape_268.setTransform(493.7,127.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAXlgkkQBAgSAYAZQAQAQAHAlQAIAlANANQAMAOAlACQAkADABAgQACAgCbBNQD+B+hggDQhfgDAMgXQjEgPgzg4Qgyg4gHgXQgHgWgdgGQgdgGgCgCQgUglAHgnQACgKAAgFQABgJgDgHQgHgQgbgDQgMAAgHAAQgBAAAAAAQgNAAgVAEIAAAAIAjgEIgjAGQgEAKAGASQAFASAHANQAFAMABAIQADAUgMAbQgGAPgPAfQgGAWApAeQAqAdAUIHQAYhTAnATQAUhBADg/QAAgBgBgCQgCgOAEgIQAAgCABgBQAKgPAqAPQBLhzgrhAQgqg/grgpQgrgogIgJQgIgJgCgFQgGgLgCgNQgFgaABgkAdCgTIgqDzIjTAAIogAAQiDCng4A5IBvICIAnCzIBEEmIAVBYIgKgIIgegaQgPAcguAsQguAtAIAvQAIAvgEB6QgDB5AAA1QABA1g2DFQgWBRgBAoQAAA7ArgYQABgHABgGQAIgGAJADQAEABAMAHQAKAFAGAAQAPAAAIgSQACgFAFgJQAFgIAHgKQAOgUA+g+QA9g+gLhDQgMhDAEgpQAEgqgVgyQgUgzANg9QAQhEAHgjQAAgBABgCQAEgVACgUQABAUAiAmQAiAmBGCXQBFCXhhCgQg0BWgTAsQgSAnAHAIQAOAOA7g9QAGgGAHgHQBwh4gSj7QgSj7jBi/QgHgOgIgNQAAgBAAAAQAAAAgBAAQgWgogbgmEAjbADgIgSAAIgZAAQgGAigbAmQggAjgGAMQgHANgEAQQgFAQgIAaQgIAaADAGQADAGBJAsIAEACQgBgBgBgBEAlzARDQACADADAEQAUAbASAAQAqAmBCh5QBCh5ACh2QACh2hKhDQhLhDAOgaQANgZg0gyQg0gygPg1QgOg1gegdQgRgQg3gTQAAAAAAAAQgIgDgIgDAdCgTIGrDzIgSAAQAOAMAMAOQAtA3AABWQAAAIAGAfQAGAfAeBTQAYA+gNAHQABAAAAAAQBFATAZAZQAZAZAaBWQAbBVhFB0Qg0AJgCBAQgBAugVADQgJABgLgGQgpgUApAJQAIACAGABQgBADAHAKEAiwADgImYAAEAizAIWQgZhVAdgvQADgEADgFQAdByACA4QACAtgDAoQAAAAABAAQgBAEAAAFQAAABgBABIAAACIgBAFIAAAFQhfhZgFgbQAAgBAAgBQADgbA7AIIgXgkIgCgCEAicAHyQAGAKAJALQAFAHADAIQADAJAAAKQABATADAJQADAIgJAHQgJAGAGAHQAGAIABAIQABAIACAEQACAKAeABQgBAJgBAJEAjJADgQgMAxgrBEQgwBMA4BPEAiYAHwQhBglgCAkQgCAlAKCpQAJCpgMAVQgNAWgIAWQgJAXAGAPQAGAQgPAGQgOAGA2gDQAHgJA7gOQA7gOgmg+IgOgWQAUAegMhOQgMhSgOgxQgNgyAKgDQAMAWAEAMQAFAVAAABQAHARAdARQgBADgBADQgFAWgEBFQgEBEAKAmQALAmgHAmQgHAlgjAyQgjAxATgWQASgWANAKQANAJAaADQALgGAnhJQAnhKgggtQggguAdgVQABAHgCAMQgCAaAMAIQACABAHAeQAfgHgBgHQgBgIACgEQACgDALAEQAGACACgJQABgIgCgTQgGglACgCQABgCgLgXQgLgXgJgqQgJgpgJAVEAjMAKXQhBglAJAQQABACAAABQAPgDAoAVIAMAHQAAAAABABEAjZAKfQAAACgBACQgDAggHAcEAkOANZQgHgqAMgkQABgEAMgkQAPgvAFgnQABgFAjgjEAlXAJlQgDACgIgEQgfgQAqASgEAkPANfQgGgPAEAGQABABAAACQABACAAAEgEAioANqIACADEAltAQ2QAYAFgPgFQgIgDgBADgEAi9AGJQA1hYADg3ARL/0IGck1IgCAFIgWA7EAYBghSQAAgDABgCQACgMADgKQAGgPADgHQAFgNAAgKQAAgMgMgbQgLgYgMgUAOS9qIC5iKIDjC9IhQDWIjbJLQDDEfAAFwQAAAEAAAEQgDGWieDJEAYBghSQACAHAEAIQAIARABADQAGANADANQgagxABgCQAAgFABgFgEAYZggVQAEAQABAQQAAARACAIQABADAPAHQAIAEASBJQgMhLgRgfQgLgVgJgRgAZ96xQAAgGAAgFQgBhpgyhgQBCAjgOCjQgBAHAAAHQgBAFgBAGAZ86jQABgHAAgHEAXPgjnIihGwEgU2glwQgGAUgNAFQgNAGgHABQgHACgDAdQgRAXgDALQgDALggAqQggApgcBvQBBCag4DQQgeBtgLAsEgVUgjoQgFAGgJAGQgGAEgGAEQgHAEgEADQgIAEgNAsIgCARIAAAEQACATAHAMQADAFA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");
	this.shape_269.setTransform(480.5,364.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#3300FF").s().p("Ah4HaIAMggQAXhEAMhZIAZi1IAOhvQACgTABgbIAAgwIAAggIAAgLIAAgKIgBg0IABgrIANhcIADgNQAJggANgcQAcg2A7gWIADAHIACAFQgOAkgFA1IgDCiQAMAUAdAdQAdAdg5BEQg4BDgCAIQgLAxgHA8IgBAMIgDANIgUB8IggC+IgIAwQghgPgRABQgRACgKANIAHgRgAgdkaQAEgmAKgiIgDANIgNBcIACghgAgPliIAAAAg");
	this.shape_270.setTransform(354.1,557);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#CC3366").s().p("AhSHrQgQgYAKgRQAfAUAEgZQAEgZATgSQATgRgagfQgZgfBfiOQBgiOhGilQhFiniYiMIAAAAIgBgBIgGgQIgKgJIBBg/IAHAIQBqCRBkCfQBmCegcDEQgcDGgrBJQgbAtg1AfQggASgqAOQgUgSgKgOg");
	this.shape_271.setTransform(384.4,552.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#33FFFF").s().p("AhlGiQABgoAWhRQA2jFgBg1QgBg0AEh5QAEh6gIgvQgIgvAtgtQAtgsAQgcIAeAaQgVAtgEBMIgJABQgiAxAFBGQAFBGAAAuQgBAuADAPQAHAgAAAVQAAAVgHAHQAHgHAAgVQAAgVgHggQAMAPAJAhQAJAggeABQgBACAMAjIADANQgGA5gNAeQgTApgMAUQgLAVgkBMIgJAWQgHATgDAQQgDANAAAMQgFAFAGAFQgNAHgJAAQgWAAABgqg");
	this.shape_272.setTransform(580.7,559.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FF3399").s().p("AgqHoQgHgHARgnQAUgtAzhVQBhihhGiXQhEiWgigmQgigmgBgTIABgaQACg9gTgsIAOgIQDADAASD5QASD7hwB4IgNAOQgvAxgSAAQgFAAgCgDgAiKnqQAaAmAXAoIgNAIIgQADg");
	this.shape_273.setTransform(603.7,557);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#339933").s().p("AhKG1IgQgJQgJgCgIAGIAEgWIAGgjQBFiEAYg5QAOglAAgcIgBgOIADgsQgJgCgGgDQAcgCgJggQgJgfgKgRQAKgdADgRIAKg3QAGgdAAh8IABgpIAAgBQADhNAVgsIAKAIIAPgCQAJAMAGAPQAUAsgCA9IgCAaQgCAUgEAVIgBADQgHAigQBFQgNA9AUAyQAVAygEApQgEAqAMBDQALBCg9A/Qg9A+gOAUIgMASIgHAOQgIASgPAAQgGAAgKgFgAhrGaQADgQAHgTIgGAjIgEAWIAAAAIgCADQgBgMADgNgAhXFhQAjhNAMgUQANgVASgpQAMgeAGg5IABAOQAAAcgOAlQgYA5hFCEIAKgWg");
	this.shape_274.setTransform(585.7,560.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#99FF33").s().p("AqsNzQgMgLAAgQQAAgQAMgMQAMgLAPAAQARAAALALQAMAMAAAQQAAAQgMALQgLAMgRAAQgPAAgMgMgAFKNdQgMgMABgRQgBgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAARgMAMQgMAMgSAAQgRAAgMgMgAkYLxIgDgDQgIgIAAgLQAAgLAIgHIADgDQAGgFAJAAQALAAAHAIQAIAHAAALQAAALgIAIQgHAHgLAAQgJAAgGgEgALtFpQgJgJAAgMQAAgNAJgJQAIgIANAAQAMAAAJAIQAJAJAAANQAAAMgJAJQgJAJgMAAQgNAAgIgJgAA7FeQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgKAAgHgHgAuhEmQgSgTgBgbQABgaASgTQAUgTAaAAQAbAAASATQAUATgBAaQABAbgUATQgSATgbAAQgaAAgUgTgAOOkWQgGgYAAgjQAAgiAGgZQAHgYAJAAQAKAAAGAYQAGAZABAiQgBAjgGAYQgGAZgKAAQgJAAgHgZgAsmruQgQgPAAgWQAAgWAQgQQAPgPAWAAQAWAAAPAPQAQAQAAAWQAAAWgQAPQgPAQgWAAQgWAAgPgQgABIs7QgMgMAAgQQAAgQAMgLQALgMARAAQAPAAAMAMQAMALAAAQQAAAQgMAMQgMALgPAAQgRAAgLgLg");
	this.shape_275.setTransform(484.2,323.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#99CCFF").s().p("AB3QeIgihmIAegyIgzhnIA1gyIgPgoIAAgRIgmg1Ig5h4IgggXIAAgRIgUgyIg5BkIA8CRIhkBVIARCeIAAAPIhSBIIAXBGIAAAKIAbBhIgJgBQg5gHg2gNQgkgIgjgKQkRhSjajZQgigjggglQiIiehNjIQhFiyAAjoQAAiQAeiFQBDkkDVjnIAmgnQDvjvEzhLIAQgEQA2gMA5gIQBRgKBVAAQDJAACwA5QEBBUDODPQBYBYBCBhQDCEfAAFvIAAAIQgCGWifDKQiCCng5A5QmWEwkSAiIgpAEgAqpMsQgMAMAAAQQAAAQAMALQAMAMAPAAQARAAALgMQAMgLAAgQQAAgQgMgMQgLgLgRAAQgPAAgMALgAFNMTQgMAMABARQgBARAMAMQAMAMARAAQASAAAMgMQAMgMgBgRQABgRgMgMQgMgMgSAAQgRAAgMAMgAkVK2IgDADQgIAHAAALQAAALAIAIIADADQAGAEAJAAQALAAAHgHQAIgIAAgLQAAgLgIgHQgHgIgLAAQgJAAgGAFgALwEuQgJAJAAANQAAAMAJAJQAIAJANAAQAMAAAJgJQAJgJAAgMQAAgNgJgJQgJgIgMAAQgNAAgIAIgAA+EsQgHAHAAAKQAAAKAHAHQAHAHAKAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgHgKAAQgKAAgHAHgAueC7QgSATgBAaQABAbASATQAUATAaAAQAbAAASgTQAUgTgBgbQABgagUgTQgSgTgbAAQgaAAgUATgAORmcQgGAZAAAiQAAAjAGAYQAHAZAJAAQAKAAAGgZQAGgYABgjQgBgigGgZQgGgYgKAAQgJAAgHAYgAsjtJQgQAQAAAWQAAAWAQAPQAPAQAWAAQAWAAAPgQQAQgPAAgWQAAgWgQgQQgPgPgWAAQgWAAgPAPgABLuCQgMALAAAQQAAAQAMAMQALALARAAQAPAAAMgLQAMgMAAgQQAAgQgMgLQgMgMgPAAQgRAAgLAMg");
	this.shape_276.setTransform(483.9,324.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FF99FF").s().p("AhgTxQgYiRgJgJQgIgKgdgRIgdgTQg4hlgJhMQgzhAgRgYQgTgcgvgwQg4g7gxgwIBtAXIgCAGQAPAkA6ApQA+AtAQAdQANAUAIAhQAEATBOA0QBNA0AYAsQAZAsgEAWIgIBCQgFAsAdAsQAfArgKASQgKASACBPIABAJIhKA+QgNg3gXiSgAEfqBIACgIIApiZQA4jPhBibQAchuAggqQAhgqACgLQADgKARgYQADgcAHgCIAUgHQANgGAGgTIAPAkQgBATgKAKIgRASQgFAHgCARQgCASgEAHQgDABgBADQgFAFgJAHIgMAIIgLAGQgIAFgNAsIgCARIAAADQACAUAHAMQBCD8h8F4Qg0gygHgRgAEfqHIACgCIgCAIQgCgEACgCgAEhqJIAAAAgAHH0xIAAAAgAHL01IgBAAIgDAEQABgDADgBgAHL01IAAAAg");
	this.shape_277.setTransform(298.5,269.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#339999").s().p("EAh4AKRQAjgyAHglQAHgmgLgmQgKgmAEhEQAEhFAFgWIACgGQAHgcADggIABgEIAAAAIABgKIAAgCIABgCIABgJIgBAAQADgogCgtQgCg4gdhxQA1hYADg3QAtA3AABWQAAAJAGAeQAGAeAeBTQAYA+gNAHIABAAQgjAjgBAFQgFAngPAvIgNAoQgMAkAHAqIgBgDQgEgGAGAPQgdAVAgAuQAgAtgnBKQgnBJgLAGQgagDgNgJQgNgKgSAWIgGAHQgCAAAYgigEAkpACpIADAAIAAAAIAAgBIgBAAIgGgCIAAAAIgRgGQgCAAAPAHIABABIABAAIAEABIACAAIAAAAgEAknACpIgEgBIgBAAIgBgBQgPgHACAAIARAGIAAAAIAGACIABAAIAAABIAAAAIgDAAIAAAAIgCAAgEAksACpIAAAAgEgg8gACIgCgBQAChwAvg8IAYAoQA0BSgEASQgEATg3AIQgeAFgPABIgJAAIgGAAgEgiGgD9QAGgagSgHQgRgIghgZQghgaALgeQAKgfgGgnQgFgngIgWQgGgTgSgWIggglQgQgWgEgWIgBgCIAKgqIgFgSQA4AaAjBKQALAYAOApQARAzAHAPQAHASAbAcQAbAbARAgQASAfALA2QAIAnAeA2Qh9gzAFgag");
	this.shape_278.setTransform(484.8,408.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFF00").s().p("Ab+YmQgMgIACgaQACgMgBgHIgBgGQgHgqAMgkIAMgoQAKgVAJApQAJAqALAXQALAXgCACQgBACAFAlQADATgBAIQgCAJgGgCQgMgEgCADQgCAEACAIQABAHggAHQgHgegBgBgAaQVPIgFgWQgFgMgLgWIABAAIAEAAIAAAAIACAAQANABAZAMIABABIACABIABAAIAAAAIABABIABABIADABIABAAIgBAAIgDgBIgBgBIgBgBIAAAAIgBAAIgCgBIgBgBQgZgMgNgBIgCAAIAAAAIgEAAIgBAAIgCgDQgIgQBBAlIAMAHIABABIAAAAIgBAEQgEAggHAcQgdgRgGgRgAa/UxQhfhZgGgbIAAgCQADgbA8AIQACAJABAKQAAATAEAJQADAIgJAHQgJAGAGAHQAGAIABAIIACAMQADAKAeABIAAAAIgBAJIAAACIAAACIgBAFIACgSIgCASIAAAFIAAAAgAa/UsIAAAAgAaCSEIAPAVQAFAHADAIgAZ+SCQhJgsgDgGQgDgGAIgaIAMgqQAFgQAGgNQAHgMAfgjQAbgmAHgiIAZAAQgMAxgrBEQgxBMA5BPIACACgA7p2YIgPgIQgIgFgFgEQgHgIgFgTQgGgVgEgHIgCgEIgBgCIgBgBIgDgEIgIgMQgIgPgGgTIgBgDIAAgIQgCgQACgQQALAFAGAOIAKAWQAGAJALAIQAHAFAQAIIAsBuIgFAAQgNAAgNgJg");
	this.shape_279.setTransform(534.4,298.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FF6633").s().p("ADXaFQAPgGgGgPQgGgQAIgWQAJgXAMgVQANgVgJipQgKipACglQACgkBBAlIAEACIgCgDIACADIgCgDQg5hOAxhMQArhEAMgxIASAAQAOAMAMAOQgDA3g1BYIgGAJQgdAvAZBVQgDgIgFgHIgPgVIAXAkQg8gIgDAbIAAACQAGAaBfBZIgBAAIgMgHQhBglAJAQIABADQgLADAOAxQAOAyAMBSQAMBOgUgfIAOAXQAmA+g7AOQg7AOgIAJIgbABQgWAAAKgFgAFIYPIgCgCgACYz4QhggDANgXQjEgPgyg4Qgyg4gHgXQgHgWgdgGQgdgGgCgCQgVglAIgnIACgPQABgJgDgHQgHgQgcgDIgSAAIgBAAQgNAAgVAEIAWg7QBAgSAYAZQAQAQAHAlQAIAlAMANQANANAlADQAkACABAhQACAgCaBNQD3B7hVAAIgEAAg");
	this.shape_280.setTransform(669.6,296.9);

	this.text_1 = new cjs.Text("", "75px 'Lot'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 77;
	this.text_1.parent = this;
	this.text_1.setTransform(520.2,270.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAXlgkkQBAgSAYAZQAQAQAHAlQAIAlANANQAMAOAlACQAkADABAgQACAgCbBNQD+B+hggDQhfgDAMgXQjEgPgzg4Qgyg4gHgXQgHgWgdgGQgdgGgCgCQgUglAHgnQACgKAAgFQABgJgDgHQgHgQgbgDQgMAAgHAAQgBAAAAAAQgNAAgVAEIAAAAIAjgEAZ+6/QAKgPAqAPQBLhzgrhAQgqg/grgpQgrgogIgJQgIgJgCgFQgGgLgCgNQgFgaABgkAdCgTIgqDzIjTAAEAiwADgQgGAigbAmQggAjgGAMQgHANgEAQQgFAQgIAaQgIAaADAGQADAGBJAsIAEACQgBgBgBgBEAjJADgIgZAAImYAAEAjbADgIgSAAQgMAxgrBEQgwBMA4BPEAlzARDQACADADAEQAUAbASAAQAqAmBCh5QBCh5ACh2QACh2hKhDQhLhDAOgaQANgZg0gyQg0gygPg1QgOg1gegdQgRgQg3gTQAAAAAAAAQgIgDgIgDQAOAMAMAOQAtA3AABWQAAAIAGAfQAGAfAeBTQAYA+gNAHQABAAAAAAQBFATAZAZQAZAZAaBWQAbBVhFB0Qg0AJgCBAQgBAugVADQgJABgLgGQgpgUApAJQAIACAGABQgBADAHAKgAdCgTIGrDzIgSAAEAizAIWQgZhVAdgvQADgEADgFQAdByACA4QACAtgDAoQAAAAABAAQgBAEAAAFQAAABgBABIAAACIgBAFIAAAFQhfhZgFgbQAAgBAAgBQADgbA7AIQADAJAAAKQABATADAJQADAIgJAHQgJAGAGAHQAGAIABAIQABAIACAEQACAKAeABQgBAJgBAJEAicAHyIgCgCEAicAHyQAGAKAJALQAFAHADAIgEAiYAHwQhBglgCAkQgCAlAKCpQAJCpgMAVQgNAWgIAWQgJAXAGAPQAGAQgPAGQgOAGA2gDQAHgJA7gOQA7gOgmg+IgOgWQAUAegMhOQgMhSgOgxQgNgyAKgDQAMAWAEAMQAFAVAAABQAHARAdARQgBADgBADQgFAWgEBFQgEBEAKAmQALAmgHAmQgHAlgjAyQgjAxATgWQASgWANAKQANAJAaADQALgGAnhJQAnhKgggtQggguAdgVQABAHgCAMQgCAaAMAIQACABAHAeQAfgHgBgHQgBgIACgEQACgDALAEQAGACACgJQABgIgCgTQgGglACgCQABgCgLgXQgLgXgJgqQgJgpgJAVQAPgvAFgnQABgFAjgjEAjMAKXQhBglAJAQQABACAAABQAPgDAoAVIAMAHQAAAAABABEAjZAKfQAAACgBACQgDAggHAcEAkOANZQgHgqAMgkQABgEAMgkEAlXAJlQgDACgIgEQgfgQAqASgEAkOANZQABACAAAEQgGgPAEAGQABABAAACgEAioANqIACADEAltAQ2QAYAFgPgFQgIgDgBADgEAi9AGJQA1hYADg3ARL/0IGck1IgCAFIgWA7EAXPgjnQgEAKAGASQAFASAHANQAFAMABAIQADAUgMAbQgGAPgPAfQgGAWApAeQAqAdAUIHQAYhTAnATQAUhBADg/QAAgBgBgCEAYBghSQAAgDABgCQACgMADgKQAGgPADgHQAFgNAAgKQAAgMgMgbQgLgYgMgUIgjAGIihGwIhQDWIjbJLQDDEfAAFwQAAAEAAAEIG8D+Ig9FhIogAAQiDCng4A5IBvICIAnCzIBEEmIAVBYIgKgIIgegaQgPAcguAsQguAtAIAvQAIAvgEB6QgDB5AAA1QABA1g2DFQgWBRgBAoQAAA7ArgYQgFgFAFgFQAAAFAAAFQABgHABgGQAIgGAJADQAEABAMAHQAKAFAGAAQAPAAAIgSQACgFAFgJQAFgIAHgKQAOgUA+g+QA9g+gLhDQgMhDAEgpQAEgqgVgyQgUgzANg9QAQhEAHgjQAAgBABgCQAEgVACgUQABAUAiAmQAiAmBGCXQBFCXhhCgQg0BWgTAsQgSAnAHAIQAOAOA7g9QAGgGAHgHQBwh4gSj7QgSj7jBi/QgHgOgIgNQAAgBAAAAQAAAAgBAAQgWgogbgmAOS9qIC5iKIDjC9EAYBghSQACAHAEAIQAIARABADQAGANADANQgagxABgCQAAgFABgFgEAYZggVQAEAQABAQQAAARACAIQABADAPAHQAIAEASBJQgMhLgRgfQgLgVgJgRgAZ96xQAAgGAAgFQAAgCABgBQgBAHAAAHQgBAFgBAGQgCgOAEgIQgBhpgyhgQBCAjgOCjAZ86jQABgHAAgHEgU2glwQgGAUgNAFQgNAGgHABQgHACgDAdQgRAXgDALQgDALggAqQggApgcBvQBBCag4DQQgeBtgLAsEgVUgjoQgFAGgJAGQgGAEgGAEQgHAEgEADQgIAEgNAsIgCARIAAAEQACATAHAMQADAFAEAEQAOAMAFANQAFAMACApQADAqATAXEgVUgjoQgDAMACASQACALAFAYQABARgEAeQAAAEgBAEQAAAEAAAEQAAAMADAQQAEAcABAJQADAggJA2QALAegIBlQgJBlAYAvQAwgLABgQQACgRAOAmQgUiAgKgUQgKgVAAgbQAAgbACgFQAFgNABgCQAHgdADgqQAAgFAPgWQgJgxgGgnQgBgBAAgBQAAgCgBgDQgDgTgCgKQgCgOgCgMQAGATAIAPIAIAMQACACABACQABABAAAAQABABAAABQABACABACQAEAHAHAVQAFATAHAIQAEAEAJAFQAEADAKAFQARALAOgCIBHCwIDriaIm4llIAPAlQgBASgKAKQgQARgBABQgFAHgCASQgCARgEAHQgBABAAAAQgBACgCABgEgVugjUQABANgCAbQAAADADAMQACAHAcACIgDAcIgBAQEgUnglLIAZA/IAyB9IAsBuEgUfgjWQALAFAHAOQAEAHAGAPQAFAJAMAIQAGAFAQAIEgUegirQAAgBAAgCQgBgEAAgEQgCgQACgQQAEgbANgbEgVQgjsQgDACgBACAyI6jQgCgHgBgGA0j+kQAUAVA0AzQAyAxAeB7QgEgfAmAFQAtAGgUgPQgUgPg8hlQg8hkgohqAxp9xIBNDAIE5jdIibh9AkD4JQAIgCAIgCQA2gMA4gIQBSgKBVAAQDIAACxA6QEBBUDODOQBYBYBBBhAqnyuQAAAWgQAPQgPAQgWAAQgWAAgQgQQgPgPAAgWQAAgWAPgQQAQgPAWAAQAWAAAPAPQAQAQAAAWgAtLyoQASgUAUgTQDvjvEzhLIngmFA3/4nQgFANAIgdQABgEABgEA3843QgDgFACgCQACgBABAAEgWHghpQBCD8h8F5Qg0gzgHgQAsOiiQAAAbgTATQgTATgaAAQgbAAgTgTQgTgTAAgbQAAgaATgTQATgTAbAAQAaAAATATQATATAAAagAw8ASQhFixAAjoQAAiRAeiFQBCkkDWjnAgZAqIAZAAIAAAaIgZAAgAjKFAQAAALgIAIQgHAHgLAAQgJAAgGgEQgCgBgCgCQgHgIAAgLQAAgLAHgHQACgCACgBQAGgFAJAAQALAAAHAIQAIAHAAALgADCMSQgUADgVACIBzj+IiqiFIA1gyIgPgoIAAgRIiAjEIAAgRIAdk2IhpFoIA8CRIhkBVIARCeIAAAPIiYAAIBcCOIAAAKIAcBhQgFAAgFgBQg4gHg2gNQgkgIgjgKAAHDWQgBAAgBAAQgNAAgKgJQgJgLgBgOQAAgOAKgKQAAAAABAAQAKgKAMAAQAIAAAHADQAEADAFAEQAFAFADAFQACAGAAAJQAAANgJAJQAAAAgBABQgJAJgNABIAHBQAPZrsQAAAjgGAYQgHAZgJAAQgKAAgGgZQgHgYAAgjQAAgiAHgZQAGgYAKAAQAJAAAHAYQAGAZAAAigACvzyQAAAQgLAMQgMALgQAAQgQAAgLgLQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQALALAAAQgACJhNQAAAKgHAHQgHAHgKAAQgKAAgHgHQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKgANFhGQAAAMgJAJQgJAJgMAAQgNAAgJgJQgIgJAAgMQAAgNAIgJQAJgIANAAQAMAAAJAIQAJAJAAANgATGl/QgDGWieDJAwc6xIDRIJAOS9qIFMEJAGb3xIH3l5EglFgFNQghAAgDAZQgBADAAADQgBgDgRAOQgKAIgKAXQgfAIgHAgQgEATgCAmQgCAmABAbQAAAbgKDXQgKDZg/ApQg2AjgGgIQAAAPAIAUQARgZAnAxQBIguAjiHQAiiHgwiGQAwhngCg/QgChAAjgkIAAgBQAAAAABAAQACgCACgDQACAGADAHQAIAaAAASQgBARgEAfQgDAfAGAVQAHAUAIAdQAIAcgSAvQAqBBgBBAQAAA/gbCUQgbCUAACqQgEARgCALQACAhBFgKQAFieAHhEQAHhFAJgaQAJgagFglQgGgkAihYQAihYgYglQgXglgLhFQgLhEgRghQgSggAXg0QADgIACgKQABABAAABQAEAWAQAWQAKANAWAYQASAWAGATQAIAWAFAnQAGAmgKAfQgLAeAhAaQAhAZARAIQASAHgGAaQgFAaB9AzQgeg2gIgnQgLg2gSgfQgRgggbgbQgbgcgHgRQgHgPgRgzQgOgpgLgYQgjhKg4gaQAAgBgBgBQgJgfgSgxQgBgDgBgCIAPAAIBtAXIDdAwIESBVIJ3DDEglqgEuQgBASAHAVQADALAGASEglFgFNIAnAAEgkFgC6QADgNAHgdQgNAZADARgEgj7gDkQgCgIgDgKEgkPgFNQAwAxA5A6QAvAwATAcQARAZAzA/QAJBMA4BkQAAABAdASQAdASAIAJQAJAJAXCSQAYCRANA3QA1grAVgTQAAgEAAgEQgDhQAKgSQAKgRgegsQgegsAFgsQAFgsADgWQADgWgYgsQgYgshOgzQhNg0gEgTQgIgggNgVQgQgdg+gtQg6gpgPgjA+4mzIgNCtA+4mzImNBmA/iEMQgBgBAAAAQABAAAAAAQAAABAAAAQgvA8gCBwQABABABAAQAEABALgBQAPgBAegFQA3gIAEgTQAEgSg0hSQgOgVgKgTgA7Dn2Ij1BDA7Dn2IAQFFA8OHFQADgCACgCQAVgRgMAuQgKAsgEhFgEgpMAGtQgCgBABgDQADgTgCAQQAAAEAAADgEgliALuQAAgBAEgQAG1GlQAAARgMAMQgMAMgRAAQgRAAgMgMQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARgABDFTIAeAAIAAAeIgeAAgABLJdQAAAAgBgBQgKgKAAgOQAAgOAKgKQAKgKAOAAQAAAAABAAQANAAAKAKQAKAKAAAOQAAAOgKAKQgKAJgNABQgBAAAAAAQgNAAgKgJIgzA9ABcL+IAgAAIAAAhIggAAgAFQQwIAkAAIAAAkIgkAAgAEdSgQABAAABgBQAOgDAMAHQAMAHAEANQAAADABACQABALgGAKQAAABAAAAQgGAJgJAEQgDABgCABQgOAEgMgHQgMgHgEgOQgDgNAGgMQAAAAAAgBQAHgLAMgEIgbhLAKFRrICEBlID3hbADCMSIHDFZIFUipASHaPQABgNABgNQACg9gUgsQgGgOgJgNARPXrQgUAtgEBMIAAABQgBAUAAAVQABB8gHAdQgGAdgEAaQgDASgLAdQgDgPAAguQAAgugFhGQgFhGAjgxAQYffQANgPgNhDQALAQAJAhQAJAggdABQAHADAJACQgBAYgCAVQgGA5gNAeQgSAogNAVQgMAVgjBMQgGAMgEAKQBFiEAYg4QATgvgFggQgBgHgCgGQgMgjACgCgAQxXRIkokBANqHAQmXEwkRAiAibJRIAhAAIAAAgIghAAgApFG9QAAAQgLALQgMAMgQAAQgQAAgLgMQgMgLAAgQQAAgQAMgMQALgLAQAAQAQAAAMALQALAMAAAQgAmQTnQgBABgBAAQgLAJgOgCQgOgDgIgLQgIgLACgOQAAgBAAAAQADgOALgHQALgJAOADQAOACAIALQAIALgCANQAAABAAAAQgCANgKAIIA0A9AgbNyIAzg9AgbNyQABAAABABQAKAKAAAOQAAAOgKAKQgDADgEACQgHAFgKAAQgBAAAAAAQgKAAgHgFQgDgCgDgDQgKgKAAgOQAAgOAKgKQAJgJAOgBQAAAAABAAQANAAAJAJgAkAQ8IAjAAIAAAkIgjAAgAq9QIIGDkdQkShSjZjZQgjgjgfgkIh0HHIg2DWIClBygAx0WIIBAg+IDIjCAx0WIQgIACgIADQgHACgGACQg7AWgXAoQgUAjgJAwQgBAHgBAGQgIA4gFAlQgBATAAAYEgTRAkbQAUgRAXgBQAXAAAWAQQgWhLgmguQApgwgCgNQgDgMAhg0QAhg1gigzQgjgzATgeQASgdAlgRQAlgRgNiCQgNiCgriDIAAAAQAAgJgBgJQAEAIADAHQAAABAAAAIAAABQCYCMBGCmQBGCnhgCOQhgCOAaAfQAaAegUASQgTASgEAZQgEAZgfgUQgJARAPAXQAKAPAVARQAqgNAggTQA1geAbgtQAshJAcjGQAcjFhmifQhmiehpiRAyMWdQgBACgBADA0PcgIgBAvQgEAagJAqQgKAqAAAxQAAAwgSB7QgNBggZBGQgIAVgIATQADgEAEgDEgTlAgFQAAAGgCAMQgCAXAEBXQADBOARBIAyEWNIgFAQIAVgVAisWPIAhAAIAAAhIghAAgAwRQWIhzF3AvbNAIEeDIEgP1AlfQg3AGASgFQATgFASAEgEgTNAksQgDgKgBgHEAOwAlVQACgLACgLQADgRADgSQgHATgDAQQgCANAAAMQABgBABgCgAxjqdIpgCnAtnF5QiIifhNjIAaCiBIDABu");
	this.shape_281.setTransform(480.5,364.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#996666").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_282.setTransform(479.3,369.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#0099FF").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape_283.setTransform(491.3,442.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FF66FF").s().p("AgQARIAAghIAhAAIAAAhg");
	this.shape_284.setTransform(464.9,508.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#CCCC00").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape_285.setTransform(456.6,474.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#CC0000").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape_286.setTransform(515.9,473.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#6633CC").s().p("Aj3HOQgOgDgIgLQgIgLACgOIAAgBQADgOALgHQALgJAOADQAOACAIALQAIALgCANIAAABQgCANgKAIIgCABQgJAHgLAAIgFAAgAD3mvIAAgeIAeAAIAAAeg");
	this.shape_287.setTransform(462.5,444.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FF66CC").s().p("AAAAiQgNAAgKgJQgJgLgBgOQAAgNAKgKIABgBQAKgJAMAAQAIAAAHADIAJAHIAIAKQACAFAAAIQAAANgJAKIgBABQgJAJgNABIgCAAg");
	this.shape_288.setTransform(481,382.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#CC66CC").s().p("AAAAiQgJAAgIgFIgGgFQgKgKAAgOQAAgNAKgKQAJgKAOAAIAAAAQANAAAJAJIACABQAKAKAAANQAAAOgKAKIgGAFQgIAFgKAAIAAAAg");
	this.shape_289.setTransform(475.5,455.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#003399").s().p("ABADnIgDgEIgFgGIgBgBIAAAAQgEAJgKACQgJABgQgFIgOgGQgJgDgEgDQgEgDgCgEIgFgBIgHAAQgFgCgCgCQgBgDADgDIAFgGIACgHQACgGAEADQgCgDAAgEQABgFAEABQAEgBADAEIAFAGIAGgCQADgBAGACQAGgBAKAEQANAEAFAEQAKAGADAIQADgCAMgBIAGAAQAEABABACQACACgCAEIgFAFQAEABABACQACAEgBABQgCADgIgBQACAFgBACQgBAFgEAAQgDgBgCgEgAgwinQgNAAgKgIIgBgCQgKgKAAgOQAAgOAKgJQAKgKAOAAIABAAQANAAAKAKQAKAJAAAOQAAAOgKAKQgKAKgNAAIgBAAg");
	this.shape_290.setTransform(495.2,442.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#660000").s().p("AhJIBQgCgCAAgEIgBgLIAAgCIgBAAQgHAGgJgDQgIgCgJgMIgJgKQgFgHgCgFQgBgDAAgFIgDgCIgGgDQgDgDABgDQAAgEAFgBIAGgDIAFgFQAEgDACADIADgHQADgDADACQACABABAEIABAHIAGACQADABAFAEQAFABAFAHQAIAJACAGQAFAJgDAIQAEAAALAEIAEACQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAADgEACIgGACQADACAAADQgBADgCABQgCADgGgFQgBAFgCABQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCgBgABjmuQgDgCgDgEQgEAEgEgBIgEgEQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBIgIgBQgEgBgCgEQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAgBIADgCQAJgEAEABQgGgIAAgJQAAgEAEgJQACgGAEgBQACgEADgCIAFgBIgCgGQAAgBgBgBQAAgBABAAQAAgBAAAAQAAAAABgBQACgCAFADQAEADABAEQABgEAFADIAIAEIAIADQAFAAACAEQACACgBADIgFADIgCACQACAEABAEQAAAEgCAGIgEAJQgEALgGADQgIACgKgFIAAAAIAAACIACAFIADAFQABADgBACIgCABQgCAAgDgCg");
	this.shape_291.setTransform(470.9,447.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#CC9933").s().p("AggAnQgEgCAAgFIgCgHIgEgIQgDgGAEgBQgDgBgDgEQgDgFACgBQACgDAEABIAHACIACgFQACgEAFgDQACgEAIgDQALgFAFAAQAJgCAIAGQABgEAFgJIADgEQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQADABACAFIAAAHQADgCADABQADACABADQACADgGAFQAFADABACQADAFgCACQgCABgEAAIgGgDIgGgBIgBAAIAAAAQAEAJgEAJQgEAHgNAFIgLAFQgHAEgFgBQgEAAgEgCIgEADIgEAFIgEABIgCgBg");
	this.shape_292.setTransform(475.5,426.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FF0066").s().p("AgCAXIgNgBQgJgBgEgCQgEgCgDgDIgEABIgGACQgFAAgBgDQgCgDACgEIACgGIABgGQAAgGAEABQgCgCgBgEQAAgFADgBQADgBADADIAGAEIAFgDIAJgCQAFgCAIABQALABAGACQAKADAEAIQACgDAKgFIAFgBQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAQACADgBAEIgDAFQADAAACACQACACAAACQgBADgHABQADAEAAADQAAAEgEABQgCAAgDgCIgEgEIgFgEIgBgBIAAABQgCAJgIAEQgFADgIAAIgIgBg");
	this.shape_293.setTransform(484.8,411.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#339933").s().p("AhKG1IgQgJQgJgCgIAGIAEgWIAGgjQBFiEAYg5QAOglAAgcIgBgOIADgsQgJgCgGgDQAcgCgJggQgJgfgKgRQAKgdADgRIAKg3QAGgdAAh8IABgpIAAgBQADhNAVgsIAKAIIAPgCQAJAMAGAPQAUAsgCA9IgCAaQgCAUgEAVIgBADQgHAigQBFQgNA9AUAyQAVAygEApQgEAqAMBDQALBCg9A/Qg9A+gOAUIgMASIgHAOQgIASgPAAQgGAAgKgFgAhrGaQADgQAHgTIgGAjIgEAWIAAAAIgCADQgBgMADgNgAhrGwIAAAAgAhXFhQAjhNAMgUQANgVASgpQAMgeAGg5IABAOQAAAcgOAlQgYA5hFCEIAKgWgAAJBrIAAAAg");
	this.shape_294.setTransform(585.7,560.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#99CCFF").s().p("ADqOkIiqiFIA1gyIgPgoIAAgRIh/jEIAAgRIAck3IhpFpIA8CRIhkBVIARCeIAAAPIiYAAIBdCOIAAAKIAbBhIgJgBQg5gHg2gNQgkgIgjgKQkRhSjajZQgigjggglQiIiehNjIQhFiyAAjoQAAiQAeiFQBDkkDVjnIAmgnQDvjvEzhLIAQgEQA2gMA5gIQBRgKBVAAQDJAACwA5QEBBUDODPQBYBYBCBhQDCEfAAFvIAAAIQgCGWifDKQiCCng5A5QmWEwkSAiIgpAEgAqpMsQgMAMAAAQQAAAQAMALQAMAMAPAAQARAAALgMQAMgLAAgQQAAgQgMgMQgLgLgRAAQgPAAgMALgAFNMTQgMAMABARQgBARAMAMQAMAMARAAQASAAAMgMQAMgMgBgRQABgRgMgMQgMgMgSAAQgRAAgMAMgAkVK2IgDADQgIAHAAALQAAALAIAIIADADQAGAEAJAAQALAAAHgHQAIgIAAgLQAAgLgIgHQgHgIgLAAQgJAAgGAFgALwEuQgJAJAAANQAAAMAJAJQAIAJANAAQAMAAAJgJQAJgJAAgMQAAgNgJgJQgJgIgMAAQgNAAgIAIgAA+EsQgHAHAAAKQAAAKAHAHQAHAHAKAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgHgKAAQgKAAgHAHgAueC7QgSATgBAaQABAbASATQAUATAaAAQAbAAASgTQAUgTgBgbQABgagUgTQgSgTgbAAQgaAAgUATgAORmcQgGAZAAAiQAAAjAGAYQAHAZAJAAQAKAAAGgZQAGgYABgjQgBgigGgZQgGgYgKAAQgJAAgHAYgAsjtJQgQAQAAAWQAAAWAQAPQAPAQAWAAQAWAAAPgQQAQgPAAgWQAAgWgQgQQgPgPgWAAQgWAAgPAPgABLuCQgMALAAAQQAAAQAMAMQALALARAAQAPAAAMgLQAMgMAAgQQAAgQgMgLQgMgMgPAAQgRAAgLAMg");
	this.shape_295.setTransform(483.9,324.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FF9933").s().p("AMNclQgMgHgDgOQgEgNAGgLIABgBQAGgMANgEIACAAQANgEAMAHQAMAHAEAOIABAFQACALgGAKIgBABQgFAIgKAFIgFABIgKABQgIAAgIgEgAFbS5IAAghIAgAAIAAAhgAolxpIE4jeIHfGFQkyBLjvDvIgmAngAq53aIgshuIgyh9Igag/IgOgkIG3FkIjrCag");
	this.shape_296.setTransform(430.3,306.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFF00").s().p("Ab+YmQgMgIACgaQACgMgBgHIgBgGQgHgqAMgkIAMgoQAKgVAJApQAJAqALAXQALAXgCACQgBACAFAlQADATgBAIQgCAJgGgCQgMgEgCADQgCAEACAIQABAHggAHQgHgegBgBgAaQVPIgFgWQgFgMgLgWIABAAIAEAAIAAAAIACAAQANABAZAMIABABIACABIABAAIAAAAIABABIABABIADABIABAAIgBAAIgDgBIgBgBIgBgBIAAAAIgBAAIgCgBIgBgBQgZgMgNgBIgCAAIAAAAIgEAAIgBAAIgCgDQgIgQBBAlIAMAHIABABQhfhZgGgbIAAgCQADgbA8AIQACAJABAKQAAATAEAJQADAIgJAHQgJAGAGAHQAGAIABAIIACAMQADAKAeABIAAAAIgBAJIAAACIAAACIgBAFIACgSIgCASIAAAFIAAAAIgBAEQgEAggHAcQgdgRgGgRgAa/UsIAAAAgAaZSoIAAAAgAaCSEIAPAVQAFAHADAIgAZ+SCQhJgsgDgGQgDgGAIgaIAMgqQAFgQAGgNQAHgMAfgjQAbgmAHgiIAZAAQgMAxgrBEQgxBMA5BPIACACgA7p2YIgPgIQgIgFgFgEQgHgIgFgTQgGgVgEgHIgCgEIgBgCIgBgBIgDgEIgIgMQgIgPgGgTIgBgDIAAgIQgCgQACgQQALAFAGAOIAKAWQAGAJALAIQAHAFAQAIIAsBuIgFAAQgNAAgNgJg");
	this.shape_297.setTransform(534.4,298.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAXlgkkQBAgSAYAZQAQAQAHAlQAIAlANANQAMAOAlACQAkADABAgQACAgCbBNQD+B+hggDQhfgDAMgXQjEgPgzg4Qgyg4gHgXQgHgWgdgGQgdgGgCgCQgUglAHgnQACgKAAgFQABgJgDgHQgHgQgbgDQgMAAgHAAQgBAAAAAAQgNAAgVAEIAAAAIAjgEAZ+6/QAKgPAqAPQBLhzgrhAQgqg/grgpQgrgogIgJQgIgJgCgFQgGgLgCgNQgFgaABgkAdCgTIgqDzIjTAAEAiwADgQgGAigbAmQggAjgGAMQgHANgEAQQgFAQgIAaQgIAaADAGQADAGBJAsIAEACQgBgBgBgBEAjJADgIgZAAImYAAEAjbADgIgSAAQgMAxgrBEQgwBMA4BPEAlzARDQACADADAEQAUAbASAAQAqAmBCh5QBCh5ACh2QACh2hKhDQhLhDAOgaQANgZg0gyQg0gygPg1QgOg1gegdQgRgQg3gTQAAAAAAAAQgIgDgIgDQAOAMAMAOQAtA3AABWQAAAIAGAfQAGAfAeBTQAYA+gNAHQABAAAAAAQBFATAZAZQAZAZAaBWQAbBVhFB0Qg0AJgCBAQgBAugVADQgJABgLgGQgpgUApAJQAIACAGABQgBADAHAKgAdCgTIGrDzIgSAAEAizAIWQgZhVAdgvQADgEADgFQAdByACA4QACAtgDAoQAAAAABAAQgBAEAAAFQAAABgBABIAAACIgBAFIAAAFQhfhZgFgbQAAgBAAgBQADgbA7AIIgXgkQAGAKAJALQAFAHADAIQADAJAAAKQABATADAJQADAIgJAHQgJAGAGAHQAGAIABAIQABAIACAEQACAKAeABQgBAJgBAJEAicAHyIgCgCEAiYAHwQhBglgCAkQgCAlAKCpQAJCpgMAVQgNAWgIAWQgJAXAGAPQAGAQgPAGQgOAGA2gDQAHgJA7gOQA7gOgmg+IgOgWQAUAegMhOQgMhSgOgxQgNgyAKgDQAMAWAEAMQAFAVAAABQAHARAdARQgBADgBADQgFAWgEBFQgEBEAKAmQALAmgHAmQgHAlgjAyQgjAxATgWQASgWANAKQANAJAaADQALgGAnhJQAnhKgggtQggguAdgVQABAHgCAMQgCAaAMAIQACABAHAeQAfgHgBgHQgBgIACgEQACgDALAEQAGACACgJQABgIgCgTQgGglACgCQABgCgLgXQgLgXgJgqQgJgpgJAVQAPgvAFgnQABgFAjgjEAjMAKXQhBglAJAQQABACAAABQAPgDAoAVIAMAHQAAAAABABEAjZAKfQAAACgBACQgDAggHAcEAkOANZQgHgqAMgkQABgEAMgkEAlXAJlQgDACgIgEQgfgQAqASgEAkOANZQABACAAAEQgGgPAEAGQABABAAACgEAioANqIACADEAltAQ2QAYAFgPgFQgIgDgBADgEAi9AGJQA1hYADg3ARL/0IGck1IgCAFIgWA7EAXPgjnQgEAKAGASQAFASAHANQAFAMABAIQADAUgMAbQgGAPgPAfQgGAWApAeQAqAdAUIHQAYhTAnATQAUhBADg/QAAgBgBgCEAYBghSQAAgDABgCQACgMADgKQAGgPADgHQAFgNAAgKQAAgMgMgbQgLgYgMgUIgjAGIihGwIhQDWIjbJLQDDEfAAFwQAAAEAAAEIG8D+Ig9FhIogAAQiDCng4A5IBvICIAnCzIBEEmIAVBYIgKgIIgegaQgPAcguAsQguAtAIAvQAIAvgEB6QgDB5AAA1QABA1g2DFQgWBRgBAoQAAA7ArgYQgFgFAFgFQAAAFAAAFQABgHABgGQAIgGAJADQAEABAMAHQAKAFAGAAQAPAAAIgSQACgFAFgJQAFgIAHgKQAOgUA+g+QA9g+gLhDQgMhDAEgpQAEgqgVgyQgUgzANg9QAQhEAHgjQAAgBABgCQAEgVACgUQABAUAiAmQAiAmBGCXQBFCXhhCgQg0BWgTAsQgSAnAHAIQAOAOA7g9QAGgGAHgHQBwh4gSj7QgSj7jBi/QgHgOgIgNQAAgBAAAAQAAAAgBAAQgWgogbgmAOS9qIC5iKIDjC9EAYBghSQACAHAEAIQAIARABADQAGANADANQgagxABgCQAAgFABgFgEAYZggVQAEAQABAQQAAARACAIQABADAPAHQAIAEASBJQgMhLgRgfQgLgVgJgRgAZ96xQAAgGAAgFQAAgCABgBQgBAHAAAHQgBAFgBAGQgCgOAEgIQgBhpgyhgQBCAjgOCjAZ86jQABgHAAgHEgU2glwQgGAUgNAFQgNAGgHABQgHACgDAdQgRAXgDALQgDALggAqQggApgcBvQBBCag4DQQgeBtgLAsEgVUgjoQgFAGgJAGQgGAEgGAEQgHAEgEADQgIAEgNAsIgCARIAAAEQACATAHAMQADAFAEAEQAOAMAFANQAFAMACApQADAqATAXEgVUgjoQgDAMACASQACALAFAYQABARgEAeQAAAEgBAEQAAAEAAAEQAAAMADAQQAEAcABAJQADAggJA2QALAegIBlQgJBlAYAvQAwgLABgQQACgRAOAmQgUiAgKgUQgKgVAAgbQAAgbACgFQAFgNABgCQAHgdADgqQAAgFAPgWQgJgxgGgnQgBgBAAgBQAAgCgBgDQgDgTgCgKQgCgOgCgMQAGATAIAPIAIAMQACACABACQABABAAAAQABABAAABQABACABACQAEAHAHAVQAFATAHAIQAEAEAJAFQAEADAKAFQARALAOgCIBHCwIDriaIm4llIAPAlQgBASgKAKQgQARgBABQgFAHgCASQgCARgEAHQgBABAAAAQgBACgCABgEgVugjUQABANgCAbQAAADADAMQACAHAcACIgDAcIgBAQEgUnglLIAZA/IAyB9IAsBuEgUfgjWQALAFAHAOQAEAHAGAPQAFAJAMAIQAGAFAQAIEgUegirQAAgBAAgCQgBgEAAgEQgCgQACgQQAEgbANgbEgVQgjsQgDACgBACAyI6jQgCgHgBgGA0j+kQAUAVA0AzQAyAxAeB7QgEgfAmAFQAtAGgUgPQgUgPg8hlQg8hkgohqAxp9xIBNDAIE5jdIibh9AkD4JQAIgCAIgCQA2gMA4gIQBSgKBVAAQDIAACxA6QEBBUDODOQBYBYBBBhAqnyuQAAAWgQAPQgPAQgWAAQgWAAgQgQQgPgPAAgWQAAgWAPgQQAQgPAWAAQAWAAAPAPQAQAQAAAWgAtLyoQASgUAUgTQDvjvEzhLIngmFA3/4nQgFANAIgdQABgEABgEA3843QgDgFACgCQACgBABAAEgWHghpQBCD8h8F5Qg0gzgHgQAsOiiQAAAbgTATQgTATgaAAQgbAAgTgTQgTgTAAgbQAAgaATgTQATgTAbAAQAaAAATATQATATAAAagAw8ASQhFixAAjoQAAiRAeiFQBCkkDWjnAgZAqIAZAAIAAAaIgZAAgAjKFAQAAALgIAIQgHAHgLAAQgJAAgGgEQgCgBgCgCQgHgIAAgLQAAgLAHgHQACgCACgBQAGgFAJAAQALAAAHAIQAIAHAAALgADCMSQgUADgVACIBzj+IiqiFIA1gyIgPgoIAAgRIiAjEIAAgRIAdk2IhpFoIA8CRIhkBVIARCeIAAAPIiYAAIBcCOIAAAKIAcBhQgFAAgFgBQg4gHg2gNQgkgIgjgKAAHDbQgBAAgBAAQgNAAgKgKQgJgKgBgOQAAgOAKgKQAAgBABAAQAKgJAMAAQAIAAAHADQAEACAFAFQAFAFADAFQACAFAAAJQAAANgJAKQAAAAgBAAQgJAKgMABgAAIDfIAGBMAPZrsQAAAjgGAYQgHAZgJAAQgKAAgGgZQgHgYAAgjQAAgiAHgZQAGgYAKAAQAJAAAHAYQAGAZAAAigACvzyQAAAQgLAMQgMALgQAAQgQAAgLgLQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQALALAAAQgACJhNQAAAKgHAHQgHAHgKAAQgKAAgHgHQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKgANFhGQAAAMgJAJQgJAJgMAAQgNAAgJgJQgIgJAAgMQAAgNAIgJQAJgIANAAQAMAAAJAIQAJAJAAANgATGl/QgDGWieDJAwc6xIDRIJAOS9qIFMEJAGb3xIH3l5EglFgFNQghAAgDAZQgBADAAADQgBgDgRAOQgKAIgKAXQgfAIgHAgQgEATgCAmQgCAmABAbQAAAbgKDXQgKDZg/ApQg2AjgGgIQAAAPAIAUQARgZAnAxQBIguAjiHQAiiHgwiGQAwhngCg/QgChAAjgkIAAgBQAAAAABAAQACgCACgDQACAGADAHQAIAaAAASQgBARgEAfQgDAfAGAVQAHAUAIAdQAIAcgSAvQAqBBgBBAQAAA/gbCUQgbCUAACqQgEARgCALQACAhBFgKQAFieAHhEQAHhFAJgaQAJgagFglQgGgkAihYQAihYgYglQgXglgLhFQgLhEgRghQgSggAXg0QADgIACgKQABABAAABQAEAWAQAWQAKANAWAYQASAWAGATQAIAWAFAnQAGAmgKAfQgLAeAhAaQAhAZARAIQASAHgGAaQgFAaB9AzQgeg2gIgnQgLg2gSgfQgRgggbgbQgbgcgHgRQgHgPgRgzQgOgpgLgYQgjhKg4gaQAAgBgBgBQgJgfgSgxQgBgDgBgCIAPAAIBtAXIDdAwIESBVIJ3DDEglqgEuQgBASAHAVQADALAGASEglFgFNIAnAAEgkFgC6QADgNAHgdQgNAZADARgEgj7gDkQgCgIgDgKEgkPgFNQAwAxA5A6QAvAwATAcQARAZAzA/QAJBMA4BkQAAABAdASQAdASAIAJQAJAJAXCSQAYCRANA3QA1grAVgTQAAgEAAgEQgDhQAKgSQAKgRgegsQgegsAFgsQAFgsADgWQADgWgYgsQgYgshOgzQhNg0gEgTQgIgggNgVQgQgdg+gtQg6gpgPgjA+4mzIgNCtA+4mzImNBmA/iEMQgBgBAAAAQABAAAAAAQAAABAAAAQgvA8gCBwQABABABAAQAEABALgBQAPgBAegFQA3gIAEgTQAEgSg0hSQgOgVgKgTgA7Dn2Ij1BDA7Dn2IAQFFA8OHFQADgCACgCQAVgRgMAuQgKAsgEhFgEgpMAGtQgCgBABgDQADgTgCAQQAAAEAAADgEgliALuQAAgBAEgQAG1GlQAAARgMAMQgMAMgRAAQgRAAgMgMQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARgABHFQIAdAIIgHAcIgdgHgABNJmQgBAAgBgBQgKgKAAgOQAAgOAKgKQAGgGAHgCQAFgCAGAAQABAAAAAAQAGAAAFACQAHACAFAGQAEADACAFQAEAHAAAJQAAAJgEAHQgCAEgEAEQgJAJgOABQAAAAgBAAQgNAAgJgJIg0A9ABaMBIAhAAIAAAhIghAAgAFbRGIAkAJIgJAjIgkgJgAEkS6QAAAAACgBQANgDAMAHQAMAHAEANQABADAAACQACALgGAKQAAABgBAAQgFAJgKAEQgCABgDABQgOAEgMgHQgHgFgEgHQgDgEgBgFQgEgNAGgMQABAAAAgBQAGgLANgEIgchLAKFRrICEBlID3hbADCMSIHDFZIFUipASHaPQABgNABgNQACg9gUgsQgGgOgJgNARPXrQgUAtgEBMIAAABQgBAUAAAVQABB8gHAdQgGAdgEAaQgDASgLAdQgDgPAAguQAAgugFhGQgFhGAjgxAQYffQANgPgNhDQALAQAJAhQAJAggdABQAHADAJACQgBAYgCAVQgGA5gNAeQgSAogNAVQgMAVgjBMQgGAMgEAKQBFiEAYg4QATgvgFggQgBgHgCgGQgMgjACgCgAQxXRIkokBANqHAQmXEwkRAiAieJXIAhAAIAAAgIghAAgApFG9QAAAQgLALQgMAMgQAAQgQAAgLgMQgMgLAAgQQAAgQAMgMQALgLAQAAQAQAAAMALQALAMAAAQgAmQT7QgBAAgBABQgLAIgOgCQgOgCgIgMQgIgLACgOQAAAAAAgBQADgNALgIQALgIAOACQAOACAIAMQAIAKgCAOQAAAAAAABQgCANgKAIIA0A8AgoN/IAzg9AgoN/IABAAQAAABABAAQAKAKAAAOQAAAOgKAKQgDADgEACQgHAFgKAAQgBAAAAAAQgKAAgHgFQgDgCgDgDQgKgKAAgOQAAgOAKgKQAAAAABgBQAJgIANgBQAAAAABAAQANAAAJAJgAj7RGIAjAJIgKAiIgigJgAq9QIIGDkdQkShSjZjZQgjgjgfgkIh0HHIg2DWIClBygAx0WIIBAg+IDIjCAx0WIQgIACgIADQgHACgGACQg7AWgXAoQgUAjgJAwQgBAHgBAGQgIA4gFAlQgBATAAAYEgTRAkbQAUgRAXgBQAXAAAWAQQgWhLgmguQApgwgCgNQgDgMAhg0QAhg1gigzQgjgzATgeQASgdAlgRQAlgRgNiCQgNiCgriDIAAAAQAAgJgBgJQAEAIADAHQAAABAAAAIAAABQCYCMBGCmQBGCnhgCOQhgCOAaAfQAaAegUASQgTASgEAZQgEAZgfgUQgJARAPAXQAKAPAVARQAqgNAggTQA1geAbgtQAshJAcjGQAcjFhmifQhmiehpiRAyMWdQgBACgBADA0PcgIgBAvQgEAagJAqQgKAqAAAxQAAAwgSB7QgNBggZBGQgIAVgIATQADgEAEgDEgTlAgFQAAAGgCAMQgCAXAEBXQADBOARBIAyEWNIgFAQIAVgVAh6XEIghAJIgJggIAhgJgAwRQWIhzF3AvbNAIEeDIEgP1AlfQg3AGASgFQATgFASAEgEgTNAksQgDgKgBgHEAOwAlVQACgLACgLQADgRADgSQgHATgDAQQgCANAAAMQABgBABgCgAxjqdIpgCnAtnF5QiIifhNjIAaCiBIDABu");
	this.shape_298.setTransform(480.5,364.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FF66FF").s().p("AgUgLIAggJIAJAgIggAJg");
	this.shape_299.setTransform(466.1,510.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#CCCC00").s().p("AgVAMIAJghIAiAJIgKAhg");
	this.shape_300.setTransform(456.6,476);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#CC66CC").s().p("AAAAiQgKgBgHgEIgGgFQgKgKAAgOQAAgNAKgKIABgBQAJgJANAAIAAAAQANAAAKAIIAAABIABABQAKAKAAANQAAAOgKAKIgHAFQgHAFgKAAIAAAAg");
	this.shape_301.setTransform(474.2,456.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#CC9933").s().p("AghA4QgEgCAAgFIgCgIIgEgIQgDgFAEgBQgDgCgDgDQgDgGACgCQACgCAEABIAHACIACgGQACgDAFgDQACgEAIgDQALgFAFAAQAIgBAHAEIACACQABgFAFgJIADgEIAGAAQADACABAEIAAAHQADgCADAAQADADABACQACAEgGADQAFADABADIABABIAAAGIgGAAIgGgCIgGgCIgBAAIAAABQAEAJgEAJQgEAHgLAFIgCABIgLAFQgHADgFAAQgEAAgEgCIgEACIgEAFIgDACIgDgBgAAxARQADADgCADIgBAAgAAZg3QABAAABAAQAAAAABAAQAAgBABABQAAAAABAAIABAAg");
	this.shape_302.setTransform(475.6,428.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#660000").s().p("AhIIEQgBgBgBgEIAAgMIgBgBIAAAAQgIAFgIgCQgJgDgIgLIgJgKQgFgHgCgFQgCgEABgEIgEgDIgGgDQgDgDABgDQABgDAEgBIAGgEIAGgEQADgEADAEIACgHQAEgEACACQADACABAEIABAHIAGABQADABAEAEQAFACAGAGQAHAKADAFQAFAKgDAIQAEAAAKAEIAFACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAAEgEACIgGABQACADAAACQAAAEgCABQgDACgGgFQgBAFgBACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBgABhmyQgCgBgDgFQgEAFgEgCIgEgEQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgBIgFgBIgCgBQgFgBgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIADgCIAFgCQAFgCADAAQgHgHAAgJQABgFADgIQACgGAFgCQACgEACgBIAFgBIgCgHIAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQACgCAFADIABAAIACACIADAEQAAgDAGADIAIAEIAIACQAEABADADQACADgCADIgEACIgDADQADAEAAADQABAFgDAGIgEAJQgDAKgHADQgGACgIgDIgDgBIgBAAIAAABIACAFIAEAGQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABIgCAAQgCAAgEgCg");
	this.shape_303.setTransform(470.7,448.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#CC0000").s().p("AgVANIAJgiIAiAJIgJAig");
	this.shape_304.setTransform(516.6,476);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#003399").s().p("AA4DqIgDgGIgEgEIgCgCIAAABQgEAIgKACQgJABgPgGIgOgEQgJgEgFgEQgEgCgCgEIgFgBIgHAAQgFgBgBgCQgBgFADgCIAEgHIADgGQABgFAFACIgCgDIAAgEQABgFAEAAQADAAADADIAFAGIAAAAIACAAIAEgBQAEgBAGACIAGAAIAJACQANAFAGADQAKAHACAJQAEgDAMgBIAGAAQADABABACQADACgDAEIgFAFQAEABACACQACADgCACQgBADgJgBQACAFAAADQgBADgEAAQgDgBgDgCgAgpipQgNAAgKgIIgBgCQgKgKAAgOQAAgOAKgJQAFgGAHgCQAFgCAHAAIABAAQAFAAAFACQAHACAGAGIAGAIQAEAHAAAIQAAAKgEAGIgGAIQgKAKgNAAIgBAAg");
	this.shape_305.setTransform(494.7,443.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FF0066").s().p("AgCAXIgNgBQgJgBgEgCQgEgCgDgDIgEABIgGACQgFAAgBgDQgCgDACgEIACgGIABgGQAAgGAEABQgCgCgBgEQAAgFADgBQADgBADADIAGAEIAFgDQADgCAGAAQAFgCAIABQALABAGACQAKADAEAIQACgDAKgFIAFgBQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAQACADgBAEIgDAFQADAAACACQACACAAACQgBADgHABQADAEAAADQAAAEgEABQgCAAgDgCIgEgEIgFgEIgBgBIAAABQgCAJgIAEQgFADgIAAIgIgBg");
	this.shape_306.setTransform(484.8,412.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#6633CC").s().p("Aj5HZQgOgDgIgLQgIgLACgOIAAgBQADgOALgHQALgJAOADQAOACAIALQAIALgCANIAAABQgCANgKAIIgCABQgIAHgLAAIgGAAgADym8IAHgcIAdAHIgHAdg");
	this.shape_307.setTransform(462.7,445.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FF66CC").s().p("AACAiIgCAAQgNAAgKgJQgJgLgBgOQAAgNAKgKIABgBQAKgJAMAAQAIAAAHADIAJAHIAIAKQACAFAAAIQAAANgJAKIgBABQgJAJgMABg");
	this.shape_308.setTransform(481,382.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FF9933").s().p("AMQcyQgHgEgEgHIgEgKQgEgNAGgLIABgBQAGgMANgEIACAAQANgEAMAHQAMAHAEAOIABAFQACALgGAKIgBABQgFAIgKAFIgFABIgKABQgIAAgIgEgAFUSyIAAghIAhAAIAAAhgAopx2IE5jeIHfGFQkyBLjvDvIgmAngAq83nIgthuIgyh9IgZg/IgPgkIG4FkIjrCag");
	this.shape_309.setTransform(430.6,307.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FF6633").s().p("ADXaFQAPgGgGgPQgGgQAIgWQAJgXAMgVQANgVgJipQgKipACglQACgkBBAlIAEACIgCgDQg5hOAxhMQArhEAMgxIASAAQAOAMAMAOQgDA3g1BYIgGAJQgdAvAZBVQgDgIgFgHIgPgVIgCgDIACADIAXAkQg8gIgDAbIAAACQAGAaBfBZIgBAAIgMgHQhBglAJAQIABADQgLADAOAxQAOAyAMBSQAMBOgUgfIAOAXQAmA+g7AOQg7AOgIAJIgbABQgWAAAKgFgAFIYPIgCgCgAFRS5gACYz4QhggDANgXQjEgPgyg4Qgyg4gHgXQgHgWgdgGQgdgGgCgCQgVglAIgnIACgPQABgJgDgHQgHgQgcgDIgSAAIgBAAQgNAAgVAEIAWg7QBAgSAYAZQAQAQAHAlQAIAlAMANQANANAlADQAkACABAhQACAgCaBNQD3B7hVAAIgEAAg");
	this.shape_310.setTransform(669.6,296.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_311.setTransform(480.5,364.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#CCCC00").s().p("AgVANIAJgiIAiAJIgKAig");
	this.shape_312.setTransform(457.5,476.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#CC66CC").s().p("AAAAiQgKgBgHgEIgGgFQgFgFgCgGQgCgEAAgFIgBgEQAAgNAKgKIABgBQAJgJANAAIAAAAQANAAAKAIIAAABIABABQAEAEADAGQADAHAAAGIAAAEQgCALgIAJIgHAFQgHAFgKAAIAAAAg");
	this.shape_313.setTransform(474.2,457.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#CC9933").s().p("AgkA7QgEgCAAgFIgCgIIgEgIQgDgFAEgBQgDgCgDgDQgDgGACgCQACgCAEABIAHACIACgGQACgDAFgDQACgFAIgCQALgFAFAAQAIgBAHAEIACACQABgFAFgJIADgEIAGAAQADACABAEIAAAHQADgCADAAQADADABACQACADgGAEQAFADABADIABABIAAAGIgGAAIgGgCIgGgCIgBAAIAAABQAEAJgEAJQgEAHgLAFIgCABIgKAFQgIADgFAAQgEAAgEgCIgEACIgEAFIgDACIgDgBgAA0AOQADADgCADIgBAAgAAcg6QABAAABAAQAAAAABAAQAAgBABABQAAAAABAAIABAAg");
	this.shape_314.setTransform(475.3,428.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#660000").s().p("AhIIEQgBgBgBgEIAAgMIgBgBIAAAAQgIAFgIgCQgJgDgIgLIgJgKQgFgHgCgFQgCgEABgEIgEgDIgGgDQgDgDABgDQABgDAEgBIAGgEIAGgEQADgEADAEIACgHQAEgEACACQADACABAEIABAHIAGABQADABAEAEQAFACAGAGQAHAKADAFQAFAKgDAIQAEAAAKAEIAFACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAAEgEACIgGABQACADAAACQAAAEgCABQgDACgGgFQgBAFgBACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBgABhmyIgBgBQgCgBgCgEQgEAFgEgCIgEgEQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgBIgFgBIgCgBQgFgBgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIADgCIAFgCQAFgCADAAQgHgHAAgJQABgFADgIQACgGAFgCQACgEACgBIAFgBIgBgEIgBgDIAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQACgCAFADIABAAIACACIADAEQABgDAFADIAIAEIAIACQAEABADADQACADgCADIgEACIgDADQADAEAAADQABAFgDAGIgEAJQgDAKgHADIAAABQgHABgHgDIgDgBIgBAAIAAABIACAFIAEAGIAAACIAAADIgCAAQgCAAgEgCg");
	this.shape_315.setTransform(470.7,448.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#003399").s().p("AA1DqIgDgFIgEgGIgCgBIAAAAQgEAJgKACQgJABgPgFIgOgGQgJgDgFgDQgEgEgCgDIgFgBIgHAAQgFgBgBgDQgBgDADgDIAEgGIADgHQABgGAFADIgCgDQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgFAEABQADgBADADIAFAGIAAABIACgBIAEgBQAEgBAHACIAFAAIAJADQANAEAGAEQAKAGACAIQAEgCAMgBIAGAAQADABABACQADACgDAEIgFAFQAEABACACQACAEgCABQgBADgJgBQACAFAAADQgBADgEABQgDgBgDgDgAgmioQgNAAgKgJIgBgBQgKgLAAgOQAAgNAKgLQAFgFAHgDQAFgCAHAAIABAAQAFAAAFACQAHADAGAFIAGAIQAEAHAAAJQAAAJgEAIIgGAIQgKAJgNABIgBAAg");
	this.shape_316.setTransform(494.4,444.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FF0066").s().p("AgCAXIgNgBQgJgBgEgCQgEgCgDgDIgEABIgGACQgFAAgBgDQgCgDACgEIACgGIABgGQAAgGAEABQgCgCgBgEQAAgFADgBQADgBADADIAGAEIAFgDQADgCAGAAQAFgCAIABQALABAGACQAKADAEAIQACgDAKgFIAFgBIAEABIABAAQACADgBAEIgCAEIgBABIABAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQACACAAACQgBADgFABIgCAAIACADIABAEIgBAEIgDABQgCAAgDgCIgEgEIgFgEIgBgBIAAABQgCAJgIAEQgFADgIAAIgIgBg");
	this.shape_317.setTransform(485.7,412.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#6633CC").s().p("Aj5HcQgOgDgIgLQgIgLACgOIAAgBQADgOALgHQALgJAOADQAOACAIALQAIALgCANIAAABQgCANgKAIIgCABQgIAHgLAAIgGAAgADym/IAHgcIAdAHIgHAdg");
	this.shape_318.setTransform(462.7,445.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#99CCFF").s().p("ADqOkIiqiFIA1gyIgPgoIAAgRIh/jEIAAgRIAck3IhpFpIA8CRIhkBVIARCeIAAAPIiYAAIBdCOIAAAKIAbBhIgEAAIgFgBIghgFQgogGgmgJQgkgIgjgKQkRhSjajZQgigjggglQiIiehNjIQhFiyAAjoQAAiQAeiFQBDkkDVjnIAmgnQDvjvEzhLIAQgEQA2gMA5gIQBRgKBVAAQDJAACwA5QEBBUDODPQBYBYBCBhQDCEfAAFvIAAAIQgCGWifDKQiCCng5A5QmWEwkSAiIgpAEgAqpMsQgMAMAAAQQAAAQAMALQAMAMAPAAQARAAALgMQAMgLAAgQQAAgQgMgMQgLgLgRAAQgPAAgMALgAFNMTQgMAMABARQgBARAMAMQAMAMARAAQASAAAMgMQAMgMgBgRQABgRgMgMQgMgMgSAAQgRAAgMAMgAkVK2IgDADQgIAHAAALQAAALAIAIIADADQAGAEAJAAQALAAAHgHQAIgIAAgLQAAgLgIgHQgHgIgLAAQgJAAgGAFgALwEuQgJAJAAANQAAAMAJAJQAIAJANAAQAMAAAJgJQAJgJAAgMQAAgNgJgJQgJgIgMAAQgNAAgIAIgAA+EsQgHAHAAAKQAAAKAHAHQAHAHAKAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgHgKAAQgKAAgHAHgAueC7QgSATgBAaQABAbASATQAUATAaAAQAbAAASgTQAUgTgBgbQABgagUgTQgSgTgbAAQgaAAgUATgAORmcQgGAZAAAiQAAAjAGAYQAHAZAJAAQAKAAAGgZQAGgYABgjQgBgigGgZQgGgYgKAAQgJAAgHAYgAsjtJQgQAQAAAWQAAAWAQAPQAPAQAWAAQAWAAAPgQQAQgPAAgWQAAgWgQgQQgPgPgWAAQgWAAgPAPgABLuCQgMALAAAQQAAAQAMAMQALALARAAQAPAAAMgLQAMgMAAgQQAAgQgMgLQgMgMgPAAQgRAAgLAMg");
	this.shape_319.setTransform(483.9,324.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FF9933").s().p("AMNc1QgHgEgEgHIgEgKQgEgNAGgLIABgBQAGgMANgEIACAAQANgEAMAHQAMAHAEAOIABAFQACALgGAKIgBABQgFAIgKAFIgFABIgKABQgIAAgIgEgAFXS4IAAghIAhAAIAAAhgAomx5IE5jeIHfGFQkyBLjvDvIgmAngAq53qIgthuIgyh9IgZg/IgPgkIG4FkIjrCag");
	this.shape_320.setTransform(430.3,307.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_321.setTransform(480.5,364.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#CCCC00").s().p("AgVAMIAKghIAhAJIgJAhg");
	this.shape_322.setTransform(457.8,477.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#CC66CC").s().p("AgNAfIgHgEQgFgFgEgFQgCgEgBgFIgBgEQgBgNAJgLIAAgBQAIgJANgCIABgBQAMgBAKAHIABABIABABQAFAEADAFQAEAGABAHIAAADQAAAMgHAJIgGAGQgHAGgKABIgBAAIgCAAQgHAAgHgDg");
	this.shape_323.setTransform(473.9,457.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#CC9933").s().p("AglBEQgDgCgBgFIgCgIIgDgIQgEgFAFgBIgDgCIgEgDQgDgGADgCIABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIACAAIAHACIACgGQABgDAEgCIABgBIACgCQADgDAGgDQAKgFAGAAQAHgBAHAEIADACQAAgFAGgIIADgEIAGAAQACACABAEIABAGQADgCACAAQAEADABACQABAEgGAEQAFADACADIAAABIAAAGIgGAAIgFgCIgGgCIgCAAIAAABQAFAJgFAJQgDAHgMAFIgBABIgLAFQgIADgFAAQgEAAgEgCIgDACIgEAFIgEACIgDgBgAA1AEQACADgCADIgBAAgAAihDQAAAAABAAQABAAAAAAQABgBAAABQABAAAAAAIACAAg");
	this.shape_324.setTransform(474.7,429.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#660000").s().p("AhFIKQgCgCAAgEIgBgLIAAgCIgBAAQgHAGgJgDQgIgCgJgMIgJgKQgFgHgCgFQgBgDAAgFIgDgCIgGgDQgDgDABgDQAAgEAFgBIAGgDIAFgFQAEgDACADIADgHQADgDADACQACABABAEIABAHIAGACQADABAFAEQAFABAFAHQAIAJACAGQAFAJgDAIQAEAAALAEIAEACQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAADgEACIgGACQADACAAADQgBADgCABQgCADgGgFQgBAFgCABQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCgBgABfm3IgBgBQgDgCgCgDQgEAEgEgBIgEgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIABgBIgFAAIgDgBQgEgBgCgEQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAgBIADgCIAGgCQAFgCACABQgGgIAAgJQAAgEAEgJQACgGAEgBQACgEADgCIAFgBIgBgEIgBgCIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQACgCAFADIAAABIADACIACADQABgDAFADIAIAEIAIADQAFAAACAEQACACgBADIgFADIgCACQACAEABAEQAAAEgCAGIgEAJQgEALgGADIgBAAQgGACgIgDIgDgCIAAAAIAAACIACAFIADAFIABADIgBACIgCABQgCAAgDgCg");
	this.shape_325.setTransform(470.8,449.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#003399").s().p("AAxDvQgDgCgBgEIgCgFIgDgGIgBgCIAAABQgGAHgKgBQgJgBgOgJIgLgJIgEgCIgIgIQgDgEgBgEIgFgDIgHgBQgEgDgBgDQAAgDAEgCIAGgFIAEgGQAAAAABgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIgBgEIABgEQACgEAEACQAEAAACAEIADAHIAAAAIABAAIAFAAIAAAAQADAAAGAEIAGABIAIAFQAMAIAEAFQAIAJAAAIQAEgBAMACIAGABIADAEIgCAIIgFACIAEADIgCAIIgIgCQAAAFgBACQgBADgDAAIgCAAgAgmirIgBAAQgNgCgIgJIgCgCQgIgLACgOQACgOAMgIQAGgFAHgCQAFgBAHABIABAAQAFABAFADQAGADAFAHQADAEACAEQACAIAAAJQgCAJgFAGIgHAHQgJAHgKAAIgFgBg");
	this.shape_326.setTransform(494.3,445.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#6633CC").s().p("Aj6HhQgOgDgIgLQgJgLACgOIABgBQACgOALgHQALgJAOADQAFAAAEACQAIAEAFAHQAIALgBANIgBABQgCANgKAIIgBABIgGAEQgGADgIAAIgFAAgADznEIAIgcIAdAHIgIAdg");
	this.shape_327.setTransform(462.6,446.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#99CCFF").s().p("ADqOkIiDhnIAAADIgFgEIAFAAIAAgDIgFAAIgigaIA1gyIgPgoIAAgRIh/jEIAAgRIAck3IhpFpIA8CRIhkBVIARCeIAAAPIiYAAIBdCOIAAAKIAbBhIgEAAIgFgBIghgFQgogGgmgJQgkgIgjgKQkRhSjajZQgigjggglQiIiehNjIQhFiyAAjoQAAiQAeiFQBDkkDVjnIAmgnQDvjvEzhLIAQgEQA2gMA5gIQBRgKBVAAQDJAACwA5QEBBUDODPQBYBYBCBhQDCEfAAFvIAAAIQgCGWifDKQiCCng5A5QmWEwkSAiIgpAEgAqpMsQgMAMAAAQQAAAQAMALQAMAMAPAAQARAAALgMQAMgLAAgQQAAgQgMgMQgLgLgRAAQgPAAgMALgAFNMTQgMAMABARQgBARAMAMQAMAMARAAQASAAAMgMQAMgMgBgRQABgRgMgMQgMgMgSAAQgRAAgMAMgAkVK2IgDADQgIAHAAALQAAALAIAIIADADQAGAEAJAAQALAAAHgHQAIgIAAgLQAAgLgIgHQgHgIgLAAQgJAAgGAFgALwEuQgJAJAAANQAAAMAJAJQAIAJANAAQAMAAAJgJQAJgJAAgMQAAgNgJgJQgJgIgMAAQgNAAgIAIgAA+EsQgHAHAAAKQAAAKAHAHQAHAHAKAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgHgKAAQgKAAgHAHgAueC7QgSATgBAaQABAbASATQAUATAaAAQAbAAASgTQAUgTgBgbQABgagUgTQgSgTgbAAQgaAAgUATgAORmcQgGAZAAAiQAAAjAGAYQAHAZAJAAQAKAAAGgZQAGgYABgjQgBgigGgZQgGgYgKAAQgJAAgHAYgAsjtJQgQAQAAAWQAAAWAQAPQAPAQAWAAQAWAAAPgQQAQgPAAgWQAAgWgQgQQgPgPgWAAQgWAAgPAPgABLuCQgMALAAAQQAAAQAMAMQALALARAAQAPAAAMgLQAMgMAAgQQAAgQgMgLQgMgMgPAAQgRAAgLAMg");
	this.shape_328.setTransform(483.9,324.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FF9933").s().p("AMPc7QgIgEgEgHIgEgKQgDgNAGgLIAAgBQAHgMAMgEIACAAQAOgEAMAHQAMAHAEAOIABAFQABALgGAKIAAABQgGAIgJAFIgFABIgKABQgJAAgHgEgAFWS4IAAghIAgAAIAAAhgAonx/IE4jeIHgGFQkzBLjvDvIglAngAq73wIgshuIgyh9IgZg/IgPgkIG4FkIjrCag");
	this.shape_329.setTransform(430.5,308.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]}).to({state:[{t:this.shape_204},{t:this.shape_203},{t:this.shape_177},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_184},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_183},{t:this.shape_194},{t:this.shape_160},{t:this.shape_182},{t:this.shape_193},{t:this.shape_181},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_180},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_221},{t:this.shape_220},{t:this.shape_177},{t:this.shape_219},{t:this.shape_201},{t:this.shape_218},{t:this.shape_217},{t:this.shape_184},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_183},{t:this.shape_178},{t:this.shape_160},{t:this.shape_182},{t:this.shape_212},{t:this.shape_181},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_180},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_223},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_222},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_204},{t:this.shape_203},{t:this.shape_177},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_184},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_183},{t:this.shape_178},{t:this.shape_160},{t:this.shape_182},{t:this.shape_225},{t:this.shape_181},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_180},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_224},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_221},{t:this.shape_220},{t:this.shape_177},{t:this.shape_230},{t:this.shape_201},{t:this.shape_218},{t:this.shape_217},{t:this.shape_184},{t:this.shape_216},{t:this.shape_229},{t:this.shape_214},{t:this.shape_213},{t:this.shape_183},{t:this.shape_178},{t:this.shape_160},{t:this.shape_182},{t:this.shape_228},{t:this.shape_181},{t:this.shape_211},{t:this.shape_210},{t:this.shape_227},{t:this.shape_180},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_226},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_221},{t:this.shape_217},{t:this.shape_220},{t:this.shape_177},{t:this.shape_219},{t:this.shape_201},{t:this.shape_234},{t:this.shape_184},{t:this.shape_216},{t:this.shape_233},{t:this.shape_214},{t:this.shape_213},{t:this.shape_183},{t:this.shape_178},{t:this.shape_160},{t:this.shape_182},{t:this.shape_212},{t:this.shape_181},{t:this.shape_232},{t:this.shape_210},{t:this.shape_227},{t:this.shape_180},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_231},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_177},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_184},{t:this.shape_245},{t:this.shape_244},{t:this.shape_213},{t:this.shape_243},{t:this.shape_183},{t:this.shape_178},{t:this.shape_160},{t:this.shape_182},{t:this.shape_242},{t:this.shape_181},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_180},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_177},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_184},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_183},{t:this.shape_178},{t:this.shape_160},{t:this.shape_182},{t:this.shape_257},{t:this.shape_181},{t:this.shape_241},{t:this.shape_240},{t:this.shape_256},{t:this.shape_180},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_280},{t:this.shape_250},{t:this.shape_249},{t:this.shape_177},{t:this.shape_248},{t:this.shape_279},{t:this.shape_278},{t:this.shape_184},{t:this.shape_245},{t:this.shape_277},{t:this.shape_213},{t:this.shape_243},{t:this.shape_183},{t:this.shape_276},{t:this.shape_275},{t:this.shape_182},{t:this.shape_242},{t:this.shape_181},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_180},{t:this.shape_271},{t:this.shape_237},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_177},{t:this.shape_297},{t:this.shape_248},{t:this.shape_278},{t:this.shape_184},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_213},{t:this.shape_296},{t:this.shape_295},{t:this.shape_275},{t:this.shape_182},{t:this.shape_242},{t:this.shape_181},{t:this.shape_294},{t:this.shape_273},{t:this.shape_272},{t:this.shape_180},{t:this.shape_271},{t:this.shape_237},{t:this.shape_270},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283,p:{x:491.3,y:442.7}},{t:this.shape_282},{t:this.shape_281},{t:this.shape_268},{t:this.text_1},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_310},{t:this.shape_250},{t:this.shape_249},{t:this.shape_177},{t:this.shape_248},{t:this.shape_297},{t:this.shape_278},{t:this.shape_184},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_213},{t:this.shape_309},{t:this.shape_295},{t:this.shape_275},{t:this.shape_182},{t:this.shape_282},{t:this.shape_308},{t:this.shape_242},{t:this.shape_181},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_283,p:{x:491.2,y:443}},{t:this.shape_304,p:{x:516.6,y:476}},{t:this.shape_294},{t:this.shape_273},{t:this.shape_272},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_180},{t:this.shape_271},{t:this.shape_237},{t:this.shape_270},{t:this.shape_299,p:{y:510.9,x:466.1}},{t:this.shape_298},{t:this.shape_268},{t:this.text_1},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_177},{t:this.shape_248},{t:this.shape_297},{t:this.shape_278},{t:this.shape_184},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_213},{t:this.shape_320},{t:this.shape_319},{t:this.shape_275},{t:this.shape_182},{t:this.shape_282},{t:this.shape_308},{t:this.shape_242},{t:this.shape_181},{t:this.shape_318},{t:this.shape_317,p:{y:412.8}},{t:this.shape_316},{t:this.shape_283,p:{x:491.2,y:444.5}},{t:this.shape_304,p:{x:516,y:476.6}},{t:this.shape_294},{t:this.shape_273},{t:this.shape_272},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_180},{t:this.shape_271},{t:this.shape_237},{t:this.shape_270},{t:this.shape_299,p:{y:511.5,x:466.1}},{t:this.shape_311},{t:this.shape_268},{t:this.text_1},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_280},{t:this.shape_250},{t:this.shape_249},{t:this.shape_177},{t:this.shape_248},{t:this.shape_297},{t:this.shape_278},{t:this.shape_184},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_213},{t:this.shape_329},{t:this.shape_328},{t:this.shape_275},{t:this.shape_182},{t:this.shape_282},{t:this.shape_308},{t:this.shape_242},{t:this.shape_181},{t:this.shape_327},{t:this.shape_317,p:{y:413.1}},{t:this.shape_326},{t:this.shape_283,p:{x:491.8,y:445.1}},{t:this.shape_304,p:{x:516.3,y:477.8}},{t:this.shape_294},{t:this.shape_273},{t:this.shape_272},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_180},{t:this.shape_271},{t:this.shape_237},{t:this.shape_270},{t:this.shape_299,p:{y:512.7,x:466.4}},{t:this.shape_321},{t:this.shape_268},{t:this.text_1},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[]},1).wait(25));

	// Label
	this.text_2 = new cjs.Text("", "48px 'Arial-Black'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 70;
	this.text_2.parent = this;
	this.text_2.setTransform(520.2,270.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#FFFFFF").ss(1,1,1).p("AE62IQB6A6CSBHQDZBpgOAxQCPgaBlBwQBlBwBKCjQBbAaBlAQQChAaBqBJQB8BVAhCbQAfCQgPCUQAAABAAABAZrEjQB3g1BnhBQgNh+gQiQQgBAPgzCHQg0CIpxgYQpwgYo2BcQo3BcmIicQmJicjyAlQjzAkBSi/QgzgIgbgnQgaglgBg3QgCg2AVg0QAWg2AnghQA4gvCBg0QCHg3BOBVQARkYCMhlQCMhlCgAIQgIheA8hZQA4hTBcgxQBPgpBIgYQA5gSDThuQgJBnAAgTQAAgsAJgoQAWhfBJhJQBphpCTAAQCTAABoBpQBlBkAECMQAAABAAABAaua0QAGgBAHAAQA8gFAjgJQAygOAdgdQAcgdALgwQAGgfACg7QAFlaggmxQgPi8gllfAXXbDQBvgHBogIAZrEjIBDWRAE418IACgEQAAgDAAgDQgBAFgBAFQgUCphTBTQhoBoiTAAQiTAAhphoQhahbgFj1A9fBNQgNBOgKBnQg1JICULlQAKAwAJAXQAPAmAaAWQAaAXAsAKQAfAHAyACQAOABAQAAQBGADBWABQAbABBDAAQAnAAA1AAIDQgBIEsAAIE5gBIEzAAIEygBQCxgBCTAAQDjgCCbgDQAdAAAagBQCLgDCBgFQCJgFB/gIAD1ILQBDgBBFAAQBNgBBLgDQCegHCRgQQCtgTCcghQBsgXBkgdQCQgrB+g5AiCIHQCwAEDHAAIgrTUAxMGtQAeAGAeAGQB5AXCYARQCIAPCgAKQCfAJC2AEIAaTZA13FUQCQA2CbAjIBMU0A6WDOQCKBOCVA4IBLWOASNG7IBCUVANEHvIBITqAIVIGIgHTYAnXH6IA8TmAr/HhIArUAA6WDOIBwYPA9fBNQBhBHBoA6A8uhpQgdA6gUB8AVdGHIB6U8");
	this.shape_330.setTransform(509,536.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FF0000").s().p("Aj7D8QhahagFj1QAVhfBKhJQBohpCTABQCUgBBoBpQBkBkAECMIAAACIgBAJQgUCphTBTQhoBpiUgBQiTABhohpgAlkAAQAAgrAKgoQgIBWgBAAIgBgDg");
	this.shape_331.setTransform(504.8,395.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFF99").s().p("A02NKIhL2NIBLWNIheAAQhWgBhGgDIhv4OQCJBNCVA4QCRA3CbAiIA7AMQB5AYCZARQCHAOChAKIA7TmIk5AAIgqz+IAqT+IksABIhL00IBLU0IjPAAIhdAAgAngmdQCeAJC3AFQCvAEDHgBICJgBQBNgBBKgDQCegGCSgQQCtgUCbggQBtgXBkgeIB6U8Ih608QCQgrB+g4IBCWPQhnAJhvAHQh/AHiJAGIhD0UIBDUUQiCAFiKADIg4ABIhHzpIBHTpQiaADjjABIAGzXIgGTXIlFABIArzTIgrTTIkyABIgZzXIAZTXIkzABgA5ONEQgygCgfgHQgrgJgbgYQgZgVgPgnQgKgXgKgvQiUrlA2pHQAJhoANhNQBiBGBoA7IBvYOIgegCgAakMcIhC2PQB3g1BnhCQAlFfAOC9QAgGwgFFaQgBA6gHAfQgKAxgdAcQgcAdgzAOQgiAKg9AEIgNABg");
	this.shape_332.setTransform(510,628.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#663333").s().p("Ah2E3Qi3gFiegJQihgKiHgOQiZgRh5gYIg7gMQibgiiRg3QiVg4iJhMQhog7hihGQAVh+Adg5QhSDADyglQDzgkGICcQGICbI3hcQI2hcJxAYQJwAYA0iHQA0iIABgQIAdEPQhnBBh3A1Qh+A4iQArQhkAehtAXQibAgitAUQiSAQieAGQhKADhNABIiJABIgsAAQiuAAicgDg");
	this.shape_333.setTransform(507.9,557.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FF66CC").s().p("AveMMQmJicjyAkQjzAlBSjAQgzgIgbgnQgaglgBg4QgDg2AWgzQAWg3AnghQA4gvCBg0QCHg3BOBWQARkYCMhlQCMhkCgAIQgIhfA8hZQA4hTBcgwQBPgqBIgXQA5gTDThtQgJAnAAAsQAAAUAJhnQAFD1BaBaQBpBpCSAAQCUAABohpQBThTAUipIABgDIAAgHIAAgBQB7A5CSBHQDZBqgOAwQCPgZBlBwQBlBvBKCjQBbAbBlAQQChAZBqBKQB8BUAhCaQAfCQgPCUIAAACQgBAQgzCIQg0CHpxgYQpwgYo2BdQjTAii6AAQk8AAj2hig");
	this.shape_334.setTransform(503.8,475.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2,p:{font:"48px 'Arial-Black'",lineHeight:69.7}}]}).to({state:[{t:this.text_2,p:{font:"75px 'Lot'",lineHeight:77}}]},9).to({state:[{t:this.text_2,p:{font:"75px 'Lot'",lineHeight:77}}]},5).to({state:[{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330}]},10).wait(15));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.parent = this;
	this.next_btn.setTransform(888.9,690);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(14).to({x:890.2},0).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(722.9,432.8,779,692.3);
// library properties:
lib.properties = {
	id: 'A2A3B5CA9E59CA42A19634B7403AFA38',
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
an.compositions['A2A3B5CA9E59CA42A19634B7403AFA38'] = {
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