# CSS Variables
They are a powerful feature of CSS that allows you to define a value once and reuse it throughout your stylesheet. This can significantly simplify the management of your styles, especially when it comes to themes or repetitive values.

CSS variables are defined using the -- prefix. You can declare them globally in the :root selector (which represents the root element of the document, typically the <html> element) or locally within any selector. Once defined, you can access these variables using the var() function.

## Definition:
:root {
  --variable-name: variable-value;
}
## Usage:
.example-selector {
  color: var(--variable-name);
}

## Advantages of Using CSS Variables
- Maintainability: Change the value of a variable in one place, and it updates everywhere that variable is used.
- Readability: Variables can be given meaningful names, making your CSS easier to understand at a glance.
- Dynamic Manipulation: CSS variables can be changed at runtime using JavaScript, allowing for interactive themes and styles.

## Varibles are commonly used for:
- Colors
- Font Sizes and Families
- Spacing
- Border Radiuses
- Animation Durations and Timing Functions
- Responsive Breakpoints
