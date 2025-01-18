"use client";

import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faqs() {
    const [isIntersecting, setIsIntersecting] = useState(false); // State to track visibility
    const [selectedKeys, setSelectedKeys] = useState(new Set(["1"])); // Accordion state

    const faqData = [
        {
            id: "1",
            question: "What services do you provide?",
            answer:
                "We provide bespoke tailoring services online. From custom suits to shirts, our tailors ensure a perfect fit and top-notch quality, all delivered to your door.",
        },
        {
            id: "2",
            question: "How do I take my measurements?",
            answer:
                "You can follow our detailed measurement guide online or book a virtual appointment with one of our expert tailors to guide you through the process.",
        },
        {
            id: "3",
            question: "What materials do you use?",
            answer:
                "We use the finest materials available, including high-quality wool, cotton, and linen, sourced from the best suppliers to ensure durability and comfort.",
        },
    ];

    useEffect(() => {
        const target = document.getElementById("faq-section"); // Access target element by ID
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsIntersecting(true); // Mark the element as visible
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold: 0.5 } // Adjust visibility threshold
        );

        if (target) observer.observe(target);

        return () => {
            if (target) observer.disconnect();
        };
    }, []);

    return (
        <div
            id="faq-section"
            className="px-[10%] w-full py-20 bg-slate-50"
        >
            {/* FAQ Title and Description */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-blue-600 tracking-wide">
                    Frequently Asked Questions
                </h2>
                <p
                    className={`text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed transition-opacity duration-700 ${
                        isIntersecting ? "animate-fadeInUp" : "opacity-0"
                    }`}
                >
                    Your questions about our online tailoring services, answered
                    with precision and care.
                </p>
            </div>

            {/* Accordion Section */}
            <div className="bg-white w-full border border-slate-100 shadow-sm rounded-lg">
                <Accordion
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                >
                    {faqData.map((faq) => (
                        <AccordionItem
                            key={faq.id}
                            aria-label={`Accordion ${faq.id}`}
                            title={faq.question}
                            className="px-4 py-2"
                        >
                            <p className="text-gray-600 px-6 pb-4 leading-relaxed">
                                {faq.answer}
                            </p>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
