export interface FormData {
  // Step 1: Personal Info
  fullName: string;
  
  // Step 2: Contact Info
  mobileNumber: string;
  
  // Step 3: Business Info
  businessName: string;
  businessType: string;
  businessDescription: string;
  
  // Step 4: Platform Interest
  interestedPlatforms: string[];
  monthlyRevenue: string;
  currentChallenges: string;
}

export interface FormStep {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
}

export interface EmailRequest {
  formData: FormData;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}