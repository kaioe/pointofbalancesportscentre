import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import './DescriptionTooltip.css'

function DescriptionTooltip({ isOpen, onClose, title, description }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="tooltip-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Tooltip Content */}
          <motion.div
            className="tooltip-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="tooltip-header">
              <h3 className="tooltip-title">{title}</h3>
              <button
                className="tooltip-close"
                onClick={onClose}
                aria-label="Close description"
              >
                <X size={20} />
              </button>
            </div>
            <div className="tooltip-body">
              <p>{description}</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default DescriptionTooltip
