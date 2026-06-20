# TRIPOLI PULSE AI
# DATABASE SCHEMA
# VERSION 1.0

---

# OVERVIEW

Database Engine:
PostgreSQL 17

Extensions:

- PostGIS
- pgvector
- uuid-ossp
- pg_trgm

ORM:

Prisma ORM

---

# DATABASE PRINCIPLES

The database must be:

- Normalized
- Scalable
- Audit-friendly
- Soft-delete compatible
- Geospatially aware
- AI-ready
- Multi-role compatible

---

# ENTITY RELATIONSHIP OVERVIEW

```txt
User
 ├── Profile
 ├── Reports
 ├── Notifications
 ├── Donations
 ├── Companion
 └── Achievements

Report
 ├── ReportImages
 ├── ReportStatusHistory
 ├── ReportAssignments
 ├── VisionAnalysis
 └── Embeddings

Neighborhood
 ├── Reports
 ├── Campaigns
 ├── Predictions
 ├── Scores
 └── Analytics

Campaign
 ├── Donations
 └── Transactions

Prediction
 └── Neighborhood

Recommendation
 └── Neighborhood
```

---

# ENUMS

## UserRole

```ts
enum UserRole {
  CITIZEN
  OPERATOR
  MUNICIPALITY_ADMIN
  SUPER_ADMIN
}
```

---

## ReportStatus

```ts
enum ReportStatus {
  PENDING
  VERIFIED
  ASSIGNED
  IN_PROGRESS
  RESOLVED
  REJECTED
  DUPLICATE
}
```

---

## Priority

```ts
enum Priority {
  LOW
  MEDIUM
  HIGH
  CRITICAL
  EMERGENCY
}
```

---

## CampaignStatus

```ts
enum CampaignStatus {
  DRAFT
  ACTIVE
  PAUSED
  COMPLETED
  ARCHIVED
  CANCELLED
}
```

---

## PaymentStatus

```ts
enum PaymentStatus {
  PENDING
  PROCESSING
  SUCCEEDED
  FAILED
  CANCELLED
  REFUNDED
}
```

---

# USERS

```prisma
model User {
  id              String   @id @default(uuid())
  email           String   @unique
  phone           String?  @unique
  password        String
  role            UserRole
  isEmailVerified Boolean  @default(false)
  isActive        Boolean  @default(true)

  profile         Profile?
  reports         Report[]
  donations       Donation[]
  notifications   Notification[]

  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  deletedAt       DateTime?
}
```

---

# PROFILES

