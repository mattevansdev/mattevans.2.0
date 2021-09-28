import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";


export default function AllPosts() {
    const [allPostData, setAllPosts] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                    _id,
                    url
                }
                }
            }`
        )
            .then((data) => setAllPosts(data))
            .catch(console.error);
    }, [])

    return (
        <div className="min-h-screen p-12">
            <div className="container mx-auto">
                <div>
                    <h2 className="text-5xl flex justify-center mb-12">Blog</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPostData &&
                            allPostData.map((post, index) => (
                                <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                                    <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-600" key={index}>
                                        <img className="w-full h-full rounded-r object-cover absolute" src={post.mainImage.asset.url} alt="Main Hero Blog"></img>
                                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                            <h2 className="text-white text-lg font-bold px-3 py-2 bg-blue-600 bg-opacity-75 rounded">{post.title}</h2>
                                        </span>
                                    </span>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}