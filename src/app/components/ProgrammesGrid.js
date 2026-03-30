'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import styles from './ProgrammesGrid.module.css';

const COURSES = [
  { 
    id: 101, 
    title: 'English for Academic Research', 
    instructor: 'Dr. Sarah Wilson', 
    price: 89, 
    oldPrice: 159, 
    rating: 4.8, 
    reviews: 1240, 
    badge: 'Bestseller', 
    image: '📚',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder professional preview
    longDescription: 'This intensive programme is designed for researchers seeking to publish in high-impact international journals. We bridge the gap between complex research findings and clear, persuasive academic English.',
    keyTakeaways: [
      'Master the Nuance of Professional Academic Writing',
      'Increase Publication Success in Q1 Journals',
      'Develop Effective Peer-Review Response Strategies',
      'Optimize Citation Impact through Clarity'
    ],
    curriculum: [
      { module: 'Module 1: Foundations of Academic Writing', lessons: ['Grammar for Research', 'Clarity and Conciseness', 'Avoiding Plagiarism'] },
      { module: 'Module 2: Structuring Your Paper', lessons: ['Abstract Design', 'Methods and Results', 'Discussion Strategies'] },
      { module: 'Module 3: Peer Review & Publication', lessons: ['Journal Selection', 'Handling Reviewer Feedback', 'Publicity for Research'] }
    ]
  },
  { 
    id: 102, 
    title: 'Strategic Communication in HE', 
    instructor: 'James Miller', 
    price: 94, 
    oldPrice: 199, 
    rating: 4.9, 
    reviews: 850, 
    badge: 'New', 
    image: '🗣️',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    longDescription: 'Equip your institution with the tools to manage its global reputation. This course covers everything from internal campus culture to international media relations and crisis management.',
    keyTakeaways: [
      'Build a Resilient Institutional Brand',
      'Master Crisis Communication Protocols',
      'Engage International Stakeholders Effectively',
      'Leverage Digital Channels for Global Reach'
    ],
    curriculum: [
      { module: 'Module 1: Media Relations', lessons: ['Press Release Writing', 'Interview Techniques', 'Crisis Management'] },
      { module: 'Module 2: Internal Communication', lessons: ['Stakeholder Engagement', 'Developing Campus Culture', 'Email Marketing for HE'] }
    ]
  },
  { 
    id: 103, 
    title: 'IELTS Academic Preparation', 
    instructor: 'Global Excellence', 
    price: 49, 
    oldPrice: 99, 
    rating: 4.7, 
    reviews: 3400, 
    badge: 'Popular', 
    image: '✍️',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    longDescription: 'The definitive IELTS preparation course for students and professionals. Our methodology focuses on the specific logic behind the exam to ensure you hit your Band 7.5 or 8.0 targets.',
    keyTakeaways: [
      'Advanced Exam Logic & Strategy',
      'Confidence in Speaking and Writing',
      'Comprehensive Mock Tests with Feedback',
      'Personalized Feedback from IELTS Examiners'
    ],
    curriculum: [
      { module: 'Reading', lessons: ['Skimming & Scanning', 'Multiple Choice Strategy', 'Matching Headings'] },
      { module: 'WritingTask 1', lessons: ['Data Interpretation', 'Describing Trends', 'Process Diagrams'] },
      { module: 'Writing Task 2', lessons: ['Opinion Essays', 'Argumentative Structures', 'Common Errors'] }
    ]
  },
  { 
    id: 104, 
    title: 'PhD Dissertation Management', 
    instructor: 'Dr. Sarah Wilson', 
    price: 129, 
    oldPrice: 249, 
    rating: 4.9, 
    reviews: 620, 
    badge: 'Bestseller', 
    image: '🎓',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    longDescription: 'A survival guide for PhD candidates. Learn how to manage your project, your supervisor, and your mental health while producing world-class research.',
    keyTakeaways: [
      'Efficient Project Management for Research',
      'Optimizing Supervisory Relationships',
      'Data Analysis Workflows',
      'Techniques for Finishing on Time'
    ],
    curriculum: [
      { module: 'Planning', lessons: ['Timeline Management', 'Supervisory Relations', 'Gantt Charts for PHDs'] },
      { module: 'Execution', lessons: ['Data Analysis Tools', 'Systematic Literature Review', 'Stress Management'] }
    ]
  },
  { 
    id: 105, 
    title: 'Erasmus+ Mobility Planning', 
    instructor: 'Malta Global Hub', 
    price: 65, 
    oldPrice: 120, 
    rating: 4.6, 
    reviews: 450, 
    badge: '', 
    image: '🌍',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    longDescription: 'Master the complex logistics of Erasmus+ staff and student mobility. We provide templates and strategies used by the most successful international offices in Europe.',
    keyTakeaways: [
      'Full Compliance with EU Regulations',
      'Automating Mobility Logistics',
      'Maximizing Grant Utilization',
      'Enhancing the Participant Experience'
    ],
    curriculum: [
      { module: 'Governance', lessons: ['Grant Agreements', 'Quality Requirements', 'Compliance Checks'] },
      { module: 'Operations', lessons: ['Logistics & Housing', 'Language Support', 'Post-Mobility Reports'] }
    ]
  },
  { 
    id: 106, 
    title: 'Digital Transformation in HE', 
    instructor: 'Tech Partners', 
    price: 84, 
    oldPrice: 169, 
    rating: 4.5, 
    reviews: 1100, 
    badge: 'Trending', 
    image: '💻',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    longDescription: 'Move your university beyond the virtual classroom. This programme covers digital maturity, pedagogical innovation, and data-driven decision making for academic leaders.',
    keyTakeaways: [
      'Strategic Digital Maturity Roadmapping',
      'Advanced Pedagogy for Hybrid Spaces',
      'Implementing Secure Learning Management Systems',
      'Data-Driven Decision Making in Academia'
    ],
    curriculum: [
      { module: 'Strategy', lessons: ['Defining Your Vision', 'Digital Maturity Models', 'Change Management'] },
      { module: 'Implementation', lessons: ['CMS vs LMS', 'Hybrid Learning Models', 'Data Privacy'] }
    ]
  }
];

