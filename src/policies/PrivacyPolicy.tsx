import React from 'react';
import { ArrowLeft, Shield, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    // Add pt-16 (or more) to offset fixed navbar
    <div className="min-h-screen bg-gray-50 py-8 pt-16"> {/* ← Added pt-16 here */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
        <button 
          onClick={() => navigate('/')}
          className="mb-6 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 flex items-center"
        >
          ← Back to Home
        </button>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#00704A] rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="mt-2 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose max-w-none">
            {/* [Rest of your content stays exactly the same] */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">TRONOCITY LABS PRIVATE LIMITED Privacy Policy</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This privacy policy sets out how TRONOCITY LABS PRIVATE LIMITED uses and protects any information that you give TRONOCITY LABS PRIVATE LIMITED when you visit their website and/or agree to purchase from them.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TRONOCITY LABS PRIVATE LIMITED is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                TRONOCITY LABS PRIVATE LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h3>
              <p className="text-gray-700 mb-4">We may collect the following information:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Name</li>
                <li>Contact information including email address</li>
                <li>Demographic information such as postcode, preferences and interests, if required</li>
                <li>Other information relevant to customer surveys and/or offers</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h3>
              <p className="text-gray-700 mb-4">We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Internal record keeping</li>
                <li>We may use the information to improve our products and services</li>
                <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided</li>
                <li>From time to time, we may also use your information to contact you for market research purposes</li>
                <li>We may contact you by email, phone, fax or mail</li>
                <li>We may use the information to customise the website according to your interests</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use Cookies</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Controlling Your Personal Information</h3>
              <p className="text-gray-700 mb-4">You may choose to restrict the collection or use of your personal information in the following ways:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
                <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at info@gigzs.com</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you believe that any information we are holding on you is incorrect or incomplete, please contact us using the information below:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#00704A] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-700">PACHKHEDI(G) HOUSE NO 581 TAH KUHI DISTRICT<br />Nagpur MAHARASHTRA 441210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#00704A] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-700">7038725831</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#00704A] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-700">info@gigzs.com</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mt-4 leading-relaxed">
                We will promptly correct any information found to be incorrect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
