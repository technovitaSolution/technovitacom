import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality",
      description: "Every project undergoes rigorous testing and quality assurance to ensure exceptional results."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Reliability",
      description: "We deliver projects on time and provide ongoing support to ensure your success."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration",
      description: "We work closely with our clients as trusted partners throughout the entire project lifecycle."
    }
  ];

  const achievements = [
    { number: "50+", label: "Successful Projects" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years of Excellence" },
    { number: "15+", label: "Team Members" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                About TechnoVita Solutions
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Empowering businesses through innovative technology solutions since 2020.
              </p>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                TechnoVita Solutions is a leading technology company dedicated to helping businesses 
                navigate the digital landscape and achieve sustainable growth through innovative solutions. 
                Our team of experienced professionals combines technical expertise with business acumen 
                to deliver exceptional results.
              </p>
              
              <p>
                We specialize in web development, mobile applications, cloud solutions, cybersecurity, 
                data analytics, and IT consulting. Our client-centric approach ensures that every 
                solution is tailored to meet specific business needs and objectives.
              </p>
              
              <p>
                With a proven track record of successful projects across various industries, we have 
                established ourselves as a trusted partner for businesses looking to leverage technology 
                for competitive advantage.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Learn More About Us
              </Link>
              <Link 
                href="/team"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          {/* Visual/Stats Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach to technology and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;