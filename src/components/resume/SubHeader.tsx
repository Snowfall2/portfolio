import Header from "./Header";
export default function Education({title, beginDate, endDate}:
    {title:string, beginDate:string | null, endDate:string | null}
) {

    return (
        <>
            <div className="flex justify-between">
                <p><b>{title}</b></p>
                {beginDate && endDate && <p className="font-bold">{beginDate} - {endDate}</p>}
                {beginDate && <p className="font-bold">{beginDate}</p>}
            </div>
        </>
    )
}