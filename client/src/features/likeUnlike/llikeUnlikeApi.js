import axios from "../../utils/axios";

export const patchLikeUnlikeApi = async (flag, id, data) => {
    let response;
    if(flag === "likes"){
        response = await axios.patch(`/videos/${id}`, {
            likes : data
        })
    }else {
        response = await axios.patch(`/videos/${id}`, {
            unlikes : data
        })
    }

    return response.data;
};
  