import React from 'react';
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import styles from '../styles/menubar.module.css'; // CSSモジュールをインポート

interface MenuBarProps {
  className?: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ className }) => {
  return (
    <AppBar position="static" className={`${styles.navbar} ${className}`} sx={{ backgroundColor: '#ffffff' }}>
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" className={styles.title}>
          <Link href="/" className={styles.menuItem}>ビバリーママのENGLISHカフェ</Link>
        </Typography>
        <Box className={styles.menuItems}>
          <Button color="inherit" component={Link} href="/" className={styles.menuItem} sx={{ color: 'black' }}>ホーム</Button>
          <Button color="inherit" component={Link} href="/news" className={styles.menuItem} sx={{ color: 'black' }}>お知らせ</Button>
          <Button color="inherit" component={Link} href="/lessons" className={styles.menuItem} sx={{ color: 'black' }}>レッスン</Button>
          <Button color="inherit" component={Link} href="/concept" className={styles.menuItem} sx={{ color: 'black' }}>コンセプト</Button>
          <Button color="inherit" component={Link} href="/pricing" className={styles.menuItem} sx={{ color: 'black' }}>料金</Button>
          <Button color="inherit" component={Link} href="/contact" className={styles.menuItem} sx={{ color: 'black' }}>お問い合わせ</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;