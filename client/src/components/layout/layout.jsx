import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.body}>
      <ScrollRestoration />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
