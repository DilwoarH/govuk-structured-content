# GOVUK Structured Content Generator

GOVUK structured content generator is a serverless function that takes any govuk content and makes it structured. 


## Examples

### Benefits Calculators page

FROM https://www.gov.uk/benefits-calculators

URL https://govuk-structured-content.netlify.app/.netlify/functions/structured-content?path=/benefits-calculators

RESULT
```json
[
  {
    "heading": "Benefits calculators",
    "content": [
      "Use an independent benefits calculator to find out:",
      [
        "what benefits you could get",
        "how to claim",
        "how your benefits will be affected if you start work"
      ],
      "These are free to use, anonymous, and have replaced the Benefits Adviser service."
    ]
  },
  {
    "heading": "Calculators",
    "content": [
      "Use one of the following:",
      [
        "Policy in Practice - for information on income-related benefits, tax credits, contribution-based benefits, Council Tax Reduction, Carer's Allowance, Universal Credit, how these are calculated and how your benefits will be affected if you start work or change your working hours",
        "entitledto - for information on income-related benefits, tax credits, contribution-based benefits, Council Tax Reduction, Carer's Allowance, Universal Credit and how your benefits will be affected if you start work",
        "Turn2us - for information on income-related benefits, tax credits, Council Tax Reduction, Carer's Allowance, Universal Credit and how your benefits will be affected if you start work or change your working hours"
      ]
    ]
  },
  {
    "heading": "What you'll need",
    "content": [
      "You'll need accurate information about your:",
      [
        "savings",
        "income, including your partner's (from payslips, for example)",
        "existing benefits and pensions (including anyone living with you)",
        "outgoings (such as rent, mortgage, childcare payments)",
        "council tax bill"
      ]
    ]
  },
  {
    "heading": "Who cannot use them",
    "content": [
      "You cannot use the calculators if you're under 18, and they will not give accurate results if you're:",
      [
        "a prisoner",
        "a student",
        "not a British or Irish citizen",
        "on strike",
        "living outside the UK",
        "living permanently in residential care or a nursing home"
      ]
    ]
  }
]
```

### DDAT Software developers page

FROM https://www.gov.uk/guidance/software-developer

URL https://govuk-structured-content.netlify.app/.netlify/functions/structured-content?path=/guidance/software-developer

