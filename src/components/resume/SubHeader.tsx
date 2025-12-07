export default function SubHeader({title, beginDate, endDate, desc, children}:
    {title:string, beginDate:string | null, endDate:string | null, desc: string | null, children: React.ReactNode}
) {

    return (
        <>
            <div className="flex justify-between text-lg">
                <p><b>{title}</b></p>
                {beginDate && endDate && <p className="font-bold">{beginDate} - {endDate}</p>}
                {beginDate && !endDate && <p className="font-bold">{beginDate}</p>}
            </div>
            <div className="text-lg">{desc}</div>
            {children}
        </>
    )
}