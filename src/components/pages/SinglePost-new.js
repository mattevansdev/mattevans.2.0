import React, { useEffect, useState } from "react";
import sanityClient from "../../client";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function SinglePosts() {
    const [postData, setPostData] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(
            `*[slug.current == $slug]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image
            }`,
            { slug }
        )
            .then((data) => setPostData(data[0]))
            .catch(console.error);
    }, { slug });

    if (!postData) return <div>Loading...</div>

    return (
        <div className="bg-gray-50 min-h-screen dark:bg-gray-800 dark:text-gray-300">
            <div className="container min-h-screen p-12">
                <div className="max-w-5xl mx-auto">
                <div className="dark:text-gray-300">
                        <h2 className="flex justify-center py-4 text-3xl text-center md:text-5xl font-extrabold dark:text-gray-300">
                            {postData.title}
                        </h2>
                        <div className="flex justify-center text-gray-800 dark:text-gray-300">

                            <span className="flex items-center pl-2 text-sm">
                                Written by: {postData.name}
                            </span>
                        </div>
                    </div>
                    <div className="relative p-10 ">
                        <div className="absolute h-full w-full flex items-center justify-center p-8">
                        </div>
                        <img
                            className="h-48 w-full object-cover rounded-xl"
                            src={urlFor(postData.mainImage).url()}
                            alt=""
                            style={{ height: "400px" }}
                        />
                    </div>
                    <div className="pt-3 pl-3 pr-3 pb-20 text-2xl leading-10 max-w-7xl mx-auto prose lg:prose-xl  dark:text-gray-300">
                        <BlockContent
                            blocks={postData.body}
                            projectId={sanityClient.projectId}
                            dataset={sanityClient.dataset}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}