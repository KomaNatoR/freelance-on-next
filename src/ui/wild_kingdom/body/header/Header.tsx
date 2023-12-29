"use client";
import { useState } from 'react';
import Image from 'next/image';
import useMedia from 'use-media';

import NavHeader from './compon_header/NavHeader';
import Logo from './compon_header/Logo';
import Auth from './compon_header/Auth';
import Modal from '../../shares/Modal/Modal';

import styles from './header.module.scss';
import burger from '@/img/wild/icons/menu_burger.svg';


const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMedia("(max-width: 767px)");

    const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {!isMobile && <NavHeader />}
        <Logo />
        {!isMobile && <Auth />}

        {isMobile && <Image src={burger} alt='burger' onClick={openModal} />}
        
        {isModalOpen &&
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            MODAL!!!
          </Modal>
        }

      </div>
    </header>
  )
};

export default Header;