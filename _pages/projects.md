---
layout: page
permalink: /projects/
title: "Projects"
subtitle: "Selected hardware, security, and software projects."
label: "Projects"
---

<div class="projects-list">

  {% assign sorted_projects = site.projects | sort: "date" | reverse %}
  {% for project in sorted_projects %}
  <article class="project-row">
    <div class="project-row-main">
      <a class="project-title" href="{{ project.url | relative_url }}">{{ project.title }}</a>
      {% if project.excerpt %}
      <p class="project-desc">{{ project.excerpt | strip_html | truncate: 180 }}</p>
      {% endif %}
      {% if project.tags %}
      <div class="project-tags">
        {% for tag in project.tags %}
        <span class="tag tag-blue">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </div>
    <div class="project-row-links">
      <div class="project-links project-links--compact">
        {% if project.github %}
        <a href="{{ project.github }}" class="btn btn-secondary" target="_blank" rel="noopener">GitHub</a>
        {% endif %}
        {% if project.demo %}
        <a href="{{ project.demo }}" class="btn btn-secondary" target="_blank" rel="noopener">Demo</a>
        {% endif %}
        <a href="{{ project.url | relative_url }}" class="btn btn-primary">Details</a>
      </div>
    </div>
  </article>
  {% endfor %}

</div>
