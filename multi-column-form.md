# Multi-Column Form:

## What Does It Do?

Broadly, this website takes in information from the user. This information ranges from biographical to preferential, with some areas open to a more free form answer.

### What Interactive Elements Exist?

We've got a variety of interactive elements on the page.

* Text Entry Fields.
   * ex, first name, last name,
* Long Text Entry Fields.
   * Affiliation, biography, and comments
* A button!
   * just one, for submit
* pull-down menus.
   * Not sure what the wording is for those.


### How do you interact with them?

* Onclick!
   * Most of these seem to be on click, x,
   * on click elsewhere, revert to original style
* also, text entry!
* Also, dat pulldown menu!
   * That's on click, and then options
* button!
   * hover, changes color to slightly less blue
   * mouseOut/Mouseoff, color reverts


### What visual effects are produced by interacting?

* on click, text entry border goes from white to dark blue/purple
* on click, menu drops down.
* on click, form submits


## How does it accomplish these things?

* mostly using `addEventListener("click", fxn, true/false)`
* sometimes using `addEventListener("mouseOver/MouseOut", fxn, t/f)`

### What HTML elements are changed?

* on the template - not much. Maybe a ul/li's in the drop down, but I think those are embedded in the type of input.

### What new HTML elements are created?

* I dont' think a lot of HTML is changing here.

### What CSS styles are used to produce this effect?

* border-color, for certain.
* background-color for the button. also potentially a JS fxn for change.
