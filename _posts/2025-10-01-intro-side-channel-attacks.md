---
layout: post
title: "A Practical Introduction to Side-Channel Attacks on Embedded Systems"
date: 2025-10-01
categories: [security, hardware]
tags: [side-channel, power analysis, ChipWhisperer, cryptography, embedded security]
excerpt: "Side-channel attacks bypass cryptographic algorithms entirely by exploiting physical information leaked during computation — power consumption, timing, EM radiation. This post walks through the fundamentals with practical examples."
---

When we think about breaking cryptography, we usually imagine mathematical attacks — finding weaknesses in the algorithm itself. But many real-world attacks don't break the math at all. Instead, they listen to what the *hardware* tells them.

**Side-channel attacks** exploit physical information *leaked during computation*: power consumption, electromagnetic emissions, timing variations, even acoustic noise. The algorithm might be mathematically perfect — but its *implementation* betrays the secret.

## Why Side-Channel Attacks Matter

Consider AES-128, one of the most widely deployed symmetric ciphers. No known practical mathematical attack exists against it. Yet, a ChipWhisperer setup costing ~$200 can extract an AES key from a microcontroller in minutes using **Correlation Power Analysis (CPA)**.

This is the gap that hardware security research addresses: the difference between *algorithm security* and *implementation security*.

## The Three Main Side Channels

### 1. Power Analysis

Every computation consumes power. In CMOS circuits, power consumption depends on the data being processed — specifically on **bit transitions** (0→1 or 1→0 consume more power than staying the same).

The **Hamming Weight** model approximates power consumption as proportional to the number of 1-bits in intermediate values. This creates a statistical correlation between secret-dependent intermediate values and measured power traces.

**Simple Power Analysis (SPA):** Visual inspection of a single power trace can directly reveal the algorithm structure — RSA key bits, branch patterns, loop iterations.

**Differential Power Analysis (DPA):** Statistical analysis across many traces. By correlating hypothetical intermediate values (computed for each key guess) with measured power, the correct key hypothesis stands out.

### 2. Electromagnetic Analysis

EM emissions from a chip carry similar (often better) information than power. The key advantage: **spatial selectivity** — a near-field probe can target specific transistors or buses, isolating the signal from a single component.

### 3. Timing Attacks

Cache-timing, branch-timing, and memory access patterns can leak secret-dependent information through execution time variation. These are particularly relevant in software implementations and cloud environments.

## A Simple CPA Example

In AES, the first SubBytes operation computes:

```
intermediate = SubBytes(plaintext XOR key_byte)
```

For each possible key byte (0x00–0xFF), we:
1. Compute the hypothetical intermediate value for every trace
2. Calculate its Hamming Weight
3. Correlate with measured power at the time SubBytes executes

The key byte hypothesis producing the highest correlation *is* the correct key byte. Repeat for all 16 bytes.

## Tools of the Trade

**ChipWhisperer** is the standard open-source platform for SCA research:
- ChipWhisperer-Nano (~$50): beginner board
- ChipWhisperer-Lite (~$200): professional capture
- ChipWhisperer-Pro (~$1500): full-featured lab tool

**Software:** Python with `chipwhisperer` library, NumPy, matplotlib for trace processing.

## Countermeasures

Defending against SCA requires implementation-level changes:

| Attack | Countermeasure |
|--------|----------------|
| Power analysis | Masking (secret sharing), hiding (noise injection) |
| EM analysis | Shielding, decoupling, balanced logic styles |
| Timing attacks | Constant-time implementations |
| Fault injection | Redundancy, sensors, error detection codes |

## Getting Started

The best way to learn is hands-on. The [ChipWhisperer Jupyter notebooks](https://github.com/newaetech/chipwhisperer-jupyter) provide a complete learning path from SPA on RSA to CPA on AES, all runnable in your browser.

In future posts, I'll cover specific attacks I've conducted in research, including BLE pairing protocol timing analysis and FPGA-based SCA on medical devices.

---

*This post is part of an ongoing series on hardware security from my Ph.D. research at UMass Amherst.*
