type UserAvatarProps = {
  username: string;
  avatar: string;
  size?: 'sm' | 'md' | 'lg';
};

export function UserAvatar({ username, avatar, size = 'md' }: UserAvatarProps) {
  const getInitial = (name: string): string => {
    return name.charAt(0).toUpperCase();
  };

  const sizeClasses = {
    sm: 'size-6 text-xs',
    md: 'size-8 text-sm',
    lg: 'size-12 text-lg',
  };

  return (
    <div className={`${sizeClasses[size]} rounded-box relative`}>
      {/* Image d'avatar en arrière-plan */}
      <img 
        className="w-full h-full rounded-box object-cover" 
        src={avatar} 
        alt={`Avatar de ${username}`}
      />
      {/* Initiale par-dessus l'image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {getInitial(username)}
        </span>
      </div>
    </div>
  );
}
