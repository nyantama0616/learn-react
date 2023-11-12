import { motion, AnimatePresence } from "framer-motion";
import {Box} from "@mui/material";

interface PopInOutProps {
    key: string
    isVisible: boolean
    children: React.ReactNode
}

export default function PopInOut({key, isVisible, children}: PopInOutProps) {
    return (
        <AnimatePresence>
            {isVisible && <motion.div
                key={key}
                initial={{ y: 1000, opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.2}}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                {children}
            </motion.div>}
        </AnimatePresence>
    )
}
