const SEO_CONFIG = {
  domain: "https://seba-medical-hall.com",
  mapUrl: "https://maps.app.goo.gl/da37eKfEbNyJsp4y8",
  phone: "+8801726909122",
  displayPhone: "+880 1726-909122",
  addressBn: "গ্রাম ঝিনাইয়া, ৩ নং রসুলপুর ইউনিয়ন, দেবীদ্বার থানা, জেলা কুমিল্লা ৩৫৩০, বাংলাদেশ",
  addressEn: "Village Jhinaiya, No. 3 Rosulpur Union, Devidwar Police Station, Cumilla District 3530, Bangladesh"
};

const PAGE_SEO = {
  home: {
    bn: {
      title: "সেবা মেডিকেল হল | ফার্মেসি ও প্রাথমিক স্বাস্থ্যসেবা | দেবীদ্বার, কুমিল্লা",
      description: "সেবা মেডিকেল হল গ্রাম ঝিনাইয়া, ৩ নং রসুলপুর ইউনিয়ন, দেবীদ্বার থানা, জেলা কুমিল্লা ৩৫৩০-এ অবস্থিত একটি স্থানীয় ফার্মেসি ও স্বাস্থ্যসেবা কেন্দ্র।",
      keywords: "সেবা মেডিকেল হল, Seba Medical Hall, ঝিনাইয়া ফার্মেসি, রসুলপুর ইউনিয়ন ফার্মেসি, দেবীদ্বার ফার্মেসি, কুমিল্লা ফার্মেসি, ডাক্তার মোহাম্মদ মোশারফ হোসেন"
    },
    en: {
      title: "Seba Medical Hall | Pharmacy & Primary Healthcare | Devidwar, Cumilla",
      description: "Seba Medical Hall is a local pharmacy and healthcare service point in Village Jhinaiya, No. 3 Rosulpur Union, Devidwar Police Station, Cumilla District 3530.",
      keywords: "Seba Medical Hall, Jhinaiya pharmacy, No. 3 Rosulpur Union pharmacy, Devidwar pharmacy, Cumilla pharmacy, Dr. Mohammad Mosharraf Hossain"
    }
  },
  about: {
    bn: {
      title: "ডাক্তার মোহাম্মদ মোশারফ হোসেন সম্পর্কে | সেবা মেডিকেল হল",
      description: "ডাক্তার মোহাম্মদ মোশারফ হোসেন নব্বইয়ের দশক থেকে পার্শ্ববর্তী এলাকার জনপ্রিয় গ্রাম্য ডাক্তার এবং রসুলপুর ইউনিয়ন মুক্তিযোদ্ধা কমান্ডার হিসেবে পরিচিত।",
      keywords: "ডাক্তার মোহাম্মদ মোশারফ হোসেন, গ্রাম্য ডাক্তার, রসুলপুর ইউনিয়ন মুক্তিযোদ্ধা কমান্ডার, দেবীদ্বার মেডিক্যাল কলেজ, সেবা মেডিকেল হল"
    },
    en: {
      title: "About Dr. Mohammad Mosharraf Hossain | Seba Medical Hall",
      description: "Dr. Mohammad Mosharraf Hossain is known as a popular village doctor since the 1990s and served as the Freedom Fighter Commander of Rosulpur Union.",
      keywords: "Dr. Mohammad Mosharraf Hossain, village doctor, Rosulpur Union Freedom Fighter Commander, Devidwar Medical College, Seba Medical Hall"
    }
  }
};

function setMeta(name, content, attr = "name") {
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel, href, extra = {}) {
  let selector = `link[rel="${rel}"]`;
  if (extra.hreflang) selector += `[hreflang="${extra.hreflang}"]`;
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    Object.entries(extra).forEach(([k, v]) => tag.setAttribute(k, v));
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function getPageKey() {
  return document.documentElement.dataset.page || "home";
}

function getLangFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  if (lang === "en" || lang === "bn") return lang;
  return localStorage.getItem("siteLanguage") || "bn";
}

function applySeo(lang) {
  const page = getPageKey();
  const seo = PAGE_SEO[page]?.[lang] || PAGE_SEO.home.bn;
  const path = page === "about" ? "/about.html" : "/";
  const canonical = `${SEO_CONFIG.domain}${path}`;
  const langUrl = lang === "en" ? `${canonical}?lang=en` : canonical;

  document.title = seo.title;
  setMeta("description", seo.description);
  setMeta("keywords", seo.keywords);
  setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  setMeta("author", "Seba Medical Hall");
  setMeta("theme-color", "#0e6b3b");

  setLink("canonical", canonical);
  setLink("alternate", `${canonical}`, { hreflang: "bn-BD" });
  setLink("alternate", `${canonical}?lang=en`, { hreflang: "en" });
  setLink("alternate", `${canonical}`, { hreflang: "x-default" });

  setMeta("og:type", page === "about" ? "profile" : "website", "property");
  setMeta("og:site_name", "Seba Medical Hall", "property");
  setMeta("og:title", seo.title, "property");
  setMeta("og:description", seo.description, "property");
  setMeta("og:url", langUrl, "property");
  setMeta("og:image", `${SEO_CONFIG.domain}/assets/og-image.png`, "property");
  setMeta("og:image:width", "1200", "property");
  setMeta("og:image:height", "630", "property");
  setMeta("og:locale", lang === "bn" ? "bn_BD" : "en_US", "property");

  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", seo.title);
  setMeta("twitter:description", seo.description);
  setMeta("twitter:image", `${SEO_CONFIG.domain}/assets/og-image.png`);

  updateStructuredData(page, lang);
}

