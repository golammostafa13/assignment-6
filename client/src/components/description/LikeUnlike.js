import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import {useEffect, useState} from "react";
import { patchLikeUnlike } from "../../features/likeUnlike/likeUnlikeSlice";

export default function LikeUnlike({ id, likes, unlikes }) {
    const [liked, setLiked] = useState(likes);
    const [unliked, setUnliked] = useState(unlikes);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(patchLikeUnlike({flag: 'likes', id: id, data: liked}));
    }, [dispatch, id, liked]);

    useEffect(()=>{
        dispatch(patchLikeUnlike({flag: 'unlikes', id: id, data: unliked}));
    }, [dispatch, id, unliked]);

    const handleLike = () => {
        setLiked(liked+1);
    }
    const handleUnlike = async () => {
        setUnliked(unliked+1);
    }

    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1 cursor-pointer" onClick={handleLike}>
                <div className="shrink-0">
                    <img className="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {liked}
                </div>
            </div>
            <div className="flex gap-1 cursor-pointer" onClick={handleUnlike}>
                <div className="shrink-0">
                    <img className="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {unliked}
                </div>
            </div>
        </div>
    );
}
