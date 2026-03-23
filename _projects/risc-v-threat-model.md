---
title: "RISC-V Hardware Threat Modeling"
date: 2024-03-01
icon: "⚙️"
status: "Complete"
tags: [RISC-V, Threat Modeling, Security, Hardware]
excerpt: "Comprehensive threat model for RISC-V microarchitectures covering fault injection, cache-timing vulnerabilities, and pointer integrity attacks."
---

This project develops a **systematic hardware threat model** for RISC-V based processor architectures, identifying and categorizing security vulnerabilities across the hardware stack.

**Threat categories analyzed:**
- **Fault Injection Attacks:** Voltage glitching, clock glitching, laser fault injection
- **Cache Timing Attacks:** Prime+Probe, Flush+Reload on RISC-V cache hierarchies
- **Pointer Integrity Vulnerabilities:** Stack overflow, use-after-free exploitation
- **Side-Channel Leakage:** Power and EM analysis of RISC-V cryptographic workloads
- **Debug Interface Abuse:** JTAG security and firmware extraction

**Output:** Threat model documentation, attack surface analysis, and proposed countermeasure recommendations.
