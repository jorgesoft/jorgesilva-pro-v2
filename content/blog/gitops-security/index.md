---
title: "Security in the GitOps workflow."
date: "2025-02-28T22:12:03.284Z"
description: "."
featuredImage: "./helm-lock-clouds.webp"
---

This blog is from a presentation that I did a few weeks ago for the Cloud Native Computing Foundation Community of San Salvador. 

The idea was to explore how to implement security in GitOps, a modern approach to managing infrastructures and applications through Git. The presentation included a demo showcasing the GitOps workflow, simulating how to integrate security at each stage.

This blog will cover the essential aspects of the presentation.

### What is GitOps?

Before we discuss security, it's essential to understand what GitOps is. Although there's no definitive definition, a simple way to describe it is that "GitOps is the implementation of DevOps through Git."

So, what are DevOps and Git? DevOps merges software development (Dev) and IT operations (Ops) to enhance software delivery, and Git is a distributed version control system. To put it more clearly, GitOps is the implementation of Developer Operations through a version control system.

GitOps is typically associated with declarative code, such as deploying infrastructure as code (IaC) using tools like Terraform, CI/CD and Kubernetes.