export const curriculum = [
  {
    id: 'agentic-ai',
    title: 'Arquitectura de IA Agéntica',
    description: 'Domina el diseño de agentes autónomos capaces de planificar, usar herramientas y mantener memoria.',
    icon: '🤖',
    topics: [
      { id: 'tools', title: 'Uso de Herramientas y Llamadas a Funciones', completed: false },
      { id: 'planning', title: 'Algoritmos de Planificación (ReAct, TOT)', completed: false },
      { id: 'memory', title: 'Memoria a Largo Plazo y Bases de Datos Vectoriales', completed: false },
      { id: 'proj-agent', title: '💻 Proyecto: Agente ReAct simple para triaje automatizado', completed: false },
    ],
    resources: [
      {
        name: "LangGraph",
        type: "Framework",
        link: "https://langchain-ai.github.io/langgraph/",
        description: "Librería esencial para construir agentes con estado y loops de control."
      },
      {
        name: "Microsoft Autogen",
        type: "Herramienta",
        link: "https://microsoft.github.io/autogen/",
        description: "Permite crear múltiples agentes que conversan entre sí para resolver tareas."
      },
      {
        name: "DeepLearning.ai",
        type: "Cursos Gratis",
        link: "https://www.deeplearning.ai/short-courses/",
        description: "Cursos cortos de 1 hora creados por Andrew Ng y expertos de la industria."
      }
    ]
  },
  {
    id: 'ai-native',
    title: 'Ingeniería AI-Nativa',
    description: 'Construye aplicaciones donde la IA es el motor central, no solo un complemento.',
    icon: '⚡',
    topics: [
      { id: 'rag-advanced', title: 'Patrones Avanzados de RAG', completed: false },
      { id: 'dspy', title: 'DSPy y Optimización de Prompts', completed: false },
      { id: 'slm', title: 'Fine-tuning de Modelos Pequeños (SLMs)', completed: false },
      { id: 'proj-slm', title: '💻 Proyecto: Fine-tuning de SLM con historiales médicos sintéticos', completed: false },
    ],
    resources: [
      {
        name: "DSPy (Stanford)",
        type: "Librería",
        link: "https://github.com/stanfordnlp/dspy",
        description: "Revolucionaria forma de programar LLMs optimizando prompts automáticamente."
      },
      {
        name: "Hugging Face",
        type: "Modelos Gratis",
        link: "https://huggingface.co/",
        description: "El 'GitHub' de la IA. Encuentra miles de modelos open source listos para usar."
      },
      {
        name: "LlamaIndex",
        type: "Documentación",
        link: "https://docs.llamaindex.ai/",
        description: "La mejor herramienta para conectar tus datos privados (PDFs, SQL) a LLMs."
      }
    ]
  },
  {
    id: 'multimodal',
    title: 'Integración Multimodal',
    description: 'Crea experiencias que combinan texto, visión y audio de forma nativa.',
    icon: '👁️',
    topics: [
      { id: 'vision', title: 'Modelos de Visión-Lenguaje (VLM)', completed: false },
      { id: 'audio', title: 'Interacción Voz a Voz', completed: false },
      { id: 'video', title: 'Generación y Análisis de Video', completed: false },
      { id: 'proj-vision', title: '💻 Proyecto: Analizador multimodal de radiografías (Pipeline visual)', completed: false },
    ],
    resources: [
      {
        name: "OpenAI Vision Guide",
        type: "Guía",
        link: "https://platform.openai.com/docs/guides/vision",
        description: "Aprende cómo enviar imágenes a GPT-4 para que las analice y describa."
      },
      {
        name: "Replicate",
        type: "Probar Modelos",
        link: "https://replicate.com/",
        description: "Plataforma para correr modelos de imagen y video en la nube con una API simple."
      },
      {
        name: "Web Speech API",
        type: "Estándar Web",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API",
        description: "Tecnología nativa del navegador para reconocimiento de voz y texto a voz."
      }
    ]
  },
  {
    id: 'ops-governance',
    title: 'IA Operacional y Gobernanza',
    description: 'Asegura que tus sistemas de IA sean fiables, seguros y éticos.',
    icon: '🛡️',
    topics: [
      { id: 'observability', title: 'Observabilidad y Trazabilidad de LLM', completed: false },
      { id: 'security', title: 'Defensa contra Inyección de Prompts', completed: false },
      { id: 'ethics', title: 'Detección y Mitigación de Sesgos', completed: false },
      { id: 'economics', title: 'Economía de la IA en Salud: Costes de Inferencia (Tokens) y ROI', completed: false },
      { id: 'proj-ops', title: '💻 Proyecto: Implementar LangSmith para auditar sesgos en un bot clínico', completed: false },
    ],
    resources: [
      {
        name: "LangSmith",
        type: "Observabilidad",
        link: "https://www.langchain.com/langsmith",
        description: "Plataforma para debuggear, probar y monitorear tus aplicaciones de LLM."
      },
      {
        name: "OWASP Top 10 LLM",
        type: "Seguridad",
        link: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        description: "Lista crítica de las vulnerabilidades más comunes en aplicaciones de IA."
      },
      {
        name: "Arize Phoenix",
        type: "Open Source",
        link: "https://github.com/Arize-ai/phoenix",
        description: "Herramienta open source para evaluación y trazabilidad de IA."
      }
    ]
  },
  {
    id: 'ai-automation',
    title: 'Automatización con IA',
    description: 'Aprende a conectar IA con flujos de trabajo del mundo real (emails, bases de datos, APIs).',
    icon: '⚙️',
    topics: [
      { id: 'make-n8n', title: 'Workflows Visuales (Make/n8n + AI)', completed: false },
      { id: 'custom-gpt', title: 'Creación de Custom GPTs con Acciones', completed: false },
      { id: 'web-scraping', title: 'Extracción de Datos y Web Scraping con IA', completed: false },
      { id: 'proj-n8n', title: '💻 Proyecto: Flujo n8n que extrae alarmas HL7 o emails médicos críticos', completed: false },
    ],
    resources: [
      {
        name: "n8n (Open Source)",
        type: "Herramienta",
        link: "https://n8n.io/",
        description: "Alternativa a Zapier que permite alojar automatizaciones complejas con IA."
      },
      {
        name: "OpenAI Actions Docs",
        type: "Guía",
        link: "https://platform.openai.com/docs/actions",
        description: "Cómo conectar tus propios APIs a un GPT personalizado."
      }
    ]
  },
  {
    id: 'live-coding',
    title: 'Programación Asistida (Live Coding)',
    description: 'Acelera tu desarrollo usando agentes programadores y copilot.',
    icon: '💻',
    topics: [
      { id: 'python-basics', title: 'Fundamentos de Python para Scripting Médico', completed: false },
      { id: 'cursor-ide', title: 'Dominando Cursor IDE y Composer', completed: false },
      { id: 'prompt-engineering', title: 'Prompting para Código (Zero-shot, Few-shot)', completed: false },
      { id: 'github-copilot', title: 'Flujos avanzados con GitHub Copilot / Devin', completed: false },
      { id: 'proj-cursor', title: '💻 Proyecto: Crear un Dashboard Clínico funcional en React usando Cursor', completed: false },
    ],
    resources: [
      {
        name: "Python for Beginners",
        type: "Curso Gratuito",
        link: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
        description: "Curso intensivo de 1 hora para entender las bases de Python."
      },
      {
        name: "Cursor IDE",
        type: "Software",
        link: "https://cursor.sh/",
        description: "El editor de código basado en VSCode con IA nativa más popular."
      },
      {
        name: "Prompting Guide",
        type: "Guía",
        link: "https://www.promptingguide.ai/es",
        description: "Guía exhaustiva sobre cómo escribir prompts efectivos para generar código."
      }
    ]
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering para IA',
    description: 'La calidad de tu IA depende de tus datos. Domina pipelines y bases vectoriales a escala.',
    icon: '🗄️',
    topics: [
      { id: 'vector-dbs', title: 'Bases de Datos Vectoriales en Producción (Pinecone, Weaviate)', completed: false },
      { id: 'data-pipelines', title: 'Pipelines de Ingesta y Limpieza de Datos No Estructurados', completed: false },
      { id: 'feature-stores', title: 'Feature Stores y Gestión de Metadatos', completed: false },
      { id: 'proj-data', title: '💻 Proyecto: RAG Vectorial indexando 50 papers de PubMed (Pinecone)', completed: false },
    ],
    resources: [
      {
        name: "Pinecone Learning",
        type: "Guía",
        link: "https://www.pinecone.io/learn/",
        description: "Excelentes recursos para entender bases de datos vectoriales y embeddings."
      },
      {
        name: "Unstructured.io",
        type: "Herramienta",
        link: "https://unstructured.io/",
        description: "Herramienta líder para procesar PDFs, Word y HTML para usarlos en LLMs."
      }
    ]
  },
  {
    id: 'context-engineering',
    title: 'Ingeniería de Contexto y Confianza',
    description: 'Ve más allá del prompting: diseña sistemas conscientes de la situación y altamente fiables.',
    icon: '🧠',
    topics: [
      { id: 'context-design', title: 'Diseño de Contexto Dinámico y Grounding', completed: false },
      { id: 'mcp-protocol', title: 'Model Context Protocol (MCP) para Integración de Datos', completed: false },
      { id: 'ai-evals', title: 'Métricas de Evaluación y Pruebas A/B para IA', completed: false },
      { id: 'inference-opt', title: 'Optimización de Inferencia y Costos', completed: false },
      { id: 'proj-eval', title: '💻 Proyecto: Pruebas A/B sistemáticas (Evals) en prompts de pre-diagnóstico', completed: false },
    ],
    resources: [
      {
        name: "MCP Documentation",
        type: "Estándar Oficial",
        link: "https://modelcontextprotocol.io/",
        description: "Aprende cómo MCP conecta modelos de IA (como Claude) con fuentes de datos vivas."
      },
      {
        name: "Anthropic Prompt Engineering",
        type: "Documentación",
        link: "https://docs.anthropic.com/claude/docs/prompt-engineering",
        description: "Guía avanzada sobre cómo dar contexto estructurado (XML) a modelos potentes."
      },
      {
        name: "TruEra / TruLens",
        type: "Framework",
        link: "https://www.trulens.org/",
        description: "Herramienta open source para evaluar y trackear la calidad de aplicaciones LLM."
      }
    ]
  },
  {
    id: 'ai-in-medicine',
    title: 'IA en Medicina (Especialidad 2026)',
    description: 'Aplica el poder de la Inteligencia Artificial a la salud, diagnóstico y descubrimiento de fármacos.',
    icon: '⚕️',
    topics: [
      { id: 'medical-imaging', title: 'Análisis de Imágenes Médicas con IA (Rayos X, RM)', completed: false },
      { id: 'clinical-nlp', title: 'Procesamiento de Lenguaje Natural en Historiales Clínicos (Clinical NLP)', completed: false },
      { id: 'drug-discovery', title: 'Descubrimiento de Fármacos y Predicción de Proteínas (AlphaFold)', completed: false },
      { id: 'proj-med', title: '💻 Proyecto Final: Arquitectura de un Asistente Médico Copilot Integrado', completed: false },
    ],
    resources: [
      {
        name: "Google Health AI",
        type: "Investigación",
        link: "https://health.google/health-research/",
        description: "Los últimos avances de Google en el uso de IA para mejorar resultados clínicos."
      },
      {
        name: "DeepLearning.AI: AI for Medicine",
        type: "Curso Gratuito",
        link: "https://www.coursera.org/specializations/ai-for-medicine",
        description: "Especialización enfocada en aplicar machine learning para problemas biológicos y médicos reales."
      }
    ]
  },
  {
    id: 'legal-healthcare-data',
    title: 'Legalidad y Datos Hospitalarios AI',
    description: 'Navega la regulación y protege la privacidad del paciente al implementar IA clínica.',
    icon: '⚖️',
    topics: [
      { id: 'ai-act-eu', title: 'La Ley de IA (AI Act) Aplicada a Productos Sanitarios', completed: false },
      { id: 'hipaa-gdpr', title: 'HIPAA, GDPR y Anonimización de Datos Médicos', completed: false },
      { id: 'secure-deploy', title: 'Despliegues Seguros On-Premise vs Cloud en Hospitales', completed: false },
      { id: 'clinical-liability', title: 'Auditoría Clínica de la IA y Responsabilidad Civil Médica', completed: false },
      { id: 'proj-legal', title: '💻 Proyecto: Pipeline de anonimización de PiI médica usando Presidio', completed: false },
    ],
    resources: [
      {
        name: "EU AI Act Compliance Guide",
        type: "Regulación",
        link: "https://artificialintelligenceact.eu/",
        description: "Guía completa para entender la clasificación de riesgo de sistemas de IA en Europa."
      },
      {
        name: "Presidio (Microsoft)",
        type: "Open Source",
        link: "https://microsoft.github.io/presidio/",
        description: "Librería gratuita para detectar y anonimizar datos personales (PII/PHI) en texto e imágenes."
      }
    ]
  },
  {
    id: 'synthetic-data',
    title: 'Datos Sintéticos Médicos',
    description: 'Entrena modelos con pacientes ficticios realistas cuando los datos reales no están disponibles por privacidad.',
    icon: '🧬',
    topics: [
      { id: 'synth-synthea', title: 'Generación de Pacientes Sintéticos con Synthea', completed: false },
      { id: 'synth-anon', title: 'Técnicas de Anonimización y Desidentificación de Datos', completed: false },
      { id: 'synth-eval', title: 'Validación de Calidad de Datos Sintéticos (Fidelity vs Privacy)', completed: false },
      { id: 'proj-synth', title: '💻 Proyecto: Generar cohorte de 1.000 pacientes diabéticos sintéticos y entrenar un modelo predictivo de HbA1c', completed: false },
    ],
    resources: [
      {
        name: "Synthea",
        type: "Herramienta",
        link: "https://synthetichealth.github.io/synthea",
        description: "Generador open-source de historiales médicos sintéticos realistas usado por el MIT y la FDA."
      },
      {
        name: "SDV – Synthetic Data Vault",
        type: "Librería Python",
        link: "https://sdv.dev",
        description: "Framework del MIT para generar datos tabulares sintéticos con privacidad diferencial."
      }
    ]
  },
  {
    id: 'clinical-deployment',
    title: 'Despliegue Real en Producción',
    description: 'La diferencia entre un prototipo y algo que funciona en un hospital. Empaqueta y despliega tus modelos de IA.',
    icon: '🚀',
    topics: [
      { id: 'deploy-fastapi', title: 'APIs con FastAPI para Modelos de IA', completed: false },
      { id: 'deploy-docker', title: 'Contenedores Docker para IA Clínica', completed: false },
      { id: 'deploy-cicd', title: 'CI/CD para Modelos de IA – MLOps básico con GitHub Actions', completed: false },
      { id: 'deploy-infra', title: 'On-Premise vs Cloud Híbrido en la Práctica Hospitalaria', completed: false },
      { id: 'proj-deploy', title: '💻 Proyecto: Desplegar el asistente médico como API en Docker accesible desde el navegador', completed: false },
    ],
    resources: [
      {
        name: "FastAPI",
        type: "Framework",
        link: "https://fastapi.tiangolo.com",
        description: "El framework más usado para servir modelos de IA en Python. Rápido, moderno y con documentación automática."
      },
      {
        name: "MLflow",
        type: "MLOps",
        link: "https://mlflow.org",
        description: "Tracking de experimentos, registro y despliegue de modelos. Estándar en entornos hospitalarios."
      }
    ]
  },
  {
    id: 'clinical-evaluation',
    title: 'Evaluación Clínica de Modelos IA',
    description: 'No basta con accuracy alta. Aprende a demostrar que tu modelo es seguro y válido para usar con pacientes reales.',
    icon: '📊',
    topics: [
      { id: 'eval-metrics', title: 'Métricas Clínicas vs Técnicas (AUC-ROC, Sensibilidad, Especificidad)', completed: false },
      { id: 'eval-validation', title: 'Validación Prospectiva y Estudios Clínicos de IA (FDA, CE)', completed: false },
      { id: 'eval-fairness', title: 'Análisis de Subgrupos y Equidad Algorítmica en Salud', completed: false },
      { id: 'eval-explain', title: 'Explicabilidad Clínica con SHAP y LIME', completed: false },
      { id: 'proj-eval-clin', title: '💻 Proyecto: Auditoría de equidad y explicabilidad de un modelo de predicción de reingreso hospitalario', completed: false },
    ],
    resources: [
      {
        name: "SHAP",
        type: "Librería Python",
        link: "https://shap.readthedocs.io",
        description: "Estándar de facto para explicar predicciones de modelos de ML en contextos clínicos."
      },
      {
        name: "Aequitas (U. Chicago)",
        type: "Herramienta",
        link: "https://github.com/dssg/aequitas",
        description: "Auditoría de sesgos en modelos de IA con métricas de equidad para salud pública."
      }
    ]
  },
  {
    id: 'live-news-radar',
    title: '📡 Radar de Novedades (Live 2026+)',
    description: 'Mantente al día con los últimos descubrimientos, modelos y noticias de IA. Usa la lupa aquí para buscar la actualidad de esta misma semana.',
    icon: '📰',
    topics: [
      { id: 'news-llm', title: 'Últimos Modelos Fundacionales (OpenAI, Google, Anthropic)', completed: false },
      { id: 'news-med', title: 'Novedades y Papers Recientes en IA Médica', completed: false },
      { id: 'news-tools', title: 'Nuevas Herramientas y Frameworks de Desarrollo', completed: false },
      { id: 'proj-news', title: '💻 Proyecto: Configurar alertas automáticas (Custom RSS/n8n) para un nicho médico', completed: false },
    ],
    resources: [
      {
        name: "The Rundown AI",
        type: "Newsletter",
        link: "https://www.therundown.ai/",
        description: "El boletín de noticias de IA más leído para enterarte en 5 minutos de lo que salió ayer."
      },
      {
        name: "Hugging Face Daily Papers",
        type: "Investigación",
        link: "https://huggingface.co/papers",
        description: "Los papers científicos de IA más populares y disruptivos publicados en las últimas 24 horas."
      }
    ]
  }
];
