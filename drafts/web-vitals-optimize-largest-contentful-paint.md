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

A Content Delivery Network (CDN) is a network of servers distributed in many different locations. If the content on your web page is being hosted on a single server, your website will load slower for users that are geographically farther away because their browser requests literally have to travel around the world. Consider using a CDN to ensure that your users never have to wait for network requests to farawayservers.

### Caching Site Asseets

If your HTML is static and doesn't need to change on every request, caching can prevent it from being recreated unncessarily. By storing a copy of the generated HTML on disk, server-side caching can reduce TTFB and minimize resource usage. 

Depending on your toolchain, there are many different ways to apply server caching: 

* Configure reverse proxies (Varnish, nginx) to serve cached content or act as a cache server when installed in front of an application server

* Configure and manager your cloud provider's (Firebase, AWS, Azure) cache behavior

* Use a CDN that provides edge servers so that your content is cached and stored closer to your users.

https://web.dev/optimize-lcp/

Left off on Server HTMl pages cache-first