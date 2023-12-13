import axios from "axios";
import { create } from "zustand";

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

type State = {
    name: string,
    post: Post,
    posts: Post[],
}

type Action = {
    setName: (name: State['name']) => void
    setPost: (postId?: string, setError?: any) => void
    setPosts: () => void
}

export const hookStore = create<State & Action>((set) => ({
    name: "",
    post: { userId: 0, id: 0, title: "", body: "" },
    posts: [],

    setName: (name) => set(() => ({ name })),
    setPost: (postId, setError) => {
        if (postId) {
            axios(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((result) => {
                set(() => ({ post: result.data }))
                setError("")
            }).catch((err) => {
                console.log(err)
                setError(err.name)
            });
        }
        else {
            set(() => ({ post: { userId: 0, id: 0, title: "", body: "" } }))
        }
    },
    setPosts: () => {
        axios("https://jsonplaceholder.typicode.com/posts").then((result) => {
            set(() => ({ posts: result.data }))
        }).catch((err) => {
            console.log(err)
        });
    }
}))