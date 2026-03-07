export const curriculum = [
  {
    "id": "live-coding",
    "title": "Programación Asistida (Live Coding)",
    "description": "Acelera tu desarrollo usando agentes programadores y copilot.",
    "icon": "💻",
    "topics": [
      {
        "id": "python-basics",
        "title": "Fundamentos de Python para Scripting Médico",
        "completed": false
      },
      {
        "id": "cursor-ide",
        "title": "Dominando Cursor IDE y Composer",
        "completed": false
      },
      {
        "id": "prompt-engineering",
        "title": "Prompting para Código (Zero-shot, Few-shot)",
        "completed": false
      },
      {
        "id": "github-copilot",
        "title": "Flujos avanzados con GitHub Copilot / Devin",
        "completed": false
      },
      {
        "id": "proj-cursor",
        "title": "💻 Proyecto: Crear un Dashboard Clínico funcional en React usando Cursor",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "Harvard CS50P: Introducción a Python",
        "type": "Curso Universitario Gratis",
        "link": "https://cs50.harvard.edu/python/",
        "description": "El estándar de oro mundial. Enseñado por David J. Malan, es la mejor forma de asentar bases sólidas de programación computacional para médicos."
      },
      {
        "name": "Cursor Directory",
        "type": "Directorio Público",
        "link": "https://cursor.directory/",
        "description": "Una biblioteca abierta de reglas de comportamiento (System Prompts) para configurar Cursor y que programe como un experto en React, Python o HL7."
      },
      {
        "name": "Pair Programming con un LLM",
        "type": "Curso Corto DeepLearning.AI",
        "link": "https://www.deeplearning.ai/short-courses/pair-programming-llm/",
        "description": "Curso gratuito de 1 hora de Andrew Ng sobre cómo dividir la lógica de un problema para que la Inteligencia Artificial te escriba el código sin errores."
      }
    ]
  },
  {
    "id": "ai-automation",
    "title": "Automatización con IA",
    "description": "Aprende a conectar IA con flujos de trabajo del mundo real (emails, bases de datos, APIs).",
    "icon": "⚙️",
    "topics": [
      {
        "id": "api-connect",
        "title": "Fundamentos de APIs Médicas (REST) y Conectores",
        "completed": false
      },
      {
        "id": "make-n8n",
        "title": "Workflows Visuales (Make/n8n + AI)",
        "completed": false
      },
      {
        "id": "custom-gpt",
        "title": "Creación de Custom GPTs con Acciones",
        "completed": false
      },
      {
        "id": "web-scraping",
        "title": "Extracción de Datos y Web Scraping con IA",
        "completed": false
      },
      {
        "id": "proj-n8n",
        "title": "💻 Proyecto: Flujo n8n que extrae alarmas HL7 o emails médicos críticos",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "n8n Academy: Curso de Principiantes",
        "type": "Academia Oficial",
        "link": "https://academy.n8n.io/paths/beginners",
        "description": "Ruta paso a paso gratuita para aprender a construir nodos, conectar APIs en la nube e automatizar procesos que te ahorren horas a la semana."
      },
      {
        "name": "OpenAI Cookbook: Assistants",
        "type": "Recetario de Código",
        "link": "https://cookbook.openai.com/examples/assistants_api_overview_python",
        "description": "La guía técnica oficial (con código copiable) proporcionada por OpenAI para crear un 'Asistente Médico' en Python con capacidad de llamar a herramientas."
      }
    ]
  },
  {
    "id": "multimodal",
    "title": "Integración Multimodal",
    "description": "Crea experiencias que combinan texto, visión y audio de forma nativa.",
    "icon": "👁️",
    "topics": [
      {
        "id": "vision",
        "title": "Modelos de Visión-Lenguaje (VLM)",
        "completed": false
      },
      {
        "id": "audio",
        "title": "Interacción Voz a Voz",
        "completed": false
      },
      {
        "id": "video",
        "title": "Generación y Análisis de Video",
        "completed": false
      },
      {
        "id": "proj-vision",
        "title": "💻 Proyecto: Analizador multimodal de radiografías (Pipeline visual)",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "OpenAI Vision Cookbook",
        "type": "Recetario Práctico",
        "link": "https://cookbook.openai.com/examples/using_gpt4_vision_with_the_assistants_api",
        "description": "Tutorial sobre cómo adjuntarle radiografías o informes escaneados al modelo para que los interprete como si tuviera 'ojos'."
      },
      {
        "name": "Building Multimodal Apps",
        "type": "Curso Corto DeepLearning.AI",
        "link": "https://www.deeplearning.ai/short-courses/building-multimodal-applications-with-gradio/",
        "description": "Aprende a construir interfaces web simples para subir imágenes médicas y notas de voz y conectarlas a modelos grandes."
      }
    ]
  },
  {
    "id": "ai-native",
    "title": "Ingeniería AI-Nativa",
    "description": "Construye aplicaciones donde la IA es el motor central, no solo un complemento.",
    "icon": "⚡",
    "topics": [
      {
        "id": "rag-advanced",
        "title": "Patrones Avanzados de RAG",
        "completed": false
      },
      {
        "id": "dspy",
        "title": "DSPy y Optimización de Prompts",
        "completed": false
      },
      {
        "id": "slm",
        "title": "Fine-tuning de Modelos Pequeños (SLMs)",
        "completed": false
      },
      {
        "id": "proj-slm",
        "title": "💻 Proyecto: Fine-tuning de SLM con historiales médicos sintéticos",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "Hugging Face NLP Course",
        "type": "Curso Magistral",
        "link": "https://huggingface.co/learn/nlp-course/",
        "description": "El curso más exhaustivo y pedagógico sobre cómo funcionan los modelos Transformer (la base del 100% de las IAs actuales) y cómo afinar modelos open-source."
      },
      {
        "name": "Mastering RAG con LlamaIndex",
        "type": "Guía Definitiva",
        "link": "https://docs.llamaindex.ai/en/stable/optimizing/production_rag/",
        "description": "El manual para ingenieros sobre cómo hacer que RAG funcione en producción y no se invente información cuando busque entre mil PDFs médicos."
      },
      {
        "name": "DSPy Official Documentation",
        "type": "Framework Avanzado",
        "link": "https://dspy-docs.vercel.app/docs/intro",
        "description": "La nueva revolución tecnológica de Stanford: en lugar de escribir prompts a mano, programas reglas matemáticas para que el modelo se optimice a sí mismo."
      }
    ]
  },
  {
    "id": "synthetic-data",
    "title": "Datos Sintéticos Médicos",
    "description": "Entrena modelos con pacientes ficticios realistas cuando los datos reales no están disponibles por privacidad.",
    "icon": "🧬",
    "topics": [
      {
        "id": "synth-synthea",
        "title": "Generación de Pacientes Sintéticos con Synthea",
        "completed": false
      },
      {
        "id": "synth-anon",
        "title": "Técnicas de Anonimización y Desidentificación de Datos",
        "completed": false
      },
      {
        "id": "synth-eval",
        "title": "Validación de Calidad de Datos Sintéticos (Fidelity vs Privacy)",
        "completed": false
      },
      {
        "id": "proj-synth",
        "title": "💻 Proyecto: Generar cohorte de 1.000 pacientes diabéticos sintéticos y entrenar un modelo predictivo de HbA1c",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "Synthea: Pacientes Sintéticos (MIT)",
        "type": "Herramienta Médica",
        "link": "https://github.com/synthetichealth/synthea/wiki",
        "description": "El simulador estándar mundial usado para generar historias clínicas realistas pero totalmente falsas (EHR), libre de las ataduras de la protección de datos."
      },
      {
        "name": "Synthetic Data Vault (SDV)",
        "type": "Librería Python MIT",
        "link": "https://docs.sdv.dev/sdv",
        "description": "Aprende a inyectarle datos reales de Cardiología a un algoritmo para escupir gemelos sintéticos idénticos estadísticamente, pero 100% anónimos."
      }
    ]
  },
  {
    "id": "ai-in-medicine",
    "title": "IA en Medicina (Especialidad 2026)",
    "description": "Aplica el poder de la Inteligencia Artificial a la salud, diagnóstico y descubrimiento de fármacos.",
    "icon": "⚕️",
    "topics": [
      {
        "id": "medical-imaging",
        "title": "Análisis de Imágenes Médicas con IA (Rayos X, RM)",
        "completed": false
      },
      {
        "id": "clinical-nlp",
        "title": "Procesamiento de Lenguaje Natural en Historiales Clínicos (Clinical NLP)",
        "completed": false
      },
      {
        "id": "drug-discovery",
        "title": "Descubrimiento de Fármacos y Predicción de Proteínas (AlphaFold)",
        "completed": false
      },
      {
        "id": "proj-med",
        "title": "💻 Proyecto Final: Arquitectura de un Asistente Médico Copilot Integrado",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "Coursera: AI for Medicine",
        "type": "Especialización Clínica",
        "link": "https://www.coursera.org/specializations/ai-for-medicine",
        "description": "Impartida por Pranav Rajpurkar (profesor de Harvard/Stanford). Enseña Inteligencia Artificial aplicada agresivamente al diagnóstico clínico y pronóstico de supervivencia."
      },
      {
        "name": "NEJM AI",
        "type": "Revista Científica",
        "link": "https://ai.nejm.org/",
        "description": "La nueva revista The New England Journal of Medicine, dedicada estrictamente a medir el impacto clínico, a pie de cama, de la Inteligencia Artificial."
      },
      {
        "name": "Google Health Research Papers",
        "type": "Publicaciones",
        "link": "https://health.google/health-research/",
        "description": "La sala de trofeos de Google con todos sus hallazgos empíricos de modelos como Med-PaLM interactuando con procesos hospitalarios reales."
      }
    ]
  },
  {
    "id": "data-engineering",
    "title": "Data Engineering para IA",
    "description": "La calidad de tu IA depende de tus datos. Domina pipelines y bases vectoriales a escala.",
    "icon": "🗄️",
    "topics": [
      {
        "id": "vector-dbs",
        "title": "Bases de Datos Vectoriales en Producción (Pinecone, Weaviate)",
        "completed": false
      },
      {
        "id": "data-pipelines",
        "title": "Pipelines de Ingesta y Limpieza de Datos No Estructurados",
        "completed": false
      },
      {
        "id": "feature-stores",
        "title": "Feature Stores y Gestión de Metadatos",
        "completed": false
      },
      {
        "id": "proj-data",
        "title": "💻 Proyecto: RAG Vectorial indexando 50 papers de PubMed (Pinecone)",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "Pinecone Vector Center",
        "type": "Conceptos Fundamentales",
        "link": "https://www.pinecone.io/learn/",
        "description": "Entiende matemáticamente cómo un modelo de lenguaje traduce la palabra 'Glucosa' a un vector en el espacio para procesarla."
      },
      {
        "name": "Unstructured.io Documentation",
        "type": "Librería de Ingesta",
        "link": "https://unstructured-io.github.io/unstructured/",
        "description": "Transformar PDFs ilegibles de informes médicos a texto puro que un modelo LLM pueda entender requiere magia. Esta librería es la magia."
      }
    ]
  },
  {
    "id": "agentic-ai",
    "title": "Arquitectura de IA Agéntica",
    "description": "Domina el diseño de agentes autónomos capaces de planificar, usar herramientas y mantener memoria.",
    "icon": "🤖",
    "topics": [
      {
        "id": "tools",
        "title": "Uso de Herramientas y Llamadas a Funciones",
        "completed": false
      },
      {
        "id": "planning",
        "title": "Algoritmos de Planificación (ReAct, TOT)",
        "completed": false
      },
      {
        "id": "multi-agent",
        "title": "Colaboración y Orquestación Multi-Agente (Sistemas de Expertos)",
        "completed": false
      },
      {
        "id": "memory",
        "title": "Memoria a Largo Plazo y Bases de Datos Vectoriales",
        "completed": false
      },
      {
        "id": "proj-agent",
        "title": "💻 Proyecto: Agente ReAct simple para triaje automatizado",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "Building Effective Agents (Anthropic)",
        "type": "Paper de Arquitectura",
        "link": "https://www.anthropic.com/research/building-effective-agents",
        "description": "El manifiesto de 2025 de Anthropic explicando que la mayoría de 'agentes' no funcionan, y detallando exactamente qué patrones arquitectónicos (Workflow vs Autonomía) sí lo hacen."
      },
      {
        "name": "LangGraph: Multi-Agent Tutorial",
        "type": "Tutorial Técnico",
        "link": "https://langchain-ai.github.io/langgraph/tutorials/multi_agent/multi-agent-collaboration/",
        "description": "Cómo programar un sistema multiagente donde un 'Agente Médico Consultor' y un 'Agente Farmacológico' dialogan entre ellos hasta llegar a una conclusión."
      }
    ]
  },
  {
    "id": "context-engineering",
    "title": "Ingeniería de Contexto y Confianza",
    "description": "Ve más allá del prompting: diseña sistemas conscientes de la situación y altamente fiables.",
    "icon": "🧠",
    "topics": [
      {
        "id": "context-design",
        "title": "Diseño de Contexto Dinámico y Grounding",
        "completed": false
      },
      {
        "id": "mcp-protocol",
        "title": "Model Context Protocol (MCP) para Integración de Datos",
        "completed": false
      },
      {
        "id": "ai-evals",
        "title": "Métricas de Evaluación y Pruebas A/B para IA",
        "completed": false
      },
      {
        "id": "inference-opt",
        "title": "Optimización de Inferencia y Costos",
        "completed": false
      },
      {
        "id": "proj-eval",
        "title": "💻 Proyecto: Pruebas A/B sistemáticas (Evals) en prompts de pre-diagnóstico",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "Model Context Protocol (MCP)",
        "type": "Estándar Oficial",
        "link": "https://modelcontextprotocol.io/",
        "description": "Infórmate a fondo sobre este protocolo abierto. Nos permite conectar modelos en la nube de forma segura a bases de datos SQLite locales de un hospital."
      },
      {
        "name": "Anthropic Prompt Engineering Tutorial",
        "type": "Repositorio Interactivo",
        "link": "https://github.com/anthropics/courses",
        "description": "Aprende de los creadores de Claude cómo domar el modelo usando etiquetas <xml> y dándole contexto estructurado infalible (vital en el sector salud)."
      }
    ]
  },
  {
    "id": "ops-governance",
    "title": "IA Operacional y Gobernanza",
    "description": "Asegura que tus sistemas de IA sean fiables, seguros y éticos.",
    "icon": "🛡️",
    "topics": [
      {
        "id": "observability",
        "title": "Observabilidad y Trazabilidad de LLM",
        "completed": false
      },
      {
        "id": "security",
        "title": "Defensa contra Inyección de Prompts",
        "completed": false
      },
      {
        "id": "ethics",
        "title": "Detección y Mitigación de Sesgos",
        "completed": false
      },
      {
        "id": "economics",
        "title": "Economía de la IA en Salud: Costes de Inferencia (Tokens) y ROI",
        "completed": false
      },
      {
        "id": "proj-ops",
        "title": "💻 Proyecto: Implementar LangSmith para auditar sesgos en un bot clínico",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "OWASP Top 10 for LLMs",
        "type": "Seguridad Informática",
        "link": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        "description": "Si tienes un chat médico abierto y alguien le miente (Prompt Injection), tu modelo puede revelar datos ajenos. Esta es la guía global para sellar esos agujeros."
      },
      {
        "name": "LangSmith Evaluation Cookbook",
        "type": "Métricas de Control",
        "link": "https://docs.smith.langchain.com/evaluation",
        "description": "Un manual de uso para implementar métricas sobre la IA. Si la IA contesta 1,000 preguntas de pacientes hoy, ¿cómo monitorizas que no haya cometido ni un solo error grave?"
      }
    ]
  },
  {
    "id": "clinical-evaluation",
    "title": "Evaluación Clínica de Modelos IA",
    "description": "No basta con accuracy alta. Aprende a demostrar que tu modelo es seguro y válido para usar con pacientes reales.",
    "icon": "📊",
    "topics": [
      {
        "id": "eval-metrics",
        "title": "Métricas Clínicas vs Técnicas (AUC-ROC, Sensibilidad, Especificidad)",
        "completed": false
      },
      {
        "id": "eval-validation",
        "title": "Validación Prospectiva y Estudios Clínicos de IA (FDA, CE)",
        "completed": false
      },
      {
        "id": "eval-fairness",
        "title": "Análisis de Subgrupos y Equidad Algorítmica en Salud",
        "completed": false
      },
      {
        "id": "eval-explain",
        "title": "Explicabilidad Clínica con SHAP y LIME",
        "completed": false
      },
      {
        "id": "proj-eval-clin",
        "title": "💻 Proyecto: Auditoría de equidad y explicabilidad de un modelo de predicción de reingreso hospitalario",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "DECIDE-AI Guidelines (Nature)",
        "type": "Publicación de Referencia",
        "link": "https://www.nature.com/articles/s41591-022-01772-9",
        "description": "Una vez hecho el modelo, hay que hacer un estudio clínico validando que usar IA es mejor que no usarla. Estas son las directrices de la Universidad de Oxford para hacerlo."
      },
      {
        "name": "SHAP Python Library",
        "type": "Librería de Explicabilidad",
        "link": "https://shap.readthedocs.io/",
        "description": "Los médicos odian los algoritmos 'caja negra'. Con SHAP puedes crear visualizaciones exactas que digan: 'El paciente X tiene 80% riesgo de mortalidad de COVID DEBIDO a que la C-Reactiva está en 9.5'."
      }
    ]
  },
  {
    "id": "legal-healthcare-data",
    "title": "Legalidad y Datos Hospitalarios AI",
    "description": "Navega la regulación y protege la privacidad del paciente al implementar IA clínica.",
    "icon": "⚖️",
    "topics": [
      {
        "id": "ai-act-eu",
        "title": "La Ley de IA (AI Act) Aplicada a Productos Sanitarios",
        "completed": false
      },
      {
        "id": "hipaa-gdpr",
        "title": "HIPAA, GDPR y Anonimización de Datos Médicos",
        "completed": false
      },
      {
        "id": "secure-deploy",
        "title": "Despliegues Seguros On-Premise vs Cloud en Hospitales",
        "completed": false
      },
      {
        "id": "clinical-liability",
        "title": "Auditoría Clínica de la IA y Responsabilidad Civil Médica",
        "completed": false
      },
      {
        "id": "proj-legal",
        "title": "💻 Proyecto: Pipeline de anonimización de PiI médica usando Presidio",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "EU AI Act Compliance (MedTech)",
        "type": "Guía Jurídica",
        "link": "https://www.medtecheurope.org/wp-content/uploads/2023/10/MedTech-Europe-QA-on-the-AI-Act.pdf",
        "description": "La guía legal fundamental que explica cómo se tiene que homologar un modelo de Inteligencia Artificial como Dispositivo Médico Clase IIa o superior en Europa."
      },
      {
        "name": "Microsoft Presidio (Anonimización)",
        "type": "Toolkit en Python",
        "link": "https://microsoft.github.io/presidio/",
        "description": "Aprende a usar expresiones regulares e IA local para tapar DNIs, direcciones y nombres de pacientes en texto libre antes de subirlos a la nube del modelo."
      }
    ]
  },
  {
    "id": "clinical-deployment",
    "title": "Despliegue Real en Producción",
    "description": "La diferencia entre un prototipo y algo que funciona en un hospital. Empaqueta y despliega tus modelos de IA.",
    "icon": "🚀",
    "topics": [
      {
        "id": "deploy-fastapi",
        "title": "APIs con FastAPI para Modelos de IA",
        "completed": false
      },
      {
        "id": "deploy-docker",
        "title": "Contenedores Docker para IA Clínica",
        "completed": false
      },
      {
        "id": "deploy-cicd",
        "title": "CI/CD para Modelos de IA – MLOps básico con GitHub Actions",
        "completed": false
      },
      {
        "id": "deploy-infra",
        "title": "On-Premise vs Cloud Híbrido en la Práctica Hospitalaria",
        "completed": false
      },
      {
        "id": "proj-deploy",
        "title": "💻 Proyecto: Desplegar el asistente médico como API en Docker accesible desde el navegador",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "FastAPI Crash Course",
        "type": "Curso FreeCodeCamp",
        "link": "https://www.youtube.com/watch?v=0sOvCWFmrtA",
        "description": "La forma en la que tu modelo cobra vida. Con FastAPI abres un 'puerto' para que cualquier aplicación o página web pueda consumirlo desde fuera."
      },
      {
        "name": "Docker en 1 Hora",
        "type": "Curso YouTube",
        "link": "https://www.youtube.com/watch?v=3c-iBn73dDE",
        "description": "Impregnarse de Docker es innegociable. Aprende a meter tu aplicación entera (Python + Base de Datos + IA) en una caja hermética que funciona en Mac, Windows y Linux."
      }
    ]
  },
  {
    "id": "live-news-radar",
    "title": "📡 Radar de Novedades (Live 2026+)",
    "description": "Mantente al día con los últimos descubrimientos, modelos y noticias de IA. Usa la lupa aquí para buscar la actualidad de esta misma semana.",
    "icon": "📰",
    "topics": [
      {
        "id": "news-llm",
        "title": "Últimos Modelos Fundacionales (OpenAI, Google, Anthropic)",
        "completed": false
      },
      {
        "id": "news-med",
        "title": "Novedades y Papers Recientes en IA Médica",
        "completed": false
      },
      {
        "id": "news-tools",
        "title": "Nuevas Herramientas y Frameworks de Desarrollo",
        "completed": false
      },
      {
        "id": "proj-news",
        "title": "💻 Proyecto: Configurar alertas automáticas (Custom RSS/n8n) para un nicho médico",
        "completed": false
      }
    ],
    "resources": [
      {
        "name": "Eric Topol - Ground Truths",
        "type": "Suscripción Imprescindible",
        "link": "https://erictopol.substack.com/",
        "description": "El cardiólogo y editor en jefe de Medscape condensa, disecciona y analiza las novedades hiperrealistas sobre IA y medicina cada semana. No hay analista mejor en el mundo."
      },
      {
        "name": "The Rundown AI",
        "type": "Boletín Diario",
        "link": "https://www.therundown.ai/",
        "description": "Si The New York Times hablara de IA. En sólo 3 minutos cada mañana tendrás resumen visual del ecosistema y los nuevos modelos presentados anoche."
      },
      {
        "name": "Hugging Face Daily Papers",
        "type": "Repositorio Científico Vivo",
        "link": "https://huggingface.co/papers",
        "description": "La manguera directa de las fuentes. Entrar aquí es ver los papers científicos literales votados por investigadores de DeepMind minutos después de publicarse."
      }
    ]
  }
];
