/* Titi's Job */
const FALLBACK_JOBS = [{"id": "gupta-media-coordinator", "title": "Media Coordinator", "company": "Gupta Media", "city": "Boston", "location": "Boston, MA", "workplace": "Onsite", "salary": "$58,000–$62,000 + bonus", "experience": "Recent grads. Bachelor’s, 3.3 GPA. No years required. Paid-media training.", "posted": "6 days ago", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4434669130/", "why": "Explicit new-grad paid-media seat with Meta, Google Ads, and TikTok training. Best Boston match.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "", "initials": "GM", "color": "#0A66C2"}, {"id": "team-lewis-campaign-coordinator", "title": "Campaign Coordinator, PR", "company": "TEAM LEWIS", "city": "Boston", "location": "Boston, MA", "workplace": "Hybrid", "salary": "$53,000–$57,000", "experience": "Internships in PR, marketing, or digital comms OK. No years required.", "posted": "2 weeks ago", "applicants": "", "url": "https://teamlewis.teamtailor.com/jobs/8049307-campaign-coordinator-pr", "why": "Agency new-grad PR seat. Media relations, press materials, hybrid Boston.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Also listed on LinkedIn.", "initials": "TL", "color": "#1B4F72"}, {"id": "fairmont-marketing-comms", "title": "Marketing & Communications Coordinator", "company": "Fairmont Copley Plaza", "city": "Boston", "location": "Boston, MA", "workplace": "Onsite", "salary": "$30.50/hr", "experience": "Bachelor’s preferred, no years required. Hospitality plus is a bonus.", "posted": "1 week ago", "applicants": "", "url": "https://careers.accor.com/global/en/job/marketing-and-communications-coordinator-in-fairmont-copley-plaza-boston-boston-united-states-jid-105311", "why": "Iconic Boston hotel. PR, social, paid, influencer. No years required.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "", "initials": "FC", "color": "#9A7B4F"}, {"id": "nesn-marketing-coordinator", "title": "Marketing Coordinator", "company": "NESN", "city": "Boston", "location": "Watertown, MA", "workplace": "Onsite · 4 days/week", "salary": "$55,000–$61,000", "experience": "Bachelor’s + 2–4 years, but they say apply even if you do not meet all requirements.", "posted": "1 week ago", "applicants": "191", "url": "https://www.linkedin.com/jobs/view/4453379718/", "why": "Sports/media brand coordinator. Stretch for a 1-year marketer.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "Nights and weekends for events.", "initials": "NE", "color": "#003DA5"}, {"id": "potbelly-marketing-ops", "title": "Marketing Operations Coordinator", "company": "Potbelly Sandwich Works", "city": "Boston", "location": "Boston, MA", "workplace": "Onsite", "salary": "", "experience": "1–3 years", "posted": "18 hours ago", "applicants": "69", "url": "https://www.linkedin.com/jobs/view/4456186505/", "why": "Fresh Boston marketing-ops coordinator listing.", "applyFirst": false, "employment": "Part-time", "stretch": false, "notes": "LinkedIn tags this as part-time; confirm on apply.", "initials": "PB", "color": "#C45C26"}, {"id": "nepc-admin-marketing-ops", "title": "Administrative Assistant, Marketing Operations", "company": "NEPC, LLC", "city": "Boston", "location": "Boston, MA", "workplace": "Hybrid", "salary": "$54,000–$66,000", "experience": "Zero to three years; internship or admin a plus. Bachelor’s required.", "posted": "1 month ago", "applicants": "188", "url": "https://www.linkedin.com/jobs/view/4437479137/", "why": "True 0–3 year posting. More RFP/admin than brand, but a real Boston finance-marketing entry point.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "Boston preferred; remote/hybrid OK.", "initials": "NP", "color": "#0E6655"}, {"id": "heydude-retail-marketing", "title": "Retail Marketing Associate", "company": "HEYDUDE", "city": "Boston", "location": "Westwood, MA", "workplace": "Onsite · 4 days office", "salary": "$60,000–$70,000", "experience": "2+ years (stretch)", "posted": "", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4413637650/", "why": "Brand/retail marketing associate, Greater Boston, strong pay.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "", "initials": "HD", "color": "#5D6D7E"}, {"id": "gotham-fc-growth-marketing", "title": "Growth Marketing Coordinator", "company": "Gotham FC", "city": "New York", "location": "Jersey City, NJ", "workplace": "Hybrid · Tue–Thu", "salary": "$45,000–$60,000", "experience": "College degree, no years required. Home matches required.", "posted": "5 days ago", "applicants": "", "url": "https://www.teamworkonline.com/soccer-jobs/nwslsoccer/gotham-fc-jobs/growth-marketing-coordinator-2185608", "why": "NWSL growth marketing. No years required. Apply on Teamwork Online.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "", "initials": "GF", "color": "#1C2833"}, {"id": "maesa-marketing-coordinator", "title": "Marketing Coordinator (Temporary, 6 months)", "company": "Maesa", "city": "New York", "location": "New York, NY", "workplace": "Hybrid · 3 days onsite", "salary": "$30–$32/hr", "experience": "1–2 years including internships", "posted": "", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4432516189/", "why": "Beauty/CPG coordinator. Internships count. Strong NYC foot in the door.", "applyFirst": true, "employment": "Temporary", "stretch": false, "notes": "", "initials": "MA", "color": "#6C3483"}, {"id": "vince-marketing-coordinator", "title": "Marketing Coordinator", "company": "Vince", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "$65,000–$70,000", "experience": "2+ years (stretch)", "posted": "", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4451945722/", "why": "Fashion brand coordinator. Stretch pay, stretch experience.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "", "initials": "VI", "color": "#5D4E37"}, {"id": "four-seasons-digital-coordinator", "title": "Digital Marketing Coordinator", "company": "Four Seasons", "city": "Boston", "location": "Boston, MA", "workplace": "Onsite", "salary": "", "experience": "Typical 0–2 year hospitality digital/social scope.", "posted": "22 hours ago", "applicants": "174", "url": "https://www.linkedin.com/jobs/view/4456151359/", "why": "Fresh hospitality digital/social coordinator. Typical 0–2 year scope.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "", "initials": "FS", "color": "#1F3A5F"}, {"id": "emerson-enrollment-marketing", "title": "Coordinator, Enrollment Marketing", "company": "Emerson College", "city": "Boston", "location": "Greater Boston", "workplace": "", "salary": "", "experience": "Coordinator-level enrollment/email campaigns.", "posted": "2 weeks ago", "applicants": "27", "url": "https://www.linkedin.com/jobs/view/4449332596/", "why": "Higher-ed email/campaign coordinator. Low applicant count.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "", "initials": "EC", "color": "#8B1E3F"}, {"id": "later-influencer-coordinator", "title": "Influencer Marketing Coordinator", "company": "Later", "city": "Boston", "location": "Boston, MA", "workplace": "", "salary": "", "experience": "Classic 1-year creator/social path.", "posted": "2 days ago", "applicants": "142", "url": "https://www.linkedin.com/jobs/view/4455246801/", "why": "Creator/social coordination at a social SaaS. Classic 1-year path.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "", "initials": "LT", "color": "#2E86AB"}, {"id": "c4-digital-account-coordinator", "title": "Digital Marketing Account Coordinator", "company": "C-4 Analytics", "city": "Boston", "location": "Wakefield, MA", "workplace": "Hybrid", "salary": "", "experience": "Agency coordinator that trains new grads in paid/digital.", "posted": "4 days ago", "applicants": "Under 25", "url": "https://www.linkedin.com/jobs/view/4453928323/", "why": "Agency coordinator that trains new grads in paid/digital. Few applicants.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "", "initials": "C4", "color": "#2C3E6B"}, {"id": "loomis-marketing-production", "title": "Marketing Associate – Marketing Production", "company": "Loomis, Sayles & Company", "city": "Boston", "location": "Boston, MA", "workplace": "Hybrid", "salary": "$70,000–$90,000", "experience": "First marketing seat in asset-management collateral.", "posted": "5 days ago", "applicants": "153", "url": "https://www.linkedin.com/jobs/view/4453745678/", "why": "Asset-management collateral associate. Strong pay, first marketing seat in finance.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "", "initials": "LS", "color": "#154360"}, {"id": "boston-ballet-media", "title": "Media Coordinator", "company": "Boston Ballet", "city": "Boston", "location": "Boston, MA", "workplace": "Onsite", "salary": "", "experience": "Arts/media coordinator, brand-new posting.", "posted": "4 hours ago", "applicants": "40", "url": "https://www.linkedin.com/jobs/view/4456408132/", "why": "Brand-new arts/media coordinator posting.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "", "initials": "BB", "color": "#4A1942"}, {"id": "on-deck-sports-coordinator", "title": "Marketing Coordinator", "company": "On Deck Sports", "city": "Boston", "location": "Randolph, MA", "workplace": "", "salary": "", "experience": "Content, collateral, and website updates.", "posted": "1 day ago", "applicants": "96", "url": "https://www.linkedin.com/jobs/view/4455753706/", "why": "Content, collateral, and website updates. Broad sports/CPG coordinator.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "", "initials": "OD", "color": "#1E8449"}, {"id": "loomis-fixed-income", "title": "Marketing Associate (Fixed Income)", "company": "Loomis, Sayles & Company", "city": "Boston", "location": "Boston, MA", "workplace": "Hybrid", "salary": "$70,000–$90,000", "experience": "Product marketing for fixed income.", "posted": "6 days ago", "applicants": "44", "url": "https://www.linkedin.com/jobs/view/4453224404/", "why": "Second Loomis associate opening. Product marketing for fixed income.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "", "initials": "LS", "color": "#154360"}, {"id": "dvm-brand-coordinator", "title": "Brand Marketing Coordinator", "company": "DVM Industries", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "$58,000–$75,000", "experience": "Early-career brand/content/events/digital coordinator.", "posted": "2 days ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4452249969/", "why": "Early-career brand/content/events/digital coordinator.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "", "initials": "DV", "color": "#6D4C41"}, {"id": "sp-global-coordinator", "title": "Marketing Coordinator", "company": "S&P Global", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "", "experience": "Structured marketing coordinator at a large brand.", "posted": "4 days ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4453967308/", "why": "Big-brand coordinator seat. Good first structured marketing job.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "", "initials": "SP", "color": "#0D47A1"}, {"id": "lasante-digital-coordinator", "title": "Digital Marketing Coordinator", "company": "LaSante Health Center", "city": "New York", "location": "Brooklyn, NY", "workplace": "", "salary": "", "experience": "Entry level. Social, content, email.", "posted": "5 days ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4453757192/", "why": "Explicitly entry level. Social, content, email.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "", "initials": "LH", "color": "#00796B"}, {"id": "brigit-digital-coordinator", "title": "Digital Marketing Coordinator", "company": "Brigit", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "", "experience": "Entry level. Fintech growth/digital.", "posted": "2 weeks ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4446267030/", "why": "Fintech growth/digital coordinator tagged entry level.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "", "initials": "BR", "color": "#1565C0"}, {"id": "mamiye-junior-coordinator", "title": "Junior Marketing Coordinator", "company": "Mamiye Brothers", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "", "experience": "Junior title. Fashion/apparel marketing support.", "posted": "2 weeks ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4446653137/", "why": "Title is Junior. Fashion/apparel marketing support.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "", "initials": "MB", "color": "#4A235A"}, {"id": "fried-frank-digital", "title": "Digital Marketing Coordinator", "company": "Fried Frank", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "", "experience": "Classic 0–2 year digital/web/email coordinator.", "posted": "1 day ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4437424574/", "why": "Law-firm digital/web/email coordinator. Classic 0–2 year role.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "", "initials": "FF", "color": "#212F3D"}, {"id": "footlocker-store-marketing", "title": "Coordinator, Store Marketing", "company": "Foot Locker", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "", "experience": "Retail marketing execution. Entry-level coordinator scope.", "posted": "1 week ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4439250923/", "why": "Retail marketing execution. Entry-level coordinator scope.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "", "initials": "FL", "color": "#C0392B"}, {"id": "whitecase-social", "title": "Coordinator, Integrated Marketing – Social Media", "company": "White & Case LLP", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "", "experience": "Social content coordination. ~1 year level.", "posted": "1 day ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4445311086/", "why": "Social content coordination at a law firm. ~1 year level.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "", "initials": "WC", "color": "#1A252F"}, {"id": "macmillan-marketing-assistant", "title": "Assistant, Marketing", "company": "Macmillan", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "", "experience": "Publishing marketing assistant. New-grad entry point.", "posted": "1 day ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4454784457/", "why": "Publishing marketing assistant. Standard new-grad entry point.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "", "initials": "MC", "color": "#6B2D5B"}, {"id": "quip-social-coordinator", "title": "Social Media Coordinator", "company": "quip.", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "", "experience": "DTC social calendar and community.", "posted": "2 weeks ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4445035591/", "why": "DTC social calendar and community. Suited to a new-grad creator.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "", "initials": "QU", "color": "#17A589"}, {"id": "nyra-lifecycle", "title": "Lifecycle Marketing Coordinator", "company": "The New York Racing Association", "city": "New York", "location": "Jamaica, NY (Queens)", "workplace": "", "salary": "", "experience": "Email/CRM lifecycle coordinator. Learnable entry-level stack.", "posted": "2 weeks ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4438005291/", "why": "Email/CRM lifecycle coordinator. Learnable entry-level stack.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "", "initials": "NY", "color": "#7B241C"}, {"id": "minute-media-si-swimsuit", "title": "Brand Coordinator, SI Swimsuit", "company": "Minute Media", "city": "New York", "location": "New York, NY", "workplace": "Remote", "salary": "$68,000–$80,000", "experience": "1–3 years in brand marketing, events, talent, or hospitality.", "posted": "2 days ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4455340027/", "why": "Coordinator title, union media brand, events/talent ops. Classic first full-time marketing seat. Deadline Aug 28.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Apply by Aug 28, 2026. NY-based preferred; travel for events.", "initials": "MM", "color": "#A04000"}, {"id": "shiseido-brand-marketing", "title": "Coordinator, Brand Marketing", "company": "Shiseido", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "Hourly + bonus eligible", "experience": "Up to 2 years’ marketing in beauty, retail, or luxury. College plus internship/beauty retail is enough.", "posted": "1 day ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4455781135/", "why": "Explicitly up to 2 years. College plus internship/beauty retail is enough.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "", "initials": "SH", "color": "#7B1F3A"}, {"id": "john-hardy-digital", "title": "Digital Marketing Coordinator", "company": "John Hardy", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "", "experience": "At least 2 years professional non-internship, Shopify/Klaviyo.", "posted": "3 weeks ago", "applicants": "", "url": "https://www.linkedin.com/jobs/view/4444483494/", "why": "Email/SMS/paid social execution. Stretch if ecomm internships plus 1 year.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "", "initials": "JH", "color": "#4B3621"}, {"id": "bisnow-email-coordinator", "title": "Marketing Coordinator – Email Marketing", "company": "Bisnow", "city": "New York", "location": "New York, NY", "workplace": "Hybrid · 3 days office", "salary": "$60,000–$67,000 + bonuses", "experience": "1–3 years marketing in media, live events, or digital. Iterable/email + Canva.", "posted": "19 hours ago", "applicants": "60", "url": "https://www.linkedin.com/jobs/view/4456343729/", "why": "Event + email marketing for CRE media. Coordinator title. Apply-anyway on 1–3 years.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "No visa sponsorship.", "initials": "BI", "color": "#1B4F72"}, {"id": "olaplex-crm", "title": "Global CRM Coordinator", "company": "OLAPLEX", "city": "New York", "location": "New York, NY", "workplace": "Hybrid", "salary": "$70,000–$78,000 + bonus", "experience": "1–3 years marketing ops / CRM / eCom. Klaviyo (or Braze/Attentive) required.", "posted": "1 day ago", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4446158081/", "why": "Email/SMS execution, not a manager seat. They say apply even if you don’t hit every requirement.", "applyFirst": true, "employment": "Full-time", "stretch": true, "notes": "Klaviyo is the hard skill.", "initials": "OL", "color": "#4A235A"}, {"id": "wmg-atlantic-assistant", "title": "Assistant, Marketing (Pop/Dance)", "company": "Warner Music Group / Atlantic Records", "city": "New York", "location": "New York, NY", "workplace": "Onsite · 4 days/week", "salary": "$19.23–$20.51/hr", "experience": "Entry-level. Music or admin experience preferred, not required.", "posted": "1 week ago", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4441241253/", "why": "Classic label marketing assistant. Calendar, campaigns, merch, events, Mailchimp.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Pay is low for NYC.", "initials": "WM", "color": "#1A1A2E"}, {"id": "wmg-eastwest-coordinator", "title": "Coordinator, Marketing, East West Records", "company": "Warner Music Group", "city": "New York", "location": "New York, NY", "workplace": "Onsite · 4 days/week", "salary": "$23.07–$25.65/hr", "experience": "1–3 years admin/ops/data. Music/media preferred.", "posted": "1 week ago", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4443068408/", "why": "Coordinator title. Release ops and marketing finance at a label.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Heavy Excel/metadata. More ops than creative.", "initials": "EW", "color": "#212F3D"}, {"id": "scholastic-trade-assistant", "title": "Trade Marketing Assistant", "company": "Scholastic", "city": "New York", "location": "New York, NY (SoHo)", "workplace": "Hybrid · min 2 days/week", "salary": "$52,000", "experience": "No years listed. Sheets/Airtable. Interest in ads/publishing preferred.", "posted": "1 week ago", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4429983694/", "why": "True assistant. AMS/paid media coordination in publishing.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "LinkedIn tags it entry-level.", "initials": "SC", "color": "#C0392B"}, {"id": "katten-marketing-engagement", "title": "Marketing and Engagement Coordinator", "company": "Katten Muchin Rosenman LLP", "city": "New York", "location": "New York, NY", "workplace": "Hybrid", "salary": "$55,000–$60,000 (Chicago range; NY may differ)", "experience": "0–2 years marketing/comms or internships.", "posted": "1 day ago", "applicants": "172", "url": "https://www.linkedin.com/jobs/view/4456133557/", "why": "Explicit 0–2 years. Bios, social, CMS, Canva. Legal marketing.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "NY office option. Same reqs across offices.", "initials": "KA", "color": "#1A365D"}, {"id": "bondi-sushi-social", "title": "Social Media Coordinator", "company": "Bondi Sushi", "city": "New York", "location": "Manhattan, NY", "workplace": "Onsite", "salary": "$66,300", "experience": "1+ years social/content. Video-first portfolio required.", "posted": "20 hours ago", "applicants": "183", "url": "https://www.linkedin.com/jobs/view/4455439352/", "why": "Restaurant brand. You own Reels/TikTok.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Apply with resume, portfolio, and handles to hiring@bondisushi.com.", "initials": "BS", "color": "#0E6655"}, {"id": "fordham-athletics-marketing", "title": "Coordinator of Marketing", "company": "Fordham University (Athletics)", "city": "New York", "location": "Bronx, NY (Rose Hill)", "workplace": "Onsite", "salary": "$66,000", "experience": "Bachelor’s + min 1 year marketing.", "posted": "8 hours ago", "applicants": "32", "url": "https://www.linkedin.com/jobs/view/4455605242/", "why": "Fresh posting, only 32 applicants. Fan engagement, game-day, social.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Evenings/weekends required.", "initials": "FU", "color": "#8B0000"}, {"id": "veeva-field-marketing", "title": "Field Marketing Associate", "company": "Veeva Systems", "city": "Boston", "location": "Boston, MA (work anywhere)", "workplace": "Remote", "salary": "$60,000–$80,000 + bonus/stock", "experience": "1+ years B2B enterprise software or high-growth SaaS marketing.", "posted": "22 hours ago", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4401882083/", "why": "Associate title. Events, webinars, campaigns. Boston-tagged remote.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "SaaS-specific 1+ years. Personality assessment in process.", "initials": "VS", "color": "#2874A6"}, {"id": "corcoran-nyc-field-marketing", "title": "Marketing Coordinator – NYC Field Marketing", "company": "Corcoran", "city": "New York", "location": "New York, NY", "workplace": "Onsite", "salary": "", "experience": "Prior marketing/advertising a plus. No hard years.", "posted": "3 hours ago", "applicants": "173", "url": "https://www.linkedin.com/jobs/view/4446872203/", "why": "Real-estate listing marketing for Corcoran agents. Not street-sales.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Posted this morning.", "initials": "CO", "color": "#9A7B4F"}, {"id": "dla-piper-digital", "title": "Digital Marketing Coordinator", "company": "DLA Piper", "city": "New York", "location": "New York, NY", "workplace": "Hybrid", "salary": "$26.34–$46.00/hr", "experience": "2 years professional-services / digital shared services.", "posted": "19 hours ago", "applicants": "192", "url": "https://www.linkedin.com/jobs/view/4437421863/", "why": "Web/social/email publishing coordinator. NY is an allowed office.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "Spanish + English desired. No visa sponsorship.", "initials": "DP", "color": "#154360"}, {"id": "disney-client-connect", "title": "Coordinator, Client Connect", "company": "Disney Advertising", "city": "New York", "location": "New York, NY", "workplace": "Hybrid", "salary": "$56,600–$75,900", "experience": "1 year marketing, sponsorship, promotion, branded entertainment, and/or media.", "posted": "1 day ago", "applicants": "", "url": "https://www.disneycareers.com/en/job/new-york/coordinator-client-connect/391/99411206128", "why": "Pitch/RFP support for Disney ads. Brand-new on Disney careers.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Apply on Disney careers. Theatrical marketing coordinator is gone.", "initials": "DA", "color": "#0D47A1"}, {"id": "britbox-lifecycle", "title": "Coordinator, Lifecycle Marketing", "company": "BritBox", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "Up to $65,000 + bonus", "experience": "Digital/email marketing. No years listed. Braze/Klaviyo preferred.", "posted": "5 days ago", "applicants": "60", "url": "https://www.linkedin.com/jobs/view/4454573410/", "why": "Email/push calendar and QA at a streaming brand. Relatively few applicants.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "LinkedIn also tags Contract. Confirm on apply. JD says full-time.", "initials": "BX", "color": "#5B2C6F"}, {"id": "talent-groups-it-engagement", "title": "IT Engagement & Marketing Coordinator", "company": "Talent Groups", "city": "Boston", "location": "Boston, MA", "workplace": "Hybrid · 3 days onsite (Thursday always)", "salary": "", "experience": "Entry level.", "posted": "3 hours ago", "applicants": "First 25", "url": "https://www.linkedin.com/jobs/view/4454129271/", "why": "Coordinator-level marketing/comms for an OCIO. Campaigns, storytelling, events. Posted this afternoon.", "applyFirst": true, "employment": "Temporary", "stretch": false, "notes": "Staffing placement. 9 months to start.", "initials": "TG", "color": "#4361EE"}, {"id": "swift-club-social-intern", "title": "Social Media Marketing Associate (Intern)", "company": "The Swift Club", "city": "Boston", "location": "Boston, MA", "workplace": "Remote", "salary": "Performance-based", "experience": "Student or recent grad. Internships count.", "posted": "2 hours ago", "applicants": "25", "url": "https://www.linkedin.com/jobs/view/4454120247/", "why": "Hands-on social/influencer/growth intern with founders. Posted this afternoon.", "applyFirst": false, "employment": "Internship", "stretch": false, "notes": "Dating-app startup. Pay is performance-based, not a salary.", "initials": "SC", "color": "#E63946"}, {"id": "instylla-events-coordinator", "title": "Marketing Events Coordinator", "company": "Instylla", "city": "Boston", "location": "Bedford, MA", "workplace": "Onsite", "salary": "", "experience": "1–3 years marketing. Events/tradeshow preferred.", "posted": "5 hours ago", "applicants": "First 25", "url": "https://www.linkedin.com/jobs/view/4456010206/", "why": "Early-career event marketing at a Bedford medical-device company. Posted midday, first-25.", "applyFirst": true, "employment": "Full-time", "stretch": true, "notes": "Up to ~40% domestic travel. Evenings/weekends around conferences.", "initials": "IN", "color": "#0077B6"}, {"id": "nfl-club-college-social", "title": "Club and College Social Marketing Associate", "company": "National Football League", "city": "New York", "location": "New York, NY (League Office)", "workplace": "Onsite", "salary": "$30–$35/hr", "experience": "1+ years social/content/editorial. Sports preferred. Internships plus 1 year is enough to try.", "posted": "24 minutes ago", "applicants": "First 25", "url": "https://www.linkedin.com/jobs/view/4454143347/", "why": "Brand-name social marketing associate posted this afternoon, still first-25.", "applyFirst": true, "employment": "Contract", "stretch": false, "notes": "External agency staff. Nights/weekends in season. 5–10% travel. No relocation.", "initials": "NF", "color": "#013369"}, {"id": "thg-dermstore-paid-search", "title": "Assistant, Paid Search | Dermstore", "company": "THG / Dermstore", "city": "New York", "location": "New York, NY", "workplace": "Hybrid · 3 days office", "salary": "$65,000–$70,000", "experience": "Entry. Google Ads / Shopping experience expected.", "posted": "5 hours ago", "applicants": "First 25", "url": "https://www.linkedin.com/jobs/view/4438643585/", "why": "Assistant title, beauty ecomm, first-25, posted today. Apply if you have any Google Ads exposure.", "applyFirst": true, "employment": "Full-time", "stretch": true, "notes": "Heavy Google Search/Shopping. Excel/large datasets.", "initials": "TH", "color": "#C9184A"}, {"id": "shadow-social-coordinator", "title": "Coordinator, Social", "company": "SHADOW", "city": "New York", "location": "New York, NY", "workplace": "Hybrid · 1–3 days office", "salary": "$46,000", "experience": "Entry. At least 1 year social media marketing.", "posted": "4 hours ago", "applicants": "79", "url": "https://www.linkedin.com/jobs/view/4456744687/", "why": "Classic entry social coordinator at a NYC agency. Posted today.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "$46k is thin for NYC. 79 already in.", "initials": "SW", "color": "#22223B"}, {"id": "hearst-performance-social", "title": "Performance Marketing Associate, Social", "company": "Hearst Digital Marketing Services", "city": "New York", "location": "New York, NY", "workplace": "Hybrid · 4 days office", "salary": "$66,300–$70,000", "experience": "1+ years paid media / performance.", "posted": "15 hours ago", "applicants": "32", "url": "https://www.linkedin.com/jobs/view/4453838451/", "why": "Associate-level paid social at Hearst Magazines. Still early.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "Meta/Google/TikTok Ads Manager expected.", "initials": "HE", "color": "#B08D57"}, {"id": "supergoop-retail-marketing", "title": "Associate, Retail Marketing", "company": "Supergoop!", "city": "New York", "location": "New York, NY", "workplace": "Onsite", "salary": "$70,000–$75,000", "experience": "1–2 years. Beauty/CPG preferred.", "posted": "20 hours ago", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4453473487/", "why": "1–2 year beauty retail-marketing associate. Still open, very competitive.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "200+ applicants. Apply if beauty retail is a priority.", "initials": "SG", "color": "#F4A261"}, {"id": "thoughtworks-field-marketing", "title": "Field Marketing Associate", "company": "Thoughtworks", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "$57,000–$77,000", "experience": "1–2 years marketing / consulting / tech / professional services.", "posted": "21 hours ago", "applicants": "First 25", "url": "https://www.linkedin.com/jobs/view/4455478220/", "why": "Explicit early-career field marketing. Events and campaigns. Last 24h and still first-25.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "US work auth required. No visa sponsorship.", "initials": "TW", "color": "#5C2D91"}, {"id": "clios-program-coordinator", "title": "Program Coordinator", "company": "The Clios", "city": "New York", "location": "New York, NY", "workplace": "Hybrid · Tue–Thu in office", "salary": "~$60,000", "experience": "1–2 years advertising, events, or marketing.", "posted": "21 hours ago", "applicants": "107", "url": "https://www.linkedin.com/jobs/view/4455470503/", "why": "Marketing/program coordinator for the Clio Awards. HubSpot, juror ops, client support.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "~2 weeks travel/year.", "initials": "CL", "color": "#C9A227"}, {"id": "paramount-client-events", "title": "Coordinator, Client Relations and Events", "company": "Paramount", "city": "New York", "location": "New York, NY", "workplace": "Onsite", "salary": "$56,000–$62,000", "experience": "1+ years client relations/events/coordination. Internships considered.", "posted": "1 hour ago", "applicants": "90", "url": "https://www.linkedin.com/jobs/view/4456781548/", "why": "Coordinator title at Paramount Advertising. Internships count. Posted this afternoon.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "More events/client hospitality than brand marketing. Evenings/weekends for events.", "initials": "PM", "color": "#0066CC"}, {"id": "metropolitan-museum-marketing-coordinator", "title": "Marketing Coordinator", "company": "The Metropolitan Museum of Art", "city": "New York", "location": "New York, NY", "workplace": "Onsite", "salary": "$35.00–$38.50/hr", "experience": "Entry level. Bachelor’s or equivalent. 2 years related production strongly preferred, not required.", "posted": "13 hours ago", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4457016975/", "why": "Met Live Arts marketing coordinator. Copy, web, Instagram, print, ticket tracking. Entry-level seniority.", "applyFirst": true, "employment": "Full-time", "stretch": true, "notes": "No visa sponsorship. Must live in NY/NJ/CT/PA commuting distance.", "initials": "TM", "color": "#E2231A"}, {"id": "alexandra-beth-marketing-associate", "title": "Marketing Associate", "company": "Alexandra Beth Fine Jewelry", "city": "New York", "location": "New York, NY (Diamond District)", "workplace": "Onsite · Mon–Fri", "salary": "", "experience": "Entry level. No years required. Jewelry/luxury/client-services preferred, not required.", "posted": "2 hours ago", "applicants": "First 25", "url": "https://www.linkedin.com/jobs/view/4456201693/", "why": "Hands-on small-brand marketing: TikTok/IG, photo, showroom, founder support. True recent-grad fit.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Email resume + note to info@alexandrabeth.com. Mix of marketing + showroom/fulfillment.", "initials": "AB", "color": "#B76E79"}, {"id": "forbes-audience-community-coordinator", "title": "Coordinator, Audience & Community Marketing", "company": "Forbes", "city": "New York", "location": "Jersey City, NJ (NY or NJ preferred)", "workplace": "Hybrid / Remote", "salary": "$70,000–$80,000", "experience": "2–4 years event marketing. BA preferred.", "posted": "4 hours ago", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4447074964/", "why": "Forbes events audience team. Email, WordPress, Bizzabo, social, on-site. Apply-anyway stretch.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "Travel/on-site event support expected.", "initials": "FB", "color": "#004B87"}, {"id": "conveo-paid-marketing-associate", "title": "Paid Marketing Associate", "company": "Conveo", "city": "New York", "location": "New York, NY", "workplace": "Onsite", "salary": "$70,000–$90,000", "experience": "1–3 years paid search/social (Google Ads + LinkedIn Ads). B2B SaaS/agency ideal.", "posted": "4 hours ago", "applicants": "59", "url": "https://www.linkedin.com/jobs/view/4456731929/", "why": "Paid-media associate at an AI research startup. Execution-heavy, not street-sales.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "Apply if you have internship/campaign work to show.", "initials": "CV", "color": "#2563EB"}, {"id": "mp-engineers-marketing-coordinator", "title": "Marketing Coordinator", "company": "MP Engineers + Architects", "city": "New York", "location": "New York, NY", "workplace": "Onsite", "salary": "$55,000–$90,000", "experience": "2–5 years marketing, AEC preferred. InDesign/Adobe, Constant Contact.", "posted": "16 hours ago", "applicants": "31", "url": "https://www.linkedin.com/jobs/view/4457022023/", "why": "AEC proposal/marketing coordinator. Proposals, project sheets, social, CRM. Not a 3+ hard req.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "Posted by Paul Wieczorek. Apply anyway.", "initials": "MP", "color": "#1E3A5F"}, {"id": "omd-associate-integrated-media", "title": "Associate, Integrated Media Planning", "company": "OMD", "city": "New York", "location": "New York, NY", "workplace": "Hybrid · min 3 days office", "salary": "$40,000–$45,000", "experience": "Entry level. 0–1 year including internships. Bachelor’s preferred.", "posted": "3 hours ago", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4447215191/", "why": "Classic agency associate. Flowcharts, research, budget tracking. Explicit 0–1 year.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Pay is low for NYC. Real Omnicom foot-in-the-door.", "initials": "OM", "color": "#F04E23"}, {"id": "omd-associate-video-investment", "title": "Associate, Video Investment", "company": "OMD", "city": "New York", "location": "New York, NY", "workplace": "Hybrid · min 3 days office", "salary": "$45,000", "experience": "4-year degree. Prior advertising/media internship a plus. No years hard req.", "posted": "3 hours ago", "applicants": "32", "url": "https://www.linkedin.com/jobs/view/4447221103/", "why": "OMD buying-side associate. IOs, billing, digital campaign reporting. Internship-friendly.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Different job from the planning associate. Only 32 applicants.", "initials": "OV", "color": "#F04E23"}, {"id": "ss-innovisors-marketing-sales-coordinator", "title": "Marketing & Sales Coordinator (New England)", "company": "S&S InnoVisors", "city": "Boston", "location": "Boston, MA / New England", "workplace": "Remote + ~25% travel", "salary": "$50,000–$60,000", "experience": "Bachelor’s + 2 years marketing/engagement. Social, Canva/Adobe, events.", "posted": "15 minutes ago", "applicants": "First 25", "url": "https://www.linkedin.com/jobs/view/4456221713/", "why": "CPG broker marketing coordinator. Social, decks, events. Not a listed street-sales shop.", "applyFirst": true, "employment": "Full-time", "stretch": true, "notes": "Must live in/near New England or Upstate NY. Valid license. Travel-heavy.", "initials": "SS", "color": "#3D7A4A"}, {"id": "ascendancy-junior-account-executive", "title": "Junior Account Executive", "company": "Ascendancy Marketing & Media", "city": "New York", "location": "New York, NY", "workplace": "Hybrid", "salary": "$50,000–$60,000", "experience": "Junior. Bachelor’s in marketing/advertising. No years required.", "posted": "12 hours ago", "applicants": "First 25", "url": "https://www.linkedin.com/jobs/view/4456067518/", "why": "Small NYC agency junior AE. Creative/media/production support. Junior title.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "Email resume + note to TPC@Ascendancymm.com.", "initials": "AM", "color": "#2C3E6B"}, {"id": "foundation-alloy-gtm-associate", "title": "GTM Strategy & Operations Associate", "company": "Foundation Alloy", "city": "Boston", "location": "Cambridge, MA (Woburn next year)", "workplace": "Onsite / flexible", "salary": "Competitive + equity", "experience": "1–4 years strategy/ops/consulting/GTM/marketing/startup. 1 year ok.", "posted": "5 hours ago", "applicants": "First 25", "url": "https://www.linkedin.com/jobs/view/4457090536/", "why": "Associate title. Includes marketing programs/campaigns at a hard-tech startup. Still first-25.", "applyFirst": true, "employment": "Full-time", "stretch": true, "notes": "More GTM/ops than brand marketing. Engineering/business degree preferred.", "initials": "FA", "color": "#4A5568"}, {"id": "kate-spade-assistant-ecommerce", "title": "Assistant, eCommerce (Canada)", "company": "kate spade new york", "city": "New York", "location": "New York, NY", "workplace": "Hybrid (typical Tapestry)", "salary": "$30.25–$31.25/hr", "experience": "2+ years ecommerce / digital merchandising / site ops / digital marketing.", "posted": "14 hours ago", "applicants": "36", "url": "https://www.linkedin.com/jobs/view/4454154114/", "why": "Assistant title at Tapestry. Site ops and launches more than brand marketing.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "Supports Kate Spade Canada site. SFCC/Demandware preferred.", "initials": "KS", "color": "#D53F8C"}, {"id": "jasa-communications-associate", "title": "Communications Associate", "company": "JASA", "city": "New York", "location": "New York, NY", "workplace": "", "salary": "$30.22/hr", "experience": "1–3 years communications/marketing/PR.", "posted": "13 hours ago", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4435336852/", "why": "Associate doing digital marketing and social for a NYC nonprofit.", "applyFirst": true, "employment": "Full-time", "stretch": true, "notes": "Senior-services nonprofit. 200+ applicants.", "initials": "JA", "color": "#3182CE"}, {"id": "afform-digital-marketing-coordinator", "title": "Digital Marketing Coordinator", "company": "Afform", "city": "New York", "location": "New York, NY", "workplace": "Hybrid / onsite", "salary": "$65,000–$75,000", "experience": "Entry. Recent grads encouraged. Internships preferred. No years hard req.", "posted": "18 minutes ago", "applicants": "First 25", "url": "https://www.linkedin.com/jobs/view/4456281233/", "why": "True entry paid-media / ecomm coordinator at a NYC bag brand. Excel + Meta/Google/TikTok ads. Internships count.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Formerly Parallelle. Also supports BagWorksNY. Shopify/Klaviyo a plus.", "initials": "AF", "color": "#B8956A"}, {"id": "vivo-architecture-office-marketing", "title": "Office and Marketing Coordinator", "company": "Vivo Architecture", "city": "Boston", "location": "Charlestown, Boston, MA", "workplace": "Onsite", "salary": "", "experience": "Entry. No years listed. MS Office + Adobe. Social a plus.", "posted": "6 hours ago", "applicants": "29", "url": "https://www.linkedin.com/jobs/view/4456244062/", "why": "Boston coordinator mix of office ops + social/BD. No years bar.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Email PDF resume + cover to TeamVivo@vivoarch.co. May be full or part-time. No recruiters.", "initials": "VA", "color": "#2E5A88"}, {"id": "chasen-creative-account-coordinator", "title": "NYC Account Coordinator — PR & Influencer Marketing", "company": "Chasen Creative Media", "city": "New York", "location": "New York, NY", "workplace": "Onsite", "salary": "", "experience": "2+ years full-time PR/influencer/agency outside internships.", "posted": "2 hours ago", "applicants": "67", "url": "https://www.linkedin.com/jobs/view/4456270690/", "why": "Beauty PR + influencer coordinator (Prada Beauty, Clinique). Real NYC agency.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "Hard 2+ years excluding internships. LinkedIn tags Entry level. Apply anyway.", "initials": "CC", "color": "#C45B7A"}, {"id": "front-row-brand-strategy-coordinator", "title": "Coordinator, Brand Strategy - Marketplace Partnership", "company": "Front Row", "city": "New York", "location": "New York, NY", "workplace": "Hybrid", "salary": "$65,000–$70,000", "experience": "1–2 years coordinator or internship.", "posted": "6 hours ago", "applicants": "200+", "url": "https://www.linkedin.com/jobs/view/4448460546/", "why": "Amazon/Walmart/TikTok Shop brand-strategy coordinator. Internships count.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Also apply at https://frontrowgroup.teamtailor.com/jobs/7379956-coordinator-brand-strategy-marketplace-partnership. Friday bump, 200+ applicants.", "initials": "FR", "color": "#111827"}, {"id": "financial-times-marketing-executive", "title": "Marketing Executive", "company": "Financial Times", "city": "New York", "location": "New York, NY", "workplace": "Hybrid · 50% onsite", "salary": "$70,000–$75,000", "experience": "1–2 years marketing/events/comms. Internships considered.", "posted": "1 hour ago", "applicants": "First 25", "url": "https://www.linkedin.com/jobs/view/4457398930/", "why": "UK executive = US coordinator. US commercial marketing, events, partnerships, Pardot/Salesforce.", "applyFirst": true, "employment": "Full-time", "stretch": true, "notes": "Title is not coordinator. Entry-level seniority. Evenings for events.", "initials": "FT", "color": "#F55048"}, {"id": "horizon-sports-account-coordinator", "title": "Account Coordinator, HS&E", "company": "Horizon Sports & Experiences", "city": "New York", "location": "New York, NY", "workplace": "Onsite", "salary": "$40,000–$50,000", "experience": "Min 1 year marketing at agency/team/league/brand.", "posted": "3 hours ago", "applicants": "184", "url": "https://www.linkedin.com/jobs/view/4447226325/", "why": "Sports/experiential sponsorship coordinator. 1 year. Entry-level.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "Pay is low for NYC. Nights/weekends/travel for events. Spirits-client account.", "initials": "HS", "color": "#FF5A1F"}, {"id": "dg-creative-social-design-associate", "title": "Social Media Marketing and Graphic Design Associate", "company": "DG Creative Media", "city": "New York", "location": "New York, NY preferred; remote welcome", "workplace": "Remote", "salary": "$38,400–$60,000 ($3,200–$5,000/mo retainer)", "experience": "Early-career / recent grad. No years hard req.", "posted": "1 hour ago", "applicants": "40", "url": "https://www.linkedin.com/jobs/view/4457389677/", "why": "Recent-grad social + Canva/video associate at a boutique luxury-hospitality agency.", "applyFirst": false, "employment": "Contract", "stretch": false, "notes": "1099 contractor. Full-time workload, no benefits.", "initials": "DG", "color": "#0F3D2E"}, {"id": "global-partners-marketing-coordinator", "title": "Marketing Coordinator", "company": "Global Partners LP", "city": "Boston", "location": "Newton, MA", "workplace": "Onsite (flexible)", "salary": "$63,300–$88,600", "experience": "Bachelor's in Marketing or related; no years required.", "posted": "16 hours ago", "applicants": "First 25", "url": "https://careers.globalp.com/marketing-coordinator/job/P1-6568175-0", "why": "Fortune 500 Boston HQ coordinator. No years required. First 25.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Req R0031820. Also on LinkedIn 4454673444.", "initials": "GP", "color": "#E87722"}, {"id": "st-johns-prep-marketing-comms", "title": "Marketing & Communications Coordinator", "company": "St. John's Prep", "city": "Boston", "location": "Danvers, MA", "workplace": "Onsite", "salary": "$50,000–$58,000", "experience": "Bachelor's; 1+ years including internships or student media.", "posted": "1 day ago", "applicants": "First 25", "url": "https://recruiting.paylocity.com/Recruiting/Jobs/Details/4310178", "why": "Coordinator that counts internships and student media. Writing, web, photo, social.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Cover letter + resume. Occasional evenings/weekends. LinkedIn 4456241139.", "initials": "SJ", "color": "#8B1E3F"}, {"id": "lesse-marketing-coordinator", "title": "Brand & Marketing Coordinator", "company": "LESSE", "city": "New York", "location": "New York, NY preferred; U.S. remote OK", "workplace": "Remote", "salary": "", "experience": "Previous marketing, editorial, or events experience; no years stated.", "posted": "1 hour ago", "applicants": "First 25", "url": "https://www.linkedin.com/jobs/view/4456654313/", "why": "Just-posted NYC skincare coordinator. No years bar. First 25.", "applyFirst": true, "employment": "Contract", "stretch": false, "notes": "Resume, cover letter, two references to n@lesseofficial.com. Shopify/Klaviyo/Canva a plus.", "initials": "LE", "color": "#C4A484"}, {"id": "inizio-evoke-growth-coordinator", "title": "Growth Coordinator", "company": "Inizio Evoke", "city": "New York", "location": "New York, NY", "workplace": "Remote", "salary": "$55,000–$70,000", "experience": "1+ years agency preferred. Apply even if you don't meet every requirement.", "posted": "4 days ago", "applicants": "", "url": "https://job-boards.greenhouse.io/inizioevoke/jobs/8128597", "why": "Coordinator title, NYC remote, explicit apply-anyway language.", "applyFirst": true, "employment": "Full-time", "stretch": false, "notes": "Health/comms agency pitch-ops.", "initials": "IE", "color": "#00A3A1"}, {"id": "cartier-brand-strategy-coordinator", "title": "Coordinator, Brand Strategy & Planning", "company": "Cartier", "city": "New York", "location": "New York, NY", "workplace": "Onsite", "salary": "$30–$34/hr", "experience": "Bachelor's; 1–2 years project management and/or coordination.", "posted": "3 days ago", "applicants": "", "url": "https://careers.richemont.com/en/jobs/jr126584/coordinator-brand-strategy-planning/", "why": "Luxury coordinator in NYC. 1–2 year bar, internships can help.", "applyFirst": false, "employment": "Full-time", "stretch": false, "notes": "Richemont JR126584. Adobe + PowerPoint expected.", "initials": "CA", "color": "#AF0524"}, {"id": "dashing-diva-marketing-coordinator", "title": "Marketing Coordinator (Omni-Channel)", "company": "Dashing Diva", "city": "New York", "location": "New York, NY", "workplace": "Hybrid", "salary": "$50,000–$65,000", "experience": "Entry-level listing; form includes 0–1 years in beauty/CPG/retail.", "posted": "1 week ago", "applicants": "", "url": "https://dashingdiva.applytojob.com/apply/52BKjCy0Cu/Marketing-Coordinator", "why": "JazzHR still lists Entry Level. Form allows 0–1 years.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "3 days NYC office + 1 day Port Washington. Amazon/Walmart/Ulta PDPs.", "initials": "DD", "color": "#FF6B9D"}, {"id": "juniper-tours-marketing-coordinator", "title": "Marketing Coordinator", "company": "Juniper Tours", "city": "Boston", "location": "Middleton, MA", "workplace": "Hybrid", "salary": "$55,000", "experience": "Bachelor's or equivalent; 2+ years preferred (SEO/PPC/HubSpot).", "posted": "2 days ago", "applicants": "60", "url": "https://www.linkedin.com/jobs/view/4456003196/", "why": "Small luxury-travel coordinator. 2+ preferred, not a 3+ hard bar.", "applyFirst": false, "employment": "Full-time", "stretch": true, "notes": "Also hello@junipertours.com. Same family as Go Blue Tours — don't double-apply.", "initials": "JT", "color": "#2C5F2D"}];

const STORAGE_KEY = "titis-job-saved";
const LAST_UPDATED = "Updated Sat, Aug 22 · 1:00 PM ET";
const REFRESH_NOTE = "Tito refreshes every 6 hours";


const state = {
  jobs: [],
  saved: new Set(),
  tab: "jobs",
  chip: "all",
  q: "",
  searchCity: "All",
  searchApplyFirst: false,
  searchOpen: false,
  detailId: null,
};

const $ = (id) => document.getElementById(id);

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function safeUrl(url) {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "https:" || parsed.protocol === "http:") return parsed.href;
  } catch (_) {}
  return "";
}

