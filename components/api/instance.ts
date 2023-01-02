import axios from "axios";
import {SearchTitleContentType} from "../types/types";



export const instance = axios.create({
    baseURL:'http://www.omdbapi.com/',
    params:{
        apikey:"982a875c"
    }
});

export const api = {
    getContent:(title:string,page:number)=>{
        return instance.get<SearchTitleContentType>(`?s=${title}&page=${page}`)
    }
}