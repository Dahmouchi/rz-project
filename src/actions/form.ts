
import sendEmail from "@/lib/sendemail";

export async function createEmail(
  fullName: string,
  email: string | null,
  phone: string,
  businessName?: string,
  businessType?: string,
  service?: string,
  message?: string
) {
  try {
    const emailContentAnalyst = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <title>New Service Application</title>
</head>
<body style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 0;">
  <div style="max-width: 640px; margin: 40px auto; background: white; border-radius: 16px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05); overflow: hidden;">
    <!-- Gradient Header -->
    <div style="background: linear-gradient(135deg, #0a6b4e, #064E3B); padding: 32px 24px; text-align: center;">
      <div style="max-width: 180px; margin: 0 auto 16px;">
        <!-- Replace with your logo -->
        <div style="color: white; font-size: 24px; font-weight: 700;">RZ Hospitality</div>
      </div>
      <h1 style="color: white; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">New Service Application</h1>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px;">
      <p style="font-size: 16px; color: #4b5563; margin-bottom: 24px; line-height: 1.6;">Hello Ryda,</p>
      <p style="font-size: 16px; color: #4b5563; margin-bottom: 32px; line-height: 1.6;">You've received a new service application request. Here are the details:</p>
      
      <!-- Details Card -->
      <div style="background-color: #f9fafb; border-radius: 12px; padding: 24px; margin-bottom: 32px; border: 1px solid #e5e7eb;">
        <h2 style="font-size: 18px; color: #111827; font-weight: 600; margin-top: 0; margin-bottom: 20px;">Application Details</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div>
            <p style="font-size: 13px; color: #6b7280; margin-bottom: 4px; font-weight: 500;">Full Name</p>
            <p style="font-size: 15px; color: #111827; margin: 0; font-weight: 500;">${fullName}</p>
          </div>
          <div>
            <p style="font-size: 13px; color: #6b7280; margin-bottom: 4px; font-weight: 500;">Business Name</p>
            <p style="font-size: 15px; color: #111827; margin: 0; font-weight: 500;">${businessName}</p>
          </div>  <div>
            <p style="font-size: 13px; color: #6b7280; margin-bottom: 4px; font-weight: 500;">Business Type</p>
            <p style="font-size: 15px; color: #111827; margin: 0; font-weight: 500;">${businessType}</p>
          </div>     
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div>
            <p style="font-size: 13px; color: #6b7280; margin-bottom: 4px; font-weight: 500;">Email</p>
            <p style="font-size: 15px; color: #111827; margin: 0; font-weight: 500;">${email}</p>
          </div>
          <div>
            <p style="font-size: 13px; color: #6b7280; margin-bottom: 4px; font-weight: 500;">Phone</p>
            <p style="font-size: 15px; color: #111827; margin: 0; font-weight: 500;">${phone}</p>
          </div>
        </div>
        
        <div style="margin-top: 16px;">
          <p style="font-size: 13px; color: #6b7280; margin-bottom: 4px; font-weight: 500;">Service Requested</p>
          <p style="font-size: 15px; color: #111827; margin: 0; font-weight: 500;">${service}</p>
        </div>
      </div>
      
      <!-- Message Section -->
      <div style="margin-bottom: 32px;">
        <h3 style="font-size: 16px; color: #111827; font-weight: 600; margin-bottom: 12px;">Message</h3>
        <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px; border-left: 3px solid #3b82f6;">
          <p style="font-size: 15px; color: #4b5563; margin: 0; line-height: 1.6;">${
            message || "No message provided"
          }</p>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="padding: 24px; text-align: center; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
      <p style="font-size: 14px; color: #6b7280; margin-bottom: 16px; line-height: 1.5;">This is an automated message. Please do not reply to this email.</p>
      <p style="font-size: 12px; color: #9ca3af; margin: 0;">© ${new Date().getFullYear()} RZ Hospitality. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
      `;
    await sendEmail(
      "RYDAZARHOUNI@gmail.com", // Replace with your email
      `New Service Application: ${service}`,
      emailContentAnalyst,
    );
    return true
  } catch (error) {
    console.error("Error creating history record:", error);
    throw new Error("Failed to create history record");
  }
}
