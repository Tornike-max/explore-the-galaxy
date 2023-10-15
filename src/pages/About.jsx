function About() {
    return (
        <div className="bg-gray-100 min-h-screen p-4 md:p-8">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-purple-600">
                        About Us
                    </h1>
                    <p className="text-lg text-gray-700">
                        Discover our mission, vision, and values.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
                <h2 className="text-xl font-semibold text-purple-600 mb-4">Our Mission</h2>
                <p className="text-gray-700">
                    At Galaxy Explorations, our mission is to inspire and educate people about the wonders of the universe. We believe that everyone, regardless of their background, should have the opportunity to explore and appreciate the cosmos.
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mt-4">
                <h2 className="text-xl font-semibold text-purple-600 mb-4">Our Vision</h2>
                <p className="text-gray-700">
                    Our vision is to become a leading platform for stargazing and astronomy experiences. We aim to provide easy access to quality telescopes and knowledgeable guides for anyone interested in exploring the night sky.
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mt-4">
                <h2 className="text-xl font-semibold text-purple-600 mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>We are passionate about astronomy and stargazing.</li>
                    <li>We value education and knowledge sharing.</li>
                    <li>We prioritize the safety and satisfaction of our customers.</li>
                </ul>
            </div>
        </div>
    )
}

export default About
