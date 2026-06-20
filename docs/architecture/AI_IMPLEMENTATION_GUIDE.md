# TRIPOLI PULSE AI
# AI IMPLEMENTATION GUIDE
# VERSION 1.0

---

# PURPOSE

This document defines all AI-related architecture, standards, implementation rules, technologies, and limitations.

This document is the single source of truth for every AI feature implemented inside Tripoli Pulse AI.

All AI implementations must follow this document.

---

# AI PHILOSOPHY

AI should:

- Assist citizens
- Assist municipalities
- Reduce manual work
- Surface insights
- Explain complex information
- Increase engagement
- Improve decision-making

AI should never:

- Replace human decision-making
- Automatically resolve reports
- Make legal decisions
- Block user actions
- Hallucinate critical information
- Hide uncertainty

AI should behave as:

An intelligent assistant.

Not an autonomous authority.

---

# PRIMARY GOALS

1. Improve issue reporting quality
2. Reduce municipality workload
3. Improve data discovery
4. Generate insights
5. Predict future problems
6. Increase citizen engagement

---

# AI FEATURES

## Computer Vision

Purpose:

Analyze citizen-submitted photos.

Capabilities:

- Pothole detection
- Garbage detection
- Flood detection
- Sidewalk damage detection
- Streetlight damage detection
- Infrastructure damage detection

Output:

```ts
{
  issueType: string;
  severity: number;
  confidence: number;
  tags: string[];
}
```

---

## Urban Copilot

Purpose:

Conversational assistant.

Capabilities:

- Search reports
- Explain statistics
- Summarize trends
- Generate recommendations
- Answer questions
- Explain neighborhood metrics

Examples:

"What are the biggest issues in Mina?"

"Why did accessibility decrease?"

"Show unresolved potholes near schools."

---

## Recommendation Engine

Purpose:

Generate actionable recommendations.

Examples:

Repair roads
Increase waste collection
Deploy maintenance teams
Improve street lighting
Prioritize schools

Output:

```ts
{
  title: string;
  description: string;
  priority: number;
  estimatedImpact: number;
}
```

---

## Predictive Analytics

Purpose:

Forecast city conditions.

Predictions:

- Traffic congestion
- Waste accumulation
- Flood risks
- Infrastructure deterioration

Outputs:

Risk Score
Confidence Score
Forecast Window
Recommendations

---

## Semantic Search

Purpose:

Search reports using meaning rather than keywords.

Examples:

Search:

"Road damage near schools"

Should find:

- potholes
- cracked roads
- damaged sidewalks
- infrastructure failures

---

## Companion Assistant

Purpose:

Provide a friendly engagement experience.

Capabilities:

- Explain city improvements
- Encourage participation
- Celebrate achievements
- Surface recommendations

Never:

Spam users.

Never:

Manipulate users emotionally.

---

# AI STACK

---

# LLM

Provider:

Ollama

Models:

Gemma 3
Llama 3

Requirements:

- Local execution
- No paid APIs
- Docker support
- API endpoint access

Capabilities:

Chat
Summaries
Recommendations
Classification

---

# EMBEDDINGS

Model:

all-MiniLM-L6-v2

Purpose:

Semantic search.

Responsibilities:

Generate embeddings for:

Reports
Predictions
Recommendations
Neighborhood summaries

---

# VECTOR DATABASE

Technology:

pgvector

Stores:

Embeddings only.

Supports:

Similarity search
RAG
Recommendations

---

# COMPUTER VISION

Models:

YOLOv8
OpenCV

Purpose:

Image analysis.

Tasks:

Object Detection
Classification
Severity Estimation

---

# BACKEND ARCHITECTURE

Create:

```txt
modules/

ai/
vision/
recommendations/
predictions/
embeddings/
```

---

# AI MODULE RESPONSIBILITIES

---

## AI Module

Responsibilities:

- Chat
- Summaries
- Explanations
- Prompt orchestration

---

## Vision Module

Responsibilities:

- Image analysis
- Object detection
- Severity scoring

---

## Embeddings Module

Responsibilities:

- Generate embeddings
- Save embeddings
- Similarity search

---

## Recommendations Module

Responsibilities:

- Recommendation generation
- Priority scoring
- Impact estimation

---

## Predictions Module

Responsibilities:

- Forecasting
- Risk scores
- Trend generation

---

# DIRECTORY STRUCTURE

```txt
modules/
    ai/
        controllers/
        services/
        prompts/
        dto/
        interfaces/

    vision/
        services/
        models/
        dto/

    embeddings/
        services/
        dto/

    recommendations/
        services/
        dto/

    predictions/
        services/
        dto/
```

---

# PROMPT RULES

Prompts must:

- Be deterministic
- Use structured outputs
- Request JSON responses
- Avoid ambiguous instructions
- Include context

Never:

Ask the model for free-form responses when structured data is expected.

---

# EXAMPLE

Good:

```txt
Return only JSON.

Fields:
title
description
priority
estimatedImpact
```

Bad:

```txt
Give me some recommendations.
```

---

