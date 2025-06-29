'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/sidebar.module.css'
import { IoChevronDown } from 'react-icons/io5'

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false)

  const toggleSidebar = () => {
    setIsActive(!isActive)
  }

  return (
    <><aside className={`${styles.sidebar} ${isActive ? styles.active : ''}`} data-sidebar>
          <div className={styles.sidebarInfo}>
              <figure className={styles.avatarBox}>
                  <Image
                      src="/assets/images/my-avatar.png"
                      alt="Richard hanrick"
                      width={80}
                      height={80}
                      priority />
              </figure>

              <div className={styles.infoContent}>
                  <h1 className={styles.name} title="Richard hanrick">Richard hanrick</h1>
                  <p className={styles.title}>Web developer</p>
              </div>

          <span>Show Contacts</span>
          <IoChevronDown />
      </div><div className={styles.sidebarInfoMore}>
              <div className={styles.separator}></div>
              {/* Rest of your sidebar content */}
          </div></>
    </aside>
  )
}