# Rental Cars - Modern Car Rental Platform

![Next.js](https://img.shields.io/badge/Next.js-15.0.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-teal?logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-5.21.1-2D3748?logo=prisma)
![Clerk](https://img.shields.io/badge/Clerk-6.0.2-6C47FF?logo=clerk)

A modern, full-stack car rental platform built with **Next.js 15** and the latest React features. This comprehensive application provides a seamless car rental experience with user authentication, payment processing, and administrative functionality for managing vehicle inventory and reservations.

## 🌟 Features

- **User Authentication**: Secure authentication system powered by Clerk with sign-up, sign-in, and user management
- **Car Rental System**: Browse, filter, and rent vehicles with real-time availability
- **Payment Processing**: Integrated Stripe payment system for secure transactions
- **Reservation Management**: Complete booking system with calendar integration and order tracking
- **Admin Dashboard**: Administrative interface for managing cars, reservations, and system analytics
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Dynamic content updates with optimistic UI patterns
- **File Upload**: Image upload functionality with UploadThing integration
- **Database Integration**: PostgreSQL database with Prisma ORM for robust data management
- **Type Safety**: Full TypeScript implementation for enhanced developer experience

## 🛠️ Tech Stack

| Technology        | Purpose                            | Version  |
| ----------------- | ---------------------------------- | -------- |
| **Next.js**       | React Framework & SSR              | 15.0.1   |
| **TypeScript**    | Type Safety & Developer Experience | 5.0      |
| **Tailwind CSS**  | Utility-First CSS Framework        | 3.4.1    |
| **Prisma**        | Database ORM & Type-Safe Queries   | 5.21.1   |
| **Clerk**         | Authentication & User Management   | 6.0.2    |
| **Stripe**        | Payment Processing                 | 17.2.1   |
| **Radix UI**      | Accessible UI Components           | Latest   |
| **Framer Motion** | Animation Library                  | 11.11.10 |
| **Zustand**       | State Management                   | 5.0.0    |
| **UploadThing**   | File Upload Service                | 7.2.0    |

## 📁 Project Structure

```
app/
├── globals.css                    # Global styles
├── layout.tsx                     # Root layout
├── (auth)/                        # Authentication routes
│   ├── layout.tsx
│   ├── sign-in/[[...sign-in]]/
│   └── sign-up/[[...sign-up]]/
├── (routes)/
│   ├── (dashboard)/               # Dashboard routes
│   │   ├── layout.tsx
│   │   ├── dashboard/
│   │   │   ├── page.tsx           # Main dashboard
│   │   │   ├── admin/             # Admin-only routes
│   │   │   │   ├── all-reserves/
│   │   │   │   └── cars-manager/
│   │   │   └── components/        # Dashboard components
│   │   ├── loved-cars/            # Favorite cars
│   │   └── reserves/              # User reservations
│   ├── (home)/                    # Public home routes
│   │   ├── page.tsx               # Landing page
│   │   ├── cars/                  # Car browsing
│   │   └── components/            # Home components
│   ├── order-confirmation/        # Payment success
│   └── order-error/               # Payment error
└── api/                           # API routes
    ├── car/                       # Car management
    ├── checkout/                  # Payment processing
    └── uploadthing/               # File upload

components/
├── Shared/                        # Reusable components
│   ├── ModalAddReservation/       # Booking modal
│   ├── Navbar/                    # Navigation
│   ├── Reveal/                    # Animation wrapper
│   └── SkeletonCars/              # Loading states
└── ui/                            # UI components (Radix UI)

hooks/                             # Custom React hooks
├── use-loved-cars.tsx             # Favorites management
└── use-toast.ts                   # Toast notifications

lib/                               # Utility libraries
├── db.ts                          # Database connection
├── formatPrice.ts                 # Price formatting
├── isAdministrator.ts             # Admin validation
├── stripe.ts                      # Stripe configuration
└── utils.ts                       # General utilities

prisma/
└── schema.prisma                  # Database schema
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18.0.0 or higher)
- **npm**, **yarn**, or **pnpm** package manager
- **PostgreSQL** database
- **Stripe** account for payments
- **Clerk** account for authentication
- **UploadThing** account for file uploads

### Environment Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/ElielMato/rental-cars.git
   cd rental-cars
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment variables**

   Create a `.env.local` file in the root directory and add:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/rental_cars"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Stripe
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

   # UploadThing
   UPLOADTHING_SECRET=your_uploadthing_secret
   UPLOADTHING_APP_ID=your_uploadthing_app_id
   ```

4. **Database setup**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Push the schema to your database
   npx prisma db push
   ```

5. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**

   Navigate to `http://localhost:3000` to see the application running.

## 🏗️ Building for Production

```bash
# Build the project
npm run build

# Start the production server
npm run start
```

## 📄 License

This project is open source software. Feel free to use, modify, and distribute according to your needs.

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript, and modern web technologies**

</div>
