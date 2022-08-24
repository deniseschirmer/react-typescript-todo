import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import { ListTarefas } from "../ListTarefas";

export const CadTarefa = () => {
    const [tarefa, setTarefa] = useState<string>('');
    const [tarefas, setTarefas] = useState<Array<string>>([]);

    function cadTarefas() {
        if (tarefa == '' || tarefa == undefined) {
            alert('Você não pode cadastrar uma tarefa vazia!')
        } else {
            setTarefas([
                ...tarefas,
                tarefa
            ]);
            setTarefa('');
        }
    }

    return (
        <>
            <Label label="Nome da tarefa: " /><br />
            <Input type="text" place="Digite uma tarefa" value={tarefa} onChange={setTarefa} /><br />
            <Button title="Registrar" cadTarefas={cadTarefas} /><br />
            <ListTarefas lista={tarefas} />
        </>
    )
}