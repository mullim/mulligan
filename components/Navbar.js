import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div class={styles.navbar}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}