function loadSaved() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    state.saved = new Set(Array.isArray(raw) ? raw : []);
  } catch (_) {
    state.saved = new Set();
  }
}

function persistSaved() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.saved]));
}

function toggleSave(id, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  if (state.saved.has(id)) state.saved.delete(id);
  else state.saved.add(id);
  persistSaved();
  render();
  if (state.detailId === id) renderDetail();
}

function applyHref(job) {
  return safeUrl(job.url) || "#";
}

function locLine(job) {
  return [job.location, job.workplace].filter(Boolean).join(" · ");
}

function metaLine(job) {
  const bits = [];
  if (job.posted) bits.push(job.posted);
  if (job.applicants) bits.push(`${job.applicants} applicants`);
  return bits.join(" · ");
}

function pills(job) {
  const out = [];
  if (job.applyFirst) out.push('<span class="pill pill-apply">Apply first</span>');
  if (job.stretch) out.push('<span class="pill pill-stretch">Stretch</span>');
  if (job.employment === "Temporary" || job.employment === "Part-time") {
    out.push(`<span class="pill pill-temp">${esc(job.employment)}</span>`);
  }
  return out.length ? `<div class="pills">${out.join("")}</div>` : "";
}

function bookmarkSvg() {
  return `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M7 4h10a1 1 0 0 1 1 1v16l-6-3.2L6 21V5a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`;
}

