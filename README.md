peekaboo.js
===========

A lightweight slide-out widget

## Usage

Include the following in your HTML:

``` html
<link rel="stylesheet" href="peekaboo.css">
<link rel="stylesheet" href="themes/default/style.css"> <!-- This is optional but recommended -->
<script src='jquery.js'></script>
<script src='jquery.transit.js'></script>
<script src='jquery.peekaboo.js'></script>
```

Initalise the script:
``` javascript
// Simple
$('#widget').peekaboo();

// Advanced
$('#widget').peekaboo({
  y: 100,
  width: 400,
  position: 'left', // or 'right'
  startOpen: false,
  startDelay: 200,
  duration: 300,
  easing: 'ease'
})
```
