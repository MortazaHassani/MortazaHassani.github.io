---
title: "AES-128 Biclique Cryptanalysis"
date: 2024-01-01
icon: "🔐"
status: "Complete"
tags: [Cryptanalysis, AES, Python, Security]
github: "https://github.com/MortazaHassani/Biclique-Attack-on-AES-128"
excerpt: "Implementation and analysis of the biclique attack on AES-128, demonstrating the theoretical complexity reduction of full-round AES."
---

This project implements the **biclique attack on AES-128** — one of the few known attacks that formally breaks the security lower bound of full-round AES. While the attack does not threaten practical AES deployments (complexity is still astronomically large), it provides valuable insight into the design margins of the cipher.

**Key aspects:**
- Full Python implementation of the biclique key-recovery attack
- Analysis of biclique construction techniques for AES
- Performance benchmarking and complexity analysis
- Educational writeup explaining the attack methodology

**Technologies:** Python, cryptographic libraries, Jupyter notebooks