function cardHTML(job) {
  const saved = state.saved.has(job.id);
  const href = applyHref(job);
  return `
    <article class="job-card${job.applyFirst ? " is-apply-first" : ""}" data-id="${esc(job.id)}" tabindex="0" aria-label="${esc(job.title)} at ${esc(job.company)}">
      <div class="card-top">
        <div class="avatar" style="background:${esc(job.color)}" aria-hidden="true">${esc(job.initials)}</div>
        <div class="card-main">
          <h3 class="job-title">${esc(job.title)}</h3>
          <p class="job-company">${esc(job.company)}</p>
          <p class="job-loc">${esc(locLine(job))}</p>
          ${metaLine(job) ? `<p class="job-meta">${esc(metaLine(job))}</p>` : ""}
        </div>
      </div>
      ${job.salary ? `<p class="job-salary">${esc(job.salary)}</p>` : ""}
      ${job.experience ? `<p class="job-exp">${esc(job.experience)}</p>` : ""}
      ${job.notes ? `<p class="job-notes">${esc(job.notes)}</p>` : ""}
      ${pills(job)}
      <div class="card-actions">
        <a class="btn-apply" href="${esc(href)}" target="_blank" rel="noopener noreferrer" data-apply="${esc(job.id)}">Apply</a>
        <button type="button" class="btn-save${saved ? " is-saved" : ""}" data-save="${esc(job.id)}" aria-label="${saved ? "Unsave" : "Save"} ${esc(job.title)}" aria-pressed="${saved ? "true" : "false"}">${bookmarkSvg()}</button>
      </div>
    </article>`;
}

