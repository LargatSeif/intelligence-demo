import { Question } from '../question.model';
import { length } from '../props/length.model';

export class Number extends Question {
    public type='number';
    public length:length;

    constructor(){
        super();
    }
    
}