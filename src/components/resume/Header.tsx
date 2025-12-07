export default function Header({name}: {name:string}) {
    return (
        <>
            <h3 className="text-2xl font-bold mt-4">{name.toUpperCase()}</h3>
            <hr className="mb-4"/>
        </>
    )
}