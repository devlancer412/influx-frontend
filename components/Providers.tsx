import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { DialogContextProvider } from '../hooks/useDialog';
import { store } from '../store';

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <DialogContextProvider>{children}</DialogContextProvider>
    </Provider>
  );
};

export default Providers;
