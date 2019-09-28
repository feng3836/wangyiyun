import Loadable from "react-loadable";
import Loading from "@common/loading";

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
});

const Collection = Loadable({
    loader:()=>import("./collection"),
    loading:Loading
});

const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
});

const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
});

const Register = Loadable({
    loader:()=>import("./register"),
    loading:Loading
});

const SongListDetail = Loadable({
    loader:()=>import("./songListDetail"),
    loading:Loading
});

const SongPlayDetail = Loadable({
    loader:()=>import("./songPlayDetail"),
    loading:Loading
});

export {
    Home,
    Collection,
    Mine,
    Login,
    Register,
    SongListDetail,
    SongPlayDetail
}