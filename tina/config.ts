import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      // Homepage Hero Content
      {
        name: "home",
        label: "Home Page",
        path: "content/home",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "string", name: "fastestCardTitle", label: "Fastest Card Title" },
          { type: "string", name: "fastestCardDescription", label: "Fastest Card Description", ui: { component: "textarea" } },
          { type: "string", name: "fastestCardHours", label: "Hours" },
          { type: "string", name: "taxCardTitle", label: "Software Card Title" },
          { type: "string", name: "taxCardDescription", label: "Software Card Description", ui: { component: "textarea" } },
          { type: "string", name: "taxCardPrice", label: "Software Card Price" },
          { type: "string", name: "receiveCardTitle", label: "Receiving Card Title" },
          { type: "string", name: "receiveCardDescription", label: "Receiving Card Description", ui: { component: "textarea" } },
          { type: "string", name: "receiveCardServiceTime", label: "Service Time" },
          { type: "string", name: "subTitle", label: "Subtitle" },
        ],
      },
      // Features/Benefits Section
      {
        name: "feature",
        label: "Features (FRA)",
        path: "content/features",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "string", name: "fastTitle", label: "Fast Title" },
          { type: "string", name: "fastDescription", label: "Fast Description" },
          { type: "string", name: "reliableTitle", label: "Reliable Title" },
          { type: "string", name: "reliableDescription", label: "Reliable Description" },
          { type: "string", name: "affordableTitle", label: "Affordable Title" },
          { type: "string", name: "affordableDescription", label: "Affordable Description" },
          { type: "string", name: "tag", label: "Tag" },
        ],
      },
      // Testimonials
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Name", required: true, isTitle: true },
          { type: "string", name: "text", label: "Testimonial Text", ui: { component: "textarea" }, required: true },
          { type: "number", name: "rating", label: "Rating (1-5)", required: true },
          { type: "string", name: "videoUrl", label: "Video URL" },
        ],
      },
      // Testimonials Header
      {
        name: "testimonial_header",
        label: "Testimonials Header",
        path: "content/testimonial-header",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
        ],
      },
      // FAQs
      {
        name: "faq",
        label: "FAQs",
        path: "content/faqs",
        format: "json",
        fields: [
          { type: "string", name: "question", label: "Question", required: true, isTitle: true },
          { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" }, required: true },
          { type: "string", name: "category", label: "Category", options: ["General", "Pricing", "Process"] },
        ],
      },
      // Our Process
      {
        name: "process",
        label: "Our Process",
        path: "content/process",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "string", name: "tag", label: "Tag" },
          { type: "string", name: "textRoles1", label: "Step 1 Text" },
          { type: "string", name: "textRoles2", label: "Step 2 Text" },
          { type: "string", name: "textRoles3", label: "Step 3 Text" },
          { type: "string", name: "textRoles4", label: "Step 4 Text" },
          { type: "string", name: "textRoles5", label: "Step 5 Text" },
          { type: "string", name: "textRoles6", label: "Step 6 Text" },
        ],
      },
      // Mission
      {
        name: "mission",
        label: "Our Mission",
        path: "content/mission",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" }, required: true },
        ],
      },
      // Vision/Services
      {
        name: "service",
        label: "Services/Vision",
        path: "content/services",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "string", name: "tag", label: "Tag" },
          { type: "string", name: "ourVisionCardTitle", label: "Vision Card Title" },
          { type: "string", name: "ourVisionCardDescription", label: "Vision Card Description" },
          { type: "string", name: "ourPromiseCardTitle", label: "Promise Card Title" },
          { type: "string", name: "ourPromiseCardDescription", label: "Promise Card Description" },
          { type: "string", name: "lightningFastCardTitle", label: "Lightning Fast Card Title" },
          { type: "string", name: "lightningFastCardDescription", label: "Lightning Fast Card Description" },
          { type: "string", name: "projectTitle", label: "Project Title" },
          { type: "string", name: "projectDescription", label: "Project Description" },
        ],
      },
      // CTA Section
      {
        name: "cta",
        label: "CTA Section",
        path: "content/cta",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
        ],
      },
      // Quote Form Sidebar
      {
        name: "quote_sidebar",
        label: "Quote Form Sidebar",
        path: "content/quote-sidebar",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "string", name: "para", label: "Paragraph" },
          { type: "string", name: "units_shipped", label: "Units Shipped" },
          { type: "string", name: "units_shipped_title", label: "Units Shipped Title" },
          { type: "string", name: "years", label: "Years" },
          { type: "string", name: "years_title", label: "Years Title" },
          { type: "string", name: "client_satisfied", label: "Clients Satisfied" },
          { type: "string", name: "client_satisfied_title", label: "Clients Satisfied Title" },
          { type: "string", name: "week_day", label: "Week Days" },
          { type: "string", name: "week_day_title", label: "Week Days Title" },
          { type: "string", name: "ready_scale_text", label: "Ready to Scale Text" },
          { type: "string", name: "ready_scale_desc", label: "Ready to Scale Description" },
          { type: "string", name: "support", label: "Support" },
          { type: "string", name: "solutions", label: "Solutions" },
          { type: "string", name: "team", label: "Team" },
        ],
      },
      // Contact Info
      {
        name: "contact",
        label: "Contact Info",
        path: "content/contact",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "location", label: "Location" },
          { type: "string", name: "email", label: "Email" },
          { type: "string", name: "phone", label: "Phone" },
          {
            type: "object",
            name: "socialmedia",
            label: "Social Media",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Platform Name" },
              { type: "string", name: "link", label: "URL" },
            ],
          },
        ],
      },
      // Client Portal Link
      {
        name: "client_portal",
        label: "Client Portal",
        path: "content/client-portal",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "name", label: "Name", required: true },
          { type: "string", name: "link", label: "Portal URL", required: true },
        ],
      },
    ],
  },
});
