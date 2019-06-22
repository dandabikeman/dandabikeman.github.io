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
(lib.AnimatedCardGGarcia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// easter scene
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBCBAj3IAAGRMiEBAAAIAAmRMAAAhN+MCEBAAAMAAABN+Ug+8gQnhFFAQn");
	this.shape.setTransform(496,400.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF00").s().p("EhB/AHSIAAmRUBFEgQlA+7AQlIAAGRg");
	this.shape_1.setTransform(496,623.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("EhB/Am/MAAAhN9MCD/AAAMAAABN9Ug+7gQmhFEAQmg");
	this.shape_2.setTransform(496,380.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).wait(20));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.parent = this;
	this.next_btn.setTransform(918.4,684.7);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(30));

	// envelope
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("EAyUgY1MAAAAxrMhknAAAMAtZgbHAG3ikImGDGIllixIgLgFMgtUgWhMBknAAAgEgyTAY2MAAAgxrEAyUAY2Mgrdgba");
	this.shape_3.setTransform(499.1,456.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgySAY2MAtYgbHMgtYAbHMAAAgxqMAtTAWgIAFADIAGACIgLgFMgtTgWgMBklAAAMgrcAWQImGDGIllixIFlCxIGGjGMArcAbagAG3ikMArcgWQMAAAAxqg");
	this.shape_4.setTransform(499.1,456.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("EAyUgY1MAAAAxrMgrdgbaImGDGIllixIgLgFMgtUgWhMBknAAAMgrdAWREAyUgY1MgxjAUsMgzEgUsEgyTAY2MAAAgxrEgyTAY2MAtZgbHEAyUAY2MhknAAA");
	this.shape_5.setTransform(499.1,456.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("Ak0J6IgLgGMgtTgWfMAzDAUrMAxigUrMgrcAWQImGDHg");
	this.shape_6.setTransform(499.1,378.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EAyTAY2MgrcgbaMArcAbaMhklAAAMAtYgbHIAGACIFlCxIGGjGMArcgWQMAAAAxqgEgySgY0MAtTAWgIAFADMgtYAbHgAk6iRgEgySgY0MBklAAAMgxiAUsg");
	this.shape_7.setTransform(499.1,456.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("EAyUgY1MAAAAxrMgrdgbaImGDGIllixIgLgFMgtUgWhMBknAAAMgrdAWREAyUgY1MgxjAN/MgzEgN/EgyTAY2MAAAgxrEgyTAY2MAtZgbHEAyUAY2MhknAAA");
	this.shape_8.setTransform(499.1,456.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CCFF").s().p("Ak0J6IgLgGMgtTgWfMAzDAN9MAxigN9MgrcAWQImGDHg");
	this.shape_9.setTransform(499.1,378.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EAyTAY2MgrcgbaMArcAbaMhklAAAMAtYgbHIAGACIFlCxIGGjGMArcgWQMAAAAxqgEgySgY0MAtTAWgIAFADMgtYAbHgAk6iRgEgySgY0MBklAAAMgxiAN+g");
	this.shape_10.setTransform(499.1,456.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("EAyUgY1MAAAAxrMgrdgbaImGDGIllixIgLgFMgtUgWhMBknAAAMgrdAWREAyUgY1MgxZAGVMgzOgGVEgyTAY2MAAAgxrEgyTAY2MAtZgbHEAyUAY2MhknAAA");
	this.shape_11.setTransform(499.1,456.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CCFF").s().p("Ak0J6IgLgGMgtTgWfMAzNAGUMAxYgGUMgrcAWQImGDHg");
	this.shape_12.setTransform(499.1,378.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EAyTAY2MgrcgbaMArcAbaMhklAAAMAtYgbHIAGACIFlCxIGGjGMArcgWQMAAAAxqgEgySgY0MAtTAWgIAFADMgtYAbHgAk6iRgEgySgY0MBklAAAMgxYAGUg");
	this.shape_13.setTransform(499.1,456.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("EAyUgU9MAAAAxqMgrdgbaImGDHIlliyIgLgFMgtUgWgMBknAAAMgrdAWQEAyUgU9MgxPgHvMgzYAHvEgyTActMAAAgxqEgyTActMAtZgbIEAyUActMhknAAA");
	this.shape_14.setTransform(499.1,431.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CCFF").s().p("Ak0NxIgLgFMgtTgWfMBklAAAMgrcAWPImGDIgEgySgIzMAzXgHwMAxOAHwgEgySgIzg");
	this.shape_15.setTransform(499.1,353.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("EAyTAY2MgrcgbaMArcAbaMhklAAAMAtYgbHIAGACIFlCxIGGjGMArcgWQMAAAAxqgEgySgY0MAtTAWgIAFADMgtYAbHgAk6iRg");
	this.shape_16.setTransform(499.1,456.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("EAyUgPuMAAAAxqMgrdgbaImGDHIlliyIgLgFMgtUgWgMBknAAAMgrdAWQEAyUgPuMgxPgSNMgzYASNEgyTAh8MAAAgxqEgyTAh8MAtZgbIEAyUAh8MhknAAA");
	this.shape_17.setTransform(499.1,398.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CCFF").s().p("Ak0TAIgLgFMgtTgWfMBklAAAMgrcAWPImGDIgEgySgDkMAzXgSOMAxOASOgEgySgDkg");
	this.shape_18.setTransform(499.1,320.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("EAyUgK9MAAAAxqMgrdgbaImGDHIlliyIgLgFMgtUgWgEAyUgK9Mgw7gbvMgzsAbvEgyTAmtMAtZgbIEgyTAmtMAAAgxqMBknAAAMgrdAWQEAyUAmtMhknAAA");
	this.shape_19.setTransform(499.1,367.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00CCFF").s().p("Ak0XxIgLgFMgtTgWgMBklAAAMgrcAWQImGDIgEgySABMMAzrgbvMAw6AbvgEgySABMg");
	this.shape_20.setTransform(499.1,289.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("EA3VgMDMAAAA2oMhupAAAMAAAg2oMBupAAAMg2JgehMg4gAehAHjMbImtDbImJjEIgMgGMgx1gYvEg3UAqlMAx6gd2EA3VAqlMgvygeKEA3VgMDMgvyAYe");
	this.shape_21.setTransform(499.1,367.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CCFF").s().p("AlTaJIgMgGMgx1gYwMBupAAAMgvyAYfImtDcgEg3UABTMA4ggegMA2JAeggEg3UABTg");
	this.shape_22.setTransform(499.1,282.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("EA3VAbUMgvygeIMAvygYfMAAAA2ngEg3UAbUMAx6gd0Mgx6Ad0MAAAg2nMAx1AYwIAFADIAHADIGJDDIGtjaMAvyAeIg");
	this.shape_23.setTransform(499.1,465.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("EA8rgNOMAAAA76Mh5VAAAMAAAg76MB5VAAAMg7XghdMg9+AhdAIRNoInVDwImwjXIgNgGMg2pgbJEg8qAusMA2vgguEA8rAusMg0aghEEA8rgNOMg0aAa2");
	this.shape_24.setTransform(499.1,367.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CCFF").s().p("Al0crIgNgGMg2pgbKMB5VAAAMg0aAa3InVDwgEg8qABbMA9+ghcMA7XAhcgEg8qABbg");
	this.shape_25.setTransform(499.1,274);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("EA8rAd9Mg0aghDMA0aga3MAAAA76gEg8qAd9MA2vggtMg2vAgtMAAAg76MA2pAbKIAGADIAHAEIGwDWIHVjwMA0aAhDg");
	this.shape_26.setTransform(499.1,474.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("EA/GgNwMAAAA+TMh+LAAAMAAAg+TMB+LAAAMg9vgiyMhAcAiyAImOLInoD5InBjfIgNgHMg41gcOEg/FAwjMA46giCEA/GAwjMg2ggiYEA/GgNwMg2gAb7");
	this.shape_27.setTransform(499.2,367.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CCFF").s().p("AmDd0IgNgHMg41gcPMB+LAAAMg2gAb8InnD6gEg/FABeMBAcgixMA9vAixgEg/FABeg");
	this.shape_28.setTransform(499.2,270.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("EA/GAfKMg2ggiXMA2ggb8MAAAA+TgEg/FAfKMA47giBMg47AiBMAAAg+TMA41AcPIAGADIAHAEIHCDeIHnj4MA2gAiXg");
	this.shape_29.setTransform(499.2,479.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_16},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_16},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).wait(21));

	// Label
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AACCvIAAjkQgWASgXALQgWALggAKIAAhPQAxgPAagWQAagWAPghIBQAAIAAFdg");
	this.shape_30.setTransform(212.3,47.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgfAAgpQAAg5AmgkQAlgkBBAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAWALAMQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgDgcgMgLQgMgMgTgBQgWABgOARg");
	this.shape_31.setTransform(166.6,52.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAjB/IAAiIQABgXgJgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYAAAxIAACdg");
	this.shape_32.setTransform(134.6,51.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgfAAgpQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAWALAMQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgLQgMgMgTgBQgWABgOARg");
	this.shape_33.setTransform(102.6,52.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgRgLgWQgLgWAAglQAAglANgaQAKgSAQgPQARgPASgIQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgQgLgJQgLgHgTgBQgXAAgOARQgPARAAAiQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbALQgIAbgRAWQgRAUgaAMQgbALgpAAQgnAAgagHg");
	this.shape_34.setTransform(70.6,52.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQANgLAAgOQAAgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAQgXQAOgYAggNQAfgOA0AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAHAHAdAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgTAcQgRAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_35.setTransform(37.1,47.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_36.setTransform(237.1,68.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhNB1QgdgPgSgeQgTgeAAgpQAAg6AmgkQAkgkBCAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQACAYALALQANAQAWAAQANAAANgHQAIgFAJgLIBeAJQgWAmgfAQQgeAQg4AAQgxAAgcgNgAgjg2QgIALgDAWIBdAAQgDgbgMgMQgMgMgTAAQgWgBgOATg");
	this.shape_37.setTransform(189.7,73.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAkB/IAAiIQAAgXgJgKQgJgKgPAAQgQAAgLAOQgLANAAAhIAAB3IhgAAIAAj4IBZAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYAAAxIAACdg");
	this.shape_38.setTransform(157.6,72.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhNB1QgdgPgSgeQgTgeAAgpQAAg6AmgkQAlgkBBAAQA1AAAfAQQAfARAQAeQAQAeAAAxIAAAKIi+AAQACAYALALQANAQAWAAQANAAANgHQAIgFAJgLIBeAJQgWAmgfAQQgdAQg5AAQgxAAgcgNgAgjg2QgJALgCAWIBdAAQgDgbgMgMQgMgMgTAAQgWgBgOATg");
	this.shape_39.setTransform(125.7,73.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag5B7QgagIgTgQQgTgQgLgXQgLgWAAglQAAglANgaQAKgSAQgPQARgQASgGQAcgMAqAAQA9AAAgAWQAgAWANAqIhaALQgEgPgLgJQgLgHgTAAQgXAAgOAQQgPASAAAgQAAAfAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbALQgIAcgRAUQgRAVgaAMQgbALgpAAQgnAAgagHg");
	this.shape_40.setTransform(93.7,73.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQANgLAAgOQAAgOgMgKQgLgLgrgJQhFgQgegZQgegaAAgoQAAgbAQgXQAOgYAggNQAfgOA0AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgWAAQgSAAgJAIQgKAIAAALQAAAIAIAHQAIAHAcAGQBEAPAfAPQAeAPAOAWQANAXAAAcQAAAhgTAcQgRAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_41.setTransform(60.2,68.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_42.setTransform(609.4,316.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgMQgMgLgTgBQgWABgOARg");
	this.shape_43.setTransform(561.6,321.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_44.setTransform(529.6,320.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_45.setTransform(497.6,321.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_46.setTransform(465.6,321.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_47.setTransform(432.1,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},10).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(529.8,393.7,1001.6,725.9);
// library properties:
lib.properties = {
	id: '1EDA6F848883EC4598D7D777044712BA',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFFF00",
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
an.compositions['1EDA6F848883EC4598D7D777044712BA'] = {
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