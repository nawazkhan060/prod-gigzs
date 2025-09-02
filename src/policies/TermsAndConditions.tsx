import React from 'react';
import { useNavigate } from 'react-router-dom';

function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-16"> {/* ← Add padding to avoid navbar overlap */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="mb-6 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 flex items-center"
        >
          ← Back to Home
        </button>

        {/* Page Header */}
        <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Content */}
        <div className="mt-8 space-y-6 bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-gray-700 leading-relaxed">
            For the purpose of these Terms and Conditions, the term "we", "us", "our" used anywhere on this page shall mean 
            <strong> TRONOCITY LABS PRIVATE LIMITED</strong>, whose registered/operational office is PACHKHEDI(G) HOUSE NO 581 TAH KUHI DISTRICT, 
            Nagpur, MAHARASHTRA 441210. "You", “your”, "user", “visitor” shall mean any natural or legal person who is visiting 
            our website and/or agreed to purchase from us.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Your use of the website and/or purchase from us are governed by the following Terms and Conditions: The content of the 
            pages of this website is subject to change without notice. Neither we nor any third parties provide any warranty or 
            guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials 
            found or offered on this website for any particular purpose. You acknowledge that such information and materials may 
            contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest 
            extent permitted by law.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which 
            we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information 
            available through our website and/or product pages meet your specific requirements.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our website contains material which is owned by or licensed to us. This material includes, but is not limited to, 
            the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the 
            copyright notice, which forms part of these terms and conditions. All trademarks reproduced in our website which are 
            not the property of, or licensed to, the operator are acknowledged on the website.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense. 
            From time to time, our website may also include links to other websites. These links are provided for your 
            convenience to provide further information. You may not create a link to our website from another website or document 
            without TRONOCITY LABS PRIVATE LIMITED’s prior written consent.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the 
            laws of India. We shall be under no liability whatsoever in respect of any loss or damage arising directly or 
            indirectly out of the decline of authorization for any transaction, on account of the cardholder having exceeded the 
            preset limit mutually agreed by us with our acquiring bank from time to time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;