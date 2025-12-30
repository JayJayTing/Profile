'use client'

import { useState } from 'react'
import ExperienceTab from './ExperienceTab'
import ProjectsTab from './ProjectsTab'
import AboutMeTab from './AboutMeTab'

type TabId = 'experience' | 'projects' | 'about'

const tabs = [
  { id: 'experience' as TabId, label: 'Experience' },
  { id: 'projects' as TabId, label: 'Projects' },
  { id: 'about' as TabId, label: 'About Me' },
]

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<TabId>('experience')

  return (
    <section className="main-content">
      <nav className="tabs-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="tab-content">
        {activeTab === 'experience' && <ExperienceTab />}
        {activeTab === 'projects' && <ProjectsTab />}
        {activeTab === 'about' && <AboutMeTab />}
      </div>
    </section>
  )
}
