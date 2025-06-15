
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { User, LogOut, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';

const AuthButton = () => {
  const { user, profile, signOut, isAdmin } = useAuth();

  if (!user) {
    return (
      <Link to="/auth">
        <Button variant="outline">
          <User className="w-4 h-4 mr-2" />
          Login
        </Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <User className="w-4 h-4 mr-2" />
          {profile?.first_name || user.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="px-2 py-1.5 text-sm">
          <div className="font-medium">{profile?.first_name} {profile?.last_name}</div>
          <div className="text-muted-foreground">{user.email}</div>
          {isAdmin && (
            <div className="text-xs text-blue-600 font-medium">Administrador</div>
          )}
        </div>
        <DropdownMenuSeparator />
        {isAdmin && (
          <>
            <DropdownMenuItem asChild>
              <Link to="/dashboard">
                <Settings className="w-4 h-4 mr-2" />
                Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem onClick={signOut}>
          <LogOut className="w-4 h-4 mr-2" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthButton;
