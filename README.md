# calqen-pilot

Dedicated throwaway repository for Calqen's Phase 2 Part B controlled-write pilot.

This repo exists **only** to exercise the Calqen Builder/Verifier write pipeline in isolation.
Nothing here is real. Do not put anything sensitive in it.

Per `docs/phase-2-design.md`, it is seeded with a dummy secret-like file and a postinstall
script specifically to exercise the Runner's secret-redaction denylist and the accepted residual
risk around script execution under real conditions.
