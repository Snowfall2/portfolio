export default function CodeforcesBadge({url}: {url:string}) {
    return (
    <a href={url} target="_blank" rel="noreferrer"  className="flex items-center px-1 bg-green-100 rounded-3xl outline outline-green-300 gap-1 text-gray-600 transition-colors hover:text-gray-400">
        <img src={"cf-icon.png"} className="h-4"/>
        <p className="text-sm">Codeforces</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16" className="bi bi-box-arrow-up-right"><path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path><path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path></svg>
    </a>
    )
}