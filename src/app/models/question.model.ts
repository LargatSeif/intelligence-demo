export class Question {
    private id: number;
    private question: string;
    public required:boolean;
    getId() {
        return this.id
    }
    setId(id: number) {
        this.id = id;
        return this.id;
    }
    setQuestion(question: string) {
        this.question = question;
        return this.question;
    }
    getQuestion() {
        return this.question
    }
}