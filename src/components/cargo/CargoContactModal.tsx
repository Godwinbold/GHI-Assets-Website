import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";

interface CargoContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CargoContactModal({ isOpen, onClose }: CargoContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close when clicking the backdrop (not the modal itself)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby="cargo-modal-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-[450px] bg-white rounded-xl shadow-2xl p-8"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Close × */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">
                Cargo Division
              </p>
              <h2
                id="cargo-modal-title"
                className="text-2xl font-semibold tracking-tight text-slate-900"
              >
                Contact Cargo Team
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Need assistance with cargo bookings, shipment enquiries, or
                pricing? Our team is ready to help.
              </p>
            </div>

            {/* Divider */}
            <div className="mb-6 h-px w-full bg-slate-100" />

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="tel:+2348034911715"
                className="flex items-center gap-4 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 transition-colors hover:border-amber-200 hover:bg-amber-50 group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-200 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Phone</p>
                  <p className="text-sm font-semibold text-slate-800">+234 803 491 1715</p>
                </div>
              </a>

              <a
                href="mailto:cargo@ghiassets.com"
                className="flex items-center gap-4 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 transition-colors hover:border-amber-200 hover:bg-amber-50 group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-200 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Email</p>
                  <p className="text-sm font-semibold text-slate-800">cargo@ghiassets.com</p>
                </div>
              </a>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="mt-8 w-full rounded-sm bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
