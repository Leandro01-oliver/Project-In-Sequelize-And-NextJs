import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


type DataString = {
  dataEvento : []
}

type DataCotextType = {
  dataEvento: DataString | null,
  setDataEvento : Dispatch<SetStateAction<DataString | null>>
}

type ContextProviderProps = {
    children: ReactNode | undefined;
}

export const GlobalContext = createContext<DataCotextType | null>(null);

export const GlobalContextProvider = ({ children } : ContextProviderProps) =>{

    const [dataEvento,setDataEvento] = useState<DataString | null>(null);

    const value = {
      dataEvento,
      setDataEvento
    }

   return (
        <GlobalContext.Provider 
           value={value}>
            { children }
        </GlobalContext.Provider>
   );
}