import { MouseEventHandler } from "react";

export interface ITitle { 
    title: string;
}

export interface ILabel {
    label: string;
}

export interface IInput {
    type: string;
    place: string;
    value: string | number;
    onChange: Function;
}

export interface IButton {
    title: string;
    cadTarefas: MouseEventHandler<HTMLButtonElement>;
}

export interface ILista {
    lista: Array<String>;
}