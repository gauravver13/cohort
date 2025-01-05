export const Button = ({
    disabled, 
    children,
    onClick
}) => {
    return <span onClick={onClick} className={`text-4xl rounded-2xl px-28 py-2 text-white pointer ${disabled? "bg-blue-200": "bg-green-400"}`}>
        {children}
    </span>
}