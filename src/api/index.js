import http from "@utils/http";

// 推荐歌单
export const getSongListRecommend = (limit)=>http.get("/api/personalized",{
    limit
});

// 推荐音乐
export const getSongRecommend = (limit)=>http.get("/api/personalized/newsong");

// 热歌榜
export const getHotSong = (idx)=>http.get("/api/top/list",{
    idx
});

// 搜索
export const searchHot = ()=>http.get("/api/search/hot");


