import React from 'react';

const ModuleCard = ({ module, onToggleTopic }) => {
    const completedCount = module.topics.filter(t => t.completed).length;
    const progress = (completedCount / module.topics.length) * 100;
    const [searchMenuOpen, setSearchMenuOpen] = React.useState(null);

    const handleSearch = (topicTitle, lang) => {
        const query = lang === 'es' ? `${topicTitle} tutorial español ia` : `${topicTitle} ai tutorial`;
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        setSearchMenuOpen(null);
    };

    return (
        <div className="glass-panel animate-fade-in" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>{module.icon}</span>
                    {module.title}
                </h2>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                    {completedCount} / {module.topics.length} Completado
                </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{module.description}</p>

            {/* Progress Bar */}
            <div style={{ background: 'rgba(255,255,255,0.1)', height: '8px', borderRadius: '4px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                <div style={{
                    width: `${progress}%`,
                    background: 'var(--accent-gradient)',
                    height: '100%',
                    transition: 'width 0.5s ease-in-out'
                }} />
            </div>

            <div style={{ display: 'grid', gap: '0.8rem' }}>
                {module.topics.map(topic => (
                    <div key={topic.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative' }}>
                        <label
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                cursor: 'pointer',
                                padding: '0.8rem',
                                borderRadius: '8px',
                                background: topic.completed ? 'rgba(0, 210, 255, 0.1)' : 'rgba(255,255,255,0.05)',
                                border: topic.completed ? '1px solid rgba(0, 210, 255, 0.3)' : '1px solid transparent',
                                transition: 'all 0.2s',
                                flex: 1
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={topic.completed}
                                onChange={() => onToggleTopic(module.id, topic.id)}
                                style={{ accentColor: 'var(--accent-color)', width: '1.2rem', height: '1.2rem' }}
                            />
                            <span style={{
                                textDecoration: topic.completed ? 'line-through' : 'none',
                                color: topic.completed ? 'var(--text-secondary)' : 'var(--text-primary)'
                            }}>
                                {topic.title}
                            </span>
                        </label>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSearchMenuOpen(searchMenuOpen === topic.id ? null : topic.id);
                            }}
                            title="Buscar recursos"
                            style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                color: 'var(--text-secondary)',
                                cursor: 'pointer',
                                padding: '0.8rem',
                                borderRadius: '8px',
                                fontSize: '1.2rem',
                                transition: 'all 0.2s'
                            }}
                            onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                            onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                        >
                            🔍
                        </button>

                        {searchMenuOpen === topic.id && (
                            <div style={{
                                position: 'absolute',
                                right: '0',
                                top: '100%',
                                zIndex: 10,
                                background: '#1a1a2e',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '8px',
                                padding: '0.5rem',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                minWidth: '120px'
                            }}>
                                <button
                                    onClick={() => handleSearch(topic.title, 'es')}
                                    style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', textAlign: 'left', padding: '0.4rem', borderRadius: '4px' }}
                                    onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                                    onMouseOut={(e) => e.target.style.background = 'transparent'}
                                >
                                    🇪🇸 Español
                                </button>
                                <button
                                    onClick={() => handleSearch(topic.title, 'en')}
                                    style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', textAlign: 'left', padding: '0.4rem', borderRadius: '4px' }}
                                    onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                                    onMouseOut={(e) => e.target.style.background = 'transparent'}
                                >
                                    🇺🇸 English
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    📚 Recursos Recomendados
                </h4>
                <div style={{ display: 'grid', gap: '0.8rem' }}>
                    {module.resources && module.resources.map((res, idx) => (
                        <div key={idx} style={{
                            background: 'rgba(255,255,255,0.03)',
                            padding: '0.8rem',
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.4rem'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{res.name}</span>
                                <span style={{
                                    fontSize: '0.75rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '12px'
                                }}>{res.type}</span>
                            </div>

                            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                {res.description}
                            </p>

                            <a
                                href={res.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    alignSelf: 'flex-start',
                                    marginTop: '0.4rem',
                                    fontSize: '0.8rem',
                                    color: 'var(--accent-color)',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.3rem'
                                }}
                            >
                                Visitar sitio web →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModuleCard;
