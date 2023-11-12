import { motion, AnimatePresence } from "framer-motion";
import {Box} from "@mui/material";

interface SlideInOut {
    key: string
    isVisible: boolean
    children: React.ReactNode
}

export default function SlideInOut({key, isVisible, children}: SlideInOut) {
    return (
        <AnimatePresence>
            {isVisible && <motion.div
                key={key}
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -500, opacity: 0 }}
                >
                {children}
            </motion.div>}
        </AnimatePresence>
    )
}
