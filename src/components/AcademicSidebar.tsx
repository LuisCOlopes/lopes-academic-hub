
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import AuthButton from './AuthButton';
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
  Crown,
  Newspaper,
  Camera,
  Heart,
  Wrench,
  Calendar,
  Target,
  Mic,
  PenTool,
  Video,
  MessageSquare,
  HelpCircle,
  Coffee,
  Trophy,
  Presentation,
  BookmarkPlus,
  Lightbulb,
  NotFound
} from 'lucide-react';

const AcademicSidebar = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('home'), href: '/', icon: Home },
    { name: t('academicProfile'), href: '/academic', icon: User },
    { name: t('about'), href: '/about', icon: BookOpen },
    { name: t('research'), href: '/research', icon: Target },
    { name: t('publications'), href: '/publications', icon: FileText },
    { name: t('projects'), href: '/projects', icon: Briefcase },
    { name: t('teaching'), href: '/teaching', icon: GraduationCap },
    { name: t('materials'), href: '/material', icon: BookmarkPlus },
    { name: t('team'), href: '/team', icon: Users },
    { name: t('alumni'), href: '/alumni', icon: Award },
    { name: t('speaking'), href: '/speaking', icon: Mic },
    { name: t('service'), href: '/service', icon: Heart },
    { name: t('leadership'), href: '/leadership', icon: Crown },
    { name: t('news'), href: '/news', icon: Newspaper },
    { name: t('media'), href: '/media', icon: Camera },
    { name: t('community'), href: '/community', icon: Users },
    { name: t('workshops'), href: '/workshops', icon: Wrench },
    { name: t('involvement'), href: '/get-involved', icon: HelpCircle },
    { name: t('podcast'), href: '/podcast', icon: Mic },
    { name: t('blog'), href: '/blog', icon: PenTool },
    { name: t('speakingWorkshops'), href: '/speaking-workshops', icon: Presentation },
    { name: t('mediaPodcast'), href: '/media-podcast', icon: Video },
    { name: t('consulting'), href: '/consulting', icon: Briefcase },
    { name: t('opportunities'), href: '/opportunities', icon: Lightbulb },
    { name: t('meeting'), href: '/meeting', icon: Calendar },
    { name: t('hobbies'), href: '/hobbies', icon: Coffee },
    { name: t('awards'), href: '/awards', icon: Trophy },
    { name: t('conferences'), href: '/conferences', icon: Presentation },
    { name: t('studentResources'), href: '/student-resources', icon: BookOpen },
    { name: t('energyTransition'), href: '/energy-transition', icon: Lightbulb },
    { name: t('contact'), href: '/contact', icon: Mail },
  ];

  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <Link to="/" className="text-xl font-playfair font-bold text-ufu-navy">
            Prof. Website
          </Link>
        </div>
        
        <div className="mt-5 px-4">
          <div className="flex items-center gap-2 mb-4">
            <LanguageSelector />
            <AuthButton />
          </div>
        </div>

        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  isActive
                    ? 'bg-ufu-light text-ufu-navy'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={cn(
                    isActive ? 'text-ufu-navy' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-4 w-4'
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default AcademicSidebar;
