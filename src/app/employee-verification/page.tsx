'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, XCircle, Search, Shield, Calendar, User, Award } from 'lucide-react';

interface CertificateData {
  id: string;
  employeeName: string;
  position: string;
  startDate: string;
  endDate: string;
  status: 'verified' | 'invalid';
  issuedDate: string;
  company: string;
}

export default function EmployeeVerificationPage() {
  const [certificateId, setCertificateId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState<CertificateData | null>(null);
  const [error, setError] = useState('');

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setVerificationResult(null);

    try {
      const response = await fetch('/api/verify-certificate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ certificateId: certificateId.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setVerificationResult(data);
      } else {
        setError(data.error || 'Certificate not found');
      }
    } catch (err) {
      setError('An error occurred while verifying the certificate');
    } finally {
      setIsLoading(false);
    }
  };

  const resetVerification = () => {
    setCertificateId('');
    setVerificationResult(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center space-x-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Employee Certificate Verification</h1>
          </div>
          <p className="text-center text-gray-600 mt-2">
            Verify employment certificates issued by Technovita Solution
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Verification Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Certificate</h2>
            <p className="text-gray-600">
              Enter the certificate ID to verify employment details
            </p>
          </div>

          <form onSubmit={handleVerification} className="space-y-6">
            <div>
              <label htmlFor="certificateId" className="block text-sm font-medium text-black mb-2">
                Certificate ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="certificateId"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                  placeholder="Enter certificate ID (e.g., X1001)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-mono text-black"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Award className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !certificateId.trim()}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Verifying...
                </div>
              ) : (
                'Verify Certificate'
              )}
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <XCircle className="h-6 w-6 text-red-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-red-800">Verification Failed</h3>
                <p className="text-red-700 mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Verification Result */}
        {verificationResult && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Result Header */}
            <div className={`px-8 py-6 ${verificationResult.status === 'verified' ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {verificationResult.status === 'verified' ? (
                    <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  ) : (
                    <XCircle className="h-8 w-8 text-red-600 mr-3" />
                  )}
                  <div>
                    <h3 className={`text-2xl font-bold ${verificationResult.status === 'verified' ? 'text-green-800' : 'text-red-800'}`}>
                      {verificationResult.status === 'verified' ? 'Certificate Verified' : 'Certificate Invalid'}
                    </h3>
                    <p className={`${verificationResult.status === 'verified' ? 'text-green-700' : 'text-red-700'}`}>
                      Certificate ID: {verificationResult.id}
                    </p>
                  </div>
                </div>
                <button
                  onClick={resetVerification}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Employee Details */}
            {verificationResult.status === 'verified' && (
              <div className="px-8 py-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Employee Information */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Employee Name</h4>
                        <p className="text-xl font-bold text-blue-600">{verificationResult.employeeName}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <Award className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Position</h4>
                        <p className="text-xl font-bold text-green-600">{verificationResult.position}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <Shield className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Company</h4>
                        <p className="text-xl font-bold text-purple-600">{verificationResult.company}</p>
                      </div>
                    </div>
                  </div>

                  {/* Employment Period */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Calendar className="h-6 w-6 text-blue-600" />
                        <h4 className="text-lg font-semibold text-gray-900">Employment Period</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Start Date:</span>
                          <span className="font-semibold text-gray-900">{verificationResult.startDate}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">End Date:</span>
                          <span className="font-semibold text-gray-900">{verificationResult.endDate}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Issued Date:</span>
                          <span className="font-semibold text-gray-900">{verificationResult.issuedDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Verification Badge */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-green-800 mb-2">Certificate Status</h4>
                      <p className="text-green-700 font-medium">Valid & Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer Information */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">About This Verification</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This verification system is provided by Technovita Solution to authenticate employment certificates. 
              All certificates are digitally verified and contain tamper-proof information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
