"useClient";
import React from "react";
//import { useWindowWidth } from 'react-window-size-hooks';
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.eredivisie}>
        <div className={styles.footerTitleWrapper}>
          <div>
            <Image
              src="/home/eredivisielogo_blue.png"
              width={100}
              height={0}
              alt="Eredivisie Logo"
              className={styles.logo}
            />
          </div>
          <div>KNVB Eredivisie 2025-2026</div>
        </div>
      </div>
      <div className={styles.footerMenu}>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            <div>Home</div>
          </Link>

          <Link href="/uitslagen" className={styles.link}>
            <div>Wedstrijden</div>
          </Link>

          <Link href="/recent" className={styles.link}>
            <div>Recent</div>
          </Link>

          <Link href="/stand" className={styles.link}>
            <div>Stand</div>
          </Link>
          <Link href="/clubinfo" className={styles.link}>
            <div>Clubs</div>
          </Link>
        </div>
      </div>
      <div className={styles.colofon}>noudvandun&copy;webdevelopment</div>
    </div>
  );
};

export default Footer;
