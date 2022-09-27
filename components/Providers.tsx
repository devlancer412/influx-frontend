import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { UserProvider } from '@auth0/nextjs-auth0';
import { DialogContextProvider } from '../hooks/useDialog';
import { store } from '../store';

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <UserProvider>
      <Provider store={store}>
        <DialogContextProvider>{children}</DialogContextProvider>
      </Provider>
    </UserProvider>
  );
};

export default Providers;
