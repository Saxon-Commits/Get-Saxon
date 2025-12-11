import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Loader2, ArrowRight, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-24 md:py-32" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-50 rounded-3xl shadow-2xl border border-zinc-100 overflow-hidden flex flex-col lg:flex-row">

          {/* Left Info Panel */}
          <div className="bg-zinc-900 lg:w-2/5 p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/10 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Let's Build Your Vision</h3>
              <p className="text-zinc-300 mb-10 text-lg leading-relaxed">
                Have a project in mind? I'd love to hear about it. Fill out the form and I'll get back to you personally within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-zinc-700">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-400 uppercase font-bold tracking-wider mb-1">Email Me Direct</p>
                    <p className="font-medium text-xl">admin@getsaxon.dev</p>
                    <p className="text-zinc-500 text-sm mt-1">I reply to every email.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 lg:mt-0">
              <div className="flex items-center gap-2 text-indigo-400 font-medium">
                <span>Ready to start?</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:w-3/5 p-10 md:p-16 bg-white">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-zinc-900 mb-4">Message Sent!</h3>
                <p className="text-zinc-600 max-w-md mx-auto text-lg">
                  Thanks for reaching out. I'll review your enquiry and be in touch shortly to discuss the next steps.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-10 text-indigo-600 font-bold hover:text-indigo-800 underline decoration-2 underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-zinc-900 mb-8">Project Enquiry</h3>

                {errorMessage && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-start gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-zinc-700 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-zinc-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Added Company and Role fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-zinc-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-zinc-700 mb-2">Your Role</label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Director / Manager"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-zinc-700 mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-zinc-700 mb-2">How can I help?</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                  >
                    <option value="I need a new website">I need a new website</option>
                    <option value="I need to improve my SEO">I need to improve my SEO</option>
                    <option value="I need custom web development">I need custom web development</option>
                    <option value="I need to automate my systems">I need to automate my systems</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 mb-2">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    placeholder="Tell me a bit about your goals and current challenges..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-zinc-400 text-center mt-6">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};