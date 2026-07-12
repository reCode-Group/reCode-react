export const metadata = {
  title: "Reset Password - Open PRO",
  description: "Page description",
};

import Link from "next/link";

export default function ResetPassword() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="theme-display-title animate-[gradient_6s_linear_infinite] font-nacelle text-3xl font-semibold md:text-4xl">
              Reset your password
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]">
            <div>
              <label
                className="theme-label mb-1 block text-sm font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-input w-full"
                placeholder="Your email"
              />
            </div>
            <div className="mt-6">
              <button className="btn btn-primary w-full">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