function emptyHTML() {
  if (state.tab === "saved") {
    return `
      <div class="empty">
        <div class="empty-art" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="40" height="40">
            <path d="M7 4h10a1 1 0 0 1 1 1v16l-6-3.2L6 21V5a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" stroke-width="1.6"/>
          </svg>
        </div>
        <h3>No saved jobs</h3>
        <p>Tap the bookmark on a listing to save it.</p>
      </div>`;
  }
  return `
    <div class="empty">
      <div class="empty-art" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="40" height="40">
          <rect x="3" y="7" width="18" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/>
          <path d="M8 7V6a4 4 0 0 1 8 0v1" fill="none" stroke="currentColor" stroke-width="1.6"/>
        </svg>
      </div>
      <h3>No matching jobs</h3>
      <p>Try another city, keyword, or chip.</p>
    </div>`;
}

function filteredJobs() {
  const q = state.q.trim().toLowerCase();
  return state.jobs.filter((job) => {
    if (state.tab === "saved" && !state.saved.has(job.id)) return false;
    if (state.tab === "boston" && job.city !== "Boston") return false;
    if (state.tab === "newyork" && job.city !== "New York") return false;

    if (state.chip === "applyFirst" && !job.applyFirst) return false;
    if (state.chip === "boston" && job.city !== "Boston") return false;
    if (state.chip === "newyork" && job.city !== "New York") return false;
    if (state.chip === "fulltime" && job.employment !== "Full-time") return false;
    if (state.chip === "hybrid" && !String(job.workplace).toLowerCase().includes("hybrid")) return false;

    if (state.searchCity !== "All" && job.city !== state.searchCity) return false;
    if (state.searchApplyFirst && !job.applyFirst) return false;

    if (q) {
      const blob = [job.title, job.company, job.location, job.city, job.why, job.experience, job.notes, job.employment]
        .join(" ")
        .toLowerCase();
      if (!blob.includes(q)) return false;
    }
    return true;
  });
}

