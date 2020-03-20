import { createContext, useContext } from "react";

export const AppContext = createContext({});

const useAppContext = () => {
    try {
        return useContext(AppContext);
    } catch (e) {
    // eslint-disable-next-line max-len
        throw new Error(`useStateContext hook must be used in a functional component within the AppContext provider.`);
    }
};

export default useAppContext;