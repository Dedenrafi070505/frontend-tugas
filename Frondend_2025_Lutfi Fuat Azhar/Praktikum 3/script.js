/**
 * Membuat component Header.
 * Component Header menampilkan navigasi.
 */
function Header() {
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }

  /**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */

function Main() {
    return (
      <main>
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
      </main>
    );
  }

  /**
 * Membuat component Footer.
 * Component Footer menampilkan footer.
 */

function Footer() {
    return (
      <footer>
        <h2>Copyright @aufaroot18</h2>
        <p>Created by React.js</p>
      </footer>
    );
  }