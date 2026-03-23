---
layout: page
permalink: /news/
title: "News & Updates"
subtitle: "Academic achievements, publications, talks, and other updates."
label: "News"
---

<div class="news-page-list">
  {% assign sorted_news = site.news | sort: "date" | reverse %}
  {% for item in sorted_news %}
  <div class="news-page-item">
    <div class="news-page-date">{{ item.date | date: "%b %d, %Y" }}</div>
    <div class="news-page-content">
      {% if item.tag %}<div class="news-tag {{ item.tag }}">{{ item.tag }}</div>{% endif %}
      <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
      {% if item.excerpt %}<p>{{ item.excerpt | strip_html | truncate: 200 }}</p>{% endif %}
    </div>
  </div>
  {% endfor %}
  {% if site.news.size == 0 %}
  <p>News items will appear here.</p>
  {% endif %}
</div>
