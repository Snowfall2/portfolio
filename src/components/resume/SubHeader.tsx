export default function SubHeader({title, beginDate = null, endDate = null, desc = null, children}:
    {title:string, beginDate:string | null, endDate:string | null, desc: string | null, children: React.ReactNode}
) {

    return (
        <div className="mb-2">
            <div className="flex justify-between text-lg">
                <p><b>{ title + (desc? "  -  " + desc:"")}</b></p>
                {beginDate && endDate && <p className="font-bold">{beginDate} - {endDate}</p>}
                {beginDate && !endDate && <p className="font-bold">{beginDate}</p>}
            </div>
            {children}
        </div>
    )
}