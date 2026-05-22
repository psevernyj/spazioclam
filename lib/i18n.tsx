"use client";

import React, { createContext, useContext, useState } from "react";

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
      eyebrow:     "Massoterapia · Pancafit® · Personal training",
      h1Line1:     "Il corpo",
      h1Em:        "parla.",
      h1Rest:      " Io",
      h1Accent:    "ascolto.",
      lede:        "Trattamenti mirati e percorsi personalizzati per eliminare il dolore, migliorare la postura e tornare a muoverti con energia.",
      cta1:        "Prenota una seduta →",
      cta2:        "Scopri i servizi",
      meta1:       "Abbiategrasso — su appuntamento",
      meta2:       "Risposta entro 24h su WhatsApp",
      badgeSub:    "Massoterapista MCB · Personal Trainer",
      statUnit:    "anni",
      statLabel:   "di pratica nel massaggio sportivo e preparazione fisica",
      trustLabel1: "Certificazioni",
      trustLabel2: "& metodi",
      trust: [
        { abbr: "MCB",       desc: "Massoterapista certificato" },
        { abbr: "Pancafit®", desc: "Metodo Raggi®" },
        { abbr: "CFSC",      desc: "Certified Functional Strength Coach" },
        { abbr: "AICS",      desc: "Personal Trainer Diplomato" },
      ],
      whomEyebrow:  "A chi mi rivolgo",
      whomTitle1:   "Quattro tipi di percorso,",
      whomTitleEm:  "una persona alla volta.",
      whomSubtitle: "Ogni corpo racconta una storia diversa. Identifichiamo la tua, poi scegliamo gli strumenti giusti — non il contrario.",
      whomCards: [
        { num: "01", title: "Sport da combattimento",    text: "Percorsi mirati per migliorare la performance, la forza, la mobilità e prevenire infortuni.", tags: ["Performance", "Forza", "Prevenzione"] },
        { num: "02", title: "Allenamento intensivo",     text: "Per atleti che vogliono sostenere carichi elevati in modo sicuro ed efficace.", tags: ["Recupero", "Carichi elevati", "Sicurezza"] },
        { num: "03", title: "Recupero post-infortunio",  text: "Torna ad allenarti senza dolore e con piena fiducia nel tuo corpo.", tags: ["Riabilitazione", "Dolore", "Mobilità"] },
        { num: "04", title: "Postura & vita sedentaria", text: "Migliora postura, mobilità e benessere se lavori molte ore seduto.", tags: ["Schiena", "Cervicale", "Postura"] },
      ],
      waBannerTitle: "Non ti riconosci in nessuno di questi?",
      waBannerText:  "Scrivimi su WhatsApp, raccontami la tua situazione e ti dico onestamente se posso aiutarti.",
      waBannerBtn:   "Parliamone",
    },
    about: {
      eyebrow:  "Chi sono",
      pull:     "Non tratto sintomi.",
      pullEm:   "Cerco la causa",
      pullRest: ", poi costruiamo insieme il percorso per togliertela di dosso.",
      p1:       "Sono Max, massoterapista MCB e personal trainer. Lavoro con chi convive con dolori, rigidità o post-infortuni — atleti, professionisti seduti otto ore al giorno, persone che vogliono semplicemente tornare a muoversi senza fastidio.",
      p2: {
        pre:  "Combino",
        b1:   "massoterapia",
        mid1: ", il",
        b2:   "Metodo Raggi® con Pancafit®",
        mid2: "e",
        b3:   "preparazione fisica",
        post: "in un percorso che parte sempre da un'analisi posturale: prima capisco il tuo corpo, poi scelgo gli strumenti.",
      },
      link:  "Leggi di più su di me →",
      stats: [
        { num: "10+", lbl: "anni nel massaggio sportivo" },
        { num: "5+",  lbl: "anni come massoterapista qualificato" },
        { num: "'22", lbl: "Pancafit® · Metodo Raggi® in clinica" },
        { num: "'10", lbl: "arti marziali, calisthenics & CFSC" },
      ],
    },
    process: {
      eyebrow: "Il percorso",
      title1:  "Prima ascolto.",
      titleEm: "Poi tratto.",
      lede:    "Ogni percorso parte da un'analisi iniziale per individuare le cause — e solo dopo si procede con trattamenti mirati.",
      steps: [
        { num: "01", title: "Analisi posturale",       desc: "Valutazione del movimento e delle catene muscolari per individuare la vera causa del disturbo." },
        { num: "02", title: "Trattamento mirato",      desc: "Massoterapia, Pancafit® o tecniche complementari — scelte in base a ciò che è emerso dall'analisi." },
        { num: "03", title: "Percorso personalizzato", desc: "Allenamento funzionale ed esercizi su misura per mantenere i risultati nel tempo." },
      ],
    },
    services: {
      eyebrow:  "Servizi",
      title1:   "Strumenti diversi,",
      titleEm:  "un obiettivo:",
      title2:   "che il tuo corpo torni a funzionare.",
      subtitle: "Ogni percorso parte da un'analisi iniziale per individuare le cause — e solo dopo si procede con trattamenti mirati.",
      items: [
        { id: "massoterapia",    size: "lg", index: "01 · Trattamento principale", title: "Massoterapia",                  desc: "Massaggi terapeutici per sciogliere tensioni, migliorare la mobilità e aiutarti a recuperare più velocemente.", tags: ["Tensioni muscolari", "Dolori cronici", "Recupero"] },
        { id: "analisi",         size: "lg", index: "02 · Punto di partenza",      title: "Analisi posturale iniziale",    desc: "Valutazione e analisi posturale per ricercare la vera causa del tuo disturbo.", tags: ["Valutazione", "Prevenzione", "Postura"] },
        { id: "pancafit",        size: "md", index: "03",                            title: "Pancafit® — Metodo Raggi®",    desc: "Riequilibrio posturale con allungamento globale, agendo sulle catene neuro-muscolo-fasciali.", tags: ["Postura", "Cervicale", "Lombalgia"] },
        { id: "tecniche",        size: "md", index: "04",                            title: "Coppettazione, Gua Sha, Moxa", desc: "Tecniche complementari per migliorare la circolazione e potenziare i risultati dei trattamenti.", tags: ["Circolazione", "Rigenerazione", "Tensioni"] },
        { id: "linfodrenaggio",  size: "md", index: "05",                            title: "Linfodrenaggio",               desc: "Tecnica manuale delicata per drenare i liquidi, ridurre gonfiore e favorire il recupero.", tags: ["Edemi", "Gonfiore", "Ritenzione"] },
        { id: "personaltrainer", size: "xl", index: "06 · Mantieni i risultati",   title: "Personal trainer",              desc: "Allenamento funzionale personalizzato, progettato per adattarsi davvero a te. Ogni esercizio prevede progressioni e regressioni, rispettando il tuo livello e le tue capacità fisiche.", tags: ["Funzionale", "Personal training", "Corsi"] },
      ],
      ctaTitle: "Non sai da dove partire?",
      ctaDesc:  "Scrivimi su WhatsApp: due domande veloci e ti dico se il mio approccio fa per te. Senza impegno, senza pacchetti da vendere.",
      ctaBtn:   "Scrivimi ora →",
      footNote: "I trattamenti possono essere combinati nello stesso percorso. La scelta avviene sempre dopo l'analisi posturale iniziale.",
      footLink: "Tutti i servizi →",
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
      eyebrow:     "Massage therapy · Pancafit® · Personal training",
      h1Line1:     "The body",
      h1Em:        "speaks.",
      h1Rest:      " I",
      h1Accent:    "listen.",
      lede:        "Targeted treatments and personalised programmes to eliminate pain, improve your posture and get you moving with energy again.",
      cta1:        "Book a session →",
      cta2:        "Discover services",
      meta1:       "Abbiategrasso — by appointment",
      meta2:       "Reply within 24h on WhatsApp",
      badgeSub:    "Massotherapist MCB · Personal Trainer",
      statUnit:    "years",
      statLabel:   "of sports massage and physical conditioning",
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
        { num: "01", title: "Combat sports",           text: "Targeted programmes to improve performance, strength, mobility and prevent injuries.", tags: ["Performance", "Strength", "Prevention"] },
        { num: "02", title: "Intensive training",      text: "For athletes who want to sustain high loads safely and effectively.", tags: ["Recovery", "High loads", "Safety"] },
        { num: "03", title: "Post-injury recovery",    text: "Get back to training pain-free and with full confidence in your body.", tags: ["Rehabilitation", "Pain", "Mobility"] },
        { num: "04", title: "Posture & sedentary life", text: "Improve posture, mobility and well-being if you sit for many hours.", tags: ["Back", "Neck", "Posture"] },
      ],
      waBannerTitle: "None of these sound like you?",
      waBannerText:  "Message me on WhatsApp, tell me about your situation and I'll be honest about whether I can help.",
      waBannerBtn:   "Let's talk",
    },
    about: {
      eyebrow:  "About me",
      pull:     "I don't treat symptoms.",
      pullEm:   "I look for the cause",
      pullRest: ", then we build the path to free you from it.",
      p1:       "I'm Max, a certified MCB massotherapist and personal trainer. I work with people dealing with pain, stiffness or post-injury recovery — athletes, professionals who sit for eight hours a day, people who simply want to move again without discomfort.",
      p2: {
        pre:  "I combine",
        b1:   "massage therapy",
        mid1: ", the",
        b2:   "Raggi® Method with Pancafit®",
        mid2: "and",
        b3:   "physical conditioning",
        post: "in a programme that always starts with a postural analysis: first I understand your body, then I choose the tools.",
      },
      link:  "Read more about me →",
      stats: [
        { num: "10+", lbl: "years in sports massage" },
        { num: "5+",  lbl: "years as a qualified massotherapist" },
        { num: "'22", lbl: "Pancafit® · Raggi® Method in clinic" },
        { num: "'10", lbl: "martial arts, calisthenics & CFSC" },
      ],
    },
    process: {
      eyebrow: "The journey",
      title1:  "First I listen.",
      titleEm: "Then I treat.",
      lede:    "Every programme starts with an initial analysis to identify the causes — only then do we proceed with targeted treatments.",
      steps: [
        { num: "01", title: "Postural analysis",      desc: "Assessment of movement and muscle chains to identify the true cause of the problem." },
        { num: "02", title: "Targeted treatment",     desc: "Massage therapy, Pancafit® or complementary techniques — chosen based on the analysis." },
        { num: "03", title: "Personalised programme", desc: "Functional training and tailored exercises to maintain results over time." },
      ],
    },
    services: {
      eyebrow:  "Services",
      title1:   "Different tools,",
      titleEm:  "one goal:",
      title2:   "getting your body working again.",
      subtitle: "Every programme starts with an initial analysis to identify the causes — only then do we proceed with targeted treatments.",
      items: [
        { id: "massoterapia",    size: "lg", index: "01 · Main treatment",   title: "Massage therapy",           desc: "Therapeutic massages to release tension, improve mobility and help you recover faster.", tags: ["Muscle tension", "Chronic pain", "Recovery"] },
        { id: "analisi",         size: "lg", index: "02 · Starting point",   title: "Initial postural analysis", desc: "Postural evaluation and analysis to find the true cause of your complaint.", tags: ["Assessment", "Prevention", "Posture"] },
        { id: "pancafit",        size: "md", index: "03",                     title: "Pancafit® — Raggi® Method", desc: "Postural rebalancing with global stretching, acting on neuro-muscular-fascial chains.", tags: ["Posture", "Neck", "Back pain"] },
        { id: "tecniche",        size: "md", index: "04",                     title: "Cupping, Gua Sha, Moxa",    desc: "Complementary techniques to improve circulation and enhance treatment results.", tags: ["Circulation", "Regeneration", "Tension"] },
        { id: "linfodrenaggio",  size: "md", index: "05",                     title: "Lymphatic drainage",        desc: "A gentle manual technique to drain fluids, reduce swelling and support recovery.", tags: ["Oedema", "Swelling", "Retention"] },
        { id: "personaltrainer", size: "xl", index: "06 · Maintain results", title: "Personal trainer",          desc: "Personalised functional training, designed to truly fit you. Every exercise includes progressions and regressions, respecting your level and physical abilities.", tags: ["Functional", "Personal training", "Classes"] },
      ],
      ctaTitle: "Not sure where to start?",
      ctaDesc:  "Message me on WhatsApp: a couple of quick questions and I'll tell you if my approach is right for you. No commitment, no packages to sell.",
      ctaBtn:   "Write to me now →",
      footNote: "Treatments can be combined in the same programme. The choice is always made after the initial postural analysis.",
      footLink: "All services →",
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

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: T };

const LangContext = createContext<LangCtx>({
  lang: "it",
  setLang: () => {},
  t: translations.it,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] as unknown as T }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}