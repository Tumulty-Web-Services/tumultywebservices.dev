---
title: 'Let's talk about page speed'
description: Websites that 
category: Site Optimization
date: 2021-01-23T00:00:00Z
---

## When people think of UX they think of content strategy and design. But what is equally as important is how fast your website loads. Let's talk about speed

<img src="/assets/images/page-speed.jpg" width="500" height="600" alt="Let's talk about page speed" />

### What do we mean by speed?
To a regular user, measuring how fast a website load is a time from request to where the page is rendered. However,  a page loading isn't a single moment in time but a full experience, and this experience can't be measured by a single metric. A page can load quickly in all but one metric, and it'll be that one metric that determines its overall speed. 

The way we should think about speed is similar to [Cliff from Cheer's Buffalo theory](http://mjboesen.incolor.com/Literature/Buffalo_Theory.HTML). A website only moves as fast as its slowest metric.

Rather than measuring load with just one Google Network Metric, you should time each moment during the experience that affects the user's perception of load speed. When a user navigates to a web page, they're typically looking for certain types of feedback:

It's more important to know how the user experiences a web page request to understand these metrics.

* Did my request for the page go through?
* Has enough content loaded to inform the user their request is being fulfilled
* Can the user start interacting with the content?
* Is the user interaction pleasant, or is it slow or janky?

Here are the Google Network Metrics associated with each one of these questions

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

As you can see that big, flashy sites come at a cost. The more code to make a site fancy, the more resources your computer needs to render it on the page. It's a developer's job to balance out how a site is built regarding style and content.
 
### How to measure speed of a web page?

Google Development teams provides two ways to measure a web page's speed. 

* Lab data
* Field data

#### Lab Data

Lab data is the performance information collected within a controlled environment. You can use a tool like Google's Lighthouse to set specific network speeds and device types. With Lab data tools, you'll be given insights into debugging issues and provide suggestions for improvements. 

**Google's tool to study lab data: ** [Google Ligthouse](https://developers.google.com/web/tools/lighthouse/)

#### Field Data

Field data captures data in real-world scenarios and connects with the business success of your site. The only drawback is that there isn't much information about improvements like the Lab Data provides.

**Google's tool to study field data: ** [Chrome User Experience Report (CrUX)](https://developers.google.com/web/tools/chrome-user-experience-report/)

## How do maintain the speed our site?
https://web.dev/how-to-stay-fast/

## Some methodology
https://web.dev/rail/