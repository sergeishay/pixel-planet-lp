"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import BrandingProject from "./BrandingProject"; 
const projects = [
  {
    title: "COTTON CLUB",
    description:
      "עיצוב ופיתוח דף נחיתה עבור COTTON CLUB, חלל אורבני ואלגנטי מבית 'הנסיך'. המקום נולד מתוך הרצון לייצר מקום עכשווי לאירועים, תכנים, תרבות, בילויים ואוכל. האתר מציג את כל המידע הדרוש לאירועים מיוחדים בצורה אטרקטיבית ומזמינה.",
    service: "עיצוב ופיתוח דף נחיתה",
    liveLink: "https://cotton-club.co.il",
    image: "/images/cotton-carusel.webp",
    type: "landing",
  },
  {
    title: "HOOBANK",
    description:
      "עיצוב ופיתוח דף נחיתה מודרני ואינטואיטיבי לבנק Hoobank, המספק שירותים פיננסיים מתקדמים ללקוחותיו. האתר מציג את השירותים השונים של הבנק בצורה נגישה תוך כדי חווית משתמש נוחה ופשוטה.",
    service: "עיצוב ופיתוח דף נחיתה",
    liveLink: "https://bank-demo.sergei-lp.com/",
    image: "/images/bank-carusel.webp",
    type: "landing",
  },
  {
    title: "HS-LAW",
    description:
      "עיצוב ופיתוח אתר תדמית לחיימסון סודאי. משרד עו״ד המוביל בישראל לענייני המגזר המושבי, החקלאי והמנהלי. פיתוח שפה עיצובית רחבה המבוססת על ערכים של מקצועיות, הישגיות וחדשנות.",
    service: "עיצוב ופיתוח אתר תדמית",
    liveLink: "https://hs-law.co.il/",
    image: "/images/hi-final.webp",
    type: "corporate",
  },
  // New projects with placeholder data
  {
    title: "ROTEM PIANO",
    description:
      "עיצוב ופיתוח דף נחיתה לרותם המתמחה בכיוון ותיקון פסנתרים. העמוד עוצב ופוּתח בקפידה, מתוך מטרה להדגיש את האופי הייחודי של העסק והבנת קהל הלקוחות והצרכים שלהם. בחירה בפלטת צבעים אלגנטית ונקייה, בשילוב עם אלמנטים עיצוביים המתכתבים עם תחום המוזיקה והאמנות.",
    service: "עיצוב ופיתוח דף נחיתה",
    liveLink: "https://rotemgold.co.il/",
    image: "/images/rotem-piano.webp",
    type: "landing",
  },
  {
    title: "LOCAL PORT",
    description:
      "עיצוב ופיתוח אתר תדמית עבור לוקל פורט, המציג את החזון והפעילות הייחודית של החברה בצורה מקצועית ומזמינה. האתר משקף את הסטנדרטים הגבוהים שלוקל פורט מציבה בתחומי השירות והחדשנות, עם חוויית משתמש מתקדמת ועיצוב שמתאים לאופי הפרויקטים הגדולים בהם הם עוסקים.",
    service: "עיצוב ופיתוח אתר תדמית",
    liveLink: "https://localport.co.il/",
    image: "/images/local-final.webp",
    type: "corporate",
  },
  {
    title: "Voice of the People",
    description:
      " היא מועצה יהודית-עולמית, זירה לאחדות, שינוי וצמיחה, הפועלת בהובלתו של נשיא מדינת ישראל, יצחק הרצוג.",
    service: "עיצוב ופיתוח אתר תדמית",
    liveLink: "https://www.voiceofthepeople.network/",
    image: "/images/vop-final.webp",
    type: "corporate",
  },
  {
    title: "UNICORN",
    description:
      "פלטפורמה שמחברת בין אמנים לאספנים בעולם הדיגיטלי. יוניקורן היא הבית החדש שלכם לאומנות דיגיטלית. עם ממשק ידידותי וטכנולוגיה מתקדמת, אנו מאפשרים לאמנים להפוך את היצירות שלהם לנכסי NFT ייחודיים, ולחשוף אותן לקהל עולמי.",
    service: " עיצוב לוגו ושפה גרפית רחבה + עיצוב אתר",
    liveLink: "",
    image: "/images/Unicorn.webp",
    type: "branding",
    imageGallery: [
      "/images/unicorn2.webp",
      "/images/unicorn3.webp",
      "/images/unicorn4.webp",
    ],
  },
  {
    title: "NANO",
    description: "במיתוג של 'נאנו', חיפשנו לשקף את החיוניות והאותנטיות של תרבות דרום אמריקה עם דגש על האווירה התוססת והעשירה של ארגנטינה, ולשלב את הסיפור של 'אלנאנו' – הגמד הקטן עם האופי הגדול. התוצאה? שפה ויזואלית ייחודית, צבעונית ושובת לב שמדברת בשפה של קצב, חיים ושמחה.",
    service: " עיצוב ברנד בוק ושפה ויזואלית רחבה + עיצוב דף נחיתה",
    liveLink: "https://nano-bar.co.il/",
    image: "/images/nano-mock.webp",
    type: "branding",
    imageGallery: [
      "/images/nano1.webp",
      "/images/nano2.webp",
      "/images/nano3.webp",
      "/images/nano4.webp",
    ],
  },
  {
    title: "SURAMARE",
    description: "עיצוב ופיתוח עמוד נחיתה לסורא מארה – אולם אירועים ייחודי המוקדש ליצירת חוויות בוטיק מותאמות אישית. מתמחים בהפקת אירועים עסקיים, כנסים, אירועי חברה ותרבות, עם דגש על עיצוב אלגנטי, שירות יוצא דופן וחוויית אורחים בלתי נשכחת.",
    service: " עיצוב פוסטים לסושיאל מדיה + עמוד נחיתה",
    liveLink: "https://suramare.co.il/",
    image: "/images/suremare-mockup.webp",
    type: "branding",
    imageGallery: [
      "/images/suramare1.webp",
      "/images/suramare2.webp",
      "/images/suramare3.webp",
      "/images/suramare4.webp",
    ],
  },
  {
    title: "PLAY GROUND",
    description: "עיצוב פופאפים ובאנרים למשחקים בינלאומיים מעוצבים בצורה צבעונית וייחודית. העיצוב מניע לפעולה ומושך את השחקנים לבצע רכישות בתוך המשחק באמצעות עיצוב כפתורים וטיפוגרפיה בולטת.",
    service: "עיצוב פוסטים לסושיאל מדיה + עיצוב פופאפים ובאנרים ",
    liveLink: "",
    image: "/images/game-mock.webp",
    type: "branding",
    imageGallery: [
      "/images/game.webp",
      "/images/game2.webp",
      "/images/game3.webp",
      "/images/game4.webp",
    ],
  },
];

