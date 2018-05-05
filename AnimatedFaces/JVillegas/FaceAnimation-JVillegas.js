(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.FaceAnimationJVillegas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("hellowav");
	}
	this.frame_14 = function() {
		playSound("blesswav");
	}
	this.frame_53 = function() {
		playSound("quepasa2wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(39).call(this.frame_53).wait(82));

	// cejas 
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AMPiAQkwA3kAB3QgEA6AXAJQEKhmDog1QCzBJDVB6Ig4hyQhghJjFhegAxrBvQBGhPFXhqQB7AQDZCKICCgoQihiPk/gxQjcAXhHBZg");
	this.shape.setTransform(233.5,283.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ALkgqQjoA1kKBmQgXgJAEg6QEAh3Ewg3QDFBeBgBJIA4ByQjVh6izhJgAv7goQBHhZDcgXQE/AxChCPIiCAoQjZiKh7gQQlXBqhGBPg");
	this.shape_1.setTransform(233.5,283.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AMPiSQkwA3kAB3QgEA6AXAJQEKhlDog2QCzBJDVB6Ig4hyQhghJjFhegAxrCTQBGhPFXhqQB7AQDZCKICCgoQihiPk/gxQjcAXhHBZg");
	this.shape_2.setTransform(235.5,279.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Av7gEQBHhZDcgXQE/AxChCPIiCAoQjZiKh7gQQlXBqhGBPgALkg8QjoA2kKBlQgXgJAEg6QEAh3Ewg3QDFBeBgBJIA4ByQjVh6izhJg");
	this.shape_3.setTransform(235.5,279.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:233.5,y:283.9}},{t:this.shape,p:{x:233.5,y:283.9}}]}).to({state:[{t:this.shape_1,p:{x:235.5,y:282.7}},{t:this.shape,p:{x:235.5,y:282.7}}]},14).to({state:[{t:this.shape_3},{t:this.shape_2}]},15).to({state:[{t:this.shape_3},{t:this.shape_2}]},21).wait(85));

	// camisa
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("AhPAZIiMA3IhQgKIAohtIBkg3IgUAtgAATCWQgKAAgJAAQirAAh6gsQh5gsAAg+QAAg9B5gsQB6gsCrAAQCsAAB6AsQB5AsAAA9QAAA+h5AsQguARg2AKQDFhPgagsQgvhWiPgcIBfB8IhMBxAAehPICgA8IAABPgADCCFIAAAAQAAAAAAAAQhQAPheACIBzhLIhuhGIjbBpIDVAoAAUCWQgBgBAAAB");
	this.shape_4.setTransform(359,687.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("Arfl5IAAZVIhugtIAZ3+IBVgqQhUACgRg+QgDgLgBgLQgLAHAPAPQAWAVBPAngAtInLQAAgBAAAAQojq4BQhyIjpCqIleFAIuYEsQgkAqgPDzQgQDxAVFxQAWFxgnBsQgmBsAVEDMAlgAAMIBz2XIA3hBIiWAFIh4WzIBkAgMA09AAAQgrtBo5nmQtzlBqPmbQAqh3hSi1IkhhuIAAFKQtdE3CXCfQn4hkguAfg");
	this.shape_5.setTransform(289.1,601.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("ArUMZIB42zICWgFIg3BBIhzWXgAvTLxIAZ3+IBVgrIAAZWgAK8HtIhuhGIjcBpIDWAoIgTAAQisAAh6gsQh5gsAAg+QAAg+B5gsQB6gsCsAAQCsAAB5AsQB6AsAAA+QAAA+h6AsQguAQg1ALQDFhPgagsQgvhXiPgcIBfB9IhMBxIgBAAQhPAPheACgAExF6IgoBuIBQAKICMg3IhkhLIAUgtgALzHeIAAhQIigg8g");
	this.shape_6.setTransform(302.5,645.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AnqT3IBz2XIA3hBIiWAFIh4WzIBkAgMglggAMQgVkDAmhsQAnhsgWlxQgVlxAQjyQAPjyAkgrIOYksIFelAIDpipQhQByIjK4IAAABQAuggH4BkQiXieNdk4IAAlKIEhBvQBSC0gqB3QKPGcNzFBQI5HmArNBgAs0lPIgZX+IBuAtIAA5VQhPgngWgWQARA/BUgCgANCOrIhzBLQBegBBPgPIAAgBIABAAIgBAAIBNhxIhfh9QCPAdAvBWQAaAtjFBOQA1gLAugQQB6gsAAg+QAAg+h6gsQh5gsisAAQisAAh6AsQh5AsAAA+QAAA+B5AsQB6AsCsAAIATAAIABAAIgBAAIjWgoIDchpgAtEm2QgDgKgBgLQgFACAAAFQAAAGAJAIIAAAAgAGPOmIAohuIBkg3IgUAtIBkBLIiMA3gALZMQICgA8IAABQgAtEm2IAAAAgAtNnEQAAgFAFgCQABALADAKQgJgIAAgGg");
	this.shape_7.setTransform(289.1,601.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},50).wait(85));

	// Mouth
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AHPhDIjSBBQiIgFh3A7QivhckdAqIC+hAIDhA8QB6AVB7hMIBzAKgAnOACQBXBcDkA/QBpAkDmgpQCSg5CBiiQiYhtjLAEIiqAZQjYgzhAA0QhBAzg3Bhg");
	this.shape_8.setTransform(245.8,453.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AnOAKIC+hAIDhA7QB6AXB7hNIByAKICWgUIjRBAQiIgFh3A8QivhbkdApg");
	this.shape_9.setTransform(245.8,453);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9999").s().p("AiTCdQjjg/hYhcQEdgqCvBcQB3g7CIAFIDRhBQiACiiTA5Qh6AWhWAAQhMAAgygRgAgvgCIjhg8Ii+BAQA3hhBBgzQBBg0DYAzICpgZQDMgECWBtIiWAUIhygKQhfA7hfAAQgbAAgcgEg");
	this.shape_10.setTransform(245.8,453.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("Am8AAQABgSAWgZQAsgvA3gSQCDguC7AAQC5AACEAuQCEAtAAA/QAABAiEAtQiEAui5AAQi7AAiDguQg3gSgsgvIgXgsQFIhfBGACQBEAADKAvQDMAuANACQgCACinAxQioAwjFgQQjHgRiYhEg");
	this.shape_11.setTransform(243.5,453);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhbBYQjHgSiYhDQFIhfBGABQBDABDLAvIDZAwQgCACinAxQh9AkiOAAQgwAAgygEg");
	this.shape_12.setTransform(243.3,452.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9999").s().p("AlDBtQg2gSgsgvIgXgsQCYBDDHASQDFARCogxQCngxACgCIjZgwQjLguhDgCQhGgBlIBfQABgSAWgZQAsguA2gTQCEguC7AAQC6AACDAuQCEAtAAA/QAABAiEAtQiDAui6AAQi7AAiEgugAm8AAIAAAAg");
	this.shape_13.setTransform(243.5,453);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("ADRAAQAACRg9BnQg9BnhXAAQhWAAg9hnQg9hnAAiRQAAiRA9hnQA9hmBWAAQBXAAA9BmQA9BnAACRg");
	this.shape_14.setTransform(242.1,475.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AiTD4Qg9hnAAiRQAAiQA9hoQA+hmBVAAQBWAAA+BmQA9BoAACQQAACRg9BnQg+BnhWAAQhVAAg+hng");
	this.shape_15.setTransform(242.1,475.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AnOACIC+hAIDhA8QB6AVB7hMIBzAKICWgUIjSBBQiIgFh3A7QivhckdAqgAHPhDQiYhtjLAEIiqAZQjYgzhAA0QhBAzg3BhQBXBcDkA/QBpAkDmgpQCSg5CBiig");
	this.shape_16.setTransform(245.8,453.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AEMgHIBEgYIB/gkQiYhtjLAEIiqAZQjYgzhAA0QhBAzg3BhQBXBcDkA/QBpAkDmgpQCSg5CBiigAD9gDQAEABAEABIAHgGIgPAEIAAABQhfgEhTABQgkAAgiACQgKACgNACQAuAEAvgKQA7gNB3APgAihAAIBygCQAPACAOABQhEALhLgMQiDgXiqAZg");
	this.shape_17.setTransform(245.8,453.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9999").s().p("AiTCdQjjg/hYhcIEtgCIktACIAEgBIAEAAIACgBQBUgLBLAAIAAAAIABAAQBFAAA8AKIACABIACAAIAFAAQAlAGAiAAIABAAIAAAAQAgAAAfgFIABAAIgdgDIhyACIgCgBQg8gKhFAAIgBAAIAAAAQhLAAhUALIgCABIgEAAIgEABQA3hhBBgzQBBg0DYAzICpgZQDMgECWBtIh+AkIhEAYIDCg8QiACiiTA5Qh6AWhWAAQhMAAgygRgAAIACQAiAAAigHIARAAIATAAIAAAAIABAAQA2AAA6ACIABAAIABAAIABAAIATAAIAGABIAAgBIAJACIAGgGIgPAEIgFAAIgCgBQg7gHgsAAIAAAAIgBAAQgmAAgaAGIgCAAIhHACIgXAEIADAAIAWABIABAAIAAAAgAhTAGQgiAAglgGIgFAAIgCAAIBygCIAdADIgBAAQgfAFggAAIAAAAIgBAAgAAHACIgWgBIgDAAIAXgEIBHgCQgiAHgiAAIAAAAIgBAAgAEGgBIgJgCIAPgEIgGAGIAAAAgAD3gDIgTAAIgBAAIgBAAIgBAAQg6gCg2AAIgBAAIAAAAIgTAAIgRAAIACAAQAagGAmAAIABAAIAAAAQAsAAA7AHIACABIAFAAIAAABIgGgBgABMgFIAAAAgAFQgfIB+gkIjCA8gAHOhDIAAAAg");
	this.shape_18.setTransform(245.8,453.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AIRgDQggBliTBFQiSBFjOAAQjPAAiThFQiShFgahlQAaheCShFQCThFDPAAQDOAACSBFQCRBEAiBZQgFABgDABQgTAGAbgCQj1B7kwAeQjjgUkZiFQD1htEPglQEcArEBBh");
	this.shape_19.setTransform(243.9,464.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AoQgDQD1htEPglQEcArEBBgIgIADQgTAGAbgCQj1B7kwAeQjjgUkZiFg");
	this.shape_20.setTransform(243.9,464.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF9999").s().p("AljCnQiThFgahlQEZCFDjAUQEwgeD1h7QggBliTBFQiSBFjOAAQjPAAiShFgAljimQCShFDPAAQDOAACSBFQCRBEAiBYQkBhgkcgrQkPAlj1BtQAaheCThFg");
	this.shape_21.setTransform(243.9,464.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.5,1,1).p("ACkgGIgEgDACiAEIgBgEIgBAAQAAABAAAAQAAACAAACIACACQABAAAAAAIABAAIAAgBIAAAAQAAABAAACIAAgDIgBgCACjAHQABABAAABACkAGQABgBABgBQgIByguBMQgvBQhDAAQhDAAgwhQQgUgigQhTIgMhNQAEgiAIgqQAQhTAUgiQAwhQBDAAQBDAAAvBQQAsBKAIBxQAAAFAAAEQAAACAAABg");
	this.shape_22.setTransform(236.2,448.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(0.5,1,1).p("ACSgcIAAAAQABACABACQABADABADQABACABACIABAAIABgBACSgcIACAEIACAHIABADACWgNIABgBIABAAACcgOQgBADgBACIAAAAIAAgCIgBgDACZgLQAAgCgBgBACXgSIgFgKACSgcQguC6hvArQhpgrgniuQgDghAuhNQAuhNBGADQBOAXBACVg");
	this.shape_23.setTransform(237.2,450.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AibgQQgDghAuhNQAuhNBGADQBOAXBACVQguC6hvArQhpgrgniugACZgLIABAAIAAACIgBgCgACagLIAAgBIAAADIAAAAgACagJgACagMIAAAAIAAADgACagMIAAAAIgBgCIABgBIAAADIACgCIgCAFIAAgDgACWgNIABgBIABAAIABADIgBAAgACZgLIgBgDIABAAIABADgACagLgACagLIgBgDIABACIAAABgACagMgACZgOgACUgYIACAGIAAABgACWgSIgCgGIgCgEIACAEIgCgEIAAAAIAFAKg");
	this.shape_24.setTransform(237.2,450.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9999").s().p("Ah1DCQgUgigQhTIgMhNQAEgiAIgqQAQhTAUgiQAvhQBEAAQBCAAAwBQQAsBKAHBxIgDgDIADADIABAJIgBABIgBAAIgBgEIgFgJIAAAAIABAEIADAGIAAAEIACACIABAAIABACIAAgBIACgEQgJBygtBMQgwBQhCAAQhEAAgvhQgAhmhsQguBNADAhQAnCvBpArQBvgsAui5QhAiWhOgWIgGAAQhCAAgsBJgACjgGg");
	this.shape_25.setTransform(236.2,448.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(0.5,1,1).p("AHqAAQAABAiQAsQiPAtjLAAQjKAAiQgtQiPgsAAhAQAAgBAAgBQAEg+CLgsQCQgsDKAAQDLAACPAsQCMAsAEA+QAAABAAABQjfA/kLAWQlNgJiShMQGhhmBEAoQE8gvCoBrAnfAAIgKgCIAGACAnpAAQADAAADAAQACAAACAA");
	this.shape_26.setTransform(246,456.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AnkgEQGhhmBEAoQE9gvCnBrIAAADQjfA/kKAVQlOgJiShMg");
	this.shape_27.setTransform(246.5,456.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF9999").s().p("AlaBsQiPgsAAhAIAGAAIAEAAIgEAAIgGAAIAAgCQAEg+CLgrQCQgtDKAAQDLAACPAtQCMArAEA+Qiohrk8AvQhEgomhBmIgKgCIAGACIgGgCIAKACQCSBMFNAJQELgWDfg/QAABAiQAsQiPAtjLAAQjKAAiQgtg");
	this.shape_28.setTransform(246,456.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AlagRQARABCOgBQBRgBBSgBQDcALCTgRIAEAHAlagRQAAgBAAgCQAAghBlgYQBmgYCPAAQCPAABmAYQBmAYAAAhQAAABAAABQAAABAAARQABARhUAmQhUAmiYAHQiXAHhtgWQhtgWgFhQg");
	this.shape_29.setTransform(244.1,460.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF9999").s().p("AjoBVQhtgWgFhQIABAAIAnABIAAAAIB3gBICjgCIAEAAQBTAEBKAAIAAAAIAAAAQByAABXgJIACgBIADAAIAEAHIAAASQABARhUAmQhUAmiYAHQgiACghAAQhtAAhUgRgACJgPQhKAAhTgEIgEAAIijACIh3ABIAAAAIgngBIgBAAIAAgDQAAghBlgYQBmgYCPAAQCPAABmAYQBmAYAAAhIAAACIgEgHIgDAAIgCABQhXAJhyAAIAAAAIAAAAgAFbgSg");
	this.shape_30.setTransform(244.1,460.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(0.5,1,1).p("AF9AAQAAA0hwAkQhvAkieAAQidAAhvgkQhwgkAAg0QAAgyBwglQBvgkCdAAQCeAABvAkQBwAlAAAygAkBgdQBfg3CcAXQEsgQAnBVQg5A5kDANQj5gWg8gQQg9gPBgg2g");
	this.shape_31.setTransform(242.8,460.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AksAkQg9gQBfg2QBgg3CcAYQErgRAoBWQg5A5kDANQj5gXg8gPg");
	this.shape_32.setTransform(243.6,460.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF9999").s().p("AkMBYQhwglAAgzQAAgzBwgkQBvgkCdAAQCeAABwAkQBvAkAAAzQAAAzhvAlQhwAkieAAQidAAhvgkgAkCgdQhfA2A9APQA9AQD4AWQEDgNA5g5QgnhWksARQgvgHgpAAQhgAAhEAng");
	this.shape_33.setTransform(242.8,460.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.5,1,1).p("AmvAJINfgR");
	this.shape_34.setTransform(246.2,451.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#330000").ss(0.5,1,1).p("AHrAAQAAAxiQAjQiPAkjMAAQjKAAiRgkQiPgjAAgxQAAgwCPgkQCRgjDKAAQDMAACPAjQCQAkAAAwgAm+AQQCVhIE+gNQDqAKCuA6QgBABgCACQhABTlZgHQiIANimggQiLgbgTgMQgEgCABgCg");
	this.shape_35.setTransform(247.5,450);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AkTA1QiMgbgTgMINegRIteARQgBgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQCVhIE+gNQDrAKCtA6IgDAEQhABTlZgIQgnAEgpAAQhoAAh1gXg");
	this.shape_36.setTransform(246.6,450.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF9999").s().p("AlaBVQiQgkAAgxQAAgxCQgjQCQgjDKAAQDLAACQAjQCQAjAAAxQAAAxiQAkQiQAjjLAAQjKAAiQgjgAm+AQQAAAAAAABQAAAAAAABQABAAAAABQABAAABABQATAMCMAbQClAgCIgNQFZAHBAhTIADgDQiug6jqgKQk+ANiVBIg");
	this.shape_37.setTransform(247.5,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_16}]},3).to({state:[{t:this.shape_18},{t:this.shape_17}]},5).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},9).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},15).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},13).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},20).to({state:[{t:this.shape_30},{t:this.shape_29}]},31).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},3).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},12).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},6).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},12).wait(1));

	//  Eyes
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(1,1,1).p("AoShWQgKgBgKgBQgWgCgVAAQgfAAgdAFQgKABgJACQgCABgBAAQgFABgEABQgKADgKAEQgVAIgTAMQhGAqgXA3QBQAdBTAJQAGABAFAAQABAAABAAQAEABAEAAQAAAAABAAQALAAAKAAQAtABAhgBQAMAAALgBQAHAAAGAAQAZgDAZgEQBMgLBPgaQhNhUhOgcQgcgIgbgFQgEAAgEgBgAnThIQgZgJgZgDQgGgBgHgBAomhVQBJBMhCBTQgFAFgFAGIAAABQALAAALgBQAHAAAHgBAoSBUQgBABAAAAAprAEQAAAJAQAEQAFAAAEgDQAEgDAAgDQAAgPgLAAQgPAAgDALgAqNhSQhLBWA8BKQADADACADAqMBVQAxAEAygDAI+hWQAhAFAYAHQgcgMgdgEIAAAEQBdBchdBUIA2gCQgcADgaABQgxACgugBQgFgBgGAAQABABAAAAIAKAAIBfgDIAAACAIShcIhCAPQgbAsgEAkQgBALABAKQADAfAWAbQAFAFAFAFQgKAAgLgBIAWACAH1AIQABAPAEACQABABAJAAQAJAAADgCQADgDAAgHQAAgIgFgCQgDgBgJAAQgEAAgCABQgDACgEACgAIShcQAYADAUADAI+haQgWgDgWABQg0ADg6AaQA1gVA5gIAJ3hKQB0AeBbBeQhuAbhkALAGkg/QgEACgBAAQAAAAgBAAQhdAngIBcQBAAQBGAFAHQhNIgsAO");
	this.shape_38.setTransform(238.8,312.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC99").s().p("AgBgKQADADAAAHQAAAHgCACIgBACQgBgLABgKg");
	this.shape_39.setTransform(282.4,313.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#330000").s().p("AH6BcIgKgKQgWgagDggIACgBQACgCAAgIQAAgHgEgDQADgkAcgrIBCgQIArAGQBeBcheBUIhfADIgKgBgAIiAEIgIAEQACAPADADQACABAJAAQAJAAADgDQACgCAAgIQAAgIgFgCQgCgBgKAAIgFABgApRBVIgWAAIgBAAIgHgBIgCAAIgFgGQg9hKBMhWIgBgDQAegFAfAAQAVAAAWACIgBAEQBJBLhCBTIgJALIgvAAIgfAAgApFAFQAAAJAPADQAGAAAEgCQAEgDAAgEQAAgPgMAAQgOAAgDAMg");
	this.shape_40.setTransform(235.1,312.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AHUBaIALABIgKAAIgBgBgAE5BEQAIhcBdgnIABAAIAFgCIAsgOQgbAsgEAkQgBALABAKQADAfAXAbIgMAJQhGgFhAgQgAI+hYQAhAFAYAHQB0AeBbBeQhuAbhkALIg2ACQBdhUhdhcgAofBIQBChThJhMIAAgDIAUACIAIABQAbAFAcAIQBOAcBNBUQhPAahMALIgyAHIgNAAIgXABIAKgLgAqhBRQhUgKhQgcQAXg3BGgqQATgMAVgIIAUgHIAJgCIADgBIATgDIAAADQhLBWA8BKIAFAGIgKgBgAH6AXQgEgCgBgPIAHgEIAGgBQAJAAADABQAFACAAAIQAAAHgDADQgDACgJAAQgJAAgBgBgAprACQADgLAPAAQALAAAAAPQAAADgEADQgEADgFAAQgQgEAAgJg");
	this.shape_41.setTransform(238.8,312.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#333333").ss(1,1,1).p("AnThIQgZgJgZgDQgGgBgHgBQghgEgeAAQgpAAgmAIQgCABgBAAQgFABgEABQgKADgKAEQgVAIgTAMQhGAqgXA3QBQAdBTAJQAHABAGAAQAEABAEAAQAAAAABAAQALAAAKAAQA+ABAngCQAHAAAGAAQAZgDAZgEQBMgLBPgaQhNhUhOgcQgcgIgbgFQgEAAgEgBAoTBVQAHAAAHgBAoSBUQgBABAAAAAr7AJQAAAJAQAEQAFAAAEgDQAEgDAAgDQAAgPgLAAQgPAAgDALgArAhIQCSA3hnBlAqMBVQA7AEA+gEAHrBaICJgCQhfAJhWgGgAIShcQA/AHAmALQgwgVg1ADIhbAYIgTAFQgEACgBAAQAAAAgBAAQhdAngIBcQBAAQBGAFAJ3hKQB0AeBbBeQhuAbhkALAGYAHQABAPAEACQABABAJAAQAJAAADgCQADgDAAgHQAAgIgFgCQgDgBgJAAQgEAAgCABQgDACgEACgAG3hEQC/A1iLBpAIShcQg0ADg6AaQA1gVA5gIg");
	this.shape_42.setTransform(238.8,312.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#330000").s().p("AHJA9QAIhcBdgnIABAAIAFgCIATgFQC/A1iLBpIgsABQhGgFhAgQgAIvgFIgHAEQABAOAEACQABABAJAAQAJAAADgCQADgDAAgHQAAgHgFgCQgDgBgJAAIgGABgAoRBKQhUgKhQgcQAXg3BGgqQATgMAVgIQCSA3hmBlIgNgBgAprAAQAAAJAQAEQAFAAAEgDQAEgDAAgDQAAgPgLAAQgPAAgDALg");
	this.shape_43.setTransform(224.4,313.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AGShDIBbgYQA/AIAmAKQB0AfBbBeQhuAbhkAKIiJADQCLhqi/g1gAqcBXIgVgBIgBAAIgIAAQBnhliSg3IAUgHIAJgCIADgBQAmgJApAAQAeAAAhAFIAIABQAbAEAcAJQBOAcBNBUQhPAZhMAMIgyAGIgNABIhFABIggAAgAF4AaQgEgDgBgPIAHgEIAGgBQAJAAADABQAFACAAAIQAAAIgDACQgDADgJAAQgJAAgBgBgAsgALQADgMAPAAQALAAAAAPQAAAEgEADQgEACgFAAQgQgDAAgJg");
	this.shape_44.setTransform(242.5,312.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(1,1,1).p("AnThIQgLgDgLgDQgRgEgQgDQgEAAgEgBQghgEgeAAQgpAAgmAIQgCABgBAAQgFABgEABQgKADgKAEQgVAIgTAMQhGAqgXA3QBQAdBTAJQAHABAGAAQAEABAEAAQAAAAABAAQALAAAKAAQA+ABAngCQAHAAAGAAQAGgBAGAAQAJgBAIgCQALgBAKgCQBMgLBPgaQhJhPhKgeQiABDBjBSAnThIQgZgJgZgDQgGgBgHgBAoSBUQgBABAAAAQAHAAAHgBAnAgGQgDAAgCAEQgBACAAABQAAAFADADQADAEAGAAQAEAAAFgDQAFgDAAgEQAAgCgGgDQgHgEgHAAgAnLhFQgEgBgEgCAqMBVQA7AEA+gEALBAEQgHACgBAEQgBABAAAGQAAAIADADQACAEAHAAQALAAAAgLQAAgDgFgHQgBgCgEgCQgEgCAAgBgAJ3hKQAPAEAPAFQBiAiBPBRQhSAUhMALQgaAEgaADQhfAJhWgGIC1gDAIShcQA/AHAmALQgwgVg1ADIhuAdQA1gVA5gIQg0ADg6AaQgEACgBAAQAAAAgBAAQhdAngIBcQBAAQBGAFAKUg/QhxBRCFA8");
	this.shape_45.setTransform(238.8,312.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#330000").s().p("AIPBIQiFg8BxhQIABgDQBiAiBPBRQhSAVhMALgAIgAFIgBAHQAAAHADAEQACADAHAAQALAAAAgLQAAgDgFgHIgFgEIgEgCQgHABgBAFgApjhLQBJAeBJBPQhPAahMALIgVAEQhjhTCBhDgApegIIgBAEQAAAEADAEQADADAGAAQAEAAAFgCQAFgEAAgDQAAgCgGgEQgHgEgHAAQgDAAgCAEg");
	this.shape_46.setTransform(254.1,313.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AF0BIQAIhdBegnIABAAIAFgCIBugdQA+AHAnALIAdAJIgBADQhwBQCEA8IABAEIg1AGIi0ADQhHgFhAgPgAo7BWIgWAAIgBAAIgHgBIgNgBQhUgJhPgcQAXg4BFgqQAUgMAVgIIATgGIAJgDIADAAQAmgJAqAAQAeAAAhAEIAHABIAiAHIAWAHIAIACQiBBDBkBTIgSACIgMABIgNAAIhFABIgfAAgAL2AeQgCgEAAgHIAAgHQACgFAGgCIAFADIAFAEQAEAHAAADQAAALgKAAQgHAAgDgDgAmHALQgDgEAAgFIABgDQABgEADAAQAHAAAHAEQAHADAAACQAAAEgGAEQgFACgEAAQgFAAgDgDg");
	this.shape_47.setTransform(232.9,312.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},14).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},15).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},21).wait(85));

	// sticker
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(1,1,1).p("AHUiOQhdBzBOBzIH+AAQBhhahhiMgAq+hRIARCNIghAAIgNg8IgQA+IgpAAIAdhCIgghRIArAAIAQA6IAAg2gAsnhaIAACjIhpAAIAAghIBCAAIAAghIgqAAIAAghIAkAAIAAghIg4AAIAAgfgAmrifIooAAQhCCaBKClIIwAAQBJiAhZi/gApWhWIAhAAIAdCXIgigHIgPhCIgLBGIgbAAIgZiUIAaAAIAYA1gAqyhNIAcgFIAaCOIgjACgAIJhXIEhA5QBFANgQgwIgKgbQBJAvgYAqQgNAVgrgGg");
	this.shape_48.setTransform(237.2,359.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AvLCgQhKikBCibIIoAAQBZC/hJCAgAuQBJIBpAAIAAijIhlAAIAAAfIA4AAIAAAhIgkAAIAAAhIAqAAIAAAhIhCAAgAo6A6IAiAHIgdiXIghAAIAAA1IgYg1IgaAAIAZCUIAbAAIALhGgAqyhNIATCLIAjgCIgaiOgAr3gEIgdBCIApAAIAQg+IANA8IAhAAIgRiNIgeAAIAAA2IgQg6IgrAAgAHFBXQhOhyBdhyIHvAAQBhCLhhBZgANOAMQArAFANgVQAYgphJgwIAKAcQAQAwhFgNIkhg5g");
	this.shape_49.setTransform(237.2,359.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AuOBTIAAghIBCAAIAAghIgqAAIAAghIAkAAIAAghIg4AAIAAgfIBlAAIAACjgAo4BEIgPhDIgLBHIgbAAIgZiUIAaAAIAYA1IAAg1IAhAAIAdCXgAqwhDIAcgFIAaCOIgjACgAsSBIIAdhDIgghQIArAAIAQA6IAAg2IAeAAIARCNIghAAIgNg8IgQA+gANQAWIlFhjIEhA5QBGANgQgvIgKgcQBJAvgZApQgKARgdAAIgRgBg");
	this.shape_50.setTransform(237,358.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(135));

	// nose
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#454545").ss(1,1,1).p("Ai8wCICqAAAidJ9QijB4gqDDQgDBQBsgeIBQhBIAyA3QBqBCB7g4IBLhBIBfBQQBhgcgHg5QAUgbjIjV");
	this.shape_51.setTransform(238.9,294.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF0000").ss(1,1,1).p("ADjhVQAZh1ibglQhlgZguBpIhaAAIAAjDIBQAFIAZBGIAUhBQCYATCOA4QBZB6gcBQIhxgSIhEgJIgIA4QjDgZi/AYQhpAlgGBvQgGBwCYCGAgPAtIjDAAQgbBkAbBkIClAAQhehBAEhpIBaAAgAgeFjQCfiYg3ieQB0AXgnhq");
	this.shape_52.setTransform(240.1,156.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AjIFjQiYiGAGhwQAGhuBpgmQC/gYDDAaQAnBph0gXQA3CeifCYgAgtD1QhehBAEhpIBaAAIAegeIjDAAQgbBkAbBkIClAAIAAAAgADjhVQAZh0ibgmQhlgZguBpIhaAAIAAjDIBQAFIAZBGIAUhBQCYAUCOA3QBZB7gcBPg");
	this.shape_53.setTransform(240.1,156.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhaBkQgbhkAbhjIDCAAIgeAeIhZAAQgEBoBdBBg");
	this.shape_54.setTransform(228.1,171.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]}).to({state:[{t:this.shape_53},{t:this.shape_54},{t:this.shape_52},{t:this.shape_51}]},50).wait(85));

	// Face
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#333333").ss(1,1,1).p("AGbS5QJUpEBCiPQBBiPAVjHQAWjHAGhnQAGhnAppeQhEn9vrgDQvqgDiMBJQiNBJhHAoQhHAoAxIWQAwIVBODvIBpELQMeVbJTpDg");
	this.shape_55.setTransform(237.6,393.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFCC99").s().p("AvWGhIhpkLQhOjvgwoVQgxoWBHgoQBHgoCNhJQCMhJPqADQPrADBEH9QgpJegGBnQgGBngWDHQgVDHhBCPQhCCPpUJEQixCsjDAAQnMgBoxvDg");
	this.shape_56.setTransform(237.6,393.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55}]}).to({state:[{t:this.shape_56},{t:this.shape_55}]},50).wait(85));

	// neck
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("ANgn3IAAIZQo7DIiMEOQkGhgkfAaQipkpkqjoIAAloQM3EEOIk0g");
	this.shape_57.setTransform(244.7,511.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFCC99").s().p("AmMGzQipkrkqjmIAAloQM3EDOIk1IAAIaQo7DIiMEOQkGhfkfAag");
	this.shape_58.setTransform(244.7,511.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57}]}).to({state:[{t:this.shape_58},{t:this.shape_57}]},50).wait(85));

	// cap
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#333333").ss(1,1,1).p("ARlFqQJCBWhfkHQhfkFrsjJQufjBs2CjQrVCqBmCnQBlCoC6gGQC/iuHwhjQHxhlM1CRQGFCSAzD9g");
	this.shape_59.setTransform(248.5,270.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("ARlFqQgzj9mFiSQs1iRnxBlQnwBji/CuQi6AGhlioQhminLViqQM2ijOfDBQLsDJBfEFQBHDGk2AAQhlAAiPgVg");
	this.shape_60.setTransform(248.5,270.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59}]}).to({state:[{t:this.shape_60},{t:this.shape_59}]},50).wait(85));

	// cap2
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF0000").ss(1,1,1).p("ASiAOIAEgFQBGg7AzhCQA0hCgPgjICbE8IAWA7IAAADA2jisIhRGGIDnitg");
	this.shape_61.setTransform(230.4,240.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#990000").s().p("A2hisICVDZIjnCtgAShAQIACgCIAEgFQBGg7A0hCQAzhDgPgiICbE8IAUA5Qg6gkkZhog");
	this.shape_62.setTransform(230.3,240.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61}]}).to({state:[{t:this.shape_62},{t:this.shape_61}]},50).wait(85));

	// top cap1
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#333333").ss(1,1,1).p("AZPGnQDIjhlLjDQyipyzlEnQliBUkKCKQk8DxIrCTQoZktOCi7IGkhGQMAgzLODZQLPDXgjE+g");
	this.shape_63.setTransform(245.6,261.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AOjhuQrOjZsAAzImkBGQuCC7IZEtQoriTE8jxQEKiKFihUQTlknSiJyQFLDDjIDhQAjk+rPjXg");
	this.shape_64.setTransform(245.6,261.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63}]}).to({state:[{t:this.shape_64},{t:this.shape_63}]},50).wait(85));

	// lentes
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF0000").ss(1,1,1).p("ABygmQCShiAslgQGuAxGPC4QEYCAgTGYIiiCvQ0Lm1yiHWIiWjaQALmWEgiRQE1ibHOgrQBlD/CpC5g");
	this.shape_65.setTransform(225.6,196);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#990000").s().p("A1zEPQALmWEgiRQE1icHOgqQBlD+CpC6ICpAAQCShiAslgQGuAxGPC3QEYCCgTGXIiiCvQ0Lm2yiHXg");
	this.shape_66.setTransform(225.6,196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65}]}).to({state:[{t:this.shape_66},{t:this.shape_65}]},50).wait(85));

	// cap3 top
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF0000").ss(1,1,1).p("AgphyILRA6QB2AUB7AaQESA3ElBTQgBADAVA3A3djcQgKBgAGBLQAKBsAuA/A3ODKQgBACgCADQgLASANgG");
	this.shape_67.setTransform(231.8,237.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("A3bL5IgBgNIgCgMQAKgRAegmIAMgPQg5hBgLh6QAAhIAEhFQADgtAFgrQANhZARheIANgpQApiABhhzQDDjVHCjPQEliGEtgFQGegHGxDuQLrGcALFzQgTFvgDBqQAAg/gCBDQgVg2ACAaIgBAAQkmhwkRg5Qh7gZh2gUIrRg6ImTAWQpIBJnIELIgCgQg");
	this.shape_68.setTransform(233.1,181.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67}]}).to({state:[{t:this.shape_68},{t:this.shape_67}]},50).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286.3,463.9,581.8,625.3);
// library properties:
lib.properties = {
	id: '576E529A8F4B4199A6B5B6236557CA03',
	width: 576,
	height: 720,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"sounds/blesswav.mp3?1525503432184", id:"blesswav"},
		{src:"sounds/hellowav.mp3?1525503432184", id:"hellowav"},
		{src:"sounds/quepasa2wav.mp3?1525503432184", id:"quepasa2wav"}
	],
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
an.compositions['576E529A8F4B4199A6B5B6236557CA03'] = {
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