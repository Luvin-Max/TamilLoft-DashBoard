import { Link } from 'react-router-dom';
import { chefcoollogo, insta, linkedin, youtube } from '../../assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-gradient-to-r from-amber-50 to-rose-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* outer container: column on mobile, row on md+ */}
        <div className="flex flex-col lg:flex-row items-start md:items-center md: justify-center gap-6">
          {/* Logo: centered on mobile, left on md+ */}
          <div className="mx-auto md:mx-0 md:order-1 -mt-6">
            <img
              src={chefcoollogo}
              alt="Chef Logo"
              className="h-28 w-28 md:h-[211px] md:w-[211px] rounded-full object-cover"
            />
          </div>

          {/* Card: full-width on mobile, flex-1 on md+ */}
          <div className="w-full md:flex-1 md:order-2">
            <div className="bg-[#2B2B2B] text-white rounded-lg p-6 shadow-footer-card">
              {/* Top: nav + social */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Navigation - center on mobile, horizontal on md+ */}
                <nav className="w-full md:w-auto">
                  <ul className="flex flex-col md:flex-row md:gap-6 items-center md:items-center text-sm text-center md:text-left gap-3">
                    <li>
                      <Link to="/" className="opacity-90 hover:opacity-100">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery" className="opacity-80 hover:opacity-100">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="opacity-80 hover:opacity-100">
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="opacity-80 hover:opacity-100">
                        About Me
                      </Link>
                    </li>
                    <li>
                      <Link to="/jobs" className="opacity-80 hover:opacity-100">
                        Job
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="opacity-80 hover:opacity-100">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>

                {/* Social icons: aligned right on md, centered below on mobile */}
                <div className="flex items-center justify-center md:justify-end gap-3">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="p-2 rounded-md bg-transparent hover:bg-white/10 transition"
                  >
                   <img src={insta} alt="" className='w-[32px] h-[32px]'/>
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="p-2 rounded-md bg-transparent hover:bg-white/10 transition"
                  >
                   <img src={youtube} alt="" className='w-[32px] h-[32px]'/>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="p-2 rounded-md bg-transparent hover:bg-white/10 transition"
                  >
                    <img src={linkedin} alt="" className='w-[32px] h-[32px]'/>
                  </a>
                </div>
              </div>

              {/* divider */}
              <div className="mt-4">
                <div className="border-t border-[#FFF4E9]"></div>
              </div>

              {/* bottom row: copyright left, links right; stack center on mobile */}
              <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/80">
                <div className="text-center md:text-left">© Copyright {currentYear}, All Rights Reserved</div>

                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center">
                  <Link to="/privacy" className="hover:text-white/100">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="hover:text-white/100">
                    Terms &amp; Conditions
                  </Link>
                  <Link to="/refund" className="hover:text-white/100">
                    Refund Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Footer;