const container = {
  hidden: { opacity: 0, y: 100 },
  show: {
    y: 0,
    opacity: 1,
    duration: 1.1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
};

// --- Variants for Landing/Corporate ---
// Keep these as they were defined before, ensuring they work with the restored layout
const imgItem = {
  offscreen: { x: -100, opacity: 0, rotate: 10, scale: 0.8 }, // Adjusted entry
  onscreen: { x: 0, opacity: 1, rotate: 0, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 1.5 } },
};
const imgItemReversed = {
  offscreen: { x: 100, opacity: 0, rotate: -10, scale: 0.8 }, // Adjusted entry
  onscreen: { x: 0, opacity: 1, rotate: 0, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 1.5 } },
};
const cardVariants = {
  offscreenCard: { y: 50, opacity: 0 },
  onscreenCard: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 1.0, delay: 0.2 } }, // Faster card entry
};
// --- End Variants ---


const Works = () => {
const [selectedType, setSelectedType] = useState("landing");

const tabTitles = [
  { key: "landing", label: "עמוד נחיתה" },
  { key: "corporate", label: "אתרי תדמית" },
  { key: "branding", label: "מיתוג וסושיאל" },
];

const filteredProjects = projects.filter(
  (project) => project.type === selectedType
);

return (
  <div id="projects" className={styles.projectsContainer}>
    <motion.h2 /* Add animation */ className={styles.title}>מהנוצצים שלנו</motion.h2>
    <motion.div /* Add animation */ className={styles.tabContainer}>
      {tabTitles.map((tab) => (
        <button
          key={tab.key}
          className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          onClick={() => setSelectedType(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </motion.div>

    {/* Use the wrapper list */}
    <div className={styles.projectsList}>
      {filteredProjects.map((project, index) => {
        // --- Render BRANDING projects ---
        if (selectedType === "branding") {
           if (!project.image || !project.imageGallery) {
               console.warn(`Project "${project.title}" type 'branding' missing 'image' or 'imageGallery'. Skipping.`);
               return null;
           }
           // Use the BrandingProject component which now handles its own structure/styles
          return <BrandingProject project={project} key={project.title} />;
        }
        // --- Render LANDING / CORPORATE projects ---
        else {
          const isReversed = index % 2 == 0; // Reverse on ODD index (0=normal, 1=reverse, 2=normal...)
          return (
            // Apply .project and conditionally .reverse class
            <motion.div // Add motion to the container for staggering if desired, or keep it static
              className={`${styles.project} ${isReversed ? styles.reverse : ""}`}
              key={project.title}
              initial="offscreen" // Animate the whole block in? Optional
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ // Simple container fade-in variant
                  offscreen: { opacity: 0, y: 50 },
                  onscreen: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 }} // Stagger children
              }}
            >
              {/* Image Container */}
              <motion.div
                // Use specific image variants based on reversal
                variants={isReversed ? imgItemReversed : imgItem}
                // Removed initial/whileInView here, let parent container stagger
                className={styles.imageContainer}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.type === "corporate" ? 550 : 700}
                  height={project.type === "corporate" ? 1200 : 700} // Might need adjustment if causing layout issues with auto height
                  style={{ height: 'auto' }} // Prefer auto height with width/contain
                  className={styles.projectImage}
                  quality={100}
                  priority={index < 2}
                  sizes="(max-width: 900px) 90vw, 50vw"
                />
              </motion.div>

              {/* Content Container */}
              <motion.div
                  // variants={cardContainerVariant} // Apply variants to children instead
                  className={styles.contentContainer}
              >
                {/* Apply variants to children for staggered effect from parent */}
                <motion.h3 variants={cardVariants} className={styles.projectTitle}>{project.title}</motion.h3>
                <motion.p variants={cardVariants} className={styles.description}>{project.description}</motion.p>
                <motion.p variants={cardVariants} className={styles.serviceTitle}>שירות</motion.p>
                <motion.div variants={cardVariants} className={styles.divider}></motion.div>
                <motion.p variants={cardVariants} className={styles.service}>{project.service}</motion.p>
                {project.liveLink && project.liveLink !== "#" && (
                  <motion.div variants={cardVariants} className={styles.buttonContainer}>
                    <Link href={project.liveLink} target="_blank" className={styles.liveSite}>
                      אתר לייב
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </motion.div> // End .project div
          );
        }
      })}
    </div> {/* End .projectsList */}
  </div> // End .projectsContainer
);
};

export default Works;