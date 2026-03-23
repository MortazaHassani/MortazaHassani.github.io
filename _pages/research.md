---
layout: page
permalink: /research/
title: "Research"
subtitle: "My work sits at the intersection of hardware security, embedded systems, and medical device protection."
label: "Research"
---

<div class="research-page-areas">

  <div class="research-area">
    <div class="research-area-label">
      <span class="icon">🏥</span>
      <h3>Medical Device Security</h3>
    </div>
    <div class="research-area-content">
      <h3>Securing Implantable Medical Devices</h3>
      <p>
        My primary research (NSF-funded, UMass Amherst VLSI &amp; Security Lab, advised by
        <strong>Prof. Wayne Burleson</strong>) targets the security of
        <strong>Implantable Neurostimulators</strong> — devices used for treating Parkinson's
        disease, epilepsy, and chronic pain. These devices communicate wirelessly and are
        vulnerable to Side-Channel Analysis (SCA), Electromagnetic Interference (EMI), and
        Man-in-the-Middle (MitM) attacks.
      </p>
      <p>My work involves:</p>
      <ul>
        <li>Hardware teardowns and security assessments of IoMT ecosystems</li>
        <li>JTAG/UART interface analysis for firmware extraction and reverse engineering</li>
        <li>Timing-based side-channel analysis of BLE pairing protocols</li>
        <li>Designing privacy-preserving hardware architectures compliant with GDPR and FDA standards</li>
        <li>AI-in-the-loop anomaly detection for real-time threat response</li>
      </ul>
    </div>
  </div>

  <div class="research-area">
    <div class="research-area-label">
      <span class="icon">🔐</span>
      <h3>Side-Channel Analysis</h3>
    </div>
    <div class="research-area-content">
      <h3>Power &amp; EM Side-Channel Attacks</h3>
      <p>
        Side-channel attacks exploit physical information leaked during cryptographic
        computations — power consumption, electromagnetic radiation, timing variations —
        to extract secret keys without breaking the algorithm mathematically.
      </p>
      <p>My research explores:</p>
      <ul>
        <li>Differential Power Analysis (DPA) and Correlation Power Analysis (CPA)</li>
        <li>Electromagnetic SCA using ChipWhisperer and custom setups</li>
        <li>Countermeasures: masking, hiding, and architectural-level protections</li>
        <li>AES-128 biclique cryptanalysis and hardware implementations</li>
      </ul>
    </div>
  </div>

  <div class="research-area">
    <div class="research-area-label">
      <span class="icon">⚙️</span>
      <h3>Secure SoC Design</h3>
    </div>
    <div class="research-area-content">
      <h3>RISC-V Based Secure SoC Frameworks</h3>
      <p>
        Modern SoCs integrate dozens of IP cores, creating a large attack surface.
        My research investigates architectural-level security for RISC-V SoCs,
        including hardware accelerators for cryptographic workloads and AI-in-the-loop
        security monitoring.
      </p>
      <ul>
        <li>RISC-V hardware threat modeling (fault injection, cache timing, pointer integrity)</li>
        <li>FPGA-based MitM sniffer for intercepting encrypted TPM-processor traffic</li>
        <li>Integrating UART, SPI, and I²C soft-core peripherals using LiteX</li>
        <li>Automated SoC build configuration and verification</li>
      </ul>
    </div>
  </div>

  <div class="research-area">
    <div class="research-area-label">
      <span class="icon">🔬</span>
      <h3>Cryptographic Hardware</h3>
    </div>
    <div class="research-area-content">
      <h3>Efficient Cryptographic Implementations</h3>
      <p>
        Hardware implementations of cryptographic primitives must balance security,
        performance, and area constraints — especially in resource-constrained embedded
        systems. My interests include:
      </p>
      <ul>
        <li>Lightweight ciphers (SPECK, GOST) for IoT devices</li>
        <li>Zero-Knowledge Proof systems and their hardware acceleration</li>
        <li>Block cipher analysis and cryptanalysis (AES biclique, GOST benchmarking)</li>
        <li>Hardware security modules and TPM interface security</li>
      </ul>
    </div>
  </div>

</div>

<hr>

<h2>Collaborations &amp; Funding</h2>

<div class="cv-section">
  <div class="cv-entry">
    <div class="cv-period">2025 – Present</div>
    <div class="cv-details">
      <h4>NSF-Funded Research — Implantable Neurostimulator Security</h4>
      <span class="cv-institution">VLSI &amp; Security Lab, UMass Amherst</span>
      <span class="cv-location">Amherst, MA, USA · Advisor: Prof. Wayne Burleson</span>
    </div>
  </div>
  <div class="cv-entry">
    <div class="cv-period">Mar–Aug 2025</div>
    <div class="cv-details">
      <h4>Visiting Research Scholar — Security of Medical Devices</h4>
      <span class="cv-institution">University of Massachusetts Amherst</span>
      <span class="cv-location">Amherst, MA, USA</span>
    </div>
  </div>
  <div class="cv-entry">
    <div class="cv-period">Apr–Jun 2024</div>
    <div class="cv-details">
      <h4>Research Intern — Offensive Tool Development for SoC Interfaces</h4>
      <span class="cv-institution">Lab-STICC – ARCAD, Université Bretagne Sud</span>
      <span class="cv-location">Lorient, France</span>
    </div>
  </div>
</div>
