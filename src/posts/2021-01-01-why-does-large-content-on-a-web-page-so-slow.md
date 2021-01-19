---
title: 'Why does large content on a web page load so slow?'
description: Measuring the time it takes for the web page's content to reach your eyes.
category: Browser Optimization
date: 2021-01-01T00:00:00Z
---

## From what I've gathered so far, Largest Conteful Piant is the time it takes for the web page's content to reach your eyes upon request.

<img src="/assets/images/lcp.jpg" width="500" height="600" alt="LCP" />

Before you begin reading, I should clarify that if you find this content similar to the documentation on Largest Contentful Paint from [Web.dev](https://web.dev), that's because this post was initially transcribed, re-worded, and explained, and commented on that content. For full transparency, and not claiming that these are my ideas. Here's a list of the source material for this post

* [Largest Contentful Paint](https://web.dev/lcp/)

Analyzing and transcribing documentation is fun to me! So enjoy reading something I have fun doing. 😃

<hr />

### Overview

Measuring the speed at which content is requested and rendered on the page is difficult. We measure with the Largest Contentful Paint metric the time it takes for the first images and text you see render on the page.

Developers did their best to measure that speed using JavaScript Web APIs such as window load event and DOMContentLoaded. However, those Web APIs weren't designed to make those measurements, leading to inaccurate results. Developers thought that Google's First Contentful Paint (FCP), a user-centric performance metric, could do the accurate measuring. However, this metric was designed to test only the very beginning of the loading experience. Thus, not giving developers the entire picture. They are a handful of other metrics still in use today, like First Meaningful Paint and Speed Index. Yet, they are confusing and aren't necessarily designed to answer how long it takes for the contents of a web page to load in the browser upon request. 

The best solution developers have to date to measure the speed at which the initial content hits the browser came from a discussion between [W3C Web Performance Working Group ](https://www.w3.org/webperf/) and research done by Google. The meeting concluded that it makes more sense to measure the largest pieces of initial content rather than worrying about every single piece of content.

### In comes Largest Contentful Paint (LCP)

The Largest Contentful Paint (LCP) is a metric developed by Google to measure the largest image or text block's render time.

Lighthouse and PageSpeed Insights both measure a webpage's LCP. And what matters to us is that we get our LCP load time below **2.5 seconds**. It's super hard, and I'll discuss how to optimize images and text to get that score in the article after this one.

#### So what is LCP exactly measuring?

If you're a non-coder, the answer is images, videos, background images, and text. 

If you know HTML and the basics of how the web works, then LCP measures the following: 

* ```<img>``` elements
* ```<image>``` elements
* ```<video>``` elements (the poster image is used)
* An element with a background image loaded via the ```url()``` function (as opposed to a CSS gradient)
* Block-level elements containing text nodes or other inline-level text elements children.

That is what we need to consider now, but in the future ```<svg>```, ```<video>``` will also be added to the list. 

### How are we measuring these items?

Plain and simple, what LCP is measuring is what the user sees immediately upon requesting the web page. For a web developer, it means what is visible to the user with the viewport. The viewport is the user's visible area of the webpage.

If, say, an image or a big block of text extends outside the user's visible area of the web page, those portions do not count toward the LCP measurement.

Often, site managers will upload a 4000px+ sized image without realizing that an image 1/4 that size will still look good on a webpage. Even more often, one of these large images is what users see when they visit a webpage, especially a marketing landing page. The LCP metric needs to consider these large images that pop and flash when the user lands on the page. So what LCP does is take into account the image size within the viewport or the natural size of the image (4000px+) and records the size of whichever image is smaller. In the future, it's good to know that this metric has our back for those lazy website managers who upload large images.

When it comes to text, the LCP metric only considers the size of the smallest area the text encompasses.

If you are a web developer and ask yourself how LCP measures CSS, the simple answer, it does not. Margins, padding, and borders aren't considered in the metric.

### Upon request, when is the LCP reported?

When the user asks for a web page, and the browser starts rendering the contents. Everything appears on the screen in stages. Since this is the case, there is a chance the largest element on the page might change.

The browser is ready for such a change. Built into the browser is a Web API called [PerformanceEntry](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry), which *encapsulates a single performance metric that is part of the performance timeline.*. This Web API identifies the LCP as soon as the browser begins to paint the first frame. After rendering a few frames, another PerformanceEntry is dispatched if the LCP changes. So we have these little Web APIs built into the browser to look for changes in the LCP.

**Burn it in your brain** An element is only considered an LCP once it's rendered and visible to the user. Images that aren't loaded aren't technically rendered and therefore aren't considered an LCP. The same goes for text and fonts. So when the page loads, a smaller element may be regarded as the LCP until a larger slow-moving hero image loads, then another PerformanceEntry is triggered, and the LCP is now that large hero image.

This firing of PerformanceEntry Web APIs and measuring the LCP stops as soon as the user interacts with the website (clicks a button, starts to scroll through the page, etc.).

## How does the LCP metric handle element layout and size changes handled?

For security reasons, the render timestamp of images is not exposed for cross-origin images that lack the ```Time-Allow-Origin``` header. ```Time-Allow-Origin``` is a little message passed between the server and the users browser that [enable retrieving and analyzing detailed network timing data regarding the loading of an application's resource(s)](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API). So, only their load time is exposed (since this is already exposed via many other web APIs).

The usage example below shows how to handle elements whose render time is not available. But, when possible, it's always recommended to set the ```Time-Allow-Origin``` header, so your metrics will be more accurate. 

To keep the performance overhead of calculating and dispatching new performance entries low, changes to an element size or position do not generate new LCP candidates. Only the element's initial size and position in the viewport is considered.

This means images that are initially rendered off-screen and then transition on-screen may not be reported. It also means elements initially rendered in the viewport that then get pushed down, out of view, will still report their initial, in-viewport size.

However, (as mentioned above) an element will be removed from consideration if it's removed from the DOM or its associated image resource changes.