function countLabel(n) {
  if (state.tab === "saved") return n === 1 ? "1 saved job" : `${n} saved jobs`;
  return n === 1 ? "1 job" : `${n} jobs`;
}

function render() {
  const list = filteredJobs();
  const feed = $("feed");
  const meta = `
    <div class="feed-meta">
      <p class="feed-count">${esc(countLabel(list.length))}</p>
      <p class="feed-updated">${esc(LAST_UPDATED)}</p>
      <p class="feed-refresh">${esc(REFRESH_NOTE)}</p>
    </div>`;
  feed.innerHTML = meta + (list.length ? list.map(cardHTML).join("") : emptyHTML());

  document.querySelectorAll(".chip").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.chip === state.chip);
  });
  document.querySelectorAll(".tab").forEach((btn) => {
    const on = btn.dataset.tab === state.tab;
    btn.classList.toggle("is-active", on);
    if (on) btn.setAttribute("aria-current", "page");
    else btn.removeAttribute("aria-current");
  });
  document.querySelectorAll(".seg-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.city === state.searchCity);
  });
  $("apply-first-toggle").checked = state.searchApplyFirst;
  $("search-input").value = state.q;
  $("search-count").textContent = `${list.length} matching job${list.length === 1 ? "" : "s"}`;
}

function renderDetail() {
  const job = state.jobs.find((item) => item.id === state.detailId);
  const sheet = $("detail-sheet");
  const backdrop = $("detail-backdrop");
  if (!job) {
    closeDetail();
    return;
  }
  const saved = state.saved.has(job.id);
  $("detail-body").innerHTML = `
    <div class="detail-company-row">
      <div class="avatar" style="background:${esc(job.color)}" aria-hidden="true">${esc(job.initials)}</div>
      <div>
        <p class="job-company" style="margin:0;font-weight:600">${esc(job.company)}</p>
        <p class="job-loc" style="margin:2px 0 0">${esc(locLine(job))}</p>
      </div>
    </div>
    <h2 class="detail-title" id="detail-title">${esc(job.title)}</h2>
    ${pills(job)}
    <dl class="detail-dl">
      ${job.posted ? `<dt>Posted</dt><dd>${esc(job.posted)}</dd>` : ""}
      ${job.applicants ? `<dt>Applicants</dt><dd>${esc(job.applicants)}</dd>` : ""}
      ${job.salary ? `<dt>Salary</dt><dd>${esc(job.salary)}</dd>` : ""}
      ${job.experience ? `<dt>Experience</dt><dd>${esc(job.experience)}</dd>` : ""}
      ${job.workplace ? `<dt>Workplace</dt><dd>${esc(job.workplace)}</dd>` : ""}
      ${job.employment ? `<dt>Type</dt><dd>${esc(job.employment)}</dd>` : ""}
      <dt>Location</dt><dd>${esc(job.location)}</dd>
    </dl>
    ${job.why ? `<div class="why-box"><h3>Why it fits</h3><p>${esc(job.why)}</p></div>` : ""}
    ${job.notes ? `<p class="detail-notes">${esc(job.notes)}</p>` : ""}
  `;
  const apply = $("detail-apply");
  apply.href = applyHref(job);
  const saveBtn = $("detail-save");
  saveBtn.classList.toggle("is-saved", saved);
  saveBtn.setAttribute("aria-pressed", saved ? "true" : "false");
  saveBtn.setAttribute("aria-label", saved ? "Unsave job" : "Save job");
  saveBtn.innerHTML = bookmarkSvg();
  if (saved) saveBtn.classList.add("is-saved");

  sheet.hidden = false;
  backdrop.hidden = false;
  requestAnimationFrame(() => {
    sheet.classList.add("is-open");
    backdrop.classList.add("is-open");
  });
  $("detail-close").focus();
}

