import React from 'react';
import { useNavigate } from 'react-router-dom';

const CancellationRefund: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Add top padding to prevent content from hiding under fixed navbar */}
      <div className="pt-16"> {/* ← Adjust this value based on navbar height */}
        {/* If your navbar is taller, increase pt-16 → pt-20, etc. */}
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
              <h1 className="text-3xl font-bold text-gray-900">Cancellation and Refund Policy</h1>
              <p className="mt-2 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Policy Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                TRONOCITY LABS PRIVATE LIMITED believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy: Cancellations will be considered only if the request is made within 6-8 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them. TRONOCITY LABS PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good. In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 6-8 days of receipt of the products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 6-8 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision. In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. In case of any Refunds approved by the TRONOCITY LABS PRIVATE LIMITED, it'll take 1-2 days for the refund to be processed to the end customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefund;