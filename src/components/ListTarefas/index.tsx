import { ILista } from "../../types/interfaces"

export const ListTarefas = ({ lista }: ILista) => {
    return (
        <>
            {lista?.map((tarefa, index) => {
                return (
                    <ul key={index}>
                        <li>{tarefa}</li>
                    </ul>
                )
            })}
        </>
    )
}