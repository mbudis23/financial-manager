export default function PrimaryButton({
    displayText="Button",
    onClick=()=>{
        alert("Not Set Yet")
    }
})
{
    return(
        <button 
        type='button'
        className='px-[16px] py-[12px] bg-black text-white rounded-[6px] hover:underline font-medium border border-black text-[12px]'
        onClick={onClick}
        >
            {displayText}
        </button>
    )
}