import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";


export default function AllPosts() {
    const [allPostData, setAllPosts] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                description,
                slug,
                mainImage{
                    asset->{
                    _id,
                    url
                },
                publishedAt,
                }
            }`
        )
            .then((data) => setAllPosts(data))
            .catch(console.error);
    }, [])

    return (
        <div>
            <div className="bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl leading-10 tracking-tight front-extrabold text-gray-900 dark:text-gray-300">From the blog</h2>
                    <p className="mt-5 max-w-2xl mx-auto text-xl leading-7 text-gray-500 dark:text-gray-100">
                        Latest blogs and reviews
                    </p>
                </div>
                <div className="mt-12 grid gap-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                    {allPostData &&
                        allPostData.map((post, index) => (
                            <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                    <div className="flex-shrink-0">
                                        <img className="h-48 w-full object-cover" src={post.mainImage.asset.url} alt="Main Hero Blog"></img>
                                    </div>
                                    <div className="bg-gray-50 flex-1 p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <p className="text-sm leading-5 font-medium text-indigo-600">Blog</p>
                                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">{post.title}</h3>
                                            <p className="mt-3 text-base leading-6 text-gray-500">{post.description}</p>
                                        </div>
                                        <div className="mt-6 flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src="/assets/images/profile.JPG" alt="Matt Evans"></img>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm leading-5 font-medium text-gray-900">Matt Evans</p>
                                                <p className="text-sm leading-5 text-gray-500">{post.publishedAt}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
}