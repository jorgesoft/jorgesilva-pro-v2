---
title: "Paper: How to Apply the Principles of Resilience on Kubernetes"
date: "2025-02-26T22:12:03.284Z"
description: "A paper I wrote exploring Kubernetes and Resilience."
featuredImage: "./helm-lock-clouds.webp"
---

This paper was written for my Cyber Resilience class as part of my master's degree in cybersecurity at NYU. During my research, I noticed that Kubernetes and Cloud Native Computing are rarely mentioned in discussions about resilience, and vice versa. Given Kubernetes' growing adoption as a standard framework, I believe it's important to explore its role in enhancing resilience. 

![Clouds and Code](./banner.jpg "AI generated computer in the cloud")

## Introduction. 

Kubernetes is an open-source container orchestrator; a system for automating deployment, scaling, and management of containerized applications [1]. The growing need to manage disruptions makes resilience, the ability to recover and adapt, essential, and Kubernetes offers various features to build resilient systems and services. This paper explores Kubernetes' strengths, challenges, and practical steps to enhance resilience using the Path to Operational Resilience.

## Kubernetes: Reliability and Resilience.

Kubernetes is often associated with reliability, defined by NIST as "the ability of a system or component to function under stated conditions for a specified period of time" [2]. Its features that provide reliability can also support resilience, which NIST defines as "the ability to maintain required capability in the face of adversity… resilience includes the ability to withstand and recover from deliberate attacks, accidents, or naturally occurring threats or incidents" [3].

To simplify the difference between reliability and resilience, consider this analogy of a car: A reliable car starts every time you turn the key and runs smoothly under normal conditions, while a resilient car not only runs reliably but also has features like run-flat tires and reinforced bumpers, enabling it to keep going even after a flat tire or a minor collision.

The features that contribute to resilience in Kubernetes include service discovery and load balancing, storage orchestration, automated rollouts and rollbacks, self-healing, and secret and configuration management, among others [4]. Kubernetes, as part of the Cloud Native Computing Foundation (CNCF), is a software that takes full advantage of the essential characteristics of cloud computing (on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service [5]), which align closely with the principles of resilience. The CNCF also has an extended landscape of additional open-source and proprietary software that provide additional resilience capabilities to Kubernetes, such as security policy enforcement, observability, chaos engineering, and others. [6] 

However, Kubernetes introduces challenges to achieving resilience, particularly as complexity increases in microservices architectures. Despite these hurdles, Kubernetes provides a strong foundation for resilient cloud-native applications and it’s worth exploring a practical application through the Operational Resilience Framework (ORF).

## Implementing Resilience Using the Path to Operational Resilience.

The Operational Resilience Framework (ORF), by the Global Resilience Federation, provides a structured approach to ensure organizations can anticipate, withstand, recover from, and adapt to disruptions while maintaining critical operations. Central to this framework is the Path to Operational Resilience, a step-by-step guide that emphasizes implementing industry standards, defining service priorities, preserving critical data, and continuously testing and improving systems [7]. 

#### 1. Build the Foundation: 

Adopting risk management and cybersecurity frameworks is essential for building resilience. Many organizations already use frameworks tailored to their industry, but for those seeking guidance, options like the NIST Cybersecurity Framework, NIST Risk Management Framework, ISO 27001, and ISO 31000 provide solid foundations for establishing resilience practices that can be applied to Kubernetes.

#### 2. Understand Ecosystem Roles: 

Understanding how Kubernetes-based services interact within the broader organizational and external ecosystem is a critical step. The challenge lies in the microservices architecture typical of Kubernetes deployments, requiring a decision on whether to evaluate resilience on a service-by-service basis or group related services together. To effectively manage this complexity, this step requires to implement:

- A comprehensive documentation of services and dependencies
- Categorization of services
- Prioritized customer and partner groups

#### 3. Define Minimum Viable Service Levels: 

Establish the essential performance thresholds for critical services to remain operational during disruptions. This requires identifying internal services that support external ones and analyzing their potential failure modes. In the context of cybersecurity, the Threat Matrix for Kubernetes is a valuable tool for assessing the impact of cyberattacks, including data destruction, resource hijacking, and denial of service. Additionally, the challenges of microservices become apparent again at this stage, emphasizing the need to account for supporting services like CI/CD pipelines and tools from the CNCF landscape that are integral to Kubernetes deployments [8].

#### 4. Establish Service Delivery Objectives: 

