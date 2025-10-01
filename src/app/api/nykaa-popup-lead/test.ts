// Test file for the Nykaa popup lead API endpoint
// This file can be used to test the API endpoint functionality

export async function testNykaaPopupLeadAPI() {
  const testData = {
    name: 'Test User',
    mobile: '9876543210',
    offer: 'Nykaa Account Management - 1 Month Free',
    source: 'Nykaa Calculator Popup 1'
  };

  try {
    const response = await fetch('/api/nykaa-popup-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    console.log('API Test Result:', result);
    return result;
  } catch (error) {
    console.error('API Test Error:', error);
    return { success: false, error: error.message };
  }
}

// Usage example:
// testNykaaPopupLeadAPI();



