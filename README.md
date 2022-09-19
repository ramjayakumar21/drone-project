# Prompt

You and your friends are developing a new start-up called DRUBER, a drone-based ride share application that carries you to your destination. The original specification was to develop a web page that works in 1920x1080 however your company has realized that it is missing an entire market of smartphone users. Describe how you can modify your code to work in smartphone resolutions e.g. 750x1334 (iPhone 8). Please give specific examples where possible, but do not implement an entire DRUBER clone!



# Answer
Just to preface, I only saw the email tonight (it was in my junk folder) so please excuse any jankiness.

To make an already existing desktop site fit on an iPhone 8, we will need to change how our website scales with the viewport, or the visible area of the web page. We can either make our site "adaptive" or change elements based on the window size, or "responsive" where the same layout is present on all devices.

First, we would need to make sure the browser is scaling the site with the viewport with the following meta tag:

`<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">`

Then, we would need to go through the CSS of the website, and make sure we are only using **fluid values** such as percentages instead of static values like pixels. Perhaps the most important action we would do however is use **CSS media queries**, which allow the site to render elements in a different manner based on factors like screen size or resolution. In this particular case, we could add the following CSS selector:



    @media only screen and (max-width: 750px) {
        // insert CSS for mobile elements here
    }

This adds a breakpoint that any viewports greater than 750px will and those less than it will override their original CSS. The site's live deployment uses all these features in action to allow the site to custom fit for an iPhone 8.

Ideally you would want to build up with mobile in mind as most users will be accessing from a phone, but with these few changes it should be usable.


