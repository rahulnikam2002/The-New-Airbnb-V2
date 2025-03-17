import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContainer">
                <div className="footerColumn">
                    <h4>Support</h4>
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link to="/aircover">AirCover</Link></li>
                        <li><Link to="/anti-discrimination">Anti-discrimination</Link></li>
                        <li><Link to="/disability-support">Disability support</Link></li>
                        <li><Link to="/cancellation-options">Cancellation options</Link></li>
                        <li><Link to="/report-neighbourhood-concern">Report neighbourhood concern</Link></li>
                    </ul>
                </div>

                <div className="footerColumn">
                    <h4>Hosting</h4>
                    <ul>
                        <li><Link to="/airbnb-your-home">Airbnb your home</Link></li>
                        <li><Link to="/aircover-hosts">AirCover for Hosts</Link></li>
                        <li><Link to="/hosting-resources">Hosting resources</Link></li>
                        <li><Link to="/community-forum">Community forum</Link></li>
                        <li><Link to="/hosting-responsibly">Hosting responsibly</Link></li>
                        <li><Link to="/free-hosting-class">Join a free Hosting class</Link></li>
                        <li><Link to="/find-cohost">Find a co-host</Link></li>
                    </ul>
                </div>

                <div className="footerColumn">
                    <h4>Airbnb</h4>
                    <ul>
                        <li><Link to="/newsroom">Newsroom</Link></li>
                        <li><Link to="/new-features">New features</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/investors">Investors</Link></li>
                        <li><Link to="/emergency-stays">Airbnb.org emergency stays</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footerBottom">
                <p>© 2025 Airbnb, Inc. · <Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link> · <Link to="/sitemap">Sitemap</Link> · <Link to="/company-details">Company details</Link></p>
                <div className="footerLanguageCurrency">
                    <p>🌐 English (IN)</p>
                    <p>₹ INR</p>
                    <div className="footerIcons">
                        <Link to="/facebook"><i class="fi fi-brands-facebook"></i></Link>
                        <Link to="/twitter"><i class="fi fi-brands-twitter-alt-circle"></i></Link>
                        <Link to="/instagram"><i class="fi fi-brands-instagram"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};


