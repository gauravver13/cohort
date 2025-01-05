export const Input = ({
    onClick,
    type,
    // variant,
    placeholder
}) => {
    return <span onClick={onClick} className={`text-xl rounded-xl px-2 py-2 text-white cursor-pointer bg-blue-500 outline-none`}>
        <input type={type} placeholder={placeholder} className="bg-blue500 outline-none"></input>
    </span>
}