// Footer.jsx
import React from 'react';


const Footer = () => {
  const footerSections = {
    products: {
      title: 'Products',
      items: ['Watchlist', 'Alerts', 'Corporate Events']
    },
    more: {
      title: 'More',
      items: ['About', 'Policies', 'Company', 'Subscription', 'Help and Support']
    }
  };

  const companyInfo = {
    name: 'INSIGHTPIER PRIVATE LIMITED',
    description: 'InsightPier is an AI-powered global investment research platform that provides accessible and personalized insights.',
    address: '57, 95/b shree gopalnagar, gopalpura bypass, durgapura, jaipur 302018, rajasthan',
    phone: '+91-8949-216-933',
    email: 'support@insightpier.com'
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-section company-info">
          <h2 className="company-title">InsightPier</h2>
          <p className="company-name">{companyInfo.name}</p>
          <p className="company-description">{companyInfo.description}</p>
          <div className="contact-info">
            <p>
              <span className="label">Address:</span> {companyInfo.address}
            </p>
            <p>
              <span className="label">Phone:</span> {companyInfo.phone}
            </p>
            <p>
              <span className="label">Email:</span> {companyInfo.email}
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="footer-section products">
          <h3 className="section-title">{footerSections.products.title}</h3>
          <ul className="footer-links">
            {footerSections.products.items.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* More Section */}
        <div className="footer-section moresection">
          <h3 className="section-title">{footerSections.more.title}</h3>
          <ul className="footer-links">
            {footerSections.more.items.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} InsightPier. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
