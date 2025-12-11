import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    company: z.string().optional(),
    role: z.string().optional(),
    service: z.string().min(1, 'Please select a service'),
    message: z.string().min(1, 'Message is required'),
});

export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const body = await request.json();
        const result = contactSchema.safeParse(body);

        if (!result.success) {
            return new Response(JSON.stringify({ error: 'Validation failed', details: result.error.flatten() }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const { firstName, lastName, email, company, role, service, message } = result.data;

        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Change this to your verified domain later
            to: ['admin@getsaxon.dev'],
            replyTo: email,
            subject: `New Project Enquiry: ${service}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Role:</strong> ${role || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return new Response(JSON.stringify({ error: 'Failed to send email' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (err) {
        console.error('Unexpected error:', err);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export const config = {
    runtime: 'edge',
};
