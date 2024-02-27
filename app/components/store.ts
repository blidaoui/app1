import { proxy } from "valtio";


type StoreType = {
   id: number
};

const defaultStateStore = {
    id : 0
};

const initialStateStore = defaultStateStore;
const store = proxy<StoreType>(initialStateStore);


export function setId(id: number): void {
    store.id = id;
}
export default store

