import { useSelector } from "react-redux";
import Page from "./Page";

export default function Pagination() {
    const { videos } = useSelector((state) => state.videos);
    const { author } = useSelector((state) => state.filter);

    const filterVideos = videos.filter(video => {
        if(author === "" || video.author === author)return true;
        return false;
    })

    const pages = Math.ceil(filterVideos.length/4);
    const arrayPages = [];
    for(let i = 1; i <= pages; i++){
        arrayPages.push(i);
    }

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {
                    arrayPages.map(page => <Page key={page} pageNo={page} />)
                }
            </div>
        </section>
    );
}
