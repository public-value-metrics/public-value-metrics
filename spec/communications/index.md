# Communications

`locales/<locale>/communications/` holds promotional text for a locale: posts and messages that
announce or share the book, for example on social media websites. It is separate from the book's
content: nothing in it is a topic, and the site does not publish it.

## Layout

- One plain-text file per channel and subject, named `share-on-<channel>-<subject>.txt`, for example
  `locales/en-us/communications/share-on-linkedin-projects.txt`.
- The directory is optional per locale. Write promotional text in the language and spelling of its
  locale, not translated from another locale's file.
- Directory names follow `spec/locale/index.md` (`<language>-<region>`); the folder name
  `communications` is the same in every locale and is never translated.

## Content of a file

Each file is ready to paste into the channel. The LinkedIn example has these parts, in order:

1. The title (`Public Value Metrics`).
2. Bullet lines: the link to the site, hashtags, and keywords.
3. A summary of what the book is and who it is for.
4. Benefits to a reader.
5. Why it matters.
6. A request to share it.
7. An invitation to send corrections and suggestions.

Keep claims to what the book contains. Link to the site's home page, not to a single topic, unless the
post is about that topic.

## Status

Only `en-us` has a communications directory, with one file (LinkedIn).
