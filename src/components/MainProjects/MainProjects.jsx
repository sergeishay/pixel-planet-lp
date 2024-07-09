// components/MainProjects.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MainProjects.module.scss';

const projects = [
  {
    image: '/images/haison.png',
    title: 'HAIMSON',
    role: 'Website design & Development',
    link: 'https://example.com/haimson'
  },
  {
    image: '/images/bank.png',
    title: 'HOOBANK',
    role: 'Website design & Development',
    link: 'https://example.com/hoobank'
  },
  {
    image: '/images/cotton.png',
    title: 'COTTON CLUB',
    role: 'Website design & Development',
    link: 'https://example.com/cottonclub'
  },
];

const MainProjects = () => {
  return (
    <div id="projects" className={styles.projects}>
      <h2 className={styles.title}>פרויקטים נבחרים</h2>
      <div className={styles.cards}>
        {projects.map((project, index) => (
          <Link href={project.link} target="_blank" key={index} passHref>
            <div className={styles.card} target="_blank" rel="noopener noreferrer">
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill" 
                  className={styles.image} 
                />
                <div className={styles.overlay}></div>
              </div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <div className={styles.divider}></div>
              <div className={styles.roleTitle}>ROLE / SERVICES</div>
              <div className={styles.role}>{project.role}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainProjects;
