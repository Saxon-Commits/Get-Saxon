import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PackageFeature {
    text: string;
    included: boolean;
}

interface Package {
    name: string;
    tagline: string;
    price: string;
    priceDetail: string;
    features: PackageFeature[];
    cta: string;
    popular?: boolean;
    gradient: string;
}

const packages: Package[] = [
    {
        name: 'Startup',
        tagline: 'Perfect for small businesses getting started',
        price: 'Starting at $2,500',
        priceDetail: 'One-time payment',
        gradient: 'from-blue-600 to-cyan-600',
        cta: 'Get Started',
        features: [
            { text: 'Up to 5 pages', included: true },
            { text: 'Fully responsive design', included: true },
            { text: 'SEO optimized', included: true },
            { text: 'Contact form integration', included: true },
            { text: 'Mobile-friendly', included: true },
            { text: '2 rounds of revisions', included: true },
            { text: 'Google Analytics setup', included: true },
            { text: 'Social media integration', included: true },
            { text: 'Ongoing support', included: false },
            { text: 'E-commerce features', included: false },
        ],
    },
    {
        name: 'Startup + Retainer',
        tagline: 'Ongoing support and updates for growing businesses',
        price: '$3,500 + $300/mo',
        priceDetail: 'Initial build + monthly retainer',
        gradient: 'from-indigo-600 to-purple-600',
        cta: 'Get Started',
        popular: true,
        features: [
            { text: 'Everything in Startup', included: true },
            { text: 'Up to 10 pages', included: true },
            { text: 'Monthly content updates', included: true },
            { text: 'Priority support', included: true },
            { text: 'Performance monitoring', included: true },
            { text: 'Security updates', included: true },
            { text: 'Monthly analytics reports', included: true },
            { text: 'Unlimited revisions', included: true },
            { text: 'Blog management', included: true },
            { text: 'E-commerce features', included: false },
        ],
    },
    {
        name: 'E-Commerce Shop',
        tagline: 'Full-featured online store for selling products',
        price: 'Starting at $5,000',
        priceDetail: 'One-time payment',
        gradient: 'from-violet-600 to-fuchsia-600',
        cta: 'Get Started',
        features: [
            { text: 'Custom e-commerce design', included: true },
            { text: 'Product catalog (unlimited)', included: true },
            { text: 'Shopping cart & checkout', included: true },
            { text: 'Payment gateway integration', included: true },
            { text: 'Inventory management', included: true },
            { text: 'Order tracking system', included: true },
            { text: 'Customer accounts', included: true },
            { text: 'Email notifications', included: true },
            { text: 'SEO optimized product pages', included: true },
            { text: 'Mobile-optimized checkout', included: true },
        ],
    },
    {
        name: 'Enterprise',
        tagline: 'Custom solutions for complex business needs',
        price: 'Custom Quote',
        priceDetail: 'Tailored to your requirements',
        gradient: 'from-orange-600 to-red-600',
        cta: 'Contact Me',
        features: [
            { text: 'Unlimited pages', included: true },
            { text: 'Custom functionality', included: true },
            { text: 'API integrations', included: true },
            { text: 'Advanced analytics', included: true },
            { text: 'Multi-user admin panel', included: true },
            { text: 'Dedicated support', included: true },
            { text: 'Custom CRM integration', included: true },
            { text: 'Database architecture', included: true },
            { text: 'Advanced security features', included: true },
            { text: 'Scalability planning', included: true },
        ],
    },
];

export const Packages: React.FC = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#contact';
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-700/50 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
                        <Star className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                        <span>Transparent Pricing, No Hidden Fees</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                        Choose Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            Perfect Package
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                        From startups to enterprise, I offer flexible packages designed to match your business goals and budget.
                        Every project includes personal service, clean code, and results that matter.
                    </p>
                </div>
            </div>

            {/* Packages Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${pkg.popular ? 'border-indigo-500' : 'border-zinc-200'
                                }`}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className="p-8">
                                {/* Package Header */}
                                <div className="mb-6">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.gradient} mb-4 flex items-center justify-center`}>
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-2">{pkg.name}</h3>
                                    <p className="text-sm text-zinc-600">{pkg.tagline}</p>
                                </div>

                                {/* Pricing */}
                                <div className="mb-6 pb-6 border-b border-zinc-200">
                                    <div className="text-3xl font-extrabold text-zinc-900 mb-1">{pkg.price}</div>
                                    <div className="text-sm text-zinc-600">{pkg.priceDetail}</div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check
                                                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.included ? 'text-green-500' : 'text-zinc-300'
                                                    }`}
                                            />
                                            <span className={feature.included ? 'text-zinc-700' : 'text-zinc-400 line-through'}>
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    onClick={scrollToContact}
                                    className={`w-full py-3 px-6 rounded-xl font-bold text-white bg-gradient-to-r ${pkg.gradient} hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2`}
                                >
                                    {pkg.cta}
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-12 shadow-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Not sure which package is right for you?
                        </h2>
                        <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                            Let's chat about your project. I'll help you choose the perfect solution for your business needs and budget.
                        </p>
                        <button
                            onClick={scrollToContact}
                            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full text-lg shadow-lg shadow-indigo-900/50 transition-all transform hover:scale-105"
                        >
                            Get Your Free Consultation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
