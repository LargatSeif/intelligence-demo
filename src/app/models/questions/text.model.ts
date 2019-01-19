import { Question } from '../question.model';
import { length } from '../props/length.model';

export class Text extends Question {
    public type='text';
    public length:length;
    public props;
    

    constructor(){
        super();
    }
    
}