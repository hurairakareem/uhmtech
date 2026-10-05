"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const serviceImageBySlug: Record<string, string> = {
  "business-automation": "/brand/hero-service-dashboard.jpg",
  "crm-solutions": "/brand/hero-service-analytics.jpg",
  "software-development": "/brand/hero-ai-services.jpg",
  "app-development": "/brand/hero-service-mobile.jpg",
  "apps-customization": "/brand/hero-service-consulting.jpg",
  "saas-development": "/brand/hero-service-team.jpg",
  "call-center-services": "/brand/hero-service-meeting.jpg",
  "chat-support": "/brand/hero-service-workspace.jpg",
  "email-services": "/brand/hero-service-consulting.jpg",
  "ai-automation": "/brand/hero-service-hardware.jpg",
  "api-integrations": "/brand/hero-service-infrastructure.jpg",
  "management-systems": "/brand/hero-service-workspace.jpg",
  "technology-health-check": "/brand/hero-service-analytics.jpg",
  "business-system-integration": "/brand/hero-service-workspace.jpg",
  "custom-internal-tools": "/brand/hero-service-consulting.jpg",
  "business-intelligence-dashboards": "/brand/hero-service-dashboard.jpg",
  "managed-technology-support": "/brand/hero-service-infrastructure.jpg",
  "digital-operations-optimization": "/brand/hero-service-meeting.jpg",
};

// Show each distinct photo once even when multiple services share the same visual.
const serviceImages = [...new Set(Object.values(serviceImageBySlug))];

export function HeroServiceVisual() {
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    // Respect the visitor's system preference and keep the background still when requested.
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionEnabled(!preference.matches);
  }, []);

  useEffect(() => {
    if (!motionEnabled) return;
    // Advance one background image at a time and clean up the timer when paused or unmounted.
    const timer = window.setInterval(() => {
      setActiveFrame((frame) => (frame + 1) % serviceImages.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [motionEnabled]);

  return (
    <div
      className={`home-service-visual${motionEnabled ? " motion-enabled" : ""}`}
      aria-hidden="true"
    >
      {serviceImages.map((image, index) => (
        <div
          key={image}
          className={`home-service-slide${index === activeFrame ? " is-active" : ""}`}
          aria-hidden="true"
        >
          <Image
            src={image}
            alt=""
            fill
            loading={index < 2 ? "eager" : "lazy"}
            sizes="100vw"
            className="home-service-slide-image"
            style={{ animationDelay: `${index * -1.6}s` }}
          />
        </div>
      ))}
    </div>
  );
}