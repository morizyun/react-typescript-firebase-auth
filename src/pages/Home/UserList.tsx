import * as React from "react";

interface InterfaceProps {
  users?: any;
}

export class UserList extends React.Component<InterfaceProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { users }: any = this.props;

    return (
      <div>
        <h2>List of User name</h2>
        <p>(Saved on Sign Up in Firebase Database)</p>

        <ul>
          {Object.keys(users).map(key => {
            return <li key={key}>{users[key].username}</li>;
          })}
        </ul>
      </div>
    );
  }
}
