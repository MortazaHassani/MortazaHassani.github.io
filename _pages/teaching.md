---
layout: page
permalink: /teaching/
title: "Teaching"
subtitle: "Courses, workshops, and mentoring activities."
label: "Teaching"
---

<div class="teaching-list">

  <div class="teaching-card">
    <h3>ECE — Graduate Teaching Assistant</h3>
    <div class="role">Teaching Assistant</div>
    <div class="institution">University of Massachusetts Amherst · Amherst, MA, USA · 2025–Present</div>
    <p>Supporting graduate-level courses in the ECE department. Duties include holding office hours, grading assignments, and assisting with lab sessions. (Course details to be updated.)</p>
  </div>

  <div class="teaching-card">
    <h3>Google Developer Student Club (MAJU Chapter)</h3>
    <div class="role">Founder &amp; Lead</div>
    <div class="institution">Mohammad Ali Jinnah University · Karachi, Pakistan · 2022–2023</div>
    <p>Founded and led the Google Developer Student Club chapter at MAJU. Organized technical workshops, hands-on coding sessions, and speaker events covering web development, cloud computing, and machine learning for a community of 200+ students.</p>
  </div>

  <div class="teaching-card">
    <h3>IEEE Young Professionals — Technical Workshops</h3>
    <div class="role">Organizer &amp; Presenter</div>
    <div class="institution">IEEE MAJU Chapter · Karachi, Pakistan · 2021–2023</div>
    <p>Co-organized IEEE technical events and delivered presentations on embedded systems, FPGA design, and cybersecurity fundamentals to undergraduate engineering students.</p>
  </div>

  <div class="teaching-card">
    <h3>AI &amp; Machine Learning Mentoring</h3>
    <div class="role">Mentor &amp; Workshop Facilitator</div>
    <div class="institution">Samsung Innovation Campus · 2021</div>
    <p>Delivered training sessions on artificial intelligence and deep learning as part of the Samsung Innovation Campus AI programme. Achieved 1st position in the cohort's AI competition with an LSTM-based cryptocurrency price forecasting model.</p>
  </div>

</div>

{% assign sorted_teaching = site.teaching | sort: "date" | reverse %}
{% if sorted_teaching.size > 0 %}
<hr>
<h2>Course List</h2>
<div class="teaching-list">
  {% for item in sorted_teaching %}
  <div class="teaching-card">
    <h3>{{ item.title }}</h3>
    {% if item.type %}<div class="role">{{ item.type }}</div>{% endif %}
    {% if item.venue %}<div class="institution">{{ item.venue }}{% if item.location %} · {{ item.location }}{% endif %}{% if item.date %} · {{ item.date | date: "%Y" }}{% endif %}</div>{% endif %}
    {% if item.excerpt %}<p>{{ item.excerpt | strip_html }}</p>{% endif %}
  </div>
  {% endfor %}
</div>
{% endif %}
