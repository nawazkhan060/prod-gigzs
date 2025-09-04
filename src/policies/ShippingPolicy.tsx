import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShippingPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-16"> {/* ← Added pt-16 for navbar offset */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Back Button (Uncomment if needed) */}
        <button 
          onClick={() => navigate('/')}
          className="mb-6 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 flex items-center"
        >
          ← Back to Home
        </button>

        <h1 className="text-3xl font-bold text-gray-900">Shipping Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-8 space-y-6 bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-gray-700">
            This Shipping Policy outlines the terms and conditions for shipping and delivery of physical products and services on the Gigzs platform.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">1. Digital Services</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Digital deliverables are typically provided within 24-48 hours of project completion.</li>
              <li>Files are delivered through secure cloud storage or direct download links.</li>
              <li>Access credentials are shared via encrypted communication channels.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">2. Physical Products</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Shipping costs are calculated based on weight, dimensions, and destination.</li>
              <li>Standard shipping takes 3-5 business days within India.</li>
              <li>Express shipping (1-2 business days) is available at additional cost.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">3. International Shipping</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>International orders may take 7-14 business days.</li>
              <li>Customs duties and taxes are the responsibility of the recipient.</li>
              <li>Tracking information is provided for all international shipments.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">4. Delivery & Tracking</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All shipments include tracking numbers for real-time updates.</li>
              <li>Delivery attempts are made during business hours.</li>
              <li>Failed deliveries are returned to sender after 3 attempts.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">5. Returns & Damages</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Damaged items must be reported within 24 hours of delivery.</li>
              <li>Return shipping costs are covered by Gigzs for damaged items.</li>
              <li>Refunds are processed within 5-7 business days of return receipt.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">6. Shipping Partners</h3>
            <p className="text-gray-700">
              We partner with reliable shipping carriers including DTDC, Blue Dart, and international carriers to ensure safe and timely delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingPolicy;
