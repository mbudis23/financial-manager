export default function InputText({
    type="text",
    name,
    value,
    placeholder,
    onChange,
    required
})
{
    if (required==true){
        return(
            <input 
            className="focus:outline-none focus:shadow-outline w-full px-[16px] py-[12px] rounded-[6px] border text-[12px]"
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required
            />
        )
    } else {
        return(
            <input 
            className="focus:outline-none focus:shadow-outline w-full px-[16px] py-[12px] rounded-[6px] border text-[12px]"
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            />
        )
    }
}