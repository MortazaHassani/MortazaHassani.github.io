---
title: "FPGA-Based MitM Sniffer for TPM Traffic"
date: 2024-06-01
icon: "chip"
status: "Complete"
tags: [FPGA, RISC-V, LiteX, TPM, Hardware Security]
excerpt: "FPGA-based Man-in-the-Middle sniffer to intercept and analyze encrypted TPM-to-processor traffic, developed during internship at Lab-STICC–ARCAD."
---

Developed during a research internship at **Lab-STICC – ARCAD** (Université Bretagne Sud, Lorient, France), this project engineered an **FPGA-based MitM sniffer** for intercepting encrypted communications between a Trusted Platform Module (TPM) and its host processor.

**Technical highlights:**
- FPGA implementation of a transparent SPI/I²C bus interposer
- Integration with RISC-V SoC architecture using the LiteX framework
- Soft-core peripheral integration (UART, SPI, I²C)
- Automated Python build system for SoC configurations
- Analysis of TPM command/response sequences

**Technologies:** FPGA, Verilog, LiteX, RISC-V, Python, SPI/I²C protocols
