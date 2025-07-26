import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { 
  AlertCircle, CheckCircle, CreditCard, FileText 
} from 'lucide-react';
import toast from 'react-hot-toast';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waiverSigned, setWaiverSigned] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Here you would integrate with Firebase and Stripe
      console.log('Registration data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Registration submitted successfully!');
      setStep(4); // Success step
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 font-display">Team Registration</h2>
        <p className="text-gray-600 mt-2">Step 1 of 3: Team Information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Team Name *
          </label>
          <input
            type="text"
            {...register('teamName', { required: 'Team name is required' })}
            className="input-field"
            placeholder="Enter team name"
          />
          {errors.teamName && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.teamName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age Group *
          </label>
          <select
            {...register('ageGroup', { required: 'Age group is required' })}
            className="input-field"
          >
            <option value="">Select age group</option>
            <option value="8-10">8-10 years</option>
            <option value="11-13">11-13 years</option>
            <option value="14-16">14-16 years</option>
            <option value="17-19">17-19 years</option>
            <option value="adult">Adult (18+)</option>
          </select>
          {errors.ageGroup && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.ageGroup.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Division *
          </label>
          <select
            {...register('division', { required: 'Division is required' })}
            className="input-field"
          >
            <option value="">Select division</option>
            <option value="recreational">Recreational</option>
            <option value="competitive">Competitive</option>
            <option value="elite">Elite</option>
          </select>
          {errors.division && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.division.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Players *
          </label>
          <input
            type="number"
            min="7"
            max="12"
            {...register('playerCount', { 
              required: 'Player count is required',
              min: { value: 7, message: 'Minimum 7 players required' },
              max: { value: 12, message: 'Maximum 12 players allowed' }
            })}
            className="input-field"
            placeholder="7-12 players"
          />
          {errors.playerCount && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.playerCount.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={nextStep}
          className="btn-primary"
        >
          Next: Coach Information
        </button>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 font-display">Coach Information</h2>
        <p className="text-gray-600 mt-2">Step 2 of 3: Coach Details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Coach Name *
          </label>
          <input
            type="text"
            {...register('coachName', { required: 'Coach name is required' })}
            className="input-field"
            placeholder="Enter coach name"
          />
          {errors.coachName && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.coachName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            {...register('coachEmail', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="input-field"
            placeholder="coach@example.com"
          />
          {errors.coachEmail && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.coachEmail.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            {...register('coachPhone', { required: 'Phone number is required' })}
            className="input-field"
            placeholder="(555) 123-4567"
          />
          {errors.coachPhone && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.coachPhone.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth *
          </label>
          <input
            type="date"
            {...register('coachBirthday', { required: 'Date of birth is required' })}
            className="input-field"
          />
          {errors.coachBirthday && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.coachBirthday.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Emergency Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Emergency Contact Name *
            </label>
            <input
              type="text"
              {...register('emergencyName', { required: 'Emergency contact name is required' })}
              className="input-field"
              placeholder="Emergency contact name"
            />
            {errors.emergencyName && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.emergencyName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Emergency Contact Phone *
            </label>
            <input
              type="tel"
              {...register('emergencyPhone', { required: 'Emergency contact phone is required' })}
              className="input-field"
              placeholder="(555) 123-4567"
            />
            {errors.emergencyPhone && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.emergencyPhone.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="btn-outline"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="btn-primary"
        >
          Next: Payment & Waiver
        </button>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 font-display">Payment & Waiver</h2>
        <p className="text-gray-600 mt-2">Step 3 of 3: Complete Registration</p>
      </div>

      {/* Registration Fee */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Fee</h3>
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">Team Registration</p>
            <p className="text-sm text-gray-600">Includes tournament entry and team materials</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-galaxy-600">$250</p>
            <p className="text-sm text-gray-500">USD</p>
          </div>
        </div>
      </div>

      {/* Waiver Agreement */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2" />
          Liability Waiver
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg max-h-40 overflow-y-auto text-sm text-gray-700">
          <p className="mb-2">
            By participating in the Galaxy23 Flag Football Tournament, I acknowledge and agree to the following:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>I understand the risks associated with flag football participation</li>
            <li>I release Galaxy23 and its organizers from any liability for injuries</li>
            <li>I agree to follow all tournament rules and regulations</li>
            <li>I consent to emergency medical treatment if necessary</li>
            <li>I authorize the use of photos/videos for promotional purposes</li>
          </ul>
        </div>
        <div className="mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={waiverSigned}
              onChange={(e) => setWaiverSigned(e.target.checked)}
              className="w-4 h-4 text-galaxy-600 border-gray-300 rounded focus:ring-galaxy-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              I have read and agree to the liability waiver *
            </span>
          </label>
        </div>
      </div>

      {/* Payment Method */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Payment Method
        </h3>
        <p className="text-gray-600 mb-4">
          Payment will be processed securely through Stripe. You'll receive a receipt via email.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>Note:</strong> Registration is not complete until payment is processed successfully.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="btn-outline"
        >
          Previous
        </button>
        <button
          type="submit"
          disabled={!waiverSigned || isSubmitting}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : (
            'Complete Registration - $250'
          )}
        </button>
      </div>
    </motion.div>
  );

  const renderSuccess = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-6"
    >
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 font-display">Registration Complete!</h2>
        <p className="text-gray-600 mt-2">
          Thank you for registering your team for Galaxy23 Flag Football Tournament.
        </p>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-semibold text-green-800 mb-2">What's Next?</h3>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Check your email for confirmation and receipt</li>
          <li>• Review tournament rules and schedule</li>
          <li>• Prepare your team roster</li>
          <li>• Check-in begins 1 hour before your first game</li>
        </ul>
      </div>
      <div className="space-y-3">
        <button
          onClick={() => window.print()}
          className="btn-outline w-full"
        >
          Print Receipt
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="btn-primary w-full"
        >
          Return to Home
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="card">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderSuccess()}
      </form>
    </div>
  );
};

export default RegistrationForm; 