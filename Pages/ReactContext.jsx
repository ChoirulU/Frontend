import React, { createContext, useState} from "react";
import ContextComp1 from "../componen/Component1";
import ContextComp2 from "../componen/Component2";

export const MyContext = createContext();

const ReactContext = () => {
    const [data, setData] = useState(0);
    return ( 
        <div>
            {data}
            <MyContext.Provider value={[data, setData]}>
                <ContextComp1/>
                <ContextComp2/>
            </MyContext.Provider>
        </div>
     );
}
 
export default ReactContext;