import { useState } from 'react';

export default function ProgrammesGrid() {
  const { dispatch } = useCart();
  const searchParams = useSearchParams();
  const query = searchParams.get('search')?.toLowerCase() || '';
  const [expandedCourse, setExpandedCourse] = useState(null);

  const filteredCourses = COURSES.filter(course => 
    course.title.toLowerCase().includes(query) || 
    course.instructor.toLowerCase().includes(query)
  );

  const router = useRouter();

  const handleAction = (course, buyNow = false) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: course.id, name: course.title, price: course.price }
    });
    if (buyNow) {
      dispatch({ type: 'SET_OPEN', payload: false });
      router.push('/checkout');
    } else {
      dispatch({ type: 'SET_OPEN', payload: true });
    }
  };

  const toggleCurriculum = (id) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  return (
    <div className={styles.grid}>
      {filteredCourses.length > 0 ? (
        filteredCourses.map(course => (
          <div key={course.id} className={`${styles.card} ${expandedCourse === course.id ? styles.cardExpanded : ''}`}>
            <div className={styles.imagePlaceholder}>{course.image}</div>
            <div className={styles.info}>
              <h3 className={styles.title}>{course.title}</h3>
              <p className={styles.instructor}>{course.instructor}</p>
              <div className={styles.rating}>
                <span className={styles.score}>{course.rating}</span>
                <div className={styles.stars}>★★★★★</div>
                <span className={styles.count}>({course.reviews.toLocaleString()})</span>
              </div>
              <div className={styles.pricing}>
                <span className={styles.price}>£{course.price}</span>
                <span className={styles.oldPrice}>£{course.oldPrice}</span>
              </div>
              
              <button 
                className={styles.curriculumToggle}
                onClick={() => toggleCurriculum(course.id)}
              >
                {expandedCourse === course.id ? 'Hide Details' : 'Preview & Course Details'}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ transform: expandedCourse === course.id ? 'rotate(180deg)' : 'none', transition: '0.2s' }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              {expandedCourse === course.id && (
                <div className={styles.curriculumList}>
                  {/* Professional Video Preview */}
                  <div className={styles.videoContainer}>
                    <iframe 
                      width="100%" 
                      height="200" 
                      src={course.videoUrl} 
                      title="Course Preview" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      style={{ borderRadius: 'var(--radius-sm)', marginBottom: '20px' }}
                    ></iframe>
                  </div>

                  <div className={styles.detailedContent}>
                    <p className={styles.longDesc}>{course.longDescription}</p>
                    
                    <div className={styles.takeaways}>
                      <p className={styles.curriculumTitle}>Key Learning Outcomes:</p>
                      <ul className={styles.takeawayList}>
                        {course.keyTakeaways?.map((takeaway, tIdx) => (
                          <li key={tIdx} className={styles.takeawayItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                            {takeaway}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className={styles.curriculumTitle} style={{ marginTop: '20px' }}>Course Curriculum:</p>
                    {course.curriculum?.map((mod, idx) => (
                      <div key={idx} className={styles.module}>
                         <span className={styles.moduleHeader}>{mod.module}</span>
                         <ul className={styles.lessonList}>
                           {mod.lessons.map((lesson, lIdx) => (
                             <li key={lIdx} className={styles.lessonItem}>
                               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                               {lesson}
                             </li>
                           ))}
                         </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className={styles.actions}>
                <button 
                  className={styles.addBtn}
                  onClick={() => handleAction(course)}
                  suppressHydrationWarning
                >
                  Add to Cart
                </button>
                <button 
                  className={styles.buyBtn}
                  onClick={() => handleAction(course, true)}
                  suppressHydrationWarning
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--grey-500)' }}>
          No programmes found matching "{query}". Try a different search term.
        </div>
      )}
    </div>
  );
}

