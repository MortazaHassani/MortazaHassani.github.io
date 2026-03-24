---
layout: page
permalink: /publications/
title: "Publications"
subtitle: "Research papers, theses, and technical reports."
label: "Publications"
---

{% assign journals     = site.publications | where: "pub_type", "journal"    | sort: "date" | reverse %}
{% assign conferences  = site.publications | where: "pub_type", "conference" | sort: "date" | reverse %}
{% assign theses       = site.publications | where: "pub_type", "thesis"     | sort: "date" | reverse %}
{% assign preprints    = site.publications | where: "pub_type", "preprint"   | sort: "date" | reverse %}

{% if theses.size > 0 %}
<div class="pub-list" style="margin-bottom:2rem">
  {% for pub in theses %}
  <div class="pub-card">
    <div class="pub-meta">
      <span class="pub-type thesis">Thesis</span>
      <span class="pub-year">{{ pub.date | date: "%Y" }}</span>
    </div>
    <div class="pub-title"><a href="{{ pub.url | relative_url }}">{{ pub.title }}</a></div>
    {% if pub.authors %}<div class="pub-authors">{{ pub.authors }}</div>{% endif %}
    {% if pub.venue %}<div class="pub-venue">{{ pub.venue }}</div>{% endif %}
    <div class="pub-links">
      {% if pub.paperurl %}<a href="{{ pub.paperurl }}" class="pub-link" target="_blank" rel="noopener">PDF</a>{% endif %}
      {% if pub.slidesurl %}<a href="{{ pub.slidesurl }}" class="pub-link" target="_blank" rel="noopener">Slides</a>{% endif %}
      {% if pub.codeurl %}<a href="{{ pub.codeurl }}" class="pub-link" target="_blank" rel="noopener">Code</a>{% endif %}
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}

{% if journals.size > 0 %}
<div class="pub-list" style="margin-bottom:2rem">
  {% for pub in journals %}
  <div class="pub-card">
    <div class="pub-meta">
      <span class="pub-type journal">Journal</span>
      <span class="pub-year">{{ pub.date | date: "%Y" }}</span>
    </div>
    <div class="pub-title"><a href="{{ pub.url | relative_url }}">{{ pub.title }}</a></div>
    {% if pub.authors %}<div class="pub-authors">{{ pub.authors }}</div>{% endif %}
    {% if pub.venue %}<div class="pub-venue">{{ pub.venue }}</div>{% endif %}
    <div class="pub-links">
      {% if pub.paperurl %}<a href="{{ pub.paperurl }}" class="pub-link" target="_blank" rel="noopener">PDF</a>{% endif %}
      {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" class="pub-link" target="_blank" rel="noopener">DOI</a>{% endif %}
      {% if pub.codeurl %}<a href="{{ pub.codeurl }}" class="pub-link" target="_blank" rel="noopener">Code</a>{% endif %}
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}

{% if conferences.size > 0 %}
<div class="pub-list" style="margin-bottom:2rem">
  {% for pub in conferences %}
  <div class="pub-card">
    <div class="pub-meta">
      <span class="pub-type conference">Conference</span>
      <span class="pub-year">{{ pub.date | date: "%Y" }}</span>
    </div>
    <div class="pub-title"><a href="{{ pub.url | relative_url }}">{{ pub.title }}</a></div>
    {% if pub.authors %}<div class="pub-authors">{{ pub.authors }}</div>{% endif %}
    {% if pub.venue %}<div class="pub-venue">{{ pub.venue }}</div>{% endif %}
    <div class="pub-links">
      {% if pub.paperurl %}<a href="{{ pub.paperurl }}" class="pub-link" target="_blank" rel="noopener">PDF</a>{% endif %}
      {% if pub.slidesurl %}<a href="{{ pub.slidesurl }}" class="pub-link" target="_blank" rel="noopener">Slides</a>{% endif %}
      {% if pub.codeurl %}<a href="{{ pub.codeurl }}" class="pub-link" target="_blank" rel="noopener">Code</a>{% endif %}
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}

{% if preprints.size > 0 %}
<div class="pub-list" style="margin-bottom:2rem">
  {% for pub in preprints %}
  <div class="pub-card">
    <div class="pub-meta">
      <span class="pub-type preprint">Preprint</span>
      <span class="pub-year">{{ pub.date | date: "%Y" }}</span>
    </div>
    <div class="pub-title"><a href="{{ pub.url | relative_url }}">{{ pub.title }}</a></div>
    {% if pub.authors %}<div class="pub-authors">{{ pub.authors }}</div>{% endif %}
    {% if pub.venue %}<div class="pub-venue">{{ pub.venue }}</div>{% endif %}
    <div class="pub-links">
      {% if pub.paperurl %}<a href="{{ pub.paperurl }}" class="pub-link" target="_blank" rel="noopener">PDF</a>{% endif %}
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}

{% if site.publications.size == 0 %}
<p>Publications will be listed here. Check back soon.</p>
{% endif %}
