import { useContext } from "react"
import { MyContext } from "./MyContext"

export function MyConsumerWithHook(){
      const myValue=useContext(MyContext);
      console.log('myConsumerWithHook',myValue);
      return (
            <>
                  test
            </>
      )
}