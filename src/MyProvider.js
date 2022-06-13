import { MyContext } from "./MyContext";

export function MyProvider({children}){
      return (
            <MyContext.Provider value={{value:"my value"}}>
                  {children}
            </MyContext.Provider>
      )
}