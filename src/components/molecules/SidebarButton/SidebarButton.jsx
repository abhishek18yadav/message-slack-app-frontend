
import { Button } from "@/components/ui/button"

export const SidebarButton = ({ Icon, label }) => {
  return (
    <div className="group flex flex-col items-center justify-center cursor-pointer gap-y-0.5">
      <Button variant="transparent" className="w-9 h-9 p-2 group-hover:bg-accent/20">
        {/* Explicit width/height + color */}
        <Icon className="w-6 h-6 text-white group-hover:text-accent" />
      </Button>
      <span className="text-[10px] text-white group-hover:text-accent">
        {label}
      </span>
    </div>
  )
}