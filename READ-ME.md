I needed a way to display WooCommerce products in a slider. I was going to just grab a plugin, but I couldn't really find what I was looking for, and figured it was a bit of a heavyweight solution. I figured it should be pretty simple to just display everything I want in one long row, hide it behind its container element, and just adjust its position to display items.

It's a bit hacky. The advantage of going the plugin route was that it can probably pull more items in to populate the list, which has the advantage of, well, making more items available, and also meaning I don't load everything I want up front, but just maybe 6 items. However, as implemented, the list was always going to be limited to 12 items.

Figured the best way to move it was adjust the margin, and using jQuery to animate this margin change is trivial, as was triggering it by having an event listener on a button. I knew the problem was actually going to be limiting its movement, so you can't completely hide UL element which contains the products, and so it can be returned back to the start. 

The whole thing works of a simple IF operation, and the logic is based off two integers: 
- limitSelector: this starts at zero, and increments/decrements as the left/right buttons are pressed; 
- numberOfItems: this counts how many products there are (i.e. LIs in the UL)

The actual animation work is done by jQuery, which relies on:
- movementLimit: this looks at the first product/first LI within the product UL and checks its outerwidth; this is then subtracted from or added to the margin of the parent UL, moving everything left or right respectively.

The basic jist of it can be seen by looking at the listener on $("#top-category-wrapper .clickable-left-triangle"). It guards against going left if limitSelector is at 0 (i.e. if we're at position zero). Otherwise, it'll perform the animation, subtracting the outerWidth of the LI from the parent UL.

On the .clickable-right-triangle, the same basic thing is going on. However, the logic here is it counts up all the items and then subtracts the limitSelector (i.e. the position along in the list)  from that count. It won't go further if that number is less than 4. This number is hard-codeded. So, if there's 12 items, and you've pressed right 9 times (i.e. limitSelector is at 9), then you've got 12  minus 9 - the result being less than 4. As such, it won't perform the any more of that scrolling behaviour. Instead, the else comes into play: the marginLeft is reset to 0, and limit selector is reset to 0, and we're all back to the start again.

A short-coming here is that hardcoding of the limiter. Its job is to reflect how many items should be visible on the page (in this case, I had 3 products I wanted visible at any time, given the space available, hence the less-than-4 limiter). This whole thing could be wrapped up into a function so that it's passed that as an argument, if needed to be used more programmatically.
