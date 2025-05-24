
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AcademicSidebar from './AcademicSidebar';

interface AcademicLayoutProps {
  children: React.ReactNode;
}

const AcademicLayout: React.FC<AcademicLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AcademicSidebar />
        <main className="flex-1">
          <div className="p-4 border-b bg-white shadow-sm">
            <SidebarTrigger />
          </div>
          <div className="flex-1">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AcademicLayout;
