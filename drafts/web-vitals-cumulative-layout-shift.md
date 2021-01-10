---
title: 'Why Your Company Needs An API'
description: Create a unique experience for your customers with a company API.
category: APIs
date: 2021-01-13T00:00:00Z
---

## Have you scrolled through a page or clicked a button and it unexpectedly moves?

![janky webpages](/assets/images/janky-webpage.jpg)

*Before you begin reading, the following article has two purposes, the first being to share with site owners how Google helps them improve the performance of their website and the second as a way for me (Peter Tumulty) to learn these tools/metrics in-depth. This post is an analysis, re-wording, study, and interpretation of the article on [Web.dev](https://web.dev) [Cumulative Layout Shift (CLS)](https://web.dev/cls/). I'm not trying to pass off their documentation as my own content. I'm a student of the web and these are my learnings.*

That unexpected move can either be really annoying or something worse.

Before we find out which one it is, lets take a look at why unexpected movement of elements on a web page occur. The reason why unexpected movements occur because either new elements are being created dynamically or resources are asychornously loaded and its just hitting the page.Images with unknown dimensions, min-sized fonts, or a widget that dynamically resizes can also be the causes of elements unexpectedly moving on a web page.

Its hard for developers to see how users interacts with their websites. Often times images are in their browser's cache, and locally ran API calls are much faster than ones served up on a websites accessed by a user across the country.

The way to solve unexpected shifts in elements that might occur for real users is to use one of Google's Core Vital Metrics, Cumulative Layout Shift (CLS).

### Cumulative Layout Shift is...

<!-- start transcribing -->
CLS measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.

A layout shift occurs any time a visible element changes its position from one rendered frame to the next. (See below for details on how individual layout shift scores are calculated.)
<!-- end of transcription -->


https://web.dev/cls/