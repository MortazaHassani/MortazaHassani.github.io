---
layout: page
permalink: /projects/
title: "Projects"
subtitle: "Selected hardware, security, and software projects."
label: "Projects"
---

<div class="projects-grid">

  {% assign sorted_projects = site.projects | sort: "date" | reverse %}
  {% for project in sorted_projects %}
  <div class="project-card">
    <div class="project-card-header">
      <span class="project-card-icon">{{ project.icon | default: "⚙️" }}</span>
      {% if project.status %}
      <span class="project-card-status">{{ project.status }}</span>
      {% endif %}
    </div>
    <div class="project-card-body">
      {% if project.tags %}
      <div class="project-tags">
        {% for tag in project.tags %}
        <span class="tag tag-blue">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
      <a class="project-title" href="{{ project.url | relative_url }}">{{ project.title }}</a>
      <p class="project-desc">{{ project.excerpt | strip_html | truncate: 150 }}</p>
      <div class="project-links">
        {% if project.github %}
        <a href="{{ project.github }}" class="btn btn-primary" target="_blank" rel="noopener" style="font-size:0.8rem;padding:0.375rem 0.75rem;">GitHub</a>
        {% endif %}
        {% if project.demo %}
        <a href="{{ project.demo }}" class="btn btn-secondary" target="_blank" rel="noopener" style="font-size:0.8rem;padding:0.375rem 0.75rem;">Demo</a>
        {% endif %}
        <a href="{{ project.url | relative_url }}" class="btn btn-secondary" style="font-size:0.8rem;padding:0.375rem 0.75rem;">Details →</a>
      </div>
    </div>
  </div>
  {% endfor %}

</div>
