"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./gallery.module.css";
import common from "@/app/page.module.css";
import gallery1 from "@/public/gallery1_web.webp";
import gallery2 from "@/public/gallery2_web.webp";
import gallery3 from "@/public/gallery3_web.webp";
import gallery4 from "@/public/gallery4_web.webp";
import gallery5 from "@/public/gallery5_web.webp";
import gallery6 from "@/public/gallery2.webp";
import gallery7 from "@/public/gallery7_web.webp";
import { useLang } from "@/lib/i18n";

const photos: { src: StaticImageData; alt: string; size: "p" | "w" | "sq" }[] = [
  { src: gallery1, alt: "Studio Max — scatto 1", size: "p"  },
  { src: gallery3, alt: "Studio Max — scatto 3", size: "p"  },
  { src: gallery2, alt: "Studio Max — scatto 4", size: "p"  },
  { src: gallery4, alt: "Studio Max — scatto 2", size: "w"  },
  { src: gallery5, alt: "Studio Max — scatto 5", size: "p"  },
  { src: gallery7, alt: "Studio Max — scatto 6", size: "sq" },
  { src: gallery6, alt: "Studio Max — scatto 7", size: "sq" },
];

const Gallery = () => {
  const { t } = useLang();
  const g = t.gallery;

  return (
    <section className={`${styles.gallery} ${common.section}`} id="galleria">
      <div className={common.container}>
        <div className={styles.head}>
          <div className={styles.eyebrow}><span className={styles.dot} /> {g.eyebrow}</div>
          <h2 className={`${common.pageTitle} ${styles.title}`}>
            {g.title1} <em>{g.titleEm}</em>
          </h2>
          <p className={common.pageSubtitle}>{g.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {photos.map((p, i) => (
            <div key={i} className={`${styles.ph} ${styles[`ph-${p.size}`]}`}>
              <Image src={p.src} alt={p.alt} fill
                className={styles.img}
                sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
