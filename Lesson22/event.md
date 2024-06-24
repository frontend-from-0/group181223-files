# `Event` object

### General Properties:

1. **`type`**: This tells you the type of event (e.g., "click", "keydown").

2. **`target`**: The DOM element that initiated the event.

3. **`currentTarget`**: The DOM element that the event is currently being handled by due to event bubbling.

4. **`bubbles`**: A boolean that indicates whether the event bubbles up through the DOM or not.

5. **`cancelable`**: A boolean that tells you if the event's default action can be prevented.

6. **`timeStamp`**: The time the event was created, in milliseconds.

### Mouse Events:

When you're dealing with mouse events like `click`, `mousedown`, `mousemove`, etc., you often use these:

1. **`clientX` / `clientY`**: The x/y coordinates relative to the viewport.

2. **`pageX` / `pageY`**: The x/y coordinates relative to the whole document, taking scrolling into account.

3. **`button`**: Indicates which mouse button was pressed.

### Keyboard Events:

For keyboard events like `keydown`, `keyup`, you might use:

1. **`keyCode`**: The Unicode character code of the key that triggered the event (deprecated but still widely used).

2. **`key`**: The name of the key (e.g., "ArrowUp", "a").

3. **`altKey`, `ctrlKey`, `shiftKey`, `metaKey`**: Booleans indicating whether these modifier keys were held down when the event was fired.

### Touch Events:

If you're into mobile or touch-based UI, you'd also encounter:

1. **`touches`**: A list of all the touch points currently in contact with the surface.

2. **`changedTouches`**: A list of touch points involved in the event.

3. **`targetTouches`**: A list of touch points on the event's target element.