import { atomFamily } from "recoil";
import { TODOS } from "./todos";

// let u dynamically create atom   
export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    return TODOS.find((x) => x.id === id);
  },
});

/* For not USING ATOMFAMILY
    alternate hard code for atomFamily
    function atomFamily(){
        return atom();
    }


    in App.jsx change the content
    const todo = useRecoilValue(atomFamily(id));
    
*/ 