const About = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-gray-50 text-center">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-blue-700">
        About This App
      </h2>

      {/* Description */}
      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        The <span className="font-semibold text-blue-600">Bible Quiz App</span> helps you explore the Word of God through 
        <span className="font-medium text-gray-800"> daily verses</span> and 
        <span className="font-medium text-gray-800"> interactive quizzes</span>.  
        You can also search for any verse and read it instantly using the 
        <span className="font-semibold text-indigo-600"> API.Bible</span> service.
      </p>

      {/* Decorative divider */}
      <div className="mt-6 flex justify-center">
        <div className="w-16 sm:w-24 h-1 bg-blue-600 rounded-full"></div>
      </div>
    </section>
  );
};

export default About;