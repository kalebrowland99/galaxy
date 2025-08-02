import { db } from './config';
import { collection, addDoc, updateDoc, doc, getDocs, query, where, serverTimestamp } from 'firebase/firestore';

// Save new registration
export const saveRegistration = async (registrationData) => {
  try {
    const docRef = await addDoc(collection(db, 'registrations'), {
      ...registrationData,
      registrationDate: serverTimestamp(),
      status: 'pending_payment',
      paymentCompleted: false,
      formCompleted: true,
      stepCompleted: 3
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving registration:', error);
    throw error;
  }
};

// Update registration payment status
export const updatePaymentStatus = async (email, paymentCompleted = true) => {
  try {
    const q = query(collection(db, 'registrations'), where('coachEmail', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const docRef = doc(db, 'registrations', querySnapshot.docs[0].id);
      await updateDoc(docRef, {
        paymentCompleted,
        status: paymentCompleted ? 'completed' : 'pending_payment',
        paymentDate: paymentCompleted ? serverTimestamp() : null
      });
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error updating payment status:', error);
    throw error;
  }
};

// Get registration by email
export const getRegistrationByEmail = async (email) => {
  try {
    const q = query(collection(db, 'registrations'), where('coachEmail', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      return {
        id: querySnapshot.docs[0].id,
        ...querySnapshot.docs[0].data()
      };
    }
    return null;
  } catch (error) {
    console.error('Error getting registration:', error);
    throw error;
  }
};

// Get all registrations
export const getAllRegistrations = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'registrations'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting all registrations:', error);
    throw error;
  }
}; 