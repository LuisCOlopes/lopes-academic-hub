
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { 
  Home, 
  Users, 
  Book, 
  BookOpen, 
  FileText, 
  Contact,
  Calendar,
  Newspaper,
  Youtube,
  Award
} from 'lucide-react';

const AcademicSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const menuItems = [
    { title: t('home'), url: '/', icon: Home },
    { title: t('about'), url: '/about', icon: Users },
    { title: t('research'), url: '/research', icon: Book },
    { title: t('projects'), url: '/projects', icon: BookOpen },
    { title: t('opportunities'), url: '/opportunities', icon: FileText },
    { title: t('requestMeeting'), url: '/meeting', icon: Calendar },
    { title: t('teaching'), url: '/teaching', icon: Book },
    { title: t('studentResources'), url: '/student-resources', icon: BookOpen },
    { title: t('publications'), url: '/publications', icon: FileText },
    { title: t('conferences'), url: '/conferences', icon: Calendar },
    { title: t('speakingEngagements'), url: '/speaking', icon: FileText },
    { title: t('workshops'), url: '/workshops', icon: Book },
    { title: t('consulting'), url: '/consulting', icon: FileText },
    { title: t('team'), url: '/team', icon: Users },
    { title: t('alumni'), url: '/alumni', icon: Users },
    { title: 'Prêmios', url: '/awards', icon: Award },
    { title: t('service'), url: '/service', icon: FileText },
    { title: t('leadership'), url: '/leadership', icon: Users },
    { title: t('getInvolved'), url: '/get-involved', icon: Users },
    { title: t('community'), url: '/community', icon: Users },
    { title: t('podcast'), url: '/podcast', icon: Youtube },
    { title: t('media'), url: '/media', icon: Newspaper },
    { title: t('hobbies'), url: '/hobbies', icon: Users },
    { title: t('contact'), url: '/contact', icon: Contact },
    { title: t('news'), url: '/news', icon: Newspaper },
    { title: t('blog'), url: '/blog', icon: FileText },
  ];

  return (
    <Sidebar className="bg-gradient-to-b from-ufu-navy to-ufu-blue">
      <SidebarHeader className="p-6">
        <div className="text-center">
          <h2 className="text-xl font-playfair font-bold text-white mb-2">
            Prof. Luís Cláudio
          </h2>
          <p className="text-ufu-light text-sm">Chemical Engineering</p>
          <div className="mt-4">
            <LanguageSelector />
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupLabel className="text-ufu-light font-semibold">
            Academic Hub
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.url)}
                    className={`text-white hover:bg-white/20 transition-colors ${
                      location.pathname === item.url ? 'bg-white/30' : ''
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="text-center text-ufu-light text-xs">
          <p>© 2024 Prof. Luís Cláudio</p>
          <p>UFU - Chemical Engineering</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AcademicSidebar;
