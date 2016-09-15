// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function colorClick(e) {
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
}

document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function() {
      $('.color').on('click', colorClick);
      $('.size').on('click', sizeClick);
      $('.font').on('click', fontClick);
  });
  

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
   
  // chrome.tabs.executeScript(null,
	// {code:"$('body').css('background-color', '#FCFBE3');"})
   
})
