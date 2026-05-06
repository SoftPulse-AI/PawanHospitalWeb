import logo from "@/assets/logo.png";
import { Phone, MapPin, Mail } from "lucide-react";
import { PHONE_APPOINTMENT, PHONE_RECEPTION, PHONE_MEDICAL } from "@/data/doctors";

const fmt = (n: string) => `+91 ${n.slice(0,5)} ${n.slice(5)}`;

export const Footer = () => {
  return (
    <footer className="bg-primary-deep text-primary-foreground pt-12 pb-6">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img src={logo} alt="Pawan Hospital" className="h-11 w-11 object-contain bg-white rounded-lg p-1" width={44} height={44} />
              <div>
                <div className="font-bold">Pawan Hospital</div>
                <div className="text-xs opacity-80">Next Step In Care</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">Trusted multi-specialty healthcare for Faridabad and nearby areas.</p>
          </div>
          <div>
            <div className="font-semibold mb-3 text-sm">Quick Links</div>
            <ul className="space-y-2 text-sm opacity-85">
              <li><a href="#departments" className="hover:opacity-100">Departments</a></li>
              <li><a href="#doctors" className="hover:opacity-100">Doctors</a></li>
              <li><a href="#facilities" className="hover:opacity-100">Facilities</a></li>
              <li><a href="#faq" className="hover:opacity-100">FAQ</a></li>
              <li><a href="#contact" className="hover:opacity-100">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-sm">Services</div>
            <ul className="space-y-2 text-sm opacity-85">
              <li>24×7 Emergency</li>
              <li>OPD Consultations</li>
              <li>Diagnostics</li>
              <li>Surgery & ICU</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-sm">Reach Us</div>
            <ul className="space-y-2 text-sm opacity-85">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> Rajeev Colony ,Near CIA Office,Sec-56 FBD, Faridabad, India, 121004</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> <a href={`tel:+91${PHONE_APPOINTMENT}`}>{fmt(PHONE_APPOINTMENT)} (Appointment)</a></li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> <a href={`tel:+91${PHONE_MEDICAL}`}>{fmt(PHONE_MEDICAL)} (Medical)</a></li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> <a href={`tel:+91${PHONE_RECEPTION}`}>{fmt(PHONE_RECEPTION)} (Reception)</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /> pawanhospital.social@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-white/15 text-xs opacity-75 flex flex-col md:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} Pawan Hospital. All rights reserved.</div>
          <div>Best Hospital in Faridabad</div>
        </div>
      </div>
    </footer>
  );
};
