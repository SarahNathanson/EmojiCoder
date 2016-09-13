// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function colorClick(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  window.close();
}

function sizeClick(e) {
	chrome.tabs.executeScript(null,
		{code:"document.body.style.fontSize='" + e.target.id + "'"});
	window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var colorDivs = document.querySelectorAll('div.color');
  for (var i = 0; i < colorDivs.length; i++) {
    colorDivs[i].addEventListener('click', colorClick);
  }
  
  var sizeDivs = document.querySelectorAll('div.size');
  for (var i = 0; i < sizeDivs.length; i++) {
    sizeDivs[i].addEventListener('click', sizeClick);
  }
  
  /*var text="";
  if (window.getSelection) {
        text = window.getSelection().toString();
		console.log(text);
   }*/
})
