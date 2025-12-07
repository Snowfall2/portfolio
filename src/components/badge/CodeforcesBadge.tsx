export default function CodeforcesBadge({url}: {url:string}) {
    return (
    <a href={url} target="_blank" rel="noreferrer"  className="flex items-center px-2 bg-green-100 rounded-3xl outline outline-green-300 gap-1 text-gray-600 transition-colors hover:text-gray-400">
        <img src={"cf-icon.png"} className="h-4"/>
        <p className="text-sm">Codeforces</p>
    </a>
    )
}