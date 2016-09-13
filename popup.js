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
  
  chrome.tabs.executeScript(null,
	{code:"var elems = document.body.getElementsByTagName('*')[1]; elems"}, 
		function(results){
			console.log(results);
			for (var i = 0; i < results.length; i++) {
				var elem = results[i].outerHTML;
				var re = ("<.+?>");
				var match = elem.match(re)[0];
				console.log(match);
			}
		}
	);
  /*var text="";
  if (window.getSelection) {
        text = window.getSelection().toString();
		console.log(text);
   }*/
})
