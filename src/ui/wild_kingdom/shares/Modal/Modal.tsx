'use client'
import { ReactNode, useEffect } from 'react';

import styles from './modal.module.scss'


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    
    if (!isOpen) return null;
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
export default Modal;