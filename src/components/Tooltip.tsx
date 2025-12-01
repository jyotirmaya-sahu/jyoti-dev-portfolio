import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import styles from "./Tooltip.module.css";

interface TooltipProps {
    children: React.ReactNode;
    content: string;
}

export default function Tooltip({ children, content }: TooltipProps) {
    return (
        <TooltipPrimitive.Provider delayDuration={200}>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        className={styles.tooltipContent}
                        sideOffset={5}
                    >
                        {content}
                        <TooltipPrimitive.Arrow className={styles.tooltipArrow} />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
}
