import { useState } from "react";
import apiService from "../../services/api"; // keep your existing API service
import { clockicon, mailicon } from "../../assets/assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage("");
    try {
      await apiService.sendContactMessage?.(formData);
      setSubmitMessage("Thank you for your message! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setSubmitMessage("Error sending message. Please try again or contact me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full bg-[linear-gradient(90deg,#fff7ef_0%,#fff3f0_100%)] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">Contact</h2>
          <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
          Welcome to CutsCoffeeStudio, where your creative ideas come to life! My team and I offer comp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Heading + info boxes */}
          <div>
            <p className="text-sm text-gray-600 mb-3">Feedback</p>
            <h3 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
              I'd love to hear <br /> from you!
            </h3>
            <p className="text-sm text-gray-600 max-w-md mb-8">
              We're conveniently located in Chennai near Porur, making it easy for everyone to drop by and explore our offerings in person.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white shadow-sm rounded-lg p-4 border border-orange-100">
                <div className="flex items-center justify-center h-12 w-12 ">
                  {/* clock icon */}
                 <img src={clockicon} alt="" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Timing</p>
                  <p className="text-sm text-gray-500">Mon-Sat · 10AM–7PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white shadow-sm rounded-lg p-4 border border-orange-100">
                <div className="flex items-center justify-center h-12 w-12 ">
                  {/* email icon */}
                  <img src={mailicon} alt="" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-sm text-gray-500">chefgocool22@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form card */}
          <div className="w-full">
            <div className="rounded-xl bg-white p-6 md:p-8 shadow-xl border border-orange-100" style={{ boxShadow: '0 10px 30px rgba(245,124,0,0.06)' }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Type name here"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Type Email ID here"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>

                {submitMessage && (
                  <div className={`p-3 rounded-md text-sm ${submitMessage.includes("Thank you") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {submitMessage}
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => { /* you may wire login action here */ }}
                   
                    className="flex-1 btn-gradient text-white font-semibold py-3 rounded-md shadow-sm transition"
                  >
                    Login
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 btn-gradient font-semibold py-3 text-white rounded-md hover:bg-orange-200 transition disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>

              {/* small footer row inside card (optional) */}
              <div className="mt-6 text-xs text-gray-400">
                © {currentYear} Chef Portfolio. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
