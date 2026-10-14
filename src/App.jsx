import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutExpo from './components/AboutExpo';
import PrizesSection from './components/PrizesSection';
import AgendaSection from './components/AgendaSection';
import StartupsShowcase from './components/StartupsShowcase';
import RegisterStartupForm from './components/RegisterStartupForm';
import JudgesMentors from './components/JudgesMentors';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import NotificationToast from './components/NotificationToast';
import { INITIAL_STARTUPS } from './data/startups';

export default function App() {
  const [startups, setStartups] = useState(() => {
    const saved = localStorage.getItem('itpark_expo_startups');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_STARTUPS;
  });

  const [userVotedIds, setUserVotedIds] = useState(() => {
    const saved = localStorage.getItem('itpark_expo_voted');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
    return new Set();
  });

  const [toast, setToast] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Save to localStorage when startups or votes change
  useEffect(() => {
    try {
      localStorage.setItem('itpark_expo_startups', JSON.stringify(startups));
    } catch (e) {
      console.error(e);
    }
  }, [startups]);

  useEffect(() => {
    try {
      localStorage.setItem('itpark_expo_voted', JSON.stringify(Array.from(userVotedIds)));
    } catch (e) {
      console.error(e);
    }
  }, [userVotedIds]);

  // Section observer to update active nav link
  useEffect(() => {
    const sections = ['hero', 'about', 'prizes', 'agenda', 'startups', 'register', 'judges', 'faq'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message, title = '', type = 'info') => {
    setToast({ message, title, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleVote = (startupId) => {
    const newVoted = new Set(userVotedIds);
    let delta = 1;
    let message = '';

    if (newVoted.has(startupId)) {
      newVoted.delete(startupId);
      delta = -1;
      message = 'Ovozingiz qaytarib olindi';
      showToast(message, 'Ovoz yangilandi', 'info');
    } else {
      newVoted.add(startupId);
      delta = 1;
      message = 'Ovozingiz qabul qilindi! Loyihani qo\'llab-quvvatlaganingiz uchun tashakkur!';
      showToast(message, 'Muvaffaqiyatli ovoz!', 'vote');
    }

    setUserVotedIds(newVoted);

    setStartups((prev) =>
      prev.map((item) =>
        item.id === startupId
          ? { ...item, votes: Math.max(0, (item.votes || 0) + delta) }
          : item
      )
    );
  };

  const handleAddStartup = (newStartup) => {
    setStartups((prev) => [newStartup, ...prev]);
    showToast(
      `"${newStartup.title}" startapi muvaffaqiyatli ro'yxatga kiritildi!`,
      'Loyiha Qo\'shildi',
      'success'
    );
  };

  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowSuccessInShowcase = (startupId) => {
    handleNavigate('startups');
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection}
        userVotesCount={userVotedIds.size}
      />

      <main className="flex-1">
        {/* Hero Section with Live Countdown */}
        <HeroSection
          onExplore={() => handleNavigate('startups')}
          onRegister={() => handleNavigate('register')}
          totalStartups={startups.length}
        />

        {/* General Overview & About Exhibition */}
        <AboutExpo
          onRegister={() => handleNavigate('register')}
        />

        {/* Prize Pool and Nominations */}
        <PrizesSection />

        {/* 2-Day Schedule and Agenda */}
        <AgendaSection />

        {/* Presented Startup Projects Showcase & Voting */}
        <StartupsShowcase
          startups={startups}
          onVote={handleVote}
          userVotedIds={userVotedIds}
          onRegisterClick={() => handleNavigate('register')}
        />

        {/* Register Startup Application Form */}
        <RegisterStartupForm
          onAddStartup={handleAddStartup}
          onShowSuccessInShowcase={handleShowSuccessInShowcase}
        />

        {/* Judges & Mentors */}
        <JudgesMentors />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Notification Toast */}
      <NotificationToast
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
