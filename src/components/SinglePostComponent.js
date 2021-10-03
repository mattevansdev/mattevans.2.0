import React, { useEffect, useState } from "react";
import sanityClient from "../client";
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
        <div className="container min-h-screen p-12">
            <div className="shadow-lg mx-auto bg-white rounded-lg">
                <div className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                    </div>
                    <img
                        className="h-48 w-full object-cover rounded-t"
                        src={urlFor(postData.mainImage).url()}
                        alt=""
                        style={{ height: "400px" }}
                    />
                </div>
                <div className="bg-white bg-opacity-75 rounded pt-5">
                            <h2 className="flex justify-center text-3xl lg:text-6xl mb-4">
                                {postData.title}
                            </h2>
                            <div className="flex justify-center text-gray-800">
                                
                                <span className="flex items-center pl-2 text-sm">
                                    Written by: {postData.name}
                                </span>
                            </div>
                        </div>
                <div className="px-10 lg:px-48 py-10 lg:py-15 prose lg:prose-xl max-w-full">
                    <BlockContent
                        blocks={postData.body}
                        projectId={sanityClient.projectId}
                        dataset={sanityClient.dataset}
                    />
                </div>
            </div>
        </div>
    )
}