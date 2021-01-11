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

* Images that don't have a set ```width``` or ``height```
* 3rd-party advertisements, embedded content, and iframes without dimensions
* Dynamic content Dynamically injected content
* Web fonts
* the relationship between network responses and DOM updating


https://web.dev/optimize-cls/