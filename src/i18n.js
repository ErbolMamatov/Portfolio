import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      common: {
        back: "Назад",
      },

      nav: {
        exp: "ОПЫТ",
        proj: "ПРОЕКТЫ",
        cont: "КОНТАКТ",
      },

      home: {
        titleMain: "Junior Frontend",
        titleAccent: "Developer (React).",
        description:
          "Разрабатываю современные SPA-приложения на React, создаю адаптивные интерфейсы и интегрирую REST API через Axios. Есть опыт командной разработки с использованием Git Flow и участия в code review.",
      },

      projects: {
        titleMain: "Мои",
        titleAccent: "проекты",
        items: {
          restaurant: {
            title: "Restaurant Website (React + API)",
            desc: "React SPA с интеграцией REST API, динамической загрузкой данных и адаптивным интерфейсом для мобильных устройств и десктопа.",
          },
          sneaker: {
            title: "Sneaker Store",
            desc: "React-проект магазина кроссовок с красивым современным интерфейсом, сильной визуальной подачей и акцентом на стиль. Десктоп-версия без адаптивной вёрстки.",
          },
        },
      },

      experience: {
        titleMain: "Опыт",
        titleAccent: "и путь",
        intro: {
          beforeReact: "Я junior frontend developer, сосредоточенный на",
          afterReactBeforeApi:
            "и современном UI. Я создаю адаптивные интерфейсы, интегрирую",
          afterApiBeforeAxios: "через",
          afterAxiosBeforeGit:
            ", а также поддерживаю чистую структуру проектов и читаемый код. Также у меня есть опыт командной работы с использованием",
          afterGit: "и участия в code review.",
        },
        highlights: {
          label: "НАПРАВЛЕНИЕ",
          items: {
            frontend: {
              title: "Frontend Focus",
              text: "React SPA, роутинг, компонентная архитектура и внимание к UI/UX.",
            },
            api: {
              title: "API & Data",
              text: "Интеграция REST API через Axios и управление состоянием с Redux Toolkit.",
            },
            team: {
              title: "Team Workflow",
              text: "Работа в команде по Git Flow и участие в code review.",
            },
          },
        },
        timeline: {
          foundation: {
            title: "Основа — HTML/CSS",
            text: "Сформировал хорошую базу в семантической разметке, работе с layout (Flex/Grid), адаптивной вёрстке и чистой структуре UI. Научился точно воспроизводить дизайн и поддерживать единый стиль.",
          },
          javascript: {
            title: "JavaScript — логика и интерактивность",
            text: "Практиковал основы JavaScript, DOM, события и логику интерактивного UI. Делал акцент на читаемом коде и понимании того, как меняется состояние интерфейса в реальных приложениях.",
          },
          react: {
            title: "React — SPA и современный стек",
            text: "Работаю с React: компонентная архитектура, роутинг (React Router), стилизация через TailwindCSS, анимации с Framer Motion и интеграция API через Axios. Для управления состоянием использую Redux Toolkit.",
          },
          team: {
            title: "Командная практика — Git Flow и review",
            text: "Есть опыт работы в командной среде: стратегия ветвления Git Flow, аккуратные коммиты и обсуждение изменений через code review. Комфортно работаю по Figma и стараюсь сохранять визуальную консистентность интерфейса.",
          },
        },
        skills: {
          title: "Инструменты и фокус",
          items: {
            html: "HTML · семантическая структура",
            css: "CSS · layout и адаптивный UI",
            js: "JavaScript · логика и интерактивность",
            react: "React · SPA и компоненты",
            tailwind: "Tailwind · масштабируемый UI",
            github: "Git/GitHub · Git Flow и review",
          },
        },
      },

      contact: {
        titleMain: "Давай",
        titleAccent: "свяжемся",
        description:
          "Открыт к новым возможностям, frontend-проектам, стажировкам и сотрудничеству. Если вам нужен junior frontend developer с хорошей базой в React и вниманием к UI — буду рад пообщаться.",
        cta: {
          primary: "НАПИСАТЬ В TELEGRAM",
          secondary: "ПОСМОТРЕТЬ GITHUB",
        },
        cards: {
          telegram: {
            title: "TELEGRAM",
          },
          instagram: {
            title: "INSTAGRAM",
          },
          github: {
            title: "GITHUB",
          },
        },
        availability: {
          title: "Открыт к новым возможностям",
          text: "Готов обсуждать стажировку, junior-позиции, pet-проекты и коллаборации. Быстро отвечаю, внимательно отношусь к деталям и стремлюсь расти как frontend developer.",
        },
        footerLine: "Frontend Developer",
      },

      footer: {
        description:
          "Junior Frontend Developer (React) · SPA · REST API · Responsive UI · Git Flow",
        home: "HOME",
        experience: "EXPERIENCE",
        projects: "PROJECTS",
        contact: "CONTACT",
      },
    },
  },

  en: {
    translation: {
      common: {
        back: "Back",
      },

      nav: {
        exp: "EXP",
        proj: "PROJECTS",
        cont: "CONTACT",
      },

      home: {
        titleMain: "Junior Frontend",
        titleAccent: "Developer (React).",
        description:
          "I build modern React SPAs, create responsive user interfaces, and integrate REST APIs using Axios. I also have experience working in teams with Git Flow and participating in code reviews.",
      },

      projects: {
        titleMain: "My",
        titleAccent: "Projects",
        items: {
          restaurant: {
            title: "Restaurant Website (React + API)",
            desc: "React SPA with REST API integration, dynamic data loading, and a responsive interface for mobile and desktop.",
          },
          sneaker: {
            title: "Sneaker Store",
            desc: "A React sneaker store project with modern visual style, strong product presentation, and clean UI. Desktop-focused version without responsive layout.",
          },
        },
      },

      experience: {
        titleMain: "Experience",
        titleAccent: "& Path",
        intro: {
          beforeReact: "I’m a junior frontend developer focused on",
          afterReactBeforeApi:
            "and modern UI. I build responsive interfaces, integrate",
          afterApiBeforeAxios: "with",
          afterAxiosBeforeGit:
            ", and keep projects clean with structured components and readable code. I also have experience working in a team using",
          afterGit: "and participating in code review.",
        },
        highlights: {
          label: "HIGHLIGHT",
          items: {
            frontend: {
              title: "Frontend Focus",
              text: "React SPA, routing, component architecture, and attention to UI/UX.",
            },
            api: {
              title: "API & Data",
              text: "REST API integration with Axios and state management using Redux Toolkit.",
            },
            team: {
              title: "Team Workflow",
              text: "Team collaboration with Git Flow and participation in code reviews.",
            },
          },
        },
        timeline: {
          foundation: {
            title: "Foundation — HTML/CSS",
            text: "Built a strong base in semantic markup, layout systems (Flex/Grid), responsive design, and clean UI structure. Learned to reproduce designs accurately and maintain consistency.",
          },
          javascript: {
            title: "JavaScript — Logic & Interaction",
            text: "Practiced JavaScript fundamentals, DOM, events, and interactive UI logic. Focused on readable code and understanding how interface state changes in real applications.",
          },
          react: {
            title: "React — SPA & Modern Stack",
            text: "Working with React: component architecture, routing (React Router), styling with TailwindCSS, animations with Framer Motion, and API integration with Axios. I use Redux Toolkit for state management.",
          },
          team: {
            title: "Team Practice — Git Flow & Review",
            text: "Experience working in a team environment: Git Flow branching strategy, clean commits, and discussing changes through code review. Comfortable working from Figma and keeping UI consistent.",
          },
        },
        skills: {
          title: "Tools & Focus",
          items: {
            html: "HTML · semantic structure",
            css: "CSS · layout & responsive UI",
            js: "JavaScript · logic & interaction",
            react: "React · SPA & components",
            tailwind: "Tailwind · scalable UI",
            github: "Git/GitHub · Git Flow & review",
          },
        },
      },

      contact: {
        titleMain: "Let’s",
        titleAccent: "connect",
        description:
          "I’m open to new opportunities, frontend projects, internships, and collaborations. If you’re looking for a junior frontend developer with a solid React foundation and a strong eye for UI, I’d be glad to connect.",
        cta: {
          primary: "WRITE IN TELEGRAM",
          secondary: "VIEW GITHUB",
        },
        cards: {
          telegram: {
            title: "TELEGRAM",
          },
          instagram: {
            title: "INSTAGRAM",
          },
          github: {
            title: "GITHUB",
          },
        },
        availability: {
          title: "Available for new opportunities",
          text: "Open to internships, junior roles, pet projects, and collaborations. I reply quickly, pay attention to detail, and aim to grow as a frontend developer.",
        },
        footerLine: "Frontend Developer",
      },

      footer: {
        description:
          "Junior Frontend Developer (React) · SPA · REST API · Responsive UI · Git Flow",
        home: "HOME",
        experience: "EXPERIENCE",
        projects: "PROJECTS",
        contact: "CONTACT",
      },
    },
  },

  ky: {
    translation: {
      common: {
        back: "Артка",
      },

      nav: {
        exp: "ТАЖРЫЙБА",
        proj: "ДОЛБООРЛОР",
        cont: "БАЙЛАНЫШ",
      },

      home: {
        titleMain: "Junior Frontend",
        titleAccent: "Developer (React).",
        description:
          "React негизинде заманбап SPA тиркемелерди иштеп чыгам, адаптив интерфейстерди түзөм жана REST API'ни Axios аркылуу туташтырам. Git Flow колдонулган командалык иш тажрыйбам жана code review'га катышуу тажрыйбам бар.",
      },

      projects: {
        titleMain: "Менин",
        titleAccent: "долбоорлорум",
        items: {
          restaurant: {
            title: "Restaurant Website (React + API)",
            desc: "React SPA, REST API интеграциясы, динамикалык маалымат жүктөө жана мобилдик менен десктоп үчүн адаптив интерфейс.",
          },
          sneaker: {
            title: "Sneaker Store",
            desc: "React негизиндеги sneaker store долбоору заманбап визуалдык стиль, күчтүү product presentation жана таза UI менен. Адаптивсиз десктоп версия.",
          },
        },
      },

      experience: {
        titleMain: "Тажрыйба",
        titleAccent: "жана жол",
        intro: {
          beforeReact: "Мен",
          afterReactBeforeApi:
            "жана заманбап UI'га багытталган junior frontend developer'мин. Мен адаптив интерфейстерди курам жана",
          afterApiBeforeAxios: "ни",
          afterAxiosBeforeGit:
            "аркылуу туташтырам. Ошондой эле проекттерде таза структураны жана окулушу жакшы кодду сактайм. Командада",
          afterGit: "менен иштөө жана code review боюнча тажрыйбам бар.",
        },
        highlights: {
          label: "БАГЫТ",
          items: {
            frontend: {
              title: "Frontend Focus",
              text: "React SPA, routing, компонент архитектурасы жана UI/UX'ка көңүл буруу.",
            },
            api: {
              title: "API & Data",
              text: "Axios аркылуу REST API интеграциясы жана Redux Toolkit менен state management.",
            },
            team: {
              title: "Team Workflow",
              text: "Git Flow менен командалык иш жана code review'га катышуу.",
            },
          },
        },
        timeline: {
          foundation: {
            title: "Негиз — HTML/CSS",
            text: "Семантикалык markup, layout системалары (Flex/Grid), адаптив дизайн жана таза UI структурасы боюнча бекем база түздүм. Дизайнды так берүү жана стилдик бирдейликти сактоо көндүмүн өнүктүрдүм.",
          },
          javascript: {
            title: "JavaScript — Логика жана интерактивдүүлүк",
            text: "JavaScript негиздерин, DOM, events жана интерактивдүү UI логикасын практикаладым. Окулушу жеңил кодго жана интерфейс абалынын өзгөрүшүн түшүнүүгө көңүл бурдум.",
          },
          react: {
            title: "React — SPA жана заманбап стек",
            text: "React менен иштейм: компонент архитектурасы, routing (React Router), TailwindCSS менен стилдөө, Framer Motion анимациялары жана Axios аркылуу API интеграциясы. State management үчүн Redux Toolkit колдоном.",
          },
          team: {
            title: "Командалык практика — Git Flow жана review",
            text: "Командада иштөө тажрыйбам бар: Git Flow branch стратегиясы, таза commit'тер жана code review аркылуу өзгөртүүлөрдү талкуулоо. Figma менен иштөөгө жана UI'ды бирдей кармоого көнүккөм.",
          },
        },
        skills: {
          title: "Инструменттер жана фокус",
          items: {
            html: "HTML · семантикалык структура",
            css: "CSS · layout жана адаптив UI",
            js: "JavaScript · логика жана интерактивдүүлүк",
            react: "React · SPA жана компоненттер",
            tailwind: "Tailwind · масштабдуу UI",
            github: "Git/GitHub · Git Flow жана review",
          },
        },
      },

      contact: {
        titleMain: "Келиңиз",
        titleAccent: "байланышалы",
        description:
          "Жаңы мүмкүнчүлүктөргө, frontend-долбоорлорго, стажировкаларга жана кызматташууга ачыкмын. Эгер сизге React боюнча жакшы базасы бар жана UI'га көңүл бурган junior frontend developer керек болсо — байланышууга кубанычтамын.",
        cta: {
          primary: "TELEGRAM'ГА ЖАЗУУ",
          secondary: "GITHUB КӨРҮҮ",
        },
        cards: {
          telegram: {
            title: "TELEGRAM",
          },
          instagram: {
            title: "INSTAGRAM",
          },
          github: {
            title: "GITHUB",
          },
        },
        availability: {
          title: "Жаңы мүмкүнчүлүктөргө ачыкмын",
          text: "Стажировка, junior-позициялар, pet-долбоорлор жана коллаборациялар боюнча сүйлөшүүгө даярмын. Тез жооп берем, деталдарга көңүл бурам жана frontend developer катары өсүүгө умтулам.",
        },
        footerLine: "Frontend Developer",
      },

      footer: {
        description:
          "Junior Frontend Developer (React) · SPA · REST API · Responsive UI · Git Flow",
        home: "HOME",
        experience: "EXPERIENCE",
        projects: "PROJECTS",
        contact: "CONTACT",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;