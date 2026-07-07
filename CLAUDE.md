# calqen-pilot — Builder rules

This is a disposable pilot repo. Builder agents operating here must:
- Only modify files inside the assigned worktree.
- Never touch `.env`, `id_rsa`, or anything matching the secret denylist.
- Keep changes small and reversible.
- Never delete files without explicit approval.
