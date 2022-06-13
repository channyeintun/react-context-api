import { MyContext } from "./MyContext";

export function MyApp(){
      return (
            <MyContext.Consumer>
                  {
                        (context)=>{
                              console.log('context',context)
                              return <h1>{context.value}</h1>
                        }
                  }
            </MyContext.Consumer>
      )
}