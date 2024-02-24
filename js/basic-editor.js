// Code editor with live preview.
var basicEditor = {}

basicEditor.create = function($code = "") {

    //page.fit(1000);

    do { $code = $code.replace("&lt;", "<"); } while ($code.search("&lt;") != -1);
    do { $code = $code.replace("&gt;", ">"); } while ($code.search("&gt;") != -1);

    page.color = "black"

    basicEditor.box = createBox(0, 0, 1000, page.height)
    that.color = "black"
    that.scrollY = 1;
    that.center("left")

    // GROUP ALL
    startFlexBox({
        flexDirection: "row", // row, column
        flexWrap: "wrap", // wrap, nowrap
        alignContent: "flex-start", // flex-start, center, flex-end, space-between, space-around, stretch (up to down)
        justifyContent: "center", // flex-start, center, flex-end, space-between, space-around, space-evenly (left to right)
        alignItems: "flex-start", // flex-start, flex-end, center, baseline, stretch
    });
    //that.color = "blue";
    that.scrollY = 1;
    that.elem.style.paddingTop = "20px";

    // BOX: Preview container box.
    basicEditor.box.boxPreview = createBox(0, 0, 450, 450) //10 + basicEditor.box.left, 10, 450, 450
    //basicEditor.box.add(that);
    that.color = "white"
    that.round = 4;
    //that.element.style.position = "fixed";
    that.setMotion("top 0.2s");
    that.position = "sticky";
    /*
    window.top.document.addEventListener("scroll", function(event) {
        console.log("scroll");
    });
    */
   /*
    window.top.box.element.addEventListener("scroll", function(event) {
        //console.log(window.top.box.element.scrollTop);
        basicEditor.box.boxPreview.top = window.top.box.element.scrollTop;
        console.log(window.document.top);
    });
    */


    // BOX: code box
    basicEditor.box.boxEditor = createBox(0, 0, 530, "auto")
    //basicEditor.box.add(that)
    that.color = "black"
    //that.right = 0
    that.element.setAttribute("id", "editor1")
    that.element.setAttribute("class", "editor")
    that.clickable = 1;

    /*
    that.element.style.positon = "absolute"
    that.element.style.margin = "0px"
    that.element.style.borderRadius = "6px"
    that.element.style.fontSize = "11px"
    */

    // Code Editor
    editor1 = ace.edit("editor1");
    editor1.setReadOnly(false);
    editor1.setTheme("ace/theme/ambiance");
    editor1.session.setMode("ace/mode/javascript");
    editor1.setOption("minLines", 8);
    editor1.setOption("maxLines", 500);
    editor1.renderer.setShowGutter(false);
    document.getElementById("editor1").style.zoom = (1 / page.zoom)
    editor1.setValue($code);
    editor1.gotoLine(2);


        /*
        createBox();
        that.color = "yellow";
        that.width = 400;
        that.height = 400;

        createBox();
        that.color = "orange";
        that.width = 400;
        that.height = 1400;
        */

    endFlexBox();
    
    page.onResize(pageResized)

    basicEditor.runCodeAndRefresh()

    editor1.on("change", function() {
        basicEditor.runCodeAndRefresh()
    });

}

var pageResized = function() {
    
    //document.getElementById("editor1").style.zoom = (1 / page.zoom);
    basicEditor.box.height = page.height
    basicEditor.box.center("left")
    
}

basicEditor.runCodeAndRefresh = function() {
    
    try {

    basicEditor.box.boxPreview.html = ""
    //basicEditor.box.lblPrint.text = ""

    // LABEL: print preview
    basicEditor.box.lblPrint = createLabel(20, 20, "auto", "auto")
    //that.color = "grey";
    //that.top = 20;
    //that.left = 20;
    basicEditor.box.boxPreview.add(that);
    that.position = "absolute";
    //basicEditor.box.add(that)
    that.text = ""
    that.textColor = "#141414";
    that.spaceX = 8;
    that.spaceY = 2;
    that.color = "transparent";
    that.opacity = 0.6
    that.fontSize = 12
    that.textAlign = "left";
    that.setMotion("top 0.2s");
    //that.element.style.position = "fixed";
    //that.aline(basicEditor.box.boxPreview, "bottom", 10);

        var content = eval("editor1.getValue();")
        var runFunctionStr

        runFunctionStr = "function() { ;basicEditor.startFirst(); " + content + " ;window.onload(); }"
        
        //if (content.search("var start") != -1) {
            
            eval("var runFunction = " + runFunctionStr)
            runFunction()
            
        //} else {
            
            //print("start() is needed in your code.")
            
        //}
        
    } catch(e) {
        
        println("Error: " + e.message);
        
    }
}

basicEditor.startFirst = function() {

    setDefaultContainerBox(basicEditor.box.boxPreview);
    page = basicEditor.box.boxPreview;

}

basicEditor.changeCode = function($code) {

    editor1.setValue($code);

}

var println = function(message) {

    basicEditor.box.lblPrint.text = message + "<br>" + basicEditor.box.lblPrint.text
    basicEditor.box.lblPrint.color = "lightgray";
    
}

/*
console.log = function(message) {

    basicEditor.box.lblPrint.text = message + "<br>" + basicEditor.box.lblPrint.text
    
}
*/