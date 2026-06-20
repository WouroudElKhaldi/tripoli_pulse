Purpose: Rules every AI agent must obey.

# General Principles

Always:
- Write production-ready code
- Use TypeScript strict mode
- Create reusable components
- Add loading states
- Add empty states
- Add error states
- Write modular code
- Follow architecture rules

Never:
- Use any
- Hardcode values
- Duplicate code
- Ignore validation
- Ignore accessibility
- Create giant files


# Architecture Rules
Controllers
↓
Services
↓
Repositories
↓
Database

Never:
Controller → Database
Controller → Prisma


# Frontend Rules
Use:
- App Router
- Feature folders
- TanStack Query
- Zustand
- React Hook Form
- Zod

Never:
- Put API calls in components
- Put business logic inside pages
- Duplicate UI components


# Backend Rules
Every feature requires:

controller
service
repository
dto
entity
mapper
tests


# Database Rules
Always:
- UUID IDs
- Soft deletes
- Audit timestamps
- Transactions
- Indexes
- Proper relationships


# AI Rules
Always:
- Use adapters
- Make providers replaceable
- Queue heavy tasks
- Cache expensive operations
- Log AI operations


# Code Quality Rules
Max Component Size:
300 lines

Preferred:
150 lines

Max Function:
50 lines

Preferred:
20 lines


# Performance Rules
Always:
- Pagination
- Lazy loading
- Memoization
- Code splitting
- Virtualization


# Security Rules

Always:
- Validate input
- Sanitize output
- Rate limit APIs
- Hash passwords
- Protect secrets
- Use RBAC

