---
title: 'Why do page elements move all of a sudden?'
description: Have you ever scrolled through a webpage to find that elements move unexpectedly? Google measures that with the Cumulative Layout Shift.
category: Site Optimization
date: 2021-01-13T00:00:00Z
---

## Have you scrolled through a page or clicked a button and it unexpectedly moves?

<img src="/assets/images/janky-webpage.jpg" width="500" height="600" alt="janky webpages" />

*Before you begin reading, the following article has two purposes, the first being to share with site owners how Google helps them improve the performance of their website and the second as a way for me (Peter Tumulty) to learn these tools/metrics in-depth. This post is an analysis, re-wording, study, and interpretation of the article on [Web.dev](https://web.dev) [Cumulative Layout Shift (CLS)](https://web.dev/cls/). I'm not trying to pass off their documentation as my own content. I'm a student of the web and these are my learnings.*

That unexpected move can either be just annoying or something worse.

Before we find out which one it is, let's examine why the unexpected movement of elements on a web page occurs. When unexpected movements occur, new elements are being created dynamically, or resources are asynchronously loaded and just hitting the page. Images with unknown dimensions, min-sized fonts, or a widget that dynamically resizes can also be the causes of elements unexpectedly moving on a web page.

It's hard for developers to see how users interact with their websites. Often images are in their browser's cache, and locally ran API calls are much faster than ones served up on a website accessed by a user across the country.

The way to solve unexpected shifts in elements that might occur for real users is to use one of Google's Core Vital Metrics, Cumulative Layout Shift (CLS).

### Cumulative Layout Shift is...

The Google Core Vital metric, Cumulative Layout Shift (CLS), is the total of all occurrences of a shift of a visible element from one rendered frame to the next.

This movement of an element from one frame to another is called a layout shift.

#### Scoring a CLS

Sites should not have any layout shifts if they want to provide a user with an exceptional experience. The goal here is not to have any elements that move unexpectedly. When you run your site through Google Page Speed Insights, the CLS score should be less than .0.1 for mobile and desktop layouts.

### How do these shifts occur

When a shift occurs, it is identified by the [Layout Instability API](https://wicg.github.io/layout-instability/)(a web API baked into the browser). It looks for any time an element is within the viewport and changes its start position. The Layout Instability API is an element place fact-checker for your webpage.

If you're asking, what if an element shifts its position based on an incoming element's placement? Will that shift affect the CLS? The answer is no.



**How are these shifts scored?** The score is calcualted by taking into account the viewport size and the movement of the unstable element(determined by the Layout Instability API) between two rendered frames. The results are the product of that movement (the impact fraction * distance fraction).


#### Impact fraction 

The impact fraction looks at how much space the unstable takes up in the viewport.

The equation [looks something like this](https://www.stanventures.com/blog/cumulative-layout-shift/#:~:text=Impact%20Fraction%20of%20CLS,viewport%20area%20between%20two%20frames)...

```impact fraction = [impact region]/[viewport]```

#### Distance fraction

The second part of the CLS equation is determining the distance fraction. The distant fraction measures the distance an element moves within the viewport.

The equation looks like this...

```distance fraction = [distance it moved]/[the dimensions of the viewport]```


### Not all layout shifts are bad

The layout shift it happens at random and throws off the user experience. Many common layout shifts occur due to the user interacting with the page. Clicking a link or a button will trigger a layout shift. Google thinks these layout shifts are okay, since they are based on the user rather than something unexpected.

A common example is when a user requests a resource that takes a while to get. Its good practice to show a loading indicator while this request is being made. If the user doesn't realize that the webpage is working in the background they might click on something else. If they click on some random part of the screen while its loading this could cause unexpected behavior and affect the CLS metric.

There is a method called ```handRecentInput``` that [is a part of the Layout Instability API](https://wicg.github.io/layout-instability/#dom-layoutshift-hadrecentinput), which is sort of a saftey net for interactive elements. If the user interacts with an element within 500 millisecods then the ```handRecentInput``` will throw up a flag telling the CLS to ignore this layout shift.

### What about CSS transitions and animations?

Animations and transitions, when done well, are a great way to update content on the page without surprising the user. Content that shifts abruptly and unexpectedly on the page almost always creates a bad user experience. But content that moves gradually and naturally from one position to the next can often help the user better understand what's going on, and guide them between state changes.

CSS animations and transitions can drastically improve the user experience of web page -- if done well. Animations and transitions that move naturally and gradually from one part of the page to the other can guide users through the information flow of the page. 

However, if not done well animations are transitions can negatively impact the CLS metric. 

When adding a transition use [CSS ```transform``` property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform), because it won't trigger a layout shift.


<hr />

There are many tactics and tools to optimize pages for unexpected layout shifts. I'll cover them in the next post.

<sup>As I mentioned before, I am studying Google's [Web.dev](https://web.dev) documentation to understand how to make high performing web pages. These posts are my way to making sense of the documentation. Please do to think that I am passing this content off as something from the top of my brain or from my personal experience. I am not siting the content of this article as my own work. This content is a study on the documentation provided by Google. I have about 11 more articles studying Google's documentation. Then I'll switch gears and start writing more unique content.</sup>
