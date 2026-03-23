---
layout: home
permalink: /
title: "Mortaza Hassani"
redirect_from:
  - /about/
  - /about.html
---

<section class="hero">
  <div class="hero-inner">
    <div class="hero-content">
      <h1 class="hero-name">Mortaza Hassani</h1>
      <div class="hero-cta">
        <a href="/research/" class="btn btn-primary">Research</a>
        <a href="/publications/" class="btn btn-secondary">Publications</a>
        <a href="/files/resume_MortazaHassani.pdf" class="btn btn-secondary" target="_blank" rel="noopener">CV</a>
      </div>
      <div class="hero-social">
        <a href="https://github.com/MortazaHassani" target="_blank" rel="noopener">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
        <a href="https://linkedin.com/in/MortazaHassani" target="_blank" rel="noopener">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
      </div>
    </div>
    <div class="hero-photo">
      <img src="/images/profile.jpg" alt="Mortaza Hassani" width="200" height="200">
    </div>
  </div>
</section>

<section class="home-section">
  <div class="home-section-inner">
    <div class="section-header">
      <h2 class="section-title">Research Interests</h2>
      <a href="/research/" class="section-link">More &rarr;</a>
    </div>
    <div class="research-keywords">
      <span class="kw">Neural Medical Device Security</span>
      <span class="kw">Implantable Neurostimulators</span>
      <span class="kw">Side-Channel Analysis</span>
      <span class="kw">Secure SoC Design</span>
      <span class="kw">Secure Embedded Systems</span>
      <span class="kw">Hardware Cryptography</span>
      <span class="kw">RISC-V Security</span>
      <span class="kw">Electromagnetic Analysis</span>
      <span class="kw">Fault Injection</span>
      <span class="kw">IoMT Security</span>
      <span class="kw">FPGA Security</span>
      <span class="kw">Reverse Engineering</span>
    </div>
  </div>
</section>

<section class="home-section-alt">
  <div class="home-section-inner">
    <div class="section-header">
      <h2 class="section-title">Latest Updates</h2>
      <a href="/news/" class="section-link">All updates &rarr;</a>
    </div>
    <div class="news-list">
      {% assign sorted_news = site.news | sort: 'date' | reverse %}
      {% for item in sorted_news limit:6 %}
      <div class="news-item-compact">
        <div class="news-date">{{ item.date | date: "%b %Y" }}</div>
        <div class="news-content-compact">
          {% if item.tag %}<span class="news-tag {{ item.tag }}">{{ item.tag }}</span>{% endif %}
          <p><a href="{{ item.url | relative_url }}">{{ item.title }}</a></p>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="home-section">
  <div class="home-section-inner">
    <div class="section-header">
      <h2 class="section-title">Selected Publications</h2>
      <a href="/publications/" class="section-link">All publications &rarr;</a>
    </div>
    <div class="pub-list">
      {% assign selected_pubs = site.publications | where: "selected", true | sort: "date" | reverse %}
      {% for pub in selected_pubs limit:4 %}
      <div class="pub-card">
        <div class="pub-meta">
          {% if pub.pub_type %}<span class="pub-type {{ pub.pub_type }}">{{ pub.pub_type }}</span>{% endif %}
          <span class="pub-year">{{ pub.date | date: "%Y" }}</span>
        </div>
        <div class="pub-title"><a href="{{ pub.url | relative_url }}">{{ pub.title }}</a></div>
        {% if pub.authors %}<div class="pub-authors">{{ pub.authors }}</div>{% endif %}
        {% if pub.venue %}<div class="pub-venue">{{ pub.venue }}</div>{% endif %}
        <div class="pub-links">
          {% if pub.paperurl %}<a href="{{ pub.paperurl }}" class="pub-link" target="_blank" rel="noopener">PDF</a>{% endif %}
          {% if pub.codeurl %}<a href="{{ pub.codeurl }}" class="pub-link" target="_blank" rel="noopener">Code</a>{% endif %}
        </div>
      </div>
      {% endfor %}
      {% if selected_pubs.size == 0 %}
      <p>Publications coming soon. <a href="/publications/">View all.</a></p>
      {% endif %}
    </div>
  </div>
</section>
