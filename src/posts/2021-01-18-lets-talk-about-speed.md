---
title: "Let's talk about speed"
description: When people think of UX they think of content strategy and design. But what is equally as important is how fast your website loads.
category: Site Optimization
date: 2021-01-18T00:00:00Z
---

## When people think of UX, they think of content strategy and design. But what is equally as important is how fast your website loads. Let's talk about speed.

<img src="/assets/images/page-speed.jpg" width="500" height="600" alt="Let's talk about page speed" />

Before you begin reading, I should clarify that if you find this content similar to the documentation on page speed from [Web.dev](https://web.dev), that's because this post was initially transcribed, re-worded, and explained, and commented on that content. For full transparency, and not claiming that these are my ideas. Here's a list of the source material for this post

* [Why does speed matter?](https://web.dev/why-speed-matters/)
* [What is speed?](https://web.dev/what-is-speed/)
* [How to measure speed](https://web.dev/how-to-measure-speed/)
* [How to stay fast](https://web.dev/how-to-stay-fast/)
* [Measure performance with the RAIL model](https://web.dev/rail/)

Analyzing and transcribing documentation is fun to me! So enjoy reading something I have fun doing. 😃

<hr />


### What do we mean by speed?

To a regular user, measuring how fast a website load is a time from request to the page's rendering. However, a page loading isn't a single moment in time and a single metric can't measure a full experience and this experience. Page load is mesasured by a handful of metrics. The problem is a page can load quickly in all but one metric, and it'll be that one metric that determines its overall speed. 

The way we should think about speed is similar to [Cliff from Cheer's Buffalo theory](http://mjboesen.incolor.com/Literature/Buffalo_Theory.HTML). A website only moves as fast as its slowest metric.

Rather than measuring load with just one Google Network Metric, you should time each moment during the experience that affects the user's perception of load speed. When a user navigates to a web page, they're typically looking for certain types of feedback.

It's more important to know how the user experiences a web page request to understand these metrics.

* Did my request for the page go through?
* Has enough content loaded to inform the user their request is being fulfilled
* Can the user start interacting with the content?
* Is the user interaction pleasant, or is it slow or janky?

Here are the Google Network Metrics associated with each one of these questions.

* (Did my request for the page go through?) First Paint, First Contentful Paint
* (Has enough content loaded to inform the user their request is being fulfilled) First Meaningful Paint
* (Can the user start interacting with the content?) Time to Interactive
* (Is the user interaction pleasant, or is it slow or janky?) Cumulative Layout Shift

### Why is speed important?

Speed is one of the foundations of an exceptional user-experience; here are a handful of reasons why this is.

#### User retention

There is a stat floating around the web that states, "If your page takes longer than 3 seconds to load. You just lost a user."

Whether that is entirely true or not, there is some significant evidence supporting optimizing your site for speed can positively impact user retention. [Here's another statistic](https://medium.com/pinterest-engineering/driving-user-growth-with-performance-improvements-cfc50dafadd7)

"Pinterest reduced perceived wait times by 40% and this increased search engine traffic and sign-ups by 15%."

#### User experience

Forcing users to wait for a page load negatively impacts the user experience. The longer the user waits, the less likely, they will revisit your site or have the desire to navigation the site's pages. 

The leading cause of delays in a webpage getting the user's browser is the codebase size. Resources on the user's computer are tasked to request and download the webpage and render it in the browser - the larger the site, the more resources required to access it.

Those big flashy sites you know and love come at a cost. The more code to make a site fancy, the more resources your computer needs to render it on the page. It's a developer's job to balance out how a site is built regarding style and content.
 
### How to measure speed of a web page?

Google Development teams provides two ways to measure a web page's speed. 

* Lab data
* Field data

#### Lab Data

Lab data is the performance information collected within a controlled environment. You can use a tool like Google's Lighthouse to set specific network speeds and device types. With Lab data tools, you'll be given insights into debugging issues and provide suggestions for improvements. 

**Google's tool to study lab data:** [Google Ligthouse](https://developers.google.com/web/tools/lighthouse/)

#### Field Data

Field data captures data in real-world scenarios and connects with the business success of your site. The only drawback is that there isn't much information about improvements like the Lab Data provides.

**Google's tool to study field data:** [Chrome User Experience Report (CrUX)](https://developers.google.com/web/tools/chrome-user-experience-report/)

## How to maintain the speed our site?

Once you optimize your site for speed, it's easy to regress. The reason for the regression is that speed optimization isn't a one-and-done task. It's a continual process.

The best way to organize a speed optimization process is to create a performance budget for your website. 

Here's what [Google thinks what a good perforamnce budget looks like](https://web.dev/how-to-stay-fast/)

* Time To Interactive on slow 3G < 5 seconds
* First Contentful Paint on slow 3G	< 2 seconds
* Lighthouse performance score	> 80
* Total JavaScript size	< 170kb

To enforce the peformance budget you can use [Google's Ligthouse](https://developers.google.com/web/tools/lighthouse) performance tool to test the site regulary and when you intend on implementing any new changes.

## Performance models

A scientific way to building your understanding of something is to make it into a model. Well, the smart people at Google have done just that with performance. They call it **RAIL**, and it's a user-centric model that breaks down the user's experience into actions.

RAIL is an acronym for **Response, Animation, Idle, and Load**. Each one of these terms represents distinct aspects of the web cycle process. 

This model is based on who users perceive and interact with a website. UX researchers and engineers have broken down this perception and interaction into milliseconds, and it all starts with the user's requests and the fulfillment of that request. RAIL breaks down this process into **Goals** and **Guidelines**. 

* **Goals** metrics related to user experience

* **Guidelines** recommendations to achieve hitting those metrics

#### Response

**Budget:** 50 ms

**Goal:** complete the users request within 100 ms, making the request instantaneous

**Guidelines:** Make sure your website begins to be visible with in 100ms, use this 100ms to execute large tasks like clicking a shopping cart button, provide feedback when a task takes more than 50ms

**If the user is giving us 100ms why are we targeting 50ms?**

The answer is we have 50ms to take in the request, and 50ms to handle the request.

So if the user clicks a shopping cart button we have a total of 100ms to handle the process of the request. 


#### Animation

**Budget:** 10ms

**Goal:** Ensure that each frame runs 10ms or less. We know that the max budget is 16ms (1000ms / 60 frames per second = 16ms). However, browsers need to use that 6 ms to do the rendering of the frame. Believe it or not users will notice if the animation doesn't fall within in this budget, because it leads to janky animations. 

**Guidelines:** Since were dealing with a such a short amount of time its hard to change each individual frame. So you should be targeting [how the browser renders the animation](https://developers.google.com/web/fundamentals/performance/rendering).

#### Idle

**Budget:** use of idle time

**Goal:** Push the user to be idle on the site to maximize the time the code under the hood has to complete requests.

**Guidelines** Use idle time to load deferred [task like loading images](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/), if the user begings to interact with the site during an idel period than their interaction is ipso facto.

#### Load

**Budget:** 5 seconds

**Goal:** To make content available and interactive on the page within 5 seconds

**Guidelines** Design your site to load fast depending on device and network capabilities

I full-heartedly believe that this post won't do justice exploring the RAIL methodology. I think it's worth exploring this topic further in the future and applying it to developing sites. When I execute such a task, I'll be sure to share my finds. 