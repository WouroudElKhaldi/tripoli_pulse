# TRIPOLI PULSE AI
# USER FLOWS DOCUMENT
# VERSION 1.0

---

# PURPOSE

This document defines all user journeys inside Tripoli Pulse AI.

The objective is to ensure:

- Predictable navigation
- Consistent UX
- Clear implementation requirements
- Proper permissions
- Easy onboarding
- High engagement

---

# USER TYPES

1. Guest
2. Citizen
3. Municipality Operator
4. Municipality Admin
5. Super Admin

---

# APPLICATIONS

1. Informative Website
2. Mobile Application
3. Municipality Dashboard

---

==================================================
GUEST FLOWS
==================================================

# FLOW 1
Project Discovery

Landing Page
↓

Features Section
↓

How It Works
↓

AI Features
↓

Statistics
↓

Download App
↓

Contact

Goal:
Learn about the platform.

---

# FLOW 2
Download Mobile App

Landing Page
↓

Download CTA
↓

App Store / Play Store
↓

Install Application

Goal:
Convert visitors into users.

---

==================================================
CITIZEN FLOWS
==================================================

# FLOW 1
Registration

Open App
↓

Welcome Screens
↓

Register
↓

Enter Information
↓

Verify Account
↓

Complete Profile
↓

Home Dashboard

---

# Required Fields

First Name

Last Name

Email

Phone Number

Password

Confirm Password

Neighborhood

Optional Avatar

---

# FLOW 2
Login

Open App
↓

Login
↓

Email + Password
↓

JWT Authentication
↓

Home Dashboard

---

# FLOW 3
Forgot Password

Forgot Password
↓

Email
↓

Verification Code
↓

New Password
↓

Login

---

==================================================
REPORTING FLOW
==================================================

# FLOW 4
Create Report

Home
↓

Tap Report Button
↓

Choose Category
↓

Take Photo
↓

Description
↓

Select Location
↓

AI Analysis
↓

Review
↓

Submit
↓

Success Screen

---

# AI During Reporting

Image Analysis

Suggested Category

Suggested Severity

Suggested Tags

Duplicate Detection

Nearby Similar Reports

---

# Alternative Entry Points

Map
↓

Long Press
↓

Create Report

---

Camera Shortcut
↓

Capture
↓

Create Report

---

Neighborhood Screen
↓

Report Problem

---

# FLOW 5
Track Report

Home
↓

My Reports
↓

Report Details
↓

Timeline
↓

Municipality Updates
↓

Resolution

---

# FLOW 6
Receive Report Updates

Municipality Updates Status
↓

Notification Generated
↓

Push Notification
↓

Open Report Details

---

==================================================
MAP FLOWS
==================================================

# FLOW 7
Explore City

Home
↓

Explore Map
↓

Search
↓

Filters
↓

Select Marker
↓

View Details

---

# FLOW 8
View Neighborhood

Map
↓

Select Neighborhood
↓

Neighborhood Screen
↓

Statistics
↓

Scores
↓

Recent Reports
↓

Recommendations

---

==================================================
AI COPILOT FLOWS
==================================================

# FLOW 9
Urban Copilot

Home
↓

AI Assistant
↓

Ask Question
↓

Semantic Search
↓

LLM Response
↓

Recommendations
↓

Open Related Pages

---

Examples:

"What problems exist near me?"

"Why did my neighborhood score decrease?"

"Show road issues nearby."

---

==================================================
CAMPAIGN FLOWS
==================================================

# FLOW 10
Browse Campaigns

Home
↓

Campaigns
↓

Campaign List
↓

Campaign Details

---

# FLOW 11
Donate

Campaign
↓

Choose Amount
↓

Areeba Checkout
↓

Payment Success
↓

Receipt
↓

Campaign Updated

---

# FLOW 12
Donation History

Profile
↓

Donation History
↓

Transactions
↓

Receipts

---

==================================================
PROFILE FLOWS
==================================================

# FLOW 13
Edit Profile

Profile
↓

Settings
↓

Edit Information
↓

Save

---

# FLOW 14
Notification Preferences

Profile
↓

Settings
↓

Notifications
↓

Toggle Preferences
↓

Save

---

==================================================
OPTIONAL COMPANION FLOWS
==================================================

# FLOW 15
Pet Progression

Create Report
↓

Report Fixed
↓

XP Earned
↓

Pet Levels Up
↓

Reward Animation

---

# FLOW 16
Achievements

Profile
↓

Achievements
↓

Badges
↓

Rewards
↓

Share Achievement

---

==================================================
MUNICIPALITY OPERATOR FLOWS
==================================================

# FLOW 17
Dashboard Login

Login
↓

2FA
↓

Dashboard

---

# FLOW 18
Review Reports

Dashboard
↓

Reports
↓

Filters
↓

Open Report
↓

Review
↓

Verify

---

# FLOW 19
Assign Report

Report
↓

Assign Team
↓

Add Notes
↓

Save

---

# FLOW 20
Update Status

Report
↓

Status
↓

Update
↓

Notification Sent

---

==================================================
MAP OPERATIONS FLOWS
==================================================

# FLOW 21
Operations Center

Dashboard
↓

Map
↓

Layers
↓

Filters
↓

Select Reports
↓

Bulk Actions

---

# FLOW 22
Heatmaps

Dashboard
↓

Heatmaps
↓

Select Category
↓

Generate Visualization
↓

Insights

---

==================================================
ANALYTICS FLOWS
==================================================

# FLOW 23
Analytics Dashboard

Dashboard
↓

Analytics
↓

KPIs
↓

Charts
↓

Export

---

# FLOW 24
Predictions

Dashboard
↓

Predictions
↓

Risk Zones
↓

Recommendations
↓

Action Planning

---

==================================================
CAMPAIGN MANAGEMENT FLOWS
==================================================

# FLOW 25
Create Campaign

Dashboard
↓

Campaigns
↓

Create
↓

Information
↓

Publish

---

# FLOW 26
Payment Monitoring

Dashboard
↓

Payments
↓

Transactions
↓

Analytics
↓

Export

---

==================================================
SUPER ADMIN FLOWS
==================================================

# FLOW 27
Platform Management

Admin Dashboard
↓

Users
↓

Roles
↓

Configurations
↓

Audit Logs
↓

System Health

---

==================================================
ERROR FLOWS
==================================================

Authentication Failure
↓

Display Error
↓

Retry

---

AI Failure
↓

Fallback Response
↓

Continue Application

---

Payment Failure
↓

Show Error
↓

Retry Payment

---

Map Failure
↓

Cached Data
↓

Retry

---

==================================================
SUCCESS FLOWS
==================================================

Report Submitted
↓

Confirmation
↓

AI Summary
↓

Track Report

---

Donation Completed
↓

Receipt
↓

Campaign Progress Updated

---

Issue Resolved
↓

Notification
↓

Neighborhood Score Updated
↓

Companion Reward (Optional)

---

==================================================
NAVIGATION STRUCTURE
==================================================

MOBILE

Auth
Home
Map
Report
Campaigns
AI Assistant
Notifications
Profile

---

DASHBOARD

Overview
Reports
Map
Analytics
Predictions
Recommendations
Campaigns
Payments
Users
Settings

---

WEBSITE

Landing
Features
AI Showcase
Statistics
How It Works
Download
About
Contact

---

# FINAL VISION

Every flow inside Tripoli Pulse AI should minimize friction, encourage participation, and make citizens feel that reporting, donating, and engaging with their city produces visible and meaningful impact.