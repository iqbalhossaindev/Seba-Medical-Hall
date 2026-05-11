SEO Improvements Added
======================

This version includes:

1. Strong page-level SEO
   - Unique title and meta description for homepage
   - Unique title and meta description for About page
   - Meta keywords
   - Canonical URLs
   - Index/follow robots meta
   - Open Graph tags for Facebook, WhatsApp, Messenger, LinkedIn previews
   - Twitter/X summary large image tags

2. Auto SEO script
   File: js/seo.js
   - Automatically updates title, description, keywords, Open Graph, Twitter Card, canonical and hreflang tags by page and language.
   - Automatically injects JSON-LD structured data.
   - Works with Bangla and English language switch.
   - English pages are available by adding ?lang=en, for example:
     /about.html?lang=en

3. Structured data
   - Pharmacy
   - LocalBusiness
   - MedicalBusiness
   - Person for Dr. Mohammad Mosharraf Hossain
   - BreadcrumbList

4. Sitemap and robots
   - sitemap.xml includes homepage and about page.
   - robots.txt points search engines to sitemap.xml.

5. Logo and icon files
   - favicon.ico
   - favicon PNG sizes: 16, 32, 48, 64, 96, 256
   - Apple Touch Icon 180x180
   - Android Chrome icons 192x192 and 512x512
   - Maskable icons for PWA
   - Safari pinned tab SVG
   - Open Graph preview image: assets/og-image.png
   - Web app manifest: site.webmanifest
   - Browser config: browserconfig.xml

Important:
Before publishing, replace the domain in these files if your real website domain is different:
- sitemap.xml
- robots.txt
- js/seo.js
- index.html
- about.html

Current placeholder domain:
https://seba-medical-hall.com

After uploading online:
1. Submit sitemap.xml in Google Search Console.
2. Add the Google Maps link to your Google Business Profile.
3. Test pages with Rich Results Test and Facebook Sharing Debugger.
4. Make sure the real domain uses HTTPS.


External link added:
- On about.html, clicking the Bangladesh Muktijuddha / Freedom Fighter logo opens:
  https://bn.wikipedia.org/wiki/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0_%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A7%E0%A7%80%E0%A6%A8%E0%A6%A4%E0%A6%BE_%E0%A6%AF%E0%A7%81%E0%A6%A6%E0%A7%8D%E0%A6%A7


SVG icon update:
- Removed emoji icons from the website UI.
- Added polished real SVG icons under assets/icons/.
- Updated service cards, trust check icons, Rx card check icons, and mobile menu icon.

More details update:
- Added detailed pharmacy information section on the homepage.
- Added before-visiting guidance section.
- Added FAQ section on the homepage.
- Added contribution and profile note sections on the About page.
- Added Bangla and English translations for all new sections.


Clean language update:
- Bangla mode now shows Bengali content only.
- English mode now shows English content only.
- Removed mixed Bangla/English visible subtitles.
- Added translatable prescription card title and footer business name.
- Timeline year labels switch by language.

Professional icon update:
- Replaced the previous UI icons with cleaner professional SVG medical icons.
- Icons are stored in assets/icons/.
- No emoji icons remain in the website source.


Removed service area FAQ:
- Removed the FAQ item: "Is this a service area?"
- Removed its Bangla and English translations.


Full translation fix:
- Rebuilt js/main.js translations cleanly.
- Fixed the new detailed information sections that were appearing in English on the Bangla page.
- Homepage default static content is now Bangla only before JavaScript loads.
- English content appears only after switching to EN or using ?lang=en.


Mobile menu and call button update:
- Hid the top phone number in the mobile header.
- Moved the Bangla / English language switch into the mobile menu.
- Replaced the hero map button with a Call Now / কল করুন action button.
- Added a classic handset call icon to the hero call button.


Floating call button update:
- Added a floating bottom-right call button.
- Added translated label: কল করুন / Call Now.
- Added call icon.
- Added on homepage and about page.


Own and nearby villages wording update:
- Updated Bangla wording from "নিজ গ্রাম" to "নিজ গ্রাম ও পার্শ্ববর্তী গ্রাম" where relevant.
- Updated English wording from "own village" to "own village and nearby villages" where relevant.


Fixed call area update:
- Floating Call Now / কল করুন button is now strongly fixed at the bottom-right corner.
- Added mobile safe-area support.
- Added mobile bottom padding so the fixed button does not cover page content.


Global floating call button update:
- The floating Call Now / কল করুন button now appears across the entire website.
- Added the floating button to every HTML page.
- Fixed at the bottom-right corner on all pages and screen sizes.


Always-visible floating call update:
- The floating Call Now / কল করুন button now stays visible in the bottom-right corner while scrolling.
- Added stronger fixed positioning and very high z-index.
- Added a scroll helper in JavaScript to keep the button visible.
