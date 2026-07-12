export const metadata = {
  title: "Sign Up - Open PRO",
  description: "Page description",
};

import Link from "next/link";

export default function SignUp() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="theme-display-title animate-[gradient_6s_linear_infinite] font-nacelle text-3xl font-semibold md:text-4xl">
              Create an account
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label
                  className="theme-label mb-1 block text-sm font-medium"
                  htmlFor="name"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label
                  className="theme-label mb-1 block text-sm font-medium"
                  htmlFor="name"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your company name"
                  required
                />
              </div>
              <div>
                <label
                  className="theme-label mb-1 block text-sm font-medium"
                  htmlFor="email"
                >
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your work email"
                />
              </div>
              <div>
                <label
                  className="theme-label block text-sm font-medium"
                  htmlFor="password"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Password (at least 10 characters)"
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="btn btn-primary w-full">
                Register
              </button>
              <div className="theme-subtle flex items-center gap-3 text-center text-sm italic before:h-px before:flex-1 before:bg-linear-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-linear-to-r after:from-transparent after:via-gray-400/25">
                or
              </div>
              <button className="btn btn-secondary w-full">
                Sign In with Google
              </button>
            </div>
          </form>
          {/* Bottom link */}
          <div className="theme-label mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link className="accent-link font-medium" href="/signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
