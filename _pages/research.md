---
layout: page
permalink: /research/
title: "Research"
subtitle: "Security of neural medical devices, secure SoC design, and hardware-level attack analysis."
label: "Research"
---

<div class="research-page-areas">

  <div class="research-area">
    <div class="research-area-label">
      <h3>Primary</h3>
    </div>
    <div class="research-area-content">
      <h3>Security of Neural Medical Devices</h3>
      <p>
        My primary research targets the security of implantable neurostimulators — devices used for treating
        Parkinson's disease, epilepsy, treatment-resistant depression, and chronic pain. These systems communicate
        wirelessly and present a critical attack surface: a compromised implant can directly threaten patient safety.
      </p>
      <p>
        I conduct hardware security assessments of these devices, analyze their communication protocols
        (BLE, proprietary RF), and develop countermeasures appropriate for power- and area-constrained
        implantable hardware.
      </p>
      <ul>
        <li>Hardware teardown and attack surface enumeration of IoMT devices</li>
        <li>JTAG/UART interface analysis for firmware extraction</li>
        <li>Timing-based side-channel analysis of BLE pairing protocols</li>
        <li>Privacy-preserving hardware architectures under GDPR and FDA frameworks</li>
      </ul>
    </div>
  </div>

  <div class="research-area">
    <div class="research-area-label">
      <h3>Hardware</h3>
    </div>
    <div class="research-area-content">
      <h3>Side-Channel Analysis</h3>
      <p>
        Side-channel attacks extract secret information from physical emissions during computation —
        power consumption, electromagnetic radiation, or timing variations — without breaking the
        underlying algorithm. I work on both attack methodology and hardware countermeasures.
      </p>
      <ul>
        <li>Differential and Correlation Power Analysis (DPA / CPA)</li>
        <li>Electromagnetic side-channel acquisition and analysis</li>
        <li>Countermeasures: masking, hiding, balanced logic styles</li>
        <li>ChipWhisperer-based evaluation of embedded cryptographic implementations</li>
      </ul>
    </div>
  </div>

  <div class="research-area">
    <div class="research-area-label">
      <h3>Architecture</h3>
    </div>
    <div class="research-area-content">
      <h3>Secure SoC Design</h3>
      <p>
        Designing security into a system-on-chip from the ground up rather than patching it afterwards.
        My work covers RISC-V based secure SoC architectures integrating hardware cryptographic accelerators
        and AI-assisted anomaly detection for embedded threat response.
      </p>
      <ul>
        <li>RISC-V hardware threat modeling: fault injection, cache timing, pointer integrity</li>
        <li>FPGA-based MitM interposer for TPM-to-processor traffic interception</li>
        <li>Soft-core peripheral integration via LiteX (UART, SPI, I²C)</li>
        <li>NSF-funded secure SoC research for implantable neurostimulators</li>
      </ul>
    </div>
  </div>

  <div class="research-area">
    <div class="research-area-label">
      <h3>Cryptography</h3>
    </div>
    <div class="research-area-content">
      <h3>Hardware Cryptography</h3>
      <p>
        Efficient and secure hardware implementations of cryptographic primitives for resource-constrained
        embedded systems, with emphasis on correctness under physical attack conditions.
      </p>
      <ul>
        <li>Lightweight ciphers for IoT: SPECK, GOST</li>
        <li>AES-128 biclique cryptanalysis</li>
        <li>Zero-knowledge proof hardware acceleration</li>
        <li>TPM interface security and firmware-level cryptographic protocols</li>
      </ul>
    </div>
  </div>

</div>

<hr>

<div class="cv-section">
  <div class="cv-section-title">Research Positions</div>
  <div class="cv-entry">
    <div class="cv-period">2025 – Present</div>
    <div class="cv-details">
      <h4>Graduate Research Assistant</h4>
      <span class="cv-institution">VLSI &amp; Security Lab · Advisor: Prof. Wayne Burleson</span>
      <span class="cv-location">NSF-funded · Implantable Neurostimulator Security</span>
    </div>
  </div>
  <div class="cv-entry">
    <div class="cv-period">Mar–Aug 2025</div>
    <div class="cv-details">
      <h4>Visiting Research Scholar</h4>
      <span class="cv-institution">Security of Medical Devices Group</span>
    </div>
  </div>
  <div class="cv-entry">
    <div class="cv-period">Apr–Jun 2024</div>
    <div class="cv-details">
      <h4>Research Intern — Offensive SoC Security</h4>
      <span class="cv-institution">Lab-STICC – ARCAD · Université Bretagne Sud · Lorient, France</span>
    </div>
  </div>
</div>
