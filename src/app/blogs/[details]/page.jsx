

const BlogDetails = ({ params }) => {
    console.log('blog details', params.details);
    const { title, description } = blogs.find((blog) => blog.id == params.details)
    return (
        <div className="mt-40">
            <div className="w-[50%] border shadow-2xl border-green-600 rounded p-5 mx-auto ">
                <h2 className="text-2xl text-gray-400 font-bold font-serif">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};
const blogs = [
    {
        "id": 1,
        "title": "Introduction to JavaScript",
        "description": "JavaScript is a versatile programming language used for creating dynamic content on websites. It's the core technology behind modern web applications and works seamlessly with HTML and CSS to enhance user experience. Learning JavaScript opens doors to front-end and back-end development."
    },
    {
        "id": 2,
        "title": "Next.js: The React Framework",
        "description": "Next.js is a powerful React framework for building server-side rendered and statically generated websites. It simplifies React's ecosystem by providing built-in features such as routing, image optimization, and API routes. Developers prefer Next.js for its performance and ease of use."
    },
    {
        "id": 3,
        "title": "Understanding REST APIs",
        "description": "REST APIs allow communication between servers and clients using HTTP requests. They are widely used in web applications for data exchange, enabling seamless integration with external services. REST APIs support various methods like GET, POST, PUT, and DELETE for data manipulation."
    },
    {
        "id": 4,
        "title": "CSS Grid Layout",
        "description": "CSS Grid is a powerful tool for creating complex, responsive web layouts. It offers flexibility in designing grids, rows, and columns, making it easier to manage page structure. Mastering CSS Grid can drastically improve the design and responsiveness of web pages on various devices."
    },
    {
        "id": 5,
        "title": "React Hooks: An Introduction",
        "description": "React Hooks provide a way to use state and other React features without writing classes. Introduced in React 16.8, hooks such as `useState` and `useEffect` have simplified component logic and encouraged functional programming. They're essential for modern React development."
    }
]


export default BlogDetails;