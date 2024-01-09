import { Reveal } from "./reveal";

export const BlogCard = (props: any) => {

    const { data } = props

    const openLink = (url: string) => {
        window.open(url, '_blank')
    }

    const truncate = (str: string) => {
        return str.length > 150 ? str.substring(0, 150) + "..." : str;
    }

    return (
        <div className="shadow-lg min-w-[300px] max-w-[300px] cursor-pointer" onClick={() => openLink(data?.linkToArticle)}>
            {/* <img src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg" alt="" className="rounded-ss-lg rounded-se-lg max-w-56" /> */}
            {/* <img src={data?.image} className="rounded-ss-lg rounded-se-lg w-full max-h-56 object-cover"  /> */}
            <div className="p-4">
                <div className="flex">
                    <div className="bg-cyan-300 w-fit px-2 text-[#141414] my-6">
                        Nov 20
                    </div>
                    <div className="bg-[#ccc] w-fit px-2 text-white my-6">
                        7 mins read
                    </div>
                </div>
                <div className="font-bold text-xl pb-4">
                    { data?.meta?.title }
                </div>
                <div className="text-[#808080]">
                    { truncate(data?.meta?.description) }
                </div>
            </div>
        </div>
    )
}