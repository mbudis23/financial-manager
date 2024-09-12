import Link from "next/link";

export default function NavigationBar()
{
    return(
        <div className="bg-white border border-black h-full w-full text-black py-[24px] px-[48px] flex flex-col gap-[12px]">
            <h1 className="text-[36px] text-center font-bold">Financial Manager</h1>
            <div className="w-full text-[16px] flex flex-col gap-[3px]">
                <Link href={''}>Accounts</Link>
                <Link href={''}>Categories</Link>
                <Link href={''}>Incomes</Link>
                <Link href={''}>Expenses</Link>
                <Link href={''}>Transfers</Link>
            </div>
        </div>
    )
}