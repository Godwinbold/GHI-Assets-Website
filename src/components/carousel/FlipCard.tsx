import { motion } from 'framer-motion';
import { Building2, Mail, Phone} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export const FlipCard = ({ airline }:{airline:any}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!airline.videoUrl || !airline.imageUrl) return;
    const cycle = () => {
      setShowVideo(false);
      setTimeout(() => setShowVideo(true), 4000);
    };
    cycle();
    const interval = setInterval(cycle, 12000);
    return () => clearInterval(interval);
  }, [airline.videoUrl]);

  const videoOnly = airline.videoUrl && !airline.imageUrl;

  return (
    <div 
      className="relative w-80 h-120 shrink-0 cursor-pointer group/card perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={false}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of Card (Image or Video) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden shadow-lg backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Show image until video is ready */}
          {(!airline.videoUrl || (!videoOnly && !showVideo)) && (
            <img
              src={airline.imageUrl}
              alt={airline.company}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
            />
          )}

          {/* Render video only when it should be shown */}
          {airline.videoUrl && (videoOnly || showVideo) && (
            <video
              src={airline.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          {/* Bottom Gradient and Text */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6">
            <h3 className="text-white font-bold text-lg tracking-wider uppercase">
              {airline.title}
            </h3>
          </div>
        </div>

        {/* Back of Card (Text Info) */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-xl bg-white border border-slate-100 p-8 flex flex-col backface-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Header */}
          <div className="mb-4">
            <p className="text-slate-500 text-sm font-medium mb-1">
              {airline.title}
            </p>
            <div className="flex items-center gap-2 text-[#1e3a8a]">
              <Building2 size={24} className="stroke-[2.5]" />
              <h2 className="text-xl font-bold tracking-wide">
                {airline.subtitle}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed grow">
            {airline.description}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-slate-100 my-3"></div>

          {/* Contact Section */}
          <div className="mt-auto">
            <h4 className="text-slate-500 text-xs font-semibold tracking-wide mb-4 uppercase">
              Contact Us
            </h4>
            
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                  <Mail className="text-sky-600" size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-medium">Email</p>
                  <p className="text-slate-800 text-sm font-semibold break-all">{airline.email}</p>
                </div>
              </div>

              {/* Phone */}
              {airline.phones ? (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                    <Phone className="text-sky-600" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-medium">Phone</p>
                    {airline.phones.map((p: string) => (
                      <p key={p} className="text-slate-800 text-sm font-semibold">{p}</p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                    <Phone className="text-sky-600" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-medium">Phone</p>
                    <p className="text-slate-800 text-sm font-semibold">{airline.phone}</p>
                  </div>
                </div>
              )}

              {/* WhatsApp */}
              {airline.whatsapp && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-green-500" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-medium">WhatsApp</p>
                    <p className="text-slate-800 text-sm font-semibold">{airline.whatsapp}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Faint background text watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden">
             <h1 className="text-8xl font-black italic text-[#1e3a8a] -rotate-12 whitespace-nowrap">
               {airline.title}
             </h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
