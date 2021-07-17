import {useEffect} from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Login, Signup, Chat } from "components";
import { useAuth, useResolved } from "hooks";
import { ChatProvider } from 'context';

export const App = () => {
  const history = useHistory();
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);

  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? "/" : "/login");
    }
  }, [authUser, authResolved, history]);

  return authResolved ? (
    <ChatProvider authUser={authUser}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </ChatProvider>
  ) : (
    <> Loading... </>
  );
}


