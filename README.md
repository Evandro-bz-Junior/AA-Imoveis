# 🏠 AA Imóveis - Plataforma Imobiliária

Uma plataforma imobiliária moderna e completa, desenvolvida com as melhores tecnologias do mercado. Oferece funcionalidades robustas para gerenciamento de propriedades, com interface intuitiva e integração direta com WhatsApp.

---

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Preview](#preview)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Autor](#autor)
- [Licença](#licença)

---

## 🎯 Visão Geral

A **AA Imóveis** é uma solução completa de gerenciamento imobiliário construída com Next.js e Supabase. Oferece aos administradores ferramentas poderosas para gerenciar propriedades, enquanto proporciona aos usuários uma experiência de navegação fluida e responsiva para encontrar seus imóveis ideais.

**Destaques:**
- ✅ Dashboard administrativo intuitivo
- ✅ CRUD completo de imóveis
- ✅ Upload múltiplo de imagens otimizado
- ✅ Sistema de autenticação
- ✅ Rotas protegidas com controle de acesso
- ✅ Integração com WhatsApp para contato direto
- ✅ Interface responsiva e moderna
- ✅ Carrossel de imagens interativo

---

## 🖼️ Preview

### Página Inicial
![Home](/public/images/preview-home.png)

### Dashboard Administrativo
![Admin Dashboard](/public/images/preview-dashboard.png)

### Detalhes do Imóvel
![Property Details](/public/images/preview-property.png)

### Upload de Imagens
![Image Upload](/public/images/preview-upload.png)

---

## 🛠️ Tecnologias

<div align="start">

| Categoria | Tecnologia | Versão |
|-----------|-----------|---------|
| **Framework** | Next.js | 16.1.6 |
| **Linguagem** | TypeScript | 5.x |
| **Frontend** | React | 19.2.3 |
| **Estilo** | Tailwind CSS | 4.x |
| **Backend** | Supabase | 2.105.3 |
| **Banco de Dados** | PostgreSQL | (via Supabase) |
| **Storage** | Supabase Storage | - |
| **Autenticação** | Supabase Auth | - |
| **Carrossel** | Swiper | 12.1.4 |
| **Componentes** | shadcn/ui | - |
| **Ícones** | Lucide React | 1.8.0 |

</div>

---

## ⚡ Funcionalidades

### Para Usuários
- 📱 Visualização responsiva em todos os dispositivos
- 🖼️ Galeria interativa com carrossel de imagens
- 📞 Integração com WhatsApp para contato direto
- 💬 Informações detalhadas de cada propriedade

### Para Administradores
- 🔐 Autenticação segura com Supabase Auth
- 📊 Dashboard administrativo
- ➕ Criar novos imóveis
- ✏️ Editar informações de propriedades
- 🗑️ Deletar imóveis
- 📸 Upload múltiplo de imagens com validação
- 🔒 Rotas protegidas com verificação de sessão
- 📈 Visualização de todas as propriedades cadastradas

---

## 📁 Estrutura do Projeto

```
aa-imoveis/
├── public/                          # Assets públicos
│   └── images/                     # Imagens do projeto
│
├── src/
│   ├── app/                        # Estrutura de rotas Next.js
│   │   ├── layout.tsx              # Layout principal
│   │   ├── page.tsx                # Página inicial
│   │   ├── globals.css             # Estilos globais
│   │   │
│   │   ├── admin/                  # Rotas administrativas (protegidas)
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx        # Dashboard principal
│   │   │   ├── login/
│   │   │   │   └── page.tsx        # Página de login
│   │   │   ├── new-property/
│   │   │   │   └── page.tsx        # Criar novo imóvel
│   │   │   └── edit-property/
│   │   │       └── [id]/
│   │   │           └── page.tsx    # Editar imóvel
│   │   │
│   │   └── propertys/              # Rotas públicas de imóveis
│   │       └── [id]/
│   │           └── page.tsx        # Detalhes do imóvel
│   │
│   ├── components/                 # Componentes React reutilizáveis
│   │   ├── PropertyCarousel.tsx    # Carrossel de imagens
│   │   │
│   │   ├── admin/
│   │   │   └── UploadImages.tsx    # Componente de upload
│   │   │
│   │   ├── home/
│   │   │   ├── About.tsx           # Seção sobre
│   │   │   ├── Contact.tsx         # Seção de contato
│   │   │   ├── Hero.tsx            # Hero section
│   │   │   ├── Properties.tsx      # Listagem de imóveis
│   │   │   └── PropertyCard.tsx    # Card de imóvel
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Cabeçalho da aplicação
│   │   │   └── Footer.tsx          # Rodapé da aplicação
│   │   │
│   │   └── ui/                     # Componentes UI base (shadcn)
│   │       ├── button.tsx
│   │       └── sheet.tsx
│   │
│   ├── data/
│   │   └── properties.ts           # Dados mock/seed de imóveis
│   │
│   ├── lib/                        # Utilidades e funções auxiliares
│   │   ├── api.ts                  # Chamadas à API Supabase
│   │   ├── supabase.ts             # Configuração do Supabase
│   │   ├── storage.ts              # Gerenciamento de storage
│   │   ├── deleteProperty.ts       # Lógica de deleção
│   │   └── utils.ts                # Utilitários gerais
│   │
│   └── types/
│       └── property.ts             # Tipos TypeScript
│
├── .env.example                    # Variáveis de ambiente (exemplo)
├── components.json                 # Configuração shadcn/ui
├── eslint.config.mjs               # Configuração ESLint
├── tailwind.config.ts              # Configuração Tailwind CSS
├── tsconfig.json                   # Configuração TypeScript
├── next.config.ts                  # Configuração Next.js
├── postcss.config.mjs              # Configuração PostCSS
├── package.json                    # Dependências e scripts
└── README.md                       # Este arquivo
```

---

### Estrutura de Rotas

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/` | Pública | Página inicial |
| `/propertys/[id]` | Pública | Detalhes do imóvel |
| `/admin/login` | Pública | Login administrativo |
| `/admin/dashboard` | Protegida | Dashboard principal |
| `/admin/new-property` | Protegida | Criar imóvel |
| `/admin/edit-property/[id]` | Protegida | Editar imóvel |

---

## 📸 Demonstração Online

Acesse a aplicação em funcionamento:

🔗 [aa-imoveis.vercel.app](https://aa-imoveis.vercel.app)

---

## 👨‍💻 Autor

**Evandro Junior**
- GitHub: [@Evandro-bz-Junior](https://github.com/Evandro-bz-Junior)
---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---

<div align="center">

**[⬆ Voltar ao topo](#-aa-imóveis---plataforma-imobiliária)**

Desenvolvido com ❤️ por Evandro Junior

</div>
