---
layout: page            # minima has 'page', 'post' and 'home' (home == blog index)
title: "Home"
permalink: /
---

# Lotus Oak Foundation
*Cultivating wisdom, technology, and culture for generations to come.*

<div class="btn-group">
  <a class="btn-primary" href="{{ '/vision/' | relative_url }}">Our Vision</a>
  <a class="btn-primary" href="{{ '/daf-explained/' | relative_url }}">What is a DAF?</a>
</div>

-- Website is in DRAFT FORM -- Not Final ! --


The oak stands firm,  
While the lotus blooms—it swiftly fades.

Endurance and ephemerality,  
A dance of strength and grace.

Neither wholly masculine nor feminine,  
Their virtues transcend boundaries.

Rooted in the wisdom of ages,  
East and West, ancient and modern,  
Echoing the eternal Tao.

## Our Mission

We blend traditional philanthropy with innovative social venture approaches, enabling projects in education, healthcare, environmental conservation, and other crucial impact areas to flourish. Our core mission is to address systemic challenges through collaboration, research-based solutions, and responsible stewardship of resources, ensuring the greatest possible impact on community well-being.

## Quick Links

- [Our Vision](/vision)
- [Meet the Team](/team)
- [How It Works](/how-it-works)
- [Investment Options](/investment-options)
- [Contact Us](/contact)

## Latest Updates

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

[View all posts](/blog) 