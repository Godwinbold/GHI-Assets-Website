
import {motion} from "framer-motion"
import { Building2, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
export const Card = ({ airline }:{airline: any}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-137.5 perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${airline.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute bottom-10 left-0 right-0 text-center">
              <h3 className="text-white font-bold text-2xl uppercase tracking-widest drop-shadow-lg">{airline.title}</h3>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl bg-white p-10 shadow-2xl border border-gray-100 rotate-y-180 flex flex-col justify-between"
        >
          <div>
            <span className="text-gray-400 text-sm font-semibold tracking-wide">{airline.title}</span>
            <div className="flex items-center gap-3 mt-2 mb-8 text-blue-900">
              <Building2 size={28} />
              <h2 className="text-3xl font-extrabold">{airline.subtitle}</h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-base">
              {airline.description}
            </p>
          </div>

          <div className="space-y-5 pt-8 border-t border-gray-100">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contact Us</h4>
            
            <div className="flex items-center gap-5">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-500">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Email Address</p>
                <p className="text-sm md:text-base font-bold text-gray-800">{airline.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-500">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Phone Number</p>
                <p className="text-sm md:text-base font-bold text-gray-800">{airline.phone}</p>
              </div>
            </div>

            {airline.whatsapp && (
              <div className="flex items-center gap-5">
                <div className="p-3 bg-green-50 rounded-xl text-green-500">
                  <FaWhatsapp size={22} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">WhatsApp</p>
                  <p className="text-sm md:text-base font-bold text-gray-800">{airline.whatsapp}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="absolute bottom-12 right-6 opacity-5 pointer-events-none select-none">
            <span className="text-9xl font-black italic">AIRLINE</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};