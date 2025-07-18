
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  Home,
  User,
  BookOpen,
  GraduationCap,
  FileText,
  Users,
  Mail,
  Award,
  Briefcase,
  Newspaper,
  Heart,
  Calendar,
  Target,
  PenTool,
  HelpCircle,
  Coffee,
  Trophy,
  Presentation,
  Lightbulb
} from 'lucide-react';

const AcademicSidebar = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('home'), href: '/', icon: Home },
    { name: t('about'), href: '/about', icon: BookOpen },
    { name: t('academicProfile'), href: '/academic', icon: User },
    { name: t('research'), href: '/research', icon: Target },
    { name: t('projects'), href: '/projects', icon: Briefcase },
    { name: t('opportunities'), href: '/opportunities', icon: Lightbulb },
    { name: t('team'), href: '/team', icon: Users },
    { name: t('consulting'), href: '/consulting', icon: Briefcase },
    { name: t('publications'), href: '/publications', icon: FileText },
    { name: t('alumni'), href: '/alumni', icon: Award },
    { name: t('awards'), href: '/awards', icon: Trophy },
    { name: t('teaching'), href: '/teaching', icon: GraduationCap },
    { name: t('studentResources'), href: '/student-resources', icon: BookOpen },
    { name: t('speakingWorkshops'), href: '/speaking-workshops', icon: Presentation },
    { name: t('service'), href: '/service', icon: Heart },
    { name: t('community'), href: '/community', icon: Users },
    { name: t('involvement'), href: '/get-involved', icon: HelpCircle },
    { name: t('blog'), href: '/blog', icon: PenTool },
    { name: t('hobbies'), href: '/hobbies', icon: Coffee },
    { name: t('conferences'), href: '/conferences', icon: Presentation },
    { name: t('news'), href: '/news', icon: Newspaper },
    { name: t('meeting'), href: '/meeting', icon: Calendar },
    { name: t('contact'), href: '/contact', icon: Mail },
  ];

  return (
    <Sidebar className="bg-gradient-to-b from-ufu-navy to-ufu-blue border-r-2 border-ufu-teal/20">
      <SidebarHeader className="p-6 bg-ufu-navy/95">
        <Link to="/" className="text-2xl font-playfair font-bold text-ufu-light hover:text-ufu-teal transition-colors">
          {t('academicHub')}
        </Link>
        <div className="mt-4">
          <LanguageSelector />
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-gradient-to-b from-ufu-blue to-ufu-navy">
        <SidebarMenu className="space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive}
                  className={cn(
                    "w-full rounded-lg transition-all duration-200 text-ufu-light hover:bg-ufu-teal/20 hover:text-white",
                    isActive && "bg-ufu-teal text-ufu-navy font-semibold shadow-md"
                  )}
                >
                  <Link to={item.href} className="flex items-center gap-3 px-3 py-2">
                    <item.icon className="h-5 w-5" />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AcademicSidebar;