Result
```json

[
  {
    "heading": "Software developer",
    "content": [
      [
        {
          "heading": "Software developer",
          "content": [
            "This describes the role of a software developer and the skills required, including:",
            [
              "an introduction to the role, telling you what you would do in this role and the full list of skills",
              "a description of the levels in this role, from apprentice developer to principal developer, specifying the skills you need for each level and the corresponding skill level (awareness, working, practitioner, expert)"
            ],
            "This role is part of the Digital, Data and Technology Profession in the Civil Service."
          ]
        },
        {
          "heading": "Introduction to the role of software developer",
          "content": [
            "A software developer designs, runs and improves software that meets user needs. In this role, you will:",
            [
              "be responsible for writing clean, secure code following a test-driven approach",
              "create code that is open by default and easy for others to reuse"
            ]
          ]
        },
        {
          "heading": "Skills required to be a software developer",
          "content": [
            "You will need the following skills for this role, although the level of expertise for each will vary, depending on the role level.",
            [
              "Availability and capacity management. You can define, analyse, plan, forecast, measure, maintain and improve all aspects of the availability of services, including power. You control and manage service availability to meet the needs of the business in a cost-effective manner. This includes managing the capability, functionality and sustainability of service components (for example, hardware, software, network resources and software/infrastructure as a service).",
              "Information security. You maintain the security, confidentiality and integrity of information systems through compliance with relevant legislation and regulations. You design, implement and operate controls and management strategies to allow this.",
              "Modern standards approach. You use a modern standards approach throughout automation and testing.",
              "Programming and build (software engineering). You can use agreed security standards and specifications to design, create, test and document new or amended software.",
              "Prototyping. You can apply technical knowledge and experience to create or design workable prototypes, both programs and physical outputs. You understand parameters, restrictions and synergies.",
              "Service support. You can maintain and support services.",
              "User focus. You understand users and can identify who they are and what their needs are, based on evidence. You can translate user stories and propose design approaches or services to meet these needs and engage in meaningful interactions and relationships with users. You put users first. You can manage competing priorities."
            ]
          ]
        },
        {
          "heading": "Apprentice developer",
          "content": [
            "An apprentice developer attends certified training and develops skills on the job. In this role, you will:",
            [
              "spend a substantial portion of time shadowing others",
              "work with other developers to write code and tests",
              "build your own knowledge",
              "follow a test-driven approach",
              "write code that is automatically tested"
            ]
          ]
        },
        {
          "heading": "Skills needed for this role",
          "content": [
            [
              "Availability and capacity management. You can describe availability and capacity management processes. (Relevant skill level: awareness)",
              "Information security. You are aware of information security and the security controls that can be used to mitigate security threats within solutions and services. (Relevant skill level: awareness)",
              "Modern standards approach. You can explain the importance of adopting a modern standards approach. (Relevant skill level: awareness)",
              "Programming and build (software engineering). You can design, code, test, correct and document simple programs or scripts under the direction of others. (Relevant skill level: working)",
              "Prototyping. You can explain what prototyping is and why and when to use it. You have an understanding of how to work in an open and collaborative environment- for example, by pair-working. (Relevant skill level: awareness)",
              "Service support. You can assist in the investigation and resolution of infrastructure problems, undertaking specific activities under the direction of others. (Relevant skill level: awareness)",
              "User focus. You know about user experience analysis and its principles. You can explain the purpose of user stories and focus on user needs. (Relevant skill level: awareness)"
            ]
          ]
        },
        {
          "heading": "Junior developer",
          "content": [
            "A junior developer learns on the job by delivering software components. At this level, you will:",
            [
              "develop skills while working under supervision to deliver stories in a multidisciplinary team",
              "understand and be proficient in different types of testing",
              "be aware of but not responsible for security",
              "coach and mentor more junior colleagues"
            ]
          ]
        },
        {
          "heading": "Skills needed for this role",
          "content": [
            [
              "Availability and capacity management. You know about availability and capacity management processes. (Relevant skill level: awareness)",
              "Information security. You understand information security and the types of security controls that can be used to mitigate security threats within solutions and services. (Relevant skill level: working)",
              "Modern standards approach. You understand the central principles of modern standards approach and how they apply to the work you are undertaking. You will be able to apply them under guidance. (Relevant skill level: working)",
              "Programming and build (software engineering). You can design, code, test, correct and document simple programs or scripts under the direction of others. (Relevant skill level: working)",
              "Prototyping. You will know when to use a specific prototyping technique or method (for example, sketch, code, Loc2). You can show the value of prototyping to your team. (Relevant skill level: working)",
              "Service support. You can help fix faults following agreed procedures. You can carry out agreed infrastructure maintenance tasks. (Relevant skill level: working)",
              "Systems design. You can assist as part of a team on design of components of larger systems. (Relevant skill level: awareness)",
              "Systems integration. You can talk about the process of integrating systems and the challenges of designing, building and testing interfaces between systems. (Relevant skill level: awareness)",
              "User focus. You know about user experience analysis and its principles. You can explain the purpose of user stories and the focus on user needs. (Relevant skill level: awareness)"
            ]
          ]
        },
        {
          "heading": "Developer",
          "content": [
            "A developer delivers software components that form part of a product. In this role, you will:",
            [
              "develop software to meet user needs",
              "follow best-practice guidelines and help to improve those guidelines",
              "write clean, secure and well-tested code",
              "coach and mentor more junior colleagues",
              "operate the services they build and identify issues in production"
            ]
          ]
        },
        {
          "heading": "Skills needed for this role",
          "content": [
            [
              "Availability and capacity management. You can manage the service components to ensure they meet business needs and performance targets. (Relevant skill level: working)",
              "Development process optimisation. You can explain the importance of developing process efficiency and the common ways in which processes are optimised. You can support specific activities to improve development processes. You can spot or identify obvious deficiencies. (Relevant skill level: awareness)",
              "Information security. You can discuss information security. You can design solutions and services with security controls embedded, specifically engineered as mitigation against security threats as a core part of the solutions and services. (Relevant skill level: practitioner)",
              "Modern standards approach. You can competently use a modern standards approach and guide others in so doing. (Relevant skill level: practitioner)",
              "Programming and build (software engineering). You collaborate with others when necessary to review specifications and use these agreed specifications to design, code, test and document programs or scripts of medium to high complexity, using the right standards and tools. (Relevant skill level: practitioner)",
              "Prototyping. You see prototyping as a team activity, actively soliciting prototypes and testing with others. You establish design patterns and iterate them. You know a variety of methods of prototyping and can choose the most appropriate ones. (Relevant skill level: practitioner)",
              "Service support. You can help fix faults following agreed procedures. You can carry out agreed maintenance tasks on infrastructure. (Relevant skill level: working)",
              "Systems design. You can translate logical designs into physical designs. You can produce detailed designs. You know how to document all work using required standards, methods and tools, including prototyping tools where appropriate. You can design systems characterised by managed levels of risk, manageable business and technical complexity, and meaningful impact. You can work with well understood technology and identify appropriate patterns. (Relevant skill level: working)",
              "Systems integration. You can build and test simple interfaces between systems, or work on more complex integration as part of a wider team. (Relevant skill level: working)",
              "User focus. You know how to collaborate with user researchers and can represent users internally. You understand the difference between user needs and the desires of the user. You can champion user research to focus on all users. You can prioritise and define approaches to understand the user story, guiding others in doing so. You can offer recommendations on the best tools and methods to be used. (Relevant skill level: practitioner)"
            ]
          ]
        },
        {
          "heading": "Senior developer",
          "content": [
            "A senior developer delivers and integrates software to form a complete service. At this level, you will:",
            [
              "plan and lead development on sets of related stories",
              "have an understanding of the whole system and take responsibility for teaching this to others",
              "work with other disciplines to understand what needs to be built",
              "coach and mentor more junior colleagues",
              "operate the production services you build",
              "find ways to improve system robustness, resilience and stability"
            ],
            "There are 2 roles here: a technical role and a management role."
          ]
        },
        {
          "heading": "Technical role: skills needed for this role",
          "content": [
            [
              "Availability and capacity management. You can manage the service components to ensure they meet business needs and performance targets. (Relevant skill level: working)",
              "Development process optimisation. You can identify process optimisation opportunities with guidance and contribute to the implementation of proposed solutions. (Relevant skill level: working)",
              "Information security. You understand information security, and can design solutions and services with security controls embedded, specifically engineered as mitigation against security threats as a core part of the solutions and services. (Relevant skill level: practitioner)",
              "Modern standards approach. You can use a modern standards approach competently and guide others in so doing. (Relevant skill level: practitioner)",
              "Programming and build (software engineering). You can collaborate with others when necessary to review specifications. You can use these agreed specifications to design, code, test and document programs or scripts of medium to high complexity, using the right standards and tools. (Relevant skill level: practitioner)",
              "Prototyping. You see prototyping as a team activity, actively soliciting prototypes and testing with others. You establish design patterns and iterate them. You know a variety of methods of prototyping and can choose the most appropriate ones. (Relevant skill level: practitioner)",
              "Service support. You can identify, locate and fix faults. (Relevant skill level: practitioner)",
              "Systems design. You can design systems characterised by medium levels of risk, impact, and business or technical complexity. You can select appropriate design standards, methods and tools, and ensure they are applied effectively. You know how to review the systems designs of others to ensure the selection of appropriate technology, efficient use of resources and integration of multiple systems and technology. (Relevant skill level: practitioner)",
              "Systems integration. You can define the integration build. You can coordinate build activities across systems and can undertake and support integration testing activities. (Relevant skill level: practitioner)",
              "User focus. You can collaborate with user researchers and sell or represent users internally. You can explain the difference between user needs and the desires of the user. You can champion user research to focus on all users. You know how to prioritise and define approaches to understand the user story, guiding others in doing so. You can offer recommendations on the best tools and methods to be used. (Relevant skill level: practitioner)"
            ]
          ]
        },
        {
          "heading": "Management role: skills needed for this role",
          "content": [
            [
              "Availability and capacity management. You ensure the correct implementation of standards and procedures, identifying capacity issues, stipulating the required changes and instigating these. You can initiate remedial action. (Relevant skill level: practitioner)",
              "Development process optimisation (management). You can identify process optimisation opportunities with guidance and contribute to the implementation of proposed solutions. (Relevant skill level: working)",
              "Information security. You understand information security, and can design solutions and services with security controls embedded, specifically engineered as mitigation against security threats as a core part of the solutions and services. (Relevant skill level: practitioner)",
              "Modern standards approach. You can use a modern standards approach competently and guide others in so doing. (Relevant skill level: practitioner)",
              "Programming and build (software engineering – management). You can collaborate with others when necessary to review specifications and use these agreed specifications to design, code, test and document programs or scripts of medium-to-high complexity, using the right standards and tools. (Relevant skill level: practitioner)",
              "Prototyping. You see prototyping as a team activity, actively soliciting prototypes and testing with others. You establish design patterns and iterate them. You know a variety of methods of prototyping and can choose the most appropriate ones. (Relevant skill level: practitioner)",
              "Service support. You can identify, locate and fix faults. (Relevant skill level: practitioner)",
              "Systems design. You can design systems characterised by medium levels of risk, impact, and business or technical complexity. You can select appropriate design standards, methods and tools, and ensure they are applied effectively. You know how to review the systems designs of others to ensure the selection of appropriate technology, efficient use of resources and integration of multiple systems and technology. (Relevant skill level: practitioner)",
              "Systems integration (management). You can define the integration build. You can coordinate build activities across systems and understand how to undertake and support integration testing activities. (Relevant skill level: practitioner)",
              "User focus. You know how to collaborate with user researchers and can represent users internally. You understand the difference between user needs and the desires of the user. You can champion user research to focus on all users. You can prioritise and define approaches to understand the user story, guiding others in doing so. You can offer recommendations on the best tools and methods to be used. (Relevant skill level: practitioner)"
            ]
          ]
        },
        {
          "heading": "Lead developer",
          "content": [
            "A lead developer leads development on one or a small number of related project teams. At this level, you will:",
            [
              "guide the ways in which the team works",
              "be proficient in a wide range of technical systems",
              "be involved in identifying appropriate technology and approaches, deciding when software should be written",
              "contribute to the developer community",
              "provide technical leadership, coach and mentor your team",
              "promote knowledge sharing and adoption of good practice"
            ],
            "There are 2 roles here - a technical role and a management role."
          ]
        },
        {
          "heading": "Technical role: skills needed for this role",
          "content": [
            [
              "Availability and capacity management. Manage the service components to ensure they meet business needs and performance targets. (Relevant skill level: working)",
              "Development process optimisation. You can identify process optimisation opportunities with guidance and contribute to the implementation of proposed solutions. (Relevant skill level: working)",
              "Information security. You have an appreciation of information security, designing solutions and services with security controls embedded, specifically engineered as mitigation against security threats as a core part of the solutions and services. (Relevant skill level: practitioner)",
              "Modern standards approach. You demonstrate strong understanding and application of the most appropriate modern standards and practices. You will take responsibility for coaching and guiding others. (Relevant skill level: expert)",
              "Programming and build (software engineering). You can advise on the right way to apply standards and methods, ensuring compliance. You can maintain technical responsibility for all the stages and iterations of a software development project. You can provide technical advice to stakeholders and set the team-based standards for programming tools and techniques. (Relevant skill level: expert)",
              "Prototyping. You see prototyping as a team activity, actively soliciting prototypes and testing with others. You establish design patterns and iterate them. You know a variety of methods of prototyping and can choose the most appropriate ones. (Relevant skill level: practitioner)",
              "Service support. You can identify, locate and fix faults. (Relevant skill level: practitioner)",
              "Systems design. You can design systems characterised by medium levels of risk, impact, and business or technical complexity. You can select appropriate design standards, methods and tools and ensure they are applied effectively. You can review the systems designs of others to ensure selection of appropriate technology, efficient use of resources and integration of multiple systems and technology. (Relevant skill level: practitioner)",
              "Systems integration. You can define the integration build. You can coordinate build activities across systems and understand how to undertake and support integration-testing activities. (Relevant skill level: practitioner)",
              "User focus. You can collaborate with user researchers and represent users internally. You can explain the difference between user needs and the desires of the user. You champion user research to focus on all users. You know how to prioritise and define approaches to understand the user story, guiding others in doing so. You can offer recommendations on the best tools and methods to be used. (Relevant skill level: practitioner)"
            ]
          ]
        },
        {
          "heading": "Management role: skills needed for this role",
          "content": [
            [
              "Availability and capacity management. You ensure the correct implementation of standards and procedures, identifying capacity issues, stipulating the required changes and instigating these. You know how to initiate remedial action. (Relevant skill level: practitioner)",
              "Development process optimisation (management). You can analyse current processes, identify and implement opportunities to optimise processes, and lead and develop a team of experts to deliver service improvements. You can help to evaluate and establish requirements for the implementation of changes by setting policy and standards. (Relevant skill level: practitioner)",
              "Information security. You have an appreciation of information security, designing solutions and services with security controls embedded, specifically engineered as mitigation against security threats as a core part of the solutions and services. (Relevant skill level: practitioner)",
              "Modern standards approach. You demonstrate strong understanding and application of the most appropriate modern standards and practices. You will take responsibility for coaching and guiding others. (Relevant skill level: expert)",
              "Programming and build (software engineering – management). You collaborate with others when necessary to review specifications and use these agreed specifications to design, code, test and document programs or scripts of medium-to-high complexity, using the right standards and tools. (Relevant skill level: practitioner)",
              "Prototyping. You see prototyping as a team activity, actively soliciting prototypes and testing with others. You establish design patterns and iterate them. You know a variety of methods of prototyping and can choose the most appropriate ones. (Relevant skill level: practitioner)",
              "Service support. You can identify, locate and fix faults. (Relevant skill level: practitioner)",
              "Systems design. You can design systems characterised by medium levels of risk, impact, and business or technical complexity. You can select appropriate design standards, methods and tools and ensure they are applied effectively. You can review the systems designs of others to ensure selection of appropriate technology, efficient use of resources and integration of multiple systems and technology. (Relevant skill level: practitioner)",
              "Systems integration (management). You can define the integration build. You can coordinate build activities across systems and understand how to undertake and support integration testing activities. (Relevant skill level: practitioner)",
              "User focus. You know how to collaborate with user researchers and can represent users internally. You understand the difference between user needs and the desires of the user. You can champion user research to focus on all users. You can prioritise and define approaches to understand the user story, guiding others in doing so. You can offer recommendations on the best tools and methods to be used. (Relevant skill level: practitioner)"
            ]
          ]
        },
        {
          "heading": "Principal developer",
          "content": [
            "A principal developer leads and plans development across large or multiple teams. At this level, you will:",
            [
              "be an expert in many technical areas, or a specialist with very deep knowledge in a particular technical area",
              "use this knowledge, and work with related disciplines, to keep multiple teams working effectively",
              "develop capability by facilitating internal mobility, shape career paths and recruit talent, making sure they collaborate",
              "identify, test and champion the adoption of emerging technologies"
            ],
            "There are 2 roles for principal developers: management roles and technical roles."
          ]
        },
        {
          "heading": "Management role: skills needed for this role",
          "content": [
            [
              "Availability and capacity management. You ensure the correct implementation of standards and procedures, identifying capacity issues, stipulating the required changes and instigating these. You know how to initiate remedial action. (Relevant skill level: practitioner)",
              "Availability and capacity management. You ensure the correct implementation of standards and procedures, identifying capacity issues, stipulating the required changes and instigating these. You know how to initiate remedial action. (Relevant skill level: practitioner)",
              "Development process optimisation (management). You can set strategy and manage resource allocation for solution development programmes. You liaise with client functions to establish business requirements; you can identify, propose, initiate and lead these programmes. (Relevant skill level: expert)",
              "Information security. You have a depth of knowledge in information security. You can design, quality review and quality assure solutions and services with security controls embedded, specifically engineered as mitigation against security threats as a core part of the solutions and services. (Relevant skill level: expert)",
              "Modern standards approach. You demonstrate strong understanding and application of the most appropriate modern standards and practices. You will take responsibility for coaching and guiding others. (Relevant skill level: expert)",
              "Programming and build (software engineering – management). You collaborate with others when necessary to review specifications and use these agreed specifications to design, code, test and document programs or scripts of medium-to-high complexity, using the right standards and tools. (Relevant skill level: practitioner)",
              "Prototyping. You have experience of using a variety of methods of prototyping. You know how to share best practice and can coach others. You look at strategic service design end to end. (Relevant skill level: expert)",
              "Service support. You can identify, locate and fix faults. (Relevant skill level: practitioner)",
              "Systems design. You can design systems characterised by high levels of risk, impact, and business or technical complexity. You control system design practice within an enterprise or industry architecture. You influence industry-based models for the development of new technology applications. You develop effective implementation and procurement strategies, consistent with business needs. You ensure adherence to relevant technical strategies, policies, standards and practices. (Relevant skill level: expert)",
              "Systems integration (management). You can define the integration build. You can coordinate build activities across systems and understand how to undertake and support integration testing activities. (Relevant skill level: practitioner)",
              "User focus. You can collaborate with user researchers and sell or represent users internally. You can explain the difference between user needs and the desires of the user. You champion user research to focus on all users. You know how to prioritise and define approaches to understand the user story, guiding others in doing so. You can offer recommendations on the best tools and methods to be used. (Relevant skill level: practitioner)"
            ]
          ]
        },
        {
          "heading": "Technical role: skills needed for this role",
          "content": [
            [
              "Availability and capacity management. You can manage the service components to ensure they meet business needs and performance targets. (Relevant skill level: working)",
              "Development process optimisation. You know how to analyse current processes, identify and implement opportunities to optimise processes, and lead and develop a team of experts to deliver service improvements. You help to evaluate and establish requirements for the implementation of changes by setting policy and standards. (Relevant skill level: practitioner)",
              "Information security. You have a depth of knowledge in information security. You can design, quality review and quality assure solutions and services with security controls embedded, specifically engineered as mitigation against security threats as a core part of the solutions and services. (Relevant skill level: expert)",
              "Modern standards approach. You demonstrate strong understanding and application of the most appropriate modern standards and practices. You will take responsibility for coaching and guiding others. (Relevant skill level: expert)",
              "Programming and build (software engineering). You can advise on the right way to apply standards and methods, ensuring compliance. You can maintain technical responsibility for all the stages and iterations of a software development project. You provide technical advice to stakeholders and set the team-based standards for programming tools and techniques. (Relevant skill level: expert)",
              "Prototyping. You have experience of using a variety of methods of prototyping. You know how to share best practice and can coach others. You look at strategic service design end to end. (Relevant skill level: expert)",
              "Service support. You can identify, locate and fix faults. (Relevant skill level: practitioner)",
              "Systems design. You can design systems characterised by high levels of risk, impact, and business or technical complexity. You control system design practice within an enterprise or industry architecture. You influence industry-based models for the development of new technology applications. You develop effective implementation and procurement strategies, consistent with business needs. You ensure adherence to relevant technical strategies, policies, standards and practices. (Relevant skill level: expert)",
              "Systems integration. You can define the integration build. You can coordinate build activities across systems and understand how to undertake and support integration-testing activities. (Relevant skill level: practitioner)",
              "User focus. You know how to collaborate with user researchers and can represent users internally. You understand the difference between user needs and the desires of the user. You can champion user research to focus on all users. You can prioritise and define approaches to understand the user story, guiding others in doing so. You can offer recommendations on the best tools and methods to be used. (Relevant skill level: practitioner)"
            ]
          ]
        },
        {
          "heading": "Read more",
          "content": [
            [
              "Civil Service Jobs",
              "Read about the government’s backend development community",
              "Read about the government’s frontend development community",
              "Blog: walk in my shoes: An apprentice and a senior software developer shadow each other for a day",
              "Blog: Companies House: building a more rewarding workplace for Digital, Data and Technology Professionals"
            ]
          ]
        }
      ]
    ]
  }
]
```
