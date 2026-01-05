import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Calendar, Users, Trophy } from 'lucide-react';
import { updatePaymentStatus } from '../firebase/registrationService';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Try to update payment status if we have an email in URL params
    const email = searchParams.get('email');
    if (email) {
      updatePaymentStatus(email, true)
        .then((success) => {
          if (success) {
            console.log('Payment status updated successfully');
          }
        })
        .catch((error) => {
          console.error('Error updating payment status:', error);
        });
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="card text-center"
        >
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your payment. Your order has been processed successfully!
          </p>

          {/* Confirmation Details */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              What's Next?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold text-green-800">Confirmation Email</h3>
                  <p className="text-green-700 text-sm">You'll receive a confirmation email with your receipt and order details.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold text-green-800">Order Processing</h3>
                  <p className="text-green-700 text-sm">Your order will be processed and shipped within 3-5 business days.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold text-green-800">Customer Support</h3>
                  <p className="text-green-700 text-sm">If you have any questions about your order, please contact our support team.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Reminders */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-3">Important Information</h3>
            <ul className="text-blue-700 text-sm space-y-2 text-left">
              <li>• You will receive an email confirmation with your receipt</li>
              <li>• For gear orders: Items will ship within 3-5 business days</li>
              <li>• For registrations: Your team is now officially registered</li>
              <li>• Contact us at galaxy23corp@gmail.com if you have questions</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/schedule"
              className="btn-primary w-full inline-flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              View Tournament Schedule
            </Link>
            <Link
              to="/gear"
              className="btn-outline w-full inline-flex items-center justify-center"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Get Team Gear
            </Link>
            <Link
              to="/"
              className="btn-outline w-full inline-flex items-center justify-center"
            >
              Return to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentSuccess; 