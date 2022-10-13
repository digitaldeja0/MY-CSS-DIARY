import "../footer/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerDiv footerDiv1">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          mollis libero nunc, non laoreet leo viverra ac. Integer ac pretium
          elit, eget porta mi. Sed id ultricies nulla. Donec consequat enim non
          tellus feugiat, non molestie nibh ullamcorper. Suspendisse sed
          bibendum nibh. Vivamus ac mauris porttitor, iaculis nulla nec,
          interdum ipsum.
        </p>
      </div>
      <div className="footerDiv footerDiv2">
        <p className="footerBtnP">
          <a className="footerDivBtn" href="google.com">
            Star this Repo on Github ⭐️
          </a>
        </p>
      </div>
    </footer>
  );
}
