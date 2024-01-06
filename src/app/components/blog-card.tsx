import { Reveal } from "./reveal";

export const BlogCard = (props: any) => {

    const { data } = props

    const openLink = (url: string) => {
        window.open(url, '_blank')
    }

    const truncate = (str: string) => {
        return str.length > 50 ? str.substring(0, 50) + "..." : str;
    }

    return (
        <div className="shadow-lg min-w-[300px] max-w-[300px] rounded-lg cursor-pointer" onClick={() => openLink(data?.linkToArticle)}>
            {/* <img src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg" alt="" className="rounded-ss-lg rounded-se-lg max-w-56" /> */}
            <img src={data?.image} className="rounded-ss-lg rounded-se-lg w-full max-h-56 object-cover"  />
            <div className="p-4">
                <div className="font-bold text-xl pb-4">
                    { data?.meta?.title }
                </div>
                { truncate(data?.meta?.description) }
            </div>
        </div>
    )
}