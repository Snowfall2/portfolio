import CodeforcesBadge from "../badge/CodeforcesBadge";
import GithubBadge from "../badge/GithubBadge";
import OtherBadge from "../badge/OtherBadge";

export default function SubHeader({title, beginDate = undefined, endDate = undefined, desc = undefined, urls = undefined, children}:{
    title: string,
    beginDate?: string | undefined,
    endDate?: string | undefined,
    desc?: string | undefined,
    urls?: string[] | undefined,
    children: React.ReactNode
}) {

    return (
        <div className="mb-2">
            <div className="flex justify-between text-lg">
                <div className="flex max-md:flex-col flex-row max-md:gap-1 gap-5">
                    <p><b>{ title + (desc? "  -  " + desc:"")}</b></p>

                    <div className="flex flex-row gap-5">
                        {urls && urls.map((url) => {
                            if(url.includes("github")) {
                                return <GithubBadge key={url} url={url}/>
                            }
                            else if(url.includes("codeforces")) {
                                return <CodeforcesBadge key={url} url={url}/>
                            }
                            else {
                                return <OtherBadge key={url} url={url}/>
                            }
                        })}
                    </div>
                </div>
                {beginDate && endDate && <p className="font-bold text-right min-w-30 max-md:hidden">{beginDate} - {endDate}</p>}
                {beginDate && endDate && <p className="font-bold text-right min-w-30 md:hidden">{beginDate}<br/>- {endDate}</p>}
                {beginDate && !endDate && <p className="font-bold text-right min-w-30 max-md:hidden">{beginDate}</p>}
            </div>
            {children}
        </div>
    )
}