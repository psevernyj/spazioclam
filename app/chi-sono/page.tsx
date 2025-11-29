import styles from "./page.module.css";

export const metadata = {
    title: "Chi sono | Max Voytsekhosvkyy",
    description:
        "Conosci la storia di Max: massoterapista, personal trainer e appassionato di sport da combattimento.",
};

export default function ChiSonoPage() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.sectionInner}>
                        <h1 className={styles.title}>Chi sono</h1>

                        <p>
                            Sono Maksym Voytsekhosvkyy, ma tutti mi conoscono come Max. Lo sport è sempre stato
                            la mia più grande passione: ho praticato principalmente sport da combattimento,
                            ottenendo risultati di rilievo anche a livello internazionale. Oltre alla
                            competizione, ciò che mi ha sempre affascinato è il gesto tecnico, che considero una
                            forma di poesia in movimento.
                        </p>

                        <p>
                            Dal contatto diretto con lo sport è nata anche la mia passione per i massaggi. Ho
                            iniziato come massaggiatore sportivo, occupandomi soprattutto del recupero fisico
                            degli atleti, e con il tempo ho conseguito il diploma di Massoterapista presso
                            Ecolife Milano. Tra le tecniche che utilizzo, un ruolo fondamentale lo ha il
                            massaggio decontratturante, ideale per sciogliere le tensioni muscolari e favorire
                            un recupero ottimale.
                        </p>

                        <p>
                            La mia curiosità e il desiderio di comprendere la persona nella sua totalità mi hanno
                            portato ad approfondire lo studio del corpo e delle sue dinamiche, fino a diplomarmi
                            in Riequilibrio posturale post traumatico con il metodo Raggi.
                        </p>

                        <p>
                            Parallelamente, porto avanti con entusiasmo la mia esperienza come Personal Trainer,
                            un percorso che dura ormai da quasi dieci anni. Ho avuto il privilegio di allenare
                            atleti e persone comuni, singoli e gruppi, accompagnandoli verso i loro obiettivi con
                            un approccio professionale e personalizzato.
                        </p>

                        <p>
                            Il mio obiettivo è semplice ma ambizioso: aiutare ogni persona a ritrovare equilibrio,
                            forza e benessere, attraverso un percorso che unisce allenamento, trattamenti e
                            massaggi mirati.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}