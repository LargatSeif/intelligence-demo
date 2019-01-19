export interface Type {
    id:    number;
    title: string;
    type:  string;
    props: Prop[];
}

export interface Prop {
    id:   number;
    text: string;
}
