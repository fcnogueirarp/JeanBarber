import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import styles from './Navbar.module.css';
import UseNavigate from '../hooks/useNavigate';

function handleChange() {
  <UseNavigate />;
}

export default function navbar() {
  return (
    <div className={styles.nav} role="presentation" onClick={handleChange}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          HOME
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/sobre"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          SOBRE NÓS
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/servicos"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          PREÇOS E SERVIÇOS
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/horarios"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          HORÁRIOS
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/contatos"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          CONTATOS
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/agenda"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          AGENDE ONLINE
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/login"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Login
        </Link>
      </Breadcrumbs>
    </div>
  );
}
