import React, { useEffect, useState } from 'react';
import { arrow, facebookblack,instablack, linkedinblack, youtubeblack } from '../../assets/assets';

// JobsComponent.tsx
// Tailwind-based React component that matches the provided design (peach-y header, 4 rounded cards, "Apply now" buttons, social icons row, modal form)

export default function JobsComponent() {
  const [jobs, setJobs] = useState([]);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationData, setApplicationData] = useState({ name: '', email: '', phone: '', coverLetter: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    // sample 4 jobs to match the exact UI layout in the image
    setJobs([
      { id: 1, title: 'Junior Chef (full time)', date: 'Jan 01, 2025', location: 'Mumbai', type: 'Full-time' },
      { id: 2, title: 'Junior Chef (full time)', date: 'Jan 01, 2025', location: 'Delhi', type: 'Full-time' },
      { id: 3, title: 'Junior Chef (full time)', date: 'Jan 01, 2025', location: 'Bengaluru', type: 'Full-time' },
      { id: 4, title: 'Junior Chef (full time)', date: 'Jan 01, 2025', location: 'Chennai', type: 'Full-time' },
    ]);
  }, []);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    setApplicationData({ name: '', email: '', phone: '', coverLetter: '' });
    setSubmitMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('');

    try {
      // simulate API call
      await new Promise((res) => setTimeout(res, 900));
      setSubmitMessage('Application submitted successfully!');
      setApplicationData({ name: '', email: '', phone: '', coverLetter: '' });
      setTimeout(() => {
        setShowApplicationForm(false);
        setSelectedJob(null);
      }, 1200);
    } catch (err) {
      setSubmitMessage('Error submitting application. Please try again.',err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b ">
      <div className="max-w-4xl xl:max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 pt-6">
          <h1 className="text-5xl font-extrabold text-[#2B2B2B]">Job</h1>
          <p className="mt-3 text-[#2B2B2B] max-w-1xl lg:text-xl mx-auto">
            Welcome to our team page — where creative ideas come to life! My team and I
            offer competitive positions and a great workplace.
          </p>
        </div>

        {/* jobs grid that visually matches the image: 2 columns on md, cards with soft peach gradient */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl shadow-sm p-5 border border-orange-200 hover:shadow-md transition-shadow"
            >
              {/* date chip and bookmark in one row at top */}
              <div className="flex flex-row justify-between items-center mb-4">
                <div className="bg-white px-3 py-1 rounded-lg text-xs text-gray-600 border border-gray-200">
                  {job.date}
                </div>
                <div className="bg-white px-1 py-1 rounded-lg text-gray-600 border border-gray-200">
                  <img src={arrow} className="w-4 h-4" alt="" />
                </div>
              </div>

              {/* Job title */}
              <h3 className="text-xl lg:text-3xl font-bold text-gray-900 mb-1">{job.title}</h3>
              
              {/* Job description */}
              <p className="text-sm text-gray-700 mb-4">Job Description</p>

              {/* Apply button */}
              <div className='flex flex-row items-end justify-end'>
                 <button
                onClick={() => handleApply(job)}
                className="w-fit  rounded-md px-5 py-2.5 cursor-pointer right-0 btn-gradient text-white font-medium shadow-sm hover:bg-amber-200 transition-colors"
              >
                Apply now
              </button>
              </div>
             
            </div>
          ))}
        </div>

        {/* Social icons row matching the bottom of the image */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8">
          <SocialBadge label="Instagram">
            <img src={instablack} alt="" />
          </SocialBadge>

          <SocialBadge label="Facebook">
           <img src={facebookblack} alt="" />
          </SocialBadge>

          <SocialBadge label="Youtube">
           <img src={youtubeblack} alt="" />
          </SocialBadge>

          <SocialBadge label="Linkedin">
           <img src={linkedinblack} alt="" />
          </SocialBadge>
        </div>

        {/* Modal Application Form */}
        {showApplicationForm && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50">
            <div className="bg-white rounded-2xl w-full max-w-2xl p-6 shadow-lg ">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-rose-900">Apply for {selectedJob.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">Please fill in your details and submit.</p>
                </div>
                <button
                  onClick={() => {
                    setShowApplicationForm(false);
                    setSelectedJob(null);
                  }}
                  aria-label="Close"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    required
                    value={applicationData.name}
                    onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email *</label>
                    <input
                      required
                      type="email"
                      value={applicationData.email}
                      onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone *</label>
                    <input
                      required
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Cover Letter *</label>
                  <textarea
                    required
                    rows={5}
                    value={applicationData.coverLetter}
                    onChange={(e) => setApplicationData({ ...applicationData, coverLetter: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
                    placeholder="Tell us why you're interested..."
                  />
                </div>

                {submitMessage && (
                  <div className={`p-3 rounded-md ${submitMessage.toLowerCase().includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {submitMessage}
                  </div>
                )}

                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setShowApplicationForm(false);
                      setSelectedJob(null);
                    }}
                    className="px-4 py-2 rounded-lg border border-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold disabled:opacity-60"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function SocialBadge({ children, label }) {
  return (
    <div className="flex items-center gap-3 ">
      <div className="w-10 h-10 flex items-center justify-center">{children}</div>
      <div className="text-2xl font-bold text-[#2B2B2B]">{label}</div>
    </div>
  );
}
