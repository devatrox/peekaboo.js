peekaboo.js
===========

A lightweight slide-out widget

## Usage

Include the following in your HTML:

``` html
<link rel="stylesheet" href="peekaboo.css">
<link rel="stylesheet" href="themes/default/style.css"> <!-- This is optional but recommended -->
<script src='lib/jquery.min.js'></script>
<script src='lib/jquery.transit.min.js'></script>
<script src='jquery.peekaboo.min.js'></script>
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
  easing: 'ease',
  buttonText: '' // HTML works, too
})
```
