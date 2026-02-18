---
id: "skyblux-agentforce"
slug: "skyblux-agentforce"
title: "Implementing Salesforce Agentforce for a LATAM Battery Retailer"
subtitle: "End-to-end AI agent deployment at a mid-size distributor — from architecture to client alignment, across two languages and two teams."
summary: "Implemented a production Salesforce Agentforce assistant for a LATAM battery distributor, combining architecture design, workflow automation, and bilingual stakeholder alignment."
company: "Skyblux Solutions"
role: "AI Implementation Intern"
timeline: "Summer 2024"
status: "published"
locale: "en-US"
publishedAt: "2024-09-01"
updatedAt: "2024-09-15"
tags: ["Product Operations", "Salesforce", "AI Implementation", "Stakeholder Management", "Process Design"]
keywords: ["salesforce agentforce", "conversation architecture", "cross-functional alignment", "bilingual delivery", "workflow automation"]
outcomes:
  - "Delivered a working Agentforce deployment within the internship timeline"
  - "Maintained alignment across a bilingual engineering/client split throughout the project"
  - "Designed conversation architecture and automation stack from first principles"
order: 1
---

## Background

Skyblux Solutions is a consulting firm specializing in Salesforce implementations for Latin American clients. My internship placed me on a project implementing Salesforce Agentforce for a mid-size battery distributor — giving them an AI-driven agent for customer service and sales support workflows.

The project landed on my desk with a clear deliverable and a fuzzy path: build an AI agent that fits real business processes, not just a polished demo.

## The challenge

Two things made this harder than a typical implementation:

**1. The technical complexity was real.** Agentforce wasn't a click-and-configure product. I needed to design the conversation architecture from scratch — mapping what the agent could and couldn't do, wiring together instruction blocks, flows, actions, and Apex code, and making sure the handoff logic didn't create dead ends for customers.

**2. The client and engineering team were not in the same room.** Or the same country, or always the same language. The client stakeholders had business requirements. The engineering team had implementation constraints. My job was to make sure neither side was building toward something the other couldn't use.

## What I actually did

### Conversation architecture

Before writing a single line of configuration, I mapped the full interaction model: what questions the agent would handle autonomously, what triggers would escalate to a human, and what data it needed from Salesforce objects to answer anything useful.

The client had existing approval workflows and work-order processes. The agent had to work *with* those, not around them. That meant understanding their current processes before designing anything new — and flagging where the defaults would've broken things.

### Building the stack

The implementation involved:

- **Instruction blocks** — defining the agent's behavior, tone, and scope boundaries
- **Flows** — automating the business process steps that triggered off agent conversations
- **Actions** — connecting the agent to live Salesforce data (accounts, products, cases)
- **Apex** — custom logic for anything flows couldn't handle cleanly

A lot of this was figuring out where Salesforce's tools were sufficient and where they needed custom extensions. The documentation for Agentforce at that point was thin enough that I was often validating assumptions by testing them.

### Keeping the project connected

The piece I wasn't expecting to own as much: running the alignment sessions. Regular check-ins between our engineering team and the client's operations staff to surface gaps between what we were building and what they actually needed.

This sounds administrative. It wasn't. The substantive work was translating: client said "the agent shouldn't handle warranty disputes" — engineering needed to know exactly what triggers that, how to detect it in the conversation, and what the fallback flow was. That translation happened in those sessions, and a few times it caught a design decision that would've required significant rework.

## What I learned

**The technical work was the easier half.** Salesforce's tools are constrained enough that the hard problems are usually in requirements, not implementation. What does "the agent should feel helpful" actually mean for configuration decisions? That's not a technical question.

**Synchronization is its own skill.** Keeping two teams pointed at the same goal across language differences, time zones, and different levels of technical literacy is work — and it's the kind of work that doesn't show up in a commit history.

**I do my best work at the seam.** Not purely on the technical side, not purely on the client side, but in the space between — where someone needs to understand both well enough to move the project forward.

---

*This case study is written from memory. Specific implementation details and client information are described at a general level.*
