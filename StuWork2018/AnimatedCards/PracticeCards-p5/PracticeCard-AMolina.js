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


(lib.Flap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AqFP+IKZHZMBD+gutMiIjAAAg");
	this.shape.setTransform(437,149.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqFP+Mg6MgnUMCIjAAAMhD+Autg");
	this.shape_1.setTransform(437,149.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Flap, new cjs.Rectangle(-1,-1,876,301), null);


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
	this.shape_2.graphics.f("#000000").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAuAEQgLATgPAIQgPAIgcAAQgYAAgOgHgAAYgKQgCgOgGgGQgGgGgKAAQgKAAgHAJQgFAGAAALIAuAAIAAAAg");
	this.shape_2.setTransform(46.2,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAgBWIg/hdIAABdIgyAAIAAirIAyAAIA/BeIAAheIAyAAIAACrg");
	this.shape_3.setTransform(28.2,25.5);

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
(lib.PracticeCardAMolina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on the current frame
		
		//this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_10 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(20));

	// scene 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AgCAAIAFAA");
	this.shape.setTransform(906.8,203.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EA6+gYAQAAARgBARQgMDRiXCXQhCBChOAoQg9AfhDAOQg6AMhAAAQjnAAijijQijijAAjnQAAhWAWhNQAahXA3hLQAagkAigiQCjijDnAAQAPAAAOABQDUAJCZCZQCkCkAADngEg9lAPiMAAAgy1MB7GAAAIAAAFIAAAFIAAAFIAALuIAACHMAAAAiDIAACuIADAAEA9hAPiIAAAQIAAAFIAAADIAAKoQAKAMgKAFIAAIhMh7BAAAIgFp1IAAplIAAgYMAh4AAAIAMgBQgWgHgWgQQgZgTgLgUQgLgUAOgCQAPgCAqAZIB2BJIAAgBQAAgIAFgGQgCAAgHgFQgSgNgqghQgXgTgOggQgMgdAAgWQABgXANAFQAPAGAXAqIBCB7QABgBABgBQADgEAEgBQgBgCgDgHQgKgTgTgzQgLgbAFgkQADgeAMgTQAMgUAIALQALAMgCAxIgECKQAEgBAEAAQAGAAAEACQAAgBAAgJQACgWAIg1QAFgdAVgcQATgZAUgLQATgLADAOQACAPgZAqIhJB3QADABACADQABAAAAAAQAAgBACgBQAAAAABAAQABgCAEgDQAQgOArggQAYgRAjgFQAHgBAGgBIAaABQAHABAGACQAPAEABAGQAAABAAAAQABABgBACQgBABgBACQAAABgBABQgLAMgsAKIiIAhIAAAAIAAgBEA59AZ1QgBgCgDgHQgKgTgTgyQgLgcAFgjQADgfAMgTQAMgTAIAKQALANgCAwIgECLQAEgBAEAAQAGAAAEACQAAgCAAgIQACgWAIg1QAFgdAVgdQATgYAUgLQATgLADANQACAQgZApIhJB3QADACACACQABABAAAAEA50AZ9QgCgBgHgFQgSgMgqgiQgXgSgOghQgMgcAAgXQABgWANAEQAPAGAXArIBCB6QABgBABgBQADgDAEgCEA50AZ9QAAgBAAAAIAAABgEA5+AZ1IAAABIgBgBQABAAAAAAgEA6QAZ2QABAAAAAAEA6XAZ7IAAAAIAAAAQAAgBACgBQAAgBABAAQABgCAEgCQAQgPArgfQAYgSAjgFQAHgBAGAAIAaAAQAHACAGABQAPAEABAHQAAAAAAABQABABgBABQgBACgBACQAAABgBAAQgLAMgsALIiIAgQAGAHAAAJQAAACAAACQAAABgBAAIAAAAIABgBQACgBAHgCQAVgFA1gJQAdgFAiALQAdAKARAPQACADACACIAAARQgOAIgvgLIiIggQgBAFgCAEQACABAEAEQAQAPAkAnQAUAWAKAiQAHAegDAWQgEAXgMgHQgOgIgRgtIguiBIgBgDQAAAAACACQgBAAAAABEA5vAaMQgCAAgIAAQgWgCg1gIQgdgFgcgVQgZgSgLgUQgLgUAOgDQAPgCAqAaIB2BIIABAAQAAABgBAAIAAgBIAAAAQAAgIAFgGEA5zAaXQgCACgGAFQgQAOgrAgQgYARgjAFQgfAEgVgGQgWgGAIgLQAJgNAvgLICHghIABAAgEA6XAabIABgBEA6XAabIgBAAQAAAAAAAAgEA56AafQgCgCgCgCQgCgCgBgCQgBAAAAgBQgDgEAAgGEA53AaeIAAAAIAAAAQAAABAAACQAAACgBAGQAAAAgBADIABgHQgBAKgBABQAAABAAABQgBAAAAABIAAAEQgCAFAAACQgBACAAACIgBAEQAAABgBABQgEASgHAXQgIAdgZAaQgVAWgVAIQgVAIgBgNQAAgQAegmIBXhtIgBAHEA6JAaiQgBAAgCAAQgGAAgGgDIgDgBEA6JAaiIAAgBIAAABIAAAAIgPgDEA6eAbNQAAABAAAAIABADQAAABAAAAQACADABAEQAFANAEAKQALAcgEAjQgEAdgTAcQgBACgBACQgIACgDgEQgKgNABgwIAEiLEA6JAaiIAVArIgGgzEA6WAabQgGAGgHABEA53AahQACELACAGQABAHgBALIAgAAIAAhcAWgKbQAAgBACgBQAAAAABAAQABgCAEgDQAQgOArggQAYgRAjgFQAHgBAGgBIAaABQAHABAGACQAPAEABAGQAAABAAAAQABABgBACQgBABgBACQAAABgBABQgLAMgsAKIiIAhIAAAAgAWZKWQAAgBAAgJQACgWAIg1QAFgdAVgcQATgZAUgLQATgLADAOQACAPgZAqIhJB3QADABACADQABAAAAAAAWGKWQgBgCgDgHQgKgTgTgzQgLgbAFgkQADgeAMgTQAMgUAIALQALAMgCAxIgECKIAAABIgBAAQABgBAAAAQAEgBAEAAQAGAAAEACQABAAAAABAV9KdIAAAAIAAAAQAAAAAAAAQABgBABgBQADgEAEgBAV9KdQgCAAgHgFQgSgNgqghQgXgTgOggQgMgdAAgWQABgXAN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EgthAK5IABAAIAAAAQAAABAAACQgBACgBAGQAAAAAAADIAAgHQgBAKAAABQAAABgBABQAAAAAAABIgBAEQgBAFgBACQAAACgBACIgBAEQAAABAAABQgFASgHAXQgIAdgYAaQgVAWgWAIQgVAIAAgNQgBgQAegmIBXhtIgBAHEgtdAK6IgDgBEgtAAKWQAGAHAAAJQAAACgBACEgtOAK9IgBAAIAAgBIABABIANgIIAAAAIABAAEgtPAK9QgBAAgBAAQgHAAgFgDEgtBAK1IAAABQgGAGgHABIAUArQAAABAAAAIACADQAAABAAAAQABADACAEQAFANAEAKQAKAcgEAjQgDAdgTAcQgBACgCACQgHACgEgEQgKgNACgwIADiLIgOgDEgs6ALoIgGgzEgtgAK8QAGD1AAACQABABABAVIABAWIAbAAIAAhcATIX5QgBgBgIgFQgSgMgpgiQgXgSgOghQgNgcABgXQAAgWANAEQAPAGAXArIBDB6QAAgBABgBQAEgDAEgCQgBgCgEgHQgJgTgUgyQgKgcAEgjQAEgfALgTQAMgTAJAKQAKANgBAwIgECLQADgBAFAAQAFAAAFACQgBgCABgIQACgWAIg1QAFgdAVgdQASgYAUgLQAUgLACANQADAQgaApIhJB3ATlXyQAAAAAAAAQADACADACQAAABABAAATIX5QAAgBABAAIAAABgATSXxQAAAAABAAIAAABgATLYaIABAAIAAAAQAAABAAACQgBACgBAGQAAAAAAADIAAgHQgBAKAAABQAAABgBABQAAAAAAABIgBAEQgBAFgBACQAAACgBACIgBAEQAAABAAABQgFASgHAXQgIAdgYAaQgVAWgWAIQgVAIAAgNQgBgQAegmIBXhtIgBAHATPYbQgCgCgDgCQgBgCgCgCQgBACgGAFQgRAOgrAgQgYARgjAFQgeAEgWgGQgWgGAIgLQAJgNAvgLICIghIAAAAIAAABQAAAAAAgBQgDgEAAgGQgCAAgJAAQgVgCg1gIQgdgFgdgVQgZgSgKgUQgLgUANgDQAQgCApAaIB3BIIAAAAQAAgIAEgGATPYbIgDgBATdYeQgBAAgBAAQgHAAgFgDATdYeIAAgBIABABIgBAAIgOgDATEYHIAAAAQAAABAAAAgATsX3QAGAHAAAJQAAACgBACATqYXIABAAIAAAAQgBAAAAAAQgFAGgHABIAUArQAAABAAAAIACADQAAABAAAAQABADACAEQAFANAEAKQAKAcgEAjQgDAdgTAcQgBACgCACQgHACgEgEQgKgNACgwIADiLATrYXIABgBIgBgDQABAAABACQACABAFAEQAQAPAkAnQAUAWAJAiQAIAegEAWQgEAXgMgHQgOgIgQgtIgviBATyZJIgGgzATMYdQADEAAAAAQAAABAAAiIAhAAIAAhcAoYLYQAAAJgCAHQgDAHgDAAQgCAAgBgCQgBgBgBgBQgBgBAAgCQgDgHAAgJQAAgKADgHQABgDACgCQAAAAABAAQABgBABAAQADAAADAGQACAHAAAKgAqCMOIA4gDIgcAwgAsFNuQABAAACAAQAOADAQABQAHABAIAAQAMABAMABQBdAEBfgJQAugEAggIQAWgGAQgIAqmLYQAAAKgCAGQgCAGgDABQgBAAAAAAQgBAAgBAAQgCgCgCgFQgDgGAAgKQAAgJADgHQAAgCABgBQABgBABgBQABgCACAAQADAAADAHQACAHAAAJgAsFNuQgVAXgOAXQgUAfgJAbQgCAGgBAGQgBAHgBAGQgBAFgBAGQgBAQADAPQAAACABABQABAFABAEQAOAzA8AqQgjgFgLAQQgEgKgHgMAtKQZQgagyg0AqQgxAnA9BPQgpgGgJAXQgJAWAoAHQApAGAygFQAXgCAFgNAsrSNQgCACgBADQgGANAMAIQAIAGARADQAoAGAzgFQAggDgEgZICVAAAlOQdQAfhCAvA+QAqBDhfAtQApgGAJAWQAKAXgpAHQgoAGgzgFQgKgBgHgEAqYSVQgCgOgNgVA56PeIAAAAIAAAAQAAAAAAAAgA5wPWIAAABIgBAAQABgBAAAAgA5/PtIABAAQAAAAgBAAQgCABgIgBQgWgBg1gJQgGgBgHgBA5/PtIAAAAA58P4IABAAIAAAAQgBAAAAAAQgDgFAAgGA57P4QgCACgGAFQgQAPgrAfQgYASgjAFQgfAEgVgGQgWgHAIgLQAJgNAvgLICHggA5lQDQgBAAgCAAQgGAAgGgDQgCgBgCgDQgCgBgBgDA5lQDIAAAAIAAAAIAAAAIgPgDIgDgBIAAABQAAAAAAACQAAADgBAFQAAABgBADIABgHQgBAJgBABQAAABAAACQgBAAAAABIAAAEQgCAFAAACQgBABAAADIgBADQAAABgBACQgEARgHAYQgIAcgZAaQgVAWgVAJQgVAIgBgOQAAgQAegmIBXhtIAAAAA53P/IgBAIA5ePXQABAAAAABA5XPdQAGAGAAAJQAAACAAADQAAAAgBABIAAgBIABAAQACgBAHgCQAVgGA1gIQAZgFAcAIQAFABAFACQAdAKARAPQAQAPgMAHQgOAHgvgLIiIgfQgBAEgCAEQACABAEAFQAQAOAkAoQAUAWAKAiQAHAegDAWQgEAWgMgGQgOgIgRguIguiBA5XP8IgBAAQAAABAAAAIABgBIABgBIgBgCQAAAAACABQgBABAAAAA5YP9QgGAFgHABIAVAsIgGg0A5QQvQAAAAAAABIABADQAAAAAAABQACADABADQAFANAEALQALAbgEAkQgEAcgTAdQgBACgBACQgIACgDgFQgKgMABgxIAEiLA53QCQAFDpAAABIgCA6IAhAAIAAhcA3JPjIKBgBAlNPiIbTAA");
	this.shape_1.setTransform(512.8,353.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAQIA4gDIgdAwgAhGgOIgCAAQgCgCgCgFQgDgGAAgKQAAgJADgHIACgDIABgCIADgCQADAAADAHQACAHAAAJQAAAKgCAGQgCAGgCABIgCAAgABEgQIgBgCIgCgDQgCgHgBgJQABgKACgHQABgDACgCIABAAIACgBQADAAADAGQADAHgBAKQABAJgDAHQgDAHgDAAIgDgCg");
	this.shape_2.setTransform(451.2,430);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF99CC").s().p("AigDqQgPgBgjgYQhZg9gqheQgqhcALhYQAGg4ASAGQAKADAOAaQAmBDAMAZIBuDpQAaA4gWAAIAAAAgACqBfQBEjAAhhIQAhhIAjAKQAjAJACA5QABA5gxBRQgyBQhYB1QgiAtgLAAQgSAAArh4g");
	this.shape_3.setTransform(451.5,391.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(554,453.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009933").s().p("Eg9eAMOIgFp1IAApkIAAgZMAh5AAAIAMgBIANADQA1AIAVACIALAAQAAAGADAFIiIAgQgvALgJANQgIALAWAHQAWAFAegDQAjgFAYgSQArgfARgPIAHgHIADAEIAFAEQAFADAHAAIACAAIgDCLQgCAwAKANQAEAEAHgCIADgDQATgdADgcQAEgkgKgbIgJgYIgDgHIAAgBIgCgCIAAgBIgGg0IAvCBQAQAuAOAHQAMAHAEgXQAEgVgIgeQgJgjgUgWQgkgngQgPIgHgFQADgEABgEICHAfQAvALAPgHQAMgHgRgQQgRgPgdgJIgJgDIKBgBIgDANIgBALQgBAQACAPQgZgyg1ApQgwAnA8BQQgogGgJAWQgKAXApAHQAoAGAzgFQAWgCAFgNQAIAGARACQApAGAygFQAggDgDgZICUAAQgDAaAhAEQAvAEAmgEIACABQAHADALACQAyAEApgFQAogIgJgWQgJgXgqAHQBggugqhDQgwg9gfBCQADgHABgVIgBgHIgBgYIbTAAIgCgHQgCgigCj4IAAgCIAAgBIADABQAFADAHAAIACAAIgDCLQgCAxAKAMQAEAEAHgBIADgFIAABaIgeAAIAeAAIAAACIgeAAIAAgCIAAACIAeAAIAAgCMAm9gABIAAARIAAAEIAAAEIAAKnIgFgFQgRgPgdgKQgigLgdAFQg1AJgUAFIgKADIABgEQAAgKgGgGICHghQAsgKALgMIACgBIACgEIAAgDIAAAAQgCgHgOgEIgOgDIgZgBIgNACQgjAFgYARQgsAggQAOIgFAFIgBABIgBABIgBAAIgGgEIBJh3QAagpgDgQQgCgNgUAMQgUAJgSAZQgVAcgFAdQgIA2gCAVIAAAKQgFgCgFAAIgIABIAEiKQABgvgKgNQgJgLgMAUQgLASgEAfQgEAjAKAcQAUAyAJATIAFAJQgEABgEAEIgBACIhDh6QgXgrgPgGQgNgFAAAXQgBAWANAdQAOAhAXASQApAhASANIAJAFQgEAHAAAIIAAAAIh3hIQgpgagQACQgNACALAVQAKATAZATQAdAVAdAFQA1AIAVACIALAAQAAAFADAFIiIAhQgvAKgJANQgIALAWAHQAWAGAegEQAjgFAYgSQArgfARgOIAHgIIADAFIAFADQAFADAHAAIACAAIgDCMQgCAwAKANQAEAEAHgCIADgEQATgcADgdQAEgjgKgcIgJgYIgDgGIAAgBIgCgDIAAgBIgGg0IAvCCQAQAtAOAIQAMAHAEgXQAEgWgIgeQgJgigUgWQgkgogQgOIgHgGQADgEABgEICHAgQAvAKAPgHIAAIhgEA6eAH+IAAhcIAABcIggAAIAAgIIgBgKIAAgBQgBgOgCkDQACEDABAOIAAABIABAKIAAAIIAgAAgEA4iAFFQgeAmABAPQAAAOAVgIQAWgJAVgWQAYgaAIgcIAMgpIAAgDIABgDIABgEIACgHIABgEIAAgBIABgCIABgLIAAAHIAAgEIACgIIAAgCIAAAAIgBAAgATyF6IAAhcIAABcIggAAIAAgjIgEkAIAEEAIAAAjIAgAAgATNBRIAEADQAGAEAGAAIADAAIgECKQgBAxAKANQADAEAIgCIACgEQATgdAEgcQAEgkgLgbIgJgXIgDgHIAAgBIgBgDIAAgBIgGgzIAuCAQARAuAOAIQAMAGAEgWQADgWgHgeQgKgigUgWQgkgngQgPIgGgFQACgEABgFICIAfQAvAMAOgIQAMgGgQgQQgRgPgdgKQgigLgdAFQg1AIgVAGIgJADIAAgFQAAgJgGgGICIggQAsgLALgLIABgCIACgDIAAgDIAAgBQgBgGgPgEIgNgDIgaAAIgNABQgjAFgYARQgrAfgQAPIgFAEIgBAAIgCACIgBAAIgFgEIBJh2QAZgpgCgQQgDgOgTALQgUAMgTAYQgVAdgFAcQgIA0gCAXIAAAKQgEgCgGAAIgIABIAEiKQACgxgLgMQgIgKgMATQgMATgDAeQgFAkALAbQATAyAKATIAEAJQgEACgDADIgCACIhCh5QgXgrgPgGQgNgEgBAWQAAAXAMAcQAOAgAXATQAqAgASANIAJAGQgFAFAAAIIAAABIh2hIQgqgZgPACQgOADALATQALATAZATQAcAVAdAEQA1AJAWABIAKAAQAAAHADAEIiHAgQgvAMgJANQgIAKAWAHQAVAGAfgEQAjgFAYgSQArgfAQgPIAIgHIADAFgAR3DAQgeAmAAAQQABAOAVgIQAVgJAVgVQAZgaAIgdIALgpIABgCIABgEIABgEIACgHIAAgEIABgBIAAgDIACgKIgBAHIABgEIABgHIAAgDIAAgBIAAAAgEA59ADYIgDAAgATRBUIgDgBgA5QigIAAhbIAABbIghAAIABg5IgEjqIAEDqIgBA5IAhAAgA7MlZQgeAmABAQQAAAOAVgJQAWgIAVgWQAYgaAIgcIAMgqIAAgCIABgEIABgEIACgHIABgDIAAgBIABgDIABgLIAAAHIAAgDIACgIIAAgDIAAAAIgBAAgA5xnFIgDgBgEgtVgHmIgBgXIgBgVIgHj4IAAgCIAAgBIADABQAGADAGABIADAAIgECKQgBAxAKANQADAEAIgCIACgEIAABcg");
	this.shape_5.setTransform(512.5,501.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("EAzfAdoIAAAAIgPgDIgEgEIgEgEIAAAAIAAAAQgDgFAAgGIABAAIgBAAIAAgBQAAgIAEgGIABAAIAAAAIACgCQADgEAEgBIABAAIAAgBIAIgBQAFAAAFACIABABIAFAEIABAAIgBABIABAAQAGAGAAAJIAAAFIgBAAIAAABQgBAEgDAEIgCgBIABACIgBABIAAAAIgBABQgFAFgHABgAMzbkIAAAAIgPgDIgEgEIgDgEIAAAAIgBAAQgCgFAAgGIAAAAIAAAAIAAgBQgBgIAFgGIAAAAIAAAAIACgCQADgEAEgBIABAAIAAgBIAIgBQAGAAAEACIABABIAFAEIABAAIAAABIAAAAQAHAGAAAJIgBAFIgBAAIABABQgBAEgDAEIgCgBIABACIgBABIgBAAIAAABQgFAFgHABgEggQATJIAAABIgOgDIgFgEIgCgEIAAgBIgBAAQgDgEAAgGIAAgBIAAAAIAAAAQAAgIAFgGIAAAAIAAgBIABgCQAEgDAEgCIABABIAAgBIAIgBQAFAAAFACIAAAAIAGAEIABABIAAAAIAAAAQAGAHAAAJIgBAEIgBABIABAAQgBAFgDAEIgBgCIABADIgBABIgBAAIAAAAQgGAGgHABgAPoOIIAAABIgPgDIgEgEIgEgEIAAgBIAAAAQgDgEAAgGIABgBIgBAAIAAAAQAAgIAEgGIABAAIAAgBIACgCQADgDAEgCIABABIAAgBIAIgBQAFAAAFACIABAAIAFAEIABABIgBAAIABAAQAGAHAAAJIAAAEIgBABIAAAAQgBAFgDAEIgCgCIABADIgBABIAAAAIAAAAIgBAAQgFAGgHABgEgz5AODIAAAAIgOgDIgFgEIgDgEIAAAAIgBAAQgCgFAAgGIAAAAIAAAAIAAgBQgBgIAFgGIAAAAIAAAAIACgCQADgEAEgBIABAAIAAgBIAIgBQAGAAAEACIABABIAGAEIAAAAIAAABIAAAAQAHAGAAAJIgBAFIgBAAIABABQgBAEgDAEIgCgBIABACIgBABIAAAAIgNAHgEAlcgOwQijijAAjnQAAhWAWhMQAahYA3hLQAagkAighQCjijDnAAIAdABQDUAJCZCZQCkCjAADnIgCAjQgLDRiXCWQhCBDhOAnQg9AfhDAOQg6ANhAAAQjnAAijikg");
	this.shape_6.setTransform(555.4,333.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4999FF").s().p("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");
	this.shape_7.setTransform(512.8,327.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[]},10).wait(10));

	// flap
	this.instance = new lib.Flap();
	this.instance.parent = this;
	this.instance.setTransform(507,276.5,1,1,0,0,0,436.9,149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:437,scaleY:0.78,x:507.1,y:243.3},0).wait(1).to({scaleY:0.56,y:210},0).wait(1).to({scaleY:0.33,y:176.8},0).wait(1).to({scaleY:0.11,y:143.5},0).wait(1).to({skewX:180,y:110.3},0).wait(1).to({scaleY:0.33,y:77},0).wait(1).to({scaleY:0.56,y:43.8},0).wait(1).to({scaleY:0.78,y:10.6},0).wait(1).to({scaleY:1,y:-22.6},0).to({_off:true},1).wait(20));

	// envelope 
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("EBESAmNMAAAhMZMiIjAAAMAAABMZMA6MglFIKZADIKgAIMA5egnfEhERgmMMA6MAnUEhERAmNMCIjAAAAK0BTMA5eAk6");
	this.shape_8.setTransform(507,371.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFCFA").s().p("EhERAmNMA6MglFMg6MAlFMAAAhMZMA6MAnUIKZADIKgAIMA5eAk6gAK0BTMA5egnfMAAABMZgAK0BTgAK0BTgAAUBLIqZgDMg6MgnUMCIjAAAMg5eAnfg");
	this.shape_9.setTransform(507,371.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[]},10).wait(20));

	// Label
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACCvIAAjkQgWASgXALQgWALghAKIAAhPQAygPAagWQAagWAPghIBQAAIAAFdg");
	this.shape_10.setTransform(591.3,650.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhOB0QgcgOgSgeQgTgfAAgpQAAg5AmgkQAlgkBBAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAALIi+AAQACAWALAMQANAQAWAAQANAAANgHQAIgEAJgLIBeAIQgWAmgfAQQgeAQg4AAQgxAAgdgOgAAvgVQgDgcgMgMQgMgMgTAAQgWABgOARQgIAMgDAWIBdAAIAAAAg");
	this.shape_11.setTransform(545.6,655.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAkB/IAAiIQAAgXgJgKQgJgKgPAAQgQAAgLAOQgLANAAAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYAAAxIAACdg");
	this.shape_12.setTransform(513.6,655.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgfAAgpQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAALIi+AAQACAWALAMQANAQAWAAQANAAANgHQAIgEAJgLIBeAIQgWAmgfAQQgdAQg5AAQgxAAgcgOgAAvgVQgDgcgMgMQgMgMgTAAQgWABgOARQgJAMgCAWIBdAAIAAAAg");
	this.shape_13.setTransform(481.6,655.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgRgLgWQgLgWAAglQAAglANgaQAKgSAQgQQARgOASgIQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgHQgLgJgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgKQANgJAGgUIBbAKQgIAcgRAWQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_14.setTransform(449.6,655.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQANgLAAgOQAAgOgMgKQgLgLgrgJQhFgQgegZQgegaAAgoQAAgbAQgXQAOgYAggNQAfgOA0AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAcAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgTAcQgRAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_15.setTransform(416.1,650.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiIgnAcIgWAVICUAAIAABOg");
	this.shape_16.setTransform(603.9,605);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhOB1QgcgPgSgeQgTgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQACAXALAMQANAQAWAAQANAAANgHQAIgFAJgKIBeAIQgWAmgfAQQgeAQg4AAQgxAAgdgNgAAvgVQgDgbgMgNQgMgLgTAAQgWgBgOATQgIALgDAWIBdAAIAAAAg");
	this.shape_17.setTransform(556.4,610.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAkB/IAAiIQAAgXgJgKQgJgKgPAAQgQAAgLAOQgLANAAAhIAAB3IhfAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYAAAxIAACdg");
	this.shape_18.setTransform(524.4,609.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhNB1QgdgPgSgeQgTgeAAgpQAAg6AmgkQAlgkBBAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQACAXALAMQANAQAWAAQANAAANgHQAIgFAJgKIBeAIQgWAmgfAQQgdAQg5AAQgxAAgcgNgAAvgVQgDgbgMgNQgMgLgTAAQgWgBgOATQgJALgCAWIBdAAIAAAAg");
	this.shape_19.setTransform(492.4,610.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgPQARgPASgGQAcgMAqAAQA9AAAgAWQAgAWANAqIhaALQgEgQgLgHQgLgIgTAAQgXAAgOAQQgPASAAAgQAAAgAPAPQAOAQAWAAQASAAANgKQANgJAGgUIBbAKQgIAdgRAUQgRAVgaALQgbAMgpAAQgnAAgagHg");
	this.shape_20.setTransform(460.4,610.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQANgLAAgOQAAgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAQgXQAOgYAggNQAfgOA0AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgWAAQgSAAgJAIQgKAIAAALQAAAIAIAHQAIAHAcAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgTAcQgRAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_21.setTransform(426.9,605.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_22.setTransform(593.4,625.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhOB1QgcgPgSgeQgTgfAAgpQAAg5AmgkQAlgkBBAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAALIi+AAQACAWALAMQANAQAWAAQANAAANgHQAIgEAJgLIBeAIQgWAmgfAQQgeAQg4AAQgxAAgdgNgAAvgVQgDgcgMgMQgMgMgTABQgWAAgOASQgIALgDAWIBdAAIAAAAg");
	this.shape_23.setTransform(545.6,630.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhNB1QgdgPgSgeQgTgfAAgpQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAALIi+AAQACAWALAMQANAQAWAAQANAAANgHQAIgEAJgLIBeAIQgWAmgfAQQgdAQg5AAQgxAAgcgNgAAvgVQgDgcgMgMQgMgMgTABQgWAAgOASQgJALgCAWIBdAAIAAAAg");
	this.shape_24.setTransform(481.6,630.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgRgLgWQgLgWAAglQAAglANgaQAKgTAQgPQARgPASgGQAcgMAqAAQA9AAAgAWQAgAVANAqIhaAMQgEgQgLgHQgLgJgTABQgXAAgOAQQgPASAAAgQAAAgAPAPQAOAQAWAAQASAAANgKQANgJAGgUIBbAKQgIAcgRAWQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_25.setTransform(449.6,630.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15,p:{y:650.6}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{y:655.1}},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},10).to({state:[{t:this.shape_15,p:{y:625.3}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_12,p:{y:629.8}},{t:this.shape_23},{t:this.shape_22}]},10).wait(10));

	// Button
	this.btn_Next = new lib.BasicButton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.parent = this;
	this.btn_Next.setTransform(890.2,684.7);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Next).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(581.1,510,922.1,609.7);
// library properties:
lib.properties = {
	id: '1AC0C73A12901C419B59906AFCA2BD47',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#0066FF",
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
an.compositions['1AC0C73A12901C419B59906AFCA2BD47'] = {
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