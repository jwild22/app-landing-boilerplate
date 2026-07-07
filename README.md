# Exam Master — marketing site (exammasterapp.com)

Static site for [Exam Master: Study Screen Time](https://apps.apple.com/us/app/exam-master-study-screen-time/id6743142831), deployed on Vercel. No build step, no framework — plain HTML/CSS.

## Structure

```
index.html            English landing page (hero, how it works, screenshots,
                      features, guides, FAQ, CTA, footer)
fr/index.html         French landing page (same sections, FR storefront links)
guides/*.html         8 SEO guide pages, one per target keyword (English)
assets/               style.css, app icon, App Store screenshots
sitemap.xml           includes hreflang alternates for the two homepages
robots.txt
vercel.json           framework:null + cleanUrls so Vercel serves this statically
```

## Notes

- **Clean URLs**: internal links omit `.html` (`/guides/how-to-stop-brainrot`); `vercel.json` `cleanUrls` maps them. When testing with `python3 -m http.server`, add `.html` manually or ignore 404s on extensionless links.
- **SEO strategy + keyword research** live in the app repo: `ExamMaster/website/app.md`. App Store (ASO) keywords: `ExamMaster/ASO_METADATA.md`.
- Every page carries GTM (`GTM-MZSW8HQN`), the App Store smart banner meta, Vercel Analytics, canonical + Open Graph tags, and JSON-LD (`SoftwareApplication`/`FAQPage` on homepages, `Article`/`HowTo` on guides).
- Screenshots are the live App Store set (source of truth: `ExamMaster/screenshots/final/en/`). If App Store screenshots change, re-export at 860px height and replace `assets/screenshot-*.jpg`.
- The rating in JSON-LD (4.0, 17 ratings) mirrors the real App Store listing — update it when the listing changes, and keep claims honest.
