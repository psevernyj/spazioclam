"use client";

import React, { createContext, useContext } from "react";

export type Lang = "it" | "en";

const translations = {
  it: {
    nav: {
      home:     "Home",
      about:    "Chi sono",
      process:  "Il percorso",
      services: "Servizi",
      contacts: "Contatti",
      book:     "Prenota",
    },
    hero: {
      eyebrow:     "Massoterapia · Riequilibrio posturale · Strength & Conditioning",
      h1Line1:     "Il corpo",
      h1Em:        "parla.",
      h1Rest:      " Io",
      h1Accent:    "ascolto.",
      lede:        "Percorsi personalizzati che uniscono massoterapia, riequilibrio posturale e allenamento per aiutarti a muoverti meglio, recuperare funzionalità e migliorare la tua performance.",
      cta1:        "Prenota una seduta →",
      cta2:        "Scopri i servizi",
      meta1:       "Abbiategrasso — su appuntamento",
      meta2:       "Risposta entro 24h su WhatsApp",
      badgeSub:    "Massoterapista MCB · Personal Trainer",
      statUnit:    "anni",
      statLabel:   "di esperienza nel massaggio sportivo e nella preparazione fisica",
      trustLabel1: "Certificazioni",
      trustLabel2: "& metodi",
      trust: [
        { abbr: "MCB",       desc: "Massoterapista certificato" },
        { abbr: "Pancafit®", desc: "Metodo Raggi®" },
        { abbr: "CFSC",      desc: "Certified Functional Strength Coach" },
        { abbr: "AICS",      desc: "Personal Trainer diplomato" },
      ],
      whomEyebrow:  "A chi mi rivolgo",
      whomTitle1:   "Quattro tipi di percorso,",
      whomTitleEm:  "una persona alla volta.",
      whomSubtitle: "Ogni corpo racconta una storia diversa. Identifichiamo la tua, poi scegliamo gli strumenti giusti — non il contrario.",
      whomCards: [
        { num: "1", title: "Sport da combattimento",    text: "Percorsi mirati per migliorare forza, mobilità e performance, sostenendo le esigenze specifiche dello sport praticato e lavorando sulla prevenzione degli infortuni.", tags: ["Performance", "Forza", "Prevenzione"] },
        { num: "2", title: "Allenamento intensivo",     text: "Per atleti che vogliono sostenere carichi elevati in modo sicuro, progressivo ed efficace, con il metodo Strength & Conditioning e la giusta consapevolezza del movimento.", tags: ["Recupero", "Carichi elevati", "Sicurezza"] },
        { num: "3", title: "Recupero post-infortunio",  text: "Un percorso graduale per recuperare movimento, forza e fiducia nel tuo corpo e tornare all'attività fisica in modo consapevole.", tags: ["Dolore", "Mobilità"] },
        { num: "4", title: "Postura & vita sedentaria", text: "Percorsi dedicati a chi trascorre molte ore seduto e vuole migliorare postura, mobilità e qualità del movimento.", tags: ["Schiena", "Cervicale", "Postura"] },
      ],
      waBannerTitle: "Non ti riconosci in nessuno di questi?",
      waBannerText:  "Scrivimi su WhatsApp, raccontami la tua situazione e ti dico onestamente se posso aiutarti.",
      waBannerBtn:   "Parliamone",
    },
    about: {
      eyebrow:  "Chi sono",
      pull:     "Prima ascolto il corpo.",
      pullEm:   "Poi scelgo",
      pullRest: " come intervenire.",
      p1:       "Sono Max Voytsekhovskyy, Massoterapista MCB e Personal Trainer. Da sempre lo sport rappresenta una parte fondamentale del mio percorso: dagli sport da combattimento alla preparazione fisica, fino alla massoterapia e al riequilibrio posturale.",
      p1b:      "Lavoro con persone che vogliono ridurre tensioni e rigidità, migliorare il movimento, recuperare dopo un infortunio o raggiungere nuovi obiettivi di performance.",
      p2: {
        pre:  "Il mio approccio integra",
        b1:   "massoterapia",
        mid1: ",",
        b2:   "analisi posturale",
        mid2: ",",
        b3:   "Metodo Raggi® con Pancafit®",
        mid3: "e",
        b4:   "Strength & Conditioning",
        post: ", adattando il percorso alle caratteristiche e agli obiettivi della persona.",
      },
      p3:    "Prima osservo e analizzo. Poi scelgo gli strumenti più adatti.",
      link:  "Leggi di più su di me →",
      stats: [
        { num: "10+", lbl: "anni di esperienza nel massaggio sportivo" },
        { num: "5+",  lbl: "anni come Massoterapista" },
        { num: "Dal 2022", lbl: "formazione e pratica con Pancafit® · Metodo Raggi®" },
        { num: "Dal 2010", lbl: "esperienza nell'allenamento: arti marziali, calisthenics e preparazione fisica" },
      ],
    },
    process: {
      eyebrow: "Il percorso",
      title1:  "Prima analizzo.",
      titleEm: "Poi tratto.",
      lede:    "Ogni percorso parte da un'analisi iniziale per individuare le cause — e solo dopo si procede con trattamenti mirati.",
      steps: [
        { num: "01", title: "Analisi posturale",       desc: "Valutazione della postura e delle principali tensioni muscolari per individuare possibili cause e concause della problematica." },
        { num: "02", title: "Trattamento mirato",      desc: "Massoterapia, Pancafit® e tecniche complementari vengono utilizzati in base a quanto emerso dalla valutazione iniziale." },
        { num: "03", title: "Percorso personalizzato", desc: "Esercizi e allenamento su misura per consolidare i risultati e sviluppare forza nel tempo." },
      ],
    },
    services: {
      eyebrow:  "Servizi",
      title1:   "Strumenti diversi,",
      titleEm:  "un obiettivo:",
      title2:   "che il tuo corpo torni a funzionare.",
      subtitle: "Ogni percorso parte da un'analisi iniziale per individuare le cause — e solo dopo si procede con trattamenti mirati.",
      items: [
        { id: "massoterapia",    size: "lg", index: "01 · Trattamento principale", title: "Massoterapia",                  desc: "Trattamenti manuali personalizzati che possono includere massaggio sportivo, decontratturante, svedese e trattamenti specifici per le zone cervicale, dorsale e lombare.", tags: ["Tensioni muscolari", "Dolori cronici", "Recupero muscolare"] },
        { id: "analisi",         size: "lg", index: "02 · Punto di partenza",      title: "Analisi posturale iniziale",    desc: "Una valutazione del corpo e del movimento per individuare cause e concause della problematica.", tags: ["Valutazione", "Prevenzione", "Postura"] },
        { id: "pancafit",        size: "md", index: "03",                            title: "Pancafit® — Metodo Raggi®",    desc: "Percorso di riequilibrio posturale basato sull'allungamento muscolare globale decompensato.", tags: ["Postura", "Cervicale", "Lombalgia"] },
        { id: "tecniche",        size: "md", index: "04",                            title: "Coppettazione, Gua Sha, Moxa", desc: "Tecniche complementari che possono essere integrate nel trattamento quando ritenute appropriate.", tags: ["Circolazione", "Rigenerazione", "Tensioni"] },
        { id: "linfodrenaggio",  size: "md", index: "05",                            title: "Linfodrenaggio",               desc: "Tecnica manuale delicata finalizzata a favorire il drenaggio linfatico e a supportare la gestione di gonfiore ed edema, quando indicato.", tags: ["Edemi", "Gonfiore", "Ritenzione"] },
        { id: "personaltrainer", size: "xl", index: "06 · Mantieni i risultati",   title: "Strength & Conditioning · Personal Training", desc: "Allenamento personalizzato per sviluppare forza, mobilità, controllo del movimento e performance. Dalla general population agli atleti di sport specifici.", tags: ["Funzionale", "Personal training", "Corsi"] },
      ],
      ctaTitle: "Non sai da dove partire?",
      ctaDesc:  "Raccontami brevemente la tua situazione o il tuo obiettivo. Ti farò qualche domanda per capire se il mio approccio è adatto alle tue esigenze.",
      ctaNote:  "I trattamenti possono essere combinati nello stesso percorso.",
      ctaNoteHi: "La scelta avviene sempre dopo l'analisi posturale iniziale.",
      ctaBtn:   "Scrivimi ora →",
    },
    gallery: {
      eyebrow:  "Galleria",
      title1:   "Un'occhiata",
      titleEm:  "allo studio.",
      subtitle: "Trattamenti, allenamento e il percorso di ogni giorno — qualche scatto dallo studio.",
    },
    testimonials: {
      eyebrow:  "Testimonianze",
      title1:   "Parole di chi",
      titleEm:  "ha già iniziato",
      title2:   "il percorso.",
      subtitle: "Messaggi reali ricevuti su WhatsApp dopo i trattamenti — nomi accorciati per privacy.",
      items: [
        { name: "Andrea P.",   role: "Cliente da 1 anno e mezzo",     text: "Lavoro con Max da un anno e mezzo e non potrei essere più soddisfatto. Siamo partiti dalla massoterapia per risolvere problemi cervicali e lombari, e ora proseguiamo con un allenamento consapevole che mi ha cambiato la vita quotidiana e sportiva. Professionista preparatissimo, appassionato e umanamente eccezionale.", closing: "Lo consiglio a occhi chiusi." },
        { name: "Riccardo G.", role: "Dolori cronici e contratture",  text: "Mi sono rivolto a Max per dolori fisici cronici e diverse contratture che non riuscivo a risolvere in alcun modo. Già dalle prime sedute ho avvertito benefici: è riuscito a sciogliere i punti peggiori con facilità. Inoltre è una persona solare e capace di metterti subito a tuo agio.", closing: "Lo consiglio vivamente." },
        { name: "Teresa",      role: "Palestra + massoterapia, da anni", text: "Sono seguita da Max da anni, come istruttore in palestra e come massoterapista. In palestra ti segue personalmente, non si distrae mai. Come massoterapista è il top: ormai 53enne, ogni giorno mi si presenta un nuovo problema, e lui riesce sempre a comprendermi e ad aiutarmi a risolverlo.", closing: "Una persona seria e affidabile." },
      ],
      footBtn: "Inizia il tuo percorso",
    },
    contacts: {
      eyebrow:  "Contatti",
      h2Line1:  "Iniziamo da una",
      h2Em:     "chiacchierata.",
      h2Line3:  "Senza",
      h2Accent: "impegno.",
      lede:     "Scrivimi su WhatsApp o chiamami. Ti faccio due domande sul tuo dolore o sul tuo obiettivo, e capiamo insieme se il mio approccio è quello giusto per te.",
      waBtn:    "💬  Scrivimi su WhatsApp",
      metaWa:   "Scrivimi su WhatsApp",
      hoursKey: "Orari",
      hours:    "Lun–Sab · su appuntamento",
      mapCity:  "Abbiategrasso, Città Metropolitana di Milano",
      mapOpen:  "Apri mappa →",
    },
  },

  en: {
    nav: {
      home:     "Home",
      about:    "About",
      process:  "The journey",
      services: "Services",
      contacts: "Contact",
      book:     "Book",
    },
    hero: {
      eyebrow:     "Massage therapy · Postural rebalancing · Strength & Conditioning",
      h1Line1:     "The body",
      h1Em:        "speaks.",
      h1Rest:      " I",
      h1Accent:    "listen.",
      lede:        "Personalised programmes combining massage therapy, postural rebalancing and training to help you move better, restore function and improve your performance.",
      cta1:        "Book a session →",
      cta2:        "Discover services",
      meta1:       "Abbiategrasso — by appointment",
      meta2:       "Reply within 24h on WhatsApp",
      badgeSub:    "Massotherapist MCB · Personal Trainer",
      statUnit:    "years",
      statLabel:   "of experience in sports massage and physical conditioning",
      trustLabel1: "Certifications",
      trustLabel2: "& methods",
      trust: [
        { abbr: "MCB",       desc: "Certified Massotherapist" },
        { abbr: "Pancafit®", desc: "Raggi® Method" },
        { abbr: "CFSC",      desc: "Certified Functional Strength Coach" },
        { abbr: "AICS",      desc: "Certified Personal Trainer" },
      ],
      whomEyebrow:  "Who I work with",
      whomTitle1:   "Four types of programme,",
      whomTitleEm:  "one person at a time.",
      whomSubtitle: "Every body tells a different story. We identify yours, then choose the right tools — not the other way around.",
      whomCards: [
        { num: "1", title: "Combat sports",           text: "Targeted programmes to improve strength, mobility and performance, supporting the specific demands of your sport and working on injury prevention.", tags: ["Performance", "Strength", "Prevention"] },
        { num: "2", title: "Intensive training",      text: "For athletes who want to sustain high loads safely, progressively and effectively, with the Strength & Conditioning method and the right body awareness.", tags: ["Recovery", "High loads", "Safety"] },
        { num: "3", title: "Post-injury recovery",    text: "A gradual programme to recover movement, strength and confidence in your body, and return to physical activity mindfully.", tags: ["Pain", "Mobility"] },
        { num: "4", title: "Posture & sedentary life", text: "Programmes for those who spend many hours sitting and want to improve posture, mobility and movement quality.", tags: ["Back", "Neck", "Posture"] },
      ],
      waBannerTitle: "None of these sound like you?",
      waBannerText:  "Message me on WhatsApp, tell me about your situation and I'll be honest about whether I can help.",
      waBannerBtn:   "Let's talk",
    },
    about: {
      eyebrow:  "About me",
      pull:     "First I listen to the body.",
      pullEm:   "Then I choose",
      pullRest: " how to intervene.",
      p1:       "I'm Max Voytsekhovskyy, a certified MCB Massotherapist and Personal Trainer. Sport has always been a fundamental part of my journey: from combat sports to physical conditioning, through to massage therapy and postural rebalancing.",
      p1b:      "I work with people who want to reduce tension and stiffness, improve movement, recover after an injury or reach new performance goals.",
      p2: {
        pre:  "My approach integrates",
        b1:   "massage therapy",
        mid1: ",",
        b2:   "postural analysis",
        mid2: ",",
        b3:   "the Raggi® Method with Pancafit®",
        mid3: "and",
        b4:   "Strength & Conditioning",
        post: ", adapting the programme to each person's characteristics and goals.",
      },
      p3:    "First I observe and analyse. Then I choose the most suitable tools.",
      link:  "Read more about me →",
      stats: [
        { num: "10+", lbl: "years of experience in sports massage" },
        { num: "5+",  lbl: "years as a Massotherapist" },
        { num: "Since 2022", lbl: "training and practice with Pancafit® · Raggi® Method" },
        { num: "Since 2010", lbl: "training experience: martial arts, calisthenics and physical conditioning" },
      ],
    },
    process: {
      eyebrow: "The journey",
      title1:  "First I analyse.",
      titleEm: "Then I treat.",
      lede:    "Every programme starts with an initial analysis to identify the causes — only then do we proceed with targeted treatments.",
      steps: [
        { num: "01", title: "Postural analysis",      desc: "Assessment of posture and key muscle tension to identify possible causes and contributing factors of the problem." },
        { num: "02", title: "Targeted treatment",     desc: "Massage therapy, Pancafit® and complementary techniques are used based on what emerges from the initial assessment." },
        { num: "03", title: "Personalised programme", desc: "Tailored exercises and training to consolidate results and build strength over time." },
      ],
    },
    services: {
      eyebrow:  "Services",
      title1:   "Different tools,",
      titleEm:  "one goal:",
      title2:   "getting your body working again.",
      subtitle: "Every programme starts with an initial analysis to identify the causes — only then do we proceed with targeted treatments.",
      items: [
        { id: "massoterapia",    size: "lg", index: "01 · Main treatment",   title: "Massage therapy",           desc: "Personalised manual treatments that may include sports massage, decontracting massage, Swedish massage and specific treatments for the neck, upper and lower back.", tags: ["Muscle tension", "Chronic pain", "Muscle recovery"] },
        { id: "analisi",         size: "lg", index: "02 · Starting point",   title: "Initial postural analysis", desc: "An assessment of the body and movement to identify the causes and contributing factors of the problem.", tags: ["Assessment", "Prevention", "Posture"] },
        { id: "pancafit",        size: "md", index: "03",                     title: "Pancafit® — Raggi® Method", desc: "A postural rebalancing programme based on global decompensated muscle stretching.", tags: ["Posture", "Neck", "Back pain"] },
        { id: "tecniche",        size: "md", index: "04",                     title: "Cupping, Gua Sha, Moxa",    desc: "Complementary techniques that can be integrated into treatment when deemed appropriate.", tags: ["Circulation", "Regeneration", "Tension"] },
        { id: "linfodrenaggio",  size: "md", index: "05",                     title: "Lymphatic drainage",        desc: "A gentle manual technique designed to support lymphatic drainage and help manage swelling and oedema, when indicated.", tags: ["Oedema", "Swelling", "Retention"] },
        { id: "personaltrainer", size: "xl", index: "06 · Maintain results", title: "Strength & Conditioning · Personal Training", desc: "Personalised training to develop strength, mobility, movement control and performance. From the general population to athletes in specific sports.", tags: ["Functional", "Personal training", "Classes"] },
      ],
      ctaTitle: "Not sure where to start?",
      ctaDesc:  "Tell me briefly about your situation or goal. I'll ask a few questions to understand if my approach is right for your needs.",
      ctaNote:  "Treatments can be combined in the same programme.",
      ctaNoteHi: "The choice is always made after the initial postural analysis.",
      ctaBtn:   "Write to me now →",
    },
    gallery: {
      eyebrow:  "Gallery",
      title1:   "A look",
      titleEm:  "inside the studio.",
      subtitle: "Treatments, training and the day-to-day work — a few shots from the studio.",
    },
    testimonials: {
      eyebrow:  "Testimonials",
      title1:   "Words from those who",
      titleEm:  "have already started",
      title2:   "their journey.",
      subtitle: "Real messages received on WhatsApp after treatments — names shortened for privacy.",
      items: [
        { name: "Andrea P.",   role: "Client for 1.5 years",           text: "I've been working with Max for a year and a half and I couldn't be more satisfied. We started with massage therapy to resolve cervical and lumbar problems, and now continue with mindful training that has changed my daily and sporting life. A highly skilled professional, passionate and exceptionally human.", closing: "I recommend him wholeheartedly." },
        { name: "Riccardo G.", role: "Chronic pain and tension",        text: "I came to Max for chronic physical pain and various contractures I couldn't resolve in any way. From the very first sessions I noticed benefits: he managed to release the worst points with ease. He's also a sunny person who puts you at ease immediately.", closing: "Highly recommended." },
        { name: "Teresa",      role: "Gym + massage therapy, for years", text: "I've been with Max for years, as a gym instructor and as a massotherapist. In the gym he follows you personally and never gets distracted. As a massotherapist he's the best: now 53 years old, every day brings a new problem, and he always manages to understand and help me solve it.", closing: "A reliable and serious professional." },
      ],
      footBtn: "Start your journey",
    },
    contacts: {
      eyebrow:  "Contact",
      h2Line1:  "Let's start with a",
      h2Em:     "conversation.",
      h2Line3:  "No",
      h2Accent: "commitment.",
      lede:     "Message me on WhatsApp or call me. I'll ask you a couple of questions about your pain or goal, and together we'll figure out if my approach is right for you.",
      waBtn:    "💬  Message me on WhatsApp",
      metaWa:   "Message me on WhatsApp",
      hoursKey: "Hours",
      hours:    "Mon–Sat · by appointment",
      mapCity:  "Abbiategrasso, Metropolitan City of Milan",
      mapOpen:  "Open map →",
    },
  },
} as const;

export type T = typeof translations.it;

type LangCtx = { lang: Lang; t: T };

const LangContext = createContext<LangCtx>({
  lang: "it",
  t: translations.it,
});

export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <LangContext.Provider value={{ lang, t: translations[lang] as unknown as T }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}