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
        "name": "Python for Beginners - Full Course",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/watch?v=eWRfhZUzrAc",
        "description": "Curso completo y gratuito de FreeCodeCamp (más de 40M de visitas) para aprender Python desde absoluto cero."
      },
      {
        "name": "Cursor IDE: Complete AI Developer Guide",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/results?search_query=cursor+ide+full+tutorial+course",
        "description": "Búsqueda directa de los mejores tutoriales en YouTube sobre cómo configurar Cursor para programar aplicaciones completas."
      },
      {
        "name": "Harvard CS50P: Introducción a Python",
        "type": "Curso Universitario (Gratis)",
        "link": "https://cs50.harvard.edu/python/",
        "description": "El estándar de oro mundial. Enseñado por David J. Malan, es la mejor forma gratuita de asentar bases sólidas de programación computacional para médicos."
      },
      {
        "name": "Cursor Directory",
        "type": "Directorio Público (Gratis)",
        "link": "https://cursor.directory/",
        "description": "Una biblioteca abierta de reglas de comportamiento (System Prompts) para configurar Cursor y que programe como un experto en React, Python o HL7."
      },
      {
        "name": "Pair Programming con un LLM",
        "type": "Curso DeepLearning.AI (Gratis)",
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
        "name": "n8n Crash Course for Beginners",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/watch?v=1_N9JcEw-4c",
        "description": "Guía visual rápida en YouTube sobre cómo conectar aplicaciones y automatizar tareas sin escribir código usando n8n."
      },
      {
        "name": "OpenAI Assistants API Masterclass",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/results?search_query=openai+assistants+api+tutorial+python",
        "description": "Tutoriales en vídeo para construir agentes médicos que pueden recordar conversaciones y usar herramientas externas."
      },
      {
        "name": "n8n Academy: Curso de Principiantes",
        "type": "Academia Oficial (Gratis)",
        "link": "https://academy.n8n.io/paths/beginners",
        "description": "Ruta paso a paso gratuita para aprender a construir nodos, conectar APIs en la nube e automatizar procesos que te ahorren horas a la semana."
      },
      {
        "name": "OpenAI Cookbook: Assistants",
        "type": "Recetario de Código (Gratis)",
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
        "name": "GPT-4 Vision & Audio API in Python",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/results?search_query=gpt4+vision+audio+api+python+tutorial",
        "description": "Aprende paso a paso en YouTube cómo enviar radiografías o notas de voz a los modelos de lenguaje a través de código."
      },
      {
        "name": "OpenAI Vision Cookbook",
        "type": "Recetario Práctico (Gratis)",
        "link": "https://cookbook.openai.com/examples/using_gpt4_vision_with_the_assistants_api",
        "description": "Tutorial gratuito sobre cómo adjuntarle radiografías o informes escaneados al modelo para que los interprete como si tuviera 'ojos'."
      },
      {
        "name": "Building Multimodal Apps",
        "type": "Curso DeepLearning.AI (Gratis)",
        "link": "https://www.deeplearning.ai/short-courses/building-multimodal-applications-with-gradio/",
        "description": "Crea interfaces web simples sin pagar un duro para subir imágenes médicas y notas de voz y conectarlas a modelos grandes."
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
        "name": "Let's build GPT: from scratch, in code",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/watch?v=kCc8FmEb1nY",
        "description": "La legendaria clase magistral de Andrej Karpathy (ex-director de IA en Tesla) construyendo un Transformer neuronal desde cero."
      },
      {
        "name": "LangChain & Vector Databases Full Course",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/watch?v=TRjq7t2Ms5I",
        "description": "Curso masivo de FreeCodeCamp (18 horas) enseñando paso a paso arquitectura RAG para conectar LLMs con documentos privados."
      },
      {
        "name": "Hugging Face NLP Course",
        "type": "Curso Magistral (Gratis)",
        "link": "https://huggingface.co/learn/nlp-course/",
        "description": "El curso más exhaustivo y pedagógico, totalmente gratuito, sobre cómo funcionan los modelos Transformer y cómo afinar modelos open-source."
      },
      {
        "name": "Mastering RAG con LlamaIndex",
        "type": "Guía Definitiva (Gratis)",
        "link": "https://docs.llamaindex.ai/en/stable/optimizing/production_rag/",
        "description": "El manual abierto para ingenieros sobre cómo hacer que RAG funcione en producción y no se invente información cuando busque entre mil PDFs médicos."
      },
      {
        "name": "DSPy Official Documentation",
        "type": "Framework Avanzado (Gratis)",
        "link": "https://dspy-docs.vercel.app/docs/intro",
        "description": "Tecnología abierta de Stanford: en lugar de escribir prompts a mano, programas reglas matemáticas para que el modelo se optimice a sí mismo."
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
        "name": "Synthetic Data Generation with Python",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/results?search_query=synthetic+data+generation+machine+learning+python",
        "description": "Charlas y tutoriales técnicos explicando cómo usar GANs y VAEs para generar pacientes ficticios por motivos de privacidad."
      },
      {
        "name": "Synthea: Pacientes Sintéticos (MIT)",
        "type": "Herramienta Open-Source (Gratis)",
        "link": "https://github.com/synthetichealth/synthea/wiki",
        "description": "El simulador libre estándar mundial usado para generar historias clínicas realistas pero totalmente falsas (EHR), libre de proteger de datos."
      },
      {
        "name": "Synthetic Data Vault (SDV)",
        "type": "Librería Python MIT (Gratis)",
        "link": "https://docs.sdv.dev/sdv",
        "description": "Inyecta datos reales de Cardiología a un algoritmo abierto para escupir gemelos sintéticos idénticos estadísticamente, pero 100% anónimos."
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
        "name": "AI in Healthcare (Stanford University)",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/watch?v=l_B-mD1h03M",
        "description": "Excelente material de Stanford Medicine sobre los retos reales de aplicar Machine Learning dentro de un hospital."
      },
      {
        "name": "AI for Medicine Course Overview",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/results?search_query=coursera+ai+for+medicine+specialization",
        "description": "Vídeos explicativos y lecciones sueltas sobre las matemáticas de diagnosticar con imágenes y análisis de supervivencia."
      },
      {
        "name": "Coursera: AI for Medicine",
        "type": "Auditoría de Curso (Gratis)",
        "link": "https://www.coursera.org/specializations/ai-for-medicine",
        "description": "Impartida por Pranav Rajpurkar (Harvard/Stanford). Puedes auditar los materiales gratis para aprender Inteligencia Artificial aplicada al diagnóstico clínico."
      },
      {
        "name": "NEJM AI",
        "type": "Revista Científica (Artículos Abiertos)",
        "link": "https://ai.nejm.org/",
        "description": "La edición de IA de The New England Journal of Medicine. Publican a menudo artículos en abierto sobre el impacto clínico de la IA."
      },
      {
        "name": "Google Health Research Papers",
        "type": "Publicaciones Clínicas (Gratis)",
        "link": "https://health.google/health-research/",
        "description": "La biblioteca pública de Google con todos sus hallazgos empíricos gratuitos de modelos como Med-PaLM interactuando con hospitales."
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
        "name": "Vector Databases Explained in 5 Minutes",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/watch?v=klTvEwg3oJ4",
        "description": "Un resumen visual espectacular de Pinecone explicando por qué la IA necesita almacenar datos en formato de vectores matemáticos."
      },
      {
        "name": "Pinecone Vector Center",
        "type": "Conceptos Fundamentales (Gratis)",
        "link": "https://www.pinecone.io/learn/",
        "description": "Material abierto para entender matemáticamente cómo un modelo de lenguaje traduce la palabra 'Glucosa' a un vector en el espacio."
      },
      {
        "name": "Unstructured.io Documentation",
        "type": "Librería de Ingesta (Open-Source)",
        "link": "https://unstructured-io.github.io/unstructured/",
        "description": "Transformar PDFs ilegibles médicos a texto puro. Esta librería open-source es magia pura y gratuita para tus proyectos."
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
        "name": "Andrew Ng: Agentic AI Workflows",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/watch?v=sal78ACtGTc",
        "description": "Charla imperdible del padre de la IA moderna explicando por qué cuatro agentes pequeños trabajando en equipo ganan a un LLM gigante."
      },
      {
        "name": "LangGraph Multi-Agent Workflows",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/results?search_query=langgraph+multi+agent+tutorial",
        "description": "Búsqueda con los mejores vídeos para aprender a programar sistemas donde agentes debaten entre sí antes de dar una respuesta."
      },
      {
        "name": "Building Effective Agents (Anthropic)",
        "type": "Paper de Arquitectura (Gratis)",
        "link": "https://www.anthropic.com/research/building-effective-agents",
        "description": "El manifiesto abierto de Anthropic explicando qué patrones arquitectónicos multi-agente funcionan de verdad, con ejemplos en código."
      },
      {
        "name": "LangGraph: Multi-Agent Tutorial",
        "type": "Tutorial Técnico (Gratis)",
        "link": "https://langchain-ai.github.io/langgraph/tutorials/multi_agent/multi-agent-collaboration/",
        "description": "Guía abierta sobre cómo programar un sistema donde un 'Agente Médico Consultor' y un 'Agente Farmacológico' dialogan entre ellos sin coste."
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
        "name": "Anthropic Claude Prompt Engineering",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/results?search_query=Anthropic+Claude+Prompt+Engineering+tutorial+xml+tags",
        "description": "Tutoriales en vídeo enseñando las técnicas avanzadas que usamos para controlar alucinaciones en modelos súper inteligentes."
      },
      {
        "name": "Model Context Protocol (MCP)",
        "type": "Estándar Oficial (Open-Source)",
        "link": "https://modelcontextprotocol.io/",
        "description": "Documentación libre de este protocolo que nos permite conectar modelos a bases de datos SQLite locales médicas de forma segura."
      },
      {
        "name": "Anthropic Prompt Engineering Tutorial",
        "type": "Repositorio Interactivo (Gratis)",
        "link": "https://github.com/anthropics/courses",
        "description": "Material abierto de los creadores de Claude para aprender a domar el modelo usando etiquetas <xml> y contexto infalible (vital en salud)."
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
        "name": "LLM Security & Prompt Injection Mitigation",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/results?search_query=LLM+Security+Prompt+Injection+defense",
        "description": "Charlas técnicas en YouTube sobre cómo un hacker o usuario puede engañar a un chat clínico y cómo defender tus sistemas usando la guía OWASP."
      },
      {
        "name": "OWASP Top 10 for LLMs",
        "type": "Seguridad Informática (Gratis)",
        "link": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        "description": "La guía de la fundación OWASP (totalmente pública) para evitar hackeos de 'Prompt Injection' en tus historiales médicos."
      },
      {
        "name": "LangSmith Evaluation Cookbook",
        "type": "Métricas de Control (Gratis)",
        "link": "https://docs.smith.langchain.com/evaluation",
        "description": "Manual abierto para implementar métricas. Si la IA contesta 1,000 preguntas de pacientes, ¿cómo auditas gratuitamente que no haya errores?"
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
        "name": "Explainable AI (SHAP & LIME) in Python",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/results?search_query=Explainable+AI+SHAP+Python+tutorial",
        "description": "Aprende gratis en vídeo a programar gráficos que explican visualmente a un médico por qué el modelo tomó una decisión."
      },
      {
        "name": "DECIDE-AI Guidelines (Nature)",
        "type": "Publicación de Referencia (Gratis)",
        "link": "https://www.nature.com/articles/s41591-022-01772-9",
        "description": "Directrices públicas de la Universidad de Oxford para hacer estudios clínicos validando que usar un modelo de IA es mejor que no usarlo."
      },
      {
        "name": "SHAP Python Library",
        "type": "Librería de Explicabilidad (Gratis)",
        "link": "https://shap.readthedocs.io/",
        "description": "Librería de código abierto para crear gráficos (gratis) que expliquen por qué el modelo tomó una decisión médica concreta."
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
        "name": "EU AI Act Explained for Tech Builders",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/results?search_query=EU+AI+Act+Explained+Healthcare+Artificial+Intelligence",
        "description": "Conferencias en YouTube resumiendo la ley europea de IA para saber qué necesitas si vas a instalar software en tu hospital."
      },
      {
        "name": "EU AI Act Compliance (MedTech)",
        "type": "Guía Jurídica (PDF Gratis)",
        "link": "https://www.medtecheurope.org/wp-content/uploads/2023/10/MedTech-Europe-QA-on-the-AI-Act.pdf",
        "description": "Documento público que explica cómo homologar un modelo de Inteligencia Artificial como Dispositivo Médico en Europa."
      },
      {
        "name": "Microsoft Presidio (Anonimización)",
        "type": "Toolkit en Python (Open-Source)",
        "link": "https://microsoft.github.io/presidio/",
        "description": "Herramienta gratuita de Microsoft para tapar DNIs, direcciones y nombres de pacientes en texto libre antes de la nube."
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
        "name": "FastAPI Course for Beginners",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/watch?v=0sOvCWFmrtA",
        "description": "Tutorial completo y directo de FreeCodeCamp para envolver tus modelos de Python en APIs accesibles por web."
      },
      {
        "name": "Docker Tutorial for Beginners",
        "type": "YouTube (Inglés)",
        "link": "https://www.youtube.com/watch?v=pTFZFxd4hOI",
        "description": "El famoso vídeo animado de TechWorld with Nana explicando en 1 hora cómo funciona Docker y cómo encapsular apps médicas."
      },
      {
        "name": "FastAPI Crash Course",
        "type": "Curso YouTube (Gratis)",
        "link": "https://www.youtube.com/watch?v=0sOvCWFmrtA",
        "description": "Aprende gratis a usar FastAPI en Python para abrir un 'puerto' que permita conectar tu IA a webs médicas."
      },
      {
        "name": "Docker en 1 Hora",
        "type": "Curso YouTube (Gratis)",
        "link": "https://www.youtube.com/watch?v=3c-iBn73dDE",
        "description": "Aprende gratis cómo meter tu aplicación entera (Python + Base de Datos + IA) en un contendor Docker universal."
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
        "name": "Two Minute Papers",
        "type": "Canal de YouTube (Inglés)",
        "link": "https://www.youtube.com/c/TwoMinutePapers",
        "description": "El canal divulgativo más alucinante (con millones de suscriptores) que expone en vídeos de 5 minutos las increíbles capacidades de los últimos papers científicos de IA."
      },
      {
        "name": "AI Explained",
        "type": "Canal de YouTube (Inglés)",
        "link": "https://www.youtube.com/c/AIExplained",
        "description": "Si sale un nuevo modelo hoy (ej. GPT-5), mañana este canal sube el análisis más exhaustivo, técnico e imparcial que vas a encontrar en video."
      },
      {
        "name": "Eric Topol - Ground Truths",
        "type": "Newsletter (Edición Gratis)",
        "link": "https://erictopol.substack.com/",
        "description": "El cardiólogo y editor en jefe de Medscape disecciona la IA médica. Su contenido público es el mejor análisis del mundo."
      },
      {
        "name": "The Rundown AI",
        "type": "Boletín Diario (Gratis)",
        "link": "https://www.therundown.ai/",
        "description": "Email gratuito cada mañana con el resumen visual del ecosistema y los nuevos modelos presentados anoche. Esencial para no quedarse atrás."
      },
      {
        "name": "Hugging Face Daily Papers",
        "type": "Repositorio Científico Vivo (Gratis)",
        "link": "https://huggingface.co/papers",
        "description": "La biblioteca abierta más grande del mundo. Mira gratis los papers científicos literales votados por investigadores de IA cada día."
      }
    ]
  }
];