# AI OUTPUT VALIDATION

Every AI response must be validated.

Use:

Zod

or

class-validator

Never trust model output.

Invalid outputs must:

- Retry
- Fallback
- Log errors

---

# CONFIDENCE SCORES

Every prediction should include:

```ts
confidence: number;
```

Range:

0 - 100

Never present uncertain information as facts.

---

# EMBEDDING PIPELINE

---

# Reports

Create report
↓

Generate summary
↓

Generate embedding
↓

Store vector
↓

Index searchable data

---

# Recommendations

Create recommendation
↓

Generate embedding
↓

Store vector

---

# Neighborhood Summaries

Generate summary
↓

Generate embedding
↓

Store vector

---

# SEMANTIC SEARCH FLOW

User Query
↓

Generate Query Embedding
↓

Vector Search
↓

Retrieve Similar Results
↓

Optional LLM Explanation
↓

Return Results

---

# COMPUTER VISION FLOW

Citizen Upload
↓

Store Image
↓

Queue Job
↓

Vision Analysis
↓

Detect Objects
↓

Generate Tags
↓

Estimate Severity
↓

Save Analysis
↓

Return Results

Heavy processing must always happen in background jobs.

---

# RECOMMENDATION FLOW

Analytics
↓

Predictions
↓

Reports
↓

Generate Context
↓

LLM Recommendation
↓

Validate Output
↓

Store Recommendation

---

# PREDICTION FLOW

Historical Data
↓

Aggregation
↓

Trend Analysis
↓

Risk Score
↓

Forecast Generation
↓

Recommendations

---

# QUEUE ARCHITECTURE

Technology:

BullMQ

Queues:

```txt
vision.queue
embedding.queue
prediction.queue
recommendation.queue
summary.queue
```

Never perform AI work synchronously.

---

# CACHING

Technology:

Redis

Cache:

Embeddings
Predictions
Recommendations
AI summaries

Never cache user-sensitive data.

---

# DATABASE TABLES

---

## Embedding

```ts
id
entityType
entityId
vector
createdAt
updatedAt
```

---

## AIInteraction

```ts
id
userId
prompt
response
tokens
duration
createdAt
```

---

## VisionAnalysis

```ts
id
reportId
issueType
severity
confidence
tags
createdAt
updatedAt
```

---

## Prediction

```ts
id
type
neighborhoodId
riskScore
confidence
forecast
createdAt
updatedAt
```

---

## Recommendation

```ts
id
title
description
priority
estimatedImpact
status
createdAt
updatedAt
```

---

# API ENDPOINTS

---

## AI

```txt
POST /api/v1/ai/chat
POST /api/v1/ai/summarize
POST /api/v1/ai/recommend
```

---

## Vision

```txt
POST /api/v1/vision/analyze
GET /api/v1/vision/report/:id
```

---

## Embeddings

```txt
POST /api/v1/embeddings/generate
GET /api/v1/search/semantic
```

---

## Predictions

```txt
GET /api/v1/predictions
GET /api/v1/predictions/:id
```

---

## Recommendations

```txt
GET /api/v1/recommendations
POST /api/v1/recommendations/generate
```

---

# LOGGING

Every AI operation should log:

Request ID
Execution Time
Model Used
Confidence
Errors

Never log:

Passwords
Secrets
Sensitive personal information

---

# OBSERVABILITY

Metrics:

- AI request count
- Average response time
- Prediction accuracy
- Vision accuracy
- Embedding generation time
- Queue durations
- Error rates

---

# PERFORMANCE TARGETS

Chat:
< 5 seconds

Vision:
< 10 seconds

Embeddings:
< 3 seconds

Recommendations:
< 5 seconds

Predictions:
< 10 seconds

---

# FALLBACK STRATEGY

If AI services fail:

1. Log error
2. Retry
3. Return graceful response
4. Continue application execution

AI failure must never break core platform functionality.

---

# SECURITY

Never:

- Execute arbitrary prompts
- Allow prompt injection into queries
- Trust model outputs
- Expose internal prompts
- Store secrets inside prompts

Always:

Validate inputs
Validate outputs
Rate limit endpoints
Sanitize content

---

# IMPLEMENTATION ORDER

Phase 1:
Embeddings

Phase 2:
Semantic Search

Phase 3:
Computer Vision

Phase 4:
Urban Copilot

Phase 5:
Recommendations

Phase 6:
Predictions

Phase 7:
Companion Assistant

---

# DEFINITION OF DONE

A feature is complete only if:

✅ Queue implemented  
✅ DTOs implemented  
✅ Validation implemented  
✅ Logging implemented  
✅ Error handling implemented  
✅ Monitoring implemented  
✅ Tests implemented  
✅ Documentation updated  
✅ Type safety maintained  
✅ Graceful fallbacks implemented

---

# FINAL VISION

The AI layer should transform Tripoli Pulse AI from a reporting platform into an intelligent city operating system capable of understanding, explaining, predicting, and helping improve the city of Tripoli while remaining affordable, locally deployable, and independent from paid AI providers.