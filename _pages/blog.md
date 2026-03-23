---
layout: page
permalink: /blog/
title: "Blog"
subtitle: "Technical articles, writeups, research notes, and guides."
label: "Blog"
---

{% assign sorted_posts = site.posts | sort: "date" | reverse %}

{% if sorted_posts.size > 0 %}
{% for post in sorted_posts %}
<div class="post-card">
  <div class="post-card-meta">
    <span class="post-card-date">{{ post.date | date: "%b %d, %Y" }}</span>
    {% if post.categories and post.categories.size > 0 %}
    <span class="post-card-category">{{ post.categories | first }}</span>
    {% endif %}
  </div>
  <div class="post-card-content">
    <a class="post-card-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    {% if post.excerpt %}
    <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
    {% endif %}
    {% if post.tags and post.tags.size > 0 %}
    <div class="post-card-tags">
      {% for tag in post.tags limit:4 %}
      <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
    {% endif %}
  </div>
</div>
{% endfor %}
{% else %}
<p>Articles and writeups will appear here. Topics will include hardware security, CTF writeups, embedded systems guides, and research notes.</p>
{% endif %}
