import { useEffect, useState } from "react"
import { CadTarefa } from "./components/CadTarefa"
import { ListTarefas } from "./components/ListTarefas"
import { Title } from "./components/Title"

export const App = () => {
    return (
        <>
            <Title title="Cadastrar tarefas" />
            <CadTarefa />
        </>
    )
}