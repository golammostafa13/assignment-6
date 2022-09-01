import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, setAuthor } from "../../features/filter/filterSlice";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

export default function Tags() {
    const { tags } = useSelector((state) => state.tags);
    const dispatch = useDispatch();
    const {tags : selectedTags, search, author} = useSelector((state) => state.filter);

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    const handleReset = () => {
        dispatch(reset());
        dispatch(setAuthor(""));
    }

    return tags?.length > 0 ? (
        <section className="max-w-7xl mx-auto lg:px-0 flex justify-between sticky top-2">
            <div className="max-w-7xl px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {tags.map((tag) => (
                    <Tag key={tag.id} title={tag.title} />
                ))}
            </div>
            {(selectedTags.length !==0 || search !=="" || author !== "") && <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 overflow-y-auto">
                <button className="bg-green-600 text-white px-4 py-1 rounded-full cursor-pointer" onClick={handleReset}>Reset</button>
            </div>}
        </section>
    ) : null;
}
