import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import Logo from '../static/logo.png';
import { useRouter } from "next/router";
import { useContext } from 'react';
import { MediumContext } from '../context/MediumContext';
import Modal from "react-modal";
import UploadModal from '../components/UploadModal';

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};

const styles = {
    wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017]',
    content: 'max-w-7xl flex-1 flex justify-between gap-10',
    logoContainer: 'flex items-center flex-start',
    logo: 'object-contain cursor-pointer',
    bannerNav: 'flex items-center cursor-pointer space-x-5',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
}

const Header = () => {

    const router = useRouter();
    const { currentUser, handleUserAuth} = useContext(MediumContext)

    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src={Logo}
              height={40}
              width={300}
            ></Image>
          </div>
          {currentUser ? (
            <div className={styles.bannerNav}>
              <div>Our story</div>
              <div>Membership</div>
              <Link href={'/?addNew=1'}>
                <div className={styles.accentedButton}>Write</div>
              </Link>
              <div className={styles.accentedButton}>Get Unlimited Access</div>
            </div>
          ) : (
            <div className={styles.bannerNav}>
              <div>Our story</div>
              <div>Membership</div>
              <div onClick={handleUserAuth}>Sign in</div>
              <div className={styles.accentedButton}>Get started</div>
            </div>
          )}
        </div>

        <Modal
          isOpen={!!router.query.addNew}
          onRequestClose={() => router.push("/")}
          style={customStyles}
        >
          <UploadModal />
        </Modal>
      </div>
    );
};

export default Header;