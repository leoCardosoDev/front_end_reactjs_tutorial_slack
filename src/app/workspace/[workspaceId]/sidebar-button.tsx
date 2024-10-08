import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons/lib';

interface SidebarButtonProps {
  icon: LucideIcon | IconType;
  label: string;
  isActive?: boolean;
}

export const SidebarButton = ({
  icon: Icon,
  label,
  isActive,
}: SidebarButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-0.5 cursor-pointer group">
      <Button
        variant="transparent"
        size="icon"
        className={cn('group-hover:bg-accent/20', isActive && 'bg-accent/20')}
      >
        <Icon className="w-6 h-6 text-white" />
      </Button>
      <span className="text-[11px] text-white group-hover:text-accent">
        {label}
      </span>
    </div>
  );
};
