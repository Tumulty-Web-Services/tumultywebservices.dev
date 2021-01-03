---
title: What you need to know about Google's Core Web Vitals
description: Google has organized a set of metrics to help improve webpage performance and they are called the Core Web Vitals.
date: 2020-12-29T00:00:00Z
---

## Google has organized a set of metrics, the Core Web Vitals, to help developers create fast websites with fantastic user experience.

![Core Web Vitals](/assets/images/web-vital-metrics.jpg)

*Before you begin reading, the following article has two purposes, the first being to share with site owners how Google can help their site perform much better and the second as a way for me (Peter Tumulty) to learn more about these tools in-depth. This post is the first of many that will cover topics from [Web.dev](https://web.dev). If you want further elaboration on anything I write about in these articles, visit that site, that is where I am getting all the meat and potatoes for these articles.*

### Overview

Google has created a set of metrics, called the [Core Web Vitals](https://web.dev/vitals/), to simplify the landscape of web site performance. You don't have to be a web site performance expert to understand how to provide a quality experience to your users.

Historically, Google has always provided different tools and reports to measure website performance. However, some developers felt it was challenging to keep up with all the metrics and tools. So Google created the Web Vital initiative to provide a unified set of metrics to guide developers on building high-performance websites with excellent user experience.

### Break down of the Core Web Vitals

Google has broken down web vitals into three key metrics. These vitals apply to all web pages, and they represent a measurable aspect of how a user interacts with the page. The three metrics that makeup Core Web Vitals are subject to change. However, as of 2020, the three key areas they cover are loading, interactivity, and visual stability. 

* Google's loading performance metric measures the time it takes for your site to render the **[Largest Contentful Paint (LCP)](https://web.dev/lcp/)**, which should occur within **2.5 seconds upon request.**
* Google's interactivity metric measures the **[First Input Delay (FID)](https://web.dev/fid/)**, which is the time it takes for the user to first click on something, and it should occur within **100 milliseconds** (why does that seem crazy to me?)
* The final metric deals with the visual stability of a web page. It is called the **[Cumulative Layout Shift (CLS)](https://web.dev/cls/)**. This metric totals the time a visual element changes its position, and it should take **less than 0.1.**

It can be tough to get your website to perform well in these areas. However, **Google will consider the web page's high performance if it's at least in the 75th percentile of these metrics** across both mobile and desktop devices. Google provides tools to help you improve your site to make it more compliant with the Core Web Vitals metrics.

### How to measure the Core Web Vitals

Google believes that the Core Web Vitals are critical to all web experiences. As a result, it is committed to surfacing these metrics in all of its popular tools—here are a few tools you can use to measure the Core Web Vitals.

* **PageSpeed Insights:** is a [website that measures the contents of a web page](https://developers.google.com/speed/pagespeed/insights/) and makes suggestions for improvements. PageSpeed Insights is a pretty easy tool to get started with; all you need to do is put the URL in the form, click analyze, and wait for the results to come in.
* **Web-vitals JavaScript library:** this is a [library for coders who want to integrate Google Core Vitals into their application](https://github.com/GoogleChrome/web-vitals). This library is for developers building a web performance dashboard or in-house analytics tools. If you aren't a coder, I would stay away from this one, and call me if you have more questions.
* **Lighthouse:** is a [tool that comes bundled with Google Chrome Browser](https://developers.google.com/web/tools/lighthouse). It would help if you had some idea of how Chrome Developer Tools works to get it going, but even non-developers can easily pick up how to use this tool. I use this tool a lot when developing websites.

### These metrics go deeper and they are continually evolving

Using these tools and measuring your site against the Core Web Vitals, you'll soon discover that things go way deeper. Beyond the three metrics LCP, FID, and CLS, you'll discover these more metrics. The first one being [Time to First Byte](https://web.dev/time-to-first-byte/), which measures the time it takes the browser to receive the first byte of page content. There is also [Total Blocking Time](https://web.dev/tbt/), which is the total amount of time between FCP and TTI. The final additional metric is [Total Blocking Time (TBT)](https://web.dev/tti/), which is measures the time from when the page starts loading to when its main sub-resources have loaded. You can expect me to cover each one of these metrics more in-depth in the near future.

Speaking of the near future, I should close this post out by stating that Google has made it clear that these metrics are continually evolving, and this what users find important when interacting with a web page as of 2020, so who knows what will happen in 2021 and beyond. But, rest assured, I'll keep everyone abreast of these changes as they surface.