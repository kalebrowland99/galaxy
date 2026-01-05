import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { 
  AlertCircle, CheckCircle, CreditCard, FileText, Shield 
} from 'lucide-react';
import toast from 'react-hot-toast';
import { saveRegistration } from '../firebase/registrationService';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waiverSigned, setWaiverSigned] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watch all form fields to check if they're filled
  const watchedFields = watch();

  // Check if all fields for step 1 are filled
  const isStep1Complete = () => {
    const step1Fields = ['teamName', 'ageGroup', 'playerCount', 'experienceLevel'];
    return step1Fields.every(field => watchedFields[field] && watchedFields[field].toString().trim() !== '');
  };

  // Check if all fields for step 2 are filled
  const isStep2Complete = () => {
    const step2Fields = ['coachName', 'coachEmail', 'coachPhone', 'coachBirthday', 'photoIdAcknowledged', 'emergencyName', 'emergencyPhone'];
    return step2Fields.every(field => {
      if (field === 'photoIdAcknowledged') {
        return watchedFields[field] === true;
      }
      return watchedFields[field] && watchedFields[field].toString().trim() !== '';
    });
  };

  const onSubmit = async (data) => {
    if (!waiverSigned) {
      toast.error('You must agree to the liability waiver to continue');
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Prepare registration data for Firebase
      const registrationData = {
        // Team Information
        teamName: data.teamName,
        ageGroup: data.ageGroup,
        playerCount: parseInt(data.playerCount),
        experienceLevel: data.experienceLevel,
        
        // Coach Information
        coachName: data.coachName,
        coachEmail: data.coachEmail,
        coachPhone: data.coachPhone,
        coachBirthday: data.coachBirthday,
        
        // Emergency Contact
        emergencyName: data.emergencyName,
        emergencyPhone: data.emergencyPhone,
        
        // Registration Metadata
        waiverSigned: true
      };

      // Try to save to Firebase Firestore
      try {
        console.log('Attempting to save registration to Firebase...');
        const registrationId = await saveRegistration(registrationData);
        console.log('Registration saved to Firebase with ID:', registrationId);
        toast.success('Registration saved to Firebase successfully!');
      } catch (firebaseError) {
        console.warn('Firebase save failed, but continuing with registration:', firebaseError);
        // Store in localStorage as fallback
        const fallbackData = {
          ...registrationData,
          registrationDate: new Date().toISOString(),
          id: Date.now().toString()
        };
        localStorage.setItem('galaxy23_registration', JSON.stringify(fallbackData));
        console.log('Registration saved to localStorage as fallback:', fallbackData);
        toast.success('Registration saved locally (Firebase unavailable).');
      }
      
      toast.success('Registration form submitted! Redirecting to payment...');
      
      // Redirect to Stripe payment link after a short delay
      setTimeout(() => {
        const successUrl = encodeURIComponent(`${window.location.origin}/payment-success`);
        const cancelUrl = encodeURIComponent(`${window.location.origin}/register`);
        window.location.href = `https://buy.stripe.com/7sYcN5dlm61T7wOa8Qa7C00?success_url=${successUrl}&cancel_url=${cancelUrl}`;
      }, 1500);
      
    } catch (error) {
      console.error('Error in registration process:', error);
      toast.error('Registration failed. Please try again or contact support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Team Registration</h2>
        <p className="text-gray-600 mt-2">Step 1 of 3: Team Information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            Choose your category *
          </label>
          <select
            {...register('ageGroup', { required: 'Category is required' })}
            className="input-field"
          >
            <option value="">Select category</option>
            <option value="8U">8U</option>
            <option value="9U">9U</option>
            <option value="10U">10U</option>
            <option value="11U">11U</option>
            <option value="12U">12U</option>
            <option value="13U">13U</option>
            <option value="14U">14U</option>
            <option value="High School">High School</option>
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
            Number of Players *
          </label>
          <input
            type="number"
            min="12"
            max="20"
            {...register('playerCount', { 
              required: 'Player count is required',
              min: { value: 12, message: 'Minimum 12 players required' },
              max: { value: 20, message: 'Maximum 20 players allowed' }
            })}
            className="input-field"
            placeholder="12-20 players"
          />
          {errors.playerCount && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.playerCount.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Team Experience Level *
          </label>
          <select
            {...register('experienceLevel', { required: 'Experience level is required' })}
            className="input-field"
          >
            <option value="">Select experience level</option>
            <option value="club">Club</option>
            <option value="competitive">Competitive</option>
            <option value="elite">Elite</option>
          </select>
          {errors.experienceLevel && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.experienceLevel.message}
            </p>
          )}
        </div>
      </div>

      {/* Safety Equipment Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <Shield className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Safety Equipment Required</h4>
            <p className="text-blue-700 text-sm">
              All players must wear soft shell helmets during gameplay. Helmets can be purchased through our team gear store.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={nextStep}
          disabled={!isStep1Complete()}
          className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Coach Information</h2>
        <p className="text-gray-600 mt-2">Step 2 of 3: Coach Details</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            {...register('coachPhone', { 
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10,15}$/, // Accepts 10-15 digits
                message: 'Please enter a valid 10-15 digit phone number'
              }
            })}
            className="input-field"
            placeholder="5551234567"
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
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
            Date of Birth * (Must be 18 or older)
          </label>
          <input
            type="date"
            {...register('coachBirthday', { 
              required: 'Date of birth is required',
              validate: {
                isAdult: (value) => {
                  if (!value) return true; // Let required handle empty
                  const birthDate = new Date(value);
                  const today = new Date();
                  const age = today.getFullYear() - birthDate.getFullYear();
                  const monthDiff = today.getMonth() - birthDate.getMonth();
                  const dayDiff = today.getDate() - birthDate.getDate();
                  
                  const actualAge = (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) ? age - 1 : age;
                  return actualAge >= 18 || 'Coach must be at least 18 years old';
                }
              }
            })}
            className="input-field"
            max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
          />
          {errors.coachBirthday && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.coachBirthday.message}
            </p>
          )}
        </div>
      </div>

      {/* Photo ID Verification */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-yellow-900 mb-3">Photo ID Verification Required</h3>
        <p className="text-yellow-800 text-sm mb-4">
          All coaches must provide a valid government-issued photo ID (driver's license, passport, or state ID) for age verification. 
          You will be required to present this ID at tournament check-in.
        </p>
        <div>
          <label className="flex items-start">
            <input
              type="checkbox"
              {...register('photoIdAcknowledged', { 
                required: 'You must acknowledge that you will provide photo ID verification'
              })}
              className="w-4 h-4 text-galaxy-600 border-gray-300 rounded focus:ring-galaxy-500 mt-1"
            />
            <span className="ml-2 text-sm text-yellow-800">
              I acknowledge that I will provide a valid government-issued photo ID at tournament check-in for age verification *
            </span>
          </label>
          {errors.photoIdAcknowledged && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.photoIdAcknowledged.message}
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
              {...register('emergencyPhone', { 
                required: 'Emergency contact phone is required',
                pattern: {
                  value: /^[0-9]{10,15}$/, // Accepts 10-15 digits
                  message: 'Please enter a valid 10-15 digit phone number'
                }
              })}
              className="input-field"
              placeholder="5551234567"
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
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

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button
          type="button"
          onClick={prevStep}
          className="btn-outline order-2 sm:order-1"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextStep}
          disabled={!isStep2Complete()}
          className="btn-primary order-1 sm:order-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Payment & Waiver</h2>
        <p className="text-gray-600 mt-2">Full payment is due 3 weeks prior to the event. *All dates subject to change.</p>
      </div>

      {/* Registration Deposit */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Deposit</h3>
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">Team Registration Deposit</p>
            <p className="text-sm text-gray-600">Non-refundable deposit to secure your spot</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-galaxy-600">$250</p>
            <p className="text-sm text-gray-500">USD</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">Refund Policy</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Deposit is non-refundable under normal circumstances</li>
            <li>• Emergency situations will be investigated</li>
            <li>• Emergency refunds limited to $100 maximum</li>
            <li>• All refund requests subject to tournament director approval</li>
          </ul>
        </div>
      </div>

      {/* Waiver Agreement */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2" />
          Liability Waiver
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg max-h-60 overflow-y-auto text-sm text-gray-700">
          <p className="mb-2 font-semibold">
            By participating in the Galaxy23 7v7 Football Tournament, I acknowledge and agree to the following:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>I understand the risks associated with 7v7 football participation, including but not limited to injury and death</li>
            <li>I release Galaxy23, its organizers, sponsors, and venue from any liability for injuries, death, or property damage</li>
            <li>I agree to follow all tournament rules and regulations</li>
            <li>I consent to emergency medical treatment if necessary</li>
            <li>I authorize the use of photos/videos for promotional purposes</li>
            <li>I understand that all players must wear required safety equipment including soft shell helmets</li>
            <li>I acknowledge that participation is voluntary and I assume all risks</li>
          </ul>
        </div>
        <div className="mt-4">
          <label className="flex items-start">
            <input
              type="checkbox"
              checked={waiverSigned}
              onChange={(e) => setWaiverSigned(e.target.checked)}
              className="w-4 h-4 text-galaxy-600 border-gray-300 rounded focus:ring-galaxy-500 mt-1"
            />
            <span className="ml-2 text-sm text-gray-700">
              I have read and agree to the liability waiver, including the acknowledgment of risks including death *
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
          After completing this form, you'll be redirected to our secure Stripe payment page to pay the $250 deposit.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>Secure Payment:</strong> Your payment will be processed securely through Stripe. You'll receive a receipt via email once payment is completed.
          </p>
        </div>
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 text-sm">
            <strong>Important:</strong> Registration is not complete until payment is processed successfully. Payment is required to secure your team's spot.
          </p>
        </div>
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm">
            <strong>After Payment:</strong> Once payment is completed, you'll receive a confirmation email and your team will be officially registered for the tournament.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button
          type="button"
          onClick={prevStep}
          className="btn-outline order-2 sm:order-1"
        >
          Previous
        </button>
        <button
          type="submit"
          disabled={!waiverSigned || isSubmitting || !isStep1Complete() || !isStep2Complete()}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : (
            'Submit Registration & Proceed to Payment'
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Registration Complete!</h2>
        <p className="text-gray-600 mt-2">
          Thank you for registering your team for Galaxy23 7v7 Football Tournament.
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
        <Link
          to="/"
          className="btn-primary w-full inline-block text-center"
        >
          Return to Home
        </Link>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
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