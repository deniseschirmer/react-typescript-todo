import { IButton } from "../../types/interfaces"

export const Button = ({ title, cadTarefas }: IButton) => {
    return (
        <>
            <button onClick={cadTarefas}>{ title }</button>
        </>
    )
}