```prisma
model Profile {
  id              String   @id @default(uuid())
  userId          String   @unique
  firstName       String
  lastName        String
  avatarUrl       String?
  neighborhoodId  String?
  bio             String?

  user            User @relation(fields: [userId], references: [id])

  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

---

# NEIGHBORHOODS

```prisma
model Neighborhood {
  id                  String @id @default(uuid())
  name                String
  slug                String @unique

  population          Int?
  infrastructureScore Float?
  environmentScore    Float?
  accessibilityScore  Float?
  safetyScore         Float?
  engagementScore     Float?
  overallScore        Float?

  geometry            Unsupported("geometry")

  reports             Report[]
  campaigns           Campaign[]
  predictions         Prediction[]

  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
}
```

---

# ISSUE TYPES

```prisma
model IssueType {
  id          String @id @default(uuid())
  name        String
  slug        String @unique
  icon        String?
  color       String?

  reports     Report[]
}
```

---

# REPORTS

```prisma
model Report {
  id                  String @id @default(uuid())
  referenceNumber     String @unique

  userId              String
  issueTypeId         String
  neighborhoodId      String?

  title               String?
  description         String?

  severity            Int?
  priority            Priority?
  status              ReportStatus @default(PENDING)

  latitude            Float
  longitude           Float
  address             String?
  location            Unsupported("geometry")

  isAnonymous         Boolean @default(false)

  user                User @relation(fields: [userId], references: [id])
  issueType           IssueType @relation(fields: [issueTypeId], references: [id])

  images              ReportImage[]
  history             ReportStatusHistory[]
  assignments         ReportAssignment[]
  visionAnalysis      VisionAnalysis?

  verifiedAt          DateTime?
  resolvedAt          DateTime?

  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
  deletedAt           DateTime?
}
```

---

# REPORT IMAGES

```prisma
model ReportImage {
  id            String @id @default(uuid())
  reportId      String
  url           String
  width         Int?
  height        Int?
  mimeType      String?

  report        Report @relation(fields: [reportId], references: [id])

  createdAt     DateTime @default(now())
}
```

---

# REPORT STATUS HISTORY

```prisma
model ReportStatusHistory {
  id               String @id @default(uuid())
  reportId         String
  previousStatus   ReportStatus?
  newStatus        ReportStatus
  changedBy        String
  notes            String?

  report           Report @relation(fields: [reportId], references: [id])

  createdAt        DateTime @default(now())
}
```

---

# REPORT ASSIGNMENTS

```prisma
model ReportAssignment {
  id              String @id @default(uuid())
  reportId        String
  assignedTo      String
  assignedBy      String
  assignedAt      DateTime @default(now())

  report          Report @relation(fields: [reportId], references: [id])
}
```

---

# VISION ANALYSIS

```prisma
model VisionAnalysis {
  id            String @id @default(uuid())
  reportId      String @unique
  issueType     String
  severity      Int
  confidence    Float
  tags          Json

  report        Report @relation(fields: [reportId], references: [id])

  createdAt     DateTime @default(now())
}
```

---

# EMBEDDINGS

```prisma
model Embedding {
  id            String @id @default(uuid())
  entityType    String
  entityId      String
  vector        Unsupported("vector")
  createdAt     DateTime @default(now())
}
```

---

# PREDICTIONS

```prisma
model Prediction {
  id                String @id @default(uuid())
  type              String
  neighborhoodId    String
  riskScore         Float
  confidence        Float
  forecast          String

  neighborhood      Neighborhood
    @relation(fields: [neighborhoodId], references: [id])

  createdAt         DateTime @default(now())
}
```

---

# RECOMMENDATIONS

```prisma
model Recommendation {
  id                String @id @default(uuid())
  neighborhoodId    String?
  title             String
  description       String
  priority          Int
  estimatedImpact   Float

  createdAt         DateTime @default(now())
}
```

---

# CAMPAIGNS

```prisma
model Campaign {
  id                String @id @default(uuid())
  title             String
  slug              String @unique
  description       String

  goalAmount        Decimal
  raisedAmount      Decimal @default(0)

  status            CampaignStatus

  bannerUrl         String?
  organization      String?
  neighborhoodId    String?

  donations         Donation[]
  transactions      Transaction[]

  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
}
```

---

# DONATIONS

```prisma
model Donation {
  id                String @id @default(uuid())
  campaignId        String
  userId            String
  transactionId     String?

  amount            Decimal
  currency          String
  status            PaymentStatus

  campaign          Campaign
    @relation(fields: [campaignId], references: [id])

  user              User
    @relation(fields: [userId], references: [id])

  createdAt         DateTime @default(now())
}
```

---

# TRANSACTIONS

```prisma
model Transaction {
  id                      String @id @default(uuid())
  referenceNumber         String @unique
  provider                String
  providerTransactionId   String?

  userId                  String?
  campaignId              String?

  amount                  Decimal
  currency                String
  status                  PaymentStatus

  metadata                Json?

  createdAt               DateTime @default(now())
  updatedAt               DateTime @updatedAt
}
```

---

# NOTIFICATIONS

```prisma
model Notification {
  id            String @id @default(uuid())
  userId        String
  title         String
  message       String
  type          String
  isRead        Boolean @default(false)

  user          User @relation(fields: [userId], references: [id])

  createdAt     DateTime @default(now())
}
```

---

# OPTIONAL COMPANION SYSTEM

```prisma
model Companion {
  id            String @id @default(uuid())
  userId        String @unique
  species       String
  level         Int @default(1)
  xp            Int @default(0)
  happiness     Int @default(100)
  stage         String

  user          User @relation(fields: [userId], references: [id])
}
```

---

# ACHIEVEMENTS

```prisma
model Achievement {
  id            String @id @default(uuid())
  userId        String
  title         String
  description   String
  icon          String
  unlockedAt    DateTime?

  user          User @relation(fields: [userId], references: [id])
}
```

---

# REQUIRED INDEXES

```sql
CREATE INDEX idx_reports_status ON reports(status);
CREATE INDEX idx_reports_priority ON reports(priority);
CREATE INDEX idx_reports_created_at ON reports(created_at);
CREATE INDEX idx_reports_location ON reports USING GIST(location);

CREATE INDEX idx_embeddings_vector
ON embeddings USING hnsw(vector vector_cosine_ops);

CREATE INDEX idx_neighborhood_geometry
ON neighborhoods USING GIST(geometry);
```

---

# FUTURE TABLES

Phase 2:

- DigitalTwinSnapshot
- TrafficSimulation
- EnvironmentalMetrics
- MunicipalityProjects
- SystemMetrics
- AuditLogs
- FeatureFlags

---

# FINAL VISION

The database should act as the single source of truth for Tripoli Pulse AI, supporting geospatial intelligence, AI capabilities, citizen engagement, municipality operations, and future smart-city expansion while remaining scalable, maintainable, and developer-friendly.