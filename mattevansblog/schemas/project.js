export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    { value: "Personal", title: "Personal" },
                    { value: "Client", title: "Client" },
                    { value: "School", title: "School" },
                ],
            }
        },
        {
            name: 'projectImage',
            title: 'Project image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "code",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                }
            ],
            options: {
                layout: "tags",
            }
        }
    ]
}