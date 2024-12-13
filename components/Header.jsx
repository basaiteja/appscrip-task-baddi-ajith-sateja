import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';



const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <div className={styles.logoIcon}>
          <Image src="/icons/Logo.png" alt="Logo Icon" width={40} height={40} />
        </div>
        
        <h1 className={styles.title}>LOGO</h1>

        
        <div className={styles.icons}>
        <div alt="Search" width={20} height={20}>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 20.9998C16.7467 20.9998 21 16.7465 21 11.4998C21 6.25311 16.7467 1.99982 11.5 1.99982C6.25327 1.99982 1.99998 6.25311 1.99998 11.4998C1.99998 16.7465 6.25327 20.9998 11.5 20.9998Z" stroke="#292D32" stroke-width="1.40625" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 21.9998L20 19.9998" stroke="#292D32" stroke-width="1.40625" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
            
            <div alt="Wishlist" width={20} height={20}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.62 20.8116C12.28 20.9316 11.72 20.9316 11.38 20.8116C8.48 19.8216 2 15.6916 2 8.69156C2 5.60156 4.49 3.10156 7.56 3.10156C9.38 3.10156 10.99 3.98156 12 5.34156C13.01 3.98156 14.63 3.10156 16.44 3.10156C19.51 3.10156 22 5.60156 22 8.69156C22 15.6916 15.52 19.8216 12.62 20.8116Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>
            <div alt="Cart" width={20} height={20}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.39612 6.5H15.5961C18.9961 6.5 19.3361 8.09 19.5661 10.03L20.4661 17.53C20.7561 19.99 19.9961 22 16.4961 22H7.50612C3.99612 22 3.23612 19.99 3.53612 17.53L4.43613 10.03C4.65613 8.09 4.99612 6.5 8.39612 6.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.41 17.0312H8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>

<div alt="User" width={20} height={20}>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1625 10.87C12.0625 10.86 11.9425 10.86 11.8325 10.87C9.4525 10.79 7.5625 8.84 7.5625 6.44C7.5625 3.99 9.5425 2 12.0025 2C14.4525 2 16.4425 3.99 16.4425 6.44C16.4325 8.84 14.5425 10.79 12.1625 10.87Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.15875 14.56C4.73875 16.18 4.73875 18.82 7.15875 20.43C9.90875 22.27 14.4188 22.27 17.1688 20.43C19.5888 18.81 19.5888 16.17 17.1688 14.56C14.4288 12.73 9.91875 12.73 7.15875 14.56Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>            


           
            <select className={styles.languageSelector}>
              <option value="eng">ENG</option>
            </select>
          </div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <a href="#" className={styles.navItem}>SHOP</a>
        <a href="#" className={styles.navItem}>SKILLS</a>
        <a href="#" className={styles.navItem}>STORIES</a>
        <a href="#" className={styles.navItem}>ABOUT</a>
        <a href="#" className={styles.navItem}>CONTACT US</a>
      </nav>
    </header>
  );
};

export default Header;
