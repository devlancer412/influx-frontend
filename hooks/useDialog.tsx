import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  ReactPortal,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

type DialogContextProps = {
  showDialog: (children: ReactNode) => void;
  hideDialog: () => void;
};

const DialogContext = createContext<DialogContextProps>(
  {} as DialogContextProps
);

export const DialogContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [dialog, setDialog] = useState<ReactNode>();
  const [dialogWindow, setDialogWindow] = useState<ReactPortal>();

  useEffect(() => {
    setIsBrowser(false);
  }, []);

  useEffect(() => {
    if (dialog !== undefined) {
      setDialogWindow(
        ReactDOM.createPortal(
          dialog as ReactNode,
          document.getElementById('modal-root') as Element
        )
      );
    }
  }, [dialog]);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBrowser(false);
  };

  const handlePrevent = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const showDialog = (children: ReactNode) => {
    const modalContent = (
      <div
        className='fixed t-0 l-0 w-[100vw] h-screen flex justify-center items-center bg-black bg-opacity-30 z-10 backdrop-blur-[15px]'
        onClick={handleCloseClick}
      >
        <div
          className='bg-transparent rounded-sm relative lg:w-auto lg:h-auto flex justify-center items-center'
          onClick={handlePrevent}
        >
          {children}
        </div>
      </div>
    );

    setDialog(modalContent as ReactNode);
    setIsBrowser(true);
  };

  const hideDialog = () => {
    setIsBrowser(false);
  };

  const values: DialogContextProps = useMemo(
    () => ({
      showDialog,
      hideDialog,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (isBrowser) {
    typeof window !== 'undefined'
      ? (document.querySelector('body').style.overflow = 'hidden')
      : null;
  } else {
    typeof window !== 'undefined'
      ? (document.querySelector('body').style.overflow = 'auto')
      : null;
  }

  return (
    <DialogContext.Provider value={values}>
      <>
        {isBrowser ? dialogWindow : null}
        {children}
      </>
    </DialogContext.Provider>
  );
};

export default function useDialog() {
  const context = useContext(DialogContext);

  if (context === undefined) {
    throw new Error(
      'useDialog hook must be used with a DialogContextProvider component'
    );
  }

  return context;
}
