# Trava - All-in-One Business System for Service Trades

A lightweight, mobile-first business management system designed specifically for service providers like mobile auto detailers, gutter cleaners, chimney sweeps, and other on-site service businesses.

## Overview

Trava is a bare-bones, all-in-one business system (mini-ERP) that replaces the need for multiple disconnected tools. Instead of juggling QuickBooks, Google Calendar, Stripe, and other services that don't talk to each other, service providers get a single, simple app that handles their everyday operations.

## Key Features

### For Service Providers

- **Service Management**: Create and manage service offerings (e.g., "Car Detailing - $75", "Chimney Sweep - $150")
- **Appointment Management**: View and manage all appointments with customer details
- **Dashboard**: Quick overview with stats (services count, pending payments, total revenue)
- **Payment Tracking**: Mark payments as received (cash or Stripe)
- **Shareable Booking Links**: Generate and share booking links via Instagram, iMessage, or any platform

### For Customers

- **Public Booking**: Customers can book appointments directly via a shareable link - no sign-up required
- **Simple Booking Flow**: Just enter name, phone, email, and pick a date/time
- **Payment Options**: Pay in cash (marked at service) or via Stripe (online payment)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Storage**: LocalStorage (client-side, can be upgraded to backend)
- **React**: 19.2.0

## Project Structure

```
app/
├── appointments/     # Appointment management (list, view, edit, create)
├── book/            # Public booking page for customers
├── components/      # Reusable components (AuthForm, ServiceForm, AppointmentForm)
├── dashboard/       # Main dashboard with stats and quick actions
├── pay/             # Public payment page for customers
├── services/        # Service management (CRUD operations)
├── lib/             # Storage utilities (localStorage)
└── types.ts         # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## How It Works

1. **Service Provider Flow**:
   - Sign up / Login
   - Create services (e.g., "Car Detailing - $75")
   - Get shareable booking link for each service
   - Share link on Instagram, iMessage, or other platforms
   - View appointments in dashboard
   - Mark payments as received (cash or Stripe)

2. **Customer Flow**:
   - Click shared booking link
   - Enter name, phone, email
   - Select date and time
   - Book appointment
   - Receive payment link
   - Pay via cash (in-person) or Stripe (online)

## Features

- ✅ User authentication (sign up / login)
- ✅ Service management (CRUD)
- ✅ Appointment management (CRUD)
- ✅ Public booking page (no login required)
- ✅ Public payment page (no login required)
- ✅ Payment tracking (cash / Stripe)
- ✅ Mobile-responsive design
- ✅ Native share functionality
- ✅ Dashboard with business metrics

## Future Enhancements

- [ ] Stripe payment integration (currently placeholder)
- [ ] Backend API integration (replace localStorage)
- [ ] Email notifications
- [ ] Calendar view
- [ ] Customer history
- [ ] Reporting and analytics

## License

Private project
