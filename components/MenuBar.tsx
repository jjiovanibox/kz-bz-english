import React from 'react';
import Link from "next/link";
import styles from '../styles/MenuBar.module.css'; // CSSモジュールをインポート

interface MenuBarProps {
  className?: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ className }) => {
  return (
    <nav className={`mt-4 ${styles.corporateLogo} ${className}`}>
      <ul className="flex space-x-4 justify-center">
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/lessons">レッスン内容</Link></li>
        <li><Link href="/concept">コンセプト</Link></li>
        <li><Link href="/pricing">料金</Link></li>
        <li><Link href="/contact">お問い合わせ</Link></li>
      </ul>
    </nav>
  );
};

export default MenuBar;