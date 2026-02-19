import React, { useState, useEffect } from 'react';
import { curriculum } from '../data/curriculum';
import ModuleCard from './ModuleCard';
import confetti from 'canvas-confetti';

const Dashboard = () => {
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem('ai-study-progress-2026');
        if (saved) {
            const parsedSaved = JSON.parse(saved);
            // Merge saved progress with any new curriculum additions
            const merged = curriculum.map(module => {
                const savedModule = parsedSaved.find(m => m.id === module.id);
                if (savedModule) {
                    return {
                        ...module,
                        topics: module.topics.map(topic => {
                            const savedTopic = savedModule.topics.find(t => t.id === topic.id);
                            return savedTopic ? { ...topic, completed: savedTopic.completed } : topic;
                        })
                    };
                }
                return module; // New module
            });
            return merged;
        }
        return curriculum;
    });
    const [showCertificate, setShowCertificate] = useState(false);

    useEffect(() => {
        localStorage.setItem('ai-study-progress-2026', JSON.stringify(data));
    }, [data]);

    const handleToggleTopic = (moduleId, topicId) => {
        setData(prevData => {
            const newData = prevData.map(module => {
                if (module.id !== moduleId) return module;
                return {
                    ...module,
                    topics: module.topics.map(topic => {
                        if (topic.id !== topicId) return topic;
                        const newStatus = !topic.completed;
                        if (newStatus) {
                            confetti({
                                particleCount: 50,
                                spread: 60,
                                origin: { y: 0.7 },
                                colors: ['#00d2ff', '#ffffff']
                            });
                        }
                        return { ...topic, completed: newStatus };
                    })
                };
            });
            return newData;
        });
    };

    const totalTopics = data.reduce((acc, m) => acc + m.topics.length, 0);
    const completedTopics = data.reduce((acc, m) => acc + m.topics.filter(t => t.completed).length, 0);
    const overallProgress = Math.round((completedTopics / totalTopics) * 100);

    useEffect(() => {
        if (overallProgress === 100 && !localStorage.getItem('certificate-shown-2026')) {
            setTimeout(() => {
                setShowCertificate(true);
                confetti({
                    particleCount: 200,
                    spread: 120,
                    origin: { y: 0.6 },
                    colors: ['#FFD700', '#FFA500', '#FF8C00', '#ffffff']
                });
                localStorage.setItem('certificate-shown-2026', 'true');
            }, 800);
        }
    }, [overallProgress]);

    return (
        <div className="dashboard">
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem', lineHeight: '1.2' }}>
                    Fellowship Bisvo with your proper mecabisvo 2026
                </h1>

                <div style={{ marginTop: '2rem', maxWidth: '600px', margin: '2rem auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        <span>Progreso General</span>
                        <span>{overallProgress}%</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.1)', height: '12px', borderRadius: '6px', overflow: 'hidden' }}>
                        <div style={{
                            width: `${overallProgress}%`,
                            background: 'var(--accent-gradient)',
                            height: '100%',
                            boxShadow: '0 0 10px rgba(0, 210, 255, 0.5)',
                            transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                        }} />
                    </div>
                    {overallProgress === 100 && (
                        <div className="animate-fade-in" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                            <button
                                onClick={() => {
                                    setShowCertificate(true);
                                    confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 }, colors: ['#FFD700', '#FFA500'] });
                                }}
                                className="btn-primary"
                                style={{
                                    background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                                    color: '#000',
                                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem'
                                }}
                            >
                                🎓 Ver Título de Máster
                            </button>
                        </div>
                    )}
                </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {data.map(module => (
                    <ModuleCard key={module.id} module={module} onToggleTopic={handleToggleTopic} />
                ))}
            </div>

            {
                showCertificate && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        zIndex: 1000, padding: '1rem',
                        animation: 'fadeIn 0.5s ease-out'
                    }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0c29 100%)',
                            padding: '4rem 2rem', borderRadius: '20px',
                            border: '2px solid #FFD700',
                            boxShadow: '0 0 50px rgba(255, 215, 0, 0.2)',
                            maxWidth: '800px', width: '100%',
                            textAlign: 'center', position: 'relative'
                        }}>
                            <button
                                onClick={() => setShowCertificate(false)}
                                style={{ position: 'absolute', top: '1.5rem', right: '2rem', background: 'transparent', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer', opacity: 0.7 }}
                                onMouseOver={(e) => e.target.style.opacity = '1'}
                                onMouseOut={(e) => e.target.style.opacity = '0.7'}
                            >✕</button>

                            <div style={{ color: '#FFD700', fontSize: '4.5rem', marginBottom: '1rem', textShadow: '0 0 20px rgba(255,215,0,0.5)' }}>🎓</div>
                            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.2rem', color: '#FFD700', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.5rem' }}>
                                Universidad de Yo Bisvo
                            </h2>
                            <div style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                Por la presente se le otorga el título de
                            </div>
                            <h1 style={{ fontSize: '2.5rem', background: 'linear-gradient(90deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem', lineHeight: '1.2' }}>
                                FELLOWSHIP BISVO: LIDERAZGO MÉDICO EN LA ERA DE LA IA
                            </h1>
                            <div style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '2rem', fontStyle: 'italic', fontWeight: 'bold', textShadow: '0 0 10px rgba(255,215,0,0.3)' }}>
                                "Yo Bisvo with your proper mecabisvo"
                            </div>
                            <div style={{ fontSize: '1.1rem', color: '#aaa', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,215,0,0.3)' }}>
                                Por haber completado con éxito la formación intensiva en Arquitecturas Agénticas, Ingeniería AI-Nativa, Integración Multimodal y Gobernanza Operacional.
                            </div>

                            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem', gap: '1rem', flexWrap: 'wrap' }}>
                                <div style={{ minWidth: '150px' }}>
                                    <div style={{ borderBottom: '1px solid #FFD700', paddingBottom: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', color: '#fff', fontSize: '1.2rem' }}>Generado O.</div>
                                    <div style={{ fontSize: '0.8rem', color: '#FFD700', textTransform: 'uppercase', letterSpacing: '1px' }}>Estudiante de Honor</div>
                                </div>

                                <div style={{
                                    width: '90px', height: '90px', borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#000', fontWeight: 'bold', fontSize: '0.8rem',
                                    transform: 'rotate(-10deg)', boxShadow: '0 4px 15px rgba(255,215,0,0.4)',
                                    border: '2px dashed #000'
                                }}>
                                    <div style={{ textAlign: 'center', lineHeight: '1.2' }}>SELLO<br />OFICIAL</div>
                                </div>

                                <div style={{ minWidth: '150px' }}>
                                    <div style={{ borderBottom: '1px solid #FFD700', paddingBottom: '0.5rem', marginBottom: '0.5rem', fontFamily: 'cursive', color: '#fff', fontSize: '1.5rem' }}>Yo Bisvo</div>
                                    <div style={{ fontSize: '0.8rem', color: '#FFD700', textTransform: 'uppercase', letterSpacing: '1px' }}>Rectorado de IA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default Dashboard;
