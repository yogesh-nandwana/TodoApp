export class Todo {
    id:number;
    userId:string;
    text:string;
    completed:boolean;
    createdOn:number;
    completedOn?:number;

    constructor(id:number,userId:string,text:string){
        this.id = id;
        this.userId = userId;
        this.text = text;
        this.completed = false;
        this.createdOn = Date.now();
    }

   getCompletionTime():string {
        if(this.completedOn){
            return new Date(this.completedOn).toString();
        }else{
            return null;
        }        
    }
}