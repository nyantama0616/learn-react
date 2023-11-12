import { motion, AnimatePresence } from "framer-motion";
import {Box} from "@mui/material";

interface SlideInOut {
    key: string
    isVisible: boolean
    children: React.ReactNode
}

export default function GhostInOut({key, isVisible, children}: SlideInOut) {
    return (
        <AnimatePresence>
            {isVisible && <motion.div
                key={key}
                initial={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 1}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                {children}
            </motion.div>}
        </AnimatePresence>
    )
}
