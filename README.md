## Assignment explanation

### Install

`yarn` & `yarn dev`

### Visual slicing of layout

First thing I did was slice up the layout visually (just on a regular Figma board) to figure out the Flexboxes.

At first I thought CSS grid would be needed since the structure felt quite different between desktop/mobile, but then realized that almost all of it can be done with flexbox:

![](./public/images/brink-assignment-slicing.jpg)

### Numbering

The bottom part structure is a bit more tricky so I gave number to each sections to see how the would change in mobile:

![](./public/images/brink-numbering.jpg)

Note how item 3 is just a flex placeholder and that 4 and 5 switch flex direction. One could argue that CSS grid is better adapt for this by specifying grid-column-areas but personally I find simplicity of flexbox to allow for better flexibility.
