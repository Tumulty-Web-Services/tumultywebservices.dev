---
title: 'How to paint a webpage faster?'
description: Measuring the time it takes for the web page's content to reach your eyes.
category: Browser Optimization
date: 2021-01-06T00:00:00Z
---

## Waiting for a webpage to load is the worst.

*Before you begin reading, the following article has two purposes, the first being to share with site owners how Google can help their site perform much better and the second as a way for me (Peter Tumulty) to learn more about these tools/metrics in-depth. This post is an analysis and re-explaining of the article on [Web.dev](https://web.dev) [Optimize Largest Contentful Paint](https://web.dev/optimize-lcp/).*

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

#### Rendering blocking JS & CSS

The way the browser handles the loading of any page is that it starts with HTML first. It looks to the HTML to build out the structure of the page (and to create the DOM tree). However, this process stops when the parser encounters an external stylesheet or JavaScript.

These Scripts and stylesheets block the rendering of the resouces. This delays the First Content Paint, which by extension delays the Largest Contentful Paint. So the strategy to fix this issue is by setting a tag that will push any non-essential CSS and JS to the bottom of the page.

These are the three key ways to reduce the impact of render blocking CSS

* Minimize your CSS files

<!-- Start Transcript -->
When a coder writes CSS they'll add spacing and indentation, and comments to make it easer to remove. However, these characters aren't necessary for parsers to understand. So you can set up a production-optimization tool to remove anything that makes CSS human-readable when sending it to your hosting. So when the parser reads your CSS its a giant single line of text.
<!-- End Transcript -->

* Optimize your CSS files 
<!-- Start Transcript -->
Use the coverage tab in Chrome DevTools to find any unused CSS on your web page. 

To optimize:

* Remove any unused CSS entirely or move it to another stylesheet if used on a seperate page of your site. 
* For any CSS not needed for inital rendering, use loadCSS to load files asynchronously to load files asynchronously, which leverages rel="preload" and "onload".
<!-- End Transcript -->

<!-- Start Transcript -->
* Make any essential CSS load inside the HTML file and at the top

Inline any critical-path CSS used fo above-the-fold content by including them directly in the <head>. 

Inlining important styles eliminates the need to make a round-trip request to fetch critical CSS. Deferring the rest minimize CSS blocking time. 

If you cannot manually add inline styles to your site use a library to automate the process. Some Examples

* Ciritical, CriticalCSS, and Penthouse are all packages that extract and inline-above the fold CSS
* Critters is a webpack plugin that inlines critical CSS and lazy-loads the rest.
<!-- End Transcript -->

Left off here... https://web.dev/optimize-lcp/#reduce-javascript-blocking-time
