import React, { useEffect, useState } from "react";
import SanityClient from "../client.js";

export default function Project() {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        SanityClient.fetch(`*[_type == "project"] {
            title,
            date,
            place,
            projectType,
            description,
            link,
            code,
            tags
        }`).then((data) => setProjectData(data))
            .catch(console.error)

    }, []);
    return (
        <main className="min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center mb-12">Projects</h1>
                <section className="grid md:grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article className="reative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-gray-800 text 3xl font-bold mb-2 hover:text-blue-600">
                                <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-4">
                                <span>
                                    <strong className="front-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold">Company</strong>:{" "}
                                    {project.place}
                                </span>
                                <span>
                                    <strong className="font-bold">Type</strong>: {" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                                <span className="text-lg font-bold">View:</span>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className=" text-lg text-blue-500 font-bold hover:underline hover:text-blue-400">
                                    <span>Site</span>
                                </a>
                                <a href={project.code} target="_blank" rel="noopener noreferrer" className=" text-lg text-blue-500 font-bold hover:underline hover:text-blue-400">
                                    <span>Code</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}