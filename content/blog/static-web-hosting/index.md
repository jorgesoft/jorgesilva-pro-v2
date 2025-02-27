---
title: Finding the Best Static Site Platform
date: "2025-01-27T22:12:03.284Z"
description: "A review of some of the static website platforms that I have tried."
featuredImage: "./server-in-cloud.webp"
---
I’ve hosted my personal website as a static site since I created it back in 2018. It was mostly an exercise in using multiple AWS services to create a cheap website with low maintenance.

There are many static website providers, and they all have pros and cons. This blog shares my experience using a few of these providers.  

![Clouds and Code](./banner.webp "AI generated computer in the cloud")

### AWS

AWS offers several options for deploying static websites. The first is to store the website content in an S3 (Simple Storage Service) bucket, which can be configured to work as a simple web server. However, if you configure CloudFront (CDN), the AWS Certificate Manager, and Route 53 (DNS), you can have a more robust and highly customizable site. 

As you can see, to have a functional site, you need to implement multiple services, so this approach is very complicated if you intend to have a very simple site. This approach costs me 50 cents a month for the Route 53 domain zone hosting. And there is the risk that I can end up paying a lot for other services if this page is attacked in any way. 

I have this page hosted with this approach: https://react.jorgedemo.com/ 

AWS also has a simpler way to deploy static sites with AWS Amplify, but I have not tried using it.

#### Pros:
- Very robust for production-grade sites.
- If you use it for learning purposes, you get to learn how 4 AWS services work.
- Simple integration with other AWS services.

#### Cons:
- Complicated, it takes some time to configure it if you don’t find an automated way to do it.
- Not free, as you need to pay at least for the Route 53 domain zone.
- If attacked, you can get a large bill from AWS

### Azure Static Web Apps

The second biggest cloud provider has a dedicated service for deploying Static Web Apps. In fact, this site is hosted there. 

They have a free tier for personal projects. It is limited in resources, but that’s good because I know I don’t need that much. They have other paid tiers for production-level sites that can be integrated better with other production-level services like functions and databases.

#### Pros:
It’s free! 
Easy to deploy
Not prone to attacks that create large bills

### DigitalOcean App Platform

DigitalOcean (DO) App Platform is a PaaS offering that includes 3 free static sites. They connect easily with GitHub, you can use multiple domains and include 1GiB/month outbound transfer. Azure is easy to configure compared to AWS, but DO is even easier. I’d recommend this approach to anybody who is not great with cloud services but wants to have a website and some servers running easily, with predictable billing. This is what DigitalOcean is for! 

I have this site running in DO: https://pswd.app/ 

#### Pros:
- Very easy to configure.
- Predictable billing.
- 3 free sites! 

#### Cons:
- Additional sites are $5 a month, which isn’t that bad.
- Connection to GitHub is not done through GitHub Actions.
- 1GiB/month outbound transfer. 

## Conclusion, by now

Each service I’ve mentioned has its own strengths and weaknesses, so the best option will depend on your specific goals. I’ll likely update this blog if I get the chance to try out new services.
