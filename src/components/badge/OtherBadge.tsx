export default function OtherBadge({url}: {url:string}) {
    return (
    <a href={url} target="_blank" rel="noreferrer" className="flex px-2 bg-yellow-100 rounded-3xl outline outline-yellow-400 items-center gap-1 text-gray-600 transition-colors hover:text-gray-400">
    <p className="text-sm">Live Website</p></a>
    )
}