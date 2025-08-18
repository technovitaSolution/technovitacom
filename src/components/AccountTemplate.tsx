import React from 'react';
import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';

interface AccountTemplateProps {
  accountManagementService: string;
  accServiceName: string;
  imgUrl: string;
  imgAlt: string;
}

const AccountTemplate: React.FC<AccountTemplateProps> = ({
  accountManagementService,
  accServiceName,
  imgUrl,
  imgAlt
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {accountManagementService}
            </h1>
            <div className="relative w-full max-w-4xl mx-auto h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Images/accountMangement.jpg"
                alt="Account Management Services"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="text-lg text-gray-700 mb-8 text-justify">
            <strong>
              <a
                href="https://technovitasolution.com"
                className="text-pink-600 hover:text-pink-700 no-underline"
              >
                TechnovitaSolution
              </a>
            </strong>{' '}
            is one stop solution for all {accServiceName} Services which is required to grow your E-Commerce Business. Technovita Solution is one of the best E-Commerce Service provider in India.
          </div>

          <div className="text-lg text-gray-700 mb-8 text-justify">
            <strong>
              <a
                href="https://technovitasolution.com"
                className="text-pink-600 hover:text-pink-700 no-underline"
              >
                TechnovitaSolution
              </a>
            </strong>{' '}
            provides sellers with Account Management Services, which shares relevant inputs to help sellers grow their business to the next level on the {accServiceName} Marketplace
          </div>

          <div className="text-lg text-gray-700 mb-8 text-justify">
            Have you ever thought about just how quickly your business would grow if you had easy access to expert advice? Fortunately, just like a travel agent helps you plan a fun, exciting holiday, we provide {accServiceName} Account Management Services to help you manage your business efficiently by giving you advice and assistance whenever you need it. Our services will help you to get more customers on {accServiceName} and help you to achieve your sales target.
          </div>

          <div className="mb-8">&nbsp;</div>

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Learn more about {accServiceName} Seller Account Management Services-
          </h2>

          {/* Service Image */}
          <div className="flex justify-center items-center mb-12">
            <div className="relative w-full max-w-4xl h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imgUrl}
                alt={imgAlt}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* What is Account Management */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What is {accServiceName} Account Management?
            </h3>
            <p className="text-lg text-gray-700 text-justify">
              {accServiceName} account management services include everything like creating your {accServiceName} seller account, registering your brand, product listing, order management, {accServiceName} advertisement management, etc. These services are carried out to maintain a healthy seller account and scale your business. We are the best seller service provider of {accServiceName} Seller Account Management Services in Delhi NCR.
            </p>
          </div>

          {/* How We Manage */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How We Manage {accServiceName} Seller Account?
            </h3>
            <p className="text-lg text-gray-700 text-justify mb-4">
              {accServiceName} Seller Account Management involves many Services that are mentioned as follows:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
              <li>Setting up an {accServiceName} Seller account</li>
              <li>Registering your brand On {accServiceName}</li>
              <li>Completing Brand Approval Procedure</li>
              <li>Product listing on {accServiceName}</li>
              <li>Optimize your list for the {accServiceName} search engine for better visibility</li>
              <li>Inventory management of products on {accServiceName}</li>
              <li>Order Management</li>
              <li>Advertisement Management on {accServiceName}</li>
              <li>Marketing services of products</li>
              <li>Customer Support and a lot more</li>
            </ul>
            <p className="text-lg text-gray-700 text-justify">
              We provide all these above-mentioned services to {accServiceName} sellers by being responsible for maximizing revenue generation and attaining business growth on {accServiceName}.
            </p>
          </div>

          {/* Cost Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How Much Does it Cost for {accServiceName} Seller Account Management Services?
            </h3>
            <p className="text-lg text-gray-700 text-justify">
              There are different types of account management services available. Based on the service that you require, you can choose your model. The charges depend on the type and the number of services that you avail of for the {accServiceName} seller account management services. For example, the {accServiceName} advertising account Service will charge only for advertising activities.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get {accServiceName} Account Management Services with us?
            </h3>
            <p className="text-lg text-gray-700 text-justify mb-4">
              With the number of freelancing sites and agencies available today, hiring a perfect {accServiceName} Account Management services provider could be challenging. But our domain expertise ensures you:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Set your goals of growth on {accServiceName} and create a plan according to that</li>
              <li>We have vast experience to create seller success stories</li>
              <li>We ensure quality and on-time work commitment</li>
              <li>We also provide live support on your queries</li>
            </ul>
          </div>

          {/* WhatsApp Button */}
          <div className="my-12">
            <WhatsAppButton serviceName={`${accServiceName} Account Management`} />
          </div>

          {/* Our Services Include */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our {accServiceName} Account Management Services Includes-
          </h2>

          {/* Service 1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              1. {accServiceName} seller central account Setup-
            </h3>
            <p className="text-lg text-gray-700 text-justify">
              If you are Facing problems setting up your {accServiceName} central seller account? Contact our seller account management consultants. We will set up your {accServiceName} central account so that you can focus on your product building and the rest of the things we will take care of.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              2. {accServiceName} seller account Category Approval-
            </h3>
            <p className="text-lg text-gray-700 text-justify">
              Frustrated by rejecting your application for category approval? we use legitimate tricks and hacks, our {accServiceName} seller management experts will get approval to sell in the restricted categories. all you need is to just contact us and for the rest of the things, we will take care of.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              3. Product Listing on {accServiceName} seller account-
            </h3>
            <p className="text-lg text-gray-700 text-justify">
              Listing your products according to their correct category and adding all the necessary and relevant product-specific information such as SKU, product ID, content, search terms, and other attributes. We also provide bulk listing as well as a listing of products that have so many sizes and color variants. So if you are looking for a product listing on {accServiceName} then our expert team can help you to achieve the same get in touch with us-
            </p>
          </div>

          {/* Service 4 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              4. Sponsored product ads on {accServiceName} seller account
            </h3>
            <p className="text-lg text-gray-700 text-justify">
              We have a dedicated team of experts who runs ads on different platform to increase sales of your products including all the ecommerce platforms like {accServiceName} so that your product can visible to more people and you can increase your sells make a call now to increase your sells by 100-200%.
            </p>
          </div>

          {/* Reviews Section */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            <strong>Reviews</strong> ⭐️(4.5/5 based on 50+ Ratings)
          </h2>

          {/* Review 1 */}
          <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">priyanka kumari ⭐️⭐️⭐️⭐️</h4>
            <p className="text-gray-700 text-justify">
              Great Service! I take their advertisement of products on {accServiceName} services Best thing is they were on time provided best services.
            </p>
          </div>

          {/* Review 2 */}
          <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Mukesh kumar ⭐️⭐️⭐️⭐️⭐️</h4>
            <p className="text-gray-700 text-justify">
              I took their {accServiceName} account management services, they are very professional in their work. I will highly recommend them you to choose.
            </p>
          </div>

          {/* Review 3 */}
          <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">harshit patel ⭐️⭐️⭐️⭐️</h4>
            <p className="text-gray-700 text-justify">
              I am a seller on {accServiceName} initially my sells was not that much but after taking their account management services my sales increase by 400%(4x) they added good keywords on my {accServiceName} seller account regarding my products Thanks Technovia solution.
            </p>
          </div>

          {/* Review 4 */}
          <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">komal gupta ⭐️⭐️⭐️⭐️⭐️</h4>
            <p className="text-gray-700 text-justify">
              <a
                href="https://technovitasolution.com"
                className="text-pink-600 hover:text-pink-700 no-underline"
              >
                TechnovitaSolution
              </a>{' '}
              completed the entire work in all of 2-3 days. Extremely professional and helpful. Highly Recommended.
            </p>
          </div>

          {/* Review 5 */}
          <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Vishal Choudhary ⭐️⭐️⭐️⭐️⭐️</h4>
            <p className="text-gray-700 text-justify">
              very patiently worked with us and gave the final product which we were very much happy with.
            </p>
          </div>

          {/* Review 6 */}
          <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Shakib ⭐️⭐️⭐️⭐️</h4>
            <p className="text-gray-700 text-justify">
              Recommend{' '}
              <a
                href="https://technovitasolution.com"
                className="text-pink-600 hover:text-pink-700 no-underline"
              >
                TechnovitaSolution
              </a>{' '}
              to anyone for {accServiceName} listing as I received the order as soon as he completed my job.
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="my-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Book {accServiceName} Account Management Services
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <iframe
                src="https://form.typeform.com/to/WIh3G316"
                width="100%"
                height="500"
                frameBorder="0"
                className="rounded-lg"
                title={`${accServiceName} Account Management Services Form`}
              />
            </div>
          </div>

          {/* Related Articles */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Read 📚 our other Articles to know more about online selling-
            </h2>
            <ul className="space-y-4">
              <li>
                <h4 className="text-xl font-semibold">
                  <a
                    href="http://blog.technovitasolution.com/how-to-register-as-seller-on-ajio/"
                    className="text-pink-600 hover:text-pink-700 no-underline"
                  >
                    How to register on ajio as a seller?
                  </a>
                </h4>
              </li>
              <li>
                <h4 className="text-xl font-semibold">
                  <a
                    href="http://blog.technovitasolution.com/how-to-create-a-seller-account-on-flipkart/"
                    className="text-pink-600 hover:text-pink-700 no-underline"
                  >
                    How to create a seller account on flipkart
                  </a>
                </h4>
              </li>
              <li>
                <h4 className="text-xl font-semibold">
                  <a
                    href="http://blog.technovitasolution.com/paytm-sales-boost-services/"
                    className="text-pink-600 hover:text-pink-700 no-underline"
                  >
                    How to increase sales on paytm seller account?
                  </a>
                </h4>
              </li>
              <li>
                <h4 className="text-xl font-semibold">
                  <a
                    href="http://blog.technovitasolution.com/amazon-product-cataloging-services/"
                    className="text-pink-600 hover:text-pink-700 no-underline"
                  >
                    How to list product on amazon?
                  </a>
                </h4>
              </li>
              <li>
                <h4 className="text-xl font-semibold">
                  <a
                    href="http://blog.technovitasolution.com/steps-to-become-a-seller-on-amazon/"
                    className="text-pink-600 hover:text-pink-700 no-underline"
                  >
                    How to become a seller on amazon?
                  </a>
                </h4>
              </li>
              <li>
                <h4 className="text-xl font-semibold">
                  <a
                    href="http://blog.technovitasolution.com/how-to-increase-sales-on-amazon/"
                    className="text-pink-600 hover:text-pink-700 no-underline"
                  >
                    How to increase sales on amazon?
                  </a>
                </h4>
              </li>
            </ul>
          </div>

          {/* Thank You */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🙏 Thanks! for Reading.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTemplate;

