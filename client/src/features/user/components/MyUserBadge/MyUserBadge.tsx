import { UserAvatar } from "../UserAvatar/UserAvatar";

export type MyUserBadgeProps = {
  username: string;
  avatar: string;
}

export const MyUserBadge = (myUser: MyUserBadgeProps) => {
  return (
    <div className="my-user-badge badge badge-lg badge-primary badge-soft">
      <UserAvatar username={myUser.username} avatar={myUser.avatar} size="sm" />
      <span className="username">{myUser.username}</span>
    </div>
  );
}