The fourth step involves defining Service Delivery Objectives for each critical service, requiring a thorough analysis of its design, including internal and external dependencies across people, processes, technology, vendors, and suppliers. This step takes a more technical focus, involving the configuration of Kubernetes and its associated tools. The concept of Service Delivery Objectives closely aligns with Service Level Objectives (SLOs) from the Site Reliability Workbook, commonly used in Kubernetes deployments [9]. As a result, practices from SLO implementation can likely be adapted to this stage of the ORF process.

#### 5. Preserve Critical Data Sets: 

The fifth step focuses on preserving the data sets essential for critical services, ensuring their confidentiality, integrity, and availability. These data sets include not only consumer and business data but also the applications, systems, networks, core infrastructure services, and configurations needed to restore services, even in a degraded state. Kubernetes excels in this area through its traditional Infrastructure as Code (IaC) approach to be deployed in cloud environments, and by using YAML files to define and manage service configurations. This standardization streamlines data set management for Kubernetes deployments and significantly enhances resilience by enabling consistent and reliable restoration processes.

#### 6. Enable Recovery and Restoration: 

This step involves establishing a recovery environment and implementing systems and processes to meet the defined Service Delivery Objectives.

Kubernetes simplifies this process with its standardized IaC approach, enabling rapid recreation of deployments in a different cloud region. Configurations from one Kubernetes deployment can be seamlessly applied to new environments, ensuring consistency and efficiency. Additionally, CNCF tools like Helm (a package manager for Kubernetes applications) and Argo (a CI/CD tool) further streamline deployment and recovery, making it easier to achieve resilience and meet recovery objectives.

#### 7. Independently Test: 

The final step involves independently evaluating the design and periodically testing the organization’s implementation of the Operational Resilience Framework to ensure it meets Service Delivery Objectives and business outcomes. This includes architecture, design, and policy reviews; independent testing for alignment with objectives; and monitoring for coverage and effectiveness.

In Kubernetes, Site Reliability Engineering (SRE) practices enhance service monitoring, with CNCF tools like Prometheus optimized for cloud-native applications. Kubernetes' IaC approach simplifies configuration reviews, ensuring consistency and transparency. Additionally, CNCF tools like Chaos Mesh enable chaos engineering to test system resilience under adverse conditions, further strengthening operational resilience.

## Conclusion.

Kubernetes, with its robust capabilities and alignment with the principles of resilience, provides a strong foundation for building resilient cloud-native applications. By leveraging the Path to Operational Resilience, organizations can systematically address the challenges of ensuring service continuity and adaptability in the face of disruptions. Through adopting frameworks, understanding ecosystem roles, defining service levels, preserving critical data, and enabling recovery, Kubernetes deployments can achieve higher resilience. The integration of CNCF tools and SRE practices further enhances its capabilities, making Kubernetes an invaluable platform for modern, resilient applications in an increasingly unpredictable digital landscape.

## References.

[1]	Kubernetes, “Production-Grade Container Orchestration,” Kubernetes.io, 2019. https://kubernetes.io

[2]	“reliability - Glossary | NIST CSRC,” csrc.nist.gov. https://csrc.nist.gov/glossary/term/reliability#:~:text=Definitions%3A,NIST%20SP%20800%2D160%20Vol 

[3]	“resilience - Glossary | NIST CSRC,” csrc.nist.gov. csrc.nist.gov.https://csrc.nist.gov/glossary/term/resilience#:~:text=NIST%20SP%20800%2D39%20under,naturally%20occurring%20threats%20or%20incidents

[4]	Kubernetes, “Overview,” Kubernetes.io, Sep. 19, 2023. https://kubernetes.io/docs/concepts/overview/

[5]	P. Mell and T. Grance, “The NIST Definition of Cloud Computing,” csrc.nist.gov, Sep. 28, 2011. https://csrc.nist.gov/pubs/sp/800/145/final

[6] 	“CNCF Landscape,” CNCF.io, 2024. https://landscape.cncf.io/guide#introduction (accessed Dec. 22, 2024).

[7]	“The Operational Resilience Framework,” Global Resilience Federation. https://www.grf.org/orf

[8]	Y. Weizman, “Threat matrix for Kubernetes,” Microsoft Security Blog, Apr. 02, 2020. https://www.microsoft.com/en-us/security/blog/2020/04/02/attack-matrix-kubernetes/

[9] 	B. Beyer, N. R. Murphy, D. K. Rensin, K. Kawahara, and S. Thorne, The Site Reliability Workbook: Practical Ways to Implement SRE, 1st ed. Sebastopol, CA, USA: O'Reilly Media, Inc., 2018.
