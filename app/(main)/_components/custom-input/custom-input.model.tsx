export interface CustomInputModel {
    id: string
    ltr?: boolean
    require?: boolean
    label?: string
    value: string
    type?: string
    error?: string
    maxlength?: number
    className?: string
    placeholder?: string
    defaultValue?: string
    multiline?: boolean
    onChange: any
}
