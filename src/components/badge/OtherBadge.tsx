export default function OtherBadge({url}: {url:string}) {
    return (
    <a href={url} target="_blank" rel="noreferrer" className="flex px-2 bg-gray-200 rounded-3xl outline items-center gap-1 text-gray-600 transition-colors hover:text-gray-400">
        <img src={"cf-icon.png"} className="h-4"/>
    <p className="text-sm">Website</p></a>
    )
}