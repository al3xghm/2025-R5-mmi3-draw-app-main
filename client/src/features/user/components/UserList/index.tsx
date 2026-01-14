import { useUserListStore } from "../../store/useUserListStore";
import { UserAvatar } from "../UserAvatar/UserAvatar";

export type UserListProps = {
  users: {
    id: string;
    username: string;
    avatar: string;
  }[] /* Ici je précise explicitement que j'attends non pas un type User, mais un un array d'objets avec une clé id, username & avatar. --> Ca rend mes composants bien plus indépendants & réutilisables */
}

export function UserList({ users }: UserListProps){
  const { userStrokeColors } = useUserListStore();

  return (
    <div className="flex flex-col gap-3">
      <span className="font-bold">Liste des utilisateurs: <div className="badge badge-soft badge-info">{users.length}</div></span>

      <ul className="list bg-base-100 rounded-box shadow-md">
        {users.length > 0 ? 
          users.map((user) => {
            const userColor = userStrokeColors.get(user.id) || '#000000';
            return (
              <li className="list-row items-center" key={user.id}>
                <div>
                  <UserAvatar username={user.username} avatar={user.avatar} size="md" />
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold">{user.username}</div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div 
                    className="size-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: userColor }}
                    title={`Couleur: ${userColor}`}
                  />
                </div>
              </li>
            );
          })
        :
        <li className="list-row opacity-50">Pas d'utilisateur connecté actuellement.<br /> Rejoignez la partie pour pouvoir dessiner.</li>
      }
      </ul>
    </div>
  )
}