import Link from 'next/link';
import React from 'react';

const coursePage = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-4 '>
                {
                    courses.map((course) => <div className=' border p-4 shadow-inner  rounded bg-gray-100' key={course.id}>
                        <h1 className='text-xl font-semibold font-mono'>{course.title}</h1>
                        <h1 className='text-orange-500 font-bold'>{course.courseFee}</h1>
                        <p className='text-gray-500 text-justify '>{course.description}</p>
                        <button className='bg-stone-700 border rounded-md text-white px-3 py-3'>
                            <Link href={`/course/${course.id}`}>view details</Link>
                        </button>

                    </div>)
                }
            </div>
        </div>
    );
};
const courses = [
    {
        "id": 1,
        "title": "Full-Stack Web Development",
        "courseFee": 500,
        "description": "Learn to build complete web applications from scratch using HTML, CSS, JavaScript, and popular frameworks like React and Node.js. This course covers both front-end and back-end technologies, providing hands-on experience through real-world projects and problem-solving exercises."
    },
    {
        "id": 2,
        "title": "Data Science with Python",
        "courseFee": 600,
        "description": "This course provides a comprehensive introduction to data science, focusing on Python libraries such as NumPy, Pandas, and Matplotlib. Learn to analyze data, create visualizations, and build machine learning models to gain actionable insights from datasets."
    },
    {
        "id": 3,
        "title": "Mobile App Development with Flutter",
        "courseFee": 400,
        "description": "Master cross-platform mobile app development using Flutter and Dart. This course guides you through the creation of high-performance apps for both Android and iOS. Learn how to design user interfaces, manage app states, and integrate backend services."
    },
    {
        "id": 4,
        "title": "Introduction to Machine Learning",
        "courseFee": 700,
        "description": "Explore the world of machine learning with this beginner-friendly course. Learn the fundamentals of supervised and unsupervised learning, model evaluation techniques, and popular algorithms such as decision trees and neural networks, using Python-based tools like scikit-learn."
    },
    {
        "id": 5,
        "title": "Cybersecurity Fundamentals",
        "courseFee": 450,
        "description": "This course covers the basic principles of cybersecurity, including threat detection, risk management, and network security. Learn how to protect systems from cyberattacks, understand encryption methods, and implement security protocols to safeguard sensitive data."
    },
    {
        "id": 6,
        "title": "Digital Marketing Strategies",
        "courseFee": 350,
        "description": "Gain in-depth knowledge of digital marketing techniques, including SEO, social media marketing, email campaigns, and content marketing. This course offers practical insights into how to drive traffic, increase brand awareness, and generate leads through digital channels."
    }
]


export default coursePage;