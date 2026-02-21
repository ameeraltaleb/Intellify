"use client";

interface AdSlotProps {
    id?: string;
    className?: string;
    label?: string;
    format?: "horizontal" | "vertical" | "square" | "rectangle";
}

export default function AdSlot({ id, className = "", label = "إعلان", format = "horizontal" }: AdSlotProps) {
    const formatClasses = {
        horizontal: "h-[90px] w-full max-w-[728px] mx-auto",
        vertical: "h-[600px] w-[160px] mx-auto",
        square: "h-[250px] w-[250px] mx-auto",
        rectangle: "h-[280px] w-full mx-auto",
    };

    return (
        <div
            id={id}
            className={`ad-slot-container ${formatClasses[format]} ${className} relative overflow-hidden bg-white border border-[#CED0D4] rounded-lg flex items-center justify-center shadow-sm`}
        >
            <div className="absolute top-1 left-2 text-[10px] text-[#65676B] font-bold uppercase tracking-widest pointer-events-none">
                {label}
            </div>
            <div className="text-center group">
                <div className="text-[#CED0D4] text-3xl mb-1 group-hover:text-[#1877F2]/30 transition-colors duration-300">📢</div>
                <p className="text-[#65676B] text-[11px] font-bold">مساحة إعلانية جاهزة</p>
                <p className="text-[#BCC0C4] text-[9px]">Google AdSense Space</p>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#1877F2]/20"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#1877F2]/20"></div>
        </div>
    );
}
