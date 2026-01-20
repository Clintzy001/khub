document.getElementById("verifyForm").onsubmit = async (e) => {
  e.preventDefault();

  alert("Payment successful! Verification submitted.");

  // Example logic:
  // 1. Upload files to Supabase storage
  // 2. Save verification record
  // 3. Update user status to "pending"

};
