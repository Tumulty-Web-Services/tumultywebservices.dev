---
title: 'How to paint a webpage faster?'
description: Measuring the time it takes for the web page's content to reach your eyes.
category: Browser Optimization
date: 2021-01-06T00:00:00Z
---

Waiting for a webpage to load is the worst. 

<!-- start transcribing here -->
First Contentful Paint (FCP) measures how long it takes for initial DOM content to render, but it does not capture how long it took the largest (usually more meaningful) content on the page to render.

Largest Contentful Paint (LCP) is a Core Web Vitals metric and measures when the largest content element in the viewport becomes visible. It can be used to determine when the main content of the page has finished rendering on the screen. 

The most common causes of a poor LCP are:

* Slow server response times
* Rendering-blocking JavaScript and CSS
* Slow resource load times
* Client-side rendering

### Slow server response times 

The longer it takes a browser to receive content from the server, the longer it takes to render anything on the screen. A faster server response time directly improves every single page-load metric, including LCP.

Before anything else, improve how and where your server handles your content. Use Time to Frist Byte (TTFB) to measure your server response times You can improve your TTFB in a number of different ways:

* Optimize your server
* Route users to a nearby CDN
* Cache assets
* Serve HTML pages cache-first
* Establih third-pary connections early
