import React from 'react';
import Image from 'next/image';
import Logo from '../static/logo.png';

const styles = {
    wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017]',
    content: 'max-w-7xl flex-1 flex justify-between gap-10',
    logoContainer: 'flex items-center flex-start',
    logo: 'object-contain cursor-pointer',
    bannerNav: 'flex items-center cursor-pointer space-x-5',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
}

const Header = () => {
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

                <div className={styles.bannerNav}>
                    <div>Our story</div>
                    <div>Membership</div>
                    <div>Sign in</div>
                    <div className={styles.accentedButton}>Get started</div>
                </div>
            </div>
        </div>
    );
};

export default Header;