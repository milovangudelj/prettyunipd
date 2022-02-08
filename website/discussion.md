Ok, so... I implemented a custom scrollbar in a project I'm working on, and everything was going great until I decided to implement a theme switch. 
This caused the scrollbar to not respond to theme changes since I am applying the `dark` class on a generic wrapper and obviously the browser scrollbar doesn't sit in there.
So now I have to find a way to apply the scrollbar styles inside that wrapper and not on the body element as I was doing previously.

How can I do this?

# What I've tried
- Adding `scrollbar` variant selectors in my `tailwind.config.js` through the plugins array
  <details>
  <summary><strong>Show details</strong></summary>
  <p>
  
  ```js
  /* tailwind.config.js */
  
  const plugin = require("tailwindcss/plugin");

  module.exports = {
    theme: {
      extend: {
        // ...
      },
    },
    plugins: [
      plugin(function ({ addVariant }) {
        addVariant("scrollbar", "&::-webkit-scrollbar");
        addVariant("scrollbar-track", "&::-webkit-scrollbar-track");
        addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb");
      }),
    ],
  }
  ```
  A little overkill maybe, but it works.
  
  This requires a second wrapper with width and height set to `screen` inside the 'theme controller' wrapper like this
  ```html
  <div class="dark">
    <div class="w-screen h-screen scrollbar:bg-gray-200">
      <p>Some long, overflowing content here...</p>
    </div>
  </div>
  ```
  and now I can apply dark mode styles on the scrollbar with no problem, I just need to prefix the `scrollbar` variant with `dark:` and I'm good to go.
  
  </p>
  </details>
  <p>

  But this has a drawback, that is, if you try to leverage the `hover` variant on the scrollbar track it would basically apply the hover styles while your mouse is on top the overflowing container and not just on the scrollbar itself.
  How do I fix this?

  </p>
- Expanding the utilities layer with scrollbar styles

  A different approach but the same outcome. The hover variant for the scrollbar track breaks
  <details>
  <summary><strong>Show details</strong></summary>
  <p>

  

  </p>
  </details>