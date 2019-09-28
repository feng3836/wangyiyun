import Loadable from "react-loadable";
import Loading from "@common/loading";

const Recommend = Loadable({
    loader:()=>import("./recommend"),
    loading:Loading
});

const HotSong = Loadable({
    loader:()=>import("./hotSong"),
    loading:Loading
});

const Search = Loadable({
    loader:()=>import("./search"),
    loading:Loading
});


export {
    Recommend,
    HotSong,
    Search
}