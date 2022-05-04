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
(lib.PracticeCardMTolama = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,12,29];
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
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(17).call(this.frame_29).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AvCoTIB8kKICNiyQAJgJCtisQCsitHagBQHbgCCwCqQCwCpgOAUIQMkyIrfOVIAAAAQgBgHgBgIQABAHABAIQAMBTAABYQAAFDidECQggAzgmAxQgLAQgNAPQgmAugrArQhJBJhPA5QB9hTBsiIAvCoTQAriNBRh9QA8heBRhUI0ClsIPJRYgAQftHQCpDnATDnAQftHIhviGQA+BAAxBGgARMGGIAAgBIDwN7Iram7IAFgDICeheQhMA2hSAoQjgBtkMAAQkhAAjuh/Ii/iBQgrgkgpgpQgggggdghIiijzIAAAAQhtjgAAkNQAAgSABgSQAEigAsiQArkIhQhjhyg/iBIkVQOIMKoKIgDgCQhkg1hbhMg");
	this.shape.setTransform(478,430.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AoPPzIi+iBIiSiPICSCPQgrgkgpgpQghghgdghIihjzIAAABQhtjhAAkNIAAgjIAwkxIB8kKICOiyIC1i1QCsisHagCQHbgCCwCqQCwCpgOAUIBwCGQCoDnAUDoIABAOIABAAQAMBTAABYQgBFDidECQgfAzgmAyIgYAfQgmAtgsAsQhJBIhPA5IieBeQjfBtkNAAQkhAAjuh+g");
	this.shape_1.setTransform(490.25,411.4993);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},12).to({state:[]},8).wait(10));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAAAHIAAgN");
	this.shape_2.setTransform(186.05,223.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("EA87gX7IAMgEIDVJRIpRDVIi1n5IgghYIJFjRQFFjEE4jrAV9qFIgGgVIJhijIASBCQCmgnCkgxIgHgbIG/h3ICigsICjJhIphCjIicpGA3UsgQXHFZVOi1QAegEAegFAfqr7ICRIeIphCjIidpLEArsgPlQEZhqERiDEgg1gPDIAKgkIJgCjIgJAkIiaI9IpgijgArCIGIJOwVIElQfQnhiRmSCHgEgxLgU+IAFgQIJgCjIgWBTIiNIOIpgijgEgn8gRYQDiBRDlBEEhAfgcZIAYgrIIiE7IgJAPIkyITIoik7gEhG3ggOQCqByDuCDEgzpgD+IAAgOEg3ugX6QDRBjDSBZEgFWAgFIJNwWIElQgg");
	this.shape_3.setTransform(516.7,249.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCFF66").s().p("Am5IGIJNwVIEmQfQnhiQmSCGg");
	this.shape_4.setTransform(490.175,249.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6633FF").s().p("AmtB0IEin3IAZgrIIgE7IgIAPIkzISg");
	this.shape_5.setTransform(117.825,106.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9933").s().p("AmBDfICfpPIAEgRIJgCjIgXBTIiMINg");
	this.shape_6.setTransform(224.625,152.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF33CC").s().p("AmBDfICao7IAJglIJgCjIgKAkIiZI8g");
	this.shape_7.setTransform(329.725,187.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FF66").s().p("Al5jDIgIgbIG+h3ICigsICjJgIpgCjg");
	this.shape_8.setTransform(790.175,183.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300FF").s().p("Al7jIIgGgWIJgijIASBDICRIdIpgCjg");
	this.shape_9.setTransform(695.175,204.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF66").s().p("AlyhlIgghYIJEjQIAMgFIDVJQIpQDVg");
	this.shape_10.setTransform(888.8,136.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("EA87gHWIAMgEIDVJQIpRDVIi1n4IgghYIJFjRQFFjEE4jrAV9GfIgGgVIJhijIASBDQCmgoCkgxIgHgbIG/h3ICigsICjJhIphCjIicpGA3UEEQXHFZVOi1QAegEAegFAfqEqICRIdIphCjIidpLEArsAA/QEZhpERiDEgg1ABiIAKglIJgCjIgJAkIiaI9IpgijgEgxLgEZIAFgQIJgCjIgWBTIiNINIpgijgEgn8gAzQDiBQDlBFEhAfgL0IAYgrIIiE7IgJAPIkyISIoik6gEhG3gPpQCqByDuCDEgzpAMmIAAgOEg3ugHVQDRBjDSBZ");
	this.shape_11.setTransform(516.7,143.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},12).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_11}]},8).wait(10));

	// S1-Sombrero
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("EBXEgGcIANgLEgisAS+QkHioAAjVQAAkiHmjNQD4hoEtgyIJygzQALAAALAAIJxAzQEfA1DvBlQHnDNAAEiQAADakTCqIAmgKIFlhgIACAGIAQA9QALgCAKgDQCcgmCagtIgHgbIG+h4QAkgNAkgOQALgEALgEQDphcDkhtIgghZIJFjQIAMgFIACAHIDTJKIo+DOIgTAHIi1n4AcaOYQgBAEAAAEIAWgGIBFgSIACAFIChJbIpMCeIgUAFIgoiUIgDgMIhxmlAAZi4QJABQHLDJQL2FOAAHYQAAAJAAAIAbSOzIBHgTEAsiAGeQFFjEFujrAFkUUIgGgWIDVg5AFqUsIgGgYAFqUsQgFACgGACQjvBlkfA1IpxAzQgLAAgLAAIpygzQktgxj4hpQiAg2hfg8QAQADAQADQUeChJagnQJagnAegDAMqcPIkVBKIgUAGIiVorIgCgIAMqcPQgsAQgtAOQigAzirAoIxuBzQgLAAgLAAI2Fi7Qjag9jFhWQgjgQgigQQgJgEgKgFIgMAsIgBAFIphijIBOkiIAGgXIBGkDIAJgkIAVAFIJMCeIgKAkQALACAKACQCXAjCWAeAWMXrQh9BUilBOQgJAEgKAFIAKAmIk3BTAPQSeICHH4A5giuIgFABQA0kqBhk/QDEp/DHlCQC7ksCsAKQBXAFBTBSQE2E2EXWzQAAABAAAAItZgzIgFAAQAJAAAJAAIAEAAQAYAAAZAAQGbAAFrAxQAJABAIABAxYjjIgeADImlArIg0AFIgRACQAJgBAJgCQDxgkEFgOICjgGQAUAAAVgBIBHgBABxNfQAACaj6BsQj7BslkAAQljAAj8hsQj7hsAAiaQAAiZD7htQD8hsFjAAQFkAAD7BsQD6BtAACZgEg0WAOYQgBgJAAgIQAAnYL1lOQGui8IUhTEhIHAGfQAIAEAJAEQDIBeDKBWIAEgQIAVAFIJMCeIgWBTQAKADAKAEQB1ApB2AnQALADALAEQBYAcBaAbEhQ5ACAIAZgrIAQAJIIREyIgIAPIktIJIgGAKIohk7gEhXQgB1QCqBzDtCCEg4VANBIiMIIIgBAFIphijICfpQEhDtAabIAAgPEgnuAR5IiMILEgyaATwQh3iigFi2");
	this.shape_12.setTransform(614.975,295.6345);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF33CC").s().p("ADKF8IAMgrIATAJIgTgJICMoLIAVAFIiLIGIgDAJIgKAogADKF8IpLidIBOkhIBUk5IJLCdIgKAkIAKgkIpLidIABgGIJgCjIgLApIgVgFIiMILIgMArgAF3i1IAAAAgAjfl7g");
	this.shape_13.setTransform(325.275,428.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9933").s().p("ADKF8ICMoHIAUAHIiLIGgADKF8IpLidICipaIJLCdIgWBTIAWhTIpLidIABgGIJgCjIgYBaIgUgHIiMIHgAFqiEIAAAAgAjfl7g");
	this.shape_14.setTransform(220.175,392.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6633FF").s().p("ABjGlIEtoIIARAIIgRgIIAIgPIoQkyIIQEyIgIAPIktIIIoQkxIE1oYIAGgJIIgE7IgNAXIkuIKgAGQhjIAAAAg");
	this.shape_15.setTransform(113.375,347.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3300FF").s().p("AjfF8IEUhKIhZAeIi6AygAjfF8IiWosIgMguIDWg5IF1hkIARA9IAUgFICGHzIACAJIALAmIk4BTIhuAeIBZgeIE3hTIgKgmIATgJIgTAJIAKAmIk3BTIkUBKgAFiC5IiHn3gADbk+IgRg9IAVgGIAQA+IgUAFgADvlDgADKl7g");
	this.shape_16.setTransform(690.725,445.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF66").s().p("AjAGMIjSpJII9jOIDSJJIo9DOII9jOIjSpJIATgHIDVJQIpQDVgACrmLg");
	this.shape_17.setTransform(884.35,376.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#66FF66").s().p("AjfF8IgqibIh4m/IIFiKIBGgTICiJaIpLCdIJLidIiipaIAVgGICjJgIpgCjgADKl7g");
	this.shape_18.setTransform(785.725,424.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#33CC00").s().p("AgVK8IpygzQkfg1jwhlQh6g0hbg4IAaADIAFAAIADABIAKABIAKABIAHABIAEABIAFAAIAGABIAMABIAGABIA3AHIABAAQOxBvIoABIACAAIABAAQCJAABxgHIAAAAIAJgBIACAAQJbgnAegDQgeADpbAnIgCAAIgJABIAAAAQhxAHiJAAIgBAAIgCAAQoogBuxhvIgBAAIg3gHIgGgBIgMgBIgGgBIgFAAIgEgBIgHgBIgKgBIgKgBIgDgBIgFAAIgagDIgKgHQkHinAAjVQAAkhHmjNQDwhlEfg1IJygzIAVAAIJyAzQEfA1DvBlQHnDNAAEhQAADakTCqQETiqAAjaQAAkhnnjNQjvhlkfg1QEsAxD4BpQHnDNAAEhQAADTkDCnIgmAKIjVA5IAGAWIgGgWIDVg5IAmgKIgQAKIjVA5IAMAuIgLAEIgIAEIgDgIIADAIQj1BmknAwQEfg1DvhlIALgEIgGgYIAGAYIgLAEQjvBlkfA1IpyAzIgVAAgAomjnQj7BtAACYQAACZD7BsQD8BtFiAAQFkAAD7htQD7hsAAiZQAAiYj7htQj7hslkAAQliAAj8BsgASOHzgAV6F6IAAAAg");
	this.shape_19.setTransform(534.875,378.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgVRzI2Fi6QjNhBi8hTQgtgUgrgUICLoHIALgoIphijIgBAFIgVgFIgJAkIhGEDQhmiUgGinICyA4Iiyg4IgBgHIAAgQQAAnXL1lOQGui9IUhTIIIg2ICjgFIApgBIA3gBIAMgBIAEAAIM3AyIARABIAWABQJABPHLDLQL2FOAAHXIAAAJIgWAIIAAgRQAAnXr2lOQnLjLpAhPQJABPHLDLQL2FOAAHXIAAARIhIAbIm+B3IAHAcIBxGlQh9BUikBOIiGn0QCcgmCagtQiaAticAmIgRg+IgUAFIgCgFIllBgIFlhgIACAFIl3BlIAQgKQEDinAAjSQAAkinnjNQj4hpksgxIpxgzIgWAAIpyAzQktAxj4BpQnmDNAAEiQAADUEHCnQiWgdiXgjQCXAjCWAdQBfA9CAA2QD4BpEtAxIJyAzIAWAAIJxgzQEngwD1hmIAIgEIALgEICVItIACAFIC6gxIBvgeQjSBJjoAwQCrgoCggzQigAzirAoIxvByIgVAAgATqPXIAUgFIgUAFIiUoqgAMCw/ItYgzgAMCw/IgRgCIARACgAMCw/IAAgBIAAABgAdUMGQCkhOB9hUIhxmlIgHgcIG+h3IBIgbIgBAIIAWgGIAAAGIoFCKIB4HBIgTAMIgDgMIADAMQh+BTikBMgEAm7AAsIBHgTgEAh4AJwgAzkGpQiAg2hfg9IAgAHIgggHQkHinAAjUQAAkiHmjNQD4hpEtgxQkfA1jwBlQnmDNAAEiQAADUEHCnIAKAHQBbA4B6A0QDwBlEfA1Qktgxj4hpgEgmrAFSIBGkDIAJgkIAVAFIhUE5IgQgXgA3DE2IAAAAgAapDZgEglHAAwgEAoDAARIAWgIIgBAIIAAACIgWAGIABgIgEgoXAAXIAAAAgEAoYAATIAAAAgEAoDAARIAAAAgEAoZAAJIAAAAgAq/rOIAAAAg");
	this.shape_20.setTransform(540.475,385.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC66").s().p("As+OkIAAgBQA0koBgk+QDEp9DHlCQCvkaCigJQBWAFBTBTQE2E1EYWyQkY2yk2k1QhThThWgFQBhgFBeBdQE2E1EZW0IgXgCIgRgBQlsgxmbAAIgwAAIgEAAIgSAAIASAAIgMAAIgGAAIAGAAIg3ACIgpABIijAFIg0ADIAfgDQkGAPjxAkQDxgkEGgPIgfADQjaAOjLAeIgzAFIAzgFIgvAHIgEAAIAAgCgAh8NqIgoABIijAFICjgFIAogBIBHgCgAgfNoIAwAAQGbAAFsAxgAgfNoIAAAAgAAyulIAAAAg");
	this.shape_21.setTransform(536.55,184.7847);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ApeEFQj7hsAAiZQAAiYD7htQD8hsFiAAQFkAAD7BsQD7BtAACYQAACZj7BsQj7BtlkAAQliAAj8htg");
	this.shape_22.setTransform(540.475,381.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[]},11).wait(19));

	// Label
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AACCvIAAjkQgWASgWALQgXALggAKIAAhPQAwgPAbgWQAbgWAPghIBPAAIAAFdg");
	this.shape_23.setTransform(241.3,643.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhNB1QgdgPgTgeQgSgfAAgpQAAg5AmgkQAkgkBDAAQA0AAAfAQQAfAQAQAfQAQAeAAAxIAAALIi+AAQADAWAKAMQANAQAWAAQAOAAAMgHQAIgEAJgLIBeAIQgWAmgeAQQgeAQg5AAQgxAAgcgNgAgjg2QgJALgCAWIBdAAQgCgcgNgMQgMgMgUABQgVAAgOASg");
	this.shape_24.setTransform(195.65,648.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgLAOQgKANgBAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAWAXQAXAYAAAxIAACdg");
	this.shape_25.setTransform(163.6,647.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhNB1QgdgPgTgeQgSgfAAgpQAAg5AlgkQAlgkBDAAQA0AAAfAQQAfAQAQAfQAQAeAAAxIAAALIi+AAQADAWAJAMQAOAQAVAAQAOAAANgHQAIgEAJgLIBeAIQgWAmgeAQQgfAQg4AAQgxAAgcgNgAgjg2QgJALgCAWIBdAAQgCgcgMgMQgNgMgUABQgVAAgOASg");
	this.shape_26.setTransform(131.65,648.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgRgLgWQgLgWAAglQAAglANgaQAKgTAQgPQARgPASgGQAcgMAqAAQA9AAAgAWQAgAVANAqIhaAMQgEgQgLgHQgLgJgTABQgXAAgOAQQgPASAAAgQAAAgAPAPQAOAQAWAAQASAAANgKQANgJAGgUIBbAKQgIAcgRAWQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_27.setTransform(99.675,648.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ah1CQQghgigFg0IBlgGQADAYALANQAQAVAdAAQAXAAAMgKQAMgLAAgOQAAgOgLgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAPgYAfgNQAggOA0AAQBCAAAiAZQAjAYAHA2IhlAGQgEgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAHAHAcAGQBFAPAeAPQAfAPANAWQAOAXAAAcQAAAhgSAcQgTAcghAOQggAPgyAAQhXAAgigig");
	this.shape_28.setTransform(66.15,643.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_29.setTransform(609.075,316.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgMQgMgLgTgBQgWABgOARg");
	this.shape_30.setTransform(561.6,321.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_31.setTransform(529.55,320.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_32.setTransform(497.6,321.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_33.setTransform(465.625,321.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_34.setTransform(432.1,316.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhOB0QgcgOgSgeQgTgfAAgpQAAg5AlgkQAmgkBBAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAAKIi+AAQACAXAKAMQAOAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgeAQg4AAQgxAAgdgOgAgjg3QgIAMgDAWIBdAAQgDgcgMgLQgMgNgTAAQgWABgOARg");
	this.shape_35.setTransform(190.65,687.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAkB/IAAiIQAAgXgJgKQgIgKgRAAQgPAAgLAOQgLANAAAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAWAYgBAxIAACdg");
	this.shape_36.setTransform(158.6,686.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhOB0QgcgOgSgeQgTgfAAgpQAAg5AmgkQAlgkBBAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAAKIi+AAQACAXALAMQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgeAQg4AAQgxAAgdgOgAgjg3QgIAMgDAWIBdAAQgDgcgMgLQgMgNgTAAQgWABgOARg");
	this.shape_37.setTransform(126.65,687.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgRgLgWQgLgWAAglQAAglANgaQAKgTAQgOQARgPASgIQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgQgLgJQgLgHgTgBQgXAAgOARQgPARAAAiQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbALQgIAbgRAWQgRAUgaAMQgbALgpAAQgnAAgagHg");
	this.shape_38.setTransform(94.675,687.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQAEAYAJANQARAVAeAAQAWAAAMgKQAMgLABgOQAAgOgMgKQgLgLgrgJQhFgQgegZQgegaAAgoQAAgbAQgXQAPgYAfgNQAegOA1AAQBCAAAiAZQAjAYAGA2IhjAGQgFgYgMgKQgNgLgWAAQgSAAgKAIQgJAIAAALQAAAIAIAHQAIAHAcAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgTAcQgRAcghAOQghAPgyAAQhXAAghgig");
	this.shape_39.setTransform(61.15,682.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_40.setTransform(216.075,700.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhNB1QgdgPgSgeQgTgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAAKIi+AAQACAYALALQANAQAWAAQAOAAAMgHQAIgFAJgLIBeAJQgWAmgfAQQgdAQg5AAQgxAAgcgNgAgjg2QgJALgCAWIBdAAQgCgbgNgMQgMgMgTAAQgWgBgOATg");
	this.shape_41.setTransform(168.3,705.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAjB/IAAiIQABgXgJgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYAAAxIAACdg");
	this.shape_42.setTransform(136.25,705.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhNB1QgdgPgTgeQgSgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAeAAAxIAAAKIi+AAQADAYAKALQANAQAWAAQAOAAAMgHQAIgFAJgLIBeAJQgWAmgfAQQgdAQg5AAQgxAAgcgNgAgjg2QgJALgCAWIBdAAQgCgbgNgMQgMgMgUAAQgVgBgOATg");
	this.shape_43.setTransform(104.3,705.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgQgLgXQgLgWAAglQAAglANgaQAKgSAQgPQARgQASgGQAcgMAqAAQA9AAAgAWQAgAWANAqIhaALQgEgPgLgJQgLgHgTAAQgXAAgOAQQgPASAAAgQAAAfAPAQQAOAQAWAAQASAAANgKQANgJAGgUIBbALQgIAcgRAUQgRAVgaAMQgbALgpAAQgnAAgagHg");
	this.shape_44.setTransform(72.325,705.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).to({state:[{t:this.shape_34,p:{x:432.1,y:316.375}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:609.075,y:316.075}}]},10).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_29,p:{x:238.125,y:682.025}}]},2).to({state:[{t:this.shape_34,p:{x:38.8,y:700.625}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},8).wait(10));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(890.15,684.65);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(30));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(531.5,426.1,643,309.6);
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