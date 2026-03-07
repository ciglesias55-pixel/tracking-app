import React, { useState, useEffect } from 'react';

const ModuleCard = ({ module, onToggleTopic, note, onUpdateNote }) => {
    const completedCount = module.topics.filter(t => t.completed).length;
    const progress = (completedCount / module.topics.length) * 100;
    const [searchMenuOpen, setSearchMenuOpen] = useState(null);
    const [localNote, setLocalNote] = useState(note || '');
    const [isSaving, setIsSaving] = useState(false);
    const [saveTimer, setSaveTimer] = useState(null);

    // Sync local state if parent prop changes (e.g. initial load)
    useEffect(() => {
        setLocalNote(note || '');
    }, [note]);

    const handleNoteChange = (e) => {
        const text = e.target.value;
        setLocalNote(text);
        setIsSaving(true);

        // Clear existing timer
        if (saveTimer) clearTimeout(saveTimer);

        // Set a new timer to save after 1 second of inactivity (debounce)
        const timer = setTimeout(() => {
            onUpdateNote(text);
            setIsSaving(false);
        }, 1000);

        setSaveTimer(timer);
    };

    const handleSearch = (topicTitle, lang) => {
        const cleanTitle = topicTitle.replace(/💻 Proyecto: |📡 /g, '').trim();
        let query = '';
        let url = '';
        if (lang === 'es') {
            query = `${cleanTitle} tutorial completo en español`;
            url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        } else {
            query = `${cleanTitle} full complete tutorial`;
            url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        }
        window.open(url, '_blank');
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
                                background: topic.completed ? 'rgba(57, 255, 20, 0.1)' : 'rgba(255,255,255,0.05)',
                                border: topic.completed ? '1px solid rgba(57, 255, 20, 0.3)' : '1px solid transparent',
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
                                textDecoration: 'none',
                                color: topic.completed ? '#39FF14' : 'var(--text-primary)',
                                fontWeight: topic.completed ? '600' : 'normal'
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
                    📚 Recursos Seleccionados
                </h4>

                {/* Spanish Resources */}
                {module.resources && module.resources.filter(r => r.lang === 'es').length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span>🇪🇸</span> EN ESPAÑOL
                        </div>
                        <div style={{ display: 'grid', gap: '0.8rem' }}>
                            {module.resources.filter(r => r.lang === 'es').map((res, idx) => (
                                <ResourceItem key={idx} res={res} />
                            ))}
                        </div>
                    </div>
                )}

                {/* English Resources */}
                {module.resources && module.resources.filter(r => r.lang === 'en').length > 0 && (
                    <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span>🇺🇸</span> PREMIUM ENGLISH RESOURCES
                        </div>
                        <div style={{ display: 'grid', gap: '0.8rem' }}>
                            {module.resources.filter(r => r.lang === 'en').map((res, idx) => (
                                <ResourceItem key={idx} res={res} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Personal Notes Section */}
            <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        ✍️ Mis Apuntes
                    </h4>
                    <span style={{
                        fontSize: '0.75rem',
                        color: isSaving ? 'var(--accent-color)' : 'var(--text-secondary)',
                        opacity: isSaving ? 1 : 0.5,
                        transition: 'opacity 0.3s'
                    }}>
                        {isSaving ? 'Guardando en la nube...' : (localNote ? 'Guardado ✅' : '')}
                    </span>
                </div>
                <textarea
                    value={localNote}
                    onChange={handleNoteChange}
                    placeholder="Escribe aquí tus ideas, aprendizajes clave o dudas sobre este módulo..."
                    style={{
                        width: '100%',
                        minHeight: '120px',
                        background: 'rgba(0,0,0,0.2)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '8px',
                        padding: '1rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        resize: 'vertical',
                        outline: 'none',
                        transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
            </div>
        </div>
    );
};

const ResourceItem = ({ res }) => (
    <div style={{
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
            Visitar recurso →
        </a>
    </div>
);

export default ModuleCard;
