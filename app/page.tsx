import styles from "./page.module.css";

import HeroScreen  from "@/components/pageSections/home/HeroScreen";
import About       from "@/components/pageSections/home/About";
import Process     from "@/components/pageSections/home/Process";
import Services    from "@/components/pageSections/home/Services";
import Testimonials from "@/components/pageSections/home/Testimonials";
import Contacts    from "@/components/pageSections/home/Contacts";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroScreen />
        <About />
        <Process />
        <Services />
        <Testimonials />
        <Contacts />
      </main>
    </div>
  );
}
