import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Gmail SMTP configuration
// You need to create an App Password in your Google Account:
// 1. Go to https://myaccount.google.com/security
// 2. Enable 2-Step Verification if not already enabled
// 3. Go to App Passwords (search for it in Google Account settings)
// 4. Create a new App Password for "Mail" on "Windows Computer"
// 5. Copy the 16-character password and add it to your .env.local file

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

type FormType = 'student' | 'company' | 'article';

interface StudentData {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  university: string;
  major: string;
  graduation: string;
  gpa: string;
  interest: string;
  motivation: string;
}

interface CompanyData {
  companyName: string;
  industry: string;
  website: string;
  contactName: string;
  jobTitle: string;
  workEmail: string;
  phone: string;
  lookingFor: string;
  projectDescription: string;
}

interface ArticleData {
  fullName: string;
  organization: string;
  email: string;
  linkedin: string;
  articleTitle: string;
  category: string;
  abstract: string;
}

function generateStudentEmail(data: StudentData): { subject: string; html: string } {
  return {
    subject: `New Student Application: ${data.fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">New Student Application</h1>
        </div>

        <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Personal Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b;">Name:</td><td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${data.fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #10b981;">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Phone:</td><td style="padding: 8px 0; color: #1e293b;">${data.phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">LinkedIn:</td><td style="padding: 8px 0;"><a href="${data.linkedin}" style="color: #10b981;">${data.linkedin || 'Not provided'}</a></td></tr>
          </table>

          <h2 style="color: #1e293b; border-bottom: 2px solid #10b981; padding-bottom: 10px; margin-top: 20px;">Education</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b;">University:</td><td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${data.university}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Major:</td><td style="padding: 8px 0; color: #1e293b;">${data.major}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Graduation:</td><td style="padding: 8px 0; color: #1e293b;">${data.graduation}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">GPA:</td><td style="padding: 8px 0; color: #1e293b;">${data.gpa || 'Not provided'}</td></tr>
          </table>

          <h2 style="color: #1e293b; border-bottom: 2px solid #10b981; padding-bottom: 10px; margin-top: 20px;">Skills & Interests</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b;">Area of Interest:</td><td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${data.interest}</td></tr>
          </table>
          <p style="color: #64748b; margin-top: 10px;">Motivation:</p>
          <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; color: #1e293b;">
            ${data.motivation}
          </div>
        </div>

        <div style="background: #1e293b; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 12px;">Sent from Nexus AI Website</p>
        </div>
      </div>
    `,
  };
}

function generateCompanyEmail(data: CompanyData): { subject: string; html: string } {
  return {
    subject: `New Partnership Request: ${data.companyName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #d4a574 0%, #00d4aa 100%); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">New Partnership Request</h1>
        </div>

        <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #d4a574; padding-bottom: 10px;">Organization Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b;">Company:</td><td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${data.companyName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Industry:</td><td style="padding: 8px 0; color: #1e293b;">${data.industry}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Website:</td><td style="padding: 8px 0;"><a href="${data.website}" style="color: #d4a574;">${data.website || 'Not provided'}</a></td></tr>
          </table>

          <h2 style="color: #1e293b; border-bottom: 2px solid #d4a574; padding-bottom: 10px; margin-top: 20px;">Point of Contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b;">Name:</td><td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${data.contactName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Job Title:</td><td style="padding: 8px 0; color: #1e293b;">${data.jobTitle}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.workEmail}" style="color: #d4a574;">${data.workEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Phone:</td><td style="padding: 8px 0; color: #1e293b;">${data.phone}</td></tr>
          </table>

          <h2 style="color: #1e293b; border-bottom: 2px solid #d4a574; padding-bottom: 10px; margin-top: 20px;">Partnership Needs</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b;">Looking for:</td><td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${data.lookingFor}</td></tr>
          </table>
          <p style="color: #64748b; margin-top: 10px;">Project Description:</p>
          <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #d4a574; color: #1e293b;">
            ${data.projectDescription}
          </div>
        </div>

        <div style="background: #1e293b; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 12px;">Sent from Nexus AI Website</p>
        </div>
      </div>
    `,
  };
}

function generateArticleEmail(data: ArticleData): { subject: string; html: string } {
  return {
    subject: `New Article Submission: ${data.articleTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #00d4aa 0%, #10b981 100%); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">New Article Submission</h1>
        </div>

        <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #00d4aa; padding-bottom: 10px;">Author Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b;">Name:</td><td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${data.fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Organization:</td><td style="padding: 8px 0; color: #1e293b;">${data.organization}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #00d4aa;">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">LinkedIn:</td><td style="padding: 8px 0;"><a href="${data.linkedin}" style="color: #00d4aa;">${data.linkedin || 'Not provided'}</a></td></tr>
          </table>

          <h2 style="color: #1e293b; border-bottom: 2px solid #00d4aa; padding-bottom: 10px; margin-top: 20px;">Article Content</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b;">Title:</td><td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${data.articleTitle}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Category:</td><td style="padding: 8px 0; color: #1e293b;">${data.category}</td></tr>
          </table>
          <p style="color: #64748b; margin-top: 10px;">Abstract / Summary:</p>
          <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #00d4aa; color: #1e293b;">
            ${data.abstract}
          </div>
        </div>

        <div style="background: #1e293b; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 12px;">Sent from Nexus AI Website</p>
        </div>
      </div>
    `,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body as { type: FormType; data: StudentData | CompanyData | ArticleData };

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    let emailContent: { subject: string; html: string };

    switch (type) {
      case 'student':
        emailContent = generateStudentEmail(data as StudentData);
        break;
      case 'company':
        emailContent = generateCompanyEmail(data as CompanyData);
        break;
      case 'article':
        emailContent = generateArticleEmail(data as ArticleData);
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid form type' },
          { status: 400 }
        );
    }

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: emailContent.subject,
      html: emailContent.html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
