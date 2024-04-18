import { useSearchParams } from "react-router-dom"
function Page4() {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("a"));
    return <div>this is page4

        <button onClick={() => {
            setSearchParams({
                a: 888,
                b: 666
            })
        }}>改变searchParams</button>

    </div>
}
export default Page4