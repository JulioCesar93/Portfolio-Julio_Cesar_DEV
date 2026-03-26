import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { AWS } from "@/components/ui/svgs/aws";
// import { Angular } from "@/components/ui/svgs/angular";
import { Acronis } from "@/components/ui/svgs/acronis";
import { JavaScript } from "@/components/ui/svgs/javaScript";
import { Jira } from "@/components/ui/svgs/jira";
import { OpenStack } from "@/components/ui/svgs/openStack";
import { Zabbix } from "@/components/ui/svgs/zabbix";
import { SpringBoot } from "@/components/ui/svgs/springBoot";

export const DATA = {
  name: "Júlio César",
  initials: "JC",
  location: "Uberlândia/MG, Brasil 🇧🇷",
  locationLink: "https://www.google.com/maps/place/Uberlândia,+MG",
  description:
    "Desenvolvedor Full Stack, com experiência em projetos corporativos, focado em aprendizado contínuo e colaboração em soluções tecnológicas.",
  summary:
    "Experiência em Infraestrutura, Suporte de TI e Desenvolvimento de Software, com foco em eficiência, resolução de problemas e colaboração em projetos corporativos.",
  url: "https://JulioCesar93/Portfolio-Julio_Cesar_DEV",
  avatarUrl: "/me.png",

  skills: [
    { name: "Java", icon: Java },
    { name: "Spring Boot", icon: SpringBoot },
    { name: "AWS", icon: AWS },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Acronis", icon: Acronis },
    { name: "OpenStack", icon: OpenStack },
    { name: "JavaScript", icon: JavaScript },
    { name: "Typescript", icon: Typescript },
    // { name: "Angular", icon: Angular },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Jira", icon: Jira },
    { name: "Zabbix", icon: Zabbix },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  contact: {
    email: "cjjulio7@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JulioCesar93",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/juliocesar1993/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
     {
  company: "Algar Telecom",
  href: "https://algartelecom.com.br/",
  badges: [],
  location: "https://www.google.com/maps/place/Uberlândia,+MG",
  title: "Analista de Suporte e Desenvolvimento",
  logoUrl:
    "https://iconlogovector.com/uploads/images/2024/08/lg-66c92073b0ccf-Algar-Telecom.webp",
  start: "Novembro 2024",
  end: "Presente",
  description: `
- Colaboração no desenvolvimento e implantação de projetos corporativos internos;
- Atuação em ambiente crítico de Data Center com foco em alta disponibilidade;
- Administração de servidores Windows e Linux (AD, DNS, GPO, File Server);
- Monitoramento e análise de performance do ambiente Data Center e aplicações com Zabbix;
- Tratativa de incidentes garantindo SLA e continuidade dos serviços;
- Integração com times de backup, banco de dados, redes e segurança.
`,
},

    {
      company: "Martins Atacadista",
      href: "https://www.martinsatacado.com.br/",
      badges: [],
      location: "https://www.google.com/maps/place/Uberlândia,+MG",
      title: "Analista HelpDesk II",
      logoUrl:
        "https://martinsdistribuidor.com.br/wp-content/uploads/2025/07/cropped-Martins-PNG-768x569.png",
      start: "January 2021",
      end: "April 2021",
      description: `
  - Suporte a sistemas corporativos, dispositivos e aplicações empresariais;
  - Colaboração com equipes de infraestrutura, redes e segurança para resolução de incidentes;
  - Suporte remoto a usuários, análise de problemas, demandas operacionais e gestão de chamados com foco em SLA;
  - Participação em projetos de melhoria contínua e implantação de soluções tecnológicas.`,
    },

    {
      company: "Algar Tech",
      href: "https://algartech.com",
      badges: [],
      location: "https://www.google.com/maps/place/Uberlândia,+MG",
      title: "Analista de Suporte de TI",
      logoUrl: "https://algartech.com/wp-content/uploads/2023/08/logo.svg",
      start: "Julho/2019",
      end: "Junho/2023",
      description: `
  - Atendimento técnico em Field Service e suporte remoto;
  - Configuração de redes, sistemas operacionais e equipamentos;
  - Suporte a infraestrutura e ambientes corporativos;
  - Participação em projetos de melhoria contínua e implantação de soluções tecnológicas.`,
    },
  ],

  education: [
    {
      school: "Faculdade Unopar",
      href: "https://www.unopar.com.br/",
      degree:
        "Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas",
      logoUrl:
        "https://portalinstitucional-assets.azureedge.net/strapi/assets/unopar_8f493bde5b.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "Faculdade Unipac Uberlândia",
      href: "https://unipacuberlandia.com.br/",
      degree: "Curso Superior de Tecnologia em Logística",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRVCf2iOmrlE5tpyGlpoc_qWDVwH2y9Ce1zg&s",
      start: "2016",
      end: "2018",
    },
  ],
  // ------------------------------------ 01
  projects: [
    {
      title: "Controle Data Center - Ativos",
      href: "https://SUBIR **",
      dates: "Março 2025 - Presente",
      active: true,
      description:
        "O Data Center Control é um projeto desenvolvido com a linguagem Java e ecossistema Spring para gestão de ativos em Data Center, permitindo o controle organizado de clientes, equipamentos, localizações físicas (rack, fila, bastidor, nível) e tickets operacionais.",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Maven",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://SUBIR **",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fonts/images/datacenter.png", 
      video: null,
    },
    // ------------------------------------ 02
    {
      title: "Service Desk - Tickets",
      href: "https://SUBIR **",
      dates: "Verificar DATA Inicio-Fim",
      active: true,
      description:
        "Aplicação que tem como função de realizar o controle de Registros de Ocorrências de acordo com perfis de associados e analistas a partir de realização das respectivas ocorrências..",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Maven",
      ],
      links: [
        {
          type: "Website",
          href: "https://SUBIR **",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fonts/images/serviceDesk-Logo.png", 
      video: null,
    },
    // ------------------------------------ 03
    {
      title: "Car Wash - Controle de Lavagens",
      href: "https://SUBIR **",
      dates: "Março 2025 - Presente",
      active: true,
      description:
        "Aplicação que tem como função de realizar o controle de lavagens de carros, permitindo o gerenciamento de clientes, serviços, equipamentos e registros operacionais.",

      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Maven",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://SUBIR **",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fonts/images/car-wash-control.png", 
      video: null,
    },
    // ------------------------------------ 04
    {
      title: "Agendador de Tarefas",
      href: "https://SUBIR **",
      dates: "Março 2025 - Presente",
      active: true,
      description:
        "Aplicação que tem como função de realizar o agendamento de tarefas periódicas, permitindo a execução automática de processos programados no sistema.",

      technologies: [
        "Java",
        "Spring Boot",
        "Maven",
        
        
      ],
      links: [
        {
          type: "Website",
          href: "https://SUBIR **",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fonts/images/agenda-tarefas.png", 
      video: null,
    },
    
  ],
} as const;