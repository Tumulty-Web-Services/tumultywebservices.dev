---
title: 'How to paint a webpage faster?'
description: Measuring the time it takes for the web page's content to reach your eyes.
category: Browser Optimization
date: 2021-01-06T00:00:00Z
---

## Waiting for a webpage to load is the worst.

*Before you begin reading, the following article has two purposes, the first being to share with site owners how Google helps them improve the performance of their website and the second as a way for me (Peter Tumulty) to learn these tools/metrics in-depth. This post is an analysis, re-wording, study, and interpretation of the article on [Web.dev](https://web.dev) [Optimize Largest Contentful Paint](https://web.dev/optimize-lcp/). I'm not trying to pass off their documentation as my own content. I'm a student of the web and these are my learnings.*

Some may think its important to consider how long it takes for a page to load, when trying to improve a web pages load speed. However, if you start digging around underneath the hood of a web page you'll soon discover its more important to look at the speed at which the largest piece of content (usually a banner image or video) to hit the page.

The Largest Contentful Paint (LCP) is the name of one of the Core Web Vitals provided by Google to measure when that largest piece of content renders in the viewport.  Assuming that the largest content by size is the most important, measuring the LCP can deteremine when the main contnet of the page has finished loading.

**Causes of slow LCP loading times**

* Server response time
* Loading JavaScript & CSS files that can break the flow of the page loading
* Site resources
* Items rendering only in the browser

### Server response time

The time it takes for the browser to request content from the server can impact on how fast the content reaches the viewport.

Google has labeled this process server-to-browser request for content, Time to First Byte, and this metric can be measured in different ways: 

* Make sure your not asking the server for crazy-large requests
* Serve static assest on a Content Delivery Network
* Set up headers to cache assets in the browser
* Make sure you allow HTML pages to cache in the browser
* Make sure if you are loading JQuery, Bootstrap.css, or Google Analytics on a page, they hit the browser first.

#### Server Optimization

Before we can optimize browser resources for performance, we need to optimize how these resources are being requested. So, does it take a long time for the server to return with the assets needed for the web page. You can generally know if it is taking a long time if you are staring a white screen with a loader icon in the browser tab. You won't even begin to see a spinning loader icon on the page. If the page resources are taking a long time coming from the server.

If you happen to know and work closesly with your site's backend engineer you may want to task them if there are complicated server-side operations for such and such a page. They might be able to tell you if your server requests aren't optimized for delivery.

Because if we want to optimize a web page's performance, we need to get the horse before the carriage. 

The page's resources must be hitting the browser in milliseconds before we can start desigining our web page to improve it's LCP.

Many Content Management Systems, like Wordpress, doesn't server up static pages (like the ones you built in high-school), but require server-side code to create web pages dynamically. To me, these CMS are like short-order cooks who put together your meal on request. 

The steps of this web page rendering process goes as followed: 

1. User requests a web page through the browser
2. The request is sent to the server
3. The server uses server-side code and complex logic to put the page's content together
4. The server then sends the results back the user's computer
5. The browser begins rendering the request on the screen.

Ensuring, that steps 2 and 3 are running smoothly is the first step in optimizing the LCP of a web page.

#### Using a Content Delivery Network (CDN)

A CDN is an inter-connected network of servers that are all located in different areas. If your site is hosted on one a CDN than your site is delivered to the user from a server that is potentially closer to the user. If a site is hosted on a single server than the user must be closer to the server to improve the request speed.

#### Caching Site Asseets

Many websites have a contact page that is some paragraphs of text and a form. Not much changes on this page. If your site has one of these pages, then its a good idea to store this page in server cache to reduce the Time To First Byte. 

You can also apply server caching by doing the following:
* Set up a reverse proxy to serve cached content and act as a middle man between the user and the server
* Cloud providers like Firebase, AWS, and Azure have settings for caching
* If you are using a CDN make sure that edge servers are provided. So you can save assets on a server closer to your user

#### Serve HTML pages cache-first

You can add an under-the-hood butler to your website, a small snippet of code that runs in the background and conduct how requests are intercepted and served, called a service-worker. You can use this service-worker to programmatically control cachine and make it possible for the page's HTML content render the same file again and again, and only update it when there is a change to the file.

#### Establishing third-party connections early 

Asking for resources from the server, as you can see its a pretty big job. And, by adding requests for resources from another server you are adding a new layer of complexity. To prevent from things getting further complicated you can set the link to that resource with "preconnect" or "dns-prefetch" relation value. In code it'll look something like thiss...

```
<head>
  …
  <link rel="preconnect" href="https://bootstrap-resource-CDN-link....">
  <link rel="dns-prefetch" href="https://some-resource-coming-from-a-3rd-party...">
</head>
```

The ```rel="preconnect"``` attribute will tell the servers to make this resource a priority and get it **As Soon As Possible.**

### Rendering blocking JS & CSS

The way the browser handles the loading of any page is that it starts with HTML first. It looks to the HTML to build out the structure of the page (and to create the DOM tree). However, this process stops when the parser encounters an external stylesheet or JavaScript.

These Scripts and stylesheets block the rendering of the resouces. This delays the First Content Paint, which by extension delays the Largest Contentful Paint. So the strategy to fix this issue is by setting a tag that will push any non-essential CSS and JS to the bottom of the page.

These are the three key ways to reduce the impact of render blocking CSS

* Minimize your CSS files

When a coder writes CSS they'll add spacing and indentation, and comments to make it easer to remove. However, these characters aren't necessary for parsers to understand. So you can set up a production-optimization tool to remove anything that makes CSS human-readable when sending it to your hosting. So when the parser reads your CSS its a giant single line of text.

* Optimize your CSS files 
  
  * Remove any unused CSS from the stylesheet
  * If CSS that is not need on one page, but needed on another, create a spearte CSS file and it it there.
  * Defer any unncessary CSS for initial rendering by loading the files one at a time using the rel="preload" attribute.

* Make any essential CSS load inside the HTML file and at the top

If there is some styling that needs to be loaded quickly and as soon as possible. Break it out of a style sheet and drop it in in the ```<head>``` tag. Inlining important CSS removes the server-request for this resource. 

* Reduce JavaScript blocking time

JavaScript makes web pages awesome! However, all that awesomeness comes at a cost. Reducing the amount of JavaScript you run on the page can result in better LCP times.

You would treat these JavaScript files the same as CSS files.

Make sure they are minimized, production-optimized (one line and no comments), and defer the unncessary stuff to the bottom, and use polyfills (bits of code that makes your JS adaptable to different browsers).

<!-- Begin transcription -->
### Slow Resource load times

Although an increase in CSS or JavaScript blocking time will directly result in worse performance, the time it takes to load many other types of resources can also affect paint times. The types of elements that affect LCP are:

JavaScript & CSS are too major factors the result in a worse LCP performance. However, its also important to know that some HTML elements do too.

* ```<img>``` elements
* ```<image>``` elements inside an ```<svg>``` element
* ```<video>``` elements

We can't live in a world without images or videos in a web page. So here area few ways to handle these elements to improve your LCP.

* Compress images
* Preload the sources for these elements
* Compress text files
* Cache theses assets using a service worker

#### Optimizing images 

Almost every website on the internet thats thats trying to market services uses large hero banner images to advertise. These banners are above the fold and the first thing the users sees.

These banner images are nice to see. However, they are the biggest factor of killing the LCP metric.

Here are a few tips on how to load that banner image without totally killing the page's LCP metric.
* Compress the image. Check out [Compressor.io](https://compressor.io) 
* Covert those images to a modern web-image format (JPEG 2000, JPEG XR, WebP)
*  Make sure these images are responsive
* Consider using a image optimization CDN service like [Cloudinary](https://cloudinary.com)
  
#### Preload these resources

Sometimes when a page loads you'll see a bit of text, but during the load process the font or the style of the text will change. That's because the text loaded first and the stylesheet or font library loaded after the text.

Thankfully, these is a way to priotrize a stylesheet or a font during the page load process. You can apply the ```rel="preload"``` attribute to the resource link to tell the browser, "hey, these are more important to load first before anything else."

**It'll look something like this in your code**

```<link rel="preload" href="style.css" as="style">```

#### Compress your resources

Another way to improve the request for resources to build a webpages is by compressing the files that are being request. You can reduce the size of your HTML, CSS, and JS files with two compression algorithms that are configurable with a web server. 

Two web server compression algorithms

1. **GZip compression**
2. **Brotli**

Configuring your web server to use these algorithms to compress resouces before sending them will minimize the size of each file. If the server sends a small file than the LCP metric improve.

There is some good news for site owners. Many hosting companies configure their web servers to use either GZip or Brotli already. However, if you need to configure the web server yourself it is recommended by Google to use [Brotli over GZip since it provides better ratios for compression](https://blog.bitsrc.io/gzip-to-brotli-better-frontend-load-performance-b2b4d8dbf60f). If you have to select o a compression algorithm yourself. Make sure sure the resources are compressed before hand and stored on the server. If you can't compress them before-hand. They'll be compressed on request and that adds another layer of complexity to request and can impact the time for the request to be fulfilled. 

#### Dynamically serve resources

To get better control of how assets are being served up, you can set up conditional requests for those resources. You would want to set up conditional requesting based on the users network speed or the type of their device.
When loading resources that make up the main content of a page, it can be effective to conditionally fetch different assets depending on the user's device or network conditions.

A real world example of this is if you have a large banner image for your marketing website and you want it to load without affecting your LCP. You can use conditional requests to ask for different sizes of the banner depending on the device viewport size or network type.

Baked into the browser are the following Web APIs to help you delegate requests depending on different screen size or network.

A list of useful properties that you can use:

* ```navigator.connection.effectiveType``` checks for connecton type
* ```navigator.connection.saveData``` checks if a data-saver  is enabled or disabled
* ```navigator.hardwareConcurrency``` checks the computer's CPU core count (wow that is some low-level information)
* ```navigator.deviceMemory``` checks what the memory of the current device

Its safe to say, that the browser has a lot of tools to learn about your computer.

#### In comes service workers...

We now know there are some Web APIs that can gain useful information about the users comptuer. And, we can use those Web APIs to dynamic serve resources depending on the users device or network. 

**But how do we actually use these Web APIs?**

We can use JavaScript to write what is known as a service worker. A service worker is a small script that handles tasks like caching static resources servering them up from the browser rather than the network, reducing the amount of requests to the server.

Service workers can also cache resources before the page finishes loading. When the user visits the web page again the time those resources take to load are drastically reduced. If you want to learn more about Service Wokers, I would checkout a [service worker library created by Google called Workbox](https://developers.google.com/web/tools/workbox).

### Asking for resources after the page loads (Client-side rendering)

A huge percentages of websites these days use JavaScript. You have heard of the JavaScript framework wars Facebook's React.js vs. Google's Angular.js. The benefit of building webpages using one of these frameworks allows you to handle different parts of the webpage using the browser instead of the server.

The drawback to using one of these JavaScript frameworks is that it can affect the LCP metric. Remember how we talked about how the size of the JS file can slow down your site. Well, if your webpage is built using a JS framework thats a lot of JavaScript.

There are a few ways to optimize your website if its using a JS framework

* As always, minimize your JS files
* Use server-side rendering (bring some of that JS could back into the server)
* Use pre-rendering. Accordign to [netlify.com](https://www.netlify.com/blog/2016/11/22/prerendering-explained/), "Prerendering is a process to preload all elements on the page in preparation for a web crawler to see it."

#### What's server-side rendering?

The goal of JavaScript is to use as little as possible. At the same time, JavaScript is taking over more responsiblity of building a website everyday. The use of JavaScript is a hard thing to manage for web developers.

When you start building a website minimizing JavaScript should be the goal. That's even more tough, if not impossible, when using a JavaScript framework. To help manage the amount of JavaScript rendered in the client you can also render some of the JavaScript on the server. Creating that dynamic between client and server side rendering can improve you LCP. 

What server-sider rendering does is generating a completed HTML page on the server first. Then the HTML page is sent to the browser upon request. Then the browser executes a process called hydration to add all the JavaScript and required data onto that page's DOM content.

This process can help improve the pages LCP metrics, but can cause errors in other areas such as: 

* Managing server-side and client-side rendered JavaScript is rough (Look for future posts on my experience in this area)
* The process of using JavaScript to build an HTML page first on the server will 100% increase the Time To First Byte metric.
* It can also increase the Time to Interactive metric, because you are seperating the process of building DOM elimates and setting up the JS code to make them interactive.

#### There is also pre-rendering...

<!--- Finish this last few paragraphs -->
https://www.netlify.com/blog/2016/11/22/prerendering-explained/#:~:text=Prerendering%20is%20a%20process%20to,web%20crawler%20to%20see%20it.

Pre-rendering is less complex that dividing up your sites code into client-side rendering and server-side rendering and its the process of building a static HTML page for every route. You'll run some JavaScript that will build each page and you'll hear people refer to this process as "build time". 

During this "build time" 

Pre-rendering is a separate technique that is less complex than server-side rendering and also provides a way to improve LCP in your application. A headless browser, which is a browser without a user interface, is used to generate static HTML files of every route during build time. These files can then be shipped along with the JavaScript bundles that are needed for the application.

With pre-rendering, TTI is still negatively impacted but server response times aren't as affected as they would be with a server-side rendering solution that dynamically renders each page only after it's requested.

<!--- End of last few paragraphs --->

### This was a long article. Why was it so long?

This article is long and if you got this point and followed along, thank you! The biggest take-a-way here is that there are plenty of ways to improve the LCP metric in Google. What is not a take-a-way is that I made up all this myself or these are my unique ideas. The content of this article is my understanding and intrepration of this documentation [Optimize Largest Contentful Paint](https://web.dev/optimize-lcp/), which I declare is the source material for this article. 


<!--- Run it through Grammarly --->