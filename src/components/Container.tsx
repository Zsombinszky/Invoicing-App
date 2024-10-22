import {cn} from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.ComponentProps<"div"> {
    // Add this if you plan to extend the props in the future
    customProp?: Record<string, unknown>;
}

const Container = ({children, className, ...props}: ContainerProps) => {
    return (
        <div {...props} className={cn("max-w-5xl mx-auto px-5", className)}>
            {children}
        </div>
    );
};

export default Container;
