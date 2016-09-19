// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/*function colorClick(e) {
  chrome.tabs.executeScript(null,
      {code:"$('body').css('background-color', '#" + e.toElement.dataset.color + "');"});
     // {code:"document.body.style.backgroundColor='#" + e.target.id + "'"});
  //window.close();
}

function sizeClick(e) {
	chrome.tabs.executeScript(null,
		{code:"$('body').css('font-size', '" + e.toElement.dataset.size + "');"});
}

function fontClick(e) {
	chrome.tabs.executeScript(null,
		{code:"$('body').css('font-family', '" + e.toElement.dataset.font + "');"});
}*/

var checked = true;

// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;

// Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {
  var srcElement = e.srcElement;

  // Lets check if our underlying element is a DIV.
  if (srcElement.nodeName == 'DIV' && checked) {

    console.log("Highlighting.");
    // For NPE checking, we check safely. We need to remove the class name
    // Since we will be styling the new one after.
    if (prevDOM != null) {
      prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
    }

    // Add a visited class name to the element. So we can style it.
    srcElement.classList.add(MOUSE_VISITED_CLASSNAME);

    // The current element is now the previous. So we can remove the class
    // during the next iteration.
    prevDOM = srcElement;
  } else {
    console.log("Not highlighting.");
  }
}, false);

$(window).keypress(function(e) {
  console.log(e.keyCode);
  if (e.keyCode == 96) checked = !checked;
});