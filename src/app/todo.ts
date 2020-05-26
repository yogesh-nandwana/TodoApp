export class Todo {
    id:number;
    userId:string;
    text:string;
    completed:boolean;

    constructor(obj:Object={}){
        Object.assign(this,obj);
    }
}