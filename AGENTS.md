<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Verified commands (always run after editing this package)

- Lint (this Next build has NO `next lint` CLI — it errors; use eslint directly):
  `npx eslint .`  → expect 0 errors (223 pre-existing warnings across marketing components; the assistant widget must stay warning-free)
- Production build:
  `npx next build`  → expect ✓ Compiled / ✓ TypeScript / 123 static routes + the dynamic `/api/assistant/public/[...path]` proxy
- Backend suite that covers the public chatbot (run from `backend/`):
  `& C:\zoiko-billing-platform\backend\venv\Scripts\python.exe -m pytest tests/ai_assistant -q`
  → expect 2943 passed, 1 skipped (~9 min). Fastest targeted checks:
  `tests/ai_assistant/test_public_assistant.py` (39 tests),
  `tests/ai_assistant/test_public_assistant_config_support.py` (45 tests).
