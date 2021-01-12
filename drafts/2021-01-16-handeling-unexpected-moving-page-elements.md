---
title: 'Handeling unexpected moving page elements'
description: How to handle unexpected HTML element shifts and improving Google's Core Vital metric, Cumulative Layout Shift
category: Site Optimization
date: 2021-01-16T00:00:00Z
---

## Wait, I was about to click that, where did it go?

When elements on a webpage disappear or move place unexpectedly it can throw the user for a loop. For example, say your reading a blog article and then all of a sudden an advertisement pops up and throws the text you were reading off the screen? If you are like most people, you'll lose interest in what your reading. A trigger will go off in your brain saying there is something wrong with this site an inherantly the content. You lose trust with the site and don't go back.

How the content of a web page is displayed is just as important as the substance of the content. 

Google's mission is to index the worlds information, and as a bonus mission they want to organize valuable information over spam information. The Google Core Vital Metric, Cumulative Layout Shift (CLS), measures the stability of a web page's content by totaling how it shifts across the page's layout. However, any element that doesn't shift within 500ms of a users input won't be recorded. Overall, the CLS looks at how much content moves within a viewport and the distance that content moves.

Here are a handful of reasons elements shift unexpectedly, cause a poor CLS metrics

* Images without proper dimensions
* 3rd-party advertisements, embedded content, and iframes without dimensions
* Dynamic content Dynamically injected content
* Web fonts
* the relationship between network responses and DOM updating

### Images without proper dimension

It's a good rule to always include a ```width``` and a ```height``` attribute to an image or a video. Another good rule is to provide space around an element using aspect ratio boxes written in CSS. Following these two rules the browser can allocate the correct amount of space in the DOM while the image loads.

### A trip down memory lane...

Back when the internet was still young, web developers added ```width``` and ```height``` attributes to an ```<img>``` to allocate space on the page between the image started to render. The process of allocating space on the page beforehand was a way to minimize reflow and re-layout of the page.

Things changed with response web design hit the scene. Developer started to omit the ```width``` and ```height``` attributes from elements and began using CSS to resize images. They often would set the width of the image to ```100%``` in CSS so the image would automatically resize depending on the device.

The drawback to using CSS to set the image width/height is the page didn't have allocated space for the image to load once it started downloading. The browser wasn't able to determine the images dimensions. The reflow of the page would change a whole-hell-of-alot when the image finished downloading and appeared on the screen. The reflow would cause moving text and lead to a poor user experience.

**Aspect ratios come in to save the day...**

<!-- Continue transcription -->
This is where aspect ratio comes in. The aspect ratio of an image is the ratio of its width to its height. It's common to see this expressed as two numbers separated by a colon (for example 16:9 or 4:3). For an x:y aspect ratio, the image is x units wide and y units high.
<!-- End transcription -->

https://web.dev/optimize-cls/#modern-best-practice