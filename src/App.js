import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import NotFound from "./components/NotFound";
import BlogDetails from "./components/BlogDetails";

function App() {
    return ( <
        >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/blogs/:blogId"
        element = { < BlogDetails / > }
        /> <
        Route path = "/addBlogs"
        element = { < AddForm / > }
        /> <
        Route path = "*"
        element = { < NotFound / > }
        />

        <
        /Routes> < / >
    );
}

export default App;