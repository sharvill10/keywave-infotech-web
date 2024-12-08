import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-[#111827] py-6">
      <div className="text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Keywave Infotech. All Rights Reserved.</p>
        <p className="mt-2">Follow us on social media for the latest updates.</p>
      </div>
    </footer>
  );
};

export default Footer;
