import React, { useEffect, useState } from "react";
import { Container, Row, Media } from "reactstrap";
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
        <div>
            <Container>
                <Row>
                <h2>Blog</h2>
                <Container>
                    {allPostData &&
                        allPostData.map((post, index) => (
                            <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                                <span key={index}>
                                    <img className="img" src={post.mainImage.asset.url} alt="Main Hero Blog"></img>
                                    <span>
                                        <h2>{post.title}</h2>
                                    </span>
                                </span>
                            </Link>
                        ))}
                </Container>
                </Row>
            </Container>
        </div>

    );
}