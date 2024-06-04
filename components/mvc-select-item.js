/* Bismillah */

/*

UI COMPONENT TEMPLATE
- You can customize, this template code as you need:


Started Date: April 2024 (v4.24)
Developer: Bugra Ozden
Email: bugra.ozden@gmail.com
Site: https://bug7a.github.io/


EXAMPLE: {javascript-mobile-app-template}/comp-name.htm


*/

// DONT USE
"use strict";
ItemSelectModel = function(params = {}, params2 = {}) {

    // Default values
    const defaults = {
        left: 0,
        top: 0,
        position: "absolute",
        width: 200,
        height: 50,
        border: 0,
        round: 4,
        color: "red", //whitesmoke
        selectedColor: "#FFF0C2",
        placeHolder: "Search",
        selectedIndex: -1,
        autoResize: 0,
        itemList: [],
        onChange: function() {},
        //onClick: function() { alert("test") },
        clickable: 1,
    };

    const model = Model(params, defaults);
    return model;

};

ItemSelectView = function(style = {}) {
    const view = View(model.style);
    return view;
};

const ItemSelect = (params = {}) => {

    const model = ItemSelectModel(params);
    const view = ItemSelectView(model.style);

    const me = Controller();

    // BOX: Component container
    const box = startBox();

    // Default values
    const defaults = {
        left: 0,
        top: 0,
        position: "absolute",
        width: 200,
        height: 50,
        border: 0,
        round: 4,
        color: "red", //whitesmoke
        selectedColor: "#FFF0C2",
        placeHolder: "Search",
        selectedIndex: -1,
        autoResize: 0,
        itemList: [],
        onChange: function() {},
        //onClick: function() { alert("test") },
        clickable: 1,
    };

    box.props(defaults, params);

    // *** Private variables:
    let privateVar = "";
    let isFirstCreate = 0;

    // *** Public variables:
    box.publicVar = "";

    // *** Private functions:
    const privateFunc = () => {};

    // *** Public functions:
    box.publicFunc = () => {};

    // Set a param after created.
    box.setColor = (color) => {
        box.color = color;
    };
    // USAGE: get: componentName.color, set: componentName.setColor("red")

        // *** OBJECT TEMPLATE:
        box.setMotion("opacity 0.2s");
        
        // BOX: Cover.
        /*
        box.boxCover = Box(0, 0, box.width, box.height);
        that.color = box.coverBackgroundColor;

        // ICON: Logo image.
        box.imgLogo = Icon();
        that.width = 50;
        that.height = 50;
        that.load(box.waitingIconFile);
        that.opacity = 1;
        that.center();
        */

    endBox();

    // *** OBJECT INIT CODE:
    box.left = 0;
    box.top = 0;
    
    makeBasicObject(box);
    return box;

};