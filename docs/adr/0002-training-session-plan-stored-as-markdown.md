# TrainingSession.plan stored as markdown, not HTML

Considered storing `plan` as raw HTML to support rich formatting (headers, lists, image/video links), especially since it's expected to be AI-generated in a later phase. Chose markdown source instead: it covers the same formatting needs without requiring HTML sanitization to guard against stored XSS on content that will eventually be machine-generated and user-edited. MVP UI is a plain textarea over the markdown; the rich editor comes later.