function updateStructuredData(page, lang) {
  document.querySelectorAll("script[data-auto-schema]").forEach((s) => s.remove());

  const baseUrl = SEO_CONFIG.domain;
  const business = {
    "@context": "https://schema.org",
    "@type": ["Pharmacy", "LocalBusiness", "MedicalBusiness"],
    "@id": `${baseUrl}/#seba-medical-hall`,
    "name": "Seba Medical Hall",
    "alternateName": "সেবা মেডিকেল হল",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/android-chrome-512x512.png`,
    "image": `${baseUrl}/assets/og-image.png`,
    "telephone": SEO_CONFIG.phone,
    "description": lang === "bn"
      ? "গ্রাম ঝিনাইয়া, ৩ নং রসুলপুর ইউনিয়ন, দেবীদ্বার থানা, জেলা কুমিল্লা ৩৫৩০-এ অবস্থিত একটি স্থানীয় ফার্মেসি ও স্বাস্থ্যসেবা কেন্দ্র।"
      : "A local pharmacy and healthcare service point in Village Jhinaiya, No. 3 Rosulpur Union, Devidwar Police Station, Cumilla District 3530.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": lang === "bn" ? "গ্রাম ঝিনাইয়া, ৩ নং রসুলপুর ইউনিয়ন" : "Village Jhinaiya, No. 3 Rosulpur Union",
      "addressLocality": lang === "bn" ? "দেবীদ্বার" : "Devidwar",
      "addressRegion": lang === "bn" ? "কুমিল্লা" : "Cumilla",
      "postalCode": "3530",
      "addressCountry": "BD"
    },
    "areaServed": [
      lang === "bn" ? "ঝিনাইয়া" : "Jhinaiya",
      lang === "bn" ? "৩ নং রসুলপুর ইউনিয়ন" : "No. 3 Rosulpur Union",
      lang === "bn" ? "দেবীদ্বার" : "Devidwar",
      lang === "bn" ? "কুমিল্লা" : "Cumilla"
    ],
    "sameAs": [SEO_CONFIG.mapUrl],
    "hasMap": SEO_CONFIG.mapUrl,
    "founder": {
      "@type": "Person",
      "name": "Dr. Mohammad Mosharraf Hossain",
      "alternateName": "ডাক্তার মোহাম্মদ মোশারফ হোসেন"
    }
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/about.html#dr-mohammad-mosharraf-hossain`,
    "name": "Dr. Mohammad Mosharraf Hossain",
    "alternateName": "ডাক্তার মোহাম্মদ মোশারফ হোসেন",
    "jobTitle": lang === "bn" ? "গ্রাম্য চিকিৎসক ও সমাজসেবক" : "Village Doctor and Social Worker",
    "worksFor": { "@id": `${baseUrl}/#seba-medical-hall` },
    "image": `${baseUrl}/assets/doctor-mosharraf-hossain.png`,
    "description": lang === "bn"
      ? "নব্বইয়ের দশক থেকে পার্শ্ববর্তী এলাকার জনপ্রিয় গ্রাম্য ডাক্তার এবং রসুলপুর ইউনিয়ন মুক্তিযোদ্ধা কমান্ডার হিসেবে পরিচিত।"
      : "Known as a popular village doctor since the 1990s and as the Rosulpur Union Freedom Fighter Commander."
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": page === "about"
      ? [
          {"@type": "ListItem", "position": 1, "name": lang === "bn" ? "হোম" : "Home", "item": `${baseUrl}/`},
          {"@type": "ListItem", "position": 2, "name": lang === "bn" ? "ডাক্তার সম্পর্কে" : "About Doctor", "item": `${baseUrl}/about.html`}
        ]
      : [
          {"@type": "ListItem", "position": 1, "name": lang === "bn" ? "হোম" : "Home", "item": `${baseUrl}/`}
        ]
  };

  [business, ...(page === "about" ? [person] : []), breadcrumb].forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.autoSchema = "true";
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applySeo(getLangFromUrl());
});

document.addEventListener("languageChanged", (event) => {
  applySeo(event.detail.lang);
});
