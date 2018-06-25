import * as React from "react";

import { AuthUserContext } from "../../firebase/AuthUserContext";
import { withAuthorization } from "../../firebase/withAuthorization";

const AdminComponent = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Admin</h1>
        <p>Restricted area! Only users with the admin rule are authorized.</p>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = (authUser: any) =>
  !!authUser && authUser.role === "ADMIN";

export const Admin = withAuthorization(authCondition)(AdminComponent);
