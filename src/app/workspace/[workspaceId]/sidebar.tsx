import { UserButton } from '@/features/auth/components/user-button';
import { WorkspaceSwitcher } from './workspace-switcher';
import { Bell, Home, MessageSquare, MoreHorizontal } from 'lucide-react';
import { SidebarButton } from './sidebar-button';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
  const pathName = usePathname();
  return (
    <aside className="w-[70px] h-full bg-[rgb(72,19,73)] flex flex-col gap-y-4 items-center pt-[9px] pb-4">
      <WorkspaceSwitcher />
      <SidebarButton
        icon={Home}
        label="Home"
        isActive={pathName.includes('/workspace')}
      />
      <SidebarButton icon={MessageSquare} label="DMs" />
      <SidebarButton icon={Bell} label="Atividades" />
      <SidebarButton icon={MoreHorizontal} label="Mais" />
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};
