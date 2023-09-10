import { FC, HTMLAttributes } from "react";
import { Roles } from "../../utils/types/access";
import { useAuth } from "../../data/context/AuthContext";

interface AccessControllerProps extends HTMLAttributes<HTMLDivElement> {
  role: Roles;
}

const AccessController: FC<AccessControllerProps> = ({ role, children }) => {
  const { user } = useAuth();
  return user && user.role === role ? <div>{children}</div> : <></>;
};

export default AccessController;
