import Link from "next/link";

export default function NavigationBar()
{
    return(
        <nav className="bg-white border border-black h-full w-[240px] text-black py-[24px] px-[48px] flex flex-col gap-[12px] rounded-[12px]">
            <h1 className="text-[32px] text-center font-bold leading-[32px] py-[4px] border-b-[2px] border-black">Financial Manager</h1>
            <div className="w-full text-[16px] flex flex-col gap-[3px]">
                <Link className="hover:underline" href={''}>Accounts</Link>
                <Link className="hover:underline" href={''}>Categories</Link>
                <Link className="hover:underline" href={''}>Incomes</Link>
                <Link className="hover:underline" href={''}>Expenses</Link> 
                <Link className="hover:underline" href={''}>Transfers</Link>
            </div>
        </nav>
    )
}