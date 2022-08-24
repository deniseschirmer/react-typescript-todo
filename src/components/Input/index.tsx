import { IInput } from "../../types/interfaces"

export const Input = ({ type, place, value, onChange }: IInput) => {

    return <input type={type} placeholder={place} value={value} onChange={(e) => onChange(e.target.value)} />
}