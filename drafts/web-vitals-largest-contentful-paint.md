---
title: 'Based on my understanding of Google's Core Web Vitals. What is Largest Contentful Paint?'
description: Largest Contentful Paint is how Google's Core Web Vitals measure the time it takes for the content of a web page to come visible to the user.
date: 2020-01-01T00:00:00Z
---

## From what I've gathered so far, Largest Conteful Piant is the time it takes for the web page's content to reach your eyes upon request.

### Overview

Measuring the speed at which content is requested and rendered on the page is difficult. Were talking about the time it takes for you to put in the link of a webpage and how fast it gets to your browser. 

Developers did their best to measure that speed by using JavaScript Web APIs such as window load event and DOMContentLoaded. However, those Web APIs weren't designed to make those measurements and they lead to inaccurate results. Developers thought that Google's First Contentful Paint (FCP), a user-centric performance metric, could do accurate measuring, however this metric was designed to test only the very beginning of the loading experience. Thus, not giving developers the entire picture. They are a handful of other metrics that are still in use today like First Meaningful Paint and Speed Index, but they are a bit confusing, and necessarily designed to answer the question how long does it take for the contents of a web page to load in the browser upon request. 

The best solution developer have to date came about from discussions from the W3C Web Performance Working Group and research done by Google, which is let's not measure how long it takes content to hit the page, but measure how long the largest element takes to hit the browser.

### In comes Largest Contentful Paint (LCP)

The Largest Contentful Paint (LCP), is a metric developed by Google to measure the render time of the largest image or text block as seen by the user.

Ligthouse and PageSpeed Insights both measure a webpage's LCP. And what matters to us is that we get our LCP load time below **2.5 seconds**. It's super hard, and I'll discuss how to optimize images and text to get that score in the article after this one.

#### So what is LCP exactly measuring?

If your a non-coder the answer is images, videos, background images, and text. 

If you know HTML then LCP measures the following: 

* ```<img>``` elements
* ```<image>``` elements
* ```<video>``` elements (the poster image is used)
* An element with a background image loaded via the ```url()``` function (as opposed to a CSS gradient)
* Block-level elements containing text nodes or other inline-level text elements children.

That is what we need to consider now, but in the future ```<svg>```, ```<video>``` will also be added to the list. 

### How are we measuring these items?

Plain and simple, what LCP is measuring is what the user sees immediatly upon requesting the web page. For web developer, it means what is visible to the user with the viewport. The viewport is the user's visible area of the webpage.

If say an image or a big block of text extends outside the user's visible area of the webpage then those poritions do not count toward the LCP measurement.

Often times, site managers will upload 4000px+ sized image without realizing that an image 1/4 that size will still look good on a webpage. Even more often one of these large images is what users sees when they visit a webpage, especially a marketing landing page. The LCP metric needs to take into account these large images that pop and flash when the user lands on the page. So what LCP does is take into account the image size within the viewport or the natural size of the image (4000px+) and records the size of whichever image is smaller. In the future, it's good to know that this metric has our back for those lazy website managers who upload oversized images.

When it comes to text, LCP metric only considers the size of the smallest area the text encompasses.

If you are a web developer, and your asking yourself how LCP measure CSS, the simple answer it does not. Margins, padding, and borders aren't considered in the metric.

### Upon request, when is the LCP reported?

Web pages often load in stages, and as a result, it's possible that the largest element on the page might change. 

To handle this potential for change, the browser dispatches a ```PerformanceEntry``` of type ```largest-contentful-paint``` identifying the largest contentful element as soon as the browser has painted the first frame. But then, after rendering subsequent frames, it will dispatch another ```PerformanceEntry``` (Okay, so what is a performanceentry?) any time the largest contentful element chagnes. 

For example, on a page with text and a hero image the browser may initally just render the text-at which point the browser would dispatch a ```a largest-contentful-paint``` entry whose ```element``` property would likely reference a ```<p>``` or ```<h1>```. Later, once the hero image finished loading, a second ```largest-contentful-paint``` entry would be dispatched and its ```element``` propert would reference the ```<img>```.

<!--- Left off transcription --->

