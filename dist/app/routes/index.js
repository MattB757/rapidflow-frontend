"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const faq_routre_1 = require("../modules/faq/faq.routre");
const testimonial_route_1 = require("../modules/testimonial/testimonial.route");
const fra_route_1 = require("../modules/about/fra/fra.route");
const ourProcess_route_1 = require("../modules/about/our_process/ourProcess.route");
const mission_route_1 = require("../modules/about/mission/mission.route");
const vision_route_1 = require("../modules/about/vission/vision.route");
const home_route_1 = require("../modules/home/home.route");
const contact_route_1 = require("../modules/contact/contact.route");
const quoteForm_route_1 = require("../modules/quoteForm/quoteForm.route");
const clientPortal_route_1 = require("../modules/clientPortal/clientPortal.route");
const sendQuote_route_1 = require("../modules/sendQuote/sendQuote.route");
const cta_route_1 = require("../modules/about/cta.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/send-quote",
        route: sendQuote_route_1.sendQuoteRoute,
    },
    {
        path: "/quote-form-left",
        route: quoteForm_route_1.quoteFormRoute,
    },
    {
        path: "/homes",
        route: home_route_1.homeRoutes,
    },
    {
        path: "/fras",
        route: fra_route_1.fraRoutes,
    },
    {
        path: "/our-process",
        route: ourProcess_route_1.ourProcessRoutes,
    },
    {
        path: "/missions",
        route: mission_route_1.missionRoutes,
    },
    {
        path: "/visions",
        route: vision_route_1.visionRoutes,
    },
    {
        path: "/testimonials",
        route: testimonial_route_1.testimonialRoutes,
    },
    {
        path: "/faqs",
        route: faq_routre_1.faqRoutes,
    },
    {
        path: "/contact",
        route: contact_route_1.contactRoutes,
    },
    {
        path: "/contact",
        route: contact_route_1.contactRoutes,
    },
    {
        path: "/client-portal",
        route: clientPortal_route_1.clientPortalRoutes,
    },
    {
        path: "/ctas",
        route: cta_route_1.ctaRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
