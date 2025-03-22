import React from 'react';
import Link from "next/link";
import styles from '../styles/menubar.module.css'; // CSSモジュールをインポート

interface MenuBarProps {
  className?: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ className }) => {
  return (
    <nav className={`mt-4 ${styles.corporateLogo} ${styles.navbar} ${className}`}>
      <ul className="flex space-x-4 justify-center">
        <li><Link href="/" className={styles.menuItem}>ホーム</Link></li>
        <li><Link href="/lessons" className={styles.menuItem}>レッスン</Link></li>
        <li><Link href="/concept" className={styles.menuItem}>コンセプト</Link></li>
        <li><Link href="/pricing" className={styles.menuItem}>りょうきん</Link></li>
        <li><Link href="/contact" className={styles.menuItem}>おといあわせ</Link></li>
      </ul>
    </nav>
  );
};

export default MenuBar;