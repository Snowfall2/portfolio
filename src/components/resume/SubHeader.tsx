import CodeforcesBadge from "../badge/CodeforcesBadge";
import GithubBadge from "../badge/GithubBadge";

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
                <div className="flex flex-row gap-5">
                    <p><b>{ title + (desc? "  -  " + desc:"")}</b></p>

                    <div className="flex flex-row gap-5 max-md:hidden">
                        {urls && urls.map((url) => {
                            if(url.includes("github")) {
                                return <GithubBadge key={url} url={url}/>
                            }
                            if(url.includes("codeforces")) {
                                return <CodeforcesBadge key={url} url={url}/>
                            }
                            return null;
                        })}
                    </div>
                </div>
                {beginDate && endDate && <p className="font-bold">{beginDate} - {endDate}</p>}
                {beginDate && !endDate && <p className="font-bold">{beginDate}</p>}
            </div>
            <div className="flex flex-row gap-5 md:hidden">
                {urls && urls.map((url) => {
                    if(url.includes("github")) {
                        return <GithubBadge key={url} url={url}/>
                    }
                    if(url.includes("codeforces")) {
                        return <CodeforcesBadge key={url} url={url}/>
                    }
                    return null;
                })}
            </div>
            {children}
        </div>
    )
}