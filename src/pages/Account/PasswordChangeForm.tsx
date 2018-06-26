import * as React from "react";
import { auth } from "../../firebase";

interface InterfaceProps {
  error?: any;
  history?: any;
  passwordOne?: string;
  passwordTwo?: string;
}

interface InterfaceState {
  error?: any;
  passwordOne?: string;
  passwordTwo?: string;
}

export class PasswordChangeForm extends React.Component<
  InterfaceProps,
  InterfaceState
> {
  private static INITIAL_STATE = {
    error: null,
    passwordOne: "",
    passwordTwo: ""
  };

  private static propKey(propertyName: string, value: string): object {
    return { [propertyName]: value };
  }

  constructor(props: any) {
    super(props);
    this.state = { ...PasswordChangeForm.INITIAL_STATE };
  }

  public onSubmit = (event: any) => {
    const { passwordOne }: any = this.state;

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...PasswordChangeForm.INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(PasswordChangeForm.propKey("error", error));
      });

    event.preventDefault();
  };

  public render() {
    const { passwordOne, passwordTwo, error }: any = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <form onSubmit={event => this.onSubmit(event)}>
        <input
          value={passwordOne}
          onChange={event => this.setStateWithEvent(event, "passwordOne")}
          type="password"
          placeholder="New Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setStateWithEvent(event, "passwordTwo")}
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }

  private setStateWithEvent(event: any, columnType: string): void {
    this.setState(
      PasswordChangeForm.propKey(columnType, (event.target as any).value)
    );
  }
}
