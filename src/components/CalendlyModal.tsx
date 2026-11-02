import React, { useState } from 'react';
import { X, Calendar, Clock, Check, ArrowRight, ShieldCheck, Video, Download } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [step, setStep] = useState<'pick' | 'details' | 'confirmed'>('pick');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    websiteUrl: '',
    monthlyRevenue: 'AUD $100k – $300k/mo',
    primaryChallenge: 'Scaling past creative fatigue without blowing out CAC',
  });

  if (!isOpen) return null;

  // Generate 7 upcoming weekdays
  const dates = [
    { day: 'Thursday', date: 'Nov 5', iso: '2026-11-05' },
    { day: 'Friday', date: 'Nov 6', iso: '2026-11-06' },
    { day: 'Monday', date: 'Nov 9', iso: '2026-11-09' },
    { day: 'Tuesday', date: 'Nov 10', iso: '2026-11-10' },
    { day: 'Wednesday', date: 'Nov 11', iso: '2026-11-11' },
    { day: 'Thursday', date: 'Nov 12', iso: '2026-11-12' },
    { day: 'Friday', date: 'Nov 13', iso: '2026-11-13' },
  ];

  const times = [
    '09:00 AM',
    '10:30 AM',
    '11:45 AM',
    '02:00 PM',
    '03:30 PM',
    '04:45 PM',
  ];

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmed');
  };

  const handleDownloadIcs = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Frame & Funnel//AI Growth Studio//EN
BEGIN:VEVENT
SUMMARY:Frame & Funnel Strategy Call - Commercials & Growth
DESCRIPTION:30-minute strategic growth session with Frame & Funnel Creative and Media Directors.
LOCATION:Google Meet (Link will be emailed)
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Frame-and-Funnel-Strategy-Call.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0B0B0E] border border-[#24242c] text-white shadow-2xl p-6 sm:p-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'pick' && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                <Video className="w-3.5 h-3.5" />
                <span>30-Minute 1-on-1 Strategy Session</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white">
                Book Your Growth Strategy Call
              </h2>
              <p className="text-sm text-neutral-400 mt-2">
                Speak directly with a Creative Director &amp; Performance Marketer. We will discuss your commercial creative, ad accounts, and roadmap for scaling revenue.
              </p>
            </div>

            {/* Step 1: Select Date */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
                1. Select a Day (Adelaide Time / ACST)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                {dates.map((d, index) => {
                  const isSelected = selectedDateIndex === index;
                  return (
                    <button
                      key={d.iso}
                      type="button"
                      onClick={() => setSelectedDateIndex(index)}
                      className={`p-3 text-center border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-white bg-white text-black font-semibold'
                          : 'border-[#24242e] bg-[#121217] text-neutral-300 hover:border-neutral-500 hover:text-white'
                      }`}
                    >
                      <span className="block text-[11px] uppercase tracking-wider">{d.day.slice(0, 3)}</span>
                      <span className="block text-sm font-bold mt-1">{d.date}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Time */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
                2. Select a Time Slot
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {times.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 text-sm text-center border transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'border-white bg-white/10 text-white font-semibold'
                          : 'border-[#24242e] bg-[#121217] text-neutral-300 hover:border-neutral-500'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 opacity-70" />
                      <span>{time}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#1e1e24] flex items-center justify-between">
              <div className="text-xs text-neutral-400">
                Selected: <span className="text-white font-medium">{dates[selectedDateIndex].day}, {dates[selectedDateIndex].date} at {selectedTime}</span>
              </div>
              <button
                type="button"
                onClick={() => setStep('details')}
                className="px-6 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {step === 'details' && (
          <form onSubmit={handleConfirmBooking} className="space-y-6">
            <div>
              <button
                type="button"
                onClick={() => setStep('pick')}
                className="text-xs text-neutral-400 hover:text-white transition-colors mb-2 inline-flex items-center gap-1 cursor-pointer"
              >
                &larr; Back to calendar
              </button>
              <h2 className="text-2xl font-display font-bold text-white">
                Confirm Call Details &amp; Qualification
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Scheduled for <span className="text-white font-medium">{dates[selectedDateIndex].day}, {dates[selectedDateIndex].date} at {selectedTime} (Adelaide Time)</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@company.com"
                  className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
                  Company / Brand Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Lumina Apparel"
                  className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
                  Website URL *
                </label>
                <input
                  type="url"
                  required
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  placeholder="https://lumina.com.au"
                  className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
                  Current Revenue Scale
                </label>
                <select
                  value={formData.monthlyRevenue}
                  onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                  className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                >
                  <option value="Under AUD $30k/mo">Under AUD $30k/mo</option>
                  <option value="AUD $30k – $100k/mo">AUD $30k – $100k/mo ($500k ARR)</option>
                  <option value="AUD $100k – $300k/mo">AUD $100k – $300k/mo ($1M–$3M ARR)</option>
                  <option value="AUD $300k+/mo">AUD $300k+/mo ($4M+ ARR)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
                  Primary Focus For The Call
                </label>
                <select
                  value={formData.primaryChallenge}
                  onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                  className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                >
                  <option value="AI Commercial Production & Video Creative">AI Commercial Production &amp; Video Creative</option>
                  <option value="Full FRAME + FUNNEL Growth Partnership">Full FRAME + FUNNEL Growth Partnership</option>
                  <option value="Founder Film & Authority Pipeline">Founder Film &amp; Authority Pipeline</option>
                  <option value="Paid Ads Takeover (Meta & Google)">Paid Ads Takeover (Meta &amp; Google)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1e1e24] flex items-center justify-between">
              <span className="text-xs text-neutral-400">Strictly 30 minutes. No hard-sell pitch.</span>
              <button
                type="submit"
                className="px-8 py-3 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Confirm Strategy Call
              </button>
            </div>
          </form>
        )}

        {step === 'confirmed' && (
          <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto text-white">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Meeting Confirmed
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                You're On The Schedule
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                A calendar invitation with the Google Meet link has been dispatched to <span className="text-white font-medium">{formData.email}</span>.
              </p>
            </div>

            <div className="bg-[#121218] p-5 max-w-md mx-auto text-left border border-[#24242e] space-y-2 text-xs">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Date &amp; Time</span>
                <span className="text-white font-medium">{dates[selectedDateIndex].day}, {dates[selectedDateIndex].date} at {selectedTime}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 py-2">
                <span className="text-neutral-400">Session</span>
                <span className="text-white font-medium">30-Min Strategy Call (Google Meet)</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-neutral-400">With</span>
                <span className="text-white font-medium">Frame &amp; Funnel Growth Director</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleDownloadIcs}
                className="w-full sm:w-auto px-5 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Add to Calendar (.ICS)</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 border border-neutral-700 text-neutral-300 hover:text-white hover:border-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
