import { Billboard  as BillboardType} from "@/types";
import { url } from "inspector";

interface BillboardProps{
    data: BillboardType
}

const Billboard = ({data}:BillboardProps)=>{
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div
                style={{backgroundImage: `url(${data?.imageUrl})`}}
                className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover "
                
            >
                <div className="w-full h-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Billboard