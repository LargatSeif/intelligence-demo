import { Question } from '../question.model';
import { length } from '../props/length.model';

export class Select extends Question {
    public type='select';
    public multiple:boolean;
    public choices:choice[];
    
    constructor(){
        super();
    }
    
}
export class choice{
    public value:number;
    public libelle:string;
}