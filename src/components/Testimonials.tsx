import React from 'react';

interface VideoTestimonialProps {
  videoId: string;
  clientName: string;
  metric: string;
  testimonial: string;
  rating: number;
}

const VideoTestimonialCard: React.FC<VideoTestimonialProps> = ({ 
  videoId, 
  clientName, 
  metric, 
  testimonial, 
  rating 
}) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    {/* YouTube Video Embed */}
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={`${clientName} testimonial`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>

    {/* Client Details */}
    <div className="p-6">
      {/* Client Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{clientName}</h3>
      
      {/* Star Rating */}
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Success Metric */}
      <div className="text-2xl font-bold text-pink-500 mb-3">{metric}</div>

      {/* Testimonial */}
      <p className="text-gray-600 leading-relaxed">{testimonial}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const videoTestimonials: VideoTestimonialProps[] = [
    {
      videoId: "0KtKwVq39Y4",
      clientName: "Yagvendra",
      metric: "Increased Sales by 300%",
      testimonial: "After onboarding with their help, our orders tripled in just 2 months!",
      rating: 5
    },
    {
      videoId: "eoCYSK0p-A8",
      clientName: "Sneha",
      metric: "From Zero to 200 Orders/Day",
      testimonial: "Their product photography and listing services made all the difference.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Top Badge */}
          <div className="inline-flex items-center justify-center mb-6">
            <span className="bg-pink-500 text-white text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wide">
              REAL SELLER SUCCESS STORIES
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-pink-500">100+</span> Brands on Multiple Platforms
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. See how these sellers transformed their 
            businesses with our expert e-commerce onboarding services.
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {videoTestimonials.map((testimonial, index) => (
            <VideoTestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 lg:p-12 border border-pink-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Brands Launched</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">9+</div>
              <div className="text-gray-600 font-medium">Platforms Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">300%</div>
              <div className="text-gray-600 font-medium">Average Sales Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Transform your business with our proven e-commerce solutions. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/917042163504?text=I%20want%20to%20know%20more%20about%20technovitasolution.com%20and%20about%20its%27%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-pink-600 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Get Free Consultation
              </a>
              <a 
                href="tel:+917042163504"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;