function openDetail(id) {
  state.detailId = id;
  renderDetail();
}

function closeDetail() {
  const sheet = $("detail-sheet");
  const backdrop = $("detail-backdrop");
  sheet.classList.remove("is-open");
  backdrop.classList.remove("is-open");
  state.detailId = null;
  setTimeout(() => {
    if (!state.detailId) {
      sheet.hidden = true;
      backdrop.hidden = true;
      sheet.style.transform = "";
    }
  }, 280);
}

function openSearch() {
  state.searchOpen = true;
  const sheet = $("search-sheet");
  const backdrop = $("search-backdrop");
  sheet.hidden = false;
  backdrop.hidden = false;
  requestAnimationFrame(() => {
    sheet.classList.add("is-open");
    backdrop.classList.add("is-open");
  });
  setTimeout(() => $("search-input").focus(), 200);
}

function closeSearch() {
  state.searchOpen = false;
  const sheet = $("search-sheet");
  const backdrop = $("search-backdrop");
  sheet.classList.remove("is-open");
  backdrop.classList.remove("is-open");
  setTimeout(() => {
    if (!state.searchOpen) {
      sheet.hidden = true;
      backdrop.hidden = true;
    }
  }, 280);
}

function bindSwipe(sheet, handle, onClose) {
  let startY = 0;
  let dragging = false;
  const start = (event) => {
    const body = $("detail-body");
    if (body && body.scrollTop > 0 && event.target !== handle) return;
    startY = event.touches[0].clientY;
    dragging = true;
    sheet.style.transition = "none";
  };
  const move = (event) => {
    if (!dragging) return;
    const dy = Math.max(0, event.touches[0].clientY - startY);
    sheet.style.transform = `translateY(${dy}px)`;
  };
  const end = (event) => {
    if (!dragging) return;
    dragging = false;
    sheet.style.transition = "";
    const y = event.changedTouches[0].clientY;
    const dy = y - startY;
    if (dy > 90) {
      sheet.style.transform = "";
      onClose();
    } else {
      sheet.style.transform = "";
    }
  };
  handle.addEventListener("touchstart", start, { passive: true });
  sheet.addEventListener("touchstart", start, { passive: true });
  sheet.addEventListener("touchmove", move, { passive: true });
  sheet.addEventListener("touchend", end, { passive: true });
}

