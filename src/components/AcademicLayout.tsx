
import React from 'react';
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import AcademicSidebar from './AcademicSidebar';

interface AcademicLayoutProps {
  children: React.ReactNode;
}

const AcademicLayout: React.FC<AcademicLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AcademicSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AcademicLayout;
