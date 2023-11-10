import React from "react";
import SocialLinks from "./SocialLinks";

export default function Footer() {

    return (
        <>
            <footer id="footer">
                <div className="container">
                    <h3>Brandon Johnson</h3>
                    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                    <SocialLinks />
                    <div className="copyright">
                        &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>
        </>
    )
}