async function loadJobs() {
  try {
    const res = await fetch("jobs.json", { cache: "no-store" });
    if (!res.ok) throw new Error("bad status");
    const data = await res.json();
    if (!Array.isArray(data) || !data.length) throw new Error("empty");
    return data;
  } catch (_) {
    return FALLBACK_JOBS;
  }
}

function bind() {
  $("search-open").addEventListener("click", openSearch);
  $("search-close").addEventListener("click", closeSearch);
  $("search-backdrop").addEventListener("click", closeSearch);
  $("search-clear").addEventListener("click", () => {
    state.q = "";
    state.searchCity = "All";
    state.searchApplyFirst = false;
    render();
    $("search-input").focus();
  });
  $("search-input").addEventListener("input", (event) => {
    state.q = event.target.value;
    render();
  });
  $("apply-first-toggle").addEventListener("change", (event) => {
    state.searchApplyFirst = event.target.checked;
    render();
  });
  document.querySelectorAll(".seg-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.searchCity = btn.dataset.city;
      render();
    });
  });

  document.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.chip = btn.dataset.chip;
      render();
    });
  });

  document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.tab = btn.dataset.tab;
      if (state.tab === "jobs" && (state.chip === "boston" || state.chip === "newyork")) {
        state.chip = "all";
      }
      if (state.tab === "boston") state.chip = state.chip === "newyork" ? "all" : state.chip;
      if (state.tab === "newyork") state.chip = state.chip === "boston" ? "all" : state.chip;
      render();
      $("feed").scrollTop = 0;
    });
  });

  $("feed").addEventListener("click", (event) => {
    const save = event.target.closest("[data-save]");
    if (save) {
      toggleSave(save.dataset.save, event);
      return;
    }
    if (event.target.closest("[data-apply]")) return;
    const card = event.target.closest(".job-card");
    if (card) openDetail(card.dataset.id);
  });

  $("feed").addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".job-card");
    if (!card || event.target.closest("[data-apply],[data-save]")) return;
    event.preventDefault();
    openDetail(card.dataset.id);
  });

  $("detail-close").addEventListener("click", closeDetail);
  $("detail-backdrop").addEventListener("click", closeDetail);
  $("detail-save").addEventListener("click", () => {
    if (state.detailId) toggleSave(state.detailId);
  });
  bindSwipe($("detail-sheet"), $("detail-handle"), closeDetail);

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (state.detailId) closeDetail();
    else if (state.searchOpen) closeSearch();
  });
}

async function init() {
  loadSaved();
  bind();
  state.jobs = await loadJobs();
  render();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((regs) =>
      Promise.all(regs.map((r) => r.unregister()))
    ).catch(() => {});
  }
}

init();
